// Card-view tile for one tool — the single fixed card format from
// page-redesign-v2.md §3: name + locality badge, layer, tagline, engine
// line, works-with tags, hardware meters, platforms, status badge, stars,
// article count, Get it ↗ / Details. Every card has the same structure so
// the grid never looks ragged (audit item #4/#5: two competing card
// formats, most fields missing).

import type { ReactNode } from 'react'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { Language } from '@/lib/blog/blogContent'
import type { ToolRecord } from '@/lib/power-local-llm/apps/types'
import { HardwareBlock } from './HardwareBlock'
import { StarIcon } from './icons'
import { FILTER_VALUE_LABELS } from './FilterBar'
import type { MachineType } from './types'
import toolArticleIndex from '@/generated/tool-article-index.json'

const STATUS_LABEL: Record<ToolRecord['status'], string> = {
  listed: 'Listed',
  verified: 'Verified',
  tested: 'PromptQuorum-tested',
}

const STATUS_BADGE: Record<ToolRecord['status'], string> = {
  listed: 'bg-slate-50 text-slate-600 border-slate-200',
  verified: 'bg-blue-50 text-blue-700 border-blue-200',
  tested: 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

const LOCALITY_LABEL: Record<'local' | 'hybrid' | 'cloud', string> = {
  local: '100% local',
  hybrid: 'Hybrid',
  cloud: 'Cloud',
}

const LOCALITY_BADGE: Record<'local' | 'hybrid' | 'cloud', string> = {
  local: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  hybrid: 'bg-amber-50 text-amber-700 border-amber-200',
  cloud: 'bg-slate-50 text-slate-600 border-slate-200',
}

const ENGINE_LABEL: Record<'builtin' | 'external' | 'both' | 'library', string> = {
  builtin: 'Own engine',
  external: 'Connects to Ollama / LM Studio / server',
  both: 'Bundled engine + external',
  library: 'Library / SDK',
}

const PLATFORM_LABEL: Record<string, string> = {
  mac: 'macOS', win: 'Windows', linux: 'Linux', ios: 'iOS', android: 'Android', web: 'Web',
}

function articleCount(toolName: string): number {
  const entry = (toolArticleIndex as Record<string, { totalCount: number }>)[toolName]
  return entry?.totalCount ?? 0
}

export function ToolCard({
  app,
  lang,
  machine,
  onOpen,
}: {
  app: ToolRecord
  lang: Language
  machine: MachineType
  onOpen: (slug: string) => void
}) {
  const tagline = app.tagline[lang] ?? app.tagline.en ?? ''
  const locality = app.locality !== 'TODO' ? app.locality : null
  const engine = app.engine !== 'TODO' ? app.engine : null
  const count = articleCount(app.name)

  return (
    <div
      className="flex flex-col text-left border border-primary/10 rounded-xl p-4 h-full hover:border-primary/40 hover:shadow-sm transition-all bg-white cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(app.slug)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen(app.slug)
        }
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <div>
          <h3 className="text-base font-bold text-text-primary leading-snug">{app.name}</h3>
          <p className="text-xs text-text-secondary mt-0.5">{FILTER_VALUE_LABELS.layer?.[app.layer] ?? app.layer}</p>
        </div>
        {locality && (
          <span className={`shrink-0 inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full border ${LOCALITY_BADGE[locality]}`}>
            {LOCALITY_LABEL[locality]}
          </span>
        )}
      </div>

      <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-3">{tagline}</p>

      {engine && (
        <p className="text-xs text-text-secondary mb-2.5">{ENGINE_LABEL[engine]}</p>
      )}

      <div className="flex flex-wrap gap-1.5 mb-2.5">
        {app.worksWith && app.worksWith.length > 0 ? (
          app.worksWith.map((w) => (
            <span key={w} className="text-[11px] font-mono border border-gray-200 rounded px-1.5 py-0.5 text-text-secondary">{w}</span>
          ))
        ) : (
          <span className="text-[11px] font-mono border border-dashed border-gray-300 rounded px-1.5 py-0.5 text-text-secondary/50">
            compatibility not yet recorded
          </span>
        )}
      </div>

      <div className="text-xs mb-3">
        <HardwareBlock hardware={app.hardware} machine={machine} compact />
      </div>

      <div className="mt-auto space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[11px] text-text-secondary">
            {app.platforms && app.platforms.length > 0
              ? app.platforms.map((p) => <span key={p}>{PLATFORM_LABEL[p] ?? p}</span>).reduce((acc, el, i) => (i === 0 ? [el] : [...acc, <span key={`sep-${i}`}>·</span>, el]), [] as ReactNode[])
              : <span className="text-text-secondary/50">platforms not yet recorded</span>}
          </div>
          <span className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full border ${STATUS_BADGE[app.status]}`}>
            {STATUS_LABEL[app.status]}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-text-secondary">
          <div className="flex items-center gap-3">
            {app.stars != null && (
              <span className="flex items-center gap-1">
                <StarIcon className="h-3.5 w-3.5 text-amber-400" />
                {app.stars.toLocaleString()}
              </span>
            )}
            {count > 0 && (
              <span className="flex items-center gap-1 text-primary" title="PromptQuorum articles mentioning this tool">
                📄 {count}
              </span>
            )}
          </div>
          {app.license && <span className="rounded bg-gray-50 border border-gray-200 px-1.5 py-0.5">{app.license}</span>}
        </div>

        {app.addedDate && (
          <p className="text-[11px] text-text-secondary/70">Added {formatDisplayDate(app.addedDate, lang)}</p>
        )}

        <div className="flex gap-2 pt-1">
          {app.url && (
            <a
              href={`https://${app.url}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 text-center rounded-lg border border-primary bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary/90"
            >
              {app.url.includes('github.com') ? 'GitHub ↗' : 'Get it ↗'}
            </a>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onOpen(app.slug)
            }}
            className="flex-1 text-center rounded-lg border border-primary/20 px-3 py-1.5 text-xs font-semibold text-text-primary hover:bg-primary/5"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  )
}
