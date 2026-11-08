// Kill switch (owner decision 2026-11-08, "ship all"): banners are ON everywhere unless NEXT_PUBLIC_AFF_BANNERS === 'false'.
// To switch the pilot off: set NEXT_PUBLIC_AFF_BANNERS=false in Vercel (Production) and redeploy; or add groups to AFF_BANNER_OPT_OUT.
export const AFF_BANNERS_ON = process.env.NEXT_PUBLIC_AFF_BANNERS !== 'false'

/** Current pilot phase (brief 5.3): 1 = all treated groups at AP2, 2 = placement rotation, 3+ = merchant tests. Bump to start the next phase. */
export const AFF_BANNER_PHASE = 1

/** Page groups opted out (stop rule or manual pause). English paths. */
export const AFF_BANNER_OPT_OUT: ReadonlySet<string> = new Set<string>([])

/** Same view definition as the promo slots: at least 50% visible for at least 1 s. */
export const AFF_VIEW_THRESHOLD = 0.5
export const AFF_VIEW_MIN_MS = 1000

/** Reserved heights (px) [below 640px, 640px and up] so a banner never shifts the page. Longest text is DE/FR. Measured 2026-11-08 at 390px and 768px (all 60 groups in en/de/fr/es/ja/ar; 4 sample groups in all 9 locales) (scripts/measure-affiliate-banner.mjs); phones narrower than ~360px can grow past the mobile value, like the promo slots. */
export const AFF_RESERVED_HEIGHT: Record<'single1' | 'single3' | 'compare1' | 'compare3', readonly [number, number]> = {
  single1: [590, 465],
  single3: [660, 585],
  compare1: [750, 630],
  compare3: [955, 760],
}
