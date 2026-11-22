// PromptQuorum Academy — one place that fetches a lesson, used both by the lesson screen (foreground) and by the
// prefetch (background). A lesson being written takes 10 to 25 seconds, so the next one is started while the learner is
// still reading the current one. Requests are shared: if the learner clicks "next" while the prefetch is still running,
// the lesson screen waits for that same request instead of starting a second one (which would cost twice).

import { setLessonContent } from '@/lib/academy/progress'
import type { AcademyErrorCode } from '@/lib/academy/route-errors'
import type { AcademyState, Lesson, Programme } from '@/lib/academy/types'

type LessonData = Pick<Lesson, 'sections' | 'furtherReading' | 'followUpQuestions'>
export type LoadResult = { ok: true } | { ok: false; code: AcademyErrorCode | 'network' }
type PostJson = <T>(url: string, body: unknown) => Promise<{ ok: true; data: T } | { ok: false; code: AcademyErrorCode | 'network' }>
type UpdateFn = (fn: (s: AcademyState) => AcademyState) => void

const inflight = new Map<string, Promise<LoadResult>>()

/** Lessons whose background request already failed once: the prefetch does not retry them (the foreground load will). */
const prefetchFailed = new Set<string>()

const keyOf = (p: Programme, index: number) => `${p.id}:${p.lessons[index].id}`

export function lessonRequest(p: Programme, index: number) {
  const lesson = p.lessons[index]
  return {
    subject: p.subject.slice(0, 120),
    language: p.language,
    selfLevel: p.selfLevel,
    objectives: p.objectives,
    lesson: { title: lesson.title, topic: lesson.topic, estimatedMinutes: lesson.estimatedMinutes, objectiveIds: lesson.objectiveIds, recap: !!lesson.recap, ...(lesson.summary ? { summary: lesson.summary.slice(0, 400) } : {}) },
    ...(lesson.learnerNote ? { learnerNote: lesson.learnerNote } : {}),
    ...(p.freeWish ? { freeWish: p.freeWish } : {}),
    index,
    otherTitles: p.lessons.filter((_, i) => i !== index).map((l) => l.title),
  }
}

/** True while this lesson is being fetched (by either path). */
export const lessonInFlight = (p: Programme, index: number): boolean => inflight.has(keyOf(p, index))

/**
 * Fetches lesson `index` and stores it in the programme (only if that programme is still the current one). One request
 * per lesson at a time. `retry`: one automatic second try after a failure (foreground use only).
 */
export function loadLesson(opts: { programme: Programme; index: number; update: UpdateFn; postJson: PostJson; retry?: boolean }): Promise<LoadResult> {
  const { programme, index, update, postJson } = opts
  const key = keyOf(programme, index)
  const running = inflight.get(key)
  if (running) return running
  const programmeId = programme.id
  const task = (async (): Promise<LoadResult> => {
    let res = await postJson<LessonData>('/api/academy/lesson', lessonRequest(programme, index))
    if (!res.ok && opts.retry && (res.code === 'generation' || res.code === 'failed' || res.code === 'network')) {
      await new Promise((r) => setTimeout(r, 800))
      res = await postJson<LessonData>('/api/academy/lesson', lessonRequest(programme, index))
    }
    if (!res.ok) return { ok: false, code: res.code }
    const data = { ...res.data, noteUsed: programme.lessons[index].learnerNote ?? '' }
    update((s) => (s.programme && s.programme.id === programmeId && !s.programme.lessons[index].sections.length ? { ...s, programme: setLessonContent(s.programme, index, data) } : s))
    return { ok: true }
  })().finally(() => inflight.delete(key))
  inflight.set(key, task)
  return task
}

/**
 * Background start of a lesson the learner has not opened yet. Never throws, never shows an error; a failed prefetch is
 * simply not retried here, so the normal load (with its retry button) takes over when the lesson is opened.
 */
export function prefetchLesson(opts: { programme: Programme; index: number; update: UpdateFn; postJson: PostJson }): void {
  const { programme, index } = opts
  const lesson = programme.lessons[index]
  if (!lesson || lesson.sections.length) return
  const key = keyOf(programme, index)
  if (inflight.has(key) || prefetchFailed.has(key)) return
  void loadLesson(opts).then((r) => {
    if (!r.ok) prefetchFailed.add(key)
  })
}
