#!/usr/bin/env node
/**
 * Walk docs/ and emit a raw-markdown twin of every .md / .mdx page into
 * static/llms/. The Copy-for-AI button on each page fetches its matching
 * twin and copies it to the clipboard for pasting into ChatGPT, Claude, etc.
 *
 * URL mapping mirrors Docusaurus' default route shape (docs preset uses
 * routeBasePath: '/' so the docs/ prefix is stripped). Frontmatter `slug:`
 * overrides the path — without that, file path = URL path.
 */

import {
  readFileSync, writeFileSync, mkdirSync, existsSync,
  readdirSync, statSync,
} from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const DOCS = join(REPO_ROOT, 'docs');
const OUT  = join(REPO_ROOT, 'static/llms');

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) out.push(full);
  }
  return out;
}

function parseFrontmatterSlug(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const sm = m[1].match(/^slug:\s*(.+)$/m);
  if (!sm) return null;
  return sm[1].trim().replace(/^["']|["']$/g, '');
}

const WRITTEN = new Set();
function writeIfChanged(path, content) {
  WRITTEN.add(path);
  if (existsSync(path)) {
    try {
      if (readFileSync(path, 'utf8') === content) return false;
    } catch { /* fall through */ }
  }
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
  return true;
}

mkdirSync(OUT, { recursive: true });

const files = walk(DOCS);
let count = 0;
const slugs = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  const fmSlug = parseFrontmatterSlug(content);
  const rel = relative(DOCS, file).replace(/\.(md|mdx)$/, '');

  let permalink;
  if (fmSlug) {
    permalink = fmSlug.startsWith('/') ? fmSlug : `/${fmSlug}`;
  } else {
    permalink = `/${rel}`;
  }
  // Normalise: `/` → /index, drop trailing /index, etc.
  const targetPath = permalink === '/' ? '/index' : permalink;
  const outPath = join(OUT, `${targetPath}.md`);

  writeIfChanged(outPath, content);
  count++;
  slugs.push({ permalink, file: relative(REPO_ROOT, file) });
}

// Emit an index so the floating button can know what's available without
// 404-probing — and an llms.txt manifest (the emerging convention for
// "robots.txt but for AI crawlers" — see llmstxt.org).
const manifest = slugs
  .sort((a, b) => a.permalink.localeCompare(b.permalink))
  .map((s) => s.permalink);
writeIfChanged(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));

// /llms.txt is conventionally at the root, not under /llms/, so emit twice.
const llmsTxt =
`# Ovok Documentation

This site exposes a per-page Markdown twin of every doc page at /llms/<path>.md.
Use these for AI-assisted documentation lookup. Manifest: /llms/manifest.json

${manifest.map((p) => `- ${p === '/' ? '/index' : p}.md`).join('\n')}
`;
writeIfChanged(join(REPO_ROOT, 'static/llms.txt'), llmsTxt);

console.log(`LLMs bundle → ${count} pages → ${OUT}`);
