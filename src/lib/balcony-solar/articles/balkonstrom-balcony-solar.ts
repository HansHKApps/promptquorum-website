// Slug: balkonstrom-balcony-solar
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
    title: 'balkonstrom.com: Balcony Solar Company Profile',
    seoTitle: 'balkonstrom.com Balcony Solar Company Profile',
    metaDescription: 'Company profile for balkonstrom.com: history, ownership, and product range in the balcony solar market.',
    publishDate: '2026-07-19',
    dateModified: '2026-07-19',
    audience: 'Readers researching balkonstrom.com as a company',
    // No cross-link requirement specified for this profile in Phase 1.
    sections: {
      snapshot: { title: 'balkonstrom.com: Company Snapshot', image: '/images/balkonstrom-balcony-solar-snapshot-en.svg', imageCaption: 'Uettingen, Bavaria, Germany; GmbH registered August 2023, founded by two brothers from the Würzburg district.' },
      timeline: { title: 'Timeline', image: '/images/balkonstrom-balcony-solar-timeline-en.svg', imageCaption: 'GmbH registration date is the only firmly registry-confirmed date; an earlier informal-start claim (2021) is unverified.' },
      lineup: { title: 'Kit Lineup (Output)', image: '/images/balkonstrom-balcony-solar-lineup-en.svg', imageCaption: 'System output per bundle, as officially listed, paired with named battery hardware.' },
      markets: { title: 'Confirmed Market', image: '/images/balkonstrom-balcony-solar-markets-en.svg', imageCaption: 'Germany confirmed with a physical Uettingen showroom; Austria is claimed but not independently confirmed in this research.' },
      position: { title: 'Where balkonstrom.com Sits', image: '/images/balkonstrom-balcony-solar-position-en.svg', imageCaption: 'Sources TÜV-certified panels and third-party storage; commissions custom "Made in Germany" DC cables from a named supplier.' },
      partners: { title: 'Confirmed Component Suppliers', image: '/images/balkonstrom-balcony-solar-partners-en.svg', imageCaption: 'Named directly on balkonstrom.com’s own product listings.' },
    },
  },
}
