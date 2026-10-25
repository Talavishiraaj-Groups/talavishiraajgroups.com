/**
 * The site has exactly one conversion action, and this is its label.
 *
 * Why this file exists. An external audit found "competing calls to action and
 * generic button text" and scored the conversion funnel as a losing area. A
 * count of the built pages backed it up: 56 button level actions across 36
 * pages, carrying four different labels for the same single destination
 * (/contact), of which "Talk to our team", "Start a conversation", "Explore
 * our capabilities" and "View our capabilities" say nothing about what happens
 * next. Twelve pages offered more than one.
 *
 * Two separate problems were tangled together there, and they have different
 * fixes.
 *
 * The first is wording. "Talk to our team" describes what we do. "Start a
 * conversation" describes a genre of interaction. Neither tells the visitor
 * what the click asks of them, so the click is a guess. CONVERSION_LABEL names
 * the visitor's own next action instead, and it is deliberately the smallest
 * true description of it: describing a situation is a lower bar than booking,
 * briefing or enquiring, and the page it lands on is built to take exactly
 * that.
 *
 * The second is repetition of a different kind. One label used everywhere is
 * not the problem the audit found; it is the fix. Jakob's law applies to a
 * site's own internal consistency as much as to convention: an action that
 * looks and reads the same on every page is learned once. Four labels for one
 * destination means it is learned four times, or not at all.
 *
 * So: one conversion action, one label, one destination. Anything that is not
 * this is navigation, and navigation does not get a filled button.
 *
 * Note for anyone editing this. The label must not name booking specifically.
 * /contact carries both a form and a calendar, and an earlier version of the
 * site pushed booking as the primary action, which asks for the largest
 * commitment on the site at the point of least trust. The supporting sentence
 * next to the button is where booking gets mentioned, as one of two options.
 */
export const CONVERSION_LABEL = 'Describe your situation';

/**
 * The one destination. `intent` is carried through so the contact page can
 * preselect what the enquiry is about; it never changes where the link goes.
 */
export const conversionHref = (intent = '') => (intent ? `/contact?intent=${intent}` : '/contact');
