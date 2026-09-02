// Enterprise AI content types — mirrors src/lib/local-llms/types.ts (LLMSection / LLMArticle)
// so this cluster reuses the same PostClient rendering conventions, GEO fields, and
// freshness-tier / schema tooling as local-llms and prompt-engineering.

export interface AffiliateLinkEntry {
  url: string
  productName: string
  productCategory: string
  priceRange?: string
  label?: string
}

export interface EnterpriseAiSection {
  id?: string
  title?: string
  content?: string | string[]
  blockquote?: string
  blockquoteSource?: string
  items?: string[]
  numberedItems?: (string | { title: string; whyItMatters: string })[]
  rows?: Array<{ [key: string]: string }>
  columns?: string[]
  itemHeadings?: boolean
  faqs?: Array<{ q: string; a: string }>
  isTldr?: boolean
  image?: string
  imageCaption?: string
  imagePlaceholder?: boolean
  codeBlock?: string
  codeLanguage?: string
  note?: string
  callouts?: Array<{ type: string; text: string }>
  snippetBlocks?: Array<{ type: 'one-sentence' | 'plain-terms'; text: string }>
  component?: string
  affiliateLinks?: AffiliateLinkEntry[]
  [key: string]: unknown
}

export interface EnterpriseAiArticle {
  theme: string
  title?: string
  intro?: string
  metaDescription?: string
  seoTitle?: string
  publishDate?: string
  dateModified?: string
  readTime?: string
  sections: Record<string, EnterpriseAiSection>
  schema?: Record<string, unknown>
  howToSchema?: Record<string, unknown>
  faqSchema?: Record<string, unknown>
  itemListSchema?: Record<string, unknown>
  breadcrumbSchema?: Record<string, unknown>
  educationalLevel?: string
  audience?: string
  targetKeywords?: string[]
  primaryTerm?: string
  leadAnswerBlock?: string
  quickAnswerTop?: Record<string, {
    question: string
    answer: string
    bullets: string[]
    updatedDate?: string
  }>
  toc?: { label: string; anchor: string }[]
  heroImage?: string
  freshness_tier?: 'evergreen' | 'semi_annual' | 'annual' | 'monthly'
  next_refresh_due?: string
  last_full_refresh?: string
  next_seo_review_due?: string
  specific_year?: number
  ctaText?: string
  ctaButton?: string
  ctaHref?: string
  nextStep?: { text: string; label: string; href: string }
  affiliateDisclosure?: boolean
  affiliateLinks?: AffiliateLinkEntry[]
  [key: string]: unknown
}
