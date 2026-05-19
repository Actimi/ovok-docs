import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import highLevelSidebar from '../docs/dev/api/high-level/sidebar.json';
import fhirSidebar from '../docs/dev/api/fhir/sidebar.json';

/**
 * Sidebar for the `dev` tier docs at /dev/...
 *
 * Doc ids here are scoped to the plugin's `path: 'docs/dev/'` — so
 * `docs/dev/intro.md` becomes id `intro`, not `dev/intro`. The
 * generated sidebar.json files follow the same convention.
 */
const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Platform',
      collapsed: false,
      items: ['platform/overview', 'platform/environments'],
    },
    {
      type: 'category',
      label: 'Surfaces',
      collapsed: false,
      items: ['surfaces/console', 'surfaces/data-dashboard'],
    },
    {
      type: 'category',
      label: 'High Level API',
      collapsed: true,
      items: highLevelSidebar as never,
    },
    {
      type: 'category',
      label: 'FHIR API',
      collapsed: true,
      items: fhirSidebar as never,
    },
  ],
};

export default sidebars;
