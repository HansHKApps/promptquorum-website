'use client'

// PromptQuorum Academy — anonymous star rating (1-5), lesson or programme, counted separately. Same pattern as the
// Ask Hans rating: one click counts once (a plain total in Redis, no text, no identifier). For 1-3 stars a small
// panel offers an email to the site owner with the details prefilled; nothing is stored on a server. A rating never
// blocks anything. The mail carries rating, language and page only (no programme content).

import { useState } from 'react'
import { ACADEMY_CONTACT_EMAIL } from '@/lib/academy/config'
import type { AcademyCopy } from './copy'

function Star({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="m12 2.8 2.75 5.57 6.15.9-4.45 4.34 1.05 6.13L12 16.85 6.5 19.74l1.05-6.13L3.1 9.27l6.15-.9L12 2.8Z" />
    </svg>
  )
}

function fireEvent(body: unknown) {
  void fetch('/api/academy/event', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).catch(() => {})
}

export function StarRating({ tx, kind, lang }: { tx: AcademyCopy; kind: 'lesson' | 'programme'; lang: string }) {
  const [stars, setStars] = useState(0)
  const [hover, setHover] = useState(0)
  const [phase, setPhase] = useState<'idle' | 'thanks' | 'low'>('idle')
  const r = tx.rate

  const pick = (n: number) => {
    if (phase !== 'idle') return
    setStars(n)
    fireEvent({ type: 'rating', kind, stars: n })
    setPhase(n <= 3 ? 'low' : 'thanks')
  }
  const writeMail = () => {
    fireEvent({ type: 'rating_mail' })
    const body = `${r.mailIntro}\n\n\n---\n${r.mailRating}: ${stars}/5\n${tx.feedbackMailLanguage}: ${lang}\n${window.location.pathname}`
    window.location.href = `mailto:${ACADEMY_CONTACT_EMAIL}?subject=${encodeURIComponent(r.mailSubject(stars))}&body=${encodeURIComponent(body)}`
    setPhase('thanks')
  }
  const shown = hover || stars

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-900" id={`academy-rate-${kind}`}>
        {kind === 'lesson' ? r.lesson : r.programme}
      </p>
      <div role="group" aria-labelledby={`academy-rate-${kind}`} className="flex items-center gap-1 text-amber-500" onMouseLeave={() => setHover(0)}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            disabled={phase !== 'idle'}
            aria-label={r.stars(n)}
            aria-pressed={stars === n}
            onClick={() => pick(n)}
            onMouseEnter={() => phase === 'idle' && setHover(n)}
            onFocus={() => phase === 'idle' && setHover(n)}
            onBlur={() => setHover(0)}
            className="rounded p-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600 disabled:cursor-default"
          >
            <Star filled={n <= shown} />
          </button>
        ))}
        {phase === 'thanks' && <span className="ms-2 text-sm text-green-800">{r.thanks}</span>}
      </div>
      {phase === 'low' && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-950" role="status">
          <p className="font-medium">{r.lowTitle}</p>
          <p className="mt-1">{r.lowBody}</p>
          <p className="mt-1 text-xs">{tx.feedbackNote}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" onClick={writeMail} className="rounded-lg bg-purple-600 px-3 py-1.5 font-medium text-white hover:bg-purple-700">
              {r.lowWrite}
            </button>
            <button type="button" onClick={() => setPhase('thanks')} className="rounded-lg border border-amber-300 bg-white px-3 py-1.5 hover:bg-amber-100">
              {r.lowClose}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
