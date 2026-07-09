#!/usr/bin/env node
/**
 * Per-env doc generator.
 *
 *   docs/{env}/api/high-level/   one MDX per OpenAPI endpoint, grouped per tag.
 *                                Source: openapi/{env}-public.yaml (or
 *                                openapi/ovok-api-public.yaml as a primary fallback).
 *
 *   docs/{env}/api/fhir/         one MDX per FHIR R5 resource, plus custom ops
 *                                from that env's spec. Resource set is the same
 *                                across envs (FHIR R5 is universal).
 *
 * Each env gets a completely independent docs tree. No union, no per-endpoint
 * variants, no availability badges. The env switcher in the UI navigates
 * between equivalent paths in different env folders.
 *
 * Today only `dev` is released (per the "release alpha now" plan). When
 * alpha/beta/final come online via the merge train, their per-env specs
 * become available and this script emits their folders too.
 */

import { readFileSync, writeFileSync, rmSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');

const PRIMARY_SPEC    = join(REPO_ROOT, 'openapi/ovok-api-public.yaml');
const ENV_SPEC_PATHS  = {
  alpha: join(REPO_ROOT, 'openapi/alpha-public.yaml'),
  beta:  join(REPO_ROOT, 'openapi/beta-public.yaml'),
  final: join(REPO_ROOT, 'openapi/final-public.yaml'),
};
const FHIR_DATA_PATH  = join(REPO_ROOT, 'data/fhir-r5-resources.json');
const FHIR_CACHE      = join(REPO_ROOT, '.fhir-cache/package');
const DOCS_ROOT       = join(REPO_ROOT, 'docs');
const STATIC_OPENAPI  = join(REPO_ROOT, 'static/openapi');
const STATIC_DATA     = join(REPO_ROOT, 'static/data');

const ALL_ENVS_ORDERED = ['alpha', 'beta', 'final'];
const HTTP_METHODS = new Set(['get', 'post', 'put', 'patch', 'delete', 'head', 'options']);
const FHIR_PATH_PREFIXES = ['/fhir/', '/R4/', '/R5/'];
const isFhirCustomOpPath = (p) => FHIR_PATH_PREFIXES.some((prefix) => p.startsWith(prefix));

// ─── shared helpers ───────────────────────────────────────────────────
function escapeMdx(text) {
  if (!text) return '';
  const codeRegion = /(```[\s\S]*?```|`[^`\n]+`)/g;
  let out = '';
  let lastIndex = 0;
  let m;
  while ((m = codeRegion.exec(text)) !== null) {
    out += escapeNarrative(text.slice(lastIndex, m.index));
    out += m[0];
    lastIndex = codeRegion.lastIndex;
  }
  out += escapeNarrative(text.slice(lastIndex));
  return out;
}

function escapeNarrative(text) {
  return text
    .replace(/<br\s*\/?>/gi, '<br />')
    .replace(/<hr\s*\/?>/gi, '<hr />')
    .replace(/<(?![a-zA-Z/])/g, '&lt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    .replace(/\]\(([a-zA-Z][a-zA-Z0-9_-]*\.html(?:#[^)]*)?)\)/g, '](https://hl7.org/fhir/R5/$1)');
}

/**
 * MDX 3 evaluates `{ident}` as a JSX expression anywhere outside code
 * blocks — including markdown headings. Endpoint paths like `/{path}` or
 * `/{typeSlug}/items` break the SSR build with "ident is not defined".
 * Use this for short strings (titles, paths) where escapeMdx's
 * code-region preservation isn't needed.
 */
function escapeBraces(text) {
  return String(text ?? '').replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
}

function slug(s) {
  return String(s)
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-zA-Z])(\d)/g, '$1-$2')
    .replace(/(\d)([a-zA-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Sidebar labels need to fit a ~280px sidebar at most viewports. 42 was
 * too aggressive — anything past "[Early Access] Wearable…" got cut off,
 * including the type of the operation it actually describes. 90 lets
 * most real titles render in full and still keeps the truly long
 * outliers from blowing up the column.
 */
function shortenLabel(s, max = 90) {
  return s.length <= max ? s : s.slice(0, max - 1) + '…';
}

/**
 * Compute the canonical handler-key for an operation. NestJS Swagger
 * emits a separate operation per HTTP method (`_get`, `_post`, …) when
 * a route is registered via `@All(...)`, and a separate operation per
 * version (`[0]`, `[1]_v1`, …) when `@Version([NEUTRAL, '1', '2'])` is
 * used. Both patterns produce duplicate-feeling pages with identical
 * titles and descriptions; collapsing on the stripped id puts them all
 * under one page. Two operations with the same stripped id but
 * different summaries DO NOT collapse — different summaries imply
 * different logical handlers that happen to share a method name.
 */
function stripHandlerSuffix(id) {
  let result = id.replace(/\[\d+\]/g, '').replace(/_v_?\d+$/i, '');
  // HTTP-method suffix (from @All() fanout) ONLY strips when the
  // operationId has the form `Controller_handlerName_<httpMethod>` —
  // i.e. 3+ underscore-separated parts. Controller class names are
  // CamelCase with no underscores, so a 2-part id (e.g.
  // `WearableCredentialsController_get`) has the method name as the
  // handler itself, not as a fanout suffix. Stripping there would
  // incorrectly merge a literal `get()` handler with a sibling
  // `put()` handler.
  result = result.replace(
    /^(.+_.+)_(get|post|put|patch|delete|head|options|search|trace|connect)$/i,
    '$1',
  );
  return result;
}

/**
 * Count how many ops in the spec share the same stripped operationId.
 * Used by the stability emitter to mirror emitHighLevelForEnv's "only
 * collapse the slug when there's actually a group to collapse" rule,
 * so cross-page hrefs always land on the page that actually got
 * written.
 */
function stripHandlerSuffixGroupCount(spec, strippedId) {
  let count = 0;
  for (const methods of Object.values(spec.paths ?? {})) {
    for (const [method, op] of Object.entries(methods)) {
      if (!HTTP_METHODS.has(method)) continue;
      const raw = op.operationId || `${method}-${methods.path}`;
      if (stripHandlerSuffix(raw) === strippedId) count++;
    }
  }
  return count;
}

const WRITTEN_FILES = new Set();

function ensureDir(p) { mkdirSync(p, { recursive: true }); }

function writeIfChanged(path, content) {
  WRITTEN_FILES.add(path);
  if (existsSync(path)) {
    try { if (readFileSync(path, 'utf8') === content) return false; } catch { /* fall through */ }
  }
  writeFileSync(path, content);
  return true;
}

function sweepOrphans(dir) {
  if (!existsSync(dir)) return 0;
  let removed = 0;
  const stack = [dir];
  const dirsSeen = [];
  while (stack.length) {
    const cur = stack.pop();
    dirsSeen.push(cur);
    let entries;
    try { entries = readdirSync(cur, { withFileTypes: true }); } catch { continue; }
    for (const ent of entries) {
      const full = join(cur, ent.name);
      if (ent.isDirectory()) stack.push(full);
      else if (!WRITTEN_FILES.has(full)) {
        try { rmSync(full); removed++; } catch {}
      }
    }
  }
  // Second pass, deepest-first: any directory left empty after the file
  // sweep is a stale tag folder (e.g. the legacy CMS dir from before that
  // tag was demoted to Internal). Remove them so they don't linger on
  // contributors' filesystems and confuse future regens.
  for (const d of dirsSeen.reverse()) {
    if (d === dir) continue;
    try {
      const remaining = readdirSync(d);
      if (remaining.length === 0) rmSync(d, { recursive: false });
    } catch {}
  }
  return removed;
}

function makeDeref(spec) {
  function resolveRef(ref) {
    return ref.replace(/^#\//, '').split('/').reduce((obj, key) => obj?.[key], spec);
  }
  function deref(node, seen = new WeakSet()) {
    if (!node || typeof node !== 'object') return node;
    if (seen.has(node)) return node;
    seen.add(node);
    if (node.$ref) return deref(resolveRef(node.$ref), seen);
    if (Array.isArray(node)) return node.map((item) => deref(item, seen));
    const out = {};
    for (const [k, v] of Object.entries(node)) out[k] = deref(v, seen);
    return out;
  }
  return deref;
}

// ─── per-env High-Level + custom FHIR ops ─────────────────────────────
function emitHighLevelForEnv(envKey, spec) {
  const deref = makeDeref(spec);
  const envRoot = join(DOCS_ROOT, envKey);
  const outHigh = join(envRoot, 'api/high-level');
  const outFhirCustom = join(envRoot, 'api/fhir/custom-operations');

  const tagGroups = new Map();
  const fhirCustomOps = [];
  for (const [path, methods] of Object.entries(spec.paths ?? {})) {
    for (const [method, op] of Object.entries(methods)) {
      if (!HTTP_METHODS.has(method)) continue;
      // Skip Wearables: they were pulled out of the docs on 2026-07-09 and
      // should never regenerate. Match either operationId (e.g.
      // WearablesController_...) or the first tag ("Wearables (Early Access)").
      const controllerName = op.operationId ?? '';
      const tagName = (op.tags?.[0] ?? '').toLowerCase();
      if (/wearable/i.test(controllerName) || tagName.includes('wearable')) continue;
      const entry = { method: method.toUpperCase(), path, op };
      if (isFhirCustomOpPath(path)) { fhirCustomOps.push(entry); continue; }
      const tag = (op.tags?.[0] ?? 'Uncategorized').trim();
      if (!tagGroups.has(tag)) tagGroups.set(tag, []);
      tagGroups.get(tag).push(entry);
    }
  }
  const sortedTags = [...tagGroups.keys()].sort((a, b) => a.localeCompare(b));

  function renderParams(params) {
    if (!params || params.length === 0) return '';
    const rows = params.map((p) => {
      const sch = deref(p.schema) ?? {};
      const type = sch.type ?? (sch.$ref ? sch.$ref.split('/').pop() : '—');
      const required = p.required ? '**yes**' : 'no';
      return `| \`${p.name}\` | ${p.in} | \`${type}\` | ${required} | ${escapeMdx(p.description ?? '').replace(/\n+/g, ' ')} |`;
    });
    return ['', '## Parameters', '', '| Name | In | Type | Required | Description |', '| --- | --- | --- | --- | --- |', ...rows, ''].join('\n');
  }
  function renderRequestBody(body) {
    if (!body) return '';
    const b = deref(body);
    const blocks = ['', '## Request body', ''];
    if (b.description) blocks.push(escapeMdx(b.description), '');
    for (const [mime, media] of Object.entries(b.content ?? {})) {
      blocks.push(`**Content-Type:** \`${mime}\``, '');
      const s = deref(media.schema);
      if (s?.type === 'object' && s.properties) {
        blocks.push(Object.entries(s.properties).map(([n, p]) => {
          const dp = deref(p) ?? {};
          const t = dp.type ?? (p.$ref ? p.$ref.split('/').pop() : '—');
          const req = s.required?.includes(n) ? ' **(required)**' : '';
          const desc = dp.description ? ` — ${escapeMdx(dp.description).replace(/\n+/g, ' ')}` : '';
          return `- \`${n}\`: \`${t}\`${req}${desc}`;
        }).join('\n'), '');
      } else if (s?.type === 'array') {
        const inner = deref(s.items) ?? {};
        blocks.push(`Array of \`${inner.type ?? 'object'}\``, '');
      } else if (s?.type) {
        blocks.push(`\`${s.type}\``, '');
      }
    }
    return blocks.join('\n');
  }
  /**
   * Render a response/request schema as a nested field list. Walks two
   * levels deep so a property that is itself `array of <Object>` or a
   * nested `object` enumerates its inner fields right under the parent
   * (indented). Past two levels we stop and just show the named ref,
   * which keeps the page bounded and avoids printing every leaf of a
   * deeply nested DTO.
   */
  function renderSchemaFields(schema, depth = 0) {
    if (!schema) return '';
    const s = deref(schema);
    if (!s) return '';
    if (s.type === 'array') {
      const inner = deref(s.items) ?? {};
      const innerName = s.items?.$ref ? s.items.$ref.split('/').pop() : (inner.type ?? 'object');
      if (depth < 2 && inner.type === 'object' && inner.properties) {
        return `Array of \`${innerName}\`:\n\n${renderSchemaFields(inner, depth + 1)}`;
      }
      return `Array of \`${innerName}\``;
    }
    if (s.type === 'object' && s.properties) {
      const required = new Set(s.required ?? []);
      const lines = Object.entries(s.properties).flatMap(([name, prop]) => {
        const p = deref(prop) ?? {};
        const refName = prop.$ref ? prop.$ref.split('/').pop() : null;

        // Compute the type label. The previous expression used `??` over
        // `p.type` which short-circuited the array-of-X case — when
        // `p.type === 'array'`, JS kept 'array' instead of falling through
        // to the items-aware branches, so customers saw `connections: array`
        // with no element shape.
        let type;
        if (refName) {
          type = refName;
        } else if (p.type === 'array') {
          if (p.items?.$ref) {
            type = `${p.items.$ref.split('/').pop()}[]`;
          } else {
            const innerDeref = deref(p.items) ?? {};
            type = `${innerDeref.type ?? 'object'}[]`;
          }
        } else {
          type = p.type ?? '—';
        }

        const req = required.has(name) ? ' **(required)**' : '';
        const desc = p.description ? ` — ${escapeMdx(p.description).replace(/\n+/g, ' ')}` : '';
        const primary = `- \`${name}\`: \`${type}\`${req}${desc}`;

        // One level of nested expansion: when the property itself is a
        // nested object with properties, or an array of objects with
        // properties, recurse and indent so the inner shape sits under
        // the parent. Past depth 1 we stop to keep pages bounded.
        if (depth >= 1) return [primary];

        const indent = (block) => block.split('\n').map((line) => `  ${line}`).join('\n');

        if (p.type === 'object' && p.properties) {
          const nested = renderSchemaFields(p, depth + 1);
          if (nested) return [primary, indent(nested)];
        }
        if (p.type === 'array') {
          const inner = deref(p.items) ?? {};
          if (inner.type === 'object' && inner.properties) {
            const nested = renderSchemaFields(inner, depth + 1);
            if (nested) return [primary, indent(nested)];
          }
        }
        return [primary];
      });
      return lines.join('\n');
    }
    if (s.type) return `\`${s.type}\``;
    return '';
  }

  function renderResponses(responses) {
    if (!responses) return '';

    // Status code overview table — derefs each response for its
    // description text (in case a response itself is a $ref). 4xx/5xx
    // descriptions come from a global decorator; success codes rarely
    // get an upstream description, so fill those rows with a sensible
    // default instead of leaving an empty cell next to the status code.
    const defaultDescriptionFor = (code) => {
      const n = Number(code);
      if (n >= 200 && n < 300) return 'Success.';
      if (n >= 300 && n < 400) return 'Redirect.';
      return '';
    };
    const rows = Object.entries(responses).map(([code, res]) => {
      const r = deref(res);
      const text = (r.description ?? '').trim() || defaultDescriptionFor(code);
      return `| \`${code}\` | ${escapeMdx(text).replace(/\n+/g, ' ')} |`;
    });
    const blocks = ['', '## Responses', '', '| Code | Description |', '| --- | --- |', ...rows, ''];

    // Per-content schema — iterate the ORIGINAL responses (not derefed)
    // so we can still read media.schema.$ref to surface the DTO name in
    // the heading. The recursive deref rebuilds the tree and strips the
    // $ref attribute from the rendered output, so we have to peek at it
    // here before resolving.
    //
    // 4xx/5xx schemas are skipped — they're all the standard NestJS
    // HttpException shape (statusCode/message/error) and would repeat
    // identically on every page.
    for (const [code, res] of Object.entries(responses)) {
      if (/^[45]\d\d$/.test(code)) continue;
      const content = res?.content ?? {};
      for (const [mime, media] of Object.entries(content)) {
        const rawRef = media.schema?.$ref;
        const refName = rawRef ? rawRef.split('/').pop() : null;
        const s = deref(media.schema);
        if (!s) continue;
        const heading = refName
          ? `### \`${code}\` → \`${refName}\` (\`${mime}\`)`
          : `### \`${code}\` (\`${mime}\`)`;
        blocks.push('', heading, '');

        if (s.description) {
          blocks.push(escapeMdx(s.description), '');
        }

        const fields = renderSchemaFields(s);
        if (fields) blocks.push(fields, '');

        if (s.additionalProperties === true) {
          blocks.push('_Additional properties allowed._', '');
        }

        if (s.example !== undefined) {
          blocks.push('**Example**', '', '```json', JSON.stringify(s.example, null, 2), '```', '');
        }
      }
    }

    return blocks.join('\n');
  }

  ensureDir(outHigh);
  const hlSidebar = [{ type: 'doc', id: `api/high-level/index`, label: 'Overview' }];
  const firstEndpointSlugByTag = new Map();

  for (const tag of sortedTags) {
    const ops = tagGroups.get(tag);
    ops.sort((a, b) => (a.op.summary ?? a.path).localeCompare(b.op.summary ?? b.path));
    const tagSlug = slug(tag);
    const tagDir = join(outHigh, tagSlug);
    ensureDir(tagDir);

    // Group ops by logical handler. See stripHandlerSuffix at module
    // scope for the rationale — short version: collapse the @All and
    // @Version([…]) fanout into a single page that lists every
    // (method, path) variant in the hero, identical to the
    // R4/R5/neutral grouping already used for FHIR custom ops.
    const HTTP_METHOD_ORDER = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options'];
    const methodOrder = (m) => {
      const i = HTTP_METHOD_ORDER.indexOf(m.toLowerCase());
      return i === -1 ? HTTP_METHOD_ORDER.length : i;
    };

    const byHandler = new Map();
    for (const item of ops) {
      const opIdHint = item.op.operationId || `${item.method}-${item.path}`;
      const stripped = stripHandlerSuffix(opIdHint);
      const summary = (item.op.summary ?? '').trim();
      const key = `${stripped}::${summary}`;
      if (!byHandler.has(key)) byHandler.set(key, []);
      byHandler.get(key).push(item);
    }

    const opItems = [];
    let firstId = null;
    for (const variants of byHandler.values()) {
      variants.sort((a, b) => {
        // Shortest path first → version-neutral leads its numbered
        // siblings; within identical paths, GET/POST/PUT/... order.
        const dp = a.path.length - b.path.length;
        if (dp !== 0) return dp;
        const dm = methodOrder(a.method) - methodOrder(b.method);
        if (dm !== 0) return dm;
        return a.path.localeCompare(b.path);
      });
      const canonical = variants[0];
      const { method, path, op } = canonical;
      // Only collapse the slug when the grouping ACTUALLY merged
      // variants. Standalone endpoints whose operationId happens to
      // carry a `_vN` suffix (e.g. `AuthLoginController_login_v2` —
      // single endpoint, no legacy v1 sibling) keep their original
      // slug, so bookmarks survive the suffix-strip and the hand-
      // written CMS/walkthrough links don't 404.
      const opIdRaw = op.operationId || `${method}-${path}`;
      const opIdHint = variants.length > 1 ? stripHandlerSuffix(opIdRaw) : opIdRaw;
      const opSlug = slug(opIdHint) || 'endpoint';
      const title = op.summary?.trim() || `${method} ${path}`;
      const opLabel = shortenLabel(title);
      const desc = (op.description && String(op.description).split('\n')[0].trim()) || `${method} ${path}`;

      // Hero rows — one per variant. Single-variant endpoints get a
      // compact single-row block; multi-variant ones list every method/
      // path pair so the customer sees the full surface at a glance.
      const variantRows = variants
        .map((v) => `  <div className="endpoint-hero__path-row"><span className="api-method ${v.method.toLowerCase()}">${v.method}</span> <code className="endpoint-hero__path">{${JSON.stringify(v.path)}}</code></div>`)
        .join('\n');

      const body = [
        '---',
        `title: ${JSON.stringify(title)}`,
        `sidebar_label: ${JSON.stringify(opLabel)}`,
        `description: ${JSON.stringify(desc.slice(0, 160))}`,
        '---',
        '',
        `# ${escapeBraces(title)}`,
        '',
        '<div className="endpoint-hero">',
        '',
        '<div className="endpoint-hero__paths">',
        variantRows,
        '</div>',
        '',
        '<ApiBase inline={false} />',
        '',
        '</div>',
        '',
      ];
      if (op.description) body.push(escapeMdx(op.description), '');
      if (op.deprecated) body.push(':::warning Deprecated', 'This endpoint is deprecated. Migrate before the next major release.', ':::', '');
      body.push(renderParams(op.parameters));
      body.push(renderRequestBody(op.requestBody));
      body.push(renderResponses(op.responses));
      writeIfChanged(join(tagDir, `${opSlug}.mdx`), body.join('\n'));
      const docId = `api/high-level/${tagSlug}/${opSlug}`;
      opItems.push({ type: 'doc', id: docId, label: opLabel });
      if (!firstId) { firstId = docId; firstEndpointSlugByTag.set(tag, `${tagSlug}/${opSlug}`); }
    }
    hlSidebar.push({ type: 'category', label: tag, link: { type: 'doc', id: firstId }, collapsed: true, items: opItems });
  }

  const tagSummary = sortedTags
    .map((t) => `- **[${t}](/${envKey}/api/high-level/${firstEndpointSlugByTag.get(t)})** — ${tagGroups.get(t).length} endpoint${tagGroups.get(t).length === 1 ? '' : 's'}`)
    .join('\n');

  writeIfChanged(join(outHigh, 'index.mdx'),
`---
title: High Level API
sidebar_position: 1
sidebar_label: Overview
description: The Ovok platform API on the ${envKey} tier — auth, projects, content, billing, devices, signals.
---

# High Level API

The convenience layer that sits in front of the FHIR data plane.
Platform concepts — projects, members, billing, content, devices,
signals — exposed as a coherent REST surface.

<ApiBase inline={false} />

## Areas

${tagSummary}

## Stability

Not every endpoint is at the same release stage. The
[API stability](/${envKey}/api/stability) page lists everything tagged
**Early Access** or **Deprecated** on this tier so you can scope
production integrations cleanly.

## Tier

You're viewing the **${envKey}** tier. Switch tiers from the navbar to
see the equivalent docs for another release surface.

The machine-readable spec for this tier is at
[\`/openapi/${envKey}-public.yaml\`](pathname:///openapi/${envKey}-public.yaml).
`);

  writeIfChanged(join(outHigh, 'sidebar.json'), JSON.stringify(hlSidebar, null, 2));

  // ── FHIR custom operations from this env's spec ──
  ensureDir(outFhirCustom);
  const byHandler = new Map();
  for (const entry of fhirCustomOps) {
    const opid = entry.op.operationId ?? `${entry.method}-${entry.path}`;
    const k = opid.replace(/\[\d+\]$/, '');
    if (!byHandler.has(k)) byHandler.set(k, []);
    byHandler.get(k).push(entry);
  }
  const customOpsSidebar = [];
  let firstCustomId = null;
  for (const [key, variants] of byHandler.entries()) {
    const canonical = variants.find((v) => v.path.includes('/R5/')) ?? variants[0];
    const { method, path, op } = canonical;
    const opSlug = slug(key);
    const title = op.summary?.trim() || `${method} ${path}`;
    const pathLines = variants
      // Same JSX-string-expression trick as the single-path hero
      // above — MDX would otherwise render the entity-encoded braces
      // literally inside the <code> children.
      .map((v) => `  <div className="endpoint-hero__path-row"><span className="api-method ${v.method.toLowerCase()}">${v.method}</span> <code className="endpoint-hero__path">{${JSON.stringify(v.path)}}</code></div>`)
      .join('\n');
    const body = [
      '---',
      `title: ${JSON.stringify(title)}`,
      `sidebar_label: ${JSON.stringify(shortenLabel(title))}`,
      `description: ${JSON.stringify(((op.description && op.description.split('\n')[0]) || `${method} ${path}`).slice(0, 160))}`,
      '---',
      '',
      `# ${escapeBraces(title)}`,
      '',
      '<div className="endpoint-hero">',
      '',
      '<div className="endpoint-hero__paths">',
      pathLines,
      '</div>',
      '',
      '<ApiBase inline={false} />',
      '',
      '</div>',
      '',
    ];
    if (op.description) body.push(escapeMdx(op.description), '');
    body.push(renderParams(op.parameters));
    body.push(renderRequestBody(op.requestBody));
    body.push(renderResponses(op.responses));
    writeIfChanged(join(outFhirCustom, `${opSlug}.mdx`), body.join('\n'));
    const id = `api/fhir/custom-operations/${opSlug}`;
    customOpsSidebar.push({ type: 'doc', id, label: shortenLabel(title) });
    if (!firstCustomId) firstCustomId = id;
  }
  if (customOpsSidebar.length > 0) {
    writeIfChanged(join(outFhirCustom, 'index.mdx'),
`---
title: Custom operations
sidebar_label: Overview
description: Ovok-specific operations layered on top of the FHIR API on the ${envKey} tier.
---

# Custom FHIR operations

Ovok layers a handful of named operations on top of standard FHIR
resources. Each is mounted at \`/fhir/\`, \`/fhir/R4/\` and \`/fhir/R5/\`.

<ApiBase inline={false} />

## Operations
${customOpsSidebar.map((s) => `- [${escapeBraces(s.label)}](/${envKey}/api/fhir/custom-operations/${s.id.split('/').pop()})`).join('\n')}
`);
  }

  return {
    tags: sortedTags.length,
    endpoints: sortedTags.reduce((n, t) => n + tagGroups.get(t).length, 0),
    customOps: customOpsSidebar.length,
    customOpsSidebar,
    firstCustomId,
  };
}

/**
 * Aggregated lifecycle/stability page. Walks every endpoint in the env
 * spec and buckets by:
 *   - Deprecated  → `op.deprecated === true`
 *   - Early Access → summary starts with `[Early Access]`
 *   - GA          → everything else (just summarised, not listed)
 *
 * The page deliberately doesn't enumerate the GA endpoints — that's
 * what the rest of the docs is. The point of this page is to make the
 * non-stable surface findable without grepping the spec.
 */
function emitStabilityPage(envKey, spec) {
  const outApi = join(DOCS_ROOT, envKey, 'api');
  ensureDir(outApi);

  // Walk every op once, categorise, capture the slug pair we'll need
  // to deep-link into the per-endpoint MDX. The slug logic must match
  // emitHighLevelForEnv exactly — same `slug(tag)` / `slug(opIdHint)`
  // recipe — or the links 404.
  const deprecated = [];
  const earlyAccess = [];
  let gaCount = 0;

  for (const [path, methods] of Object.entries(spec.paths ?? {})) {
    for (const [method, op] of Object.entries(methods)) {
      if (!HTTP_METHODS.has(method)) continue;
      // Skip Wearables — see filter in emitHighLevelForEnv.
      const controllerName = op.operationId ?? '';
      const firstTag = (op.tags?.[0] ?? '').toLowerCase();
      if (/wearable/i.test(controllerName) || firstTag.includes('wearable')) continue;
      const summary = (op.summary ?? '').trim();
      const tag = (op.tags ?? []).find((t) => !['Public', 'Internal', 'Deprecated'].includes(t)) ?? 'Uncategorized';
      const tagSlug = slug(tag);
      // Match the slug rule from emitHighLevelForEnv: strip the handler
      // suffix ONLY for ops whose handler key has >1 variants in the
      // spec. We can't tell that from a single op in isolation, so we
      // probe globally — count how many ops share the stripped id;
      // collapse only when at least two do.
      const opIdRaw = op.operationId || `${method}-${path}`;
      const stripped = stripHandlerSuffix(opIdRaw);
      const sameGroupCount = stripHandlerSuffixGroupCount(spec, stripped);
      const opSlug = slug(sameGroupCount > 1 ? stripped : opIdRaw) || 'endpoint';
      const isFhirCustomOp = isFhirCustomOpPath(path);
      const href = isFhirCustomOp
        ? `/${envKey}/api/fhir/custom-operations/${opSlug}`
        : `/${envKey}/api/high-level/${tagSlug}/${opSlug}`;
      const row = {
        method: method.toUpperCase(),
        path,
        title: summary || `${method.toUpperCase()} ${path}`,
        tag,
        href,
      };
      if (op.deprecated) deprecated.push(row);
      else if (/^\[Early Access\]/i.test(summary)) earlyAccess.push(row);
      else gaCount++;
    }
  }

  const formatRow = ({ method, path, title, tag, href }) =>
    `| [${escapeBraces(title.replace(/^\[Early Access\]\s*/i, ''))}](${href}) | \`${method}\` \`${escapeBraces(path)}\` | ${tag} |`;

  const section = (heading, rows, empty) => {
    if (rows.length === 0) {
      return `### ${heading}\n\n_${empty}_\n`;
    }
    return [
      `### ${heading}`,
      '',
      '| Endpoint | Method | Tag |',
      '| --- | --- | --- |',
      ...rows.map(formatRow),
      '',
    ].join('\n');
  };

  const body = [
    '---',
    'title: API stability',
    'sidebar_position: 2',
    'sidebar_label: API stability',
    `description: Lifecycle status of every Ovok ${envKey}-tier endpoint — what's stable, what's early access, what's on the way out.`,
    '---',
    '',
    '# API stability',
    '',
    `Lifecycle status of every endpoint exposed on the **${envKey}** tier. Anything not listed below is considered general availability — stable enough to build production integrations against.`,
    '',
    '## Stability levels',
    '',
    '- **General availability** — covered by the standard release cadence. Breaking changes go through deprecation first.',
    '- **Early Access** — works end-to-end, but the request / response shapes can change without a deprecation window. Safe to prototype against; not yet recommended for production criticality.',
    '- **Deprecated** — still functional, scheduled for removal. Migrate to the replacement noted on the endpoint page.',
    '',
    `## Summary`,
    '',
    `| Status | Endpoints |`,
    `| --- | --- |`,
    `| General availability | ${gaCount} |`,
    `| Early Access | ${earlyAccess.length} |`,
    `| Deprecated | ${deprecated.length} |`,
    '',
    `_Counts cover the **${envKey}** tier. Switch tiers from the navbar to see the equivalent stability map for another release surface._`,
    '',
    '## Detail',
    '',
    section('Early Access', earlyAccess, 'No endpoints currently in Early Access on this tier.'),
    section('Deprecated', deprecated, 'No endpoints currently marked deprecated on this tier.'),
  ].join('\n');

  writeIfChanged(join(outApi, 'stability.mdx'), body);

  return {
    earlyAccess: earlyAccess.length,
    deprecated: deprecated.length,
    gaCount,
  };
}

// ─── FHIR R5 resources (from cache; identical across envs) ────────────
const MATURITY_LABEL = { 0: 'Draft', 1: 'Trial Use 1', 2: 'Trial Use 2', 3: 'Trial Use 3', 4: 'Trial Use 4', 5: 'Normative' };
const FMM_EXT = 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm';

function loadFhirResources() {
  if (!existsSync(FHIR_CACHE)) {
    throw new Error(`FHIR cache missing at ${FHIR_CACHE} — run scripts/fetch-fhir-r5.mjs first`);
  }
  const idx = JSON.parse(readFileSync(join(FHIR_CACHE, '.index.json'), 'utf8'));
  const catalog = JSON.parse(readFileSync(FHIR_DATA_PATH, 'utf8'));
  const categoryOf = Object.fromEntries(catalog.resources.map((r) => [r.name, r.category]));

  const searchByBase = new Map();
  for (const f of idx.files) {
    if (f.resourceType !== 'SearchParameter') continue;
    const sp = JSON.parse(readFileSync(join(FHIR_CACHE, f.filename), 'utf8'));
    for (const base of sp.base ?? []) {
      if (!searchByBase.has(base)) searchByBase.set(base, []);
      searchByBase.get(base).push({
        code: sp.code,
        type: sp.type,
        description: (sp.description ?? '').replace(/^Multiple Resources:[\s\S]*?\* \[[^\]]+\][^:]*:\s*/m, '').split('\n')[0],
      });
    }
  }

  const resources = [];
  const seen = new Set();
  for (const f of idx.files) {
    if (f.resourceType !== 'StructureDefinition' || f.kind !== 'resource') continue;
    if (f.type === 'Element' || f.type === 'BackboneElement') continue;
    const sd = JSON.parse(readFileSync(join(FHIR_CACHE, f.filename), 'utf8'));
    if (sd.abstract) continue;
    if (sd.derivation && sd.derivation !== 'specialization') continue;
    const name = sd.type ?? sd.id;
    if (!name || seen.has(name)) continue;
    seen.add(name);
    const fmm = (sd.extension ?? []).find((e) => e.url === FMM_EXT)?.valueInteger ?? 0;
    resources.push({
      name,
      description: sd.description ?? '',
      maturity: fmm,
      elements: extractTopLevelElements(sd),
      searchParams: searchByBase.get(name) ?? [],
      category: categoryOf[name] ?? 'Other',
    });
  }
  resources.sort((a, b) => a.name.localeCompare(b.name));
  return { resources, categoryOrder: Object.keys(catalog.categories), categoryBlurbs: catalog.categories };
}

function extractTopLevelElements(sd) {
  const elements = sd.snapshot?.element ?? sd.differential?.element ?? [];
  const skip = new Set(['id', 'meta', 'implicitRules', 'language', 'text', 'contained', 'extension', 'modifierExtension']);
  const out = [];
  for (const e of elements) {
    const id = e.id ?? e.path;
    if (!id) continue;
    const parts = id.split('.');
    if (parts.length !== 2) continue;
    if (skip.has(parts[1])) continue;
    out.push({
      name: parts[1],
      types: (e.type ?? []).map((t) => t.code).filter(Boolean),
      cardinality: `${e.min ?? 0}..${e.max ?? '*'}`,
      short: e.short ?? '',
      isModifier: !!e.isModifier,
      mustSupport: !!e.mustSupport,
    });
  }
  return out;
}

function fhirResourcePage(r, envKey) {
  const { name, category, maturity, elements, searchParams, description } = r;
  const elementRows = elements.length === 0
    ? '_No top-level elements beyond the resource base._'
    : [
        '| Element | Type(s) | Cardinality | Description |',
        '| --- | --- | --- | --- |',
        ...elements.map((e) => {
          const typeCol = e.types.length ? e.types.map((t) => `\`${t}\``).join(' / ') : '—';
          const tags = [e.isModifier ? ' _modifier_' : '', e.mustSupport ? ' _must-support_' : ''].join('');
          return `| \`${e.name}\` | ${typeCol} | \`${e.cardinality}\` | ${escapeMdx(e.short).replace(/\n+/g, ' ')}${tags} |`;
        }),
      ].join('\n');
  const searchRows = searchParams.length === 0
    ? '_No resource-specific search parameters defined._'
    : [
        '| Parameter | Type | Description |',
        '| --- | --- | --- |',
        ...[...searchParams].sort((a, b) => a.code.localeCompare(b.code))
          .map((sp) => `| \`${sp.code}\` | \`${sp.type}\` | ${escapeMdx(sp.description).replace(/\n+/g, ' ').slice(0, 200)} |`),
      ].join('\n');
  return `---
title: ${name}
sidebar_label: ${name}
description: ${JSON.stringify((description.split('\n')[0] || `${name} FHIR R5 resource.`).slice(0, 160))}
---

# ${name}

<span className="fhir-maturity" data-level="${maturity}">${MATURITY_LABEL[maturity] ?? 'Unspecified'}</span>
<span className="fhir-category">${category}</span>

${escapeMdx(description)}

## Endpoints

<ApiBase surface="fhir" path="/${name}" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | \`GET\`    | \`/fhir/R5/${name}/[id]\` |
| Vread        | \`GET\`    | \`/fhir/R5/${name}/[id]/_history/[vid]\` |
| Update       | \`PUT\`    | \`/fhir/R5/${name}/[id]\` |
| Patch        | \`PATCH\`  | \`/fhir/R5/${name}/[id]\` |
| Delete       | \`DELETE\` | \`/fhir/R5/${name}/[id]\` |
| Create       | \`POST\`   | \`/fhir/R5/${name}\` |
| Search       | \`GET\`    | \`/fhir/R5/${name}?...\` |
| History      | \`GET\`    | \`/fhir/R5/${name}/[id]/_history\` |
| Type-history | \`GET\`    | \`/fhir/R5/${name}/_history\` |

## Top-level elements

${elementRows}

## Resource-specific search parameters

${searchRows}

## Reference

- Official FHIR R5 spec: [\`${name}\`](https://hl7.org/fhir/R5/${name.toLowerCase()}.html)
- Maturity: **${MATURITY_LABEL[maturity] ?? 'Unspecified'}** (FMM ${maturity}).
`;
}

function emitFhirForEnv(envKey, fhirData, customOpsInfo) {
  const { resources, categoryOrder, categoryBlurbs } = fhirData;
  const fhirRoot = join(DOCS_ROOT, envKey, 'api/fhir');
  ensureDir(fhirRoot);

  const byCategory = new Map();
  for (const r of resources) {
    if (!byCategory.has(r.category)) byCategory.set(r.category, []);
    byCategory.get(r.category).push(r);
  }
  for (const r of resources) {
    const dir = join(fhirRoot, slug(r.category));
    ensureDir(dir);
    writeIfChanged(join(dir, `${slug(r.name)}.mdx`), fhirResourcePage(r, envKey));
  }

  const sidebar = [{ type: 'doc', id: `api/fhir/index`, label: 'Overview' }];
  if (customOpsInfo && customOpsInfo.firstCustomId) {
    sidebar.push({
      type: 'category',
      label: 'Custom operations',
      link: { type: 'doc', id: customOpsInfo.firstCustomId },
      collapsed: false,
      items: [
        { type: 'doc', id: `api/fhir/custom-operations/index`, label: 'Overview' },
        ...customOpsInfo.customOpsSidebar,
      ],
    });
  }
  for (const cat of [...categoryOrder, 'Other']) {
    const items = byCategory.get(cat);
    if (!items) continue;
    items.sort((a, b) => a.name.localeCompare(b.name));
    const firstId = `api/fhir/${slug(cat)}/${slug(items[0].name)}`;
    sidebar.push({
      type: 'category',
      label: cat,
      link: { type: 'doc', id: firstId },
      collapsed: true,
      items: items.map((r) => ({ type: 'doc', id: `api/fhir/${slug(cat)}/${slug(r.name)}`, label: r.name })),
    });
  }
  writeIfChanged(join(fhirRoot, 'sidebar.json'), JSON.stringify(sidebar, null, 2));

  const categoryBlocks = [...categoryOrder, 'Other']
    .filter((cat) => byCategory.has(cat))
    .map((cat) => {
      const items = [...byCategory.get(cat)].sort((a, b) => a.name.localeCompare(b.name));
      const lines = items.map((r) => `- [${r.name}](/${envKey}/api/fhir/${slug(cat)}/${slug(r.name)}) — ${escapeMdx(r.description.split('\n')[0]).slice(0, 120)}`).join('\n');
      const blurb = categoryBlurbs[cat] ?? 'Resources outside the standard FHIR R5 module decomposition.';
      return `### ${cat}\n\n*${escapeMdx(blurb)}*\n\n${lines}\n`;
    })
    .join('\n');

  writeIfChanged(join(fhirRoot, 'index.mdx'),
`---
title: FHIR API
sidebar_position: 1
sidebar_label: Overview
description: The Ovok FHIR API on the ${envKey} tier — every FHIR R5 resource at /fhir/R5/.
---

# FHIR API

The FHIR R5 data plane on the **${envKey}** tier. Every FHIR R5 resource
type is mounted under \`/fhir/R5/\` with the standard set of REST interactions.

<ApiBase surface="fhir" inline={false} />

## What's documented here

${resources.length} FHIR R5 resource types, sourced from the official
\`hl7.fhir.r5.core\` package. Each carries its top-level elements, search
parameters and a link to the official FHIR spec.

## Resources by category

${categoryBlocks}
`);

  return { resources: resources.length, categories: byCategory.size };
}

// ─── run ──────────────────────────────────────────────────────────────
const envSpecs = {};
for (const [env, p] of Object.entries(ENV_SPEC_PATHS)) {
  if (existsSync(p)) envSpecs[env] = yaml.load(readFileSync(p, 'utf8'));
}
if (Object.keys(envSpecs).length === 0) {
  if (!existsSync(PRIMARY_SPEC)) {
    console.error(`No spec found at ${PRIMARY_SPEC} or env-specific paths.`);
    process.exit(1);
  }
  envSpecs.alpha = yaml.load(readFileSync(PRIMARY_SPEC, 'utf8'));
}

const fhirData = loadFhirResources();

const summary = [];
for (const envKey of ALL_ENVS_ORDERED) {
  if (!envSpecs[envKey]) continue;
  const hl = emitHighLevelForEnv(envKey, envSpecs[envKey]);
  const fhir = emitFhirForEnv(envKey, fhirData, hl);
  const stability = emitStabilityPage(envKey, envSpecs[envKey]);
  summary.push({ envKey, ...hl, ...fhir, ...stability });
}

ensureDir(STATIC_OPENAPI);
if (existsSync(PRIMARY_SPEC)) {
  writeIfChanged(join(STATIC_OPENAPI, 'ovok-api-public.yaml'), readFileSync(PRIMARY_SPEC));
}
for (const [env, p] of Object.entries(ENV_SPEC_PATHS)) {
  if (existsSync(p)) writeIfChanged(join(STATIC_OPENAPI, `${env}-public.yaml`), readFileSync(p));
}

// Playground manifest — one entry per unique (method, path) across envs.
// availableIn[] tells the picker which tiers ship the endpoint; body
// example + parameters come from the canonical (most-stable available)
// variant so the picker can pre-fill JSON for POST/PUT/PATCH.
ensureDir(STATIC_DATA);
const CANONICAL_PRIORITY = ['final', 'beta', 'alpha'];

function exampleFromSchema(schema, deref, depth) {
  if (!schema || depth > 4) return null;
  const s = deref(schema);
  if (!s) return null;
  if (s.example !== undefined) return s.example;
  if (s.enum && s.enum.length) return s.enum[0];
  if (s.type === 'object' && s.properties) {
    const out = {};
    for (const k of Object.keys(s.properties).slice(0, 12)) {
      const v = exampleFromSchema(deref(s.properties[k]), deref, depth + 1);
      out[k] = v ?? exampleForType(deref(s.properties[k])?.type);
    }
    return out;
  }
  if (s.type === 'array') {
    const item = exampleFromSchema(deref(s.items), deref, depth + 1);
    return item == null ? [] : [item];
  }
  return exampleForType(s.type);
}
function exampleForType(t) {
  switch (t) {
    case 'string':  return 'string';
    case 'number':
    case 'integer': return 0;
    case 'boolean': return false;
    case 'array':   return [];
    case 'object':  return {};
    default:        return null;
  }
}

function buildManifestRow(method, path, op, deref) {
  let bodyExample = null;
  const body = op.requestBody ? deref(op.requestBody) : null;
  if (body?.content) {
    const json = body.content['application/json'];
    if (json) {
      bodyExample = json.example
        ?? (json.examples && Object.values(json.examples)[0]?.value)
        ?? null;
      if (!bodyExample && json.schema) bodyExample = exampleFromSchema(deref(json.schema), deref, 0);
    }
  }
  return {
    method: method.toUpperCase(),
    path,
    summary: op.summary?.trim() ?? `${method.toUpperCase()} ${path}`,
    description: (op.description ?? '').split('\n')[0].slice(0, 200),
    tag: (op.tags?.[0] ?? 'Uncategorized').trim(),
    operationId: op.operationId ?? null,
    parameters: (op.parameters ?? []).map((p) => {
      const sch = deref(p.schema) ?? {};
      return { name: p.name, in: p.in, required: !!p.required, type: sch.type ?? null };
    }),
    bodyExample,
    deprecated: !!op.deprecated,
  };
}

const byKey = new Map(); // `${METHOD} ${path}` → { row, availableIn[] }
for (const envKey of CANONICAL_PRIORITY) {
  const spec = envSpecs[envKey];
  if (!spec) continue;
  const deref = makeDeref(spec);
  for (const [path, methods] of Object.entries(spec.paths ?? {})) {
    for (const [method, op] of Object.entries(methods)) {
      if (!HTTP_METHODS.has(method)) continue;
      // Skip Wearables — see filter in emitHighLevelForEnv.
      const controllerName = op.operationId ?? '';
      const firstTag = (op.tags?.[0] ?? '').toLowerCase();
      if (/wearable/i.test(controllerName) || firstTag.includes('wearable')) continue;
      const key = `${method.toUpperCase()} ${path}`;
      if (!byKey.has(key)) {
        // First time we see this endpoint — capture canonical variant.
        byKey.set(key, { row: buildManifestRow(method, path, op, deref), availableIn: [] });
      }
      byKey.get(key).availableIn.push(envKey);
    }
  }
}
const manifest = [...byKey.values()].map(({ row, availableIn }) => ({
  ...row,
  availableIn: ['alpha', 'beta', 'final'].filter((e) => availableIn.includes(e)),
}));
writeIfChanged(join(STATIC_DATA, 'endpoints.json'), JSON.stringify(manifest, null, 2));

// Sweep orphans only inside the env folders we emitted, plus static/openapi.
for (const { envKey } of summary) {
  sweepOrphans(join(DOCS_ROOT, envKey, 'api'));
}
sweepOrphans(STATIC_OPENAPI);

for (const s of summary) {
  console.log(`${s.envKey.padEnd(6)} → ${s.endpoints} endpoints in ${s.tags} tags, ${s.customOps} custom FHIR ops, ${s.resources} FHIR R5 resources`);
}
console.log(`Manifest: ${manifest.length} endpoints in static/data/endpoints.json`);
