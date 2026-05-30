'use client'

import { useState } from 'react'
import type { Lang } from '@/hooks/useLang'

type ShowcaseStrings = {
  backToPrompt: string
  optimizationResults: string
  reviewRefine: string
  originalPrompt: string
  qualityScore: string
  reassess: string
  optimizedPrompt: string
  versionHistory: string
  undo: string
  edit: string
  undoChanges: string
  copy: string
  teachingExplanation: string
  quickRefinements: string
  makeConcise: string
  addExamples: string
  improveClarity: string
  expandDetail: string
  simplify: string
  makeProfessional: string
  qualityAssessment: string
  currentQuality: string
  assessQuality: string
  showDetails: string
  showSuggestions: string
  qualityDetails: string
  strengths: string
  areasForImprovement: string
  improvementSuggestions: string
  saveToHistory: string
  dispatchToMultipleLLMs: string
  exportAsPDF: string
}

const translations: Record<Lang, ShowcaseStrings> = {
  en: {
    backToPrompt: '← Back to Prompt',
    optimizationResults: 'Optimization Results',
    reviewRefine: 'Review, refine, and optimize your prompt with AI assistance',
    originalPrompt: 'Original Prompt',
    qualityScore: 'Quality Score:',
    reassess: 'Reassess',
    optimizedPrompt: 'Optimized Prompt',
    versionHistory: 'Version History',
    undo: '↺ Undo',
    edit: '✏ Edit',
    undoChanges: '🔄 Undo Changes',
    copy: '✓ Copy',
    teachingExplanation: '📚 Teaching Explanation',
    quickRefinements: 'Quick Refinements',
    makeConcise: 'Make Concise',
    addExamples: 'Add Examples',
    improveClarity: 'Improve Clarity',
    expandDetail: 'Expand Detail',
    simplify: 'Simplify',
    makeProfessional: 'Make Professional',
    qualityAssessment: 'Quality Assessment',
    currentQuality: 'Current Quality:',
    assessQuality: 'Assess Quality',
    showDetails: '▼ Show Details',
    showSuggestions: '▼ Show Suggestions',
    qualityDetails: 'Quality Details',
    strengths: 'Strengths:',
    areasForImprovement: 'Areas for Improvement:',
    improvementSuggestions: 'Improvement Suggestions (3)',
    saveToHistory: 'Save to History',
    dispatchToMultipleLLMs: 'Dispatch to Multiple LLMs',
    exportAsPDF: 'Export as PDF',
  },
  es: {
    backToPrompt: '← Volver al Prompt',
    optimizationResults: 'Resultados de Optimización',
    reviewRefine: 'Revisa, refina y optimiza tu prompt con asistencia de IA',
    originalPrompt: 'Prompt Original',
    qualityScore: 'Puntuación de Calidad:',
    reassess: 'Reevaluar',
    optimizedPrompt: 'Prompt Optimizado',
    versionHistory: 'Historial de Versiones',
    undo: '↺ Deshacer',
    edit: '✏ Editar',
    undoChanges: '🔄 Deshacer Cambios',
    copy: '✓ Copiar',
    teachingExplanation: '📚 Explicación Educativa',
    quickRefinements: 'Refinamientos Rápidos',
    makeConcise: 'Hacer Conciso',
    addExamples: 'Agregar Ejemplos',
    improveClarity: 'Mejorar Claridad',
    expandDetail: 'Expandir Detalle',
    simplify: 'Simplificar',
    makeProfessional: 'Hacer Profesional',
    qualityAssessment: 'Evaluación de Calidad',
    currentQuality: 'Calidad Actual:',
    assessQuality: 'Evaluar Calidad',
    showDetails: '▼ Mostrar Detalles',
    showSuggestions: '▼ Mostrar Sugerencias',
    qualityDetails: 'Detalles de Calidad',
    strengths: 'Fortalezas:',
    areasForImprovement: 'Áreas de Mejora:',
    improvementSuggestions: 'Sugerencias de Mejora (3)',
    saveToHistory: 'Guardar en Historial',
    dispatchToMultipleLLMs: 'Enviar a Múltiples LLMs',
    exportAsPDF: 'Exportar como PDF',
  },
  de: {
    backToPrompt: '← Zurück zum Prompt',
    optimizationResults: 'Optimierungsergebnisse',
    reviewRefine: 'Überprüfen, verfeinern und optimieren Sie Ihren Prompt mit KI-Unterstützung',
    originalPrompt: 'Originaler Prompt',
    qualityScore: 'Qualitätsbewertung:',
    reassess: 'Neu bewerten',
    optimizedPrompt: 'Optimierter Prompt',
    versionHistory: 'Versionsverlauf',
    undo: '↺ Rückgängig',
    edit: '✏ Bearbeiten',
    undoChanges: '🔄 Änderungen rückgängig',
    copy: '✓ Kopieren',
    teachingExplanation: '📚 Lehrerklärung',
    quickRefinements: 'Schnelle Verbesserungen',
    makeConcise: 'Prägnant machen',
    addExamples: 'Beispiele hinzufügen',
    improveClarity: 'Klarheit verbessern',
    expandDetail: 'Details erweitern',
    simplify: 'Vereinfachen',
    makeProfessional: 'Professionell machen',
    qualityAssessment: 'Qualitätsbewertung',
    currentQuality: 'Aktuelle Qualität:',
    assessQuality: 'Qualität bewerten',
    showDetails: '▼ Details anzeigen',
    showSuggestions: '▼ Vorschläge anzeigen',
    qualityDetails: 'Qualitätsdetails',
    strengths: 'Stärken:',
    areasForImprovement: 'Verbesserungsbereiche:',
    improvementSuggestions: 'Verbesserungsvorschläge (3)',
    saveToHistory: 'Im Verlauf speichern',
    dispatchToMultipleLLMs: 'An mehrere LLMs senden',
    exportAsPDF: 'Als PDF exportieren',
  },
  fr: {
    backToPrompt: '← Retour au Prompt',
    optimizationResults: 'Résultats d\'optimisation',
    reviewRefine: 'Passez en revue, affinez et optimisez votre prompt avec l\'assistance de l\'IA',
    originalPrompt: 'Prompt Original',
    qualityScore: 'Score de Qualité:',
    reassess: 'Réévaluer',
    optimizedPrompt: 'Prompt Optimisé',
    versionHistory: 'Historique des Versions',
    undo: '↺ Annuler',
    edit: '✏ Modifier',
    undoChanges: '🔄 Annuler les Modifications',
    copy: '✓ Copier',
    teachingExplanation: '📚 Explication Pédagogique',
    quickRefinements: 'Affinements Rapides',
    makeConcise: 'Rendre Concis',
    addExamples: 'Ajouter des Exemples',
    improveClarity: 'Améliorer la Clarté',
    expandDetail: 'Développer les Détails',
    simplify: 'Simplifier',
    makeProfessional: 'Rendre Professionnel',
    qualityAssessment: 'Évaluation de la Qualité',
    currentQuality: 'Qualité Actuelle:',
    assessQuality: 'Évaluer la Qualité',
    showDetails: '▼ Afficher les Détails',
    showSuggestions: '▼ Afficher les Suggestions',
    qualityDetails: 'Détails de Qualité',
    strengths: 'Forces:',
    areasForImprovement: 'Domaines à Améliorer:',
    improvementSuggestions: 'Suggestions d\'Amélioration (3)',
    saveToHistory: 'Enregistrer dans l\'Historique',
    dispatchToMultipleLLMs: 'Envoyer à plusieurs LLM',
    exportAsPDF: 'Exporter en PDF',
  },
  ja: {
    backToPrompt: '← プロンプトに戻る',
    optimizationResults: '最適化結果',
    reviewRefine: 'AIアシスタンスを使用してプロンプトを確認、調整、最適化します',
    originalPrompt: '元のプロンプト',
    qualityScore: '品質スコア:',
    reassess: '再評価',
    optimizedPrompt: '最適化されたプロンプト',
    versionHistory: 'バージョン履歴',
    undo: '↺ 元に戻す',
    edit: '✏ 編集',
    undoChanges: '🔄 変更を元に戻す',
    copy: '✓ コピー',
    teachingExplanation: '📚 教育的説明',
    quickRefinements: 'クイック調整',
    makeConcise: '簡潔にする',
    addExamples: '例を追加',
    improveClarity: '明確さを改善',
    expandDetail: '詳細を拡張',
    simplify: '簡略化',
    makeProfessional: 'プロフェッショナルにする',
    qualityAssessment: '品質評価',
    currentQuality: '現在の品質:',
    assessQuality: '品質を評価',
    showDetails: '▼ 詳細を表示',
    showSuggestions: '▼ 提案を表示',
    qualityDetails: '品質の詳細',
    strengths: '強み:',
    areasForImprovement: '改善すべき点:',
    improvementSuggestions: '改善提案 (3)',
    saveToHistory: '履歴に保存',
    dispatchToMultipleLLMs: '複数の LLM に送信',
    exportAsPDF: 'PDF としてエクスポート',
  },
  zh: {
    backToPrompt: '← 返回提示词',
    optimizationResults: '优化结果',
    reviewRefine: '通过人工智能协助查看、调整和优化您的提示词',
    originalPrompt: '原始提示词',
    qualityScore: '质量分数:',
    reassess: '重新评估',
    optimizedPrompt: '优化的提示词',
    versionHistory: '版本历史',
    undo: '↺ 撤销',
    edit: '✏ 编辑',
    undoChanges: '🔄 撤销更改',
    copy: '✓ 复制',
    teachingExplanation: '📚 教学说明',
    quickRefinements: '快速微调',
    makeConcise: '简化',
    addExamples: '添加示例',
    improveClarity: '改善清晰度',
    expandDetail: '扩展细节',
    simplify: '简化',
    makeProfessional: '使其专业化',
    qualityAssessment: '质量评估',
    currentQuality: '当前质量:',
    assessQuality: '评估质量',
    showDetails: '▼ 显示详情',
    showSuggestions: '▼ 显示建议',
    qualityDetails: '质量详情',
    strengths: '优势:',
    areasForImprovement: '改进领域:',
    improvementSuggestions: '改进建议 (3)',
    saveToHistory: '保存到历史记录',
    dispatchToMultipleLLMs: '分发到多个 LLM',
    exportAsPDF: '导出为 PDF',
  },
  pt: {
    backToPrompt: '← Voltar ao Prompt',
    optimizationResults: 'Resultados de Otimização',
    reviewRefine: 'Revise, refine e otimize seu prompt com assistência de IA',
    originalPrompt: 'Prompt Original',
    qualityScore: 'Pontuação de Qualidade:',
    reassess: 'Reavaliar',
    optimizedPrompt: 'Prompt Otimizado',
    versionHistory: 'Histórico de Versões',
    undo: '↺ Desfazer',
    edit: '✏ Editar',
    undoChanges: '🔄 Desfazer Alterações',
    copy: '✓ Copiar',
    teachingExplanation: '📚 Explicação Pedagógica',
    quickRefinements: 'Refinamentos Rápidos',
    makeConcise: 'Tornar Conciso',
    addExamples: 'Adicionar Exemplos',
    improveClarity: 'Melhorar Clareza',
    expandDetail: 'Expandir Detalhes',
    simplify: 'Simplificar',
    makeProfessional: 'Tornar Profissional',
    qualityAssessment: 'Avaliação de Qualidade',
    currentQuality: 'Qualidade Atual:',
    assessQuality: 'Avaliar Qualidade',
    showDetails: '▼ Mostrar Detalhes',
    showSuggestions: '▼ Mostrar Sugestões',
    qualityDetails: 'Detalhes de Qualidade',
    strengths: 'Forças:',
    areasForImprovement: 'Áreas de Melhoria:',
    improvementSuggestions: 'Sugestões de Melhoria (3)',
    saveToHistory: 'Salvar no Histórico',
    dispatchToMultipleLLMs: 'Enviar para Múltiplos LLMs',
    exportAsPDF: 'Exportar como PDF',
  },
  ar: {
    backToPrompt: '← العودة إلى الطلب',
    optimizationResults: 'نتائج التحسين',
    reviewRefine: 'مراجعة وتحسين وتحسين طلبك بمساعدة الذكاء الاصطناعي',
    originalPrompt: 'الطلب الأصلي',
    qualityScore: 'درجة الجودة:',
    reassess: 'إعادة التقييم',
    optimizedPrompt: 'الطلب المحسّن',
    versionHistory: 'سجل الإصدارات',
    undo: '↺ تراجع',
    edit: '✏ تحرير',
    undoChanges: '🔄 التراجع عن التغييرات',
    copy: '✓ نسخ',
    teachingExplanation: '📚 الشرح التعليمي',
    quickRefinements: 'التحسينات السريعة',
    makeConcise: 'اجعلها موجزة',
    addExamples: 'إضافة أمثلة',
    improveClarity: 'تحسين الوضوح',
    expandDetail: 'توسيع التفاصيل',
    simplify: 'تبسيط',
    makeProfessional: 'اجعلها احترافية',
    qualityAssessment: 'تقييم الجودة',
    currentQuality: 'الجودة الحالية:',
    assessQuality: 'تقييم الجودة',
    showDetails: '▼ إظهار التفاصيل',
    showSuggestions: '▼ إظهار الاقتراحات',
    qualityDetails: 'تفاصيل الجودة',
    strengths: 'نقاط القوة:',
    areasForImprovement: 'مجالات التحسين:',
    improvementSuggestions: 'اقتراحات التحسين (3)',
    saveToHistory: 'الحفظ في السجل',
    dispatchToMultipleLLMs: 'إرسال إلى LLM متعددة',
    exportAsPDF: 'تصدير كـ PDF',
  },
}

export function OptimizationShowcase({ lang = 'en' }: { lang?: Lang }) {
  const [expandedCollapsible, setExpandedCollapsible] = useState<string | null>('details')
  const [selectedVersion, setSelectedVersion] = useState('v3')
  const t = translations[lang] || translations.en

  const toggleCollapsible = (id: string) => {
    setExpandedCollapsible(expandedCollapsible === id ? null : id)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <a href="#" className="inline-flex items-center gap-1.5 text-gray-600 hover:text-purple-600 transition-colors text-sm font-medium mb-4">
          {t.backToPrompt}
        </a>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">{t.optimizationResults}</h2>
          <p className="text-gray-600 text-sm">{t.reviewRefine}</p>
        </div>
      </div>

      {/* Original Prompt Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.originalPrompt}</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
          <div className="text-gray-600 whitespace-pre-wrap font-mono text-sm leading-relaxed">
            Explain the concept of prompt engineering to someone who has never heard of it before. Focus on practical examples and real-world applications.
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-600">{t.qualityScore}</span>
          <div className="flex gap-1">
            <span className="text-yellow-600">★</span>
            <span className="text-yellow-600">★</span>
            <span className="text-yellow-600">★</span>
            <span className="text-gray-300">★</span>
            <span className="text-gray-300">★</span>
          </div>
          <button className="px-3 py-1 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            {t.reassess}
          </button>
        </div>
      </div>

      {/* Optimized Prompt Section */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.optimizedPrompt}</h3>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{t.versionHistory}</label>
              <select
                value={selectedVersion}
                onChange={(e) => setSelectedVersion(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm hover:border-purple-600 transition-colors cursor-pointer"
              >
                <option value="v3">v3 — Make More Concise (12:37) ✓</option>
                <option value="v2">v2 — Improve Clarity (12:35)</option>
                <option value="v1">v1 — Initial (12:32)</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap justify-end">
            <button className="px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              {t.undo}
            </button>
            <button className="px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              {t.edit}
            </button>
            <button className="px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              {t.undoChanges}
            </button>
            <button className="px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              {t.copy}
            </button>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <div className="text-gray-900 whitespace-pre-wrap font-mono text-sm leading-relaxed">
            {`Explain prompt engineering to beginners through:

1. DEFINITION: A technique for structuring AI requests to get better, more accurate responses

2. KEY CONCEPT: "How you ask matters as much as what you ask"
   - Vague prompts → generic responses
   - Specific, well-structured prompts → tailored, useful answers

3. REAL-WORLD EXAMPLES:
   ✗ Bad: "Tell me about AI"
   ✓ Good: "Explain how large language models work in 3 paragraphs, with one example of practical application"

4. PRACTICAL TECHNIQUES:
   • Be specific about context and constraints
   • Break complex requests into steps
   • Provide examples of desired output
   • Ask the AI to think through its reasoning

5. WHY IT MATTERS: Saves time, improves accuracy, enables advanced AI use cases

End with: "You're already doing prompt engineering—now do it better."`}
          </div>
        </div>

        {/* Teaching Explanation */}
        <div className="bg-blue-50 border-l-3 border-purple-600 border border-purple-200 rounded-lg p-4 mb-4">
          <span className="block text-purple-600 font-semibold text-xs uppercase tracking-wider mb-2">📚 {t.teachingExplanation}</span>
          <div className="text-gray-900 text-sm leading-relaxed whitespace-pre-wrap">
            Prompt engineering is the practice of carefully structuring your requests to an AI to get the most useful, accurate, and relevant responses. Think of it as learning the "language" that AI models understand best. The better you explain what you want, the better results you'll get—just like talking to a person, but with explicit clarity about structure, examples, and constraints.
          </div>
        </div>
      </div>

      {/* Quick Refinements Panel */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
        <div className="text-sm font-semibold text-gray-900 mb-3">Quick Refinements</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {['Make Concise', 'Add Examples', 'Improve Clarity', 'Expand Detail', 'Simplify', 'Make Professional'].map((btn) => (
            <button
              key={btn}
              className="px-3 py-2 text-xs font-medium border border-gray-300 rounded-lg bg-white hover:border-purple-600 hover:bg-purple-50 transition-colors"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Quality Assessment Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quality Assessment</h3>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-600">Current Quality:</span>
            <div className="flex gap-1">
              <span className="text-yellow-600">★</span>
              <span className="text-yellow-600">★</span>
              <span className="text-yellow-600">★</span>
              <span className="text-yellow-600">★</span>
              <span className="text-gray-300">★</span>
            </div>
          </div>
          <button className="px-4 py-2 text-sm font-semibold bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Assess Quality
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => toggleCollapsible('details')}
            className="px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            ▼ Show Details
          </button>
          <button
            onClick={() => toggleCollapsible('suggestions')}
            className="px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            ▼ Show Suggestions
          </button>
        </div>

        {/* Quality Details Collapsible */}
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
          <button
            onClick={() => toggleCollapsible('details')}
            className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="text-sm font-semibold text-gray-900">Quality Details</span>
            <span className={`text-lg text-gray-600 transition-transform ${expandedCollapsible === 'details' ? 'rotate-180' : ''}`}>▼</span>
          </button>
          {expandedCollapsible === 'details' && (
            <div className="p-4 border-t border-gray-200">
              <strong className="text-gray-900">Strengths:</strong>
              <ul className="my-2 ml-4 text-sm text-gray-700 space-y-1">
                <li>• Clear structure with numbered sections</li>
                <li>• Concrete examples provided for beginners</li>
                <li>• Actionable techniques listed</li>
                <li>• Good use of formatting (bullets, emphasis)</li>
              </ul>

              <strong className="block text-gray-900 mt-4 mb-2">Areas for Improvement:</strong>
              <ul className="ml-4 text-sm text-gray-700 space-y-1">
                <li>• Could include more diverse examples</li>
                <li>• Interactive elements would enhance engagement</li>
                <li>• Transition between sections could be smoother</li>
              </ul>
            </div>
          )}
        </div>

        {/* Improvement Suggestions Collapsible */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleCollapsible('suggestions')}
            className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="text-sm font-semibold text-gray-900">Improvement Suggestions (3)</span>
            <span className={`text-lg text-gray-600 transition-transform ${expandedCollapsible === 'suggestions' ? 'rotate-180' : ''}`}>▼</span>
          </button>
          {expandedCollapsible === 'suggestions' && (
            <div className="p-4 border-t border-gray-200">
              <p className="text-sm text-gray-700 mb-3">Click a suggestion to apply it:</p>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <span className="flex-shrink-0">1.</span>
                  <div className="flex-grow">
                    <strong>Add analogies:</strong> Include comparisons to familiar concepts (e.g., "like writing instructions for a very literal-minded assistant")
                    <button className="ml-3 px-3 py-1 text-xs font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Apply</button>
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <span className="flex-shrink-0">2.</span>
                  <div className="flex-grow">
                    <strong>Expand use cases:</strong> Add 2-3 industry-specific examples (customer service, content creation, data analysis)
                    <button className="ml-3 px-3 py-1 text-xs font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Apply</button>
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <span className="flex-shrink-0">3.</span>
                  <div className="flex-grow">
                    <strong>Add interactive element:</strong> End with "Try it yourself: Write a prompt that teaches the AI to explain [topic] to [audience]"
                    <button className="ml-3 px-3 py-1 text-xs font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Apply</button>
                  </div>
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
        <button className="px-6 py-2 font-semibold bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Save to History
        </button>
        <button className="px-6 py-2 font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Dispatch to Multiple LLMs
        </button>
        <button className="px-6 py-2 font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Export as PDF
        </button>
      </div>
    </div>
  )
}
