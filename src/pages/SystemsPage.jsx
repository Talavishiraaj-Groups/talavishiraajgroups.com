import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowIcon from '../components/icons/ArrowIcon';

export default function SystemsPage() {
  const challenges = [
    'Fragmented operational systems and siloed data',
    'Founder dependency and lack of delegable processes',
    'Workflow bottlenecks slowing down delivery',
    'Scaling inefficiencies and rising operational costs',
    'Disconnected operational processes and communication gaps'
  ];

  const inclusions = [
    { title: 'Stakeholder Interviews', desc: '3–4 focused sessions with key operational stakeholders.' },
    { title: 'Workflow Analysis', desc: 'Deep dive into current processes and technical stack.' },
    { title: 'Operational Visibility Mapping', desc: 'Visual mapping of current vs. target operational states.' },
    { title: 'Systems Assessment', desc: 'Audit of existing tools, AI readiness, and infrastructure.' },
    { title: 'Strategic Recommendations', desc: 'Actionable steps for optimization and automation.' },
    { title: 'Roadmap Delivery', desc: 'A structured implementation blueprint for scaling.' }
  ];

  const steps = [
    { label: '01', title: 'Onboarding & Intake', desc: 'Structured intake form to collect baseline operational data and pain points.' },
    { label: '02', title: 'Stakeholder Interviews', desc: 'Contextual interviews to identify hidden bottlenecks and system friction.' },
    { label: '03', title: 'Analysis & Synthesis', desc: 'Research-led diagnostic of workflows, systems, and execution alignment.' },
    { label: '04', title: 'Diagnostic Readout', desc: 'Recorded consultation session to present findings and strategic roadmap.' },
    { label: '05', title: 'Final Delivery', desc: 'Packaged delivery of report, recordings, and implementation assets.' }
  ];

  return (
    <div className="bg-white text-primary">
      {/* HERO SECTION */}
      <section className="bg-secondary text-accent overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400 font-medium">Productized Operational Intelligence</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Prism <span className="text-gray-400">Diagnostic</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              A structured operational assessment designed to provide clarity, identify bottlenecks, 
              and build the implementation roadmap required for enterprise-grade scaling.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-accent text-primary px-8 py-4 rounded-full text-sm font-semibold hover:bg-muted transition-all"
              >
                Initiate Diagnostic
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
            <path d="M0 0 L100 100 L100 0 Z" />
          </svg>
        </div>
      </section>

      {/* CORE POSITIONING */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-black">Structured Operational Intelligence.</h2>
            <p className="text-gray-700 leading-relaxed">
              The Prism Diagnostic is not generic consulting. It is a research-led operational engagement 
              that provides visibility into the structural health of your organization. We diagnose 
              before we prescribe, ensuring that every recommendation is anchored in measurable reality.
            </p>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Target Regions</p>
              <div className="flex flex-wrap gap-2">
                {['United States', 'United Kingdom', 'UAE / GCC', 'Europe', 'India'].map(r => (
                  <span key={r} className="px-3 py-1 bg-muted border border-border rounded-full text-xs text-gray-600">{r}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-muted/50 rounded-3xl p-8 border border-border">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Operational Challenges We Solve</h3>
            <ul className="space-y-4">
              {challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowIcon className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT IT INCLUDES */}
      <section className="bg-muted py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-semibold text-black">What The Diagnostic Includes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              A comprehensive assessment covering stakeholders, workflows, systems, and strategic alignment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((item, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl p-6 hover:shadow-sm transition-shadow">
                <h3 className="font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT STRUCTURE */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="space-y-12">
          <h2 className="text-3xl font-semibold text-black text-center">Engagement Structure</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 space-y-2 text-left md:text-right">
                    {i % 2 === 0 ? (
                      <div className="md:text-left">
                        <h3 className="font-semibold text-black">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    ) : (
                      <div className="md:text-right">
                        <h3 className="font-semibold text-black">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    )}
                  </div>
                  <div className="z-10 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {step.label}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-secondary text-accent py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Enterprise-Ready Deliverables</h2>
            <p className="text-gray-400">
              The engagement is typically completed within 10–13 business days. Final delivery is 
              provided via a structured ZIP delivery package.
            </p>
            <ul className="space-y-4">
              {[
                'Comprehensive PDF Report & Strategy Deck',
                'Recorded Readout Session (Google Meet)',
                'Visual Workflow & Operational Maps',
                'Actionable Implementation Roadmap',
                'Supporting Documentation & Assets'
              ].map((d, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span className="text-sm font-medium">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-gray-800 rounded-3xl p-10 bg-graphite">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Diagnostic ICP</h3>
              <p className="text-sm text-gray-400">
                Optimized for startups and SMEs with <strong>10–50 employees</strong> seeking 
                operational structure and execution clarity.
              </p>
              <div className="pt-6 border-t border-gray-800 flex justify-between text-xs text-gray-500">
                <span>Timeline: 10–13 Days</span>
                <span>Payment: Skydo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE REFERENCE */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-20 text-center space-y-6">
        <h2 className="text-2xl font-semibold text-black">Operational Governance</h2>
        <p className="text-sm text-gray-600">
          All diagnostic engagements are covered by our stage-based refund policy and data handling protocols. 
          Consultation sessions are non-refundable once scheduled but may be rescheduled with prior notice.
        </p>
        <div className="flex justify-center gap-6 pt-4">
          <Link to="/refund-policy" className="text-xs font-semibold text-black border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">Refund Policy</Link>
          <Link to="/delivery-policy" className="text-xs font-semibold text-black border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">Delivery Policy</Link>
        </div>
      </section>
    </div>
  );
}
