// Audit My AI Setup — "Save my audit". The answers and the finished report are kept ONLY in this browser's
// localStorage, written on the visitor's explicit click and removable at any time. Nothing is sent to a server.
// On read the answers are re-validated against the current questionnaire, so an old save from an earlier
// version of the questions is dropped instead of breaking the screen.

import { parseAnswers } from '@/lib/askhans/solutions/processes'
import type { SolutionAnswers } from '@/lib/askhans/solutions/types'

const KEY = 'pq-ask-hans-audit-v1'
const MAX_REPORT_CHARS = 60_000

export interface SavedAudit {
  /** ISO date (YYYY-MM-DD) the audit was saved */
  savedAt: string
  /** language the report was written in */
  lang: string
  answers: SolutionAnswers
  report: string
}

export function readSavedAudit(): SavedAudit | null {
  try {
    const raw = window.localStorage.getItem(KEY)
    if (!raw) return null
    const v = JSON.parse(raw) as Partial<SavedAudit> | null
    if (!v || typeof v.savedAt !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(v.savedAt) || typeof v.report !== 'string' || typeof v.lang !== 'string') return null
    const answers = parseAnswers('audit', v.answers)
    if (!answers) return null
    return { savedAt: v.savedAt, lang: v.lang.slice(0, 2), answers, report: v.report.slice(0, MAX_REPORT_CHARS) }
  } catch {
    return null
  }
}

/** Returns false when the browser refuses (private mode, quota). */
export function writeSavedAudit(a: SavedAudit): boolean {
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ ...a, report: a.report.slice(0, MAX_REPORT_CHARS) }))
    return true
  } catch {
    return false
  }
}

export function clearSavedAudit(): void {
  try {
    window.localStorage.removeItem(KEY)
  } catch {
    /* nothing to clear */
  }
}

export interface Improvement {
  n: number
  title: string
}

/**
 * The five improvements of an audit report, read from its "### N. Title" headings (the prompt demands exactly
 * this form and no other level-3 headings). Returns [] when the model did not follow it: the report still reads
 * fine, only the "implement" buttons are missing.
 */
export function parseImprovements(report: string): Improvement[] {
  const out: Improvement[] = []
  for (const m of report.matchAll(/^###\s*(\d)\s*[.)]\s*(.+?)\s*$/gm)) {
    const n = Number(m[1])
    const title = m[2].replace(/[*_`#]/g, '').trim().slice(0, 120)
    if (n >= 1 && n <= 5 && title && !out.some((i) => i.n === n)) out.push({ n, title })
  }
  return out.sort((a, b) => a.n - b.n)
}
