'use client'

import { useState } from 'react'
import { AlertCircle, ChevronDown } from 'lucide-react'
import type { Lang } from '@/hooks/useLang'

type ShowcaseStrings = {
  title: string
  desc: string
  selectedProvider: string
  changeProvider: string
  selectFramework: string
  quickPrompt: string
  simpleDirect: string
  chainOfThought: string
  stepByStepReasoning: string
  fewShot: string
  examplesIncluded: string
  yourPrompt: string
  promptPlaceholder: string
  promptTip: string
  primaryProvider: string
  optimizePrompt: string
  compareFrameworks: string
  helpOptimize: string
  promptEngineeringBestPractices: string
  optimizationEngine: string
}

const translations: Record<Lang, ShowcaseStrings> = {
  en: {
    title: 'Prompt Optimizer',
    desc: 'Choose a framework, optimize your prompt, and compare across AI models',
    selectedProvider: 'Selected provider',
    changeProvider: 'Change provider',
    selectFramework: 'Select Framework',
    quickPrompt: 'Quick Prompt',
    simpleDirect: 'Simple & Direct',
    chainOfThought: 'Chain-of-Thought',
    stepByStepReasoning: 'Step-by-step reasoning',
    fewShot: 'Few-Shot',
    examplesIncluded: 'Examples included',
    yourPrompt: 'Your Prompt',
    promptPlaceholder: 'Enter your prompt here... Describe what you want the AI to do.',
    promptTip: 'Be specific about your requirements, context, and desired output format.',
    primaryProvider: 'Primary Provider',
    optimizePrompt: 'Optimize Prompt',
    compareFrameworks: 'Compare Frameworks',
    helpOptimize: 'Need help optimizing your prompt?',
    promptEngineeringBestPractices: 'View prompt engineering best practices',
    optimizationEngine: 'Optimization engine powered by',
  },
  es: {
    title: 'Optimizador de Prompts',
    desc: 'Elige un framework, optimiza tu prompt y compara entre modelos de IA',
    selectedProvider: 'Proveedor seleccionado',
    changeProvider: 'Cambiar proveedor',
    selectFramework: 'Selecciona un Framework',
    quickPrompt: 'Prompt Rápido',
    simpleDirect: 'Simple y Directo',
    chainOfThought: 'Cadena de Pensamiento',
    stepByStepReasoning: 'Razonamiento paso a paso',
    fewShot: 'Pocos Ejemplos',
    examplesIncluded: 'Ejemplos incluidos',
    yourPrompt: 'Tu Prompt',
    promptPlaceholder: 'Ingresa tu prompt aquí... Describe lo que quieres que haga la IA.',
    promptTip: 'Sé específico sobre tus requisitos, contexto y formato de salida deseado.',
    primaryProvider: 'Proveedor Principal',
    optimizePrompt: 'Optimizar Prompt',
    compareFrameworks: 'Comparar Frameworks',
    helpOptimize: '¿Necesitas ayuda para optimizar tu prompt?',
    promptEngineeringBestPractices: 'Ver mejores prácticas de prompt engineering',
    optimizationEngine: 'Motor de optimización impulsado por',
  },
  de: {
    title: 'Prompt-Optimierer',
    desc: 'Wählen Sie ein Framework, optimieren Sie Ihren Prompt und vergleichen Sie zwischen KI-Modellen',
    selectedProvider: 'Ausgewählter Anbieter',
    changeProvider: 'Anbieter wechseln',
    selectFramework: 'Framework wählen',
    quickPrompt: 'Schneller Prompt',
    simpleDirect: 'Einfach & Direkt',
    chainOfThought: 'Gedankenkette',
    stepByStepReasoning: 'Schrittweise Argumentation',
    fewShot: 'Wenige Beispiele',
    examplesIncluded: 'Beispiele enthalten',
    yourPrompt: 'Ihr Prompt',
    promptPlaceholder: 'Geben Sie Ihren Prompt hier ein... Beschreiben Sie, was die KI tun soll.',
    promptTip: 'Seien Sie konkret mit Ihren Anforderungen, dem Kontext und dem gewünschten Ausgabeformat.',
    primaryProvider: 'Primärer Anbieter',
    optimizePrompt: 'Prompt optimieren',
    compareFrameworks: 'Frameworks vergleichen',
    helpOptimize: 'Benötigen Sie Hilfe beim Optimieren Ihres Prompts?',
    promptEngineeringBestPractices: 'Beste Praktiken für Prompt Engineering ansehen',
    optimizationEngine: 'Optimierungsmaschine unterstützt von',
  },
  fr: {
    title: 'Optimiseur de Prompts',
    desc: 'Choisissez un framework, optimisez votre prompt et comparez entre modèles IA',
    selectedProvider: 'Fournisseur sélectionné',
    changeProvider: 'Changer le fournisseur',
    selectFramework: 'Sélectionner un Framework',
    quickPrompt: 'Prompt Rapide',
    simpleDirect: 'Simple & Direct',
    chainOfThought: 'Chaîne de Pensée',
    stepByStepReasoning: 'Raisonnement étape par étape',
    fewShot: 'Peu d\'Exemples',
    examplesIncluded: 'Exemples inclus',
    yourPrompt: 'Votre Prompt',
    promptPlaceholder: 'Entrez votre prompt ici... Décrivez ce que vous voulez que l\'IA fasse.',
    promptTip: 'Soyez spécifique sur vos exigences, contexte et format de sortie souhaité.',
    primaryProvider: 'Fournisseur Principal',
    optimizePrompt: 'Optimiser le Prompt',
    compareFrameworks: 'Comparer les Frameworks',
    helpOptimize: 'Besoin d\'aide pour optimiser votre prompt?',
    promptEngineeringBestPractices: 'Voir les meilleures pratiques d\'optimisation de prompt',
    optimizationEngine: 'Moteur d\'optimisation alimenté par',
  },
  ja: {
    title: 'プロンプト最適化ツール',
    desc: 'フレームワークを選択し、プロンプトを最適化し、AIモデルを比較してください',
    selectedProvider: '選択されたプロバイダー',
    changeProvider: 'プロバイダーを変更',
    selectFramework: 'フレームワークを選択',
    quickPrompt: 'クイックプロンプト',
    simpleDirect: 'シンプル＆ダイレクト',
    chainOfThought: 'チェーン・オブ・ソート',
    stepByStepReasoning: 'ステップバイステップの推論',
    fewShot: 'フューショット',
    examplesIncluded: '例を含む',
    yourPrompt: 'あなたのプロンプト',
    promptPlaceholder: 'ここにプロンプトを入力してください... AIに何をさせたいかを説明してください。',
    promptTip: '要件、コンテキスト、目的の出力形式について具体的にしてください。',
    primaryProvider: 'プライマリプロバイダー',
    optimizePrompt: 'プロンプトを最適化',
    compareFrameworks: 'フレームワークを比較',
    helpOptimize: 'プロンプトの最適化についてサポートが必要ですか?',
    promptEngineeringBestPractices: 'プロンプトエンジニアリングのベストプラクティスを表示',
    optimizationEngine: 'による最適化エンジン',
  },
  zh: {
    title: '提示词优化器',
    desc: '选择框架、优化提示词并在 AI 模型间比较',
    selectedProvider: '选定的提供商',
    changeProvider: '更换提供商',
    selectFramework: '选择框架',
    quickPrompt: '快速提示词',
    simpleDirect: '简单直接',
    chainOfThought: '思维链',
    stepByStepReasoning: '逐步推理',
    fewShot: '少样本',
    examplesIncluded: '包含示例',
    yourPrompt: '您的提示词',
    promptPlaceholder: '在此输入提示词...描述您希望 AI 执行的操作。',
    promptTip: '在您的要求、上下文和期望输出格式方面要具体。',
    primaryProvider: '主要提供商',
    optimizePrompt: '优化提示词',
    compareFrameworks: '比较框架',
    helpOptimize: '需要帮助来优化提示词吗？',
    promptEngineeringBestPractices: '查看提示词工程最佳实践',
    optimizationEngine: '由以下提供支持的优化引擎',
  },
  pt: {
    title: 'Otimizador de Prompts',
    desc: 'Escolha um framework, otimize seu prompt e compare modelos de IA',
    selectedProvider: 'Provedor selecionado',
    changeProvider: 'Alterar provedor',
    selectFramework: 'Selecionar Framework',
    quickPrompt: 'Prompt Rápido',
    simpleDirect: 'Simples e Direto',
    chainOfThought: 'Cadeia de Pensamento',
    stepByStepReasoning: 'Raciocínio passo a passo',
    fewShot: 'Poucos Exemplos',
    examplesIncluded: 'Exemplos inclusos',
    yourPrompt: 'Seu Prompt',
    promptPlaceholder: 'Digite seu prompt aqui... Descreva o que você quer que a IA faça.',
    promptTip: 'Seja específico sobre seus requisitos, contexto e formato de saída desejado.',
    primaryProvider: 'Provedor Principal',
    optimizePrompt: 'Otimizar Prompt',
    compareFrameworks: 'Comparar Frameworks',
    helpOptimize: 'Precisa de ajuda para otimizar seu prompt?',
    promptEngineeringBestPractices: 'Ver melhores práticas de engenharia de prompt',
    optimizationEngine: 'Mecanismo de otimização alimentado por',
  },
  ar: {
    title: 'محسِّن الطلبات',
    desc: 'اختر إطار عمل وحسِّن طلبك وقارن عبر نماذج الذكاء الاصطناعي',
    selectedProvider: 'المزود المختار',
    changeProvider: 'تغيير المزود',
    selectFramework: 'حدد إطار العمل',
    quickPrompt: 'طلب سريع',
    simpleDirect: 'بسيط وموجز',
    chainOfThought: 'سلسلة الأفكار',
    stepByStepReasoning: 'التفكير خطوة بخطوة',
    fewShot: 'أمثلة قليلة',
    examplesIncluded: 'تتضمن أمثلة',
    yourPrompt: 'طلبك',
    promptPlaceholder: 'أدخل طلبك هنا... وصف ما تريد من الذكاء الاصطناعي أن يفعله.',
    promptTip: 'كن محددًا بشأن متطلباتك والسياق وصيغة الإخراج المطلوبة.',
    primaryProvider: 'المزود الأساسي',
    optimizePrompt: 'حسِّن الطلب',
    compareFrameworks: 'قارن الأطر',
    helpOptimize: 'هل تحتاج إلى مساعدة في تحسين طلبك؟',
    promptEngineeringBestPractices: 'عرض أفضل الممارسات لهندسة الطلبات',
    optimizationEngine: 'محرك التحسين مدعوم من',
  },
}

export function PromptOptimizerShowcase({ lang = 'en' }: { lang?: Lang }) {
  const [framework, setFramework] = useState('quick-prompt')
  const [prompt, setPrompt] = useState('')
  const [provider, setProvider] = useState('gpt-4')
  const t = translations[lang] || translations.en

  const frameworks = [
    { id: 'quick-prompt', name: t.quickPrompt, description: t.simpleDirect },
    { id: 'cot', name: t.chainOfThought, description: t.stepByStepReasoning },
    { id: 'few-shot', name: t.fewShot, description: t.examplesIncluded },
  ]

  const providers = [
    { id: 'gpt-4', name: 'OpenAI GPT-4', icon: '🔵' },
    { id: 'claude', name: 'Claude 3', icon: '🟣' },
    { id: 'gemini', name: 'Google Gemini', icon: '🔴' },
  ]

  const currentFramework = frameworks.find(f => f.id === framework)
  const currentProvider = providers.find(p => p.id === provider)

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <h2 className="text-3xl font-bold text-text-primary mb-2">{t.title}</h2>
        <p className="text-lg text-text-secondary">
          {t.desc}
        </p>
      </div>

      {/* Alert: Provider Selection */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-900 mb-1">{t.selectedProvider}</p>
          <p className="text-sm text-blue-700">{currentProvider?.name}</p>
        </div>
        <button
          onClick={() => setProvider(provider === 'gpt-4' ? 'claude' : 'gpt-4')}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap"
        >
          {t.changeProvider}
        </button>
      </div>

      {/* Framework Selection */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-text-primary mb-3">
          {t.selectFramework}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {frameworks.map(f => (
            <button
              key={f.id}
              onClick={() => setFramework(f.id)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                framework === f.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <p className="font-semibold text-text-primary">{f.name}</p>
              <p className="text-sm text-text-secondary mt-1">{f.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Prompt Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-text-primary mb-2">
          {t.yourPrompt}
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={t.promptPlaceholder}
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
        />
        <p className="text-xs text-text-secondary mt-2">
          💡 <strong>Tip:</strong> {t.promptTip}
        </p>
      </div>

      {/* Provider Selection Dropdown */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-text-primary mb-2">
          {t.primaryProvider}
        </label>
        <div className="relative">
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer bg-white"
          >
            {providers.map(p => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => prompt && alert('Optimization started...')}
          className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!prompt.trim()}
        >
          {t.optimizePrompt}
        </button>
        <button
          className="px-6 py-3 border-2 border-gray-300 text-text-primary font-semibold rounded-lg hover:border-gray-400 transition-colors"
        >
          {t.compareFrameworks}
        </button>
      </div>

      {/* Help Text */}
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-text-secondary">
          📚 {t.helpOptimize}{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            {t.promptEngineeringBestPractices}
          </a>
        </p>
      </div>

      {/* Footer Alert */}
      <div className="mt-6 p-3 bg-gray-100 rounded text-xs text-text-secondary text-center">
        ⚙️ {t.optimizationEngine} {currentProvider?.name}
      </div>
    </div>
  )
}
