'use client'

// Visitor assignment for the Ask Hans button experiment. Client only.
//
// - Uniform random A/B/C (crypto.getRandomValues, rejection sampling: exactly 1/3 each).
// - Stored in sessionStorage under one key (same class of storage as the existing anonymous Ask Hans visit ID), so the
//   variant is the same on every page and across client-side navigation within a visit. A new browser session draws
//   again: returning visitors are re-randomised on purpose (no persistent storage before consent, TDDDG §25).
// - If storage is blocked the assignment lives in memory for the page's lifetime.
// - Bots / automated browsers, and visitors sending Do-Not-Track or Global Privacy Control, still see a wording (the
//   page must work) but are never counted: `tracked` is false.

import { CTA_EXPERIMENT_ID, CTA_VARIANTS, type CtaVariant } from './config'

export interface CtaAssignment {
  variant: CtaVariant
  /** random per-session ID, used only to estimate unique sessions server-side (HyperLogLog, never stored as an ID) */
  sid: string
  tracked: boolean
}

const KEY = 'askhans.cta.v1'
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

function newSid(): string {
  return Array.from(randomBytes(12), (b) => b.toString(16).padStart(2, '0')).join('')
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
  const tracked = !isAutomated()
  try {
    const raw = sessionStorage.getItem(KEY)
    if (raw) {
      const j = JSON.parse(raw) as { e?: string; v?: string; s?: string }
      if (j.e === CTA_EXPERIMENT_ID && (CTA_VARIANTS as readonly string[]).includes(j.v ?? '') && typeof j.s === 'string') {
        memo = { variant: j.v as CtaVariant, sid: j.s, tracked }
        return memo
      }
    }
  } catch {
    // unreadable storage: draw below
  }
  const a: CtaAssignment = { variant: pickVariant(), sid: newSid(), tracked }
  try {
    sessionStorage.setItem(KEY, JSON.stringify({ e: CTA_EXPERIMENT_ID, v: a.variant, s: a.sid }))
  } catch {
    // blocked storage: memory only
  }
  memo = a
  return a
}
