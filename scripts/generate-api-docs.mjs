#!/usr/bin/env node
/**
 * Convert an OpenAPI 3.x spec into a directory of clean Docusaurus MDX —
 * one page per tag, one page per schema, plus an index.
 *
 * Why hand-rolled instead of docusaurus-plugin-openapi-docs:
 *   - The plugin's <MimeTabs> uses useTabsContext outside a Tabs provider,
 *     which crashes SSR on Docusaurus 3.10.
 *   - Its bundle drags in postman-code-generators (node-only) which breaks
 *     browser builds without manual fallback config.
 *   - We don't need a request runner here; we need clean reference text
 *     that integrates with the existing sidebar + theme.
 *
 * Usage:
 *   node scripts/generate-api-docs.mjs \
 *     --spec openapi/ovok-api-public.yaml \
 *     --out  docs/api/reference
 */

import { readFileSync, writeFileSync, rmSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');

// ─── args ─────────────────────────────────────────────────────────────
const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, arg, i, arr) => {
    if (arg.startsWith('--')) acc.push([arg.slice(2), arr[i + 1]]);
    return acc;
  }, []),
);
const SPEC_PATH = join(REPO_ROOT, args.spec ?? 'openapi/ovok-api-public.yaml');
const OUT_DIR  = join(REPO_ROOT, args.out  ?? 'docs/api/reference');

// ─── load + resolve refs ──────────────────────────────────────────────
const spec = yaml.load(readFileSync(SPEC_PATH, 'utf8'));

function resolveRef(ref) {
  // "#/components/schemas/UserDto" → spec.components.schemas.UserDto
  return ref.replace(/^#\//, '').split('/').reduce((obj, key) => obj?.[key], spec);
}

function deref(node, seen = new WeakSet()) {
  if (!node || typeof node !== 'object') return node;
  if (seen.has(node)) return node;
  seen.add(node);
  if (node.$ref) {
    const target = resolveRef(node.$ref);
    return deref(target, seen);
  }
  if (Array.isArray(node)) return node.map((item) => deref(item, seen));
  const out = {};
  for (const [k, v] of Object.entries(node)) out[k] = deref(v, seen);
  return out;
}

// ─── MDX-safety pass for any free-text from the spec ──────────────────
function escapeMdx(text) {
  if (!text) return '';
  return String(text)
    .replace(/<br\s*\/?>/gi, '<br />')
    .replace(/<hr\s*\/?>/gi, '<hr />')
    // bare `<` not followed by a letter or `/` becomes &lt; so MDX doesn't
    // treat it as a tag opener
    .replace(/<(?![a-zA-Z/])/g, '&lt;')
    // curly braces in narrative text are interpreted as JSX expressions
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');
}

function slug(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function title(s) {
  return String(s).replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

// ─── group operations by primary tag ──────────────────────────────────
const tagGroups = new Map(); // tag → [{method, path, op}]
for (const [path, methods] of Object.entries(spec.paths ?? {})) {
  for (const [method, op] of Object.entries(methods)) {
    if (!['get', 'post', 'put', 'patch', 'delete', 'head', 'options'].includes(method)) continue;
    const tag = (op.tags?.[0] ?? 'Uncategorized').trim();
    if (!tagGroups.has(tag)) tagGroups.set(tag, []);
    tagGroups.get(tag).push({ method: method.toUpperCase(), path, op });
  }
}

// Stable sort: tags alphabetical, ops by path then method.
const sortedTags = [...tagGroups.keys()].sort((a, b) => a.localeCompare(b));
for (const tag of sortedTags) {
  tagGroups.get(tag).sort((a, b) =>
    a.path.localeCompare(b.path) || a.method.localeCompare(b.method),
  );
}

// ─── per-operation block renderer ─────────────────────────────────────
const METHOD_BADGE = {
  GET: 'get', POST: 'post', PUT: 'put', PATCH: 'patch',
  DELETE: 'delete', HEAD: 'head', OPTIONS: 'options',
};

function renderParamsTable(params) {
  if (!params || params.length === 0) return '';
  const rows = params.map((p) => {
    const sch = deref(p.schema) ?? {};
    const type = sch.type ?? (sch.$ref ? sch.$ref.split('/').pop() : '—');
    const required = p.required ? '**yes**' : 'no';
    return `| \`${p.name}\` | ${p.in} | \`${type}\` | ${required} | ${escapeMdx(p.description ?? '').replace(/\n+/g, ' ')} |`;
  });
  return [
    '',
    '**Parameters**',
    '',
    '| Name | In | Type | Required | Description |',
    '| --- | --- | --- | --- | --- |',
    ...rows,
    '',
  ].join('\n');
}

function summariseSchema(schema, depth = 0) {
  if (!schema) return '_no schema_';
  const s = deref(schema);
  if (s.type === 'object' && s.properties) {
    const indent = '  '.repeat(depth);
    const lines = Object.entries(s.properties).map(([name, prop]) => {
      const p = deref(prop);
      const t = p.type ?? (p.$ref ? p.$ref.split('/').pop() : '—');
      const req = s.required?.includes(name) ? ' **(required)**' : '';
      const desc = p.description ? ` — ${escapeMdx(p.description).replace(/\n+/g, ' ')}` : '';
      return `${indent}- \`${name}\`: \`${t}\`${req}${desc}`;
    });
    return lines.join('\n');
  }
  if (s.type === 'array' && s.items) {
    return `Array of \`${deref(s.items).type ?? 'object'}\``;
  }
  if (s.enum) return `enum: ${s.enum.map((v) => `\`${v}\``).join(', ')}`;
  if (s.type) return `\`${s.type}\``;
  return '_unknown_';
}

function renderRequestBody(body) {
  if (!body) return '';
  const b = deref(body);
  const content = b.content ?? {};
  const blocks = ['', '**Request body**', ''];
  if (b.description) blocks.push(escapeMdx(b.description), '');
  for (const [mime, media] of Object.entries(content)) {
    blocks.push(`Content-Type: \`${mime}\``, '', summariseSchema(media.schema), '');
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
  return ['', '**Responses**', '', '| Code | Description |', '| --- | --- |', ...rows, ''].join('\n');
}

function renderOperation({ method, path, op }) {
  const opTitle = op.summary?.trim() || `${method} ${path}`;
  const anchor = slug(op.operationId || `${method}-${path}`);
  const desc = op.description ? escapeMdx(op.description) : '';
  const blocks = [
    `### ${opTitle} {#${anchor}}`,
    '',
    `<span className="api-method ${METHOD_BADGE[method]}">${method}</span> \`${path}\``,
    '',
  ];
  if (desc) blocks.push(desc, '');
  if (op.deprecated) blocks.push(':::warning Deprecated\nThis endpoint is deprecated. Migrate before the next major release.\n:::', '');
  blocks.push(renderParamsTable(op.parameters));
  blocks.push(renderRequestBody(op.requestBody));
  blocks.push(renderResponses(op.responses));
  blocks.push('---', '');
  return blocks.filter(Boolean).join('\n');
}

// ─── write the tree ───────────────────────────────────────────────────
rmSync(OUT_DIR, { recursive: true, force: true });
mkdirSync(OUT_DIR, { recursive: true });

// Index page
const tagLinks = sortedTags
  .map((t) => `- [${t}](/api/reference/${slug(t)}) — ${tagGroups.get(t).length} endpoint${tagGroups.get(t).length === 1 ? '' : 's'}`)
  .join('\n');

writeFileSync(
  join(OUT_DIR, 'index.mdx'),
  `---
title: API reference
sidebar_position: 1
description: Reference for the Ovok public API — every endpoint your apps can call, grouped by area.
---

# API reference

This is the reference for the **Ovok public API** — every endpoint
exposed to integrations, generated from the OpenAPI specification at
build time.

<ApiBase inline={false} />

> Your selected release tier above sets the host. Endpoint paths and
> contracts are identical across tiers; the host changes.

## Areas

${tagLinks}

## How endpoints are documented

Each endpoint page lists:

- **Method + path** — the HTTP verb and URL template.
- **Parameters** — path, query, header and cookie parameters with
  types and requirements.
- **Request body** — content-type and schema summary.
- **Responses** — status code → description, summarised from the
  spec's response definitions.

The full machine-readable schema is available at
[\`/openapi/ovok-api-public.yaml\`](pathname:///openapi/ovok-api-public.yaml).
`,
);

// Per-tag pages
const sidebarItems = [{ type: 'doc', id: 'api/reference/index', label: 'Overview' }];

for (const tag of sortedTags) {
  const ops = tagGroups.get(tag);
  const tagSlug = slug(tag);
  const body = [
    '---',
    `title: ${tag}`,
    `description: ${tag} endpoints in the Ovok public API.`,
    `sidebar_label: ${tag}`,
    '---',
    '',
    `# ${tag}`,
    '',
    `${ops.length} endpoint${ops.length === 1 ? '' : 's'}.`,
    '',
    '<ApiBase inline={false} />',
    '',
    ...ops.map(renderOperation),
  ].join('\n');
  writeFileSync(join(OUT_DIR, `${tagSlug}.mdx`), body);
  sidebarItems.push({ type: 'doc', id: `api/reference/${tagSlug}`, label: tag });
}

// Sidebar JSON (consumed by sidebars.ts)
writeFileSync(
  join(OUT_DIR, 'sidebar.json'),
  JSON.stringify(sidebarItems, null, 2),
);

// Static spec (so users can download the raw YAML)
const staticOpenapiDir = join(REPO_ROOT, 'static/openapi');
mkdirSync(staticOpenapiDir, { recursive: true });
writeFileSync(join(staticOpenapiDir, 'ovok-api-public.yaml'), readFileSync(SPEC_PATH));

console.log(`Generated ${sortedTags.length} tag pages + index → ${OUT_DIR}`);
console.log(`Staged spec at static/openapi/ovok-api-public.yaml`);
