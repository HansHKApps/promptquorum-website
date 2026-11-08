// Kill switch: banners render only when NEXT_PUBLIC_AFF_BANNERS === 'true' (off by default, like NEXT_PUBLIC_PROMO_PILOT).
export const AFF_BANNERS_ON = process.env.NEXT_PUBLIC_AFF_BANNERS === 'true'

/** Current pilot phase (brief 5.3): 1 = all treated groups at AP2, 2 = placement rotation, 3+ = merchant tests. Bump to start the next phase. */
export const AFF_BANNER_PHASE = 1

/** Page groups opted out (stop rule or manual pause). English paths. */
export const AFF_BANNER_OPT_OUT: ReadonlySet<string> = new Set<string>([])

/** Same view definition as the promo slots: at least 50% visible for at least 1 s. */
export const AFF_VIEW_THRESHOLD = 0.5
export const AFF_VIEW_MIN_MS = 1000

/** Reserved heights (px) [below 640px, 640px and up] so a banner never shifts the page. Longest text is FR/DE/ES. Verified by scripts/measure-affiliate-banner.mjs. */
export const AFF_RESERVED_HEIGHT: Record<'single1' | 'single3' | 'compare1' | 'compare3', readonly [number, number]> = {
  single1: [300, 230],
  single3: [440, 290],
  compare1: [560, 330],
  compare3: [800, 440],
}
