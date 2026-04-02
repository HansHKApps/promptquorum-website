import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})
import { Providers } from '@/components/Providers'
import { HeaderClient } from '@/components/HeaderClient'
import { CookieBanner } from '@/components/CookieBanner'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'PromptQuorum — One Prompt. 25+ AI Models. Consensus Scoring.',
  description: 'Run one prompt across ChatGPT, Claude, Gemini and 25+ AI models simultaneously. Compare responses, detect hallucinations, and get a Quorum consensus verdict. Free beta — April 2026.',
  metadataBase: new URL('https://www.promptquorum.com'),
  authors: [{ name: 'Hans Kuepper' }],
  alternates: {
    canonical: 'https://www.promptquorum.com',
    languages: {
      'en': 'https://www.promptquorum.com',
      'de': 'https://www.promptquorum.com?lang=de',
      'fr': 'https://www.promptquorum.com?lang=fr',
      'ja': 'https://www.promptquorum.com?lang=ja',
      'zh': 'https://www.promptquorum.com?lang=zh',
      'x-default': 'https://www.promptquorum.com',
    }
  },
  openGraph: {
    type: 'website',
    url: 'https://www.promptquorum.com',
    siteName: 'PromptQuorum',
    locale: 'en_US',
    title: 'PromptQuorum — One Prompt. 25+ AI Models. Consensus Scoring.',
    description: 'Run one prompt across ChatGPT, Claude, Gemini and 25+ AI models simultaneously. Compare responses, detect hallucinations, and get a Quorum consensus verdict. Free beta — April 2026.',
    images: [{
      url: 'https://www.promptquorum.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'PromptQuorum — One Prompt. 25+ AI Models. Consensus Scoring.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@promptquorum',
    title: 'PromptQuorum — One Prompt. 25+ AI Models. Consensus Scoring.',
    description: 'Run one prompt across ChatGPT, Claude, Gemini and 25+ AI models simultaneously. Compare responses, detect hallucinations, and get a Quorum consensus verdict. Free beta — April 2026.',
    images: ['https://www.promptquorum.com/og-image.png'],
  },
  verification: {
    google: '-TF7YM-JRUaO75a8gkWVYPmn8HPunHyRp3WCOV2Ad64',
    other: {
      'msvalidate.01': 'DA29ABBBBCA5FD1766E2DFDD056089FF',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const selectedLang = headersList.get('x-selected-lang') || 'en'

  // Get current URL path + query (without lang param) for hreflang tags
  const pathname = headersList.get('x-pathname') || '/'
  const baseUrlWithoutLang = `https://www.promptquorum.com${pathname}`

  return (
    <html lang={selectedLang} className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="theme-color" content="#6750A4" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* hreflang alternate links for all 5 language variants */}
        <link rel="alternate" hrefLang="x-default" href={baseUrlWithoutLang} />
        <link rel="alternate" hrefLang="en" href={`${baseUrlWithoutLang}${baseUrlWithoutLang.includes('?') ? '&' : '?'}lang=en`} />
        <link rel="alternate" hrefLang="de" href={`${baseUrlWithoutLang}${baseUrlWithoutLang.includes('?') ? '&' : '?'}lang=de`} />
        <link rel="alternate" hrefLang="fr" href={`${baseUrlWithoutLang}${baseUrlWithoutLang.includes('?') ? '&' : '?'}lang=fr`} />
        <link rel="alternate" hrefLang="ja" href={`${baseUrlWithoutLang}${baseUrlWithoutLang.includes('?') ? '&' : '?'}lang=ja`} />
        <link rel="alternate" hrefLang="zh" href={`${baseUrlWithoutLang}${baseUrlWithoutLang.includes('?') ? '&' : '?'}lang=zh`} />

        {/* MCP discovery — Model Context Protocol manifest for AI agents */}
        <link rel="mcp" href="/mcp.json" type="application/json" />
        {/* AI crawler discovery hints */}
        <link rel="alternate" type="text/plain" href="/llms.txt" />
        {/* RSS feed auto-discovery */}
        <link rel="alternate" type="application/rss+xml" title="PromptQuorum Blog" href="/feed.xml" />

        {/* Structured Data — @graph combining Organization, WebSite, SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.promptquorum.com/#organization",
                  "name": "PromptQuorum",
                  "url": "https://www.promptquorum.com",
                  "foundingDate": "2025",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://www.promptquorum.com/#logo",
                    "url": "https://www.promptquorum.com/logo.svg",
                    "contentUrl": "https://www.promptquorum.com/logo.svg",
                    "caption": "PromptQuorum"
                  },
                  "image": { "@id": "https://www.promptquorum.com/#logo" },
                  "description": "PromptQuorum is a multi-model AI dispatch and consensus tool. Write structured prompts with 9 frameworks, optimize with any LLM, dispatch simultaneously to 25+ AI providers, and run consensus analysis. 100% private — no data leaves your device.",
                  "founder": {
                    "@type": "Person",
                    "name": "Hans Kuepper",
                    "sameAs": [
                      "https://x.com/HansKuepperAPPs",
                      "https://www.linkedin.com/in/hanskuepper/"
                    ]
                  },
                  "sameAs": [
                    "https://github.com/HansHKApps",
                    "https://x.com/HansKuepperAPPs",
                    "https://www.linkedin.com/company/promptquorum",
                    "https://www.youtube.com/channel/UC5PL_1lU5pdV1d1EC1XeLhA"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.promptquorum.com/#website",
                  "name": "PromptQuorum",
                  "url": "https://www.promptquorum.com",
                  "description": "Dispatch one prompt to ChatGPT, Claude, Gemini and 25+ AI models simultaneously. Write structured prompts with 9 frameworks, run consensus analysis, detect hallucinations. 100% private.",
                  "publisher": { "@id": "https://www.promptquorum.com/#organization" },
                  "inLanguage": ["en", "de", "fr", "ja", "zh"],
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://www.promptquorum.com/?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://www.promptquorum.com/#software",
                  "name": "PromptQuorum",
                  "alternateName": "Prompt Quorum",
                  "description": "Multi-AI dispatch and consensus scoring tool. Send one structured prompt simultaneously to GPT-4o, Claude, Gemini, Mistral, Llama, DeepSeek and 25+ AI models. Compare parallel responses and run consensus analysis: hallucination detection, contradiction scoring, best-answer extraction. 9 prompt engineering frameworks. Supports local LLMs (Ollama, LM Studio) for fully private offline inference. Free — bring your own API key, no account required.",
                  "url": "https://www.promptquorum.com",
                  "downloadUrl": "https://www.promptquorum.com/download",
                  "applicationCategory": "AIApplication",
                  "operatingSystem": "Web, macOS, Windows",
                  "softwareVersion": "1.0",
                  "screenshot": {
                    "@type": "ImageObject",
                    "url": "https://www.promptquorum.com/og-image.png",
                    "width": 1200,
                    "height": 630
                  },
                  "featureList": [
                    "Simultaneous dispatch to 25+ AI models (GPT-4o, Claude, Gemini, Grok, Mistral, Llama, DeepSeek, and more)",
                    "Multi-model consensus scoring across all parallel responses",
                    "Hallucination detection by comparing claims across 5+ independent model responses",
                    "Contradiction detection and confidence scoring",
                    "9 prompt engineering frameworks: CO-STAR, CRAFT, RISEN, APE, SPECS, TRACE, RTF, Google Prompt, Single Prompt Line",
                    "AI-powered iterative prompt optimization with 8 one-click refinements and full version history",
                    "13 Quorum analysis types: Consensus Summary, Best Answer Selection, Atomic Facts Extraction, Overlap Mapping, and more",
                    "Local LLM support — fully offline with Ollama, LM Studio, Jan AI, GPT4All",
                    "BYOM: API keys stored only in browser localStorage, never transmitted to PromptQuorum servers",
                    "Framework Wizard for automatic framework recommendation",
                    "Teaching Mode: explains every optimization change and which principles were applied",
                    "Export results in 6 formats: TXT, MD, JSON, CSV, HTML, PDF"
                  ],
                  "author": { "@id": "https://www.promptquorum.com/#organization" },
                  "creator": { "@id": "https://www.promptquorum.com/#organization" },
                  "publisher": { "@id": "https://www.promptquorum.com/#organization" },
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/PreOrder",
                    "description": "Free. Bring your own API key (BYOM) or connect a local LLM. No account required. Beta launch April 2026.",
                    "seller": { "@id": "https://www.promptquorum.com/#organization" }
                  }
                }
              ]
            })
          }}
        />

      </head>
      <body>
        <Providers>
          <HeaderClient />
          {children}
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
