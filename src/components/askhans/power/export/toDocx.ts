// Power Mode — Word (.docx) export. The `docx` library is loaded on demand, so it never weighs on the page.

import { parseBlocks, parseInline, type Block, type Inline } from './blocks'
import type { ReportDoc } from './reportDoc'

const LINK_COLOR = '1D4ED8'
const MUTED = '555555'

export async function buildDocxBlob(doc: ReportDoc): Promise<Blob> {
  const d = await import('docx')
  const rtl = doc.dir === 'rtl'

  const runs = (inlines: Inline[], size?: number, bold = false, color?: string) =>
    inlines.map((n) => {
      if (n.t === 'link') {
        return new d.ExternalHyperlink({
          link: n.href,
          children: [new d.TextRun({ text: n.text, style: 'Hyperlink', color: LINK_COLOR, underline: {}, size, bold, rightToLeft: rtl })],
        })
      }
      return new d.TextRun({
        text: n.text,
        bold: bold || n.t === 'b',
        italics: n.t === 'i',
        font: n.t === 'code' ? 'Consolas' : undefined,
        size,
        color,
        rightToLeft: rtl,
      })
    })

  const para = (text: string, opts: { spacingAfter?: number; size?: number; color?: string; italics?: boolean } = {}) =>
    new d.Paragraph({
      bidirectional: rtl,
      spacing: { after: opts.spacingAfter ?? 120 },
      children: runs(parseInline(text), opts.size, false, opts.color).map((r) => r),
    })

  let listCount = 0
  const numbering: { reference: string; levels: { level: number; format: (typeof d.LevelFormat)[keyof typeof d.LevelFormat]; text: string; alignment: (typeof d.AlignmentType)[keyof typeof d.AlignmentType] }[] }[] = []

  const toChildren = (blocks: Block[]) => {
    const out: (InstanceType<typeof d.Paragraph> | InstanceType<typeof d.Table>)[] = []
    for (const b of blocks) {
      if (b.k === 'h') {
        out.push(
          new d.Paragraph({
            bidirectional: rtl,
            heading: b.level === 1 ? d.HeadingLevel.HEADING_1 : b.level === 2 ? d.HeadingLevel.HEADING_2 : d.HeadingLevel.HEADING_3,
            spacing: { before: b.level === 1 ? 0 : 280, after: 120 },
            children: runs(parseInline(b.text)),
          }),
        )
      } else if (b.k === 'p') {
        out.push(para(b.text))
      } else if (b.k === 'ul') {
        for (const it of b.items) out.push(new d.Paragraph({ bidirectional: rtl, bullet: { level: 0 }, spacing: { after: 60 }, children: runs(parseInline(it)) }))
      } else if (b.k === 'ol') {
        const reference = `ol-${listCount++}`
        numbering.push({ reference, levels: [{ level: 0, format: d.LevelFormat.DECIMAL, text: '%1.', alignment: rtl ? d.AlignmentType.RIGHT : d.AlignmentType.LEFT }] })
        for (const it of b.items) out.push(new d.Paragraph({ bidirectional: rtl, numbering: { reference, level: 0 }, spacing: { after: 60 }, children: runs(parseInline(it)) }))
      } else {
        const cols = Math.max(b.head.length, 1)
        const width = Math.floor(9000 / cols)
        const cell = (text: string, head: boolean) =>
          new d.TableCell({
            width: { size: width, type: d.WidthType.DXA },
            shading: head ? { type: d.ShadingType.CLEAR, fill: 'EEF2FF', color: 'auto' } : undefined,
            margins: { top: 60, bottom: 60, left: 100, right: 100 },
            children: [new d.Paragraph({ bidirectional: rtl, children: runs(parseInline(text), 20, head) })],
          })
        out.push(
          new d.Table({
            width: { size: 9000, type: d.WidthType.DXA },
            columnWidths: Array.from({ length: cols }, () => width),
            visuallyRightToLeft: rtl,
            rows: [
              new d.TableRow({ tableHeader: true, children: b.head.map((h) => cell(h, true)) }),
              ...b.rows.map((r) => new d.TableRow({ children: Array.from({ length: cols }, (_v, i) => cell(r[i] ?? '', false)) })),
            ],
          }),
          new d.Paragraph({ spacing: { after: 120 }, children: [] }),
        )
      }
    }
    return out
  }

  const l = doc.labels
  const children = [
    new d.Paragraph({ bidirectional: rtl, heading: d.HeadingLevel.TITLE, spacing: { after: 80 }, children: [new d.TextRun({ text: doc.title, rightToLeft: rtl })] }),
    para(`${doc.processLabel} · ${l.dateLabel}: ${doc.dateText} · ${l.generatedBy}`, { color: MUTED, spacingAfter: 240 }),
    ...toChildren([{ k: 'h', level: 2, text: l.inputsHeading }, { k: 'ul', items: doc.inputs }]),
    ...toChildren(parseBlocks(doc.body)),
    ...toChildren([{ k: 'h', level: 2, text: l.howHeading }, { k: 'p', text: l.howText }]),
    ...toChildren([{ k: 'h', level: 2, text: l.referencesHeading }, { k: 'ul', items: doc.references.map((r) => `[${r.label}](${r.url})`) }]),
    ...toChildren([{ k: 'h', level: 2, text: l.disclaimerHeading }, { k: 'p', text: l.disclaimerText }]),
  ]

  const file = new d.Document({
    creator: 'PromptQuorum',
    title: doc.title,
    description: l.generatedBy,
    numbering: { config: numbering },
    styles: { default: { document: { run: { font: 'Calibri', size: 22 } } } },
    sections: [{ properties: { page: { margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } }, children }],
  })
  return d.Packer.toBlob(file)
}
