import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseDisallow = [
    '/_next/static/',
    '/api/',
    '/presentations/',
    '/download',
    '/image-license',
  ];

  const aiBots = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'PerplexityBot',
    'Perplexity-User',
    'ClaudeBot',
    'anthropic-ai',
    'Claude-Web',
    'Claude-SearchBot',
    'CCBot',
    'YouBot',
    'Google-Extended',
    'Googlebot-Extended',
    'Applebot-Extended',
    'FacebookBot',
    'Meta-ExternalAgent',
    'meta-externalagent',
    'Bytespider',
    'Diffbot',
    'cohere-ai',
    'omgili',
    'ImagesiftBot',
    'Valerian',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: baseDisallow,
      },
      {
        userAgent: aiBots,
        allow: '/',
        disallow: baseDisallow,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: baseDisallow,
      },
    ],
    sitemap: [
      'https://www.promptquorum.com/sitemap.xml',
      'https://www.promptquorum.com/video-sitemap.xml',
    ],
  }
}
