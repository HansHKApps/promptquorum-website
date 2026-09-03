import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/edge-ai/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('ja')
}

export default async function EdgeAiHubJa() {
  return buildHubPageElement('ja')
}
