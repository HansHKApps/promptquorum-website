import Image from 'next/image'
import type { ReactNode } from 'react'
import type { Language } from '@/lib/blog/blogContent'
import { translations } from '@/translations'
import { AboutHeroClient } from '@/components/AboutHeroClient'
import { AboutTrackedLink } from '@/components/AboutTrackedLink'
import { CATEGORY_GROUPS } from '@/lib/power-local-llm/apps/categories'
import { getHomeStats } from '@/lib/home/stats'
import { MCP_SERVER_URL } from '@/lib/mcp/clients'
import { ABOUT_COPY } from '@/lib/about/copy'
import { fillTokens } from '@/lib/about/types'

const SITE = 'https://www.promptquorum.com'
const GROUP_COUNT = CATEGORY_GROUPS.length
const CATEGORY_COUNT = CATEGORY_GROUPS.reduce((sum, g) => sum + g.subs.length, 0)

const MCP_TOOLS = [
  'search_promptquorum',
  'get_article',
  'list_clusters',
  'get_app_details',
  'explain_license',
  'search_apps',
  'list_categories',
]

const MCP_CONFIG = JSON.stringify({ mcpServers: { promptquorum: { url: MCP_SERVER_URL } } }, null, 2)

// Native autonyms — identical on every locale page by design (the German page
// still lists "English", the Japanese page still lists "Deutsch", etc.).
const LANGUAGE_NAMES = ['English', 'Deutsch', 'Français', '日本語', '中文', 'Español', 'Português', 'العربية', '한국어']

const SOCIAL = [
  ['X', 'https://x.com/HansKuepperAPPs'],
  ['LinkedIn', 'https://www.linkedin.com/company/promptquorum'],
  ['YouTube', 'https://www.youtube.com/channel/UC5PL_1lU5pdV1d1EC1XeLhA'],
  ['Substack', 'https://substack.com/@promptquorum'],
  ['GitHub', 'https://github.com/HansHKApps'],
]

const CARD = 'bg-card border border-primary/20 rounded-2xl p-6'
const H2 = 'text-2xl sm:text-3xl font-bold text-text-primary mb-3'
const LEAD = 'text-lg text-text-secondary leading-relaxed mb-8'
const BODY = 'text-text-secondary leading-relaxed'
const LINK = 'text-primary hover:text-primary/80 font-medium'

const ICON_PROPS = {
  className: 'w-6 h-6',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

function SearchIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </svg>
  )
}
function BookIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5v-15z" />
      <path d="M4 20.5A2.5 2.5 0 016.5 18H20v3H6.5A2.5 2.5 0 014 20.5z" />
    </svg>
  )
}
function LayersIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  )
}
function PlugIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M9 3v5M15 3v5" />
      <path d="M6 8h12v3a6 6 0 01-12 0V8z" />
      <path d="M12 17v4" />
    </svg>
  )
}
function DownloadBoxIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M12 3v10m0 0l-4-4m4 4l4-4" />
      <path d="M4 15v3.5A2.5 2.5 0 006.5 21h11a2.5 2.5 0 002.5-2.5V15" />
    </svg>
  )
}
function EngineIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" stroke="none" />
    </svg>
  )
}
function AppsGridIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </svg>
  )
}
const WAVE_ICONS = [DownloadBoxIcon, EngineIcon, AppsGridIcon]

function ArrowIcon({ className, flip }: { className: string; flip: boolean }) {
  return (
    <svg
      className={`${className}${flip ? ' -scale-x-100' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

interface PartProps {
  verb: string
  icon: ReactNode
  title: string
  children: ReactNode
  connectsLabel: string
  connects: string
  href: string
  cta: string
  arrow: string
  via: string
}

function Part({ verb, icon, title, children, connectsLabel, connects, href, cta, arrow, via }: PartProps) {
  return (
    <div className={`${CARD} flex flex-col`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">{icon}</div>
        <div>
          <div className="text-xs font-bold text-primary uppercase tracking-widest">{verb}</div>
          <h3 className="text-lg font-bold text-text-primary leading-snug">{title}</h3>
        </div>
      </div>
      <p className={`${BODY} mb-3`}>{children}</p>
      <p className="text-sm text-text-secondary border-l-2 border-primary/30 pl-3 mb-4">
        <strong className="text-text-primary">{connectsLabel}</strong> {connects}
      </p>
      <AboutTrackedLink href={href} via={via} className={`${LINK} text-sm mt-auto`}>
        {cta} {arrow}
      </AboutTrackedLink>
    </div>
  )
}

export function AboutPageContent({ lang }: { lang: Language }) {
  const copy = ABOUT_COPY[lang]
  const stats = getHomeStats(lang)
  const description = translations[lang].aboutMetaDescription
  const path = lang === 'en' ? '/about' : `/${lang}/about`
  const url = `${SITE}${path}`
  const rtl = lang === 'ar'
  const arrow = rtl ? '←' : '→'

  const heroLead = fillTokens(copy.heroLead, { appCount: stats.totalApps, articleCount: stats.totalArticles })
  const partFindBody = fillTokens(copy.partFindBody, {
    appCount: stats.totalApps,
    groupCount: GROUP_COUNT,
    categoryCount: CATEGORY_COUNT,
  })
  const partLearnBody = fillTokens(copy.partLearnBody, { articleCount: stats.totalArticles })

  const practiceStepLabels = [copy.findLabel, copy.learnLabel, copy.useLabel, copy.askLabel]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              url,
              name: copy.h1,
              description,
              inLanguage: lang === 'pt' ? 'pt-BR' : lang,
              isPartOf: { '@type': 'WebSite', url: SITE },
              mainEntity: { '@id': `${SITE}/#organization` },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': `${SITE}/#organization`,
              name: 'PromptQuorum',
              url: SITE,
              logo: `${SITE}/logo.svg`,
              email: 'hello@promptquorum.com',
              founder: { '@id': `${SITE}/about#founder` },
              sameAs: SOCIAL.map(([, u]) => u),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': `${SITE}/about#founder`,
              name: 'Hans Küpper',
              alternateName: 'Hans Kuepper',
              url,
              image: `${SITE}/images/hans-kuepper.jpg`,
              jobTitle: 'Founder',
              worksFor: { '@id': `${SITE}/#organization` },
              sameAs: ['https://www.linkedin.com/in/hanskuepper/', 'https://x.com/HansKuepperAPPs', 'https://github.com/HansHKApps'],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: copy.breadcrumbHome, item: lang === 'en' ? SITE : `${SITE}/${lang}` },
                { '@type': 'ListItem', position: 2, name: copy.breadcrumbAbout, item: url },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AboutHeroClient
            lang={lang}
            kicker={copy.kicker}
            h1={copy.h1}
            heroLead={heroLead}
            heroSub={copy.heroSub}
            ctaDirectory={copy.ctaDirectory}
            ctaHardware={copy.ctaHardware}
            ctaEcosystem={copy.ctaEcosystem}
            ctaMcp={copy.ctaMcp}
          />

          {/* Three waves: the theory */}
          <section id="three-waves" className="mb-20 scroll-mt-24">
            <h2 className={H2}>{copy.wavesH2}</h2>
            <p className={LEAD}>{copy.wavesLead}</p>

            <ol aria-hidden="true" className="flex flex-col md:flex-row md:items-center justify-center gap-2 mb-10">
              {copy.waves.map((w, i) => {
                const Icon = WAVE_ICONS[i]
                return (
                  <li key={w.n} className="flex flex-col md:flex-row md:items-center gap-2">
                    <div className="flex flex-col items-center text-center gap-1.5 w-40 mx-auto md:mx-0">
                      <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <Icon />
                      </div>
                      <div className="text-[11px] font-bold text-primary uppercase tracking-widest">{w.n}</div>
                      <div className="text-sm font-semibold text-text-primary leading-tight">{w.product}</div>
                    </div>
                    {i < copy.waves.length - 1 && (
                      <div className="flex items-center justify-center text-primary/40 shrink-0">
                        <ArrowIcon className="w-5 h-5 rotate-90 md:rotate-0" flip={rtl} />
                      </div>
                    )}
                  </li>
                )
              })}
            </ol>

            <ol className="flex flex-col md:flex-row md:items-stretch gap-3 md:gap-2">
              {copy.waves.map((w, i) => (
                <li key={w.n} className="flex flex-col md:flex-row md:flex-1 items-stretch gap-3 md:gap-2">
                  <div
                    className={`flex-1 rounded-2xl p-6 border ${
                      i === copy.waves.length - 1 ? 'bg-primary/10 border-primary shadow-sm' : 'bg-card border-primary/20'
                    }`}
                  >
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{w.n}</div>
                    <h3 className="text-xl font-bold text-text-primary">{w.title}</h3>
                    <p className="text-primary font-semibold mb-3">{w.solved}</p>
                    <p className={`${BODY} mb-4 text-sm`}>{w.text}</p>
                    <p className="text-sm text-text-secondary border-t border-primary/20 pt-3">
                      <strong className="text-text-primary">{copy.theCatchLabel}</strong> {w.catch}
                    </p>
                    {i === copy.waves.length - 1 && (
                      <p className="mt-4 inline-block rounded-full bg-primary text-white text-xs font-semibold px-3 py-1">
                        {copy.waveHighlightBadge}
                      </p>
                    )}
                  </div>
                  {i < copy.waves.length - 1 && (
                    <div className="flex items-center justify-center text-primary/60 shrink-0" aria-hidden="true">
                      <ArrowIcon className="w-6 h-6 rotate-90 md:rotate-0" flip={rtl} />
                    </div>
                  )}
                </li>
              ))}
            </ol>

            <p className="text-text-primary font-medium mt-6">{copy.wavesClosing}</p>
          </section>

          {/* Philosophy */}
          <section id="why-local" className="mb-20 scroll-mt-24">
            <h2 className={H2}>{copy.believeH2}</h2>
            <div className="border-l-4 border-primary pl-5 mb-8">
              <p className="text-xl font-semibold text-text-primary mb-2">{copy.believeQuoteTitle}</p>
              <p className={BODY}>
                {copy.believeQuotePre} <strong className="text-text-primary">{copy.believeQuoteBold}</strong> {copy.believeQuotePost}
              </p>
            </div>
            <ul className="space-y-4">
              {copy.beliefs.map(([lead, rest]) => (
                <li key={lead} className="flex gap-3">
                  <CheckIcon />
                  <p className={BODY}>
                    <strong className="text-text-primary">{lead}</strong> {rest}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-text-primary font-semibold mt-6">{copy.believeClosing}</p>
            <p className={`${BODY} italic mt-4`}>{copy.believeItalic}</p>
          </section>

          {/* Ecosystem */}
          <section id="ecosystem" className="mb-20 scroll-mt-24">
            <h2 className={H2}>{copy.ecosystemH2}</h2>
            <p className={LEAD}>{copy.ecosystemLead}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Part
                verb={copy.findLabel}
                icon={<SearchIcon />}
                title={copy.partFindTitle}
                connectsLabel={copy.connectsLabel}
                connects={copy.partFindConnects}
                href="/directory"
                cta={copy.ctaOpenDirectory}
                arrow={arrow}
                via="part_directory"
              >
                {partFindBody}
              </Part>
              <Part
                verb={copy.learnLabel}
                icon={<BookIcon />}
                title={copy.partLearnTitle}
                connectsLabel={copy.connectsLabel}
                connects={copy.partLearnConnects}
                href="/local-llms"
                cta={copy.ctaReadGuides}
                arrow={arrow}
                via="part_knowledge"
              >
                {partLearnBody}
              </Part>
              <Part
                verb={copy.useLabel}
                icon={<LayersIcon />}
                title={copy.partUseTitle}
                connectsLabel={copy.connectsLabel}
                connects={copy.partUseConnects}
                href="/pq-apps"
                cta={copy.ctaAboutApp}
                arrow={arrow}
                via="part_app"
              >
                {copy.partUseBody}
              </Part>
              <Part
                verb={copy.askLabel}
                icon={<PlugIcon />}
                title={copy.partAskTitle}
                connectsLabel={copy.connectsLabel}
                connects={copy.partAskConnects}
                href="#use-promptquorum-from-your-ai"
                cta={copy.ctaSeeHowToConnect}
                arrow={arrow}
                via="part_mcp"
              >
                {copy.partAskBody}
              </Part>
            </div>

            <div className={CARD}>
              <h3 className="text-lg font-bold text-text-primary mb-1">{copy.practiceH3}</h3>
              <p className="text-sm text-text-secondary mb-4">{copy.practiceIntro}</p>
              <ol className="space-y-3">
                {copy.practiceSteps.map((text, i) => (
                  <li key={practiceStepLabels[i]} className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className={BODY}>
                      <strong className="text-text-primary">{practiceStepLabels[i]}.</strong> {text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Goal-first + audience */}
          <section id="for-you" className="mb-20 scroll-mt-24">
            <h2 className={H2}>{copy.forYouH2}</h2>
            <p className={`${BODY} mb-4`}>{copy.forYouLead}</p>
            <ul className="space-y-2 mb-4">
              {copy.goals.map((text, i) => {
                const hrefs = ['/directory?want=chat', '/directory?hw=1#hw-profile-widget', '/directory?want=docs', '/directory?want=code', '/directory?want=audio']
                const vias = ['goal_chat', 'goal_ram', 'goal_docs', 'goal_code', 'goal_audio']
                return (
                  <li key={text}>
                    <AboutTrackedLink
                      href={hrefs[i]}
                      via={vias[i]}
                      className="block bg-card border border-primary/20 rounded-xl px-4 py-3 text-text-primary italic hover:border-primary/40 transition-colors"
                    >
                      {text}
                    </AboutTrackedLink>
                  </li>
                )
              })}
            </ul>
            <div className="flex flex-wrap gap-4 mb-10">
              <AboutTrackedLink href="/directory" via="goal_browse" className={LINK}>
                {copy.ctaBrowse} {arrow}
              </AboutTrackedLink>
              <AboutTrackedLink href="/directory?hw=1#hw-profile-widget" via="goal_hardware" className={LINK}>
                {copy.ctaSetHardware} {arrow}
              </AboutTrackedLink>
            </div>

            <div className="grid sm:grid-cols-5 gap-4">
              <div className={`${CARD} sm:col-span-3`}>
                <h3 className="text-lg font-bold text-text-primary mb-3">{copy.forYouIfH3}</h3>
                <ul className="space-y-3">
                  {copy.forYouList.map((f) => (
                    <li key={f} className="flex gap-3">
                      <CheckIcon />
                      <p className={`${BODY} text-sm`}>{f}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${CARD} sm:col-span-2`}>
                <h3 className="text-lg font-bold text-text-primary mb-3">{copy.notForYouH3}</h3>
                <p className={`${BODY} text-sm`}>{copy.notForYouText}</p>
              </div>
            </div>
          </section>

          {/* Neutral */}
          <section className="mb-20">
            <h2 className={H2}>{copy.neutralH2}</h2>
            <p className={`${BODY} mb-4`}>{copy.neutralLead}</p>
            <ul className="space-y-3">
              {copy.neutral.map(([lead, rest]) => (
                <li key={lead} className="flex gap-3">
                  <CheckIcon />
                  <p className={BODY}>
                    <strong className="text-text-primary">{lead}</strong> {rest}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* Languages */}
          <section className="mb-20">
            <h2 className={H2}>{copy.languagesH2}</h2>
            <p className={`${BODY} mb-4`}>{copy.languagesLead}</p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {LANGUAGE_NAMES.map((l) => (
                <li key={l} className="px-3 py-1.5 rounded-full bg-primary/10 text-text-primary text-sm font-medium">
                  {l}
                </li>
              ))}
            </ul>
            <p className={BODY}>{copy.languagesClosing}</p>
          </section>

          {/* MCP */}
          <section id="use-promptquorum-from-your-ai" className="mb-20 scroll-mt-24">
            <h2 className={H2}>{copy.mcpH2}</h2>
            <p className={`${BODY} mb-4`}>{copy.mcpFirstClaim}</p>
            <p className={`${BODY} mb-4`}>{copy.mcpBenefit}</p>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-text-secondary">
              {copy.mcpBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className={`${BODY} mb-4`}>{copy.mcpLead}</p>
            <dl className="space-y-2 mb-4 text-sm">
              <div>
                <dt className="inline font-semibold text-text-primary">{copy.mcpEndpointLabel} </dt>
                <dd className="inline text-text-secondary">
                  <code dir="ltr" className="break-all">{MCP_SERVER_URL}</code> {copy.mcpEndpointNote}
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold text-text-primary">{copy.mcpManifestLabel} </dt>
                <dd className="inline">
                  <a dir="ltr" href="/mcp.json" className={`${LINK} break-all`}>{SITE}/mcp.json</a>
                </dd>
              </div>
            </dl>
            <pre dir="ltr" className="bg-card border border-primary/20 rounded-xl p-4 text-sm overflow-x-auto text-left mb-4">
              <code>{MCP_CONFIG}</code>
            </pre>
            <p className={`${BODY} mb-4 text-sm`}>
              <strong className="text-text-primary">{copy.mcpToolsLabel}</strong>{' '}
              <span dir="ltr" className="inline">
                {MCP_TOOLS.map((t, i) => (
                  <span key={t}>
                    <code>{t}</code>
                    {i < MCP_TOOLS.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </span>
            </p>
            <AboutTrackedLink href="/directory#mcp-connect-heading" via="mcp_guide" className={LINK}>
              {copy.ctaMcpGuide} {arrow}
            </AboutTrackedLink>
          </section>

          {/* Founder */}
          <section className="mb-20">
            <h2 className={H2}>{copy.founderH2}</h2>
            <div className={`${CARD} mt-6 flex flex-col sm:flex-row gap-6 sm:gap-8`}>
              <Image
                src="/images/hans-kuepper.jpg"
                alt={copy.founderImgAlt}
                width={267}
                height={400}
                className="w-36 sm:w-44 h-auto rounded-xl object-cover self-start shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-text-primary">{'Hans Küpper'}</h3>
                <p className="text-sm text-primary font-medium mb-4">{copy.founderTitle}</p>
                <div className={`${BODY} space-y-4`}>
                  <p>{copy.founderBioP1}</p>
                  <p>{copy.founderBioP2}</p>
                  <p>{copy.founderBioP3}</p>
                  <p className="text-sm">{copy.founderBioSmall}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section className="mb-20">
            <h2 className={H2}>{copy.roadmapH2}</h2>
            <p className={`${BODY} mb-4`}>{copy.roadmapLead}</p>
            <ul className="space-y-3 mb-6">
              {copy.roadmap.map(([lead, rest]) => (
                <li key={lead} className="flex gap-3">
                  <CheckIcon />
                  <p className={BODY}>
                    <strong className="text-text-primary">{lead}</strong> {rest}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-text-primary font-semibold">{copy.roadmapClosing}</p>
          </section>

          {/* Get involved */}
          <section className="mb-4">
            <h2 className={`${H2} mb-4`}>{copy.involvedH2}</h2>
            <ul className={`${BODY} space-y-3`}>
              <li>
                <strong className="text-text-primary">{copy.foundersLabel}</strong> {copy.foundersText}{' '}
                <a dir="ltr" href="mailto:hello@promptquorum.com" className={`${LINK} inline-block`}>hello@promptquorum.com</a>
              </li>
              <li>
                <strong className="text-text-primary">{copy.pressLabel}</strong>{' '}
                <a dir="ltr" href="mailto:hello@promptquorum.com" className={`${LINK} inline-block`}>hello@promptquorum.com</a>
              </li>
              <li>
                <strong className="text-text-primary">{copy.followLabel}</strong>{' '}
                {SOCIAL.map(([label, socialUrl], i) => (
                  <span key={label}>
                    <AboutTrackedLink href={socialUrl} via={`follow_${label.toLowerCase()}`} external className={LINK}>
                      {label}
                    </AboutTrackedLink>
                    {i < SOCIAL.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}
