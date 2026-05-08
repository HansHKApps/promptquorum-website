import type { Metadata } from 'next'
import {
  buildArticleMetadata,
  buildArticlePageElement,
  getArticleStaticParams,
} from '@/lib/power-local-llm/page-helpers'

// Enable caching: articles don't change per-request
export const dynamic = 'force-static'
export const revalidate = 86400 // 24 hours

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getArticleStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return buildArticleMetadata(slug, 'en')
}

export default async function PowerLocalLLMArticleEn({ params }: PageProps) {
  const { slug } = await params
  return buildArticlePageElement(slug, 'en')
}
