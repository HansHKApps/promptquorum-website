'use client'

import { useEffect, useRef, useState } from 'react'
import { CompareTable } from './CompareTable'
import type { CompareColumn, CompareRow } from '@/lib/power-local-llm/compare-data'

interface Props {
  columns: CompareColumn[]
  rows: CompareRow[]
  lang: string
  localePrefix?: string
  /** Heading shown at the top of the pop-out. */
  title: string
}

/**
 * A comparison table with an "Expand" button that opens the same table in a near-full-screen dialog,
 * so wide tables are readable when the inline card is narrow. Esc, the backdrop or the close button
 * dismisses it; page scroll is locked while it is open.
 */
export function ExpandableCompareTable({ columns, rows, lang, localePrefix, title }: Props) {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div>
      <div className="mb-2 flex justify-end">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-2.5 py-1 text-xs font-semibold text-primary hover:border-primary/50"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
          Expand table
        </button>
      </div>
      <CompareTable columns={columns} rows={rows} lang={lang} localePrefix={localePrefix} />

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-3 sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex max-h-full w-full max-w-[96vw] flex-col rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
              <h3 className="text-base font-bold text-text-primary">{title}</h3>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md border border-border px-3 py-1 text-xs font-semibold text-text-secondary hover:border-primary/50"
              >
                Close ✕
              </button>
            </div>
            <div className="overflow-auto p-4">
              <CompareTable columns={columns} rows={rows} lang={lang} localePrefix={localePrefix} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
