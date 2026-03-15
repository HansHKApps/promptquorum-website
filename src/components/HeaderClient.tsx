import Link from 'next/link'

export function HeaderClient() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src="/logo.svg" alt="PromptQuorum" className="w-8 h-8 flex-shrink-0" />
          <span className="font-semibold text-gray-900 whitespace-nowrap">PromptQuorum</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 ml-auto">
          <Link href="/compare" className="text-gray-600 hover:text-purple-600 transition-colors">Compare Models</Link>
          <Link href="/features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</Link>
          <Link href="/how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How It Works</Link>
          <Link href="/faq" className="text-gray-600 hover:text-purple-600 transition-colors">FAQ</Link>
          <a href="#waitlist" className="text-gray-600 hover:text-purple-600 transition-colors">Waitlist</a>
        </nav>
      </div>
    </header>
  )
}
