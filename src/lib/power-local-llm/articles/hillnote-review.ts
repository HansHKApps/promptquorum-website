// Hillnote Review: Local-First Markdown Notes With On-Device AI
// Slug: hillnote-review
// Companion to: logseq-review, tolaria-review, siyuan-review, blinko-review
// Sources: hillnote.com (download, pricing, privacy, security pages), github.com/Rajathbail/hillnote (README, Releases v0.43.15 of 2026-10-30),
// the App Store listing (iTunes lookup API, id6754959344, v0.33.46 of 2026-10-29) and the Google Play listing (com.hilltask.mobile.android),
// all checked 2026-11-01 — no hands-on testing. Plan prices are the maker's USD figures, never converted.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-01",
    "dateModified": "2026-11-01",
    "next_refresh_due": "2027-05-01",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/hillnote-review-hero-en.webp",
    "title": "Hillnote Review: Local-First Markdown Notes With On-Device AI",
    "seoTitle": "Hillnote Review: Local-First Markdown Notes and AI",
    "intro": "Hillnote is a notes workspace for Mac, Windows, iPhone, iPad and Android that stores your work as plain Markdown files on your own device and adds AI on top: local models through Ollama and Apple Intelligence, optional cloud models and optional sync. The App Store lists Rajath Bail as the seller. This review is based on the [download page](https://hillnote.com/download), the [pricing page](https://hillnote.com/pricing), the privacy policy, the [GitHub releases](https://github.com/Rajathbail/hillnote/releases/latest) and the store listings, checked on 1 November 2026; PromptQuorum has not tested the app hands-on.",
    "metaDescription": "Hillnote review: local-first Markdown notes for Mac, Windows, iPhone and Android with local AI via Ollama, optional cloud models and sync. Free plan.",
    "twitterDescription": "Hillnote review: Markdown notes stored on your own disk, with local AI through Ollama and Apple Intelligence and paid cloud extras. What the sources confirm and what they do not.",
    "audience": "Note-takers on Mac, Windows or a phone who want to know where Hillnote keeps their notes, what its AI does locally, what the plans cost and which claims the sources leave open.",
    "readTime": "6 min read",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Hillnote review",
    "targetKeywords": [
      "hillnote review",
      "hillnote app",
      "local-first markdown notes app",
      "markdown notes app with local ai",
      "notes app with ollama",
      "offline ai notes app",
      "hillnote pricing"
    ],
    "current_models_mentioned": [
      "Gemma 3",
      "Qwen3",
      "Claude",
      "GPT",
      "Gemini"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "iPhone",
      "Windows PC"
    ],
    "leadAnswerBlock": "**Hillnote (desktop version 0.43.15, released on 30 October 2026) is a Markdown notes workspace for Mac, Windows, iPhone, iPad and Android that keeps your files on your own disk and adds local and cloud AI.** The free plan covers the editor and local AI; paid yearly plans add synced storage, publishing, routines and heavier cloud-model use. Every statement here comes from the maker's site, its policy pages, GitHub and the store listings.",
    "quickAnswerTop": {
      "en": {
        "question": "Does Hillnote need an account or an internet connection?",
        "answer": "Per the maker, no: notes are plain Markdown files in a folder you choose, the app works offline and needs no sign-up, and sync is off by default. Cloud models, sync and publishing are the parts that need the internet.",
        "bullets": [
          "Sync is set per workspace, so one workspace can stay on the device while another syncs.",
          "Mac and Windows builds come from GitHub Releases; the phone apps come from the App Store and Google Play.",
          "Claude, ChatGPT, Codex and Cursor can connect through MCP or read the workspace folder directly.",
          "Hillnote writes AGENTS.md and CLAUDE.md context files so outside AI tools can find their way around a workspace."
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "Quick Answer",
        "anchor": "quick-answer"
      },
      {
        "label": "What Is Hillnote?",
        "anchor": "what-is-hillnote"
      },
      {
        "label": "Get It",
        "anchor": "get-it"
      },
      {
        "label": "Requirements",
        "anchor": "requirements"
      },
      {
        "label": "How to Get Started",
        "anchor": "getting-started"
      },
      {
        "label": "Features Confirmed by the Sources",
        "anchor": "key-features"
      },
      {
        "label": "Data Flow and Privacy",
        "anchor": "privacy"
      },
      {
        "label": "Who Should Use It",
        "anchor": "who-should-use"
      },
      {
        "label": "What We Could Not Verify",
        "anchor": "who-should-not-use"
      },
      {
        "label": "Competitors and Alternatives",
        "anchor": "vs-alternatives"
      },
      {
        "label": "Frequently Asked Questions",
        "anchor": "faq"
      },
      {
        "label": "Verdict",
        "anchor": "verdict"
      },
      {
        "label": "Sources",
        "anchor": "sources"
      },
      {
        "label": "Related Reading",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "TL;DR",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Hillnote is a local-first Markdown notes workspace for Mac, Windows, iPhone, iPad and Android with on-device AI, optional cloud models and optional sync."
          },
          {
            "type": "plain-terms",
            "text": "Your notes are ordinary text files on your own disk; an AI assistant can read and edit them, either with a model on your machine or with a cloud model you choose."
          }
        ],
        "items": [
          "Maintenance: desktop version 0.43.15 was released on 30 October 2026 and the iPhone and Android apps were updated on 29 October 2026, so no stale-project warning applies.",
          "Cost: a free plan plus two paid yearly plans; the figures are in the Get It table.",
          "AI: local models through Ollama and Apple Intelligence, a built-in offline model on iPhone, and optional cloud models.",
          "Source: no licence is stated and the GitHub repository holds only a README and release downloads.",
          "Maker: an individual developer listed as the App Store seller; the site footer links to a company, Colloqi, without explaining the relationship."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "This review is based on hillnote.com, its privacy policy, the GitHub releases and the store listings, checked on 1 November 2026. PromptQuorum has not installed, run or benchmarked the app, so speed, note quality and answer quality are not assessed."
          }
        ]
      },
      "overview": {
        "id": "what-is-hillnote",
        "title": "What Is Hillnote?",
        "content": [
          "**Hillnote is a workspace app for writing, planning and collecting ideas, built on plain Markdown files that stay on your device.** The App Store lists it as \"HillNote\" in the Productivity category from the seller Rajath Bail, and the first iPhone release dates from 16 June 2026; the site and the apps write the name \"Hillnote\".",
          "The maker describes it as made for builders, makers, writers and small teams: a Markdown editor, quick notes, built-in chat that reads and edits your files, small HTML tools you can pin as widgets, and a free sync tier across phone and desktop."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Get It",
        "content": [
          "**Hillnote is free to download on Mac, Windows, iPhone, iPad and Android; the desktop installers are hosted on GitHub, not on the maker's own server.**"
        ],
        "columns": [
          "Option",
          "How to get it"
        ],
        "rows": [
          {
            "Option": "Mac",
            "How to get it": "[Hillnote on GitHub Releases](https://github.com/Rajathbail/hillnote/releases/latest), Apple-silicon .dmg or .zip"
          },
          {
            "Option": "Windows",
            "How to get it": "[Hillnote on GitHub Releases](https://github.com/Rajathbail/hillnote/releases/latest), Setup .exe"
          },
          {
            "Option": "iPhone and iPad",
            "How to get it": "[Hillnote on the App Store](https://apps.apple.com/app/hillnote/id6754959344), free with in-app purchases"
          },
          {
            "Option": "Android",
            "How to get it": "[Hillnote on Google Play](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android)"
          },
          {
            "Option": "Plans",
            "How to get it": "Free $0; Plus $20 per year; Pro $200 per year (US dollars on the maker's site)"
          },
          {
            "Option": "Add-ons",
            "How to get it": "110,000 extra credits $10 once; 1 GB extra synced storage $10 per year"
          },
          {
            "Option": "Website",
            "How to get it": "[hillnote.com](https://hillnote.com)"
          },
          {
            "Option": "Privacy policy",
            "How to get it": "[hillnote.com/privacy](https://hillnote.com/privacy)"
          },
          {
            "Option": "Source code",
            "How to get it": "No source code found; [the GitHub repository](https://github.com/Rajathbail/hillnote) holds a README only"
          }
        ],
        "note": "Version reviewed: desktop 0.43.15 (30 October 2026, GitHub). The App Store lists 0.33.46 (29 October 2026) and Google Play shows 0.33.47 (29 October 2026); phone and desktop use separate version numbers, and the Mac download is an Apple-silicon build. The website quotes prices in US dollars only, and in-app prices on individual store storefronts were not checked."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requirements",
        "content": [
          "**The App Store lists iOS or iPadOS 16.0 as the minimum; the sources name no minimum for Mac or Windows.**"
        ],
        "columns": [
          "Item",
          "What the sources say"
        ],
        "rows": [
          {
            "Item": "Desktop",
            "What the sources say": "Mac: Apple-silicon .dmg or .zip; Windows: Setup .exe"
          },
          {
            "Item": "iPhone and iPad",
            "What the sources say": "iOS or iPadOS 16.0 or later, per the App Store"
          },
          {
            "Item": "Offline models on iPhone",
            "What the sources say": "Gemma 3 or Qwen3 downloads need iOS 26 or later; an in-app check tests memory, storage and speed"
          },
          {
            "Item": "Local AI on desktop",
            "What the sources say": "A local Ollama install or Apple Intelligence, per the pricing page"
          },
          {
            "Item": "Account",
            "What the sources say": "Not needed for local use, per the maker; sync collects an email address for sign-in"
          }
        ],
        "note": "No RAM, VRAM or disk figures are given for local models on the desktop."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "How to Get Started",
        "content": [
          "**The steps follow the maker's own description; PromptQuorum has not run them.**"
        ],
        "numberedItems": [
          {
            "title": "Install the app",
            "whyItMatters": "Download the Mac or Windows installer from GitHub Releases, or the phone app from the App Store or Google Play."
          },
          {
            "title": "Open the onboarding workspace",
            "whyItMatters": "The maker's docs say the app creates an onboarding workspace that takes about two minutes to work through."
          },
          {
            "title": "Choose where AI runs",
            "whyItMatters": "Use a local model through Ollama or Apple Intelligence, let the automatic mode hand harder tasks to a cloud model, or add your own API key on Plus and Pro."
          },
          {
            "title": "Decide on sync",
            "whyItMatters": "Sync is off by default; switch it on per workspace if you want the same notes on every device."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Confirmed by the Sources",
        "content": [
          "**Every item below comes from the maker's site, the store listings or the privacy policy; none has been independently tested.**"
        ],
        "items": [
          "**Markdown on disk.** Notes are standard Markdown files in a folder you choose, with links between documents, a document registry and side-by-side previews of web pages and PDFs.",
          "**Local and cloud AI.** Inline edits and quick tasks use Ollama or Apple Intelligence on the device; an automatic mode hands harder tasks to Claude, GPT and other frontier models.",
          "**Chat with your files.** Built-in chat reads your own files, edits them and creates new ones, according to the App Store description.",
          "**Connections to other AI tools.** Claude, ChatGPT, Codex, Cursor and others connect through local or cloud MCP.",
          "**Paid extras.** Publishing a workspace (Plus: one, Pro: up to six, with custom domains on Pro), routines (Plus: up to three, Pro: up to five) and bring-your-own API keys."
        ],
        "note": "The sources do not say which AI features work fully offline beyond the local-model path."
      },
      "privacy": {
        "id": "privacy",
        "title": "Data Flow and Privacy",
        "content": [
          "**The privacy policy says local data is not collected: documents, edit history and settings stay on your disk until you turn on a feature that sends them.** With sync off, the policy states that Hillnote does not collect your document content or editing behaviour at all. With sync on, it lists your email address for sign-in, an optional display name, sync and activity metadata, collaboration roles, published content and billing status.",
          "Synced workspaces are stored on AWS. Notes without a password are readable by the service, which is what makes search, AI, routines and publishing possible; password-protected notes are encrypted on your device and the policy says the key never reaches Hillnote's servers. Premium AI use is optional: the policy says queries and content go to the model provider's servers (OpenAI, Claude or Gemini), and those providers may use them under their own policies. The website uses Google Analytics, the policy names no advertising SDKs, and crash logs are analysed only with opt-in consent."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "These are the maker's declarations, not audit results, and the app's source code is not published. PromptQuorum has not inspected network traffic. The policy names no postal address and is governed by Indian law, with disputes before the courts in Bangalore."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**Markdown note-takers** who want files they can open in any editor and keep on their own disk.",
          "**Ollama users** who want an assistant that edits their notes with a model already on their computer.",
          "**People who work with Claude, ChatGPT or Cursor** and want those tools to read and edit the same notes."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Performance.** Speed, memory use, battery drain and the quality of local-model answers are untested.",
          "**Licence and source.** No licence is stated, and the GitHub repository holds a README and release downloads, not source code.",
          "**Mobile versus desktop.** The phone apps and the desktop app use separate version numbers, and the sources do not say whether their features match.",
          "**Offline scope.** Which AI features work with no internet beyond the local-model path is not documented.",
          "**Company.** The relationship to the Colloqi link in the site footer, and the legal entity behind the app, are not explained."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Competitors and Alternatives",
        "columns": [
          "App",
          "Platforms",
          "Price / license",
          "Key difference"
        ],
        "rows": [
          {
            "App": "[Logseq](/power-local-llm/logseq-review)",
            "Platforms": "Mac, Windows, Linux, iPhone, Android, web",
            "Price / license": "Free / AGPL-3.0",
            "Key difference": "Open-source outliner; AI only through an optional MCP server"
          },
          {
            "App": "[Tolaria](/power-local-llm/tolaria-review)",
            "Platforms": "Mac, Windows, Linux",
            "Price / license": "Free / AGPL-3.0-or-later",
            "Key difference": "Markdown files in a Git-backed vault"
          },
          {
            "App": "[SiYuan](/power-local-llm/siyuan-review)",
            "Platforms": "Mac, Windows, Linux, iPhone, Android",
            "Price / license": "Free + paid sync / AGPL-3.0",
            "Key difference": "Self-hosted, block-level references, built-in AI agent"
          }
        ],
        "note": "Confirm each app's current price, license and platforms on its own page before choosing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "Is there a Linux or Intel Mac version of Hillnote?",
            "a": "The download page title mentions Linux, but it links only to the GitHub release (an Apple-silicon Mac build and a Windows installer) and the two phone stores. No Linux or Intel Mac file was found."
          },
          {
            "q": "Which local models does Hillnote use?",
            "a": "The pricing page names Ollama and Apple Intelligence for inline edits and quick tasks. The App Store notes add a built-in offline model on iPhone plus downloadable Gemma 3 or Qwen3 on iOS 26 or later; no model list is given for the desktop."
          },
          {
            "q": "How do premium model credits work?",
            "a": "Free and Plus include 10,000 credits a month and Pro 50,000 a week; a pack of 110,000 extra credits costs $10 once. The pricing page does not say how many credits one request uses."
          },
          {
            "q": "Which version does the GitHub README describe?",
            "a": "The README says \"Currently: v0.40.9\", but the latest release is 0.43.15, so the README is out of date; this review uses the release."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Hillnote offers plain Markdown notes on your own disk, local AI through Ollama and Apple Intelligence, optional cloud models and sync, and it shipped five releases between 22 and 30 October 2026. Against that, no licence is stated, the GitHub repository publishes no source code, the App Store seller is an individual with an unexplained company link, and speed and answer quality are untested. It suits people who want Markdown files with optional AI and can start on the free plan; anyone who needs audited privacy claims should treat the policy as a declaration, not proof."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Hillnote download page](https://hillnote.com/download) — platforms and download links, checked 1 November 2026.",
          "[Hillnote pricing](https://hillnote.com/pricing) — plans, credits and local AI runtimes, checked 1 November 2026.",
          "[Hillnote privacy policy](https://hillnote.com/privacy) — data collection, sync and AI data flow, checked 1 November 2026.",
          "[Hillnote security page](https://hillnote.com/security) — encryption and sync defaults, checked 1 November 2026.",
          "[Hillnote on GitHub](https://github.com/Rajathbail/hillnote) — README, releases and assets, checked 1 November 2026.",
          "[Hillnote on the App Store](https://apps.apple.com/app/hillnote/id6754959344) — description, version history and requirements, checked 1 November 2026.",
          "[Hillnote on Google Play](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android) — listing and update date, checked 1 November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[Logseq Review](/power-local-llm/logseq-review) — an open-source, local-first outliner with an optional MCP server.",
          "[Tolaria Review](/power-local-llm/tolaria-review) — a free desktop notes app with Markdown files in a Git-backed vault.",
          "[SiYuan Review](/power-local-llm/siyuan-review) — a self-hosted knowledge workspace with a built-in AI agent.",
          "[Local LLM Software Directory](/directory) — the full catalogue of local AI tools."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Hillnote Review: Local-First Markdown Notes With On-Device AI",
      "description": "Hillnote review: a local-first Markdown notes workspace for Mac, Windows, iPhone and Android with local AI through Ollama and Apple Intelligence, optional cloud models and sync. Plans, requirements, privacy and what the sources leave unconfirmed.",
      "url": "https://www.promptquorum.com/power-local-llm/hillnote-review",
      "inLanguage": "en",
      "datePublished": "2026-11-01",
      "dateModified": "2026-11-01",
      "author": {
        "@type": "Person",
        "name": "Hans Kuepper",
        "sameAs": "https://www.linkedin.com/in/hanskuepper/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "educationalLevel": "Beginner",
      "proficiencyLevel": "Beginner",
      "audience": {
        "@type": "Audience",
        "audienceType": "Note-takers on Mac, Windows and phones evaluating a Markdown notes app with local AI"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Hillnote"
        },
        {
          "@type": "Thing",
          "name": "Markdown notes"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "On-device AI"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/power-local-llm/hillnote-review"
      }
    },
    "breadcrumbSchema": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.promptquorum.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Power Local LLM",
          "item": "https://www.promptquorum.com/power-local-llm"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Hillnote Review",
          "item": "https://www.promptquorum.com/power-local-llm/hillnote-review"
        }
      ]
    }
  },
  de: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-01",
    "dateModified": "2026-11-01",
    "next_refresh_due": "2027-05-01",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/hillnote-review-hero-de.webp",
    "title": "Hillnote-Rezension: Lokale Markdown-Notizen mit KI auf dem Gerät",
    "seoTitle": "Hillnote-Rezension: Lokale Markdown-Notizen und KI",
    "intro": "Hillnote ist ein Notiz-Workspace für Mac, Windows, iPhone, iPad und Android, der Ihre Arbeit als einfache Markdown-Dateien auf Ihrem eigenen Gerät ablegt und KI darüberlegt: lokale Modelle über Ollama und Apple Intelligence, optionale Cloud-Modelle und optionale Synchronisierung. Im App Store ist Rajath Bail als Verkäufer genannt. Diese Rezension stützt sich auf die [Download-Seite](https://hillnote.com/download), die [Preisseite](https://hillnote.com/pricing), die Datenschutzerklärung, die [GitHub-Releases](https://github.com/Rajathbail/hillnote/releases/latest) und die Store-Einträge, geprüft am 1. November 2026; PromptQuorum hat die App nicht selbst getestet.",
    "metaDescription": "Hillnote-Rezension: lokale Markdown-Notizen für Mac, Windows, iPhone und Android mit KI über Ollama, optionalen Cloud-Modellen und Sync. Gratis-Tarif.",
    "twitterDescription": "Hillnote-Rezension: Markdown-Notizen auf Ihrer eigenen Festplatte, mit lokaler KI über Ollama und Apple Intelligence und kostenpflichtigen Cloud-Extras. Was die Quellen bestätigen und was nicht.",
    "audience": "Notizen-Schreiber auf Mac, Windows oder Smartphone, die wissen wollen, wo Hillnote ihre Notizen ablegt, was die KI lokal leistet, was die Tarife kosten und welche Aussagen die Quellen offenlassen.",
    "readTime": "6 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Hillnote Rezension",
    "targetKeywords": [
      "hillnote rezension",
      "hillnote app",
      "markdown notiz app lokal",
      "notiz app mit lokaler ki",
      "notiz app mit ollama",
      "offline ki notiz app",
      "hillnote preise"
    ],
    "current_models_mentioned": [
      "Gemma 3",
      "Qwen3",
      "Claude",
      "GPT",
      "Gemini"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "iPhone",
      "Windows PC"
    ],
    "leadAnswerBlock": "**Hillnote (Desktop-Version 0.43.15, veröffentlicht am 30. Oktober 2026) ist ein Markdown-Notiz-Workspace für Mac, Windows, iPhone, iPad und Android, der Ihre Dateien auf Ihrer eigenen Festplatte hält und lokale sowie Cloud-KI ergänzt.** Der Gratis-Tarif deckt Editor und lokale KI ab; kostenpflichtige Jahrestarife bringen Sync-Speicher, Veröffentlichen, Routinen und stärkere Cloud-Modell-Nutzung. Alle Angaben stammen von der Website des Herstellers, seinen Richtlinien, GitHub und den Store-Einträgen.",
    "quickAnswerTop": {
      "de": {
        "question": "Braucht Hillnote ein Konto oder eine Internetverbindung?",
        "answer": "Laut Hersteller nein: Notizen sind einfache Markdown-Dateien in einem Ordner Ihrer Wahl, die App funktioniert offline und braucht keine Registrierung, und die Synchronisierung ist standardmäßig aus. Cloud-Modelle, Sync und Veröffentlichen sind die Teile, die Internet brauchen.",
        "bullets": [
          "Sync wird pro Workspace eingestellt, sodass ein Workspace auf dem Gerät bleiben kann, während ein anderer synchronisiert.",
          "Mac- und Windows-Builds kommen von GitHub Releases; die Handy-Apps aus dem App Store und von Google Play.",
          "Claude, ChatGPT, Codex und Cursor können sich über MCP verbinden oder den Workspace-Ordner direkt lesen.",
          "Hillnote legt Kontextdateien AGENTS.md und CLAUDE.md an, damit externe KI-Werkzeuge sich im Workspace zurechtfinden."
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "Kurzantwort",
        "anchor": "quick-answer"
      },
      {
        "label": "Was ist Hillnote?",
        "anchor": "what-is-hillnote"
      },
      {
        "label": "Bezugsquelle",
        "anchor": "get-it"
      },
      {
        "label": "Anforderungen",
        "anchor": "requirements"
      },
      {
        "label": "So gelingt der Einstieg",
        "anchor": "getting-started"
      },
      {
        "label": "Von den Quellen bestätigte Funktionen",
        "anchor": "key-features"
      },
      {
        "label": "Datenfluss und Datenschutz",
        "anchor": "privacy"
      },
      {
        "label": "Für wen sich die App eignet",
        "anchor": "who-should-use"
      },
      {
        "label": "Was wir nicht überprüfen konnten",
        "anchor": "who-should-not-use"
      },
      {
        "label": "Wettbewerber und Alternativen",
        "anchor": "vs-alternatives"
      },
      {
        "label": "Häufig gestellte Fragen",
        "anchor": "faq"
      },
      {
        "label": "Fazit",
        "anchor": "verdict"
      },
      {
        "label": "Quellen",
        "anchor": "sources"
      },
      {
        "label": "Weiterführende Artikel",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "Zusammenfassung",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Hillnote ist ein lokaler Markdown-Notiz-Workspace für Mac, Windows, iPhone, iPad und Android mit KI auf dem Gerät, optionalen Cloud-Modellen und optionalem Sync."
          },
          {
            "type": "plain-terms",
            "text": "Ihre Notizen sind gewöhnliche Textdateien auf Ihrer Festplatte; ein KI-Assistent kann sie lesen und bearbeiten, entweder mit einem Modell auf Ihrem Rechner oder mit einem Cloud-Modell Ihrer Wahl."
          }
        ],
        "items": [
          "Pflege: Die Desktop-Version 0.43.15 erschien am 30. Oktober 2026, die iPhone- und Android-Apps wurden am 29. Oktober 2026 aktualisiert; eine Warnung vor veralteten Projekten entfällt.",
          "Kosten: ein Gratis-Tarif plus zwei kostenpflichtige Jahrestarife; die Beträge stehen in der Tabelle „Bezugsquelle“.",
          "KI: lokale Modelle über Ollama und Apple Intelligence, ein eingebautes Offline-Modell auf dem iPhone und optionale Cloud-Modelle.",
          "Quellcode: Es ist keine Lizenz angegeben, und das GitHub-Repository enthält nur eine README und Release-Downloads.",
          "Hersteller: ein einzelner Entwickler als App-Store-Verkäufer; die Fußzeile der Website verlinkt auf ein Unternehmen, Colloqi, ohne die Beziehung zu erklären."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Diese Rezension stützt sich auf hillnote.com, die Datenschutzerklärung, die GitHub-Releases und die Store-Einträge, geprüft am 1. November 2026. PromptQuorum hat die App weder installiert noch ausgeführt oder gemessen; Geschwindigkeit, Notizqualität und Antwortqualität werden daher nicht bewertet."
          }
        ]
      },
      "overview": {
        "id": "what-is-hillnote",
        "title": "Was ist Hillnote?",
        "content": [
          "**Hillnote ist eine Workspace-App zum Schreiben, Planen und Sammeln von Ideen auf Basis einfacher Markdown-Dateien, die auf Ihrem Gerät bleiben.** Der App Store führt sie als „HillNote“ in der Kategorie Produktivität vom Verkäufer Rajath Bail; die erste iPhone-Version stammt vom 16. Juni 2026. Website und Apps schreiben den Namen „Hillnote“.",
          "Der Hersteller beschreibt sie als gedacht für Macher, Autoren und kleine Teams: ein Markdown-Editor, Schnellnotizen, ein eingebauter Chat, der Ihre Dateien liest und bearbeitet, kleine HTML-Werkzeuge als Widgets und eine kostenlose Sync-Stufe zwischen Handy und Desktop."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Bezugsquelle",
        "content": [
          "**Hillnote ist auf Mac, Windows, iPhone, iPad und Android kostenlos herunterladbar; die Desktop-Installer liegen auf GitHub, nicht auf dem eigenen Server des Herstellers.**"
        ],
        "columns": [
          "Option",
          "Bezug"
        ],
        "rows": [
          {
            "Option": "Mac",
            "Bezug": "[Hillnote auf GitHub Releases](https://github.com/Rajathbail/hillnote/releases/latest), .dmg oder .zip für Apple Silicon"
          },
          {
            "Option": "Windows",
            "Bezug": "[Hillnote auf GitHub Releases](https://github.com/Rajathbail/hillnote/releases/latest), Setup-.exe"
          },
          {
            "Option": "iPhone und iPad",
            "Bezug": "[Hillnote im App Store](https://apps.apple.com/app/hillnote/id6754959344), kostenlos mit In-App-Käufen"
          },
          {
            "Option": "Android",
            "Bezug": "[Hillnote bei Google Play](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android)"
          },
          {
            "Option": "Tarife",
            "Bezug": "Free 0 $; Plus 20 $ pro Jahr; Pro 200 $ pro Jahr (US-Dollar auf der Herstellerseite)"
          },
          {
            "Option": "Zusatzpakete",
            "Bezug": "110.000 Zusatzguthaben 10 $ einmalig; 1 GB Sync-Speicher 10 $ pro Jahr"
          },
          {
            "Option": "Website",
            "Bezug": "[hillnote.com](https://hillnote.com)"
          },
          {
            "Option": "Datenschutzerklärung",
            "Bezug": "[hillnote.com/privacy](https://hillnote.com/privacy)"
          },
          {
            "Option": "Quellcode",
            "Bezug": "Kein Quellcode gefunden; [das GitHub-Repository](https://github.com/Rajathbail/hillnote) enthält nur eine README"
          }
        ],
        "note": "Geprüfte Version: Desktop 0.43.15 (30. Oktober 2026, GitHub). Der App Store nennt 0.33.46 (29. Oktober 2026), Google Play zeigt 0.33.47 (29. Oktober 2026); Handy und Desktop nutzen getrennte Versionsnummern, und der Mac-Download ist ein Build für Apple Silicon. Die Website nennt Preise nur in US-Dollar; In-App-Preise einzelner Stores wurden nicht geprüft."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Anforderungen",
        "content": [
          "**Der App Store nennt iOS oder iPadOS 16.0 als Minimum; für Mac und Windows nennen die Quellen kein Minimum.**"
        ],
        "columns": [
          "Punkt",
          "Was die Quellen sagen"
        ],
        "rows": [
          {
            "Punkt": "Desktop",
            "Was die Quellen sagen": "Mac: .dmg oder .zip für Apple Silicon; Windows: Setup-.exe"
          },
          {
            "Punkt": "iPhone und iPad",
            "Was die Quellen sagen": "iOS oder iPadOS 16.0 oder neuer laut App Store"
          },
          {
            "Punkt": "Offline-Modelle auf dem iPhone",
            "Was die Quellen sagen": "Downloads von Gemma 3 oder Qwen3 brauchen iOS 26 oder neuer; ein In-App-Test prüft Speicher, Platz und Tempo"
          },
          {
            "Punkt": "Lokale KI auf dem Desktop",
            "Was die Quellen sagen": "Eine lokale Ollama-Installation oder Apple Intelligence laut Preisseite"
          },
          {
            "Punkt": "Konto",
            "Was die Quellen sagen": "Laut Hersteller für die lokale Nutzung nicht nötig; Sync erfasst eine E-Mail-Adresse zur Anmeldung"
          }
        ],
        "note": "Für lokale Modelle auf dem Desktop werden keine Angaben zu RAM, VRAM oder Speicherplatz gemacht."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "So gelingt der Einstieg",
        "content": [
          "**Die Schritte folgen der eigenen Beschreibung des Herstellers; PromptQuorum hat sie nicht ausgeführt.**"
        ],
        "numberedItems": [
          {
            "title": "App installieren",
            "whyItMatters": "Laden Sie den Mac- oder Windows-Installer von GitHub Releases oder die Handy-App aus dem App Store oder von Google Play."
          },
          {
            "title": "Onboarding-Workspace öffnen",
            "whyItMatters": "Laut Dokumentation des Herstellers legt die App einen Onboarding-Workspace an, den man in etwa zwei Minuten durcharbeitet."
          },
          {
            "title": "Festlegen, wo die KI läuft",
            "whyItMatters": "Nutzen Sie ein lokales Modell über Ollama oder Apple Intelligence, lassen Sie den Automatikmodus schwierigere Aufgaben an ein Cloud-Modell übergeben, oder tragen Sie bei Plus und Pro einen eigenen API-Schlüssel ein."
          },
          {
            "title": "Über Sync entscheiden",
            "whyItMatters": "Sync ist standardmäßig aus; schalten Sie es pro Workspace ein, wenn Sie dieselben Notizen auf jedem Gerät wollen."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Von den Quellen bestätigte Funktionen",
        "content": [
          "**Alle folgenden Punkte stammen von der Website des Herstellers, den Store-Einträgen oder der Datenschutzerklärung; keiner wurde unabhängig getestet.**"
        ],
        "items": [
          "**Markdown auf der Festplatte.** Notizen sind Standard-Markdown-Dateien in einem Ordner Ihrer Wahl, mit Verknüpfungen zwischen Dokumenten, einem Dokumentenregister und Seite-an-Seite-Vorschauen von Webseiten und PDFs.",
          "**Lokale und Cloud-KI.** Direkte Änderungen und schnelle Aufgaben nutzen Ollama oder Apple Intelligence auf dem Gerät; ein Automatikmodus übergibt schwierigere Aufgaben an Claude, GPT und andere Spitzenmodelle.",
          "**Chat mit Ihren Dateien.** Der eingebaute Chat liest Ihre Dateien, bearbeitet sie und legt neue an, so die Beschreibung im App Store.",
          "**Anbindung an andere KI-Werkzeuge.** Claude, ChatGPT, Codex, Cursor und andere verbinden sich über lokales oder Cloud-MCP.",
          "**Kostenpflichtige Extras.** Veröffentlichen eines Workspace (Plus: einen, Pro: bis zu sechs, bei Pro mit eigener Domain), Routinen (Plus: bis zu drei, Pro: bis zu fünf) und eigene API-Schlüssel."
        ],
        "note": "Die Quellen sagen nicht, welche KI-Funktionen über den lokalen Modellpfad hinaus vollständig offline laufen."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenfluss und Datenschutz",
        "content": [
          "**Die Datenschutzerklärung sagt, lokale Daten würden nicht erhoben: Dokumente, Bearbeitungsverlauf und Einstellungen bleiben auf Ihrer Festplatte, bis Sie eine Funktion einschalten, die sie versendet.** Bei ausgeschaltetem Sync erhebt Hillnote laut Erklärung weder Ihre Dokumentinhalte noch Ihr Bearbeitungsverhalten. Bei eingeschaltetem Sync nennt sie Ihre E-Mail-Adresse zur Anmeldung, einen optionalen Anzeigenamen, Sync- und Aktivitätsmetadaten, Rollen bei der Zusammenarbeit, veröffentlichte Inhalte und den Abrechnungsstatus.",
          "Synchronisierte Workspaces liegen bei AWS. Notizen ohne Passwort kann der Dienst lesen, wodurch Suche, KI, Routinen und Veröffentlichen erst möglich werden; passwortgeschützte Notizen werden auf Ihrem Gerät verschlüsselt, und der Schlüssel erreicht laut Erklärung nie die Server von Hillnote. Die Nutzung von Premium-KI ist optional: Laut Erklärung gehen Anfragen und Inhalte an die Server des Modellanbieters (OpenAI, Claude oder Gemini), der sie nach eigenen Richtlinien verwenden kann. Die Website nutzt Google Analytics, die Erklärung nennt keine Werbe-SDKs, und Absturzprotokolle werden nur mit Einwilligung ausgewertet."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Das sind Erklärungen des Herstellers, keine Prüfergebnisse, und der Quellcode der App ist nicht veröffentlicht. PromptQuorum hat den Netzwerkverkehr nicht untersucht. Die Erklärung nennt keine Postanschrift und unterliegt indischem Recht, Streitigkeiten gehören vor die Gerichte in Bangalore."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen sich die App eignet",
        "items": [
          "**Markdown-Schreiber**, die Dateien wollen, die sich in jedem Editor öffnen lassen und auf der eigenen Festplatte bleiben.",
          "**Ollama-Nutzer**, die einen Assistenten wollen, der ihre Notizen mit einem Modell bearbeitet, das schon auf dem Rechner liegt.",
          "**Menschen, die mit Claude, ChatGPT oder Cursor arbeiten** und möchten, dass diese Werkzeuge dieselben Notizen lesen und bearbeiten."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht überprüfen konnten",
        "items": [
          "**Leistung.** Geschwindigkeit, Speicherverbrauch, Akkulast und die Qualität lokaler Modellantworten sind ungetestet.",
          "**Lizenz und Quellcode.** Es ist keine Lizenz angegeben, und das GitHub-Repository enthält eine README und Release-Downloads, keinen Quellcode.",
          "**Handy gegenüber Desktop.** Handy-Apps und Desktop-App nutzen getrennte Versionsnummern, und die Quellen sagen nicht, ob ihre Funktionen übereinstimmen.",
          "**Offline-Umfang.** Welche KI-Funktionen über den lokalen Modellpfad hinaus ohne Internet laufen, ist nicht dokumentiert.",
          "**Unternehmen.** Die Beziehung zum Colloqi-Link in der Fußzeile der Website und die juristische Person hinter der App werden nicht erklärt."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Wettbewerber und Alternativen",
        "columns": [
          "App",
          "Plattformen",
          "Preis / Lizenz",
          "Hauptunterschied"
        ],
        "rows": [
          {
            "App": "[Logseq](/de/power-local-llm/logseq-review)",
            "Plattformen": "Mac, Windows, Linux, iPhone, Android, Web",
            "Preis / Lizenz": "Gratis / AGPL-3.0",
            "Hauptunterschied": "Quelloffener Outliner; KI nur über optionalen MCP-Server"
          },
          {
            "App": "[Tolaria](/de/power-local-llm/tolaria-review)",
            "Plattformen": "Mac, Windows, Linux",
            "Preis / Lizenz": "Gratis / AGPL-3.0-or-later",
            "Hauptunterschied": "Markdown-Dateien in einem Git-gestützten Vault"
          },
          {
            "App": "[SiYuan](/de/power-local-llm/siyuan-review)",
            "Plattformen": "Mac, Windows, Linux, iPhone, Android",
            "Preis / Lizenz": "Gratis + bezahlter Sync / AGPL-3.0",
            "Hauptunterschied": "Selbst gehostet, Verweise auf Blockebene, eingebauter KI-Agent"
          }
        ],
        "note": "Prüfen Sie Preis, Lizenz und Plattformen jeder App vor der Entscheidung auf deren eigener Seite."
      },
      "faq": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Gibt es Hillnote für Linux oder für Intel-Macs?",
            "a": "Der Titel der Download-Seite erwähnt Linux, verlinkt aber nur auf das GitHub-Release (ein Mac-Build für Apple Silicon und ein Windows-Installer) und die beiden Handy-Stores. Eine Datei für Linux oder Intel-Macs wurde nicht gefunden."
          },
          {
            "q": "Welche lokalen Modelle nutzt Hillnote?",
            "a": "Die Preisseite nennt Ollama und Apple Intelligence für direkte Änderungen und schnelle Aufgaben. Die App-Store-Hinweise ergänzen ein eingebautes Offline-Modell auf dem iPhone sowie herunterladbare Gemma 3 oder Qwen3 ab iOS 26; für den Desktop wird keine Modellliste genannt."
          },
          {
            "q": "Wie funktionieren die Premium-Modell-Guthaben?",
            "a": "Free und Plus enthalten 10.000 Guthaben pro Monat, Pro 50.000 pro Woche; ein Paket mit 110.000 Zusatzguthaben kostet einmalig 10 $. Die Preisseite sagt nicht, wie viel Guthaben eine Anfrage verbraucht."
          },
          {
            "q": "Welche Version beschreibt die GitHub-README?",
            "a": "Die README sagt „Currently: v0.40.9“, das neueste Release ist aber 0.43.15; die README ist also veraltet, diese Rezension nutzt das Release."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "Hillnote bietet einfache Markdown-Notizen auf Ihrer eigenen Festplatte, lokale KI über Ollama und Apple Intelligence, optionale Cloud-Modelle und Sync und hat zwischen dem 22. und 30. Oktober 2026 fünf Releases veröffentlicht. Dagegen ist keine Lizenz angegeben, das GitHub-Repository veröffentlicht keinen Quellcode, als App-Store-Verkäufer ist eine Einzelperson genannt, mit unerklärtem Firmenlink, und Geschwindigkeit sowie Antwortqualität sind ungetestet. Die App passt zu Menschen, die Markdown-Dateien mit optionaler KI wollen und mit dem Gratis-Tarif starten können; wer geprüfte Datenschutzangaben braucht, sollte die Erklärung als Aussage, nicht als Beweis lesen."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[Hillnote-Download-Seite](https://hillnote.com/download) — Plattformen und Download-Links, geprüft am 1. November 2026.",
          "[Hillnote-Preise](https://hillnote.com/pricing) — Tarife, Guthaben und lokale KI-Laufzeiten, geprüft am 1. November 2026.",
          "[Hillnote-Datenschutzerklärung](https://hillnote.com/privacy) — Datenerhebung, Sync und KI-Datenfluss, geprüft am 1. November 2026.",
          "[Hillnote-Sicherheitsseite](https://hillnote.com/security) — Verschlüsselung und Sync-Voreinstellungen, geprüft am 1. November 2026.",
          "[Hillnote auf GitHub](https://github.com/Rajathbail/hillnote) — README, Releases und Dateien, geprüft am 1. November 2026.",
          "[Hillnote im App Store](https://apps.apple.com/app/hillnote/id6754959344) — Beschreibung, Versionsverlauf und Anforderungen, geprüft am 1. November 2026.",
          "[Hillnote bei Google Play](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android) — Eintrag und Aktualisierungsdatum, geprüft am 1. November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[Logseq-Rezension](/de/power-local-llm/logseq-review) — ein quelloffener, lokaler Outliner mit optionalem MCP-Server.",
          "[Tolaria-Rezension](/de/power-local-llm/tolaria-review) — eine kostenlose Desktop-Notiz-App mit Markdown-Dateien in einem Git-gestützten Vault.",
          "[SiYuan-Rezension](/de/power-local-llm/siyuan-review) — ein selbst gehosteter Wissens-Workspace mit eingebautem KI-Agenten.",
          "[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools."
        ]
      }
    }
  },
  es: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-01",
    "dateModified": "2026-11-01",
    "next_refresh_due": "2027-05-01",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/hillnote-review-hero-es.webp",
    "title": "Reseña de Hillnote: notas Markdown locales con IA en el dispositivo",
    "seoTitle": "Reseña de Hillnote: notas Markdown locales con IA",
    "intro": "Hillnote es un espacio de notas para Mac, Windows, iPhone, iPad y Android que guarda tu trabajo como archivos Markdown simples en tu propio dispositivo y le suma IA: modelos locales mediante Ollama y Apple Intelligence, modelos en la nube opcionales y sincronización opcional. La App Store indica a Rajath Bail como vendedor. Esta reseña se basa en la [página de descarga](https://hillnote.com/download), la [página de precios](https://hillnote.com/pricing), la política de privacidad, las [versiones de GitHub](https://github.com/Rajathbail/hillnote/releases/latest) y las fichas de las tiendas, consultadas el 1 de noviembre de 2026; PromptQuorum no ha probado la app en la práctica.",
    "metaDescription": "Reseña de Hillnote: notas Markdown locales para Mac, Windows, iPhone y Android con IA vía Ollama, nube y sincronización opcionales. Plan gratis.",
    "twitterDescription": "Reseña de Hillnote: notas Markdown en tu propio disco, con IA local mediante Ollama y Apple Intelligence y extras de pago en la nube. Qué confirman las fuentes y qué no.",
    "audience": "Personas que toman notas en Mac, Windows o móvil y quieren saber dónde guarda Hillnote sus notas, qué hace su IA en local, cuánto cuestan los planes y qué afirmaciones dejan abiertas las fuentes.",
    "readTime": "6 min de lectura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "reseña de Hillnote",
    "targetKeywords": [
      "reseña hillnote",
      "app hillnote",
      "app de notas markdown local",
      "app de notas con ia local",
      "app de notas con ollama",
      "app de notas con ia sin conexión",
      "precio hillnote"
    ],
    "current_models_mentioned": [
      "Gemma 3",
      "Qwen3",
      "Claude",
      "GPT",
      "Gemini"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "iPhone",
      "Windows PC"
    ],
    "leadAnswerBlock": "**Hillnote (versión de escritorio 0.43.15, publicada el 30 de octubre de 2026) es un espacio de notas Markdown para Mac, Windows, iPhone, iPad y Android que guarda tus archivos en tu propio disco y añade IA local y en la nube.** El plan gratuito cubre el editor y la IA local; los planes anuales de pago añaden almacenamiento sincronizado, publicación, rutinas y un uso más intenso de modelos en la nube. Todas las afirmaciones proceden del sitio del creador, sus páginas de políticas, GitHub y las fichas de las tiendas.",
    "quickAnswerTop": {
      "es": {
        "question": "¿Hillnote necesita una cuenta o conexión a internet?",
        "answer": "Según el creador, no: las notas son archivos Markdown simples en una carpeta que eliges, la app funciona sin conexión y sin registro, y la sincronización está desactivada por defecto. Los modelos en la nube, la sincronización y la publicación son las partes que necesitan internet.",
        "bullets": [
          "La sincronización se configura por espacio de trabajo, así que uno puede quedarse en el dispositivo mientras otro se sincroniza.",
          "Las versiones de Mac y Windows vienen de GitHub Releases; las apps móviles, de la App Store y Google Play.",
          "Claude, ChatGPT, Codex y Cursor pueden conectarse por MCP o leer directamente la carpeta del espacio de trabajo.",
          "Hillnote escribe archivos de contexto AGENTS.md y CLAUDE.md para que las herramientas de IA externas se orienten en el espacio de trabajo."
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "Respuesta rápida",
        "anchor": "quick-answer"
      },
      {
        "label": "¿Qué es Hillnote?",
        "anchor": "what-is-hillnote"
      },
      {
        "label": "Cómo conseguirla",
        "anchor": "get-it"
      },
      {
        "label": "Requisitos",
        "anchor": "requirements"
      },
      {
        "label": "Cómo empezar",
        "anchor": "getting-started"
      },
      {
        "label": "Funciones confirmadas por las fuentes",
        "anchor": "key-features"
      },
      {
        "label": "Flujo de datos y privacidad",
        "anchor": "privacy"
      },
      {
        "label": "Para quién es",
        "anchor": "who-should-use"
      },
      {
        "label": "Lo que no pudimos verificar",
        "anchor": "who-should-not-use"
      },
      {
        "label": "Competidores y alternativas",
        "anchor": "vs-alternatives"
      },
      {
        "label": "Preguntas frecuentes",
        "anchor": "faq"
      },
      {
        "label": "Veredicto",
        "anchor": "verdict"
      },
      {
        "label": "Fuentes",
        "anchor": "sources"
      },
      {
        "label": "Lecturas relacionadas",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "Puntos clave",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Hillnote es un espacio de notas Markdown con enfoque local para Mac, Windows, iPhone, iPad y Android, con IA en el dispositivo, modelos en la nube y sincronización opcionales."
          },
          {
            "type": "plain-terms",
            "text": "Tus notas son archivos de texto normales en tu disco; un asistente de IA puede leerlas y editarlas, con un modelo en tu equipo o con un modelo en la nube que tú elijas."
          }
        ],
        "items": [
          "Mantenimiento: la versión de escritorio 0.43.15 salió el 30 de octubre de 2026 y las apps de iPhone y Android se actualizaron el 29 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.",
          "Coste: un plan gratuito y dos planes anuales de pago; las cifras están en la tabla «Cómo conseguirla».",
          "IA: modelos locales mediante Ollama y Apple Intelligence, un modelo sin conexión integrado en iPhone y modelos en la nube opcionales.",
          "Código: no se indica licencia y el repositorio de GitHub solo contiene un README y descargas de versiones.",
          "Creador: un desarrollador individual figura como vendedor en la App Store; el pie del sitio enlaza a una empresa, Colloqi, sin explicar la relación."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta reseña se basa en hillnote.com, su política de privacidad, las versiones de GitHub y las fichas de las tiendas, consultadas el 1 de noviembre de 2026. PromptQuorum no ha instalado, ejecutado ni medido la app, así que no se evalúan la velocidad ni la calidad de las notas o las respuestas."
          }
        ]
      },
      "overview": {
        "id": "what-is-hillnote",
        "title": "¿Qué es Hillnote?",
        "content": [
          "**Hillnote es una app de espacio de trabajo para escribir, planificar y reunir ideas, basada en archivos Markdown simples que se quedan en tu dispositivo.** La App Store la lista como «HillNote» en la categoría Productividad, del vendedor Rajath Bail, y la primera versión para iPhone es del 16 de junio de 2026; el sitio y las apps escriben el nombre «Hillnote».",
          "El creador la describe como pensada para creadores, escritores y equipos pequeños: un editor Markdown, notas rápidas, un chat integrado que lee y edita tus archivos, pequeñas herramientas HTML que se fijan como widgets y un nivel de sincronización gratuito entre móvil y ordenador."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo conseguirla",
        "content": [
          "**Hillnote se descarga gratis en Mac, Windows, iPhone, iPad y Android; los instaladores de escritorio están alojados en GitHub, no en el servidor del creador.**"
        ],
        "columns": [
          "Opción",
          "Cómo conseguirla"
        ],
        "rows": [
          {
            "Opción": "Mac",
            "Cómo conseguirla": "[Hillnote en GitHub Releases](https://github.com/Rajathbail/hillnote/releases/latest), .dmg o .zip para Apple silicon"
          },
          {
            "Opción": "Windows",
            "Cómo conseguirla": "[Hillnote en GitHub Releases](https://github.com/Rajathbail/hillnote/releases/latest), instalador .exe"
          },
          {
            "Opción": "iPhone y iPad",
            "Cómo conseguirla": "[Hillnote en la App Store](https://apps.apple.com/app/hillnote/id6754959344), gratis con compras dentro de la app"
          },
          {
            "Opción": "Android",
            "Cómo conseguirla": "[Hillnote en Google Play](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android)"
          },
          {
            "Opción": "Planes",
            "Cómo conseguirla": "Free $0; Plus $20 al año; Pro $200 al año (dólares estadounidenses en el sitio del creador)"
          },
          {
            "Opción": "Extras",
            "Cómo conseguirla": "110.000 créditos adicionales $10 una vez; 1 GB de almacenamiento sincronizado $10 al año"
          },
          {
            "Opción": "Sitio web",
            "Cómo conseguirla": "[hillnote.com](https://hillnote.com)"
          },
          {
            "Opción": "Política de privacidad",
            "Cómo conseguirla": "[hillnote.com/privacy](https://hillnote.com/privacy)"
          },
          {
            "Opción": "Código fuente",
            "Cómo conseguirla": "No se encontró código fuente; [el repositorio de GitHub](https://github.com/Rajathbail/hillnote) solo contiene un README"
          }
        ],
        "note": "Versión revisada: escritorio 0.43.15 (30 de octubre de 2026, GitHub). La App Store indica 0.33.46 (29 de octubre de 2026) y Google Play muestra 0.33.47 (29 de octubre de 2026); móvil y escritorio usan números de versión distintos, y la descarga de Mac es una versión para Apple silicon. El sitio da los precios solo en dólares estadounidenses; no se comprobaron los precios dentro de la app en cada tienda."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**La App Store indica iOS o iPadOS 16.0 como mínimo; las fuentes no mencionan mínimo para Mac ni Windows.**"
        ],
        "columns": [
          "Elemento",
          "Qué dicen las fuentes"
        ],
        "rows": [
          {
            "Elemento": "Escritorio",
            "Qué dicen las fuentes": "Mac: .dmg o .zip para Apple silicon; Windows: instalador .exe"
          },
          {
            "Elemento": "iPhone y iPad",
            "Qué dicen las fuentes": "iOS o iPadOS 16.0 o posterior, según la App Store"
          },
          {
            "Elemento": "Modelos sin conexión en iPhone",
            "Qué dicen las fuentes": "Las descargas de Gemma 3 o Qwen3 requieren iOS 26 o posterior; una prueba en la app revisa memoria, almacenamiento y velocidad"
          },
          {
            "Elemento": "IA local en escritorio",
            "Qué dicen las fuentes": "Una instalación local de Ollama o Apple Intelligence, según la página de precios"
          },
          {
            "Elemento": "Cuenta",
            "Qué dicen las fuentes": "No hace falta para el uso local, según el creador; la sincronización recoge un correo para iniciar sesión"
          }
        ],
        "note": "No se indican cifras de RAM, VRAM ni espacio en disco para los modelos locales en escritorio."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Cómo empezar",
        "content": [
          "**Los pasos siguen la descripción del propio creador; PromptQuorum no los ha ejecutado.**"
        ],
        "numberedItems": [
          {
            "title": "Instala la app",
            "whyItMatters": "Descarga el instalador de Mac o Windows desde GitHub Releases, o la app móvil desde la App Store o Google Play."
          },
          {
            "title": "Abre el espacio de bienvenida",
            "whyItMatters": "Según la documentación del creador, la app crea un espacio de bienvenida que se recorre en unos dos minutos."
          },
          {
            "title": "Elige dónde se ejecuta la IA",
            "whyItMatters": "Usa un modelo local mediante Ollama o Apple Intelligence, deja que el modo automático pase las tareas difíciles a un modelo en la nube, o añade tu propia clave de API en Plus y Pro."
          },
          {
            "title": "Decide sobre la sincronización",
            "whyItMatters": "La sincronización está desactivada por defecto; actívala por espacio de trabajo si quieres las mismas notas en cada dispositivo."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones confirmadas por las fuentes",
        "content": [
          "**Cada punto siguiente procede del sitio del creador, las fichas de las tiendas o la política de privacidad; ninguno se ha probado de forma independiente.**"
        ],
        "items": [
          "**Markdown en el disco.** Las notas son archivos Markdown estándar en una carpeta que eliges, con enlaces entre documentos, un registro de documentos y vistas previas en paralelo de páginas web y PDF.",
          "**IA local y en la nube.** Las ediciones en línea y las tareas rápidas usan Ollama o Apple Intelligence en el dispositivo; un modo automático pasa las tareas más difíciles a Claude, GPT y otros modelos de vanguardia.",
          "**Chat con tus archivos.** El chat integrado lee tus archivos, los edita y crea otros nuevos, según la descripción de la App Store.",
          "**Conexión con otras herramientas de IA.** Claude, ChatGPT, Codex, Cursor y otras se conectan mediante MCP local o en la nube.",
          "**Extras de pago.** Publicar un espacio de trabajo (Plus: uno, Pro: hasta seis, con dominio propio en Pro), rutinas (Plus: hasta tres, Pro: hasta cinco) y claves de API propias."
        ],
        "note": "Las fuentes no dicen qué funciones de IA funcionan totalmente sin conexión más allá de la vía de los modelos locales."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flujo de datos y privacidad",
        "content": [
          "**La política de privacidad dice que los datos locales no se recopilan: documentos, historial de ediciones y ajustes permanecen en tu disco hasta que activas una función que los envía.** Con la sincronización desactivada, la política afirma que Hillnote no recopila ni el contenido de tus documentos ni tu comportamiento de edición. Con ella activada, enumera tu correo electrónico para iniciar sesión, un nombre visible opcional, metadatos de sincronización y actividad, roles de colaboración, contenido publicado y estado de facturación.",
          "Los espacios sincronizados se almacenan en AWS. El servicio puede leer las notas sin contraseña, lo que hace posibles la búsqueda, la IA, las rutinas y la publicación; las notas protegidas con contraseña se cifran en tu dispositivo y, según la política, la clave nunca llega a los servidores de Hillnote. El uso de IA premium es opcional: la política dice que las consultas y el contenido van a los servidores del proveedor del modelo (OpenAI, Claude o Gemini), que puede usarlos según sus propias políticas. El sitio web usa Google Analytics, la política no menciona SDK publicitarios y los registros de fallos solo se analizan con consentimiento."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Son declaraciones del creador, no resultados de una auditoría, y el código fuente de la app no está publicado. PromptQuorum no ha inspeccionado el tráfico de red. La política no da dirección postal y se rige por la ley india, con los litigios ante los tribunales de Bangalore."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quién es",
        "items": [
          "**Quienes escriben en Markdown** y quieren archivos que se abran en cualquier editor y se queden en su propio disco.",
          "**Usuarios de Ollama** que quieren un asistente que edite sus notas con un modelo que ya tienen en el equipo.",
          "**Quienes trabajan con Claude, ChatGPT o Cursor** y quieren que esas herramientas lean y editen las mismas notas."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Rendimiento.** La velocidad, el uso de memoria, el consumo de batería y la calidad de las respuestas de los modelos locales no se han probado.",
          "**Licencia y código.** No se indica licencia, y el repositorio de GitHub contiene un README y descargas de versiones, no código fuente.",
          "**Móvil frente a escritorio.** Las apps móviles y la de escritorio usan números de versión distintos, y las fuentes no dicen si sus funciones coinciden.",
          "**Alcance sin conexión.** No se documenta qué funciones de IA funcionan sin internet más allá de la vía de los modelos locales.",
          "**Empresa.** La relación con el enlace a Colloqi del pie del sitio y la entidad legal detrás de la app no se explican."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Competidores y alternativas",
        "columns": [
          "App",
          "Plataformas",
          "Precio / licencia",
          "Diferencia clave"
        ],
        "rows": [
          {
            "App": "[Logseq](/es/power-local-llm/logseq-review)",
            "Plataformas": "Mac, Windows, Linux, iPhone, Android, web",
            "Precio / licencia": "Gratis / AGPL-3.0",
            "Diferencia clave": "Outliner de código abierto; IA solo mediante un servidor MCP opcional"
          },
          {
            "App": "[Tolaria](/es/power-local-llm/tolaria-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Precio / licencia": "Gratis / AGPL-3.0-or-later",
            "Diferencia clave": "Archivos Markdown en una bóveda respaldada por Git"
          },
          {
            "App": "[SiYuan](/es/power-local-llm/siyuan-review)",
            "Plataformas": "Mac, Windows, Linux, iPhone, Android",
            "Precio / licencia": "Gratis + sincronización de pago / AGPL-3.0",
            "Diferencia clave": "Autoalojado, referencias por bloque, agente de IA integrado"
          }
        ],
        "note": "Confirma el precio, la licencia y las plataformas de cada app en su propia página antes de elegir."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿Hay una versión de Hillnote para Linux o para Mac con Intel?",
            "a": "El título de la página de descarga menciona Linux, pero solo enlaza con la versión de GitHub (una versión de Mac para Apple silicon y un instalador de Windows) y con las dos tiendas móviles. No se encontró ningún archivo para Linux ni para Mac con Intel."
          },
          {
            "q": "¿Qué modelos locales usa Hillnote?",
            "a": "La página de precios nombra Ollama y Apple Intelligence para ediciones en línea y tareas rápidas. Las notas de la App Store añaden un modelo sin conexión integrado en iPhone y Gemma 3 o Qwen3 descargables con iOS 26 o posterior; no se da lista de modelos para escritorio."
          },
          {
            "q": "¿Cómo funcionan los créditos de los modelos premium?",
            "a": "Free y Plus incluyen 10.000 créditos al mes y Pro 50.000 a la semana; un paquete de 110.000 créditos adicionales cuesta $10 una vez. La página de precios no dice cuántos créditos gasta una solicitud."
          },
          {
            "q": "¿Qué versión describe el README de GitHub?",
            "a": "El README dice «Currently: v0.40.9», pero la última versión es la 0.43.15, así que el README está desactualizado; esta reseña usa la versión publicada."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "Hillnote ofrece notas Markdown simples en tu propio disco, IA local mediante Ollama y Apple Intelligence, modelos en la nube y sincronización opcionales, y publicó cinco versiones entre el 22 y el 30 de octubre de 2026. En contra, no se indica licencia, el repositorio de GitHub no publica código fuente, el vendedor de la App Store es una persona física, con un enlace de empresa sin explicar, y la velocidad y la calidad de las respuestas no se han probado. Encaja con quien quiere archivos Markdown con IA opcional y puede empezar con el plan gratuito; quien necesite afirmaciones de privacidad auditadas debe leer la política como una declaración, no como una prueba."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Página de descarga de Hillnote](https://hillnote.com/download) — plataformas y enlaces de descarga, consultado el 1 de noviembre de 2026.",
          "[Precios de Hillnote](https://hillnote.com/pricing) — planes, créditos y motores de IA local, consultado el 1 de noviembre de 2026.",
          "[Política de privacidad de Hillnote](https://hillnote.com/privacy) — recopilación de datos, sincronización y flujo de datos de la IA, consultado el 1 de noviembre de 2026.",
          "[Página de seguridad de Hillnote](https://hillnote.com/security) — cifrado y ajustes predeterminados de sincronización, consultado el 1 de noviembre de 2026.",
          "[Hillnote en GitHub](https://github.com/Rajathbail/hillnote) — README, versiones y archivos, consultado el 1 de noviembre de 2026.",
          "[Hillnote en la App Store](https://apps.apple.com/app/hillnote/id6754959344) — descripción, historial de versiones y requisitos, consultado el 1 de noviembre de 2026.",
          "[Hillnote en Google Play](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android) — ficha y fecha de actualización, consultado el 1 de noviembre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Reseña de Logseq](/es/power-local-llm/logseq-review) — un outliner de código abierto, con enfoque local y servidor MCP opcional.",
          "[Reseña de Tolaria](/es/power-local-llm/tolaria-review) — una app de notas de escritorio gratuita con archivos Markdown en una bóveda respaldada por Git.",
          "[Reseña de SiYuan](/es/power-local-llm/siyuan-review) — un espacio de conocimiento autoalojado con agente de IA integrado.",
          "[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local."
        ]
      }
    }
  },
  fr: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-01",
    "dateModified": "2026-11-01",
    "next_refresh_due": "2027-05-01",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/hillnote-review-hero-fr.webp",
    "title": "Test de Hillnote : notes Markdown locales avec IA sur l’appareil",
    "seoTitle": "Test de Hillnote : notes Markdown locales avec IA",
    "intro": "Hillnote est un espace de notes pour Mac, Windows, iPhone, iPad et Android qui conserve votre travail sous forme de simples fichiers Markdown sur votre propre appareil et y ajoute de l’IA : modèles locaux via Ollama et Apple Intelligence, modèles cloud en option et synchronisation en option. L’App Store indique Rajath Bail comme vendeur. Ce test s’appuie sur la [page de téléchargement](https://hillnote.com/download), la [page des tarifs](https://hillnote.com/pricing), la politique de confidentialité, les [versions GitHub](https://github.com/Rajathbail/hillnote/releases/latest) et les fiches des boutiques, consultées le 1er novembre 2026 ; PromptQuorum n’a pas testé l’appli en pratique.",
    "metaDescription": "Test de Hillnote : notes Markdown locales pour Mac, Windows, iPhone et Android, IA via Ollama, modèles cloud et synchro en option. Offre gratuite.",
    "twitterDescription": "Test de Hillnote : des notes Markdown sur votre propre disque, avec IA locale via Ollama et Apple Intelligence et options cloud payantes. Ce que les sources confirment ou non.",
    "audience": "Utilisateurs de notes sur Mac, Windows ou mobile qui veulent savoir où Hillnote range leurs notes, ce que fait son IA en local, combien coûtent les offres et quelles affirmations les sources laissent ouvertes.",
    "readTime": "6 min de lecture",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "test Hillnote",
    "targetKeywords": [
      "test hillnote",
      "appli hillnote",
      "appli notes markdown locale",
      "appli de notes avec ia locale",
      "appli de notes avec ollama",
      "appli de notes ia hors ligne",
      "prix hillnote"
    ],
    "current_models_mentioned": [
      "Gemma 3",
      "Qwen3",
      "Claude",
      "GPT",
      "Gemini"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "iPhone",
      "Windows PC"
    ],
    "leadAnswerBlock": "**Hillnote (version bureau 0.43.15, publiée le 30 octobre 2026) est un espace de notes Markdown pour Mac, Windows, iPhone, iPad et Android qui garde vos fichiers sur votre propre disque et ajoute de l’IA locale et cloud.** L’offre gratuite couvre l’éditeur et l’IA locale ; les offres annuelles payantes ajoutent du stockage synchronisé, la publication, les routines et un usage plus poussé des modèles cloud. Toutes les affirmations viennent du site du créateur, de ses pages de politique, de GitHub et des fiches des boutiques.",
    "quickAnswerTop": {
      "fr": {
        "question": "Hillnote exige-t-il un compte ou une connexion internet ?",
        "answer": "Selon le créateur, non : les notes sont de simples fichiers Markdown dans un dossier de votre choix, l’appli fonctionne hors ligne sans inscription et la synchro est désactivée par défaut. Les modèles cloud, la synchro et la publication sont les parties qui demandent internet.",
        "bullets": [
          "La synchro se règle par espace de travail : l’un peut rester sur l’appareil pendant qu’un autre se synchronise.",
          "Les versions Mac et Windows viennent de GitHub Releases ; les applis mobiles de l’App Store et de Google Play.",
          "Claude, ChatGPT, Codex et Cursor peuvent se connecter via MCP ou lire directement le dossier de l’espace de travail.",
          "Hillnote écrit des fichiers de contexte AGENTS.md et CLAUDE.md pour que les outils d’IA externes s’y retrouvent."
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "Réponse rapide",
        "anchor": "quick-answer"
      },
      {
        "label": "Qu’est-ce que Hillnote ?",
        "anchor": "what-is-hillnote"
      },
      {
        "label": "Où l’obtenir",
        "anchor": "get-it"
      },
      {
        "label": "Configuration requise",
        "anchor": "requirements"
      },
      {
        "label": "Pour bien démarrer",
        "anchor": "getting-started"
      },
      {
        "label": "Fonctions confirmées par les sources",
        "anchor": "key-features"
      },
      {
        "label": "Flux de données et confidentialité",
        "anchor": "privacy"
      },
      {
        "label": "À qui s’adresse l’appli",
        "anchor": "who-should-use"
      },
      {
        "label": "Ce que nous n’avons pas pu vérifier",
        "anchor": "who-should-not-use"
      },
      {
        "label": "Concurrents et alternatives",
        "anchor": "vs-alternatives"
      },
      {
        "label": "Questions fréquentes",
        "anchor": "faq"
      },
      {
        "label": "Verdict",
        "anchor": "verdict"
      },
      {
        "label": "Sources",
        "anchor": "sources"
      },
      {
        "label": "À lire aussi",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "Points clés",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Hillnote est un espace de notes Markdown local d’abord, pour Mac, Windows, iPhone, iPad et Android, avec IA sur l’appareil, modèles cloud et synchro en option."
          },
          {
            "type": "plain-terms",
            "text": "Vos notes sont de simples fichiers texte sur votre disque ; un assistant d’IA peut les lire et les modifier, avec un modèle sur votre machine ou un modèle cloud de votre choix."
          }
        ],
        "items": [
          "Maintenance : la version bureau 0.43.15 est sortie le 30 octobre 2026 et les applis iPhone et Android ont été mises à jour le 29 octobre 2026 ; aucun avertissement de projet délaissé ne s’applique.",
          "Coût : une offre gratuite et deux offres annuelles payantes ; les montants figurent dans le tableau « Où l’obtenir ».",
          "IA : modèles locaux via Ollama et Apple Intelligence, un modèle hors ligne intégré sur iPhone et des modèles cloud en option.",
          "Code source : aucune licence n’est indiquée et le dépôt GitHub ne contient qu’un README et des téléchargements de versions.",
          "Créateur : un développeur individuel indiqué comme vendeur sur l’App Store ; le pied de page du site renvoie vers une société, Colloqi, sans expliquer le lien."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce test s’appuie sur hillnote.com, sa politique de confidentialité, les versions GitHub et les fiches des boutiques, consultées le 1er novembre 2026. PromptQuorum n’a ni installé, ni exécuté, ni mesuré l’appli : la vitesse, la qualité des notes et celle des réponses ne sont donc pas évaluées."
          }
        ]
      },
      "overview": {
        "id": "what-is-hillnote",
        "title": "Qu’est-ce que Hillnote ?",
        "content": [
          "**Hillnote est une appli d’espace de travail pour écrire, planifier et rassembler des idées, fondée sur de simples fichiers Markdown qui restent sur votre appareil.** L’App Store la présente comme « HillNote » dans la catégorie Productivité, du vendeur Rajath Bail ; la première version iPhone date du 16 juin 2026. Le site et les applis écrivent le nom « Hillnote ».",
          "Le créateur la décrit comme conçue pour les créateurs, les rédacteurs et les petites équipes : un éditeur Markdown, des notes rapides, un chat intégré qui lit et modifie vos fichiers, de petits outils HTML à épingler en widgets et un niveau de synchro gratuit entre mobile et ordinateur."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Où l’obtenir",
        "content": [
          "**Hillnote se télécharge gratuitement sur Mac, Windows, iPhone, iPad et Android ; les installeurs de bureau sont hébergés sur GitHub, pas sur le serveur du créateur.**"
        ],
        "columns": [
          "Option",
          "Comment l’obtenir"
        ],
        "rows": [
          {
            "Option": "Mac",
            "Comment l’obtenir": "[Hillnote sur GitHub Releases](https://github.com/Rajathbail/hillnote/releases/latest), .dmg ou .zip pour Apple silicon"
          },
          {
            "Option": "Windows",
            "Comment l’obtenir": "[Hillnote sur GitHub Releases](https://github.com/Rajathbail/hillnote/releases/latest), installeur .exe"
          },
          {
            "Option": "iPhone et iPad",
            "Comment l’obtenir": "[Hillnote sur l’App Store](https://apps.apple.com/app/hillnote/id6754959344), gratuit avec achats intégrés"
          },
          {
            "Option": "Android",
            "Comment l’obtenir": "[Hillnote sur Google Play](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android)"
          },
          {
            "Option": "Offres",
            "Comment l’obtenir": "Free 0 $ ; Plus 20 $ par an ; Pro 200 $ par an (dollars US sur le site du créateur)"
          },
          {
            "Option": "Options",
            "Comment l’obtenir": "110 000 crédits supplémentaires 10 $ une fois ; 1 Go de stockage synchronisé 10 $ par an"
          },
          {
            "Option": "Site web",
            "Comment l’obtenir": "[hillnote.com](https://hillnote.com)"
          },
          {
            "Option": "Politique de confidentialité",
            "Comment l’obtenir": "[hillnote.com/privacy](https://hillnote.com/privacy)"
          },
          {
            "Option": "Code source",
            "Comment l’obtenir": "Aucun code source trouvé ; [le dépôt GitHub](https://github.com/Rajathbail/hillnote) ne contient qu’un README"
          }
        ],
        "note": "Version testée : bureau 0.43.15 (30 octobre 2026, GitHub). L’App Store indique 0.33.46 (29 octobre 2026) et Google Play affiche 0.33.47 (29 octobre 2026) ; mobile et bureau ont des numéros de version distincts, et le téléchargement Mac est une version Apple silicon. Le site donne les prix en dollars US uniquement ; les prix intégrés des différentes boutiques n’ont pas été vérifiés."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Configuration requise",
        "content": [
          "**L’App Store indique iOS ou iPadOS 16.0 au minimum ; les sources ne donnent aucun minimum pour Mac ou Windows.**"
        ],
        "columns": [
          "Élément",
          "Ce que disent les sources"
        ],
        "rows": [
          {
            "Élément": "Ordinateur",
            "Ce que disent les sources": "Mac : .dmg ou .zip pour Apple silicon ; Windows : installeur .exe"
          },
          {
            "Élément": "iPhone et iPad",
            "Ce que disent les sources": "iOS ou iPadOS 16.0 ou plus récent, selon l’App Store"
          },
          {
            "Élément": "Modèles hors ligne sur iPhone",
            "Ce que disent les sources": "Les téléchargements de Gemma 3 ou Qwen3 demandent iOS 26 ou plus ; un test intégré vérifie mémoire, stockage et vitesse"
          },
          {
            "Élément": "IA locale sur ordinateur",
            "Ce que disent les sources": "Une installation locale d’Ollama ou Apple Intelligence, selon la page des tarifs"
          },
          {
            "Élément": "Compte",
            "Ce que disent les sources": "Inutile en usage local selon le créateur ; la synchro collecte une adresse e-mail pour la connexion"
          }
        ],
        "note": "Aucun chiffre de RAM, de VRAM ou d’espace disque n’est donné pour les modèles locaux sur ordinateur."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Pour bien démarrer",
        "content": [
          "**Les étapes suivent la description du créateur ; PromptQuorum ne les a pas exécutées.**"
        ],
        "numberedItems": [
          {
            "title": "Installer l’appli",
            "whyItMatters": "Téléchargez l’installeur Mac ou Windows depuis GitHub Releases, ou l’appli mobile depuis l’App Store ou Google Play."
          },
          {
            "title": "Ouvrir l’espace de bienvenue",
            "whyItMatters": "D’après la documentation du créateur, l’appli crée un espace de bienvenue qui se parcourt en deux minutes environ."
          },
          {
            "title": "Choisir où tourne l’IA",
            "whyItMatters": "Utilisez un modèle local via Ollama ou Apple Intelligence, laissez le mode automatique confier les tâches difficiles à un modèle cloud, ou ajoutez votre propre clé API avec Plus et Pro."
          },
          {
            "title": "Décider de la synchro",
            "whyItMatters": "La synchro est désactivée par défaut ; activez-la par espace de travail si vous voulez les mêmes notes sur chaque appareil."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions confirmées par les sources",
        "content": [
          "**Chaque point ci-dessous vient du site du créateur, des fiches des boutiques ou de la politique de confidentialité ; aucun n’a été testé de façon indépendante.**"
        ],
        "items": [
          "**Markdown sur le disque.** Les notes sont des fichiers Markdown standard dans un dossier de votre choix, avec des liens entre documents, un registre de documents et des aperçus côte à côte de pages web et de PDF.",
          "**IA locale et cloud.** Les retouches en ligne et les tâches rapides utilisent Ollama ou Apple Intelligence sur l’appareil ; un mode automatique confie les tâches plus difficiles à Claude, GPT et d’autres modèles de pointe.",
          "**Chat avec vos fichiers.** Le chat intégré lit vos fichiers, les modifie et en crée de nouveaux, d’après la description de l’App Store.",
          "**Liens avec d’autres outils d’IA.** Claude, ChatGPT, Codex, Cursor et d’autres se connectent via MCP local ou cloud.",
          "**Options payantes.** Publication d’un espace de travail (Plus : un, Pro : jusqu’à six, avec domaine personnalisé sur Pro), routines (Plus : jusqu’à trois, Pro : jusqu’à cinq) et clés API personnelles."
        ],
        "note": "Les sources ne disent pas quelles fonctions d’IA marchent entièrement hors ligne en dehors du chemin des modèles locaux."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flux de données et confidentialité",
        "content": [
          "**La politique de confidentialité indique que les données locales ne sont pas collectées : documents, historique de modification et réglages restent sur votre disque tant que vous n’activez pas une fonction qui les envoie.** Quand la synchro est désactivée, la politique affirme que Hillnote ne collecte ni le contenu de vos documents ni votre comportement d’édition. Quand elle est activée, elle cite votre adresse e-mail pour la connexion, un nom d’affichage facultatif, des métadonnées de synchro et d’activité, les rôles de collaboration, les contenus publiés et l’état de facturation.",
          "Les espaces de travail synchronisés sont stockés sur AWS. Les notes sans mot de passe sont lisibles par le service, ce qui rend possibles la recherche, l’IA, les routines et la publication ; les notes protégées par mot de passe sont chiffrées sur votre appareil et, selon la politique, la clé n’atteint jamais les serveurs de Hillnote. L’usage de l’IA premium est facultatif : la politique indique que requêtes et contenus partent vers les serveurs du fournisseur du modèle (OpenAI, Claude ou Gemini), qui peut les utiliser selon ses propres règles. Le site utilise Google Analytics, la politique ne cite aucun SDK publicitaire et les journaux de plantage ne sont analysés qu’avec consentement."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce sont des déclarations du créateur, pas des résultats d’audit, et le code source de l’appli n’est pas publié. PromptQuorum n’a pas inspecté le trafic réseau. La politique ne donne aucune adresse postale et relève du droit indien, les litiges étant portés devant les tribunaux de Bangalore."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui s’adresse l’appli",
        "items": [
          "**Les adeptes du Markdown** qui veulent des fichiers ouvrables dans n’importe quel éditeur et conservés sur leur propre disque.",
          "**Les utilisateurs d’Ollama** qui veulent un assistant modifiant leurs notes avec un modèle déjà présent sur leur ordinateur.",
          "**Ceux qui travaillent avec Claude, ChatGPT ou Cursor** et veulent que ces outils lisent et modifient les mêmes notes."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n’avons pas pu vérifier",
        "items": [
          "**Performances.** Vitesse, consommation de mémoire, usure de la batterie et qualité des réponses des modèles locaux n’ont pas été testées.",
          "**Licence et code source.** Aucune licence n’est indiquée, et le dépôt GitHub contient un README et des téléchargements de versions, pas de code source.",
          "**Mobile et ordinateur.** Les applis mobiles et l’appli de bureau ont des numéros de version distincts, et les sources ne disent pas si leurs fonctions correspondent.",
          "**Étendue hors ligne.** Les fonctions d’IA qui marchent sans internet en dehors du chemin des modèles locaux ne sont pas documentées.",
          "**Société.** Le lien avec Colloqi dans le pied de page du site et l’entité juridique derrière l’appli ne sont pas expliqués."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Concurrents et alternatives",
        "columns": [
          "Appli",
          "Plateformes",
          "Prix / licence",
          "Différence clé"
        ],
        "rows": [
          {
            "Appli": "[Logseq](/fr/power-local-llm/logseq-review)",
            "Plateformes": "Mac, Windows, Linux, iPhone, Android, web",
            "Prix / licence": "Gratuit / AGPL-3.0",
            "Différence clé": "Outliner open source ; IA seulement via un serveur MCP facultatif"
          },
          {
            "Appli": "[Tolaria](/fr/power-local-llm/tolaria-review)",
            "Plateformes": "Mac, Windows, Linux",
            "Prix / licence": "Gratuit / AGPL-3.0-or-later",
            "Différence clé": "Fichiers Markdown dans un coffre géré par Git"
          },
          {
            "Appli": "[SiYuan](/fr/power-local-llm/siyuan-review)",
            "Plateformes": "Mac, Windows, Linux, iPhone, Android",
            "Prix / licence": "Gratuit + synchro payante / AGPL-3.0",
            "Différence clé": "Auto-hébergé, références par bloc, agent d’IA intégré"
          }
        ],
        "note": "Vérifiez le prix, la licence et les plateformes de chaque appli sur sa propre page avant de choisir."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "Existe-t-il une version de Hillnote pour Linux ou les Mac Intel ?",
            "a": "Le titre de la page de téléchargement mentionne Linux, mais elle ne renvoie qu’à la version GitHub (une version Mac Apple silicon et un installeur Windows) et aux deux boutiques mobiles. Aucun fichier pour Linux ou Mac Intel n’a été trouvé."
          },
          {
            "q": "Quels modèles locaux Hillnote utilise-t-il ?",
            "a": "La page des tarifs cite Ollama et Apple Intelligence pour les retouches en ligne et les tâches rapides. Les notes de l’App Store ajoutent un modèle hors ligne intégré sur iPhone et Gemma 3 ou Qwen3 à télécharger sous iOS 26 ou plus ; aucune liste de modèles n’est donnée pour l’ordinateur."
          },
          {
            "q": "Comment fonctionnent les crédits des modèles premium ?",
            "a": "Free et Plus incluent 10 000 crédits par mois et Pro 50 000 par semaine ; un lot de 110 000 crédits supplémentaires coûte 10 $ une fois. La page des tarifs ne dit pas combien de crédits consomme une requête."
          },
          {
            "q": "Quelle version le README GitHub décrit-il ?",
            "a": "Le README indique « Currently: v0.40.9 » alors que la dernière version est la 0.43.15 : il est donc périmé, et ce test s’appuie sur la version publiée."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Hillnote propose de simples notes Markdown sur votre propre disque, une IA locale via Ollama et Apple Intelligence, des modèles cloud et une synchro en option, et a publié cinq versions entre le 22 et le 30 octobre 2026. En contrepartie, aucune licence n’est indiquée, le dépôt GitHub ne publie pas de code source, le vendeur sur l’App Store est un particulier, avec un lien de société inexpliqué, et la vitesse comme la qualité des réponses n’ont pas été testées. Elle convient à ceux qui veulent des fichiers Markdown avec de l’IA en option et peuvent commencer par l’offre gratuite ; qui a besoin d’affirmations de confidentialité auditées doit lire la politique comme une déclaration, non comme une preuve."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Page de téléchargement de Hillnote](https://hillnote.com/download) — plateformes et liens de téléchargement, consulté le 1er novembre 2026.",
          "[Tarifs de Hillnote](https://hillnote.com/pricing) — offres, crédits et moteurs d’IA locale, consulté le 1er novembre 2026.",
          "[Politique de confidentialité de Hillnote](https://hillnote.com/privacy) — collecte de données, synchro et flux de données de l’IA, consulté le 1er novembre 2026.",
          "[Page sécurité de Hillnote](https://hillnote.com/security) — chiffrement et réglages par défaut de la synchro, consulté le 1er novembre 2026.",
          "[Hillnote sur GitHub](https://github.com/Rajathbail/hillnote) — README, versions et fichiers, consulté le 1er novembre 2026.",
          "[Hillnote sur l’App Store](https://apps.apple.com/app/hillnote/id6754959344) — description, historique des versions et configuration requise, consulté le 1er novembre 2026.",
          "[Hillnote sur Google Play](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android) — fiche et date de mise à jour, consulté le 1er novembre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "À lire aussi",
        "items": [
          "[Test de Logseq](/fr/power-local-llm/logseq-review) — un outliner open source, local d’abord, avec serveur MCP facultatif.",
          "[Test de Tolaria](/fr/power-local-llm/tolaria-review) — une appli de notes de bureau gratuite avec fichiers Markdown dans un coffre géré par Git.",
          "[Test de SiYuan](/fr/power-local-llm/siyuan-review) — un espace de connaissances auto-hébergé avec agent d’IA intégré.",
          "[Répertoire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale."
        ]
      }
    }
  },
  ja: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-01",
    "dateModified": "2026-11-01",
    "next_refresh_due": "2027-05-01",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/hillnote-review-hero-ja.webp",
    "title": "Hillnoteレビュー：端末内AIを備えたローカルファーストのMarkdownノート",
    "seoTitle": "Hillnoteレビュー：ローカルMarkdownノートとAI",
    "intro": "Hillnoteは、Mac、Windows、iPhone、iPad、Android向けのノート環境です。作業内容を自分の端末上のMarkdownファイルとして保存し、その上にAIを重ねます。OllamaとApple Intelligenceによる端末内モデル、任意のクラウドモデル、任意の同期に対応します。App Storeの販売元はRajath Bailです。このレビューは[ダウンロードページ](https://hillnote.com/download)、[料金ページ](https://hillnote.com/pricing)、プライバシーポリシー、[GitHubのリリース](https://github.com/Rajathbail/hillnote/releases/latest)、各ストアの掲載情報に基づき、2026年11月1日に確認したものです。PromptQuorumはアプリを実際には試していません。",
    "metaDescription": "Hillnoteのレビュー。Mac・Windows・iPhone・Android対応のローカルファーストなMarkdownノート。Ollamaによる端末内AI、任意のクラウドモデルと同期。無料プランあり。",
    "twitterDescription": "Hillnoteレビュー：自分のディスクに保存するMarkdownノートと、OllamaやApple Intelligenceによる端末内AI、有料のクラウド機能。情報源が確認していること、していないこと。",
    "audience": "Mac、Windows、スマートフォンでメモを取り、Hillnoteがノートをどこに保存するか、AIが端末内で何をするか、プランの費用、情報源が確認していない主張を知りたい方。",
    "readTime": "6分で読める",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Hillnote レビュー",
    "targetKeywords": [
      "hillnote レビュー",
      "hillnote アプリ",
      "ローカルファースト markdown ノートアプリ",
      "ローカルai ノートアプリ",
      "ollama ノートアプリ",
      "オフライン ai ノートアプリ",
      "hillnote 料金"
    ],
    "current_models_mentioned": [
      "Gemma 3",
      "Qwen3",
      "Claude",
      "GPT",
      "Gemini"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "iPhone",
      "Windows PC"
    ],
    "leadAnswerBlock": "**Hillnote（デスクトップ版0.43.15、2026年10月30日公開）は、Mac、Windows、iPhone、iPad、Android向けのMarkdownノート環境で、ファイルを自分のディスクに保存し、端末内AIとクラウドAIを組み合わせます。**無料プランはエディタと端末内AIをカバーし、有料の年額プランで同期容量、公開、ルーティン、クラウドモデルの利用枠が増えます。ここでの記述はすべて、開発者の公式サイト、ポリシー文書、GitHub、各ストアの掲載情報に基づきます。",
    "quickAnswerTop": {
      "ja": {
        "question": "Hillnoteにはアカウントやインターネット接続が必要ですか？",
        "answer": "開発者の説明では不要です。ノートは自分で選んだフォルダ内の通常のMarkdownファイルで、アプリはオフラインで動作し、サインアップも要りません。同期は初期状態でオフです。インターネットが必要なのはクラウドモデル、同期、公開の部分です。",
        "bullets": [
          "同期はワークスペースごとに設定でき、あるワークスペースは端末内に留め、別のものだけ同期できます。",
          "MacとWindows版はGitHub Releasesから、スマートフォン版はApp StoreとGoogle Playから入手します。",
          "Claude、ChatGPT、Codex、CursorはMCP経由で接続するか、ワークスペースのフォルダを直接読めます。",
          "HillnoteはAGENTS.mdとCLAUDE.mdの文脈ファイルを書き出し、外部のAIツールがワークスペースを把握できるようにします。"
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "クイックアンサー",
        "anchor": "quick-answer"
      },
      {
        "label": "Hillnoteとは",
        "anchor": "what-is-hillnote"
      },
      {
        "label": "入手方法",
        "anchor": "get-it"
      },
      {
        "label": "動作要件",
        "anchor": "requirements"
      },
      {
        "label": "使い始めるには",
        "anchor": "getting-started"
      },
      {
        "label": "情報源で確認できた機能",
        "anchor": "key-features"
      },
      {
        "label": "データの流れとプライバシー",
        "anchor": "privacy"
      },
      {
        "label": "おすすめできる人",
        "anchor": "who-should-use"
      },
      {
        "label": "確認できなかった点",
        "anchor": "who-should-not-use"
      },
      {
        "label": "競合・代替アプリ",
        "anchor": "vs-alternatives"
      },
      {
        "label": "よくある質問",
        "anchor": "faq"
      },
      {
        "label": "総評",
        "anchor": "verdict"
      },
      {
        "label": "情報源",
        "anchor": "sources"
      },
      {
        "label": "関連記事",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "重要ポイント",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Hillnoteは、Mac、Windows、iPhone、iPad、Android向けのローカルファーストなMarkdownノート環境で、端末内AI、任意のクラウドモデル、任意の同期に対応します。"
          },
          {
            "type": "plain-terms",
            "text": "ノートは自分のディスク上の通常のテキストファイルで、AIアシスタントがそれを読み書きします。使うのは自分のマシン上のモデルでも、自分で選んだクラウドモデルでも構いません。"
          }
        ],
        "items": [
          "メンテナンス：デスクトップ版0.43.15は2026年10月30日に公開され、iPhone版とAndroid版は2026年10月29日に更新されたため、更新停止の警告は付きません。",
          "費用：無料プランと2つの有料年額プラン。金額は「入手方法」の表にあります。",
          "AI：OllamaとApple Intelligenceによる端末内モデル、iPhoneの内蔵オフラインモデル、任意のクラウドモデル。",
          "ソース：ライセンスの記載はなく、GitHubリポジトリにはREADMEとリリースのダウンロードしかありません。",
          "開発元：App Storeの販売元は個人開発者で、サイトのフッターはColloqiという会社へリンクしていますが、関係は説明されていません。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "このレビューは、2026年11月1日に確認したhillnote.com、プライバシーポリシー、GitHubのリリース、各ストアの掲載情報に基づきます。PromptQuorumはアプリをインストール・実行・計測していないため、速度、ノートの品質、回答品質は評価していません。"
          }
        ]
      },
      "overview": {
        "id": "what-is-hillnote",
        "title": "Hillnoteとは",
        "content": [
          "**Hillnoteは、端末内に残る通常のMarkdownファイルを土台に、書く、計画する、アイデアを集めるためのワークスペースアプリです。**App Storeでは「HillNote」の名で「仕事効率化」カテゴリに載り、販売元はRajath Bailです。iPhone版の初回リリースは2026年6月16日で、サイトとアプリでは「Hillnote」と表記されています。",
          "開発者は、ビルダー、クリエイター、ライター、小規模チーム向けと説明しています。Markdownエディタ、クイックノート、ファイルを読み書きする内蔵チャット、ウィジェットとして固定できる小さなHTMLツール、スマートフォンとデスクトップ間の無料同期枠を備えます。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "入手方法",
        "content": [
          "**HillnoteはMac、Windows、iPhone、iPad、Androidで無料ダウンロードできます。デスクトップ版のインストーラーは開発者自身のサーバーではなくGitHubに置かれています。**"
        ],
        "columns": [
          "項目",
          "入手方法"
        ],
        "rows": [
          {
            "項目": "Mac",
            "入手方法": "[GitHub ReleasesのHillnote](https://github.com/Rajathbail/hillnote/releases/latest)、Apple silicon用の.dmgまたは.zip"
          },
          {
            "項目": "Windows",
            "入手方法": "[GitHub ReleasesのHillnote](https://github.com/Rajathbail/hillnote/releases/latest)、セットアップ.exe"
          },
          {
            "項目": "iPhone・iPad",
            "入手方法": "[App StoreのHillnote](https://apps.apple.com/app/hillnote/id6754959344)、無料（アプリ内課金あり）"
          },
          {
            "項目": "Android",
            "入手方法": "[Google PlayのHillnote](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android)"
          },
          {
            "項目": "プラン",
            "入手方法": "Free $0、Plus 年$20、Pro 年$200（開発者サイトの米ドル表記）"
          },
          {
            "項目": "追加オプション",
            "入手方法": "追加110,000クレジット$10（1回）、同期容量1GB追加は年$10"
          },
          {
            "項目": "公式サイト",
            "入手方法": "[hillnote.com](https://hillnote.com)"
          },
          {
            "項目": "プライバシーポリシー",
            "入手方法": "[hillnote.com/privacy](https://hillnote.com/privacy)"
          },
          {
            "項目": "ソースコード",
            "入手方法": "未確認。[GitHubリポジトリ](https://github.com/Rajathbail/hillnote)にはREADMEのみ"
          }
        ],
        "note": "確認したバージョン：デスクトップ版0.43.15（2026年10月30日、GitHub）。App Storeは0.33.46（2026年10月29日）、Google Playは0.33.47（2026年10月29日）と表示しており、スマートフォン版とデスクトップ版は別のバージョン番号を使い、Mac版ダウンロードはApple silicon向けです。サイトの価格は米ドル表記のみで、各国ストアのアプリ内課金価格は確認していません。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "動作要件",
        "content": [
          "**App Storeの最低要件はiOSまたはiPadOS 16.0です。MacとWindowsの最低バージョンは情報源に記載がありません。**"
        ],
        "columns": [
          "項目",
          "情報源の記載"
        ],
        "rows": [
          {
            "項目": "デスクトップ",
            "情報源の記載": "Mac：Apple silicon用の.dmgまたは.zip、Windows：セットアップ.exe"
          },
          {
            "項目": "iPhone・iPad",
            "情報源の記載": "App Storeによると、iOSまたはiPadOS 16.0以降"
          },
          {
            "項目": "iPhoneのオフラインモデル",
            "情報源の記載": "Gemma 3またはQwen3のダウンロードにはiOS 26以降が必要で、アプリ内の確認でメモリ、容量、速度を調べます"
          },
          {
            "項目": "デスクトップの端末内AI",
            "情報源の記載": "料金ページによると、ローカルのOllamaまたはApple Intelligence"
          },
          {
            "項目": "アカウント",
            "情報源の記載": "開発者によるとローカル利用では不要。同期ではサインイン用にメールアドレスを取得"
          }
        ],
        "note": "デスクトップの端末内モデルについて、RAM、VRAM、ディスク容量の数値は示されていません。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "使い始めるには",
        "content": [
          "**手順は開発者自身の説明に沿ったもので、PromptQuorumは実行していません。**"
        ],
        "numberedItems": [
          {
            "title": "アプリをインストールする",
            "whyItMatters": "MacまたはWindowsのインストーラーはGitHub Releasesから、スマートフォン版はApp StoreまたはGoogle Playから入手します。"
          },
          {
            "title": "オンボーディング用ワークスペースを開く",
            "whyItMatters": "開発者のドキュメントによると、アプリは約2分で一通り確認できるオンボーディング用ワークスペースを作成します。"
          },
          {
            "title": "AIを動かす場所を選ぶ",
            "whyItMatters": "OllamaまたはApple Intelligenceの端末内モデルを使う、自動モードに難しい作業をクラウドモデルへ任せる、PlusとProでは自分のAPIキーを追加する、のいずれかを選びます。"
          },
          {
            "title": "同期を使うか決める",
            "whyItMatters": "同期は初期状態でオフです。全端末で同じノートを使いたい場合は、ワークスペースごとにオンにします。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "情報源で確認できた機能",
        "content": [
          "**以下の項目はすべて、開発者の公式サイト、各ストアの掲載情報、プライバシーポリシーに基づくもので、独立した検証は行っていません。**"
        ],
        "items": [
          "**ディスク上のMarkdown。**ノートは自分で選んだフォルダ内の標準的なMarkdownファイルで、文書間リンク、文書レジストリ、Webページとの並列プレビューやPDFプレビューに対応します。",
          "**端末内AIとクラウドAI。**インライン編集や簡単な作業は端末上のOllamaまたはApple Intelligenceが担当し、自動モードは難しい作業をClaude、GPTなどの先端モデルへ渡します。",
          "**ファイルとのチャット。**App Storeの説明によると、内蔵チャットは自分のファイルを読み、編集し、新しいファイルも作成します。",
          "**他のAIツールとの連携。**Claude、ChatGPT、Codex、Cursorなどがローカルまたはクラウド経由のMCPで接続します。",
          "**有料の追加機能。**ワークスペースの公開（Plusは1つ、Proは最大6つでカスタムドメイン対応）、ルーティン（Plusは最大3つ、Proは最大5つ）、自分のAPIキーの利用。"
        ],
        "note": "端末内モデルの利用経路以外で、どのAI機能が完全にオフラインで動くかは情報源に記載がありません。"
      },
      "privacy": {
        "id": "privacy",
        "title": "データの流れとプライバシー",
        "content": [
          "**プライバシーポリシーは、ローカルのデータは収集しないとしています。文書、編集履歴、設定は、データを送信する機能をオンにするまでディスク上に残ります。**同期がオフの間、Hillnoteは文書の内容も編集の行動も一切収集しないと明記しています。同期をオンにすると、サインイン用のメールアドレス、任意の表示名、同期とアクティビティのメタデータ、共同編集の役割、公開コンテンツ、課金状況が対象になると記載されています。",
          "同期したワークスペースはAWSに保存されます。パスワードのないノートはサービス側から読めるため、検索、AI、ルーティン、公開が可能になります。パスワード保護したノートは端末上で暗号化され、鍵はHillnoteのサーバーに届かないとポリシーは述べています。プレミアムAIの利用は任意で、クエリと内容はモデル提供元（OpenAI、Claude、Gemini）のサーバーに送られ、提供元は自社のポリシーに従って利用する場合があるとされています。サイトはGoogle Analyticsを使い、ポリシーに広告SDKの記載はなく、クラッシュログは同意がある場合のみ分析されます。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "これらは開発者の申告であり、監査結果ではありません。アプリのソースコードも公開されていません。PromptQuorumはネットワーク通信を検査していません。ポリシーには所在地の記載がなく、インド法が準拠法で、紛争はバンガロールの裁判所で扱われるとされています。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "おすすめできる人",
        "items": [
          "**Markdownでメモを取る人**：どのエディタでも開けて、自分のディスクに残るファイルを求める方。",
          "**Ollamaユーザー**：すでにパソコンにあるモデルでノートを編集するアシスタントが欲しい方。",
          "**Claude、ChatGPT、Cursorを使う人**：同じノートをこれらのツールにも読み書きさせたい方。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかった点",
        "items": [
          "**性能。**速度、メモリ使用量、バッテリー消費、端末内モデルの回答品質は未検証です。",
          "**ライセンスとソース。**ライセンスの記載はなく、GitHubリポジトリにはREADMEとリリースのダウンロードのみで、ソースコードはありません。",
          "**スマートフォン版とデスクトップ版。**両者は別のバージョン番号を使っており、機能が一致するかは情報源に記載がありません。",
          "**オフラインの範囲。**端末内モデルの経路以外で、インターネットなしに動くAI機能は文書化されていません。",
          "**運営会社。**サイトのフッターにあるColloqiへのリンクとの関係や、アプリの背後にある法人は説明されていません。"
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "競合・代替アプリ",
        "columns": [
          "アプリ",
          "対応環境",
          "価格／ライセンス",
          "主な違い"
        ],
        "rows": [
          {
            "アプリ": "[Logseq](/ja/power-local-llm/logseq-review)",
            "対応環境": "Mac、Windows、Linux、iPhone、Android、Web",
            "価格／ライセンス": "無料／AGPL-3.0",
            "主な違い": "オープンソースのアウトライナー。AIは任意のMCPサーバー経由のみ"
          },
          {
            "アプリ": "[Tolaria](/ja/power-local-llm/tolaria-review)",
            "対応環境": "Mac、Windows、Linux",
            "価格／ライセンス": "無料／AGPL-3.0-or-later",
            "主な違い": "Git管理のVaultにMarkdownファイルを保存"
          },
          {
            "アプリ": "[SiYuan](/ja/power-local-llm/siyuan-review)",
            "対応環境": "Mac、Windows、Linux、iPhone、Android",
            "価格／ライセンス": "無料＋有料同期／AGPL-3.0",
            "主な違い": "セルフホスト、ブロック単位の参照、内蔵AIエージェント"
          }
        ],
        "note": "選ぶ前に、各アプリの現在の価格、ライセンス、対応環境を公式ページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "HillnoteにはLinux版やIntel Mac版がありますか？",
            "a": "ダウンロードページのタイトルにはLinuxの記載がありますが、リンク先はGitHubのリリース（Apple silicon向けMac版とWindowsインストーラー）と2つのスマートフォンストアのみです。LinuxやIntel Mac向けのファイルは見つかりませんでした。"
          },
          {
            "q": "Hillnoteはどの端末内モデルを使いますか？",
            "a": "料金ページはインライン編集と簡単な作業にOllamaとApple Intelligenceを挙げています。App Storeのリリースノートには、iPhoneの内蔵オフラインモデルと、iOS 26以降でダウンロードできるGemma 3・Qwen3が加わっています。デスクトップのモデル一覧は示されていません。"
          },
          {
            "q": "プレミアムモデルのクレジットはどう働きますか？",
            "a": "FreeとPlusは月10,000クレジット、Proは週50,000クレジットで、追加110,000クレジットのパックは1回$10です。1回のリクエストで何クレジット消費するかは料金ページに記載がありません。"
          },
          {
            "q": "GitHubのREADMEはどのバージョンを説明していますか？",
            "a": "READMEは「Currently: v0.40.9」としていますが、最新リリースは0.43.15です。READMEは古く、このレビューはリリースを基にしています。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "総評",
        "content": "Hillnoteは、自分のディスク上の通常のMarkdownノート、OllamaとApple Intelligenceによる端末内AI、任意のクラウドモデルと同期を備え、2026年10月22日から30日の間に5回リリースされています。一方で、ライセンスの記載はなく、GitHubリポジトリはソースコードを公開しておらず、App Storeの販売元は会社リンクの説明がない個人で、速度と回答品質は未検証です。Markdownファイルに任意のAIを組み合わせたく、無料プランから始められる方に向きます。監査済みのプライバシー保証が必要な方は、ポリシーを証拠ではなく申告として読んでください。"
      },
      "sources": {
        "id": "sources",
        "title": "情報源",
        "items": [
          "[Hillnoteのダウンロードページ](https://hillnote.com/download) — 対応プラットフォームとダウンロードリンク。2026年11月1日確認。",
          "[Hillnoteの料金ページ](https://hillnote.com/pricing) — プラン、クレジット、端末内AIの実行環境。2026年11月1日確認。",
          "[Hillnoteのプライバシーポリシー](https://hillnote.com/privacy) — データ収集、同期、AIのデータの流れ。2026年11月1日確認。",
          "[Hillnoteのセキュリティページ](https://hillnote.com/security) — 暗号化と同期の初期設定。2026年11月1日確認。",
          "[GitHubのHillnote](https://github.com/Rajathbail/hillnote) — README、リリース、配布ファイル。2026年11月1日確認。",
          "[App StoreのHillnote](https://apps.apple.com/app/hillnote/id6754959344) — 説明、バージョン履歴、動作要件。2026年11月1日確認。",
          "[Google PlayのHillnote](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android) — 掲載情報と更新日。2026年11月1日確認。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[Logseqレビュー](/ja/power-local-llm/logseq-review) — 任意のMCPサーバーを備えた、オープンソースのローカルファーストなアウトライナー。",
          "[Tolariaレビュー](/ja/power-local-llm/tolaria-review) — Git管理のVaultにMarkdownファイルを置く、無料のデスクトップノートアプリ。",
          "[SiYuanレビュー](/ja/power-local-llm/siyuan-review) — 内蔵AIエージェントを備えたセルフホスト型ナレッジワークスペース。",
          "[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。"
        ]
      }
    }
  },
  pt: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-01",
    "dateModified": "2026-11-01",
    "next_refresh_due": "2027-05-01",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/hillnote-review-hero-pt.webp",
    "title": "Análise do Hillnote: notas Markdown locais com IA no aparelho",
    "seoTitle": "Análise do Hillnote: notas Markdown locais com IA",
    "intro": "O Hillnote é um espaço de notas para Mac, Windows, iPhone, iPad e Android que guarda o seu trabalho como arquivos Markdown simples no seu próprio aparelho e acrescenta IA: modelos locais via Ollama e Apple Intelligence, modelos na nuvem opcionais e sincronização opcional. A App Store indica Rajath Bail como vendedor. Esta análise se baseia na [página de download](https://hillnote.com/download), na [página de preços](https://hillnote.com/pricing), na política de privacidade, nas [versões do GitHub](https://github.com/Rajathbail/hillnote/releases/latest) e nas páginas das lojas, consultadas em 1º de novembro de 2026; a PromptQuorum não testou o app na prática.",
    "metaDescription": "Análise do Hillnote: notas Markdown locais para Mac, Windows, iPhone e Android com IA via Ollama, modelos na nuvem e sincronização opcionais. Plano grátis.",
    "twitterDescription": "Análise do Hillnote: notas Markdown no seu próprio disco, com IA local via Ollama e Apple Intelligence e extras pagos na nuvem. O que as fontes confirmam e o que não confirmam.",
    "audience": "Pessoas que anotam no Mac, no Windows ou no celular e querem saber onde o Hillnote guarda as notas, o que a IA faz localmente, quanto custam os planos e que afirmações as fontes deixam em aberto.",
    "readTime": "6 min de leitura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "análise do Hillnote",
    "targetKeywords": [
      "análise hillnote",
      "app hillnote",
      "app de notas markdown local",
      "app de notas com ia local",
      "app de notas com ollama",
      "app de notas com ia offline",
      "preço hillnote"
    ],
    "current_models_mentioned": [
      "Gemma 3",
      "Qwen3",
      "Claude",
      "GPT",
      "Gemini"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "iPhone",
      "Windows PC"
    ],
    "leadAnswerBlock": "**O Hillnote (versão para computador 0.43.15, lançada em 30 de outubro de 2026) é um espaço de notas Markdown para Mac, Windows, iPhone, iPad e Android que mantém seus arquivos no seu próprio disco e acrescenta IA local e na nuvem.** O plano grátis cobre o editor e a IA local; os planos anuais pagos acrescentam armazenamento sincronizado, publicação, rotinas e uso mais intenso de modelos na nuvem. Todas as afirmações vêm do site do criador, de suas páginas de políticas, do GitHub e das páginas das lojas.",
    "quickAnswerTop": {
      "pt": {
        "question": "O Hillnote exige conta ou conexão com a internet?",
        "answer": "Segundo o criador, não: as notas são arquivos Markdown simples em uma pasta que você escolhe, o app funciona offline e sem cadastro, e a sincronização vem desativada. Modelos na nuvem, sincronização e publicação são as partes que precisam de internet.",
        "bullets": [
          "A sincronização é definida por espaço de trabalho, então um pode ficar no aparelho enquanto outro sincroniza.",
          "As versões para Mac e Windows vêm do GitHub Releases; os apps de celular, da App Store e do Google Play.",
          "Claude, ChatGPT, Codex e Cursor podem se conectar por MCP ou ler diretamente a pasta do espaço de trabalho.",
          "O Hillnote grava arquivos de contexto AGENTS.md e CLAUDE.md para que ferramentas de IA externas se orientem no espaço de trabalho."
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "Resposta rápida",
        "anchor": "quick-answer"
      },
      {
        "label": "O que é o Hillnote?",
        "anchor": "what-is-hillnote"
      },
      {
        "label": "Onde obter",
        "anchor": "get-it"
      },
      {
        "label": "Requisitos",
        "anchor": "requirements"
      },
      {
        "label": "Como começar",
        "anchor": "getting-started"
      },
      {
        "label": "Recursos confirmados pelas fontes",
        "anchor": "key-features"
      },
      {
        "label": "Fluxo de dados e privacidade",
        "anchor": "privacy"
      },
      {
        "label": "Para quem é",
        "anchor": "who-should-use"
      },
      {
        "label": "O que não conseguimos verificar",
        "anchor": "who-should-not-use"
      },
      {
        "label": "Concorrentes e alternativas",
        "anchor": "vs-alternatives"
      },
      {
        "label": "Perguntas frequentes",
        "anchor": "faq"
      },
      {
        "label": "Veredito",
        "anchor": "verdict"
      },
      {
        "label": "Fontes",
        "anchor": "sources"
      },
      {
        "label": "Leitura relacionada",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "Pontos principais",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "O Hillnote é um espaço de notas Markdown com foco local para Mac, Windows, iPhone, iPad e Android, com IA no aparelho, modelos na nuvem e sincronização opcionais."
          },
          {
            "type": "plain-terms",
            "text": "Suas notas são arquivos de texto comuns no seu disco; um assistente de IA pode lê-las e editá-las, com um modelo no seu computador ou com um modelo na nuvem que você escolher."
          }
        ],
        "items": [
          "Manutenção: a versão para computador 0.43.15 saiu em 30 de outubro de 2026 e os apps de iPhone e Android foram atualizados em 29 de outubro de 2026, então não se aplica aviso de projeto parado.",
          "Custo: um plano grátis e dois planos anuais pagos; os valores estão na tabela «Onde obter».",
          "IA: modelos locais via Ollama e Apple Intelligence, um modelo offline embutido no iPhone e modelos na nuvem opcionais.",
          "Código: nenhuma licença é indicada e o repositório do GitHub contém só um README e downloads de versões.",
          "Criador: um desenvolvedor individual consta como vendedor na App Store; o rodapé do site leva a uma empresa, a Colloqi, sem explicar a relação."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta análise se baseia em hillnote.com, na política de privacidade, nas versões do GitHub e nas páginas das lojas, consultadas em 1º de novembro de 2026. A PromptQuorum não instalou, executou nem mediu o app, então velocidade, qualidade das notas e qualidade das respostas não são avaliadas."
          }
        ]
      },
      "overview": {
        "id": "what-is-hillnote",
        "title": "O que é o Hillnote?",
        "content": [
          "**O Hillnote é um app de espaço de trabalho para escrever, planejar e reunir ideias, baseado em arquivos Markdown simples que ficam no seu aparelho.** A App Store o lista como «HillNote» na categoria Produtividade, do vendedor Rajath Bail, e a primeira versão para iPhone é de 16 de junho de 2026; o site e os apps escrevem o nome «Hillnote».",
          "O criador o descreve como feito para criadores, escritores e pequenas equipes: um editor Markdown, notas rápidas, um chat embutido que lê e edita seus arquivos, pequenas ferramentas HTML que podem ser fixadas como widgets e uma camada de sincronização gratuita entre celular e computador."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Onde obter",
        "content": [
          "**O Hillnote é gratuito para baixar no Mac, Windows, iPhone, iPad e Android; os instaladores para computador ficam no GitHub, não no servidor do criador.**"
        ],
        "columns": [
          "Opção",
          "Como obter"
        ],
        "rows": [
          {
            "Opção": "Mac",
            "Como obter": "[Hillnote no GitHub Releases](https://github.com/Rajathbail/hillnote/releases/latest), .dmg ou .zip para Apple silicon"
          },
          {
            "Opção": "Windows",
            "Como obter": "[Hillnote no GitHub Releases](https://github.com/Rajathbail/hillnote/releases/latest), instalador .exe"
          },
          {
            "Opção": "iPhone e iPad",
            "Como obter": "[Hillnote na App Store](https://apps.apple.com/app/hillnote/id6754959344), grátis com compras no app"
          },
          {
            "Opção": "Android",
            "Como obter": "[Hillnote no Google Play](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android)"
          },
          {
            "Opção": "Planos",
            "Como obter": "Free $0; Plus $20 por ano; Pro $200 por ano (dólares americanos no site do criador)"
          },
          {
            "Opção": "Complementos",
            "Como obter": "110.000 créditos extras $10 uma vez; 1 GB de armazenamento sincronizado $10 por ano"
          },
          {
            "Opção": "Site",
            "Como obter": "[hillnote.com](https://hillnote.com)"
          },
          {
            "Opção": "Política de privacidade",
            "Como obter": "[hillnote.com/privacy](https://hillnote.com/privacy)"
          },
          {
            "Opção": "Código-fonte",
            "Como obter": "Código-fonte não encontrado; [o repositório do GitHub](https://github.com/Rajathbail/hillnote) contém só um README"
          }
        ],
        "note": "Versão analisada: computador 0.43.15 (30 de outubro de 2026, GitHub). A App Store indica 0.33.46 (29 de outubro de 2026) e o Google Play mostra 0.33.47 (29 de outubro de 2026); celular e computador usam números de versão separados, e o download para Mac é uma versão para Apple silicon. O site informa preços apenas em dólares americanos; os preços dentro do app em cada loja não foram conferidos."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**A App Store indica iOS ou iPadOS 16.0 como mínimo; as fontes não citam mínimo para Mac nem Windows.**"
        ],
        "columns": [
          "Item",
          "O que as fontes dizem"
        ],
        "rows": [
          {
            "Item": "Computador",
            "O que as fontes dizem": "Mac: .dmg ou .zip para Apple silicon; Windows: instalador .exe"
          },
          {
            "Item": "iPhone e iPad",
            "O que as fontes dizem": "iOS ou iPadOS 16.0 ou posterior, segundo a App Store"
          },
          {
            "Item": "Modelos offline no iPhone",
            "O que as fontes dizem": "Os downloads de Gemma 3 ou Qwen3 exigem iOS 26 ou posterior; um teste no app verifica memória, armazenamento e velocidade"
          },
          {
            "Item": "IA local no computador",
            "O que as fontes dizem": "Uma instalação local do Ollama ou o Apple Intelligence, segundo a página de preços"
          },
          {
            "Item": "Conta",
            "O que as fontes dizem": "Desnecessária para uso local, segundo o criador; a sincronização coleta um e-mail para o login"
          }
        ],
        "note": "Não há números de RAM, VRAM ou espaço em disco para os modelos locais no computador."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Como começar",
        "content": [
          "**Os passos seguem a descrição do próprio criador; a PromptQuorum não os executou.**"
        ],
        "numberedItems": [
          {
            "title": "Instale o app",
            "whyItMatters": "Baixe o instalador para Mac ou Windows no GitHub Releases, ou o app de celular na App Store ou no Google Play."
          },
          {
            "title": "Abra o espaço de boas-vindas",
            "whyItMatters": "Segundo a documentação do criador, o app cria um espaço de boas-vindas que leva cerca de dois minutos para percorrer."
          },
          {
            "title": "Escolha onde a IA roda",
            "whyItMatters": "Use um modelo local via Ollama ou Apple Intelligence, deixe o modo automático passar as tarefas mais difíceis a um modelo na nuvem, ou adicione sua própria chave de API no Plus e no Pro."
          },
          {
            "title": "Decida sobre a sincronização",
            "whyItMatters": "A sincronização vem desativada; ative-a por espaço de trabalho se quiser as mesmas notas em cada aparelho."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos confirmados pelas fontes",
        "content": [
          "**Cada item abaixo vem do site do criador, das páginas das lojas ou da política de privacidade; nenhum foi testado de forma independente.**"
        ],
        "items": [
          "**Markdown no disco.** As notas são arquivos Markdown padrão em uma pasta que você escolhe, com links entre documentos, um registro de documentos e pré-visualizações lado a lado de páginas da web e PDFs.",
          "**IA local e na nuvem.** Edições em linha e tarefas rápidas usam Ollama ou Apple Intelligence no aparelho; um modo automático passa as tarefas mais difíceis ao Claude, ao GPT e a outros modelos de ponta.",
          "**Chat com seus arquivos.** O chat embutido lê seus arquivos, edita-os e cria novos, segundo a descrição da App Store.",
          "**Conexão com outras ferramentas de IA.** Claude, ChatGPT, Codex, Cursor e outras se conectam por MCP local ou na nuvem.",
          "**Extras pagos.** Publicação de um espaço de trabalho (Plus: um, Pro: até seis, com domínio próprio no Pro), rotinas (Plus: até três, Pro: até cinco) e chaves de API próprias."
        ],
        "note": "As fontes não dizem quais funções de IA funcionam totalmente offline além do caminho dos modelos locais."
      },
      "privacy": {
        "id": "privacy",
        "title": "Fluxo de dados e privacidade",
        "content": [
          "**A política de privacidade diz que os dados locais não são coletados: documentos, histórico de edição e configurações ficam no seu disco até você ativar um recurso que os envia.** Com a sincronização desativada, a política afirma que o Hillnote não coleta nem o conteúdo dos seus documentos nem o seu comportamento de edição. Com ela ativada, lista seu e-mail para o login, um nome de exibição opcional, metadados de sincronização e atividade, papéis de colaboração, conteúdo publicado e status de cobrança.",
          "Os espaços sincronizados ficam na AWS. Notas sem senha podem ser lidas pelo serviço, o que torna possíveis a busca, a IA, as rotinas e a publicação; notas protegidas por senha são criptografadas no seu aparelho e, segundo a política, a chave nunca chega aos servidores do Hillnote. O uso de IA premium é opcional: a política diz que consultas e conteúdo vão para os servidores do provedor do modelo (OpenAI, Claude ou Gemini), que pode usá-los conforme suas próprias políticas. O site usa o Google Analytics, a política não cita SDKs de publicidade e os registros de falhas só são analisados com consentimento."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "São declarações do criador, não resultados de auditoria, e o código-fonte do app não é publicado. A PromptQuorum não inspecionou o tráfego de rede. A política não informa endereço postal e é regida pela lei indiana, com disputas levadas aos tribunais de Bangalore."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem é",
        "items": [
          "**Quem escreve em Markdown** e quer arquivos que abram em qualquer editor e fiquem no próprio disco.",
          "**Usuários do Ollama** que querem um assistente que edite as notas com um modelo que já está no computador.",
          "**Quem trabalha com Claude, ChatGPT ou Cursor** e quer que essas ferramentas leiam e editem as mesmas notas."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Desempenho.** Velocidade, uso de memória, consumo de bateria e qualidade das respostas dos modelos locais não foram testados.",
          "**Licença e código.** Nenhuma licença é indicada, e o repositório do GitHub contém um README e downloads de versões, não código-fonte.",
          "**Celular versus computador.** Os apps de celular e o app de computador usam números de versão separados, e as fontes não dizem se os recursos coincidem.",
          "**Alcance offline.** Não está documentado quais funções de IA funcionam sem internet além do caminho dos modelos locais.",
          "**Empresa.** A relação com o link da Colloqi no rodapé do site e a entidade jurídica por trás do app não são explicadas."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Concorrentes e alternativas",
        "columns": [
          "App",
          "Plataformas",
          "Preço / licença",
          "Diferença principal"
        ],
        "rows": [
          {
            "App": "[Logseq](/pt/power-local-llm/logseq-review)",
            "Plataformas": "Mac, Windows, Linux, iPhone, Android, web",
            "Preço / licença": "Grátis / AGPL-3.0",
            "Diferença principal": "Outliner de código aberto; IA só por um servidor MCP opcional"
          },
          {
            "App": "[Tolaria](/pt/power-local-llm/tolaria-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Preço / licença": "Grátis / AGPL-3.0-or-later",
            "Diferença principal": "Arquivos Markdown em um cofre com Git"
          },
          {
            "App": "[SiYuan](/pt/power-local-llm/siyuan-review)",
            "Plataformas": "Mac, Windows, Linux, iPhone, Android",
            "Preço / licença": "Grátis + sincronização paga / AGPL-3.0",
            "Diferença principal": "Auto-hospedado, referências por bloco, agente de IA embutido"
          }
        ],
        "note": "Confirme o preço, a licença e as plataformas de cada app na página dele antes de escolher."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "Existe uma versão do Hillnote para Linux ou para Mac com Intel?",
            "a": "O título da página de download menciona Linux, mas ela só leva à versão do GitHub (uma versão de Mac para Apple silicon e um instalador do Windows) e às duas lojas de celular. Nenhum arquivo para Linux ou Mac com Intel foi encontrado."
          },
          {
            "q": "Quais modelos locais o Hillnote usa?",
            "a": "A página de preços cita Ollama e Apple Intelligence para edições em linha e tarefas rápidas. As notas da App Store acrescentam um modelo offline embutido no iPhone e Gemma 3 ou Qwen3 para baixar no iOS 26 ou posterior; não há lista de modelos para o computador."
          },
          {
            "q": "Como funcionam os créditos dos modelos premium?",
            "a": "Free e Plus incluem 10.000 créditos por mês e Pro 50.000 por semana; um pacote de 110.000 créditos extras custa $10 uma vez. A página de preços não diz quantos créditos uma solicitação consome."
          },
          {
            "q": "Que versão o README do GitHub descreve?",
            "a": "O README diz «Currently: v0.40.9», mas a versão mais recente é a 0.43.15, então o README está desatualizado; esta análise usa a versão publicada."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O Hillnote oferece notas Markdown simples no seu próprio disco, IA local via Ollama e Apple Intelligence, modelos na nuvem e sincronização opcionais, e lançou cinco versões entre 22 e 30 de outubro de 2026. Em contrapartida, nenhuma licença é indicada, o repositório do GitHub não publica código-fonte, o vendedor na App Store é uma pessoa física, com um link de empresa sem explicação, e velocidade e qualidade das respostas não foram testadas. Serve a quem quer arquivos Markdown com IA opcional e pode começar pelo plano grátis; quem precisa de afirmações de privacidade auditadas deve ler a política como uma declaração, não como prova."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Página de download do Hillnote](https://hillnote.com/download) — plataformas e links de download, consultado em 1º de novembro de 2026.",
          "[Preços do Hillnote](https://hillnote.com/pricing) — planos, créditos e motores de IA local, consultado em 1º de novembro de 2026.",
          "[Política de privacidade do Hillnote](https://hillnote.com/privacy) — coleta de dados, sincronização e fluxo de dados da IA, consultado em 1º de novembro de 2026.",
          "[Página de segurança do Hillnote](https://hillnote.com/security) — criptografia e padrões de sincronização, consultado em 1º de novembro de 2026.",
          "[Hillnote no GitHub](https://github.com/Rajathbail/hillnote) — README, versões e arquivos, consultado em 1º de novembro de 2026.",
          "[Hillnote na App Store](https://apps.apple.com/app/hillnote/id6754959344) — descrição, histórico de versões e requisitos, consultado em 1º de novembro de 2026.",
          "[Hillnote no Google Play](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android) — página e data de atualização, consultado em 1º de novembro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leitura relacionada",
        "items": [
          "[Análise do Logseq](/pt/power-local-llm/logseq-review) — um outliner de código aberto, com foco local e servidor MCP opcional.",
          "[Análise do Tolaria](/pt/power-local-llm/tolaria-review) — um app de notas gratuito para computador com arquivos Markdown em um cofre com Git.",
          "[Análise do SiYuan](/pt/power-local-llm/siyuan-review) — um espaço de conhecimento auto-hospedado com agente de IA embutido.",
          "[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local."
        ]
      }
    }
  },
  ar: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-01",
    "dateModified": "2026-11-01",
    "next_refresh_due": "2027-05-01",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/hillnote-review-hero-ar.webp",
    "title": "مراجعة Hillnote: ملاحظات Markdown محلية أولًا مع ذكاء اصطناعي على الجهاز",
    "seoTitle": "مراجعة Hillnote: ملاحظات Markdown محلية وذكاء اصطناعي",
    "intro": "Hillnote مساحة عمل للملاحظات على أجهزة Mac وWindows وiPhone وiPad وAndroid، تحفظ عملك في ملفات Markdown بسيطة على جهازك وتضيف فوقها ذكاءً اصطناعيًا: نماذج محلية عبر Ollama وApple Intelligence، ونماذج سحابية اختيارية، ومزامنة اختيارية. تذكر App Store أن البائع هو Rajath Bail. تستند هذه المراجعة إلى [صفحة التنزيل](https://hillnote.com/download) و[صفحة الأسعار](https://hillnote.com/pricing) وسياسة الخصوصية و[إصدارات GitHub](https://github.com/Rajathbail/hillnote/releases/latest) وصفحات المتاجر، وقد روجعت في 1 نوفمبر 2026؛ ولم تختبر PromptQuorum التطبيق عمليًا.",
    "metaDescription": "مراجعة Hillnote: ملاحظات Markdown محلية لأجهزة Mac وWindows وiPhone وAndroid مع ذكاء اصطناعي عبر Ollama ونماذج سحابية ومزامنة اختيارية. خطة مجانية.",
    "twitterDescription": "مراجعة Hillnote: ملاحظات Markdown على قرصك الخاص، مع ذكاء اصطناعي محلي عبر Ollama وApple Intelligence وإضافات سحابية مدفوعة. ما تؤكده المصادر وما لا تؤكده.",
    "audience": "من يدوّنون الملاحظات على Mac أو Windows أو الهاتف ويريدون معرفة أين يحفظ Hillnote ملاحظاتهم، وماذا يفعل ذكاؤه الاصطناعي محليًا، وكم تكلّف الخطط، وأي ادعاءات تتركها المصادر مفتوحة.",
    "readTime": "6 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة Hillnote",
    "targetKeywords": [
      "مراجعة hillnote",
      "تطبيق hillnote",
      "تطبيق ملاحظات markdown محلي",
      "تطبيق ملاحظات بذكاء اصطناعي محلي",
      "تطبيق ملاحظات مع ollama",
      "تطبيق ملاحظات ذكاء اصطناعي دون اتصال",
      "أسعار hillnote"
    ],
    "current_models_mentioned": [
      "Gemma 3",
      "Qwen3",
      "Claude",
      "GPT",
      "Gemini"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "iPhone",
      "Windows PC"
    ],
    "leadAnswerBlock": "**Hillnote (إصدار سطح المكتب 0.43.15، صدر في 30 أكتوبر 2026) مساحة عمل لملاحظات Markdown على Mac وWindows وiPhone وiPad وAndroid، تحفظ ملفاتك على قرصك الخاص وتضيف ذكاءً اصطناعيًا محليًا وسحابيًا.** تغطي الخطة المجانية المحرر والذكاء الاصطناعي المحلي، وتضيف الخطط السنوية المدفوعة مساحة مزامنة ونشرًا ومهامّ دورية واستخدامًا أكبر للنماذج السحابية. كل ما هنا مأخوذ من موقع المطوّر وصفحات سياساته وGitHub وصفحات المتاجر.",
    "quickAnswerTop": {
      "ar": {
        "question": "هل يحتاج Hillnote إلى حساب أو اتصال بالإنترنت؟",
        "answer": "بحسب المطوّر، لا: الملاحظات ملفات Markdown بسيطة في مجلد تختاره، ويعمل التطبيق دون اتصال وبلا تسجيل، والمزامنة متوقفة افتراضيًا. الأجزاء التي تحتاج إلى الإنترنت هي النماذج السحابية والمزامنة والنشر.",
        "bullets": [
          "تُضبط المزامنة لكل مساحة عمل، فيمكن أن تبقى إحداها على الجهاز بينما تُزامَن أخرى.",
          "تأتي نسختا Mac وWindows من GitHub Releases، وتطبيقات الهاتف من App Store وGoogle Play.",
          "يمكن لـ Claude وChatGPT وCodex وCursor الاتصال عبر MCP أو قراءة مجلد مساحة العمل مباشرة.",
          "يكتب Hillnote ملفي سياق AGENTS.md وCLAUDE.md لتتمكن أدوات الذكاء الاصطناعي الخارجية من التنقل في مساحة العمل."
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "إجابة سريعة",
        "anchor": "quick-answer"
      },
      {
        "label": "ما هو Hillnote؟",
        "anchor": "what-is-hillnote"
      },
      {
        "label": "كيف تحصل عليه",
        "anchor": "get-it"
      },
      {
        "label": "المتطلبات",
        "anchor": "requirements"
      },
      {
        "label": "كيف تبدأ",
        "anchor": "getting-started"
      },
      {
        "label": "الميزات التي أكدتها المصادر",
        "anchor": "key-features"
      },
      {
        "label": "تدفق البيانات والخصوصية",
        "anchor": "privacy"
      },
      {
        "label": "لمن يناسب",
        "anchor": "who-should-use"
      },
      {
        "label": "ما لم نتمكن من التحقق منه",
        "anchor": "who-should-not-use"
      },
      {
        "label": "المنافسون والبدائل",
        "anchor": "vs-alternatives"
      },
      {
        "label": "الأسئلة الشائعة",
        "anchor": "faq"
      },
      {
        "label": "الخلاصة",
        "anchor": "verdict"
      },
      {
        "label": "المصادر",
        "anchor": "sources"
      },
      {
        "label": "قراءات ذات صلة",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "النقاط الرئيسية",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Hillnote مساحة عمل لملاحظات Markdown محلية أولًا لأجهزة Mac وWindows وiPhone وiPad وAndroid، مع ذكاء اصطناعي على الجهاز ونماذج سحابية ومزامنة اختيارية."
          },
          {
            "type": "plain-terms",
            "text": "ملاحظاتك ملفات نصية عادية على قرصك؛ ويستطيع مساعد الذكاء الاصطناعي قراءتها وتعديلها، إما بنموذج على جهازك أو بنموذج سحابي تختاره."
          }
        ],
        "items": [
          "الصيانة: صدر إصدار سطح المكتب 0.43.15 في 30 أكتوبر 2026، وحُدّث تطبيقا iPhone وAndroid في 29 أكتوبر 2026، فلا ينطبق تحذير المشروع المتوقف.",
          "التكلفة: خطة مجانية وخطتان سنويتان مدفوعتان؛ والمبالغ في جدول «كيف تحصل عليه».",
          "الذكاء الاصطناعي: نماذج محلية عبر Ollama وApple Intelligence، ونموذج مدمج دون اتصال على iPhone، ونماذج سحابية اختيارية.",
          "الشيفرة: لم يُذكر ترخيص، ولا يحتوي مستودع GitHub إلا على ملف README وملفات تنزيل الإصدارات.",
          "المطوّر: مطوّر فرد مذكور بائعًا في App Store؛ ويربط تذييل الموقع بشركة اسمها Colloqi دون شرح العلاقة."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "تستند هذه المراجعة إلى hillnote.com وسياسة الخصوصية وإصدارات GitHub وصفحات المتاجر، وقد روجعت في 1 نوفمبر 2026. لم تثبّت PromptQuorum التطبيق ولم تشغّله ولم تقِس أداءه، لذلك لا تُقيَّم السرعة ولا جودة الملاحظات ولا جودة الإجابات."
          }
        ]
      },
      "overview": {
        "id": "what-is-hillnote",
        "title": "ما هو Hillnote؟",
        "content": [
          "**Hillnote تطبيق مساحة عمل للكتابة والتخطيط وجمع الأفكار، مبني على ملفات Markdown بسيطة تبقى على جهازك.** تدرجه App Store باسم «HillNote» في فئة الإنتاجية من البائع Rajath Bail، وكان أول إصدار له على iPhone في 16 يونيو 2026؛ ويكتب الموقع والتطبيقات الاسم «Hillnote».",
          "يصفه المطوّر بأنه مصنوع للبنّائين والكتّاب والفرق الصغيرة: محرر Markdown، وملاحظات سريعة، ودردشة مدمجة تقرأ ملفاتك وتعدّلها، وأدوات HTML صغيرة يمكن تثبيتها كأدوات مصغّرة، ومستوى مزامنة مجاني بين الهاتف وسطح المكتب."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "كيف تحصل عليه",
        "content": [
          "**يمكن تنزيل Hillnote مجانًا على Mac وWindows وiPhone وiPad وAndroid؛ ومثبّتات سطح المكتب مستضافة على GitHub لا على خادم المطوّر نفسه.**"
        ],
        "columns": [
          "الخيار",
          "مصدر الحصول عليه"
        ],
        "rows": [
          {
            "الخيار": "Mac",
            "مصدر الحصول عليه": "[Hillnote على GitHub Releases](https://github.com/Rajathbail/hillnote/releases/latest)، ملف .dmg أو .zip لـ Apple silicon"
          },
          {
            "الخيار": "Windows",
            "مصدر الحصول عليه": "[Hillnote على GitHub Releases](https://github.com/Rajathbail/hillnote/releases/latest)، مثبّت .exe"
          },
          {
            "الخيار": "iPhone وiPad",
            "مصدر الحصول عليه": "[Hillnote على App Store](https://apps.apple.com/app/hillnote/id6754959344)، مجاني مع مشتريات داخل التطبيق"
          },
          {
            "الخيار": "Android",
            "مصدر الحصول عليه": "[Hillnote على Google Play](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android)"
          },
          {
            "الخيار": "الخطط",
            "مصدر الحصول عليه": "Free بسعر $0؛ Plus بسعر $20 سنويًا؛ Pro بسعر $200 سنويًا (بالدولار الأمريكي في موقع المطوّر)"
          },
          {
            "الخيار": "الإضافات",
            "مصدر الحصول عليه": "110,000 رصيد إضافي بسعر $10 مرة واحدة؛ 1 GB مزامنة إضافية بسعر $10 سنويًا"
          },
          {
            "الخيار": "الموقع",
            "مصدر الحصول عليه": "[hillnote.com](https://hillnote.com)"
          },
          {
            "الخيار": "سياسة الخصوصية",
            "مصدر الحصول عليه": "[hillnote.com/privacy](https://hillnote.com/privacy)"
          },
          {
            "الخيار": "الشيفرة المصدرية",
            "مصدر الحصول عليه": "لم يُعثر عليها؛ [مستودع GitHub](https://github.com/Rajathbail/hillnote) فيه ملف README فقط"
          }
        ],
        "note": "الإصدار الذي روجع: سطح المكتب 0.43.15 (30 أكتوبر 2026، GitHub). تذكر App Store الإصدار 0.33.46 (29 أكتوبر 2026) وتعرض Google Play الإصدار 0.33.47 (29 أكتوبر 2026)؛ فالهاتف وسطح المكتب يستخدمان أرقام إصدارات منفصلة، ونسخة Mac المنزَّلة مخصصة لـ Apple silicon. يذكر الموقع الأسعار بالدولار الأمريكي فقط، ولم تُفحص أسعار المشتريات داخل التطبيق في متاجر الدول."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "المتطلبات",
        "content": [
          "**تذكر App Store أن الحد الأدنى هو iOS أو iPadOS 16.0؛ ولا تذكر المصادر حدًا أدنى لـ Mac أو Windows.**"
        ],
        "columns": [
          "البند",
          "ما تقوله المصادر"
        ],
        "rows": [
          {
            "البند": "سطح المكتب",
            "ما تقوله المصادر": "Mac: ملف .dmg أو .zip لـ Apple silicon؛ Windows: مثبّت .exe"
          },
          {
            "البند": "iPhone وiPad",
            "ما تقوله المصادر": "iOS أو iPadOS 16.0 أو أحدث، بحسب App Store"
          },
          {
            "البند": "النماذج دون اتصال على iPhone",
            "ما تقوله المصادر": "يتطلب تنزيل Gemma 3 أو Qwen3 نظام iOS 26 أو أحدث؛ ويفحص اختبار داخل التطبيق الذاكرة والمساحة والسرعة"
          },
          {
            "البند": "الذكاء الاصطناعي المحلي على سطح المكتب",
            "ما تقوله المصادر": "تثبيت محلي لـ Ollama أو Apple Intelligence، بحسب صفحة الأسعار"
          },
          {
            "البند": "الحساب",
            "ما تقوله المصادر": "غير لازم للاستخدام المحلي بحسب المطوّر؛ وتجمع المزامنة عنوان بريد إلكتروني لتسجيل الدخول"
          }
        ],
        "note": "لا تُذكر أرقام للذاكرة أو VRAM أو مساحة القرص للنماذج المحلية على سطح المكتب."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "كيف تبدأ",
        "content": [
          "**تتبع الخطوات وصف المطوّر نفسه؛ ولم تنفّذها PromptQuorum.**"
        ],
        "numberedItems": [
          {
            "title": "ثبّت التطبيق",
            "whyItMatters": "نزّل مثبّت Mac أو Windows من GitHub Releases، أو تطبيق الهاتف من App Store أو Google Play."
          },
          {
            "title": "افتح مساحة التهيئة",
            "whyItMatters": "بحسب وثائق المطوّر، ينشئ التطبيق مساحة عمل للتهيئة يستغرق إكمالها نحو دقيقتين."
          },
          {
            "title": "اختر أين يعمل الذكاء الاصطناعي",
            "whyItMatters": "استخدم نموذجًا محليًا عبر Ollama أو Apple Intelligence، أو دع الوضع التلقائي يمرّر المهام الأصعب إلى نموذج سحابي، أو أضف مفتاح API الخاص بك في خطتي Plus وPro."
          },
          {
            "title": "قرّر بشأن المزامنة",
            "whyItMatters": "المزامنة متوقفة افتراضيًا؛ فعّلها لكل مساحة عمل إذا أردت الملاحظات نفسها على كل جهاز."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "الميزات التي أكدتها المصادر",
        "content": [
          "**كل بند أدناه مأخوذ من موقع المطوّر أو صفحات المتاجر أو سياسة الخصوصية؛ ولم يُختبر أي منها بشكل مستقل.**"
        ],
        "items": [
          "**Markdown على القرص.** الملاحظات ملفات Markdown قياسية في مجلد تختاره، مع روابط بين المستندات وسجل للمستندات ومعاينة جنبًا إلى جنب لصفحات الويب وملفات PDF.",
          "**ذكاء اصطناعي محلي وسحابي.** تستخدم التعديلات المضمّنة والمهام السريعة Ollama أو Apple Intelligence على الجهاز؛ ويمرّر الوضع التلقائي المهام الأصعب إلى Claude وGPT ونماذج رائدة أخرى.",
          "**الدردشة مع ملفاتك.** تقرأ الدردشة المدمجة ملفاتك وتعدّلها وتنشئ ملفات جديدة، بحسب وصف App Store.",
          "**الاتصال بأدوات ذكاء اصطناعي أخرى.** يتصل Claude وChatGPT وCodex وCursor وغيرها عبر MCP محلي أو سحابي.",
          "**إضافات مدفوعة.** نشر مساحة عمل (Plus: واحدة، Pro: حتى ست مع نطاق مخصص)، ومهام دورية (Plus: حتى ثلاث، Pro: حتى خمس)، ومفاتيح API الخاصة بك."
        ],
        "note": "لا تذكر المصادر أي ميزات ذكاء اصطناعي تعمل دون اتصال تمامًا خارج مسار النماذج المحلية."
      },
      "privacy": {
        "id": "privacy",
        "title": "تدفق البيانات والخصوصية",
        "content": [
          "**تقول سياسة الخصوصية إن البيانات المحلية لا تُجمع: تبقى المستندات وسجل التعديل والإعدادات على قرصك إلى أن تفعّل ميزة ترسلها.** وعند إيقاف المزامنة، تنص السياسة على أن Hillnote لا يجمع محتوى مستنداتك ولا سلوك التحرير لديك إطلاقًا. وعند تفعيل المزامنة تذكر السياسة بريدك الإلكتروني لتسجيل الدخول، واسم عرض اختياريًا، وبيانات وصفية للمزامنة والنشاط، وأدوار التعاون، والمحتوى المنشور، وحالة الفوترة.",
          "تُخزَّن مساحات العمل المتزامنة على AWS. يمكن للخدمة قراءة الملاحظات غير المحمية بكلمة مرور، وهذا ما يتيح البحث والذكاء الاصطناعي والمهام الدورية والنشر؛ أما الملاحظات المحمية بكلمة مرور فتُشفَّر على جهازك وتقول السياسة إن المفتاح لا يصل إلى خوادم Hillnote. استخدام الذكاء الاصطناعي المتقدم اختياري: تقول السياسة إن الاستعلامات والمحتوى تذهب إلى خوادم مزوّد النموذج (OpenAI أو Claude أو Gemini)، وقد يستخدمها المزوّد وفق سياساته. يستخدم الموقع Google Analytics، ولا تذكر السياسة حزم SDK إعلانية، ولا تُحلَّل سجلات الأعطال إلا بموافقة."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "هذه إقرارات من المطوّر وليست نتائج تدقيق، والشيفرة المصدرية للتطبيق غير منشورة. لم تفحص PromptQuorum حركة الشبكة. لا تذكر السياسة عنوانًا بريديًا، وتخضع للقانون الهندي، وتُنظر النزاعات أمام محاكم بنغالور."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**من يدوّنون بصيغة Markdown** ويريدون ملفات تُفتح في أي محرر وتبقى على قرصهم الخاص.",
          "**مستخدمو Ollama** الذين يريدون مساعدًا يعدّل ملاحظاتهم بنموذج موجود أصلًا على حاسوبهم.",
          "**من يعملون مع Claude أو ChatGPT أو Cursor** ويريدون أن تقرأ هذه الأدوات الملاحظات نفسها وتعدّلها."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**الأداء.** السرعة واستهلاك الذاكرة واستنزاف البطارية وجودة إجابات النماذج المحلية لم تُختبر.",
          "**الترخيص والشيفرة.** لم يُذكر ترخيص، ويحتوي مستودع GitHub على README وملفات تنزيل الإصدارات لا على شيفرة مصدرية.",
          "**الهاتف مقابل سطح المكتب.** يستخدم تطبيقا الهاتف وسطح المكتب أرقام إصدارات منفصلة، ولا تذكر المصادر هل تتطابق ميزاتهما.",
          "**نطاق العمل دون اتصال.** لا يوجد توثيق لأي ميزات ذكاء اصطناعي تعمل دون إنترنت خارج مسار النماذج المحلية.",
          "**الشركة.** لم تُشرح العلاقة برابط Colloqi في تذييل الموقع ولا الجهة القانونية وراء التطبيق."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "المنافسون والبدائل",
        "columns": [
          "التطبيق",
          "المنصات",
          "السعر / الترخيص",
          "الفرق الرئيسي"
        ],
        "rows": [
          {
            "التطبيق": "[Logseq](/ar/power-local-llm/logseq-review)",
            "المنصات": "Mac وWindows وLinux وiPhone وAndroid وويب",
            "السعر / الترخيص": "مجاني / AGPL-3.0",
            "الفرق الرئيسي": "أداة مخطط هرمي مفتوحة المصدر؛ الذكاء الاصطناعي عبر خادم MCP اختياري فقط"
          },
          {
            "التطبيق": "[Tolaria](/ar/power-local-llm/tolaria-review)",
            "المنصات": "Mac وWindows وLinux",
            "السعر / الترخيص": "مجاني / AGPL-3.0-or-later",
            "الفرق الرئيسي": "ملفات Markdown في خزنة مدعومة بـ Git"
          },
          {
            "التطبيق": "[SiYuan](/ar/power-local-llm/siyuan-review)",
            "المنصات": "Mac وWindows وLinux وiPhone وAndroid",
            "السعر / الترخيص": "مجاني + مزامنة مدفوعة / AGPL-3.0",
            "الفرق الرئيسي": "مستضاف ذاتيًا، مراجع على مستوى الكتل، وكيل ذكاء اصطناعي مدمج"
          }
        ],
        "note": "تحقق من السعر الحالي والترخيص والمنصات لكل تطبيق في صفحته الخاصة قبل الاختيار."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل توجد نسخة من Hillnote لـ Linux أو لأجهزة Mac بمعالج Intel؟",
            "a": "يذكر عنوان صفحة التنزيل Linux، لكنها لا تربط إلا بإصدار GitHub (نسخة Mac لـ Apple silicon ومثبّت Windows) وبمتجري الهاتف. لم يُعثر على ملف لـ Linux أو لـ Mac بمعالج Intel."
          },
          {
            "q": "ما النماذج المحلية التي يستخدمها Hillnote؟",
            "a": "تذكر صفحة الأسعار Ollama وApple Intelligence للتعديلات المضمّنة والمهام السريعة. وتضيف ملاحظات App Store نموذجًا مدمجًا دون اتصال على iPhone مع Gemma 3 أو Qwen3 القابلين للتنزيل على iOS 26 أو أحدث؛ ولا تُذكر قائمة نماذج لسطح المكتب."
          },
          {
            "q": "كيف تعمل أرصدة النماذج المتقدمة؟",
            "a": "تتضمن Free وPlus رصيد 10,000 شهريًا وPro رصيد 50,000 أسبوعيًا؛ وتكلّف حزمة 110,000 رصيد إضافي $10 مرة واحدة. ولا تذكر صفحة الأسعار كم رصيدًا يستهلكه الطلب الواحد."
          },
          {
            "q": "أي إصدار يصفه README على GitHub؟",
            "a": "يقول README «Currently: v0.40.9» بينما أحدث إصدار هو 0.43.15، فملف README قديم؛ وتعتمد هذه المراجعة على الإصدار المنشور."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "يقدّم Hillnote ملاحظات Markdown بسيطة على قرصك الخاص، وذكاءً اصطناعيًا محليًا عبر Ollama وApple Intelligence، ونماذج سحابية ومزامنة اختيارية، وقد أصدر خمسة إصدارات بين 22 و30 أكتوبر 2026. في المقابل لم يُذكر ترخيص، ولا ينشر مستودع GitHub شيفرة مصدرية، والبائع في App Store فرد برابط شركة غير موضّح، والسرعة وجودة الإجابات لم تُختبرا. يناسب من يريد ملفات Markdown مع ذكاء اصطناعي اختياري ويمكنه البدء بالخطة المجانية؛ ومن يحتاج إلى ادعاءات خصوصية مدقَّقة فعليه أن يقرأ السياسة بوصفها إقرارًا لا دليلًا."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[صفحة تنزيل Hillnote](https://hillnote.com/download) — المنصات وروابط التنزيل، روجعت في 1 نوفمبر 2026.",
          "[أسعار Hillnote](https://hillnote.com/pricing) — الخطط والأرصدة وبيئات تشغيل الذكاء الاصطناعي المحلي، روجعت في 1 نوفمبر 2026.",
          "[سياسة خصوصية Hillnote](https://hillnote.com/privacy) — جمع البيانات والمزامنة وتدفق بيانات الذكاء الاصطناعي، روجعت في 1 نوفمبر 2026.",
          "[صفحة أمان Hillnote](https://hillnote.com/security) — التشفير والإعدادات الافتراضية للمزامنة، روجعت في 1 نوفمبر 2026.",
          "[Hillnote على GitHub](https://github.com/Rajathbail/hillnote) — README والإصدارات والملفات، روجعت في 1 نوفمبر 2026.",
          "[Hillnote على App Store](https://apps.apple.com/app/hillnote/id6754959344) — الوصف وسجل الإصدارات والمتطلبات، روجعت في 1 نوفمبر 2026.",
          "[Hillnote على Google Play](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android) — الصفحة وتاريخ التحديث، روجعت في 1 نوفمبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة Logseq](/ar/power-local-llm/logseq-review) — أداة مخطط هرمي مفتوحة المصدر ومحلية أولًا مع خادم MCP اختياري.",
          "[مراجعة Tolaria](/ar/power-local-llm/tolaria-review) — تطبيق ملاحظات مجاني لسطح المكتب بملفات Markdown في خزنة مدعومة بـ Git.",
          "[مراجعة SiYuan](/ar/power-local-llm/siyuan-review) — مساحة معرفة مستضافة ذاتيًا مع وكيل ذكاء اصطناعي مدمج.",
          "[دليل برمجيات النماذج المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية."
        ]
      }
    }
  },
  zh: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-01",
    "dateModified": "2026-11-01",
    "next_refresh_due": "2027-05-01",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/hillnote-review-hero-zh.webp",
    "title": "Hillnote 评测：带设备端 AI 的本地优先 Markdown 笔记",
    "seoTitle": "Hillnote 评测：本地 Markdown 笔记与 AI",
    "intro": "Hillnote 是面向 Mac、Windows、iPhone、iPad 和 Android 的笔记工作区，把你的内容保存为自己设备上的普通 Markdown 文件，并在其上叠加 AI：通过 Ollama 和 Apple Intelligence 运行本地模型，云端模型和同步均为可选。App Store 列出的卖家是 Rajath Bail。本评测基于[下载页面](https://hillnote.com/download)、[定价页面](https://hillnote.com/pricing)、隐私政策、[GitHub 发布版本](https://github.com/Rajathbail/hillnote/releases/latest)和各应用商店页面，核查于 2026 年 11 月 1 日；PromptQuorum 没有实际试用过该应用。",
    "metaDescription": "Hillnote 评测：适用于 Mac、Windows、iPhone 和 Android 的本地优先 Markdown 笔记，可通过 Ollama 使用本地 AI，云端模型与同步可选。有免费版，未实测。",
    "twitterDescription": "Hillnote 评测：Markdown 笔记保存在你自己的磁盘上，通过 Ollama 和 Apple Intelligence 使用本地 AI，另有付费云端功能。资料证实了什么，没有证实什么。",
    "audience": "在 Mac、Windows 或手机上记笔记，想了解 Hillnote 把笔记存在哪里、AI 在本地能做什么、套餐多少钱，以及哪些说法资料没有证实的读者。",
    "readTime": "阅读约6分钟",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Hillnote 评测",
    "targetKeywords": [
      "hillnote 评测",
      "hillnote 应用",
      "本地优先 markdown 笔记应用",
      "本地 ai 笔记应用",
      "ollama 笔记应用",
      "离线 ai 笔记应用",
      "hillnote 价格"
    ],
    "current_models_mentioned": [
      "Gemma 3",
      "Qwen3",
      "Claude",
      "GPT",
      "Gemini"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "iPhone",
      "Windows PC"
    ],
    "leadAnswerBlock": "**Hillnote（桌面版 0.43.15，2026 年 10 月 30 日发布）是面向 Mac、Windows、iPhone、iPad 和 Android 的 Markdown 笔记工作区，把文件保存在你自己的磁盘上，并提供本地与云端 AI。**免费版涵盖编辑器和本地 AI；付费年度套餐增加同步存储、发布、例行任务和更多云端模型用量。这里的所有说法都来自开发者网站、政策页面、GitHub 和各应用商店页面。",
    "quickAnswerTop": {
      "zh": {
        "question": "Hillnote 需要账号或网络连接吗？",
        "answer": "据开发者所述不需要：笔记是你所选文件夹里的普通 Markdown 文件，应用可离线使用且无需注册，同步默认关闭。需要联网的是云端模型、同步和发布这几部分。",
        "bullets": [
          "同步按工作区设置，因此一个工作区可以只留在设备上，另一个则同步。",
          "Mac 和 Windows 版从 GitHub Releases 获取；手机应用来自 App Store 和 Google Play。",
          "Claude、ChatGPT、Codex 和 Cursor 可以通过 MCP 连接，也可以直接读取工作区文件夹。",
          "Hillnote 会写入 AGENTS.md 和 CLAUDE.md 上下文文件，方便外部 AI 工具了解工作区。"
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "快速回答",
        "anchor": "quick-answer"
      },
      {
        "label": "Hillnote 是什么？",
        "anchor": "what-is-hillnote"
      },
      {
        "label": "获取方式",
        "anchor": "get-it"
      },
      {
        "label": "系统要求",
        "anchor": "requirements"
      },
      {
        "label": "如何上手",
        "anchor": "getting-started"
      },
      {
        "label": "资料证实的功能",
        "anchor": "key-features"
      },
      {
        "label": "数据流向与隐私",
        "anchor": "privacy"
      },
      {
        "label": "适合谁使用",
        "anchor": "who-should-use"
      },
      {
        "label": "我们无法核实的内容",
        "anchor": "who-should-not-use"
      },
      {
        "label": "竞品与替代方案",
        "anchor": "vs-alternatives"
      },
      {
        "label": "常见问题",
        "anchor": "faq"
      },
      {
        "label": "结论",
        "anchor": "verdict"
      },
      {
        "label": "资料来源",
        "anchor": "sources"
      },
      {
        "label": "相关阅读",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "核心要点",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Hillnote 是面向 Mac、Windows、iPhone、iPad 和 Android 的本地优先 Markdown 笔记工作区，提供设备端 AI，云端模型与同步均为可选。"
          },
          {
            "type": "plain-terms",
            "text": "你的笔记是自己磁盘上的普通文本文件；AI 助手可以读取和编辑它们，用的可以是你电脑上的模型，也可以是你选择的云端模型。"
          }
        ],
        "items": [
          "维护情况：桌面版 0.43.15 于 2026 年 10 月 30 日发布，iPhone 和 Android 应用于 2026 年 10 月 29 日更新，因此不适用停更警告。",
          "费用：一个免费版加两个付费年度套餐；具体金额见“获取方式”表。",
          "AI：通过 Ollama 和 Apple Intelligence 运行本地模型，iPhone 上有内置离线模型，云端模型可选。",
          "源代码：未标明许可证，GitHub 仓库只有 README 和发布下载文件。",
          "开发者：App Store 列出的卖家是个人开发者；网站页脚链接到一家名为 Colloqi 的公司，但没有说明两者的关系。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本评测基于 hillnote.com、其隐私政策、GitHub 发布版本和各应用商店页面，核查于 2026 年 11 月 1 日。PromptQuorum 没有安装、运行或测试该应用，因此不评估速度、笔记质量和回答质量。"
          }
        ]
      },
      "overview": {
        "id": "what-is-hillnote",
        "title": "Hillnote 是什么？",
        "content": [
          "**Hillnote 是一款用于写作、规划和收集想法的工作区应用，基于保存在你设备上的普通 Markdown 文件。**App Store 以“HillNote”之名将其列在效率类别，卖家为 Rajath Bail，iPhone 版首次发布于 2026 年 6 月 16 日；网站和应用中的写法是“Hillnote”。",
          "开发者称它面向创作者、写作者和小团队：包含 Markdown 编辑器、快速笔记、能读取并编辑你文件的内置聊天、可固定为小组件的小型 HTML 工具，以及手机与桌面之间的免费同步额度。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "content": [
          "**Hillnote 可在 Mac、Windows、iPhone、iPad 和 Android 上免费下载；桌面安装包托管在 GitHub，而不是开发者自己的服务器。**"
        ],
        "columns": [
          "选项",
          "获取方式"
        ],
        "rows": [
          {
            "选项": "Mac",
            "获取方式": "[GitHub Releases 上的 Hillnote](https://github.com/Rajathbail/hillnote/releases/latest)，Apple silicon 版 .dmg 或 .zip"
          },
          {
            "选项": "Windows",
            "获取方式": "[GitHub Releases 上的 Hillnote](https://github.com/Rajathbail/hillnote/releases/latest)，安装程序 .exe"
          },
          {
            "选项": "iPhone 和 iPad",
            "获取方式": "[App Store 上的 Hillnote](https://apps.apple.com/app/hillnote/id6754959344)，免费，含应用内购买"
          },
          {
            "选项": "Android",
            "获取方式": "[Google Play 上的 Hillnote](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android)"
          },
          {
            "选项": "套餐",
            "获取方式": "Free $0；Plus $20/年；Pro $200/年（开发者网站以美元标价）"
          },
          {
            "选项": "附加项",
            "获取方式": "额外 110,000 点数 $10（一次性）；额外 1 GB 同步存储 $10/年"
          },
          {
            "选项": "官方网站",
            "获取方式": "[hillnote.com](https://hillnote.com)"
          },
          {
            "选项": "隐私政策",
            "获取方式": "[hillnote.com/privacy](https://hillnote.com/privacy)"
          },
          {
            "选项": "源代码",
            "获取方式": "未找到；[GitHub 仓库](https://github.com/Rajathbail/hillnote)只有 README"
          }
        ],
        "note": "核查的版本：桌面版 0.43.15（2026 年 10 月 30 日，GitHub）。App Store 显示 0.33.46（2026 年 10 月 29 日），Google Play 显示 0.33.47（2026 年 10 月 29 日）；手机版与桌面版使用各自的版本号，Mac 下载的是 Apple silicon 版本。网站只以美元标价，各地区商店的应用内购买价格未核查。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "系统要求",
        "content": [
          "**App Store 标明的最低系统是 iOS 或 iPadOS 16.0；资料没有给出 Mac 和 Windows 的最低版本。**"
        ],
        "columns": [
          "项目",
          "资料中的说法"
        ],
        "rows": [
          {
            "项目": "桌面端",
            "资料中的说法": "Mac：Apple silicon 版 .dmg 或 .zip；Windows：安装程序 .exe"
          },
          {
            "项目": "iPhone 和 iPad",
            "资料中的说法": "据 App Store，需 iOS 或 iPadOS 16.0 或更高版本"
          },
          {
            "项目": "iPhone 离线模型",
            "资料中的说法": "下载 Gemma 3 或 Qwen3 需要 iOS 26 或更高版本；应用内检测会评估内存、存储和速度"
          },
          {
            "项目": "桌面端本地 AI",
            "资料中的说法": "据定价页面，需本地安装的 Ollama 或使用 Apple Intelligence"
          },
          {
            "项目": "账号",
            "资料中的说法": "据开发者所述本地使用无需账号；同步会收集用于登录的邮箱"
          }
        ],
        "note": "资料没有给出桌面端本地模型所需的内存、显存或磁盘空间数字。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "如何上手",
        "content": [
          "**以下步骤依据开发者自己的说明；PromptQuorum 没有实际执行过。**"
        ],
        "numberedItems": [
          {
            "title": "安装应用",
            "whyItMatters": "从 GitHub Releases 下载 Mac 或 Windows 安装包，或从 App Store、Google Play 获取手机应用。"
          },
          {
            "title": "打开引导工作区",
            "whyItMatters": "据开发者文档，应用会创建一个引导工作区，大约两分钟即可走完。"
          },
          {
            "title": "选择 AI 运行的位置",
            "whyItMatters": "可以用 Ollama 或 Apple Intelligence 的本地模型，让自动模式把较难的任务交给云端模型，或在 Plus 和 Pro 中添加自己的 API 密钥。"
          },
          {
            "title": "决定是否同步",
            "whyItMatters": "同步默认关闭；如果想在每台设备上看到同样的笔记，请按工作区单独开启。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "资料证实的功能",
        "content": [
          "**以下每一项都来自开发者网站、应用商店页面或隐私政策；均未经过独立测试。**"
        ],
        "items": [
          "**磁盘上的 Markdown。**笔记是你所选文件夹中的标准 Markdown 文件，支持文档间链接、文档注册表，以及网页和 PDF 的并排预览。",
          "**本地与云端 AI。**行内编辑和快速任务在设备上使用 Ollama 或 Apple Intelligence；自动模式会把较难的任务交给 Claude、GPT 等前沿模型。",
          "**与文件对话。**据 App Store 描述，内置聊天会读取你的文件、编辑它们并创建新文件。",
          "**与其他 AI 工具连接。**Claude、ChatGPT、Codex、Cursor 等可通过本地或云端 MCP 连接。",
          "**付费附加功能。**发布工作区（Plus 一个，Pro 最多六个，Pro 支持自定义域名）、例行任务（Plus 最多三个，Pro 最多五个）以及自带 API 密钥。"
        ],
        "note": "除本地模型这条路径之外，资料没有说明哪些 AI 功能可以完全离线运行。"
      },
      "privacy": {
        "id": "privacy",
        "title": "数据流向与隐私",
        "content": [
          "**隐私政策称不会收集本地数据：文档、编辑历史和设置会一直留在你的磁盘上，直到你开启会发送它们的功能。**政策明确表示，同步关闭时 Hillnote 完全不收集你的文档内容或编辑行为。开启同步后，政策列出的数据包括用于登录的邮箱、可选的显示名称、同步和活动元数据、协作角色、已发布内容和计费状态。",
          "同步的工作区存储在 AWS。没有设密码的笔记可被服务读取，搜索、AI、例行任务和发布因此得以实现；设了密码的笔记在你的设备上加密，政策称密钥不会到达 Hillnote 的服务器。使用高级 AI 是可选的：政策称查询和内容会发送到模型提供方（OpenAI、Claude 或 Gemini）的服务器，提供方可能按各自的政策使用这些数据。网站使用 Google Analytics，政策未提及广告 SDK，崩溃日志仅在用户同意后分析。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "这些是开发者的声明，不是审计结果，应用的源代码也未公开。PromptQuorum 没有检查网络流量。政策未给出邮寄地址，适用印度法律，争议由班加罗尔的法院处理。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合谁使用",
        "items": [
          "**用 Markdown 记笔记的人**：想要能用任何编辑器打开、并留在自己磁盘上的文件。",
          "**Ollama 用户**：想要一个用电脑上现有模型来编辑笔记的助手。",
          "**使用 Claude、ChatGPT 或 Cursor 的人**：希望这些工具读取和编辑同一份笔记。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们无法核实的内容",
        "items": [
          "**性能。**速度、内存占用、电池消耗和本地模型的回答质量均未测试。",
          "**许可证与源代码。**未标明许可证，GitHub 仓库只有 README 和发布下载文件，没有源代码。",
          "**手机版与桌面版。**两者使用各自的版本号，资料没有说明功能是否一致。",
          "**离线范围。**除本地模型这条路径外，哪些 AI 功能无需联网没有文档说明。",
          "**公司主体。**网站页脚中 Colloqi 链接的关系，以及应用背后的法律实体，均未说明。"
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "竞品与替代方案",
        "columns": [
          "应用",
          "平台",
          "价格 / 许可",
          "主要区别"
        ],
        "rows": [
          {
            "应用": "[Logseq](/zh/power-local-llm/logseq-review)",
            "平台": "Mac、Windows、Linux、iPhone、Android、网页",
            "价格 / 许可": "免费 / AGPL-3.0",
            "主要区别": "开源大纲笔记；AI 仅通过可选 MCP 服务器"
          },
          {
            "应用": "[Tolaria](/zh/power-local-llm/tolaria-review)",
            "平台": "Mac、Windows、Linux",
            "价格 / 许可": "免费 / AGPL-3.0-or-later",
            "主要区别": "Markdown 文件保存在 Git 管理的库中"
          },
          {
            "应用": "[SiYuan](/zh/power-local-llm/siyuan-review)",
            "平台": "Mac、Windows、Linux、iPhone、Android",
            "价格 / 许可": "免费 + 付费同步 / AGPL-3.0",
            "主要区别": "自托管，块级引用，内置 AI 智能体"
          }
        ],
        "note": "选择之前，请在各应用自己的页面确认其当前价格、许可证和支持平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "Hillnote 有 Linux 版或 Intel Mac 版吗？",
            "a": "下载页面的标题提到了 Linux，但页面只链接到 GitHub 发布版本（Apple silicon 版 Mac 和 Windows 安装程序）以及两个手机应用商店。没有找到 Linux 或 Intel Mac 的文件。"
          },
          {
            "q": "Hillnote 使用哪些本地模型？",
            "a": "定价页面指出行内编辑和快速任务使用 Ollama 和 Apple Intelligence。App Store 更新说明另有 iPhone 内置离线模型，以及 iOS 26 或更高版本可下载的 Gemma 3 或 Qwen3；桌面端没有给出模型列表。"
          },
          {
            "q": "高级模型点数如何计算？",
            "a": "Free 和 Plus 每月含 10,000 点数，Pro 每周 50,000 点数；一个 110,000 点数的加量包一次性收费 $10。定价页面没有说明一次请求消耗多少点数。"
          },
          {
            "q": "GitHub 的 README 描述的是哪个版本？",
            "a": "README 写着“Currently: v0.40.9”，但最新发布版本是 0.43.15，所以 README 已过时；本评测以发布版本为准。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "Hillnote 提供保存在你自己磁盘上的普通 Markdown 笔记、通过 Ollama 和 Apple Intelligence 的本地 AI，以及可选的云端模型和同步，并在 2026 年 10 月 22 日至 30 日之间发布了五个版本。另一方面，它没有标明许可证，GitHub 仓库不公开源代码，App Store 卖家是个人，公司链接的关系也没有说明，速度和回答质量未经测试。适合想要带可选 AI 的 Markdown 文件、并愿意从免费版开始的人；需要经过审计的隐私保证的人，应把政策当作声明而不是证明。"
      },
      "sources": {
        "id": "sources",
        "title": "资料来源",
        "items": [
          "[Hillnote 下载页面](https://hillnote.com/download) — 支持的平台和下载链接，核查于 2026 年 11 月 1 日。",
          "[Hillnote 定价页面](https://hillnote.com/pricing) — 套餐、点数和本地 AI 运行环境，核查于 2026 年 11 月 1 日。",
          "[Hillnote 隐私政策](https://hillnote.com/privacy) — 数据收集、同步和 AI 数据流向，核查于 2026 年 11 月 1 日。",
          "[Hillnote 安全页面](https://hillnote.com/security) — 加密与同步默认设置，核查于 2026 年 11 月 1 日。",
          "[GitHub 上的 Hillnote](https://github.com/Rajathbail/hillnote) — README、发布版本和文件，核查于 2026 年 11 月 1 日。",
          "[App Store 上的 Hillnote](https://apps.apple.com/app/hillnote/id6754959344) — 描述、版本历史和系统要求，核查于 2026 年 11 月 1 日。",
          "[Google Play 上的 Hillnote](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android) — 应用页面和更新日期，核查于 2026 年 11 月 1 日。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "相关阅读",
        "items": [
          "[Logseq 评测](/zh/power-local-llm/logseq-review) — 带可选 MCP 服务器的开源本地优先大纲笔记。",
          "[Tolaria 评测](/zh/power-local-llm/tolaria-review) — 免费桌面笔记应用，Markdown 文件保存在 Git 管理的库中。",
          "[SiYuan 评测](/zh/power-local-llm/siyuan-review) — 带内置 AI 智能体的自托管知识工作区。",
          "[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。"
        ]
      }
    }
  },
  ko: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-01",
    "dateModified": "2026-11-01",
    "next_refresh_due": "2027-05-01",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/hillnote-review-hero-ko.webp",
    "title": "Hillnote 리뷰: 기기 내 AI를 갖춘 로컬 우선 Markdown 노트",
    "seoTitle": "Hillnote 리뷰: 로컬 Markdown 노트와 AI",
    "intro": "Hillnote는 Mac, Windows, iPhone, iPad, Android용 노트 작업 공간으로, 작업 내용을 사용자 기기의 일반 Markdown 파일로 저장하고 그 위에 AI를 얹습니다. Ollama와 Apple Intelligence를 통한 기기 내 모델, 선택형 클라우드 모델, 선택형 동기화를 지원합니다. App Store에 표시된 판매자는 Rajath Bail입니다. 이 리뷰는 [다운로드 페이지](https://hillnote.com/download), [요금 페이지](https://hillnote.com/pricing), 개인정보 처리방침, [GitHub 릴리스](https://github.com/Rajathbail/hillnote/releases/latest), 각 스토어 정보를 바탕으로 2026년 11월 1일에 확인한 내용입니다. PromptQuorum은 앱을 직접 사용해 보지 않았습니다.",
    "metaDescription": "Hillnote 리뷰: Mac, Windows, iPhone, Android용 로컬 우선 Markdown 노트. Ollama 기반 기기 내 AI와 선택형 클라우드·동기화. 무료 플랜 있음.",
    "twitterDescription": "Hillnote 리뷰: 내 디스크에 저장되는 Markdown 노트와 Ollama·Apple Intelligence 기반 기기 내 AI, 유료 클라우드 기능. 출처가 확인한 것과 확인하지 못한 것.",
    "audience": "Mac, Windows, 휴대폰에서 노트를 쓰면서 Hillnote가 노트를 어디에 저장하는지, AI가 기기 안에서 무엇을 하는지, 플랜 비용이 얼마인지, 출처가 확인하지 못한 주장이 무엇인지 알고 싶은 분.",
    "readTime": "6분 읽기",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Hillnote 리뷰",
    "targetKeywords": [
      "hillnote 리뷰",
      "hillnote 앱",
      "로컬 우선 markdown 노트 앱",
      "로컬 ai 노트 앱",
      "ollama 노트 앱",
      "오프라인 ai 노트 앱",
      "hillnote 가격"
    ],
    "current_models_mentioned": [
      "Gemma 3",
      "Qwen3",
      "Claude",
      "GPT",
      "Gemini"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "iPhone",
      "Windows PC"
    ],
    "leadAnswerBlock": "**Hillnote(데스크톱 버전 0.43.15, 2026년 10월 30일 출시)는 Mac, Windows, iPhone, iPad, Android용 Markdown 노트 작업 공간으로, 파일을 사용자의 디스크에 보관하고 로컬 AI와 클라우드 AI를 더합니다.** 무료 플랜은 편집기와 로컬 AI를 포함하며, 유료 연간 플랜은 동기화 저장 공간, 게시, 루틴, 더 많은 클라우드 모델 사용량을 추가합니다. 여기의 모든 내용은 개발자 사이트, 정책 페이지, GitHub, 각 스토어 정보에서 가져왔습니다.",
    "quickAnswerTop": {
      "ko": {
        "question": "Hillnote에는 계정이나 인터넷 연결이 필요합니까?",
        "answer": "개발자에 따르면 필요하지 않습니다. 노트는 사용자가 고른 폴더의 일반 Markdown 파일이고, 앱은 오프라인에서 작동하며 가입이 필요 없고, 동기화는 기본적으로 꺼져 있습니다. 인터넷이 필요한 부분은 클라우드 모델, 동기화, 게시입니다.",
        "bullets": [
          "동기화는 작업 공간별로 설정하므로, 한 작업 공간은 기기에만 두고 다른 작업 공간만 동기화할 수 있습니다.",
          "Mac과 Windows 빌드는 GitHub Releases에서, 휴대폰 앱은 App Store와 Google Play에서 받습니다.",
          "Claude, ChatGPT, Codex, Cursor는 MCP로 연결하거나 작업 공간 폴더를 직접 읽을 수 있습니다.",
          "Hillnote는 AGENTS.md와 CLAUDE.md 맥락 파일을 만들어 외부 AI 도구가 작업 공간을 파악하게 합니다."
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "빠른 답변",
        "anchor": "quick-answer"
      },
      {
        "label": "Hillnote란?",
        "anchor": "what-is-hillnote"
      },
      {
        "label": "설치 방법",
        "anchor": "get-it"
      },
      {
        "label": "요구 사항",
        "anchor": "requirements"
      },
      {
        "label": "시작하는 방법",
        "anchor": "getting-started"
      },
      {
        "label": "출처가 확인한 기능",
        "anchor": "key-features"
      },
      {
        "label": "데이터 흐름과 개인정보",
        "anchor": "privacy"
      },
      {
        "label": "이런 분께 적합합니다",
        "anchor": "who-should-use"
      },
      {
        "label": "확인하지 못한 내용",
        "anchor": "who-should-not-use"
      },
      {
        "label": "경쟁 앱과 대안",
        "anchor": "vs-alternatives"
      },
      {
        "label": "자주 묻는 질문",
        "anchor": "faq"
      },
      {
        "label": "총평",
        "anchor": "verdict"
      },
      {
        "label": "출처",
        "anchor": "sources"
      },
      {
        "label": "관련 글",
        "anchor": "related-reading"
      }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "핵심 내용",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Hillnote는 Mac, Windows, iPhone, iPad, Android용 로컬 우선 Markdown 노트 작업 공간으로, 기기 내 AI와 선택형 클라우드 모델·동기화를 제공합니다."
          },
          {
            "type": "plain-terms",
            "text": "노트는 내 디스크의 일반 텍스트 파일이며, AI 어시스턴트가 이를 읽고 편집합니다. 내 컴퓨터의 모델이든 직접 고른 클라우드 모델이든 쓸 수 있습니다."
          }
        ],
        "items": [
          "유지보수: 데스크톱 버전 0.43.15는 2026년 10월 30일에, iPhone과 Android 앱은 2026년 10월 29일에 업데이트되어 업데이트 중단 경고는 해당되지 않습니다.",
          "비용: 무료 플랜과 유료 연간 플랜 두 가지이며, 금액은 「설치 방법」 표에 있습니다.",
          "AI: Ollama와 Apple Intelligence 기반 로컬 모델, iPhone 내장 오프라인 모델, 선택형 클라우드 모델.",
          "소스: 라이선스가 명시되어 있지 않고, GitHub 저장소에는 README와 릴리스 다운로드만 있습니다.",
          "개발자: App Store 판매자는 개인 개발자이며, 사이트 하단은 Colloqi라는 회사로 연결되지만 관계는 설명되어 있지 않습니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이 리뷰는 2026년 11월 1일에 확인한 hillnote.com, 개인정보 처리방침, GitHub 릴리스, 각 스토어 정보를 바탕으로 합니다. PromptQuorum은 앱을 설치·실행·측정하지 않았으므로 속도, 노트 품질, 답변 품질은 평가하지 않습니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-hillnote",
        "title": "Hillnote란?",
        "content": [
          "**Hillnote는 기기에 남는 일반 Markdown 파일을 기반으로 글쓰기, 계획, 아이디어 수집을 하는 작업 공간 앱입니다.** App Store에는 「HillNote」라는 이름으로 생산성 카테고리에 판매자 Rajath Bail 명의로 올라 있으며, iPhone 앱의 첫 출시일은 2026년 6월 16일입니다. 사이트와 앱에서는 「Hillnote」로 표기합니다.",
          "개발자는 빌더, 창작자, 작가, 소규모 팀을 위한 앱이라고 설명합니다. Markdown 편집기, 빠른 메모, 파일을 읽고 편집하는 내장 채팅, 위젯으로 고정할 수 있는 작은 HTML 도구, 휴대폰과 데스크톱 사이의 무료 동기화 용량을 갖추고 있습니다."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "설치 방법",
        "content": [
          "**Hillnote는 Mac, Windows, iPhone, iPad, Android에서 무료로 내려받을 수 있으며, 데스크톱 설치 파일은 개발자 자체 서버가 아니라 GitHub에서 제공됩니다.**"
        ],
        "columns": [
          "옵션",
          "입수 방법"
        ],
        "rows": [
          {
            "옵션": "Mac",
            "입수 방법": "[GitHub Releases의 Hillnote](https://github.com/Rajathbail/hillnote/releases/latest), Apple silicon용 .dmg 또는 .zip"
          },
          {
            "옵션": "Windows",
            "입수 방법": "[GitHub Releases의 Hillnote](https://github.com/Rajathbail/hillnote/releases/latest), 설치 프로그램 .exe"
          },
          {
            "옵션": "iPhone·iPad",
            "입수 방법": "[App Store의 Hillnote](https://apps.apple.com/app/hillnote/id6754959344), 무료(앱 내 구입 포함)"
          },
          {
            "옵션": "Android",
            "입수 방법": "[Google Play의 Hillnote](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android)"
          },
          {
            "옵션": "플랜",
            "입수 방법": "Free $0, Plus 연 $20, Pro 연 $200(개발자 사이트의 미국 달러 표기)"
          },
          {
            "옵션": "추가 옵션",
            "입수 방법": "추가 크레딧 110,000개 $10(1회), 동기화 저장 공간 1GB 추가 연 $10"
          },
          {
            "옵션": "웹사이트",
            "입수 방법": "[hillnote.com](https://hillnote.com)"
          },
          {
            "옵션": "개인정보 처리방침",
            "입수 방법": "[hillnote.com/privacy](https://hillnote.com/privacy)"
          },
          {
            "옵션": "소스 코드",
            "입수 방법": "찾지 못함. [GitHub 저장소](https://github.com/Rajathbail/hillnote)에는 README만 있음"
          }
        ],
        "note": "확인한 버전: 데스크톱 0.43.15(2026년 10월 30일, GitHub). App Store는 0.33.46(2026년 10월 29일), Google Play는 0.33.47(2026년 10월 29일)로 표시하며, 휴대폰과 데스크톱은 별도의 버전 번호를 쓰고 Mac 다운로드는 Apple silicon용입니다. 사이트는 미국 달러로만 가격을 표시하며, 각 나라 스토어의 앱 내 구입 가격은 확인하지 않았습니다."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "요구 사항",
        "content": [
          "**App Store의 최소 요구 사양은 iOS 또는 iPadOS 16.0이며, Mac과 Windows의 최소 버전은 출처에 나와 있지 않습니다.**"
        ],
        "columns": [
          "항목",
          "출처의 기재 내용"
        ],
        "rows": [
          {
            "항목": "데스크톱",
            "출처의 기재 내용": "Mac: Apple silicon용 .dmg 또는 .zip, Windows: 설치 프로그램 .exe"
          },
          {
            "항목": "iPhone·iPad",
            "출처의 기재 내용": "App Store 기준 iOS 또는 iPadOS 16.0 이상"
          },
          {
            "항목": "iPhone 오프라인 모델",
            "출처의 기재 내용": "Gemma 3 또는 Qwen3 다운로드에는 iOS 26 이상이 필요하며, 앱 내 점검이 메모리·저장 공간·속도를 확인"
          },
          {
            "항목": "데스크톱 로컬 AI",
            "출처의 기재 내용": "요금 페이지 기준 로컬 Ollama 설치 또는 Apple Intelligence"
          },
          {
            "항목": "계정",
            "출처의 기재 내용": "개발자에 따르면 로컬 사용에는 불필요, 동기화는 로그인용 이메일을 수집"
          }
        ],
        "note": "데스크톱 로컬 모델에 필요한 RAM, VRAM, 디스크 용량 수치는 제시되어 있지 않습니다."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "시작하는 방법",
        "content": [
          "**아래 단계는 개발자 본인의 설명을 따른 것이며 PromptQuorum이 직접 실행하지는 않았습니다.**"
        ],
        "numberedItems": [
          {
            "title": "앱 설치하기",
            "whyItMatters": "Mac 또는 Windows 설치 파일은 GitHub Releases에서, 휴대폰 앱은 App Store 또는 Google Play에서 받습니다."
          },
          {
            "title": "시작용 작업 공간 열기",
            "whyItMatters": "개발자 문서에 따르면 앱은 약 2분이면 살펴볼 수 있는 시작용 작업 공간을 만듭니다."
          },
          {
            "title": "AI를 실행할 곳 정하기",
            "whyItMatters": "Ollama나 Apple Intelligence의 로컬 모델을 쓰거나, 자동 모드가 어려운 작업을 클라우드 모델에 넘기게 하거나, Plus와 Pro에서는 자신의 API 키를 추가합니다."
          },
          {
            "title": "동기화 여부 정하기",
            "whyItMatters": "동기화는 기본적으로 꺼져 있습니다. 모든 기기에서 같은 노트를 쓰려면 작업 공간별로 켭니다."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "출처가 확인한 기능",
        "content": [
          "**아래 항목은 모두 개발자 사이트, 스토어 정보, 개인정보 처리방침에서 가져왔으며 독립적으로 테스트하지 않았습니다.**"
        ],
        "items": [
          "**디스크의 Markdown.** 노트는 사용자가 고른 폴더의 표준 Markdown 파일이며, 문서 간 링크, 문서 레지스트리, 웹페이지와 PDF의 나란히 보기 미리보기를 지원합니다.",
          "**로컬 AI와 클라우드 AI.** 인라인 편집과 빠른 작업은 기기의 Ollama 또는 Apple Intelligence가 처리하고, 자동 모드는 어려운 작업을 Claude, GPT 등 최신 모델에 넘깁니다.",
          "**파일과 대화하기.** App Store 설명에 따르면 내장 채팅은 내 파일을 읽고 편집하며 새 파일도 만듭니다.",
          "**다른 AI 도구와의 연결.** Claude, ChatGPT, Codex, Cursor 등이 로컬 또는 클라우드 MCP로 연결됩니다.",
          "**유료 추가 기능.** 작업 공간 게시(Plus는 1개, Pro는 최대 6개이며 Pro는 사용자 지정 도메인 지원), 루틴(Plus는 최대 3개, Pro는 최대 5개), 자신의 API 키 사용."
        ],
        "note": "로컬 모델 경로 외에 어떤 AI 기능이 완전히 오프라인으로 작동하는지는 출처에 나와 있지 않습니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "데이터 흐름과 개인정보",
        "content": [
          "**개인정보 처리방침은 로컬 데이터를 수집하지 않는다고 밝힙니다. 문서, 편집 기록, 설정은 데이터를 전송하는 기능을 켜기 전까지 디스크에 남습니다.** 동기화가 꺼져 있는 동안 Hillnote는 문서 내용이나 편집 행동을 전혀 수집하지 않는다고 명시합니다. 동기화를 켜면 로그인용 이메일 주소, 선택적 표시 이름, 동기화·활동 메타데이터, 협업 역할, 게시된 콘텐츠, 결제 상태를 다룬다고 나열합니다.",
          "동기화된 작업 공간은 AWS에 저장됩니다. 비밀번호가 없는 노트는 서비스가 읽을 수 있으며, 이 덕분에 검색, AI, 루틴, 게시가 가능합니다. 비밀번호로 보호한 노트는 기기에서 암호화되고 키가 Hillnote 서버에 도달하지 않는다고 정책은 밝힙니다. 프리미엄 AI 사용은 선택 사항이며, 질의와 내용은 모델 제공자(OpenAI, Claude, Gemini)의 서버로 전송되고 제공자가 자체 정책에 따라 사용할 수 있다고 합니다. 웹사이트는 Google Analytics를 쓰고, 정책에 광고 SDK는 언급되지 않으며, 충돌 로그는 동의한 경우에만 분석됩니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이는 개발자의 선언일 뿐 감사 결과가 아니며, 앱의 소스 코드도 공개되어 있지 않습니다. PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다. 정책에는 우편 주소가 없고, 인도 법을 준거법으로 하며 분쟁은 방갈로르 법원에서 다룬다고 합니다."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "이런 분께 적합합니다",
        "items": [
          "**Markdown으로 노트를 쓰는 분**: 어떤 편집기로든 열 수 있고 내 디스크에 남는 파일을 원하는 경우.",
          "**Ollama 사용자**: 이미 컴퓨터에 있는 모델로 노트를 편집해 주는 어시스턴트를 원하는 경우.",
          "**Claude, ChatGPT, Cursor를 쓰는 분**: 이 도구들이 같은 노트를 읽고 편집하기를 원하는 경우."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 내용",
        "items": [
          "**성능.** 속도, 메모리 사용량, 배터리 소모, 로컬 모델 답변의 품질은 테스트하지 않았습니다.",
          "**라이선스와 소스.** 라이선스가 명시되어 있지 않고, GitHub 저장소에는 README와 릴리스 다운로드만 있으며 소스 코드는 없습니다.",
          "**휴대폰과 데스크톱.** 휴대폰 앱과 데스크톱 앱은 별도의 버전 번호를 쓰며, 기능이 같은지는 출처에 나와 있지 않습니다.",
          "**오프라인 범위.** 로컬 모델 경로 외에 인터넷 없이 작동하는 AI 기능은 문서화되어 있지 않습니다.",
          "**회사.** 사이트 하단의 Colloqi 링크와의 관계, 그리고 앱 뒤의 법인은 설명되어 있지 않습니다."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "경쟁 앱과 대안",
        "columns": [
          "앱",
          "플랫폼",
          "가격 / 라이선스",
          "핵심 차이"
        ],
        "rows": [
          {
            "앱": "[Logseq](/ko/power-local-llm/logseq-review)",
            "플랫폼": "Mac, Windows, Linux, iPhone, Android, 웹",
            "가격 / 라이선스": "무료 / AGPL-3.0",
            "핵심 차이": "오픈소스 아웃라이너, AI는 선택형 MCP 서버로만"
          },
          {
            "앱": "[Tolaria](/ko/power-local-llm/tolaria-review)",
            "플랫폼": "Mac, Windows, Linux",
            "가격 / 라이선스": "무료 / AGPL-3.0-or-later",
            "핵심 차이": "Git 기반 보관함에 Markdown 파일 저장"
          },
          {
            "앱": "[SiYuan](/ko/power-local-llm/siyuan-review)",
            "플랫폼": "Mac, Windows, Linux, iPhone, Android",
            "가격 / 라이선스": "무료 + 유료 동기화 / AGPL-3.0",
            "핵심 차이": "셀프 호스팅, 블록 단위 참조, 내장 AI 에이전트"
          }
        ],
        "note": "선택하기 전에 각 앱의 현재 가격, 라이선스, 지원 플랫폼을 해당 앱 페이지에서 확인하십시오."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "Hillnote에는 Linux 또는 Intel Mac 버전이 있습니까?",
            "a": "다운로드 페이지 제목에는 Linux가 언급되지만, 링크는 GitHub 릴리스(Apple silicon용 Mac 빌드와 Windows 설치 프로그램)와 두 휴대폰 스토어로만 이어집니다. Linux나 Intel Mac용 파일은 찾지 못했습니다."
          },
          {
            "q": "Hillnote는 어떤 로컬 모델을 사용합니까?",
            "a": "요금 페이지는 인라인 편집과 빠른 작업에 Ollama와 Apple Intelligence를 언급합니다. App Store 업데이트 노트에는 iPhone 내장 오프라인 모델과 iOS 26 이상에서 내려받는 Gemma 3 또는 Qwen3가 추가로 나옵니다. 데스크톱 모델 목록은 제시되어 있지 않습니다."
          },
          {
            "q": "프리미엄 모델 크레딧은 어떻게 작동합니까?",
            "a": "Free와 Plus는 월 10,000 크레딧, Pro는 주 50,000 크레딧을 포함하며, 110,000 크레딧 추가 팩은 1회 $10입니다. 요청 한 번에 크레딧이 얼마나 쓰이는지는 요금 페이지에 나와 있지 않습니다."
          },
          {
            "q": "GitHub README는 어느 버전을 설명합니까?",
            "a": "README에는 「Currently: v0.40.9」라고 적혀 있지만 최신 릴리스는 0.43.15입니다. README가 오래되어, 이 리뷰는 릴리스를 기준으로 합니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "총평",
        "content": "Hillnote는 내 디스크에 저장되는 일반 Markdown 노트, Ollama와 Apple Intelligence 기반 로컬 AI, 선택형 클라우드 모델과 동기화를 제공하며, 2026년 10월 22일부터 30일 사이에 다섯 번 릴리스되었습니다. 반면 라이선스가 명시되어 있지 않고, GitHub 저장소는 소스 코드를 공개하지 않으며, App Store 판매자는 회사 링크 관계가 설명되지 않은 개인이고, 속도와 답변 품질은 테스트하지 않았습니다. 선택형 AI가 있는 Markdown 파일을 원하고 무료 플랜으로 시작할 수 있는 분께 맞습니다. 감사를 거친 개인정보 보장이 필요하다면 정책을 증거가 아니라 선언으로 읽으십시오."
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[Hillnote 다운로드 페이지](https://hillnote.com/download) — 지원 플랫폼과 다운로드 링크, 2026년 11월 1일 확인.",
          "[Hillnote 요금 페이지](https://hillnote.com/pricing) — 플랜, 크레딧, 로컬 AI 실행 환경, 2026년 11월 1일 확인.",
          "[Hillnote 개인정보 처리방침](https://hillnote.com/privacy) — 데이터 수집, 동기화, AI 데이터 흐름, 2026년 11월 1일 확인.",
          "[Hillnote 보안 페이지](https://hillnote.com/security) — 암호화와 동기화 기본 설정, 2026년 11월 1일 확인.",
          "[GitHub의 Hillnote](https://github.com/Rajathbail/hillnote) — README, 릴리스, 배포 파일, 2026년 11월 1일 확인.",
          "[App Store의 Hillnote](https://apps.apple.com/app/hillnote/id6754959344) — 설명, 버전 기록, 요구 사항, 2026년 11월 1일 확인.",
          "[Google Play의 Hillnote](https://play.google.com/store/apps/details?id=com.hilltask.mobile.android) — 스토어 정보와 업데이트 날짜, 2026년 11월 1일 확인."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[Logseq 리뷰](/ko/power-local-llm/logseq-review) — 선택형 MCP 서버를 갖춘 오픈소스 로컬 우선 아웃라이너.",
          "[Tolaria 리뷰](/ko/power-local-llm/tolaria-review) — Git 기반 보관함에 Markdown 파일을 두는 무료 데스크톱 노트 앱.",
          "[SiYuan 리뷰](/ko/power-local-llm/siyuan-review) — 내장 AI 에이전트를 갖춘 셀프 호스팅 지식 작업 공간.",
          "[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그."
        ]
      }
    }
  },
}
