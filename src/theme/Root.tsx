import type { ReactNode } from 'react';
import CopyForAI from '@site/src/components/CopyForAI';
import EnvFilterToggle from '@site/src/components/EnvFilterToggle';

/**
 * App-level wrapper — Docusaurus mounts this around every route.
 * Anchors the two persistent UI affordances:
 *   - bottom-right: Copy-for-AI (self-hides on non-doc routes)
 *   - bottom-left:  EnvFilterToggle (sidebar filter for endpoint visibility)
 */
export default function Root({ children }: { children: ReactNode }): JSX.Element {
  return (
    <>
      {children}
      <EnvFilterToggle />
      <CopyForAI variant="floating" />
    </>
  );
}
