import React from 'react';
import Seo, { breadcrumbSchema, faqSchema, webPageSchema } from '../seo';
import CtaBand from '../components/CtaBand';
import RelatedPath from '../components/RelatedPath';

/**
 * In house, agency, consultancy or independent assessment.
 *
 * Why this page exists, beyond an audit asking for a comparison page.
 * Autocomplete shows "in house vs outsourcing" and "in house vs agency" as live
 * queries, and they are asked by someone who has a budget and has not yet
 * decided who spends it. That is the highest intent moment this business has,
 * and the site had nothing at it.
 *
 * The thing that makes a comparison page credible is losing rows. Six real
 * competitors were checked while researching the Optise audit (see
 * growth-research/15-optise-audit.md) and every one of them is paid to build,
 * which means not one of them sells an opinion on whether to build at all. That
 * is a genuine and narrow advantage, and it is the only row below where the
 * independent column wins outright. Speed, cost and depth of ownership go to
 * the other columns honestly, because a table where one column wins everything
 * is read as marketing and discarded, and because it would not be true.
 *
 * No competitor is named. Naming firms invites a fight we would lose on proof,
 * since five of the six lead with client logos we cannot match yet, and it
 * dates the page. The columns are the four routes a buyer actually chooses
 * between, which is what they are comparing anyway.
 */

const TITLE = 'In-House vs Agency vs Independent | Talavishiraaj Groups';
const DESCRIPTION =
  'Build it with your own team, hire an agency, bring in a consultancy, or get an independent read first. What each route is genuinely good at, what it costs you, and when each one is the wrong choice.';

const OPTIONS = [
  { id: 'inhouse', label: 'Your own team' },
  { id: 'agency', label: 'Development agency' },
  { id: 'consultancy', label: 'Management consultancy' },
  { id: 'independent', label: 'Independent read first' },
];

/**
 * `win` marks the column that is genuinely strongest on that row. It is used
 * only to weight the text, never to draw a tick, because a tick invites a
 * reader to count them instead of reading the row.
 */
const ROWS = [
  {
    criterion: 'How fast you can start',
    inhouse: 'Immediately, if the people are free. They rarely are, and pulling them off the roadmap has its own cost.',
    agency: 'Weeks. Scoping, proposal and contracting before anyone writes code.',
    consultancy: 'Weeks to months, and the engagement is usually larger than the question.',
    independent: 'Days, because the scope is the decision rather than the build.',
    win: 'independent',
  },
  {
    criterion: 'What it costs',
    inhouse: 'Salaries you are already paying, plus the opportunity cost of what those people are not doing. Cheapest on paper, rarely cheapest in practice.',
    agency: 'The largest number of the four, and the one most likely to grow. Integration and maintenance are commonly outside the quote.',
    consultancy: 'High, and you are buying a recommendation rather than a working system.',
    independent: 'The smallest of the four by a wide margin, and it is the only one that can end with you spending nothing else.',
    win: 'inhouse',
  },
  {
    criterion: 'Who owns the outcome',
    inhouse: 'You do, completely. There is nobody to escalate to when it slips.',
    agency: 'Shared, and the boundary is whatever the contract says. Where several vendors are involved, often nobody.',
    consultancy: 'Nobody. The deliverable is the advice, and execution is somebody else’s problem.',
    independent: 'You do, which is the point. The output is a decision you can act on with or without us.',
    win: 'inhouse',
  },
  {
    criterion: 'Depth of knowledge about your business',
    inhouse: 'Total. Your team knows the history, the politics and which processes are fiction.',
    agency: 'Shallow at the start and better by the end, though most of it leaves when the engagement does.',
    consultancy: 'Built quickly and deliberately, then documented and handed over.',
    independent: 'Enough for the decision in hand, and no more. That is a limitation, not a feature.',
    win: 'inhouse',
  },
  {
    criterion: 'Incentive to tell you not to build it',
    inhouse: 'Mixed. An internal team that wants the work is not neutral about whether the work exists.',
    agency: 'None. They are paid to build, so the honest answer and the commercial answer point the same way only by coincidence.',
    consultancy: 'Partial. They are not paid to build it, but they are paid for the next phase.',
    independent: 'This is the whole job. The engagement ends either way, so a no costs us nothing and saves you the build.',
    win: 'independent',
  },
  {
    criterion: 'What happens when the answer turns out to be wrong',
    inhouse: 'You absorb it, and the people who made the call are the people who have to fix it.',
    agency: 'A change request, usually chargeable.',
    consultancy: 'A follow on engagement.',
    independent: 'Nothing to absorb yet, because the commitment has not been made. That is the only reason to do this first.',
    win: 'independent',
  },
  {
    criterion: 'Best when',
    inhouse: 'The problem is well understood, the capability is core to your business, and you have the people.',
    agency: 'The requirement is settled, the work is clearly scoped, and you need capacity you do not have.',
    consultancy: 'The question is organizational rather than technical and spans several functions.',
    independent: 'You are about to commit serious money and cannot yet say, with evidence, that it is the right commitment.',
  },
];

const faqs = [
  {
    question: 'Should I build software in-house or hire an agency?',
    answer:
      'Build in-house when the capability is core to your business, the requirement is well understood, and you genuinely have the people free. Hire an agency when the requirement is settled and what you lack is capacity. The honest warning on in-house is that the cost is hidden rather than absent: it is the roadmap those people stop working on. The honest warning on an agency is that a build quote typically covers the build and not the integration or the years of maintenance after it.',
  },
  {
    question: 'What is the difference between a development agency and a consultancy?',
    answer:
      'An agency builds what you ask for and is paid to build it. A consultancy analyses the problem and hands over a recommendation, usually without building anything. The practical consequence is that an agency has no commercial reason to tell you the project should not happen, and a consultancy has no obligation to make its recommendation work.',
  },
  {
    question: 'Why would I pay for an assessment instead of just starting the build?',
    answer:
      'Because the assessment is the cheapest of the four routes and the only one that can end with you spending nothing further. Published data shows projects that defined the requirement before committing land within roughly 10 to 15 percent of budget, while projects that skipped that step run 30 to 60 percent over. If the answer is that the build is right, you have lost very little. If it is not, you have avoided the whole number.',
  },
  {
    question: 'Is an independent assessment just a sales process for the build?',
    answer:
      'It is a fair question to ask of anyone who offers both. The test is whether the engagement is structured to end. Ask what the deliverable is if the answer is no, whether the fee changes depending on the recommendation, and whether you can take the output to a different firm. If the answers are vague, treat the assessment as a proposal.',
  },
];

function Cell({ children, emphasis }) {
  return (
    <td
      className={`align-top p-4 md:p-5 text-sm leading-relaxed border-t border-border ${
        emphasis ? 'text-gray-900 bg-muted font-medium' : 'text-gray-600'
      }`}
    >
      {children}
    </td>
  );
}

export default function ComparePage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/in-house-vs-agency"
        jsonLd={[
          webPageSchema({ path: '/in-house-vs-agency', title: TITLE, description: DESCRIPTION }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'In-house vs agency', path: '/in-house-vs-agency' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-5">Choosing a route</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
          In house, agency, or an independent read first
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-5">
          Four routes, and the right one depends on something most comparisons skip: whether the
          decision is actually settled yet. If it is, this is a capacity question. If it is not, you
          are about to buy a build to answer a question a build cannot answer.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          We do one of these four. The table says where the other three are better, because a
          comparison where one column wins every row is marketing, and you would be right to
          discard it.
        </p>
      </section>

      {/* THE TABLE. Scrolls horizontally on a phone rather than reflowing into
          cards: a comparison read down a single column at a time is no longer a
          comparison, and the whole value here is reading across a row. */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div
            className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0"
            tabIndex={0}
            role="region"
            aria-label="Comparison of the four routes, scrollable horizontally"
          >
            <table className="w-full min-w-[920px] border-collapse text-left">
              <caption className="sr-only">
                How building in house, hiring a development agency, hiring a management consultancy
                and taking an independent read first compare across seven criteria.
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[150px] p-4 md:p-5 text-xs uppercase tracking-[0.18em] text-gray-500 font-semibold align-bottom">
                    &nbsp;
                  </th>
                  {OPTIONS.map((option) => (
                    <th
                      key={option.id}
                      scope="col"
                      className="p-4 md:p-5 text-sm font-semibold align-bottom w-1/4"
                    >
                      {option.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.criterion}>
                    <th
                      scope="row"
                      className="align-top p-4 md:p-5 text-sm font-semibold border-t border-border"
                    >
                      {row.criterion}
                    </th>
                    {OPTIONS.map((option) => (
                      <Cell key={option.id} emphasis={row.win === option.id}>
                        {row[option.id]}
                      </Cell>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Shaded cells mark where a route is genuinely strongest on that criterion. Three of the
            seven go to routes other than ours.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
            The row that decides it
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-5">
            Every route above except one is paid according to whether the work happens. Your own
            team wants the project, an agency is paid to build it, and a consultancy is paid for the
            phase after the recommendation. None of that makes any of them dishonest. It does mean
            that if you ask them whether to proceed, you are asking a question of someone whose
            answer costs them something.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            That is the entire argument for doing a small, separate piece of work first, and it is
            the only row in the table where the fourth column wins outright. If your decision is
            already settled, it is not worth doing, and the other three columns are where you should
            be looking.
          </p>

          <RelatedPath to="/products" label="what that looks like as a piece of work" location="compare_page">
            If the decision is not settled and that is the position you are in, this is
          </RelatedPath>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Questions people ask when choosing
          </h2>
          <dl className="space-y-8">
            {faqs.map((item) => (
              <div key={item.question} className="border-b border-border pb-8 last:border-0 last:pb-0">
                <dt className="text-lg font-semibold mb-2.5 leading-snug">{item.question}</dt>
                <dd className="text-gray-700 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>

          <RelatedPath to="/what-it-costs" label="what this work actually costs" location="compare_page_cost">
            Whichever route you take, the published market evidence on budget is in
          </RelatedPath>
        </div>
      </section>

      <CtaBand
        heading="Not sure which of these you are in?"
        body="Describe the decision you are facing and we will tell you which route fits, including when it is not us. Book a call or send a few lines, whichever you prefer."
        location="compare_page_cta"
      />
    </>
  );
}
