import Link from 'next/link'
import { InteractivePipeline } from './InteractivePipeline'
import { LandingPageClient } from './LandingPageClient'
import { Suspense } from 'react'

// Icons
const Shield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)

const Download = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
)

const Sparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
)

const Zap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
)

const Brain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/><path d="M9.75 9.75a4 4 0 0 1 5.542 2.824"/><path d="M14.25 9.75a4 4 0 0 1-5.542-2.824"/></svg>
)

const Layers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.65-8.58 3.91a2 2 0 0 1-1.66 0L2 12.18"/><path d="m22 17.65-8.58 3.91a2 2 0 0 1-1.66 0L2 17.18"/></svg>
)

const CheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
)

const Github = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)

const Twitter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
)

const Linkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
)

const Discord = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19.933 13.041a8.8 8.8 0 0 1-.817 4.438 8.356 8.356 0 0 1-7.078-.25 10.709 10.709 0 0 1-3.12-2.695 8.235 8.235 0 0 1-.697-3.127 8.391 8.391 0 0 1 .262-2.4l.445-.891a.459.459 0 0 0-.121-.515.457.457 0 0 0-.501-.269l-1.532.777a8.071 8.071 0 0 0-3.035-1.092 11.037 11.037 0 0 0-2.928.11L2.217 7.223a.459.459 0 0 0-.498.412.457.457 0 0 0 .193.51l1.358 1.358a8.6 8.6 0 0 0 1.674 2.867 8.086 8.086 0 0 0-.035 3.004.456.456 0 0 0 .333.371l1.477.616a.458.458 0 0 1 .234.65l-.51 1.477a.458.458 0 0 1-.456.288A8.328 8.328 0 0 0 8.4 20.8a8.694 8.694 0 0 0 5.053 1.567c2.35 0 4.564-.687 6.38-1.92a8.145 8.145 0 0 0 2.437-3.465.458.458 0 0 1 .647-.13l1.584.792a.458.458 0 0 1 .234.65l-.511 1.478a.458.458 0 0 1-.456.287zM8.02 15.278c-.99 0-1.82-.36-2.495-1.073a3.402 3.402 0 0 1-.87-2.263c.022-.086.044-.173.044-.264 0-1.035.806-1.866 1.79-1.866.96 0 1.748.815 1.764 1.827 0 .062-.009.124-.022.185a2.72 2.72 0 0 1 1.537-1.1c1.05 0 1.94.404 2.637 1.155a3.487 3.487 0 0 1 1.077 2.493c0 1.936-1.565 3.51-3.494 3.51zm7.072 0c-.99 0-1.808-.358-2.48-1.067a3.4 3.4 0 0 1-.868-2.263c.022-.084.044-.173.044-.264 0-1.035.805-1.866 1.789-1.866.96 0 1.748.815 1.764 1.827 0 .062-.009.124-.022.185a2.72 2.72 0 0 1 1.537-1.1c1.05 0 1.94.404 2.637 1.155a3.487 3.487 0 0 1 1.077 2.493c0 1.936-1.565 3.51-3.494 3.51z"/></svg>
)

const YouTube = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
)

// Feature Card Component
function FeatureCard({ icon: Icon, title, description, delay }: { icon: React.ElementType, title: string, description: string, delay: number }) {
  return (
    <div
      className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all-200 group animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-all-200">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  )
}

// Main Landing Page Server Component
export function LandingPageServer() {
  // Static English content for SEO
  const features = [
    { icon: Sparkles, title: 'Prompt Optimization', description: 'Automatically refine and optimize your prompts across 8 refinement techniques.' },
    { icon: Layers, title: 'Multi-Model Analysis', description: 'Compare responses from 25+ AI models side-by-side to detect hallucinations.' },
    { icon: Brain, title: 'Intelligence Insights', description: 'Understand model capabilities and learn which works best for your use case.' },
    { icon: Zap, title: 'Speed & Efficiency', description: 'Save hours of manual testing with instant, parallel model comparisons.' },
    { icon: Shield, title: 'Privacy First', description: 'Zero registration, zero tracking, total control. Run everything locally.' },
    { icon: Download, title: 'Open Source Integration', description: 'Deploy locally with LLaMA, Ollama, and all your favorite open models.' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6 animate-fade-in">
            <Sparkles />
            <span>Waitlist Now Open</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            Compare AI Prompts & Models
            <span className="block text-primary">Instantly</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            PromptQuorum helps you craft better AI prompts and compare responses from 25+ models in seconds. Optimize, compare, and master AI-powered workflows.
          </p>

          <div className="mt-10 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Suspense fallback={<div className="max-w-md mx-auto h-12 bg-gray-200 rounded" />}>
              <LandingPageClient />
            </Suspense>
          </div>

          <p className="mt-8 text-text-muted text-sm animate-fade-in" style={{ animationDelay: '400ms' }}>
            Built for developers, researchers, and AI enthusiasts
          </p>

          {/* YouTube Video */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/R-bDPhT5EMo"
                  title="PromptQuorum Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Core Features & Capabilities
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Everything you need to optimize prompts and master AI workflows
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              How the 4-Stage Pipeline Works
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Optimize, compare, analyze, and improve your prompts automatically
            </p>
          </div>

          <Suspense fallback={<div className="h-64 bg-gray-200 rounded" />}>
            <InteractivePipeline />
          </Suspense>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <Suspense fallback={<div className="space-y-4" />}>
            <LandingPageClient isClientContent={true} />
          </Suspense>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Blog & Educational Resources
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Learn prompt engineering, AI optimization, and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Blog Card 1 */}
            <Link href="/blog/prompt-frameworks" className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  Prompt Engineering
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  8 Prompt Frameworks Explained
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Master CRAFT, CO-STAR, SPECS, and 5 other frameworks. Learn which one works best for your use case.
                </p>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>8 min read</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            {/* Blog Card 2 */}
            <Link href="/blog/local-ai-vs-cloud" className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  Privacy & Security
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  Local AI vs Cloud Tools
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Why privacy-first prompt optimization matters and when to use local models.
                </p>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>10 min read</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            {/* Blog Card 3 */}
            <Link href="/blog/ai-model-comparison" className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  Model Comparison
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  ChatGPT vs Claude vs Gemini
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Compare AI models side-by-side. How to get the best results from each.
                </p>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>12 min read</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            {/* Blog Card 4 */}
            <Link href="/blog/quorum" className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  AI Tools & Features
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  Quorum: Multi-Model Analysis
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Compare responses from 25+ AI models side-by-side to detect hallucinations and find consensus.
                </p>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>11 min read</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            {/* Blog Card 5 */}
            <Link href="/blog/prompt-optimization" className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  Prompt Optimization
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  Automatic Optimization Tools
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Discover all 8 refinement buttons, smart temperature detection, quality scoring, and teaching mode.
                </p>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>12 min read</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            {/* Blog Card 6 */}
            <Link href="/blog/enterprise-data-privacy" className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  Data Privacy & Security
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  Enterprise Data Privacy
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Zero registration, zero tracking, complete control. Run AI locally with total data ownership and HIPAA/GDPR compliance.
                </p>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>10 min read</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            {/* Blog Card 7 */}
            <Link href="/blog/research-prompt-optimization-impact" className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  Research Study
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  Prompt Optimization Impact
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  2024-2026 research reveals 15%-94% improvements. Chain-of-Thought, multimodal approaches, and frameworks boost AI quality.
                </p>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>12 min read</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Join the PromptQuorum Waitlist
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Be the first to access our open-source prompt optimization tool. Early access gets lifetime premium features.
          </p>
          <div className="mt-10">
            <Suspense fallback={<div className="max-w-md mx-auto h-12 bg-gray-200 rounded" />}>
              <LandingPageClient isWaitlistForm={true} />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="PromptQuorum" className="w-8 h-8" />
              <span className="font-semibold text-text-primary">PromptQuorum</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                <Github />
              </a>
              <a href="https://x.com/HansKuepperAPPs" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                <Twitter />
              </a>
              <a href="https://www.linkedin.com/company/promptquorum" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                <Linkedin />
              </a>
              <a href="https://discord.com/channels/1482063293509271724/1482063418113396736" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                <Discord />
              </a>
              <a href="https://www.youtube.com/channel/UC5PL_1lU5pdV1d1EC1XeLhA" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                <YouTube />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center space-y-3 text-text-muted text-sm">
            <div>© 2024 PromptQuorum. All rights reserved.</div>
            <div className="flex items-center justify-center gap-2">
              <span>🌍 Available worldwide</span>
              <span>•</span>
              <span>English, Deutsch, Français, 日本語, 中文</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
