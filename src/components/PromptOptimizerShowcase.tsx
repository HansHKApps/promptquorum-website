'use client'

import { useState } from 'react'
import { AlertCircle, ChevronDown } from 'lucide-react'

export function PromptOptimizerShowcase() {
  const [framework, setFramework] = useState('quick-prompt')
  const [prompt, setPrompt] = useState('')
  const [provider, setProvider] = useState('gpt-4')

  const frameworks = [
    { id: 'quick-prompt', name: 'Quick Prompt', description: 'Simple & Direct' },
    { id: 'cot', name: 'Chain-of-Thought', description: 'Step-by-step reasoning' },
    { id: 'few-shot', name: 'Few-Shot', description: 'Examples included' },
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
        <h2 className="text-3xl font-bold text-text-primary mb-2">Prompt Optimizer</h2>
        <p className="text-lg text-text-secondary">
          Choose a framework, optimize your prompt, and compare across AI models
        </p>
      </div>

      {/* Alert: Provider Selection */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-900 mb-1">Selected provider</p>
          <p className="text-sm text-blue-700">{currentProvider?.name}</p>
        </div>
        <button
          onClick={() => setProvider(provider === 'gpt-4' ? 'claude' : 'gpt-4')}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap"
        >
          Change provider
        </button>
      </div>

      {/* Framework Selection */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-text-primary mb-3">
          Select Framework
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
          Your Prompt
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here... Describe what you want the AI to do."
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
        />
        <p className="text-xs text-text-secondary mt-2">
          💡 <strong>Tip:</strong> Be specific about your requirements, context, and desired output format.
        </p>
      </div>

      {/* Provider Selection Dropdown */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-text-primary mb-2">
          Primary Provider
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
          Optimize Prompt
        </button>
        <button
          className="px-6 py-3 border-2 border-gray-300 text-text-primary font-semibold rounded-lg hover:border-gray-400 transition-colors"
        >
          Compare Frameworks
        </button>
      </div>

      {/* Help Text */}
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-text-secondary">
          📚 Need help optimizing your prompt?{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            View prompt engineering best practices
          </a>
        </p>
      </div>

      {/* Footer Alert */}
      <div className="mt-6 p-3 bg-gray-100 rounded text-xs text-text-secondary text-center">
        ⚙️ Optimization engine powered by {currentProvider?.name}
      </div>
    </div>
  )
}
