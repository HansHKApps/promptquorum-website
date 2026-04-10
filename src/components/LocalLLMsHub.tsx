'use client'

// TEMPORARY: LocalLLMsHub disabled due to content.ts syntax errors

import type { Language } from '@/lib/blog/blogContent'

export function LocalLLMsHub({ initialLang }: { initialLang?: Language }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>Local LLMs Hub</h1>
      <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
        The Local LLMs hub is temporarily unavailable due to content maintenance.
      </p>
      <p style={{ color: '#999' }}>
        Please check back soon, or explore our <a href="/prompt-engineering" style={{ color: '#6750A4', textDecoration: 'underline' }}>Prompt Engineering guides</a>.
      </p>
    </div>
  )
}
