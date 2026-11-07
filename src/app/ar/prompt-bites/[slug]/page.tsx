import type { Metadata } from 'next'
import { buildArticleMetadata, buildArticlePageElement } from '@/lib/prompt-bites/page-helpers'

export const revalidate = false // content only changes on deploy; no timed regeneration

export function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return buildArticleMetadata(slug, 'ar')
}

export default async function PromptBitesArticleAr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return buildArticlePageElement(slug, 'ar')
}
