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
    intro: 'A policy shift in the Netherlands is a preview of what\'s likely coming to other mature solar markets: the Dutch Senate approved ending 1:1 net metering (saldering) effective January 1, 2027. This page covers that specific rollback — it is a narrower, differentiated angle from a general net-metering/grid-export explainer previously scoped in the cluster backlog and held pending demand data; that broader piece remains unbuilt, and this article does not replace it.',
    metaDescription: 'The Dutch Senate approved ending 1:1 net metering (saldering) from January 1, 2027 — exports will be compensated at a lower, market-linked rate instead. Here\'s what the current scheme covers and why the change makes battery storage more valuable.',
    publishDate: '2026-07-18',
    dateModified: '2026-07-18',
    readTime: '5 min read',
    educationalLevel: 'Beginner',
    audience: 'Dutch balcony solar owners and buyers affected by the saldering rollback',
    primaryTerm: 'netherlands net metering ending 2027',
    targetKeywords: ['saldering 2027', 'netherlands net metering balcony solar', 'balcony solar netherlands 2027'],
    leadAnswerBlock: '**The Dutch Senate approved ending 1:1 net metering (saldering) effective January 1, 2027 — one of the most generous net metering arrangements in Europe.** Under the current scheme, a household exporting 3,000 kWh and importing 4,000 kWh pays only for the 1,000 kWh net difference. From 2027, exported electricity will instead be compensated at a lower, market-linked rate; the exact compensation mechanism is still being finalized by Dutch energy regulator ACM and no specific rate has been confirmed. This directly increases the value of self-consumption — using power you generate directly rather than exporting it for credit — which is why it connects to the broader battery-storage trend covered elsewhere in this cluster.',
    quickAnswerTop: {
      en: {
        question: 'Is net metering ending for balcony solar in 2027?',
        answer: 'Yes, in the Netherlands specifically — the Dutch Senate approved ending 1:1 net metering (saldering) effective January 1, 2027. Under the current scheme, exported and imported electricity are netted 1:1 (e.g., exporting 3,000 kWh and importing 4,000 kWh means paying only for the 1,000 kWh difference). From 2027, exports will be compensated at a lower, market-linked rate instead — Dutch regulator ACM has not yet finalized the exact mechanism, so no specific rate can be confirmed. This is not a general EU-wide change; it is specific to the Netherlands.',
        bullets: [
          'Dutch Senate approved ending 1:1 net metering (saldering), effective January 1, 2027',
          'Current scheme: exports and imports are netted 1:1 — only the difference is billed',
          'From 2027: exports compensated at a lower, market-linked rate — exact mechanism still being finalized by regulator ACM, no specific rate confirmed yet',
          'The change increases the value of self-consumption relative to exporting, reinforcing the case for battery storage covered elsewhere in this cluster',
          'The Netherlands has an estimated ~26 GW of installed solar capacity as context for the scale of this shift',
        ],
        updatedDate: '2026-07-18',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'The Current Scheme, and What Changes', anchor: '#current-scheme' },
      { label: 'Why This Makes Battery Storage More Valuable', anchor: '#battery-connection' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'The Dutch Senate approved ending 1:1 net metering (saldering) effective January 1, 2027 — one of the most generous net metering arrangements in Europe.',
          'Under the current scheme, a household exporting 3,000 kWh and importing 4,000 kWh pays only for the 1,000 kWh net difference.',
          'From 2027, exported electricity will be compensated at a lower, market-linked rate instead. The exact compensation mechanism is still being finalized by Dutch energy regulator ACM — no specific rate is confirmed, and none should be assumed.',
          'Without full-value net metering, a balcony solar system without storage effectively "wastes" any generation beyond immediate household consumption — reinforcing the case for battery storage, similar to how Germany\'s own storage adoption followed once its feed-in tariff stopped being attractive relative to self-consumption.',
          'This page covers the specific Netherlands saldering rollback — it is a narrower, differentiated topic from a general net-metering/grid-export explainer previously scoped for this cluster and held pending demand data; that broader piece is not covered here.',
        ],
      },
      currentScheme: {
        id: 'current-scheme',
        title: 'The Current Scheme, and What Changes',
        content: [
          '**Under the Netherlands\' current saldering scheme, exported and imported electricity are netted 1:1 — a household exporting 3,000 kWh and importing 4,000 kWh over a billing period pays only for the 1,000 kWh net difference.** This is one of the most generous net metering arrangements in Europe, effectively letting solar owners use the grid as a free battery.',
          '**From January 1, 2027, that changes: exported electricity will instead be compensated at a lower, market-linked rate rather than netted 1:1 against consumption.** The exact compensation mechanism is still being finalized by Dutch energy regulator ACM — no specific rate has been published, and this page will not state one until ACM confirms it. The direction is unambiguous even though the exact number is not: self-consumption becomes significantly more valuable than it was under saldering.',
        ],
      },
      batteryConnection: {
        id: 'battery-connection',
        title: 'Why This Makes Battery Storage More Valuable',
        content: [
          '**Without full-value net metering, a balcony solar system without storage effectively "wastes" any generation beyond immediate household consumption.** Once exports are compensated at a market-linked rate below the 1:1 saldering rate, storing surplus power for later self-consumption becomes more economically attractive than exporting it.',
          'This mirrors a pattern already seen in Germany, where storage adoption accelerated once the feed-in tariff stopped being attractive relative to self-consumption. As context for scale, the Netherlands has an estimated ~26 GW of installed solar capacity — existing system owners retain the current saldering arrangement only until the January 1, 2027 cutover, after which the new, lower-value export economics apply to all exports going forward.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'When does net metering end in the Netherlands?', a: 'The Dutch Senate approved ending 1:1 net metering (saldering) effective January 1, 2027. Until then, the current 1:1 netting scheme remains in effect.' },
          { q: 'How does the current Dutch net metering scheme work?', a: 'Exported and imported electricity are netted 1:1 over a billing period — for example, a household exporting 3,000 kWh and importing 4,000 kWh pays only for the 1,000 kWh net difference.' },
          { q: 'What replaces net metering after January 1, 2027?', a: 'Exported electricity will be compensated at a lower, market-linked rate instead of being netted 1:1 against consumption. Dutch regulator ACM has not yet finalized the exact compensation mechanism, so no specific rate can be confirmed at this time.' },
          { q: 'Does this rollback apply outside the Netherlands?', a: 'No — this is specific to the Netherlands\' saldering scheme. It is not a general EU-wide net-metering explainer; a broader piece on net metering and grid export across multiple countries has been scoped separately for this cluster but is not covered on this page.' },
          { q: 'Should I get a battery because of this change?', a: 'The economics move in that direction — once exports are compensated below the current 1:1 rate, storing surplus power for self-consumption becomes relatively more valuable. See the dedicated battery storage guide for the general decision framework.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Why Battery Storage Is Becoming Standard for Balcony Solar in 2027](/balcony-solar/balcony-solar-battery-storage-standard-2027) — the direct self-consumption connection: storage becomes more valuable as export compensation drops',
          '[Do You Need a Battery for Balcony Solar?](/balcony-solar/do-you-need-a-battery-balcony-solar) — general export-credit-gap decision heuristic, directly affected by the saldering rollback',
          '[Is Balcony Solar Legal? A Country-by-Country Guide](/balcony-solar/is-balcony-solar-legal-country-guide) — global legal tracker',
        ],
      },
    },
  },
}
