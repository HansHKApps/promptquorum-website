'use client'

// PromptQuorum Academy — while the learner is on the LAST question of a lesson quiz, the next lesson (the next block of
// content, with its own questions later) starts being written in the background, so "Continue" opens it without the
// "your lesson is being written" wait. Shares the request with the lesson screen (see lesson-loader); a failed
// background start is silent and the lesson screen then loads it normally, with its retry button.

import { useEffect } from 'react'
import type { Programme } from '@/lib/academy/types'
import { prefetchLesson } from './lesson-loader'
import type { useAcademyState } from './useAcademyState'

type Update = ReturnType<typeof useAcademyState>['update']
type PostJson = Parameters<typeof prefetchLesson>[0]['postJson']

export function usePrefetchNextLesson(opts: { programme: Programme; quizId: string | undefined; onLastQuestion: boolean; update: Update; postJson: PostJson }) {
  const { programme, quizId, onLastQuestion, update, postJson } = opts
  const lessonIndex = quizId ? programme.lessons.findIndex((l) => l.id === quizId) : -1
  const due = onLastQuestion && lessonIndex >= 0 && lessonIndex + 1 < programme.lessons.length
  useEffect(() => {
    if (due) prefetchLesson({ programme, index: lessonIndex + 1, update, postJson })
    // Fires once when the last question appears; later programme changes (answers) must not re-run it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [due, lessonIndex])
}
