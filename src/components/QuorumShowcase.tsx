'use client'

import { useState } from 'react'

export function QuorumShowcase() {
  const [checkedFormats, setCheckedFormats] = useState<string[]>(['txt', 'md'])

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
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Quorum — Multi-Model Consensus</h2>
        <p className="text-gray-600">Collect responses from multiple LLMs, analyze patterns, and synthesize insights across models.</p>
      </div>

      {/* Stepper */}
      <div className="flex gap-6 mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg overflow-x-auto">
        {[
          { num: '✓', label: 'Collect', completed: true, active: false },
          { num: '✓', label: 'Analyze', completed: true, active: false },
          { num: '3', label: 'Results', completed: false, active: true },
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
