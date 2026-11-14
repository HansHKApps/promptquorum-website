import { createSign } from 'node:crypto'
import {
  GSC_COUNTRY_DAYS,
  GSC_COUNTRY_LIMIT,
  GSC_DEFAULT_SITE_URL,
  GSC_LOOKBACK_DAYS,
  GSC_REVALIDATE_SECONDS,
} from './stats-config'

export interface GscStat {
  clicks: number
  /** ISO date (YYYY-MM-DD) of the newest day the API returned data for. */
  date: string
}

export interface GscCountries {
  /** Inclusive date range (ISO) the numbers cover. */
  from: string
  to: string
  /** Clicks from all countries in the range (denominator for the share). */
  total: number
  /** Top countries by clicks; `code3` is the lowercase ISO 3166-1 alpha-3 code GSC returns. */
  rows: { code3: string; clicks: number }[]
}

interface GscRow {
  keys: string[]
  clicks: number
  impressions?: number
}

let lastGood: GscStat | null = null
let lastFetchedAt = 0
let lastGoodCountries: GscCountries | null = null
let lastCountriesAt = 0
let lastError: string | null = null
let tokenCache: { token: string; expiresAt: number } | null = null

/** Short, non-secret reason of the last failure (stage + HTTP status), for the status endpoint. */
export function getGscLastError(): string | null {
  return lastError
}

/**
 * Tolerates a key pasted into an env var with its line breaks lost or escaped: quotes, literal \\n,
 * spaces instead of newlines. Rebuilds a clean PEM from the base64 body.
 */
export function normalizePrivateKey(raw: string): string {
  const k = raw.trim().replace(/^["']|["']$/g, '').replace(/\\n/g, '\n')
  const m = k.match(/-----BEGIN ([A-Z ]*PRIVATE KEY)-----([\s\S]*?)-----END \1-----/)
  if (!m) return k
  const body = m[2].replace(/[^A-Za-z0-9+/=]/g, '')
  return `-----BEGIN ${m[1]}-----\n${(body.match(/.{1,64}/g) ?? []).join('\n')}\n-----END ${m[1]}-----\n`
}

const b64url = (b: Buffer | string) => Buffer.from(b).toString('base64url')
const isoDay = (d: Date) => d.toISOString().slice(0, 10)
const fresh = (at: number) => Date.now() - at < GSC_REVALIDATE_SECONDS * 1000

/** Service-account access token via a signed JWT (no googleapis dependency), cached ~50 min. */
async function getAccessToken(email: string, privateKey: string): Promise<string | null> {
  if (tokenCache && Date.now() < tokenCache.expiresAt) return tokenCache.token
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
  let sig: Buffer
  try {
    sig = createSign('RSA-SHA256').update(`${header}.${claim}`).sign(privateKey)
  } catch {
    lastError = 'key-format'
    return null
  }
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
  if (!res.ok) {
    lastError = `token-${res.status}`
    return null
  }
  const json = (await res.json()) as { access_token?: string }
  if (!json.access_token) {
    lastError = 'token-empty'
    return null
  }
  tokenCache = { token: json.access_token, expiresAt: Date.now() + 50 * 60_000 }
  return json.access_token
}

/** One Search Analytics query (default dataState = final; no extrapolation). Null on any failure. */
async function queryGsc(body: Record<string, unknown>): Promise<GscRow[] | null> {
  const email = process.env.GSC_CLIENT_EMAIL
  const rawKey = process.env.GSC_PRIVATE_KEY
  const key = rawKey ? normalizePrivateKey(rawKey) : undefined
  if (!email || !key) {
    lastError = 'no-credentials'
    return null
  }
  const site = process.env.GSC_SITE_URL || GSC_DEFAULT_SITE_URL
  try {
    const token = await getAccessToken(email, key)
    if (!token) return null
    const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
      signal: AbortSignal.timeout(10000),
    })
    if (!res.ok) {
      lastError = `query-${res.status}`
      return null
    }
    const json = (await res.json()) as { rows?: GscRow[] }
    return json.rows ?? []
  } catch (e) {
    lastError = `exception-${e instanceof Error ? e.name : 'unknown'}`
    return null
  }
}

/**
 * Clicks for the newest day with data. Env: GSC_CLIENT_EMAIL, GSC_PRIVATE_KEY, optional GSC_SITE_URL.
 * Returns the last successful value if the API fails, null if there never was one.
 */
export async function getGscStat(): Promise<GscStat | null> {
  // In-memory cache: the token changes per call, so the fetch cache could not dedupe these POSTs.
  if (lastGood && fresh(lastFetchedAt)) return lastGood
  const end = new Date()
  const start = new Date(end.getTime() - GSC_LOOKBACK_DAYS * 86_400_000)
  const rows = await queryGsc({ startDate: isoDay(start), endDate: isoDay(end), dimensions: ['date'], rowLimit: 25 })
  if (!rows) return lastGood
  // A day counts as "has data" only if it has impressions (guards against empty placeholder rows).
  const valid = rows.filter(
    r => typeof r.clicks === 'number' && (r.impressions ?? 1) > 0 && /^\d{4}-\d{2}-\d{2}$/.test(r.keys?.[0] ?? ''),
  )
  if (valid.length === 0) {
    lastError = 'no-rows'
    return lastGood
  }
  const latest = valid.reduce((a, b) => (a.keys[0] >= b.keys[0] ? a : b))
  lastGood = { clicks: latest.clicks, date: latest.keys[0] }
  lastFetchedAt = Date.now()
  lastError = null
  return lastGood
}

/** Top countries by Google search clicks over the GSC_COUNTRY_DAYS days ending at the newest day with data. */
export async function getGscCountries(): Promise<GscCountries | null> {
  if (lastGoodCountries && fresh(lastCountriesAt)) return lastGoodCountries
  const stat = await getGscStat()
  if (!stat) return lastGoodCountries
  const to = new Date(`${stat.date}T00:00:00Z`)
  const from = new Date(to.getTime() - (GSC_COUNTRY_DAYS - 1) * 86_400_000)
  const rows = await queryGsc({ startDate: isoDay(from), endDate: isoDay(to), dimensions: ['country'], rowLimit: 250 })
  if (!rows) return lastGoodCountries
  const valid = rows.filter(r => typeof r.clicks === 'number' && r.clicks > 0 && /^[a-z]{3}$/.test(r.keys?.[0] ?? ''))
  if (valid.length === 0) {
    lastError = 'no-country-rows'
    return lastGoodCountries
  }
  const total = valid.reduce((sum, r) => sum + r.clicks, 0)
  const top = [...valid].sort((a, b) => b.clicks - a.clicks).slice(0, GSC_COUNTRY_LIMIT)
  lastGoodCountries = {
    from: isoDay(from),
    to: isoDay(to),
    total,
    rows: top.map(r => ({ code3: r.keys[0], clicks: r.clicks })),
  }
  lastCountriesAt = Date.now()
  return lastGoodCountries
}
