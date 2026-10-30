'use client'

import { Logo } from '@/components/Logo'
import { DE } from './copy'
import { AskIcon } from './icons'

interface Props {
  onPick: (question: string) => void
  disabled?: boolean
}

export function WelcomeBox({ onPick, disabled }: Props) {
  return (
    <section
      aria-label="Willkommen"
      className="rounded-xl border p-4"
      style={{ background: 'hsl(var(--hero-from))', borderColor: 'hsl(var(--hero-edge))' }}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm" aria-hidden="true">
          <Logo size={30} role="presentation" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h2 className="text-[15px] font-bold leading-snug text-foreground">{DE.welcomeTitle}</h2>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{DE.welcomeBody}</p>
        </div>
      </div>
      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {DE.welcomeCards.map((c) => (
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
