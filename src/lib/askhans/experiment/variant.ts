'use client'

// Visitor assignment for the Ask Hans button experiment. Client only.
//
// - Uniform random A/B/C (crypto.getRandomValues, rejection sampling: exactly 1/3 each).
// - Held in memory only (module variable): NOTHING is written to cookies, localStorage, sessionStorage or IndexedDB. The
//   variant is stable across client-side navigation; a full page load draws again (no visitor ID, no persistence).
// - Bots / automated browsers, and visitors sending Do-Not-Track or Global Privacy Control, still see a wording (the
//   page must work) but are never counted: `tracked` is false.

import { CTA_VARIANTS, type CtaVariant } from './config'

export interface CtaAssignment {
  variant: CtaVariant
  tracked: boolean
}

const BOT_UA = /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|gtmetrix|prerender|preview|facebookexternalhit|monitor|curl|wget|python-requests|httpx/i

function randomBytes(n: number): Uint8Array {
  const a = new Uint8Array(n)
  crypto.getRandomValues(a)
  return a
}

/** Uniform pick from the three variants without modulo bias. */
export function pickVariant(rand: () => number = () => randomBytes(1)[0]): CtaVariant {
  for (;;) {
    const b = rand()
    if (b < 255) return CTA_VARIANTS[b % 3] // 0..254 = 85 full cycles of 3
  }
}

export function isAutomated(): boolean {
  try {
    const n = navigator as Navigator & { globalPrivacyControl?: boolean; webdriver?: boolean }
    if (n.webdriver) return true
    if (BOT_UA.test(n.userAgent)) return true
    if (n.globalPrivacyControl === true || n.doNotTrack === '1' || (window as { doNotTrack?: string }).doNotTrack === '1') return true
  } catch {
    // fall through: unknown = treat as a normal visitor
  }
  return false
}

let memo: CtaAssignment | null = null

/** The visitor's assignment (created on first call). Never throws. */
export function getAssignment(): CtaAssignment {
  if (memo) return memo
  const a: CtaAssignment = { variant: pickVariant(), tracked: !isAutomated() }
  memo = a
  return a
}
