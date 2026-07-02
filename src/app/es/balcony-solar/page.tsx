import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/balcony-solar/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('es')
}

export default async function BalconySolarHubEs() {
  return buildHubPageElement('es')
}
