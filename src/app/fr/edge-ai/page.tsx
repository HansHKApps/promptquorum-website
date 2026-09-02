import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/edge-ai/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('fr')
}

export default async function EdgeAiHubFr() {
  return buildHubPageElement('fr')
}
