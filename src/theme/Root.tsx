import type { ReactNode } from 'react';
import CopyForAI from '@site/src/components/CopyForAI';
import PageJsonLd from '@site/src/components/PageJsonLd';

/**
 * App-level wrapper — Docusaurus mounts this around every route.
 * Anchors the persistent Copy-for-AI button bottom-right (self-hides
 * on routes with no markdown twin) and emits per-page TechArticle
 * JSON-LD so docs surface as rich results.
 */
export default function Root({ children }: { children: ReactNode }): JSX.Element {
  return (
    <>
      <PageJsonLd />
      {children}
      <CopyForAI variant="floating" />
    </>
  );
}
