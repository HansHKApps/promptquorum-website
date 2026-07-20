// Slug: kleines-kraftwerk-balcony-solar
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
    title: 'Kleines Kraftwerk: Balcony Solar Company Profile',
    seoTitle: 'Kleines Kraftwerk Balcony Solar Company Profile',
    metaDescription: 'Company profile for Kleines Kraftwerk: history, ownership, and product range in the balcony solar market.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching Kleines Kraftwerk as a company',
    // No cross-link requirement specified for this profile in Phase 1.
    sections: {
      snapshot: { title: 'Kleines Kraftwerk: Company Snapshot', image: '/images/kleines-kraftwerk-balcony-solar-snapshot-en.svg', imageCaption: 'Achim, Germany; founded 2022 by two friends, starting from a garage; 100% self-financed.' },
      timeline: { title: 'Timeline', image: '/images/kleines-kraftwerk-balcony-solar-timeline-en.svg', imageCaption: 'Founding story and early growth confirmed via press interviews (Weser-Kurier, Forbes AT).' },
      lineup: { title: 'Kit Lineup (Output)', image: '/images/kleines-kraftwerk-balcony-solar-lineup-en.svg', imageCaption: 'System output per kit generation, as officially listed.' },
      markets: { title: 'Confirmed Market', image: '/images/kleines-kraftwerk-balcony-solar-markets-en.svg', imageCaption: 'Germany-focused — no official Austria/Switzerland storefront was found in this research.' },
      position: { title: 'Where Kleines Kraftwerk Sits', image: '/images/kleines-kraftwerk-balcony-solar-position-en.svg', imageCaption: 'Its one proprietary product is an in-house mounting-bracket system; battery/inverter hardware is sourced from named partners.' },
      partners: { title: 'Confirmed Component Suppliers', image: '/images/kleines-kraftwerk-balcony-solar-partners-en.svg', imageCaption: 'Named directly in current product listings.' },
    },
  },
}
