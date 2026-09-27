import Link from 'next/link'
import type { ComponentProps } from 'react'

/**
 * Thin wrapper around next/link's `Link` that defaults `prefetch` to `false`
 * when the caller doesn't explicitly pass a `prefetch` prop.
 *
 * Next.js's default (`prefetch={true}`/undefined) triggers a viewport
 * IntersectionObserver-based prefetch for every rendered `<Link>`, which adds
 * up to a large number of background `?_rsc=` requests per page view when a
 * page renders many links (nav, footer, in-article links, etc). Most links
 * on this site don't need that background prefetch — defaulting it off here
 * cuts that request volume site-wide, while any call site that still wants
 * prefetching can opt back in with `<AppLink prefetch href={...}>` (or an
 * explicit `prefetch={false}` to be extra explicit, which is a no-op here).
 *
 * All other props (href, className, onClick, ref, children, etc.) are
 * forwarded untouched via `ComponentProps<typeof Link>`, so this stays fully
 * type- and behavior-compatible with existing `<Link>` usage.
 */
export function AppLink({ prefetch, ...props }: ComponentProps<typeof Link>) {
  return <Link prefetch={prefetch ?? false} {...props} />
}
