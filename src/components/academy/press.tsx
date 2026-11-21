// PromptQuorum Academy — reliable "press" handling for answer boxes and option cards.
// Chrome sometimes drops a click (the press and the release must land on the same element, and any re-render or tiny
// movement in between cancels it), so the learner has to click again. A mouse or pen press is therefore acted on
// immediately (pointerdown); touch and keyboard keep using click (touch must stay scrollable). The click that follows
// a handled press is ignored, so nothing runs twice.

import type { PointerEvent, MouseEvent } from 'react'

let lastPress = 0

export function press(fn: () => void): { onPointerDown: (e: PointerEvent) => void; onClick: (e: MouseEvent) => void } {
  return {
    onPointerDown: (e) => {
      if (e.pointerType === 'touch' || e.button !== 0) return
      lastPress = Date.now()
      fn()
    },
    onClick: () => {
      if (Date.now() - lastPress < 700) return
      fn()
    },
  }
}

export type MarkState = 'idle' | 'selected' | 'pending' | 'correct' | 'wrong'

/** Round mark at the start of an answer box: an empty ring, a check when chosen, a spinner while the answer is checked. */
export function Mark({ state }: { state: MarkState }) {
  if (state === 'pending')
    return <span className="h-6 w-6 shrink-0 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" aria-hidden="true" />
  const look =
    state === 'selected' ? 'border-purple-600 bg-purple-600 text-white' : state === 'correct' ? 'border-green-600 bg-green-600 text-white' : state === 'wrong' ? 'border-red-500 bg-red-500 text-white' : 'border-gray-300 bg-white text-transparent'
  return (
    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold leading-none ${look}`} aria-hidden="true">
      {state === 'wrong' ? '✕' : '✓'}
    </span>
  )
}
