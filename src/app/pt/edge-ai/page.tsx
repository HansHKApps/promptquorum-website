import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/edge-ai/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('pt')
}

export default async function EdgeAiHubPt() {
  return buildHubPageElement('pt')
}
