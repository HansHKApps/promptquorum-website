'use client'

import { usePathname } from 'next/navigation'

// Shows the URL that was requested, so a mistyped path is easy to spot.
export function NotFoundPath() {
  const pathname = usePathname()
  if (!pathname || pathname === '/') return null
  return (
    <p className="mt-6 text-sm text-text-secondary">
      You asked for{' '}
      <code className="inline-block max-w-full align-bottom truncate rounded-md bg-primary/10 px-2 py-0.5 font-mono text-primary">
        {pathname}
      </code>
    </p>
  )
}
