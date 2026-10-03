import { IMAGE_CLOUD_APPS } from './cloud-apps.image'
import type { CloudApp } from './types'

// Words that add no identity to an app name. Deliberately small.
const STOPWORDS = new Set([
  'alternative', 'alternatives', 'to', 'for', 'like', 'the', 'a', 'an', 'local', 'offline', 'free',
  'replacement', 'instead', 'of', 'vs', 'or', 'and', 'open', 'source', 'self', 'hosted', 'selfhosted',
])

export function normalizeQuery(raw: string): string {
  return raw
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .split(' ')
    .filter((tok) => tok.length > 0 && !STOPWORDS.has(tok))
    .join(' ')
    .trim()
}

/** Misses are stored only when they are this short; longer free text is more likely to hold personal data. */
export const MAX_LOGGED_MISS_WORDS = 3

/** Privacy guard for what may be stored: no emails, URLs, long digit runs; short text only. */
export function isLoggableQuery(raw: string): boolean {
  const norm = normalizeQuery(raw)
  if (norm.length < 2 || norm.length > 60) return false
  if (raw.includes('@')) return false
  if (/\d{6,}/.test(raw)) return false
  if (/https?:|www\./i.test(raw)) return false
  return true
}

interface AliasEntry {
  app: CloudApp
  norm: string
  tokens: string[]
}

const INDEX: AliasEntry[] = IMAGE_CLOUD_APPS.flatMap((app) =>
  [app.name, ...app.aliases]
    .map((a) => normalizeQuery(a))
    .filter((n) => n.length > 0)
    .map((norm) => ({ app, norm, tokens: norm.split(' ') })),
)

export const SUPPORTED_APPS: readonly CloudApp[] = IMAGE_CLOUD_APPS

export type MatchResult =
  | { kind: 'hit'; app: CloudApp; how: 'exact' | 'contains' | 'fuzzy' }
  | { kind: 'miss'; normalized: string }
  | { kind: 'invalid' }

function containsSequence(haystack: string[], needle: string[]): boolean {
  if (needle.length === 0 || needle.length > haystack.length) return false
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let ok = true
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) { ok = false; break }
    }
    if (ok) return true
  }
  return false
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    let diagonal = prev[0]
    prev[0] = i
    for (let j = 1; j <= b.length; j++) {
      const temp = prev[j]
      prev[j] = a[i - 1] === b[j - 1] ? diagonal : 1 + Math.min(diagonal, prev[j], prev[j - 1])
      diagonal = temp
    }
  }
  return prev[b.length]
}

export function matchCloudApp(raw: string): MatchResult {
  const normalized = normalizeQuery(raw)
  if (normalized.length < 2) return { kind: 'invalid' }
  const qTokens = normalized.split(' ')

  const exact = INDEX.find((e) => e.norm === normalized)
  if (exact) return { kind: 'hit', app: exact.app, how: 'exact' }

  let best: AliasEntry | null = null
  for (const e of INDEX) {
    if (!containsSequence(qTokens, e.tokens)) continue
    if (
      !best ||
      e.tokens.length > best.tokens.length ||
      (e.tokens.length === best.tokens.length && e.norm.length > best.norm.length)
    ) {
      best = e
    }
  }
  if (best) return { kind: 'hit', app: best.app, how: 'contains' }

  for (const e of INDEX) {
    if (e.norm.length < 5) continue // too short for typo tolerance
    const max = e.norm.length <= 8 ? 1 : 2
    const n = e.tokens.length
    for (let i = 0; i + n <= qTokens.length; i++) {
      const windowText = qTokens.slice(i, i + n).join(' ')
      if (Math.abs(windowText.length - e.norm.length) <= max && levenshtein(windowText, e.norm) <= max) {
        return { kind: 'hit', app: e.app, how: 'fuzzy' }
      }
    }
  }

  return { kind: 'miss', normalized }
}
