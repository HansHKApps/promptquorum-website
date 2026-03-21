'use client'

import Link from 'next/link'
import { themes, type PETheme } from '@/lib/prompt-engineering/themes'
import { useLang } from '@/hooks/useLang'

function navHref(path: string, lang: string) {
  return lang === 'en' ? path : `${path}?lang=${lang}`
}

const THEME_LABELS: Record<string, Record<string, string>> = {
  fundamentals: {
    en: 'Fundamentals: What Do You Actually Need to Know?',
    de: 'Grundlagen: Was müssen Sie wirklich wissen?',
    fr: 'Fondamentaux : Que faut-il vraiment savoir ?',
    ja: '基礎：本当に必要な知識とは？',
    zh: '基础知识：你真正需要了解什么？',
  },
  frameworks: {
    en: 'Frameworks: Which Template Gets the Best Results?',
    de: 'Frameworks: Welches Template liefert die besten Ergebnisse?',
    fr: 'Frameworks : Quel modèle donne les meilleurs résultats ?',
    ja: 'フレームワーク：最高の結果を出すテンプレートは？',
    zh: '框架：哪个模板效果最好？',
  },
  techniques: {
    en: 'Techniques: What Separates Good Prompts from Great Ones?',
    de: 'Techniken: Was unterscheidet gute von großartigen Prompts?',
    fr: 'Techniques : Qu\'est-ce qui distingue les bons prompts des excellents ?',
    ja: 'テクニック：良いプロンプトと優れたプロンプトの違いは？',
    zh: '技术：好提示词与优秀提示词的区别是什么？',
  },
  'use-topics': {
    en: 'Use Topics: How Do You Prompt for Your Specific Job?',
    de: 'Anwendungsthemen: Wie prompten Sie für Ihren Job?',
    fr: 'Sujets d\'usage : Comment prompter pour votre métier ?',
    ja: '活用テーマ：あなたの仕事に合ったプロンプトとは？',
    zh: '应用主题：如何针对你的工作提示？',
  },
}

// Article titles displayed on the hub — English only for now
// These will be replaced with translated titles once article content is added
const ARTICLE_TITLES: Record<string, string> = {
  // Fundamentals
  'what-is-prompt-engineering': 'What Is Prompt Engineering?',
  'how-prompt-engineering-evolved': 'From GPT-2 to Today: How Prompt Engineering Evolved',
  '5-building-blocks-every-prompt-needs': 'The 5 Building Blocks Every Prompt Needs',
  'ai-hallucinations-why-ai-makes-things-up': 'AI Hallucinations: Why AI Makes Things Up — and How to Stop Them',
  'faster-ai-answers-how-to-prompt-for-speed': 'Faster AI Answers: How to Prompt for Speed',
  'temperature-and-top-p-control-ai-creativity': 'Temperature & Top-P: The Two Dials That Control AI Creativity',
  'context-windows-explained-why-ai-forgets': 'Context Windows Explained: Why Your AI Forgets',
  'beyond-text-how-to-prompt-with-images': 'Beyond Text: How to Prompt with Images',
  'tokens-costs-limits-economics-of-ai-prompting': 'Tokens, Costs & Limits: The Economics of AI Prompting',
  'system-prompt-vs-user-prompt-whats-the-difference': 'System Prompt vs. User Prompt: What\'s the Difference?',
  'gpt-claude-or-gemini-how-to-pick-the-right-model': 'GPT, Claude or Gemini? How to Pick the Right Model',

  // Frameworks
  'which-prompt-framework-should-you-use': 'Which Prompt Framework Should You Use?',
  'the-single-step-prompt-method': 'The Single-Step Prompt Method',
  'ape-framework': 'APE Framework',
  'craft-framework': 'CRAFT Framework',
  'co-star-framework': 'CO-STAR Framework',
  'specs-framework': 'SPECS Framework',
  'risen-framework': 'RISEN Framework',
  'trace-framework': 'TRACE Framework',
  'googles-prompting-guide': "Google's Prompting Guide",
  'rtf-framework': 'RTF Framework',
  'build-your-own-prompt-framework': 'Build Your Own Framework',

  // Techniques
  'zero-shot-vs-few-shot': 'Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?',
  'constrained-prompting': 'Constrained Prompting: How to Set Rules the AI Must Follow',
  'chain-of-thought-prompting': 'Chain-of-Thought Prompting: Make AI Show Its Reasoning',
  'persona-prompting': 'Persona Prompting: Give Your AI a Role and Watch It Improve',
  'prompt-chaining': 'Prompt Chaining: How to Break Big Tasks Into Winning Steps',
  'negative-prompting': 'Negative Prompting: Tell the AI What NOT to Do',
  'self-consistency-prompting': 'Self-Consistency Prompting: Let the AI Check Its Own Work',
  'tree-of-thought-and-react': 'Tree of Thought & ReAct: Advanced Reasoning for Hard Problems',
  'rag-explained': 'RAG Explained: How to Ground AI Answers in Real Data',
  'structured-output-and-json-mode': 'Structured Output & JSON Mode: Get AI to Return Usable Data',

  // Use Topics — Use Cases by Vertical
  'write-better-code-with-ai': 'Write Better Code with AI: A Developer\'s Guide',
  'ai-powered-research': 'AI-Powered Research: How to Research Smarter',
  'seo-meets-ai': 'SEO Meets AI: How to Prompt for Better Rankings',
  'teaching-with-ai': 'Teaching with AI: Prompts That Work in the Classroom',
  'extract-and-summarise': 'Extract & Summarise: How to Pull Key Facts Fast',
  'ai-code-review': 'AI Code Review: Prompts That Catch Bugs',
  'prompting-across-languages': 'Prompting Across Languages: How to Get Consistent Results',
  // Use Topics — Output Engineering
  'control-the-output': 'Control the Output: JSON, Markdown, Tables and More',
  'build-quality-checks': 'How to Build Quality Checks Directly Into Your Prompts',
  'your-brand-voice-ai': 'Your Brand Voice, Your AI: How to Maintain Consistent Tone',
  'build-a-prompt-library': 'Build a Prompt Library That Saves Hours',
}

const THEME_COLORS: Record<string, { badge: string; dot: string }> = {
  fundamentals: { badge: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-400' },
  frameworks:   { badge: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-400' },
  techniques:   { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-400' },
  'use-topics': { badge: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-400' },
}

function ArticleCard({ articleKey, dot, lang }: { articleKey: string; dot: string; lang: string }) {
  const title = ARTICLE_TITLES[articleKey] ?? articleKey
  const href = navHref(`/prompt-engineering/${articleKey}`, lang)

  return (
    <Link
      href={href}
      className="flex items-start gap-3 bg-card border border-primary/15 rounded-xl p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
    >
      <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${dot}`} />
      <span className="text-text-primary text-sm font-medium leading-snug group-hover:text-primary transition-colors">{title}</span>
    </Link>
  )
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

            const articleKeys = theme.articleKeys ?? theme.subSections?.flatMap(s => s.articleKeys) ?? []

            return (
              <section key={theme.id} id={theme.id}>
                {/* Theme header — label shown once as h2, no badge */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-text-primary mb-2">{label}</h2>
                  <p className="text-text-secondary leading-relaxed max-w-2xl">{theme.description}</p>
                </div>

                {/* Flat article grid (most themes) */}
                {theme.articleKeys && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {theme.articleKeys.map((key) => (
                      <ArticleCard key={key} articleKey={key} dot={colors.dot} lang={lang} />
                    ))}
                  </div>
                )}

                {/* Sub-section article grids (Use Topics) */}
                {theme.subSections && (
                  <div className="space-y-8">
                    {theme.subSections.map((sub) => (
                      <div key={sub.title}>
                        <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 px-1 ${colors.badge.split(' ').find(c => c.startsWith('text-')) ?? 'text-primary'}`}>
                          {sub.title}
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {sub.articleKeys.map((key) => (
                            <ArticleCard key={key} articleKey={key} dot={colors.dot} lang={lang} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
