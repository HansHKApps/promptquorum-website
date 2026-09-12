// Card-view tile for one tool — the single fixed card format from
// page-redesign-v2.md §3: category-accented header, name + locality badge,
// tagline, engine + price pills, works-with tags, hardware, platform chips,
// stars, license, and the two links that matter (our review, and the tool
// itself). Every card has the same structure so the grid never looks ragged
// (audit item #4/#5: two competing card formats, most fields missing).

import Link from 'next/link'
import type { Language } from '@/lib/blog/blogContent'
import { STORE_LINK_LABEL, type ToolRecord } from '@/lib/power-local-llm/apps/types'
import { CATEGORY_SUB_GROUP, CATEGORY_SUB_LABEL, INTERFACE_LABEL, type CategoryGroupKey } from '@/lib/power-local-llm/apps/categories'
import { HardwareBlock } from './HardwareBlock'
import { StarIcon, CpuIcon, PlugIcon, TagIcon, ChevronRightIcon } from './icons'
import { isFounderStarActive } from './founderStar'
import type { MachineType } from './types'
import toolArticleIndex from '@/generated/tool-article-index.json'
import featureReviewIndex from '@/generated/feature-review-index.json'
import { t } from './directory-i18n'

/** Per-group accent so a grid of cards reads as a colour-coded map, not a wall of grey. */
const GROUP_ACCENT: Record<CategoryGroupKey, { bar: string; chip: string; avatar: string }> = {
  'run-serve': { bar: 'bg-violet-500', chip: 'bg-violet-50 text-violet-700', avatar: 'bg-violet-100 text-violet-700' },
  'chat-assistants': { bar: 'bg-blue-500', chip: 'bg-blue-50 text-blue-700', avatar: 'bg-blue-100 text-blue-700' },
  'code-development': { bar: 'bg-indigo-500', chip: 'bg-indigo-50 text-indigo-700', avatar: 'bg-indigo-100 text-indigo-700' },
  'knowledge-retrieval': { bar: 'bg-teal-500', chip: 'bg-teal-50 text-teal-700', avatar: 'bg-teal-100 text-teal-700' },
  'voice-audio': { bar: 'bg-rose-500', chip: 'bg-rose-50 text-rose-700', avatar: 'bg-rose-100 text-rose-700' },
  'images-video': { bar: 'bg-fuchsia-500', chip: 'bg-fuchsia-50 text-fuchsia-700', avatar: 'bg-fuchsia-100 text-fuchsia-700' },
  'train-operate': { bar: 'bg-amber-500', chip: 'bg-amber-50 text-amber-700', avatar: 'bg-amber-100 text-amber-700' },
}

const LOCALITY_BADGE: Record<'local' | 'hybrid' | 'cloud', string> = {
  local: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  hybrid: 'bg-amber-50 text-amber-700 border-amber-200',
  cloud: 'bg-slate-50 text-slate-600 border-slate-200',
}

const ENGINE_BADGE: Record<'builtin' | 'external' | 'both' | 'library', string> = {
  builtin: 'bg-violet-50 text-violet-700 border-violet-200',
  external: 'bg-sky-50 text-sky-700 border-sky-200',
  both: 'bg-violet-50 text-violet-700 border-violet-200',
  library: 'bg-slate-50 text-slate-600 border-slate-200',
}

const PRICE_BADGE: Record<'free' | 'freemium' | 'paid', string> = {
  free: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  freemium: 'bg-amber-50 text-amber-700 border-amber-200',
  paid: 'bg-rose-50 text-rose-700 border-rose-200',
}

// Platform values (macOS/Windows/Linux/iOS/Android/Web) are OS product
// names — kept identical across locales rather than "translated".
const PLATFORM_LABEL: Record<string, string> = {
  mac: 'macOS', win: 'Windows', linux: 'Linux', ios: 'iOS', android: 'Android', web: 'Web',
}

type ToolArticleEntry = { url: string; tier: 'about' | 'mentioned' }
type ToolArticleIndex = Record<string, { articles: ToolArticleEntry[]; totalCount: number }>
type FeatureReviewIndex = Record<string, { cluster: string; urlSlug: string; url: string }>

/**
 * The tool's own dedicated, single-subject review, if one exists — from the
 * authoritative build-time index (src/generated/feature-review-index.json,
 * derived from the tool's own `reviewSlug` field), NOT the fuzzy
 * tool-article-index.json tier heuristic (which only guarantees an article
 * *mentions* the tool, not that the tool is its primary subject).
 */
function featureReviewUrl(appSlug: string): string | null {
  return (featureReviewIndex as FeatureReviewIndex)[appSlug]?.url ?? null
}

function articleCount(toolName: string): number {
  return (toolArticleIndex as ToolArticleIndex)[toolName]?.totalCount ?? 0
}

/** One button per distribution channel when `storeLinks` is set, else the single `url` fallback. */
export function getDownloadLinks(app: ToolRecord, lang: Language): { href: string; label: string }[] {
  if (app.storeLinks && Object.keys(app.storeLinks).length > 0) {
    return Object.entries(app.storeLinks).map(([key, href]) => ({
      href: href!,
      label: `${STORE_LINK_LABEL[key as keyof typeof STORE_LINK_LABEL]} ↗`,
    }))
  }
  if (app.url) {
    return [{ href: `https://${app.url}`, label: app.url.includes('github.com') ? t('githubLink', lang) : t('getItLink', lang) }]
  }
  return []
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
  const review = featureReviewUrl(app.slug)
  const primaryCategory = app.categories[0]
  const accent = GROUP_ACCENT[CATEGORY_SUB_GROUP[primaryCategory]]
  const categoryLabel = CATEGORY_SUB_LABEL[primaryCategory][lang]

  const LOCALITY_LABEL: Record<'local' | 'hybrid' | 'cloud', string> = {
    local: t('cardLocalityLocal', lang),
    hybrid: t('localityHybridShort', lang),
    cloud: t('localityCloud', lang),
  }
  const ENGINE_LABEL: Record<'builtin' | 'external' | 'both' | 'library', string> = {
    builtin: t('cardEngineBuiltin', lang),
    external: t('cardEngineExternal', lang),
    both: t('cardEngineBoth', lang),
    library: t('engineLibrary', lang),
  }
  const PRICE_LABEL: Record<'free' | 'freemium' | 'paid', string> = {
    free: t('priceFree', lang),
    freemium: t('cardPriceFreemium', lang),
    paid: t('pricePaid', lang),
  }

  const stop = (e: React.MouseEvent) => e.stopPropagation()
  const downloadLinks = getDownloadLinks(app, lang)

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
      <span
        className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary/5 text-primary/50 transition-colors group-hover:bg-primary/10 group-hover:text-primary"
        aria-hidden="true"
      >
        <ChevronRightIcon className="h-3 w-3" />
      </span>

      <div className="flex flex-col h-full p-4 pt-5 pr-8">
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
              {categoryLabel}
            </span>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-1">
            {isFounderStarActive(app.founderReviewedDate) && (
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full border bg-amber-50 text-amber-800 border-amber-300"
                title={t('founderReviewedTooltip', lang)}
              >
                <StarIcon className="h-2.5 w-2.5" />
                {t('founderReviewedBadge', lang)}
              </span>
            )}
            {locality && (
              <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full border ${LOCALITY_BADGE[locality]}`}>
                {LOCALITY_LABEL[locality]}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-3">{tagline}</p>

        {app.founder && (
          <p className="text-xs italic text-text-secondary/80 leading-relaxed line-clamp-2 mb-3 border-l-2 border-primary/20 pl-2">
            {/* Prefer his own verbatim words when we have them; `why` is a
                PromptQuorum paraphrase and shouldn't be shown in quotation
                marks as if it were a direct quote. */}
            &ldquo;{app.founder.fullQuote ? app.founder.fullQuote[0] : app.founder.why}&rdquo; <span className="not-italic font-medium">— {t('fromTheMaker', lang)}</span>
          </p>
        )}

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
          <HardwareBlock hardware={app.hardware} machine={machine} engine={app.engine} lang={lang} compact />
        </div>

        <div className="mt-auto space-y-2.5">
          <div className="flex flex-wrap gap-1">
            {app.interfaces.map((i) => (
              <span key={i} className="rounded-md bg-primary/5 border border-primary/10 px-1.5 py-0.5 text-[11px] font-medium text-primary">
                {INTERFACE_LABEL[i][lang]}
              </span>
            ))}
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
                  {count === 1 ? t('articleCountOne', lang, { count }) : t('articleCountOther', lang, { count })}
                </span>
              )}
            </div>
            {app.license && app.license !== 'TODO' && (
              <span className="rounded bg-gray-50 border border-gray-200 px-1.5 py-0.5">{app.license}</span>
            )}
          </div>

          {review && (
            <span className="inline-flex w-fit items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary mb-1.5">
              {t('featureArticleBadge', lang)}
            </span>
          )}

          <div className="flex gap-2 pt-1">
            {review ? (
              <>
                <Link
                  href={review}
                  onClick={stop}
                  className="flex-1 text-center rounded-lg border border-primary bg-primary px-3 py-1.5 text-xs font-bold underline underline-offset-2 text-white hover:bg-primary/90"
                >
                  {t('readReview', lang)}
                </Link>
                {downloadLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={stop}
                    className="flex-1 text-center rounded-lg border border-primary/20 px-2 py-1.5 text-xs font-semibold text-text-primary hover:bg-primary/5"
                  >
                    {link.label}
                  </a>
                ))}
              </>
            ) : (
              <>
                {downloadLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={stop}
                    className="flex-1 text-center rounded-lg border border-primary bg-primary px-2 py-1.5 text-xs font-semibold text-white hover:bg-primary/90"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    onOpen(app.slug)
                  }}
                  className="flex-1 text-center rounded-lg border border-primary/20 px-3 py-1.5 text-xs font-semibold text-text-primary hover:bg-primary/5"
                >
                  {t('detailsButton', lang)}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
