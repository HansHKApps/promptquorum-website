// Browser side of the page view counter (docs/ad-display-test.md). Deliberately independent of Umami: the point
// is to check Umami (and GSC) against a second measurement. Sends one fixed event name; no ID, no cookie, no storage.
import { AUTOMATED_UA, classifySource, type PvSource } from '@/lib/ad-test/events'
import { localeFromPath } from './promo'

let landingUsed = false

/** Source of the current page view. Call once per page view: only the first one of a document is a landing. */
export function pageViewSource(): PvSource {
  const first = !landingUsed
  landingUsed = true
  try {
    if (navigator.webdriver || AUTOMATED_UA.test(navigator.userAgent)) return 'auto'
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
    // reached by in-site navigation (no new document load)
    if (!first || (nav && new URL(nav.name).pathname !== window.location.pathname)) return 'internal'
    return classifySource(document.referrer, nav?.type ?? 'navigate', window.location.host)
  } catch {
    return 'direct'
  }
}

export function countPageEvent(event: string, source: PvSource): void {
  try {
    const path = window.location.pathname.replace(/\/$/, '')
    void fetch('/api/pv-check', {
      method: 'POST',
      keepalive: true, // survives the page being left
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ event, source, locale: localeFromPath(path), page: path.split('/').pop() }),
    }).catch(() => {})
  } catch {
    // counting must never block the visitor
  }
}
