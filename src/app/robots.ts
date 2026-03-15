import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'CCBot', 'PerplexityBot', 'OAI-SearchBot'],
        allow: ['/blog/', '/llms.txt', '/.well-known/ai-plugin.json', '/mcp.json'],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/blog/', '/llms.txt'],
      },
    ],
    sitemap: 'https://www.promptquorum.com/sitemap.xml',
  }
}
