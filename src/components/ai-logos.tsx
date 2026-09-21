/**
 * Simplified single-glyph marks for the "Discuss with AI" buttons — NOT the
 * official press-kit artwork. Swap in official SVGs here later if wanted.
 */
import type { ReactElement } from 'react'

const S = { width: 20, height: 20, viewBox: '0 0 24 24', 'aria-hidden': true, focusable: false } as const

export const AI_LOGOS: Record<string, ReactElement> = {
  chatgpt: (
    <svg {...S} fill="none" stroke="#10A37F" strokeWidth="2" strokeLinejoin="round">
      <path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  ),
  claude: (
    <svg {...S} fill="#D97757">
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={i} x="11" y="2" width="2" height="8" rx="1" transform={`rotate(${i * 45} 12 12)`} />
      ))}
    </svg>
  ),
  gemini: (
    <svg {...S} fill="#4285F4">
      <path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10z" />
    </svg>
  ),
  perplexity: (
    <svg {...S} fill="none" stroke="#20808D" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
      <path d="M12 2v20M5 6.5l14 11M19 6.5l-14 11M5 6.5V15l7-4.5 7 4.5V6.5L12 11z" />
    </svg>
  ),
  grok: (
    <svg {...S} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M7 17L17 7" />
    </svg>
  ),
  'meta-ai': (
    <svg {...S} fill="none" stroke="#0866FF" strokeWidth="2.4" strokeLinecap="round">
      <path d="M12 12c-2-3.6-3.6-5.5-5.6-5.5C4.3 6.5 3 9 3 12s1.3 5.5 3.4 5.5c2 0 3.6-1.9 5.6-5.5s3.6-5.5 5.6-5.5c2.1 0 3.4 2.5 3.4 5.5s-1.3 5.5-3.4 5.5c-2 0-3.6-1.9-5.6-5.5z" />
    </svg>
  ),
  mistral: (
    <svg {...S} fill="#FA520F">
      <rect x="2" y="3" width="4" height="4" /><rect x="18" y="3" width="4" height="4" />
      <rect x="2" y="8" width="8" height="4" /><rect x="14" y="8" width="8" height="4" />
      <rect x="2" y="13" width="20" height="4" /><rect x="2" y="18" width="4" height="4" /><rect x="18" y="18" width="4" height="4" />
    </svg>
  ),
  deepseek: (
    <svg {...S} fill="#4D6BFE">
      <path d="M3 13c0-4.5 3.6-8 8.5-8 3.5 0 6.5 1.7 8.5 4.5-1 .5-2 .7-3 .5-1 2.8-3.5 4.5-6.5 4.5-1 0-2-.2-2.8-.6L3 17z" />
      <circle cx="15.5" cy="10" r="1.1" fill="#fff" />
    </svg>
  ),
  copilot: (
    <svg {...S} fill="none" stroke="#7B61FF" strokeWidth="2.6" strokeLinecap="round">
      <path d="M17 6.5A7.5 7.5 0 1 0 17 17.5" />
    </svg>
  ),
  poe: (
    <svg {...S} fill="#5D5CDE">
      <path d="M5 3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6l-5 4v-4H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z" />
    </svg>
  ),
}
