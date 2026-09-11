import React from 'react';
import { Link } from 'react-router-dom';
import Seo, { PRIMARY_MARKETS, breadcrumbSchema, personSchema, webPageSchema } from '../seo';
import { COMPANY_ANSWER, valueChain } from '../data/services';
import { capabilityPath, serviceCategories } from '../data/servicesData';
import { track } from '../components/analytics';

const TITLE = 'About Talavishiraaj Groups';
const DESCRIPTION =
  'Talavishiraaj Groups works across research, technology, AI, engineering, and product development. Learn how we work, what we build, and who leads our team.';

const leadership = [
  {
    name: 'Dhiraj T H',
    role: 'Founder and Strategy',
    image: '/dhiraj-th-founder.jpg',
    bio: 'Sets the organization’s research direction and technical positioning, and holds responsibility for the standard every engagement is delivered against.',
  },
  {
    name: 'Yatharth Chauhan',
    role: 'Chief Technology Officer',
    image: '/yatharth-chauhan-cto.jpg',
    bio: 'Leads technology architecture and engineering standards, and owns technical delivery across the software, AI and automation work.',
  },
];

const principles = [
  {
    title: 'Research comes first',
    body: 'We understand the reality of the problem before deciding what to build. This ensures our solutions actually work in the real world.',
  },
  {
    title: 'Evidence drives decisions',
    body: 'We present findings based on evidence, not assumptions. If the data is unclear, we will tell you, rather than making guesses.',
  },
  {
    title: 'We build what we recommend',
    body: 'We don’t separate strategy from execution. If we suggest a solution, we take full responsibility for building it.',
  },
];

const disciplines = [
  { title: 'Software and systems engineering', body: 'Applications, internal platforms, integrations, data infrastructure and the security around them.' },
  { title: 'Artificial intelligence', body: 'Machine learning, language and vision systems, decision support, and taking prototypes into dependable production.' },
  { title: 'Automation', body: 'Process automation across existing tools, with human judgement kept where it genuinely belongs.' },
  { title: 'Product engineering', body: 'Mechanical design, embedded firmware, hardware and software integration, prototyping and validation.' },
  { title: 'Research and development', body: 'Applied technical research, feasibility work and structured experimentation ahead of investment.' },
  { title: 'Commercial and growth systems', body: 'Demand generation, pipeline instrumentation, market entry and the operating structure underneath them.' },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title={`${TITLE} | Research, Technology and Engineering`}
        description={DESCRIPTION}
        path="/about"
        jsonLd={[
          webPageSchema({ path: '/about', title: TITLE, description: DESCRIPTION, type: 'AboutPage' }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
          ...leadership.map((person) =>
            personSchema({
              name: person.name,
              jobTitle: person.role,
              description: person.bio,
              image: person.image,
            }),
          ),
        ]}
      />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">About</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.06] mb-7 max-w-4xl">
          A multidisciplinary organization built around difficult problems
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">{COMPANY_ANSWER}</p>
      </section>

      {/* WHY THE ORGANISATION IS SHAPED THIS WAY */}
      <section className="border-y border-border bg-muted">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Why we work this way</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Problems do not respect professional boundaries
            </h2>
          </div>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              A coordination issue often hides a data problem. A data problem often hides an integration problem. Solving just one part usually just moves the friction somewhere else.
            </p>
            <p>
              Most of the industry separates these pieces. Consultants provide strategy and leave before the build starts. Developers build exactly what is asked for, even if it doesn't solve the core issue. Neither takes full responsibility for the final outcome.
            </p>
            <p>
              Talavishiraaj Groups is built to handle the entire lifecycle. We research the problem, design the solution, build the software, and see it through to deployment. This means we only recommend solutions we know we can actually build and deliver.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">How we think</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Three commitments</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {principles.map((principle, index) => (
            <div key={principle.title}>
              <span className="block text-xs font-mono text-gray-400 mb-3">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold mb-2.5 leading-snug">{principle.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{principle.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="border-y border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">
              What sits inside the organization
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              The disciplines we can put on a problem
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Different problems need different combinations of these. Very few need all of them, and
              the point is being able to bring the right ones together rather than offering every one
              of them separately.
            </p>
          </div>
          <div className="grid gap-px bg-border border border-border rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((discipline) => (
              <div key={discipline.title} className="bg-white p-6">
                <h3 className="font-semibold mb-2 leading-snug">{discipline.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{discipline.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-600">
            Our{' '}
            <Link
              to="/services"
              className="text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
            >
              capabilities page
            </Link>{' '}
            sets out how these are organised into engagements, and what each one produces.
          </p>
        </div>
      </section>

      {/* HOW WORK MOVES */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">How work moves</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Research through to a working result
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This is not a methodology we sell. It is the shape most of our engagements take, and most
            of them join partway along it.
          </p>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none">
          {valueChain.map((stage, index) => (
            <li key={stage.step} className="border border-border rounded-2xl p-5">
              <span className="block text-xs font-mono text-gray-400 mb-2">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-semibold mb-1.5">{stage.step}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{stage.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* DISTRIBUTED TEAMS */}
      <section className="border-y border-border bg-secondary text-accent">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">How we are organised</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Distributed teams, assembled around the problem
            </h2>
          </div>
          <div className="space-y-5 text-gray-200 leading-relaxed">
            <p>
              Our teams operate across multiple regions and time zones. We staff each project with the exact disciplines it requires (whether that is engineering, AI, product, or commercial strategy) rather than just assigning whoever happens to be in the local office.
            </p>
            <p>
              This allows us to bring the most relevant expertise to your problem, regardless of geography, and support organizations across international markets.
            </p>
            <div className="pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">
                Priority markets
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                We work internationally. These are the markets we focus on first.
              </p>
              <ul className="flex flex-wrap gap-2 list-none">
                {PRIMARY_MARKETS.map((market) => (
                  <li
                    key={market}
                    className="px-3.5 py-1.5 border border-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {market}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Core leadership</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 max-w-4xl">
          {leadership.map((person) => (
            <div key={person.name} className="flex items-start gap-6">
              <img
                src={person.image}
                alt={`Portrait of ${person.name}`}
                width="128"
                height="128"
                loading="lazy"
                decoding="async"
                className="w-32 h-32 rounded-2xl object-cover border border-border bg-muted flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div>
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-[0.16em] font-medium">
                  {person.role}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="border-y border-border bg-muted">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Governance</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              How engagements are governed
            </h2>
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Work runs under written contracts, confidentiality obligations and, where the engagement
              requires it, a data processing agreement. Delivery quality, escalation and recovery are
              handled through a published governance framework rather than case by case.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our{' '}
              <Link
                to="/risk-mitigation"
                className="text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
              >
                risk and mitigation framework
              </Link>
              ,{' '}
              <Link
                to="/data-handling"
                className="text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
              >
                confidentiality and data handling commitments
              </Link>{' '}
              and{' '}
              <Link
                to="/delivery-policy"
                className="text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
              >
                delivery policy
              </Link>{' '}
              are published in full rather than supplied on request.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Want to know whether we are the right fit?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            The fastest way to find out is to describe the problem. We will tell you how we would
            approach it, and whether it is work we should be doing.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              onClick={() => track('cta_click', { location: 'about_cta', target: 'contact' })}
              className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-8 py-4 text-sm font-medium hover:bg-graphite transition-colors"
            >
              Start a conversation
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-4 text-sm font-medium hover:bg-muted transition-colors"
            >
              Read our case studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
