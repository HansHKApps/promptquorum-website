'use client'

import { useCallback, useRef, useState } from 'react'
import type Fuse from 'fuse.js'
import type { SearchEntry } from './search-utils'
import { normalizeUnits } from './search-utils'

type FuseResult = import('fuse.js').FuseResult<SearchEntry>

// threshold 0.3, not 0.5: at 0.5 a typo like "nvidea" fuzzy-matched 1,669 of 3,176
// indexed entries (half the site) including totally unrelated titles. 0.3 keeps
// real typo tolerance while cutting that to the genuinely relevant handful.
const MAX_SCORE = 0.5
const FUSE_OPTIONS: import('fuse.js').IFuseOptions<SearchEntry> = {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'description', weight: 1.5 },
    { name: 'tags', weight: 2 },
    { name: 'section', weight: 1 },
  ],
  threshold: 0.3,
  includeScore: true,
  includeMatches: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
  fieldNormWeight: 1.5,
}

// --- Query hardening -------------------------------------------------------
// Latin queries shorter than this get exact word-PREFIX matching instead of
// fuzzy substring matching. With ignoreLocation + minMatchCharLength 2, a
// 3-char Latin query like "rag" otherwise matched mid-word ("f-rag-ilidad").
// CJK/Arabic short queries are left on the fuzzy path — 2–3 chars there is a
// whole word and substring matching is correct.
const MIN_FUZZY_LEN = 4
// A model-number token: up to 4 leading letters, 3–5 digits, up to 3 trailing
// letters — matches "rtx4060", "4060", "5090ti", "600". A 2-digit "16gb"/"12gb"
// does NOT qualify, so memory-size queries stay on the fuzzy path (Finding #6).
const MODEL_TOKEN = /^[a-z]{0,4}\d{3,5}[a-z]{0,3}$/i

const norm = (s: string): string =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

const isLatinShort = (q: string): boolean =>
  q.length < MIN_FUZZY_LEN && /^[\p{Script=Latin}0-9\s]+$/u.test(q)

const tokenize = (text: string): string[] =>
  norm(text).split(/[^\p{L}\p{N}]+/u).filter(Boolean)

// Model-number tokens in a query, with any leading currency symbol stripped
// ("$600" → "600"). Empty for prose queries, which keep the fuzzy behavior.
const modelTokens = (q: string): string[] =>
  q
    .trim()
    .split(/\s+/)
    .map((t) => t.replace(/^[$€£¥]/, ''))
    .filter((t) => MODEL_TOKEN.test(t))

// Whether a model token appears as a WHOLE token in the title (unit-normalized).
// "4060" must not match "3060", "40600", or an incidental "$600"; the digit run
// must stand on word boundaries.
const titleHasModelToken = (title: string, token: string): boolean => {
  const hay = normalizeUnits(title)
  const t = normalizeUnits(token).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`\\b${t}\\b`, 'i').test(hay)
}

// Rank a doc for a short Latin prefix query: title > tags > description/section.
// Returns null when no field has a word starting with the query.
function shortPrefixRank(e: SearchEntry, nq: string): number | null {
  if (tokenize(e.title).some((t) => t.startsWith(nq))) return 0
  if (tokenize((e.tags ?? []).join(' ')).some((t) => t.startsWith(nq))) return 0.1
  if (tokenize(`${e.description ?? ''} ${e.section ?? ''}`).some((t) => t.startsWith(nq))) return 0.2
  return null
}

// Native-language hardware terms and brand transliterations aren't present in
// the indexed fields — articles use the literal "GPU"/"NVIDIA" — so searching
// "carte graphique" / "tarjeta gráfica" / "英伟达" returned zero. Expand such a
// query to also search the canonical term. `terms` are pre-normalized (accent-
// stripped, lowercased) to match norm() output.
const SYNONYM_EXPANSIONS: { terms: string[]; expand: string[] }[] = [
  { terms: ['carte graphique', 'cartes graphiques'], expand: ['gpu'] },
  { terms: ['tarjeta grafica', 'tarjetas graficas'], expand: ['gpu'] },
  { terms: ['grafikkarte', 'grafikkarten'], expand: ['gpu'] },
  { terms: ['graphics card', 'graphics cards'], expand: ['gpu'] },
  { terms: ['グラフィックカード', 'グラフィックス カード', 'グラボ'], expand: ['gpu'] },
  { terms: ['그래픽 카드', '그래픽카드'], expand: ['gpu'] },
  { terms: ['显卡', '圖形卡', '图形卡'], expand: ['gpu'] },
  { terms: ['英伟达'], expand: ['nvidia'] },
]

// Extra query strings implied by native-term synonyms of the (normalized) query.
function synonymExpansions(nq: string): string[] {
  const out: string[] = []
  for (const syn of SYNONYM_EXPANSIONS) {
    if (syn.terms.some((t) => nq.includes(norm(t)))) out.push(...syn.expand)
  }
  return out
}

export function useSearch(lang: string) {
  const [allEntries, setAllEntries] = useState<SearchEntry[] | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  // The search index is one flat collection spanning all 9 locales. Building a
  // single global Fuse instance let non-active-locale docs (e.g. Japanese titles)
  // match and surface on every other locale's site. Instead build one index PER
  // locale, memoised, so a query only ever fuzzy-matches same-locale documents.
  const fuseCtorRef = useRef<typeof Fuse | null>(null)
  const indexCacheRef = useRef<Map<string, { fuse: Fuse<SearchEntry>; docs: SearchEntry[] }>>(new Map())

  const loadIndex = useCallback(async () => {
    if (allEntries) return
    try {
      const [{ default: FuseCtor }, res] = await Promise.all([
        import('fuse.js'),
        fetch(`/api/search-index?lang=${lang}`),
      ])
      const data: SearchEntry[] = await res.json()
      fuseCtorRef.current = FuseCtor
      setAllEntries(data)
      setIsLoaded(true)
    } catch {
      setIsLoaded(true)
    }
  }, [allEntries, lang])

  // Lazily build (and cache) a Fuse index + doc list scoped to the active locale.
  const getLocaleData = useCallback((): { fuse: Fuse<SearchEntry>; docs: SearchEntry[] } | null => {
    if (!allEntries || !fuseCtorRef.current) return null
    const cache = indexCacheRef.current
    if (!cache.has(lang)) {
      const docs = allEntries.filter((e) => e.lang === lang)
      cache.set(lang, { fuse: new fuseCtorRef.current(docs, FUSE_OPTIONS), docs })
    }
    return cache.get(lang)!
  }, [allEntries, lang])

  const dedupeSlice = (results: FuseResult[]): FuseResult[] => {
    // Index is already locale-scoped, so each articleKey appears once per query;
    // when merging a query with its synonym expansions the same article can recur,
    // so keep the best (lowest) score per key, then sort and cap.
    const seen = new Map<string, FuseResult>()
    for (const result of results) {
      const key = result.item.articleKey
      const prev = seen.get(key)
      if (!prev || (result.score ?? Infinity) < (prev.score ?? Infinity)) seen.set(key, result)
    }
    return Array.from(seen.values())
      .sort((a, b) => (a.score ?? Infinity) - (b.score ?? Infinity))
      .slice(0, 20)
  }

  // Run one query string through the locale index (short-prefix vs fuzzy branch).
  const runOne = useCallback(
    (q: string, data: { fuse: Fuse<SearchEntry>; docs: SearchEntry[] }): FuseResult[] => {
      // Short Latin queries (1–3 chars): exact word-prefix only, no fuzzy
      // substring. Kills mid-word false positives like "rag" → "fragilidad".
      if (isLatinShort(q)) {
        const nq = norm(q)
        const prefixHits: FuseResult[] = []
        data.docs.forEach((item, i) => {
          const rank = shortPrefixRank(item, nq)
          if (rank !== null) prefixHits.push({ item, refIndex: i, score: rank } as FuseResult)
        })
        return prefixHits
      }

      let raw = data.fuse.search(q).filter((r) => (r.score ?? 1) <= MAX_SCORE)

      // Model-number queries ("rtx 4060", "3060", "$600"): every model token must
      // appear as a WHOLE token in the TITLE — not a mid-token digit fragment
      // ("4060" ≠ "3060"/"$600") and not an incidental description mention. When
      // no title truly matches the model, an empty result is the correct answer.
      const mts = modelTokens(q)
      if (mts.length > 0) {
        raw = raw.filter((r) => mts.every((tk) => titleHasModelToken(r.item.title, tk)))
      }

      return raw
    },
    [],
  )

  const search = useCallback(
    (query: string): FuseResult[] => {
      const data = getLocaleData()
      // Normalize memory-unit spacing so "16 GB" and "16GB" search identically.
      const q = normalizeUnits(query.trim())
      if (!data || q.length < 2) return []

      // Expand native hardware terms / brand transliterations to the canonical
      // term (e.g. "carte graphique" → also search "gpu"), then merge.
      const queries = [q, ...synonymExpansions(norm(q))]
      const merged = queries.flatMap((sq) => runOne(sq, data))
      return dedupeSlice(merged)
    },
    [getLocaleData, runOne],
  )

  const getPopular = useCallback((): SearchEntry[] => {
    if (!allEntries) return []
    const filtered = allEntries.filter((e) => e.lang === lang)
    return filtered.slice(0, 6)
  }, [allEntries, lang])

  return { search, loadIndex, isLoaded, getPopular }
}
