// PromptQuorum Academy — the structured data block under every feedback / report / rating mail. It tells the owner what
// the learner was doing and which settings and errors were involved, in fixed English field names (the owner reads it,
// whatever the learner's language). It is only text in the learner's own mail window: the learner sees it, may edit or
// delete any line, and nothing is sent until they press send. Not included: lesson texts, the learner's notes, written
// answers, the name for the certificate, tutor chat, and any email address.

import { peekAcademyState } from './useAcademyState'

interface RecordedError {
  at: string
  url: string
  code: string
}
const errors: RecordedError[] = []

/** Remembers the last failed server calls of this page load (path and error code only, never text). */
export function recordAcademyError(url: string, code: string): void {
  errors.push({ at: new Date().toISOString(), url: url.replace(/\?.*$/, ''), code })
  if (errors.length > 8) errors.shift()
}

const cut = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1)}…` : s)
const num = (n: number) => String(Math.round(n * 10) / 10)

export const CONTEXT_HEADER = '=== Academy diagnostic data (technical; delete any line you do not want to send) ==='

/** `extra`: lines specific to where the mail was started (a lesson title, a rating, a question), added first. */
export function academyContext(opts: { uiLang: string; extra?: string[] }): string {
  const lines: string[] = [CONTEXT_HEADER, ...(opts.extra ?? [])]
  const st = peekAcademyState()
  const p = st?.programme
  const d = st?.draft
  lines.push(`Time: ${new Date().toISOString()} · timezone ${Intl.DateTimeFormat().resolvedOptions().timeZone}`)
  lines.push(`Page: ${window.location.pathname} · UI language: ${opts.uiLang} · browser language: ${navigator.language}`)
  if (st) lines.push(`Screen (view): ${st.view}`)
  if (d) lines.push(`Setup form: subject "${cut(d.subject, 120)}" · language ${d.language} · ${d.availableMinutes} min · level ${d.selfLevel} · test ${d.testMode}/${d.testFormat}/${d.testDifficulty} · save progress ${d.saveProgress ? 'yes' : 'no'}`)
  if (st?.quickCheck) lines.push(`Quick check: ${st.quickCheck.questions.length} questions, answered ${Object.keys(st.quickCheck.answers ?? {}).length}`)
  if (p) {
    const done = p.lessons.filter((l) => p.progress.lessonStatus[l.id] === 'done').length
    lines.push(`Program: "${cut(p.subject, 120)}" · language ${p.language} · level ${p.selfLevel} · planned ${p.availableMinutes} min · test ${p.testMode}/${p.testFormat ?? 'choice'}/${p.testDifficulty ?? 'medium'}`)
    lines.push(`Scope: ${p.objectives.length} objectives · ${p.lessons.length} lessons (${done} done) · current lesson ${p.progress.currentLesson + 1} · active time ${Math.round(p.progress.secondsSpent / 60)} min · program created ${p.createdAt}`)
    lines.push(`Lessons: ${p.lessons.map((l, i) => `${i + 1}) "${cut(l.title, 50)}" ${p.progress.lessonStatus[l.id]}${l.sections.length ? '' : ' [not written yet]'} est ${l.estimatedMinutes}m rec ${Math.round((p.progress.lessonSeconds?.[l.id] ?? 0) / 60)}m`).join(' | ')}`)
    if (p.progress.quizResults.length) lines.push(`Lesson quizzes: ${p.progress.quizResults.map((r) => `${r.quizId} ${num(r.correct)}/${r.total}`).join(' · ')}`)
    const finals = p.progress.finalAttempts ?? (p.progress.finalResult ? [p.progress.finalResult] : [])
    if (finals.length) lines.push(`Final test attempts: ${finals.map((r, i) => `#${i + 1} ${num(r.correct)}/${r.total} (${r.total ? Math.round((r.correct / r.total) * 100) : 0}%${r.openQuestions?.length ? ', written' : ''})`).join(' · ')}`)
    if (p.progress.activeQuiz) lines.push(`Open quiz: ${p.progress.activeQuiz.quizId} · ${p.progress.activeQuiz.questions.length + (p.progress.activeQuiz.openQuestions?.length ?? 0)} questions loaded`)
    if (p.progress.tutor) lines.push(`Tutor used: ${num(p.progress.tutor.used)}`)
    if (p.certificate) lines.push(`Certificate: ${p.certificate.id}${p.certificate.number ? ` · No. ${p.certificate.number}` : ' · not registered'}`)
    lines.push(`Objectives: ${p.objectives.map((o, i) => `${i + 1}) ${cut(o, 90)}`).join(' | ')}`)
  } else if (!d) lines.push('Program: none yet')
  if (errors.length) lines.push(`Recent errors: ${errors.map((e) => `${e.at.slice(11, 19)} ${e.url} ${e.code}`).join(' · ')}`)
  lines.push(`Device: ${cut(navigator.userAgent, 160)} · viewport ${window.innerWidth}x${window.innerHeight} · ${navigator.onLine ? 'online' : 'offline'}`)
  return lines.join('\n')
}

/** Mail body: the learner's own intro line first, then the data block. */
export function feedbackBody(opts: { intro: string; note: string; uiLang: string; extra?: string[] }): string {
  return [opts.intro, '', '', opts.note, '', academyContext({ uiLang: opts.uiLang, extra: opts.extra })].join('\n').slice(0, 7000)
}
