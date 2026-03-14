import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

type Language = 'en' | 'de' | 'fr' | 'ja' | 'zh'

interface StageDetail {
  title: string
  what: string
  whyCool: string[]
  userBenefit: string[]
}

type StagesData = Record<Language, StageDetail[]>

const stagesData: StagesData = {
  en: [
    {
      title: 'Prompt',
      what: 'Input your rough idea or structured prompt using 8+ proven frameworks (CRAFT, CO-STAR, SPECS, RISEN, APE, TRACE, RTF, Google).',
      whyCool: [
        'You don\'t need to be perfect — rough ideas work',
        'Choose from frameworks to structure your thoughts automatically',
        'Start with just one sentence or a full structured prompt',
        'Instant feedback on whether you\'ve provided enough context'
      ],
      userBenefit: [
        '⚡ Lower barrier to entry (no prompt engineering experience needed)',
        '📋 Framework guidance ensures you capture all important details',
        '✓ Instant validation showing how complete your prompt is',
        '💡 Learn which framework works best for your use case'
      ]
    },
    {
      title: 'Optimize',
      what: 'AI analyzes your prompt and transforms it into a precision version using advanced optimization techniques, expanding context and clarifying intent.',
      whyCool: [
        'Automatic improvement without manual rewriting',
        'Shows you exactly what changed and why each change was made',
        'Multiple refinement options: make concise, expand detail, simplify, add specificity, etc.',
        'Quality scoring shows improvement percentage (0-100%)'
      ],
      userBenefit: [
        '⏱️ Save 30-60 minutes per prompt (vs manually rewriting)',
        '📚 Learn WHY your prompt works better (teaching mode)',
        '📈 Get quality scores and improvement tracking',
        '🔄 One-click refinements without starting over'
      ]
    },
    {
      title: 'Dispatch',
      what: 'Send your optimized prompt to ChatGPT, Claude, Gemini, and 25+ other AI models simultaneously with one click.',
      whyCool: [
        'One-click to send to multiple AIs (no tab switching)',
        'Get diverse perspectives — different models have different strengths',
        'Discover which AI is best for YOUR specific task',
        'Compare results from all models side-by-side'
      ],
      userBenefit: [
        '🚀 No more switching between ChatGPT, Claude, Gemini tabs',
        '🔍 Find hidden biases (single-model results can mislead)',
        '⚡ Speed up iteration (get 3-5 responses at once)',
        '🎯 Data-driven decision: which model performs best'
      ]
    },
    {
      title: 'Quorum',
      what: 'Compare all responses side-by-side. AI analyzes them to find consensus, contradictions, confidence levels, and automatically ranks the best answer.',
      whyCool: [
        'Reduce hallucinations (if all 3 models agree, it\'s probably true)',
        'Weighted voting system finds the best answer automatically',
        'Contradiction detection flags disagreements for your review',
        'Consensus extraction: synthesize best parts from each response'
      ],
      userBenefit: [
        '🛡️ 5-10x more confidence in results',
        '❌ Catch wrong information that single models would miss',
        '⏱️ Save time not reading all responses manually',
        '✨ Get a synthesized "best answer" automatically'
      ]
    }
  ],
  de: [
    {
      title: 'Prompt',
      what: 'Geben Sie Ihre rohe Idee oder strukturierten Prompt ein und nutzen Sie 8+ bewährte Frameworks (CRAFT, CO-STAR, SPECS, RISEN, APE, TRACE, RTF, Google).',
      whyCool: [
        'Sie müssen nicht perfekt sein — auch grobe Ideen funktionieren',
        'Wählen Sie aus Frameworks, um Ihre Gedanken automatisch zu strukturieren',
        'Beginnen Sie mit nur einem Satz oder mit einem vollständig strukturierten Prompt',
        'Sofortiges Feedback, ob Sie genug Kontext bereitgestellt haben'
      ],
      userBenefit: [
        '⚡ Niedrige Einstiegshürde (keine Prompt-Engineering-Erfahrung erforderlich)',
        '📋 Framework-Anleitung stellt sicher, dass Sie alle wichtigen Details erfassen',
        '✓ Sofortige Validierung zeigt, wie vollständig Ihr Prompt ist',
        '💡 Erfahren Sie, welches Framework für Ihren Use-Case am besten geeignet ist'
      ]
    },
    {
      title: 'Optimieren',
      what: 'KI analysiert Ihren Prompt und transformiert ihn mit fortgeschrittenen Optimierungstechniken in eine präzise Version.',
      whyCool: [
        'Automatische Verbesserung ohne manuelles Umschreiben',
        'Zeigt Ihnen genau, was sich geändert hat und warum',
        'Multiple Verfeinerungsoptionen: prägnanter, detaillierter, vereinfacht, spezifischer',
        'Qualitätsbewertung zeigt Verbesserungsprozentsatz (0-100%)'
      ],
      userBenefit: [
        '⏱️ Sparen Sie 30-60 Minuten pro Prompt (vs. manuelles Umschreiben)',
        '📚 Erfahren Sie WARUM Ihr Prompt besser funktioniert (Lernmodus)',
        '📈 Erhalten Sie Qualitätsbewertungen und Verbesserungsverfolgung',
        '🔄 One-Click-Verfeinerungen ohne von vorne anzufangen'
      ]
    },
    {
      title: 'Versenden',
      what: 'Senden Sie Ihren optimierten Prompt mit einem Klick an ChatGPT, Claude, Gemini und 25+ andere KI-Modelle gleichzeitig.',
      whyCool: [
        'One-Click zum Versenden an mehrere AIs (kein Tab-Wechsel)',
        'Erhalten Sie unterschiedliche Perspektiven — verschiedene Modelle haben unterschiedliche Stärken',
        'Entdecken Sie, welche KI am besten für Ihre Aufgabe geeignet ist',
        'Vergleichen Sie die Ergebnisse aller Modelle nebeneinander'
      ],
      userBenefit: [
        '🚀 Kein ständiges Wechseln zwischen ChatGPT, Claude, Gemini Tabs',
        '🔍 Entdecken Sie verborgene Verzerrungen (single-model results können irreführend sein)',
        '⚡ Beschleunigen Sie die Iteration (erhalten Sie 3-5 Antworten auf einmal)',
        '🎯 Datengestützte Entscheidung: Welches Modell funktioniert am besten'
      ]
    },
    {
      title: 'Quorum',
      what: 'Vergleichen Sie alle Antworten nebeneinander. KI analysiert sie, um Konsens, Widersprüche und Vertrauensstufen zu finden.',
      whyCool: [
        'Reduzieren Sie Halluzinationen (wenn alle 3 Modelle zustimmen, ist es wahrscheinlich wahr)',
        'Gewichtetes Abstimmungssystem findet automatisch die beste Antwort',
        'Widerspruchserkennung kennzeichnet Uneinigkeiten zur Überprüfung',
        'Konsensextraktion: Synthetisieren Sie beste Teile aus jeder Antwort'
      ],
      userBenefit: [
        '🛡️ 5-10x mehr Vertrauen in Ergebnisse',
        '❌ Fangen Sie falsche Informationen ab, die ein einzelnes Modell verpassen würde',
        '⏱️ Sparen Sie Zeit beim Lesen aller Antworten manuell',
        '✨ Erhalten Sie automatisch eine synthetisierte „beste Antwort"'
      ]
    }
  ],
  fr: [
    {
      title: 'Prompt',
      what: 'Entrez votre idée brute ou votre prompt structuré en utilisant 8+ frameworks éprouvés (CRAFT, CO-STAR, SPECS, RISEN, APE, TRACE, RTF, Google).',
      whyCool: [
        'Vous n\'avez pas besoin d\'être parfait — les idées brutes fonctionnent',
        'Choisissez parmi les frameworks pour structurer automatiquement vos pensées',
        'Commencez par une seule phrase ou un prompt complètement structuré',
        'Feedback instantané pour savoir si vous avez fourni suffisamment de contexte'
      ],
      userBenefit: [
        '⚡ Barrière à l\'entrée faible (aucune expérience en ingénierie des prompts requise)',
        '📋 Les conseils du framework garantissent que vous capturez tous les détails importants',
        '✓ Validation instantanée montrant la complétude de votre prompt',
        '💡 Apprenez quel framework fonctionne le mieux pour votre cas d\'usage'
      ]
    },
    {
      title: 'Optimiser',
      what: 'L\'IA analyse votre prompt et le transforme en version précise en utilisant des techniques d\'optimisation avancées.',
      whyCool: [
        'Amélioration automatique sans réécriture manuelle',
        'Montre exactement ce qui a changé et pourquoi chaque changement a été fait',
        'Multiple options de raffinement : concis, détaillé, simplifié, spécifique',
        'Score de qualité affichant le pourcentage d\'amélioration (0-100%)'
      ],
      userBenefit: [
        '⏱️ Économisez 30-60 minutes par prompt (vs réécriture manuelle)',
        '📚 Apprenez POURQUOI votre prompt fonctionne mieux (mode d\'enseignement)',
        '📈 Obtenez les scores de qualité et le suivi des améliorations',
        '🔄 Raffinements en un clic sans recommencer'
      ]
    },
    {
      title: 'Envoyer',
      what: 'Envoyez votre prompt optimisé à ChatGPT, Claude, Gemini et 25+ autres modèles IA simultanément en un seul clic.',
      whyCool: [
        'Un clic pour envoyer à plusieurs IA (pas de changement d\'onglet)',
        'Obtenez des perspectives diverses — les différents modèles ont des forces différentes',
        'Découvrez quel IA est le mieux adapté à votre tâche spécifique',
        'Comparez les résultats de tous les modèles côte à côte'
      ],
      userBenefit: [
        '🚀 Plus de changement constant entre les onglets ChatGPT, Claude, Gemini',
        '🔍 Trouvez les biais cachés (les résultats d\'un seul modèle peuvent être trompeurs)',
        '⚡ Accélérez l\'itération (obtenez 3-5 réponses à la fois)',
        '🎯 Décision basée sur les données : quel modèle fonctionne le mieux'
      ]
    },
    {
      title: 'Quorum',
      what: 'Comparez tous les résultats côte à côte. L\'IA les analyse pour trouver le consensus, les contradictions et les niveaux de confiance.',
      whyCool: [
        'Réduisez les hallucinations (si tous les 3 modèles sont d\'accord, c\'est probablement vrai)',
        'Système de vote pondéré trouvant automatiquement la meilleure réponse',
        'Détection des contradictions signalant les désaccords pour examen',
        'Extraction du consensus : synthétisez les meilleures parties de chaque réponse'
      ],
      userBenefit: [
        '🛡️ 5-10x plus de confiance dans les résultats',
        '❌ Attrapez les mauvaises informations qu\'un seul modèle manquerait',
        '⏱️ Économisez du temps en ne lisant pas toutes les réponses manuellement',
        '✨ Obtenez automatiquement une réponse « meilleure » synthétisée'
      ]
    }
  ],
  ja: [
    {
      title: 'プロンプト',
      what: '8つ以上の実証済みフレームワーク（CRAFT、CO-STAR、SPECS、RISEN、APE、TRACE、RTF、Google）を使用して、粗い考えまたは構造化されたプロンプトを入力します。',
      whyCool: [
        '完璧である必要はありません — 粗いアイデアでも機能します',
        'フレームワークから選択して、自動的に考えを構造化します',
        '1文またはまったく構造化されたプロンプトから始めます',
        '十分なコンテキストを提供したかどうかの即座フィードバック'
      ],
      userBenefit: [
        '⚡ 低い参入障壁（プロンプトエンジニアリングの経験は必要ありません）',
        '📋 フレームワークガイダンスはすべての重要な詳細をキャプチャします',
        '✓ プロンプトがどの程度完全であるかを示す即座検証',
        '💡 どのフレームワークがあなたのユースケースに最適かを学ぶ'
      ]
    },
    {
      title: '最適化',
      what: 'AIはあなたのプロンプトを分析し、高度な最適化技術を使用して正確なバージョンに変換します。',
      whyCool: [
        '手動での書き直しなしで自動改善',
        '何が変わったか、なぜ各変更がなされたかを正確に表示',
        '複数の改善オプション：簡潔、詳細、簡略化、特定',
        'クォリティスコアが改善パーセンテージを表示（0-100%）'
      ],
      userBenefit: [
        '⏱️ プロンプトあたり30-60分節約（手動書き直しと比較）',
        '📚 プロンプトがなぜより効果的に機能するかを学ぶ（教学モード）',
        '📈 品質スコアと改善追跡を取得',
        '🔄 最初からやり直さずにワンクリック改善'
      ]
    },
    {
      title: 'ディスパッチ',
      what: '最適化されたプロンプトをChatGPT、Claude、Gemini、および25以上の他のAIモデルに1クリックで同時に送信します。',
      whyCool: [
        '複数のAIに送信するワンクリック（タブ切り替えなし）',
        '多様な視点を取得 — 異なるモデルは異なる強みを持つ',
        'あなたの特定のタスクに最適なAIを発見',
        'すべてのモデルの結果を並べて比較'
      ],
      userBenefit: [
        '🚀 ChatGPT、Claude、Geminiタブ間の絶え間ない切り替えなし',
        '🔍 隠れたバイアスを見つける（単一モデルの結果は誤解を招く可能性があります）',
        '⚡ イテレーションを加速（一度に3-5の応答を取得）',
        '🎯 データ駆動型の決定：どのモデルが最高のパフォーマンスを発揮するか'
      ]
    },
    {
      title: 'クォーラム',
      what: 'すべての応答を並べて比較します。AIはそれらを分析して、コンセンサス、矛盾、および信頼レベルを検出します。',
      whyCool: [
        '幻覚を削減（すべての3つのモデルが同意する場合、それはおそらく本当です）',
        '加重投票システムが自動的に最良の答えを検出',
        '矛盾検出がレビュー用の不一致にフラグを立てる',
        'コンセンサス抽出：各応答の最良の部分を合成'
      ],
      userBenefit: [
        '🛡️ 結果への信頼が5-10倍',
        '❌ 単一モデルが見逃す間違った情報をキャッチ',
        '⏱️ すべての応答を手動で読むのに時間を節約',
        '✨ 合成された「最良の答え」を自動的に取得'
      ]
    }
  ],
  zh: [
    {
      title: '提示词',
      what: '使用8+种经过验证的框架（CRAFT、CO-STAR、SPECS、RISEN、APE、TRACE、RTF、Google）输入您的粗略想法或结构化提示词。',
      whyCool: [
        '您不需要完美——粗略的想法也能工作',
        '从框架中选择，自动构建您的想法',
        '从单句或完全结构化的提示词开始',
        '即时反馈，告诉您是否提供了足够的上下文'
      ],
      userBenefit: [
        '⚡ 进入门槛低（不需要提示工程经验）',
        '📋 框架指导确保您捕获所有重要细节',
        '✓ 即时验证显示您的提示词有多完整',
        '💡 了解哪个框架最适合您的用例'
      ]
    },
    {
      title: '优化',
      what: 'AI分析您的提示词，使用先进的优化技术将其转变为精确版本。',
      whyCool: [
        '无需手动重写的自动改进',
        '准确显示什么改变了以及为什么做出每项改变',
        '多种细化选项：简洁、详细、简化、特定',
        '质量评分显示改进百分比（0-100%）'
      ],
      userBenefit: [
        '⏱️ 每个提示词节省30-60分钟（与手动重写相比）',
        '📚 学习您的提示词为什么效果更好（教学模式）',
        '📈 获得质量评分和改进跟踪',
        '🔄 一键改进，无需重新开始'
      ]
    },
    {
      title: '派遣',
      what: '一次点击将优化的提示词同时发送到ChatGPT、Claude、Gemini和25+个其他AI模型。',
      whyCool: [
        '一键发送到多个AI（无需切换选项卡）',
        '获取多样的观点——不同的模型有不同的优势',
        '发现哪个AI最适合您的特定任务',
        '并排比较所有模型的结果'
      ],
      userBenefit: [
        '🚀 不再在ChatGPT、Claude、Gemini选项卡之间切换',
        '🔍 发现隐藏的偏见（单一模型的结果可能会误导）',
        '⚡ 加快迭代（一次获得3-5个响应）',
        '🎯 数据驱动的决策：哪个模型表现最好'
      ]
    },
    {
      title: '仲裁',
      what: '并排比较所有响应。AI分析它们以找到共识、矛盾和信心水平。',
      whyCool: [
        '减少幻觉（如果所有3个模型同意，很可能是真的）',
        '加权投票系统自动找到最佳答案',
        '矛盾检测标记分歧供审查',
        '共识提取：综合每个响应的最佳部分'
      ],
      userBenefit: [
        '🛡️ 结果信心提高5-10倍',
        '❌ 捕捉单一模型会错过的错误信息',
        '⏱️ 节省手动阅读所有响应的时间',
        '✨ 自动获得合成的"最佳答案"'
      ]
    }
  ]
}

const descriptionText: Record<Language, Record<number, string>> = {
  en: {
    0: 'Start with any idea, rough or refined',
    1: 'AI transforms it into a precision prompt',
    2: 'Send to multiple AIs at once',
    3: 'Compare results, find the best answer'
  },
  de: {
    0: 'Beginnen Sie mit jeder Idee, grob oder raffiniert',
    1: 'KI transformiert es in einen präzisen Prompt',
    2: 'An mehrere KIs gleichzeitig senden',
    3: 'Vergleichen Sie Ergebnisse, finden Sie die beste Antwort'
  },
  fr: {
    0: 'Commencez par n\'importe quelle idée, brute ou raffinée',
    1: 'L\'IA la transforme en prompt précis',
    2: 'Envoyer à plusieurs IA à la fois',
    3: 'Comparez les résultats, trouvez la meilleure réponse'
  },
  ja: {
    0: '任意のアイデアから始めます。粗いまたは洗練された',
    1: 'AIがそれを正確なプロンプトに変換',
    2: '複数のAIに同時に送信',
    3: '結果を比較して最良の答えを見つける'
  },
  zh: {
    0: '从任何想法开始，粗略或精致',
    1: 'AI将其转换为精确的提示词',
    2: '同时发送到多个AI',
    3: '比较结果，找到最佳答案'
  }
}

export function InteractivePipeline() {
  const [searchParams] = useSearchParams()
  const lang = (searchParams.get('lang') || 'en') as Language
  const stages = stagesData[lang] || stagesData['en']
  const [expandedStage, setExpandedStage] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {/* Pipeline Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
        {stages.map((stage, index) => (
          <button
            key={index}
            onClick={() => setExpandedStage(expandedStage === index ? null : index)}
            className={`text-center px-4 py-5 sm:p-6 rounded-xl border-2 transition-all cursor-pointer transform hover:scale-105 ${
              expandedStage === index
                ? 'bg-primary/10 border-primary shadow-lg'
                : 'bg-white border-gray-200 hover:border-primary/50'
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center mx-auto mb-4">
              {index + 1}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-2">{stage.title}</h3>
            <p className="text-text-secondary text-xs sm:text-sm mb-3">
              {descriptionText[lang][index]}
            </p>
            <div className="flex items-center justify-center text-primary text-sm font-medium">
              {expandedStage === index ? 'Hide details' : 'Show details'}
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${expandedStage === index ? 'rotate-180' : ''}`} />
            </div>
          </button>
        ))}
      </div>

      {/* Expanded Details */}
      {expandedStage !== null && (
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-text-primary mb-4">
                Stage {expandedStage + 1}: {stages[expandedStage].title}
              </h3>
              <p className="text-lg text-text-secondary mb-6">
                {stages[expandedStage].what}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Why It's Cool */}
              <div>
                <h4 className="text-xl font-bold text-primary mb-4">✨ Why It's Cool</h4>
                <ul className="space-y-3">
                  {stages[expandedStage].whyCool.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-text-secondary">
                      <span className="text-primary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* User Benefits */}
              <div>
                <h4 className="text-xl font-bold text-primary mb-4">🎯 User Benefits</h4>
                <ul className="space-y-3">
                  {stages[expandedStage].userBenefit.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-text-secondary">
                      <span className="text-primary font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Real Example */}
            <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold text-text-primary mb-3">📝 Real Example</h4>
              {expandedStage === 0 && (
                <p className="text-text-secondary">
                  <strong>Input:</strong> "I need to write marketing copy for our new app"<br />
                  <strong>Using CRAFT:</strong> You'd specify Context (product details), Role (expert copywriter), Action (write email), Format (bullet list), Target (busy founders). This structured input leads to much better results.
                </p>
              )}
              {expandedStage === 1 && (
                <p className="text-text-secondary">
                  <strong>Before optimization:</strong> "Write marketing copy for our app"<br />
                  <strong>After optimization:</strong> "As an expert SaaS copywriter, write 5 compelling email subject lines for a productivity app targeting busy freelancers aged 25-45. Each line should emphasize time-saving and ease of use. Format as a numbered list with 1-sentence reasoning for each."<br />
                  <strong>Quality score:</strong> 42% → 87% (+45% improvement)
                </p>
              )}
              {expandedStage === 2 && (
                <p className="text-text-secondary">
                  <strong>One click sends to:</strong> ChatGPT, Claude, Gemini, DeepSeek, Perplexity, plus 25+ other models<br />
                  <strong>You get:</strong> 5-7 different responses, each optimized for that AI's strengths<br />
                  <strong>Result:</strong> ChatGPT is most creative, Claude is most thorough, Gemini has best images
                </p>
              )}
              {expandedStage === 3 && (
                <p className="text-text-secondary">
                  <strong>Input:</strong> Paste responses from ChatGPT, Claude, Gemini<br />
                  <strong>Quorum analyzes:</strong> All 3 models agree on core benefits ✅ | Model B has hallucination ❌ | Model C has best examples ✨<br />
                  <strong>Output:</strong> Synthesized "best answer" combining strengths + flagging disagreements for review
                </p>
              )}
            </div>

            {/* Close Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setExpandedStage(null)}
                className="px-6 py-2 bg-white border border-gray-200 rounded-lg text-text-secondary hover:border-primary hover:text-primary transition-colors"
              >
                Close details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
