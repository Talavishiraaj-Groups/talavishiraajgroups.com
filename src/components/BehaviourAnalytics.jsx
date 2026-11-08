import React from 'react';
import { hasConsent } from './consent';

/**
 * Behaviour analytics, loaded only after consent.
 *
 * What this adds that the existing setup does not. Vercel Web Analytics is
 * already running and is cookieless, and it answers how many people came,
 * from where, and which pages they opened. It cannot answer the questions the
 * owner actually asked: how long someone spent on a page, how far down they
 * read, where they went next, and where they gave up. Those need behaviour
 * tracking rather than page counting, and on this site they matter more than
 * the totals, because the measured problem is not traffic volume but that
 * almost nobody converts. Thirty visitors a week is few enough to watch
 * individually and learn something real.
 *
 * Microsoft Clarity rather than a heavier alternative. It is free with no
 * volume cap, which matters at this scale, and it is built for exactly this:
 * scroll depth, time, click maps, rage and dead clicks, and session replay.
 * Google Analytics 4 would answer the same questions less directly, weigh
 * considerably more, and commit the site to a consent regime it would then
 * share with advertising.
 *
 * The important part: this is the first thing on the site that genuinely
 * requires consent, and the banner that was built for the booking calendar
 * now carries real weight. Clarity sets cookies and records sessions, so it
 * loads only on an explicit yes. No consent, no script, no request. The
 * script tag is not merely idle, it is never inserted.
 *
 * It is also off unless an id is configured. An unset VITE_CLARITY_ID means
 * this component does nothing at all, so the repository never ships a
 * placeholder that silently starts collecting if someone copies it.
 *
 * Privacy obligations that come with turning this on, all handled and all
 * worth keeping true: Clarity masks text input by default and that default
 * must stay, the privacy policy names it rather than describing tracking in
 * the abstract, and /cookies says what a visitor is agreeing to in plain
 * words. If this component is ever removed, those three change back.
 */
export default function BehaviourAnalytics() {
  const id = import.meta.env.VITE_CLARITY_ID;

  React.useEffect(() => {
    if (!id) return undefined;
    if (typeof window === 'undefined') return undefined;

    let injected = null;

    const load = () => {
      if (!hasConsent() || injected || window.clarity) return;
      // Clarity's own bootstrap, kept verbatim so the vendor can change the
      // endpoint without this breaking, with the queue shim it expects.
      window.clarity =
        window.clarity ||
        function queue(...args) {
          (window.clarity.q = window.clarity.q || []).push(args);
        };
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.clarity.ms/tag/${id}`;
      document.head.appendChild(script);
      injected = script;
    };

    load();
    // A visitor who accepts partway through a session should be picked up
    // without a reload, and one who never accepts never triggers this.
    window.addEventListener('tg-consent-change', load);
    return () => window.removeEventListener('tg-consent-change', load);
  }, [id]);

  return null;
}
