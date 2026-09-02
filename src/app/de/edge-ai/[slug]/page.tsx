import type { Metadata } from 'next'
import {
  buildArticleMetadata,
  buildArticlePageElement,
} from '@/lib/edge-ai/page-helpers'

export const revalidate = 86400

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return buildArticleMetadata(slug, 'de')
}

export default async function EdgeAiArticleDe({ params }: PageProps) {
  const { slug } = await params
  return buildArticlePageElement(slug, 'de')
}
