'use client'

// Compact welcome card above the first question. Small type, the explanatory sentence only on desktop, and an X
// that dismisses it for the rest of the tab session (sessionStorage) so it never stands between the visitor and the chat.

import { useEffect, useState } from 'react'
import { Logo } from '@/components/Logo'
import { useAskCopy } from './copy'
import { AskIcon } from './icons'

const HIDDEN_KEY = 'askhans.welcome.hidden.v1'

interface Props {
  onPick: (question: string) => void
  /** Power Mode card: switches the window to the guided setups */
  onPower?: () => void
  disabled?: boolean
}

export function WelcomeBox({ onPick, onPower, disabled }: Props) {
  const tx = useAskCopy()
  const [hidden, setHidden] = useState(false)

  // Storage only exists after hydration.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try {
      if (sessionStorage.getItem(HIDDEN_KEY)) setHidden(true)
    } catch {
      // ignore
    }
  }, [])
  /* eslint-enable react-hooks/set-state-in-effect */

  if (hidden) return null

  const dismiss = () => {
    setHidden(true)
    try {
      sessionStorage.setItem(HIDDEN_KEY, '1')
    } catch {
      // ignore
    }
  }

  return (
    <section
      aria-label={tx.welcomeAria}
      className="relative rounded-lg border p-2.5 md:p-3"
      style={{ background: 'hsl(var(--hero-from))', borderColor: 'hsl(var(--hero-edge))' }}
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label={tx.info.close}
        title={tx.info.close}
        className="absolute end-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-white/70 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <AskIcon name="X" className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-2 pe-7">
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm" aria-hidden="true">
          <Logo size={22} role="presentation" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h2 className="text-[13px] font-bold leading-snug text-foreground">{tx.welcomeTitle}</h2>
          <p className="mt-0.5 hidden text-[12px] leading-snug text-muted-foreground md:block">{tx.welcomeBody}</p>
        </div>
      </div>
      {onPower && (
        <button
          type="button"
          onClick={onPower}
          className="mt-2 flex w-full items-center gap-2 rounded-md bg-gradient-to-r from-[hsl(265_60%_48%)] to-[hsl(300_60%_52%)] px-2.5 py-1.5 text-start text-white shadow-sm transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <AskIcon name="Zap" className="h-4 w-4 flex-shrink-0" />
          <span className="min-w-0">
            <span className="block text-[13px] font-bold leading-snug">{tx.powerSwitch}</span>
            <span className="hidden text-[11px] leading-snug text-white/90 md:block">{tx.powerSwitchTitle}</span>
          </span>
        </button>
      )}
      <ul className="mt-2 grid grid-cols-1 gap-1.5 md:grid-cols-2">
        {tx.welcomeCards.map((c) => (
          <li key={c.title}>
            <button
              type="button"
              disabled={disabled}
              onClick={() => onPick(c.question)}
              className="flex h-full w-full items-start gap-1.5 rounded-md border bg-white px-2 py-1.5 text-left text-[12px] font-medium leading-snug text-foreground shadow-sm transition-colors hover:border-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:opacity-60"
              style={{ borderColor: 'hsl(var(--hero-edge))' }}
            >
              <AskIcon name={c.icon} className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
              <span>{c.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
