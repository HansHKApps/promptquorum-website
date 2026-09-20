import Link from 'next/link'
import type { Language } from '@/lib/blog/blogContent'
import { getRotatingTip } from '@/lib/home/quick-tips'
import { HomeIcon } from './HomeIcon'
import { SURFACE_CLASS } from './homeSurface'
import { t } from './home-i18n'

export function QuickTipBlock({ lang = 'en' }: { lang?: Language }) {
  const tip = getRotatingTip(lang)

  return (
    <div className={`rounded-xl border ${SURFACE_CLASS.stat} p-4 h-full flex flex-col`}>
      <h3 className="text-sm font-bold text-text-primary mb-1.5 flex items-center gap-2">
        <HomeIcon name="tip" />
        {t('quickTipTitle', lang)}
      </h3>
      <p className="text-sm text-text-secondary flex-1">{tip.text}</p>
      <Link href={tip.sourceUrl} className="mt-2 text-xs font-bold text-primary hover:underline self-start">
        {t('readMoreTemplate', lang, { title: tip.sourceTitle })}
      </Link>
    </div>
  )
}
