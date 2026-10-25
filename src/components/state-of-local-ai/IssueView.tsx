import type { Language } from '@/lib/blog/blogContent'
import { getLangDir, toOutputLocale } from '@/lib/i18n/constants'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import {
  SITE, HUB_PATH, PRESS_CONTACT, LICENSE_URL, SERIES, getIssue, issuePath, evidencePath, loadFragment,
} from '@/lib/state-of-local-ai/issues'
import { SOLA_STRINGS } from '@/lib/state-of-local-ai/i18n'
import { Breadcrumb, JsonLd, Kicker, Hero, Lede, crumbSchema, CARD, CiteBox, ReuseBox, PressKit, hubCrumbs, localePath } from '@/components/state-of-local-ai/shared'
import { SymbolKit } from '@/components/state-of-local-ai/SymbolKit'
import { EvidenceController } from '@/components/state-of-local-ai/EvidenceController'

export function IssueView({ slug, lang }: { slug: string; lang: Language }) {
  const issue = getIssue(slug)!
  const t = SOLA_STRINGS[lang]
  const text = t.issues[slug]
  const crumbs = [...hubCrumbs(lang), { name: t.reportLabel.replace(/\d+/, String(issue.number).padStart(2, '0')) }]
  const selfPath = localePath(issuePath(issue), lang)
  const ev = evidencePath(issue)
  const english = lang === 'en'
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: text.title,
    description: text.metaDescription,
    inLanguage: toOutputLocale(lang),
    datePublished: issue.datePublished,
    dateModified: issue.dateModified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}${selfPath}` },
    image: `${SITE}${issuePath(issue)}/opengraph-image`,
    author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: `${SITE}${localePath('/about', lang)}` },
    publisher: { '@id': `${SITE}/#organization` },
    license: LICENSE_URL,
    creditText: `Kuepper, H. ${SERIES}, Report ${String(issue.number).padStart(2, '0')}. PromptQuorum`,
    copyrightHolder: { '@id': `${SITE}/#organization` },
    isPartOf: { '@type': 'CreativeWorkSeries', name: t.series, url: `${SITE}${localePath(HUB_PATH, lang)}` },
    ...(english ? {} : { translationOfWork: { '@type': 'Article', url: `${SITE}${issuePath(issue)}`, inLanguage: 'en' } }),
  }
  const aboutHref = localePath('/about', lang)
  return (
    <div className="sola" dir={getLangDir(lang)} lang={toOutputLocale(lang)}>
      <JsonLd data={article} />
      <JsonLd data={crumbSchema(crumbs.map((c, i) => (i === crumbs.length - 1 ? { name: c.name, path: selfPath } : c)), selfPath)} />
      <EvidenceController evidencePathname={ev} />
      <Hero>
        <Breadcrumb crumbs={crumbs} />
        <Kicker issue={issue} lang={lang} />
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mb-4">{text.title}</h1>
        <Lede>{text.subtitle}</Lede>
        <p className="text-sm text-text-muted">
          {t.by} <a href={aboutHref}>Hans Kuepper</a>, PromptQuorum · {formatDisplayDate(issue.isoDate, lang)} · {t.dataCutOff} {formatDisplayDate(issue.isoDate, lang)} · {t.version} {issue.version}
        </p>
        {english && (
          <>
            <p className="flex flex-wrap gap-3 mt-4 no-print">
              <a href={issue.files.reportPdf} download className="sola-btn inline-block rounded-lg bg-hub-violet px-4 py-2 text-sm font-semibold hover:opacity-90">Download report (PDF)</a>
              <a href={issue.files.appendixPdf} download className="inline-block rounded-lg border border-hub-violet-edge bg-white px-4 py-2 text-sm font-semibold hover:bg-hub-violet-tint">Download appendix with all evidence (PDF)</a>
            </p>
            <p className="mt-4 text-sm no-print"><b>Free to quote and reuse with credit and a link</b> · <a href="#reuse">How to link</a> · <a href="#press">Press kit</a> · <a href="#symbols">Chicken and egg symbols</a> · <a href="#cite-h">Cite</a></p>
          </>
        )}
        {t.translatedNote && (
          <p className="text-sm text-text-muted mt-2">{t.translatedNote} <a href={issuePath(issue)} hrefLang="en">English</a></p>
        )}
      </Hero>
      <div className="container mx-auto px-4 pt-10 pb-16">
        <div className="max-w-3xl mx-auto">
          <section aria-labelledby="kf-h" className={`${CARD} mb-10`}>
            <h2 id="kf-h" className="!mt-0 !text-xl">{t.keyFindings}</h2>
            <ol className="!ml-5 space-y-2 text-base">
              {issue.keyFindings.map((k, i) => (
                <li key={k.text}>
                  {text.keyFindings[i]}{' '}
                  <sup className="cite" dir="ltr">[{k.sources.map((s, j) => (<span key={s}>{j > 0 && ', '}<a href={`${ev}#${s}`}>{s}</a></span>))}]</sup>
                </li>
              ))}
            </ol>
          </section>
          {english && <PressKit issue={issue} evidencePath={ev} />}
        </div>

        <div className="prose-body" dangerouslySetInnerHTML={{ __html: loadFragment(issue.slug, 'article', lang, t.scrollableTable) }} />

        <div className="max-w-5xl mx-auto mt-10">
          <details id="evidence" className="evidence-all">
            <summary>
              <span>
                <span className="ev-title">{t.fullEvidenceTitle}</span>
                <span className="ev-sub">{t.fullEvidenceSub}{t.evidenceEnglishNote && ` ${t.evidenceEnglishNote}`}</span>
              </span>
              <span className="ev-chev" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5l4 4 4-4" /></svg></span>
            </summary>
            <div className="ev-body">
              <div className="evidence" lang="en" dir="ltr" dangerouslySetInnerHTML={{ __html: loadFragment(issue.slug, 'evidence') }} />
            </div>
          </details>
        </div>

        <div className="max-w-3xl mx-auto">
          {english && <ReuseBox issue={issue} />}
          {english && <SymbolKit issue={issue} evidencePath={ev} />}
          <CiteBox issue={issue} lang={lang} />

          <section aria-labelledby="about-h" className="mb-8">
            <h2 id="about-h" className="!mt-0">{t.aboutThisReport}</h2>
            <p>{text.disclosure}</p>
            <p><a href={aboutHref}>Hans Kuepper</a> {t.founderLine}</p>
            <p>{t.methodPre}<a href="#evidence">{t.methodLink1}</a>{t.methodMid}<a href={ev}>{t.methodLink2}</a>{t.methodPost}</p>
            <p>{t.pressContactLabel} <a dir="ltr" href={`mailto:${PRESS_CONTACT}`}>{PRESS_CONTACT}</a></p>
          </section>

          <section aria-labelledby="links-h" className="mb-8 no-print">
            <h2 id="links-h" className="!mt-0">{t.evidenceAndDownloads}</h2>
            <ul>
              {english && <li><a href="#reuse">Free to quote and reuse (licence and link)</a></li>}
              <li><a href={ev}>{t.evidenceFileSeparate}</a></li>
              {english && <li><a href={issue.files.reportPdf} download>Report (PDF)</a></li>}
              {english && <li><a href={issue.files.appendixPdf} download>Appendix with all evidence (PDF)</a></li>}
              {english && <li><a href="#symbols">Chicken and egg symbols (SVG, zip)</a></li>}
              <li><a href={issue.files.claims} download>{t.claimRegister}</a></li>
              <li><a href={issue.files.sources} download>{t.sources} (sources.csv)</a></li>
              <li><a href={issue.files.sourcesJson} download>{t.sources} (sources.json)</a></li>
              <li><a href={localePath(HUB_PATH, lang)}>{t.backTo} {t.series}</a></li>
            </ul>
          </section>

          <section aria-labelledby="corr-h">
            <h2 id="corr-h" className="!mt-0">{t.correctionsAndUpdates}</h2>
            <ul>
              {issue.corrections.map((c) => (<li key={c.date + c.text}>{formatDisplayDate(issue.isoDate, lang)}: {text.correction}</li>))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
