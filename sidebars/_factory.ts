import fs from 'node:fs';
import path from 'node:path';
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Build the sidebar for a given env tier. Each tier owns its own folder
 * under docs/<envKey>/ and gets the same structure: Intro, Platform,
 * Surfaces, High Level API, FHIR API. The API categories pull from
 * generator-emitted sidebar.json files; the rest are static MDX pages.
 *
 * When a category's underlying content is missing (e.g. an env folder
 * exists but the OpenAPI generator hasn't run yet for it), the category
 * is omitted so the build doesn't break.
 */
export function buildSidebar(envKey: string): SidebarsConfig {
  const envDir = path.join(__dirname, '..', 'docs', envKey);

  const items: NonNullable<SidebarsConfig['docs']> = ['intro'];

  if (existsAny(path.join(envDir, 'platform'))) {
    items.push({
      type: 'category',
      label: 'Platform',
      collapsed: false,
      items: ['platform/overview', 'platform/environments'],
    });
  }

  if (existsAny(path.join(envDir, 'surfaces'))) {
    items.push({
      type: 'category',
      label: 'Surfaces',
      collapsed: false,
      items: ['surfaces/console', 'surfaces/data-dashboard'],
    });
  }

  if (existsAny(path.join(envDir, 'cms'))) {
    items.push({
      type: 'category',
      label: 'Content (CMS)',
      collapsed: false,
      items: [
        'cms/index',
        'cms/enable',
        'cms/authoring',
        'cms/public-delivery',
        'cms/api-keys',
      ],
    });
  }

  const highLevelJson = path.join(envDir, 'api', 'high-level', 'sidebar.json');
  if (fs.existsSync(highLevelJson)) {
    items.push({
      type: 'category',
      label: 'High Level API',
      collapsed: true,
      items: JSON.parse(fs.readFileSync(highLevelJson, 'utf8')),
    });
  }

  const fhirJson = path.join(envDir, 'api', 'fhir', 'sidebar.json');
  if (fs.existsSync(fhirJson)) {
    items.push({
      type: 'category',
      label: 'FHIR API',
      collapsed: true,
      items: JSON.parse(fs.readFileSync(fhirJson, 'utf8')),
    });
  }

  return { docs: items };
}

function existsAny(dir: string): boolean {
  try {
    return fs.statSync(dir).isDirectory();
  } catch {
    return false;
  }
}
