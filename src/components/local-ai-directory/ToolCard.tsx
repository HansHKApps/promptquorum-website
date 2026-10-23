// Card-view tile for one tool — the single fixed card format from
// page-redesign-v2.md §3: category-accented header, name + locality badge,
// tagline, engine + price pills, works-with tags, hardware, platform chips,
// stars, license, and the two links that matter (our review, and the tool
// itself). Every card has the same structure so the grid never looks ragged
// (audit item #4/#5: two competing card formats, most fields missing).

import { AppLink as Link } from '@/components/AppLink'
import { useState } from 'react'
import type { Language } from '@/lib/blog/blogContent'
import { STORE_LINK_LABEL, type ToolRecord } from '@/lib/power-local-llm/apps/types'
import { CATEGORY_SUB_GROUP, CATEGORY_SUB_LABEL, INTERFACE_LABEL, type CategoryGroupKey } from '@/lib/power-local-llm/apps/categories'
import { HardwareBlock } from './HardwareBlock'
import { CompatibilityBadge } from './CompatibilityBadge'
import { computeCompatibilityVerdict, computeVariesByModelFitGb } from './hardware'
import { StarIcon, CpuIcon, PlugIcon, TagIcon, ChevronRightIcon } from './icons'
import { LastUpdatedBadge } from './LastUpdatedBadge'
import { isFounderStarActive } from './founderStar'
import { getListingFreshness, getAppActivity } from './staleness'
import { founderText, founderParagraphs } from '@/lib/power-local-llm/founderText'
import type { HardwareProfile, MachineType } from './types'
import toolArticleIndex from '@/generated/tool-article-index.json'
import { featureReviewUrl } from './reviewLinks'
import { handsOnTestUrl } from '@/lib/hands-on-tests/links'
import { guideForCategories } from '@/lib/power-local-llm/compare-guide'
import { t } from './directory-i18n'
import { LicenseInfoModal } from './LicenseInfoModal'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { INSTALL_EFFORT_UI, installOnSuffix } from './installEffort'

/** Per-group accent so a grid of cards reads as a colour-coded map, not a wall of grey. */
const GROUP_ACCENT: Record<CategoryGroupKey, { bar: string; chip: string; avatar: string }> = {
  'run-serve': { bar: 'bg-hub-violet', chip: 'bg-hub-violet-tint text-hub-violet-ink', avatar: 'bg-hub-violet-tint text-hub-violet-ink' },
  'chat-assistants': { bar: 'bg-hub-azure', chip: 'bg-hub-azure-tint text-hub-azure-ink', avatar: 'bg-hub-azure-tint text-hub-azure-ink' },
  'code-development': { bar: 'bg-hub-indigo', chip: 'bg-hub-indigo-tint text-hub-indigo-ink', avatar: 'bg-hub-indigo-tint text-hub-indigo-ink' },
  'knowledge-retrieval': { bar: 'bg-hub-cyan', chip: 'bg-hub-cyan-tint text-hub-cyan-ink', avatar: 'bg-hub-cyan-tint text-hub-cyan-ink' },
  'voice-audio': { bar: 'bg-hub-rose', chip: 'bg-hub-rose-tint text-hub-rose-ink', avatar: 'bg-hub-rose-tint text-hub-rose-ink' },
  'images-video': { bar: 'bg-hub-orchid', chip: 'bg-hub-orchid-tint text-hub-orchid-ink', avatar: 'bg-hub-orchid-tint text-hub-orchid-ink' },
  'train-operate': { bar: 'bg-hub-amber', chip: 'bg-hub-amber-tint text-hub-amber-ink', avatar: 'bg-hub-amber-tint text-hub-amber-ink' },
  'at-the-edge': { bar: 'bg-hub-orange', chip: 'bg-hub-orange-tint text-hub-orange-ink', avatar: 'bg-hub-orange-tint text-hub-orange-ink' },
}

const LOCALITY_BADGE: Record<'local' | 'hybrid' | 'cloud', string> = {
  local: 'bg-hub-olive-tint text-hub-olive-ink border-hub-olive-edge',
  hybrid: 'bg-hub-amber-tint text-hub-amber-ink border-hub-amber-edge',
  cloud: 'bg-slate-50 text-slate-600 border-slate-200',
}

const ENGINE_BADGE: Record<'builtin' | 'external' | 'both' | 'library', string> = {
  builtin: 'bg-hub-violet-tint text-hub-violet-ink border-hub-violet-edge',
  external: 'bg-hub-azure-tint text-hub-azure-ink border-hub-azure-edge',
  both: 'bg-hub-violet-tint text-hub-violet-ink border-hub-violet-edge',
  library: 'bg-slate-50 text-slate-600 border-slate-200',
}

const PRICE_BADGE: Record<'free' | 'freemium' | 'paid', string> = {
  free: 'bg-hub-olive-tint text-hub-olive-ink border-hub-olive-edge',
  freemium: 'bg-hub-amber-tint text-hub-amber-ink border-hub-amber-edge',
  paid: 'bg-hub-rose-tint text-hub-rose-ink border-hub-rose-edge',
}

const MCP_BADGE = 'bg-hub-violet-tint text-hub-violet-ink border-hub-violet-edge'

// Platform values (macOS/Windows/Linux/iOS/Android/Web) are OS product
// names — kept identical across locales rather than "translated".
const PLATFORM_LABEL: Record<string, string> = {
  mac: 'macOS', win: 'Windows', linux: 'Linux', ios: 'iOS', android: 'Android', web: 'Web',
}

type ToolArticleEntry = { url: string; tier: 'about' | 'mentioned' }
type ToolArticleIndex = Record<string, { articles: ToolArticleEntry[]; totalCount: number }>

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
    const isGithub = app.url.includes('github.com')
    // GitHub is a delivery channel, not an install experience: an installer-tier tool whose only link is its
    // repo sends the reader to the Releases page (where the .dmg/.exe lives), labelled as a download.
    if (isGithub && app.installEffort === 'installer' && /^github\.com\/[^/]+\/[^/]+$/.test(app.url)) {
      return [{ href: `https://${app.url}/releases/latest`, label: t('downloadLink', lang) }]
    }
    return [{ href: `https://${app.url}`, label: isGithub ? t('githubLink', lang) : t('getItLink', lang) }]
  }
  return []
}

export function ToolCard({
  app,
  lang,
  machine,
  profile,
  onOpen,
  onRequestHardware,
}: {
  app: ToolRecord
  lang: Language
  machine: MachineType
  profile: HardwareProfile | null
  onOpen: (slug: string) => void
  onRequestHardware?: () => void
}) {
  const tagline = app.tagline[lang] ?? app.tagline.en ?? ''
  const locality = app.locality !== 'TODO' ? app.locality : null
  const engine = app.engine !== 'TODO' ? app.engine : null
  const price = app.price !== 'TODO' ? app.price : null
  const count = articleCount(app.name)
  const review = featureReviewUrl(app.slug, lang)
  const handsOn = handsOnTestUrl(app.slug, lang)
  const guide = guideForCategories(app.categories, lang)
  const guideHref = guide ? `${lang === 'en' ? '' : `/${lang}`}/power-local-llm/${guide.slug}` : null
  const lastUpdatedIso = app.lastVerifiedDate ?? app.addedDate
  const lastUpdatedLabel = lastUpdatedIso ? formatDisplayDate(lastUpdatedIso, lang) : null
  const listingFreshness = app.upstreamStatus ? 'fresh' : getListingFreshness(lastUpdatedIso)
  const appActivity = getAppActivity(app.lastUpstreamUpdate)
  const appUpdateLabel = app.lastUpstreamUpdate ? formatDisplayDate(app.lastUpstreamUpdate, lang) : null
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
  const [licenseModalOpen, setLicenseModalOpen] = useState(false)
  const isFounderReviewed = isFounderStarActive(app.founderReviewedDate)

  return (
    <div
      className={`group relative flex flex-col text-start h-full overflow-hidden rounded-[18px] cursor-pointer transition-all hover:shadow-[0_14px_28px_-10px_var(--hub-violet)] hover:-translate-y-0.5 ${
        appActivity === 'dead'
          ? 'border border-gray-300 bg-gray-100 grayscale opacity-80 hover:opacity-100 hover:border-gray-400'
          : isFounderReviewed
          ? 'border-2 border-hub-amber bg-gradient-to-b from-hub-amber-tint to-white shadow-[0_6px_18px_-8px_var(--hub-amber)] hover:border-hub-amber hover:shadow-[0_12px_26px_-8px_var(--hub-amber)]'
          : 'border border-hub-violet-edge bg-white hover:border-hub-violet'
      }`}
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
      <span
        className={`absolute inset-x-0 top-0 ${isFounderReviewed ? 'h-1.5 bg-hub-amber' : `h-1 ${accent.bar}`}`}
        aria-hidden="true"
      />
      <span
        className="absolute top-3 end-3 flex h-5 w-5 items-center justify-center rounded-full bg-hub-violet-tint text-primary/50 transition-colors group-hover:bg-hub-violet-tint group-hover:text-primary"
        aria-hidden="true"
      >
        <ChevronRightIcon className="h-3 w-3" />
      </span>

      <div className="flex flex-col h-full p-4 pt-5 pe-8">
        {isFounderReviewed && (
          <span
            className="inline-flex items-center gap-1 self-start mb-2.5 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide rounded-full border-2 border-hub-amber bg-hub-amber-tint text-hub-amber-ink shadow-sm"
            title={t('founderReviewedTooltip', lang)}
          >
            <StarIcon className="h-3 w-3 fill-hub-amber text-hub-amber" />
            {t('founderReviewedBadge', lang)}
          </span>
        )}
        <div className="flex items-start gap-3 mb-2.5">
          <span
            className={`shrink-0 flex h-9 w-9 items-center justify-center rounded-[10px] text-sm font-extrabold ${accent.avatar}`}
            aria-hidden="true"
          >
            {app.name.charAt(0).toUpperCase()}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-bold text-text-primary leading-snug truncate" title={app.name}>{app.name}</h3>
            <span className={`inline-block mt-1 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${accent.chip}`}>
              {categoryLabel}
            </span>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-1">
            {locality && (
              <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full border ${LOCALITY_BADGE[locality]}`}>
                {LOCALITY_LABEL[locality]}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-3">{tagline}</p>

        {app.founder && (
          <p className="text-xs italic text-text-secondary/80 leading-relaxed line-clamp-2 mb-3 border-s-2 border-hub-violet-edge pl-2">
            {/* Prefer his own verbatim words when we have them; `why` is a
                PromptQuorum paraphrase and shouldn't be shown in quotation
                marks as if it were a direct quote. */}
            &ldquo;{app.founder.pullQuote ? founderText(app.founder.pullQuote, lang) : founderParagraphs(app.founder.fullQuote, lang)?.[0] ?? founderText(app.founder.why, lang)}&rdquo; <span className="not-italic font-medium">— {t('fromTheMaker', lang)}</span>
          </p>
        )}

        {(engine || price || app.mcpSupport || app.installEffort) && (
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
            {app.installEffort && (
              <span
                className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${INSTALL_EFFORT_UI[app.installEffort].badge}`}
                title={t(INSTALL_EFFORT_UI[app.installEffort].tip, lang)}
              >
                {t(INSTALL_EFFORT_UI[app.installEffort].label, lang)}{installOnSuffix(app)}
              </span>
            )}
            {app.mcpSupport && (
              <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${MCP_BADGE}`}>
                <PlugIcon className="h-3 w-3" />
                {t('mcpSupported', lang)}
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

        <div className="flex items-start gap-1.5 text-xs mb-2">
          <CpuIcon className="h-3.5 w-3.5 mt-px shrink-0 text-text-secondary/50" />
          <HardwareBlock hardware={app.hardware} machine={machine} engine={app.engine} lang={lang} compact profile={profile} onRequestHardware={onRequestHardware} mobile={{ interfaces: app.interfaces, platforms: app.platforms }} />
        </div>

        <div className="mb-3" onClick={stop}>
          <CompatibilityBadge
            verdict={computeCompatibilityVerdict(app.hardware, profile, machine, app.engine, { interfaces: app.interfaces, platforms: app.platforms })}
            hasProfile={profile != null}
            variesByModel={app.hardware?.variesByModel === true}
            fitGb={computeVariesByModelFitGb(profile, machine)}
            lang={lang}
            onRequestProfile={onRequestHardware}
          />
        </div>

        <div className="mt-auto space-y-2.5">
          <div className="flex flex-wrap gap-1">
            {app.interfaces.map((i) => (
              <span key={i} className="rounded-full bg-hub-violet-tint border border-hub-violet-edge px-2 py-0.5 text-[11px] font-medium text-hub-violet-ink">
                {INTERFACE_LABEL[i][lang]}
              </span>
            ))}
            {app.platforms?.map((p) => (
              <span key={p} className="rounded-full bg-gray-50 border border-gray-200 px-2 py-0.5 text-[11px] font-medium text-text-secondary">
                {PLATFORM_LABEL[p] ?? p}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-text-secondary">
            <div className="flex items-center gap-3">
              {app.stars != null && (
                <span className="flex items-center gap-1">
                  <StarIcon className="h-3.5 w-3.5 text-hub-amber" />
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
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setLicenseModalOpen(true)
                }}
                className="rounded border border-gray-200 bg-gray-50 px-1.5 py-0.5 hover:border-hub-violet hover:bg-hub-violet-tint hover:text-primary"
              >
                {app.license}
              </button>
            )}
          </div>

          {lastUpdatedLabel && (
            <div onClick={stop}>
              <LastUpdatedBadge lang={lang} date={lastUpdatedLabel} />
            </div>
          )}

          {appUpdateLabel && (
            <p className={`text-[11px] mb-1.5 ${appActivity === 'dead' ? 'font-bold text-gray-700' : appActivity === 'quiet' ? 'font-bold text-hub-rose-ink' : 'text-text-secondary'}`}>
              {t('appLastUpdateLabel', lang)}: {appUpdateLabel}
            </p>
          )}

          {(appActivity === 'quiet' || appActivity === 'dead') && (
            <div
              role="alert"
              className={`mb-2 rounded-md border-2 px-2 py-1.5 text-xs font-extrabold leading-snug ${
                appActivity === 'dead' ? 'border-gray-700 bg-gray-800 text-white' : 'border-hub-rose bg-hub-rose-tint text-hub-rose-ink'
              }`}
              title={t(appActivity === 'dead' ? 'appDeadTooltip' : 'appQuietTooltip', lang)}
            >
              ⚠ {t(appActivity === 'dead' ? 'appDeadBadge' : 'appQuietBadge', lang)}
            </div>
          )}

          {app.upstreamStatus && (
            <span className="inline-flex w-fit items-center gap-1 rounded-full border border-gray-300 bg-gray-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-700 mb-1.5">
              {t(app.upstreamStatus.state === 'archived' ? 'archivedBadge' : 'unmaintainedBadge', lang)}
            </span>
          )}

          {listingFreshness !== 'fresh' && (
            <span
              className={`inline-flex w-fit items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide mb-1.5 ${
                listingFreshness === 'old' ? 'border-hub-amber-edge bg-hub-amber-tint text-hub-amber-ink' : 'border-hub-amber-edge bg-hub-amber-tint text-hub-amber-ink'
              }`}
              title={t(listingFreshness === 'old' ? 'staleListingTooltipOld' : 'staleListingTooltipWarn', lang)}
            >
              {t(listingFreshness === 'old' ? 'staleListingBadgeOld' : 'staleListingBadgeWarn', lang)}
            </span>
          )}

          {review && (
            <span className="inline-flex w-fit items-center gap-1 rounded-full border border-hub-violet-edge bg-hub-violet-tint px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary mb-1.5">
              {t('featureArticleBadge', lang)}
            </span>
          )}

          <div className="flex flex-wrap gap-2 pt-1">
            {review ? (
              <>
                <Link
                  href={review}
                  onClick={stop}
                  className="w-full text-center rounded-[10px] border border-hub-violet bg-hub-violet shadow-[inset_0_-2px_0_rgba(0,0,0,.16),0_6px_14px_-6px_var(--hub-violet)] hover:-translate-y-0.5 transition-all px-3 py-1.5 text-xs font-bold underline underline-offset-2 text-white hover:brightness-95"
                >
                  {t('readReview', lang)}
                </Link>
                {handsOn && (
                  <Link
                    href={handsOn}
                    onClick={stop}
                    className="w-full text-center rounded-[10px] border border-hub-violet-edge px-3 py-1.5 text-xs font-semibold text-primary hover:bg-hub-violet-tint"
                  >
                    {t('handsOnTest', lang)}
                  </Link>
                )}
                {guideHref && (
                  <Link
                    href={guideHref}
                    onClick={stop}
                    className="w-full text-center rounded-[10px] border border-hub-violet-edge px-3 py-1.5 text-xs font-semibold text-primary hover:bg-hub-violet-tint"
                  >
                    {t('readGuide', lang)}
                  </Link>
                )}
                {downloadLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={stop}
                    className="flex-1 min-w-[45%] text-center rounded-[10px] border border-hub-violet-edge px-2 py-1.5 text-xs font-semibold text-text-primary hover:bg-hub-violet-tint"
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
                    className="flex-1 min-w-[45%] text-center rounded-[10px] border border-hub-violet bg-hub-violet shadow-[inset_0_-2px_0_rgba(0,0,0,.16),0_6px_14px_-6px_var(--hub-violet)] hover:-translate-y-0.5 transition-all px-2 py-1.5 text-xs font-semibold text-white hover:brightness-95"
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
                  className="flex-1 min-w-[45%] text-center rounded-[10px] border border-hub-violet-edge px-3 py-1.5 text-xs font-semibold text-text-primary hover:bg-hub-violet-tint"
                >
                  {t('detailsButton', lang)}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {app.license && app.license !== 'TODO' && (
        <LicenseInfoModal
          license={licenseModalOpen ? app.license : null}
          lang={lang}
          onClose={() => setLicenseModalOpen(false)}
        />
      )}
    </div>
  )
}
