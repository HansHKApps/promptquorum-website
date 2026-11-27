// PromptQuorum Academy — progress updates on the stored programme (browser-safe, pure functions).

import { ACADEMY_LESSON_TIME_CAP_FACTOR, ACADEMY_TEST_TIME_CAP_SECONDS } from './config'
import type { Lesson, Programme, SavedAnswer } from './types'

/** Adds active seconds to a lesson and the total, never beyond the per-lesson cap (SPEC 6.1). */
export function addActiveTime(p: Programme, lessonId: string, seconds: number): Programme {
  const lesson = p.lessons.find((l) => l.id === lessonId)
  if (!lesson || seconds <= 0) return p
  const cap = lesson.estimatedMinutes * 60 * ACADEMY_LESSON_TIME_CAP_FACTOR
  const before = p.progress.lessonSeconds?.[lessonId] ?? 0
  const added = Math.max(0, Math.min(seconds, cap - before))
  if (!added) return p
  return {
    ...p,
    progress: {
      ...p.progress,
      secondsSpent: p.progress.secondsSpent + added,
      lessonSeconds: { ...p.progress.lessonSeconds, [lessonId]: before + added },
    },
  }
}

/** Adds active seconds spent in a test (lesson quiz id or "final"). Capped per test; counts in the total. */
export function addTestTime(p: Programme, quizId: string, seconds: number): Programme {
  if (seconds <= 0) return p
  const before = p.progress.testSeconds?.[quizId] ?? 0
  const added = Math.max(0, Math.min(seconds, ACADEMY_TEST_TIME_CAP_SECONDS - before))
  if (!added) return p
  return {
    ...p,
    progress: {
      ...p.progress,
      secondsSpent: p.progress.secondsSpent + added,
      testSeconds: { ...p.progress.testSeconds, [quizId]: before + added },
    },
  }
}

/**
 * One tick of the activity tracker. `where` is a lesson id or a quiz id; `newSession` is true for the first tick after
 * a pause of more than a minute (or after opening the window). A session is only counted when time was really added.
 */
export function addActivity(p: Programme, where: { kind: 'lesson' | 'test'; id: string }, seconds: number, newSession: boolean): Programme {
  const next = where.kind === 'lesson' ? addActiveTime(p, where.id, seconds) : addTestTime(p, where.id, seconds)
  if (next === p || !newSession) return next
  return { ...next, progress: { ...next.progress, sessions: (next.progress.sessions ?? 0) + 1 } }
}

/** Opening a lesson marks it viewed (never downgrades "done") and makes it the current one. */
export function openLesson(p: Programme, index: number): Programme {
  const lesson = p.lessons[index]
  if (!lesson) return p
  const status = p.progress.lessonStatus[lesson.id]
  return {
    ...p,
    progress: { ...p.progress, currentLesson: index, lessonStatus: { ...p.progress.lessonStatus, [lesson.id]: status === 'done' ? 'done' : 'viewed' } },
  }
}

export function markLessonDone(p: Programme, index: number): Programme {
  const lesson = p.lessons[index]
  if (!lesson) return p
  const lessonStatus = { ...p.progress.lessonStatus, [lesson.id]: 'done' as const }
  const allDone = p.lessons.every((l) => lessonStatus[l.id] === 'done')
  // Programme completion also needs the tests (SPEC 9); without tests, all lessons done completes it.
  const completedAt = allDone && p.testMode === 'none' ? (p.progress.completedAt ?? new Date().toISOString()) : p.progress.completedAt
  return { ...p, progress: { ...p.progress, lessonStatus, completedAt } }
}

/** First lesson not done yet (or -1 when all are done). */
export function nextOpenLesson(p: Programme): number {
  return p.lessons.findIndex((l) => p.progress.lessonStatus[l.id] !== 'done')
}

export function lessonsDone(p: Programme): number {
  return p.lessons.filter((l) => p.progress.lessonStatus[l.id] === 'done').length
}

/** Saves the learner's wish for one topic. `confirmed` is the "Confirm" button; the text may be empty (confirm as it is). */
export function setLessonNote(p: Programme, index: number, note: string, confirmed: boolean): Programme {
  return { ...p, lessons: p.lessons.map((l, i) => (i === index ? { ...l, learnerNote: note.trim() || undefined, confirmed } : l)) }
}

/** Throws the written lesson away so it is written again with the current wish (the learner asked for it). */
export function clearLessonContent(p: Programme, index: number): Programme {
  // Saved AI answers refer to the old text (wand answers by section number), so they go with it.
  const aiAnswers = p.aiAnswers && Object.fromEntries(Object.entries(p.aiAnswers).filter(([id]) => id !== p.lessons[index]?.id))
  return { ...p, ...(aiAnswers ? { aiAnswers } : {}), lessons: p.lessons.map((l, i) => (i === index ? { ...l, sections: [], furtherReading: [], followUpQuestions: undefined, noteUsed: undefined } : l)) }
}

export function setFreeWish(p: Programme, wish: string): Programme {
  return { ...p, freeWish: wish.trim() || undefined }
}

export function setLessonContent(p: Programme, index: number, content: Pick<Lesson, 'sections' | 'furtherReading' | 'followUpQuestions' | 'noteUsed'>): Programme {
  return { ...p, lessons: p.lessons.map((l, i) => (i === index ? { ...l, ...content } : l)) }
}

/** Limits for saved AI answers: browser storage is small. The oldest answer of a lesson makes room for a new one. */
export const SAVED_ANSWER_MAX_CHARS = 6000
export const SAVED_QUESTION_MAX_CHARS = 700
export const SAVED_ANSWERS_PER_LESSON = 24

const safeSourceUrl = (url: string) => /^(https?:\/\/|\/(?!\/))/i.test(url)

/** One stored entry made safe to show, or null when it is unusable (stored data and backups can hold anything). */
function cleanSavedAnswer(raw: unknown): SavedAnswer | null {
  const a = raw as Partial<SavedAnswer> | null
  if (!a || (a.source !== 'tutor' && a.source !== 'wand') || typeof a.question !== 'string' || typeof a.answer !== 'string' || !a.answer.trim()) return null
  const sources = Array.isArray(a.sources)
    ? a.sources.filter((s) => !!s && typeof s.title === 'string' && typeof s.url === 'string' && safeSourceUrl(s.url)).slice(0, 8).map((s) => ({ title: s.title.slice(0, 300), url: s.url, ...(s.web ? { web: true } : {}) }))
    : []
  return {
    source: a.source,
    ...(Number.isInteger(a.sectionIndex) ? { sectionIndex: a.sectionIndex } : {}),
    question: a.question.slice(0, SAVED_QUESTION_MAX_CHARS),
    answer: a.answer.slice(0, SAVED_ANSWER_MAX_CHARS),
    ...(sources.length ? { sources } : {}),
    at: typeof a.at === 'string' ? a.at : '',
  }
}

export function cleanSavedAnswers(raw: unknown): Record<string, SavedAnswer[]> | undefined {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return undefined
  const out = Object.entries(raw)
    .map(([id, list]) => [id, Array.isArray(list) ? list.map(cleanSavedAnswer).filter((a): a is SavedAnswer => !!a).slice(-SAVED_ANSWERS_PER_LESSON) : []] as const)
    .filter(([, list]) => list.length)
  return out.length ? Object.fromEntries(out) : undefined
}

/** Keeps a finished AI answer with its lesson. Anything not tied to a lesson (the final test) is not kept. */
export function addSavedAnswer(p: Programme, lessonId: string, answer: SavedAnswer): Programme {
  const clean = cleanSavedAnswer(answer)
  if (!clean || !p.lessons.some((l) => l.id === lessonId)) return p
  return { ...p, aiAnswers: { ...p.aiAnswers, [lessonId]: [...(p.aiAnswers?.[lessonId] ?? []), clean].slice(-SAVED_ANSWERS_PER_LESSON) } }
}

/**
 * Which segments of the lesson bar can be opened for rereading: a written lesson other than the current one that is
 * finished, or that lies before the current one.
 */
export function canReviewLesson(p: Programme, index: number): boolean {
  const lesson = p.lessons[index]
  const current = p.progress.currentLesson
  if (!lesson || index === current || !lesson.sections?.length) return false
  return index < current || p.progress.lessonStatus[lesson.id] === 'done'
}
