import type { Metadata } from 'next'
import {
  buildHubMetadata,
  buildHubPageElement,
} from '@/lib/blog/page-helpers'
import type { Language } from '@/lib/blog/blogContent'

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as Language

  return buildHubMetadata(selectedLang)
}

export default async function BlogPage({ searchParams }: PageProps) {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']
  const selectedLang = (validLangs.includes(lang) ? lang : 'en') as Language

  return buildHubPageElement(selectedLang)
}
