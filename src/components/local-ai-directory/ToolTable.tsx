// Table-view rendering, sortable by clicking a column header. Mirrors the
// section.rows/section.columns table branch in PowerLocalLLMPostClient.tsx
// (sticky first column, hover row highlight, overflow-x scroll container)
// for visual parity with the rest of the article shell.

import { useEffect, useRef, useState } from 'react'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { Language } from '@/lib/blog/blogContent'
import type { ToolRecord } from '@/lib/power-local-llm/apps/types'
import { CATEGORY_SUB_LABEL } from '@/lib/power-local-llm/apps/categories'
import { HardwareBlock } from './HardwareBlock'
import { CompatibilityBadge } from './CompatibilityBadge'
import { computeCompatibilityVerdict, computeVariesByModelFitGb } from './hardware'
import { StarIcon } from './icons'
import type { HardwareProfile, MachineType, SortDir, SortKey } from './types'
import { t } from './directory-i18n'

// Platform values (macOS/Windows/Linux/iOS/Android/Web) are OS product
// names — kept identical across locales, matching ToolCard.tsx's own map.
const PLATFORM_LABEL: Record<string, string> = {
  mac: 'macOS', win: 'Windows', linux: 'Linux', ios: 'iOS', android: 'Android', web: 'Web',
}

export function ToolTable({
  apps,
  lang,
  machine,
  profile,
  sortKey,
  sortDir,
  onSort,
  onOpen,
  onRequestHardware,
}: {
  apps: ToolRecord[]
  lang: Language
  machine: MachineType
  profile: HardwareProfile | null
  sortKey: SortKey
  sortDir: SortDir
  onSort: (key: SortKey) => void
  onOpen: (slug: string) => void
  onRequestHardware?: () => void
}) {
  const STATUS_LABEL: Record<ToolRecord['status'], string> = {
    planned: t('statusPlanned', lang),
    listed: t('statusListed', lang),
    verified: t('statusVerified', lang),
    tested: t('statusTested', lang),
  }
  const PRICE_LABEL: Record<'free' | 'freemium' | 'paid', string> = {
    free: t('priceFree', lang),
    freemium: t('cardPriceFreemium', lang),
    paid: t('pricePaid', lang),
  }

  // One ordered list drives both the header row and each body row, so a
  // sortable and a static column can be interleaved without the header/body
  // falling out of sync — each entry renders its own <th>/<td> pair.
  const COLUMNS: (
    | { kind: 'sort'; key: SortKey; label: string }
    | { kind: 'static'; key: string; label: string }
  )[] = [
    { kind: 'sort', key: 'name', label: t('colTool', lang) },
    { kind: 'sort', key: 'stars', label: t('colStars', lang) },
    { kind: 'sort', key: 'ram', label: t('detailHardware', lang) },
    { kind: 'static', key: 'price', label: t('detailPrice', lang) },
    { kind: 'static', key: 'platforms', label: t('detailPlatforms', lang) },
    { kind: 'sort', key: 'added', label: t('colLastUpdated', lang) },
    { kind: 'sort', key: 'status', label: t('colStatus', lang) },
    { kind: 'sort', key: 'category', label: t('colCategory', lang) },
    { kind: 'static', key: 'fit', label: t('colCompatFit', lang) },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const [isScrollable, setIsScrollable] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const checkOverflow = () => setIsScrollable(el.scrollWidth > el.clientWidth + 1)
    checkOverflow()
    const observer = new ResizeObserver(checkOverflow)
    observer.observe(el)
    return () => observer.disconnect()
  }, [apps])

  return (
    <div className="relative overflow-x-auto" ref={scrollRef}>
      <table className="w-full min-w-[960px] border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-primary/20">
            {COLUMNS.map((col, i) => (
              <th key={col.key} className={`text-left p-2 sm:p-3 font-bold text-text-primary bg-primary/5 whitespace-nowrap${i === 0 ? ' sticky left-0 z-10' : ''}`}>
                {col.kind === 'sort' ? (
                  <button
                    type="button"
                    onClick={() => onSort(col.key)}
                    className="inline-flex items-center gap-1 hover:text-primary"
                  >
                    {col.label}
                    {sortKey === col.key && <span className="text-primary">{sortDir === 'asc' ? '↑' : '↓'}</span>}
                  </button>
                ) : (
                  col.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {apps.map((app) => {
            const price = app.price !== 'TODO' ? app.price : null
            const lastUpdatedDate = app.lastVerifiedDate ?? app.addedDate
            return (
              <tr
                key={app.slug}
                onClick={() => onOpen(app.slug)}
                className="border-b border-primary/10 hover:bg-primary/5 transition-colors cursor-pointer group"
              >
                <td className="p-2 sm:p-3 sticky left-0 z-10 bg-white group-hover:bg-primary/5 transition-colors font-medium text-text-primary whitespace-nowrap">
                  {app.name}
                </td>
                <td className="p-2 sm:p-3 text-text-secondary whitespace-nowrap">
                  {app.stars != null ? (
                    <span className="inline-flex items-center gap-1">
                      <StarIcon className="h-3.5 w-3.5 text-amber-400" />
                      {app.stars.toLocaleString()}
                    </span>
                  ) : (
                    <span className="text-text-secondary/50">—</span>
                  )}
                </td>
                <td className="p-2 sm:p-3 text-text-secondary whitespace-nowrap">
                  <HardwareBlock hardware={app.hardware} machine={machine} engine={app.engine} lang={lang} compact profile={profile} onRequestHardware={onRequestHardware} mobile={{ interfaces: app.interfaces, platforms: app.platforms }} />
                </td>
                <td className="p-2 sm:p-3 text-text-secondary whitespace-nowrap">
                  {price ? PRICE_LABEL[price] : <span className="text-text-secondary/50">—</span>}
                </td>
                <td className="p-2 sm:p-3 text-text-secondary whitespace-nowrap">
                  {app.platforms && app.platforms.length > 0
                    ? app.platforms.map((p) => PLATFORM_LABEL[p] ?? p).join(', ')
                    : <span className="text-text-secondary/50">—</span>}
                </td>
                <td className="p-2 sm:p-3 text-text-secondary whitespace-nowrap">
                  {lastUpdatedDate ? formatDisplayDate(lastUpdatedDate, lang) : <span className="text-text-secondary/50">—</span>}
                </td>
                <td className="p-2 sm:p-3 text-text-secondary whitespace-nowrap">{STATUS_LABEL[app.status]}</td>
                <td className="p-2 sm:p-3 text-text-secondary whitespace-nowrap">{CATEGORY_SUB_LABEL[app.categories[0]][lang]}</td>
                <td className="p-2 sm:p-3 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                  <CompatibilityBadge
                    verdict={computeCompatibilityVerdict(app.hardware, profile, machine, app.engine, { interfaces: app.interfaces, platforms: app.platforms })}
                    hasProfile={profile != null}
                    variesByModel={app.hardware?.variesByModel === true}
                    fitGb={computeVariesByModelFitGb(profile, machine)}
                    lang={lang}
                    onRequestProfile={onRequestHardware}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {isScrollable && (
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/80 to-transparent" />
      )}
    </div>
  )
}
