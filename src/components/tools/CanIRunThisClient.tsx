'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import type { Language } from '@/lib/blog/blogContent'
import { getLangDir } from '@/lib/i18n/constants'
import { t } from './tools-i18n'

export interface AppPickerEntry {
  slug: string
  name: string
  tagline: string
}

interface Verdict {
  slug: string
  name: string
  tagline: string
  price: string
  license: string
  hardware: { ramGb: number | null; vramGb: number | null; cpuOnly: boolean | null; variesByModel?: boolean } | null
  hardwareFit: 'fits' | 'too-demanding' | 'unknown'
  article: { title: string; url: string } | null
  directoryUrl: string
}

function localizedPath(lang: Language, path: string): string {
  return lang === 'en' ? path : `/${lang}${path}`
}

export function CanIRunThisClient({ lang, appIndex }: { lang: Language; appIndex: AppPickerEntry[] }) {
  const dir = getLangDir(lang)
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [matches, setMatches] = useState<AppPickerEntry[]>([])
  const [selected, setSelected] = useState<AppPickerEntry | null>(null)
  const [ramGb, setRamGb] = useState('')
  const [vramGb, setVramGb] = useState('')
  const [verdict, setVerdict] = useState<Verdict | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fuseRef = useRef<import('fuse.js').default<AppPickerEntry> | null>(null)

  useEffect(() => {
    let cancelled = false
    import('fuse.js').then(({ default: Fuse }) => {
      if (cancelled) return
      fuseRef.current = new Fuse(appIndex, {
        keys: [{ name: 'name', weight: 3 }, { name: 'tagline', weight: 1 }],
        threshold: 0.35,
        ignoreLocation: true,
        minMatchCharLength: 2,
      })
    })
    return () => {
      cancelled = true
    }
  }, [appIndex])

  function handleQueryChange(value: string) {
    setQuery(value)
    setSelected(null)
    setVerdict(null)
    if (!value.trim()) {
      setMatches([])
      setOpen(false)
      return
    }
    const results = fuseRef.current ? fuseRef.current.search(value).slice(0, 8).map((r) => r.item) : []
    setMatches(results)
    setOpen(true)
  }

  function pickApp(app: AppPickerEntry) {
    setSelected(app)
    setQuery(app.name)
    setOpen(false)
    setVerdict(null)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!selected) return
    setLoading(true)
    setError(null)
    setVerdict(null)
    try {
      const params = new URLSearchParams({ slug: selected.slug })
      if (ramGb) params.set('ramGb', ramGb)
      if (vramGb) params.set('vramGb', vramGb)
      const res = await fetch(`/api/tools/can-i-run-this?${params.toString()}`)
      if (!res.ok) throw new Error('lookup failed')
      const data = await res.json()
      setVerdict(data.result)
    } catch {
      setError('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div dir={dir}>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
        <div className="sm:col-span-2 relative">
          <label className="block text-sm font-medium text-text-secondary mb-1">{t('appPickerLabel', lang)}</label>
          <input
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            onFocus={() => matches.length > 0 && setOpen(true)}
            placeholder={t('appPickerPlaceholder', lang)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-text-primary"
            autoComplete="off"
          />
          {open && matches.length > 0 && (
            <ul className="absolute z-10 mt-1 w-full max-h-64 overflow-y-auto rounded-lg border border-border bg-surface shadow-lg">
              {matches.map((m) => (
                <li key={m.slug}>
                  <button
                    type="button"
                    onClick={() => pickApp(m)}
                    className="w-full text-left px-3 py-2 hover:bg-primary/10"
                  >
                    <span className="font-medium text-text-primary">{m.name}</span>
                    {m.tagline && <span className="block text-xs text-text-secondary">{m.tagline}</span>}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">{t('formRamLabel', lang)}</label>
          <input
            type="number"
            min={1}
            value={ramGb}
            onChange={(e) => setRamGb(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-text-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">{t('formVramLabel', lang)}</label>
          <input
            type="number"
            min={1}
            value={vramGb}
            onChange={(e) => setVramGb(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-text-primary"
          />
        </div>
        <div className="sm:col-span-4">
          <button
            type="submit"
            disabled={!selected || loading}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {t('formCheck', lang)}
          </button>
        </div>
      </form>

      {error && <p className="mt-6 text-sm text-rose-600">{error}</p>}

      {verdict && (
        <div className="mt-6 p-5 rounded-xl border border-border bg-surface">
          <h3 className="text-lg font-semibold text-text-primary">{verdict.name}</h3>
          {verdict.tagline && <p className="text-sm text-text-secondary mb-3">{verdict.tagline}</p>}

          {verdict.hardware?.variesByModel ? (
            <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-900 dark:bg-amber-950/40">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">?</span>
              <p className="text-sm font-medium text-amber-800 dark:text-amber-300">{t('variesByModelNote', lang)}</p>
            </div>
          ) : verdict.hardwareFit === 'fits' ? (
            <div className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 dark:border-emerald-900 dark:bg-emerald-950/40">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">✓</span>
              <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">{t('verdictFits', lang)}</p>
            </div>
          ) : verdict.hardwareFit === 'too-demanding' ? (
            <div className="flex items-start gap-3 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 dark:border-rose-900 dark:bg-rose-950/40">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-600 text-xs font-bold text-white">✕</span>
              <p className="text-sm font-medium text-rose-800 dark:text-rose-300">{t('verdictTooDemanding', lang)}</p>
            </div>
          ) : (
            <div className="flex items-start gap-3 rounded-lg border border-border bg-surface-highlight px-4 py-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-text-secondary text-xs font-bold text-white">?</span>
              <p className="text-sm text-text-secondary">{t('verdictUnknown', lang)}</p>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {verdict.article ? (
              <a href={verdict.article.url} className="text-primary hover:text-primary/80 font-medium">
                {t('readFullReview', lang)} →
              </a>
            ) : (
              <a href={verdict.directoryUrl} className="text-primary hover:text-primary/80 font-medium">
                {t('browseDirectory', lang)} →
              </a>
            )}
          </div>
        </div>
      )}

      <p className="mt-8 text-xs text-text-secondary">{t('disclaimerText', lang)}</p>
      <p className="mt-2 text-xs text-text-secondary">
        <Link href={localizedPath(lang, '/directory')} className="underline hover:no-underline">
          {t('browseDirectory', lang)}
        </Link>
      </p>
    </div>
  )
}
