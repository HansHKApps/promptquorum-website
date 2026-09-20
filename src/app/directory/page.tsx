import type { Metadata } from 'next'
import { buildArticleMetadata, buildArticlePageElement } from '@/lib/power-local-llm/page-helpers'
import { DIRECTORY_ARTICLE_SLUG } from '@/lib/power-local-llm/metadata-helpers'

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateMetadata(): Promise<Metadata> {
  return buildArticleMetadata(DIRECTORY_ARTICLE_SLUG, 'en')
}

export default async function DirectoryPage() {
  return buildArticlePageElement(DIRECTORY_ARTICLE_SLUG, 'en')
}
