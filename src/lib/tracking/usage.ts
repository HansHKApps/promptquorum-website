// Usage events (Umami) that tell us where a product use started, so the promo pilot can measure adoption per page.
// Anonymous and cookieless like the rest of the site's Umami setup: no personal data, no free text, no new cookies and
// no new browser storage. Every event carries `source_page` = the full path of the page it happened on, including the
// locale prefix (e.g. /de/local-llms/how-to-install-ollama), plus `locale`.
//
// Already existing (not touched here): `ask_hans_question` and `ask_hans_button_click` (both carry source_page).
import { localeFromPath } from './promo'

export type UsageEvent = 'power_report_started' | 'power_report_completed' | 'directory_app_view'

/** Only fixed, short tokens may be sent as extra props. */
type SafeProps = Record<string, string>

export function trackUsage(event: UsageEvent, extra: SafeProps = {}): void {
  try {
    const page = window.location.pathname
    window.umami?.track(event, { ...extra, source_page: page, locale: localeFromPath(page) })
  } catch {
    // analytics must never block the visitor
  }
}

const VIA = /^promo_[a-z_]{3,24}_p[1-5]$/

/** `?via=promo_<target>_<placement>` of the current URL, only if it has exactly that fixed shape. */
export function viaFromUrl(): string | undefined {
  try {
    const v = new URLSearchParams(window.location.search).get('via')
    return v && VIA.test(v) ? v : undefined
  } catch {
    return undefined
  }
}

/** Same-site referrer as a bare path (no query, no host); undefined for external or empty referrers. */
export function referrerPath(): string | undefined {
  try {
    if (!document.referrer) return undefined
    const u = new URL(document.referrer)
    if (u.origin !== window.location.origin) return undefined
    return u.pathname.slice(0, 160)
  } catch {
    return undefined
  }
}

/** A directory app drawer was opened. `app` is the public tool slug from the directory data. */
export function trackDirectoryAppView(app: string): void {
  const via = viaFromUrl()
  const ref = referrerPath()
  trackUsage('directory_app_view', { app, ...(via ? { via } : {}), ...(ref ? { referrer_path: ref } : {}) })
}
