// Terms of Use, locale "fr". Shared page: src/components/TermsPage.tsx. Text: src/lib/terms/content.ts.

import type { Metadata } from 'next'
import { TermsPage, termsMetadata } from '@/components/TermsPage'

export async function generateMetadata(): Promise<Metadata> {
  return termsMetadata('fr')
}

export default function FrTermsRoute() {
  return <TermsPage lang="fr" />
}
