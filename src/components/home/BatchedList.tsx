'use client'

import { useState } from 'react'
import Link from 'next/link'

export interface BatchedListItem {
  key: string
  title: string
  url?: string
  meta?: string
}

export interface Batch {
  batchDate: string
  label: string
  items: BatchedListItem[]
}

/**
 * Dated, stacked-history list used by Trending and Recent Mentions: the
 * newest batch is shown by default, older batches stay collapsed behind
 * "Show more," each one still labeled with its own date when revealed —
 * never one list silently overwritten on refresh.
 */
export function BatchedList({ batches }: { batches: Batch[] }) {
  const [expanded, setExpanded] = useState(false)
  const [current, ...older] = batches
  if (!current) return null

  return (
    <div className="flex-1 flex flex-col">
      <BatchSection batch={current} />
      {expanded &&
        older.map((batch) => (
          <div key={batch.batchDate} className="mt-4 pt-4 border-t border-border">
            <BatchSection batch={batch} />
          </div>
        ))}
      {older.length > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-xs font-bold text-primary hover:underline self-start"
        >
          {expanded ? 'Show less' : `Show ${older.length} earlier snapshot${older.length === 1 ? '' : 's'}`}
        </button>
      )}
    </div>
  )
}

function BatchSection({ batch }: { batch: Batch }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">{batch.label}</p>
      <ul className="space-y-2">
        {batch.items.map((item) => {
          const row = (
            <>
              <span className="text-sm font-semibold text-text-primary line-clamp-1">{item.title}</span>
              {item.meta && <span className="block text-xs text-text-muted">{item.meta}</span>}
            </>
          )
          return (
            <li key={item.key}>
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
    </div>
  )
}
