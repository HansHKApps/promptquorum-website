import type { Metadata } from 'next'
import {
  buildHubMetadata,
  buildHubPageElement,
} from '@/lib/blog/page-helpers'

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata('es')
}

export default async function EsBlogPage() {
  return buildHubPageElement('es')
}
