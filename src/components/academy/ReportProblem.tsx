'use client'

// PromptQuorum Academy — "Report a problem": a mailto link to the site owner with the question or lesson prefilled so
// the owner can see exactly what is meant. Nothing is stored on our server; the learner sees and may edit the mail
// before sending. The click is counted anonymously.

import { ACADEMY_CONTACT_EMAIL } from '@/lib/academy/config'
import type { AcademyCopy } from './copy'

export interface ReportContext {
  lesson?: string
  question?: { prompt: string; options: string[]; correctIndex?: number }
}

export function ReportProblem({ tx, lang, context }: { tx: AcademyCopy; lang: string; context: ReportContext }) {
  const r = tx.report
  const open = () => {
    void fetch('/api/academy/event', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'report_mail' }) }).catch(() => {})
    const q = context.question
    const lines = [
      r.mailIntro,
      '',
      '',
      '---',
      context.lesson ? `${r.lesson}: ${context.lesson}` : '',
      q ? `${r.question}: ${q.prompt}` : '',
      q ? `${r.options}: ${q.options.map((o, i) => `${i + 1}) ${o}`).join(' ')}` : '',
      q && q.correctIndex !== undefined ? `${r.marked}: ${q.correctIndex + 1}` : '',
      `${tx.feedbackMailLanguage}: ${lang}`,
      window.location.pathname,
    ].filter((l, i) => l !== '' || i < 4)
    window.location.href = `mailto:${ACADEMY_CONTACT_EMAIL}?subject=${encodeURIComponent(r.mailSubject)}&body=${encodeURIComponent(lines.join('\n'))}`
  }
  return (
    <span className="inline-flex flex-col">
      <button type="button" onClick={open} className="text-start text-sm text-gray-600 underline underline-offset-2 hover:text-purple-700">
        {r.link}
      </button>
      <span className="text-xs text-gray-500">{r.note}</span>
    </span>
  )
}
