import type { Language } from '@/lib/blog/blogContent'
import { HomeCard } from './HomeCard'
import { t as tTools } from '@/components/tools/tools-i18n'

function localizedPath(lang: Language, path: string): string {
  return lang === 'en' ? path : `/${lang}${path}`
}

/**
 * Compact 3-card CTA row linking to the site's three hardware-matching
 * tools: the existing VRAM Calculator article/tool page, and the two new
 * "What Can I Run?" / "Can I Run This?" standalone pages. Per the brief,
 * this block is a set of CTAs, not the tools themselves embedded — the
 * homepage instance stays compact and links out to the full page.
 */
export function LocalAiToolsBlock({ lang }: { lang: Language }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold text-text-primary mb-1">{tTools('toolsSectionHeading', lang)}</h2>
      <p className="text-sm text-text-secondary mb-4">{tTools('toolsSectionSub', lang)}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <HomeCard
          size="md"
          variant="action"
          icon="stats"
          href={localizedPath(lang, '/local-llms/vram-calculator-local-llm')}
          title={tTools('vramCalcCardTitle', lang)}
          description={tTools('vramCalcCardDesc', lang)}
        >
          <p className="text-sm text-primary font-medium mt-3">{tTools('vramCalcCardCta', lang)} →</p>
        </HomeCard>
        <HomeCard
          size="md"
          variant="action"
          icon="search"
          href={localizedPath(lang, '/tools/what-can-i-run')}
          title={tTools('whatCanIRunCardTitle', lang)}
          description={tTools('whatCanIRunCardDesc', lang)}
        >
          <p className="text-sm text-primary font-medium mt-3">{tTools('whatCanIRunCardCta', lang)} →</p>
        </HomeCard>
        <HomeCard
          size="md"
          variant="action"
          icon="verified"
          href={localizedPath(lang, '/tools/can-i-run-this')}
          title={tTools('canIRunThisCardTitle', lang)}
          description={tTools('canIRunThisCardDesc', lang)}
        >
          <p className="text-sm text-primary font-medium mt-3">{tTools('canIRunThisCardCta', lang)} →</p>
        </HomeCard>
      </div>
    </section>
  )
}
