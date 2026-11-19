// Umami events for promo slots. Cookieless and anonymous like the rest of the site's Umami setup; no personal data.
// Every event carries the same props so target x placement x variant x cluster x locale x device can be sliced.
import type { PromoPlacement, PromoTarget, PromoVariant } from '@/lib/promo/types'
import { sendWhenUmamiReady } from '@/lib/tracking/umami-events'

/** What happened in the slot; the event name is `<target>_promo_<kind>` (see promoEventName). */
export type PromoEvent = 'view' | 'click'
export type PromoEventKind = PromoEvent | 'open'

/** `<target>_promo_<kind>` with a snake_case target: ask_hans_promo_view, power_mode_promo_open, directory_promo_click, ... */
export function promoEventName(target: PromoTarget, kind: PromoEventKind | 'landing'): string {
  return `${target.replace('-', '_')}_promo_${kind}`
}

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

/** Locale of a path: its /xx prefix, or 'en' (English has no prefix). */
export function localeFromPath(pathname: string): string {
  return LOCALE_PREFIX.exec(pathname)?.[0].slice(1) ?? 'en'
}

/** Same breakpoint as the Ask Hans window (ASK_HANS_WINDOW.mobileBreakpointPx). */
export function deviceKind(): 'mobile' | 'desktop' {
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
    window.umami?.track(promoEventName(ctx.target, event), {
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

/**
 * Ask Hans was opened by a promo slot (source = `promo_<target>_<placement>`). Sent to Umami regardless of the Ask Hans
 * consent choice, because Umami here is cookieless and anonymous. Fires only when the window actually opened (an
 * already open window is not a new open).
 */
export function trackPromoOpen(source: string): void {
  try {
    const m = /^promo_(ask_hans|power_mode)_(p[1-5])$/.exec(source)
    if (!m) return
    const page = window.location.pathname
    const target = m[1].replace('_', '-') as PromoTarget
    window.umami?.track(promoEventName(target, 'open'), {
      target,
      placement: m[2].toUpperCase(),
      source,
      cluster: clusterFromPath(page),
      locale: localeFromPath(page),
      page,
      device: deviceKind(),
    })
  } catch {
    // analytics must never block the visitor
  }
}

const LANDING_VIA = /^promo_(directory|mcp)_(p[1-5])$/

/**
 * Arrival from a Directory / MCP promo slot: fires `directory_promo_landing` / `mcp_promo_landing` once per page view
 * when the URL carries `via=promo_<target>_<placement>`. Umami's path metric drops the query string, so the click
 * alone cannot be matched to an arrival. Props: target, placement, locale, page.
 *
 * Fires on mount (PromoLanding), before the afterInteractive Umami script is guaranteed to have loaded — unlike a
 * slot's view/click, which happen at least 1 s after the page settled. Uses sendWhenUmamiReady so a fast page load
 * does not silently drop the landing (the actual cause of most arrivals going missing: window.umami?.track() is a
 * silent no-op when window.umami isn't attached yet).
 */
export function trackPromoLanding(): void {
  try {
    const m = LANDING_VIA.exec(new URLSearchParams(window.location.search).get('via') ?? '')
    if (!m) return
    const target = m[1] as PromoTarget
    const page = window.location.pathname
    sendWhenUmamiReady(promoEventName(target, 'landing'), {
      target,
      placement: m[2].toUpperCase(),
      locale: localeFromPath(page),
      page,
    })
  } catch {
    // analytics must never block the visitor
  }
}
