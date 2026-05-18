import { useEnv } from '@site/src/lib/useEnv';
import type { EnvKey } from '@site/src/lib/env';
import { ENVS } from '@site/src/lib/env';
import styles from './styles.module.css';

const ORDERED: EnvKey[] = ['dev', 'alpha', 'beta', 'final'];

interface Props {
  availableIn: EnvKey[];
}

/**
 * Row of four pills shown at the top of every endpoint page.
 * Each pill is "lit" when the endpoint exists in that tier and grayed
 * (with strikethrough) when it doesn't. The active tier (the one the
 * env switcher is set to) is highlighted with an outline.
 */
export default function EnvBadges({ availableIn }: Props): JSX.Element {
  const { env } = useEnv();
  return (
    <div className={styles.row} aria-label={`Available in: ${availableIn.join(', ') || 'none'}`}>
      {ORDERED.map((e) => {
        const has = availableIn.includes(e);
        const active = e === env;
        return (
          <span
            key={e}
            className={styles.pill}
            data-env={e}
            data-has={has || undefined}
            data-active={active || undefined}
            title={has ? `Available in ${ENVS[e].label}` : `Not available in ${ENVS[e].label}`}
          >
            <span className={styles.dot} aria-hidden="true">{has ? '✓' : '✕'}</span>
            <span className={styles.label}>{e}</span>
          </span>
        );
      })}
    </div>
  );
}
