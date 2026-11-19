// PromptQuorum Academy, locale "en". Shared page: src/components/academy/AcademyPage.tsx. 404 while ACADEMY_ENABLED is off.

import type { Metadata } from 'next'
import { AcademyPage, academyMetadata } from '@/components/academy/AcademyPage'

export async function generateMetadata(): Promise<Metadata> {
  return academyMetadata('en')
}

export default function EnAcademyRoute() {
  return <AcademyPage lang="en" />
}
