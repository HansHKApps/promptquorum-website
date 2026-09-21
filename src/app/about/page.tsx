import type { Metadata } from 'next'
import Image from 'next/image'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { AboutHeroClient } from '@/components/AboutHeroClient'
import { AboutTrackedLink } from '@/components/AboutTrackedLink'
import { TOTAL_TOOL_COUNT } from '@/lib/power-local-llm/apps-barrel'
import { CATEGORY_GROUPS } from '@/lib/power-local-llm/apps/categories'
import { MCP_SERVER_URL } from '@/lib/mcp/clients'

export const dynamic = 'force-static'
export const revalidate = 86400

const SITE = 'https://www.promptquorum.com'

// Counts come from the directory data so this page and the directory never drift apart.
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
const H2 = 'text-2xl sm:text-3xl font-bold text-text-primary mb-6'
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
    n: '1',
    title: 'Models',
    text: 'Open-weight models (Llama, Qwen, Mistral, Gemma, DeepSeek and hundreds more) went from research artifacts to downloads anyone could get. Hugging Face became the place where they live.',
  },
  {
    n: '2',
    title: 'Runtimes',
    text: 'Ollama, LM Studio and similar tools made those models runnable. Download a model, press a button, and you are talking to it on your own machine. That was a big step, but the usage it enabled is narrow. For most people it means a chat window: you type, the model answers.',
  },
  {
    n: '3',
    title: 'Applications',
    text: 'Real apps that work directly with local LLMs, or through Ollama, LM Studio and other interfaces. They chat with your documents, code alongside you in your editor, run agents, turn speech into text and text into speech, generate images and video, and automate your smart home. The model becomes an engine inside a tool built for a job, not the product you talk to.',
  },
]

const BELIEFS = [
  ['Local models are open.', 'You can download the weights and run them on your own hardware. No one has to approve your prompt, and no one sits between you and the model.'],
  ['Cost stays in your control.', 'Once a model runs on your machine, there is no meter, no per-token bill and no price change you did not agree to. The hardware is the cost, and you decide how much to spend on it.'],
  ['They can’t be taken away.', 'A cloud model can be changed, restricted, repriced or shut down overnight. A model you have downloaded keeps working the same way as long as you keep the file.'],
  ['Your data stays with you.', 'When both the app and the model run locally, your prompts and documents never leave your machine.'],
  ['Independence is the point.', 'Local AI is more than a cheaper alternative. It is a way to depend on no one else’s terms, servers or decisions.'],
]

const WHAT_IT_IS = [
  {
    title: 'The Local AI Directory: the map of the third wave',
    body: (
      <>
        There are {TOTAL_TOOL_COUNT} local-AI apps and tools, organised into {GROUP_COUNT} groups and {CATEGORY_COUNT} categories.
        The groups are Run &amp; Serve, Chat &amp; Assistants, Code &amp; Development, Knowledge &amp; Retrieval, Voice &amp; Audio,
        Images &amp; Video, and Train &amp; Operate. Every entry uses the same format: what the tool does, which platforms it runs on,
        its license, its price and its hardware needs, with a link to the official website. You can set an optional hardware profile,
        and each app then shows whether it runs well, runs marginally or won&apos;t run on your machine.
      </>
    ),
    href: '/directory',
    cta: 'Open the directory',
    via: 'what_directory',
  },
  {
    title: 'The Knowledge Base: how to actually use it',
    body: (
      <>
        Practical guides cover hardware (VRAM, Apple Silicon, GPUs and CPU-only setups), software, models, quantization, RAG, agents,
        voice, prompt engineering and complete local-AI stacks. The articles are written for people who want a working setup, not a
        theory lecture.
      </>
    ),
    href: '/local-llms',
    cta: 'Read the guides',
    via: 'what_knowledge',
  },
  {
    title: 'Open to machines: AI can read what we publish',
    body: (
      <>
        PromptQuorum runs a public, read-only <strong>MCP server</strong> (Model Context Protocol). Claude, Cursor and any
        MCP-capable assistant can search the directory, pull app details, read guides and explain licenses directly. No account and no
        API key are needed. When your AI answers a question about local AI, it can draw on PromptQuorum instead of guessing.
      </>
    ),
    href: '#use-promptquorum-from-your-ai',
    cta: 'See how to connect',
    via: 'what_mcp',
  },
  {
    title: 'The PromptQuorum app: where it started',
    body: (
      <>
        A multi-model tool sends one prompt to several AI models, including local ones through Ollama and LM Studio. It then compares
        their answers so you can see where they agree and where they contradict each other. You bring your own keys and models, and
        there is no telemetry.
      </>
    ),
    href: '/pq-apps',
    cta: 'About the app',
    via: 'what_app',
  },
]

const GOALS = [
  'I want a private ChatGPT alternative on my laptop.',
  'I have 16 GB of RAM. What can I realistically run?',
  'I want to chat with my own PDFs offline.',
  'I need a local coding assistant for VS Code.',
  'I want an offline voice assistant for my smart home.',
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

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AboutHeroClient />

          {/* Three waves */}
          <section className="mb-16">
            <h2 className={H2}>Three waves of open AI</h2>
            <ol className="space-y-4">
              {WAVES.map((w) => (
                <li key={w.n} className={`${CARD} flex gap-5`}>
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
                    {w.n}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">
                      The {w.n === '1' ? 'first' : w.n === '2' ? 'second' : 'third'} wave: {w.title.toLowerCase()}
                    </h3>
                    <p className={BODY}>{w.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className={`${BODY} mt-6 space-y-4`}>
              <p>
                The third wave is where most people get stuck. Which app fits your task? Does it work with the runtime you already have?
                Can your hardware carry it? What does the license allow? That knowledge is scattered across GitHub READMEs, Discord
                threads, Reddit posts and changelogs. Most of it is only in English, and much of it goes out of date within months.
              </p>
              <p className="text-text-primary font-medium">
                PromptQuorum is the map of that third wave. It is one place, with one structure, kept up to date, and it does not sell
                rankings.
              </p>
            </div>
          </section>

          {/* Beliefs */}
          <section className="mb-16">
            <h2 className={H2}>What we believe</h2>
            <div className="border-l-4 border-primary pl-5 mb-6">
              <p className="text-xl font-semibold text-text-primary mb-2">The internet should be open. AI should be open too.</p>
              <p className={BODY}>
                The web became useful because anyone could publish on it and anyone could read it, and no single company decided what you
                were allowed to do. AI is at the same fork. It can be something you rent from a few providers, or something you own and run
                yourself. PromptQuorum exists for the second path.
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
              Independence from control is the theme of everything on this site. It is why the directory is neutral, why every entry links
              to the official source and why we publish in nine languages. Anyone should be able to find their own way into open AI
              without asking permission.
            </p>
            <p className={`${BODY} italic mt-4`}>
              We don&apos;t believe cloud AI is bad. We believe you should have a real choice, and that choosing local should be as easy as
              choosing cloud.
            </p>
          </section>

          {/* What PromptQuorum is */}
          <section className="mb-16">
            <h2 className={H2}>What PromptQuorum is</h2>
            <div className="space-y-4">
              {WHAT_IT_IS.map((item, i) => (
                <div key={item.title} className={CARD}>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {i + 1}. {item.title}
                  </h3>
                  <p className={`${BODY} mb-3`}>{item.body}</p>
                  <AboutTrackedLink href={item.href} via={item.via} className={`${LINK} text-sm`}>
                    {item.cta} →
                  </AboutTrackedLink>
                </div>
              ))}
            </div>
          </section>

          {/* Goal-first */}
          <section className="mb-16">
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
            <p className={`${BODY} mb-4`}>
              PromptQuorum connects each of those questions to the software, hardware, model and step-by-step guide that answer it.
            </p>
            <div className="flex flex-wrap gap-4">
              <AboutTrackedLink href="/directory" via="goal_browse" className={LINK}>
                Browse by use case →
              </AboutTrackedLink>
              <AboutTrackedLink href="/directory#hw-profile-widget" via="goal_hardware" className={LINK}>
                Set my hardware profile →
              </AboutTrackedLink>
            </div>
          </section>

          {/* Neutral */}
          <section className="mb-16">
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
          <section className="mb-16">
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
          <section id="use-promptquorum-from-your-ai" className="mb-16 scroll-mt-24">
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
          <section className="mb-16">
            <h2 className={H2}>Who builds it</h2>
            <div className={`${CARD} flex flex-col sm:flex-row gap-6 sm:gap-8`}>
              <Image
                src="/images/hans-kuepper.jpg"
                alt="Hans Küpper, founder of PromptQuorum"
                width={267}
                height={400}
                className="w-36 sm:w-44 h-auto rounded-xl object-cover self-start shrink-0"
                priority={false}
              />
              <div>
                <h3 className="text-xl font-bold text-text-primary">Hans Küpper</h3>
                <p className="text-sm text-primary font-medium mb-4">Founder, PromptQuorum</p>
                <div className={`${BODY} space-y-4`}>
                  <p>
                    PromptQuorum is built independently by Hans Küpper in Germany. He has 30+ years in consulting and general management,
                    has lived and worked in more than 20 countries and has deep business experience in China.
                  </p>
                  <p>
                    He started PromptQuorum after seeing people rely on a single AI answer for important work without any way to check it.
                    That idea became the multi-model app. Building the app then exposed a bigger gap: people who want reliable, private AI
                    don&apos;t have a trustworthy map of the local-AI world. PromptQuorum is being built to be that map.
                  </p>
                  <p>Privacy and user control are non-negotiable design principles.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section className="mb-16">
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
              The goal: when anyone, human or AI, asks &ldquo;how do I use open-weight AI?&rdquo;, PromptQuorum is where the answer comes from.
            </p>
          </section>

          {/* Get involved */}
          <section className="mb-16">
            <h2 className={H2}>Get involved</h2>
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
