export type HomeIconName = 'search' | 'compare' | 'posts' | 'apps' | 'review' | 'trending' | 'updated' | 'stats' | 'mentions' | 'tip' | 'feedback' | 'globe' | 'verified' | 'mcp'

// 24x24 stroke paths; stroke is currentColor so the icon inherits the accent from its parent.
const PATHS: Record<HomeIconName, string> = {
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM20 20l-4-4',
  compare: 'M12 4v16M6 8h12M6 8l-3 6a3 3 0 0 0 6 0L6 8ZM18 8l-3 6a3 3 0 0 0 6 0l-3-6Z',
  posts: 'M5 4h14v16H5zM8 9h8M8 13h8M8 17h5',
  apps: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
  review: 'm12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3Z',
  trending: 'm3 17 6-6 4 4 8-8M15 7h6v6',
  updated: 'M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5',
  stats: 'M5 20V10M12 20V4M19 20v-7',
  mentions: 'M4 5h16v11H9l-5 4V5Z',
  tip: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.500 5.6 12 3Z',
  verified: 'M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3ZM9 12l2.2 2.2L15.5 10',
  feedback: 'M4 20l1.5-4.5A8 8 0 1 1 8 18.5L4 20Z',
  mcp: 'M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4M7 7h10v10H7z',
}

export function HomeIcon({ name, size = 18 }: { name: HomeIconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-primary"
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
