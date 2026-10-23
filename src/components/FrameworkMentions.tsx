import { Fragment } from 'react'
import { AppLink as Link } from '@/components/AppLink'
import { FRAMEWORKS } from '@/lib/frameworksData'

const NAMES = FRAMEWORKS.map(f => f.name).filter(n => /^[A-Z0-9-]+$/.test(n))

/** Renders `text`, turning mentions of other framework acronyms (RISEN, TRACE, …) into links to their pages. */
export function FrameworkMentions({ text, prefix, currentSlug }: { text: string; prefix: string; currentSlug: string }) {
  const names = NAMES.filter(n => FRAMEWORKS.find(f => f.name === n)?.slug !== currentSlug)
  const re = new RegExp(`\\b(${names.map(n => n.replace(/[-]/g, '\\-')).join('|')})\\b`, 'g')
  const parts = text.split(re)
  return (
    <>
      {parts.map((part, i) => {
        const fw = i % 2 === 1 ? FRAMEWORKS.find(f => f.name === part) : undefined
        return fw ? (
          <Link key={i} href={`${prefix}/frameworks/${fw.slug}`} className="text-primary underline">{part}</Link>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      })}
    </>
  )
}
