import type { Metadata } from 'next'
import { buildHubMetadata, buildHubPageElement } from '@/lib/smart-home/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('es')
}

export default async function SmartHomeHubEs() {
  return buildHubPageElement('es')
}
