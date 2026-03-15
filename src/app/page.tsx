import { Suspense } from 'react'
import { LandingPageServer } from '@/components/LandingPageServer'

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <LandingPageServer />
    </Suspense>
  )
}
