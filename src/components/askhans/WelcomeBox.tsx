'use client'

import { Logo } from '@/components/Logo'
import { useAskCopy } from './copy'
import { AskIcon } from './icons'

interface Props {
  onPick: (question: string) => void
  /** Power Mode card: switches the window to the guided setups */
  onPower?: () => void
  disabled?: boolean
}

export function WelcomeBox({ onPick, onPower, disabled }: Props) {
  const tx = useAskCopy()
  return (
    <section
      aria-label={tx.welcomeAria}
      className="rounded-xl border p-4"
      style={{ background: 'hsl(var(--hero-from))', borderColor: 'hsl(var(--hero-edge))' }}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm" aria-hidden="true">
          <Logo size={30} role="presentation" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h2 className="text-[15px] font-bold leading-snug text-foreground">{tx.welcomeTitle}</h2>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{tx.welcomeBody}</p>
        </div>
      </div>
      {onPower && (
        <button
          type="button"
          onClick={onPower}
          className="mt-3 flex w-full items-center gap-3 rounded-lg bg-gradient-to-r from-[hsl(265_60%_48%)] to-[hsl(300_60%_52%)] px-3.5 py-2.5 text-start text-white shadow-sm transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <AskIcon name="Zap" className="h-5 w-5 flex-shrink-0" />
          <span className="min-w-0">
            <span className="block text-[14px] font-bold leading-snug">{tx.powerSwitch}</span>
            <span className="block text-[12px] leading-snug text-white/90">{tx.powerSwitchTitle}</span>
          </span>
        </button>
      )}
      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {tx.welcomeCards.map((c) => (
          <li key={c.title}>
            <button
              type="button"
              disabled={disabled}
              onClick={() => onPick(c.question)}
              className="flex h-full w-full items-start gap-2 rounded-lg border bg-white p-2.5 text-left text-[13px] font-medium leading-snug text-foreground shadow-sm transition-colors hover:border-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:opacity-60"
              style={{ borderColor: 'hsl(var(--hero-edge))' }}
            >
              <AskIcon name={c.icon} className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>{c.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
