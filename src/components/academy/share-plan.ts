// PromptQuorum Academy — what a share sends: a short text (WhatsApp, Telegram, email, clipboard) and the learning plan
// as a Word file or a PDF (print dialog). Everything is built in the browser from what the learner already sees; nothing
// is sent to PromptQuorum. Link building and the file download helper are reused from Ask Hans.

import { SITE_URL } from '@/components/askhans/share'
import type { AcademyLang, Programme } from '@/lib/academy/types'
import type { ShareCopy } from './copy/share'

export interface PlanShare {
  title: string
  /** share text without the link */
  message: string
  /** plain text for chat / email / clipboard, ending with the link */
  plain: string
  url: string
  objectives: string[]
  lessons: { title: string; minutes: number }[]
  dir: 'ltr' | 'rtl'
  lang: string
}

export const academyUrl = (lang: AcademyLang) => `${SITE_URL}${lang === 'en' ? '' : `/${lang}`}/academy`

export function buildPlanShare(p: Programme, lang: AcademyLang, sx: ShareCopy, percent?: number, urlOverride?: string): PlanShare {
  const url = urlOverride ?? academyUrl(lang)
  const message = percent !== undefined ? sx.done(p.subject, percent) : sx.intro(p.subject)
  return {
    title: `${sx.docTitle}: ${p.subject}`,
    message,
    plain: `${message}\n\n${sx.tryIt} ${url}`,
    url,
    objectives: p.objectives,
    lessons: p.lessons.map((l) => ({ title: l.title, minutes: l.estimatedMinutes })),
    dir: lang === 'ar' ? 'rtl' : 'ltr',
    lang,
  }
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Formatted twin of the share text for the clipboard (paste into a mail or document keeps the link). */
export function clipboardHtml(s: PlanShare, sx: ShareCopy): string {
  return `<div><p>${esc(s.message)}</p><p>${esc(sx.tryIt)} <a href="${esc(s.url)}">${esc(s.url)}</a></p><p style="color:#555;font-size:12px">PromptQuorum Academy · © ${new Date().getFullYear()} PromptQuorum</p></div>`
}

const PRINT_CSS = `
@page { size: A4; margin: 16mm }
body { font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; color: #1C1B1F; line-height: 1.5; font-size: 11pt }
h1 { color: #6750A4; font-size: 20pt; margin: 0 0 4pt }
h2 { color: #6750A4; font-size: 13pt; margin: 16pt 0 4pt }
.msg { margin: 0 0 10pt; color: #49454F }
li { margin-bottom: 3pt }
a { color: #6750A4 }
.foot { margin-top: 18pt; padding-top: 6pt; border-top: 1.5pt solid #6750A4; font-size: 9pt; color: #49454F }
`

export function printHtml(s: PlanShare, sx: ShareCopy, minutesLabel: (n: number) => string): string {
  return `<!doctype html><html lang="${esc(s.lang === 'pt' ? 'pt-BR' : s.lang)}" dir="${s.dir}"><head><meta charset="utf-8"><title>${esc(s.title)}</title><style>${PRINT_CSS}</style></head><body>
<h1>${esc(s.title)}</h1>
<p class="msg">${esc(s.message)}</p>
<h2>${esc(sx.objectives)}</h2><ul>${s.objectives.map((o) => `<li>${esc(o)}</li>`).join('')}</ul>
<h2>${esc(sx.lessons)}</h2><ol>${s.lessons.map((l) => `<li>${esc(l.title)} (${esc(minutesLabel(l.minutes))})</li>`).join('')}</ol>
<p class="foot">PromptQuorum Academy · ${esc(sx.tryIt)} <a href="${esc(s.url)}">${esc(s.url)}</a> · © ${new Date().getFullYear()} PromptQuorum</p>
</body></html>`
}

/** Opens the print dialog for the plan in a hidden frame ("Save as PDF"). */
export function printPlan(s: PlanShare, sx: ShareCopy, minutesLabel: (n: number) => string): void {
  const frame = document.createElement('iframe')
  frame.setAttribute('aria-hidden', 'true')
  frame.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden'
  frame.srcdoc = printHtml(s, sx, minutesLabel)
  frame.onload = () => {
    const w = frame.contentWindow
    if (!w) return
    const oldTitle = document.title
    document.title = fileStem(s.title)
    const done = () =>
      setTimeout(() => {
        document.title = oldTitle
        frame.remove()
      }, 500)
    w.addEventListener('afterprint', done)
    w.focus()
    w.print()
    setTimeout(done, 60_000)
  }
  document.body.appendChild(frame)
}

export function fileStem(title: string): string {
  return `promptquorum-academy-${title}`.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '').slice(0, 80) || 'promptquorum-academy'
}

/** Word file (.docx); the `docx` library loads only when the learner asks for it. */
export async function planDocx(s: PlanShare, sx: ShareCopy, minutesLabel: (n: number) => string): Promise<Blob> {
  const d = await import('docx')
  const rtl = s.dir === 'rtl'
  const run = (text: string, o: { bold?: boolean; color?: string; size?: number } = {}) => new d.TextRun({ text, rightToLeft: rtl, ...o })
  const para = (children: InstanceType<typeof d.TextRun>[] | InstanceType<typeof d.ExternalHyperlink>[], after = 120) => new d.Paragraph({ bidirectional: rtl, spacing: { after }, children })
  const heading = (text: string) => new d.Paragraph({ bidirectional: rtl, heading: d.HeadingLevel.HEADING_2, spacing: { before: 280, after: 100 }, children: [run(text, { bold: true, color: '6750A4' })] })
  const bullet = (text: string) => new d.Paragraph({ bidirectional: rtl, bullet: { level: 0 }, spacing: { after: 60 }, children: [run(text)] })
  const link = new d.ExternalHyperlink({ link: s.url, children: [new d.TextRun({ text: s.url, style: 'Hyperlink', color: '6750A4', underline: {}, rightToLeft: rtl })] })
  const doc = new d.Document({
    creator: 'PromptQuorum Academy',
    title: s.title,
    sections: [
      {
        children: [
          new d.Paragraph({ bidirectional: rtl, heading: d.HeadingLevel.TITLE, spacing: { after: 120 }, children: [run(s.title, { bold: true, color: '6750A4' })] }),
          para([run(s.message)], 200),
          heading(sx.objectives),
          ...s.objectives.map(bullet),
          heading(sx.lessons),
          ...s.lessons.map((l, i) => new d.Paragraph({ bidirectional: rtl, spacing: { after: 60 }, children: [run(`${i + 1}. ${l.title} (${minutesLabel(l.minutes)})`)] })),
          new d.Paragraph({ bidirectional: rtl, spacing: { before: 360 }, children: [run(`PromptQuorum Academy · ${sx.tryIt} `, { color: '49454F', size: 18 }), link] }),
        ],
      },
    ],
  })
  return d.Packer.toBlob(doc)
}
