'use client'

import Link from 'next/link'
import { LangLinksBar } from '@/components/LangLinksBar'
import { promptBitesContent } from '@/lib/prompt-bites/articles-barrel'
import { PROMPT_BITES_SLUG_TO_KEY } from '@/lib/prompt-bites/slugs'
import { PROMPT_BITES_CATEGORIES } from '@/lib/prompt-bites/categories'
import { PROMPT_BITES_PUBLISHED_SLUGS } from '@/lib/prompt-bites/published'
import type { Language } from '@/lib/blog/blogContent'

interface Props {
  lang: Language
}

const HUB_HEADLINE: Record<Language, string> = {
  en: 'Quick Answers to Local LLM Questions',
  de: 'Schnelle Antworten zu lokalen LLM-Fragen',
  fr: 'Réponses rapides aux questions sur les LLM locaux',
  ja: 'ローカルLLMの質問への迅速な回答',
  zh: '本地LLM问题的快速解答',
}

const COUNT = PROMPT_BITES_PUBLISHED_SLUGS.size

const HUB_SUBTITLE: Record<Language, string> = {
  en: `${COUNT} short-answer guides. VRAM requirements, Ollama picks, hardware comparisons, and setup tips — answered in 60 seconds or less.`,
  de: `${COUNT} Kurzantwort-Leitfäden. VRAM-Anforderungen, Ollama-Empfehlungen, Hardware-Vergleiche und Setup-Tipps — in 60 Sekunden beantwortet.`,
  fr: `${COUNT} guides à réponse rapide. Besoins en VRAM, choix Ollama, comparaisons matérielles et conseils de configuration — répondus en 60 secondes.`,
  ja: `${COUNT}の短答ガイド。VRAM要件、Ollamaのおすすめ、ハードウェア比較、セットアップのヒント — 60秒以内に回答。`,
  zh: `${COUNT}篇简答指南。显存要求、Ollama推荐、硬件对比和设置技巧 — 60秒内解答。`,
}

const VRAM_TABLE_HEADERS: Record<Language, { vram: string; model: string; quant: string; useCase: string }> = {
  en: { vram: 'VRAM', model: 'Best Model (May 2026)', quant: 'Quantization', useCase: 'Use Case' },
  de: { vram: 'VRAM', model: 'Bestes Modell (Mai 2026)', quant: 'Quantisierung', useCase: 'Anwendungsfall' },
  fr: { vram: 'VRAM', model: 'Meilleur modèle (mai 2026)', quant: 'Quantisation', useCase: 'Cas d\'usage' },
  ja: { vram: 'VRAM', model: 'ベストモデル（2026年5月）', quant: '量化', useCase: 'ユースケース' },
  zh: { vram: 'VRAM', model: '最佳模型（2026年5月）', quant: '量化', useCase: '使用场景' },
}

const VRAM_TABLE_ROWS: Record<Language, Array<{ vram: string; model: string; quant: string; useCase: string }>> = {
  en: [
    { vram: '4 GB', model: 'Phi-4 Mini', quant: 'Q4', useCase: 'Basic chat, small tasks' },
    { vram: '6 GB', model: 'Llama 3 8B', quant: 'Q4_K_M', useCase: 'Daily chat and coding' },
    { vram: '8 GB', model: 'Mistral 7B', quant: 'Q5_K_M', useCase: 'Quality + speed balance' },
    { vram: '12 GB', model: 'Qwen 14B', quant: 'Q4_K_M', useCase: 'Coding and reasoning' },
    { vram: '16 GB', model: 'Qwen 32B', quant: 'Q4_K_M', useCase: 'Complex multi-step tasks' },
    { vram: '24 GB', model: 'Llama 70B', quant: 'Q4_K_M (partial)', useCase: 'Near-production quality' },
    { vram: '48+ GB', model: 'Llama 70B', quant: 'Q5_K_M or higher', useCase: 'Full precision models' },
  ],
  de: [
    { vram: '4 GB', model: 'Phi-4 Mini', quant: 'Q4', useCase: 'Einfacher Chat, kleine Aufgaben' },
    { vram: '6 GB', model: 'Llama 3 8B', quant: 'Q4_K_M', useCase: 'Täglicher Chat und Coding' },
    { vram: '8 GB', model: 'Mistral 7B', quant: 'Q5_K_M', useCase: 'Qualitäts- und Geschwindigkeitsausgleich' },
    { vram: '12 GB', model: 'Qwen 14B', quant: 'Q4_K_M', useCase: 'Coding und Reasoning' },
    { vram: '16 GB', model: 'Qwen 32B', quant: 'Q4_K_M', useCase: 'Komplexe mehrstufige Aufgaben' },
    { vram: '24 GB', model: 'Llama 70B', quant: 'Q4_K_M (partiell)', useCase: 'Qualität nahe Produktion' },
    { vram: '48+ GB', model: 'Llama 70B', quant: 'Q5_K_M oder höher', useCase: 'Vollpräzisions-Modelle' },
  ],
  fr: [
    { vram: '4 Go', model: 'Phi-4 Mini', quant: 'Q4', useCase: 'Chat simple, petites tâches' },
    { vram: '6 Go', model: 'Llama 3 8B', quant: 'Q4_K_M', useCase: 'Chat et code au quotidien' },
    { vram: '8 Go', model: 'Mistral 7B', quant: 'Q5_K_M', useCase: 'Équilibre qualité + vitesse' },
    { vram: '12 Go', model: 'Qwen 14B', quant: 'Q4_K_M', useCase: 'Code et raisonnement' },
    { vram: '16 Go', model: 'Qwen 32B', quant: 'Q4_K_M', useCase: 'Tâches multi-étapes complexes' },
    { vram: '24 Go', model: 'Llama 70B', quant: 'Q4_K_M (partiel)', useCase: 'Qualité quasi-production' },
    { vram: '48+ Go', model: 'Llama 70B', quant: 'Q5_K_M ou plus', useCase: 'Modèles pleine précision' },
  ],
  ja: [
    { vram: '4 GB', model: 'Phi-4 Mini', quant: 'Q4', useCase: '基本的なチャット、小さなタスク' },
    { vram: '6 GB', model: 'Llama 3 8B', quant: 'Q4_K_M', useCase: '日常のチャットとコーディング' },
    { vram: '8 GB', model: 'Mistral 7B', quant: 'Q5_K_M', useCase: '品質と速度のバランス' },
    { vram: '12 GB', model: 'Qwen 14B', quant: 'Q4_K_M', useCase: 'コーディングと推論' },
    { vram: '16 GB', model: 'Qwen 32B', quant: 'Q4_K_M', useCase: '複雑な複数ステップタスク' },
    { vram: '24 GB', model: 'Llama 70B', quant: 'Q4_K_M (部分)', useCase: '本番に近い品質' },
    { vram: '48+ GB', model: 'Llama 70B', quant: 'Q5_K_M以上', useCase: '完全精度モデル' },
  ],
  zh: [
    { vram: '4 GB', model: 'Phi-4 Mini', quant: 'Q4', useCase: '基础聊天、小型任务' },
    { vram: '6 GB', model: 'Llama 3 8B', quant: 'Q4_K_M', useCase: '日常聊天和编程' },
    { vram: '8 GB', model: 'Mistral 7B', quant: 'Q5_K_M', useCase: '质量与速度均衡' },
    { vram: '12 GB', model: 'Qwen 14B', quant: 'Q4_K_M', useCase: '编程和推理' },
    { vram: '16 GB', model: 'Qwen 32B', quant: 'Q4_K_M', useCase: '复杂多步任务' },
    { vram: '24 GB', model: 'Llama 70B', quant: 'Q4_K_M (部分)', useCase: '接近生产质量' },
    { vram: '48+ GB', model: 'Llama 70B', quant: 'Q5_K_M或更高', useCase: '完整精度模型' },
  ],
}

const DEEPDIVE_LINKS: Record<Language, Record<string, { text: string; href: string }>> = {
  en: {
    'Quantization & VRAM': { text: 'Deep dive: Quantization Explained', href: '/local-llms/llm-quantization-explained' },
    'Ollama': { text: 'Deep dive: Top Open-Source Models with Ollama', href: '/local-llms/top-open-source-models-ollama' },
    'Tool Comparisons': { text: 'Deep dive: Ollama vs LM Studio', href: '/local-llms/ollama-vs-lm-studio' },
    'Model Comparisons': { text: 'Deep dive: Qwen vs Llama vs Mistral', href: '/local-llms/qwen-vs-llama-vs-mistral' },
    'Hardware-Specific': { text: 'Deep dive: Best Budget GPUs for Local LLM', href: '/local-llms/best-budget-gpus-local-llm' },
    'Quick Answers': { text: 'Deep dive: How Much VRAM for Local LLM', href: '/local-llms/how-much-vram-local-llm' },
    'Prompt Engineering': { text: 'Deep dive: CO-STAR Prompt Framework', href: '/prompt-engineering/co-star-framework' },
    'Privacy & Compliance': { text: 'Deep dive: GDPR & Privacy Manifesto', href: '/local-llms/qwen-gdpr-privacy-manifesto-2026' },
  },
  de: {
    'Quantization & VRAM': { text: 'Vertiefung: Quantisierung erklärt', href: '/de/local-llms/llm-quantization-explained' },
    'Ollama': { text: 'Vertiefung: Top Open-Source-Modelle mit Ollama', href: '/de/local-llms/top-open-source-models-ollama' },
    'Tool Comparisons': { text: 'Vertiefung: Ollama vs LM Studio', href: '/de/local-llms/ollama-vs-lm-studio' },
    'Model Comparisons': { text: 'Vertiefung: Qwen vs Llama vs Mistral', href: '/de/local-llms/qwen-vs-llama-vs-mistral' },
    'Hardware-Specific': { text: 'Vertiefung: Beste Budget-GPUs für lokale LLM', href: '/de/local-llms/best-budget-gpus-local-llm' },
    'Quick Answers': { text: 'Vertiefung: Wie viel VRAM für lokale LLM', href: '/de/local-llms/how-much-vram-local-llm' },
    'Prompt Engineering': { text: 'Vertiefung: CO-STAR-Prompt-Framework', href: '/de/prompt-engineering/co-star-framework' },
    'Privacy & Compliance': { text: 'Vertiefung: DSGVO & Datenschutz-Manifest', href: '/de/local-llms/qwen-gdpr-privacy-manifesto-2026' },
  },
  fr: {
    'Quantization & VRAM': { text: 'Approfondissement : Quantisation expliquée', href: '/fr/local-llms/llm-quantization-explained' },
    'Ollama': { text: 'Approfondissement : Top modèles open-source avec Ollama', href: '/fr/local-llms/top-open-source-models-ollama' },
    'Tool Comparisons': { text: 'Approfondissement : Ollama vs LM Studio', href: '/fr/local-llms/ollama-vs-lm-studio' },
    'Model Comparisons': { text: 'Approfondissement : Qwen vs Llama vs Mistral', href: '/fr/local-llms/qwen-vs-llama-vs-mistral' },
    'Hardware-Specific': { text: 'Approfondissement : Meilleures GPU budget pour LLM local', href: '/fr/local-llms/best-budget-gpus-local-llm' },
    'Quick Answers': { text: 'Approfondissement : Combien de VRAM pour LLM local', href: '/fr/local-llms/how-much-vram-local-llm' },
    'Prompt Engineering': { text: 'Approfondissement : Framework de prompts CO-STAR', href: '/fr/prompt-engineering/co-star-framework' },
    'Privacy & Compliance': { text: 'Approfondissement : Manifeste RGPD et confidentialité', href: '/fr/local-llms/qwen-gdpr-privacy-manifesto-2026' },
  },
  ja: {
    'Quantization & VRAM': { text: '深掘り：量化の説明', href: '/ja/local-llms/llm-quantization-explained' },
    'Ollama': { text: '深掘り：Ollamaでトップのオープンソースモデル', href: '/ja/local-llms/top-open-source-models-ollama' },
    'Tool Comparisons': { text: '深掘り：OllamaとLM Studio', href: '/ja/local-llms/ollama-vs-lm-studio' },
    'Model Comparisons': { text: '深掘り：QwenとLlamaとMistral', href: '/ja/local-llms/qwen-vs-llama-vs-mistral' },
    'Hardware-Specific': { text: '深掘り：ローカルLLM向けベストバジェットGPU', href: '/ja/local-llms/best-budget-gpus-local-llm' },
    'Quick Answers': { text: '深掘り：ローカルLLMに必要なVRAM', href: '/ja/local-llms/how-much-vram-local-llm' },
    'Prompt Engineering': { text: '深掘り：CO-STARプロンプトフレームワーク', href: '/ja/prompt-engineering/co-star-framework' },
    'Privacy & Compliance': { text: '深掘り：GDPR・プライバシーマニフェスト', href: '/ja/local-llms/qwen-gdpr-privacy-manifesto-2026' },
  },
  zh: {
    'Quantization & VRAM': { text: '深入：量化解释', href: '/zh/local-llms/llm-quantization-explained' },
    'Ollama': { text: '深入：Ollama顶级开源模型', href: '/zh/local-llms/top-open-source-models-ollama' },
    'Tool Comparisons': { text: '深入：Ollama对比LM Studio', href: '/zh/local-llms/ollama-vs-lm-studio' },
    'Model Comparisons': { text: '深入：Qwen对比Llama对比Mistral', href: '/zh/local-llms/qwen-vs-llama-vs-mistral' },
    'Hardware-Specific': { text: '深入：本地LLM最佳预算GPU', href: '/zh/local-llms/best-budget-gpus-local-llm' },
    'Quick Answers': { text: '深入：本地LLM需要多少显存', href: '/zh/local-llms/how-much-vram-local-llm' },
    'Prompt Engineering': { text: '深入：CO-STAR提示框架', href: '/zh/prompt-engineering/co-star-framework' },
    'Privacy & Compliance': { text: '深入：GDPR 与隐私宣言', href: '/zh/local-llms/qwen-gdpr-privacy-manifesto-2026' },
  },
}

const EDUCATIONAL_LEVEL: Record<string, Record<Language, string>> = {
  Beginner:     { en: 'Beginner',     de: 'Einsteiger',      fr: 'Débutant',      ja: '初級', zh: '初级' },
  Intermediate: { en: 'Intermediate', de: 'Fortgeschritten', fr: 'Intermédiaire', ja: '中級', zh: '中级' },
  Advanced:     { en: 'Advanced',     de: 'Fortgeschritten+',fr: 'Avancé',        ja: '上級', zh: '高级' },
}

function promptBitesArticleHref(lang: Language, slug: string): string {
  return lang === 'en' ? `/prompt-bites/${slug}` : `/${lang}/prompt-bites/${slug}`
}

const CATEGORY_SVG: Partial<Record<string, string>> = {
  'quantization-vram':  'prompt-bites-quantization-decision-tree',
  'ollama':             'prompt-bites-ollama-model-picker',
  'tool-comparisons':   'prompt-bites-tool-comparison-matrix',
  'model-comparisons':  'prompt-bites-model-size-comparison',
  'hardware-specific':  'prompt-bites-gpu-vram-tier-guide',
  'quick-answers':      'prompt-bites-vram-reference-table',
  'prompt-engineering': 'prompt-bites-overview',
  'privacy-compliance': 'prompt-bites-gpu-vram-tier-guide',
}

const CATEGORY_SVG_ALT: Record<string, Record<Language, string>> = {
  'quantization-vram': {
    en: 'VRAM and quantization decision tree for local LLMs',
    de: 'VRAM- und Quantisierungs-Entscheidungsbaum für lokale LLMs',
    fr: 'Arbre de décision VRAM et quantisation pour les LLM locaux',
    ja: 'ローカルLLM向けVRAMと量化の決定木',
    zh: '本地LLM显存与量化决策树',
  },
  'ollama': {
    en: 'Ollama model picker guide for local LLM selection',
    de: 'Ollama-Modellauswahlführer für lokale LLM-Auswahl',
    fr: 'Guide de sélection de modèle Ollama pour les LLM locaux',
    ja: 'ローカルLLM選択のためのOllamaモデルピッカーガイド',
    zh: 'Ollama本地LLM模型选择指南',
  },
  'tool-comparisons': {
    en: 'Local LLM tool comparison matrix: Ollama, LM Studio, Jan',
    de: 'Lokale LLM-Tool-Vergleichsmatrix: Ollama, LM Studio, Jan',
    fr: 'Matrice de comparaison des outils LLM locaux : Ollama, LM Studio, Jan',
    ja: 'ローカルLLMツール比較マトリクス：Ollama、LM Studio、Jan',
    zh: '本地LLM工具对比矩阵：Ollama、LM Studio、Jan',
  },
  'model-comparisons': {
    en: 'Local LLM model size comparison chart',
    de: 'Vergleichsdiagramm der lokalen LLM-Modellgrößen',
    fr: 'Diagramme de comparaison des tailles de modèles LLM locaux',
    ja: 'ローカルLLMモデルサイズ比較チャート',
    zh: '本地LLM模型规模对比图',
  },
  'hardware-specific': {
    en: 'GPU VRAM tier guide for local LLM hardware selection',
    de: 'GPU-VRAM-Tier-Leitfaden für lokale LLM-Hardwareauswahl',
    fr: 'Guide des niveaux GPU VRAM pour la sélection de matériel LLM local',
    ja: 'ローカルLLMハードウェア選択のためのGPU VRAMティアガイド',
    zh: '本地LLM硬件选择GPU显存档位指南',
  },
  'quick-answers': {
    en: 'VRAM quick reference table for local LLMs',
    de: 'VRAM-Schnellreferenztabelle für lokale LLMs',
    fr: 'Tableau de référence rapide VRAM pour les LLM locaux',
    ja: 'ローカルLLM向けVRAMクイックリファレンステーブル',
    zh: '本地LLM显存快速参考表',
  },
  'prompt-engineering': {
    en: 'Prompt Bites overview — quick answers to local LLM questions',
    de: 'Prompt Bites Übersicht — schnelle Antworten auf lokale LLM-Fragen',
    fr: 'Aperçu de Prompt Bites — réponses rapides aux questions sur les LLM locaux',
    ja: 'Prompt Bites概要 — ローカルLLMの質問への迅速な回答',
    zh: 'Prompt Bites概览 — 本地LLM问题快速解答',
  },
  'privacy-compliance': {
    en: 'GPU and VRAM guide for privacy-first local LLM deployment',
    de: 'GPU- und VRAM-Leitfaden für datenschutzorientierte lokale LLM-Bereitstellung',
    fr: 'Guide GPU et VRAM pour le déploiement LLM local axé sur la confidentialité',
    ja: 'プライバシー優先のローカルLLM展開のためのGPU・VRAMガイド',
    zh: '隐私优先本地LLM部署的GPU和显存指南',
  },
}

export function PromptBitesHubClient({ lang }: Props) {
  const slugsByCategory = PROMPT_BITES_CATEGORIES.map((cat) => ({
    ...cat,
    slugs: cat.articleSlugs,
  }))

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-4">
            Prompt Bites
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {HUB_HEADLINE[lang]}
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {HUB_SUBTITLE[lang]}
          </p>
        </header>

        {/* Cross-language links */}
        <div className="flex justify-center mb-12">
          <LangLinksBar cluster="prompt-bites" slug="" availableLangs={['en', 'de', 'fr', 'ja', 'zh']} />
        </div>

        {/* VRAM Reference Table */}
        <div className="mb-12 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5 border-b border-primary/20">
                <th className="px-4 py-3 text-left font-semibold text-text-primary">{VRAM_TABLE_HEADERS[lang].vram}</th>
                <th className="px-4 py-3 text-left font-semibold text-text-primary">{VRAM_TABLE_HEADERS[lang].model}</th>
                <th className="px-4 py-3 text-left font-semibold text-text-primary">{VRAM_TABLE_HEADERS[lang].quant}</th>
                <th className="px-4 py-3 text-left font-semibold text-text-primary">{VRAM_TABLE_HEADERS[lang].useCase}</th>
              </tr>
            </thead>
            <tbody>
              {VRAM_TABLE_ROWS[lang].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-surface'}>
                  <td className="px-4 py-2 text-text-primary font-medium border-b border-primary/10">{row.vram}</td>
                  <td className="px-4 py-2 text-text-primary border-b border-primary/10">{row.model}</td>
                  <td className="px-4 py-2 text-text-secondary border-b border-primary/10">{row.quant}</td>
                  <td className="px-4 py-2 text-text-secondary border-b border-primary/10">{row.useCase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-12">
          {slugsByCategory.map((cat) => (
            cat.slugs.length > 0 && (
              <section key={cat.id}>
                {CATEGORY_SVG[cat.id] && (
                  <img
                    src={`/images/${CATEGORY_SVG[cat.id]}-${lang}.svg`}
                    alt={CATEGORY_SVG_ALT[cat.id]?.[lang] ?? ''}
                    className="w-full max-w-2xl rounded-lg border border-primary/20 shadow-sm mb-4"
                    loading="lazy"
                    width={800}
                    height={350}
                  />
                )}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-primary/10 text-primary shrink-0">
                      {cat.label}
                    </span>
                    {cat.titleEn}
                  </h2>
                  <p className="text-sm text-text-secondary mt-1 ml-8">{cat.descriptionEn}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  {cat.slugs.map((slug) => {
                    const key = PROMPT_BITES_SLUG_TO_KEY[slug]
                    const article = promptBitesContent[key]?.[lang] ?? promptBitesContent[key]?.['en']
                    if (!article) return null
                    const href = promptBitesArticleHref(lang, slug)
                    const qaData = (article as any).quickAnswerTop
                    const langAnswer = qaData?.[lang]?.answer
                    const enAnswer = qaData?.['en']?.answer
                    const rawAnswer = langAnswer && !langAnswer.includes('translation pending') ? langAnswer : enAnswer
                    const firstSentence = rawAnswer?.match(/^.+?[.!?](?=\s|$)/)?.[0]
                    const previewText = rawAnswer
                      ? (firstSentence ?? rawAnswer.split('.')[0] + '.')
                      : null
                    const levelKey = (article as any).educationalLevel
                    const levelLabel = EDUCATIONAL_LEVEL[levelKey]?.[lang] ?? levelKey
                    return (
                      <Link
                        key={slug}
                        href={href}
                        className="flex flex-col rounded-xl border border-primary/15 bg-card p-4 hover:border-primary/40 hover:bg-primary/5 hover:shadow-sm transition-all"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-semibold text-text-primary leading-snug line-clamp-2 flex-1">
                            {article.title}
                          </p>
                          {levelKey && (
                            <span className="shrink-0 text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary/80 font-medium">
                              {levelLabel}
                            </span>
                          )}
                        </div>
                        {previewText && (
                          <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mt-2">
                            {previewText}
                          </p>
                        )}
                      </Link>
                    )
                  })}
                </div>
                {DEEPDIVE_LINKS[lang][cat.titleEn] && (
                  <div>
                    <Link
                      href={DEEPDIVE_LINKS[lang][cat.titleEn].href}
                      className="inline-block text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-colors"
                    >
                      → {DEEPDIVE_LINKS[lang][cat.titleEn].text}
                    </Link>
                  </div>
                )}
              </section>
            )
          ))}
        </div>
      </div>
    </div>
  )
}
