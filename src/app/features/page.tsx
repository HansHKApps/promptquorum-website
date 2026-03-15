import { Suspense } from 'react'
import type { Metadata } from 'next'
import { PromptOptimizerShowcase } from '@/components/PromptOptimizerShowcase'
import { OptimizationShowcase } from '@/components/OptimizationShowcase'
import { QuorumShowcase } from '@/components/QuorumShowcase'

export const metadata: Metadata = {
  title: 'Features | PromptQuorum',
  description: 'Smart AI prompt optimization features including frameworks, multi-AI dispatch, quorum comparison, and local LLM support.',
  alternates: {
    canonical: 'https://www.promptquorum.com/features',
  },
}

const Sparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
)

const Brain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/><path d="M9.75 9.75a4 4 0 0 1 5.542 2.824"/><path d="M14.25 9.75a4 4 0 0 1-5.542-2.824"/></svg>
)

const Layers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.65-8.58 3.91a2 2 0 0 1-1.66 0L2 12.18"/><path d="m22 17.65-8.58 3.91a2 2 0 0 1-1.66 0L2 17.18"/></svg>
)

const Zap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
)

const Shield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  )
}

export default function FeaturesPage() {
  const features = [
    { icon: Sparkles, title: 'Prompt Optimization', description: 'Automatically refine and optimize your prompts with 8 proven refinement techniques for better AI output.' },
    { icon: Layers, title: 'Multi-Model Dispatch', description: 'Run prompts across ChatGPT, Claude, Gemini, and 25+ other AI models simultaneously in parallel.' },
    { icon: Brain, title: 'Quorum Scoring', description: 'Find consensus answers across models with confidence scoring. Detect hallucinations instantly.' },
    { icon: Zap, title: 'Instant Comparison', description: 'See side-by-side responses in seconds. No manual testing across browser tabs.' },
    { icon: Shield, title: 'Privacy-First', description: 'Local execution option. Zero registration required. Complete control over your prompts.' },
  ]

  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">Features</h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Everything you need to write better prompts, test smarter, and optimize faster.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>

          {/* Prompt Optimizer Showcase */}
          <div className="mb-20">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 sm:p-12">
              <PromptOptimizerShowcase />
            </div>
          </div>

          {/* Optimization Results Showcase */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-primary mb-3">Optimization Results</h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Review quality assessments, version history, and improvement suggestions for your optimized prompts.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 sm:p-12">
              <OptimizationShowcase />
            </div>
          </div>

          {/* Quorum Multi-Model Consensus Showcase */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-primary mb-3">Quorum — Multi-Model Consensus</h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Collect responses from 25+ AI models, analyze consensus patterns, and synthesize insights across different perspectives.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 sm:p-12">
              <QuorumShowcase />
            </div>
          </div>

          {/* How It Works Section */}
          <div className="space-y-12 mb-20">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-4">How It Works</h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Three simple steps to better prompts and smarter AI decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Choose a Framework</h3>
                <p className="text-text-secondary">
                  Select a prompt engineering framework like Chain-of-Thought, Few-Shot, or CRAFT.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Run Your Prompt</h3>
                <p className="text-text-secondary">
                  Send your prompt to 25+ models. Watch responses come back in parallel in real-time.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Compare & Optimize</h3>
                <p className="text-text-secondary">
                  Find consensus answers, detect hallucinations, and refine for better output quality.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center"><a href="/" className="text-primary hover:text-primary/80 font-medium">← Back to Home</a></p>
        </div>
      </div>
    </Suspense>
  )
}
