/** Shared copy blocks used by the homepage and the about page. */

/** The direct answer to "what does Talavishiraaj Groups do?". */
export const COMPANY_ANSWER =
  'Talavishiraaj Groups brings research, technology, AI, and engineering together to solve complex problems and build practical systems. We operate across software, automation, product development, and business strategy. Our distributed teams mean we bring the exact expertise your problem needs, regardless of geography.';

/** Short form used where space is tight. */
export const COMPANY_SUMMARY =
  'We combine research, engineering, and technology to solve problems that cross traditional boundaries.';

export const problemsWeSolve = [
  {
    title: 'Software that needs to be designed and built',
    body: 'Internal platforms, customer facing applications, integrations between systems that do not currently talk to each other, and the data layer underneath all of it.',
    link: '/services/technology-and-engineering',
    linkLabel: 'Technology and engineering',
  },
  {
    title: 'AI that has to work in production',
    body: 'Moving from an interesting prototype to something a team can depend on, or working out where machine learning, language models and automation genuinely pay.',
    link: '/services/artificial-intelligence-and-automation',
    linkLabel: 'Artificial intelligence and automation',
  },
  {
    title: 'A product or technical concept that needs proving',
    body: 'Engineering, prototyping and validation for hardware, embedded systems and software products, before anyone commits to building at scale.',
    link: '/services/product-engineering-and-rd',
    linkLabel: 'Product engineering and R&D',
  },
  {
    title: 'An organization that has outgrown how it runs',
    body: 'Work routing through too few people, systems that fragment information, and no shared view of where effort is actually going.',
    link: '/services/business-and-operating-systems',
    linkLabel: 'Business and operating systems',
  },
  {
    title: 'Revenue that works but does not repeat',
    body: 'Building the systems behind demand generation, qualification, pipeline reporting and entry into a new market.',
    link: '/services/growth-and-market-enablement',
    linkLabel: 'Growth and market enablement',
  },
  {
    title: 'A plan that is right and is not moving',
    body: 'Execution capacity, coordination across workstreams and vendors, and one point of accountability through to the result.',
    link: '/services/implementation-and-delivery',
    linkLabel: 'Implementation and delivery',
  },
];

/**
 * How work moves through the organization. Described plainly rather than
 * presented as a named proprietary framework.
 */
export const valueChain = [
  {
    step: 'Research',
    body: 'Understand the market, the technology and the operating reality before forming a view.',
  },
  {
    step: 'Analysis',
    body: 'Work out what is really happening and what would make the largest difference.',
  },
  {
    step: 'Design',
    body: 'Design the system, product or architecture that answers it.',
  },
  {
    step: 'Engineering',
    body: 'Build it properly: software, data, AI, automation, hardware.',
  },
  {
    step: 'Implementation',
    body: 'Put it into the business, with rollout, training and handover.',
  },
  {
    step: 'Improvement',
    body: 'Instrument it, watch it under real load, and correct what the load reveals.',
  },
];

export const clientProfiles = [
  {
    label: 'Founders and business leaders',
    description:
      'Organizations that have grown past informal working and now need systems, technology and structure they can rely on.',
  },
  {
    label: 'Technology and engineering teams',
    description:
      'Teams that need additional engineering capability, an AI capability taken into production, or a second workstream run alongside their own.',
  },
  {
    label: 'Product teams',
    description:
      'Groups building software or hardware products that need design, engineering and validation support through to a working result.',
  },
  {
    label: 'Research and innovation programmes',
    description:
      'Initiatives that need applied technical research, prototyping and the engineering to turn findings into something testable.',
  },
  {
    label: 'Established enterprises',
    description:
      'Organizations modernizing systems and infrastructure where continuity matters as much as change.',
  },
  {
    label: 'Strategic partners',
    description:
      'Firms and institutions that want technical capability alongside their own, under a properly governed collaboration.',
  },
];

export const differentiators = [
  {
    title: 'Research sits in front of engineering',
    body: 'We establish what is true before we decide what to build. It means the work we propose is sometimes not the work we were asked for, and it is why what we build tends to hold.',
  },
  {
    title: 'We build what we recommend',
    body: 'Analysis and delivery are the same relationship. That removes the handoff where most initiatives lose momentum, and it stops us recommending anything we could not deliver ourselves.',
  },
  {
    title: 'Several disciplines, one team',
    body: 'Engineering, artificial intelligence, product, research and commercial capability work together on the same problem instead of being sequenced through separate suppliers.',
  },
  {
    title: 'We are vendor neutral',
    body: 'No reseller relationships shape what we recommend. If the right answer is to keep the systems you already have, that is what we will tell you.',
  },
  {
    title: 'The capability ends up yours',
    body: 'Documentation, training and transition planning are part of the work. The measure of a good engagement is that you can run the result without us.',
  },
];

/** Distinct entry points, used to route enquiries by intent. */
export const engagementPaths = [
  {
    id: 'technology',
    label: 'Technology and software',
    description: 'You know what needs building and you need a team that can build and run it.',
    to: '/services/technology-and-engineering',
    linkLabel: 'Technology and engineering',
  },
  {
    id: 'ai',
    label: 'Artificial intelligence and automation',
    description: 'You want AI applied to real work, or a prototype made dependable.',
    to: '/services/artificial-intelligence-and-automation',
    linkLabel: 'AI and automation',
  },
  {
    id: 'product',
    label: 'Product engineering and R&D',
    description: 'You need a technical concept designed, prototyped and validated.',
    to: '/services/product-engineering-and-rd',
    linkLabel: 'Product and R&D',
  },
  {
    id: 'business',
    label: 'A business or systems problem',
    description: 'Something is not working and you want to think it through before fixing scope.',
    to: '/services/business-and-operating-systems',
    linkLabel: 'Business and operating systems',
  },
  {
    id: 'partnership',
    label: 'A partnership or collaboration',
    description: 'You are exploring technology, delivery or research collaboration.',
    to: '/partnerships',
    linkLabel: 'How we collaborate',
  },
];
