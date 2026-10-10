// Engagement popup on review pages (DirectoryPopup). Tunables live here so the
// numbers in the brief are changed in exactly one place.

/**
 * Active time on the page before the popup may appear. 60 s, not 30: the site's
 * Google-preferred-sources card fires at 30 s wall-clock and holds the shared prompt
 * slot, so this keeps the popup out of its way for a reader who dismisses that card.
 */
export const POPUP_DELAY_MS = 60_000
/** Minimum scroll progress (0–1) before the popup may appear. */
export const POPUP_MIN_SCROLL = 0.25
/** How long a dismissal (or a click on the CTA) suppresses the popup. */
export const POPUP_DISMISS_DAYS = 14
/** Granularity of the active-time timer. */
export const POPUP_TICK_MS = 500

export const POPUP_SLOT_ID = 'directory-popup'
/** localStorage: epoch ms until which the popup stays suppressed. */
export const POPUP_DISMISS_KEY = 'pq_dir_popup_dismissed_until'
/** sessionStorage: set once the popup was shown in this session. */
export const POPUP_SESSION_KEY = 'pq_dir_popup_shown'

const CONSENT_STORAGE_KEY = 'analytics_consent'

/**
 * Same reading of CookieBanner's consent record as hardwareProfile.ts: the
 * legacy 'granted' string, or `{ analytics: true }`. Anything else (including
 * no record at all, or unreadable storage) is "no consent".
 */
export function hasAnalyticsConsent(): boolean {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return false
    if (raw === 'granted') return true
    if (raw === 'denied') return false
    return !!(JSON.parse(raw) as { analytics?: boolean }).analytics
  } catch {
    return false
  }
}

const BOT_UA = /bot|crawl|spider|slurp|headless|lighthouse|gtmetrix|pagespeed|prerender|phantom|puppeteer|playwright/i

/** True for automated visitors that must never see (or be counted by) the popup. */
export function looksAutomated(): boolean {
  try {
    return Boolean(navigator.webdriver) || BOT_UA.test(navigator.userAgent)
  } catch {
    return true
  }
}
