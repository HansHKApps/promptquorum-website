'use client'

// Renders the "By the numbers" tiles and owns which stat-list drawer (if any)
// is open. Split out of ByTheNumbersBlock.tsx, which stays a server
// component so it can keep awaiting its data sources — only the click/open
// state here needs to run on the client.

import { useEffect, useState } from 'react'
import { AppLink as Link } from '@/components/AppLink'
import type { Language } from '@/lib/blog/blogContent'
import type { FounderVerifiedAppRow, HandsOnTestedAppRow } from '@/lib/home/statDetails'
import { HomeIcon, type HomeIconName } from './HomeIcon'
import { StatListDrawer } from './StatListDrawer'

export type StatTileItem = {
  label: string
  value: string
  icon: HomeIconName
  href?: string
  hint?: string
  desc?: string
  drawer?: 'founder' | 'handsOn'
  /** The homepage is static, so this value is only the build-time number; the client replaces it with the live total. */
  liveCounter?: 'academyProgrammes'
}

export function StatTilesClient({
  items,
  layout,
  lang,
  founderItems,
  handsOnItems,
  mcpStatsHref,
  askHansHref,
}: {
  items: StatTileItem[]
  layout: 'card' | 'bar'
  lang: Language
  founderItems: FounderVerifiedAppRow[]
  handsOnItems: HandsOnTestedAppRow[]
  mcpStatsHref: string
  askHansHref: string
}) {
  const [openDrawer, setOpenDrawer] = useState<'founder' | 'handsOn' | null>(null)
  // Static page, live number: show the larger of the build-time value and the live total (counters only ever grow).
  const [academyProgrammes, setAcademyProgrammes] = useState<number | null>(null)
  const wantsAcademy = items.some((item) => item.liveCounter === 'academyProgrammes')
  useEffect(() => {
    if (!wantsAcademy) return
    let cancelled = false
    fetch('/api/academy/totals')
      .then((res) => (res.ok ? res.json() : null))
      .then((json: { programmes?: unknown } | null) => {
        if (!cancelled && json && typeof json.programmes === 'number' && Number.isFinite(json.programmes)) setAcademyProgrammes(json.programmes)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [wantsAcademy])
  const displayValue = (item: StatTileItem): string => {
    if (item.liveCounter === 'academyProgrammes' && academyProgrammes !== null) {
      const built = Number(item.value.replace(/[^\d]/g, '')) || 0
      return Math.max(built, academyProgrammes).toLocaleString()
    }
    return item.value
  }

  const tileClass = layout === 'bar'
    ? 'rounded-lg border border-tone-list-edge bg-tone-list p-3 transition hover:shadow-md hover:-translate-y-0.5 text-left w-full'
    : 'rounded-lg border border-tone-list-edge bg-tone-list p-3 transition hover:shadow-md hover:-translate-y-0.5 text-left w-full'

  const renderTile = (item: StatTileItem) => (
    <>
      <dt className="flex items-center gap-1.5 text-xs text-text-secondary">
        <HomeIcon name={item.icon} size={14} />
        {item.label}
      </dt>
      <dd className={`mt-1 font-semibold leading-none text-text-primary ${layout === 'bar' ? 'text-2xl' : 'text-3xl'}`}>{displayValue(item)}</dd>
      {item.desc && <p className="mt-1.5 text-[11px] leading-snug text-text-secondary">{item.desc}</p>}
      {item.hint && <p className={`mt-${layout === 'bar' ? '1' : '1.5'} text-[11px] font-medium text-primary`}>{item.hint}</p>}
    </>
  )

  return (
    <>
      {items.map((item) => {
        if (item.drawer) {
          return (
            <button key={item.label} type="button" onClick={() => setOpenDrawer(item.drawer!)} className={tileClass}>
              {renderTile(item)}
            </button>
          )
        }
        if (item.href) {
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`${layout === 'card' && (item.href === mcpStatsHref || item.href === askHansHref) ? 'col-span-2 ' : ''}rounded-lg border border-tone-list-edge bg-tone-list p-3 transition hover:shadow-md hover:-translate-y-0.5`}
            >
              {renderTile(item)}
            </Link>
          )
        }
        return (
          <div key={item.label} className="rounded-lg border border-tone-list-edge bg-tone-list p-3">
            {renderTile(item)}
          </div>
        )
      })}

      <StatListDrawer
        kind={openDrawer}
        founderItems={founderItems}
        handsOnItems={handsOnItems}
        lang={lang}
        onClose={() => setOpenDrawer(null)}
      />
    </>
  )
}
