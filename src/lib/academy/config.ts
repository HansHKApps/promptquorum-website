// PromptQuorum Academy — tunable constants. Shared by server and browser, so keep it free of server-only imports.

/** localStorage key of the whole Academy state (docs/academy/SPEC.md section 6). */
export const ACADEMY_STORAGE_KEY = 'pq_academy_v1'

/** Time choices on the setup screen, in minutes. */
export const ACADEMY_MINUTE_OPTIONS = [15, 30, 45, 60, 90, 120, 180, 240] as const

export const ACADEMY_SUBJECT_MAX_CHARS = 120
export const ACADEMY_SUBJECT_MIN_CHARS = 2

/** Directory categories shown as subject suggestions (largest first). */
export const ACADEMY_MAX_CATEGORY_TOPICS = 12

/** window event: the stored state was changed outside the Academy component (e.g. "Delete my data"). */
export const ACADEMY_STATE_EVENT = 'academy:state-changed'

/** Path of the tool. Locales are path-prefixed like every other page (/de/academy). */
export const ACADEMY_PATH = '/academy'

/** Runtime kill switch, same pattern as Ask Hans (ASK_HANS_ENABLED). Pages 404 and API routes refuse while off. */
export function academyEnabled(): boolean {
  return process.env.ACADEMY_ENABLED === 'true'
}
