'use client'

// Share row for the learning plan and the final result: WhatsApp, Telegram, email, copy, Word, PDF. Links and the
// file download reuse the Ask Hans helpers (shareHref, writeRich, downloadBlob). Nothing is sent to PromptQuorum:
// every button opens the learner's own app, clipboard, file or print dialog.

import { useRef, useState } from 'react'
import { downloadBlob } from '@/components/askhans/power/export/download'
import { shareHref, writeRich, type ShareChannel } from '@/components/askhans/share'
import type { AcademyLang, Programme } from '@/lib/academy/types'
import { ACADEMY_COPY } from './copy'
import { SHARE_COPY } from './copy/share'
import { buildPlanShare, clipboardHtml, fileStem, planDocx, printPlan } from './share-plan'

const BTN = 'inline-flex items-center gap-2 rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm font-medium text-purple-900 hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600'

const CHANNELS: { key: ShareChannel; label: string; bg: string }[] = [
  { key: 'whatsapp', label: 'WhatsApp', bg: '#128c7e' },
  { key: 'telegram', label: 'Telegram', bg: '#1e96c8' },
  { key: 'email', label: 'Email', bg: '#c5221f' },
]

/** `onShareCert` (set when a certificate exists): WhatsApp/Telegram/Email then send the certificate itself, not only a text. */
/** `onLinkedIn` is set only when a certificate exists: it opens LinkedIn's "Add certification" form prefilled, so the learner saves it to their profile. */
export function ShareBar({ lang, programme, percent, onLinkedIn, onShareCert, status }: { lang: AcademyLang; programme: Programme; percent?: number; onLinkedIn?: () => void; onShareCert?: (href: string) => void; status?: string }) {
  const sx = SHARE_COPY[lang]
  const tx = ACADEMY_COPY[lang]
  const [copied, setCopied] = useState(false)
  const [busy, setBusy] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const share = buildPlanShare(programme, lang, sx, percent)

  const copy = async () => {
    if (await writeRich({ html: clipboardHtml(share, sx), plain: share.plain })) {
      setCopied(true)
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    }
  }
  const word = async () => {
    if (busy) return
    setBusy(true)
    try {
      downloadBlob(await planDocx(share, sx, tx.minutes), `${fileStem(share.title)}.docx`)
    } catch (err) {
      console.error('[academy] word export failed', err instanceof Error ? err.message : err)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="space-y-2 rounded-xl border border-purple-100 bg-purple-50/40 p-4" dir={share.dir}>
      <p className="font-medium text-gray-900">{percent !== undefined ? sx.result : sx.plan}</p>
      <div className="flex flex-wrap gap-2">
        {CHANNELS.map((c) => (
          <a key={c.key} href={shareHref(c.key, share.plain, share.title)} target="_blank" rel="noopener noreferrer" className={BTN} onClick={onShareCert ? (e) => { e.preventDefault(); onShareCert(shareHref(c.key, share.plain, share.title)) } : undefined}>
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ background: c.bg }} />
            {c.label}
          </a>
        ))}
        {onLinkedIn && (
          <button type="button" onClick={onLinkedIn} className={BTN}>
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ background: '#0a66c2' }} />
            LinkedIn
          </button>
        )}
        <button type="button" onClick={() => void copy()} className={BTN}>
          {copied ? sx.copied : sx.copy}
        </button>
        <button type="button" onClick={() => void word()} disabled={busy} className={BTN}>
          Word
        </button>
        <button type="button" onClick={() => printPlan(share, sx, tx.minutes)} className={BTN}>
          PDF
        </button>
      </div>
      {status && <p className="text-sm text-gray-700" role="status">{status}</p>}
    </div>
  )
}
