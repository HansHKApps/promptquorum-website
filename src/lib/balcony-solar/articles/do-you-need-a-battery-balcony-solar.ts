// Slug: do-you-need-a-battery-balcony-solar
// BSOL-18 — Tier 4, explainer, evergreen. Routes to BSOL-03.
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Balcony Solar Foundations',
    title: 'Do You Need a Battery for Balcony Solar?',
    seoTitle: 'Balcony Solar Battery: Do You Actually Need One?',
    intro: 'A battery is the single most common add-on question balcony solar buyers ask, and the honest answer is: usually not required, and not always worth it even when it\'s available. The decision comes down to one number you can actually check.',
    metaDescription: 'Do you need a battery for balcony solar? Usually not — the honest answer depends on one number: the gap between your utility\'s export credit and import rate.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    audience: 'Balcony solar buyers deciding whether to add battery storage',
    primaryTerm: 'do I need a balcony solar battery',
    targetKeywords: ['do i need a battery for balcony solar', 'balcony solar without battery', 'is a balcony solar battery worth it', 'balcony solar battery necessary'],
    leadAnswerBlock: '**No, a battery is not required for balcony solar to work — the system functions perfectly well without one, simply exporting unused surplus to the grid at whatever your utility\'s rate is.** Whether adding one is *worth it* is a separate, narrower question: current guides suggest a battery pays off specifically when your utility credits exported power significantly less than it charges for imported power, roughly a $0.15/kWh gap or more.',
    quickAnswerTop: {
      en: {
        question: 'Do I need a battery for balcony solar?',
        answer: 'No — balcony solar works fine without one. A battery is an optional add-on that lets you store daytime surplus for evening use instead of exporting it to the grid. Whether it\'s worth the extra cost depends on your specific utility\'s export credit relative to your import rate: guides suggest it becomes worthwhile around a $0.15/kWh gap or more.',
        bullets: [
          'Balcony solar functions completely without a battery — it\'s an optional add-on, not a requirement',
          'Without a battery, unused surplus exports to the grid, typically at low or no compensation',
          'A battery pays off specifically when your export credit is meaningfully lower than your import rate',
          'If your utility credits exports close to full retail rate, a battery adds cost without adding much value',
          'Battery-equipped kits often face additional legal/registration restrictions a panel-only kit doesn\'t — check this before assuming a battery is a simple add-on',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'The Short Answer', anchor: '#short-answer' },
      { label: 'The One Number That Actually Matters', anchor: '#the-one-number' },
      { label: 'What a Battery Actually Adds', anchor: '#what-it-adds' },
      { label: 'What a Battery Doesn\'t Solve', anchor: '#what-it-doesnt-solve' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A battery is not required — balcony solar works completely fine without one.',
          'Without a battery, surplus power beyond your active usage exports to the grid, typically at low or no compensation.',
          'A battery pays off specifically when your utility\'s export credit is meaningfully lower than your import rate — guides suggest roughly a $0.15/kWh gap or more.',
          'If your utility credits exports close to the full retail rate, a battery adds cost without meaningfully improving your economics.',
          'Battery-equipped kits often face additional legal or registration restrictions that a panel-only kit doesn\'t — this is a real factor beyond the pure economics question.',
          'The decision is genuinely about your specific utility\'s rate structure, not a universal yes or no.',
        ],
      },
      shortAnswer: {
        id: 'short-answer',
        title: 'The Short Answer',
        content: [
          '**No, you don\'t need a battery — balcony solar generates and feeds power into your home\'s wiring regardless of whether storage is present.** A battery changes what happens to *surplus* power specifically — power your panel generates beyond what your home is actively using at that moment.',
        ],
      },
      theOneNumber: {
        id: 'the-one-number',
        title: 'The One Number That Actually Matters',
        content: [
          '**Check the gap between what your utility pays you for exported solar power and what it charges you for imported power — current guides suggest a battery becomes worthwhile around a $0.15/kWh gap or more.** If your utility credits exports close to the full retail import rate, there\'s little for a battery to capture, since you\'re already getting most of the value from surplus power without one.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A balcony solar battery is worth adding only when your utility pays significantly less for exported power than it charges for imported power.' },
          { type: 'plain-terms', text: 'If your utility basically pays you full price for extra solar power, a battery is solving a problem you don\'t have.' },
        ],
      },
      whatItAdds: {
        id: 'what-it-adds',
        title: 'What a Battery Actually Adds',
        content: [
          '**A battery lets you shift daytime surplus to evening use, which matters most if your household draws more power after sunset than during the day — a common pattern for people who work outside the home.** See the [battery buyer\'s guide](/balcony-solar/best-balcony-solar-batteries-2026) for current hardware options and sizing guidance if you\'ve confirmed the economics work for your situation.',
        ],
      },
      whatItDoesntSolve: {
        id: 'what-it-doesnt-solve',
        title: 'What a Battery Doesn\'t Solve',
        content: [
          '**A battery doesn\'t turn balcony solar into a whole-home power source — it still only stores and redistributes the relatively small amount of surplus a one-or-two-panel system generates, not enough to meaningfully cover high-draw appliances or extended outages.** It also often adds legal complexity: in some markets, including Germany, storage-equipped balcony systems fall outside the simplified regime that covers standard plug-in units and require full grid-operator registration instead.',
        ],
        callouts: [
          { type: 'warning', text: 'Check your country\'s specific rules for storage-equipped systems before assuming a battery is a simple drop-in addition — the legal picture can be meaningfully different from a panel-only kit.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Will my balcony solar system work without a battery?', a: 'Yes, completely — the panel and micro-inverter function normally without one. A battery only changes what happens to surplus power beyond your active usage.' },
          { q: 'What happens to extra power if I don\'t have a battery?', a: 'It typically exports to the grid at whatever rate your utility offers for exported solar, which is often low or zero compensation depending on your specific utility.' },
          { q: 'How do I know if a battery is worth it for me?', a: 'Compare your utility\'s export credit rate to your import rate. Current guides suggest a battery becomes worthwhile around a $0.15/kWh gap or more — check your specific utility\'s rate structure rather than assuming.' },
          { q: 'Does adding a battery make balcony solar illegal in some places?', a: 'Not illegal, but it can add legal complexity — some markets, including Germany, exclude storage-equipped balcony systems from the simplified regime that covers standard plug-in units.' },
          { q: 'Can a battery power my home during an outage?', a: 'Not meaningfully for most balcony solar setups — the storage capacity is sized around daily surplus from a one-or-two-panel system, not backup power for extended outages.' },
          { q: 'Is a battery a good first purchase for balcony solar?', a: 'Usually not — most guides recommend starting with a panel-only kit, confirming your actual usage pattern and utility rate structure, and adding a battery later if the economics support it.' },
          { q: 'Do all balcony solar batteries work the same way?', a: 'No — capacity, cloud vs. local monitoring, and legal status can all vary significantly by brand and model. See the dedicated battery buyer\'s guide for a verified per-brand comparison.' },
          { q: 'What\'s a typical battery size for a balcony solar setup?', a: 'Sizing depends on your panel wattage and daily surplus generation rather than a fixed number — no vendor publishes a formal sizing formula. See the [sizing and payback guide](/balcony-solar/balcony-solar-sizing-yield-payback) for verified capacity guidance by system size.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Do You Need a Battery for Balcony Solar?',
      description: 'Do you need a battery for balcony solar? Usually not — the honest answer depends on one number: the gap between your utility\'s export credit and import rate.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/do-you-need-a-battery-balcony-solar',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Balcony solar buyers deciding whether to add battery storage' },
      about: ['Balcony solar battery', 'Energy storage economics', 'Export credit'],
    },
  },
};
