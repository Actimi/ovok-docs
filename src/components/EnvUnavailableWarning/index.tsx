import { useEnv } from '@site/src/lib/useEnv';
import type { EnvKey } from '@site/src/lib/env';
import { ENVS } from '@site/src/lib/env';
import styles from './styles.module.css';

interface Props {
  currentEnv: EnvKey;
  availableIn: EnvKey[];
  /** The env whose variant is being shown as a preview while the user
   *  is on an env that doesn't carry the endpoint. */
  previewEnv: EnvKey;
}

/**
 * Loud warning rendered above an endpoint's content when the active
 * release tier doesn't ship it. Per design: this is meant to be
 * impossible to miss — colour, icon, and explicit "switch to X" buttons
 * for each tier that does support the endpoint.
 */
export default function EnvUnavailableWarning({ currentEnv, availableIn, previewEnv }: Props): JSX.Element {
  const { setEnv } = useEnv();
  return (
    <div className={styles.box} role="alert">
      <div className={styles.head}>
        <span className={styles.icon} aria-hidden="true">⚠</span>
        <strong>Not available in {ENVS[currentEnv].label}</strong>
      </div>
      <p className={styles.body}>
        This endpoint is documented but isn't deployed on the
        <code className={styles.envCode}>{currentEnv}</code> tier yet.
        You're looking at the
        <code className={styles.envCode}>{previewEnv}</code> variant as a preview.
        Calls against your current host will return 404.
      </p>
      <div className={styles.actions}>
        <span className={styles.actionsLabel}>Switch to:</span>
        {availableIn.map((env) => (
          <button
            key={env}
            type="button"
            className={styles.switchBtn}
            onClick={() => setEnv(env)}
          >
            {ENVS[env].shortLabel}
          </button>
        ))}
      </div>
    </div>
  );
}
