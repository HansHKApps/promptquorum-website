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

export const ASK_HANS_DEFAULT_MODEL = 'claude-haiku-5-5'

/** Bump when the consent text changes; stored with every consent value as proof. */
export const ASK_HANS_CONSENT_TEXT_VERSION = '2026-11-02-draft-2'

export const ASK_HANS_STORAGE = {
  /** sessionStorage: conversations of this visit. */
  conversations: 'askhans.conversations.v1',
  /** sessionStorage: window open/closed/maximized + size. */
  ui: 'askhans.ui.v1',
  /** localStorage: consent value + text version + timestamp. */
  consent: 'askhans.consent.v1',
  /** sessionStorage: anonymous random visit ID (not linked to a person). */
  visitId: 'askhans.visit.v1',
} as const

/** window CustomEvent: open Ask Hans; detail: { question?: string } */
export const ASK_HANS_OPEN_EVENT = 'askhans:open'
