import type { ReactNode } from 'react';
import CopyForAI from '@site/src/components/CopyForAI';

/**
 * App-level wrapper — Docusaurus mounts this around every route.
 * Anchors the persistent Copy-for-AI button bottom-right; it self-hides
 * on routes with no markdown twin (HEAD-probe).
 */
export default function Root({ children }: { children: ReactNode }): JSX.Element {
  return (
    <>
      {children}
      <CopyForAI variant="floating" />
    </>
  );
}
