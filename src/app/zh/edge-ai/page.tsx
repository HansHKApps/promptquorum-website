import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/edge-ai/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('zh')
}

export default async function EdgeAiHubZh() {
  return buildHubPageElement('zh')
}
