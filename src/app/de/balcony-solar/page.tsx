import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/balcony-solar/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('de')
}

export default async function BalconySolarHubDe() {
  return buildHubPageElement('de')
}
