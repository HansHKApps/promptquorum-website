'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useAskCopy } from './copy'

interface Props {
  /** the typed question waiting to be sent after the visitor chooses */
  pendingQuestion: string | null
  onChoose: (value: 'yes' | 'no', saveHistory: boolean) => void
}

// Both buttons are equally prominent on purpose: the chat works either way, "Ja" only adds anonymous usage logging.
export function ConsentNotice({ pendingQuestion, onChoose }: Props) {
  const tx = useAskCopy()
  // Opt-in, off by default: nothing is saved unless the visitor ticks this.
  const [save, setSave] = useState(false)
  return (
    <section aria-labelledby="askhans-consent-title" className="mx-auto max-w-md rounded-xl border border-border bg-white p-4 shadow-sm">
      <h2 id="askhans-consent-title" className="text-[15px] font-bold text-foreground">{tx.consentTitle}</h2>
      {tx.consentParagraphs.map((p) => (
        <p key={p.slice(0, 20)} className="mt-2 text-[13px] leading-relaxed text-foreground">{p}</p>
      ))}
      <p className="mt-2 text-[13px]">
        <Link href={tx.consentPrivacyHref} className="font-medium text-primary underline underline-offset-2">{tx.consentPrivacyLink}</Link>
      </p>
      <label className="mt-3 flex cursor-pointer items-start gap-2 rounded-md border border-border bg-muted px-3 py-2 text-[13px] text-foreground">
        <input type="checkbox" checked={save} onChange={(e) => setSave(e.target.checked)} className="mt-0.5 h-4 w-4 flex-shrink-0 accent-primary" />
        <span>
          <span className="font-semibold">{tx.consentSaveLabel}</span>
          <span className="mt-0.5 block text-[12px] text-muted-foreground">{save ? tx.consentSaveOn : tx.consentSaveOff}</span>
        </span>
      </label>
      {pendingQuestion && (
        <div className="mt-3 rounded-md bg-muted px-3 py-2 text-[13px]">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{tx.consentQuestionLabel}</p>
          <p className="mt-0.5 break-words text-foreground">{pendingQuestion}</p>
        </div>
      )}
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          autoFocus
          onClick={() => onChoose('yes', save)}
          className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {tx.consentYes}
        </button>
        <button
          type="button"
          onClick={() => onChoose('no', save)}
          className="flex-1 rounded-lg border border-primary px-4 py-2.5 text-sm font-semibold text-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {tx.consentNo}
        </button>
      </div>
    </section>
  )
}
