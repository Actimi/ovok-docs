import type { ReactNode } from 'react';
import CopyForAI from '@site/src/components/CopyForAI';

/**
 * App-level wrapper — Docusaurus mounts this around every route. Used to
 * anchor the floating Copy-for-AI button so it persists across navigation
 * (doc pages, /playground, custom pages). The button self-hides on routes
 * with no markdown twin (CopyForAI does a HEAD probe).
 */
export default function Root({ children }: { children: ReactNode }): JSX.Element {
  return (
    <>
      {children}
      <CopyForAI variant="floating" />
    </>
  );
}
