'use client'

import { LangLinksBar } from '@/components/LangLinksBar'

export function AboutHeroClient() {
  return (
    <>
      {/* Hero */}
      <div className="py-16 border-b border-primary/20 mb-16">
        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">About</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
          Built for people who need to trust their AI answers.
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          PromptQuorum is a multi-model AI dispatch and consensus tool. One prompt to every model.
          One verdict you can actually trust.
        </p>

        {/* Cross-language links */}
        <div className="mt-8">
          <LangLinksBar cluster="about" slug="" availableLangs={['en', 'de', 'fr', 'ja', 'zh']} />
        </div>
      </div>
    </>
  )
}
