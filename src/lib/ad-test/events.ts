// What the page view counter accepts. Shared by the browser (lib/tracking/page-check.ts) and /api/pv-check,
// so nothing outside these fixed lists can ever be stored.
import { AD_TEST_CREATIVES, AD_TEST_PAGES, AD_TEST_POSITIONS } from './config'

/**
 * load  = the test page was opened and its script ran (one per page view)
 * first = at least one ad was really displayed in this page view (once per page view)
 * human = `first` AND a real input from the visitor (mouse, touch, wheel, key) (once per page view)
 * ad:<position>:<creative>    one ad displayed
 * click:<position>:<creative> one ad clicked
 */
export const PV_EVENTS: ReadonlySet<string> = new Set([
  'load',
  'first',
  'human',
  ...(['ad', 'click'] as const).flatMap((k) => AD_TEST_POSITIONS.flatMap((p) => AD_TEST_CREATIVES.map((c) => `${k}:${p}:${c}`))),
])

/** How the page view started. `auto` = automated browser or crawler (kept apart, never mixed with visitors). */
export const PV_SOURCES = ['google', 'search', 'site', 'internal', 'direct', 'repeat', 'auto'] as const
export type PvSource = (typeof PV_SOURCES)[number]

export const PV_LOCALES: ReadonlySet<string> = new Set(['en', 'de', 'fr', 'es', 'pt', 'ja', 'zh', 'ko', 'ar'])
/** Page keys = last path segment of the test pages. */
export const PV_PAGES: ReadonlySet<string> = new Set(AD_TEST_PAGES.map((p) => p.split('/').pop() as string))

export const AUTOMATED_UA = /bot\b|bot\/|crawler|spider|headless|lighthouse|inspectiontool/i

/** Referrer + navigation type of a real document load -> source. */
export function classifySource(referrer: string, navigationType: string, ownHost: string): PvSource {
  if (navigationType === 'reload' || navigationType === 'back_forward') return 'repeat'
  if (!referrer) return 'direct'
  if (referrer.startsWith('android-app://com.google.')) return 'google'
  let host: string
  try {
    host = new URL(referrer).hostname.replace(/^www\./, '')
  } catch {
    return 'site'
  }
  if (host === ownHost.replace(/^www\./, '').split(':')[0]) return 'internal'
  if (/^google\.[a-z]{2,3}(\.[a-z]{2})?$/.test(host)) return 'google'
  if (/(^|\.)(bing\.com|duckduckgo\.com|search\.yahoo\.[a-z.]+|yandex\.[a-z.]+|baidu\.com|search\.naver\.com|ecosia\.org|search\.brave\.com)$/.test(host)) return 'search'
  return 'site'
}

/** GSC reports days in Pacific Time, so the counter buckets by the same day. */
export function pacificDay(date: Date): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit' }).format(date)
}
