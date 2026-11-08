// Affiliate banner pilot: shared types. Brief: affiliate-banner-pilot-brief-2026-11-08.md (Hans), docs/affiliate-banner-pilot.md.
// Banners are plain product links: no affiliate tag, no commission, no payment (see AFFILIATE_BANNER_DISCLOSURE).
import type { Language } from '@/translations'

export type BannerLocale = Language

export type Market = 'us' | 'de' | 'fr' | 'jp' | 'es' | 'br' | 'pt' | 'kr' | 'cn' | 'ae' | 'global'

/** none = plain link (today). pending = application sent. live = real affiliate link; only then does the injection point act. */
export type AffiliateStatus = 'none' | 'pending' | 'live'

export type BannerFormat = 'single' | 'compare'
/** 1 = primary merchant only, 3 = primary plus two more in the market's order. */
export type MerchantCount = 1 | 3
export type BannerCell = 'A1' | 'A3' | 'B1' | 'B3'
/** AP1 after intro/decision guide, AP2 after first compare table (fallback: mid-article), AP3 end of article before related links. */
export type BannerPlacement = 'AP1' | 'AP2' | 'AP3'

export type BannerCategory =
  | 'gpu' | 'mini-pc' | 'laptop' | 'mac' | 'cloud-gpu' | 'nas' | 'router-hub' | 'solar' | 'software' | 'vpn' | 'monitor' | 'sbc' | 'other'

export interface MerchantLink {
  /** Display name of the store, typeset as a chip (no logo, see brief 6.1c). */
  vendor: string
  url: string
  market: Market
  currency: string
  priceRange?: string
  /** ISO date. A price is only shown when this is at most 30 days old. */
  verifiedAt?: string
  affiliateStatus: AffiliateStatus
  /** Swappable once a merchant partner supplies official assets. Not used in the pilot. */
  logo?: { src: string; alt: string }
}

export interface BannerCopy {
  headline: string
  reason: string
  /** Short label for compare options, e.g. 'Budget pick'. */
  bestFor?: string
}

export interface BannerOffer {
  id: string
  category: BannerCategory
  productKeys: string[]
  copy: Record<BannerLocale, BannerCopy>
  /** Ordered per locale: first = primary. */
  merchantsByLocale: Record<BannerLocale, MerchantLink[]>
}

export interface BannerAssignment {
  /** English path, e.g. /power-local-llm/best-gpus-for-local-llms. All 9 locale versions share the arm. */
  pageGroup: string
  cell: BannerCell
  placement: BannerPlacement
  offerIds: string[]
  phase: number
}

export const CELL_FORMAT: Record<BannerCell, BannerFormat> = { A1: 'single', A3: 'single', B1: 'compare', B3: 'compare' }
export const CELL_MERCHANTS: Record<BannerCell, MerchantCount> = { A1: 1, A3: 3, B1: 1, B3: 3 }
