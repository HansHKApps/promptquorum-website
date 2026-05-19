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
  threshold: 0.35,
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
      const filtered = data.filter((e) => e.lang === lang)
      fuseRef.current = new Fuse(filtered, FUSE_OPTIONS)
      setIsLoaded(true)
    } catch {
      setIsLoaded(true)
    }
  }, [allEntries, lang])

  useEffect(() => {
    if (!allEntries) return
    import('fuse.js').then(({ default: Fuse }) => {
      const filtered = allEntries.filter((e) => e.lang === lang)
      fuseRef.current = new Fuse(filtered, FUSE_OPTIONS)
    })
  }, [lang, allEntries])

  const search = useCallback(
    (query: string): FuseResult[] => {
      if (!fuseRef.current || query.length < 2) return []
      return fuseRef.current.search(query).slice(0, 20)
    },
    [],
  )

  const getPopular = useCallback((): SearchEntry[] => {
    if (!allEntries) return []
    const filtered = allEntries.filter((e) => e.lang === lang)
    return filtered.slice(0, 6)
  }, [allEntries, lang])

  return { search, loadIndex, isLoaded, getPopular }
}
