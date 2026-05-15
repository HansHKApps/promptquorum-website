
// ─── Section & Article types (mirrors PESection / PEArticle) ─────────────────

export interface LLMSection {
  id?: string
  title?: string
  content?: string | string[]
  blockquote?: string
  blockquoteSource?: string
  items?: string[]
  numberedItems?: (string | { title: string; whyItMatters: string })[]
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
  note?: string
  callouts?: Array<{ type: string; text: string }>
  snippetBlocks?: Array<{ type: 'one-sentence' | 'plain-terms'; text: string }>
  promptExamples?: Array<{ label: string; text: string }>
  decisionBlock?: {
    title: string
    localIf: string[]
    cloudIf: string[]
    quick: string[]
  }
  component?: string
  costNote?: string
}

export interface LLMArticle {
  theme: string
  title?: string
  intro?: string
  metaDescription?: string
  seoTitle?: string
  publishDate?: string
  dateModified?: string
  readTime?: string
  comparisonTable?: { columns: string[]; rows: Array<{ [key: string]: string }> }
  sections: Record<string, LLMSection>
  schema?: Record<string, unknown>
  supplementalSchema?: Record<string, unknown>
  howToSchema?: Record<string, unknown>
  faqSchema?: Record<string, unknown>
  softwareApplicationSchema?: Record<string, unknown>
  tableSchema?: Record<string, unknown>
  itemListSchema?: Record<string, unknown>
  datasetSchema?: Record<string, unknown>
  breadcrumbSchema?: Record<string, unknown>
  educationalLevel?: string
  audience?: string
  targetKeywords?: string[]
  primaryTerm?: string
  leadAnswerBlock?: string
  quickAnswer?: {
    title: string
    intro: string
    bullets: string[]
    footer?: string
  }
  quickAnswerTop?: Record<string, {
    question: string
    answer: string
    bullets: string[]
    updatedDate?: string
  }>
  lastUpdated?: string
  toc?: { label: string; anchor: string }[]
  heroComponent?: string
  gammaEmbedUrl?: string
  gammaDescription?: string
  twitterDescription?: string
  freshness_tier?: 'evergreen' | 'semi_annual' | 'annual'
  next_refresh_due?: string
  current_models_mentioned?: string[]
  current_hardware_mentioned?: string[]
  archive_after?: string
  specific_year?: number
  ctaText?: string
}
