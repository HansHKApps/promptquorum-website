'use client'

// "?" button in the window header. Opens a small panel that explains what Ask Hans is, what it can do and,
// just as important, what it cannot do. Esc closes the panel first (not the whole window).

import { useEffect, useId, useState } from 'react'
import { ASK_HANS_LIMITS } from '@/lib/askhans/config'
import { useAskCopy } from './copy'
import { AskIcon } from './icons'

export function InfoPanel() {
  const tx = useAskCopy()
  const info = tx.info
  const [open, setOpen] = useState(false)
  const titleId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      e.stopPropagation()
      e.preventDefault()
      setOpen(false)
    }
    // Capture phase on window: runs before the window's own document-level Esc handler.
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [open])

  const fill = (t: string) => t.replace('{messages}', String(ASK_HANS_LIMITS.maxMessagesPerVisit)).replace('{chars}', String(ASK_HANS_LIMITS.maxMessageChars))

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={info.label}
        title={info.label}
        aria-expanded={open}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <AskIcon name="CircleHelp" className="h-4 w-4" />
      </button>
      {open && (
        <>
          <button type="button" aria-hidden="true" tabIndex={-1} onClick={() => setOpen(false)} className="absolute inset-0 z-20 cursor-default bg-black/10" />
          <section
            role="region"
            aria-labelledby={titleId}
            className="absolute end-3 top-14 z-30 max-h-[80%] w-[min(94%,440px)] overflow-y-auto rounded-xl border border-border bg-white p-4 shadow-2xl"
          >
            <div className="flex items-start gap-2">
              <h2 id={titleId} className="flex-1 text-[15px] font-bold text-foreground">{info.title}</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={info.close}
                title={info.close}
                className="-me-1 -mt-1 flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <AskIcon name="X" className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-foreground">{info.intro}</p>

            <h3 className="mt-3 text-[12px] font-semibold uppercase tracking-wide text-primary">{info.canTitle}</h3>
            <ul className="mt-1 space-y-1.5">
              {info.can.map((t) => (
                <li key={t} className="flex gap-2 text-[13px] leading-snug text-foreground">
                  <AskIcon name="CircleCheck" className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-3 text-[12px] font-semibold uppercase tracking-wide text-destructive">{info.cannotTitle}</h3>
            <ul className="mt-1 space-y-1.5">
              {info.cannot.map((t) => (
                <li key={t} className="flex gap-2 text-[13px] leading-snug text-foreground">
                  <AskIcon name="CircleX" className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                  <span>{fill(t)}</span>
                </li>
              ))}
            </ul>

            <p className="mt-3 border-t border-border pt-2 text-[11px] leading-snug text-muted-foreground">{info.privacy}</p>
          </section>
        </>
      )}
    </>
  )
}
