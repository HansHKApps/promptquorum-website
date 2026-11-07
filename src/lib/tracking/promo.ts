// Umami events for promo slots. Cookieless and anonymous like the rest of the site's Umami setup; no personal data.
// Every event carries the same props so target x placement x variant x cluster x locale x device can be sliced.
import type { PromoPlacement, PromoTarget, PromoVariant } from '@/lib/promo/types'

export type PromoEvent = 'promo_view' | 'promo_click'

export interface PromoContext {
  target: PromoTarget
  placement: PromoPlacement
  variant: PromoVariant
  locale: string
}

const LOCALE_PREFIX = /^\/(?:de|fr|ja|zh|es|pt|ar|ko)(?=\/|$)/

/** First path segment after the locale prefix (local-llms, power-local-llm, prompt-engineering, directory, ...). */
export function clusterFromPath(pathname: string): string {
  const rest = pathname.replace(LOCALE_PREFIX, '')
  return rest.split('/').filter(Boolean)[0] ?? 'home'
}

/** Same breakpoint as the Ask Hans window (ASK_HANS_WINDOW.mobileBreakpointPx). */
function deviceKind(): 'mobile' | 'desktop' {
  try {
    return window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop'
  } catch {
    return 'desktop'
  }
}

/** Source string used in attribution (`via=` on links): `promo_<target>_<placement>`, placement lower-cased. */
export function promoSource(target: PromoTarget, placement: PromoPlacement): string {
  return `promo_${target.replace('-', '_')}_${placement.toLowerCase()}`
}

export function trackPromo(event: PromoEvent, ctx: PromoContext): void {
  try {
    const page = window.location.pathname
    window.umami?.track(event, {
      target: ctx.target,
      placement: ctx.placement,
      variant: ctx.variant,
      cluster: clusterFromPath(page),
      locale: ctx.locale,
      page,
      device: deviceKind(),
    })
  } catch {
    // analytics must never block the visitor
  }
}
