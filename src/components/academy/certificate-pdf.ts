// PromptQuorum Academy — the certificate PDF, created in the browser (docs/academy/SPEC.md section 10).
// The page is drawn on a canvas (A4 landscape, 300 dpi) and embedded as a JPEG in a one-page PDF. Canvas text uses
// the browser's own shaping, so Arabic (joined, right to left), Japanese, Chinese and Korean names and texts render
// correctly without shipping font files. Trade-off: the text in the PDF is part of the picture (not selectable);
// the certificate ID, subject and title are also stored as PDF metadata. No server is involved.

import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { qrMatrix, verifyUrl } from '@/lib/academy/qr'
import { toOutputLocale } from '@/lib/i18n/constants'
import type { CertificateModel } from '@/lib/academy/certificate'
import type { AcademyLang } from '@/lib/academy/types'
import { getLangDir } from '@/lib/i18n/constants'
import type { AcademyCopy } from './copy'
import { formatPoints } from '@/lib/academy/format-points'

const PX_W = 3508
const PX_H = 2480
const MM = PX_W / 297
const PURPLE = '#6d28d9'
const INK = '#1f2937'
const MUTED = '#6b7280'
const LINE = '#e5e7eb'
const GOOD = '#15803d'
const FONT = 'system-ui, "Noto Sans", "Segoe UI", "Helvetica Neue", Arial, "Noto Sans Arabic", "Noto Sans CJK JP", "Hiragino Sans", "Yu Gothic", "Microsoft YaHei", "PingFang SC", "Malgun Gothic", sans-serif'
const HTML_LANG: Record<AcademyLang, string> = { en: 'en', de: 'de', fr: 'fr', es: 'es', pt: 'pt-BR', ja: 'ja', zh: 'zh-Hans', ko: 'ko', ar: 'ar' }

type Align = 'start' | 'center' | 'end'

class Page {
  readonly ctx: CanvasRenderingContext2D
  readonly rtl: boolean
  readonly margin = 16 * MM
  constructor(readonly canvas: HTMLCanvasElement, lang: AcademyLang) {
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('certificate: canvas not available')
    this.ctx = ctx
    this.rtl = getLangDir(lang) === 'rtl'
    ctx.direction = this.rtl ? 'rtl' : 'ltr'
    ;(ctx as CanvasRenderingContext2D & { lang?: string }).lang = HTML_LANG[lang]
    ctx.textBaseline = 'alphabetic'
  }
  /** physical x of a logical offset (mm) from the start edge */
  x(offMm: number): number {
    return this.rtl ? PX_W - this.margin - offMm * MM : this.margin + offMm * MM
  }
  /** physical left edge of a box that starts at `offMm` from the start edge and is `wMm` wide */
  boxX(offMm: number, wMm: number): number {
    return this.rtl ? PX_W - this.margin - (offMm + wMm) * MM : this.margin + offMm * MM
  }
  get innerWidthMm(): number {
    return (PX_W - 2 * this.margin) / MM
  }
  font(sizeMm: number, weight = 400) {
    this.ctx.font = `${weight} ${sizeMm * MM}px ${FONT}`
  }
  /** Draws one line; `at` is the anchor (physical x). Returns the width. */
  line(str: string, at: number, yMm: number, o: { size: number; weight?: number; color?: string; align?: Align }) {
    this.font(o.size, o.weight)
    this.ctx.fillStyle = o.color ?? INK
    this.ctx.textAlign = o.align ?? 'start'
    this.ctx.fillText(str, at, yMm * MM)
    return this.ctx.measureText(str).width
  }
  /** Greedy wrap by words, or by characters for scripts written without spaces. */
  wrap(str: string, maxWMm: number, size: number, weight = 400): string[] {
    this.font(size, weight)
    const tokens = str.split(/(?<=\s)|(?=[぀-ヿ㐀-鿿＀-￯])/u)
    const lines: string[] = []
    let cur = ''
    for (const t of tokens) {
      const next = cur + t
      if (cur && this.ctx.measureText(next.trimEnd()).width > maxWMm * MM) {
        lines.push(cur.trimEnd())
        cur = t.trimStart()
      } else cur = next
    }
    if (cur.trim()) lines.push(cur.trimEnd())
    return lines
  }
  /** Wrapped paragraph; at most `maxLines` (last line is cut with an ellipsis). Returns the y after the block. */
  paragraph(str: string, offMm: number, yMm: number, maxWMm: number, o: { size: number; weight?: number; color?: string; maxLines: number; leading?: number; align?: Align }) {
    let lines = this.wrap(str, maxWMm, o.size, o.weight)
    if (lines.length > o.maxLines) {
      lines = lines.slice(0, o.maxLines)
      let last = lines[o.maxLines - 1]
      this.font(o.size, o.weight)
      while (last.length > 1 && this.ctx.measureText(last + '…').width > maxWMm * MM) last = last.slice(0, -1)
      lines[o.maxLines - 1] = last.trimEnd() + '…'
    }
    const leading = o.leading ?? o.size * 1.35
    const at = o.align === 'center' ? PX_W / 2 : this.x(offMm)
    lines.forEach((l, i) => this.line(l, at, yMm + i * leading, o))
    return yMm + lines.length * leading
  }
  rect(offMm: number, yMm: number, wMm: number, hMm: number, color: string) {
    this.ctx.fillStyle = color
    this.ctx.fillRect(this.boxX(offMm, wMm), yMm * MM, wMm * MM, hMm * MM)
  }
  /** shrinks a single line until it fits */
  fit(str: string, maxWMm: number, startSize: number, weight: number, minSize = 6): number {
    let size = startSize
    this.font(size, weight)
    while (size > minSize && this.ctx.measureText(str).width > maxWMm * MM) {
      size -= 0.5
      this.font(size, weight)
    }
    return size
  }
}

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => resolve(null)
    img.src = src
  })
}

/** Draws the certificate. Exported for tests that want to look at the picture. */
/** Clickable areas of the last drawn certificate canvas (image pixels), read when the PDF is assembled. */
const certLinks = new WeakMap<HTMLCanvasElement, { x: number; y: number; w: number; h: number; url: string }[]>()

export interface CertificateExtras {
  /** registered for online verification: the sequential number and a QR code to the verification page */
  registered?: boolean
  number?: number
}

export async function drawCertificate(canvas: HTMLCanvasElement, m: CertificateModel, tx: AcademyCopy, lang: AcademyLang, extras: CertificateExtras = {}): Promise<void> {
  canvas.width = PX_W
  canvas.height = PX_H
  const p = new Page(canvas, lang)
  const { ctx } = p
  const c = tx.cert
  const x = tx.certX
  const W = p.innerWidthMm
  try {
    await document.fonts?.ready
  } catch {
    /* fonts API missing: system fonts are used */
  }

  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, PX_W, PX_H)
  // frame
  ctx.strokeStyle = PURPLE
  ctx.lineWidth = 1.4 * MM
  ctx.strokeRect(8 * MM, 8 * MM, PX_W - 16 * MM, PX_H - 16 * MM)
  ctx.strokeStyle = LINE
  ctx.lineWidth = 0.4 * MM
  ctx.strokeRect(11 * MM, 11 * MM, PX_W - 22 * MM, PX_H - 22 * MM)

  // header: logo + brand
  const logo = await loadImage('/logo.svg')
  const logoMm = 13
  if (logo) ctx.drawImage(logo, p.boxX(0, logoMm), 19 * MM, logoMm * MM, logoMm * MM)
  p.line('PromptQuorum Academy', p.x(logoMm + 4), 28.5, { size: 6, weight: 700, color: PURPLE })

  // title
  p.line(c.title, PX_W / 2, 47, { size: 9.5, weight: 800, color: INK, align: 'center' })
  p.line(c.awardedTo, PX_W / 2, 57, { size: 4.2, color: MUTED, align: 'center' })

  // name (shrinks to fit), underline, note
  const nameSize = p.fit(m.name, 230, 9, 700, 4)
  p.line(m.name, PX_W / 2, 71.5, { size: nameSize, weight: 700, align: 'center' })
  ctx.fillStyle = LINE
  ctx.fillRect((PX_W - 200 * MM) / 2, 75 * MM, 200 * MM, 0.5 * MM)
  p.line(c.nameNote, PX_W / 2, 80.5, { size: 3, color: MUTED, align: 'center' })

  // programme
  p.line(c.forProgramme, PX_W / 2, 87, { size: 4.2, color: MUTED, align: 'center' })
  const subjectSize = p.fit(m.subject, 235, 12, 800, 5)
  p.paragraph(m.subject, 0, 100, W, { size: subjectSize, weight: 800, maxLines: 1, align: 'center', color: PURPLE })

  // result tiles
  const tiles: { value: string; label: string; color?: string }[] = [
    { value: `${m.percent}%`, label: `${c.overall} · ${formatPoints(m.correct, lang)}/${m.total}`, color: GOOD },
    { value: c.passed(m.passMark), label: c.tests + ': ' + tx.tests[m.testMode].label },
    { value: tx.minutes(m.learningMinutes), label: c.learningTime },
  ]
  const tileW = (W - 2 * 6) / 3
  tiles.forEach((t, i) => {
    const off = i * (tileW + 6)
    p.rect(off, 105, tileW, 22, '#f5f3ff')
    const at = p.x(off + 5)
    const size = p.fit(t.value, tileW - 10, i === 0 ? 10 : 5, 700, 3.4)
    p.line(t.value, at, i === 0 ? 117 : 115, { size, weight: 700, color: t.color ?? INK })
    p.paragraph(t.label, off + 5, 123, tileW - 10, { size: 3, color: MUTED, maxLines: 1 })
  })

  // dates
  const dates: [string, string][] = [
    [c.started, formatDisplayDate(m.startedAt, lang)],
    [c.completed, formatDisplayDate(m.completedAt, lang)],
    [c.issued, formatDisplayDate(m.issuedAt, lang)],
  ]
  dates.forEach(([label, value], i) => {
    const off = i * (tileW + 6)
    p.line(`${label}: ${value}`, p.x(off + 1), 134, { size: 3.5, color: INK })
  })

  // left: score per topic (at most 5 rows) and the reserved signature area
  const colW = (W - 10) / 2
  p.line(c.topicScores, p.x(0), 144, { size: 4, weight: 700, color: PURPLE })
  const rows = m.byTopic.slice(0, 5)
  rows.forEach((r, i) => {
    const y = 151 + i * 5.2
    p.paragraph(r.topic, 0, y, colW * 0.46, { size: 3.2, maxLines: 1 })
    const barOff = colW * 0.5
    const barW = colW * 0.38
    p.rect(barOff, y - 2.5, barW, 2.5, '#ede9fe')
    p.rect(barOff, y - 2.5, (barW * r.percent) / 100, 2.5, r.percent >= m.passMark ? GOOD : '#d97706')
    p.line(`${r.percent}%`, p.x(colW), y, { size: 3.2, weight: 700, align: 'end' })
  })
  p.rect(0, 178.6, 70, 0.4, '#9ca3af')
  p.line(x.signature, p.x(0), 182.4, { size: 2.6, color: MUTED })

  // right: number, "see Course Documentation", QR code (only when registered) or the "not registered" statement
  const right = colW + 10
  const qrMm = 30
  const textW = colW - qrMm - 6
  p.line(`${c.id}: ${m.id}`, p.x(right), 151, { size: 3.6, weight: 700 })
  if (extras.number) p.line(`${x.number} ${extras.number.toLocaleString(toOutputLocale(lang))}`, p.x(right), 158, { size: 5, weight: 700, color: PURPLE })
  p.paragraph(x.seeDoc(m.id), right, 165, textW, { size: 3.2, maxLines: 2, leading: 4.2, color: INK })
  if (extras.registered) {
    const matrix = qrMatrix(verifyUrl(m.id))
    const quiet = 3
    const cell = (qrMm * MM) / (matrix.length + 2 * quiet)
    const originX = p.boxX(W - qrMm, qrMm)
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(originX, 142 * MM, qrMm * MM, qrMm * MM)
    ctx.fillStyle = '#000000'
    for (let r = 0; r < matrix.length; r++) for (let col = 0; col < matrix.length; col++) if (matrix[r][col]) ctx.fillRect(originX + (col + quiet) * cell, 142 * MM + (r + quiet) * cell, cell + 0.5, cell + 0.5)
    ctx.strokeStyle = LINE
    ctx.lineWidth = 0.3 * MM
    ctx.strokeRect(originX, 142 * MM, qrMm * MM, qrMm * MM)
    p.line(x.scan, originX + (qrMm * MM) / 2, 175.2, { size: 2.8, color: MUTED, align: 'center' })
    // The same address as a printed, clickable link next to the QR code (clickable in the PDF, readable on paper).
    const url = verifyUrl(m.id)
    const linkWmm = Math.min(colW - qrMm - 6, 100)
    p.line(url, p.x(right), 180.6, { size: 2.7, weight: 600, color: '#1d4ed8' })
    certLinks.set(canvas, [
      { x: originX, y: 142 * MM, w: qrMm * MM, h: qrMm * MM, url },
      { x: p.boxX(right, linkWmm), y: 177.8 * MM, w: linkWmm * MM, h: 4 * MM, url },
    ])
  } else {
    p.paragraph(x.notRegistered, right, 173, colW, { size: 3.2, color: MUTED, maxLines: 2, leading: 4 })
  }

  // footer: ID, statements (inside the frame, which ends at 199 mm). Short disclaimer only; the longer notice is on the Course Documentation cover.
  ctx.fillStyle = LINE
  ctx.fillRect(p.boxX(0, W), 184.4 * MM, W * MM, 0.4 * MM)
  p.line(`${c.id}: ${m.id}`, p.x(0), 189.4, { size: 3.6, weight: 700 })
  p.line('PromptQuorum Academy · promptquorum.com/academy', p.x(W), 189.4, { size: 3, color: MUTED, align: 'end' })
  // Written answers (free / explain) are graded by AI: the certificate says so too, in a third footer line.
  if (m.usesWrittenAnswers) p.paragraph(`${c.disclaimer} ${c.aiNote} ${tx.aiGradedNotice}`, 0, 192.6, W, { size: 2.3, color: MUTED, maxLines: 3, leading: 2.6 })
  else p.paragraph(`${c.disclaimer} ${c.aiNote}`, 0, 193.3, W, { size: 2.5, color: MUTED, maxLines: 2, leading: 3 })
}

// ------------------------------------------------------------------------------------------------ PDF container

const enc = new TextEncoder()

/** PDF text string: plain ASCII in parentheses, anything else as UTF-16BE hex. */
export function pdfString(s: string): string {
  if (/^[\x20-\x7e]*$/.test(s)) return `(${s.replace(/([\\()])/g, '\\$1')})`
  let hex = 'FEFF'
  for (let i = 0; i < s.length; i++) hex += s.charCodeAt(i).toString(16).padStart(4, '0')
  return `<${hex}>`
}

/** One-page A4 landscape PDF holding the JPEG. Pure bytes in, bytes out, so it can be unit-tested. */
export function jpegToPdf(
  jpeg: Uint8Array,
  px: { w: number; h: number },
  info: { title: string; subject: string; keywords: string; created: Date },
  /** clickable areas in image pixels from the top-left corner (link annotations, objects 7 and up) */
  links: { x: number; y: number; w: number; h: number; url: string }[] = [],
): Uint8Array {
  const parts: Uint8Array[] = []
  const offsets: number[] = []
  let length = 0
  const push = (b: Uint8Array | string) => {
    const bytes = typeof b === 'string' ? enc.encode(b) : b
    parts.push(bytes)
    length += bytes.length
  }
  const obj = (n: number, body: string | (() => void)) => {
    offsets[n] = length
    push(`${n} 0 obj\n`)
    typeof body === 'string' ? push(body) : body()
    push('\nendobj\n')
  }
  const d = info.created
  const pad = (n: number) => String(n).padStart(2, '0')
  const date = `D:${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
  const W = 841.89
  const H = 595.28
  push('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n')
  obj(1, '<< /Type /Catalog /Pages 2 0 R >>')
  obj(2, '<< /Type /Pages /Kids [3 0 R] /Count 1 >>')
  obj(3, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /XObject << /Im0 5 0 R >> >> /Contents 4 0 R${links.length ? ` /Annots [${links.map((_, i) => `${7 + i} 0 R`).join(' ')}]` : ''} >>`)
  const content = `q ${W} 0 0 ${H} 0 0 cm /Im0 Do Q`
  obj(4, `<< /Length ${content.length} >>\nstream\n${content}\nendstream`)
  obj(5, () => {
    push(`<< /Type /XObject /Subtype /Image /Width ${px.w} /Height ${px.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`)
    push(jpeg)
    push('\nendstream')
  })
  obj(6, `<< /Title ${pdfString(info.title)} /Subject ${pdfString(info.subject)} /Keywords ${pdfString(info.keywords)} /Producer (PromptQuorum Academy) /CreationDate (${date}) >>`)
  links.forEach((l, i) => {
    const kx = W / px.w
    const ky = H / px.h
    const r = [l.x * kx, H - (l.y + l.h) * ky, (l.x + l.w) * kx, H - l.y * ky].map((v) => v.toFixed(2))
    obj(7 + i, `<< /Type /Annot /Subtype /Link /Rect [${r.join(' ')}] /Border [0 0 0] /A << /S /URI /URI ${pdfString(l.url)} >> >>`)
  })
  const count = 7 + links.length
  const xref = length
  push(`xref\n0 ${count}\n0000000000 65535 f \n`)
  for (let n = 1; n < count; n++) push(`${String(offsets[n]).padStart(10, '0')} 00000 n \n`)
  push(`trailer\n<< /Size ${count} /Root 1 0 R /Info 6 0 R >>\nstartxref\n${xref}\n%%EOF\n`)
  const out = new Uint8Array(length)
  let at = 0
  for (const b of parts) {
    out.set(b, at)
    at += b.length
  }
  return out
}

export async function renderCertificatePdf(m: CertificateModel, tx: AcademyCopy, lang: AcademyLang, extras: CertificateExtras = {}): Promise<Blob> {
  const canvas = document.createElement('canvas')
  await drawCertificate(canvas, m, tx, lang, extras)
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.92))
  if (!blob) throw new Error('certificate: could not encode image')
  const pdf = jpegToPdf(new Uint8Array(await blob.arrayBuffer()), { w: PX_W, h: PX_H }, { title: `${tx.cert.title} ${m.id}`, subject: m.subject, keywords: m.id, created: new Date(m.issuedAt) }, certLinks.get(canvas) ?? [])
  return new Blob([pdf as BlobPart], { type: 'application/pdf' })
}

/** The certificate as a PNG image (for copying into WhatsApp / Telegram, which paste images, not PDFs). */
export async function renderCertificatePng(m: CertificateModel, tx: AcademyCopy, lang: AcademyLang, extras: CertificateExtras = {}): Promise<Blob> {
  const canvas = document.createElement('canvas')
  await drawCertificate(canvas, m, tx, lang, extras)
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'))
  if (!blob) throw new Error('certificate: could not encode image')
  return blob
}
