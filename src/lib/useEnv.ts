import { useCallback, useEffect, useState } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { CHANGE_EVENT, DEFAULT_ENV, ENVS, isEnvKey, STORAGE_KEY, type EnvKey } from './env';

function readStored(): EnvKey {
  if (typeof window === 'undefined') return DEFAULT_ENV;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return isEnvKey(raw) ? raw : DEFAULT_ENV;
  } catch {
    return DEFAULT_ENV;
  }
}

/**
 * Reactive env hook — reads localStorage, listens for cross-component
 * changes via a custom event so the navbar switcher and any inline
 * <ApiBase /> on the page stay in sync without a global provider.
 */
export function useEnv(): {
  env: EnvKey;
  setEnv: (next: EnvKey) => void;
  config: typeof ENVS[EnvKey];
} {
  const isBrowser = useIsBrowser();
  const [env, setEnvState] = useState<EnvKey>(DEFAULT_ENV);

  useEffect(() => {
    if (!isBrowser) return;
    setEnvState(readStored());

    const handler = (event: Event) => {
      const next = (event as CustomEvent<EnvKey>).detail;
      if (isEnvKey(next)) setEnvState(next);
    };
    const storageHandler = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY && isEnvKey(event.newValue)) {
        setEnvState(event.newValue);
      }
    };

    window.addEventListener(CHANGE_EVENT, handler);
    window.addEventListener('storage', storageHandler);
    return () => {
      window.removeEventListener(CHANGE_EVENT, handler);
      window.removeEventListener('storage', storageHandler);
    };
  }, [isBrowser]);

  const setEnv = useCallback((next: EnvKey) => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* private mode — ignore */
    }
    window.dispatchEvent(new CustomEvent<EnvKey>(CHANGE_EVENT, { detail: next }));
    setEnvState(next);
  }, []);

  return { env, setEnv, config: ENVS[env] };
}
