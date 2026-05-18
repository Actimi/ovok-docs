import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ovok',
  tagline: 'Infrastructure for digital health',
  favicon: 'img/favicon.ico',

  url: 'https://docs.ovok.com',
  baseUrl: '/',

  organizationName: 'Actimi',
  projectName: 'ovok-docs',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com',
      rel: 'preconnect',
    },
    {
      href: 'https://fonts.gstatic.com',
      rel: 'preconnect',
      crossorigin: 'anonymous' as const,
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Geist+Mono:wght@400..600&family=Instrument+Serif:ital@0;1&display=swap',
      rel: 'stylesheet',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/Actimi/ovok-docs/tree/alpha/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/ovok-social-card.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
    navbar: {
      title: 'Ovok',
      logo: {
        alt: 'Ovok',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'custom-envSwitcher',
          position: 'right',
        },
        {
          href: 'https://console.ovok.com',
          label: 'Console',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Platform',
          items: [
            { label: 'Introduction', to: '/' },
            { label: 'Architecture', to: '/platform/architecture' },
            { label: 'Environments', to: '/platform/environments' },
          ],
        },
        {
          title: 'Surfaces',
          items: [
            { label: 'Console', to: '/surfaces/console' },
          ],
        },
        {
          title: 'External',
          items: [
            { label: 'Status', href: 'https://status.ovok.com' },
            { label: 'Actimi', href: 'https://actimi.com' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Actimi GmbH — Ovok is a registered trademark.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'typescript', 'tsx', 'http'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
