import type { Language } from '@/lib/blog/blogContent'
import { AppLink as Link } from '@/components/AppLink'
import { FRESH_DAYS } from '@/lib/article-freshness'
import { getFreshItems, type FreshItem } from '@/lib/home/fresh-feed'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { t, type HomeUiKey } from './home-i18n'

const KIND_LABEL_KEY: Record<FreshItem['kind'], HomeUiKey> = {
  review: 'freshKindReview',
  app: 'freshKindApp',
  guide: 'freshKindGuide',
}

function ageLabel(ageDays: number, lang: Language): string {
  if (ageDays === 0) return t('freshToday', lang)
  if (ageDays === 1) return t('freshYesterday', lang)
  return t('freshDaysAgoTemplate', lang, { n: ageDays })
}

/**
 * "Just published" band above the homepage tiers: everything that went live in the last
 * FRESH_DAYS days (new articles + new directory apps), loudest element on the page by design.
 * Renders nothing when there is no such item — an always-visible "nothing new" band would train
 * readers to ignore it, unlike the permanent blocks whose empty state is explained in place.
 * Each item still shows its real date next to the relative age, per the site's date-visibility rule.
 */
export function FreshStripBlock({ lang = 'en' }: { lang?: Language }) {
  const items = getFreshItems(lang)
  if (items.length === 0) return null

  return (
    <section
      aria-labelledby="home-fresh-title"
      className="mb-8 rounded-xl border-2 border-primary bg-primary/10 p-4 sm:p-5 shadow-sm"
    >
      <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 id="home-fresh-title" className="text-lg sm:text-xl font-extrabold text-text-primary">
          {t('freshTitle', lang)}
        </h2>
        <p className="text-xs font-semibold text-text-secondary">{t('freshSubtitleTemplate', lang, { n: FRESH_DAYS })}</p>
      </div>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.key}>
            <Link
              href={item.url}
              className="block h-full rounded-lg border border-primary/30 bg-card p-3 transition hover:border-primary hover:shadow-md"
            >
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-white">
                  {t('freshNew', lang)}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  {t(KIND_LABEL_KEY[item.kind], lang)}
                </span>
              </div>
              <p className="text-sm font-extrabold text-text-primary line-clamp-2">{item.title}</p>
              {item.description && <p className="mt-0.5 text-xs text-text-secondary line-clamp-2">{item.description}</p>}
              <p className="mt-2 text-xs font-semibold text-text-muted">
                {ageLabel(item.ageDays, lang)} · {formatDisplayDate(item.date, lang)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
