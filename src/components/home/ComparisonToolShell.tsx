'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Language } from '@/lib/blog/blogContent'
import { CATEGORY_GROUPS, CATEGORY_GROUP_LABEL } from '@/lib/power-local-llm/apps/categories'
import type { CategoryCompareData } from '@/lib/power-local-llm/compare-data'
import { CompareTable } from '@/components/CompareTable'
import { HomeIcon } from './HomeIcon'
import { SURFACE_CLASS } from './homeSurface'
import { t } from './home-i18n'

// Static class strings per category (Tailwind can't see dynamically built names); colors are --cat-* variables.
const CHIP_CLASS: Record<string, { idle: string; active: string }> = {
  'run-serve': { idle: 'border-cat-run-serve-edge bg-cat-run-serve-tint', active: 'border-cat-run-serve bg-cat-run-serve' },
  'chat-assistants': { idle: 'border-cat-chat-assistants-edge bg-cat-chat-assistants-tint', active: 'border-cat-chat-assistants bg-cat-chat-assistants' },
  'code-development': { idle: 'border-cat-code-development-edge bg-cat-code-development-tint', active: 'border-cat-code-development bg-cat-code-development' },
  'knowledge-retrieval': { idle: 'border-cat-knowledge-retrieval-edge bg-cat-knowledge-retrieval-tint', active: 'border-cat-knowledge-retrieval bg-cat-knowledge-retrieval' },
  'voice-audio': { idle: 'border-cat-voice-audio-edge bg-cat-voice-audio-tint', active: 'border-cat-voice-audio bg-cat-voice-audio' },
  'images-video': { idle: 'border-cat-images-video-edge bg-cat-images-video-tint', active: 'border-cat-images-video bg-cat-images-video' },
  'train-operate': { idle: 'border-cat-train-operate-edge bg-cat-train-operate-tint', active: 'border-cat-train-operate bg-cat-train-operate' },
}

const MAX_TOOLS = 3

/**
 * Pick a category, pick up to three tools, compare them side by side. The data comes from the tool
 * records (built on the server, see compare-data.ts) — the same source as the category articles —
 * so the tool and the article can never disagree. Categories with no comparison data yet show a
 * "coming soon" note instead of a table.
 *
 * Category group labels + shell chrome are localized via home-i18n; the comparison data itself
 * (segment/column labels, tool names) is a single pilot category (voice-audio) sourced from
 * compare-schema.ts, which is English-only for now — same scope decision as Trending's page
 * titles staying in English (raw, not per-locale content).
 */
export function ComparisonToolShell({ groups, lang = 'en' }: { groups: CategoryCompareData[]; lang?: Language }) {
  const [category, setCategory] = useState<string | null>(null)
  const [segmentIdx, setSegmentIdx] = useState(0)
  const [selected, setSelected] = useState<string[]>([])

  const localePrefix = lang === 'en' ? '' : `/${lang}`
  const data = groups.find((g) => g.group === category)
  const segment = data?.segments[segmentIdx]

  function pickCategory(key: string) {
    setCategory(key)
    setSegmentIdx(0)
    setSelected([])
  }

  function toggleTool(slug: string) {
    setSelected((cur) => (cur.includes(slug) ? cur.filter((s) => s !== slug) : cur.length < MAX_TOOLS ? [...cur, slug] : cur))
  }

  const rows = segment ? segment.rows.filter((r) => selected.includes(r.slug)) : []

  return (
    <div className={`rounded-xl border ${SURFACE_CLASS.action} p-6 h-full`}>
      <h2 className="text-xl font-bold text-text-primary mb-1 flex items-center gap-2">
        <HomeIcon name="compare" size={20} />
        {t('compareHeading', lang)}
      </h2>
      <p className="text-sm text-text-secondary mb-4">{t('compareSubheading', lang)}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {CATEGORY_GROUPS.map((group) => (
          <button
            key={group.key}
            type="button"
            onClick={() => pickCategory(group.key)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              category === group.key
                ? `${CHIP_CLASS[group.key].active} text-primary-foreground`
                : `${CHIP_CLASS[group.key].idle} text-text-secondary hover:shadow-sm`
            }`}
          >
            {CATEGORY_GROUP_LABEL[group.key]}
          </button>
        ))}
      </div>

      {!category && (
        <div className="rounded-lg border border-dashed border-border bg-surface/50 p-8 text-center">
          <p className="text-sm text-text-muted">{t('compareNoCategoryPicked', lang)}</p>
        </div>
      )}

      {category && !data && (
        <div className="rounded-lg border border-dashed border-border bg-surface/50 p-8 text-center">
          <p className="text-sm text-text-muted">
            {t('compareCategoryPickedTemplate', lang, {
              category: CATEGORY_GROUP_LABEL[category as keyof typeof CATEGORY_GROUP_LABEL],
            })}
          </p>
        </div>
      )}

      {data && segment && (
        <div>
          {data.segments.length > 1 && (
            <div role="tablist" className="mb-3 flex flex-wrap gap-2">
              {data.segments.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  role="tab"
                  aria-selected={i === segmentIdx}
                  onClick={() => {
                    setSegmentIdx(i)
                    setSelected([])
                  }}
                  className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${
                    i === segmentIdx ? 'border-primary text-primary bg-white' : 'border-border text-text-secondary'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}

          <fieldset className="mb-4">
            <legend className="mb-2 text-xs font-bold uppercase tracking-widest text-text-secondary">
              Choose up to {MAX_TOOLS} ({selected.length} selected)
            </legend>
            <div className="flex flex-wrap gap-2">
              {segment.rows.map((r) => {
                const on = selected.includes(r.slug)
                const disabled = !on && selected.length >= MAX_TOOLS
                return (
                  <label
                    key={r.slug}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs ${
                      on ? 'border-primary bg-white text-primary font-semibold' : 'border-border bg-white text-text-secondary'
                    } ${disabled ? 'opacity-40' : 'cursor-pointer'}`}
                  >
                    <input type="checkbox" className="sr-only" checked={on} disabled={disabled} onChange={() => toggleTool(r.slug)} />
                    {r.name}
                  </label>
                )
              })}
            </div>
          </fieldset>

          {rows.length >= 2 ? (
            <CompareTable columns={segment.columns} rows={rows} lang={lang} localePrefix={localePrefix} />
          ) : (
            <div className="rounded-lg border border-dashed border-border bg-surface/50 p-6 text-center">
              <p className="text-sm text-text-muted">Select at least two tools to see the comparison.</p>
            </div>
          )}

          {data.articleSlug && (
            <p className="mt-3 text-sm">
              <Link href={`${localePrefix}/power-local-llm/${data.articleSlug}`} className="font-bold text-primary hover:underline">
                Read the full {data.label} comparison →
              </Link>
            </p>
          )}
        </div>
      )}
    </div>
  )
}
