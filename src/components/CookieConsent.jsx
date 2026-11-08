import React from 'react';
import { Link } from 'react-router-dom';
import { readConsent, writeConsent, CONSENT_GRANTED, CONSENT_DECLINED } from './consent';

/**
 * The consent banner.
 *
 * Shape decisions, all of which are about not wrecking a conversion funnel
 * that took this project weeks to tidy up.
 *
 * It is a bar at the bottom, not a centred modal over the page. A modal is
 * more effective at forcing a click and it meets a stranger with an
 * obstruction before a single sentence of the site has been read, which on a
 * site whose measured problem is that nobody converts is an expensive way to
 * look compliant.
 *
 * Accept and decline carry equal visual weight. A prominent accept beside a
 * greyed decline is the pattern regulators have been steadily ruling against,
 * and it is also simply dishonest when the honest answer costs us nothing.
 *
 * It renders nothing until after mount. The pages are prerendered to static
 * HTML and the consent choice lives in localStorage, which does not exist on
 * the server, so rendering it during the server pass would put a banner into
 * the HTML of every page for visitors who had already answered and would
 * produce a hydration mismatch. Showing it in an effect costs one frame and
 * avoids both.
 *
 * The copy does not claim the site sets cookies, because it does not. It says
 * what is true: nothing is stored unless you book, and booking loads Cal.com.
 */
export default function CookieConsent() {
  const [choice, setChoice] = React.useState('pending');

  React.useEffect(() => {
    setChoice(readConsent());
  }, []);

  if (choice === 'pending' || choice === CONSENT_GRANTED || choice === CONSENT_DECLINED) {
    // 'pending' is the pre-mount state, so nothing renders during the server
    // pass or the first client frame. A recorded answer also renders nothing.
    if (choice !== null) return null;
  }

  const decide = (value) => {
    writeConsent(value);
    setChoice(value);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie choices"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white shadow-[0_-8px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3.5 md:py-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
        <p className="text-xs md:text-sm text-gray-700 leading-relaxed flex-1">
          This site sets no cookies and stores nothing while you read it. If you book a call, the
          calendar is provided by Cal.com and may set its own. You can allow that now, or decline
          and use the contact form instead.{' '}
          <Link
            to="/cookies"
            className="font-medium text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black whitespace-nowrap"
          >
            What this site stores
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={() => decide(CONSENT_DECLINED)}
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium text-primary hover:bg-muted transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide(CONSENT_GRANTED)}
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium text-primary hover:bg-muted transition-colors"
          >
            Allow
          </button>
        </div>
      </div>
    </div>
  );
}
