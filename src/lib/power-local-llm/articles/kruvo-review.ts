// Kruvo Review: A Desktop AI Coworker That Asks Before It Acts
// Slug: kruvo-review
// Companion to: coil-review, open-interpreter-review, agent-zero-review
// Sources: kruvo.ai (home, download, changelog, pricing, privacy, terms, docs, security, extension, evolution, use cases) and the
// official release repository github.com/pvaz/kruvo-releases (releases, tags, README, latest.json), all read 2026-10-24 — no
// hands-on testing. Version note: the download page and GitHub "Latest" show 0.3.6 (2026-10-07); GitHub also holds v0.3.13
// (2026-10-11), which is the latest upstream update. Prices are the site's euro prices (no storefront); geo-translation applied.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/kruvo-review-hero-en.webp',
    title: 'Kruvo Review: A Desktop AI Coworker That Asks Before It Acts',
    seoTitle: 'Kruvo Review: Desktop AI Coworker for Windows and Mac',
    intro: 'Kruvo is a Windows and macOS desktop app from BexoCORP that, per its own pages, works in a folder you choose with your own model provider key or Ollama, connects to tools such as GitHub, Slack and Gmail, and asks for approval before sensitive actions. This review reads the maker\'s website, release notes and GitHub release repository, explains why its version numbers differ, and lists what the sources leave unconfirmed. PromptQuorum has not installed or tested the app.',
    metaDescription: 'Kruvo review: Windows and macOS AI coworker that works in your folder with your own API key or Ollama and asks before acting. Price, needs, open questions.',
    twitterDescription: 'Kruvo review: a local-first desktop AI coworker for Windows and macOS with approval rules. Requirements, plans, version mix-up and what is unverified.',
    audience: 'Windows and Mac users who want to know what Kruvo needs, what it costs, where their data goes, how its approval rules work and which statements the sources leave unconfirmed.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Kruvo review',
    targetKeywords: [
      'kruvo review',
      'local-first ai coworker',
      'desktop ai agent windows macos',
      'ai agent with approval rules',
      'kruvo ollama api key',
      'bexocorp kruvo'
    ],
    current_hardware_mentioned: [
      'Windows PC or Mac (macOS 13.5+)'
    ],
    leadAnswerBlock: '**Kruvo (version 0.3.6 on the official download page; newest upstream update 11 October 2026) is a Windows and macOS desktop app, free to start and closed source, that per its maker works in a folder you choose with your own model provider key or Ollama and asks before sensitive actions.** Every behavior and privacy statement in this review comes from the maker\'s own pages and release notes; PromptQuorum has not installed or tested it.',
    quickAnswerTop: {
      en: {
        question: 'What do I need to run Kruvo?',
        answer: 'A 64-bit Windows 10 22H2 or Windows 11 PC, or a Mac on macOS 13.5 or newer for full functionality, plus a model: a supported provider API key or Ollama on suitable hardware. Model costs are separate.',
        bullets: [
          'Approval cards show the tool, target and reason; hard-floor actions always need a human decision.',
          'Computer use (supervised Chrome or Edge, authorised Windows apps) is off by default and needs consent per site or app.',
          'Work mode runs in a folder with tools; Chat mode answers without them.',
          'Scheduled local automations and Telegram or Slack requests work only while Kruvo is running.'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer'
      },
      {
        label: 'What Is Kruvo?',
        anchor: 'what-is-kruvo'
      },
      {
        label: 'Get It',
        anchor: 'get-it'
      },
      {
        label: 'What You Need',
        anchor: 'requirements'
      },
      {
        label: 'Pricing',
        anchor: 'pricing'
      },
      {
        label: 'Features Confirmed by the Sources',
        anchor: 'key-features'
      },
      {
        label: 'Privacy and Data Flow',
        anchor: 'privacy'
      },
      {
        label: 'Who Should Use It',
        anchor: 'who-should-use'
      },
      {
        label: 'What We Could Not Verify',
        anchor: 'who-should-not-use'
      },
      {
        label: 'Competitors and Alternatives',
        anchor: 'vs-alternatives'
      },
      {
        label: 'Frequently Asked Questions',
        anchor: 'faq'
      },
      {
        label: 'Verdict',
        anchor: 'verdict'
      },
      {
        label: 'Sources',
        anchor: 'sources'
      },
      {
        label: 'Related Reading',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Kruvo is a Windows and macOS desktop app that lets a model you choose work in a folder and in connected tools, with approval rules and a local audit trail.'
          },
          {
            type: 'plain-terms',
            text: 'You give Kruvo a task and a folder, it uses your API key or an Ollama model to do the work, and it stops to ask you before anything sensitive.'
          }
        ],
        items: [
          'Maintenance: GitHub shows releases from 0.3.0 on 18 September to 0.3.13 on 11 October 2026, so it is actively updated and no stale-project warning applies.',
          'License: closed source; the release repository says the product source is kept in a private repository.',
          'Versions: the download page lists 0.3.6 (7 October); GitHub also holds 0.3.13 (11 October), which that page does not list yet.',
          'Signing: Windows installers are not code-signed and Mac builds are not notarised; SHA-256 checksums are published.',
          'Basis: the maker\'s site, release notes and GitHub, read on 24 October 2026, with no hands-on testing.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum has not installed, tested or benchmarked Kruvo. Behavior, security and privacy statements below are the maker\'s own.'
          }
        ]
      },
      overview: {
        id: 'what-is-kruvo',
        title: 'What Is Kruvo?',
        content: [
          '**Kruvo is a desktop "AI coworker": an app that uses the model you choose to work with a selected folder and connected tools, and shows its proposed actions for your approval.** The site describes it as local-first AI work governed by you and states that it is part of BexoCORP. The changelog lists version 0.3.0 (18 September 2026) as the release where the product became Kruvo.',
          'Work mode runs in a folder with files, terminal and connectors; Chat mode answers without tools. The app also offers projects with their own folders, a personal task list, local memory, built-in local coworkers (specialist personas) and an interface in eight languages. Local work does not require a Kruvo account.'
        ]
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Kruvo is a direct download from its own website for Windows and macOS; the same files are on GitHub Releases.**'
        ],
        columns: [
          'Channel',
          'Link'
        ],
        rows: [
          {
            Channel: 'Windows 10 22H2 / 11 (.exe, .msi)',
            Link: '[Download page](https://kruvo.ai/download)'
          },
          {
            Channel: 'macOS 13.5+ (Apple Silicon, Intel)',
            Link: '[Download page](https://kruvo.ai/download)'
          },
          {
            Channel: 'Website',
            Link: '[kruvo.ai](https://kruvo.ai)'
          },
          {
            Channel: 'Privacy policy',
            Link: '[kruvo.ai/privacy](https://kruvo.ai/privacy)'
          },
          {
            Channel: 'Release files and notes',
            Link: '[GitHub Releases](https://github.com/pvaz/kruvo-releases/releases)'
          }
        ],
        note: 'Version reviewed: 0.3.6, the version on the official download page and GitHub\'s "Latest" release, published 7 October 2026. GitHub also holds the newer 0.3.13 (11 October 2026), the latest upstream update at the time of checking; the site\'s "0.3.4" refers to the app version its screenshots and computer-use guide were made with. The Windows installers are not code-signed and the Mac builds are not notarised, so Windows SmartScreen and macOS Gatekeeper will warn; the maker publishes SHA-256 checksums and tells you to verify the file first and never disable system protection.'
      },
      requirements: {
        id: 'requirements',
        title: 'What You Need',
        content: [
          '**Kruvo needs Windows 10 22H2 or Windows 11 (64-bit) or macOS 13.5 or newer, and a model: a supported provider API key or Ollama.**'
        ],
        columns: [
          'Item',
          'Per the sources'
        ],
        rows: [
          {
            Item: 'Operating system',
            'Per the sources': 'Windows 10 22H2 / 11, or macOS 13.5+ (older macOS not validated)'
          },
          {
            Item: 'Model',
            'Per the sources': 'Provider API key (OpenAI, Anthropic, Gemini, Mistral, DeepSeek, Kimi, Qwen, xAI) or Ollama'
          },
          {
            Item: 'Optional',
            'Per the sources': 'Chrome or Edge for browser work; Telegram or Slack credentials'
          },
          {
            Item: 'Download size',
            'Per the sources': '.exe 96.1 MB; .dmg 150.7 MB (Apple Silicon) or 154.6 MB (Intel)'
          }
        ],
        note: 'The sources give no RAM or disk figures; an Ollama model needs "suitable hardware" for its own size. Model usage is billed by the provider and is separate from any Kruvo plan.'
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing',
        content: [
          '**The Free plan costs €0 and includes the full local app; Pro, Team and Enterprise are service tiers arranged by contact.**'
        ],
        columns: [
          'Plan',
          'Price'
        ],
        rows: [
          {
            Plan: 'Free',
            Price: '€0, no Kruvo account needed'
          },
          {
            Plan: 'Pro',
            Price: '€15 per month or €144 yearly'
          },
          {
            Plan: 'Team',
            Price: '€29 per user per month, minimum 3'
          },
          {
            Plan: 'Enterprise',
            Price: 'Custom, annual agreement'
          }
        ],
        note: 'Read from the pricing page on 24 October 2026. The page says the local app has the same capabilities in all four plans, that paid tiers cover managed connections and team licences, and that there is no self-service checkout or promised trial. Kruvo does not include provider credits.'
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the maker\'s pages or release notes.**'
        ],
        items: [
          '**Approval rules and audit.** A permission policy, standing rules, hard floors no mode can lower and a local audit record with secret redaction.',
          '**Models.** OpenAI, Anthropic, Gemini, Mistral, DeepSeek, Kimi, Qwen, xAI or Ollama.',
          '**Connectors.** GitHub, Slack, Gmail, Outlook, Calendar, Notion, Jira, Linear, HubSpot and MCP, set up manually; PaxHelm and Talqivo connect through MCP.',
          '**Computer use.** Supervised work in Chrome or Edge, in Kruvo\'s own profile or through an extension, and in authorised Windows apps, with Pause, Take over and Stop controls.',
          '**Remote requests and automations.** Telegram or Slack requests and eligible approvals, plus scheduled local automations that cannot approve themselves or use browser tools.',
          '**Work organisation.** Projects, a task list, local memory and built-in local coworkers.',
          '**Updates.** Signed update packages verified by the desktop updater.'
        ]
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**The privacy policy (last updated 3 October 2026) says conversations, audit records, connector tokens and model keys stay on your computer and deliverables stay in the workspace you selected.** It lists three things sent to Kruvo services: standard HTTP data for update checks, licence id, plan and app version for paid-plan validation, and content-free product events only when telemetry is enabled.',
          'Hosted models and connected services receive the data needed for their requests, and screenshots taken during browser work go to your model provider. With optional Slack and GitHub relays, Kruvo Cloud processes message content in transit and stores account, plan and billing state and brokered OAuth tokens. Local conversations, files and model keys are not automatically uploaded.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the maker\'s statements. PromptQuorum has not audited the app or its network traffic.'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Windows and Mac users with their own API key or Ollama** who want an agent that works in files and connected tools.',
          '**People who want approval before actions,** with a local audit record.',
          '**Buyers who want a free local start** with no Kruvo account.'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality and speed.** PromptQuorum did not run Kruvo, and the sources give no benchmarks.',
          '**Code and license.** The source is private and no license text was found, so the code cannot be inspected.',
          '**Privacy claims.** The local-storage and telemetry statements were not checked against network traffic.',
          '**Newest build.** The 0.3.13 notes mention remote multi-computer chats and an iPhone/iPad app in TestFlight; neither was verified.'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: [
          'App',
          'Platforms',
          'Price / license',
          'Key difference'
        ],
        rows: [
          {
            App: '[Coil](/power-local-llm/coil-review)',
            Platforms: 'Mac',
            'Price / license': '$14.99 / Closed source',
            'Key difference': 'On-device router and worker models with approval-gated folder tools'
          },
          {
            App: '[Open Interpreter](/power-local-llm/open-interpreter-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / Apache 2.0',
            'Key difference': 'Open-source agent that lets a local LLM control your computer and run code'
          },
          {
            App: '[Agent Zero](/power-local-llm/agent-zero-review)',
            Platforms: 'macOS, Windows, Linux',
            'Price / license': 'Free / MIT',
            'Key difference': 'Minimal open-source autonomous agent with coding ability'
          }
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.'
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Kruvo work offline?',
            a: 'Not by default: it needs a model, and a provider API key sends requests to that provider. With Ollama running a local model, model requests stay on your computer, while connectors and update checks still use the network.'
          },
          {
            q: 'Can Kruvo act without asking me?',
            a: 'Hard-floor actions always require human approval, and computer actions classed as sensitive need approval in the desktop app in every mode. Other tools follow the permission policy and standing rules you set.'
          },
          {
            q: 'Why do the version numbers differ?',
            a: 'The download page lists 0.3.6, GitHub also holds 0.3.13 from 11 October, and the site\'s guides refer to a 0.3.4 app for computer use. Check the release notes for the build you install.'
          },
          {
            q: 'Is there an iPhone app?',
            a: 'The 0.3.13 notes mention an iPhone/iPad app in TestFlight, while the site describes Kruvo as a Windows and macOS desktop app. PromptQuorum did not test the TestFlight app.'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Kruvo is a free-to-start desktop agent that, per its maker, keeps conversations, keys and audit records on your computer, works in a folder you choose and asks before sensitive actions, using your own API key or Ollama. It was updated on 11 October 2026 and publishes checksums and a clear privacy policy. Against that, it is closed source, its installers are unsigned, its release history starts on 18 September 2026, the download page lags the newest GitHub build and every behavior and privacy claim comes from the maker. It suits Windows and Mac users who want approval rules around an agent; readers who want open code can compare [Open Interpreter](/power-local-llm/open-interpreter-review) or [Agent Zero](/power-local-llm/agent-zero-review).'
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Kruvo website](https://kruvo.ai) — product, download, pricing, documentation and security pages, checked 24 October 2026.',
          '[Kruvo changelog](https://kruvo.ai/changelog) and [privacy policy](https://kruvo.ai/privacy) — release notes through 0.3.6, data handling and cloud relays.',
          '[Kruvo releases on GitHub](https://github.com/pvaz/kruvo-releases/releases) — release dates, assets and notes for 0.3.0 to 0.3.13, and the statement that the source is private.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Coil Review](/power-local-llm/coil-review) — a Mac agent harness with on-device models and routing receipts.',
          '[Open Interpreter Review](/power-local-llm/open-interpreter-review) — an open-source agent that runs code on your computer.',
          '[Agent Zero Review](/power-local-llm/agent-zero-review) — a minimal autonomous agent with coding ability.',
          '[Local LLM Code & Development Compared](/power-local-llm/local-llm-code-development-compared) — the category comparison for coding and agent tools.'
        ]
      }
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Kruvo Review: A Desktop AI Coworker That Asks Before It Acts',
      description: 'Kruvo review: a local-first Windows and macOS desktop AI coworker with approval rules. Requirements, plans, version differences and what the sources leave unconfirmed.',
      url: 'https://promptquorum.com/power-local-llm/kruvo-review',
      inLanguage: 'en',
      datePublished: '2026-10-24',
      dateModified: '2026-10-24',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/'
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com'
      },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: {
        '@type': 'Audience',
        audienceType: 'Windows and Mac users evaluating a desktop AI agent app'
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Kruvo'
        },
        {
          '@type': 'Thing',
          name: 'Desktop AI agent with approval rules'
        },
        {
          '@type': 'Thing',
          name: 'Local-first AI coworker'
        }
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://promptquorum.com/power-local-llm/kruvo-review'
      }
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://promptquorum.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://promptquorum.com/power-local-llm'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Kruvo Review',
          item: 'https://promptquorum.com/power-local-llm/kruvo-review'
        }
      ]
    }
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/kruvo-review-hero-de.webp',
    title: 'Kruvo-Rezension: Ein Desktop-KI-Kollege, der vor dem Handeln nachfragt',
    seoTitle: 'Kruvo-Rezension: Desktop-KI-Kollege für Windows und Mac',
    intro: 'Kruvo ist eine Desktop-App für Windows und macOS von BexoCORP, die laut eigenen Angaben in einem gewählten Ordner mit Ihrem eigenen API-Schlüssel eines Modellanbieters oder mit Ollama arbeitet, sich mit Werkzeugen wie GitHub, Slack und Gmail verbindet und vor sensiblen Aktionen um Freigabe bittet. Diese Rezension wertet Website, Versionshinweise und das GitHub-Release-Repository des Herstellers aus, erklärt die unterschiedlichen Versionsnummern und listet auf, was die Quellen unbestätigt lassen. PromptQuorum hat die App weder installiert noch getestet.',
    metaDescription: 'Kruvo-Rezension: KI-Kollege für Windows und macOS, der in Ihrem Ordner mit eigenem API-Schlüssel oder Ollama arbeitet und vorher fragt. Preis, Bedarf, offene Punkte.',
    twitterDescription: 'Kruvo-Rezension: Local-first-Desktop-KI-Kollege für Windows und macOS mit Freigaberegeln. Bedarf, Tarife, Versions-Wirrwarr und Ungeprüftes.',
    audience: 'Windows- und Mac-Nutzer, die wissen möchten, was Kruvo benötigt, was es kostet, wohin ihre Daten gehen, wie die Freigaberegeln funktionieren und welche Aussagen die Quellen unbestätigt lassen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Kruvo Rezension',
    targetKeywords: [
      'kruvo rezension',
      'local-first ki kollege',
      'desktop ki agent windows macos',
      'ki agent mit freigaberegeln',
      'kruvo ollama api schlüssel',
      'bexocorp kruvo'
    ],
    current_hardware_mentioned: [
      'Windows PC or Mac (macOS 13.5+)'
    ],
    leadAnswerBlock: '**Kruvo (Version 0.3.6 auf der offiziellen Download-Seite; jüngstes Update des Herstellers am 11. Oktober 2026) ist eine Desktop-App für Windows und macOS, kostenlos im Einstieg und Closed Source, die laut Hersteller in einem gewählten Ordner mit Ihrem eigenen Anbieter-Schlüssel oder mit Ollama arbeitet und vor sensiblen Aktionen nachfragt.** Alle Angaben zu Verhalten und Datenschutz in dieser Rezension stammen von den Seiten und Versionshinweisen des Herstellers; PromptQuorum hat die App weder installiert noch getestet.',
    quickAnswerTop: {
      de: {
        question: 'Was brauche ich, um Kruvo auszuführen?',
        answer: 'Einen 64-Bit-PC mit Windows 10 22H2 oder Windows 11 oder einen Mac mit macOS 13.5 oder neuer für den vollen Funktionsumfang sowie ein Modell: einen unterstützten API-Schlüssel eines Anbieters oder Ollama auf geeigneter Hardware. Modellkosten fallen separat an.',
        bullets: [
          'Freigabekarten zeigen Werkzeug, Ziel und Grund; Aktionen an der „Hard Floor“ erfordern immer eine menschliche Entscheidung.',
          'Computernutzung (beaufsichtigtes Chrome oder Edge, autorisierte Windows-Apps) ist standardmäßig aus und braucht eine Zustimmung je Website oder App.',
          'Der Work-Modus arbeitet in einem Ordner mit Werkzeugen; der Chat-Modus antwortet ohne sie.',
          'Geplante lokale Automatisierungen und Anfragen über Telegram oder Slack funktionieren nur, solange Kruvo läuft.'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer'
      },
      {
        label: 'Was ist Kruvo?',
        anchor: 'what-is-kruvo'
      },
      {
        label: 'Bezugsquellen',
        anchor: 'get-it'
      },
      {
        label: 'Was Sie benötigen',
        anchor: 'requirements'
      },
      {
        label: 'Preis',
        anchor: 'pricing'
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features'
      },
      {
        label: 'Datenschutz und Datenfluss',
        anchor: 'privacy'
      },
      {
        label: 'Für wen geeignet',
        anchor: 'who-should-use'
      },
      {
        label: 'Was wir nicht prüfen konnten',
        anchor: 'who-should-not-use'
      },
      {
        label: 'Konkurrenten und Alternativen',
        anchor: 'vs-alternatives'
      },
      {
        label: 'Häufig gestellte Fragen',
        anchor: 'faq'
      },
      {
        label: 'Fazit',
        anchor: 'verdict'
      },
      {
        label: 'Quellen',
        anchor: 'sources'
      },
      {
        label: 'Weiterführende Artikel',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Kruvo ist eine Desktop-App für Windows und macOS, in der ein von Ihnen gewähltes Modell in einem Ordner und in verbundenen Werkzeugen arbeitet, mit Freigaberegeln und lokalem Prüfprotokoll.'
          },
          {
            type: 'plain-terms',
            text: 'Sie geben Kruvo eine Aufgabe und einen Ordner, es erledigt die Arbeit mit Ihrem API-Schlüssel oder einem Ollama-Modell und hält bei allem Sensiblen an, um Sie zu fragen.'
          }
        ],
        items: [
          'Pflege: GitHub zeigt Releases von 0.3.0 am 18. September bis 0.3.13 am 11. Oktober 2026; die App wird also aktiv aktualisiert, eine Warnung vor veralteten Projekten entfällt.',
          'Lizenz: Closed Source; laut Release-Repository liegt der Produktquellcode in einem privaten Repository.',
          'Versionen: Die Download-Seite führt 0.3.6 (7. Oktober); auf GitHub liegt zusätzlich 0.3.13 (11. Oktober), das diese Seite noch nicht nennt.',
          'Signierung: Windows-Installer sind nicht codesigniert und Mac-Builds nicht notarisiert; SHA-256-Prüfsummen werden veröffentlicht.',
          'Grundlage: Website, Versionshinweise und GitHub des Herstellers, gelesen am 24. Oktober 2026, ohne eigenen Test.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum hat Kruvo weder installiert, getestet noch bewertet. Aussagen zu Verhalten, Sicherheit und Datenschutz stammen vom Hersteller.'
          }
        ]
      },
      overview: {
        id: 'what-is-kruvo',
        title: 'Was ist Kruvo?',
        content: [
          '**Kruvo ist ein Desktop-„KI-Kollege“: eine App, die das von Ihnen gewählte Modell mit einem ausgewählten Ordner und verbundenen Werkzeugen arbeiten lässt und vorgeschlagene Aktionen zur Freigabe zeigt.** Die Website beschreibt es als Local-first-KI-Arbeit unter Ihrer Kontrolle und nennt es Teil von BexoCORP. Das Changelog führt Version 0.3.0 (18. September 2026) als das Release, in dem das Produkt zu Kruvo wurde.',
          'Der Work-Modus läuft in einem Ordner mit Dateien, Terminal und Konnektoren; der Chat-Modus antwortet ohne Werkzeuge. Hinzu kommen Projekte mit eigenen Ordnern, eine persönliche Aufgabenliste, lokaler Speicher, eingebaute lokale Kollegen (Spezialisten-Personas) und eine Oberfläche in acht Sprachen. Für lokale Arbeit ist kein Kruvo-Konto nötig.'
        ]
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquellen',
        content: [
          '**Kruvo wird für Windows und macOS direkt von der eigenen Website geladen; dieselben Dateien liegen auf GitHub Releases.**'
        ],
        columns: [
          'Kanal',
          'Link'
        ],
        rows: [
          {
            Kanal: 'Windows 10 22H2 / 11 (.exe, .msi)',
            Link: '[Download-Seite](https://kruvo.ai/download)'
          },
          {
            Kanal: 'macOS 13.5+ (Apple Silicon, Intel)',
            Link: '[Download-Seite](https://kruvo.ai/download)'
          },
          {
            Kanal: 'Website',
            Link: '[kruvo.ai](https://kruvo.ai)'
          },
          {
            Kanal: 'Datenschutzerklärung',
            Link: '[kruvo.ai/privacy](https://kruvo.ai/privacy)'
          },
          {
            Kanal: 'Release-Dateien und Hinweise',
            Link: '[GitHub Releases](https://github.com/pvaz/kruvo-releases/releases)'
          }
        ],
        note: 'Geprüfte Version: 0.3.6, die Version der offiziellen Download-Seite und das „Latest“-Release auf GitHub, veröffentlicht am 7. Oktober 2026. Auf GitHub liegt außerdem das neuere 0.3.13 (11. Oktober 2026), das jüngste Update des Herstellers zum Prüfzeitpunkt; die „0.3.4“ der Website bezieht sich auf die App-Version, mit der Screenshots und Anleitung zur Computernutzung erstellt wurden. Die Windows-Installer sind nicht codesigniert und die Mac-Builds nicht notarisiert, daher warnen Windows SmartScreen und macOS Gatekeeper; der Hersteller veröffentlicht SHA-256-Prüfsummen und rät, die Datei zuerst zu prüfen und den Systemschutz nie zu deaktivieren.'
      },
      requirements: {
        id: 'requirements',
        title: 'Was Sie benötigen',
        content: [
          '**Kruvo benötigt Windows 10 22H2 oder Windows 11 (64 Bit) oder macOS 13.5 oder neuer sowie ein Modell: einen unterstützten API-Schlüssel eines Anbieters oder Ollama.**'
        ],
        columns: [
          'Punkt',
          'Laut Quellen'
        ],
        rows: [
          {
            Punkt: 'Betriebssystem',
            'Laut Quellen': 'Windows 10 22H2 / 11 oder macOS 13.5+ (ältere macOS-Versionen nicht validiert)'
          },
          {
            Punkt: 'Modell',
            'Laut Quellen': 'API-Schlüssel (OpenAI, Anthropic, Gemini, Mistral, DeepSeek, Kimi, Qwen, xAI) oder Ollama'
          },
          {
            Punkt: 'Optional',
            'Laut Quellen': 'Chrome oder Edge für Browser-Arbeit; Telegram- oder Slack-Zugangsdaten'
          },
          {
            Punkt: 'Download-Größe',
            'Laut Quellen': '.exe 96,1 MB; .dmg 150,7 MB (Apple Silicon) oder 154,6 MB (Intel)'
          }
        ],
        note: 'Die Quellen nennen keine RAM- oder Speicherwerte; ein Ollama-Modell braucht „geeignete Hardware“ für seine eigene Größe. Die Modellnutzung rechnet der Anbieter ab und ist von jedem Kruvo-Tarif getrennt.'
      },
      pricing: {
        id: 'pricing',
        title: 'Preis',
        content: [
          '**Der Tarif Free kostet 0 € und enthält die vollständige lokale App; Pro, Team und Enterprise sind Servicestufen, die per Kontakt vereinbart werden.**'
        ],
        columns: [
          'Tarif',
          'Preis'
        ],
        rows: [
          {
            Tarif: 'Free',
            Preis: '0 €, kein Kruvo-Konto nötig'
          },
          {
            Tarif: 'Pro',
            Preis: '15 € pro Monat oder 144 € jährlich'
          },
          {
            Tarif: 'Team',
            Preis: '29 € pro Nutzer und Monat, mindestens 3'
          },
          {
            Tarif: 'Enterprise',
            Preis: 'Individuell, Jahresvertrag'
          }
        ],
        note: 'Von der Preisseite am 24. Oktober 2026 gelesen, Preise in Euro laut Website. Die Seite sagt, die lokale App habe in allen vier Tarifen denselben Funktionsumfang, die bezahlten Stufen betreffen verwaltete Verbindungen und Team-Lizenzen, und es gebe keinen Self-Service-Checkout und keine zugesagte Testphase. Kruvo enthält keine Anbieter-Guthaben.'
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt von den Seiten oder Versionshinweisen des Herstellers.**'
        ],
        items: [
          '**Freigaberegeln und Prüfprotokoll.** Eine Berechtigungsrichtlinie, Standardregeln, „Hard Floors“, die kein Modus senken kann, und ein lokales Prüfprotokoll mit Schwärzung von Geheimnissen.',
          '**Modelle.** OpenAI, Anthropic, Gemini, Mistral, DeepSeek, Kimi, Qwen, xAI oder Ollama.',
          '**Konnektoren.** GitHub, Slack, Gmail, Outlook, Kalender, Notion, Jira, Linear, HubSpot und MCP, manuell eingerichtet; PaxHelm und Talqivo verbinden sich über MCP.',
          '**Computernutzung.** Beaufsichtigte Arbeit in Chrome oder Edge, im eigenen Profil von Kruvo oder über eine Erweiterung, sowie in autorisierten Windows-Apps, mit den Steuerungen Pause, Übernehmen und Stopp.',
          '**Fernanfragen und Automatisierungen.** Anfragen und zulässige Freigaben über Telegram oder Slack sowie geplante lokale Automatisierungen, die sich nicht selbst freigeben und keine Browser-Werkzeuge nutzen können.',
          '**Arbeitsorganisation.** Projekte, eine Aufgabenliste, lokaler Speicher und eingebaute lokale Kollegen.',
          '**Updates.** Signierte Update-Pakete, die der Desktop-Updater prüft.'
        ]
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Laut Datenschutzerklärung (zuletzt aktualisiert am 3. Oktober 2026) bleiben Unterhaltungen, Prüfprotokolle, Konnektor-Tokens und Modellschlüssel auf Ihrem Computer, und Arbeitsergebnisse bleiben im gewählten Arbeitsbereich.** Sie nennt drei Dinge, die an Kruvo-Dienste gehen: übliche HTTP-Daten für Update-Prüfungen, Lizenz-ID, Tarif und App-Version zur Validierung bezahlter Tarife sowie inhaltsfreie Produktereignisse nur bei aktivierter Telemetrie.',
          'Gehostete Modelle und verbundene Dienste erhalten die für ihre Anfragen nötigen Daten, und Screenshots bei Browser-Arbeit gehen an Ihren Modellanbieter. Bei den optionalen Slack- und GitHub-Relays verarbeitet Kruvo Cloud Nachrichteninhalte im Transit und speichert Konto-, Tarif- und Abrechnungsstatus sowie vermittelte OAuth-Tokens. Lokale Unterhaltungen, Dateien und Modellschlüssel werden nicht automatisch hochgeladen.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind Aussagen des Herstellers. PromptQuorum hat weder die App noch ihren Netzwerkverkehr geprüft.'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        items: [
          '**Windows- und Mac-Nutzer mit eigenem API-Schlüssel oder Ollama,** die einen Agenten für Dateien und verbundene Werkzeuge wollen.',
          '**Menschen, die vor Aktionen eine Freigabe wünschen,** samt lokalem Prüfprotokoll.',
          '**Käufer, die kostenlos lokal starten wollen,** ohne Kruvo-Konto.'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht prüfen konnten',
        items: [
          '**Qualität und Tempo im Praxistest.** PromptQuorum hat Kruvo nicht ausgeführt, und die Quellen nennen keine Benchmarks.',
          '**Code und Lizenz.** Der Quellcode ist privat und ein Lizenztext wurde nicht gefunden; der Code lässt sich daher nicht einsehen.',
          '**Datenschutzangaben.** Die Aussagen zu lokaler Speicherung und Telemetrie wurden nicht mit dem Netzwerkverkehr abgeglichen.',
          '**Neuester Build.** Die Hinweise zu 0.3.13 erwähnen Remote-Chats über mehrere Computer und eine iPhone-/iPad-App in TestFlight; beides wurde nicht geprüft.'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Konkurrenten und Alternativen',
        columns: [
          'App',
          'Plattformen',
          'Preis / Lizenz',
          'Wichtigster Unterschied'
        ],
        rows: [
          {
            App: '[Coil](/de/power-local-llm/coil-review)',
            Plattformen: 'Mac',
            'Preis / Lizenz': '17,99 € / Closed Source',
            'Wichtigster Unterschied': 'Router- und Worker-Modelle auf dem Gerät mit freigabepflichtigen Ordner-Werkzeugen'
          },
          {
            App: '[Open Interpreter](/de/power-local-llm/open-interpreter-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / Apache 2.0',
            'Wichtigster Unterschied': 'Open-Source-Agent, mit dem ein lokales LLM Ihren Computer steuert und Code ausführt'
          },
          {
            App: '[Agent Zero](/de/power-local-llm/agent-zero-review)',
            Plattformen: 'macOS, Windows, Linux',
            'Preis / Lizenz': 'Kostenlos / MIT',
            'Wichtigster Unterschied': 'Minimalistischer Open-Source-Agent mit Coding-Fähigkeiten'
          }
        ],
        note: 'Details der Konkurrenten ändern sich häufig; prüfen Sie Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag.'
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Funktioniert Kruvo offline?',
            a: 'Nicht standardmäßig: Es braucht ein Modell, und ein API-Schlüssel sendet Anfragen an den Anbieter. Mit Ollama und einem lokalen Modell bleiben Modellanfragen auf Ihrem Computer, während Konnektoren und Update-Prüfungen weiterhin das Netzwerk nutzen.'
          },
          {
            q: 'Kann Kruvo handeln, ohne zu fragen?',
            a: 'Aktionen an der „Hard Floor“ erfordern immer eine menschliche Freigabe, und als sensibel eingestufte Computeraktionen brauchen in jedem Modus eine Freigabe in der Desktop-App. Andere Werkzeuge folgen der von Ihnen gesetzten Berechtigungsrichtlinie und den Standardregeln.'
          },
          {
            q: 'Warum weichen die Versionsnummern voneinander ab?',
            a: 'Die Download-Seite führt 0.3.6, auf GitHub liegt außerdem 0.3.13 vom 11. Oktober, und die Anleitungen der Website verweisen für die Computernutzung auf eine App 0.3.4. Prüfen Sie die Versionshinweise des Builds, den Sie installieren.'
          },
          {
            q: 'Gibt es eine iPhone-App?',
            a: 'Die Hinweise zu 0.3.13 erwähnen eine iPhone-/iPad-App in TestFlight, während die Website Kruvo als Desktop-App für Windows und macOS beschreibt. PromptQuorum hat die TestFlight-App nicht getestet.'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Kruvo ist ein im Einstieg kostenloser Desktop-Agent, der laut Hersteller Unterhaltungen, Schlüssel und Prüfprotokolle auf Ihrem Computer hält, in einem gewählten Ordner arbeitet und vor sensiblen Aktionen nachfragt, mit Ihrem eigenen API-Schlüssel oder Ollama. Es wurde am 11. Oktober 2026 aktualisiert und veröffentlicht Prüfsummen und eine klare Datenschutzerklärung. Dagegen steht: Es ist Closed Source, die Installer sind unsigniert, die Release-Historie beginnt am 18. September 2026, die Download-Seite hinkt dem neuesten GitHub-Build hinterher, und alle Angaben zu Verhalten und Datenschutz stammen vom Hersteller. Es eignet sich für Windows- und Mac-Nutzer, die Freigaberegeln um einen Agenten wünschen; wer offenen Code möchte, kann [Open Interpreter](/de/power-local-llm/open-interpreter-review) oder [Agent Zero](/de/power-local-llm/agent-zero-review) vergleichen.'
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Kruvo-Website](https://kruvo.ai) — Produkt-, Download-, Preis-, Dokumentations- und Sicherheitsseiten, geprüft am 24. Oktober 2026.',
          '[Kruvo-Changelog](https://kruvo.ai/changelog) und [Datenschutzerklärung](https://kruvo.ai/privacy) — Versionshinweise bis 0.3.6, Datenverarbeitung und Cloud-Relays.',
          '[Kruvo-Releases auf GitHub](https://github.com/pvaz/kruvo-releases/releases) — Veröffentlichungsdaten, Dateien und Hinweise zu 0.3.0 bis 0.3.13 sowie die Angabe, dass der Quellcode privat ist.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Coil-Rezension](/de/power-local-llm/coil-review) — ein Mac-Agent-Harness mit Modellen auf dem Gerät und Routing-Belegen.',
          '[Open-Interpreter-Rezension](/de/power-local-llm/open-interpreter-review) — ein Open-Source-Agent, der Code auf Ihrem Computer ausführt.',
          '[Agent-Zero-Rezension](/de/power-local-llm/agent-zero-review) — ein minimalistischer autonomer Agent mit Coding-Fähigkeiten.',
          '[Lokale LLMs für Code und Entwicklung im Vergleich](/de/power-local-llm/local-llm-code-development-compared) — der Kategorievergleich für Coding- und Agenten-Werkzeuge.'
        ]
      }
    }
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/kruvo-review-hero-es.webp',
    title: 'Reseña de Kruvo: un compañero de IA de escritorio que pregunta antes de actuar',
    seoTitle: 'Reseña de Kruvo: compañero de IA de escritorio Windows y Mac',
    intro: 'Kruvo es una aplicación de escritorio para Windows y macOS de BexoCORP que, según sus propias páginas, trabaja en una carpeta que eliges con tu propia clave de un proveedor de modelos o con Ollama, se conecta a herramientas como GitHub, Slack y Gmail, y pide aprobación antes de las acciones sensibles. Esta reseña lee el sitio web, las notas de versión y el repositorio de versiones en GitHub del fabricante, explica por qué sus números de versión difieren y enumera lo que las fuentes dejan sin confirmar. PromptQuorum no ha instalado ni probado la aplicación.',
    metaDescription: 'Reseña de Kruvo: compañero de IA para Windows y macOS que trabaja en tu carpeta con tu clave API u Ollama y pregunta antes de actuar. Precio, requisitos, dudas.',
    twitterDescription: 'Reseña de Kruvo: compañero de IA de escritorio local-first para Windows y macOS con reglas de aprobación. Requisitos, planes, versiones y lo no verificado.',
    audience: 'Usuarios de Windows y Mac que quieren saber qué necesita Kruvo, cuánto cuesta, adónde van sus datos, cómo funcionan sus reglas de aprobación y qué afirmaciones dejan sin confirmar las fuentes.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Kruvo',
    targetKeywords: [
      'reseña kruvo',
      'compañero de ia local-first',
      'agente de ia de escritorio windows macos',
      'agente de ia con reglas de aprobación',
      'kruvo ollama clave api',
      'bexocorp kruvo'
    ],
    current_hardware_mentioned: [
      'Windows PC or Mac (macOS 13.5+)'
    ],
    leadAnswerBlock: '**Kruvo (versión 0.3.6 en la página de descarga oficial; última actualización del fabricante el 11 de octubre de 2026) es una aplicación de escritorio para Windows y macOS, gratuita para empezar y de código cerrado, que según el fabricante trabaja en una carpeta que eliges con tu propia clave de proveedor u Ollama y pregunta antes de las acciones sensibles.** Todas las afirmaciones de esta reseña sobre comportamiento y privacidad proceden de las páginas y notas de versión del fabricante; PromptQuorum no la ha instalado ni probado.',
    quickAnswerTop: {
      es: {
        question: '¿Qué necesito para usar Kruvo?',
        answer: 'Un PC de 64 bits con Windows 10 22H2 o Windows 11, o un Mac con macOS 13.5 o posterior para todas las funciones, además de un modelo: una clave API de un proveedor compatible u Ollama en un equipo adecuado. Los costes del modelo van aparte.',
        bullets: [
          'Las tarjetas de aprobación muestran la herramienta, el destino y el motivo; las acciones de «hard floor» siempre requieren una decisión humana.',
          'El uso del ordenador (Chrome o Edge supervisado, aplicaciones de Windows autorizadas) está desactivado por defecto y pide consentimiento por sitio o aplicación.',
          'El modo Work se ejecuta en una carpeta con herramientas; el modo Chat responde sin ellas.',
          'Las automatizaciones locales programadas y las peticiones por Telegram o Slack solo funcionan mientras Kruvo está en ejecución.'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer'
      },
      {
        label: '¿Qué es Kruvo?',
        anchor: 'what-is-kruvo'
      },
      {
        label: 'Dónde conseguirlo',
        anchor: 'get-it'
      },
      {
        label: 'Qué necesitas',
        anchor: 'requirements'
      },
      {
        label: 'Precio',
        anchor: 'pricing'
      },
      {
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features'
      },
      {
        label: 'Privacidad y flujo de datos',
        anchor: 'privacy'
      },
      {
        label: 'Para quién es',
        anchor: 'who-should-use'
      },
      {
        label: 'Lo que no pudimos verificar',
        anchor: 'who-should-not-use'
      },
      {
        label: 'Competidores y alternativas',
        anchor: 'vs-alternatives'
      },
      {
        label: 'Preguntas frecuentes',
        anchor: 'faq'
      },
      {
        label: 'Veredicto',
        anchor: 'verdict'
      },
      {
        label: 'Fuentes',
        anchor: 'sources'
      },
      {
        label: 'Lecturas relacionadas',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Kruvo es una aplicación de escritorio para Windows y macOS en la que un modelo que tú eliges trabaja en una carpeta y en herramientas conectadas, con reglas de aprobación y un registro de auditoría local.'
          },
          {
            type: 'plain-terms',
            text: 'Le das a Kruvo una tarea y una carpeta, hace el trabajo con tu clave API o un modelo de Ollama y se detiene a preguntarte antes de cualquier cosa sensible.'
          }
        ],
        items: [
          'Mantenimiento: GitHub muestra versiones desde la 0.3.0 del 18 de septiembre hasta la 0.3.13 del 11 de octubre de 2026, así que se actualiza activamente y no se aplica ningún aviso de proyecto abandonado.',
          'Licencia: código cerrado; el repositorio de versiones indica que el código fuente del producto está en un repositorio privado.',
          'Versiones: la página de descarga indica la 0.3.6 (7 de octubre); GitHub también contiene la 0.3.13 (11 de octubre), que esa página aún no muestra.',
          'Firma: los instaladores de Windows no están firmados y las compilaciones de Mac no están notarizadas; se publican sumas SHA-256.',
          'Base: el sitio, las notas de versión y GitHub del fabricante, leídos el 24 de octubre de 2026, sin prueba práctica.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no ha instalado, probado ni evaluado Kruvo. Las afirmaciones sobre comportamiento, seguridad y privacidad que siguen son del fabricante.'
          }
        ]
      },
      overview: {
        id: 'what-is-kruvo',
        title: '¿Qué es Kruvo?',
        content: [
          '**Kruvo es un «compañero de IA» de escritorio: una aplicación que usa el modelo que eliges para trabajar con una carpeta seleccionada y herramientas conectadas, y muestra sus acciones propuestas para tu aprobación.** El sitio lo describe como trabajo de IA local-first bajo tu control y dice que forma parte de BexoCORP. El registro de cambios sitúa la versión 0.3.0 (18 de septiembre de 2026) como aquella en la que el producto pasó a llamarse Kruvo.',
          'El modo Work se ejecuta en una carpeta con archivos, terminal y conectores; el modo Chat responde sin herramientas. La aplicación también ofrece proyectos con sus propias carpetas, una lista de tareas personal, memoria local, compañeros locales integrados (personas especializadas) y una interfaz en ocho idiomas. El trabajo local no requiere una cuenta de Kruvo.'
        ]
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**Kruvo se descarga directamente de su propio sitio web para Windows y macOS; los mismos archivos están en GitHub Releases.**'
        ],
        columns: [
          'Canal',
          'Enlace'
        ],
        rows: [
          {
            Canal: 'Windows 10 22H2 / 11 (.exe, .msi)',
            Enlace: '[Página de descarga](https://kruvo.ai/download)'
          },
          {
            Canal: 'macOS 13.5+ (Apple Silicon, Intel)',
            Enlace: '[Página de descarga](https://kruvo.ai/download)'
          },
          {
            Canal: 'Sitio web',
            Enlace: '[kruvo.ai](https://kruvo.ai)'
          },
          {
            Canal: 'Política de privacidad',
            Enlace: '[kruvo.ai/privacy](https://kruvo.ai/privacy)'
          },
          {
            Canal: 'Archivos y notas de versión',
            Enlace: '[GitHub Releases](https://github.com/pvaz/kruvo-releases/releases)'
          }
        ],
        note: 'Versión revisada: 0.3.6, la de la página de descarga oficial y la versión «Latest» de GitHub, publicada el 7 de octubre de 2026. GitHub también contiene la más reciente 0.3.13 (11 de octubre de 2026), la última actualización del fabricante en el momento de la revisión; el «0.3.4» del sitio se refiere a la versión de la aplicación con la que se hicieron sus capturas y su guía de uso del ordenador. Los instaladores de Windows no están firmados y las compilaciones de Mac no están notarizadas, por lo que Windows SmartScreen y macOS Gatekeeper avisarán; el fabricante publica sumas SHA-256 y pide verificar primero el archivo y no desactivar nunca la protección del sistema.'
      },
      requirements: {
        id: 'requirements',
        title: 'Qué necesitas',
        content: [
          '**Kruvo necesita Windows 10 22H2 o Windows 11 (64 bits) o macOS 13.5 o posterior, y un modelo: una clave API de proveedor compatible u Ollama.**'
        ],
        columns: [
          'Elemento',
          'Según las fuentes'
        ],
        rows: [
          {
            Elemento: 'Sistema operativo',
            'Según las fuentes': 'Windows 10 22H2 / 11 o macOS 13.5+ (macOS anterior no validado)'
          },
          {
            Elemento: 'Modelo',
            'Según las fuentes': 'Clave API (OpenAI, Anthropic, Gemini, Mistral, DeepSeek, Kimi, Qwen, xAI) u Ollama'
          },
          {
            Elemento: 'Opcional',
            'Según las fuentes': 'Chrome o Edge para el trabajo en el navegador; credenciales de Telegram o Slack'
          },
          {
            Elemento: 'Tamaño de descarga',
            'Según las fuentes': '.exe 96.1 MB; .dmg 150.7 MB (Apple Silicon) o 154.6 MB (Intel)'
          }
        ],
        note: 'Las fuentes no dan cifras de RAM ni de disco; un modelo de Ollama necesita un «equipo adecuado» para su propio tamaño. El uso del modelo lo factura el proveedor y es independiente de cualquier plan de Kruvo.'
      },
      pricing: {
        id: 'pricing',
        title: 'Precio',
        content: [
          '**El plan Free cuesta €0 e incluye la aplicación local completa; Pro, Team y Enterprise son niveles de servicio que se acuerdan por contacto.**'
        ],
        columns: [
          'Plan',
          'Precio'
        ],
        rows: [
          {
            Plan: 'Free',
            Precio: '€0, sin cuenta de Kruvo'
          },
          {
            Plan: 'Pro',
            Precio: '€15 al mes o €144 al año'
          },
          {
            Plan: 'Team',
            Precio: '€29 por usuario al mes, mínimo 3'
          },
          {
            Plan: 'Enterprise',
            Precio: 'A medida, contrato anual'
          }
        ],
        note: 'Leído en la página de precios el 24 de octubre de 2026, con precios en euros según el sitio. La página dice que la aplicación local tiene las mismas capacidades en los cuatro planes, que los niveles de pago cubren conexiones gestionadas y licencias de equipo, y que no hay compra de autoservicio ni prueba prometida. Kruvo no incluye créditos de proveedores.'
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede de las páginas o notas de versión del fabricante.**'
        ],
        items: [
          '**Reglas de aprobación y auditoría.** Una política de permisos, reglas permanentes, «hard floors» que ningún modo puede rebajar y un registro de auditoría local con redacción de secretos.',
          '**Modelos.** OpenAI, Anthropic, Gemini, Mistral, DeepSeek, Kimi, Qwen, xAI u Ollama.',
          '**Conectores.** GitHub, Slack, Gmail, Outlook, Calendario, Notion, Jira, Linear, HubSpot y MCP, configurados manualmente; PaxHelm y Talqivo se conectan mediante MCP.',
          '**Uso del ordenador.** Trabajo supervisado en Chrome o Edge, en el perfil propio de Kruvo o mediante una extensión, y en aplicaciones de Windows autorizadas, con los controles Pausa, Tomar el control y Detener.',
          '**Peticiones remotas y automatizaciones.** Peticiones y aprobaciones elegibles por Telegram o Slack, más automatizaciones locales programadas que no pueden aprobarse a sí mismas ni usar herramientas del navegador.',
          '**Organización del trabajo.** Proyectos, lista de tareas, memoria local y compañeros locales integrados.',
          '**Actualizaciones.** Paquetes de actualización firmados que verifica el actualizador de escritorio.'
        ]
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**La política de privacidad (actualizada por última vez el 3 de octubre de 2026) dice que las conversaciones, los registros de auditoría, los tokens de conectores y las claves de modelos permanecen en tu ordenador y que los entregables quedan en el espacio de trabajo elegido.** Enumera tres cosas que se envían a los servicios de Kruvo: datos HTTP estándar para comprobar actualizaciones, el identificador de licencia, el plan y la versión de la aplicación para validar los planes de pago, y eventos de producto sin contenido solo si la telemetría está activada.',
          'Los modelos alojados y los servicios conectados reciben los datos necesarios para sus peticiones, y las capturas de pantalla del trabajo en el navegador van a tu proveedor de modelos. Con los relés opcionales de Slack y GitHub, Kruvo Cloud procesa el contenido de los mensajes en tránsito y guarda el estado de cuenta, plan y facturación y tokens OAuth intermediados. Las conversaciones, archivos y claves de modelos locales no se suben automáticamente.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son afirmaciones del fabricante. PromptQuorum no ha auditado la aplicación ni su tráfico de red.'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Windows y Mac con su propia clave API u Ollama** que quieren un agente que trabaje en archivos y herramientas conectadas.',
          '**Personas que quieren aprobar antes de las acciones,** con un registro de auditoría local.',
          '**Compradores que quieren empezar gratis en local,** sin cuenta de Kruvo.'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad y velocidad en la práctica.** PromptQuorum no ejecutó Kruvo y las fuentes no dan pruebas de rendimiento.',
          '**Código y licencia.** El código fuente es privado y no se encontró texto de licencia, por lo que no se puede inspeccionar el código.',
          '**Afirmaciones de privacidad.** Las declaraciones sobre almacenamiento local y telemetría no se contrastaron con el tráfico de red.',
          '**Última compilación.** Las notas de la 0.3.13 mencionan conversaciones remotas entre varios ordenadores y una aplicación para iPhone/iPad en TestFlight; no se verificó ninguna de las dos.'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: [
          'App',
          'Plataformas',
          'Precio / licencia',
          'Diferencia clave'
        ],
        rows: [
          {
            App: '[Coil](/es/power-local-llm/coil-review)',
            Plataformas: 'Mac',
            'Precio / licencia': '17,99 € / Código cerrado',
            'Diferencia clave': 'Modelos enrutador y worker en el dispositivo con herramientas de carpeta que requieren aprobación'
          },
          {
            App: '[Open Interpreter](/es/power-local-llm/open-interpreter-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / Apache 2.0',
            'Diferencia clave': 'Agente de código abierto que deja que un LLM local controle tu ordenador y ejecute código'
          },
          {
            App: '[Agent Zero](/es/power-local-llm/agent-zero-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Agente autónomo de código abierto minimalista con capacidad de programación'
          }
        ],
        note: 'Los detalles de la competencia cambian a menudo; confirma el precio, la licencia y las plataformas de cada app en su propia ficha.'
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Funciona Kruvo sin conexión?',
            a: 'No por defecto: necesita un modelo, y una clave API envía las peticiones al proveedor. Con Ollama y un modelo local, las peticiones al modelo se quedan en tu ordenador, mientras que los conectores y las comprobaciones de actualizaciones siguen usando la red.'
          },
          {
            q: '¿Puede Kruvo actuar sin preguntarme?',
            a: 'Las acciones de «hard floor» siempre requieren aprobación humana, y las acciones de ordenador clasificadas como sensibles necesitan aprobación en la aplicación de escritorio en cualquier modo. Las demás herramientas siguen la política de permisos y las reglas permanentes que definas.'
          },
          {
            q: '¿Por qué difieren los números de versión?',
            a: 'La página de descarga indica la 0.3.6, GitHub también contiene la 0.3.13 del 11 de octubre, y las guías del sitio se refieren a una aplicación 0.3.4 para el uso del ordenador. Consulta las notas de versión de la compilación que instales.'
          },
          {
            q: '¿Hay una aplicación para iPhone?',
            a: 'Las notas de la 0.3.13 mencionan una aplicación para iPhone/iPad en TestFlight, mientras que el sitio describe Kruvo como una aplicación de escritorio para Windows y macOS. PromptQuorum no probó la aplicación de TestFlight.'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Kruvo es un agente de escritorio gratuito para empezar que, según el fabricante, mantiene conversaciones, claves y registros de auditoría en tu ordenador, trabaja en una carpeta que eliges y pregunta antes de las acciones sensibles, con tu propia clave API u Ollama. Se actualizó el 11 de octubre de 2026 y publica sumas de comprobación y una política de privacidad clara. En contra, es de código cerrado, sus instaladores no están firmados, su historial de versiones empieza el 18 de septiembre de 2026, la página de descarga va por detrás de la última compilación de GitHub y todas las afirmaciones de comportamiento y privacidad vienen del fabricante. Encaja con usuarios de Windows y Mac que quieren reglas de aprobación alrededor de un agente; quien prefiera código abierto puede comparar [Open Interpreter](/es/power-local-llm/open-interpreter-review) o [Agent Zero](/es/power-local-llm/agent-zero-review).'
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Kruvo](https://kruvo.ai) — páginas de producto, descarga, precios, documentación y seguridad, consultadas el 24 de octubre de 2026.',
          '[Registro de cambios de Kruvo](https://kruvo.ai/changelog) y [política de privacidad](https://kruvo.ai/privacy) — notas de versión hasta la 0.3.6, tratamiento de datos y relés en la nube.',
          '[Versiones de Kruvo en GitHub](https://github.com/pvaz/kruvo-releases/releases) — fechas de publicación, archivos y notas de las versiones 0.3.0 a 0.3.13, y la indicación de que el código fuente es privado.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Coil](/es/power-local-llm/coil-review) — un arnés de agentes para Mac con modelos en el dispositivo y recibos de enrutamiento.',
          '[Reseña de Open Interpreter](/es/power-local-llm/open-interpreter-review) — un agente de código abierto que ejecuta código en tu ordenador.',
          '[Reseña de Agent Zero](/es/power-local-llm/agent-zero-review) — un agente autónomo minimalista con capacidad de programación.',
          '[LLM locales para código y desarrollo: comparativa](/es/power-local-llm/local-llm-code-development-compared) — la comparativa de categoría para herramientas de programación y agentes.'
        ]
      }
    }
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/kruvo-review-hero-fr.webp',
    title: 'Test de Kruvo : un collègue IA de bureau qui demande avant d’agir',
    seoTitle: 'Test de Kruvo : collègue IA de bureau Windows et Mac',
    intro: 'Kruvo est une application de bureau pour Windows et macOS, éditée par BexoCORP, qui, selon ses propres pages, travaille dans un dossier de votre choix avec votre propre clé d’un fournisseur de modèles ou avec Ollama, se connecte à des outils comme GitHub, Slack et Gmail, et demande une approbation avant les actions sensibles. Ce test s’appuie sur le site, les notes de version et le dépôt GitHub des versions de l’éditeur, explique pourquoi ses numéros de version diffèrent et liste ce que les sources ne confirment pas. PromptQuorum n’a ni installé ni testé l’application.',
    metaDescription: 'Test de Kruvo : collègue IA pour Windows et macOS qui travaille dans votre dossier avec votre clé API ou Ollama et demande avant d’agir. Prix, besoins, points ouverts.',
    twitterDescription: 'Test de Kruvo : collègue IA de bureau local-first pour Windows et macOS avec règles d’approbation. Prérequis, offres, versions et points non vérifiés.',
    audience: 'Utilisateurs de Windows et de Mac qui veulent savoir ce dont Kruvo a besoin, ce qu’il coûte, où vont leurs données, comment fonctionnent ses règles d’approbation et quelles affirmations les sources laissent non confirmées.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test Kruvo',
    targetKeywords: [
      'test kruvo',
      'collègue ia local-first',
      'agent ia de bureau windows macos',
      'agent ia avec règles d’approbation',
      'kruvo ollama clé api',
      'bexocorp kruvo'
    ],
    current_hardware_mentioned: [
      'Windows PC or Mac (macOS 13.5+)'
    ],
    leadAnswerBlock: '**Kruvo (version 0.3.6 sur la page de téléchargement officielle ; dernière mise à jour de l’éditeur le 11 octobre 2026) est une application de bureau pour Windows et macOS, gratuite au départ et à code fermé, qui, selon l’éditeur, travaille dans un dossier de votre choix avec votre propre clé de fournisseur ou Ollama et demande avant les actions sensibles.** Toutes les affirmations de ce test sur le comportement et la confidentialité viennent des pages et des notes de version de l’éditeur ; PromptQuorum ne l’a ni installée ni testée.',
    quickAnswerTop: {
      fr: {
        question: 'Que faut-il pour utiliser Kruvo ?',
        answer: 'Un PC 64 bits sous Windows 10 22H2 ou Windows 11, ou un Mac sous macOS 13.5 ou plus récent pour toutes les fonctions, plus un modèle : une clé API de fournisseur prise en charge ou Ollama sur un matériel adapté. Les coûts du modèle sont à part.',
        bullets: [
          'Les cartes d’approbation indiquent l’outil, la cible et la raison ; les actions « hard floor » exigent toujours une décision humaine.',
          'L’usage de l’ordinateur (Chrome ou Edge supervisé, applications Windows autorisées) est désactivé par défaut et demande un accord par site ou application.',
          'Le mode Work s’exécute dans un dossier avec des outils ; le mode Chat répond sans eux.',
          'Les automatisations locales planifiées et les demandes par Telegram ou Slack ne fonctionnent que si Kruvo est lancé.'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer'
      },
      {
        label: 'Qu’est-ce que Kruvo ?',
        anchor: 'what-is-kruvo'
      },
      {
        label: 'Où l’obtenir',
        anchor: 'get-it'
      },
      {
        label: 'Ce qu’il vous faut',
        anchor: 'requirements'
      },
      {
        label: 'Tarif',
        anchor: 'pricing'
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features'
      },
      {
        label: 'Confidentialité et flux de données',
        anchor: 'privacy'
      },
      {
        label: 'À qui il s’adresse',
        anchor: 'who-should-use'
      },
      {
        label: 'Ce que nous n’avons pas pu vérifier',
        anchor: 'who-should-not-use'
      },
      {
        label: 'Concurrents et alternatives',
        anchor: 'vs-alternatives'
      },
      {
        label: 'Questions fréquentes',
        anchor: 'faq'
      },
      {
        label: 'Verdict',
        anchor: 'verdict'
      },
      {
        label: 'Sources',
        anchor: 'sources'
      },
      {
        label: 'Lectures associées',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Kruvo est une application de bureau pour Windows et macOS où un modèle de votre choix travaille dans un dossier et des outils connectés, avec des règles d’approbation et un journal d’audit local.'
          },
          {
            type: 'plain-terms',
            text: 'Vous donnez une tâche et un dossier à Kruvo, il fait le travail avec votre clé API ou un modèle Ollama et s’arrête pour vous demander avant tout ce qui est sensible.'
          }
        ],
        items: [
          'Maintenance : GitHub affiche des versions de la 0.3.0 le 18 septembre à la 0.3.13 le 11 octobre 2026 ; l’application est donc activement mise à jour et aucun avertissement de projet abandonné ne s’applique.',
          'Licence : code fermé ; le dépôt des versions indique que le code source du produit est conservé dans un dépôt privé.',
          'Versions : la page de téléchargement indique la 0.3.6 (7 octobre) ; GitHub contient aussi la 0.3.13 (11 octobre), que cette page ne mentionne pas encore.',
          'Signature : les installateurs Windows ne sont pas signés et les builds Mac ne sont pas notariés ; des sommes SHA-256 sont publiées.',
          'Base : le site, les notes de version et GitHub de l’éditeur, lus le 24 octobre 2026, sans test pratique.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum n’a ni installé, ni testé, ni évalué Kruvo. Les affirmations sur le comportement, la sécurité et la confidentialité ci-dessous viennent de l’éditeur.'
          }
        ]
      },
      overview: {
        id: 'what-is-kruvo',
        title: 'Qu’est-ce que Kruvo ?',
        content: [
          '**Kruvo est un « collègue IA » de bureau : une application qui utilise le modèle de votre choix pour travailler avec un dossier sélectionné et des outils connectés, et soumet ses actions proposées à votre approbation.** Le site le présente comme un travail IA local-first sous votre contrôle et indique qu’il fait partie de BexoCORP. Le journal des modifications cite la version 0.3.0 (18 septembre 2026) comme celle où le produit est devenu Kruvo.',
          'Le mode Work s’exécute dans un dossier avec fichiers, terminal et connecteurs ; le mode Chat répond sans outils. L’application propose aussi des projets avec leurs propres dossiers, une liste de tâches personnelle, une mémoire locale, des collègues locaux intégrés (personas spécialisés) et une interface en huit langues. Le travail local ne demande pas de compte Kruvo.'
        ]
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**Kruvo se télécharge directement depuis son propre site pour Windows et macOS ; les mêmes fichiers sont sur GitHub Releases.**'
        ],
        columns: [
          'Canal',
          'Lien'
        ],
        rows: [
          {
            Canal: 'Windows 10 22H2 / 11 (.exe, .msi)',
            Lien: '[Page de téléchargement](https://kruvo.ai/download)'
          },
          {
            Canal: 'macOS 13.5+ (Apple Silicon, Intel)',
            Lien: '[Page de téléchargement](https://kruvo.ai/download)'
          },
          {
            Canal: 'Site web',
            Lien: '[kruvo.ai](https://kruvo.ai)'
          },
          {
            Canal: 'Politique de confidentialité',
            Lien: '[kruvo.ai/privacy](https://kruvo.ai/privacy)'
          },
          {
            Canal: 'Fichiers et notes de version',
            Lien: '[GitHub Releases](https://github.com/pvaz/kruvo-releases/releases)'
          }
        ],
        note: 'Version testée : 0.3.6, celle de la page de téléchargement officielle et de la version « Latest » sur GitHub, publiée le 7 octobre 2026. GitHub contient aussi la 0.3.13, plus récente (11 octobre 2026), dernière mise à jour de l’éditeur au moment de la vérification ; le « 0.3.4 » du site désigne la version de l’application avec laquelle ses captures et son guide d’usage de l’ordinateur ont été réalisés. Les installateurs Windows ne sont pas signés et les builds Mac ne sont pas notariés, si bien que Windows SmartScreen et macOS Gatekeeper avertissent ; l’éditeur publie des sommes SHA-256 et demande de vérifier le fichier d’abord et de ne jamais désactiver la protection du système.'
      },
      requirements: {
        id: 'requirements',
        title: 'Ce qu’il vous faut',
        content: [
          '**Kruvo exige Windows 10 22H2 ou Windows 11 (64 bits) ou macOS 13.5 ou plus récent, et un modèle : une clé API de fournisseur prise en charge ou Ollama.**'
        ],
        columns: [
          'Élément',
          'Selon les sources'
        ],
        rows: [
          {
            'Élément': 'Système d’exploitation',
            'Selon les sources': 'Windows 10 22H2 / 11 ou macOS 13.5+ (macOS plus ancien non validé)'
          },
          {
            'Élément': 'Modèle',
            'Selon les sources': 'Clé API (OpenAI, Anthropic, Gemini, Mistral, DeepSeek, Kimi, Qwen, xAI) ou Ollama'
          },
          {
            'Élément': 'Facultatif',
            'Selon les sources': 'Chrome ou Edge pour le travail dans le navigateur ; identifiants Telegram ou Slack'
          },
          {
            'Élément': 'Taille du téléchargement',
            'Selon les sources': '.exe 96.1 MB ; .dmg 150.7 MB (Apple Silicon) ou 154.6 MB (Intel)'
          }
        ],
        note: 'Les sources ne donnent aucun chiffre de RAM ni de disque ; un modèle Ollama demande un « matériel adapté » à sa propre taille. L’usage du modèle est facturé par le fournisseur et reste distinct de toute offre Kruvo.'
      },
      pricing: {
        id: 'pricing',
        title: 'Tarif',
        content: [
          '**L’offre Free coûte 0 € et comprend l’application locale complète ; Pro, Team et Enterprise sont des niveaux de service convenus par contact.**'
        ],
        columns: [
          'Offre',
          'Prix'
        ],
        rows: [
          {
            Offre: 'Free',
            Prix: '0 €, sans compte Kruvo'
          },
          {
            Offre: 'Pro',
            Prix: '15 € par mois ou 144 € par an'
          },
          {
            Offre: 'Team',
            Prix: '29 € par utilisateur et par mois, minimum 3'
          },
          {
            Offre: 'Enterprise',
            Prix: 'Sur mesure, contrat annuel'
          }
        ],
        note: 'Relevé sur la page des tarifs le 24 octobre 2026, prix en euros selon le site. La page indique que l’application locale offre les mêmes capacités dans les quatre offres, que les niveaux payants couvrent des connexions gérées et des licences d’équipe, et qu’il n’y a ni paiement en libre-service ni essai promis. Kruvo n’inclut pas de crédits des fournisseurs.'
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient des pages ou des notes de version de l’éditeur.**'
        ],
        items: [
          '**Règles d’approbation et audit.** Une politique d’autorisations, des règles permanentes, des « hard floors » qu’aucun mode ne peut abaisser et un journal d’audit local avec masquage des secrets.',
          '**Modèles.** OpenAI, Anthropic, Gemini, Mistral, DeepSeek, Kimi, Qwen, xAI ou Ollama.',
          '**Connecteurs.** GitHub, Slack, Gmail, Outlook, Calendrier, Notion, Jira, Linear, HubSpot et MCP, configurés manuellement ; PaxHelm et Talqivo se connectent via MCP.',
          '**Usage de l’ordinateur.** Travail supervisé dans Chrome ou Edge, dans le profil propre de Kruvo ou via une extension, et dans des applications Windows autorisées, avec les commandes Pause, Prendre la main et Arrêt.',
          '**Demandes à distance et automatisations.** Demandes et approbations éligibles par Telegram ou Slack, plus des automatisations locales planifiées qui ne peuvent ni s’approuver elles-mêmes ni utiliser les outils du navigateur.',
          '**Organisation du travail.** Projets, liste de tâches, mémoire locale et collègues locaux intégrés.',
          '**Mises à jour.** Paquets de mise à jour signés, vérifiés par le programme de mise à jour du bureau.'
        ]
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**La politique de confidentialité (dernière mise à jour le 3 octobre 2026) indique que les conversations, les journaux d’audit, les jetons de connecteurs et les clés de modèles restent sur votre ordinateur, et que les livrables restent dans l’espace de travail choisi.** Elle cite trois éléments envoyés aux services Kruvo : des données HTTP standard pour les vérifications de mise à jour, l’identifiant de licence, l’offre et la version de l’application pour valider les offres payantes, et des événements produit sans contenu uniquement si la télémétrie est activée.',
          'Les modèles hébergés et les services connectés reçoivent les données nécessaires à leurs requêtes, et les captures d’écran prises pendant le travail dans le navigateur vont à votre fournisseur de modèles. Avec les relais Slack et GitHub facultatifs, Kruvo Cloud traite le contenu des messages en transit et conserve l’état du compte, de l’offre et de la facturation ainsi que des jetons OAuth intermédiés. Les conversations, fichiers et clés de modèles locaux ne sont pas envoyés automatiquement.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont les déclarations de l’éditeur. PromptQuorum n’a audité ni l’application ni son trafic réseau.'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui il s’adresse',
        items: [
          '**Utilisateurs de Windows et de Mac ayant leur propre clé API ou Ollama** qui veulent un agent travaillant dans des fichiers et des outils connectés.',
          '**Personnes qui veulent une approbation avant les actions,** avec un journal d’audit local.',
          '**Acheteurs qui veulent démarrer gratuitement en local,** sans compte Kruvo.'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité et vitesse à l’usage.** PromptQuorum n’a pas exécuté Kruvo et les sources ne donnent aucun benchmark.',
          '**Code et licence.** Le code source est privé et aucun texte de licence n’a été trouvé ; le code ne peut donc pas être inspecté.',
          '**Affirmations de confidentialité.** Les déclarations sur le stockage local et la télémétrie n’ont pas été comparées au trafic réseau.',
          '**Dernier build.** Les notes de la 0.3.13 mentionnent des conversations à distance entre plusieurs ordinateurs et une application iPhone/iPad sur TestFlight ; ni l’un ni l’autre n’a été vérifié.'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: [
          'Application',
          'Plateformes',
          'Prix / licence',
          'Différence clé'
        ],
        rows: [
          {
            Application: '[Coil](/fr/power-local-llm/coil-review)',
            Plateformes: 'Mac',
            'Prix / licence': '17,99 € / Code fermé',
            'Différence clé': 'Modèles routeur et worker sur l’appareil avec outils de dossier soumis à approbation'
          },
          {
            Application: '[Open Interpreter](/fr/power-local-llm/open-interpreter-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / Apache 2.0',
            'Différence clé': 'Agent open source qui laisse un LLM local piloter votre ordinateur et exécuter du code'
          },
          {
            Application: '[Agent Zero](/fr/power-local-llm/agent-zero-review)',
            Plateformes: 'macOS, Windows, Linux',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Agent autonome open source minimaliste avec capacité de codage'
          }
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes de chaque application sur sa propre fiche.'
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Kruvo fonctionne-t-il hors ligne ?',
            a: 'Pas par défaut : il faut un modèle, et une clé API envoie les requêtes au fournisseur. Avec Ollama et un modèle local, les requêtes au modèle restent sur votre ordinateur, tandis que les connecteurs et les vérifications de mise à jour utilisent toujours le réseau.'
          },
          {
            q: 'Kruvo peut-il agir sans me demander ?',
            a: 'Les actions « hard floor » exigent toujours une approbation humaine, et les actions informatiques classées sensibles demandent une approbation dans l’application de bureau, quel que soit le mode. Les autres outils suivent la politique d’autorisations et les règles permanentes que vous définissez.'
          },
          {
            q: 'Pourquoi les numéros de version diffèrent-ils ?',
            a: 'La page de téléchargement indique la 0.3.6, GitHub contient aussi la 0.3.13 du 11 octobre, et les guides du site renvoient à une application 0.3.4 pour l’usage de l’ordinateur. Consultez les notes de version du build que vous installez.'
          },
          {
            q: 'Existe-t-il une application iPhone ?',
            a: 'Les notes de la 0.3.13 mentionnent une application iPhone/iPad sur TestFlight, alors que le site décrit Kruvo comme une application de bureau pour Windows et macOS. PromptQuorum n’a pas testé l’application TestFlight.'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Kruvo est un agent de bureau gratuit au départ qui, selon l’éditeur, garde conversations, clés et journaux d’audit sur votre ordinateur, travaille dans un dossier de votre choix et demande avant les actions sensibles, avec votre propre clé API ou Ollama. Il a été mis à jour le 11 octobre 2026 et publie des sommes de contrôle et une politique de confidentialité claire. En revanche, son code est fermé, ses installateurs ne sont pas signés, son historique de versions commence le 18 septembre 2026, la page de téléchargement est en retard sur le dernier build GitHub et toutes les affirmations sur le comportement et la confidentialité viennent de l’éditeur. Il convient aux utilisateurs de Windows et de Mac qui veulent des règles d’approbation autour d’un agent ; ceux qui préfèrent un code ouvert peuvent comparer [Open Interpreter](/fr/power-local-llm/open-interpreter-review) ou [Agent Zero](/fr/power-local-llm/agent-zero-review).'
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site de Kruvo](https://kruvo.ai) — pages produit, téléchargement, tarifs, documentation et sécurité, consultées le 24 octobre 2026.',
          '[Journal des modifications de Kruvo](https://kruvo.ai/changelog) et [politique de confidentialité](https://kruvo.ai/privacy) — notes de version jusqu’à la 0.3.6, traitement des données et relais cloud.',
          '[Versions de Kruvo sur GitHub](https://github.com/pvaz/kruvo-releases/releases) — dates de publication, fichiers et notes des versions 0.3.0 à 0.3.13, et mention que le code source est privé.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Coil](/fr/power-local-llm/coil-review) — un harnais d’agent pour Mac avec modèles sur l’appareil et reçus de routage.',
          '[Test d’Open Interpreter](/fr/power-local-llm/open-interpreter-review) — un agent open source qui exécute du code sur votre ordinateur.',
          '[Test d’Agent Zero](/fr/power-local-llm/agent-zero-review) — un agent autonome minimaliste avec capacité de codage.',
          '[LLM locaux pour le code et le développement : comparatif](/fr/power-local-llm/local-llm-code-development-compared) — le comparatif de catégorie pour les outils de codage et d’agents.'
        ]
      }
    }
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/kruvo-review-hero-ja.webp',
    title: 'Kruvoレビュー：実行前に確認を求めるデスクトップAIコワーカー',
    seoTitle: 'Kruvoレビュー：Windows・Mac向けAIコワーカー',
    intro: 'Kruvoは、BexoCORPが提供するWindows・macOS向けのデスクトップアプリです。公式ページによると、選んだフォルダで自分のモデル提供元のAPIキーまたはOllamaを使って作業し、GitHub・Slack・Gmailなどのツールと連携し、機微な操作の前に承認を求めます。このレビューは、提供元のWebサイト、リリースノート、GitHubのリリース用リポジトリを読み、バージョン番号が食い違う理由を整理し、情報源で確認できなかった点を挙げます。PromptQuorumはこのアプリをインストールも検証もしていません。',
    metaDescription: 'Kruvoレビュー：自分のAPIキーまたはOllamaでフォルダ内を作業し、実行前に確認するWindows・macOS向けAIコワーカー。料金・必要環境・未確認点を整理。',
    twitterDescription: 'Kruvoレビュー：承認ルールを備えたWindows・macOS向けローカルファーストAIコワーカー。必要環境、プラン、バージョンの食い違い、未確認点。',
    audience: 'Kruvoに何が必要か、いくらかかるか、データがどこへ行くか、承認ルールがどう働くか、情報源が確認していない点は何かを知りたいWindowsおよびMacユーザー。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Kruvo レビュー',
    targetKeywords: [
      'kruvo レビュー',
      'ローカルファースト aiコワーカー',
      'デスクトップ aiエージェント windows macos',
      '承認ルール付き aiエージェント',
      'kruvo ollama apiキー',
      'bexocorp kruvo'
    ],
    current_hardware_mentioned: [
      'Windows PC or Mac (macOS 13.5+)'
    ],
    leadAnswerBlock: '**Kruvo（公式ダウンロードページはバージョン0.3.6、提供元の最新の更新は2026年10月11日）は、無料で始められるクローズドソースのWindows・macOS向けデスクトップアプリで、提供元によると、選んだフォルダで自分のモデル提供元のキーまたはOllamaを使って作業し、機微な操作の前に確認します。** このレビューの動作とプライバシーに関する記述はすべて提供元のページとリリースノートに基づいており、PromptQuorumはインストールも検証もしていません。',
    quickAnswerTop: {
      ja: {
        question: 'Kruvoを動かすには何が必要ですか？',
        answer: '64ビット版のWindows 10 22H2またはWindows 11、もしくは全機能を使うならmacOS 13.5以降のMacに加えて、モデルが必要です。対応するモデル提供元のAPIキー、または適切なハードウェア上のOllamaを使います。モデルの利用料は別です。',
        bullets: [
          '承認カードにツール・対象・理由が表示され、ハードフロア操作は常に人間の判断が必要です。',
          'コンピューター操作（監督付きのChromeまたはEdge、許可したWindowsアプリ）は初期状態でオフで、サイトやアプリごとの同意が必要です。',
          'Workモードはツール付きでフォルダ内を作業し、Chatモードはツールなしで回答します。',
          '予定されたローカル自動化とTelegramまたはSlack経由の依頼は、Kruvoが起動している間だけ動きます。'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer'
      },
      {
        label: 'Kruvoとは',
        anchor: 'what-is-kruvo'
      },
      {
        label: '入手方法',
        anchor: 'get-it'
      },
      {
        label: '必要な環境',
        anchor: 'requirements'
      },
      {
        label: '料金',
        anchor: 'pricing'
      },
      {
        label: '情報源で確認できた機能',
        anchor: 'key-features'
      },
      {
        label: 'プライバシーとデータの流れ',
        anchor: 'privacy'
      },
      {
        label: '向いている人',
        anchor: 'who-should-use'
      },
      {
        label: '確認できなかった点',
        anchor: 'who-should-not-use'
      },
      {
        label: '競合と代替ツール',
        anchor: 'vs-alternatives'
      },
      {
        label: 'よくある質問',
        anchor: 'faq'
      },
      {
        label: '総評',
        anchor: 'verdict'
      },
      {
        label: '情報源',
        anchor: 'sources'
      },
      {
        label: '関連記事',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Kruvoは、自分で選んだモデルがフォルダと連携ツールで作業するWindows・macOS向けデスクトップアプリで、承認ルールとローカルの監査記録を備えています。'
          },
          {
            type: 'plain-terms',
            text: 'タスクとフォルダを渡すと、自分のAPIキーまたはOllamaのモデルで作業を進め、機微な操作の前に止まって確認を求めます。'
          }
        ],
        items: [
          '保守状況：GitHubには2026年9月18日の0.3.0から10月11日の0.3.13までのリリースがあり、活発に更新されているため、放置プロジェクトの警告は該当しません。',
          'ライセンス：クローズドソース。リリース用リポジトリは、製品のソースコードが非公開リポジトリにあると説明しています。',
          'バージョン：ダウンロードページは0.3.6（10月7日）を掲載し、GitHubにはそのページがまだ載せていない0.3.13（10月11日）もあります。',
          '署名：Windowsのインストーラーはコード署名なし、Macのビルドは公証なしで、SHA-256チェックサムが公開されています。',
          '根拠：提供元のサイト、リリースノート、GitHubを2026年10月24日に確認したもので、実機検証は行っていません。'
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumはKruvoをインストールも検証もベンチマークもしていません。以下の動作・セキュリティ・プライバシーに関する記述は提供元のものです。'
          }
        ]
      },
      overview: {
        id: 'what-is-kruvo',
        title: 'Kruvoとは',
        content: [
          '**Kruvoはデスクトップ向けの「AIコワーカー」です。選んだモデルで指定フォルダと連携ツールを使って作業し、提案した操作を承認のために表示するアプリです。** サイトでは、自分の管理下で行うローカルファーストのAI作業と説明され、BexoCORPの一部とされています。変更履歴では、バージョン0.3.0（2026年9月18日）が製品がKruvoになったリリースとして記載されています。',
          'Workモードはファイル・ターミナル・コネクターを使ってフォルダ内で動き、Chatモードはツールなしで回答します。独自のフォルダを持つプロジェクト、個人用タスクリスト、ローカルメモリ、組み込みのローカルコワーカー（専門ペルソナ）、8言語のインターフェースもあります。ローカルでの作業にKruvoアカウントは不要です。'
        ]
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**KruvoはWindows・macOS向けに公式サイトから直接ダウンロードでき、同じファイルがGitHub Releasesにもあります。**'
        ],
        columns: [
          '入手先',
          'リンク'
        ],
        rows: [
          {
            '入手先': 'Windows 10 22H2／11（.exe、.msi）',
            'リンク': '[ダウンロードページ](https://kruvo.ai/download)'
          },
          {
            '入手先': 'macOS 13.5以降（Apple Silicon、Intel）',
            'リンク': '[ダウンロードページ](https://kruvo.ai/download)'
          },
          {
            '入手先': '公式サイト',
            'リンク': '[kruvo.ai](https://kruvo.ai)'
          },
          {
            '入手先': 'プライバシーポリシー',
            'リンク': '[kruvo.ai/privacy](https://kruvo.ai/privacy)'
          },
          {
            '入手先': 'リリースファイルとノート',
            'リンク': '[GitHub Releases](https://github.com/pvaz/kruvo-releases/releases)'
          }
        ],
        note: '確認したバージョン：0.3.6。公式ダウンロードページとGitHubの「Latest」リリースが示すもので、2026年10月7日に公開されています。GitHubにはより新しい0.3.13（2026年10月11日）もあり、確認時点での提供元の最新の更新です。サイトの「0.3.4」は、スクリーンショットとコンピューター操作ガイドの作成に使われたアプリのバージョンを指します。Windowsのインストーラーはコード署名がなく、Macのビルドは公証されていないため、WindowsのSmartScreenやmacOSのGatekeeperが警告を表示します。提供元はSHA-256チェックサムを公開し、先にファイルを検証すること、システムの保護機能を決して無効にしないことを案内しています。'
      },
      requirements: {
        id: 'requirements',
        title: '必要な環境',
        content: [
          '**Kruvoには、Windows 10 22H2またはWindows 11（64ビット）かmacOS 13.5以降と、対応するモデル提供元のAPIキーまたはOllamaが必要です。**'
        ],
        columns: [
          '項目',
          '情報源の記載'
        ],
        rows: [
          {
            '項目': 'OS',
            '情報源の記載': 'Windows 10 22H2／11、またはmacOS 13.5以降（それ以前のmacOSは未検証）'
          },
          {
            '項目': 'モデル',
            '情報源の記載': 'APIキー（OpenAI、Anthropic、Gemini、Mistral、DeepSeek、Kimi、Qwen、xAI）またはOllama'
          },
          {
            '項目': '任意',
            '情報源の記載': 'ブラウザー作業用のChromeまたはEdge、TelegramまたはSlackの認証情報'
          },
          {
            '項目': 'ダウンロードサイズ',
            '情報源の記載': '.exe 96.1 MB、.dmg 150.7 MB（Apple Silicon）または154.6 MB（Intel）'
          }
        ],
        note: '情報源にRAMやディスクの数値はなく、Ollamaのモデルにはそのサイズに応じた「適切なハードウェア」が必要とされています。モデルの利用料は提供元が請求し、Kruvoのプランとは別です。'
      },
      pricing: {
        id: 'pricing',
        title: '料金',
        content: [
          '**Freeプランは€0でローカルアプリの全機能を含み、Pro・Team・Enterpriseは問い合わせで取り決めるサービス階層です。**'
        ],
        columns: [
          'プラン',
          '価格'
        ],
        rows: [
          {
            'プラン': 'Free',
            '価格': '€0、Kruvoアカウント不要'
          },
          {
            'プラン': 'Pro',
            '価格': '月額€15または年額€144'
          },
          {
            'プラン': 'Team',
            '価格': '1ユーザーあたり月額€29、最低3ユーザー'
          },
          {
            'プラン': 'Enterprise',
            '価格': '個別見積もり、年間契約'
          }
        ],
        note: '2026年10月24日に料金ページで確認しました。価格はサイトの表示に従いユーロです。ページによると、ローカルアプリの機能は4プランすべてで同じで、有料階層は管理型接続とチームライセンスを対象とし、セルフサービスの購入手続きや試用の約束はありません。Kruvoにはモデル提供元のクレジットは含まれません。'
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべて提供元のページまたはリリースノートによるものです。**'
        ],
        items: [
          '**承認ルールと監査。** 権限ポリシー、常設ルール、どのモードでも下げられないハードフロア、機密情報をマスクするローカルの監査記録。',
          '**モデル。** OpenAI、Anthropic、Gemini、Mistral、DeepSeek、Kimi、Qwen、xAI、またはOllama。',
          '**コネクター。** GitHub、Slack、Gmail、Outlook、カレンダー、Notion、Jira、Linear、HubSpot、MCPを手動で設定。PaxHelmとTalqivoはMCPで接続。',
          '**コンピューター操作。** KruvoのChrome／Edge専用プロファイルまたは拡張機能経由の監督付き作業と、許可したWindowsアプリでの操作。一時停止・引き継ぎ・停止の操作あり。',
          '**リモート依頼と自動化。** TelegramまたはSlack経由の依頼と対象の承認、および自分で承認できずブラウザーツールも使えない、予定されたローカル自動化。',
          '**作業の整理。** プロジェクト、タスクリスト、ローカルメモリ、組み込みのローカルコワーカー。',
          '**更新。** デスクトップの更新機能が検証する署名付き更新パッケージ。'
        ]
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**プライバシーポリシー（最終更新2026年10月3日）によると、会話・監査記録・コネクターのトークン・モデルのキーはお使いのコンピューターに残り、成果物は選択したワークスペースに保存されます。** Kruvoのサービスへ送られるのは、更新確認のための標準的なHTTPデータ、有料プランの検証に使うライセンスID・プラン・アプリのバージョン、そしてテレメトリーを有効にした場合のみの内容を含まない製品イベントの3つです。',
          'ホスト型モデルや連携サービスには、リクエストに必要なデータが送られ、ブラウザー作業中のスクリーンショットはモデル提供元に送られます。任意のSlack・GitHubリレーを使うと、Kruvo Cloudがメッセージ内容を転送中に処理し、アカウント・プラン・請求の状態と仲介されたOAuthトークンを保存します。ローカルの会話・ファイル・モデルのキーは自動ではアップロードされません。'
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは提供元の説明です。PromptQuorumはアプリもそのネットワーク通信も監査していません。'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**自分のAPIキーまたはOllamaを持つWindows・Macユーザー**で、ファイルや連携ツールで作業するエージェントが欲しい人。',
          '**操作の前に承認したい人**で、ローカルの監査記録も欲しい人。',
          '**無料でローカルから始めたい人**で、Kruvoアカウントを作りたくない人。'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の品質と速度。** PromptQuorumはKruvoを実行しておらず、情報源にもベンチマークはありません。',
          '**コードとライセンス。** ソースは非公開で、ライセンス文も見つからなかったため、コードを確認できません。',
          '**プライバシーの記述。** ローカル保存とテレメトリーに関する説明は、ネットワーク通信と照合していません。',
          '**最新ビルド。** 0.3.13のノートには、複数のコンピューターにまたがるリモート会話とTestFlightのiPhone／iPadアプリが記載されていますが、どちらも未確認です。'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: [
          'アプリ',
          '対応プラットフォーム',
          '価格／ライセンス',
          '主な違い'
        ],
        rows: [
          {
            'アプリ': '[Coil](/ja/power-local-llm/coil-review)',
            '対応プラットフォーム': 'Mac',
            '価格／ライセンス': '¥2,500／クローズドソース',
            '主な違い': '端末上のルーターとワーカーのモデルに、承認制のフォルダツールを組み合わせ'
          },
          {
            'アプリ': '[Open Interpreter](/ja/power-local-llm/open-interpreter-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux',
            '価格／ライセンス': '無料／Apache 2.0',
            '主な違い': 'ローカルLLMにコンピューターを操作させコードを実行させるオープンソースのエージェント'
          },
          {
            'アプリ': '[Agent Zero](/ja/power-local-llm/agent-zero-review)',
            '対応プラットフォーム': 'macOS、Windows、Linux',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'コーディング能力を備えた最小構成のオープンソース自律エージェント'
          }
        ],
        note: '競合の情報は頻繁に変わります。各アプリの最新の価格・ライセンス・対応プラットフォームは、それぞれの掲載ページで確認してください。'
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Kruvoはオフラインで動きますか？',
            a: '初期状態では動きません。モデルが必要で、APIキーを使うとリクエストはその提供元に送られます。Ollamaでローカルモデルを動かせば、モデルへのリクエストはお使いのコンピューター内に留まりますが、コネクターと更新確認は引き続きネットワークを使います。'
          },
          {
            q: 'Kruvoは確認なしに操作できますか？',
            a: 'ハードフロア操作は常に人間の承認が必要で、機微と分類されたコンピューター操作は、どのモードでもデスクトップアプリでの承認が必要です。それ以外のツールは、設定した権限ポリシーと常設ルールに従います。'
          },
          {
            q: 'バージョン番号が食い違うのはなぜですか？',
            a: 'ダウンロードページは0.3.6を掲載し、GitHubには10月11日の0.3.13もあり、サイトのガイドはコンピューター操作に0.3.4のアプリを挙げています。インストールするビルドのリリースノートを確認してください。'
          },
          {
            q: 'iPhoneアプリはありますか？',
            a: '0.3.13のノートにはTestFlightのiPhone／iPadアプリが記載されていますが、サイトはKruvoをWindows・macOS向けデスクトップアプリとして説明しています。PromptQuorumはTestFlightアプリを検証していません。'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Kruvoは、無料で始められるデスクトップエージェントです。提供元によると、会話・キー・監査記録をコンピューター内に置き、選んだフォルダで作業し、機微な操作の前に確認します。モデルは自分のAPIキーかOllamaです。2026年10月11日に更新され、チェックサムと分かりやすいプライバシーポリシーを公開しています。一方で、クローズドソースで、インストーラーは署名なし、リリース履歴は2026年9月18日に始まったばかりで、ダウンロードページはGitHubの最新ビルドに追いついておらず、動作とプライバシーの主張はすべて提供元によるものです。エージェントに承認ルールを求めるWindows・Macユーザー向けで、オープンなコードを望む方は[Open Interpreter](/ja/power-local-llm/open-interpreter-review)や[Agent Zero](/ja/power-local-llm/agent-zero-review)と比較してください。'
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[Kruvo公式サイト](https://kruvo.ai) — 製品・ダウンロード・料金・ドキュメント・セキュリティの各ページ。2026年10月24日確認。',
          '[Kruvoの変更履歴](https://kruvo.ai/changelog)と[プライバシーポリシー](https://kruvo.ai/privacy) — 0.3.6までのリリースノート、データの扱い、クラウドリレー。',
          '[GitHub上のKruvoリリース](https://github.com/pvaz/kruvo-releases/releases) — 0.3.0から0.3.13までの公開日、ファイル、ノート、およびソースが非公開である旨の記載。'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Coilレビュー](/ja/power-local-llm/coil-review) — 端末上のモデルとルーティングレシートを備えたMac向けエージェントハーネス。',
          '[Open Interpreterレビュー](/ja/power-local-llm/open-interpreter-review) — お使いのコンピューターでコードを実行するオープンソースのエージェント。',
          '[Agent Zeroレビュー](/ja/power-local-llm/agent-zero-review) — コーディング能力を備えた最小構成の自律エージェント。',
          '[コード・開発向けローカルLLM比較](/ja/power-local-llm/local-llm-code-development-compared) — コーディング・エージェント系ツールのカテゴリ比較。'
        ]
      }
    }
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/kruvo-review-hero-pt.webp',
    title: 'Análise do Kruvo: um colega de IA para desktop que pergunta antes de agir',
    seoTitle: 'Análise do Kruvo: colega de IA para Windows e Mac',
    intro: 'O Kruvo é um aplicativo de desktop para Windows e macOS da BexoCORP que, segundo suas próprias páginas, trabalha em uma pasta que você escolhe com a sua chave de um provedor de modelos ou com o Ollama, conecta-se a ferramentas como GitHub, Slack e Gmail e pede aprovação antes de ações sensíveis. Esta análise lê o site, as notas de versão e o repositório de versões no GitHub do fabricante, explica por que os números de versão diferem e lista o que as fontes deixam sem confirmação. A PromptQuorum não instalou nem testou o aplicativo.',
    metaDescription: 'Análise do Kruvo: colega de IA para Windows e macOS que trabalha na sua pasta com sua chave de API ou Ollama e pergunta antes de agir. Preço, requisitos, pontos em aberto.',
    twitterDescription: 'Análise do Kruvo: colega de IA local-first para desktop (Windows e macOS) com regras de aprovação. Requisitos, planos, versões e o que não foi verificado.',
    audience: 'Usuários de Windows e Mac que querem saber o que o Kruvo exige, quanto custa, para onde vão seus dados, como funcionam as regras de aprovação e quais afirmações as fontes deixam sem confirmação.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Kruvo',
    targetKeywords: [
      'análise kruvo',
      'colega de ia local-first',
      'agente de ia desktop windows macos',
      'agente de ia com regras de aprovação',
      'kruvo ollama chave de api',
      'bexocorp kruvo'
    ],
    current_hardware_mentioned: [
      'Windows PC or Mac (macOS 13.5+)'
    ],
    leadAnswerBlock: '**O Kruvo (versão 0.3.6 na página de download oficial; última atualização do fabricante em 11 de outubro de 2026) é um aplicativo de desktop para Windows e macOS, gratuito para começar e de código fechado, que, segundo o fabricante, trabalha em uma pasta que você escolhe com a sua chave de provedor ou o Ollama e pergunta antes de ações sensíveis.** Todas as afirmações desta análise sobre comportamento e privacidade vêm das páginas e das notas de versão do fabricante; a PromptQuorum não o instalou nem o testou.',
    quickAnswerTop: {
      pt: {
        question: 'O que preciso para usar o Kruvo?',
        answer: 'Um PC de 64 bits com Windows 10 22H2 ou Windows 11, ou um Mac com macOS 13.5 ou mais recente para todas as funções, além de um modelo: uma chave de API de um provedor compatível ou o Ollama em hardware adequado. Os custos do modelo são à parte.',
        bullets: [
          'Os cartões de aprovação mostram a ferramenta, o destino e o motivo; ações de “hard floor” sempre exigem uma decisão humana.',
          'O uso do computador (Chrome ou Edge supervisionado, apps do Windows autorizados) vem desativado e pede consentimento por site ou app.',
          'O modo Work roda em uma pasta com ferramentas; o modo Chat responde sem elas.',
          'Automações locais agendadas e pedidos por Telegram ou Slack só funcionam enquanto o Kruvo estiver em execução.'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer'
      },
      {
        label: 'O que é o Kruvo?',
        anchor: 'what-is-kruvo'
      },
      {
        label: 'Onde obter',
        anchor: 'get-it'
      },
      {
        label: 'O que você precisa',
        anchor: 'requirements'
      },
      {
        label: 'Preço',
        anchor: 'pricing'
      },
      {
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features'
      },
      {
        label: 'Privacidade e fluxo de dados',
        anchor: 'privacy'
      },
      {
        label: 'Para quem serve',
        anchor: 'who-should-use'
      },
      {
        label: 'O que não conseguimos verificar',
        anchor: 'who-should-not-use'
      },
      {
        label: 'Concorrentes e alternativas',
        anchor: 'vs-alternatives'
      },
      {
        label: 'Perguntas frequentes',
        anchor: 'faq'
      },
      {
        label: 'Veredicto',
        anchor: 'verdict'
      },
      {
        label: 'Fontes',
        anchor: 'sources'
      },
      {
        label: 'Leituras relacionadas',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Kruvo é um app de desktop para Windows e macOS em que um modelo que você escolhe trabalha em uma pasta e em ferramentas conectadas, com regras de aprovação e registro de auditoria local.'
          },
          {
            type: 'plain-terms',
            text: 'Você dá ao Kruvo uma tarefa e uma pasta, ele faz o trabalho com sua chave de API ou um modelo do Ollama e para para perguntar antes de qualquer coisa sensível.'
          }
        ],
        items: [
          'Manutenção: o GitHub mostra versões da 0.3.0 em 18 de setembro até a 0.3.13 em 11 de outubro de 2026; o app é atualizado ativamente e nenhum aviso de projeto abandonado se aplica.',
          'Licença: código fechado; o repositório de versões diz que o código-fonte do produto fica em um repositório privado.',
          'Versões: a página de download lista a 0.3.6 (7 de outubro); o GitHub também tem a 0.3.13 (11 de outubro), que essa página ainda não lista.',
          'Assinatura: os instaladores do Windows não têm assinatura de código e os builds do Mac não são notarizados; somas SHA-256 são publicadas.',
          'Base: site, notas de versão e GitHub do fabricante, lidos em 24 de outubro de 2026, sem teste prático.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'A PromptQuorum não instalou, testou nem avaliou o Kruvo. As afirmações abaixo sobre comportamento, segurança e privacidade são do fabricante.'
          }
        ]
      },
      overview: {
        id: 'what-is-kruvo',
        title: 'O que é o Kruvo?',
        content: [
          '**O Kruvo é um “colega de IA” de desktop: um app que usa o modelo que você escolhe para trabalhar com uma pasta selecionada e ferramentas conectadas e mostra as ações propostas para a sua aprovação.** O site o descreve como trabalho de IA local-first sob o seu controle e diz que faz parte da BexoCORP. O registro de alterações lista a versão 0.3.0 (18 de setembro de 2026) como aquela em que o produto passou a se chamar Kruvo.',
          'O modo Work roda em uma pasta com arquivos, terminal e conectores; o modo Chat responde sem ferramentas. O app também oferece projetos com pastas próprias, uma lista de tarefas pessoal, memória local, colegas locais integrados (personas especializadas) e uma interface em oito idiomas. O trabalho local não exige conta no Kruvo.'
        ]
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O Kruvo é baixado direto do próprio site para Windows e macOS; os mesmos arquivos estão no GitHub Releases.**'
        ],
        columns: [
          'Canal',
          'Link'
        ],
        rows: [
          {
            Canal: 'Windows 10 22H2 / 11 (.exe, .msi)',
            Link: '[Página de download](https://kruvo.ai/download)'
          },
          {
            Canal: 'macOS 13.5+ (Apple Silicon, Intel)',
            Link: '[Página de download](https://kruvo.ai/download)'
          },
          {
            Canal: 'Site',
            Link: '[kruvo.ai](https://kruvo.ai)'
          },
          {
            Canal: 'Política de privacidade',
            Link: '[kruvo.ai/privacy](https://kruvo.ai/privacy)'
          },
          {
            Canal: 'Arquivos e notas de versão',
            Link: '[GitHub Releases](https://github.com/pvaz/kruvo-releases/releases)'
          }
        ],
        note: 'Versão analisada: 0.3.6, a da página de download oficial e do release “Latest” no GitHub, publicada em 7 de outubro de 2026. O GitHub também tem a 0.3.13, mais recente (11 de outubro de 2026), última atualização do fabricante na data da verificação; o “0.3.4” do site se refere à versão do app usada em suas capturas de tela e em seu guia de uso do computador. Os instaladores do Windows não têm assinatura de código e os builds do Mac não são notarizados, então o Windows SmartScreen e o Gatekeeper do macOS vão avisar; o fabricante publica somas SHA-256 e orienta verificar o arquivo antes e nunca desativar a proteção do sistema.'
      },
      requirements: {
        id: 'requirements',
        title: 'O que você precisa',
        content: [
          '**O Kruvo exige Windows 10 22H2 ou Windows 11 (64 bits) ou macOS 13.5 ou mais recente, e um modelo: uma chave de API de provedor compatível ou o Ollama.**'
        ],
        columns: [
          'Item',
          'Segundo as fontes'
        ],
        rows: [
          {
            Item: 'Sistema operacional',
            'Segundo as fontes': 'Windows 10 22H2 / 11 ou macOS 13.5+ (macOS mais antigo não validado)'
          },
          {
            Item: 'Modelo',
            'Segundo as fontes': 'Chave de API (OpenAI, Anthropic, Gemini, Mistral, DeepSeek, Kimi, Qwen, xAI) ou Ollama'
          },
          {
            Item: 'Opcional',
            'Segundo as fontes': 'Chrome ou Edge para trabalho no navegador; credenciais do Telegram ou do Slack'
          },
          {
            Item: 'Tamanho do download',
            'Segundo as fontes': '.exe 96.1 MB; .dmg 150.7 MB (Apple Silicon) ou 154.6 MB (Intel)'
          }
        ],
        note: 'As fontes não dão números de RAM nem de disco; um modelo do Ollama precisa de “hardware adequado” ao seu próprio tamanho. O uso do modelo é cobrado pelo provedor e é separado de qualquer plano do Kruvo.'
      },
      pricing: {
        id: 'pricing',
        title: 'Preço',
        content: [
          '**O plano Free custa €0 e inclui o app local completo; Pro, Team e Enterprise são níveis de serviço combinados por contato.**'
        ],
        columns: [
          'Plano',
          'Preço'
        ],
        rows: [
          {
            Plano: 'Free',
            'Preço': '€0, sem conta no Kruvo'
          },
          {
            Plano: 'Pro',
            'Preço': '€15 por mês ou €144 por ano'
          },
          {
            Plano: 'Team',
            'Preço': '€29 por usuário por mês, mínimo de 3'
          },
          {
            Plano: 'Enterprise',
            'Preço': 'Sob medida, contrato anual'
          }
        ],
        note: 'Lido na página de preços em 24 de outubro de 2026, com preços em euros conforme o site; os valores em reais não foram verificados. A página diz que o app local tem os mesmos recursos nos quatro planos, que os níveis pagos cobrem conexões gerenciadas e licenças de equipe e que não há compra por autoatendimento nem teste prometido. O Kruvo não inclui créditos de provedores.'
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem das páginas ou das notas de versão do fabricante.**'
        ],
        items: [
          '**Regras de aprovação e auditoria.** Uma política de permissões, regras permanentes, “hard floors” que nenhum modo pode reduzir e um registro de auditoria local com ocultação de segredos.',
          '**Modelos.** OpenAI, Anthropic, Gemini, Mistral, DeepSeek, Kimi, Qwen, xAI ou Ollama.',
          '**Conectores.** GitHub, Slack, Gmail, Outlook, Calendário, Notion, Jira, Linear, HubSpot e MCP, configurados manualmente; PaxHelm e Talqivo se conectam por MCP.',
          '**Uso do computador.** Trabalho supervisionado no Chrome ou no Edge, no perfil próprio do Kruvo ou por uma extensão, e em apps do Windows autorizados, com os controles Pausar, Assumir e Parar.',
          '**Pedidos remotos e automações.** Pedidos e aprovações elegíveis por Telegram ou Slack, além de automações locais agendadas que não podem se aprovar sozinhas nem usar ferramentas do navegador.',
          '**Organização do trabalho.** Projetos, lista de tarefas, memória local e colegas locais integrados.',
          '**Atualizações.** Pacotes de atualização assinados, verificados pelo atualizador do desktop.'
        ]
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**A política de privacidade (atualizada pela última vez em 3 de outubro de 2026) diz que conversas, registros de auditoria, tokens de conectores e chaves de modelos ficam no seu computador e que as entregas ficam no espaço de trabalho escolhido.** Ela lista três coisas enviadas aos serviços do Kruvo: dados HTTP padrão para verificar atualizações, ID da licença, plano e versão do app para validar planos pagos, e eventos de produto sem conteúdo apenas quando a telemetria está ativada.',
          'Modelos hospedados e serviços conectados recebem os dados necessários para suas solicitações, e as capturas de tela do trabalho no navegador vão para o seu provedor de modelos. Com os relés opcionais de Slack e GitHub, o Kruvo Cloud processa o conteúdo das mensagens em trânsito e guarda o estado da conta, do plano e da cobrança e tokens OAuth intermediados. Conversas, arquivos e chaves de modelos locais não são enviados automaticamente.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'São afirmações do fabricante. A PromptQuorum não auditou o app nem seu tráfego de rede.'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Usuários de Windows e Mac com chave de API própria ou Ollama** que querem um agente que trabalhe em arquivos e ferramentas conectadas.',
          '**Pessoas que querem aprovar antes das ações,** com registro de auditoria local.',
          '**Quem quer começar de graça no local,** sem conta no Kruvo.'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade e velocidade na prática.** A PromptQuorum não executou o Kruvo e as fontes não trazem benchmarks.',
          '**Código e licença.** O código-fonte é privado e nenhum texto de licença foi encontrado, então o código não pode ser inspecionado.',
          '**Afirmações de privacidade.** As declarações sobre armazenamento local e telemetria não foram comparadas com o tráfego de rede.',
          '**Build mais recente.** As notas da 0.3.13 mencionam conversas remotas entre vários computadores e um app para iPhone/iPad no TestFlight; nenhum dos dois foi verificado.'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: [
          'App',
          'Plataformas',
          'Preço / licença',
          'Diferença principal'
        ],
        rows: [
          {
            App: '[Coil](/pt/power-local-llm/coil-review)',
            Plataformas: 'Mac',
            'Preço / licença': 'R$ 99,90 / Código fechado',
            'Diferença principal': 'Modelos roteador e worker no dispositivo com ferramentas de pasta que exigem aprovação'
          },
          {
            App: '[Open Interpreter](/pt/power-local-llm/open-interpreter-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / Apache 2.0',
            'Diferença principal': 'Agente de código aberto que deixa um LLM local controlar o computador e executar código'
          },
          {
            App: '[Agent Zero](/pt/power-local-llm/agent-zero-review)',
            Plataformas: 'macOS, Windows, Linux',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Agente autônomo de código aberto minimalista com capacidade de programar'
          }
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas de cada app na própria página dele.'
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Kruvo funciona offline?',
            a: 'Não por padrão: ele precisa de um modelo, e uma chave de API envia as solicitações ao provedor. Com o Ollama rodando um modelo local, as solicitações ao modelo ficam no seu computador, enquanto conectores e verificações de atualização continuam usando a rede.'
          },
          {
            q: 'O Kruvo pode agir sem me perguntar?',
            a: 'Ações de “hard floor” sempre exigem aprovação humana, e ações de computador classificadas como sensíveis precisam de aprovação no app de desktop em qualquer modo. As demais ferramentas seguem a política de permissões e as regras permanentes que você definir.'
          },
          {
            q: 'Por que os números de versão diferem?',
            a: 'A página de download lista a 0.3.6, o GitHub também tem a 0.3.13 de 11 de outubro e os guias do site citam um app 0.3.4 para o uso do computador. Confira as notas de versão do build que você instalar.'
          },
          {
            q: 'Existe um app para iPhone?',
            a: 'As notas da 0.3.13 mencionam um app para iPhone/iPad no TestFlight, enquanto o site descreve o Kruvo como um app de desktop para Windows e macOS. A PromptQuorum não testou o app do TestFlight.'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'O Kruvo é um agente de desktop gratuito para começar que, segundo o fabricante, mantém conversas, chaves e registros de auditoria no seu computador, trabalha em uma pasta que você escolhe e pergunta antes de ações sensíveis, com sua própria chave de API ou o Ollama. Foi atualizado em 11 de outubro de 2026 e publica somas de verificação e uma política de privacidade clara. Em contrapartida, tem código fechado, instaladores sem assinatura, histórico de versões que começa em 18 de setembro de 2026, página de download atrás do build mais recente do GitHub, e todas as afirmações de comportamento e privacidade vêm do fabricante. Serve para usuários de Windows e Mac que querem regras de aprovação em torno de um agente; quem prefere código aberto pode comparar o [Open Interpreter](/pt/power-local-llm/open-interpreter-review) ou o [Agent Zero](/pt/power-local-llm/agent-zero-review).'
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Kruvo](https://kruvo.ai) — páginas de produto, download, preços, documentação e segurança, consultadas em 24 de outubro de 2026.',
          '[Registro de alterações do Kruvo](https://kruvo.ai/changelog) e [política de privacidade](https://kruvo.ai/privacy) — notas de versão até a 0.3.6, tratamento de dados e relés na nuvem.',
          '[Versões do Kruvo no GitHub](https://github.com/pvaz/kruvo-releases/releases) — datas de publicação, arquivos e notas das versões 0.3.0 a 0.3.13, e a indicação de que o código-fonte é privado.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Coil](/pt/power-local-llm/coil-review) — um harness de agente para Mac com modelos no dispositivo e recibos de roteamento.',
          '[Análise do Open Interpreter](/pt/power-local-llm/open-interpreter-review) — um agente de código aberto que executa código no seu computador.',
          '[Análise do Agent Zero](/pt/power-local-llm/agent-zero-review) — um agente autônomo minimalista com capacidade de programar.',
          '[LLMs locais para código e desenvolvimento: comparativo](/pt/power-local-llm/local-llm-code-development-compared) — o comparativo de categoria para ferramentas de programação e agentes.'
        ]
      }
    }
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/kruvo-review-hero-ar.webp',
    title: 'مراجعة Kruvo: زميل ذكاء اصطناعي مكتبي يسأل قبل أن يتصرف',
    seoTitle: 'مراجعة Kruvo: زميل ذكاء اصطناعي لـ Windows وMac',
    intro: 'Kruvo تطبيق مكتبي لنظامي Windows وmacOS من BexoCORP، يعمل بحسب صفحاته الرسمية داخل مجلد تختاره باستخدام مفتاح API الخاص بك من مزوّد نماذج أو عبر Ollama، ويتصل بأدوات مثل GitHub وSlack وGmail، ويطلب الموافقة قبل الإجراءات الحساسة. تقرأ هذه المراجعة موقع الجهة المطوّرة وملاحظات الإصدار ومستودع الإصدارات على GitHub، وتشرح سبب اختلاف أرقام الإصدارات، وتسرد ما تتركه المصادر دون تأكيد. لم تثبّت PromptQuorum التطبيق ولم تختبره.',
    metaDescription: 'مراجعة Kruvo: زميل ذكاء اصطناعي لنظامي Windows وmacOS يعمل في مجلدك بمفتاح API الخاص بك أو Ollama ويسأل قبل التنفيذ. السعر والمتطلبات والنقاط المفتوحة.',
    twitterDescription: 'مراجعة Kruvo: زميل ذكاء اصطناعي مكتبي محلي أولاً لنظامي Windows وmacOS مع قواعد موافقة. المتطلبات والباقات واختلاف الإصدارات وما لم يتم التحقق منه.',
    audience: 'مستخدمو Windows وMac الذين يريدون معرفة ما يتطلبه Kruvo وكم يكلّف وإلى أين تذهب بياناتهم وكيف تعمل قواعد الموافقة وأي ادعاءات تتركها المصادر دون تأكيد.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Kruvo',
    targetKeywords: [
      'مراجعة kruvo',
      'زميل ذكاء اصطناعي محلي أولاً',
      'وكيل ذكاء اصطناعي مكتبي windows macos',
      'وكيل ذكاء اصطناعي بقواعد موافقة',
      'kruvo ollama مفتاح api',
      'bexocorp kruvo'
    ],
    current_hardware_mentioned: [
      'Windows PC or Mac (macOS 13.5+)'
    ],
    leadAnswerBlock: '**Kruvo (الإصدار 0.3.6 في صفحة التنزيل الرسمية؛ وآخر تحديث من الجهة المطوّرة في 11 أكتوبر 2026) تطبيق مكتبي لنظامي Windows وmacOS، مجاني للبدء ومغلق المصدر، يعمل بحسب الجهة المطوّرة داخل مجلد تختاره باستخدام مفتاح مزوّد خاص بك أو Ollama، ويسأل قبل الإجراءات الحساسة.** كل ما يرد في هذه المراجعة عن السلوك والخصوصية مأخوذ من صفحات الجهة المطوّرة وملاحظات الإصدار؛ ولم تثبّته PromptQuorum ولم تختبره.',
    quickAnswerTop: {
      ar: {
        question: 'ماذا أحتاج لتشغيل Kruvo؟',
        answer: 'جهاز Windows 10 22H2 أو Windows 11 بنظام 64 بت، أو جهاز Mac بنظام macOS 13.5 أو أحدث للحصول على كل الوظائف، إضافةً إلى نموذج: مفتاح API من مزوّد مدعوم أو Ollama على عتاد مناسب. تكاليف النموذج منفصلة.',
        bullets: [
          'تعرض بطاقات الموافقة الأداة والهدف والسبب؛ وإجراءات «hard floor» تتطلب دائماً قراراً بشرياً.',
          'استخدام الحاسوب (Chrome أو Edge تحت الإشراف، وتطبيقات Windows المصرّح بها) متوقف افتراضياً ويتطلب موافقة لكل موقع أو تطبيق.',
          'يعمل وضع Work داخل مجلد مع الأدوات، بينما يجيب وضع Chat دونها.',
          'الأتمتة المحلية المجدولة وطلبات Telegram أو Slack تعمل فقط أثناء تشغيل Kruvo.'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: 'إجابة سريعة',
        anchor: 'quick-answer'
      },
      {
        label: 'ما هو Kruvo؟',
        anchor: 'what-is-kruvo'
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it'
      },
      {
        label: 'ما تحتاجه',
        anchor: 'requirements'
      },
      {
        label: 'السعر',
        anchor: 'pricing'
      },
      {
        label: 'الميزات التي أكدتها المصادر',
        anchor: 'key-features'
      },
      {
        label: 'الخصوصية وتدفق البيانات',
        anchor: 'privacy'
      },
      {
        label: 'لمن يناسب',
        anchor: 'who-should-use'
      },
      {
        label: 'ما لم نتمكن من التحقق منه',
        anchor: 'who-should-not-use'
      },
      {
        label: 'المنافسون والبدائل',
        anchor: 'vs-alternatives'
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: 'faq'
      },
      {
        label: 'الخلاصة',
        anchor: 'verdict'
      },
      {
        label: 'المصادر',
        anchor: 'sources'
      },
      {
        label: 'قراءات ذات صلة',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Kruvo تطبيق مكتبي لنظامي Windows وmacOS يعمل فيه نموذج تختاره داخل مجلد وفي أدوات متصلة، مع قواعد موافقة وسجل تدقيق محلي.'
          },
          {
            type: 'plain-terms',
            text: 'تمنح Kruvo مهمة ومجلداً، فينجز العمل بمفتاح API الخاص بك أو بنموذج Ollama، ويتوقف ليسألك قبل أي أمر حساس.'
          }
        ],
        items: [
          'الصيانة: يعرض GitHub إصدارات من 0.3.0 في 18 سبتمبر إلى 0.3.13 في 11 أكتوبر 2026، فالتطبيق يُحدَّث بنشاط ولا ينطبق تحذير المشروع المتوقف.',
          'الترخيص: مغلق المصدر؛ ويذكر مستودع الإصدارات أن شفرة المنتج المصدرية محفوظة في مستودع خاص.',
          'الإصدارات: تعرض صفحة التنزيل 0.3.6 (7 أكتوبر)، ويضم GitHub أيضاً 0.3.13 (11 أكتوبر) الذي لا تذكره تلك الصفحة بعد.',
          'التوقيع: مثبّتات Windows غير موقّعة برمجياً وإصدارات Mac غير موثّقة (notarised)، وتُنشر قيم SHA-256 للتحقق.',
          'الأساس: موقع الجهة المطوّرة وملاحظات الإصدار وGitHub، قُرئت في 24 أكتوبر 2026 دون اختبار عملي.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'لم تثبّت PromptQuorum تطبيق Kruvo ولم تختبره ولم تقِس أداءه. ما يلي عن السلوك والأمان والخصوصية هو من أقوال الجهة المطوّرة.'
          }
        ]
      },
      overview: {
        id: 'what-is-kruvo',
        title: 'ما هو Kruvo؟',
        content: [
          '**Kruvo «زميل ذكاء اصطناعي» مكتبي: تطبيق يستخدم النموذج الذي تختاره للعمل مع مجلد محدد وأدوات متصلة، ويعرض الإجراءات المقترحة لموافقتك.** يصفه الموقع بأنه عمل ذكاء اصطناعي محلي أولاً يخضع لسيطرتك، ويذكر أنه جزء من BexoCORP. ويورد سجل التغييرات الإصدار 0.3.0 (18 سبتمبر 2026) بوصفه الإصدار الذي أصبح فيه المنتج Kruvo.',
          'يعمل وضع Work داخل مجلد مع الملفات والطرفية والموصّلات، بينما يجيب وضع Chat دون أدوات. ويقدّم التطبيق أيضاً مشاريع بمجلداتها الخاصة وقائمة مهام شخصية وذاكرة محلية وزملاء محليين مدمجين (شخصيات متخصصة) وواجهة بثماني لغات. ولا يتطلب العمل المحلي حساباً على Kruvo.'
        ]
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُنزَّل Kruvo مباشرة من موقعه الرسمي لنظامي Windows وmacOS، والملفات نفسها متاحة على GitHub Releases.**'
        ],
        columns: [
          'القناة',
          'الرابط'
        ],
        rows: [
          {
            'القناة': 'Windows 10 22H2 / 11 (‏.exe و.msi)',
            'الرابط': '[صفحة التنزيل](https://kruvo.ai/download)'
          },
          {
            'القناة': 'macOS 13.5 وما فوق (Apple Silicon وIntel)',
            'الرابط': '[صفحة التنزيل](https://kruvo.ai/download)'
          },
          {
            'القناة': 'الموقع',
            'الرابط': '[kruvo.ai](https://kruvo.ai)'
          },
          {
            'القناة': 'سياسة الخصوصية',
            'الرابط': '[kruvo.ai/privacy](https://kruvo.ai/privacy)'
          },
          {
            'القناة': 'ملفات الإصدارات وملاحظاتها',
            'الرابط': '[GitHub Releases](https://github.com/pvaz/kruvo-releases/releases)'
          }
        ],
        note: 'الإصدار المراجَع: 0.3.6، وهو إصدار صفحة التنزيل الرسمية وإصدار «Latest» على GitHub، ونُشر في 7 أكتوبر 2026. ويضم GitHub أيضاً الإصدار الأحدث 0.3.13 (11 أكتوبر 2026)، وهو آخر تحديث من الجهة المطوّرة وقت التحقق؛ أما «0.3.4» في الموقع فيشير إلى إصدار التطبيق الذي أُعدّت به لقطات الشاشة ودليل استخدام الحاسوب. مثبّتات Windows غير موقّعة برمجياً وإصدارات Mac غير موثّقة، لذا سيحذّر Windows SmartScreen وGatekeeper في macOS؛ وتنشر الجهة المطوّرة قيم SHA-256 وتنصح بالتحقق من الملف أولاً وعدم تعطيل حماية النظام أبداً.'
      },
      requirements: {
        id: 'requirements',
        title: 'ما تحتاجه',
        content: [
          '**يتطلب Kruvo نظام Windows 10 22H2 أو Windows 11 (64 بت) أو macOS 13.5 أو أحدث، ونموذجاً: مفتاح API من مزوّد مدعوم أو Ollama.**'
        ],
        columns: [
          'البند',
          'بحسب المصادر'
        ],
        rows: [
          {
            'البند': 'نظام التشغيل',
            'بحسب المصادر': 'Windows 10 22H2 / 11 أو macOS 13.5+ (إصدارات macOS الأقدم لم يتم التحقق منها)'
          },
          {
            'البند': 'النموذج',
            'بحسب المصادر': 'مفتاح API (OpenAI وAnthropic وGemini وMistral وDeepSeek وKimi وQwen وxAI) أو Ollama'
          },
          {
            'البند': 'اختياري',
            'بحسب المصادر': 'Chrome أو Edge للعمل في المتصفح؛ وبيانات اعتماد Telegram أو Slack'
          },
          {
            'البند': 'حجم التنزيل',
            'بحسب المصادر': '.exe بحجم 96.1 MB؛ و.dmg بحجم 150.7 MB (Apple Silicon) أو 154.6 MB (Intel)'
          }
        ],
        note: 'لا تذكر المصادر أرقاماً للذاكرة أو القرص؛ ويحتاج نموذج Ollama إلى «عتاد مناسب» لحجمه. ويحاسب المزوّد على استخدام النموذج وهو منفصل عن أي باقة من Kruvo.'
      },
      pricing: {
        id: 'pricing',
        title: 'السعر',
        content: [
          '**باقة Free بسعر €0 وتشمل التطبيق المحلي كاملاً؛ أما Pro وTeam وEnterprise فهي مستويات خدمة يُتفق عليها بالتواصل.**'
        ],
        columns: [
          'الباقة',
          'السعر'
        ],
        rows: [
          {
            'الباقة': 'Free',
            'السعر': '€0، دون حساب على Kruvo'
          },
          {
            'الباقة': 'Pro',
            'السعر': '€15 شهرياً أو €144 سنوياً'
          },
          {
            'الباقة': 'Team',
            'السعر': '€29 لكل مستخدم شهرياً، بحد أدنى 3'
          },
          {
            'الباقة': 'Enterprise',
            'السعر': 'مخصص، اتفاق سنوي'
          }
        ],
        note: 'قُرئت من صفحة الأسعار في 24 أكتوبر 2026، والأسعار باليورو كما يعرضها الموقع. تقول الصفحة إن للتطبيق المحلي القدرات نفسها في الباقات الأربع، وإن المستويات المدفوعة تغطي الاتصالات المُدارة وتراخيص الفرق، وإنه لا يوجد شراء ذاتي ولا تجربة موعودة. ولا يتضمن Kruvo أرصدة من مزوّدي النماذج.'
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من صفحات الجهة المطوّرة أو ملاحظات الإصدار.**'
        ],
        items: [
          '**قواعد الموافقة والتدقيق.** سياسة صلاحيات وقواعد دائمة و«hard floors» لا يستطيع أي وضع خفضها وسجل تدقيق محلي مع إخفاء الأسرار.',
          '**النماذج.** OpenAI أو Anthropic أو Gemini أو Mistral أو DeepSeek أو Kimi أو Qwen أو xAI أو Ollama.',
          '**الموصّلات.** GitHub وSlack وGmail وOutlook والتقويم وNotion وJira وLinear وHubSpot وMCP، وتُضبط يدوياً؛ ويتصل PaxHelm وTalqivo عبر MCP.',
          '**استخدام الحاسوب.** عمل تحت الإشراف في Chrome أو Edge، ضمن ملف Kruvo الخاص أو عبر إضافة، وفي تطبيقات Windows المصرّح بها، مع أزرار الإيقاف المؤقت والتولّي والإيقاف.',
          '**الطلبات عن بُعد والأتمتة.** طلبات وموافقات مؤهلة عبر Telegram أو Slack، إضافة إلى أتمتة محلية مجدولة لا تستطيع الموافقة على نفسها ولا استخدام أدوات المتصفح.',
          '**تنظيم العمل.** مشاريع وقائمة مهام وذاكرة محلية وزملاء محليون مدمجون.',
          '**التحديثات.** حزم تحديث موقّعة يتحقق منها محدِّث سطح المكتب.'
        ]
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**تقول سياسة الخصوصية (آخر تحديث في 3 أكتوبر 2026) إن المحادثات وسجلات التدقيق ورموز الموصّلات ومفاتيح النماذج تبقى على حاسوبك، وإن المخرجات تبقى في مساحة العمل التي اخترتها.** وتذكر ثلاثة أشياء تُرسل إلى خدمات Kruvo: بيانات HTTP القياسية لفحص التحديثات، ومعرّف الترخيص والباقة وإصدار التطبيق للتحقق من الباقات المدفوعة، وأحداث منتج بلا محتوى فقط عند تفعيل القياس عن بُعد.',
          'تتلقى النماذج المستضافة والخدمات المتصلة البيانات اللازمة لطلباتها، وتذهب لقطات الشاشة المأخوذة أثناء العمل في المتصفح إلى مزوّد النموذج الذي تختاره. وعند استخدام مرحّلَي Slack وGitHub الاختياريين تعالج Kruvo Cloud محتوى الرسائل أثناء النقل وتخزّن حالة الحساب والباقة والفوترة ورموز OAuth الوسيطة. أما المحادثات والملفات ومفاتيح النماذج المحلية فلا تُرفع تلقائياً.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه أقوال الجهة المطوّرة. لم تدقّق PromptQuorum التطبيق ولا حركة الشبكة الخاصة به.'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Windows وMac الذين لديهم مفتاح API خاص بهم أو Ollama** ويريدون وكيلاً يعمل في الملفات والأدوات المتصلة.',
          '**من يريدون الموافقة قبل الإجراءات** مع سجل تدقيق محلي.',
          '**من يريدون بدءاً مجانياً محلياً** دون حساب على Kruvo.'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة والسرعة عملياً.** لم تشغّل PromptQuorum تطبيق Kruvo، ولا تقدّم المصادر اختبارات أداء.',
          '**الشفرة والترخيص.** الشفرة المصدرية خاصة ولم نعثر على نص ترخيص، فلا يمكن فحص الشفرة.',
          '**ادعاءات الخصوصية.** لم تُقارن أقوال التخزين المحلي والقياس عن بُعد بحركة الشبكة.',
          '**أحدث إصدار.** تذكر ملاحظات 0.3.13 محادثات عن بُعد بين عدة حواسيب وتطبيق iPhone/iPad على TestFlight؛ ولم يُتحقق من أي منهما.'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: [
          'التطبيق',
          'المنصات',
          'السعر / الرخصة',
          'الفرق الأبرز'
        ],
        rows: [
          {
            'التطبيق': '[Coil](/ar/power-local-llm/coil-review)',
            'المنصات': 'Mac',
            'السعر / الرخصة': '$14.99 / مغلق المصدر',
            'الفرق الأبرز': 'نموذجا موجّه وعامل على الجهاز مع أدوات مجلد تتطلب الموافقة'
          },
          {
            'التطبيق': '[Open Interpreter](/ar/power-local-llm/open-interpreter-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الرخصة': 'مجاني / Apache 2.0',
            'الفرق الأبرز': 'وكيل مفتوح المصدر يتيح لنموذج LLM محلي التحكم بحاسوبك وتنفيذ الشفرة'
          },
          {
            'التطبيق': '[Agent Zero](/ar/power-local-llm/agent-zero-review)',
            'المنصات': 'macOS وWindows وLinux',
            'السعر / الرخصة': 'مجاني / MIT',
            'الفرق الأبرز': 'وكيل مستقل مفتوح المصدر بسيط بقدرة على البرمجة'
          }
        ],
        note: 'تتغير تفاصيل المنافسين كثيراً؛ تأكد من السعر والرخصة والمنصات الحالية لكل تطبيق في صفحته.'
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يعمل Kruvo دون اتصال بالإنترنت؟',
            a: 'ليس افتراضياً: فهو يحتاج إلى نموذج، ومفتاح API يرسل الطلبات إلى المزوّد. أما مع Ollama ونموذج محلي فتبقى طلبات النموذج على حاسوبك، بينما تواصل الموصّلات وفحوص التحديث استخدام الشبكة.'
          },
          {
            q: 'هل يستطيع Kruvo التصرف دون أن يسألني؟',
            a: 'إجراءات «hard floor» تتطلب دائماً موافقة بشرية، والإجراءات الحاسوبية المصنّفة حساسة تحتاج موافقة في تطبيق سطح المكتب في كل وضع. أما الأدوات الأخرى فتتبع سياسة الصلاحيات والقواعد الدائمة التي تضعها.'
          },
          {
            q: 'لماذا تختلف أرقام الإصدارات؟',
            a: 'تعرض صفحة التنزيل 0.3.6، ويضم GitHub أيضاً 0.3.13 الصادر في 11 أكتوبر، وتشير أدلة الموقع إلى تطبيق 0.3.4 لاستخدام الحاسوب. راجع ملاحظات الإصدار الخاصة بالنسخة التي تثبّتها.'
          },
          {
            q: 'هل يوجد تطبيق iPhone؟',
            a: 'تذكر ملاحظات 0.3.13 تطبيق iPhone/iPad على TestFlight، بينما يصف الموقع Kruvo بأنه تطبيق مكتبي لنظامي Windows وmacOS. لم تختبر PromptQuorum تطبيق TestFlight.'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Kruvo وكيل مكتبي مجاني للبدء، يُبقي بحسب الجهة المطوّرة المحادثات والمفاتيح وسجلات التدقيق على حاسوبك، ويعمل في مجلد تختاره ويسأل قبل الإجراءات الحساسة، بمفتاح API الخاص بك أو Ollama. حُدّث في 11 أكتوبر 2026 وينشر قيم تحقق وسياسة خصوصية واضحة. في المقابل هو مغلق المصدر، ومثبّتاته غير موقّعة، وتاريخ إصداراته يبدأ في 18 سبتمبر 2026، وصفحة التنزيل متأخرة عن أحدث إصدار على GitHub، وكل ادعاءات السلوك والخصوصية صادرة عن الجهة المطوّرة. يناسب مستخدمي Windows وMac الراغبين في قواعد موافقة حول وكيل؛ ومن يريد شفرة مفتوحة يمكنه مقارنة [Open Interpreter](/ar/power-local-llm/open-interpreter-review) أو [Agent Zero](/ar/power-local-llm/agent-zero-review).'
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Kruvo](https://kruvo.ai) — صفحات المنتج والتنزيل والأسعار والتوثيق والأمان، تم الاطلاع عليها في 24 أكتوبر 2026.',
          '[سجل تغييرات Kruvo](https://kruvo.ai/changelog) و[سياسة الخصوصية](https://kruvo.ai/privacy) — ملاحظات الإصدار حتى 0.3.6 ومعالجة البيانات ومرحّلات السحابة.',
          '[إصدارات Kruvo على GitHub](https://github.com/pvaz/kruvo-releases/releases) — تواريخ النشر والملفات وملاحظات الإصدارات من 0.3.0 إلى 0.3.13، والإشارة إلى أن الشفرة المصدرية خاصة.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Coil](/ar/power-local-llm/coil-review) — إطار وكيل لنظام Mac بنماذج على الجهاز وإيصالات توجيه.',
          '[مراجعة Open Interpreter](/ar/power-local-llm/open-interpreter-review) — وكيل مفتوح المصدر ينفّذ الشفرة على حاسوبك.',
          '[مراجعة Agent Zero](/ar/power-local-llm/agent-zero-review) — وكيل مستقل بسيط بقدرة على البرمجة.',
          '[نماذج LLM المحلية للبرمجة والتطوير: مقارنة](/ar/power-local-llm/local-llm-code-development-compared) — مقارنة الفئة لأدوات البرمجة والوكلاء.'
        ]
      }
    }
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/kruvo-review-hero-zh.webp',
    title: 'Kruvo 评测：行动前先询问的桌面 AI 同事',
    seoTitle: 'Kruvo 评测：Windows 与 Mac 桌面 AI 同事',
    intro: 'Kruvo 是 BexoCORP 推出的 Windows 和 macOS 桌面应用，据其官方页面介绍，它使用你自己的模型服务商 API 密钥或 Ollama，在你选定的文件夹中工作，可连接 GitHub、Slack、Gmail 等工具，并在执行敏感操作前请求批准。本评测阅读了厂商的网站、发行说明和 GitHub 发布仓库，解释了版本号为何不一致，并列出来源未能确认的内容。PromptQuorum 没有安装或测试过该应用。',
    metaDescription: 'Kruvo 评测：适用于 Windows 和 macOS 的 AI 同事，用自己的 API 密钥或 Ollama 在你的文件夹中工作，行动前先询问。价格、要求与未解决问题。',
    twitterDescription: 'Kruvo 评测：带审批规则的 Windows 和 macOS 本地优先桌面 AI 同事。配置要求、套餐、版本差异与未核实内容。',
    audience: '想了解 Kruvo 需要什么、价格多少、数据流向何处、审批规则如何运作，以及来源未能确认哪些说法的 Windows 和 Mac 用户。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Kruvo 评测',
    targetKeywords: [
      'kruvo 评测',
      '本地优先 ai 同事',
      '桌面 ai 智能体 windows macos',
      '带审批规则的 ai 智能体',
      'kruvo ollama api 密钥',
      'bexocorp kruvo'
    ],
    current_hardware_mentioned: [
      'Windows PC or Mac (macOS 13.5+)'
    ],
    leadAnswerBlock: '**Kruvo（官方下载页为 0.3.6 版，厂商最近一次更新为 2026 年 10 月 11 日）是一款可免费起步的闭源 Windows 和 macOS 桌面应用，据厂商介绍，它使用你自己的服务商密钥或 Ollama，在你选定的文件夹中工作，并在敏感操作前先询问。** 本评测中关于行为和隐私的说法全部来自厂商自己的页面和发行说明；PromptQuorum 没有安装或测试过它。',
    quickAnswerTop: {
      zh: {
        question: '运行 Kruvo 需要什么？',
        answer: '一台 64 位 Windows 10 22H2 或 Windows 11 电脑，或运行 macOS 13.5 及以上版本的 Mac（以获得完整功能），再加上一个模型：受支持的服务商 API 密钥，或在合适硬件上运行的 Ollama。模型费用另计。',
        bullets: [
          '审批卡片会显示工具、目标和原因；“硬底线”操作始终需要人工决定。',
          '电脑操作（受监督的 Chrome 或 Edge、已授权的 Windows 应用）默认关闭，需按网站或应用逐一同意。',
          'Work 模式在文件夹中配合工具运行；Chat 模式不使用工具直接回答。',
          '定时本地自动化以及通过 Telegram 或 Slack 发来的请求，仅在 Kruvo 运行期间有效。'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: '快速回答',
        anchor: 'quick-answer'
      },
      {
        label: 'Kruvo 是什么？',
        anchor: 'what-is-kruvo'
      },
      {
        label: '获取方式',
        anchor: 'get-it'
      },
      {
        label: '配置要求',
        anchor: 'requirements'
      },
      {
        label: '定价',
        anchor: 'pricing'
      },
      {
        label: '来源已证实的功能',
        anchor: 'key-features'
      },
      {
        label: '隐私与数据流向',
        anchor: 'privacy'
      },
      {
        label: '适合哪些人',
        anchor: 'who-should-use'
      },
      {
        label: '我们未能核实的内容',
        anchor: 'who-should-not-use'
      },
      {
        label: '竞品与替代方案',
        anchor: 'vs-alternatives'
      },
      {
        label: '常见问题',
        anchor: 'faq'
      },
      {
        label: '结论',
        anchor: 'verdict'
      },
      {
        label: '来源',
        anchor: 'sources'
      },
      {
        label: '相关阅读',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Kruvo 是一款 Windows 和 macOS 桌面应用，由你选择的模型在文件夹和已连接的工具中工作，配有审批规则和本地审计记录。'
          },
          {
            type: 'plain-terms',
            text: '你给 Kruvo 一个任务和一个文件夹，它用你的 API 密钥或 Ollama 模型完成工作，遇到敏感操作会先停下来询问你。'
          }
        ],
        items: [
          '维护情况：GitHub 显示从 9 月 18 日的 0.3.0 到 2026 年 10 月 11 日的 0.3.13 均有发布，更新活跃，因此不适用“项目停更”警告。',
          '许可证：闭源；发布仓库说明产品源代码保存在私有仓库中。',
          '版本：下载页列出 0.3.6（10 月 7 日）；GitHub 上还有该页面尚未列出的 0.3.13（10 月 11 日）。',
          '签名：Windows 安装包未做代码签名，Mac 构建未经公证；厂商公布了 SHA-256 校验值。',
          '依据：厂商网站、发行说明和 GitHub，阅读于 2026 年 10 月 24 日，未做实际测试。'
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum 没有安装、测试或评测 Kruvo。以下关于行为、安全和隐私的说法均来自厂商。'
          }
        ]
      },
      overview: {
        id: 'what-is-kruvo',
        title: 'Kruvo 是什么？',
        content: [
          '**Kruvo 是一款桌面“AI 同事”应用：它用你选择的模型处理选定文件夹和已连接的工具，并把拟执行的操作交给你批准。** 网站将其描述为由你掌控的本地优先 AI 工作方式，并称它属于 BexoCORP。更新日志把 0.3.0 版（2026 年 9 月 18 日）列为产品更名为 Kruvo 的版本。',
          'Work 模式在文件夹中使用文件、终端和连接器；Chat 模式不使用工具直接回答。应用还提供各自带文件夹的项目、个人任务列表、本地记忆、内置本地同事（专业角色），以及八种语言的界面。本地使用不需要 Kruvo 账户。'
        ]
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Kruvo 可直接从自家网站下载 Windows 和 macOS 版本，相同文件也在 GitHub Releases 上。**'
        ],
        columns: [
          '渠道',
          '链接'
        ],
        rows: [
          {
            '渠道': 'Windows 10 22H2 / 11（.exe、.msi）',
            '链接': '[下载页面](https://kruvo.ai/download)'
          },
          {
            '渠道': 'macOS 13.5+（Apple Silicon、Intel）',
            '链接': '[下载页面](https://kruvo.ai/download)'
          },
          {
            '渠道': '官方网站',
            '链接': '[kruvo.ai](https://kruvo.ai)'
          },
          {
            '渠道': '隐私政策',
            '链接': '[kruvo.ai/privacy](https://kruvo.ai/privacy)'
          },
          {
            '渠道': '发布文件与说明',
            '链接': '[GitHub Releases](https://github.com/pvaz/kruvo-releases/releases)'
          }
        ],
        note: '评测版本：0.3.6，即官方下载页和 GitHub “Latest”发布所对应的版本，发布于 2026 年 10 月 7 日。GitHub 上还有更新的 0.3.13（2026 年 10 月 11 日），是核查时厂商的最近一次更新；网站上的“0.3.4”指制作其截图和电脑操作指南所用的应用版本。Windows 安装包未做代码签名，Mac 构建未经公证，因此 Windows SmartScreen 和 macOS Gatekeeper 会发出警告；厂商公布 SHA-256 校验值，并提示先校验文件，且切勿关闭系统防护。'
      },
      requirements: {
        id: 'requirements',
        title: '配置要求',
        content: [
          '**Kruvo 需要 Windows 10 22H2 或 Windows 11（64 位），或 macOS 13.5 及以上版本，并需要一个模型：受支持的服务商 API 密钥或 Ollama。**'
        ],
        columns: [
          '项目',
          '来源所述'
        ],
        rows: [
          {
            '项目': '操作系统',
            '来源所述': 'Windows 10 22H2 / 11，或 macOS 13.5+（更早的 macOS 未经验证）'
          },
          {
            '项目': '模型',
            '来源所述': 'API 密钥（OpenAI、Anthropic、Gemini、Mistral、DeepSeek、Kimi、Qwen、xAI）或 Ollama'
          },
          {
            '项目': '可选',
            '来源所述': '浏览器操作需要 Chrome 或 Edge；Telegram 或 Slack 凭据'
          },
          {
            '项目': '下载大小',
            '来源所述': '.exe 96.1 MB；.dmg 150.7 MB（Apple Silicon）或 154.6 MB（Intel）'
          }
        ],
        note: '来源未给出内存或磁盘数字；Ollama 模型需要与其自身大小相匹配的“合适硬件”。模型用量由服务商计费，与任何 Kruvo 套餐无关。'
      },
      pricing: {
        id: 'pricing',
        title: '定价',
        content: [
          '**Free 套餐价格为 €0，包含完整的本地应用；Pro、Team 和 Enterprise 是需联系洽谈的服务档位。**'
        ],
        columns: [
          '套餐',
          '价格'
        ],
        rows: [
          {
            '套餐': 'Free',
            '价格': '€0，无需 Kruvo 账户'
          },
          {
            '套餐': 'Pro',
            '价格': '每月 €15 或每年 €144'
          },
          {
            '套餐': 'Team',
            '价格': '每用户每月 €29，至少 3 人'
          },
          {
            '套餐': 'Enterprise',
            '价格': '定制，年度协议'
          }
        ],
        note: '读取自定价页面，时间为 2026 年 10 月 24 日，价格按网站所示为欧元。页面称本地应用的功能在四个套餐中相同，付费档位涵盖托管连接和团队许可，且没有自助结账，也不承诺试用。Kruvo 不包含服务商额度。'
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下每一项都来自厂商的页面或发行说明。**'
        ],
        items: [
          '**审批规则与审计。** 权限策略、常设规则、任何模式都无法降低的硬底线，以及对机密信息做脱敏处理的本地审计记录。',
          '**模型。** OpenAI、Anthropic、Gemini、Mistral、DeepSeek、Kimi、Qwen、xAI 或 Ollama。',
          '**连接器。** GitHub、Slack、Gmail、Outlook、日历、Notion、Jira、Linear、HubSpot 和 MCP，需手动配置；PaxHelm 和 Talqivo 通过 MCP 连接。',
          '**电脑操作。** 在 Kruvo 自有配置文件或通过扩展使用的 Chrome 或 Edge 中，以及在已授权的 Windows 应用中进行受监督的操作，并提供暂停、接管和停止控制。',
          '**远程请求与自动化。** 通过 Telegram 或 Slack 发送请求并处理符合条件的审批，另有无法自行批准、也不能使用浏览器工具的定时本地自动化。',
          '**工作组织。** 项目、任务列表、本地记忆和内置本地同事。',
          '**更新。** 经桌面更新程序验证的已签名更新包。'
        ]
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**隐私政策（最后更新于 2026 年 10 月 3 日）称，对话、审计记录、连接器令牌和模型密钥保存在你的电脑上，交付成果保存在你选定的工作区。** 政策列出发送到 Kruvo 服务的三类内容：用于检查更新的标准 HTTP 数据；用于验证付费套餐的许可证 ID、套餐和应用版本；以及仅在启用遥测时发送的不含内容的产品事件。',
          '托管模型和已连接的服务会收到其请求所需的数据，浏览器操作期间的截图会发送给你的模型服务商。使用可选的 Slack 和 GitHub 中继时，Kruvo Cloud 会在传输途中处理消息内容，并保存账户、套餐和账单状态以及代理的 OAuth 令牌。本地对话、文件和模型密钥不会自动上传。'
        ],
        callouts: [
          {
            type: 'note',
            text: '以上是厂商的说法。PromptQuorum 没有审计该应用或其网络流量。'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**拥有自己的 API 密钥或 Ollama 的 Windows 和 Mac 用户**，想要一个能在文件和已连接工具中工作的智能体。',
          '**希望操作前先获得批准的人**，并希望有本地审计记录。',
          '**想免费在本地起步的用户**，不想注册 Kruvo 账户。'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际质量与速度。** PromptQuorum 没有运行过 Kruvo，来源也没有给出基准测试。',
          '**代码与许可证。** 源代码为私有，也未找到许可证文本，因此无法检查代码。',
          '**隐私说法。** 关于本地存储和遥测的说法未与网络流量进行比对。',
          '**最新构建。** 0.3.13 的说明提到了跨多台电脑的远程对话和 TestFlight 上的 iPhone/iPad 应用；两者均未核实。'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: [
          '应用',
          '平台',
          '价格 / 许可证',
          '主要区别'
        ],
        rows: [
          {
            '应用': '[Coil](/zh/power-local-llm/coil-review)',
            '平台': 'Mac',
            '价格 / 许可证': '$14.99 / 闭源',
            '主要区别': '设备端路由与工作模型，配合需审批的文件夹工具'
          },
          {
            '应用': '[Open Interpreter](/zh/power-local-llm/open-interpreter-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / Apache 2.0',
            '主要区别': '开源智能体，让本地 LLM 控制你的电脑并执行代码'
          },
          {
            '应用': '[Agent Zero](/zh/power-local-llm/agent-zero-review)',
            '平台': 'macOS、Windows、Linux',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '具备编程能力的极简开源自主智能体'
          }
        ],
        note: '竞品信息变化频繁；请在各应用自己的页面上确认其当前价格、许可证和平台。'
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Kruvo 可以离线使用吗？',
            a: '默认不能：它需要模型，使用 API 密钥时请求会发送给该服务商。若用 Ollama 运行本地模型，模型请求会留在你的电脑上，但连接器和更新检查仍会使用网络。'
          },
          {
            q: 'Kruvo 会不经询问就行动吗？',
            a: '硬底线操作始终需要人工批准，被归类为敏感的电脑操作在任何模式下都需要在桌面应用中批准。其他工具遵循你设置的权限策略和常设规则。'
          },
          {
            q: '为什么版本号不一致？',
            a: '下载页列出 0.3.6，GitHub 上还有 10 月 11 日的 0.3.13，而网站的指南在电脑操作方面提到 0.3.4 版应用。请查看你所安装构建的发行说明。'
          },
          {
            q: '有 iPhone 应用吗？',
            a: '0.3.13 的说明提到 TestFlight 上有 iPhone/iPad 应用，而网站把 Kruvo 描述为 Windows 和 macOS 桌面应用。PromptQuorum 没有测试 TestFlight 应用。'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Kruvo 是一款可免费起步的桌面智能体，据厂商介绍，它把对话、密钥和审计记录保留在你的电脑上，在你选定的文件夹中工作，并在敏感操作前先询问，使用你自己的 API 密钥或 Ollama。它在 2026 年 10 月 11 日有更新，并公布了校验值和清晰的隐私政策。不足之处是：闭源、安装包未签名、发布历史从 2026 年 9 月 18 日才开始、下载页落后于 GitHub 上的最新构建，且所有关于行为和隐私的说法都来自厂商。它适合希望给智能体加上审批规则的 Windows 和 Mac 用户；想要开放代码的读者可对比 [Open Interpreter](/zh/power-local-llm/open-interpreter-review) 或 [Agent Zero](/zh/power-local-llm/agent-zero-review)。'
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Kruvo 官方网站](https://kruvo.ai) — 产品、下载、定价、文档和安全页面，核查于 2026 年 10 月 24 日。',
          '[Kruvo 更新日志](https://kruvo.ai/changelog)和[隐私政策](https://kruvo.ai/privacy) — 截至 0.3.6 的发行说明、数据处理和云中继。',
          '[GitHub 上的 Kruvo 发布](https://github.com/pvaz/kruvo-releases/releases) — 0.3.0 至 0.3.13 的发布日期、文件和说明，以及源代码为私有的声明。'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Coil 评测](/zh/power-local-llm/coil-review) — 带设备端模型和路由回执的 Mac 智能体框架。',
          '[Open Interpreter 评测](/zh/power-local-llm/open-interpreter-review) — 在你的电脑上执行代码的开源智能体。',
          '[Agent Zero 评测](/zh/power-local-llm/agent-zero-review) — 具备编程能力的极简自主智能体。',
          '[本地 LLM 代码与开发对比](/zh/power-local-llm/local-llm-code-development-compared) — 编程与智能体工具的类别对比。'
        ]
      }
    }
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-24',
    dateModified: '2026-10-24',
    next_refresh_due: '2027-04-24',
    theme: 'Overview & Reference',
    heroImage: '/images/kruvo-review-hero-ko.webp',
    title: 'Kruvo 리뷰: 실행 전에 먼저 묻는 데스크톱 AI 동료',
    seoTitle: 'Kruvo 리뷰: Windows·Mac용 데스크톱 AI 동료',
    intro: 'Kruvo는 BexoCORP가 만든 Windows·macOS용 데스크톱 앱입니다. 공식 페이지에 따르면 직접 마련한 모델 제공업체의 API 키 또는 Ollama로 선택한 폴더에서 작업하고, GitHub·Slack·Gmail 같은 도구와 연결되며, 민감한 작업 전에 승인을 요청합니다. 이 리뷰는 제작사의 웹사이트, 릴리스 노트, GitHub 릴리스 저장소를 읽고 버전 번호가 서로 다른 이유를 설명하며 출처로 확인하지 못한 내용을 정리합니다. PromptQuorum은 이 앱을 설치하거나 테스트하지 않았습니다.',
    metaDescription: 'Kruvo 리뷰: 직접 마련한 API 키 또는 Ollama로 폴더에서 작업하고 실행 전에 묻는 Windows·macOS AI 동료. 가격, 요구 사양, 미확인 사항을 정리합니다.',
    twitterDescription: 'Kruvo 리뷰: 승인 규칙을 갖춘 Windows·macOS용 로컬 우선 데스크톱 AI 동료. 요구 사양, 요금제, 버전 불일치, 미확인 사항.',
    audience: 'Kruvo에 무엇이 필요한지, 비용은 얼마인지, 데이터가 어디로 가는지, 승인 규칙이 어떻게 작동하는지, 출처가 확인하지 못한 내용이 무엇인지 알고 싶은 Windows·Mac 사용자.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Kruvo 리뷰',
    targetKeywords: [
      'kruvo 리뷰',
      '로컬 우선 ai 동료',
      '데스크톱 ai 에이전트 windows macos',
      '승인 규칙 ai 에이전트',
      'kruvo ollama api 키',
      'bexocorp kruvo'
    ],
    current_hardware_mentioned: [
      'Windows PC or Mac (macOS 13.5+)'
    ],
    leadAnswerBlock: '**Kruvo(공식 다운로드 페이지는 0.3.6 버전, 제작사의 최근 업데이트는 2026년 10월 11일)는 무료로 시작할 수 있는 비공개 소스 Windows·macOS 데스크톱 앱으로, 제작사에 따르면 직접 마련한 제공업체 키 또는 Ollama로 선택한 폴더에서 작업하고 민감한 작업 전에 먼저 묻습니다.** 이 리뷰의 동작 및 개인정보 관련 설명은 모두 제작사의 페이지와 릴리스 노트에서 가져온 것이며, PromptQuorum은 설치하거나 테스트하지 않았습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Kruvo를 실행하려면 무엇이 필요합니까?',
        answer: '64비트 Windows 10 22H2 또는 Windows 11 PC, 또는 전체 기능을 쓰려면 macOS 13.5 이상의 Mac과 모델이 필요합니다. 지원되는 제공업체 API 키 또는 적합한 하드웨어에서 실행하는 Ollama를 사용합니다. 모델 사용 비용은 별도입니다.',
        bullets: [
          '승인 카드에 도구·대상·이유가 표시되며, 하드 플로어 작업은 항상 사람의 결정이 필요합니다.',
          '컴퓨터 사용(감독 하의 Chrome 또는 Edge, 허용한 Windows 앱)은 기본적으로 꺼져 있으며 사이트나 앱마다 동의가 필요합니다.',
          'Work 모드는 도구와 함께 폴더에서 실행되고, Chat 모드는 도구 없이 답합니다.',
          '예약된 로컬 자동화와 Telegram 또는 Slack 요청은 Kruvo가 실행 중일 때만 동작합니다.'
        ],
        updatedDate: '2026-10'
      }
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer'
      },
      {
        label: 'Kruvo란?',
        anchor: 'what-is-kruvo'
      },
      {
        label: '입수 방법',
        anchor: 'get-it'
      },
      {
        label: '필요한 사양',
        anchor: 'requirements'
      },
      {
        label: '요금',
        anchor: 'pricing'
      },
      {
        label: '출처로 확인된 기능',
        anchor: 'key-features'
      },
      {
        label: '개인정보 보호와 데이터 흐름',
        anchor: 'privacy'
      },
      {
        label: '이런 분께 적합합니다',
        anchor: 'who-should-use'
      },
      {
        label: '확인하지 못한 사항',
        anchor: 'who-should-not-use'
      },
      {
        label: '경쟁 제품과 대안',
        anchor: 'vs-alternatives'
      },
      {
        label: '자주 묻는 질문',
        anchor: 'faq'
      },
      {
        label: '결론',
        anchor: 'verdict'
      },
      {
        label: '출처',
        anchor: 'sources'
      },
      {
        label: '관련 글',
        anchor: 'related-reading'
      }
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Kruvo는 직접 고른 모델이 폴더와 연결된 도구에서 작업하는 Windows·macOS 데스크톱 앱으로, 승인 규칙과 로컬 감사 기록을 갖추고 있습니다.'
          },
          {
            type: 'plain-terms',
            text: 'Kruvo에 작업과 폴더를 맡기면 사용자의 API 키 또는 Ollama 모델로 일을 진행하고, 민감한 작업 전에는 멈추고 먼저 묻습니다.'
          }
        ],
        items: [
          '유지 관리: GitHub에는 9월 18일의 0.3.0부터 2026년 10월 11일의 0.3.13까지 릴리스가 있어 활발히 업데이트되고 있으므로 방치 프로젝트 경고는 해당하지 않습니다.',
          '라이선스: 비공개 소스이며, 릴리스 저장소는 제품 소스 코드가 비공개 저장소에 있다고 설명합니다.',
          '버전: 다운로드 페이지는 0.3.6(10월 7일)을 안내하고, GitHub에는 해당 페이지가 아직 싣지 않은 0.3.13(10월 11일)도 있습니다.',
          '서명: Windows 설치 파일은 코드 서명이 없고 Mac 빌드는 공증되지 않았으며, SHA-256 체크섬이 공개되어 있습니다.',
          '근거: 제작사의 사이트, 릴리스 노트, GitHub를 2026년 10월 24일에 확인한 것이며 직접 테스트는 하지 않았습니다.'
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 Kruvo를 설치하거나 테스트하거나 벤치마크하지 않았습니다. 아래의 동작·보안·개인정보 관련 설명은 제작사의 주장입니다.'
          }
        ]
      },
      overview: {
        id: 'what-is-kruvo',
        title: 'Kruvo란?',
        content: [
          '**Kruvo는 데스크톱용 "AI 동료"입니다. 사용자가 고른 모델로 선택한 폴더와 연결된 도구에서 작업하고, 제안하는 작업을 승인용으로 보여 주는 앱입니다.** 사이트는 사용자가 통제하는 로컬 우선 AI 작업이라고 소개하며 BexoCORP의 일부라고 밝힙니다. 변경 기록은 버전 0.3.0(2026년 9월 18일)을 제품이 Kruvo가 된 릴리스로 적고 있습니다.',
          'Work 모드는 파일·터미널·커넥터와 함께 폴더에서 실행되고, Chat 모드는 도구 없이 답합니다. 자체 폴더를 가진 프로젝트, 개인 작업 목록, 로컬 메모리, 내장 로컬 동료(전문 페르소나), 8개 언어 인터페이스도 제공합니다. 로컬 작업에는 Kruvo 계정이 필요 없습니다.'
        ]
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**Kruvo는 Windows와 macOS용을 공식 웹사이트에서 직접 내려받으며, 같은 파일이 GitHub Releases에도 있습니다.**'
        ],
        columns: [
          '경로',
          '링크'
        ],
        rows: [
          {
            '경로': 'Windows 10 22H2 / 11 (.exe, .msi)',
            '링크': '[다운로드 페이지](https://kruvo.ai/download)'
          },
          {
            '경로': 'macOS 13.5 이상 (Apple Silicon, Intel)',
            '링크': '[다운로드 페이지](https://kruvo.ai/download)'
          },
          {
            '경로': '웹사이트',
            '링크': '[kruvo.ai](https://kruvo.ai)'
          },
          {
            '경로': '개인정보 처리방침',
            '링크': '[kruvo.ai/privacy](https://kruvo.ai/privacy)'
          },
          {
            '경로': '릴리스 파일과 노트',
            '링크': '[GitHub Releases](https://github.com/pvaz/kruvo-releases/releases)'
          }
        ],
        note: '확인한 버전은 0.3.6으로, 공식 다운로드 페이지와 GitHub의 "Latest" 릴리스가 가리키는 버전이며 2026년 10월 7일에 공개되었습니다. GitHub에는 더 새로운 0.3.13(2026년 10월 11일)도 있으며, 확인 시점의 제작사 최근 업데이트입니다. 사이트의 "0.3.4"는 스크린샷과 컴퓨터 사용 가이드를 만드는 데 쓴 앱 버전을 가리킵니다. Windows 설치 파일은 코드 서명이 없고 Mac 빌드는 공증되지 않아 Windows SmartScreen과 macOS Gatekeeper가 경고를 표시합니다. 제작사는 SHA-256 체크섬을 공개하고, 먼저 파일을 검증하되 시스템 보호 기능은 절대 끄지 말라고 안내합니다.'
      },
      requirements: {
        id: 'requirements',
        title: '필요한 사양',
        content: [
          '**Kruvo에는 Windows 10 22H2 또는 Windows 11(64비트)이나 macOS 13.5 이상, 그리고 지원되는 제공업체 API 키 또는 Ollama 같은 모델이 필요합니다.**'
        ],
        columns: [
          '항목',
          '출처 기준'
        ],
        rows: [
          {
            '항목': '운영 체제',
            '출처 기준': 'Windows 10 22H2 / 11 또는 macOS 13.5 이상 (이전 macOS는 검증되지 않음)'
          },
          {
            '항목': '모델',
            '출처 기준': 'API 키(OpenAI, Anthropic, Gemini, Mistral, DeepSeek, Kimi, Qwen, xAI) 또는 Ollama'
          },
          {
            '항목': '선택 사항',
            '출처 기준': '브라우저 작업용 Chrome 또는 Edge, Telegram 또는 Slack 자격 증명'
          },
          {
            '항목': '다운로드 크기',
            '출처 기준': '.exe 96.1 MB, .dmg 150.7 MB(Apple Silicon) 또는 154.6 MB(Intel)'
          }
        ],
        note: '출처에는 RAM이나 디스크 수치가 없으며, Ollama 모델은 크기에 맞는 "적합한 하드웨어"가 필요하다고만 합니다. 모델 사용 요금은 제공업체가 청구하며 Kruvo 요금제와 별개입니다.'
      },
      pricing: {
        id: 'pricing',
        title: '요금',
        content: [
          '**Free 요금제는 €0이며 로컬 앱 전체 기능을 포함합니다. Pro·Team·Enterprise는 문의로 협의하는 서비스 등급입니다.**'
        ],
        columns: [
          '요금제',
          '가격'
        ],
        rows: [
          {
            '요금제': 'Free',
            '가격': '€0, Kruvo 계정 불필요'
          },
          {
            '요금제': 'Pro',
            '가격': '월 €15 또는 연 €144'
          },
          {
            '요금제': 'Team',
            '가격': '사용자당 월 €29, 최소 3명'
          },
          {
            '요금제': 'Enterprise',
            '가격': '맞춤, 연간 계약'
          }
        ],
        note: '2026년 10월 24일 요금 페이지에서 확인했으며, 가격은 사이트 표기대로 유로입니다. 페이지에 따르면 로컬 앱의 기능은 네 요금제에서 동일하고, 유료 등급은 관리형 연결과 팀 라이선스를 다루며, 셀프서비스 결제나 체험 제공 약속은 없습니다. Kruvo에는 제공업체 크레딧이 포함되어 있지 않습니다.'
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 제작사의 페이지 또는 릴리스 노트에서 가져왔습니다.**'
        ],
        items: [
          '**승인 규칙과 감사.** 권한 정책, 상시 규칙, 어떤 모드에서도 낮출 수 없는 하드 플로어, 비밀 정보를 가리는 로컬 감사 기록.',
          '**모델.** OpenAI, Anthropic, Gemini, Mistral, DeepSeek, Kimi, Qwen, xAI 또는 Ollama.',
          '**커넥터.** GitHub, Slack, Gmail, Outlook, 캘린더, Notion, Jira, Linear, HubSpot, MCP를 수동으로 설정하며, PaxHelm과 Talqivo는 MCP로 연결합니다.',
          '**컴퓨터 사용.** Kruvo 전용 프로필 또는 확장 프로그램을 통한 Chrome·Edge, 그리고 허용한 Windows 앱에서의 감독 하 작업이며, 일시정지·직접 제어·중지 컨트롤이 있습니다.',
          '**원격 요청과 자동화.** Telegram 또는 Slack을 통한 요청과 해당되는 승인, 그리고 스스로 승인하거나 브라우저 도구를 쓸 수 없는 예약 로컬 자동화.',
          '**작업 정리.** 프로젝트, 작업 목록, 로컬 메모리, 내장 로컬 동료.',
          '**업데이트.** 데스크톱 업데이터가 검증하는 서명된 업데이트 패키지.'
        ]
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호와 데이터 흐름',
        content: [
          '**개인정보 처리방침(최종 갱신 2026년 10월 3일)에 따르면 대화, 감사 기록, 커넥터 토큰, 모델 키는 사용자의 컴퓨터에 남고 결과물은 선택한 작업 공간에 저장됩니다.** Kruvo 서비스로 전송되는 것은 세 가지입니다. 업데이트 확인을 위한 표준 HTTP 데이터, 유료 요금제 검증을 위한 라이선스 ID·요금제·앱 버전, 그리고 텔레메트리를 켠 경우에만 보내는 내용 없는 제품 이벤트입니다.',
          '호스팅 모델과 연결된 서비스는 요청에 필요한 데이터를 받으며, 브라우저 작업 중 찍은 스크린샷은 모델 제공업체로 전송됩니다. 선택 사항인 Slack·GitHub 릴레이를 쓰면 Kruvo Cloud가 전송 중인 메시지 내용을 처리하고 계정·요금제·청구 상태와 중개된 OAuth 토큰을 저장합니다. 로컬 대화, 파일, 모델 키는 자동으로 업로드되지 않습니다.'
        ],
        callouts: [
          {
            type: 'note',
            text: '제작사의 주장입니다. PromptQuorum은 앱과 네트워크 트래픽을 감사하지 않았습니다.'
          }
        ]
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**직접 API 키나 Ollama를 가진 Windows·Mac 사용자**로, 파일과 연결된 도구에서 일하는 에이전트를 원하는 분.',
          '**작업 전에 승인하고 싶은 분**으로, 로컬 감사 기록도 원하는 분.',
          '**무료로 로컬에서 시작하고 싶은 분**으로, Kruvo 계정을 만들고 싶지 않은 분.'
        ]
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 품질과 속도.** PromptQuorum은 Kruvo를 실행하지 않았고, 출처에도 벤치마크가 없습니다.',
          '**코드와 라이선스.** 소스가 비공개이고 라이선스 문서도 찾지 못해 코드를 확인할 수 없습니다.',
          '**개인정보 주장.** 로컬 저장과 텔레메트리에 대한 설명은 네트워크 트래픽과 대조하지 않았습니다.',
          '**최신 빌드.** 0.3.13 노트에는 여러 컴퓨터에 걸친 원격 대화와 TestFlight의 iPhone/iPad 앱이 언급되어 있으나 둘 다 확인하지 못했습니다.'
        ]
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: [
          '앱',
          '플랫폼',
          '가격 / 라이선스',
          '핵심 차이'
        ],
        rows: [
          {
            '앱': '[Coil](/ko/power-local-llm/coil-review)',
            '플랫폼': 'Mac',
            '가격 / 라이선스': '₩25,000 / 비공개 소스',
            '핵심 차이': '기기 안의 라우터·워커 모델에 승인 방식의 폴더 도구를 결합'
          },
          {
            '앱': '[Open Interpreter](/ko/power-local-llm/open-interpreter-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / Apache 2.0',
            '핵심 차이': '로컬 LLM이 컴퓨터를 제어하고 코드를 실행하게 하는 오픈 소스 에이전트'
          },
          {
            '앱': '[Agent Zero](/ko/power-local-llm/agent-zero-review)',
            '플랫폼': 'macOS, Windows, Linux',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '코딩 능력을 갖춘 최소 구성의 오픈 소스 자율 에이전트'
          }
        ],
        note: '경쟁 제품 정보는 자주 바뀝니다. 각 앱의 최신 가격·라이선스·플랫폼은 해당 앱의 목록에서 확인하십시오.'
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Kruvo는 오프라인에서 작동합니까?',
            a: '기본적으로는 아닙니다. 모델이 필요하며 API 키를 쓰면 요청이 해당 제공업체로 전송됩니다. Ollama로 로컬 모델을 실행하면 모델 요청은 컴퓨터 안에 머물지만, 커넥터와 업데이트 확인은 계속 네트워크를 사용합니다.'
          },
          {
            q: 'Kruvo가 묻지 않고 실행할 수 있습니까?',
            a: '하드 플로어 작업은 항상 사람의 승인이 필요하고, 민감한 것으로 분류된 컴퓨터 작업은 어떤 모드에서든 데스크톱 앱에서 승인해야 합니다. 그 밖의 도구는 사용자가 설정한 권한 정책과 상시 규칙을 따릅니다.'
          },
          {
            q: '버전 번호가 서로 다른 이유는 무엇입니까?',
            a: '다운로드 페이지는 0.3.6을 안내하고, GitHub에는 10월 11일의 0.3.13도 있으며, 사이트 가이드는 컴퓨터 사용에 0.3.4 앱을 언급합니다. 설치하는 빌드의 릴리스 노트를 확인하십시오.'
          },
          {
            q: 'iPhone 앱이 있습니까?',
            a: '0.3.13 노트에는 TestFlight의 iPhone/iPad 앱이 언급되어 있지만, 사이트는 Kruvo를 Windows·macOS 데스크톱 앱으로 설명합니다. PromptQuorum은 TestFlight 앱을 테스트하지 않았습니다.'
          }
        ]
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content: 'Kruvo는 무료로 시작할 수 있는 데스크톱 에이전트로, 제작사에 따르면 대화·키·감사 기록을 컴퓨터에 두고 선택한 폴더에서 작업하며 민감한 작업 전에 먼저 묻습니다. 모델은 직접 마련한 API 키 또는 Ollama를 씁니다. 2026년 10월 11일에 업데이트되었고 체크섬과 명확한 개인정보 처리방침을 공개합니다. 반면 비공개 소스이고, 설치 파일에 서명이 없으며, 릴리스 이력은 2026년 9월 18일에 시작되었고, 다운로드 페이지가 GitHub의 최신 빌드보다 뒤처져 있으며, 동작과 개인정보에 관한 주장은 모두 제작사에서 나왔습니다. 에이전트에 승인 규칙을 두고 싶은 Windows·Mac 사용자에게 적합하며, 공개된 코드를 원한다면 [Open Interpreter](/ko/power-local-llm/open-interpreter-review) 또는 [Agent Zero](/ko/power-local-llm/agent-zero-review)와 비교해 보십시오.'
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Kruvo 웹사이트](https://kruvo.ai) — 제품·다운로드·요금·문서·보안 페이지, 2026년 10월 24일 확인.',
          '[Kruvo 변경 기록](https://kruvo.ai/changelog)과 [개인정보 처리방침](https://kruvo.ai/privacy) — 0.3.6까지의 릴리스 노트, 데이터 처리, 클라우드 릴레이.',
          '[GitHub의 Kruvo 릴리스](https://github.com/pvaz/kruvo-releases/releases) — 0.3.0부터 0.3.13까지의 공개일, 파일, 노트와 소스가 비공개라는 설명.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Coil 리뷰](/ko/power-local-llm/coil-review) — 기기 안 모델과 라우팅 영수증을 갖춘 Mac용 에이전트 하니스.',
          '[Open Interpreter 리뷰](/ko/power-local-llm/open-interpreter-review) — 컴퓨터에서 코드를 실행하는 오픈 소스 에이전트.',
          '[Agent Zero 리뷰](/ko/power-local-llm/agent-zero-review) — 코딩 능력을 갖춘 최소 구성의 자율 에이전트.',
          '[코드·개발용 로컬 LLM 비교](/ko/power-local-llm/local-llm-code-development-compared) — 코딩·에이전트 도구 카테고리 비교.'
        ]
      }
    }
  },
}
