// Slug: balcony-solar-global-market-overview
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
    title: 'Balcony Solar Global Market Overview (2026): Germany, EU, UK, US, and Asia-Pacific',
    seoTitle: 'Balcony Solar Global Market Overview (2026)',
    metaDescription: 'Region-by-region balcony solar market sizing for Germany, the EU, UK, US, and Asia-Pacific, with segment and driver breakdowns.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers comparing balcony solar market size and adoption across regions',
    // TODO (internal-linking phase): add 'see also' links to trends-2027 category (Japan/China/Brazil/Greece/Gulf status pages) instead of duplicating that content here.
    sections: {
      snapshot: { title: 'Global Market at a Glance', image: '/images/balcony-solar-global-market-overview-snapshot-en.svg', imageCaption: 'Germany remains the only market with a mature, registry-verified installed base; every other region is earlier-stage.' },
      regionalStatus: { title: 'Regional Maturity', image: '/images/balcony-solar-global-market-overview-regional-status-en.svg', imageCaption: 'Regulatory status verified per region — adoption figures are only reliably available for Germany.' },
      germanyDetail: { title: 'Germany: Registration Growth', image: '/images/balcony-solar-global-market-overview-germany-detail-en.svg', imageCaption: 'Bundesnetzagentur MaStR data — roughly 430,000 new registrations added in 2025 alone.' },
      usStates: { title: 'US: States With Enacted Legislation', image: '/images/balcony-solar-global-market-overview-us-states-en.svg', imageCaption: 'Confirmed enacted as of July 2026 — roughly 30 additional states have introduced but not passed bills.' },
      ukStatus: { title: 'UK: Early-Stage, Not Yet Mass-Market', image: '/images/balcony-solar-global-market-overview-uk-status-en.svg', imageCaption: 'Legalized via BS 7671 Amendment 4 (in force April 2026); five UK safety bodies urged caution before mass rollout.' },
      driversHeadwinds: { title: 'Cross-Region Drivers & Headwinds', image: '/images/balcony-solar-global-market-overview-drivers-headwinds-en.svg', imageCaption: 'Patterns repeated across the regions actually researched — not a global generalization beyond these markets.' },
    },
  },
}
