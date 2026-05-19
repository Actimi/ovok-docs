import { useEnv } from '@site/src/lib/useEnv';
import type { Surface } from '@site/src/lib/env';

interface Props {
  surface: Surface;
  label: string;
  position?: 'left' | 'right';
  mobile?: boolean;
}

/**
 * Navbar link whose href tracks the current env tier. The same item
 * resolves to console.sandbox.ovok.com on /dev/..., console.dev.ovok.com
 * on /alpha/..., and so on — the host map lives in src/lib/env.ts so
 * the API/Console/Dashboard subdomain conventions are single-sourced.
 */
export default function EnvLink({ surface, label, mobile = false }: Props): JSX.Element {
  const { config } = useEnv();
  const href = config.hosts[surface];
  const className = mobile ? 'menu__link' : 'navbar__item navbar__link';
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
