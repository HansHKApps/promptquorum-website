// PromptQuorum Academy — "challenge a friend" links and the learning streak. Both are browser-only and carry no personal
// data: a challenge link holds only the subject text and the score to beat; the streak is a local day counter.

/** Query parameters of a challenge link: /academy?challenge=<subject>&beat=<percent> (also under /de/academy etc.). */
export const CHALLENGE_PARAM = 'challenge'
export const BEAT_PARAM = 'beat'
/** sessionStorage: a challenge read from the URL, waiting for the setup form to pick it up (tab-scoped). */
export const CHALLENGE_STORAGE_KEY = 'academy.challenge.v1'
/** localStorage: functional streak record { last: 'YYYY-MM-DD', days, best }; removed by "Delete my data". */
export const ACADEMY_STREAK_KEY = 'pq_academy_streak'
export const ACADEMY_STREAK_EVENT = 'academy:streak'

/** A link is untrusted input shown to the visitor: same limits as the registry subject (no links, addresses or markup). */
const BLOCKED = /https?:\/\/|www\.|@|[<>]/i

export function sanitizeChallengeSubject(raw: string | null | undefined): string | null {
  if (!raw) return null
  // control characters, line breaks and tabs all fold into single spaces
  const s = raw.replace(/[\s\p{Cc}]+/gu, ' ').trim()
  if (s.length < 2 || s.length > 120 || BLOCKED.test(s)) return null
  return s
}

export function sanitizeBeat(raw: string | null | undefined): number | null {
  const n = Number(raw)
  return Number.isInteger(n) && n >= 1 && n <= 100 ? n : null
}

export interface Challenge {
  subject: string
  beat: number | null
}

export function readChallenge(search: string): Challenge | null {
  const q = new URLSearchParams(search)
  const subject = sanitizeChallengeSubject(q.get(CHALLENGE_PARAM))
  return subject ? { subject, beat: sanitizeBeat(q.get(BEAT_PARAM)) } : null
}

export function challengeLink(base: string, subject: string, percent: number): string {
  const u = new URL(base)
  u.searchParams.set(CHALLENGE_PARAM, subject)
  u.searchParams.set(BEAT_PARAM, String(Math.round(percent)))
  return u.toString()
}

// ------------------------------------------------------------------------------------------------ streak

export interface Streak {
  last: string
  days: number
  best: number
}

const dayKey = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

function readRaw(): Streak | null {
  try {
    const v = JSON.parse(localStorage.getItem(ACADEMY_STREAK_KEY) ?? 'null') as Streak | null
    return v && typeof v.last === 'string' && Number.isFinite(v.days) && Number.isFinite(v.best) ? v : null
  } catch {
    return null
  }
}

/** Current streak length: still alive when the last active day was today or yesterday, else 0. */
export function currentStreak(now = new Date()): number {
  const s = readRaw()
  if (!s) return 0
  const yesterday = new Date(now)
  yesterday.setDate(now.getDate() - 1)
  return s.last === dayKey(now) || s.last === dayKey(yesterday) ? s.days : 0
}

/** Call when the learner finishes a lesson or a quiz. Counts each calendar day once. */
export function recordActiveDay(now = new Date()): number {
  const prev = readRaw()
  const today = dayKey(now)
  if (prev?.last === today) return prev.days
  const yesterday = new Date(now)
  yesterday.setDate(now.getDate() - 1)
  const days = prev?.last === dayKey(yesterday) ? prev.days + 1 : 1
  try {
    localStorage.setItem(ACADEMY_STREAK_KEY, JSON.stringify({ last: today, days, best: Math.max(days, prev?.best ?? 0) } satisfies Streak))
    window.dispatchEvent(new Event(ACADEMY_STREAK_EVENT))
  } catch {
    /* blocked: the streak simply is not kept */
  }
  return days
}

// ------------------------------------------------------------------------------------------------ reminder

const icsText = (s: string) => s.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/[,;]/g, (c) => `\\${c}`)
const icsDate = (d: Date) => `${dayKey(d).replace(/-/g, '')}T${String(d.getHours()).padStart(2, '0')}${String(d.getMinutes()).padStart(2, '0')}00`

/** A weekly calendar event (.ics), floating local time, first one tomorrow at 18:00. Stays on the learner's device. */
export function reminderIcs(title: string, url: string, now = new Date()): string {
  const start = new Date(now)
  start.setDate(now.getDate() + 1)
  start.setHours(18, 0, 0, 0)
  const stamp = `${now.toISOString().replace(/[-:]/g, '').slice(0, 15)}Z`
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//PromptQuorum//Academy//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:academy-weekly-${now.getTime()}@promptquorum.com`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${icsDate(start)}`,
    'DURATION:PT30M',
    'RRULE:FREQ=WEEKLY',
    `SUMMARY:${icsText(title)}`,
    `DESCRIPTION:${icsText(url)}`,
    `URL:${url}`,
    'END:VEVENT',
    'END:VCALENDAR',
    '',
  ].join('\r\n')
}
