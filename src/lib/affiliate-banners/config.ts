// Kill switch: banners render only when NEXT_PUBLIC_AFF_BANNERS === 'true' (off by default, like NEXT_PUBLIC_PROMO_PILOT).
export const AFF_BANNERS_ON = process.env.NEXT_PUBLIC_AFF_BANNERS === 'true'

/** Page groups opted out (stop rule or manual pause). English paths. */
export const AFF_BANNER_OPT_OUT: ReadonlySet<string> = new Set<string>([])

/** Same view definition as the promo slots: at least 50% visible for at least 1 s. */
export const AFF_VIEW_THRESHOLD = 0.5
export const AFF_VIEW_MIN_MS = 1000
