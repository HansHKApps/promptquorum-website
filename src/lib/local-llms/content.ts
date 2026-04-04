import type { Language } from '@/lib/blog/blogContent'

// ─── Section & Article types (mirrors PESection / PEArticle) ─────────────────

export interface LLMSection {
  title?: string
  content?: string | string[]
  blockquote?: string
  blockquoteSource?: string
  items?: string[]
  numberedItems?: string[]
  rows?: Array<{ [key: string]: string }>
  columns?: string[]
  faqs?: Array<{ q: string; a: string }>
  isTldr?: boolean
  tableFormat?: boolean
  image?: string
  imageCaption?: string
  imagePlaceholder?: boolean
  codeBlock?: string
  codeLanguage?: string
}

export interface LLMArticle {
  theme: string
  title: string
  intro: string
  metaDescription?: string
  seoTitle?: string
  publishDate: string
  dateModified?: string
  readTime: string
  sections: Record<string, LLMSection>
  schema?: Record<string, unknown>
  supplementalSchema?: Record<string, unknown>
  howToSchema?: Record<string, unknown>
  faqSchema?: Record<string, unknown>
  tableSchema?: Record<string, unknown>
  itemListSchema?: Record<string, unknown>
  educationalLevel?: string
  primaryTerm?: string
  toc?: { label: string; anchor: string }[]
}

// ─── Content registry ────────────────────────────────────────────────────────
// Articles are added here as they are written.
// An absent key causes the slug page to render a "Coming Soon" placeholder.

export const llmContent: Record<string, Record<Language, LLMArticle>> = {

  // ── Example: first article to be written ──────────────────────────────────
  // Uncomment and fill in when ready:
  //
  // 'what-are-local-llms': {
  //   en: {
  //     theme: 'Getting Started',
  //     title: 'What Are Local LLMs and Why Run Them in 2026?',
  //     intro: '...',
  //     publishDate: '2026-04-10',
  //     readTime: '8 min read',
  //     sections: { ... },
  //   },
  //   de: { ... },
  //   fr: { ... },
  //   ja: { ... },
  //   zh: { ... },
  // },

}
