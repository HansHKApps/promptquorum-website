// Slug: apsystems-microinverter-balcony-solar
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
    title: 'APsystems: Balcony Solar Microinverter Company Profile',
    seoTitle: 'APsystems Balcony Solar Microinverter Profile',
    metaDescription: 'Company profile for APsystems: history, ownership, and microinverter product range for balcony solar.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching APsystems as a microinverter company',
    // No cross-link requirement specified for this profile in Phase 1.
    sections: {
      snapshot: { title: 'APsystems: Company Snapshot', image: '/images/apsystems-microinverter-balcony-solar-snapshot-en.svg', imageCaption: 'Founded 2010 in Silicon Valley as APS, rebranded APsystems in 2015; listed on the Shanghai STAR Market since June 2022.' },
      timeline: { title: 'Timeline', image: '/images/apsystems-microinverter-balcony-solar-timeline-en.svg', imageCaption: 'Founding, rebrand, and stock-exchange listing dates verified via Wikipedia and PV trade press.' },
      lineup: { title: 'EZ1 Series Output', image: '/images/apsystems-microinverter-balcony-solar-lineup-en.svg', imageCaption: 'Rated output per officially listed EZ1 variant; the 799W option is sized to fit Germany’s 800W cap.' },
      markets: { title: 'Localized Markets', image: '/images/apsystems-microinverter-balcony-solar-markets-en.svg', imageCaption: 'Countries with dedicated localized EZ1 marketing pages on APsystems’ EMEA site.' },
      position: { title: 'Where APsystems Sits', image: '/images/apsystems-microinverter-balcony-solar-position-en.svg', imageCaption: 'EZ1 is a distinct DIY plug-in line, separate from APsystems’ commercial-scale DS3/QT2 microinverters.' },
      positionNote: { title: 'Bankability Ranking', image: '/images/apsystems-microinverter-balcony-solar-position-note-en.svg', imageCaption: 'Sinovoltaics’ 2025 "most bankable" ranking was reported via APsystems’ own press page — a real third-party ranking, self-published.' },
    },
  },
}
