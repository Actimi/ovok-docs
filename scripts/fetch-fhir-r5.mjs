#!/usr/bin/env node
/**
 * Download and extract the official hl7.fhir.r5.core package into
 * .fhir-cache/. The cache is .gitignored; the generated MDX is what
 * gets committed.
 *
 * No-ops if the cache already has package/.index.json — re-run with
 * --force or delete the cache directory to refresh.
 */

import { mkdirSync, existsSync, rmSync, createWriteStream, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { spawnSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const CACHE_DIR = join(REPO_ROOT, '.fhir-cache');
const PACKAGE_TARBALL = join(CACHE_DIR, 'hl7.fhir.r5.core.tgz');
const PACKAGE_DIR = join(CACHE_DIR, 'package');
const INDEX_FILE = join(PACKAGE_DIR, '.index.json');

const PACKAGE_URL = 'https://packages.fhir.org/hl7.fhir.r5.core/5.0.0';

const force = process.argv.includes('--force');

if (!force && existsSync(INDEX_FILE)) {
  console.log(`FHIR R5 package already cached at ${PACKAGE_DIR}`);
  console.log(`(re-run with --force to refresh)`);
  process.exit(0);
}

mkdirSync(CACHE_DIR, { recursive: true });

// Download via fetch (Node 18+). The FHIR registry serves a tarball.
console.log(`Downloading ${PACKAGE_URL} → ${PACKAGE_TARBALL}`);
const res = await fetch(PACKAGE_URL, {
  headers: { Accept: 'application/tar+gzip, application/octet-stream' },
  redirect: 'follow',
});
if (!res.ok) {
  console.error(`HTTP ${res.status} ${res.statusText}`);
  process.exit(1);
}
await pipeline(res.body, createWriteStream(PACKAGE_TARBALL));

const size = statSync(PACKAGE_TARBALL).size;
console.log(`Wrote ${(size / 1024 / 1024).toFixed(1)} MB`);

// Extract. Bun and Node both have system tar available; spawn it.
if (existsSync(PACKAGE_DIR)) rmSync(PACKAGE_DIR, { recursive: true, force: true });

const tar = spawnSync('tar', ['-xzf', PACKAGE_TARBALL, '-C', CACHE_DIR], { stdio: 'inherit' });
if (tar.status !== 0) {
  console.error('tar extraction failed');
  process.exit(tar.status ?? 1);
}

if (!existsSync(INDEX_FILE)) {
  console.error(`Expected ${INDEX_FILE} after extraction — package layout unexpected`);
  process.exit(1);
}

console.log(`Extracted to ${PACKAGE_DIR}`);
