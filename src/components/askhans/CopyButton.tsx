'use client'

// Small "Copy" button for answer bubbles and tables. Copies readable plain text (markdown marks removed,
// links written as "title (url)"), so it pastes cleanly into mails, notes and documents.

import { useEffect, useRef, useState } from 'react'
import { useAskCopy } from './copy'
import { AskIcon } from './icons'

/** Markdown → plain text for the clipboard. */
export function plainText(md: string): string {
  return md
    .replace(/\[([^\]\n]+)\]\(([^)\s]+)\)/g, (_m, t: string, u: string) => (t.trim() === u.trim() ? u : `${t} (${u})`))
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1$2')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^#{1,4}\s+/gm, '')
}

export async function writeClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Older browsers / insecure contexts: select a hidden textarea and use the legacy command.
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    let ok = false
    try {
      ok = document.execCommand('copy')
    } catch {
      ok = false
    }
    document.body.removeChild(ta)
    return ok
  }
}

export function CopyButton({ text, className = '' }: { text: string; className?: string }) {
  const tx = useAskCopy()
  const [done, setDone] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  return (
    <button
      type="button"
      aria-label={tx.copyUi.copyAnswer}
      title={tx.copyUi.copyAnswer}
      onClick={async () => {
        if (!(await writeClipboard(text))) return
        setDone(true)
        if (timer.current) clearTimeout(timer.current)
        timer.current = setTimeout(() => setDone(false), 2000)
      }}
      className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${className}`}
    >
      <AskIcon name={done ? 'Check' : 'Copy'} className="h-3.5 w-3.5" />
      <span role="status">{done ? tx.copyUi.copied : tx.copyUi.copy}</span>
    </button>
  )
}
