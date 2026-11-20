// PromptQuorum Academy — the Course Documentation PDF, created in the browser (SPEC 12.3). Multi-page A4 portrait,
// each page drawn on a canvas (150 dpi) and embedded as a JPEG, like the certificate: the browser's own text shaping
// gives correct Arabic, CJK and Cyrillic without font files. Every page carries a footer with certificate ID,
// "page x of y", issue date and the AI-generated statement.

import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { DocModel, DocOpenQuestion, DocQuestion } from '@/lib/academy/documentation'
import { jpegsToPdf } from '@/lib/academy/pdf-pages'
import { langDirOf, htmlLangOf } from '@/lib/academy/language'
import type { AcademyLang } from '@/lib/academy/types'
import type { AcademyCopy } from './copy'
import { creditLabel } from './credit'

const PX_W = 1240
const PX_H = 1754
const M = 96
const TOP = 110
const BOTTOM = PX_H - 130
const PURPLE = '#6d28d9'
const INK = '#1f2937'
const MUTED = '#6b7280'
const GOOD = '#15803d'
const BAD = '#b91c1c'
const FONT = 'system-ui, "Noto Sans", "Segoe UI", "Helvetica Neue", Arial, "Noto Sans Arabic", "Noto Sans CJK JP", "Hiragino Sans", "Yu Gothic", "Microsoft YaHei", "PingFang SC", "Malgun Gothic", sans-serif'

class Doc {
  readonly pages: HTMLCanvasElement[] = []
  ctx!: CanvasRenderingContext2D
  y = TOP
  readonly rtl: boolean
  constructor(private readonly lang: string) {
    this.rtl = langDirOf(lang) === 'rtl'
    this.newPage()
  }
  newPage() {
    const c = document.createElement('canvas')
    c.width = PX_W
    c.height = PX_H
    const ctx = c.getContext('2d')
    if (!ctx) throw new Error('documentation: canvas not available')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, PX_W, PX_H)
    ctx.direction = this.rtl ? 'rtl' : 'ltr'
    ;(ctx as CanvasRenderingContext2D & { lang?: string }).lang = htmlLangOf(this.lang)
    ctx.textBaseline = 'alphabetic'
    ctx.textAlign = 'start'
    this.pages.push(c)
    this.ctx = ctx
    this.y = TOP
  }
  private font(size: number, weight: number) {
    this.ctx.font = `${weight} ${size}px ${FONT}`
  }
  /** x of the start edge (left for LTR, right for RTL) plus an indent towards the inside */
  private x(indent: number) {
    return this.rtl ? PX_W - M - indent : M + indent
  }
  wrap(text: string, maxW: number, size: number, weight: number): string[] {
    this.font(size, weight)
    const out: string[] = []
    for (const para of text.split('\n')) {
      // split after spaces, and between CJK characters (no spaces in those scripts)
      const tokens = para.split(/(?<=\s)|(?=[぀-ヿ㐀-鿿＀-￯])/u)
      let cur = ''
      for (const tok of tokens) {
        const next = cur + tok
        if (cur && this.ctx.measureText(next.trimEnd()).width > maxW) {
          out.push(cur.trimEnd())
          cur = tok.trimStart()
        } else cur = next
      }
      out.push(cur.trimEnd())
    }
    return out
  }
  /** Draws wrapped text, breaking across pages line by line. */
  para(text: string, o: { size?: number; weight?: number; color?: string; indent?: number; gap?: number } = {}) {
    const size = o.size ?? 23
    const weight = o.weight ?? 400
    const indent = o.indent ?? 0
    const lineH = size * 1.45
    for (const line of this.wrap(text, PX_W - 2 * M - indent, size, weight)) {
      if (this.y + lineH > BOTTOM) this.newPage()
      this.font(size, weight)
      this.ctx.fillStyle = o.color ?? INK
      this.ctx.fillText(line, this.x(indent), this.y + size)
      this.y += lineH
    }
    this.y += o.gap ?? 6
  }
  heading(text: string, size = 34) {
    if (this.y + size * 3 > BOTTOM) this.newPage()
    this.y += size * 0.6
    this.para(text, { size, weight: 700, color: PURPLE, gap: 10 })
  }
  keep(h: number) {
    if (this.y + h > BOTTOM) this.newPage()
  }
  rule() {
    this.ctx.fillStyle = '#e5e7eb'
    this.ctx.fillRect(M, this.y, PX_W - 2 * M, 2)
    this.y += 14
  }
}

function questionBlock(d: Doc, c: AcademyCopy['doc'], q: DocQuestion, n: number) {
  d.keep(260)
  d.para(`${n}. ${q.prompt}`, { weight: 700, gap: 4 })
  q.options.forEach((o, i) => {
    const mark = i === q.correctIndex ? '✓' : i === q.chosen ? '✗' : '·'
    d.para(`${mark} ${i + 1}) ${o}`, { indent: 24, color: i === q.correctIndex ? GOOD : i === q.chosen ? BAD : MUTED, gap: 2 })
  })
  const chosen = q.chosen >= 0 ? `${q.chosen + 1}) ${q.options[q.chosen]}` : '–'
  d.para(`${c.yourAnswer}: ${chosen} — ${q.right ? c.right : c.wrong}`, { size: 21, color: q.right ? GOOD : BAD, indent: 24, gap: 2 })
  if (!q.right && q.correctIndex !== null) d.para(`${c.correctAnswer}: ${q.correctIndex + 1}) ${q.options[q.correctIndex]}`, { size: 21, indent: 24, gap: 2 })
  if (q.explanation) d.para(`${c.explanation}: ${q.explanation}`, { size: 20, color: MUTED, indent: 24, gap: 12 })
}

function openQuestionBlock(d: Doc, tx: AcademyCopy, c: AcademyCopy['doc'], q: DocOpenQuestion, n: number) {
  d.keep(260)
  d.para(`${n}. ${q.prompt}`, { weight: 700, gap: 4 })
  d.para(`${c.yourAnswer}: ${q.answer || '–'}`, { size: 21, indent: 24, gap: 2 })
  d.para(creditLabel(tx, q.credit), { size: 21, color: q.credit >= 1 ? GOOD : q.credit > 0 ? MUTED : BAD, indent: 24, gap: 2 })
  if (q.modelAnswer) d.para(`${tx.modelAnswerLabel}: ${q.modelAnswer}`, { size: 20, color: MUTED, indent: 24, gap: 12 })
}

export async function drawDocumentation(m: DocModel, tx: AcademyCopy, lang: AcademyLang, programmeLanguage: string): Promise<HTMLCanvasElement[]> {
  void programmeLanguage
  const c = tx.doc
  const d = new Doc(lang)
  try {
    await document.fonts?.ready
  } catch {
    /* system fonts */
  }
  const cert = m.cert
  d.para('PromptQuorum Academy', { size: 24, weight: 700, color: MUTED, gap: 2 })
  d.para(c.title, { size: 52, weight: 800, color: PURPLE, gap: 14 })
  d.para(cert.subject, { size: 40, weight: 700, gap: 14 })
  const rows: [string, string][] = [
    [c.certId, cert.id],
    ...(m.number ? ([[c.number, `No. ${m.number.toLocaleString()}`]] as [string, string][]) : []),
    [c.issued, formatDisplayDate(cert.issuedAt, lang)],
    [c.language, m.languageName],
    [c.learner, cert.name],
    [c.started, formatDisplayDate(cert.startedAt, lang)],
    [c.completed, formatDisplayDate(cert.completedAt, lang)],
    [c.activeTime, tx.minutes(cert.learningMinutes)],
    [c.testMode, tx.tests[cert.testMode].label],
    [c.attempts, String(m.attemptsCount)],
    [c.overall, `${cert.percent}% (${cert.correct}/${cert.total})`],
    [c.status, cert.percent >= cert.passMark ? c.passed : c.notPassed],
  ]
  for (const [k, v] of rows) {
    d.para(k, { size: 19, color: MUTED, gap: 0 })
    d.para(v, { size: 24, weight: 600, gap: 7 })
  }
  d.para(c.perTopic, { size: 21, weight: 700, color: PURPLE, gap: 4 })
  for (const t of cert.byTopic) d.para(`${t.topic}: ${t.percent}% (${t.correct}/${t.total})`, { size: 21, indent: 16, gap: 2 })
  d.y += 12
  d.keep(240)
  d.rule()
  d.para(c.notice, { size: 20, color: INK, gap: 8 })
  d.para(c.aiNote, { size: 18, color: MUTED, gap: 8 })
  if (cert.usesWrittenAnswers) d.para(tx.aiGradedNotice, { size: 18, color: MUTED, gap: 8 })

  d.newPage()
  d.heading(c.programme)
  d.para(c.objectives, { weight: 700, gap: 3 })
  m.objectives.forEach((o, i) => d.para(`${i + 1}. ${o}`, { size: 21, indent: 16, gap: 2 }))
  d.y += 10
  d.para(c.lessons, { weight: 700, gap: 3 })
  m.lessons.forEach((l, i) => d.para(`${i + 1}. ${l.title} — ${c.estMin}: ${l.estimatedMinutes} · ${c.recMin}: ${l.recordedMinutes}`, { size: 21, indent: 16, gap: 2 }))

  if (m.diagnostic.length) {
    d.heading(`${c.diagnostic} (${c.notScored})`)
    m.diagnostic.forEach((q, i) => questionBlock(d, c, q, i + 1))
  }
  for (const a of m.attempts) {
    d.heading(`${a.lesson ? `${c.lessons} ${a.lesson}: ${a.lessonTitle ?? ''}` : tx.finalTestTitle} — ${c.attempt(a.attemptNumber)}`, 28)
    d.para(`${a.correct}/${a.total}${a.passing ? ` · ${c.passingAttempt}` : ''} · ${formatDisplayDate(a.takenAt, lang)}`, { size: 21, color: a.passing ? GOOD : MUTED })
    a.questions.forEach((q, i) => questionBlock(d, c, q, i + 1))
    a.openQuestions.forEach((q, i) => openQuestionBlock(d, tx, c, q, i + 1))
  }

  d.newPage()
  d.heading(c.lessonsAppendix)
  for (const l of m.lessonsText) {
    d.heading(l.title, 28)
    for (const s of l.sections) {
      d.para(s.heading, { weight: 700, gap: 3 })
      d.para(s.body.replace(/\*\*/g, '').replace(/^#+\s*/gm, ''), { size: 21, gap: 8 })
    }
    if (l.furtherReading.length) {
      d.para(c.furtherReading, { size: 20, weight: 700, color: MUTED, gap: 2 })
      for (const r of l.furtherReading) d.para(`${r.title} — ${r.url}`, { size: 18, color: MUTED, indent: 16, gap: 2 })
    }
  }

  // Footer on every page: certificate ID, page x of y, issue date, AI statement.
  const n = d.pages.length
  d.pages.forEach((page, i) => {
    const ctx = page.getContext('2d')!
    ctx.fillStyle = '#e5e7eb'
    ctx.fillRect(M, PX_H - 112, PX_W - 2 * M, 2)
    ctx.font = `400 17px ${FONT}`
    ctx.fillStyle = MUTED
    ctx.textAlign = 'center'
    ctx.direction = d.rtl ? 'rtl' : 'ltr'
    ctx.fillText(c.footer(cert.id, i + 1, n, formatDisplayDate(cert.issuedAt, lang)), PX_W / 2, PX_H - 76)
  })
  return d.pages
}

export async function renderDocumentationPdf(m: DocModel, tx: AcademyCopy, lang: AcademyLang, programmeLanguage: string): Promise<Uint8Array> {
  const canvases = await drawDocumentation(m, tx, lang, programmeLanguage)
  const pages = []
  for (const cv of canvases) {
    const blob = await new Promise<Blob | null>((resolve) => cv.toBlob(resolve, 'image/jpeg', 0.88))
    if (!blob) throw new Error('documentation: could not encode page')
    pages.push({ jpeg: new Uint8Array(await blob.arrayBuffer()), px: { w: PX_W, h: PX_H }, pt: { w: 595.28, h: 841.89 } })
  }
  return jpegsToPdf(pages, { title: `${tx.doc.title} ${m.cert.id}`, subject: m.cert.subject, keywords: m.cert.id, created: new Date(m.cert.issuedAt) })
}
