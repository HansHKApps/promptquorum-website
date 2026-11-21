'use client'

// PromptQuorum Academy — the magic wand after every lesson section heading. A click opens a small menu of things the
// learner can do with exactly this section: explain it simpler or deeper, get an example, be quizzed, get a summary or
// the key terms, ask a question, copy it, read it aloud, or write a note. The AI actions open a window that works ONLY
// on this section (the tutor gets the section as its whole lesson text and is told to stay inside it; no guides, no web).
// Counted against the normal tutor limits. Notes are the learner's own and live in the stored program (this browser).

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ReadAloud } from '@/components/ReadAloud'
import { Markdown } from '@/components/askhans/markdown'
import { cleanTutorText, tutorCost, TUTOR_CAP_LESSON, TUTOR_CAP_PROGRAMME, type TutorTrigger } from '@/lib/academy/tutor'
import { ACADEMY_TUTOR_OK_KEY } from '@/lib/academy/config'
import type { Programme } from '@/lib/academy/types'
import { Content } from './Content'
import type { AcademyCopy } from './copy'
import { shareCopyFor } from './copy/share'
import { fireEvent, tutorNoticeConfirmed } from './TutorPanel'
import type { useAcademyState } from './useAcademyState'

type Update = ReturnType<typeof useAcademyState>['update']
type Action = Extract<TutorTrigger, 'simpler' | 'deeper' | 'example' | 'quiz' | 'summarize' | 'terms'>
const ACTIONS: Action[] = ['simpler', 'deeper', 'example', 'quiz', 'summarize', 'terms']

interface Turn {
  role: 'user' | 'assistant'
  content: string
}

function Wand() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m4 20 11-11" />
      <path d="m13.5 6.5 4 4" />
      <path d="M17 3v3M15.5 4.5h3M20 9v2M19 10h2M7 3v2M6 4h2" />
    </svg>
  )
}

export function SectionWand({
  tx,
  programme,
  update,
  lessonKey,
  lessonTitle,
  section,
  index,
}: {
  tx: AcademyCopy
  programme: Programme
  update: Update
  lessonKey: string
  lessonTitle: string
  section: { heading: string; body: string }
  index: number
}) {
  const sx = shareCopyFor(programme.language)
  const t = tx.tutor
  const menuId = useId()
  const [menu, setMenu] = useState(false)
  const [open, setOpen] = useState(false)
  const [accepted, setAccepted] = useState(false)
  const [turns, setTurns] = useState<Turn[]>([])
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [input, setInput] = useState('')
  const [copied, setCopied] = useState<'section' | 'answer' | null>(null)
  const wrapRef = useRef<HTMLSpanElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const noteRef = useRef<HTMLTextAreaElement>(null)
  const endRef = useRef<HTMLDivElement>(null)
  const pendingAction = useRef<Action | null>(null)
  const noteKey = `${lessonKey}:${index}`
  const note = programme.notes?.[noteKey] ?? ''
  const used = programme.progress.tutor?.used ?? 0
  const usedHere = programme.progress.tutor?.perLesson?.[lessonKey] ?? 0
  const sectionText = `${section.heading}\n\n${section.body}`.replace(/\*\*/g, '')

  useEffect(() => {
    if (tutorNoticeConfirmed()) setAccepted(true)
  }, [])
  // Close the menu on an outside click or Esc.
  useEffect(() => {
    if (!menu) return
    const onDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setMenu(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(false)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [menu])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && (e.stopPropagation(), setOpen(false))
    document.addEventListener('keydown', onKey, true)
    return () => document.removeEventListener('keydown', onKey, true)
  }, [open])
  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'nearest' })
  }, [turns])

  const run = useCallback(
    async (trigger: Action | 'ask', message?: string) => {
      if (busy) return
      const cost = tutorCost(trigger)
      if (used + cost > TUTOR_CAP_PROGRAMME) return setError(t.limitProgramme)
      if (usedHere + cost > TUTOR_CAP_LESSON) return setError(t.limitLesson)
      setError(null)
      setBusy(true)
      const shown = trigger === 'ask' ? (message ?? '') : trigger === 'quiz' ? sx.wandQuiz : trigger === 'terms' ? sx.wandTerms : t[trigger]
      const history = turns.slice(-6).map((x) => ({ role: x.role, content: x.content.slice(0, 3000) }))
      setTurns((prev) => [...prev, { role: 'user', content: shown }, { role: 'assistant', content: '' }])
      update((st) =>
        st.programme
          ? { ...st, programme: { ...st.programme, progress: { ...st.programme.progress, tutor: { used: (st.programme.progress.tutor?.used ?? 0) + cost, perLesson: { ...st.programme.progress.tutor?.perLesson, [lessonKey]: (st.programme.progress.tutor?.perLesson?.[lessonKey] ?? 0) + cost } } } } }
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
            // The section is the whole lesson text of this call: nothing else about the lesson is sent.
            lesson: { title: `${lessonTitle} – ${section.heading}`.slice(0, 200), text: section.body.slice(0, 3000) },
            history,
            trigger,
            scope: 'section',
            message: trigger === 'ask' ? message : undefined,
            section: trigger === 'ask' ? undefined : { heading: section.heading.slice(0, 200), body: section.body.slice(0, 3000) },
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
    [busy, used, usedHere, t, sx, turns, update, lessonKey, lessonTitle, section, programme.language, programme.subject, programme.objectives],
  )

  const choose = (a: Action) => {
    setMenu(false)
    setOpen(true)
    if (!accepted) {
      pendingAction.current = a
      return
    }
    queueMicrotask(() => void run(a))
  }
  const accept = () => {
    try {
      localStorage.setItem(ACADEMY_TUTOR_OK_KEY, String(Date.now()))
    } catch {}
    setAccepted(true)
    const a = pendingAction.current
    pendingAction.current = null
    if (a) setTimeout(() => void run(a), 0)
  }
  const flash = (what: 'section' | 'answer') => {
    setCopied(what)
    setTimeout(() => setCopied(null), 2000)
  }
  const copy = async (text: string, what: 'section' | 'answer') => {
    try {
      await navigator.clipboard.writeText(text)
      flash(what)
    } catch {
      /* clipboard blocked */
    }
  }
  const saveNote = (value: string) =>
    update((st) => (st.programme ? { ...st, programme: { ...st.programme, notes: { ...st.programme.notes, [noteKey]: value.slice(0, 2000) } } } : st))
  const send = () => {
    const m = input.trim()
    if (!m || busy) return
    setInput('')
    void run('ask', m.slice(0, 600))
  }
  const lastAnswer = [...turns].reverse().find((x) => x.role === 'assistant' && x.content)?.content ?? ''

  const itemClass = 'flex w-full items-center gap-2 rounded-lg px-3 py-2 text-start text-sm text-gray-800 hover:bg-purple-50 focus-visible:bg-purple-50 focus-visible:outline-none'

  return (
    <span ref={wrapRef} className="relative inline-block align-middle">
      <button
        type="button"
        onClick={() => setMenu((m) => !m)}
        aria-haspopup="menu"
        aria-expanded={menu}
        aria-controls={menuId}
        aria-label={`${sx.wandLabel}: ${section.heading}`}
        title={sx.wandLabel}
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-purple-200 bg-white text-purple-700 shadow-sm transition hover:scale-110 hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600"
      >
        <Wand />
      </button>
      {menu && (
        <div id={menuId} role="menu" aria-label={sx.wandLabel} className="absolute start-0 top-full z-30 mt-2 w-64 rounded-xl border border-purple-100 bg-white p-1.5 shadow-xl">
          {ACTIONS.map((a) => (
            <button key={a} type="button" role="menuitem" onClick={() => choose(a)} className={itemClass}>
              {a === 'quiz' ? sx.wandQuiz : a === 'terms' ? sx.wandTerms : t[a]}
            </button>
          ))}
          <button type="button" role="menuitem" onClick={() => { setMenu(false); setOpen(true); setTimeout(() => inputRef.current?.focus(), 50) }} className={itemClass}>
            {sx.wandAsk}
          </button>
          <div className="my-1 border-t border-gray-100" />
          <button type="button" role="menuitem" onClick={() => { setMenu(false); void copy(sectionText, 'section') }} className={itemClass}>
            {copied === 'section' ? sx.copied : sx.wandCopy}
          </button>
          <button type="button" role="menuitem" onClick={() => { setMenu(false); setOpen(true); setTimeout(() => noteRef.current?.focus(), 50) }} className={itemClass}>
            {sx.wandNote}
          </button>
        </div>
      )}

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[110] flex items-end justify-center bg-black/30 p-0 sm:items-center sm:p-4" onPointerDown={(e) => e.target === e.currentTarget && setOpen(false)}>
            <div role="dialog" aria-modal="true" aria-label={section.heading} className="flex max-h-[88dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
              <div className="flex items-start justify-between gap-3 border-b border-purple-100 bg-purple-50/60 px-4 py-3">
                <div className="min-w-0">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-purple-700">
                    <Wand />
                    {sx.wandLabel}
                  </p>
                  <Content lang={programme.language}>
                    <h4 className="mt-1 text-lg font-semibold leading-snug text-gray-900">{section.heading}</h4>
                  </Content>
                  <p className="mt-1 text-xs text-gray-600">{sx.wandBasis}</p>
                </div>
                <button type="button" onClick={() => setOpen(false)} className="shrink-0 rounded-lg border border-purple-300 bg-white px-3 py-1 text-sm font-medium text-purple-800 hover:bg-purple-50">
                  {sx.wandClose}
                </button>
              </div>

              <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
                {!accepted ? (
                  <div className="space-y-3">
                    <p className="text-sm text-purple-950">
                      {t.notice} {t.noPersonal}
                    </p>
                    <button type="button" onClick={accept} className="rounded-xl bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700">
                      {t.start}
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-wrap gap-2" role="group" aria-label={sx.wandLabel}>
                      {ACTIONS.map((a) => (
                        <button key={a} type="button" disabled={busy} onClick={() => void run(a)} className="rounded-full border border-purple-200 bg-white px-3 py-1 text-sm text-purple-900 hover:bg-purple-50 disabled:opacity-50">
                          {a === 'quiz' ? sx.wandQuiz : a === 'terms' ? sx.wandTerms : t[a]}
                        </button>
                      ))}
                    </div>
                    {turns.length > 0 && (
                      <div className="space-y-3 rounded-xl bg-gray-50 p-3" aria-live="polite">
                        {turns.map((x, i) => (
                          <div key={i} className={x.role === 'user' ? 'text-sm font-medium text-gray-900' : 'text-sm text-gray-800'}>
                            {x.role === 'assistant' ? (
                              <Content lang={programme.language} className="space-y-2">
                                {x.content ? <Markdown text={cleanTutorText(x.content)} /> : <span className="text-gray-500">{t.thinking}</span>}
                              </Content>
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
                    {lastAnswer && !busy && (
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <button type="button" onClick={() => void copy(cleanTutorText(lastAnswer), 'answer')} className="rounded-lg border border-gray-300 px-3 py-1 text-gray-800 hover:bg-gray-50">
                          {copied === 'answer' ? sx.copied : sx.wandCopyAnswer}
                        </button>
                        <ReadAloud lang={programme.language} getText={() => cleanTutorText(lastAnswer)} />
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        maxLength={600}
                        disabled={busy}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && send()}
                        placeholder={sx.wandPlaceholder}
                        aria-label={sx.wandPlaceholder}
                        autoComplete="off"
                        className="min-w-0 flex-1 rounded-xl border border-gray-300 px-3 py-2 text-base focus:border-purple-600 focus:outline-none disabled:bg-gray-100"
                      />
                      <button type="button" onClick={send} disabled={busy || !input.trim()} className="rounded-xl bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50">
                        {busy ? t.thinking : t.send}
                      </button>
                    </div>
                  </>
                )}

                <div className="space-y-1 border-t border-gray-100 pt-3">
                  <label htmlFor={`${menuId}-note`} className="text-sm font-medium text-gray-900">
                    {sx.wandNoteLabel}
                  </label>
                  <textarea
                    id={`${menuId}-note`}
                    ref={noteRef}
                    value={note}
                    maxLength={2000}
                    rows={3}
                    onChange={(e) => saveNote(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 text-base focus:border-purple-600 focus:outline-none"
                  />
                  <button type="button" onClick={() => void copy(sectionText, 'section')} className="text-sm text-purple-800 underline underline-offset-2">
                    {copied === 'section' ? sx.copied : sx.wandCopy}
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </span>
  )
}
