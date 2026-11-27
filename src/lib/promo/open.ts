// Opens Ask Hans (or Ask Hans with Power Mode on) in place, from a promo slot. Reuses the one existing mechanism:
// the global ASK_HANS_OPEN_EVENT handled by AskHansRoot. No question is sent, so nothing counts against the
// visitor's 50 questions per visit or 6 Power Mode reports per 24 h; those count only when used.
import { ACADEMY_OPEN_EVENT } from '@/lib/academy/config'
import { ASK_HANS_OPEN_EVENT } from '@/lib/askhans/config'
import { PROMO_PLACEMENTS } from './config'
import type { PromoInPlaceTarget, PromoOpenTarget, PromoPlacement } from './types'

/** `promo_<target>_<placement>`, e.g. promo_ask_hans_p2 / promo_power_mode_p1. */
export function promoOpenSource(target: PromoInPlaceTarget, placement: PromoPlacement): string {
  return `promo_${target.replace('-', '_')}_${placement.toLowerCase()}`
}

/** Every source the server accepts on the 'open' counter (anything else is ignored, never stored). */
export const PROMO_OPEN_SOURCES: ReadonlySet<string> = new Set(
  (['ask-hans', 'power-mode'] as const).flatMap((t) => PROMO_PLACEMENTS.map((p) => promoOpenSource(t, p))),
)

export function openAskHansFromPromo(target: PromoOpenTarget, placement: PromoPlacement, trigger: HTMLElement | null, source?: string): void {
  window.dispatchEvent(
    new CustomEvent(ASK_HANS_OPEN_EVENT, {
      detail: { ...(target === 'power-mode' ? { power: true } : {}), source: source ?? promoOpenSource(target, placement), returnFocusTo: trigger },
    }),
  )
}

/**
 * Opens the Academy window in place from a promo slot (same global window as the study-hat launcher; AcademyRoot reads
 * `detail.source` and counts `academy_promo_open` only when the window was closed). Nothing is sent to the Academy
 * server: no programme is started and no generation call is made until the visitor does that themselves.
 */
export function openAcademyFromPromo(placement: PromoPlacement, source?: string): void {
  window.dispatchEvent(new CustomEvent(ACADEMY_OPEN_EVENT, { detail: { source: source ?? promoOpenSource('academy', placement) } }))
}
