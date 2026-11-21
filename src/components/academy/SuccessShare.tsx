'use client'

// PromptQuorum Academy — share actions for a good result: WhatsApp / Telegram with a challenge link, the square result
// card as an image, and a "challenge a friend" link. Used right after a passed quiz or test (the moment people are
// proudest) and in the results view. Everything runs in the learner's browser; the only thing counted is an
// anonymous total per button (Umami + Redis, see /api/academy/event).

import { useRef, useState } from 'react'
import { challengeLink } from '@/lib/academy/challenge'
import { shareHref, SITE_URL, type ShareChannel } from '@/components/askhans/share'
import { downloadBlob } from '@/components/askhans/power/export/download'
import type { AcademyLang } from '@/lib/academy/types'
import { ACADEMY_COPY } from './copy'
import { SHARE_COPY } from './copy/share'
import { renderShareCard } from './share-card'
import { fileStem } from './share-plan'

const BTN = 'inline-flex items-center gap-2 rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm font-medium text-purple-900 hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600 disabled:opacity-50'

export type GrowthKind = 'share_card' | 'challenge_shared' | 'challenge_landed' | 'linkedin' | 'reminder' | 'next_topic'

/** Anonymous counter (Redis total + Umami event). Never blocks the action it belongs to. */
export function trackGrowth(kind: GrowthKind): void {
  void fetch('/api/academy/event', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'growth', kind }) }).catch(() => {})
  try {
    window.umami?.track(`academy_${kind}`, { source_page: window.location.pathname })
  } catch {
    /* tracking never blocks sharing */
  }
}

const base = (lang: AcademyLang) => `${SITE_URL}${lang === 'en' ? '' : `/${lang}`}/academy`

export function SuccessShare({ lang, subject, percent, minutes, heading = true, channels: showChannels = true }: { lang: AcademyLang; subject: string; percent: number; minutes: number; heading?: boolean; channels?: boolean }) {
  const sx = SHARE_COPY[lang]
  const tx = ACADEMY_COPY[lang]
  const [busy, setBusy] = useState(false)
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pct = Math.round(percent)
  const link = challengeLink(base(lang), subject, pct)
  const message = `${sx.challengeText(subject, pct)} ${link}`
  const channels: { key: ShareChannel; label: string; bg: string }[] = [
    { key: 'whatsapp', label: 'WhatsApp', bg: '#128c7e' },
    { key: 'telegram', label: 'Telegram', bg: '#1e96c8' },
  ]

  const card = async () => {
    if (busy) return
    setBusy(true)
    try {
      const blob = await renderShareCard({ subject, percent: pct, minutes }, tx, lang)
      const file = new File([blob], `${fileStem(subject)}.png`, { type: 'image/png' })
      const data = { files: [file], text: message, title: subject }
      let shared = false
      if (typeof navigator.canShare === 'function' && navigator.canShare(data)) {
        try {
          await navigator.share(data)
          shared = true
        } catch (err) {
          shared = err instanceof DOMException && err.name === 'AbortError'
        }
      }
      if (!shared) downloadBlob(blob, `${fileStem(subject)}.png`)
      trackGrowth('share_card')
    } catch (err) {
      console.error('[academy] result card failed', err instanceof Error ? err.message : err)
    } finally {
      setBusy(false)
    }
  }
  const challenge = async () => {
    trackGrowth('challenge_shared')
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ text: sx.challengeText(subject, pct), url: link })
        return
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return
      }
    }
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked: the WhatsApp / Telegram links still work */
    }
  }

  return (
    <div className="relative space-y-2 rounded-xl border border-purple-100 bg-white/80 p-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {heading && <p className="font-medium text-gray-900">{sx.successShare}</p>}
      <div className="flex flex-wrap gap-2">
        {(showChannels ? channels : []).map((c) => (
          <a key={c.key} href={shareHref(c.key, message, subject)} target="_blank" rel="noopener noreferrer" onClick={() => trackGrowth('challenge_shared')} className={BTN}>
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ background: c.bg }} />
            {c.label}
          </a>
        ))}
        <button type="button" disabled={busy} onClick={() => void card()} className={BTN}>
          {sx.shareCard}
        </button>
        <button type="button" onClick={() => void challenge()} className={BTN}>
          {copied ? sx.copied : sx.challenge}
        </button>
      </div>
    </div>
  )
}
