// Sitewide Umami helpers.
//   - localeAndCluster(): shared by the affiliate_click payload (src/lib/tracking/affiliate.ts)
//   - adblock_check: once-per-session bait-element probe, sampled at 2.5% of sessions, mounted by
//     <AdblockCheck /> in layout.tsx.
// Every custom event counts against the plan's monthly event quota, so both stay sparse.
// No personal data, no cookies. Nothing here throws when Umami is missing (blocked or not loaded).

import { ALL_LANGS } from '@/lib/i18n/constants'

const LOCALES: readonly string[] = ALL_LANGS
/**
 * Target ~2,000 samples / 28 days (~71/day, 2026-11-19, down from 0.05). The gate below already samples once
 * per sessionStorage "session" (one per browser tab's lifetime), not per page view — but a sessionStorage
 * tab-session is a narrower unit than Umami's own cookieless "session" (a per-visitor hash, not per-tab), so a
 * visitor who opens the site in more than one tab in a day is sampled more than once against Umami's coarser
 * session/pageview counts. That gap is the likely reason the realised rate at 0.05 came out above 5% of
 * pageviews (observed 400-500/day against an intended ~71/day) rather than matching 5% of sessions. Halving
 * the rate retargets the realised volume; verify the post-deploy daily count against the ~70/day target
 * (docs/adblock-measurement.md) and tune further if the tab/session gap pushes it off target again.
 */
const SAMPLE_RATE = 0.025 // ~2,000 samples / 28 days (see docs/adblock-measurement.md)
const SAMPLE_KEY = 'pq_adblock_sampled' // sessionStorage: '1' = sampled, '0' = not; set on first pageview
const BAIT_DELAY_MS = 150

/** locale = first path segment when it is one of the 9 locales, else "en"; cluster = next segment. */
export function localeAndCluster(pathname: string): { locale: string; cluster: string } {
  const [first = '', second = ''] = pathname.split('/').filter(Boolean)
  const isLocale = LOCALES.includes(first)
  const cluster = isLocale ? second : first
  return { locale: isLocale ? first : 'en', cluster: cluster || 'home' }
}

function send(name: string, data: Record<string, unknown>): void {
  try {
    window.umami?.track(name, data)
  } catch {
    // Umami blocked or broken: never surface it to the visitor.
  }
}

/**
 * Umami loads `afterInteractive` (see layout.tsx), so `window.umami` is not guaranteed to exist yet when an
 * event fires right on mount (a landing page, a slot visible on first paint). Retry briefly instead of losing
 * the event to that race; give up (never send) once Umami is confirmed absent after ~5 s. Same pattern as the
 * adblock_check probe above.
 */
export function sendWhenUmamiReady(name: string, data: Record<string, unknown>): void {
  let tries = 0
  const trySend = () => {
    if (window.umami) return send(name, data)
    if (++tries > 20) return
    window.setTimeout(trySend, 250)
  }
  trySend()
}

/**
 * Decide ONCE per session, on its first pageview, whether to probe (2.5% sample). The decision is
 * stored in sessionStorage, so later pageviews find it and stop: at most one probe per session.
 * No storage = no probe (once-per-session cannot be guaranteed).
 */
function shouldProbe(): boolean {
  try {
    if (sessionStorage.getItem(SAMPLE_KEY) !== null) return false
    const sampled = Math.random() < SAMPLE_RATE
    sessionStorage.setItem(SAMPLE_KEY, sampled ? '1' : '0')
    return sampled
  } catch {
    return false
  }
}

/** Run the sampled adblock probe (first pageview of a session only). */
export function installAdblockCheck(): void {
  if (!shouldProbe()) return

  const bait = document.createElement('div')
  bait.className = 'adsbox ad-banner textads banner_ad'
  bait.setAttribute('aria-hidden', 'true')
  bait.style.cssText = 'height:10px;position:absolute;left:-9999px;'
  document.body.appendChild(bait)

  window.setTimeout(() => {
    let blocked = false
    try {
      blocked = bait.offsetHeight === 0 || getComputedStyle(bait).display === 'none'
    } catch {
      /* treat as not blocked */
    }
    bait.remove()
    const device = window.matchMedia?.('(pointer:coarse)').matches ? 'touch' : 'pointer'
    sendWhenUmamiReady('adblock_check', { blocked, device })
  }, BAIT_DELAY_MS)
}
