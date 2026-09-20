'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearch } from '@/components/search/useSearch'
import { HomeIcon } from './HomeIcon'
import { SURFACE_CLASS } from './homeSurface'

type Intent = 'compare' | 'learn' | 'find-app'

const INTENTS: { key: Intent; label: string; example: string }[] = [
  { key: 'find-app', label: 'Find an app', example: 'chat client with MCP support' },
  { key: 'learn', label: 'Learn / understand', example: 'what is quantization' },
  { key: 'compare', label: 'Compare tools', example: 'compare image tools' },
]

export function IntentSearchBlock() {
  const [intent, setIntent] = useState<Intent>('find-app')
  const [query, setQuery] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const { search, loadIndex, isLoaded } = useSearch('en')

  const rawResults = hasSearched && isLoaded ? search(query) : []

  // "Find an app" and "Learn" have a real structural marker to filter on.
  // "Compare tools" has none yet — no comparison-article content exists
  // (see ComparisonToolShell.tsx) — so it ships the selector per the site's
  // own fallback rule and runs flat search underneath.
  // TODO(compare-intent): wire to a contentType: 'comparison' filter once
  // category comparison articles exist.
  const filtered = rawResults.filter((r) => {
    if (intent === 'find-app') return r.item.hub === 'power-local-llm' && r.item.contentType === 'tool'
    if (intent === 'learn') return r.item.contentType === 'article'
    return true
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim()) return
    void loadIndex()
    setHasSearched(true)
  }

  return (
    <div className={`rounded-xl border ${SURFACE_CLASS.action} p-6 h-full`}>
      <h2 className="text-xl font-bold text-text-primary mb-1 flex items-center gap-2">
        <HomeIcon name="search" size={20} />
        Find What You Need
      </h2>
      <p className="text-sm text-text-secondary mb-4">Pick what you're after, then search.</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {INTENTS.map((i) => (
          <button
            key={i.key}
            type="button"
            onClick={() => {
              setIntent(i.key)
              setHasSearched(false)
            }}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              intent === i.key
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border text-text-secondary hover:border-primary/50'
            }`}
          >
            {i.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => void loadIndex()}
          placeholder={`e.g. "${INTENTS.find((i) => i.key === intent)?.example}"`}
          className="min-w-0 flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        <button type="submit" className="shrink-0 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
          Search
        </button>
      </form>

      {hasSearched && (
        <ul className="mt-3 space-y-1.5">
          {filtered.length === 0 && <li className="text-sm text-text-muted">No results — try a different search.</li>}
          {filtered.slice(0, 8).map((r) => (
            <li key={r.item.id}>
              <Link href={r.item.url} className="text-sm font-semibold text-text-primary hover:text-primary transition-colors">
                {r.item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
