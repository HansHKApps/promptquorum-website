'use client'

import { useState } from 'react'

// Icons
const CheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
)

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
)

// FAQ Item Component
function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <span className="font-medium text-text-primary">{question}</span>
        <span className={`text-text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown />
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-text-secondary">{answer}</p>
        </div>
      )}
    </div>
  )
}

// Waitlist Form Component (English only on homepage)
function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const FORMSPREE_FORM_ID = 'xjgavzdw'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }
      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center p-8 rounded-xl bg-primary/10 border border-primary/20 animate-fade-in">
        <div className="w-8 h-8 mx-auto text-primary">
          <CheckCircle />
        </div>
        <h3 className="text-xl font-semibold mt-4 text-text-primary">You're on the list!</h3>
        <p className="text-text-secondary mt-2">We'll notify you when we launch.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all-200"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all-200 disabled:opacity-50 whitespace-nowrap"
        >
          {loading ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
      )}
      <p className="text-text-muted text-sm mt-3 text-center">
        No spam, just important updates.
      </p>
    </form>
  )
}

// Main Landing Page Client Component
export function LandingPageClient({ isClientContent, isWaitlistForm }: { isClientContent?: boolean, isWaitlistForm?: boolean } = {}) {
  // FAQ content (English only)
  const faqs = [
    { question: 'Is PromptQuorum free?', answer: 'Yes. PromptQuorum is free to use. You can bring your own API key, use a local LLM, or try our limited free backend service for prompt optimization on a test basis.' },
    { question: 'How does privacy work?', answer: 'You decide where your data goes. Keep everything local with LM Studio or Ollama, or use your own API keys. PromptQuorum is as private as you set it up.' },
    { question: 'Which AI providers are supported?', answer: 'Over 25 AI providers are included, and you can add your own custom providers. Connect to ChatGPT, Claude, Gemini, and many more.' },
    { question: 'What platforms does PromptQuorum run on?', answer: 'PromptQuorum starts with desktop apps (Mac, Windows), followed by a web application, and eventually mobile solutions.' },
    { question: 'What makes PromptQuorum different?', answer: 'PromptQuorum is highly automated for prompt improvements, can send the same prompt to multiple AIs simultaneously, and analyzes results based on your criteria.' },
    { question: 'Are there any limits?', answer: 'No limits from PromptQuorum side. Your usage is only limited by your API keys or local LLM resources.' },
  ]

  // Render FAQ section
  if (isClientContent) {
    return (
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    )
  }

  // Render waitlist form
  if (isWaitlistForm) {
    return <WaitlistForm />
  }

  // Default: Hero form
  return (
    <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
      <WaitlistForm />
    </div>
  )
}
