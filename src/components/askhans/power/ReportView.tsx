'use client'

// Power Mode — the report in the window, with Copy and Download (Markdown, Word, PDF). The text shown is
// the same markdown the exports are built from. While the report is still streaming, downloads wait.

import { useEffect, useRef, useState } from 'react'
import { writeClipboard, plainText } from '../CopyButton'
import { useAskCopy } from '../copy'
import { AskIcon } from '../icons'
import { Markdown } from '../markdown'
import type { PowerCopy } from './copy'
import { downloadBlob } from './export/download'
import { buildMarkdown, fileStem, type ReportDoc } from './export/reportDoc'

interface Props {
  tx: PowerCopy
  doc: ReportDoc
  streaming: boolean
  status?: string
}

const BTN =
  'inline-flex items-center gap-1.5 rounded-lg border border-primary px-3 py-1.5 text-[13px] font-semibold text-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50'

export function ReportView({ tx, doc, streaming, status }: Props) {
  const ac = useAskCopy()
  const [copied, setCopied] = useState(false)
  const [busy, setBusy] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  const md = buildMarkdown(doc)

  const copy = async () => {
    if (!(await writeClipboard(plainText(md)))) return
    setCopied(true)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  const saveMd = () => downloadBlob(new Blob([md], { type: 'text/markdown;charset=utf-8' }), `${fileStem(doc)}.md`)

  const saveDocx = async () => {
    setBusy(true)
    try {
      const { buildDocxBlob } = await import('./export/toDocx')
      downloadBlob(await buildDocxBlob(doc), `${fileStem(doc)}.docx`)
    } finally {
      setBusy(false)
    }
  }

  const savePdf = async () => {
    const { printReport } = await import('./export/toHtml')
    printReport(doc)
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
        </>
      )}
    </article>
  )
}
