// Ask Hans — engagement counters: is a visit a return visit, and how long was Ask Hans open. Only coarse buckets
// leave the browser (never exact times, dates or IDs), and only for visitors who chose "Yes, I agree".
// Shared by the browser (bucketing), the event route (validation) and the report (display), so keep it free of
// server-only imports.

/** Active seconds with the window open and the tab visible. Order = display order. */
export const DURATION_BUCKETS = ['lt30', '30-120', '120-300', '300-900', 'gt900'] as const
export type DurationBucket = (typeof DURATION_BUCKETS)[number]
/** Representative seconds per bucket, used only for the "average time" estimate in the report. */
export const DURATION_MIDPOINT_S: Record<DurationBucket, number> = { lt30: 15, '30-120': 75, '120-300': 210, '300-900': 600, gt900: 1200 }

export const DAYS_BUCKETS = ['0', '1-7', '8-30', '31+'] as const
export type DaysBucket = (typeof DAYS_BUCKETS)[number]

export const QUESTION_BUCKETS = ['0', '1', '2-3', '4+'] as const
export type QuestionBucket = (typeof QUESTION_BUCKETS)[number]

export const RETURN_KINDS = ['new', 'back'] as const
export type ReturnKind = (typeof RETURN_KINDS)[number]

export function durationBucket(seconds: number): DurationBucket {
  if (seconds < 30) return 'lt30'
  if (seconds < 120) return '30-120'
  if (seconds < 300) return '120-300'
  if (seconds < 900) return '300-900'
  return 'gt900'
}

export function daysBucket(days: number): DaysBucket {
  if (days <= 0) return '0'
  if (days <= 7) return '1-7'
  if (days <= 30) return '8-30'
  return '31+'
}

export function questionBucket(n: number): QuestionBucket {
  if (n <= 0) return '0'
  if (n === 1) return '1'
  if (n <= 3) return '2-3'
  return '4+'
}

export const isDurationBucket = (v: unknown): v is DurationBucket => (DURATION_BUCKETS as readonly unknown[]).includes(v)
export const isDaysBucket = (v: unknown): v is DaysBucket => (DAYS_BUCKETS as readonly unknown[]).includes(v)
export const isQuestionBucket = (v: unknown): v is QuestionBucket => (QUESTION_BUCKETS as readonly unknown[]).includes(v)
export const isReturnKind = (v: unknown): v is ReturnKind => (RETURN_KINDS as readonly unknown[]).includes(v)
