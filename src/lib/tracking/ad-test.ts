// Umami events of the ad display test (docs/ad-display-test.md). Cookieless and anonymous; no storage.
//   adtest_request     a measured page view requested its 3 ads (once per page view)
//   adtest_impression  an ad was displayed: >=50% visible for >=1 s (measured page views only)
//   adtest_click       the ad's button was clicked (every page view)
// `cell` = "<position>:<creative>" so one Umami property breakdown gives the whole 3 x 3 table.
import type { AdTestPosition } from '@/lib/ad-test/config'
import type { PromoTarget } from '@/lib/promo/types'
import { deviceKind, localeFromPath } from './promo'
import { sendWhenUmamiReady } from './umami-events'

function base() {
  const page = window.location.pathname
  return { page, locale: localeFromPath(page), device: deviceKind() }
}

export function trackAdTestRequest(rotation: number): void {
  try {
    sendWhenUmamiReady('adtest_request', { ...base(), rotation })
  } catch {
    // analytics must never block the visitor
  }
}

export function trackAdTest(kind: 'impression' | 'click', position: AdTestPosition, creative: PromoTarget): void {
  try {
    sendWhenUmamiReady(`adtest_${kind}`, { ...base(), position, creative, cell: `${position}:${creative}` })
  } catch {
    // analytics must never block the visitor
  }
}
