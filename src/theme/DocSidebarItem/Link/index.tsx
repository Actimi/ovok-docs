import OriginalLink from '@theme-original/DocSidebarItem/Link';
import type LinkType from '@theme/DocSidebarItem/Link';
import type { WrapperProps } from '@docusaurus/types';
import { useEnv } from '@site/src/lib/useEnv';
// `with` is only available via JSON imports; using a default import works
// because Docusaurus's webpack/rspack JSON loader exposes the parsed object.
import envMap from '@site/static/data/endpoint-env-map.json';

type Props = WrapperProps<typeof LinkType>;

const envMapTyped = envMap as Record<string, string[]>;

/**
 * Marks a sidebar link with data-not-in-env when the active env switcher
 * tier isn't in the link's availableIn list. CSS in custom.css uses this
 * (combined with body[data-doc-filter='only-current']) to hide or dim the
 * row depending on the user's filter toggle preference.
 */
export default function LinkWrapper(props: Props): JSX.Element {
  const { env } = useEnv();
  const docId = (props.item as { docId?: string }).docId;
  const availableIn = (docId && envMapTyped[docId]) || null;
  const inEnv = availableIn ? availableIn.includes(env) : true;

  // Forward props untouched; we just wrap the rendered output so we can
  // attach the data attribute to the surrounding container.
  return (
    <div data-not-in-env={!inEnv || undefined} className="docs-sidebar-env-item">
      <OriginalLink {...props} />
    </div>
  );
}
