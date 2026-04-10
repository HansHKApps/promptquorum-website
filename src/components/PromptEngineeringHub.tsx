'use client'

import Link from 'next/link'
import { themes, type PETheme } from '@/lib/prompt-engineering/themes'
import { peContent } from '@/lib/prompt-engineering/content'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'

function navHref(path: string, lang: string) {
  return lang === 'en' ? path : `${path}?lang=${lang}`
}

const HUB_HERO_TITLE: Record<string, string> = {
  en: 'The complete guide to writing better AI prompts.',
  de: 'Der vollständige Leitfaden für bessere KI-Prompts.',
  fr: 'Le guide complet pour écrire de meilleurs prompts IA.',
  ja: 'より良いAIプロンプトを書くための完全ガイド。',
  zh: '编写更好AI提示词的完整指南。',
}

const HUB_HERO_DESC: Record<string, string> = {
  en: 'Prompt engineering determines whether an AI model gives you a useful answer or a vague one. These guides cover everything from core concepts to advanced techniques and domain-specific templates.',
  de: 'Prompt Engineering entscheidet, ob ein KI-Modell eine nützliche oder eine vage Antwort liefert. Diese Leitfäden decken alles ab — von Grundkonzepten bis zu fortgeschrittenen Techniken und domänenspezifischen Templates.',
  fr: 'Le prompt engineering détermine si un modèle d\'IA vous donne une réponse utile ou vague. Ces guides couvrent tout, des concepts fondamentaux aux techniques avancées et aux templates spécifiques à chaque domaine.',
  ja: 'プロンプトエンジニアリングは、AIモデルが有用な回答を返すか曖昧な回答を返すかを決定します。これらのガイドは、基本概念から高度なテクニック、ドメイン固有のテンプレートまですべてをカバーしています。',
  zh: '提示词工程决定了AI模型是给出有用答案还是模糊答案。这些指南涵盖从核心概念到高级技术和特定领域模板的一切内容。',
}

const HUB_CTA_TEXT: Record<string, string> = {
  en: 'PromptQuorum optimizes your prompts automatically and tests them across 25+ AI models simultaneously.',
  de: 'PromptQuorum optimiert Ihre Prompts automatisch und testet sie gleichzeitig mit 25+ KI-Modellen.',
  fr: 'PromptQuorum optimise vos prompts automatiquement et les teste simultanément sur plus de 25 modèles d\'IA.',
  ja: 'PromptQuorumはプロンプトを自動的に最適化し、25以上のAIモデルで同時にテストします。',
  zh: 'PromptQuorum自动优化您的提示词，并同时在25+个AI模型中进行测试。',
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
const HUB_NAV_FEATURES: Record<string, string> = {
  en: 'Features', de: 'Funktionen', fr: 'Fonctionnalités', ja: '機能', zh: '功能',
}
const HUB_NAV_HOW: Record<string, string> = {
  en: 'How It Works', de: 'So funktioniert es', fr: 'Comment ça marche', ja: '仕組み', zh: '工作原理',
}
const HUB_NAV_BLOG: Record<string, string> = {
  en: 'Blog', de: 'Blog', fr: 'Blog', ja: 'ブログ', zh: '博客',
}

const THEME_DESCRIPTIONS: Record<string, Record<string, string>> = {
  fundamentals: {
    en: 'Core concepts every prompt engineer needs to understand — how LLMs work, what tokens are, and why prompt structure determines output quality.',
    de: 'Grundkonzepte, die jeder Prompt Engineer verstehen muss — wie LLMs funktionieren, was Tokens sind und warum die Prompt-Struktur die Ausgabequalität bestimmt.',
    fr: 'Concepts fondamentaux que tout prompt engineer doit comprendre — comment fonctionnent les LLMs, ce que sont les tokens et pourquoi la structure du prompt détermine la qualité de la sortie.',
    ja: 'すべてのプロンプトエンジニアが理解すべき基本概念 — LLMの仕組み、トークンとは何か、プロンプトの構造が出力品質を決定する理由。',
    zh: '每位提示词工程师需要理解的核心概念——LLM的工作原理、词元是什么，以及为什么提示词结构决定输出质量。',
  },
  frameworks: {
    en: 'Structured templates for building reliable, repeatable prompts across different tasks — marketing, coding, research, and more.',
    de: 'Strukturierte Vorlagen für zuverlässige, wiederholbare Prompts für verschiedene Aufgaben — Marketing, Coding, Recherche und mehr.',
    fr: 'Modèles structurés pour construire des prompts fiables et reproductibles pour différentes tâches — marketing, code, recherche et plus encore.',
    ja: 'マーケティング、コーディング、調査などさまざまなタスクで信頼性が高く再現可能なプロンプトを構築するための構造化テンプレート。',
    zh: '用于构建可靠、可重复提示词的结构化模板，适用于营销、编程、研究等不同任务。',
  },
  techniques: {
    en: 'Proven prompting techniques that improve accuracy, reduce errors, and produce more useful AI outputs for any task.',
    de: 'Bewährte Prompting-Techniken, die die Genauigkeit verbessern, Fehler reduzieren und nützlichere KI-Ausgaben für jede Aufgabe liefern.',
    fr: 'Techniques de prompting éprouvées qui améliorent la précision, réduisent les erreurs et produisent des sorties IA plus utiles pour n\'importe quelle tâche.',
    ja: '精度を向上させ、エラーを削減し、あらゆるタスクでより有用なAI出力を生成することが実証されたプロンプトテクニック。',
    zh: '经过验证的提示技术，可提高准确性、减少错误，为任何任务产生更有用的AI输出。',
  },
  'use-topics': {
    en: 'Practical prompt engineering guides for specific domains and output types.',
    de: 'Praktische Prompt Engineering Leitfäden für spezifische Domänen und Ausgabetypen.',
    fr: 'Guides pratiques de prompt engineering pour des domaines et types de sortie spécifiques.',
    ja: '特定のドメインと出力タイプ向けの実践的なプロンプトエンジニアリングガイド。',
    zh: '面向特定领域和输出类型的实用提示词工程指南。',
  },
  policy: {
    en: 'How AI regulation, data residency law, and geopolitical competition affect organizations deploying AI.',
    de: 'Wie KI-Regulierung, Datenspeichergesetze und geopolitischer Wettbewerb Organisationen beim KI-Einsatz betreffen.',
    fr: 'Comment la régulation IA, les lois sur la résidence des données et la concurrence géopolitique affectent les organisations.',
    ja: 'AI規制、データ保管法、地政学的競争が、AIを展開する組織に与える影響。',
    zh: 'AI法规、数据驻留法律和地缘政治竞争如何影响部署AI的组织。',
  },
  'tools-platforms': {
    en: 'Evaluate and compare the best prompt engineering tools, platforms, and IDEs for individual and team workflows.',
    de: 'Bewerten und vergleichen Sie die besten Prompt Engineering Tools, Plattformen und IDEs für individuelle und Team-Workflows.',
    fr: 'Évaluez et comparez les meilleurs outils, plateformes et IDEs de prompt engineering pour des flux de travail individuels et d\'équipe.',
    ja: '個人とチームのワークフロー向けの最高のプロンプトエンジニアリングツール、プラットフォーム、IDEを評価・比較します。',
    zh: '评估并比较最适合个人和团队工作流的提示词工程工具、平台和IDE。',
  },
  'evaluation-reliability': {
    en: 'Systematic methods to evaluate prompt quality, test across models, and build reliable prompts for production.',
    de: 'Systematische Methoden zur Bewertung der Prompt-Qualität, zum Testen über Modelle hinweg und zum Erstellen zuverlässiger Prompts für die Produktion.',
    fr: 'Méthodes systématiques pour évaluer la qualité des prompts, tester sur plusieurs modèles et créer des prompts fiables pour la production.',
    ja: 'プロンプト品質を評価し、複数のモデル間でテストし、本番環境向けに信頼性の高いプロンプトを構築するための体系的な方法。',
    zh: '评估提示词质量、跨模型测试以及为生产环境构建可靠提示词的系统化方法。',
  },
  'team-governance': {
    en: 'Establish version control, documentation, governance, and security workflows for team-based prompt engineering.',
    de: 'Etablieren Sie Versionskontrolle, Dokumentation, Governance und Sicherheits-Workflows für teambasiertes Prompt Engineering.',
    fr: 'Établissez le contrôle de version, la documentation, la gouvernance et les workflows de sécurité pour le prompt engineering en équipe.',
    ja: 'チームベースのプロンプトエンジニアリングのためのバージョン管理、ドキュメント、ガバナンス、セキュリティワークフローを確立します。',
    zh: '为基于团队的提示词工程建立版本控制、文档、治理和安全工作流。',
  },
  'workflows-automation': {
    en: 'Build structured outputs, automate prompt workflows, and design repeatable processes for teams and use cases.',
    de: 'Erstellen Sie strukturierte Ausgaben, automatisieren Sie Prompt-Workflows und entwerfen Sie wiederholbare Prozesse für Teams und Anwendungsfälle.',
    fr: 'Créez des sorties structurées, automatisez les workflows de prompts et concevez des processus reproductibles pour les équipes et les cas d\'usage.',
    ja: '構造化された出力を構築し、プロンプトワークフローを自動化し、チームとユースケース向けの反復可能なプロセスを設計します。',
    zh: '构建结构化输出、自动化提示词工作流，以及为团队和用例设计可重复的流程。',
  },
}

const SUBSECTION_LABELS: Record<string, Record<string, string>> = {
  'Use Cases by Vertical': {
    en: 'Use Cases by Vertical',
    de: 'Anwendungsfälle nach Branche',
    fr: 'Cas d\'usage par secteur',
    ja: '業種別ユースケース',
    zh: '按垂直领域划分的用例',
  },
  'Output Engineering': {
    en: 'Output Engineering',
    de: 'Ausgabe-Engineering',
    fr: 'Ingénierie de sortie',
    ja: '出力エンジニアリング',
    zh: '输出工程',
  },
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
  policy: {
    en: 'Policy & Compliance: What Do AI Regulations Mean for Your Organization?',
    de: 'Politik & Compliance: Was bedeuten KI-Regulierungen für Ihre Organisation?',
    fr: 'Politique & Conformité : Que signifient les régulations IA pour votre organisation ?',
    ja: 'ポリシーとコンプライアンス：AI規制はあなたの組織に何を意味するのか？',
    zh: '政策与合规：AI法规对您的组织意味着什么？',
  },
  'tools-platforms': {
    en: 'Tools & Platforms: Which Tool Fits Your Workflow?',
    de: 'Tools & Plattformen: Welches Tool passt zu Ihrem Workflow?',
    fr: 'Outils & Plateformes : Quel outil correspond à votre flux de travail ?',
    ja: 'ツール＆プラットフォーム：どのツールがあなたのワークフローに合うのか？',
    zh: '工具与平台：哪个工具适合您的工作流程？',
  },
  'evaluation-reliability': {
    en: 'Evaluation & Reliability: How Do You Know Your Prompts Work?',
    de: 'Evaluierung & Zuverlässigkeit: Wie wissen Sie, dass Ihre Prompts funktionieren?',
    fr: 'Évaluation & Fiabilité : Comment savez-vous que vos prompts fonctionnent ?',
    ja: '評価と信頼性：プロンプトが機能していることをどのように確認しますか？',
    zh: '评估与可靠性：您如何知道提示词是否有效？',
  },
  'team-governance': {
    en: 'Team Governance: How Do You Manage Prompts at Scale?',
    de: 'Team-Governance: Wie verwalten Sie Prompts in großem Maßstab?',
    fr: 'Gouvernance d\'équipe : Comment gérez-vous les prompts à grande échelle ?',
    ja: 'チームガバナンス：規模を拡大してプロンプトをどのように管理しますか？',
    zh: '团队治理：如何大规模管理提示词？',
  },
  'workflows-automation': {
    en: 'Workflows & Automation: How Do You Scale Prompts into Systems?',
    de: 'Workflows & Automatisierung: Wie skalieren Sie Prompts zu Systemen?',
    fr: 'Workflows & Automation : Comment transformez-vous les prompts en systèmes ?',
    ja: 'ワークフロー＆オートメーション：プロンプトをどのようにシステムにスケーリングしますか？',
    zh: '工作流程与自动化：如何将提示词扩展为系统？',
  },
}

// Get translated article title from content or fallback
function getArticleTitle(articleKey: string, lang: Language): string {
  const contentKey = PE_SLUG_TO_KEY[articleKey]
  if (contentKey && peContent[contentKey]?.[lang]?.title) {
    return peContent[contentKey][lang].title
  }
  if (contentKey && peContent[contentKey]?.en?.title) {
    return peContent[contentKey].en.title
  }
  // Fallback: capitalize slug if no content found
  return articleKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

const THEME_COLORS: Record<string, { badge: string; dot: string }> = {
  fundamentals: { badge: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-400' },
  frameworks:   { badge: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-400' },
  techniques:   { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-400' },
  'use-topics': { badge: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-400' },
  policy:       { badge: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-400' },
  'tools-platforms': { badge: 'bg-cyan-50 text-cyan-700 border-cyan-200', dot: 'bg-cyan-400' },
  'evaluation-reliability': { badge: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-400' },
  'team-governance': { badge: 'bg-indigo-50 text-indigo-700 border-indigo-200', dot: 'bg-indigo-400' },
  'workflows-automation': { badge: 'bg-green-50 text-green-700 border-green-200', dot: 'bg-green-400' },
}

function ArticleCard({ articleKey, dot, lang }: { articleKey: string; dot: string; lang: Language }) {
  const title = getArticleTitle(articleKey, lang)
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

function PromptEngineeringHubContent({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  const lang = useLang(initialLang)

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="py-16 border-b border-primary/20 mb-16">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Prompt Engineering</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            {HUB_HERO_TITLE[lang] ?? HUB_HERO_TITLE['en']}
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            {HUB_HERO_DESC[lang] ?? HUB_HERO_DESC['en']}
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
                  <p className="text-text-secondary leading-relaxed max-w-2xl">
                    {THEME_DESCRIPTIONS[theme.id]?.[lang] ?? THEME_DESCRIPTIONS[theme.id]?.['en'] ?? theme.description}
                  </p>
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
                          {SUBSECTION_LABELS[sub.title]?.[lang] ?? sub.title}
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
            {HUB_CTA_TEXT[lang] ?? HUB_CTA_TEXT['en']}
          </p>
          <Link
            href={navHref('/', lang)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {HUB_CTA_BUTTON[lang] ?? HUB_CTA_BUTTON['en']}
          </Link>
        </div>

        {/* Footer nav */}
        <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-primary/20">
          <Link href={navHref('/', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_HOME[lang] ?? HUB_NAV_HOME['en']}</Link>
          <Link href={navHref('/features', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_FEATURES[lang] ?? HUB_NAV_FEATURES['en']}</Link>
          <Link href={navHref('/how-it-works', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_HOW[lang] ?? HUB_NAV_HOW['en']}</Link>
          <Link href={navHref('/blog', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_BLOG[lang] ?? HUB_NAV_BLOG['en']}</Link>
        </div>

      </div>
    </div>
  )
}

export function PromptEngineeringHub({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  return <PromptEngineeringHubContent initialLang={initialLang} />
}
