import { Helmet } from 'react-helmet-async'
import { Link, useSearchParams } from 'react-router-dom'
import logoSvg from '../logo.svg'
import { translations, Language, TranslationKey } from '../translations'
import { LanguageSwitcher } from '../components/LanguageSwitcher'
import { InteractivePipeline } from '../components/InteractivePipeline'

export function HowItWorks() {
  const [searchParams, setSearchParams] = useSearchParams()
  const language = (searchParams.get('lang') || 'en') as Language
  const setLanguage = (lang: Language) => {
    setSearchParams({ lang })
  }
  const t = (key: TranslationKey) => translations[language][key]

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>How It Works | PromptQuorum — AI Prompt Optimizer & Multi-AI Comparator</title>
        <meta name="description" content="Learn how PromptQuorum works: 4-stage pipeline from prompt creation to multi-AI comparison. Optimize, dispatch, and compare AI responses instantly." />
        <link rel="canonical" href="https://www.promptquorum.com/how-it-works" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How PromptQuorum Works",
          "description": "Four simple stages to transform rough ideas into precision prompts and compare results across multiple AI providers.",
          "url": "https://www.promptquorum.com/how-it-works",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Prompt", "text": "Start with any idea, rough or refined. Enter your initial prompt into PromptQuorum." },
            { "@type": "HowToStep", "position": 2, "name": "Optimize", "text": "AI transforms it into a precision prompt using proven frameworks like CO-STAR, CRAFT, and RISEN." },
            { "@type": "HowToStep", "position": 3, "name": "Dispatch", "text": "Send to multiple AIs at once — ChatGPT, Claude, Gemini, local models, and 25+ other providers." },
            { "@type": "HowToStep", "position": 4, "name": "Quorum", "text": "Compare results, let AI analyze responses, find consensus, and surface the best answer across all providers." }
          ],
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.promptquorum.com" },
              { "@type": "ListItem", "position": 2, "name": "How It Works", "item": "https://www.promptquorum.com/how-it-works" }
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

      {/* How It Works Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              {t('howItWorksTitle')}
            </h1>
            <p className="text-lg text-text-secondary">
              {t('howItWorksSubtitle')}
            </p>
          </div>

          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            4-Stage Pipeline: From Rough Ideas to Precision Results
          </h2>
          <InteractivePipeline />
        </div>
      </section>
    </div>
  )
}
