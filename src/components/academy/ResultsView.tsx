'use client'

// PromptQuorum Academy — results (docs/academy/SPEC.md 5.6, 8): overall %, per-topic bars with weak topics flagged,
// pass/fail against 70%, learning time, per-question review of the counting final-test attempt, retake with new
// questions when not passed. The certificate download arrives in Phase 6.

import { useState } from 'react'
import { certificateBlocker, certificateFilename, certificateModel, NAME_MAX_CHARS } from '@/lib/academy/certificate'
import { correctIndexOf, countingFinal, PASS_MARK, programmeScore } from '@/lib/academy/scoring'
import type { Programme } from '@/lib/academy/types'
import { AiBadge } from './AiBadge'
import { Content } from './Content'
import { ACADEMY_COPY, type AcademyCopy } from './copy'
import { renderCertificatePdf } from './certificate-pdf'
import type { useAcademyState } from './useAcademyState'

type Update = ReturnType<typeof useAcademyState>['update']

export function ResultsView({ tx, programme, update }: { tx: AcademyCopy; programme: Programme; update: Update }) {
  const [name, setName] = useState(programme.certificate?.learnerName ?? '')
  const [creating, setCreating] = useState(false)
  const [certError, setCertError] = useState(false)
  const score = programmeScore(programme)
  const final = countingFinal(programme)
  const attempts = programme.progress.finalAttempts?.length ?? 0
  const minutes = Math.round(programme.progress.secondsSpent / 60)
  const back = () => update((s) => ({ ...s, view: 'programme' }))
  if (!score || !final) {
    return null
  }
  const weak = score.byTopic.filter((t) => t.weak)
  const blocker = certificateBlocker(programme, name)
  const blockerText =
    !blocker ? '' : blocker.code === 'name' ? tx.certNeedName : blocker.code === 'lessons' ? tx.certNeedLessons(blocker.done, blocker.total) : blocker.code === 'quizzes' ? tx.certNeedQuizzes : ''
  // The certificate is written in the programme language, like the lessons.
  const download = async () => {
    if (blocker || creating) return
    setCertError(false)
    setCreating(true)
    try {
      const model = certificateModel(programme, name)
      const blob = await renderCertificatePdf(model, ACADEMY_COPY[programme.language], programme.language)
      update((st) => (st.programme ? { ...st, programme: { ...st.programme, certificate: { id: model.id, learnerName: model.name, issuedAt: model.issuedAt } } } : st))
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = certificateFilename(model.subject, model.id)
      document.body.appendChild(a)
      a.click()
      a.remove()
      setTimeout(() => URL.revokeObjectURL(url), 10_000)
      // Anonymous total only (no body beyond the event type); never blocks or fails the download.
      void fetch('/api/academy/event', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'certificate' }) }).catch(() => {})
    } catch (err) {
      console.error('[academy] certificate failed', err instanceof Error ? err.message : err)
      setCertError(true)
    } finally {
      setCreating(false)
    }
  }
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
          <div className="w-full space-y-3">
            <div>
              <label htmlFor="academy-cert-name" className="block text-sm font-medium text-gray-900">
                {tx.certNameLabel}
              </label>
              <input
                id="academy-cert-name"
                type="text"
                value={name}
                maxLength={NAME_MAX_CHARS}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
                aria-describedby="academy-cert-hint academy-cert-reason"
                className="mt-1 w-full max-w-md rounded-xl border border-gray-300 px-4 py-2 text-base focus:border-purple-600 focus:outline-none"
              />
              <p id="academy-cert-hint" className="mt-1 text-sm text-gray-600">
                {tx.certNameHint}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                disabled={!!blocker || creating}
                aria-disabled={!!blocker || creating}
                onClick={() => void download()}
                className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {creating ? tx.certCreating : tx.downloadCertificate}
              </button>
              <p id="academy-cert-reason" className="text-sm text-gray-700" role="status">
                {certError ? tx.certError : blocker ? blockerText : ''}
              </p>
            </div>
          </div>
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
          <Content lang={programme.language}>
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
          </Content>
        </details>
      )}

      <button type="button" onClick={back} className="text-sm text-purple-700 underline underline-offset-2">
        {tx.backToProgramme}
      </button>
    </section>
  )
}
