import type { Metadata } from 'next'
import {
  buildArticleMetadata,
  buildArticlePageElement,
  getArticleStaticParams,
} from '@/lib/power-local-llm/page-helpers'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getArticleStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return buildArticleMetadata(slug, 'de')
}

export default async function PowerLocalLLMArticleDe({ params }: PageProps) {
  const { slug } = await params
  return buildArticlePageElement(slug, 'de')
}
