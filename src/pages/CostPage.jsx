import React from 'react';
import { Link } from 'react-router-dom';
import Seo, { breadcrumbSchema, faqSchema, webPageSchema } from '../seo';
import benchmarks from '../data/benchmarks';
import { ProportionFigure, SpreadFigure, RangeCompareFigure } from '../components/Figures';
import CtaBand from '../components/CtaBand';
import RelatedPath from '../components/RelatedPath';

/**
 * What this work costs.
 *
 * Two things forced the shape of this page.
 *
 * The first is a hard constraint: our own numbers do not go on the public site,
 * and that is not negotiable. An external audit recommended a page about cost
 * and the obvious reading of that is a rate card, which is the one thing this
 * page must not be. So it answers the question a visitor actually arrives with,
 * which is not "what do you charge" but "can I afford this kind of work and am
 * I about to be taken for a ride". Those are answerable from published market
 * data without naming a single internal figure, and the page says plainly in
 * its opening that it will not quote one. Naming the omission is more
 * trustworthy than hiding it, and a visitor who wants our number has a route to
 * ask for it at the bottom.
 *
 * The second is demand. Autocomplete shows "custom software development cost"
 * and "how much does custom software development cost" as live, high intent
 * queries with multiple variants. The site currently has no page that answers
 * either, which is part of why there are no non branded clicks.
 *
 * Every number here comes from src/data/benchmarks.js, which requires each
 * figure to name its source, and every figure is drawn rather than described
 * because the arguments are all comparisons of quantity.
 *
 * Vocabulary note for whoever edits this. The content checker bans the words
 * "pricing" and "priced" outright so our own rates cannot leak in casually.
 * That rule is correct and stays. Write "cost", "quote" or "budget" instead.
 */

/**
 * Join a sourced claim into the middle of a sentence.
 *
 * The claims in benchmarks.js are written as standalone sentences and start
 * with a capital, so quoting one mid sentence needs its first letter lowered.
 * Calling .toLowerCase() on the whole string does that and also destroys every
 * acronym in it: "AI deployments routinely reach 1.6 to 2.2 times the build
 * cost" came out as "ai deployments", which shipped. Only the first character
 * changes, and not even that when the first word is an acronym.
 */
const lowerFirst = (s) => {
  const firstWord = s.split(' ')[0];
  if (/^[A-Z]{2,}$/.test(firstWord.replace(/[^A-Za-z]/g, ''))) return s;
  return s.charAt(0).toLowerCase() + s.slice(1);
};

/*
  Title and description both changed after reading the live SERP for the target
  query rather than guessing at it.

  Every result on page one for "custom software development cost" opens its
  snippet with a figure range, and every one of them carries the exact phrase
  "software development cost". This page said "What Custom Software Costs",
  which drops "development", the highest volume word in the phrase, and its
  description opened with a description of the page rather than a number.

  Deliberately not copied from the SERP: the year. Seven of the nine results
  carry 2026 in the title, and adding it would match the pattern, but it also
  commits whoever owns this page to revisiting the title every January or
  looking visibly stale. That is a real trade and it belongs to the owner, not
  to this edit. Noted rather than taken.
*/
const TITLE = 'Custom Software Development Cost | Talavishiraaj Groups';
/*
  Composed from benchmarks.js rather than typed, because typing it here is
  exactly what the currency rule exists to stop, and it caught this on the
  first attempt. The shortClaim fields are display length variants of the same
  sourced figures, kept in the same file as their sources so the shorter
  wording cannot drift away from what was published.
*/
const DESCRIPTION = `${benchmarks.buildRanges.shortClaim}, averaging ${benchmarks.clutchAverage.shortClaim}. Why one brief gets quoted ten times apart, and what a quote leaves out.`;

/**
 * Every currency amount below is interpolated from benchmarks.js rather than
 * typed here. That file is the only one permitted to carry one, which is what
 * stops an internal rate reaching a public page by a moment's inattention, and
 * it forces each figure to name a source. The awkwardness of composing prose
 * out of quoted claims is the point working as designed.
 */
const faqs = [
  {
    question: 'How much does custom software development cost?',
    answer: `${benchmarks.buildRanges.claim}. ${benchmarks.clutchAverage.claim}. Those numbers are close to useless on their own, because ${lowerFirst(benchmarks.quoteSpread.claim)}. What the figure actually depends on is scope, the state of the data the system has to read, how many existing systems it must integrate with, and how wrong the software is allowed to be.`,
  },
  {
    question: 'Why do quotes for the same project vary so much?',
    answer:
      'Because the brief is usually underspecified, so each firm is quoting a different project. A low quote often assumes a narrower scope, excludes integration, testing, monitoring and post launch support, or prices a demonstration rather than a production system. The spread is a signal that the requirement is not yet defined, not that one firm is dishonest.',
  },
  {
    question: 'What does a build quote usually leave out?',
    answer: `Integration with the systems you already run. ${benchmarks.integrationCost.claim}. Then everything after launch: ${lowerFirst(benchmarks.maintenance.claim)}, so ${lowerFirst(benchmarks.tcoShare.claim)}. For AI specifically, ${lowerFirst(benchmarks.aiTco.claim)}.`,
  },
  {
    question: 'How long does custom software take to build?',
    answer: `${benchmarks.timelines.claim}. ${benchmarks.overrun.claim} on average, so treat any quoted date as a best case unless the scope is genuinely fixed.`,
  },
  {
    question: 'How do I avoid overpaying for custom software?',
    answer: `Define the requirement before you ask for a number. ${benchmarks.discovery.claim}. Ask every firm for the three year total broken into build, running and change rather than the build figure alone, and ask what is excluded in writing.`,
  },
  {
    question: 'Does Talavishiraaj Groups publish its rates?',
    answer:
      'No. Any firm that can quote your project before understanding the requirement is quoting a different project. We scope the work first and then give you a fixed number for it, and we will tell you when the work does not justify itself before a proposal exists. Describe your situation and you will get a straight answer on cost for your case.',
  },
];

export default function CostPage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/what-it-costs"
        jsonLd={[
          webPageSchema({ path: '/what-it-costs', title: TITLE, description: DESCRIPTION }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'What it costs', path: '/what-it-costs' },
          ]),
          faqSchema(faqs),
        ]}
      />

      {/* HERO. The concession comes first on purpose. A visitor who has been
          sent here by a search for cost will find out within one paragraph
          whether this page wastes their time, and being told up front that
          there is no rate card buys the credibility the rest of the page
          spends. */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-5">What it costs</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
          What custom software and AI work actually costs
        </h1>
        {/*
          The answer goes first, and that is a correction to how this page was
          written yesterday.

          It opened with "there is no rate card on this page", which is honest
          and well intentioned and is still the second paragraph. But the H1
          asks what this work costs, and a visitor who arrives from a search
          for exactly that was met with a refusal before an answer. The figures
          were four screens down. A reader deciding in the first two seconds
          whether a page is worth their time had nothing to hold.

          So the published range leads, then the caveat that makes it usable,
          then what the page covers. Nothing was removed and no claim changed.
        */}
        <p className="text-lg text-gray-700 leading-relaxed mb-5">
          {benchmarks.buildRanges.claim}, and {lowerFirst(benchmarks.clutchAverage.claim)}. Those
          are published market figures, not ours, and the rest of this page is about why the spread
          between them is so wide and what the number actually depends on.
        </p>
        <p className="text-base text-gray-700 leading-relaxed mb-5">
          There is no rate card here, and you should be wary of one anywhere else. A firm that can
          quote your project before understanding the requirement is quoting a different project.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          What follows is the published market evidence: how far apart quotes for the same brief
          land, what a build figure leaves out, and the one thing that reliably keeps a project
          inside its budget. Every number names its source.
        </p>
      </section>

      {/* 1. THE SPREAD */}
      <section className="border-t border-border bg-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            The same brief, quoted ten times apart
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-2 max-w-2xl">
            This is the first thing to understand, because it explains why no honest number exists
            before scope does. Take one brief to several firms and the quotes will not cluster.
          </p>

          <SpreadFigure
            title="What one brief gets quoted at"
            standfirst="The span between the cheapest and the most expensive quote for the same requirement, with the market average marked."
            low={benchmarks.quoteSpread.figures.low}
            high={benchmarks.quoteSpread.figures.high}
            marker={benchmarks.clutchAverage.figures.average}
            markerLabel="Average project"
            source={benchmarks.quoteSpread.source}
            url={benchmarks.quoteSpread.url}
          />

          <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
            A ten times spread is not evidence that somebody is lying. It is evidence that each firm
            is quoting a different project, because the brief did not say enough to pin one down.
            The cheap quote is usually narrower, excludes integration, or prices a demonstration
            rather than something your business can run on. Comparing those two numbers is not
            comparing like with like, and the decision that follows from the comparison is wrong.
          </p>
        </div>
      </section>

      {/* 2. WHAT THE QUOTE LEAVES OUT */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            The number you are quoted is not the number you pay
          </h2>
          <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
            A build quote covers building it. Most of what the software costs you arrives after it
            works, and it arrives every year.
          </p>

          <ProportionFigure
            title="Build cost as a share of five year ownership"
            standfirst="What the quote covers, against what the software costs you over five years."
            sharePct={benchmarks.tcoShare.figures.buildSharePct}
            shareLabel="The build. This is the part you are quoted"
            restLabel="Running, changing and maintaining it"
            source={benchmarks.tcoShare.source}
            url={benchmarks.tcoShare.url}
          />

          <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-2xl">
            Annual maintenance commonly runs 15 to 25 percent of the original build cost, every
            year, which is the single most consistent figure in this category: five independent
            publishers land in the same band. Integration with the systems you already run is the
            other large omission, and it is the most frequent cause of overrun.
          </p>

          <RangeCompareFigure
            title="The two costs most often left out of a build figure"
            standfirst="Both expressed as a percentage of the initial development cost."
            rows={[
              {
                label: 'Integration with existing systems, one off',
                low: benchmarks.integrationCost.figures.lowPct,
                high: benchmarks.integrationCost.figures.highPct,
                emphasis: true,
              },
              {
                label: 'Maintenance, every year after launch',
                low: benchmarks.maintenance.figures.lowPct,
                high: benchmarks.maintenance.figures.highPct,
              },
            ]}
            source={benchmarks.maintenance.source}
            url={benchmarks.maintenance.url}
          />

          <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
            For AI work the gap is wider still, because inference is charged by use and so the bill
            grows when the thing succeeds. Published figures put the 24 month total at 1.6 to 2.2
            times the build cost once inference and retraining are counted.
          </p>

          <RelatedPath
            to="/insights/what-ai-integration-costs"
            label="what AI integration costs and where it goes wrong"
            location="cost_page"
          >
            If AI is the part you are budgeting for, the detail is in
          </RelatedPath>
        </div>
      </section>

      {/* 3. WHAT KEEPS IT IN BUDGET */}
      <section className="border-t border-border bg-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            One thing reliably predicts whether it lands on budget
          </h2>
          <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
            Not the firm you pick, and not the technology. Whether the requirement was worked out
            before anyone committed to building it.
          </p>

          <RangeCompareFigure
            title="How far over budget projects land"
            standfirst="Projects that defined the requirement first, against projects that went straight to building."
            rows={[
              {
                label: 'Skipped discovery',
                low: benchmarks.discovery.figures.withoutLowPct,
                high: benchmarks.discovery.figures.withoutHighPct,
                emphasis: true,
              },
              {
                label: 'Did discovery first',
                low: benchmarks.discovery.figures.withLowPct,
                high: benchmarks.discovery.figures.withHighPct,
              },
            ]}
            unit="% over"
            source={benchmarks.discovery.source}
            url={benchmarks.discovery.url}
          />

          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
            Worth saying plainly: that figure is published by a firm that sells discovery, and we
            are a firm that would do the same work. Treat the direction as sound and the exact
            numbers as indicative. It is quoted here because it is the clearest published statement
            of an effect that the overrun data supports independently, not because the source is
            disinterested.
          </p>
        </div>
      </section>

      {/* 4. HOW TO READ A QUOTE */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Five questions to ask before you sign anything
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-8 max-w-2xl">
            These work on us as well as on anyone else, and they are the fastest way to tell a
            scoped project from a hopeful one.
          </p>
          <ol className="space-y-6 list-none counter-reset">
            {[
              {
                q: 'What is the three year total, split into build, running and change?',
                a: 'A quote that covers only the build is not a cost, it is a deposit. A firm that cannot produce the three year figure has scoped a demonstration rather than a project.',
              },
              {
                q: 'What is excluded, in writing?',
                a: 'Testing, monitoring, integration and post launch support are where a low number hides its real cost. Get the exclusions listed rather than described.',
              },
              {
                q: 'Who maintains this in year two, and have they been told?',
                a: 'The answer is revealing more often than it should be. A system nobody has been assigned to is a system that degrades quietly.',
              },
              {
                q: 'What happens to the number if the requirement changes?',
                a: 'Requirements always change. What matters is whether the contract treats that as a costed change with an agreed rate, or as an argument.',
              },
              {
                q: 'What would make you tell me not to build this?',
                a: 'If a firm has no answer, they have no criteria, and you are the one carrying the risk of a project that should not have started.',
              },
            ].map((item, index) => (
              <li key={item.q} className="flex gap-5">
                <span className="text-sm font-mono text-gray-500 pt-1 flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-semibold mb-1.5 leading-snug">{item.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              </li>
            ))}
          </ol>

          <RelatedPath to="/in-house-vs-agency" label="in house, agency or independent" location="cost_page_compare">
            If you have not yet decided who should do the work at all, the trade offs are set out in
          </RelatedPath>
        </div>
      </section>

      {/* FAQ. Carries the FAQPage schema, which is what an assistant reads when
          someone asks it what this work costs. */}
      <section className="border-t border-border bg-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Questions people ask about cost
          </h2>
          <dl className="space-y-8">
            {faqs.map((item) => (
              <div key={item.question} className="border-b border-border pb-8 last:border-0 last:pb-0">
                <dt className="text-lg font-semibold mb-2.5 leading-snug">{item.question}</dt>
                <dd className="text-gray-700 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 text-sm text-gray-600 leading-relaxed">
          <p className="mb-3 font-medium text-gray-900">On these figures</p>
          <p>
            Most published cost data in this category is produced by firms that sell the work, so it
            is not disinterested. Each figure above links to where it came from so you can judge it
            yourself. Where several independent publishers agree, that is noted. Ranges are quoted as
            ranges because that is how they were published, and a single number would be a false
            precision.{' '}
            <Link
              to="/build-vs-buy"
              className="font-medium text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
            >
              The build versus buy framework
            </Link>{' '}
            works through the same decision without a number attached.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Want the number for your case?"
        body="Describe what you are trying to build and we will tell you what it would take, what it would cost, and whether it is worth doing at all. Book a call or send a few lines, whichever you prefer."
        location="cost_page_cta"
      />
    </>
  );
}
