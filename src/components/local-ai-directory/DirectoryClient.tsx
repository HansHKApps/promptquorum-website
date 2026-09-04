'use client'

// Local AI App Directory — interactive hub for the local-llm-software-directory-2026
// slug (Phase 3 of /Users/hanskuepper/.claude/plans/see-the-directory-page-virtual-cocke.md).
//
// Follows the same convention as PowerLocalLLMPostClient.tsx: `lang` is a
// REQUIRED prop resolved server-side from the URL path, never a useLang()
// call, so crawlers see the correct language on every locale URL immediately
// (see that file's header comment / CLAUDE.md "Server-to-Client Language
// Handoff" section for why).
//
// Integration into page-helpers.tsx (rendering this instead of the standard
// section renderer for this one slug) is a deliberately separate follow-up
// step — this file only builds the UI in isolation.

import { useMemo, useState } from 'react'
import type { Language } from '@/lib/blog/blogContent'
import type { ToolRecord } from '@/lib/power-local-llm/apps/types'
import { StatsBar } from './StatsBar'
import { WantChips } from './WantChips'
import { FilterSidebar } from './FilterSidebar'
import { ToolCard } from './ToolCard'
import { ToolTable } from './ToolTable'
import { ToolDrawer } from './ToolDrawer'
import { SearchIcon, GridIcon, TableIcon, CloseIcon } from './icons'
import { countByLocality, countsForGroup, countsForUses, filterTools, sortTools } from './filters'
import { detectDefaultMachine, readStoredMachine, writeStoredMachine } from './hardware'
import { emptyFilterState, type FilterState, type MachineType, type SortDir, type SortKey, type ViewMode } from './types'
import { cn } from '@/lib/utils'

const MACHINE_LABEL: Record<MachineType, string> = {
  dgpu: 'Discrete GPU',
  apple: 'Apple Silicon',
  cpu: 'CPU only',
}

interface Props {
  apps: ToolRecord[]
  lang: Language
}

export function DirectoryClient({ apps, lang }: Props) {
  const [search, setSearch] = useState('')
  const [want, setWant] = useState<string | null>(null)
  const [filters, setFilters] = useState<FilterState>(emptyFilterState)
  const [view, setView] = useState<ViewMode>('cards')
  const [sortKey, setSortKey] = useState<SortKey>('stars')
  const [sortDir, setSortDir] = useState<SortDir>('desc')
  // Machine choice: default from navigator.platform, override from any
  // previously-persisted viewer choice. A lazy useState initializer (not an
  // effect) so this resolves on first client render with no extra re-render
  // — server render always sees `typeof window === 'undefined'` and falls
  // back to 'dgpu', which is an acceptable one-time hydration divergence for
  // a per-viewer convenience preference like this one.
  const [machine, setMachine] = useState<MachineType>(() => {
    if (typeof window === 'undefined') return 'dgpu'
    return readStoredMachine() ?? detectDefaultMachine()
  })
  const [openSlug, setOpenSlug] = useState<string | null>(null)

  const handleMachineChange = (next: MachineType) => {
    setMachine(next)
    writeStoredMachine(next)
  }

  const query = useMemo(() => ({ filters, search, want }), [filters, search, want])

  const filtered = useMemo(() => filterTools(apps, query), [apps, query])
  const sorted = useMemo(() => sortTools(filtered, sortKey, sortDir, machine), [filtered, sortKey, sortDir, machine])

  const countsByGroup = useMemo(() => {
    const groups: (keyof FilterState)[] = ['locality', 'engine', 'worksWith', 'platforms', 'layer', 'price']
    return Object.fromEntries(groups.map((g) => [g, countsForGroup(apps, query, g)])) as Record<keyof FilterState, ReturnType<typeof countsForGroup>>
  }, [apps, query])

  const wantCounts = useMemo(() => countsForUses(apps, { filters, search }), [apps, filters, search])

  const localityCounts = useMemo(() => countByLocality(filtered), [filtered])

  const hasActiveFilters = Object.values(filters).some((s) => s.size > 0) || want != null || search.trim() !== ''

  const clearAllFilters = () => {
    setFilters(emptyFilterState())
    setWant(null)
    setSearch('')
  }

  const toggleFilter = (group: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const next = new Set(prev[group])
      if (next.has(value)) next.delete(value)
      else next.add(value)
      return { ...prev, [group]: next }
    })
  }

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir(key === 'name' ? 'asc' : 'desc')
    }
  }

  const openTool = sorted.find((a) => a.slug === openSlug) ?? apps.find((a) => a.slug === openSlug) ?? null

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="space-y-4 mb-6">
        <StatsBar total={apps.length} visible={sorted.length} byLocality={localityCounts} />
        <WantChips counts={wantCounts} selected={want} onSelect={setWant} />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <FilterSidebar
          countsByGroup={countsByGroup}
          filters={filters}
          onToggle={toggleFilter}
          onClearAll={clearAllFilters}
          hasActiveFilters={hasActiveFilters}
        />

        <div className="flex-1 min-w-0">
          {/* Search + machine + view toggle */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary/60" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, tagline, or license…"
                className="w-full rounded-lg border border-primary/20 bg-white pl-9 pr-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-secondary/60 hover:text-text-secondary"
                >
                  <CloseIcon className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <label className="flex items-center gap-2 text-sm">
              <span className="text-text-secondary shrink-0">My machine:</span>
              <select
                value={machine}
                onChange={(e) => handleMachineChange(e.target.value as MachineType)}
                className="rounded-lg border border-primary/20 bg-white px-2.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {(Object.keys(MACHINE_LABEL) as MachineType[]).map((m) => (
                  <option key={m} value={m}>{MACHINE_LABEL[m]}</option>
                ))}
              </select>
            </label>

            <div className="inline-flex rounded-lg border border-primary/20 overflow-hidden shrink-0" role="group" aria-label="View mode">
              <button
                type="button"
                onClick={() => setView('cards')}
                aria-pressed={view === 'cards'}
                className={cn('flex items-center gap-1.5 px-3 py-2 text-sm font-medium', view === 'cards' ? 'bg-primary text-white' : 'bg-white text-text-secondary hover:bg-primary/5')}
              >
                <GridIcon className="h-4 w-4" />
                Cards
              </button>
              <button
                type="button"
                onClick={() => setView('table')}
                aria-pressed={view === 'table'}
                className={cn('flex items-center gap-1.5 px-3 py-2 text-sm font-medium border-l border-primary/20', view === 'table' ? 'bg-primary text-white' : 'bg-white text-text-secondary hover:bg-primary/5')}
              >
                <TableIcon className="h-4 w-4" />
                Table
              </button>
            </div>
          </div>

          {view === 'cards' && (
            <>
              {/* Card-view sort control — table view sorts via clickable column headers instead. */}
              <div className="flex items-center gap-2 mb-4 text-sm">
                <span className="text-text-secondary">Sort by:</span>
                <select
                  value={sortKey}
                  onChange={(e) => handleSort(e.target.value as SortKey)}
                  className="rounded-lg border border-primary/20 bg-white px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="stars">Stars</option>
                  <option value="name">Name</option>
                  <option value="added">Recently added</option>
                  <option value="ram">Hardware requirement</option>
                  <option value="status">Status</option>
                </select>
                <button
                  type="button"
                  onClick={() => setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))}
                  className="text-text-secondary hover:text-primary"
                  aria-label="Toggle sort direction"
                >
                  {sortDir === 'asc' ? '↑' : '↓'}
                </button>
              </div>

              {sorted.length === 0 ? (
                <p className="text-sm text-text-secondary italic py-10 text-center">No tools match these filters.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {sorted.map((app) => (
                    <ToolCard key={app.slug} app={app} lang={lang} machine={machine} onOpen={setOpenSlug} />
                  ))}
                </div>
              )}
            </>
          )}

          {view === 'table' && (
            sorted.length === 0 ? (
              <p className="text-sm text-text-secondary italic py-10 text-center">No tools match these filters.</p>
            ) : (
              <ToolTable
                apps={sorted}
                lang={lang}
                machine={machine}
                sortKey={sortKey}
                sortDir={sortDir}
                onSort={handleSort}
                onOpen={setOpenSlug}
              />
            )
          )}
        </div>
      </div>

      <ToolDrawer
        app={openTool}
        allApps={apps}
        lang={lang}
        machine={machine}
        onClose={() => setOpenSlug(null)}
        onOpenSlug={setOpenSlug}
      />
    </div>
  )
}
