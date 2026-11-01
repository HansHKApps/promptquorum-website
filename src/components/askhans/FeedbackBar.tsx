'use client'

// Star rating (1–5) with an optional comment. Anonymous: only the rating, the page language and the
// optional comment go to /api/ask/feedback (a notification mail to the site owner plus an aggregate counter).
// Shown once per conversation after the first answer; the parent re-mounts it per conversation (key).

import { useState } from 'react'
import { useAskCopy, useAskLang } from './copy'

type Phase = 'idle' | 'sending' | 'sent' | 'error'

const COMMENT_MAX = 500

function Star({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="m12 2.8 2.75 5.57 6.15.9-4.45 4.34 1.05 6.13L12 16.85 6.5 19.74l1.05-6.13L3.1 9.27l6.15-.9L12 2.8Z" />
    </svg>
  )
}

export function FeedbackBar() {
  const tx = useAskCopy()
  const lang = useAskLang()
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [comment, setComment] = useState('')
  const [phase, setPhase] = useState<Phase>('idle')

  const submit = async () => {
    if (!rating || phase === 'sending') return
    setPhase('sending')
    try {
      const res = await fetch('/api/ask/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, comment: comment.trim() || undefined, lang }),
      })
      setPhase(res.ok ? 'sent' : 'error')
    } catch {
      setPhase('error')
    }
  }

  if (phase === 'sent') {
    return (
      <p role="status" className="flex-shrink-0 border-t border-border bg-white px-3 py-2 text-center text-[12px] font-medium text-foreground">
        {tx.feedback.thanks}
      </p>
    )
  }

  const shown = hover || rating
  return (
    <div className="flex-shrink-0 border-t border-border bg-white px-3 py-2">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span id="askhans-feedback-prompt" className="text-[12px] font-medium text-foreground">{tx.feedback.prompt}</span>
        <div role="radiogroup" aria-labelledby="askhans-feedback-prompt" className="flex items-center" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              aria-label={tx.feedback.star(n)}
              title={tx.feedback.star(n)}
              onMouseEnter={() => setHover(n)}
              onClick={() => setRating(n)}
              className={`rounded p-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${n <= shown ? 'text-amber-500' : 'text-muted-foreground'}`}
            >
              <Star filled={n <= shown} />
            </button>
          ))}
        </div>
      </div>
      {rating > 0 && (
        <div className="mt-2 flex items-end gap-2">
          <textarea
            value={comment}
            rows={1}
            maxLength={COMMENT_MAX}
            placeholder={tx.feedback.commentPlaceholder}
            aria-label={tx.feedback.commentPlaceholder}
            onChange={(e) => setComment(e.target.value)}
            className="max-h-20 min-h-[36px] flex-1 resize-none rounded-lg border border-input bg-white px-2.5 py-1.5 text-[12px] outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <button
            type="button"
            onClick={submit}
            disabled={phase === 'sending'}
            className="flex-shrink-0 rounded-lg bg-primary px-3 py-2 text-[12px] font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50"
          >
            {tx.feedback.send}
          </button>
        </div>
      )}
      {phase === 'error' && (
        <p role="alert" className="mt-1 text-center text-[11px] font-medium text-destructive">{tx.feedback.error}</p>
      )}
    </div>
  )
}
