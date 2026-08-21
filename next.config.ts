import type { NextConfig } from 'next'
import { PATH_PREFIX_LANGS } from './src/lib/i18n/constants'

const FRAMEWORK_REDIRECT_SLUGS = ['craft', 'trace', 'risen', 'rtf', 'co-star']

const nextConfig: NextConfig = {
  // Frozen at build time so freshness-badge logic (src/lib/article-freshness.ts)
  // is deterministic across ISR revalidations within the same deployment —
  // using `new Date()` there would make output wall-clock-dependent and defeat
  // any unchanged-content caching exemption.
  env: {
    BUILD_DATE: new Date().toISOString(),
  },
  compress: true,
  trailingSlash: false,
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  typescript: {
    ignoreBuildErrors: true,
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
      // Framework consolidation, locale-prefixed variants — mirrors the EN redirects above
      ...PATH_PREFIX_LANGS.flatMap(lang =>
        FRAMEWORK_REDIRECT_SLUGS.map(slug => ({
          source: `/${lang}/prompt-engineering/${slug}-framework`,
          destination: `/${lang}/frameworks/${slug}`,
          permanent: true,
        }))
      ),
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
      // Cannibalization fix: redirect weaker page to definitive MLX vs CUDA comparison
      {
        source: '/local-llms/apple-silicon-vs-nvidia-gpu-local-llm',
        destination: '/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026',
        permanent: true,
      },
      // English-only pages: no /{lang}/* routes exist; sitemap bug caused Google to crawl these
      {
        source: '/:lang(de|fr|ja|zh|es|pt|ar)/image-license',
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
        source: '/lib/s/:match*',
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
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.onesignal.com https://scripts.clarity.ms https://*.vercel-analytics.com https://*.vercel-insights.com",
      "worker-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "img-src 'self' data: https:",
      "connect-src 'self' https://i.clarity.ms https://*.clarity.ms https://c.bing.com https://*.vercel-insights.com https://*.vercel-analytics.com https://vitals.vercel-insights.com https://api.vercel.com https://onesignal.com https://*.onesignal.com",
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
        // OG images are fetched cross-origin by social crawlers and link previewers.
        // Overrides the broader /api/:path* Cache-Control below (s-maxage=3600) —
        // without this, generated PNGs never get a durable edge-cache hit.
        source: '/api/og/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=31536000, immutable' },
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
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'none'",
            ].join('; '),
          },
        ],
      },
      {
        // The desktop app fetches this on launch to check for newer versions.
        // Must be public, CORS-open for the Electron client, and short-cached
        // so version bumps propagate within minutes (overrides the catch-all
        // `/:path*` Cache-Control above — last matching rule wins).
        source: '/version.json',
        headers: [
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Cache-Control', value: 'public, max-age=300, s-maxage=300' },
        ],
      },
    ]
  },
}

export default nextConfig
