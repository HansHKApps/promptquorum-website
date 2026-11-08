import type { MerchantLink } from './types'

/**
 * The ONE place affiliate parameters can be added. A no-op until a link is 'live': the pilot ships plain URLs.
 * When a merchant programme goes live, implement its tag here (per vendor) and set affiliateStatus: 'live' in the catalog.
 */
export function buildMerchantUrl(link: MerchantLink): string {
  if (link.affiliateStatus !== 'live') return link.url
  return link.url // TODO(live programmes): inject the vendor's affiliate parameter here.
}

/** rel for banner links: nofollow until live, then nofollow sponsored (brief 6.2). */
export function merchantRel(link: MerchantLink): string {
  return link.affiliateStatus === 'live' ? 'nofollow sponsored noopener noreferrer' : 'nofollow noopener noreferrer'
}

const PRICE_MAX_AGE_DAYS = 30

/** Show a price only when verified within 30 days (brief 6.1a, 10). */
export function priceIsShowable(link: MerchantLink, now: Date = new Date()): boolean {
  if (!link.priceRange || !link.verifiedAt) return false
  const t = Date.parse(link.verifiedAt)
  if (Number.isNaN(t)) return false
  return (now.getTime() - t) / 86_400_000 <= PRICE_MAX_AGE_DAYS
}
