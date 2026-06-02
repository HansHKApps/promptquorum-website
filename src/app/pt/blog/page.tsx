import type { Metadata } from 'next'
import {
  buildHubMetadata,
  buildHubPageElement,
} from '@/lib/blog/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('pt')
}

export default async function EsBlogPage() {
  return buildHubPageElement('pt')
}
