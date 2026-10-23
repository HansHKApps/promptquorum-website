'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState, type FormEvent } from 'react'
import type { Language } from '@/lib/blog/blogContent'
import type { ToolRecord } from '@/lib/power-local-llm/apps/types'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { matchCloudApp, SUPPORTED_APPS, type MatchResult } from '@/lib/power-local-llm/alternatives/match'
import type { CloudAppCategory, LocalMatch, MatchTier } from '@/lib/power-local-llm/alternatives/types'
import { t, type DirUi } from './directory-ui-client'
import { featureReviewUrl } from './reviewLinks'

interface Props {
  apps: ToolRecord[]
  lang: Language
  ui: DirUi
  /** Opens the existing ToolDrawer for a slug (pass setOpenSlug). */
  onOpenTool: (slug: string) => void
  /** Applies the existing want-filter for a category ('image' or 'audio'). */
  onBrowseApps: (want: 'image' | 'audio') => void
}

const STORAGE_KEY = 'pq_alt_lookup_open'
const WANT_FOR: Record<CloudAppCategory, 'image' | 'audio'> = { image: 'image', voice: 'audio' }

const TIER_ORDER: readonly MatchTier[] = ['closest', 'similar', 'partial']
const COLLAPSED_COUNT = 8

const TIER_RANK: Record<MatchTier, number> = { closest: 0, similar: 1, partial: 2 }

/** Matches ordered closest → similar → partial, keeping the data's own order within a tier. */
function rankedMatches(matches: readonly LocalMatch[]): LocalMatch[] {
  return matches
    .map((m, i) => ({ m, i }))
    .sort((a, b) => TIER_RANK[a.m.tier] - TIER_RANK[b.m.tier] || a.i - b.i)
    .map(({ m }) => m)
}

function hardwareText(tool: ToolRecord, variesLabel: string): string | null {
  const h = tool.hardware
  if (!h) return null
  if (h.variesByModel) return variesLabel
  const parts: string[] = []
  if (h.ramGb != null) parts.push(`${h.ramGb} GB RAM`)
  if (h.vramGb != null) parts.push(`${h.vramGb} GB VRAM`)
  if (parts.length === 0 && h.cpuOnly === true) parts.push('CPU')
  return parts.length > 0 ? parts.join(' · ') : null
}

export function CloudAlternativeLookup({ apps, lang, ui, onOpenTool, onBrowseApps }: Props) {
  const [query, setQuery] = useState('')
  const [submitted, setSubmitted] = useState('')
  const [miss, setMiss] = useState(false)
  const [selectedId, setSelectedId] = useState<string>(SUPPORTED_APPS[0]?.id ?? '')
  const [expanded, setExpanded] = useState(false)
  const [open, setOpen] = useState(true)
  const bySlug = useMemo(() => new Map(apps.map((a) => [a.slug, a])), [apps])
  const selected = SUPPORTED_APPS.find((a) => a.id === selectedId) ?? SUPPORTED_APPS[0]

  // Per-viewer convenience only: remember a collapsed panel. Storage may be unavailable, so it never gates rendering.
  useEffect(() => {
    let collapsed = false
    try {
      collapsed = window.localStorage.getItem(STORAGE_KEY) === '0'
    } catch {
      /* storage blocked: keep the default (open) */
    }
    if (!collapsed) return
    const id = window.setTimeout(() => setOpen(false), 0)
    return () => window.clearTimeout(id)
  }, [])

  function toggleOpen() {
    const next = !open
    setOpen(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? '1' : '0')
    } catch {
      /* ignore */
    }
  }

  function selectApp(id: string) {
    setSelectedId(id)
    setExpanded(false)
    setMiss(false)
  }

  function clearMiss() {
    setMiss(false)
    setSubmitted('')
    setQuery('')
  }

  function run(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    setSubmitted(trimmed)
    const result: MatchResult = matchCloudApp(trimmed)
    if (result.kind === 'hit') {
      selectApp(result.app.id)
    } else if (result.kind === 'miss') {
      setMiss(true)
    }
    // Fire-and-forget anonymous log. The server re-runs the matcher; failures must never affect the UI.
    void fetch('/api/alternatives', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: trimmed }),
      keepalive: true,
    }).catch(() => undefined)
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    run(query)
  }

  const tierLabel: Record<MatchTier, string> = {
    closest: t('altTierClosest', ui),
    similar: t('altTierSimilar', ui),
    partial: t('altTierPartial', ui),
  }

  const ranked = selected ? rankedMatches(selected.localMatches).filter((m) => bySlug.has(m.slug)) : []
  const visible = expanded ? ranked : ranked.slice(0, COLLAPSED_COUNT)

  return (
    <section aria-labelledby="alt-lookup-title" className="mb-6">
      <div className="flex flex-wrap items-center gap-3">
        <h2 id="alt-lookup-title" className="text-lg font-bold text-slate-900">{t('altReplaceTitle', ui)}</h2>
        <span className="rounded-full border border-hub-amber-edge bg-hub-amber-tint px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-hub-amber-ink">
          {t('altBadge', ui)}
        </span>
        <button
          type="button"
          onClick={toggleOpen}
          aria-expanded={open}
          aria-controls="alt-lookup-body"
          className="ms-auto rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:border-hub-violet hover:text-hub-violet-ink"
        >
          {open ? t('altHide', ui) : t('altShow', ui)}
        </button>
      </div>

      <div id="alt-lookup-body" hidden={!open} className="mt-3">
        <p role="note" className="rounded-lg border border-hub-amber-edge bg-hub-amber-tint px-3 py-2 text-sm text-hub-amber-ink">
          {t('altScopeNotice', ui, { count: SUPPORTED_APPS.length })}
        </p>

        <form onSubmit={onSubmit} className="mt-3 flex flex-col gap-2 sm:flex-row">
          <label htmlFor="alt-lookup-input" className="sr-only">{t('altInputLabel', ui)}</label>
          <input
            id="alt-lookup-input"
            type="text"
            value={query}
            maxLength={80}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('altPlaceholder', ui)}
            className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-hub-violet focus:outline-none focus:ring-2 focus:ring-hub-violet-edge"
          />
          <button type="submit" className="rounded-lg bg-hub-violet-ink px-4 py-2 text-sm font-semibold text-white hover:bg-hub-violet-ink">
            {t('altButton', ui)}
          </button>
        </form>

        <div aria-live="polite">
          {miss && (
            <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <p className="font-semibold">{t('altMissTitle', ui, { query: submitted })}</p>
                <button
                  type="button"
                  onClick={clearMiss}
                  aria-label={t('altClearResults', ui)}
                  className="ms-auto rounded-lg border border-slate-300 bg-white px-2 py-0.5 text-xs font-semibold text-slate-700 hover:border-hub-violet hover:text-hub-violet-ink"
                >
                  ×
                </button>
              </div>
              <p className="mt-1">{t('altMissBody', ui)}</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                <button type="button" onClick={() => onBrowseApps('image')} className="font-semibold text-hub-violet-ink underline">
                  {t('altBrowseImage', ui)}
                </button>
                <button type="button" onClick={() => onBrowseApps('audio')} className="font-semibold text-hub-violet-ink underline">
                  {t('altBrowseAudio', ui)}
                </button>
              </div>
            </div>
          )}
        </div>

        {selected && (
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white md:flex">
            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label={t('altReplaceTitle', ui)}
              className="flex gap-1 overflow-x-auto border-b border-slate-200 bg-slate-50 p-2 md:w-64 md:shrink-0 md:flex-col md:overflow-y-auto md:border-b-0 md:border-e md:max-h-[34rem]"
            >
              {SUPPORTED_APPS.map((app) => {
                const active = app.id === selected.id
                return (
                  <button
                    key={app.id}
                    type="button"
                    role="tab"
                    id={`alt-tab-${app.id}`}
                    aria-selected={active}
                    aria-controls="alt-panel"
                    onClick={() => selectApp(app.id)}
                    className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-2 text-start md:w-full ${
                      active ? 'bg-white shadow-sm ring-1 ring-slate-200' : 'hover:bg-white/70'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                        app.category === 'image' ? 'bg-hub-orchid-tint text-hub-orchid-ink' : 'bg-hub-rose-tint text-hub-rose-ink'
                      }`}
                    >
                      {app.name.charAt(0).toUpperCase()}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-slate-900">{app.name}</span>
                      <span className="block whitespace-nowrap text-xs text-slate-500">
                        {t('altCountAlternatives', ui, { count: app.localMatches.length })}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>

            <div role="tabpanel" id="alt-panel" aria-labelledby={`alt-tab-${selected.id}`} className="min-w-0 flex-1 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-slate-900">{t('altAppAlternatives', ui, { name: selected.name })}</h3>
              <p className="mt-1 text-sm text-slate-600">{selected.summary}</p>

              {ranked.length === 0 && (
                <p className="mt-4 text-sm font-medium text-slate-800">{t('altNoLocal', ui)}</p>
              )}

              {ranked.length > 0 && (
                <ol className="mt-4 grid grid-cols-1 gap-x-8 md:grid-cols-2">
                  {visible.map((m, idx) => {
                    const tool = bySlug.get(m.slug)
                    if (!tool) return null
                    const hw = hardwareText(tool, t('altHwVaries', ui))
                    const review = featureReviewUrl(tool.slug, lang)
                    return (
                      <li key={m.slug} className="flex gap-3 border-b border-slate-200 py-3">
                        <span
                          aria-hidden="true"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-hub-violet-tint text-sm font-bold text-hub-violet-ink"
                        >
                          {tool.name.charAt(0).toUpperCase()}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start gap-2">
                            <button
                              type="button"
                              onClick={() => onOpenTool(tool.slug)}
                              className="min-w-0 text-start text-sm font-semibold text-slate-900 hover:text-hub-violet-ink hover:underline"
                            >
                              {tool.name}
                            </button>
                            <span className="ms-auto shrink-0 text-xs text-slate-400">{idx + 1}</span>
                          </div>
                          <p className="mt-0.5 line-clamp-2 text-xs text-slate-600">{tool.tagline[lang] ?? tool.tagline.en}</p>
                          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500">
                            <span className="rounded-full border border-slate-200 px-1.5 py-0.5 font-semibold">{tierLabel[m.tier]}</span>
                            <span>{tool.license}{tool.price !== 'TODO' ? ` · ${tool.price}` : ''}</span>
                            {hw && <span>{t('altHw', ui)}: {hw}</span>}
                            {m.confidence === 'assumption' && (
                              <span className="rounded-full border border-slate-300 px-1.5 py-0.5 font-semibold uppercase">
                                {t('altAssumption', ui)}
                              </span>
                            )}
                            {review && (
                              <Link href={review} className="font-semibold text-hub-violet-ink hover:underline">
                                {t('readReview', ui)} →
                              </Link>
                            )}
                          </div>
                          <p className="mt-1 text-[11px] text-slate-500">{m.basis}</p>
                        </div>
                      </li>
                    )
                  })}
                </ol>
              )}

              {ranked.length > COLLAPSED_COUNT && (
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  aria-expanded={expanded}
                  className="mt-4 text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-hub-violet-ink"
                >
                  {expanded
                    ? t('altSeeFewer', ui)
                    : `${t('altSeeAll', ui, { count: ranked.length, name: selected.name })} →`}
                </button>
              )}

              {selected.gapNote && <p className="mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">{selected.gapNote}</p>}

              <p className="mt-4 text-xs text-slate-500">
                {t('altVerifiedOn', ui, { date: formatDisplayDate(selected.verifiedAt, lang) })} · {t('altSources', ui)}:{' '}
                {selected.sources.map((s, i) => (
                  <span key={s.url}>
                    {i > 0 && ', '}
                    {s.url.startsWith('/') ? (
                      <Link href={lang === 'en' ? s.url : `/${lang}${s.url}`} className="underline">{s.label}</Link>
                    ) : (
                      <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">{s.label}</a>
                    )}
                  </span>
                ))}
              </p>
              <p className="mt-1 text-xs text-slate-500">{t('altDisclaimer', ui)}</p>
              <button type="button" onClick={() => onBrowseApps(WANT_FOR[selected.category])} className="mt-3 text-sm font-semibold text-hub-violet-ink underline">
                {t(selected.category === 'image' ? 'altBrowseImage' : 'altBrowseAudio', ui)}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
