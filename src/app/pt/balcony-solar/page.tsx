import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/balcony-solar/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('pt')
}

export default async function BalconySolarHubPt() {
  return buildHubPageElement('pt')
}
