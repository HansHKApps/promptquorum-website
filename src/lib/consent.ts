// Single source of truth for the visitor's cookie/tracking choice. Every component that
// loads a script or writes non-essential storage asks hasConsent() here instead of
// re-parsing localStorage itself.

export const CONSENT_STORAGE_KEY = 'analytics_consent'
export const CONSENT_EVENT = 'consent-changed'
export const OPEN_CONSENT_EVENT = 'open-cookie-banner'
/** Bump to re-prompt every visitor. v2 added the `recordings` category. */
export const CONSENT_VERSION = 2
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000

export type ConsentCategory = 'analytics' | 'recordings' | 'marketing'

export type ConsentRecord = {
  state: 'granted' | 'denied' | 'custom'
  analytics: boolean
  recordings: boolean
  marketing: boolean
  ts: number
  version: number
}

type Choices = Pick<ConsentRecord, ConsentCategory>

/** Raw stored record, including stale/older-version ones. Null when absent or unreadable. */
export function readStoredConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null
    if (raw === 'granted' || raw === 'denied') {
      // Legacy string form, pre-categories.
      return {
        state: raw,
        analytics: raw === 'granted',
        recordings: false,
        marketing: false,
        ts: 0,
        version: 0,
      }
    }
    const parsed = JSON.parse(raw) as Partial<ConsentRecord>
    if (typeof parsed.ts !== 'number' || typeof parsed.version !== 'number') return null
    return {
      state: parsed.state ?? 'denied',
      analytics: !!parsed.analytics,
      recordings: !!parsed.recordings,
      marketing: !!parsed.marketing,
      ts: parsed.ts,
      version: parsed.version,
    }
  } catch {
    return null
  }
}

/** True when the stored choice is missing, older than the current version, or over a year old. */
export function isConsentStale(r: ConsentRecord | null): boolean {
  return !r || r.version !== CONSENT_VERSION || Date.now() - r.ts > MAX_AGE_MS
}

/**
 * The choice that is currently in force. A stale or older-version record grants nothing:
 * the visitor is re-prompted, and until they answer, nothing optional runs.
 */
export function getConsent(): ConsentRecord | null {
  const r = readStoredConsent()
  return isConsentStale(r) ? null : r
}

export function hasConsent(category: ConsentCategory): boolean {
  return !!getConsent()?.[category]
}

export function setConsent(choices: Choices, lang: string): ConsentRecord {
  const all = choices.analytics && choices.recordings && choices.marketing
  const none = !choices.analytics && !choices.recordings && !choices.marketing
  const record: ConsentRecord = {
    state: all ? 'granted' : none ? 'denied' : 'custom',
    ...choices,
    ts: Date.now(),
    version: CONSENT_VERSION,
  }
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record))
  } catch {
    // Storage blocked: the choice cannot persist, so the dialog will show again.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: record }))
  // Fire-and-forget server-side log (GDPR Art. 7(1) proof). Never block UI.
  fetch('/api/consent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...record, lang }),
    keepalive: true,
  }).catch(() => {})
  return record
}

/** Runs `cb` now and on every later consent change. Returns the unsubscribe function. */
export function onConsentChange(cb: () => void): () => void {
  cb()
  window.addEventListener(CONSENT_EVENT, cb)
  return () => window.removeEventListener(CONSENT_EVENT, cb)
}

/**
 * Non-essential `pq_*` keys, grouped by the consent category that allows writing them.
 * Analytics: reading-behaviour signals that personalise the hubs.
 * Marketing: counters that only time the push-notification prompt.
 */
export const CATEGORY_STORAGE_KEYS = {
  analytics: {
    local: [] as string[],
    session: ['pq_previous_page', 'pq_last_search', 'pq_level_selection'],
  },
  marketing: {
    local: ['pq_session_count', 'pq_time_on_site_ms', 'push_prompt_dismissed_until', 'pq_push_subscribed'],
    session: ['pq_session_active'],
  },
} as const

/** Deletes the storage keys of a category the visitor has not (or no longer) allowed. */
export function clearCategoryStorage(category: 'analytics' | 'marketing'): void {
  try {
    CATEGORY_STORAGE_KEYS[category].local.forEach((k) => window.localStorage.removeItem(k))
    CATEGORY_STORAGE_KEYS[category].session.forEach((k) => window.sessionStorage.removeItem(k))
  } catch {
    // ignore
  }
}

/** Removes Microsoft Clarity's first-party cookies (_clck, _clsk) on this host and its parents. */
export function clearClarityCookies(): void {
  const host = window.location.hostname.split('.')
  const domains = ['', ...host.map((_, i) => '.' + host.slice(i).join('.'))]
  for (const name of ['_clck', '_clsk', 'CLID', 'ANONCHK', 'MR', 'MUID', 'SM']) {
    for (const d of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ''}`
    }
  }
}
