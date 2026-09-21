import Link from 'next/link'
import type { Language } from '@/lib/blog/blogContent'
import { SURFACE_CLASS } from './homeSurface'
import { t } from './home-i18n'

const CHIP_KEYS = ['pqBannerChip1', 'pqBannerChip2', 'pqBannerChip3', 'pqBannerChip4', 'pqBannerChip5'] as const

/** Full-width product band between Tier 1 and Tier 2 — the homepage's only pointer to the PromptQuorum app. */
export function PqAppBannerBlock({ lang }: { lang: Language }) {
  const href = lang === 'en' ? '/pq-apps' : `/${lang}/pq-apps`
  return (
    <Link
      href={href}
      className={`group block rounded-xl border ${SURFACE_CLASS.action} p-6 mb-8 hover:shadow-lg hover:-translate-y-0.5 transition`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="min-w-0">
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">{t('pqBannerEyebrow', lang)}</span>
          <h2 className="mt-1.5 text-xl font-bold text-text-primary">{t('pqBannerHeading', lang)}</h2>
          <p className="mt-1.5 text-sm text-text-secondary">{t('pqBannerSub', lang)}</p>
        </div>
        <span className="shrink-0 self-start md:self-center px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-medium group-hover:bg-primary/90 transition">
          {t('pqBannerCta', lang)}
        </span>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {CHIP_KEYS.map(k => (
          <li key={k} className="rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-xs font-medium text-text-primary">
            {t(k, lang)}
          </li>
        ))}
      </ul>
    </Link>
  )
}
