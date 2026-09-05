'use client'

// Nested subcategory drill-down, shown under WantChips once a top-level
// "I want to…" chip is selected. `uses` (WantChips) and `categories` are
// independent facets in the data model (see categories.ts header comment),
// so this never assumes a fixed want→category mapping — it lists whichever
// CategorySubKey values actually occur among tools matching the current
// want + search + other filters, live-counted the same way FilterBar's
// checkbox groups are. Multi-select: toggles straight into the shared
// `filters.category` set, so it stays in sync with the "Filters" panel and
// the ActiveFilterChips row.

import { cn } from '@/lib/utils'
import { CATEGORY_SUB_LABEL, type CategorySubKey } from '@/lib/power-local-llm/apps/categories'
import type { FilterOptionCount } from './types'
import { CloseIcon } from './icons'

export function SubcategoryChips({
  counts,
  selected,
  onToggle,
  onClear,
}: {
  counts: FilterOptionCount[]
  selected: Set<string>
  onToggle: (value: string) => void
  onClear: () => void
}) {
  if (counts.length === 0) return null

  const hasSelection = selected.size > 0

  return (
    <div
      className="flex flex-wrap items-center gap-1.5 rounded-lg border border-dashed border-primary/25 bg-primary/[0.03] px-3 py-2.5 animate-in fade-in slide-in-from-top-1 duration-150"
      role="group"
      aria-label="Narrow down by type"
    >
      <span className="text-xs font-medium text-text-secondary shrink-0">Narrow down:</span>
      {counts.map(({ value, count }) => {
        const isSelected = selected.has(value)
        return (
          <button
            key={value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onToggle(value)}
            className={cn(
              'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors',
              isSelected
                ? 'border-primary bg-primary text-white'
                : 'border-primary/20 bg-white text-text-primary hover:border-primary/50 hover:bg-primary/5'
            )}
          >
            {CATEGORY_SUB_LABEL[value as CategorySubKey] ?? value}
            <span className={cn('text-[10px]', isSelected ? 'text-white/80' : 'text-text-secondary')}>{count}</span>
          </button>
        )
      })}
      {hasSelection && (
        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-center gap-1 text-xs font-medium text-text-secondary hover:text-primary"
        >
          Clear
          <CloseIcon className="h-3 w-3" />
        </button>
      )}
    </div>
  )
}
