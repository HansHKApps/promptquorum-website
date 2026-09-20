import type { Language } from '@/lib/blog/blogContent'
import { getLatestPosts } from '@/lib/home/content-feed'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { HomeCard } from './HomeCard'
import { ExpandableList } from './ExpandableList'
import { t } from './home-i18n'

export function LatestPostsBlock({ lang = 'en' }: { lang?: Language }) {
  const posts = getLatestPosts(lang)

  if (posts.length === 0) {
    return <HomeCard size="md" title={t('latestPostsTitle', lang)} emptyState emptyMessage={t('latestPostsEmpty', lang)} />
  }

  return (
    <HomeCard size="md" title={t('latestPostsTitle', lang)}>
      <ExpandableList
        lang={lang}
        items={posts.map((p) => ({
          key: p.url,
          title: p.title,
          url: p.url,
          description: p.excerpt,
          date: formatDisplayDate(p.publishDate, lang),
        }))}
      />
    </HomeCard>
  )
}
