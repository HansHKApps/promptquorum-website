
export interface PESection {
  id?: string
  title?: string
  content?: string | string[]
  blockquote?: string
  blockquoteSource?: string
  items?: string[] | Array<{ title: string; url: string }>
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
  callouts?: Array<{ type: string; label: string; text: string }>
  snippets?: Array<{ type: 'in-one-sentence' | 'in-plain-terms'; text: string }>
  mistakes?: Array<{ mistake: string; problem: string; fix: string }>
  promptExamples?: Array<{ bad: string; good: string; badLabel?: string; goodLabel?: string }>
}

export interface PEArticle {
  theme: string
  title?: string
  intro?: string
  seoTitle?: string          // Overrides title in <title> tag for SERP CTR optimisation
  metaDescription?: string   // 150–160 char SEO-optimised description for meta tag (falls back to intro if absent)
  ogTitle?: string           // Overrides og:title (falls back to seoTitle → title)
  ogDescription?: string     // Overrides og:description (falls back to metaDescription → intro)
  twitterTitle?: string      // Overrides twitter:title (falls back to ogTitle → seoTitle → title)
  twitterDescription?: string // Overrides twitter:description (falls back to ogDescription → metaDescription → intro)
  publishDate?: string
  dateModified?: string
  lastFactChecked?: string   // E-E-A-T signal: date and model versions verified against
  readTime?: string
  sections: Record<string, PESection>
  schema?: Record<string, unknown>
  supplementalSchema?: Record<string, unknown>
  howToSchema?: Record<string, unknown>
  faqSchema?: Record<string, unknown>
  tableSchema?: Record<string, unknown>
  recipesHowToSchema?: Record<string, unknown>
  softwareSchema?: Record<string, unknown>
  itemListSchema?: Record<string, unknown>
  educationalLevel?: string  // 'Beginner' | 'Intermediate' | 'Advanced' | 'Technical'
  audience?: string          // Specific job role or use case, e.g. 'Developers building with LLMs'
  primaryTerm?: string       // Key concept this article defines, e.g., 'Prompt Engineering'
  aboutTopics?: string[]     // 3 topic entities for TechArticle schema about[] array
  howToName?: string         // Custom HowTo schema name (overrides section title)
  toc?: { label: string; anchor: string }[]  // Table of contents entries (label + anchor ID)
  leadAnswerBlock?: string    // Bold 25–50 word answer to the H1, rendered between intro and Key Takeaways (Rule 31)
  quickFacts?: string[]       // Numeric fact bullets rendered between Key Takeaways and TOC (Rule 27)
  gammaEmbedUrl?: string     // Gamma slide presentation embed URL (download URL derived by appending ?print=1)
  gammaDescription?: string  // SEO-optimised description of slide deck contents (2-3 sentences, primary keyword + specific numbers)
  widgetEmbedUrl?: string    // Interactive widget embed URL (audit guide, calculator, decision tree, etc.)
  widgetDescription?: string // SEO-optimised description of widget contents (2-3 sentences, explaining what user will learn/achieve)
  freshness_tier?: 'evergreen' | 'semi_annual' | 'annual'
  next_refresh_due?: string
  current_models_mentioned?: string[]
  current_hardware_mentioned?: string[]
  archive_after?: string
  specific_year?: number
}
