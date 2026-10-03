'use client'

import { useMemo, useState, type FormEvent } from 'react'
import type { Language } from '@/lib/blog/blogContent'
import type { ToolRecord } from '@/lib/power-local-llm/apps/types'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { matchCloudApp, SUPPORTED_APPS, type MatchResult } from '@/lib/power-local-llm/alternatives/match'
import type { LocalMatch, MatchTier } from '@/lib/power-local-llm/alternatives/types'
import { t, type DirUi } from './directory-ui-client'

interface Props {
  apps: ToolRecord[]
  lang: Language
  ui: DirUi
  /** Opens the existing ToolDrawer for a slug (pass setOpenSlug). */
  onOpenTool: (slug: string) => void
  /** Applies the existing "Generate images" want-filter. */
  onBrowseImageApps: () => void
}

const TIER_ORDER: readonly MatchTier[] = ['closest', 'similar', 'partial']

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

export function CloudAlternativeLookup({ apps, lang, ui, onOpenTool, onBrowseImageApps }: Props) {
  const [query, setQuery] = useState('')
  const [submitted, setSubmitted] = useState('')
  const [result, setResult] = useState<MatchResult | null>(null)
  const bySlug = useMemo(() => new Map(apps.map((a) => [a.slug, a])), [apps])

  function run(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    setSubmitted(trimmed)
    setResult(matchCloudApp(trimmed))
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

  return (
    <section aria-labelledby="alt-lookup-title" className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <h2 id="alt-lookup-title" className="text-base font-bold text-slate-900">{t('altTitle', ui)}</h2>
        <span className="rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-800">
          {t('altBadge', ui)}
        </span>
      </div>

      <p role="note" className="mt-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
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
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
        />
        <button type="submit" className="rounded-lg bg-violet-700 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-800">
          {t('altButton', ui)}
        </button>
      </form>

      <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-slate-600">
        <span>{t('altSupported', ui)}</span>
        {SUPPORTED_APPS.map((app) => (
          <button
            key={app.id}
            type="button"
            onClick={() => { setQuery(app.name); run(app.name) }}
            className="rounded-full border border-slate-200 px-2 py-0.5 hover:border-violet-400 hover:text-violet-700"
          >
            {app.name}
          </button>
        ))}
      </div>

      <div aria-live="polite" className="mt-4">
        {result?.kind === 'miss' && (
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="font-semibold">{t('altMissTitle', ui, { query: submitted })}</p>
            <p className="mt-1">{t('altMissBody', ui)}</p>
            <button type="button" onClick={onBrowseImageApps} className="mt-2 font-semibold text-violet-700 underline">
              {t('altBrowseImage', ui)}
            </button>
          </div>
        )}

        {result?.kind === 'hit' && (
          <div>
            <h3 className="text-sm font-bold text-slate-900">{t('altResultTitle', ui, { name: result.app.name })}</h3>
            <p className="mt-1 text-sm text-slate-600">{result.app.summary}</p>

            {result.app.localMatches.length === 0 && (
              <p className="mt-3 text-sm font-medium text-slate-800">{t('altNoLocal', ui)}</p>
            )}

            {TIER_ORDER.map((tier) => {
              const items: LocalMatch[] = result.app.localMatches.filter((m) => m.tier === tier)
              if (items.length === 0) return null
              return (
                <div key={tier} className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500">{tierLabel[tier]}</h4>
                  <ul className="mt-2 space-y-2">
                    {items.map((m) => {
                      const tool = bySlug.get(m.slug)
                      if (!tool) return null
                      const hw = hardwareText(tool, t('altHwVaries', ui))
                      return (
                        <li key={m.slug} className="rounded-lg border border-slate-200 p-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <button type="button" onClick={() => onOpenTool(tool.slug)} className="font-semibold text-violet-700 hover:underline">
                              {tool.name}
                            </button>
                            <span className="text-xs text-slate-500">{tool.license}{tool.price !== 'TODO' ? ` · ${tool.price}` : ''}</span>
                            {hw && <span className="text-xs text-slate-500">{t('altHw', ui)}: {hw}</span>}
                            {m.confidence === 'assumption' && (
                              <span className="rounded-full border border-slate-300 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-slate-500">
                                {t('altAssumption', ui)}
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-slate-700">{tool.tagline[lang] ?? tool.tagline.en}</p>
                          <p className="mt-1 text-xs text-slate-500">{m.basis}</p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}

            {result.app.gapNote && <p className="mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">{result.app.gapNote}</p>}

            <p className="mt-4 text-xs text-slate-500">
              {t('altVerifiedOn', ui, { date: formatDisplayDate(result.app.verifiedAt, lang) })} · {t('altSources', ui)}:{' '}
              {result.app.sources.map((s, i) => (
                <span key={s.url}>
                  {i > 0 && ', '}
                  <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">{s.label}</a>
                </span>
              ))}
            </p>
            <p className="mt-1 text-xs text-slate-500">{t('altDisclaimer', ui)}</p>
          </div>
        )}
      </div>
    </section>
  )
}
