import type { ReactNode } from 'react'
import type { HubStartCard } from './types'

// Small stroke icons for the "Start here" cards. Decorative (the card text carries the meaning).
const PATHS: Record<HubStartCard["icon"], ReactNode> = {
  package: (
    <>
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  home: (
    <>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  trend: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v11" />
      <path d="M7 11l5 5 5-5" />
      <path d="M5 20h14" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 4h8v5a4 4 0 01-8 0V4z" />
      <path d="M8 6H5v1a3 3 0 003 3" />
      <path d="M16 6h3v1a3 3 0 01-3 3" />
      <path d="M12 13v4" />
      <path d="M8 20h8" />
    </>
  ),
  code: (
    <>
      <path d="M8 8l-5 4 5 4" />
      <path d="M16 8l5 4-5 4" />
      <path d="M14 5l-4 14" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </>
  ),
  coins: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M14.5 9.5c-.5-.8-1.4-1.2-2.5-1.2-1.4 0-2.5.7-2.5 1.8 0 2.6 5 1.2 5 3.8 0 1.1-1.1 1.8-2.5 1.8-1.1 0-2-.4-2.5-1.2" />
      <path d="M12 6.8v1.5M12 15.7v1.5" />
    </>
  ),
  laptop: (
    <>
      <rect x="5" y="5" width="14" height="10" rx="1.5" />
      <path d="M3 19h18" />
    </>
  ),
  feather: (
    <>
      <path d="M20 4c-8 0-13 4-13 11v3" />
      <path d="M20 4c0 8-4 12-11 12" />
      <path d="M7 18l6-6" />
    </>
  ),
}

export function HubIcon({ name }: { name: HubStartCard['icon'] }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  )
}
