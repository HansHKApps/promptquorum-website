// Slug: balcony-solar-payback-worth-it-2026
// BSOL-19 — Tier 4, explainer/objection-handler, semi_annual. Routes to money pages.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";
import { CHINA_PV_EXPORT_POLICY } from "@/lib/shared/balcony-solar-country-data";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    last_full_refresh: '2026-07-02',
    theme: 'Balcony Solar Money Pages',
    title: 'Is Balcony Solar Worth It in 2026?',
    seoTitle: 'Is Balcony Solar Worth It? Honest 2026 Breakdown',
    intro: 'The honest answer is: it depends on your electricity rate, your country\'s hardware pricing, and how long you plan to keep the system — not a universal yes. Here\'s how to actually work it out for yourself rather than trust a generic answer.',
    metaDescription: 'Is balcony solar worth it in 2026? An honest, country-aware breakdown of what actually determines payback — not a generic yes, with rising hardware costs factored in.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Prospective balcony solar buyers weighing whether the investment makes sense',
    primaryTerm: 'is balcony solar worth it',
    targetKeywords: ['is balcony solar worth it 2026', 'balcony solar roi', 'plug in solar worth the money', 'balcony solar cost benefit'],
    leadAnswerBlock: '**Balcony solar is worth it when your local electricity rate is high enough and your hardware cost low enough that payback happens within a timeframe you\'re comfortable with — typically a few years in markets with both favorable pricing and decent sun exposure, longer elsewhere.** It is not a universal yes: the math genuinely doesn\'t work as well in every market, and hardware prices are trending upward in the near term due to a China PV export-tax rebate change, which affects the calculation right now specifically.',
    quickAnswerTop: {
      en: {
        question: 'Is balcony solar worth it?',
        answer: 'It depends on three factors you need to check for your specific situation: your local electricity rate, your local hardware price, and how much sun your installation location gets. There\'s no universal yes — some markets have favorable enough economics for a payback of a few years, others don\'t currently. Hardware prices are also trending upward in the near term due to a China PV export-tax change, which affects timing.',
        bullets: [
          'Worth it depends on electricity rate, hardware price, and sun exposure — check all three for your situation',
          'No universal answer — some markets have clearly favorable economics, others genuinely don\'t right now',
          'China\'s PV export-tax rebate removal (effective April 2026) is pushing hardware prices up an estimated 10–15% into second-half 2026',
          'Buying sooner rather than later may matter more for this category than most consumer electronics given that price trend',
          'A battery only improves the payback calculation under specific conditions — don\'t assume adding one automatically helps',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'What Actually Determines Payback', anchor: '#what-determines-payback' },
      { label: 'The Current Price Trend', anchor: '#price-trend' },
      { label: 'When It\'s Clearly Worth It', anchor: '#clearly-worth-it' },
      { label: 'When It\'s Genuinely Not', anchor: '#genuinely-not' },
      { label: 'How to Calculate Your Own Number', anchor: '#calculate-your-own' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Payback depends on three factors specific to you: local electricity rate, local hardware price, and sun exposure at your installation location.',
          'There is no universal "yes, worth it" — the economics genuinely work better in some markets than others right now.',
          'China\'s PV export-tax rebate removal (effective April 1, 2026) is pushing hardware prices up an estimated 10–15% into the second half of 2026 — a real, current factor in the timing question.',
          'Buying sooner rather than later may matter more for this category than for most consumer electronics given that specific price trend.',
          'A battery only improves payback under specific utility rate conditions — don\'t assume adding one automatically helps your economics.',
          'Use the dedicated sizing and payback calculator for a country-specific estimate rather than relying on a generic number from this page alone.',
        ],
      },
      whatDeterminesPayback: {
        id: 'what-determines-payback',
        title: 'What Actually Determines Payback',
        content: [
          '**Three factors determine your actual payback timeline: your local electricity rate (higher rates mean each kWh your panel generates is worth more), your local hardware price (lower cost means less to recoup), and your sun exposure (more yield means faster payback).** See the [sizing and payback guide](/balcony-solar/balcony-solar-sizing-yield-payback) for country-specific hardware pricing and the one independently verified yield comparison point in this cluster\'s dataset.',
        ],
      },
      priceTrend: {
        id: 'price-trend',
        title: 'The Current Price Trend',
        content: [
          `**${CHINA_PV_EXPORT_POLICY.summary}** This is a live factor in the "is it worth it now vs. later" question — if you\'re on the fence, the near-term price direction is upward, not downward, for balcony solar hardware specifically.`,
        ],
      },
      clearlyWorthIt: {
        id: 'clearly-worth-it',
        title: 'When It\'s Clearly Worth It',
        content: [
          '**Balcony solar tends to have the clearest payback case in markets combining high electricity rates, low hardware prices, and strong sun exposure — Germany and Portugal both score well on the hardware-price and regulatory-simplicity fronts specifically, based on this cluster\'s verified data.** Southern/sunnier markets add a yield advantage on top, though hardware pricing and legal simplicity vary independently of sun exposure, so check all factors together rather than assuming sun alone makes the case.',
        ],
      },
      genuinelyNot: {
        id: 'genuinely-not',
        title: 'When It\'s Genuinely Not',
        content: [
          '**If your electricity rate is low, your local hardware price is high, or your installation location gets limited sun exposure, the payback timeline can stretch long enough that balcony solar isn\'t a clearly good financial decision — and that\'s a legitimate, honest answer, not a reason to avoid stating it.** Markets with no small-system legal exemption (Brazil, Mexico) also add registration friction that\'s worth factoring in alongside the pure financial math.',
        ],
        callouts: [
          { type: 'tip', text: 'If the financial case is marginal for you, the local-control and no-cloud angle (see the linked no-cloud guide) is a separate reason some buyers choose balcony solar even outside the strongest payback markets — worth considering if pure ROI isn\'t your only motivation.' },
        ],
      },
      calculateYourOwn: {
        id: 'calculate-your-own',
        title: 'How to Calculate Your Own Number',
        content: [
          '**Combine your local hardware price, your local electricity rate, and your location\'s sun exposure to estimate your own payback — the [sizing and payback guide](/balcony-solar/balcony-solar-sizing-yield-payback) provides the hardware pricing and yield data by country, but the final calculation requires your specific electricity rate, which this site can\'t know without you providing it.**',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is balcony solar worth it everywhere?', a: 'No — it depends on your local electricity rate, hardware price, and sun exposure. Some markets have clearly favorable economics, others genuinely don\'t right now. There\'s no universal yes.' },
          { q: 'Why are balcony solar prices rising in 2026?', a: 'China removed a PV-component export VAT rebate effective April 1, 2026, raising exporter costs and pushing module and kit prices up an estimated 10–15% into the second half of 2026.' },
          { q: 'Should I buy now or wait?', a: 'Given the current upward price trend, buying sooner rather than later may matter more for this category than for most consumer electronics — though your specific state/country legal status should also factor into timing.' },
          { q: 'Does a battery always improve payback?', a: 'No — it depends on the gap between your utility\'s export credit and import rate. If that gap is small, a battery adds cost without meaningfully improving your economics.' },
          { q: 'Which countries have the best balcony solar payback?', a: 'Based on this cluster\'s verified data, Germany and Portugal both score well on hardware price and regulatory simplicity specifically — sunnier markets add a yield advantage on top, but check all factors together.' },
          { q: 'Is balcony solar worth it if the financial payback is marginal?', a: 'That depends on your motivation — some buyers choose it for the local-control and no-cloud angle rather than pure financial ROI, which is a legitimate separate reason even where the payback case is weaker.' },
          { q: 'How do I calculate my own payback estimate?', a: 'Combine your local hardware price and sun exposure data from the sizing guide with your own specific electricity rate — this site provides the market data but can\'t calculate your personal number without your rate.' },
          { q: 'Is this page\'s "worth it" answer updated regularly?', a: 'Yes — it\'s on a 6-month refresh cycle given that hardware pricing and the China export-tax situation are both actively moving factors.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Is Balcony Solar Worth It in 2026?',
      description: 'Is balcony solar worth it in 2026? An honest, country-aware breakdown of what actually determines payback — not a generic yes, with rising hardware costs factored in.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/balcony-solar-payback-worth-it-2026',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Prospective balcony solar buyers weighing whether the investment makes sense' },
      about: ['Balcony solar ROI', 'China PV export tax', 'Payback period'],
    },
  },
};
