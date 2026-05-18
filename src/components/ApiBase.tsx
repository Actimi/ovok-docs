import { useEnv } from '@site/src/lib/useEnv';
import type { Surface } from '@site/src/lib/env';
import styles from './ApiBase.module.css';

interface Props {
  /** Which surface host to render. */
  surface?: Surface;
  /** Optional suffix appended to the base, e.g. "/Patient". */
  path?: string;
  /** Inline (no copy affordance) vs block (with copy button). */
  inline?: boolean;
}

/**
 * Renders the active env's hostname for the requested surface so the
 * same MDX page reads correctly regardless of which tier the visitor
 * has selected from the navbar switcher.
 */
export default function ApiBase({ surface = 'api', path = '', inline = true }: Props): JSX.Element {
  const { config } = useEnv();
  const value = `${config.hosts[surface]}${path}`;

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
