import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Plus_Jakarta_Sans, JetBrains_Mono, Noto_Sans_Arabic, Noto_Sans_KR } from 'next/font/google'
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

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
})
const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-korean',
  display: 'swap',
})

import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Providers } from '@/components/Providers'
import { HeaderClient } from '@/components/HeaderClient'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'
import { PageTracker } from '@/components/PageTracker'
import { ClarityRouteTracker } from '@/components/ClarityRouteTracker'
import { OneSignalInit } from '@/components/OneSignalInit'
import { PushPromptBanner } from '@/components/PushPromptBanner'
import { ConsentedAnalytics } from '@/components/ConsentedAnalytics'

export const metadata: Metadata = {
  title: 'PromptQuorum — One Prompt. 25+ AI Models. Consensus Scoring.',
  description: 'Run one prompt across ChatGPT, Claude, Gemini and 25+ AI models simultaneously. Compare responses, detect hallucinations, and get a Quorum consensus verdict. Free beta — July 2026.',
  metadataBase: new URL('https://www.promptquorum.com'),
  authors: [{ name: 'Hans Kuepper' }],
  // Site-wide default. Cluster pages override via generateMetadata in
  // src/lib/power-local-llm/page-helpers.tsx (robots: { index: false, follow: true }).
  // Next.js metadata API merges page-level over root-level, so the cluster gets
  // noindex at both build time and runtime without any headers()/middleware coupling.
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://www.promptquorum.com',
    languages: {
      'en': 'https://www.promptquorum.com',
      'de': 'https://www.promptquorum.com/de',
      'fr': 'https://www.promptquorum.com/fr',
      'ja': 'https://www.promptquorum.com/ja',
      'zh': 'https://www.promptquorum.com/zh',
      'es': 'https://www.promptquorum.com/es',
      'pt-BR': 'https://www.promptquorum.com/pt',
      'ar': 'https://www.promptquorum.com/ar',
      'ko': 'https://www.promptquorum.com/ko',
      'x-default': 'https://www.promptquorum.com',
    }
  },
  openGraph: {
    type: 'website',
    url: 'https://www.promptquorum.com',
    siteName: 'PromptQuorum',
    locale: 'en_US',
    title: 'PromptQuorum — One Prompt. 25+ AI Models. Consensus Scoring.',
    description: 'Run one prompt across ChatGPT, Claude, Gemini and 25+ AI models simultaneously. Compare responses, detect hallucinations, and get a Quorum consensus verdict. Free beta — July 2026.',
    images: [{
      url: 'https://www.promptquorum.com/og-image.png',
      width: 1200,
      height: 675,
      alt: 'PromptQuorum — One Prompt. 25+ AI Models. Consensus Scoring.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@promptquorum',
    title: 'PromptQuorum — One Prompt. 25+ AI Models. Consensus Scoring.',
    description: 'Run one prompt across ChatGPT, Claude, Gemini and 25+ AI models simultaneously. Compare responses, detect hallucinations, and get a Quorum consensus verdict. Free beta — July 2026.',
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
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
}

// TODO(2026-07-20): Option C [locale] segment refactor — move src/app/{de,fr,ja,zh,es,pt,ar,ko}/
// into src/app/[locale]/ so params.locale reaches this layout and we can set
// <html lang={params.locale} dir={params.locale === 'ar' ? 'rtl' : 'ltr'}>
// server-side. HARD CONSTRAINTS: no headers() in root layout (caused June caching outage);
// preserve s-maxage=86400; do NOT touch slugs.ts; verify with scripts/check-lang-dir-all-locales.mjs.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} ${notoSansArabic.variable} ${notoSansKR.variable}`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#6750A4" />

        {/* Resource hints — warm up connections to the only cross-origin hosts
            the page uses, so their (deferred/lazy) requests resolve faster.
            PageSpeed flagged "no origins were preconnected". */}
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://cdn.onesignal.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />

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
                    "https://www.youtube.com/channel/UC5PL_1lU5pdV1d1EC1XeLhA",
                    "https://substack.com/@promptquorum"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.promptquorum.com/#website",
                  "name": "PromptQuorum",
                  "url": "https://www.promptquorum.com",
                  "description": "Dispatch one prompt to ChatGPT, Claude, Gemini and 25+ AI models simultaneously. Write structured prompts with 9 frameworks, run consensus analysis, detect hallucinations. 100% private.",
                  "publisher": { "@id": "https://www.promptquorum.com/#organization" },
                  "inLanguage": ["en", "de", "fr", "ja", "zh", "es", "pt", "ar", "ko"],
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
                  "description": "Prompt optimization and prompt management software. Send one structured prompt simultaneously to GPT-4o, Claude, Gemini, Mistral, Llama, DeepSeek and 25+ AI models. Compare parallel responses and run consensus analysis: hallucination detection, contradiction scoring, best-answer extraction. 9 prompt engineering frameworks. Supports local LLMs (Ollama, LM Studio) for fully private offline inference. Free — bring your own API key, no account required.",
                  "url": "https://www.promptquorum.com",
                  "downloadUrl": "https://www.promptquorum.com/download",
                  "applicationCategory": "AIApplication",
                  "operatingSystem": "Web, macOS, Windows",
                  "softwareVersion": "1.0",
                  "screenshot": {
                    "@type": "ImageObject",
                    "url": "https://www.promptquorum.com/og-image.png",
                    "width": 1200,
                    "height": 675
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
                    "description": "Free. Bring your own API key (BYOM) or connect a local LLM. No account required. Beta launch July 2026.",
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
          <div className="scroll-progress-bar" aria-hidden="true" />
          <HeaderClient />
          <PageTracker />
          <ClarityRouteTracker />
          <OneSignalInit />
          <main id="main">{children}</main>
          <Suspense><Footer /></Suspense>
          <CookieBanner />
          <PushPromptBanner />

          {/* Cookieless analytics — load for every visitor, no consent required.
              Umami (cookieless by design), Vercel Analytics + Speed Insights (cookieless),
              Microsoft Clarity (cookieless consentv2, afterInteractive so its history-API
              patch installs post-hydration and catches App Router client-side navigations).
              GA4 removed. ConsentedAnalytics is a no-op stub kept for reversibility. */}
          <Script
            id="umami-script"
            strategy="afterInteractive"
            src="/lib/s/script.js"
            data-website-id="1a0d1160-11ea-4882-a110-90fd9e5ebb75"
            data-host-url="/lib/s"
          />
          {/* Microsoft Clarity — cookieless mode (consentv2 storage denied), no consent
              required (§ 25 TDDDG). afterInteractive mirrors Umami so Clarity's own
              history-API patch installs after hydration and tracks SPA navigations. */}
          <Script
            id="clarity-init"
            strategy="afterInteractive"
          >{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="/api/clarity/tag/wtwpeavhum";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wtwpeavhum");window.clarity("consentv2",{ad_Storage:"denied",analytics_Storage:"denied"});`}</Script>
          <Analytics endpoint="/api/data" scriptSrc="/api/data/script.js" />
          <SpeedInsights />
          <ConsentedAnalytics />
        </Providers>
      </body>
    </html>
  )
}
