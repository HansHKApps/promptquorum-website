// Slug: zendure-balcony-solar
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
    title: 'Zendure: Balcony Solar Company Profile',
    seoTitle: 'Zendure Balcony Solar Company Profile',
    metaDescription: 'Company profile for Zendure: history, ownership, product range, and role in the balcony solar market.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching Zendure as a company, distinct from buying-comparison intent',
    // TODO (internal-linking phase): reciprocal link to ecoflow-vs-anker-vs-zendure-balcony-solar (buyer-intent comparison); this page stays research-intent and must not duplicate that page's buying-decision framing.
    sections: {
      snapshot: { title: 'Zendure: Company Snapshot', image: '/images/zendure-balcony-solar-snapshot-en.svg', imageCaption: 'EU office opened in Düsseldorf, Germany in February 2024; SolarFlow launched as a dedicated balcony-storage line in March 2023.' },
      timeline: { title: 'SolarFlow Timeline', image: '/images/zendure-balcony-solar-timeline-en.svg', imageCaption: 'Launch and expansion dates from Zendure’s own press releases.' },
      lineup: { title: 'SolarFlow Lineup (Battery Capacity)', image: '/images/zendure-balcony-solar-lineup-en.svg', imageCaption: 'Per-unit battery capacity as officially listed; several models stack to higher totals.' },
      markets: { title: 'Confirmed Markets (Mix Series, Apr 2026)', image: '/images/zendure-balcony-solar-markets-en.svg', imageCaption: 'Markets confirmed directly in Zendure’s own launch press release.' },
      position: { title: 'Where Zendure Sits', image: '/images/zendure-balcony-solar-position-en.svg', imageCaption: 'Like Anker and EcoFlow, Zendure makes its own battery hardware and publishes an official local-control SDK.' },
      localControl: { title: 'zenSDK: What’s Official vs. Community', image: '/images/zendure-balcony-solar-local-control-en.svg', imageCaption: 'The SDK itself is officially published by Zendure; the Home Assistant integrations built on top of it are community projects.' },
    },
  },
}
