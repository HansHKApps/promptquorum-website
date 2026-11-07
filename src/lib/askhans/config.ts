// Ask Hans — tunable constants. Hans can change these without touching any logic.
// Shared by the server (api/ask) and the browser widget, so keep it free of server-only imports.

export const ASK_HANS_LIMITS = {
  /** Max characters in one visitor message. */
  maxMessageChars: 500,
  /** Max visitor messages per visit (per anonymous visit ID, 24 h window). */
  maxMessagesPerVisit: 50,
  /** Per-visitor rate limit: this many requests per window. */
  rateLimitRequests: 8,
  rateLimitWindow: '1 m' as const,
  /** Max MCP tool calls the AI may make for one answer. */
  maxToolCallsPerAnswer: 8,
  /** Max characters of one tool result handed to the AI (keeps token cost bounded). */
  maxToolResultChars: 14_000,
  /** Max output tokens for one AI turn. */
  maxOutputTokens: 3000,
  /** Hard wall-clock limit for one answer. */
  answerTimeoutMs: 55_000,
  /** Suggested follow-up questions are skipped when the answer itself took longer than this. */
  followupDeadlineMs: 40_000,
  /** Time limit of the follow-up suggestion call. */
  followupTimeoutMs: 8_000,
} as const

/** Window geometry (desktop). Mobile is always full screen. */
export const ASK_HANS_WINDOW = {
  /** Default size as a percentage of the viewport. */
  defaultWidthPct: 50,
  defaultHeightPct: 80,
  /** Minimum size: a fraction of the viewport, but never below the pixel floor. */
  minWidthPct: 32,
  minHeightPct: 40,
  minWidthPx: 420,
  minHeightPx: 360,
  /** Below this viewport width the window is full screen and the panel becomes a strip. */
  mobileBreakpointPx: 768,
} as const

/** Marketing panel split inside the window: chat gets 2/3, panel 1/3. */
export const ASK_HANS_SPLIT = { chatFr: 2, panelFr: 1 } as const

/** Power Mode reports: long, structured, written by a stronger model, so the limits are much tighter than chat. */
export const ASK_HANS_SOLUTION_LIMITS = {
  /** Per-IP rate limit: this many reports per window. */
  rateLimitRequests: 3,
  rateLimitWindow: '10 m' as const,
  /** Max reports per anonymous visit ID per 24 h. */
  maxPerVisit: 6,
  /** Max MCP tool calls while writing one report. */
  maxToolCalls: 10,
  /** Max output tokens of one report. */
  maxOutputTokens: 6000,
  /** Hard wall-clock limit for one report (the route's maxDuration is 120 s). */
  timeoutMs: 110_000,
} as const

export const ASK_HANS_DEFAULT_MODEL = 'claude-haiku-5-5'
/** Model that writes Power Mode reports; override with the ASK_HANS_SOLUTION_MODEL env var. */
export const ASK_HANS_SOLUTION_DEFAULT_MODEL = 'claude-sonnet-5-5'

/** Bump when the consent text changes; stored with every consent value as proof. */
export const ASK_HANS_CONSENT_TEXT_VERSION = '2026-11-07-v6'

/** Days a given consent stays valid; after that the notice is shown again. Stated in the privacy policy. */
export const ASK_HANS_CONSENT_DAYS = 30

/** Active seconds with Ask Hans open after which the promo card replaces the topic picture (once per visit). */
export const ASK_HANS_PROMO_AFTER_S = 120

/** Days a saved conversation stays on the visitor's device (only if they chose to save). */
export const ASK_HANS_HISTORY_DAYS = 7

export const ASK_HANS_STORAGE = {
  /** localStorage, ONLY if the visitor ticked "save for 7 days" in the consent step: saved conversations. */
  conversations: 'askhans.conversations.v2',
  /** old sessionStorage key (v1): removed on load. */
  conversationsLegacy: 'askhans.conversations.v1',
  /** sessionStorage: window open/closed/maximized + size. */
  ui: 'askhans.ui.v1',
  /** localStorage: consent value + text version + timestamp. */
  consent: 'askhans.consent.v1',
  /** sessionStorage: anonymous random visit ID (not linked to a person). */
  visitId: 'askhans.visit.v1',
  /** localStorage, ONLY with consent "Yes": first-visit day + number of visits (return-visit counter; never sent as such). */
  usage: 'askhans.usage.v1',
  /** sessionStorage: this browser session has already been counted as a visit. */
  usageSession: 'askhans.usage.session.v1',
  /** sessionStorage: the 2-minute promo card was already shown in this visit. */
  promoShown: 'askhans.promo.v1',
} as const

/** window CustomEvent: open Ask Hans; detail: { question?: string } */
export const ASK_HANS_OPEN_EVENT = 'askhans:open'
