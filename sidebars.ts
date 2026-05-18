import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import highLevelSidebar from './docs/api/high-level/sidebar.json';
import fhirSidebar from './docs/api/fhir/sidebar.json';

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
