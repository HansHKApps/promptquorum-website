import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useSearchParams } from 'react-router-dom'
import logoSvg from '../logo.svg'
import { translations, Language, TranslationKey } from '../translations'
import { LanguageSwitcher } from '../components/LanguageSwitcher'

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
)

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <h3 className="font-medium text-text-primary text-base">{question}</h3>
        <span className={`text-text-muted transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
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

export function FAQ() {
  const [searchParams, setSearchParams] = useSearchParams()
  const language = (searchParams.get('lang') || 'en') as Language
  const setLanguage = (lang: Language) => {
    setSearchParams({ lang })
  }
  const t = (key: TranslationKey) => translations[language][key]

  const faqs = [
    { question: t('faq1Question'), answer: t('faq1Answer') },
    { question: t('faq2Question'), answer: t('faq2Answer') },
    { question: t('faq3Question'), answer: t('faq3Answer') },
    { question: t('faq4Question'), answer: t('faq4Answer') },
    { question: t('faq5Question'), answer: t('faq5Answer') },
    { question: t('faq6Question'), answer: t('faq6Answer') },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>PromptQuorum FAQ - Pricing & Getting Started</title>
        <meta name="description" content="Frequently asked questions about PromptQuorum: pricing, privacy, supported AI models, local hosting options, and free prompt optimization." />
        <link rel="canonical" href="https://www.promptquorum.com/faq" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": t('faq1Question'), "acceptedAnswer": { "@type": "Answer", "text": t('faq1Answer') } },
            { "@type": "Question", "name": t('faq2Question'), "acceptedAnswer": { "@type": "Answer", "text": t('faq2Answer') } },
            { "@type": "Question", "name": t('faq3Question'), "acceptedAnswer": { "@type": "Answer", "text": t('faq3Answer') } },
            { "@type": "Question", "name": t('faq4Question'), "acceptedAnswer": { "@type": "Answer", "text": t('faq4Answer') } },
            { "@type": "Question", "name": t('faq5Question'), "acceptedAnswer": { "@type": "Answer", "text": t('faq5Answer') } },
            { "@type": "Question", "name": t('faq6Question'), "acceptedAnswer": { "@type": "Answer", "text": t('faq6Answer') } }
          ],
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.promptquorum.com" },
              { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://www.promptquorum.com/faq" }
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

      {/* FAQ Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              {t('faqTitle')}
            </h1>
            <p className="text-lg text-text-secondary">
              Everything you need to know about PromptQuorum, pricing, privacy, and getting started
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
