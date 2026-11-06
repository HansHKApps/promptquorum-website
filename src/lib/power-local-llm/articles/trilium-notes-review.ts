// Trilium Notes Review: Free Hierarchical Notes With Optional AI
// Slug: trilium-notes-review
// Companion to: logseq-review, siyuan-review, tolaria-review, hillnote-review
// Sources: triliumnotes.org, docs.triliumnotes.org (LLM, server and Docker pages), github.com/TriliumNext/Trilium (Releases v0.106.1 of 2026-10-23),
// all checked 2026-11-03 — no hands-on testing.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-03",
    "dateModified": "2026-11-03",
    "next_refresh_due": "2027-05-03",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/trilium-notes-review-hero-en.webp",
    "title": "Trilium Notes Review: Free Hierarchical Notes With Optional AI",
    "seoTitle": "Trilium Notes Review: Free Self-Hosted Notes and AI",
    "intro": "Trilium Notes is a free, open-source note-taking app and personal knowledge base that runs as a desktop app on Mac, Windows and Linux or as a self-hosted server you open in a browser. Notes sit in a hierarchical tree, a note can live in several places, and an optional AI assistant can chat with your notes through a local model such as Ollama or LM Studio, or through a cloud provider you choose. This review covers what you download, what the AI can do, where your data goes and what the sources leave unconfirmed.",
    "metaDescription": "Trilium Notes review: free AGPL-3.0 hierarchical notes for Mac, Windows, Linux and your own server, with optional AI via Ollama, LM Studio or cloud.",
    "twitterDescription": "Trilium Notes review: free open-source notes on your desktop or your own server, with optional AI through Ollama, LM Studio or cloud providers. What the sources confirm and what they do not.",
    "audience": "Note-takers and self-hosters who want to know what Trilium Notes costs, how it installs, what its optional AI can touch and which claims the sources leave open.",
    "readTime": "6 min read",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Trilium Notes review",
    "targetKeywords": [
      "trilium notes review",
      "trilium notes app",
      "trilium notes ollama",
      "self-hosted notes app",
      "open source knowledge base app",
      "trilium ai chat",
      "trilium notes docker"
    ],
    "current_models_mentioned": [
      "Claude",
      "GPT",
      "Gemini",
      "DeepSeek"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**Trilium Notes (version 0.106.1, released on 23 October 2026) is a free, AGPL-3.0 note-taking app and personal knowledge base for Mac, Windows, Linux and a self-hosted server, with an optional AI assistant that is off until you switch it on.** The decisive caveat is that the AI can read and edit your notes with no permission layer, so the provider you pick decides where your notes go.",
    "quickAnswerTop": {
      "en": {
        "question": "Can Trilium Notes use a local model such as Ollama?",
        "answer": "Yes, per the docs: once the AI integration is enabled, Ollama and LM Studio are supported providers, and a local provider keeps every message on the machine running the model. The integration does nothing until you enable it and configure a provider.",
        "bullets": [
          "Any OpenAI-compatible endpoint can be added as a custom provider, such as OpenRouter, Groq or Mistral.",
          "A built-in MCP server, off by default, lets an outside agent such as Claude Code work with your database through an ETAPI token.",
          "Web search and note access are on by default per chat once the AI is enabled, and can be switched off in the model selector; web search sends the model's search terms to the provider's own search infrastructure."
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
        "label": "What Is Trilium Notes?",
        "anchor": "what-is-trilium-notes"
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
            "text": "Trilium Notes is a free, open-source hierarchical notes app and personal knowledge base for desktop or a self-hosted server, with optional AI chat."
          },
          {
            "type": "plain-terms",
            "text": "You keep your notes in a tree on your own computer or your own server, and you can let an AI assistant search and edit them using either a model on your machine or a cloud model you choose."
          }
        ],
        "items": [
          "Maintenance: version 0.106.1 was released on 23 October 2026 and the repository was updated on 3 November 2026, so no stale-project warning applies.",
          "Cost: free, with no paid tiers, accounts or feature paywalls according to the maker.",
          "AI: optional and off by default, with local providers (Ollama, LM Studio), cloud providers and a built-in MCP server.",
          "Mobile: no official phone app; the server offers a browser and installable web app, and an unofficial Android app exists.",
          "Safety: the AI note tools have no permission management, so an assistant could delete or reshuffle notes."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "This review is based on triliumnotes.org, the documentation, the GitHub releases and repository data, checked on 3 November 2026. PromptQuorum has not installed, run or benchmarked the app, so speed, stability and answer quality are not assessed."
          }
        ]
      },
      "overview": {
        "id": "what-is-trilium-notes",
        "title": "What Is Trilium Notes?",
        "content": [
          "**Trilium Notes is a note-taking app built around a tree of notes, where one note can be placed in several branches of the tree.** The maintainers are Elian Doran and the community, building on the earlier work of zadam, whom the site credits for 2017 to 2024; the current repository is TriliumNext/Trilium.",
          "The site lists note types for text, Markdown, code, spreadsheets, canvas, Mermaid diagrams, mind maps and files, plus calendar, table, Kanban, geomap, presentation and dashboard views, labels and relations, note revisions, a web clipper and a REST API. Scripting uses frontend and backend JavaScript."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Get It",
        "content": [
          "**Trilium Notes is free to download for Mac, Windows and Linux, and the same project also runs as a server you host yourself; the installers are hosted on GitHub Releases.**"
        ],
        "columns": [
          "Option",
          "How to get it"
        ],
        "rows": [
          {
            "Option": "Mac",
            "How to get it": "[Trilium Notes on GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), Apple-silicon or Intel .dmg or .zip"
          },
          {
            "Option": "Windows",
            "How to get it": "[Trilium Notes on GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), x64 or ARM64 .exe or .zip"
          },
          {
            "Option": "Linux",
            "How to get it": "[Trilium Notes on GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), x64 or ARM64 AppImage, .deb, .rpm or Flatpak"
          },
          {
            "Option": "Server (Docker)",
            "How to get it": "Image [triliumnext/trilium](https://hub.docker.com/r/triliumnext/trilium); `docker compose up -d`, port 8080"
          },
          {
            "Option": "Server (managed)",
            "How to get it": "Third-party [PikaPods](https://www.pikapods.com/pods?run=trilium-next) hosting; no official cloud version yet"
          },
          {
            "Option": "Phone",
            "How to get it": "No official app; use the server in a browser or as a PWA. Unofficial: TriliumDroid (Android)"
          },
          {
            "Option": "Price",
            "How to get it": "Free; no paid tiers, accounts or feature paywalls"
          },
          {
            "Option": "Website",
            "How to get it": "[triliumnotes.org](https://triliumnotes.org)"
          },
          {
            "Option": "Privacy policy",
            "How to get it": "[Privacy policy](https://docs.triliumnotes.org/user-guide/misc/privacy-policy); [AI privacy page](https://docs.triliumnotes.org/user-guide/llm/Privacy)"
          },
          {
            "Option": "Source code",
            "How to get it": "[GitHub, AGPL-3.0](https://github.com/TriliumNext/Trilium)"
          }
        ],
        "note": "Version reviewed: 0.106.1 (23 October 2026). That release is a security update for the server and Docker images, so anyone running the server should be on it. The Docker documentation warns against the `latest` tag because it can move you to a new minor version and disturb sync; pin a version tag instead."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requirements",
        "content": [
          "**The sources give no minimum operating-system, RAM or disk figures for the desktop app.**"
        ],
        "columns": [
          "Item",
          "What the sources say"
        ],
        "rows": [
          {
            "Item": "Desktop",
            "What the sources say": "Mac (Apple silicon and Intel), Windows (x64 and ARM64), Linux (x64 and ARM64) builds on GitHub Releases"
          },
          {
            "Item": "Server",
            "What the sources say": "Docker images for AMD64, ARMv7 and ARM64; a packaged Linux server archive; Kubernetes, Cloudron, NixOS and other setups are listed in the docs"
          },
          {
            "Item": "Local AI",
            "What the sources say": "A separate Ollama or LM Studio installation; no model size or hardware figures are given"
          },
          {
            "Item": "Account",
            "What the sources say": "None; the maker states there are no accounts"
          }
        ],
        "note": "The standard Docker container needs root privileges per the docs; a rootless image exists. Putting the server on the open internet needs the HTTPS and authentication settings the docs describe."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "How to Get Started",
        "content": [
          "**The steps follow the maker's documentation; PromptQuorum has not run them.**"
        ],
        "numberedItems": [
          {
            "title": "Choose desktop or server",
            "whyItMatters": "Download the installer for your system from GitHub Releases, or run the Docker image if you want browser access and sync across devices."
          },
          {
            "title": "Pin a version",
            "whyItMatters": "For Docker, use a specific version tag instead of latest so an automatic upgrade cannot break sync."
          },
          {
            "title": "Sync if you run a server",
            "whyItMatters": "Connect the desktop app to your own server to keep several devices in step; the docs cover sync in their Synchronization pages."
          },
          {
            "title": "Enable AI only if you want it",
            "whyItMatters": "The AI integration does nothing until you enable it and configure a provider; pick Ollama or LM Studio to keep notes on your machine."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Confirmed by the Sources",
        "content": [
          "**Every item below comes from the maker's site or documentation; none has been independently tested.**"
        ],
        "items": [
          "**Tree with cloning.** Notes are organised hierarchically and one note can appear in several places, with labels, relations and workspaces (hoisting).",
          "**Search.** Fuzzy title search and full-text search, including OCR text from images and PDFs.",
          "**Protected notes.** Selected notes can be encrypted; everything else is stored unencrypted by default.",
          "**Publishing and access.** A note subtree can be published as a read-only website (server only), with TOTP multi-factor sign-in and OpenID Connect.",
          "**AI chat and tools.** Chat with your notes, an assistant that can search and edit through built-in note tools, and an MCP server for outside agents."
        ],
        "note": "The AI privacy page says a local model may handle tool calls less reliably than a cloud model; the sources give no performance figures."
      },
      "privacy": {
        "id": "privacy",
        "title": "Data Flow and Privacy",
        "content": [
          "**Your notes are stored in a local SQLite database, unencrypted unless you mark a note as protected; protected notes use AES-128-CBC.** With the AI off, nothing is sent anywhere by the AI feature. The docs say the provider you choose determines where your notes go. The privacy policy says Trilium Notes collects and sends no data from your installation and has no analytics or telemetry; the app periodically queries the GitHub releases page to check for a newer stable version, and downloads spelling dictionaries as needed.",
          "With a cloud provider (Anthropic, OpenAI, Google, DeepSeek or a custom OpenAI-compatible endpoint) note content you expose goes to that provider; with Ollama or LM Studio the AI privacy page says every message stays on the machine running the model. Web search, when enabled, sends the model's search terms to the provider's own search infrastructure. Attachments are sent to the provider without pre-processing such as OCR. The note tools have no permission management, so a model could delete notes or clutter your tree; deleted notes can be restored and edits create revisions, but attribute changes have no history. The built-in MCP server is off by default; when enabled, an ETAPI token gives the same full read and write access to your notes as the REST API."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "These are the maker's statements, not audit results, and PromptQuorum has not inspected network traffic. The privacy policy names no operator, contact address or last-updated date."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**Self-hosters** who want a free knowledge base on their own server with sync across devices.",
          "**Ollama and LM Studio users** who want an assistant that searches and edits their notes with a model on their own machine.",
          "**Power users** who like trees, relations and JavaScript scripting more than a plain folder of files."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Performance.** Speed with large databases, memory use and local-model answer quality are untested.",
          "**Privacy statements.** The policy and the AI privacy page are the maker's declarations; network traffic, link previews and the web clipper were not examined.",
          "**Mobile.** There is no official phone app, and the unofficial Android app was not examined.",
          "**Requirements.** No minimum OS, RAM or disk figures are published for the desktop app.",
          "**AI safety limits.** The docs state there is no permission management for note tools, and how reliably a model stays within a request is untested."
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
            "App": "[SiYuan](/power-local-llm/siyuan-review)",
            "Platforms": "Mac, Windows, Linux, iPhone, Android",
            "Price / license": "Free + paid sync / AGPL-3.0",
            "Key difference": "Self-hosted, block-level references, built-in AI agent"
          },
          {
            "App": "[Tolaria](/power-local-llm/tolaria-review)",
            "Platforms": "Mac, Windows, Linux",
            "Price / license": "Free / AGPL-3.0-or-later",
            "Key difference": "Markdown files in a Git-backed vault"
          }
        ],
        "note": "Confirm each app's current price, license and platforms on its own page before choosing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "Is there an official Trilium Notes app for iPhone or Android?",
            "a": "No. The server includes a mobile web frontend that you can install as a web app (PWA), and the community maintains an unofficial Android app called TriliumDroid, which the site says works offline."
          },
          {
            "q": "Is Trilium Notes the same as the original Trilium by zadam?",
            "a": "It builds on that project: the site credits zadam for 2017 to 2024 and Elian Doran and the community from 2024. The repository to use is TriliumNext/Trilium."
          },
          {
            "q": "Which AI providers does Trilium Notes support?",
            "a": "Anthropic, OpenAI, Google (Gemini) and DeepSeek with API keys, Claude Code as the only subscription-based option the docs list at present, Ollama and LM Studio locally, and any OpenAI-compatible endpoint such as OpenRouter, Groq or Mistral."
          },
          {
            "q": "How often is Trilium Notes released?",
            "a": "The GitHub releases show 0.104.1 on 25 July, 0.105.0 on 19 August, 0.106.0 on 25 September and 0.106.1 on 23 October 2026, so roughly one release a month."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Trilium Notes offers a free, AGPL-3.0 tree-based knowledge base for Mac, Windows, Linux and your own server, with optional AI through Ollama, LM Studio or cloud providers, and it ships about one release a month. Against that, the privacy policy names no operator or contact, there is no official phone app, the AI note tools have no permission management, and speed and answer quality are untested. It suits self-hosters and tree-and-relations note-takers who keep the AI off or pointed at a local model; anyone who needs audited privacy claims should treat the documentation as a declaration, not proof."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Trilium Notes website](https://triliumnotes.org) — features, platforms, license and AI summary, checked 3 November 2026.",
          "[Trilium Notes AI documentation](https://docs.triliumnotes.org/user-guide/llm) — providers, MCP server and warnings, checked 3 November 2026.",
          "[Trilium Notes privacy policy](https://docs.triliumnotes.org/user-guide/misc/privacy-policy) — data collection, telemetry and update checks, checked 3 November 2026.",
          "[Trilium Notes AI privacy page](https://docs.triliumnotes.org/user-guide/llm/Privacy) — data sent per provider type, web search and MCP, checked 3 November 2026.",
          "[Trilium Notes server documentation](https://docs.triliumnotes.org/user-guide/setup/server) — install options and configuration, checked 3 November 2026.",
          "[Trilium Notes Docker documentation](https://docs.triliumnotes.org/user-guide/setup/server/installation/docker) — image, port and warnings, checked 3 November 2026.",
          "[Trilium Notes on GitHub](https://github.com/TriliumNext/Trilium) — releases, assets and license, checked 3 November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[Logseq Review](/power-local-llm/logseq-review) — an open-source, local-first outliner with an optional MCP server.",
          "[SiYuan Review](/power-local-llm/siyuan-review) — a self-hosted knowledge workspace with a built-in AI agent.",
          "[Tolaria Review](/power-local-llm/tolaria-review) — a free desktop notes app with Markdown files in a Git-backed vault.",
          "[Local LLM Software Directory](/directory) — the full catalogue of local AI tools."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Trilium Notes Review: Free Hierarchical Notes With Optional AI",
      "description": "Trilium Notes review: a free, open-source hierarchical notes app and personal knowledge base for Mac, Windows, Linux and a self-hosted server, with optional AI through Ollama, LM Studio or cloud providers. Install options, privacy and what the sources leave unconfirmed.",
      "url": "https://www.promptquorum.com/power-local-llm/trilium-notes-review",
      "inLanguage": "en",
      "datePublished": "2026-11-03",
      "dateModified": "2026-11-03",
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
        "audienceType": "Note-takers and self-hosters evaluating a free knowledge-base app with optional local AI"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Trilium Notes"
        },
        {
          "@type": "Thing",
          "name": "Personal knowledge base"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "Self-hosting"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/power-local-llm/trilium-notes-review"
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
          "name": "Trilium Notes Review",
          "item": "https://www.promptquorum.com/power-local-llm/trilium-notes-review"
        }
      ]
    }
  },
  de: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-03",
    "dateModified": "2026-11-03",
    "next_refresh_due": "2027-05-03",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/trilium-notes-review-hero-de.webp",
    "title": "Trilium-Notes-Rezension: Kostenlose hierarchische Notizen mit optionaler KI",
    "seoTitle": "Trilium-Notes-Rezension: Kostenlose Notizen mit KI",
    "intro": "Trilium Notes ist eine kostenlose, quelloffene Notiz-App und persönliche Wissensdatenbank, die als Desktop-App für Mac, Windows und Linux oder als selbst gehosteter Server läuft, den Sie im Browser öffnen. Notizen liegen in einem hierarchischen Baum, eine Notiz kann an mehreren Stellen stehen, und ein optionaler KI-Assistent kann mit Ihren Notizen chatten, über ein lokales Modell wie Ollama oder LM Studio oder über einen Cloud-Anbieter Ihrer Wahl. Diese Rezension behandelt, was Sie herunterladen, was die KI kann, wohin Ihre Daten gehen und was die Quellen offenlassen.",
    "metaDescription": "Trilium-Notes-Rezension: kostenlose Notizen (AGPL-3.0) für Mac, Windows, Linux und eigenen Server, mit optionaler KI über Ollama, LM Studio oder Cloud.",
    "twitterDescription": "Trilium-Notes-Rezension: kostenlose quelloffene Notizen auf Ihrem Desktop oder eigenen Server, mit optionaler KI über Ollama, LM Studio oder Cloud-Anbieter. Was die Quellen bestätigen und was nicht.",
    "audience": "Notizen-Schreiber und Selbst-Hoster, die wissen wollen, was Trilium Notes kostet, wie es sich installiert, worauf die optionale KI zugreifen kann und welche Aussagen die Quellen offenlassen.",
    "readTime": "6 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Trilium Notes Rezension",
    "targetKeywords": [
      "trilium notes rezension",
      "trilium notes app",
      "trilium notes ollama",
      "selbst gehostete notiz app",
      "quelloffene wissensdatenbank app",
      "trilium ki chat",
      "trilium notes docker"
    ],
    "current_models_mentioned": [
      "Claude",
      "GPT",
      "Gemini",
      "DeepSeek"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**Trilium Notes (Version 0.106.1, veröffentlicht am 23. Oktober 2026) ist eine kostenlose Notiz-App und persönliche Wissensdatenbank unter AGPL-3.0 für Mac, Windows, Linux und einen selbst gehosteten Server, mit einem optionalen KI-Assistenten, der erst nach dem Einschalten aktiv wird.** Der entscheidende Vorbehalt: Die KI kann Ihre Notizen ohne Berechtigungsebene lesen und bearbeiten, daher entscheidet der gewählte Anbieter, wohin Ihre Notizen gehen.",
    "quickAnswerTop": {
      "de": {
        "question": "Kann Trilium Notes ein lokales Modell wie Ollama nutzen?",
        "answer": "Ja, laut Dokumentation: Sobald die KI-Integration aktiviert ist, sind Ollama und LM Studio unterstützte Anbieter, und ein lokaler Anbieter hält jede Nachricht auf dem Rechner, auf dem das Modell läuft. Die Integration tut nichts, bis Sie sie aktivieren und einen Anbieter einrichten.",
        "bullets": [
          "Jeder OpenAI-kompatible Endpunkt lässt sich als eigener Anbieter hinzufügen, etwa OpenRouter, Groq oder Mistral.",
          "Ein eingebauter MCP-Server, standardmäßig aus, lässt einen externen Agenten wie Claude Code über ein ETAPI-Token mit Ihrer Datenbank arbeiten.",
          "Websuche und Notizzugriff sind nach dem Aktivieren der KI pro Chat standardmäßig an und lassen sich in der Modellauswahl abschalten; die Websuche sendet die Suchbegriffe des Modells an die eigene Suchinfrastruktur des Anbieters."
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
        "label": "Was ist Trilium Notes?",
        "anchor": "what-is-trilium-notes"
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
            "text": "Trilium Notes ist eine kostenlose, quelloffene hierarchische Notiz-App und persönliche Wissensdatenbank für den Desktop oder einen selbst gehosteten Server, mit optionalem KI-Chat."
          },
          {
            "type": "plain-terms",
            "text": "Sie halten Ihre Notizen in einem Baum auf Ihrem eigenen Rechner oder Server und können einen KI-Assistenten suchen und bearbeiten lassen, entweder mit einem Modell auf Ihrem Rechner oder mit einem Cloud-Modell Ihrer Wahl."
          }
        ],
        "items": [
          "Pflege: Version 0.106.1 erschien am 23. Oktober 2026 und das Repository wurde am 3. November 2026 aktualisiert; eine Warnung vor veralteten Projekten entfällt.",
          "Kosten: kostenlos, laut Hersteller ohne kostenpflichtige Tarife, Konten oder Funktionssperren.",
          "KI: optional und standardmäßig aus, mit lokalen Anbietern (Ollama, LM Studio), Cloud-Anbietern und einem eingebauten MCP-Server.",
          "Mobil: keine offizielle Handy-App; der Server bietet Browser und installierbare Web-App, und es gibt eine inoffizielle Android-App.",
          "Sicherheit: Die KI-Notizwerkzeuge haben keine Berechtigungsverwaltung, ein Assistent könnte Notizen löschen oder umsortieren."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Diese Rezension stützt sich auf triliumnotes.org, die Dokumentation, die GitHub-Releases und Repository-Daten, geprüft am 3. November 2026. PromptQuorum hat die App weder installiert noch ausgeführt oder gemessen; Geschwindigkeit, Stabilität und Antwortqualität werden daher nicht bewertet."
          }
        ]
      },
      "overview": {
        "id": "what-is-trilium-notes",
        "title": "Was ist Trilium Notes?",
        "content": [
          "**Trilium Notes ist eine Notiz-App um einen Baum aus Notizen, in dem eine Notiz in mehreren Zweigen des Baums stehen kann.** Die Betreuer sind Elian Doran und die Community, aufbauend auf der früheren Arbeit von zadam, dem die Website die Jahre 2017 bis 2024 zuschreibt; das aktuelle Repository ist TriliumNext/Trilium.",
          "Die Website nennt Notiztypen für Text, Markdown, Code, Tabellenkalkulationen, Canvas, Mermaid-Diagramme, Mind-Maps und Dateien, dazu Kalender-, Tabellen-, Kanban-, Geomap-, Präsentations- und Dashboard-Ansichten, Labels und Relationen, Notizversionen, einen Web-Clipper und eine REST-API. Skripte nutzen JavaScript im Frontend und Backend."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Bezugsquelle",
        "content": [
          "**Trilium Notes ist für Mac, Windows und Linux kostenlos herunterladbar, und dasselbe Projekt läuft auch als Server, den Sie selbst hosten; die Installer liegen auf GitHub Releases.**"
        ],
        "columns": [
          "Option",
          "Bezug"
        ],
        "rows": [
          {
            "Option": "Mac",
            "Bezug": "[Trilium Notes auf GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), .dmg oder .zip für Apple Silicon oder Intel"
          },
          {
            "Option": "Windows",
            "Bezug": "[Trilium Notes auf GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), x64- oder ARM64-.exe oder -.zip"
          },
          {
            "Option": "Linux",
            "Bezug": "[Trilium Notes auf GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), x64- oder ARM64-AppImage, .deb, .rpm oder Flatpak"
          },
          {
            "Option": "Server (Docker)",
            "Bezug": "Image [triliumnext/trilium](https://hub.docker.com/r/triliumnext/trilium); `docker compose up -d`, Port 8080"
          },
          {
            "Option": "Server (verwaltet)",
            "Bezug": "Hosting durch [PikaPods](https://www.pikapods.com/pods?run=trilium-next); noch keine offizielle Cloud-Version"
          },
          {
            "Option": "Handy",
            "Bezug": "Keine offizielle App; Server im Browser oder als PWA. Inoffiziell: TriliumDroid (Android)"
          },
          {
            "Option": "Preis",
            "Bezug": "Kostenlos; keine kostenpflichtigen Tarife, Konten oder Funktionssperren"
          },
          {
            "Option": "Website",
            "Bezug": "[triliumnotes.org](https://triliumnotes.org)"
          },
          {
            "Option": "Datenschutzerklärung",
            "Bezug": "[Datenschutzerklärung](https://docs.triliumnotes.org/user-guide/misc/privacy-policy); [KI-Datenschutzseite](https://docs.triliumnotes.org/user-guide/llm/Privacy)"
          },
          {
            "Option": "Quellcode",
            "Bezug": "[GitHub, AGPL-3.0](https://github.com/TriliumNext/Trilium)"
          }
        ],
        "note": "Geprüfte Version: 0.106.1 (23. Oktober 2026). Dieses Release ist ein Sicherheitsupdate für die Server- und Docker-Images, wer den Server betreibt, sollte es also einspielen. Die Docker-Dokumentation rät vom Tag `latest` ab, weil es Sie auf eine neue Nebenversion heben und die Synchronisierung stören kann; legen Sie stattdessen ein Versions-Tag fest."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Anforderungen",
        "content": [
          "**Die Quellen nennen keine Mindestangaben zu Betriebssystem, RAM oder Speicherplatz für die Desktop-App.**"
        ],
        "columns": [
          "Punkt",
          "Was die Quellen sagen"
        ],
        "rows": [
          {
            "Punkt": "Desktop",
            "Was die Quellen sagen": "Builds für Mac (Apple Silicon und Intel), Windows (x64 und ARM64), Linux (x64 und ARM64) auf GitHub Releases"
          },
          {
            "Punkt": "Server",
            "Was die Quellen sagen": "Docker-Images für AMD64, ARMv7 und ARM64; ein Linux-Serverarchiv; Kubernetes, Cloudron, NixOS und weitere Setups sind in der Dokumentation aufgeführt"
          },
          {
            "Punkt": "Lokale KI",
            "Was die Quellen sagen": "Eine separate Ollama- oder LM-Studio-Installation; Angaben zu Modellgröße oder Hardware fehlen"
          },
          {
            "Punkt": "Konto",
            "Was die Quellen sagen": "Keines; der Hersteller gibt an, dass es keine Konten gibt"
          }
        ],
        "note": "Der Standard-Docker-Container braucht laut Dokumentation Root-Rechte; ein Rootless-Image existiert. Wer den Server ins offene Internet stellt, braucht die in der Dokumentation beschriebenen HTTPS- und Authentifizierungseinstellungen."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "So gelingt der Einstieg",
        "content": [
          "**Die Schritte folgen der Dokumentation des Herstellers; PromptQuorum hat sie nicht ausgeführt.**"
        ],
        "numberedItems": [
          {
            "title": "Desktop oder Server wählen",
            "whyItMatters": "Laden Sie den Installer für Ihr System von GitHub Releases, oder starten Sie das Docker-Image, wenn Sie Browserzugriff und Sync über mehrere Geräte wollen."
          },
          {
            "title": "Version festlegen",
            "whyItMatters": "Nutzen Sie bei Docker ein bestimmtes Versions-Tag statt latest, damit ein automatisches Upgrade den Sync nicht stört."
          },
          {
            "title": "Bei Serverbetrieb synchronisieren",
            "whyItMatters": "Verbinden Sie die Desktop-App mit Ihrem eigenen Server, um mehrere Geräte abzugleichen; die Dokumentation behandelt Sync auf ihren Seiten zur Synchronisierung."
          },
          {
            "title": "KI nur bei Bedarf aktivieren",
            "whyItMatters": "Die KI-Integration tut nichts, bis Sie sie aktivieren und einen Anbieter einrichten; wählen Sie Ollama oder LM Studio, damit die Notizen auf Ihrem Rechner bleiben."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Von den Quellen bestätigte Funktionen",
        "content": [
          "**Alle folgenden Punkte stammen von der Website oder Dokumentation des Herstellers; keiner wurde unabhängig getestet.**"
        ],
        "items": [
          "**Baum mit Klonen.** Notizen sind hierarchisch geordnet, und eine Notiz kann an mehreren Stellen erscheinen, mit Labels, Relationen und Workspaces (Hoisting).",
          "**Suche.** Unscharfe Titelsuche und Volltextsuche, einschließlich OCR-Text aus Bildern und PDFs.",
          "**Geschützte Notizen.** Ausgewählte Notizen lassen sich verschlüsseln; alles andere wird standardmäßig unverschlüsselt gespeichert.",
          "**Veröffentlichen und Zugriff.** Ein Notizzweig lässt sich als schreibgeschützte Website veröffentlichen (nur Server), mit TOTP-Mehrfaktoranmeldung und OpenID Connect.",
          "**KI-Chat und Werkzeuge.** Chat mit Ihren Notizen, ein Assistent, der über eingebaute Notizwerkzeuge suchen und bearbeiten kann, und ein MCP-Server für externe Agenten."
        ],
        "note": "Die KI-Datenschutzseite sagt, ein lokales Modell kommt mit Werkzeugaufrufen möglicherweise weniger zuverlässig zurecht als ein Cloud-Modell; Leistungszahlen nennen die Quellen nicht."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenfluss und Datenschutz",
        "content": [
          "**Ihre Notizen liegen in einer lokalen SQLite-Datenbank, unverschlüsselt, sofern Sie eine Notiz nicht als geschützt markieren; geschützte Notizen nutzen AES-128-CBC.** Bei ausgeschalteter KI sendet die KI-Funktion nichts irgendwohin. Laut Dokumentation bestimmt der gewählte Anbieter, wohin Ihre Notizen gehen. Die Datenschutzerklärung besagt, dass Trilium Notes keine Daten Ihrer Installation erhebt oder sendet und weder Analyse noch Telemetrie enthält; die App fragt regelmäßig die GitHub-Releases-Seite ab, um nach einer neueren stabilen Version zu suchen, und lädt bei Bedarf Rechtschreibwörterbücher herunter.",
          "Bei einem Cloud-Anbieter (Anthropic, OpenAI, Google, DeepSeek oder einem eigenen OpenAI-kompatiblen Endpunkt) gehen die freigegebenen Notizinhalte an diesen Anbieter; bei Ollama oder LM Studio bleibt laut KI-Datenschutzseite jede Nachricht auf dem Rechner, auf dem das Modell läuft. Die Websuche sendet, sofern aktiviert, die Suchbegriffe des Modells an die eigene Suchinfrastruktur des Anbieters. Anhänge werden ohne Vorverarbeitung wie OCR an den Anbieter gesendet. Die Notizwerkzeuge haben keine Berechtigungsverwaltung, ein Modell könnte also Notizen löschen oder den Baum unübersichtlich machen; gelöschte Notizen lassen sich wiederherstellen und Änderungen erzeugen Versionen, doch Änderungen an Attributen haben keinen Verlauf. Der eingebaute MCP-Server ist standardmäßig aus; wenn aktiviert, gewährt ein ETAPI-Token denselben vollen Lese- und Schreibzugriff auf Ihre Notizen wie die REST-API."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Das sind Aussagen des Herstellers, keine Prüfergebnisse, und PromptQuorum hat den Netzwerkverkehr nicht untersucht. Die Datenschutzerklärung nennt keinen Betreiber, keine Kontaktadresse und kein Datum der letzten Aktualisierung."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen sich die App eignet",
        "items": [
          "**Selbst-Hoster**, die eine kostenlose Wissensdatenbank auf dem eigenen Server mit Sync über mehrere Geräte wollen.",
          "**Ollama- und LM-Studio-Nutzer**, die einen Assistenten wollen, der ihre Notizen mit einem Modell auf dem eigenen Rechner durchsucht und bearbeitet.",
          "**Power-User**, die Bäume, Relationen und JavaScript-Skripte einem einfachen Dateiordner vorziehen."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht überprüfen konnten",
        "items": [
          "**Leistung.** Geschwindigkeit bei großen Datenbanken, Speicherverbrauch und die Qualität lokaler Modellantworten sind ungetestet.",
          "**Datenschutzaussagen.** Die Erklärung und die KI-Datenschutzseite sind Angaben des Herstellers; Netzwerkverkehr, Linkvorschauen und der Web-Clipper wurden nicht untersucht.",
          "**Mobil.** Es gibt keine offizielle Handy-App, und die inoffizielle Android-App wurde nicht untersucht.",
          "**Anforderungen.** Für die Desktop-App sind keine Mindestwerte zu Betriebssystem, RAM oder Speicherplatz veröffentlicht.",
          "**Grenzen der KI-Sicherheit.** Laut Dokumentation gibt es keine Berechtigungsverwaltung für Notizwerkzeuge, und wie zuverlässig ein Modell innerhalb einer Anfrage bleibt, ist ungetestet."
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
            "App": "[SiYuan](/de/power-local-llm/siyuan-review)",
            "Plattformen": "Mac, Windows, Linux, iPhone, Android",
            "Preis / Lizenz": "Gratis + bezahlter Sync / AGPL-3.0",
            "Hauptunterschied": "Selbst gehostet, Verweise auf Blockebene, eingebauter KI-Agent"
          },
          {
            "App": "[Tolaria](/de/power-local-llm/tolaria-review)",
            "Plattformen": "Mac, Windows, Linux",
            "Preis / Lizenz": "Gratis / AGPL-3.0-or-later",
            "Hauptunterschied": "Markdown-Dateien in einem Git-gestützten Vault"
          }
        ],
        "note": "Prüfen Sie Preis, Lizenz und Plattformen jeder App vor der Entscheidung auf deren eigener Seite."
      },
      "faq": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Gibt es eine offizielle Trilium-Notes-App für iPhone oder Android?",
            "a": "Nein. Der Server enthält ein mobiles Web-Frontend, das sich als Web-App (PWA) installieren lässt, und die Community pflegt eine inoffizielle Android-App namens TriliumDroid, die laut Website offline funktioniert."
          },
          {
            "q": "Ist Trilium Notes dasselbe wie das ursprüngliche Trilium von zadam?",
            "a": "Es baut auf diesem Projekt auf: Die Website nennt zadam für 2017 bis 2024 und Elian Doran sowie die Community ab 2024. Das zu nutzende Repository ist TriliumNext/Trilium."
          },
          {
            "q": "Welche KI-Anbieter unterstützt Trilium Notes?",
            "a": "Anthropic, OpenAI, Google (Gemini) und DeepSeek mit API-Schlüsseln, Claude Code als derzeit einzige in der Dokumentation genannte abonnementbasierte Option, Ollama und LM Studio lokal sowie jeden OpenAI-kompatiblen Endpunkt wie OpenRouter, Groq oder Mistral."
          },
          {
            "q": "Wie oft erscheint Trilium Notes?",
            "a": "Die GitHub-Releases zeigen 0.104.1 am 25. Juli, 0.105.0 am 19. August, 0.106.0 am 25. September und 0.106.1 am 23. Oktober 2026, also etwa ein Release pro Monat."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "Trilium Notes bietet eine kostenlose, baumbasierte Wissensdatenbank unter AGPL-3.0 für Mac, Windows, Linux und den eigenen Server, mit optionaler KI über Ollama, LM Studio oder Cloud-Anbieter, und veröffentlicht etwa ein Release pro Monat. Dagegen nennt die Datenschutzerklärung keinen Betreiber und keinen Kontakt, es gibt keine offizielle Handy-App, die KI-Notizwerkzeuge haben keine Berechtigungsverwaltung, und Geschwindigkeit sowie Antwortqualität sind ungetestet. Die App passt zu Selbst-Hostern und Notizen-Schreibern, die Bäume und Relationen mögen und die KI ausgeschaltet lassen oder auf ein lokales Modell richten; wer geprüfte Datenschutzangaben braucht, sollte die Dokumentation als Aussage, nicht als Beweis lesen."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[Trilium-Notes-Website](https://triliumnotes.org) — Funktionen, Plattformen, Lizenz und KI-Überblick, geprüft am 3. November 2026.",
          "[Trilium-Notes-KI-Dokumentation](https://docs.triliumnotes.org/user-guide/llm) — Anbieter, MCP-Server und Warnhinweise, geprüft am 3. November 2026.",
          "[Trilium-Notes-Datenschutzerklärung](https://docs.triliumnotes.org/user-guide/misc/privacy-policy) — Datenerhebung, Telemetrie und Update-Prüfungen, geprüft am 3. November 2026.",
          "[Trilium-Notes-KI-Datenschutzseite](https://docs.triliumnotes.org/user-guide/llm/Privacy) — gesendete Daten je Anbietertyp, Websuche und MCP, geprüft am 3. November 2026.",
          "[Trilium-Notes-Server-Dokumentation](https://docs.triliumnotes.org/user-guide/setup/server) — Installationsoptionen und Konfiguration, geprüft am 3. November 2026.",
          "[Trilium-Notes-Docker-Dokumentation](https://docs.triliumnotes.org/user-guide/setup/server/installation/docker) — Image, Port und Warnhinweise, geprüft am 3. November 2026.",
          "[Trilium Notes auf GitHub](https://github.com/TriliumNext/Trilium) — Releases, Dateien und Lizenz, geprüft am 3. November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[Logseq-Rezension](/de/power-local-llm/logseq-review) — ein quelloffener, lokaler Outliner mit optionalem MCP-Server.",
          "[SiYuan-Rezension](/de/power-local-llm/siyuan-review) — ein selbst gehosteter Wissens-Workspace mit eingebautem KI-Agenten.",
          "[Tolaria-Rezension](/de/power-local-llm/tolaria-review) — eine kostenlose Desktop-Notiz-App mit Markdown-Dateien in einem Git-gestützten Vault.",
          "[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools."
        ]
      }
    }
  },
  es: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-03",
    "dateModified": "2026-11-03",
    "next_refresh_due": "2027-05-03",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/trilium-notes-review-hero-es.webp",
    "title": "Reseña de Trilium Notes: notas jerárquicas gratis con IA opcional",
    "seoTitle": "Reseña de Trilium Notes: notas autoalojadas y IA",
    "intro": "Trilium Notes es una app de notas y base de conocimiento personal gratuita y de código abierto que funciona como aplicación de escritorio en Mac, Windows y Linux, o como servidor autoalojado al que accedes desde el navegador. Las notas se organizan en un árbol jerárquico, una misma nota puede estar en varios lugares y un asistente de IA opcional puede conversar con tus notas mediante un modelo local como Ollama o LM Studio, o mediante un proveedor en la nube que tú elijas. Esta reseña cubre qué se descarga, qué puede hacer la IA, adónde van tus datos y qué dejan sin confirmar las fuentes.",
    "metaDescription": "Reseña de Trilium Notes: notas jerárquicas gratis (AGPL-3.0) para Mac, Windows, Linux y tu servidor, con IA opcional vía Ollama, LM Studio o nube.",
    "twitterDescription": "Reseña de Trilium Notes: notas de código abierto gratis en tu escritorio o en tu servidor, con IA opcional mediante Ollama, LM Studio o proveedores en la nube. Qué confirman las fuentes y qué no.",
    "audience": "Personas que toman notas y que autoalojan servicios y quieren saber cuánto cuesta Trilium Notes, cómo se instala, a qué puede acceder su IA opcional y qué afirmaciones dejan abiertas las fuentes.",
    "readTime": "6 min de lectura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "reseña de Trilium Notes",
    "targetKeywords": [
      "reseña trilium notes",
      "app trilium notes",
      "trilium notes ollama",
      "app de notas autoalojada",
      "base de conocimiento de código abierto",
      "trilium ia chat",
      "trilium notes docker"
    ],
    "current_models_mentioned": [
      "Claude",
      "GPT",
      "Gemini",
      "DeepSeek"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**Trilium Notes (versión 0.106.1, publicada el 23 de octubre de 2026) es una app de notas y base de conocimiento personal gratuita y con licencia AGPL-3.0 para Mac, Windows, Linux y un servidor autoalojado, con un asistente de IA opcional que permanece apagado hasta que lo activas.** La advertencia decisiva es que la IA puede leer y editar tus notas sin una capa de permisos, así que el proveedor que elijas decide adónde van tus notas.",
    "quickAnswerTop": {
      "es": {
        "question": "¿Trilium Notes puede usar un modelo local como Ollama?",
        "answer": "Sí, según la documentación: una vez activada la integración de IA, Ollama y LM Studio son proveedores compatibles, y un proveedor local mantiene cada mensaje en el equipo que ejecuta el modelo. La integración no hace nada hasta que la activas y configuras un proveedor.",
        "bullets": [
          "Cualquier endpoint compatible con OpenAI puede añadirse como proveedor personalizado, por ejemplo OpenRouter, Groq o Mistral.",
          "Un servidor MCP integrado, desactivado por defecto, permite que un agente externo, como Claude Code, trabaje con tu base de datos mediante un token de ETAPI.",
          "La búsqueda web y el acceso a las notas están activados por defecto en cada chat una vez habilitada la IA, y se pueden desactivar en el selector de modelo; la búsqueda web envía los términos de búsqueda del modelo a la infraestructura de búsqueda del propio proveedor."
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
        "label": "¿Qué es Trilium Notes?",
        "anchor": "what-is-trilium-notes"
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
            "text": "Trilium Notes es una app de notas jerárquica y base de conocimiento personal gratuita y de código abierto, para escritorio o un servidor autoalojado, con chat de IA opcional."
          },
          {
            "type": "plain-terms",
            "text": "Guardas tus notas en un árbol en tu propio equipo o en tu propio servidor, y puedes dejar que un asistente de IA las busque y las edite usando un modelo en tu equipo o un modelo en la nube que tú elijas."
          }
        ],
        "items": [
          "Mantenimiento: la versión 0.106.1 se publicó el 23 de octubre de 2026 y el repositorio se actualizó el 3 de noviembre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.",
          "Coste: gratis, sin planes de pago, cuentas ni funciones bloqueadas, según el creador.",
          "IA: opcional y desactivada por defecto, con proveedores locales (Ollama, LM Studio), proveedores en la nube y un servidor MCP integrado.",
          "Móvil: no hay app oficial para teléfono; el servidor ofrece navegador y una app web instalable, y existe una app no oficial para Android.",
          "Seguridad: las herramientas de notas de la IA no tienen gestión de permisos, así que un asistente podría borrar o reordenar notas."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta reseña se basa en triliumnotes.org, la documentación, las versiones de GitHub y los datos del repositorio, consultados el 3 de noviembre de 2026. PromptQuorum no ha instalado, ejecutado ni medido la app, así que no se evalúan la velocidad, la estabilidad ni la calidad de las respuestas."
          }
        ]
      },
      "overview": {
        "id": "what-is-trilium-notes",
        "title": "¿Qué es Trilium Notes?",
        "content": [
          "**Trilium Notes es una app de notas construida en torno a un árbol de notas, donde una misma nota puede colocarse en varias ramas del árbol.** Los mantenedores son Elian Doran y la comunidad, que continúan el trabajo anterior de zadam, a quien el sitio atribuye los años 2017 a 2024; el repositorio actual es TriliumNext/Trilium.",
          "El sitio enumera tipos de nota para texto, Markdown, código, hojas de cálculo, lienzo, diagramas Mermaid, mapas mentales y archivos, además de vistas de calendario, tabla, Kanban, mapa geográfico, presentación y panel, etiquetas y relaciones, revisiones de notas, un web clipper y una API REST. Los scripts usan JavaScript de frontend y de backend."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo conseguirla",
        "content": [
          "**Trilium Notes se descarga gratis para Mac, Windows y Linux, y el mismo proyecto también funciona como servidor que alojas tú; los instaladores están en GitHub Releases.**"
        ],
        "columns": [
          "Opción",
          "Cómo conseguirla"
        ],
        "rows": [
          {
            "Opción": "Mac",
            "Cómo conseguirla": "[Trilium Notes en GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), .dmg o .zip para Apple silicon o Intel"
          },
          {
            "Opción": "Windows",
            "Cómo conseguirla": "[Trilium Notes en GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), .exe o .zip para x64 o ARM64"
          },
          {
            "Opción": "Linux",
            "Cómo conseguirla": "[Trilium Notes en GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), AppImage, .deb, .rpm o Flatpak para x64 o ARM64"
          },
          {
            "Opción": "Servidor (Docker)",
            "Cómo conseguirla": "Imagen [triliumnext/trilium](https://hub.docker.com/r/triliumnext/trilium); `docker compose up -d`, puerto 8080"
          },
          {
            "Opción": "Servidor (gestionado)",
            "Cómo conseguirla": "Alojamiento de terceros en [PikaPods](https://www.pikapods.com/pods?run=trilium-next); aún no hay nube oficial"
          },
          {
            "Opción": "Teléfono",
            "Cómo conseguirla": "Sin app oficial; usa el servidor en el navegador o como PWA. No oficial: TriliumDroid (Android)"
          },
          {
            "Opción": "Precio",
            "Cómo conseguirla": "Gratis; sin planes de pago, cuentas ni funciones bloqueadas"
          },
          {
            "Opción": "Sitio web",
            "Cómo conseguirla": "[triliumnotes.org](https://triliumnotes.org)"
          },
          {
            "Opción": "Política de privacidad",
            "Cómo conseguirla": "[Política de privacidad](https://docs.triliumnotes.org/user-guide/misc/privacy-policy); [página de privacidad de la IA](https://docs.triliumnotes.org/user-guide/llm/Privacy)"
          },
          {
            "Opción": "Código fuente",
            "Cómo conseguirla": "[GitHub, AGPL-3.0](https://github.com/TriliumNext/Trilium)"
          }
        ],
        "note": "Versión revisada: 0.106.1 (23 de octubre de 2026). Esa versión es una actualización de seguridad para el servidor y las imágenes de Docker, así que quien ejecute el servidor debería usarla. La documentación de Docker desaconseja la etiqueta `latest` porque puede llevarte a una nueva versión menor y alterar la sincronización; fija una etiqueta de versión concreta."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**Las fuentes no dan cifras mínimas de sistema operativo, RAM ni disco para la app de escritorio.**"
        ],
        "columns": [
          "Elemento",
          "Qué dicen las fuentes"
        ],
        "rows": [
          {
            "Elemento": "Escritorio",
            "Qué dicen las fuentes": "Compilaciones para Mac (Apple silicon e Intel), Windows (x64 y ARM64) y Linux (x64 y ARM64) en GitHub Releases"
          },
          {
            "Elemento": "Servidor",
            "Qué dicen las fuentes": "Imágenes de Docker para AMD64, ARMv7 y ARM64; un archivo de servidor para Linux; la documentación también enumera Kubernetes, Cloudron, NixOS y otras opciones"
          },
          {
            "Elemento": "IA local",
            "Qué dicen las fuentes": "Una instalación aparte de Ollama o LM Studio; no se indican tamaños de modelo ni cifras de hardware"
          },
          {
            "Elemento": "Cuenta",
            "Qué dicen las fuentes": "Ninguna; el creador afirma que no hay cuentas"
          }
        ],
        "note": "Según la documentación, el contenedor Docker estándar necesita privilegios de root; existe una imagen sin root. Exponer el servidor a internet exige los ajustes de HTTPS y autenticación que describe la documentación."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Cómo empezar",
        "content": [
          "**Los pasos siguen la documentación del creador; PromptQuorum no los ha ejecutado.**"
        ],
        "numberedItems": [
          {
            "title": "Elige escritorio o servidor",
            "whyItMatters": "Descarga el instalador para tu sistema desde GitHub Releases, o ejecuta la imagen de Docker si quieres acceso desde el navegador y sincronización entre dispositivos."
          },
          {
            "title": "Fija una versión",
            "whyItMatters": "En Docker, usa una etiqueta de versión concreta en lugar de latest para que una actualización automática no rompa la sincronización."
          },
          {
            "title": "Sincroniza si usas un servidor",
            "whyItMatters": "Conecta la app de escritorio a tu propio servidor para mantener varios dispositivos al día; la documentación explica la sincronización en sus páginas de Synchronization."
          },
          {
            "title": "Activa la IA solo si la quieres",
            "whyItMatters": "La integración de IA no hace nada hasta que la activas y configuras un proveedor; elige Ollama o LM Studio para que las notas se queden en tu equipo."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones confirmadas por las fuentes",
        "content": [
          "**Todo lo que sigue procede del sitio o de la documentación del creador; nada se ha probado de forma independiente.**"
        ],
        "items": [
          "**Árbol con clonación.** Las notas se organizan de forma jerárquica y una misma nota puede aparecer en varios lugares, con etiquetas, relaciones y espacios de trabajo (hoisting).",
          "**Búsqueda.** Búsqueda aproximada por título y búsqueda de texto completo, incluido el texto OCR de imágenes y PDF.",
          "**Notas protegidas.** Se pueden cifrar notas concretas; todo lo demás se guarda sin cifrar por defecto.",
          "**Publicación y acceso.** Un subárbol de notas puede publicarse como sitio web de solo lectura (solo con servidor), con inicio de sesión multifactor TOTP y OpenID Connect.",
          "**Chat de IA y herramientas.** Chat con tus notas, un asistente que puede buscar y editar mediante herramientas de notas integradas y un servidor MCP para agentes externos."
        ],
        "note": "La página de privacidad de la IA indica que un modelo local puede gestionar las llamadas a herramientas con menos fiabilidad que un modelo en la nube; las fuentes no dan cifras de rendimiento."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flujo de datos y privacidad",
        "content": [
          "**Tus notas se guardan en una base de datos SQLite local, sin cifrar salvo que marques una nota como protegida; las notas protegidas usan AES-128-CBC.** Con la IA apagada, la función de IA no envía nada a ningún sitio. La documentación indica que el proveedor que elijas determina adónde van tus notas. La política de privacidad dice que Trilium Notes no recopila ni envía datos de tu instalación y que no tiene analítica ni telemetría; la app consulta periódicamente la página de versiones de GitHub para comprobar si hay una versión estable más reciente y descarga diccionarios de corrección ortográfica cuando hacen falta.",
          "Con un proveedor en la nube (Anthropic, OpenAI, Google, DeepSeek o un endpoint personalizado compatible con OpenAI), el contenido de las notas que expongas va a ese proveedor; con Ollama o LM Studio la página de privacidad de la IA dice que cada mensaje se queda en el equipo que ejecuta el modelo. La búsqueda web, cuando está activada, envía los términos de búsqueda del modelo a la infraestructura de búsqueda del propio proveedor. Los adjuntos se envían al proveedor sin preprocesar, por ejemplo sin OCR. Las herramientas de notas no tienen gestión de permisos, así que un modelo podría borrar notas o desordenar tu árbol; las notas borradas se pueden restaurar y las ediciones crean revisiones, pero los cambios de atributos no tienen historial. El servidor MCP integrado está desactivado por defecto; cuando se activa, un token de ETAPI da el mismo acceso completo de lectura y escritura a tus notas que la API REST."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Estas son afirmaciones del creador, no resultados de una auditoría, y PromptQuorum no ha inspeccionado el tráfico de red. La política de privacidad no nombra a ningún responsable, dirección de contacto ni fecha de última actualización."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quién es",
        "items": [
          "**Quienes autoalojan servicios** y quieren una base de conocimiento gratuita en su propio servidor con sincronización entre dispositivos.",
          "**Usuarios de Ollama y LM Studio** que quieren un asistente que busque y edite sus notas con un modelo en su propio equipo.",
          "**Usuarios avanzados** a quienes les gustan más los árboles, las relaciones y los scripts en JavaScript que una simple carpeta de archivos."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Rendimiento.** La velocidad con bases de datos grandes, el uso de memoria y la calidad de las respuestas con modelos locales no se han probado.",
          "**Declaraciones de privacidad.** La política y la página de privacidad de la IA son declaraciones del creador; no se examinaron el tráfico de red, las vistas previas de enlaces ni el web clipper.",
          "**Móvil.** No hay app oficial para teléfono, y la app no oficial para Android no se examinó.",
          "**Requisitos.** No se publican cifras mínimas de sistema operativo, RAM ni disco para la app de escritorio.",
          "**Límites de seguridad de la IA.** La documentación afirma que las herramientas de notas no tienen gestión de permisos, y no se probó con qué fiabilidad un modelo se ciñe a lo que se le pide."
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
            "App": "[SiYuan](/es/power-local-llm/siyuan-review)",
            "Plataformas": "Mac, Windows, Linux, iPhone, Android",
            "Precio / licencia": "Gratis + sincronización de pago / AGPL-3.0",
            "Diferencia clave": "Autoalojado, referencias a nivel de bloque, agente de IA integrado"
          },
          {
            "App": "[Tolaria](/es/power-local-llm/tolaria-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Precio / licencia": "Gratis / AGPL-3.0-or-later",
            "Diferencia clave": "Archivos Markdown en una bóveda respaldada por Git"
          }
        ],
        "note": "Confirma el precio, la licencia y las plataformas actuales de cada app en su propia página antes de elegir."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿Hay una app oficial de Trilium Notes para iPhone o Android?",
            "a": "No. El servidor incluye un frontend web móvil que puedes instalar como app web (PWA), y la comunidad mantiene una app no oficial para Android llamada TriliumDroid, que según el sitio funciona sin conexión."
          },
          {
            "q": "¿Trilium Notes es lo mismo que el Trilium original de zadam?",
            "a": "Se basa en ese proyecto: el sitio atribuye a zadam los años 2017 a 2024 y a Elian Doran y la comunidad el periodo desde 2024. El repositorio que hay que usar es TriliumNext/Trilium."
          },
          {
            "q": "¿Qué proveedores de IA admite Trilium Notes?",
            "a": "Anthropic, OpenAI, Google (Gemini) y DeepSeek con claves de API, Claude Code como única opción por suscripción que la documentación menciona por ahora, Ollama y LM Studio en local, y cualquier endpoint compatible con OpenAI, como OpenRouter, Groq o Mistral."
          },
          {
            "q": "¿Cada cuánto se publica una versión de Trilium Notes?",
            "a": "Las versiones de GitHub muestran la 0.104.1 el 25 de julio, la 0.105.0 el 19 de agosto, la 0.106.0 el 25 de septiembre y la 0.106.1 el 23 de octubre de 2026, es decir, aproximadamente una al mes."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "Trilium Notes ofrece una base de conocimiento en árbol gratuita y con licencia AGPL-3.0 para Mac, Windows, Linux y tu propio servidor, con IA opcional mediante Ollama, LM Studio o proveedores en la nube, y publica aproximadamente una versión al mes. En contra, la política de privacidad no nombra a ningún responsable ni contacto, no hay app oficial para teléfono, las herramientas de notas de la IA no tienen gestión de permisos y la velocidad y la calidad de las respuestas no se han probado. Encaja con quienes autoalojan y con quienes toman notas con árboles y relaciones y mantienen la IA apagada o apuntando a un modelo local; quien necesite afirmaciones de privacidad auditadas debería tratar la documentación como una declaración, no como una prueba."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Sitio web de Trilium Notes](https://triliumnotes.org) — funciones, plataformas, licencia y resumen de IA, consultado el 3 de noviembre de 2026.",
          "[Documentación de IA de Trilium Notes](https://docs.triliumnotes.org/user-guide/llm) — proveedores, servidor MCP y advertencias, consultado el 3 de noviembre de 2026.",
          "[Política de privacidad de Trilium Notes](https://docs.triliumnotes.org/user-guide/misc/privacy-policy) — recopilación de datos, telemetría y comprobaciones de actualizaciones, consultado el 3 de noviembre de 2026.",
          "[Página de privacidad de la IA de Trilium Notes](https://docs.triliumnotes.org/user-guide/llm/Privacy) — datos enviados según el tipo de proveedor, búsqueda web y MCP, consultado el 3 de noviembre de 2026.",
          "[Documentación del servidor de Trilium Notes](https://docs.triliumnotes.org/user-guide/setup/server) — opciones de instalación y configuración, consultado el 3 de noviembre de 2026.",
          "[Documentación de Docker de Trilium Notes](https://docs.triliumnotes.org/user-guide/setup/server/installation/docker) — imagen, puerto y advertencias, consultado el 3 de noviembre de 2026.",
          "[Trilium Notes en GitHub](https://github.com/TriliumNext/Trilium) — versiones, archivos y licencia, consultado el 3 de noviembre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Reseña de Logseq](/es/power-local-llm/logseq-review) — un outliner de código abierto, con enfoque local y servidor MCP opcional.",
          "[Reseña de SiYuan](/es/power-local-llm/siyuan-review) — un espacio de conocimiento autoalojado con agente de IA integrado.",
          "[Reseña de Tolaria](/es/power-local-llm/tolaria-review) — una app de notas de escritorio gratuita con archivos Markdown en una bóveda respaldada por Git.",
          "[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local."
        ]
      }
    }
  },
  fr: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-03",
    "dateModified": "2026-11-03",
    "next_refresh_due": "2027-05-03",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/trilium-notes-review-hero-fr.webp",
    "title": "Test de Trilium Notes : notes hiérarchiques gratuites avec IA facultative",
    "seoTitle": "Test de Trilium Notes : notes auto-hébergées et IA",
    "intro": "Trilium Notes est une appli de notes et une base de connaissances personnelle, gratuite et open source, qui fonctionne comme appli de bureau sur Mac, Windows et Linux ou comme serveur auto-hébergé ouvert dans un navigateur. Les notes s’organisent en arborescence, une même note peut figurer à plusieurs endroits, et un assistant IA facultatif peut dialoguer avec vos notes via un modèle local comme Ollama ou LM Studio, ou via un fournisseur cloud de votre choix. Ce test présente ce que l’on télécharge, ce que l’IA peut faire, où vont vos données et ce que les sources laissent ouvert.",
    "metaDescription": "Test de Trilium Notes : notes hiérarchiques gratuites (AGPL-3.0) pour Mac, Windows, Linux et serveur, avec IA facultative via Ollama, LM Studio ou cloud.",
    "twitterDescription": "Test de Trilium Notes : notes open source gratuites sur votre ordinateur ou votre serveur, avec IA facultative via Ollama, LM Studio ou le cloud. Ce que les sources confirment ou non.",
    "audience": "Utilisateurs de notes et auto-hébergeurs qui veulent savoir ce que coûte Trilium Notes, comment l’installer, ce que son IA facultative peut toucher et quelles affirmations les sources laissent ouvertes.",
    "readTime": "6 min de lecture",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "test Trilium Notes",
    "targetKeywords": [
      "test trilium notes",
      "appli trilium notes",
      "trilium notes ollama",
      "appli de notes auto-hébergée",
      "base de connaissances open source",
      "trilium ia chat",
      "trilium notes docker"
    ],
    "current_models_mentioned": [
      "Claude",
      "GPT",
      "Gemini",
      "DeepSeek"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**Trilium Notes (version 0.106.1, publiée le 23 octobre 2026) est une appli de notes et une base de connaissances personnelle gratuite sous licence AGPL-3.0 pour Mac, Windows, Linux et serveur auto-hébergé, avec un assistant IA facultatif désactivé tant que vous ne l’activez pas.** La réserve décisive : l’IA peut lire et modifier vos notes sans aucune couche d’autorisation, de sorte que le fournisseur choisi détermine où vont vos notes.",
    "quickAnswerTop": {
      "fr": {
        "question": "Trilium Notes peut-il utiliser un modèle local comme Ollama ?",
        "answer": "Oui, selon la documentation : une fois l’intégration IA activée, Ollama et LM Studio sont des fournisseurs pris en charge, et un fournisseur local garde chaque message sur la machine qui exécute le modèle. L’intégration ne fait rien tant que vous ne l’activez pas et ne configurez pas de fournisseur.",
        "bullets": [
          "Tout point d’accès compatible OpenAI peut être ajouté comme fournisseur personnalisé, par exemple OpenRouter, Groq ou Mistral.",
          "Un serveur MCP intégré, désactivé par défaut, permet à un agent externe comme Claude Code de travailler avec votre base de données via un jeton ETAPI.",
          "La recherche web et l’accès aux notes sont activés par défaut dans chaque conversation une fois l’IA activée, et peuvent être désactivés dans le sélecteur de modèle ; la recherche web envoie les termes de recherche du modèle à l’infrastructure de recherche propre au fournisseur."
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
        "label": "Qu’est-ce que Trilium Notes ?",
        "anchor": "what-is-trilium-notes"
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
            "text": "Trilium Notes est une appli de notes hiérarchique et une base de connaissances personnelle, gratuite et open source, pour le bureau ou un serveur auto-hébergé, avec chat IA facultatif."
          },
          {
            "type": "plain-terms",
            "text": "Vous gardez vos notes dans une arborescence sur votre propre ordinateur ou votre propre serveur, et vous pouvez laisser un assistant IA les chercher et les modifier avec un modèle sur votre machine ou un modèle cloud de votre choix."
          }
        ],
        "items": [
          "Maintenance : la version 0.106.1 est sortie le 23 octobre 2026 et le dépôt a été mis à jour le 3 novembre 2026, donc aucun avertissement de projet inactif ne s’applique.",
          "Coût : gratuit, sans offre payante, sans compte ni fonction verrouillée selon le créateur.",
          "IA : facultative et désactivée par défaut, avec des fournisseurs locaux (Ollama, LM Studio), des fournisseurs cloud et un serveur MCP intégré.",
          "Mobile : pas d’appli officielle pour téléphone ; le serveur offre un navigateur et une appli web installable, et une appli Android non officielle existe.",
          "Sécurité : les outils de notes de l’IA n’ont aucune gestion des autorisations, un assistant pourrait donc supprimer ou réorganiser des notes."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce test repose sur triliumnotes.org, la documentation, les versions GitHub et les données du dépôt, consultés le 3 novembre 2026. PromptQuorum n’a ni installé, ni exécuté, ni mesuré l’appli : la vitesse, la stabilité et la qualité des réponses ne sont pas évaluées."
          }
        ]
      },
      "overview": {
        "id": "what-is-trilium-notes",
        "title": "Qu’est-ce que Trilium Notes ?",
        "content": [
          "**Trilium Notes est une appli de notes construite autour d’une arborescence, où une même note peut être placée dans plusieurs branches.** Les mainteneurs sont Elian Doran et la communauté, qui prolongent le travail de zadam, que le site mentionne pour 2017 à 2024 ; le dépôt actuel est TriliumNext/Trilium.",
          "Le site cite des types de notes pour le texte, le Markdown, le code, les tableurs, le canevas, les diagrammes Mermaid, les cartes mentales et les fichiers, ainsi que des vues calendrier, tableau, Kanban, carte géographique, présentation et tableau de bord, des étiquettes et des relations, l’historique des révisions, un web clipper et une API REST. Le scripting utilise du JavaScript côté interface et côté serveur."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Où l’obtenir",
        "content": [
          "**Trilium Notes se télécharge gratuitement pour Mac, Windows et Linux, et le même projet fonctionne aussi comme serveur que vous hébergez vous-même ; les installateurs sont hébergés sur GitHub Releases.**"
        ],
        "columns": [
          "Option",
          "Comment l’obtenir"
        ],
        "rows": [
          {
            "Option": "Mac",
            "Comment l’obtenir": "[Trilium Notes sur GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), .dmg ou .zip Apple silicon ou Intel"
          },
          {
            "Option": "Windows",
            "Comment l’obtenir": "[Trilium Notes sur GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), .exe ou .zip x64 ou ARM64"
          },
          {
            "Option": "Linux",
            "Comment l’obtenir": "[Trilium Notes sur GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), AppImage, .deb, .rpm ou Flatpak x64 ou ARM64"
          },
          {
            "Option": "Serveur (Docker)",
            "Comment l’obtenir": "Image [triliumnext/trilium](https://hub.docker.com/r/triliumnext/trilium) ; `docker compose up -d`, port 8080"
          },
          {
            "Option": "Serveur (géré)",
            "Comment l’obtenir": "Hébergement tiers [PikaPods](https://www.pikapods.com/pods?run=trilium-next) ; pas encore de version cloud officielle"
          },
          {
            "Option": "Téléphone",
            "Comment l’obtenir": "Pas d’appli officielle ; serveur dans un navigateur ou en PWA. Non officielle : TriliumDroid (Android)"
          },
          {
            "Option": "Prix",
            "Comment l’obtenir": "Gratuit ; ni offre payante, ni compte, ni fonction verrouillée"
          },
          {
            "Option": "Site web",
            "Comment l’obtenir": "[triliumnotes.org](https://triliumnotes.org)"
          },
          {
            "Option": "Politique de confidentialité",
            "Comment l’obtenir": "[Politique de confidentialité](https://docs.triliumnotes.org/user-guide/misc/privacy-policy) ; [page confidentialité IA](https://docs.triliumnotes.org/user-guide/llm/Privacy)"
          },
          {
            "Option": "Code source",
            "Comment l’obtenir": "[GitHub, AGPL-3.0](https://github.com/TriliumNext/Trilium)"
          }
        ],
        "note": "Version testée : 0.106.1 (23 octobre 2026). Cette version est une mise à jour de sécurité pour le serveur et les images Docker : quiconque exécute le serveur doit l’installer. La documentation Docker déconseille la balise `latest`, qui peut vous faire passer à une nouvelle version mineure et perturber la synchro ; épinglez plutôt une balise de version."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Configuration requise",
        "content": [
          "**Les sources ne donnent aucune valeur minimale de système d’exploitation, de RAM ou d’espace disque pour l’appli de bureau.**"
        ],
        "columns": [
          "Élément",
          "Ce que disent les sources"
        ],
        "rows": [
          {
            "Élément": "Bureau",
            "Ce que disent les sources": "Versions Mac (Apple silicon et Intel), Windows (x64 et ARM64), Linux (x64 et ARM64) sur GitHub Releases"
          },
          {
            "Élément": "Serveur",
            "Ce que disent les sources": "Images Docker pour AMD64, ARMv7 et ARM64 ; archive de serveur Linux ; Kubernetes, Cloudron, NixOS et d’autres montages sont listés dans la doc"
          },
          {
            "Élément": "IA locale",
            "Ce que disent les sources": "Une installation distincte d’Ollama ou de LM Studio ; aucune taille de modèle ni exigence matérielle n’est indiquée"
          },
          {
            "Élément": "Compte",
            "Ce que disent les sources": "Aucun ; le créateur indique qu’il n’y a pas de comptes"
          }
        ],
        "note": "Selon la doc, le conteneur Docker standard exige les droits root ; une image sans root existe. Exposer le serveur sur internet demande les réglages HTTPS et d’authentification décrits dans la doc."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Pour bien démarrer",
        "content": [
          "**Les étapes suivent la documentation du créateur ; PromptQuorum ne les a pas exécutées.**"
        ],
        "numberedItems": [
          {
            "title": "Choisir bureau ou serveur",
            "whyItMatters": "Téléchargez l’installateur de votre système sur GitHub Releases, ou lancez l’image Docker si vous voulez un accès par navigateur et la synchro entre appareils."
          },
          {
            "title": "Épingler une version",
            "whyItMatters": "Avec Docker, utilisez une balise de version précise plutôt que latest, pour qu’une mise à jour automatique ne casse pas la synchro."
          },
          {
            "title": "Synchroniser si vous avez un serveur",
            "whyItMatters": "Reliez l’appli de bureau à votre propre serveur pour garder plusieurs appareils à jour ; la doc traite de la synchro dans ses pages Synchronization."
          },
          {
            "title": "N’activer l’IA que si vous la voulez",
            "whyItMatters": "L’intégration IA ne fait rien tant que vous ne l’activez pas et ne configurez pas de fournisseur ; choisissez Ollama ou LM Studio pour garder les notes sur votre machine."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions confirmées par les sources",
        "content": [
          "**Chaque point ci-dessous vient du site ou de la documentation du créateur ; aucun n’a été testé de façon indépendante.**"
        ],
        "items": [
          "**Arborescence avec clonage.** Les notes sont organisées hiérarchiquement et une même note peut apparaître à plusieurs endroits, avec étiquettes, relations et espaces de travail (hoisting).",
          "**Recherche.** Recherche approximative dans les titres et recherche plein texte, y compris le texte issu de la reconnaissance de caractères (OCR) des images et des PDF.",
          "**Notes protégées.** Certaines notes peuvent être chiffrées ; tout le reste est stocké sans chiffrement par défaut.",
          "**Publication et accès.** Une sous-arborescence de notes peut être publiée comme site en lecture seule (serveur uniquement), avec connexion multifacteur TOTP et OpenID Connect.",
          "**Chat IA et outils.** Chat avec vos notes, assistant capable de chercher et de modifier via des outils de notes intégrés, et serveur MCP pour des agents externes."
        ],
        "note": "La page confidentialité IA indique qu’un modèle local peut gérer les appels d’outils moins fiablement qu’un modèle cloud ; les sources ne donnent aucun chiffre de performance."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flux de données et confidentialité",
        "content": [
          "**Vos notes sont stockées dans une base SQLite locale, sans chiffrement sauf si vous marquez une note comme protégée ; les notes protégées utilisent AES-128-CBC.** Avec l’IA désactivée, la fonction IA n’envoie rien nulle part. La doc indique que le fournisseur choisi détermine où vont vos notes. La politique de confidentialité indique que Trilium Notes ne collecte ni n’envoie aucune donnée depuis votre installation et n’a ni analytique ni télémétrie ; l’appli interroge périodiquement la page des versions GitHub pour détecter une version stable plus récente, et télécharge des dictionnaires orthographiques selon les besoins.",
          "Avec un fournisseur cloud (Anthropic, OpenAI, Google, DeepSeek ou un point d’accès compatible OpenAI personnalisé), le contenu de notes que vous exposez part chez ce fournisseur ; avec Ollama ou LM Studio, la page confidentialité IA indique que chaque message reste sur la machine qui exécute le modèle. La recherche web, lorsqu’elle est activée, envoie les termes de recherche du modèle à l’infrastructure de recherche propre au fournisseur. Les pièces jointes sont envoyées au fournisseur sans prétraitement tel que l’OCR. Les outils de notes n’ont aucune gestion des autorisations : un modèle pourrait supprimer des notes ou encombrer votre arborescence ; les notes supprimées peuvent être restaurées et les modifications créent des révisions, mais les changements d’attributs n’ont pas d’historique. Le serveur MCP intégré est désactivé par défaut ; une fois activé, un jeton ETAPI donne le même accès complet en lecture et en écriture à vos notes que l’API REST."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce sont des déclarations du créateur, pas des résultats d’audit, et PromptQuorum n’a pas inspecté le trafic réseau. La politique de confidentialité ne nomme ni exploitant, ni adresse de contact, ni date de dernière mise à jour."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui s’adresse l’appli",
        "items": [
          "**Les auto-hébergeurs** qui veulent une base de connaissances gratuite sur leur propre serveur, avec synchro entre appareils.",
          "**Les utilisateurs d’Ollama et de LM Studio** qui veulent un assistant qui cherche et modifie leurs notes avec un modèle sur leur propre machine.",
          "**Les utilisateurs avancés** qui préfèrent les arborescences, les relations et le scripting JavaScript à un simple dossier de fichiers."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n’avons pas pu vérifier",
        "items": [
          "**Performances.** La vitesse avec de grandes bases, l’utilisation de la mémoire et la qualité des réponses des modèles locaux n’ont pas été testées.",
          "**Déclarations de confidentialité.** La politique et la page confidentialité IA sont des déclarations du créateur ; le trafic réseau, les aperçus de liens et le web clipper n’ont pas été examinés.",
          "**Mobile.** Il n’existe pas d’appli officielle pour téléphone, et l’appli Android non officielle n’a pas été examinée.",
          "**Configuration.** Aucune valeur minimale de système, de RAM ou de disque n’est publiée pour l’appli de bureau.",
          "**Limites de sécurité de l’IA.** La doc indique qu’il n’y a aucune gestion des autorisations pour les outils de notes, et la fiabilité avec laquelle un modèle reste dans le cadre d’une demande n’a pas été testée."
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
            "Appli": "[SiYuan](/fr/power-local-llm/siyuan-review)",
            "Plateformes": "Mac, Windows, Linux, iPhone, Android",
            "Prix / licence": "Gratuit + synchro payante / AGPL-3.0",
            "Différence clé": "Auto-hébergé, références par bloc, agent d’IA intégré"
          },
          {
            "Appli": "[Tolaria](/fr/power-local-llm/tolaria-review)",
            "Plateformes": "Mac, Windows, Linux",
            "Prix / licence": "Gratuit / AGPL-3.0-or-later",
            "Différence clé": "Fichiers Markdown dans un coffre géré par Git"
          }
        ],
        "note": "Vérifiez le prix, la licence et les plateformes de chaque appli sur sa propre page avant de choisir."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "Existe-t-il une appli Trilium Notes officielle pour iPhone ou Android ?",
            "a": "Non. Le serveur inclut une interface web mobile que vous pouvez installer comme appli web (PWA), et la communauté maintient une appli Android non officielle, TriliumDroid, qui d’après le site fonctionne hors ligne."
          },
          {
            "q": "Trilium Notes est-il le même projet que le Trilium d’origine de zadam ?",
            "a": "Il prolonge ce projet : le site mentionne zadam pour 2017 à 2024, puis Elian Doran et la communauté à partir de 2024. Le dépôt à utiliser est TriliumNext/Trilium."
          },
          {
            "q": "Quels fournisseurs d’IA Trilium Notes prend-il en charge ?",
            "a": "Anthropic, OpenAI, Google (Gemini) et DeepSeek avec des clés d’API, Claude Code comme seule option par abonnement que la documentation cite pour l’instant, Ollama et LM Studio en local, et tout point d’accès compatible OpenAI comme OpenRouter, Groq ou Mistral."
          },
          {
            "q": "À quel rythme Trilium Notes publie-t-il des versions ?",
            "a": "Les versions GitHub montrent 0.104.1 le 25 juillet, 0.105.0 le 19 août, 0.106.0 le 25 septembre et 0.106.1 le 23 octobre 2026, soit environ une version par mois."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Trilium Notes propose une base de connaissances arborescente gratuite sous AGPL-3.0 pour Mac, Windows, Linux et votre propre serveur, avec IA facultative via Ollama, LM Studio ou des fournisseurs cloud, et publie environ une version par mois. En contrepartie, la politique de confidentialité ne nomme ni exploitant ni contact, il n’y a pas d’appli officielle pour téléphone, les outils de notes de l’IA n’ont aucune gestion des autorisations, et la vitesse comme la qualité des réponses n’ont pas été testées. L’appli convient aux auto-hébergeurs et aux adeptes des arborescences et des relations qui laissent l’IA désactivée ou la dirigent vers un modèle local ; qui exige des garanties de confidentialité auditées doit considérer la documentation comme une déclaration, pas comme une preuve."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Site web de Trilium Notes](https://triliumnotes.org) — fonctions, plateformes, licence et résumé de l’IA, consulté le 3 novembre 2026.",
          "[Documentation IA de Trilium Notes](https://docs.triliumnotes.org/user-guide/llm) — fournisseurs, serveur MCP et avertissements, consultée le 3 novembre 2026.",
          "[Politique de confidentialité de Trilium Notes](https://docs.triliumnotes.org/user-guide/misc/privacy-policy) — collecte de données, télémétrie et vérifications de mise à jour, consultée le 3 novembre 2026.",
          "[Page confidentialité IA de Trilium Notes](https://docs.triliumnotes.org/user-guide/llm/Privacy) — données envoyées par type de fournisseur, recherche web et MCP, consultée le 3 novembre 2026.",
          "[Documentation serveur de Trilium Notes](https://docs.triliumnotes.org/user-guide/setup/server) — options d’installation et configuration, consultée le 3 novembre 2026.",
          "[Documentation Docker de Trilium Notes](https://docs.triliumnotes.org/user-guide/setup/server/installation/docker) — image, port et avertissements, consultée le 3 novembre 2026.",
          "[Trilium Notes sur GitHub](https://github.com/TriliumNext/Trilium) — versions, fichiers et licence, consultés le 3 novembre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "À lire aussi",
        "items": [
          "[Test de Logseq](/fr/power-local-llm/logseq-review) — un outliner open source, local d’abord, avec serveur MCP facultatif.",
          "[Test de SiYuan](/fr/power-local-llm/siyuan-review) — un espace de connaissances auto-hébergé avec agent d’IA intégré.",
          "[Test de Tolaria](/fr/power-local-llm/tolaria-review) — une appli de notes de bureau gratuite avec fichiers Markdown dans un coffre géré par Git.",
          "[Répertoire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale."
        ]
      }
    }
  },
  ja: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-03",
    "dateModified": "2026-11-03",
    "next_refresh_due": "2027-05-03",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/trilium-notes-review-hero-ja.webp",
    "title": "Trilium Notesレビュー：任意のAIを備えた無料の階層型ノート",
    "seoTitle": "Trilium Notesレビュー：無料のセルフホスト対応ノートとAI",
    "intro": "Trilium Notesは、無料のオープンソースのノートアプリ兼個人ナレッジベースです。Mac、Windows、Linuxのデスクトップアプリとして、または自分でホストしてブラウザで開くサーバーとして動作します。ノートは階層ツリーに並び、1つのノートを複数の場所に置けます。任意のAIアシスタントは、OllamaやLM Studioなどのローカルモデル、または自分で選んだクラウドプロバイダー経由でノートとチャットできます。このレビューでは、入手するもの、AIにできること、データの行き先、情報源が確認していない点を扱います。",
    "metaDescription": "Trilium Notesのレビュー。Mac・Windows・Linuxと自前サーバーで使える無料のAGPL-3.0階層型ノート。Ollama、LM Studio、クラウド経由の任意のAIに対応。",
    "twitterDescription": "Trilium Notesレビュー：デスクトップや自前サーバーで使える無料のオープンソースノートと、Ollama、LM Studio、クラウド経由の任意のAI。情報源が確認していること、していないこと。",
    "audience": "Trilium Notesの費用、インストール方法、任意のAIが触れる範囲、情報源が確認していない主張を知りたいノート利用者とセルフホスト派の方。",
    "readTime": "6分で読める",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Trilium Notes レビュー",
    "targetKeywords": [
      "trilium notes レビュー",
      "trilium notes アプリ",
      "trilium notes ollama",
      "セルフホスト ノートアプリ",
      "オープンソース ナレッジベース アプリ",
      "trilium ai チャット",
      "trilium notes docker"
    ],
    "current_models_mentioned": [
      "Claude",
      "GPT",
      "Gemini",
      "DeepSeek"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**Trilium Notes（バージョン0.106.1、2026年10月23日公開）は、Mac、Windows、Linux、セルフホストサーバー向けの無料のAGPL-3.0ノートアプリ兼個人ナレッジベースで、任意のAIアシスタントは自分でオンにするまで無効です。**最大の注意点は、AIが権限の仕組みなしでノートを読み書きできることです。そのため、どのプロバイダーを選ぶかでノートの行き先が決まります。",
    "quickAnswerTop": {
      "ja": {
        "question": "Trilium NotesでOllamaなどのローカルモデルは使えますか？",
        "answer": "はい、ドキュメントによると使えます。AI連携を有効にすると、OllamaとLM Studioが対応プロバイダーとなり、ローカルプロバイダーならすべてのメッセージがモデルを動かすマシン上にとどまるとされています。AI連携は、有効にしてプロバイダーを設定するまで何もしません。",
        "bullets": [
          "OpenRouter、Groq、MistralなどOpenAI互換のエンドポイントは、カスタムプロバイダーとして追加できます。",
          "内蔵のMCPサーバーは初期状態ではオフで、有効にすると、Claude Codeなどの外部エージェントがETAPIトークン経由でデータベースを操作できます。",
          "AIを有効にすると、Web検索とノートアクセスはチャットごとに初期状態でオンで、モデル選択画面でオフにできます。Web検索では、モデルの検索語がプロバイダー自身の検索基盤に送られます。"
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
        "label": "Trilium Notesとは",
        "anchor": "what-is-trilium-notes"
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
            "text": "Trilium Notesは、デスクトップまたはセルフホストサーバーで使える、無料のオープンソース階層型ノートアプリ兼個人ナレッジベースで、任意のAIチャットに対応します。"
          },
          {
            "type": "plain-terms",
            "text": "ノートは自分のパソコンか自分のサーバー上のツリーに保存され、自分のマシン上のモデルでも自分で選んだクラウドモデルでも、AIアシスタントにノートを検索・編集させられます。"
          }
        ],
        "items": [
          "メンテナンス：バージョン0.106.1は2026年10月23日に公開され、リポジトリは2026年11月3日に更新されたため、更新停止の警告は付きません。",
          "費用：開発者によると無料で、有料プラン、アカウント、機能の有料制限はありません。",
          "AI：任意で、初期状態ではオフです。ローカルプロバイダー（Ollama、LM Studio）、クラウドプロバイダー、内蔵のMCPサーバーに対応します。",
          "モバイル：公式のスマートフォンアプリはありません。サーバーがブラウザとインストール可能なWebアプリを提供し、非公式のAndroidアプリがあります。",
          "安全性：AIのノートツールには権限管理がないため、アシスタントがノートを削除したり並べ替えたりする可能性があります。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "このレビューは、2026年11月3日に確認したtriliumnotes.org、ドキュメント、GitHubのリリースとリポジトリのデータに基づきます。PromptQuorumはアプリをインストール・実行・計測していないため、速度、安定性、回答品質は評価していません。"
          }
        ]
      },
      "overview": {
        "id": "what-is-trilium-notes",
        "title": "Trilium Notesとは",
        "content": [
          "**Trilium Notesは、ノートのツリーを軸に作られたノートアプリで、1つのノートをツリーの複数の枝に置けます。**メンテナーはElian Doranとコミュニティで、サイトが2017年から2024年の担当として挙げるzadamの先行作業を土台にしています。現在のリポジトリはTriliumNext/Triliumです。",
          "サイトによると、ノートの種類はテキスト、Markdown、コード、スプレッドシート、キャンバス、Mermaid図、マインドマップ、ファイルで、カレンダー、テーブル、カンバン、地図、プレゼンテーション、ダッシュボードの表示、ラベルとリレーション、ノートのリビジョン、Webクリッパー、REST APIも備えます。スクリプトはフロントエンドとバックエンドのJavaScriptで書きます。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "入手方法",
        "content": [
          "**Trilium NotesはMac、Windows、Linux向けに無料でダウンロードでき、同じプロジェクトを自分でホストするサーバーとしても動かせます。インストーラーはGitHub Releasesに置かれています。**"
        ],
        "columns": [
          "項目",
          "入手方法"
        ],
        "rows": [
          {
            "項目": "Mac",
            "入手方法": "[GitHub ReleasesのTrilium Notes](https://github.com/TriliumNext/Trilium/releases/latest)、Apple siliconまたはIntel用の.dmgか.zip"
          },
          {
            "項目": "Windows",
            "入手方法": "[GitHub ReleasesのTrilium Notes](https://github.com/TriliumNext/Trilium/releases/latest)、x64またはARM64用の.exeか.zip"
          },
          {
            "項目": "Linux",
            "入手方法": "[GitHub ReleasesのTrilium Notes](https://github.com/TriliumNext/Trilium/releases/latest)、x64またはARM64用のAppImage、.deb、.rpm、Flatpak"
          },
          {
            "項目": "サーバー（Docker）",
            "入手方法": "Docker Hubのイメージ[triliumnext/trilium](https://hub.docker.com/r/triliumnext/trilium)、`docker compose up -d`、ポート8080"
          },
          {
            "項目": "サーバー（マネージド）",
            "入手方法": "第三者の[PikaPods](https://www.pikapods.com/pods?run=trilium-next)ホスティング。公式のクラウド版はまだなし"
          },
          {
            "項目": "スマートフォン",
            "入手方法": "公式アプリなし。サーバーをブラウザかPWAで利用。非公式：TriliumDroid（Android）"
          },
          {
            "項目": "価格",
            "入手方法": "無料。有料プラン、アカウント、機能の有料制限なし"
          },
          {
            "項目": "公式サイト",
            "入手方法": "[triliumnotes.org](https://triliumnotes.org)"
          },
          {
            "項目": "プライバシーポリシー",
            "入手方法": "[プライバシーポリシー](https://docs.triliumnotes.org/user-guide/misc/privacy-policy)、[AIプライバシーページ](https://docs.triliumnotes.org/user-guide/llm/Privacy)"
          },
          {
            "項目": "ソースコード",
            "入手方法": "[GitHub、AGPL-3.0](https://github.com/TriliumNext/Trilium)"
          }
        ],
        "note": "確認したバージョン：0.106.1（2026年10月23日）。このリリースはサーバーとDockerイメージ向けのセキュリティ更新のため、サーバーを動かしている場合はこのバージョンにしておく必要があります。Dockerのドキュメントは、latestタグだと新しいマイナーバージョンに移って同期が乱れる可能性があるとして推奨していません。バージョンタグを固定してください。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "動作要件",
        "content": [
          "**デスクトップアプリについて、最低OSバージョン、RAM、ディスク容量の数値は情報源に記載がありません。**"
        ],
        "columns": [
          "項目",
          "情報源の記載"
        ],
        "rows": [
          {
            "項目": "デスクトップ",
            "情報源の記載": "GitHub Releasesに、Mac（Apple siliconとIntel）、Windows（x64とARM64）、Linux（x64とARM64）のビルドあり"
          },
          {
            "項目": "サーバー",
            "情報源の記載": "AMD64、ARMv7、ARM64用のDockerイメージ、パッケージ化されたLinuxサーバーのアーカイブ。Kubernetes、Cloudron、NixOSなどの構成もドキュメントに記載"
          },
          {
            "項目": "ローカルAI",
            "情報源の記載": "別途OllamaまたはLM Studioのインストールが必要。モデルのサイズやハードウェアの数値は示されていません"
          },
          {
            "項目": "アカウント",
            "情報源の記載": "不要。開発者はアカウントがないと述べています"
          }
        ],
        "note": "ドキュメントによると、標準のDockerコンテナは動作にroot権限が必要です。rootlessイメージもあります。サーバーをインターネットに公開する場合は、ドキュメントが説明するHTTPSと認証の設定が必要です。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "使い始めるには",
        "content": [
          "**手順は開発者のドキュメントに沿ったもので、PromptQuorumは実行していません。**"
        ],
        "numberedItems": [
          {
            "title": "デスクトップかサーバーかを選ぶ",
            "whyItMatters": "お使いのシステム用のインストーラーをGitHub Releasesからダウンロードします。ブラウザからのアクセスと複数端末の同期が必要なら、Dockerイメージを動かします。"
          },
          {
            "title": "バージョンを固定する",
            "whyItMatters": "Dockerでは、自動アップグレードで同期が壊れないよう、latestではなく特定のバージョンタグを使います。"
          },
          {
            "title": "サーバーを動かす場合は同期する",
            "whyItMatters": "デスクトップアプリを自分のサーバーに接続すると複数端末を同じ状態に保てます。同期についてはドキュメントのSynchronizationのページにあります。"
          },
          {
            "title": "AIは使いたい場合だけ有効にする",
            "whyItMatters": "AI連携は、有効にしてプロバイダーを設定するまで何もしません。ノートをマシン上に留めたいなら、OllamaかLM Studioを選びます。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "情報源で確認できた機能",
        "content": [
          "**以下の項目はすべて、開発者の公式サイトまたはドキュメントに基づくもので、独立した検証は行っていません。**"
        ],
        "items": [
          "**クローン対応のツリー。**ノートは階層構造で整理され、1つのノートを複数の場所に表示でき、ラベル、リレーション、ワークスペース（ホイスティング）もあります。",
          "**検索。**あいまいなタイトル検索と全文検索に対応し、画像やPDFのOCRテキストも対象です。",
          "**保護ノート。**選んだノートは暗号化できます。それ以外は初期状態で暗号化されずに保存されます。",
          "**公開とアクセス。**ノートのサブツリーを読み取り専用のWebサイトとして公開でき（サーバーのみ）、TOTPの多要素認証とOpenID Connectによるサインインに対応します。",
          "**AIチャットとツール。**ノートとのチャット、内蔵のノートツールで検索・編集できるアシスタント、外部エージェント向けのMCPサーバーがあります。"
        ],
        "note": "AIプライバシーページによると、ローカルモデルはクラウドモデルよりツール呼び出しの信頼性が低い場合があります。情報源に性能の数値はありません。"
      },
      "privacy": {
        "id": "privacy",
        "title": "データの流れとプライバシー",
        "content": [
          "**ノートはローカルのSQLiteデータベースに保存され、保護ノートに指定しない限り暗号化されません。保護ノートはAES-128-CBCを使います。**AIをオフにしている間、AI機能がデータをどこかへ送ることはありません。ドキュメントによると、選んだプロバイダーがノートの行き先を決めます。プライバシーポリシーによると、Trilium Notesはインストール環境からデータを収集・送信せず、アナリティクスやテレメトリもありません。ただしアプリは新しい安定版を確認するため定期的にGitHubのリリースページへ問い合わせ、スペルチェック辞書を必要に応じてダウンロードします。",
          "クラウドプロバイダー（Anthropic、OpenAI、Google、DeepSeek、またはカスタムのOpenAI互換エンドポイント）を使うと、公開したノートの内容はそのプロバイダーに送られます。OllamaやLM Studioなら、AIプライバシーページによるとすべてのメッセージはモデルを動かすマシン上にとどまります。Web検索を有効にすると、モデルの検索語がプロバイダー自身の検索基盤に送られます。添付ファイルは、OCRなどの前処理なしでプロバイダーに送られます。ノートツールには権限管理がないため、モデルがノートを削除したりツリーを散らかしたりする可能性があります。削除したノートは復元でき、編集はリビジョンを残しますが、属性の変更には履歴がありません。内蔵のMCPサーバーは初期状態ではオフで、有効にするとETAPIトークンによってREST APIと同じ完全な読み書きアクセスがノートに与えられます。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "これらは開発者の説明であり、監査結果ではありません。PromptQuorumはネットワーク通信を検査していません。プライバシーポリシーには、運営者、連絡先、最終更新日の記載がありません。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "おすすめできる人",
        "items": [
          "**セルフホスト派**：自分のサーバー上で、複数端末で同期できる無料のナレッジベースが欲しい方。",
          "**OllamaとLM Studioのユーザー**：自分のマシン上のモデルでノートを検索・編集するアシスタントが欲しい方。",
          "**パワーユーザー**：ファイルのフォルダよりも、ツリー、リレーション、JavaScriptのスクリプトを好む方。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかった点",
        "items": [
          "**性能。**大規模なデータベースでの速度、メモリ使用量、ローカルモデルの回答品質は未検証です。",
          "**プライバシーに関する記述。**ポリシーとAIプライバシーページは開発者の申告であり、ネットワーク通信、リンクプレビュー、Webクリッパーは検証していません。",
          "**モバイル。**公式のスマートフォンアプリはなく、非公式のAndroidアプリも調べていません。",
          "**動作要件。**デスクトップアプリの最低OS、RAM、ディスク容量は公表されていません。",
          "**AIの安全の限界。**ドキュメントはノートツールに権限管理がないと明記しており、モデルが依頼の範囲内にどれだけ確実に収まるかは未検証です。"
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
            "アプリ": "[SiYuan](/ja/power-local-llm/siyuan-review)",
            "対応環境": "Mac、Windows、Linux、iPhone、Android",
            "価格／ライセンス": "無料＋有料同期／AGPL-3.0",
            "主な違い": "セルフホスト型、ブロック単位の参照、内蔵AIエージェント"
          },
          {
            "アプリ": "[Tolaria](/ja/power-local-llm/tolaria-review)",
            "対応環境": "Mac、Windows、Linux",
            "価格／ライセンス": "無料／AGPL-3.0-or-later",
            "主な違い": "Git管理のVaultにMarkdownファイルを保存"
          }
        ],
        "note": "選ぶ前に、各アプリの現在の価格、ライセンス、対応環境を、それぞれのページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "iPhoneやAndroid向けのTrilium Notes公式アプリはありますか？",
            "a": "ありません。サーバーにはモバイル用のWebフロントエンドが含まれ、Webアプリ（PWA）としてインストールできます。また、コミュニティが非公式のAndroidアプリTriliumDroidを提供しており、サイトによるとオフラインで動作します。"
          },
          {
            "q": "Trilium Notesは、zadamによる元のTriliumと同じものですか？",
            "a": "そのプロジェクトを土台にしています。サイトは2017年から2024年をzadamに、2024年以降をElian Doranとコミュニティに帰しています。使うべきリポジトリはTriliumNext/Triliumです。"
          },
          {
            "q": "Trilium Notesはどのチャットプロバイダーに対応していますか？",
            "a": "APIキーを使うAnthropic、OpenAI、Google（Gemini）、DeepSeek、現時点でドキュメントが挙げる唯一のサブスクリプション型であるClaude Code、ローカルのOllamaとLM Studio、そしてOpenRouter、Groq、MistralなどOpenAI互換のエンドポイントです。"
          },
          {
            "q": "Trilium Notesはどのくらいの頻度でリリースされますか？",
            "a": "GitHubのリリースでは、0.104.1が7月25日、0.105.0が8月19日、0.106.0が9月25日、0.106.1が2026年10月23日で、おおむね月に1回です。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "総評",
        "content": "Trilium Notesは、Mac、Windows、Linux、自前サーバー向けの無料のAGPL-3.0ツリー型ナレッジベースで、Ollama、LM Studio、クラウドプロバイダー経由の任意のAIに対応し、おおむね月に1回リリースされています。一方で、プライバシーポリシーに運営者や連絡先の記載がなく、公式のスマートフォンアプリもなく、AIのノートツールに権限管理がなく、速度と回答品質は未検証です。AIをオフにするかローカルモデルに向けて使うセルフホスト派や、ツリーとリレーションでノートを取る方に向いています。監査済みのプライバシー保証が必要な方は、ドキュメントを証拠ではなく申告として扱ってください。"
      },
      "sources": {
        "id": "sources",
        "title": "情報源",
        "items": [
          "[Trilium Notesのウェブサイト](https://triliumnotes.org) — 機能、対応環境、ライセンス、AIの概要。2026年11月3日確認。",
          "[Trilium NotesのAIドキュメント](https://docs.triliumnotes.org/user-guide/llm) — プロバイダー、MCPサーバー、注意事項。2026年11月3日確認。",
          "[Trilium Notesのプライバシーポリシー](https://docs.triliumnotes.org/user-guide/misc/privacy-policy) — データ収集、テレメトリ、更新確認。2026年11月3日確認。",
          "[Trilium NotesのAIプライバシーページ](https://docs.triliumnotes.org/user-guide/llm/Privacy) — プロバイダー種別ごとの送信データ、Web検索、MCP。2026年11月3日確認。",
          "[Trilium Notesのサーバードキュメント](https://docs.triliumnotes.org/user-guide/setup/server) — インストール方法と設定。2026年11月3日確認。",
          "[Trilium NotesのDockerドキュメント](https://docs.triliumnotes.org/user-guide/setup/server/installation/docker) — イメージ、ポート、注意事項。2026年11月3日確認。",
          "[GitHubのTrilium Notes](https://github.com/TriliumNext/Trilium) — リリース、アセット、ライセンス。2026年11月3日確認。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[Logseqレビュー](/ja/power-local-llm/logseq-review) — 任意のMCPサーバーを備えた、オープンソースのローカルファーストなアウトライナー。",
          "[SiYuanレビュー](/ja/power-local-llm/siyuan-review) — 内蔵AIエージェントを備えたセルフホスト型ナレッジワークスペース。",
          "[Tolariaレビュー](/ja/power-local-llm/tolaria-review) — Git管理のVaultにMarkdownファイルを置く、無料のデスクトップノートアプリ。",
          "[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。"
        ]
      }
    }
  },
  pt: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-03",
    "dateModified": "2026-11-03",
    "next_refresh_due": "2027-05-03",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/trilium-notes-review-hero-pt.webp",
    "title": "Análise do Trilium Notes: notas hierárquicas grátis com IA opcional",
    "seoTitle": "Análise do Trilium Notes: notas grátis e auto-hospedadas",
    "intro": "O Trilium Notes é um app de notas gratuito e de código aberto, além de uma base de conhecimento pessoal, que roda como app para Mac, Windows e Linux ou como um servidor próprio acessado pelo navegador. As notas ficam em uma árvore hierárquica, uma nota pode existir em vários lugares, e um assistente de IA opcional pode conversar com as suas notas por meio de um modelo local, como Ollama ou LM Studio, ou de um provedor na nuvem que você escolher. Esta análise mostra o que você baixa, o que a IA pode fazer, para onde vão os seus dados e o que as fontes deixam em aberto.",
    "metaDescription": "Análise do Trilium Notes: notas hierárquicas grátis (AGPL-3.0) para Mac, Windows, Linux e servidor próprio, com IA opcional via Ollama, LM Studio ou nuvem.",
    "twitterDescription": "Análise do Trilium Notes: notas de código aberto grátis no computador ou no seu servidor, com IA opcional via Ollama, LM Studio ou provedores na nuvem. O que as fontes confirmam e o que não confirmam.",
    "audience": "Pessoas que anotam e quem hospeda os próprios serviços e querem saber quanto custa o Trilium Notes, como ele se instala, o que a IA opcional pode acessar e que afirmações as fontes deixam em aberto.",
    "readTime": "6 min de leitura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "análise do Trilium Notes",
    "targetKeywords": [
      "análise trilium notes",
      "app trilium notes",
      "trilium notes ollama",
      "app de notas auto-hospedado",
      "base de conhecimento de código aberto",
      "trilium notes ia chat",
      "trilium notes docker"
    ],
    "current_models_mentioned": [
      "Claude",
      "GPT",
      "Gemini",
      "DeepSeek"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**O Trilium Notes (versão 0.106.1, lançada em 23 de outubro de 2026) é um app de notas e base de conhecimento pessoal gratuito, sob AGPL-3.0, para Mac, Windows, Linux e servidor próprio, com um assistente de IA opcional que fica desligado até você ativá-lo.** O alerta decisivo é que a IA pode ler e editar as suas notas sem nenhuma camada de permissões, então o provedor escolhido define para onde as notas vão.",
    "quickAnswerTop": {
      "pt": {
        "question": "O Trilium Notes consegue usar um modelo local, como o Ollama?",
        "answer": "Sim, segundo a documentação: com a integração de IA ativada, Ollama e LM Studio são provedores compatíveis e um provedor local mantém cada mensagem na máquina que executa o modelo. A integração não faz nada até você ativá-la e configurar um provedor.",
        "bullets": [
          "Qualquer endpoint compatível com a API da OpenAI pode entrar como provedor personalizado, como OpenRouter, Groq ou Mistral.",
          "Um servidor MCP embutido, desligado por padrão, permite que um agente externo, como o Claude Code, trabalhe com o seu banco de dados por meio de um token ETAPI.",
          "Busca na web e acesso às notas vêm ativados por padrão em cada chat depois que a IA é ligada, e podem ser desligados no seletor de modelo; a busca na web envia os termos de busca do modelo à infraestrutura de busca do próprio provedor."
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
        "label": "O que é o Trilium Notes?",
        "anchor": "what-is-trilium-notes"
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
            "text": "O Trilium Notes é um app de notas hierárquico, gratuito e de código aberto, e uma base de conhecimento pessoal, para computador ou servidor próprio, com chat de IA opcional."
          },
          {
            "type": "plain-terms",
            "text": "Você guarda as notas em uma árvore no seu computador ou no seu servidor e pode deixar um assistente de IA buscar e editar essas notas, usando um modelo na sua máquina ou um modelo na nuvem à sua escolha."
          }
        ],
        "items": [
          "Manutenção: a versão 0.106.1 foi lançada em 23 de outubro de 2026 e o repositório foi atualizado em 3 de novembro de 2026, então não há aviso de projeto parado.",
          "Custo: gratuito, sem planos pagos, contas nem recursos bloqueados, segundo o criador.",
          "IA: opcional e desligada por padrão, com provedores locais (Ollama, LM Studio), provedores na nuvem e um servidor MCP embutido.",
          "Celular: não há app oficial; o servidor oferece acesso pelo navegador e um app web instalável, e existe um app Android não oficial.",
          "Segurança: as ferramentas de notas da IA não têm gerenciamento de permissões, então um assistente poderia apagar ou reorganizar notas."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta análise se baseia em triliumnotes.org, na documentação, nas versões do GitHub e nos dados do repositório, conferidos em 3 de novembro de 2026. A PromptQuorum não instalou, executou nem mediu o desempenho do app, então velocidade, estabilidade e qualidade das respostas não foram avaliadas."
          }
        ]
      },
      "overview": {
        "id": "what-is-trilium-notes",
        "title": "O que é o Trilium Notes?",
        "content": [
          "**O Trilium Notes é um app de notas construído em torno de uma árvore de notas, em que uma mesma nota pode ser colocada em vários ramos da árvore.** Os mantenedores são Elian Doran e a comunidade, que se baseiam no trabalho anterior de zadam, a quem o site atribui o período de 2017 a 2024; o repositório atual é o TriliumNext/Trilium.",
          "O site lista tipos de nota para texto, Markdown, código, planilhas, canvas, diagramas Mermaid, mapas mentais e arquivos, além de visões de calendário, tabela, Kanban, mapa, apresentação e painel, rótulos e relações, revisões de notas, um web clipper e uma API REST. Os scripts usam JavaScript no frontend e no backend."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Onde obter",
        "content": [
          "**O Trilium Notes pode ser baixado de graça para Mac, Windows e Linux, e o mesmo projeto também roda como um servidor que você hospeda; os instaladores ficam no GitHub Releases.**"
        ],
        "columns": [
          "Opção",
          "Como obter"
        ],
        "rows": [
          {
            "Opção": "Mac",
            "Como obter": "[Trilium Notes no GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), .dmg ou .zip para Apple silicon ou Intel"
          },
          {
            "Opção": "Windows",
            "Como obter": "[Trilium Notes no GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), .exe ou .zip para x64 ou ARM64"
          },
          {
            "Opção": "Linux",
            "Como obter": "[Trilium Notes no GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest), AppImage, .deb, .rpm ou Flatpak para x64 ou ARM64"
          },
          {
            "Opção": "Servidor (Docker)",
            "Como obter": "Imagem [triliumnext/trilium](https://hub.docker.com/r/triliumnext/trilium); `docker compose up -d`, porta 8080"
          },
          {
            "Opção": "Servidor (gerenciado)",
            "Como obter": "Hospedagem de terceiros [PikaPods](https://www.pikapods.com/pods?run=trilium-next); ainda sem nuvem oficial"
          },
          {
            "Opção": "Celular",
            "Como obter": "Sem app oficial; use o servidor no navegador ou como PWA. Não oficial: TriliumDroid (Android)"
          },
          {
            "Opção": "Preço",
            "Como obter": "Grátis; sem planos pagos, contas nem recursos bloqueados"
          },
          {
            "Opção": "Site",
            "Como obter": "[triliumnotes.org](https://triliumnotes.org)"
          },
          {
            "Opção": "Política de privacidade",
            "Como obter": "[Política de privacidade](https://docs.triliumnotes.org/user-guide/misc/privacy-policy); [página de privacidade da IA](https://docs.triliumnotes.org/user-guide/llm/Privacy)"
          },
          {
            "Opção": "Código-fonte",
            "Como obter": "[GitHub, AGPL-3.0](https://github.com/TriliumNext/Trilium)"
          }
        ],
        "note": "Versão analisada: 0.106.1 (23 de outubro de 2026). Essa versão é uma atualização de segurança para o servidor e as imagens Docker, então quem roda o servidor deve estar nela. A documentação do Docker desaconselha a tag `latest`, porque ela pode levar você a uma nova versão secundária e atrapalhar a sincronização; fixe uma tag de versão."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**As fontes não informam requisitos mínimos de sistema operacional, RAM ou disco para o app de computador.**"
        ],
        "columns": [
          "Item",
          "O que as fontes dizem"
        ],
        "rows": [
          {
            "Item": "Computador",
            "O que as fontes dizem": "Versões para Mac (Apple silicon e Intel), Windows (x64 e ARM64) e Linux (x64 e ARM64) no GitHub Releases"
          },
          {
            "Item": "Servidor",
            "O que as fontes dizem": "Imagens Docker para AMD64, ARMv7 e ARM64; um arquivo de servidor Linux empacotado; Kubernetes, Cloudron, NixOS e outras instalações constam na documentação"
          },
          {
            "Item": "IA local",
            "O que as fontes dizem": "Uma instalação separada do Ollama ou do LM Studio; não há tamanho de modelo nem requisitos de hardware"
          },
          {
            "Item": "Conta",
            "O que as fontes dizem": "Nenhuma; o criador afirma que não há contas"
          }
        ],
        "note": "O contêiner Docker padrão exige privilégios de root, segundo a documentação; existe uma imagem sem root. Expor o servidor à internet exige as configurações de HTTPS e autenticação descritas na documentação."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Como começar",
        "content": [
          "**Os passos seguem a documentação do criador; a PromptQuorum não os executou.**"
        ],
        "numberedItems": [
          {
            "title": "Escolha computador ou servidor",
            "whyItMatters": "Baixe o instalador do seu sistema no GitHub Releases ou rode a imagem Docker se quiser acesso pelo navegador e sincronização entre dispositivos."
          },
          {
            "title": "Fixe uma versão",
            "whyItMatters": "No Docker, use uma tag de versão específica em vez de latest, para que uma atualização automática não quebre a sincronização."
          },
          {
            "title": "Sincronize se rodar um servidor",
            "whyItMatters": "Conecte o app de computador ao seu servidor para manter vários dispositivos alinhados; a documentação trata da sincronização nas páginas Synchronization."
          },
          {
            "title": "Ative a IA só se quiser",
            "whyItMatters": "A integração de IA não faz nada até você ativá-la e configurar um provedor; escolha Ollama ou LM Studio para manter as notas na sua máquina."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos confirmados pelas fontes",
        "content": [
          "**Todos os itens abaixo vêm do site ou da documentação do criador; nenhum foi testado de forma independente.**"
        ],
        "items": [
          "**Árvore com clonagem.** As notas são organizadas de forma hierárquica e uma nota pode aparecer em vários lugares, com rótulos, relações e espaços de trabalho (hoisting).",
          "**Busca.** Busca aproximada por título e busca em texto completo, incluindo texto extraído por OCR de imagens e PDFs.",
          "**Notas protegidas.** Notas selecionadas podem ser criptografadas; todo o resto é armazenado sem criptografia por padrão.",
          "**Publicação e acesso.** Uma subárvore de notas pode ser publicada como site somente leitura (apenas no servidor), com login em duas etapas por TOTP e OpenID Connect.",
          "**Chat de IA e ferramentas.** Chat com as suas notas, um assistente que pode buscar e editar por meio de ferramentas de notas embutidas e um servidor MCP para agentes externos."
        ],
        "note": "A página de privacidade da IA diz que um modelo local pode lidar com chamadas de ferramentas de forma menos confiável do que um modelo na nuvem; as fontes não trazem números de desempenho."
      },
      "privacy": {
        "id": "privacy",
        "title": "Fluxo de dados e privacidade",
        "content": [
          "**As suas notas ficam em um banco de dados SQLite local, sem criptografia, a menos que você marque uma nota como protegida; as notas protegidas usam AES-128-CBC.** Com a IA desligada, a função de IA não envia nada a lugar nenhum. A documentação diz que o provedor escolhido determina para onde as notas vão. A política de privacidade diz que o Trilium Notes não coleta nem envia dados da sua instalação e não tem análises nem telemetria; o app consulta periodicamente a página de versões do GitHub para verificar se há uma versão estável mais nova e baixa dicionários de ortografia conforme necessário.",
          "Com um provedor na nuvem (Anthropic, OpenAI, Google, DeepSeek ou um endpoint personalizado compatível com a API da OpenAI), o conteúdo das notas que você expõe vai para esse provedor; com Ollama ou LM Studio, a página de privacidade da IA diz que cada mensagem permanece na máquina que executa o modelo. A busca na web, quando ativada, envia os termos de busca do modelo à infraestrutura de busca do próprio provedor. Os anexos são enviados ao provedor sem pré-processamento, como OCR. As ferramentas de notas não têm gerenciamento de permissões, então um modelo poderia apagar notas ou bagunçar a sua árvore; notas apagadas podem ser restauradas e as edições criam revisões, mas alterações de atributos não têm histórico. O servidor MCP embutido vem desligado por padrão; quando ativado, um token ETAPI dá o mesmo acesso total de leitura e escrita às suas notas que a API REST."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Estas são declarações do criador, não resultados de auditoria, e a PromptQuorum não inspecionou o tráfego de rede. A política de privacidade não nomeia um operador, um endereço de contato nem uma data de atualização."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem é",
        "items": [
          "**Quem hospeda os próprios serviços** e quer uma base de conhecimento gratuita no próprio servidor, com sincronização entre dispositivos.",
          "**Usuários de Ollama e LM Studio** que querem um assistente que busca e edita as notas com um modelo na própria máquina.",
          "**Usuários avançados** que preferem árvores, relações e scripts em JavaScript a uma simples pasta de arquivos."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Desempenho.** Velocidade com bancos de dados grandes, uso de memória e qualidade das respostas de modelos locais não foram testados.",
          "**Declarações de privacidade.** A política e a página de privacidade da IA são declarações do criador; o tráfego de rede, as prévias de links e o web clipper não foram examinados.",
          "**Celular.** Não há app oficial para celular, e o app Android não oficial não foi examinado.",
          "**Requisitos.** Não há requisitos mínimos de SO, RAM ou disco publicados para o app de computador.",
          "**Limites de segurança da IA.** A documentação afirma que não há gerenciamento de permissões para as ferramentas de notas, e não foi testado com que confiabilidade um modelo se mantém dentro do pedido."
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
            "App": "[SiYuan](/pt/power-local-llm/siyuan-review)",
            "Plataformas": "Mac, Windows, Linux, iPhone, Android",
            "Preço / licença": "Grátis + sincronização paga / AGPL-3.0",
            "Diferença principal": "Auto-hospedado, referências em nível de bloco, agente de IA embutido"
          },
          {
            "App": "[Tolaria](/pt/power-local-llm/tolaria-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Preço / licença": "Grátis / AGPL-3.0-or-later",
            "Diferença principal": "Arquivos Markdown em um cofre com Git"
          }
        ],
        "note": "Confirme o preço, a licença e as plataformas de cada app na página dele antes de escolher."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "Existe um app oficial do Trilium Notes para iPhone ou Android?",
            "a": "Não. O servidor inclui um frontend web para celular que você pode instalar como app web (PWA), e a comunidade mantém um app Android não oficial chamado TriliumDroid, que o site diz funcionar offline."
          },
          {
            "q": "O Trilium Notes é o mesmo Trilium original de zadam?",
            "a": "Ele se baseia nesse projeto: o site atribui a zadam o período de 2017 a 2024 e a Elian Doran e à comunidade a partir de 2024. O repositório a usar é o TriliumNext/Trilium."
          },
          {
            "q": "Quais provedores de IA o Trilium Notes aceita?",
            "a": "Anthropic, OpenAI, Google (Gemini) e DeepSeek com chaves de API, o Claude Code como única opção por assinatura que a documentação cita por ora, Ollama e LM Studio localmente e qualquer endpoint compatível com a API da OpenAI, como OpenRouter, Groq ou Mistral."
          },
          {
            "q": "Com que frequência o Trilium Notes recebe versões novas?",
            "a": "As versões do GitHub mostram a 0.104.1 em 25 de julho, a 0.105.0 em 19 de agosto, a 0.106.0 em 25 de setembro e a 0.106.1 em 23 de outubro de 2026, ou seja, cerca de uma por mês."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O Trilium Notes oferece uma base de conhecimento em árvore, gratuita e sob AGPL-3.0, para Mac, Windows, Linux e servidor próprio, com IA opcional via Ollama, LM Studio ou provedores na nuvem, e lança cerca de uma versão por mês. Em contrapartida, a política de privacidade não nomeia operador nem contato, não há app oficial para celular, as ferramentas de notas da IA não têm gerenciamento de permissões, e a velocidade e a qualidade das respostas não foram testadas. Serve para quem hospeda os próprios serviços e para quem gosta de árvores e relações e mantém a IA desligada ou apontada para um modelo local; quem precisa de afirmações de privacidade auditadas deve tratar a documentação como uma declaração, não como prova."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Site do Trilium Notes](https://triliumnotes.org) — recursos, plataformas, licença e resumo da IA, conferido em 3 de novembro de 2026.",
          "[Documentação de IA do Trilium Notes](https://docs.triliumnotes.org/user-guide/llm) — provedores, servidor MCP e avisos, conferido em 3 de novembro de 2026.",
          "[Política de privacidade do Trilium Notes](https://docs.triliumnotes.org/user-guide/misc/privacy-policy) — coleta de dados, telemetria e verificações de atualização, conferido em 3 de novembro de 2026.",
          "[Página de privacidade da IA do Trilium Notes](https://docs.triliumnotes.org/user-guide/llm/Privacy) — dados enviados por tipo de provedor, busca na web e MCP, conferido em 3 de novembro de 2026.",
          "[Documentação do servidor do Trilium Notes](https://docs.triliumnotes.org/user-guide/setup/server) — opções de instalação e configuração, conferido em 3 de novembro de 2026.",
          "[Documentação do Docker do Trilium Notes](https://docs.triliumnotes.org/user-guide/setup/server/installation/docker) — imagem, porta e avisos, conferido em 3 de novembro de 2026.",
          "[Trilium Notes no GitHub](https://github.com/TriliumNext/Trilium) — versões, arquivos e licença, conferido em 3 de novembro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leitura relacionada",
        "items": [
          "[Análise do Logseq](/pt/power-local-llm/logseq-review) — um outliner de código aberto, com foco local e servidor MCP opcional.",
          "[Análise do SiYuan](/pt/power-local-llm/siyuan-review) — um espaço de conhecimento auto-hospedado com agente de IA embutido.",
          "[Análise do Tolaria](/pt/power-local-llm/tolaria-review) — um app de notas gratuito para computador com arquivos Markdown em um cofre com Git.",
          "[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local."
        ]
      }
    }
  },
  ar: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-03",
    "dateModified": "2026-11-03",
    "next_refresh_due": "2027-05-03",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/trilium-notes-review-hero-ar.webp",
    "title": "مراجعة Trilium Notes: ملاحظات هرمية مجانية مع ذكاء اصطناعي اختياري",
    "seoTitle": "مراجعة Trilium Notes: ملاحظات مجانية وذكاء اصطناعي اختياري",
    "intro": "Trilium Notes تطبيق مجاني ومفتوح المصدر لتدوين الملاحظات وبناء قاعدة معرفة شخصية، يعمل تطبيقًا لسطح المكتب على Mac وWindows وLinux أو خادمًا تستضيفه بنفسك وتفتحه في المتصفح. تُرتَّب الملاحظات في شجرة هرمية، ويمكن أن توجد الملاحظة الواحدة في أكثر من موضع، ويمكن لمساعد ذكاء اصطناعي اختياري الدردشة مع ملاحظاتك عبر نموذج محلي مثل Ollama أو LM Studio، أو عبر مزوّد سحابي تختاره. تتناول هذه المراجعة ما تنزّله، وما يستطيع الذكاء الاصطناعي فعله، وأين تذهب بياناتك، وما تتركه المصادر دون تأكيد.",
    "metaDescription": "مراجعة Trilium Notes: ملاحظات هرمية مجانية بترخيص AGPL-3.0 لأجهزة Mac وWindows وLinux وخادمك، مع ذكاء اصطناعي اختياري عبر Ollama أو LM Studio أو السحابة.",
    "twitterDescription": "مراجعة Trilium Notes: ملاحظات مفتوحة المصدر ومجانية على سطح مكتبك أو خادمك الخاص، مع ذكاء اصطناعي اختياري عبر Ollama أو LM Studio أو مزوّدين سحابيين. ما تؤكده المصادر وما لا تؤكده.",
    "audience": "من يدوّنون الملاحظات ويستضيفون خدماتهم بأنفسهم ويريدون معرفة كلفة Trilium Notes، وطريقة تثبيته، وما يستطيع ذكاؤه الاصطناعي الاختياري الوصول إليه، وأي ادعاءات تتركها المصادر مفتوحة.",
    "readTime": "6 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة Trilium Notes",
    "targetKeywords": [
      "مراجعة trilium notes",
      "تطبيق trilium notes",
      "trilium notes مع ollama",
      "تطبيق ملاحظات مستضاف ذاتيًا",
      "تطبيق قاعدة معرفة مفتوح المصدر",
      "دردشة ذكاء اصطناعي في trilium",
      "trilium notes docker"
    ],
    "current_models_mentioned": [
      "Claude",
      "GPT",
      "Gemini",
      "DeepSeek"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**Trilium Notes (الإصدار 0.106.1، صدر في 23 أكتوبر 2026) تطبيق مجاني بترخيص AGPL-3.0 لتدوين الملاحظات وبناء قاعدة معرفة شخصية على Mac وWindows وLinux وخادم مستضاف ذاتيًا، مع مساعد ذكاء اصطناعي اختياري يبقى متوقفًا حتى تفعّله.** والتحفظ الحاسم أن الذكاء الاصطناعي يستطيع قراءة ملاحظاتك وتعديلها دون طبقة صلاحيات، فالمزوّد الذي تختاره هو الذي يحدد أين تذهب ملاحظاتك.",
    "quickAnswerTop": {
      "ar": {
        "question": "هل يستطيع Trilium Notes استخدام نموذج محلي مثل Ollama؟",
        "answer": "نعم، بحسب الوثائق: بعد تفعيل تكامل الذكاء الاصطناعي يكون Ollama وLM Studio من المزوّدين المدعومين، ويُبقي المزوّد المحلي كل رسالة على الجهاز الذي يشغّل النموذج. ولا يفعل التكامل شيئًا حتى تفعّله وتضبط مزوّدًا.",
        "bullets": [
          "يمكن إضافة أي نقطة نهاية متوافقة مع OpenAI مزوّدًا مخصصًا، مثل OpenRouter أو Groq أو Mistral.",
          "يتيح خادم MCP مدمج، وهو متوقف افتراضيًا، لوكيل خارجي مثل Claude Code العمل مع قاعدة بياناتك عبر رمز ETAPI.",
          "يكون البحث على الويب والوصول إلى الملاحظات مفعّلين افتراضيًا لكل محادثة بعد تفعيل الذكاء الاصطناعي، ويمكن إيقافهما من محدد النموذج؛ ويرسل البحث على الويب عبارات بحث النموذج إلى البنية التحتية للبحث لدى المزوّد نفسه."
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
        "label": "ما هو Trilium Notes؟",
        "anchor": "what-is-trilium-notes"
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
            "text": "Trilium Notes تطبيق مجاني ومفتوح المصدر لتدوين الملاحظات الهرمية وبناء قاعدة معرفة شخصية، لسطح المكتب أو لخادم مستضاف ذاتيًا، مع دردشة ذكاء اصطناعي اختيارية."
          },
          {
            "type": "plain-terms",
            "text": "تحتفظ بملاحظاتك في شجرة على حاسوبك أو خادمك الخاص، ويمكنك أن تدع مساعد ذكاء اصطناعي يبحث فيها ويعدّلها بنموذج على جهازك أو بنموذج سحابي تختاره."
          }
        ],
        "items": [
          "الصيانة: صدر الإصدار 0.106.1 في 23 أكتوبر 2026 وحُدّث المستودع في 3 نوفمبر 2026، فلا ينطبق تحذير المشروع المتوقف.",
          "التكلفة: مجاني، بلا خطط مدفوعة أو حسابات أو ميزات مقيّدة بالدفع بحسب المطوّر.",
          "الذكاء الاصطناعي: اختياري ومتوقف افتراضيًا، مع مزوّدين محليين (Ollama وLM Studio) ومزوّدين سحابيين وخادم MCP مدمج.",
          "الهاتف: لا يوجد تطبيق رسمي للهاتف؛ يوفّر الخادم متصفحًا وتطبيق ويب قابلًا للتثبيت، ويوجد تطبيق Android غير رسمي.",
          "الأمان: أدوات الملاحظات في الذكاء الاصطناعي بلا إدارة صلاحيات، فقد يحذف المساعد ملاحظات أو يعيد ترتيبها."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "تستند هذه المراجعة إلى triliumnotes.org والوثائق وإصدارات GitHub وبيانات المستودع، وقد روجعت في 3 نوفمبر 2026. لم تثبّت PromptQuorum التطبيق ولم تشغّله ولم تقِس أداءه، لذلك لا تُقيَّم السرعة ولا الاستقرار ولا جودة الإجابات."
          }
        ]
      },
      "overview": {
        "id": "what-is-trilium-notes",
        "title": "ما هو Trilium Notes؟",
        "content": [
          "**Trilium Notes تطبيق لتدوين الملاحظات مبني على شجرة من الملاحظات، يمكن فيها وضع الملاحظة الواحدة في عدة فروع.** المسؤولون عنه هم Elian Doran والمجتمع، بناءً على عمل zadam السابق الذي يذكره الموقع للفترة من 2017 إلى 2024؛ والمستودع الحالي هو TriliumNext/Trilium.",
          "يذكر الموقع أنواع ملاحظات للنص وMarkdown والشيفرة وجداول البيانات واللوحات (canvas) ومخططات Mermaid والخرائط الذهنية والملفات، إضافة إلى عروض التقويم والجدول وKanban والخريطة الجغرافية والعرض التقديمي ولوحة المعلومات، والوسوم والعلاقات، وإصدارات الملاحظات، ومقصّ الويب، وREST API. وتعتمد البرمجة النصية على JavaScript للواجهة الأمامية والخلفية."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "كيف تحصل عليه",
        "content": [
          "**يمكن تنزيل Trilium Notes مجانًا لأجهزة Mac وWindows وLinux، ويعمل المشروع نفسه أيضًا خادمًا تستضيفه بنفسك؛ والمثبّتات مستضافة على GitHub Releases.**"
        ],
        "columns": [
          "الخيار",
          "مصدر الحصول عليه"
        ],
        "rows": [
          {
            "الخيار": "Mac",
            "مصدر الحصول عليه": "[Trilium Notes على GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest)، ملف .dmg أو .zip لـ Apple silicon أو Intel"
          },
          {
            "الخيار": "Windows",
            "مصدر الحصول عليه": "[Trilium Notes على GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest)، ملف .exe أو .zip لـ x64 أو ARM64"
          },
          {
            "الخيار": "Linux",
            "مصدر الحصول عليه": "[Trilium Notes على GitHub Releases](https://github.com/TriliumNext/Trilium/releases/latest)، AppImage أو .deb أو .rpm أو Flatpak لـ x64 أو ARM64"
          },
          {
            "الخيار": "الخادم (Docker)",
            "مصدر الحصول عليه": "الصورة [triliumnext/trilium](https://hub.docker.com/r/triliumnext/trilium)؛ الأمر `docker compose up -d`، المنفذ 8080"
          },
          {
            "الخيار": "الخادم (مُدار)",
            "مصدر الحصول عليه": "استضافة [PikaPods](https://www.pikapods.com/pods?run=trilium-next) من طرف ثالث؛ لا توجد نسخة سحابية رسمية بعد"
          },
          {
            "الخيار": "الهاتف",
            "مصدر الحصول عليه": "لا يوجد تطبيق رسمي؛ استخدم الخادم في المتصفح أو PWA. غير رسمي: TriliumDroid (Android)"
          },
          {
            "الخيار": "السعر",
            "مصدر الحصول عليه": "مجاني؛ بلا خطط مدفوعة أو حسابات أو ميزات مقيّدة بالدفع"
          },
          {
            "الخيار": "الموقع",
            "مصدر الحصول عليه": "[triliumnotes.org](https://triliumnotes.org)"
          },
          {
            "الخيار": "سياسة الخصوصية",
            "مصدر الحصول عليه": "[سياسة الخصوصية](https://docs.triliumnotes.org/user-guide/misc/privacy-policy)؛ [صفحة خصوصية الذكاء الاصطناعي](https://docs.triliumnotes.org/user-guide/llm/Privacy)"
          },
          {
            "الخيار": "الشيفرة المصدرية",
            "مصدر الحصول عليه": "[GitHub، ترخيص AGPL-3.0](https://github.com/TriliumNext/Trilium)"
          }
        ],
        "note": "الإصدار الذي روجع: 0.106.1 (23 أكتوبر 2026). هذا الإصدار تحديث أمني لصور الخادم وDocker، فعلى من يشغّل الخادم أن يكون عليه. تحذّر وثائق Docker من وسم `latest` لأنه قد ينقلك إلى إصدار فرعي جديد ويربك المزامنة؛ فثبّت وسم إصدار محددًا."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "المتطلبات",
        "content": [
          "**لا تذكر المصادر حدًا أدنى لنظام التشغيل أو الذاكرة أو مساحة القرص لتطبيق سطح المكتب.**"
        ],
        "columns": [
          "البند",
          "ما تقوله المصادر"
        ],
        "rows": [
          {
            "البند": "سطح المكتب",
            "ما تقوله المصادر": "إصدارات لأجهزة Mac (Apple silicon وIntel) وWindows (x64 وARM64) وLinux (x64 وARM64) على GitHub Releases"
          },
          {
            "البند": "الخادم",
            "ما تقوله المصادر": "صور Docker لمعماريات AMD64 وARMv7 وARM64؛ أرشيف خادم Linux مُحزَّم؛ وتُذكر في الوثائق إعدادات Kubernetes وCloudron وNixOS وغيرها"
          },
          {
            "البند": "الذكاء الاصطناعي المحلي",
            "ما تقوله المصادر": "تثبيت منفصل لـ Ollama أو LM Studio؛ ولا تُذكر أحجام نماذج أو أرقام عتاد"
          },
          {
            "البند": "الحساب",
            "ما تقوله المصادر": "لا يوجد؛ يذكر المطوّر أنه لا توجد حسابات"
          }
        ],
        "note": "تحتاج حاوية Docker القياسية إلى صلاحيات الجذر بحسب الوثائق؛ وتوجد صورة بدون جذر. أما تشغيل الخادم على الإنترنت العام فيتطلب إعدادات HTTPS والمصادقة التي تصفها الوثائق."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "كيف تبدأ",
        "content": [
          "**تتبع الخطوات وثائق المطوّر؛ ولم تنفّذها PromptQuorum.**"
        ],
        "numberedItems": [
          {
            "title": "اختر سطح المكتب أو الخادم",
            "whyItMatters": "نزّل المثبّت المناسب لنظامك من GitHub Releases، أو شغّل صورة Docker إذا أردت الوصول من المتصفح والمزامنة بين الأجهزة."
          },
          {
            "title": "ثبّت إصدارًا محددًا",
            "whyItMatters": "مع Docker استخدم وسم إصدار محددًا بدل latest حتى لا تؤدي ترقية تلقائية إلى إرباك المزامنة."
          },
          {
            "title": "زامن إذا شغّلت خادمًا",
            "whyItMatters": "اربط تطبيق سطح المكتب بخادمك الخاص لإبقاء عدة أجهزة متطابقة؛ وتغطي الوثائق المزامنة في صفحات Synchronization."
          },
          {
            "title": "فعّل الذكاء الاصطناعي إن أردته فقط",
            "whyItMatters": "لا يفعل تكامل الذكاء الاصطناعي شيئًا حتى تفعّله وتضبط مزوّدًا؛ اختر Ollama أو LM Studio لإبقاء الملاحظات على جهازك."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "الميزات التي أكدتها المصادر",
        "content": [
          "**كل بند أدناه مأخوذ من موقع المطوّر أو وثائقه؛ ولم يُختبر أي منها بشكل مستقل.**"
        ],
        "items": [
          "**شجرة مع الاستنساخ.** تُنظَّم الملاحظات هرميًا ويمكن أن تظهر الملاحظة الواحدة في أكثر من موضع، مع الوسوم والعلاقات ومساحات العمل (hoisting).",
          "**البحث.** بحث تقريبي في العناوين وبحث في النص الكامل، يشمل نص OCR من الصور وملفات PDF.",
          "**الملاحظات المحمية.** يمكن تشفير ملاحظات محددة؛ وكل ما عداها مخزّن دون تشفير افتراضيًا.",
          "**النشر والوصول.** يمكن نشر شجرة فرعية من الملاحظات موقعًا للقراءة فقط (على الخادم فقط)، مع تسجيل دخول متعدد العوامل عبر TOTP وOpenID Connect.",
          "**دردشة الذكاء الاصطناعي وأدواته.** دردشة مع ملاحظاتك، ومساعد يستطيع البحث والتعديل عبر أدوات ملاحظات مدمجة، وخادم MCP للوكلاء الخارجيين."
        ],
        "note": "تقول صفحة خصوصية الذكاء الاصطناعي إن النموذج المحلي قد يتعامل مع استدعاءات الأدوات بموثوقية أقل من النموذج السحابي؛ ولا تقدّم المصادر أرقام أداء."
      },
      "privacy": {
        "id": "privacy",
        "title": "تدفق البيانات والخصوصية",
        "content": [
          "**تُخزَّن ملاحظاتك في قاعدة بيانات SQLite محلية، دون تشفير ما لم تضع علامة «محمية» على ملاحظة؛ وتستخدم الملاحظات المحمية AES-128-CBC.** ومع إيقاف الذكاء الاصطناعي لا ترسل ميزته أي شيء إلى أي مكان. وتقول الوثائق إن المزوّد الذي تختاره هو الذي يحدد أين تذهب ملاحظاتك. وتقول سياسة الخصوصية إن Trilium Notes لا يجمع ولا يرسل أي بيانات من تثبيتك وليس فيه تحليلات ولا قياس عن بُعد؛ ويستعلم التطبيق دوريًا عن صفحة إصدارات GitHub للتحقق من وجود إصدار مستقر أحدث، وينزّل قواميس التدقيق الإملائي عند الحاجة.",
          "مع مزوّد سحابي (Anthropic أو OpenAI أو Google أو DeepSeek أو نقطة نهاية مخصصة متوافقة مع OpenAI) يذهب محتوى الملاحظات الذي تتيحه إلى ذلك المزوّد؛ ومع Ollama أو LM Studio تقول صفحة خصوصية الذكاء الاصطناعي إن كل رسالة تبقى على الجهاز الذي يشغّل النموذج. وعند تفعيل البحث على الويب تُرسل عبارات بحث النموذج إلى البنية التحتية للبحث لدى المزوّد نفسه. وتُرسل المرفقات إلى المزوّد دون معالجة مسبقة مثل OCR. وأدوات الملاحظات بلا إدارة صلاحيات، فقد يحذف النموذج ملاحظات أو يزحم شجرتك؛ ويمكن استعادة الملاحظات المحذوفة وتنشئ التعديلات إصدارات، لكن تغييرات السمات (attributes) بلا سجل. وخادم MCP المدمج متوقف افتراضيًا؛ وعند تفعيله يمنح رمز ETAPI الوصول الكامل نفسه للقراءة والكتابة إلى ملاحظاتك كما تمنحه واجهة REST API."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "هذه إفادات من المطوّر وليست نتائج تدقيق، ولم تفحص PromptQuorum حركة الشبكة. ولا تذكر سياسة الخصوصية جهة مشغِّلة ولا عنوان تواصل ولا تاريخ آخر تحديث."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**من يستضيفون خدماتهم بأنفسهم** ويريدون قاعدة معرفة مجانية على خادمهم الخاص مع مزامنة بين الأجهزة.",
          "**مستخدمو Ollama وLM Studio** الذين يريدون مساعدًا يبحث في ملاحظاتهم ويعدّلها بنموذج على جهازهم.",
          "**المستخدمون المتقدمون** الذين يفضّلون الأشجار والعلاقات والبرمجة بـ JavaScript على مجلد ملفات بسيط."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**الأداء.** السرعة مع قواعد البيانات الكبيرة واستهلاك الذاكرة وجودة إجابات النماذج المحلية لم تُختبر.",
          "**إفادات الخصوصية.** السياسة وصفحة خصوصية الذكاء الاصطناعي إقرارات من المطوّر؛ ولم تُفحص حركة الشبكة ولا معاينات الروابط ولا أداة مقصّ الويب.",
          "**الهاتف.** لا يوجد تطبيق رسمي للهاتف، ولم يُفحص تطبيق Android غير الرسمي.",
          "**المتطلبات.** لا تُنشر حدود دنيا لنظام التشغيل أو الذاكرة أو القرص لتطبيق سطح المكتب.",
          "**حدود أمان الذكاء الاصطناعي.** تذكر الوثائق أنه لا توجد إدارة صلاحيات لأدوات الملاحظات، ولم يُختبر مدى التزام النموذج بحدود الطلب."
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
            "التطبيق": "[SiYuan](/ar/power-local-llm/siyuan-review)",
            "المنصات": "Mac وWindows وLinux وiPhone وAndroid",
            "السعر / الترخيص": "مجاني + مزامنة مدفوعة / AGPL-3.0",
            "الفرق الرئيسي": "مستضاف ذاتيًا، مراجع على مستوى الكتل، وكيل ذكاء اصطناعي مدمج"
          },
          {
            "التطبيق": "[Tolaria](/ar/power-local-llm/tolaria-review)",
            "المنصات": "Mac وWindows وLinux",
            "السعر / الترخيص": "مجاني / AGPL-3.0-or-later",
            "الفرق الرئيسي": "ملفات Markdown في خزنة مدعومة بـ Git"
          }
        ],
        "note": "تحقق من السعر الحالي والترخيص والمنصات لكل تطبيق في صفحته الخاصة قبل الاختيار."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل يوجد تطبيق رسمي لـ Trilium Notes على iPhone أو Android؟",
            "a": "لا. يتضمن الخادم واجهة ويب للجوال يمكن تثبيتها تطبيق ويب (PWA)، ويصون المجتمع تطبيق Android غير رسمي اسمه TriliumDroid، يقول الموقع إنه يعمل دون اتصال."
          },
          {
            "q": "هل Trilium Notes هو نفسه Trilium الأصلي من zadam؟",
            "a": "إنه يبني على ذلك المشروع: يذكر الموقع zadam للفترة من 2017 إلى 2024، وElian Doran والمجتمع منذ 2024. والمستودع الذي ينبغي استخدامه هو TriliumNext/Trilium."
          },
          {
            "q": "ما مزوّدو الذكاء الاصطناعي الذين يدعمهم Trilium Notes؟",
            "a": "Anthropic وOpenAI وGoogle (Gemini) وDeepSeek بمفاتيح API، وClaude Code بوصفه الخيار الوحيد القائم على الاشتراك الذي تذكره الوثائق حاليًا، وOllama وLM Studio محليًا، وأي نقطة نهاية متوافقة مع OpenAI مثل OpenRouter أو Groq أو Mistral."
          },
          {
            "q": "كم مرة يصدر Trilium Notes؟",
            "a": "تُظهر إصدارات GitHub الإصدار 0.104.1 في 25 يوليو، و0.105.0 في 19 أغسطس، و0.106.0 في 25 سبتمبر، و0.106.1 في 23 أكتوبر 2026، أي نحو إصدار واحد كل شهر."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "يقدّم Trilium Notes قاعدة معرفة مجانية بترخيص AGPL-3.0 على شكل شجرة لأجهزة Mac وWindows وLinux وخادمك الخاص، مع ذكاء اصطناعي اختياري عبر Ollama أو LM Studio أو مزوّدين سحابيين، ويصدر نحو إصدار كل شهر. في المقابل لا تذكر سياسة الخصوصية جهة مشغِّلة ولا جهة اتصال، ولا يوجد تطبيق رسمي للهاتف، وأدوات الملاحظات في الذكاء الاصطناعي بلا إدارة صلاحيات، والسرعة وجودة الإجابات لم تُختبرا. يناسب من يستضيفون خدماتهم بأنفسهم ومن يفضّلون الأشجار والعلاقات في الملاحظات ويُبقون الذكاء الاصطناعي متوقفًا أو موجّهًا إلى نموذج محلي؛ ومن يحتاج إلى ادعاءات خصوصية مدقَّقة فعليه أن يعدّ الوثائق إقرارًا لا دليلًا."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[موقع Trilium Notes](https://triliumnotes.org) — الميزات والمنصات والترخيص وملخص الذكاء الاصطناعي، روجع في 3 نوفمبر 2026.",
          "[وثائق الذكاء الاصطناعي في Trilium Notes](https://docs.triliumnotes.org/user-guide/llm) — المزوّدون وخادم MCP والتحذيرات، روجعت في 3 نوفمبر 2026.",
          "[سياسة الخصوصية في Trilium Notes](https://docs.triliumnotes.org/user-guide/misc/privacy-policy) — جمع البيانات والقياس عن بُعد وفحوص التحديث، روجعت في 3 نوفمبر 2026.",
          "[صفحة خصوصية الذكاء الاصطناعي في Trilium Notes](https://docs.triliumnotes.org/user-guide/llm/Privacy) — البيانات المرسلة بحسب نوع المزوّد والبحث على الويب وMCP، روجعت في 3 نوفمبر 2026.",
          "[وثائق خادم Trilium Notes](https://docs.triliumnotes.org/user-guide/setup/server) — خيارات التثبيت والإعدادات، روجعت في 3 نوفمبر 2026.",
          "[وثائق Docker في Trilium Notes](https://docs.triliumnotes.org/user-guide/setup/server/installation/docker) — الصورة والمنفذ والتحذيرات، روجعت في 3 نوفمبر 2026.",
          "[Trilium Notes على GitHub](https://github.com/TriliumNext/Trilium) — الإصدارات والملفات والترخيص، روجع في 3 نوفمبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة Logseq](/ar/power-local-llm/logseq-review) — أداة مخطط هرمي مفتوحة المصدر ومحلية أولًا مع خادم MCP اختياري.",
          "[مراجعة SiYuan](/ar/power-local-llm/siyuan-review) — مساحة معرفة مستضافة ذاتيًا مع وكيل ذكاء اصطناعي مدمج.",
          "[مراجعة Tolaria](/ar/power-local-llm/tolaria-review) — تطبيق ملاحظات مجاني لسطح المكتب بملفات Markdown في خزنة مدعومة بـ Git.",
          "[دليل برمجيات النماذج المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية."
        ]
      }
    }
  },
  zh: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-03",
    "dateModified": "2026-11-03",
    "next_refresh_due": "2027-05-03",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/trilium-notes-review-hero-zh.webp",
    "title": "Trilium Notes 评测：免费层级笔记与可选 AI",
    "seoTitle": "Trilium Notes 评测：免费自托管笔记与 AI",
    "intro": "Trilium Notes 是一款免费开源的笔记应用和个人知识库，既可作为 Mac、Windows 和 Linux 上的桌面应用运行，也可作为你自己托管、在浏览器中打开的服务器运行。笔记以层级树的形式组织，同一条笔记可以放在多个位置；可选的 AI 助手可以通过 Ollama、LM Studio 等本地模型或你自选的云端提供商与你的笔记对话。本评测说明下载什么、AI 能做什么、你的数据流向哪里，以及哪些内容资料没有证实。",
    "metaDescription": "Trilium Notes 评测：免费 AGPL-3.0 层级笔记，支持 Mac、Windows、Linux 和自托管服务器，可选通过 Ollama、LM Studio 或云端使用 AI，未实测。",
    "twitterDescription": "Trilium Notes 评测：免费开源笔记，可用于桌面端或你自己的服务器，可选通过 Ollama、LM Studio 或云端提供商使用 AI。资料证实了什么，没有证实什么。",
    "audience": "想了解 Trilium Notes 费用、安装方式、可选 AI 能接触哪些内容，以及哪些说法资料没有证实的笔记用户和自托管用户。",
    "readTime": "阅读约6分钟",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Trilium Notes 评测",
    "targetKeywords": [
      "trilium notes 评测",
      "trilium notes 应用",
      "trilium notes ollama",
      "自托管笔记应用",
      "开源知识库应用",
      "trilium ai 聊天",
      "trilium notes docker"
    ],
    "current_models_mentioned": [
      "Claude",
      "GPT",
      "Gemini",
      "DeepSeek"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**Trilium Notes（0.106.1 版，2026 年 10 月 23 日发布）是面向 Mac、Windows、Linux 和自托管服务器的免费 AGPL-3.0 笔记应用与个人知识库，带有一个在你开启之前保持关闭的可选 AI 助手。**关键提醒是：AI 可以在没有权限层的情况下读取和编辑你的笔记，所以你选择的提供商决定了笔记的去向。",
    "quickAnswerTop": {
      "zh": {
        "question": "Trilium Notes 可以使用 Ollama 这样的本地模型吗？",
        "answer": "据文档，可以：启用 AI 集成后，Ollama 和 LM Studio 是受支持的提供商，本地提供商会把每条消息都保留在运行模型的那台机器上。在你启用并配置提供商之前，该集成不会执行任何操作。",
        "bullets": [
          "任何兼容 OpenAI 的端点都可以作为自定义提供商添加，例如 OpenRouter、Groq 或 Mistral。",
          "内置的 MCP 服务器默认关闭，启用后允许 Claude Code 等外部智能体通过 ETAPI 令牌操作你的数据库。",
          "启用 AI 后，网页搜索和笔记访问默认按对话开启，可在模型选择器中关闭；网页搜索会把模型的搜索词发送给提供商自己的搜索基础设施。"
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
        "label": "Trilium Notes 是什么？",
        "anchor": "what-is-trilium-notes"
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
            "text": "Trilium Notes 是免费开源的层级笔记应用和个人知识库，可用于桌面端或自托管服务器，并带有可选的 AI 聊天。"
          },
          {
            "type": "plain-terms",
            "text": "你把笔记以树状结构保存在自己的电脑或服务器上，并可以让 AI 助手搜索和编辑它们，用的可以是你机器上的模型，也可以是你选择的云端模型。"
          }
        ],
        "items": [
          "维护情况：0.106.1 版于 2026 年 10 月 23 日发布，代码仓库于 2026 年 11 月 3 日更新，因此不适用停更警告。",
          "费用：据开发者所述免费，没有付费套餐、账号或功能付费墙。",
          "AI：可选且默认关闭，支持本地提供商（Ollama、LM Studio）、云端提供商和内置 MCP 服务器。",
          "手机端：没有官方手机应用；服务器提供浏览器访问和可安装的网页应用，另有非官方的 Android 应用。",
          "安全：AI 的笔记工具没有权限管理，因此助手可能删除或打乱笔记。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本评测基于 triliumnotes.org、官方文档、GitHub 发布版本和仓库数据，核查于 2026 年 11 月 3 日。PromptQuorum 没有安装、运行或测试该应用，因此不评估速度、稳定性和回答质量。"
          }
        ]
      },
      "overview": {
        "id": "what-is-trilium-notes",
        "title": "Trilium Notes 是什么？",
        "content": [
          "**Trilium Notes 是一款围绕笔记树构建的笔记应用，同一条笔记可以放在树的多个分支中。**维护者是 Elian Doran 和社区，在 zadam 早期工作的基础上继续开发，网站将 2017 年至 2024 年的工作归功于 zadam；当前的代码仓库是 TriliumNext/Trilium。",
          "网站列出的笔记类型包括文本、Markdown、代码、电子表格、画布、Mermaid 图表、思维导图和文件，以及日历、表格、看板、地理地图、演示文稿和仪表盘视图，此外还有标签与关系、笔记修订、网页剪藏和 REST API。脚本功能使用前端和后端 JavaScript。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "content": [
          "**Trilium Notes 可在 Mac、Windows 和 Linux 上免费下载，同一个项目也可以作为你自己托管的服务器运行；安装包托管在 GitHub Releases。**"
        ],
        "columns": [
          "选项",
          "获取方式"
        ],
        "rows": [
          {
            "选项": "Mac",
            "获取方式": "[GitHub Releases 上的 Trilium Notes](https://github.com/TriliumNext/Trilium/releases/latest)，Apple silicon 或 Intel 版 .dmg 或 .zip"
          },
          {
            "选项": "Windows",
            "获取方式": "[GitHub Releases 上的 Trilium Notes](https://github.com/TriliumNext/Trilium/releases/latest)，x64 或 ARM64 版 .exe 或 .zip"
          },
          {
            "选项": "Linux",
            "获取方式": "[GitHub Releases 上的 Trilium Notes](https://github.com/TriliumNext/Trilium/releases/latest)，x64 或 ARM64 版 AppImage、.deb、.rpm 或 Flatpak"
          },
          {
            "选项": "服务器（Docker）",
            "获取方式": "Docker Hub 镜像 [triliumnext/trilium](https://hub.docker.com/r/triliumnext/trilium)；`docker compose up -d`，端口 8080"
          },
          {
            "选项": "服务器（托管）",
            "获取方式": "第三方 [PikaPods](https://www.pikapods.com/pods?run=trilium-next) 托管；暂无官方云版本"
          },
          {
            "选项": "手机",
            "获取方式": "无官方应用；可在浏览器或以 PWA 使用服务器。非官方：TriliumDroid（Android）"
          },
          {
            "选项": "价格",
            "获取方式": "免费；没有付费套餐、账号或功能付费墙"
          },
          {
            "选项": "官方网站",
            "获取方式": "[triliumnotes.org](https://triliumnotes.org)"
          },
          {
            "选项": "隐私政策",
            "获取方式": "[隐私政策](https://docs.triliumnotes.org/user-guide/misc/privacy-policy)；[AI 隐私页面](https://docs.triliumnotes.org/user-guide/llm/Privacy)"
          },
          {
            "选项": "源代码",
            "获取方式": "[GitHub，AGPL-3.0](https://github.com/TriliumNext/Trilium)"
          }
        ],
        "note": "核查的版本：0.106.1（2026 年 10 月 23 日）。该版本是服务器和 Docker 镜像的安全更新，因此运行服务器的用户应升级到该版本。Docker 文档提醒不要使用 `latest` 标签，因为它可能让你升级到新的次要版本并扰乱同步；请固定一个版本标签。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "系统要求",
        "content": [
          "**资料没有给出桌面应用的最低操作系统、内存或磁盘空间数字。**"
        ],
        "columns": [
          "项目",
          "资料中的说法"
        ],
        "rows": [
          {
            "项目": "桌面端",
            "资料中的说法": "GitHub Releases 提供 Mac（Apple silicon 和 Intel）、Windows（x64 和 ARM64）、Linux（x64 和 ARM64）版本"
          },
          {
            "项目": "服务器",
            "资料中的说法": "提供 AMD64、ARMv7 和 ARM64 的 Docker 镜像；Linux 服务器压缩包；文档还列出 Kubernetes、Cloudron、NixOS 等部署方式"
          },
          {
            "项目": "本地 AI",
            "资料中的说法": "需要另行安装 Ollama 或 LM Studio；没有给出模型大小或硬件数字"
          },
          {
            "项目": "账号",
            "资料中的说法": "无需账号；开发者称没有账号体系"
          }
        ],
        "note": "据文档，标准 Docker 容器需要 root 权限；另有无 root 镜像。若将服务器暴露在公网，需要使用文档所述的 HTTPS 和身份验证设置。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "如何上手",
        "content": [
          "**以下步骤依据开发者的文档；PromptQuorum 没有实际执行过。**"
        ],
        "numberedItems": [
          {
            "title": "选择桌面端或服务器",
            "whyItMatters": "从 GitHub Releases 下载适合你系统的安装包；如果想通过浏览器访问并在多台设备间同步，则运行 Docker 镜像。"
          },
          {
            "title": "固定版本",
            "whyItMatters": "使用 Docker 时，请指定具体的版本标签而不是 latest，以免自动升级破坏同步。"
          },
          {
            "title": "运行服务器时开启同步",
            "whyItMatters": "把桌面应用连接到你自己的服务器，让多台设备保持一致；同步方法见文档的“Synchronization”页面。"
          },
          {
            "title": "只在需要时启用 AI",
            "whyItMatters": "在你启用并配置提供商之前，AI 集成不会执行任何操作；选择 Ollama 或 LM Studio 可让笔记留在你的机器上。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "资料证实的功能",
        "content": [
          "**以下每一项都来自开发者的网站或文档；均未经过独立测试。**"
        ],
        "items": [
          "**可克隆的树结构。**笔记按层级组织，同一条笔记可以出现在多个位置，并支持标签、关系和工作区（hoisting）。",
          "**搜索。**支持模糊标题搜索和全文搜索，包括图片和 PDF 中经 OCR 识别的文字。",
          "**受保护笔记。**可对选定的笔记加密；其余笔记默认不加密存储。",
          "**发布与访问。**可将笔记子树发布为只读网站（仅限服务器），支持 TOTP 多重验证登录和 OpenID Connect。",
          "**AI 聊天与工具。**可与笔记对话，助手可通过内置笔记工具搜索和编辑，并提供供外部智能体使用的 MCP 服务器。"
        ],
        "note": "AI 隐私页面称，本地模型处理工具调用时可能不如云端模型可靠；资料没有给出性能数据。"
      },
      "privacy": {
        "id": "privacy",
        "title": "数据流向与隐私",
        "content": [
          "**你的笔记保存在本地 SQLite 数据库中，除非标记为受保护笔记，否则不加密；受保护笔记使用 AES-128-CBC。**关闭 AI 时，AI 功能不会向任何地方发送数据。文档称，你选择的提供商决定笔记的去向。隐私政策称，Trilium Notes 不会从你的安装中收集或发送任何数据，也没有分析或遥测；应用会定期查询 GitHub 发布页面以检查是否有更新的稳定版本，并按需下载拼写词典。",
          "使用云端提供商（Anthropic、OpenAI、Google、DeepSeek 或自定义的兼容 OpenAI 的端点）时，你开放的笔记内容会发送给该提供商；使用 Ollama 或 LM Studio 时，AI 隐私页面称每条消息都留在运行模型的那台机器上。启用网页搜索后，会把模型的搜索词发送给提供商自己的搜索基础设施。附件会在未经 OCR 等预处理的情况下发送给提供商。笔记工具没有权限管理，因此模型可能删除笔记或弄乱你的笔记树；已删除的笔记可以恢复，编辑会生成修订，但属性的更改没有历史记录。内置的 MCP 服务器默认关闭；启用后，ETAPI 令牌授予的笔记读写权限与 REST API 相同，范围完整。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "这些是开发者的说法，不是审计结果，PromptQuorum 没有检查网络流量。该隐私政策没有写明运营方、联系地址或最后更新日期。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合谁使用",
        "items": [
          "**自托管用户**：想在自己的服务器上运行免费知识库，并在多台设备间同步。",
          "**Ollama 和 LM Studio 用户**：想要一个用自己机器上的模型来搜索和编辑笔记的助手。",
          "**进阶用户**：比起一个普通文件夹，更喜欢树结构、关系和 JavaScript 脚本。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们无法核实的内容",
        "items": [
          "**性能。**大型数据库下的速度、内存占用和本地模型的回答质量均未测试。",
          "**隐私声明。**隐私政策和 AI 隐私页面是开发者的声明；网络流量、链接预览和网页剪藏均未检查。",
          "**手机端。**没有官方手机应用，非官方的 Android 应用也未检查。",
          "**系统要求。**没有公布桌面应用的最低操作系统、内存或磁盘空间数字。",
          "**AI 安全限制。**文档称笔记工具没有权限管理，模型能否可靠地不超出请求范围未经测试。"
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
            "应用": "[SiYuan](/zh/power-local-llm/siyuan-review)",
            "平台": "Mac、Windows、Linux、iPhone、Android",
            "价格 / 许可": "免费 + 付费同步 / AGPL-3.0",
            "主要区别": "自托管，块级引用，内置 AI 智能体"
          },
          {
            "应用": "[Tolaria](/zh/power-local-llm/tolaria-review)",
            "平台": "Mac、Windows、Linux",
            "价格 / 许可": "免费 / AGPL-3.0-or-later",
            "主要区别": "Markdown 文件保存在 Git 管理的库中"
          }
        ],
        "note": "选择之前，请在各应用自己的页面确认其当前价格、许可证和支持平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "Trilium Notes 有官方的 iPhone 或 Android 应用吗？",
            "a": "没有。服务器包含移动网页前端，可以作为网页应用（PWA）安装；社区维护着一个名为 TriliumDroid 的非官方 Android 应用，网站称它可离线使用。"
          },
          {
            "q": "Trilium Notes 和 zadam 的原版 Trilium 是同一个项目吗？",
            "a": "它是在那个项目的基础上继续开发的：网站将 2017 年至 2024 年的工作归功于 zadam，2024 年起由 Elian Doran 和社区维护。应使用的代码仓库是 TriliumNext/Trilium。"
          },
          {
            "q": "Trilium Notes 支持哪些 AI 提供商？",
            "a": "使用 API 密钥的 Anthropic、OpenAI、Google（Gemini）和 DeepSeek，文档目前列出的唯一订阅式选项 Claude Code，本地的 Ollama 和 LM Studio，以及任何兼容 OpenAI 的端点，例如 OpenRouter、Groq 或 Mistral。"
          },
          {
            "q": "Trilium Notes 多久发布一次版本？",
            "a": "GitHub 发布记录显示：2026 年 7 月 25 日 0.104.1、8 月 19 日 0.105.0、9 月 25 日 0.106.0、10 月 23 日 0.106.1，大约每月一个版本。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "Trilium Notes 提供免费的 AGPL-3.0 树状知识库，支持 Mac、Windows、Linux 和你自己的服务器，可选通过 Ollama、LM Studio 或云端提供商使用 AI，并且大约每月发布一个版本。另一方面，隐私政策没有写明运营方或联系方式，没有官方手机应用，AI 的笔记工具没有权限管理，速度和回答质量未经测试。适合让 AI 保持关闭或只连接本地模型的自托管用户，以及喜欢树结构和关系的笔记用户；需要经过审计的隐私保证的人，应把文档当作声明而不是证明。"
      },
      "sources": {
        "id": "sources",
        "title": "资料来源",
        "items": [
          "[Trilium Notes 网站](https://triliumnotes.org) — 功能、平台、许可证和 AI 概述，核查于 2026 年 11 月 3 日。",
          "[Trilium Notes AI 文档](https://docs.triliumnotes.org/user-guide/llm) — 提供商、MCP 服务器和警告，核查于 2026 年 11 月 3 日。",
          "[Trilium Notes 隐私政策](https://docs.triliumnotes.org/user-guide/misc/privacy-policy) — 数据收集、遥测和更新检查，核查于 2026 年 11 月 3 日。",
          "[Trilium Notes AI 隐私页面](https://docs.triliumnotes.org/user-guide/llm/Privacy) — 各类提供商接收的数据、网页搜索和 MCP，核查于 2026 年 11 月 3 日。",
          "[Trilium Notes 服务器文档](https://docs.triliumnotes.org/user-guide/setup/server) — 安装方式和配置，核查于 2026 年 11 月 3 日。",
          "[Trilium Notes Docker 文档](https://docs.triliumnotes.org/user-guide/setup/server/installation/docker) — 镜像、端口和警告，核查于 2026 年 11 月 3 日。",
          "[GitHub 上的 Trilium Notes](https://github.com/TriliumNext/Trilium) — 发布版本、文件和许可证，核查于 2026 年 11 月 3 日。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "相关阅读",
        "items": [
          "[Logseq 评测](/zh/power-local-llm/logseq-review) — 带可选 MCP 服务器的开源本地优先大纲笔记。",
          "[SiYuan 评测](/zh/power-local-llm/siyuan-review) — 带内置 AI 智能体的自托管知识工作区。",
          "[Tolaria 评测](/zh/power-local-llm/tolaria-review) — 免费桌面笔记应用，Markdown 文件保存在 Git 管理的库中。",
          "[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。"
        ]
      }
    }
  },
  ko: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-03",
    "dateModified": "2026-11-03",
    "next_refresh_due": "2027-05-03",
    "theme": "Productivity & Knowledge Tools",
    "heroImage": "/images/trilium-notes-review-hero-ko.webp",
    "title": "Trilium Notes 리뷰: 선택형 AI를 갖춘 무료 계층형 노트",
    "seoTitle": "Trilium Notes 리뷰: 무료 노트와 선택형 AI",
    "intro": "Trilium Notes는 Mac, Windows, Linux 데스크톱 앱으로 쓰거나 직접 호스팅한 서버를 브라우저로 여는 방식으로 쓰는 무료 오픈소스 노트 앱이자 개인 지식 베이스입니다. 노트는 계층형 트리에 놓이고, 하나의 노트를 여러 위치에 둘 수 있습니다. 선택형 AI 어시스턴트는 Ollama나 LM Studio 같은 로컬 모델, 또는 직접 고른 클라우드 제공업체를 통해 노트와 채팅할 수 있습니다. 이 리뷰는 무엇을 내려받는지, AI가 무엇을 할 수 있는지, 데이터가 어디로 가는지, 출처가 확인하지 못한 내용이 무엇인지 다룹니다.",
    "metaDescription": "Trilium Notes 리뷰: Mac, Windows, Linux, 자체 서버용 무료 AGPL-3.0 계층형 노트. Ollama, LM Studio, 클라우드 기반 선택형 AI.",
    "twitterDescription": "Trilium Notes 리뷰: 데스크톱이나 자체 서버에서 쓰는 무료 오픈소스 노트와 Ollama, LM Studio, 클라우드 기반 선택형 AI. 출처가 확인한 것과 확인하지 못한 것.",
    "audience": "Trilium Notes의 비용, 설치 방식, 선택형 AI가 접근할 수 있는 범위, 출처가 확인하지 못한 주장이 무엇인지 알고 싶은 노트 사용자와 셀프 호스팅 사용자.",
    "readTime": "6분 읽기",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Trilium Notes 리뷰",
    "targetKeywords": [
      "trilium notes 리뷰",
      "trilium notes 앱",
      "trilium notes ollama",
      "셀프 호스팅 노트 앱",
      "오픈소스 지식 베이스 앱",
      "trilium ai 채팅",
      "trilium notes docker"
    ],
    "current_models_mentioned": [
      "Claude",
      "GPT",
      "Gemini",
      "DeepSeek"
    ],
    "current_hardware_mentioned": [
      "Apple silicon",
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**Trilium Notes(버전 0.106.1, 2026년 10월 23일 출시)는 Mac, Windows, Linux, 자체 호스팅 서버용 무료 AGPL-3.0 노트 앱이자 개인 지식 베이스이며, 켜기 전까지는 꺼져 있는 선택형 AI 어시스턴트를 갖추고 있습니다.** 가장 중요한 주의점은 AI가 권한 계층 없이 노트를 읽고 편집할 수 있으므로, 어떤 제공업체를 고르느냐에 따라 노트가 가는 곳이 정해진다는 것입니다.",
    "quickAnswerTop": {
      "ko": {
        "question": "Trilium Notes에서 Ollama 같은 로컬 모델을 쓸 수 있습니까?",
        "answer": "문서에 따르면 쓸 수 있습니다. AI 통합을 켜면 Ollama와 LM Studio가 지원 제공업체이며, 로컬 제공업체는 모든 메시지를 모델이 실행되는 기기 안에 둡니다. AI 통합은 켜고 제공업체를 설정하기 전까지 아무 일도 하지 않습니다.",
        "bullets": [
          "OpenAI 호환 엔드포인트는 OpenRouter, Groq, Mistral 같은 사용자 지정 제공업체로 추가할 수 있습니다.",
          "내장 MCP 서버는 기본적으로 꺼져 있으며, 켜면 Claude Code 같은 외부 에이전트가 ETAPI 토큰으로 데이터베이스를 다룰 수 있습니다.",
          "AI를 켜면 웹 검색과 노트 접근은 채팅마다 기본적으로 켜져 있으며 모델 선택기에서 끌 수 있습니다. 웹 검색은 모델의 검색어를 제공업체 자체의 검색 인프라로 보냅니다."
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
        "label": "Trilium Notes란?",
        "anchor": "what-is-trilium-notes"
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
            "text": "Trilium Notes는 데스크톱이나 자체 호스팅 서버에서 쓰는 무료 오픈소스 계층형 노트 앱이자 개인 지식 베이스이며, 선택형 AI 채팅을 제공합니다."
          },
          {
            "type": "plain-terms",
            "text": "노트를 내 컴퓨터나 내 서버의 트리에 보관하고, 내 컴퓨터의 모델이든 직접 고른 클라우드 모델이든 AI 어시스턴트가 노트를 검색하고 편집하게 할 수 있습니다."
          }
        ],
        "items": [
          "유지보수: 버전 0.106.1은 2026년 10월 23일에 출시되었고 저장소는 2026년 11월 3일에 업데이트되어 업데이트 중단 경고는 해당되지 않습니다.",
          "비용: 개발자에 따르면 무료이며, 유료 등급, 계정, 기능 유료화가 없습니다.",
          "AI: 선택 사항이며 기본적으로 꺼져 있고, 로컬 제공업체(Ollama, LM Studio), 클라우드 제공업체, 내장 MCP 서버를 지원합니다.",
          "모바일: 공식 휴대폰 앱은 없으며, 서버는 브라우저와 설치 가능한 웹 앱을 제공하고 비공식 Android 앱이 있습니다.",
          "안전: AI 노트 도구에는 권한 관리가 없으므로 어시스턴트가 노트를 삭제하거나 재배치할 수 있습니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이 리뷰는 2026년 11월 3일에 확인한 triliumnotes.org, 문서, GitHub 릴리스, 저장소 데이터를 바탕으로 합니다. PromptQuorum은 앱을 설치·실행·측정하지 않았으므로 속도, 안정성, 답변 품질은 평가하지 않습니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-trilium-notes",
        "title": "Trilium Notes란?",
        "content": [
          "**Trilium Notes는 노트 트리를 중심으로 만든 노트 앱이며, 하나의 노트를 트리의 여러 가지에 둘 수 있습니다.** 관리자는 Elian Doran과 커뮤니티이며, 사이트가 2017년부터 2024년까지의 공으로 표기하는 zadam의 이전 작업을 바탕으로 합니다. 현재 저장소는 TriliumNext/Trilium입니다.",
          "사이트는 텍스트, Markdown, 코드, 스프레드시트, 캔버스, Mermaid 다이어그램, 마인드맵, 파일 노트 유형과 캘린더, 표, 칸반, 지도, 프레젠테이션, 대시보드 보기, 레이블과 관계, 노트 수정 이력, 웹 클리퍼, REST API를 소개합니다. 스크립팅은 프런트엔드·백엔드 JavaScript를 사용합니다."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "설치 방법",
        "content": [
          "**Trilium Notes는 Mac, Windows, Linux용으로 무료로 내려받을 수 있으며, 같은 프로젝트를 직접 호스팅하는 서버로도 실행할 수 있습니다. 설치 파일은 GitHub Releases에서 제공됩니다.**"
        ],
        "columns": [
          "옵션",
          "입수 방법"
        ],
        "rows": [
          {
            "옵션": "Mac",
            "입수 방법": "[GitHub Releases의 Trilium Notes](https://github.com/TriliumNext/Trilium/releases/latest), Apple silicon 또는 Intel용 .dmg 또는 .zip"
          },
          {
            "옵션": "Windows",
            "입수 방법": "[GitHub Releases의 Trilium Notes](https://github.com/TriliumNext/Trilium/releases/latest), x64 또는 ARM64용 .exe 또는 .zip"
          },
          {
            "옵션": "Linux",
            "입수 방법": "[GitHub Releases의 Trilium Notes](https://github.com/TriliumNext/Trilium/releases/latest), x64 또는 ARM64용 AppImage, .deb, .rpm, Flatpak"
          },
          {
            "옵션": "서버(Docker)",
            "입수 방법": "이미지 [triliumnext/trilium](https://hub.docker.com/r/triliumnext/trilium), `docker compose up -d`, 포트 8080"
          },
          {
            "옵션": "서버(관리형)",
            "입수 방법": "서드파티 [PikaPods](https://www.pikapods.com/pods?run=trilium-next) 호스팅, 공식 클라우드 버전은 아직 없음"
          },
          {
            "옵션": "휴대폰",
            "입수 방법": "공식 앱 없음, 서버를 브라우저나 PWA로 사용. 비공식: TriliumDroid(Android)"
          },
          {
            "옵션": "가격",
            "입수 방법": "무료, 유료 등급·계정·기능 유료화 없음"
          },
          {
            "옵션": "웹사이트",
            "입수 방법": "[triliumnotes.org](https://triliumnotes.org)"
          },
          {
            "옵션": "개인정보 처리방침",
            "입수 방법": "[개인정보 처리방침](https://docs.triliumnotes.org/user-guide/misc/privacy-policy), [AI 개인정보 페이지](https://docs.triliumnotes.org/user-guide/llm/Privacy)"
          },
          {
            "옵션": "소스 코드",
            "입수 방법": "[GitHub, AGPL-3.0](https://github.com/TriliumNext/Trilium)"
          }
        ],
        "note": "리뷰한 버전: 0.106.1(2026년 10월 23일). 이 릴리스는 서버와 Docker 이미지용 보안 업데이트이므로, 서버를 운영하는 경우 이 버전이어야 합니다. Docker 문서는 `latest` 태그가 새 마이너 버전으로 옮겨 가 동기화를 방해할 수 있다고 경고하므로, 특정 버전 태그를 고정해서 사용하십시오."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "요구 사항",
        "content": [
          "**출처에는 데스크톱 앱의 최소 운영체제, RAM, 디스크 수치가 나와 있지 않습니다.**"
        ],
        "columns": [
          "항목",
          "출처의 기재 내용"
        ],
        "rows": [
          {
            "항목": "데스크톱",
            "출처의 기재 내용": "GitHub Releases의 Mac(Apple silicon 및 Intel), Windows(x64 및 ARM64), Linux(x64 및 ARM64) 빌드"
          },
          {
            "항목": "서버",
            "출처의 기재 내용": "AMD64, ARMv7, ARM64용 Docker 이미지, 패키지된 Linux 서버 압축 파일, 문서에는 Kubernetes, Cloudron, NixOS 등의 구성도 나열"
          },
          {
            "항목": "로컬 AI",
            "출처의 기재 내용": "별도로 설치한 Ollama 또는 LM Studio, 모델 크기나 하드웨어 수치는 제시되지 않음"
          },
          {
            "항목": "계정",
            "출처의 기재 내용": "없음, 개발자는 계정이 없다고 밝힘"
          }
        ],
        "note": "문서에 따르면 표준 Docker 컨테이너에는 root 권한이 필요하며, 루트리스 이미지도 있습니다. 서버를 인터넷에 공개하려면 문서가 설명하는 HTTPS 및 인증 설정이 필요합니다."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "시작하는 방법",
        "content": [
          "**아래 단계는 개발자 문서를 따른 것이며, PromptQuorum은 직접 실행하지 않았습니다.**"
        ],
        "numberedItems": [
          {
            "title": "데스크톱 또는 서버 선택하기",
            "whyItMatters": "사용하는 시스템용 설치 파일을 GitHub Releases에서 내려받거나, 브라우저 접근과 기기 간 동기화가 필요하면 Docker 이미지를 실행하십시오."
          },
          {
            "title": "버전 고정하기",
            "whyItMatters": "Docker에서는 자동 업그레이드로 동기화가 깨지지 않도록 latest 대신 특정 버전 태그를 사용하십시오."
          },
          {
            "title": "서버를 운영한다면 동기화하기",
            "whyItMatters": "데스크톱 앱을 자신의 서버에 연결하면 여러 기기를 같은 상태로 유지할 수 있으며, 동기화는 문서의 Synchronization 페이지에서 다룹니다."
          },
          {
            "title": "원할 때만 AI 켜기",
            "whyItMatters": "AI 통합은 켜고 제공업체를 설정하기 전까지 아무 일도 하지 않으며, 노트를 내 컴퓨터에 두려면 Ollama나 LM Studio를 고르십시오."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "출처가 확인한 기능",
        "content": [
          "**아래 항목은 모두 개발자의 사이트나 문서에서 가져온 것이며, 독립적으로 테스트하지 않았습니다.**"
        ],
        "items": [
          "**복제가 가능한 트리.** 노트는 계층적으로 정리되며 하나의 노트를 여러 위치에 둘 수 있고, 레이블, 관계, 작업 공간(호이스팅)을 지원합니다.",
          "**검색.** 퍼지 제목 검색과 전체 텍스트 검색을 지원하며, 이미지와 PDF의 OCR 텍스트도 포함됩니다.",
          "**보호된 노트.** 선택한 노트를 암호화할 수 있으며, 나머지는 기본적으로 암호화되지 않은 상태로 저장됩니다.",
          "**게시와 접근.** 노트 하위 트리를 읽기 전용 웹사이트로 게시할 수 있고(서버 전용), TOTP 다중 인증과 OpenID Connect 로그인을 지원합니다.",
          "**AI 채팅과 도구.** 노트와의 채팅, 내장 노트 도구로 검색하고 편집하는 어시스턴트, 외부 에이전트용 MCP 서버를 제공합니다."
        ],
        "note": "AI 개인정보 페이지는 로컬 모델이 클라우드 모델보다 도구 호출을 덜 안정적으로 처리할 수 있다고 밝히며, 출처에는 성능 수치가 없습니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "데이터 흐름과 개인정보",
        "content": [
          "**노트는 로컬 SQLite 데이터베이스에 저장되며, 보호된 노트로 표시하지 않으면 암호화되지 않습니다. 보호된 노트는 AES-128-CBC를 사용합니다.** AI를 끄면 AI 기능이 어디로도 데이터를 보내지 않습니다. 문서에 따르면 어떤 제공업체를 고르느냐에 따라 노트가 가는 곳이 정해집니다. 개인정보 처리방침은 Trilium Notes가 설치 환경에서 어떤 데이터도 수집하거나 전송하지 않으며 분석이나 텔레메트리가 없다고 밝힙니다. 앱은 새 안정 버전을 확인하려고 GitHub 릴리스 페이지를 주기적으로 조회하고, 필요에 따라 맞춤법 사전을 내려받습니다.",
          "클라우드 제공업체(Anthropic, OpenAI, Google, DeepSeek 또는 사용자 지정 OpenAI 호환 엔드포인트)를 쓰면 노출한 노트 내용이 해당 제공업체로 전송되며, Ollama나 LM Studio를 쓰면 AI 개인정보 페이지에 따라 모든 메시지가 모델이 실행되는 기기 안에 머뭅니다. 웹 검색을 켜면 모델의 검색어가 제공업체 자체의 검색 인프라로 전송됩니다. 첨부 파일은 OCR 같은 사전 처리 없이 제공업체로 전송됩니다. 노트 도구에는 권한 관리가 없으므로 모델이 노트를 삭제하거나 트리를 어지럽힐 수 있습니다. 삭제된 노트는 복원할 수 있고 편집은 수정 이력을 남기지만, 속성 변경에는 이력이 없습니다. 내장 MCP 서버는 기본적으로 꺼져 있으며, 켜면 ETAPI 토큰이 REST API와 같은 전체 읽기·쓰기 권한을 노트에 부여합니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이는 개발자의 설명이며 감사 결과가 아니고, PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다. 개인정보 처리방침에는 운영 주체, 연락처, 최종 수정일이 나와 있지 않습니다."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "이런 분께 적합합니다",
        "items": [
          "**셀프 호스팅 사용자**: 자신의 서버에서 기기 간 동기화가 되는 무료 지식 베이스를 원하는 분.",
          "**Ollama·LM Studio 사용자**: 자신의 컴퓨터에 있는 모델로 노트를 검색하고 편집하는 어시스턴트를 원하는 분.",
          "**파워 유저**: 일반 파일 폴더보다 트리, 관계, JavaScript 스크립팅을 선호하는 분."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 내용",
        "items": [
          "**성능.** 대용량 데이터베이스에서의 속도, 메모리 사용량, 로컬 모델 답변 품질은 테스트하지 않았습니다.",
          "**개인정보 관련 설명.** 방침과 AI 개인정보 페이지는 개발자의 선언이며, 네트워크 트래픽, 링크 미리보기, 웹 클리퍼는 검토하지 않았습니다.",
          "**모바일.** 공식 휴대폰 앱이 없으며, 비공식 Android 앱은 살펴보지 않았습니다.",
          "**요구 사항.** 데스크톱 앱의 최소 운영체제, RAM, 디스크 수치는 공개되어 있지 않습니다.",
          "**AI 안전 한계.** 문서는 노트 도구에 권한 관리가 없다고 밝히며, 모델이 요청 범위를 얼마나 안정적으로 지키는지는 테스트하지 않았습니다."
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
            "앱": "[SiYuan](/ko/power-local-llm/siyuan-review)",
            "플랫폼": "Mac, Windows, Linux, iPhone, Android",
            "가격 / 라이선스": "무료 + 유료 동기화 / AGPL-3.0",
            "핵심 차이": "셀프 호스팅, 블록 단위 참조, 내장 AI 에이전트"
          },
          {
            "앱": "[Tolaria](/ko/power-local-llm/tolaria-review)",
            "플랫폼": "Mac, Windows, Linux",
            "가격 / 라이선스": "무료 / AGPL-3.0-or-later",
            "핵심 차이": "Git 기반 보관함에 Markdown 파일 저장"
          }
        ],
        "note": "선택하기 전에 각 앱의 현재 가격, 라이선스, 지원 플랫폼을 해당 앱 페이지에서 확인하십시오."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "iPhone이나 Android용 공식 Trilium Notes 앱이 있습니까?",
            "a": "없습니다. 서버에는 웹 앱(PWA)으로 설치할 수 있는 모바일 웹 프런트엔드가 포함되어 있고, 커뮤니티가 TriliumDroid라는 비공식 Android 앱을 운영하며 사이트는 이 앱이 오프라인에서 작동한다고 밝힙니다."
          },
          {
            "q": "Trilium Notes는 zadam의 원래 Trilium과 같은 프로젝트입니까?",
            "a": "그 프로젝트를 바탕으로 합니다. 사이트는 2017년부터 2024년까지의 공을 zadam에게, 2024년부터는 Elian Doran과 커뮤니티에게 돌립니다. 사용할 저장소는 TriliumNext/Trilium입니다."
          },
          {
            "q": "Trilium Notes는 어떤 AI 제공업체를 지원합니까?",
            "a": "API 키를 쓰는 Anthropic, OpenAI, Google(Gemini), DeepSeek, 현재 문서에 나온 유일한 구독형인 Claude Code, 로컬의 Ollama와 LM Studio, 그리고 OpenRouter, Groq, Mistral 같은 모든 OpenAI 호환 엔드포인트를 지원합니다."
          },
          {
            "q": "Trilium Notes는 얼마나 자주 릴리스됩니까?",
            "a": "GitHub 릴리스에는 2026년 7월 25일 0.104.1, 8월 19일 0.105.0, 9월 25일 0.106.0, 10월 23일 0.106.1이 있어 대략 한 달에 한 번 릴리스됩니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "총평",
        "content": "Trilium Notes는 Mac, Windows, Linux, 자체 서버용 무료 AGPL-3.0 트리형 지식 베이스를 제공하고, Ollama, LM Studio, 클라우드 제공업체를 통한 선택형 AI를 지원하며, 대략 한 달에 한 번 릴리스됩니다. 반면 개인정보 처리방침에 운영 주체와 연락처가 없고, 공식 휴대폰 앱이 없으며, AI 노트 도구에 권한 관리가 없고, 속도와 답변 품질은 테스트하지 않았습니다. AI를 끄거나 로컬 모델에만 연결해 쓰는 셀프 호스팅 사용자와 트리·관계 중심 노트 사용자에게 적합하며, 감사를 거친 개인정보 보호 근거가 필요한 분은 문서를 증거가 아닌 개발자의 설명으로 보아야 합니다."
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[Trilium Notes 웹사이트](https://triliumnotes.org) — 기능, 플랫폼, 라이선스, AI 요약. 2026년 11월 3일 확인.",
          "[Trilium Notes AI 문서](https://docs.triliumnotes.org/user-guide/llm) — 제공업체, MCP 서버, 경고. 2026년 11월 3일 확인.",
          "[Trilium Notes 개인정보 처리방침](https://docs.triliumnotes.org/user-guide/misc/privacy-policy) — 데이터 수집, 텔레메트리, 업데이트 확인. 2026년 11월 3일 확인.",
          "[Trilium Notes AI 개인정보 페이지](https://docs.triliumnotes.org/user-guide/llm/Privacy) — 제공업체 유형별 전송 데이터, 웹 검색, MCP. 2026년 11월 3일 확인.",
          "[Trilium Notes 서버 문서](https://docs.triliumnotes.org/user-guide/setup/server) — 설치 옵션과 구성. 2026년 11월 3일 확인.",
          "[Trilium Notes Docker 문서](https://docs.triliumnotes.org/user-guide/setup/server/installation/docker) — 이미지, 포트, 경고. 2026년 11월 3일 확인.",
          "[GitHub의 Trilium Notes](https://github.com/TriliumNext/Trilium) — 릴리스, 파일, 라이선스. 2026년 11월 3일 확인."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[Logseq 리뷰](/ko/power-local-llm/logseq-review) — 선택형 MCP 서버를 갖춘 오픈소스 로컬 우선 아웃라이너.",
          "[SiYuan 리뷰](/ko/power-local-llm/siyuan-review) — 내장 AI 에이전트를 갖춘 셀프 호스팅 지식 작업 공간.",
          "[Tolaria 리뷰](/ko/power-local-llm/tolaria-review) — Git 기반 보관함에 Markdown 파일을 두는 무료 데스크톱 노트 앱.",
          "[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그."
        ]
      }
    }
  },
}
