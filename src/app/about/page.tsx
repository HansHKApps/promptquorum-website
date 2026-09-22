import type { Metadata } from 'next'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { AboutHeroClient } from '@/components/AboutHeroClient'
import { AboutTrackedLink } from '@/components/AboutTrackedLink'
import { CATEGORY_GROUPS } from '@/lib/power-local-llm/apps/categories'
import { getHomeStats } from '@/lib/home/stats'
import { MCP_SERVER_URL } from '@/lib/mcp/clients'

export const dynamic = 'force-static'
export const revalidate = 86400

const SITE = 'https://www.promptquorum.com'

// Counts come from the same data the homepage and directory use, so the pages never drift apart.
const STATS = getHomeStats('en')
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

const LANGUAGES = ['English', 'Deutsch', 'Français', '日本語', '中文', 'Español', 'Português', 'العربية', '한국어']

const CARD = 'bg-card border border-primary/20 rounded-2xl p-6'
const H2 = 'text-2xl sm:text-3xl font-bold text-text-primary mb-3'
const LEAD = 'text-lg text-text-secondary leading-relaxed mb-8'
const BODY = 'text-text-secondary leading-relaxed'
const LINK = 'text-primary hover:text-primary/80 font-medium'

export async function generateMetadata(): Promise<Metadata> {
  const t = translations.en
  return {
    title: t.aboutMetaTitle,
    description: t.aboutMetaDescription,
    alternates: generateAlternates('/about', 'en', true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.aboutMetaTitle,
      description: t.aboutMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.aboutMetaTitle,
      description: t.aboutMetaDescription,
    },
  }
}

const WAVES = [
  {
    n: 'Wave 1',
    title: 'Models',
    solved: 'Made AI downloadable.',
    text: 'Open-weight and open-source models (Llama, Qwen, Mistral, Gemma, DeepSeek and hundreds more) went from research artifacts to files anyone can download. Hugging Face is where they live.',
    catch: 'A model file cannot answer a question by itself.',
    highlight: false,
  },
  {
    n: 'Wave 2',
    title: 'Runtimes',
    solved: 'Made models runnable.',
    text: 'Ollama, LM Studio and llama.cpp turned a download into a running model on your own machine. Type a prompt, get an answer.',
    catch: 'Usage stays narrow. For most people it is a chat window, and many stop there.',
    highlight: false,
  },
  {
    n: 'Wave 3',
    title: 'Applications',
    solved: 'Makes local AI useful.',
    text: 'Apps built on top: chat with your documents, code in your editor, run agents, transcribe and speak, generate images and video, automate your home. They work with the model directly or through Ollama, LM Studio and other interfaces.',
    catch: 'There are hundreds of them, scattered across GitHub READMEs, Discord threads and changelogs, mostly in English and quickly outdated.',
    highlight: true,
  },
]

const BELIEFS = [
  ['Local models are open.', 'You can download the weights and run them on your own hardware. No one has to approve your prompt, and no one sits between you and the model.'],
  ['Cost stays in your control.', 'Once a model runs on your machine, there is no meter, no per-token bill and no price change you did not agree to. The hardware is the cost, and you decide how much to spend on it.'],
  ['It can’t be taken away.', 'A cloud model can be changed, restricted, repriced or shut down overnight. A model you have downloaded keeps working the same way as long as you keep the file.'],
  ['Your data stays with you.', 'When both the app and the model run locally, your prompts and documents never leave your machine.'],
  ['Independence is the point.', 'Local AI is more than a cheaper alternative. It is a way to depend on no one else’s terms, servers or decisions.'],
]

const GOALS = [
  'I want a private ChatGPT alternative on my laptop.',
  'I have 16 GB of RAM. What can I realistically run?',
  'I want to chat with my own PDFs offline.',
  'I need a local coding assistant for VS Code.',
  'I want an offline voice assistant for my smart home.',
]

const FOR_YOU = [
  'You installed Ollama or LM Studio, chatted for a while and wondered what else you can do with it.',
  'You want AI that is private, works offline or does not need another subscription.',
  'You are choosing local-AI software and want the same facts for every option in one place.',
  'You build or maintain a local-AI tool and want an accurate entry for it.',
  'You read in a language other than English and are tired of English-only setup guides.',
  'You want your own AI assistant to answer local-AI questions from a maintained source.',
]

const NEUTRAL = [
  ['No paid placements.', 'Inclusion and order in the directory are never for sale.'],
  ['Same format for every entry.', 'A project run by one developer gets the same page structure as a venture-backed one.'],
  ['Always the official source.', 'Every entry links to the tool’s own website.'],
  ['Transparent review status.', 'Every entry has a PromptQuorum review section. If it has not been reviewed yet, the page says “Not yet reviewed” rather than hiding the gap.'],
  ['Founder input is labelled.', 'When a tool’s maker adds context, it is clearly marked as provided by the maker.'],
  ['Corrections are welcome.', 'Directory data can go out of date. Anyone, and founders especially, can report errors: hello@promptquorum.com.'],
  ['Inclusion criteria are public.', 'We list real apps with a proper website and an update within the last six months, with a focus on local LLM use.'],
]

const ROADMAP = [
  ['Founder verification:', 'tool makers confirm and extend their own entries.'],
  ['Site-wide hardware awareness:', 'your hardware profile shows compatibility on every page that mentions a tool, not just in the directory.'],
  ['Curated video:', 'the best walkthrough video attached to each app.'],
  ['Cloud ↔ local pairing:', 'for each cloud service, the local alternative, and the other way round.'],
]

const SOCIAL = [
  ['X', 'https://x.com/HansKuepperAPPs'],
  ['LinkedIn', 'https://www.linkedin.com/company/promptquorum'],
  ['YouTube', 'https://www.youtube.com/channel/UC5PL_1lU5pdV1d1EC1XeLhA'],
  ['Substack', 'https://substack.com/@promptquorum'],
  ['GitHub', 'https://github.com/HansHKApps'],
]

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
function ArrowIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
  connects: string
  href: string
  cta: string
  via: string
}

function Part({ verb, icon, title, children, connects, href, cta, via }: PartProps) {
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
        <strong className="text-text-primary">Works with the rest:</strong> {connects}
      </p>
      <AboutTrackedLink href={href} via={via} className={`${LINK} text-sm mt-auto`}>
        {cta} →
      </AboutTrackedLink>
    </div>
  )
}

export default function AboutPage() {
  const description = translations.en.aboutMetaDescription

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              url: `${SITE}/about`,
              name: 'About PromptQuorum',
              description,
              inLanguage: 'en',
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
              sameAs: SOCIAL.map(([, url]) => url),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': `${SITE}/about#founder`,
              name: 'Hans Küpper',
              alternateName: 'Hans Kuepper',
              url: `${SITE}/about`,
              image: `${SITE}/images/hans-kuepper.jpg`,
              jobTitle: 'Founder',
              worksFor: { '@id': `${SITE}/#organization` },
              sameAs: ['https://www.linkedin.com/in/hanskuepper/', 'https://x.com/HansKuepperAPPs', 'https://github.com/HansHKApps'],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
                { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE}/about` },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AboutHeroClient appCount={STATS.totalApps} articleCount={STATS.totalArticles} />

          {/* Three waves: the theory */}
          <section id="three-waves" className="mb-20 scroll-mt-24">
            <h2 className={H2}>From models to apps: three waves of open AI</h2>
            <p className={LEAD}>Open-weight and open-source AI has moved in three waves. Each one solved a problem and exposed the next.</p>

            <ol className="flex flex-col md:flex-row md:items-stretch gap-3 md:gap-2">
              {WAVES.map((w, i) => (
                <li key={w.n} className="flex flex-col md:flex-row md:flex-1 items-stretch gap-3 md:gap-2">
                  <div
                    className={`flex-1 rounded-2xl p-6 border ${
                      w.highlight ? 'bg-primary/10 border-primary shadow-sm' : 'bg-card border-primary/20'
                    }`}
                  >
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{w.n}</div>
                    <h3 className="text-xl font-bold text-text-primary">{w.title}</h3>
                    <p className="text-primary font-semibold mb-3">{w.solved}</p>
                    <p className={`${BODY} mb-4 text-sm`}>{w.text}</p>
                    <p className="text-sm text-text-secondary border-t border-primary/20 pt-3">
                      <strong className="text-text-primary">The catch:</strong> {w.catch}
                    </p>
                    {w.highlight && (
                      <p className="mt-4 inline-block rounded-full bg-primary text-white text-xs font-semibold px-3 py-1">
                        This is where PromptQuorum works
                      </p>
                    )}
                  </div>
                  {i < WAVES.length - 1 && (
                    <div className="flex items-center justify-center text-primary/60 shrink-0" aria-hidden="true">
                      <ArrowIcon className="w-6 h-6 rotate-90 md:rotate-0" />
                    </div>
                  )}
                </li>
              ))}
            </ol>

            <p className="text-text-primary font-medium mt-6">
              Models are the engine. Runtimes start the engine. Applications are what people actually drive. PromptQuorum is the
              map, the manual and the test drive for that third wave.
            </p>
          </section>

          {/* Philosophy */}
          <section id="why-local" className="mb-20 scroll-mt-24">
            <h2 className={H2}>Why local: what we believe</h2>
            <div className="border-l-4 border-primary pl-5 mb-8">
              <p className="text-xl font-semibold text-text-primary mb-2">The internet should be open. AI should be open too.</p>
              <p className={BODY}>
                The web became useful because anyone could publish on it and anyone could read it, and no single company decided what
                you were allowed to do. AI is at the same fork. It can be something you rent from a few providers, or something you own
                and run yourself. <strong className="text-text-primary">We believe local AI is the better path</strong> for most uses that
                matter over time: what it costs, who controls it, who sees your data and whether it is still there next year.
              </p>
            </div>
            <ul className="space-y-4">
              {BELIEFS.map(([lead, rest]) => (
                <li key={lead} className="flex gap-3">
                  <CheckIcon />
                  <p className={BODY}>
                    <strong className="text-text-primary">{lead}</strong> {rest}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-text-primary font-semibold mt-6">
              Independence from control is the theme of everything on this site. It is why the directory is neutral, why every entry
              links to the official source and why we publish in nine languages.
            </p>
            <p className={`${BODY} italic mt-4`}>
              We don&apos;t believe cloud AI is bad. We believe you should have a real choice, and that choosing local should be as easy
              as choosing cloud.
            </p>
          </section>

          {/* Ecosystem */}
          <section id="ecosystem" className="mb-20 scroll-mt-24">
            <h2 className={H2}>One ecosystem, four parts that work together</h2>
            <p className={LEAD}>
              PromptQuorum is not just an app, and not just a directory. It is four parts built around the same goal, so you can go from
              &ldquo;what should I run?&rdquo; to a working setup without leaving the site.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Part
                verb="Find"
                icon={<SearchIcon />}
                title="The Local AI Directory"
                connects="entries link to their PromptQuorum review and guides where they exist."
                href="/directory"
                cta="Open the directory"
                via="part_directory"
              >
                {STATS.totalApps} local-AI apps in {GROUP_COUNT} groups and {CATEGORY_COUNT} categories. Every entry has the same fields:
                what it does, platforms, license, price and hardware needs, plus a link to the official website. Set a hardware profile and
                each app shows whether it runs well, runs marginally or won&apos;t run on your machine.
              </Part>
              <Part
                verb="Learn"
                icon={<BookIcon />}
                title="The Knowledge Base"
                connects="reviews and comparisons link back to the directory entries they cover."
                href="/local-llms"
                cta="Read the guides"
                via="part_knowledge"
              >
                {STATS.totalArticles} articles: guides, reviews and comparisons on hardware (VRAM, Apple Silicon, GPUs, CPU-only),
                software, models, quantization, RAG, agents, voice, prompt engineering and complete local-AI stacks. Written for people who
                want a working setup, not a theory lecture.
              </Part>
              <Part
                verb="Use"
                icon={<LayersIcon />}
                title="The PromptQuorum app"
                connects="it connects to Ollama and LM Studio, both listed in the directory, so local models sit next to cloud ones."
                href="/pq-apps"
                cta="About the app"
                via="part_app"
              >
                A free multi-model app, currently in beta. Send one prompt to several models, including local ones, and see where their
                answers agree and where they contradict each other. Agreement is a useful signal, not proof. You bring your own keys and
                models, and there is no telemetry. This is where PromptQuorum started.
              </Part>
              <Part
                verb="Ask"
                icon={<PlugIcon />}
                title="The MCP server"
                connects="it reads the same directory and guides as this website, so your assistant answers from the same source you do."
                href="#use-promptquorum-from-your-ai"
                cta="See how to connect"
                via="part_mcp"
              >
                A public, read-only server for the Model Context Protocol. Claude, Cursor and any MCP-capable assistant can search the
                directory, pull app details, read guides and explain licenses. No account and no API key. When your AI answers a question
                about local AI, it can draw on PromptQuorum instead of guessing.
              </Part>
            </div>

            <div className={CARD}>
              <h3 className="text-lg font-bold text-text-primary mb-1">How it works in practice</h3>
              <p className="text-sm text-text-secondary mb-4">
                Say you have 16 GB of RAM and want to chat with your own PDFs offline.
              </p>
              <ol className="space-y-3">
                {[
                  ['Find', 'Set your hardware profile in the directory and pick the “Chat with docs” use case. Each app shows whether it runs well on your machine.'],
                  ['Learn', 'Open the review of the app you like, and the guide for the runtime it needs, for example Ollama or LM Studio.'],
                  ['Use', 'Run it with a local model. When you want to see how different models answer the same question, use the PromptQuorum app.'],
                  ['Ask', 'Or skip the browsing. Connect the MCP server and ask your own AI assistant the same question.'],
                ].map(([step, text], i) => (
                  <li key={step} className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className={BODY}>
                      <strong className="text-text-primary">{step}.</strong> {text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Goal-first + audience */}
          <section id="for-you" className="mb-20 scroll-mt-24">
            <h2 className={H2}>Start with a goal, not a product name</h2>
            <p className={`${BODY} mb-4`}>
              You should not need to know that &ldquo;llama.cpp&rdquo; or &ldquo;Open WebUI&rdquo; exist before you can find them. Start
              with what you want to do:
            </p>
            <ul className="space-y-2 mb-4">
              {GOALS.map((g) => (
                <li key={g}>
                  <AboutTrackedLink
                    href="/directory"
                    via="goal_usecase"
                    className="block bg-card border border-primary/20 rounded-xl px-4 py-3 text-text-primary italic hover:border-primary/40 transition-colors"
                  >
                    &ldquo;{g}&rdquo;
                  </AboutTrackedLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 mb-10">
              <AboutTrackedLink href="/directory" via="goal_browse" className={LINK}>
                Browse by use case →
              </AboutTrackedLink>
              <AboutTrackedLink href="/directory#hw-profile-widget" via="goal_hardware" className={LINK}>
                Set my hardware profile →
              </AboutTrackedLink>
            </div>

            <div className="grid sm:grid-cols-5 gap-4">
              <div className={`${CARD} sm:col-span-3`}>
                <h3 className="text-lg font-bold text-text-primary mb-3">PromptQuorum is for you if&hellip;</h3>
                <ul className="space-y-3">
                  {FOR_YOU.map((f) => (
                    <li key={f} className="flex gap-3">
                      <CheckIcon />
                      <p className={`${BODY} text-sm`}>{f}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${CARD} sm:col-span-2`}>
                <h3 className="text-lg font-bold text-text-primary mb-3">It is probably not for you if&hellip;</h3>
                <p className={`${BODY} text-sm`}>
                  You only need a hosted chatbot and don&apos;t care where it runs. Cloud AI is a fine tool. We just cover the other path.
                </p>
              </div>
            </div>
          </section>

          {/* Neutral */}
          <section className="mb-20">
            <h2 className={H2}>Neutral by design</h2>
            <p className={`${BODY} mb-4`}>A reference is only useful if you can trust it. These rules apply to every page:</p>
            <ul className="space-y-3">
              {NEUTRAL.map(([lead, rest]) => (
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
            <h2 className={H2}>Nine languages from the start</h2>
            <p className={`${BODY} mb-4`}>
              Local AI is a global movement, but most of the information about it is in English. PromptQuorum publishes in nine languages:
            </p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {LANGUAGES.map((l) => (
                <li key={l} className="px-3 py-1.5 rounded-full bg-primary/10 text-text-primary text-sm font-medium">
                  {l}
                </li>
              ))}
            </ul>
            <p className={BODY}>
              That means someone in São Paulo, Seoul or Riyadh can find the same well-structured answer in their own language.
            </p>
          </section>

          {/* MCP */}
          <section id="use-promptquorum-from-your-ai" className="mb-20 scroll-mt-24">
            <h2 className={H2}>Use PromptQuorum from your AI</h2>
            <p className={`${BODY} mb-4`}>Connect PromptQuorum to your assistant once, and it can look things up for you.</p>
            <dl className="space-y-2 mb-4 text-sm">
              <div>
                <dt className="inline font-semibold text-text-primary">MCP endpoint: </dt>
                <dd className="inline text-text-secondary">
                  <code className="break-all">{MCP_SERVER_URL}</code> (public, read-only, no authentication)
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold text-text-primary">Discovery manifest: </dt>
                <dd className="inline">
                  <a href="/mcp.json" className={`${LINK} break-all`}>{SITE}/mcp.json</a>
                </dd>
              </div>
            </dl>
            <pre dir="ltr" className="bg-card border border-primary/20 rounded-xl p-4 text-sm overflow-x-auto text-left mb-4">
              <code>{MCP_CONFIG}</code>
            </pre>
            <p className={`${BODY} mb-4 text-sm`}>
              <strong className="text-text-primary">Available tools:</strong>{' '}
              {MCP_TOOLS.map((t, i) => (
                <span key={t}>
                  <code>{t}</code>
                  {i < MCP_TOOLS.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
            <AboutTrackedLink href="/directory#mcp-connect-heading" via="mcp_guide" className={LINK}>
              Full MCP setup guide →
            </AboutTrackedLink>
          </section>

          {/* Founder */}
          <section className="mb-20">
            <h2 className={H2}>Who builds it</h2>
            <div className={`${CARD} mt-6 flex flex-col sm:flex-row gap-6 sm:gap-8`}>
              <Image
                src="/images/hans-kuepper.jpg"
                alt="Hans Küpper, founder of PromptQuorum"
                width={267}
                height={400}
                className="w-36 sm:w-44 h-auto rounded-xl object-cover self-start shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-text-primary">Hans Küpper</h3>
                <p className="text-sm text-primary font-medium mb-4">Founder, PromptQuorum</p>
                <div className={`${BODY} space-y-4`}>
                  <p>
                    PromptQuorum started as a multi-model app. Hans built it because a single AI answer is hard to check. Ask several
                    models the same question and you can at least see where they agree and where they don&apos;t.
                  </p>
                  <p>
                    Building the app exposed a bigger gap: people who want reliable, private AI have no trustworthy map of the local-AI
                    world. So the app grew into an ecosystem, with a directory, a knowledge base and an MCP server pointing at the same
                    goal.
                  </p>
                  <p>Privacy and user control are non-negotiable design principles.</p>
                  <p className="text-sm">
                    Independent, based in Germany. 30+ years in consulting and general management, in more than 20 countries.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section className="mb-20">
            <h2 className={H2}>Where this is going</h2>
            <p className={`${BODY} mb-4`}>
              Where AI runs is changing: from cloud-only to a mix of cloud, local, hybrid and edge. PromptQuorum is being built for that
              shift. On the roadmap:
            </p>
            <ul className="space-y-3 mb-6">
              {ROADMAP.map(([lead, rest]) => (
                <li key={lead} className="flex gap-3">
                  <CheckIcon />
                  <p className={BODY}>
                    <strong className="text-text-primary">{lead}</strong> {rest}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-text-primary font-semibold">
              The goal: when anyone, human or AI, asks &ldquo;how do I use open-weight and open-source AI?&rdquo;, PromptQuorum is a source they can rely on.
            </p>
          </section>

          {/* Get involved */}
          <section className="mb-4">
            <h2 className={`${H2} mb-4`}>Get involved</h2>
            <ul className={`${BODY} space-y-3`}>
              <li>
                <strong className="text-text-primary">Founders and makers:</strong> get your tool listed, correct your entry or add founder
                notes:{' '}
                <a href="mailto:hello@promptquorum.com" className={LINK}>hello@promptquorum.com</a>
              </li>
              <li>
                <strong className="text-text-primary">Press and partnerships:</strong>{' '}
                <a href="mailto:hello@promptquorum.com" className={LINK}>hello@promptquorum.com</a>
              </li>
              <li>
                <strong className="text-text-primary">Follow along:</strong>{' '}
                {SOCIAL.map(([label, url], i) => (
                  <span key={label}>
                    <AboutTrackedLink href={url} via={`follow_${label.toLowerCase()}`} external className={LINK}>
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
