#!/usr/bin/env node
/**
 * Generate the two API sections of the Ovok docs:
 *
 *   docs/api/high-level/   one MDX per OpenAPI tag, from openapi/ovok-api-public.yaml
 *   docs/api/fhir/         one MDX per FHIR R5 resource, from data/fhir-r5-resources.json
 *
 * Each section emits its own sidebar.json (consumed by sidebars.ts) and an
 * index page. The OpenAPI spec is also copied into static/openapi/ so the
 * raw YAML is downloadable.
 */

import { readFileSync, writeFileSync, rmSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');

const SPEC_PATH       = join(REPO_ROOT, 'openapi/ovok-api-public.yaml');
const FHIR_DATA_PATH  = join(REPO_ROOT, 'data/fhir-r5-resources.json');
const OUT_HIGH        = join(REPO_ROOT, 'docs/api/high-level');
const OUT_FHIR        = join(REPO_ROOT, 'docs/api/fhir');
const STATIC_OPENAPI  = join(REPO_ROOT, 'static/openapi');

// ─── shared helpers ───────────────────────────────────────────────────
function escapeMdx(text) {
  if (!text) return '';
  return String(text)
    .replace(/<br\s*\/?>/gi, '<br />')
    .replace(/<hr\s*\/?>/gi, '<hr />')
    .replace(/<(?![a-zA-Z/])/g, '&lt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');
}

function slug(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function ensureCleanDir(path) {
  rmSync(path, { recursive: true, force: true });
  mkdirSync(path, { recursive: true });
}

// ─── high-level (OpenAPI → MDX, per tag) ──────────────────────────────
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

  const tagGroups = new Map();
  for (const [path, methods] of Object.entries(spec.paths ?? {})) {
    for (const [method, op] of Object.entries(methods)) {
      if (!['get', 'post', 'put', 'patch', 'delete', 'head', 'options'].includes(method)) continue;
      const tag = (op.tags?.[0] ?? 'Uncategorized').trim();
      if (!tagGroups.has(tag)) tagGroups.set(tag, []);
      tagGroups.get(tag).push({ method: method.toUpperCase(), path, op });
    }
  }
  const sortedTags = [...tagGroups.keys()].sort((a, b) => a.localeCompare(b));
  for (const tag of sortedTags) {
    tagGroups.get(tag).sort((a, b) =>
      a.path.localeCompare(b.path) || a.method.localeCompare(b.method),
    );
  }

  function renderParamsTable(params) {
    if (!params || params.length === 0) return '';
    const rows = params.map((p) => {
      const sch = deref(p.schema) ?? {};
      const type = sch.type ?? (sch.$ref ? sch.$ref.split('/').pop() : '—');
      const required = p.required ? '**yes**' : 'no';
      return `| \`${p.name}\` | ${p.in} | \`${type}\` | ${required} | ${escapeMdx(p.description ?? '').replace(/\n+/g, ' ')} |`;
    });
    return ['', '**Parameters**', '', '| Name | In | Type | Required | Description |', '| --- | --- | --- | --- | --- |', ...rows, ''].join('\n');
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
    const blocks = ['', '**Request body**', ''];
    if (b.description) blocks.push(escapeMdx(b.description), '');
    for (const [mime, media] of Object.entries(b.content ?? {})) {
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
    const blocks = [
      `### ${opTitle} {#${anchor}}`,
      '',
      `<span className="api-method ${method.toLowerCase()}">${method}</span> \`${path}\``,
      '',
    ];
    if (op.description) blocks.push(escapeMdx(op.description), '');
    if (op.deprecated) blocks.push(':::warning Deprecated\nThis endpoint is deprecated. Migrate before the next major release.\n:::', '');
    blocks.push(renderParamsTable(op.parameters));
    blocks.push(renderRequestBody(op.requestBody));
    blocks.push(renderResponses(op.responses));
    blocks.push('---', '');
    return blocks.filter(Boolean).join('\n');
  }

  ensureCleanDir(OUT_HIGH);

  // Per-tag pages
  const sidebarItems = [{ type: 'doc', id: 'api/high-level/index', label: 'Overview' }];
  for (const tag of sortedTags) {
    const ops = tagGroups.get(tag);
    const tagSlug = slug(tag);
    const body = [
      '---',
      `title: ${tag}`,
      `description: ${tag} endpoints in the Ovok platform API.`,
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
    writeFileSync(join(OUT_HIGH, `${tagSlug}.mdx`), body);
    sidebarItems.push({ type: 'doc', id: `api/high-level/${tagSlug}`, label: tag });
  }

  // Index
  const tagLinks = sortedTags
    .map((t) => `- [${t}](/api/high-level/${slug(t)}) — ${tagGroups.get(t).length} endpoint${tagGroups.get(t).length === 1 ? '' : 's'}`)
    .join('\n');

  writeFileSync(join(OUT_HIGH, 'index.mdx'),
`---
title: High Level API
sidebar_position: 1
description: The Ovok platform API — high-level endpoints for auth, projects, content, billing, devices, signals and more. Built on top of FHIR but exposing the workflows your apps actually need.
---

# High Level API

The High Level API is the convenience layer that sits in front of the
FHIR data plane. It exposes platform concepts — projects, members,
billing, content, devices, signals — as a coherent REST surface so
applications don't have to assemble them out of raw FHIR resources.

<ApiBase inline={false} />

> Looking for raw FHIR access? See the [FHIR API](/api/fhir).

## Areas

${tagLinks}

## How endpoints are documented

Each endpoint page lists:

- **Method + path** with a coloured method badge.
- **Parameters** — path, query, header and cookie, with types and requirements.
- **Request body** — content-type and schema summary.
- **Responses** — status code → description, from the spec.

The full machine-readable spec is at
[\`/openapi/ovok-api-public.yaml\`](pathname:///openapi/ovok-api-public.yaml).
`);

  // Sidebar
  writeFileSync(join(OUT_HIGH, 'sidebar.json'), JSON.stringify(sidebarItems, null, 2));

  // Static spec download
  mkdirSync(STATIC_OPENAPI, { recursive: true });
  writeFileSync(join(STATIC_OPENAPI, 'ovok-api-public.yaml'), readFileSync(SPEC_PATH));

  return { tags: sortedTags.length };
}

// ─── FHIR R5 (catalog → MDX per resource) ─────────────────────────────
const MATURITY_LABEL = {
  0: 'Draft',
  1: 'Trial Use 1',
  2: 'Trial Use 2',
  3: 'Trial Use 3',
  4: 'Trial Use 4',
  5: 'Normative',
};

function fhirResourcePage(resource) {
  const { name, category, maturity, short } = resource;
  const lower = name; // FHIR resource paths preserve PascalCase
  return `---
title: ${name}
sidebar_label: ${name}
description: ${escapeMdx(short)} FHIR R5 resource, served by the Ovok FHIR API.
---

# ${name}

<span className="fhir-maturity" data-level="${maturity}">${MATURITY_LABEL[maturity] ?? 'Unspecified'}</span>
<span className="fhir-category">${category}</span>

${escapeMdx(short)}

## Endpoints

The standard FHIR R5 interactions for \`${name}\` are mounted under your
selected release tier:

<ApiBase surface="fhir" path="/${lower}" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read       | \`GET\`    | \`/${lower}/[id]\` |
| Vread      | \`GET\`    | \`/${lower}/[id]/_history/[vid]\` |
| Update     | \`PUT\`    | \`/${lower}/[id]\` |
| Patch      | \`PATCH\`  | \`/${lower}/[id]\` |
| Delete     | \`DELETE\` | \`/${lower}/[id]\` |
| Create     | \`POST\`   | \`/${lower}\` |
| Search     | \`GET\`    | \`/${lower}?...\` |
| History    | \`GET\`    | \`/${lower}/[id]/_history\` |
| Type-history | \`GET\`  | \`/${lower}/_history\` |

All calls expect FHIR-flavoured JSON
(\`Content-Type: application/fhir+json\`) and accept the standard
\`Accept: application/fhir+json\` header.

## Common search parameters

Every searchable FHIR R5 resource accepts the universal search
parameters below, in addition to its own. See the official spec link
for the resource-specific set.

| Parameter | Meaning |
| --- | --- |
| \`_id\` | Logical id of the resource |
| \`_lastUpdated\` | When the resource version last changed |
| \`_profile\` | Profiles this resource claims to conform to |
| \`_security\` | Security labels applied to the resource |
| \`_source\` | Source system identifier |
| \`_tag\` | Tags applied to the resource |
| \`_text\` | Free-text search over narrative |
| \`_summary\` | Subset of the response (\`true\`, \`text\`, \`data\`, \`count\`, \`false\`) |
| \`_elements\` | Comma-separated list of elements to include |
| \`_include\` | Pull in referenced resources |
| \`_revinclude\` | Pull in resources that reference this one |
| \`_sort\` | Server sort order |
| \`_count\` | Max number of matches per page |

## Reference

- Official FHIR R5 spec: [\`${name}\`](https://hl7.org/fhir/R5/${name.toLowerCase()}.html)
- Search parameters: [\`${name}\` search params](https://hl7.org/fhir/R5/${name.toLowerCase()}.html#search)
- Resource maturity: **${MATURITY_LABEL[maturity] ?? 'Unspecified'}** (FMM ${maturity}).
`;
}

function generateFhir() {
  const catalog = JSON.parse(readFileSync(FHIR_DATA_PATH, 'utf8'));
  const resources = [...catalog.resources].sort((a, b) => a.name.localeCompare(b.name));

  // Group by category for sidebar
  const byCategory = new Map();
  for (const r of resources) {
    if (!byCategory.has(r.category)) byCategory.set(r.category, []);
    byCategory.get(r.category).push(r);
  }
  const categoryOrder = Object.keys(catalog.categories);

  ensureCleanDir(OUT_FHIR);

  // Per-resource pages
  for (const r of resources) {
    const dir = join(OUT_FHIR, slug(r.category));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, `${slug(r.name)}.mdx`), fhirResourcePage(r));
  }

  // Sidebar
  const sidebarItems = [
    { type: 'doc', id: 'api/fhir/index', label: 'Overview' },
  ];
  for (const category of categoryOrder) {
    const items = byCategory.get(category);
    if (!items) continue;
    sidebarItems.push({
      type: 'category',
      label: category,
      collapsed: true,
      items: items.map((r) => ({
        type: 'doc',
        id: `api/fhir/${slug(category)}/${slug(r.name)}`,
        label: r.name,
      })),
    });
  }
  writeFileSync(join(OUT_FHIR, 'sidebar.json'), JSON.stringify(sidebarItems, null, 2));

  // Index
  const categoryBlocks = categoryOrder
    .filter((cat) => byCategory.has(cat))
    .map((cat) => {
      const items = byCategory.get(cat);
      const lines = items
        .map((r) => `- [${r.name}](/api/fhir/${slug(cat)}/${slug(r.name)}) — ${escapeMdx(r.short)}`)
        .join('\n');
      return [
        `### ${cat}`,
        '',
        `*${escapeMdx(catalog.categories[cat])}*`,
        '',
        lines,
        '',
      ].join('\n');
    })
    .join('\n');

  writeFileSync(join(OUT_FHIR, 'index.mdx'),
`---
title: FHIR API
sidebar_position: 1
description: The Ovok FHIR API exposes every FHIR R5 resource — Patient, Observation, Encounter, CarePlan and the rest — under one host, with the standard set of FHIR interactions on each.
---

# FHIR API

The FHIR API is the raw data plane. Every FHIR R5 resource type is
mounted under a single host with the standard set of REST interactions
— read, vread, update, patch, delete, create, search, history.

<ApiBase surface="fhir" inline={false} />

> Looking for higher-level workflows (auth, projects, billing, content)?
> See the [High Level API](/api/high-level).

## What's documented here

This section catalogues all **${resources.length}** FHIR R5 resource types
supported by Ovok. Each resource has its own page describing the
endpoints, common search parameters and a link to the official FHIR R5
specification.

## Conventions

- **Wire format** — \`application/fhir+json\` for both request and response.
- **Versioning** — every write returns the new \`Resource.meta.versionId\`;
  use it with the read endpoint's \`_vread\` form to fetch a historical version.
- **Searching** — all resources accept the
  [universal FHIR search parameters](https://hl7.org/fhir/R5/search.html)
  (\`_id\`, \`_lastUpdated\`, \`_profile\`, \`_security\`, \`_source\`, \`_tag\`,
  \`_text\`, \`_summary\`, \`_elements\`, \`_include\`, \`_revinclude\`,
  \`_sort\`, \`_count\`).
- **Maturity** — each resource carries an HL7 FHIR Maturity Model (FMM)
  level. \`5\` is *Normative* (stable forever). \`0\`–\`4\` are *Trial Use*
  and may change between R5 ballots.

## Resources by category

${categoryBlocks}
`);

  return { resources: resources.length, categories: byCategory.size };
}

// ─── run ──────────────────────────────────────────────────────────────
const hl = generateHighLevel();
const fhir = generateFhir();

console.log(`High Level API → ${hl.tags} tag pages + index → ${OUT_HIGH}`);
console.log(`FHIR API       → ${fhir.resources} resources in ${fhir.categories} categories → ${OUT_FHIR}`);
console.log(`Static spec    → ${STATIC_OPENAPI}/ovok-api-public.yaml`);
