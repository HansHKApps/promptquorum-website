'use client'

// PromptQuorum Academy — lesson screen (docs/academy/SPEC.md 5.4). Main area: the lesson text; side panel:
// objectives, progress and further reading. The lesson is generated on first open and then kept in the stored
// programme. The learner always sees subject, objective, "lesson x of y" and progress (SPEC 5 navigation rule).

import { useCallback, useEffect, useRef, useState } from 'react'
import { Markdown } from '@/components/askhans/markdown'
import { ACADEMY_IDLE_AFTER_MS, ACADEMY_TICK_SECONDS } from '@/lib/academy/config'
import { addActiveTime, lessonsDone, markLessonDone, setLessonContent } from '@/lib/academy/progress'
import type { AcademyErrorCode } from '@/lib/academy/route-errors'
import type { Lesson, Programme } from '@/lib/academy/types'
import { AiBadge } from './AiBadge'
import type { AcademyCopy } from './copy'
import type { useAcademyState } from './useAcademyState'

type Update = ReturnType<typeof useAcademyState>['update']

/** Counts active seconds while the tab is visible and the learner interacted within the last minute (SPEC 6.1). */
function useActiveSeconds(onTick: (seconds: number) => void) {
  const lastInteraction = useRef(Date.now())
  const tick = useRef(onTick)
  tick.current = onTick
  useEffect(() => {
    const mark = () => (lastInteraction.current = Date.now())
    const events = ['pointerdown', 'keydown', 'scroll', 'touchstart', 'wheel'] as const
    events.forEach((e) => window.addEventListener(e, mark, { passive: true }))
    const id = window.setInterval(() => {
      if (document.visibilityState === 'visible' && Date.now() - lastInteraction.current < ACADEMY_IDLE_AFTER_MS) tick.current(ACADEMY_TICK_SECONDS)
    }, ACADEMY_TICK_SECONDS * 1000)
    return () => {
      events.forEach((e) => window.removeEventListener(e, mark))
      window.clearInterval(id)
    }
  }, [])
}

export function LessonView({
  tx,
  programme,
  update,
  postJson,
  errorText,
}: {
  tx: AcademyCopy
  programme: Programme
  update: Update
  postJson: <T>(url: string, body: unknown) => Promise<{ ok: true; data: T } | { ok: false; code: AcademyErrorCode | 'network' }>
  errorText: (code: AcademyErrorCode | 'network') => string
}) {
  const index = Math.min(Math.max(programme.progress.currentLesson, 0), programme.lessons.length - 1)
  const lesson = programme.lessons[index]
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<AcademyErrorCode | 'network' | null>(null)
  const requested = useRef<string | null>(null)
  const topRef = useRef<HTMLDivElement>(null)

  const updateProgramme = useCallback((fn: (p: Programme) => Programme) => update((s) => (s.programme ? { ...s, programme: fn(s.programme) } : s)), [update])

  useActiveSeconds((sec) => updateProgramme((p) => addActiveTime(p, lesson.id, sec)))

  const load = useCallback(async () => {
    setError(null)
    setLoading(true)
    const res = await postJson<Pick<Lesson, 'sections' | 'furtherReading'>>('/api/academy/lesson', {
      subject: programme.subject.slice(0, 120),
      language: programme.language,
      selfLevel: programme.selfLevel,
      objectives: programme.objectives,
      lesson: { title: lesson.title, topic: lesson.topic, estimatedMinutes: lesson.estimatedMinutes, objectiveIds: lesson.objectiveIds, recap: !!lesson.recap },
      index,
      otherTitles: programme.lessons.filter((_, i) => i !== index).map((l) => l.title),
    })
    setLoading(false)
    if (!res.ok) return setError(res.code)
    updateProgramme((p) => setLessonContent(p, index, res.data))
  }, [index, lesson, programme.language, programme.lessons, programme.objectives, programme.selfLevel, programme.subject, postJson, updateProgramme])

  // Generate once per lesson (the ref guards against React's double effect in development).
  useEffect(() => {
    if (lesson.sections.length || requested.current === lesson.id) return
    requested.current = lesson.id
    void load()
  }, [lesson.id, lesson.sections.length, load])

  useEffect(() => {
    topRef.current?.scrollIntoView({ block: 'start' })
  }, [index])

  const total = programme.lessons.length
  const done = lessonsDone(programme)
  const objectives = lesson.objectiveIds.map((i) => programme.objectives[i]).filter(Boolean)
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
    <div ref={topRef} className="scroll-mt-24 space-y-4">
      {/* Always visible: subject, lesson x of y, progress. */}
      <div className="rounded-2xl border border-purple-100 bg-white p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="font-medium text-gray-900">{programme.subject}</span>
          <span className="text-gray-500">{tx.lessonOf(index + 1, total)}</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-purple-100" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done}>
          <div className="h-full bg-purple-600 transition-all" style={{ width: `${(done / total) * 100}%` }} />
        </div>
      </div>

      <article aria-labelledby="academy-lesson" className="space-y-5 rounded-2xl border border-purple-100 bg-white p-5 sm:p-6">
        <header>
          <h2 id="academy-lesson" className="text-2xl font-semibold text-gray-900">
            {lesson.title}
          </h2>
          <p className="mt-2">
            <AiBadge text={tx.aiLabel} />
          </p>
          {objectives.length > 0 && (
            <div className="mt-3 rounded-xl bg-purple-50 px-4 py-3 text-sm text-purple-900">
              <span className="font-medium">{tx.lessonObjectives}:</span>
              <ul className="mt-1 list-disc ps-5">
                {objectives.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
          )}
        </header>

        {error ? (
          <div className="space-y-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-900" role="alert">
            <p>{errorText(error)}</p>
            <button type="button" onClick={() => void load()} className="rounded-xl bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700">
              {tx.retry}
            </button>
          </div>
        ) : loading || !lesson.sections.length ? (
          <div className="flex items-center gap-3 text-gray-700" role="status" aria-live="polite">
            <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" aria-hidden="true" />
            {tx.preparingLesson}
          </div>
        ) : (
          <>
            {lesson.sections.map((s, i) => (
              <section key={i} className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">{s.heading}</h3>
                <div className="space-y-3 leading-relaxed text-gray-800">
                  <Markdown text={s.body} />
                </div>
              </section>
            ))}
            {lesson.furtherReading.length > 0 && (
              <aside aria-labelledby="academy-reading" className="rounded-xl border border-gray-200 p-4">
                <h3 id="academy-reading" className="font-semibold text-gray-900">
                  {tx.furtherReading}
                </h3>
                <ul className="mt-2 space-y-2">
                  {lesson.furtherReading.map((r) => (
                    <li key={r.url} className="flex flex-wrap items-center gap-2">
                      <a href={r.url} className="font-medium text-purple-700 underline underline-offset-2 hover:text-purple-900">
                        {r.title}
                      </a>
                      <span className="rounded-full bg-purple-50 px-2 py-0.5 text-xs text-purple-700">{tx.fromPromptQuorum}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
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
            {last ? tx.doneLast : tx.doneNext}
          </button>
          <button type="button" onClick={() => update((s) => ({ ...s, view: 'programme' }))} className="text-purple-700 underline underline-offset-2">
            {tx.backToProgramme}
          </button>
        </div>
      </article>
    </div>
  )
}
