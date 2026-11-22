/** Lowercases a title for use mid-sentence, keeping acronyms and brand casing (AI, R&D, SaaS, IoT). */
export function inSentence(s: string) {
  return s.replace(/[A-Za-z&]+/g, (w) => (/^[A-Z][a-z]+$/.test(w) ? w.toLowerCase() : w));
}

/** "a" or "an" for the phrase that follows, by its first letter. */
export function aOrAn(s: string) {
  return /^[aeiou]/i.test(s.trim()) ? 'an' : 'a';
}
