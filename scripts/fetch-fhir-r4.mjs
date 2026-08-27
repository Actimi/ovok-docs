#!/usr/bin/env node
/**
 * Download the official HL7 FHIR R4 core package used to enrich the
 * capability-driven Ovok FHIR contract with resource field descriptions.
 */

import { mkdirSync, existsSync, readFileSync, rmSync, createWriteStream, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { spawnSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const CACHE_DIR = join(REPO_ROOT, '.fhir-cache');
const PACKAGE_TARBALL = join(CACHE_DIR, 'hl7.fhir.r4.core.tgz');
const PACKAGE_DIR = join(CACHE_DIR, 'package');
const INDEX_FILE = join(PACKAGE_DIR, '.index.json');
const PACKAGE_URL = 'https://packages.fhir.org/hl7.fhir.r4.core/4.0.1';

const force = process.argv.includes('--force');

if (!force && existsSync(INDEX_FILE)) {
  const packageMetadata = JSON.parse(readFileSync(join(PACKAGE_DIR, 'package.json'), 'utf8'));
  if (packageMetadata.name === 'hl7.fhir.r4.core' && packageMetadata.version === '4.0.1') {
    console.log(`FHIR R4 package already cached at ${PACKAGE_DIR}`);
    process.exit(0);
  }
}

mkdirSync(CACHE_DIR, { recursive: true });
console.log(`Downloading ${PACKAGE_URL} → ${PACKAGE_TARBALL}`);
const response = await fetch(PACKAGE_URL, {
  headers: { Accept: 'application/tar+gzip, application/octet-stream' },
  redirect: 'follow',
});

if (!response.ok) {
  throw new Error(`FHIR package download failed: HTTP ${response.status} ${response.statusText}`);
}

await pipeline(response.body, createWriteStream(PACKAGE_TARBALL));
console.log(`Wrote ${(statSync(PACKAGE_TARBALL).size / 1024 / 1024).toFixed(1)} MB`);

if (existsSync(PACKAGE_DIR)) {
  rmSync(PACKAGE_DIR, { recursive: true, force: true });
}

const extraction = spawnSync('tar', ['-xzf', PACKAGE_TARBALL, '-C', CACHE_DIR], { stdio: 'inherit' });
if (extraction.status !== 0) {
  throw new Error(`FHIR package extraction failed with status ${extraction.status ?? 'unknown'}.`);
}
if (!existsSync(INDEX_FILE)) {
  throw new Error(`Expected ${INDEX_FILE} after extraction.`);
}

console.log(`Extracted FHIR R4 definitions to ${PACKAGE_DIR}`);
