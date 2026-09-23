'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Language } from '@/lib/blog/blogContent'
import { getLangDir } from '@/lib/i18n/constants'
import { t } from './tools-i18n'

const OS_OPTIONS = [
  { key: '', label: '' },
  { key: 'mac', label: 'macOS' },
  { key: 'win', label: 'Windows' },
  { key: 'linux', label: 'Linux' },
  { key: 'ios', label: 'iOS' },
  { key: 'android', label: 'Android' },
  { key: 'web', label: 'Web' },
]

interface AppResult {
  slug: string
  name: string
  tagline: string
  price: string
  license: string
  platforms: string[] | null
  hardware: { ramGb: number | null; vramGb: number | null; cpuOnly: boolean | null; variesByModel?: boolean } | null
  hardwareFit: 'fits' | 'too-demanding' | 'unknown'
  article: { title: string; url: string } | null
  directoryUrl: string
}

function localizedPath(lang: Language, path: string): string {
  return lang === 'en' ? path : `/${lang}${path}`
}

export function WhatCanIRunClient({ lang }: { lang: Language }) {
  const dir = getLangDir(lang)
  const [os, setOs] = useState('')
  const [ramGb, setRamGb] = useState('')
  const [vramGb, setVramGb] = useState('')
  const [results, setResults] = useState<AppResult[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams()
      if (os) params.set('os', os)
      if (ramGb) params.set('ramGb', ramGb)
      if (vramGb) params.set('vramGb', vramGb)
      const res = await fetch(`/api/tools/what-can-i-run?${params.toString()}`)
      if (!res.ok) throw new Error('search failed')
      const data = await res.json()
      setResults(data.results)
    } catch {
      setError('error')
    } finally {
      setLoading(false)
    }
  }

  const hasFilters = Boolean(os || ramGb || vramGb)

  return (
    <div dir={dir}>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">{t('formOsLabel', lang)}</label>
          <select
            value={os}
            onChange={(e) => setOs(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-text-primary"
          >
            {OS_OPTIONS.map((o) => (
              <option key={o.key} value={o.key}>
                {o.key ? o.label : t('formOsAny', lang)}
              </option>
            ))}
          </select>
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
        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {t('formSubmit', lang)}
          </button>
        </div>
      </form>

      {error && <p className="mt-6 text-sm text-rose-600">{error}</p>}

      {results && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            {hasFilters ? t('resultsHeadingKnown', lang, { n: results.length }) : t('resultsHeadingUnfiltered', lang)}
          </h2>
          {results.length === 0 ? (
            <p className="text-sm text-text-secondary">{t('resultsEmpty', lang)}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.map((app) => (
                <div key={app.slug} className="p-4 rounded-xl border border-border bg-surface">
                  <h3 className="font-semibold text-text-primary">{app.name}</h3>
                  {app.tagline && <p className="text-sm text-text-secondary mt-1">{app.tagline}</p>}
                  <p className="text-xs text-text-secondary mt-2">
                    {app.price} · {app.license}
                    {app.platforms && app.platforms.length > 0 ? ` · ${app.platforms.join('/')}` : ''}
                  </p>
                  {app.hardwareFit === 'unknown' && !app.hardware?.variesByModel && (
                    <p className="text-xs text-text-secondary mt-1 italic">{t('hardwareUnresearched', lang)}</p>
                  )}
                  <div className="mt-3">
                    {app.article ? (
                      <a href={app.article.url} className="text-sm text-primary hover:text-primary/80 font-medium">
                        {t('readFullReview', lang)} →
                      </a>
                    ) : (
                      <a href={app.directoryUrl} className="text-sm text-primary hover:text-primary/80 font-medium">
                        {t('browseDirectory', lang)} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
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
