/**
 * Single source of truth for environment surfaces.
 *
 * Product names (alpha/beta/final) decouple the docs from internal
 * deployment terminology. Every public hostname follows the same
 * subdomain pattern across all three Ovok surfaces.
 */

export type EnvKey = 'alpha' | 'beta' | 'final';
export type Surface = 'api' | 'fhir' | 'console' | 'dashboard';

export interface EnvConfig {
  key: EnvKey;
  label: string;
  shortLabel: string;
  description: string;
  hosts: Record<Surface, string>;
  maturity: 'preview' | 'pre-release' | 'production';
}

export const ENVS: Record<EnvKey, EnvConfig> = {
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

export const ENV_ORDER: EnvKey[] = ['alpha', 'beta', 'final'];
export const DEFAULT_ENV: EnvKey = 'alpha';
export const STORAGE_KEY = 'ovok-docs:env';
export const CHANGE_EVENT = 'ovok-docs:env-change';

export function isEnvKey(value: unknown): value is EnvKey {
  return value === 'alpha' || value === 'beta' || value === 'final';
}
