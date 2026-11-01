export type AskErrorCode = 'disabled' | 'unavailable' | 'rate' | 'limit' | 'refused' | 'failed' | 'rephrase'

export interface ChatMsg {
  id: string
  role: 'user' | 'assistant'
  content: string
  /** assistant message that ended in an error (never sent back to the AI) */
  error?: AskErrorCode
  /** transient: assistant message still streaming */
  pending?: boolean
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
  textVersion: string
  ts: string
}
