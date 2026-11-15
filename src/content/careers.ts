/**
 * Careers content. Roles, rates and terms follow the company's own Wellfound
 * postings (wellfound.com/company/talavishiraaj-groups/jobs), with the minimum
 * experience set to 2 to 3 years as the owner asked for the website.
 * Every role is a contract, commission only, remote, open worldwide.
 */
export type Role = {
  slug: string;
  title: string;
  /** Short name used in the search title, kept so the title stays under 60 characters. */
  short: string;
  summary: string;
  about: string[];
  do: string[];
  need: string[];
  plus: string[];
  measure: string[];
  commission: { summary: string; tiers?: [string, string][] };
  contract: string;
  timezones: string;
  hours: string;
  skills: string[];
  growth: string[];
  suits: string;
};

export const DATE_POSTED = '2026-11-14';
export const EXPERIENCE = '2 to 3 years minimum';
export const APPLY_EMAIL = 'hr@talavishiraajgroups.com';

/** Commission by deal size, from the SDR and closer postings. Amounts in US dollars. */
const DEAL_TIERS: [string, string][] = [
  ['Deals from $10,000 up to $99,999', '15%'],
  ['Deals from $100,000 to $999,999', '10%'],
  ['Deals of $1,000,000 or more', '5%'],
];

export const roles: Role[] = [
  {
    slug: 'lead-generation-associate',
    title: 'Sales Development Representative (SDR)',
    short: 'Sales Development Rep (SDR)',
    summary: 'Prospect, qualify and book discovery calls that become real opportunities for consulting and AI services.',
    about: [
      'Talavishiraaj Groups is building its global sales team. As an SDR you generate qualified opportunities across B2B and B2C markets for our consulting, engineering and AI services.',
      'The work is outbound prospecting, first conversations and pipeline building. You find the right people, find out whether there is a real problem, and put a well prepared meeting in front of our team.',
    ],
    do: [
      'Prospect potential clients through cold calls, LinkedIn outreach and email campaigns.',
      'Identify decision makers and individual clients worth talking to.',
      'Run first discovery and qualification conversations.',
      'Generate qualified opportunities for the sales team.',
      'Schedule meetings and discovery calls.',
      'Keep your activity and pipeline tracked in the CRM.',
    ],
    need: [
      'At least 2 to 3 years in an SDR, BDR or outbound sales role.',
      'Comfortable with cold outreach and prospecting every day.',
      'Strong communication and persuasion skills in English.',
      'Able to work on your own in a remote, performance driven setup.',
    ],
    plus: ['Experience selling consulting, SaaS, AI services or digital solutions.', 'Contacts among founders, CTOs or operations leaders in the US, UK, UAE or Europe.'],
    measure: [
      'A target list and outreach plan agreed with us in your first two weeks.',
      'A steady weekly rhythm of outreach, visible in the CRM.',
      'Qualified meetings that our team accepts as genuine opportunities.',
      'Your first sourced deal signed within roughly 90 days.',
    ],
    commission: { summary: 'Commission only, no base salary. You earn a share of every deal you source, paid by deal size:', tiers: DEAL_TIERS },
    contract: 'Independent contractor, 6 month contract',
    timezones: 'US Pacific, Mountain, Central and Eastern; Dubai; Indochina',
    hours: 'Flexible, with calls in your prospects’ working hours',
    skills: ['Lead generation', 'Cold calling', 'B2B sales', 'B2C sales', 'Prospecting', 'Inbound and outbound sales'],
    growth: ['A path to Account Executive or Closer roles.', 'Long term engagement potential.', 'Work on international consulting and AI projects.'],
    suits: 'Outbound professionals who are confident on the phone and want uncapped, deal based earnings.',
  },
  {
    slug: 'business-development-executive',
    title: 'Business Development Executive (BDE)',
    short: 'Business Development Executive',
    summary: 'Generate leads in international markets, pitch our services and take deals through to signed clients.',
    about: [
      'Talavishiraaj Groups helps companies grow through engineering, AI and business services. We are looking for business development executives to win clients in international and offshore markets, on a contract and commission basis.',
      'You own the full motion: finding the lead, pitching the right service, closing the deal and making sure the client is handed over well.',
    ],
    do: [
      'Generate high quality leads in international and offshore markets.',
      'Pitch our consulting, engineering and AI services to potential clients.',
      'Drive deals from first conversation to signature and manage client onboarding.',
      'Work with our delivery team so projects start smoothly.',
      'Build and keep long term client relationships.',
    ],
    need: [
      'At least 2 to 3 years in sales, business development or lead generation.',
      'Excellent communication and negotiation skills.',
      'An entrepreneurial mindset and strong closing ability.',
      'Able to work on your own in a remote, performance driven setup.',
    ],
    plus: ['Prior exposure to consulting, outsourcing or business services.', 'Existing relationships in the US, UK, UAE or Europe.'],
    measure: [
      'Comfortable explaining our services and Prism within your first month.',
      'A pipeline in the CRM that matches reality when we review it together.',
      'Discovery calls that end with a clear next step or a clear no.',
      'Your first engagement signed within roughly 90 days.',
    ],
    commission: { summary: 'Commission only, no fixed salary. You earn a share of every engagement you close, at the rate set out in your written agreement before you start.' },
    contract: 'Independent contractor, 6 month contract, no employment benefits',
    timezones: 'US Pacific and Eastern, Central European, Dubai, Indochina, Japan',
    hours: 'Collaboration window 2:00 PM to 8:00 PM India time',
    skills: ['Business development', 'B2B lead generation', 'B2B sales', 'Client relationship management', 'Negotiating and closing deals', 'Client onboarding'],
    growth: ['An experience letter recognising your contribution.', 'A possible full time role for top performers.'],
    suits: 'Natural closers who want to grow in international business development.',
  },
  {
    slug: 'sales-closer',
    title: 'High-Ticket Sales Closer',
    short: 'High-Ticket Sales Closer',
    summary: 'Run high value sales cycles from first outreach to signed deal and client onboarding.',
    about: [
      'Talavishiraaj Groups is expanding its international sales operations and needs experienced high-ticket closers to drive client acquisition worldwide.',
      'This is a contract, commission based role for people confident managing long, high value sales cycles, including the outbound work that starts them.',
    ],
    do: [
      'Manage the complete sales cycle, from prospecting to closure.',
      'Do outbound outreach and cold calling to potential clients.',
      'Run discovery and qualification conversations.',
      'Lead commercial discussions and negotiations.',
      'Drive deals to signature and through client onboarding.',
      'Work with our delivery team for a smooth handover.',
    ],
    need: [
      'At least 2 to 3 years of high-ticket sales or closing experience.',
      'Strong communication and negotiation skills.',
      'Comfortable with cold calling and outbound sales.',
      'A proven closer mindset and focus on revenue.',
      'Able to work on your own in a remote, performance driven setup.',
    ],
    plus: ['Experience closing IT services, software, AI or consulting deals.', 'Experience selling into the US, UK, UAE or Europe.'],
    measure: [
      'Proposals you are confident in, reviewed with our delivery team before they go out.',
      'Opportunities that move forward or close, rather than sit.',
      'Your first closed engagement within roughly 90 days.',
    ],
    commission: { summary: 'Commission only, no base salary. You earn a share of every deal you close, paid by deal size:', tiers: DEAL_TIERS },
    contract: 'Independent contractor',
    timezones: 'US Pacific, Central and Eastern; Dubai; Indochina',
    hours: 'Collaboration window 2:00 PM to 11:00 PM India time',
    skills: ['Sales closing and negotiation', 'Deal closure', 'Sales strategy', 'Cold calling', 'B2B sales', 'B2C sales', 'Prospecting'],
    growth: ['High value international deals with a delivery team behind you.', 'Long term engagement potential.'],
    suits: 'Experienced closers who want bigger deals and a delivery team they can rely on.',
  },
  {
    slug: 'appointment-setter',
    title: 'Appointment Setter',
    short: 'Appointment Setter',
    summary: 'Start conversations, qualify prospects and book high quality sales calls across B2B and B2C offers.',
    about: [
      'We are looking for experienced, performance driven appointment setters to help scale our outbound work on a contract basis.',
      'You generate leads, start conversations, qualify prospects and book sales calls. It is a results focused role with a direct line to revenue, in an early stage team that is scaling toward higher ticket and enterprise deals.',
    ],
    do: [
      'Run outbound outreach on LinkedIn, Instagram, email and phone.',
      'Start conversations and build rapport with potential clients.',
      'Qualify leads and book high quality sales calls.',
      'Follow up consistently to lift conversions.',
      'Handle objections and guide prospects toward booking.',
      'Track and manage leads in the CRM.',
      'Work with the team to improve outreach.',
    ],
    need: [
      'At least 2 to 3 years in appointment setting, SDR work or sales.',
      'Strong communication and persuasion skills.',
      'Self motivated and comfortable in a performance driven setup.',
      'Able to work on your own and own your results.',
    ],
    plus: ['Experience with B2B or high-ticket offers.', 'Availability in US, UK or Gulf working hours.'],
    measure: [
      'Inbound enquiries followed up within one working day.',
      'Meetings booked that our sales team rates as qualified.',
      'A falling no-show rate on the meetings you book.',
    ],
    commission: { summary: 'Commission only: 5% of every deal that comes from a meeting you booked. Average deals start around $2,000 and scale to high-ticket and enterprise engagements, with no cap on earnings.' },
    contract: 'Independent contractor',
    timezones: 'US Pacific, Central and Eastern; Central European; Indochina',
    hours: 'Flexible, with overlap in your prospects’ business hours',
    skills: ['Appointment setting', 'Lead generation', 'Calendar and scheduling', 'Sales'],
    growth: ['Be part of an early stage team in its growth phase.', 'Exposure to both B2B and B2C markets.', 'High ownership and performance based rewards.'],
    suits: 'Organized, persuasive communicators who like quick wins every week.',
  },
  {
    slug: 'referral-partner',
    title: 'Referral and Channel Partner',
    short: 'Referral and Channel Partner',
    summary: 'Introduce organizations from your own network when there is a genuine fit, and earn when they sign.',
    about: [
      'Some of the best clients come through someone who already knows them: a consultant, an accountant, an investor, a former colleague. If you regularly meet founders and operators stuck on a technology or operations decision, this is for you.',
      'There are no targets and no minimum hours. You introduce people when it makes sense; we take it from there and keep you informed.',
    ],
    do: [
      'Make warm introductions to people with a real technology, AI or operations problem.',
      'Tell us what you know about the situation so the first call is useful.',
      'Stay as involved as you like, from a single introduction to joining the conversations.',
    ],
    need: [
      'At least 2 to 3 years of professional experience in consulting, advisory, sales or a related field.',
      'A genuine network among founders, executives or operators.',
      'A reputation you care about. We will treat the people you introduce accordingly.',
    ],
    plus: ['Work as a consultant, advisor, accountant, recruiter or investor.', 'Relationships in the US, UK, UAE or Europe.'],
    measure: ['Introductions that lead to real conversations.', 'People you introduce saying the conversation was worth their time, whether or not they sign.'],
    commission: { summary: 'Commission on every engagement that closes from your introduction, at the rate set out in your written agreement.' },
    contract: 'Independent partner agreement',
    timezones: 'Any',
    hours: 'Entirely up to you',
    skills: ['Networking', 'Referral partnerships', 'Client relationships'],
    growth: ['Help your network and be paid fairly for it.', 'Long term partnership.'],
    suits: 'Well connected professionals who want to help their network and be paid fairly for it.',
  },
];

export const findRole = (slug: string) => roles.find((r) => r.slug === slug);

/** Terms that apply to every role. */
export const terms = [
  ['Pay', 'Commission only, uncapped. Up to 15% on deals you source or close.'],
  ['Experience', '2 to 3 years minimum in sales, business development or lead generation.'],
  ['Where', 'Fully remote, hiring everywhere. Visa sponsorship is not available.'],
  ['Basis', 'Independent contractor. You choose your hours within the role’s collaboration window.'],
] as const;

export const payDetail = [
  'Every role is commission only. There is no fixed salary or retainer, and we would rather say that plainly than bury it.',
  'Commission is paid on fees the client has actually paid us. What counts as your deal and when you are paid are set out in a short written agreement before you start.',
  'Our engagements are considered purchases, so expect your first earnings to take a few weeks to a few months, depending on the role.',
];

export const hiringSteps = [
  ['Apply', `Send the short form with your CV or LinkedIn, or email ${APPLY_EMAIL}. Two minutes.`],
  ['Review', 'We read every application and reply by email within a week.'],
  ['Call', 'A 30 minute conversation about your results and how you like to work.'],
  ['Agreement', 'Commission terms in writing, then a short onboarding on what we do and who we do it for.'],
] as const;
