import type { ReactNode } from 'react'
import { HUB_TONES } from '@/components/hub-template/palette'
import type { HubTone } from '@/components/hub-template/palette'

// Numbered section heading, same look as HubTemplate's SectionHeading (01 badge + H2 + intro line).
export function DirSectionHeading({
  index,
  tone,
  id,
  children,
  intro,
  aside,
}: {
  index: number
  tone: HubTone
  id?: string
  children: ReactNode
  intro?: string
  aside?: ReactNode
}) {
  const t = HUB_TONES[tone]
  return (
    <div className="mb-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className={`rounded-[10px] px-3.5 py-1 text-[15px] font-extrabold tracking-wide ${t.solid} text-white`}>{String(index).padStart(2, '0')}</span>
        <h2 id={id} className="text-[26px] font-bold tracking-tight text-text-primary sm:text-[28px]">{children}</h2>
        {aside}
      </div>
      {intro && <p className="mt-2 text-base text-text-secondary">{intro}</p>}
    </div>
  )
}
