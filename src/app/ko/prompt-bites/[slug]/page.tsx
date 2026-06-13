import type { Metadata } from 'next'
import { buildArticleMetadata, buildArticlePageElement, getArticleStaticParams } from '@/lib/prompt-bites/page-helpers'

export const dynamic = 'force-static'
export const revalidate = 86400

export function generateStaticParams() {
  return getArticleStaticParams()
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return buildArticleMetadata(slug, 'ko')
}

export default async function PromptBitesArticleAr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return buildArticlePageElement(slug, 'ko')
}
