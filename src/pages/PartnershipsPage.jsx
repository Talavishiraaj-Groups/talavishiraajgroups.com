import React from 'react';
import { Link } from 'react-router-dom';
import Seo, { breadcrumbSchema, webPageSchema } from '../seo';
import ArrowIcon from '../components/icons/ArrowIcon';
import { track } from '../components/analytics';

const TITLE = 'Partnerships and Collaboration | Talavishiraaj Groups';
const DESCRIPTION =
  'How Talavishiraaj Groups works with other organizations: technology partnerships, delivery and implementation collaboration, joint product development, research programmes and market expansion.';

const models = [
  {
    title: 'Technology partnerships',
    body: 'We work alongside platform, infrastructure and software organizations where their product and our engineering capability solve more together than either does alone. That usually means integration work, reference implementations, or engineering capacity attached to a partner deployment.',
    details: [
      'Integration and reference implementation engineering',
      'Technical enablement for partner led deployments',
      'Joint architecture and feasibility assessment',
    ],
  },
  {
    title: 'Delivery and implementation collaboration',
    body: 'Firms with strong client relationships often need engineering, AI or product capability they do not hold internally. We work behind or beside those firms with clear scope, defined ownership and a single point of technical accountability.',
    details: [
      'Engineering, AI and automation capacity attached to a partner engagement',
      'Defined scope, milestones and technical ownership agreed at the outset',
      'Confidentiality, data handling and intellectual property terms set before work begins',
    ],
  },
  {
    title: 'Joint product development',
    body: 'Where an organization has domain depth and we have the engineering and research capability to build against it, we take on co-development with shared governance rather than a vendor relationship.',
    details: [
      'Product engineering, hardware and software integration, and prototyping',
      'Milestone governance with shared accountability',
      'Commercial and intellectual property structure agreed before development starts',
    ],
  },
  {
    title: 'Research collaboration',
    body: 'We work selectively with institutions, enterprises and research groups on applied technical research: validating a concept, running a structured programme, or taking research output towards something that can be built.',
    details: [
      'Programme design and technical governance',
      'Technical assessment, prototyping and validation',
      'Structured routes from research output to working implementation',
    ],
  },
  {
    title: 'Market expansion and ecosystem work',
    body: 'For organizations entering a new market or building out a partner ecosystem, we contribute the operating, technical and commercial groundwork that expansion depends on.',
    details: [
      'Operating and delivery structure for a new market',
      'Partner and channel model design',
      'Technical and compliance readiness assessment',
    ],
  },
];

const principles = [
  'We engage selectively. Depth and accountability do not survive taking on everything that is offered.',
  'One senior point of contact, with direct access to the people doing the work.',
  'Scope, ownership and success measures are written down before anything starts.',
  'Confidentiality, data handling and intellectual property terms are agreed at the outset, not retrofitted.',
  'Commercial structure follows the shape of the collaboration rather than a fixed template.',
];

export default function PartnershipsPage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/partnerships"
        jsonLd={[
          webPageSchema({ path: '/partnerships', title: 'Partnerships', description: DESCRIPTION }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Partnerships', path: '/partnerships' },
          ]),
        ]}
      />

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">Partnerships</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.08] mb-6 max-w-4xl">
          We work well with organizations that build things
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
          Some of our strongest work happens alongside other organizations rather than directly for a
          client. Where our research, engineering and technical capability complements what a partner
          already does well, we structure the collaboration properly and commit to it.
        </p>
      </section>

      <section className="border-y border-border bg-muted">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
          <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
            We do not run a partner programme with tiers and badges. Each collaboration is assessed on
            whether there is genuine technical fit, whether both sides bring something the other needs,
            and whether the working relationship can be governed properly. Where that is not the case,
            we say so early.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">How we collaborate</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Five shapes a collaboration usually takes
          </h2>
        </div>

        <div className="space-y-12">
          {models.map((model, index) => (
            <article
              key={model.title}
              className={`grid gap-8 lg:grid-cols-[0.9fr_1.1fr] ${index > 0 ? 'border-t border-border pt-12' : ''}`}
            >
              <div>
                <span className="block text-xs font-mono text-gray-400 mb-3">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight mb-3 leading-snug">
                  {model.title}
                </h3>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">{model.body}</p>
                <ul className="space-y-3 list-none">
                  {model.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-gray-700">
                      <ArrowIcon className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary text-accent">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">How we work</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What you can expect from us
            </h2>
          </div>
          <ul className="space-y-4 list-none">
            {principles.map((principle) => (
              <li key={principle} className="flex items-start gap-3 text-gray-200">
                <ArrowIcon className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <span className="leading-relaxed">{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Before you get in touch
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              It helps to know what your organization does, where you see the overlap with our work,
              and what a first piece of collaboration might look like in practice. A specific proposal
              is easier to respond to than a general introduction.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our{' '}
              <Link
                to="/services"
                className="text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
              >
                capabilities
              </Link>{' '}
              set out what we can bring, and our{' '}
              <Link
                to="/case-studies"
                className="text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
              >
                case studies
              </Link>{' '}
              show the kind of work we take on.
            </p>
          </div>
          <div className="border border-border rounded-3xl p-8 bg-muted">
            <h2 className="text-xl font-semibold mb-3">Propose a collaboration</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Introduce your organization and the collaboration you have in mind. We review every
              proposal for technical and commercial fit before responding.
            </p>
            <Link
              to="/contact?intent=partnership"
              onClick={() => track('partnership_interest', { location: 'partnerships_cta' })}
              className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-8 py-3.5 text-sm font-medium hover:bg-graphite transition-colors"
            >
              Start a partnership conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
