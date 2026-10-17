import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs'

// Google Discover cards are shown mostly on phones, at thumbnail size, next to
// three other cards. Dense body copy (the old 3-5 line bullet layout) is
// illegible there. The hero is therefore a poster: one huge headline plus at
// most three short punch lines (~30 words in total), full-bleed gradient,
// no body text smaller than ~40px at 1200px wide.
//
// Callers (113 gen-*-heroes.mjs scripts) still pass long prose bullets/tables.
// Truncating prose mid-sentence produces nonsense fragments, so long bullets
// are DROPPED, not cut: the poster falls back to short `facts` values
// (license, RAM, price...) and, failing that, to the headline alone. Authors
// who want punch lines set `highlights` explicitly.

const CJK_LANGS = new Set(['zh', 'ja', 'ko'])
const MAX_LINES = 3
const MAX_WORDS_PER_LINE = 9
const MAX_CJK_CHARS_PER_LINE = 20

type HeroSpec = {
  lang: string
  title: string
  subtitle?: string
  // Preferred: up to 3 hand-written lines, ~7 words each (~30 words total
  // with the title). Anything over the per-line budget is dropped.
  highlights?: string[]
  columns?: string[]
  rows?: string[][]
  callout?: { formula: string; note: string }
  bullets?: string[]
  // Short chips ("MIT", "6 GB RAM") — used as punch lines when no
  // highlights/short bullets exist.
  facts?: { label?: string; value: string }[]
  footer?: string
}

const stripMarkdown = (t: string) => t.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim()

function fits(text: string, lang: string): boolean {
  return CJK_LANGS.has(lang) ? text.length <= MAX_CJK_CHARS_PER_LINE : text.split(' ').length <= MAX_WORDS_PER_LINE
}

function punchLines(spec: HeroSpec): string[] {
  const clean = (arr?: string[]) => (arr ?? []).map(stripMarkdown).filter((t) => t && fits(t, spec.lang))
  const candidates = [
    clean(spec.highlights),
    clean(spec.bullets),
    clean(spec.callout ? [spec.callout.note] : undefined),
    clean(spec.facts?.map((f) => (f.label ? `${f.label}: ${f.value}` : f.value))),
  ]
  return (candidates.find((c) => c.length > 0) ?? []).slice(0, MAX_LINES)
}

// Scale the headline to its length so it always fills the width without
// wrapping past 3 lines. CJK glyphs are wider per character.
function titleSize(title: string, lang: string): number {
  const n = CJK_LANGS.has(lang) ? title.length * 1.9 : title.length
  if (n <= 24) return 92
  if (n <= 40) return 80
  if (n <= 56) return 68
  return 58
}

// The brand mark (public/logo.svg) is 4 bars of fading opacity. Satori can't
// rasterize an <img> SVG data URI, so reproduce it as plain divs.
function LogoMark({ color, barWidth = 10, barHeight = 44 }: { color: string; barWidth?: number; barHeight?: number }) {
  const opacities = [1, 0.75, 0.5, 0.3]
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end' }}>
      {opacities.map((o, i) => (
        <div key={i} style={{ display: 'flex', width: `${barWidth}px`, height: `${barHeight}px`, background: color, opacity: o, borderRadius: '2px' }} />
      ))}
    </div>
  )
}

// Internal content-tooling route: renders Discover-compliant (1200x675 raster,
// 16:9) poster-style hero images for article body/schema use, sharing the same
// Satori+resvg pipeline as /api/og/[slug] so CJK and Arabic shaping render
// correctly — unlike sharp's system-font SVG rasterization, which drops
// katakana glyphs and fails to shape Arabic. Not linked from any page;
// blocked from crawlers by the same /api/ robots.txt rule as other
// non-og internal routes.
export async function POST(request: Request) {
  const spec = (await request.json()) as HeroSpec
  const isRtl = spec.lang === 'ar'
  const rowDir = isRtl ? 'row-reverse' : 'row'
  const textAlign = isRtl ? 'right' : 'left'

  if (!spec.title?.trim()) {
    return new Response('Rejected: title is required.', { status: 400 })
  }

  const title = stripMarkdown(spec.title)
  const lines = punchLines(spec)
  const showFormula = !!spec.callout && !spec.bullets?.length
  const fontSize = titleSize(title, spec.lang)

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '675px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #1E0A4A 0%, #4C1D95 38%, #6750A4 62%, #C026D3 100%)',
          color: '#FFFFFF',
          fontFamily: isRtl ? 'Beiruti' : 'Plus Jakarta Sans, system-ui, sans-serif',
          direction: isRtl ? 'rtl' : 'ltr',
          padding: '56px 72px',
        }}
      >
        {/* Shine: soft glows plus a diagonal sheen band */}
        <div style={{ display: 'flex', position: 'absolute', top: '-180px', ...(isRtl ? { left: '-120px' } : { right: '-120px' }), width: '620px', height: '620px', borderRadius: '9999px', background: 'radial-gradient(circle, rgba(251,191,36,0.55) 0%, rgba(251,191,36,0) 68%)' }} />
        <div style={{ display: 'flex', position: 'absolute', bottom: '-240px', ...(isRtl ? { right: '-160px' } : { left: '-160px' }), width: '700px', height: '700px', borderRadius: '9999px', background: 'radial-gradient(circle, rgba(232,121,249,0.5) 0%, rgba(232,121,249,0) 70%)' }} />
        <div style={{ display: 'flex', position: 'absolute', top: '-100px', left: '420px', width: '150px', height: '900px', background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0) 100%)', transform: 'rotate(24deg)' }} />

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', gap: '34px' }}>
          <div
            style={{
              display: 'flex',
              fontSize: `${fontSize}px`,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              textAlign,
              textShadow: '0 4px 24px rgba(0,0,0,0.35)',
            }}
          >
            {title}
          </div>

          {showFormula && (
            <div style={{ display: 'flex', fontSize: '60px', fontWeight: 800, color: '#FDE68A', fontFamily: 'SF Mono, Monaco, monospace', textAlign }}>
              {spec.callout!.formula}
            </div>
          )}

          {lines.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {lines.map((line, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: rowDir, alignItems: 'center', gap: '22px' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexShrink: 0,
                      width: '52px',
                      height: '52px',
                      borderRadius: '9999px',
                      background: '#FBBF24',
                      color: '#3B0764',
                      fontSize: '30px',
                      fontWeight: 800,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {i + 1}
                  </div>
                  <div style={{ display: 'flex', fontSize: '44px', fontWeight: 700, lineHeight: 1.15, textAlign, textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>{line}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Brand strip */}
        <div style={{ display: 'flex', flexDirection: rowDir, justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
          <div style={{ display: 'flex', flexDirection: rowDir, alignItems: 'center', gap: '16px' }}>
            <LogoMark color="#FFFFFF" />
            <div style={{ display: 'flex', fontSize: '30px', fontWeight: 800 }}>PromptQuorum</div>
          </div>
          <div style={{ display: 'flex', fontSize: '26px', fontWeight: 700, color: '#FDE68A' }}>promptquorum.com</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 675,
      fonts: isRtl
        ? [
            { name: 'Beiruti', data: fs.readFileSync(path.join(process.cwd(), 'public/fonts/Beiruti-Regular.ttf')), weight: 400, style: 'normal' },
            { name: 'Beiruti', data: fs.readFileSync(path.join(process.cwd(), 'public/fonts/Beiruti-Bold.ttf')), weight: 700, style: 'normal' },
          ]
        : [
            { name: 'Plus Jakarta Sans', data: fs.readFileSync(path.join(process.cwd(), 'public/fonts/PlusJakartaSans-700.woff')), weight: 700, style: 'normal' },
            { name: 'Plus Jakarta Sans', data: fs.readFileSync(path.join(process.cwd(), 'public/fonts/PlusJakartaSans-800.woff')), weight: 800, style: 'normal' },
          ],
      headers: {
        'Content-Type': 'image/png',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    },
  )
}
