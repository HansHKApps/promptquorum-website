'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

interface AboutTrackedLinkProps {
  href: string
  via: string
  className?: string
  external?: boolean
  children: ReactNode
}

export function AboutTrackedLink({ href, via, className, external, children }: AboutTrackedLinkProps) {
  const track = () => {
    try {
      window.umami?.track('about_cta_click', { via, source_page: window.location.pathname })
    } catch {
      // analytics must never block navigation
    }
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={track} className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} onClick={track} className={className}>
      {children}
    </Link>
  )
}
