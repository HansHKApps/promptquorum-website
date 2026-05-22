'use client'

import { trackAffiliateClick } from '@/lib/tracking/affiliate'

interface AffiliateLinkProps {
  url: string
  productName: string
  productCategory: string
  priceRange?: string
  lang: string
  /** Visible link text. Defaults to productName. */
  label?: string
  /** 'inline' = text link in prose; 'button' = standalone call-to-action. */
  variant?: 'inline' | 'button'
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
  url,
  productName,
  productCategory,
  priceRange,
  lang,
  label,
  variant = 'inline',
}: AffiliateLinkProps) {
  const handleClick = () => {
    trackAffiliateClick({ url, productName, productCategory, priceRange, lang })
  }

  const text = label ?? productName

  if (variant === 'button') {
    return (
      <a
        href={url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        onClick={handleClick}
        className="affiliate-link inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-white no-underline hover:bg-primary/90"
      >
        <ShoppingBagIcon />
        {text}
      </a>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow noopener noreferrer"
      onClick={handleClick}
      className="affiliate-link inline-flex items-center gap-1 font-medium text-primary hover:underline"
    >
      <ShoppingBagIcon />
      {text}
    </a>
  )
}
