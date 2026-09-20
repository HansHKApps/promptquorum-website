'use client'

import { useState } from 'react'
import type { Language } from '@/lib/blog/blogContent'
import { t } from './home-i18n'

export function FeedbackBlock({ lang = 'en' }: { lang?: Language }) {
  const [text, setText] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!text.trim()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer: text.trim() }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('sent')
      setText('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="rounded-xl border border-border bg-card p-4 h-full flex flex-col">
      <h3 className="text-sm font-bold text-text-primary mb-2">{t('feedbackQuestion', lang)}</h3>
      {status === 'sent' ? (
        <p className="text-sm text-primary">{t('feedbackThanks', lang)}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t('feedbackPlaceholder', lang)}
            rows={2}
            maxLength={1000}
            className="w-full resize-none rounded-lg border border-border bg-surface p-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            type="submit"
            disabled={status === 'sending' || !text.trim()}
            className="self-start rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground disabled:opacity-50"
          >
            {status === 'sending' ? t('feedbackSending', lang) : t('feedbackSend', lang)}
          </button>
          {status === 'error' && <p className="text-xs text-tertiary">{t('feedbackError', lang)}</p>}
        </form>
      )}
      <a
        href="mailto:hello@promptquorum.com?subject=I%27m%20a%20founder"
        className="mt-3 text-xs text-text-muted hover:text-primary hover:underline self-start"
      >
        {t('feedbackFounderLink', lang)}
      </a>
    </div>
  )
}
