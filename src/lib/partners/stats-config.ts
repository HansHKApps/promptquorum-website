/**
 * Single config file for the live traffic counter on /partners.
 * Edit here only; nothing else needs to change.
 */

/** Umami Cloud REST API (the site tracker is proxied to cloud.umami.is, see next.config.ts). */
export const UMAMI_API_BASE = 'https://api.umami.is/v1'
/** Public tracker website ID (same value as the data-website-id in layout.tsx). Override with UMAMI_WEBSITE_ID. */
export const UMAMI_DEFAULT_WEBSITE_ID = '1a0d1160-11ea-4882-a110-90fd9e5ebb75'
export const UMAMI_WINDOW_HOURS = 24
export const UMAMI_REVALIDATE_SECONDS = 60 * 60 // 1 h

/**
 * Search Console property, exactly as listed in GSC. The existing property is the URL-prefix one;
 * for a Domain property use `sc-domain:promptquorum.com`. Override with GSC_SITE_URL.
 */
export const GSC_DEFAULT_SITE_URL = 'https://www.promptquorum.com/'
/** How many days back to look; the newest date that has data wins (GSC lags ~2 days). */
export const GSC_LOOKBACK_DAYS = 5
export const GSC_REVALIDATE_SECONDS = 6 * 60 * 60 // 6 h

/**
 * Message under the numbers. First tier whose `minViews` is <= the 24 h page views wins
 * (list from highest to lowest). `key` selects a text from `messages` in
 * src/lib/partners/content.ts. Default: a single neutral tier.
 * To add a threshold-based message, add a key in content.ts (all 9 locales) and a tier here.
 */
export const MESSAGE_TIERS: { minViews: number; key: 'neutral' }[] = [
  { minViews: 0, key: 'neutral' },
]
