// Balcony Solar — 4 category definitions used by the hub page.
// Each category lists its constituent article slugs (resolved against BALCONY_SOLAR_SLUG_TO_KEY).
// Localized copy lives in the hub page itself; this file only defines structure + slug membership.
//
// Categories mirror the 4 tiers from balcony-solar-article-briefs.md (BSOL-01..BSOL-20).

export interface BalconySolarCategory {
  id: string
  slug: string
  titleEn: string
  descriptionEn: string
  articleSlugs: string[]
}

export const BALCONY_SOLAR_CATEGORIES: BalconySolarCategory[] = [
  {
    id: 'hub-money',
    slug: 'hub-money',
    titleEn: 'Hub + Core Money Pages',
    descriptionEn: 'The cluster anchor and the primary buyer-intent guides: what balcony solar is, the best kits, batteries, and micro-inverters, and running it all without the cloud.',
    articleSlugs: [
      'what-is-balcony-solar',
      'best-balcony-solar-kits-2026',
      'best-balcony-solar-batteries-2026',
      'best-balcony-solar-microinverters',
      'home-assistant-balcony-solar-no-cloud',
    ],
  },
  {
    id: 'decision-howto',
    slug: 'decision-howto',
    titleEn: 'Decision & How-To',
    descriptionEn: 'Mid-funnel guides: balcony vs rooftop, installation, registration, sizing and payback, and mounting.',
    articleSlugs: [
      'balcony-vs-rooftop-solar',
      'how-to-install-balcony-solar',
      'how-to-register-balcony-solar',
      'balcony-solar-sizing-yield-payback',
      'balcony-solar-mounting-guide',
    ],
  },
  {
    id: 'legislation',
    slug: 'legislation',
    titleEn: 'Legislation Moat',
    descriptionEn: 'Per-country legal status: the global tracker plus dedicated pages for the US, Germany, Spain/LatAm, Portugal/Brazil, and the Gulf/MENA region.',
    articleSlugs: [
      'is-balcony-solar-legal-country-guide',
      'balcony-solar-legal-us-states',
      'balkonkraftwerk-germany-rules',
      'balcony-solar-spain-latam',
      'balcony-solar-portugal-brazil',
      'balcony-solar-gulf-mena',
    ],
  },
  {
    id: 'long-tail',
    slug: 'long-tail',
    titleEn: 'Long-Tail & Conversion Support',
    descriptionEn: 'Brand comparisons, battery need, payback worth-it framing, and troubleshooting.',
    articleSlugs: [
      'ecoflow-vs-anker-vs-zendure-balcony-solar',
      'do-you-need-a-battery-balcony-solar',
      'balcony-solar-payback-worth-it-2026',
      'balcony-solar-not-producing-power-fixes',
    ],
  },
]
