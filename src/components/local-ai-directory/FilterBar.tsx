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
import { CATEGORY_SUB_LABEL, INTERFACE_LABEL } from '@/lib/power-local-llm/apps/categories'
import type { Language } from '@/lib/blog/blogContent'
import { t, type DirUi } from './directory-ui-client'

// Platform values (macOS/Windows/Linux/iOS/Android/Web) are OS product
// names — kept identical across locales, same as elsewhere on the site,
// rather than "translated".
const PLATFORM_VALUE_LABEL: Record<string, string> = {
  mac: 'macOS', win: 'Windows', linux: 'Linux', ios: 'iOS', android: 'Android', web: 'Web',
}

function getGroupLabels(ui: DirUi): Record<keyof FilterState, string> {
  return {
    locality: t('groupRuns', ui),
    engine: t('groupEngine', ui),
    worksWith: t('groupWorksWith', ui),
    platforms: t('groupPlatform', ui),
    category: t('groupCategory', ui),
    interface: t('groupInterface', ui),
    price: t('groupPrice', ui),
    mcp: t('groupMcp', ui),
  }
}

/** `lang` is still needed here for CATEGORY_SUB_LABEL/INTERFACE_LABEL — tool-data labels (categories.ts), not directory-i18n UI chrome. */
export function getValueLabels(lang: Language, ui: DirUi): Partial<Record<keyof FilterState, Record<string, string>>> {
  return {
    locality: { local: t('localityLocalFilter', ui), hybrid: t('localityHybridFilter', ui), cloud: t('localityCloud', ui) },
    engine: { builtin: t('engineBuiltin', ui), external: t('engineExternal', ui), both: t('engineBoth', ui), library: t('engineLibrary', ui) },
    price: { free: t('priceFree', ui), freemium: t('priceFreemium', ui), paid: t('pricePaid', ui) },
    platforms: PLATFORM_VALUE_LABEL,
    category: Object.fromEntries(Object.entries(CATEGORY_SUB_LABEL).map(([k, v]) => [k, v[lang]])),
    interface: Object.fromEntries(Object.entries(INTERFACE_LABEL).map(([k, v]) => [k, v[lang]])),
    mcp: { mcp: t('mcpSupported', ui) },
  }
}

export function filterOptionLabel(group: keyof FilterState, value: string, lang: Language, ui: DirUi): string {
  return getValueLabels(lang, ui)[group]?.[value] ?? value
}

const GROUPS: (keyof FilterState)[] = ['category', 'locality', 'engine', 'interface', 'worksWith', 'platforms', 'price', 'mcp']

function FilterGroup({
  group,
  options,
  selected,
  onToggle,
  lang,
  ui,
  groupLabels,
}: {
  group: keyof FilterState
  options: FilterOptionCount[]
  selected: Set<string>
  onToggle: (group: keyof FilterState, value: string) => void
  lang: Language
  ui: DirUi
  groupLabels: Record<keyof FilterState, string>
}) {
  return (
    <fieldset>
      <legend className="text-xs font-bold uppercase tracking-wide text-text-primary mb-2.5">{groupLabels[group]}</legend>
      {options.length === 0 ? (
        <p className="text-xs text-text-secondary/70 italic">{t('notCatalogued', ui)}</p>
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
                  <span>{filterOptionLabel(group, value, lang, ui)}</span>
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
  lang,
  ui,
}: {
  open: boolean
  countsByGroup: Record<keyof FilterState, FilterOptionCount[]>
  filters: FilterState
  onToggle: (group: keyof FilterState, value: string) => void
  onClearAll: () => void
  hasActiveFilters: boolean
  lang: Language
  ui: DirUi
}) {
  if (!open) return null

  const groupLabels = getGroupLabels(ui)

  return (
    <div
      id="local-ai-filter-panel"
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-x-6 gap-y-5 border-t border-primary/10 pt-4 mt-3"
    >
      {GROUPS.map((group) => (
        <FilterGroup
          key={group}
          group={group}
          options={countsByGroup[group]}
          selected={filters[group]}
          onToggle={onToggle}
          lang={lang}
          ui={ui}
          groupLabels={groupLabels}
        />
      ))}
      {hasActiveFilters && (
        <div className="col-span-full">
          <button type="button" onClick={onClearAll} className="text-xs font-medium text-primary hover:underline">
            {t('clearAllFilters', ui)}
          </button>
        </div>
      )}
    </div>
  )
}
