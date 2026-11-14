import { createSign } from 'node:crypto'
import { GSC_DEFAULT_SITE_URL, GSC_LOOKBACK_DAYS, GSC_REVALIDATE_SECONDS } from './stats-config'

export interface GscStat {
  clicks: number
  /** ISO date (YYYY-MM-DD) of the newest day the API returned data for. */
  date: string
}

let lastGood: GscStat | null = null
let lastFetchedAt = 0
let lastError: string | null = null

/** Short, non-secret reason of the last failure (stage + HTTP status), for the status endpoint. */
export function getGscLastError(): string | null {
  return lastError
}

const b64url = (b: Buffer | string) => Buffer.from(b).toString('base64url')

/** Service-account access token via a signed JWT (no googleapis dependency). */
async function getAccessToken(email: string, privateKey: string): Promise<string | null> {
  const now = Math.floor(Date.now() / 1000)
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claim = b64url(
    JSON.stringify({
      iss: email,
      scope: 'https://www.googleapis.com/auth/webmasters.readonly',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    }),
  )
  const sig = createSign('RSA-SHA256').update(`${header}.${claim}`).sign(privateKey)
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${header}.${claim}.${b64url(sig)}`,
    }),
    cache: 'no-store',
    signal: AbortSignal.timeout(8000),
  })
  if (!res.ok) { lastError = `token-${res.status}`; return null }
  const json = (await res.json()) as { access_token?: string }
  return json.access_token ?? null
}

const isoDay = (d: Date) => d.toISOString().slice(0, 10)

/**
 * Clicks for the newest day with data (default dataState = final; as returned by the API,
 * no extrapolation). Env: GSC_CLIENT_EMAIL, GSC_PRIVATE_KEY, optional GSC_SITE_URL.
 */
export async function getGscStat(): Promise<GscStat | null> {
  // In-memory cache: the Authorization header changes per call, so the fetch cache cannot dedupe.
  if (lastGood && Date.now() - lastFetchedAt < GSC_REVALIDATE_SECONDS * 1000) return lastGood
  const email = process.env.GSC_CLIENT_EMAIL
  const key = process.env.GSC_PRIVATE_KEY?.replace(/\\n/g, '\n')
  if (!email || !key) { lastError = 'no-credentials'; return lastGood }
  const site = process.env.GSC_SITE_URL || GSC_DEFAULT_SITE_URL

  try {
    const token = await getAccessToken(email, key)
    if (!token) { lastError = 'token'; return lastGood }
    const end = new Date()
    const start = new Date(end.getTime() - GSC_LOOKBACK_DAYS * 86_400_000)
    const res = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ startDate: isoDay(start), endDate: isoDay(end), dimensions: ['date'], rowLimit: 25 }),
        cache: 'no-store',
        signal: AbortSignal.timeout(10000),
      },
    )
    if (!res.ok) { lastError = `query-${res.status}`; return lastGood }
    const json = (await res.json()) as { rows?: { keys: string[]; clicks: number; impressions?: number }[] }
    // A day counts as "has data" only if it has impressions (guards against empty placeholder rows).
    const rows = (json.rows ?? []).filter(
      r => typeof r.clicks === 'number' && (r.impressions ?? 1) > 0 && /^\d{4}-\d{2}-\d{2}$/.test(r.keys?.[0] ?? ''),
    )
    if (rows.length === 0) { lastError = 'no-rows'; return lastGood }
    const latest = rows.reduce((a, b) => (a.keys[0] >= b.keys[0] ? a : b))
    lastGood = { clicks: latest.clicks, date: latest.keys[0] }
    lastFetchedAt = Date.now()
    lastError = null
    return lastGood
  } catch (e) {
    lastError = `exception-${e instanceof Error ? e.name : 'unknown'}`
    return lastGood
  }
}
