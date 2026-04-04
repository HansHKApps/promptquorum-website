'use client'

import Link from 'next/link'
import { llmThemes, type LLMTheme } from '@/lib/local-llms/themes'
import { llmContent } from '@/lib/local-llms/content'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'

function navHref(path: string, lang: string) {
  return lang === 'en' ? path : `${path}?lang=${lang}`
}

const HUB_HERO_TITLE: Record<string, string> = {
  en: 'The complete guide to running AI models locally in 2026.',
  de: 'Der vollständige Leitfaden zum lokalen Betrieb von KI-Modellen im Jahr 2026.',
  fr: 'Le guide complet pour exécuter des modèles IA localement en 2026.',
  ja: '2026年にAIモデルをローカルで実行するための完全ガイド。',
  zh: '2026年本地运行AI模型的完整指南。',
}

const HUB_HERO_DESC: Record<string, string> = {
  en: 'Local LLMs give you full privacy, zero API costs, and offline capability. These guides cover everything from first installation to 70B model fine-tuning, hardware selection, and enterprise deployment — with exact commands, VRAM numbers, and benchmark data.',
  de: 'Lokale LLMs bieten vollständige Privatsphäre, keine API-Kosten und Offline-Fähigkeit. Diese Leitfäden decken alles ab — von der ersten Installation bis zum Fine-Tuning von 70B-Modellen, Hardware-Auswahl und Enterprise-Deployment.',
  fr: 'Les LLMs locaux offrent une confidentialité totale, zéro coût API et une capacité hors ligne. Ces guides couvrent tout, de la première installation au fine-tuning de modèles 70B, la sélection matérielle et le déploiement entreprise.',
  ja: 'ローカルLLMは完全なプライバシー、APIコストゼロ、オフライン機能を提供します。これらのガイドは、最初のインストールから70BモデルのファインチューニングW、ハードウェア選択、エンタープライズデプロイまでをカバーします。',
  zh: '本地LLM提供完整隐私、零API成本和离线能力。这些指南涵盖从首次安装到70B模型微调、硬件选择和企业部署的一切内容。',
}

const HUB_CTA_TEXT: Record<string, string> = {
  en: 'PromptQuorum connects to your local LLM (Ollama, LM Studio, Jan AI) and dispatches your prompt to 25+ cloud models simultaneously — compare local vs cloud results in one view.',
  de: 'PromptQuorum verbindet sich mit Ihrem lokalen LLM (Ollama, LM Studio, Jan AI) und sendet Ihren Prompt gleichzeitig an 25+ Cloud-Modelle — lokale vs. Cloud-Ergebnisse in einer Ansicht.',
  fr: 'PromptQuorum se connecte à votre LLM local (Ollama, LM Studio, Jan AI) et envoie votre prompt simultanément à plus de 25 modèles cloud — comparez les résultats locaux vs cloud en une vue.',
  ja: 'PromptQuorumはあなたのローカルLLM（Ollama、LM Studio、Jan AI）に接続し、プロンプトを25以上のクラウドモデルに同時に送信します。ローカルとクラウドの結果を一画面で比較できます。',
  zh: 'PromptQuorum连接到您的本地LLM（Ollama、LM Studio、Jan AI），并同时将提示词发送给25+个云模型——在一个视图中比较本地与云端结果。',
}

const HUB_CTA_BUTTON: Record<string, string> = {
  en: 'Try PromptQuorum free →',
  de: 'PromptQuorum kostenlos testen →',
  fr: 'Essayer PromptQuorum gratuitement →',
  ja: 'PromptQuorumを無料で試す →',
  zh: '免费试用PromptQuorum →',
}

const HUB_NAV_HOME: Record<string, string> = {
  en: '← Home', de: '← Startseite', fr: '← Accueil', ja: '← ホーム', zh: '← 主页',
}

const THEME_LABELS: Record<string, Record<string, string>> = {
  'getting-started': {
    en: 'Getting Started: How Do You Run Your First Local LLM?',
    de: 'Erste Schritte: Wie starten Sie Ihr erstes lokales LLM?',
    fr: 'Premiers pas : Comment exécuter votre premier LLM local ?',
    ja: 'はじめに：最初のローカルLLMをどう実行するか？',
    zh: '入门：如何运行您的第一个本地LLM？',
  },
  'best-models': {
    en: 'Best Models 2026: Which Local LLM Should You Actually Use?',
    de: 'Beste Modelle 2026: Welches lokale LLM sollten Sie wirklich verwenden?',
    fr: 'Meilleurs modèles 2026 : Quel LLM local devriez-vous vraiment utiliser ?',
    ja: '2026年最良モデル：実際にどのローカルLLMを使うべきか？',
    zh: '2026年最佳模型：您实际上应该使用哪个本地LLM？',
  },
  'tools-interfaces': {
    en: 'Tools & Interfaces: Which Software Gets You Running Fastest?',
    de: 'Tools & Interfaces: Welche Software bringt Sie am schnellsten zum Start?',
    fr: 'Outils et interfaces : Quel logiciel vous fait démarrer le plus vite ?',
    ja: 'ツールとインターフェース：どのソフトウェアが最も速く起動できるか？',
    zh: '工具与界面：哪款软件让您启动最快？',
  },
  'hardware-performance': {
    en: 'Hardware & Performance: What Do You Actually Need to Run Local LLMs?',
    de: 'Hardware & Leistung: Was brauchen Sie wirklich für lokale LLMs?',
    fr: 'Matériel et performances : De quoi avez-vous vraiment besoin pour les LLMs locaux ?',
    ja: 'ハードウェアとパフォーマンス：ローカルLLMに本当に必要なものは？',
    zh: '硬件与性能：运行本地LLM您真正需要什么？',
  },
  'advanced-techniques': {
    en: 'Advanced Techniques: How Do You Go Beyond Basic Chat?',
    de: 'Fortgeschrittene Techniken: Wie gehen Sie über einfachen Chat hinaus?',
    fr: 'Techniques avancées : Comment aller au-delà du chat de base ?',
    ja: '高度なテクニック：基本的なチャット以上のことをどうするか？',
    zh: '高级技术：如何超越基本聊天？',
  },
  enterprise: {
    en: 'Enterprise: How Do Organizations Deploy Local LLMs at Scale?',
    de: 'Enterprise: Wie setzen Organisationen lokale LLMs im großen Maßstab ein?',
    fr: 'Entreprise : Comment les organisations déploient-elles des LLMs locaux à grande échelle ?',
    ja: 'エンタープライズ：組織はローカルLLMをどのようにスケールデプロイするか？',
    zh: '企业：组织如何大规模部署本地LLM？',
  },
}

const THEME_COLORS: Record<string, { badge: string; dot: string }> = {
  'getting-started':    { badge: 'bg-blue-50 text-blue-700 border-blue-200',    dot: 'bg-blue-400' },
  'best-models':        { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-400' },
  'tools-interfaces':   { badge: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-400' },
  'hardware-performance': { badge: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-400' },
  'advanced-techniques': { badge: 'bg-rose-50 text-rose-700 border-rose-200',   dot: 'bg-rose-400' },
  enterprise:           { badge: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-400' },
}

// Acronyms that must stay fully uppercase in slug-to-title fallbacks
const SLUG_ACRONYMS: Record<string, string> = {
  llms: 'LLMs',
  llm: 'LLM',
  ai: 'AI',
  api: 'API',
  gpu: 'GPU',
  cpu: 'CPU',
  vram: 'VRAM',
  ram: 'RAM',
  rag: 'RAG',
  lora: 'LoRA',
  vllm: 'vLLM',
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => SLUG_ACRONYMS[word.toLowerCase()] ?? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

// Returns the article title from content, or a readable fallback from the slug
function getArticleTitle(articleKey: string, lang: Language): string {
  const contentKey = LLM_SLUG_TO_KEY[articleKey]
  if (contentKey && llmContent[contentKey]?.[lang]) return llmContent[contentKey][lang].title
  if (contentKey && llmContent[contentKey]?.en)     return llmContent[contentKey].en.title
  return slugToTitle(articleKey)
}

function ArticleCard({ articleKey, dot, lang }: { articleKey: string; dot: string; lang: Language }) {
  const title = getArticleTitle(articleKey, lang)
  const href = navHref(`/local-llms/${articleKey}`, lang)
  const hasContent = !!(LLM_SLUG_TO_KEY[articleKey] && llmContent[LLM_SLUG_TO_KEY[articleKey]])

  return (
    <Link
      href={href}
      className="flex items-start gap-3 bg-card border border-primary/15 rounded-xl p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
    >
      <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${dot}`} />
      <span className="text-text-primary text-sm font-medium leading-snug group-hover:text-primary transition-colors flex-1">
        {title}
        {!hasContent && (
          <span className="ml-2 text-xs font-normal text-text-muted opacity-60">· soon</span>
        )}
      </span>
    </Link>
  )
}

function ThemeSection({ theme, lang }: { theme: LLMTheme; lang: Language }) {
  const colors = THEME_COLORS[theme.id] ?? { badge: 'bg-gray-50 text-gray-700 border-gray-200', dot: 'bg-gray-400' }
  const label = THEME_LABELS[theme.id]?.[lang] ?? THEME_LABELS[theme.id]?.['en'] ?? theme.title

  return (
    <section id={theme.id} className="mb-16">
      <div className="flex items-center gap-3 mb-2">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}>
          {theme.title}
        </span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">{label}</h2>
      <p className="text-text-secondary text-sm mb-6 max-w-2xl">{theme.description}</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {theme.articleKeys.map(key => (
          <ArticleCard key={key} articleKey={key} dot={colors.dot} lang={lang} />
        ))}
      </div>
    </section>
  )
}

function LocalLLMsHubContent({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  const lang = useLang(initialLang)

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="py-16 border-b border-primary/20 mb-16">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Local LLMs</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            {HUB_HERO_TITLE[lang] ?? HUB_HERO_TITLE['en']}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-10">
            {HUB_HERO_DESC[lang] ?? HUB_HERO_DESC['en']}
          </p>

          {/* Quick-nav pills */}
          <div className="flex flex-wrap gap-2">
            {llmThemes.map(theme => {
              const colors = THEME_COLORS[theme.id] ?? { badge: 'bg-gray-50 text-gray-700 border-gray-200', dot: '' }
              return (
                <a
                  key={theme.id}
                  href={`#${theme.id}`}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-opacity hover:opacity-80 ${colors.badge}`}
                >
                  {theme.title}
                </a>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mb-16 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-text-secondary flex-1">
            {HUB_CTA_TEXT[lang] ?? HUB_CTA_TEXT['en']}
          </p>
          <Link
            href={navHref('/', lang)}
            className="flex-shrink-0 inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {HUB_CTA_BUTTON[lang] ?? HUB_CTA_BUTTON['en']}
          </Link>
        </div>

        {/* Theme sections */}
        {llmThemes.map(theme => (
          <ThemeSection key={theme.id} theme={theme} lang={lang} />
        ))}

        {/* Back nav */}
        <div className="pt-8 border-t border-primary/20">
          <Link href={navHref('/', lang)} className="text-sm text-text-secondary hover:text-primary transition-colors">
            {HUB_NAV_HOME[lang] ?? HUB_NAV_HOME['en']}
          </Link>
        </div>

      </div>
    </div>
  )
}

export function LocalLLMsHub({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  return <LocalLLMsHubContent initialLang={initialLang} />
}
