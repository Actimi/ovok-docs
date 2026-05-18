import { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useEnv } from '@site/src/lib/useEnv';
import styles from './styles.module.css';

const STORAGE_KEY = 'ovok-docs:sidebar-filter';
type FilterMode = 'only-current' | 'all';

function readStored(): FilterMode {
  if (typeof window === 'undefined') return 'only-current';
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw === 'all' ? 'all' : 'only-current';
  } catch {
    return 'only-current';
  }
}

function applyToBody(mode: FilterMode) {
  if (typeof document === 'undefined') return;
  document.body.dataset.docFilter = mode;
}

/**
 * Floating toggle that switches the sidebar between
 *   - 'only-current': hide endpoints not available in the active env
 *   - 'all':          show everything, with strikethrough on non-current ones
 *
 * The actual show/hide CSS lives in src/css/custom.css; this component
 * just toggles body[data-doc-filter] and persists the preference.
 *
 * Default is 'only-current' — per the design call: production docs
 * shouldn't drown users in dev-only endpoints unless they ask for them.
 */
function EnvFilterToggleImpl(): JSX.Element {
  const { env } = useEnv();
  const [mode, setMode] = useState<FilterMode>('only-current');

  useEffect(() => {
    const stored = readStored();
    setMode(stored);
    applyToBody(stored);
  }, []);

  useEffect(() => {
    applyToBody(mode);
    try { window.localStorage.setItem(STORAGE_KEY, mode); } catch { /* ignore */ }
  }, [mode]);

  const next: FilterMode = mode === 'only-current' ? 'all' : 'only-current';
  const labelOn  = `Only ${env}`;
  const labelOff = `All envs`;

  return (
    <button
      type="button"
      className={styles.toggle}
      data-mode={mode}
      onClick={() => setMode(next)}
      title={mode === 'only-current'
        ? `Showing only endpoints in ${env}. Click to show all.`
        : 'Showing endpoints from every env. Click to filter to current.'}
    >
      <span className={styles.icon} aria-hidden="true">
        {mode === 'only-current' ? '⚲' : '⌗'}
      </span>
      <span className={styles.label}>
        {mode === 'only-current' ? labelOn : labelOff}
      </span>
    </button>
  );
}

export default function EnvFilterToggle(): JSX.Element {
  return (
    <BrowserOnly>
      {() => <EnvFilterToggleImpl />}
    </BrowserOnly>
  );
}
