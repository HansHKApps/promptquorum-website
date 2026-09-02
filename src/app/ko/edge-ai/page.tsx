import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/edge-ai/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('ko')
}

export default async function EdgeAiHubKo() {
  return buildHubPageElement('ko')
}
