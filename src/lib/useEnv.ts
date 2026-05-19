import { useLocation } from '@docusaurus/router';
import { DEFAULT_ENV, ENVS, envFromPathname, type EnvConfig, type EnvKey } from './env';

/**
 * Reactive env hook driven by the current URL. The active env is whatever
 * tier prefix the visitor is browsing — `/dev/...` → `dev`, `/alpha/...`
 * → `alpha`. Outside any tier prefix (the root landing page) we fall back
 * to DEFAULT_ENV so MDX components that read `config.hosts` still have
 * something sane to render.
 *
 * The setEnv function is exposed for compatibility but is a no-op in the
 * URL-driven model — the EnvSwitcher does the actual route navigation.
 */
export function useEnv(): {
  env: EnvKey;
  setEnv: (next: EnvKey) => void;
  config: EnvConfig;
} {
  const location = useLocation();
  const env = envFromPathname(location.pathname) ?? DEFAULT_ENV;
  // Kept as a no-op for legacy callers; the switcher uses router.push.
  const setEnv = () => { /* URL is the source of truth */ };
  return { env, setEnv, config: ENVS[env] };
}
