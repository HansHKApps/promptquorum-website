import { Helmet } from 'react-helmet-async'
import { Link, useSearchParams } from 'react-router-dom'
import logoSvg from '../logo.svg'
import { translations, Language, TranslationKey } from '../translations'
import { LanguageSwitcher } from '../components/LanguageSwitcher'
import { useState } from 'react'

const Sparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
)

const Layers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.65-8.58 3.91a2 2 0 0 1-1.66 0L2 12.18"/><path d="m22 17.65-8.58 3.91a2 2 0 0 1-1.66 0L2 17.18"/></svg>
)

const Brain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/><path d="M9.75 9.75a4 4 0 0 1 5.542 2.824"/><path d="M14.25 9.75a4 4 0 0 1-5.542-2.824"/></svg>
)

const Zap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
)

const Shield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)

const Download = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
)

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

export function Features() {
  const [searchParams, setSearchParams] = useSearchParams()
  const language = (searchParams.get('lang') || 'en') as Language
  const setLanguage = (lang: Language) => {
    setSearchParams({ lang })
  }
  const t = (key: TranslationKey) => translations[language][key]

  const features = [
    { icon: Sparkles, title: t('feature1Title'), description: t('feature1Desc') },
    { icon: Layers, title: t('feature2Title'), description: t('feature2Desc') },
    { icon: Brain, title: t('feature3Title'), description: t('feature3Desc') },
    { icon: Zap, title: t('feature4Title'), description: t('feature4Desc') },
    { icon: Shield, title: t('feature5Title'), description: t('feature5Desc') },
    { icon: Download, title: t('feature6Title'), description: t('feature6Desc') },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Features | PromptQuorum — AI Prompt Optimizer & Multi-AI Comparator</title>
        <meta name="description" content="Explore PromptQuorum's powerful features: 8+ prompt frameworks, multi-AI dispatch, side-by-side comparison, local privacy, and more." />
        <link rel="canonical" href="https://www.promptquorum.com/features" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Features | PromptQuorum",
          "description": "Explore PromptQuorum's powerful features: 8+ prompt frameworks, multi-AI dispatch, side-by-side comparison, local privacy, and more.",
          "url": "https://www.promptquorum.com/features",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.promptquorum.com" },
              { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://www.promptquorum.com/features" }
            ]
          }
        })}</script>
      </Helmet>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoSvg} alt="PromptQuorum" className="w-8 h-8" />
            <span className="font-semibold text-text-primary">PromptQuorum</span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLang={language} onChange={setLanguage} />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              {t('featuresTitle')}
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {t('featuresSubtitle')}
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
    </div>
  )
}
