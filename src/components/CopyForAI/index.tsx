import { useEffect, useRef, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

type Status = 'idle' | 'copying' | 'copied' | 'error';
type Variant = 'inline' | 'floating';

interface Props {
  variant?: Variant;
}

/**
 * Maps the current Docusaurus URL to its raw-markdown twin under /llms/.
 * The home page lives at /index.md; everything else mirrors the route.
 */
function permalinkToLlmsUrl(pathname: string): string {
  const trimmed = pathname.replace(/\/$/, '');
  if (!trimmed || trimmed === '') return '/llms/index.md';
  return `/llms${trimmed}.md`;
}

async function fetchMarkdown(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

function CopyForAIImpl({ variant = 'inline' }: Props): JSX.Element | null {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [available, setAvailable] = useState<boolean | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Probe whether this page has a markdown twin. Skips the dropdown for
  // routes that don't (e.g. /playground) instead of producing a useless
  // disabled button.
  useEffect(() => {
    let cancelled = false;
    const url = permalinkToLlmsUrl(location.pathname);
    fetch(url, { method: 'HEAD' })
      .then((res) => { if (!cancelled) setAvailable(res.ok); })
      .catch(() => { if (!cancelled) setAvailable(false); });
    return () => { cancelled = true; };
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (available === false) return null;

  const flash = (next: Status, reset = true) => {
    setStatus(next);
    if (reset) window.setTimeout(() => setStatus('idle'), 1600);
  };

  const writeToClipboard = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  };

  const copyMarkdown = async () => {
    setStatus('copying');
    const md = await fetchMarkdown(permalinkToLlmsUrl(location.pathname));
    if (!md) { flash('error'); return; }
    const ok = await writeToClipboard(md);
    flash(ok ? 'copied' : 'error');
    setOpen(false);
  };

  const copyAiPrompt = async () => {
    setStatus('copying');
    const md = await fetchMarkdown(permalinkToLlmsUrl(location.pathname));
    if (!md) { flash('error'); return; }
    const url = `${window.location.origin}${location.pathname}`;
    const prompt = `You are helping me with the Ovok platform — a healthcare API platform.

The following is one page of the official Ovok documentation. Read it carefully,
then wait for my question.

Source URL: ${url}

---

${md}

---

I'll ask my question next.`;
    const ok = await writeToClipboard(prompt);
    flash(ok ? 'copied' : 'error');
    setOpen(false);
  };

  const openInChatGPT = async () => {
    setStatus('copying');
    const md = await fetchMarkdown(permalinkToLlmsUrl(location.pathname));
    if (!md) { flash('error'); return; }
    const url = `${window.location.origin}${location.pathname}`;
    const prompt = `Read this Ovok docs page and help me with my question.\n\nSource: ${url}\n\n---\n\n${md}`;
    const target = `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`;
    window.open(target, '_blank', 'noopener');
    flash('copied');
    setOpen(false);
  };

  const openInClaude = async () => {
    setStatus('copying');
    const md = await fetchMarkdown(permalinkToLlmsUrl(location.pathname));
    if (!md) { flash('error'); return; }
    const url = `${window.location.origin}${location.pathname}`;
    const prompt = `Read this Ovok docs page and help me with my question.\n\nSource: ${url}\n\n---\n\n${md}`;
    const target = `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;
    window.open(target, '_blank', 'noopener');
    flash('copied');
    setOpen(false);
  };

  const label =
    status === 'copying' ? 'Copying…' :
    status === 'copied'  ? 'Copied ✓' :
    status === 'error'   ? 'Failed' :
    'Copy for AI';

  return (
    <div
      ref={rootRef}
      className={variant === 'floating' ? styles.floating : styles.inline}
    >
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        data-status={status}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className={styles.icon}>
          <path d="M4 1.5h6.5a1 1 0 0 1 1 1V9" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <rect x="2.5" y="3.5" width="8" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
        <span className={styles.label}>{label}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className={styles.caret}>
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div className={styles.menu} role="menu">
          <button type="button" className={styles.item} onClick={copyMarkdown}>
            <strong>Copy as markdown</strong>
            <span>Just the raw page contents.</span>
          </button>
          <button type="button" className={styles.item} onClick={copyAiPrompt}>
            <strong>Copy with AI prompt</strong>
            <span>Wrapped in a "read this then answer" preamble.</span>
          </button>
          <div className={styles.divider} />
          <button type="button" className={styles.item} onClick={openInChatGPT}>
            <strong>Open in ChatGPT</strong>
            <span>New chat with this page as context.</span>
          </button>
          <button type="button" className={styles.item} onClick={openInClaude}>
            <strong>Open in Claude</strong>
            <span>New chat with this page as context.</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default function CopyForAI(props: Props): JSX.Element {
  return (
    <BrowserOnly>
      {() => <CopyForAIImpl {...props} />}
    </BrowserOnly>
  );
}
