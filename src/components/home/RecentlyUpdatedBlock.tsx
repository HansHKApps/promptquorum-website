import type { Language } from '@/lib/blog/blogContent'
import { getRecentlyUpdated } from '@/lib/home/content-feed'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { HomeCard } from './HomeCard'
import { ExpandableList } from './ExpandableList'
import { t } from './home-i18n'

export function RecentlyUpdatedBlock({ lang = 'en' }: { lang?: Language }) {
  const updated = getRecentlyUpdated(lang)

  if (updated.length === 0) {
    return (
      <HomeCard size="md" title={t('recentlyUpdatedTitle', lang)} emptyState emptyMessage={t('recentlyUpdatedEmpty', lang)} />
    )
  }

  return (
    <HomeCard size="md" title={t('recentlyUpdatedTitle', lang)}>
      <ExpandableList
        lang={lang}
        items={updated.map((u) => ({
          key: u.url,
          title: u.title,
          url: u.url,
          date: t('updatedOnTemplate', lang, { date: formatDisplayDate(u.dateModified, lang) }),
        }))}
      />
    </HomeCard>
  )
}
