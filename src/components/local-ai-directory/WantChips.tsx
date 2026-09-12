'use client'

// "I want to…" quick-filter chips, single-select toggle, keyed by UseCaseKey.

import { cn } from '@/lib/utils'
import type { Language } from '@/lib/blog/blogContent'
import type { UseCaseKey } from '@/lib/power-local-llm/apps/types'
import type { FilterOptionCount } from './types'
import { getWantLabels, t } from './directory-i18n'

const WANT_ORDER: UseCaseKey[] = ['chat', 'code', 'agent', 'docs', 'image', 'audio', 'phone', 'build', 'serve']

export function WantChips({
  counts,
  selected,
  onSelect,
  lang,
}: {
  counts: FilterOptionCount[]
  selected: string | null
  onSelect: (value: string | null) => void
  lang: Language
}) {
  const countByValue = new Map(counts.map((c) => [c.value, c.count]))
  const wantLabels = getWantLabels(lang)

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={t('wantGroupAriaLabel', lang)}>
      {WANT_ORDER.map((key) => {
        const count = countByValue.get(key) ?? 0
        const isSelected = selected === key
        if (count === 0 && !isSelected) return null
        return (
          <button
            key={key}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelect(isSelected ? null : key)}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
              isSelected
                ? 'border-primary bg-primary text-white'
                : 'border-primary/20 bg-white text-text-primary hover:border-primary/50 hover:bg-primary/5'
            )}
          >
            {wantLabels[key]}
            <span className={cn('text-xs', isSelected ? 'text-white/80' : 'text-text-secondary')}>{count}</span>
          </button>
        )
      })}
    </div>
  )
}
