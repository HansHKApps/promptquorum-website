import { ImageResponse } from 'next/og'
import { blogContent } from '@/lib/blog/blogContent'
import { SLUG_TO_POST_ID } from '@/lib/blogSlugs'
import type { Language } from '@/lib/blog/blogContent'

export const runtime = 'nodejs'

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const postId = SLUG_TO_POST_ID[slug as keyof typeof SLUG_TO_POST_ID]

  if (!postId || !blogContent[postId]) {
    return new Response('Not Found', { status: 404 })
  }

  // Extract language from query param, default to 'en'
  const url = new URL(request.url)
  const lang = (url.searchParams.get('lang') || 'en') as Language
  const validLangs: Language[] = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

  const post = blogContent[postId][selectedLang] || blogContent[postId]['en']
  const title = post.title
  const intro = post.intro

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #6750A4 0%, #7D5260 100%)',
          padding: '60px',
          fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif',
          color: '#FFFFFF',
        }}
      >
        {/* Top branding */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '0.1em' }}>
            PROMPTQUORUM
          </div>
          <div style={{ fontSize: '14px', opacity: 0.8 }}>Blog</div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          {/* Title */}
          <h1
            style={{
              margin: '0 0 20px 0',
              fontSize: '52px',
              fontWeight: '700',
              lineHeight: '1.2',
              maxWidth: '100%',
              wordWrap: 'break-word',
            }}
          >
            {title}
          </h1>

          {/* Intro/description */}
          <p
            style={{
              margin: '0',
              fontSize: '18px',
              lineHeight: '1.5',
              opacity: 0.95,
              maxWidth: '100%',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {intro}
          </p>
        </div>

        {/* Bottom decoration */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
            opacity: 0.7,
          }}
        >
          <span>promptquorum.com</span>
          <span>•</span>
          <span>Blog</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400, immutable',
      },
    },
  )
}
