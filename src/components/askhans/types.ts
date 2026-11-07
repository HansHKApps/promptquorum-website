export type AskErrorCode = 'disabled' | 'unavailable' | 'rate' | 'limit' | 'refused' | 'failed' | 'rephrase'

import type { SiteOverview } from '@/lib/home/overview'

export interface ChatMsg {
  id: string
  role: 'user' | 'assistant'
  content: string
  /** assistant message that ended in an error (never sent back to the AI) */
  error?: AskErrorCode
  /** transient: assistant message still streaming */
  pending?: boolean
  /** page path → title from the tools used for this answer (descriptive related-link cards) */
  linkTitles?: Record<string, string>
  /** suggested next questions after this answer (clickable chips under the latest answer) */
  followups?: string[]
  /** site overview block, shown once per conversation under the first answer that carries it */
  overview?: SiteOverview
  /** transient: what the AI is doing right now, e.g. "Durchsuche PromptQuorum…" */
  status?: string
}

export interface Conversation {
  id: string
  messages: ChatMsg[]
  category: string
  startedAt: number
}

export interface Rect {
  x: number
  y: number
  w: number
  h: number
}

export interface UiState {
  open: boolean
  maximized: boolean
  /** the window has been closed at least once this visit → the logo stays visible */
  everClosed: boolean
  rect?: Rect
}

export interface ConsentRecord {
  value: 'yes' | 'no'
  /** visitor chose to keep conversations on this device for ASK_HANS_HISTORY_DAYS days */
  saveHistory?: boolean
  textVersion: string
  ts: string
}
