// Power Mode — PDF export. A real PDF writer would need an embedded font per script, and the report can be
// Japanese, Chinese, Korean or Arabic. The browser already renders all of them, so the PDF is made by the
// browser: the formatted report opens in a hidden frame and the print dialog offers "Save as PDF".

import { parseBlocks, parseInline, type Inline } from './blocks'
import { fileStem, type ReportDoc } from './reportDoc'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function inlineHtml(nodes: Inline[]): string {
  return nodes
    .map((n) => {
      if (n.t === 'link') return `<a href="${esc(n.href)}">${esc(n.text)}</a>`
      if (n.t === 'b') return `<strong>${esc(n.text)}</strong>`
      if (n.t === 'i') return `<em>${esc(n.text)}</em>`
      if (n.t === 'code') return `<code>${esc(n.text)}</code>`
      return esc(n.text)
    })
    .join('')
}

const md = (text: string) => inlineHtml(parseInline(text))

const CSS = `
@page { size: A4; margin: 18mm 16mm; }
* { box-sizing: border-box; }
body { margin: 0; font: 11pt/1.55 system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans", "Noto Sans CJK JP", "Noto Sans Arabic", sans-serif; color: #111827; }
h1 { font-size: 22pt; line-height: 1.2; margin: 0 0 4pt; }
h2 { font-size: 14pt; margin: 18pt 0 6pt; padding-bottom: 3pt; border-bottom: 1.5pt solid #c7d2fe; break-after: avoid; }
h3 { font-size: 12pt; margin: 12pt 0 4pt; break-after: avoid; }
p { margin: 0 0 7pt; }
.meta { color: #555; margin-bottom: 14pt; }
ul, ol { margin: 0 0 8pt; padding-inline-start: 18pt; }
li { margin-bottom: 3pt; }
a { color: #1d4ed8; text-decoration: underline; }
code { font-family: Consolas, Menlo, monospace; font-size: 0.92em; background: #f3f4f6; padding: 0 2pt; border-radius: 2pt; }
table { width: 100%; border-collapse: collapse; margin: 6pt 0 10pt; font-size: 10pt; break-inside: auto; }
th { background: #eef2ff; text-align: start; }
th, td { border: 0.75pt solid #d1d5db; padding: 4pt 6pt; vertical-align: top; }
tr { break-inside: avoid; }
.ov { margin-top: 14pt; padding: 8pt 10pt; border: 0.75pt solid #c7d2fe; background: #f5f7ff; border-radius: 4pt; break-inside: avoid; }
.ov h2 { margin-top: 0; }
.ov .tiles { display: flex; flex-wrap: wrap; gap: 4pt 14pt; margin: 6pt 0; padding: 0; list-style: none; font-size: 9.5pt; }
.ov .tiles strong { font-size: 12pt; }
.foot { margin-top: 18pt; padding-top: 6pt; border-top: 0.75pt solid #d1d5db; font-size: 9pt; color: #555; }
`

export function buildHtml(doc: ReportDoc): string {
  const l = doc.labels
  const bodyHtml = parseBlocks(doc.body)
    .map((b) => {
      if (b.k === 'h') return `<h${Math.max(b.level, 2)}>${md(b.text)}</h${Math.max(b.level, 2)}>`
      if (b.k === 'p') return `<p>${md(b.text)}</p>`
      if (b.k === 'ul') return `<ul>${b.items.map((i) => `<li>${md(i)}</li>`).join('')}</ul>`
      if (b.k === 'ol') return `<ol>${b.items.map((i) => `<li>${md(i)}</li>`).join('')}</ol>`
      return `<table><thead><tr>${b.head.map((h) => `<th>${md(h)}</th>`).join('')}</tr></thead><tbody>${b.rows
        .map((r) => `<tr>${b.head.map((_h, i) => `<td>${md(r[i] ?? '')}</td>`).join('')}</tr>`)
        .join('')}</tbody></table>`
    })
    .join('\n')

  const o = doc.overview
  const overviewHtml = o
    ? `<div class="ov"><h2>${esc(o.title)}</h2><p>${esc(o.blurb)}</p><ul class="tiles">${o.tiles
        .map((t) => `<li><strong>${esc(t.value)}</strong> ${esc(t.label)}</li>`)
        .join('')}</ul><p>${o.links.map((k) => `<a href="${esc(k.href)}">${esc(k.label)}</a>`).join(' · ')}</p></div>`
    : ''

  return `<!doctype html>
<html lang="${esc(doc.lang === 'pt' ? 'pt-BR' : doc.lang)}" dir="${doc.dir}">
<head>
<meta charset="utf-8">
<title>${esc(fileStem(doc))}</title>
<style>${CSS}</style>
</head>
<body>
<h1>${esc(doc.title)}</h1>
<p class="meta">${esc(doc.processLabel)} · ${esc(l.dateLabel)}: ${esc(doc.dateText)} · ${esc(l.generatedBy)}</p>
<h2>${esc(l.inputsHeading)}</h2>
<ul>${doc.inputs.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
${bodyHtml}
<h2>${esc(l.howHeading)}</h2>
<p>${esc(l.howText)}</p>
<h2>${esc(l.referencesHeading)}</h2>
<ul>${doc.references.map((r) => `<li><a href="${esc(r.url)}">${esc(r.label)}</a></li>`).join('')}</ul>
<div class="foot"><strong>${esc(l.disclaimerHeading)}.</strong> ${esc(l.disclaimerText)}</div>
${overviewHtml}
</body>
</html>`
}

/** Opens the print dialog for the formatted report in a hidden frame ("Save as PDF"). */
export function printReport(doc: ReportDoc): void {
  const frame = document.createElement('iframe')
  frame.setAttribute('aria-hidden', 'true')
  frame.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden'
  frame.srcdoc = buildHtml(doc)
  frame.onload = () => {
    const w = frame.contentWindow
    if (!w) return
    // The browser proposes the page title as the PDF file name: use the report's file name while printing.
    const oldTitle = document.title
    document.title = fileStem(doc)
    const done = () => setTimeout(() => {
      document.title = oldTitle
      frame.remove()
    }, 500)
    w.addEventListener('afterprint', done)
    w.focus()
    w.print()
    // Some browsers never fire afterprint for a hidden frame: remove it eventually anyway.
    setTimeout(() => {
      if (frame.isConnected) document.title = oldTitle
      frame.remove()
    }, 120_000)
  }
  document.body.appendChild(frame)
}
