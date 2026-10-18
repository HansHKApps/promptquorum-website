'use client'

import { Fragment, useId, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import { AppLink as Link } from '@/components/AppLink'
import { renderEmphasis } from './emphasis'
import { HUB_TONES, cycleTone } from './palette'
import type { HubExploreLabels, HubItem, HubTile } from './types'

// "Explore by topic": solid colored tiles. A tile opens one full-width panel under its row.
//
// SEO / rendering contract: every tile's links are in the server-rendered HTML. Closed panels are
// only `hidden` (display: none), never absent, and nothing is fetched or injected on click.
//
// Layout: each panel sits right after its tile in the DOM (so keyboard order is tile, then its
// links) and is moved below the tile's row with CSS `order`. Tiles get order 2i, a panel gets
// 2 * (last index in its row) + 1. The row length depends on the breakpoint (1, 2 or 3 columns),
// so the panel carries one order value per breakpoint as CSS variables.

const COLUMNS = { base: 1, sm: 2, lg: 3 } as const
const PREVIEW_COUNT = 6

function lastInRow(index: number, columns: number, total: number): number {
  return Math.min(Math.floor(index / columns) * columns + columns - 1, total - 1)
}

function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''))
}

function GuideIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 4h7l4 4v12H7z" />
      <path d="M14 4v4h4" />
    </svg>
  )
}

interface ItemCardProps {
  item: HubItem
  tileIndex: number
  labels: HubExploreLabels
  /** Kept in the HTML but not shown (items 7 and up while the panel shows its first six). */
  collapsed: boolean
}

function ItemCard({ item, tileIndex, labels, collapsed }: ItemCardProps) {
  // Profile items (Herstellerprofile) carry their own category tone, verified per manufacturer
  // from their company-profile article; every other item still cycles by tile, as before.
  const toneKey = item.categoryTone ?? cycleTone(tileIndex)
  const tone = HUB_TONES[toneKey]
  const isProfile = item.kind === 'profile'
  const avatarLetter = isProfile ? item.title.trim().charAt(0).toUpperCase() : null
  return (
    <Link
      href={item.href}
      hidden={collapsed}
      style={{ '--tile-tone': `var(--hub-${toneKey})` } as CSSProperties}
      className={`group block rounded-xl border p-4 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_22px_-10px_var(--tile-tone)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${tone.tint} ${tone.edge}`}
    >
      <span className="mb-2 flex flex-wrap items-center gap-2">
        {avatarLetter ? (
          <span aria-hidden="true" className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${tone.solid}`}>
            {avatarLetter}
          </span>
        ) : (
          <span className={tone.ink}>
            <GuideIcon />
          </span>
        )}
        <span className={`inline-flex items-center gap-1 rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-bold ${tone.ink}`}>
          {isProfile ? item.category ?? labels.kindProfile : labels.kindGuide}
        </span>
        {item.badge === 'new' && (
          <span className="rounded-full border border-hub-new-edge bg-hub-new-tint px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-hub-new-ink">
            {labels.badgeNew}
          </span>
        )}
        {item.badge === 'updated' && (
          <span className="rounded-full border border-hub-amber-edge bg-hub-amber-tint px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-hub-amber-ink">
            {labels.badgeUpdated}
          </span>
        )}
      </span>
      <span className={`block text-[15px] font-bold leading-snug ${tone.ink}`}>{item.title}</span>
      {item.summary && (
        <span className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-text-secondary">{item.summary}</span>
      )}
      {item.fact && (
        <span className={`mt-2 inline-block rounded-md bg-white/70 px-2 py-1 text-[12px] font-semibold ${tone.ink}`}>{item.fact}</span>
      )}
    </Link>
  )
}

interface HubExploreProps {
  tiles: HubTile[]
  labels: HubExploreLabels
  /** BCP 47 tag used to sort profiles A to Z. */
  sortLocale: string
}

export function HubExplore({ tiles, labels, sortLocale }: HubExploreProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)
  const baseId = useId()
  const tileRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const toggle = (id: string) => {
    setShowAll(false)
    setOpenId((current) => (current === id ? null : id))
  }

  const close = (id: string) => {
    setOpenId(null)
    setShowAll(false)
    tileRefs.current[id]?.focus()
  }

  // Cursor-tracking glow on the solid tiles: written straight to the DOM node, not React state,
  // so moving the mouse never triggers a re-render.
  const trackSpotlight = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <div role="group" aria-label={labels.groupLabel} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tiles.map((tile, index) => {
        const toneKey = cycleTone(index)
        const tone = HUB_TONES[toneKey]
        const isOpen = openId === tile.id
        const panelId = `${baseId}-panel-${tile.id}`
        const headingId = `${baseId}-title-${tile.id}`
        const total = tile.items.length
        const guides = tile.items.filter((item) => item.kind === 'guide')
        const profiles = tile.items
          .filter((item) => item.kind === 'profile')
          .sort((a, b) => a.title.localeCompare(b.title, sortLocale))
        // Guides keep the editorial order, profiles follow A to Z. Each item appears exactly once in the HTML.
        const groups = [
          { kind: 'guide' as const, items: guides, offset: 0 },
          { kind: 'profile' as const, items: profiles, offset: guides.length },
        ].filter((group) => group.items.length > 0)
        const mixed = groups.length > 1
        const canExpand = total > PREVIEW_COUNT

        const panelStyle = {
          '--o-base': lastInRow(index, COLUMNS.base, tiles.length) * 2 + 1,
          '--o-sm': lastInRow(index, COLUMNS.sm, tiles.length) * 2 + 1,
          '--o-lg': lastInRow(index, COLUMNS.lg, tiles.length) * 2 + 1,
        } as CSSProperties

        return (
          <Fragment key={tile.id}>
            <button
              type="button"
              ref={(node) => {
                tileRefs.current[tile.id] = node
              }}
              onClick={() => toggle(tile.id)}
              onMouseMove={trackSpotlight}
              aria-expanded={isOpen}
              aria-controls={panelId}
              style={{ order: index * 2, '--tile-tone': `var(--hub-${toneKey})` } as CSSProperties}
              className={`group relative block w-full cursor-pointer rounded-[18px] p-0 text-left text-white shadow-[0_6px_16px_-6px_rgba(23,20,43,0.35)] transition-[transform,box-shadow,filter] duration-150 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-10px_var(--tile-tone)] hover:brightness-[0.94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary ${tone.solid}`}
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[18px]">
                <span className="absolute -right-9 -top-9 h-36 w-36 rounded-full bg-white/10" />
                <span className="absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-white/10" />
                <span
                  className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.22), transparent 55%)' }}
                />
              </span>
              <span className="relative flex min-h-[188px] flex-col p-5">
                <span className="mb-3.5 flex items-baseline gap-2">
                  <span className="text-[46px] font-bold leading-none tracking-tight">{total}</span>
                  <span className="text-sm font-semibold">{tile.unit}</span>
                </span>
                <span className="mb-1 block text-lg font-bold leading-snug">{tile.title}</span>
                <span className="block text-sm leading-relaxed text-white/90">{tile.summary}</span>
                <span className="mt-auto flex items-center justify-between pt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[13px] font-bold transition-colors duration-150 group-hover:bg-white/30">
                    {isOpen ? labels.close : labels.open}
                    {!isOpen && (
                      <span aria-hidden="true" className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">&rarr;</span>
                    )}
                  </span>
                  <span aria-hidden="true" className={`flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl font-bold leading-none transition-transform duration-150 group-hover:scale-110 ${tone.ink}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </span>
              </span>
              {isOpen && (
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 top-[calc(100%+6px)] -ml-3 h-0 w-0 border-x-[12px] border-b-[10px] border-x-transparent ${tone.caret}`}
                />
              )}
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              style={panelStyle}
              onKeyDown={(event) => {
                if (event.key === 'Escape') close(tile.id)
              }}
              className={`col-span-full rounded-[18px] border-2 bg-white p-5 [order:var(--o-base)] sm:[order:var(--o-sm)] sm:p-6 lg:[order:var(--o-lg)] ${tone.solidBorder}`}
            >
              <div className="mb-1 flex flex-wrap items-center justify-between gap-3">
                <h3 id={headingId} className="text-[22px] font-bold text-text-primary">
                  {tile.title}{' '}
                  <span className={`ml-1 inline-block rounded-full px-3 py-0.5 align-middle text-sm font-semibold ${tone.tint} ${tone.ink}`}>
                    {total} {tile.unit}
                  </span>
                </h3>
                <button
                  type="button"
                  onClick={() => close(tile.id)}
                  className={`min-h-11 rounded-lg border bg-white px-3.5 py-2 text-sm font-semibold ${tone.solidBorder} ${tone.ink}`}
                >
                  {labels.closePanel}
                </button>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-text-secondary">{renderEmphasis(tile.intro)}</p>

              {canExpand && !showAll && (
                <div className="mb-2.5 text-xs font-bold uppercase tracking-wider text-text-secondary">
                  {fill(labels.preview, { shown: PREVIEW_COUNT, count: total })}
                </div>
              )}
              {canExpand && showAll && (
                <div className="mb-5 flex flex-wrap items-center gap-2 text-sm font-semibold">
                  <span className={`rounded-full px-4 py-1.5 text-white ${tone.solid}`}>{fill(labels.allHeading, { count: total })}</span>
                  <button
                    type="button"
                    onClick={() => setShowAll(false)}
                    className={`ml-auto min-h-11 cursor-pointer rounded-lg border bg-white px-3.5 py-2 text-sm font-semibold ${tone.solidBorder} ${tone.ink}`}
                  >
                    {labels.showLess}
                  </button>
                </div>
              )}

              {groups.map((group) => (
                <div key={group.kind} className={mixed ? 'mb-6 last:mb-0' : undefined} hidden={!showAll && canExpand && group.offset >= PREVIEW_COUNT}>
                  {showAll && mixed && (
                    <div className="mb-2.5 text-xs font-bold uppercase tracking-wider text-text-secondary">
                      {fill(group.kind === 'profile' ? labels.profilesHeading : labels.guidesHeading, { count: group.items.length })}
                    </div>
                  )}
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item, i) => (
                      <ItemCard
                        key={item.href}
                        item={item}
                        tileIndex={index}
                        labels={labels}
                        collapsed={canExpand && !showAll && group.offset + i >= PREVIEW_COUNT}
                      />
                    ))}
                  </div>
                </div>
              ))}

              {canExpand && !showAll && (
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className={`mt-5 min-h-11 cursor-pointer rounded-[10px] px-5 py-2.5 text-sm font-bold text-white ${tone.solid}`}
                >
                  {fill(labels.showAll, { count: total })}
                </button>
              )}
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}
