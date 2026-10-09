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
  return buildHandsOnTestMetadata(slug, 'pt') ?? buildArticleMetadata(slug, 'pt')
}

export default async function PowerLocalLLMArticleEs({ params }: PageProps) {
  const { slug } = await params
  return buildHandsOnTestPageElement(slug, 'pt') ?? buildArticlePageElement(slug, 'pt')
}
