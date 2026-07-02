import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/balcony-solar/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('fr')
}

export default async function BalconySolarHubFr() {
  return buildHubPageElement('fr')
}
