// Slug: net-metering-rollback-balcony-solar-2027
// BSOL-29 — Tier 5 (2027 Trends), legislation, annual.
// NOTE: adjacent to a prior "DO NOT BUILD" gate in docs/BALCONY_SOLAR_TIER5_BACKLOG.md
// on a general net-metering/grid-export explainer (pending GSC demand data, never
// pulled). This article is a narrower, differentiated angle — the specific NL
// saldering rollback taking effect Jan 1, 2027 — approved to proceed 2026-07-18
// despite that gate; flag this distinction explicitly in the article body.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'annual',
    specific_year: 2027,
    theme: 'Balcony Solar Legislation',
    title: 'Net Metering Is Ending in 2027 — What It Means for Balcony Solar',
    seoTitle: 'Net Metering Is Ending in 2027 — What It Means for Balcony Solar',
    intro: 'TODO (Phase 3): Netherlands saldering ends January 1, 2027, replaced by a market-linked export rate — first dedicated NL country page in the cluster (unlike DE/ES/PT-BR/Gulf-MENA, no NL page exists yet).',
    metaDescription: 'TODO (Phase 3): meta description.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: 'TBD',
    educationalLevel: 'Beginner',
    audience: 'Dutch balcony solar owners and buyers affected by the saldering rollback',
    primaryTerm: 'netherlands net metering ending 2027',
    targetKeywords: ['saldering 2027', 'netherlands net metering balcony solar', 'balcony solar netherlands 2027'],
    leadAnswerBlock: 'TODO (Phase 3).',
    quickAnswerTop: {
      en: {
        question: 'Is net metering ending for balcony solar in 2027?',
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
          '[Do You Need a Battery for Balcony Solar?](/balcony-solar/do-you-need-a-battery-balcony-solar) — export-credit-gap heuristic directly affected by the saldering rollback',
          '[Is Balcony Solar Legal? A Country-by-Country Guide](/balcony-solar/is-balcony-solar-legal-country-guide) — global legal tracker',
        ],
      },
    },
  },
}
