/**
 * Single source of truth for environment surfaces.
 *
 * The product names (alpha/beta/final) deliberately decouple
 * docs language from internal branch/env names so we can talk
 * about API maturity without leaking deployment terminology.
 */

export type EnvKey = 'alpha' | 'beta' | 'final';

export interface EnvConfig {
  key: EnvKey;
  label: string;
  shortLabel: string;
  description: string;
  apiBaseUrl: string;
  fhirBaseUrl: string;
  dashboardUrl: string;
  internalBranch: string;
  maturity: 'preview' | 'pre-release' | 'production';
}

export const ENVS: Record<EnvKey, EnvConfig> = {
  alpha: {
    key: 'alpha',
    label: 'Alpha — preview',
    shortLabel: 'alpha',
    description: 'Bleeding-edge surface. Breaking changes can land any day.',
    apiBaseUrl: 'https://api.dev.ovok.com',
    fhirBaseUrl: 'https://fhir.dev.ovok.com',
    dashboardUrl: 'https://dashboard.dev.ovok.com',
    internalBranch: 'development',
    maturity: 'preview',
  },
  beta: {
    key: 'beta',
    label: 'Beta — pre-release',
    shortLabel: 'beta',
    description: 'Release-candidate surface. Stable enough for integration testing.',
    apiBaseUrl: 'https://api.staging.ovok.com',
    fhirBaseUrl: 'https://fhir.staging.ovok.com',
    dashboardUrl: 'https://dashboard.staging.ovok.com',
    internalBranch: 'staging',
    maturity: 'pre-release',
  },
  final: {
    key: 'final',
    label: 'Final — production API',
    shortLabel: 'final',
    description: 'The contract you build against. Versioned and supported.',
    apiBaseUrl: 'https://api.ovok.com',
    fhirBaseUrl: 'https://fhir.ovok.com',
    dashboardUrl: 'https://dashboard.ovok.com',
    internalBranch: 'master',
    maturity: 'production',
  },
};

export const ENV_ORDER: EnvKey[] = ['alpha', 'beta', 'final'];
export const DEFAULT_ENV: EnvKey = 'final';
export const STORAGE_KEY = 'ovok-docs:env';
export const CHANGE_EVENT = 'ovok-docs:env-change';

export function isEnvKey(value: unknown): value is EnvKey {
  return value === 'alpha' || value === 'beta' || value === 'final';
}
