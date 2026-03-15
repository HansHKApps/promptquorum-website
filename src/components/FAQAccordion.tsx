'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "Is PromptQuorum free?",
    answer: "Yes. PromptQuorum is free to use. You can bring your own API key, use a local LLM, or try our limited free backend service for prompt optimization on a test basis.",
  },
  {
    question: "How does privacy work?",
    answer: "You decide where your data goes. Keep everything local with LM Studio or Ollama, or use your own API keys. PromptQuorum is as private as you set it up.",
  },
  {
    question: "Which AI providers are supported?",
    answer: "Over 25 AI providers are included, and you can add your own custom providers. Connect to ChatGPT, Claude, Gemini, and many more.",
  },
  {
    question: "What platforms does PromptQuorum run on?",
    answer: "PromptQuorum starts with desktop apps (Mac, Windows), followed by a web application, and eventually mobile solutions.",
  },
  {
    question: "What makes PromptQuorum different?",
    answer: "PromptQuorum is highly automated for prompt improvements, can send the same prompt to multiple AIs simultaneously, and analyzes results based on your criteria.",
  },
  {
    question: "Are there any limits?",
    answer: "No limits from PromptQuorum side. Your usage is only limited by your API keys or local LLM resources.",
  },
]

export function FAQAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
          >
            <h3 className="font-semibold text-gray-900">{faq.question}</h3>
            <span className={`text-gray-400 transition-transform flex-shrink-0 ${expandedIndex === index ? 'rotate-180' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>
          {expandedIndex === index && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
