
// ─── Section & Article types (mirrors PESection / PEArticle) ─────────────────

export interface AffiliateLinkEntry {
  url: string
  productName: string
  productCategory: string
  priceRange?: string
  label?: string
}

/**
 * rankedItems entries are often authored with just `label` + `url` (no
 * catalog productName/productCategory) — looser than AffiliateLinkEntry.
 */
export interface RankedItemAffiliateLink {
  url: string
  label?: string
  productName?: string
  productCategory?: string
  priceRange?: string
}

export interface RankedItem {
  rank: number
  // "title/content" shape: local-llms, prompt-bites, and most power-local-llm rankedList sections
  title?: string
  content?: string
  // "name/tagline/verdict/pros/cons" shape: power-local-llm IDE-plugins-style buying guides
  name?: string
  tagline?: string
  verdict?: string
  pros?: string[]
  cons?: string[]
  affiliateLinks?: RankedItemAffiliateLink[]
}

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
  itemHeadings?: boolean
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
  youtubeUrl?: string
  costNote?: string
  strengths?: string[]
  weaknesses?: string[]
  bestFor?: string
  avoidIf?: string
  callout?: string
  linuxCompatibility?: string
  whereToBuy?: string
  subsections?: Array<{ title?: string; text?: string; content?: string; steps?: string[]; details?: { [key: string]: string }; providers?: string[]; list?: string[]; columns?: string[]; rows?: Array<{ [key: string]: string }> }>
  links?: Array<{ url: string; title: string; description: string }>
  // Affiliate buying-guide fields
  affiliateLinks?: AffiliateLinkEntry[]
  rankedItems?: RankedItem[]
  sponsoredSlot?: boolean
  [key: string]: unknown
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
  quickAnswerTop?: {
    question: string
    answer: string
    bullets: string[]
    updatedDate?: string
  } | Record<string, {
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
  heroImage?: string
  freshness_tier?: 'evergreen' | 'semi_annual' | 'annual' | 'monthly'
  next_refresh_due?: string
  last_full_refresh?: string
  lastFactChecked?: string
  next_seo_review_due?: string
  last_seo_review?: string
  current_models_mentioned?: string[]
  current_benchmarks_used?: string[]
  current_hardware_mentioned?: string[]
  archive_after?: string
  specific_year?: number
  ctaText?: string
  ctaButton?: string
  ctaHref?: string
  // When true, the post-client renders the neutral third-party-link notice
  // (AFFILIATE_DISCLOSURE) near the top of the article.
  affiliateDisclosure?: boolean
  // Article-level affiliate links (not attached to any single section) —
  // rendered once, near the disclosure banner.
  affiliateLinks?: AffiliateLinkEntry[]
  [key: string]: unknown
}
