// PromptQuorum Academy, locale "ko". Shared page: src/components/academy/AcademyPage.tsx. 404 while ACADEMY_ENABLED is off.

import type { Metadata } from 'next'
import { AcademyPage, academyMetadata } from '@/components/academy/AcademyPage'

export async function generateMetadata(): Promise<Metadata> {
  return academyMetadata('ko')
}

export default function KoAcademyRoute() {
  return <AcademyPage lang="ko" />
}
