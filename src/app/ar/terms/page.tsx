// Terms of Use, locale "ar". Shared page: src/components/TermsPage.tsx. Text: src/lib/terms/content.ts.

import type { Metadata } from 'next'
import { TermsPage, termsMetadata } from '@/components/TermsPage'

export async function generateMetadata(): Promise<Metadata> {
  return termsMetadata('ar')
}

export default function ArTermsRoute() {
  return <TermsPage lang="ar" />
}
