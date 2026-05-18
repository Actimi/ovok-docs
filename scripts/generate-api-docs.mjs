#!/usr/bin/env node
/**
 * Generate the two API sections of the Ovok docs:
 *
 *   docs/api/high-level/   one MDX per OpenAPI endpoint, grouped per tag.
 *                          Source: openapi/ovok-api-public.yaml.
 *
 *   docs/api/fhir/         one MDX per FHIR R5 resource, grouped per module.
 *                          Sources: .fhir-cache/package/ (real FHIR R5 spec)
 *                          + data/fhir-r5-resources.json (category mapping).
 *
 * Sidebar nodes carry a `link.type=doc` pointing at the first child page so
 * clicking the category label lands on the first item of the group.
 */

import { readFileSync, writeFileSync, rmSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');

const SPEC_PATH       = join(REPO_ROOT, 'openapi/ovok-api-public.yaml');
const FHIR_DATA_PATH  = join(REPO_ROOT, 'data/fhir-r5-resources.json');
const FHIR_CACHE      = join(REPO_ROOT, '.fhir-cache/package');
const OUT_HIGH        = join(REPO_ROOT, 'docs/api/high-level');
const OUT_FHIR        = join(REPO_ROOT, 'docs/api/fhir');
const STATIC_OPENAPI  = join(REPO_ROOT, 'static/openapi');

// Paths starting with these prefixes are custom operations layered on top
// of the FHIR API rather than high-level platform endpoints. They get
// routed to docs/api/fhir/custom-operations/ instead of docs/api/high-level/.
const FHIR_PATH_PREFIXES = ['/fhir/', '/R4/', '/R5/'];
function isFhirCustomOpPath(path) {
  return FHIR_PATH_PREFIXES.some((p) => path.startsWith(p));
}

// ─── shared helpers ───────────────────────────────────────────────────
/**
 * Make narrative text safe for MDX without mangling code samples.
 *
 * MDX 3 reads `{...}` as a JS expression inside paragraphs, so braces in
 * descriptions like `{"id": 1}` would otherwise crash the parser. Escaping
 * naively also chews through fenced code blocks (```) and inline code
 * (`foo`) — exactly where braces are most likely to appear and where the
 * user expects to see them unchanged. This walker splits the text into
 * code segments vs. narrative segments and only escapes the latter.
 */
function escapeMdx(text) {
  if (!text) return '';
  const codeRegion = /(```[\s\S]*?```|`[^`\n]+`)/g;
  let out = '';
  let lastIndex = 0;
  let m;
  while ((m = codeRegion.exec(text)) !== null) {
    out += escapeNarrative(text.slice(lastIndex, m.index));
    out += m[0]; // leave the code region untouched
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
    // FHIR spec descriptions reference other resource pages via
    // markdown links like `[foo](patient.html)`. Rewrite to absolute
    // hl7.org/fhir/R5/ URLs so they don't resolve as broken
    // Docusaurus relative links.
    .replace(/\]\(([a-zA-Z][a-zA-Z0-9_-]*\.html(?:#[^)]*)?)\)/g, '](https://hl7.org/fhir/R5/$1)');
}

function slug(s) {
  return String(s)
    // camelCase   → camel-Case
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    // ALLCAPS+Title → ALLCAPS-Title (e.g. "B2BRegister" → "B2B-Register")
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    // letter→digit and digit→letter (e.g. "B2B" → "B-2-B")
    .replace(/([a-zA-Z])(\d)/g, '$1-$2')
    .replace(/(\d)([a-zA-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function shortenLabel(s, max = 42) {
  if (s.length <= max) return s;
  return s.slice(0, max - 1) + '…';
}

function ensureCleanDir(path) {
  rmSync(path, { recursive: true, force: true });
  mkdirSync(path, { recursive: true });
}

// ─── high-level (OpenAPI → per-endpoint MDX) ──────────────────────────
function generateHighLevel() {
  const spec = yaml.load(readFileSync(SPEC_PATH, 'utf8'));

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

  // Split operations: FHIR custom ops go to a separate bucket the FHIR
  // generator picks up; everything else stays in High Level tag groups.
  const tagGroups = new Map();
  const fhirCustomOps = []; // [{method, path, op}, ...] — raw list, deduped later
  for (const [path, methods] of Object.entries(spec.paths ?? {})) {
    for (const [method, op] of Object.entries(methods)) {
      if (!['get', 'post', 'put', 'patch', 'delete', 'head', 'options'].includes(method)) continue;
      const entry = { method: method.toUpperCase(), path, op };
      if (isFhirCustomOpPath(path)) {
        fhirCustomOps.push(entry);
        continue;
      }
      const tag = (op.tags?.[0] ?? 'Uncategorized').trim();
      if (!tagGroups.has(tag)) tagGroups.set(tag, []);
      tagGroups.get(tag).push(entry);
    }
  }
  const sortedTags = [...tagGroups.keys()].sort((a, b) => a.localeCompare(b));
  // Stash the raw list and the deref helpers for the FHIR generator.
  globalThis.__OVOK_FHIR_CUSTOM__ = { ops: fhirCustomOps, deref, renderParamsTable: null };

  function renderParamsTable(params) {
    if (!params || params.length === 0) return '';
    const rows = params.map((p) => {
      const sch = deref(p.schema) ?? {};
      const type = sch.type ?? (sch.$ref ? sch.$ref.split('/').pop() : '—');
      const required = p.required ? '**yes**' : 'no';
      return `| \`${p.name}\` | ${p.in} | \`${type}\` | ${required} | ${escapeMdx(p.description ?? '').replace(/\n+/g, ' ')} |`;
    });
    return ['', '## Parameters', '', '| Name | In | Type | Required | Description |', '| --- | --- | --- | --- | --- |', ...rows, ''].join('\n');
  }

  function summariseSchema(schema, depth = 0) {
    if (!schema) return '_no schema_';
    const s = deref(schema);
    if (s.type === 'object' && s.properties) {
      const indent = '  '.repeat(depth);
      return Object.entries(s.properties).map(([name, prop]) => {
        const p = deref(prop);
        const t = p.type ?? (p.$ref ? p.$ref.split('/').pop() : '—');
        const req = s.required?.includes(name) ? ' **(required)**' : '';
        const desc = p.description ? ` — ${escapeMdx(p.description).replace(/\n+/g, ' ')}` : '';
        return `${indent}- \`${name}\`: \`${t}\`${req}${desc}`;
      }).join('\n');
    }
    if (s.type === 'array' && s.items) return `Array of \`${deref(s.items).type ?? 'object'}\``;
    if (s.enum) return `enum: ${s.enum.map((v) => `\`${v}\``).join(', ')}`;
    if (s.type) return `\`${s.type}\``;
    return '_unknown_';
  }

  function renderRequestBody(body) {
    if (!body) return '';
    const b = deref(body);
    const blocks = ['', '## Request body', ''];
    if (b.description) blocks.push(escapeMdx(b.description), '');
    for (const [mime, media] of Object.entries(b.content ?? {})) {
      blocks.push(`**Content-Type:** \`${mime}\``, '', summariseSchema(media.schema), '');
    }
    return blocks.join('\n');
  }

  function renderResponses(responses) {
    if (!responses) return '';
    const rows = Object.entries(responses).map(([code, res]) => {
      const r = deref(res);
      const desc = escapeMdx(r.description ?? '').replace(/\n+/g, ' ');
      return `| \`${code}\` | ${desc} |`;
    });
    return ['', '## Responses', '', '| Code | Description |', '| --- | --- |', ...rows, ''].join('\n');
  }

  // Expose the rendering helpers to the FHIR generator so custom ops
  // are rendered with identical shape to the High Level pages.
  globalThis.__OVOK_FHIR_CUSTOM__.renderParamsTable = renderParamsTable;
  globalThis.__OVOK_FHIR_CUSTOM__.renderRequestBody = renderRequestBody;
  globalThis.__OVOK_FHIR_CUSTOM__.renderResponses = renderResponses;

  ensureCleanDir(OUT_HIGH);
  const sidebarItems = [{ type: 'doc', id: 'api/high-level/index', label: 'Overview' }];
  const firstEndpointSlugByTag = new Map();

  for (const tag of sortedTags) {
    const ops = tagGroups.get(tag);
    const tagSlug = slug(tag);
    const tagDir = join(OUT_HIGH, tagSlug);
    mkdirSync(tagDir, { recursive: true });

    const opItems = [];
    let firstId = null;

    for (const { method, path, op } of ops) {
      const fileBase = slug(op.operationId || `${method}-${path}`);
      const opSlug = fileBase || 'endpoint';
      const opLabel = shortenLabel(op.summary?.trim() || `${method} ${path}`);
      const rawDesc = (op.description && String(op.description).split('\n')[0].trim()) || `${method} ${path}`;
      const title = op.summary?.trim() || `${method} ${path}`;
      const body = [
        '---',
        `title: ${JSON.stringify(title)}`,
        `sidebar_label: ${JSON.stringify(opLabel)}`,
        `description: ${JSON.stringify(rawDesc.slice(0, 160))}`,
        '---',
        '',
        `# ${title}`,
        '',
        `<span className="api-method ${method.toLowerCase()}">${method}</span> \`${path}\``,
        '',
        '<ApiBase inline={false} />',
        '',
      ];
      if (op.description) body.push(escapeMdx(op.description), '');
      if (op.deprecated) body.push(':::warning Deprecated', 'This endpoint is deprecated. Migrate before the next major release.', ':::', '');
      body.push(renderParamsTable(op.parameters));
      body.push(renderRequestBody(op.requestBody));
      body.push(renderResponses(op.responses));

      writeFileSync(join(tagDir, `${opSlug}.mdx`), body.join('\n'));

      const id = `api/high-level/${tagSlug}/${opSlug}`;
      opItems.push({ type: 'doc', id, label: opLabel });
      if (!firstId) {
        firstId = id;
        firstEndpointSlugByTag.set(tag, `${tagSlug}/${opSlug}`);
      }
    }

    sidebarItems.push({
      type: 'category',
      label: tag,
      link: { type: 'doc', id: firstId },
      collapsed: true,
      items: opItems,
    });
  }

  const tagSummary = sortedTags
    .map((t) => `- **[${t}](/api/high-level/${firstEndpointSlugByTag.get(t)})** — ${tagGroups.get(t).length} endpoint${tagGroups.get(t).length === 1 ? '' : 's'}`)
    .join('\n');

  writeFileSync(join(OUT_HIGH, 'index.mdx'),
`---
title: High Level API
sidebar_position: 1
sidebar_label: Overview
description: The Ovok platform API — auth, projects, content, billing, devices, signals. The convenience layer that sits in front of the FHIR data plane.
---

# High Level API

The High Level API is the convenience layer that sits in front of the
FHIR data plane. It exposes platform concepts — projects, members,
billing, content, devices, signals — as a coherent REST surface so
applications don't have to assemble them out of raw FHIR resources.

<ApiBase inline={false} />

> Looking for raw FHIR access? See the [FHIR API](/api/fhir).

## Areas

${tagSummary}

## How endpoints are documented

Each endpoint page lists:

- **Method + path** with a coloured method badge.
- **Parameters** — path, query, header and cookie, with types and requirements.
- **Request body** — content-type and schema summary.
- **Responses** — status code → description, from the spec.

The full machine-readable spec is at
[\`/openapi/ovok-api-public.yaml\`](pathname:///openapi/ovok-api-public.yaml).
`);

  writeFileSync(join(OUT_HIGH, 'sidebar.json'), JSON.stringify(sidebarItems, null, 2));

  mkdirSync(STATIC_OPENAPI, { recursive: true });
  writeFileSync(join(STATIC_OPENAPI, 'ovok-api-public.yaml'), readFileSync(SPEC_PATH));

  return {
    tags: sortedTags.length,
    operations: sortedTags.reduce((n, t) => n + tagGroups.get(t).length, 0),
  };
}

// ─── FHIR R5 — drive everything from the official spec cache ──────────
const MATURITY_LABEL = {
  0: 'Draft', 1: 'Trial Use 1', 2: 'Trial Use 2',
  3: 'Trial Use 3', 4: 'Trial Use 4', 5: 'Normative',
};

const FMM_EXT = 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm';

function loadFhirIndex() {
  if (!existsSync(FHIR_CACHE)) {
    throw new Error(`FHIR cache missing at ${FHIR_CACHE} — run scripts/fetch-fhir-r5.mjs first`);
  }
  const idx = JSON.parse(readFileSync(join(FHIR_CACHE, '.index.json'), 'utf8'));
  return idx.files ?? [];
}

function readFhirJson(filename) {
  return JSON.parse(readFileSync(join(FHIR_CACHE, filename), 'utf8'));
}

function fmmFromSd(sd) {
  for (const ext of sd.extension ?? []) {
    if (ext.url === FMM_EXT) {
      const v = ext.valueInteger;
      if (typeof v === 'number') return v;
    }
  }
  return null;
}

function topLevelElements(sd) {
  const elements = sd.snapshot?.element ?? sd.differential?.element ?? [];
  const out = [];
  const skipSet = new Set(['id', 'meta', 'implicitRules', 'language', 'text', 'contained', 'extension', 'modifierExtension']);
  for (const e of elements) {
    const id = e.id ?? e.path;
    if (!id) continue;
    const parts = id.split('.');
    if (parts.length !== 2) continue;
    const [_, field] = parts;
    if (skipSet.has(field)) continue;
    const types = (e.type ?? []).map((t) => t.code).filter(Boolean);
    out.push({
      name: field,
      types,
      cardinality: `${e.min ?? 0}..${e.max ?? '*'}`,
      short: e.short ?? '',
      isModifier: !!e.isModifier,
      mustSupport: !!e.mustSupport,
      isSummary: !!e.isSummary,
    });
  }
  return out;
}

function generateFhir() {
  const catalog = JSON.parse(readFileSync(FHIR_DATA_PATH, 'utf8'));
  const categoryOf = Object.fromEntries(catalog.resources.map((r) => [r.name, r.category]));
  const categoryOrder = Object.keys(catalog.categories);
  const idx = loadFhirIndex();

  // Index search params by base resource
  const searchByBase = new Map();
  for (const f of idx) {
    if (f.resourceType !== 'SearchParameter') continue;
    const sp = readFhirJson(f.filename);
    const bases = sp.base ?? [];
    for (const base of bases) {
      if (!searchByBase.has(base)) searchByBase.set(base, []);
      searchByBase.get(base).push({
        code: sp.code,
        type: sp.type,
        description: (sp.description ?? '').replace(/^Multiple Resources:[\s\S]*?\* \[[^\]]+\][^:]*:\s*/m, '').split('\n')[0],
        expression: sp.expression ?? '',
      });
    }
  }

  // Find all concrete resources in the spec
  const resources = [];
  for (const f of idx) {
    if (f.resourceType !== 'StructureDefinition') continue;
    if (f.kind !== 'resource') continue;
    if (f.type === 'Element' || f.type === 'BackboneElement') continue;
    const sd = readFhirJson(f.filename);
    if (sd.abstract) continue;
    const name = sd.type ?? sd.id;
    if (!name) continue;
    resources.push({
      name,
      description: sd.description ?? '',
      purpose: sd.purpose ?? '',
      maturity: fmmFromSd(sd) ?? 0,
      elements: topLevelElements(sd),
      searchParams: searchByBase.get(name) ?? [],
      category: categoryOf[name] ?? 'Other',
    });
  }
  resources.sort((a, b) => a.name.localeCompare(b.name));

  // Group by category
  const byCategory = new Map();
  for (const r of resources) {
    if (!byCategory.has(r.category)) byCategory.set(r.category, []);
    byCategory.get(r.category).push(r);
  }

  ensureCleanDir(OUT_FHIR);

  // Per-resource pages
  for (const r of resources) {
    const dir = join(OUT_FHIR, slug(r.category));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, `${slug(r.name)}.mdx`), fhirResourcePage(r));
  }

  // Custom operations (from the OpenAPI spec, routed here by generateHighLevel)
  const customOpsCategory = generateFhirCustomOps();

  // Sidebar
  const sidebarItems = [{ type: 'doc', id: 'api/fhir/index', label: 'Overview' }];
  if (customOpsCategory) sidebarItems.push(customOpsCategory);
  const seenCategories = new Set();
  for (const category of [...categoryOrder, 'Other']) {
    const items = byCategory.get(category);
    if (!items) continue;
    seenCategories.add(category);
    items.sort((a, b) => a.name.localeCompare(b.name));
    const firstId = `api/fhir/${slug(category)}/${slug(items[0].name)}`;
    sidebarItems.push({
      type: 'category',
      label: category,
      link: { type: 'doc', id: firstId },
      collapsed: true,
      items: items.map((r) => ({
        type: 'doc',
        id: `api/fhir/${slug(category)}/${slug(r.name)}`,
        label: r.name,
      })),
    });
  }
  writeFileSync(join(OUT_FHIR, 'sidebar.json'), JSON.stringify(sidebarItems, null, 2));

  // Index page — group by category
  const categoryBlocks = [...categoryOrder, 'Other']
    .filter((cat) => byCategory.has(cat))
    .map((cat) => {
      const items = [...byCategory.get(cat)].sort((a, b) => a.name.localeCompare(b.name));
      const lines = items
        .map((r) => `- [${r.name}](/api/fhir/${slug(cat)}/${slug(r.name)}) — ${escapeMdx(r.description.split('\n')[0]).slice(0, 120)}`)
        .join('\n');
      const blurb = catalog.categories[cat] ?? 'Resources outside the standard FHIR R5 module decomposition.';
      return `### ${cat}\n\n*${escapeMdx(blurb)}*\n\n${lines}\n`;
    })
    .join('\n');

  writeFileSync(join(OUT_FHIR, 'index.mdx'),
`---
title: FHIR API
sidebar_position: 1
sidebar_label: Overview
description: The Ovok FHIR API exposes every FHIR R5 resource — Patient, Observation, Encounter, CarePlan and the rest — under one host, with the standard set of FHIR interactions on each.
---

# FHIR API

The FHIR API is the raw data plane. Every FHIR R5 resource type is
mounted under \`/fhir/R5/\` on the API host with the standard set of
REST interactions — read, vread, update, patch, delete, create, search,
history, type-history.

<ApiBase surface="fhir" inline={false} />

> Looking for higher-level workflows (auth, projects, billing, content)?
> See the [High Level API](/api/high-level).

## What's documented here

This section catalogues all **${resources.length}** FHIR R5 resource types,
sourced directly from the official \`hl7.fhir.r5.core\` package. Each
resource has its own page with:

- **Top-level elements** with their type, cardinality and short description.
- **Resource-specific search parameters** with their type and the
  expression they evaluate against.
- **Standard interaction table** — every REST verb the resource supports.
- **Maturity badge** from the HL7 FHIR Maturity Model (FMM 0–5).

## Conventions

- **Path** — \`/fhir/R5/<Resource>/[id]\` for instance-level interactions,
  \`/fhir/R5/<Resource>?...\` for searching.
- **Wire format** — \`application/fhir+json\` for both request and response.
- **Versioning** — every write returns the new \`Resource.meta.versionId\`;
  use it with the read endpoint's \`_vread\` form to fetch a historical version.
- **Universal search params** — all resources accept
  [\`_id\`, \`_lastUpdated\`, \`_profile\`, \`_security\`, \`_source\`, \`_tag\`,
  \`_text\`, \`_summary\`, \`_elements\`, \`_include\`, \`_revinclude\`,
  \`_sort\`, \`_count\`](https://hl7.org/fhir/R5/search.html).
- **Maturity** — each resource carries an HL7 FHIR Maturity Model (FMM)
  level. \`5\` is *Normative* (stable forever). \`0\`–\`4\` are *Trial Use*.

## Resources by category

${categoryBlocks}
`);

  return { resources: resources.length, categories: seenCategories.size };
}

function generateFhirCustomOps() {
  const { ops, renderParamsTable, renderRequestBody, renderResponses } =
    globalThis.__OVOK_FHIR_CUSTOM__ ?? {};
  if (!ops || ops.length === 0) return null;

  // Dedupe by operationId prefix (NestJS suffixes [0]/[1]/[2] when one
  // handler is mounted under multiple paths — /fhir, /fhir/R4, /fhir/R5).
  const byHandler = new Map();
  for (const entry of ops) {
    const opid = entry.op.operationId ?? `${entry.method}-${entry.path}`;
    const key = opid.replace(/\[\d+\]$/, '');
    if (!byHandler.has(key)) byHandler.set(key, { key, variants: [] });
    byHandler.get(key).variants.push(entry);
  }

  // Build a stable ordering: keep first-seen order from the spec.
  const handlers = [...byHandler.values()];
  handlers.sort((a, b) => {
    const ax = ops.findIndex((o) => (o.op.operationId ?? '').replace(/\[\d+\]$/, '') === a.key);
    const bx = ops.findIndex((o) => (o.op.operationId ?? '').replace(/\[\d+\]$/, '') === b.key);
    return ax - bx;
  });

  const dir = join(OUT_FHIR, 'custom-operations');
  mkdirSync(dir, { recursive: true });

  const sidebarItems = [];
  let firstId = null;

  for (const { key, variants } of handlers) {
    // Pick the canonical R5 variant if present, otherwise the first.
    const canonical = variants.find((v) => v.path.includes('/R5/')) ?? variants[0];
    const { method, path, op } = canonical;

    const opSlug = slug(key);
    const title = op.summary?.trim() || `${method} ${path}`;
    const desc = (op.description && String(op.description).split('\n')[0].trim()) || `${method} ${path}`;

    const pathLines = variants
      .map((v) => `- <span className="api-method ${v.method.toLowerCase()}">${v.method}</span> \`${v.path}\``)
      .join('\n');

    const body = [
      '---',
      `title: ${JSON.stringify(title)}`,
      `sidebar_label: ${JSON.stringify(title.length > 42 ? title.slice(0, 41) + '…' : title)}`,
      `description: ${JSON.stringify(desc.slice(0, 160))}`,
      '---',
      '',
      `# ${title}`,
      '',
      '**Available paths**',
      '',
      pathLines,
      '',
      '<ApiBase surface="api" inline={false} />',
      '',
    ];
    if (op.description) body.push(escapeMdx(op.description), '');
    if (op.deprecated) body.push(':::warning Deprecated', 'This endpoint is deprecated. Migrate before the next major release.', ':::', '');
    body.push(renderParamsTable(op.parameters));
    body.push(renderRequestBody(op.requestBody));
    body.push(renderResponses(op.responses));

    writeFileSync(join(dir, `${opSlug}.mdx`), body.join('\n'));
    const id = `api/fhir/custom-operations/${opSlug}`;
    sidebarItems.push({ type: 'doc', id, label: title.length > 42 ? title.slice(0, 41) + '…' : title });
    if (!firstId) firstId = id;
  }

  // Write a category index page so the category landing has context.
  const indexBody = [
    '---',
    'title: Custom operations',
    'sidebar_label: Overview',
    'description: Ovok-specific operations layered on top of the FHIR API — $lastn, $populate, $extract, telemetry projections and more.',
    '---',
    '',
    '# Custom FHIR operations',
    '',
    'Ovok layers a handful of named operations on top of standard FHIR resources.',
    'These are not part of the FHIR R5 specification — they are Ovok extensions.',
    'Every one of them is mounted under all three release tiers and supports the',
    '`/fhir/`, `/fhir/R4/` and `/fhir/R5/` path forms.',
    '',
    '<ApiBase inline={false} />',
    '',
    '## Available operations',
    '',
    handlers.map(({ key, variants }) => {
      const op = variants[0].op;
      const title = op.summary?.trim() || key;
      return `- **[${title}](/api/fhir/custom-operations/${slug(key)})** — ${
        ((op.description && String(op.description).split('\n')[0].trim()) || '').slice(0, 100)
      }`;
    }).join('\n'),
    '',
  ].join('\n');
  writeFileSync(join(dir, 'index.mdx'), indexBody);

  return {
    type: 'category',
    label: 'Custom operations',
    link: { type: 'doc', id: firstId ?? 'api/fhir/custom-operations/index' },
    collapsed: false,
    items: [{ type: 'doc', id: 'api/fhir/custom-operations/index', label: 'Overview' }, ...sidebarItems],
  };
}

function fhirResourcePage(r) {
  const { name, category, maturity, elements, searchParams, description } = r;

  const elementRows = elements.length === 0
    ? '_No top-level elements beyond the resource base._'
    : [
        '| Element | Type(s) | Cardinality | Description |',
        '| --- | --- | --- | --- |',
        ...elements.map((e) => {
          const typeCol = e.types.length ? e.types.map((t) => `\`${t}\``).join(' / ') : '—';
          const tags = [
            e.isModifier ? ' _modifier_' : '',
            e.mustSupport ? ' _must-support_' : '',
          ].join('');
          return `| \`${e.name}\` | ${typeCol} | \`${e.cardinality}\` | ${escapeMdx(e.short).replace(/\n+/g, ' ')}${tags} |`;
        }),
      ].join('\n');

  const searchRows = searchParams.length === 0
    ? '_No resource-specific search parameters defined. Universal parameters still apply._'
    : [
        '| Parameter | Type | Description |',
        '| --- | --- | --- |',
        ...[...searchParams]
          .sort((a, b) => a.code.localeCompare(b.code))
          .map((sp) => `| \`${sp.code}\` | \`${sp.type}\` | ${escapeMdx(sp.description).replace(/\n+/g, ' ').slice(0, 200)} |`),
      ].join('\n');

  const blurb = description.split('\n')[0].trim();

  return `---
title: ${name}
sidebar_label: ${name}
description: ${JSON.stringify(blurb.slice(0, 160) || `${name} FHIR R5 resource on the Ovok API.`)}
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

All calls expect FHIR-flavoured JSON
(\`Content-Type: application/fhir+json\`) and accept the standard
\`Accept: application/fhir+json\` header.

## Top-level elements

${elementRows}

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
\`${name}\` supports the parameters below.

${searchRows}

## Reference

- Official FHIR R5 spec: [\`${name}\`](https://hl7.org/fhir/R5/${name.toLowerCase()}.html)
- Element bindings & profiles: [\`${name}\` profile](https://hl7.org/fhir/R5/${name.toLowerCase()}-definitions.html)
- Maturity: **${MATURITY_LABEL[maturity] ?? 'Unspecified'}** (FMM ${maturity}).
`;
}

// ─── run ──────────────────────────────────────────────────────────────
const hl = generateHighLevel();
const fhir = generateFhir();

console.log(`High Level API → ${hl.operations} endpoints in ${hl.tags} groups → ${OUT_HIGH}`);
console.log(`FHIR API       → ${fhir.resources} resources in ${fhir.categories} categories → ${OUT_FHIR}`);
console.log(`Static spec    → ${STATIC_OPENAPI}/ovok-api-public.yaml`);
