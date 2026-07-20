import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'
import { peContent } from '@/lib/prompt-engineering/content'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { llmContent } from '@/lib/local-llms/content'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { powerLLMContent } from '@/lib/power-local-llm/content'
import { POWER_LLM_SLUG_TO_KEY } from '@/lib/power-local-llm/slugs'
import { promptBitesContent } from '@/lib/prompt-bites/articles-barrel'
import { PROMPT_BITES_SLUG_TO_KEY } from '@/lib/prompt-bites/slugs'
import type { Language } from '@/lib/blog/blogContent'

export const runtime = 'nodejs'

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // Extract language from query param, default to 'en'
  const url = new URL(request.url)
  const lang = (url.searchParams.get('lang') || 'en') as Language
  const validLangs: Language[] = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

  // Cluster lookup order: prompt-engineering → local-llms → power-local-llm → prompt-bites.
  // First match wins. Watch for slug collisions across clusters when adding new articles.
  const peKey = PE_SLUG_TO_KEY[slug]
  const llmKey = LLM_SLUG_TO_KEY[slug]
  const powerKey = POWER_LLM_SLUG_TO_KEY[slug]
  const bitesKey = PROMPT_BITES_SLUG_TO_KEY[slug]

  let article: { title?: string; intro?: string } | undefined

  if (peKey && peContent[peKey]) {
    const langContent = peContent[peKey]
    article = langContent[selectedLang] || langContent['en']
  } else if (llmKey && llmContent[llmKey]) {
    const langContent = llmContent[llmKey]
    article = langContent[selectedLang] || langContent['en']
  } else if (powerKey && powerLLMContent[powerKey]) {
    const langContent = powerLLMContent[powerKey]
    article = langContent[selectedLang] || langContent['en']
  } else if (bitesKey && promptBitesContent[bitesKey]) {
    const langContent = promptBitesContent[bitesKey]
    article = langContent[selectedLang] || langContent['en']
  }

  if (!article) {
    return new Response('Not Found', { status: 404 })
  }
  const title = article.title
  const intro = article.intro

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '675px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #6750A4 0%, #7D5260 100%)',
          padding: '60px',
          fontFamily: selectedLang === 'ar' ? 'Beiruti' : 'Plus Jakarta Sans, system-ui, sans-serif',
          direction: selectedLang === 'ar' ? 'rtl' : 'ltr',
          color: '#FFFFFF',
        }}
      >
        {/* Top branding */}
        <div style={{ display: 'flex', flexDirection: selectedLang === 'ar' ? 'row-reverse' : 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '0.1em' }}>
            PROMPTQUORUM
          </div>
          <div style={{ fontSize: '14px', opacity: 0.8 }}>Prompt Engineering Guide</div>
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
              textAlign: selectedLang === 'ar' ? 'right' : 'left',
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
              textAlign: selectedLang === 'ar' ? 'right' : 'left',
            }}
          >
            {intro}
          </p>
        </div>

        {/* Bottom decoration */}
        <div
          style={{
            display: 'flex',
            flexDirection: selectedLang === 'ar' ? 'row-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
            opacity: 0.7,
          }}
        >
          <span>promptquorum.com</span>
          <span>•</span>
          <span>Learn Prompt Engineering</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 675,
      fonts: selectedLang === 'ar' ? [
        {
          name: 'Beiruti',
          data: fs.readFileSync(path.join(process.cwd(), 'public/fonts/Beiruti-Regular.ttf')),
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Beiruti',
          data: fs.readFileSync(path.join(process.cwd(), 'public/fonts/Beiruti-Bold.ttf')),
          weight: 700,
          style: 'normal',
        },
      ] : undefined,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400, immutable',
      },
    },
  )
}
