// Terms of Use, locale "pt". Shared page: src/components/TermsPage.tsx. Text: src/lib/terms/content.ts.

import type { Metadata } from 'next'
import { TermsPage, termsMetadata } from '@/components/TermsPage'

export async function generateMetadata(): Promise<Metadata> {
  return termsMetadata('pt')
}

export default function PtTermsRoute() {
  return <TermsPage lang="pt" />
}
