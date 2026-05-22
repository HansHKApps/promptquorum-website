import { track } from '@vercel/analytics'

// ── Affiliate / product-link tracking ────────────────────────────────────────
// Distinct from the editorial `outbound_click` event (see ./outbound.ts). This
// fires on clicks to retailer / product / signup pages on affiliate buying-guide
// articles.
//
// HONESTY NOTE: PromptQuorum is not currently enrolled in any affiliate program
// and outbound product links carry no affiliate tags (they earn no commission).
// Links therefore use rel="nofollow" — NOT "sponsored" — and pages show a
// neutral third-party-link notice, NOT a commission disclosure. When real
// affiliate programs go live: (1) switch the AffiliateLink rel to
// "nofollow sponsored", and (2) swap AFFILIATE_DISCLOSURE for
// AFFILIATE_DISCLOSURE_COMMISSION below.

export interface AffiliateClickParams {
  url: string
  productName: string
  productCategory: string
  priceRange?: string
  lang: string
}

// Bare hostnames (no leading "www.") of known retailers / vendors. Used by
// isAffiliateUrl() as a safety net for auto-detecting product links in body
// text. Structured affiliate links are declared explicitly via AffiliateLink.
const RETAILER_DOMAINS: ReadonlySet<string> = new Set([
  // Amazon (all storefronts)
  'amazon.com', 'amazon.de', 'amazon.fr', 'amazon.co.jp', 'amazon.co.uk',
  'amazon.it', 'amazon.es', 'amazon.ca',
  // PC component retailers
  'newegg.com', 'bhphotovideo.com', 'adorama.com', 'microcenter.com',
  'mindfactory.de', 'caseking.de', 'notebooksbilliger.de', 'alternate.de',
  'ldlc.com', 'materiel.net', 'topachat.com', 'jd.com',
  // Cloud GPU providers
  'runpod.io', 'vast.ai', 'lambdalabs.com', 'lambda.ai', 'paperspace.com',
  'coreweave.com', 'crusoe.ai', 'modal.com', 'together.ai',
  // Hardware brands
  'apple.com', 'synology.com', 'qnap.com', 'westerndigital.com', 'wd.com',
  'samsung.com', 'lenovo.com', 'asus.com', 'frame.work', 'razer.com',
  'dell.com', 'lg.com', 'benq.com', 'minisforum.com', 'aoostar.com',
  'bee-link.com', 'gmktec.com',
  // VPN providers
  'protonvpn.com', 'nordvpn.com', 'mullvad.net', 'surfshark.com',
  // Developer tools (SaaS)
  'cursor.com', 'continue.dev', 'sourcegraph.com', 'tabnine.com',
  // Course platforms
  'coursera.org', 'deeplearning.ai', 'udemy.com', 'datacamp.com', 'fast.ai',
])

/** Hostname of a URL with any leading "www." stripped; the raw input on parse failure. */
export const affiliateDestinationDomain = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

/** True when a URL points at a known retailer / vendor domain. */
export const isAffiliateUrl = (url: string): boolean => {
  try {
    return RETAILER_DOMAINS.has(new URL(url).hostname.toLowerCase().replace(/^www\./, ''))
  } catch {
    return false
  }
}

/** Fire an `affiliate_click` event to Umami, Vercel Analytics, and GA4. */
export function trackAffiliateClick(p: AffiliateClickParams): void {
  const payload = {
    destination_domain: affiliateDestinationDomain(p.url),
    product_category: p.productCategory,
    product_name: p.productName,
    price_range: p.priceRange ?? 'n/a',
    source_page: typeof window !== 'undefined' ? window.location.pathname : '',
    language: p.lang,
  }

  try {
    window.umami?.track('affiliate_click', payload)
  } catch {
    // silent — umami may be blocked
  }

  try {
    track('affiliate_click', payload)
  } catch {
    // silent
  }

  try {
    ;(window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
      'event',
      'affiliate_click',
      payload,
    )
  } catch {
    // silent
  }
}

// Affiliate disclosure shown near the top of each affiliate page. Commission
// wording per the affiliate-page localization rules in AFFILIATE_MANAGER_FINAL.md.
export const AFFILIATE_DISCLOSURE: Record<string, string> = {
  en: 'This page contains product links. We may earn a commission if you purchase through these links, at no extra cost to you.',
  de: 'Diese Seite enthält Produktlinks. Wir erhalten möglicherweise eine Provision, wenn Sie über diese Links kaufen — ohne Mehrkosten für Sie.',
  fr: 'Cette page contient des liens produits. Nous pouvons recevoir une commission si vous achetez via ces liens, sans frais supplémentaires pour vous.',
  ja: 'このページには製品リンクが含まれています。これらのリンクを通じてご購入いただいた場合、追加費用なしでコミッションを受け取る場合があります。',
  zh: '本页包含产品链接。如果您通过这些链接购买，我们可能会获得佣金，不会产生额外费用。',
}
