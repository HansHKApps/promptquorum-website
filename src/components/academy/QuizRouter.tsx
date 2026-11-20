'use client'

// PromptQuorum Academy — decides which quiz screen to show: the format picker (a quiz just opened and no format is
// chosen yet), the multiple-choice quiz, or the written-answer quiz. A quiz stored before formats existed already holds
// its questions and no format: it continues as multiple choice. The chosen format stays selected after the last answer,
// so the finished-result screen of that quiz view is not unmounted when the active quiz is cleared.

import { useState } from 'react'
import type { AcademyErrorCode } from '@/lib/academy/route-errors'
import type { Programme, TestFormat } from '@/lib/academy/types'
import { FormatPicker } from './FormatPicker'
import { OpenQuizView } from './OpenQuizView'
import { QuizView } from './QuizView'
import type { AcademyCopy } from './copy'
import type { useAcademyState } from './useAcademyState'

type Update = ReturnType<typeof useAcademyState>['update']
type Post = <T>(url: string, body: unknown) => Promise<{ ok: true; data: T } | { ok: false; code: AcademyErrorCode | 'network' }>

export function QuizRouter({ tx, programme, update, postJson, errorText }: { tx: AcademyCopy; programme: Programme; update: Update; postJson: Post; errorText: (c: AcademyErrorCode | 'network') => string }) {
  const active = programme.progress.activeQuiz
  // A quiz stored before formats existed already holds its questions and no format: it continues as multiple choice.
  const chosen: TestFormat | undefined = active ? (active.format ?? (active.questions.length > 0 ? 'choice' : undefined)) : undefined
  // Remember the last chosen format: when the last answer clears the active quiz, the same view must stay mounted
  // to show its finished-result screen. (Adjusting state while rendering, the documented pattern for derived state.)
  const [shown, setShown] = useState<TestFormat>('choice')
  if (chosen && chosen !== shown) setShown(chosen)
  if (active && !chosen) {
    const lessonIndex = programme.lessons.findIndex((l) => l.id === active.quizId)
    const title = active.quizId === 'final' ? tx.finalTestTitle : tx.lessonQuizTitle(lessonIndex + 1)
    return <FormatPicker key={active.quizId} tx={tx} programme={programme} update={update} title={title} />
  }
  const format = chosen ?? shown
  const View = format === 'choice' ? QuizView : OpenQuizView
  return <View tx={tx} programme={programme} update={update} postJson={postJson} errorText={errorText} />
}
