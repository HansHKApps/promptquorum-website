'use client'

// PromptQuorum Academy — lesson quiz and final test in a written format: "free" (short answer) or "explain" (explain a
// concept in your own words). One question at a time. The learner writes, the server grades the answer against a hidden
// rubric (key points) and returns credit 0 / 0.5 / 1, feedback, covered and missed points and a model answer.
// The quiz in progress is kept in the stored programme like the multiple-choice quiz, so a reload continues.
// Nothing here is a different pass mark: points are pooled with the other quizzes by scoring.ts.

import { FinishedCard } from './FinishedCard'
import { SuccessShare } from './SuccessShare'
import { isSiteLang } from '@/lib/academy/language'
import { useCallback, useEffect, useRef, useState } from 'react'
import { OPEN_ANSWER_MAX_CHARS } from '@/lib/academy/schemas'
import { scoreOpenQuiz } from '@/lib/academy/scoring'
import type { AcademyErrorCode } from '@/lib/academy/route-errors'
import type { OpenQuestion, OpenReveal, Programme, QuizResult } from '@/lib/academy/types'
import { AiBadge } from './AiBadge'
import { Content } from './Content'
import { ReportProblem } from './ReportProblem'
import { TutorPanel } from './TutorPanel'
import { creditLabel } from './credit'
import { lessonSource } from './QuizView'
import type { AcademyCopy } from './copy'
import type { useAcademyState } from './useAcademyState'

type Update = ReturnType<typeof useAcademyState>['update']
type Post = <T>(url: string, body: unknown) => Promise<{ ok: true; data: T } | { ok: false; code: AcademyErrorCode | 'network' }>

export function OpenQuizView({ tx, programme, update, postJson, errorText }: { tx: AcademyCopy; programme: Programme; update: Update; postJson: Post; errorText: (c: AcademyErrorCode | 'network') => string }) {
  const active = programme.progress.activeQuiz
  const [finished, setFinished] = useState<{ result: QuizResult; quizId: string } | null>(null)
  const quizId = finished?.quizId ?? active?.quizId
  const isFinal = quizId === 'final'
  const lessonIndex = programme.lessons.findIndex((l) => l.id === quizId)
  const format = active?.format === 'explain' ? 'explain' : 'free'
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<AcademyErrorCode | 'network' | null>(null)
  const [draft, setDraft] = useState('')
  const [grading, setGrading] = useState(false)
  const [gradeError, setGradeError] = useState<AcademyErrorCode | 'network' | null>(null)
  const [feedbackFor, setFeedbackFor] = useState<string | null>(null)
  const requested = useRef<string | null>(null)

  const updateProgramme = useCallback((fn: (p: Programme) => Programme) => update((s) => (s.programme ? { ...s, programme: fn(s.programme) } : s)), [update])

  const load = useCallback(async () => {
    if (!active) return
    setError(null)
    setLoading(true)
    const ids = isFinal ? programme.lessons.map((l) => l.id) : [active.quizId]
    const res = await postJson<{ questions: OpenQuestion[] }>('/api/academy/open-quiz', {
      kind: isFinal ? 'final' : 'lesson',
      format: active.format === 'explain' ? 'explain' : 'free',
      subject: programme.subject.slice(0, 120),
      language: programme.language,
      selfLevel: programme.selfLevel,
      difficulty: programme.testDifficulty ?? 'medium',
      availableMinutes: programme.availableMinutes,
      lessons: lessonSource(programme, ids, isFinal ? 2500 : 4000),
      objectives: programme.objectives,
    })
    setLoading(false)
    if (!res.ok) return setError(res.code)
    updateProgramme((p) => (p.progress.activeQuiz ? { ...p, progress: { ...p.progress, activeQuiz: { ...p.progress.activeQuiz, openQuestions: res.data.questions, openAnswers: {} } } } : p))
  }, [active, isFinal, programme, postJson, updateProgramme])

  useEffect(() => {
    if (!active || active.openQuestions?.length || requested.current === active.quizId) return
    requested.current = active.quizId
    void load()
  }, [active, load])

  const backToProgramme = () => update((s) => ({ ...s, view: 'programme' }))

  if (finished) {
    const next = lessonIndex >= 0 && lessonIndex + 1 < programme.lessons.length ? lessonIndex + 1 : -1
    return (
      <FinishedCard
        tx={tx}
        title={isFinal ? tx.finalTestTitle : tx.lessonQuizTitle(lessonIndex + 1)}
        scoreLine={tx.quizPoints(finished.result.correct, finished.result.total)}
        correct={finished.result.correct}
        total={finished.result.total}
        isFinal={isFinal}
        buttonLabel={isFinal ? tx.seeResults : tx.continueLessons}
        share={
          <SuccessShare
            lang={isSiteLang(programme.language) ? programme.language : 'en'}
            subject={programme.subject}
            percent={finished.result.total > 0 ? (finished.result.correct / finished.result.total) * 100 : 0}
            minutes={programme.progress.secondsSpent / 60}
          />
        }
        onContinue={() =>
            update((s) =>
              isFinal ? { ...s, view: 'results' } : next >= 0 && s.programme ? { ...s, view: 'lesson', programme: { ...s.programme, progress: { ...s.programme.progress, currentLesson: next } } } : { ...s, view: 'programme' },
            )
        }
      >
        <p className="text-sm text-gray-600">{tx.aiGradedNotice}</p>
      </FinishedCard>
    )
  }

  if (!active) return <Leave run={backToProgramme} />
  const title = isFinal ? tx.finalTestTitle : tx.lessonQuizTitle(lessonIndex + 1)

  if (error) {
    return (
      <div className="space-y-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900" role="alert">
        <p>{errorText(error)}</p>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={() => void load()} className="rounded-xl bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700">
            {tx.retry}
          </button>
          <button type="button" onClick={backToProgramme} className="rounded-xl border border-red-300 bg-white px-4 py-2 font-medium text-red-900">
            {tx.backToProgramme}
          </button>
        </div>
      </div>
    )
  }
  const questions = active.openQuestions ?? []
  if (loading || !questions.length) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-purple-100 bg-white p-6 text-gray-700" role="status" aria-live="polite">
        <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" aria-hidden="true" />
        {tx.preparingQuiz}
      </div>
    )
  }

  const answers = active.openAnswers ?? {}
  const total = questions.length
  const current = feedbackFor ? questions.find((q) => q.id === feedbackFor) : questions.find((q) => !q.reveal)
  if (!current) return <Leave run={() => finish(questions, answers)} />
  const index = questions.indexOf(current)
  const graded = current.reveal !== undefined
  const maxChars = OPEN_ANSWER_MAX_CHARS[format]

  function finish(qs: OpenQuestion[], ans: Record<string, string>) {
    const resultId = isFinal ? `final-${(programme.progress.finalAttempts?.length ?? 0) + 1}` : active!.quizId
    const result = scoreOpenQuiz(resultId, qs, ans)
    updateProgramme((p) => {
      const progress = { ...p.progress, activeQuiz: undefined }
      if (isFinal) {
        const attempts = [...(p.progress.finalAttempts ?? []), result]
        return { ...p, progress: { ...progress, finalAttempts: attempts, finalResult: result } }
      }
      return { ...p, progress: { ...progress, quizResults: [...p.progress.quizResults.filter((r) => r.quizId !== result.quizId), result] } }
    })
    setFeedbackFor(null)
    setFinished({ result, quizId: active!.quizId })
  }

  // The server grades the answer (rubric and model answer never reach the browser before this), then the reveal is stored.
  const submit = async (text: string) => {
    if (graded || grading) return
    setGradeError(null)
    setGrading(true)
    const res = await postJson<OpenReveal>('/api/academy/grade', { sealed: current.sealed, answer: text.trim() })
    setGrading(false)
    if (!res.ok) return setGradeError(res.code)
    updateProgramme((p) => {
      const aq = p.progress.activeQuiz
      if (!aq?.openQuestions) return p
      return {
        ...p,
        progress: {
          ...p.progress,
          activeQuiz: { ...aq, openQuestions: aq.openQuestions.map((x) => (x.id === current.id ? { ...x, reveal: res.data } : x)), openAnswers: { ...aq.openAnswers, [current.id]: text.trim() } },
        },
      }
    })
    setFeedbackFor(current.id)
    setDraft('')
  }
  const next = () => {
    const last = index === total - 1
    setFeedbackFor(null)
    if (last) finish(questions, answers)
  }
  const reveal = current.reveal

  return (
    <section aria-labelledby="academy-quiz" className="space-y-5 rounded-2xl border border-purple-100 bg-white p-5 sm:p-6">
      <div>
        <h2 id="academy-quiz" className="text-xl font-semibold text-gray-900">
          {title}
        </h2>
        <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-2">
            {tx.questionOf(index + 1, total)}
            <AiBadge text={tx.aiLabel} />
          </span>
          <span>{programme.subject}</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-purple-100" aria-hidden="true">
          <div className="h-full bg-purple-600 transition-all" style={{ width: `${((index + (graded ? 1 : 0)) / total) * 100}%` }} />
        </div>
      </div>
      <div key={current.id} className="space-y-3">
        <Content lang={programme.language}>
          <p className="text-lg font-medium text-gray-900">{current.prompt}</p>
        </Content>
        <label htmlFor="academy-open-answer" className="block text-sm font-medium text-gray-800">
          {format === 'explain' ? tx.answerLabelExplain : tx.answerLabelFree}
        </label>
        <textarea
          id="academy-open-answer"
          value={graded ? (answers[current.id] ?? '') : draft}
          onChange={(e) => setDraft(e.target.value.slice(0, maxChars))}
          readOnly={graded}
          disabled={grading}
          rows={format === 'explain' ? 8 : 4}
          maxLength={maxChars}
          placeholder={format === 'explain' ? tx.placeholderExplain : tx.placeholderFree}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base read-only:bg-gray-50"
        />
        {!graded && <p className="text-xs text-gray-500">{tx.charactersLeft(maxChars - draft.length)}</p>}
        {!graded && (
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => void submit(draft)} disabled={grading || !draft.trim()} className="rounded-xl bg-purple-600 px-5 py-2 font-medium text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50">
              {tx.submitAnswer}
            </button>
            <button type="button" onClick={() => void submit('')} disabled={grading} className="rounded-xl border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50 disabled:opacity-50">
              {tx.iAmNotSure}
            </button>
            {grading && (
              <span className="flex items-center gap-2 text-sm text-gray-600" role="status" aria-live="polite">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" aria-hidden="true" />
                {tx.gradingAnswer}
              </span>
            )}
          </div>
        )}
      </div>
      {gradeError && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
          {errorText(gradeError)} {tx.retry}
        </p>
      )}
      {reveal && (
        <div className={`space-y-3 rounded-xl p-4 text-sm ${reveal.credit >= 1 ? 'bg-green-50 text-green-900' : reveal.credit > 0 ? 'bg-amber-50 text-amber-900' : 'bg-red-50 text-red-900'}`} role="status" aria-live="polite">
          <p className="flex flex-wrap items-center gap-2 font-semibold">
            {creditLabel(tx, reveal.credit)}
            <AiBadge text={tx.aiLabel} />
          </p>
          <Content lang={programme.language} className="space-y-3">
            <p>{reveal.feedback || tx.notSureFeedback}</p>
            {reveal.covered.length > 0 && (
              <div>
                <p className="font-medium">{tx.keyPointsCovered}</p>
                <ul className="list-disc ps-5">
                  {reveal.covered.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              </div>
            )}
            {reveal.missed.length > 0 && (
              <div>
                <p className="font-medium">{tx.keyPointsMissed}</p>
                <ul className="list-disc ps-5">
                  {reveal.missed.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <p className="font-medium">{tx.modelAnswerLabel}</p>
              <p>{reveal.modelAnswer}</p>
            </div>
          </Content>
          <p className="text-xs opacity-80">{tx.aiGradedNotice}</p>
          <button type="button" onClick={next} className="rounded-xl bg-purple-600 px-5 py-2 font-medium text-white hover:bg-purple-700">
            {index === total - 1 ? tx.seeResult : tx.nextQuestion}
          </button>
        </div>
      )}
      {reveal && <ReportProblem tx={tx} lang={programme.language} context={{ question: { prompt: current.prompt, options: [] } }} />}
      {/* Quiz lock (SPEC 8.6): the tutor stays disabled until this question is graded; then "Why?" explains the grading. */}
      <TutorPanel
        tx={tx}
        programme={programme}
        update={update}
        lessonKey={isFinal ? 'final' : active.quizId}
        lessonTitle={title}
        lessonText={lessonSource(programme, isFinal ? programme.lessons.map((l) => l.id) : [active.quizId], isFinal ? 900 : 4000)
          .map((l) => `${l.title}\n${l.text}`)
          .join('\n\n')}
        locked={!graded}
        whyButton={null}
        whyOpenButton={reveal ? { prompt: current.prompt, answer: answers[current.id] ?? '', covered: reveal.covered, missed: reveal.missed, modelAnswer: reveal.modelAnswer } : null}
      />
      <button type="button" onClick={backToProgramme} className="text-sm text-purple-700 underline underline-offset-2">
        {tx.backToProgramme}
      </button>
    </section>
  )
}

function Leave({ run }: { run: () => void }) {
  const done = useRef(false)
  useEffect(() => {
    if (done.current) return
    done.current = true
    run()
  }, [run])
  return null
}
