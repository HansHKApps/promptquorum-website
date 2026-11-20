// PromptQuorum Academy verification page, locale "fr". Shared: src/components/academy/VerifyPage.tsx. Always noindex.

import type { Metadata } from 'next'
import { VerifyPage, verifyMetadata } from '@/components/academy/VerifyPage'

export function generateMetadata(): Metadata {
  return verifyMetadata('fr')
}

export default function Route({ params }: { params: Promise<{ id: string }> }) {
  return <VerifyPage lang="fr" params={params} />
}
