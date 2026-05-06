import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compress: true,
  trailingSlash: false,
  images: {},
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
    ]
  },
  async headers() {
    const cspHeader = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://vitals.vercel-insights.com https://api.vercel.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')

    return [
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
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
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ]
  },
}

export default nextConfig
