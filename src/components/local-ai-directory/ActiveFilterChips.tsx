'use client'

// Removable chips summarizing every active filter (want-chip + each
// checked filter-group value) — page-redesign-v2.md §2's "active-filter
// chips with ×" row under the collapsible filter panel.

import { CloseIcon } from './icons'
import { filterOptionLabel } from './FilterBar'
import type { FilterState } from './types'
import type { Language } from '@/lib/blog/blogContent'
import type { UseCaseKey } from '@/lib/power-local-llm/apps/types'
import { t, wantLabelsFromUi, type DirUi } from './directory-ui-client'

const GROUP_ORDER: (keyof FilterState)[] = ['category', 'locality', 'engine', 'interface', 'worksWith', 'platforms', 'price', 'install', 'mcp']

export function ActiveFilterChips({
  want,
  filters,
  onClearWant,
  onClearFilter,
  lang,
  ui,
}: {
  want: string | null
  filters: FilterState
  onClearWant: () => void
  onClearFilter: (group: keyof FilterState, value: string) => void
  lang: Language
  ui: DirUi
}) {
  const chips: { key: string; label: string; onRemove: () => void }[] = []
  const wantLabels = wantLabelsFromUi(ui)

  if (want) {
    chips.push({ key: `want-${want}`, label: wantLabels[want as UseCaseKey] ?? want, onRemove: onClearWant })
  }
  for (const group of GROUP_ORDER) {
    for (const value of filters[group]) {
      chips.push({
        key: `${group}-${value}`,
        label: filterOptionLabel(group, value, lang, ui),
        onRemove: () => onClearFilter(group, value),
      })
    }
  }

  if (chips.length === 0) return null

  return (
    <div className="flex flex-wrap gap-1.5 mt-3" aria-label={t('activeFiltersAriaLabel', ui)}>
      {chips.map((chip) => (
        <button
          key={chip.key}
          type="button"
          onClick={chip.onRemove}
          className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-text-primary hover:border-primary/40"
        >
          {chip.label}
          <CloseIcon className="h-3 w-3 text-text-secondary" />
        </button>
      ))}
    </div>
  )
}
