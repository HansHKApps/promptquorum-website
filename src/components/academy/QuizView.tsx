'use client'

// PromptQuorum Academy — lesson quiz and final test (docs/academy/SPEC.md 5.5). One question at a time, three
// options, immediate feedback with the explanation, a short result at the end. The quiz in progress (questions and
// answers) is kept in the stored programme, so a reload continues where the learner was.

import { Mark, press, type MarkState } from './press'
import { useCallback, useEffect, useRef, useState } from 'react'
import { scoreQuiz } from '@/lib/academy/scoring'
import type { AcademyErrorCode } from '@/lib/academy/route-errors'
import type { Programme, QuizQuestion, QuizResult } from '@/lib/academy/types'
import { AiBadge } from './AiBadge'
import { Content } from './Content'
import { ReportProblem } from './ReportProblem'
import { TutorPanel } from './TutorPanel'
import type { AcademyCopy } from './copy'
import type { useAcademyState } from './useAcademyState'

type Update = ReturnType<typeof useAcademyState>['update']
type Post = <T>(url: string, body: unknown) => Promise<{ ok: true; data: T } | { ok: false; code: AcademyErrorCode | 'network' }>

/** Lesson text sent as the quiz source (the verifier checks answers against exactly this text). */
export function lessonSource(p: Programme, ids: string[], maxChars: number) {
  return p.lessons
    .filter((l) => ids.includes(l.id))
    .map((l) => ({ title: l.title, topic: l.topic, text: l.sections.map((s) => `${s.heading}\n${s.body}`).join('\n\n').slice(0, maxChars) }))
}

export function QuizView({ tx, programme, update, postJson, errorText }: { tx: AcademyCopy; programme: Programme; update: Update; postJson: Post; errorText: (c: AcademyErrorCode | 'network') => string }) {
  const active = programme.progress.activeQuiz
  // After the last answer the active quiz is cleared; the finished result keeps which quiz it was.
  const [finished, setFinished] = useState<{ result: QuizResult; quizId: string } | null>(null)
  const quizId = finished?.quizId ?? active?.quizId
  const isFinal = quizId === 'final'
  const lessonIndex = programme.lessons.findIndex((l) => l.id === quizId)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<AcademyErrorCode | 'network' | null>(null)
  const [feedbackFor, setFeedbackFor] = useState<string | null>(null)
  const [checking, setChecking] = useState(false)
  // The option just pressed, shown as 'checking' at once so a press never looks like it did nothing.
  const [pending, setPending] = useState<number | null>(null)
  const [checkError, setCheckError] = useState<AcademyErrorCode | 'network' | null>(null)
  const requested = useRef<string | null>(null)

  const updateProgramme = useCallback((fn: (p: Programme) => Programme) => update((s) => (s.programme ? { ...s, programme: fn(s.programme) } : s)), [update])

  const load = useCallback(async () => {
    if (!active) return
    setError(null)
    setLoading(true)
    const ids = isFinal ? programme.lessons.map((l) => l.id) : [active.quizId]
    const res = await postJson<{ questions: QuizQuestion[] }>('/api/academy/quiz', {
      kind: isFinal ? 'final' : 'lesson',
      subject: programme.subject.slice(0, 120),
      language: programme.language,
      selfLevel: programme.selfLevel,
      availableMinutes: programme.availableMinutes,
      lessons: lessonSource(programme, ids, isFinal ? 2500 : 4000),
      objectives: programme.objectives,
    })
    setLoading(false)
    if (!res.ok) return setError(res.code)
    updateProgramme((p) => (p.progress.activeQuiz ? { ...p, progress: { ...p.progress, activeQuiz: { ...p.progress.activeQuiz, questions: res.data.questions } } } : p))
  }, [active, isFinal, programme, postJson, updateProgramme])

  // A quiz stored before answers moved to the server holds the correct answers in the browser: drop it and generate a new one.
  useEffect(() => {
    if (active?.questions.length && active.questions.some((q) => !q.sealed)) {
      requested.current = null
      updateProgramme((p) => (p.progress.activeQuiz ? { ...p, progress: { ...p.progress, activeQuiz: { ...p.progress.activeQuiz, questions: [], answers: {} } } } : p))
    }
  }, [active, updateProgramme])

  useEffect(() => {
    if (!active || active.questions.length || requested.current === active.quizId) return
    requested.current = active.quizId
    void load()
  }, [active, load])

  const backToProgramme = () => update((s) => ({ ...s, view: 'programme' }))

  // Short result after the last question.
  if (finished) {
    const next = lessonIndex >= 0 && lessonIndex + 1 < programme.lessons.length ? lessonIndex + 1 : -1
    return (
      <section className="space-y-4 rounded-2xl border border-purple-100 bg-white p-5 sm:p-6" aria-live="polite">
        <h2 className="text-xl font-semibold text-gray-900">{isFinal ? tx.finalTestTitle : tx.lessonQuizTitle(lessonIndex + 1)}</h2>
        <p className="text-lg text-gray-800">{tx.quizScore(finished.result.correct, finished.result.total)}</p>
        <button
          type="button"
          onClick={() =>
            update((s) =>
              isFinal ? { ...s, view: 'results' } : next >= 0 && s.programme ? { ...s, view: 'lesson', programme: { ...s.programme, progress: { ...s.programme.progress, currentLesson: next } } } : { ...s, view: 'programme' },
            )
          }
          className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700"
        >
          {isFinal ? tx.seeResults : tx.continueLessons}
        </button>
      </section>
    )
  }

  // No quiz and no result to show (e.g. stale screen after a reload): back to the programme.
  if (!active) return <Finisher run={backToProgramme} />
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
  if (loading || !active.questions.length) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-purple-100 bg-white p-6 text-gray-700" role="status" aria-live="polite">
        <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" aria-hidden="true" />
        {tx.preparingQuiz}
      </div>
    )
  }

  const questions = active.questions
  const total = questions.length
  // The question on screen: the one just answered (feedback), else the first unanswered one.
  const current = feedbackFor ? questions.find((q) => q.id === feedbackFor) : questions.find((q) => !(q.id in active.answers))
  if (!current) {
    // All answered (e.g. after a reload): finish now.
    return <Finisher run={() => finish(active.answers)} />
  }
  const index = questions.indexOf(current)
  const chosen = active.answers[current.id]
  const answered = chosen !== undefined

  function finish(answers: Record<string, number>) {
    const resultId = isFinal ? `final-${(programme.progress.finalAttempts?.length ?? 0) + 1}` : active!.quizId
    const result: QuizResult = { ...scoreQuiz(resultId, questions, answers), questions }
    updateProgramme((p) => {
      const progress = { ...p.progress, activeQuiz: undefined }
      if (isFinal) {
        const attempts = [...(p.progress.finalAttempts ?? []), result]
        return { ...p, finalTest: questions, progress: { ...progress, finalAttempts: attempts, finalResult: result } }
      }
      return { ...p, progress: { ...progress, quizResults: [...p.progress.quizResults.filter((r) => r.quizId !== result.quizId), result] } }
    })
    setFeedbackFor(null)
    setFinished({ result, quizId: active!.quizId })
  }

  // The server checks the answer (the key never reaches the browser before this), then the verdict is stored.
  const choose = async (i: number) => {
    if (answered || checking) return
    setCheckError(null)
    setChecking(true)
    setPending(i)
    const res = await postJson<{ correct: boolean; correctIndex: 0 | 1 | 2; explanationCorrect: string; explanationChosen: string | null }>('/api/academy/answer', { sealed: current.sealed, choice: i })
    setChecking(false)
    setPending(null)
    if (!res.ok) return setCheckError(res.code)
    const v = res.data
    updateProgramme((p) => {
      const aq = p.progress.activeQuiz
      if (!aq) return p
      const questions = aq.questions.map((x) => (x.id === current.id ? { ...x, reveal: { correctIndex: v.correctIndex, explanationCorrect: v.explanationCorrect, explanationChosen: v.explanationChosen } } : x))
      return { ...p, progress: { ...p.progress, activeQuiz: { ...aq, questions, answers: { ...aq.answers, [current.id]: i } } } }
    })
    setFeedbackFor(current.id)
  }
  const next = () => {
    const last = index === total - 1
    setFeedbackFor(null)
    if (last) finish(active.answers)
  }

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
          <div className="h-full bg-purple-600 transition-all" style={{ width: `${((index + (answered ? 1 : 0)) / total) * 100}%` }} />
        </div>
      </div>
      <fieldset key={current.id}>
        <Content lang={programme.language}>
          <legend className="text-lg font-medium text-gray-900">{current.prompt}</legend>
          <div className="mt-3 grid gap-2">
          {current.options.map((o, i) => {
            const isCorrect = i === current.reveal?.correctIndex
            const state = !answered ? 'idle' : isCorrect ? 'correct' : i === chosen ? 'wrong' : 'other'
            const cls = {
              idle: pending === i ? 'border-purple-600 bg-purple-50' : 'border-gray-300 hover:border-purple-600 hover:bg-purple-50',
              correct: 'border-green-600 bg-green-50 text-green-900',
              wrong: 'border-red-500 bg-red-50 text-red-900',
              other: 'border-gray-200 text-gray-500',
            }[state]
            return (
              <button key={i} type="button" {...press(() => void choose(i))} disabled={answered || checking} aria-pressed={chosen === i} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-start ${cls}`}>
                <Mark state={(pending === i ? 'pending' : state === 'correct' ? 'correct' : state === 'wrong' ? 'wrong' : 'idle') as MarkState} />
                <span className="min-w-0 flex-1">{o}</span>
              </button>
            )
          })}
          </div>
        </Content>
      </fieldset>
      {checkError && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
          {errorText(checkError)} {tx.retry}
        </p>
      )}
      {answered && current.reveal && (
        <div className={`space-y-2 rounded-xl p-4 text-sm ${chosen === current.reveal.correctIndex ? 'bg-green-50 text-green-900' : 'bg-amber-50 text-amber-900'}`} role="status" aria-live="polite">
          <p className="flex flex-wrap items-center gap-2 font-semibold">
            {chosen === current.reveal.correctIndex ? tx.correctFeedback : tx.wrongFeedback}
            <AiBadge text={tx.aiLabel} />
          </p>
          <Content lang={programme.language} className="space-y-2">
            <p>{current.reveal.explanationCorrect}</p>
            {chosen !== current.reveal.correctIndex && current.reveal.explanationChosen && <p>{current.reveal.explanationChosen}</p>}
          </Content>
          <button type="button" onClick={next} className="mt-1 rounded-xl bg-purple-600 px-5 py-2 font-medium text-white hover:bg-purple-700">
            {index === total - 1 ? tx.seeResult : tx.nextQuestion}
          </button>
        </div>
      )}
      {answered && current.reveal && (
        <ReportProblem tx={tx} lang={programme.language} context={{ question: { prompt: current.prompt, options: current.options, correctIndex: current.reveal.correctIndex } }} />
      )}
      {/* Quiz lock (SPEC 8.6): the tutor is disabled while the question is unanswered; "Why?" exists only after the answer was revealed. */}
      <TutorPanel
        tx={tx}
        programme={programme}
        update={update}
        lessonKey={isFinal ? 'final' : active.quizId}
        lessonTitle={title}
        lessonText={lessonSource(programme, isFinal ? programme.lessons.map((l) => l.id) : [active.quizId], isFinal ? 900 : 4000)
          .map((l) => `${l.title}\n${l.text}`)
          .join('\n\n')}
        locked={!answered}
        whyButton={answered && current.reveal ? { prompt: current.prompt, options: current.options, correctIndex: current.reveal.correctIndex, chosenIndex: chosen } : null}
      />
      <button type="button" onClick={backToProgramme} className="text-sm text-purple-700 underline underline-offset-2">
        {tx.backToProgramme}
      </button>
    </section>
  )
}

function Finisher({ run }: { run: () => void }) {
  const done = useRef(false)
  useEffect(() => {
    if (done.current) return
    done.current = true
    run()
  }, [run])
  return null
}
