'use client'

import { ErrorBoundary } from './ErrorBoundary'
import { WaitlistProvider } from '@/context/WaitlistContext'
import { WaitlistModal } from './WaitlistModal'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WaitlistProvider>
      <ErrorBoundary>{children}</ErrorBoundary>
      <WaitlistModal />
    </WaitlistProvider>
  )
}
