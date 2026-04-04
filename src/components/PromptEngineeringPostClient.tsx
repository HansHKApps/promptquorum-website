'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'
import { peContent, type PESection } from '@/lib/prompt-engineering/content'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

interface Props {
  slug: string
  initialLang?: Language
}

// Jump-to-section translations
const JUMP_SECTION_LABELS: Record<Language, Record<string, string>> = {
  en: {
    jumpToSection: 'Jump to section',
    corePrompting: 'Core Prompting',
    agentsOrchestration: 'Agents & Orchestration',
    safetyAlignment: 'Safety & Alignment',
    evalsTesting: 'Evals & Testing',
    advancedTechniques: 'Reasoning Techniques',
    metricsProduction: 'Metrics & Production',
  },
  de: {
    jumpToSection: 'Zu Abschnitt springen',
    corePrompting: 'Kern-Prompting',
    agentsOrchestration: 'Agenten & Orchestrierung',
    safetyAlignment: 'Sicherheit & Ausrichtung',
    evalsTesting: 'Bewertungen & Tests',
    advancedTechniques: 'Reasoning-Techniken',
    metricsProduction: 'Metriken & Produktion',
  },
  fr: {
    jumpToSection: 'Aller à la section',
    corePrompting: 'Prompting principal',
    agentsOrchestration: 'Agents & Orchestration',
    safetyAlignment: 'Sécurité & Alignement',
    evalsTesting: 'Évaluations & Tests',
    advancedTechniques: 'Techniques de raisonnement',
    metricsProduction: 'Métriques & Production',
  },
  ja: {
    jumpToSection: 'セクションにジャンプ',
    corePrompting: 'コアプロンプティング',
    agentsOrchestration: 'エージェント & オーケストレーション',
    safetyAlignment: 'セキュリティ & アライメント',
    evalsTesting: '評価 & テスト',
    advancedTechniques: '推論テクニック',
    metricsProduction: 'メトリクス & 本番環境',
  },
  zh: {
    jumpToSection: '跳转到部分',
    corePrompting: '核心提示',
    agentsOrchestration: '代理 & 编排',
    safetyAlignment: '安全 & 对齐',
    evalsTesting: '评估 & 测试',
    advancedTechniques: '推理技术',
    metricsProduction: '指标 & 生产',
  },
}

// Section header translations
const SECTION_HEADER_LABELS: Record<Language, Record<string, string>> = {
  en: {
    keyTakeaways: 'Key Takeaways',
  },
  de: {
    keyTakeaways: 'Wichtigste Erkenntnisse',
  },
  fr: {
    keyTakeaways: 'Points clés',
  },
  ja: {
    keyTakeaways: '重要なポイント',
  },
  zh: {
    keyTakeaways: '关键要点',
  },
}

// Maps article display titles to their URL slugs
const TITLE_TO_SLUG: Record<string, string> = {
  // Fundamentals
  'What Is Prompt Engineering?': 'what-is-prompt-engineering',
  'From GPT-2 to Today: How Prompt Engineering Evolved': 'how-prompt-engineering-evolved',
  'The 5 Building Blocks Every Prompt Needs': '5-building-blocks-every-prompt-needs',
  'AI Hallucinations: Why AI Makes Things Up — and How to Stop Them': 'ai-hallucinations-why-ai-makes-things-up',
  'Faster AI Answers: How to Prompt for Speed': 'faster-ai-answers-how-to-prompt-for-speed',
  'Temperature & Top-P: The Two Dials That Control AI Creativity': 'temperature-and-top-p-control-ai-creativity',
  'Context Windows Explained: Why Your AI Forgets': 'context-windows-explained-why-ai-forgets',
  'Beyond Text: How to Prompt with Images': 'beyond-text-how-to-prompt-with-images',
  'Tokens, Costs & Limits: The Economics of AI Prompting': 'tokens-costs-limits-economics-of-ai-prompting',
  "System Prompt vs. User Prompt: What's the Difference?": 'system-prompt-vs-user-prompt-whats-the-difference',
  'GPT, Claude or Gemini? How to Pick the Right Model': 'gpt-claude-or-gemini-how-to-pick-the-right-model',
  'Prompt Engineering Glossary: 100 Key Terms': 'prompt-engineering-glossary',
  // Frameworks
  'Which Prompt Framework Should You Use?': 'which-prompt-framework-should-you-use',
  'The Single-Step Prompt Method': 'the-single-step-prompt-method',
  'APE Framework': 'ape-framework',
  'CRAFT Framework': 'craft-framework',
  'CO-STAR Framework': 'co-star-framework',
  'SPECS Framework': 'specs-framework',
  'RISEN Framework': 'risen-framework',
  'TRACE Framework': 'trace-framework',
  "Google's Prompting Guide": 'googles-prompting-guide',
  'RTF Framework': 'rtf-framework',
  'Build Your Own Framework': 'build-your-own-prompt-framework',
  'Build Your Own Prompt Framework': 'build-your-own-prompt-framework',
  // Techniques
  'Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?': 'zero-shot-vs-few-shot',
  'Constrained Prompting: How to Set Rules the AI Must Follow': 'constrained-prompting',
  'Chain-of-Thought Prompting: Make AI Show Its Reasoning': 'chain-of-thought-prompting',
  'Persona Prompting: Give Your AI a Role and Watch It Improve': 'persona-prompting',
  'Prompt Chaining: How to Break Big Tasks Into Winning Steps': 'prompt-chaining',
  'Negative Prompting: Tell the AI What NOT to Do': 'negative-prompting',
  'Self-Consistency Prompting: Let the AI Check Its Own Work': 'self-consistency-prompting',
  'Tree of Thought & ReAct: Advanced Reasoning for Hard Problems': 'tree-of-thought-and-react',
  'RAG Explained: How to Ground AI Answers in Real Data': 'rag-explained',
  'Structured Output & JSON Mode: Get AI to Return Usable Data': 'structured-output-and-json-mode',
  // Use Topics
  "Write Better Code with AI: A Developer's Guide": 'write-better-code-with-ai',
  'AI-Powered Research: How to Research Smarter': 'ai-powered-research',
  'SEO Meets AI: How to Prompt for Better Rankings': 'seo-meets-ai',
  'Teaching with AI: Prompts That Work in the Classroom': 'teaching-with-ai',
  'Extract & Summarise: How to Pull Key Facts Fast': 'extract-and-summarise',
  'AI Code Review: Prompts That Catch Bugs': 'ai-code-review',
  'Prompting Across Languages: How to Get Consistent Results': 'prompting-across-languages',
  'Control the Output: JSON, Markdown, Tables and More': 'control-the-output',
  'How to Build Quality Checks Directly Into Your Prompts': 'build-quality-checks',
  'Your Brand Voice, Your AI: How to Maintain Consistent Tone': 'your-brand-voice-ai',
  'Build a Prompt Library That Saves Hours': 'build-a-prompt-library',
}

// Maps bare category names to their hub section anchors
const CATEGORY_ANCHORS: Record<string, string> = {
  'Fundamentals': '/prompt-engineering#fundamentals',
  'Frameworks': '/prompt-engineering#frameworks',
  'Techniques': '/prompt-engineering#techniques',
  'Use Topics': '/prompt-engineering#use-topics',
  'Policy & Compliance': '/prompt-engineering#policy',
}

// Maps external citation names to their URLs
const EXTERNAL_CITATIONS: Record<string, string> = {
  'Brown et al., 2020 – Language Models are Few-Shot Learners': 'https://arxiv.org/abs/2005.14165',
  'Prompt Engineering Guide – promptingguide.ai': 'https://www.promptingguide.ai/',
  'Prompt Engineering – Wikipedia': 'https://en.wikipedia.org/wiki/Prompt_engineering',
  'OpenAI – Best Practices for Prompt Engineering': 'https://platform.openai.com/docs/guides/prompt-engineering',
  'Google Cloud – Prompt Engineering for AI Guide': 'https://cloud.google.com/discover/what-is-prompt-engineering',
  'Prompt engineering as a new 21st century skill – Frontiers': 'https://www.frontiersin.org/articles/10.3389/feduc.2023.1209897/full',
  'McKinsey 2024 State of AI': 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2024',
}

// Render inline link placeholders like [Techniques: Chain-of-Thought Prompting]
// as real Next.js links resolved from the title-to-slug map
// Also handles markdown links: [text](url)
// Injects ?lang= query parameter for internal links when lang is not 'en'
function renderInlineLinks(text: string, lang: Language = 'en') {
  // Split on both markdown links [text](url) and bracketed labels [text]
  const parts = text.split(/(\[[^\]]+\]\([^\)]+\)|\[[^\]]+\])/g)
  return parts.map((part, i) => {
    // Handle markdown links: [text](url)
    const markdownMatch = part.match(/^\[([^\]]+)\]\(([^\)]+)\)$/)
    if (markdownMatch) {
      const [, label, url] = markdownMatch
      // External links: open in new tab with security attributes
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            {label}
          </a>
        )
      }
      // Internal links: use Next.js Link with lang parameter injection
      let finalUrl = url
      if (lang !== 'en' && url.startsWith('/prompt-engineering/') && !url.includes('?lang=')) {
        // Insert ?lang= before anchor fragment (#) if present
        if (url.includes('#')) {
          const [basePath, anchor] = url.split('#')
          finalUrl = `${basePath}?lang=${lang}#${anchor}`
        } else {
          finalUrl = `${url}?lang=${lang}`
        }
      }
      return (
        <Link key={i} href={finalUrl} className="text-primary font-medium hover:underline">
          {label}
        </Link>
      )
    }

    // Handle bracketed labels [text]
    if (part.startsWith('[') && part.endsWith(']')) {
      const label = part.slice(1, -1)

      // Bare category link: [Fundamentals], [Techniques], etc.
      if (CATEGORY_ANCHORS[label]) {
        let href = CATEGORY_ANCHORS[label]
        if (lang !== 'en') {
          const [basePath, anchor] = href.split('#')
          href = `${basePath}?lang=${lang}${anchor ? '#' + anchor : ''}`
        }
        return (
          <Link key={i} href={href} className="text-primary font-medium hover:underline">
            {label}
          </Link>
        )
      }

      // Category-prefixed link: [Fundamentals: Article Title]
      const colonIdx = label.indexOf(': ')
      if (colonIdx !== -1) {
        const category = label.slice(0, colonIdx)
        const title = label.slice(colonIdx + 2)
        const slug = TITLE_TO_SLUG[title]

        if (slug) {
          const href = lang !== 'en' ? `/prompt-engineering/${slug}?lang=${lang}` : `/prompt-engineering/${slug}`
          return (
            <Link key={i} href={href} className="text-primary font-medium hover:underline">
              {title}
            </Link>
          )
        }

        // Fallback: link to the category hub section
        let fallbackHref = CATEGORY_ANCHORS[category] ?? '/prompt-engineering'
        if (lang !== 'en' && !fallbackHref.includes('?lang=')) {
          const [basePath, anchor] = fallbackHref.split('#')
          fallbackHref = `${basePath}?lang=${lang}${anchor ? '#' + anchor : ''}`
        }
        return (
          <Link key={i} href={fallbackHref} className="text-primary font-medium hover:underline">
            {title || label}
          </Link>
        )
      }

      // External citation: [External: Name – Description]
      if (label.startsWith('External: ')) {
        const citationName = label.slice(10) // Remove "External: " prefix
        const url = EXTERNAL_CITATIONS[citationName]

        if (url) {
          return (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              {citationName}
            </a>
          )
        }
        // Fallback if citation not found in mapping
        return <span key={i} className="text-primary font-medium">{citationName}</span>
      }

      // Unknown format — plain styled text
      return <span key={i} className="text-primary font-medium">{label}</span>
    }

    // Handle **bold** markers
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g)
    return (
      <span key={i}>
        {boldParts.map((bp, j) =>
          bp.startsWith('**') && bp.endsWith('**')
            ? <strong key={j} className="text-text-primary font-semibold">{bp.slice(2, -2)}</strong>
            : bp
        )}
      </span>
    )
  })
}

function GlossaryTermCard({ row, lang }: { row: { [key: string]: string }; lang: Language }) {
  const termId = `term-${(row['Term'] || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  return (
    <div id={termId} className="border border-primary/15 rounded-xl p-5 mb-3 hover:border-primary/30 transition-colors">
      {/* Term name */}
      <h3 className="font-bold text-text-primary text-base mb-2">{row['Term']}</h3>

      {/* Answer-first definition */}
      <div className="text-sm text-text-secondary leading-relaxed mb-3">
        {renderInlineLinks(row['What it means'] ?? '', lang)}
      </div>

      {/* Example callout box */}
      {row['Example'] && (
        <div className="bg-primary/5 border border-primary/15 rounded-lg px-4 py-3 text-sm text-text-secondary mb-3">
          <span className="font-semibold text-text-primary">Example: </span>
          <span className="font-mono text-xs">{row['Example']}</span>
        </div>
      )}

      {/* Related terms */}
      {row['Related'] && (
        <p className="text-xs text-text-secondary mb-1">
          <span className="font-medium">Related: </span>
          {renderInlineLinks(row['Related'], lang)}
        </p>
      )}

      {/* Entity relationships */}
      {(row['Part of'] || row['Used with']) && (
        <div className="text-xs text-text-secondary/70 mt-1 mb-1 flex flex-col gap-0.5">
          {row['Part of'] && (
            <p><span className="font-medium text-text-secondary">Part of:</span> {row['Part of']}</p>
          )}
          {row['Used with'] && (
            <p><span className="font-medium text-text-secondary">Used with:</span> {row['Used with']}</p>
          )}
        </div>
      )}

      {/* When to use */}
      {row['When to use'] && (
        <p className="text-xs text-text-secondary mb-1">
          {renderInlineLinks(row['When to use'], lang)}
        </p>
      )}

      {/* 2026 note */}
      {row['2026 note'] && (
        <p className="text-xs text-text-secondary/60 italic mb-1">{row['2026 note']}</p>
      )}

      {/* Sources */}
      <p className="text-xs text-text-secondary/50 mt-2 pt-2 border-t border-primary/10">
        {renderInlineLinks(row['Sources & references'] ?? '', lang)}
      </p>
    </div>
  )
}

function SectionBlock({ section, colors, id, lang, isGlossary }: { section: PESection; colors: { dot: string; badge: string }; id?: string; lang: Language; isGlossary?: boolean }) {
  return (
    <div className="mt-8" id={id}>
      {section.title && !section.isTldr && (
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-10 mb-4">
          {renderInlineLinks(section.title, lang)}
        </h2>
      )}

      {/* TL;DR block */}
      {section.isTldr && section.items && (
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-4 key-takeaways">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{SECTION_HEADER_LABELS[lang].keyTakeaways}</p>
          <ul className="space-y-2">
            {section.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-text-secondary text-sm">
                <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-1.5 ${colors.dot}`} />
                <span>{renderInlineLinks(item, lang)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Blockquote content */}
      {section.blockquote && (
        <blockquote className="border-l-4 border-primary/40 bg-primary/5 pl-5 py-3 my-6 text-text-secondary">
          <p className="italic leading-relaxed">{renderInlineLinks(section.blockquote, lang)}</p>
          {section.blockquoteSource && (
            <footer className="mt-2 text-xs font-semibold text-text-secondary not-italic opacity-75">
              — {renderInlineLinks(section.blockquoteSource, lang)}
            </footer>
          )}
        </blockquote>
      )}

      {/* Regular content paragraphs */}
      {section.content && !section.isTldr && (
        <div className="space-y-4">
          {(Array.isArray(section.content) ? section.content : [section.content]).map((para, i) => (
            <p key={i} className="text-text-secondary leading-relaxed">
              {renderInlineLinks(para, lang)}
            </p>
          ))}
        </div>
      )}

      {/* Bullet list */}
      {!section.isTldr && section.items && (
        <ul className="space-y-3 my-4">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-text-secondary">
              <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${colors.dot}`} />
              <span className="leading-relaxed">{renderInlineLinks(item)}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Numbered list */}
      {section.numberedItems && (
        <ol className="space-y-4 my-4">
          {section.numberedItems.map((item, i) => (
            <li key={i} className="flex gap-4 text-text-secondary">
              <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${colors.dot.replace('bg-', 'bg-').replace('-400', '-500')}`}>
                {i + 1}
              </span>
              <span className="leading-relaxed pt-0.5">{renderInlineLinks(item)}</span>
            </li>
          ))}
        </ol>
      )}

      {/* Glossary: render as rich cards instead of table */}
      {isGlossary && section.rows ? (
        <div className="space-y-0 mt-4">
          {section.rows.map((row, i) => (
            <GlossaryTermCard key={i} row={row} lang={lang} />
          ))}
        </div>
      ) : (
        /* Regular table for non-glossary content */
        section.rows && section.columns && (
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  {section.columns.map((col) => (
                    <th key={col} className="text-left p-3 font-bold text-text-primary bg-primary/5">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, i) => (
                  <tr key={i} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                    {section.columns!.map((col) => (
                      <td key={col} className="p-3 text-text-secondary">
                        {renderInlineLinks(row[col] ?? '—', lang)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}

      {/* Code block */}
      {section.codeBlock && (
        <div className="my-6">
          {section.codeLanguage && (
            <div className="flex items-center gap-2 bg-gray-800 rounded-t-lg px-4 py-2 text-xs text-gray-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="ml-2">{section.codeLanguage}</span>
            </div>
          )}
          <pre className={`bg-gray-900 text-gray-100 text-xs leading-relaxed p-5 overflow-x-auto ${section.codeLanguage ? 'rounded-b-lg' : 'rounded-lg'}`}>
            <code>{section.codeBlock}</code>
          </pre>
        </div>
      )}

      {/* Image with caption */}
      {section.image && (
        <figure className="my-8 flex flex-col items-center">
          <img
            src={section.image}
            alt={section.imageCaption || 'Article visualization'}
            className="w-full max-w-2xl rounded-lg border border-primary/20 shadow-sm"
          />
          {section.imageCaption && (
            <figcaption className="text-sm text-text-secondary italic mt-3 text-center max-w-2xl">
              {section.imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Image placeholder */}
      {section.imagePlaceholder && (
        <figure className="my-8 flex flex-col items-center bg-primary/5 border border-dashed border-primary/30 rounded-lg p-8">
          <div className="text-center">
            <p className="text-primary/60 text-sm font-semibold mb-2">📊 Image Coming Soon</p>
            <p className="text-text-secondary text-sm">{section.imageCaption}</p>
          </div>
        </figure>
      )}

      {/* FAQ */}
      {section.faqs && (
        <div className="space-y-6 mt-4">
          {section.faqs.map((faq, i) => (
            <div key={i} className="border border-primary/15 rounded-xl p-5">
              <h3 className="font-bold text-text-primary mb-2">{faq.q}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">{renderInlineLinks(faq.a, lang)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const POST_UI: Record<string, Record<string, string>> = {
  byLine: {
    en: 'By [Hans Kuepper](/about) · Founder of PromptQuorum, multi-model AI dispatch tool · PromptQuorum',
    de: 'Von [Hans Kuepper](/about) · Gründer von PromptQuorum, Multi-Model-AI-Dispatch-Tool · PromptQuorum',
    fr: 'Par [Hans Kuepper](/about) · Fondateur de PromptQuorum, outil de dispatch multi-modèle · PromptQuorum',
    ja: '[Hans Kuepper](/about) 著 · PromptQuorumの創設者、マルチモデルAIディスパッチツール · PromptQuorum',
    zh: '[Hans Kuepper](/about) 作者 · PromptQuorum创始人，多模型AI调度工具 · PromptQuorum',
  },
  lastUpdated: {
    en: 'Last updated:',
    de: 'Aktualisiert:',
    fr: 'Dernière mise à jour:',
    ja: '最終更新:',
    zh: '最后更新:',
  },
  ctaText: {
    en: 'Apply these techniques across 25+ AI models simultaneously with PromptQuorum.',
    de: 'Wenden Sie diese Techniken gleichzeitig mit 25+ KI-Modellen in PromptQuorum an.',
    fr: 'Appliquez ces techniques simultanément sur plus de 25 modèles d\'IA avec PromptQuorum.',
    ja: 'これらのテクニックをPromptQuorumで25以上のAIモデルに同時に適用しましょう。',
    zh: '使用PromptQuorum将这些技术同时应用于25+个AI模型。',
  },
  ctaButton: {
    en: 'Try PromptQuorum free →',
    de: 'PromptQuorum kostenlos testen →',
    fr: 'Essayer PromptQuorum gratuitement →',
    ja: 'PromptQuorumを無料で試す →',
    zh: '免费试用PromptQuorum →',
  },
  backLink: {
    en: '← Back to Prompt Engineering',
    de: '← Zurück zu Prompt Engineering',
    fr: '← Retour au Prompt Engineering',
    ja: '← プロンプトエンジニアリングに戻る',
    zh: '← 返回提示词工程',
  },
  breadcrumbHome: {
    en: 'Home', de: 'Startseite', fr: 'Accueil', ja: 'ホーム', zh: '主页',
  },
  breadcrumbHub: {
    en: 'Prompt Engineering',
    de: 'Prompt Engineering',
    fr: 'Prompt Engineering',
    ja: 'プロンプトエンジニアリング',
    zh: '提示词工程',
  },
}

// Map language codes to their locale strings for date formatting
const LANGUAGE_TO_LOCALE: Record<string, string> = {
  en: 'en-US',
  de: 'de-DE',
  fr: 'fr-FR',
  ja: 'ja-JP',
  zh: 'zh-CN',
}

const THEME_COLORS: Record<string, { dot: string; badge: string; label: string }> = {
  Fundamentals: { dot: 'bg-blue-400', badge: 'bg-blue-50 text-blue-700 border border-blue-200', label: 'Fundamentals' },
  Frameworks:   { dot: 'bg-purple-400', badge: 'bg-purple-50 text-purple-700 border border-purple-200', label: 'Frameworks' },
  Techniques:   { dot: 'bg-emerald-400', badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200', label: 'Techniques' },
  'Use Topics':         { dot: 'bg-orange-400', badge: 'bg-orange-50 text-orange-700 border border-orange-200', label: 'Use Topics' },
  'Policy & Compliance': { dot: 'bg-rose-400',   badge: 'bg-rose-50 text-rose-700 border border-rose-200',     label: 'Policy & Compliance' },
}

function PromptEngineeringPostContent({ slug, initialLang }: Props) {
  const clientLang = useLang() as Language
  // Use server-resolved initialLang for first render (SEO-correct HTML),
  // then switch to client-side lang once the hook hydrates past 'en' default.
  const lang: Language = (clientLang !== 'en' ? clientLang : (initialLang ?? clientLang))
  const key = PE_SLUG_TO_KEY[slug]
  const articleData = key ? peContent[key] : null
  const [searchQuery, setSearchQuery] = useState('')

  if (!articleData) {
    return <div className="min-h-screen bg-surface pt-32 flex items-center justify-center"><p className="text-text-secondary">Article not found.</p></div>
  }

  // Fall back to English if translation has empty sections
  const hasTranslation = articleData[lang] && Object.keys(articleData[lang].sections).length > 0
  const article = hasTranslation ? articleData[lang] : articleData['en']
  const colors = THEME_COLORS[article.theme] ?? THEME_COLORS['Fundamentals']

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6" key={`${slug}-${lang}`}>
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb + language */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm text-text-secondary flex-wrap">
            <a href="/" className="hover:text-primary">{POST_UI.breadcrumbHome[lang] ?? 'Home'}</a>
            <span>/</span>
            <a href="/prompt-engineering" className="hover:text-primary">{POST_UI.breadcrumbHub[lang] ?? 'Prompt Engineering'}</a>
            <span>/</span>
            <span className="text-text-primary font-medium">{article.title}</span>
          </div>
          <LanguageSwitcher />
        </div>

        {/* Article header */}
        <div className="mb-10">
          <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full mb-4 ${colors.badge}`}>
            {article.theme}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <time dateTime={article.dateModified ?? article.publishDate}>
              {POST_UI.lastUpdated[lang] ?? POST_UI.lastUpdated['en']} {new Date((article.dateModified ?? article.publishDate) + 'T00:00:00Z').toLocaleDateString(LANGUAGE_TO_LOCALE[lang] ?? 'en-US', { month: 'long', year: 'numeric' })}
            </time>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span>{renderInlineLinks(POST_UI.byLine[lang] ?? POST_UI.byLine['en'], lang)}</span>
          </div>
        </div>

        {/* Article intro paragraph */}
        {article.intro && (
          <p className="text-lg text-text-secondary leading-relaxed mb-6 max-w-2xl article-intro">
            {renderInlineLinks(article.intro, lang)}
          </p>
        )}

        {/* Glossary search */}
        {slug === 'prompt-engineering-glossary' && article.sections && (
          <div className="mb-8">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search terms..."
              className="w-full max-w-md px-4 py-2 border border-primary/30 rounded-lg text-sm bg-white text-text-primary placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            {searchQuery.length >= 2 && (
              <p className="mt-2 text-xs text-text-secondary">
                {(() => {
                  const query = searchQuery.trim().toLowerCase()
                  const totalMatches = Object.values(article.sections)
                    .reduce((sum, section) => {
                      if (!section.rows) return sum
                      return sum + section.rows.filter(row =>
                        row['Term']?.toLowerCase?.().includes(query)
                      ).length
                    }, 0)
                  return totalMatches === 0
                    ? 'No results found.'
                    : `${totalMatches} result${totalMatches === 1 ? '' : 's'} found.`
                })()}
              </p>
            )}
          </div>
        )}

        {/* Jump navigation for glossary */}
        {slug === 'prompt-engineering-glossary' && article.sections.intro && (() => {
          // Build A-Z index: letter → first term's anchor in this language
          const alphaIndex: Record<string, string> = {}
          Object.values(article.sections).forEach(section => {
            if (!section.rows) return
            section.rows.forEach(row => {
              const term = row['Term'] || ''
              const letter = term.charAt(0).toUpperCase()
              if (/[A-Z]/.test(letter) && !alphaIndex[letter]) {
                alphaIndex[letter] = `term-${term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
              }
            })
          })
          const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
          return (
            <>
              <nav className="mb-4 bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{JUMP_SECTION_LABELS[lang].jumpToSection}</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: '#core-prompting', key: 'corePrompting' },
                    { id: '#agents-orchestration', key: 'agentsOrchestration' },
                    { id: '#safety-alignment', key: 'safetyAlignment' },
                    { id: '#evals-testing', key: 'evalsTesting' },
                    { id: '#advanced-techniques', key: 'advancedTechniques' },
                    { id: '#metrics-production', key: 'metricsProduction' },
                  ].map((link) => (
                    <a
                      key={link.id}
                      href={link.id}
                      className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      {JUMP_SECTION_LABELS[lang][link.key as keyof typeof JUMP_SECTION_LABELS.en]}
                    </a>
                  ))}
                </div>
              </nav>
              <nav className="mb-8 bg-primary/5 border border-primary/20 rounded-lg px-4 py-3" aria-label="A-Z glossary index">
                <div className="flex flex-wrap gap-1">
                  {ALPHABET.map(letter => {
                    const anchor = alphaIndex[letter]
                    return anchor ? (
                      <a
                        key={letter}
                        href={`#${anchor}`}
                        className="w-7 h-7 flex items-center justify-center text-xs font-bold text-primary hover:bg-primary/10 rounded transition-colors"
                      >
                        {letter}
                      </a>
                    ) : (
                      <span
                        key={letter}
                        className="w-7 h-7 flex items-center justify-center text-xs font-bold text-text-secondary/30 cursor-default"
                      >
                        {letter}
                      </span>
                    )
                  })}
                </div>
              </nav>
            </>
          )
        })()}

        {/* Table of Contents */}
        {(article as any).toc && (
          <nav className="mb-8 bg-primary/5 border border-primary/20 rounded-lg p-5" aria-label="Table of contents">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Contents</p>
            <ol className="space-y-1">
              {((article as any).toc as { label: string; anchor: string }[]).map((item) => (
                <li key={item.anchor}>
                  <a href={`#${item.anchor}`} className="text-sm text-primary hover:text-primary/80 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Sections */}
        <article className="key-takeaways-container">
          {(() => {
            const query = searchQuery.trim().toLowerCase()
            const isSearching = query.length >= 2

            // Filter sections if searching (search only in Term column)
            const sectionsToRender = Object.entries(article.sections)
              .map(([key, section]) => {
                if (!isSearching || !section.rows) {
                  return [key, section] as const
                }
                const filteredRows = section.rows.filter(row =>
                  row['Term']?.toLowerCase?.().includes(query)
                )
                return [key, { ...section, rows: filteredRows }] as const
              })
              .filter(([, section]) => !isSearching || !section.rows || section.rows.length > 0)

            return sectionsToRender.map(([key, section]) => {
              // Glossary explicit IDs take precedence; all other titled sections get auto-generated IDs
              const glossaryIdMap: Record<string, string> = {
                'corePrompting': 'core-prompting',
                'agentsOrchestration': 'agents-orchestration',
                'safetyAlignment': 'safety-alignment',
                'evalsTesting': 'evals-testing',
                'advancedTechniques': 'advanced-techniques',
                'metricsProduction': 'metrics-production',
              }
              const sectionId = glossaryIdMap[key]
                ?? (section.title ? section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : undefined)
              return (
                <SectionBlock key={key} section={section} colors={colors} id={sectionId} lang={lang} isGlossary={slug === 'prompt-engineering-glossary'} />
              )
            })
          })()}
        </article>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-primary/20 text-center">
          <p className="text-text-secondary mb-6">
            {POST_UI.ctaText[lang] ?? POST_UI.ctaText['en']}
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {POST_UI.ctaButton[lang] ?? POST_UI.ctaButton['en']}
          </a>
        </div>

        <p className="text-center mt-8">
          <a href="/prompt-engineering" className="text-primary hover:text-primary/80 text-sm">
            {POST_UI.backLink[lang] ?? POST_UI.backLink['en']}
          </a>
        </p>

      </div>
    </div>
  )
}

export function PromptEngineeringPostClient(props: Props) {
  return <PromptEngineeringPostContent {...props} />
}

