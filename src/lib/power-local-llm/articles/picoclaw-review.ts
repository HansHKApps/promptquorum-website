// PicoClaw Review: Open-Source AI Agent for Small Devices
// Slug: picoclaw-review
// Companion to: nanobot-review, openclaw-review, hermes-agent-review
// Sources: picoclaw.io (home, FAQ, download page), the GitHub repo sipeed/picoclaw (README, MIT licence, releases, commits) and
// docs.picoclaw.io, all checked 2026-11-01 — no hands-on testing. Price is "free" (MIT); no storefront prices, so nothing to localise.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-01",
    "dateModified": "2026-11-01",
    "next_refresh_due": "2027-05-01",
    "theme": "Local AI Agents & Tool Use",
    "heroImage": "/images/picoclaw-review-hero-en.webp",
    "title": "PicoClaw Review: Open-Source AI Agent for Small Devices",
    "seoTitle": "PicoClaw Review: Small Open-Source AI Agent in Go",
    "intro": "PicoClaw is a free, MIT-licensed personal AI agent written in Go by the hardware company Sipeed. It is built to run on low-cost Linux boards, old Android phones and ordinary desktops, and it forwards your requests to a language model you choose: a cloud provider, or your own Ollama or vLLM server. This review is based on [picoclaw.io](https://picoclaw.io), the [GitHub repository](https://github.com/sipeed/picoclaw) and the project documentation, checked on 1 November 2026; PromptQuorum has not tested PicoClaw hands-on.",
    "metaDescription": "PicoClaw review: free MIT-licensed AI agent in Go by Sipeed for small boards, Android and desktops, with Ollama and vLLM support. Early-stage; untested.",
    "twitterDescription": "PicoClaw review: a small open-source AI agent from Sipeed that connects chat apps to your own Ollama or vLLM server or a cloud model. What the sources confirm and what they do not.",
    "audience": "Tinkerers with a Raspberry Pi, a RISC-V board, a spare Android phone or a home server who want a lightweight AI assistant and need to know what PicoClaw does, what it needs and what the sources leave open.",
    "readTime": "5 min read",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "PicoClaw review",
    "targetKeywords": [
      "picoclaw review",
      "picoclaw ai agent",
      "sipeed picoclaw",
      "picoclaw ollama",
      "ai agent raspberry pi",
      "lightweight ai assistant android",
      "picoclaw install"
    ],
    "current_models_mentioned": [
      "Llama"
    ],
    "current_hardware_mentioned": [
      "Raspberry Pi",
      "RISC-V",
      "Android"
    ],
    "leadAnswerBlock": "**PicoClaw (version 0.3.1, released on 3 July 2026) is a free, MIT-licensed personal AI agent from Sipeed that runs as a single Go program on small boards, Android phones and desktops and passes your requests to a language model you configure.** It does not run a model itself, so a cloud API key or a local Ollama or vLLM server is required.",
    "quickAnswerTop": {
      "en": {
        "question": "Can PicoClaw run an AI model by itself?",
        "answer": "No. PicoClaw is the agent layer; the model comes from a provider you configure, per the README. Cloud providers need an API key, while Ollama and vLLM are listed as local options that need none.",
        "bullets": [
          "It connects to chat channels such as Telegram, Discord and Slack, per the maker.",
          "It supports MCP servers, scheduled tasks, web search and long-term memory.",
          "The site gives 64 MB of RAM as the minimum and 512 MB as the recommended amount.",
          "Downloads cover Linux, macOS, Windows, Android and Docker."
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
        "label": "What Is PicoClaw?",
        "anchor": "what-is-picoclaw"
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
            "text": "PicoClaw is a small open-source AI assistant from Sipeed, written in Go, that connects chat apps and tools to a language model of your choice."
          },
          {
            "type": "plain-terms",
            "text": "You install one program on a board, phone or computer, point it at a cloud model or your own Ollama server, and then talk to it from a chat app or a browser page."
          }
        ],
        "items": [
          "Maintenance: the latest stable release, version 0.3.1, is from 3 July 2026 and the newest commit on the main branch is from 19 August 2026, so no stale-project warning applies.",
          "Model: none is included; Ollama, vLLM and many cloud providers are supported.",
          "Cost: the software is free under the MIT licence, and you pay only your own model provider, per the site FAQ.",
          "Maturity: the README calls it early-stage software and advises against production use before version 1.0.",
          "Maker: Sipeed, a hardware company; the README says PicoClaw is not a fork of OpenClaw or NanoBot."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "This review is based on picoclaw.io, the GitHub repository and the documentation site, checked on 1 November 2026. PromptQuorum has not installed, run or benchmarked PicoClaw, so speed, memory use and answer quality are not assessed."
          }
        ]
      },
      "overview": {
        "id": "what-is-picoclaw",
        "title": "What Is PicoClaw?",
        "content": [
          "**PicoClaw is a personal AI assistant program written in Go by Sipeed, built to start fast and use little memory on cheap hardware.** The README calls it an independent open-source project written from scratch and inspired by NanoBot. Sipeed also makes the RISC-V boards that the project advertises.",
          "The program connects a language model to chat channels and tools. Per the site, it supports more than 16 chat channels, web search, scheduled tasks, long-term memory, MCP and REST API integration, and a gateway mode. The README adds that about 95 per cent of the core code was generated by an AI agent and refined through human review; this is the maker's statement and was not checked."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Get It",
        "content": [
          "**PicoClaw is a free download for Linux, macOS, Windows and Android, with Docker and package files as alternatives.**"
        ],
        "columns": [
          "Option",
          "How to get it"
        ],
        "rows": [
          {
            "Option": "Windows, macOS, Linux",
            "How to get it": "Download from [picoclaw.io/download](https://picoclaw.io/download), then open the picoclaw-launcher program to use the browser-based WebUI on your own computer"
          },
          {
            "Option": "Android",
            "How to get it": "APK from [picoclaw.io/download](https://picoclaw.io/download), no Termux needed per the README; a Termux setup is the alternative"
          },
          {
            "Option": "Docker",
            "How to get it": "Docker Compose files in the [GitHub repository](https://github.com/sipeed/picoclaw)"
          },
          {
            "Option": "Packages and binaries",
            "How to get it": "[GitHub Releases](https://github.com/sipeed/picoclaw/releases): archives for Linux, macOS, Windows and FreeBSD, plus .deb and .rpm packages"
          },
          {
            "Option": "Website",
            "How to get it": "[picoclaw.io](https://picoclaw.io)"
          },
          {
            "Option": "Documentation",
            "How to get it": "[docs.picoclaw.io](https://docs.picoclaw.io)"
          },
          {
            "Option": "Privacy policy",
            "How to get it": "None found on picoclaw.io or in the repository"
          },
          {
            "Option": "Source code",
            "How to get it": "[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw), MIT licence"
          }
        ],
        "note": "Version reviewed: 0.3.1, released on 3 July 2026 per GitHub Releases. The macOS build is not notarized by Apple, so macOS asks you to allow it under Privacy & Security on first launch. The download page lists platforms only through JavaScript, so exact installer file names were not seen; the file types above come from GitHub Releases."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requirements",
        "content": [
          "**The site gives 64 MB of RAM as the minimum and 512 MB as the recommended amount, plus an internet connection.**"
        ],
        "columns": [
          "Item",
          "What the sources say"
        ],
        "rows": [
          {
            "Item": "Memory",
            "What the sources say": "The README gives under 10 MB for the core program and notes that recent builds may use 10 to 20 MB"
          },
          {
            "Item": "Processors",
            "What the sources say": "x86_64, ARM64, ARMv7, ARMv6, RISC-V, MIPS and LoongArch are named"
          },
          {
            "Item": "Operating system",
            "What the sources say": "Linux, macOS, Windows, Android and FreeBSD; the minimum Android version is not stated"
          },
          {
            "Item": "Language model",
            "What the sources say": "A provider you configure: a cloud API with a key, or an Ollama or vLLM server without one"
          },
          {
            "Item": "Building from source",
            "What the sources say": "Go 1.25 or later, plus Node.js 22 and pnpm for the WebUI launcher"
          }
        ],
        "note": "Which models run well on which board is not stated; that depends on the model server, not on PicoClaw."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "How to Get Started",
        "content": [
          "**The steps follow the README and the site; PromptQuorum has not run them.**"
        ],
        "numberedItems": [
          {
            "title": "Download PicoClaw",
            "whyItMatters": "Get the build for your system from picoclaw.io, or the APK on Android; the sources mention no account."
          },
          {
            "title": "Open the launcher or run onboarding",
            "whyItMatters": "On a desktop, start picoclaw-launcher and use the WebUI in your browser; in a terminal, run picoclaw onboard to create the workspace."
          },
          {
            "title": "Choose a model provider",
            "whyItMatters": "Enter an API key for a cloud provider, or point PicoClaw at your Ollama server (for example http://localhost:11434/v1) or your vLLM server."
          },
          {
            "title": "Connect a chat channel",
            "whyItMatters": "Add Telegram, Discord or another channel in the configuration and message the agent; MCP servers and scheduled tasks are further options in the documentation."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Confirmed by the Sources",
        "content": [
          "**Every item below comes from the website, the README or the documentation; none has been tested here.**"
        ],
        "items": [
          "**Chat channels.** More than 16 are listed by the site, including Telegram, Discord, Slack and QQ; the documentation also names DingTalk, Feishu, WeCom and LINE.",
          "**Providers.** Many cloud providers plus Ollama and vLLM, with rule-based model routing that sends simple queries to lighter models.",
          "**Tools.** Web search, cron-based scheduling, MCP servers managed from the command line and the WebUI, a REST API, and a vision pipeline for images and files.",
          "**Memory.** Long-term memory and a JSONL memory store, per the site and the release notes.",
          "**Portability.** One binary for x86_64, ARM, RISC-V, MIPS and LoongArch, plus an Android build."
        ],
        "note": "The README lists a security-hardening release (0.2.4) but publishes no audit, so the security of its tools is not independently confirmed."
      },
      "privacy": {
        "id": "privacy",
        "title": "Data Flow and Privacy",
        "content": [
          "**The site FAQ says conversation history and configuration stay on your device, while requests to the language model still go to the provider you configure.**",
          "With a cloud provider, your prompts therefore reach that provider under its own policy; with Ollama or vLLM on your own network they stay there. Messages sent through a chat channel such as Telegram also pass through that platform."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "These are the maker's statements, not audit results. The README warns of possible unresolved security issues, and PromptQuorum has not inspected network traffic or the code."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**Raspberry Pi and RISC-V owners** who want a small agent on a board they already have.",
          "**Ollama or vLLM users** who want chat-app access to a model on their own network.",
          "**Tinkerers with an old Android phone** who want to try an always-on assistant without extra hardware."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Production readiness.** The README says PicoClaw is in early rapid development, may have unresolved security issues and should not be deployed to production before version 1.0.",
          "**Memory claims.** The headline figure of under 10 MB and the comparison with OpenClaw and NanoBot are the maker's own; none was measured here.",
          "**Android details.** The minimum Android version, APK signing and which features work on a phone are not stated.",
          "**Data handling.** No privacy policy or data-handling document was found, and network traffic was not inspected.",
          "**Local-model quality.** How well small boards and local models handle agent tasks is untested."
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
            "App": "[nanobot](/power-local-llm/nanobot-review)",
            "Platforms": "Windows, macOS, Linux",
            "Price / license": "Free / MIT",
            "Key difference": "Self-hosted agent framework with memory, MCP tools and chat channels"
          },
          {
            "App": "[OpenClaw](/power-local-llm/openclaw-review)",
            "Platforms": "Windows, macOS, Linux",
            "Price / license": "Free / MIT",
            "Key difference": "Orchestration framework for agent workflows"
          },
          {
            "App": "[Hermes Agent](/power-local-llm/hermes-agent-review)",
            "Platforms": "macOS, Linux",
            "Price / license": "Free / MIT",
            "Key difference": "Command-line agent with persistent memory"
          }
        ],
        "note": "Confirm each app's current price, license and platforms on its own listing before choosing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "Is PicoClaw a fork of OpenClaw?",
            "a": "No. The README calls it an independent project written from scratch in Go, inspired by NanoBot, and says it is not a fork of OpenClaw, NanoBot or any other project."
          },
          {
            "q": "Which local models does PicoClaw work with?",
            "a": "The README shows configuration examples for Ollama (such as llama3.1:8b) and vLLM through their OpenAI-compatible addresses, and the site says any OpenAI-compatible API works."
          },
          {
            "q": "Is there an official PicoClaw cryptocurrency?",
            "a": "No. The README says PicoClaw has issued no tokens or cryptocurrency, that picoclaw.io is the only official website, and that many lookalike domains were registered by third parties."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "PicoClaw is an MIT-licensed way to put a small AI agent on cheap boards, old phones and desktops and connect it to your own Ollama or vLLM server or a cloud model. Against that, the maker itself calls it early-stage, data handling is described only in a short FAQ answer, and PromptQuorum has not tested speed, memory use or Android behaviour. It suits tinkerers who can try it on spare hardware; it should not carry anything that must be reliable or secure until the project says it is ready."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[PicoClaw website](https://picoclaw.io) — product overview, FAQ, hardware figures and footer links, checked 1 November 2026.",
          "[PicoClaw download page](https://picoclaw.io/download) — download sources and the onboarding command, checked 1 November 2026.",
          "[PicoClaw on GitHub](https://github.com/sipeed/picoclaw) — README, MIT licence, security notice and commit history, checked 1 November 2026.",
          "[PicoClaw releases](https://github.com/sipeed/picoclaw/releases) — version 0.3.1 of 3 July 2026 and its file list, checked 1 November 2026.",
          "[PicoClaw documentation](https://docs.picoclaw.io) — chat channels and configuration guides, checked 1 November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[nanobot Review](/power-local-llm/nanobot-review) — a self-hosted personal AI agent framework with memory and MCP tools.",
          "[OpenClaw Review](/power-local-llm/openclaw-review) — an orchestration framework for agent workflows.",
          "[Hermes Agent Review](/power-local-llm/hermes-agent-review) — a command-line agent with persistent memory.",
          "[Local LLM Software Directory](/directory) — the full catalogue of local AI tools."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "PicoClaw Review: Open-Source AI Agent for Small Devices",
      "description": "PicoClaw review: a free, MIT-licensed personal AI agent in Go from Sipeed for small boards, Android phones and desktops, with Ollama and vLLM support. Requirements, privacy and what the sources leave unconfirmed.",
      "url": "https://www.promptquorum.com/power-local-llm/picoclaw-review",
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
        "audienceType": "Hobbyists evaluating a lightweight open-source AI agent for small boards, Android phones and desktops"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "PicoClaw"
        },
        {
          "@type": "Thing",
          "name": "Sipeed"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "AI agents"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/power-local-llm/picoclaw-review"
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
          "name": "PicoClaw Review",
          "item": "https://www.promptquorum.com/power-local-llm/picoclaw-review"
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
    "theme": "Local AI Agents & Tool Use",
    "heroImage": "/images/picoclaw-review-hero-de.webp",
    "title": "PicoClaw-Rezension: Open-Source-KI-Agent für kleine Geräte",
    "seoTitle": "PicoClaw-Rezension: Kleiner Open-Source-KI-Agent in Go",
    "intro": "PicoClaw ist ein kostenloser, MIT-lizenzierter persönlicher KI-Agent, den das Hardwareunternehmen Sipeed in Go geschrieben hat. Er soll auf günstigen Linux-Boards, alten Android-Smartphones und normalen Desktop-Rechnern laufen und leitet Ihre Anfragen an ein Sprachmodell Ihrer Wahl weiter: einen Cloud-Anbieter oder Ihren eigenen Ollama- oder vLLM-Server. Diese Rezension stützt sich auf [picoclaw.io](https://picoclaw.io), das [GitHub-Repository](https://github.com/sipeed/picoclaw) und die Projektdokumentation, geprüft am 1. November 2026; PromptQuorum hat PicoClaw nicht selbst getestet.",
    "metaDescription": "PicoClaw-Rezension: kostenloser KI-Agent in Go von Sipeed für kleine Boards, Android und Desktop, mit Ollama und vLLM. Frühes Stadium; ungetestet.",
    "twitterDescription": "PicoClaw-Rezension: ein kleiner Open-Source-KI-Agent von Sipeed, der Chat-Apps mit Ihrem eigenen Ollama- oder vLLM-Server oder einem Cloud-Modell verbindet. Was die Quellen bestätigen und was nicht.",
    "audience": "Bastler mit Raspberry Pi, RISC-V-Board, ausrangiertem Android-Smartphone oder Heimserver, die einen schlanken KI-Assistenten suchen und wissen möchten, was PicoClaw kann, was es braucht und was die Quellen offenlassen.",
    "readTime": "5 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "PicoClaw Rezension",
    "targetKeywords": [
      "picoclaw rezension",
      "picoclaw ki agent",
      "sipeed picoclaw",
      "picoclaw ollama",
      "ki agent raspberry pi",
      "schlanker ki assistent android",
      "picoclaw installieren"
    ],
    "current_models_mentioned": [
      "Llama"
    ],
    "current_hardware_mentioned": [
      "Raspberry Pi",
      "RISC-V",
      "Android"
    ],
    "leadAnswerBlock": "**PicoClaw (Version 0.3.1, veröffentlicht am 3. Juli 2026) ist ein kostenloser, MIT-lizenzierter persönlicher KI-Agent von Sipeed, der als einzelnes Go-Programm auf kleinen Boards, Android-Smartphones und Desktop-Rechnern läuft und Ihre Anfragen an ein von Ihnen konfiguriertes Sprachmodell weiterreicht.** Er führt selbst kein Modell aus; nötig sind also ein Cloud-API-Schlüssel oder ein lokaler Ollama- oder vLLM-Server.",
    "quickAnswerTop": {
      "de": {
        "question": "Kann PicoClaw ein KI-Modell selbst ausführen?",
        "answer": "Nein. PicoClaw ist die Agentenschicht; das Modell stammt laut README von einem Anbieter, den Sie konfigurieren. Cloud-Anbieter brauchen einen API-Schlüssel, Ollama und vLLM sind als lokale Optionen ohne Schlüssel aufgeführt.",
        "bullets": [
          "Laut Hersteller verbindet er sich mit Chat-Kanälen wie Telegram, Discord und Slack.",
          "Er unterstützt MCP-Server, geplante Aufgaben, Websuche und ein Langzeitgedächtnis.",
          "Die Website nennt 64 MB RAM als Minimum und 512 MB als empfohlene Menge.",
          "Downloads gibt es für Linux, macOS, Windows, Android und Docker."
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
        "label": "Was ist PicoClaw?",
        "anchor": "what-is-picoclaw"
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
            "text": "PicoClaw ist ein kleiner quelloffener KI-Assistent von Sipeed, geschrieben in Go, der Chat-Apps und Werkzeuge mit einem Sprachmodell Ihrer Wahl verbindet."
          },
          {
            "type": "plain-terms",
            "text": "Sie installieren ein einziges Programm auf einem Board, Smartphone oder Computer, richten es auf ein Cloud-Modell oder Ihren eigenen Ollama-Server und sprechen dann über eine Chat-App oder eine Browserseite mit ihm."
          }
        ],
        "items": [
          "Pflege: Das neueste stabile Release, Version 0.3.1, stammt vom 3. Juli 2026, der jüngste Commit im Hauptzweig vom 19. August 2026; eine Warnung vor einem verwaisten Projekt entfällt daher.",
          "Modell: Es ist keines enthalten; unterstützt werden Ollama, vLLM und viele Cloud-Anbieter.",
          "Kosten: Die Software ist unter der MIT-Lizenz kostenlos, Sie zahlen laut FAQ der Website nur Ihren eigenen Modellanbieter.",
          "Reifegrad: Das README nennt sie Software im frühen Stadium und rät vor Version 1.0 vom Produktiveinsatz ab.",
          "Hersteller: Sipeed, ein Hardwareunternehmen; laut README ist PicoClaw kein Fork von OpenClaw oder NanoBot."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Diese Rezension stützt sich auf picoclaw.io, das GitHub-Repository und die Dokumentationsseite, geprüft am 1. November 2026. PromptQuorum hat PicoClaw weder installiert noch ausgeführt oder gemessen; Geschwindigkeit, Speicherbedarf und Antwortqualität werden daher nicht bewertet."
          }
        ]
      },
      "overview": {
        "id": "what-is-picoclaw",
        "title": "Was ist PicoClaw?",
        "content": [
          "**PicoClaw ist ein persönliches KI-Assistenzprogramm, das Sipeed in Go geschrieben hat und das auf billiger Hardware schnell starten und wenig Speicher belegen soll.** Das README beschreibt es als unabhängiges Open-Source-Projekt, von Grund auf neu geschrieben und von NanoBot inspiriert. Sipeed stellt auch die RISC-V-Boards her, mit denen das Projekt wirbt.",
          "Das Programm verbindet ein Sprachmodell mit Chat-Kanälen und Werkzeugen. Laut Website unterstützt es mehr als 16 Chat-Kanäle, Websuche, geplante Aufgaben, ein Langzeitgedächtnis, MCP- und REST-API-Anbindung sowie einen Gateway-Modus. Das README ergänzt, rund 95 Prozent des Kerncodes seien von einem KI-Agenten erzeugt und durch menschliche Prüfung verfeinert worden; das ist die Aussage des Herstellers und wurde nicht überprüft."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Bezugsquelle",
        "content": [
          "**PicoClaw ist ein kostenloser Download für Linux, macOS, Windows und Android; Docker und Paketdateien sind Alternativen.**"
        ],
        "columns": [
          "Option",
          "Bezug"
        ],
        "rows": [
          {
            "Option": "Windows, macOS, Linux",
            "Bezug": "Download unter [picoclaw.io/download](https://picoclaw.io/download), danach das Programm picoclaw-launcher öffnen, um die browserbasierte WebUI auf dem eigenen Rechner zu nutzen"
          },
          {
            "Option": "Android",
            "Bezug": "APK unter [picoclaw.io/download](https://picoclaw.io/download), laut README ohne Termux; ein Termux-Setup ist die Alternative"
          },
          {
            "Option": "Docker",
            "Bezug": "Docker-Compose-Dateien im [GitHub-Repository](https://github.com/sipeed/picoclaw)"
          },
          {
            "Option": "Pakete und Binärdateien",
            "Bezug": "[GitHub Releases](https://github.com/sipeed/picoclaw/releases): Archive für Linux, macOS, Windows und FreeBSD sowie .deb- und .rpm-Pakete"
          },
          {
            "Option": "Website",
            "Bezug": "[picoclaw.io](https://picoclaw.io)"
          },
          {
            "Option": "Dokumentation",
            "Bezug": "[docs.picoclaw.io](https://docs.picoclaw.io)"
          },
          {
            "Option": "Datenschutzerklärung",
            "Bezug": "Auf picoclaw.io und im Repository nicht gefunden"
          },
          {
            "Option": "Quellcode",
            "Bezug": "[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw), MIT-Lizenz"
          }
        ],
        "note": "Geprüfte Version: 0.3.1, laut GitHub Releases am 3. Juli 2026 veröffentlicht. Der macOS-Build ist nicht von Apple notarisiert; macOS verlangt beim ersten Start die Freigabe unter „Datenschutz & Sicherheit“. Die Download-Seite zeigt Plattformen nur per JavaScript, die genauen Installationsdateinamen wurden daher nicht gesehen; die oben genannten Dateitypen stammen von GitHub Releases."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Anforderungen",
        "content": [
          "**Die Website nennt 64 MB RAM als Minimum und 512 MB als empfohlene Menge, dazu eine Internetverbindung.**"
        ],
        "columns": [
          "Punkt",
          "Was die Quellen sagen"
        ],
        "rows": [
          {
            "Punkt": "Arbeitsspeicher",
            "Was die Quellen sagen": "Das README nennt unter 10 MB für das Kernprogramm und merkt an, aktuelle Builds könnten 10 bis 20 MB belegen"
          },
          {
            "Punkt": "Prozessoren",
            "Was die Quellen sagen": "Genannt werden x86_64, ARM64, ARMv7, ARMv6, RISC-V, MIPS und LoongArch"
          },
          {
            "Punkt": "Betriebssystem",
            "Was die Quellen sagen": "Linux, macOS, Windows, Android und FreeBSD; die minimale Android-Version wird nicht genannt"
          },
          {
            "Punkt": "Sprachmodell",
            "Was die Quellen sagen": "Ein von Ihnen konfigurierter Anbieter: eine Cloud-API mit Schlüssel oder ein Ollama- oder vLLM-Server ohne Schlüssel"
          },
          {
            "Punkt": "Selbst kompilieren",
            "Was die Quellen sagen": "Go 1.25 oder neuer sowie Node.js 22 und pnpm für den WebUI-Launcher"
          }
        ],
        "note": "Welche Modelle auf welchem Board gut laufen, wird nicht genannt; das hängt vom Modellserver ab, nicht von PicoClaw."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "So gelingt der Einstieg",
        "content": [
          "**Die Schritte folgen dem README und der Website; PromptQuorum hat sie nicht ausgeführt.**"
        ],
        "numberedItems": [
          {
            "title": "PicoClaw herunterladen",
            "whyItMatters": "Laden Sie den Build für Ihr System von picoclaw.io herunter, unter Android die APK; die Quellen erwähnen kein Konto."
          },
          {
            "title": "Launcher öffnen oder Onboarding starten",
            "whyItMatters": "Starten Sie am Desktop picoclaw-launcher und nutzen Sie die WebUI im Browser; im Terminal legt picoclaw onboard den Arbeitsbereich an."
          },
          {
            "title": "Modellanbieter wählen",
            "whyItMatters": "Tragen Sie einen API-Schlüssel für einen Cloud-Anbieter ein oder richten Sie PicoClaw auf Ihren Ollama-Server (zum Beispiel http://localhost:11434/v1) oder Ihren vLLM-Server."
          },
          {
            "title": "Chat-Kanal verbinden",
            "whyItMatters": "Fügen Sie Telegram, Discord oder einen anderen Kanal in der Konfiguration hinzu und schreiben Sie dem Agenten; MCP-Server und geplante Aufgaben sind weitere Optionen der Dokumentation."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Von den Quellen bestätigte Funktionen",
        "content": [
          "**Jeder Punkt unten stammt von der Website, aus dem README oder der Dokumentation; keiner wurde hier getestet.**"
        ],
        "items": [
          "**Chat-Kanäle.** Die Website listet mehr als 16, darunter Telegram, Discord, Slack und QQ; die Dokumentation nennt außerdem DingTalk, Feishu, WeCom und LINE.",
          "**Anbieter.** Viele Cloud-Anbieter sowie Ollama und vLLM, mit regelbasiertem Modell-Routing, das einfache Anfragen an leichtere Modelle schickt.",
          "**Werkzeuge.** Websuche, Cron-Zeitplanung, MCP-Server über Kommandozeile und WebUI, eine REST-API und eine Vision-Pipeline für Bilder und Dateien.",
          "**Gedächtnis.** Langzeitgedächtnis und ein JSONL-Speicher, laut Website und Release-Notes.",
          "**Portabilität.** Eine Binärdatei für x86_64, ARM, RISC-V, MIPS und LoongArch sowie ein Android-Build."
        ],
        "note": "Das README nennt ein Release mit Sicherheitshärtung (0.2.4), veröffentlicht aber kein Audit; die Sicherheit der Werkzeuge ist daher nicht unabhängig bestätigt."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenfluss und Datenschutz",
        "content": [
          "**Laut FAQ der Website bleiben Gesprächsverlauf und Konfiguration auf Ihrem Gerät, während Anfragen an das Sprachmodell weiterhin an den von Ihnen konfigurierten Anbieter gehen.**",
          "Bei einem Cloud-Anbieter erreichen Ihre Prompts also diesen Anbieter nach dessen eigener Richtlinie; mit Ollama oder vLLM im eigenen Netzwerk bleiben sie dort. Nachrichten über einen Chat-Kanal wie Telegram laufen zusätzlich über diese Plattform."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Das sind Aussagen des Herstellers, keine Prüfergebnisse. Das README warnt vor möglichen ungelösten Sicherheitsproblemen, und PromptQuorum hat weder den Netzwerkverkehr noch den Code untersucht."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen sich die App eignet",
        "items": [
          "**Besitzer von Raspberry Pi und RISC-V-Boards**, die einen kleinen Agenten auf einem vorhandenen Board wollen.",
          "**Ollama- oder vLLM-Nutzer**, die per Chat-App auf ein Modell im eigenen Netzwerk zugreifen möchten.",
          "**Bastler mit altem Android-Smartphone**, die einen dauerhaft laufenden Assistenten ohne zusätzliche Hardware ausprobieren wollen."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht überprüfen konnten",
        "items": [
          "**Produktionsreife.** Laut README befindet sich PicoClaw in früher, schneller Entwicklung, kann ungelöste Sicherheitsprobleme haben und sollte vor Version 1.0 nicht produktiv eingesetzt werden.",
          "**Speicherangaben.** Der Kernwert von unter 10 MB und der Vergleich mit OpenClaw und NanoBot stammen vom Hersteller; nichts davon wurde hier gemessen.",
          "**Android-Details.** Minimale Android-Version, APK-Signatur und welche Funktionen auf einem Smartphone laufen, werden nicht genannt.",
          "**Datenverarbeitung.** Eine Datenschutzerklärung oder ein Dokument zur Datenverarbeitung wurde nicht gefunden, der Netzwerkverkehr wurde nicht untersucht.",
          "**Qualität lokaler Modelle.** Wie gut kleine Boards und lokale Modelle Agentenaufgaben bewältigen, ist ungetestet."
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
            "App": "[nanobot](/de/power-local-llm/nanobot-review)",
            "Plattformen": "Windows, macOS, Linux",
            "Preis / Lizenz": "Gratis / MIT",
            "Hauptunterschied": "Selbst gehostetes Agenten-Framework mit Gedächtnis, MCP-Tools und Chat-Kanälen"
          },
          {
            "App": "[OpenClaw](/de/power-local-llm/openclaw-review)",
            "Plattformen": "Windows, macOS, Linux",
            "Preis / Lizenz": "Gratis / MIT",
            "Hauptunterschied": "Orchestrierungs-Framework für Agenten-Workflows"
          },
          {
            "App": "[Hermes Agent](/de/power-local-llm/hermes-agent-review)",
            "Plattformen": "macOS, Linux",
            "Preis / Lizenz": "Gratis / MIT",
            "Hauptunterschied": "Kommandozeilen-Agent mit dauerhaftem Gedächtnis"
          }
        ],
        "note": "Prüfen Sie Preis, Lizenz und Plattformen jeder App vor der Wahl im jeweiligen Eintrag."
      },
      "faq": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Ist PicoClaw ein Fork von OpenClaw?",
            "a": "Nein. Das README nennt es ein unabhängiges, von Grund auf in Go geschriebenes Projekt, von NanoBot inspiriert, und sagt, es sei kein Fork von OpenClaw, NanoBot oder einem anderen Projekt."
          },
          {
            "q": "Mit welchen lokalen Modellen funktioniert PicoClaw?",
            "a": "Das README zeigt Konfigurationsbeispiele für Ollama (etwa llama3.1:8b) und vLLM über deren OpenAI-kompatible Adressen, und die Website sagt, jede OpenAI-kompatible API funktioniere."
          },
          {
            "q": "Gibt es eine offizielle PicoClaw-Kryptowährung?",
            "a": "Nein. Laut README hat PicoClaw weder Token noch Kryptowährung ausgegeben, picoclaw.io ist die einzige offizielle Website, und viele ähnliche Domains wurden von Dritten registriert."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "PicoClaw ist ein MIT-lizenzierter Weg, einen kleinen KI-Agenten auf günstigen Boards, alten Smartphones und Desktops zu betreiben und mit Ihrem eigenen Ollama- oder vLLM-Server oder einem Cloud-Modell zu verbinden. Dagegen nennt der Hersteller es selbst Software im frühen Stadium, die Datenverarbeitung wird nur in einer kurzen FAQ-Antwort beschrieben, und PromptQuorum hat Geschwindigkeit, Speicherbedarf und Android-Verhalten nicht getestet. Es eignet sich für Bastler, die es auf Ersatzhardware ausprobieren können; verlässliche oder sicherheitskritische Aufgaben sollte es nicht übernehmen, bis das Projekt es für bereit erklärt."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[PicoClaw-Website](https://picoclaw.io) — Produktübersicht, FAQ, Hardwareangaben und Fußzeilenlinks, geprüft am 1. November 2026.",
          "[PicoClaw-Download-Seite](https://picoclaw.io/download) — Bezugsquellen und Onboarding-Befehl, geprüft am 1. November 2026.",
          "[PicoClaw auf GitHub](https://github.com/sipeed/picoclaw) — README, MIT-Lizenz, Sicherheitshinweis und Commit-Verlauf, geprüft am 1. November 2026.",
          "[PicoClaw-Releases](https://github.com/sipeed/picoclaw/releases) — Version 0.3.1 vom 3. Juli 2026 und ihre Dateiliste, geprüft am 1. November 2026.",
          "[PicoClaw-Dokumentation](https://docs.picoclaw.io) — Chat-Kanäle und Konfigurationsanleitungen, geprüft am 1. November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[nanobot-Rezension](/de/power-local-llm/nanobot-review) — ein selbst gehostetes Framework für persönliche KI-Agenten mit Gedächtnis und MCP-Tools.",
          "[OpenClaw-Rezension](/de/power-local-llm/openclaw-review) — ein Orchestrierungs-Framework für Agenten-Workflows.",
          "[Hermes-Agent-Rezension](/de/power-local-llm/hermes-agent-review) — ein Kommandozeilen-Agent mit dauerhaftem Gedächtnis.",
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
    "theme": "Local AI Agents & Tool Use",
    "heroImage": "/images/picoclaw-review-hero-es.webp",
    "title": "Reseña de PicoClaw: agente de IA de código abierto para dispositivos pequeños",
    "seoTitle": "Reseña de PicoClaw: agente de IA ligero de código abierto",
    "intro": "PicoClaw es un agente de IA personal gratuito, con licencia MIT, escrito en Go por la empresa de hardware Sipeed. Está pensado para funcionar en placas Linux económicas, móviles Android antiguos y ordenadores de escritorio normales, y envía tus peticiones a un modelo de lenguaje que tú eliges: un proveedor en la nube o tu propio servidor Ollama o vLLM. Esta reseña se basa en [picoclaw.io](https://picoclaw.io), el [repositorio de GitHub](https://github.com/sipeed/picoclaw) y la documentación del proyecto, comprobados el 1 de noviembre de 2026; PromptQuorum no ha probado PicoClaw en la práctica.",
    "metaDescription": "Reseña de PicoClaw: agente de IA gratuito en Go de Sipeed para placas pequeñas, Android y escritorio, con Ollama y vLLM. Fase temprana; sin probar.",
    "twitterDescription": "Reseña de PicoClaw: un pequeño agente de IA de código abierto de Sipeed que conecta apps de chat con tu propio servidor Ollama o vLLM o con un modelo en la nube. Qué confirman las fuentes y qué no.",
    "audience": "Aficionados con una Raspberry Pi, una placa RISC-V, un móvil Android de repuesto o un servidor doméstico que quieren un asistente de IA ligero y necesitan saber qué hace PicoClaw, qué requiere y qué dejan abierto las fuentes.",
    "readTime": "5 min de lectura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "reseña de PicoClaw",
    "targetKeywords": [
      "reseña picoclaw",
      "picoclaw agente ia",
      "sipeed picoclaw",
      "picoclaw ollama",
      "agente ia raspberry pi",
      "asistente ia ligero android",
      "instalar picoclaw"
    ],
    "current_models_mentioned": [
      "Llama"
    ],
    "current_hardware_mentioned": [
      "Raspberry Pi",
      "RISC-V",
      "Android"
    ],
    "leadAnswerBlock": "**PicoClaw (versión 0.3.1, publicada el 3 de julio de 2026) es un agente de IA personal gratuito, con licencia MIT, de Sipeed que se ejecuta como un único programa en Go en placas pequeñas, móviles Android y ordenadores, y pasa tus peticiones a un modelo de lenguaje que configuras.** No ejecuta ningún modelo por sí mismo, así que hace falta una clave de API en la nube o un servidor Ollama o vLLM local.",
    "quickAnswerTop": {
      "es": {
        "question": "¿Puede PicoClaw ejecutar un modelo de IA por sí mismo?",
        "answer": "No. PicoClaw es la capa de agente; según el README, el modelo procede de un proveedor que configuras. Los proveedores en la nube necesitan una clave de API, mientras que Ollama y vLLM figuran como opciones locales que no la requieren.",
        "bullets": [
          "Según el creador, se conecta a canales de chat como Telegram, Discord y Slack.",
          "Admite servidores MCP, tareas programadas, búsqueda web y memoria a largo plazo.",
          "El sitio indica 64 MB de RAM como mínimo y 512 MB como cantidad recomendada.",
          "Hay descargas para Linux, macOS, Windows, Android y Docker."
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
        "label": "¿Qué es PicoClaw?",
        "anchor": "what-is-picoclaw"
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
            "text": "PicoClaw es un pequeño asistente de IA de código abierto de Sipeed, escrito en Go, que conecta apps de chat y herramientas con un modelo de lenguaje a tu elección."
          },
          {
            "type": "plain-terms",
            "text": "Instalas un solo programa en una placa, un móvil o un ordenador, lo apuntas a un modelo en la nube o a tu propio servidor Ollama y luego le hablas desde una app de chat o una página del navegador."
          }
        ],
        "items": [
          "Mantenimiento: la última versión estable, la 0.3.1, es del 3 de julio de 2026 y el commit más reciente de la rama principal es del 19 de agosto de 2026, así que no se aplica ningún aviso de proyecto abandonado.",
          "Modelo: no incluye ninguno; admite Ollama, vLLM y muchos proveedores en la nube.",
          "Coste: el software es gratuito con licencia MIT y solo pagas a tu propio proveedor de modelos, según las preguntas frecuentes del sitio.",
          "Madurez: el README lo describe como software en fase temprana y desaconseja usarlo en producción antes de la versión 1.0.",
          "Creador: Sipeed, una empresa de hardware; según el README, PicoClaw no es un fork de OpenClaw ni de NanoBot."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta reseña se basa en picoclaw.io, el repositorio de GitHub y el sitio de documentación, comprobados el 1 de noviembre de 2026. PromptQuorum no ha instalado, ejecutado ni medido PicoClaw, así que no se evalúan la velocidad, el uso de memoria ni la calidad de las respuestas."
          }
        ]
      },
      "overview": {
        "id": "what-is-picoclaw",
        "title": "¿Qué es PicoClaw?",
        "content": [
          "**PicoClaw es un programa de asistente de IA personal escrito en Go por Sipeed, diseñado para arrancar rápido y usar poca memoria en hardware barato.** El README lo describe como un proyecto de código abierto independiente, escrito desde cero e inspirado en NanoBot. Sipeed también fabrica las placas RISC-V que el proyecto promociona.",
          "El programa conecta un modelo de lenguaje con canales de chat y herramientas. Según el sitio, admite más de 16 canales de chat, búsqueda web, tareas programadas, memoria a largo plazo, integración con MCP y API REST, y un modo gateway. El README añade que alrededor del 95 % del código central fue generado por un agente de IA y refinado con revisión humana; es una afirmación del creador y no se comprobó."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo conseguirla",
        "content": [
          "**PicoClaw se descarga gratis para Linux, macOS, Windows y Android; Docker y los archivos de paquetes son alternativas.**"
        ],
        "columns": [
          "Opción",
          "Cómo conseguirla"
        ],
        "rows": [
          {
            "Opción": "Windows, macOS, Linux",
            "Cómo conseguirla": "Descarga en [picoclaw.io/download](https://picoclaw.io/download) y abre el programa picoclaw-launcher para usar la WebUI en el navegador, en tu propio ordenador"
          },
          {
            "Opción": "Android",
            "Cómo conseguirla": "APK en [picoclaw.io/download](https://picoclaw.io/download), sin Termux según el README; la alternativa es una instalación con Termux"
          },
          {
            "Opción": "Docker",
            "Cómo conseguirla": "Archivos de Docker Compose en el [repositorio de GitHub](https://github.com/sipeed/picoclaw)"
          },
          {
            "Opción": "Paquetes y binarios",
            "Cómo conseguirla": "[GitHub Releases](https://github.com/sipeed/picoclaw/releases): archivos para Linux, macOS, Windows y FreeBSD, más paquetes .deb y .rpm"
          },
          {
            "Opción": "Sitio web",
            "Cómo conseguirla": "[picoclaw.io](https://picoclaw.io)"
          },
          {
            "Opción": "Documentación",
            "Cómo conseguirla": "[docs.picoclaw.io](https://docs.picoclaw.io)"
          },
          {
            "Opción": "Política de privacidad",
            "Cómo conseguirla": "No encontrada en picoclaw.io ni en el repositorio"
          },
          {
            "Opción": "Código fuente",
            "Cómo conseguirla": "[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw), licencia MIT"
          }
        ],
        "note": "Versión revisada: 0.3.1, publicada el 3 de julio de 2026 según GitHub Releases. La compilación para macOS no está notarizada por Apple, así que macOS pide permitirla en Privacidad y seguridad la primera vez que se abre. La página de descargas muestra las plataformas solo mediante JavaScript, por lo que no se vieron los nombres exactos de los instaladores; los tipos de archivo indicados vienen de GitHub Releases."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**El sitio indica 64 MB de RAM como mínimo y 512 MB como cantidad recomendada, además de conexión a internet.**"
        ],
        "columns": [
          "Elemento",
          "Qué dicen las fuentes"
        ],
        "rows": [
          {
            "Elemento": "Memoria",
            "Qué dicen las fuentes": "El README da menos de 10 MB para el programa central y señala que las compilaciones recientes pueden usar de 10 a 20 MB"
          },
          {
            "Elemento": "Procesadores",
            "Qué dicen las fuentes": "Se nombran x86_64, ARM64, ARMv7, ARMv6, RISC-V, MIPS y LoongArch"
          },
          {
            "Elemento": "Sistema operativo",
            "Qué dicen las fuentes": "Linux, macOS, Windows, Android y FreeBSD; no se indica la versión mínima de Android"
          },
          {
            "Elemento": "Modelo de lenguaje",
            "Qué dicen las fuentes": "Un proveedor que configuras: una API en la nube con clave, o un servidor Ollama o vLLM sin ella"
          },
          {
            "Elemento": "Compilar desde el código",
            "Qué dicen las fuentes": "Go 1.25 o superior, más Node.js 22 y pnpm para el lanzador WebUI"
          }
        ],
        "note": "No se indica qué modelos funcionan bien en cada placa; eso depende del servidor de modelos, no de PicoClaw."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Cómo empezar",
        "content": [
          "**Los pasos siguen el README y el sitio; PromptQuorum no los ha ejecutado.**"
        ],
        "numberedItems": [
          {
            "title": "Descarga PicoClaw",
            "whyItMatters": "Obtén la versión para tu sistema en picoclaw.io, o el APK en Android; las fuentes no mencionan ninguna cuenta."
          },
          {
            "title": "Abre el lanzador o ejecuta el onboarding",
            "whyItMatters": "En un ordenador, inicia picoclaw-launcher y usa la WebUI en el navegador; en una terminal, picoclaw onboard crea el espacio de trabajo."
          },
          {
            "title": "Elige un proveedor de modelos",
            "whyItMatters": "Introduce una clave de API de un proveedor en la nube, o apunta PicoClaw a tu servidor Ollama (por ejemplo http://localhost:11434/v1) o a tu servidor vLLM."
          },
          {
            "title": "Conecta un canal de chat",
            "whyItMatters": "Añade Telegram, Discord u otro canal en la configuración y escríbele al agente; los servidores MCP y las tareas programadas son otras opciones de la documentación."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones confirmadas por las fuentes",
        "content": [
          "**Cada punto de abajo procede del sitio web, el README o la documentación; ninguno se ha probado aquí.**"
        ],
        "items": [
          "**Canales de chat.** El sitio enumera más de 16, entre ellos Telegram, Discord, Slack y QQ; la documentación nombra además DingTalk, Feishu, WeCom y LINE.",
          "**Proveedores.** Muchos proveedores en la nube más Ollama y vLLM, con enrutamiento de modelos basado en reglas que envía las consultas sencillas a modelos más ligeros.",
          "**Herramientas.** Búsqueda web, programación tipo cron, servidores MCP gestionados desde la línea de comandos y la WebUI, una API REST y una canalización de visión para imágenes y archivos.",
          "**Memoria.** Memoria a largo plazo y un almacén JSONL, según el sitio y las notas de versión.",
          "**Portabilidad.** Un solo binario para x86_64, ARM, RISC-V, MIPS y LoongArch, más una versión para Android."
        ],
        "note": "El README menciona una versión de refuerzo de seguridad (0.2.4) pero no publica ninguna auditoría, así que la seguridad de sus herramientas no está confirmada de forma independiente."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flujo de datos y privacidad",
        "content": [
          "**Las preguntas frecuentes del sitio dicen que el historial de conversaciones y la configuración se quedan en tu dispositivo, mientras que las peticiones al modelo de lenguaje siguen yendo al proveedor que configuras.**",
          "Con un proveedor en la nube, tus prompts llegan por tanto a ese proveedor según su propia política; con Ollama o vLLM en tu red se quedan allí. Los mensajes enviados por un canal de chat como Telegram pasan además por esa plataforma."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Son declaraciones del creador, no resultados de una auditoría. El README advierte de posibles problemas de seguridad sin resolver, y PromptQuorum no ha inspeccionado el tráfico de red ni el código."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quién es",
        "items": [
          "**Propietarios de Raspberry Pi y placas RISC-V** que quieren un agente pequeño en una placa que ya tienen.",
          "**Usuarios de Ollama o vLLM** que quieren acceder desde una app de chat a un modelo de su propia red.",
          "**Aficionados con un móvil Android antiguo** que quieren probar un asistente siempre activo sin hardware adicional."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Preparación para producción.** Según el README, PicoClaw está en desarrollo temprano y rápido, puede tener problemas de seguridad sin resolver y no debe desplegarse en producción antes de la versión 1.0.",
          "**Cifras de memoria.** La cifra destacada de menos de 10 MB y la comparación con OpenClaw y NanoBot son del propio creador; aquí no se midió ninguna.",
          "**Detalles de Android.** No se indican la versión mínima de Android, la firma del APK ni qué funciones van en un móvil.",
          "**Tratamiento de datos.** No se encontró ninguna política de privacidad ni documento sobre el tratamiento de datos, y no se inspeccionó el tráfico de red.",
          "**Calidad de los modelos locales.** No se ha probado cómo gestionan las tareas de agente las placas pequeñas y los modelos locales."
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
            "App": "[nanobot](/es/power-local-llm/nanobot-review)",
            "Plataformas": "Windows, macOS, Linux",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "Framework de agentes autoalojado con memoria, herramientas MCP y canales de chat"
          },
          {
            "App": "[OpenClaw](/es/power-local-llm/openclaw-review)",
            "Plataformas": "Windows, macOS, Linux",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "Framework de orquestación para flujos de trabajo de agentes"
          },
          {
            "App": "[Hermes Agent](/es/power-local-llm/hermes-agent-review)",
            "Plataformas": "macOS, Linux",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "Agente de línea de comandos con memoria persistente"
          }
        ],
        "note": "Comprueba el precio, la licencia y las plataformas actuales de cada app en su propia ficha antes de elegir."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿Es PicoClaw un fork de OpenClaw?",
            "a": "No. El README lo describe como un proyecto independiente, escrito desde cero en Go e inspirado en NanoBot, y dice que no es un fork de OpenClaw, NanoBot ni ningún otro proyecto."
          },
          {
            "q": "¿Con qué modelos locales funciona PicoClaw?",
            "a": "El README muestra ejemplos de configuración para Ollama (como llama3.1:8b) y vLLM mediante sus direcciones compatibles con OpenAI, y el sitio dice que cualquier API compatible con OpenAI funciona."
          },
          {
            "q": "¿Existe una criptomoneda oficial de PicoClaw?",
            "a": "No. Según el README, PicoClaw no ha emitido tokens ni criptomonedas, picoclaw.io es el único sitio oficial y terceros han registrado muchos dominios parecidos."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "PicoClaw es una forma, con licencia MIT, de poner un pequeño agente de IA en placas baratas, móviles antiguos y ordenadores, y conectarlo a tu propio servidor Ollama o vLLM o a un modelo en la nube. En contra, el propio creador lo describe como software en fase temprana, el tratamiento de datos solo se explica en una respuesta breve de las preguntas frecuentes, y PromptQuorum no ha probado la velocidad, el uso de memoria ni el comportamiento en Android. Encaja con aficionados que puedan probarlo en hardware de repuesto; no debería encargarse de nada que deba ser fiable o seguro hasta que el proyecto diga que está listo."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Sitio web de PicoClaw](https://picoclaw.io) — resumen del producto, preguntas frecuentes, cifras de hardware y enlaces del pie, comprobado el 1 de noviembre de 2026.",
          "[Página de descargas de PicoClaw](https://picoclaw.io/download) — fuentes de descarga y comando de onboarding, comprobada el 1 de noviembre de 2026.",
          "[PicoClaw en GitHub](https://github.com/sipeed/picoclaw) — README, licencia MIT, aviso de seguridad e historial de commits, comprobados el 1 de noviembre de 2026.",
          "[Versiones de PicoClaw](https://github.com/sipeed/picoclaw/releases) — versión 0.3.1 del 3 de julio de 2026 y su lista de archivos, comprobadas el 1 de noviembre de 2026.",
          "[Documentación de PicoClaw](https://docs.picoclaw.io) — canales de chat y guías de configuración, comprobadas el 1 de noviembre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Reseña de nanobot](/es/power-local-llm/nanobot-review) — un framework de agentes de IA personales autoalojado con memoria y herramientas MCP.",
          "[Reseña de OpenClaw](/es/power-local-llm/openclaw-review) — un framework de orquestación para flujos de trabajo de agentes.",
          "[Reseña de Hermes Agent](/es/power-local-llm/hermes-agent-review) — un agente de línea de comandos con memoria persistente.",
          "[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA locales."
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
    "theme": "Local AI Agents & Tool Use",
    "heroImage": "/images/picoclaw-review-hero-fr.webp",
    "title": "Test de PicoClaw : agent IA open source pour petits appareils",
    "seoTitle": "Test de PicoClaw : agent IA open source léger en Go",
    "intro": "PicoClaw est un agent IA personnel gratuit, sous licence MIT, écrit en Go par l’entreprise de matériel Sipeed. Il est conçu pour tourner sur des cartes Linux bon marché, de vieux téléphones Android et des ordinateurs de bureau ordinaires, et il transmet vos requêtes à un modèle de langage de votre choix : un fournisseur cloud ou votre propre serveur Ollama ou vLLM. Ce test s’appuie sur [picoclaw.io](https://picoclaw.io), le [dépôt GitHub](https://github.com/sipeed/picoclaw) et la documentation du projet, consultés le 1er novembre 2026 ; PromptQuorum n’a pas testé PicoClaw en pratique.",
    "metaDescription": "Test de PicoClaw : agent IA gratuit en Go de Sipeed pour petites cartes, Android et ordinateurs, avec Ollama et vLLM. Stade précoce ; non testé.",
    "twitterDescription": "Test de PicoClaw : un petit agent IA open source de Sipeed qui relie des applis de chat à votre serveur Ollama ou vLLM, ou à un modèle cloud. Ce que les sources confirment, et ce qu’elles ne confirment pas.",
    "audience": "Bricoleurs disposant d’un Raspberry Pi, d’une carte RISC-V, d’un vieux téléphone Android ou d’un serveur domestique, qui veulent un assistant IA léger et souhaitent savoir ce que fait PicoClaw, ce qu’il exige et ce que les sources laissent ouvert.",
    "readTime": "5 min de lecture",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "test PicoClaw",
    "targetKeywords": [
      "test picoclaw",
      "picoclaw agent ia",
      "sipeed picoclaw",
      "picoclaw ollama",
      "agent ia raspberry pi",
      "assistant ia léger android",
      "installer picoclaw"
    ],
    "current_models_mentioned": [
      "Llama"
    ],
    "current_hardware_mentioned": [
      "Raspberry Pi",
      "RISC-V",
      "Android"
    ],
    "leadAnswerBlock": "**PicoClaw (version 0.3.1, publiée le 3 juillet 2026) est un agent IA personnel gratuit, sous licence MIT, de Sipeed, qui s’exécute comme un seul programme Go sur de petites cartes, des téléphones Android et des ordinateurs, et transmet vos requêtes à un modèle de langage que vous configurez.** Il n’exécute pas de modèle lui-même : une clé d’API cloud ou un serveur Ollama ou vLLM local est donc nécessaire.",
    "quickAnswerTop": {
      "fr": {
        "question": "PicoClaw peut-il exécuter un modèle d’IA par lui-même ?",
        "answer": "Non. PicoClaw est la couche d’agent ; selon le README, le modèle vient d’un fournisseur que vous configurez. Les fournisseurs cloud demandent une clé d’API, tandis qu’Ollama et vLLM sont indiqués comme options locales sans clé.",
        "bullets": [
          "Selon l’éditeur, il se connecte à des canaux de chat comme Telegram, Discord et Slack.",
          "Il prend en charge les serveurs MCP, les tâches planifiées, la recherche web et une mémoire à long terme.",
          "Le site indique 64 Mo de RAM au minimum et 512 Mo recommandés.",
          "Des téléchargements existent pour Linux, macOS, Windows, Android et Docker."
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
        "label": "Qu’est-ce que PicoClaw ?",
        "anchor": "what-is-picoclaw"
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
            "text": "PicoClaw est un petit assistant IA open source de Sipeed, écrit en Go, qui relie des applis de chat et des outils à un modèle de langage de votre choix."
          },
          {
            "type": "plain-terms",
            "text": "Vous installez un seul programme sur une carte, un téléphone ou un ordinateur, vous le pointez vers un modèle cloud ou votre propre serveur Ollama, puis vous lui parlez depuis une appli de chat ou une page de navigateur."
          }
        ],
        "items": [
          "Maintenance : la dernière version stable, la 0.3.1, date du 3 juillet 2026 et le commit le plus récent de la branche principale du 19 août 2026 ; aucun avertissement de projet abandonné ne s’applique.",
          "Modèle : aucun n’est fourni ; Ollama, vLLM et de nombreux fournisseurs cloud sont pris en charge.",
          "Coût : le logiciel est gratuit sous licence MIT et vous ne payez que votre propre fournisseur de modèle, selon la FAQ du site.",
          "Maturité : le README parle d’un logiciel à un stade précoce et déconseille l’usage en production avant la version 1.0.",
          "Éditeur : Sipeed, une entreprise de matériel ; selon le README, PicoClaw n’est pas un fork d’OpenClaw ni de NanoBot."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce test s’appuie sur picoclaw.io, le dépôt GitHub et le site de documentation, consultés le 1er novembre 2026. PromptQuorum n’a ni installé, ni exécuté, ni mesuré PicoClaw : la vitesse, la consommation de mémoire et la qualité des réponses ne sont donc pas évaluées."
          }
        ]
      },
      "overview": {
        "id": "what-is-picoclaw",
        "title": "Qu’est-ce que PicoClaw ?",
        "content": [
          "**PicoClaw est un programme d’assistant IA personnel écrit en Go par Sipeed, conçu pour démarrer vite et consommer peu de mémoire sur du matériel bon marché.** Le README le décrit comme un projet open source indépendant, écrit de zéro et inspiré de NanoBot. Sipeed fabrique aussi les cartes RISC-V que le projet met en avant.",
          "Le programme relie un modèle de langage à des canaux de chat et à des outils. Selon le site, il prend en charge plus de 16 canaux de chat, la recherche web, les tâches planifiées, une mémoire à long terme, l’intégration MCP et API REST, ainsi qu’un mode passerelle. Le README ajoute qu’environ 95 % du code central a été généré par un agent IA puis affiné par relecture humaine ; c’est une déclaration de l’éditeur, non vérifiée."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Où l’obtenir",
        "content": [
          "**PicoClaw se télécharge gratuitement pour Linux, macOS, Windows et Android ; Docker et les fichiers de paquets sont des alternatives.**"
        ],
        "columns": [
          "Option",
          "Comment l’obtenir"
        ],
        "rows": [
          {
            "Option": "Windows, macOS, Linux",
            "Comment l’obtenir": "Téléchargement sur [picoclaw.io/download](https://picoclaw.io/download), puis ouverture du programme picoclaw-launcher pour utiliser l’interface WebUI dans le navigateur, sur votre propre ordinateur"
          },
          {
            "Option": "Android",
            "Comment l’obtenir": "APK sur [picoclaw.io/download](https://picoclaw.io/download), sans Termux selon le README ; une installation via Termux est l’alternative"
          },
          {
            "Option": "Docker",
            "Comment l’obtenir": "Fichiers Docker Compose dans le [dépôt GitHub](https://github.com/sipeed/picoclaw)"
          },
          {
            "Option": "Paquets et binaires",
            "Comment l’obtenir": "[GitHub Releases](https://github.com/sipeed/picoclaw/releases) : archives pour Linux, macOS, Windows et FreeBSD, plus paquets .deb et .rpm"
          },
          {
            "Option": "Site web",
            "Comment l’obtenir": "[picoclaw.io](https://picoclaw.io)"
          },
          {
            "Option": "Documentation",
            "Comment l’obtenir": "[docs.picoclaw.io](https://docs.picoclaw.io)"
          },
          {
            "Option": "Politique de confidentialité",
            "Comment l’obtenir": "Introuvable sur picoclaw.io et dans le dépôt"
          },
          {
            "Option": "Code source",
            "Comment l’obtenir": "[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw), licence MIT"
          }
        ],
        "note": "Version testée : 0.3.1, publiée le 3 juillet 2026 selon GitHub Releases. La version macOS n’est pas notariée par Apple ; macOS demande de l’autoriser dans Confidentialité et sécurité au premier lancement. La page de téléchargement n’affiche les plateformes que via JavaScript : les noms exacts des fichiers d’installation n’ont donc pas été vus, et les types de fichiers ci-dessus viennent de GitHub Releases."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Configuration requise",
        "content": [
          "**Le site indique 64 Mo de RAM au minimum et 512 Mo recommandés, plus une connexion internet.**"
        ],
        "columns": [
          "Élément",
          "Ce que disent les sources"
        ],
        "rows": [
          {
            "Élément": "Mémoire",
            "Ce que disent les sources": "Le README annonce moins de 10 Mo pour le programme central et précise que les versions récentes peuvent en utiliser 10 à 20"
          },
          {
            "Élément": "Processeurs",
            "Ce que disent les sources": "x86_64, ARM64, ARMv7, ARMv6, RISC-V, MIPS et LoongArch sont cités"
          },
          {
            "Élément": "Système d’exploitation",
            "Ce que disent les sources": "Linux, macOS, Windows, Android et FreeBSD ; la version minimale d’Android n’est pas indiquée"
          },
          {
            "Élément": "Modèle de langage",
            "Ce que disent les sources": "Un fournisseur que vous configurez : une API cloud avec clé, ou un serveur Ollama ou vLLM sans clé"
          },
          {
            "Élément": "Compilation depuis les sources",
            "Ce que disent les sources": "Go 1.25 ou plus récent, plus Node.js 22 et pnpm pour le lanceur WebUI"
          }
        ],
        "note": "Les modèles qui tournent bien sur telle carte ne sont pas indiqués ; cela dépend du serveur de modèles, pas de PicoClaw."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Pour bien démarrer",
        "content": [
          "**Les étapes suivent le README et le site ; PromptQuorum ne les a pas exécutées.**"
        ],
        "numberedItems": [
          {
            "title": "Télécharger PicoClaw",
            "whyItMatters": "Récupérez la version pour votre système sur picoclaw.io, ou l’APK sous Android ; les sources ne mentionnent aucun compte."
          },
          {
            "title": "Ouvrir le lanceur ou lancer l’onboarding",
            "whyItMatters": "Sur un ordinateur, démarrez picoclaw-launcher et utilisez la WebUI dans votre navigateur ; dans un terminal, picoclaw onboard crée l’espace de travail."
          },
          {
            "title": "Choisir un fournisseur de modèle",
            "whyItMatters": "Saisissez une clé d’API pour un fournisseur cloud, ou dirigez PicoClaw vers votre serveur Ollama (par exemple http://localhost:11434/v1) ou votre serveur vLLM."
          },
          {
            "title": "Connecter un canal de chat",
            "whyItMatters": "Ajoutez Telegram, Discord ou un autre canal dans la configuration et écrivez à l’agent ; les serveurs MCP et les tâches planifiées sont d’autres options de la documentation."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions confirmées par les sources",
        "content": [
          "**Chaque élément ci-dessous provient du site, du README ou de la documentation ; aucun n’a été testé ici.**"
        ],
        "items": [
          "**Canaux de chat.** Le site en liste plus de 16, dont Telegram, Discord, Slack et QQ ; la documentation cite aussi DingTalk, Feishu, WeCom et LINE.",
          "**Fournisseurs.** De nombreux fournisseurs cloud ainsi qu’Ollama et vLLM, avec un routage de modèles à base de règles qui envoie les requêtes simples vers des modèles plus légers.",
          "**Outils.** Recherche web, planification de type cron, serveurs MCP gérés en ligne de commande et dans la WebUI, une API REST et un pipeline de vision pour les images et les fichiers.",
          "**Mémoire.** Mémoire à long terme et un stockage JSONL, selon le site et les notes de version.",
          "**Portabilité.** Un seul binaire pour x86_64, ARM, RISC-V, MIPS et LoongArch, plus une version Android."
        ],
        "note": "Le README mentionne une version de durcissement de la sécurité (0.2.4) mais ne publie aucun audit : la sécurité de ses outils n’est donc pas confirmée de façon indépendante."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flux de données et confidentialité",
        "content": [
          "**La FAQ du site indique que l’historique des conversations et la configuration restent sur votre appareil, tandis que les requêtes vers le modèle de langage vont toujours au fournisseur que vous configurez.**",
          "Avec un fournisseur cloud, vos prompts parviennent donc à ce fournisseur, selon sa propre politique ; avec Ollama ou vLLM sur votre réseau, ils y restent. Les messages envoyés via un canal de chat comme Telegram transitent en plus par cette plateforme."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce sont des déclarations de l’éditeur, non des résultats d’audit. Le README avertit de possibles problèmes de sécurité non résolus, et PromptQuorum n’a inspecté ni le trafic réseau ni le code."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui s’adresse l’appli",
        "items": [
          "**Les propriétaires de Raspberry Pi et de cartes RISC-V** qui veulent un petit agent sur une carte qu’ils possèdent déjà.",
          "**Les utilisateurs d’Ollama ou de vLLM** qui veulent accéder depuis une appli de chat à un modèle de leur réseau.",
          "**Les bricoleurs avec un vieux téléphone Android** qui veulent essayer un assistant toujours actif sans matériel supplémentaire."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n’avons pas pu vérifier",
        "items": [
          "**Maturité pour la production.** Selon le README, PicoClaw est en développement précoce et rapide, peut présenter des problèmes de sécurité non résolus et ne doit pas être déployé en production avant la version 1.0.",
          "**Chiffres de mémoire.** La valeur phare de moins de 10 Mo et la comparaison avec OpenClaw et NanoBot viennent de l’éditeur ; rien n’a été mesuré ici.",
          "**Détails Android.** La version minimale d’Android, la signature de l’APK et les fonctions disponibles sur un téléphone ne sont pas indiquées.",
          "**Traitement des données.** Aucune politique de confidentialité ni document sur le traitement des données n’a été trouvé, et le trafic réseau n’a pas été inspecté.",
          "**Qualité des modèles locaux.** La façon dont de petites cartes et des modèles locaux gèrent les tâches d’agent n’a pas été testée."
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
            "Appli": "[nanobot](/fr/power-local-llm/nanobot-review)",
            "Plateformes": "Windows, macOS, Linux",
            "Prix / licence": "Gratuit / MIT",
            "Différence clé": "Framework d’agent auto-hébergé avec mémoire, outils MCP et canaux de chat"
          },
          {
            "Appli": "[OpenClaw](/fr/power-local-llm/openclaw-review)",
            "Plateformes": "Windows, macOS, Linux",
            "Prix / licence": "Gratuit / MIT",
            "Différence clé": "Framework d’orchestration pour workflows d’agents"
          },
          {
            "Appli": "[Hermes Agent](/fr/power-local-llm/hermes-agent-review)",
            "Plateformes": "macOS, Linux",
            "Prix / licence": "Gratuit / MIT",
            "Différence clé": "Agent en ligne de commande à mémoire persistante"
          }
        ],
        "note": "Vérifiez le prix, la licence et les plateformes actuels de chaque appli sur sa propre fiche avant de choisir."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "PicoClaw est-il un fork d’OpenClaw ?",
            "a": "Non. Le README le décrit comme un projet indépendant, écrit de zéro en Go et inspiré de NanoBot, et affirme qu’il n’est un fork ni d’OpenClaw, ni de NanoBot, ni d’aucun autre projet."
          },
          {
            "q": "Avec quels modèles locaux PicoClaw fonctionne-t-il ?",
            "a": "Le README montre des exemples de configuration pour Ollama (comme llama3.1:8b) et vLLM via leurs adresses compatibles OpenAI, et le site indique que toute API compatible OpenAI fonctionne."
          },
          {
            "q": "Existe-t-il une cryptomonnaie PicoClaw officielle ?",
            "a": "Non. Selon le README, PicoClaw n’a émis ni jeton ni cryptomonnaie, picoclaw.io est le seul site officiel et de nombreux domaines imitateurs ont été enregistrés par des tiers."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "PicoClaw est un moyen sous licence MIT de placer un petit agent IA sur des cartes bon marché, de vieux téléphones et des ordinateurs, puis de le relier à votre serveur Ollama ou vLLM ou à un modèle cloud. En contrepartie, l’éditeur lui-même parle d’un stade précoce, le traitement des données n’est décrit que dans une courte réponse de FAQ, et PromptQuorum n’a testé ni la vitesse, ni la consommation de mémoire, ni le comportement sous Android. Il convient aux bricoleurs qui peuvent l’essayer sur du matériel de rechange ; il ne doit rien porter qui exige fiabilité ou sécurité tant que le projet ne se dit pas prêt."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Site de PicoClaw](https://picoclaw.io) — présentation du produit, FAQ, chiffres matériels et liens de pied de page, consulté le 1er novembre 2026.",
          "[Page de téléchargement de PicoClaw](https://picoclaw.io/download) — sources de téléchargement et commande d’onboarding, consultée le 1er novembre 2026.",
          "[PicoClaw sur GitHub](https://github.com/sipeed/picoclaw) — README, licence MIT, avis de sécurité et historique des commits, consultés le 1er novembre 2026.",
          "[Versions de PicoClaw](https://github.com/sipeed/picoclaw/releases) — version 0.3.1 du 3 juillet 2026 et sa liste de fichiers, consultées le 1er novembre 2026.",
          "[Documentation de PicoClaw](https://docs.picoclaw.io) — canaux de chat et guides de configuration, consultés le 1er novembre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "À lire aussi",
        "items": [
          "[Test de nanobot](/fr/power-local-llm/nanobot-review) — un framework d’agent IA personnel auto-hébergé avec mémoire et outils MCP.",
          "[Test d’OpenClaw](/fr/power-local-llm/openclaw-review) — un framework d’orchestration pour workflows d’agents.",
          "[Test de Hermes Agent](/fr/power-local-llm/hermes-agent-review) — un agent en ligne de commande à mémoire persistante.",
          "[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale."
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
    "theme": "Local AI Agents & Tool Use",
    "heroImage": "/images/picoclaw-review-hero-ja.webp",
    "title": "PicoClawレビュー：小型デバイス向けオープンソースAIエージェント",
    "seoTitle": "PicoClawレビュー：Go製の軽量オープンソースAIエージェント",
    "intro": "PicoClawは、ハードウェア企業Sipeedが Go 言語で開発した、無料のMITライセンスの個人用AIエージェントです。低価格のLinuxボード、古いAndroidスマートフォン、一般的なデスクトップPCで動作するよう作られており、リクエストを自分で選んだ言語モデル（クラウドプロバイダー、または自分のOllamaやvLLMサーバー）に転送します。このレビューは、[picoclaw.io](https://picoclaw.io)、[GitHubリポジトリ](https://github.com/sipeed/picoclaw)、プロジェクトのドキュメントに基づいており、2026年11月1日に確認しました。PromptQuorumはPicoClawを実際には試していません。",
    "metaDescription": "PicoClawレビュー：Sipeed製のGo言語AIエージェント。小型ボード、Android、デスクトップで動作し、OllamaとvLLMに対応。無料のMITライセンス。初期段階で未検証。",
    "twitterDescription": "PicoClawレビュー：チャットアプリを自分のOllama・vLLMサーバーやクラウドモデルにつなぐ、Sipeed製の小型オープンソースAIエージェント。情報源が確認していることと、していないこと。",
    "audience": "Raspberry Pi、RISC-Vボード、余っているAndroidスマートフォン、自宅サーバーを持ち、軽量なAIアシスタントを探している方で、PicoClawにできること、必要なもの、情報源が明らかにしていない点を知りたい方。",
    "readTime": "5分で読める",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "PicoClawレビュー",
    "targetKeywords": [
      "picoclaw レビュー",
      "picoclaw aiエージェント",
      "sipeed picoclaw",
      "picoclaw ollama",
      "raspberry pi aiエージェント",
      "android 軽量 aiアシスタント",
      "picoclaw インストール"
    ],
    "current_models_mentioned": [
      "Llama"
    ],
    "current_hardware_mentioned": [
      "Raspberry Pi",
      "RISC-V",
      "Android"
    ],
    "leadAnswerBlock": "**PicoClaw（バージョン0.3.1、2026年7月3日公開）は、Sipeedが提供する無料のMITライセンスの個人用AIエージェントです。単一のGoプログラムとして小型ボード、Androidスマートフォン、デスクトップで動作し、リクエストを設定した言語モデルに渡します。** モデル自体は実行しないため、クラウドのAPIキーか、ローカルのOllamaまたはvLLMサーバーが必要です。",
    "quickAnswerTop": {
      "ja": {
        "question": "PicoClaw単体でAIモデルを実行できますか？",
        "answer": "いいえ。PicoClawはエージェント層であり、READMEによればモデルは設定したプロバイダーから提供されます。クラウドプロバイダーにはAPIキーが必要で、OllamaとvLLMはキー不要のローカル選択肢として挙げられています。",
        "bullets": [
          "開発元によると、Telegram、Discord、Slackなどのチャットチャンネルに接続します。",
          "MCPサーバー、スケジュール実行、Web検索、長期記憶に対応しています。",
          "公式サイトは、最小64MB、推奨512MBのRAMを挙げています。",
          "Linux、macOS、Windows、Android、Dockerのダウンロードがあります。"
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
        "label": "PicoClawとは",
        "anchor": "what-is-picoclaw"
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
            "text": "PicoClawは、Sipeed製のGo言語の小型オープンソースAIアシスタントで、チャットアプリやツールを選んだ言語モデルにつなぎます。"
          },
          {
            "type": "plain-terms",
            "text": "ボード、スマートフォン、パソコンに1つのプログラムを入れ、クラウドモデルか自分のOllamaサーバーを指定すると、チャットアプリやブラウザーのページから話しかけられます。"
          }
        ],
        "items": [
          "保守状況：最新の安定版0.3.1は2026年7月3日、メインブランチの最新コミットは2026年8月19日のため、放置プロジェクトの警告は該当しません。",
          "モデル：付属はなく、Ollama、vLLM、多くのクラウドプロバイダーに対応します。",
          "費用：ソフトウェアはMITライセンスで無料で、サイトのFAQによれば支払うのは自分のモデルプロバイダーだけです。",
          "成熟度：READMEは初期段階のソフトウェアとしており、バージョン1.0までは本番利用を勧めていません。",
          "開発元：ハードウェア企業のSipeed。READMEによれば、PicoClawはOpenClawやNanoBotのフォークではありません。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "このレビューは、picoclaw.io、GitHubリポジトリ、ドキュメントサイトに基づき、2026年11月1日に確認しました。PromptQuorumはPicoClawをインストールも実行も計測もしていないため、速度、メモリ使用量、回答品質は評価していません。"
          }
        ]
      },
      "overview": {
        "id": "what-is-picoclaw",
        "title": "PicoClawとは",
        "content": [
          "**PicoClawは、Sipeedが Go 言語で開発した個人用AIアシスタントのプログラムで、安価なハードウェアでも素早く起動し、メモリ使用量を抑えることを目指しています。** READMEは、独立したオープンソースプロジェクトであり、ゼロから書かれ、NanoBotに着想を得たと説明しています。Sipeedは、プロジェクトが紹介しているRISC-Vボードも製造しています。",
          "このプログラムは言語モデルをチャットチャンネルやツールにつなぎます。サイトによると、16以上のチャットチャンネル、Web検索、スケジュール実行、長期記憶、MCPとREST APIの連携、ゲートウェイモードに対応しています。READMEは、コアコードの約95%をAIエージェントが生成し、人間のレビューで磨いたと付け加えています。これは開発元の主張であり、確認していません。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "入手方法",
        "content": [
          "**PicoClawはLinux、macOS、Windows、Android向けに無料でダウンロードでき、Dockerとパッケージファイルも選べます。**"
        ],
        "columns": [
          "項目",
          "入手方法"
        ],
        "rows": [
          {
            "項目": "Windows、macOS、Linux",
            "入手方法": "[picoclaw.io/download](https://picoclaw.io/download)からダウンロードし、picoclaw-launcherを開くと、自分のパソコン上でブラウザーのWebUIを使えます"
          },
          {
            "項目": "Android",
            "入手方法": "[picoclaw.io/download](https://picoclaw.io/download)のAPK。READMEによればTermuxは不要で、代替としてTermuxでのセットアップもあります"
          },
          {
            "項目": "Docker",
            "入手方法": "[GitHubリポジトリ](https://github.com/sipeed/picoclaw)にあるDocker Composeファイル"
          },
          {
            "項目": "パッケージとバイナリ",
            "入手方法": "[GitHub Releases](https://github.com/sipeed/picoclaw/releases)：Linux、macOS、Windows、FreeBSD向けのアーカイブと、.debおよび.rpmパッケージ"
          },
          {
            "項目": "公式サイト",
            "入手方法": "[picoclaw.io](https://picoclaw.io)"
          },
          {
            "項目": "ドキュメント",
            "入手方法": "[docs.picoclaw.io](https://docs.picoclaw.io)"
          },
          {
            "項目": "プライバシーポリシー",
            "入手方法": "picoclaw.ioにもリポジトリにも見つかりませんでした"
          },
          {
            "項目": "ソースコード",
            "入手方法": "[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)、MITライセンス"
          }
        ],
        "note": "確認したバージョン：0.3.1。GitHub Releasesによれば2026年7月3日公開です。macOS版はAppleの公証を受けていないため、初回起動時に「プライバシーとセキュリティ」で許可する必要があります。ダウンロードページはプラットフォーム一覧をJavaScriptでのみ表示するため、インストーラーの正確なファイル名は確認できず、上記のファイル形式はGitHub Releasesに基づきます。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "動作要件",
        "content": [
          "**公式サイトは、最小64MB、推奨512MBのRAMとインターネット接続を挙げています。**"
        ],
        "columns": [
          "項目",
          "情報源の記載"
        ],
        "rows": [
          {
            "項目": "メモリ",
            "情報源の記載": "READMEはコアプログラムを10MB未満とし、最近のビルドでは10〜20MBを使う場合があると注記しています"
          },
          {
            "項目": "プロセッサー",
            "情報源の記載": "x86_64、ARM64、ARMv7、ARMv6、RISC-V、MIPS、LoongArchが挙げられています"
          },
          {
            "項目": "OS",
            "情報源の記載": "Linux、macOS、Windows、Android、FreeBSD。Androidの最小バージョンは明記されていません"
          },
          {
            "項目": "言語モデル",
            "情報源の記載": "設定するプロバイダー：キー付きのクラウドAPI、またはキー不要のOllamaやvLLMサーバー"
          },
          {
            "項目": "ソースからのビルド",
            "情報源の記載": "Go 1.25以降、およびWebUIランチャー用のNode.js 22とpnpm"
          }
        ],
        "note": "どのボードでどのモデルが快適に動くかは書かれていません。それはPicoClawではなく、モデルサーバー次第です。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "使い始めるには",
        "content": [
          "**手順はREADMEとサイトに沿っています。PromptQuorumは実行していません。**"
        ],
        "numberedItems": [
          {
            "title": "PicoClawをダウンロードする",
            "whyItMatters": "picoclaw.ioから自分のシステム向けのビルド（AndroidならAPK）を入手します。情報源にアカウントの記載はありません。"
          },
          {
            "title": "ランチャーを開くかオンボーディングを実行する",
            "whyItMatters": "デスクトップではpicoclaw-launcherを起動してブラウザーでWebUIを使います。ターミナルではpicoclaw onboardでワークスペースを作成します。"
          },
          {
            "title": "モデルプロバイダーを選ぶ",
            "whyItMatters": "クラウドプロバイダーのAPIキーを入力するか、PicoClawを自分のOllamaサーバー（例：http://localhost:11434/v1）またはvLLMサーバーに向けます。"
          },
          {
            "title": "チャットチャンネルを接続する",
            "whyItMatters": "設定にTelegramやDiscordなどのチャンネルを追加してエージェントにメッセージを送ります。MCPサーバーとスケジュール実行は、ドキュメントにあるその他の選択肢です。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "情報源で確認できた機能",
        "content": [
          "**以下の項目はすべてサイト、README、ドキュメントに基づきます。ここでは試していません。**"
        ],
        "items": [
          "**チャットチャンネル。** サイトは16以上を挙げており、Telegram、Discord、Slack、QQなどが含まれます。ドキュメントにはDingTalk、Feishu、WeCom、LINEも載っています。",
          "**プロバイダー。** 多数のクラウドプロバイダーに加え、OllamaとvLLMに対応し、簡単な問い合わせを軽量モデルへ振り分けるルールベースのモデルルーティングがあります。",
          "**ツール。** Web検索、cron方式のスケジュール実行、コマンドラインとWebUIで管理するMCPサーバー、REST API、画像やファイルを扱うビジョンパイプライン。",
          "**メモリ。** サイトとリリースノートによれば、長期記憶とJSONLのメモリストアがあります。",
          "**移植性。** x86_64、ARM、RISC-V、MIPS、LoongArch向けの単一バイナリと、Android版があります。"
        ],
        "note": "READMEはセキュリティ強化のリリース（0.2.4）に触れていますが、監査結果は公開していないため、ツールの安全性は独立して確認されていません。"
      },
      "privacy": {
        "id": "privacy",
        "title": "データの流れとプライバシー",
        "content": [
          "**サイトのFAQによれば、会話履歴と設定は端末内に残り、言語モデルへのリクエストは設定したプロバイダーに送られます。**",
          "そのため、クラウドプロバイダーを使うとプロンプトはそのプロバイダーの方針に従って届き、自分のネットワーク内のOllamaやvLLMならそこにとどまります。Telegramなどのチャットチャンネル経由のメッセージは、そのプラットフォームも通過します。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "これらは開発元の主張であり、監査結果ではありません。READMEは未解決のセキュリティ問題がある可能性を警告しており、PromptQuorumはネットワーク通信もコードも検査していません。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "おすすめできる人",
        "items": [
          "**Raspberry PiやRISC-Vボードの所有者**で、手元のボードに小さなエージェントを置きたい方。",
          "**OllamaやvLLMのユーザー**で、チャットアプリから自分のネットワーク上のモデルを使いたい方。",
          "**古いAndroidスマートフォンをお持ちの方**で、追加のハードウェアなしに常時稼働のアシスタントを試したい方。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかった点",
        "items": [
          "**本番利用への適性。** READMEによれば、PicoClawは初期の急速な開発段階にあり、未解決のセキュリティ問題がある可能性があるため、バージョン1.0までは本番環境に展開すべきではありません。",
          "**メモリの数値。** 10MB未満という目玉の数値と、OpenClawやNanoBotとの比較は開発元自身のもので、ここでは計測していません。",
          "**Androidの詳細。** Androidの最小バージョン、APKの署名、スマートフォンで使える機能は明記されていません。",
          "**データの扱い。** プライバシーポリシーやデータ処理に関する文書は見つからず、ネットワーク通信も検査していません。",
          "**ローカルモデルの品質。** 小型ボードとローカルモデルがエージェントのタスクをどの程度こなせるかは未検証です。"
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
            "アプリ": "[nanobot](/ja/power-local-llm/nanobot-review)",
            "対応環境": "Windows、macOS、Linux",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "記憶、MCPツール、チャットチャンネルを備えたセルフホスト型エージェントフレームワーク"
          },
          {
            "アプリ": "[OpenClaw](/ja/power-local-llm/openclaw-review)",
            "対応環境": "Windows、macOS、Linux",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "エージェントワークフロー向けのオーケストレーションフレームワーク"
          },
          {
            "アプリ": "[Hermes Agent](/ja/power-local-llm/hermes-agent-review)",
            "対応環境": "macOS、Linux",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "永続的な記憶を持つコマンドラインのエージェント"
          }
        ],
        "note": "選ぶ前に、各アプリの最新の価格、ライセンス、対応環境をそれぞれの掲載ページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "PicoClawはOpenClawのフォークですか？",
            "a": "いいえ。READMEは、独立したプロジェクトでGoでゼロから書かれ、NanoBotに着想を得たとし、OpenClawやNanoBotなど他のプロジェクトのフォークではないと述べています。"
          },
          {
            "q": "PicoClawはどのローカルモデルで動きますか？",
            "a": "READMEには、OpenAI互換アドレス経由でOllama（llama3.1:8bなど）とvLLMを使う設定例があり、サイトはOpenAI互換のAPIならどれでも動くとしています。"
          },
          {
            "q": "PicoClawの公式な暗号資産はありますか？",
            "a": "いいえ。READMEによれば、PicoClawはトークンも暗号資産も発行しておらず、公式サイトはpicoclaw.ioだけで、紛らわしいドメインが第三者に多数登録されています。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "総評",
        "content": "PicoClawは、MITライセンスで小さなAIエージェントを安価なボード、古いスマートフォン、パソコンに置き、自分のOllamaやvLLMサーバーまたはクラウドモデルにつなぐ手段です。一方で、開発元自身が初期段階と述べており、データの扱いは短いFAQの回答にしか書かれておらず、PromptQuorumは速度、メモリ使用量、Androidでの動作を試していません。余っているハードウェアで試せる愛好家向きで、プロジェクトが準備完了と述べるまでは、信頼性や安全性が求められる用途には使わないでください。"
      },
      "sources": {
        "id": "sources",
        "title": "情報源",
        "items": [
          "[PicoClaw公式サイト](https://picoclaw.io) — 製品概要、FAQ、ハードウェアの数値、フッターのリンク。2026年11月1日確認。",
          "[PicoClawのダウンロードページ](https://picoclaw.io/download) — ダウンロード元とオンボーディングのコマンド。2026年11月1日確認。",
          "[GitHubのPicoClaw](https://github.com/sipeed/picoclaw) — README、MITライセンス、セキュリティ告知、コミット履歴。2026年11月1日確認。",
          "[PicoClawのリリース](https://github.com/sipeed/picoclaw/releases) — 2026年7月3日のバージョン0.3.1とそのファイル一覧。2026年11月1日確認。",
          "[PicoClawドキュメント](https://docs.picoclaw.io) — チャットチャンネルと設定ガイド。2026年11月1日確認。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[nanobotレビュー](/ja/power-local-llm/nanobot-review) — 記憶とMCPツールを備えたセルフホスト型の個人用AIエージェントフレームワーク。",
          "[OpenClawレビュー](/ja/power-local-llm/openclaw-review) — エージェントワークフロー向けのオーケストレーションフレームワーク。",
          "[Hermes Agentレビュー](/ja/power-local-llm/hermes-agent-review) — 永続的な記憶を持つコマンドラインのエージェント。",
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
    "theme": "Local AI Agents & Tool Use",
    "heroImage": "/images/picoclaw-review-hero-pt.webp",
    "title": "Análise do PicoClaw: agente de IA de código aberto para dispositivos pequenos",
    "seoTitle": "Análise do PicoClaw: agente de IA leve e de código aberto",
    "intro": "O PicoClaw é um agente de IA pessoal gratuito, com licença MIT, escrito em Go pela empresa de hardware Sipeed. Ele foi feito para rodar em placas Linux baratas, celulares Android antigos e computadores comuns, e encaminha seus pedidos a um modelo de linguagem que você escolhe: um provedor na nuvem ou o seu próprio servidor Ollama ou vLLM. Esta análise se baseia no [picoclaw.io](https://picoclaw.io), no [repositório do GitHub](https://github.com/sipeed/picoclaw) e na documentação do projeto, consultados em 1º de novembro de 2026; a PromptQuorum não testou o PicoClaw na prática.",
    "metaDescription": "Análise do PicoClaw: agente de IA gratuito em Go da Sipeed para placas pequenas, Android e desktop, com suporte a Ollama e vLLM. Fase inicial; não testado.",
    "twitterDescription": "Análise do PicoClaw: um pequeno agente de IA de código aberto da Sipeed que liga apps de chat ao seu servidor Ollama ou vLLM ou a um modelo na nuvem. O que as fontes confirmam e o que não confirmam.",
    "audience": "Entusiastas com Raspberry Pi, placa RISC-V, celular Android sobrando ou servidor doméstico que querem um assistente de IA leve e precisam saber o que o PicoClaw faz, o que exige e o que as fontes deixam em aberto.",
    "readTime": "5 min de leitura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "análise do PicoClaw",
    "targetKeywords": [
      "análise picoclaw",
      "picoclaw agente de ia",
      "sipeed picoclaw",
      "picoclaw ollama",
      "agente de ia raspberry pi",
      "assistente de ia leve android",
      "instalar picoclaw"
    ],
    "current_models_mentioned": [
      "Llama"
    ],
    "current_hardware_mentioned": [
      "Raspberry Pi",
      "RISC-V",
      "Android"
    ],
    "leadAnswerBlock": "**O PicoClaw (versão 0.3.1, lançada em 3 de julho de 2026) é um agente de IA pessoal gratuito, com licença MIT, da Sipeed que roda como um único programa em Go em placas pequenas, celulares Android e computadores, e repassa seus pedidos a um modelo de linguagem que você configura.** Ele não executa nenhum modelo sozinho, por isso é preciso uma chave de API na nuvem ou um servidor Ollama ou vLLM local.",
    "quickAnswerTop": {
      "pt": {
        "question": "O PicoClaw consegue executar um modelo de IA sozinho?",
        "answer": "Não. O PicoClaw é a camada de agente; segundo o README, o modelo vem de um provedor que você configura. Provedores na nuvem exigem uma chave de API, enquanto Ollama e vLLM aparecem como opções locais que dispensam a chave.",
        "bullets": [
          "Segundo o criador, ele se conecta a canais de chat como Telegram, Discord e Slack.",
          "Ele oferece suporte a servidores MCP, tarefas agendadas, busca na web e memória de longo prazo.",
          "O site indica 64 MB de RAM como mínimo e 512 MB como quantidade recomendada.",
          "Há downloads para Linux, macOS, Windows, Android e Docker."
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
        "label": "O que é o PicoClaw?",
        "anchor": "what-is-picoclaw"
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
            "text": "O PicoClaw é um pequeno assistente de IA de código aberto da Sipeed, escrito em Go, que liga apps de chat e ferramentas a um modelo de linguagem à sua escolha."
          },
          {
            "type": "plain-terms",
            "text": "Você instala um único programa em uma placa, celular ou computador, aponta para um modelo na nuvem ou para o seu próprio servidor Ollama e depois conversa com ele por um app de chat ou uma página do navegador."
          }
        ],
        "items": [
          "Manutenção: a versão estável mais recente, a 0.3.1, é de 3 de julho de 2026 e o commit mais novo da branch principal é de 19 de agosto de 2026, portanto não vale o aviso de projeto parado.",
          "Modelo: nenhum vem incluído; há suporte a Ollama, vLLM e muitos provedores na nuvem.",
          "Custo: o software é gratuito sob a licença MIT e você paga apenas ao seu próprio provedor de modelo, segundo o FAQ do site.",
          "Maturidade: o README o descreve como software em fase inicial e desaconselha o uso em produção antes da versão 1.0.",
          "Criador: a Sipeed, uma empresa de hardware; segundo o README, o PicoClaw não é um fork do OpenClaw nem do NanoBot."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta análise se baseia no picoclaw.io, no repositório do GitHub e no site de documentação, consultados em 1º de novembro de 2026. A PromptQuorum não instalou, executou nem mediu o PicoClaw, portanto velocidade, uso de memória e qualidade das respostas não são avaliados."
          }
        ]
      },
      "overview": {
        "id": "what-is-picoclaw",
        "title": "O que é o PicoClaw?",
        "content": [
          "**O PicoClaw é um programa de assistente de IA pessoal escrito em Go pela Sipeed, feito para iniciar rápido e usar pouca memória em hardware barato.** O README o descreve como um projeto de código aberto independente, escrito do zero e inspirado no NanoBot. A Sipeed também fabrica as placas RISC-V que o projeto divulga.",
          "O programa liga um modelo de linguagem a canais de chat e ferramentas. Segundo o site, ele oferece suporte a mais de 16 canais de chat, busca na web, tarefas agendadas, memória de longo prazo, integração com MCP e API REST e um modo gateway. O README acrescenta que cerca de 95% do código central foi gerado por um agente de IA e refinado com revisão humana; essa é uma afirmação do criador e não foi verificada."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Onde obter",
        "content": [
          "**O PicoClaw é um download gratuito para Linux, macOS, Windows e Android; Docker e arquivos de pacote são alternativas.**"
        ],
        "columns": [
          "Opção",
          "Como obter"
        ],
        "rows": [
          {
            "Opção": "Windows, macOS, Linux",
            "Como obter": "Download em [picoclaw.io/download](https://picoclaw.io/download) e, depois, abra o programa picoclaw-launcher para usar a WebUI no navegador, no seu próprio computador"
          },
          {
            "Opção": "Android",
            "Como obter": "APK em [picoclaw.io/download](https://picoclaw.io/download), sem Termux segundo o README; a alternativa é a instalação via Termux"
          },
          {
            "Opção": "Docker",
            "Como obter": "Arquivos do Docker Compose no [repositório do GitHub](https://github.com/sipeed/picoclaw)"
          },
          {
            "Opção": "Pacotes e binários",
            "Como obter": "[GitHub Releases](https://github.com/sipeed/picoclaw/releases): arquivos para Linux, macOS, Windows e FreeBSD, além de pacotes .deb e .rpm"
          },
          {
            "Opção": "Site",
            "Como obter": "[picoclaw.io](https://picoclaw.io)"
          },
          {
            "Opção": "Documentação",
            "Como obter": "[docs.picoclaw.io](https://docs.picoclaw.io)"
          },
          {
            "Opção": "Política de privacidade",
            "Como obter": "Não encontrada no picoclaw.io nem no repositório"
          },
          {
            "Opção": "Código-fonte",
            "Como obter": "[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw), licença MIT"
          }
        ],
        "note": "Versão analisada: 0.3.1, lançada em 3 de julho de 2026 segundo o GitHub Releases. A versão para macOS não é notarizada pela Apple, então o macOS pede que você a permita em Privacidade e Segurança na primeira abertura. A página de download mostra as plataformas apenas via JavaScript, por isso os nomes exatos dos instaladores não foram vistos; os tipos de arquivo acima vêm do GitHub Releases."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**O site indica 64 MB de RAM como mínimo e 512 MB como quantidade recomendada, além de conexão com a internet.**"
        ],
        "columns": [
          "Item",
          "O que as fontes dizem"
        ],
        "rows": [
          {
            "Item": "Memória",
            "O que as fontes dizem": "O README informa menos de 10 MB para o programa central e observa que as versões recentes podem usar de 10 a 20 MB"
          },
          {
            "Item": "Processadores",
            "O que as fontes dizem": "São citados x86_64, ARM64, ARMv7, ARMv6, RISC-V, MIPS e LoongArch"
          },
          {
            "Item": "Sistema operacional",
            "O que as fontes dizem": "Linux, macOS, Windows, Android e FreeBSD; a versão mínima do Android não é informada"
          },
          {
            "Item": "Modelo de linguagem",
            "O que as fontes dizem": "Um provedor que você configura: uma API na nuvem com chave ou um servidor Ollama ou vLLM sem chave"
          },
          {
            "Item": "Compilar do código-fonte",
            "O que as fontes dizem": "Go 1.25 ou superior, mais Node.js 22 e pnpm para o inicializador WebUI"
          }
        ],
        "note": "Não se informa quais modelos rodam bem em cada placa; isso depende do servidor de modelos, não do PicoClaw."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Como começar",
        "content": [
          "**Os passos seguem o README e o site; a PromptQuorum não os executou.**"
        ],
        "numberedItems": [
          {
            "title": "Baixe o PicoClaw",
            "whyItMatters": "Pegue a versão para o seu sistema no picoclaw.io, ou o APK no Android; as fontes não mencionam conta."
          },
          {
            "title": "Abra o inicializador ou rode o onboarding",
            "whyItMatters": "No desktop, inicie o picoclaw-launcher e use a WebUI no navegador; no terminal, picoclaw onboard cria o espaço de trabalho."
          },
          {
            "title": "Escolha um provedor de modelo",
            "whyItMatters": "Informe uma chave de API de um provedor na nuvem ou aponte o PicoClaw para o seu servidor Ollama (por exemplo http://localhost:11434/v1) ou para o seu servidor vLLM."
          },
          {
            "title": "Conecte um canal de chat",
            "whyItMatters": "Adicione Telegram, Discord ou outro canal na configuração e envie uma mensagem ao agente; servidores MCP e tarefas agendadas são outras opções da documentação."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos confirmados pelas fontes",
        "content": [
          "**Cada item abaixo vem do site, do README ou da documentação; nenhum foi testado aqui.**"
        ],
        "items": [
          "**Canais de chat.** O site lista mais de 16, incluindo Telegram, Discord, Slack e QQ; a documentação cita ainda DingTalk, Feishu, WeCom e LINE.",
          "**Provedores.** Muitos provedores na nuvem, além de Ollama e vLLM, com roteamento de modelos baseado em regras que envia consultas simples a modelos mais leves.",
          "**Ferramentas.** Busca na web, agendamento no estilo cron, servidores MCP gerenciados pela linha de comando e pela WebUI, uma API REST e um pipeline de visão para imagens e arquivos.",
          "**Memória.** Memória de longo prazo e um armazenamento JSONL, segundo o site e as notas de versão.",
          "**Portabilidade.** Um único binário para x86_64, ARM, RISC-V, MIPS e LoongArch, além de uma versão para Android."
        ],
        "note": "O README menciona uma versão de reforço de segurança (0.2.4), mas não publica auditoria, então a segurança de suas ferramentas não está confirmada de forma independente."
      },
      "privacy": {
        "id": "privacy",
        "title": "Fluxo de dados e privacidade",
        "content": [
          "**O FAQ do site diz que o histórico de conversas e a configuração ficam no seu dispositivo, enquanto os pedidos ao modelo de linguagem continuam indo para o provedor que você configura.**",
          "Com um provedor na nuvem, seus prompts chegam a esse provedor sob a política dele; com Ollama ou vLLM na sua rede, ficam por lá. Mensagens enviadas por um canal de chat como o Telegram também passam por essa plataforma."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Essas são declarações do criador, não resultados de auditoria. O README alerta para possíveis problemas de segurança não resolvidos, e a PromptQuorum não inspecionou o tráfego de rede nem o código."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem é",
        "items": [
          "**Donos de Raspberry Pi e de placas RISC-V** que querem um agente pequeno em uma placa que já têm.",
          "**Usuários de Ollama ou vLLM** que querem acessar, por um app de chat, um modelo da própria rede.",
          "**Entusiastas com um celular Android antigo** que querem testar um assistente sempre ligado sem hardware extra."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Prontidão para produção.** Segundo o README, o PicoClaw está em desenvolvimento inicial e acelerado, pode ter problemas de segurança não resolvidos e não deve ir para produção antes da versão 1.0.",
          "**Números de memória.** O valor de destaque, abaixo de 10 MB, e a comparação com OpenClaw e NanoBot são do próprio criador; nenhum foi medido aqui.",
          "**Detalhes do Android.** A versão mínima do Android, a assinatura do APK e quais recursos funcionam em um celular não são informados.",
          "**Tratamento de dados.** Nenhuma política de privacidade nem documento sobre tratamento de dados foi encontrado, e o tráfego de rede não foi inspecionado.",
          "**Qualidade dos modelos locais.** Não foi testado como placas pequenas e modelos locais lidam com tarefas de agente."
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
            "App": "[nanobot](/pt/power-local-llm/nanobot-review)",
            "Plataformas": "Windows, macOS, Linux",
            "Preço / licença": "Grátis / MIT",
            "Diferença principal": "Framework de agentes auto-hospedado com memória, ferramentas MCP e canais de chat"
          },
          {
            "App": "[OpenClaw](/pt/power-local-llm/openclaw-review)",
            "Plataformas": "Windows, macOS, Linux",
            "Preço / licença": "Grátis / MIT",
            "Diferença principal": "Framework de orquestração para fluxos de trabalho de agentes"
          },
          {
            "App": "[Hermes Agent](/pt/power-local-llm/hermes-agent-review)",
            "Plataformas": "macOS, Linux",
            "Preço / licença": "Grátis / MIT",
            "Diferença principal": "Agente de linha de comando com memória persistente"
          }
        ],
        "note": "Confirme o preço, a licença e as plataformas atuais de cada app na própria página antes de escolher."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "O PicoClaw é um fork do OpenClaw?",
            "a": "Não. O README o descreve como um projeto independente, escrito do zero em Go e inspirado no NanoBot, e diz que ele não é um fork do OpenClaw, do NanoBot nem de nenhum outro projeto."
          },
          {
            "q": "Com quais modelos locais o PicoClaw funciona?",
            "a": "O README mostra exemplos de configuração para Ollama (como llama3.1:8b) e vLLM por meio de seus endereços compatíveis com a OpenAI, e o site diz que qualquer API compatível com a OpenAI funciona."
          },
          {
            "q": "Existe uma criptomoeda oficial do PicoClaw?",
            "a": "Não. Segundo o README, o PicoClaw não emitiu tokens nem criptomoedas, o picoclaw.io é o único site oficial e terceiros registraram muitos domínios parecidos."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O PicoClaw é um jeito, com licença MIT, de colocar um pequeno agente de IA em placas baratas, celulares antigos e computadores e ligá-lo ao seu próprio servidor Ollama ou vLLM ou a um modelo na nuvem. Em contrapartida, o próprio criador o descreve como software em fase inicial, o tratamento de dados só é explicado em uma resposta curta do FAQ, e a PromptQuorum não testou velocidade, uso de memória nem o comportamento no Android. Serve para entusiastas que possam testá-lo em hardware sobrando; não deve assumir nada que precise ser confiável ou seguro até que o projeto diga que está pronto."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Site do PicoClaw](https://picoclaw.io) — visão geral do produto, FAQ, números de hardware e links do rodapé, consultado em 1º de novembro de 2026.",
          "[Página de download do PicoClaw](https://picoclaw.io/download) — fontes de download e comando de onboarding, consultada em 1º de novembro de 2026.",
          "[PicoClaw no GitHub](https://github.com/sipeed/picoclaw) — README, licença MIT, aviso de segurança e histórico de commits, consultados em 1º de novembro de 2026.",
          "[Versões do PicoClaw](https://github.com/sipeed/picoclaw/releases) — versão 0.3.1 de 3 de julho de 2026 e sua lista de arquivos, consultadas em 1º de novembro de 2026.",
          "[Documentação do PicoClaw](https://docs.picoclaw.io) — canais de chat e guias de configuração, consultados em 1º de novembro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leitura relacionada",
        "items": [
          "[Análise do nanobot](/pt/power-local-llm/nanobot-review) — um framework de agente de IA pessoal auto-hospedado com memória e ferramentas MCP.",
          "[Análise do OpenClaw](/pt/power-local-llm/openclaw-review) — um framework de orquestração para fluxos de trabalho de agentes.",
          "[Análise do Hermes Agent](/pt/power-local-llm/hermes-agent-review) — um agente de linha de comando com memória persistente.",
          "[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local."
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
    "theme": "Local AI Agents & Tool Use",
    "heroImage": "/images/picoclaw-review-hero-ar.webp",
    "title": "مراجعة PicoClaw: وكيل ذكاء اصطناعي مفتوح المصدر للأجهزة الصغيرة",
    "seoTitle": "مراجعة PicoClaw: وكيل ذكاء اصطناعي خفيف مفتوح المصدر",
    "intro": "PicoClaw وكيل ذكاء اصطناعي شخصي مجاني بترخيص MIT، كتبته شركة العتاد Sipeed بلغة Go. صُمّم للعمل على لوحات Linux منخفضة التكلفة وهواتف Android القديمة وأجهزة سطح المكتب العادية، ويمرّر طلباتك إلى نموذج لغوي تختاره: مزوّد سحابي أو خادم Ollama أو vLLM الخاص بك. تستند هذه المراجعة إلى [picoclaw.io](https://picoclaw.io) و[مستودع GitHub](https://github.com/sipeed/picoclaw) ووثائق المشروع، وقد روجعت في 1 نوفمبر 2026؛ ولم تجرّب PromptQuorum أداة PicoClaw عمليًا.",
    "metaDescription": "مراجعة PicoClaw: وكيل ذكاء اصطناعي مجاني بلغة Go من Sipeed للوحات الصغيرة وAndroid وسطح المكتب، يدعم Ollama وvLLM. في مرحلة مبكرة وغير مُجرَّب.",
    "twitterDescription": "مراجعة PicoClaw: وكيل ذكاء اصطناعي صغير مفتوح المصدر من Sipeed يربط تطبيقات الدردشة بخادم Ollama أو vLLM الخاص بك أو بنموذج سحابي. ما تؤكده المصادر وما لا تؤكده.",
    "audience": "الهواة الذين لديهم Raspberry Pi أو لوحة RISC-V أو هاتف Android فائض أو خادم منزلي ويريدون مساعد ذكاء اصطناعي خفيفًا، ويحتاجون إلى معرفة ما يفعله PicoClaw وما يتطلبه وما تتركه المصادر مفتوحًا.",
    "readTime": "5 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة PicoClaw",
    "targetKeywords": [
      "مراجعة picoclaw",
      "picoclaw وكيل ذكاء اصطناعي",
      "sipeed picoclaw",
      "picoclaw ollama",
      "وكيل ذكاء اصطناعي raspberry pi",
      "مساعد ذكاء اصطناعي خفيف android",
      "تثبيت picoclaw"
    ],
    "current_models_mentioned": [
      "Llama"
    ],
    "current_hardware_mentioned": [
      "Raspberry Pi",
      "RISC-V",
      "Android"
    ],
    "leadAnswerBlock": "**PicoClaw (الإصدار 0.3.1، الصادر في 3 يوليو 2026) وكيل ذكاء اصطناعي شخصي مجاني بترخيص MIT من Sipeed، يعمل كبرنامج Go واحد على اللوحات الصغيرة وهواتف Android وأجهزة سطح المكتب، ويمرّر طلباتك إلى نموذج لغوي تضبطه.** وهو لا يشغّل نموذجًا بنفسه، لذا يلزم مفتاح API سحابي أو خادم Ollama أو vLLM محلي.",
    "quickAnswerTop": {
      "ar": {
        "question": "هل يستطيع PicoClaw تشغيل نموذج ذكاء اصطناعي بنفسه؟",
        "answer": "لا. PicoClaw هو طبقة الوكيل؛ ووفق ملف README يأتي النموذج من مزوّد تضبطه أنت. تحتاج المزوّدات السحابية إلى مفتاح API، بينما يُذكر Ollama وvLLM كخيارين محليين لا يتطلبان مفتاحًا.",
        "bullets": [
          "يتصل بقنوات دردشة مثل Telegram وDiscord وSlack، وفق الجهة المطوِّرة.",
          "يدعم خوادم MCP والمهام المجدولة والبحث على الويب والذاكرة طويلة الأمد.",
          "يذكر الموقع 64 MB من ذاكرة RAM حدًّا أدنى و512 MB مقدارًا موصى به.",
          "تتوفر تنزيلات لأنظمة Linux وmacOS وWindows وAndroid وDocker."
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
        "label": "ما هو PicoClaw؟",
        "anchor": "what-is-picoclaw"
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
            "text": "PicoClaw مساعد ذكاء اصطناعي صغير مفتوح المصدر من Sipeed، مكتوب بلغة Go، يربط تطبيقات الدردشة والأدوات بنموذج لغوي من اختيارك."
          },
          {
            "type": "plain-terms",
            "text": "تثبّت برنامجًا واحدًا على لوحة أو هاتف أو حاسوب، وتوجّهه إلى نموذج سحابي أو إلى خادم Ollama الخاص بك، ثم تحدّثه من تطبيق دردشة أو صفحة في المتصفح."
          }
        ],
        "items": [
          "الصيانة: أحدث إصدار مستقر، 0.3.1، صدر في 3 يوليو 2026، وآخر commit في الفرع الرئيسي في 19 أغسطس 2026، لذا لا ينطبق تحذير المشروع المهجور.",
          "النموذج: لا يتضمن أي نموذج؛ ويدعم Ollama وvLLM ومزوّدين سحابيين كثيرين.",
          "التكلفة: البرنامج مجاني بترخيص MIT، وتدفع فقط لمزوّد النموذج الخاص بك، وفق الأسئلة الشائعة في الموقع.",
          "النضج: يصفه ملف README بأنه برنامج في مرحلة مبكرة وينصح بعدم استخدامه في الإنتاج قبل الإصدار 1.0.",
          "الجهة المطوِّرة: Sipeed، شركة عتاد؛ ووفق README فإن PicoClaw ليس نسخة متفرعة (fork) من OpenClaw أو NanoBot."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "تستند هذه المراجعة إلى picoclaw.io ومستودع GitHub وموقع الوثائق، وقد روجعت في 1 نوفمبر 2026. لم تثبّت PromptQuorum أداة PicoClaw ولم تشغّلها ولم تقِس أداءها، لذلك لا تُقيَّم السرعة ولا استهلاك الذاكرة ولا جودة الإجابات."
          }
        ]
      },
      "overview": {
        "id": "what-is-picoclaw",
        "title": "ما هو PicoClaw؟",
        "content": [
          "**PicoClaw برنامج مساعد ذكاء اصطناعي شخصي كتبته Sipeed بلغة Go، صُمّم ليبدأ العمل بسرعة وبذاكرة قليلة على عتاد رخيص.** يصفه ملف README بأنه مشروع مفتوح المصدر مستقل كُتب من الصفر وألهمه NanoBot. وتصنّع Sipeed أيضًا لوحات RISC-V التي يروّج لها المشروع.",
          "يربط البرنامج نموذجًا لغويًا بقنوات الدردشة والأدوات. ووفق الموقع، يدعم أكثر من 16 قناة دردشة، والبحث على الويب، والمهام المجدولة، والذاكرة طويلة الأمد، وتكامل MCP وREST API، ووضع البوابة (gateway). ويضيف README أن نحو 95% من الشيفرة الأساسية ولّدها وكيل ذكاء اصطناعي ثم حُسّنت بمراجعة بشرية؛ وهذا قول الجهة المطوِّرة ولم يُتحقق منه."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "كيف تحصل عليه",
        "content": [
          "**PicoClaw متاح للتنزيل مجانًا على Linux وmacOS وWindows وAndroid، ويمكن استخدام Docker وملفات الحزم بديلًا.**"
        ],
        "columns": [
          "الخيار",
          "مصدر الحصول عليه"
        ],
        "rows": [
          {
            "الخيار": "Windows وmacOS وLinux",
            "مصدر الحصول عليه": "نزّله من [picoclaw.io/download](https://picoclaw.io/download) ثم افتح برنامج picoclaw-launcher لاستخدام واجهة WebUI عبر المتصفح على حاسوبك"
          },
          {
            "الخيار": "Android",
            "مصدر الحصول عليه": "ملف APK من [picoclaw.io/download](https://picoclaw.io/download)، دون حاجة إلى Termux وفق README؛ والبديل هو الإعداد عبر Termux"
          },
          {
            "الخيار": "Docker",
            "مصدر الحصول عليه": "ملفات Docker Compose في [مستودع GitHub](https://github.com/sipeed/picoclaw)"
          },
          {
            "الخيار": "الحزم والملفات التنفيذية",
            "مصدر الحصول عليه": "[GitHub Releases](https://github.com/sipeed/picoclaw/releases): أرشيفات لأنظمة Linux وmacOS وWindows وFreeBSD، إضافة إلى حزم .deb و.rpm"
          },
          {
            "الخيار": "الموقع",
            "مصدر الحصول عليه": "[picoclaw.io](https://picoclaw.io)"
          },
          {
            "الخيار": "الوثائق",
            "مصدر الحصول عليه": "[docs.picoclaw.io](https://docs.picoclaw.io)"
          },
          {
            "الخيار": "سياسة الخصوصية",
            "مصدر الحصول عليه": "لم نجدها في picoclaw.io ولا في المستودع"
          },
          {
            "الخيار": "الشيفرة المصدرية",
            "مصدر الحصول عليه": "[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)، ترخيص MIT"
          }
        ],
        "note": "الإصدار الذي رُوجع: 0.3.1، الصادر في 3 يوليو 2026 وفق GitHub Releases. نسخة macOS غير موثّقة (notarized) من Apple، لذا يطلب macOS السماح بتشغيلها من «الخصوصية والأمان» عند أول فتح. تعرض صفحة التنزيل المنصات عبر JavaScript فقط، فلم تُشاهَد أسماء ملفات المثبّتات بدقة؛ وأنواع الملفات المذكورة أعلاه مأخوذة من GitHub Releases."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "المتطلبات",
        "content": [
          "**يذكر الموقع 64 MB من ذاكرة RAM حدًّا أدنى و512 MB مقدارًا موصى به، إضافة إلى اتصال بالإنترنت.**"
        ],
        "columns": [
          "البند",
          "ما تقوله المصادر"
        ],
        "rows": [
          {
            "البند": "الذاكرة",
            "ما تقوله المصادر": "يذكر README أقل من 10 MB للبرنامج الأساسي، ويشير إلى أن الإصدارات الحديثة قد تستخدم من 10 إلى 20 MB"
          },
          {
            "البند": "المعالجات",
            "ما تقوله المصادر": "تُذكر x86_64 وARM64 وARMv7 وARMv6 وRISC-V وMIPS وLoongArch"
          },
          {
            "البند": "نظام التشغيل",
            "ما تقوله المصادر": "Linux وmacOS وWindows وAndroid وFreeBSD؛ ولا يُذكر الحد الأدنى لإصدار Android"
          },
          {
            "البند": "النموذج اللغوي",
            "ما تقوله المصادر": "مزوّد تضبطه أنت: واجهة API سحابية بمفتاح، أو خادم Ollama أو vLLM دون مفتاح"
          },
          {
            "البند": "البناء من المصدر",
            "ما تقوله المصادر": "Go 1.25 أو أحدث، إضافة إلى Node.js 22 وpnpm لمشغّل WebUI"
          }
        ],
        "note": "لا تُذكر النماذج التي تعمل جيدًا على كل لوحة؛ فهذا يعتمد على خادم النماذج لا على PicoClaw."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "كيف تبدأ",
        "content": [
          "**تتبع الخطوات ملف README والموقع؛ ولم تنفّذها PromptQuorum.**"
        ],
        "numberedItems": [
          {
            "title": "نزّل PicoClaw",
            "whyItMatters": "احصل على النسخة المناسبة لنظامك من picoclaw.io، أو ملف APK على Android؛ ولا تذكر المصادر أي حساب."
          },
          {
            "title": "افتح المشغّل أو نفّذ الإعداد الأولي",
            "whyItMatters": "على سطح المكتب، شغّل picoclaw-launcher واستخدم WebUI في المتصفح؛ وفي الطرفية ينشئ الأمر picoclaw onboard مساحة العمل."
          },
          {
            "title": "اختر مزوّد النموذج",
            "whyItMatters": "أدخل مفتاح API لمزوّد سحابي، أو وجّه PicoClaw إلى خادم Ollama الخاص بك (مثل http://localhost:11434/v1) أو إلى خادم vLLM."
          },
          {
            "title": "اربط قناة دردشة",
            "whyItMatters": "أضف Telegram أو Discord أو قناة أخرى في الإعدادات ثم راسل الوكيل؛ وتُعد خوادم MCP والمهام المجدولة خيارات إضافية في الوثائق."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "الميزات التي أكدتها المصادر",
        "content": [
          "**كل بند أدناه مأخوذ من الموقع أو ملف README أو الوثائق؛ ولم يُختبر أي منها هنا.**"
        ],
        "items": [
          "**قنوات الدردشة.** يسرد الموقع أكثر من 16 قناة، منها Telegram وDiscord وSlack وQQ؛ وتذكر الوثائق أيضًا DingTalk وFeishu وWeCom وLINE.",
          "**المزوّدون.** مزوّدون سحابيون كثيرون إضافة إلى Ollama وvLLM، مع توجيه للنماذج قائم على قواعد يرسل الاستعلامات البسيطة إلى نماذج أخف.",
          "**الأدوات.** البحث على الويب، والجدولة على نمط cron، وخوادم MCP التي تُدار من سطر الأوامر وWebUI، وواجهة REST API، وخط معالجة للرؤية للصور والملفات.",
          "**الذاكرة.** ذاكرة طويلة الأمد ومخزن ذاكرة بصيغة JSONL، وفق الموقع وملاحظات الإصدار.",
          "**قابلية النقل.** ملف تنفيذي واحد لمعمارية x86_64 وARM وRISC-V وMIPS وLoongArch، إضافة إلى نسخة Android."
        ],
        "note": "يذكر README إصدارًا لتعزيز الأمان (0.2.4) لكنه لا ينشر تدقيقًا، ولذلك لم يُؤكَّد أمان أدواته بشكل مستقل."
      },
      "privacy": {
        "id": "privacy",
        "title": "تدفق البيانات والخصوصية",
        "content": [
          "**تقول الأسئلة الشائعة في الموقع إن سجل المحادثات والإعدادات يبقيان على جهازك، بينما تذهب الطلبات الموجهة إلى النموذج اللغوي إلى المزوّد الذي تضبطه.**",
          "ومع مزوّد سحابي تصل مطالباتك إلى ذلك المزوّد بحسب سياسته الخاصة؛ أما مع Ollama أو vLLM على شبكتك فتبقى هناك. والرسائل المرسلة عبر قناة دردشة مثل Telegram تمر أيضًا عبر تلك المنصة."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "هذه أقوال الجهة المطوِّرة لا نتائج تدقيق. يحذّر README من احتمال وجود مشكلات أمنية لم تُحل، ولم تفحص PromptQuorum حركة الشبكة ولا الشيفرة."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**مالكو Raspberry Pi ولوحات RISC-V** الذين يريدون وكيلًا صغيرًا على لوحة يملكونها أصلًا.",
          "**مستخدمو Ollama أو vLLM** الذين يريدون الوصول من تطبيق دردشة إلى نموذج على شبكتهم.",
          "**الهواة الذين لديهم هاتف Android قديم** ويريدون تجربة مساعد يعمل دائمًا دون عتاد إضافي."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**الجاهزية للإنتاج.** وفق README، فإن PicoClaw في مرحلة تطوير مبكرة وسريعة، وقد تكون فيه مشكلات أمنية لم تُحل، ولا ينبغي نشره في الإنتاج قبل الإصدار 1.0.",
          "**أرقام الذاكرة.** الرقم الرئيسي (أقل من 10 MB) والمقارنة مع OpenClaw وNanoBot صادران عن الجهة المطوِّرة نفسها؛ ولم يُقَس أيٌّ منهما هنا.",
          "**تفاصيل Android.** لا يُذكر الحد الأدنى لإصدار Android ولا توقيع ملف APK ولا الميزات التي تعمل على الهاتف.",
          "**معالجة البيانات.** لم نجد سياسة خصوصية ولا وثيقة لمعالجة البيانات، ولم تُفحص حركة الشبكة.",
          "**جودة النماذج المحلية.** لم يُختبر مدى قدرة اللوحات الصغيرة والنماذج المحلية على مهام الوكلاء."
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
            "التطبيق": "[nanobot](/ar/power-local-llm/nanobot-review)",
            "المنصات": "Windows وmacOS وLinux",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الرئيسي": "إطار وكلاء مستضاف ذاتيًا بذاكرة وأدوات MCP وقنوات دردشة"
          },
          {
            "التطبيق": "[OpenClaw](/ar/power-local-llm/openclaw-review)",
            "المنصات": "Windows وmacOS وLinux",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الرئيسي": "إطار تنسيق لسير عمل الوكلاء"
          },
          {
            "التطبيق": "[Hermes Agent](/ar/power-local-llm/hermes-agent-review)",
            "المنصات": "macOS وLinux",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الرئيسي": "وكيل بسطر الأوامر بذاكرة دائمة"
          }
        ],
        "note": "تأكد من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته الخاصة قبل الاختيار."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل PicoClaw نسخة متفرعة من OpenClaw؟",
            "a": "لا. يصفه README بأنه مشروع مستقل كُتب من الصفر بلغة Go وألهمه NanoBot، ويقول إنه ليس نسخة متفرعة من OpenClaw أو NanoBot أو أي مشروع آخر."
          },
          {
            "q": "مع أي نماذج محلية يعمل PicoClaw؟",
            "a": "يعرض README أمثلة إعداد لـ Ollama (مثل llama3.1:8b) وvLLM عبر عنوانيهما المتوافقين مع OpenAI، ويقول الموقع إن أي واجهة API متوافقة مع OpenAI تعمل."
          },
          {
            "q": "هل توجد عملة رقمية رسمية لـ PicoClaw؟",
            "a": "لا. يقول README إن PicoClaw لم يُصدر أي رموز أو عملات رقمية، وإن picoclaw.io هو الموقع الرسمي الوحيد، وإن أطرافًا خارجية سجّلت نطاقات كثيرة مشابهة."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "يتيح PicoClaw، بترخيص MIT، وضع وكيل ذكاء اصطناعي صغير على لوحات رخيصة وهواتف قديمة وحواسيب وربطه بخادم Ollama أو vLLM الخاص بك أو بنموذج سحابي. في المقابل، تصفه الجهة المطوِّرة نفسها بأنه في مرحلة مبكرة، ولا تُوصَف معالجة البيانات إلا في إجابة قصيرة ضمن الأسئلة الشائعة، ولم تختبر PromptQuorum السرعة ولا استهلاك الذاكرة ولا السلوك على Android. يناسب الهواة القادرين على تجربته على عتاد فائض؛ ولا ينبغي أن يتولى أي مهمة تتطلب الموثوقية أو الأمان إلى أن يعلن المشروع جاهزيته."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[موقع PicoClaw](https://picoclaw.io) — نظرة عامة على المنتج والأسئلة الشائعة وأرقام العتاد وروابط التذييل، روجع في 1 نوفمبر 2026.",
          "[صفحة تنزيل PicoClaw](https://picoclaw.io/download) — مصادر التنزيل وأمر الإعداد الأولي، روجعت في 1 نوفمبر 2026.",
          "[PicoClaw على GitHub](https://github.com/sipeed/picoclaw) — README وترخيص MIT وإشعار الأمان وسجل الـ commits، روجعت في 1 نوفمبر 2026.",
          "[إصدارات PicoClaw](https://github.com/sipeed/picoclaw/releases) — الإصدار 0.3.1 بتاريخ 3 يوليو 2026 وقائمة ملفاته، روجعت في 1 نوفمبر 2026.",
          "[وثائق PicoClaw](https://docs.picoclaw.io) — قنوات الدردشة وأدلة الإعداد، روجعت في 1 نوفمبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة nanobot](/ar/power-local-llm/nanobot-review) — إطار مستضاف ذاتيًا لوكلاء الذكاء الاصطناعي الشخصيين بذاكرة وأدوات MCP.",
          "[مراجعة OpenClaw](/ar/power-local-llm/openclaw-review) — إطار تنسيق لسير عمل الوكلاء.",
          "[مراجعة Hermes Agent](/ar/power-local-llm/hermes-agent-review) — وكيل بسطر الأوامر بذاكرة دائمة.",
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
    "theme": "Local AI Agents & Tool Use",
    "heroImage": "/images/picoclaw-review-hero-zh.webp",
    "title": "PicoClaw 评测：面向小型设备的开源 AI 智能体",
    "seoTitle": "PicoClaw 评测：Go 编写的轻量开源 AI 智能体",
    "intro": "PicoClaw 是硬件公司 Sipeed 用 Go 语言编写的免费个人 AI 智能体，采用 MIT 许可证。它面向低成本 Linux 开发板、旧 Android 手机和普通桌面电脑，会把你的请求转发给你选定的语言模型：云端服务商，或你自己的 Ollama、vLLM 服务器。本评测基于 [picoclaw.io](https://picoclaw.io)、[GitHub 仓库](https://github.com/sipeed/picoclaw)和项目文档，核查于 2026 年 11 月 1 日；PromptQuorum 没有实际测试过 PicoClaw。",
    "metaDescription": "PicoClaw 评测：Sipeed 用 Go 编写的免费 AI 智能体，适用于小型开发板、Android 和桌面，支持 Ollama 与 vLLM，MIT 许可证。处于早期阶段，未经实测。",
    "twitterDescription": "PicoClaw 评测：Sipeed 推出的小型开源 AI 智能体，把聊天应用连接到你自己的 Ollama 或 vLLM 服务器，或云端模型。哪些已被资料证实，哪些没有。",
    "audience": "拥有树莓派、RISC-V 开发板、闲置 Android 手机或家用服务器、想找一个轻量 AI 助手，并想了解 PicoClaw 能做什么、需要什么、哪些信息资料中没有说明的爱好者。",
    "readTime": "阅读约5分钟",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "PicoClaw 评测",
    "targetKeywords": [
      "picoclaw 评测",
      "picoclaw ai 智能体",
      "sipeed picoclaw",
      "picoclaw ollama",
      "树莓派 ai 智能体",
      "android 轻量 ai 助手",
      "picoclaw 安装"
    ],
    "current_models_mentioned": [
      "Llama"
    ],
    "current_hardware_mentioned": [
      "Raspberry Pi",
      "RISC-V",
      "Android"
    ],
    "leadAnswerBlock": "**PicoClaw（0.3.1 版，2026 年 7 月 3 日发布）是 Sipeed 推出的免费个人 AI 智能体，采用 MIT 许可证，作为单个 Go 程序运行在小型开发板、Android 手机和桌面电脑上，并把你的请求交给你配置的语言模型。** 它本身不运行模型，因此需要云端 API 密钥，或本地的 Ollama、vLLM 服务器。",
    "quickAnswerTop": {
      "zh": {
        "question": "PicoClaw 能自己运行 AI 模型吗？",
        "answer": "不能。PicoClaw 是智能体层；据 README，模型来自你配置的服务商。云端服务商需要 API 密钥，而 Ollama 和 vLLM 被列为无需密钥的本地选项。",
        "bullets": [
          "据开发者介绍，它可连接 Telegram、Discord、Slack 等聊天渠道。",
          "支持 MCP 服务器、定时任务、网页搜索和长期记忆。",
          "官网给出的内存下限为 64 MB，推荐 512 MB。",
          "提供 Linux、macOS、Windows、Android 和 Docker 的下载。"
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
        "label": "PicoClaw 是什么？",
        "anchor": "what-is-picoclaw"
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
            "text": "PicoClaw 是 Sipeed 用 Go 编写的小型开源 AI 助手，可把聊天应用和工具连接到你选定的语言模型。"
          },
          {
            "type": "plain-terms",
            "text": "你在开发板、手机或电脑上装一个程序，把它指向云端模型或你自己的 Ollama 服务器，然后通过聊天应用或浏览器页面与它对话。"
          }
        ],
        "items": [
          "维护情况：最新稳定版 0.3.1 发布于 2026 年 7 月 3 日，主分支最新提交为 2026 年 8 月 19 日，因此不适用项目停更警告。",
          "模型：不附带模型；支持 Ollama、vLLM 和众多云端服务商。",
          "费用：软件按 MIT 许可证免费，据官网常见问题，你只需向自己的模型服务商付费。",
          "成熟度：README 称其为早期阶段的软件，并建议在 1.0 版之前不要用于生产环境。",
          "开发者：硬件公司 Sipeed；据 README，PicoClaw 不是 OpenClaw 或 NanoBot 的分支。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本评测基于 picoclaw.io、GitHub 仓库和文档网站，核查于 2026 年 11 月 1 日。PromptQuorum 没有安装、运行或测评 PicoClaw，因此未评估其速度、内存占用和回答质量。"
          }
        ]
      },
      "overview": {
        "id": "what-is-picoclaw",
        "title": "PicoClaw 是什么？",
        "content": [
          "**PicoClaw 是 Sipeed 用 Go 语言编写的个人 AI 助手程序，目标是在廉价硬件上快速启动并占用很少内存。** README 称它是从零编写的独立开源项目，灵感来自 NanoBot。Sipeed 也生产该项目所宣传的 RISC-V 开发板。",
          "该程序把语言模型连接到聊天渠道和工具。据官网，它支持 16 个以上的聊天渠道、网页搜索、定时任务、长期记忆、MCP 与 REST API 集成，以及网关模式。README 还提到，约 95% 的核心代码由 AI 智能体生成，再经人工审阅完善；这是开发者的说法，未经核实。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "content": [
          "**PicoClaw 可免费下载，支持 Linux、macOS、Windows 和 Android；Docker 与软件包文件是备选方式。**"
        ],
        "columns": [
          "选项",
          "获取方式"
        ],
        "rows": [
          {
            "选项": "Windows、macOS、Linux",
            "获取方式": "从 [picoclaw.io/download](https://picoclaw.io/download) 下载，再打开 picoclaw-launcher 程序，即可在自己的电脑上使用基于浏览器的 WebUI"
          },
          {
            "选项": "Android",
            "获取方式": "[picoclaw.io/download](https://picoclaw.io/download) 上的 APK；据 README 无需 Termux，备选方式是通过 Termux 安装"
          },
          {
            "选项": "Docker",
            "获取方式": "[GitHub 仓库](https://github.com/sipeed/picoclaw)中的 Docker Compose 文件"
          },
          {
            "选项": "软件包与二进制文件",
            "获取方式": "[GitHub Releases](https://github.com/sipeed/picoclaw/releases)：适用于 Linux、macOS、Windows 和 FreeBSD 的压缩包，以及 .deb 和 .rpm 软件包"
          },
          {
            "选项": "官网",
            "获取方式": "[picoclaw.io](https://picoclaw.io)"
          },
          {
            "选项": "文档",
            "获取方式": "[docs.picoclaw.io](https://docs.picoclaw.io)"
          },
          {
            "选项": "隐私政策",
            "获取方式": "在 picoclaw.io 和仓库中均未找到"
          },
          {
            "选项": "源代码",
            "获取方式": "[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)，MIT 许可证"
          }
        ],
        "note": "核查的版本：0.3.1，据 GitHub Releases 发布于 2026 年 7 月 3 日。macOS 版本未经 Apple 公证，因此首次启动时 macOS 会要求在“隐私与安全性”中允许运行。下载页只通过 JavaScript 显示平台列表，所以没有看到安装包的确切文件名；上述文件类型来自 GitHub Releases。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "系统要求",
        "content": [
          "**官网给出的内存下限为 64 MB，推荐 512 MB，另需互联网连接。**"
        ],
        "columns": [
          "项目",
          "资料中的说法"
        ],
        "rows": [
          {
            "项目": "内存",
            "资料中的说法": "README 称核心程序不到 10 MB，并注明近期版本可能占用 10 至 20 MB"
          },
          {
            "项目": "处理器",
            "资料中的说法": "提到 x86_64、ARM64、ARMv7、ARMv6、RISC-V、MIPS 和 LoongArch"
          },
          {
            "项目": "操作系统",
            "资料中的说法": "Linux、macOS、Windows、Android 和 FreeBSD；未说明 Android 最低版本"
          },
          {
            "项目": "语言模型",
            "资料中的说法": "由你配置的服务商：需要密钥的云端 API，或无需密钥的 Ollama、vLLM 服务器"
          },
          {
            "项目": "从源码构建",
            "资料中的说法": "Go 1.25 或更高版本，以及用于 WebUI 启动器的 Node.js 22 和 pnpm"
          }
        ],
        "note": "资料没有说明哪些模型能在哪种开发板上流畅运行；这取决于模型服务器，而不是 PicoClaw。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "如何上手",
        "content": [
          "**以下步骤依据 README 和官网；PromptQuorum 没有实际执行。**"
        ],
        "numberedItems": [
          {
            "title": "下载 PicoClaw",
            "whyItMatters": "从 picoclaw.io 获取适合你系统的版本，Android 上则是 APK；资料中没有提到账户。"
          },
          {
            "title": "打开启动器或运行初始化",
            "whyItMatters": "在桌面上启动 picoclaw-launcher，并在浏览器中使用 WebUI；在终端里运行 picoclaw onboard 来创建工作区。"
          },
          {
            "title": "选择模型服务商",
            "whyItMatters": "填入云端服务商的 API 密钥，或把 PicoClaw 指向你的 Ollama 服务器（例如 http://localhost:11434/v1）或 vLLM 服务器。"
          },
          {
            "title": "连接聊天渠道",
            "whyItMatters": "在配置中添加 Telegram、Discord 或其他渠道，然后给智能体发消息；MCP 服务器和定时任务是文档中的其他选项。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "资料证实的功能",
        "content": [
          "**以下每一项都来自官网、README 或文档；此处均未经测试。**"
        ],
        "items": [
          "**聊天渠道。** 官网列出 16 个以上，包括 Telegram、Discord、Slack 和 QQ；文档还提到钉钉、飞书、企业微信和 LINE。",
          "**服务商。** 众多云端服务商，加上 Ollama 和 vLLM，并有基于规则的模型路由，把简单请求交给更轻量的模型。",
          "**工具。** 网页搜索、cron 式定时任务、可通过命令行和 WebUI 管理的 MCP 服务器、REST API，以及处理图片和文件的视觉管线。",
          "**记忆。** 据官网和发布说明，具备长期记忆和 JSONL 记忆存储。",
          "**可移植性。** 一个二进制文件即可覆盖 x86_64、ARM、RISC-V、MIPS 和 LoongArch，另有 Android 版本。"
        ],
        "note": "README 提到一个安全加固版本（0.2.4），但没有公布审计结果，因此其工具的安全性未得到独立证实。"
      },
      "privacy": {
        "id": "privacy",
        "title": "数据流向与隐私",
        "content": [
          "**官网常见问题称，对话历史和配置保留在你的设备上，而发给语言模型的请求仍会发送到你配置的服务商。**",
          "因此使用云端服务商时，你的提示词会按该服务商自己的政策送达对方；在自己网络中使用 Ollama 或 vLLM 时则留在网络内。通过 Telegram 等聊天渠道发送的消息还会经过该平台。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "这些是开发者的说法，不是审计结果。README 警告可能存在尚未解决的安全问题，PromptQuorum 也没有检查网络流量或代码。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合谁使用",
        "items": [
          "**树莓派和 RISC-V 开发板用户**，想在手边已有的开发板上放一个小型智能体。",
          "**Ollama 或 vLLM 用户**，想通过聊天应用访问自己网络中的模型。",
          "**有旧 Android 手机的爱好者**，想不添置硬件就试用常驻助手。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们无法核实的内容",
        "items": [
          "**生产就绪度。** 据 README，PicoClaw 处于早期快速开发阶段，可能存在尚未解决的安全问题，在 1.0 版之前不应部署到生产环境。",
          "**内存数据。** 不到 10 MB 的主打数字，以及与 OpenClaw、NanoBot 的对比，均出自开发者本人；此处没有实测。",
          "**Android 细节。** Android 最低版本、APK 签名以及手机上有哪些功能可用，均未说明。",
          "**数据处理。** 没有找到隐私政策或数据处理文档，也没有检查网络流量。",
          "**本地模型质量。** 小型开发板和本地模型处理智能体任务的效果尚未测试。"
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
            "应用": "[nanobot](/zh/power-local-llm/nanobot-review)",
            "平台": "Windows、macOS、Linux",
            "价格 / 许可": "免费 / MIT",
            "主要区别": "带记忆、MCP 工具和聊天渠道的自托管智能体框架"
          },
          {
            "应用": "[OpenClaw](/zh/power-local-llm/openclaw-review)",
            "平台": "Windows、macOS、Linux",
            "价格 / 许可": "免费 / MIT",
            "主要区别": "面向智能体工作流的编排框架"
          },
          {
            "应用": "[Hermes Agent](/zh/power-local-llm/hermes-agent-review)",
            "平台": "macOS、Linux",
            "价格 / 许可": "免费 / MIT",
            "主要区别": "带持久记忆的命令行智能体"
          }
        ],
        "note": "选择前，请在各应用自己的页面上确认其当前价格、许可证和支持平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "PicoClaw 是 OpenClaw 的分支吗？",
            "a": "不是。README 称它是用 Go 从零编写的独立项目，灵感来自 NanoBot，并表示它不是 OpenClaw、NanoBot 或任何其他项目的分支。"
          },
          {
            "q": "PicoClaw 支持哪些本地模型？",
            "a": "README 给出了通过 OpenAI 兼容地址使用 Ollama（如 llama3.1:8b）和 vLLM 的配置示例，官网则表示任何 OpenAI 兼容的 API 都可使用。"
          },
          {
            "q": "PicoClaw 有官方加密货币吗？",
            "a": "没有。据 README，PicoClaw 没有发行任何代币或加密货币，picoclaw.io 是唯一官方网站，且有许多相似域名被第三方注册。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "PicoClaw 提供了一种按 MIT 许可证把小型 AI 智能体放到廉价开发板、旧手机和电脑上、并连接到你自己的 Ollama、vLLM 服务器或云端模型的方式。另一方面，开发者自己称其处于早期阶段，数据处理只在一条简短的常见问题回答中提及，PromptQuorum 也没有测试速度、内存占用或 Android 上的表现。它适合能在闲置硬件上试用的爱好者；在项目声明准备就绪之前，不应让它承担任何要求可靠或安全的任务。"
      },
      "sources": {
        "id": "sources",
        "title": "资料来源",
        "items": [
          "[PicoClaw 官网](https://picoclaw.io) — 产品概述、常见问题、硬件数据和页脚链接，核查于 2026 年 11 月 1 日。",
          "[PicoClaw 下载页](https://picoclaw.io/download) — 下载来源和初始化命令，核查于 2026 年 11 月 1 日。",
          "[GitHub 上的 PicoClaw](https://github.com/sipeed/picoclaw) — README、MIT 许可证、安全提示和提交历史，核查于 2026 年 11 月 1 日。",
          "[PicoClaw 发布页](https://github.com/sipeed/picoclaw/releases) — 2026 年 7 月 3 日的 0.3.1 版及其文件列表，核查于 2026 年 11 月 1 日。",
          "[PicoClaw 文档](https://docs.picoclaw.io) — 聊天渠道和配置指南，核查于 2026 年 11 月 1 日。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "相关阅读",
        "items": [
          "[nanobot 评测](/zh/power-local-llm/nanobot-review) — 带记忆和 MCP 工具的自托管个人 AI 智能体框架。",
          "[OpenClaw 评测](/zh/power-local-llm/openclaw-review) — 面向智能体工作流的编排框架。",
          "[Hermes Agent 评测](/zh/power-local-llm/hermes-agent-review) — 带持久记忆的命令行智能体。",
          "[本地大模型软件目录](/zh/directory) — 本地 AI 工具的完整目录。"
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
    "theme": "Local AI Agents & Tool Use",
    "heroImage": "/images/picoclaw-review-hero-ko.webp",
    "title": "PicoClaw 리뷰: 소형 기기용 오픈소스 AI 에이전트",
    "seoTitle": "PicoClaw 리뷰: Go로 만든 가벼운 오픈소스 AI 에이전트",
    "intro": "PicoClaw는 하드웨어 기업 Sipeed가 Go로 작성한 무료 MIT 라이선스 개인용 AI 에이전트입니다. 저가 Linux 보드, 오래된 Android 휴대폰, 일반 데스크톱에서 실행하도록 설계되었으며, 사용자가 고른 언어 모델(클라우드 제공업체 또는 직접 운영하는 Ollama·vLLM 서버)로 요청을 전달합니다. 이 리뷰는 [picoclaw.io](https://picoclaw.io), [GitHub 저장소](https://github.com/sipeed/picoclaw), 프로젝트 문서를 바탕으로 하며 2026년 11월 1일에 확인했습니다. PromptQuorum은 PicoClaw를 직접 사용해 보지 않았습니다.",
    "metaDescription": "PicoClaw 리뷰: Sipeed의 무료 Go 기반 AI 에이전트. 소형 보드, Android, 데스크톱에서 실행되며 Ollama와 vLLM을 지원합니다. 초기 단계, 직접 테스트 안 함.",
    "twitterDescription": "PicoClaw 리뷰: 채팅 앱을 직접 운영하는 Ollama·vLLM 서버나 클라우드 모델에 연결하는 Sipeed의 소형 오픈소스 AI 에이전트. 출처가 확인해 주는 것과 그렇지 않은 것.",
    "audience": "Raspberry Pi, RISC-V 보드, 남는 Android 휴대폰, 홈 서버를 가지고 있으며 가벼운 AI 어시스턴트를 찾는 분 중 PicoClaw가 무엇을 하는지, 무엇이 필요한지, 출처가 밝히지 않은 부분이 무엇인지 알고 싶은 분.",
    "readTime": "5분 읽기",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "PicoClaw 리뷰",
    "targetKeywords": [
      "picoclaw 리뷰",
      "picoclaw ai 에이전트",
      "sipeed picoclaw",
      "picoclaw ollama",
      "raspberry pi ai 에이전트",
      "android 경량 ai 어시스턴트",
      "picoclaw 설치"
    ],
    "current_models_mentioned": [
      "Llama"
    ],
    "current_hardware_mentioned": [
      "Raspberry Pi",
      "RISC-V",
      "Android"
    ],
    "leadAnswerBlock": "**PicoClaw(버전 0.3.1, 2026년 7월 3일 출시)는 Sipeed의 무료 MIT 라이선스 개인용 AI 에이전트로, 단일 Go 프로그램으로 소형 보드, Android 휴대폰, 데스크톱에서 실행되며 요청을 사용자가 설정한 언어 모델로 넘깁니다.** 모델을 자체적으로 실행하지 않으므로 클라우드 API 키나 로컬 Ollama·vLLM 서버가 필요합니다.",
    "quickAnswerTop": {
      "ko": {
        "question": "PicoClaw가 AI 모델을 직접 실행할 수 있나요?",
        "answer": "아닙니다. PicoClaw는 에이전트 계층이며, README에 따르면 모델은 사용자가 설정한 제공업체에서 옵니다. 클라우드 제공업체는 API 키가 필요하고, Ollama와 vLLM은 키가 필요 없는 로컬 옵션으로 나와 있습니다.",
        "bullets": [
          "개발사에 따르면 Telegram, Discord, Slack 같은 채팅 채널에 연결됩니다.",
          "MCP 서버, 예약 작업, 웹 검색, 장기 기억을 지원합니다.",
          "사이트는 최소 RAM 64MB, 권장 512MB를 제시합니다.",
          "Linux, macOS, Windows, Android, Docker용 다운로드가 있습니다."
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
        "label": "PicoClaw란?",
        "anchor": "what-is-picoclaw"
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
            "text": "PicoClaw는 Sipeed가 Go로 만든 소형 오픈소스 AI 어시스턴트로, 채팅 앱과 도구를 사용자가 고른 언어 모델에 연결합니다."
          },
          {
            "type": "plain-terms",
            "text": "보드, 휴대폰, 컴퓨터에 프로그램 하나를 설치하고 클라우드 모델이나 직접 운영하는 Ollama 서버를 지정하면, 채팅 앱이나 브라우저 페이지에서 대화할 수 있습니다."
          }
        ],
        "items": [
          "유지 관리: 최신 안정 버전 0.3.1은 2026년 7월 3일, 메인 브랜치의 최신 커밋은 2026년 8월 19일이므로 방치된 프로젝트 경고는 해당되지 않습니다.",
          "모델: 포함된 모델은 없으며 Ollama, vLLM, 다수의 클라우드 제공업체를 지원합니다.",
          "비용: 소프트웨어는 MIT 라이선스로 무료이며, 사이트 FAQ에 따르면 본인의 모델 제공업체에만 비용을 냅니다.",
          "성숙도: README는 초기 단계 소프트웨어라고 밝히며 버전 1.0 이전에는 프로덕션 사용을 권하지 않습니다.",
          "개발사: 하드웨어 기업 Sipeed. README에 따르면 PicoClaw는 OpenClaw나 NanoBot의 포크가 아닙니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이 리뷰는 picoclaw.io, GitHub 저장소, 문서 사이트를 바탕으로 2026년 11월 1일에 확인했습니다. PromptQuorum은 PicoClaw를 설치하거나 실행하거나 측정하지 않았으므로 속도, 메모리 사용량, 답변 품질은 평가하지 않습니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-picoclaw",
        "title": "PicoClaw란?",
        "content": [
          "**PicoClaw는 Sipeed가 Go로 작성한 개인용 AI 어시스턴트 프로그램으로, 저렴한 하드웨어에서도 빠르게 시작하고 메모리를 적게 쓰도록 만들어졌습니다.** README는 이를 처음부터 새로 작성한 독립 오픈소스 프로젝트이며 NanoBot에서 영감을 얻었다고 설명합니다. Sipeed는 프로젝트가 홍보하는 RISC-V 보드도 제조합니다.",
          "이 프로그램은 언어 모델을 채팅 채널과 도구에 연결합니다. 사이트에 따르면 16개 이상의 채팅 채널, 웹 검색, 예약 작업, 장기 기억, MCP 및 REST API 연동, 게이트웨이 모드를 지원합니다. README는 핵심 코드의 약 95%를 AI 에이전트가 생성하고 사람의 검토로 다듬었다고 덧붙이는데, 이는 개발사의 주장이며 확인하지 않았습니다."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "설치 방법",
        "content": [
          "**PicoClaw는 Linux, macOS, Windows, Android용으로 무료 다운로드할 수 있으며 Docker와 패키지 파일도 대안입니다.**"
        ],
        "columns": [
          "옵션",
          "입수 방법"
        ],
        "rows": [
          {
            "옵션": "Windows, macOS, Linux",
            "입수 방법": "[picoclaw.io/download](https://picoclaw.io/download)에서 내려받은 뒤 picoclaw-launcher를 열면 내 컴퓨터에서 브라우저 기반 WebUI를 사용할 수 있습니다"
          },
          {
            "옵션": "Android",
            "입수 방법": "[picoclaw.io/download](https://picoclaw.io/download)의 APK. README에 따르면 Termux는 필요 없으며, 대안은 Termux 설치입니다"
          },
          {
            "옵션": "Docker",
            "입수 방법": "[GitHub 저장소](https://github.com/sipeed/picoclaw)의 Docker Compose 파일"
          },
          {
            "옵션": "패키지와 바이너리",
            "입수 방법": "[GitHub Releases](https://github.com/sipeed/picoclaw/releases): Linux, macOS, Windows, FreeBSD용 압축 파일과 .deb, .rpm 패키지"
          },
          {
            "옵션": "웹사이트",
            "입수 방법": "[picoclaw.io](https://picoclaw.io)"
          },
          {
            "옵션": "문서",
            "입수 방법": "[docs.picoclaw.io](https://docs.picoclaw.io)"
          },
          {
            "옵션": "개인정보 처리방침",
            "입수 방법": "picoclaw.io와 저장소에서 찾지 못했습니다"
          },
          {
            "옵션": "소스 코드",
            "입수 방법": "[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw), MIT 라이선스"
          }
        ],
        "note": "확인한 버전: 0.3.1, GitHub Releases에 따르면 2026년 7월 3일 출시. macOS 빌드는 Apple 공증을 받지 않아 첫 실행 시 macOS가 \"개인정보 보호 및 보안\"에서 허용하도록 요구합니다. 다운로드 페이지는 플랫폼 목록을 JavaScript로만 표시하므로 설치 파일의 정확한 이름은 확인하지 못했고, 위 파일 형식은 GitHub Releases에서 가져왔습니다."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "요구 사항",
        "content": [
          "**사이트는 최소 RAM 64MB, 권장 512MB와 인터넷 연결을 제시합니다.**"
        ],
        "columns": [
          "항목",
          "출처의 기재 내용"
        ],
        "rows": [
          {
            "항목": "메모리",
            "출처의 기재 내용": "README는 핵심 프로그램이 10MB 미만이라고 밝히며, 최근 빌드는 10~20MB를 쓸 수 있다고 덧붙입니다"
          },
          {
            "항목": "프로세서",
            "출처의 기재 내용": "x86_64, ARM64, ARMv7, ARMv6, RISC-V, MIPS, LoongArch가 언급됩니다"
          },
          {
            "항목": "운영체제",
            "출처의 기재 내용": "Linux, macOS, Windows, Android, FreeBSD. Android 최소 버전은 밝혀져 있지 않습니다"
          },
          {
            "항목": "언어 모델",
            "출처의 기재 내용": "설정하는 제공업체: 키가 필요한 클라우드 API, 또는 키가 필요 없는 Ollama·vLLM 서버"
          },
          {
            "항목": "소스에서 빌드",
            "출처의 기재 내용": "Go 1.25 이상, 그리고 WebUI 런처용 Node.js 22와 pnpm"
          }
        ],
        "note": "어떤 보드에서 어떤 모델이 잘 실행되는지는 나와 있지 않습니다. 그것은 PicoClaw가 아니라 모델 서버에 달려 있습니다."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "시작하는 방법",
        "content": [
          "**단계는 README와 사이트를 따랐으며, PromptQuorum이 직접 실행해 보지는 않았습니다.**"
        ],
        "numberedItems": [
          {
            "title": "PicoClaw 내려받기",
            "whyItMatters": "picoclaw.io에서 사용 중인 시스템용 빌드(Android는 APK)를 받습니다. 출처에는 계정에 대한 언급이 없습니다."
          },
          {
            "title": "런처를 열거나 온보딩 실행",
            "whyItMatters": "데스크톱에서는 picoclaw-launcher를 실행해 브라우저에서 WebUI를 사용합니다. 터미널에서는 picoclaw onboard가 작업 공간을 만듭니다."
          },
          {
            "title": "모델 제공업체 선택",
            "whyItMatters": "클라우드 제공업체의 API 키를 입력하거나, PicoClaw가 직접 운영하는 Ollama 서버(예: http://localhost:11434/v1) 또는 vLLM 서버를 가리키게 합니다."
          },
          {
            "title": "채팅 채널 연결",
            "whyItMatters": "설정에서 Telegram, Discord 등 채널을 추가하고 에이전트에 메시지를 보냅니다. MCP 서버와 예약 작업은 문서에 있는 추가 옵션입니다."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "출처가 확인한 기능",
        "content": [
          "**아래 항목은 모두 웹사이트, README, 문서에서 가져온 것이며 여기서 테스트한 것은 없습니다.**"
        ],
        "items": [
          "**채팅 채널.** 사이트는 16개 이상을 나열하며 Telegram, Discord, Slack, QQ가 포함됩니다. 문서에는 DingTalk, Feishu, WeCom, LINE도 나옵니다.",
          "**제공업체.** 다수의 클라우드 제공업체와 Ollama, vLLM을 지원하며, 간단한 질의를 더 가벼운 모델로 보내는 규칙 기반 모델 라우팅이 있습니다.",
          "**도구.** 웹 검색, cron 방식 예약, 명령줄과 WebUI에서 관리하는 MCP 서버, REST API, 이미지와 파일을 위한 비전 파이프라인.",
          "**기억.** 사이트와 릴리스 노트에 따르면 장기 기억과 JSONL 메모리 저장소가 있습니다.",
          "**이식성.** x86_64, ARM, RISC-V, MIPS, LoongArch용 단일 바이너리와 Android 빌드."
        ],
        "note": "README는 보안 강화 릴리스(0.2.4)를 언급하지만 감사 결과는 공개하지 않으므로 도구의 보안은 독립적으로 확인되지 않았습니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "데이터 흐름과 개인정보",
        "content": [
          "**사이트 FAQ에 따르면 대화 기록과 설정은 기기에 남지만, 언어 모델로 가는 요청은 여전히 사용자가 설정한 제공업체로 전송됩니다.**",
          "따라서 클라우드 제공업체를 쓰면 프롬프트가 그 업체의 정책에 따라 해당 업체에 도달하고, 자체 네트워크의 Ollama나 vLLM을 쓰면 네트워크 안에 머뭅니다. Telegram 같은 채팅 채널을 거치는 메시지는 해당 플랫폼도 지나갑니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이는 개발사의 주장이지 감사 결과가 아닙니다. README는 해결되지 않은 보안 문제가 있을 수 있다고 경고하며, PromptQuorum은 네트워크 트래픽이나 코드를 검사하지 않았습니다."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "이런 분께 적합합니다",
        "items": [
          "**Raspberry Pi와 RISC-V 보드 소유자**로, 이미 가진 보드에 작은 에이전트를 올리고 싶은 분.",
          "**Ollama 또는 vLLM 사용자**로, 채팅 앱으로 자기 네트워크의 모델에 접근하고 싶은 분.",
          "**오래된 Android 휴대폰이 있는 사용자**로, 추가 하드웨어 없이 항상 켜져 있는 어시스턴트를 시험해 보고 싶은 분."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 내용",
        "items": [
          "**프로덕션 적합성.** README에 따르면 PicoClaw는 초기의 빠른 개발 단계에 있으며 해결되지 않은 보안 문제가 있을 수 있어 버전 1.0 이전에는 프로덕션에 배포하면 안 됩니다.",
          "**메모리 수치.** 10MB 미만이라는 대표 수치와 OpenClaw·NanoBot과의 비교는 개발사 자체의 것이며 여기서 측정하지 않았습니다.",
          "**Android 세부 사항.** Android 최소 버전, APK 서명, 휴대폰에서 작동하는 기능은 밝혀져 있지 않습니다.",
          "**데이터 처리.** 개인정보 처리방침이나 데이터 처리 문서를 찾지 못했고 네트워크 트래픽도 검사하지 않았습니다.",
          "**로컬 모델 품질.** 소형 보드와 로컬 모델이 에이전트 작업을 얼마나 잘 처리하는지는 테스트되지 않았습니다."
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
            "앱": "[nanobot](/ko/power-local-llm/nanobot-review)",
            "플랫폼": "Windows, macOS, Linux",
            "가격 / 라이선스": "무료 / MIT",
            "핵심 차이": "기억, MCP 도구, 채팅 채널을 갖춘 셀프호스팅 에이전트 프레임워크"
          },
          {
            "앱": "[OpenClaw](/ko/power-local-llm/openclaw-review)",
            "플랫폼": "Windows, macOS, Linux",
            "가격 / 라이선스": "무료 / MIT",
            "핵심 차이": "에이전트 워크플로를 위한 오케스트레이션 프레임워크"
          },
          {
            "앱": "[Hermes Agent](/ko/power-local-llm/hermes-agent-review)",
            "플랫폼": "macOS, Linux",
            "가격 / 라이선스": "무료 / MIT",
            "핵심 차이": "지속적인 기억을 가진 명령줄 에이전트"
          }
        ],
        "note": "선택하기 전에 각 앱의 최신 가격, 라이선스, 지원 플랫폼을 해당 페이지에서 확인하세요."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "PicoClaw는 OpenClaw의 포크인가요?",
            "a": "아닙니다. README는 Go로 처음부터 작성한 독립 프로젝트이며 NanoBot에서 영감을 얻었다고 설명하고, OpenClaw·NanoBot 등 다른 어떤 프로젝트의 포크도 아니라고 밝힙니다."
          },
          {
            "q": "PicoClaw는 어떤 로컬 모델과 함께 작동하나요?",
            "a": "README에는 OpenAI 호환 주소를 통해 Ollama(예: llama3.1:8b)와 vLLM을 쓰는 설정 예시가 있으며, 사이트는 OpenAI 호환 API라면 모두 작동한다고 밝힙니다."
          },
          {
            "q": "PicoClaw 공식 암호화폐가 있나요?",
            "a": "없습니다. README에 따르면 PicoClaw는 토큰이나 암호화폐를 발행하지 않았고, 공식 웹사이트는 picoclaw.io뿐이며, 비슷한 도메인이 제3자에 의해 다수 등록되었습니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "총평",
        "content": "PicoClaw는 MIT 라이선스로 작은 AI 에이전트를 저렴한 보드, 오래된 휴대폰, 컴퓨터에 올리고 직접 운영하는 Ollama·vLLM 서버나 클라우드 모델에 연결하는 방법입니다. 반면 개발사 스스로 초기 단계라고 밝히고, 데이터 처리는 짧은 FAQ 답변으로만 설명되며, PromptQuorum은 속도, 메모리 사용량, Android에서의 동작을 테스트하지 않았습니다. 남는 하드웨어에서 시험해 볼 수 있는 애호가에게 적합하며, 프로젝트가 준비되었다고 밝히기 전까지는 신뢰성이나 보안이 필요한 작업을 맡기지 않는 편이 좋습니다."
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[PicoClaw 웹사이트](https://picoclaw.io) — 제품 개요, FAQ, 하드웨어 수치, 푸터 링크. 2026년 11월 1일 확인.",
          "[PicoClaw 다운로드 페이지](https://picoclaw.io/download) — 다운로드 출처와 온보딩 명령. 2026년 11월 1일 확인.",
          "[GitHub의 PicoClaw](https://github.com/sipeed/picoclaw) — README, MIT 라이선스, 보안 공지, 커밋 기록. 2026년 11월 1일 확인.",
          "[PicoClaw 릴리스](https://github.com/sipeed/picoclaw/releases) — 2026년 7월 3일의 버전 0.3.1과 파일 목록. 2026년 11월 1일 확인.",
          "[PicoClaw 문서](https://docs.picoclaw.io) — 채팅 채널과 설정 가이드. 2026년 11월 1일 확인."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[nanobot 리뷰](/ko/power-local-llm/nanobot-review) — 기억과 MCP 도구를 갖춘 셀프호스팅 개인용 AI 에이전트 프레임워크.",
          "[OpenClaw 리뷰](/ko/power-local-llm/openclaw-review) — 에이전트 워크플로를 위한 오케스트레이션 프레임워크.",
          "[Hermes Agent 리뷰](/ko/power-local-llm/hermes-agent-review) — 지속적인 기억을 가진 명령줄 에이전트.",
          "[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록."
        ]
      }
    }
  }
}
