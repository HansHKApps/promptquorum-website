// Umami events for affiliate banners: aff_banner_view, aff_banner_click. Cookieless, anonymous, no free text.
// Banners do NOT fire `affiliate_click` (kept for in-text links so cannibalization stays measurable).
import { affiliateDestinationDomain } from '@/lib/tracking/affiliate'
import { clusterFromPath, deviceKind, localeFromPath } from '@/lib/tracking/promo'
import type { BannerCell, BannerCategory, BannerFormat, BannerPlacement, MerchantCount, Market } from '@/lib/affiliate-banners/types'

export type AffBannerEvent = 'aff_banner_view' | 'aff_banner_click'

export interface AffBannerContext {
  bannerId: string
  cell: BannerCell
  format: BannerFormat
  merchantCount: MerchantCount
  placement: BannerPlacement
  phase: number
  category: BannerCategory
}

export interface AffBannerClick {
  vendor: string
  url: string
  /** 1-3: which merchant button was clicked. */
  slot: number
  market: Market
  productKey: string
  priceShown: boolean
}

export function affBannerProps(ctx: AffBannerContext): Record<string, string | number | boolean> {
  const page = window.location.pathname
  return {
    banner_id: ctx.bannerId,
    cell: ctx.cell,
    format: ctx.format,
    merchant_count: ctx.merchantCount,
    placement: ctx.placement,
    phase: ctx.phase,
    category: ctx.category,
    locale: localeFromPath(page),
    cluster: clusterFromPath(page),
    page,
    device: deviceKind(),
  }
}

/** Fires before navigation (links open in a new tab). Never throws and never blocks the visitor. */
export function trackAffBanner(event: AffBannerEvent, ctx: AffBannerContext, click?: AffBannerClick): void {
  try {
    const props = affBannerProps(ctx)
    if (click) {
      Object.assign(props, {
        vendor: click.vendor,
        vendor_domain: affiliateDestinationDomain(click.url),
        slot: click.slot,
        market: click.market,
        product_key: click.productKey,
        price_shown: click.priceShown,
      })
    }
    window.umami?.track(event, props)
  } catch {
    // analytics must never block the visitor
  }
}
