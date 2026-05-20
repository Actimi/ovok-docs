import fs from 'node:fs';
import path from 'node:path';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

/**
 * Env folders are auto-discovered. Each release tier owns a folder under
 * docs/<env>/ that lands when its source branch in ovok-internal merges
 * through and the publish-ovok-docs workflow writes the freshly-built
 * spec + generated MDX. The first push that creates the folder is enough
 * for the env to show up here — no config edits required.
 *
 * The order is fixed (dev → alpha → beta → final) so the switcher always
 * lists tiers in maturity order regardless of which arrived first.
 */
const ALL_ENVS = ['dev', 'alpha', 'beta', 'final'] as const;
type EnvKey = (typeof ALL_ENVS)[number];

const DOCS_DIR = path.join(__dirname, 'docs');
const RELEASED_ENVS: EnvKey[] = ALL_ENVS.filter((env) => {
  const envDir = path.join(DOCS_DIR, env);
  return (
    fs.existsSync(path.join(envDir, 'intro.md')) ||
    fs.existsSync(path.join(envDir, 'intro.mdx'))
  );
});

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

  themes: [
    '@docusaurus/theme-mermaid',
    // Local Lunr-based search. No Algolia account / approval workflow,
    // no external network hop — the index is built at `docusaurus build`
    // time and shipped statically alongside the rest of the site.
    // Indexes every released env's docs tree; the search palette opens
    // on ⌘K / Ctrl+K, matches as you type, and ranks against title +
    // section heading + body.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: RELEASED_ENVS.map((env) => `/${env}`),
        docsDir: RELEASED_ENVS.map((env) => `docs/${env}`),
        // We don't use the classic preset's built-in docs plugin (each
        // env has its own plugin instance with `id: env`). The search
        // theme's SearchBar calls `useActiveVersion('default')` by
        // default and crashes when no default instance exists. Pointing
        // it at our first released env's plugin id lets it resolve.
        docsPluginIdForPreferredVersion: RELEASED_ENVS[0],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 10,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
      },
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Site-wide head tags only. Per-page tags (canonical, og:title,
  // og:description, twitter:card, keywords) are emitted by Docusaurus
  // automatically from each MDX file's frontmatter — duplicating them
  // here would override or shadow the per-page versions.
  headTags: [
    { tagName: 'meta', attributes: { name: 'theme-color', content: '#694D98' } },
    { tagName: 'meta', attributes: { property: 'og:type', content: 'website' } },
    { tagName: 'meta', attributes: { property: 'og:site_name', content: 'Ovok' } },

    // Font loading: connect early to Google's font servers, then ask for
    // just the 4 weights actually used (down from variable 300..700) and
    // load the stylesheet asynchronously so it doesn't gate first paint.
    // FOIT is mitigated by display=swap on the URL.
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;600&family=Instrument+Serif:ital@0;1&display=swap',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;600&family=Instrument+Serif:ital@0;1&display=swap',
        media: 'print',
        onload: "this.media='all'",
      },
    },
    {
      // Final fallback so users with JS disabled still get the fonts.
      tagName: 'noscript',
      attributes: {},
      innerHTML:
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;600&family=Instrument+Serif:ital@0;1&display=swap">',
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ovok',
        url: 'https://docs.ovok.com',
        logo: 'https://docs.ovok.com/img/logo.svg',
        parentOrganization: { '@type': 'Organization', name: 'Actimi GmbH', url: 'https://actimi.com' },
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Ovok Docs',
        url: 'https://docs.ovok.com',
        inLanguage: 'en',
        publisher: { '@type': 'Organization', name: 'Actimi GmbH' },
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: 'https://docs.ovok.com/search?q={query}' },
          'query-input': 'required name=query',
        },
      }),
    },
  ],

  // Font loading is moved into headTags below so the stylesheet can use
  // the rel="preload" + media="print" + onload swap pattern (loads in
  // parallel with the rest of the page instead of blocking first paint).

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

  plugins: RELEASED_ENVS.map((env) => [
    '@docusaurus/plugin-content-docs',
    {
      id: env,
      path: `docs/${env}`,
      routeBasePath: `/${env}`,
      sidebarPath: `./sidebars/${env}.ts`,
      editUrl: 'https://github.com/Actimi/ovok-docs/tree/dev/',
    },
  ]),

  customFields: {
    // Released envs are exposed to client components (e.g. EnvSwitcher)
    // via siteConfig.customFields so the switcher reflects whatever
    // tiers have folders on disk, with no source edits required.
    releasedEnvs: RELEASED_ENVS,
  },

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
        { type: 'custom-envLink', surface: 'console',   label: 'Console',        position: 'right' },
        { type: 'custom-envLink', surface: 'dashboard', label: 'Data Dashboard', position: 'right' },
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
