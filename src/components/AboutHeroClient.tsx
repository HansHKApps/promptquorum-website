'use client'

import { LangLinksBar } from '@/components/LangLinksBar'
import { AboutTrackedLink } from '@/components/AboutTrackedLink'

const PRIMARY_BTN =
  'inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity'
const SECONDARY_BTN =
  'inline-flex items-center justify-center px-5 py-3 rounded-lg border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors'

export function AboutHeroClient() {
  return (
    <div className="py-16 border-b border-primary/20 mb-16">
      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">About PromptQuorum</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
        The usage layer for open-weight AI.
      </h1>
      <p className="text-xl text-text-primary font-medium leading-relaxed mb-4">
        Hugging Face made open models available. Ollama and LM Studio made them runnable.
        PromptQuorum makes them useful: the independent map of the apps built on top.
      </p>
      <p className="text-lg text-text-secondary leading-relaxed mb-8">
        PromptQuorum is the independent, neutral reference for running AI on your own terms. It covers which apps
        exist, what they do, what hardware they need, how to install them and how to combine them. The content is in
        nine languages, and it&apos;s written for people and readable by machines.
      </p>

      <div className="flex flex-wrap gap-3">
        <AboutTrackedLink href="/directory" via="hero_directory" className={PRIMARY_BTN}>
          Explore the Directory
        </AboutTrackedLink>
        <AboutTrackedLink href="/directory#hw-profile-widget" via="hero_hardware" className={SECONDARY_BTN}>
          What runs on my hardware?
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
