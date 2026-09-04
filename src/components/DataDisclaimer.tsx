// Local AI App Directory — data disclaimer.
// Phase 3 of /Users/hanskuepper/.claude/plans/see-the-directory-page-virtual-cocke.md.
//
// EN copy only for now — translation into the other 8 locales is an explicit
// later step (see the task this shipped under). Accepts `lang` so callers
// can pass the page's resolved language today without a follow-up prop
// rename once translations land; every non-EN key falls back to `en` so the
// component never renders blank for a locale that isn't populated yet.

import type { Language } from '@/lib/blog/blogContent'

interface DisclaimerCopy {
  heading: string
  body: string[]
  testedBadgeNote: string
  correctionNote: string
}

const COPY: Partial<Record<Language, DisclaimerCopy>> = {
  en: {
    heading: 'About this data',
    body: [
      'This directory is compiled with AI-assisted research from public sources (project READMEs, official sites, GitHub repositories). It is not exhaustive and may contain errors — hardware requirements, pricing, and platform support change frequently and some fields have not been independently verified yet.',
      'A "Listed" status means the tool is included but not independently reviewed by PromptQuorum. A "Verified" status means core facts (license, platforms, pricing) have been manually checked. A "PromptQuorum-tested" badge is only shown for tools PromptQuorum has actually installed and run — most entries do not have this badge yet.',
    ],
    testedBadgeNote: 'The "PromptQuorum-tested" badge is reserved for tools we have personally installed and run — an untested tool never carries it, regardless of popularity or stars.',
    correctionNote: 'Spotted something wrong? Email hello@promptquorum.com and we will correct it.',
  },
}

export function DataDisclaimer({ lang }: { lang: Language }) {
  const copy = COPY[lang] ?? COPY.en!

  return (
    <div className="border border-primary/10 rounded-xl bg-gray-50 p-4 text-xs text-text-secondary leading-relaxed space-y-2">
      <p className="font-bold text-text-primary uppercase tracking-wide text-[11px]">{copy.heading}</p>
      {copy.body.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <p>{copy.testedBadgeNote}</p>
      <p>
        {copy.correctionNote.split('hello@promptquorum.com').map((part, i, arr) =>
          i < arr.length - 1 ? (
            <span key={i}>
              {part}
              <a href="mailto:hello@promptquorum.com" className="text-primary hover:underline">hello@promptquorum.com</a>
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
    </div>
  )
}
