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

export default function AboutPage() {
  return (
    <div className="bg-white text-primary">
      {/* HERO / ORGANIZATIONAL IDENTITY */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Organizational Identity</p>
        <h1 className="text-4xl md:text-6xl font-semibold text-black leading-tight">
          Research-Led. <br />
          Implementation-Forward.
        </h1>
        <Lead>
          Talavishiraaj Groups is an operational systems organization. We prioritize research depth, 
          operational intelligence, and execution capability to build infrastructure that scales. 
          Our approach combines strategic maturity with technology systems to deliver measurable 
          operational outcomes.
        </Lead>

        <div className="flex gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            Initiate Engagement
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3 text-sm font-medium hover:bg-muted transition"
          >
            Operational Capabilities
          </Link>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <hr className="border-border" />

        {/* MISSION & PHILOSOPHY */}
        <section className="py-16 md:py-24 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Philosophy</p>
            <h2 className="text-3xl font-semibold text-black">Structure Before Scale.</h2>
            <Lead>
              We believe that operational maturity is a prerequisite for sustainable growth. 
              Our methodology is anchored in three core principles:
            </Lead>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <span className="text-2xl font-light text-gray-300">01</span>
              <div>
                <h3 className="font-semibold text-black mb-1">Research Before Execution</h3>
                <p className="text-sm text-gray-600">We prioritize deep understanding of the operational landscape before initiating implementation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-2xl font-light text-gray-300">02</span>
              <div>
                <h3 className="font-semibold text-black mb-1">Diagnose Before Prescription</h3>
                <p className="text-sm text-gray-600">Every solution begins with a rigorous diagnostic phase to identify real bottlenecks.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-2xl font-light text-gray-300">03</span>
              <div>
                <h3 className="font-semibold text-black mb-1">Structure Before Scale</h3>
                <p className="text-sm text-gray-600">We build stable operational foundations that allow for efficient and reliable scalability.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* OPERATIONAL POSITIONING */}
        <section className="py-16 md:py-24 space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Operational Mindset</p>
            <h2 className="text-3xl font-semibold text-black">Execution-Driven Intelligence.</h2>
            <p className="text-base text-gray-700">
              We operate at the intersection of business strategy, AI-assisted automation, and technology 
              infrastructure. Our goal is to provide organizational clarity and workflow visibility through 
              structured systems.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'Workflow Optimization', desc: 'Eliminating inefficiencies through structured analysis and automation.' },
              { title: 'Systems Integration', desc: 'Creating cohesive technology environments that support seamless execution.' },
              { title: 'Operational Visibility', desc: 'Providing clear insights into organizational performance and bottlenecks.' },
              { title: 'AI-Enabled Systems', desc: 'Leveraging intelligent automation to augment operational capacity.' },
              { title: 'Scalable Infrastructure', desc: 'Building the foundational systems required for long-term growth.' },
              { title: 'Execution Alignment', desc: 'Ensuring that technology and operations are aligned with strategic goals.' },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-2xl p-6 bg-muted/30">
                <h3 className="font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* LEADERSHIP & OPERATIONAL TEAM */}
        <section className="py-16 md:py-24 space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Leadership</p>
            <h2 className="text-3xl font-semibold text-black">Leadership & Operational Team</h2>
            <p className="text-base text-gray-700">
              Our multidisciplinary team brings together expertise in operations, technology systems, 
              and strategic research to support enterprise-grade execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <div className="flex items-start gap-8">
              <img
                src="/hero-bg.jpg"
                alt="Dhiraj T H"
                className="w-32 h-32 rounded-2xl object-cover border border-border bg-muted grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div>
                <h3 className="text-xl font-semibold text-black">Dhiraj T H</h3>
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-medium">Founder & Strategy</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Directs organizational vision, strategic research, and solution architecture. 
                  Dhiraj ensures every engagement remains aligned with long-term execution goals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <img
                src="/CTO.jpeg"
                alt="Yatharth Chauhan"
                className="w-32 h-32 rounded-2xl object-cover border border-border bg-muted grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div>
                <h3 className="text-xl font-semibold text-black">Yatharth Chauhan</h3>
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-medium">CTO & Systems Architecture</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Leads technology infrastructure, engineering standards, and system scalability. 
                  Yatharth oversees the technical delivery of AI and automation systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* CALL TO ACTION */}
        <section className="py-24 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">Ready to Initiate Engagement?</h2>
          <Lead>
            To discuss a strategic partnership or technical evaluation, initiate a consultation request. 
            We respond with clear next steps and a structured engagement plan.
          </Lead>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-black text-white px-10 py-4 text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/systems"
              className="inline-flex items-center justify-center rounded-full border border-border px-10 py-4 text-sm font-medium hover:bg-muted transition"
            >
              Explore Systems
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
