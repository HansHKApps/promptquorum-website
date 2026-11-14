import {
  UMAMI_API_BASE,
  UMAMI_DEFAULT_WEBSITE_ID,
  UMAMI_REVALIDATE_SECONDS,
  UMAMI_WINDOW_HOURS,
} from './stats-config'

export interface UmamiStat {
  pageviews: number
  /** ISO timestamp of the end of the window (start = end - windowHours). */
  windowEnd: string
  windowHours: number
}

let lastGood: UmamiStat | null = null

/**
 * Page views for the last 24 h from Umami Cloud (aggregate number only).
 * Returns the last successful value if the API fails, null if there never was one.
 * Auth: Umami Cloud API key (UMAMI_API_KEY), sent as x-umami-api-key.
 */
export async function getUmamiStat(): Promise<UmamiStat | null> {
  const apiKey = process.env.UMAMI_API_KEY
  if (!apiKey) return lastGood
  const websiteId = process.env.UMAMI_WEBSITE_ID || UMAMI_DEFAULT_WEBSITE_ID

  // Window end is rounded down to the hour so the fetch-cache key (the URL) is stable for the
  // revalidate period and the cached number always matches the window we display.
  const endAt = Math.floor(Date.now() / 3_600_000) * 3_600_000
  const startAt = endAt - UMAMI_WINDOW_HOURS * 3_600_000
  const url = `${UMAMI_API_BASE}/websites/${encodeURIComponent(websiteId)}/stats?startAt=${startAt}&endAt=${endAt}`

  try {
    const res = await fetch(url, {
      headers: { 'x-umami-api-key': apiKey, Accept: 'application/json' },
      next: { revalidate: UMAMI_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) return lastGood
    const json = (await res.json()) as { pageviews?: number | { value?: number } }
    const raw = typeof json.pageviews === 'object' ? json.pageviews?.value : json.pageviews
    if (typeof raw !== 'number' || !Number.isFinite(raw)) return lastGood
    lastGood = { pageviews: raw, windowEnd: new Date(endAt).toISOString(), windowHours: UMAMI_WINDOW_HOURS }
    return lastGood
  } catch {
    return lastGood
  }
}
