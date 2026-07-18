// Slug: balcony-solar-battery-storage-standard-2027
// BSOL-26 — Tier 5 (2027 Trends), foundations, semi_annual.
// NOTE (Phase 3 must reconcile): must not silently contradict
// do-you-need-a-battery-balcony-solar.ts ("usually not required") or
// balkonkraftwerk-germany-rules.ts (battery-equipped systems excluded from
// Germany's simplified DIN VDE V 0126-95 regime) — cross-link both ways.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-18',
    theme: 'Balcony Solar Foundations',
    title: 'Why Battery Storage Is Becoming Standard for Balcony Solar in 2027',
    seoTitle: 'Why Battery Storage Is Becoming Standard for Balcony Solar in 2027',
    intro: 'TODO (Phase 3): EU RED subsidy tier (≤30% of equipment cost, installs before 2027) and the WattCycle 10kWh/5kW unit shown at Intersolar 2026 — must reconcile with existing "battery usually not required" and Germany battery-exclusion facts elsewhere in the cluster.',
    metaDescription: 'TODO (Phase 3): meta description.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: 'TBD',
    educationalLevel: 'Beginner',
    audience: 'Balcony solar buyers evaluating whether to add battery storage in 2027',
    primaryTerm: 'balcony solar battery standard 2027',
    targetKeywords: ['balcony solar battery 2027', 'eu balcony solar battery subsidy', 'wattcycle balcony solar battery'],
    leadAnswerBlock: 'TODO (Phase 3).',
    quickAnswerTop: {
      en: {
        question: 'Is battery storage becoming standard for balcony solar?',
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
          '[Do You Need a Battery for Balcony Solar?](/balcony-solar/do-you-need-a-battery-balcony-solar) — the existing economics-first answer this article must reconcile with',
          '[Balkonkraftwerk: Germany\'s Balcony Solar Rules](/balcony-solar/balkonkraftwerk-germany-rules) — battery-equipped systems are excluded from Germany\'s simplified regime',
          '[Best Balcony Solar Batteries](/balcony-solar/best-balcony-solar-batteries-2026) — hardware buyer\'s guide',
        ],
      },
    },
  },
}
