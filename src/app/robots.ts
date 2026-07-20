import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseDisallow = [
    '/_next/static/',
    '/api/',
    '/presentations/',
    '/download',
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

  // /api/og/ generates the per-article social-share images (og:image) and must
  // stay crawlable for Discover/Images eligibility; every other /api/ route is
  // an action or data endpoint (confirm, unsubscribe, waitlist, etc.) with no
  // reason to be crawled. The more specific allow wins over the blanket disallow.
  const ogAllow = ['/api/og/'];

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', ...ogAllow],
        disallow: baseDisallow,
      },
      {
        userAgent: aiBots,
        allow: ['/', ...ogAllow],
        disallow: baseDisallow,
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', ...ogAllow],
        disallow: baseDisallow,
      },
    ],
    sitemap: [
      'https://www.promptquorum.com/sitemap.xml',
      'https://www.promptquorum.com/video-sitemap.xml',
    ],
  }
}
