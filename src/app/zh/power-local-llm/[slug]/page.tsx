import type { Metadata } from 'next'
import { buildHandsOnTestMetadata, buildHandsOnTestPageElement } from '@/lib/hands-on-tests/page'
import {
  buildArticleMetadata,
  buildArticlePageElement,
} from '@/lib/power-local-llm/page-helpers'

export const revalidate = 86400

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return buildHandsOnTestMetadata(slug, 'zh') ?? buildArticleMetadata(slug, 'zh')
}

export default async function PowerLocalLLMArticleZh({ params }: PageProps) {
  const { slug } = await params
  return buildHandsOnTestPageElement(slug, 'zh') ?? buildArticlePageElement(slug, 'zh')
}
