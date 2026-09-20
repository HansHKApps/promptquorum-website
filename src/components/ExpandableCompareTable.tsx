'use client'

import { useEffect, useRef, useState } from 'react'
import { CompareTable } from './CompareTable'
import type { CompareColumn, CompareRow } from '@/lib/power-local-llm/compare-data'

const SITE = 'https://www.promptquorum.com'

/** Tab-separated text (header + one line per tool, with the full review URL) so it pastes as cells into Excel/Sheets. */
function toTsv(columns: CompareColumn[], rows: CompareRow[], localePrefix: string): string {
  const clean = (v: string) => v.replace(/[\t\r\n]+/g, ' ')
  const header = ['Tool', ...columns.map((c) => c.label), 'Review'].map(clean).join('\t')
  const lines = rows.map((r) =>
    [r.name, ...columns.map((c) => r.cells[c.key] ?? '—'), r.reviewSlug ? `${SITE}${localePrefix}/power-local-llm/${r.reviewSlug}` : '—'].map(clean).join('\t'),
  )
  return [header, ...lines].join('\n')
}

function CopyButton({ text }: { text: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'error'>('idle')

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setState('copied')
    } catch {
      setState('error')
    }
    setTimeout(() => setState('idle'), 2000)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-2.5 py-1 text-xs font-semibold text-primary hover:border-primary/50"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15V6a2 2 0 0 1 2-2h9" />
      </svg>
      <span aria-live="polite">{state === 'copied' ? 'Copied ✓' : state === 'error' ? 'Copy failed' : 'Copy table'}</span>
    </button>
  )
}

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
  const tsv = toTsv(columns, rows, localePrefix ?? '')
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
      <div className="mb-2 flex justify-end gap-2">
        <CopyButton text={tsv} />
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
              <div className="flex items-center gap-2">
                <CopyButton text={tsv} />
                <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md border border-border px-3 py-1 text-xs font-semibold text-text-secondary hover:border-primary/50"
              >
                Close ✕
                </button>
              </div>
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
