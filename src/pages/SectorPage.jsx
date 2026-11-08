import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo, { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '../seo';
import { sectors, sectorBySlug, sectorPath, SECTOR_BREADTH_NOTE } from '../data/sectors';
import { capabilityById, capabilityPath } from '../data/servicesData';
import { caseStudies } from './CaseStudiesPage';
import { insightsForSector, insightPath } from '../data/insights';
import CtaBand from '../components/CtaBand';
import RelatedPath from '../components/RelatedPath';
import ArrowIcon from '../components/icons/ArrowIcon';

/**
 * One page per sector.
 *
 * Why these exist, and why they are shaped the way they are.
 *
 * Measured evidence, recorded in growth-research/99-log.md. ScienceSoft earns
 * 91,800 organic visits a month and no single page carries it: the best is 5
 * percent of traffic and the top five together about 20, so most of it comes
 * from a matrix of pages like these. Their /healthcare/mobile ranks first for
 * "healthcare app development" and pulls 3,200 visits on its own, against 79
 * visits for the entire site that ranks first for "custom ai software
 * development". The sector page is simply a far better unit of effort than
 * another article about AI.
 *
 * The title targets `[sector] software development company` rather than the
 * bare phrase, because the free Keyword Generator put "logistics software
 * development company" at over a thousand searches and the same phrase
 * without "company" at over a hundred. Ten times the demand for one word, and
 * the same pattern Kellton uses in its slugs.
 *
 * What keeps these from being the thin pages this project has warned about
 * twice: every sector carries its own problem statement, its own three
 * recognisable signals and its own capability mapping, written per sector in
 * src/data/sectors.js rather than generated from a template. If a sector
 * cannot be given specific content, it should not get a page.
 *
 * And the honesty rule that governs the whole set, stated in the data file:
 * the firm has delivered in these sectors and holds the data, but clients did
 * not agree to be named. So a sector page may say the work happened and what
 * the problem looks like. It may not imply a named client, a logo or a
 * result that nobody has agreed to publish.
 */

export default function SectorPage() {
  const { slug } = useParams();
  const sector = sectorBySlug(slug);

  if (!sector) {
    return (
      <>
        <Seo
          title="Sector not found | Talavishiraaj Groups"
          description="This sector page could not be found. Browse the sectors we work across instead."
          path={`/sectors/${slug || ''}`}
          noindex
        />
        <section className="max-w-3xl mx-auto px-4 md:px-8 py-24 text-center">
          <h1 className="text-3xl font-semibold mb-4">We could not find that sector</h1>
          <Link
            to="/case-studies"
            className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-7 py-3.5 text-sm font-medium hover:bg-graphite transition-colors"
          >
            See the work
          </Link>
        </section>
      </>
    );
  }

  const path = sectorPath(sector);

  /*
    No brand suffix on these titles, which reverses the rule used everywhere
    else on the site, and deliberately.

    Elsewhere the brand is kept because at zero non-branded clicks brand
    recall is the thing least affordable to truncate. These pages are the
    non-branded play itself: their entire job is to rank for
    "[sector] software development company", the phrase the volume data put
    at over a thousand searches against a hundred for the version without
    "company". Twenty-three characters of brand would push most of them past
    sixty and truncate the keyword instead. Google appends the site name to
    most results anyway.

    sector.keyword rather than sector.label, because labels like
    "Biotechnology and life sciences" are written to read well on the page and
    are not what anyone types.
  */
  const title = sector.targetPhrase;
  const description = `${sector.problem} We build and integrate the systems behind it.`;

  const capabilities = (sector.capabilities || []).map(capabilityById).filter(Boolean);
  const relatedCases = caseStudies.filter((c) => (c.sectors || []).includes(sector.id)).slice(0, 2);
  const others = sectors.filter((s) => s.id !== sector.id);
  const sectorInsights = insightsForSector(sector.id);

  const faqs = [
    {
      question: `What does ${sector.label.toLowerCase()} technology work involve?`,
      answer: `${sector.problem} The work is usually less about building something new and more about making what already exists agree with itself: integrating the systems holding the data, establishing which numbers can be trusted, and putting the result where a decision gets made. We cover software and systems engineering, applied AI and automation, and the hardware side where the problem reaches it.`,
    },
    {
      question: `How do you know whether this is worth building?`,
      answer: `We look at volume, repeatability and what an error costs before proposing anything, and we say so when the work does not justify itself. Published data puts projects that defined the requirement before committing within about 10 to 15 percent of budget, against 30 to 60 percent over for projects that skipped it. The assessment is deliberately structured so that it can end in a no.`,
    },
    {
      question: `Have you worked in ${sector.label.toLowerCase()} before?`,
      answer: `Yes. Our published case studies are anonymized at our clients' request, so the engagements in this sector are not listed by name, and we will not imply otherwise. What we can do on a call is talk through the specific problem shape, what the work involved and what it took to make it hold up in production.`,
    },
  ];

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        jsonLd={[
          webPageSchema({ path, title: `${sector.label} software development`, description }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Sectors', path: '/case-studies' },
            { name: sector.label, path },
          ]),
          serviceSchema({
            name: sector.h1,
            description: sector.problem,
            serviceType: `${sector.h1}`,
            path,
          }),
          faqSchema(faqs),
        ]}
      />

      {/* HERO. The problem leads, because a visitor from this sector is
          checking whether we recognise their situation before they care what
          we sell. */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-5">Sector</p>
        {/* The h1 comes from the sector rather than being built from one
            service. The first version read "[sector] software development and
            engineering" on all fourteen pages, which named one of six
            services and was wrong for most of them: manufacturing leads on
            automation, IoT on hardware and firmware, R&D on prototyping. */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
          {sector.h1}
        </h1>
        <p className="text-lg text-primary font-medium leading-relaxed mb-4">{sector.problem}</p>
        <p className="text-base text-gray-700 leading-relaxed mb-8">
          That problem is rarely solved by one more tool. It is solved by making the systems you
          already run agree with each other, deciding which numbers can be trusted, and putting the
          answer where someone acts on it. We do that work end to end, across software, data, AI and
          the hardware side where it reaches that far.
        </p>
        {/* A low commitment action in the hero. Not a call, which asks for the
            largest step on the site at the point of least trust, and not two
            buttons either: one action, and it goes to the part of the page
            that tells a visitor whether this is their problem. */}
        <a
          href="#signals"
          className="inline-flex items-center justify-center rounded-full border border-gray-300 px-7 py-3.5 text-sm font-medium text-primary hover:bg-muted transition-colors"
        >
          Is this your situation?
        </a>
      </section>

      {/* SIGNALS */}
      <section id="signals" className="scroll-mt-24 border-t border-border bg-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
            Signals you would recognise
          </h2>
          <ul className="space-y-4 list-none max-w-2xl">
            {(sector.signals || []).map((signal) => (
              <li key={signal} className="flex items-start gap-3 text-gray-700">
                <ArrowIcon className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span className="leading-relaxed">{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CAPABILITIES */}
      {capabilities.length > 0 && (
        <section className="border-t border-border">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              What the work usually draws on
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 list-none">
              {capabilities.map((capability) => (
                <li key={capability.id}>
                  <Link
                    to={capabilityPath(capability)}
                    className="group block border border-border rounded-2xl p-5 hover:border-gray-400 transition-colors h-full"
                  >
                    <span className="block font-semibold mb-1.5 leading-snug group-hover:underline underline-offset-4 decoration-gray-400">
                      {capability.label}
                    </span>
                    <span className="block text-sm text-gray-600 leading-relaxed">
                      {capability.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* RELATED WORK. Pattern match, labelled as such. */}
      {relatedCases.length > 0 && (
        <section className="border-t border-border bg-muted">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
              Published work on the same pattern
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl">
              Anonymized at our clients' request. These are engagements where the problem took the
              same shape, not a statement about which sector the client was in.
            </p>
            <ul className="space-y-4 list-none">
              {relatedCases.map((study) => (
                <li key={study.slug} className="border border-border rounded-2xl p-5 bg-white">
                  <h3 className="font-semibold mb-1.5 leading-snug">
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="hover:underline underline-offset-4 decoration-gray-400"
                    >
                      {study.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{study.teaser}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FURTHER READING.
          Articles that address this sector's specific problem. Each article
          declares which sectors it speaks to, so this list fills itself when
          a piece is added rather than needing a second edit here. Without it
          the sector pages ended on a call to action with nothing to read
          first, which is a lot to ask of a stranger. */}
      {sectorInsights.length > 0 && (
        <section className="border-t border-border">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Worth reading first
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 list-none">
              {sectorInsights.map((article) => (
                <li key={article.slug}>
                  <Link
                    to={insightPath(article)}
                    className="group block border border-border rounded-2xl p-5 hover:border-gray-400 transition-colors h-full"
                  >
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-gray-500 mb-2">
                      {article.readingTime}
                    </span>
                    <span className="block font-semibold mb-1.5 leading-snug group-hover:underline underline-offset-4 decoration-gray-400">
                      {article.h1}
                    </span>
                    <span className="block text-sm text-gray-600 leading-relaxed">
                      {article.summary.slice(0, 150)}…
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Questions we are asked
          </h2>
          <dl className="space-y-8">
            {faqs.map((item) => (
              <div key={item.question} className="border-b border-border pb-8 last:border-0 last:pb-0">
                <dt className="text-lg font-semibold mb-2.5 leading-snug">{item.question}</dt>
                <dd className="text-gray-700 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>

          <RelatedPath to="/products" label="Prism settles that first" location="sector_prism">
            All of this assumes the decision to build is already made. If it is not, and the
            commitment is large,
          </RelatedPath>
          <RelatedPath to="/what-it-costs" label="the published market figures" location="sector_cost">
            For what work of this kind costs before anyone quotes you, see
          </RelatedPath>
        </div>
      </section>

      {/* OTHER SECTORS */}
      <section className="border-t border-border bg-muted">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-gray-500 mb-5">
            Other sectors
          </h2>
          <ul className="flex flex-wrap gap-2 list-none mb-6">
            {others.map((other) => (
              <li key={other.id}>
                <Link
                  to={sectorPath(other)}
                  className="inline-flex rounded-full border border-gray-300 bg-white px-3.5 py-1.5 text-xs font-medium text-slate hover:border-gray-600 hover:text-black transition-colors"
                >
                  {other.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">{SECTOR_BREADTH_NOTE}</p>
        </div>
      </section>

      <CtaBand
        heading={`Working on something in ${sector.label.toLowerCase()}?`}
        body="Describe the situation and we will tell you what the work would involve, what it would cost, and whether it is worth doing at all. Book a call or send a few lines, whichever you prefer."
        location="sector_cta"
      />
    </>
  );
}
