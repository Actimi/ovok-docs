import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

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
  ],
};

export default sidebars;
