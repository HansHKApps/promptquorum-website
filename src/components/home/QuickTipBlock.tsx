import Link from 'next/link'
import type { Language } from '@/lib/blog/blogContent'
import { getRotatingTip } from '@/lib/home/quick-tips'
import { t } from './home-i18n'

export function QuickTipBlock({ lang = 'en' }: { lang?: Language }) {
  const tip = getRotatingTip(lang)

  return (
    <div className="rounded-xl border border-border bg-card p-4 h-full flex flex-col">
      <h3 className="text-sm font-bold text-text-primary mb-1.5">{t('quickTipTitle', lang)}</h3>
      <p className="text-sm text-text-secondary flex-1">{tip.text}</p>
      <Link href={tip.sourceUrl} className="mt-2 text-xs font-bold text-primary hover:underline self-start">
        {t('readMoreTemplate', lang, { title: tip.sourceTitle })}
      </Link>
    </div>
  )
}
