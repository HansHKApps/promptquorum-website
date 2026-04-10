'use client'

// TEMPORARY: LocalLLMsPostClient disabled due to content.ts syntax errors

import type { Language } from '@/lib/blog/blogContent'

interface Props {
  slug: string
  initialLang?: Language
}

export function LocalLLMsPostClient(props: Props) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>Article Temporarily Unavailable</h1>
      <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
        This article is temporarily unavailable due to content maintenance.
      </p>
      <p style={{ color: '#999' }}>
        Please check back soon.
      </p>
    </div>
  )
}
