import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/edge-ai/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('de')
}

export default async function EdgeAiHubDe() {
  return buildHubPageElement('de')
}
