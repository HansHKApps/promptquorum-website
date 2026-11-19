// Terms of Use, locale "zh". Shared page: src/components/TermsPage.tsx. Text: src/lib/terms/content.ts.

import type { Metadata } from 'next'
import { TermsPage, termsMetadata } from '@/components/TermsPage'

export async function generateMetadata(): Promise<Metadata> {
  return termsMetadata('zh')
}

export default function ZhTermsRoute() {
  return <TermsPage lang="zh" />
}
