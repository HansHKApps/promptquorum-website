'use client'

import { useState } from 'react'
import type { Lang } from '@/hooks/useLang'

type ShowcaseStrings = {
  quorumTitle: string
  quorumDesc: string
  collect: string
  analyze: string
  results: string
  step3AnalysisResults: string
  analysisComplete: string
  consensus: string
  differences: string
  qualityAssessmentLabel: string
  exportResults: string
  downloadSelectedFormats: string
  previous: string
  next: string
  saveToHistory: string
  startNewAnalysis: string
  clearSession: string
}

const translations = {
  en: {
    quorumTitle: 'Quorum — Multi-Model Consensus',
    quorumDesc: 'Collect responses from multiple LLMs, analyze patterns, and synthesize insights across models.',
    collect: 'Collect',
    analyze: 'Analyze',
    results: 'Results',
    step3AnalysisResults: 'Step 3: Analysis Results',
    analysisComplete: '✓ Analysis complete. Consensus and Differences patterns identified across 3 models.',
    consensus: 'Consensus',
    differences: 'Differences',
    qualityAssessmentLabel: 'Quality Assessment',
    exportResults: 'Export Results',
    downloadSelectedFormats: 'Download Selected Formats',
    previous: '← Previous',
    next: 'Next →',
    saveToHistory: 'Save to History',
    startNewAnalysis: 'Start New Analysis',
    clearSession: 'Clear Session',
  },
  es: {
    quorumTitle: 'Quorum — Consenso Multi-Modelo',
    quorumDesc: 'Recopila respuestas de múltiples LLMs, analiza patrones y sintetiza insights entre modelos.',
    collect: 'Recopilar',
    analyze: 'Analizar',
    results: 'Resultados',
    step3AnalysisResults: 'Paso 3: Resultados del Análisis',
    analysisComplete: '✓ Análisis completo. Patrones de Consenso y Diferencias identificados entre 3 modelos.',
    consensus: 'Consenso',
    differences: 'Diferencias',
    qualityAssessmentLabel: 'Evaluación de Calidad',
    exportResults: 'Exportar Resultados',
    downloadSelectedFormats: 'Descargar Formatos Seleccionados',
    previous: '← Anterior',
    next: 'Siguiente →',
    saveToHistory: 'Guardar en Historial',
    startNewAnalysis: 'Iniciar Nuevo Análisis',
    clearSession: 'Limpiar Sesión',
  },
  de: {
    quorumTitle: 'Quorum — Multi-Modell-Konsens',
    quorumDesc: 'Sammeln Sie Antworten von mehreren LLMs, analysieren Sie Muster und synthetisieren Sie Erkenntnisse zwischen Modellen.',
    collect: 'Erfassen',
    analyze: 'Analysieren',
    results: 'Ergebnisse',
    step3AnalysisResults: 'Schritt 3: Analyseergebnisse',
    analysisComplete: '✓ Analyse abgeschlossen. Konsens- und Differenzmuster über 3 Modelle hinweg identifiziert.',
    consensus: 'Konsens',
    differences: 'Unterschiede',
    qualityAssessmentLabel: 'Qualitätsbewertung',
    exportResults: 'Ergebnisse exportieren',
    downloadSelectedFormats: 'Ausgewählte Formate herunterladen',
    previous: '← Vorherige',
    next: 'Nächste →',
    saveToHistory: 'Im Verlauf speichern',
    startNewAnalysis: 'Neue Analyse starten',
    clearSession: 'Sitzung löschen',
  },
  fr: {
    quorumTitle: 'Quorum — Consensus Multi-Modèle',
    quorumDesc: 'Collectez les réponses de plusieurs LLM, analysez les modèles et synthétisez les insights entre les modèles.',
    collect: 'Collecter',
    analyze: 'Analyser',
    results: 'Résultats',
    step3AnalysisResults: 'Étape 3: Résultats de l\'Analyse',
    analysisComplete: '✓ Analyse complète. Modèles de Consensus et Différences identifiés sur 3 modèles.',
    consensus: 'Consensus',
    differences: 'Différences',
    qualityAssessmentLabel: 'Évaluation de la Qualité',
    exportResults: 'Exporter les Résultats',
    downloadSelectedFormats: 'Télécharger les Formats Sélectionnés',
    previous: '← Précédent',
    next: 'Suivant →',
    saveToHistory: 'Enregistrer dans l\'Historique',
    startNewAnalysis: 'Commencer une Nouvelle Analyse',
    clearSession: 'Effacer la Séance',
  },
  ja: {
    quorumTitle: 'クォーラム — マルチモデルコンセンサス',
    quorumDesc: '複数の LLM から回答を収集し、パターンを分析し、モデル間の洞察を合成します。',
    collect: '収集',
    analyze: '分析',
    results: '結果',
    step3AnalysisResults: 'ステップ 3: 分析結果',
    analysisComplete: '✓ 分析完了。3 つのモデル全体でコンセンサスと差異パターンが識別されました。',
    consensus: 'コンセンサス',
    differences: '相違点',
    qualityAssessmentLabel: '品質評価',
    exportResults: '結果をエクスポート',
    downloadSelectedFormats: '選択したフォーマットをダウンロード',
    previous: '← 前へ',
    next: '次へ →',
    saveToHistory: '履歴に保存',
    startNewAnalysis: '新しい分析を開始',
    clearSession: 'セッションをクリア',
  },
  zh: {
    quorumTitle: 'Quorum — 多模型共识',
    quorumDesc: '从多个 LLM 收集回答、分析模式并综合跨模型的洞察。',
    collect: '收集',
    analyze: '分析',
    results: '结果',
    step3AnalysisResults: '步骤 3：分析结果',
    analysisComplete: '✓ 分析完成。在 3 个模型中识别出共识和差异模式。',
    consensus: '共识',
    differences: '差异',
    qualityAssessmentLabel: '质量评估',
    exportResults: '导出结果',
    downloadSelectedFormats: '下载选定格式',
    previous: '← 上一步',
    next: '下一步 →',
    saveToHistory: '保存到历史记录',
    startNewAnalysis: '开始新分析',
    clearSession: '清除会话',
  },
  pt: {
    quorumTitle: 'Quorum — Consenso Multi-Modelo',
    quorumDesc: 'Colete respostas de vários LLMs, analise padrões e sintetize insights em modelos.',
    collect: 'Coletar',
    analyze: 'Analisar',
    results: 'Resultados',
    step3AnalysisResults: 'Etapa 3: Resultados da Análise',
    analysisComplete: '✓ Análise concluída. Padrões de Consenso e Diferenças identificados em 3 modelos.',
    consensus: 'Consenso',
    differences: 'Diferenças',
    qualityAssessmentLabel: 'Avaliação de Qualidade',
    exportResults: 'Exportar Resultados',
    downloadSelectedFormats: 'Baixar Formatos Selecionados',
    previous: '← Anterior',
    next: 'Próximo →',
    saveToHistory: 'Salvar no Histórico',
    startNewAnalysis: 'Iniciar Novo Análise',
    clearSession: 'Limpar Sessão',
  },
  ar: {
    quorumTitle: 'Quorum — إجماع متعدد النماذج',
    quorumDesc: 'اجمع الردود من عدة LLMs وحلل الأنماط وحسّن الرؤى عبر النماذج.',
    collect: 'جمع',
    analyze: 'تحليل',
    results: 'النتائج',
    step3AnalysisResults: 'الخطوة 3: نتائج التحليل',
    analysisComplete: '✓ اكتمل التحليل. تم تحديد أنماط الإجماع والفروقات عبر 3 نماذج.',
    consensus: 'الإجماع',
    differences: 'الفروقات',
    qualityAssessmentLabel: 'تقييم الجودة',
    exportResults: 'تصدير النتائج',
    downloadSelectedFormats: 'تنزيل التنسيقات المختارة',
    previous: '← السابق',
    next: 'التالي →',
    saveToHistory: 'حفظ في السجل',
    startNewAnalysis: 'بدء تحليل جديد',
    clearSession: 'مسح الجلسة',
  },
  ko: {
    quorumTitle: 'Quorum — 다중 모델 합의',
    quorumDesc: '여러 LLM의 응답을 수집하고, 패턴을 분석하며, 모델 전반의 인사이트를 개선하십시오.',
    collect: '수집',
    analyze: '분석',
    results: '결과',
    step3AnalysisResults: '3단계: 분석 결과',
    analysisComplete: '✓ 분석 완료. 3개 모델에서 합의 패턴과 차이점이 확인되었습니다.',
    consensus: '합의',
    differences: '차이점',
    qualityAssessmentLabel: '품질 평가',
    exportResults: '결과 내보내기',
    downloadSelectedFormats: '선택한 형식 다운로드',
    previous: '← 이전',
    next: '다음 →',
    saveToHistory: '기록에 저장',
    startNewAnalysis: '새 분석 시작',
    clearSession: '세션 지우기',
  },
}

export function QuorumShowcase({ lang = 'en' }: { lang?: Lang }) {
  const [checkedFormats, setCheckedFormats] = useState<string[]>(['txt', 'md'])
  const t = (translations as Partial<Record<Lang, ShowcaseStrings>>)[lang] || translations.en

  const toggleFormat = (format: string) => {
    setCheckedFormats(prev =>
      prev.includes(format) ? prev.filter(f => f !== format) : [...prev, format]
    )
  }

  const exportFormats = [
    { id: 'txt', label: '.txt' },
    { id: 'md', label: '.md' },
    { id: 'json', label: '.json' },
    { id: 'csv', label: '.csv' },
    { id: 'html', label: '.html' },
    { id: 'pdf', label: '.pdf' },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t.quorumTitle}</h2>
        <p className="text-gray-600">{t.quorumDesc}</p>
      </div>

      {/* Stepper */}
      <div className="flex gap-6 mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg overflow-x-auto">
        {[
          { num: '✓', label: t.collect, completed: true, active: false },
          { num: '✓', label: t.analyze, completed: true, active: false },
          { num: '3', label: t.results, completed: false, active: true },
        ].map((step, idx) => (
          <div key={idx} className="flex items-center gap-2 flex-shrink-0">
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold ${
                step.completed
                  ? 'bg-green-600 text-white'
                  : step.active
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-300 text-gray-700'
              }`}
            >
              {step.num}
            </div>
            <span className={`text-sm font-medium whitespace-nowrap ${step.active ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
              {step.label}
            </span>
            {idx < 2 && <div className={`w-8 h-0.5 ${step.completed ? 'bg-purple-600' : 'bg-gray-300'}`} />}
          </div>
        ))}
      </div>

      {/* Results Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 3: Analysis Results</h3>

        {/* Info Box */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-6 text-purple-900 text-sm">
          ✓ Analysis complete. Consensus and Differences patterns identified across 3 models.
        </div>

        {/* Analysis Results */}
        <div className="space-y-4 mb-8">
          {/* Consensus */}
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-900 rounded text-xs font-semibold uppercase tracking-wide mb-3">
              Consensus
            </div>
            <div className="font-mono text-sm text-gray-900 whitespace-pre-wrap leading-relaxed bg-white p-3 rounded border border-gray-200">
              {`SHARED THEMES ACROSS ALL MODELS:

1. CORE DEFINITION
   - All models agree: structuring input to get better LLM output
   - Common emphasis: clarity, specificity, instruction following

2. KEY BENEFIT
   - Saves time and improves response quality
   - Enables more advanced use cases
   - Critical skill for effective AI interaction

3. PRACTICAL APPROACH
   - Context and constraints matter
   - Breaking complex tasks into steps
   - Providing examples of desired output

CONFIDENCE: Very High (100% alignment on core concepts)`}
            </div>
          </div>

          {/* Differences */}
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-900 rounded text-xs font-semibold uppercase tracking-wide mb-3">
              Differences
            </div>
            <div className="font-mono text-sm text-gray-900 whitespace-pre-wrap leading-relaxed bg-white p-3 rounded border border-gray-200">
              {`VARIATIONS IN EMPHASIS:

OpenAI's GPT-4:
- Emphasized: "optimization" and refinement process
- Focus: Iterative improvement and testing

Anthropic's Claude:
- Emphasized: "understanding model interpretation"
- Focus: Theory of how models process language

Google's Gemini:
- Emphasized: "methodology for maximizing utility"
- Focus: Practical outcomes and ROI

OBSERVATION: Different models highlight their own strengths
- GPT-4 focuses on iteration (refiner's mindset)
- Claude focuses on understanding (teacher's mindset)
- Gemini focuses on outcomes (engineer's mindset)`}
            </div>
          </div>

          {/* Quality Assessment */}
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-900 rounded text-xs font-semibold uppercase tracking-wide mb-3">
              Quality Assessment
            </div>
            <div className="font-mono text-sm text-gray-900 whitespace-pre-wrap leading-relaxed bg-white p-3 rounded border border-gray-200">
              {`COMPARATIVE ANALYSIS:

DEPTH RANKING:
1. Anthropic (Claude) - Most thorough explanation of WHY, best for learning
2. OpenAI (GPT-4) - Most practical advice, best for doing
3. Google (Gemini) - Most concise, best for quick reference

COMPREHENSIVENESS:
- All three covered fundamentals adequately
- None mentioned advanced techniques (chain-of-thought, few-shot examples)
- All lacked concrete failure examples

TARGET AUDIENCE FIT:
- Beginner: Claude (most educational)
- Practitioner: GPT-4 (most actionable)
- Executive: Gemini (most concise)`}
            </div>
          </div>
        </div>

        {/* Export Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <div className="text-sm font-semibold text-gray-900 mb-3">Export Results</div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
            {exportFormats.map(format => (
              <label key={format.id} className="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={checkedFormats.includes(format.id)}
                  onChange={() => toggleFormat(format.id)}
                  className="w-4 h-4 accent-purple-600 cursor-pointer"
                />
                <span className="text-xs font-medium text-gray-700">{format.label}</span>
              </label>
            ))}
          </div>
          <button className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
            Download Selected Formats
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4 pt-6 border-t border-gray-200">
          <button className="px-6 py-2 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            ← Previous
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-400 cursor-not-allowed opacity-50" disabled>
            Next →
          </button>
        </div>
      </div>

      {/* Action Links */}
      <div className="text-center space-y-3">
        <div className="flex justify-center items-center gap-3 text-sm">
          <a href="#" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
            Save to History
          </a>
          <span className="text-gray-300">•</span>
          <a href="#" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
            Start New Analysis
          </a>
          <span className="text-gray-300">•</span>
          <a href="#" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
            Clear Session
          </a>
        </div>
      </div>
    </div>
  )
}
