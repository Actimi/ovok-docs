import OriginalContent from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type { WrapperProps } from '@docusaurus/types';
import CopyForAI from '@site/src/components/CopyForAI';

type Props = WrapperProps<typeof ContentType>;

/**
 * Wraps the default doc content with a row that hosts the Copy-for-AI
 * dropdown — placed above the H1 so it's the first thing visible when
 * a reader lands on a page.
 */
export default function ContentWrapper(props: Props): React.JSX.Element {
  return (
    <>
      <CopyForAI variant="inline" />
      <OriginalContent {...props} />
    </>
  );
}
