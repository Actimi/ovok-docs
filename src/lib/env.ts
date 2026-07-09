/**
 * Single source of truth for environment surfaces.
 *
 * Each release tier owns its own folder under docs/ and serves at its own
 * URL prefix. The env switcher is a *router* — it rewrites the first path
 * segment to navigate between equivalent pages in different tiers.
 *
 *   tier    source branch    docs folder            URL prefix
 *   ────    ──────────────   ────────────────       ─────────────
 *   alpha   sandbox          docs/alpha/            /alpha/...
 *   beta    staging          docs/beta/             /beta/...
 *   final   master           docs/final/            /final/...   (or /)
 *
 * `alpha` is the bleeding-edge tier — that's where breaking changes land daily.
 * `beta` is the staging tier — pre-release quality. `final` is production.
 * There used to be a `dev` tier that pointed at alpha hosts; it was
 * folded into `alpha` on 2026-07-09 so we have one bleeding-edge tier
 * instead of two overlapping ones.
 */

export type EnvKey = 'alpha' | 'beta' | 'final';
export type Surface = 'api' | 'fhir' | 'console' | 'dashboard';

export interface EnvConfig {
  key: EnvKey;
  label: string;
  shortLabel: string;
  description: string;
  hosts: Record<Surface, string>;
  maturity: 'alpha' | 'pre-release' | 'production';
}

export const ENVS: Record<EnvKey, EnvConfig> = {
  alpha: {
    key: 'alpha',
    label: 'Alpha',
    shortLabel: 'alpha',
    description: 'Alpha tier. Bleeding-edge, unstable.',
    hosts: {
      api:       'https://api.sandbox.ovok.com',
      fhir:      'https://api.sandbox.ovok.com/fhir/R5',
      console:   'https://console.sandbox.ovok.com',
      dashboard: 'https://dashboard.sandbox.ovok.com',
    },
    maturity: 'alpha',
  },
  beta: {
    key: 'beta',
    label: 'Beta — pre-release',
    shortLabel: 'beta',
    description: 'Release-candidate surface. Stable enough for integration testing.',
    hosts: {
      api:       'https://api.staging.eu.ovok.com',
      fhir:      'https://api.staging.eu.ovok.com/fhir/R5',
      console:   'https://console.staging.eu.ovok.com',
      dashboard: 'https://dashboard.staging.eu.ovok.com',
    },
    maturity: 'pre-release',
  },
  final: {
    key: 'final',
    label: 'Final — production',
    shortLabel: 'final',
    description: 'The contract you build against. Versioned and supported.',
    hosts: {
      api:       'https://api.eu.ovok.com',
      fhir:      'https://api.eu.ovok.com/fhir/R5',
      console:   'https://console.eu.ovok.com',
      dashboard: 'https://dashboard.eu.ovok.com',
    },
    maturity: 'production',
  },
};

export const ENV_ORDER: EnvKey[] = ['alpha', 'beta', 'final'];
export const DEFAULT_ENV: EnvKey = 'alpha';

/**
 * Which tiers are actually released today is computed at build time by
 * docusaurus.config.ts (scans docs/ for env folders that contain an
 * intro page) and exposed to client components via
 * siteConfig.customFields.releasedEnvs. The EnvSwitcher reads from
 * there — there is intentionally no static list here.
 */

export function isEnvKey(value: unknown): value is EnvKey {
  return value === 'alpha' || value === 'beta' || value === 'final';
}

/** Pull the env from a URL pathname like "/alpha/api/high-level/foo" → "alpha". */
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
