// Our own category symbols (no brand logos, no retailer photos). One family: 24px grid, 1.75 stroke, rounded joins.
import type { BannerCategory } from '@/lib/affiliate-banners/types'

const PATHS: Record<BannerCategory, React.ReactNode> = {
  gpu: (<><rect x="2" y="7" width="20" height="10" rx="2" /><circle cx="9" cy="12" r="2.5" /><circle cx="16" cy="12" r="1.5" /><path d="M5 17v2M9 17v2" /></>),
  'mini-pc': (<><rect x="3" y="8" width="18" height="8" rx="2" /><path d="M7 12h4" /><circle cx="17" cy="12" r="0.8" /></>),
  laptop: (<><rect x="5" y="5" width="14" height="10" rx="1.5" /><path d="M2 19h20" /></>),
  mac: (<><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M12 16v4M8 20h8" /></>),
  'cloud-gpu': (<path d="M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 9.5a4.25 4.25 0 0 1-.25 8.5H7z" />),
  nas: (<><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M4 9h16M4 15h16" /><circle cx="8" cy="6" r="0.8" /><circle cx="8" cy="12" r="0.8" /><circle cx="8" cy="18" r="0.8" /></>),
  vpn: (<><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></>),
  solar: (<><circle cx="12" cy="5" r="2.2" /><path d="M4 21l2-9h12l2 9zM8 12l-1 9M16 12l1 9M5 16.5h14" /></>),
  'router-hub': (<><circle cx="12" cy="17" r="1.5" /><path d="M8.5 13.5a5 5 0 0 1 7 0M5.5 10.5a9 9 0 0 1 13 0" /></>),
  monitor: (<><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M12 17v4M8 21h8" /></>),
  sbc: (<><rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" /></>),
  software: (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 9l3 3-3 3M12 15h5" /></>),
  other: (<path d="M21 8l-9-5-9 5v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8" />),
}

export function CategoryIcon({ category, className = 'h-8 w-8 sm:h-10 sm:w-10' }: { category: BannerCategory; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      {PATHS[category]}
    </svg>
  )
}
