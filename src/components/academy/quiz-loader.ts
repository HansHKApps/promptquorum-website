// PromptQuorum Academy — one place that requests a quiz's questions, used by the quiz screens (foreground) and by the
// background prefetch. While the learner is on the last question of a quiz, the next lesson is written and then its
// questions are generated for the learner's default test settings (format, difficulty, option count), which is what the
// format picker preselects. A quiz screen takes a finished or running prefetch from this cache instead of asking again;
// if the learner picked other settings, the key does not match and the questions are generated normally.

import type { AcademyErrorCode } from '@/lib/academy/route-errors'
import type { OpenQuestion, Programme, QuizQuestion, TestFormat } from '@/lib/academy/types'

type Failure = { ok: false; code: AcademyErrorCode | 'network' }
export type PostJson = <T>(url: string, body: unknown) => Promise<{ ok: true; data: T } | Failure>
export type QuizData = { questions: QuizQuestion[] | OpenQuestion[] }
type Result = { ok: true; data: QuizData } | Failure

/** Lesson text sent as the quiz source (the verifier checks answers against exactly this text). */
export function lessonSource(p: Programme, ids: string[], maxChars: number) {
  return p.lessons
    .filter((l) => ids.includes(l.id))
    .map((l) => ({ title: l.title, topic: l.topic, text: l.sections.map((s) => `${s.heading}\n${s.body}`).join('\n\n').slice(0, maxChars) }))
}

/** The request for one quiz: which route and what body. */
function quizRequest(p: Programme, quizId: string, format: TestFormat) {
  const isFinal = quizId === 'final'
  const ids = isFinal ? p.lessons.map((l) => l.id) : [quizId]
  const base = {
    kind: isFinal ? 'final' : 'lesson',
    subject: p.subject.slice(0, 120),
    language: p.language,
    selfLevel: p.selfLevel,
    difficulty: p.testDifficulty ?? 'medium',
    availableMinutes: p.availableMinutes,
    lessons: lessonSource(p, ids, isFinal ? 2500 : 4000),
    objectives: p.objectives,
  }
  if (format === 'choice') return { url: '/api/academy/quiz', body: { ...base, optionCount: p.choiceOptions ?? 3 } }
  return { url: '/api/academy/open-quiz', body: { ...base, format: format === 'explain' ? 'explain' : 'free' } }
}

const keyOf = (p: Programme, quizId: string, format: TestFormat) => `${p.id}:${quizId}:${format}:${p.testDifficulty ?? 'medium'}:${p.choiceOptions ?? 3}`

const cache = new Map<string, Promise<Result>>()
const prefetchFailed = new Set<string>()

/** Questions for a quiz: takes a matching prefetch (finished or still running) out of the cache, otherwise asks now. */
export async function requestQuiz(p: Programme, quizId: string, format: TestFormat, postJson: PostJson): Promise<Result> {
  const key = keyOf(p, quizId, format)
  const pre = cache.get(key)
  if (pre) {
    cache.delete(key) // used once: a retry or a second attempt generates fresh questions
    const r = await pre
    if (r.ok) return r
  }
  const { url, body } = quizRequest(p, quizId, format)
  return postJson<QuizData>(url, body)
}

/**
 * Background generation of a lesson quiz the learner has not opened yet, for their default settings. The lesson text
 * must already be in `p`. Never throws or shows an error; a failed attempt is not retried here.
 */
export function prefetchQuiz(p: Programme, quizId: string, postJson: PostJson): void {
  const lesson = p.lessons.find((l) => l.id === quizId)
  if (!lesson || !lesson.sections.length) return
  const format = p.testFormat ?? 'choice'
  const key = keyOf(p, quizId, format)
  if (cache.has(key) || prefetchFailed.has(key)) return
  const { url, body } = quizRequest(p, quizId, format)
  const task = postJson<QuizData>(url, body).catch((): Failure => ({ ok: false, code: 'network' }))
  cache.set(key, task)
  void task.then((r) => {
    if (!r.ok) {
      prefetchFailed.add(key)
      if (cache.get(key) === task) cache.delete(key)
    }
  })
}
