import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // AI crawlers: explicit allow for discovery files and blog content
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'PerplexityBot', 'CCBot', 'ClaudeBot', 'anthropic-ai'],
        allow: ['/', '/blog/', '/llms.txt', '/mcp.json', '/sitemap.xml'],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', '/blog/', '/llms.txt', '/mcp.json'],
      },
    ],
    sitemap: [
      'https://www.promptquorum.com/sitemap.xml',
      'https://www.promptquorum.com/video-sitemap.xml',
    ],
  }
}
