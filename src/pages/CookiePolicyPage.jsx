import React from 'react';
import { Link } from 'react-router-dom';
import Seo, { breadcrumbSchema, webPageSchema } from '../seo';

/**
 * Cookie notice.
 *
 * Written against what the site actually does, measured in a browser rather
 * than assumed, because the usual version of this page is boilerplate that
 * describes a site the author never checked.
 *
 * What the measurement found, on every page: no cookies, no localStorage, no
 * sessionStorage, no external scripts. On /book, Vercel Analytics loads and
 * sets no cookie, which matches its documentation. The Cal.com embed issues no
 * request at all until a visitor submits the form and asks for the calendar.
 *
 * So there is no consent banner on this site, and that is a deliberate
 * decision rather than an omission. Consent is required for storage that is
 * not strictly necessary. There is none. A banner would ask permission for
 * something that does not happen, and it would train a reader to dismiss a
 * dialog that means nothing.
 *
 * There is also a neat trap in the alternative: a dismissible banner has to
 * remember that it was dismissed, which takes a cookie or a localStorage
 * entry. Adding one would create the first client side storage on the site.
 * The banner would become the thing it warns about.
 *
 * If tracking is ever added, this page and the consent position both have to
 * change, and section 7 of the privacy policy already commits to that.
 */

const TITLE = 'Cookie Notice | Talavishiraaj Groups';
const DESCRIPTION =
  'This site sets no cookies and stores nothing in your browser. What that means, the one third party that loads when you book a call, and why there is no consent banner.';

const rows = [
  {
    what: 'Cookies set by this site',
    answer: 'None.',
    detail:
      'No cookies are set on any page, for any purpose, including analytics, advertising and personalisation.',
  },
  {
    what: 'Data stored in your browser',
    answer: 'None.',
    detail:
      'Nothing is written to local storage or session storage. Closing the tab leaves nothing behind.',
  },
  {
    what: 'Advertising and cross site tracking',
    answer: 'None.',
    detail:
      'There are no advertising pixels, no remarketing tags and no social network trackers anywhere on the site.',
  },
  {
    what: 'Analytics',
    answer: 'Cookieless.',
    detail:
      'We use Vercel Analytics, which counts page views without cookies and without building a profile of you. It cannot follow you to other websites.',
  },
  {
    what: 'Fonts',
    answer: 'Self hosted.',
    detail:
      'Typefaces are served from this domain rather than from a font network, so loading a page does not announce your visit to a third party.',
  },
  {
    what: 'Server logs',
    answer: 'Standard.',
    detail:
      'Our hosting provider records ordinary request information such as IP address and user agent, for security and reliability. That is described in the privacy policy.',
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="bg-white text-primary">
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/cookies"
        jsonLd={[
          webPageSchema({ path: '/cookies', title: 'Cookie Notice', description: DESCRIPTION }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Cookie Notice', path: '/cookies' },
          ]),
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-5">Legal</p>
        <h1 className="text-3xl md:text-5xl font-semibold mb-6">Cookie notice</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          This site sets no cookies and stores nothing in your browser. There is nothing here to
          accept or decline, which is why you were not asked.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          That is unusual enough to be worth setting out precisely, so the whole position is below
          rather than buried in a policy. Everything on this page describes what the site does
          today, and it was checked in a browser rather than copied from a template.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            What this site does and does not do
          </h2>
          <dl className="space-y-7">
            {rows.map((row) => (
              <div key={row.what} className="border-b border-border pb-7 last:border-0 last:pb-0">
                <dt className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <span className="text-base font-semibold">{row.what}</span>
                  <span className="text-sm font-medium text-slate">{row.answer}</span>
                </dt>
                <dd className="text-sm text-gray-700 leading-relaxed max-w-2xl">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border bg-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
            The one third party, and when it loads
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4 max-w-2xl">
            If you choose to book a call, the calendar is provided by Cal.com and runs inside a
            frame on our page. It is not loaded when you arrive. No request reaches Cal.com until
            you ask for the calendar, so simply reading the site never involves them.
          </p>
          <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
            Once it loads, Cal.com may set its own cookies inside that frame, under its own terms,
            to run the booking. We do not control those and we do not read them. If you would
            rather not load it at all, the contact form reaches us just as well and involves no
            third party.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
            Why there is no consent banner
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4 max-w-2xl">
            Consent is required for storage that is not strictly necessary. There is none here, so
            a banner would be asking your permission for something that does not happen. We would
            rather not train you to dismiss a dialog that means nothing.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-4 max-w-2xl">
            There is also a small irony in the alternative. A banner you can dismiss has to
            remember that you dismissed it, which takes a cookie or a stored entry. Adding one
            would create the first thing this site stores on your device. The banner would become
            the thing it warns about.
          </p>
          <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
            If that ever changes, this notice changes with it and you will be asked properly before
            anything is set.{' '}
            <Link
              to="/privacy-policy"
              className="font-medium text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
            >
              The privacy policy
            </Link>{' '}
            sets out what we collect when you contact us, how long it is kept and your rights over
            it.
          </p>
        </div>
      </section>
    </div>
  );
}
