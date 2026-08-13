import { PROMPT_BITES_PUBLISHED_SLUGS, PROMPT_BITES_HUB_PUBLISHED } from '@/lib/prompt-bites/published'
import { PROMPT_BITES_SLUG_TO_KEY } from '@/lib/prompt-bites/slugs'
import { metadata, articleLastmod, type Page } from '../sitemap-shared'

export const PAGES: Page[] = [
  ...(PROMPT_BITES_HUB_PUBLISHED
    ? [{ path: '/prompt-bites', priority: 0.9, changefreq: 'weekly' as const, lastmod: '2026-05-26' }]
    : []),
  ...Array.from(PROMPT_BITES_PUBLISHED_SLUGS).map(slug => ({
    path: `/prompt-bites/${slug}`,
    priority: 0.8,
    changefreq: 'monthly' as const,
    lastmod: articleLastmod(metadata['prompt-bites'], PROMPT_BITES_SLUG_TO_KEY[slug], '2026-05-26'),
  })),
]
