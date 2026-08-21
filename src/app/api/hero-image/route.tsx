import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs'

// Article `tldr` bullets are authored with markdown `**bold**` emphasis for
// the article page's own markdown renderer. Satori has no markdown support,
// so without this the literal asterisks show up in the rendered PNG — split
// on the marker and render matching spans with fontWeight 700 instead.
function renderRich(text: string, boldColor: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)
  return parts.map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/)
    if (m) {
      return (
        <span key={i} style={{ fontWeight: 700, color: boldColor }}>
          {m[1]}
        </span>
      )
    }
    return <span key={i}>{part}</span>
  })
}

type HeroSpec = {
  lang: string
  title: string
  subtitle: string
  columns?: string[]
  rows?: string[][]
  callout?: { formula: string; note: string }
  bullets?: string[]
  footer: string
}

// Hard floor on rendered body content so a near-empty hero (the original bug:
// title band + one line of text + a blank 500px void) can never ship again.
// Counts only what actually fills the body — table cells, callout, or bullets
// — not the header/subtitle, which is capped at 2 lines regardless of length.
//
// STANDING RULE: every hero's body content (whether that's the subtitle
// fallback, bullets, table, or callout) must render at least 3 lines of
// real, specific detail in the body — not just clear this floor by a
// sentence fragment. At the body subtitle's fontSize:28px / maxWidth:1000px
// (see the no-bullets/table/callout fallback below), ~65-70 Latin chars fit
// per line, so ~220 chars is the practical 3-line floor; write closer to
// 300-350 chars (4-5 lines) when the topic supports it — e.g. spell out
// what each side of a comparison actually is, not just restate the title.
// CJK/Korean text conveys far more per character than Latin scripts (a 78-char
// Japanese sentence is a complete, substantial description, not a fragment),
// so the floor is scaled down for those languages rather than applying one
// Latin-calibrated threshold everywhere.
const MIN_BODY_CHARS_DEFAULT = 220
const MIN_BODY_CHARS_CJK = 85
const CJK_LANGS = new Set(['zh', 'ja', 'ko'])

function minBodyChars(lang: string): number {
  return CJK_LANGS.has(lang) ? MIN_BODY_CHARS_CJK : MIN_BODY_CHARS_DEFAULT
}

function bodyCharCount(spec: HeroSpec): number {
  if (spec.callout) return spec.callout.formula.length + spec.callout.note.length
  if (spec.columns && spec.rows) {
    return spec.rows.flat().join('').length + spec.columns.join('').length
  }
  if (spec.bullets && spec.bullets.length > 0) {
    return spec.bullets.join('').length
  }
  return spec.subtitle?.length ?? 0
}

// The brand mark (public/logo.svg) is 4 bars of fading opacity. Satori's
// ImageResponse can't rasterize an <img> with an SVG data URI (throws deep
// inside resvg), so reproduce the same 4-bar mark as plain divs instead —
// simple enough that there's no real loss versus loading the actual file.
function LogoMark({ color, barWidth = 6, barHeight = 28 }: { color: string; barWidth?: number; barHeight?: number }) {
  const opacities = [1, 0.75, 0.5, 0.3]
  return (
    <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end' }}>
      {opacities.map((o, i) => (
        <div key={i} style={{ display: 'flex', width: `${barWidth}px`, height: `${barHeight}px`, background: color, opacity: o, borderRadius: '1px' }} />
      ))}
    </div>
  )
}

// Internal content-tooling route: renders Discover-compliant (1200x675 raster,
// 16:9) hero images for article body/schema use, sharing the same
// Satori+resvg pipeline as /api/og/[slug] so CJK and Arabic shaping render
// correctly — unlike sharp's system-font SVG rasterization, which drops
// katakana glyphs and fails to shape Arabic. Not linked from any page;
// blocked from crawlers by the same /api/ robots.txt rule as other
// non-og internal routes.
export async function POST(request: Request) {
  const spec = (await request.json()) as HeroSpec
  const isRtl = spec.lang === 'ar'
  const dir = isRtl ? 'rtl' : 'ltr'
  const rowDir = isRtl ? 'row-reverse' : 'row'
  const textAlign = isRtl ? 'right' : 'left'

  const requiredChars = minBodyChars(spec.lang)
  if (bodyCharCount(spec) < requiredChars) {
    return new Response(
      `Rejected: body content (${bodyCharCount(spec)} chars) is below the ${requiredChars}-char minimum for lang="${spec.lang}" — ` +
        `supply richer bullets/table/callout data instead of a bare title+subtitle.`,
      { status: 400 },
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '675px',
          display: 'flex',
          flexDirection: 'column',
          background: '#FFFFFF',
          fontFamily: isRtl ? 'Beiruti' : 'Plus Jakarta Sans, system-ui, sans-serif',
          direction: dir,
        }}
      >
        {/* Header band */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: '#6750A4',
            padding: '28px 60px',
            color: '#FFFFFF',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', flexDirection: rowDir, alignItems: 'center', gap: '14px' }}>
            <LogoMark color="#FFFFFF" />
            <div style={{ display: 'flex', fontSize: '30px', fontWeight: 700, textAlign }}>{spec.title}</div>
          </div>
          <div
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontSize: '18px',
              fontWeight: 400,
              color: '#E8DEF8',
              marginTop: '6px',
              textAlign,
            }}
          >
            {spec.subtitle}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '32px 60px', position: 'relative' }}>
          {/* Decorative background texture — purely cosmetic, low-opacity so
              it never competes with text contrast. Fixed positions rather
              than data-driven so it's identical (and safe) across all specs. */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              top: '-60px',
              width: '260px',
              height: '260px',
              borderRadius: '9999px',
              background: '#6750A4',
              opacity: 0.06,
              zIndex: -1,
              ...(isRtl ? { left: '-60px' } : { right: '-60px' }),
            }}
          />
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              bottom: '-80px',
              width: '200px',
              height: '200px',
              borderRadius: '9999px',
              background: '#F59E0B',
              opacity: 0.05,
              zIndex: -1,
              ...(isRtl ? { right: '-40px' } : { left: '-40px' }),
            }}
          />

          {spec.callout && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: '#F7F2FA',
                borderRadius: '16px',
                padding: '20px',
                marginBottom: '28px',
              }}
            >
              <div style={{ display: 'flex', fontSize: '32px', fontWeight: 700, color: '#6750A4', fontFamily: 'SF Mono, Monaco, monospace' }}>
                {spec.callout.formula}
              </div>
              <div style={{ display: 'flex', fontSize: '16px', color: '#79747E', marginTop: '8px' }}>{spec.callout.note}</div>
            </div>
          )}

          {spec.columns && spec.rows && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', flexDirection: rowDir, borderBottom: '2px solid #E8DEF8', paddingBottom: '10px' }}>
                {spec.columns.map((col, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      flex: i === 0 ? '1.4' : '1',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#79747E',
                      textAlign,
                    }}
                  >
                    {col}
                  </div>
                ))}
              </div>
              {spec.rows.map((row, ri) => (
                <div
                  key={ri}
                  style={{
                    display: 'flex',
                    flexDirection: rowDir,
                    alignItems: 'center',
                    borderBottom: ri < spec.rows!.length - 1 ? '1px solid #F7F2FA' : 'none',
                    padding: '16px 0',
                  }}
                >
                  {row.map((cell, ci) => (
                    <div
                      key={ci}
                      style={{
                        display: 'flex',
                        flex: ci === 0 ? '1.4' : '1',
                        fontSize: ci === 0 ? '21px' : '19px',
                        fontWeight: ci === 0 ? 600 : ci === row.length - 1 ? 700 : 400,
                        color: ci === 0 ? '#1C1B1F' : ci === row.length - 1 ? '#6750A4' : '#49454F',
                        textAlign,
                      }}
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {spec.bullets && spec.bullets.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', gap: '22px' }}>
              {spec.bullets.slice(0, 5).map((bullet, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: rowDir, alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexShrink: 0,
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: '#F7F2FA',
                      color: '#6750A4',
                      fontSize: '16px',
                      fontWeight: 700,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {i + 1}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '22px', fontWeight: 500, color: '#1C1B1F', textAlign, lineHeight: '1.4' }}>
                    {renderRich(bullet, '#6750A4')}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Fallback: no table, callout, or bullets supplied — render the
              subtitle as a large lead-in statement instead of leaving the
              body empty. This is the layout every "overview" hero used
              before this fix, which rendered nothing here at all. */}
          {!spec.callout && !(spec.columns && spec.rows) && !(spec.bullets && spec.bullets.length > 0) && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: isRtl ? 'none' : '4px solid #6750A4',
                  borderRight: isRtl ? '4px solid #6750A4' : 'none',
                  paddingLeft: isRtl ? '0' : '24px',
                  paddingRight: isRtl ? '24px' : '0',
                }}
              >
                <div style={{ display: 'flex', fontSize: '28px', fontWeight: 500, color: '#1C1B1F', textAlign, lineHeight: '1.5', maxWidth: '1000px' }}>
                  {spec.subtitle}
                </div>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: rowDir, justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ display: 'flex', fontSize: '14px', fontWeight: 600, color: '#79747E', textAlign, maxWidth: '900px' }}>
              {spec.footer}
            </div>
            <div style={{ display: 'flex', fontSize: '12px', fontWeight: 600, color: '#79747E' }}>promptquorum.com</div>
          </div>
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
        : undefined,
      headers: {
        'Content-Type': 'image/png',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    },
  )
}
