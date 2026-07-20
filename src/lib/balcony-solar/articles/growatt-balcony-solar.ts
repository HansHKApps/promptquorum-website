// Slug: growatt-balcony-solar
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
    title: 'Growatt: Balcony Solar Company Profile',
    seoTitle: 'Growatt Balcony Solar Company Profile',
    metaDescription: 'Company profile for Growatt: history, ownership, and product range in the balcony solar market.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching Growatt as a company',
    // No cross-link requirement specified for this profile in Phase 1.
    sections: {
      snapshot: { title: 'Growatt: Company Snapshot', image: '/images/growatt-balcony-solar-snapshot-en.svg', imageCaption: 'Founded 2011 in Shenzhen; a 15-year inverter manufacturer, not a balcony-solar startup. Privately held, Sequoia-backed.' },
      timeline: { title: 'Balcony Product Timeline', image: '/images/growatt-balcony-solar-timeline-en.svg', imageCaption: 'NEO microinverter launch and the NEO+NOAH combined solution announcement, per press coverage.' },
      lineup: { title: 'NOAH Battery Capacity Range', image: '/images/growatt-balcony-solar-lineup-en.svg', imageCaption: 'Base and maximum expandable capacity as officially listed.' },
      markets: { title: 'Confirmed Market', image: '/images/growatt-balcony-solar-markets-en.svg', imageCaption: 'Germany is the only country with confirmed certification (VDE-AR-N 4105) and documented retail availability found in this research.' },
      position: { title: 'Where Growatt Sits', image: '/images/growatt-balcony-solar-position-en.svg', imageCaption: 'Growatt is primarily an inverter manufacturer whose NEO line extends into the balcony/microinverter niche.' },
      positionNote: { title: 'Residential Inverter Ranking', image: '/images/growatt-balcony-solar-position-note-en.svg', imageCaption: 'Growatt’s own claim ("global No. 1 residential PV inverter") is company-reported; independent coverage frames it differently ("third largest overall") — different scopes, shown separately here.' },
    },
  },
}
