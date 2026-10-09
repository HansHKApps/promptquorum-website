import type { Metadata } from 'next'
import {
  buildArticleMetadata,
  buildArticlePageElement,
  getArticleStaticParams,
} from '@/lib/power-local-llm/page-helpers'
import { HANDS_ON_TEST_SLUGS } from '@/lib/hands-on-tests/links'
import {
  buildHandsOnTestMetadata,
  buildHandsOnTestPageElement,
  getHandsOnStaticParams,
} from '@/lib/hands-on-tests/page'

// Enable caching: articles don't change per-request
export const dynamic = 'force-static'
export const revalidate = 86400 // 24 hours

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return [...getArticleStaticParams(), ...getHandsOnStaticParams(HANDS_ON_TEST_SLUGS)]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return buildHandsOnTestMetadata(slug) ?? buildArticleMetadata(slug, 'en')
}

export default async function PowerLocalLLMArticleEn({ params }: PageProps) {
  const { slug } = await params
  return buildHandsOnTestPageElement(slug) ?? buildArticlePageElement(slug, 'en')
}
