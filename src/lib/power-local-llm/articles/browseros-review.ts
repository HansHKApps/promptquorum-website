// BrowserOS Review: Open-Source AI Browser With Local Ollama and LM Studio Support
// Slug: browseros-review
// Covers the ORIGINAL BrowserOS (Chromium fork, Chat/Agent mode). BrowserOS neo (separate secondary browser for coding agents, same repo/site) is only mentioned.
// Companions: lastbrowser-review (power-local-llm), page-assist-review (local-llms cluster)
// Sources: browseros.com, docs.browseros.com (quick start, local models, BYO LLM, MCP, ad blocking, changelog), browseros.com/privacy (13 March 2026),
// github.com/browseros-ai/BrowserOS, all checked 2026-11-14 — no hands-on testing.
// Translations: docs/geo-translation.md applied (registers, tldr titles, readTime formats, /<lang>/ internal links); no regional compliance sections (not a compliance article).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-14",
    "dateModified": "2026-11-14",
    "next_refresh_due": "2027-05-14",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/browseros-review-hero-en.webp",
    "title": "BrowserOS Review: Open-Source AI Browser With Local Ollama and LM Studio Support",
    "seoTitle": "BrowserOS Review: AI Browser With Local Model Support",
    "intro": "BrowserOS is a free, open-source web browser built on Chromium for macOS, Windows and Linux, with an AI assistant built in. Its Chat Mode can use a local model through Ollama or LM Studio on your own machine or a cloud provider you configure, while its Agent Mode, which acts on web pages for you, is recommended with cloud models. This review covers what you download, where your data goes, the licence and what the sources leave unconfirmed.",
    "metaDescription": "BrowserOS review: a free, open-source AI browser for Mac, Windows and Linux that works with local Ollama or LM Studio models. Privacy, licence, risks.",
    "twitterDescription": "BrowserOS review: free open-source AI browser with local Ollama and LM Studio support. Privacy policy, AGPL-3.0 licence and what the sources leave unconfirmed.",
    "audience": "Mac, Windows and Linux users who want to know whether BrowserOS can run on a local Ollama or LM Studio model, what it costs and which claims the sources leave open.",
    "readTime": "6 min read",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "BrowserOS review",
    "targetKeywords": [
      "browseros review",
      "browseros ollama",
      "browseros lm studio",
      "local ai browser",
      "open source ai browser",
      "browseros privacy",
      "ai browser local llm"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Mac",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**Warning: the changelog of the original BrowserOS lists no release after version 0.46.0 of 17 June 2026, so it may be unmaintained — check it before relying on it.** It is a free, open-source (AGPL-3.0) Chromium-based browser for macOS, Windows and Linux with a built-in AI assistant that can use local models through Ollama or LM Studio.",
    "quickAnswerTop": {
      "en": {
        "question": "Can BrowserOS run on a local model?",
        "answer": "Yes for Chat Mode: the documentation describes connecting Ollama or LM Studio. The documentation says local models are not yet powerful enough for Agent Mode.",
        "bullets": [
          "Ollama or LM Studio is a separate installation; the browser does not bundle a model.",
          "The documentation asks for a context window of at least 15,000–20,000 tokens; the Ollama default of 4,096 is too low.",
          "The starter model in the documentation is Qwen3 4B, a 2.28 GB download."
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
        "label": "What Is BrowserOS?",
        "anchor": "what-is-browseros"
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
            "text": "BrowserOS is a free, open-source Chromium browser for Mac, Windows and Linux with a built-in AI assistant that can use local Ollama or LM Studio models."
          },
          {
            "type": "plain-terms",
            "text": "You browse in a normal desktop browser and ask an AI assistant about the page you are reading, using either a model running on your own computer or a cloud AI service you set up yourself."
          }
        ],
        "items": [
          "Maintenance: the changelog's newest entry is version 0.46.0 of 17 June 2026, about five months before this review; the shared GitHub repository was pushed to on 14 November 2026, but its releases list only BrowserOS neo builds.",
          "Cost: free and open source under AGPL-3.0; no pricing page was found.",
          "Platforms: macOS 13 or later, Windows and Linux; downloads come from the maker's site, and macOS also has a Homebrew cask.",
          "AI: your own provider keys, local models through Ollama or LM Studio, or ChatGPT Pro and GitHub Copilot subscriptions.",
          "Privacy: the policy says a local model sends no data off the device; the default AI provider is a cloud service."
        ],
        "callouts": [
          {
            "type": "warning",
            "text": "No release in the changelog for more than three months. BrowserOS may be unmaintained: confirm it still works on your system and with your AI provider before relying on it."
          },
          {
            "type": "note",
            "text": "This review is based on browseros.com, its documentation, privacy policy and the GitHub repository, checked on 14 November 2026. PromptQuorum has not installed, run or benchmarked the browser, so speed, stability and answer quality are not assessed. BrowserOS neo, a separate product from the same maker, is covered only where it affects this review."
          }
        ]
      },
      "overview": {
        "id": "what-is-browseros",
        "title": "What Is BrowserOS?",
        "content": [
          "**BrowserOS is an AI-native web browser, a Chromium fork, with an assistant that can answer questions about pages and, in Agent Mode, act on them.** The documentation lists three modes: Chat Mode, Agent Mode and Graph Mode, which is marked coming soon. It also lists built-in connections to services such as Gmail, Calendar, Docs, Sheets and Notion.",
          "The same website and GitHub repository also host BrowserOS neo (version 0.52.0, October 2026), a separate secondary browser built for AI coding agents such as Claude Code and Cursor, which the maker positions next to Chrome rather than as a replacement. This review covers the original BrowserOS, although the homepage now leads with neo. The repository README names Felafax, Inc. in its copyright line."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Get It",
        "content": [
          "**BrowserOS is a free download for macOS, Windows and Linux from the maker's download page; macOS can also be installed with Homebrew.**"
        ],
        "columns": [
          "Option",
          "How to get it"
        ],
        "rows": [
          {
            "Option": "macOS",
            "How to get it": "[BrowserOS.dmg](https://files.browseros.com/download/BrowserOS.dmg), or `brew install --cask browseros`; macOS 13 or later"
          },
          {
            "Option": "Windows",
            "How to get it": "[BrowserOS installer](https://files.browseros.com/download/BrowserOS_installer.exe)"
          },
          {
            "Option": "Linux",
            "How to get it": "[BrowserOS AppImage](https://files.browseros.com/download/BrowserOS.AppImage)"
          },
          {
            "Option": "Phone",
            "How to get it": "No mobile version is listed"
          },
          {
            "Option": "Price",
            "How to get it": "Free to download; no pricing page was found"
          },
          {
            "Option": "Website",
            "How to get it": "[browseros.com](https://browseros.com)"
          },
          {
            "Option": "Documentation",
            "How to get it": "[docs.browseros.com](https://docs.browseros.com)"
          },
          {
            "Option": "Privacy policy",
            "How to get it": "[Privacy policy](https://browseros.com/privacy/)"
          },
          {
            "Option": "Source code",
            "How to get it": "[GitHub, AGPL-3.0](https://github.com/browseros-ai/BrowserOS)"
          }
        ],
        "note": "Version reviewed: 0.46.0 (17 June 2026, from the changelog). The download files carry no version number and the GitHub releases list only BrowserOS neo builds, so confirm the installed version yourself. PromptQuorum did not download or run any installer."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requirements",
        "content": [
          "**The sources give a minimum only for macOS (13 Ventura or later); the documentation sizes local models by available RAM.**"
        ],
        "columns": [
          "Item",
          "What the sources say"
        ],
        "rows": [
          {
            "Item": "macOS",
            "What the sources say": "macOS 13 (Ventura) or later"
          },
          {
            "Item": "Windows and Linux",
            "What the sources say": "No minimum version, RAM or disk figure is given"
          },
          {
            "Item": "Local AI",
            "What the sources say": "Ollama or LM Studio installed separately; models under 5 GB suit 8 GB RAM, 10–15 GB models need 16+ GB RAM, 60+ GB models need 64+ GB RAM"
          },
          {
            "Item": "Context window",
            "What the sources say": "At least 15,000–20,000 tokens; a larger context uses more VRAM"
          }
        ],
        "note": "No GPU model or VRAM amount is stated; hardware needs depend on the model you load."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "How to Get Started",
        "content": [
          "**The steps follow the maker's documentation; PromptQuorum has not run them.**"
        ],
        "numberedItems": [
          {
            "title": "Install the browser",
            "whyItMatters": "Download the installer for your system, or install the macOS Homebrew cask."
          },
          {
            "title": "Install Ollama or LM Studio and a model",
            "whyItMatters": "For Ollama, pull a model and start the server with a 20,000-token context, for example `OLLAMA_CONTEXT_LENGTH=20000 ollama serve`; for LM Studio, load a model on the Developer tab, which serves `http://localhost:1234/v1/`."
          },
          {
            "title": "Connect it in the settings",
            "whyItMatters": "Open `chrome://browseros/settings`, choose Use on the Ollama card (or on the OpenAI Compatible card with that base URL for LM Studio), enter the model ID and set the context window to at least 20,000 tokens."
          },
          {
            "title": "Plan a cloud provider for Agent Mode",
            "whyItMatters": "Agent Mode, which acts on pages for you, is where the documentation recommends Claude Opus 4.5 or another cloud model; keep a provider key ready if you want it."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Confirmed by the Sources",
        "content": [
          "**Every item below comes from the maker's documentation or repository; none has been independently tested.**"
        ],
        "items": [
          "**Ad blocking.** The documentation says BrowserOS supports full ad blocking with uBlock Origin and has re-enabled Manifest V2 extension support; its comparison with Chrome comes from a test the maker ran.",
          "**Built-in MCP server.** An MCP server listens on 127.0.0.1 and exposes 53 browser automation tools; the documentation shows how to add it to Claude Code with `claude mcp add --transport http browseros <mcp_url> --scope user`, copying the URL from `chrome://browseros/mcp`.",
          "**Bring your own model.** Listed providers include Moonshot AI, Gemini, Anthropic, OpenAI, OpenRouter, Azure OpenAI, AWS Bedrock and any OpenAI-compatible endpoint, plus ChatGPT Pro and GitHub Copilot subscriptions.",
          "**Connected apps.** The documentation lists more than 40 external services, such as Gmail, Calendar, Docs, Sheets and Notion.",
          "**Chromium base.** The version 0.46.0 changelog entry mentions Chromium 148, a redesigned new tab and Claude Code and Codex bundled into the assistant."
        ],
        "note": "The MCP documentation warns that anyone who can reach the MCP URL has full control of your browser, including every account you are signed into, and says the server only listens on 127.0.0.1."
      },
      "privacy": {
        "id": "privacy",
        "title": "Data Flow and Privacy",
        "content": [
          "**The privacy policy says browsing history, cookies and visited URLs are stored locally on your computer, and that cloud sync is deactivated by default.** If you switch sync on, the policy says the data is stored encrypted on BrowserOS servers that run on AWS. It also says BrowserOS collects your name, email address and your engagement with the product, and lists Segment, Mixpanel, June and Airtable as services it uses.",
          "**The default AI provider is Moonshot AI (Kimi K2.5), and the policy says prompts, messages and data you share with the AI feature are sent to that provider's servers.** With your own keys, the policy says BrowserOS does not intercept, store or log the content of prompts or answers; with a locally hosted model such as Ollama or LM Studio, it says no data leaves your device. The documentation separately says your keys stay on your machine and requests go directly to the provider."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "These are the maker's statements, not audit results, and PromptQuorum has not inspected network traffic. The policy is dated 13 March 2026 and covers the BrowserOS web browser only; it does not mention BrowserOS neo."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**Local-model tinkerers** who want a Chromium browser with Ollama or LM Studio built into its settings.",
          "**Ad-blocking fans** who want uBlock Origin and Manifest V2 extensions on a modern Chromium base.",
          "**Claude Code users** who want a browser their agent can control through a local MCP server and who accept the access that implies."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Performance and stability.** Speed, memory use, crashes and answer quality with local models are untested.",
          "**Agent Mode.** How reliably it completes tasks, with a cloud model or any other, was not tested.",
          "**Maintenance of the original.** The changelog shows nothing after 17 June 2026, while the repository's recent work concerns BrowserOS neo; the sources do not say whether the original will keep receiving updates.",
          "**Version and signing.** The download files carry no version number, and no checksums or signing details for the original build were found.",
          "**Wording on local agents.** The documentation says BrowserOS \"runs AI agents locally on your machine\" yet recommends cloud models for Agent Mode, so what runs on your device depends on the provider you choose.",
          "**Ad-blocking results.** The comparison with Chrome in the documentation comes from the maker's own test and was not repeated."
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
            "App": "[LastBrowser](/power-local-llm/lastbrowser-review)",
            "Platforms": "Windows, Linux preview",
            "Price / license": "Free for personal use / GPL-3.0",
            "Key difference": "Electron-based browser with a Sidekick sidebar that can use Ollama; no macOS version"
          },
          {
            "App": "[Page Assist](/local-llms/page-assist-review)",
            "Platforms": "Chrome and Firefox extension",
            "Price / license": "Free / MIT",
            "Key difference": "Sidebar extension for the browser you already use; works with Ollama"
          }
        ],
        "note": "Confirm each app's current price, license and platforms on its own page before choosing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "Is BrowserOS neo the same product?",
            "a": "No. BrowserOS neo is a separate browser for AI coding agents that the maker positions as a secondary browser next to Chrome; you bring your own AI provider keys, and it has its own privacy policy. This review covers the original BrowserOS only."
          },
          {
            "q": "Which local models does the documentation list?",
            "a": "Beyond the Qwen3 4B starter, its table lists Ministral 3 3B (2.99 GB), two DeepSeek-R1 distills (4.68 and 4.92 GB), gpt-oss-20b (12.11 GB), Magistral Small (13.28 GB), Devstral Small 2 (14.12 GB) and gpt-oss-120b (63.39 GB)."
          },
          {
            "q": "How often is BrowserOS released?",
            "a": "The changelog shows versions 0.41.0 on 4 March, 0.42.0 on 9 March, 0.43.0 on 12 March, 0.44.0 on 20 March and 0.46.0 on 17 June 2026; version 0.45.0 does not appear, and nothing is listed after 0.46.0."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "BrowserOS is a free, AGPL-3.0 Chromium browser for Mac, Windows and Linux that connects local Ollama or LM Studio models in Chat Mode, blocks ads with uBlock Origin and exposes a local MCP server. Against that, its changelog has no entry since 17 June 2026, the default AI provider is a cloud service, the documentation says local models are not yet powerful enough for Agent Mode, the privacy policy lists several analytics services, and speed, stability and answer quality are untested. It suits people who already run Ollama or LM Studio and want to try an AI browser; treat the documentation as a declaration, not proof, and check the update status before relying on it."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[BrowserOS website](https://browseros.com) — product overview and downloads, checked 14 November 2026.",
          "[BrowserOS download page](https://browseros.com/download) — installers for the original BrowserOS, checked 14 November 2026.",
          "[BrowserOS documentation, quick start](https://docs.browseros.com/browseros/index.md) — modes, Homebrew install, macOS requirement, checked 14 November 2026.",
          "[BrowserOS documentation, local models](https://docs.browseros.com/browseros/features/local-models.md) — Ollama and LM Studio setup, RAM tiers, model list, checked 14 November 2026.",
          "[BrowserOS documentation, bring your own LLM](https://docs.browseros.com/browseros/features/bring-your-own-llm.md) — supported providers, checked 14 November 2026.",
          "[BrowserOS documentation, MCP with Claude Code](https://docs.browseros.com/browseros/features/use-with-claude-code.md) — built-in MCP server, checked 14 November 2026.",
          "[BrowserOS documentation, ad blocking](https://docs.browseros.com/browseros/features/ad-blocking.md) — uBlock Origin and Manifest V2, checked 14 November 2026.",
          "[BrowserOS changelog](https://docs.browseros.com/browseros/changelog.md) — release history up to version 0.46.0, checked 14 November 2026.",
          "[BrowserOS privacy policy](https://browseros.com/privacy/) — data flow, sync and analytics services, dated 13 March 2026, checked 14 November 2026.",
          "[BrowserOS on GitHub](https://github.com/browseros-ai/BrowserOS) — repository, licence and releases, checked 14 November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[LastBrowser Review](/power-local-llm/lastbrowser-review) — a Windows AI browser with a Sidekick sidebar that can use Ollama.",
          "[Page Assist Review](/local-llms/page-assist-review) — a browser-extension sidebar that works with Ollama.",
          "[Local LLM Software Directory](/directory) — the full catalogue of local AI tools."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "BrowserOS Review: Open-Source AI Browser With Local Ollama and LM Studio Support",
      "description": "BrowserOS review: a free, open-source Chromium AI browser for macOS, Windows and Linux that works with local Ollama and LM Studio models or cloud providers. Licence, privacy and what the sources leave unconfirmed.",
      "url": "https://www.promptquorum.com/power-local-llm/browseros-review",
      "inLanguage": "en",
      "datePublished": "2026-11-14",
      "dateModified": "2026-11-14",
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
        "audienceType": "Mac, Windows and Linux users evaluating an open-source AI browser with optional local Ollama and LM Studio models"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "BrowserOS"
        },
        {
          "@type": "Thing",
          "name": "AI browser"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "LM Studio"
        },
        {
          "@type": "Thing",
          "name": "Local AI"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/power-local-llm/browseros-review"
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
          "name": "BrowserOS Review",
          "item": "https://www.promptquorum.com/power-local-llm/browseros-review"
        }
      ]
    }
  },
  de: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-14",
    "dateModified": "2026-11-14",
    "next_refresh_due": "2027-05-14",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/browseros-review-hero-de.webp",
    "title": "BrowserOS-Rezension: Quelloffener KI-Browser mit lokaler Ollama- und LM-Studio-Unterstützung",
    "seoTitle": "BrowserOS-Rezension: KI-Browser mit lokalen Modellen",
    "intro": "BrowserOS ist ein kostenloser, quelloffener Webbrowser auf Chromium-Basis für macOS, Windows und Linux mit eingebautem KI-Assistenten. Sein Chat-Modus kann ein lokales Modell über Ollama oder LM Studio auf Ihrem eigenen Rechner oder einen von Ihnen eingerichteten Cloud-Anbieter nutzen, während für den Agent-Modus, der für Sie auf Webseiten handelt, Cloud-Modelle empfohlen werden. Diese Rezension behandelt, was Sie herunterladen, wohin Ihre Daten gehen, welche Lizenz gilt und was die Quellen offenlassen.",
    "metaDescription": "BrowserOS-Rezension: kostenloser, quelloffener KI-Browser für Mac, Windows und Linux mit lokalen Ollama- und LM-Studio-Modellen. Datenschutz, Risiken.",
    "twitterDescription": "BrowserOS-Rezension: kostenloser quelloffener KI-Browser mit lokaler Ollama- und LM-Studio-Unterstützung. Datenschutzerklärung, AGPL-3.0-Lizenz und was die Quellen offenlassen.",
    "audience": "Mac-, Windows- und Linux-Nutzer, die wissen wollen, ob BrowserOS mit einem lokalen Ollama- oder LM-Studio-Modell laufen kann, was es kostet und welche Aussagen die Quellen offenlassen.",
    "readTime": "6 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "BrowserOS Rezension",
    "targetKeywords": [
      "browseros rezension",
      "browseros ollama",
      "browseros lm studio",
      "lokaler ki browser",
      "quelloffener ki browser",
      "browseros datenschutz",
      "ki browser lokales llm"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Mac",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**Warnung: Das Änderungsprotokoll des ursprünglichen BrowserOS nennt keine Version nach 0.46.0 vom 17. Juni 2026, daher wird es möglicherweise nicht mehr gepflegt — prüfen Sie es, bevor Sie sich darauf verlassen.** Es ist ein kostenloser, quelloffener (AGPL-3.0) Browser auf Chromium-Basis für macOS, Windows und Linux mit eingebautem KI-Assistenten, der lokale Modelle über Ollama oder LM Studio nutzen kann.",
    "quickAnswerTop": {
      "de": {
        "question": "Kann BrowserOS mit einem lokalen Modell laufen?",
        "answer": "Ja, im Chat-Modus: Die Dokumentation beschreibt die Anbindung von Ollama oder LM Studio. Laut Dokumentation sind lokale Modelle für den Agent-Modus noch nicht leistungsfähig genug.",
        "bullets": [
          "Ollama oder LM Studio ist eine separate Installation; der Browser bringt kein Modell mit.",
          "Die Dokumentation verlangt ein Kontextfenster von mindestens 15.000–20.000 Token; der Ollama-Standard von 4.096 ist zu niedrig.",
          "Das Startmodell in der Dokumentation ist Qwen3 4B, ein Download von 2,28 GB."
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
        "label": "Was ist BrowserOS?",
        "anchor": "what-is-browseros"
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
            "text": "BrowserOS ist ein kostenloser, quelloffener Chromium-Browser für Mac, Windows und Linux mit eingebautem KI-Assistenten, der lokale Ollama- oder LM-Studio-Modelle nutzen kann."
          },
          {
            "type": "plain-terms",
            "text": "Sie surfen in einem normalen Desktop-Browser und fragen einen KI-Assistenten zur gerade gelesenen Seite, entweder mit einem Modell auf Ihrem eigenen Computer oder mit einem Cloud-KI-Dienst, den Sie selbst einrichten."
          }
        ],
        "items": [
          "Pflege: Der neueste Eintrag im Änderungsprotokoll ist Version 0.46.0 vom 17. Juni 2026, etwa fünf Monate vor dieser Rezension; das gemeinsame GitHub-Repository wurde am 14. November 2026 aktualisiert, aber seine Releases führen nur BrowserOS-neo-Builds auf.",
          "Kosten: kostenlos und quelloffen unter AGPL-3.0; eine Preisseite wurde nicht gefunden.",
          "Plattformen: macOS 13 oder neuer, Windows und Linux; die Downloads stammen von der Website des Herstellers, und für macOS gibt es zusätzlich ein Homebrew-Cask.",
          "KI: eigene Anbieter-Schlüssel, lokale Modelle über Ollama oder LM Studio oder Abos von ChatGPT Pro und GitHub Copilot.",
          "Datenschutz: laut Erklärung verlassen bei einem lokalen Modell keine Daten das Gerät; der Standard-KI-Anbieter ist ein Cloud-Dienst."
        ],
        "callouts": [
          {
            "type": "warning",
            "text": "Seit mehr als drei Monaten keine Version im Änderungsprotokoll. BrowserOS wird möglicherweise nicht mehr gepflegt: Prüfen Sie, ob es auf Ihrem System und mit Ihrem KI-Anbieter noch funktioniert, bevor Sie sich darauf verlassen."
          },
          {
            "type": "note",
            "text": "Diese Rezension stützt sich auf browseros.com, die Dokumentation, die Datenschutzerklärung und das GitHub-Repository, geprüft am 14. November 2026. PromptQuorum hat den Browser weder installiert noch ausgeführt oder gemessen; Geschwindigkeit, Stabilität und Antwortqualität werden daher nicht bewertet. BrowserOS neo, ein eigenes Produkt desselben Herstellers, wird nur dort behandelt, wo es diese Rezension betrifft."
          }
        ]
      },
      "overview": {
        "id": "what-is-browseros",
        "title": "Was ist BrowserOS?",
        "content": [
          "**BrowserOS ist ein KI-nativer Webbrowser, ein Chromium-Fork, mit einem Assistenten, der Fragen zu Seiten beantworten und im Agent-Modus auf ihnen handeln kann.** Die Dokumentation nennt drei Modi: Chat-Modus, Agent-Modus und Graph-Modus, der als „demnächst“ markiert ist. Außerdem führt sie eingebaute Verbindungen zu Diensten wie Gmail, Calendar, Docs, Sheets und Notion auf.",
          "Dieselbe Website und dasselbe GitHub-Repository beherbergen auch BrowserOS neo (Version 0.52.0, Oktober 2026), einen eigenen Zweitbrowser für KI-Coding-Agenten wie Claude Code und Cursor, den der Hersteller neben Chrome statt als Ersatz positioniert. Diese Rezension behandelt das ursprüngliche BrowserOS, obwohl die Startseite jetzt mit neo beginnt. Die README des Repositories nennt Felafax, Inc. in der Copyright-Zeile."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Bezugsquelle",
        "content": [
          "**BrowserOS ist ein kostenloser Download für macOS, Windows und Linux von der Download-Seite des Herstellers; unter macOS lässt es sich auch mit Homebrew installieren.**"
        ],
        "columns": [
          "Option",
          "Bezug"
        ],
        "rows": [
          {
            "Option": "macOS",
            "Bezug": "[BrowserOS.dmg](https://files.browseros.com/download/BrowserOS.dmg) oder `brew install --cask browseros`; macOS 13 oder neuer"
          },
          {
            "Option": "Windows",
            "Bezug": "[BrowserOS-Installer](https://files.browseros.com/download/BrowserOS_installer.exe)"
          },
          {
            "Option": "Linux",
            "Bezug": "[BrowserOS-AppImage](https://files.browseros.com/download/BrowserOS.AppImage)"
          },
          {
            "Option": "Handy",
            "Bezug": "Es ist keine mobile Version aufgeführt"
          },
          {
            "Option": "Preis",
            "Bezug": "Kostenloser Download; eine Preisseite wurde nicht gefunden"
          },
          {
            "Option": "Website",
            "Bezug": "[browseros.com](https://browseros.com)"
          },
          {
            "Option": "Dokumentation",
            "Bezug": "[docs.browseros.com](https://docs.browseros.com)"
          },
          {
            "Option": "Datenschutzerklärung",
            "Bezug": "[Datenschutzerklärung](https://browseros.com/privacy/)"
          },
          {
            "Option": "Quellcode",
            "Bezug": "[GitHub, AGPL-3.0](https://github.com/browseros-ai/BrowserOS)"
          }
        ],
        "note": "Geprüfte Version: 0.46.0 (17. Juni 2026, laut Änderungsprotokoll). Die Download-Dateien tragen keine Versionsnummer und die GitHub-Releases führen nur BrowserOS-neo-Builds auf; prüfen Sie die installierte Version daher selbst. PromptQuorum hat keinen Installer heruntergeladen oder ausgeführt."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Anforderungen",
        "content": [
          "**Die Quellen nennen nur für macOS ein Minimum (13 Ventura oder neuer); die Dokumentation ordnet lokale Modelle nach verfügbarem RAM ein.**"
        ],
        "columns": [
          "Punkt",
          "Was die Quellen sagen"
        ],
        "rows": [
          {
            "Punkt": "macOS",
            "Was die Quellen sagen": "macOS 13 (Ventura) oder neuer"
          },
          {
            "Punkt": "Windows und Linux",
            "Was die Quellen sagen": "Keine Mindestversion und keine RAM- oder Speicherangabe"
          },
          {
            "Punkt": "Lokale KI",
            "Was die Quellen sagen": "Ollama oder LM Studio separat installiert; Modelle unter 5 GB passen zu 8 GB RAM, Modelle mit 10–15 GB brauchen 16+ GB RAM, Modelle ab 60 GB brauchen 64+ GB RAM"
          },
          {
            "Punkt": "Kontextfenster",
            "Was die Quellen sagen": "Mindestens 15.000–20.000 Token; ein größerer Kontext braucht mehr VRAM"
          }
        ],
        "note": "Es wird weder ein GPU-Modell noch eine VRAM-Menge genannt; der Hardwarebedarf hängt vom geladenen Modell ab."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "So gelingt der Einstieg",
        "content": [
          "**Die Schritte folgen der Dokumentation des Herstellers; PromptQuorum hat sie nicht ausgeführt.**"
        ],
        "numberedItems": [
          {
            "title": "Browser installieren",
            "whyItMatters": "Laden Sie den Installer für Ihr System herunter oder installieren Sie das Homebrew-Cask unter macOS."
          },
          {
            "title": "Ollama oder LM Studio und ein Modell installieren",
            "whyItMatters": "Bei Ollama laden Sie ein Modell und starten den Server mit 20.000 Token Kontext, zum Beispiel `OLLAMA_CONTEXT_LENGTH=20000 ollama serve`; bei LM Studio laden Sie im Tab Developer ein Modell, das dann unter `http://localhost:1234/v1/` bereitgestellt wird."
          },
          {
            "title": "In den Einstellungen verbinden",
            "whyItMatters": "Öffnen Sie `chrome://browseros/settings`, wählen Sie bei der Ollama-Karte „Use“ (bei LM Studio bei der Karte „OpenAI Compatible“ mit dieser Basis-URL), tragen Sie die Modell-ID ein und setzen Sie das Kontextfenster auf mindestens 20.000 Token."
          },
          {
            "title": "Cloud-Anbieter für den Agent-Modus einplanen",
            "whyItMatters": "Für den Agent-Modus, der für Sie auf Seiten handelt, empfiehlt die Dokumentation Claude Opus 4.5 oder ein anderes Cloud-Modell; halten Sie einen Anbieter-Schlüssel bereit, wenn Sie ihn nutzen möchten."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Von den Quellen bestätigte Funktionen",
        "content": [
          "**Alle folgenden Punkte stammen aus der Dokumentation oder dem Repository des Herstellers; keiner wurde unabhängig getestet.**"
        ],
        "items": [
          "**Werbeblocker.** Laut Dokumentation unterstützt BrowserOS vollständiges Blockieren von Werbung mit uBlock Origin und hat die Unterstützung für Manifest-V2-Erweiterungen wieder aktiviert; der Vergleich mit Chrome stammt aus einem Test des Herstellers.",
          "**Eingebauter MCP-Server.** Ein MCP-Server lauscht auf 127.0.0.1 und stellt 53 Werkzeuge zur Browser-Automatisierung bereit; die Dokumentation zeigt, wie Sie ihn mit `claude mcp add --transport http browseros <mcp_url> --scope user` zu Claude Code hinzufügen, wobei Sie die URL aus `chrome://browseros/mcp` kopieren.",
          "**Eigenes Modell mitbringen.** Aufgeführte Anbieter sind unter anderem Moonshot AI, Gemini, Anthropic, OpenAI, OpenRouter, Azure OpenAI, AWS Bedrock und jeder OpenAI-kompatible Endpunkt, dazu Abos von ChatGPT Pro und GitHub Copilot.",
          "**Verbundene Apps.** Die Dokumentation führt mehr als 40 externe Dienste auf, etwa Gmail, Calendar, Docs, Sheets und Notion.",
          "**Chromium-Basis.** Der Eintrag zu Version 0.46.0 im Änderungsprotokoll erwähnt Chromium 148, einen neu gestalteten neuen Tab sowie Claude Code und Codex im Assistenten."
        ],
        "note": "Die MCP-Dokumentation warnt, dass jeder, der die MCP-URL erreichen kann, die volle Kontrolle über Ihren Browser hat, einschließlich aller Konten, bei denen Sie angemeldet sind, und sagt, dass der Server nur auf 127.0.0.1 lauscht."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenfluss und Datenschutz",
        "content": [
          "**Die Datenschutzerklärung sagt, dass Browserverlauf, Cookies und besuchte URLs lokal auf Ihrem Computer gespeichert werden und dass die Cloud-Synchronisierung standardmäßig deaktiviert ist.** Wenn Sie die Synchronisierung einschalten, werden die Daten laut Erklärung verschlüsselt auf BrowserOS-Servern gespeichert, die auf AWS laufen. Sie sagt außerdem, dass BrowserOS Ihren Namen, Ihre E-Mail-Adresse und Ihre Interaktion mit dem Produkt erhebt, und nennt Segment, Mixpanel, June und Airtable als genutzte Dienste.",
          "**Der Standard-KI-Anbieter ist Moonshot AI (Kimi K2.5), und laut Erklärung werden Prompts, Nachrichten und Daten, die Sie mit der KI-Funktion teilen, an die Server dieses Anbieters gesendet.** Mit eigenen Schlüsseln fängt BrowserOS laut Erklärung den Inhalt von Prompts oder Antworten nicht ab, speichert oder protokolliert ihn nicht; bei einem lokal gehosteten Modell wie Ollama oder LM Studio verlassen laut Erklärung keine Daten Ihr Gerät. Die Dokumentation sagt gesondert, dass Ihre Schlüssel auf Ihrem Rechner bleiben und Anfragen direkt an den Anbieter gehen."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Das sind Aussagen des Herstellers, keine Prüfergebnisse, und PromptQuorum hat den Netzwerkverkehr nicht untersucht. Die Erklärung ist auf den 13. März 2026 datiert und betrifft nur den BrowserOS-Webbrowser; BrowserOS neo erwähnt sie nicht."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen sich die App eignet",
        "items": [
          "**Tüftler mit lokalen Modellen**, die einen Chromium-Browser mit in die Einstellungen eingebautem Ollama oder LM Studio wollen.",
          "**Werbeblocker-Fans**, die uBlock Origin und Manifest-V2-Erweiterungen auf moderner Chromium-Basis wollen.",
          "**Claude-Code-Nutzer**, die einen Browser wollen, den ihr Agent über einen lokalen MCP-Server steuern kann, und die den damit verbundenen Zugriff akzeptieren."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht überprüfen konnten",
        "items": [
          "**Leistung und Stabilität.** Geschwindigkeit, Speicherverbrauch, Abstürze und die Antwortqualität mit lokalen Modellen sind ungetestet.",
          "**Agent-Modus.** Wie zuverlässig er Aufgaben erledigt, mit einem Cloud-Modell oder einem anderen, wurde nicht getestet.",
          "**Pflege des Originals.** Das Änderungsprotokoll zeigt nach dem 17. Juni 2026 nichts mehr, während sich die jüngste Arbeit im Repository auf BrowserOS neo bezieht; die Quellen sagen nicht, ob das Original weiter Updates erhält.",
          "**Version und Signierung.** Die Download-Dateien tragen keine Versionsnummer, und es wurden keine Prüfsummen oder Signierungsangaben für den Original-Build gefunden.",
          "**Formulierung zu lokalen Agenten.** Die Dokumentation sagt, BrowserOS „führt KI-Agenten lokal auf Ihrem Rechner aus“, empfiehlt für den Agent-Modus aber Cloud-Modelle; was auf Ihrem Gerät läuft, hängt also vom gewählten Anbieter ab.",
          "**Ergebnisse des Werbeblockers.** Der Vergleich mit Chrome in der Dokumentation stammt aus dem eigenen Test des Herstellers und wurde nicht wiederholt."
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
            "App": "[LastBrowser](/de/power-local-llm/lastbrowser-review)",
            "Plattformen": "Windows, Linux-Vorschau",
            "Preis / Lizenz": "Gratis für private Nutzung / GPL-3.0",
            "Hauptunterschied": "Electron-basierter Browser mit Sidekick-Seitenleiste, die Ollama nutzen kann; keine macOS-Version"
          },
          {
            "App": "[Page Assist](/de/local-llms/page-assist-review)",
            "Plattformen": "Chrome- und Firefox-Erweiterung",
            "Preis / Lizenz": "Gratis / MIT",
            "Hauptunterschied": "Seitenleisten-Erweiterung für den Browser, den Sie schon nutzen; funktioniert mit Ollama"
          }
        ],
        "note": "Prüfen Sie Preis, Lizenz und Plattformen jeder App vor der Entscheidung auf deren eigener Seite."
      },
      "faq": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Ist BrowserOS neo dasselbe Produkt?",
            "a": "Nein. BrowserOS neo ist ein eigener Browser für KI-Coding-Agenten, den der Hersteller als Zweitbrowser neben Chrome positioniert; Sie bringen Ihre eigenen KI-Anbieter-Schlüssel mit, und er hat eine eigene Datenschutzerklärung. Diese Rezension behandelt nur das ursprüngliche BrowserOS."
          },
          {
            "q": "Welche lokalen Modelle nennt die Dokumentation?",
            "a": "Über das Startmodell Qwen3 4B hinaus führt ihre Tabelle Ministral 3 3B (2,99 GB), zwei DeepSeek-R1-Destillate (4,68 und 4,92 GB), gpt-oss-20b (12,11 GB), Magistral Small (13,28 GB), Devstral Small 2 (14,12 GB) und gpt-oss-120b (63,39 GB) auf."
          },
          {
            "q": "Wie oft erscheint BrowserOS?",
            "a": "Das Änderungsprotokoll zeigt die Versionen 0.41.0 am 4. März, 0.42.0 am 9. März, 0.43.0 am 12. März, 0.44.0 am 20. März und 0.46.0 am 17. Juni 2026; Version 0.45.0 taucht nicht auf, und nach 0.46.0 ist nichts aufgeführt."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "BrowserOS ist ein kostenloser Chromium-Browser unter AGPL-3.0 für Mac, Windows und Linux, der im Chat-Modus lokale Ollama- oder LM-Studio-Modelle anbindet, Werbung mit uBlock Origin blockiert und einen lokalen MCP-Server bereitstellt. Dagegen hat sein Änderungsprotokoll seit dem 17. Juni 2026 keinen Eintrag, der Standard-KI-Anbieter ist ein Cloud-Dienst, laut Dokumentation sind lokale Modelle für den Agent-Modus noch nicht leistungsfähig genug, die Datenschutzerklärung führt mehrere Analysedienste auf, und Geschwindigkeit, Stabilität und Antwortqualität sind ungetestet. Die App passt zu Menschen, die bereits Ollama oder LM Studio betreiben und einen KI-Browser ausprobieren wollen; lesen Sie die Dokumentation als Aussage, nicht als Beweis, und prüfen Sie den Update-Status, bevor Sie sich darauf verlassen."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[BrowserOS-Website](https://browseros.com) — Produktüberblick und Downloads, geprüft am 14. November 2026.",
          "[BrowserOS-Download-Seite](https://browseros.com/download) — Installer für das ursprüngliche BrowserOS, geprüft am 14. November 2026.",
          "[BrowserOS-Dokumentation, Schnellstart](https://docs.browseros.com/browseros/index.md) — Modi, Homebrew-Installation, macOS-Anforderung, geprüft am 14. November 2026.",
          "[BrowserOS-Dokumentation, lokale Modelle](https://docs.browseros.com/browseros/features/local-models.md) — Einrichtung von Ollama und LM Studio, RAM-Stufen, Modellliste, geprüft am 14. November 2026.",
          "[BrowserOS-Dokumentation, eigenes LLM mitbringen](https://docs.browseros.com/browseros/features/bring-your-own-llm.md) — unterstützte Anbieter, geprüft am 14. November 2026.",
          "[BrowserOS-Dokumentation, MCP mit Claude Code](https://docs.browseros.com/browseros/features/use-with-claude-code.md) — eingebauter MCP-Server, geprüft am 14. November 2026.",
          "[BrowserOS-Dokumentation, Werbeblocker](https://docs.browseros.com/browseros/features/ad-blocking.md) — uBlock Origin und Manifest V2, geprüft am 14. November 2026.",
          "[BrowserOS-Änderungsprotokoll](https://docs.browseros.com/browseros/changelog.md) — Versionsverlauf bis Version 0.46.0, geprüft am 14. November 2026.",
          "[BrowserOS-Datenschutzerklärung](https://browseros.com/privacy/) — Datenfluss, Synchronisierung und Analysedienste, datiert auf den 13. März 2026, geprüft am 14. November 2026.",
          "[BrowserOS auf GitHub](https://github.com/browseros-ai/BrowserOS) — Repository, Lizenz und Releases, geprüft am 14. November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[LastBrowser-Rezension](/de/power-local-llm/lastbrowser-review) — ein Windows-KI-Browser mit Sidekick-Seitenleiste, die Ollama nutzen kann.",
          "[Page-Assist-Rezension](/de/local-llms/page-assist-review) — eine Browser-Erweiterung mit Seitenleiste, die mit Ollama funktioniert.",
          "[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools."
        ]
      }
    }
  },
  es: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-14",
    "dateModified": "2026-11-14",
    "next_refresh_due": "2027-05-14",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/browseros-review-hero-es.webp",
    "title": "Reseña de BrowserOS: navegador de IA de código abierto con Ollama y LM Studio locales",
    "seoTitle": "Reseña de BrowserOS: navegador con IA y modelos locales",
    "intro": "BrowserOS es un navegador web gratuito y de código abierto, basado en Chromium, para macOS, Windows y Linux, con un asistente de IA integrado. Su Modo Chat puede usar un modelo local mediante Ollama o LM Studio en tu propio equipo, o un proveedor en la nube que configures tú, mientras que para su Modo Agente, que actúa por ti en las páginas web, se recomiendan modelos en la nube. Esta reseña explica qué descargas, adónde van tus datos, qué licencia tiene y qué dejan sin confirmar las fuentes.",
    "metaDescription": "Reseña de BrowserOS: navegador de IA gratuito y de código abierto para Mac, Windows y Linux con modelos locales de Ollama o LM Studio. Privacidad.",
    "twitterDescription": "Reseña de BrowserOS: navegador de IA gratuito y de código abierto con Ollama y LM Studio locales. Política de privacidad, licencia AGPL-3.0 y lo que las fuentes dejan sin confirmar.",
    "audience": "Usuarios de Mac, Windows y Linux que quieren saber si BrowserOS puede funcionar con un modelo local de Ollama o LM Studio, cuánto cuesta y qué afirmaciones dejan abiertas las fuentes.",
    "readTime": "6 min de lectura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "reseña de BrowserOS",
    "targetKeywords": [
      "reseña browseros",
      "browseros ollama",
      "browseros lm studio",
      "navegador ia local",
      "navegador ia código abierto",
      "browseros privacidad",
      "navegador ia llm local"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Mac",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**Advertencia: el registro de cambios del BrowserOS original no lista ninguna versión posterior a la 0.46.0 del 17 de junio de 2026, así que puede que ya no tenga mantenimiento: compruébalo antes de depender de él.** Es un navegador gratuito, de código abierto (AGPL-3.0) y basado en Chromium para macOS, Windows y Linux, con un asistente de IA integrado que puede usar modelos locales mediante Ollama o LM Studio.",
    "quickAnswerTop": {
      "es": {
        "question": "¿Puede BrowserOS funcionar con un modelo local?",
        "answer": "Sí, en el Modo Chat: la documentación describe cómo conectar Ollama o LM Studio. Según la documentación, los modelos locales aún no son lo bastante potentes para el Modo Agente.",
        "bullets": [
          "Ollama o LM Studio se instala por separado; el navegador no incluye ningún modelo.",
          "La documentación pide una ventana de contexto de al menos 15,000–20,000 tokens; el valor predeterminado de Ollama, 4,096, es demasiado bajo.",
          "El modelo inicial de la documentación es Qwen3 4B, una descarga de 2.28 GB."
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
        "label": "¿Qué es BrowserOS?",
        "anchor": "what-is-browseros"
      },
      {
        "label": "Cómo obtenerlo",
        "anchor": "get-it"
      },
      {
        "label": "Requisitos",
        "anchor": "requirements"
      },
      {
        "label": "Primeros pasos",
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
            "text": "BrowserOS es un navegador Chromium gratuito y de código abierto para Mac, Windows y Linux, con un asistente de IA integrado que puede usar modelos locales de Ollama o LM Studio."
          },
          {
            "type": "plain-terms",
            "text": "Navegas en un navegador de escritorio normal y le preguntas a un asistente de IA sobre la página que estás leyendo, usando un modelo que corre en tu propio ordenador o un servicio de IA en la nube que configuras tú."
          }
        ],
        "items": [
          "Mantenimiento: la entrada más reciente del registro de cambios es la versión 0.46.0 del 17 de junio de 2026, unos cinco meses antes de esta reseña; el repositorio compartido de GitHub recibió cambios el 14 de noviembre de 2026, pero sus versiones solo listan compilaciones de BrowserOS neo.",
          "Coste: gratuito y de código abierto bajo AGPL-3.0; no se encontró ninguna página de precios.",
          "Plataformas: macOS 13 o posterior, Windows y Linux; las descargas vienen del sitio del fabricante y en macOS hay además un cask de Homebrew.",
          "IA: tus propias claves de proveedor, modelos locales con Ollama o LM Studio, o suscripciones de ChatGPT Pro y GitHub Copilot.",
          "Privacidad: según la política, con un modelo local ningún dato sale del dispositivo; el proveedor de IA predeterminado es un servicio en la nube."
        ],
        "callouts": [
          {
            "type": "warning",
            "text": "Más de tres meses sin ninguna versión en el registro de cambios. Puede que BrowserOS ya no tenga mantenimiento: confirma que sigue funcionando en tu sistema y con tu proveedor de IA antes de depender de él."
          },
          {
            "type": "note",
            "text": "Esta reseña se basa en browseros.com, su documentación, su política de privacidad y el repositorio de GitHub, consultados el 14 de noviembre de 2026. PromptQuorum no ha instalado, ejecutado ni medido el navegador, por lo que no se evalúan la velocidad, la estabilidad ni la calidad de las respuestas. BrowserOS neo, un producto distinto del mismo fabricante, solo se trata donde afecta a esta reseña."
          }
        ]
      },
      "overview": {
        "id": "what-is-browseros",
        "title": "¿Qué es BrowserOS?",
        "content": [
          "**BrowserOS es un navegador web nativo de IA, un fork de Chromium, con un asistente que puede responder preguntas sobre las páginas y, en el Modo Agente, actuar sobre ellas.** La documentación enumera tres modos: Modo Chat, Modo Agente y Modo Graph, marcado como próximamente. También enumera conexiones integradas con servicios como Gmail, Calendar, Docs, Sheets y Notion.",
          "El mismo sitio web y el mismo repositorio de GitHub alojan también BrowserOS neo (versión 0.52.0, octubre de 2026), un navegador secundario distinto, pensado para agentes de programación con IA como Claude Code y Cursor, que el fabricante presenta junto a Chrome y no como sustituto. Esta reseña trata el BrowserOS original, aunque la página de inicio ahora abre con neo. El README del repositorio nombra a Felafax, Inc. en su línea de copyright."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo obtenerlo",
        "content": [
          "**BrowserOS es una descarga gratuita para macOS, Windows y Linux desde la página de descargas del fabricante; en macOS también puede instalarse con Homebrew.**"
        ],
        "columns": [
          "Opción",
          "Cómo obtenerlo"
        ],
        "rows": [
          {
            "Opción": "macOS",
            "Cómo obtenerlo": "[BrowserOS.dmg](https://files.browseros.com/download/BrowserOS.dmg), o `brew install --cask browseros`; macOS 13 o posterior"
          },
          {
            "Opción": "Windows",
            "Cómo obtenerlo": "[Instalador de BrowserOS](https://files.browseros.com/download/BrowserOS_installer.exe)"
          },
          {
            "Opción": "Linux",
            "Cómo obtenerlo": "[AppImage de BrowserOS](https://files.browseros.com/download/BrowserOS.AppImage)"
          },
          {
            "Opción": "Móvil",
            "Cómo obtenerlo": "No se lista ninguna versión móvil"
          },
          {
            "Opción": "Precio",
            "Cómo obtenerlo": "Descarga gratuita; no se encontró ninguna página de precios"
          },
          {
            "Opción": "Sitio web",
            "Cómo obtenerlo": "[browseros.com](https://browseros.com)"
          },
          {
            "Opción": "Documentación",
            "Cómo obtenerlo": "[docs.browseros.com](https://docs.browseros.com)"
          },
          {
            "Opción": "Política de privacidad",
            "Cómo obtenerlo": "[Política de privacidad](https://browseros.com/privacy/)"
          },
          {
            "Opción": "Código fuente",
            "Cómo obtenerlo": "[GitHub, AGPL-3.0](https://github.com/browseros-ai/BrowserOS)"
          }
        ],
        "note": "Versión revisada: 0.46.0 (17 de junio de 2026, según el registro de cambios). Los archivos de descarga no llevan número de versión y las versiones de GitHub solo listan compilaciones de BrowserOS neo, así que comprueba tú mismo la versión instalada. PromptQuorum no descargó ni ejecutó ningún instalador."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**Las fuentes indican un mínimo solo para macOS (13 Ventura o posterior); la documentación clasifica los modelos locales según la RAM disponible.**"
        ],
        "columns": [
          "Elemento",
          "Lo que dicen las fuentes"
        ],
        "rows": [
          {
            "Elemento": "macOS",
            "Lo que dicen las fuentes": "macOS 13 (Ventura) o posterior"
          },
          {
            "Elemento": "Windows y Linux",
            "Lo que dicen las fuentes": "No se da ninguna versión mínima ni cifra de RAM o disco"
          },
          {
            "Elemento": "IA local",
            "Lo que dicen las fuentes": "Ollama o LM Studio instalado por separado; los modelos de menos de 5 GB sirven para 8 GB de RAM, los de 10–15 GB necesitan 16+ GB de RAM y los de 60+ GB necesitan 64+ GB de RAM"
          },
          {
            "Elemento": "Ventana de contexto",
            "Lo que dicen las fuentes": "Al menos 15,000–20,000 tokens; un contexto mayor usa más VRAM"
          }
        ],
        "note": "No se indica ningún modelo de GPU ni cantidad de VRAM; las necesidades de hardware dependen del modelo que cargues."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Primeros pasos",
        "content": [
          "**Los pasos siguen la documentación del fabricante; PromptQuorum no los ha ejecutado.**"
        ],
        "numberedItems": [
          {
            "title": "Instala el navegador",
            "whyItMatters": "Descarga el instalador para tu sistema o instala el cask de Homebrew en macOS."
          },
          {
            "title": "Instala Ollama o LM Studio y un modelo",
            "whyItMatters": "Con Ollama, descarga un modelo e inicia el servidor con un contexto de 20,000 tokens, por ejemplo `OLLAMA_CONTEXT_LENGTH=20000 ollama serve`; con LM Studio, carga un modelo en la pestaña Developer, que lo sirve en `http://localhost:1234/v1/`."
          },
          {
            "title": "Conéctalo en los ajustes",
            "whyItMatters": "Abre `chrome://browseros/settings`, elige Use en la tarjeta de Ollama (o en la tarjeta OpenAI Compatible con esa URL base para LM Studio), introduce el ID del modelo y fija la ventana de contexto en al menos 20,000 tokens."
          },
          {
            "title": "Prevé un proveedor en la nube para el Modo Agente",
            "whyItMatters": "Para el Modo Agente, que actúa por ti en las páginas, la documentación recomienda Claude Opus 4.5 u otro modelo en la nube; ten lista una clave de proveedor si quieres usarlo."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones confirmadas por las fuentes",
        "content": [
          "**Todo lo que sigue procede de la documentación o del repositorio del fabricante; nada se ha probado de forma independiente.**"
        ],
        "items": [
          "**Bloqueo de anuncios.** La documentación dice que BrowserOS admite el bloqueo completo de anuncios con uBlock Origin y que ha reactivado la compatibilidad con extensiones Manifest V2; su comparación con Chrome procede de una prueba del propio fabricante.",
          "**Servidor MCP integrado.** Un servidor MCP escucha en 127.0.0.1 y expone 53 herramientas de automatización del navegador; la documentación muestra cómo añadirlo a Claude Code con `claude mcp add --transport http browseros <mcp_url> --scope user`, copiando la URL de `chrome://browseros/mcp`.",
          "**Trae tu propio modelo.** Entre los proveedores listados están Moonshot AI, Gemini, Anthropic, OpenAI, OpenRouter, Azure OpenAI, AWS Bedrock y cualquier endpoint compatible con OpenAI, además de suscripciones de ChatGPT Pro y GitHub Copilot.",
          "**Apps conectadas.** La documentación enumera más de 40 servicios externos, como Gmail, Calendar, Docs, Sheets y Notion.",
          "**Base Chromium.** La entrada de la versión 0.46.0 del registro de cambios menciona Chromium 148, una nueva pestaña rediseñada y Claude Code y Codex integrados en el asistente."
        ],
        "note": "La documentación de MCP advierte de que cualquiera que pueda alcanzar la URL de MCP tiene control total de tu navegador, incluidas todas las cuentas en las que hayas iniciado sesión, y dice que el servidor solo escucha en 127.0.0.1."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flujo de datos y privacidad",
        "content": [
          "**La política de privacidad dice que el historial de navegación, las cookies y las URL visitadas se guardan localmente en tu ordenador y que la sincronización en la nube está desactivada por defecto.** Si activas la sincronización, la política dice que los datos se guardan cifrados en servidores de BrowserOS que funcionan sobre AWS. También dice que BrowserOS recoge tu nombre, tu correo electrónico y tu interacción con el producto, y menciona Segment, Mixpanel, June y Airtable como servicios que utiliza.",
          "**El proveedor de IA predeterminado es Moonshot AI (Kimi K2.5), y la política dice que los prompts, los mensajes y los datos que compartes con la función de IA se envían a los servidores de ese proveedor.** Con tus propias claves, la política dice que BrowserOS no intercepta, almacena ni registra el contenido de los prompts ni de las respuestas; con un modelo alojado localmente, como Ollama o LM Studio, dice que ningún dato sale de tu dispositivo. La documentación dice por separado que tus claves se quedan en tu equipo y que las solicitudes van directamente al proveedor."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Son afirmaciones del fabricante, no resultados de una auditoría, y PromptQuorum no ha inspeccionado el tráfico de red. La política está fechada el 13 de marzo de 2026 y cubre solo el navegador web BrowserOS; no menciona BrowserOS neo."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quién es",
        "items": [
          "**Aficionados a los modelos locales** que quieren un navegador Chromium con Ollama o LM Studio integrados en sus ajustes.",
          "**Fans del bloqueo de anuncios** que quieren uBlock Origin y extensiones Manifest V2 sobre una base Chromium moderna.",
          "**Usuarios de Claude Code** que quieren un navegador que su agente pueda controlar mediante un servidor MCP local y que aceptan el acceso que eso implica."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Rendimiento y estabilidad.** La velocidad, el uso de memoria, los cierres inesperados y la calidad de las respuestas con modelos locales no se han probado.",
          "**Modo Agente.** No se probó con qué fiabilidad completa tareas, con un modelo en la nube o con cualquier otro.",
          "**Mantenimiento del original.** El registro de cambios no muestra nada después del 17 de junio de 2026, mientras que el trabajo reciente del repositorio se refiere a BrowserOS neo; las fuentes no dicen si el original seguirá recibiendo actualizaciones.",
          "**Versión y firma.** Los archivos de descarga no llevan número de versión y no se encontraron sumas de verificación ni datos de firma de la compilación original.",
          "**Redacción sobre agentes locales.** La documentación dice que BrowserOS «ejecuta agentes de IA localmente en tu equipo», pero recomienda modelos en la nube para el Modo Agente, así que lo que se ejecuta en tu dispositivo depende del proveedor que elijas.",
          "**Resultados del bloqueo de anuncios.** La comparación con Chrome de la documentación procede de la propia prueba del fabricante y no se repitió."
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
            "App": "[LastBrowser](/es/power-local-llm/lastbrowser-review)",
            "Plataformas": "Windows, Linux en preview",
            "Precio / licencia": "Gratis para uso personal / GPL-3.0",
            "Diferencia clave": "Navegador basado en Electron con barra lateral Sidekick que puede usar Ollama; sin versión para macOS"
          },
          {
            "App": "[Page Assist](/es/local-llms/page-assist-review)",
            "Plataformas": "Extensión de Chrome y Firefox",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "Extensión de barra lateral para el navegador que ya usas; funciona con Ollama"
          }
        ],
        "note": "Confirma el precio, la licencia y las plataformas actuales de cada app en su propia página antes de elegir."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿BrowserOS neo es el mismo producto?",
            "a": "No. BrowserOS neo es un navegador distinto para agentes de programación con IA, que el fabricante presenta como navegador secundario junto a Chrome; tú aportas tus propias claves de proveedor de IA y tiene su propia política de privacidad. Esta reseña trata solo el BrowserOS original."
          },
          {
            "q": "¿Qué modelos locales lista la documentación?",
            "a": "Además del modelo inicial Qwen3 4B, su tabla lista Ministral 3 3B (2.99 GB), dos destilaciones de DeepSeek-R1 (4.68 y 4.92 GB), gpt-oss-20b (12.11 GB), Magistral Small (13.28 GB), Devstral Small 2 (14.12 GB) y gpt-oss-120b (63.39 GB)."
          },
          {
            "q": "¿Con qué frecuencia se publica BrowserOS?",
            "a": "El registro de cambios muestra las versiones 0.41.0 el 4 de marzo, 0.42.0 el 9 de marzo, 0.43.0 el 12 de marzo, 0.44.0 el 20 de marzo y 0.46.0 el 17 de junio de 2026; la versión 0.45.0 no aparece y después de la 0.46.0 no hay nada listado."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "BrowserOS es un navegador Chromium gratuito bajo AGPL-3.0 para Mac, Windows y Linux que conecta modelos locales de Ollama o LM Studio en el Modo Chat, bloquea anuncios con uBlock Origin y expone un servidor MCP local. En contra, su registro de cambios no tiene ninguna entrada desde el 17 de junio de 2026, el proveedor de IA predeterminado es un servicio en la nube, según la documentación, los modelos locales aún no son lo bastante potentes para el Modo Agente, la política de privacidad menciona varios servicios de analítica, y la velocidad, la estabilidad y la calidad de las respuestas no se han probado. Encaja con quien ya usa Ollama o LM Studio y quiere probar un navegador con IA; trata la documentación como una declaración, no como una prueba, y comprueba el estado de las actualizaciones antes de depender de él."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Sitio web de BrowserOS](https://browseros.com) — resumen del producto y descargas, consultado el 14 de noviembre de 2026.",
          "[Página de descargas de BrowserOS](https://browseros.com/download) — instaladores del BrowserOS original, consultada el 14 de noviembre de 2026.",
          "[Documentación de BrowserOS, inicio rápido](https://docs.browseros.com/browseros/index.md) — modos, instalación con Homebrew, requisito de macOS, consultada el 14 de noviembre de 2026.",
          "[Documentación de BrowserOS, modelos locales](https://docs.browseros.com/browseros/features/local-models.md) — configuración de Ollama y LM Studio, niveles de RAM, lista de modelos, consultada el 14 de noviembre de 2026.",
          "[Documentación de BrowserOS, trae tu propio LLM](https://docs.browseros.com/browseros/features/bring-your-own-llm.md) — proveedores compatibles, consultada el 14 de noviembre de 2026.",
          "[Documentación de BrowserOS, MCP con Claude Code](https://docs.browseros.com/browseros/features/use-with-claude-code.md) — servidor MCP integrado, consultada el 14 de noviembre de 2026.",
          "[Documentación de BrowserOS, bloqueo de anuncios](https://docs.browseros.com/browseros/features/ad-blocking.md) — uBlock Origin y Manifest V2, consultada el 14 de noviembre de 2026.",
          "[Registro de cambios de BrowserOS](https://docs.browseros.com/browseros/changelog.md) — historial de versiones hasta la 0.46.0, consultado el 14 de noviembre de 2026.",
          "[Política de privacidad de BrowserOS](https://browseros.com/privacy/) — flujo de datos, sincronización y servicios de analítica, fechada el 13 de marzo de 2026, consultada el 14 de noviembre de 2026.",
          "[BrowserOS en GitHub](https://github.com/browseros-ai/BrowserOS) — repositorio, licencia y versiones, consultado el 14 de noviembre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Reseña de LastBrowser](/es/power-local-llm/lastbrowser-review) — un navegador de IA para Windows con barra lateral Sidekick que puede usar Ollama.",
          "[Reseña de Page Assist](/es/local-llms/page-assist-review) — una barra lateral como extensión del navegador que funciona con Ollama.",
          "[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local."
        ]
      }
    }
  },
  fr: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-14",
    "dateModified": "2026-11-14",
    "next_refresh_due": "2027-05-14",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/browseros-review-hero-fr.webp",
    "title": "Test de BrowserOS : navigateur IA open source avec Ollama et LM Studio en local",
    "seoTitle": "Test de BrowserOS : navigateur IA et modèles locaux",
    "intro": "BrowserOS est un navigateur web gratuit et open source, basé sur Chromium, pour macOS, Windows et Linux, avec un assistant IA intégré. Son mode Chat peut utiliser un modèle local via Ollama ou LM Studio sur votre propre machine, ou un fournisseur cloud que vous configurez, tandis que son mode Agent, qui agit à votre place sur les pages web, est recommandé avec des modèles cloud. Ce test présente ce que vous téléchargez, où vont vos données, la licence et ce que les sources laissent sans confirmation.",
    "metaDescription": "Test de BrowserOS : navigateur IA gratuit et open source pour Mac, Windows et Linux avec modèles locaux Ollama ou LM Studio. Confidentialité.",
    "twitterDescription": "Test de BrowserOS : navigateur IA gratuit et open source avec Ollama et LM Studio en local. Politique de confidentialité, licence AGPL-3.0 et ce que les sources laissent sans confirmation.",
    "audience": "Utilisateurs de Mac, Windows et Linux qui veulent savoir si BrowserOS peut fonctionner avec un modèle local Ollama ou LM Studio, ce qu'il coûte et quelles affirmations les sources laissent ouvertes.",
    "readTime": "6 min de lecture",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "test de BrowserOS",
    "targetKeywords": [
      "test browseros",
      "browseros ollama",
      "browseros lm studio",
      "navigateur ia local",
      "navigateur ia open source",
      "browseros confidentialité",
      "navigateur ia llm local"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Mac",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**Avertissement : le journal des modifications du BrowserOS d'origine ne liste aucune version après la 0.46.0 du 17 juin 2026, il est donc possible qu'il ne soit plus maintenu — vérifiez-le avant de vous y fier.** C'est un navigateur gratuit, open source (AGPL-3.0) et basé sur Chromium pour macOS, Windows et Linux, avec un assistant IA intégré qui peut utiliser des modèles locaux via Ollama ou LM Studio.",
    "quickAnswerTop": {
      "fr": {
        "question": "BrowserOS peut-il fonctionner avec un modèle local ?",
        "answer": "Oui, en mode Chat : la documentation décrit la connexion d'Ollama ou de LM Studio. Selon la documentation, les modèles locaux ne sont pas encore assez puissants pour le mode Agent.",
        "bullets": [
          "Ollama ou LM Studio s'installe séparément ; le navigateur n'embarque aucun modèle.",
          "La documentation demande une fenêtre de contexte d'au moins 15 000–20 000 jetons ; la valeur par défaut d'Ollama, 4 096, est trop basse.",
          "Le modèle de départ de la documentation est Qwen3 4B, un téléchargement de 2.28 GB."
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
        "label": "Qu'est-ce que BrowserOS ?",
        "anchor": "what-is-browseros"
      },
      {
        "label": "Où le trouver",
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
        "label": "À qui il convient",
        "anchor": "who-should-use"
      },
      {
        "label": "Ce que nous n'avons pas pu vérifier",
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
        "label": "Lectures associées",
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
            "text": "BrowserOS est un navigateur Chromium gratuit et open source pour Mac, Windows et Linux, avec un assistant IA intégré qui peut utiliser des modèles locaux Ollama ou LM Studio."
          },
          {
            "type": "plain-terms",
            "text": "Vous naviguez dans un navigateur de bureau ordinaire et posez vos questions sur la page lue à un assistant IA, qui s'appuie soit sur un modèle exécuté sur votre propre ordinateur, soit sur un service d'IA cloud que vous configurez vous-même."
          }
        ],
        "items": [
          "Maintenance : la dernière entrée du journal des modifications est la version 0.46.0 du 17 juin 2026, environ cinq mois avant ce test ; le dépôt GitHub partagé a reçu des modifications le 14 novembre 2026, mais ses versions ne listent que des builds de BrowserOS neo.",
          "Coût : gratuit et open source sous AGPL-3.0 ; aucune page de tarifs n'a été trouvée.",
          "Plateformes : macOS 13 ou version ultérieure, Windows et Linux ; les téléchargements viennent du site du fabricant, et macOS dispose en plus d'un cask Homebrew.",
          "IA : vos propres clés de fournisseur, des modèles locaux via Ollama ou LM Studio, ou des abonnements ChatGPT Pro et GitHub Copilot.",
          "Confidentialité : selon la politique, avec un modèle local aucune donnée ne quitte l'appareil ; le fournisseur d'IA par défaut est un service cloud."
        ],
        "callouts": [
          {
            "type": "warning",
            "text": "Aucune version dans le journal des modifications depuis plus de trois mois. BrowserOS n'est peut-être plus maintenu : vérifiez qu'il fonctionne encore sur votre système et avec votre fournisseur d'IA avant de vous y fier."
          },
          {
            "type": "note",
            "text": "Ce test s'appuie sur browseros.com, sa documentation, sa politique de confidentialité et le dépôt GitHub, consultés le 14 novembre 2026. PromptQuorum n'a ni installé, ni exécuté, ni mesuré le navigateur ; la vitesse, la stabilité et la qualité des réponses ne sont donc pas évaluées. BrowserOS neo, un produit distinct du même fabricant, n'est traité que là où il touche ce test."
          }
        ]
      },
      "overview": {
        "id": "what-is-browseros",
        "title": "Qu'est-ce que BrowserOS ?",
        "content": [
          "**BrowserOS est un navigateur web nativement IA, un fork de Chromium, doté d'un assistant qui peut répondre aux questions sur les pages et, en mode Agent, agir sur elles.** La documentation liste trois modes : le mode Chat, le mode Agent et le mode Graph, indiqué comme à venir. Elle liste aussi des connexions intégrées à des services comme Gmail, Calendar, Docs, Sheets et Notion.",
          "Le même site web et le même dépôt GitHub hébergent aussi BrowserOS neo (version 0.52.0, octobre 2026), un navigateur secondaire distinct conçu pour des agents de programmation IA comme Claude Code et Cursor, que le fabricant présente à côté de Chrome plutôt que comme un remplaçant. Ce test porte sur le BrowserOS d'origine, même si la page d'accueil met désormais neo en avant. Le README du dépôt mentionne Felafax, Inc. dans sa ligne de copyright."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Où le trouver",
        "content": [
          "**BrowserOS se télécharge gratuitement pour macOS, Windows et Linux depuis la page de téléchargement du fabricant ; sous macOS, il s'installe aussi avec Homebrew.**"
        ],
        "columns": [
          "Option",
          "Comment l’obtenir"
        ],
        "rows": [
          {
            "Option": "macOS",
            "Comment l’obtenir": "[BrowserOS.dmg](https://files.browseros.com/download/BrowserOS.dmg), ou `brew install --cask browseros` ; macOS 13 ou version ultérieure"
          },
          {
            "Option": "Windows",
            "Comment l’obtenir": "[Installateur BrowserOS](https://files.browseros.com/download/BrowserOS_installer.exe)"
          },
          {
            "Option": "Linux",
            "Comment l’obtenir": "[AppImage BrowserOS](https://files.browseros.com/download/BrowserOS.AppImage)"
          },
          {
            "Option": "Mobile",
            "Comment l’obtenir": "Aucune version mobile n'est listée"
          },
          {
            "Option": "Prix",
            "Comment l’obtenir": "Téléchargement gratuit ; aucune page de tarifs trouvée"
          },
          {
            "Option": "Site web",
            "Comment l’obtenir": "[browseros.com](https://browseros.com)"
          },
          {
            "Option": "Documentation",
            "Comment l’obtenir": "[docs.browseros.com](https://docs.browseros.com)"
          },
          {
            "Option": "Politique de confidentialité",
            "Comment l’obtenir": "[Politique de confidentialité](https://browseros.com/privacy/)"
          },
          {
            "Option": "Code source",
            "Comment l’obtenir": "[GitHub, AGPL-3.0](https://github.com/browseros-ai/BrowserOS)"
          }
        ],
        "note": "Version testée : 0.46.0 (17 juin 2026, d'après le journal des modifications). Les fichiers de téléchargement ne portent pas de numéro de version et les versions GitHub ne listent que des builds de BrowserOS neo ; vérifiez donc vous-même la version installée. PromptQuorum n'a téléchargé ni exécuté aucun installateur."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Configuration requise",
        "content": [
          "**Les sources n'indiquent un minimum que pour macOS (13 Ventura ou version ultérieure) ; la documentation classe les modèles locaux selon la RAM disponible.**"
        ],
        "columns": [
          "Élément",
          "Ce que disent les sources"
        ],
        "rows": [
          {
            "Élément": "macOS",
            "Ce que disent les sources": "macOS 13 (Ventura) ou version ultérieure"
          },
          {
            "Élément": "Windows et Linux",
            "Ce que disent les sources": "Aucune version minimale ni chiffre de RAM ou d'espace disque n'est donné"
          },
          {
            "Élément": "IA locale",
            "Ce que disent les sources": "Ollama ou LM Studio installé séparément ; les modèles de moins de 5 GB conviennent à 8 GB de RAM, ceux de 10–15 GB demandent 16+ GB de RAM et ceux de 60+ GB demandent 64+ GB de RAM"
          },
          {
            "Élément": "Fenêtre de contexte",
            "Ce que disent les sources": "Au moins 15 000–20 000 jetons ; un contexte plus grand utilise plus de VRAM"
          }
        ],
        "note": "Aucun modèle de GPU ni quantité de VRAM n'est indiqué ; les besoins matériels dépendent du modèle que vous chargez."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Pour bien démarrer",
        "content": [
          "**Les étapes suivent la documentation du fabricant ; PromptQuorum ne les a pas exécutées.**"
        ],
        "numberedItems": [
          {
            "title": "Installer le navigateur",
            "whyItMatters": "Téléchargez l'installateur pour votre système, ou installez le cask Homebrew sous macOS."
          },
          {
            "title": "Installer Ollama ou LM Studio et un modèle",
            "whyItMatters": "Avec Ollama, téléchargez un modèle et démarrez le serveur avec un contexte de 20 000 jetons, par exemple `OLLAMA_CONTEXT_LENGTH=20000 ollama serve` ; avec LM Studio, chargez un modèle dans l'onglet Developer, qui le sert à l'adresse `http://localhost:1234/v1/`."
          },
          {
            "title": "Le connecter dans les réglages",
            "whyItMatters": "Ouvrez `chrome://browseros/settings`, choisissez Use sur la carte Ollama (ou sur la carte OpenAI Compatible avec cette URL de base pour LM Studio), saisissez l'identifiant du modèle et réglez la fenêtre de contexte sur au moins 20 000 jetons."
          },
          {
            "title": "Prévoir un fournisseur cloud pour le mode Agent",
            "whyItMatters": "Pour le mode Agent, qui agit à votre place sur les pages, la documentation recommande Claude Opus 4.5 ou un autre modèle cloud ; gardez une clé de fournisseur à portée de main si vous voulez l'utiliser."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions confirmées par les sources",
        "content": [
          "**Tous les éléments ci-dessous proviennent de la documentation ou du dépôt du fabricant ; aucun n'a été testé de façon indépendante.**"
        ],
        "items": [
          "**Blocage des publicités.** La documentation indique que BrowserOS prend en charge le blocage complet des publicités avec uBlock Origin et a réactivé la prise en charge des extensions Manifest V2 ; sa comparaison avec Chrome provient d'un test réalisé par le fabricant.",
          "**Serveur MCP intégré.** Un serveur MCP écoute sur 127.0.0.1 et expose 53 outils d'automatisation du navigateur ; la documentation montre comment l'ajouter à Claude Code avec `claude mcp add --transport http browseros <mcp_url> --scope user`, en copiant l'URL depuis `chrome://browseros/mcp`.",
          "**Apportez votre propre modèle.** Les fournisseurs listés incluent Moonshot AI, Gemini, Anthropic, OpenAI, OpenRouter, Azure OpenAI, AWS Bedrock et tout point d'accès compatible OpenAI, ainsi que des abonnements ChatGPT Pro et GitHub Copilot.",
          "**Applications connectées.** La documentation liste plus de 40 services externes, comme Gmail, Calendar, Docs, Sheets et Notion.",
          "**Base Chromium.** L'entrée de la version 0.46.0 du journal des modifications mentionne Chromium 148, un nouvel onglet repensé ainsi que Claude Code et Codex intégrés à l'assistant."
        ],
        "note": "La documentation MCP avertit que quiconque peut atteindre l'URL MCP a le contrôle total de votre navigateur, y compris de tous les comptes auxquels vous êtes connecté, et indique que le serveur n'écoute que sur 127.0.0.1."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flux de données et confidentialité",
        "content": [
          "**La politique de confidentialité indique que l'historique de navigation, les cookies et les URL visitées sont stockés localement sur votre ordinateur, et que la synchronisation cloud est désactivée par défaut.** Si vous l'activez, la politique indique que les données sont stockées chiffrées sur des serveurs de BrowserOS fonctionnant sur AWS. Elle indique aussi que BrowserOS collecte votre nom, votre adresse e-mail et votre usage du produit, et cite Segment, Mixpanel, June et Airtable parmi les services utilisés.",
          "**Le fournisseur d'IA par défaut est Moonshot AI (Kimi K2.5), et la politique indique que les prompts, les messages et les données que vous partagez avec la fonction IA sont envoyés aux serveurs de ce fournisseur.** Avec vos propres clés, la politique indique que BrowserOS n'intercepte, ne stocke ni ne journalise le contenu des prompts ou des réponses ; avec un modèle hébergé localement comme Ollama ou LM Studio, elle indique qu'aucune donnée ne quitte votre appareil. La documentation précise séparément que vos clés restent sur votre machine et que les requêtes vont directement au fournisseur."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce sont des déclarations du fabricant, pas des résultats d'audit, et PromptQuorum n'a pas inspecté le trafic réseau. La politique est datée du 13 mars 2026 et ne couvre que le navigateur web BrowserOS ; elle ne mentionne pas BrowserOS neo."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui il convient",
        "items": [
          "**Les bidouilleurs de modèles locaux** qui veulent un navigateur Chromium avec Ollama ou LM Studio intégrés à ses réglages.",
          "**Les adeptes du blocage de publicités** qui veulent uBlock Origin et les extensions Manifest V2 sur une base Chromium moderne.",
          "**Les utilisateurs de Claude Code** qui veulent un navigateur que leur agent peut piloter via un serveur MCP local et qui acceptent l'accès que cela implique."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n'avons pas pu vérifier",
        "items": [
          "**Performances et stabilité.** La vitesse, l'utilisation de la mémoire, les plantages et la qualité des réponses avec des modèles locaux n'ont pas été testés.",
          "**Mode Agent.** La fiabilité avec laquelle il mène à bien les tâches, avec un modèle cloud ou un autre, n'a pas été testée.",
          "**Maintenance de l'original.** Le journal des modifications ne montre rien après le 17 juin 2026, alors que l'activité récente du dépôt concerne BrowserOS neo ; les sources ne disent pas si l'original continuera à recevoir des mises à jour.",
          "**Version et signature.** Les fichiers de téléchargement ne portent pas de numéro de version et aucune somme de contrôle ni information de signature n'a été trouvée pour le build d'origine.",
          "**Formulation sur les agents locaux.** La documentation indique que BrowserOS « exécute des agents IA localement sur votre machine », tout en recommandant des modèles cloud pour le mode Agent ; ce qui s'exécute sur votre appareil dépend donc du fournisseur que vous choisissez.",
          "**Résultats du blocage des publicités.** La comparaison avec Chrome dans la documentation provient du propre test du fabricant et n'a pas été reproduite."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Concurrents et alternatives",
        "columns": [
          "Application",
          "Plateformes",
          "Prix / licence",
          "Différence clé"
        ],
        "rows": [
          {
            "Application": "[LastBrowser](/fr/power-local-llm/lastbrowser-review)",
            "Plateformes": "Windows, aperçu Linux",
            "Prix / licence": "Gratuit pour un usage personnel / GPL-3.0",
            "Différence clé": "Navigateur basé sur Electron avec barre latérale Sidekick pouvant utiliser Ollama ; pas de version macOS"
          },
          {
            "Application": "[Page Assist](/fr/local-llms/page-assist-review)",
            "Plateformes": "Extension Chrome et Firefox",
            "Prix / licence": "Gratuit / MIT",
            "Différence clé": "Extension de barre latérale pour le navigateur que vous utilisez déjà ; fonctionne avec Ollama"
          }
        ],
        "note": "Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre page avant de choisir."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "BrowserOS neo est-il le même produit ?",
            "a": "Non. BrowserOS neo est un navigateur distinct pour les agents de programmation IA, que le fabricant présente comme navigateur secondaire à côté de Chrome ; vous apportez vos propres clés de fournisseur d'IA, et il a sa propre politique de confidentialité. Ce test ne porte que sur le BrowserOS d'origine."
          },
          {
            "q": "Quels modèles locaux la documentation liste-t-elle ?",
            "a": "Au-delà du modèle de départ Qwen3 4B, son tableau liste Ministral 3 3B (2.99 GB), deux distillations de DeepSeek-R1 (4.68 et 4.92 GB), gpt-oss-20b (12.11 GB), Magistral Small (13.28 GB), Devstral Small 2 (14.12 GB) et gpt-oss-120b (63.39 GB)."
          },
          {
            "q": "À quelle fréquence BrowserOS est-il publié ?",
            "a": "Le journal des modifications montre les versions 0.41.0 le 4 mars, 0.42.0 le 9 mars, 0.43.0 le 12 mars, 0.44.0 le 20 mars et 0.46.0 le 17 juin 2026 ; la version 0.45.0 n'apparaît pas, et rien n'est listé après la 0.46.0."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "BrowserOS est un navigateur Chromium gratuit sous AGPL-3.0 pour Mac, Windows et Linux, qui connecte des modèles locaux Ollama ou LM Studio en mode Chat, bloque les publicités avec uBlock Origin et expose un serveur MCP local. En contrepartie, son journal des modifications n'a aucune entrée depuis le 17 juin 2026, le fournisseur d'IA par défaut est un service cloud, selon la documentation, les modèles locaux ne sont pas encore assez puissants pour le mode Agent, la politique de confidentialité cite plusieurs services d'analyse, et la vitesse, la stabilité et la qualité des réponses n'ont pas été testées. Il convient à ceux qui utilisent déjà Ollama ou LM Studio et veulent essayer un navigateur IA ; lisez la documentation comme une déclaration, non comme une preuve, et vérifiez l'état des mises à jour avant de vous y fier."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Site web de BrowserOS](https://browseros.com) — présentation du produit et téléchargements, consulté le 14 novembre 2026.",
          "[Page de téléchargement de BrowserOS](https://browseros.com/download) — installateurs du BrowserOS d'origine, consultée le 14 novembre 2026.",
          "[Documentation de BrowserOS, démarrage rapide](https://docs.browseros.com/browseros/index.md) — modes, installation Homebrew, exigence macOS, consultée le 14 novembre 2026.",
          "[Documentation de BrowserOS, modèles locaux](https://docs.browseros.com/browseros/features/local-models.md) — configuration d’Ollama et de LM Studio, paliers de RAM, liste de modèles, consultée le 14 novembre 2026.",
          "[Documentation de BrowserOS, apportez votre propre LLM](https://docs.browseros.com/browseros/features/bring-your-own-llm.md) — fournisseurs pris en charge, consultée le 14 novembre 2026.",
          "[Documentation de BrowserOS, MCP avec Claude Code](https://docs.browseros.com/browseros/features/use-with-claude-code.md) — serveur MCP intégré, consultée le 14 novembre 2026.",
          "[Documentation de BrowserOS, blocage des publicités](https://docs.browseros.com/browseros/features/ad-blocking.md) — uBlock Origin et Manifest V2, consultée le 14 novembre 2026.",
          "[Journal des modifications de BrowserOS](https://docs.browseros.com/browseros/changelog.md) — historique des versions jusqu’à la 0.46.0, consulté le 14 novembre 2026.",
          "[Politique de confidentialité de BrowserOS](https://browseros.com/privacy/) — flux de données, synchronisation et services d’analyse, datée du 13 mars 2026, consultée le 14 novembre 2026.",
          "[BrowserOS sur GitHub](https://github.com/browseros-ai/BrowserOS) — dépôt, licence et versions, consulté le 14 novembre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lectures associées",
        "items": [
          "[Test de LastBrowser](/fr/power-local-llm/lastbrowser-review) — un navigateur IA pour Windows avec barre latérale Sidekick pouvant utiliser Ollama.",
          "[Test de Page Assist](/fr/local-llms/page-assist-review) — une barre latérale sous forme d'extension de navigateur qui fonctionne avec Ollama.",
          "[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale."
        ]
      }
    }
  },
  ja: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-14",
    "dateModified": "2026-11-14",
    "next_refresh_due": "2027-05-14",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/browseros-review-hero-ja.webp",
    "title": "BrowserOSレビュー：OllamaとLM Studioのローカルモデルに対応したオープンソースAIブラウザ",
    "seoTitle": "BrowserOSレビュー：ローカルモデル対応AIブラウザ",
    "intro": "BrowserOSは、Chromiumをベースにした無料のオープンソースWebブラウザで、macOS・Windows・Linuxに対応し、AIアシスタントを内蔵しています。チャットモードでは、お使いのマシン上のOllamaやLM Studioのローカルモデル、または自分で設定したクラウドプロバイダーを利用できます。ウェブページ上で代わりに操作するエージェントモードには、クラウドモデルが推奨されています。このレビューでは、ダウンロードするもの、データの行き先、ライセンス、そして情報源では確認できなかった点を整理します。",
    "metaDescription": "BrowserOSのレビュー。Mac・Windows・Linux対応の無料オープンソースAIブラウザで、OllamaやLM Studioのローカルモデルに対応。プライバシーとリスクを解説します。",
    "twitterDescription": "BrowserOSレビュー：OllamaとLM Studioのローカルモデルに対応した無料のオープンソースAIブラウザ。プライバシーポリシー、AGPL-3.0ライセンス、未確認の点を解説します。",
    "audience": "BrowserOSがOllamaやLM Studioのローカルモデルで動くか、費用はいくらか、情報源が確認していない点は何かを知りたいMac・Windows・Linuxユーザー向けです。",
    "readTime": "6分で読める",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "BrowserOS レビュー",
    "targetKeywords": [
      "browseros レビュー",
      "browseros ollama",
      "browseros lm studio",
      "ローカル ai ブラウザ",
      "オープンソース ai ブラウザ",
      "browseros プライバシー",
      "ai ブラウザ ローカル llm"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Mac",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**警告：元のBrowserOSの変更履歴には、2026年6月17日のバージョン0.46.0より新しいリリースが載っていません。保守が止まっている可能性があるため、利用前に確認してください。** 無料のオープンソース（AGPL-3.0）で、Chromiumベースのブラウザです。macOS・Windows・Linuxに対応し、OllamaやLM Studioを通じてローカルモデルを使えるAIアシスタントを内蔵しています。",
    "quickAnswerTop": {
      "ja": {
        "question": "BrowserOSはローカルモデルで動かせますか？",
        "answer": "はい、チャットモードでは可能です。ドキュメントにOllamaまたはLM Studioの接続方法が載っています。ただしドキュメントによると、ローカルモデルはエージェントモードにはまだ力不足です。",
        "bullets": [
          "OllamaまたはLM Studioは別途インストールが必要で、ブラウザにモデルは同梱されていません。",
          "ドキュメントはコンテキストウィンドウを15,000〜20,000トークン以上に設定するよう求めており、Ollamaの初期値4,096では不足します。",
          "ドキュメントの入門用モデルはQwen3 4Bで、ダウンロードサイズは2.28 GBです。"
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
        "label": "BrowserOSとは",
        "anchor": "what-is-browseros"
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
        "label": "始め方",
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
        "label": "向いている人",
        "anchor": "who-should-use"
      },
      {
        "label": "確認できなかったこと",
        "anchor": "who-should-not-use"
      },
      {
        "label": "競合と代替ツール",
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
            "text": "BrowserOSは、Mac・Windows・Linuxに対応した無料のオープンソースChromiumブラウザで、OllamaやLM Studioのローカルモデルを使えるAIアシスタントを内蔵しています。"
          },
          {
            "type": "plain-terms",
            "text": "通常のデスクトップブラウザで閲覧しながら、読んでいるページについてAIアシスタントに質問できます。使うのは、自分のパソコン上で動くモデルか、自分で設定したクラウドAIサービスのどちらかです。"
          }
        ],
        "items": [
          "保守状況：変更履歴の最新エントリは2026年6月17日のバージョン0.46.0で、このレビューの約5か月前です。共有のGitHubリポジトリには2026年11月14日に更新がありましたが、リリースにはBrowserOS neoのビルドしか載っていません。",
          "費用：無料で、AGPL-3.0のオープンソースです。料金ページは見つかりませんでした。",
          "対応環境：macOS 13以降、Windows、Linux。ダウンロードは提供元サイトから行い、macOSにはHomebrewのcaskもあります。",
          "AI：自分のプロバイダーキー、OllamaやLM Studioのローカルモデル、またはChatGPT ProやGitHub Copilotのサブスクリプションを使えます。",
          "プライバシー：ポリシーによると、ローカルモデルではデータは端末の外に出ません。既定のAIプロバイダーはクラウドサービスです。"
        ],
        "callouts": [
          {
            "type": "warning",
            "text": "変更履歴に3か月以上リリースがありません。BrowserOSは保守されていない可能性があります。利用前に、お使いの環境とAIプロバイダーで動作するか確認してください。"
          },
          {
            "type": "note",
            "text": "このレビューは、2026年11月14日に確認したbrowseros.com、ドキュメント、プライバシーポリシー、GitHubリポジトリに基づいています。PromptQuorumはブラウザをインストール・実行・計測していないため、速度、安定性、回答品質は評価していません。同じ提供元の別製品であるBrowserOS neoは、このレビューに関わる範囲でのみ取り上げます。"
          }
        ]
      },
      "overview": {
        "id": "what-is-browseros",
        "title": "BrowserOSとは",
        "content": [
          "**BrowserOSは、AIを前提に作られたChromiumフォークのWebブラウザで、ページに関する質問に答えるアシスタントを備え、エージェントモードではページ上の操作も代行します。** ドキュメントには、チャットモード、エージェントモード、近日公開と記されたグラフモードの3つのモードが載っています。Gmail、Calendar、Docs、Sheets、Notionなどのサービスとの内蔵連携も挙げられています。",
          "同じWebサイトとGitHubリポジトリでは、BrowserOS neo（バージョン0.52.0、2026年10月）も公開されています。これはClaude CodeやCursorのようなAIコーディングエージェント向けの別のサブブラウザで、提供元はChromeの代わりではなく併用するものと位置づけています。ホームページは現在neoを前面に出していますが、このレビューは元のBrowserOSを対象とします。リポジトリのREADMEの著作権表示にはFelafax, Inc.の名前があります。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "入手方法",
        "content": [
          "**BrowserOSは、提供元のダウンロードページからmacOS・Windows・Linux向けに無料でダウンロードできます。macOSではHomebrewでもインストールできます。**"
        ],
        "columns": [
          "項目",
          "入手方法"
        ],
        "rows": [
          {
            "項目": "macOS",
            "入手方法": "[BrowserOS.dmg](https://files.browseros.com/download/BrowserOS.dmg)、または`brew install --cask browseros`。macOS 13以降"
          },
          {
            "項目": "Windows",
            "入手方法": "[BrowserOSインストーラー](https://files.browseros.com/download/BrowserOS_installer.exe)"
          },
          {
            "項目": "Linux",
            "入手方法": "[BrowserOS AppImage](https://files.browseros.com/download/BrowserOS.AppImage)"
          },
          {
            "項目": "スマートフォン",
            "入手方法": "モバイル版は掲載されていません"
          },
          {
            "項目": "価格",
            "入手方法": "無料でダウンロード可能。料金ページは見つかりませんでした"
          },
          {
            "項目": "公式サイト",
            "入手方法": "[browseros.com](https://browseros.com)"
          },
          {
            "項目": "ドキュメント",
            "入手方法": "[docs.browseros.com](https://docs.browseros.com)"
          },
          {
            "項目": "プライバシーポリシー",
            "入手方法": "[プライバシーポリシー](https://browseros.com/privacy/)"
          },
          {
            "項目": "ソースコード",
            "入手方法": "[GitHub、AGPL-3.0](https://github.com/browseros-ai/BrowserOS)"
          }
        ],
        "note": "確認したバージョン：0.46.0（2026年6月17日、変更履歴より）。ダウンロードファイルにはバージョン番号がなく、GitHubのリリースにはBrowserOS neoのビルドしか載っていないため、インストール後のバージョンはご自身で確認してください。PromptQuorumはインストーラーをダウンロードも実行もしていません。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "動作要件",
        "content": [
          "**情報源が最低要件を示しているのはmacOS（13 Ventura以降）のみで、ドキュメントはローカルモデルを利用可能なRAMに応じて分類しています。**"
        ],
        "columns": [
          "項目",
          "情報源の記載"
        ],
        "rows": [
          {
            "項目": "macOS",
            "情報源の記載": "macOS 13（Ventura）以降"
          },
          {
            "項目": "WindowsとLinux",
            "情報源の記載": "最低バージョン、RAM、ディスク容量の記載はありません"
          },
          {
            "項目": "ローカルAI",
            "情報源の記載": "OllamaまたはLM Studioを別途インストール。5 GB未満のモデルは8 GB RAM向け、10〜15 GBのモデルは16 GB以上のRAM、60 GB以上のモデルは64 GB以上のRAMが必要"
          },
          {
            "項目": "コンテキストウィンドウ",
            "情報源の記載": "15,000〜20,000トークン以上。コンテキストを大きくするとVRAMの使用量が増えます"
          }
        ],
        "note": "GPUの機種やVRAM容量の記載はなく、必要なハードウェアは読み込むモデルによって変わります。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "始め方",
        "content": [
          "**手順は提供元のドキュメントに沿っています。PromptQuorumは実行していません。**"
        ],
        "numberedItems": [
          {
            "title": "ブラウザをインストールする",
            "whyItMatters": "お使いのシステム用のインストーラーをダウンロードするか、macOSではHomebrewのcaskをインストールします。"
          },
          {
            "title": "OllamaまたはLM Studioとモデルをインストールする",
            "whyItMatters": "Ollamaの場合は、モデルを取得し、20,000トークンのコンテキストでサーバーを起動します（例：`OLLAMA_CONTEXT_LENGTH=20000 ollama serve`）。LM Studioの場合は、Developerタブでモデルを読み込むと、`http://localhost:1234/v1/`で提供されます。"
          },
          {
            "title": "設定で接続する",
            "whyItMatters": "`chrome://browseros/settings`を開き、Ollamaカードで「Use」を選びます（LM Studioの場合はOpenAI Compatibleカードで上記のベースURLを指定）。モデルIDを入力し、コンテキストウィンドウを20,000トークン以上に設定します。"
          },
          {
            "title": "エージェントモード用にクラウドプロバイダーを用意する",
            "whyItMatters": "ページ上の操作を代行するエージェントモードには、ドキュメントがClaude Opus 4.5などのクラウドモデルを推奨しています。使う場合はプロバイダーキーを用意してください。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "情報源で確認できた機能",
        "content": [
          "**以下の項目はすべて提供元のドキュメントまたはリポジトリに基づくもので、独立した検証は行っていません。**"
        ],
        "items": [
          "**広告ブロック。** ドキュメントによると、BrowserOSはuBlock Originによる完全な広告ブロックに対応し、Manifest V2拡張機能のサポートを再び有効にしています。Chromeとの比較は提供元が実施したテストによるものです。",
          "**内蔵MCPサーバー。** MCPサーバーは127.0.0.1で待ち受け、53個のブラウザ自動化ツールを公開します。ドキュメントには、`chrome://browseros/mcp`のURLをコピーして`claude mcp add --transport http browseros <mcp_url> --scope user`でClaude Codeに追加する方法が載っています。",
          "**自分のモデルを使える。** 掲載されているプロバイダーには、Moonshot AI、Gemini、Anthropic、OpenAI、OpenRouter、Azure OpenAI、AWS Bedrock、OpenAI互換エンドポイントがあり、ChatGPT ProやGitHub Copilotのサブスクリプションも使えます。",
          "**連携アプリ。** ドキュメントには、Gmail、Calendar、Docs、Sheets、Notionなど40以上の外部サービスが載っています。",
          "**Chromiumベース。** バージョン0.46.0の変更履歴には、Chromium 148、刷新された新しいタブ、アシスタントに組み込まれたClaude CodeとCodexが記されています。"
        ],
        "note": "MCPのドキュメントは、MCPのURLに到達できる人は、ログイン中のすべてのアカウントを含めてブラウザを完全に操作できると警告しており、サーバーは127.0.0.1でのみ待ち受けるとしています。"
      },
      "privacy": {
        "id": "privacy",
        "title": "データの流れとプライバシー",
        "content": [
          "**プライバシーポリシーによると、閲覧履歴、Cookie、訪問したURLはお使いのコンピューター上にローカル保存され、クラウド同期は既定で無効です。** 同期を有効にすると、データはAWS上で動くBrowserOSのサーバーに暗号化されて保存されると記されています。また、BrowserOSは名前、メールアドレス、製品の利用状況を収集し、Segment、Mixpanel、June、Airtableを利用していると記されています。",
          "**既定のAIプロバイダーはMoonshot AI（Kimi K2.5）で、ポリシーによると、AI機能に入力したプロンプト、メッセージ、共有したデータはそのプロバイダーのサーバーに送信されます。** 自分のキーを使う場合、BrowserOSはプロンプトや回答の内容を傍受・保存・記録しないとポリシーは述べています。OllamaやLM Studioのようなローカルホストのモデルでは、データは端末の外に出ないとしています。ドキュメントは別に、キーはお使いのマシンに保存され、リクエストはプロバイダーに直接送られると述べています。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "これらは提供元の主張であり、監査結果ではありません。PromptQuorumはネットワークトラフィックを検査していません。ポリシーの日付は2026年3月13日で、対象はBrowserOSのWebブラウザのみです。BrowserOS neoには触れていません。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "向いている人",
        "items": [
          "**ローカルモデルを試したい人。** OllamaやLM Studioを設定に組み込んだChromiumブラウザが欲しい方。",
          "**広告ブロックを重視する人。** 新しいChromiumベースでuBlock OriginやManifest V2拡張機能を使いたい方。",
          "**Claude Codeを使う人。** ローカルのMCPサーバー経由でエージェントに操作させるブラウザが欲しく、それに伴うアクセス権を受け入れられる方。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかったこと",
        "items": [
          "**性能と安定性。** 速度、メモリ使用量、クラッシュ、ローカルモデルでの回答品質は検証していません。",
          "**エージェントモード。** クラウドモデルかどうかを問わず、タスクをどれだけ確実にこなせるかは検証していません。",
          "**元のBrowserOSの保守。** 変更履歴には2026年6月17日以降の記載がなく、リポジトリの最近の作業はBrowserOS neoに関するものです。元のBrowserOSが今後も更新されるかどうかは情報源に書かれていません。",
          "**バージョンと署名。** ダウンロードファイルにはバージョン番号がなく、元のビルドのチェックサムや署名情報も見つかりませんでした。",
          "**ローカルエージェントの表現。** ドキュメントはBrowserOSが「AIエージェントをお使いのマシン上でローカルに実行する」と述べる一方、エージェントモードにはクラウドモデルを推奨しています。端末上で何が動くかは、選ぶプロバイダー次第です。",
          "**広告ブロックの結果。** ドキュメントにあるChromeとの比較は提供元自身のテストによるもので、再現していません。"
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "競合と代替ツール",
        "columns": [
          "アプリ",
          "対応プラットフォーム",
          "価格／ライセンス",
          "主な違い"
        ],
        "rows": [
          {
            "アプリ": "[LastBrowser](/ja/power-local-llm/lastbrowser-review)",
            "対応プラットフォーム": "Windows、Linuxはプレビュー",
            "価格／ライセンス": "個人利用は無料／GPL-3.0",
            "主な違い": "ElectronベースのブラウザでOllamaを使えるSidekickサイドバーを搭載。macOS版なし"
          },
          {
            "アプリ": "[Page Assist](/ja/local-llms/page-assist-review)",
            "対応プラットフォーム": "ChromeとFirefoxの拡張機能",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "今お使いのブラウザに追加するサイドバー拡張機能。Ollamaに対応"
          }
        ],
        "note": "選ぶ前に、各アプリの最新の価格、ライセンス、対応プラットフォームを公式ページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "BrowserOS neoは同じ製品ですか？",
            "a": "いいえ。BrowserOS neoはAIコーディングエージェント向けの別のブラウザで、提供元はChromeと併用するサブブラウザと位置づけています。AIプロバイダーのキーは自分で用意し、独自のプライバシーポリシーがあります。このレビューは元のBrowserOSのみを対象としています。"
          },
          {
            "q": "ドキュメントにはどのローカルモデルが載っていますか？",
            "a": "入門用のQwen3 4Bのほかに、表にはMinistral 3 3B（2.99 GB）、DeepSeek-R1の蒸留モデル2種（4.68 GBと4.92 GB）、gpt-oss-20b（12.11 GB）、Magistral Small（13.28 GB）、Devstral Small 2（14.12 GB）、gpt-oss-120b（63.39 GB）が載っています。"
          },
          {
            "q": "BrowserOSはどのくらいの頻度でリリースされますか？",
            "a": "変更履歴には、2026年3月4日に0.41.0、3月9日に0.42.0、3月12日に0.43.0、3月20日に0.44.0、6月17日に0.46.0が載っています。0.45.0は見当たらず、0.46.0より後の記載はありません。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "総評",
        "content": "BrowserOSは、AGPL-3.0で提供される無料のChromiumブラウザで、Mac・Windows・Linuxに対応し、チャットモードでOllamaやLM Studioのローカルモデルを接続でき、uBlock Originで広告をブロックし、ローカルのMCPサーバーも備えています。一方で、変更履歴には2026年6月17日以降の記載がなく、既定のAIプロバイダーはクラウドサービスで、ドキュメントはローカルモデルがエージェントモードにはまだ十分な性能ではないとしており、プライバシーポリシーには複数の分析サービスが挙げられ、速度、安定性、回答品質は未検証です。すでにOllamaやLM Studioを使っていて、AIブラウザを試したい人に向いています。ドキュメントは裏付けではなく主張として読み、利用前に更新状況を確認してください。"
      },
      "sources": {
        "id": "sources",
        "title": "情報源",
        "items": [
          "[BrowserOS公式サイト](https://browseros.com) — 製品概要とダウンロード。2026年11月14日に確認。",
          "[BrowserOSダウンロードページ](https://browseros.com/download) — 元のBrowserOSのインストーラー。2026年11月14日に確認。",
          "[BrowserOSドキュメント：クイックスタート](https://docs.browseros.com/browseros/index.md) — モード、Homebrewでのインストール、macOSの要件。2026年11月14日に確認。",
          "[BrowserOSドキュメント：ローカルモデル](https://docs.browseros.com/browseros/features/local-models.md) — OllamaとLM Studioの設定、RAMの目安、モデル一覧。2026年11月14日に確認。",
          "[BrowserOSドキュメント：自分のLLMを使う](https://docs.browseros.com/browseros/features/bring-your-own-llm.md) — 対応プロバイダー。2026年11月14日に確認。",
          "[BrowserOSドキュメント：Claude CodeでMCPを使う](https://docs.browseros.com/browseros/features/use-with-claude-code.md) — 内蔵MCPサーバー。2026年11月14日に確認。",
          "[BrowserOSドキュメント：広告ブロック](https://docs.browseros.com/browseros/features/ad-blocking.md) — uBlock OriginとManifest V2。2026年11月14日に確認。",
          "[BrowserOS変更履歴](https://docs.browseros.com/browseros/changelog.md) — バージョン0.46.0までのリリース履歴。2026年11月14日に確認。",
          "[BrowserOSプライバシーポリシー](https://browseros.com/privacy/) — データの流れ、同期、分析サービス。日付は2026年3月13日。2026年11月14日に確認。",
          "[GitHubのBrowserOS](https://github.com/browseros-ai/BrowserOS) — リポジトリ、ライセンス、リリース。2026年11月14日に確認。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[LastBrowserレビュー](/ja/power-local-llm/lastbrowser-review) — Ollamaを使えるSidekickサイドバー付きのWindows向けAIブラウザ。",
          "[Page Assistレビュー](/ja/local-llms/page-assist-review) — Ollamaに対応したブラウザ拡張機能のサイドバー。",
          "[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。"
        ]
      }
    }
  },
  pt: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-14",
    "dateModified": "2026-11-14",
    "next_refresh_due": "2027-05-14",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/browseros-review-hero-pt.webp",
    "title": "Análise do BrowserOS: navegador de IA de código aberto com Ollama e LM Studio locais",
    "seoTitle": "Análise do BrowserOS: navegador de IA com modelos locais",
    "intro": "O BrowserOS é um navegador web gratuito e de código aberto, baseado no Chromium, para macOS, Windows e Linux, com um assistente de IA integrado. O Modo Chat pode usar um modelo local por meio do Ollama ou do LM Studio na sua própria máquina, ou um provedor na nuvem que você configura, enquanto para o Modo Agente, que age por você nas páginas web, são recomendados modelos na nuvem. Esta análise mostra o que você baixa, para onde vão seus dados, qual é a licença e o que as fontes deixam sem confirmação.",
    "metaDescription": "Análise do BrowserOS: navegador de IA gratuito e de código aberto para Mac, Windows e Linux com modelos locais do Ollama ou LM Studio. Privacidade.",
    "twitterDescription": "Análise do BrowserOS: navegador de IA gratuito e de código aberto com Ollama e LM Studio locais. Política de privacidade, licença AGPL-3.0 e o que as fontes deixam sem confirmação.",
    "audience": "Usuários de Mac, Windows e Linux que querem saber se o BrowserOS funciona com um modelo local do Ollama ou do LM Studio, quanto custa e quais afirmações as fontes deixam em aberto.",
    "readTime": "6 min de leitura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "análise do BrowserOS",
    "targetKeywords": [
      "análise browseros",
      "browseros ollama",
      "browseros lm studio",
      "navegador ia local",
      "navegador ia código aberto",
      "browseros privacidade",
      "navegador ia llm local"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Mac",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**Aviso: o registro de alterações do BrowserOS original não lista nenhuma versão após a 0.46.0, de 17 de junho de 2026, então ele pode estar sem manutenção — confira antes de depender dele.** É um navegador gratuito, de código aberto (AGPL-3.0) e baseado no Chromium para macOS, Windows e Linux, com um assistente de IA integrado que pode usar modelos locais por meio do Ollama ou do LM Studio.",
    "quickAnswerTop": {
      "pt": {
        "question": "O BrowserOS funciona com um modelo local?",
        "answer": "Sim, no Modo Chat: a documentação descreve como conectar o Ollama ou o LM Studio. Segundo a documentação, os modelos locais ainda não são potentes o bastante para o Modo Agente.",
        "bullets": [
          "Ollama ou LM Studio é uma instalação separada; o navegador não inclui nenhum modelo.",
          "A documentação pede uma janela de contexto de pelo menos 15.000–20.000 tokens; o padrão do Ollama, 4.096, é baixo demais.",
          "O modelo inicial da documentação é o Qwen3 4B, um download de 2.28 GB."
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
        "label": "O que é o BrowserOS?",
        "anchor": "what-is-browseros"
      },
      {
        "label": "Onde baixar",
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
        "label": "Leituras relacionadas",
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
            "text": "O BrowserOS é um navegador Chromium gratuito e de código aberto para Mac, Windows e Linux, com um assistente de IA integrado que pode usar modelos locais do Ollama ou do LM Studio."
          },
          {
            "type": "plain-terms",
            "text": "Você navega em um navegador de desktop comum e pergunta a um assistente de IA sobre a página que está lendo, usando um modelo que roda no seu próprio computador ou um serviço de IA na nuvem que você mesmo configura."
          }
        ],
        "items": [
          "Manutenção: a entrada mais recente do registro de alterações é a versão 0.46.0, de 17 de junho de 2026, cerca de cinco meses antes desta análise; o repositório compartilhado do GitHub recebeu alterações em 14 de novembro de 2026, mas suas versões listam apenas builds do BrowserOS neo.",
          "Custo: gratuito e de código aberto sob a AGPL-3.0; nenhuma página de preços foi encontrada.",
          "Plataformas: macOS 13 ou posterior, Windows e Linux; os downloads vêm do site do fabricante e o macOS tem também um cask do Homebrew.",
          "IA: suas próprias chaves de provedor, modelos locais pelo Ollama ou pelo LM Studio, ou assinaturas do ChatGPT Pro e do GitHub Copilot.",
          "Privacidade: segundo a política, com um modelo local nenhum dado sai do dispositivo; o provedor de IA padrão é um serviço na nuvem."
        ],
        "callouts": [
          {
            "type": "warning",
            "text": "Mais de três meses sem nenhuma versão no registro de alterações. O BrowserOS pode estar sem manutenção: confirme que ele ainda funciona no seu sistema e com o seu provedor de IA antes de depender dele."
          },
          {
            "type": "note",
            "text": "Esta análise se baseia em browseros.com, na documentação, na política de privacidade e no repositório do GitHub, consultados em 14 de novembro de 2026. A PromptQuorum não instalou, executou nem mediu o navegador, por isso velocidade, estabilidade e qualidade das respostas não são avaliadas. O BrowserOS neo, um produto separado do mesmo fabricante, é tratado apenas onde afeta esta análise."
          }
        ]
      },
      "overview": {
        "id": "what-is-browseros",
        "title": "O que é o BrowserOS?",
        "content": [
          "**O BrowserOS é um navegador web nativo de IA, um fork do Chromium, com um assistente que responde perguntas sobre as páginas e, no Modo Agente, age sobre elas.** A documentação lista três modos: Modo Chat, Modo Agente e Modo Graph, marcado como em breve. Ela também lista conexões integradas com serviços como Gmail, Calendar, Docs, Sheets e Notion.",
          "O mesmo site e o mesmo repositório do GitHub abrigam também o BrowserOS neo (versão 0.52.0, outubro de 2026), um navegador secundário separado, feito para agentes de programação com IA como Claude Code e Cursor, que o fabricante apresenta ao lado do Chrome, e não como substituto. Esta análise trata do BrowserOS original, embora a página inicial agora destaque o neo. O README do repositório cita a Felafax, Inc. na linha de copyright."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Onde baixar",
        "content": [
          "**O BrowserOS é um download gratuito para macOS, Windows e Linux na página de downloads do fabricante; no macOS também dá para instalar com o Homebrew.**"
        ],
        "columns": [
          "Opção",
          "Como obter"
        ],
        "rows": [
          {
            "Opção": "macOS",
            "Como obter": "[BrowserOS.dmg](https://files.browseros.com/download/BrowserOS.dmg), ou `brew install --cask browseros`; macOS 13 ou posterior"
          },
          {
            "Opção": "Windows",
            "Como obter": "[Instalador do BrowserOS](https://files.browseros.com/download/BrowserOS_installer.exe)"
          },
          {
            "Opção": "Linux",
            "Como obter": "[AppImage do BrowserOS](https://files.browseros.com/download/BrowserOS.AppImage)"
          },
          {
            "Opção": "Celular",
            "Como obter": "Nenhuma versão para celular é listada"
          },
          {
            "Opção": "Preço",
            "Como obter": "Download gratuito; nenhuma página de preços foi encontrada"
          },
          {
            "Opção": "Site",
            "Como obter": "[browseros.com](https://browseros.com)"
          },
          {
            "Opção": "Documentação",
            "Como obter": "[docs.browseros.com](https://docs.browseros.com)"
          },
          {
            "Opção": "Política de privacidade",
            "Como obter": "[Política de privacidade](https://browseros.com/privacy/)"
          },
          {
            "Opção": "Código-fonte",
            "Como obter": "[GitHub, AGPL-3.0](https://github.com/browseros-ai/BrowserOS)"
          }
        ],
        "note": "Versão analisada: 0.46.0 (17 de junho de 2026, segundo o registro de alterações). Os arquivos de download não trazem número de versão e as versões do GitHub listam apenas builds do BrowserOS neo; confirme você mesmo a versão instalada. A PromptQuorum não baixou nem executou nenhum instalador."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**As fontes indicam um mínimo apenas para o macOS (13 Ventura ou posterior); a documentação classifica os modelos locais pela RAM disponível.**"
        ],
        "columns": [
          "Item",
          "O que dizem as fontes"
        ],
        "rows": [
          {
            "Item": "macOS",
            "O que dizem as fontes": "macOS 13 (Ventura) ou posterior"
          },
          {
            "Item": "Windows e Linux",
            "O que dizem as fontes": "Nenhuma versão mínima nem valor de RAM ou disco é informado"
          },
          {
            "Item": "IA local",
            "O que dizem as fontes": "Ollama ou LM Studio instalado separadamente; modelos abaixo de 5 GB servem para 8 GB de RAM, os de 10–15 GB precisam de 16+ GB de RAM e os de 60+ GB precisam de 64+ GB de RAM"
          },
          {
            "Item": "Janela de contexto",
            "O que dizem as fontes": "Pelo menos 15.000–20.000 tokens; um contexto maior usa mais VRAM"
          }
        ],
        "note": "Nenhum modelo de GPU nem quantidade de VRAM é informado; a necessidade de hardware depende do modelo que você carrega."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Como começar",
        "content": [
          "**Os passos seguem a documentação do fabricante; a PromptQuorum não os executou.**"
        ],
        "numberedItems": [
          {
            "title": "Instale o navegador",
            "whyItMatters": "Baixe o instalador para o seu sistema ou instale o cask do Homebrew no macOS."
          },
          {
            "title": "Instale o Ollama ou o LM Studio e um modelo",
            "whyItMatters": "No Ollama, baixe um modelo e inicie o servidor com contexto de 20.000 tokens, por exemplo `OLLAMA_CONTEXT_LENGTH=20000 ollama serve`; no LM Studio, carregue um modelo na aba Developer, que o serve em `http://localhost:1234/v1/`."
          },
          {
            "title": "Conecte nas configurações",
            "whyItMatters": "Abra `chrome://browseros/settings`, escolha Use no cartão do Ollama (ou no cartão OpenAI Compatible com essa URL base, no caso do LM Studio), informe o ID do modelo e defina a janela de contexto para pelo menos 20.000 tokens."
          },
          {
            "title": "Planeje um provedor na nuvem para o Modo Agente",
            "whyItMatters": "Para o Modo Agente, que age por você nas páginas, a documentação recomenda o Claude Opus 4.5 ou outro modelo na nuvem; deixe uma chave de provedor à mão se quiser usá-lo."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos confirmados pelas fontes",
        "content": [
          "**Tudo o que segue vem da documentação ou do repositório do fabricante; nada foi testado de forma independente.**"
        ],
        "items": [
          "**Bloqueio de anúncios.** A documentação diz que o BrowserOS oferece bloqueio completo de anúncios com o uBlock Origin e reativou o suporte a extensões Manifest V2; a comparação com o Chrome vem de um teste feito pelo próprio fabricante.",
          "**Servidor MCP integrado.** Um servidor MCP escuta em 127.0.0.1 e expõe 53 ferramentas de automação do navegador; a documentação mostra como adicioná-lo ao Claude Code com `claude mcp add --transport http browseros <mcp_url> --scope user`, copiando a URL de `chrome://browseros/mcp`.",
          "**Traga seu próprio modelo.** Entre os provedores listados estão Moonshot AI, Gemini, Anthropic, OpenAI, OpenRouter, Azure OpenAI, AWS Bedrock e qualquer endpoint compatível com a OpenAI, além de assinaturas do ChatGPT Pro e do GitHub Copilot.",
          "**Apps conectados.** A documentação lista mais de 40 serviços externos, como Gmail, Calendar, Docs, Sheets e Notion.",
          "**Base Chromium.** A entrada da versão 0.46.0 no registro de alterações menciona o Chromium 148, uma nova aba redesenhada e o Claude Code e o Codex integrados ao assistente."
        ],
        "note": "A documentação do MCP alerta que qualquer pessoa que alcance a URL do MCP tem controle total do seu navegador, inclusive de todas as contas em que você está conectado, e diz que o servidor escuta apenas em 127.0.0.1."
      },
      "privacy": {
        "id": "privacy",
        "title": "Fluxo de dados e privacidade",
        "content": [
          "**A política de privacidade diz que o histórico de navegação, os cookies e os URLs visitados ficam armazenados localmente no seu computador e que a sincronização na nuvem vem desativada por padrão.** Se você ativar a sincronização, a política diz que os dados são armazenados criptografados em servidores do BrowserOS que rodam na AWS. Ela também diz que o BrowserOS coleta seu nome, seu e-mail e o seu uso do produto, e cita Segment, Mixpanel, June e Airtable como serviços utilizados.",
          "**O provedor de IA padrão é a Moonshot AI (Kimi K2.5), e a política diz que prompts, mensagens e dados que você compartilha com o recurso de IA são enviados aos servidores desse provedor.** Com suas próprias chaves, a política diz que o BrowserOS não intercepta, armazena nem registra o conteúdo de prompts ou respostas; com um modelo hospedado localmente, como o Ollama ou o LM Studio, diz que nenhum dado sai do seu dispositivo. A documentação diz separadamente que suas chaves ficam na sua máquina e que as solicitações vão direto ao provedor."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Estas são afirmações do fabricante, não resultados de auditoria, e a PromptQuorum não inspecionou o tráfego de rede. A política é datada de 13 de março de 2026 e cobre apenas o navegador web BrowserOS; ela não menciona o BrowserOS neo."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem é",
        "items": [
          "**Entusiastas de modelos locais** que querem um navegador Chromium com Ollama ou LM Studio integrados às configurações.",
          "**Fãs de bloqueio de anúncios** que querem uBlock Origin e extensões Manifest V2 em uma base Chromium moderna.",
          "**Usuários do Claude Code** que querem um navegador que o agente possa controlar por um servidor MCP local e que aceitam o acesso que isso implica."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Desempenho e estabilidade.** Velocidade, uso de memória, travamentos e qualidade das respostas com modelos locais não foram testados.",
          "**Modo Agente.** Não foi testada a confiabilidade com que ele conclui tarefas, com um modelo na nuvem ou com qualquer outro.",
          "**Manutenção do original.** O registro de alterações não mostra nada após 17 de junho de 2026, enquanto o trabalho recente do repositório diz respeito ao BrowserOS neo; as fontes não dizem se o original continuará recebendo atualizações.",
          "**Versão e assinatura.** Os arquivos de download não trazem número de versão e não foram encontrados checksums nem dados de assinatura do build original.",
          "**Redação sobre agentes locais.** A documentação diz que o BrowserOS «executa agentes de IA localmente na sua máquina», mas recomenda modelos na nuvem para o Modo Agente; o que roda no seu dispositivo depende, portanto, do provedor que você escolher.",
          "**Resultados do bloqueio de anúncios.** A comparação com o Chrome na documentação vem do teste do próprio fabricante e não foi repetida."
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
            "App": "[LastBrowser](/pt/power-local-llm/lastbrowser-review)",
            "Plataformas": "Windows, prévia para Linux",
            "Preço / licença": "Grátis para uso pessoal / GPL-3.0",
            "Diferença principal": "Navegador baseado em Electron com barra lateral Sidekick que pode usar o Ollama; sem versão para macOS"
          },
          {
            "App": "[Page Assist](/pt/local-llms/page-assist-review)",
            "Plataformas": "Extensão para Chrome e Firefox",
            "Preço / licença": "Grátis / MIT",
            "Diferença principal": "Extensão de barra lateral para o navegador que você já usa; funciona com o Ollama"
          }
        ],
        "note": "Confirme o preço, a licença e as plataformas atuais de cada app na própria página antes de escolher."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "O BrowserOS neo é o mesmo produto?",
            "a": "Não. O BrowserOS neo é um navegador separado para agentes de programação com IA, que o fabricante apresenta como navegador secundário ao lado do Chrome; você traz suas próprias chaves de provedor de IA, e ele tem política de privacidade própria. Esta análise trata apenas do BrowserOS original."
          },
          {
            "q": "Quais modelos locais a documentação lista?",
            "a": "Além do modelo inicial Qwen3 4B, a tabela lista Ministral 3 3B (2.99 GB), duas destilações do DeepSeek-R1 (4.68 e 4.92 GB), gpt-oss-20b (12.11 GB), Magistral Small (13.28 GB), Devstral Small 2 (14.12 GB) e gpt-oss-120b (63.39 GB)."
          },
          {
            "q": "Com que frequência o BrowserOS é lançado?",
            "a": "O registro de alterações mostra as versões 0.41.0 em 4 de março, 0.42.0 em 9 de março, 0.43.0 em 12 de março, 0.44.0 em 20 de março e 0.46.0 em 17 de junho de 2026; a versão 0.45.0 não aparece e nada é listado após a 0.46.0."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O BrowserOS é um navegador Chromium gratuito sob a AGPL-3.0 para Mac, Windows e Linux, que conecta modelos locais do Ollama ou do LM Studio no Modo Chat, bloqueia anúncios com o uBlock Origin e expõe um servidor MCP local. Por outro lado, seu registro de alterações não tem nenhuma entrada desde 17 de junho de 2026, o provedor de IA padrão é um serviço na nuvem, segundo a documentação, os modelos locais ainda não são potentes o bastante para o Modo Agente, a política de privacidade cita vários serviços de análise, e velocidade, estabilidade e qualidade das respostas não foram testadas. Ele combina com quem já usa Ollama ou LM Studio e quer experimentar um navegador de IA; leia a documentação como uma declaração, não como prova, e confira o estado das atualizações antes de depender dele."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Site do BrowserOS](https://browseros.com) — visão geral do produto e downloads, consultado em 14 de novembro de 2026.",
          "[Página de downloads do BrowserOS](https://browseros.com/download) — instaladores do BrowserOS original, consultada em 14 de novembro de 2026.",
          "[Documentação do BrowserOS, início rápido](https://docs.browseros.com/browseros/index.md) — modos, instalação pelo Homebrew, requisito do macOS, consultada em 14 de novembro de 2026.",
          "[Documentação do BrowserOS, modelos locais](https://docs.browseros.com/browseros/features/local-models.md) — configuração do Ollama e do LM Studio, faixas de RAM, lista de modelos, consultada em 14 de novembro de 2026.",
          "[Documentação do BrowserOS, traga seu próprio LLM](https://docs.browseros.com/browseros/features/bring-your-own-llm.md) — provedores compatíveis, consultada em 14 de novembro de 2026.",
          "[Documentação do BrowserOS, MCP com o Claude Code](https://docs.browseros.com/browseros/features/use-with-claude-code.md) — servidor MCP integrado, consultada em 14 de novembro de 2026.",
          "[Documentação do BrowserOS, bloqueio de anúncios](https://docs.browseros.com/browseros/features/ad-blocking.md) — uBlock Origin e Manifest V2, consultada em 14 de novembro de 2026.",
          "[Registro de alterações do BrowserOS](https://docs.browseros.com/browseros/changelog.md) — histórico de versões até a 0.46.0, consultado em 14 de novembro de 2026.",
          "[Política de privacidade do BrowserOS](https://browseros.com/privacy/) — fluxo de dados, sincronização e serviços de análise, datada de 13 de março de 2026, consultada em 14 de novembro de 2026.",
          "[BrowserOS no GitHub](https://github.com/browseros-ai/BrowserOS) — repositório, licença e versões, consultado em 14 de novembro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leituras relacionadas",
        "items": [
          "[Análise do LastBrowser](/pt/power-local-llm/lastbrowser-review) — um navegador de IA para Windows com barra lateral Sidekick que pode usar o Ollama.",
          "[Análise do Page Assist](/pt/local-llms/page-assist-review) — uma barra lateral em forma de extensão de navegador que funciona com o Ollama.",
          "[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local."
        ]
      }
    }
  },
  ar: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-14",
    "dateModified": "2026-11-14",
    "next_refresh_due": "2027-05-14",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/browseros-review-hero-ar.webp",
    "title": "مراجعة BrowserOS: متصفح ذكاء اصطناعي مفتوح المصدر يدعم Ollama وLM Studio محليًا",
    "seoTitle": "مراجعة BrowserOS: متصفح ذكاء اصطناعي بنماذج محلية",
    "intro": "BrowserOS متصفح ويب مجاني ومفتوح المصدر مبني على Chromium لأنظمة macOS وWindows وLinux، ويتضمن مساعد ذكاء اصطناعي مدمجًا. يمكن لوضع الدردشة فيه استخدام نموذج محلي عبر Ollama أو LM Studio على جهازك، أو مزوّد سحابي تضبطه بنفسك، بينما يُوصى باستخدام نماذج سحابية مع وضع الوكيل الذي ينفّذ المهام على صفحات الويب نيابةً عنك. تتناول هذه المراجعة ما تنزّله، وإلى أين تذهب بياناتك، والترخيص، وما تتركه المصادر دون تأكيد.",
    "metaDescription": "مراجعة BrowserOS: متصفح ذكاء اصطناعي مجاني ومفتوح المصدر لأنظمة Mac وWindows وLinux يعمل مع نماذج Ollama وLM Studio المحلية. الخصوصية والترخيص والمخاطر.",
    "twitterDescription": "مراجعة BrowserOS: متصفح ذكاء اصطناعي مجاني ومفتوح المصدر يدعم Ollama وLM Studio محليًا. سياسة الخصوصية وترخيص AGPL-3.0 وما تتركه المصادر دون تأكيد.",
    "audience": "مستخدمو Mac وWindows وLinux الراغبون في معرفة ما إذا كان BrowserOS يعمل مع نموذج محلي من Ollama أو LM Studio، وكم يكلّف، وما الادعاءات التي تتركها المصادر مفتوحة.",
    "readTime": "6 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة BrowserOS",
    "targetKeywords": [
      "مراجعة browseros",
      "browseros ollama",
      "browseros lm studio",
      "متصفح ذكاء اصطناعي محلي",
      "متصفح ذكاء اصطناعي مفتوح المصدر",
      "خصوصية browseros",
      "متصفح ذكاء اصطناعي llm محلي"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Mac",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**تحذير: لا يسرد سجل التغييرات في BrowserOS الأصلي أي إصدار بعد الإصدار 0.46.0 بتاريخ 17 يونيو 2026، لذا قد يكون المشروع غير مُصان — تحقّق منه قبل الاعتماد عليه.** إنه متصفح مجاني ومفتوح المصدر (AGPL-3.0) مبني على Chromium لأنظمة macOS وWindows وLinux، مع مساعد ذكاء اصطناعي مدمج يمكنه استخدام نماذج محلية عبر Ollama أو LM Studio.",
    "quickAnswerTop": {
      "ar": {
        "question": "هل يعمل BrowserOS مع نموذج محلي؟",
        "answer": "نعم في وضع الدردشة: تشرح الوثائق كيفية ربط Ollama أو LM Studio. وتقول الوثائق إن النماذج المحلية ليست قوية بما يكفي بعد لوضع الوكيل.",
        "bullets": [
          "يُثبَّت Ollama أو LM Studio بشكل منفصل؛ فالمتصفح لا يضمّ أي نموذج.",
          "تطلب الوثائق نافذة سياق لا تقل عن 15,000–20,000 رمز (token)؛ والقيمة الافتراضية في Ollama وهي 4,096 منخفضة جدًا.",
          "النموذج المبدئي في الوثائق هو Qwen3 4B، وحجم تنزيله 2.28 GB."
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
        "label": "ما هو BrowserOS؟",
        "anchor": "what-is-browseros"
      },
      {
        "label": "طريقة الحصول عليه",
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
            "text": "BrowserOS متصفح Chromium مجاني ومفتوح المصدر لأنظمة Mac وWindows وLinux، يتضمن مساعد ذكاء اصطناعي مدمجًا يمكنه استخدام نماذج Ollama أو LM Studio المحلية."
          },
          {
            "type": "plain-terms",
            "text": "تتصفح في متصفح سطح مكتب عادي وتسأل مساعد ذكاء اصطناعي عن الصفحة التي تقرأها، باستخدام نموذج يعمل على حاسوبك أو خدمة ذكاء اصطناعي سحابية تضبطها بنفسك."
          }
        ],
        "items": [
          "الصيانة: أحدث إدخال في سجل التغييرات هو الإصدار 0.46.0 بتاريخ 17 يونيو 2026، أي قبل نحو خمسة أشهر من هذه المراجعة؛ وقد حُدّث مستودع GitHub المشترك في 14 نوفمبر 2026، لكن إصداراته لا تسرد سوى نسخ BrowserOS neo.",
          "التكلفة: مجاني ومفتوح المصدر بموجب AGPL-3.0؛ ولم نعثر على صفحة أسعار.",
          "المنصات: macOS 13 أو أحدث وWindows وLinux؛ وتأتي التنزيلات من موقع الشركة المطوّرة، ويتوفر لنظام macOS أيضًا cask عبر Homebrew.",
          "الذكاء الاصطناعي: مفاتيح المزوّد الخاصة بك، أو نماذج محلية عبر Ollama أو LM Studio، أو اشتراكات ChatGPT Pro وGitHub Copilot.",
          "الخصوصية: تقول السياسة إن أي بيانات لا تغادر الجهاز مع نموذج محلي؛ ومزوّد الذكاء الاصطناعي الافتراضي خدمة سحابية."
        ],
        "callouts": [
          {
            "type": "warning",
            "text": "لا يوجد إصدار في سجل التغييرات منذ أكثر من ثلاثة أشهر. قد يكون BrowserOS غير مُصان: تأكد من أنه ما زال يعمل على نظامك ومع مزوّد الذكاء الاصطناعي لديك قبل الاعتماد عليه."
          },
          {
            "type": "note",
            "text": "تستند هذه المراجعة إلى browseros.com ووثائقه وسياسة الخصوصية فيه ومستودع GitHub، وقد تحققنا منها في 14 نوفمبر 2026. لم تثبّت PromptQuorum المتصفح ولم تشغّله ولم تقِس أداءه، لذلك لا تُقيَّم السرعة والاستقرار وجودة الإجابات. أما BrowserOS neo، وهو منتج منفصل من الشركة نفسها، فلا يُتناول إلا حيث يؤثر في هذه المراجعة."
          }
        ]
      },
      "overview": {
        "id": "what-is-browseros",
        "title": "ما هو BrowserOS؟",
        "content": [
          "**BrowserOS متصفح ويب أصيل للذكاء الاصطناعي، وهو تفرّع (fork) من Chromium، مع مساعد يجيب عن الأسئلة حول الصفحات وينفّذ المهام عليها في وضع الوكيل.** تسرد الوثائق ثلاثة أوضاع: وضع الدردشة ووضع الوكيل ووضع Graph المُشار إليه بأنه قادم قريبًا. كما تسرد اتصالات مدمجة بخدمات مثل Gmail وCalendar وDocs وSheets وNotion.",
          "يستضيف الموقع نفسه ومستودع GitHub نفسه أيضًا BrowserOS neo (الإصدار 0.52.0، أكتوبر 2026)، وهو متصفح ثانوي منفصل مخصص لوكلاء البرمجة بالذكاء الاصطناعي مثل Claude Code وCursor، وتقدّمه الشركة المطوّرة إلى جانب Chrome لا بديلًا عنه. تتناول هذه المراجعة BrowserOS الأصلي، رغم أن الصفحة الرئيسية تبدأ الآن بـ neo. ويذكر ملف README في المستودع شركة Felafax, Inc. في سطر حقوق النشر."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "طريقة الحصول عليه",
        "content": [
          "**BrowserOS تنزيل مجاني لأنظمة macOS وWindows وLinux من صفحة التنزيل لدى الشركة المطوّرة؛ ويمكن تثبيته على macOS أيضًا عبر Homebrew.**"
        ],
        "columns": [
          "الخيار",
          "طريقة الحصول"
        ],
        "rows": [
          {
            "الخيار": "macOS",
            "طريقة الحصول": "[BrowserOS.dmg](https://files.browseros.com/download/BrowserOS.dmg)، أو `brew install --cask browseros`؛ macOS 13 أو أحدث"
          },
          {
            "الخيار": "Windows",
            "طريقة الحصول": "[مثبّت BrowserOS](https://files.browseros.com/download/BrowserOS_installer.exe)"
          },
          {
            "الخيار": "Linux",
            "طريقة الحصول": "[AppImage الخاص بـ BrowserOS](https://files.browseros.com/download/BrowserOS.AppImage)"
          },
          {
            "الخيار": "الهاتف",
            "طريقة الحصول": "لا توجد نسخة للهاتف في القائمة"
          },
          {
            "الخيار": "السعر",
            "طريقة الحصول": "تنزيل مجاني؛ ولم نعثر على صفحة أسعار"
          },
          {
            "الخيار": "الموقع",
            "طريقة الحصول": "[browseros.com](https://browseros.com)"
          },
          {
            "الخيار": "الوثائق",
            "طريقة الحصول": "[docs.browseros.com](https://docs.browseros.com)"
          },
          {
            "الخيار": "سياسة الخصوصية",
            "طريقة الحصول": "[سياسة الخصوصية](https://browseros.com/privacy/)"
          },
          {
            "الخيار": "الشيفرة المصدرية",
            "طريقة الحصول": "[GitHub، AGPL-3.0](https://github.com/browseros-ai/BrowserOS)"
          }
        ],
        "note": "الإصدار الذي رُوجع: 0.46.0 (17 يونيو 2026، بحسب سجل التغييرات). لا تحمل ملفات التنزيل رقم إصدار، ولا تسرد إصدارات GitHub سوى نسخ BrowserOS neo، لذا تحقّق بنفسك من الإصدار المثبّت. لم تنزّل PromptQuorum أي مثبّت ولم تشغّله."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "المتطلبات",
        "content": [
          "**تحدد المصادر حدًا أدنى لنظام macOS فقط (13 Ventura أو أحدث)؛ وتصنّف الوثائق النماذج المحلية بحسب الذاكرة العشوائية المتاحة.**"
        ],
        "columns": [
          "العنصر",
          "ما تقوله المصادر"
        ],
        "rows": [
          {
            "العنصر": "macOS",
            "ما تقوله المصادر": "macOS 13 (Ventura) أو أحدث"
          },
          {
            "العنصر": "Windows وLinux",
            "ما تقوله المصادر": "لا يُذكر حد أدنى للإصدار ولا أرقام للذاكرة العشوائية أو القرص"
          },
          {
            "العنصر": "الذكاء الاصطناعي المحلي",
            "ما تقوله المصادر": "تثبيت Ollama أو LM Studio بشكل منفصل؛ النماذج دون 5 GB تناسب 8 GB من RAM، وتحتاج نماذج 10–15 GB إلى 16+ GB من RAM، وتحتاج نماذج 60+ GB إلى 64+ GB من RAM"
          },
          {
            "العنصر": "نافذة السياق",
            "ما تقوله المصادر": "لا تقل عن 15,000–20,000 رمز؛ والسياق الأكبر يستهلك مزيدًا من VRAM"
          }
        ],
        "note": "لا يُذكر طراز وحدة معالجة رسومية ولا مقدار VRAM؛ وتعتمد احتياجات العتاد على النموذج الذي تحمّله."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "كيف تبدأ",
        "content": [
          "**تتبع الخطوات وثائق الشركة المطوّرة؛ ولم تنفّذها PromptQuorum.**"
        ],
        "numberedItems": [
          {
            "title": "ثبّت المتصفح",
            "whyItMatters": "نزّل المثبّت الخاص بنظامك، أو ثبّت cask الخاص بـ Homebrew على macOS."
          },
          {
            "title": "ثبّت Ollama أو LM Studio ونموذجًا",
            "whyItMatters": "في Ollama، نزّل نموذجًا وشغّل الخادم بسياق قدره 20,000 رمز، مثل `OLLAMA_CONTEXT_LENGTH=20000 ollama serve`؛ وفي LM Studio، حمّل نموذجًا في تبويب Developer فيُقدَّم على `http://localhost:1234/v1/`."
          },
          {
            "title": "اربطه من الإعدادات",
            "whyItMatters": "افتح `chrome://browseros/settings`، واختر Use في بطاقة Ollama (أو في بطاقة OpenAI Compatible مع عنوان URL الأساسي هذا في حالة LM Studio)، وأدخل معرّف النموذج، واضبط نافذة السياق على 20,000 رمز على الأقل."
          },
          {
            "title": "خطّط لمزوّد سحابي لوضع الوكيل",
            "whyItMatters": "لوضع الوكيل الذي ينفّذ المهام على الصفحات نيابةً عنك، توصي الوثائق بـ Claude Opus 4.5 أو نموذج سحابي آخر؛ أبقِ مفتاح مزوّد جاهزًا إن أردت استخدامه."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "الميزات التي أكدتها المصادر",
        "content": [
          "**كل ما يلي مأخوذ من وثائق الشركة المطوّرة أو مستودعها؛ ولم يُختبر أي منه بشكل مستقل.**"
        ],
        "items": [
          "**حظر الإعلانات.** تقول الوثائق إن BrowserOS يدعم حظر الإعلانات الكامل عبر uBlock Origin وأعاد تفعيل دعم إضافات Manifest V2؛ ومقارنتها مع Chrome مأخوذة من اختبار أجرته الشركة نفسها.",
          "**خادم MCP مدمج.** يستمع خادم MCP على 127.0.0.1 ويتيح 53 أداة لأتمتة المتصفح؛ وتوضح الوثائق كيفية إضافته إلى Claude Code بالأمر `claude mcp add --transport http browseros <mcp_url> --scope user` مع نسخ العنوان من `chrome://browseros/mcp`.",
          "**أحضر نموذجك الخاص.** من المزوّدين المدرجين Moonshot AI وGemini وAnthropic وOpenAI وOpenRouter وAzure OpenAI وAWS Bedrock وأي نقطة نهاية متوافقة مع OpenAI، إضافةً إلى اشتراكات ChatGPT Pro وGitHub Copilot.",
          "**تطبيقات متصلة.** تسرد الوثائق أكثر من 40 خدمة خارجية، مثل Gmail وCalendar وDocs وSheets وNotion.",
          "**قاعدة Chromium.** يذكر إدخال الإصدار 0.46.0 في سجل التغييرات Chromium 148 وعلامة تبويب جديدة معاد تصميمها وإدماج Claude Code وCodex في المساعد."
        ],
        "note": "تحذّر وثائق MCP من أن أي شخص يستطيع الوصول إلى عنوان MCP يملك تحكمًا كاملًا في متصفحك، بما في ذلك كل الحسابات التي سجّلت الدخول إليها، وتقول إن الخادم يستمع على 127.0.0.1 فقط."
      },
      "privacy": {
        "id": "privacy",
        "title": "تدفق البيانات والخصوصية",
        "content": [
          "**تقول سياسة الخصوصية إن سجل التصفح وملفات تعريف الارتباط وعناوين URL التي زرتها تُخزَّن محليًا على حاسوبك، وإن المزامنة السحابية معطّلة افتراضيًا.** وإذا فعّلت المزامنة، تقول السياسة إن البيانات تُخزَّن مشفّرة على خوادم BrowserOS التي تعمل على AWS. وتقول أيضًا إن BrowserOS يجمع اسمك وبريدك الإلكتروني وتفاعلك مع المنتج، وتذكر Segment وMixpanel وJune وAirtable بين الخدمات التي يستخدمها.",
          "**مزوّد الذكاء الاصطناعي الافتراضي هو Moonshot AI (Kimi K2.5)، وتقول السياسة إن الأوامر والرسائل والبيانات التي تشاركها مع ميزة الذكاء الاصطناعي تُرسل إلى خوادم ذلك المزوّد.** ومع مفاتيحك الخاصة، تقول السياسة إن BrowserOS لا يعترض محتوى الأوامر أو الإجابات ولا يخزّنه ولا يسجّله؛ ومع نموذج مستضاف محليًا مثل Ollama أو LM Studio، تقول إن أي بيانات لا تغادر جهازك. وتقول الوثائق على نحو منفصل إن مفاتيحك تبقى على جهازك وإن الطلبات تذهب مباشرةً إلى المزوّد."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "هذه تصريحات من الشركة المطوّرة وليست نتائج تدقيق، ولم تفحص PromptQuorum حركة الشبكة. السياسة مؤرخة في 13 مارس 2026 وتغطي متصفح BrowserOS فقط؛ ولا تذكر BrowserOS neo."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**المهتمون بتجربة النماذج المحلية** ممن يريدون متصفح Chromium يضم Ollama أو LM Studio في إعداداته.",
          "**محبو حظر الإعلانات** ممن يريدون uBlock Origin وإضافات Manifest V2 على قاعدة Chromium حديثة.",
          "**مستخدمو Claude Code** ممن يريدون متصفحًا يستطيع وكيلهم التحكم فيه عبر خادم MCP محلي ويقبلون ما يعنيه ذلك من صلاحيات وصول."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**الأداء والاستقرار.** لم تُختبر السرعة واستهلاك الذاكرة والأعطال وجودة الإجابات مع النماذج المحلية.",
          "**وضع الوكيل.** لم تُختبر درجة موثوقيته في إنجاز المهام، مع نموذج سحابي أو غيره.",
          "**صيانة النسخة الأصلية.** لا يُظهر سجل التغييرات شيئًا بعد 17 يونيو 2026، بينما يتعلق العمل الأخير في المستودع بـ BrowserOS neo؛ ولا تذكر المصادر ما إذا كانت النسخة الأصلية ستواصل تلقي التحديثات.",
          "**الإصدار والتوقيع.** لا تحمل ملفات التنزيل رقم إصدار، ولم نعثر على مجاميع تحقق أو بيانات توقيع للنسخة الأصلية.",
          "**صياغة الوكلاء المحليين.** تقول الوثائق إن BrowserOS «يشغّل وكلاء الذكاء الاصطناعي محليًا على جهازك» لكنها توصي بنماذج سحابية لوضع الوكيل، لذا فإن ما يعمل على جهازك يعتمد على المزوّد الذي تختاره.",
          "**نتائج حظر الإعلانات.** مقارنة Chrome في الوثائق مأخوذة من اختبار الشركة نفسها ولم نكررها."
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
          "الفرق الأبرز"
        ],
        "rows": [
          {
            "التطبيق": "[LastBrowser](/ar/power-local-llm/lastbrowser-review)",
            "المنصات": "Windows، ومعاينة Linux",
            "السعر / الترخيص": "مجاني للاستخدام الشخصي / GPL-3.0",
            "الفرق الأبرز": "متصفح مبني على Electron بشريط جانبي Sidekick يمكنه استخدام Ollama؛ بلا نسخة لنظام macOS"
          },
          {
            "التطبيق": "[Page Assist](/ar/local-llms/page-assist-review)",
            "المنصات": "إضافة لـ Chrome وFirefox",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الأبرز": "إضافة شريط جانبي للمتصفح الذي تستخدمه بالفعل؛ تعمل مع Ollama"
          }
        ],
        "note": "تحقق من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته الخاصة قبل الاختيار."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل BrowserOS neo هو المنتج نفسه؟",
            "a": "لا. BrowserOS neo متصفح منفصل لوكلاء البرمجة بالذكاء الاصطناعي، تقدّمه الشركة المطوّرة متصفحًا ثانويًا إلى جانب Chrome؛ وتحضر مفاتيح مزوّد الذكاء الاصطناعي بنفسك، وله سياسة خصوصية خاصة به. تتناول هذه المراجعة BrowserOS الأصلي فقط."
          },
          {
            "q": "ما النماذج المحلية التي تسردها الوثائق؟",
            "a": "إلى جانب النموذج المبدئي Qwen3 4B، يسرد جدولها Ministral 3 3B (2.99 GB) ونموذجين مقطَّرين من DeepSeek-R1 (4.68 و4.92 GB) وgpt-oss-20b (12.11 GB) وMagistral Small (13.28 GB) وDevstral Small 2 (14.12 GB) وgpt-oss-120b (63.39 GB)."
          },
          {
            "q": "كم مرة يصدر BrowserOS؟",
            "a": "يُظهر سجل التغييرات الإصدارات 0.41.0 في 4 مارس، و0.42.0 في 9 مارس، و0.43.0 في 12 مارس، و0.44.0 في 20 مارس، و0.46.0 في 17 يونيو 2026؛ ولا يظهر الإصدار 0.45.0، ولا يُسرد شيء بعد 0.46.0."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "BrowserOS متصفح Chromium مجاني بترخيص AGPL-3.0 لأنظمة Mac وWindows وLinux، يربط نماذج Ollama أو LM Studio المحلية في وضع الدردشة، ويحظر الإعلانات عبر uBlock Origin، ويتيح خادم MCP محليًا. في المقابل، لا يتضمن سجل تغييراته أي إدخال منذ 17 يونيو 2026، ومزوّد الذكاء الاصطناعي الافتراضي خدمة سحابية، وتقول الوثائق إن النماذج المحلية ليست قوية بما يكفي بعد لوضع الوكيل، وتذكر سياسة الخصوصية عدة خدمات تحليلات، ولم تُختبر السرعة والاستقرار وجودة الإجابات. يناسب من يشغّل Ollama أو LM Studio بالفعل ويريد تجربة متصفح ذكاء اصطناعي؛ اقرأ الوثائق بوصفها إعلانًا لا دليلًا، وتحقّق من حالة التحديثات قبل الاعتماد عليه."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[موقع BrowserOS](https://browseros.com) — نظرة عامة على المنتج والتنزيلات، روجع في 14 نوفمبر 2026.",
          "[صفحة تنزيل BrowserOS](https://browseros.com/download) — مثبّتات BrowserOS الأصلي، روجعت في 14 نوفمبر 2026.",
          "[وثائق BrowserOS، البدء السريع](https://docs.browseros.com/browseros/index.md) — الأوضاع والتثبيت عبر Homebrew ومتطلب macOS، روجعت في 14 نوفمبر 2026.",
          "[وثائق BrowserOS، النماذج المحلية](https://docs.browseros.com/browseros/features/local-models.md) — إعداد Ollama وLM Studio وفئات الذاكرة العشوائية وقائمة النماذج، روجعت في 14 نوفمبر 2026.",
          "[وثائق BrowserOS، أحضر نموذج LLM الخاص بك](https://docs.browseros.com/browseros/features/bring-your-own-llm.md) — المزوّدون المدعومون، روجعت في 14 نوفمبر 2026.",
          "[وثائق BrowserOS، MCP مع Claude Code](https://docs.browseros.com/browseros/features/use-with-claude-code.md) — خادم MCP المدمج، روجعت في 14 نوفمبر 2026.",
          "[وثائق BrowserOS، حظر الإعلانات](https://docs.browseros.com/browseros/features/ad-blocking.md) — uBlock Origin وManifest V2، روجعت في 14 نوفمبر 2026.",
          "[سجل تغييرات BrowserOS](https://docs.browseros.com/browseros/changelog.md) — سجل الإصدارات حتى الإصدار 0.46.0، روجع في 14 نوفمبر 2026.",
          "[سياسة خصوصية BrowserOS](https://browseros.com/privacy/) — تدفق البيانات والمزامنة وخدمات التحليلات، مؤرخة في 13 مارس 2026، روجعت في 14 نوفمبر 2026.",
          "[BrowserOS على GitHub](https://github.com/browseros-ai/BrowserOS) — المستودع والترخيص والإصدارات، روجع في 14 نوفمبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة LastBrowser](/ar/power-local-llm/lastbrowser-review) — متصفح ذكاء اصطناعي لنظام Windows بشريط جانبي Sidekick يمكنه استخدام Ollama.",
          "[مراجعة Page Assist](/ar/local-llms/page-assist-review) — شريط جانبي على هيئة إضافة للمتصفح يعمل مع Ollama.",
          "[دليل برمجيات LLM المحلية](/ar/directory) — الكتالوج الكامل لأدوات الذكاء الاصطناعي المحلي."
        ]
      }
    }
  },
  zh: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-14",
    "dateModified": "2026-11-14",
    "next_refresh_due": "2027-05-14",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/browseros-review-hero-zh.webp",
    "title": "BrowserOS 评测：支持本地 Ollama 和 LM Studio 的开源 AI 浏览器",
    "seoTitle": "BrowserOS 评测：支持本地模型的开源 AI 浏览器",
    "intro": "BrowserOS 是一款基于 Chromium 的免费开源网页浏览器，支持 macOS、Windows 和 Linux，并内置 AI 助手。它的聊天模式可以通过 Ollama 或 LM Studio 使用你本机上的本地模型，也可以使用你自行配置的云端提供商；而能替你在网页上执行操作的智能体模式，则建议搭配云端模型。本评测说明你会下载什么、数据流向哪里、许可证是什么，以及资料中尚未确认的部分。",
    "metaDescription": "BrowserOS 评测：支持 Mac、Windows、Linux 的免费开源 AI 浏览器，可使用本地 Ollama 或 LM Studio 模型。涵盖隐私、许可证与风险。",
    "twitterDescription": "BrowserOS 评测：支持本地 Ollama 和 LM Studio 的免费开源 AI 浏览器。隐私政策、AGPL-3.0 许可证，以及资料中尚未确认的部分。",
    "audience": "想了解 BrowserOS 能否搭配本地 Ollama 或 LM Studio 模型运行、费用多少、哪些说法资料尚未证实的 Mac、Windows 和 Linux 用户。",
    "readTime": "阅读约6分钟",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "BrowserOS 评测",
    "targetKeywords": [
      "browseros 评测",
      "browseros ollama",
      "browseros lm studio",
      "本地 ai 浏览器",
      "开源 ai 浏览器",
      "browseros 隐私",
      "ai 浏览器 本地 llm"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Mac",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**警告：原版 BrowserOS 的更新日志中，2026 年 6 月 17 日的 0.46.0 版本之后没有再列出任何版本，因此它可能已无人维护——使用前请先确认。** 它是一款免费开源（AGPL-3.0）、基于 Chromium 的浏览器，支持 macOS、Windows 和 Linux，内置的 AI 助手可通过 Ollama 或 LM Studio 使用本地模型。",
    "quickAnswerTop": {
      "zh": {
        "question": "BrowserOS 能运行本地模型吗？",
        "answer": "聊天模式可以：文档介绍了如何连接 Ollama 或 LM Studio。但文档表示，本地模型目前还不足以胜任智能体模式。",
        "bullets": [
          "Ollama 或 LM Studio 需要单独安装；浏览器不附带任何模型。",
          "文档要求上下文窗口至少设为 15,000–20,000 个 token；Ollama 默认的 4,096 太低。",
          "文档中的入门模型是 Qwen3 4B，下载大小为 2.28 GB。"
        ],
        "updatedDate": "2026-11"
      }
    },
    "toc": [
      {
        "label": "快速解答",
        "anchor": "quick-answer"
      },
      {
        "label": "BrowserOS 是什么？",
        "anchor": "what-is-browseros"
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
        "label": "上手步骤",
        "anchor": "getting-started"
      },
      {
        "label": "资料确认的功能",
        "anchor": "key-features"
      },
      {
        "label": "数据流向与隐私",
        "anchor": "privacy"
      },
      {
        "label": "适合谁用",
        "anchor": "who-should-use"
      },
      {
        "label": "我们无法验证的内容",
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
            "text": "BrowserOS 是一款支持 Mac、Windows 和 Linux 的免费开源 Chromium 浏览器，内置 AI 助手，可使用本地 Ollama 或 LM Studio 模型。"
          },
          {
            "type": "plain-terms",
            "text": "你在普通的桌面浏览器里浏览网页，并向 AI 助手询问当前阅读的页面；助手可以使用你自己电脑上运行的模型，也可以使用你自行配置的云端 AI 服务。"
          }
        ],
        "items": [
          "维护情况：更新日志中最新的条目是 2026 年 6 月 17 日的 0.46.0 版本，距本评测约五个月；共用的 GitHub 仓库在 2026 年 11 月 14 日有过提交，但其发布列表只有 BrowserOS neo 的构建。",
          "费用：免费，基于 AGPL-3.0 开源；未找到定价页面。",
          "平台：macOS 13 或更高版本、Windows 和 Linux；下载来自开发方官网，macOS 另有 Homebrew cask。",
          "AI：你自己的提供商密钥、通过 Ollama 或 LM Studio 使用的本地模型，或 ChatGPT Pro 与 GitHub Copilot 订阅。",
          "隐私：政策称使用本地模型时没有数据离开设备；默认的 AI 提供商是云服务。"
        ],
        "callouts": [
          {
            "type": "warning",
            "text": "更新日志已超过三个月没有新版本。BrowserOS 可能已无人维护：使用前请确认它在你的系统和 AI 提供商下仍能正常工作。"
          },
          {
            "type": "note",
            "text": "本评测基于 browseros.com、其文档、隐私政策和 GitHub 仓库，核对日期为 2026 年 11 月 14 日。PromptQuorum 没有安装、运行或测试该浏览器，因此未评估速度、稳定性和回答质量。同一开发方的另一款产品 BrowserOS neo，仅在影响本评测时才会提及。"
          }
        ]
      },
      "overview": {
        "id": "what-is-browseros",
        "title": "BrowserOS 是什么？",
        "content": [
          "**BrowserOS 是一款原生面向 AI 的网页浏览器，基于 Chromium 分支，其助手可以回答有关页面的问题，并在智能体模式下对页面执行操作。** 文档列出三种模式：聊天模式、智能体模式，以及标注为即将推出的 Graph 模式。文档还列出了与 Gmail、Calendar、Docs、Sheets 和 Notion 等服务的内置连接。",
          "同一网站和 GitHub 仓库还托管着 BrowserOS neo（0.52.0 版，2026 年 10 月），这是一款专为 Claude Code、Cursor 等 AI 编程智能体打造的独立副浏览器，开发方将其定位为与 Chrome 并用，而非替代品。本评测针对原版 BrowserOS，尽管官网首页现在以 neo 为主。仓库 README 的版权行写的是 Felafax, Inc.。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "content": [
          "**BrowserOS 可从开发方的下载页免费下载，支持 macOS、Windows 和 Linux；macOS 上也可以用 Homebrew 安装。**"
        ],
        "columns": [
          "选项",
          "获取方式"
        ],
        "rows": [
          {
            "选项": "macOS",
            "获取方式": "[BrowserOS.dmg](https://files.browseros.com/download/BrowserOS.dmg)，或 `brew install --cask browseros`；macOS 13 或更高版本"
          },
          {
            "选项": "Windows",
            "获取方式": "[BrowserOS 安装程序](https://files.browseros.com/download/BrowserOS_installer.exe)"
          },
          {
            "选项": "Linux",
            "获取方式": "[BrowserOS AppImage](https://files.browseros.com/download/BrowserOS.AppImage)"
          },
          {
            "选项": "手机",
            "获取方式": "未列出移动版本"
          },
          {
            "选项": "价格",
            "获取方式": "可免费下载；未找到定价页面"
          },
          {
            "选项": "官网",
            "获取方式": "[browseros.com](https://browseros.com)"
          },
          {
            "选项": "文档",
            "获取方式": "[docs.browseros.com](https://docs.browseros.com)"
          },
          {
            "选项": "隐私政策",
            "获取方式": "[隐私政策](https://browseros.com/privacy/)"
          },
          {
            "选项": "源代码",
            "获取方式": "[GitHub，AGPL-3.0](https://github.com/browseros-ai/BrowserOS)"
          }
        ],
        "note": "评测版本：0.46.0（2026 年 6 月 17 日，来自更新日志）。下载文件不带版本号，GitHub 发布列表也只有 BrowserOS neo 的构建，请自行确认安装后的版本。PromptQuorum 没有下载或运行任何安装程序。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "系统要求",
        "content": [
          "**资料只给出了 macOS 的最低要求（13 Ventura 或更高版本）；文档按可用内存对本地模型分档。**"
        ],
        "columns": [
          "项目",
          "资料说明"
        ],
        "rows": [
          {
            "项目": "macOS",
            "资料说明": "macOS 13（Ventura）或更高版本"
          },
          {
            "项目": "Windows 和 Linux",
            "资料说明": "未给出最低版本，也没有内存或磁盘数据"
          },
          {
            "项目": "本地 AI",
            "资料说明": "需单独安装 Ollama 或 LM Studio；5 GB 以下的模型适合 8 GB 内存，10–15 GB 的模型需要 16 GB 以上内存，60 GB 以上的模型需要 64 GB 以上内存"
          },
          {
            "项目": "上下文窗口",
            "资料说明": "至少 15,000–20,000 个 token；上下文越大，占用的 VRAM 越多"
          }
        ],
        "note": "资料没有给出 GPU 型号或 VRAM 容量；硬件需求取决于你加载的模型。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "上手步骤",
        "content": [
          "**以下步骤依据开发方的文档；PromptQuorum 没有实际运行过。**"
        ],
        "numberedItems": [
          {
            "title": "安装浏览器",
            "whyItMatters": "下载适合你系统的安装程序，或在 macOS 上安装 Homebrew cask。"
          },
          {
            "title": "安装 Ollama 或 LM Studio 和模型",
            "whyItMatters": "使用 Ollama 时，先拉取模型，再以 20,000 个 token 的上下文启动服务，例如 `OLLAMA_CONTEXT_LENGTH=20000 ollama serve`；使用 LM Studio 时，在 Developer 标签页加载模型，它会在 `http://localhost:1234/v1/` 提供服务。"
          },
          {
            "title": "在设置中连接",
            "whyItMatters": "打开 `chrome://browseros/settings`，在 Ollama 卡片上点击 Use（使用 LM Studio 时，在 OpenAI Compatible 卡片上填入上述基础 URL），输入模型 ID，并将上下文窗口设为至少 20,000 个 token。"
          },
          {
            "title": "为智能体模式准备云端提供商",
            "whyItMatters": "对于能替你在页面上执行操作的智能体模式，文档推荐 Claude Opus 4.5 或其他云端模型；如果想用它，请准备好提供商密钥。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "资料确认的功能",
        "content": [
          "**以下各项均来自开发方的文档或仓库，没有一项经过独立测试。**"
        ],
        "items": [
          "**广告拦截。** 文档称 BrowserOS 通过 uBlock Origin 支持完整的广告拦截，并重新启用了对 Manifest V2 扩展的支持；其与 Chrome 的对比来自开发方自己做的测试。",
          "**内置 MCP 服务器。** MCP 服务器监听 127.0.0.1，提供 53 个浏览器自动化工具；文档展示了如何用 `claude mcp add --transport http browseros <mcp_url> --scope user` 将其添加到 Claude Code，URL 从 `chrome://browseros/mcp` 复制。",
          "**自带模型。** 列出的提供商包括 Moonshot AI、Gemini、Anthropic、OpenAI、OpenRouter、Azure OpenAI、AWS Bedrock 和任何兼容 OpenAI 的端点，另外还支持 ChatGPT Pro 和 GitHub Copilot 订阅。",
          "**连接的应用。** 文档列出了 40 多个外部服务，例如 Gmail、Calendar、Docs、Sheets 和 Notion。",
          "**Chromium 基础。** 0.46.0 版的更新日志条目提到了 Chromium 148、重新设计的新标签页，以及内置到助手中的 Claude Code 和 Codex。"
        ],
        "note": "MCP 文档警告说，任何能访问该 MCP URL 的人都能完全控制你的浏览器，包括你已登录的所有账号，并表示该服务器只监听 127.0.0.1。"
      },
      "privacy": {
        "id": "privacy",
        "title": "数据流向与隐私",
        "content": [
          "**隐私政策称，浏览历史、Cookie 和访问过的 URL 存储在你的电脑本地，云同步默认关闭。** 如果你开启同步，政策称数据会加密存储在运行于 AWS 上的 BrowserOS 服务器中。政策还称 BrowserOS 会收集你的姓名、电子邮件地址和你对产品的使用情况，并列出 Segment、Mixpanel、June 和 Airtable 为其使用的服务。",
          "**默认的 AI 提供商是 Moonshot AI（Kimi K2.5），政策称你输入的提示词、消息以及与 AI 功能共享的数据会发送到该提供商的服务器。** 使用你自己的密钥时，政策称 BrowserOS 不会拦截、存储或记录提示词和回答的内容；使用 Ollama 或 LM Studio 等本地托管模型时，政策称没有数据离开你的设备。文档另外说明，你的密钥保留在你的电脑上，请求直接发送给提供商。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "以上是开发方的说法，不是审计结果，PromptQuorum 也没有检查网络流量。该政策的日期为 2026 年 3 月 13 日，仅涵盖 BrowserOS 网页浏览器，没有提到 BrowserOS neo。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合谁用",
        "items": [
          "**喜欢折腾本地模型的人**：想要一款把 Ollama 或 LM Studio 内置到设置中的 Chromium 浏览器。",
          "**看重广告拦截的人**：想在现代 Chromium 内核上使用 uBlock Origin 和 Manifest V2 扩展。",
          "**Claude Code 用户**：想要一款智能体可通过本地 MCP 服务器控制的浏览器，并接受由此带来的访问权限。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们无法验证的内容",
        "items": [
          "**性能与稳定性。** 速度、内存占用、崩溃情况以及本地模型下的回答质量均未测试。",
          "**智能体模式。** 无论使用云端模型还是其他模型，它完成任务的可靠程度均未测试。",
          "**原版的维护情况。** 更新日志在 2026 年 6 月 17 日之后没有任何记录，而仓库近期的工作涉及的是 BrowserOS neo；资料没有说明原版是否会继续更新。",
          "**版本与签名。** 下载文件不带版本号，也没有找到原版构建的校验和或签名信息。",
          "**关于本地智能体的措辞。** 文档称 BrowserOS“在你的机器上本地运行 AI 智能体”，却又推荐智能体模式使用云端模型，因此你设备上实际运行什么，取决于你选择的提供商。",
          "**广告拦截结果。** 文档中与 Chrome 的对比来自开发方自己的测试，我们没有重复验证。"
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "竞品与替代方案",
        "columns": [
          "应用",
          "平台",
          "价格 / 许可证",
          "主要区别"
        ],
        "rows": [
          {
            "应用": "[LastBrowser](/zh/power-local-llm/lastbrowser-review)",
            "平台": "Windows，Linux 为预览版",
            "价格 / 许可证": "个人使用免费 / GPL-3.0",
            "主要区别": "基于 Electron 的浏览器，Sidekick 侧边栏可使用 Ollama；没有 macOS 版本"
          },
          {
            "应用": "[Page Assist](/zh/local-llms/page-assist-review)",
            "平台": "Chrome 和 Firefox 扩展",
            "价格 / 许可证": "免费 / MIT",
            "主要区别": "适用于你现有浏览器的侧边栏扩展；可搭配 Ollama 使用"
          }
        ],
        "note": "选择之前，请在各应用自己的页面上确认其当前价格、许可证和平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "BrowserOS neo 是同一款产品吗？",
            "a": "不是。BrowserOS neo 是一款面向 AI 编程智能体的独立浏览器，开发方将其定位为与 Chrome 并用的副浏览器；你需要自备 AI 提供商密钥，它也有自己的隐私政策。本评测只涵盖原版 BrowserOS。"
          },
          {
            "q": "文档列出了哪些本地模型？",
            "a": "除入门模型 Qwen3 4B 外，其表格还列出 Ministral 3 3B（2.99 GB）、两个 DeepSeek-R1 蒸馏模型（4.68 和 4.92 GB）、gpt-oss-20b（12.11 GB）、Magistral Small（13.28 GB）、Devstral Small 2（14.12 GB）和 gpt-oss-120b（63.39 GB）。"
          },
          {
            "q": "BrowserOS 的发布频率如何？",
            "a": "更新日志显示：0.41.0 发布于 3 月 4 日，0.42.0 于 3 月 9 日，0.43.0 于 3 月 12 日，0.44.0 于 3 月 20 日，0.46.0 于 2026 年 6 月 17 日；0.45.0 没有出现，0.46.0 之后也没有列出任何版本。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "BrowserOS 是一款基于 AGPL-3.0 的免费 Chromium 浏览器，支持 Mac、Windows 和 Linux，可在聊天模式下接入本地 Ollama 或 LM Studio 模型，通过 uBlock Origin 拦截广告，并提供本地 MCP 服务器。但与此同时，其更新日志自 2026 年 6 月 17 日以来没有新条目，默认 AI 提供商是云服务，文档认为本地模型还不够强，无法胜任智能体模式，隐私政策列出了多家分析服务，而速度、稳定性和回答质量均未经测试。它适合已经在用 Ollama 或 LM Studio、想试试 AI 浏览器的人；请把文档当作声明而非证据，并在依赖它之前确认更新状态。"
      },
      "sources": {
        "id": "sources",
        "title": "资料来源",
        "items": [
          "[BrowserOS 官网](https://browseros.com) — 产品概览和下载，核对于 2026 年 11 月 14 日。",
          "[BrowserOS 下载页](https://browseros.com/download) — 原版 BrowserOS 的安装程序，核对于 2026 年 11 月 14 日。",
          "[BrowserOS 文档：快速入门](https://docs.browseros.com/browseros/index.md) — 模式、Homebrew 安装、macOS 要求，核对于 2026 年 11 月 14 日。",
          "[BrowserOS 文档：本地模型](https://docs.browseros.com/browseros/features/local-models.md) — Ollama 与 LM Studio 设置、内存分档、模型列表，核对于 2026 年 11 月 14 日。",
          "[BrowserOS 文档：自带 LLM](https://docs.browseros.com/browseros/features/bring-your-own-llm.md) — 支持的提供商，核对于 2026 年 11 月 14 日。",
          "[BrowserOS 文档：在 Claude Code 中使用 MCP](https://docs.browseros.com/browseros/features/use-with-claude-code.md) — 内置 MCP 服务器，核对于 2026 年 11 月 14 日。",
          "[BrowserOS 文档：广告拦截](https://docs.browseros.com/browseros/features/ad-blocking.md) — uBlock Origin 与 Manifest V2，核对于 2026 年 11 月 14 日。",
          "[BrowserOS 更新日志](https://docs.browseros.com/browseros/changelog.md) — 截至 0.46.0 版的发布历史，核对于 2026 年 11 月 14 日。",
          "[BrowserOS 隐私政策](https://browseros.com/privacy/) — 数据流向、同步和分析服务，日期为 2026 年 3 月 13 日，核对于 2026 年 11 月 14 日。",
          "[GitHub 上的 BrowserOS](https://github.com/browseros-ai/BrowserOS) — 仓库、许可证和发布，核对于 2026 年 11 月 14 日。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "相关阅读",
        "items": [
          "[LastBrowser 评测](/zh/power-local-llm/lastbrowser-review) — 带有可使用 Ollama 的 Sidekick 侧边栏的 Windows AI 浏览器。",
          "[Page Assist 评测](/zh/local-llms/page-assist-review) — 可搭配 Ollama 使用的浏览器扩展侧边栏。",
          "[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。"
        ]
      }
    }
  },
  ko: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-14",
    "dateModified": "2026-11-14",
    "next_refresh_due": "2027-05-14",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/browseros-review-hero-ko.webp",
    "title": "BrowserOS 리뷰: 로컬 Ollama와 LM Studio를 지원하는 오픈소스 AI 브라우저",
    "seoTitle": "BrowserOS 리뷰: 로컬 모델 지원 AI 브라우저",
    "intro": "BrowserOS는 Chromium 기반의 무료 오픈소스 웹 브라우저로, macOS, Windows, Linux를 지원하며 AI 어시스턴트가 내장되어 있습니다. 채팅 모드에서는 사용자의 컴퓨터에서 Ollama나 LM Studio를 통해 로컬 모델을 사용하거나 직접 설정한 클라우드 제공업체를 사용할 수 있고, 사용자를 대신해 웹 페이지에서 작업을 수행하는 에이전트 모드에는 클라우드 모델이 권장됩니다. 이 리뷰는 다운로드하는 항목, 데이터가 가는 곳, 라이선스, 그리고 자료로는 확인되지 않은 내용을 다룹니다.",
    "metaDescription": "BrowserOS 리뷰: Mac, Windows, Linux용 무료 오픈소스 AI 브라우저로 로컬 Ollama와 LM Studio 모델을 사용할 수 있습니다. 개인정보와 위험 요소를 다룹니다.",
    "twitterDescription": "BrowserOS 리뷰: 로컬 Ollama와 LM Studio를 지원하는 무료 오픈소스 AI 브라우저. 개인정보 처리방침, AGPL-3.0 라이선스, 자료로 확인되지 않은 내용.",
    "audience": "BrowserOS가 로컬 Ollama나 LM Studio 모델로 작동하는지, 비용은 얼마인지, 자료가 확인하지 못한 주장이 무엇인지 알고 싶은 Mac, Windows, Linux 사용자.",
    "readTime": "6분 읽기",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "BrowserOS 리뷰",
    "targetKeywords": [
      "browseros 리뷰",
      "browseros ollama",
      "browseros lm studio",
      "로컬 ai 브라우저",
      "오픈소스 ai 브라우저",
      "browseros 개인정보",
      "ai 브라우저 로컬 llm"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Mac",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**경고: 원본 BrowserOS의 변경 내역에는 2026년 6월 17일의 버전 0.46.0 이후 릴리스가 없습니다. 유지보수가 중단되었을 수 있으니 의존하기 전에 확인하십시오.** 무료 오픈소스(AGPL-3.0)의 Chromium 기반 브라우저로, macOS, Windows, Linux를 지원하며 Ollama나 LM Studio를 통해 로컬 모델을 사용할 수 있는 AI 어시스턴트가 내장되어 있습니다.",
    "quickAnswerTop": {
      "ko": {
        "question": "BrowserOS를 로컬 모델로 실행할 수 있습니까?",
        "answer": "채팅 모드에서는 가능합니다. 문서에 Ollama 또는 LM Studio를 연결하는 방법이 설명되어 있습니다. 다만 문서에 따르면 로컬 모델은 에이전트 모드를 처리하기에는 아직 성능이 부족합니다.",
        "bullets": [
          "Ollama 또는 LM Studio는 별도로 설치해야 하며, 브라우저에 모델은 포함되어 있지 않습니다.",
          "문서는 컨텍스트 윈도를 최소 15,000~20,000토큰으로 설정하도록 요구하며, Ollama 기본값인 4,096은 너무 낮습니다.",
          "문서의 입문용 모델은 Qwen3 4B이며 다운로드 크기는 2.28 GB입니다."
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
        "label": "BrowserOS란?",
        "anchor": "what-is-browseros"
      },
      {
        "label": "구하는 방법",
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
        "label": "자료로 확인된 기능",
        "anchor": "key-features"
      },
      {
        "label": "데이터 흐름과 개인정보",
        "anchor": "privacy"
      },
      {
        "label": "추천 대상",
        "anchor": "who-should-use"
      },
      {
        "label": "확인하지 못한 내용",
        "anchor": "who-should-not-use"
      },
      {
        "label": "경쟁 제품과 대안",
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
            "text": "BrowserOS는 Mac, Windows, Linux용 무료 오픈소스 Chromium 브라우저로, 로컬 Ollama나 LM Studio 모델을 사용할 수 있는 AI 어시스턴트가 내장되어 있습니다."
          },
          {
            "type": "plain-terms",
            "text": "일반 데스크톱 브라우저로 웹을 탐색하면서 읽고 있는 페이지에 대해 AI 어시스턴트에게 물어볼 수 있습니다. 사용자의 컴퓨터에서 실행되는 모델이나 직접 설정한 클라우드 AI 서비스를 쓸 수 있습니다."
          }
        ],
        "items": [
          "유지보수: 변경 내역의 최신 항목은 2026년 6월 17일의 버전 0.46.0으로, 이 리뷰보다 약 다섯 달 전입니다. 공유 GitHub 저장소는 2026년 11월 14일에 갱신되었지만 릴리스에는 BrowserOS neo 빌드만 나열되어 있습니다.",
          "비용: 무료이며 AGPL-3.0 오픈소스입니다. 가격 페이지는 찾지 못했습니다.",
          "플랫폼: macOS 13 이상, Windows, Linux. 다운로드는 개발사 사이트에서 받으며 macOS에는 Homebrew cask도 있습니다.",
          "AI: 직접 입력한 제공업체 키, Ollama나 LM Studio를 통한 로컬 모델, 또는 ChatGPT Pro와 GitHub Copilot 구독을 사용할 수 있습니다.",
          "개인정보: 처리방침에 따르면 로컬 모델을 쓰면 어떤 데이터도 기기를 벗어나지 않으며, 기본 AI 제공업체는 클라우드 서비스입니다."
        ],
        "callouts": [
          {
            "type": "warning",
            "text": "변경 내역에 3개월 넘게 릴리스가 없습니다. BrowserOS는 유지보수되지 않을 수 있습니다. 의존하기 전에 사용 중인 시스템과 AI 제공업체에서 여전히 작동하는지 확인하십시오."
          },
          {
            "type": "note",
            "text": "이 리뷰는 2026년 11월 14일에 확인한 browseros.com, 문서, 개인정보 처리방침, GitHub 저장소를 바탕으로 합니다. PromptQuorum은 브라우저를 설치하거나 실행하거나 측정하지 않았으므로 속도, 안정성, 답변 품질은 평가하지 않습니다. 같은 개발사의 별도 제품인 BrowserOS neo는 이 리뷰와 관련된 범위에서만 다룹니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-browseros",
        "title": "BrowserOS란?",
        "content": [
          "**BrowserOS는 AI를 기본으로 설계한 Chromium 포크 웹 브라우저로, 페이지에 관한 질문에 답하고 에이전트 모드에서는 페이지에서 직접 작업까지 수행하는 어시스턴트를 갖추고 있습니다.** 문서에는 채팅 모드, 에이전트 모드, 그리고 곧 제공 예정으로 표시된 그래프 모드의 세 가지 모드가 나옵니다. Gmail, Calendar, Docs, Sheets, Notion 같은 서비스와의 내장 연결도 나열되어 있습니다.",
          "같은 웹사이트와 GitHub 저장소는 BrowserOS neo(버전 0.52.0, 2026년 10월)도 함께 제공합니다. Claude Code나 Cursor 같은 AI 코딩 에이전트를 위한 별도의 보조 브라우저이며, 개발사는 Chrome을 대체하는 것이 아니라 Chrome과 함께 쓰는 제품으로 설명합니다. 홈페이지는 이제 neo를 먼저 내세우지만, 이 리뷰는 원본 BrowserOS를 다룹니다. 저장소 README의 저작권 표기에는 Felafax, Inc.가 나옵니다."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "구하는 방법",
        "content": [
          "**BrowserOS는 개발사 다운로드 페이지에서 macOS, Windows, Linux용으로 무료 다운로드할 수 있으며, macOS에서는 Homebrew로도 설치할 수 있습니다.**"
        ],
        "columns": [
          "항목",
          "구하는 방법"
        ],
        "rows": [
          {
            "항목": "macOS",
            "구하는 방법": "[BrowserOS.dmg](https://files.browseros.com/download/BrowserOS.dmg) 또는 `brew install --cask browseros`; macOS 13 이상"
          },
          {
            "항목": "Windows",
            "구하는 방법": "[BrowserOS 설치 프로그램](https://files.browseros.com/download/BrowserOS_installer.exe)"
          },
          {
            "항목": "Linux",
            "구하는 방법": "[BrowserOS AppImage](https://files.browseros.com/download/BrowserOS.AppImage)"
          },
          {
            "항목": "휴대폰",
            "구하는 방법": "모바일 버전은 나열되어 있지 않습니다"
          },
          {
            "항목": "가격",
            "구하는 방법": "무료 다운로드. 가격 페이지는 찾지 못했습니다"
          },
          {
            "항목": "웹사이트",
            "구하는 방법": "[browseros.com](https://browseros.com)"
          },
          {
            "항목": "문서",
            "구하는 방법": "[docs.browseros.com](https://docs.browseros.com)"
          },
          {
            "항목": "개인정보 처리방침",
            "구하는 방법": "[개인정보 처리방침](https://browseros.com/privacy/)"
          },
          {
            "항목": "소스 코드",
            "구하는 방법": "[GitHub, AGPL-3.0](https://github.com/browseros-ai/BrowserOS)"
          }
        ],
        "note": "확인한 버전: 0.46.0(2026년 6월 17일, 변경 내역 기준). 다운로드 파일에는 버전 번호가 없고 GitHub 릴리스에는 BrowserOS neo 빌드만 나열되어 있으므로, 설치된 버전은 직접 확인하십시오. PromptQuorum은 설치 프로그램을 다운로드하거나 실행하지 않았습니다."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "요구 사항",
        "content": [
          "**자료가 최소 사양을 제시하는 것은 macOS(13 Ventura 이상)뿐이며, 문서는 사용 가능한 RAM에 따라 로컬 모델을 구분합니다.**"
        ],
        "columns": [
          "항목",
          "자료의 설명"
        ],
        "rows": [
          {
            "항목": "macOS",
            "자료의 설명": "macOS 13(Ventura) 이상"
          },
          {
            "항목": "Windows와 Linux",
            "자료의 설명": "최소 버전, RAM, 디스크 용량에 대한 설명이 없습니다"
          },
          {
            "항목": "로컬 AI",
            "자료의 설명": "Ollama 또는 LM Studio를 별도로 설치. 5 GB 미만 모델은 8 GB RAM에 적합하고, 10~15 GB 모델은 16 GB 이상 RAM, 60 GB 이상 모델은 64 GB 이상 RAM이 필요"
          },
          {
            "항목": "컨텍스트 윈도",
            "자료의 설명": "최소 15,000~20,000토큰. 컨텍스트가 클수록 VRAM을 더 많이 사용합니다"
          }
        ],
        "note": "GPU 모델이나 VRAM 용량은 명시되어 있지 않으며, 필요한 하드웨어는 불러오는 모델에 따라 달라집니다."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "시작하는 방법",
        "content": [
          "**단계는 개발사 문서를 따른 것이며 PromptQuorum이 직접 실행하지는 않았습니다.**"
        ],
        "numberedItems": [
          {
            "title": "브라우저 설치",
            "whyItMatters": "사용 중인 시스템용 설치 프로그램을 다운로드하거나 macOS에서는 Homebrew cask를 설치합니다."
          },
          {
            "title": "Ollama 또는 LM Studio와 모델 설치",
            "whyItMatters": "Ollama에서는 모델을 받은 뒤 20,000토큰 컨텍스트로 서버를 시작합니다(예: `OLLAMA_CONTEXT_LENGTH=20000 ollama serve`). LM Studio에서는 Developer 탭에서 모델을 불러오면 `http://localhost:1234/v1/`로 제공됩니다."
          },
          {
            "title": "설정에서 연결",
            "whyItMatters": "`chrome://browseros/settings`를 열고 Ollama 카드에서 Use를 선택합니다(LM Studio는 OpenAI Compatible 카드에서 위의 기본 URL 사용). 모델 ID를 입력하고 컨텍스트 윈도를 최소 20,000토큰으로 설정합니다."
          },
          {
            "title": "에이전트 모드용 클라우드 제공업체 준비",
            "whyItMatters": "사용자를 대신해 페이지에서 작업하는 에이전트 모드에는 문서가 Claude Opus 4.5 또는 다른 클라우드 모델을 권장합니다. 사용하려면 제공업체 키를 준비해 두십시오."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "자료로 확인된 기능",
        "content": [
          "**아래 항목은 모두 개발사의 문서나 저장소에서 가져온 것이며, 독립적으로 테스트한 것은 없습니다.**"
        ],
        "items": [
          "**광고 차단.** 문서에 따르면 BrowserOS는 uBlock Origin을 통한 완전한 광고 차단을 지원하고 Manifest V2 확장 프로그램 지원을 다시 활성화했습니다. Chrome과의 비교는 개발사가 직접 진행한 테스트에 근거합니다.",
          "**내장 MCP 서버.** MCP 서버는 127.0.0.1에서 수신 대기하며 53개의 브라우저 자동화 도구를 제공합니다. 문서는 `chrome://browseros/mcp`의 URL을 복사해 `claude mcp add --transport http browseros <mcp_url> --scope user`로 Claude Code에 추가하는 방법을 보여 줍니다.",
          "**자체 모델 사용.** 나열된 제공업체에는 Moonshot AI, Gemini, Anthropic, OpenAI, OpenRouter, Azure OpenAI, AWS Bedrock, OpenAI 호환 엔드포인트가 있으며 ChatGPT Pro와 GitHub Copilot 구독도 사용할 수 있습니다.",
          "**연결된 앱.** 문서에는 Gmail, Calendar, Docs, Sheets, Notion 등 40개가 넘는 외부 서비스가 나열되어 있습니다.",
          "**Chromium 기반.** 버전 0.46.0의 변경 내역 항목에는 Chromium 148, 새로 디자인된 새 탭, 어시스턴트에 통합된 Claude Code와 Codex가 언급되어 있습니다."
        ],
        "note": "MCP 문서는 MCP URL에 접근할 수 있는 사람은 로그인한 모든 계정을 포함해 브라우저를 완전히 제어할 수 있다고 경고하며, 서버는 127.0.0.1에서만 수신 대기한다고 밝힙니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "데이터 흐름과 개인정보",
        "content": [
          "**개인정보 처리방침에 따르면 방문 기록, 쿠키, 방문한 URL은 사용자의 컴퓨터에 로컬로 저장되며 클라우드 동기화는 기본적으로 비활성화되어 있습니다.** 동기화를 켜면 데이터는 AWS에서 운영되는 BrowserOS 서버에 암호화되어 저장된다고 처리방침은 설명합니다. 또한 BrowserOS가 이름, 이메일 주소, 제품 이용 활동을 수집하며 Segment, Mixpanel, June, Airtable을 사용한다고 밝힙니다.",
          "**기본 AI 제공업체는 Moonshot AI(Kimi K2.5)이며, 처리방침에 따르면 AI 기능에 입력한 프롬프트, 메시지, 공유한 데이터는 해당 제공업체의 서버로 전송됩니다.** 자체 키를 사용하면 BrowserOS가 프롬프트나 답변의 내용을 가로채거나 저장하거나 기록하지 않는다고 처리방침은 밝히며, Ollama나 LM Studio 같은 로컬 호스팅 모델을 쓰면 어떤 데이터도 기기를 벗어나지 않는다고 설명합니다. 문서는 별도로 키가 사용자의 컴퓨터에 남고 요청은 제공업체로 직접 전송된다고 설명합니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이는 개발사의 주장이며 감사 결과가 아니고, PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다. 처리방침의 날짜는 2026년 3월 13일이며 BrowserOS 웹 브라우저만 다루고 BrowserOS neo는 언급하지 않습니다."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "추천 대상",
        "items": [
          "**로컬 모델을 직접 만져 보고 싶은 사용자**: Ollama나 LM Studio가 설정에 내장된 Chromium 브라우저를 원하는 분.",
          "**광고 차단을 중시하는 사용자**: 최신 Chromium 기반에서 uBlock Origin과 Manifest V2 확장 프로그램을 쓰고 싶은 분.",
          "**Claude Code 사용자**: 로컬 MCP 서버를 통해 에이전트가 제어할 수 있는 브라우저를 원하고, 그에 따른 접근 권한을 받아들일 수 있는 분."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 내용",
        "items": [
          "**성능과 안정성.** 속도, 메모리 사용량, 충돌, 로컬 모델에서의 답변 품질은 테스트하지 않았습니다.",
          "**에이전트 모드.** 클라우드 모델이든 다른 모델이든, 작업을 얼마나 안정적으로 끝내는지는 테스트하지 않았습니다.",
          "**원본의 유지보수.** 변경 내역에는 2026년 6월 17일 이후 기록이 없고 저장소의 최근 작업은 BrowserOS neo와 관련되어 있습니다. 원본이 앞으로도 업데이트를 받을지는 자료에 나와 있지 않습니다.",
          "**버전과 서명.** 다운로드 파일에는 버전 번호가 없으며, 원본 빌드의 체크섬이나 서명 정보도 찾지 못했습니다.",
          "**로컬 에이전트 표현.** 문서는 BrowserOS가 \"AI 에이전트를 사용자의 컴퓨터에서 로컬로 실행한다\"고 설명하면서도 에이전트 모드에는 클라우드 모델을 권장합니다. 따라서 기기에서 무엇이 실행되는지는 선택하는 제공업체에 따라 달라집니다.",
          "**광고 차단 결과.** 문서의 Chrome 비교는 개발사 자체 테스트에 근거하며 재현하지 않았습니다."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "경쟁 제품과 대안",
        "columns": [
          "앱",
          "플랫폼",
          "가격 / 라이선스",
          "핵심 차이"
        ],
        "rows": [
          {
            "앱": "[LastBrowser](/ko/power-local-llm/lastbrowser-review)",
            "플랫폼": "Windows, Linux는 미리보기",
            "가격 / 라이선스": "개인 사용 무료 / GPL-3.0",
            "핵심 차이": "Electron 기반 브라우저로 Ollama를 쓸 수 있는 Sidekick 사이드바 제공. macOS 버전 없음"
          },
          {
            "앱": "[Page Assist](/ko/local-llms/page-assist-review)",
            "플랫폼": "Chrome 및 Firefox 확장 프로그램",
            "가격 / 라이선스": "무료 / MIT",
            "핵심 차이": "이미 쓰는 브라우저에 추가하는 사이드바 확장 프로그램. Ollama와 함께 작동"
          }
        ],
        "note": "선택하기 전에 각 앱의 최신 가격, 라이선스, 플랫폼을 해당 앱의 페이지에서 확인하십시오."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "BrowserOS neo는 같은 제품입니까?",
            "a": "아닙니다. BrowserOS neo는 AI 코딩 에이전트를 위한 별도의 브라우저로, 개발사는 Chrome과 함께 쓰는 보조 브라우저로 설명합니다. AI 제공업체 키는 직접 준비해야 하며 자체 개인정보 처리방침이 있습니다. 이 리뷰는 원본 BrowserOS만 다룹니다."
          },
          {
            "q": "문서에는 어떤 로컬 모델이 나와 있습니까?",
            "a": "입문용 Qwen3 4B 외에 표에는 Ministral 3 3B(2.99 GB), DeepSeek-R1 증류 모델 두 가지(4.68 GB와 4.92 GB), gpt-oss-20b(12.11 GB), Magistral Small(13.28 GB), Devstral Small 2(14.12 GB), gpt-oss-120b(63.39 GB)가 나와 있습니다."
          },
          {
            "q": "BrowserOS는 얼마나 자주 릴리스됩니까?",
            "a": "변경 내역에는 2026년 3월 4일에 0.41.0, 3월 9일에 0.42.0, 3월 12일에 0.43.0, 3월 20일에 0.44.0, 6월 17일에 0.46.0이 나옵니다. 0.45.0은 보이지 않고 0.46.0 이후로는 아무것도 나열되어 있지 않습니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "총평",
        "content": "BrowserOS는 AGPL-3.0의 무료 Chromium 브라우저로, Mac, Windows, Linux에서 채팅 모드에 로컬 Ollama나 LM Studio 모델을 연결할 수 있고, uBlock Origin으로 광고를 차단하며, 로컬 MCP 서버를 제공합니다. 반면 변경 내역에는 2026년 6월 17일 이후 항목이 없고, 기본 AI 제공업체는 클라우드 서비스이며, 문서는 로컬 모델이 에이전트 모드에는 아직 성능이 부족하다고 하고, 개인정보 처리방침에는 여러 분석 서비스가 나열되어 있으며, 속도, 안정성, 답변 품질은 테스트되지 않았습니다. 이미 Ollama나 LM Studio를 쓰고 있고 AI 브라우저를 시험해 보고 싶은 분에게 적합합니다. 문서는 증거가 아니라 주장으로 읽고, 의존하기 전에 업데이트 상태를 확인하십시오."
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[BrowserOS 웹사이트](https://browseros.com) — 제품 개요와 다운로드, 2026년 11월 14일 확인.",
          "[BrowserOS 다운로드 페이지](https://browseros.com/download) — 원본 BrowserOS 설치 프로그램, 2026년 11월 14일 확인.",
          "[BrowserOS 문서, 빠른 시작](https://docs.browseros.com/browseros/index.md) — 모드, Homebrew 설치, macOS 요구 사항, 2026년 11월 14일 확인.",
          "[BrowserOS 문서, 로컬 모델](https://docs.browseros.com/browseros/features/local-models.md) — Ollama와 LM Studio 설정, RAM 구간, 모델 목록, 2026년 11월 14일 확인.",
          "[BrowserOS 문서, 자체 LLM 사용](https://docs.browseros.com/browseros/features/bring-your-own-llm.md) — 지원 제공업체, 2026년 11월 14일 확인.",
          "[BrowserOS 문서, Claude Code와 MCP](https://docs.browseros.com/browseros/features/use-with-claude-code.md) — 내장 MCP 서버, 2026년 11월 14일 확인.",
          "[BrowserOS 문서, 광고 차단](https://docs.browseros.com/browseros/features/ad-blocking.md) — uBlock Origin과 Manifest V2, 2026년 11월 14일 확인.",
          "[BrowserOS 변경 내역](https://docs.browseros.com/browseros/changelog.md) — 버전 0.46.0까지의 릴리스 기록, 2026년 11월 14일 확인.",
          "[BrowserOS 개인정보 처리방침](https://browseros.com/privacy/) — 데이터 흐름, 동기화, 분석 서비스, 2026년 3월 13일자, 2026년 11월 14일 확인.",
          "[GitHub의 BrowserOS](https://github.com/browseros-ai/BrowserOS) — 저장소, 라이선스, 릴리스, 2026년 11월 14일 확인."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[LastBrowser 리뷰](/ko/power-local-llm/lastbrowser-review) — Ollama를 쓸 수 있는 Sidekick 사이드바가 있는 Windows용 AI 브라우저.",
          "[Page Assist 리뷰](/ko/local-llms/page-assist-review) — Ollama와 함께 작동하는 브라우저 확장 프로그램 사이드바.",
          "[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그."
        ]
      }
    }
  },
}
