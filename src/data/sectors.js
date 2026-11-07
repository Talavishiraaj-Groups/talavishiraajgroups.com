/**
 * Sectors.
 *
 * Two things this file has to do at once, and the second is what shapes it.
 *
 * It has to be useful. A visitor from a particular industry wants to know
 * whether the problem they have is one we recognise, in their words rather
 * than in generic ones. That is why each entry leads with the shape the
 * problem takes in that sector rather than with a claim about us.
 *
 * And it has to stay honest, which here means being precise about which claim
 * is being made. The owner has confirmed the firm has delivered work in these
 * sectors and holds the data; what it has not done is publish any of it,
 * because clients did not agree to be named. So there are three distinct
 * statements and the site is entitled to exactly two of them:
 *
 *   "We have worked in this sector."            true, and now stated
 *   "This problem takes this shape here."       true, and useful
 *   "We did X for named client Y, result Z."    not available, not implied
 *
 * That is the same position the case study disclosure already takes, and it
 * is why each entry below leads with the shape of the problem rather than
 * with an outcome. A sector line should never acquire a number or a logo
 * unless a client has agreed to it in writing.
 *
 * On the per case study sector tags: those say where a pattern recurs, which
 * is a claim about the problem rather than about who paid for that particular
 * engagement. The UI heading says so in words, because a bare row of industry
 * names under a case study reads as a client list.
 */

/**
 * targetPhrase and phraseStatus.
 *
 * The first version of the sector pages put every single one on
 * "[sector] software development company". That was wrong and the owner
 * caught it: the firm sells six services, not one, and the service a sector
 * actually searches for differs by sector.
 *
 * Autocomplete evidence for the mismatch. "healthcare digital transformation"
 * returns consulting services, companies and solutions, all commercial.
 * "healthcare ai" returns jobs, courses and remote roles, all career. The same
 * sector pairs well with one service and badly with another, so one blanket
 * pattern across fourteen pages leaves most of them on the wrong phrase.
 *
 * phraseStatus says how much to trust each one:
 *
 *   'verified'  volume and difficulty checked in Ahrefs. Three of these:
 *               logistics, healthcare and fintech software development
 *               company all came back Easy at over a thousand searches.
 *   'inferred'  chosen from autocomplete shape and the service mapping, with
 *               no volume behind it yet. **Check before relying on it.** The
 *               manufacturing one is the clearest candidate for being wrong:
 *               manufacturing software development measured weak at >100,
 *               which is why it is pointed at automation instead, but that
 *               substitution is a judgement rather than a measurement.
 *
 * Changing a target is a one line edit here. Nothing in the page component
 * hardcodes a service.
 */
export const sectors = [
  {
    id: 'logistics',
    h1: 'Software, data and automation for supply chain and logistics',
    targetPhrase: 'Logistics Software Development Company',
    phraseStatus: 'verified',
    keyword: 'Logistics',
    capabilities: ['tech','ai','strategy'],
    signals: [
      'Movements tracked in a TMS, a spreadsheet and somebody’s inbox, reconciled by hand each morning',
      'Exceptions found by a customer calling before the system flags them',
      'Carrier and warehouse data arriving in formats nobody owns the mapping for',
    ],
    label: 'Supply chain and logistics',
    problem:
      'Movements tracked in three systems that disagree, and a planner reconciling them by hand before anyone can act.',
  },
  {
    id: 'manufacturing',
    h1: 'Automation, systems and data engineering for manufacturing',
    targetPhrase: 'Manufacturing Automation Company',
    phraseStatus: 'inferred',
    keyword: 'Manufacturing',
    capabilities: ['tech','ai','rd'],
    signals: [
      'Line data that exists on the floor and never reaches the people scheduling the next run',
      'Quality issues traced back days later, by which point the batch has shipped',
      'Maintenance history in one system and sensor telemetry in another',
    ],
    label: 'Manufacturing',
    problem:
      'Line and quality data that exists but never reaches the people deciding what to run next, or arrives a shift too late.',
  },
  {
    id: 'healthcare',
    h1: 'Software, integration and data engineering for healthcare',
    targetPhrase: 'Healthcare Software Development Company',
    phraseStatus: 'verified',
    keyword: 'Healthcare',
    capabilities: ['tech','strategy','delivery'],
    signals: [
      'Clinical and administrative systems bought separately, with integration treated as an afterthought',
      'Reporting assembled by hand for people who need it daily',
      'A rollout stalled because nobody owns the decision when the output is wrong',
    ],
    label: 'Healthcare',
    problem:
      'Clinical and administrative systems that were bought separately, where the integration work is the project and the interface is the easy part.',
  },
  {
    id: 'finance',
    h1: 'Software, AI and decision systems for financial services',
    targetPhrase: 'Fintech Software Development Company',
    phraseStatus: 'verified',
    keyword: 'Financial Services',
    capabilities: ['ai','strategy','tech'],
    signals: [
      'Assessment decisions concentrated in a few experienced people who cannot be cloned',
      'A model that performs well and cannot be explained to a reviewer',
      'Controls documented in one place and enforced in another',
    ],
    label: 'Financial services',
    problem:
      'Decisions made by a handful of experienced people, under review requirements that make an unexplainable model useless however accurate it is.',
  },
  {
    id: 'iot',
    h1: 'Hardware, firmware and cloud for connected devices',
    targetPhrase: 'IoT Product Development Company',
    phraseStatus: 'inferred',
    keyword: 'IoT',
    capabilities: ['rd','tech','ai'],
    signals: [
      'Firmware, gateway and cloud built by teams on different schedules',
      'Integration failures visible months before anyone has time to act',
      'Devices in the field reporting unevenly, with no trusted baseline',
    ],
    label: 'IoT and connected devices',
    problem:
      'Firmware, gateway and cloud built by teams that are not talking to each other, with the integration failures visible months before anyone acts.',
  },
  {
    id: 'saas',
    h1: 'Product engineering and operating systems for SaaS',
    targetPhrase: 'SaaS Product Engineering Company',
    phraseStatus: 'inferred',
    keyword: 'SaaS',
    capabilities: ['tech','growth','strategy'],
    signals: [
      'A product that works and an operation around it held together by people',
      'Onboarding, support and reporting each depending on someone remembering',
      'Usage data that cannot answer which accounts are at risk',
    ],
    label: 'SaaS',
    problem:
      'A product that works and an operation around it that does not, where onboarding, support and reporting are still held together by people.',
  },
  {
    id: 'agritech',
    h1: 'Sensing, data and software for agritech',
    targetPhrase: 'Agritech Software Development Company',
    phraseStatus: 'inferred',
    keyword: 'Agritech',
    capabilities: ['rd','ai','tech'],
    signals: [
      'Sensor and field data collected faithfully and acted on rarely',
      'Models built against a season that will not repeat exactly',
      'Connectivity assumptions that hold in the office and not in the field',
    ],
    label: 'Agritech',
    problem:
      'Sensor and field data collected faithfully and used for very little, because nobody has defined the decision it should change.',
  },
  {
    id: 'ecommerce',
    h1: 'Platform, data and automation for ecommerce',
    targetPhrase: 'Ecommerce Development Company',
    phraseStatus: 'inferred',
    keyword: 'Ecommerce',
    capabilities: ['tech','growth','ai'],
    signals: [
      'Catalogue, stock and fulfilment each holding a different version of the truth',
      'Customers discovering the discrepancy before the business does',
      'Marketing spend attributed by guesswork',
    ],
    label: 'Ecommerce',
    problem:
      'Catalogue, stock and fulfilment that each hold a different version of the truth, which customers discover before the business does.',
  },
  {
    id: 'agetech',
    h1: 'Devices, monitoring and software for agetech and care',
    targetPhrase: 'Agetech Product Development Company',
    phraseStatus: 'inferred',
    keyword: 'Agetech',
    capabilities: ['rd','ai','tech'],
    signals: [
      'Monitoring that generates more alerts than anyone can triage',
      'False alarms costing trust rather than money',
      'Devices used by people who will not troubleshoot them',
    ],
    label: 'Agetech and care',
    problem:
      'Monitoring that generates alerts nobody can triage, where the cost of a false alarm is measured in trust rather than money.',
  },
  {
    id: 'rnd',
    h1: 'Prototyping, validation and applied research',
    targetPhrase: 'R&D Engineering Services Company',
    phraseStatus: 'inferred',
    keyword: 'R&D',
    capabilities: ['rd','tech','strategy'],
    signals: [
      'An investment decision waiting on a technical answer nobody has produced',
      'Internal capacity fully committed to the roadmap',
      'A prototype that impresses and does not answer the question asked',
    ],
    label: 'Research and development',
    problem:
      'An investment decision waiting on a technical answer that does not exist yet, with internal capacity already committed to the roadmap.',
  },
  {
    id: 'biotech',
    h1: 'Research software and production systems for life sciences',
    targetPhrase: 'Biotech Software Development Company',
    phraseStatus: 'inferred',
    keyword: 'Biotech',
    capabilities: ['rd','ai','tech'],
    signals: [
      'Research code that runs in a notebook and nowhere else',
      'Analysis that cannot be reproduced by the next person',
      'Instrument and LIMS data that never meet',
    ],
    label: 'Biotechnology and life sciences',
    problem:
      'Research code that works in a notebook, in the hands of the person who wrote it, and cannot yet be relied on by anyone else.',
  },
  {
    id: 'ev',
    h1: 'Telemetry, software and systems for EV and charging networks',
    targetPhrase: 'EV Charging Software Development Company',
    phraseStatus: 'inferred',
    keyword: 'EV Charging',
    capabilities: ['tech','ai','rd'],
    signals: [
      'Hardware in the field where uptime is the product',
      'Faults reported by users before telemetry surfaces them',
      'Charging, billing and support systems that disagree',
    ],
    label: 'Electric vehicles and charging',
    problem:
      'A network of hardware in the field, reporting unevenly, where uptime is the product and visibility arrives after the complaint.',
  },
  {
    id: 'water',
    h1: 'Telemetry, detection and reporting for water and utilities',
    targetPhrase: 'Water Utility Software Development Company',
    phraseStatus: 'inferred',
    keyword: 'Water Utilities',
    capabilities: ['tech','ai','rd'],
    signals: [
      'Long lived assets with telemetry retrofitted later',
      'Detection running against a baseline nobody has validated',
      'Compliance evidence assembled by hand at reporting time',
    ],
    label: 'Water and utilities',
    problem:
      'Long lived assets with telemetry added later, where detection has to work against a baseline nobody has validated.',
  },
  {
    id: 'chemical',
    h1: 'Process data, compliance and systems for chemical industries',
    targetPhrase: 'Chemical Process Software Development Company',
    phraseStatus: 'inferred',
    keyword: 'Chemical',
    capabilities: ['tech','strategy','ai'],
    signals: [
      'Process data, compliance evidence and maintenance history in separate systems',
      'A simple question taking a week to answer',
      'Changes to a process recorded informally, if at all',
    ],
    label: 'Chemical and process industries',
    problem:
      'Process data, compliance evidence and maintenance history held in separate places, assembled by hand whenever anyone asks a question.',
  },
  /*
    These five were added by extension and the owner has since confirmed the
    firm has delivered in them, along with the rest. They now carry their own
    signals and capability mapping like the others, so publishedSectors()
    routes them.
  */
  {
    id: 'insurance',
    capabilities: ['ai','strategy','tech'],
    signals: [
      'Assessment decisions concentrated in a few experienced people, with no way to delegate the judgement',
      'A model that performs well and cannot be explained to a reviewer who asks why',
      'Policy, claims and customer systems that each hold a different version of the same account',
    ],
    h1: 'Software, AI and decision systems for insurance',
    targetPhrase: 'Insurance Software Development Company',
    phraseStatus: 'inferred',
    keyword: 'Insurance',
    label: 'Insurance',
    problem:
      'Assessment decisions concentrated in a few experienced people, where consistency matters as much as speed and every call has to be explainable.',
  },
  {
    id: 'proptech',
    capabilities: ['tech','strategy','ai'],
    signals: [
      'Portfolio, tenancy and building systems bought at different times and never reconciled',
      'A simple portfolio question taking a week because three teams have to be asked',
      'Building telemetry arriving in formats nobody owns the mapping for',
    ],
    h1: 'Platform, data and integration for real estate',
    targetPhrase: 'Proptech Software Development Company',
    phraseStatus: 'inferred',
    keyword: 'Proptech',
    label: 'Real estate and proptech',
    problem:
      'Portfolio, tenancy and building systems bought at different times, where a simple question takes a week because nothing reconciles.',
  },
  {
    id: 'edtech',
    capabilities: ['tech','ai','growth'],
    signals: [
      'Learner data split across enrolment, delivery and assessment tools',
      'Cohort problems visible only after the term, when nothing can be done about them',
      'Reporting for funders and regulators assembled by hand every cycle',
    ],
    h1: 'Platform, data and reporting for education',
    targetPhrase: 'Edtech Software Development Company',
    phraseStatus: 'inferred',
    keyword: 'Edtech',
    label: 'Education and edtech',
    problem:
      'Learner data spread across enrolment, delivery and assessment tools, so nobody can see a cohort end to end while there is still time to act.',
  },
  {
    id: 'construction',
    capabilities: ['tech','strategy','rd'],
    signals: [
      'Site reality and the plan diverging quietly between reporting cycles',
      'Progress reported in documents written after the fact rather than from the systems',
      'Equipment, materials and subcontractor data living in separate places',
    ],
    h1: 'Software, data and field systems for construction',
    targetPhrase: 'Construction Software Development Company',
    phraseStatus: 'inferred',
    keyword: 'Construction',
    label: 'Construction and infrastructure',
    problem:
      'Site reality and the plan diverging quietly, reported upward in documents written after the fact rather than from what the systems hold.',
  },
  {
    id: 'telecom',
    capabilities: ['tech','ai','delivery'],
    signals: [
      'Network and customer systems running at different speeds',
      'An operational picture assembled nightly for questions asked hourly',
      'Faults correlated by hand across tooling that was never meant to join up',
    ],
    h1: 'Network, customer and operational systems for telecom',
    targetPhrase: 'Telecom Software Development Company',
    phraseStatus: 'inferred',
    keyword: 'Telecom',
    label: 'Telecommunications',
    problem:
      'Network and customer systems at different speeds, where the operational picture is assembled nightly and the questions are asked hourly.',
  },
];

/**
 * Only sectors with their own specific content get a page.
 *
 * This is enforced rather than trusted. A sector needs both a capability
 * mapping and its own signals before it is routed, which means the five
 * entries added by extension cannot quietly ship as near-empty pages while
 * waiting for confirmation. That is the thin-page failure this project has
 * warned about twice; a rule in code is worth more than a note in a comment.
 *
 * To publish one of the pending sectors: confirm the firm has worked in it,
 * give it capabilities and signals, and it routes automatically.
 */
export const publishedSectors = () =>
  sectors.filter((s) => s.capabilities && s.capabilities.length && s.signals && s.signals.length);

export const pendingSectors = () =>
  sectors.filter((s) => !(s.capabilities && s.capabilities.length && s.signals && s.signals.length));

export const sectorSlug = (sector) =>
  sector.label
    .toLowerCase()
    .replace(/ and /g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const sectorPath = (sector) => `/sectors/${sectorSlug(sector)}`;
export const sectorBySlug = (slug) => sectors.find((s) => sectorSlug(s) === slug);

export const sectorById = (id) => sectors.find((s) => s.id === id);

/**
 * The closing line for any sector list. It exists because the list is long,
 * and a long list invites the reader to conclude that anything not named is
 * out of scope. It is not: the determining factor is the shape of the problem,
 * not the industry it occurs in.
 */
export const SECTOR_BREADTH_NOTE =
  'The list is not a boundary. What decides whether we are useful is the shape of the problem, not the industry it sits in: regulation, tolerance for downtime, how much of the data is trustworthy, and who has to sign off on the answer.';
