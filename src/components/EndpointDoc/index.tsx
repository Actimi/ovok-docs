import { useMemo } from 'react';
import Link from '@docusaurus/Link';
import { useEnv } from '@site/src/lib/useEnv';
import type { EnvKey } from '@site/src/lib/env';
import EnvBadges from '@site/src/components/EnvBadges';
import EnvUnavailableWarning from '@site/src/components/EnvUnavailableWarning';
import ApiBase from '@site/src/components/ApiBase';
import styles from './styles.module.css';

interface SchemaProperty {
  name: string;
  type: string | null;
  required: boolean;
  description: string;
  enum?: unknown[];
  format?: string;
}

interface Schema {
  type: 'object' | 'array' | 'enum' | string;
  properties?: SchemaProperty[];
  items?: { type: string | null };
  values?: unknown[];
  required?: string[];
}

interface Parameter {
  name: string;
  in: string;
  required: boolean;
  type: string | null;
  description: string;
}

interface RequestBody {
  description: string;
  required: boolean;
  content: Record<string, { schema: Schema | null }>;
}

interface ResponseObject {
  description: string;
}

interface OpVariant {
  method: string;
  path: string;
  summary: string | null;
  description: string;
  deprecated: boolean;
  operationId: string | null;
  tag: string;
  parameters: Parameter[];
  requestBody: RequestBody | null;
  responses: Record<string, ResponseObject>;
}

interface Props {
  variants: Partial<Record<EnvKey, OpVariant>>;
  availableIn: EnvKey[];
}

const CANONICAL_PRIORITY: EnvKey[] = ['final', 'beta', 'alpha', 'dev'];

function pickFallback(variants: Props['variants']): { env: EnvKey; variant: OpVariant } | null {
  for (const env of CANONICAL_PRIORITY) {
    const v = variants[env];
    if (v) return { env, variant: v };
  }
  return null;
}

export default function EndpointDoc({ variants, availableIn }: Props): JSX.Element {
  const { env } = useEnv();
  const inThisEnv = availableIn.includes(env);
  // When current env doesn't carry the endpoint, render the most-stable
  // available variant as a preview, gated by a loud warning above.
  const fallback = useMemo(() => pickFallback(variants), [variants]);
  const active = inThisEnv ? variants[env] : fallback?.variant;
  const activeEnv: EnvKey = inThisEnv ? env : (fallback?.env ?? availableIn[0]);

  if (!active) {
    return (
      <div className={styles.empty}>
        This endpoint has no variants — likely a generator bug. Open an issue.
      </div>
    );
  }

  return (
    <>
      <EnvBadges availableIn={availableIn} />
      {!inThisEnv && (
        <EnvUnavailableWarning currentEnv={env} availableIn={availableIn} previewEnv={activeEnv} />
      )}
      {active.deprecated && (
        <div className={styles.deprecated}>
          <strong>⚠ Deprecated.</strong> This endpoint will be removed in a future major release. Migrate before then.
        </div>
      )}

      <div className={styles.methodLine}>
        <span className={`api-method ${active.method.toLowerCase()}`}>{active.method}</span>
        <code className={styles.path}>{active.path}</code>
      </div>

      <ApiBase inline={false} />

      {active.description && (
        <div className={styles.description}>
          <Description text={active.description} />
        </div>
      )}

      {active.parameters.length > 0 && (
        <>
          <h2>Parameters</h2>
          <ParametersTable params={active.parameters} />
        </>
      )}

      {active.requestBody && (
        <>
          <h2>Request body</h2>
          <RequestBodyBlock body={active.requestBody} />
        </>
      )}

      {Object.keys(active.responses).length > 0 && (
        <>
          <h2>Responses</h2>
          <ResponsesTable responses={active.responses} />
        </>
      )}
    </>
  );
}

function Description({ text }: { text: string }): JSX.Element {
  // The OpenAPI descriptions sometimes contain markdown blocks (cURL examples
  // in fenced code, etc). MDX would have rendered them — but we're rendering
  // from JSON now, so just preserve whitespace + render anything that looks
  // like a code fence as <pre>. Keeps the page readable without pulling in a
  // full markdown renderer.
  const parts = useMemo(() => splitCodeFences(text), [text]);
  return (
    <>
      {parts.map((p, i) =>
        p.type === 'code' ? (
          <pre key={i} className={styles.codeBlock}>
            <code>{p.content}</code>
          </pre>
        ) : (
          <p key={i} className={styles.paragraph}>{p.content}</p>
        )
      )}
    </>
  );
}

function splitCodeFences(text: string): { type: 'text' | 'code'; content: string }[] {
  const out: { type: 'text' | 'code'; content: string }[] = [];
  const re = /```(?:[a-z]*)?\n([\s\S]*?)```/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      const t = text.slice(last, m.index).trim();
      if (t) out.push({ type: 'text', content: t });
    }
    out.push({ type: 'code', content: m[1].trim() });
    last = re.lastIndex;
  }
  if (last < text.length) {
    const t = text.slice(last).trim();
    if (t) out.push({ type: 'text', content: t });
  }
  return out;
}

function ParametersTable({ params }: { params: Parameter[] }): JSX.Element {
  return (
    <table>
      <thead>
        <tr><th>Name</th><th>In</th><th>Type</th><th>Required</th><th>Description</th></tr>
      </thead>
      <tbody>
        {params.map((p) => (
          <tr key={`${p.in}-${p.name}`}>
            <td><code>{p.name}</code></td>
            <td>{p.in}</td>
            <td><code>{p.type ?? '—'}</code></td>
            <td>{p.required ? <strong>yes</strong> : 'no'}</td>
            <td>{p.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function RequestBodyBlock({ body }: { body: RequestBody }): JSX.Element {
  return (
    <>
      {body.description && <p>{body.description}</p>}
      {Object.entries(body.content).map(([mime, { schema }]) => (
        <div key={mime} className={styles.requestBlock}>
          <p><strong>Content-Type:</strong> <code>{mime}</code></p>
          {schema ? <SchemaSummary schema={schema} /> : <p><em>no schema</em></p>}
        </div>
      ))}
    </>
  );
}

function SchemaSummary({ schema }: { schema: Schema }): JSX.Element {
  if (schema.type === 'object' && schema.properties && schema.properties.length > 0) {
    return (
      <table>
        <thead>
          <tr><th>Property</th><th>Type</th><th>Required</th><th>Description</th></tr>
        </thead>
        <tbody>
          {schema.properties.map((p) => (
            <tr key={p.name}>
              <td><code>{p.name}</code></td>
              <td><code>{p.type ?? '—'}</code></td>
              <td>{p.required ? <strong>yes</strong> : 'no'}</td>
              <td>{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  if (schema.type === 'array' && schema.items) {
    return <p>Array of <code>{schema.items.type ?? 'object'}</code></p>;
  }
  if (schema.type === 'enum' && schema.values) {
    return <p>One of: {schema.values.map((v, i) => <code key={i}>{String(v)}</code>).reduce((acc: any, el, i) => (i === 0 ? [el] : [...acc, ', ', el]), [])}</p>;
  }
  return <p><code>{schema.type}</code></p>;
}

function ResponsesTable({ responses }: { responses: Record<string, ResponseObject> }): JSX.Element {
  const entries = Object.entries(responses).sort(([a], [b]) => a.localeCompare(b));
  return (
    <table>
      <thead><tr><th>Code</th><th>Description</th></tr></thead>
      <tbody>
        {entries.map(([code, r]) => (
          <tr key={code}><td><code>{code}</code></td><td>{r.description}</td></tr>
        ))}
      </tbody>
    </table>
  );
}
