'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useState, useEffect } from 'react'

export function HeaderClient() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle smooth scroll to waitlist when URL has #waitlist
  useEffect(() => {
    if (window.location.hash === '#waitlist') {
      const element = document.getElementById('waitlist')
      if (element) {
        setTimeout(() => {
          const headerHeight = 64
          const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight
          window.scrollTo({ top: elementPosition, behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  const handleWaitlistClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById('waitlist')
    if (element) {
      // Waitlist section exists on this page, scroll to it
      const headerHeight = 64 // h-16 = 64px
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    } else {
      // Waitlist section doesn't exist on this page, navigate to home
      router.push('/#waitlist')
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src="/logo.svg" alt="PromptQuorum" className="w-8 h-8 flex-shrink-0" />
          <span className="font-semibold text-gray-900 whitespace-nowrap">PromptQuorum</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 ml-auto mr-6">
          <Link href="/compare" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Compare Models</Link>
          <Link href="/features" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Features</Link>
          <Link href="/how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">How It Works</Link>
          <Link href="/faq" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">FAQ</Link>
          <a
            href="#waitlist"
            onClick={handleWaitlistClick}
            className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-sm"
          >
            Waitlist
          </a>
        </nav>

        {/* Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-purple-600"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md px-4 py-3 space-y-2">
          <Link
            href="/compare"
            className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Compare Models
          </Link>
          <Link
            href="/features"
            className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="/faq"
            className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <a
            href="#waitlist"
            onClick={handleWaitlistClick}
            className="block px-4 py-2 text-purple-600 font-medium hover:bg-purple-50 rounded-lg transition-colors"
          >
            Waitlist
          </a>
        </div>
      )}
    </header>
  )
}
