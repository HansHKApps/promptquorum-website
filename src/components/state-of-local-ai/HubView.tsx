import type { Language } from '@/lib/blog/blogContent'
import { getLangDir, toOutputLocale } from '@/lib/i18n/constants'
import { formatDisplayDate, formatDisplayMonthYear } from '@/lib/formatDisplayDate'
import { HUB_PATH, NEXT_ISSUE_ISO, PRESS_CONTACT, ISSUES, LATEST, issuePath, evidencePath } from '@/lib/state-of-local-ai/issues'
import { SOLA_STRINGS } from '@/lib/state-of-local-ai/i18n'
import { Breadcrumb, JsonLd, Hero, crumbSchema, CARD, BTN, CiteBox, kickerFor, localePath } from '@/components/state-of-local-ai/shared'

export function HubView({ lang }: { lang: Language }) {
  const t = SOLA_STRINGS[lang]
  const selfPath = localePath(HUB_PATH, lang)
  const crumbs = [
    { name: t.home, path: lang === 'en' ? '/' : `/${lang}` },
    { name: t.about, path: localePath('/about', lang) },
    { name: t.series },
  ]
  const latest = t.issues[LATEST.slug]
  const next = formatDisplayMonthYear(NEXT_ISSUE_ISO, lang)
  return (
    <div className="sola" dir={getLangDir(lang)} lang={toOutputLocale(lang)}>
      <JsonLd data={crumbSchema(crumbs, selfPath)} />
      <Hero>
        <Breadcrumb crumbs={crumbs} />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">{t.series}</h1>
        <div className="text-lg text-text-secondary leading-relaxed space-y-3">
          <p>{t.hubIntro1}</p>
          <p>{t.hubIntro2}</p>
          <p className="!mb-0">{t.nextIssue} {next}.</p>
        </div>
      </Hero>
      <div className="container mx-auto px-4 pt-10 pb-16 max-w-3xl">
        <section aria-labelledby="latest-h" className={`${CARD} mb-10`}>
          <h2 id="latest-h" className="!mt-0 !text-sm uppercase tracking-wide text-text-muted">{t.latestReport}</h2>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-hub-violet-ink !mb-1">{kickerFor(LATEST, lang)}</p>
          <h3 className="!mt-0 !text-2xl !text-text-primary">{latest.title}</h3>
          <p className="text-text-secondary">{latest.subtitle}</p>
          <p className="text-sm text-text-muted">{formatDisplayDate(LATEST.isoDate, lang)}</p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2 !mb-0">
            <a href={localePath(issuePath(LATEST), lang)} className={BTN}>{t.readReport}</a>
            <a href={evidencePath(LATEST)} hrefLang="en">{t.evidenceFile}</a>
          </p>
        </section>

        <section aria-labelledby="archive-h" className="mb-10">
          <h2 id="archive-h" className="!mt-0">{t.archive}</h2>
          <ul className="!list-none !ml-0 space-y-3">
            {ISSUES.map((i) => (
              <li key={i.slug}>
                <a href={localePath(issuePath(i), lang)} className="font-semibold">{kickerFor(i, lang).split(' · ').slice(1).join(' · ')}: {t.issues[i.slug].title}</a>
                <span className="text-text-muted text-sm"> · {formatDisplayDate(i.isoDate, lang)}</span>
              </li>
            ))}
          </ul>
        </section>

        <CiteBox issue={LATEST} lang={lang} />

        <section aria-labelledby="press-h">
          <h2 id="press-h" className="!mt-0">{t.pressContact}</h2>
          <p><a dir="ltr" href={`mailto:${PRESS_CONTACT}`}>{PRESS_CONTACT}</a></p>
        </section>
      </div>
    </div>
  )
}
