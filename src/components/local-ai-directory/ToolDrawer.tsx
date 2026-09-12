'use client'

// Tool detail drawer — built on Radix Dialog (already a repo dependency,
// unused elsewhere in src/components) rather than hand-rolling a modal.
// Radix has no separate "Sheet" primitive in this repo, so the slide-in-from
// -right panel is Dialog.Content with directional Tailwind transitions.

import * as Dialog from '@radix-ui/react-dialog'
import { useState, type ReactNode } from 'react'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { Language } from '@/lib/blog/blogContent'
import type { ToolRecord } from '@/lib/power-local-llm/apps/types'
import { HardwareBlock } from './HardwareBlock'
import { computeHardwareDisplay } from './hardware'
import { ArticlesBlock } from './ArticlesBlock'
import { CloseIcon, StarIcon, CopyIcon, CheckIcon } from './icons'
import { getValueLabels } from './FilterBar'
import { CATEGORY_SUB_LABEL, INTERFACE_LABEL } from '@/lib/power-local-llm/apps/categories'
import { isFounderStarActive } from './founderStar'
import { DataDisclaimer } from '@/components/DataDisclaimer'
import type { MachineType } from './types'
import { getDownloadLinks } from './ToolCard'
import { t } from './directory-i18n'
import Link from 'next/link'
import featureReviewIndex from '@/generated/feature-review-index.json'

type FeatureReviewIndex = Record<string, { cluster: string; urlSlug: string; url: string }>

/**
 * The tool's own dedicated, single-subject review, if one exists — from the
 * authoritative build-time index (src/generated/feature-review-index.json,
 * derived from the tool's own `reviewSlug` field). Mirrors ToolCard.tsx's
 * `featureReviewUrl` — kept local here rather than imported, since ToolCard
 * only exports `getDownloadLinks` today.
 */
function featureReviewUrl(appSlug: string): string | null {
  return (featureReviewIndex as FeatureReviewIndex)[appSlug]?.url ?? null
}

function DetailRow({ label, value }: { label: string; value: ReactNode }) {
  if (value == null || value === '') return null
  return (
    <div className="flex flex-col sm:flex-row sm:gap-2 text-sm">
      <dt className="font-semibold text-text-primary shrink-0 sm:w-32">{label}:</dt>
      <dd className="text-text-secondary">{value}</dd>
    </div>
  )
}

// Renders the founder/maker's own words verbatim — never a PromptQuorum
// paraphrase. Always visible (not collapsed): the point of "From the Maker"
// is that it IS his words, not a summary of them. Height-capped with an
// internal scrollbar so a long quote doesn't force the drawer itself to
// grow — the drawer's own footprint stays fixed.
function FounderFullQuote({ paragraphs, source }: { paragraphs: string[]; source?: string }) {
  return (
    <div className="max-h-64 overflow-y-auto rounded-lg border border-primary/10 bg-primary/5 p-3 space-y-2">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-sm text-text-secondary italic leading-relaxed">{p}</p>
      ))}
      {source && <p className="text-xs text-text-secondary/80 not-italic pt-1">— {source}</p>}
    </div>
  )
}

function joinOrUnknown(values: string[] | null): ReactNode {
  if (!values || values.length === 0) return null
  return values.join(', ')
}

/** Renders the reader-facing label for an enum value, never the raw key ("rag", "external"). */
function labelFor(group: keyof ReturnType<typeof getValueLabels>, value: string | null, lang: Language): ReactNode {
  if (!value || value === 'TODO') return null
  return getValueLabels(lang)[group]?.[value] ?? value
}

function labelList(group: keyof ReturnType<typeof getValueLabels>, values: string[] | null, lang: Language): ReactNode {
  if (!values || values.length === 0) return null
  const labels = getValueLabels(lang)
  return values.map((v) => labels[group]?.[v] ?? v).join(', ')
}

function FounderClaimBox({ appName, lang }: { appName: string; lang: Language }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="rounded-xl border border-dashed border-primary/25 bg-primary/[0.03] p-4">
      <p className="text-sm text-text-secondary italic">
        {t('claimEntryTemplate', lang, { appName })}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
      >
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-primary text-[11px] leading-none">
          {expanded ? '–' : '+'}
        </span>
        {expanded ? t('hideDetails', lang) : t('whyClaimIt', lang)}
      </button>
      {expanded && (
        <div className="mt-3 space-y-2.5 text-sm text-text-secondary border-t border-primary/10 pt-3">
          <p>
            <span className="font-semibold text-text-primary">{t('verifiedBadgeTitle', lang)}</span>{' '}
            {t('verifiedBadgeBodyTemplate', lang, { appName })}
          </p>
          <p>
            <span className="font-semibold text-text-primary">{t('correctRecordTitle', lang)}</span>{' '}
            {t('correctRecordBody', lang)}
          </p>
          <p>
            <span className="font-semibold text-text-primary">{t('addStatementTitle', lang)}</span>{' '}
            {t('addStatementBody', lang)}
          </p>
          <p>
            <span className="font-semibold text-text-primary">{t('freeVisibilityTitle', lang)}</span>{' '}
            {t('freeVisibilityBodyTemplate', lang, { appName })}
          </p>
          <p className="pt-1">
            {t('emailPrefix', lang)}{' '}
            <a href="mailto:hello@promptquorum.com" className="text-primary hover:underline">
              hello@promptquorum.com
            </a>{' '}
            {t('emailSuffixTemplate', lang, { appName })}
          </p>
        </div>
      )}
    </div>
  )
}

export function ToolDrawer({
  app,
  allApps,
  lang,
  machine,
  onClose,
  onOpenSlug,
}: {
  app: ToolRecord | null
  allApps: ToolRecord[]
  lang: Language
  machine: MachineType
  onClose: () => void
  onOpenSlug: (slug: string) => void
}) {
  const open = app != null
  const [copied, setCopied] = useState(false)
  const featureReview = app ? featureReviewUrl(app.slug) : null

  const STATUS_LABEL: Record<ToolRecord['status'], string> = {
    listed: t('statusListed', lang),
    verified: t('statusVerified', lang),
    tested: t('statusTested', lang),
  }

  const alternatives = app
    ? allApps.filter((a) => a.slug !== app.slug && a.categories.some((c) => app.categories.includes(c))).slice(0, 6)
    : []

  async function handleCopy() {
    if (!app) return
    const rows: [string, ReactNode][] = [
      [t('detailCategory', lang), app.categories.map((c) => CATEGORY_SUB_LABEL[c][lang]).join(', ')],
      [t('detailInterface', lang), app.interfaces.map((i) => INTERFACE_LABEL[i][lang]).join(', ')],
      [t('detailRuns', lang), labelFor('locality', app.locality, lang)],
      [t('detailEngine', lang), labelFor('engine', app.engine, lang)],
      [t('detailPrice', lang), labelFor('price', app.price, lang)],
      [t('detailLicense', lang), app.license === 'TODO' ? null : app.license],
      [t('detailPlatforms', lang), labelList('platforms', app.platforms, lang)],
      [t('detailWorksWith', lang), joinOrUnknown(app.worksWith)],
      [t('detailAdded', lang), app.addedDate ? formatDisplayDate(app.addedDate, lang) : null],
      [t('detailLastVerified', lang), app.lastVerifiedDate ? formatDisplayDate(app.lastVerifiedDate, lang) : null],
    ]

    const lines = [
      app.name,
      app.tagline[lang] ?? app.tagline.en ?? '',
      ...getDownloadLinks(app, lang).map((link) => link.href),
      '',
      ...rows
        .filter(([, value]) => value != null && value !== '')
        .map(([label, value]) => `${label}: ${value}`),
    ]

    if (app.founder) {
      lines.push('', `${t('fromTheMaker', lang)}:`, app.founder.why, `${t('bestFor', lang)} ${app.founder.best}`, `${t('limits', lang)} ${app.founder.limits}`)
    }

    if (app.pqReview) {
      lines.push('', `${t('pqReviewHeading', lang)}:`, app.pqReview.text[lang] ?? app.pqReview.text.en ?? '')
    }

    const text = lines.filter((l) => l != null).join('\n')

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API can throw in insecure contexts or without permission — silently no-op.
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={(next) => { if (!next) onClose() }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
        <Dialog.Content
          className="fixed right-0 top-0 z-50 h-full w-full sm:max-w-lg bg-white shadow-xl overflow-y-auto focus:outline-none
            data-[state=open]:animate-in data-[state=open]:slide-in-from-right
            data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right"
        >
          {app && (
            <div className="p-6">
              <div className="flex items-start justify-between gap-3 mb-1">
                <Dialog.Title className="text-xl font-bold text-text-primary">{app.name}</Dialog.Title>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label={t('copyEntryAriaLabel', lang)}
                    className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-xs font-medium text-text-secondary hover:bg-gray-100"
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-600">{t('copied', lang)}</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon className="h-3.5 w-3.5" />
                        <span>{t('copyLabel', lang)}</span>
                      </>
                    )}
                  </button>
                  <Dialog.Close asChild>
                    <button type="button" aria-label={t('closeAriaLabel', lang)} className="rounded-full p-1.5 text-text-secondary hover:bg-gray-100">
                      <CloseIcon className="h-4 w-4" />
                    </button>
                  </Dialog.Close>
                </div>
              </div>

              <Dialog.Description className="text-sm text-text-secondary mb-4">
                {app.tagline[lang] ?? app.tagline.en ?? ''}
              </Dialog.Description>

              {isFounderStarActive(app.founderReviewedDate) && (
                <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 mb-5">
                  <StarIcon className="h-4 w-4 mt-0.5 shrink-0 text-amber-500" />
                  <p className="text-xs text-amber-900">
                    <span className="font-bold uppercase tracking-wide">{t('founderReviewedBannerLabel', lang)}</span>{' '}
                    {t('founderReviewedBannerBodyTemplate', lang, { name: app.name })}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-2 mb-5">
                {app.status !== 'listed' && (
                  <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200">
                    {STATUS_LABEL[app.status]}
                  </span>
                )}
                {app.stars != null && (
                  <span className="inline-flex items-center gap-1 text-xs text-text-secondary">
                    <StarIcon className="h-3.5 w-3.5 text-amber-400" />
                    {app.stars.toLocaleString()}
                  </span>
                )}
                {getDownloadLinks(app, lang).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Full details */}
              <section className="border border-primary/10 rounded-xl p-4 mb-5">
                <dl className="space-y-2">
                  <DetailRow label={t('detailCategory', lang)} value={app.categories.map((c) => CATEGORY_SUB_LABEL[c][lang]).join(', ')} />
                  <DetailRow label={t('detailInterface', lang)} value={app.interfaces.map((i) => INTERFACE_LABEL[i][lang]).join(', ')} />
                  <DetailRow label={t('detailRuns', lang)} value={labelFor('locality', app.locality, lang)} />
                  <DetailRow label={t('detailEngine', lang)} value={labelFor('engine', app.engine, lang)} />
                  <DetailRow label={t('detailPrice', lang)} value={labelFor('price', app.price, lang)} />
                  <DetailRow label={t('detailLicense', lang)} value={app.license === 'TODO' ? null : app.license} />
                  <DetailRow label={t('detailPlatforms', lang)} value={labelList('platforms', app.platforms, lang)} />
                  <DetailRow label={t('detailWorksWith', lang)} value={joinOrUnknown(app.worksWith)} />
                  <DetailRow
                    label={t('detailHardware', lang)}
                    value={computeHardwareDisplay(app.hardware, machine, lang, app.engine).known ? <HardwareBlock hardware={app.hardware} machine={machine} engine={app.engine} lang={lang} compact /> : null}
                  />
                  <DetailRow label={t('detailAdded', lang)} value={app.addedDate ? formatDisplayDate(app.addedDate, lang) : null} />
                  <DetailRow label={t('detailLastVerified', lang)} value={app.lastVerifiedDate ? formatDisplayDate(app.lastVerifiedDate, lang) : null} />
                </dl>
              </section>

              {/* From the Maker */}
              <section className="mb-5">
                <h3 className="text-sm font-bold text-text-primary mb-2">{t('fromTheMaker', lang)}</h3>
                {app.founder?.fullQuote ? (
                  // A verbatim quote exists — show his own words only, not a
                  // PromptQuorum paraphrase mixed in underneath.
                  <FounderFullQuote paragraphs={app.founder.fullQuote} source={app.founder.who[lang] ?? app.founder.who.en} />
                ) : app.founder ? (
                  <div className="text-sm text-text-secondary space-y-1.5">
                    <p>{app.founder.why}</p>
                    <p><span className="font-semibold text-text-primary">{t('bestFor', lang)}</span> {app.founder.best}</p>
                    <p><span className="font-semibold text-text-primary">{t('limits', lang)}</span> {app.founder.limits}</p>
                  </div>
                ) : (
                  <FounderClaimBox key={app.slug} appName={app.name} lang={lang} />
                )}
              </section>

              {/* PromptQuorum review */}
              {app.pqReview && (
                <section className="mb-5">
                  <h3 className="text-sm font-bold text-text-primary mb-2">{t('pqReviewHeading', lang)}</h3>
                  <div className="text-sm text-text-secondary space-y-1.5">
                    <p>{app.pqReview.text[lang] ?? app.pqReview.text.en ?? ''}</p>
                    <p className="text-xs text-text-secondary/80">{t('testedOnTemplate', lang, { date: formatDisplayDate(app.pqReview.date, lang), hw: app.pqReview.hw })}</p>
                  </div>
                </section>
              )}

              {/* Dedicated feature review — authoritative reviewSlug-derived
                  link, visually distinct from the "N articles mention this"
                  list rendered by ArticlesBlock below. */}
              {featureReview && (
                <section className="mb-5">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary mb-2">
                    {t('featureArticleBadge', lang)}
                  </span>
                  <Link
                    href={featureReview}
                    className="block text-sm font-bold underline underline-offset-2 text-primary hover:text-primary/80"
                  >
                    {t('readReview', lang)}
                  </Link>
                </section>
              )}

              {/* PromptQuorum articles */}
              <section className="mb-5">
                <h3 className="text-sm font-bold text-text-primary mb-2">{t('pqArticlesHeading', lang)}</h3>
                <ArticlesBlock toolName={app.name} lang={lang} />
              </section>

              {/* Alternatives */}
              {alternatives.length > 0 && (
                <section className="mb-5">
                  <h3 className="text-sm font-bold text-text-primary mb-2">{t('alternativesHeading', lang)}</h3>
                  <div className="flex flex-wrap gap-2">
                    {alternatives.map((alt) => (
                      <button
                        key={alt.slug}
                        type="button"
                        onClick={() => onOpenSlug(alt.slug)}
                        className="rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-medium text-text-primary hover:border-primary/50 hover:bg-primary/5"
                      >
                        {alt.name}
                      </button>
                    ))}
                  </div>
                </section>
              )}

              <DataDisclaimer lang={lang} />
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
