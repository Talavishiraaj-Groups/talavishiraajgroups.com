// src/pages/AboutPageComplete.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowIcon from '../components/icons/ArrowIcon';

export const meta = {
  title: 'About Talavishiraaj Groups',
  description:
    'Talavishiraaj Groups is a research-led, systems-oriented organization with structured execution capability, workflow intelligence, and scalable infrastructure thinking.',
};

function Lead({ children }) {
  return <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-4">{children}</p>;
}

export default function AboutPage() {
  return (
    <div className="bg-white text-primary">
      {/* HERO / ORGANIZATIONAL IDENTITY */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">About Talavishiraaj Groups</p>
        <h1 className="text-4xl md:text-6xl font-semibold text-black leading-tight">
          Research-Led. <br />
          Systems-Oriented. <br />
          Implementation-Forward.
        </h1>
        <Lead>
          Talavishiraaj Groups is a systems-oriented organization. We prioritize research depth, 
          workflow intelligence, and execution capability to build infrastructure that scales. 
          Our approach combines strategic maturity with technology systems to deliver measurable 
          outcomes for enterprise-ready organizations.
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
            View Capabilities
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
              We believe that systems clarity and workflow visibility are prerequisites for sustainable 
              growth. Our organizational philosophy is anchored in three foundational principles:
            </Lead>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <span className="text-2xl font-light text-gray-300">01</span>
              <div>
                <h3 className="font-semibold text-black mb-1">Research Before Execution</h3>
                <p className="text-sm text-gray-600">We prioritize deep understanding of the systems landscape before initiating any implementation or prescription.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-2xl font-light text-gray-300">02</span>
              <div>
                <h3 className="font-semibold text-black mb-1">Diagnose Before Prescription</h3>
                <p className="text-sm text-gray-600">Every engagement begins with a structured assessment phase to surface real bottlenecks and systems gaps before any solution is prescribed.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-2xl font-light text-gray-300">03</span>
              <div>
                <h3 className="font-semibold text-black mb-1">Structure Before Scale</h3>
                <p className="text-sm text-gray-600">We build stable systems foundations that enable efficient, reliable, and defensible scalability.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* SYSTEMS & WORKFLOW POSITIONING */}
        <section className="py-16 md:py-24 space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Systems & Workflow Positioning</p>
            <h2 className="text-3xl font-semibold text-black">Workflow Intelligence. Execution Clarity.</h2>
            <p className="text-base text-gray-700">
              We operate at the intersection of strategic consulting, AI-assisted systems, and technology 
              infrastructure. Our goal is to provide organizational clarity and workflow visibility through 
              structured, intelligent systems — enabling confident execution at every stage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'Workflow Intelligence', desc: 'Identifying and resolving coordination gaps, execution friction, and workflow bottlenecks through structured analysis.' },
              { title: 'Systems Integration', desc: 'Creating cohesive technology environments that support seamless, delegable execution across the organization.' },
              { title: 'Systems Visibility', desc: 'Providing clear insight into organizational systems health, coordination gaps, and execution alignment.' },
              { title: 'AI-Enabled Systems', desc: 'Leveraging intelligent automation to augment organizational capacity and support structured scaling.' },
              { title: 'Scalable Infrastructure', desc: 'Building the foundational systems and business infrastructure required for sustainable, long-term growth.' },
              { title: 'Execution Alignment', desc: 'Ensuring that technology, workflow, and organizational strategy are aligned for implementation readiness.' },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-2xl p-6 bg-muted/30">
                <h3 className="font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* CORE LEADERSHIP */}
        <section className="py-16 md:py-24 space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Leadership</p>
            <h2 className="text-3xl font-semibold text-black">Core Leadership</h2>
            <p className="text-base text-gray-700">
              Our leadership brings together expertise in systems strategy, technology infrastructure, 
              and execution capability to support enterprise-grade organizational outcomes.
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
                  Directs organizational vision, strategic research, and systems architecture. 
                  Dhiraj ensures every engagement remains aligned with long-term execution goals 
                  and organizational maturity requirements.
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
                  Leads technology infrastructure, engineering standards, and systems scalability. 
                  Yatharth oversees the technical delivery of AI and automation infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* CAPABILITY CATEGORIES */}
        <section className="py-16 md:py-24 space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Organizational Capability</p>
            <h2 className="text-3xl font-semibold text-black">Research, Systems & Delivery</h2>
            <p className="text-base text-gray-700">
              Our multidisciplinary capability spans systems thinking, execution support, 
              technology expertise, and strategic research — structured to support enterprise-grade outcomes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { category: 'Systems & Infrastructure', desc: 'Technology systems design, scalable infrastructure, and implementation support.' },
              { category: 'AI & Automation', desc: 'Intelligent workflow automation, AI systems implementation, and capability augmentation.' },
              { category: 'Research & Strategy', desc: 'Strategic analysis, systems research, and structured organizational consulting.' },
              { category: 'Delivery & Execution', desc: 'End-to-end implementation coordination, delivery management, and execution alignment.' },
            ].map((cap, i) => (
              <div key={i} className="border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-black mb-3 text-sm">{cap.category}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* CALL TO ACTION */}
        <section className="py-24 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">Ready to Initiate Engagement?</h2>
          <Lead>
            To discuss a strategic partnership or systems evaluation, initiate a consultation request. 
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
