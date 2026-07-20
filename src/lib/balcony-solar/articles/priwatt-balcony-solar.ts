// Slug: priwatt-balcony-solar
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
    title: 'priwatt: Balcony Solar Company Profile',
    seoTitle: 'priwatt Balcony Solar Company Profile',
    metaDescription: 'Company profile for priwatt: history, ownership, and product range in the balcony solar market.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching priwatt as a company',
    // No cross-link requirement specified for this profile in Phase 1.
    sections: {
      snapshot: { title: 'priwatt: Company Snapshot', image: '/images/priwatt-balcony-solar-snapshot-en.svg', imageCaption: 'Leipzig, Germany; founded 2020 by three co-founders (Lukas Hoffmeier, Niklas Hoffmeier, Kay Theuer).' },
      timeline: { title: 'Timeline', image: '/images/priwatt-balcony-solar-timeline-en.svg', imageCaption: 'Founding date and growth confirmed via priwatt’s own About page and a founder interview.' },
      lineup: { title: 'Kit Lineup (Panel Count)', image: '/images/priwatt-balcony-solar-lineup-en.svg', imageCaption: 'Panel configuration per kit, as officially listed; all paired with GoodWe inverter/storage hardware.' },
      markets: { title: 'Confirmed Markets', image: '/images/priwatt-balcony-solar-markets-en.svg', imageCaption: 'Germany is primary; Austria and Switzerland confirmed as shipping destinations via priwatt’s own FAQ.' },
      position: { title: 'Where priwatt Sits', image: '/images/priwatt-balcony-solar-position-en.svg', imageCaption: 'Confirmed directly by the founder: priwatt sources modules and inverters externally and assembles/sells DIY kits.' },
      partners: { title: 'Confirmed Storage Partner', image: '/images/priwatt-balcony-solar-partners-en.svg', imageCaption: 'GoodWe is the inverter/battery brand named consistently across priwatt’s current product listings.' },
    },
  },
}
