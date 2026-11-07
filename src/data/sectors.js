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

export const sectors = [
  {
    id: 'logistics',
    label: 'Supply chain and logistics',
    problem:
      'Movements tracked in three systems that disagree, and a planner reconciling them by hand before anyone can act.',
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    problem:
      'Line and quality data that exists but never reaches the people deciding what to run next, or arrives a shift too late.',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    problem:
      'Clinical and administrative systems that were bought separately, where the integration work is the project and the interface is the easy part.',
  },
  {
    id: 'finance',
    label: 'Financial services',
    problem:
      'Decisions made by a handful of experienced people, under review requirements that make an unexplainable model useless however accurate it is.',
  },
  {
    id: 'iot',
    label: 'IoT and connected devices',
    problem:
      'Firmware, gateway and cloud built by teams that are not talking to each other, with the integration failures visible months before anyone acts.',
  },
  {
    id: 'saas',
    label: 'SaaS',
    problem:
      'A product that works and an operation around it that does not, where onboarding, support and reporting are still held together by people.',
  },
  {
    id: 'agritech',
    label: 'Agritech',
    problem:
      'Sensor and field data collected faithfully and used for very little, because nobody has defined the decision it should change.',
  },
  {
    id: 'ecommerce',
    label: 'Ecommerce',
    problem:
      'Catalogue, stock and fulfilment that each hold a different version of the truth, which customers discover before the business does.',
  },
  {
    id: 'agetech',
    label: 'Agetech and care',
    problem:
      'Monitoring that generates alerts nobody can triage, where the cost of a false alarm is measured in trust rather than money.',
  },
  {
    id: 'biotech',
    label: 'Biotechnology and life sciences',
    problem:
      'Research code that works in a notebook, in the hands of the person who wrote it, and cannot yet be relied on by anyone else.',
  },
  {
    id: 'ev',
    label: 'Electric vehicles and charging',
    problem:
      'A network of hardware in the field, reporting unevenly, where uptime is the product and visibility arrives after the complaint.',
  },
  {
    id: 'water',
    label: 'Water and utilities',
    problem:
      'Long lived assets with telemetry added later, where detection has to work against a baseline nobody has validated.',
  },
  {
    id: 'chemical',
    label: 'Chemical and process industries',
    problem:
      'Process data, compliance evidence and maintenance history held in separate places, assembled by hand whenever anyone asks a question.',
  },
  /*
    The entries below were added by extension rather than named by the owner.
    They follow the same problem shapes as the sectors above and are plausible
    given the capability set, but **each one needs confirming before it goes
    live**, on the same rule as the rest of this file: the site may say it has
    worked in a sector only where that is true. Delete any that are not.
  */
  {
    id: 'insurance',
    label: 'Insurance',
    problem:
      'Assessment decisions concentrated in a few experienced people, where consistency matters as much as speed and every call has to be explainable.',
  },
  {
    id: 'proptech',
    label: 'Real estate and proptech',
    problem:
      'Portfolio, tenancy and building systems bought at different times, where a simple question takes a week because nothing reconciles.',
  },
  {
    id: 'edtech',
    label: 'Education and edtech',
    problem:
      'Learner data spread across enrolment, delivery and assessment tools, so nobody can see a cohort end to end while there is still time to act.',
  },
  {
    id: 'construction',
    label: 'Construction and infrastructure',
    problem:
      'Site reality and the plan diverging quietly, reported upward in documents written after the fact rather than from what the systems hold.',
  },
  {
    id: 'telecom',
    label: 'Telecommunications',
    problem:
      'Network and customer systems at different speeds, where the operational picture is assembled nightly and the questions are asked hourly.',
  },
];

export const sectorById = (id) => sectors.find((s) => s.id === id);

/**
 * The closing line for any sector list. It exists because the list is long,
 * and a long list invites the reader to conclude that anything not named is
 * out of scope. It is not: the determining factor is the shape of the problem,
 * not the industry it occurs in.
 */
export const SECTOR_BREADTH_NOTE =
  'The list is not a boundary. What decides whether we are useful is the shape of the problem, not the industry it sits in: regulation, tolerance for downtime, how much of the data is trustworthy, and who has to sign off on the answer.';
