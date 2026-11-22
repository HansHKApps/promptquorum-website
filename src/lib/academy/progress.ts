// PromptQuorum Academy — progress updates on the stored programme (browser-safe, pure functions).

import { ACADEMY_LESSON_TIME_CAP_FACTOR } from './config'
import type { Lesson, Programme } from './types'

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
  return { ...p, lessons: p.lessons.map((l, i) => (i === index ? { ...l, sections: [], furtherReading: [], followUpQuestions: undefined, noteUsed: undefined } : l)) }
}

export function setFreeWish(p: Programme, wish: string): Programme {
  return { ...p, freeWish: wish.trim() || undefined }
}

export function setLessonContent(p: Programme, index: number, content: Pick<Lesson, 'sections' | 'furtherReading' | 'followUpQuestions' | 'noteUsed'>): Programme {
  return { ...p, lessons: p.lessons.map((l, i) => (i === index ? { ...l, ...content } : l)) }
}
