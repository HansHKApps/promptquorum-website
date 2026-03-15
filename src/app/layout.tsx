import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Providers } from '@/components/Providers'
import { HeaderClient } from '@/components/HeaderClient'

export const metadata: Metadata = {
  title: 'Compare AI Models on the Same Prompt | PromptQuorum',
  description: 'Run prompts across 25+ AI models simultaneously. Compare ChatGPT, Claude, Gemini, and more side-by-side. Detect hallucinations, find consensus. Multi-LLM testing tool.',
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
    title: 'PromptQuorum: AI Prompt Optimizer & Comparator',
    description: 'Transform rough ideas into perfect prompts. Compare AI results across ChatGPT, Claude, Gemini & more—100% private, no data tracking.',
    images: [{
      url: 'https://www.promptquorum.com/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PromptQuorum: AI Prompt Optimizer & Comparator',
    description: 'Transform rough ideas into perfect prompts. Compare AI results across ChatGPT, Claude, Gemini & more—100% private, no data tracking.',
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
              "logo": "https://www.promptquorum.com/logo.svg",
              "description": "PromptQuorum instantly turns rough ideas into precision prompts with 8+ frameworks. Dispatch to ChatGPT, Claude, Gemini + local LLMs in one click, compare results side-by-side. 100% private & runs locally.",
              "founder": {
                "@type": "Person",
                "name": "Hans Kuepper"
              },
              "sameAs": [
                "https://github.com",
                "https://x.com/HansKuepperAPPs",
                "https://www.linkedin.com/company/promptquorum",
                "https://discord.com/channels/1482063293509271724/1482063418113396736",
                "https://www.youtube.com/channel/UC5PL_1lU5pdV1d1EC1XeLhA"
              ]
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
              "description": "PromptQuorum instantly turns rough ideas into precision prompts with 8+ frameworks (CO-STAR, CRAFT, RISEN). Dispatch to ChatGPT, Claude, Gemini + local LLMs in one click, compare results side-by-side. 100% private & runs locally.",
              "url": "https://www.promptquorum.com",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Windows, macOS",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "250"
              }
            })
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is PromptQuorum free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. PromptQuorum is free to use. You can bring your own API key, use a local LLM, or try our limited free backend service for prompt optimization on a test basis."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does privacy work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You decide where your data goes. Keep everything local with LM Studio or Ollama, or use your own API keys. PromptQuorum is as private as you set it up."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which AI providers are supported?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Over 25 AI providers are included, and you can add your own custom providers. Connect to ChatGPT, Claude, Gemini, and many more."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What platforms does PromptQuorum run on?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PromptQuorum starts with desktop apps (Mac, Windows), followed by a web application, and eventually mobile solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes PromptQuorum different?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PromptQuorum is highly automated for prompt improvements, can send the same prompt to multiple AIs simultaneously, and analyzes results based on your criteria."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there any limits?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No limits from PromptQuorum side. Your usage is only limited by your API keys or local LLM resources."
                  }
                }
              ]
            })
          }}
        />

        {/* HowTo Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Create Perfect Prompts with PromptQuorum",
              "description": "Four simple stages to transform rough ideas into precision prompts and compare results across multiple AI providers.",
              "step": [
                {
                  "@type": "HowToStep",
                  "position": "1",
                  "name": "Prompt",
                  "text": "Start with any idea, rough or refined. Enter your initial prompt into PromptQuorum.",
                  "image": "https://www.promptquorum.com/logo.svg"
                },
                {
                  "@type": "HowToStep",
                  "position": "2",
                  "name": "Optimize",
                  "text": "AI transforms it into a precision prompt using proven frameworks like CO-STAR, CRAFT, and RISEN.",
                  "image": "https://www.promptquorum.com/logo.svg"
                },
                {
                  "@type": "HowToStep",
                  "position": "3",
                  "name": "Dispatch",
                  "text": "Send to multiple AIs at once—ChatGPT, Claude, Gemini, local models, and 25+ other providers.",
                  "image": "https://www.promptquorum.com/logo.svg"
                },
                {
                  "@type": "HowToStep",
                  "position": "4",
                  "name": "Quorum",
                  "text": "Compare results, let AI analyze responses, find consensus, and surface the best answer across all providers.",
                  "image": "https://www.promptquorum.com/logo.svg"
                }
              ]
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
        <HeaderClient />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
