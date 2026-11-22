'use client'

// PromptQuorum Academy — results (docs/academy/SPEC.md 5.6, 8): overall %, per-topic bars with weak topics flagged,
// pass/fail against 70%, learning time, per-question review of the counting final-test attempt, retake with new
// questions when not passed. The certificate download arrives in Phase 6.

import { useState } from 'react'
import { certificateBlocker, certificateFilename, certificateModel, documentationFilename, NAME_MAX_CHARS } from '@/lib/academy/certificate'
import { getCabinetFlag, putFile } from '@/lib/academy/cabinet'
import { documentationModel } from '@/lib/academy/documentation'
import { sha256Hex } from '@/lib/academy/hash'
import { isSiteLang, languageDisplayName } from '@/lib/academy/language'
import { correctIndexOf, countingFinal, PASS_MARK, programmeScore } from '@/lib/academy/scoring'
import type { AcademyLang, Programme } from '@/lib/academy/types'
import { ALL_LANGS } from '@/lib/i18n/constants'
import { AiBadge } from './AiBadge'
import { creditLabel } from './credit'
import { formatPoints } from '@/lib/academy/format-points'
import { Content } from './Content'
import { ACADEMY_COPY, ACADEMY_LANGUAGE_NAMES, type AcademyCopy } from './copy'
import { renderCertificatePdf, renderCertificatePng } from './certificate-pdf'
import { renderDocumentationPdf } from './documentation-pdf'
import { ShareBar } from './ShareBar'
import { SHARE_COPY } from './copy/share'
import { buildPlanShare } from './share-plan'
import { SuccessShare, trackGrowth } from './SuccessShare'
import { NextTopics } from './NextTopics'
import { defaultDraft } from '@/lib/academy/store'
import { verifyUrl } from '@/lib/academy/qr'
import { StarRating } from './StarRating'
import { LearningRecordCard } from './LearningRecordCard'
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
  const [register, setRegister] = useState(true)
  const [regError, setRegError] = useState(false)
  const [docBlob, setDocBlob] = useState<{ blob: Blob; filename: string } | null>(null)
  const [docBusy, setDocBusy] = useState(false)
  const [shareBusy, setShareBusy] = useState(false)
  const [imageCopied, setImageCopied] = useState(false)
  const registeredNumber = programme.certificate?.number
  const score = programmeScore(programme)
  const final = countingFinal(programme)
  const attempts = programme.progress.finalAttempts?.length ?? 0
  const minutes = Math.round(programme.progress.secondsSpent / 60)
  const back = () => update((s) => ({ ...s, view: 'programme' }))
  // "What to learn next": the chosen topic goes into the setup form with the same language, time and level. The finished
  // program stays in memory until the new one is built, so the certificate above can still be created meanwhile.
  // "Start a new program": clear the finished program (a passed one without a certificate asks first) and open the setup form.
  const startNewProgram = () => {
    if (score?.passed && !programme.certificate && !window.confirm(sx.newProgramConfirm)) return
    update((s) => ({ ...s, view: 'setup', quickCheck: undefined, programme: undefined, draft: s.draft ? { ...s.draft, subject: '', updatedAt: new Date().toISOString() } : s.draft }))
  }
  const startNext = (title: string) =>
    update((s) => ({
      ...s,
      view: 'setup',
      draft: { ...(s.draft ?? defaultDraft(programme.language)), subject: title, language: programme.language, availableMinutes: programme.availableMinutes, selfLevel: programme.selfLevel, updatedAt: new Date().toISOString() },
    }))
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
      const docFile = { blob: new Blob([docBytes as BlobPart], { type: 'application/pdf' }), filename: documentationFilename(model.subject, model.id, { name: model.name, completedAt: model.completedAt }) }
      setDocBlob(docFile)
      const blob = await renderCertificatePdf(model, txc, certLang, { registered: !!number, number })
      // The cabinet (if the learner created one) keeps both files on this computer.
      if (getCabinetFlag() === 'on') {
        const withCert = { ...programme, certificate: { id: model.id, learnerName: model.name, issuedAt: model.issuedAt, number } }
        void putFile(withCert, 'documentation', docFile).catch(() => {})
        void putFile(withCert, 'certificate', { blob, filename: certificateFilename(model.subject, model.id, { name: model.name, completedAt: model.completedAt }) }).catch(() => {})
      }
      update((st) => (st.programme ? { ...st, programme: { ...st.programme, certificate: { id: model.id, learnerName: model.name, issuedAt: model.issuedAt, number } } } : st))
      saveBlob(blob, certificateFilename(model.subject, model.id, { name: model.name, completedAt: model.completedAt }))
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
      const filename = documentationFilename(model.subject, model.id, { name: model.name, completedAt: model.completedAt })
      if (getCabinetFlag() === 'on') void putFile(programme, 'documentation', { blob, filename }).catch(() => {})
      saveBlob(blob, filename)
    } catch (err) {
      console.error('[academy] documentation failed', err instanceof Error ? err.message : err)
      setCertError(true)
    } finally {
      setDocBusy(false)
    }
  }
  // Sharing the finished files themselves (not just a text): the phone's share sheet (WhatsApp, Telegram, ...) gets the PDF
  // attached; where the browser cannot share files, the certificate is copied as an image to paste into a chat.
  const sx = SHARE_COPY[lang]
  // A registered certificate has a public verification page with its own preview image: share that link instead of the plain site URL.
  const publicUrl = registeredNumber && programme.certificate ? verifyUrl(programme.certificate.id) : undefined
  const shareLink = buildPlanShare(programme, lang, sx, score.percent, publicUrl)
  const sharedFile = (kind: 'certificate' | 'documentation' | 'image') => {
    postEvent({ type: 'share_file', kind })
    try {
      window.umami?.track('academy_share_file', { kind, source_page: window.location.pathname })
    } catch {
      /* tracking never blocks sharing */
    }
  }
  const trySharePdf = async (blob: Blob, filename: string, title: string): Promise<boolean> => {
    const data = { files: [new File([blob], filename, { type: 'application/pdf' })], title, text: shareLink.plain }
    if (typeof navigator === 'undefined' || typeof navigator.canShare !== 'function' || !navigator.canShare(data)) return false
    try {
      await navigator.share(data)
    } catch (err) {
      // The learner closing the share sheet is not an error and must not trigger the fallback.
      if (!(err instanceof DOMException && err.name === 'AbortError')) return false
    }
    return true
  }
  const addToLinkedIn = () => {
    const c = programme.certificate
    if (!c) return
    const d = new Date(c.issuedAt)
    const q = new URLSearchParams({
      startTask: 'CERTIFICATION_NAME',
      name: `${tx.cert.title}: ${programme.subject}`.slice(0, 100),
      organizationName: 'PromptQuorum Academy',
      issueYear: String(d.getFullYear()),
      issueMonth: String(d.getMonth() + 1),
      certId: c.id,
      certUrl: publicUrl ?? shareLink.url,
    })
    trackGrowth('linkedin')
    window.open(`https://www.linkedin.com/profile/add?${q.toString()}`, '_blank', 'noopener,noreferrer')
  }
  const certParts = () => {
    const model = certificateModel(programme, name)
    return { model, number: registeredNumber, filename: certificateFilename(model.subject, model.id, { name: model.name, completedAt: model.completedAt }) }
  }
  const copyCertificateImage = async () => {
    if (shareBusy) return
    setShareBusy(true)
    try {
      const { model, number } = certParts()
      const png = renderCertificatePng(model, ACADEMY_COPY[certLang], certLang, { registered: !!number, number })
      // The promise form keeps the clipboard write inside the click gesture (Safari requires it).
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': png })])
      sharedFile('image')
      setImageCopied(true)
      setTimeout(() => setImageCopied(false), 6000)
    } catch (err) {
      console.error('[academy] copy certificate image failed', err instanceof Error ? err.message : err)
      setCertError(true)
    } finally {
      setShareBusy(false)
    }
  }
  const shareCertificate = async () => {
    if (shareBusy) return
    setShareBusy(true)
    try {
      const { model, number, filename } = certParts()
      const blob = await renderCertificatePdf(model, ACADEMY_COPY[certLang], certLang, { registered: !!number, number })
      if (await trySharePdf(blob, filename, `${sx.docTitle}: ${programme.subject}`)) sharedFile('certificate')
      else {
        setShareBusy(false)
        await copyCertificateImage()
      }
    } catch (err) {
      console.error('[academy] certificate share failed', err instanceof Error ? err.message : err)
      setCertError(true)
    } finally {
      setShareBusy(false)
    }
  }
  // WhatsApp / Telegram / Email buttons: send the certificate page itself. A link cannot carry a file, so: phones with file
  // sharing get the PDF in the share sheet; everywhere else the chat opens (synchronously, to avoid popup blocking) and the
  // certificate image is copied to the clipboard, ready to paste.
  const shareCertificateVia = async (href: string) => {
    if (shareBusy) return
    const canFiles = typeof navigator !== 'undefined' && typeof navigator.canShare === 'function' && navigator.canShare({ files: [new File([], 'c.pdf', { type: 'application/pdf' })] })
    if (canFiles) return shareCertificate()
    window.open(href, '_blank', 'noopener,noreferrer')
    await copyCertificateImage()
  }
  const shareDocumentation = async () => {
    if (shareBusy) return
    setShareBusy(true)
    try {
      const model = certificateModel(programme, name)
      const filename = documentationFilename(model.subject, model.id, { name: model.name, completedAt: model.completedAt })
      const blob = docBlob?.blob ?? new Blob([(await renderDocumentationPdf(documentationModel(programme, model, languageName, registeredNumber), ACADEMY_COPY[certLang], certLang, programme.language)) as BlobPart], { type: 'application/pdf' })
      if (await trySharePdf(blob, filename, `${tx.reg.docButton}: ${programme.subject}`)) sharedFile('documentation')
      else saveBlob(blob, filename)
    } catch (err) {
      console.error('[academy] documentation share failed', err instanceof Error ? err.message : err)
      setCertError(true)
    } finally {
      setShareBusy(false)
    }
  }
  // Written answers (free / explain) are graded by AI: say so next to the score whenever any counted result used them.
  const usesWritten = [...programme.progress.quizResults, ...(programme.progress.finalAttempts ?? [])].some((r) => r.openQuestions?.length)
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
          {usesWritten ? tx.quizPoints(score.correct, score.total) : tx.quizScore(score.correct, score.total)}
          {minutes > 0 && ` · ${tx.timeSpent(tx.minutes(minutes))}`}
          {attempts > 1 && ` · ${tx.attemptOf(programme.progress.finalAttempts!.indexOf(final) + 1)}`}
        </p>
      </div>

      {usesWritten && <p className="rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-700">{tx.aiGradedNotice}</p>}

      <LearningRecordCard programme={programme} lang={lang} />

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
                  {t.percent}% ({formatPoints(t.correct, lang)}/{t.total})
                </span>
              </div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-gray-100" role="img" aria-label={`${t.topic}: ${t.percent}%`}>
                <div className={`h-full ${t.weak ? 'bg-amber-500' : 'bg-green-600'}`} style={{ width: `${t.percent}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ShareBar lang={lang} programme={programme} percent={score.percent} onLinkedIn={programme.certificate && !blocker ? addToLinkedIn : undefined} onShareCert={programme.certificate && !blocker ? (href) => void shareCertificateVia(href) : undefined} status={imageCopied ? sx.imageCopied : undefined} />

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
                  <input type="checkbox" role="switch" checked={register} onChange={(e) => setRegister(e.target.checked)} className="peer sr-only" />
                  <span aria-hidden="true" className="relative mt-0.5 inline-block h-5 w-9 shrink-0 rounded-full bg-gray-300 transition-colors after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-purple-600 peer-checked:after:translate-x-4 peer-focus-visible:ring-2 peer-focus-visible:ring-purple-600 peer-focus-visible:ring-offset-2" />
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
            {programme.certificate && !blocker && (
              <div className="space-y-2 rounded-xl border border-purple-100 bg-purple-50/40 p-4" dir={shareLink.dir}>
                <div className="flex flex-wrap gap-2">
                  <button type="button" disabled={shareBusy} onClick={() => void shareCertificate()} className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700 disabled:opacity-50">
                    {sx.shareCert}
                  </button>
                  <button type="button" disabled={shareBusy} onClick={() => void shareDocumentation()} className="rounded-xl border border-purple-600 px-4 py-2 text-sm font-semibold text-purple-700 hover:bg-purple-50 disabled:opacity-50">
                    {sx.shareDoc}
                  </button>
                  <button type="button" disabled={shareBusy} onClick={() => void copyCertificateImage()} className="rounded-xl border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-purple-900 hover:bg-purple-50 disabled:opacity-50">
                    {sx.copyCertImage}
                  </button>
                  <button type="button" onClick={addToLinkedIn} className="rounded-xl border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-purple-900 hover:bg-purple-50">
                    {sx.linkedin}
                  </button>
                </div>
                <SuccessShare lang={lang} subject={programme.subject} percent={score.percent} minutes={Math.max(1, minutes)} heading={false} channels={false} />
                <p className="text-sm text-gray-700" role="status">
                  {imageCopied ? sx.imageCopied : ''}
                </p>
              </div>
            )}
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

      <div>
        <button type="button" onClick={startNewProgram} className="rounded-xl border border-purple-600 px-5 py-2.5 font-semibold text-purple-700 hover:bg-purple-50">
          {sx.newProgram}
        </button>
      </div>

      {final.openQuestions && (
        <details className="rounded-xl border border-gray-200 p-4">
          <summary className="cursor-pointer font-medium text-gray-900">{tx.reviewAnswers}</summary>
          <Content lang={programme.language}>
            <ol className="mt-3 space-y-4">
              {final.openQuestions.map((q, i) => (
                <li key={q.id} className="space-y-1 text-sm">
                  <p className="font-medium text-gray-900">
                    {i + 1}. {q.prompt}
                  </p>
                  <p className="text-gray-800">
                    {tx.yourAnswer}: {final.openAnswers?.[q.id] || '–'}
                  </p>
                  <p className={q.reveal && q.reveal.credit >= 1 ? 'text-green-800' : q.reveal && q.reveal.credit > 0 ? 'text-amber-800' : 'text-red-800'}>
                    {creditLabel(tx, q.reveal?.credit ?? 0)}
                  </p>
                  {q.reveal && (
                    <p className="text-gray-600">
                      {tx.modelAnswerLabel}: {q.reveal.modelAnswer} <AiBadge text={tx.aiLabel} />
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </Content>
        </details>
      )}

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
