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

  // Rspack-based build + SWC for transforms + Lightning CSS. Cuts cold
  // route compilation from ~10s to ~1s with 270+ MDX files in the tree.
  // The v4 flag is required by faster.ssgWorkerThreads and is otherwise
  // harmless on 3.x — it's a no-op until v4 lands.
  future: {
    v4: true,
    faster: true,
  },

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
        // The classic preset's built-in docs plugin is disabled; each env
        // gets its own plugin instance below so they stay completely
        // independent (own sidebar, own URL prefix, own MDX tree).
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: { changefreq: 'weekly', priority: 0.7 },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dev',
        path: 'docs/dev',
        routeBasePath: '/dev',
        sidebarPath: './sidebars/dev.ts',
        editUrl: 'https://github.com/Actimi/ovok-docs/tree/dev/',
      },
    ],
    // alpha / beta / final plugin instances are added here as the
    // corresponding ovok-internal branches merge through and produce
    // their per-env spec + docs folder. Until then only `dev` is wired.
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
        // docSidebar with docsPluginId targets the dev instance for the Docs link.
        { type: 'docSidebar', sidebarId: 'docs', docsPluginId: 'dev', position: 'left', label: 'Docs' },
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
            { label: 'Introduction', to: '/dev' },
            { label: 'Platform overview', to: '/dev/platform/overview' },
            { label: 'Release tiers', to: '/dev/platform/environments' },
          ],
        },
        {
          title: 'Surfaces',
          items: [
            { label: 'Console', to: '/dev/surfaces/console' },
            { label: 'Data Dashboard', to: '/dev/surfaces/data-dashboard' },
          ],
        },
        {
          title: 'API',
          items: [
            { label: 'High Level API', to: '/dev/api/high-level' },
            { label: 'FHIR API',       to: '/dev/api/fhir' },
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
