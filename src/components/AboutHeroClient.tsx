'use client'

import { LangLinksBar } from '@/components/LangLinksBar'
import { AboutTrackedLink } from '@/components/AboutTrackedLink'

const PRIMARY_BTN =
  'inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity'
const SECONDARY_BTN =
  'inline-flex items-center justify-center px-5 py-3 rounded-lg border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors'

interface AboutHeroClientProps {
  appCount: number
  articleCount: number
}

export function AboutHeroClient({ appCount, articleCount }: AboutHeroClientProps) {
  return (
    <div className="py-16 border-b border-primary/20 mb-16">
      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">About PromptQuorum</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
        The usage layer for open-weight and open-source AI.
      </h1>
      <p className="text-xl text-text-primary font-medium leading-relaxed mb-4">
        PromptQuorum is an independent ecosystem for running AI on your own terms: a directory of {appCount} local-AI apps,
        a knowledge base of {articleCount} articles in nine languages, and a free app that puts many models side by side.
      </p>
      <p className="text-lg text-text-secondary leading-relaxed mb-8">
        Open-weight and open-source models are easy to download. Knowing which app to use, whether your hardware can run it
        and how to set it up is still hard. That gap is what PromptQuorum fills.
      </p>

      <div className="flex flex-wrap gap-3">
        <AboutTrackedLink href="/directory" via="hero_directory" className={PRIMARY_BTN}>
          Explore the Directory
        </AboutTrackedLink>
        <AboutTrackedLink href="/directory#hw-profile-widget" via="hero_hardware" className={SECONDARY_BTN}>
          What runs on my hardware?
        </AboutTrackedLink>
        <AboutTrackedLink href="#ecosystem" via="hero_ecosystem" className={SECONDARY_BTN}>
          How the parts fit together
        </AboutTrackedLink>
        <AboutTrackedLink href="#use-promptquorum-from-your-ai" via="hero_mcp" className={SECONDARY_BTN}>
          Connect via MCP
        </AboutTrackedLink>
      </div>

      <div className="mt-8">
        <LangLinksBar cluster="about" slug="" availableLangs={['en', 'de', 'fr', 'ja', 'zh']} />
      </div>
    </div>
  )
}
