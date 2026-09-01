'use client'

/**
 * One on-screen slot for interruptive prompts.
 *
 * The site has two independent fixed-position prompts — the Google preferred-sources
 * card (bottom-left, 30s) and the OneSignal push opt-in banner (bottom-centre, 5min
 * cumulative). They were written separately and neither knew about the other, so a
 * reader could be asked for two unrelated things at once. Whoever claims the slot
 * first holds it until it is released; the other waits or skips.
 *
 * Deliberately window-scoped rather than React context: the two prompts sit in
 * different subtrees of the root layout and have no common provider.
 */

const SLOT_KEY = '__pqPromptSlot'

type SlotHolder = { current: string | null }

function slot(): SlotHolder | null {
  if (typeof window === 'undefined') return null
  const w = window as Window & { [SLOT_KEY]?: SlotHolder }
  if (!w[SLOT_KEY]) w[SLOT_KEY] = { current: null }
  return w[SLOT_KEY]!
}

/** Try to take the slot. Returns false if another prompt already holds it. */
export function claimPromptSlot(id: string): boolean {
  const s = slot()
  if (!s) return false
  if (s.current !== null && s.current !== id) return false
  s.current = id
  return true
}

/** Release the slot, but only if this caller is the current holder. */
export function releasePromptSlot(id: string): void {
  const s = slot()
  if (s && s.current === id) s.current = null
}
