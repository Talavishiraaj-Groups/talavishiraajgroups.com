'use client';

import { useEffect } from 'react';

/**
 * Remembers, for this browser tab only, the first page a visitor landed on and
 * where they came from (search engine, LinkedIn, a campaign link). It is sent
 * only if they submit a form, so each enquiry email says which page or blog post
 * brought the lead in. sessionStorage only: no cookies, cleared when the tab closes.
 */
const KEY = 'tg-src';

export function Attribution() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY)) return;
      const url = new URL(window.location.href);
      const ref = document.referrer ? new URL(document.referrer) : null;
      const utm = ['utm_source', 'utm_medium', 'utm_campaign']
        .map((k) => url.searchParams.get(k))
        .filter(Boolean)
        .join(' / ');
      sessionStorage.setItem(
        KEY,
        JSON.stringify({
          landing: url.pathname,
          referrer: ref && ref.host !== url.host ? ref.host : 'direct',
          campaign: utm,
        }),
      );
    } catch {
      /* storage blocked: attribution is optional */
    }
  }, []);
  return null;
}

export function getSource(): { landing: string; referrer: string; campaign: string } {
  try {
    const v = JSON.parse(sessionStorage.getItem(KEY) || 'null');
    if (v) return { landing: String(v.landing || ''), referrer: String(v.referrer || ''), campaign: String(v.campaign || '') };
  } catch {
    /* ignore */
  }
  return { landing: '', referrer: '', campaign: '' };
}

/** Plain-language label for where a visitor came from. */
export function describeSource(s: { landing?: string; referrer?: string; campaign?: string }) {
  const r = (s.referrer || '').toLowerCase();
  const channel = /google\./.test(r) ? 'Google search' : /bing\./.test(r) ? 'Bing search' : /chatgpt|openai/.test(r) ? 'ChatGPT' : /perplexity/.test(r) ? 'Perplexity' : /linkedin/.test(r) ? 'LinkedIn' : /duckduckgo/.test(r) ? 'DuckDuckGo' : r === 'direct' || !r ? 'Direct or unknown' : r;
  return channel;
}
