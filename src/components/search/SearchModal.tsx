'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSearch } from './useSearch'
import { groupResults, type SearchEntry } from './search-utils'
import { SearchResultGroup } from './SearchResultGroup'

interface Props {
  isOpen: boolean
  onClose: () => void
  lang: string
}

export function SearchModal({ isOpen, onClose, lang }: Props) {
  const router = useRouter()
  const { search, loadIndex, isLoaded, getPopular } = useSearch(lang)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const results = query.length >= 2 ? search(query) : []
  const groups = groupResults(results)
  const flatResults = groups.flatMap((g) => g.items.map((r) => r.item))
  const totalResults = flatResults.length

  const popularEntries = query.length < 2 ? getPopular() : []

  // Load index on open
  useEffect(() => {
    if (isOpen) {
      loadIndex()
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
      setActiveIndex(0)
    }
  }, [isOpen, loadIndex])

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleSelect = useCallback(
    (entry: SearchEntry) => {
      sessionStorage.setItem(
        'pq_last_search',
        JSON.stringify({
          query,
          resultId: entry.id,
          resultHub: entry.hub,
          resultSection: entry.section,
          resultLevel: entry.level,
          resultTags: entry.tags,
          timestamp: Date.now(),
        }),
      )
      onClose()
      router.push(entry.url)
    },
    [query, onClose, router],
  )

  const handlePopularSelect = useCallback(
    (entry: SearchEntry) => {
      onClose()
      router.push(entry.url)
    },
    [onClose, router],
  )

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (totalResults === 0) return

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((i) => Math.min(i + 1, totalResults - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((i) => Math.max(i - 1, 0))
      } else if (e.key === 'Enter') {
        const entry = flatResults[activeIndex]
        if (entry) handleSelect(entry)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, totalResults, activeIndex, flatResults, handleSelect, onClose])

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  if (!isOpen) return null

  let indexOffset = 0

  return (
    <>
      {/* Backdrop (desktop only) */}
      <div
        className="hidden md:block fixed inset-0 z-50 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search all guides"
        className={`
          fixed z-50 bg-white
          /* Mobile: full-screen */
          inset-0
          /* Desktop: centered modal */
          md:inset-auto md:top-[15vh] md:left-1/2 md:-translate-x-1/2
          md:w-full md:max-w-[560px] md:rounded-xl md:shadow-2xl md:border md:border-gray-200
          md:max-h-[70vh]
          flex flex-col overflow-hidden
        `}
      >
        {/* Search input row */}
        <div className="flex items-center gap-2 px-3 py-3 border-b border-gray-200 flex-shrink-0">
          <svg
            className="w-4 h-4 text-gray-400 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            inputMode="search"
            enterKeyHint="search"
            role="combobox"
            aria-expanded={totalResults > 0}
            aria-controls="search-listbox"
            aria-activedescendant={
              totalResults > 0 ? `search-item-${activeIndex}` : undefined
            }
            aria-label="Search guides"
            placeholder="Search guides..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-sm bg-transparent outline-none text-gray-900 placeholder-gray-400"
          />
          {/* Mobile: ✕ close button */}
          <button
            onClick={onClose}
            className="md:hidden w-11 h-11 flex items-center justify-center text-gray-400 hover:text-gray-600 flex-shrink-0 -mr-1"
            aria-label="Close search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          {/* Desktop: esc hint */}
          <kbd className="hidden md:inline text-[11px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 font-mono">
            esc
          </kbd>
        </div>

        {/* Results area */}
        <div
          id="search-listbox"
          role="listbox"
          ref={listRef}
          className="flex-1 overflow-y-auto p-2"
          aria-label={
            totalResults > 0
              ? `${totalResults} results for ${query}`
              : query.length >= 2
              ? 'No results'
              : 'Popular guides'
          }
        >
          {/* Loading state */}
          {!isLoaded && (
            <div className="flex items-center justify-center py-10 text-sm text-gray-400">
              <svg className="animate-spin w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Loading search...
            </div>
          )}

          {/* No results */}
          {isLoaded && query.length >= 2 && totalResults === 0 && (
            <p className="py-10 text-center text-sm text-gray-400">
              No results for &ldquo;{query}&rdquo;
            </p>
          )}

          {/* Search results */}
          {isLoaded && totalResults > 0 && (
            <div className="space-y-2">
              {groups.map((group) => {
                const offset = indexOffset
                indexOffset += group.items.length
                return (
                  <SearchResultGroup
                    key={`${group.hub}|||${group.section}`}
                    hub={group.hub}
                    section={group.section}
                    items={group.items}
                    activeIndex={activeIndex}
                    indexOffset={offset}
                    onHover={setActiveIndex}
                    onSelect={handleSelect}
                  />
                )
              })}
            </div>
          )}

          {/* Popular guides (default state) */}
          {isLoaded && query.length < 2 && popularEntries.length > 0 && (
            <div>
              <p className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-400 select-none">
                Popular Guides
              </p>
              {popularEntries.map((entry) => (
                <button
                  key={entry.id}
                  onClick={() => handlePopularSelect(entry)}
                  className="w-full text-left px-3 py-2.5 flex items-start gap-3 rounded-lg hover:bg-gray-50 transition-colors min-h-[48px]"
                >
                  <span
                    className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${
                      { 'prompt-engineering': 'bg-blue-500', 'local-llms': 'bg-green-500', 'power-local-llm': 'bg-emerald-600', 'prompt-bites': 'bg-purple-500', 'blog': 'bg-violet-600', 'product': 'bg-amber-500' }[entry.hub] ?? 'bg-gray-400'
                    }`}
                    aria-hidden="true"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{entry.title}</p>
                    <p className="text-xs text-gray-400 truncate">{entry.section}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop footer: keyboard hints */}
        {totalResults > 0 && (
          <div className="hidden md:flex items-center gap-4 px-4 py-2.5 border-t border-gray-100 text-[11px] text-gray-400 flex-shrink-0">
            <span><kbd className="font-mono border border-gray-200 rounded px-1">↑</kbd><kbd className="font-mono border border-gray-200 rounded px-1 ml-0.5">↓</kbd> Navigate</span>
            <span><kbd className="font-mono border border-gray-200 rounded px-1">↵</kbd> Open</span>
            <span><kbd className="font-mono border border-gray-200 rounded px-1">esc</kbd> Close</span>
          </div>
        )}
      </div>
    </>
  )
}
