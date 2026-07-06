'use client'

import { useCallback, useRef, useState } from 'react'
import type Fuse from 'fuse.js'
import type { SearchEntry } from './search-utils'

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

export function useSearch(lang: string) {
  const [allEntries, setAllEntries] = useState<SearchEntry[] | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  // The search index is one flat collection spanning all 9 locales. Building a
  // single global Fuse instance let non-active-locale docs (e.g. Japanese titles)
  // match and surface on every other locale's site. Instead build one index PER
  // locale, memoised, so a query only ever fuzzy-matches same-locale documents.
  const fuseCtorRef = useRef<typeof Fuse | null>(null)
  const indexCacheRef = useRef<Map<string, Fuse<SearchEntry>>>(new Map())

  const loadIndex = useCallback(async () => {
    if (allEntries) return
    try {
      const [{ default: FuseCtor }, res] = await Promise.all([
        import('fuse.js'),
        fetch('/api/search-index'),
      ])
      const data: SearchEntry[] = await res.json()
      fuseCtorRef.current = FuseCtor
      setAllEntries(data)
      setIsLoaded(true)
    } catch {
      setIsLoaded(true)
    }
  }, [allEntries])

  // Lazily build (and cache) a Fuse index scoped to the active locale only.
  const getLocaleIndex = useCallback((): Fuse<SearchEntry> | null => {
    if (!allEntries || !fuseCtorRef.current) return null
    const cache = indexCacheRef.current
    if (!cache.has(lang)) {
      const localeDocs = allEntries.filter((e) => e.lang === lang)
      cache.set(lang, new fuseCtorRef.current(localeDocs, FUSE_OPTIONS))
    }
    return cache.get(lang)!
  }, [allEntries, lang])

  const search = useCallback(
    (query: string): FuseResult[] => {
      const fuse = getLocaleIndex()
      if (!fuse || query.length < 2) return []
      const raw = fuse.search(query).filter((r) => (r.score ?? 1) <= MAX_SCORE)
      // Index is already locale-scoped, so each articleKey appears once; the
      // dedup stays as a defensive guard and to keep the score-sorted output stable.
      const seen = new Map<string, FuseResult>()
      for (const result of raw) {
        const key = result.item.articleKey
        if (!seen.has(key)) seen.set(key, result)
      }
      return Array.from(seen.values())
        .sort((a, b) => (a.score ?? Infinity) - (b.score ?? Infinity))
        .slice(0, 20)
    },
    [getLocaleIndex],
  )

  const getPopular = useCallback((): SearchEntry[] => {
    if (!allEntries) return []
    const filtered = allEntries.filter((e) => e.lang === lang)
    return filtered.slice(0, 6)
  }, [allEntries, lang])

  return { search, loadIndex, isLoaded, getPopular }
}
