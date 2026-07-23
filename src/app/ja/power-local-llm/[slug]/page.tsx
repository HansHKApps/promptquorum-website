import type { Metadata } from 'next'
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
  return buildArticleMetadata(slug, 'ja')
}

export default async function PowerLocalLLMArticleJa({ params }: PageProps) {
  const { slug } = await params
  return buildArticlePageElement(slug, 'ja')
}
