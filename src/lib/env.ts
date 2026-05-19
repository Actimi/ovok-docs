/**
 * Single source of truth for environment surfaces.
 *
 * Each release tier owns its own folder under docs/ and serves at its own
 * URL prefix. The env switcher is a *router* — it rewrites the first path
 * segment to navigate between equivalent pages in different tiers.
 *
 *   tier   source branch    docs folder            URL prefix
 *   ────   ──────────────   ────────────────       ─────────────
 *   dev    sandbox          docs/dev/              /dev/...
 *   alpha  development      docs/alpha/            /alpha/...
 *   beta   staging          docs/beta/             /beta/...
 *   final  master           docs/final/            /final/...   (or /)
 */

export type EnvKey = 'dev' | 'alpha' | 'beta' | 'final';
export type Surface = 'api' | 'fhir' | 'console' | 'dashboard';

export interface EnvConfig {
  key: EnvKey;
  label: string;
  shortLabel: string;
  description: string;
  hosts: Record<Surface, string>;
  maturity: 'sandbox' | 'preview' | 'pre-release' | 'production';
}

export const ENVS: Record<EnvKey, EnvConfig> = {
  dev: {
    key: 'dev',
    label: 'Dev — sandbox',
    shortLabel: 'dev',
    description: 'Sandbox tier. Internal experiments, feature flags, breaking changes daily.',
    hosts: {
      api:       'https://api.sandbox.ovok.com',
      fhir:      'https://api.sandbox.ovok.com/fhir/R5',
      console:   'https://console.sandbox.ovok.com',
      dashboard: 'https://dashboard.sandbox.ovok.com',
    },
    maturity: 'sandbox',
  },
  alpha: {
    key: 'alpha',
    label: 'Alpha — preview',
    shortLabel: 'alpha',
    description: 'Bleeding-edge surface. Breaking changes can land any day.',
    hosts: {
      api:       'https://api.dev.ovok.com',
      fhir:      'https://api.dev.ovok.com/fhir/R5',
      console:   'https://console.dev.ovok.com',
      dashboard: 'https://dashboard.dev.ovok.com',
    },
    maturity: 'preview',
  },
  beta: {
    key: 'beta',
    label: 'Beta — pre-release',
    shortLabel: 'beta',
    description: 'Release-candidate surface. Stable enough for integration testing.',
    hosts: {
      api:       'https://api.staging.ovok.com',
      fhir:      'https://api.staging.ovok.com/fhir/R5',
      console:   'https://console.staging.ovok.com',
      dashboard: 'https://dashboard.staging.ovok.com',
    },
    maturity: 'pre-release',
  },
  final: {
    key: 'final',
    label: 'Final — production',
    shortLabel: 'final',
    description: 'The contract you build against. Versioned and supported.',
    hosts: {
      api:       'https://api.ovok.com',
      fhir:      'https://api.ovok.com/fhir/R5',
      console:   'https://console.ovok.com',
      dashboard: 'https://dashboard.ovok.com',
    },
    maturity: 'production',
  },
};

export const ENV_ORDER: EnvKey[] = ['dev', 'alpha', 'beta', 'final'];
export const DEFAULT_ENV: EnvKey = 'dev';

/**
 * Released tiers — only these have their own docs folder + URL today.
 * As more get merged through ovok-internal's branch train, append to
 * this list and the env switcher will start linking to them.
 */
export const RELEASED_ENVS: EnvKey[] = ['dev'];

export function isEnvKey(value: unknown): value is EnvKey {
  return value === 'dev' || value === 'alpha' || value === 'beta' || value === 'final';
}

/** Pull the env from a URL pathname like "/dev/api/high-level/foo" → "dev". */
export function envFromPathname(pathname: string): EnvKey | null {
  const first = pathname.split('/').filter(Boolean)[0];
  return isEnvKey(first) ? first : null;
}

/** Swap a pathname's env prefix to a target env, preserving the rest. */
export function rewriteEnvInPath(pathname: string, target: EnvKey): string {
  const segments = pathname.split('/').filter(Boolean);
  const restStart = isEnvKey(segments[0]) ? 1 : 0;
  const rest = segments.slice(restStart).join('/');
  return `/${target}${rest ? `/${rest}` : ''}`;
}
