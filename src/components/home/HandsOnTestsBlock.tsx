import type { Language } from '@/lib/blog/blogContent'
import { getHandsOnFeed } from '@/lib/home/hands-on-feed'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { freshAgeDays } from '@/lib/article-freshness'
import { HomeCard } from './HomeCard'
import { ExpandableList } from './ExpandableList'
import { t } from './home-i18n'

export function HandsOnTestsBlock({ lang = 'en' }: { lang?: Language }) {
  const tests = getHandsOnFeed(lang)

  if (tests.length === 0) {
    return <HomeCard size="md" icon="test" title={t('handsOnTitle', lang)} emptyState emptyMessage={t('handsOnEmpty', lang)} />
  }

  return (
    <HomeCard size="md" icon="test" title={t('handsOnTitle', lang)}>
      <ExpandableList
        lang={lang}
        items={tests.map((x) => ({
          key: x.slug,
          title: x.title,
          url: x.url,
          description: x.excerpt,
          date: formatDisplayDate(x.date, lang),
          freshText: t('freshNew', lang),
          isoDate: x.date,
          freshAtBuild: freshAgeDays(x.date) !== null,
        }))}
      />
    </HomeCard>
  )
}
