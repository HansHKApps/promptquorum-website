'use client'

import { LangLinksBar } from '@/components/LangLinksBar'
import { AboutTrackedLink } from '@/components/AboutTrackedLink'
import type { Language } from '@/lib/blog/blogContent'

const PRIMARY_BTN =
  'inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity'
const SECONDARY_BTN =
  'inline-flex items-center justify-center px-5 py-3 rounded-lg border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors'

const ALL_LANGS: Language[] = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

interface AboutHeroClientProps {
  lang: Language
  kicker: string
  h1: string
  heroLead: string // pre-filled with counts by the caller
  heroSub: string
  ctaDirectory: string
  ctaHardware: string
  ctaEcosystem: string
  ctaMcp: string
}

// Only the exact strings this component renders are accepted as props — never
// the whole AboutCopy object — so unfilled {{token}} templates elsewhere in
// the copy (e.g. other sections' body text) never leak into this Client
// Component's serialized hydration payload.
export function AboutHeroClient({ lang, kicker, h1, heroLead, heroSub, ctaDirectory, ctaHardware, ctaEcosystem, ctaMcp }: AboutHeroClientProps) {
  return (
    <div className="py-16 border-b border-primary/20 mb-16">
      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">{kicker}</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">{h1}</h1>
      <p className="text-xl text-text-primary font-medium leading-relaxed mb-4">{heroLead}</p>
      <p className="text-lg text-text-secondary leading-relaxed mb-8">{heroSub}</p>

      <div className="flex flex-wrap gap-3">
        <AboutTrackedLink href="/directory" via="hero_directory" className={PRIMARY_BTN}>
          {ctaDirectory}
        </AboutTrackedLink>
        <AboutTrackedLink href="/directory?hw=1#hw-profile-widget" via="hero_hardware" className={SECONDARY_BTN}>
          {ctaHardware}
        </AboutTrackedLink>
        <AboutTrackedLink href="#ecosystem" via="hero_ecosystem" className={SECONDARY_BTN}>
          {ctaEcosystem}
        </AboutTrackedLink>
        <AboutTrackedLink href="#use-promptquorum-from-your-ai" via="hero_mcp" className={SECONDARY_BTN}>
          {ctaMcp}
        </AboutTrackedLink>
      </div>

      <div className="mt-8">
        <LangLinksBar cluster="about" slug="" availableLangs={ALL_LANGS} initialLang={lang} />
      </div>
    </div>
  )
}
