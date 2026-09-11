import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Conversion instrumentation.
 *
 * No analytics provider is bundled and nothing is collected by default. This is
 * a thin adapter that forwards events to whichever provider the site is
 * configured with at runtime. If none is present, every call is a no-op, so no
 * data is gathered and no consent obligation is created.
 *
 * To start collecting, load a provider script (Vercel Web Analytics, Plausible,
 * or a Google tag with a real GA4 measurement id) and these events flow to it
 * with no change to the components below. Do not commit a placeholder or
 * invented measurement id: a provider must be genuinely configured first.
 *
 * Event vocabulary, kept deliberately small and business-meaningful:
 *
 *   page_view              a route was viewed
 *   cta_click              a call to action was clicked
 *   service_interest       a capability was opened
 *   <capability>_interest  a specific capability enquiry (tech, ai, rd,
 *                          strategy, growth, delivery)
 *   prism_interest         the Prism product was engaged with
 *   partnership_interest   partnership collaboration was engaged with
 *   case_study_view        a case study was opened
 *   contact_form_start     the contact form was begun
 *   contact_form_submit    the contact form was submitted
 *   service_inquiry        an enquiry was started from a capability page
 *   email_click            a mailto link was used
 *   social_click           an official social profile was opened
 *   external_link_click    any other outbound link
 */
export function track(event, properties = {}) {
  if (typeof window === 'undefined') return;

  try {
    // Vercel Web Analytics
    if (typeof window.va === 'function') {
      window.va('event', { name: event, ...properties });
      return;
    }
    // Plausible
    if (typeof window.plausible === 'function') {
      window.plausible(event, { props: properties });
      return;
    }
    // Google Analytics / gtag
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, properties);
      return;
    }
    // Generic tag-manager style queue
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event, ...properties });
    }
  } catch {
    // Instrumentation must never break the page it is measuring.
  }
}

/** Outbound link helper, so the destination is recorded consistently. */
export const trackOutbound = (url, context = {}) =>
  track(context.network ? 'social_click' : 'external_link_click', { url, ...context });

/**
 * Records a page_view on every route change. Client-side navigation does not
 * trigger the automatic page view most providers rely on, so it is sent
 * explicitly. The initial load is included.
 */
export function usePageViews() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    track('page_view', { path: pathname + search, title: document.title });
  }, [pathname, search]);
}
