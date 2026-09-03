import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/edge-ai/page-helpers'

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('en')
}

export default async function EdgeAiHubEn() {
  return buildHubPageElement('en')
}
