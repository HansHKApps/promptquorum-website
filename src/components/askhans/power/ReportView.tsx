'use client'

// Power Mode — the report in the window, with Copy and Download (Markdown, Word, PDF). The text shown is
// the same markdown the exports are built from. While the report is still streaming, downloads wait.

import { useEffect, useRef, useState } from 'react'
import { mdToPlain, writePlain } from '../share'
import { useAskCopy } from '../copy'
import { AskIcon } from '../icons'
import { Markdown } from '../markdown'
import { OverviewStrip } from '../OverviewStrip'
import { reportShare } from '../CopyButton'
import { shareHref, type ShareChannel } from '../share'
import { cardPageUrl } from '@/lib/askhans/card'
import type { PowerCopy } from './copy'
import { downloadBlob } from './export/download'
import { buildMarkdown, fileStem, type ReportDoc } from './export/reportDoc'

interface Props {
  tx: PowerCopy
  doc: ReportDoc
  streaming: boolean
  status?: string
  /** called after a successful copy or download, with the format (for the anonymous counter) */
  onExport?: (channel: 'copy' | 'md' | 'docx' | 'pdf') => void
  /** process id: the shared link is the Ask Hans page with a share card for this process */
  process?: string
}

const BTN =
  'inline-flex items-center gap-1.5 rounded-lg border border-primary px-3 py-1.5 text-[13px] font-semibold text-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50'

export function ReportView({ tx, doc, streaming, status, onExport, process }: Props) {
  const ac = useAskCopy()
  const [copied, setCopied] = useState(false)
  const [busy, setBusy] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  const md = buildMarkdown(doc)

  const copy = async () => {
    if (!(await writePlain(mdToPlain(md)))) return
    onExport?.('copy')
    setCopied(true)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  const saveMd = () => {
    downloadBlob(new Blob([md], { type: 'text/markdown;charset=utf-8' }), `${fileStem(doc)}.md`)
    onExport?.('md')
  }

  const saveDocx = async () => {
    setBusy(true)
    try {
      const { buildDocxBlob } = await import('./export/toDocx')
      downloadBlob(await buildDocxBlob(doc), `${fileStem(doc)}.docx`)
      onExport?.('docx')
    } finally {
      setBusy(false)
    }
  }

  const savePdf = async () => {
    const { printReport } = await import('./export/toHtml')
    printReport(doc)
    onExport?.('pdf')
  }

  return (
    <article aria-busy={streaming} className="rounded-xl border border-border bg-white p-4 shadow-sm">
      <header className="border-b border-border pb-3">
        <h2 className="text-[17px] font-bold leading-snug text-foreground">{doc.title}</h2>
        <p className="mt-1 text-[12px] text-muted-foreground">
          {doc.processLabel} · {doc.labels.dateLabel}: {doc.dateText}
        </p>
      </header>

      <details className="mt-3 text-[13px]" open={!doc.body.trim()}>
        <summary className="cursor-pointer font-semibold text-foreground">{doc.labels.inputsHeading}</summary>
        <ul className="mt-1.5 list-disc space-y-0.5 ps-5 text-foreground">
          {doc.inputs.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </details>

      <div className="mt-3 text-[14px] leading-relaxed text-foreground">
        <Markdown text={doc.body} />
      </div>
      {streaming && status && (
        <p role="status" className="mt-2 text-[13px] italic text-muted-foreground">
          {status}
        </p>
      )}

      {!streaming && doc.body.trim() && (
        <>
          <section className="mt-4 border-t border-border pt-3 text-[12px] leading-snug text-muted-foreground">
            <h3 className="font-semibold text-foreground">{doc.labels.howHeading}</h3>
            <p className="mt-1">{doc.labels.howText}</p>
            <h3 className="mt-2 font-semibold text-foreground">{doc.labels.referencesHeading}</h3>
            <ul className="mt-1 list-disc space-y-0.5 ps-5">
              {doc.references.map((r) => (
                <li key={r.url}>
                  <a href={r.url} className="font-medium text-primary underline underline-offset-2">
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-2">
              <strong className="text-foreground">{doc.labels.disclaimerHeading}.</strong> {doc.labels.disclaimerText}
            </p>
          </section>
          {doc.overview && <OverviewStrip overview={doc.overview} className="mt-3" />}

          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-3" role="group" aria-label={tx.report.download}>
            <button type="button" onClick={copy} className={BTN}>
              <AskIcon name={copied ? 'Check' : 'Copy'} className="h-3.5 w-3.5" />
              {copied ? ac.copyUi.copied : tx.report.copy}
            </button>
            <span role="status" className="sr-only">{copied ? ac.copyUi.copied : ''}</span>
            <button type="button" onClick={saveMd} className={BTN}>
              <AskIcon name="Download" className="h-3.5 w-3.5" />
              {tx.report.asMd}
            </button>
            <button type="button" onClick={saveDocx} disabled={busy} className={BTN}>
              <AskIcon name="Download" className="h-3.5 w-3.5" />
              {busy ? tx.report.preparing : tx.report.asDocx}
            </button>
            <button type="button" onClick={savePdf} className={BTN}>
              <AskIcon name="Download" className="h-3.5 w-3.5" />
              {tx.report.asPdf}
            </button>
          </div>
          {process && <ShareRow tx={tx} lang={doc.lang} process={process} />}
        </>
      )}
    </article>
  )
}

const CHANNELS: { channel: ShareChannel; label: 'shareWhatsApp' | 'shareTelegram' | 'shareEmail'; icon: string }[] = [
  { channel: 'whatsapp', label: 'shareWhatsApp', icon: 'MessageCircle' },
  { channel: 'telegram', label: 'shareTelegram', icon: 'Send' },
  { channel: 'email', label: 'shareEmail', icon: 'Mail' },
]

/** Shares a fixed message plus the Ask Hans link whose preview image is the share card. Never contains the report. */
function ShareRow({ tx, lang, process }: { tx: PowerCopy; lang: string; process: string }) {
  const ac = useAskCopy()
  const [copied, setCopied] = useState(false)
  const url = cardPageUrl(lang, process)
  const text = `${tx.report.shareText}\n${url}`
  return (
    <div className="mt-3 flex flex-wrap items-center gap-1.5" role="group" aria-label={tx.report.shareTitle}>
      <span className="me-1 text-[13px] font-semibold text-foreground">{tx.report.shareTitle}</span>
      {CHANNELS.map((c) => (
        <a
          key={c.channel}
          href={shareHref(c.channel, text, ac.copyUi.emailSubject)}
          target={c.channel === 'email' ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={ac.copyUi[c.label]}
          title={ac.copyUi[c.label]}
          onClick={() => reportShare('report', c.channel)}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white text-primary hover:border-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        >
          <AskIcon name={c.icon} className="h-4 w-4" />
        </a>
      ))}
      <button
        type="button"
        onClick={async () => {
          if (!(await writePlain(url))) return
          reportShare('report', 'link')
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        }}
        className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-border bg-white px-2.5 text-[13px] font-medium text-primary hover:border-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <AskIcon name={copied ? 'Check' : 'Link2'} className="h-3.5 w-3.5" />
        {copied ? ac.copyUi.copied : tx.report.shareLink}
      </button>
    </div>
  )
}
