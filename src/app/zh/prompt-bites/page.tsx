import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/prompt-bites/page-helpers'

export const dynamic = 'force-static'
export const revalidate = false // content only changes on deploy; no timed regeneration

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('zh')
}

export default async function PromptBitesHubZh() {
  return buildHubPageElement('zh')
}
