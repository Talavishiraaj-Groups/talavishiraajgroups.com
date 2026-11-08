/**
 * Consent state for the one third party this site loads.
 *
 * Why this exists at all. The site sets no cookies and stores nothing, and
 * that argument was used to decline a banner twice. The owner has asked for
 * one directly, which is their call to make, so here it is. What follows is
 * the honest version rather than the decorative one.
 *
 * A banner that controls nothing is theatre: it asks permission, records an
 * answer and changes no behaviour. This one is wired to the only third party
 * the site has. Cal.com runs the booking calendar inside a frame and may set
 * its own cookies under its own terms. Decline and that frame is never
 * created, with the contact form offered instead. Accept and it loads without
 * asking a second time.
 *
 * The storage irony, which is real and worth stating rather than hiding. A
 * banner that can be dismissed has to remember the dismissal, so the consent
 * choice itself is the first thing this site writes to a visitor's browser.
 * That is permitted without consent because remembering a consent decision is
 * strictly necessary by definition, and it is one key holding one word. It is
 * described on /cookies rather than left for someone to discover.
 *
 * Everything here is written to survive server rendering and a browser that
 * refuses storage. Every read and write is wrapped, because localStorage
 * throws rather than returning null in a private window with site data
 * blocked, and an exception thrown while deciding whether to show a banner
 * would take the page down with it.
 */

const KEY = 'tg-consent';

export const CONSENT_GRANTED = 'granted';
export const CONSENT_DECLINED = 'declined';

/** Returns 'granted', 'declined', or null when the visitor has not chosen. */
export function readConsent() {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(KEY);
    return value === CONSENT_GRANTED || value === CONSENT_DECLINED ? value : null;
  } catch {
    // Storage blocked. Treated as "not chosen", which shows the banner again
    // rather than silently assuming either answer.
    return null;
  }
}

export function writeConsent(value) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    // Nothing to do. The choice holds for this page view and the banner
    // returns next time, which is the correct failure direction: it never
    // results in a third party loading against someone's wishes.
  }
  window.dispatchEvent(new CustomEvent('tg-consent-change', { detail: value }));
}

/** True only on an explicit yes. Absence of a choice is not consent. */
export const hasConsent = () => readConsent() === CONSENT_GRANTED;
