// Promo slots: one switch for the creative provider, reserved heights, and the mid-article position.
import type { PromoPlacement, PromoVariant } from './types'

/**
 * 'house'  = our own creative (today).
 * 'ad-tag' = a third-party tag renders inside the same reserved box. The tag itself is wired in when real
 *            advertising starts; the slot, its size and its tracking stay as they are.
 */
export const PROMO_PROVIDER: 'house' | 'ad-tag' = 'house'

/** Reserved heights (px) so a slot never shifts the page: [mobile, >=640px]. Sized for the longest locale. */
export const PROMO_RESERVED_HEIGHT: Record<PromoVariant, readonly [number, number]> = {
  strip: [96, 72],
  card: [176, 136],
  callout: [280, 216],
}

/** Share of the article body after which the P2 slot goes (brief: ~40%). */
export const PROMO_MID_ARTICLE_SHARE = 0.4

/** Section-level position for P2: the slot goes AFTER the section at this index. Null when there are too few sections. */
export function promoMidArticleIndex(sectionCount: number): number | null {
  if (sectionCount < 3) return null
  return Math.max(0, Math.min(sectionCount - 2, Math.round(sectionCount * PROMO_MID_ARTICLE_SHARE) - 1))
}

/** view = at least this share of the slot visible for at least this long. */
export const PROMO_VIEW_THRESHOLD = 0.5
export const PROMO_VIEW_MIN_MS = 1000

export const PROMO_PLACEMENTS: readonly PromoPlacement[] = ['P1', 'P2', 'P3', 'P4', 'P5']
