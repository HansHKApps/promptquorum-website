// Slug: eu-800w-balcony-solar-standard-2027
// BSOL-27 — Tier 5 (2027 Trends), legislation, semi_annual.
// NOTE (Phase 3 scope): balkonkraftwerk-germany-rules.ts already covers the German
// 800W/DIN VDE V 0126-95/Schuko facts in depth — this article must scope to the
// CROSS-BORDER harmonization angle (Greece and other EU states adopting the German
// standard), treating Germany as a brief reference-out, not a re-explainer.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-18',
    theme: 'Balcony Solar Legislation',
    title: 'The 800W Balcony Solar Standard: EU Harmonization Explained (2027)',
    seoTitle: 'The 800W Balcony Solar Standard: EU Harmonization Explained (2027)',
    intro: 'TODO (Phase 3): DIN VDE V 0126-95 (Dec 2025) finalized the 800W cap + Schuko plug rule in Germany; Greece is following with its own 800W framework. Scope to cross-border harmonization — reference the German deep-dive rather than re-explaining it.',
    metaDescription: 'TODO (Phase 3): meta description.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: 'TBD',
    educationalLevel: 'Beginner',
    audience: 'EU balcony solar buyers outside Germany tracking 800W standard adoption',
    primaryTerm: 'eu 800w balcony solar standard',
    targetKeywords: ['800w balcony solar eu', 'greece balcony solar 800w', 'eu balcony solar harmonization 2027'],
    leadAnswerBlock: 'TODO (Phase 3).',
    quickAnswerTop: {
      en: {
        question: 'Is the 800W balcony solar standard spreading across the EU?',
        answer: 'TODO (Phase 3).',
        bullets: ['TODO (Phase 3)'],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: ['TODO (Phase 3)'],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [{ q: 'TODO (Phase 3)', a: 'TODO (Phase 3)' }],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Balkonkraftwerk: Germany\'s Balcony Solar Rules](/balcony-solar/balkonkraftwerk-germany-rules) — the full German 800W/DIN VDE V 0126-95 deep-dive this article references rather than repeats',
          '[Is Balcony Solar Legal? A Country-by-Country Guide](/balcony-solar/is-balcony-solar-legal-country-guide) — global legal tracker',
        ],
      },
    },
  },
}
