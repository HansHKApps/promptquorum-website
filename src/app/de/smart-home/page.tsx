import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/smart-home/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('de')
}

export default async function SmartHomeHubDe() {
  return buildHubPageElement('de')
}
