import { useEffect } from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';
import BrowserOnly from '@docusaurus/BrowserOnly';

/**
 * Root landing. Today only the dev tier is released, so the root URL
 * redirects to /dev. When other tiers come online, this can become a
 * proper landing page that lets users choose a tier — for now the
 * shortest path to docs wins.
 */
function RootRedirect(): JSX.Element {
  const history = useHistory();
  useEffect(() => {
    history.replace('/dev');
  }, [history]);
  return (
    <p style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--ink-3)' }}>
      Redirecting to <a href="/dev">/dev</a>…
    </p>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="Ovok docs" description="Documentation for the Ovok platform.">
      <BrowserOnly fallback={<p style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>Loading…</p>}>
        {() => <RootRedirect />}
      </BrowserOnly>
    </Layout>
  );
}
