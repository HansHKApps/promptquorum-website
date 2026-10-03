'use client'

import { useState } from 'react'
import { AppLink as Link } from '@/components/AppLink'
import type { Language } from '@/lib/blog/blogContent'
import { isFreshAge, localAgeDays } from '@/lib/home/fresh-age'
import { useLocalToday } from '@/lib/home/useLocalToday'
import { t } from './home-i18n'

export interface ExpandableListItem {
  key: string
  title: string
  url?: string
  date: string
  description?: string
  /**
   * Fresh-highlight inputs. `freshText` is the already-localized pill ("New"/"Updated"); the item gets the loud
   * treatment while `isoDate` is within the fresh window by the VISITOR's clock (re-checked after mount, so it
   * ages out on its own between deploys). `freshAtBuild` is the build-time verdict, used only for the server HTML.
   */
  freshText?: string
  isoDate?: string
  freshAtBuild?: boolean
}

/**
 * Shared list-with-expand used by every Tier-2/3 block that has more items
 * than its default visible count. Every item — including everything revealed
 * by "Show more" — carries a visible date, per the site's date-visibility
 * rule; that's enforced here once rather than per block.
 */
export function ExpandableList({
  items,
  visibleCount = 10,
  lang = 'en',
}: {
  items: ExpandableListItem[]
  visibleCount?: number
  lang?: Language
}) {
  const [expanded, setExpanded] = useState(false)
  const now = useLocalToday()
  const shown = expanded ? items : items.slice(0, visibleCount)
  const hasMore = items.length > visibleCount

  return (
    <div className="flex-1 flex flex-col">
      <ul className="space-y-2.5">
        {shown.map((item) => {
          const fresh = Boolean(item.freshText) && (now && item.isoDate ? isFreshAge(localAgeDays(item.isoDate, now)) : Boolean(item.freshAtBuild))
          const row = (
            <>
              {fresh && (
                <span className="mb-1 inline-block rounded-full bg-primary px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-white">
                  {item.freshText}
                </span>
              )}
              <p className={`text-sm text-text-primary line-clamp-1 ${fresh ? 'font-extrabold' : 'font-semibold'}`}>{item.title}</p>
              {item.description && <p className="text-xs text-text-secondary line-clamp-1">{item.description}</p>}
              <p className={`text-xs ${fresh ? 'font-semibold text-text-secondary' : 'text-text-muted'}`}>{item.date}</p>
            </>
          )
          return (
            <li
              key={item.key}
              className={
                fresh
                  ? 'rounded-md border-l-4 border-primary bg-primary/10 py-2 pl-3 pr-2'
                  : 'border-b border-border/60 pb-2 last:border-0'
              }
            >
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
          {expanded ? t('showLess', lang) : t('showMoreTemplate', lang, { n: items.length - visibleCount })}
        </button>
      )}
    </div>
  )
}
