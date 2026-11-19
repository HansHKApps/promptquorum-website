// Terms of Use, locale "ko". Shared page: src/components/TermsPage.tsx. Text: src/lib/terms/content.ts.

import type { Metadata } from 'next'
import { TermsPage, termsMetadata } from '@/components/TermsPage'

export async function generateMetadata(): Promise<Metadata> {
  return termsMetadata('ko')
}

export default function KoTermsRoute() {
  return <TermsPage lang="ko" />
}
