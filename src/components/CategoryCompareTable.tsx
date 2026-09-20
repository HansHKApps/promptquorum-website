'use client'

import { useState } from 'react'
import { ExpandableCompareTable } from './ExpandableCompareTable'
import type { CategoryCompareData } from '@/lib/power-local-llm/compare-data'

/** Full per-category comparison inside an article: one tab per segment, all tools in that segment. */
export function CategoryCompareTable({ data, lang }: { data: CategoryCompareData; lang: string }) {
  const [active, setActive] = useState(0)
  const seg = data.segments[active]
  if (!seg) return null
  const prefix = lang === 'en' ? '' : `/${lang}`

  return (
    <div className="my-6">
      {data.segments.length > 1 && (
        <div role="tablist" className="mb-3 flex flex-wrap gap-2">
          {data.segments.map((s, i) => (
            <button
              key={s.key}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                i === active ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-text-secondary hover:border-primary/50'
              }`}
            >
              {s.label} ({s.rows.length})
            </button>
          ))}
        </div>
      )}
      <ExpandableCompareTable columns={seg.columns} rows={seg.rows} lang={lang} localePrefix={prefix} ui={data.ui} title={`${data.label} — ${seg.label}`} />
      <p className="mt-2 text-xs text-text-muted">{data.ui.notStatedNote}</p>
    </div>
  )
}
