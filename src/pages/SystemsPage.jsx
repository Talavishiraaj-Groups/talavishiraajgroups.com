import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowIcon from '../components/icons/ArrowIcon';

export default function SystemsPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const challenges = [
    'Fragmented systems and siloed workflow data',
    'Founder dependency and absence of delegable processes',
    'Workflow bottlenecks slowing delivery and coordination',
    'Scaling inefficiencies and rising coordination overhead',
    'Disconnected processes and execution misalignment',
    'Lack of systems visibility and infrastructure clarity'
  ];

  const inclusions = [
    { title: 'Stakeholder Interviews', desc: 'Focused sessions with key organizational stakeholders to surface context, constraints, and workflow realities.' },
    { title: 'Workflow Analysis', desc: 'In-depth review of current processes, coordination structures, and existing systems infrastructure.' },
    { title: 'Systems Visibility Mapping', desc: 'Structured visualization of current operational state and clarity gaps across the organization.' },
    { title: 'Systems Assessment', desc: 'Review of existing tools, infrastructure, and systems readiness for scale.' },
    { title: 'Strategic Recommendations', desc: 'Structured, actionable guidance for systems improvement and workflow optimization.' },
    { title: 'Roadmap Delivery', desc: 'A structured implementation blueprint providing clear next-step clarity.' }
  ];

  const steps = [
    { label: '01', title: 'Onboarding & Intake', desc: 'Structured intake process to establish baseline organizational context and engagement parameters.' },
    { label: '02', title: 'Stakeholder Engagement', desc: 'Focused sessions to surface workflow realities, systems gaps, and coordination challenges.' },
    { label: '03', title: 'Analysis & Assessment', desc: 'Structured evaluation of workflows, systems, and organizational alignment.' },
    { label: '04', title: 'Findings & Clarity Session', desc: 'Structured consultation to present findings, strategic observations, and systems roadmap.' },
    { label: '05', title: 'Final Delivery', desc: 'Packaged delivery of the full diagnostic report, supporting assets, and implementation materials.' }
  ];

  const futureSystemsPlaceholders = [
    { title: 'Prism Diagnostic' },
    { title: 'Workflow Intelligence Platform' },
    { title: 'AI Systems Infrastructure' },
    { title: 'Business Infrastructure Dashboard' },
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
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400 font-medium">Workflow Intelligence System</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Prism <span className="text-gray-400">Diagnostic</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              A structured workflow intelligence assessment designed to surface clarity, identify systems gaps, 
              and build the implementation roadmap required for confident, enterprise-grade scaling.
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
            <h2 className="text-3xl font-semibold text-black">Structured Workflow & Systems Intelligence.</h2>
            <p className="text-gray-700 leading-relaxed">
              The Prism Diagnostic is not generic consulting. It is a structured workflow intelligence engagement 
              that provides visibility into the systems health of your organization. We assess before we prescribe,
              ensuring that every recommendation is grounded in structured observation and organizational reality.
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Workflow & Systems Challenges We Address</h3>
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
              A comprehensive structured assessment covering stakeholders, workflows, systems, and strategic alignment.
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
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-semibold text-black">Engagement Structure</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">A structured, stage-based engagement designed for clarity and professional delivery.</p>
          </div>
          <div className="relative">
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
              provided as a structured, packaged delivery set.
            </p>
            <ul className="space-y-4">
              {[
                'Comprehensive PDF Report & Strategy Deck',
                'Recorded Clarity Session (secure video delivery)',
                'Visual Workflow & Systems Maps',
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
              <h3 className="text-xl font-semibold">Engagement Profile</h3>
              <p className="text-sm text-gray-400">
                Designed for organizations seeking 
                systems clarity, workflow visibility, and structured execution readiness.
              </p>
              <div className="pt-6 border-t border-gray-800 flex justify-between text-xs text-gray-500">
                <span>Timeline: 10–13 Business Days</span>
                <span>Payment: International Channels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE SYSTEMS */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Systems Architecture</p>
            <h2 className="text-3xl font-semibold text-black">The Systems Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Prism Diagnostic is the first structured system in our growing portfolio. 
              Additional workflow intelligence systems and infrastructure products are in development.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {futureSystemsPlaceholders.map((sys, i) => (
              <div key={i} className="border border-border rounded-2xl p-5 bg-muted/30 flex items-center">
                <h3 className="font-semibold text-black text-sm">{sys.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE REFERENCE */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-20 space-y-8">
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Policies & Assurance</p>
          <h2 className="text-3xl font-semibold text-black">Engagement Governance</h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Prism Diagnostic operates under a defined governance framework to ensure quality, security, and professional alignment.
          </p>
        </div>

        <div className="space-y-4">
          {/* Card 1: Refund Policy */}
          <div className="border border-border rounded-2xl overflow-hidden bg-muted/30 transition-all hover:bg-muted/50">
            <button
              onClick={() => toggleSection(0)}
              className="w-full flex items-center justify-between p-6 text-left font-semibold text-black focus:outline-none"
            >
              <span>Refund Policy (Prism Diagnostic)</span>
              <motion.svg
                animate={{ rotate: openSection === 0 ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
            <AnimatePresence initial={false}>
              {openSection === 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="p-6 pt-0 border-t border-border/55 text-sm text-gray-600 space-y-4 leading-relaxed">
                    <p>
                      Prism Diagnostic is a structured diagnostic engagement that involves upfront allocation of specialist time, research effort, and systems analysis.
                    </p>
                    <div>
                      <p className="font-semibold text-black mb-1">Before any work or data collection begins:</p>
                      <p>
                        If you request a refund before we collect any client information for the diagnostic and before onboarding or configuration has started, we may consider a refund of up to 80% of fees paid, reflecting initial scheduling and planning effort.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-1">After diagnostic work has started:</p>
                      <p>
                        Once onboarding, data collection, research, or assessment has started, any refund request is evaluated based on the engagement stage and work completed, using the same stage‑based structure set out in our main Refund Policy.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-1">After delivery of Prism outputs:</p>
                      <p>
                        After Prism Diagnostic outputs or reports have been delivered, fees are non‑refundable, as the value lies in the expertise, analysis, and deliverables already provided.
                      </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      For full details, please refer to our <Link to="/refund-policy" className="underline hover:text-black">Refund Policy</Link> in the site footer.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Card 2: Delivery Policy */}
          <div className="border border-border rounded-2xl overflow-hidden bg-muted/30 transition-all hover:bg-muted/50">
            <button
              onClick={() => toggleSection(1)}
              className="w-full flex items-center justify-between p-6 text-left font-semibold text-black focus:outline-none"
            >
              <span>Delivery & Timeline (Prism Diagnostic)</span>
              <motion.svg
                animate={{ rotate: openSection === 1 ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
            <AnimatePresence initial={false}>
              {openSection === 1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="p-6 pt-0 border-t border-border/55 text-sm text-gray-600 space-y-4 leading-relaxed">
                    <p>
                      Prism Diagnostic engagements are designed for structured, time‑bound delivery:
                    </p>
                    <ul className="space-y-3 list-none pl-0">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2"></span>
                        <div>
                          <strong className="text-black">Typical timeline: </strong>Prism Diagnostic is typically completed within 10–13 business days from confirmed intake and completion of the required client information forms.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2"></span>
                        <div>
                          <strong className="text-black">Client responsibilities: </strong>Timely sharing of relevant organisational information, stakeholder availability for sessions, and prompt feedback/approvals are essential to maintain the delivery timeline.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2"></span>
                        <div>
                          <strong className="text-black">Dependencies: </strong>Timelines may adjust based on client responsiveness, third‑party systems, and data dependencies. Such dependency‑driven shifts do not constitute delivery failure.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2"></span>
                        <div>
                          <strong className="text-black">Scope: </strong>Prism Diagnostic provides visibility, structured findings, and a roadmap; implementation of recommendations is handled under separate implementation engagements.
                        </div>
                      </li>
                    </ul>
                    <p className="text-xs text-gray-400 mt-2">
                      For a full description of our delivery standards across all engagements, see our <Link to="/delivery-policy" className="underline hover:text-black">Delivery Policy</Link> in the site footer.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Card 3: Governance & Data */}
          <div className="border border-border rounded-2xl overflow-hidden bg-muted/30 transition-all hover:bg-muted/50">
            <button
              onClick={() => toggleSection(2)}
              className="w-full flex items-center justify-between p-6 text-left font-semibold text-black focus:outline-none"
            >
              <span>Governance, Confidentiality & Data Protection</span>
              <motion.svg
                animate={{ rotate: openSection === 2 ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
            <AnimatePresence initial={false}>
              {openSection === 2 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="p-6 pt-0 border-t border-border/55 text-sm text-gray-600 space-y-4 leading-relaxed">
                    <p>
                      Prism Diagnostic operates within Talavishiraaj Groups’ governance and data‑handling framework:
                    </p>
                    <ul className="space-y-3 list-none pl-0">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2"></span>
                        <div>
                          <strong className="text-black">Contract & NDA: </strong>Prism Diagnostic engagements are covered by our standard contractual terms and confidentiality obligations, and may be supported by a separate NDA and/or Data Processing Agreement where required.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2"></span>
                        <div>
                          <strong className="text-black">Governance: </strong>Delivery quality, risk, and recovery actions are guided by our internal Risk & Mitigation Framework, which includes structured escalation and quality review procedures.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2"></span>
                        <div>
                          <strong className="text-black">Confidentiality: </strong>Client information and diagnostic outputs are treated as confidential and handled in line with our Confidentiality & Data Handling commitments.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2"></span>
                        <div>
                          <strong className="text-black">Data protection: </strong>Any personal data processed as part of Prism Diagnostic is handled according to our Privacy Policy, relevant DPAs, and applicable data protection laws, including the DPDP Act.
                        </div>
                      </li>
                    </ul>
                    <p className="text-xs text-gray-400 mt-2">
                      For complete details, please refer to our <Link to="/privacy-policy" className="underline hover:text-black">Privacy Policy</Link>, <Link to="/risk-mitigation" className="underline hover:text-black">Governance</Link>, <Link to="/refund-policy" className="underline hover:text-black">Refund Policy</Link>, <Link to="/delivery-policy" className="underline hover:text-black">Delivery Policy</Link>, and <Link to="/data-handling" className="underline hover:text-black">Confidentiality & Data Handling</Link> pages in the site footer.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
