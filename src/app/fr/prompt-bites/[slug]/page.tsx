import type { Metadata } from 'next'
import { buildArticleMetadata, buildArticlePageElement } from '@/lib/prompt-bites/page-helpers'

export const revalidate = 86400

export function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return buildArticleMetadata(slug, 'fr')
}

export default async function PromptBitesArticleFr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return buildArticlePageElement(slug, 'fr')
}
