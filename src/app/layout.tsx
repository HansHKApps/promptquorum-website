import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Providers } from '@/components/Providers'
import { HeaderClient } from '@/components/HeaderClient'

export const metadata: Metadata = {
  title: 'PromptQuorum — Compare GPT, Claude & Gemini Simultaneously',
  description: 'Write structured prompts with 9 frameworks, dispatch simultaneously to ChatGPT, Claude, Gemini and 25+ AI models, then run consensus analysis across all responses. 100% private — API keys never leave your device.',
  metadataBase: new URL('https://www.promptquorum.com'),
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
    title: 'PromptQuorum — Compare Any Prompt Across GPT, Claude & Gemini Simultaneously',
    description: 'Dispatch one prompt to ChatGPT, Claude, Gemini and 25+ AI models simultaneously. Find consensus, detect hallucinations, extract the best answer — 100% private, no data tracking.',
    images: [{
      url: 'https://www.promptquorum.com/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PromptQuorum — Compare Any Prompt Across GPT, Claude & Gemini Simultaneously',
    description: 'Dispatch one prompt to ChatGPT, Claude, Gemini and 25+ AI models simultaneously. Find consensus, detect hallucinations, extract the best answer — 100% private.',
    images: ['https://www.promptquorum.com/og-image.png'],
  },
  verification: {
    google: '-TF7YM-JRUaO75a8gkWVYPmn8HPunHyRp3WCOV2Ad64',
    other: {
      'msvalidate.01': 'DA29ABBBBCA5FD1766E2DFDD056089FF',
    },
  },
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#6750A4" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PromptQuorum",
              "url": "https://www.promptquorum.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.promptquorum.com/logo.svg"
              },
              "description": "PromptQuorum is an AI prompt engineering tool that writes structured prompts using 9 proven frameworks, optimizes them with any LLM, dispatches to 25+ AI services simultaneously, and analyzes multi-model consensus. 100% private — no data leaves your device.",
              "founder": {
                "@type": "Person",
                "name": "Hans Kuepper",
                "sameAs": "https://x.com/HansKuepperAPPs"
              },
              "sameAs": [
                "https://github.com/HansHKApps",
                "https://x.com/HansKuepperAPPs",
                "https://www.linkedin.com/company/promptquorum",
                "https://www.youtube.com/channel/UC5PL_1lU5pdV1d1EC1XeLhA"
              ]
            })
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "PromptQuorum",
              "url": "https://www.promptquorum.com",
              "description": "Dispatch one prompt to ChatGPT, Claude, Gemini and 25+ AI models simultaneously. Write structured prompts with 9 frameworks, run consensus analysis across all responses, detect hallucinations. 100% private.",
              "publisher": {
                "@type": "Organization",
                "name": "PromptQuorum"
              }
            })
          }}
        />

        {/* SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "PromptQuorum",
              "alternateName": "Prompt Quorum",
              "description": "PromptQuorum is a multi-model AI dispatch and consensus tool. Write structured prompts with 9 frameworks (CO-STAR, CRAFT, RISEN, APE, SPECS, TRACE, RTF, Google Prompt, Single Prompt Line), dispatch simultaneously to ChatGPT, Claude, Gemini and 25+ AI providers, then run consensus analysis across all responses. Hallucination detection, contradiction scoring, best-answer extraction. 100% private — no data leaves your device.",
              "url": "https://www.promptquorum.com",
              "downloadUrl": "https://www.promptquorum.com/download",
              "applicationCategory": "AI Tools",
              "operatingSystem": "Windows, macOS, Web Browser",
              "softwareVersion": "1.0",
              "screenshot": "https://www.promptquorum.com/og-image.png",
              "featureList": [
                "Simultaneous dispatch to 25+ AI models (ChatGPT, Claude, Gemini, Grok, Mistral, Llama, and more)",
                "Multi-model consensus scoring across all responses",
                "Hallucination detection and contradiction flagging",
                "9 prompt engineering frameworks (CO-STAR, CRAFT, RISEN, APE, SPECS, TRACE, RTF, Google Prompt, Single Prompt Line)",
                "AI-powered iterative prompt optimization with version history",
                "13 Quorum analysis types: Consensus Summary, Best Answer Selection, Atomic Facts Extraction, Overlap Mapping, and more",
                "Local LLM support — fully offline with Ollama, LM Studio, Jan AI, GPT4All",
                "BYOM: API keys stored only in browser localStorage, never transmitted",
                "Framework Wizard for automatic framework recommendation",
                "Export results in 6 formats (TXT, MD, JSON, CSV, HTML, PDF)"
              ],
              "author": {
                "@type": "Person",
                "name": "Hans Kuepper"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "description": "Free. Bring your own API key or connect a local LLM. No account required."
              }
            })
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8DQ4B3DXBS"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8DQ4B3DXBS');
            `,
          }}
        />
      </head>
      <body>
        <Providers>
          <HeaderClient />
          {children}
        </Providers>
      </body>
    </html>
  )
}
