'use client'

// Collapsible top filter panel — replaces the old left sidebar (audit item
// #2: "Widget was dropped into the article template instead of getting its
// own full-width container"). Hidden by default; the toolbar's "Filters"
// button toggles `open`. One fieldset per FilterState key, laid out as an
// auto-fit grid so it wraps into columns on wide viewports and stacks on
// narrow ones without a separate breakpoint per column count.

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

export const FILTER_GROUP_LABELS = GROUP_LABELS
export const FILTER_VALUE_LABELS = VALUE_LABELS

export function filterOptionLabel(group: keyof FilterState, value: string): string {
  return VALUE_LABELS[group]?.[value] ?? value
}

const GROUPS: (keyof FilterState)[] = ['locality', 'engine', 'worksWith', 'platforms', 'layer', 'price']

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
    <fieldset>
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
                  <span>{filterOptionLabel(group, value)}</span>
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

export function FilterBar({
  open,
  countsByGroup,
  filters,
  onToggle,
  onClearAll,
  hasActiveFilters,
}: {
  open: boolean
  countsByGroup: Record<keyof FilterState, FilterOptionCount[]>
  filters: FilterState
  onToggle: (group: keyof FilterState, value: string) => void
  onClearAll: () => void
  hasActiveFilters: boolean
}) {
  if (!open) return null

  return (
    <div
      id="local-ai-filter-panel"
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-5 border-t border-primary/10 pt-4 mt-3"
    >
      {GROUPS.map((group) => (
        <FilterGroup
          key={group}
          group={group}
          options={countsByGroup[group]}
          selected={filters[group]}
          onToggle={onToggle}
        />
      ))}
      {hasActiveFilters && (
        <div className="col-span-full">
          <button type="button" onClick={onClearAll} className="text-xs font-medium text-primary hover:underline">
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}
