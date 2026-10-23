import { AppLink as Link } from '@/components/AppLink'
import type { Language } from '@/lib/blog/blogContent'
import { SURFACE_CLASS, HUB_BUTTON_CLASS } from './homeSurface'
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
          <span className="text-[11px] font-bold uppercase tracking-widest text-hub-violet-ink">{t('pqBannerEyebrow', lang)}</span>
          <h2 className="mt-1.5 text-[22px] font-bold tracking-tight text-text-primary">{t('pqBannerHeading', lang)}</h2>
          <p className="mt-1.5 text-sm text-text-secondary">{t('pqBannerSub', lang)}</p>
        </div>
        <span className={`shrink-0 self-start md:self-center rounded-[10px] px-6 py-3 text-[15px] ${HUB_BUTTON_CLASS}`}>
          {t('pqBannerCta', lang)}
        </span>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {CHIP_KEYS.map(k => (
          <li key={k} className="rounded-full border border-hub-violet-edge bg-white px-3 py-1 text-xs font-medium text-text-primary">
            {t(k, lang)}
          </li>
        ))}
      </ul>
    </Link>
  )
}
