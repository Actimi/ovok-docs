import { useEffect } from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { DEFAULT_ENV } from '../lib/env';

/**
 * Root landing. The root URL redirects to the default release tier.
 * Sourced from DEFAULT_ENV (src/lib/env.ts) so it tracks the tier the
 * rest of the site defaults to — currently `alpha`. (Previously
 * hard-coded to `/dev`, a tier that no longer exists, so the root
 * bounced visitors to a 404.) When a landing/tier-picker page is
 * built this redirect can be replaced.
 */
const DEFAULT_TIER_PATH = `/${DEFAULT_ENV}`;

function RootRedirect(): React.JSX.Element {
  const history = useHistory();
  useEffect(() => {
    history.replace(DEFAULT_TIER_PATH);
  }, [history]);
  return (
    <p style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--ink-3)' }}>
      Redirecting to <a href={DEFAULT_TIER_PATH}>{DEFAULT_TIER_PATH}</a>…
    </p>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Ovok docs" description="Documentation for the Ovok platform.">
      <BrowserOnly fallback={<p style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>Loading…</p>}>
        {() => <RootRedirect />}
      </BrowserOnly>
    </Layout>
  );
}
