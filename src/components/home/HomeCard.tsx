import type { ReactNode } from 'react'
import Link from 'next/link'
import { HomeIcon, type HomeIconName } from './HomeIcon'
import { SURFACE_CLASS, type HomeCardVariant } from './homeSurface'

export type HomeCardSize = 'lg' | 'md' | 'sm'

interface HomeCardProps {
  size: HomeCardSize
  /** Card kind: action (interactive), list (content lists), stat (numbers/meta). Defaults to list. */
  variant?: HomeCardVariant
  icon?: HomeIconName
  href?: string
  eyebrow?: string
  title: string
  description?: string
  /** Date/badge slot — rendered consistently everywhere a date needs to appear, per the site's date-visibility rule. */
  date?: string
  emptyState?: boolean
  emptyMessage?: string
  children?: ReactNode
}

const SIZE_TITLE_CLASS: Record<HomeCardSize, string> = {
  lg: 'text-xl font-bold',
  md: 'text-base font-bold',
  sm: 'text-sm font-bold',
}

const SIZE_PADDING_CLASS: Record<HomeCardSize, string> = {
  lg: 'p-6',
  md: 'p-5',
  sm: 'p-4',
}

/**
 * The one shared card primitive every homepage block renders through, so
 * corner radius / font hierarchy / color accents / spacing stay consistent
 * across the three uneven visual tiers, and the "never omit a block" fallback
 * rule is enforced in one place (emptyState) rather than reimplemented per block.
 */
export function HomeCard({ size, variant = 'list', icon, href, eyebrow, title, description, date, emptyState, emptyMessage, children }: HomeCardProps) {
  const cardClass = emptyState
    ? 'rounded-xl border border-dashed border-border bg-surface/50 text-text-muted'
    : `rounded-xl border ${SURFACE_CLASS[variant]} hover:shadow-lg hover:-translate-y-0.5 transition`

  const content = (
    <div className={`${cardClass} ${SIZE_PADDING_CLASS[size]} h-full flex flex-col`}>
      {eyebrow && !emptyState && (
        <span className="text-[11px] font-bold uppercase tracking-widest text-primary mb-1.5">{eyebrow}</span>
      )}
      <h3 className={`${SIZE_TITLE_CLASS[size]} ${emptyState ? 'text-text-muted' : 'text-text-primary'} mb-1.5 flex items-center gap-2`}>
        {icon && <HomeIcon name={icon} />}
        {title}
      </h3>
      {emptyState ? (
        <p className="text-sm text-text-muted italic">{emptyMessage ?? 'Data coming soon.'}</p>
      ) : (
        <>
          {description && <p className="text-sm text-text-secondary line-clamp-2 flex-1">{description}</p>}
          {children}
          {date && <p className="text-xs text-text-muted mt-3">{date}</p>}
        </>
      )}
    </div>
  )

  if (href && !emptyState) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    )
  }
  return content
}
