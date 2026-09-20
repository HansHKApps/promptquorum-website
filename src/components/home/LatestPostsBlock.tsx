import { getLatestPosts } from '@/lib/home/content-feed'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import { HomeCard } from './HomeCard'
import { ExpandableList } from './ExpandableList'

export function LatestPostsBlock() {
  const posts = getLatestPosts()

  if (posts.length === 0) {
    return <HomeCard size="md" icon="posts" title="Latest Posts" emptyState emptyMessage="New articles coming soon." />
  }

  return (
    <HomeCard size="md" icon="posts" title="Latest Posts">
      <ExpandableList
        items={posts.map((p) => ({
          key: p.url,
          title: p.title,
          url: p.url,
          description: p.excerpt,
          date: formatDisplayDate(p.publishDate, 'en'),
        }))}
      />
    </HomeCard>
  )
}
