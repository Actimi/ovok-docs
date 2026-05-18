import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ovok',
  tagline: 'The API platform for digital health teams',
  favicon: 'img/favicon.svg',

  url: 'https://docs.ovok.com',
  baseUrl: '/',
  trailingSlash: false,

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

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content:
          'Ovok is the API platform for digital health teams. Build patient-facing apps, clinical workflows and partner integrations on a single, FHIR-native surface.',
      },
    },
    { tagName: 'meta', attributes: { name: 'theme-color', content: '#694D98' } },
    { tagName: 'meta', attributes: { property: 'og:type', content: 'website' } },
    { tagName: 'meta', attributes: { property: 'og:site_name', content: 'Ovok' } },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: 'Ovok — The API platform for digital health teams',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content:
          'Build patient-facing apps, clinical workflows and partner integrations on a single, FHIR-native surface. One Console, one API, three release tiers.',
      },
    },
    { tagName: 'meta', attributes: { name: 'twitter:card', content: 'summary_large_image' } },
    { tagName: 'link', attributes: { rel: 'canonical', href: 'https://docs.ovok.com' } },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Ovok — The API platform for digital health teams',
        description:
          'Documentation for Ovok: the Console, the Data Dashboard, the API, and the release tiers you ship against.',
        publisher: { '@type': 'Organization', name: 'Actimi', url: 'https://actimi.com' },
        inLanguage: 'en',
      }),
    },
  ],

  stylesheets: [
    { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
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
        sitemap: { changefreq: 'weekly', priority: 0.7 },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/ovok-social-card.png',
    metadata: [
      {
        name: 'keywords',
        content:
          'digital health, FHIR API, healthcare platform, patient apps, clinical workflows, healthcare integrations, Ovok, Actimi',
      },
      { name: 'author', content: 'Actimi GmbH' },
      { name: 'robots', content: 'index, follow' },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    mermaid: { theme: { light: 'neutral', dark: 'dark' } },
    navbar: {
      title: 'Ovok',
      logo: { alt: 'Ovok', src: 'img/logo.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Docs' },
        { to: '/playground', label: 'Playground', position: 'left' },
        { type: 'custom-envSwitcher', position: 'right' },
        { href: 'https://console.ovok.com',   label: 'Console',         position: 'right' },
        { href: 'https://dashboard.ovok.com', label: 'Data Dashboard',  position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Product',
          items: [
            { label: 'Introduction', to: '/' },
            { label: 'Platform overview', to: '/platform/overview' },
            { label: 'Release tiers', to: '/platform/environments' },
          ],
        },
        {
          title: 'Surfaces',
          items: [
            { label: 'Console', to: '/surfaces/console' },
            { label: 'Data Dashboard', to: '/surfaces/data-dashboard' },
          ],
        },
        {
          title: 'API',
          items: [
            { label: 'High Level API', to: '/api/high-level' },
            { label: 'FHIR API',       to: '/api/fhir' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'Actimi', href: 'https://actimi.com' },
            { label: 'Status', href: 'https://status.ovok.com' },
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
