'use client'

import type { Language } from '@/lib/blog/blogContent'

interface Props {
  text: string
  label: string
  href: string
  lang: Language
}

export function NextStepBlock({ text, label, href, lang }: Props) {
  const destination = lang === 'en' ? href : `${href}?lang=${lang}`

  return (
    <div className="mt-12 border-l-4 border-primary bg-primary/5 rounded-r-xl p-6">
      <p className="text-text-primary font-medium mb-4">{text}</p>
      <a
        href={destination}
        className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
      >
        {label}
      </a>
    </div>
  )
}
