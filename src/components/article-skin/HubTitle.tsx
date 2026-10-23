import type { ReactNode } from 'react'
import type { ArticleSkin } from './skin'

// Hub-style title highlight: the leading words sit in a rose pill, like the hub H1.
// Decoration only: the heading text is unchanged and nothing is added or removed.
// Space-separated languages highlight the first two words, ja/zh the first four characters.
export function renderHubTitle(title: string, skin: ArticleSkin, lang: string): ReactNode {
  if (skin !== 'hub') return title
  let head: string
  if (lang === 'ja' || lang === 'zh') {
    // A leading Latin brand/product name (e.g. "LM Studio レビュー") is highlighted whole, never split mid-word.
    const latin = /^[\x20-\x7E]*[\x21-\x7E](?=\s|[^\x00-\x7F])/.exec(title)?.[0]
    head = latin && latin.length >= 2 ? latin : Array.from(title).slice(0, 4).join('')
  } else {
    const words = title.split(' ')
    if (words.length < 4) return title
    head = words.slice(0, 2).join(' ')
  }
  if (!head || head.length >= title.length) return title
  return (
    <>
      <span className="hub-h1-hl inline-block whitespace-nowrap rounded-[10px] bg-hub-rose-tint px-2.5 text-hub-rose-ink">{head}</span>
      {title.slice(head.length)}
    </>
  )
}
