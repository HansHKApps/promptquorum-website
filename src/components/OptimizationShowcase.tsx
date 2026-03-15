'use client'

import { useState } from 'react'

export function OptimizationShowcase() {
  const [expandedCollapsible, setExpandedCollapsible] = useState<string | null>('details')
  const [selectedVersion, setSelectedVersion] = useState('v3')

  const toggleCollapsible = (id: string) => {
    setExpandedCollapsible(expandedCollapsible === id ? null : id)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <a href="#" className="inline-flex items-center gap-1.5 text-gray-600 hover:text-purple-600 transition-colors text-sm font-medium mb-4">
          ← Back to Prompt
        </a>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">Optimization Results</h2>
          <p className="text-gray-600 text-sm">Review, refine, and optimize your prompt with AI assistance</p>
        </div>
      </div>

      {/* Original Prompt Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Original Prompt</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
          <div className="text-gray-600 whitespace-pre-wrap font-mono text-sm leading-relaxed">
            Explain the concept of prompt engineering to someone who has never heard of it before. Focus on practical examples and real-world applications.
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-600">Quality Score:</span>
          <div className="flex gap-1">
            <span className="text-yellow-600">★</span>
            <span className="text-yellow-600">★</span>
            <span className="text-yellow-600">★</span>
            <span className="text-gray-300">★</span>
            <span className="text-gray-300">★</span>
          </div>
          <button className="px-3 py-1 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Reassess
          </button>
        </div>
      </div>

      {/* Optimized Prompt Section */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimized Prompt</h3>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Version History</label>
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
              ↺ Undo
            </button>
            <button className="px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              ✏ Edit
            </button>
            <button className="px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              🔄 Undo Changes
            </button>
            <button className="px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              ✓ Copy
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
          <span className="block text-purple-600 font-semibold text-xs uppercase tracking-wider mb-2">📚 Teaching Explanation</span>
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
