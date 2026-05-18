import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Platform',
      collapsed: false,
      items: ['platform/overview', 'platform/architecture', 'platform/environments'],
    },
    {
      type: 'category',
      label: 'Surfaces',
      items: ['surfaces/console'],
    },
  ],
};

export default sidebars;
