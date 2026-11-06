'use client'

// Star rating (1–5). Anonymous and automatic: one click on a star, and if nothing else is clicked for
// AUTO_SEND_MS the rating (plus the page language) goes to /api/ask/feedback (aggregate counter + owner
// notification). No second "send" button. For 1–3 stars a pop-up asks what could be better and offers
// an email to the site owner, prefilled with the details (rating, language, page, last question/answer),
// which are also copied to the clipboard. Shown once per conversation after the first answer; the parent
// re-mounts it per conversation (key).

import { useCallback, useEffect, useRef, useState } from 'react'
import { useAskCopy, useAskLang, ASK_HANS_CONTACT_EMAIL } from './copy'

type Phase = 'idle' | 'sending' | 'sent' | 'error'

const AUTO_SEND_MS = 1000
const Q_MAX = 500
const A_MAX = 1200

function Star({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="m12 2.8 2.75 5.57 6.15.9-4.45 4.34 1.05 6.13L12 16.85 6.5 19.74l1.05-6.13L3.1 9.27l6.15-.9L12 2.8Z" />
    </svg>
  )
}

const clip = (s: string, n: number) => (s.length > n ? `${s.slice(0, n)}…` : s)

export function FeedbackBar({ lastQuestion, lastAnswer }: { lastQuestion?: string; lastAnswer?: string }) {
  const tx = useAskCopy()
  const lang = useAskLang()
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [phase, setPhase] = useState<Phase>('idle')
  const [dialog, setDialog] = useState(false)
  const [copiedOk, setCopiedOk] = useState(false)
  const [includeChat, setIncludeChat] = useState(true)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clear = () => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = null
  }
  useEffect(() => clear, [])

  const submit = useCallback(
    async (n: number) => {
      setPhase('sending')
      try {
        const res = await fetch('/api/ask/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ rating: n, lang }),
        })
        setPhase(res.ok ? 'sent' : 'error')
        if (res.ok && n <= 3) setDialog(true)
      } catch {
        setPhase('error')
      }
    },
    [lang],
  )

  const pick = (n: number) => {
    if (phase === 'sending' || phase === 'sent') return
    setRating(n)
    setPhase('idle')
    clear()
    timer.current = setTimeout(() => void submit(n), AUTO_SEND_MS)
  }

  const mailDetails = () => {
    const m = tx.feedback.followup.mail
    const page = typeof window !== 'undefined' ? window.location.href : ''
    const lines = [
      `${m.rating}: ${rating}/5`,
      `${m.language}: ${lang}`,
      `${m.page}: ${page}`,
    ]
    if (includeChat && lastQuestion) lines.push(`${m.question}: ${clip(lastQuestion, Q_MAX)}`)
    if (includeChat && lastAnswer) lines.push(`${m.answer}: ${clip(lastAnswer, A_MAX)}`)
    return { subject: m.subject.replace('{n}', String(rating)), intro: m.intro, details: lines.join('\n') }
  }

  const writeMail = async () => {
    const { subject, intro, details } = mailDetails()
    const body = `${intro}\n\n\n\n---\n${details}`
    try {
      await navigator.clipboard.writeText(details)
      setCopiedOk(true)
    } catch {
      // clipboard can be unavailable (insecure context / no permission): the email still has the details
    }
    window.location.href = `mailto:${ASK_HANS_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  useEffect(() => {
    if (!dialog) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setDialog(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [dialog])

  const f = tx.feedback

  const dialogEl = dialog && (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/40 p-4" onClick={() => setDialog(false)}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="askhans-followup-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-xl border border-border bg-white p-4 shadow-2xl"
      >
        <h2 id="askhans-followup-title" className="text-[15px] font-bold text-foreground">{f.followup.title}</h2>
        <p className="mt-2 text-[13px] leading-snug text-foreground">{f.followup.body}</p>
        {(lastQuestion || lastAnswer) && (
          <label className="mt-3 flex cursor-pointer items-start gap-2 text-[12px] leading-snug text-foreground">
            <input type="checkbox" checked={includeChat} onChange={(e) => setIncludeChat(e.target.checked)} className="mt-0.5 h-4 w-4 flex-shrink-0 accent-primary" />
            <span>{f.followup.include}</span>
          </label>
        )}
        <p className="mt-2 text-[11px] leading-snug text-muted-foreground">{f.followup.note}</p>
        {copiedOk && <p role="status" className="mt-2 text-[11px] font-medium text-foreground">{f.followup.copied}</p>}
        <div className="mt-4 flex justify-end gap-2">
          <button type="button" onClick={() => setDialog(false)} className="rounded-lg px-3 py-2 text-[13px] font-medium text-foreground hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
            {f.followup.skip}
          </button>
          <button type="button" autoFocus onClick={writeMail} className="rounded-lg bg-primary px-3 py-2 text-[13px] font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            {f.followup.write}
          </button>
        </div>
      </div>
    </div>
  )

  if (phase === 'sent') {
    return (
      <>
        <p role="status" className="flex-shrink-0 border-t border-border bg-white px-3 py-2 text-center text-[12px] font-medium text-foreground">
          {f.thanks}
        </p>
        {dialogEl}
      </>
    )
  }

  const shown = hover || rating
  return (
    <div className="flex-shrink-0 border-t border-border bg-white px-3 py-2">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span id="askhans-feedback-prompt" className="text-[12px] font-medium text-foreground">{f.prompt}</span>
        <div role="radiogroup" aria-labelledby="askhans-feedback-prompt" className="flex items-center" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              aria-label={f.star(n)}
              title={f.star(n)}
              disabled={phase === 'sending'}
              onMouseEnter={() => setHover(n)}
              onClick={() => pick(n)}
              className={`rounded p-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${n <= shown ? 'text-amber-500' : 'text-muted-foreground'}`}
            >
              <Star filled={n <= shown} />
            </button>
          ))}
        </div>
      </div>
      {phase === 'error' && (
        <p role="alert" className="mt-1 text-center text-[11px] font-medium text-destructive">{f.error}</p>
      )}
    </div>
  )
}
