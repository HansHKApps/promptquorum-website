import type { Metadata } from 'next'
import { WaitlistModalOpener } from '@/components/WaitlistModalOpener'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function WaitlistPage() {
  return <WaitlistModalOpener />
}
