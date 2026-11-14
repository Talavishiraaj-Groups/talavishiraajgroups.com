/**
 * Careers content. Every role is commission only, remote, and open in India and
 * internationally. Written plainly: what the work is, who it suits, how it is paid,
 * and what good looks like after 90 days. No commission rates are published here;
 * they are agreed in writing per person.
 */
export type Role = {
  slug: string;
  title: string;
  summary: string;
  about: string[];
  do: string[];
  need: string[];
  plus: string[];
  measure: string[];
  hours: string;
  suits: string;
};

export const DATE_POSTED = '2026-11-14';

export const roles: Role[] = [
  {
    slug: 'lead-generation-associate',
    title: 'Lead Generation Associate',
    summary: 'Find organizations with a real technology or operations problem, and start the conversation.',
    about: [
      'Most of our work starts with a founder or operator who knows something is not working but has not yet put a name to it. Your job is to find those people before they go looking, and to open a conversation worth having.',
      'This is research and outreach, not volume dialling. Ten well-researched messages to the right people beat two hundred to a scraped list, and that is how we will judge the work.',
    ],
    do: [
      'Build target lists of companies and decision makers in the sectors and regions we agree on.',
      'Research each account well enough to say something specific: a recent hire, a product launch, a system that is clearly straining.',
      'Write and send outreach by email and LinkedIn, and follow up without being a nuisance.',
      'Qualify replies against a short written checklist: is there a real problem, a person who owns it, and a reason to act this quarter.',
      'Hand qualified leads to the business development team with notes good enough that nobody has to ask the prospect the same question twice.',
      'Log every touchpoint in the CRM the same day.',
    ],
    need: [
      'At least a year of B2B outbound, lead generation or research work, in any industry.',
      'Clear written English. Most first impressions you make will be in writing.',
      'Comfort with LinkedIn, a CRM and at least one prospecting tool such as Apollo or Sales Navigator.',
      'The discipline to work on your own schedule without someone checking in.',
    ],
    plus: [
      'Experience selling IT services, software or consulting.',
      'A network among founders, CTOs or operations leaders.',
      'A second language used in business in your region.',
    ],
    measure: [
      'A target list and outreach approach agreed with us in your first two weeks.',
      'A steady weekly rhythm of researched outreach, visible in the CRM.',
      'Qualified conversations handed over that the business development team accepts as genuine.',
      'Your first sourced engagement signed within roughly 90 days.',
    ],
    hours: 'Flexible. Most people put in 15 to 30 hours a week.',
    suits: 'Researchers and outbound specialists who would rather send fewer, better messages.',
  },
  {
    slug: 'business-development-executive',
    title: 'Business Development Executive',
    summary: 'Turn early interest into a proper first conversation, and keep the pipeline honest.',
    about: [
      'You sit between the first reply and the proposal. A prospect has said yes to a conversation; your job is to understand their situation well enough that we either propose something that genuinely fits or tell them, politely, that we are not the right people.',
      'We care more about pipeline accuracy than pipeline size. A short list of real opportunities is worth more to us than a long list of maybes.',
    ],
    do: [
      'Run discovery calls with founders, operators and technology leaders.',
      'Find out what is actually in the way: the problem, what has been tried, who decides and what it is costing them.',
      'Write a short summary after every call, and bring in a senior team member when the problem needs technical depth.',
      'Work your own outbound alongside leads passed to you.',
      'Keep every opportunity current in the CRM, including the ones that go nowhere and why.',
      'Feed back what you hear in the market so our positioning stays grounded.',
    ],
    need: [
      'Two or more years in B2B business development, account management or consultative sales.',
      'Confidence running a call with a senior decision maker and asking direct questions.',
      'Enough curiosity about technology to follow a conversation about systems, data and automation.',
      'Strong written English and reliable follow-through.',
    ],
    plus: [
      'Experience with IT services, SaaS, consulting or agency sales.',
      'Familiarity with a qualification framework such as BANT or MEDDIC.',
      'Existing relationships in a sector we work in.',
    ],
    measure: [
      'Comfortable explaining our six capabilities and Prism within your first month.',
      'Discovery calls that end with a clear next step or a clear no.',
      'A pipeline in the CRM that matches reality when we review it together.',
      'Your first engagement signed within roughly 90 days.',
    ],
    hours: 'Flexible, with calls scheduled around your prospects’ time zones.',
    suits: 'Consultative sellers who listen more than they pitch.',
  },
  {
    slug: 'sales-closer',
    title: 'Sales Closer',
    summary: 'Take qualified opportunities from proposal to signed engagement, with our delivery leads beside you.',
    about: [
      'By the time an opportunity reaches you, the problem is understood and the buyer is engaged. Your job is to get to a decision: shape the proposal with our delivery team, handle the commercial conversation and close.',
      'Our engagements are considered purchases, often reviewed by a founder, a finance lead and a technical lead. Pressure tactics do not work here and we do not want them used. Clarity, follow-through and good judgement on scope do.',
    ],
    do: [
      'Own qualified opportunities from proposal through to signature.',
      'Work with our delivery leads to shape scope, timeline and price so the proposal fits the problem.',
      'Lead pricing and terms conversations, and know when to walk away from a bad fit.',
      'Answer objections with substance: case studies, a clear plan, a smaller first phase.',
      'Hand signed clients over to delivery with everything they were promised written down.',
      'Forecast honestly and keep the CRM current.',
    ],
    need: [
      'Three or more years closing B2B deals, ideally with a sales cycle of weeks to months.',
      'A track record you can talk through in specifics: deal sizes, cycle lengths, what you won and lost.',
      'Comfort discussing proposals in the thousands to tens of thousands of dollars, or the rupee equivalent.',
      'Excellent spoken and written English.',
    ],
    plus: [
      'Experience closing IT services, software development, AI or consulting engagements.',
      'Experience selling into the US, UK, Europe, the Middle East or Australia.',
      'Your own pipeline of warm relationships.',
    ],
    measure: [
      'Proposals you are confident in, reviewed with delivery before they go out.',
      'Opportunities that move or close, rather than sit.',
      'Your first closed engagement within roughly 90 days.',
      'Clients who arrive at delivery with expectations that match the contract.',
    ],
    hours: 'Flexible, with availability for client calls in their working hours.',
    suits: 'Experienced closers who want higher-value deals and a delivery team they can rely on.',
  },
  {
    slug: 'appointment-setter',
    title: 'Appointment Setter',
    summary: 'Keep our calendars full of the right meetings, not just any meetings.',
    about: [
      'A meeting with the wrong person wastes an hour on both sides. You make sure the meetings we take are with people who have a real problem and the authority to do something about it.',
      'You will work warm leads, inbound enquiries and follow-ups more than cold lists, so the job is as much about timing and tact as persistence.',
    ],
    do: [
      'Follow up inbound enquiries, event contacts and warm leads quickly.',
      'Call, email and message prospects to confirm fit before booking anything.',
      'Book meetings straight into our calendar with a short note on what the prospect wants to discuss.',
      'Send reminders and reschedule politely so fewer meetings are missed.',
      'Keep a clean record of every attempt and outcome in the CRM.',
    ],
    need: [
      'Six months or more in appointment setting, telesales, customer success or a similar role.',
      'A clear, friendly phone manner and good written English.',
      'Organization: you will juggle many small follow-ups at once.',
      'A reliable internet connection and a quiet place to take calls.',
    ],
    plus: [
      'Experience booking meetings for B2B services or software.',
      'Availability during US, UK or Gulf working hours.',
    ],
    measure: [
      'Inbound enquiries followed up within one working day.',
      'Meetings booked that the business development team rates as qualified.',
      'A falling no-show rate on the meetings you book.',
      'Commission earned on meetings that turn into signed engagements.',
    ],
    hours: 'Flexible. Overlap with your prospects’ business hours helps.',
    suits: 'Organized, friendly communicators who like quick wins every week.',
  },
  {
    slug: 'referral-partner',
    title: 'Referral and Channel Partner',
    summary: 'Introduce organizations from your own network when there is a genuine fit, and earn when they sign.',
    about: [
      'Some of our best clients came through someone who already knew them: a consultant, an accountant, an investor, a former colleague. If you regularly meet founders and operators who are stuck on a technology or operations decision, this is for you.',
      'There are no targets and no minimum hours. You introduce people when it makes sense; we take it from there, and keep you informed.',
    ],
    do: [
      'Make warm introductions to people with a real technology, AI or operations problem.',
      'Tell us what you know about the situation so the first call is useful.',
      'Stay as involved as you like, from a single introduction to joining the conversations.',
      'Point people to our tools and writing when they are not ready to talk yet.',
    ],
    need: [
      'A genuine network among founders, executives or operators.',
      'A reputation you care about. We will treat the people you introduce accordingly.',
      'No sales experience is required.',
    ],
    plus: [
      'Work as a consultant, advisor, accountant, recruiter or investor.',
      'Relationships in a sector or region where we are not yet well known.',
    ],
    measure: [
      'Introductions that lead to real conversations.',
      'People you introduce saying the conversation was worth their time, whether or not they sign.',
      'Commission on every engagement that closes from your introduction.',
    ],
    hours: 'Entirely up to you.',
    suits: 'Well-connected professionals who want to help their network and be paid fairly for it.',
  },
];

export const findRole = (slug: string) => roles.find((r) => r.slug === slug);

/** Terms that apply to every role. */
export const terms = [
  ['Pay', 'Commission only, with no cap. You earn on revenue from engagements you source or close.'],
  ['Where', 'Fully remote. Open across India and internationally.'],
  ['Basis', 'Independent contractor, not employment. You choose your hours.'],
  ['Support', 'Positioning, case studies, proposal help and a senior person on any call that needs one.'],
] as const;

export const payDetail = [
  'This role is commission only. There is no fixed salary or retainer, and we would rather say that plainly than bury it.',
  'Your commission rate, what counts as your deal, and when you are paid are agreed in a short written agreement before you start. Commission is paid on fees the client has actually paid us, and applies to follow-on work from the same client for an agreed period.',
  'Our engagements are considered purchases rather than impulse buys, so expect your first earnings to take a few weeks to a few months, depending on the role.',
];

export const hiringSteps = [
  ['Apply', 'Send the short form with your CV or LinkedIn. Two minutes.'],
  ['Review', 'We read every application and reply by email within a week.'],
  ['Call', 'A 30 minute conversation about your experience and how you like to work.'],
  ['Agreement', 'Commission terms in writing, then a short onboarding on what we do and who we do it for.'],
] as const;
