// Power Mode — Word (.docx) export. The `docx` library is loaded on demand, so it never weighs on the page.

import { parseBlocks, parseInline, type Block, type Inline } from './blocks'
import { logoPng } from './logoPng'
import { BRAND, type ReportDoc } from './reportDoc'

// PromptQuorum colours without the leading #
const hex = (c: string) => c.replace('#', '')
const LINK_COLOR = hex(BRAND.primary)
const MUTED = hex(BRAND.muted)
const PRIMARY = hex(BRAND.primary)
const SURFACE = hex(BRAND.surface)
const LIGHT = hex(BRAND.light)
const ROSE = hex(BRAND.rose)
const ROSE_LIGHT = hex(BRAND.roseLight)

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
        const cell = (text: string, head: boolean, zebra = false) =>
          new d.TableCell({
            width: { size: width, type: d.WidthType.DXA },
            shading: head ? { type: d.ShadingType.CLEAR, fill: PRIMARY, color: 'auto' } : zebra ? { type: d.ShadingType.CLEAR, fill: SURFACE, color: 'auto' } : undefined,
            margins: { top: 60, bottom: 60, left: 100, right: 100 },
            children: [new d.Paragraph({ bidirectional: rtl, children: runs(parseInline(text), 20, head, head ? 'FFFFFF' : undefined) })],
          })
        out.push(
          new d.Table({
            width: { size: 9000, type: d.WidthType.DXA },
            columnWidths: Array.from({ length: cols }, () => width),
            visuallyRightToLeft: rtl,
            rows: [
              new d.TableRow({ tableHeader: true, children: b.head.map((h) => cell(h, true)) }),
              ...b.rows.map((r, ri) => new d.TableRow({ children: Array.from({ length: cols }, (_v, i) => cell(r[i] ?? '', false, ri % 2 === 1)) })),
            ],
          }),
          new d.Paragraph({ spacing: { after: 120 }, children: [] }),
        )
      }
    }
    return out
  }

  const l = doc.labels
  const logo = await logoPng('#FFFFFF')
  const link = (text: string, url: string, color = LINK_COLOR, size?: number) =>
    new d.ExternalHyperlink({ link: url, children: [new d.TextRun({ text, style: 'Hyperlink', color, underline: {}, bold: true, size, rightToLeft: rtl })] })
  const band = { type: d.ShadingType.CLEAR, fill: PRIMARY, color: 'auto' } as const
  const noBorder = { style: d.BorderStyle.NONE, size: 0, color: 'auto' } as const

  // Violet header band: logo, product name, title, date line, links (white on PromptQuorum violet)
  const hero = new d.Table({
    width: { size: 9000, type: d.WidthType.DXA },
    columnWidths: [9000],
    visuallyRightToLeft: rtl,
    borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideHorizontal: noBorder, insideVertical: noBorder },
    rows: [
      new d.TableRow({
        children: [
          new d.TableCell({
            width: { size: 9000, type: d.WidthType.DXA },
            shading: band,
            margins: { top: 240, bottom: 240, left: 300, right: 300 },
            children: [
              new d.Paragraph({
                bidirectional: rtl,
                spacing: { after: 120 },
                children: [
                  ...(logo ? [new d.ImageRun({ type: 'png', data: logo, transformation: { width: 30, height: 30 }, altText: { title: 'PromptQuorum', description: 'PromptQuorum', name: 'PromptQuorum' } }), new d.TextRun({ text: '  ' })] : []),
                  new d.TextRun({ text: 'PromptQuorum · ', bold: true, color: 'FFFFFF', size: 24, rightToLeft: rtl }),
                  link(l.askHansName, doc.askHansUrl, 'FFFFFF', 24),
                ],
              }),
              new d.Paragraph({ bidirectional: rtl, heading: d.HeadingLevel.TITLE, spacing: { after: 80 }, children: [new d.TextRun({ text: doc.title, color: 'FFFFFF', bold: true, size: 44, rightToLeft: rtl })] }),
              new d.Paragraph({ bidirectional: rtl, spacing: { after: 60 }, children: [new d.TextRun({ text: `${doc.processLabel} · ${l.dateLabel}: ${doc.dateText} · ${l.generatedBy}`, color: hex(BRAND.light), size: 20, rightToLeft: rtl })] }),
              new d.Paragraph({ bidirectional: rtl, children: [link(l.createOwn, doc.askHansUrl, 'FFFFFF', 20), new d.TextRun({ text: ' · ', color: 'FFFFFF', size: 20 }), link('promptquorum.com', doc.siteUrl, 'FFFFFF', 20)] }),
            ],
          }),
        ],
      }),
    ],
  })

  // Rose notice paragraph: "automatically generated, not reviewed by a human"
  const notice = (after = 200) =>
    new d.Paragraph({
      bidirectional: rtl,
      spacing: { before: 160, after },
      shading: { type: d.ShadingType.CLEAR, fill: ROSE_LIGHT, color: 'auto' },
      border: { [rtl ? 'right' : 'left']: { style: d.BorderStyle.SINGLE, size: 24, color: ROSE, space: 8 } },
      children: [new d.TextRun({ text: `${l.autoNoticeHeading}. `, bold: true, color: ROSE, rightToLeft: rtl }), new d.TextRun({ text: l.autoNotice, rightToLeft: rtl })],
    })

  // Legal notice: framed block with the lead paragraph and every point
  const boxBorder = { style: d.BorderStyle.SINGLE, size: 12, color: PRIMARY, space: 6 } as const
  const legal = [
    new d.Paragraph({
      bidirectional: rtl,
      spacing: { before: 360, after: 100 },
      shading: { type: d.ShadingType.CLEAR, fill: SURFACE, color: 'auto' },
      border: { top: boxBorder, left: boxBorder, right: boxBorder },
      children: [new d.TextRun({ text: l.disclaimerHeading, bold: true, color: PRIMARY, size: 28, rightToLeft: rtl })],
    }),
    new d.Paragraph({
      bidirectional: rtl,
      spacing: { after: 100 },
      shading: { type: d.ShadingType.CLEAR, fill: SURFACE, color: 'auto' },
      border: { left: boxBorder, right: boxBorder },
      children: [new d.TextRun({ text: l.disclaimerText, rightToLeft: rtl })],
    }),
    ...l.disclaimerPoints.map(
      (pt, i) =>
        new d.Paragraph({
          bidirectional: rtl,
          spacing: { after: 100 },
          shading: { type: d.ShadingType.CLEAR, fill: SURFACE, color: 'auto' },
          border: { left: boxBorder, right: boxBorder, ...(i === l.disclaimerPoints.length - 1 ? { bottom: boxBorder } : {}) },
          children: [new d.TextRun({ text: `${i + 1}. `, bold: true, color: PRIMARY, rightToLeft: rtl }), new d.TextRun({ text: pt, rightToLeft: rtl })],
        }),
    ),
    notice(120),
    new d.Paragraph({ bidirectional: rtl, spacing: { before: 120 }, children: [link(l.createOwn, doc.askHansUrl)] }),
  ]

  const children = [
    hero,
    notice(),
    ...toChildren([{ k: 'h', level: 2, text: l.inputsHeading }, { k: 'ul', items: doc.inputs }]),
    ...toChildren(parseBlocks(doc.body)),
    ...toChildren([{ k: 'h', level: 2, text: l.howHeading }, { k: 'p', text: l.howText }]),
    ...toChildren([{ k: 'h', level: 2, text: l.referencesHeading }, { k: 'ul', items: doc.references.map((r) => `[${r.label}](${r.url})`) }]),
    ...legal,
    ...(doc.overview
      ? toChildren([
          { k: 'h', level: 2, text: doc.overview.title },
          { k: 'p', text: doc.overview.blurb },
          { k: 'ul', items: doc.overview.tiles.map((t) => `${t.label}: ${t.value}`) },
          { k: 'ul', items: doc.overview.links.map((k) => `[${k.label}](${k.href})`) },
        ])
      : []),
  ]

  const footer = new d.Footer({
    children: [
      new d.Paragraph({
        bidirectional: rtl,
        alignment: d.AlignmentType.CENTER,
        border: { top: { style: d.BorderStyle.SINGLE, size: 8, color: PRIMARY, space: 4 } },
        children: [link('promptquorum.com', doc.siteUrl, LINK_COLOR, 16), new d.TextRun({ text: ' · ', color: MUTED, size: 16 }), link(l.createOwn, doc.askHansUrl, LINK_COLOR, 16), new d.TextRun({ text: '  ·  ', color: MUTED, size: 16 }), new d.TextRun({ children: [d.PageNumber.CURRENT, ' / ', d.PageNumber.TOTAL_PAGES], color: MUTED, size: 16 })],
      }),
    ],
  })

  const heading = (id: string, name: string, size: number, color: string, before: number) => ({
    id,
    name,
    basedOn: 'Normal',
    next: 'Normal',
    quickFormat: true,
    run: { bold: true, size, color },
    paragraph: { spacing: { before, after: 120 }, ...(id === 'Heading2' ? { border: { bottom: { style: d.BorderStyle.SINGLE, size: 8, color: LIGHT, space: 2 } } } : {}) },
  })

  const file = new d.Document({
    creator: 'PromptQuorum',
    title: doc.title,
    description: l.generatedBy,
    numbering: { config: numbering },
    styles: {
      default: { document: { run: { font: 'Calibri', size: 22 } } },
      paragraphStyles: [heading('Heading1', 'Heading 1', 36, PRIMARY, 280), heading('Heading2', 'Heading 2', 28, PRIMARY, 320), heading('Heading3', 'Heading 3', 24, ROSE, 240)],
    },
    sections: [{ properties: { page: { margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } }, footers: { default: footer }, children }],
  })
  return d.Packer.toBlob(file)
}
