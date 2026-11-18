'use client';

import { Analytics, type BeforeSendEvent } from '@vercel/analytics/next';

// Our own visits (the team in India checking the site) were outnumbering real buyers in the
// country report. Open any page once with ?notrack=1 on each of your browsers and devices to
// leave that browser out of Vercel Analytics; ?notrack=0 counts it again.
const KEY = 'tj-notrack';

function ignored() {
  try {
    const flag = new URLSearchParams(window.location.search).get('notrack');
    if (flag === '1') localStorage.setItem(KEY, '1');
    if (flag === '0') localStorage.removeItem(KEY);
    return localStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}

export function SiteAnalytics() {
  return (
    <Analytics
      beforeSend={(event: BeforeSendEvent) => {
        if (ignored()) return null;
        // Drop the switch itself from reported URLs.
        const url = new URL(event.url);
        url.searchParams.delete('notrack');
        return { ...event, url: url.toString() };
      }}
    />
  );
}
