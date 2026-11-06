// Browser-side persistence for Ask Hans. Conversations are kept in memory only, unless the visitor chose
// "save for 7 days" in the consent step: then they go to localStorage and expire after 7 days. They are
// never sent to the server except as the current chat request.
// Consent lives in localStorage so the notice is not repeated on every visit.

import { ASK_HANS_CONSENT_TEXT_VERSION, ASK_HANS_HISTORY_DAYS, ASK_HANS_STORAGE } from '@/lib/askhans/config'
import type { ConsentRecord, Conversation, UiState } from './types'

function read<T>(storage: Storage | undefined, key: string): T | null {
  try {
    const raw = storage?.getItem(key)
    return raw ? (JSON.parse(raw) as T) : null
  } catch {
    return null
  }
}

function write(storage: Storage | undefined, key: string, value: unknown): void {
  try {
    storage?.setItem(key, JSON.stringify(value))
  } catch {
    // storage full or blocked — the chat still works in memory
  }
}

export function uid(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
}

const HISTORY_MS = ASK_HANS_HISTORY_DAYS * 24 * 60 * 60 * 1000

/** Saved conversations of this device (only exists if the visitor chose to save); expired ones are dropped. */
export function loadConversations(): Conversation[] {
  try {
    sessionStorage.removeItem(ASK_HANS_STORAGE.conversationsLegacy)
  } catch {
    // ignore
  }
  const list = read<Conversation[]>(localStorage, ASK_HANS_STORAGE.conversations)
  if (!Array.isArray(list)) return []
  const cutoff = Date.now() - HISTORY_MS
  // A page reload in the middle of an answer leaves a half-written message behind: mark it as failed.
  return list
    .filter((c) => c && Array.isArray(c.messages) && c.startedAt > cutoff)
    .map((c) => ({
      ...c,
      messages: c.messages.map((m) => (m.pending ? { ...m, pending: false, status: undefined, error: m.content ? undefined : ('failed' as const) } : m)),
    }))
}

export function saveConversations(list: Conversation[]): void {
  write(localStorage, ASK_HANS_STORAGE.conversations, list.filter((c) => c.messages.length > 0))
}

export function clearSavedConversations(): void {
  try {
    localStorage.removeItem(ASK_HANS_STORAGE.conversations)
  } catch {
    // ignore
  }
}

export function loadUi(): UiState {
  return read<UiState>(sessionStorage, ASK_HANS_STORAGE.ui) ?? { open: false, maximized: false, everClosed: false }
}

export function saveUi(ui: UiState): void {
  write(sessionStorage, ASK_HANS_STORAGE.ui, ui)
}

/** Anonymous random visit ID: new per browser tab visit, not derived from or linked to a person. */
export function getVisitId(): string {
  try {
    const existing = sessionStorage.getItem(ASK_HANS_STORAGE.visitId)
    if (existing) return existing
    const id = uid()
    sessionStorage.setItem(ASK_HANS_STORAGE.visitId, id)
    return id
  } catch {
    return uid()
  }
}

/** Returns the stored consent only if it was given for the current consent-text version. */
export function loadConsent(): ConsentRecord | null {
  const c = read<ConsentRecord>(localStorage, ASK_HANS_STORAGE.consent)
  return c && c.textVersion === ASK_HANS_CONSENT_TEXT_VERSION && (c.value === 'yes' || c.value === 'no') ? c : null
}

export function saveConsent(value: 'yes' | 'no', saveHistory: boolean): ConsentRecord {
  const rec: ConsentRecord = { value, saveHistory, textVersion: ASK_HANS_CONSENT_TEXT_VERSION, ts: new Date().toISOString() }
  write(localStorage, ASK_HANS_STORAGE.consent, rec)
  return rec
}

export function clearConsent(): void {
  try {
    localStorage.removeItem(ASK_HANS_STORAGE.consent)
  } catch {
    // ignore
  }
}
