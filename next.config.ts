import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compress: true,
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/local-llms/quantization-offloading-layer-splitting',
        destination: '/local-llms/llm-quantization-explained',
        permanent: true,
      },
      // Framework consolidation: /prompt-engineering/*-framework → /frameworks/*
      {
        source: '/prompt-engineering/craft-framework',
        destination: '/frameworks/craft',
        permanent: true,
      },
      {
        source: '/prompt-engineering/trace-framework',
        destination: '/frameworks/trace',
        permanent: true,
      },
      {
        source: '/prompt-engineering/risen-framework',
        destination: '/frameworks/risen',
        permanent: true,
      },
      {
        source: '/prompt-engineering/rtf-framework',
        destination: '/frameworks/rtf',
        permanent: true,
      },
      {
        source: '/prompt-engineering/co-star-framework',
        destination: '/frameworks/co-star',
        permanent: true,
      },
      // Slug corrections: fix broken internal links
      {
        source: '/prompt-engineering/ai-hallucinations-how-to-stop',
        destination: '/prompt-engineering/ai-hallucinations-why-ai-makes-things-up',
        permanent: true,
      },
      {
        source: '/local-llms/langchain-tutorial',
        destination: '/local-llms/local-ai-agents-langgraph-ollama',
        permanent: true,
      },
      {
        source: '/local-llms/rag-retrieval-augmented-generation',
        destination: '/prompt-engineering/rag-explained',
        permanent: true,
      },
      // Slug fix: short apple-silicon slug missing -m5-max suffix
      {
        source: '/local-llms/running-70b-models-apple-silicon',
        destination: '/local-llms/running-70b-models-apple-silicon-m5-max',
        permanent: true,
      },
      // English-only pages: no /{lang}/* routes exist; sitemap bug caused Google to crawl these
      {
        source: '/:lang(de|fr|ja|zh)/waitlist',
        destination: '/waitlist?lang=:lang',
        permanent: true,
      },
      {
        source: '/:lang(de|fr|ja|zh)/image-license',
        destination: '/image-license',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/data/:match*',
        destination: 'https://www.promptquorum.com/_vercel/insights/:match*',
      },
      {
        source: '/api/stats/:match*',
        destination: 'https://cloud.umami.is/:match*',
      },
      {
        source: '/api/clarity/:match*',
        destination: 'https://www.clarity.ms/:match*',
      },
    ]
  },
  async headers() {
    const cspHeader = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.onesignal.com",
      "worker-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://vitals.vercel-insights.com https://api.vercel.com https://onesignal.com https://*.onesignal.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')

    return [
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, HEAD, OPTIONS, PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/presentations/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data:",
              "img-src 'self' data: https:",
              "connect-src 'none'",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'none'",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
