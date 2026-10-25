'use client'

import { useState } from 'react'

/** Copies `text` to the clipboard; the text stays visible and selectable next to it, so it also works without JavaScript. */
export function CopyButton({ text, label = 'Copy', doneLabel = 'Copied' }: { text: string; label?: string; doneLabel?: string }) {
  const [done, setDone] = useState(false)
  return (
    <button
      type="button"
      className="no-print rounded-md border border-hub-violet-edge bg-white px-3 py-1 text-xs font-semibold hover:bg-hub-violet-tint"
      onClick={() => {
        navigator.clipboard?.writeText(text).then(() => {
          setDone(true)
          setTimeout(() => setDone(false), 2000)
        }).catch(() => {})
      }}
    >
      {done ? doneLabel : label}
    </button>
  )
}
