// PromptQuorum Academy — the Course Documentation PDF, created in the browser (SPEC 12.3). Multi-page A4 portrait,
// each page drawn on a canvas (150 dpi) and embedded as a JPEG, like the certificate: the browser's own text shaping
// gives correct Arabic, CJK and Cyrillic without font files. Every page carries a footer with certificate ID,
// "page x of y", issue date and the AI-generated statement.

import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { DocModel, DocOpenQuestion, DocQuestion } from '@/lib/academy/documentation'
import { jpegsToPdf } from '@/lib/academy/pdf-pages'
import { qrMatrix, verifyUrl } from '@/lib/academy/qr'
import { langDirOf, htmlLangOf } from '@/lib/academy/language'
import type { AcademyLang } from '@/lib/academy/types'
import type { AcademyCopy } from './copy'
import { creditLabel } from './credit'
import { shareCopyFor } from './copy/share'
import { formatPoints } from '@/lib/academy/format-points'
import { formatDuration } from '@/lib/academy/record'
import { toOutputLocale } from '@/lib/i18n/constants'
import { RECORD_COPY } from './copy/record'

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

/** Clickable areas per drawn page (image pixels, top-left origin); read when the PDF is assembled. */
const pageLinks = new WeakMap<HTMLCanvasElement, { x: number; y: number; w: number; h: number; url: string }[]>()

class Doc {
  readonly pages: HTMLCanvasElement[] = []
  ctx!: CanvasRenderingContext2D
  y = TOP
  readonly rtl: boolean
  /** page-specific section label (top of every page) */
  label = ''
  readonly labels: string[] = []
  constructor(private readonly lang: string) {
    this.rtl = langDirOf(lang) === 'rtl'
    this.newPage()
  }
  /** Starts a new page that belongs to a named section (a continuation page keeps the same label). */
  section(label: string, first = false) {
    if (!first) this.newPage()
    this.label = label
    this.labels[this.labels.length - 1] = label
  }
  get page(): number {
    return this.pages.length - 1
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
    this.labels.push(this.label)
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
  para(text: string, o: { size?: number; weight?: number; color?: string; indent?: number; gap?: number; link?: string; width?: number } = {}) {
    const size = o.size ?? 23
    const weight = o.weight ?? 400
    const indent = o.indent ?? 0
    const lineH = size * 1.45
    for (const line of this.wrap(text, o.width ?? PX_W - 2 * M - indent, size, weight)) {
      if (this.y + lineH > BOTTOM) this.newPage()
      this.font(size, weight)
      this.ctx.fillStyle = o.color ?? INK
      this.ctx.fillText(line, this.x(indent), this.y + size)
      if (o.link) {
        // clickable line (further reading): the rectangle covers the text it was drawn with
        const w = this.ctx.measureText(line).width
        const links = pageLinks.get(this.ctx.canvas) ?? []
        links.push({ x: this.rtl ? PX_W - M - indent - w : M + indent, y: this.y, w, h: lineH, url: o.link })
        pageLinks.set(this.ctx.canvas, links)
      }
      this.y += lineH
    }
    this.y += o.gap ?? 6
  }
  heading(text: string, size = 34) {
    if (this.y + size * 3 > BOTTOM) this.newPage()
    this.y += size * 0.6
    this.para(text, { size, weight: 700, color: PURPLE, gap: 10 })
  }
  /** thin vertical accent bar beside a block that started at (page, y0): separates questions from lessons and from each other */
  bar(page: number, y0: number, color: string) {
    if (page !== this.page || this.y <= y0) return
    this.ctx.fillStyle = color
    this.ctx.fillRect(this.rtl ? PX_W - M + 14 : M - 20, y0 + 2, 6, this.y - y0 - 8)
  }
  /** label + value pair as used on the record page */
  row(k: string, v: string) {
    // two columns: label (muted) at the start edge, value (bold) beside it; the row is as tall as the taller column
    const LABEL_W = 380
    this.keep(80)
    const y0 = this.y
    const pg = this.page
    this.para(k, { size: 19, color: MUTED, gap: 0, width: LABEL_W })
    const yLabel = this.y
    if (this.page !== pg) return
    this.y = y0
    this.para(v, { size: 22, weight: 600, gap: 0, indent: LABEL_W + 24 })
    this.y = Math.max(this.y, yLabel) + 9
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
  const page = d.page
  const y0 = d.y
  d.para(`${n}. ${q.prompt}`, { weight: 700, gap: 4 })
  q.options.forEach((o, i) => {
    const mark = i === q.correctIndex ? '✓' : i === q.chosen ? '✗' : '·'
    d.para(`${mark} ${i + 1}) ${o}`, { indent: 24, color: i === q.correctIndex ? GOOD : i === q.chosen ? BAD : MUTED, gap: 2 })
  })
  const chosen = q.chosen >= 0 ? `${q.chosen + 1}) ${q.options[q.chosen]}` : '–'
  d.para(`${c.yourAnswer}: ${chosen} — ${q.right ? c.right : c.wrong}`, { size: 21, color: q.right ? GOOD : BAD, indent: 24, gap: 2 })
  if (!q.right && q.correctIndex !== null) d.para(`${c.correctAnswer}: ${q.correctIndex + 1}) ${q.options[q.correctIndex]}`, { size: 21, indent: 24, gap: 2 })
  if (q.explanation) d.para(`${c.explanation}: ${q.explanation}`, { size: 20, color: MUTED, indent: 24, gap: 12 })
  d.bar(page, y0, q.right ? '#86efac' : '#fca5a5')
}

function openQuestionBlock(d: Doc, tx: AcademyCopy, c: AcademyCopy['doc'], q: DocOpenQuestion, n: number) {
  d.keep(260)
  const page = d.page
  const y0 = d.y
  d.para(`${n}. ${q.prompt}`, { weight: 700, gap: 4 })
  d.para(`${c.yourAnswer}: ${q.answer || '–'}`, { size: 21, indent: 24, gap: 2 })
  d.para(creditLabel(tx, q.credit), { size: 21, color: q.credit >= 1 ? GOOD : q.credit > 0 ? MUTED : BAD, indent: 24, gap: 2 })
  if (q.modelAnswer) d.para(`${tx.modelAnswerLabel}: ${q.modelAnswer}`, { size: 20, color: MUTED, indent: 24, gap: 12 })
  d.bar(page, y0, q.credit >= 1 ? '#86efac' : q.credit > 0 ? '#d1d5db' : '#fca5a5')
}

export async function drawDocumentation(m: DocModel, tx: AcademyCopy, lang: AcademyLang, programmeLanguage: string): Promise<HTMLCanvasElement[]> {
  void programmeLanguage
  const c = tx.doc
  const R = RECORD_COPY[lang]
  const rec = m.record
  const dur = (sec: number) => formatDuration(sec, toOutputLocale(lang))
  const d = new Doc(lang)
  try {
    await document.fonts?.ready
  } catch {
    /* system fonts */
  }
  const cert = m.cert
  const abs = (u: string) => (u.startsWith('/') ? `https://www.promptquorum.com${u}` : u)
  const finalTotal = cert.total

  // ---- Page 1: learning achievement record
  d.section(c.sectionRecord, true)
  d.para('PromptQuorum Academy', { size: 24, weight: 700, color: MUTED, gap: 2 })
  d.para(c.title, { size: 52, weight: 800, color: PURPLE, gap: 14 })
  d.para(cert.subject, { size: 40, weight: 700, gap: 14 })
  const rows: [string, string][] = [
    [c.certId, cert.id],
    ...(m.number ? ([[c.number, `No. ${m.number.toLocaleString()}`]] as [string, string][]) : []),
    [c.issued, formatDisplayDate(cert.issuedAt, lang)],
    [c.language, m.languageName],
    [c.learner, cert.name],
    [c.programmeType, c.programmeTypeValue],
    [c.scope, c.scopeValue(m.objectives.length, m.lessons.length)],
    [c.started, formatDisplayDate(cert.startedAt, lang)],
    [c.completed, formatDisplayDate(cert.completedAt, lang)],
    [R.totalTime, dur(rec.totalSeconds)],
    [c.activeTime, dur(rec.activeSeconds)],
    [R.awayTime, dur(rec.awaySeconds)],
    [R.sessions, String(rec.sessions)],
    [c.testMode, tx.tests[cert.testMode].label],
    [c.assessmentFormat, `${tx.testFormats[m.request.testFormat].label}${m.request.testFormat === 'choice' ? ` (${shareCopyFor(lang).choiceN(m.request.choiceOptions)})` : ''} · ${c.questionsCount(finalTotal)}`],
    [c.attempts, String(m.attemptsCount)],
    [c.overall, `${cert.percent}% (${formatPoints(cert.correct, lang)}/${cert.total})`],
    [c.status, cert.percent >= cert.passMark ? c.passed : c.notPassed],
  ]
  for (const [k, v] of rows) d.row(k, v)
  d.para(c.timeNote, { size: 18, color: MUTED, gap: 8 })
  // Learning record: where the active time went, how many questions were answered, and the definition of both times.
  d.heading(R.title, 28)
  d.row(R.inLessons, dur(rec.lessonsActiveSeconds))
  d.row(R.inTests, dur(rec.testsActiveSeconds))
  if (rec.secondsPerQuestion !== null) d.row(R.perQuestion, dur(rec.secondsPerQuestion))
  d.row(R.attempts, String(rec.finalAttempts))
  d.row(R.tutor, formatPoints(rec.tutorRequests, lang))
  d.para(R.answersTitle, { size: 21, weight: 700, color: PURPLE, gap: 4 })
  const stages: [string, typeof rec.quickCheck][] = [[R.quickCheck, rec.quickCheck], [R.lessonQuizzes, rec.lessonQuizzes], [R.finalTest, rec.finalTests]]
  for (const [label, st] of stages) {
    if (!st.asked) continue
    d.para(`${label}: ${R.answeredOf(st.answered, st.asked)}${st.correct === null ? '' : ` · ${R.correctN(formatPoints(st.correct, lang))}`}`, { size: 21, indent: 16, gap: 2 })
  }
  d.para(R.rule, { size: 18, color: MUTED, gap: 8 })
  d.para(c.perTopic, { size: 21, weight: 700, color: PURPLE, gap: 4 })
  for (const t of cert.byTopic) d.para(`${t.topic}: ${t.percent}% (${formatPoints(t.correct, lang)}/${t.total})`, { size: 21, indent: 16, gap: 2 })
  d.y += 12
  // Achievement versus limits of the assessment, side by side in sequence.
  d.keep(300)
  d.rule()
  d.para(c.showsTitle, { size: 22, weight: 700, color: GOOD, gap: 3 })
  d.para(c.shows, { size: 20, gap: 8 })
  d.para(c.limitsTitle, { size: 22, weight: 700, color: BAD, gap: 3 })
  d.para(c.limits, { size: 20, gap: 8 })
  // The course subject is the learner's own free request, not a PromptQuorum curriculum.
  d.para(c.subjectNote, { size: 19, color: INK, gap: 8 })
  d.para(c.notice, { size: 19, color: INK, gap: 8 })
  d.para(c.aiNote, { size: 18, color: MUTED, gap: 8 })
  if (cert.usesWrittenAnswers) d.para(tx.aiGradedNotice, { size: 18, color: MUTED, gap: 8 })

  // ---- Page 2: learning programme (request, objectives to lessons, time, quick check)
  d.section(c.sectionProgramme)
  d.heading(c.requestTitle)
  d.para(c.requestHint, { size: 19, color: MUTED, gap: 8 })
  d.row(c.subject, cert.subject)
  d.row(c.level, tx.levels[m.request.selfLevel].label)
  d.row(c.plannedTime, tx.minutes(m.request.availableMinutes))
  d.row(c.language, m.languageName)
  d.heading(c.mapTitle, 28)
  m.objectives.forEach((o, i) => {
    const y0 = d.y
    const pg = d.page
    d.para(`${i + 1}. ${o}`, { size: 21, weight: 600, gap: 2 })
    const covered = m.objectiveLessons[i] ?? []
    if (covered.length) d.para(`→ ${covered.map((l) => `${c.lessonN(l.number)}: ${l.title}`).join(' · ')}`, { size: 19, color: MUTED, indent: 24, gap: 8 })
    d.bar(pg, y0, '#c4b5fd')
  })
  d.heading(c.lessons, 28)
  m.lessons.forEach((l, i) => d.para(`${c.lessonN(i + 1)}: ${l.title} — ${c.estMin}: ${l.estimatedMinutes} · ${c.recMin}: ${l.recordedMinutes}`, { size: 21, indent: 16, gap: 2 }))
  d.y += 6
  const diff = m.totals.recordedMinutes - m.totals.estimatedMinutes
  d.para(`${c.timeTotals}: ${c.estTotal} ${tx.minutes(m.totals.estimatedMinutes)} · ${c.recTotal} ${tx.minutes(m.totals.recordedMinutes)} · ${c.diff} ${diff > 0 ? '+' : diff < 0 ? '−' : ''}${tx.minutes(Math.abs(diff))}`, { size: 21, weight: 700, gap: 10 })
  if (m.diagnostic.length) {
    d.heading(`${c.diagnostic} (${c.notScored})`, 28)
    d.para(c.diagnosticPurpose, { size: 19, color: MUTED, gap: 8 })
    m.diagnostic.forEach((q, i) => questionBlock(d, c, q, i + 1))
  }

  // ---- Assessment evidence
  d.section(c.sectionAssessment)
  d.heading(c.sectionAssessment)
  d.para(`${tx.testFormats[m.request.testFormat].label}${m.request.testFormat === 'choice' ? ` (${shareCopyFor(lang).choiceN(m.request.choiceOptions)})` : ''} · ${c.questionsCount(finalTotal)} · ${c.passed}: ≥ ${cert.passMark}%`, { size: 24, weight: 700, gap: 6 })
  d.para(c.scoring(cert.passMark), { size: 19, color: INK, gap: 6 })
  d.para(c.assessmentLimit, { size: 19, color: MUTED, gap: 10 })
  for (const a of m.attempts) {
    d.heading(`${a.lesson ? `${c.lessons} ${a.lesson}: ${a.lessonTitle ?? ''}` : tx.finalTestTitle} — ${c.attempt(a.attemptNumber)}`, 28)
    d.para(`${formatPoints(a.correct, lang)}/${a.total}${a.passing ? ` · ${c.passingAttempt}` : ''} · ${formatDisplayDate(a.takenAt, lang)}`, { size: 21, color: a.passing ? GOOD : MUTED })
    a.questions.forEach((q, i) => questionBlock(d, c, q, i + 1))
    a.openQuestions.forEach((q, i) => openQuestionBlock(d, tx, c, q, i + 1))
  }

  // ---- Complete learning material: each lesson starts with its learning objective(s)
  d.section(c.sectionMaterial)
  d.heading(c.lessonsAppendix)
  m.lessonsText.forEach((l, li) => {
    d.keep(300) // a lesson never starts as a lone heading at the bottom of a page
    d.heading(`${c.lessonN(li + 1)}: ${l.title}`, 28)
    if (l.objectives.length) {
      d.para(c.lessonObjective, { size: 19, weight: 700, color: MUTED, gap: 2 })
      for (const o of l.objectives) d.para(o, { size: 21, weight: 600, color: PURPLE, indent: 16, gap: 4 })
      d.y += 4
    }
    for (const s of l.sections) {
      const pg = d.page
      const y0 = d.y
      d.para(s.heading, { size: 23, weight: 700, gap: 4 })
      d.para(s.body.replace(/\*\*/g, '').replace(/^#+\s*/gm, ''), { size: 21, gap: 12 })
      d.bar(pg, y0, '#e9d5ff')
    }
    if (l.furtherReading.length) {
      d.para(c.furtherReading, { size: 20, weight: 700, color: MUTED, gap: 2 })
      for (const r of l.furtherReading) d.para(`${r.title} — ${abs(r.url)}`, { size: 18, color: '#1d4ed8', indent: 16, gap: 2, link: abs(r.url) })
      d.y += 6
    }
  })

  // ---- Final page: credential information (verification link, QR code, notes)
  d.section(c.sectionCredential)
  d.heading(c.sectionCredential)
  d.row(c.certId, cert.id)
  if (m.number) d.row(c.number, `No. ${m.number.toLocaleString()}`)
  d.row(c.issued, formatDisplayDate(cert.issuedAt, lang))
  d.y += 8
  if (m.number) {
    // Registered: QR code and a clickable link to the verification page (clickable in the PDF, scannable on paper).
    const url = verifyUrl(cert.id)
    const matrix = qrMatrix(url)
    const qrPx = 230
    const quiet = 3
    const cell = qrPx / (matrix.length + 2 * quiet)
    const top = d.y
    const qx = d.rtl ? PX_W - M - qrPx : M
    d.ctx.fillStyle = '#ffffff'
    d.ctx.fillRect(qx, top, qrPx, qrPx)
    d.ctx.fillStyle = '#000000'
    for (let r = 0; r < matrix.length; r++) for (let col = 0; col < matrix.length; col++) if (matrix[r][col]) d.ctx.fillRect(qx + (col + quiet) * cell, top + (r + quiet) * cell, cell + 0.5, cell + 0.5)
    d.ctx.strokeStyle = '#d1d5db'
    d.ctx.lineWidth = 2
    d.ctx.strokeRect(qx, top, qrPx, qrPx)
    const links = pageLinks.get(d.ctx.canvas) ?? []
    links.push({ x: qx, y: top, w: qrPx, h: qrPx, url })
    d.para(c.verifyTitle, { size: 26, weight: 700, color: PURPLE, indent: qrPx + 28, gap: 6 })
    const ly = d.y
    d.para(url, { size: 22, weight: 600, color: '#1d4ed8', indent: qrPx + 28, gap: 6 })
    links.push({ x: M + (d.rtl ? 0 : qrPx + 28), y: ly, w: PX_W - 2 * M - qrPx - 28, h: d.y - ly, url })
    d.para(c.verifyHint, { size: 19, color: MUTED, indent: qrPx + 28, gap: 6 })
    pageLinks.set(d.ctx.canvas, links)
    d.y = Math.max(d.y, top + qrPx) + 14
  } else {
    d.para(c.notRegisteredDoc, { size: 19, color: MUTED, gap: 10 })
  }
  d.rule()
  d.para(c.notice, { size: 20, color: INK, gap: 8 })
  d.para(c.aiNote, { size: 18, color: MUTED, gap: 8 })

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
    // page-specific section label (navigation) at the top, with a thin rule
    const label = d.labels[i]
    if (label) {
      ctx.font = `600 18px ${FONT}`
      ctx.fillStyle = PURPLE
      ctx.textAlign = d.rtl ? 'right' : 'left'
      ctx.fillText(`PromptQuorum Academy · ${label}`, d.rtl ? PX_W - M : M, 62)
      ctx.fillStyle = '#e5e7eb'
      ctx.fillRect(M, 76, PX_W - 2 * M, 2)
      ctx.textAlign = 'center'
    }
  })
  return d.pages
}

export async function renderDocumentationPdf(m: DocModel, tx: AcademyCopy, lang: AcademyLang, programmeLanguage: string): Promise<Uint8Array> {
  const canvases = await drawDocumentation(m, tx, lang, programmeLanguage)
  const pages = []
  for (const cv of canvases) {
    const blob = await new Promise<Blob | null>((resolve) => cv.toBlob(resolve, 'image/jpeg', 0.88))
    if (!blob) throw new Error('documentation: could not encode page')
    pages.push({ jpeg: new Uint8Array(await blob.arrayBuffer()), px: { w: PX_W, h: PX_H }, pt: { w: 595.28, h: 841.89 }, links: pageLinks.get(cv) })
  }
  return jpegsToPdf(pages, { title: `${tx.doc.title} ${m.cert.id}`, subject: m.cert.subject, keywords: m.cert.id, created: new Date(m.cert.issuedAt) })
}
