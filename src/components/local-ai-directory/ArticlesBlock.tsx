// "PromptQuorum articles" drawer section — reuses the exact same
// src/generated/tool-article-index.json mechanism as RelatedArticlesDisclosure
// in PowerLocalLLMPostClient.tsx (keyed by tool `name`, {about, mentioned}
// tiers, `capped`/`totalCount` for the "+N more" line). Do not reinvent this
// lookup — it's generated at build time by scripts/generate-tool-article-index.mjs.

import Link from 'next/link'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { Language } from '@/lib/blog/blogContent'
import toolArticleIndex from '@/generated/tool-article-index.json'

type ToolArticleEntry = { cluster: string; slug: string; title: string; url: string; dateModified: string | null; tier: 'about' | 'mentioned' }
type ToolArticleIndex = Record<string, { articles: ToolArticleEntry[]; totalCount: number; capped: boolean }>

export function ArticlesBlock({ toolName, lang }: { toolName: string; lang: Language }) {
  const entry = (toolArticleIndex as ToolArticleIndex)[toolName]

  if (!entry || entry.articles.length === 0) {
    return <p className="text-sm text-text-secondary italic">No PromptQuorum articles mention this tool yet.</p>
  }

  const about = entry.articles.filter((a) => a.tier === 'about')
  const mentioned = entry.articles.filter((a) => a.tier === 'mentioned')

  const renderList = (articles: ToolArticleEntry[]) => (
    <ul className="space-y-1.5 text-sm">
      {articles.map((a) => (
        <li key={`${a.cluster}/${a.slug}`} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
          <Link href={a.url} className="text-primary hover:underline">{a.title}</Link>
          {a.dateModified && (
            <span className="text-xs text-text-secondary shrink-0">Updated {formatDisplayDate(a.dateModified, lang)}</span>
          )}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="space-y-3">
      {about.length > 0 && renderList(about)}
      {mentioned.length > 0 && (
        <div>
          <p className={about.length > 0 ? 'text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5' : 'sr-only'}>
            Also mentioned in:
          </p>
          {renderList(mentioned)}
        </div>
      )}
      {entry.capped && (
        <p className="text-xs text-text-secondary italic">
          +{entry.totalCount - entry.articles.length} more not shown
        </p>
      )}
    </div>
  )
}
