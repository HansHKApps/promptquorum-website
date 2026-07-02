import type { Metadata } from 'next'
import {
  buildArticleMetadata,
  buildArticlePageElement,
  getArticleStaticParams,
} from '@/lib/balcony-solar/page-helpers'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getArticleStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return buildArticleMetadata(slug, 'ar')
}

export default async function BalconySolarArticleAr({ params }: PageProps) {
  const { slug } = await params
  return buildArticlePageElement(slug, 'ar')
}
