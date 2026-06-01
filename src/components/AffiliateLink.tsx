'use client'

import { trackAffiliateClick } from '@/lib/tracking/affiliate'
import {
  AFFILIATE_LINK_MARKER,
  getAffiliateProduct,
  type AffiliateProductKey,
} from '@/lib/affiliate-links'

interface AffiliateLinkProps {
  /**
   * Reference a product from the central catalog (src/lib/affiliate-links.ts).
   * When set, url / productName / productCategory / priceRange / default label
   * are resolved from the catalog and the explicit props below become optional.
   */
  productKey?: AffiliateProductKey
  url?: string
  productName?: string
  productCategory?: string
  priceRange?: string
  lang: string
  /** Visible link text. Defaults to the catalog/product label. */
  label?: string
  /** 'inline' = text link in prose; 'button' = standalone call-to-action. */
  variant?: 'inline' | 'button'
  /** Render the disclosed product-link marker beside the link. Default true. */
  showMarker?: boolean
}

const ShoppingBagIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

/**
 * Outbound product link for affiliate buying-guide articles.
 *
 * Carries rel="nofollow" (NOT "sponsored") because PromptQuorum is not yet
 * enrolled in any affiliate program and these links earn no commission. When
 * affiliate programs go live, change the rel below to "nofollow sponsored".
 */
export function AffiliateLink({
  productKey,
  url,
  productName,
  productCategory,
  priceRange,
  lang,
  label,
  variant = 'inline',
  showMarker = true,
}: AffiliateLinkProps) {
  // Resolve from the central catalog when a productKey is supplied; explicit
  // props always win if both are passed.
  const product = productKey ? getAffiliateProduct(productKey) : undefined
  const resolvedUrl = url ?? product?.url
  const resolvedName = productName ?? product?.label
  const resolvedCategory = productCategory ?? product?.category
  const resolvedPrice = priceRange ?? product?.priceRange

  if (!resolvedUrl || !resolvedName || !resolvedCategory) {
    throw new Error(
      'AffiliateLink requires a productKey or explicit url/productName/productCategory',
    )
  }

  const handleClick = () => {
    trackAffiliateClick({
      url: resolvedUrl,
      productName: resolvedName,
      productCategory: resolvedCategory,
      priceRange: resolvedPrice,
      lang,
    })
  }

  const text = label ?? resolvedName
  const marker = AFFILIATE_LINK_MARKER[lang] ?? AFFILIATE_LINK_MARKER.en

  if (variant === 'button') {
    return (
      <span className="inline-flex flex-col gap-0.5">
        <a
          href={resolvedUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          onClick={handleClick}
          className="affiliate-link inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-white no-underline hover:bg-primary/90"
        >
          <ShoppingBagIcon />
          {text}
        </a>
        {showMarker && (
          <span className="text-[10px] uppercase tracking-wide text-text-secondary">
            {marker}
          </span>
        )}
      </span>
    )
  }

  return (
    <a
      href={resolvedUrl}
      target="_blank"
      rel="nofollow noopener noreferrer"
      onClick={handleClick}
      className="affiliate-link inline-flex items-center gap-1 font-medium text-primary hover:underline"
    >
      <ShoppingBagIcon />
      {text}
      {showMarker && (
        <span className="ml-1 text-[10px] uppercase tracking-wide text-text-secondary">
          ({marker})
        </span>
      )}
    </a>
  )
}
