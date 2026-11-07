// Power Mode — file names for downloaded reports: promptquorum-<date>-<number>-<topic>.<ext>
// Sorts by date, then by the order the reports were made that day, and names the topic, so several reports
// from one day never collide (browsers would add "(1)") and are easy to find again, especially as PDFs
// (the PDF name comes from the page title while the print dialog is open, see printReport).

const KEY = 'pq-ask-hans-report-seq-v1'

/**
 * The next report number for a day: 1, 2, 3, … counted in this browser only. One report keeps one number for
 * all its formats, so call this once per report, not once per download. Returns null when the browser refuses
 * storage (private mode); the caller then falls back to the time of day.
 */
export function nextReportNumber(isoDate: string): number | null {
  try {
    const raw = window.localStorage.getItem(KEY)
    const prev = raw ? (JSON.parse(raw) as { date?: unknown; n?: unknown }) : null
    const n = prev && prev.date === isoDate && typeof prev.n === 'number' && prev.n >= 0 && prev.n < 999 ? prev.n + 1 : 1
    window.localStorage.setItem(KEY, JSON.stringify({ date: isoDate, n }))
    return n
  } catch {
    return null
  }
}

const slug = (s: string) => s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '')

/** promptquorum-2026-11-07-02-solution-setup-video. The topic is capped so the whole name stays short. */
export function buildFileBase(isoDate: string, seq: number | null, topic: readonly string[], now: Date = new Date()): string {
  const date = /^\d{4}-\d{2}-\d{2}$/.test(isoDate) ? isoDate : now.toISOString().slice(0, 10)
  const number = seq === null ? `${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}` : String(seq).padStart(2, '0')
  const t = slug(topic.filter(Boolean).join(' ')).slice(0, 60).replace(/-+$/g, '')
  return ['promptquorum', date, number, t || 'report'].join('-')
}

/** The visitor's local calendar day as YYYY-MM-DD (the file name follows their clock, not UTC). */
export function localIsoDate(d: Date = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
