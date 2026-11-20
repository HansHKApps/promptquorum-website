// PromptQuorum Academy verification page, locale "ko". Shared: src/components/academy/VerifyPage.tsx. Always noindex.

import type { Metadata } from 'next'
import { VerifyPage, verifyMetadata } from '@/components/academy/VerifyPage'

export function generateMetadata(): Metadata {
  return verifyMetadata('ko')
}

export default function Route({ params }: { params: Promise<{ id: string }> }) {
  return <VerifyPage lang="ko" params={params} />
}
