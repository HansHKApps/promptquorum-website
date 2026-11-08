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

/** Reserved heights (px) [below 640px, 640px and up] so a banner never shifts the page. Longest text is DE/FR. Measured 2026-11-08 at 390, 768 and 1280px (all 60 groups in en/de/fr/es/ja/ar), plus about 2% (scripts/measure-affiliate-banner.mjs); phones narrower than ~360px can grow past the mobile value, like the promo slots. */
export const AFF_RESERVED_HEIGHT: Record<'single1' | 'single3' | 'compare1' | 'compare3', readonly [number, number]> = {
  single1: [655, 485],
  single3: [770, 610],
  compare1: [785, 640],
  compare3: [1060, 770],
}
