'use client'

import Link from 'next/link'
import { themes } from '@/lib/prompt-engineering/themes'
import { useLang } from '@/hooks/useLang'

function navHref(path: string, lang: string) {
  return lang === 'en' ? path : `${path}?lang=${lang}`
}

const THEME_LABELS: Record<string, Record<string, string>> = {
  fundamentals: {
    en: 'Fundamentals',
    de: 'Grundlagen',
    fr: 'Fondamentaux',
    ja: '基礎',
    zh: '基础知识',
  },
  frameworks: {
    en: 'Frameworks',
    de: 'Frameworks',
    fr: 'Frameworks',
    ja: 'フレームワーク',
    zh: '框架',
  },
  techniques: {
    en: 'Techniques',
    de: 'Techniken',
    fr: 'Techniques',
    ja: 'テクニック',
    zh: '技术',
  },
  'use-topics': {
    en: 'Use Topics',
    de: 'Anwendungsthemen',
    fr: 'Sujets d\'usage',
    ja: '活用テーマ',
    zh: '应用主题',
  },
}

// Article titles displayed on the hub — English only for now
// These will be replaced with translated titles once article content is added
const ARTICLE_TITLES: Record<string, string> = {
  // Fundamentals
  'what-is-prompt-engineering': 'What is Prompt Engineering?',
  'how-llms-process-prompts': 'How LLMs Process Prompts',
  'tokens-context-windows-explained': 'Tokens and Context Windows Explained',
  'temperature-and-sampling': 'Temperature and Sampling: Controlling Randomness',
  'system-prompts-explained': 'System Prompts Explained',
  'few-shot-vs-zero-shot': 'Few-Shot vs Zero-Shot Prompting',
  'hallucinations-causes-prevention': 'AI Hallucinations: Causes and Prevention',
  'prompt-anatomy': 'The Anatomy of a Good Prompt',
  'input-output-format-control': 'Controlling Input and Output Format',
  'common-prompt-mistakes': '10 Common Prompt Mistakes (and How to Fix Them)',

  // Frameworks
  'craft-framework': 'CRAFT Framework',
  'co-star-framework': 'CO-STAR Framework',
  'ape-framework': 'APE Framework',
  'rtf-framework': 'RTF Framework',
  'tag-framework': 'TAG Framework',
  'risen-framework': 'RISEN Framework',
  'rodes-framework': 'RODES Framework',
  'trace-framework': 'TRACE Framework',
  'care-framework': 'CARE Framework',
  'era-framework': 'ERA Framework',
  'choosing-the-right-framework': 'How to Choose the Right Framework',

  // Techniques
  'chain-of-thought-prompting': 'Chain of Thought Prompting',
  'role-prompting': 'Role Prompting',
  'constraint-setting': 'Constraint Setting',
  'output-format-specification': 'Output Format Specification',
  'iterative-refinement': 'Iterative Refinement',
  'prompt-chaining': 'Prompt Chaining',
  'self-consistency': 'Self-Consistency',
  'tree-of-thoughts': 'Tree of Thoughts',
  'meta-prompting': 'Meta-Prompting',
  'retrieval-augmented-generation': 'Retrieval-Augmented Generation (RAG)',
  'multi-model-consensus': 'Multi-Model Consensus',

  // Use Topics
  'prompts-for-writing': 'Prompt Engineering for Writing',
  'prompts-for-coding': 'Prompt Engineering for Coding',
  'prompts-for-research': 'Prompt Engineering for Research',
  'prompts-for-data-analysis': 'Prompt Engineering for Data Analysis',
  'prompts-for-customer-support': 'Prompt Engineering for Customer Support',
  'prompts-for-marketing': 'Prompt Engineering for Marketing',
  'prompts-for-education': 'Prompt Engineering for Education',
  'prompts-for-legal': 'Prompt Engineering for Legal Work',
  'prompts-for-finance': 'Prompt Engineering for Finance',
  'prompts-for-healthcare': 'Prompt Engineering for Healthcare',
}

const THEME_COLORS: Record<string, { badge: string; dot: string }> = {
  fundamentals: { badge: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-400' },
  frameworks:   { badge: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-400' },
  techniques:   { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-400' },
  'use-topics': { badge: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-400' },
}

function PromptEngineeringHubContent() {
  const lang = useLang()

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="py-16 border-b border-primary/20 mb-16">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Prompt Engineering</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            The complete guide to writing better AI prompts.
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            Prompt engineering determines whether an AI model gives you a useful answer or a vague one.
            These guides cover everything from core concepts to advanced techniques and domain-specific templates.
          </p>
        </div>

        {/* Theme sections */}
        <div className="space-y-20">
          {themes.map((theme) => {
            const label = THEME_LABELS[theme.id]?.[lang] ?? THEME_LABELS[theme.id]?.['en'] ?? theme.title
            const colors = THEME_COLORS[theme.id]

            return (
              <section key={theme.id} id={theme.id}>
                {/* Theme header */}
                <div className="mb-8">
                  <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full border mb-4 ${colors.badge}`}>
                    {label}
                  </span>
                  <h2 className="text-2xl font-bold text-text-primary mb-2">{label}</h2>
                  <p className="text-text-secondary leading-relaxed max-w-2xl">{theme.description}</p>
                </div>

                {/* Article grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {theme.articleKeys.map((key) => {
                    const title = ARTICLE_TITLES[key] ?? key
                    return (
                      <div
                        key={key}
                        className="group flex items-start gap-3 bg-card border border-primary/15 rounded-xl p-4 cursor-default"
                        title="Article coming soon"
                      >
                        <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${colors.dot}`} />
                        <span className="text-text-primary text-sm font-medium leading-snug">{title}</span>
                      </div>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-primary/20 text-center">
          <p className="text-text-secondary mb-6 max-w-xl mx-auto">
            PromptQuorum optimizes your prompts automatically and tests them across 25+ AI models simultaneously.
          </p>
          <Link
            href={navHref('/', lang)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Try PromptQuorum free →
          </Link>
        </div>

        {/* Footer nav */}
        <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-primary/20">
          <Link href={navHref('/', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">← Home</Link>
          <Link href={navHref('/features', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">Features</Link>
          <Link href={navHref('/how-it-works', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">How It Works</Link>
          <Link href={navHref('/blog', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">Blog</Link>
        </div>

      </div>
    </div>
  )
}

export function PromptEngineeringHub() {
  return <PromptEngineeringHubContent />
}
