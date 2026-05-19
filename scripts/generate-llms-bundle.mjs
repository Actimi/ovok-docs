#!/usr/bin/env node
/**
 * Emit a raw-markdown twin of every doc page into static/llms/. The
 * Copy-for-AI button fetches its matching twin and copies it to the
 * clipboard for pasting into ChatGPT / Claude / Cursor / etc.
 *
 * URL mapping mirrors the multi-instance docs setup:
 *   - Each env folder docs/<env>/ is mounted at /<env>/ in the browser.
 *   - A file at docs/<env>/<rest>/<name>.md serves at /<env>/<rest>/<name>
 *     and its markdown twin lives at /llms/<env>/<rest>/<name>.md.
 *   - Frontmatter `slug:` overrides the path. `slug: /` collapses the
 *     URL to /<env> (the env's root); the twin lives at /llms/<env>.md.
 *
 * Orphans from prior runs are swept at the end so stale paths from the
 * previous (pre-multi-instance) layout don't linger.
 */

import {
  readFileSync, writeFileSync, mkdirSync, existsSync,
  readdirSync, rmSync,
} from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const DOCS = join(REPO_ROOT, 'docs');
const OUT  = join(REPO_ROOT, 'static/llms');
const LLMS_TXT = join(REPO_ROOT, 'static/llms.txt');

const ENV_FOLDERS = new Set(['dev', 'alpha', 'beta', 'final']);

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
    try { if (readFileSync(path, 'utf8') === content) return false; } catch { /* fall through */ }
  }
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
  return true;
}

function sweepOrphans(dir) {
  if (!existsSync(dir)) return 0;
  let removed = 0;
  const stack = [dir];
  while (stack.length) {
    const cur = stack.pop();
    let entries;
    try { entries = readdirSync(cur, { withFileTypes: true }); } catch { continue; }
    for (const ent of entries) {
      const full = join(cur, ent.name);
      if (ent.isDirectory()) stack.push(full);
      else if (!WRITTEN.has(full)) {
        try { rmSync(full); removed++; } catch {}
      }
    }
  }
  return removed;
}

/**
 * Compute the public URL for a doc file given its on-disk path.
 *
 *   docs/dev/intro.md           (slug:/)           → /dev
 *   docs/dev/platform/foo.md                       → /dev/platform/foo
 *   docs/dev/api/fhir/base/patient.mdx             → /dev/api/fhir/base/patient
 *   docs/intro.md  (legacy, no env folder)         → /intro
 */
function urlForDocFile(absPath, content) {
  const fmSlug = parseFrontmatterSlug(content);
  const rel = relative(DOCS, absPath).replace(/\.(md|mdx)$/, '');
  const segments = rel.split(sep);
  const first = segments[0];
  const isEnvScoped = ENV_FOLDERS.has(first);
  const envPrefix = isEnvScoped ? `/${first}` : '';
  const restSegments = isEnvScoped ? segments.slice(1) : segments;

  if (fmSlug) {
    const slug = fmSlug.startsWith('/') ? fmSlug : `/${fmSlug}`;
    if (slug === '/') {
      // Page lives at the env root (or site root if not env-scoped).
      return envPrefix || '/';
    }
    return `${envPrefix}${slug}`;
  }
  return `${envPrefix}/${restSegments.join('/')}`;
}

/**
 * Convert a public URL to the on-disk twin path. The CopyForAI button
 * fetches /llms<pathname>.md, so this mapping has to match.
 *
 *   /dev                → static/llms/dev.md
 *   /dev/api/foo        → static/llms/dev/api/foo.md
 *   /                   → static/llms/index.md
 */
function llmsPathForUrl(url) {
  const trimmed = url.replace(/\/$/, '');
  if (!trimmed) return join(OUT, 'index.md');
  return join(OUT, `${trimmed.replace(/^\//, '')}.md`);
}

mkdirSync(OUT, { recursive: true });

const files = walk(DOCS);
let count = 0;
const urls = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  const url = urlForDocFile(file, content);
  writeIfChanged(llmsPathForUrl(url), content);
  count++;
  urls.push(url);
}

const sortedUrls = [...urls].sort((a, b) => a.localeCompare(b));

// Manifest of URLs (paths the docs site serves), for the floating
// CopyForAI button to probe and for AI crawlers to enumerate.
writeIfChanged(join(OUT, 'manifest.json'), JSON.stringify(sortedUrls, null, 2));

// /llms.txt at the site root — the emerging llmstxt.org convention.
const llmsTxt =
`# Ovok Documentation

Every doc page is mirrored as raw markdown at /llms<url>.md.
Manifest: /llms/manifest.json

${sortedUrls.map((u) => `- ${u === '/' ? '/index' : u}.md`).join('\n')}
`;
writeIfChanged(LLMS_TXT, llmsTxt);

const removed = sweepOrphans(OUT);

console.log(`LLMs bundle → ${count} pages → ${OUT}${removed ? ` (swept ${removed} orphan${removed === 1 ? '' : 's'})` : ''}`);
