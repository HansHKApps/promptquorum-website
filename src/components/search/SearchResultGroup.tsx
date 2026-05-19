'use client'

import type { FuseResult } from 'fuse.js'
import type { SearchEntry } from './search-utils'
import { HUB_LABELS } from './search-utils'
import { SearchResultItem } from './SearchResultItem'

interface Props {
  hub: string
  section: string
  items: FuseResult<SearchEntry>[]
  activeIndex: number
  indexOffset: number
  onHover: (index: number) => void
  onSelect: (entry: SearchEntry) => void
}

export function SearchResultGroup({
  hub,
  section,
  items,
  activeIndex,
  indexOffset,
  onHover,
  onSelect,
}: Props) {
  const label = section && section !== hub
    ? `${HUB_LABELS[hub] ?? hub} — ${section}`
    : HUB_LABELS[hub] ?? hub

  return (
    <div>
      <p className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-400 select-none">
        {label}
      </p>
      {items.map((result, i) => (
        <SearchResultItem
          key={result.item.id}
          result={result}
          isActive={activeIndex === indexOffset + i}
          onMouseEnter={() => onHover(indexOffset + i)}
          onClick={() => onSelect(result.item)}
        />
      ))}
    </div>
  )
}
