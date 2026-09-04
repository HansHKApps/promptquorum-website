'use client'

// Left sidebar filter groups: checkboxes with live counts, one group per
// FilterState key. Options are computed by ./filters.ts (countsForGroup),
// which already excludes tools where the field is `null`/`'TODO'` — a group
// with zero countable options renders its "not yet catalogued" empty state
// instead of an empty checkbox list.

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from './icons'
import { cn } from '@/lib/utils'
import type { FilterOptionCount, FilterState } from './types'

const GROUP_LABELS: Record<keyof FilterState, string> = {
  locality: 'Runs',
  engine: 'How it runs models',
  worksWith: 'Works with',
  platforms: 'Platform',
  layer: 'Layer',
  price: 'Price',
}

const VALUE_LABELS: Partial<Record<keyof FilterState, Record<string, string>>> = {
  locality: { local: 'Fully local', hybrid: 'Hybrid (local + cloud)', cloud: 'Cloud' },
  engine: { builtin: 'Built-in engine', external: 'Needs external engine', both: 'Either', library: 'Library / SDK' },
  price: { free: 'Free', freemium: 'Freemium', paid: 'Paid' },
  platforms: { mac: 'macOS', win: 'Windows', linux: 'Linux', ios: 'iOS', android: 'Android', web: 'Web' },
  layer: {
    runtime: 'Runtime', desktop: 'Desktop app', webui: 'Web UI', ide: 'IDE plugin', cli: 'CLI',
    rag: 'RAG', agent: 'Agent', stt: 'Speech-to-text', tts: 'Text-to-speech', vision: 'Vision',
    mobile: 'Mobile', tools: 'Tools', image: 'Image generation',
  },
}

function optionLabel(group: keyof FilterState, value: string): string {
  return VALUE_LABELS[group]?.[value] ?? value
}

function FilterGroup({
  group,
  options,
  selected,
  onToggle,
}: {
  group: keyof FilterState
  options: FilterOptionCount[]
  selected: Set<string>
  onToggle: (group: keyof FilterState, value: string) => void
}) {
  return (
    <fieldset className="border-t border-primary/10 pt-4 first:border-t-0 first:pt-0">
      <legend className="text-xs font-bold uppercase tracking-wide text-text-primary mb-2.5">{GROUP_LABELS[group]}</legend>
      {options.length === 0 ? (
        <p className="text-xs text-text-secondary/70 italic">Not yet catalogued for these tools</p>
      ) : (
        <ul className="space-y-2">
          {options.map(({ value, count }) => {
            const id = `filter-${group}-${value}`
            const checked = selected.has(value)
            return (
              <li key={value} className="flex items-center gap-2">
                <Checkbox.Root
                  id={id}
                  checked={checked}
                  onCheckedChange={() => onToggle(group, value)}
                  className={cn(
                    'flex h-4 w-4 shrink-0 items-center justify-center rounded border',
                    checked ? 'border-primary bg-primary' : 'border-primary/30 bg-white'
                  )}
                >
                  <Checkbox.Indicator>
                    <CheckIcon className="h-3 w-3 text-white" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <label htmlFor={id} className="flex flex-1 cursor-pointer items-center justify-between text-sm text-text-secondary">
                  <span>{optionLabel(group, value)}</span>
                  <span className="text-xs text-text-secondary/70">{count}</span>
                </label>
              </li>
            )
          })}
        </ul>
      )}
    </fieldset>
  )
}

export function FilterSidebar({
  countsByGroup,
  filters,
  onToggle,
  onClearAll,
  hasActiveFilters,
}: {
  countsByGroup: Record<keyof FilterState, FilterOptionCount[]>
  filters: FilterState
  onToggle: (group: keyof FilterState, value: string) => void
  onClearAll: () => void
  hasActiveFilters: boolean
}) {
  const groups: (keyof FilterState)[] = ['locality', 'engine', 'worksWith', 'platforms', 'layer', 'price']

  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-text-primary">Filters</h2>
        {hasActiveFilters && (
          <button type="button" onClick={onClearAll} className="text-xs text-primary hover:underline">
            Clear all
          </button>
        )}
      </div>
      {groups.map((group) => (
        <FilterGroup
          key={group}
          group={group}
          options={countsByGroup[group]}
          selected={filters[group]}
          onToggle={onToggle}
        />
      ))}
    </aside>
  )
}
