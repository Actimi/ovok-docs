import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useEnv } from '@site/src/lib/useEnv';
import type { Surface } from '@site/src/lib/env';
import endpointsManifest from '@site/static/data/endpoints.json';
import styles from './styles.module.css';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type SnippetLang = 'curl' | 'fetch' | 'axios' | 'python';

interface ManifestEntry {
  method: Method;
  path: string;
  summary: string;
  description: string;
  tag: string;
  operationId?: string;
  parameters: { name: string; in: string; required: boolean; type: string | null }[];
  bodyExample: unknown;
  deprecated: boolean;
}

interface HeaderRow { id: number; key: string; value: string }
interface HistoryEntry {
  id: number;
  ts: number;
  method: Method;
  surface: Surface;
  envKey: string;
  path: string;
  status?: number;
}

const METHODS: Method[] = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
const SURFACES: { value: Surface; label: string }[] = [
  { value: 'api',  label: 'High Level API' },
  { value: 'fhir', label: 'FHIR API' },
];
const TOKEN_KEY    = 'ovok-docs:playground:token';
const HISTORY_KEY  = 'ovok-docs:playground:history';
const HISTORY_MAX  = 12;

const manifest = endpointsManifest as ManifestEntry[];

const DEFAULT_HEADERS: HeaderRow[] = [
  { id: 1, key: 'Authorization', value: '' },
  { id: 2, key: 'Content-Type',  value: 'application/json' },
];

function shellEscape(value: string): string {
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

function buildFetch(method: Method, url: string, headers: HeaderRow[], body: string): string {
  const headersObj = Object.fromEntries(
    headers.filter((h) => h.key.trim()).map((h) => [h.key.trim(), h.value]),
  );
  const init: Record<string, unknown> = { method, headers: headersObj };
  if (body.trim() && method !== 'GET' && method !== 'DELETE') init.body = body;
  return [
    `const response = await fetch(${JSON.stringify(url)}, ${JSON.stringify(init, null, 2)});`,
    `const data = await response.json();`,
    `console.log(data);`,
  ].join('\n');
}

function buildAxios(method: Method, url: string, headers: HeaderRow[], body: string): string {
  const headersObj = Object.fromEntries(
    headers.filter((h) => h.key.trim()).map((h) => [h.key.trim(), h.value]),
  );
  const config: Record<string, unknown> = {
    method: method.toLowerCase(),
    url,
    headers: headersObj,
  };
  if (body.trim() && method !== 'GET' && method !== 'DELETE') {
    try { config.data = JSON.parse(body); } catch { config.data = body; }
  }
  return [
    `import axios from 'axios';`,
    ``,
    `const { data } = await axios(${JSON.stringify(config, null, 2)});`,
    `console.log(data);`,
  ].join('\n');
}

function buildPython(method: Method, url: string, headers: HeaderRow[], body: string): string {
  const headersObj = Object.fromEntries(
    headers.filter((h) => h.key.trim()).map((h) => [h.key.trim(), h.value]),
  );
  const lines = [
    'import requests',
    '',
    `headers = ${JSON.stringify(headersObj, null, 4)}`,
  ];
  if (body.trim() && method !== 'GET' && method !== 'DELETE') {
    lines.push(`payload = ${body.trim()}`);
    lines.push('');
    lines.push(`response = requests.${method.toLowerCase()}(${JSON.stringify(url)}, headers=headers, json=payload)`);
  } else {
    lines.push('');
    lines.push(`response = requests.${method.toLowerCase()}(${JSON.stringify(url)}, headers=headers)`);
  }
  lines.push('print(response.json())');
  return lines.join('\n');
}

function safeReadLS<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) as T : fallback;
  } catch { return fallback; }
}

function PlaygroundImpl(): JSX.Element {
  const { config, env, setEnv } = useEnv();

  const [surface, setSurface] = useState<Surface>('api');
  const [method, setMethod] = useState<Method>('GET');
  const [path, setPath] = useState<string>('/auth/me');
  const [headers, setHeaders] = useState<HeaderRow[]>(DEFAULT_HEADERS);
  const [body, setBody] = useState<string>('');
  const [bearer, setBearer] = useState<string>('');
  const [snippetLang, setSnippetLang] = useState<SnippetLang>('curl');
  const [query, setQuery] = useState('');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [response, setResponse] = useState<{
    status: number; statusText: string; timeMs: number;
    headers: Record<string, string>; body: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const pickerRef = useRef<HTMLDivElement>(null);

  // Hydrate persisted state once on mount.
  useEffect(() => {
    const tok = safeReadLS<string>(TOKEN_KEY, '');
    if (tok) {
      setBearer(tok);
      setHeaders((rows) =>
        rows.map((r) => (r.key === 'Authorization' ? { ...r, value: `Bearer ${tok}` } : r))
      );
    }
    setHistory(safeReadLS<HistoryEntry[]>(HISTORY_KEY, []));
  }, []);

  // Persist token whenever it changes.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      if (bearer) window.localStorage.setItem(TOKEN_KEY, JSON.stringify(bearer));
      else window.localStorage.removeItem(TOKEN_KEY);
    } catch { /* ignore */ }
    setHeaders((rows) =>
      rows.map((r) => (r.key === 'Authorization' ? { ...r, value: bearer ? `Bearer ${bearer}` : '' } : r))
    );
  }, [bearer]);

  // Close picker when clicking outside.
  useEffect(() => {
    if (!pickerOpen) return;
    const onDocClick = (event: MouseEvent) => {
      if (!pickerRef.current?.contains(event.target as Node)) setPickerOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setPickerOpen(false);
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [pickerOpen]);

  const baseUrl = config.hosts[surface];
  const fullUrl = useMemo(() => {
    const p = path.startsWith('/') ? path : `/${path}`;
    return `${baseUrl}${p}`;
  }, [baseUrl, path]);

  const curl   = useMemo(() => buildCurl(method, fullUrl, headers, body),   [method, fullUrl, headers, body]);
  const fetchS = useMemo(() => buildFetch(method, fullUrl, headers, body),  [method, fullUrl, headers, body]);
  const axiosS = useMemo(() => buildAxios(method, fullUrl, headers, body),  [method, fullUrl, headers, body]);
  const pyS    = useMemo(() => buildPython(method, fullUrl, headers, body), [method, fullUrl, headers, body]);
  const snippet = { curl, fetch: fetchS, axios: axiosS, python: pyS }[snippetLang];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return manifest;
    return manifest.filter((e) =>
      e.path.toLowerCase().includes(q) ||
      e.summary.toLowerCase().includes(q) ||
      e.method.toLowerCase().includes(q) ||
      e.tag.toLowerCase().includes(q),
    );
  }, [query]);

  const groupedByTag = useMemo(() => {
    const m = new Map<string, ManifestEntry[]>();
    for (const e of filtered) {
      if (!m.has(e.tag)) m.set(e.tag, []);
      m.get(e.tag)!.push(e);
    }
    return [...m.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

  const pickEndpoint = (e: ManifestEntry) => {
    setMethod(e.method);
    setPath(e.path);
    if (e.tag === 'FHIR custom operations') setSurface('api'); // explicit /fhir/... in the path already
    if (e.bodyExample != null) {
      setBody(JSON.stringify(e.bodyExample, null, 2));
    } else if (e.method !== 'GET' && e.method !== 'DELETE') {
      setBody('{\n  \n}');
    } else {
      setBody('');
    }
    setPickerOpen(false);
    setQuery('');
  };

  const pushHistory = (entry: HistoryEntry) => {
    const next = [entry, ...history.filter((h) => !(h.method === entry.method && h.path === entry.path))].slice(0, HISTORY_MAX);
    setHistory(next);
    try { window.localStorage.setItem(HISTORY_KEY, JSON.stringify(next)); } catch { /* ignore */ }
  };

  const replayHistory = (h: HistoryEntry) => {
    setMethod(h.method);
    setSurface(h.surface);
    if (h.envKey && h.envKey !== env) setEnv(h.envKey as never);
    setPath(h.path);
  };

  const clearHistory = () => {
    setHistory([]);
    try { window.localStorage.removeItem(HISTORY_KEY); } catch { /* ignore */ }
  };

  const onSend = useCallback(async () => {
    setError(null); setResponse(null); setPending(true);
    const start = performance.now();
    try {
      const init: RequestInit = {
        method,
        headers: Object.fromEntries(
          headers.filter((h) => h.key.trim()).map((h) => [h.key.trim(), h.value]),
        ),
      };
      if (body.trim() && method !== 'GET' && method !== 'DELETE') init.body = body;
      const res = await fetch(fullUrl, init);
      const timeMs = Math.round(performance.now() - start);
      const text = await res.text();
      const respHeaders: Record<string, string> = {};
      res.headers.forEach((value, key) => { respHeaders[key] = value; });
      setResponse({ status: res.status, statusText: res.statusText, timeMs, headers: respHeaders, body: text });
      pushHistory({ id: Date.now(), ts: Date.now(), method, surface, envKey: env, path, status: res.status });
    } catch (e) {
      setError(
        (e as Error).message ||
          'Network error. The Ovok API does not return CORS headers to this origin — copy the snippet and run it from your terminal.',
      );
    } finally {
      setPending(false);
    }
  }, [method, fullUrl, headers, body, surface, env, path, history]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch { /* clipboard blocked — silent */ }
  };

  const prettyBody = useMemo(() => {
    if (!response) return '';
    try { return JSON.stringify(JSON.parse(response.body), null, 2); } catch { return response.body; }
  }, [response]);

  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <h1 className={styles.title}>API Playground</h1>
        <p className={styles.subtitle}>
          Pick an endpoint, fill in your token, fire the request. Snippets in
          curl, fetch, axios and python regenerate as you edit; history and
          tokens persist across page reloads.
        </p>
      </header>

      <section className={styles.composer}>
        {/* Tier / surface */}
        <div className={styles.row}>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>Surface</span>
            <select
              className={styles.input}
              value={surface}
              onChange={(e) => setSurface(e.target.value as Surface)}
            >
              {SURFACES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
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

        {/* Endpoint picker */}
        <div className={styles.field} ref={pickerRef}>
          <span className={styles.fieldLabel}>Endpoint</span>
          <button
            type="button"
            className={styles.pickerTrigger}
            onClick={() => setPickerOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={pickerOpen}
          >
            <span className={`${styles.methodPill} ${styles[`m_${method.toLowerCase()}`]}`}>{method}</span>
            <span className={styles.pickerPath}>{path || 'Pick an endpoint…'}</span>
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className={styles.pickerCaret}>
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            </svg>
          </button>
          {pickerOpen && (
            <div className={styles.pickerMenu} role="listbox">
              <input
                className={styles.pickerSearch}
                placeholder="Search by path, summary, tag…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                spellCheck={false}
              />
              <div className={styles.pickerResults}>
                {groupedByTag.length === 0 && (
                  <div className={styles.pickerEmpty}>No endpoints match "{query}".</div>
                )}
                {groupedByTag.map(([tag, items]) => (
                  <div key={tag} className={styles.pickerGroup}>
                    <div className={styles.pickerGroupLabel}>{tag}</div>
                    {items.map((e, i) => (
                      <button
                        key={`${e.method}-${e.path}-${i}`}
                        type="button"
                        role="option"
                        aria-selected={false}
                        className={styles.pickerItem}
                        onClick={() => pickEndpoint(e)}
                      >
                        <span className={`${styles.methodPill} ${styles[`m_${e.method.toLowerCase()}`]}`}>{e.method}</span>
                        <span className={styles.pickerItemBody}>
                          <span className={styles.pickerItemPath}>{e.path}</span>
                          <span className={styles.pickerItemSummary}>{e.summary}</span>
                        </span>
                        {e.deprecated && <span className={styles.deprecatedTag}>deprecated</span>}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* URL bar */}
        <div className={styles.urlBar}>
          <select
            className={styles.methodSelect}
            value={method}
            onChange={(e) => setMethod(e.target.value as Method)}
          >
            {METHODS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          <span className={styles.hostPrefix}>{baseUrl}</span>
          <input
            className={styles.pathInput}
            value={path}
            onChange={(e) => setPath(e.target.value)}
            placeholder="/auth/me"
            spellCheck={false}
          />
          <button type="button" className={styles.sendButton} onClick={onSend} disabled={pending}>
            {pending ? 'Sending…' : 'Send'}
          </button>
        </div>

        {/* Token */}
        <div className={styles.section}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>Bearer token</span>
            <span className={styles.sectionHint}>persists across reloads</span>
          </div>
          <input
            className={styles.input}
            type="password"
            value={bearer}
            onChange={(e) => setBearer(e.target.value)}
            placeholder="Paste your access token (without 'Bearer ' prefix)"
            spellCheck={false}
            autoComplete="off"
          />
        </div>

        {/* Headers */}
        <div className={styles.section}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>Headers</span>
            <button
              type="button"
              className={styles.subtleButton}
              onClick={() => setHeaders((p) => [...p, { id: Date.now(), key: '', value: '' }])}
            >
              + Add
            </button>
          </div>
          <div className={styles.headerList}>
            {headers.map((h) => (
              <div key={h.id} className={styles.headerRow}>
                <input
                  className={styles.input}
                  value={h.key}
                  onChange={(e) => setHeaders((p) => p.map((r) => r.id === h.id ? { ...r, key: e.target.value } : r))}
                  placeholder="Header name"
                  spellCheck={false}
                />
                <input
                  className={styles.input}
                  value={h.value}
                  onChange={(e) => setHeaders((p) => p.map((r) => r.id === h.id ? { ...r, value: e.target.value } : r))}
                  placeholder="Header value"
                  spellCheck={false}
                />
                <button
                  type="button"
                  className={styles.subtleButton}
                  onClick={() => setHeaders((p) => p.filter((r) => r.id !== h.id))}
                  aria-label="Remove header"
                >×</button>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
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

      {/* Snippet tabs */}
      <section className={styles.preview}>
        <div className={styles.sectionHead}>
          <div className={styles.snippetTabs}>
            {(['curl', 'fetch', 'axios', 'python'] as SnippetLang[]).map((lang) => (
              <button
                key={lang}
                type="button"
                className={styles.snippetTab}
                data-active={snippetLang === lang || undefined}
                onClick={() => setSnippetLang(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
          <button type="button" className={styles.subtleButton} onClick={onCopy}>
            {copied ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
        <pre className={styles.curlBlock}>{snippet}</pre>
      </section>

      {/* Response */}
      <section className={styles.response}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>Response</span>
          {response && (
            <span className={styles.responseMeta}>
              <span className={styles.statusBadge} data-status-class={Math.floor(response.status / 100)}>
                {response.status} {response.statusText}
              </span>
              <span className={styles.timing}>{response.timeMs} ms</span>
            </span>
          )}
        </div>
        {!response && !error && !pending && (
          <p className={styles.empty}>
            Hit <kbd>Send</kbd> to run the request. If it errors with "network",
            CORS blocks the call from this origin — copy the snippet into a
            terminal instead.
          </p>
        )}
        {error && <p className={styles.error}>{error}</p>}
        {response && (
          <>
            {Object.keys(response.headers).length > 0 && (
              <details className={styles.respHeaders}>
                <summary>Response headers</summary>
                <pre className={styles.curlBlock}>
                  {Object.entries(response.headers).map(([k, v]) => `${k}: ${v}`).join('\n')}
                </pre>
              </details>
            )}
            <pre className={styles.curlBlock}>{prettyBody}</pre>
          </>
        )}
      </section>

      {/* History */}
      {history.length > 0 && (
        <section className={styles.history}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>History</span>
            <button type="button" className={styles.subtleButton} onClick={clearHistory}>Clear</button>
          </div>
          <div className={styles.historyList}>
            {history.map((h) => (
              <button
                key={h.id}
                type="button"
                className={styles.historyItem}
                onClick={() => replayHistory(h)}
                title={new Date(h.ts).toLocaleString()}
              >
                <span className={`${styles.methodPill} ${styles[`m_${h.method.toLowerCase()}`]}`}>{h.method}</span>
                <span className={styles.historyPath}>{h.path}</span>
                {h.status !== undefined && (
                  <span className={styles.historyStatus} data-status-class={Math.floor(h.status / 100)}>
                    {h.status}
                  </span>
                )}
                <span className={styles.historyEnv}>{h.envKey}</span>
              </button>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default function Playground(): JSX.Element {
  return (
    <Layout
      title="API Playground"
      description="Pick an endpoint, generate code in curl/fetch/axios/python, fire requests against any Ovok release tier."
    >
      <BrowserOnly fallback={<div style={{ padding: '4rem 1.5rem', maxWidth: 960, margin: '0 auto' }}>Loading playground…</div>}>
        {() => <PlaygroundImpl />}
      </BrowserOnly>
    </Layout>
  );
}
