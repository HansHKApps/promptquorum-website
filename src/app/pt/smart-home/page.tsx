import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/smart-home/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('pt')
}

export default async function SmartHomeHubPt() {
  return buildHubPageElement('pt')
}
