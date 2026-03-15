import { Helmet } from 'react-helmet-async'
import { Link, useSearchParams } from 'react-router-dom'
import logoSvg from '../logo.svg'
import { translations, Language, TranslationKey } from '../translations'
import { LanguageSwitcher } from '../components/LanguageSwitcher'

const Download = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
)

export function DownloadPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const language = (searchParams.get('lang') || 'en') as Language
  const setLanguage = (lang: Language) => {
    setSearchParams({ lang })
  }
  const t = (key: TranslationKey) => translations[language][key]

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Download PromptQuorum - AI Prompt Optimizer for macOS, Windows, Linux</title>
        <meta name="description" content="Download PromptQuorum for macOS, Windows, and Linux. Start optimizing your AI prompts locally with zero data tracking." />
        <link rel="canonical" href="https://www.promptquorum.com/download" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "PromptQuorum",
          "description": "AI prompt optimizer and multi-AI comparator. Privacy-first, runs locally.",
          "url": "https://www.promptquorum.com/download",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Windows, macOS, Linux",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.promptquorum.com" },
              { "@type": "ListItem", "position": 2, "name": "Download", "item": "https://www.promptquorum.com/download" }
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

      {/* Download Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6 animate-fade-in">
            <Download />
            <span>Available for Mac, Windows & Linux</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            Download PromptQuorum{' '}
            <span className="block text-primary">AI Prompt Optimizer</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Download PromptQuorum and start transforming rough ideas into precision prompts. 100% private, runs locally.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <a
              href="https://github.com/promptquorum/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Download />
              Download Now
            </a>
            <Link
              to="/#waitlist"
              className="px-8 py-4 rounded-lg bg-gray-100 text-text-primary font-semibold hover:bg-gray-200 transition-colors"
            >
              Join Waitlist
            </Link>
          </div>

          <p className="mt-8 text-text-muted text-sm animate-fade-in" style={{ animationDelay: '400ms' }}>
            macOS • Windows • Linux — Coming to web & mobile
          </p>

          {/* Platform Details */}
          <h2 className="text-2xl font-bold text-text-primary mt-16 mb-8 text-center">
            Platform Details & Features
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-gray-50 border border-gray-200">
              <div className="text-2xl mb-2">🖥️</div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Desktop Apps</h3>
              <p className="text-sm text-text-secondary">
                Native apps for Mac, Windows, and Linux with full feature support.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 border border-gray-200">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">100% Private</h3>
              <p className="text-sm text-text-secondary">
                Your data stays on your machine. No tracking, no uploads.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 border border-gray-200">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Local LLMs</h3>
              <p className="text-sm text-text-secondary">
                Use local models or your own API keys. Total control.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
