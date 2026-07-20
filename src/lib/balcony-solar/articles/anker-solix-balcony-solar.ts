// Slug: anker-solix-balcony-solar
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
    title: 'Anker SOLIX: Balcony Solar Company Profile',
    seoTitle: 'Anker SOLIX Balcony Solar Company Profile',
    metaDescription: 'Company profile for Anker SOLIX: history, ownership, product range, and role in the balcony solar market.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching Anker SOLIX as a company, distinct from buying-comparison intent',
    // TODO (internal-linking phase): reciprocal link to ecoflow-vs-anker-vs-zendure-balcony-solar (buyer-intent comparison); this page stays research-intent (history/ownership/scale) and must not duplicate that page's buying-decision framing.
    sections: {
      snapshot: { title: 'Anker SOLIX: Company Snapshot', image: '/images/anker-solix-balcony-solar-snapshot-en.svg', imageCaption: 'Anker Innovations, founded 2011, Shenzhen-Changsha, China; publicly listed on the Shenzhen Stock Exchange since 2020.' },
      timeline: { title: 'SOLIX Timeline', image: '/images/anker-solix-balcony-solar-timeline-en.svg', imageCaption: 'Company-confirmed launch date for the SOLIX brand; product lineup dates from press coverage.' },
      lineup: { title: 'Solarbank Lineup (Capacity)', image: '/images/anker-solix-balcony-solar-lineup-en.svg', imageCaption: 'Battery capacity as officially listed per model — output figures vary by market and are not shown here.' },
      markets: { title: 'Confirmed Markets', image: '/images/anker-solix-balcony-solar-markets-en.svg', imageCaption: 'Grid-connection certificates confirmed for these markets; US sale is confirmed absent.' },
      position: { title: 'Where Anker SOLIX Sits', image: '/images/anker-solix-balcony-solar-position-en.svg', imageCaption: 'Anker SOLIX is unusual in spanning two layers — it makes its own battery hardware and sells direct.' },
      certification: { title: 'Certification Status', image: '/images/anker-solix-balcony-solar-certification-en.svg', imageCaption: 'VDE-AR-N 4105 grid-connection certificates confirmed for Germany; no UL 1741 listing found for US balcony products.' },
    },
  },
}
