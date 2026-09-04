// Card-view tile for one tool — the single fixed card format from
// page-redesign-v2.md §3: layer-accented header, name + locality badge,
// tagline, engine + price pills, works-with tags, hardware, platform chips,
// stars, license, and the two links that matter (our review, and the tool
// itself). Every card has the same structure so the grid never looks ragged
// (audit item #4/#5: two competing card formats, most fields missing).

import Link from 'next/link'
import type { Language } from '@/lib/blog/blogContent'
import type { LayerKey, ToolRecord } from '@/lib/power-local-llm/apps/types'
import { HardwareBlock } from './HardwareBlock'
import { StarIcon, CpuIcon, PlugIcon, TagIcon } from './icons'
import { FILTER_VALUE_LABELS } from './FilterBar'
import type { MachineType } from './types'
import toolArticleIndex from '@/generated/tool-article-index.json'

/** Per-layer accent so a grid of cards reads as a colour-coded map, not a wall of grey. */
const LAYER_ACCENT: Record<LayerKey, { bar: string; chip: string; avatar: string }> = {
  runtime: { bar: 'bg-violet-500', chip: 'bg-violet-50 text-violet-700', avatar: 'bg-violet-100 text-violet-700' },
  desktop: { bar: 'bg-blue-500', chip: 'bg-blue-50 text-blue-700', avatar: 'bg-blue-100 text-blue-700' },
  webui: { bar: 'bg-cyan-500', chip: 'bg-cyan-50 text-cyan-700', avatar: 'bg-cyan-100 text-cyan-700' },
  ide: { bar: 'bg-indigo-500', chip: 'bg-indigo-50 text-indigo-700', avatar: 'bg-indigo-100 text-indigo-700' },
  cli: { bar: 'bg-slate-500', chip: 'bg-slate-100 text-slate-700', avatar: 'bg-slate-200 text-slate-700' },
  rag: { bar: 'bg-teal-500', chip: 'bg-teal-50 text-teal-700', avatar: 'bg-teal-100 text-teal-700' },
  agent: { bar: 'bg-purple-500', chip: 'bg-purple-50 text-purple-700', avatar: 'bg-purple-100 text-purple-700' },
  stt: { bar: 'bg-pink-500', chip: 'bg-pink-50 text-pink-700', avatar: 'bg-pink-100 text-pink-700' },
  tts: { bar: 'bg-rose-500', chip: 'bg-rose-50 text-rose-700', avatar: 'bg-rose-100 text-rose-700' },
  vision: { bar: 'bg-orange-500', chip: 'bg-orange-50 text-orange-700', avatar: 'bg-orange-100 text-orange-700' },
  mobile: { bar: 'bg-sky-500', chip: 'bg-sky-50 text-sky-700', avatar: 'bg-sky-100 text-sky-700' },
  tools: { bar: 'bg-gray-400', chip: 'bg-gray-100 text-gray-700', avatar: 'bg-gray-200 text-gray-700' },
  image: { bar: 'bg-fuchsia-500', chip: 'bg-fuchsia-50 text-fuchsia-700', avatar: 'bg-fuchsia-100 text-fuchsia-700' },
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

// Short badge text — differs from the longer FilterBar labels, which read
// fine in a checkbox list but wrap awkwardly inside a pill.
const ENGINE_LABEL: Record<'builtin' | 'external' | 'both' | 'library', string> = {
  builtin: 'Runs its own engine',
  external: 'Needs Ollama/LM Studio',
  both: 'Own engine + external',
  library: 'Library / SDK',
}

const ENGINE_BADGE: Record<'builtin' | 'external' | 'both' | 'library', string> = {
  builtin: 'bg-violet-50 text-violet-700 border-violet-200',
  external: 'bg-sky-50 text-sky-700 border-sky-200',
  both: 'bg-violet-50 text-violet-700 border-violet-200',
  library: 'bg-slate-50 text-slate-600 border-slate-200',
}

const PRICE_LABEL: Record<'free' | 'freemium' | 'paid', string> = {
  free: 'Free',
  freemium: 'Free + paid tier',
  paid: 'Paid',
}

const PRICE_BADGE: Record<'free' | 'freemium' | 'paid', string> = {
  free: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  freemium: 'bg-amber-50 text-amber-700 border-amber-200',
  paid: 'bg-rose-50 text-rose-700 border-rose-200',
}

const PLATFORM_LABEL: Record<string, string> = {
  mac: 'macOS', win: 'Windows', linux: 'Linux', ios: 'iOS', android: 'Android', web: 'Web',
}

type ToolArticleEntry = { url: string; tier: 'about' | 'mentioned' }
type ToolArticleIndex = Record<string, { articles: ToolArticleEntry[]; totalCount: number }>

/** The dedicated review page for this tool, if one exists (tier "about"). */
function reviewUrl(toolName: string): string | null {
  const entry = (toolArticleIndex as ToolArticleIndex)[toolName]
  return entry?.articles.find((a) => a.tier === 'about')?.url ?? null
}

function articleCount(toolName: string): number {
  return (toolArticleIndex as ToolArticleIndex)[toolName]?.totalCount ?? 0
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
  const price = app.price !== 'TODO' ? app.price : null
  const count = articleCount(app.name)
  const review = reviewUrl(app.name)
  const accent = LAYER_ACCENT[app.layer] ?? LAYER_ACCENT.tools
  const layerLabel = FILTER_VALUE_LABELS.layer?.[app.layer] ?? app.layer

  const stop = (e: React.MouseEvent) => e.stopPropagation()

  return (
    <div
      className="group relative flex flex-col text-left h-full overflow-hidden rounded-xl border border-primary/10 bg-white cursor-pointer transition-all hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5"
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
      <span className={`absolute inset-x-0 top-0 h-1 ${accent.bar}`} aria-hidden="true" />

      <div className="flex flex-col h-full p-4 pt-5">
        <div className="flex items-start gap-3 mb-2.5">
          <span
            className={`shrink-0 flex h-9 w-9 items-center justify-center rounded-lg text-sm font-extrabold ${accent.avatar}`}
            aria-hidden="true"
          >
            {app.name.charAt(0).toUpperCase()}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-bold text-text-primary leading-snug">{app.name}</h3>
            <span className={`inline-block mt-1 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${accent.chip}`}>
              {layerLabel}
            </span>
          </div>
          {locality && (
            <span className={`shrink-0 inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full border ${LOCALITY_BADGE[locality]}`}>
              {LOCALITY_LABEL[locality]}
            </span>
          )}
        </div>

        <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-3">{tagline}</p>

        {(engine || price) && (
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {engine && (
              <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${ENGINE_BADGE[engine]}`}>
                {engine === 'external' ? <PlugIcon className="h-3 w-3" /> : <CpuIcon className="h-3 w-3" />}
                {ENGINE_LABEL[engine]}
              </span>
            )}
            {price && (
              <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${PRICE_BADGE[price]}`}>
                <TagIcon className="h-3 w-3" />
                {PRICE_LABEL[price]}
              </span>
            )}
          </div>
        )}

        {app.worksWith && app.worksWith.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {app.worksWith.map((w) => (
              <span key={w} className="text-[11px] font-mono border border-gray-200 rounded px-1.5 py-0.5 text-text-secondary">{w}</span>
            ))}
          </div>
        )}

        <div className="flex items-start gap-1.5 text-xs mb-3">
          <CpuIcon className="h-3.5 w-3.5 mt-px shrink-0 text-text-secondary/50" />
          <HardwareBlock hardware={app.hardware} machine={machine} engine={app.engine} compact />
        </div>

        <div className="mt-auto space-y-2.5">
          <div className="flex flex-wrap gap-1">
            {app.platforms?.map((p) => (
              <span key={p} className="rounded-md bg-gray-50 border border-gray-200 px-1.5 py-0.5 text-[11px] font-medium text-text-secondary">
                {PLATFORM_LABEL[p] ?? p}
              </span>
            ))}
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
                <span className="text-primary font-medium">
                  {count} {count === 1 ? 'article' : 'articles'}
                </span>
              )}
            </div>
            {app.license && app.license !== 'TODO' && (
              <span className="rounded bg-gray-50 border border-gray-200 px-1.5 py-0.5">{app.license}</span>
            )}
          </div>

          <div className="flex gap-2 pt-1">
            {review ? (
              <>
                <Link
                  href={review}
                  onClick={stop}
                  className="flex-1 text-center rounded-lg border border-primary bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary/90"
                >
                  Read review
                </Link>
                {app.url && (
                  <a
                    href={`https://${app.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={stop}
                    className="flex-1 text-center rounded-lg border border-primary/20 px-3 py-1.5 text-xs font-semibold text-text-primary hover:bg-primary/5"
                  >
                    {app.url.includes('github.com') ? 'GitHub ↗' : 'Get it ↗'}
                  </a>
                )}
              </>
            ) : (
              <>
                {app.url && (
                  <a
                    href={`https://${app.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={stop}
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
