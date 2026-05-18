import { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import { useEnv } from '@site/src/lib/useEnv';
import type { Surface } from '@site/src/lib/env';
import styles from './styles.module.css';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface HeaderRow {
  id: number;
  key: string;
  value: string;
}

const METHODS: Method[] = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
const SURFACES: { value: Surface; label: string }[] = [
  { value: 'api',  label: 'High Level API' },
  { value: 'fhir', label: 'FHIR API' },
];

const DEFAULT_HEADERS: HeaderRow[] = [
  { id: 1, key: 'Authorization', value: 'Bearer YOUR_ACCESS_TOKEN' },
  { id: 2, key: 'Content-Type',  value: 'application/json' },
];

const DEFAULT_BODY: Record<Method, string> = {
  GET:    '',
  DELETE: '',
  POST:   '{\n  "example": "value"\n}',
  PUT:    '{\n  "example": "value"\n}',
  PATCH:  '{\n  "op": "replace",\n  "path": "/example",\n  "value": "new"\n}',
};

function shellEscape(value: string): string {
  // Single-quote shell-escape; close quote, escape, re-open.
  return `'${value.replace(/'/g, `'\\''`)}'`;
}

function buildCurl(method: Method, url: string, headers: HeaderRow[], body: string): string {
  const lines: string[] = [`curl -X ${method} ${shellEscape(url)}`];
  for (const h of headers) {
    if (!h.key.trim()) continue;
    lines.push(`  -H ${shellEscape(`${h.key}: ${h.value}`)}`);
  }
  if (body.trim() && method !== 'GET' && method !== 'DELETE') {
    lines.push(`  --data ${shellEscape(body)}`);
  }
  return lines.join(' \\\n');
}

export default function Playground(): JSX.Element {
  const { config, env, setEnv } = useEnv();
  const [surface, setSurface] = useState<Surface>('api');
  const [method, setMethod] = useState<Method>('GET');
  const [path, setPath] = useState<string>('/auth/me');
  const [headers, setHeaders] = useState<HeaderRow[]>(DEFAULT_HEADERS);
  const [body, setBody] = useState<string>(DEFAULT_BODY.GET);
  const [response, setResponse] = useState<{
    status: number;
    statusText: string;
    timeMs: number;
    headers: Record<string, string>;
    body: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [copied, setCopied] = useState(false);

  const baseUrl = config.hosts[surface];
  const fullUrl = useMemo(() => {
    const trimmedPath = path.startsWith('/') ? path : `/${path}`;
    return `${baseUrl}${trimmedPath}`;
  }, [baseUrl, path]);

  const curl = useMemo(
    () => buildCurl(method, fullUrl, headers, body),
    [method, fullUrl, headers, body],
  );

  const onMethodChange = (next: Method) => {
    setMethod(next);
    // Pre-fill body with a starter shape so users see what's expected.
    setBody(DEFAULT_BODY[next]);
  };

  const onHeaderChange = (id: number, field: 'key' | 'value', value: string) => {
    setHeaders((prev) => prev.map((h) => (h.id === id ? { ...h, [field]: value } : h)));
  };

  const onAddHeader = () => {
    setHeaders((prev) => [...prev, { id: Date.now(), key: '', value: '' }]);
  };

  const onRemoveHeader = (id: number) => {
    setHeaders((prev) => prev.filter((h) => h.id !== id));
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(curl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard blocked — silent */
    }
  };

  const onSend = async () => {
    setError(null);
    setResponse(null);
    setPending(true);
    const start = performance.now();
    try {
      const init: RequestInit = {
        method,
        headers: Object.fromEntries(
          headers.filter((h) => h.key.trim()).map((h) => [h.key.trim(), h.value]),
        ),
      };
      if (body.trim() && method !== 'GET' && method !== 'DELETE') {
        init.body = body;
      }
      const res = await fetch(fullUrl, init);
      const timeMs = Math.round(performance.now() - start);
      const text = await res.text();
      const respHeaders: Record<string, string> = {};
      res.headers.forEach((value, key) => { respHeaders[key] = value; });
      setResponse({
        status: res.status,
        statusText: res.statusText,
        timeMs,
        headers: respHeaders,
        body: text,
      });
    } catch (e) {
      setError(
        (e as Error).message ||
          'Request failed. The Ovok API does not return CORS headers to this origin — most calls need to go through your own backend or a CLI.',
      );
    } finally {
      setPending(false);
    }
  };

  const prettyBody = useMemo(() => {
    if (!response) return '';
    try {
      return JSON.stringify(JSON.parse(response.body), null, 2);
    } catch {
      return response.body;
    }
  }, [response]);

  return (
    <Layout
      title="API Playground"
      description="Compose, copy and run requests against any of the three Ovok release tiers from your browser."
    >
      <main className={styles.page}>
        <header className={styles.intro}>
          <h1 className={styles.title}>API Playground</h1>
          <p className={styles.subtitle}>
            Compose an Ovok API request, copy the curl, run it from your browser.
            All three release tiers and both API surfaces are supported — the
            host bar updates as you flip them.
          </p>
        </header>

        <section className={styles.composer}>
          <div className={styles.row}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Surface</span>
              <select
                className={styles.input}
                value={surface}
                onChange={(e) => setSurface(e.target.value as Surface)}
              >
                {SURFACES.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Release tier</span>
              <select
                className={styles.input}
                value={env}
                onChange={(e) => setEnv(e.target.value as never)}
              >
                <option value="alpha">alpha — preview</option>
                <option value="beta">beta — pre-release</option>
                <option value="final">final — production</option>
              </select>
            </label>
          </div>

          <div className={styles.urlBar}>
            <select
              className={styles.methodSelect}
              value={method}
              onChange={(e) => onMethodChange(e.target.value as Method)}
            >
              {METHODS.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <span className={styles.hostPrefix}>{baseUrl}</span>
            <input
              className={styles.pathInput}
              value={path}
              onChange={(e) => setPath(e.target.value)}
              placeholder="/auth/me"
              spellCheck={false}
            />
            <button
              type="button"
              className={styles.sendButton}
              onClick={onSend}
              disabled={pending}
            >
              {pending ? 'Sending…' : 'Send'}
            </button>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionLabel}>Headers</span>
              <button type="button" className={styles.subtleButton} onClick={onAddHeader}>
                + Add header
              </button>
            </div>
            <div className={styles.headerList}>
              {headers.map((h) => (
                <div key={h.id} className={styles.headerRow}>
                  <input
                    className={styles.input}
                    value={h.key}
                    onChange={(e) => onHeaderChange(h.id, 'key', e.target.value)}
                    placeholder="Header name"
                    spellCheck={false}
                  />
                  <input
                    className={styles.input}
                    value={h.value}
                    onChange={(e) => onHeaderChange(h.id, 'value', e.target.value)}
                    placeholder="Header value"
                    spellCheck={false}
                  />
                  <button
                    type="button"
                    className={styles.subtleButton}
                    onClick={() => onRemoveHeader(h.id)}
                    aria-label="Remove header"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {(method === 'POST' || method === 'PUT' || method === 'PATCH') && (
            <div className={styles.section}>
              <div className={styles.sectionHead}>
                <span className={styles.sectionLabel}>Body</span>
                <span className={styles.sectionHint}>JSON</span>
              </div>
              <textarea
                className={styles.bodyInput}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                spellCheck={false}
                rows={10}
              />
            </div>
          )}
        </section>

        <section className={styles.preview}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>curl</span>
            <button type="button" className={styles.subtleButton} onClick={onCopy}>
              {copied ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
          <pre className={styles.curlBlock}>{curl}</pre>
        </section>

        <section className={styles.response}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>Response</span>
            {response && (
              <span className={styles.responseMeta}>
                <span
                  className={styles.statusBadge}
                  data-status-class={Math.floor(response.status / 100)}
                >
                  {response.status} {response.statusText}
                </span>
                <span className={styles.timing}>{response.timeMs} ms</span>
              </span>
            )}
          </div>
          {!response && !error && !pending && (
            <p className={styles.empty}>
              Hit <kbd>Send</kbd> to run the request. If the call fails with a
              network error, the API hasn't whitelisted this origin in CORS —
              copy the curl and run it from your terminal instead.
            </p>
          )}
          {error && <p className={styles.error}>{error}</p>}
          {response && (
            <>
              {Object.keys(response.headers).length > 0 && (
                <details className={styles.respHeaders}>
                  <summary>Response headers</summary>
                  <pre className={styles.curlBlock}>
                    {Object.entries(response.headers)
                      .map(([k, v]) => `${k}: ${v}`)
                      .join('\n')}
                  </pre>
                </details>
              )}
              <pre className={styles.curlBlock}>{prettyBody}</pre>
            </>
          )}
        </section>
      </main>
    </Layout>
  );
}
