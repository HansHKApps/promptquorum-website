// Power Mode — PDF export. A real PDF writer would need an embedded font per script, and the report can be
// Japanese, Chinese, Korean or Arabic. The browser already renders all of them, so the PDF is made by the
// browser: the formatted report opens in a hidden frame and the print dialog offers "Save as PDF".
// The look follows the PromptQuorum colours (BRAND in reportDoc.ts).

import { parseBlocks, parseInline, type Inline } from './blocks'
import { BRAND, fileStem, logoSvg, type ReportDoc } from './reportDoc'

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
/* Margin 0 also removes the browser's own page header and footer (date, title, plain-text address, which cannot be
   clicked). The page margins are rebuilt with spacer rows that repeat on every page, and the footer with working
   links is drawn by the report itself. */
@page { size: A4; margin: 0; }
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin: 0; font: 10.5pt/1.55 system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans", "Noto Sans CJK JP", "Noto Sans Arabic", sans-serif; color: ${BRAND.text}; }
table.page { width: 100%; border-collapse: collapse; }
table.page > thead > tr > td, table.page > tbody > tr > td, table.page > tfoot > tr > td { padding: 0; border: 0; }
.sp-top { height: 9mm; }
.sp-bottom { height: 20mm; }
.wrap { padding: 0 16mm; }
.hero { background: ${BRAND.primary}; background-image: linear-gradient(135deg, ${BRAND.primary} 0%, #4F378B 100%); color: #fff; padding: 12mm 16mm 9mm; }
.brand { display: flex; align-items: center; gap: 3mm; font-weight: 700; font-size: 11pt; letter-spacing: 0.02em; }
.hero h1 { font-size: 23pt; line-height: 1.2; margin: 6mm 0 2mm; }
.hero .meta { color: ${BRAND.light}; font-size: 10pt; margin: 0 0 2mm; }
.hero a { color: #fff; font-weight: 600; text-decoration: underline; }
.auto { background: ${BRAND.roseLight}; border-inline-start: 3pt solid ${BRAND.rose}; border-radius: 3pt; padding: 3mm 4mm; margin: 6mm 0 4mm; color: ${BRAND.text}; break-inside: avoid; }
.auto strong { color: ${BRAND.rose}; }
.inputs { background: ${BRAND.surface}; border: 0.75pt solid ${BRAND.light}; border-inline-start: 3pt solid ${BRAND.primary}; border-radius: 3pt; padding: 1mm 4mm 2mm; margin: 0 0 4mm; break-inside: avoid; }
h2 { font-size: 14pt; margin: 16pt 0 6pt; padding-bottom: 3pt; color: ${BRAND.primary}; border-bottom: 1.5pt solid ${BRAND.light}; break-after: avoid; }
.inputs h2, .box h2 { margin-top: 3mm; }
h3 { font-size: 12pt; margin: 12pt 0 4pt; color: ${BRAND.rose}; break-after: avoid; }
p { margin: 0 0 7pt; }
ul, ol { margin: 0 0 8pt; padding-inline-start: 18pt; }
li { margin-bottom: 3pt; }
li::marker { color: ${BRAND.primary}; }
a { color: ${BRAND.primary}; text-decoration: underline; }
code { font-family: Consolas, Menlo, monospace; font-size: 0.92em; background: ${BRAND.surface}; padding: 0 2pt; border-radius: 2pt; }
.content table { width: 100%; border-collapse: collapse; margin: 6pt 0 10pt; font-size: 9.5pt; break-inside: auto; }
.content th { background: ${BRAND.primary}; color: #fff; text-align: start; }
.content th, .content td { border: 0.75pt solid ${BRAND.light}; padding: 4pt 6pt; vertical-align: top; }
.content tbody tr:nth-child(even) td { background: ${BRAND.surface}; }
.content tbody td:first-child { font-weight: 600; }
.content tr { break-inside: avoid; }
.box { margin: 10mm 0 0; padding: 2mm 5mm 4mm; border: 1.5pt solid ${BRAND.primary}; border-radius: 4pt; background: ${BRAND.surface}; }
.box ol { margin-top: 4pt; }
.box li { margin-bottom: 5pt; }
.box .auto { margin: 4pt 0 8pt; }
.cta { margin: 5mm 0 0; font-weight: 600; }
.runfoot { position: fixed; left: 0; right: 0; bottom: 0; height: 12mm; display: flex; align-items: center; justify-content: space-between; gap: 6mm; padding: 0 16mm; background: ${BRAND.surface}; border-top: 1.5pt solid ${BRAND.primary}; font-size: 8.5pt; color: ${BRAND.muted}; }
.runfoot a { font-weight: 600; }
.ov { margin-top: 10mm; padding: 3mm 5mm; border: 0.75pt solid ${BRAND.light}; background: ${BRAND.surface}; border-radius: 4pt; break-inside: avoid; }
.ov h2 { margin-top: 0; }
.ov .tiles { display: flex; flex-wrap: wrap; gap: 4pt 14pt; margin: 6pt 0; padding: 0; list-style: none; font-size: 9.5pt; }
.ov .tiles strong { font-size: 12pt; color: ${BRAND.primary}; }
@media screen { .runfoot { position: static; margin-top: 10mm; } }
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
  const ask = `<a href="${esc(doc.askHansUrl)}">${esc(l.createOwn)}</a>`
  const site = `<a href="${esc(doc.siteUrl)}">promptquorum.com</a>`
  const autoBanner = `<div class="auto"><strong>${esc(l.autoNoticeHeading)}.</strong> ${esc(l.autoNotice)}</div>`

  return `<!doctype html>
<html lang="${esc(doc.lang === 'pt' ? 'pt-BR' : doc.lang)}" dir="${doc.dir}">
<head>
<meta charset="utf-8">
<title>${esc(fileStem(doc))}</title>
<style>${CSS}</style>
</head>
<body>
<header class="hero">
<div class="brand">${logoSvg(30, '#FFFFFF')}<span>PromptQuorum · <a href="${esc(doc.askHansUrl)}">${esc(l.askHansName)}</a></span></div>
<h1>${esc(doc.title)}</h1>
<p class="meta">${esc(doc.processLabel)} · ${esc(l.dateLabel)}: ${esc(doc.dateText)} · ${esc(l.generatedBy)}</p>
<p class="meta">${ask} · ${site}</p>
</header>
<table class="page"><thead><tr><td><div class="sp-top"></div></td></tr></thead><tfoot><tr><td><div class="sp-bottom"></div></td></tr></tfoot><tbody><tr><td>
<div class="wrap">
${autoBanner}
<section class="inputs"><h2>${esc(l.inputsHeading)}</h2>
<ul>${doc.inputs.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></section>
<div class="content">
${bodyHtml}
<h2>${esc(l.howHeading)}</h2>
<p>${esc(l.howText)}</p>
<h2>${esc(l.referencesHeading)}</h2>
<ul>${doc.references.map((r) => `<li><a href="${esc(r.url)}">${esc(r.label)}</a></li>`).join('')}</ul>
</div>
<section class="box">
<h2>${esc(l.disclaimerHeading)}</h2>
${autoBanner}
<p>${esc(l.disclaimerText)}</p>
<ol>${l.disclaimerPoints.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>
</section>
${overviewHtml}
<p class="cta">${ask}</p>
</div>
</td></tr></tbody></table>
<footer class="runfoot"><span>${site} · ${esc(l.generatedBy)}</span><span>${ask}</span></footer>
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
