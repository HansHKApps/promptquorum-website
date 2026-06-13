// Central affiliate / product-link catalog — single source of truth.
//
// Pages reference a product by KEY (never hardcode a URL). A link, price, or
// vendor change then happens in exactly one place and propagates to every bite
// that reuses it (e.g. the same AMD GPU link appears across multiple articles).
//
// HONESTY NOTE: PromptQuorum is NOT currently enrolled in any affiliate program.
// These URLs carry no affiliate tags and earn no commission (see
// src/lib/tracking/affiliate.ts, which keeps rel="nofollow" — not "sponsored").
// Links still render with a disclosed product-link marker so the commercial
// nature is transparent to EU/EEA visitors. The marker wording is defined in
// AFFILIATE_LINK_MARKER below — review it before launch.
//
// Prices are indicative only and marked // VERIFY — confirm before publish.

export type AffiliateCategory =
  | 'gpu'
  | 'egpu-enclosure'
  | 'ram'
  | 'cooling'
  | 'laptop'

export interface AffiliateProduct {
  /** Visible link text. */
  label: string
  /** Retailer URL — plain search/product page, NO affiliate tag. */
  url: string
  /** Display vendor, e.g. 'Amazon', 'Newegg'. */
  vendor: string
  category: AffiliateCategory
  /** Indicative price range (display + tracking only). // VERIFY each. */
  priceRange?: string
}

export type AffiliateProductKey =
  // ── AMD desktop GPUs (Best AMD GPU bite) ────────────────────────────────
  | 'amd-rx-7900-xtx'
  | 'amd-rx-7900-xt'
  | 'amd-rx-7800-xt'
  | 'amd-rx-7700-xt'
  | 'amd-rx-6800-xt'
  | 'amd-rx-6700-xt'
  // ── Radeon RX 6800M laptop accessories (Radeon 6800M bite) ──────────────
  | 'egpu-enclosure-thunderbolt'
  | 'laptop-ram-sodimm-32gb'
  | 'laptop-cooling-pad'
  | 'laptop-rx-6800m'

export const AFFILIATE_PRODUCTS: Record<AffiliateProductKey, AffiliateProduct> = {
  // ── AMD desktop GPUs ─────────────────────────────────────────────────────
  'amd-rx-7900-xtx': {
    label: 'AMD Radeon RX 7900 XTX 24GB',
    url: 'https://www.amazon.com/s?k=AMD+Radeon+RX+7900+XTX+24GB',
    vendor: 'Amazon',
    category: 'gpu',
    priceRange: '$900–1000', // VERIFY price
  },
  'amd-rx-7900-xt': {
    label: 'AMD Radeon RX 7900 XT 20GB',
    url: 'https://www.amazon.com/s?k=AMD+Radeon+RX+7900+XT+20GB',
    vendor: 'Amazon',
    category: 'gpu',
    priceRange: '$650–750', // VERIFY price
  },
  'amd-rx-7800-xt': {
    label: 'AMD Radeon RX 7800 XT 16GB',
    url: 'https://www.amazon.com/s?k=AMD+Radeon+RX+7800+XT+16GB',
    vendor: 'Amazon',
    category: 'gpu',
    priceRange: '$480–540', // VERIFY price
  },
  'amd-rx-7700-xt': {
    label: 'AMD Radeon RX 7700 XT 12GB',
    url: 'https://www.amazon.com/s?k=AMD+Radeon+RX+7700+XT+12GB',
    vendor: 'Amazon',
    category: 'gpu',
    priceRange: '$400–450', // VERIFY price
  },
  'amd-rx-6800-xt': {
    label: 'AMD Radeon RX 6800 XT 16GB',
    url: 'https://www.amazon.com/s?k=AMD+Radeon+RX+6800+XT+16GB',
    vendor: 'Amazon',
    category: 'gpu',
    priceRange: '$380–460 (used/new)', // VERIFY price
  },
  'amd-rx-6700-xt': {
    label: 'AMD Radeon RX 6700 XT 12GB',
    url: 'https://www.amazon.com/s?k=AMD+Radeon+RX+6700+XT+12GB',
    vendor: 'Amazon',
    category: 'gpu',
    priceRange: '$280–340', // VERIFY price
  },

  // ── Radeon RX 6800M laptop accessories (it is a soldered mobile GPU — link
  //    the things a 6800M owner CAN buy, never the bare chip) ────────────────
  'egpu-enclosure-thunderbolt': {
    label: 'Thunderbolt / USB4 eGPU enclosure',
    url: 'https://www.amazon.com/s?k=Thunderbolt+eGPU+enclosure',
    vendor: 'Amazon',
    category: 'egpu-enclosure',
    priceRange: '$200–350', // VERIFY price
  },
  'laptop-ram-sodimm-32gb': {
    label: '32GB DDR5 SO-DIMM laptop RAM kit',
    url: 'https://www.amazon.com/s?k=32GB+DDR5+SODIMM+laptop+RAM',
    vendor: 'Amazon',
    category: 'ram',
    priceRange: '$85–120', // VERIFY price
  },
  'laptop-cooling-pad': {
    label: 'Laptop cooling pad (high-airflow)',
    url: 'https://www.amazon.com/s?k=laptop+cooling+pad',
    vendor: 'Amazon',
    category: 'cooling',
    priceRange: '$30–55', // VERIFY price
  },
  'laptop-rx-6800m': {
    label: 'Gaming laptop with Radeon RX 6800M',
    url: 'https://www.amazon.com/s?k=Radeon+RX+6800M+laptop',
    vendor: 'Amazon',
    category: 'laptop',
    priceRange: '—', // VERIFY availability/price
  },
}

/** Resolve a product by key. Throws on an unknown key (build-time safety). */
export function getAffiliateProduct(key: AffiliateProductKey): AffiliateProduct {
  const product = AFFILIATE_PRODUCTS[key]
  if (!product) throw new Error(`Unknown affiliate product key: ${key}`)
  return product
}

// Per-link disclosure marker rendered beside each product link, so the
// commercial nature is clear at the point of click (EU/EEA transparency).
//
// NOTE: the wording here is deliberately accurate to PromptQuorum's current
// status — these are *disclosed product links that earn no commission*, not
// paid ads or affiliate links. See HONESTY NOTE at top. Confirm wording before
// any page ships.
export const AFFILIATE_LINK_MARKER: Record<string, string> = {
  en: 'product link · disclosed',
  de: 'Produktlink · offengelegt',
  fr: 'lien produit · divulgué',
  ja: '製品リンク · 開示済み',
  zh: '产品链接 · 已披露',
  es: 'enlace de producto · divulgado',
  pt: 'link de produto · divulgado',
  ar: 'رابط منتج · مُفصح عنه',
  ko: '제품 링크 · 공개됨',
}
