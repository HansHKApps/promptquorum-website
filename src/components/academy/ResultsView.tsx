'use client'

// PromptQuorum Academy — results (docs/academy/SPEC.md 5.6, 8): overall %, per-topic bars with weak topics flagged,
// pass/fail against 70%, learning time, per-question review of the counting final-test attempt, retake with new
// questions when not passed. The certificate download arrives in Phase 6.

import { correctIndexOf, countingFinal, PASS_MARK, programmeScore } from '@/lib/academy/scoring'
import type { Programme } from '@/lib/academy/types'
import { AiBadge } from './AiBadge'
import type { AcademyCopy } from './copy'
import type { useAcademyState } from './useAcademyState'

type Update = ReturnType<typeof useAcademyState>['update']

export function ResultsView({ tx, programme, update }: { tx: AcademyCopy; programme: Programme; update: Update }) {
  const score = programmeScore(programme)
  const final = countingFinal(programme)
  const attempts = programme.progress.finalAttempts?.length ?? 0
  const minutes = Math.round(programme.progress.secondsSpent / 60)
  const back = () => update((s) => ({ ...s, view: 'programme' }))
  if (!score || !final) {
    return null
  }
  const weak = score.byTopic.filter((t) => t.weak)
  const retake = () =>
    update((s) => (s.programme ? { ...s, view: 'quiz', programme: { ...s.programme, progress: { ...s.programme.progress, activeQuiz: { quizId: 'final', questions: [], answers: {} } } } } : s))

  return (
    <section aria-labelledby="academy-results" className="space-y-6 rounded-2xl border border-purple-100 bg-white p-5 sm:p-6">
      <div>
        <h2 id="academy-results" className="text-xl font-semibold text-gray-900">
          {tx.resultsTitle}: {programme.subject}
        </h2>
        <p className="mt-3 text-3xl font-bold text-gray-900">{tx.overallScore(score.percent)}</p>
        <p className={`mt-1 font-medium ${score.passed ? 'text-green-700' : 'text-amber-800'}`}>{score.passed ? tx.passedText(PASS_MARK) : tx.notPassedText(PASS_MARK)}</p>
        <p className="mt-1 text-sm text-gray-600">
          {tx.quizScore(score.correct, score.total)}
          {minutes > 0 && ` · ${tx.timeSpent(tx.minutes(minutes))}`}
          {attempts > 1 && ` · ${tx.attemptOf(programme.progress.finalAttempts!.indexOf(final) + 1)}`}
        </p>
      </div>

      <div>
        <h3 className="font-medium text-gray-900">{tx.topicScores}</h3>
        <ul className="mt-3 space-y-3">
          {score.byTopic.map((t) => (
            <li key={t.topic}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-gray-800">
                  {t.topic}
                  {t.weak && <span className="ms-2 rounded-full bg-amber-50 px-2 py-0.5 text-xs text-amber-800">{tx.weakTopic}</span>}
                </span>
                <span className="shrink-0 tabular-nums text-gray-600">
                  {t.percent}% ({t.correct}/{t.total})
                </span>
              </div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-gray-100" role="img" aria-label={`${t.topic}: ${t.percent}%`}>
                <div className={`h-full ${t.weak ? 'bg-amber-500' : 'bg-green-600'}`} style={{ width: `${t.percent}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {score.passed ? (
          <>
            <button type="button" disabled className="cursor-not-allowed rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white opacity-50">
              {tx.downloadCertificate}
            </button>
            <span className="text-sm text-gray-500">{tx.certificateComing}</span>
          </>
        ) : (
          <div className="space-y-2">
            {weak.length > 0 && (
              <p className="text-sm text-gray-700">
                {tx.weakTopicsHint} {weak.map((t) => t.topic).join(', ')}
              </p>
            )}
            <button type="button" onClick={retake} className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
              {tx.retakeFinal}
            </button>
          </div>
        )}
      </div>

      {final.questions && (
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="cursor-pointer font-medium text-gray-900">{tx.reviewAnswers}</summary>
          <ol className="mt-3 space-y-4">
            {final.questions.map((q, i) => {
              const a = final.answers[q.id]
              const correctIndex = correctIndexOf(q)
              const right = a === correctIndex
              const explanation = 'reveal' in q ? q.reveal?.explanationCorrect : (q as { explanationCorrect?: string }).explanationCorrect
              return (
                <li key={q.id} className="space-y-1 text-sm">
                  <p className="font-medium text-gray-900">
                    {i + 1}. {q.prompt}
                  </p>
                  <p className={right ? 'text-green-800' : 'text-red-800'}>
                    {tx.yourAnswer}: {a !== undefined && a >= 0 ? q.options[a] : '–'} {right ? '✓' : '✗'}
                  </p>
                  {!right && (
                    <p className="text-gray-800">
                      {tx.correctAnswer}: {correctIndex !== undefined ? q.options[correctIndex] : '–'}
                    </p>
                  )}
                  <p className="text-gray-600">
                    {explanation} <AiBadge text={tx.aiLabel} />
                  </p>
                </li>
              )
            })}
          </ol>
        </details>
      )}

      <button type="button" onClick={back} className="text-sm text-purple-700 underline underline-offset-2">
        {tx.backToProgramme}
      </button>
    </section>
  )
}
