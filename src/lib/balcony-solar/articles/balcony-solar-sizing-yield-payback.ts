// Slug: balcony-solar-sizing-yield-payback
// BSOL-09 — Tier 2 sizing/calculator, semi_annual (reverted from evergreen — core
// value is current price+yield data, which evergreen would strip out).
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";
import { COUNTRY_DATA } from "@/lib/shared/balcony-solar-country-data";

const yieldRows = COUNTRY_DATA.map((c) => ({
  country: c.country,
  avgYield: c.avgYieldKwhPerKwp ? `${c.avgYieldKwhPerKwp} kWh/kWp` : 'Not independently verified',
  note: c.avgYieldNote || '—',
}));

const paybackRows = COUNTRY_DATA.map((c) => ({
  country: c.country,
  typicalPrice: c.typicalPrice,
  priceConfidence: c.typicalPriceVerified ? 'Verified' : 'Unverified — treat as approximate',
}));

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-02',
    last_full_refresh: '2026-07-02',
    theme: 'Balcony Solar Foundations',
    title: 'Balcony Solar Sizing, Yield & Payback: What to Expect by Country',
    seoTitle: 'Balcony Solar Sizing & Payback Calculator (2026)',
    intro: 'How much power you need, how much a panel actually produces in your climate, and how long it takes to pay for itself are three separate questions with three separate answers — and all three depend heavily on where you live, not just the hardware you buy.',
    metaDescription: 'Balcony solar sizing, yield, and payback estimates by country — verified pricing and a Germany/Cyprus yield comparison as a reference point, updated July 2026.',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    audience: 'Balcony solar buyers estimating system size, expected output, and payback timeline',
    primaryTerm: 'balcony solar payback',
    targetKeywords: ['balcony solar payback', 'balcony solar yield by location', 'how much power does balcony solar produce', 'balcony solar sizing guide'],
    leadAnswerBlock: '**A sunnier climate can produce meaningfully more solar yield than a northern-European baseline — the verified reference comparison is Germany (Stuttgart) at roughly 1,003 kWh/kWp per year versus Cyprus at roughly 1,646 kWh/kWp, about 64% more.** Payback timelines depend on both that yield difference and local hardware pricing, which varies enough by country that a single global payback number would be misleading — use the country tables below as your starting point.',
    quickAnswerTop: {
      en: {
        question: 'How much power will my balcony solar system actually produce, and when does it pay for itself?',
        answer: 'Production depends primarily on your local solar yield (kWh per kWp installed per year) and how well your usage pattern lines up with daylight hours. The one directly verified comparison point is Germany at roughly 1,003 kWh/kWp versus Cyprus at roughly 1,646 kWh/kWp — about 64% more in the sunnier market. Payback timeline combines that yield difference with your local hardware price and electricity rate, both of which vary by country.',
        bullets: [
          'Verified yield reference: Germany ~1,003 kWh/kWp/year vs. Cyprus ~1,646 kWh/kWp/year',
          'Most other countries in this guide don\'t yet have an independently verified yield figure — treat unlisted countries\' yield as unknown, not assumed similar',
          'Panel wattage and inverter output limit are two different numbers — check both before buying',
          'A battery affects payback by letting you use more of your own surplus rather than exporting it at low or no credit',
          'Hardware pricing is verified for some countries and explicitly flagged unverified for others — check the confidence flag in the table before treating a number as solid',
        ],
        updatedDate: '2026-07-02',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'How Much Power Do You Need?', anchor: '#how-much-power' },
      { label: 'Yield by Location', anchor: '#yield-by-location' },
      { label: 'Panel Wattage vs. Inverter Limit', anchor: '#wattage-vs-limit' },
      { label: 'Payback Estimate by Country', anchor: '#payback-by-country' },
      { label: 'With vs. Without Battery', anchor: '#with-vs-without-battery' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'The one directly verified yield comparison is Germany (~1,003 kWh/kWp/year) vs. Cyprus (~1,646 kWh/kWp/year) — about 64% more yield in the sunnier market.',
          'Most other countries in this cluster do not yet have an independently verified yield figure — this guide does not assert a specific number for them.',
          'Panel wattage (what the panel can generate) and inverter output limit (what the inverter is allowed to push into your outlet) are different numbers — check both.',
          'Hardware pricing is verified with a source for most countries here, but explicitly flagged unverified for Brazil, Mexico, and the Gulf/MENA region — treat those as approximate.',
          'A battery improves payback economics specifically when your utility credits exported surplus significantly less than it charges for imported power.',
          'This page is on a 6-month refresh cycle because its core value — current price and yield data — goes stale faster than a purely conceptual explainer would.',
        ],
      },
      howMuchPower: {
        id: 'how-much-power',
        title: 'How Much Power Do You Need?',
        content: [
          '**Size your system to your baseline continuous electricity use — devices that run all the time, like a refrigerator, router, or standby electronics — rather than your peak usage, since balcony solar is not designed to power high-draw appliances on demand.** Most balcony systems fall in a similar general wattage class across markets; the meaningful variable isn\'t which wattage tier to buy but how much sun exposure your specific mounting location gets.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Size balcony solar to your baseline continuous electricity use, not your peak demand.' },
          { type: 'plain-terms', text: 'Think about what\'s always drawing power in your home — the fridge, the router, standby devices — that\'s what a balcony system is realistically offsetting.' },
        ],
      },
      yieldByLocation: {
        id: 'yield-by-location',
        title: 'Yield by Location',
        content: [
          '**Solar yield — how much electricity a given installed capacity actually produces over a year — varies significantly by latitude and local climate, and only one comparison point in this dataset is independently verified: Germany against Cyprus.**',
        ],
        rows: yieldRows,
        columns: ['country', 'avgYield', 'note'],
        tableFormat: true,
      },
      wattageVsLimit: {
        id: 'wattage-vs-limit',
        title: 'Panel Wattage vs. Inverter Limit',
        content: [
          '**Your panel\'s rated wattage and your micro-inverter\'s output limit are two separate numbers, and the inverter\'s limit — often tied to your local regulatory power cap — is usually what actually governs how much power reaches your outlet, not the panel\'s peak rating.** A panel can be rated higher than your inverter allows through; this is normal and often intentional, since panels rarely produce their full rated output simultaneously with ideal conditions.',
          'Which micro-inverter you choose affects more than wattage, too — it determines whether your production and payback data stay on your own network or route through the manufacturer\'s cloud by default. If you\'re already comparing inverter output limits, it costs nothing extra to also check local-API support; see [running balcony solar without the cloud](/balcony-solar/home-assistant-balcony-solar-no-cloud) for what to look for.',
        ],
      },
      paybackByCountry: {
        id: 'payback-by-country',
        title: 'Payback Estimate by Country',
        content: [
          '**Payback timeline depends on hardware price, local electricity rates, and your yield — this table provides the hardware price component with a confidence flag; combine it with your local electricity rate and the yield data above for a real estimate, since this page cannot compute a precise per-household number without knowing your specific rate and usage.**',
        ],
        rows: paybackRows,
        columns: ['country', 'typicalPrice', 'priceConfidence'],
        tableFormat: true,
      },
      withVsWithoutBattery: {
        id: 'with-vs-without-battery',
        title: 'With vs. Without Battery',
        content: [
          '**Adding a battery improves payback economics specifically when your utility pays significantly less for exported surplus than it charges for imported power — current guides suggest this becomes worthwhile around a $0.15/kWh gap or more.** Without a battery, any daytime surplus beyond your active usage typically exports to the grid at low or no compensation; see the [battery buyer\'s guide](/balcony-solar/best-balcony-solar-batteries-2026) for current hardware options and their state-legality constraints in the US specifically.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'How much more solar yield does a sunny climate produce than Germany?', a: 'The one independently verified comparison is Cyprus at roughly 64% more annual yield per installed kWp than Germany (Stuttgart reference) — 1,646 kWh/kWp versus 1,003 kWh/kWp.' },
          { q: 'Do you have yield data for every country in this guide?', a: 'No — only the Germany/Cyprus comparison is independently verified in this dataset. Other countries\' yield figures were not obtained this research pass and are marked accordingly rather than estimated.' },
          { q: 'What\'s the difference between panel wattage and inverter limit?', a: 'Panel wattage is what the panel can generate under ideal conditions; the inverter limit is what\'s actually allowed to reach your outlet, often capped by local regulation. The inverter limit usually governs real-world output more than the panel\'s peak rating.' },
          { q: 'How long does balcony solar take to pay for itself?', a: 'This depends on your hardware price, local electricity rate, and yield — all three vary by country. Use the price table above alongside your local electricity rate for a realistic estimate rather than relying on a single global figure.' },
          { q: 'Does a battery always improve payback?', a: 'No — it depends on your utility\'s export credit relative to your import rate. If your utility credits exports close to the full retail rate, a battery adds cost without meaningfully improving payback.' },
          { q: 'Which countries have the least reliable pricing data in this guide?', a: 'Brazil, Mexico, and the Gulf/MENA region are explicitly flagged as having unverified typical pricing — no reliable local-currency price for a small plug-in kit was found in the underlying research for those markets.' },
          { q: 'Should I size my system to my peak electricity usage?', a: 'No — size to your baseline continuous usage (always-on devices like a fridge or router), since balcony solar is not designed to meet peak demand from high-draw appliances.' },
          { q: 'Why is this page updated more often than some other articles in this guide?', a: 'Its core value is current price and yield data, which goes stale faster than purely conceptual content — it\'s on a 6-month refresh cycle for that reason.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Balcony Solar Sizing, Yield & Payback: What to Expect by Country',
      description: 'Balcony solar sizing, yield, and payback estimates by country — verified pricing and a Germany/Cyprus yield comparison as a reference point, updated July 2026.',
      datePublished: '2026-07-02',
      dateModified: '2026-07-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      url: 'https://www.promptquorum.com/balcony-solar/balcony-solar-sizing-yield-payback',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Balcony solar buyers estimating system size, expected output, and payback timeline' },
      about: ['Balcony solar sizing', 'Solar yield', 'Payback period', 'kWh per kWp'],
    },
  },
};
