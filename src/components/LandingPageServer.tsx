'use client'

import Link from 'next/link'
import { InteractivePipeline } from './InteractivePipeline'
import { LandingPageClient } from './LandingPageClient'
import { YouTubeFacade } from './YouTubeFacade'
import { BlogSectionClient } from './BlogSectionClient'
import { Suspense } from 'react'
import { useLang } from '@/hooks/useLang'

// Icons
const Shield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)
const Download = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
)
const Sparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
)
const Zap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
)
const Brain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/><path d="M9.75 9.75a4 4 0 0 1 5.542 2.824"/><path d="M14.25 9.75a4 4 0 0 1-5.542-2.824"/></svg>
)
const Layers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.65-8.58 3.91a2 2 0 0 1-1.66 0L2 12.18"/><path d="m22 17.65-8.58 3.91a2 2 0 0 1-1.66 0L2 17.18"/></svg>
)
const Github = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)
const Twitter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
)
const Linkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
)
const Discord = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19.933 13.041a8.8 8.8 0 0 1-.817 4.438 8.356 8.356 0 0 1-7.078-.25 10.709 10.709 0 0 1-3.12-2.695 8.235 8.235 0 0 1-.697-3.127 8.391 8.391 0 0 1 .262-2.4l.445-.891a.459.459 0 0 0-.121-.515.457.457 0 0 0-.501-.269l-1.532.777a8.071 8.071 0 0 0-3.035-1.092 11.037 11.037 0 0 0-2.928.11L2.217 7.223a.459.459 0 0 0-.498.412.457.457 0 0 0 .193.51l1.358 1.358a8.6 8.6 0 0 0 1.674 2.867 8.086 8.086 0 0 0-.035 3.004.456.456 0 0 0 .333.371l1.477.616a.458.458 0 0 1 .234.65l-.51 1.477a.458.458 0 0 1-.456.288A8.328 8.328 0 0 0 8.4 20.8a8.694 8.694 0 0 0 5.053 1.567c2.35 0 4.564-.687 6.38-1.92a8.145 8.145 0 0 0 2.437-3.465.458.458 0 0 1 .647-.13l1.584.792a.458.458 0 0 1 .234.65l-.511 1.478a.458.458 0 0 1-.456.287zM8.02 15.278c-.99 0-1.82-.36-2.495-1.073a3.402 3.402 0 0 1-.87-2.263c.022-.086.044-.173.044-.264 0-1.035.806-1.866 1.79-1.866.96 0 1.748.815 1.764 1.827 0 .062-.009.124-.022.185a2.72 2.72 0 0 1 1.537-1.1c1.05 0 1.94.404 2.637 1.155a3.487 3.487 0 0 1 1.077 2.493c0 1.936-1.565 3.51-3.494 3.51zm7.072 0c-.99 0-1.808-.358-2.48-1.067a3.4 3.4 0 0 1-.868-2.263c.022-.084.044-.173.044-.264 0-1.035.805-1.866 1.789-1.866.96 0 1.748.815 1.764 1.827 0 .062-.009.124-.022.185a2.72 2.72 0 0 1 1.537-1.1c1.05 0 1.94.404 2.637 1.155a3.487 3.487 0 0 1 1.077 2.493c0 1.936-1.565 3.51-3.494 3.51z"/></svg>
)
const YouTube = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
)
const Substack = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
)

// ─── Translations ──────────────────────────────────────────────────────────────

const T = {
  en: {
    badge: 'Waitlist Now Open',
    h1a: 'One Prompt. 25+ AI Responses.',
    h1b: 'Get Consensus',
    heroDesc: 'Run your prompt once — get responses from ChatGPT, Claude, Gemini and 25+ models side-by-side. Compare what each says, detect hallucinations, find where they agree.',
    heroSub: 'Built for developers, researchers, and AI enthusiasts',
    compareH2: 'Compare AI Models Side-by-Side',
    compareDesc: 'Run the same prompt across ChatGPT, Claude, Gemini, and 25+ other AI models simultaneously. See which model performs best for your specific task.',
    compareBtn: 'View AI Model Comparison Guide',
    featuresH2: 'Core Features & Capabilities',
    featuresDesc: 'Everything you need to optimize prompts and master AI workflows',
    features: [
      { title: 'Prompt Optimization', description: 'Automatically refine and optimize your prompts across 8 refinement techniques.' },
      { title: 'Multi-Model Analysis', description: 'Compare responses from 25+ AI models side-by-side to detect hallucinations.' },
      { title: 'Intelligence Insights', description: 'Understand model capabilities and learn which works best for your use case.' },
      { title: 'Speed & Efficiency', description: 'Save hours of manual testing with instant, parallel model comparisons.' },
      { title: 'Privacy First', description: 'Zero registration, zero tracking, total control. Run everything locally.' },
      { title: 'Open Source Integration', description: 'Deploy locally with LLaMA, Ollama, and all your favorite open models.' },
    ],
    pipelineH2: 'How the 4-Stage Pipeline Works',
    pipelineDesc: 'Optimize, compare, analyze, and improve your prompts automatically',
    faqH2: 'Frequently Asked Questions',
    waitlistH2: 'Join the PromptQuorum Waitlist',
    waitlistDesc: 'Be the first to access our open-source prompt optimization tool. Early access gets lifetime premium features.',
    copyright: '© 2026 PromptQuorum. All rights reserved.',
    worldwide: '🌍 Available worldwide',
    langs: 'English, Deutsch, Français, 日本語, 中文',
  },
  de: {
    badge: 'Warteliste jetzt offen',
    h1a: 'Ein Prompt. 25+ KI-Antworten.',
    h1b: 'Konsens finden',
    heroDesc: 'Senden Sie Ihren Prompt einmal — erhalten Sie Antworten von ChatGPT, Claude, Gemini und 25+ Modellen nebeneinander. Vergleichen Sie, was jedes Modell sagt, erkennen Sie Halluzinationen und finden Sie Übereinstimmungen.',
    heroSub: 'Für Entwickler, Forscher und KI-Enthusiasten',
    compareH2: 'KI-Modelle nebeneinander vergleichen',
    compareDesc: 'Führen Sie denselben Prompt gleichzeitig über ChatGPT, Claude, Gemini und 25+ weitere KI-Modelle aus. Sehen Sie, welches Modell für Ihre Aufgabe am besten geeignet ist.',
    compareBtn: 'KI-Modell-Vergleichsanleitung ansehen',
    featuresH2: 'Kernfunktionen & Möglichkeiten',
    featuresDesc: 'Alles, was Sie brauchen, um Prompts zu optimieren und KI-Workflows zu meistern',
    features: [
      { title: 'Prompt-Optimierung', description: 'Verfeinern und optimieren Sie Ihre Prompts automatisch mit 8 Verfeinerungstechniken.' },
      { title: 'Multi-Modell-Analyse', description: 'Vergleichen Sie Antworten von 25+ KI-Modellen nebeneinander, um Halluzinationen zu erkennen.' },
      { title: 'Intelligenz-Einblicke', description: 'Verstehen Sie die Fähigkeiten der Modelle und finden Sie heraus, welches am besten zu Ihrem Anwendungsfall passt.' },
      { title: 'Geschwindigkeit & Effizienz', description: 'Sparen Sie Stunden manueller Tests mit sofortigen, parallelen Modellvergleichen.' },
      { title: 'Datenschutz zuerst', description: 'Keine Registrierung, kein Tracking, volle Kontrolle. Alles lokal ausführen.' },
      { title: 'Open-Source-Integration', description: 'Lokal bereitstellen mit LLaMA, Ollama und all Ihren bevorzugten Open-Source-Modellen.' },
    ],
    pipelineH2: 'So funktioniert die 4-Stufen-Pipeline',
    pipelineDesc: 'Prompts automatisch optimieren, vergleichen, analysieren und verbessern',
    faqH2: 'Häufig gestellte Fragen',
    waitlistH2: 'Der PromptQuorum-Warteliste beitreten',
    waitlistDesc: 'Seien Sie der Erste, der Zugang zu unserem Open-Source-Prompt-Optimierungstool erhält. Frühe Nutzer erhalten lebenslange Premium-Funktionen.',
    copyright: '© 2026 PromptQuorum. Alle Rechte vorbehalten.',
    worldwide: '🌍 Weltweit verfügbar',
    langs: 'English, Deutsch, Français, 日本語, 中文',
  },
  fr: {
    badge: 'Liste d\'attente ouverte',
    h1a: 'Un Prompt. 25+ Réponses IA.',
    h1b: 'Trouvez le Consensus',
    heroDesc: 'Envoyez votre prompt une seule fois — recevez des réponses de ChatGPT, Claude, Gemini et 25+ modèles côte à côte. Comparez ce que chacun dit, détectez les hallucinations, trouvez où ils s\'accordent.',
    heroSub: 'Pour les développeurs, chercheurs et passionnés d\'IA',
    compareH2: 'Comparer les modèles IA côte à côte',
    compareDesc: 'Exécutez le même prompt sur ChatGPT, Claude, Gemini et 25+ autres modèles simultanément. Voyez quel modèle convient le mieux à votre tâche.',
    compareBtn: 'Voir le guide de comparaison des modèles IA',
    featuresH2: 'Fonctionnalités principales',
    featuresDesc: 'Tout ce dont vous avez besoin pour optimiser les prompts et maîtriser les workflows IA',
    features: [
      { title: 'Optimisation des prompts', description: 'Affinez et optimisez automatiquement vos prompts avec 8 techniques de raffinement.' },
      { title: 'Analyse multi-modèles', description: 'Comparez les réponses de 25+ modèles IA côte à côte pour détecter les hallucinations.' },
      { title: 'Insights d\'intelligence', description: 'Comprenez les capacités des modèles et apprenez lequel fonctionne le mieux pour votre cas d\'usage.' },
      { title: 'Rapidité & Efficacité', description: 'Économisez des heures de tests manuels avec des comparaisons de modèles instantanées et parallèles.' },
      { title: 'Confidentialité d\'abord', description: 'Zéro inscription, zéro tracking, contrôle total. Exécutez tout localement.' },
      { title: 'Intégration Open Source', description: 'Déployez localement avec LLaMA, Ollama et tous vos modèles open source préférés.' },
    ],
    pipelineH2: 'Comment fonctionne le pipeline en 4 étapes',
    pipelineDesc: 'Optimisez, comparez, analysez et améliorez vos prompts automatiquement',
    faqH2: 'Questions fréquemment posées',
    waitlistH2: 'Rejoindre la liste d\'attente PromptQuorum',
    waitlistDesc: 'Soyez le premier à accéder à notre outil d\'optimisation de prompts open source. L\'accès anticipé donne des fonctionnalités premium à vie.',
    copyright: '© 2026 PromptQuorum. Tous droits réservés.',
    worldwide: '🌍 Disponible dans le monde entier',
    langs: 'English, Deutsch, Français, 日本語, 中文',
  },
  ja: {
    badge: 'ウェイトリスト受付中',
    h1a: '1つのプロンプト。25以上のAI回答。',
    h1b: 'コンセンサスを得る',
    heroDesc: 'プロンプトを一度送信するだけで、ChatGPT・Claude・Geminiをはじめ25以上のモデルから並べて回答を取得。それぞれの回答を比較し、ハルシネーションを検出し、合意点を見つけましょう。',
    heroSub: '開発者・研究者・AIエンthusiastのために',
    compareH2: 'AIモデルを並べて比較',
    compareDesc: '同じプロンプトをChatGPT・Claude・Geminiなど25以上のモデルに同時送信。あなたのタスクに最適なモデルを見つけましょう。',
    compareBtn: 'AIモデル比較ガイドを見る',
    featuresH2: '主要機能と特長',
    featuresDesc: 'プロンプトを最適化し、AIワークフローをマスターするために必要なすべて',
    features: [
      { title: 'プロンプト最適化', description: '8つの改善テクニックでプロンプトを自動的に改良・最適化します。' },
      { title: 'マルチモデル分析', description: '25以上のAIモデルの回答を並べて比較し、ハルシネーションを検出します。' },
      { title: 'インテリジェンスインサイト', description: 'モデルの能力を理解し、あなたのユースケースに最適なものを学習します。' },
      { title: 'スピードと効率', description: '即座の並列モデル比較により、手動テストの時間を大幅に節約します。' },
      { title: 'プライバシー優先', description: '登録不要、追跡なし、完全なコントロール。すべてローカルで実行可能。' },
      { title: 'オープンソース統合', description: 'LLaMA・Ollamaなどのオープンモデルでローカルにデプロイ可能。' },
    ],
    pipelineH2: '4段階パイプラインの仕組み',
    pipelineDesc: 'プロンプトの最適化・比較・分析・改善を自動で実行',
    faqH2: 'よくある質問',
    waitlistH2: 'PromptQuorumウェイトリストに参加',
    waitlistDesc: 'オープンソースのプロンプト最適化ツールにいち早くアクセスしましょう。早期ユーザーはプレミアム機能を生涯無料で利用できます。',
    copyright: '© 2026 PromptQuorum. All rights reserved.',
    worldwide: '🌍 世界中で利用可能',
    langs: 'English, Deutsch, Français, 日本語, 中文',
  },
  zh: {
    badge: '候补名单现已开放',
    h1a: '一个提示词，25+ AI 回答。',
    h1b: '获得共识',
    heroDesc: '只需发送一次提示词——即可并排获得 ChatGPT、Claude、Gemini 及 25+ 个模型的回答。比较各模型的答案，检测幻觉，找出共识所在。',
    heroSub: '为开发者、研究人员和 AI 爱好者打造',
    compareH2: '并排比较 AI 模型',
    compareDesc: '同时将相同的提示词发送给 ChatGPT、Claude、Gemini 等 25+ 个模型。找出哪个模型最适合您的具体任务。',
    compareBtn: '查看 AI 模型比较指南',
    featuresH2: '核心功能与特性',
    featuresDesc: '优化提示词并掌握 AI 工作流所需的一切',
    features: [
      { title: '提示词优化', description: '通过 8 种优化技术自动改进和优化您的提示词。' },
      { title: '多模型分析', description: '并排比较 25+ 个 AI 模型的回答，快速检测幻觉内容。' },
      { title: '智能洞察', description: '了解各模型的能力，找出最适合您使用场景的模型。' },
      { title: '速度与效率', description: '通过即时并行模型比较，节省数小时的手动测试时间。' },
      { title: '隐私优先', description: '无需注册，零追踪，完全掌控。所有内容均可在本地运行。' },
      { title: '开源集成', description: '使用 LLaMA、Ollama 及您最喜爱的开源模型在本地部署。' },
    ],
    pipelineH2: '4 阶段流水线的工作原理',
    pipelineDesc: '自动优化、比较、分析并改进您的提示词',
    faqH2: '常见问题',
    waitlistH2: '加入 PromptQuorum 候补名单',
    waitlistDesc: '率先获取我们的开源提示词优化工具访问权限。早期用户可终身使用高级功能。',
    copyright: '© 2026 PromptQuorum. 保留所有权利。',
    worldwide: '🌍 全球可用',
    langs: 'English, Deutsch, Français, 日本語, 中文',
  },
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description, delay }: { icon: React.ElementType, title: string, description: string, delay: number }) {
  return (
    <div
      className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all-200 group animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-all-200">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  )
}

const ICONS = [Sparkles, Layers, Brain, Zap, Shield, Download]

// Main Landing Page Server Component
export function LandingPageServer() {
  const lang = useLang()
  const t = T[lang] ?? T.en

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6 animate-fade-in">
            <Sparkles />
            <span>{t.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            {t.h1a}
            <span className="block text-primary">{t.h1b}</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            {t.heroDesc}
          </p>

          <div className="mt-10 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Suspense fallback={<div className="max-w-md mx-auto h-12 bg-gray-200 rounded" />}>
              <LandingPageClient lang={lang} />
            </Suspense>
          </div>

          <p className="mt-8 text-text-muted text-sm animate-fade-in" style={{ animationDelay: '400ms' }}>
            {t.heroSub}
          </p>

          {/* YouTube Video */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="relative w-full pb-[56.25%]">
                <YouTubeFacade />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Model Comparison Section */}
      <section className="py-20 px-4 sm:px-6 bg-primary/5 border-t-2 border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            {t.compareH2}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            {t.compareDesc}
          </p>
          <Link href="/compare" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
            {t.compareBtn}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              {t.featuresH2}
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              {t.featuresDesc}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {t.features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={ICONS[index]}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              {t.pipelineH2}
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              {t.pipelineDesc}
            </p>
          </div>

          <Suspense fallback={<div className="h-64 bg-gray-200 rounded" />}>
            <InteractivePipeline />
          </Suspense>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              {t.faqH2}
            </h2>
          </div>

          <Suspense fallback={<div className="space-y-4" />}>
            <LandingPageClient isClientContent={true} lang={lang} />
          </Suspense>
        </div>
      </section>

      <BlogSectionClient />

      {/* Waitlist CTA Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            {t.waitlistH2}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {t.waitlistDesc}
          </p>
          <div className="mt-10">
            <Suspense fallback={<div className="max-w-md mx-auto h-12 bg-gray-200 rounded" />}>
              <LandingPageClient isWaitlistForm={true} lang={lang} />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="PromptQuorum" className="w-8 h-8" />
              <span className="font-semibold text-text-primary">PromptQuorum</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="PromptQuorum on GitHub" className="text-text-muted hover:text-primary transition-colors">
                <Github />
              </a>
              <a href="https://x.com/HansKuepperAPPs" target="_blank" rel="noopener noreferrer" aria-label="PromptQuorum on X (Twitter)" className="text-text-muted hover:text-primary transition-colors">
                <Twitter />
              </a>
              <a href="https://www.linkedin.com/company/promptquorum" target="_blank" rel="noopener noreferrer" aria-label="PromptQuorum on LinkedIn" className="text-text-muted hover:text-primary transition-colors">
                <Linkedin />
              </a>
              <a href="https://discord.com/channels/1482063293509271724/1482063418113396736" target="_blank" rel="noopener noreferrer" aria-label="PromptQuorum Discord community" className="text-text-muted hover:text-primary transition-colors">
                <Discord />
              </a>
              <a href="https://www.youtube.com/channel/UC5PL_1lU5pdV1d1EC1XeLhA" target="_blank" rel="noopener noreferrer" aria-label="PromptQuorum on YouTube" className="text-text-muted hover:text-primary transition-colors">
                <YouTube />
              </a>
              <a href="https://substack.com/@promptquorum" target="_blank" rel="noopener noreferrer" aria-label="PromptQuorum on Substack" className="text-text-muted hover:text-primary transition-colors">
                <Substack />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center space-y-3 text-text-muted text-sm">
            <div>{t.copyright}</div>
            <div className="flex items-center justify-center gap-2">
              <span>{t.worldwide}</span>
              <span>•</span>
              <span>{t.langs}</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-xs">
              <a href="/about" className="hover:text-primary transition-colors">About</a>
              <span>•</span>
              <a href="/frameworks" className="hover:text-primary transition-colors">Frameworks</a>
              <span>•</span>
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="mailto:promptquorum@gmail.com" className="hover:text-primary transition-colors">promptquorum@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
