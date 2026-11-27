'use client'

// PromptQuorum Academy — lesson screen (docs/academy/SPEC.md 5.4). Main area: the lesson text; side panel:
// objectives, progress and further reading. The lesson is generated on first open and then kept in the stored
// programme. The learner always sees subject, objective, "lesson x of y" and progress (SPEC 5 navigation rule).

import { useCallback, useEffect, useRef, useState } from 'react'
import { lessonsDone, markLessonDone } from '@/lib/academy/progress'
import type { AcademyErrorCode } from '@/lib/academy/route-errors'
import type { Lesson, Programme } from '@/lib/academy/types'
import { LessonBody, LessonHeader } from './LessonContent'
import { LessonProgress } from './LessonProgress'
import { loadLesson, prefetchLesson } from './lesson-loader'
import { Content } from './Content'
import { ReportProblem } from './ReportProblem'
import { SectionWand } from './SectionWand'
import { StarRating } from './StarRating'
import { WaitNote } from './WaitNote'
import { TutorPanel, type TutorSeed } from './TutorPanel'
import type { AcademyCopy } from './copy'
import type { useAcademyState } from './useAcademyState'

type Update = ReturnType<typeof useAcademyState>['update']

export function LessonView({
  tx,
  programme,
  update,
  postJson,
  errorText,
  reviewing,
  onReview,
}: {
  tx: AcademyCopy
  programme: Programme
  update: Update
  postJson: <T>(url: string, body: unknown) => Promise<{ ok: true; data: T } | { ok: false; code: AcademyErrorCode | 'network' }>
  errorText: (code: AcademyErrorCode | 'network') => string
  /** an earlier lesson is being reread: this screen stays mounted (the open tutor chat survives) but hidden */
  reviewing: boolean
  onReview: (index: number | null) => void
}) {
  const index = Math.min(Math.max(programme.progress.currentLesson, 0), programme.lessons.length - 1)
  const lesson = programme.lessons[index]
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<AcademyErrorCode | 'network' | null>(null)
  const requested = useRef<string | null>(null)
  const topRef = useRef<HTMLDivElement>(null)
  const articleRef = useRef<HTMLElement>(null)
  // Tutor triggers from this screen: rephrase buttons under each section and "Explain this" for selected text.
  const [seed, setSeed] = useState<TutorSeed | null>(null)
  const seedId = useRef(0)
  const ask = useCallback((s: Omit<TutorSeed, 'id'>) => setSeed({ ...s, id: ++seedId.current }), [])
  const [selection, setSelection] = useState<{ text: string; x: number; y: number } | null>(null)
  useEffect(() => {
    const onChange = () => {
      const sel = window.getSelection()
      const text = sel?.toString().trim() ?? ''
      if (!sel || sel.isCollapsed || text.length < 3 || !articleRef.current?.contains(sel.anchorNode)) return setSelection(null)
      const rect = sel.getRangeAt(0).getBoundingClientRect()
      setSelection({ text: text.slice(0, 600), x: rect.left + rect.width / 2, y: rect.top })
    }
    document.addEventListener('selectionchange', onChange)
    return () => document.removeEventListener('selectionchange', onChange)
  }, [])

  const updateProgramme = useCallback((fn: (p: Programme) => Programme) => update((s) => (s.programme ? { ...s, programme: fn(s.programme) } : s)), [update])

  // One shared request per lesson (see lesson-loader): if the prefetch started this lesson while the learner was still
  // reading the previous one, this simply waits for it (or finds the text already stored and never gets here).
  const load = useCallback(async () => {
    setError(null)
    setLoading(true)
    const r = await loadLesson({ programme, index, update, postJson, retry: true })
    setLoading(false)
    if (!r.ok) setError(r.code)
  }, [programme, index, update, postJson])

  // Generate once per lesson (the ref guards against React's double effect in development).
  useEffect(() => {
    if (lesson.sections.length || requested.current === lesson.id) return
    requested.current = lesson.id
    void load()
  }, [lesson.id, lesson.sections.length, load])

  useEffect(() => {
    if (!reviewing) topRef.current?.scrollIntoView({ block: 'start' })
  }, [index, reviewing])

  // Prefetch: once the learner is about a third through this lesson's reading time (at least 20 s of active reading),
  // the next lesson starts being written in the background, so "Next lesson" opens without a wait.
  const activeSeconds = programme.progress.lessonSeconds?.[lesson.id] ?? 0
  const prefetchDue = lesson.sections.length > 0 && !error && index < programme.lessons.length - 1 && activeSeconds >= Math.max(20, Math.round(lesson.estimatedMinutes * 60 * 0.35))
  useEffect(() => {
    if (prefetchDue) prefetchLesson({ programme, index: index + 1, update, postJson })
    // `programme` is read once when the threshold is crossed; later ticks must not re-run this.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefetchDue, index])

  const total = programme.lessons.length
  const done = lessonsDone(programme)
  const last = index === total - 1
  const needsQuiz = programme.testMode === 'per_lesson_and_final' && !programme.progress.quizResults.some((r) => r.quizId === lesson.id)
  // The lesson text must be on screen and generation finished before the lesson can be marked done (F9).
  const ready = lesson.sections.length > 0 && !loading && !error
  const finish = () => {
    if (!ready) return
    if (needsQuiz) {
      // "Every lesson" mode: the lesson quiz comes right after the lesson (SPEC 2 #2).
      update((s) => {
        if (!s.programme) return s
        const marked = markLessonDone(s.programme, index)
        return { ...s, view: 'quiz', programme: { ...marked, progress: { ...marked.progress, activeQuiz: { quizId: lesson.id, questions: [], answers: {} } } } }
      })
      return
    }
    updateProgramme((p) => {
      const marked = markLessonDone(p, index)
      return last ? marked : { ...marked, progress: { ...marked.progress, currentLesson: index + 1 } }
    })
    if (last) update((s) => ({ ...s, view: 'programme' }))
  }

  return (
    <div ref={topRef} hidden={reviewing} className="scroll-mt-24 space-y-4">
      {/* Always visible, also while scrolling: subject, "lesson x of y · title" and progress (SPEC 5 navigation rule). */}
      <LessonProgress tx={tx} programme={programme} reviewIndex={null} onSelect={onReview} />

      <article ref={articleRef} aria-labelledby="academy-lesson" className="space-y-5 rounded-2xl border border-purple-100 bg-white p-5 sm:p-6">
        <LessonHeader tx={tx} programme={programme} lesson={lesson} titleId="academy-lesson" />

        {error ? (
          <div className="space-y-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
            <p>{errorText(error)}</p>
            <button type="button" onClick={() => void load()} className="rounded-xl bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700">
              {tx.retry}
            </button>
          </div>
        ) : loading || !lesson.sections.length ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700" role="status" aria-live="polite">
              <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" aria-hidden="true" />
              {tx.preparingLesson}
            </div>
            <WaitNote language={programme.language} />
          </div>
        ) : (
          <LessonBody
            tx={tx}
            programme={programme}
            lesson={lesson}
            readingId="academy-reading"
            headingExtra={(section, i) => <SectionWand tx={tx} programme={programme} update={update} lessonKey={lesson.id} lessonTitle={lesson.title} section={section} index={i} />}
          />
        )}

        {ready && (
          <>
            <TutorPanel
              tx={tx}
              programme={programme}
              update={update}
              lessonKey={lesson.id}
              lessonTitle={lesson.title}
              lessonText={lesson.sections.map((s) => `${s.heading}\n${s.body}`).join('\n\n')}
              chips={lesson.followUpQuestions}
              seed={seed}
              title={tx.tutor.discuss}
              quick
            />
            <div className="flex flex-wrap items-start justify-between gap-4 border-t border-gray-100 pt-4">
              <StarRating key={lesson.id} tx={tx} kind="lesson" lang={programme.language} />
              <ReportProblem tx={tx} lang={programme.language} context={{ lesson: lesson.title }} />
            </div>
          </>
        )}

        <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
          <button
            type="button"
            onClick={finish}
            disabled={!ready}
            aria-disabled={!ready}
            className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {last ? tx.doneLast : tx.nextLessonButton(index + 2, programme.lessons[index + 1]?.title ?? '')}
          </button>
          <button type="button" onClick={() => update((s) => ({ ...s, view: 'programme' }))} className="text-purple-700 underline underline-offset-2">
            {tx.backToProgramme}
          </button>
        </div>
      </article>
      {selection && (
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            ask({ trigger: 'explain', selected: selection.text })
            setSelection(null)
          }}
          style={{ position: 'fixed', top: Math.max(8, selection.y - 44), left: selection.x, transform: 'translateX(-50%)', zIndex: 60 }}
          className="rounded-full bg-purple-700 px-3 py-1.5 text-sm font-medium text-white shadow-lg hover:bg-purple-800"
        >
          {tx.tutor.explain}
        </button>
      )}
    </div>
  )
}
