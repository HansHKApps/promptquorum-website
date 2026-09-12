// Top stats bar: total tool count + a count per locality.

import type { Language } from '@/lib/blog/blogContent'
import { t } from './directory-i18n'

const LOCALITY_DOT: Record<'local' | 'hybrid' | 'cloud', string> = {
  local: 'bg-emerald-400',
  hybrid: 'bg-amber-400',
  cloud: 'bg-slate-400',
}

export function StatsBar({
  total,
  visible,
  byLocality,
  lang,
}: {
  total: number
  visible: number
  byLocality: Record<'local' | 'hybrid' | 'cloud', number>
  lang: Language
}) {
  const LOCALITY_LABEL: Record<'local' | 'hybrid' | 'cloud', string> = {
    local: t('statsLocalityLocal', lang),
    hybrid: t('localityHybridShort', lang),
    cloud: t('localityCloud', lang),
  }

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border border-primary/10 rounded-xl bg-primary/5 px-4 py-3 text-sm">
      <p className="font-bold text-text-primary">
        {visible === total ? t('statsToolsTotal', lang, { total }) : t('statsToolsVisible', lang, { visible, total })}
      </p>
      <div className="flex flex-wrap items-center gap-4">
        {(Object.keys(LOCALITY_LABEL) as (keyof typeof LOCALITY_LABEL)[]).map((key) => (
          <span key={key} className="inline-flex items-center gap-1.5 text-text-secondary">
            <span className={`h-2 w-2 rounded-full ${LOCALITY_DOT[key]}`} />
            {LOCALITY_LABEL[key]}: <strong className="text-text-primary font-semibold">{byLocality[key]}</strong>
          </span>
        ))}
      </div>
    </div>
  )
}
