import { useEffect, useMemo, useRef, useState } from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useEnv } from '@site/src/lib/useEnv';
import { ENV_ORDER, ENVS, isEnvKey, rewriteEnvInPath, type EnvKey } from '@site/src/lib/env';
import styles from './EnvSwitcher.module.css';

interface Props {
  position?: 'left' | 'right';
  mobile?: boolean;
}

export default function EnvSwitcher({ mobile = false }: Props): JSX.Element {
  const { env, config } = useEnv();
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Released envs come from siteConfig.customFields.releasedEnvs, which
  // docusaurus.config.ts populates by scanning docs/ at build time. This
  // means a new docs/<env>/ folder lights up the switcher automatically.
  const { siteConfig } = useDocusaurusContext();
  const releasedEnvs = useMemo<EnvKey[]>(() => {
    const raw = siteConfig.customFields?.releasedEnvs;
    if (!Array.isArray(raw)) return ['dev'];
    return raw.filter(isEnvKey);
  }, [siteConfig.customFields]);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  const select = (next: EnvKey) => {
    setOpen(false);
    if (next === env) return;
    history.push(rewriteEnvInPath(location.pathname, next));
  };

  return (
    <div className={mobile ? styles.rootMobile : styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.dot} data-env={env} aria-hidden="true" />
        <span className={styles.label}>{config.shortLabel}</span>
        <svg className={styles.caret} width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className={styles.menu} role="listbox">
          <div className={styles.menuHead}>Release tier</div>
          {ENV_ORDER.map((key) => {
            const item = ENVS[key];
            const selected = key === env;
            const released = releasedEnvs.includes(key);
            return (
              <button
                key={key}
                type="button"
                role="option"
                aria-selected={selected}
                disabled={!released}
                className={styles.item}
                data-selected={selected || undefined}
                data-disabled={!released || undefined}
                onClick={() => released && select(key)}
              >
                <span className={styles.dot} data-env={key} aria-hidden="true" />
                <span className={styles.itemBody}>
                  <span className={styles.itemTitle}>{item.label}</span>
                  <span className={styles.itemHint}>
                    {released ? item.hosts.api : 'Not released yet'}
                  </span>
                </span>
                {selected && (
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className={styles.check}>
                    <path d="M3 7.5L6 10.5L11 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
