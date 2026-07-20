import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs'

type HeroSpec = {
  lang: string
  title: string
  subtitle: string
  columns?: string[]
  rows?: string[][]
  callout?: { formula: string; note: string }
  footer: string
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
          }}
        >
          <div style={{ display: 'flex', fontSize: '30px', fontWeight: 700, textAlign }}>{spec.title}</div>
          <div style={{ display: 'flex', fontSize: '18px', fontWeight: 400, color: '#E8DEF8', marginTop: '6px', textAlign }}>
            {spec.subtitle}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '32px 60px' }}>
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
