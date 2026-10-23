'use client'

// "I want to…" quick-filter chips, single-select toggle, keyed by UseCaseKey.

import { cn } from '@/lib/utils'
import { HUB_CYCLE, HUB_TONES } from '@/components/hub-template/palette'
import type { UseCaseKey } from '@/lib/power-local-llm/apps/types'
import type { FilterOptionCount } from './types'
import { t, wantLabelsFromUi, type DirUi } from './directory-ui-client'

// Exported so DirectoryClient can validate a `?want=` deep-link value against
// the same set of keys this UI actually supports, without duplicating the list.
export const WANT_ORDER: UseCaseKey[] = ['chat', 'code', 'agent', 'docs', 'image', 'audio', 'phone', 'build', 'serve']

export function WantChips({
  counts,
  selected,
  onSelect,
  ui,
}: {
  counts: FilterOptionCount[]
  selected: string | null
  onSelect: (value: string | null) => void
  ui: DirUi
}) {
  const countByValue = new Map(counts.map((c) => [c.value, c.count]))
  const wantLabels = wantLabelsFromUi(ui)
  const visibleKeys = WANT_ORDER.filter((key) => (countByValue.get(key) ?? 0) > 0 || selected === key)

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" role="group" aria-label={t('wantGroupAriaLabel', ui)}>
      {visibleKeys.map((key, i) => {
        const count = countByValue.get(key) ?? 0
        const isSelected = selected === key
        const tone = HUB_TONES[HUB_CYCLE[i % HUB_CYCLE.length]]
        return (
          <button
            key={key}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelect(isSelected ? null : key)}
            className={cn(
              'group relative overflow-hidden rounded-[18px] p-4 text-start text-white shadow-[0_6px_16px_-6px_rgba(23,20,43,0.35)] transition-[transform,box-shadow,filter] duration-150 hover:-translate-y-0.5 hover:brightness-[0.94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary',
              tone.solid,
              isSelected && 'ring-4 ring-text-primary ring-offset-2'
            )}
          >
            <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-white/10" />
            <span className="relative block text-[38px] font-bold leading-none tracking-tight">{count}</span>
            <span className="relative mt-2 block text-base font-bold leading-snug">{wantLabels[key]}</span>
          </button>
        )
      })}
    </div>
  )
}
