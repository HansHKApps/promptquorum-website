'use client'

import { LangLinksBar } from '@/components/LangLinksBar'
import { AboutTrackedLink } from '@/components/AboutTrackedLink'
import type { Language } from '@/lib/blog/blogContent'
import { HUB_BUTTON_CLASS } from '@/components/home/homeSurface'

const PRIMARY_BTN =
  `inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm ${HUB_BUTTON_CLASS}`
const SECONDARY_BTN =
  'inline-flex items-center justify-center px-5 py-3 rounded-xl border border-hub-violet-edge bg-white text-hub-violet-ink text-sm font-semibold hover:border-hub-violet transition-colors'

const ALL_LANGS: Language[] = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko']

interface AboutHeroClientProps {
  lang: Language
  kicker: string
  h1: string
  h1PlainExplainer: string
  heroLead: string // pre-filled with counts by the caller
  heroSub: string
  heroOpenWeightNote: string
  heroOpenWeightLinkLabel: string
  heroOpenWeightHref: string
  ctaDirectory: string
  ctaHardware: string
  ctaEcosystem: string
  ctaMcp: string
}

// Only the exact strings this component renders are accepted as props — never
// the whole AboutCopy object — so unfilled {{token}} templates elsewhere in
// the copy (e.g. other sections' body text) never leak into this Client
// Component's serialized hydration payload.
export function AboutHeroClient({
  lang,
  kicker,
  h1,
  h1PlainExplainer,
  heroLead,
  heroSub,
  heroOpenWeightNote,
  heroOpenWeightLinkLabel,
  heroOpenWeightHref,
  ctaDirectory,
  ctaHardware,
  ctaEcosystem,
  ctaMcp,
}: AboutHeroClientProps) {
  return (
    <div className="border-b border-hub-violet-edge bg-hub-violet-tint pt-24 pb-12">
     <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <p className="text-xs font-bold text-hub-violet-ink uppercase tracking-widest mb-4">{kicker}</p>
      <h1 className="text-[28px] sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-text-primary mb-2">{h1}</h1>
      <p className="text-sm text-text-secondary mb-6">{h1PlainExplainer}</p>
      <p className="text-xl text-text-primary font-medium leading-relaxed mb-4">{heroLead}</p>
      <p className="text-lg text-text-secondary leading-relaxed mb-4">{heroSub}</p>
      <p className="text-base text-text-secondary leading-relaxed mb-8">
        {heroOpenWeightNote}{' '}
        <AboutTrackedLink href={heroOpenWeightHref} via="hero_open_weight_explainer" className="text-hub-violet hover:text-hub-violet-ink font-semibold">
          {heroOpenWeightLinkLabel}
        </AboutTrackedLink>
      </p>

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
    </div>
  )
}
