'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type Fuse from 'fuse.js'
import type { SearchEntry } from './search-utils'

type FuseResult = import('fuse.js').FuseResult<SearchEntry>

const FUSE_OPTIONS: import('fuse.js').IFuseOptions<SearchEntry> = {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'description', weight: 1.5 },
    { name: 'tags', weight: 2 },
    { name: 'section', weight: 1 },
  ],
  threshold: 0.50,
  includeMatches: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
  fieldNormWeight: 1.5,
}

export function useSearch(lang: string) {
  const [allEntries, setAllEntries] = useState<SearchEntry[] | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const fuseRef = useRef<Fuse<SearchEntry> | null>(null)

  const loadIndex = useCallback(async () => {
    if (allEntries) return
    try {
      const [{ default: Fuse }, res] = await Promise.all([
        import('fuse.js'),
        fetch('/api/search-index'),
      ])
      const data: SearchEntry[] = await res.json()
      setAllEntries(data)
      fuseRef.current = new Fuse(data, FUSE_OPTIONS)
      setIsLoaded(true)
    } catch {
      setIsLoaded(true)
    }
  }, [allEntries])

  useEffect(() => {
    if (!allEntries) return
    import('fuse.js').then(({ default: Fuse }) => {
      fuseRef.current = new Fuse(allEntries, FUSE_OPTIONS)
    })
  }, [allEntries])

  const search = useCallback(
    (query: string): FuseResult[] => {
      if (!fuseRef.current || query.length < 2) return []
      const raw = fuseRef.current.search(query)
      const seen = new Map<string, FuseResult>()
      for (const result of raw) {
        const key = result.item.articleKey
        if (!seen.has(key)) {
          seen.set(key, result)
        } else if (result.item.lang === lang && seen.get(key)!.item.lang !== lang) {
          seen.set(key, result)
        }
      }
      return Array.from(seen.values())
        .sort((a, b) => (a.score ?? Infinity) - (b.score ?? Infinity))
        .slice(0, 20)
    },
    [lang],
  )

  const getPopular = useCallback((): SearchEntry[] => {
    if (!allEntries) return []
    const filtered = allEntries.filter((e) => e.lang === lang)
    return filtered.slice(0, 6)
  }, [allEntries, lang])

  return { search, loadIndex, isLoaded, getPopular }
}
