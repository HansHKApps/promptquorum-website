'use client'

// PromptQuorum Academy — results (docs/academy/SPEC.md 5.6, 8): overall %, per-topic bars with weak topics flagged,
// pass/fail against 70%, learning time, per-question review of the counting final-test attempt, retake with new
// questions when not passed. The certificate download arrives in Phase 6.

import { useState } from 'react'
import { certificateBlocker, certificateFilename, certificateModel, documentationFilename, NAME_MAX_CHARS } from '@/lib/academy/certificate'
import { documentationModel } from '@/lib/academy/documentation'
import { sha256Hex } from '@/lib/academy/hash'
import { isSiteLang, languageDisplayName } from '@/lib/academy/language'
import { correctIndexOf, countingFinal, PASS_MARK, programmeScore } from '@/lib/academy/scoring'
import type { AcademyLang, Programme } from '@/lib/academy/types'
import { ALL_LANGS } from '@/lib/i18n/constants'
import { AiBadge } from './AiBadge'
import { Content } from './Content'
import { ACADEMY_COPY, ACADEMY_LANGUAGE_NAMES, type AcademyCopy } from './copy'
import { renderCertificatePdf } from './certificate-pdf'
import { renderDocumentationPdf } from './documentation-pdf'
import { StarRating } from './StarRating'
import type { useAcademyState } from './useAcademyState'

type Update = ReturnType<typeof useAcademyState>['update']

function saveBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 10_000)
}

function postEvent(body: unknown) {
  void fetch('/api/academy/event', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).catch(() => {})
}

export function ResultsView({ tx, lang, programme, update }: { tx: AcademyCopy; lang: AcademyLang; programme: Programme; update: Update }) {
  const [name, setName] = useState(programme.certificate?.learnerName ?? '')
  const [creating, setCreating] = useState(false)
  const [certError, setCertError] = useState(false)
  // The certificate and the Course Documentation are written in a language chosen here (default: the programme language if the site has it).
  const [certLang, setCertLang] = useState<AcademyLang>(isSiteLang(programme.language) ? programme.language : lang)
  // Opt-in registry (unticked by default): only then a record is stored and a QR code is printed.
  const [register, setRegister] = useState(false)
  const [regError, setRegError] = useState(false)
  const [docBlob, setDocBlob] = useState<{ blob: Blob; filename: string } | null>(null)
  const [docBusy, setDocBusy] = useState(false)
  const registeredNumber = programme.certificate?.number
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
  const languageName = isSiteLang(programme.language) ? ACADEMY_LANGUAGE_NAMES[programme.language] : languageDisplayName(programme.language)
  const post = async <T,>(url: string, body: unknown): Promise<T | null> => {
    try {
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      return res.ok ? ((await res.json()) as T) : null
    } catch {
      return null
    }
  }
  const download = async () => {
    if (blocker || creating) return
    setCertError(false)
    setRegError(false)
    setCreating(true)
    try {
      const txc = ACADEMY_COPY[certLang]
      const model = certificateModel(programme, name)
      // Persist ID and issue date first: a retry after a failure must reuse them and never register a second record.
      if (!programme.certificate) update((st) => (st.programme ? { ...st, programme: { ...st.programme, certificate: { id: model.id, learnerName: model.name, issuedAt: model.issuedAt } } } : st))
      let number = registeredNumber
      // Step 1: opt-in registration returns the sequential number (printed on both files).
      if (register && !number) {
        const r1 = await post<{ number: number }>('/api/academy/register', { id: model.id, issuedAt: model.issuedAt, percent: model.percent, minutes: model.learningMinutes, subject: model.subject, language: programme.language, testMode: model.testMode })
        if (r1?.number) number = r1.number
        else setRegError(true)
      }
      const docBytes = await renderDocumentationPdf(documentationModel(programme, model, languageName, number), txc, certLang, programme.language)
      // Step 2: the fingerprint of exactly this documentation file is stored once, for the check on the verification page.
      if (number && !registeredNumber) await post('/api/academy/register', { id: model.id, issuedAt: model.issuedAt, percent: model.percent, minutes: model.learningMinutes, subject: model.subject, language: programme.language, testMode: model.testMode, hash: await sha256Hex(docBytes) })
      setDocBlob({ blob: new Blob([docBytes as BlobPart], { type: 'application/pdf' }), filename: documentationFilename(model.subject, model.id) })
      const blob = await renderCertificatePdf(model, txc, certLang, { registered: !!number, number })
      update((st) => (st.programme ? { ...st, programme: { ...st.programme, certificate: { id: model.id, learnerName: model.name, issuedAt: model.issuedAt, number } } } : st))
      saveBlob(blob, certificateFilename(model.subject, model.id))
      // Anonymous total only (no body beyond the event type); never blocks or fails the download.
      postEvent({ type: 'certificate' })
    } catch (err) {
      console.error('[academy] certificate failed', err instanceof Error ? err.message : err)
      setCertError(true)
    } finally {
      setCreating(false)
    }
  }
  // The Course Documentation on its own (after a reload or when the certificate was created earlier).
  const downloadDocumentation = async () => {
    if (blocker || docBusy) return
    if (docBlob) return saveBlob(docBlob.blob, docBlob.filename)
    setDocBusy(true)
    try {
      const model = certificateModel(programme, name)
      // Keep the ID and issue date stable, so a certificate created later carries the same ones.
      if (!programme.certificate) update((st) => (st.programme ? { ...st, programme: { ...st.programme, certificate: { id: model.id, learnerName: model.name, issuedAt: model.issuedAt } } } : st))
      const bytes = await renderDocumentationPdf(documentationModel(programme, model, languageName, registeredNumber), ACADEMY_COPY[certLang], certLang, programme.language)
      const blob = new Blob([bytes as BlobPart], { type: 'application/pdf' })
      saveBlob(blob, documentationFilename(model.subject, model.id))
    } catch (err) {
      console.error('[academy] documentation failed', err instanceof Error ? err.message : err)
      setCertError(true)
    } finally {
      setDocBusy(false)
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

      <StarRating tx={tx} kind="programme" lang={programme.language} />

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
            <div>
              <label htmlFor="academy-cert-lang" className="block text-sm font-medium text-gray-900">
                {tx.lang.certLabel}
              </label>
              <select id="academy-cert-lang" value={certLang} onChange={(e) => setCertLang(e.target.value as AcademyLang)} className="mt-1 rounded-xl border border-gray-300 bg-white px-4 py-2 text-base">
                {ALL_LANGS.map((l) => (
                  <option key={l} value={l}>
                    {ACADEMY_LANGUAGE_NAMES[l]}
                  </option>
                ))}
              </select>
            </div>
            <fieldset className="max-w-2xl rounded-xl border border-gray-200 p-3">
              <legend className="px-1 text-sm font-medium text-gray-900">{tx.reg.title}</legend>
              {registeredNumber ? (
                <p className="text-sm text-green-800">{tx.reg.done(registeredNumber)}</p>
              ) : (
                <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-800">
                  <input type="checkbox" checked={register} onChange={(e) => setRegister(e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-purple-600" />
                  <span>{tx.reg.optIn}</span>
                </label>
              )}
              <p className="mt-2 text-xs text-gray-600">{tx.reg.data}</p>
              <p className="mt-1 text-xs text-gray-600">{tx.reg.deleteNote}</p>
              {regError && (
                <p className="mt-2 text-sm text-red-800" role="alert">
                  {tx.reg.error}
                </p>
              )}
            </fieldset>
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
              <button
                type="button"
                disabled={!!blocker || docBusy || creating}
                onClick={() => void downloadDocumentation()}
                className="rounded-xl border border-purple-600 px-6 py-3 font-semibold text-purple-700 hover:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {docBusy ? tx.reg.docCreating : tx.reg.docButton}
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
