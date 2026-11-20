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
/** Address that receives Academy feedback mails (mailto link, same address as Ask Hans). */
export const ACADEMY_CONTACT_EMAIL = 'hello@promptquorum.com'

/**
 * Cost and abuse controls (owner decision 2026-11-20: simple for the test phase, tighten when usage grows).
 * Per visitor (salted IP hash): at most this many generation calls per day, across all Academy routes.
 * Whole site: at most this many generation calls per UTC day, then "busy" until tomorrow. Both overridable with env vars.
 */
export const ACADEMY_DAILY_PER_IP = Number(process.env.ACADEMY_DAILY_PER_IP ?? 150)
export const ACADEMY_DAILY_GLOBAL = Number(process.env.ACADEMY_DAILY_GLOBAL ?? 4000)

export const ACADEMY_STATE_EVENT = 'academy:state-changed'

/** Path of the tool. Locales are path-prefixed like every other page (/de/academy). */
export const ACADEMY_PATH = '/academy'

/** Runtime kill switch, same pattern as Ask Hans (ASK_HANS_ENABLED). Pages 404 and API routes refuse while off. */
export function academyEnabled(): boolean {
  return process.env.ACADEMY_ENABLED === 'true'
}

/** Active-time tracking (SPEC 6.1): counted only while the tab is visible and the learner interacted recently. */
export const ACADEMY_IDLE_AFTER_MS = 60_000
export const ACADEMY_TICK_SECONDS = 5
/** A lesson never counts more than this multiple of its estimated reading time. */
export const ACADEMY_LESSON_TIME_CAP_FACTOR = 3

/** window event: open the Academy window from anywhere (home counter tile, /academy page), like ASK_HANS_OPEN_EVENT. */
export const ACADEMY_OPEN_EVENT = 'academy:open'
/** sessionStorage: window open / maximized / position and size (tab-scoped, never localStorage; same as Ask Hans' UI state). */
export const ACADEMY_UI_KEY = 'academy.ui.v1'
