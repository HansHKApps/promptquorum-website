// Sitewide Umami helpers.
//   - localeAndCluster(): shared by the affiliate_click payload (src/lib/tracking/affiliate.ts)
//   - adblock_check: once-per-session bait-element probe, sampled at 25% of sessions, mounted by
//     <AdblockCheck /> in layout.tsx.
// Every custom event counts against the plan's monthly event quota, so both stay sparse.
// No personal data, no cookies. Nothing here throws when Umami is missing (blocked or not loaded).

import { ALL_LANGS } from '@/lib/i18n/constants'

const LOCALES: readonly string[] = ALL_LANGS
const SAMPLE_RATE = 0.25
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
 * Decide ONCE per session, on its first pageview, whether to probe (25% sample). The decision is
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
    // Umami loads afterInteractive: wait briefly for it so the event is not lost to a race.
    let tries = 0
    const trySend = () => {
      if (window.umami || ++tries > 20) return send('adblock_check', { blocked, device })
      window.setTimeout(trySend, 250)
    }
    trySend()
  }, BAIT_DELAY_MS)
}
