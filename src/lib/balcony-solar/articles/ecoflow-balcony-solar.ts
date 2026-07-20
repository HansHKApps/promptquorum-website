// Slug: ecoflow-balcony-solar
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
    title: 'EcoFlow: Balcony Solar Company Profile',
    seoTitle: 'EcoFlow Balcony Solar Company Profile',
    metaDescription: 'Company profile for EcoFlow: history, ownership, product range, and role in the balcony solar market.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching EcoFlow as a company, distinct from buying-comparison intent',
    // TODO (internal-linking phase): reciprocal link to ecoflow-vs-anker-vs-zendure-balcony-solar (buyer-intent comparison); this page stays research-intent and must not duplicate that page's buying-decision framing.
    sections: {
      snapshot: { title: 'EcoFlow: Company Snapshot', image: '/images/ecoflow-balcony-solar-snapshot-en.svg', imageCaption: 'Founded 2017 in Shenzhen by four co-founders; privately held, reportedly weighing a US IPO (December 2025 reports).' },
      timeline: { title: 'EcoFlow Timeline', image: '/images/ecoflow-balcony-solar-timeline-en.svg', imageCaption: 'Founding year and product-line names verified; exact launch dates for PowerStream/STREAM were not confirmed on a primary source.' },
      lineup: { title: 'STREAM Lineup (AC Output)', image: '/images/ecoflow-balcony-solar-lineup-en.svg', imageCaption: 'Max AC output as officially listed; battery capacity scales separately by configuration.' },
      markets: { title: 'US Legalization, State by State', image: '/images/ecoflow-balcony-solar-markets-en.svg', imageCaption: 'States with enacted plug-in-solar legislation (July 2026) where EcoFlow is a named, cited brand.' },
      position: { title: 'Where EcoFlow Sits', image: '/images/ecoflow-balcony-solar-position-en.svg', imageCaption: 'EcoFlow designs its own microinverter and battery hardware and sells direct — same dual role as Anker SOLIX.' },
      certification: { title: 'Certification Claims', image: '/images/ecoflow-balcony-solar-certification-en.svg', imageCaption: 'VDE-AR-N 4105 and TÜV Rheinland are EcoFlow’s own stated claims — not independently re-verified against the certifying bodies in this research pass.' },
    },
  },
}
