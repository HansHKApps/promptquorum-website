// Local AI App Directory — filtering, sorting, and live-count logic.
// Pure functions only (no React) so they're easy to unit-test independently
// of DirectoryClient's state wiring.

import type { ToolRecord, UseCaseKey } from '@/lib/power-local-llm/apps/types'
import type { FilterOptionCount, FilterState, MachineType, SortDir, SortKey } from './types'
import { hardwareSortValue } from './hardware'

/** True for a value that means "not yet researched" — never offered as a selectable filter option. */
function isUnresearched(value: unknown): boolean {
  return value == null || value === 'TODO'
}

/**
 * Reads the raw filter-relevant field for one group. A plain
 * `app[FILTER_GROUP_TO_FIELD[group]]` lookup widens to a union across every
 * ToolRecord field (including array-of-object fields like `changelog`),
 * which TypeScript then refuses to treat as `string | string[]` — so this
 * switches explicitly instead of indexing through a lookup table.
 */
function fieldForGroup(app: ToolRecord, group: keyof FilterState): string | string[] | null | 'TODO' {
  switch (group) {
    case 'locality': return app.locality
    case 'engine': return app.engine
    case 'worksWith': return app.worksWith
    case 'platforms': return app.platforms
    case 'layer': return app.layer
    case 'price': return app.price
  }
}

/** Does this tool match the given filter group's currently-selected values (if any)? */
function matchesGroup(app: ToolRecord, group: keyof FilterState, selected: Set<string>): boolean {
  if (selected.size === 0) return true
  const field = fieldForGroup(app, group)
  if (isUnresearched(field)) return false
  if (Array.isArray(field)) {
    return field.some((v) => selected.has(v))
  }
  return selected.has(String(field))
}

function matchesAllGroupsExcept(app: ToolRecord, filters: FilterState, exceptGroup?: keyof FilterState): boolean {
  return (Object.keys(filters) as (keyof FilterState)[]).every((group) => {
    if (group === exceptGroup) return true
    return matchesGroup(app, group, filters[group])
  })
}

function matchesWant(app: ToolRecord, want: string | null): boolean {
  if (!want) return true
  if (!app.uses || isUnresearched(app.uses)) return false
  return app.uses.includes(want as UseCaseKey)
}

function matchesSearch(app: ToolRecord, search: string): boolean {
  if (!search.trim()) return true
  const needle = search.trim().toLowerCase()
  const haystacks = [
    app.name,
    app.tagline.en ?? '',
    app.license,
  ]
  return haystacks.some((h) => h.toLowerCase().includes(needle))
}

export interface FilterQuery {
  filters: FilterState
  search: string
  want: string | null
}

/** Full filter pass: search + want-chip + all sidebar groups. */
export function filterTools(apps: ToolRecord[], query: FilterQuery): ToolRecord[] {
  return apps.filter(
    (app) =>
      matchesSearch(app, query.search) &&
      matchesWant(app, query.want) &&
      matchesAllGroupsExcept(app, query.filters)
  )
}

/**
 * Live counts for one filter group's checkbox options — computed against the
 * tool set that already matches search, the want-chip, and every OTHER
 * filter group (but not this one), so checking a box in this group never
 * makes its own sibling counts self-referentially shrink to just the
 * selection. Tools with a `null`/`'TODO'` value for this field are excluded
 * from the countable set entirely (never surfaced as a selectable option).
 */
export function countsForGroup(apps: ToolRecord[], query: FilterQuery, group: keyof FilterState): FilterOptionCount[] {
  const candidates = apps.filter(
    (app) => matchesSearch(app, query.search) && matchesWant(app, query.want) && matchesAllGroupsExcept(app, query.filters, group)
  )
  const counts = new Map<string, number>()
  for (const app of candidates) {
    const field = fieldForGroup(app, group)
    if (isUnresearched(field)) continue
    const values = Array.isArray(field) ? field : [String(field)]
    for (const v of values) {
      if (isUnresearched(v)) continue
      counts.set(v, (counts.get(v) ?? 0) + 1)
    }
  }
  return Array.from(counts.entries())
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value))
}

/** Counts for the "I want to…" chips, keyed by UseCaseKey, over the full (unfiltered-by-want) set. */
export function countsForUses(apps: ToolRecord[], query: Omit<FilterQuery, 'want'>): FilterOptionCount[] {
  const candidates = apps.filter(
    (app) => matchesSearch(app, query.search) && matchesAllGroupsExcept(app, query.filters)
  )
  const counts = new Map<string, number>()
  for (const app of candidates) {
    if (!app.uses || isUnresearched(app.uses)) continue
    for (const u of app.uses) {
      counts.set(u, (counts.get(u) ?? 0) + 1)
    }
  }
  return Array.from(counts.entries()).map(([value, count]) => ({ value, count }))
}

function nullsLast<T>(a: T | null, b: T | null, cmp: (a: T, b: T) => number): number {
  if (a == null && b == null) return 0
  if (a == null) return 1
  if (b == null) return -1
  return cmp(a, b)
}

export function sortTools(apps: ToolRecord[], key: SortKey, dir: SortDir, machine: MachineType): ToolRecord[] {
  const sign = dir === 'asc' ? 1 : -1
  const sorted = [...apps].sort((a, b) => {
    switch (key) {
      case 'name':
        return sign * a.name.localeCompare(b.name)
      case 'stars':
        return sign * nullsLast(a.stars, b.stars, (x, y) => x - y)
      case 'added':
        return sign * nullsLast(a.addedDate, b.addedDate, (x, y) => x.localeCompare(y))
      case 'ram':
        return sign * nullsLast(hardwareSortValue(a.hardware, machine, a.engine), hardwareSortValue(b.hardware, machine, b.engine), (x, y) => x - y)
      case 'status': {
        const order: Record<string, number> = { tested: 0, verified: 1, listed: 2 }
        return sign * ((order[a.status] ?? 99) - (order[b.status] ?? 99))
      }
      default:
        return 0
    }
  })
  return sorted
}

export function countByLocality(apps: ToolRecord[]): Record<'local' | 'hybrid' | 'cloud', number> {
  const counts = { local: 0, hybrid: 0, cloud: 0 }
  for (const app of apps) {
    if (app.locality === 'local' || app.locality === 'hybrid' || app.locality === 'cloud') {
      counts[app.locality]++
    }
  }
  return counts
}
