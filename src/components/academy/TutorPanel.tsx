'use client'

// PromptQuorum Academy — AI tutor panel (SPEC 8). Opens only when the learner triggers it. Functions: free question,
// one-click rephrase (from the lesson sections), explain selected text, "Why?" after a quiz answer, follow-up chips.
// First open shows the AI label and "no personal data" notice before the input is enabled. Quiz lock: while a quiz
// question is unanswered everything is disabled (`locked`); the "why" payload only exists after the answer was revealed.
// Caps: 30 per programme, 8 per lesson, rephrase buttons count half. Output is rendered as sanitised markdown.

import { useCallback, useEffect, useRef, useState } from 'react'
import { Markdown } from '@/components/askhans/markdown'
import { cleanTutorText, tutorCost, TUTOR_CAP_LESSON, TUTOR_CAP_PROGRAMME, type TutorTrigger } from '@/lib/academy/tutor'
import type { Programme } from '@/lib/academy/types'
import { Content } from './Content'
import type { AcademyCopy } from './copy'
import type { useAcademyState } from './useAcademyState'

type Update = ReturnType<typeof useAcademyState>['update']

export interface TutorSeed {
  /** changes with every new request so the panel runs it exactly once */
  id: number
  trigger: TutorTrigger
  message?: string
  section?: { heading: string; body: string }
  selected?: string
  why?: { prompt: string; options: [string, string, string]; correctIndex: number; chosenIndex: number }
}

interface Turn {
  role: 'user' | 'assistant'
  content: string
  thumb?: 'up' | 'down'
}

function fireEvent(body: unknown) {
  void fetch('/api/academy/event', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).catch(() => {})
}

export function TutorPanel({
  tx,
  programme,
  update,
  lessonKey,
  lessonTitle,
  lessonText,
  chips,
  locked,
  seed,
  whyButton,
}: {
  tx: AcademyCopy
  programme: Programme
  update: Update
  /** lesson id, or "final" */
  lessonKey: string
  lessonTitle: string
  lessonText: string
  chips?: string[]
  /** quiz question not answered yet: panel input and buttons disabled */
  locked?: boolean
  seed?: TutorSeed | null
  /** quiz: the "Why?" payload of the question just answered (null = nothing to ask about) */
  whyButton?: TutorSeed['why'] | null
}) {
  const t = tx.tutor
  const [open, setOpen] = useState(false)
  const [accepted, setAccepted] = useState(false)
  const [turns, setTurns] = useState<Turn[]>([])
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [input, setInput] = useState('')
  const lastSeed = useRef<number>(0)
  const pending = useRef<TutorSeed | null>(null)
  const endRef = useRef<HTMLDivElement>(null)

  const used = programme.progress.tutor?.used ?? 0
  const usedHere = programme.progress.tutor?.perLesson?.[lessonKey] ?? 0

  const run = useCallback(
    async (s: Omit<TutorSeed, 'id'>) => {
      if (busy || locked) return
      const cost = tutorCost(s.trigger)
      if (used + cost > TUTOR_CAP_PROGRAMME) return setError(t.limitProgramme)
      if (usedHere + cost > TUTOR_CAP_LESSON) return setError(t.limitLesson)
      setError(null)
      setBusy(true)
      const shown = s.trigger === 'ask' || s.trigger === 'chip' ? (s.message ?? '') : s.trigger === 'explain' ? `${t.explain}: ${s.selected ?? ''}` : s.trigger === 'why' ? t.why : (t[s.trigger] ?? '')
      const history = turns.slice(-6).map((x) => ({ role: x.role, content: x.content.slice(0, 3000) }))
      setTurns((prev) => [...prev, { role: 'user', content: shown }, { role: 'assistant', content: '' }])
      update((st) =>
        st.programme
          ? {
              ...st,
              programme: {
                ...st.programme,
                progress: {
                  ...st.programme.progress,
                  tutor: { used: (st.programme.progress.tutor?.used ?? 0) + cost, perLesson: { ...st.programme.progress.tutor?.perLesson, [lessonKey]: (st.programme.progress.tutor?.perLesson?.[lessonKey] ?? 0) + cost } },
                },
              },
            }
          : st,
      )
      fireEvent({ type: 'tutor_message' })
      try {
        const res = await fetch('/api/academy/tutor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            language: programme.language,
            subject: programme.subject.slice(0, 120),
            objectives: programme.objectives,
            lesson: { title: lessonTitle.slice(0, 200), text: lessonText.slice(0, 7000) },
            history,
            trigger: s.trigger,
            message: s.message,
            section: s.section ? { heading: s.section.heading.slice(0, 200), body: s.section.body.slice(0, 3000) } : undefined,
            selected: s.selected,
            why: s.why,
          }),
        })
        if (!res.ok || !res.body) throw new Error('tutor')
        const reader = res.body.getReader()
        const dec = new TextDecoder()
        let text = ''
        for (;;) {
          const { done, value } = await reader.read()
          if (done) break
          text += dec.decode(value, { stream: true })
          const shownText = text
          setTurns((prev) => prev.map((x, i) => (i === prev.length - 1 ? { ...x, content: shownText } : x)))
        }
        if (!text.trim() || text.includes('\u0000')) throw new Error('tutor')
      } catch {
        setTurns((prev) => prev.slice(0, -2))
        setError(t.error)
      } finally {
        setBusy(false)
      }
    },
    [busy, locked, used, usedHere, t, turns, update, lessonKey, programme.language, programme.subject, programme.objectives, lessonTitle, lessonText],
  )

  // A trigger from outside (rephrase button, selected text, chip): open the panel and run it once.
  const [seenSeed, setSeenSeed] = useState(0)
  if (seed && seed.id !== seenSeed) {
    // Opening is derived while rendering (no effect needed); running the request happens in the effect below.
    setSeenSeed(seed.id)
    setOpen(true)
  }
  useEffect(() => {
    if (!seed || seed.id === lastSeed.current) return
    lastSeed.current = seed.id
    if (!accepted) {
      pending.current = seed
      return
    }
    queueMicrotask(() => void run(seed))
  }, [seed, accepted, run])

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'nearest' })
  }, [turns])

  const accept = () => {
    setAccepted(true)
    const p = pending.current
    pending.current = null
    if (p) setTimeout(() => void run(p), 0)
  }

  const disabled = !!locked || busy
  const send = () => {
    const m = input.trim()
    if (!m || disabled) return
    setInput('')
    void run({ trigger: 'ask', message: m.slice(0, 600) })
  }
  const rate = (i: number, up: boolean) => {
    setTurns((prev) => prev.map((x, k) => (k === i ? { ...x, thumb: up ? 'up' : 'down' } : x)))
    fireEvent({ type: 'tutor_thumb', up })
  }

  return (
    <section aria-labelledby={`academy-tutor-${lessonKey}`} className="rounded-2xl border border-purple-200 bg-purple-50/40 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 id={`academy-tutor-${lessonKey}`} className="font-semibold text-purple-900">
          {t.title}
        </h3>
        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="rounded-lg border border-purple-300 bg-white px-3 py-1 text-sm font-medium text-purple-800 hover:bg-purple-50">
          {open ? t.close : t.open}
        </button>
      </div>

      {locked && (
        <p className="mt-2 text-sm text-gray-700" role="status">
          {t.locked}
        </p>
      )}

      {open && (
        <div className="mt-3 space-y-3">
          <p className="text-sm text-purple-950">
            {t.notice} {t.noPersonal}
          </p>
          {!accepted ? (
            <button type="button" disabled={!!locked} onClick={accept} className="rounded-xl bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50">
              {t.start}
            </button>
          ) : (
            <>
              {turns.length > 0 && (
                <div className="max-h-96 space-y-3 overflow-y-auto rounded-xl bg-white p-3" aria-live="polite">
                  {turns.map((x, i) => (
                    <div key={i} className={x.role === 'user' ? 'text-sm font-medium text-gray-900' : 'text-sm text-gray-800'}>
                      {x.role === 'assistant' ? (
                        <>
                          <Content lang={programme.language} className="space-y-2">
                            {x.content ? <Markdown text={cleanTutorText(x.content)} /> : <span className="text-gray-500">{t.thinking}</span>}
                          </Content>
                          {x.content && !busy && (
                            <div className="mt-1 flex items-center gap-2 text-xs text-gray-600">
                              {x.thumb ? (
                                <span>{t.thanks}</span>
                              ) : (
                                <>
                                  <button type="button" onClick={() => rate(i, true)} aria-label={t.helpful} className="rounded border border-gray-300 px-2 py-0.5 hover:bg-gray-50">
                                    👍 {t.helpful}
                                  </button>
                                  <button type="button" onClick={() => rate(i, false)} aria-label={t.notHelpful} className="rounded border border-gray-300 px-2 py-0.5 hover:bg-gray-50">
                                    👎 {t.notHelpful}
                                  </button>
                                </>
                              )}
                            </div>
                          )}
                        </>
                      ) : (
                        x.content
                      )}
                    </div>
                  ))}
                  <div ref={endRef} />
                </div>
              )}
              {error && (
                <p className="text-sm text-red-800" role="alert">
                  {error}
                </p>
              )}
              {whyButton && (
                <button type="button" disabled={disabled} onClick={() => void run({ trigger: 'why', why: whyButton })} className="rounded-xl border border-purple-600 px-4 py-2 font-medium text-purple-700 hover:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-50">
                  {t.why}
                </button>
              )}
              {chips && chips.length > 0 && !whyButton && (
                <div>
                  <p className="text-xs font-medium text-gray-600">{t.suggested}</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {chips.map((c) => (
                      <button key={c} type="button" disabled={disabled} onClick={() => void run({ trigger: 'chip', message: c })} className="rounded-full border border-purple-300 bg-white px-3 py-1 text-sm text-purple-900 hover:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-50">
                        <Content lang={programme.language}>{c}</Content>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                <input
                  type="text"
                  value={input}
                  maxLength={600}
                  disabled={disabled}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && send()}
                  placeholder={t.placeholder}
                  aria-label={t.placeholder}
                  autoComplete="off"
                  className="min-w-0 flex-1 rounded-xl border border-gray-300 px-3 py-2 text-base focus:border-purple-600 focus:outline-none disabled:bg-gray-100"
                />
                <button type="button" onClick={send} disabled={disabled || !input.trim()} className="rounded-xl bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50">
                  {busy ? t.thinking : t.send}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  )
}
