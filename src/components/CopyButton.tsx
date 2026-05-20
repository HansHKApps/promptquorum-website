'use client'

import { useState } from 'react'

interface CopyButtonProps {
  text: string
  sourcePage?: string
}

export function CopyButton({ text, sourcePage }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)

      // Fire Umami event
      if (typeof window !== 'undefined' && (window as any).umami) {
        (window as any).umami.track('code_copy', {
          source_page: sourcePage || window.location.pathname,
        })
      }

      // Reset after 2 seconds
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // If clipboard API fails (e.g., in headless browsers), still show feedback
      console.error('Failed to copy:', err)
      setCopied(true)

      // Fire Umami event for attempted copy
      if (typeof window !== 'undefined' && (window as any).umami) {
        (window as any).umami.track('code_copy_attempt', {
          source_page: sourcePage || window.location.pathname,
        })
      }

      // Reset after 2 seconds
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-auto text-gray-400 hover:text-gray-200 transition-colors duration-200 text-xs font-mono px-2 py-1 rounded hover:bg-gray-700/50"
      title={copied ? 'Copied!' : 'Copy to clipboard'}
      aria-label={copied ? 'Copied!' : 'Copy code'}
    >
      {copied ? 'Copied!' : '📋 Copy'}
    </button>
  )
}
