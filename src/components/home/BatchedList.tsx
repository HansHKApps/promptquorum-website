'use client'

import { useState } from 'react'
import { AppLink as Link } from '@/components/AppLink'
import type { Language } from '@/lib/blog/blogContent'
import { Flag } from '@/components/Flag'
import { t } from './home-i18n'

export interface BatchedListItem {
  key: string
  title: string
  url?: string
  meta?: string
  /** Country flag (public/flags code) rendered after the title, with its accessible language name. */
  flag?: { country: string; label: string }
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
export function BatchedList({ batches, lang = 'en' }: { batches: Batch[]; lang?: Language }) {
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
          {expanded ? t('showLess', lang) : t('showEarlierSnapshotsTemplate', lang, { n: older.length })}
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
              <span className="flex items-center gap-1.5">
                <span className="min-w-0 truncate text-sm font-semibold text-text-primary">{item.title}</span>
                {item.flag && <Flag country={item.flag.country} label={item.flag.label} />}
              </span>
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
