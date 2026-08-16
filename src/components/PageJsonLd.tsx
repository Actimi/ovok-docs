import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';

/**
 * Per-page TechArticle JSON-LD. Docusaurus already emits BreadcrumbList
 * for docs routes; this adds the Article schema Google uses to surface
 * docs as rich results. Ignored on the homepage (the Organization +
 * WebSite schemas in headTags already cover the site root).
 *
 * Headline/description come from the rendered <title> and <meta
 * name=description> Docusaurus stamps in the head — we don't try to
 * duplicate them here. We emit the *structural* schema only.
 */
export default function PageJsonLd(): React.JSX.Element | null {
  const { siteConfig } = useDocusaurusContext();
  const { pathname } = useLocation();

  if (pathname === '/' || pathname === '') return null;

  const url = `${siteConfig.url}${pathname}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: 'en',
    isPartOf: { '@type': 'WebSite', name: 'Ovok Docs', url: siteConfig.url },
    publisher: {
      '@type': 'Organization',
      name: 'Actimi GmbH',
      url: 'https://actimi.com',
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/img/logo.svg` },
    },
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  );
}
