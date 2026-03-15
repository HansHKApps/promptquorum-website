'use client'

import { Suspense } from 'react'
import { LandingPageClient } from './LandingPageClient'
import { useWaitlist } from '@/context/WaitlistContext'

export function WaitlistModal() {
  const { isOpen, closeWaitlist } = useWaitlist()

  if (!isOpen) return null

  const onClose = closeWaitlist

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-md rounded-lg bg-white shadow-xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h2>
            <p className="text-gray-600 text-sm mb-6">
              Be the first to access our open-source prompt optimization tool. Early access gets lifetime premium features.
            </p>

            <Suspense fallback={<div className="h-12 bg-gray-200 rounded animate-pulse" />}>
              <LandingPageClient isWaitlistForm={true} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
