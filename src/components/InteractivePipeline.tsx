import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface StageDetail {
  title: string
  what: string
  whyCool: string[]
  userBenefit: string[]
}

const stages: StageDetail[] = [
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
]

export function InteractivePipeline() {
  const [expandedStage, setExpandedStage] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {/* Pipeline Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {stages.map((stage, index) => (
          <button
            key={index}
            onClick={() => setExpandedStage(expandedStage === index ? null : index)}
            className={`text-center p-6 rounded-xl border-2 transition-all cursor-pointer transform hover:scale-105 ${
              expandedStage === index
                ? 'bg-primary/10 border-primary shadow-lg'
                : 'bg-white border-gray-200 hover:border-primary/50'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mx-auto mb-4">
              {index + 1}
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">{stage.title}</h3>
            <p className="text-text-secondary text-sm mb-3">
              {index === 0 && 'Start with any idea, rough or refined'}
              {index === 1 && 'AI transforms it into a precision prompt'}
              {index === 2 && 'Send to multiple AIs at once'}
              {index === 3 && 'Compare results, find the best answer'}
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
