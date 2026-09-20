'use client'

import { useState } from 'react'
import Link from 'next/link'

export interface ExpandableListItem {
  key: string
  title: string
  url?: string
  date: string
  description?: string
}

/**
 * Shared list-with-expand used by every Tier-2/3 block that has more items
 * than its default visible count. Every item — including everything revealed
 * by "Show more" — carries a visible date, per the site's date-visibility
 * rule; that's enforced here once rather than per block.
 */
export function ExpandableList({ items, visibleCount = 10 }: { items: ExpandableListItem[]; visibleCount?: number }) {
  const [expanded, setExpanded] = useState(false)
  const shown = expanded ? items : items.slice(0, visibleCount)
  const hasMore = items.length > visibleCount

  return (
    <div className="flex-1 flex flex-col">
      <ul className="space-y-2.5">
        {shown.map((item) => {
          const row = (
            <>
              <p className="text-sm font-semibold text-text-primary line-clamp-1">{item.title}</p>
              {item.description && <p className="text-xs text-text-secondary line-clamp-1">{item.description}</p>}
              <p className="text-xs text-text-muted">{item.date}</p>
            </>
          )
          return (
            <li key={item.key} className="border-b border-border/60 pb-2 last:border-0">
              {item.url ? (
                <Link href={item.url} className="block hover:text-primary transition-colors">
                  {row}
                </Link>
              ) : (
                row
              )}
            </li>
          )
        })}
      </ul>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-xs font-bold text-primary hover:underline self-start"
        >
          {expanded ? 'Show less' : `Show ${items.length - visibleCount} more`}
        </button>
      )}
    </div>
  )
}
