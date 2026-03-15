import Link from 'next/link'

export function HeaderClient() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="PromptQuorum" className="w-8 h-8" />
          <span className="font-semibold text-text-primary">PromptQuorum</span>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/compare" className="text-text-secondary hover:text-primary transition-colors">Compare Models</Link>
            <Link href="/features" className="text-text-secondary hover:text-primary transition-colors">Features</Link>
            <Link href="/how-it-works" className="text-text-secondary hover:text-primary transition-colors">How It Works</Link>
            <Link href="/faq" className="text-text-secondary hover:text-primary transition-colors">FAQ</Link>
            <a href="#waitlist" className="text-text-secondary hover:text-primary transition-colors">Waitlist</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
