import type { Language } from '@/lib/blog/blogContent'
import { getLatestApps } from '@/lib/home/apps-feed'
import { CATEGORY_SUB_LABEL } from '@/lib/power-local-llm/apps/categories'
import type { CategorySubKey } from '@/lib/power-local-llm/apps/categories'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { HomeCard } from './HomeCard'
import { ExpandableList } from './ExpandableList'
import { t } from './home-i18n'

export function LatestAppsBlock({ lang = 'en' }: { lang?: Language }) {
  const apps = getLatestApps(lang)

  if (apps.length === 0) {
    return <HomeCard size="md" icon="apps" title={t('latestAppsTitle', lang)} emptyState emptyMessage={t('latestAppsEmpty', lang)} />
  }

  return (
    <HomeCard size="md" icon="apps" title={t('latestAppsTitle', lang)}>
      <ExpandableList
        lang={lang}
        items={apps.map((a) => ({
          key: a.slug,
          title: a.name,
          url: a.url,
          description: `${a.tagline} — ${CATEGORY_SUB_LABEL[a.category as CategorySubKey]?.[lang] ?? CATEGORY_SUB_LABEL[a.category as CategorySubKey]?.en ?? a.category}`,
          date: formatDisplayDate(a.addedDate, lang),
        }))}
      />
    </HomeCard>
  )
}
