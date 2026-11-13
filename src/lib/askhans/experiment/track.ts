'use client'

// Event sender for the Ask Hans button experiment. Client only. Every function swallows its own errors:
// analytics must never stop the assistant from opening.

import { CTA_EVENTS, CTA_EXPERIMENT_ENABLED, CTA_EXPERIMENT_ID, pageCategory, type CtaEvent, type CtaPlacement } from './config'
import { getAssignment } from './variant'

export interface CtaEventExtra {
  via?: CtaPlacement | 'other'
  /** ask_hans_session_end only: conversations / questions / active seconds of one use session */
  convs?: number
  qs?: number
  secs?: number
  /** ask_hans_consent_choice only */
  choice?: 'yes' | 'no'
}

const onceMemory = new Set<string>()

/** True the first time `key` is seen in this browser session (sessionStorage, memory fallback). */
export function onceCta(key: string): boolean {
  const k = `askhans.cta.once.${key}`
  if (onceMemory.has(k)) return false
  onceMemory.add(k)
  try {
    if (sessionStorage.getItem(k)) return false
    sessionStorage.setItem(k, '1')
  } catch {
    // memory only
  }
  return true
}

function device(): 'mobile' | 'desktop' {
  try {
    return window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop'
  } catch {
    return 'desktop'
  }
}

function langOf(pathname: string): string {
  return /^\/(de|fr|ja|zh|es|pt|ar|ko)(?=\/|$)/.exec(pathname)?.[1] ?? 'en'
}

/**
 * Sends one experiment event. `consentYes` is the caller's current Ask Hans consent: events marked consent-only in
 * CTA_EVENTS are dropped unless it is true. Counters go to /api/ask/exp (Redis, no visitor ID); the same event is
 * mirrored to Umami (cookieless) under the same name.
 */
export function trackCta(event: CtaEvent, consentYes: boolean, extra: CtaEventExtra = {}): void {
  try {
    if (!CTA_EXPERIMENT_ENABLED) return
    if (CTA_EVENTS[event].consent && !consentYes) return
    const a = getAssignment()
    if (!a.tracked) return
    const page = window.location.pathname
    const base = { exp: CTA_EXPERIMENT_ID, variant: a.variant, lang: langOf(page), device: device(), cat: pageCategory(page) }
    try {
      window.umami?.track(event, { ...base, via: extra.via, source_page: page })
    } catch {
      // ignore
    }
    void fetch('/api/ask/exp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ev: event, sid: a.sid, ...base, ...extra }),
      keepalive: true,
    }).catch(() => undefined)
  } catch {
    // never disturb the visitor
  }
}
