import { useEnv } from '@site/src/lib/useEnv';
import styles from './ApiBase.module.css';

interface Props {
  /** Which surface to render: api host (default), fhir host, or dashboard. */
  surface?: 'api' | 'fhir' | 'dashboard';
  /** Optional suffix appended to the base, e.g. "/Patient". */
  path?: string;
  /** Inline (no copy affordance) vs block (with copy button). */
  inline?: boolean;
}

/**
 * Renders the base URL for whichever env the visitor has selected,
 * so the same MDX page reads correctly regardless of audience.
 */
export default function ApiBase({ surface = 'api', path = '', inline = true }: Props): JSX.Element {
  const { config } = useEnv();
  const host =
    surface === 'fhir' ? config.fhirBaseUrl :
    surface === 'dashboard' ? config.dashboardUrl :
    config.apiBaseUrl;
  const value = `${host}${path}`;

  if (inline) {
    return <code className={styles.inline}>{value}</code>;
  }

  return (
    <div className={styles.block}>
      <span className={styles.envChip} data-env={config.key}>{config.shortLabel}</span>
      <code className={styles.blockValue}>{value}</code>
    </div>
  );
}
