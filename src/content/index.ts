import insightsJson from './generated/insights.json';
import sectorsJson from './generated/sectors.json';
import legalJson from './generated/legal.json';
import checklistJson from './generated/checklist.json';

export type Block =
  | { t: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'li'; x: string }
  | { t: 'figure'; title: string; caption: string; rows: { label: string; value: string }[]; source: string };

export type Insight = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  summary: string;
  published: string;
  inShort: string[];
  sections: { heading: string; blocks: Block[] }[];
};

export type Sector = {
  slug: string;
  name: string;
  title: string;
  problem: string;
  intro: string;
  signals: string[];
  capabilities: string[];
  reading: string[];
  faqs: { q: string; a: string }[];
};

export const insights = insightsJson as Insight[];
export const sectors = sectorsJson as Sector[];
export const legal = legalJson as Record<string, { title: string; blocks: Block[] }>;
export const checklist = checklistJson as { title: string; lead: string; items: { id: string; text: string }[] }[];

export const insightBySlug = (s: string) => insights.find((i) => i.slug === s);
export const sectorBySlug = (s: string) => sectors.find((i) => i.slug === s);
export const sectorByName = (n: string) => sectors.find((i) => i.name === n);

export const EMAIL = 'info@talavishiraajgroups.com';

export const legalNav = [
  { slug: 'privacy-policy', label: 'Privacy Policy' },
  { slug: 'terms', label: 'Terms of Service' },
  { slug: 'cookies', label: 'Cookie Notice' },
  { slug: 'refund-policy', label: 'Refund Policy' },
  { slug: 'delivery-policy', label: 'Delivery Policy' },
  { slug: 'risk-mitigation', label: 'Risk & Mitigation' },
  { slug: 'data-handling', label: 'Data Handling' },
  { slug: 'ip-policy', label: 'IP Policy' },
];
