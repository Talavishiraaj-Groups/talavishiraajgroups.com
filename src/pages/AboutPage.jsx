// src/pages/AboutPageComplete.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowIcon from '../components/icons/ArrowIcon';

// SEO meta
export const meta = {
  title: 'About Talavishiraaj Groups',
  description:
    'Talavishiraaj Groups builds internal platforms, automation, and R & D prototypes that deliver measurable outcomes through practical engineering.',
};

function Lead({ children }) {
  return <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-4">{children}</p>;
}

function Small({ children }) {
  return <p className="text-xs text-gray-600 max-w-xl">{children}</p>;
}

function Bullet({ children }) {
  return (
    <li className="flex items-start">
      <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-black flex-shrink-0" />
      <span className="text-base text-gray-700">{children}</span>
    </li>
  );
}

export default function AboutPageComplete() {
  return (
    <div className="bg-white text-primary">
      {/* HERO / WHO YOU ARE */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">About</p>

        <h1 className="text-4xl md:text-5xl font-bold text-black">Talavishiraaj Groups</h1>

        <Lead>
          Talavishiraaj Groups is an engineering and innovation organisation that designs, prototypes,
          and hardens internal platforms, automation, and product grade solutions. We prioritise practical
          outcomes, production readiness, and operational reliability.
        </Lead>

        <div className="flex gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            Contact
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition"
          >
            View services
          </Link>

          <Link
            to="/community"
            className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition"
          >
            Join community
          </Link>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8">

        <hr className="border-border my-8" />

        {/* 2. WHAT YOU DO */}
        <section className="py-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">What we do</h2>

          <Lead>
            We convert validated ideas into reliable systems. Our work blends strategy, software and hardware
            engineering, and focused R and D to build internal platforms that reduce manual effort, improve
            decision quality, and scale operations.
          </Lead>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-black mb-2">The problem we solve</h3>
              <p className="text-sm text-gray-700">
                We address operational complexity where manual work, fragile processes, or unclear signals
                create high cost or risk. We build systems that are measurable and maintainable.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-black mb-2">Who we help</h3>
              <p className="text-sm text-gray-700">
                Founders, product and engineering teams, and organisations seeking to automate workflows,
                improve decision intelligence, or prototype hardware software solutions.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border my-8" />

        {/* 3. YOUR STORY */}
        <section className="py-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">Our story</h2>

          <Lead>
            We started from a desire to make engineering and research deliver practical value. Early work
            focused on internal prototypes to test feasibility. Over time we refined processes that moved
            prototypes toward production readiness while keeping risk low.
          </Lead>

          <ul className="space-y-3">
            <Bullet>How we started - a small team focused on solving hard operational problems.</Bullet>
            <Bullet>Why we started - to bridge the gap between research and reliable operations.</Bullet>
            <Bullet>Milestones - validated prototypes and repeatable processes that shorten time to production.</Bullet>
          </ul>
        </section>

        <hr className="border-border my-8" />

        {/* 4. MISSION & VALUES */}
        <section className="py-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">Mission & values</h2>

          <Lead>
            Our mission is to remove barriers to innovation by turning validated ideas into dependable systems.
            We prioritise results, clarity, and lasting value.
          </Lead>

          <ul className="space-y-3">
            <Bullet>Quality - durable and maintainable engineering outputs.</Bullet>
            <Bullet>Innovation - practical research that leads to usable products and systems.</Bullet>
            <Bullet>Trust - privacy and security are built in by design.</Bullet>
          </ul>
        </section>

        <hr className="border-border my-8" />

        {/* 5. WHY CHOOSE YOU */}
        <section className="py-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">Why choose Talavishiraaj Groups</h2>

          <Lead>
            We combine strategy, research, and engineering into one execution model so organisations can move
            from idea to production with lower risk and clearer outcomes.
          </Lead>

          <ul className="space-y-3">
            <Bullet>End to end delivery from scoping to production engineering.</Bullet>
            <Bullet>Outcome oriented we define and measure success up front.</Bullet>
            <Bullet>Repeatable prototyping that reduces technical and business risk.</Bullet>
            <Bullet>Practical AI and automation expertise to make systems operate reliably.</Bullet>
          </ul>
        </section>

        <hr className="border-border my-8" />

        {/* 6. GOVERNANCE (connects to enterprise concerns) */}
        <section className="py-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">Governance</h2>

          <Lead>
            We design projects with privacy and security in mind. Every engagement includes a basic risk
            assessment and clear data ownership guidance. For enterprise partnerships we support compliance
            checks and documented controls.
          </Lead>

          <Small>
            We recommend early alignment on data ownership, compliance, and maintenance responsibilities to
            ensure a smooth transition from prototype to production.
          </Small>
        </section>

        <hr className="border-border my-8" />

        {/* 7. CALL TO ACTION */}
        <section className="py-8 mb-20">
          <h2 className="text-2xl font-semibold text-black mb-4">Next steps</h2>

          <Lead>
            To discuss a pilot, partnership, or technical evaluation, share a short brief and we will respond
            with clear next steps and a proposed engagement plan.
          </Lead>

          <div className="flex gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              Contact us
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition"
            >
              View services
            </Link>

            <Link
              to="/community"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition"
            >
              Join community
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
