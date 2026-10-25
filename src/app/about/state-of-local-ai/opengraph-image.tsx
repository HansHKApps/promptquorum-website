import { ImageResponse } from 'next/og'
import { LATEST, kicker } from '@/lib/state-of-local-ai/issues'

export const alt = 'The State of Local AI'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: '#1b1230', color: '#fff' }}>
        <div style={{ fontSize: 28, letterSpacing: 3, textTransform: 'uppercase', color: '#c9b8ec' }}>{kicker(LATEST)}</div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.1, marginTop: 28 }}>{LATEST.title}</div>
        <div style={{ fontSize: 30, marginTop: 36, color: '#d9d0ee' }}>By Hans Kuepper · PromptQuorum</div>
      </div>
    ),
    size,
  )
}
