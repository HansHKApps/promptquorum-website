// PromptQuorum Academy — the square "result card" image (1080 x 1080 PNG) people post in chats and on social media.
// Drawn on a canvas in the browser from the score the learner already sees; nothing is sent anywhere. Only the
// subject, score and time are on it (no name), so it is safe to share.

import type { AcademyLang } from '@/lib/academy/types'
import type { AcademyCopy } from './copy'

const S = 1080
const FONT = 'system-ui, "Noto Sans", "Segoe UI", "Helvetica Neue", Arial, "Noto Sans Arabic", "Noto Sans CJK JP", "Hiragino Sans", "Yu Gothic", "Microsoft YaHei", "Noto Sans KR", "Malgun Gothic", sans-serif'

function wrap(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, maxLines: number): string[] {
  const words = text.includes(' ') ? text.split(' ') : Array.from(text) // CJK subjects have no spaces
  const joiner = text.includes(' ') ? ' ' : ''
  const lines: string[] = []
  let cur = ''
  for (const w of words) {
    const next = cur ? `${cur}${joiner}${w}` : w
    if (cur && ctx.measureText(next).width > maxWidth) {
      lines.push(cur)
      cur = w
    } else cur = next
  }
  if (cur) lines.push(cur)
  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines)
    kept[maxLines - 1] = `${kept[maxLines - 1].replace(/\s+\S*$/, '')}…`
    return kept
  }
  return lines
}

export async function renderShareCard(d: { subject: string; percent: number; minutes: number }, tx: AcademyCopy, lang: AcademyLang): Promise<Blob> {
  const canvas = document.createElement('canvas')
  canvas.width = S
  canvas.height = S
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('share card: canvas not available')
  ctx.direction = lang === 'ar' ? 'rtl' : 'ltr'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'alphabetic'

  const g = ctx.createLinearGradient(0, 0, S, S)
  g.addColorStop(0, '#3b0764')
  g.addColorStop(0.55, '#7e22ce')
  g.addColorStop(1, '#d946ef')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, S, S)
  ctx.fillStyle = 'rgba(255,255,255,0.07)'
  for (const [x, y, r] of [[160, 180, 260], [940, 880, 330], [980, 120, 140]] as const) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  ctx.fillStyle = '#ffffff'
  ctx.font = `700 46px ${FONT}`
  ctx.fillText('PromptQuorum Academy', S / 2, 130)
  ctx.fillStyle = 'rgba(255,255,255,0.85)'
  ctx.font = `500 40px ${FONT}`
  ctx.fillText(tx.cert.title, S / 2, 205)

  ctx.fillStyle = '#ffffff'
  ctx.font = `800 300px ${FONT}`
  ctx.fillText(`${Math.round(d.percent)}%`, S / 2, 520)

  ctx.font = `700 66px ${FONT}`
  const lines = wrap(ctx, d.subject, 900, 3)
  lines.forEach((line, i) => ctx.fillText(line, S / 2, 640 + i * 82))

  ctx.fillStyle = 'rgba(255,255,255,0.85)'
  ctx.font = `500 42px ${FONT}`
  ctx.fillText(tx.minutes(Math.max(1, Math.round(d.minutes))), S / 2, 925)

  ctx.fillStyle = '#ffffff'
  ctx.font = `600 40px ${FONT}`
  ctx.fillText('promptquorum.com/academy', S / 2, 1010)

  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'))
  if (!blob) throw new Error('share card: could not encode image')
  return blob
}
