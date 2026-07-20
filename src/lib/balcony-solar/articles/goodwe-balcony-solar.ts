// Slug: goodwe-balcony-solar
// Phase 1 scaffold (2026-07-19) — structure/frontmatter only, no body content yet.
// Noindex + sitemap-excluded via PENDING_SLUGS in published.ts until content,
// translation, and internal-linking phases land (see TIER 6 in slugs.ts).
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-19',
    theme: 'Balcony Solar Money Pages',
    title: 'GoodWe: Balcony Solar Company Profile',
    seoTitle: 'GoodWe Balcony Solar Company Profile',
    metaDescription: 'Company profile for GoodWe: history, ownership, and product range in the balcony solar market.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching GoodWe as a company',
    // No cross-link requirement specified for this profile in Phase 1.
    sections: {
      snapshot: { title: 'GoodWe: Company Snapshot', image: '/images/goodwe-balcony-solar-snapshot-en.svg', imageCaption: 'Founded 2010 in Suzhou, China; listed on the Shanghai STAR Market since September 2020. Balcony products sold under a separate consumer brand, PVBM.' },
      timeline: { title: 'Timeline', image: '/images/goodwe-balcony-solar-timeline-en.svg', imageCaption: 'Founding and listing dates verified; Wood Mackenzie ranking is an independent, non-self-reported source.' },
      lineup: { title: 'ESA Athena Battery Capacity', image: '/images/goodwe-balcony-solar-lineup-en.svg', imageCaption: 'Base and expanded capacity as officially listed on the PVBM product page.' },
      position: { title: 'Where GoodWe Sits', image: '/images/goodwe-balcony-solar-position-en.svg', imageCaption: 'GoodWe is a large, independently-ranked inverter manufacturer whose PVBM sub-brand serves the balcony-consumer niche.' },
      ranking: { title: 'Independent Industry Ranking', image: '/images/goodwe-balcony-solar-ranking-en.svg', imageCaption: 'One of the few companies in this set with an independent (Wood Mackenzie) ranking rather than a self-reported figure.' },
      certification: { title: 'Certification Note', image: '/images/goodwe-balcony-solar-certification-en.svg', imageCaption: 'PVBM marketing cites "VDE 4110" for an 800W product; VDE-AR-N 4105 is the standard typically associated with balcony-scale feed-in — flagged here rather than stated as settled.' },
    },
  },
}
