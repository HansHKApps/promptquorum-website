// PromptQuorum Academy — minimal multi-page PDF writer: each page is one full-page JPEG. Pure bytes in, bytes out
// (unit-testable). Output is deterministic for the same input (fixed dates), so the registered SHA-256 of a file
// matches that exact file.

const enc = new TextEncoder()

/** PDF text string: plain ASCII in parentheses, anything else as UTF-16BE hex. */
function pdfString(s: string): string {
  if (/^[\x20-\x7e]*$/.test(s)) return `(${s.replace(/([\\()])/g, '\\$1')})`
  let hex = 'FEFF'
  for (let i = 0; i < s.length; i++) hex += s.charCodeAt(i).toString(16).padStart(4, '0')
  return `<${hex}>`
}

export interface PdfPage {
  jpeg: Uint8Array
  /** pixel size of the image */
  px: { w: number; h: number }
  /** page size in PDF points */
  pt: { w: number; h: number }
  /** clickable areas, in image pixels measured from the top-left corner (turned into link annotations) */
  links?: { x: number; y: number; w: number; h: number; url: string }[]
}

export function jpegsToPdf(pages: PdfPage[], info: { title: string; subject: string; keywords: string; created: Date }): Uint8Array {
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
    if (typeof body === 'string') push(body)
    else body()
    push('\nendobj\n')
  }
  const d = info.created
  const pad = (n: number) => String(n).padStart(2, '0')
  const date = `D:${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
  // object numbers: 1 catalog, 2 pages, 3 info, then per page i: page 4+3i, content 5+3i, image 6+3i
  push('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n')
  obj(1, '<< /Type /Catalog /Pages 2 0 R >>')
  obj(2, `<< /Type /Pages /Kids [${pages.map((_, i) => `${4 + 3 * i} 0 R`).join(' ')}] /Count ${pages.length} >>`)
  obj(3, `<< /Title ${pdfString(info.title)} /Subject ${pdfString(info.subject)} /Keywords ${pdfString(info.keywords)} /Producer (PromptQuorum Academy) /CreationDate (${date}) >>`)
  // link annotation objects come after the page objects
  let nextAnnot = 4 + 3 * pages.length
  const annots: { n: number; body: string }[] = []
  pages.forEach((pg, i) => {
    const pageN = 4 + 3 * i
    const refs: number[] = []
    for (const l of pg.links ?? []) {
      const kx = pg.pt.w / pg.px.w
      const ky = pg.pt.h / pg.px.h
      const r = [l.x * kx, pg.pt.h - (l.y + l.h) * ky, (l.x + l.w) * kx, pg.pt.h - l.y * ky].map((v) => v.toFixed(2))
      const n = nextAnnot++
      refs.push(n)
      annots.push({ n, body: `<< /Type /Annot /Subtype /Link /Rect [${r.join(' ')}] /Border [0 0 0] /A << /S /URI /URI ${pdfString(l.url)} >> >>` })
    }
    obj(pageN, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pg.pt.w} ${pg.pt.h}] /Resources << /XObject << /Im0 ${pageN + 2} 0 R >> >> /Contents ${pageN + 1} 0 R${refs.length ? ` /Annots [${refs.map((n) => `${n} 0 R`).join(' ')}]` : ''} >>`)
    const content = `q ${pg.pt.w} 0 0 ${pg.pt.h} 0 0 cm /Im0 Do Q`
    obj(pageN + 1, `<< /Length ${content.length} >>\nstream\n${content}\nendstream`)
    obj(pageN + 2, () => {
      push(`<< /Type /XObject /Subtype /Image /Width ${pg.px.w} /Height ${pg.px.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${pg.jpeg.length} >>\nstream\n`)
      push(pg.jpeg)
      push('\nendstream')
    })
  })
  for (const a of annots) obj(a.n, a.body)
  const total = 3 + 3 * pages.length + annots.length
  const xref = length
  push(`xref\n0 ${total + 1}\n0000000000 65535 f \n`)
  for (let n = 1; n <= total; n++) push(`${String(offsets[n]).padStart(10, '0')} 00000 n \n`)
  push(`trailer\n<< /Size ${total + 1} /Root 1 0 R /Info 3 0 R >>\nstartxref\n${xref}\n%%EOF\n`)
  const out = new Uint8Array(length)
  let at = 0
  for (const b of parts) {
    out.set(b, at)
    at += b.length
  }
  return out
}
