import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/prompt-bites/page-helpers'

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('de')
}

export default async function PromptBitesHubDe() {
  return buildHubPageElement('de')
}
