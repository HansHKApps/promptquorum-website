// Home Generative Agent Review: AI Agent for Home Assistant
// Slug: home-generative-agent-review
// Companion to: home-assistant-assist-review, nanobot-review, picoclaw-review
// Sources: the GitHub repo goruck/home-generative-agent (README, docs/installation.md, docs/configuration.md, MIT licence, releases, commits) and the
// Home Assistant Community thread, all checked 2026-11-01 — no hands-on testing. Price is "free" (MIT); no storefront prices, so nothing to localise.
// Source block: EN written first, then 8 locales via docs/geo-translation.md (generated from scratchpad build script; edit this file directly from now on).

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
    "heroImage": "/images/home-generative-agent-review-hero-en.webp",
    "title": "Home Generative Agent Review: AI Agent for Home Assistant",
    "seoTitle": "Home Generative Agent Review: Home Assistant AI Agent",
    "intro": "Home Generative Agent (HGA) is a free, MIT-licensed custom integration for Home Assistant that adds a tool-using AI agent to the Assist conversation interface. Built on LangGraph, it can control the devices you expose to it, write automations from plain-language requests, describe camera images and keep long-term memory. It uses the model provider you choose, from a local Ollama server to OpenAI, Gemini or Anthropic. This review is based on the project's [GitHub repository](https://github.com/goruck/home-generative-agent), its [Home Assistant Community thread](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) and GitHub Releases; PromptQuorum has not installed or run it. It is listed in the [PromptQuorum directory](/directory).",
    "metaDescription": "Home Generative Agent review: free MIT-licensed LangGraph agent for Home Assistant with Ollama or cloud models. Setup, privacy and what is untested.",
    "twitterDescription": "Home Generative Agent review: an open-source LLM agent for Home Assistant that controls entities, writes automations and analyses cameras, with Ollama or cloud models. What the sources confirm and what they do not.",
    "audience": "Home Assistant users who want a conversational AI agent for their smart home and need to know what Home Generative Agent does, what it needs and what the sources leave open.",
    "readTime": "6 min read",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Home Generative Agent review",
    "targetKeywords": [
      "home generative agent review",
      "home generative agent",
      "home assistant ai agent",
      "home assistant langgraph",
      "home assistant ollama agent",
      "home assistant llm automations",
      "hacs home generative agent"
    ],
    "current_models_mentioned": [
      "Qwen",
      "gpt-oss"
    ],
    "current_hardware_mentioned": [
      "GPU"
    ],
    "leadAnswerBlock": "**Home Generative Agent (version 3.44.10, released on 23 October 2026) is a free, MIT-licensed Home Assistant integration that adds an LLM agent to Assist and works with a local Ollama server or cloud models.** It needs a running Home Assistant, a PostgreSQL database with pgvector and at least one model provider.",
    "quickAnswerTop": {
      "en": {
        "question": "Can Home Generative Agent run fully locally?",
        "answer": "Yes, according to the README: with Ollama or an OpenAI-compatible server on your own network as the model provider, no data has to leave your home. OpenAI, Gemini and Anthropic are the cloud alternatives.",
        "bullets": [
          "The agent only sees entities that you have exposed to Assist.",
          "It can write and register Home Assistant automations from a chat request.",
          "Camera analysis needs a vision model, and face recognition also needs an external face service.",
          "Home Assistant 2026.8.0 or newer is required."
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
        "label": "What Is Home Generative Agent?",
        "anchor": "what-is-home-generative-agent"
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
            "text": "Home Generative Agent is an open-source AI agent for Home Assistant that lets you talk to your home, create automations in plain language and ask about camera images."
          },
          {
            "type": "plain-terms",
            "text": "You install it from HACS into your existing Home Assistant, connect a language model such as a local Ollama server, and then pick it as the conversation agent in Assist."
          }
        ],
        "items": [
          "Maintenance: the latest stable release, version 3.44.10, is from 23 October 2026 and the main branch was updated on 1 November 2026, so no stale-project warning applies.",
          "Model: none is included; Ollama, OpenAI-compatible servers, OpenAI, Gemini and Anthropic are supported.",
          "Cost: the software is free under the MIT licence; only a cloud provider, if you choose one, bills you.",
          "Setup: several steps across a database app, HACS and a model provider rather than one installer.",
          "Maker: a single developer (GitHub user goruck), not a company."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "This review is based on the GitHub repository, its documentation and the Home Assistant Community thread, checked on 1 November 2026. PromptQuorum has not installed, run or benchmarked Home Generative Agent, so reliability, speed and the quality of the automations it writes are not assessed."
          }
        ]
      },
      "overview": {
        "id": "what-is-home-generative-agent",
        "title": "What Is Home Generative Agent?",
        "content": [
          "**Home Generative Agent is an AI agent for Home Assistant that acts on your home instead of only passing your words to a language model.** Per the README it is built on LangGraph and uses tools to control entities, query history, watch cameras and write real automations.",
          "It is a Home Assistant custom integration installed through HACS, not a standalone app. Its Sentinel engine watches for security and safety issues with fixed rules, and the README says the language model only advises there and never switches anything; this is the maker's description and was not checked. The opening post of the Community thread still names an older version than GitHub, so this review follows GitHub."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Get It",
        "content": [
          "**Home Generative Agent is installed through HACS into an existing Home Assistant; there is no standalone download.**"
        ],
        "columns": [
          "Option",
          "How to get it"
        ],
        "rows": [
          {
            "Option": "HACS (recommended)",
            "How to get it": "Search for it in HACS, which lists it in its default repository, or use the Open-in-HACS button in the [README](https://github.com/goruck/home-generative-agent); then restart Home Assistant and add the integration"
          },
          {
            "Option": "Manual install",
            "How to get it": "Download home_generative_agent.zip from [GitHub Releases](https://github.com/goruck/home-generative-agent/releases) and copy it into Home Assistant as the installation guide describes"
          },
          {
            "Option": "Database",
            "How to get it": "The [PostgreSQL with pgvector app](https://github.com/goruck/addon-postgres-pgvector) on Home Assistant OS or Supervised, or your own PostgreSQL server"
          },
          {
            "Option": "Website",
            "How to get it": "[Home Assistant Community thread](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923), the project's homepage on GitHub"
          },
          {
            "Option": "Documentation",
            "How to get it": "[Guides in the repository](https://github.com/goruck/home-generative-agent/tree/main/docs): installation, configuration, Sentinel, cameras and architecture"
          },
          {
            "Option": "Privacy policy",
            "How to get it": "None found in the repository or the Community thread"
          },
          {
            "Option": "Source code",
            "How to get it": "[github.com/goruck/home-generative-agent](https://github.com/goruck/home-generative-agent), MIT licence"
          }
        ],
        "note": "Version reviewed: 3.44.10, released on 23 October 2026 per GitHub Releases; a pre-release, 3.45.0-beta.5, also exists and was not reviewed. The Home Assistant steps happen in its web interface, but pulling Ollama models uses a terminal, and the whole chain of services takes more effort than a single install."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requirements",
        "content": [
          "**Home Assistant 2026.8.0 or newer, HACS, a PostgreSQL database with pgvector and at least one model provider are required.**"
        ],
        "columns": [
          "Item",
          "What the sources say"
        ],
        "rows": [
          {
            "Item": "Home Assistant",
            "What the sources say": "2026.8.0 is the minimum (from HGA 3.43.3); 2026.9 and 2026.10 are listed as supported"
          },
          {
            "Item": "Database",
            "What the sources say": "PostgreSQL with pgvector; without it only in-memory storage works, so long-term memory, face recognition and the baseline anomaly detector are unavailable"
          },
          {
            "Item": "Model provider",
            "What the sources say": "OpenAI, Gemini, Anthropic, Ollama or any OpenAI-compatible server"
          },
          {
            "Item": "Local models (optional)",
            "What the sources say": "The guide lists Ollama models such as gpt-oss, qwen3:8b and qwen3-vl:8b; it gives no minimum RAM or VRAM"
          },
          {
            "Item": "Face recognition (optional)",
            "What the sources say": "An external face service that you set up separately"
          },
          {
            "Item": "Voice (optional)",
            "What the sources say": "The OpenAI speech APIs or a local OpenAI-compatible server such as [Speaches](https://speaches.ai/); about 2 GB of VRAM is recommended for the large faster-whisper model"
          }
        ],
        "note": "Which hardware suits which model is not stated beyond this; it depends on the model server, not on Home Generative Agent."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "How to Get Started",
        "content": [
          "**The steps follow the README and the installation guide; PromptQuorum has not run them.**"
        ],
        "numberedItems": [
          {
            "title": "Set up the database",
            "whyItMatters": "Install the PostgreSQL with pgvector app on Home Assistant OS or Supervised, or point the integration at your own PostgreSQL server."
          },
          {
            "title": "Install from HACS and restart",
            "whyItMatters": "Install Home Generative Agent from HACS, restart Home Assistant, then add the integration under Settings → Devices & Services."
          },
          {
            "title": "Add a model provider",
            "whyItMatters": "Click + Model Provider and choose Edge (Ollama or an OpenAI-compatible server) or Cloud (OpenAI, Gemini or Anthropic)."
          },
          {
            "title": "Run Setup",
            "whyItMatters": "Click + Setup and pick Basic, which enables all features with recommended defaults, or Advanced to configure each one."
          },
          {
            "title": "Choose it as the conversation agent",
            "whyItMatters": "Select Home Generative Agent under Settings → Voice assistants, then expose the entities you want it to see."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Confirmed by the Sources",
        "content": [
          "**Every item below comes from the README or the documentation; none has been tested here.**"
        ],
        "items": [
          "**Conversation.** Natural-language control and status questions for exposed entities, with streaming replies.",
          "**Automations.** Writes and registers automations from chat; entity IDs and service calls are checked against Home Assistant first, and an optional Critical Action PIN holds automations that would unlock a door or open a garage.",
          "**Cameras.** Describes camera images and runs motion-triggered analysis; the README names Axis, Ring via ring-mqtt, Reolink and UniFi Protect, plus any camera that exposes a motion entity.",
          "**Sentinel.** Rule-based anomaly detection and a security audit of the Home Assistant setup, with phone alerts and optional language-model triage.",
          "**Memory and tools.** Long-term semantic memory in pgvector, and extra tools such as web search through MCP servers or a Home Assistant LLM API.",
          "**Voice.** Its own speech-to-text and text-to-speech providers for Assist pipelines, using OpenAI or a local server."
        ],
        "note": "The documentation lists interface languages English, Czech, Russian, Turkish and Simplified Chinese. All features are the maker's description."
      },
      "privacy": {
        "id": "privacy",
        "title": "Data Flow and Privacy",
        "content": [
          "**Where your data goes depends on the model provider you choose: the README says Home Generative Agent can run fully locally with Ollama or an OpenAI-compatible server, with cloud providers as the alternative.**",
          "With a cloud provider, your prompts and the camera images you ask it to analyse reach that provider under its own policy. The README adds that Sentinel and the audit tool redact MAC and IP addresses and client hostnames before anything is shown to a language model. Face recognition uses a separate face service, whose storage this review did not examine."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "These are the maker's statements, not audit results. PromptQuorum has not inspected the code or the network traffic."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**Home Assistant users with a spare GPU machine** who want a conversational agent that stays on their network through Ollama.",
          "**People who want automations drafted from plain-language requests** and will review each one in the automation editor.",
          "**Owners of supported cameras** who want questions answered about what a camera sees, using a vision model they host."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Reliability.** How often the agent finds the right entity or writes a correct automation is untested.",
          "**Safety claims.** The Critical Action PIN and the statement that the model never switches anything in Sentinel are the maker's descriptions.",
          "**Local-model quality.** The guide recommends models but publishes no benchmarks for tool use or vision on local hardware.",
          "**Data handling.** The face service and cloud-provider data flows were not inspected."
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
            "App": "[Home Assistant Assist](/power-local-llm/home-assistant-assist-review)",
            "Platforms": "Home Assistant (web, Android, iOS)",
            "Price / license": "Free / Apache-2.0",
            "Key difference": "Built-in voice pipeline; LLM agents are optional add-ons"
          },
          {
            "App": "[nanobot](/power-local-llm/nanobot-review)",
            "Platforms": "Windows, macOS, Linux",
            "Price / license": "Free / MIT",
            "Key difference": "General self-hosted agent, not tied to Home Assistant"
          },
          {
            "App": "[PicoClaw](/power-local-llm/picoclaw-review)",
            "Platforms": "Linux, macOS, Windows, Android",
            "Price / license": "Free / MIT",
            "Key difference": "Small general-purpose agent, not tied to Home Assistant"
          }
        ],
        "note": "Only Home Assistant Assist is in the same smart-home segment; nanobot and PicoClaw are general agents. Confirm each app's current price, license and platforms on its own listing before choosing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "Does Home Generative Agent replace Home Assistant Assist?",
            "a": "No. You select it as the conversation agent inside Assist, and it can add its own speech-to-text and text-to-speech providers to an Assist pipeline."
          },
          {
            "q": "Why does the agent say it cannot find a device?",
            "a": "It only sees entities exposed to Assist and finds them by name and area, so the README advises exposing the entity and giving it a clear name and area."
          },
          {
            "q": "Does it work on Home Assistant Container or Core?",
            "a": "The bundled database app needs Home Assistant OS or Supervised, so on Container or Core the installation guide points you to your own PostgreSQL server with pgvector."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Home Generative Agent is a free, MIT-licensed way to give an existing Home Assistant a tool-using AI agent that can run against a local Ollama server or a cloud model, and it is actively maintained. Against that, setup spans several services, many features depend on optional components such as the face service, and PromptQuorum has not tested reliability, privacy behaviour or local-model quality. It suits Home Assistant users who are comfortable with HACS and a model server; anyone using it for locks or safety automations should check every generated automation themselves."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Home Generative Agent on GitHub](https://github.com/goruck/home-generative-agent) — README, MIT licence and commit history, checked 1 November 2026.",
          "[Installation guide](https://github.com/goruck/home-generative-agent/blob/main/docs/installation.md) — HACS and manual install, optional apps and Ollama models, checked 1 November 2026.",
          "[Configuration guide](https://github.com/goruck/home-generative-agent/blob/main/docs/configuration.md) — model providers, speech, tools and options, checked 1 November 2026.",
          "[Home Generative Agent releases](https://github.com/goruck/home-generative-agent/releases) — version 3.44.10 of 23 October 2026 and its file list, checked 1 November 2026.",
          "[Home Assistant Community thread](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) — the project's announcement and user discussion, checked 1 November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[Home Assistant Assist Review](/power-local-llm/home-assistant-assist-review) — the built-in voice and conversation pipeline.",
          "[nanobot Review](/power-local-llm/nanobot-review) — a self-hosted personal AI agent framework with memory and MCP tools.",
          "[PicoClaw Review](/power-local-llm/picoclaw-review) — a small open-source agent for low-cost boards.",
          "[Local LLM Software Directory](/directory) — the full catalogue of local AI tools."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Home Generative Agent Review: AI Agent for Home Assistant",
      "description": "Home Generative Agent review: a free, MIT-licensed LangGraph agent integration for Home Assistant with Ollama and cloud model support. Requirements, privacy and what the sources leave unconfirmed.",
      "url": "https://www.promptquorum.com/power-local-llm/home-generative-agent-review",
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
        "audienceType": "Home Assistant users evaluating an open-source LLM agent integration for their smart home"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Home Generative Agent"
        },
        {
          "@type": "Thing",
          "name": "Home Assistant"
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
        "@id": "https://www.promptquorum.com/power-local-llm/home-generative-agent-review"
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
          "name": "Home Generative Agent Review",
          "item": "https://www.promptquorum.com/power-local-llm/home-generative-agent-review"
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
    "heroImage": "/images/home-generative-agent-review-hero-de.webp",
    "title": "Home Generative Agent im Test: KI-Agent für Home Assistant",
    "seoTitle": "Home Generative Agent im Test: KI-Agent für Home Assistant",
    "intro": "Home Generative Agent (HGA) ist eine kostenlose, MIT-lizenzierte Custom-Integration für Home Assistant, die der Assist-Oberfläche einen KI-Agenten mit Werkzeugen hinzufügt. Er basiert auf LangGraph, steuert die Geräte, die Sie für ihn freigeben, schreibt Automatisierungen aus Anfragen in Alltagssprache, beschreibt Kamerabilder und führt ein Langzeitgedächtnis. Er nutzt den Modellanbieter Ihrer Wahl, vom lokalen Ollama-Server bis zu OpenAI, Gemini oder Anthropic. Dieser Test stützt sich auf das [GitHub-Repository](https://github.com/goruck/home-generative-agent) des Projekts, den [Home-Assistant-Community-Thread](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) und die GitHub Releases; PromptQuorum hat ihn weder installiert noch ausgeführt. Er steht im [PromptQuorum-Verzeichnis](/de/directory).",
    "metaDescription": "Home Generative Agent im Test: kostenloser LangGraph-Agent (MIT) für Home Assistant, mit Ollama oder Cloud-Modellen. Einrichtung, Datenschutz, Offenes.",
    "twitterDescription": "Home Generative Agent im Test: ein quelloffener LLM-Agent für Home Assistant, der Entitäten steuert, Automatisierungen schreibt und Kameras analysiert, mit Ollama oder Cloud-Modellen. Was die Quellen bestätigen und was nicht.",
    "audience": "Home-Assistant-Nutzer, die einen KI-Agenten für ihr Smart Home suchen und wissen möchten, was Home Generative Agent kann, was er braucht und was die Quellen offenlassen.",
    "readTime": "6 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Home Generative Agent Test",
    "targetKeywords": [
      "home generative agent test",
      "home generative agent",
      "home assistant ki agent",
      "home assistant langgraph",
      "home assistant ollama agent",
      "home assistant llm automatisierungen",
      "hacs home generative agent"
    ],
    "current_models_mentioned": [
      "Qwen",
      "gpt-oss"
    ],
    "current_hardware_mentioned": [
      "GPU"
    ],
    "leadAnswerBlock": "**Home Generative Agent (Version 3.44.10, veröffentlicht am 23. Oktober 2026) ist eine kostenlose, MIT-lizenzierte Home-Assistant-Integration, die Assist um einen LLM-Agenten erweitert und mit einem lokalen Ollama-Server oder Cloud-Modellen arbeitet.** Sie braucht ein laufendes Home Assistant, eine PostgreSQL-Datenbank mit pgvector und mindestens einen Modellanbieter.",
    "quickAnswerTop": {
      "de": {
        "question": "Kann Home Generative Agent komplett lokal laufen?",
        "answer": "Ja, laut README: Mit Ollama oder einem OpenAI-kompatiblen Server in Ihrem eigenen Netzwerk als Modellanbieter muss keine Information Ihr Zuhause verlassen. OpenAI, Gemini und Anthropic sind die Cloud-Alternativen.",
        "bullets": [
          "Der Agent sieht nur Entitäten, die Sie für Assist freigegeben haben.",
          "Er kann Home-Assistant-Automatisierungen aus einer Chat-Anfrage schreiben und registrieren.",
          "Die Kameraanalyse braucht ein Vision-Modell, die Gesichtserkennung zusätzlich einen externen Face-Dienst.",
          "Erforderlich ist Home Assistant 2026.8.0 oder neuer."
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
        "label": "Was ist Home Generative Agent?",
        "anchor": "what-is-home-generative-agent"
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
        "label": "Für wen er geeignet ist",
        "anchor": "who-should-use"
      },
      {
        "label": "Was wir nicht prüfen konnten",
        "anchor": "who-should-not-use"
      },
      {
        "label": "Konkurrenz und Alternativen",
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
        "label": "Weiterführende Lektüre",
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
            "text": "Home Generative Agent ist ein quelloffener KI-Agent für Home Assistant, mit dem Sie mit Ihrem Zuhause sprechen, Automatisierungen in Alltagssprache erstellen und Fragen zu Kamerabildern stellen können."
          },
          {
            "type": "plain-terms",
            "text": "Sie installieren ihn über HACS in Ihr bestehendes Home Assistant, verbinden ein Sprachmodell wie einen lokalen Ollama-Server und wählen ihn dann in Assist als Konversationsagenten aus."
          }
        ],
        "items": [
          "Pflege: Die aktuelle stabile Version 3.44.10 stammt vom 23. Oktober 2026, der Hauptzweig wurde am 1. November 2026 aktualisiert; eine Warnung vor einem veralteten Projekt entfällt daher.",
          "Modell: Keines ist enthalten; unterstützt werden Ollama, OpenAI-kompatible Server, OpenAI, Gemini und Anthropic.",
          "Kosten: Die Software ist unter der MIT-Lizenz kostenlos; nur ein Cloud-Anbieter, falls Sie einen wählen, berechnet Ihnen etwas.",
          "Einrichtung: mehrere Schritte über eine Datenbank-App, HACS und einen Modellanbieter statt eines einzelnen Installers.",
          "Hersteller: ein einzelner Entwickler (GitHub-Nutzer goruck), kein Unternehmen."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Dieser Test stützt sich auf das GitHub-Repository, seine Dokumentation und den Home-Assistant-Community-Thread, geprüft am 1. November 2026. PromptQuorum hat Home Generative Agent weder installiert noch ausgeführt oder gemessen; Zuverlässigkeit, Geschwindigkeit und die Qualität der geschriebenen Automatisierungen sind daher nicht bewertet."
          }
        ]
      },
      "overview": {
        "id": "what-is-home-generative-agent",
        "title": "Was ist Home Generative Agent?",
        "content": [
          "**Home Generative Agent ist ein KI-Agent für Home Assistant, der in Ihrem Zuhause handelt, statt Ihre Worte nur an ein Sprachmodell weiterzureichen.** Laut README basiert er auf LangGraph und nutzt Werkzeuge, um Entitäten zu steuern, den Verlauf abzufragen, Kameras zu beobachten und echte Automatisierungen zu schreiben.",
          "Es ist eine Custom-Integration für Home Assistant, die über HACS installiert wird, keine eigenständige App. Die Sentinel-Engine überwacht mit festen Regeln Sicherheitsprobleme, und laut README berät das Sprachmodell dort nur und schaltet nie etwas; das ist die Darstellung des Entwicklers und wurde nicht geprüft. Der erste Beitrag des Community-Threads nennt noch eine ältere Version als GitHub, deshalb folgt dieser Test GitHub."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Bezugsquelle",
        "content": [
          "**Home Generative Agent wird über HACS in ein bestehendes Home Assistant installiert; einen eigenständigen Download gibt es nicht.**"
        ],
        "columns": [
          "Option",
          "Bezug"
        ],
        "rows": [
          {
            "Option": "HACS (empfohlen)",
            "Bezug": "In HACS suchen, das den Agenten in seinem Standard-Repository führt, oder die Schaltfläche „Open in HACS“ im [README](https://github.com/goruck/home-generative-agent) nutzen; danach Home Assistant neu starten und die Integration hinzufügen"
          },
          {
            "Option": "Manuelle Installation",
            "Bezug": "home_generative_agent.zip von den [GitHub Releases](https://github.com/goruck/home-generative-agent/releases) laden und wie in der Installationsanleitung beschrieben in Home Assistant kopieren"
          },
          {
            "Option": "Datenbank",
            "Bezug": "Die [App PostgreSQL mit pgvector](https://github.com/goruck/addon-postgres-pgvector) unter Home Assistant OS oder Supervised oder ein eigener PostgreSQL-Server"
          },
          {
            "Option": "Website",
            "Bezug": "[Home-Assistant-Community-Thread](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923), die Projekt-Homepage auf GitHub"
          },
          {
            "Option": "Dokumentation",
            "Bezug": "[Anleitungen im Repository](https://github.com/goruck/home-generative-agent/tree/main/docs): Installation, Konfiguration, Sentinel, Kameras und Architektur"
          },
          {
            "Option": "Datenschutzerklärung",
            "Bezug": "Im Repository und im Community-Thread nicht gefunden"
          },
          {
            "Option": "Quellcode",
            "Bezug": "[github.com/goruck/home-generative-agent](https://github.com/goruck/home-generative-agent), MIT-Lizenz"
          }
        ],
        "note": "Geprüfte Version: 3.44.10, laut GitHub Releases am 23. Oktober 2026 veröffentlicht; eine Vorabversion, 3.45.0-beta.5, existiert ebenfalls und wurde nicht geprüft. Die Home-Assistant-Schritte erfolgen in dessen Weboberfläche, doch das Laden von Ollama-Modellen läuft im Terminal, und die gesamte Dienstkette erfordert mehr Aufwand als eine einzelne Installation."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Anforderungen",
        "content": [
          "**Erforderlich sind Home Assistant 2026.8.0 oder neuer, HACS, eine PostgreSQL-Datenbank mit pgvector und mindestens ein Modellanbieter.**"
        ],
        "columns": [
          "Punkt",
          "Was die Quellen sagen"
        ],
        "rows": [
          {
            "Punkt": "Home Assistant",
            "Was die Quellen sagen": "2026.8.0 ist das Minimum (ab HGA 3.43.3); 2026.9 und 2026.10 werden als unterstützt genannt"
          },
          {
            "Punkt": "Datenbank",
            "Was die Quellen sagen": "PostgreSQL mit pgvector; ohne sie funktioniert nur der Arbeitsspeicher als Ablage, sodass Langzeitgedächtnis, Gesichtserkennung und der Baseline-Anomaliedetektor nicht verfügbar sind"
          },
          {
            "Punkt": "Modellanbieter",
            "Was die Quellen sagen": "OpenAI, Gemini, Anthropic, Ollama oder ein beliebiger OpenAI-kompatibler Server"
          },
          {
            "Punkt": "Lokale Modelle (optional)",
            "Was die Quellen sagen": "Die Anleitung nennt Ollama-Modelle wie gpt-oss, qwen3:8b und qwen3-vl:8b; Mindestwerte für RAM oder VRAM gibt sie nicht an"
          },
          {
            "Punkt": "Gesichtserkennung (optional)",
            "Was die Quellen sagen": "Ein externer Face-Dienst, den Sie separat einrichten"
          },
          {
            "Punkt": "Sprache (optional)",
            "Was die Quellen sagen": "Die Sprach-APIs von OpenAI oder ein lokaler OpenAI-kompatibler Server wie [Speaches](https://speaches.ai/); für das große faster-whisper-Modell werden etwa 2 GB VRAM empfohlen"
          }
        ],
        "note": "Welche Hardware zu welchem Modell passt, wird darüber hinaus nicht genannt; das hängt vom Modellserver ab, nicht von Home Generative Agent."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "So gelingt der Einstieg",
        "content": [
          "**Die Schritte folgen dem README und der Installationsanleitung; PromptQuorum hat sie nicht ausgeführt.**"
        ],
        "numberedItems": [
          {
            "title": "Datenbank einrichten",
            "whyItMatters": "Installieren Sie die App PostgreSQL mit pgvector unter Home Assistant OS oder Supervised oder richten Sie die Integration auf Ihren eigenen PostgreSQL-Server aus."
          },
          {
            "title": "Über HACS installieren und neu starten",
            "whyItMatters": "Installieren Sie Home Generative Agent über HACS, starten Sie Home Assistant neu und fügen Sie die Integration unter Einstellungen → Geräte & Dienste hinzu."
          },
          {
            "title": "Modellanbieter hinzufügen",
            "whyItMatters": "Klicken Sie auf + Model Provider und wählen Sie Edge (Ollama oder ein OpenAI-kompatibler Server) oder Cloud (OpenAI, Gemini oder Anthropic)."
          },
          {
            "title": "Setup ausführen",
            "whyItMatters": "Klicken Sie auf + Setup und wählen Sie Basic, das alle Funktionen mit empfohlenen Standardwerten aktiviert, oder Advanced, um jede einzeln zu konfigurieren."
          },
          {
            "title": "Als Konversationsagent auswählen",
            "whyItMatters": "Wählen Sie Home Generative Agent unter Einstellungen → Sprachassistenten aus und geben Sie dann die Entitäten frei, die er sehen soll."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Von den Quellen bestätigte Funktionen",
        "content": [
          "**Alle folgenden Punkte stammen aus dem README oder der Dokumentation; keiner wurde hier getestet.**"
        ],
        "items": [
          "**Konversation.** Steuerung und Statusfragen in natürlicher Sprache für freigegebene Entitäten, mit gestreamten Antworten.",
          "**Automatisierungen.** Schreibt und registriert Automatisierungen aus dem Chat; Entitäts-IDs und Dienstaufrufe werden zuvor gegen Home Assistant geprüft, und eine optionale Critical-Action-PIN hält Automatisierungen zurück, die eine Tür entriegeln oder ein Garagentor öffnen würden.",
          "**Kameras.** Beschreibt Kamerabilder und führt bewegungsgesteuerte Analysen aus; das README nennt Axis, Ring über ring-mqtt, Reolink und UniFi Protect sowie jede Kamera mit einer Bewegungs-Entität.",
          "**Sentinel.** Regelbasierte Anomalieerkennung und ein Sicherheits-Audit der Home-Assistant-Installation, mit Handy-Warnungen und optionaler Triage durch das Sprachmodell.",
          "**Gedächtnis und Werkzeuge.** Semantisches Langzeitgedächtnis in pgvector sowie zusätzliche Werkzeuge wie Websuche über MCP-Server oder eine Home-Assistant-LLM-API.",
          "**Sprache.** Eigene Speech-to-Text- und Text-to-Speech-Anbieter für Assist-Pipelines, mit OpenAI oder einem lokalen Server."
        ],
        "note": "Die Dokumentation nennt die Oberflächensprachen Englisch, Tschechisch, Russisch, Türkisch und vereinfachtes Chinesisch. Alle Funktionen sind die Darstellung des Entwicklers."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenfluss und Datenschutz",
        "content": [
          "**Wohin Ihre Daten gehen, hängt vom gewählten Modellanbieter ab: Laut README kann Home Generative Agent mit Ollama oder einem OpenAI-kompatiblen Server komplett lokal laufen, Cloud-Anbieter sind die Alternative.**",
          "Bei einem Cloud-Anbieter gelangen Ihre Prompts und die Kamerabilder, die Sie analysieren lassen, nach dessen eigenen Richtlinien zu diesem Anbieter. Das README ergänzt, dass Sentinel und das Audit-Werkzeug MAC- und IP-Adressen sowie Client-Hostnamen schwärzen, bevor einem Sprachmodell etwas gezeigt wird. Die Gesichtserkennung nutzt einen separaten Face-Dienst, dessen Speicherung dieser Test nicht untersucht hat."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Das sind Aussagen des Entwicklers, keine Audit-Ergebnisse. PromptQuorum hat weder den Code noch den Netzwerkverkehr geprüft."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen er geeignet ist",
        "items": [
          "**Home-Assistant-Nutzer mit einem freien GPU-Rechner**, die einen Konversationsagenten über Ollama im eigenen Netzwerk halten möchten.",
          "**Menschen, die sich Automatisierungen aus Anfragen in Alltagssprache entwerfen lassen** und jede im Automatisierungseditor prüfen.",
          "**Besitzer unterstützter Kameras**, die Fragen dazu stellen möchten, was eine Kamera sieht, mit einem selbst betriebenen Vision-Modell."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht prüfen konnten",
        "items": [
          "**Zuverlässigkeit.** Wie oft der Agent die richtige Entität findet oder eine korrekte Automatisierung schreibt, ist ungetestet.",
          "**Sicherheitsaussagen.** Die Critical-Action-PIN und die Aussage, dass das Modell in Sentinel nie etwas schaltet, sind Darstellungen des Entwicklers.",
          "**Qualität lokaler Modelle.** Die Anleitung empfiehlt Modelle, veröffentlicht aber keine Benchmarks zu Werkzeugnutzung oder Bildverstehen auf lokaler Hardware.",
          "**Datenverarbeitung.** Der Face-Dienst und die Datenflüsse zu Cloud-Anbietern wurden nicht geprüft."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Konkurrenz und Alternativen",
        "columns": [
          "App",
          "Plattformen",
          "Preis / Lizenz",
          "Hauptunterschied"
        ],
        "rows": [
          {
            "App": "[Home Assistant Assist](/de/power-local-llm/home-assistant-assist-review)",
            "Plattformen": "Home Assistant (Web, Android, iOS)",
            "Preis / Lizenz": "Kostenlos / Apache-2.0",
            "Hauptunterschied": "Integrierte Sprach-Pipeline; LLM-Agenten sind optionale Ergänzungen"
          },
          {
            "App": "[nanobot](/de/power-local-llm/nanobot-review)",
            "Plattformen": "Windows, macOS, Linux",
            "Preis / Lizenz": "Kostenlos / MIT",
            "Hauptunterschied": "Allgemeiner selbst gehosteter Agent, nicht an Home Assistant gebunden"
          },
          {
            "App": "[PicoClaw](/de/power-local-llm/picoclaw-review)",
            "Plattformen": "Linux, macOS, Windows, Android",
            "Preis / Lizenz": "Kostenlos / MIT",
            "Hauptunterschied": "Kleiner Allzweck-Agent, nicht an Home Assistant gebunden"
          }
        ],
        "note": "Nur Home Assistant Assist liegt im selben Smart-Home-Segment; nanobot und PicoClaw sind allgemeine Agenten. Prüfen Sie Preis, Lizenz und Plattformen jeder App vor der Wahl auf deren eigener Seite."
      },
      "faq": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Ersetzt Home Generative Agent Home Assistant Assist?",
            "a": "Nein. Sie wählen ihn in Assist als Konversationsagenten aus, und er kann einer Assist-Pipeline eigene Speech-to-Text- und Text-to-Speech-Anbieter hinzufügen."
          },
          {
            "q": "Warum sagt der Agent, er finde ein Gerät nicht?",
            "a": "Er sieht nur für Assist freigegebene Entitäten und findet sie über Name und Bereich; das README rät daher, die Entität freizugeben und ihr einen klaren Namen und Bereich zu geben."
          },
          {
            "q": "Läuft er unter Home Assistant Container oder Core?",
            "a": "Die mitgelieferte Datenbank-App braucht Home Assistant OS oder Supervised; unter Container oder Core verweist die Installationsanleitung daher auf einen eigenen PostgreSQL-Server mit pgvector."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "Home Generative Agent ist ein kostenloser, MIT-lizenzierter Weg, einem bestehenden Home Assistant einen KI-Agenten mit Werkzeugen zu geben, der mit einem lokalen Ollama-Server oder einem Cloud-Modell läuft, und er wird aktiv gepflegt. Dagegen erstreckt sich die Einrichtung über mehrere Dienste, viele Funktionen hängen von optionalen Komponenten wie dem Face-Dienst ab, und PromptQuorum hat Zuverlässigkeit, Datenschutzverhalten und die Qualität lokaler Modelle nicht getestet. Er eignet sich für Home-Assistant-Nutzer, die mit HACS und einem Modellserver vertraut sind; wer ihn für Schlösser oder Sicherheitsautomatisierungen einsetzt, sollte jede erzeugte Automatisierung selbst prüfen."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[Home Generative Agent auf GitHub](https://github.com/goruck/home-generative-agent) — README, MIT-Lizenz und Commit-Verlauf, geprüft am 1. November 2026.",
          "[Installationsanleitung](https://github.com/goruck/home-generative-agent/blob/main/docs/installation.md) — HACS- und manuelle Installation, optionale Apps und Ollama-Modelle, geprüft am 1. November 2026.",
          "[Konfigurationsanleitung](https://github.com/goruck/home-generative-agent/blob/main/docs/configuration.md) — Modellanbieter, Sprache, Werkzeuge und Optionen, geprüft am 1. November 2026.",
          "[Releases von Home Generative Agent](https://github.com/goruck/home-generative-agent/releases) — Version 3.44.10 vom 23. Oktober 2026 und ihre Dateiliste, geprüft am 1. November 2026.",
          "[Home-Assistant-Community-Thread](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) — Ankündigung des Projekts und Diskussion der Nutzer, geprüft am 1. November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Lektüre",
        "items": [
          "[Home Assistant Assist im Test](/de/power-local-llm/home-assistant-assist-review) — die integrierte Sprach- und Konversations-Pipeline.",
          "[nanobot im Test](/de/power-local-llm/nanobot-review) — ein selbst gehostetes Framework für persönliche KI-Agenten mit Gedächtnis und MCP-Werkzeugen.",
          "[PicoClaw im Test](/de/power-local-llm/picoclaw-review) — ein kleiner Open-Source-Agent für günstige Boards.",
          "[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge."
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
    "heroImage": "/images/home-generative-agent-review-hero-es.webp",
    "title": "Reseña de Home Generative Agent: agente de IA para Home Assistant",
    "seoTitle": "Home Generative Agent: reseña del agente de IA para HA",
    "intro": "Home Generative Agent (HGA) es una integración personalizada de Home Assistant, gratuita y con licencia MIT, que añade a la interfaz de conversación Assist un agente de IA que usa herramientas. Está construido sobre LangGraph y puede controlar los dispositivos que le expongas, escribir automatizaciones a partir de peticiones en lenguaje natural, describir imágenes de cámaras y mantener una memoria a largo plazo. Usa el proveedor de modelos que elijas, desde un servidor Ollama local hasta OpenAI, Gemini o Anthropic. Esta reseña se basa en el [repositorio de GitHub](https://github.com/goruck/home-generative-agent) del proyecto, su [hilo en la comunidad de Home Assistant](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) y las GitHub Releases; PromptQuorum no lo ha instalado ni ejecutado. Figura en el [directorio de PromptQuorum](/es/directory).",
    "metaDescription": "Reseña de Home Generative Agent: agente LangGraph gratuito (MIT) para Home Assistant con Ollama o la nube. Instalación, privacidad y lo no probado.",
    "twitterDescription": "Reseña de Home Generative Agent: un agente LLM de código abierto para Home Assistant que controla entidades, escribe automatizaciones y analiza cámaras, con Ollama o modelos en la nube. Qué confirman las fuentes y qué no.",
    "audience": "Usuarios de Home Assistant que quieren un agente de IA conversacional para su casa inteligente y necesitan saber qué hace Home Generative Agent, qué requiere y qué dejan abierto las fuentes.",
    "readTime": "6 min de lectura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "reseña Home Generative Agent",
    "targetKeywords": [
      "reseña home generative agent",
      "home generative agent",
      "agente ia home assistant",
      "home assistant langgraph",
      "agente ollama home assistant",
      "automatizaciones llm home assistant",
      "hacs home generative agent"
    ],
    "current_models_mentioned": [
      "Qwen",
      "gpt-oss"
    ],
    "current_hardware_mentioned": [
      "GPU"
    ],
    "leadAnswerBlock": "**Home Generative Agent (versión 3.44.10, publicada el 23 de octubre de 2026) es una integración de Home Assistant gratuita y con licencia MIT que añade un agente LLM a Assist y funciona con un servidor Ollama local o con modelos en la nube.** Necesita un Home Assistant en marcha, una base de datos PostgreSQL con pgvector y al menos un proveedor de modelos.",
    "quickAnswerTop": {
      "es": {
        "question": "¿Puede Home Generative Agent funcionar totalmente en local?",
        "answer": "Sí, según el README: con Ollama o un servidor compatible con OpenAI en tu propia red como proveedor de modelos, no hace falta que ningún dato salga de tu casa. OpenAI, Gemini y Anthropic son las alternativas en la nube.",
        "bullets": [
          "El agente solo ve las entidades que hayas expuesto a Assist.",
          "Puede escribir y registrar automatizaciones de Home Assistant a partir de una petición en el chat.",
          "El análisis de cámaras necesita un modelo de visión, y el reconocimiento facial requiere además un servicio de caras externo.",
          "Se necesita Home Assistant 2026.8.0 o posterior."
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
        "label": "¿Qué es Home Generative Agent?",
        "anchor": "what-is-home-generative-agent"
      },
      {
        "label": "Cómo conseguirlo",
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
        "label": "Quién debería usarlo",
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
            "text": "Home Generative Agent es un agente de IA de código abierto para Home Assistant que te permite hablar con tu casa, crear automatizaciones en lenguaje natural y preguntar por imágenes de cámaras."
          },
          {
            "type": "plain-terms",
            "text": "Lo instalas desde HACS en tu Home Assistant actual, conectas un modelo de lenguaje como un servidor Ollama local y lo eliges como agente de conversación en Assist."
          }
        ],
        "items": [
          "Mantenimiento: la última versión estable, la 3.44.10, es del 23 de octubre de 2026 y la rama principal se actualizó el 1 de noviembre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.",
          "Modelo: no incluye ninguno; admite Ollama, servidores compatibles con OpenAI, OpenAI, Gemini y Anthropic.",
          "Coste: el software es gratuito con licencia MIT; solo te cobra un proveedor en la nube, si eliges uno.",
          "Instalación: varios pasos entre una app de base de datos, HACS y un proveedor de modelos, en lugar de un único instalador.",
          "Autoría: un solo desarrollador (usuario de GitHub goruck), no una empresa."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta reseña se basa en el repositorio de GitHub, su documentación y el hilo de la comunidad de Home Assistant, consultados el 1 de noviembre de 2026. PromptQuorum no ha instalado, ejecutado ni medido Home Generative Agent, así que no se evalúan la fiabilidad, la velocidad ni la calidad de las automatizaciones que escribe."
          }
        ]
      },
      "overview": {
        "id": "what-is-home-generative-agent",
        "title": "¿Qué es Home Generative Agent?",
        "content": [
          "**Home Generative Agent es un agente de IA para Home Assistant que actúa sobre tu casa en lugar de limitarse a pasar tus palabras a un modelo de lenguaje.** Según el README, está construido sobre LangGraph y usa herramientas para controlar entidades, consultar el historial, vigilar cámaras y escribir automatizaciones reales.",
          "Es una integración personalizada de Home Assistant que se instala con HACS, no una app independiente. Su motor Sentinel vigila problemas de seguridad con reglas fijas, y el README dice que allí el modelo de lenguaje solo aconseja y nunca acciona nada; es la descripción del desarrollador y no se ha comprobado. La primera publicación del hilo de la comunidad aún menciona una versión más antigua que GitHub, por lo que esta reseña sigue a GitHub."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo conseguirlo",
        "content": [
          "**Home Generative Agent se instala con HACS en un Home Assistant existente; no hay descarga independiente.**"
        ],
        "columns": [
          "Opción",
          "Cómo conseguirlo"
        ],
        "rows": [
          {
            "Opción": "HACS (recomendado)",
            "Cómo conseguirlo": "Búscalo en HACS, que lo incluye en su repositorio predeterminado, o usa el botón «Open in HACS» del [README](https://github.com/goruck/home-generative-agent); después reinicia Home Assistant y añade la integración"
          },
          {
            "Opción": "Instalación manual",
            "Cómo conseguirlo": "Descarga home_generative_agent.zip desde las [GitHub Releases](https://github.com/goruck/home-generative-agent/releases) y cópialo en Home Assistant como describe la guía de instalación"
          },
          {
            "Opción": "Base de datos",
            "Cómo conseguirlo": "La [app PostgreSQL con pgvector](https://github.com/goruck/addon-postgres-pgvector) en Home Assistant OS o Supervised, o tu propio servidor PostgreSQL"
          },
          {
            "Opción": "Sitio web",
            "Cómo conseguirlo": "[Hilo de la comunidad de Home Assistant](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923), la página principal del proyecto en GitHub"
          },
          {
            "Opción": "Documentación",
            "Cómo conseguirlo": "[Guías del repositorio](https://github.com/goruck/home-generative-agent/tree/main/docs): instalación, configuración, Sentinel, cámaras y arquitectura"
          },
          {
            "Opción": "Política de privacidad",
            "Cómo conseguirlo": "No se encontró en el repositorio ni en el hilo de la comunidad"
          },
          {
            "Opción": "Código fuente",
            "Cómo conseguirlo": "[github.com/goruck/home-generative-agent](https://github.com/goruck/home-generative-agent), licencia MIT"
          }
        ],
        "note": "Versión revisada: 3.44.10, publicada el 23 de octubre de 2026 según GitHub Releases; también existe una versión preliminar, la 3.45.0-beta.5, que no se revisó. Los pasos de Home Assistant se hacen en su interfaz web, pero descargar modelos de Ollama requiere un terminal, y toda la cadena de servicios supone más esfuerzo que una instalación única."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**Se necesitan Home Assistant 2026.8.0 o posterior, HACS, una base de datos PostgreSQL con pgvector y al menos un proveedor de modelos.**"
        ],
        "columns": [
          "Elemento",
          "Qué dicen las fuentes"
        ],
        "rows": [
          {
            "Elemento": "Home Assistant",
            "Qué dicen las fuentes": "2026.8.0 es el mínimo (desde HGA 3.43.3); 2026.9 y 2026.10 figuran como compatibles"
          },
          {
            "Elemento": "Base de datos",
            "Qué dicen las fuentes": "PostgreSQL con pgvector; sin ella solo funciona el almacenamiento en memoria, por lo que no hay memoria a largo plazo, reconocimiento facial ni detector de anomalías de referencia"
          },
          {
            "Elemento": "Proveedor de modelos",
            "Qué dicen las fuentes": "OpenAI, Gemini, Anthropic, Ollama o cualquier servidor compatible con OpenAI"
          },
          {
            "Elemento": "Modelos locales (opcional)",
            "Qué dicen las fuentes": "La guía enumera modelos de Ollama como gpt-oss, qwen3:8b y qwen3-vl:8b; no indica un mínimo de RAM ni de VRAM"
          },
          {
            "Elemento": "Reconocimiento facial (opcional)",
            "Qué dicen las fuentes": "Un servicio de caras externo que configuras por separado"
          },
          {
            "Elemento": "Voz (opcional)",
            "Qué dicen las fuentes": "Las API de voz de OpenAI o un servidor local compatible con OpenAI como [Speaches](https://speaches.ai/); se recomiendan unos 2 GB de VRAM para el modelo grande de faster-whisper"
          }
        ],
        "note": "No se indica qué hardware conviene a cada modelo más allá de esto; depende del servidor de modelos, no de Home Generative Agent."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Cómo empezar",
        "content": [
          "**Los pasos siguen el README y la guía de instalación; PromptQuorum no los ha ejecutado.**"
        ],
        "numberedItems": [
          {
            "title": "Configura la base de datos",
            "whyItMatters": "Instala la app PostgreSQL con pgvector en Home Assistant OS o Supervised, o apunta la integración a tu propio servidor PostgreSQL."
          },
          {
            "title": "Instala desde HACS y reinicia",
            "whyItMatters": "Instala Home Generative Agent desde HACS, reinicia Home Assistant y añade la integración en Ajustes → Dispositivos y servicios."
          },
          {
            "title": "Añade un proveedor de modelos",
            "whyItMatters": "Pulsa + Model Provider y elige Edge (Ollama o un servidor compatible con OpenAI) o Cloud (OpenAI, Gemini o Anthropic)."
          },
          {
            "title": "Ejecuta Setup",
            "whyItMatters": "Pulsa + Setup y elige Basic, que activa todas las funciones con valores recomendados, o Advanced para configurar cada una."
          },
          {
            "title": "Elígelo como agente de conversación",
            "whyItMatters": "Selecciona Home Generative Agent en Ajustes → Asistentes de voz y luego expón las entidades que quieras que vea."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones confirmadas por las fuentes",
        "content": [
          "**Todo lo siguiente procede del README o de la documentación; nada se ha probado aquí.**"
        ],
        "items": [
          "**Conversación.** Control y preguntas de estado en lenguaje natural sobre las entidades expuestas, con respuestas en streaming.",
          "**Automatizaciones.** Escribe y registra automatizaciones desde el chat; los ID de entidad y las llamadas a servicios se comprueban antes contra Home Assistant, y un PIN opcional de acciones críticas retiene las automatizaciones que desbloquearían una puerta o abrirían un garaje.",
          "**Cámaras.** Describe imágenes de cámaras y ejecuta análisis activados por movimiento; el README nombra Axis, Ring mediante ring-mqtt, Reolink y UniFi Protect, además de cualquier cámara que exponga una entidad de movimiento.",
          "**Sentinel.** Detección de anomalías basada en reglas y una auditoría de seguridad de la instalación de Home Assistant, con alertas al móvil y triaje opcional con el modelo de lenguaje.",
          "**Memoria y herramientas.** Memoria semántica a largo plazo en pgvector y herramientas adicionales, como la búsqueda web, mediante servidores MCP o una API LLM de Home Assistant.",
          "**Voz.** Proveedores propios de voz a texto y de texto a voz para pipelines de Assist, con OpenAI o un servidor local."
        ],
        "note": "La documentación enumera los idiomas de interfaz inglés, checo, ruso, turco y chino simplificado. Todas las funciones son la descripción del desarrollador."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flujo de datos y privacidad",
        "content": [
          "**Adónde van tus datos depende del proveedor de modelos que elijas: el README dice que Home Generative Agent puede funcionar totalmente en local con Ollama o un servidor compatible con OpenAI, y que los proveedores en la nube son la alternativa.**",
          "Con un proveedor en la nube, tus prompts y las imágenes de cámara que le pidas analizar llegan a ese proveedor bajo su propia política. El README añade que Sentinel y la herramienta de auditoría ocultan las direcciones MAC e IP y los nombres de host de los clientes antes de mostrar nada a un modelo de lenguaje. El reconocimiento facial usa un servicio de caras aparte, cuyo almacenamiento esta reseña no examinó."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Son afirmaciones del desarrollador, no resultados de una auditoría. PromptQuorum no ha inspeccionado el código ni el tráfico de red."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Quién debería usarlo",
        "items": [
          "**Usuarios de Home Assistant con un equipo con GPU libre** que quieren un agente conversacional que se quede en su red mediante Ollama.",
          "**Quienes quieren que les redacten automatizaciones a partir de peticiones en lenguaje natural** y revisarán cada una en el editor de automatizaciones.",
          "**Propietarios de cámaras compatibles** que quieren preguntar qué ve una cámara, con un modelo de visión alojado por ellos."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Fiabilidad.** No se ha probado con qué frecuencia el agente encuentra la entidad correcta o escribe una automatización correcta.",
          "**Afirmaciones de seguridad.** El PIN de acciones críticas y la afirmación de que el modelo nunca acciona nada en Sentinel son descripciones del desarrollador.",
          "**Calidad de los modelos locales.** La guía recomienda modelos, pero no publica pruebas de rendimiento de uso de herramientas ni de visión en hardware local.",
          "**Tratamiento de datos.** No se inspeccionaron el servicio de caras ni los flujos de datos hacia los proveedores en la nube."
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
            "App": "[Home Assistant Assist](/es/power-local-llm/home-assistant-assist-review)",
            "Plataformas": "Home Assistant (web, Android, iOS)",
            "Precio / licencia": "Gratis / Apache-2.0",
            "Diferencia clave": "Pipeline de voz integrado; los agentes LLM son complementos opcionales"
          },
          {
            "App": "[nanobot](/es/power-local-llm/nanobot-review)",
            "Plataformas": "Windows, macOS, Linux",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "Agente general autoalojado, sin vínculo con Home Assistant"
          },
          {
            "App": "[PicoClaw](/es/power-local-llm/picoclaw-review)",
            "Plataformas": "Linux, macOS, Windows, Android",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "Agente pequeño de uso general, sin vínculo con Home Assistant"
          }
        ],
        "note": "Solo Home Assistant Assist está en el mismo segmento de hogar inteligente; nanobot y PicoClaw son agentes generales. Confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha antes de elegir."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿Home Generative Agent sustituye a Home Assistant Assist?",
            "a": "No. Lo seleccionas como agente de conversación dentro de Assist, y puede añadir sus propios proveedores de voz a texto y de texto a voz a un pipeline de Assist."
          },
          {
            "q": "¿Por qué el agente dice que no encuentra un dispositivo?",
            "a": "Solo ve las entidades expuestas a Assist y las encuentra por nombre y área, así que el README aconseja exponer la entidad y darle un nombre y un área claros."
          },
          {
            "q": "¿Funciona en Home Assistant Container o Core?",
            "a": "La app de base de datos incluida necesita Home Assistant OS o Supervised, así que en Container o Core la guía de instalación remite a tu propio servidor PostgreSQL con pgvector."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "Home Generative Agent es una forma gratuita y con licencia MIT de dar a un Home Assistant existente un agente de IA con herramientas que puede funcionar con un servidor Ollama local o un modelo en la nube, y se mantiene de forma activa. En contra, la instalación abarca varios servicios, muchas funciones dependen de componentes opcionales como el servicio de caras, y PromptQuorum no ha probado la fiabilidad, el comportamiento de privacidad ni la calidad de los modelos locales. Encaja con usuarios de Home Assistant cómodos con HACS y un servidor de modelos; quien lo use para cerraduras o automatizaciones de seguridad debería revisar por sí mismo cada automatización generada."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Home Generative Agent en GitHub](https://github.com/goruck/home-generative-agent) — README, licencia MIT e historial de commits, consultados el 1 de noviembre de 2026.",
          "[Guía de instalación](https://github.com/goruck/home-generative-agent/blob/main/docs/installation.md) — instalación con HACS y manual, apps opcionales y modelos de Ollama, consultada el 1 de noviembre de 2026.",
          "[Guía de configuración](https://github.com/goruck/home-generative-agent/blob/main/docs/configuration.md) — proveedores de modelos, voz, herramientas y opciones, consultada el 1 de noviembre de 2026.",
          "[Releases de Home Generative Agent](https://github.com/goruck/home-generative-agent/releases) — versión 3.44.10 del 23 de octubre de 2026 y su lista de archivos, consultadas el 1 de noviembre de 2026.",
          "[Hilo de la comunidad de Home Assistant](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) — anuncio del proyecto y debate de los usuarios, consultado el 1 de noviembre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Reseña de Home Assistant Assist](/es/power-local-llm/home-assistant-assist-review) — el pipeline integrado de voz y conversación.",
          "[Reseña de nanobot](/es/power-local-llm/nanobot-review) — un framework autoalojado de agentes de IA personales con memoria y herramientas MCP.",
          "[Reseña de PicoClaw](/es/power-local-llm/picoclaw-review) — un agente pequeño de código abierto para placas económicas.",
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
    "heroImage": "/images/home-generative-agent-review-hero-fr.webp",
    "title": "Test de Home Generative Agent : agent IA pour Home Assistant",
    "seoTitle": "Home Generative Agent : test de l’agent IA pour HA",
    "intro": "Home Generative Agent (HGA) est une intégration personnalisée de Home Assistant, gratuite et sous licence MIT, qui ajoute à l’interface de conversation Assist un agent IA doté d’outils. Construit sur LangGraph, il peut piloter les appareils que vous lui exposez, écrire des automatisations à partir de demandes en langage courant, décrire des images de caméras et conserver une mémoire à long terme. Il utilise le fournisseur de modèles de votre choix, d’un serveur Ollama local à OpenAI, Gemini ou Anthropic. Ce test s’appuie sur le [dépôt GitHub](https://github.com/goruck/home-generative-agent) du projet, son [fil de la communauté Home Assistant](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) et les GitHub Releases ; PromptQuorum ne l’a ni installé ni exécuté. Il figure dans le [répertoire PromptQuorum](/fr/directory).",
    "metaDescription": "Test de Home Generative Agent : agent LangGraph gratuit (MIT) pour Home Assistant, avec Ollama ou cloud. Installation, vie privée, points non testés.",
    "twitterDescription": "Test de Home Generative Agent : un agent LLM open source pour Home Assistant qui pilote les entités, écrit des automatisations et analyse les caméras, avec Ollama ou des modèles cloud. Ce que les sources confirment et ce qu’elles laissent ouvert.",
    "audience": "Utilisateurs de Home Assistant qui veulent un agent IA conversationnel pour leur maison connectée et doivent savoir ce que fait Home Generative Agent, ce qu’il exige et ce que les sources laissent ouvert.",
    "readTime": "6 min de lecture",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "test Home Generative Agent",
    "targetKeywords": [
      "test home generative agent",
      "home generative agent",
      "agent ia home assistant",
      "home assistant langgraph",
      "agent ollama home assistant",
      "automatisations llm home assistant",
      "hacs home generative agent"
    ],
    "current_models_mentioned": [
      "Qwen",
      "gpt-oss"
    ],
    "current_hardware_mentioned": [
      "GPU"
    ],
    "leadAnswerBlock": "**Home Generative Agent (version 3.44.10, publiée le 23 octobre 2026) est une intégration Home Assistant gratuite sous licence MIT qui ajoute un agent LLM à Assist et fonctionne avec un serveur Ollama local ou des modèles cloud.** Elle exige un Home Assistant en marche, une base PostgreSQL avec pgvector et au moins un fournisseur de modèles.",
    "quickAnswerTop": {
      "fr": {
        "question": "Home Generative Agent peut-il fonctionner entièrement en local ?",
        "answer": "Oui, selon le README : avec Ollama ou un serveur compatible OpenAI sur votre propre réseau comme fournisseur de modèles, aucune donnée n’a besoin de quitter votre domicile. OpenAI, Gemini et Anthropic sont les alternatives cloud.",
        "bullets": [
          "L’agent ne voit que les entités que vous avez exposées à Assist.",
          "Il peut écrire et enregistrer des automatisations Home Assistant à partir d’une demande dans le chat.",
          "L’analyse des caméras exige un modèle de vision, et la reconnaissance faciale un service de visages externe en plus.",
          "Home Assistant 2026.8.0 ou plus récent est requis."
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
        "label": "Qu’est-ce que Home Generative Agent ?",
        "anchor": "what-is-home-generative-agent"
      },
      {
        "label": "Où l’obtenir",
        "anchor": "get-it"
      },
      {
        "label": "Prérequis",
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
        "label": "Flux de données et vie privée",
        "anchor": "privacy"
      },
      {
        "label": "À qui il s’adresse",
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
            "text": "Home Generative Agent est un agent IA open source pour Home Assistant qui permet de parler à sa maison, de créer des automatisations en langage courant et de poser des questions sur les images de caméras."
          },
          {
            "type": "plain-terms",
            "text": "Vous l’installez depuis HACS dans votre Home Assistant existant, vous connectez un modèle de langage comme un serveur Ollama local, puis vous le choisissez comme agent de conversation dans Assist."
          }
        ],
        "items": [
          "Maintenance : la dernière version stable, la 3.44.10, date du 23 octobre 2026 et la branche principale a été mise à jour le 1er novembre 2026 ; aucun avertissement de projet abandonné ne s’applique.",
          "Modèle : aucun n’est fourni ; Ollama, les serveurs compatibles OpenAI, OpenAI, Gemini et Anthropic sont pris en charge.",
          "Coût : le logiciel est gratuit sous licence MIT ; seul un fournisseur cloud, si vous en choisissez un, vous facture.",
          "Installation : plusieurs étapes entre une application de base de données, HACS et un fournisseur de modèles, plutôt qu’un seul installateur.",
          "Auteur : un développeur individuel (utilisateur GitHub goruck), pas une entreprise."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce test s’appuie sur le dépôt GitHub, sa documentation et le fil de la communauté Home Assistant, consultés le 1er novembre 2026. PromptQuorum n’a ni installé, ni exécuté, ni mesuré Home Generative Agent ; la fiabilité, la vitesse et la qualité des automatisations écrites ne sont donc pas évaluées."
          }
        ]
      },
      "overview": {
        "id": "what-is-home-generative-agent",
        "title": "Qu’est-ce que Home Generative Agent ?",
        "content": [
          "**Home Generative Agent est un agent IA pour Home Assistant qui agit sur votre maison au lieu de simplement transmettre vos mots à un modèle de langage.** Selon le README, il repose sur LangGraph et utilise des outils pour piloter les entités, interroger l’historique, surveiller les caméras et écrire de vraies automatisations.",
          "C’est une intégration personnalisée de Home Assistant installée via HACS, pas une application autonome. Son moteur Sentinel surveille les problèmes de sécurité avec des règles fixes, et le README indique que le modèle de langage y conseille seulement et n’actionne jamais rien ; c’est la description du développeur, non vérifiée. Le premier message du fil de la communauté mentionne encore une version plus ancienne que GitHub, ce test suit donc GitHub."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Où l’obtenir",
        "content": [
          "**Home Generative Agent s’installe via HACS dans un Home Assistant existant ; il n’existe pas de téléchargement autonome.**"
        ],
        "columns": [
          "Option",
          "Comment l’obtenir"
        ],
        "rows": [
          {
            "Option": "HACS (recommandé)",
            "Comment l’obtenir": "Recherchez-le dans HACS, qui le propose dans son dépôt par défaut, ou utilisez le bouton « Open in HACS » du [README](https://github.com/goruck/home-generative-agent) ; redémarrez ensuite Home Assistant et ajoutez l’intégration"
          },
          {
            "Option": "Installation manuelle",
            "Comment l’obtenir": "Téléchargez home_generative_agent.zip depuis les [GitHub Releases](https://github.com/goruck/home-generative-agent/releases) et copiez-le dans Home Assistant comme le décrit le guide d’installation"
          },
          {
            "Option": "Base de données",
            "Comment l’obtenir": "L’[application PostgreSQL avec pgvector](https://github.com/goruck/addon-postgres-pgvector) sous Home Assistant OS ou Supervised, ou votre propre serveur PostgreSQL"
          },
          {
            "Option": "Site web",
            "Comment l’obtenir": "[Fil de la communauté Home Assistant](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923), la page d’accueil du projet sur GitHub"
          },
          {
            "Option": "Documentation",
            "Comment l’obtenir": "[Guides du dépôt](https://github.com/goruck/home-generative-agent/tree/main/docs) : installation, configuration, Sentinel, caméras et architecture"
          },
          {
            "Option": "Politique de confidentialité",
            "Comment l’obtenir": "Introuvable dans le dépôt et dans le fil de la communauté"
          },
          {
            "Option": "Code source",
            "Comment l’obtenir": "[github.com/goruck/home-generative-agent](https://github.com/goruck/home-generative-agent), licence MIT"
          }
        ],
        "note": "Version testée : 3.44.10, publiée le 23 octobre 2026 selon GitHub Releases ; une préversion, la 3.45.0-beta.5, existe aussi et n’a pas été examinée. Les étapes côté Home Assistant se font dans son interface web, mais le téléchargement des modèles Ollama passe par un terminal, et l’ensemble de la chaîne de services demande plus d’efforts qu’une installation unique."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Prérequis",
        "content": [
          "**Il faut Home Assistant 2026.8.0 ou plus récent, HACS, une base PostgreSQL avec pgvector et au moins un fournisseur de modèles.**"
        ],
        "columns": [
          "Élément",
          "Ce que disent les sources"
        ],
        "rows": [
          {
            "Élément": "Home Assistant",
            "Ce que disent les sources": "2026.8.0 est le minimum (à partir de HGA 3.43.3) ; 2026.9 et 2026.10 sont indiquées comme prises en charge"
          },
          {
            "Élément": "Base de données",
            "Ce que disent les sources": "PostgreSQL avec pgvector ; sans elle, seul le stockage en mémoire fonctionne, donc ni mémoire à long terme, ni reconnaissance faciale, ni détecteur d’anomalies de référence"
          },
          {
            "Élément": "Fournisseur de modèles",
            "Ce que disent les sources": "OpenAI, Gemini, Anthropic, Ollama ou tout serveur compatible OpenAI"
          },
          {
            "Élément": "Modèles locaux (facultatif)",
            "Ce que disent les sources": "Le guide cite des modèles Ollama comme gpt-oss, qwen3:8b et qwen3-vl:8b ; il n’indique aucun minimum de RAM ni de VRAM"
          },
          {
            "Élément": "Reconnaissance faciale (facultatif)",
            "Ce que disent les sources": "Un service de visages externe que vous installez séparément"
          },
          {
            "Élément": "Voix (facultatif)",
            "Ce que disent les sources": "Les API vocales d’OpenAI ou un serveur local compatible OpenAI comme [Speaches](https://speaches.ai/) ; environ 2 Go de VRAM sont recommandés pour le grand modèle faster-whisper"
          }
        ],
        "note": "Le matériel adapté à chaque modèle n’est pas précisé au-delà ; cela dépend du serveur de modèles, pas de Home Generative Agent."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Pour bien démarrer",
        "content": [
          "**Les étapes suivent le README et le guide d’installation ; PromptQuorum ne les a pas exécutées.**"
        ],
        "numberedItems": [
          {
            "title": "Préparer la base de données",
            "whyItMatters": "Installez l’application PostgreSQL avec pgvector sous Home Assistant OS ou Supervised, ou pointez l’intégration vers votre propre serveur PostgreSQL."
          },
          {
            "title": "Installer via HACS et redémarrer",
            "whyItMatters": "Installez Home Generative Agent depuis HACS, redémarrez Home Assistant, puis ajoutez l’intégration dans Paramètres → Appareils et services."
          },
          {
            "title": "Ajouter un fournisseur de modèles",
            "whyItMatters": "Cliquez sur + Model Provider et choisissez Edge (Ollama ou un serveur compatible OpenAI) ou Cloud (OpenAI, Gemini ou Anthropic)."
          },
          {
            "title": "Lancer Setup",
            "whyItMatters": "Cliquez sur + Setup et choisissez Basic, qui active toutes les fonctions avec les valeurs recommandées, ou Advanced pour configurer chacune."
          },
          {
            "title": "Le choisir comme agent de conversation",
            "whyItMatters": "Sélectionnez Home Generative Agent dans Paramètres → Assistants vocaux, puis exposez les entités que vous voulez lui montrer."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions confirmées par les sources",
        "content": [
          "**Tout ce qui suit provient du README ou de la documentation ; rien n’a été testé ici.**"
        ],
        "items": [
          "**Conversation.** Pilotage et questions d’état en langage naturel pour les entités exposées, avec des réponses en streaming.",
          "**Automatisations.** Écrit et enregistre des automatisations depuis le chat ; les identifiants d’entités et les appels de service sont d’abord vérifiés auprès de Home Assistant, et un code PIN facultatif pour les actions critiques retient les automatisations qui déverrouilleraient une porte ou ouvriraient un garage.",
          "**Caméras.** Décrit des images de caméras et lance des analyses déclenchées par le mouvement ; le README cite Axis, Ring via ring-mqtt, Reolink et UniFi Protect, ainsi que toute caméra exposant une entité de mouvement.",
          "**Sentinel.** Détection d’anomalies par règles et audit de sécurité de l’installation Home Assistant, avec alertes sur téléphone et triage facultatif par le modèle de langage.",
          "**Mémoire et outils.** Mémoire sémantique à long terme dans pgvector, et outils supplémentaires comme la recherche web via des serveurs MCP ou une API LLM de Home Assistant.",
          "**Voix.** Ses propres fournisseurs de reconnaissance et de synthèse vocales pour les pipelines Assist, avec OpenAI ou un serveur local."
        ],
        "note": "La documentation indique les langues d’interface anglais, tchèque, russe, turc et chinois simplifié. Toutes les fonctions sont la description du développeur."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flux de données et vie privée",
        "content": [
          "**La destination de vos données dépend du fournisseur de modèles choisi : selon le README, Home Generative Agent peut fonctionner entièrement en local avec Ollama ou un serveur compatible OpenAI, les fournisseurs cloud étant l’alternative.**",
          "Avec un fournisseur cloud, vos prompts et les images de caméras que vous lui demandez d’analyser lui parviennent selon sa propre politique. Le README ajoute que Sentinel et l’outil d’audit masquent les adresses MAC et IP et les noms d’hôte des clients avant de montrer quoi que ce soit à un modèle de langage. La reconnaissance faciale utilise un service de visages distinct, dont ce test n’a pas examiné le stockage."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce sont des déclarations du développeur, pas des résultats d’audit. PromptQuorum n’a inspecté ni le code ni le trafic réseau."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui il s’adresse",
        "items": [
          "**Les utilisateurs de Home Assistant disposant d’une machine GPU libre** qui veulent un agent conversationnel restant sur leur réseau grâce à Ollama.",
          "**Ceux qui veulent faire rédiger des automatisations à partir de demandes en langage courant** et relire chacune dans l’éditeur d’automatisations.",
          "**Les propriétaires de caméras prises en charge** qui veulent poser des questions sur ce que voit une caméra, avec un modèle de vision qu’ils hébergent."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n’avons pas pu vérifier",
        "items": [
          "**Fiabilité.** La fréquence à laquelle l’agent trouve la bonne entité ou écrit une automatisation correcte n’a pas été testée.",
          "**Affirmations de sécurité.** Le code PIN des actions critiques et l’affirmation selon laquelle le modèle n’actionne jamais rien dans Sentinel sont des descriptions du développeur.",
          "**Qualité des modèles locaux.** Le guide recommande des modèles mais ne publie aucun benchmark d’utilisation d’outils ou de vision sur du matériel local.",
          "**Traitement des données.** Le service de visages et les flux de données vers les fournisseurs cloud n’ont pas été inspectés."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Concurrents et alternatives",
        "columns": [
          "App",
          "Plateformes",
          "Prix / licence",
          "Différence clé"
        ],
        "rows": [
          {
            "App": "[Home Assistant Assist](/fr/power-local-llm/home-assistant-assist-review)",
            "Plateformes": "Home Assistant (web, Android, iOS)",
            "Prix / licence": "Gratuit / Apache-2.0",
            "Différence clé": "Pipeline vocal intégré ; les agents LLM sont des ajouts facultatifs"
          },
          {
            "App": "[nanobot](/fr/power-local-llm/nanobot-review)",
            "Plateformes": "Windows, macOS, Linux",
            "Prix / licence": "Gratuit / MIT",
            "Différence clé": "Agent généraliste auto-hébergé, sans lien avec Home Assistant"
          },
          {
            "App": "[PicoClaw](/fr/power-local-llm/picoclaw-review)",
            "Plateformes": "Linux, macOS, Windows, Android",
            "Prix / licence": "Gratuit / MIT",
            "Différence clé": "Petit agent généraliste, sans lien avec Home Assistant"
          }
        ],
        "note": "Seul Home Assistant Assist relève du même segment maison connectée ; nanobot et PicoClaw sont des agents généralistes. Vérifiez le prix, la licence et les plateformes actuels de chaque app sur sa propre fiche avant de choisir."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "Home Generative Agent remplace-t-il Home Assistant Assist ?",
            "a": "Non. Vous le sélectionnez comme agent de conversation dans Assist, et il peut ajouter ses propres fournisseurs de reconnaissance et de synthèse vocales à un pipeline Assist."
          },
          {
            "q": "Pourquoi l’agent dit-il qu’il ne trouve pas un appareil ?",
            "a": "Il ne voit que les entités exposées à Assist et les trouve par nom et par pièce ; le README conseille donc d’exposer l’entité et de lui donner un nom et une pièce clairs."
          },
          {
            "q": "Fonctionne-t-il sous Home Assistant Container ou Core ?",
            "a": "L’application de base de données fournie exige Home Assistant OS ou Supervised ; sous Container ou Core, le guide d’installation renvoie donc vers votre propre serveur PostgreSQL avec pgvector."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Home Generative Agent est un moyen gratuit, sous licence MIT, de doter un Home Assistant existant d’un agent IA à outils pouvant fonctionner avec un serveur Ollama local ou un modèle cloud, et il est activement maintenu. En revanche, l’installation mobilise plusieurs services, de nombreuses fonctions dépendent de composants facultatifs comme le service de visages, et PromptQuorum n’a testé ni la fiabilité, ni le comportement en matière de vie privée, ni la qualité des modèles locaux. Il convient aux utilisateurs de Home Assistant à l’aise avec HACS et un serveur de modèles ; quiconque l’emploie pour des serrures ou des automatisations de sécurité devrait vérifier lui-même chaque automatisation générée."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Home Generative Agent sur GitHub](https://github.com/goruck/home-generative-agent) — README, licence MIT et historique des commits, consultés le 1er novembre 2026.",
          "[Guide d’installation](https://github.com/goruck/home-generative-agent/blob/main/docs/installation.md) — installation via HACS et manuelle, applications facultatives et modèles Ollama, consulté le 1er novembre 2026.",
          "[Guide de configuration](https://github.com/goruck/home-generative-agent/blob/main/docs/configuration.md) — fournisseurs de modèles, voix, outils et options, consulté le 1er novembre 2026.",
          "[Releases de Home Generative Agent](https://github.com/goruck/home-generative-agent/releases) — version 3.44.10 du 23 octobre 2026 et sa liste de fichiers, consultées le 1er novembre 2026.",
          "[Fil de la communauté Home Assistant](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) — annonce du projet et discussion des utilisateurs, consulté le 1er novembre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lectures associées",
        "items": [
          "[Test de Home Assistant Assist](/fr/power-local-llm/home-assistant-assist-review) — le pipeline vocal et conversationnel intégré.",
          "[Test de nanobot](/fr/power-local-llm/nanobot-review) — un framework auto-hébergé d’agents IA personnels avec mémoire et outils MCP.",
          "[Test de PicoClaw](/fr/power-local-llm/picoclaw-review) — un petit agent open source pour cartes bon marché.",
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
    "theme": "Local AI Agents & Tool Use",
    "heroImage": "/images/home-generative-agent-review-hero-ja.webp",
    "title": "Home Generative Agentレビュー：Home Assistant向けAIエージェント",
    "seoTitle": "Home Generative Agentレビュー：HA用AIエージェント",
    "intro": "Home Generative Agent（HGA）は、Home Assistantの会話機能Assistにツールを使えるAIエージェントを追加する、無料でMITライセンスのカスタムインテグレーションです。LangGraphをベースにしており、公開したデバイスの操作、自然な言葉で頼んだオートメーションの作成、カメラ画像の説明、長期記憶の保持ができます。モデルは、ローカルのOllamaサーバーからOpenAI、Gemini、Anthropicまで、選んだプロバイダーを使います。このレビューは、プロジェクトの[GitHubリポジトリ](https://github.com/goruck/home-generative-agent)、[Home Assistantコミュニティのスレッド](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923)、GitHub Releasesに基づいており、PromptQuorumはインストールも実行もしていません。[PromptQuorumディレクトリ](/ja/directory)に掲載されています。",
    "metaDescription": "Home Generative Agentレビュー：Home Assistant向けの無料MIT LangGraphエージェント。OllamaやクラウドLLMに対応。導入手順、プライバシー、未検証の点。",
    "twitterDescription": "Home Generative Agentレビュー：エンティティの操作、オートメーション作成、カメラ解析を行うHome Assistant向けオープンソースLLMエージェント。OllamaまたはクラウドLLMに対応。情報源が確認していることと、していないこと。",
    "audience": "スマートホーム向けの対話型AIエージェントを探しているHome Assistantユーザーで、Home Generative Agentにできること、必要なもの、情報源が明らかにしていない点を知りたい方。",
    "readTime": "6分で読める",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Home Generative Agentレビュー",
    "targetKeywords": [
      "home generative agent レビュー",
      "home generative agent",
      "home assistant aiエージェント",
      "home assistant langgraph",
      "home assistant ollama エージェント",
      "home assistant llm オートメーション",
      "hacs home generative agent"
    ],
    "current_models_mentioned": [
      "Qwen",
      "gpt-oss"
    ],
    "current_hardware_mentioned": [
      "GPU"
    ],
    "leadAnswerBlock": "**Home Generative Agent（バージョン3.44.10、2026年10月23日公開）は、AssistにLLMエージェントを追加する無料のMITライセンスのHome Assistantインテグレーションで、ローカルのOllamaサーバーやクラウドモデルで動作します。** 稼働中のHome Assistant、pgvector付きのPostgreSQLデータベース、少なくとも1つのモデルプロバイダーが必要です。",
    "quickAnswerTop": {
      "ja": {
        "question": "Home Generative Agentは完全にローカルで動かせますか？",
        "answer": "READMEによれば可能です。モデルプロバイダーに自宅ネットワーク内のOllamaやOpenAI互換サーバーを使えば、データが家の外へ出る必要はありません。クラウドの選択肢はOpenAI、Gemini、Anthropicです。",
        "bullets": [
          "エージェントが見られるのは、Assistに公開したエンティティだけです。",
          "チャットでの依頼からHome Assistantのオートメーションを作成して登録できます。",
          "カメラ解析にはビジョンモデルが必要で、顔認識にはさらに外部の顔サービスが必要です。",
          "Home Assistant 2026.8.0以降が必要です。"
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
        "label": "Home Generative Agentとは",
        "anchor": "what-is-home-generative-agent"
      },
      {
        "label": "入手方法",
        "anchor": "get-it"
      },
      {
        "label": "必要な環境",
        "anchor": "requirements"
      },
      {
        "label": "導入の手順",
        "anchor": "getting-started"
      },
      {
        "label": "情報源が確認している機能",
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
        "label": "確認できなかった点",
        "anchor": "who-should-not-use"
      },
      {
        "label": "競合と代替",
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
            "text": "Home Generative Agentは、家と会話し、自然な言葉でオートメーションを作り、カメラ画像について質問できる、Home Assistant向けのオープンソースAIエージェントです。"
          },
          {
            "type": "plain-terms",
            "text": "HACS経由で既存のHome Assistantに入れ、ローカルのOllamaサーバーなどの言語モデルをつなぎ、Assistの会話エージェントとして選びます。"
          }
        ],
        "items": [
          "メンテナンス：最新の安定版3.44.10は2026年10月23日のもので、メインブランチは2026年11月1日に更新されているため、放置プロジェクトの警告は該当しません。",
          "モデル：同梱はなく、Ollama、OpenAI互換サーバー、OpenAI、Gemini、Anthropicに対応します。",
          "コスト：ソフトウェアはMITライセンスで無料で、料金がかかるのは選んだ場合のクラウドプロバイダーだけです。",
          "導入：単一のインストーラーではなく、データベース用アプリ、HACS、モデルプロバイダーにまたがる複数の手順が必要です。",
          "開発元：企業ではなく個人の開発者（GitHubユーザーgoruck）です。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "このレビューは、2026年11月1日に確認したGitHubリポジトリ、そのドキュメント、Home Assistantコミュニティのスレッドに基づいています。PromptQuorumはHome Generative Agentをインストール・実行・計測していないため、信頼性、速度、作成されるオートメーションの品質は評価していません。"
          }
        ]
      },
      "overview": {
        "id": "what-is-home-generative-agent",
        "title": "Home Generative Agentとは",
        "content": [
          "**Home Generative Agentは、ユーザーの言葉を言語モデルへ渡すだけでなく、家に対して実際に動作するHome Assistant向けAIエージェントです。** READMEによれば、LangGraphをベースにし、ツールを使ってエンティティの操作、履歴の照会、カメラの監視、実際のオートメーション作成を行います。",
          "HACSでインストールするHome Assistantのカスタムインテグレーションであり、単体のアプリではありません。Sentinelエンジンは固定ルールでセキュリティ上の問題を監視し、READMEによれば言語モデルは助言するだけで何も操作しないとのことですが、これは開発者の説明であり確認していません。コミュニティスレッドの最初の投稿はGitHubより古いバージョンを示しているため、このレビューはGitHubに従っています。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "入手方法",
        "content": [
          "**Home Generative Agentは、既存のHome AssistantにHACS経由でインストールします。単独のダウンロードはありません。**"
        ],
        "columns": [
          "方法",
          "入手先"
        ],
        "rows": [
          {
            "方法": "HACS（推奨）",
            "入手先": "既定のリポジトリに登録されているHACSで検索するか、[README](https://github.com/goruck/home-generative-agent)の「Open in HACS」ボタンを使います。その後Home Assistantを再起動し、インテグレーションを追加します"
          },
          {
            "方法": "手動インストール",
            "入手先": "[GitHub Releases](https://github.com/goruck/home-generative-agent/releases)からhome_generative_agent.zipをダウンロードし、インストールガイドの手順でHome Assistantにコピーします"
          },
          {
            "方法": "データベース",
            "入手先": "Home Assistant OSまたはSupervisedの[PostgreSQL with pgvectorアプリ](https://github.com/goruck/addon-postgres-pgvector)、または自前のPostgreSQLサーバー"
          },
          {
            "方法": "ウェブサイト",
            "入手先": "[Home Assistantコミュニティのスレッド](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923)（GitHubに記載されたプロジェクトのホームページ）"
          },
          {
            "方法": "ドキュメント",
            "入手先": "[リポジトリ内のガイド](https://github.com/goruck/home-generative-agent/tree/main/docs)：インストール、設定、Sentinel、カメラ、アーキテクチャ"
          },
          {
            "方法": "プライバシーポリシー",
            "入手先": "リポジトリにもコミュニティのスレッドにも見つかりませんでした"
          },
          {
            "方法": "ソースコード",
            "入手先": "[github.com/goruck/home-generative-agent](https://github.com/goruck/home-generative-agent)、MITライセンス"
          }
        ],
        "note": "確認したバージョン：3.44.10（GitHub Releasesによると2026年10月23日公開）。プレリリース版3.45.0-beta.5も存在しますが、確認していません。Home Assistant側の手順はウェブ画面で行えますが、Ollamaのモデル取得にはターミナルを使い、サービスを連携させる全体の手間は単一のインストールより大きくなります。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "必要な環境",
        "content": [
          "**Home Assistant 2026.8.0以降、HACS、pgvector付きのPostgreSQLデータベース、少なくとも1つのモデルプロバイダーが必要です。**"
        ],
        "columns": [
          "項目",
          "情報源の記載"
        ],
        "rows": [
          {
            "項目": "Home Assistant",
            "情報源の記載": "最小は2026.8.0（HGA 3.43.3以降）で、2026.9と2026.10も対応と記載されています"
          },
          {
            "項目": "データベース",
            "情報源の記載": "pgvector付きPostgreSQL。ないとメモリ上の保存のみになり、長期記憶、顔認識、ベースライン異常検知が使えません"
          },
          {
            "項目": "モデルプロバイダー",
            "情報源の記載": "OpenAI、Gemini、Anthropic、Ollama、または任意のOpenAI互換サーバー"
          },
          {
            "項目": "ローカルモデル（任意）",
            "情報源の記載": "ガイドはgpt-oss、qwen3:8b、qwen3-vl:8bなどのOllamaモデルを挙げていますが、RAMやVRAMの最小値は示していません"
          },
          {
            "項目": "顔認識（任意）",
            "情報源の記載": "別途用意する外部の顔サービス"
          },
          {
            "項目": "音声（任意）",
            "情報源の記載": "OpenAIの音声APIか、[Speaches](https://speaches.ai/)のようなOpenAI互換のローカルサーバー。大型のfaster-whisperモデルにはVRAM約2 GBが推奨されています"
          }
        ],
        "note": "どのハードウェアがどのモデルに合うかは、これ以上は示されていません。それはHome Generative Agentではなく、モデルサーバー次第です。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "導入の手順",
        "content": [
          "**手順はREADMEとインストールガイドに基づいています。PromptQuorumは実行していません。**"
        ],
        "numberedItems": [
          {
            "title": "データベースを用意する",
            "whyItMatters": "Home Assistant OSまたはSupervisedに、PostgreSQL with pgvectorアプリをインストールするか、自前のPostgreSQLサーバーを指定します。"
          },
          {
            "title": "HACSで入れて再起動する",
            "whyItMatters": "HACSからHome Generative Agentをインストールし、Home Assistantを再起動して、設定 → デバイスとサービスからインテグレーションを追加します。"
          },
          {
            "title": "モデルプロバイダーを追加する",
            "whyItMatters": "+ Model Providerをクリックし、Edge（OllamaまたはOpenAI互換サーバー）かCloud（OpenAI、Gemini、Anthropic）を選びます。"
          },
          {
            "title": "Setupを実行する",
            "whyItMatters": "+ Setupをクリックし、推奨設定で全機能を有効にするBasicか、機能ごとに設定するAdvancedを選びます。"
          },
          {
            "title": "会話エージェントとして選ぶ",
            "whyItMatters": "設定 → 音声アシスタントでHome Generative Agentを選び、見せたいエンティティを公開します。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "情報源が確認している機能",
        "content": [
          "**以下はすべてREADMEまたはドキュメントの記載で、ここでは試していません。**"
        ],
        "items": [
          "**会話。** 公開したエンティティに対する自然な言葉での操作と状態の質問。応答はストリーミングで表示されます。",
          "**オートメーション。** チャットからオートメーションを作成して登録します。エンティティIDとサービス呼び出しは事前にHome Assistantで検証され、任意のCritical Action PINを有効にすると、ドアの解錠やガレージの開放につながるオートメーションは保留されます。",
          "**カメラ。** カメラ画像を説明し、動体検知をきっかけにした解析を行います。READMEにはAxis、ring-mqtt経由のRing、Reolink、UniFi Protectのほか、動体検知エンティティを公開する任意のカメラが挙げられています。",
          "**Sentinel。** ルールベースの異常検知とHome Assistant環境のセキュリティ監査。スマートフォンへの通知と、任意の言語モデルによるトリアージがあります。",
          "**記憶とツール。** pgvectorによる長期の意味記憶と、MCPサーバーやHome AssistantのLLM API経由のウェブ検索などの追加ツール。",
          "**音声。** Assistパイプライン向けの独自の音声認識・音声合成プロバイダー。OpenAIまたはローカルサーバーを使います。"
        ],
        "note": "ドキュメントには、英語、チェコ語、ロシア語、トルコ語、簡体字中国語のインターフェース言語が記載されています。すべての機能は開発者の説明です。"
      },
      "privacy": {
        "id": "privacy",
        "title": "データの流れとプライバシー",
        "content": [
          "**データの行き先は選んだモデルプロバイダー次第です。READMEによれば、Home Generative AgentはOllamaやOpenAI互換サーバーで完全にローカル動作でき、クラウドプロバイダーは代替の選択肢です。**",
          "クラウドプロバイダーを使うと、プロンプトと解析を依頼したカメラ画像は、そのプロバイダーのポリシーのもとで先方に届きます。READMEによれば、Sentinelと監査ツールは、言語モデルに何かを見せる前にMACアドレス、IPアドレス、クライアントのホスト名を伏せます。顔認識は別の顔サービスを使いますが、その保存内容はこのレビューでは調べていません。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "これらは開発者の説明であり、監査結果ではありません。PromptQuorumはコードもネットワーク通信も調べていません。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "向いている人",
        "items": [
          "**余っているGPUマシンがあるHome Assistantユーザー。** Ollamaを使って、自宅ネットワーク内にとどまる対話エージェントを使いたい方。",
          "**自然な言葉でオートメーションの下書きを作りたい人。** 各オートメーションをオートメーションエディタで確認する方。",
          "**対応カメラの所有者。** 自分でホストするビジョンモデルで、カメラに何が映っているかを質問したい方。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかった点",
        "items": [
          "**信頼性。** エージェントが正しいエンティティを見つける頻度や、正しいオートメーションを書く頻度は未検証です。",
          "**安全性に関する記載。** Critical Action PINや、Sentinelでモデルが何も操作しないという説明は、開発者による説明です。",
          "**ローカルモデルの品質。** ガイドはモデルを推奨していますが、ローカル環境でのツール利用や画像理解のベンチマークは公開していません。",
          "**データの取り扱い。** 顔サービスとクラウドプロバイダーへのデータの流れは調べていません。"
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "競合と代替",
        "columns": [
          "アプリ",
          "対応環境",
          "価格／ライセンス",
          "主な違い"
        ],
        "rows": [
          {
            "アプリ": "[Home Assistant Assist](/ja/power-local-llm/home-assistant-assist-review)",
            "対応環境": "Home Assistant（ウェブ、Android、iOS）",
            "価格／ライセンス": "無料／Apache-2.0",
            "主な違い": "音声パイプラインを内蔵。LLMエージェントは任意の追加"
          },
          {
            "アプリ": "[nanobot](/ja/power-local-llm/nanobot-review)",
            "対応環境": "Windows、macOS、Linux",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "汎用のセルフホスト型エージェント。Home Assistantに依存しない"
          },
          {
            "アプリ": "[PicoClaw](/ja/power-local-llm/picoclaw-review)",
            "対応環境": "Linux、macOS、Windows、Android",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "小型の汎用エージェント。Home Assistantに依存しない"
          }
        ],
        "note": "同じスマートホーム分野なのはHome Assistant Assistだけで、nanobotとPicoClawは汎用エージェントです。選ぶ前に、各アプリの最新の価格、ライセンス、対応環境を公式ページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "Home Generative AgentはHome Assistant Assistを置き換えますか？",
            "a": "いいえ。Assistの中で会話エージェントとして選ぶもので、Assistパイプラインに独自の音声認識・音声合成プロバイダーを追加できます。"
          },
          {
            "q": "エージェントがデバイスを見つけられないと言うのはなぜですか？",
            "a": "エージェントはAssistに公開されたエンティティだけを、名前とエリアで探します。READMEは、エンティティを公開し、分かりやすい名前とエリアを付けるよう勧めています。"
          },
          {
            "q": "Home Assistant ContainerやCoreでも動きますか？",
            "a": "同梱のデータベースアプリにはHome Assistant OSまたはSupervisedが必要です。ContainerやCoreでは、インストールガイドがpgvector付きの自前のPostgreSQLサーバーを案内しています。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "総評",
        "content": "Home Generative Agentは、既存のHome Assistantに、ローカルのOllamaサーバーやクラウドモデルで動くツール利用型のAIエージェントを無料のMITライセンスで加える手段で、活発にメンテナンスされています。一方で、導入は複数のサービスにまたがり、多くの機能は顔サービスのような任意の部品に依存し、PromptQuorumは信頼性、プライバシー面の挙動、ローカルモデルの品質を検証していません。HACSとモデルサーバーに慣れたHome Assistantユーザーに向いています。鍵やセキュリティ関連のオートメーションに使う場合は、生成された各オートメーションを自分で確認してください。"
      },
      "sources": {
        "id": "sources",
        "title": "情報源",
        "items": [
          "[GitHubのHome Generative Agent](https://github.com/goruck/home-generative-agent) — README、MITライセンス、コミット履歴。2026年11月1日確認。",
          "[インストールガイド](https://github.com/goruck/home-generative-agent/blob/main/docs/installation.md) — HACSと手動のインストール、任意アプリ、Ollamaモデル。2026年11月1日確認。",
          "[設定ガイド](https://github.com/goruck/home-generative-agent/blob/main/docs/configuration.md) — モデルプロバイダー、音声、ツール、オプション。2026年11月1日確認。",
          "[Home Generative Agentのリリース](https://github.com/goruck/home-generative-agent/releases) — 2026年10月23日のバージョン3.44.10とファイル一覧。2026年11月1日確認。",
          "[Home Assistantコミュニティのスレッド](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) — プロジェクトの告知とユーザーの議論。2026年11月1日確認。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[Home Assistant Assistレビュー](/ja/power-local-llm/home-assistant-assist-review) — 内蔵の音声・会話パイプライン。",
          "[nanobotレビュー](/ja/power-local-llm/nanobot-review) — 記憶とMCPツールを備えた、セルフホスト型の個人用AIエージェントフレームワーク。",
          "[PicoClawレビュー](/ja/power-local-llm/picoclaw-review) — 低価格ボード向けの小型オープンソースエージェント。",
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
    "heroImage": "/images/home-generative-agent-review-hero-pt.webp",
    "title": "Análise do Home Generative Agent: agente de IA para o Home Assistant",
    "seoTitle": "Home Generative Agent: análise do agente de IA para HA",
    "intro": "O Home Generative Agent (HGA) é uma integração personalizada do Home Assistant, gratuita e com licença MIT, que adiciona à interface de conversa Assist um agente de IA com ferramentas. Construído sobre o LangGraph, ele pode controlar os dispositivos que você expõe a ele, escrever automações a partir de pedidos em linguagem natural, descrever imagens de câmeras e manter uma memória de longo prazo. Ele usa o provedor de modelos que você escolher, de um servidor Ollama local até OpenAI, Gemini ou Anthropic. Esta análise se baseia no [repositório do GitHub](https://github.com/goruck/home-generative-agent) do projeto, no [tópico da comunidade do Home Assistant](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) e nas GitHub Releases; a PromptQuorum não o instalou nem o executou. Ele consta no [diretório da PromptQuorum](/pt/directory).",
    "metaDescription": "Análise do Home Generative Agent: agente LangGraph gratuito (MIT) para o Home Assistant, com Ollama ou nuvem. Instalação, privacidade e o não testado.",
    "twitterDescription": "Análise do Home Generative Agent: um agente LLM de código aberto para o Home Assistant que controla entidades, escreve automações e analisa câmeras, com Ollama ou modelos na nuvem. O que as fontes confirmam e o que não confirmam.",
    "audience": "Usuários do Home Assistant que querem um agente de IA conversacional para a casa inteligente e precisam saber o que o Home Generative Agent faz, o que exige e o que as fontes deixam em aberto.",
    "readTime": "6 min de leitura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "análise Home Generative Agent",
    "targetKeywords": [
      "análise home generative agent",
      "home generative agent",
      "agente ia home assistant",
      "home assistant langgraph",
      "agente ollama home assistant",
      "automações llm home assistant",
      "hacs home generative agent"
    ],
    "current_models_mentioned": [
      "Qwen",
      "gpt-oss"
    ],
    "current_hardware_mentioned": [
      "GPU"
    ],
    "leadAnswerBlock": "**O Home Generative Agent (versão 3.44.10, lançada em 23 de outubro de 2026) é uma integração gratuita do Home Assistant, com licença MIT, que adiciona um agente LLM ao Assist e funciona com um servidor Ollama local ou com modelos na nuvem.** Ele precisa de um Home Assistant em execução, de um banco de dados PostgreSQL com pgvector e de pelo menos um provedor de modelos.",
    "quickAnswerTop": {
      "pt": {
        "question": "O Home Generative Agent pode rodar totalmente localmente?",
        "answer": "Sim, segundo o README: com Ollama ou um servidor compatível com OpenAI na sua própria rede como provedor de modelos, nenhum dado precisa sair da sua casa. OpenAI, Gemini e Anthropic são as alternativas na nuvem.",
        "bullets": [
          "O agente só enxerga as entidades que você expôs ao Assist.",
          "Ele pode escrever e registrar automações do Home Assistant a partir de um pedido no chat.",
          "A análise de câmeras exige um modelo de visão, e o reconhecimento facial exige ainda um serviço de rostos externo.",
          "É necessário o Home Assistant 2026.8.0 ou mais recente."
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
        "label": "O que é o Home Generative Agent?",
        "anchor": "what-is-home-generative-agent"
      },
      {
        "label": "Como obter",
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
        "label": "Para quem é indicado",
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
            "text": "O Home Generative Agent é um agente de IA de código aberto para o Home Assistant que permite conversar com a casa, criar automações em linguagem natural e perguntar sobre imagens de câmeras."
          },
          {
            "type": "plain-terms",
            "text": "Você o instala pelo HACS no seu Home Assistant atual, conecta um modelo de linguagem, como um servidor Ollama local, e depois o escolhe como agente de conversa no Assist."
          }
        ],
        "items": [
          "Manutenção: a última versão estável, a 3.44.10, é de 23 de outubro de 2026 e o ramo principal foi atualizado em 1º de novembro de 2026, então não se aplica nenhum aviso de projeto abandonado.",
          "Modelo: nenhum vem incluído; há suporte a Ollama, servidores compatíveis com OpenAI, OpenAI, Gemini e Anthropic.",
          "Custo: o software é gratuito sob a licença MIT; só um provedor na nuvem, se você escolher um, cobra de você.",
          "Instalação: várias etapas entre um app de banco de dados, o HACS e um provedor de modelos, em vez de um único instalador.",
          "Autoria: um único desenvolvedor (usuário do GitHub goruck), não uma empresa."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta análise se baseia no repositório do GitHub, na documentação e no tópico da comunidade do Home Assistant, consultados em 1º de novembro de 2026. A PromptQuorum não instalou, executou nem mediu o Home Generative Agent, então confiabilidade, velocidade e qualidade das automações que ele escreve não foram avaliadas."
          }
        ]
      },
      "overview": {
        "id": "what-is-home-generative-agent",
        "title": "O que é o Home Generative Agent?",
        "content": [
          "**O Home Generative Agent é um agente de IA para o Home Assistant que age sobre a sua casa em vez de apenas repassar suas palavras a um modelo de linguagem.** Segundo o README, ele é construído sobre o LangGraph e usa ferramentas para controlar entidades, consultar o histórico, vigiar câmeras e escrever automações reais.",
          "É uma integração personalizada do Home Assistant instalada pelo HACS, não um app independente. O mecanismo Sentinel vigia problemas de segurança com regras fixas, e o README diz que ali o modelo de linguagem apenas aconselha e nunca aciona nada; essa é a descrição do desenvolvedor e não foi verificada. A primeira postagem do tópico da comunidade ainda cita uma versão mais antiga que a do GitHub, por isso esta análise segue o GitHub."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Como obter",
        "content": [
          "**O Home Generative Agent é instalado pelo HACS em um Home Assistant existente; não há download independente.**"
        ],
        "columns": [
          "Opção",
          "Como obter"
        ],
        "rows": [
          {
            "Opção": "HACS (recomendado)",
            "Como obter": "Procure no HACS, que o lista em seu repositório padrão, ou use o botão «Open in HACS» do [README](https://github.com/goruck/home-generative-agent); depois reinicie o Home Assistant e adicione a integração"
          },
          {
            "Opção": "Instalação manual",
            "Como obter": "Baixe home_generative_agent.zip nas [GitHub Releases](https://github.com/goruck/home-generative-agent/releases) e copie para o Home Assistant como descreve o guia de instalação"
          },
          {
            "Opção": "Banco de dados",
            "Como obter": "O [app PostgreSQL com pgvector](https://github.com/goruck/addon-postgres-pgvector) no Home Assistant OS ou Supervised, ou o seu próprio servidor PostgreSQL"
          },
          {
            "Opção": "Site",
            "Como obter": "[Tópico da comunidade do Home Assistant](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923), a página inicial do projeto no GitHub"
          },
          {
            "Opção": "Documentação",
            "Como obter": "[Guias no repositório](https://github.com/goruck/home-generative-agent/tree/main/docs): instalação, configuração, Sentinel, câmeras e arquitetura"
          },
          {
            "Opção": "Política de privacidade",
            "Como obter": "Não encontrada no repositório nem no tópico da comunidade"
          },
          {
            "Opção": "Código-fonte",
            "Como obter": "[github.com/goruck/home-generative-agent](https://github.com/goruck/home-generative-agent), licença MIT"
          }
        ],
        "note": "Versão analisada: 3.44.10, lançada em 23 de outubro de 2026 segundo as GitHub Releases; também existe uma pré-versão, a 3.45.0-beta.5, que não foi analisada. As etapas do Home Assistant são feitas na interface web dele, mas baixar modelos do Ollama exige um terminal, e toda a cadeia de serviços dá mais trabalho do que uma instalação única."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**São necessários o Home Assistant 2026.8.0 ou mais recente, o HACS, um banco de dados PostgreSQL com pgvector e pelo menos um provedor de modelos.**"
        ],
        "columns": [
          "Item",
          "O que as fontes dizem"
        ],
        "rows": [
          {
            "Item": "Home Assistant",
            "O que as fontes dizem": "2026.8.0 é o mínimo (a partir do HGA 3.43.3); 2026.9 e 2026.10 constam como compatíveis"
          },
          {
            "Item": "Banco de dados",
            "O que as fontes dizem": "PostgreSQL com pgvector; sem ele só funciona o armazenamento em memória, então memória de longo prazo, reconhecimento facial e o detector de anomalias de referência ficam indisponíveis"
          },
          {
            "Item": "Provedor de modelos",
            "O que as fontes dizem": "OpenAI, Gemini, Anthropic, Ollama ou qualquer servidor compatível com OpenAI"
          },
          {
            "Item": "Modelos locais (opcional)",
            "O que as fontes dizem": "O guia lista modelos do Ollama como gpt-oss, qwen3:8b e qwen3-vl:8b; não indica mínimo de RAM nem de VRAM"
          },
          {
            "Item": "Reconhecimento facial (opcional)",
            "O que as fontes dizem": "Um serviço de rostos externo que você configura separadamente"
          },
          {
            "Item": "Voz (opcional)",
            "O que as fontes dizem": "As APIs de voz da OpenAI ou um servidor local compatível com OpenAI, como o [Speaches](https://speaches.ai/); cerca de 2 GB de VRAM são recomendados para o modelo grande do faster-whisper"
          }
        ],
        "note": "Qual hardware serve para qual modelo não é informado além disso; depende do servidor de modelos, não do Home Generative Agent."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Como começar",
        "content": [
          "**As etapas seguem o README e o guia de instalação; a PromptQuorum não as executou.**"
        ],
        "numberedItems": [
          {
            "title": "Configure o banco de dados",
            "whyItMatters": "Instale o app PostgreSQL com pgvector no Home Assistant OS ou Supervised, ou aponte a integração para o seu próprio servidor PostgreSQL."
          },
          {
            "title": "Instale pelo HACS e reinicie",
            "whyItMatters": "Instale o Home Generative Agent pelo HACS, reinicie o Home Assistant e adicione a integração em Configurações → Dispositivos e serviços."
          },
          {
            "title": "Adicione um provedor de modelos",
            "whyItMatters": "Clique em + Model Provider e escolha Edge (Ollama ou um servidor compatível com OpenAI) ou Cloud (OpenAI, Gemini ou Anthropic)."
          },
          {
            "title": "Execute o Setup",
            "whyItMatters": "Clique em + Setup e escolha Basic, que ativa todos os recursos com padrões recomendados, ou Advanced para configurar cada um."
          },
          {
            "title": "Escolha-o como agente de conversa",
            "whyItMatters": "Selecione o Home Generative Agent em Configurações → Assistentes de voz e depois exponha as entidades que ele deve enxergar."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos confirmados pelas fontes",
        "content": [
          "**Tudo abaixo vem do README ou da documentação; nada foi testado aqui.**"
        ],
        "items": [
          "**Conversa.** Controle e perguntas de status em linguagem natural para as entidades expostas, com respostas em streaming.",
          "**Automações.** Escreve e registra automações a partir do chat; IDs de entidades e chamadas de serviço são verificados antes no Home Assistant, e um PIN opcional de ações críticas retém automações que destrancariam uma porta ou abririam uma garagem.",
          "**Câmeras.** Descreve imagens de câmeras e executa análises acionadas por movimento; o README cita Axis, Ring via ring-mqtt, Reolink e UniFi Protect, além de qualquer câmera que exponha uma entidade de movimento.",
          "**Sentinel.** Detecção de anomalias baseada em regras e uma auditoria de segurança da instalação do Home Assistant, com alertas no celular e triagem opcional pelo modelo de linguagem.",
          "**Memória e ferramentas.** Memória semântica de longo prazo no pgvector e ferramentas extras, como busca na web, por servidores MCP ou por uma API LLM do Home Assistant.",
          "**Voz.** Provedores próprios de voz para texto e de texto para voz para pipelines do Assist, com a OpenAI ou um servidor local."
        ],
        "note": "A documentação lista os idiomas de interface inglês, tcheco, russo, turco e chinês simplificado. Todos os recursos são a descrição do desenvolvedor."
      },
      "privacy": {
        "id": "privacy",
        "title": "Fluxo de dados e privacidade",
        "content": [
          "**Para onde vão seus dados depende do provedor de modelos que você escolher: o README diz que o Home Generative Agent pode rodar totalmente localmente com Ollama ou um servidor compatível com OpenAI, tendo os provedores na nuvem como alternativa.**",
          "Com um provedor na nuvem, seus prompts e as imagens de câmeras que você pede para analisar chegam a esse provedor sob a política dele. O README acrescenta que o Sentinel e a ferramenta de auditoria ocultam endereços MAC e IP e nomes de host de clientes antes de mostrar algo a um modelo de linguagem. O reconhecimento facial usa um serviço de rostos separado, cujo armazenamento esta análise não examinou."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "São declarações do desenvolvedor, não resultados de auditoria. A PromptQuorum não inspecionou o código nem o tráfego de rede."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem é indicado",
        "items": [
          "**Usuários do Home Assistant com uma máquina com GPU sobrando** que querem um agente conversacional que fique na própria rede por meio do Ollama.",
          "**Quem quer ter automações rascunhadas a partir de pedidos em linguagem natural** e vai revisar cada uma no editor de automações.",
          "**Donos de câmeras compatíveis** que querem perguntar o que uma câmera está vendo, usando um modelo de visão hospedado por eles."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Confiabilidade.** Não foi testada a frequência com que o agente encontra a entidade certa ou escreve uma automação correta.",
          "**Declarações de segurança.** O PIN de ações críticas e a afirmação de que o modelo nunca aciona nada no Sentinel são descrições do desenvolvedor.",
          "**Qualidade dos modelos locais.** O guia recomenda modelos, mas não publica benchmarks de uso de ferramentas nem de visão em hardware local.",
          "**Tratamento de dados.** O serviço de rostos e os fluxos de dados para provedores na nuvem não foram inspecionados."
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
            "App": "[Home Assistant Assist](/pt/power-local-llm/home-assistant-assist-review)",
            "Plataformas": "Home Assistant (web, Android, iOS)",
            "Preço / licença": "Grátis / Apache-2.0",
            "Diferença principal": "Pipeline de voz integrado; agentes LLM são complementos opcionais"
          },
          {
            "App": "[nanobot](/pt/power-local-llm/nanobot-review)",
            "Plataformas": "Windows, macOS, Linux",
            "Preço / licença": "Grátis / MIT",
            "Diferença principal": "Agente geral auto-hospedado, sem vínculo com o Home Assistant"
          },
          {
            "App": "[PicoClaw](/pt/power-local-llm/picoclaw-review)",
            "Plataformas": "Linux, macOS, Windows, Android",
            "Preço / licença": "Grátis / MIT",
            "Diferença principal": "Agente pequeno de uso geral, sem vínculo com o Home Assistant"
          }
        ],
        "note": "Somente o Home Assistant Assist está no mesmo segmento de casa inteligente; nanobot e PicoClaw são agentes gerais. Confirme o preço, a licença e as plataformas atuais de cada app na página dele antes de escolher."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "O Home Generative Agent substitui o Home Assistant Assist?",
            "a": "Não. Você o seleciona como agente de conversa dentro do Assist, e ele pode adicionar a um pipeline do Assist seus próprios provedores de voz para texto e de texto para voz."
          },
          {
            "q": "Por que o agente diz que não encontra um dispositivo?",
            "a": "Ele só enxerga as entidades expostas ao Assist e as encontra por nome e área, então o README recomenda expor a entidade e dar a ela um nome e uma área claros."
          },
          {
            "q": "Funciona no Home Assistant Container ou Core?",
            "a": "O app de banco de dados incluído exige o Home Assistant OS ou Supervised; no Container ou Core, o guia de instalação indica o seu próprio servidor PostgreSQL com pgvector."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O Home Generative Agent é um jeito gratuito e com licença MIT de dar a um Home Assistant existente um agente de IA com ferramentas, que pode rodar com um servidor Ollama local ou um modelo na nuvem, e ele é mantido ativamente. Em contrapartida, a instalação envolve vários serviços, muitos recursos dependem de componentes opcionais como o serviço de rostos, e a PromptQuorum não testou a confiabilidade, o comportamento de privacidade nem a qualidade dos modelos locais. Ele serve para usuários do Home Assistant à vontade com o HACS e um servidor de modelos; quem o usar para fechaduras ou automações de segurança deve conferir por conta própria cada automação gerada."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Home Generative Agent no GitHub](https://github.com/goruck/home-generative-agent) — README, licença MIT e histórico de commits, consultados em 1º de novembro de 2026.",
          "[Guia de instalação](https://github.com/goruck/home-generative-agent/blob/main/docs/installation.md) — instalação pelo HACS e manual, apps opcionais e modelos do Ollama, consultado em 1º de novembro de 2026.",
          "[Guia de configuração](https://github.com/goruck/home-generative-agent/blob/main/docs/configuration.md) — provedores de modelos, voz, ferramentas e opções, consultado em 1º de novembro de 2026.",
          "[Releases do Home Generative Agent](https://github.com/goruck/home-generative-agent/releases) — versão 3.44.10 de 23 de outubro de 2026 e sua lista de arquivos, consultadas em 1º de novembro de 2026.",
          "[Tópico da comunidade do Home Assistant](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) — anúncio do projeto e discussão dos usuários, consultado em 1º de novembro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leitura relacionada",
        "items": [
          "[Análise do Home Assistant Assist](/pt/power-local-llm/home-assistant-assist-review) — o pipeline integrado de voz e conversa.",
          "[Análise do nanobot](/pt/power-local-llm/nanobot-review) — um framework auto-hospedado de agentes de IA pessoais com memória e ferramentas MCP.",
          "[Análise do PicoClaw](/pt/power-local-llm/picoclaw-review) — um pequeno agente de código aberto para placas baratas.",
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
    "heroImage": "/images/home-generative-agent-review-hero-ar.webp",
    "title": "مراجعة Home Generative Agent: وكيل ذكاء اصطناعي لـ Home Assistant",
    "seoTitle": "مراجعة Home Generative Agent: وكيل ذكاء اصطناعي للمنزل",
    "intro": "Home Generative Agent (واختصاره HGA) تكامل مخصّص مجاني لـ Home Assistant بترخيص MIT، يضيف إلى واجهة المحادثة Assist وكيل ذكاء اصطناعي يستخدم الأدوات. يعتمد على LangGraph، ويستطيع التحكم في الأجهزة التي تتيحها له، وكتابة الأتمتة من طلبات بلغة عادية، ووصف صور الكاميرات، والاحتفاظ بذاكرة طويلة الأمد. ويستخدم مزوّد النماذج الذي تختاره، من خادم Ollama محلي إلى OpenAI أو Gemini أو Anthropic. تستند هذه المراجعة إلى [مستودع GitHub](https://github.com/goruck/home-generative-agent) للمشروع و[موضوع مجتمع Home Assistant](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) وإصدارات GitHub Releases؛ ولم تقم PromptQuorum بتثبيته أو تشغيله. وهو مدرج في [دليل PromptQuorum](/ar/directory).",
    "metaDescription": "مراجعة Home Generative Agent: وكيل LangGraph مجاني بترخيص MIT لـ Home Assistant مع Ollama أو نماذج سحابية. التثبيت والخصوصية وما لم يُختبر في المصادر.",
    "twitterDescription": "مراجعة Home Generative Agent: وكيل LLM مفتوح المصدر لـ Home Assistant يتحكم في الكيانات ويكتب الأتمتة ويحلل الكاميرات، مع Ollama أو نماذج سحابية. ما تؤكده المصادر وما لا تؤكده.",
    "audience": "مستخدمو Home Assistant الذين يريدون وكيل ذكاء اصطناعي حواريًا لمنزلهم الذكي ويحتاجون إلى معرفة ما يفعله Home Generative Agent وما يتطلبه وما تتركه المصادر مفتوحًا.",
    "readTime": "6 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة Home Generative Agent",
    "targetKeywords": [
      "مراجعة home generative agent",
      "home generative agent",
      "وكيل ذكاء اصطناعي home assistant",
      "home assistant langgraph",
      "وكيل ollama home assistant",
      "أتمتة llm home assistant",
      "hacs home generative agent"
    ],
    "current_models_mentioned": [
      "Qwen",
      "gpt-oss"
    ],
    "current_hardware_mentioned": [
      "GPU"
    ],
    "leadAnswerBlock": "**Home Generative Agent (الإصدار 3.44.10، صدر في 23 أكتوبر 2026) تكامل مجاني لـ Home Assistant بترخيص MIT يضيف وكيل LLM إلى Assist ويعمل مع خادم Ollama محلي أو مع نماذج سحابية.** ويحتاج إلى Home Assistant قيد التشغيل وقاعدة بيانات PostgreSQL مع pgvector ومزوّد نماذج واحد على الأقل.",
    "quickAnswerTop": {
      "ar": {
        "question": "هل يمكن تشغيل Home Generative Agent محليًا بالكامل؟",
        "answer": "نعم، بحسب ملف README: عند استخدام Ollama أو خادم متوافق مع OpenAI على شبكتك الخاصة كمزوّد للنماذج، لا تحتاج أي بيانات إلى مغادرة منزلك. وبدائل السحابة هي OpenAI وGemini وAnthropic.",
        "bullets": [
          "لا يرى الوكيل إلا الكيانات التي أتحتَها لـ Assist.",
          "يستطيع كتابة أتمتة Home Assistant وتسجيلها انطلاقًا من طلب في المحادثة.",
          "يحتاج تحليل الكاميرات إلى نموذج رؤية، ويحتاج التعرف على الوجوه أيضًا إلى خدمة وجوه خارجية.",
          "يلزم Home Assistant بالإصدار 2026.8.0 أو أحدث."
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
        "label": "ما هو Home Generative Agent؟",
        "anchor": "what-is-home-generative-agent"
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
        "label": "المزايا التي تؤكدها المصادر",
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
            "text": "Home Generative Agent وكيل ذكاء اصطناعي مفتوح المصدر لـ Home Assistant يتيح لك التحدث مع منزلك وإنشاء الأتمتة بلغة عادية والسؤال عن صور الكاميرات."
          },
          {
            "type": "plain-terms",
            "text": "تثبّته من HACS في Home Assistant الحالي لديك، وتربط به نموذج لغة مثل خادم Ollama محلي، ثم تختاره وكيل محادثة في Assist."
          }
        ],
        "items": [
          "الصيانة: أحدث إصدار مستقر هو 3.44.10 بتاريخ 23 أكتوبر 2026، وجرى تحديث الفرع الرئيسي في 1 نوفمبر 2026، لذا لا ينطبق تحذير المشروع المتوقف.",
          "النموذج: لا يتضمن أي نموذج؛ ويدعم Ollama والخوادم المتوافقة مع OpenAI وOpenAI وGemini وAnthropic.",
          "التكلفة: البرنامج مجاني بترخيص MIT؛ ولا يحاسبك إلا مزوّد سحابي إن اخترت واحدًا.",
          "الإعداد: عدة خطوات تمتد عبر تطبيق قاعدة بيانات وHACS ومزوّد نماذج بدلًا من مثبّت واحد.",
          "الجهة المطوّرة: مطوّر فرد (مستخدم GitHub باسم goruck)، وليس شركة."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "تستند هذه المراجعة إلى مستودع GitHub ووثائقه وموضوع مجتمع Home Assistant، وقد جرى الاطلاع عليها في 1 نوفمبر 2026. لم تقم PromptQuorum بتثبيت Home Generative Agent أو تشغيله أو قياس أدائه، ولذلك لم يُقيَّم مدى الاعتمادية ولا السرعة ولا جودة الأتمتة التي يكتبها."
          }
        ]
      },
      "overview": {
        "id": "what-is-home-generative-agent",
        "title": "ما هو Home Generative Agent؟",
        "content": [
          "**Home Generative Agent وكيل ذكاء اصطناعي لـ Home Assistant يتصرف في منزلك بدل أن يكتفي بتمرير كلماتك إلى نموذج لغة.** وبحسب README فهو مبني على LangGraph ويستخدم أدوات للتحكم في الكيانات والاستعلام عن السجل ومراقبة الكاميرات وكتابة أتمتة حقيقية.",
          "هو تكامل مخصّص لـ Home Assistant يُثبَّت عبر HACS، وليس تطبيقًا مستقلًا. يراقب محرك Sentinel المشكلات الأمنية بقواعد ثابتة، ويذكر README أن نموذج اللغة هناك يقدّم النصح فقط ولا يشغّل أي شيء؛ وهذا وصف المطوّر ولم يُتحقق منه. ولا يزال المنشور الأول في موضوع المجتمع يذكر إصدارًا أقدم من الإصدار على GitHub، لذلك تتبع هذه المراجعة GitHub."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "كيف تحصل عليه",
        "content": [
          "**يُثبَّت Home Generative Agent عبر HACS في Home Assistant قائم؛ ولا يوجد تنزيل مستقل.**"
        ],
        "columns": [
          "الخيار",
          "كيفية الحصول عليه"
        ],
        "rows": [
          {
            "الخيار": "HACS (موصى به)",
            "كيفية الحصول عليه": "ابحث عنه في HACS الذي يدرجه في مستودعه الافتراضي، أو استخدم زر «Open in HACS» في [README](https://github.com/goruck/home-generative-agent)؛ ثم أعد تشغيل Home Assistant وأضف التكامل"
          },
          {
            "الخيار": "التثبيت اليدوي",
            "كيفية الحصول عليه": "نزّل home_generative_agent.zip من [GitHub Releases](https://github.com/goruck/home-generative-agent/releases) وانسخه إلى Home Assistant كما يصف دليل التثبيت"
          },
          {
            "الخيار": "قاعدة البيانات",
            "كيفية الحصول عليه": "[تطبيق PostgreSQL مع pgvector](https://github.com/goruck/addon-postgres-pgvector) على Home Assistant OS أو Supervised، أو خادم PostgreSQL خاص بك"
          },
          {
            "الخيار": "الموقع",
            "كيفية الحصول عليه": "[موضوع مجتمع Home Assistant](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923)، وهو الصفحة الرئيسية للمشروع المذكورة على GitHub"
          },
          {
            "الخيار": "الوثائق",
            "كيفية الحصول عليه": "[أدلة في المستودع](https://github.com/goruck/home-generative-agent/tree/main/docs): التثبيت والإعداد وSentinel والكاميرات والبنية"
          },
          {
            "الخيار": "سياسة الخصوصية",
            "كيفية الحصول عليه": "لم نعثر عليها في المستودع ولا في موضوع المجتمع"
          },
          {
            "الخيار": "الشيفرة المصدرية",
            "كيفية الحصول عليه": "[github.com/goruck/home-generative-agent](https://github.com/goruck/home-generative-agent)، ترخيص MIT"
          }
        ],
        "note": "الإصدار الذي جرت مراجعته: 3.44.10، صدر في 23 أكتوبر 2026 بحسب GitHub Releases؛ ويوجد أيضًا إصدار تجريبي هو 3.45.0-beta.5 لم تتم مراجعته. تتم خطوات Home Assistant في واجهته على الويب، لكن تنزيل نماذج Ollama يستخدم الطرفية، وتتطلب سلسلة الخدمات كاملة جهدًا أكبر من تثبيت واحد."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "المتطلبات",
        "content": [
          "**يلزم Home Assistant بالإصدار 2026.8.0 أو أحدث، وHACS، وقاعدة بيانات PostgreSQL مع pgvector، ومزوّد نماذج واحد على الأقل.**"
        ],
        "columns": [
          "البند",
          "ما تقوله المصادر"
        ],
        "rows": [
          {
            "البند": "Home Assistant",
            "ما تقوله المصادر": "الحد الأدنى 2026.8.0 (من HGA 3.43.3)؛ والإصداران 2026.9 و2026.10 مذكوران كمدعومين"
          },
          {
            "البند": "قاعدة البيانات",
            "ما تقوله المصادر": "PostgreSQL مع pgvector؛ وبدونها يعمل التخزين في الذاكرة فقط، فلا تتوفر الذاكرة طويلة الأمد ولا التعرف على الوجوه ولا كاشف الشذوذ الأساسي"
          },
          {
            "البند": "مزوّد النماذج",
            "ما تقوله المصادر": "OpenAI أو Gemini أو Anthropic أو Ollama أو أي خادم متوافق مع OpenAI"
          },
          {
            "البند": "نماذج محلية (اختياري)",
            "ما تقوله المصادر": "يسرد الدليل نماذج Ollama مثل gpt-oss وqwen3:8b وqwen3-vl:8b؛ ولا يحدد حدًا أدنى من RAM أو VRAM"
          },
          {
            "البند": "التعرف على الوجوه (اختياري)",
            "ما تقوله المصادر": "خدمة وجوه خارجية تعدّها بشكل منفصل"
          },
          {
            "البند": "الصوت (اختياري)",
            "ما تقوله المصادر": "واجهات OpenAI الصوتية أو خادم محلي متوافق مع OpenAI مثل [Speaches](https://speaches.ai/)؛ ويُوصى بنحو 2 GB من VRAM لنموذج faster-whisper الكبير"
          }
        ],
        "note": "لا تحدد المصادر أكثر من ذلك أي عتاد يناسب أي نموذج؛ فهذا يتوقف على خادم النماذج لا على Home Generative Agent."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "كيف تبدأ",
        "content": [
          "**تتبع الخطوات ملف README ودليل التثبيت؛ ولم تنفذها PromptQuorum.**"
        ],
        "numberedItems": [
          {
            "title": "جهّز قاعدة البيانات",
            "whyItMatters": "ثبّت تطبيق PostgreSQL مع pgvector على Home Assistant OS أو Supervised، أو وجّه التكامل إلى خادم PostgreSQL الخاص بك."
          },
          {
            "title": "ثبّته من HACS ثم أعد التشغيل",
            "whyItMatters": "ثبّت Home Generative Agent من HACS، وأعد تشغيل Home Assistant، ثم أضف التكامل من الإعدادات ← الأجهزة والخدمات."
          },
          {
            "title": "أضف مزوّد نماذج",
            "whyItMatters": "اضغط + Model Provider واختر Edge (Ollama أو خادمًا متوافقًا مع OpenAI) أو Cloud (OpenAI أو Gemini أو Anthropic)."
          },
          {
            "title": "شغّل Setup",
            "whyItMatters": "اضغط + Setup واختر Basic الذي يفعّل كل المزايا بالقيم الافتراضية الموصى بها، أو Advanced لضبط كل ميزة على حدة."
          },
          {
            "title": "اختره وكيل محادثة",
            "whyItMatters": "اختر Home Generative Agent من الإعدادات ← مساعدو الصوت، ثم أتح الكيانات التي تريد أن يراها."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "المزايا التي تؤكدها المصادر",
        "content": [
          "**كل ما يلي مأخوذ من README أو الوثائق؛ ولم يُختبر أي منه هنا.**"
        ],
        "items": [
          "**المحادثة.** تحكم وأسئلة عن الحالة بلغة طبيعية للكيانات المتاحة، مع ردود تظهر تدريجيًا.",
          "**الأتمتة.** يكتب الأتمتة ويسجلها من المحادثة؛ وتُفحص معرّفات الكيانات واستدعاءات الخدمات أولًا مقابل Home Assistant، ويحتجز رمز PIN اختياري للإجراءات الحرجة الأتمتة التي تفتح بابًا أو مرآبًا.",
          "**الكاميرات.** يصف صور الكاميرات وينفذ تحليلًا يبدأ عند رصد حركة؛ ويذكر README كاميرات Axis وRing عبر ring-mqtt وReolink وUniFi Protect، وأي كاميرا تتيح كيان حركة.",
          "**Sentinel.** كشف شذوذ قائم على القواعد وتدقيق أمني لإعداد Home Assistant، مع تنبيهات على الهاتف وفرز اختياري بنموذج اللغة.",
          "**الذاكرة والأدوات.** ذاكرة دلالية طويلة الأمد في pgvector، وأدوات إضافية مثل البحث على الويب عبر خوادم MCP أو واجهة LLM API في Home Assistant.",
          "**الصوت.** مزوّدان خاصان بتحويل الكلام إلى نص والنص إلى كلام لمسارات Assist، باستخدام OpenAI أو خادم محلي."
        ],
        "note": "تسرد الوثائق لغات الواجهة: الإنجليزية والتشيكية والروسية والتركية والصينية المبسطة. وكل المزايا هي وصف المطوّر."
      },
      "privacy": {
        "id": "privacy",
        "title": "تدفق البيانات والخصوصية",
        "content": [
          "**وجهة بياناتك تتوقف على مزوّد النماذج الذي تختاره: يقول README إن Home Generative Agent يمكن أن يعمل محليًا بالكامل مع Ollama أو خادم متوافق مع OpenAI، وإن المزودين السحابيين هم البديل.**",
          "عند استخدام مزوّد سحابي، تصل طلباتك وصور الكاميرات التي تطلب تحليلها إلى ذلك المزوّد وفق سياسته الخاصة. ويضيف README أن Sentinel وأداة التدقيق تحجبان عناوين MAC وIP وأسماء مضيفي العملاء قبل عرض أي شيء على نموذج لغة. ويستخدم التعرف على الوجوه خدمة وجوه منفصلة لم تفحص هذه المراجعة طريقة تخزينها."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "هذه أقوال المطوّر وليست نتائج تدقيق. لم تفحص PromptQuorum الشيفرة ولا حركة الشبكة."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**مستخدمو Home Assistant الذين لديهم جهاز GPU غير مستغل** ويريدون وكيلًا حواريًا يبقى داخل شبكتهم عبر Ollama.",
          "**من يريدون صياغة الأتمتة من طلبات بلغة عادية** وسيراجعون كل واحدة في محرر الأتمتة.",
          "**أصحاب الكاميرات المدعومة** الذين يريدون السؤال عما تراه الكاميرا باستخدام نموذج رؤية يستضيفونه بأنفسهم."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**الاعتمادية.** لم يُختبر عدد المرات التي يجد فيها الوكيل الكيان الصحيح أو يكتب أتمتة صحيحة.",
          "**ادعاءات السلامة.** رمز PIN للإجراءات الحرجة والقول إن النموذج لا يشغّل شيئًا في Sentinel هما وصف المطوّر.",
          "**جودة النماذج المحلية.** يوصي الدليل بنماذج لكنه لا ينشر اختبارات أداء لاستخدام الأدوات أو الرؤية على عتاد محلي.",
          "**معالجة البيانات.** لم تُفحص خدمة الوجوه ولا تدفقات البيانات إلى المزودين السحابيين."
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
          "الفرق الأساسي"
        ],
        "rows": [
          {
            "التطبيق": "[Home Assistant Assist](/ar/power-local-llm/home-assistant-assist-review)",
            "المنصات": "Home Assistant (ويب، Android، iOS)",
            "السعر / الترخيص": "مجاني / Apache-2.0",
            "الفرق الأساسي": "مسار صوتي مدمج؛ ووكلاء LLM إضافات اختيارية"
          },
          {
            "التطبيق": "[nanobot](/ar/power-local-llm/nanobot-review)",
            "المنصات": "Windows وmacOS وLinux",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الأساسي": "وكيل عام مستضاف ذاتيًا وغير مرتبط بـ Home Assistant"
          },
          {
            "التطبيق": "[PicoClaw](/ar/power-local-llm/picoclaw-review)",
            "المنصات": "Linux وmacOS وWindows وAndroid",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الأساسي": "وكيل صغير عام الاستخدام وغير مرتبط بـ Home Assistant"
          }
        ],
        "note": "Home Assistant Assist وحده في قطاع المنزل الذكي نفسه؛ أما nanobot وPicoClaw فوكيلان عامان. تحقق من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته قبل الاختيار."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل يحل Home Generative Agent محل Home Assistant Assist؟",
            "a": "لا. تختاره وكيل محادثة داخل Assist، ويمكنه أن يضيف إلى مسار Assist مزوّديه الخاصين بتحويل الكلام إلى نص والنص إلى كلام."
          },
          {
            "q": "لماذا يقول الوكيل إنه لا يجد جهازًا؟",
            "a": "لا يرى إلا الكيانات المتاحة لـ Assist ويجدها بالاسم والمنطقة، لذلك ينصح README بإتاحة الكيان ومنحه اسمًا ومنطقة واضحين."
          },
          {
            "q": "هل يعمل على Home Assistant Container أو Core؟",
            "a": "يتطلب تطبيق قاعدة البيانات المرفق Home Assistant OS أو Supervised، ولذلك يحيلك دليل التثبيت على Container أو Core إلى خادم PostgreSQL خاص بك مع pgvector."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "Home Generative Agent طريقة مجانية بترخيص MIT لمنح Home Assistant قائم وكيل ذكاء اصطناعي يستخدم الأدوات ويمكن تشغيله مع خادم Ollama محلي أو نموذج سحابي، وهو مصان بنشاط. في المقابل يمتد الإعداد عبر عدة خدمات، وتعتمد مزايا كثيرة على مكونات اختيارية مثل خدمة الوجوه، ولم تختبر PromptQuorum الاعتمادية ولا سلوك الخصوصية ولا جودة النماذج المحلية. يناسب مستخدمي Home Assistant المرتاحين مع HACS وخادم النماذج؛ ومن يستخدمه مع الأقفال أو أتمتة السلامة فعليه فحص كل أتمتة يولّدها بنفسه."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[Home Generative Agent على GitHub](https://github.com/goruck/home-generative-agent) — README وترخيص MIT وسجل الإيداعات، جرى الاطلاع عليها في 1 نوفمبر 2026.",
          "[دليل التثبيت](https://github.com/goruck/home-generative-agent/blob/main/docs/installation.md) — التثبيت عبر HACS واليدوي والتطبيقات الاختيارية ونماذج Ollama، جرى الاطلاع عليه في 1 نوفمبر 2026.",
          "[دليل الإعداد](https://github.com/goruck/home-generative-agent/blob/main/docs/configuration.md) — مزودو النماذج والصوت والأدوات والخيارات، جرى الاطلاع عليه في 1 نوفمبر 2026.",
          "[إصدارات Home Generative Agent](https://github.com/goruck/home-generative-agent/releases) — الإصدار 3.44.10 بتاريخ 23 أكتوبر 2026 وقائمة ملفاته، جرى الاطلاع عليها في 1 نوفمبر 2026.",
          "[موضوع مجتمع Home Assistant](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) — إعلان المشروع ونقاش المستخدمين، جرى الاطلاع عليه في 1 نوفمبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة Home Assistant Assist](/ar/power-local-llm/home-assistant-assist-review) — مسار الصوت والمحادثة المدمج.",
          "[مراجعة nanobot](/ar/power-local-llm/nanobot-review) — إطار عمل مستضاف ذاتيًا لوكلاء الذكاء الاصطناعي الشخصيين مع ذاكرة وأدوات MCP.",
          "[مراجعة PicoClaw](/ar/power-local-llm/picoclaw-review) — وكيل صغير مفتوح المصدر للوحات منخفضة التكلفة.",
          "[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية."
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
    "heroImage": "/images/home-generative-agent-review-hero-zh.webp",
    "title": "Home Generative Agent 评测：Home Assistant 的 AI 智能体",
    "seoTitle": "Home Generative Agent 评测：HA 的 AI 智能体",
    "intro": "Home Generative Agent（HGA）是 Home Assistant 的免费自定义集成，采用 MIT 许可证，为 Assist 对话界面增加一个会调用工具的 AI 智能体。它基于 LangGraph，可以控制你开放给它的设备、根据自然语言请求编写自动化、描述摄像头画面并保留长期记忆。它使用你选择的模型服务商，从本地 Ollama 服务器到 OpenAI、Gemini 或 Anthropic 均可。本评测依据项目的 [GitHub 仓库](https://github.com/goruck/home-generative-agent)、[Home Assistant 社区帖子](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923)和 GitHub Releases；PromptQuorum 没有安装或运行过它。它已收录在 [PromptQuorum 目录](/zh/directory)中。",
    "metaDescription": "Home Generative Agent 评测：面向 Home Assistant 的免费 MIT 许可 LangGraph 智能体，支持 Ollama 或云端模型。安装步骤、隐私与未经测试的部分。",
    "twitterDescription": "Home Generative Agent 评测：面向 Home Assistant 的开源 LLM 智能体，可控制实体、编写自动化并分析摄像头，支持 Ollama 或云端模型。资料证实了什么、没有证实什么。",
    "audience": "想为智能家居配备对话式 AI 智能体的 Home Assistant 用户，需要了解 Home Generative Agent 能做什么、需要什么，以及哪些问题资料没有说明。",
    "readTime": "阅读约6分钟",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Home Generative Agent 评测",
    "targetKeywords": [
      "home generative agent 评测",
      "home generative agent",
      "home assistant ai 智能体",
      "home assistant langgraph",
      "home assistant ollama 智能体",
      "home assistant llm 自动化",
      "hacs home generative agent"
    ],
    "current_models_mentioned": [
      "Qwen",
      "gpt-oss"
    ],
    "current_hardware_mentioned": [
      "GPU"
    ],
    "leadAnswerBlock": "**Home Generative Agent（版本 3.44.10，2026 年 10 月 23 日发布）是一个免费的 MIT 许可 Home Assistant 集成，为 Assist 增加 LLM 智能体，可搭配本地 Ollama 服务器或云端模型使用。** 它需要正在运行的 Home Assistant、带 pgvector 的 PostgreSQL 数据库，以及至少一个模型服务商。",
    "quickAnswerTop": {
      "zh": {
        "question": "Home Generative Agent 可以完全在本地运行吗？",
        "answer": "根据 README，可以：如果把你自己网络中的 Ollama 或 OpenAI 兼容服务器作为模型服务商，就无需让任何数据离开家里。云端的替代选择是 OpenAI、Gemini 和 Anthropic。",
        "bullets": [
          "智能体只能看到你已开放给 Assist 的实体。",
          "它可以根据聊天中的请求编写并注册 Home Assistant 自动化。",
          "摄像头分析需要视觉模型，人脸识别还需要外部人脸服务。",
          "需要 Home Assistant 2026.8.0 或更高版本。"
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
        "label": "Home Generative Agent 是什么？",
        "anchor": "what-is-home-generative-agent"
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
        "label": "资料证实的功能",
        "anchor": "key-features"
      },
      {
        "label": "数据流向与隐私",
        "anchor": "privacy"
      },
      {
        "label": "适合哪些人",
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
        "label": "延伸阅读",
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
            "text": "Home Generative Agent 是面向 Home Assistant 的开源 AI 智能体，可以与家对话、用自然语言创建自动化，并就摄像头画面提问。"
          },
          {
            "type": "plain-terms",
            "text": "你通过 HACS 把它装进现有的 Home Assistant，连接本地 Ollama 服务器之类的语言模型，然后在 Assist 中选它作为对话智能体。"
          }
        ],
        "items": [
          "维护情况：最新稳定版 3.44.10 发布于 2026 年 10 月 23 日，主分支在 2026 年 11 月 1 日更新过，因此不适用项目停更警告。",
          "模型：不自带模型，支持 Ollama、OpenAI 兼容服务器、OpenAI、Gemini 和 Anthropic。",
          "费用：软件采用 MIT 许可证免费使用；只有你选择云端服务商时才会向你收费。",
          "部署：需要跨数据库应用、HACS 和模型服务商完成多个步骤，而不是一个安装程序。",
          "作者：个人开发者（GitHub 用户 goruck），不是公司。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本评测依据 2026 年 11 月 1 日查阅的 GitHub 仓库、其文档和 Home Assistant 社区帖子。PromptQuorum 没有安装、运行或测试过 Home Generative Agent，因此未评估其可靠性、速度以及它所写自动化的质量。"
          }
        ]
      },
      "overview": {
        "id": "what-is-home-generative-agent",
        "title": "Home Generative Agent 是什么？",
        "content": [
          "**Home Generative Agent 是面向 Home Assistant 的 AI 智能体，会对你的家采取行动，而不只是把你的话转给语言模型。** 根据 README，它基于 LangGraph，通过工具控制实体、查询历史、查看摄像头并编写真正的自动化。",
          "它是通过 HACS 安装的 Home Assistant 自定义集成，不是独立应用。其 Sentinel 引擎用固定规则监控安全问题，README 称语言模型在那里只提供建议、从不执行操作；这是开发者的说法，未经核实。社区帖子的首帖仍写着比 GitHub 更旧的版本，因此本评测以 GitHub 为准。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "content": [
          "**Home Generative Agent 通过 HACS 安装到现有的 Home Assistant 中，没有独立下载。**"
        ],
        "columns": [
          "方式",
          "获取方法"
        ],
        "rows": [
          {
            "方式": "HACS（推荐）",
            "获取方法": "在 HACS 中搜索（它位于默认仓库），或使用 [README](https://github.com/goruck/home-generative-agent) 中的“Open in HACS”按钮；然后重启 Home Assistant 并添加集成"
          },
          {
            "方式": "手动安装",
            "获取方法": "从 [GitHub Releases](https://github.com/goruck/home-generative-agent/releases) 下载 home_generative_agent.zip，按安装指南复制到 Home Assistant"
          },
          {
            "方式": "数据库",
            "获取方法": "Home Assistant OS 或 Supervised 上的 [PostgreSQL with pgvector 应用](https://github.com/goruck/addon-postgres-pgvector)，或你自己的 PostgreSQL 服务器"
          },
          {
            "方式": "网站",
            "获取方法": "[Home Assistant 社区帖子](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923)，即 GitHub 上标注的项目主页"
          },
          {
            "方式": "文档",
            "获取方法": "[仓库中的指南](https://github.com/goruck/home-generative-agent/tree/main/docs)：安装、配置、Sentinel、摄像头和架构"
          },
          {
            "方式": "隐私政策",
            "获取方法": "在仓库和社区帖子中均未找到"
          },
          {
            "方式": "源代码",
            "获取方法": "[github.com/goruck/home-generative-agent](https://github.com/goruck/home-generative-agent)，MIT 许可证"
          }
        ],
        "note": "评测版本：3.44.10，据 GitHub Releases 于 2026 年 10 月 23 日发布；另有预发布版 3.45.0-beta.5，未评测。Home Assistant 中的步骤在其网页界面完成，但拉取 Ollama 模型需要使用终端，整条服务链的投入也高于单一安装。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "系统要求",
        "content": [
          "**需要 Home Assistant 2026.8.0 或更高版本、HACS、带 pgvector 的 PostgreSQL 数据库，以及至少一个模型服务商。**"
        ],
        "columns": [
          "项目",
          "资料所述"
        ],
        "rows": [
          {
            "项目": "Home Assistant",
            "资料所述": "最低 2026.8.0（自 HGA 3.43.3 起）；2026.9 和 2026.10 被列为受支持"
          },
          {
            "项目": "数据库",
            "资料所述": "带 pgvector 的 PostgreSQL；没有它就只能使用内存存储，长期记忆、人脸识别和基线异常检测都不可用"
          },
          {
            "项目": "模型服务商",
            "资料所述": "OpenAI、Gemini、Anthropic、Ollama 或任何 OpenAI 兼容服务器"
          },
          {
            "项目": "本地模型（可选）",
            "资料所述": "指南列出 gpt-oss、qwen3:8b、qwen3-vl:8b 等 Ollama 模型，但未给出最低 RAM 或 VRAM"
          },
          {
            "项目": "人脸识别（可选）",
            "资料所述": "需要另行搭建的外部人脸服务"
          },
          {
            "项目": "语音（可选）",
            "资料所述": "OpenAI 的语音 API，或 [Speaches](https://speaches.ai/) 这类 OpenAI 兼容的本地服务器；大型 faster-whisper 模型建议约 2 GB VRAM"
          }
        ],
        "note": "除此之外，资料没有说明哪种硬件适合哪种模型；这取决于模型服务器，而不是 Home Generative Agent。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "上手步骤",
        "content": [
          "**以下步骤依据 README 和安装指南；PromptQuorum 没有执行过。**"
        ],
        "numberedItems": [
          {
            "title": "准备数据库",
            "whyItMatters": "在 Home Assistant OS 或 Supervised 上安装 PostgreSQL with pgvector 应用，或让集成指向你自己的 PostgreSQL 服务器。"
          },
          {
            "title": "通过 HACS 安装并重启",
            "whyItMatters": "从 HACS 安装 Home Generative Agent，重启 Home Assistant，然后在“设置 → 设备与服务”中添加集成。"
          },
          {
            "title": "添加模型服务商",
            "whyItMatters": "点击 + Model Provider，选择 Edge（Ollama 或 OpenAI 兼容服务器）或 Cloud（OpenAI、Gemini 或 Anthropic）。"
          },
          {
            "title": "运行 Setup",
            "whyItMatters": "点击 + Setup，选择以推荐默认值启用全部功能的 Basic，或逐项配置的 Advanced。"
          },
          {
            "title": "选为对话智能体",
            "whyItMatters": "在“设置 → 语音助手”中选择 Home Generative Agent，然后开放你希望它看到的实体。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "资料证实的功能",
        "content": [
          "**以下各项均来自 README 或文档；这里没有测试过其中任何一项。**"
        ],
        "items": [
          "**对话。** 用自然语言控制已开放的实体并询问状态，回复以流式方式显示。",
          "**自动化。** 通过聊天编写并注册自动化；实体 ID 和服务调用会先与 Home Assistant 核对，可选的关键操作 PIN 会拦下会解锁门或打开车库的自动化。",
          "**摄像头。** 描述摄像头画面并执行由移动触发的分析；README 提到 Axis、通过 ring-mqtt 接入的 Ring、Reolink、UniFi Protect，以及任何提供移动实体的摄像头。",
          "**Sentinel。** 基于规则的异常检测，以及对 Home Assistant 环境的安全审计，带手机提醒和可选的语言模型分诊。",
          "**记忆与工具。** pgvector 中的长期语义记忆，并可通过 MCP 服务器或 Home Assistant LLM API 添加网页搜索等额外工具。",
          "**语音。** 为 Assist 管道提供自己的语音转文字和文字转语音服务，使用 OpenAI 或本地服务器。"
        ],
        "note": "文档列出的界面语言有英语、捷克语、俄语、土耳其语和简体中文。所有功能均为开发者的说法。"
      },
      "privacy": {
        "id": "privacy",
        "title": "数据流向与隐私",
        "content": [
          "**数据流向取决于你选择的模型服务商：README 称 Home Generative Agent 可搭配 Ollama 或 OpenAI 兼容服务器完全在本地运行，云端服务商则是另一种选择。**",
          "使用云端服务商时，你的提示词以及你要求分析的摄像头画面会按该服务商自己的政策送达对方。README 补充说，Sentinel 和审计工具在向语言模型展示任何内容之前，会隐去 MAC 地址、IP 地址和客户端主机名。人脸识别使用单独的人脸服务，其存储方式本评测没有检查。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "这些是开发者的说法，不是审计结果。PromptQuorum 没有检查过代码或网络流量。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合哪些人",
        "items": [
          "**有闲置 GPU 机器的 Home Assistant 用户**，想通过 Ollama 让对话智能体留在自己的网络内。",
          "**希望用自然语言请求起草自动化的人**，并会在自动化编辑器中逐个检查。",
          "**拥有受支持摄像头的用户**，想用自己托管的视觉模型询问摄像头拍到了什么。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们无法核实的内容",
        "items": [
          "**可靠性。** 智能体找到正确实体或写出正确自动化的频率未经测试。",
          "**安全说法。** 关键操作 PIN，以及“模型在 Sentinel 中从不执行操作”的说法，都是开发者的描述。",
          "**本地模型质量。** 指南推荐了模型，但没有发布本地硬件上工具调用或视觉能力的基准测试。",
          "**数据处理。** 人脸服务以及流向云端服务商的数据未经检查。"
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "竞品与替代方案",
        "columns": [
          "应用",
          "平台",
          "价格／许可证",
          "主要区别"
        ],
        "rows": [
          {
            "应用": "[Home Assistant Assist](/zh/power-local-llm/home-assistant-assist-review)",
            "平台": "Home Assistant（网页、Android、iOS）",
            "价格／许可证": "免费／Apache-2.0",
            "主要区别": "内置语音管道；LLM 智能体是可选扩展"
          },
          {
            "应用": "[nanobot](/zh/power-local-llm/nanobot-review)",
            "平台": "Windows、macOS、Linux",
            "价格／许可证": "免费／MIT",
            "主要区别": "通用的自托管智能体，不绑定 Home Assistant"
          },
          {
            "应用": "[PicoClaw](/zh/power-local-llm/picoclaw-review)",
            "平台": "Linux、macOS、Windows、Android",
            "价格／许可证": "免费／MIT",
            "主要区别": "小型通用智能体，不绑定 Home Assistant"
          }
        ],
        "note": "只有 Home Assistant Assist 属于同一智能家居细分领域；nanobot 和 PicoClaw 是通用智能体。选择前请在各应用自己的页面核实当前价格、许可证和平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "Home Generative Agent 会取代 Home Assistant Assist 吗？",
            "a": "不会。你在 Assist 中把它选为对话智能体，它还可以为 Assist 管道添加自己的语音转文字和文字转语音服务。"
          },
          {
            "q": "为什么智能体说找不到某个设备？",
            "a": "它只能看到已开放给 Assist 的实体，并按名称和区域查找，因此 README 建议开放该实体，并给它起一个清晰的名称和区域。"
          },
          {
            "q": "它能在 Home Assistant Container 或 Core 上运行吗？",
            "a": "自带的数据库应用需要 Home Assistant OS 或 Supervised；在 Container 或 Core 上，安装指南建议使用你自己的带 pgvector 的 PostgreSQL 服务器。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "Home Generative Agent 以免费的 MIT 许可证，为现有的 Home Assistant 增加一个会调用工具的 AI 智能体，可搭配本地 Ollama 服务器或云端模型，并且仍在积极维护。不过，部署涉及多个服务，许多功能依赖人脸服务之类的可选组件，PromptQuorum 也没有测试可靠性、隐私表现或本地模型质量。它适合熟悉 HACS 和模型服务器的 Home Assistant 用户；若用于门锁或安全相关的自动化，请自行检查每一个生成的自动化。"
      },
      "sources": {
        "id": "sources",
        "title": "资料来源",
        "items": [
          "[GitHub 上的 Home Generative Agent](https://github.com/goruck/home-generative-agent) — README、MIT 许可证和提交历史，2026 年 11 月 1 日查阅。",
          "[安装指南](https://github.com/goruck/home-generative-agent/blob/main/docs/installation.md) — HACS 与手动安装、可选应用和 Ollama 模型，2026 年 11 月 1 日查阅。",
          "[配置指南](https://github.com/goruck/home-generative-agent/blob/main/docs/configuration.md) — 模型服务商、语音、工具和选项，2026 年 11 月 1 日查阅。",
          "[Home Generative Agent 发布页](https://github.com/goruck/home-generative-agent/releases) — 2026 年 10 月 23 日的 3.44.10 版及其文件列表，2026 年 11 月 1 日查阅。",
          "[Home Assistant 社区帖子](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) — 项目公告和用户讨论，2026 年 11 月 1 日查阅。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "延伸阅读",
        "items": [
          "[Home Assistant Assist 评测](/zh/power-local-llm/home-assistant-assist-review) — 内置的语音与对话管道。",
          "[nanobot 评测](/zh/power-local-llm/nanobot-review) — 带记忆和 MCP 工具的自托管个人 AI 智能体框架。",
          "[PicoClaw 评测](/zh/power-local-llm/picoclaw-review) — 面向低成本开发板的小型开源智能体。",
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
    "theme": "Local AI Agents & Tool Use",
    "heroImage": "/images/home-generative-agent-review-hero-ko.webp",
    "title": "Home Generative Agent 리뷰: Home Assistant용 AI 에이전트",
    "seoTitle": "Home Generative Agent 리뷰: HA용 AI 에이전트",
    "intro": "Home Generative Agent(HGA)는 Home Assistant의 대화 인터페이스인 Assist에 도구를 사용하는 AI 에이전트를 추가하는 무료 MIT 라이선스 커스텀 통합입니다. LangGraph를 기반으로 하며, 사용자가 공개한 기기를 제어하고, 일상 언어 요청으로 자동화를 작성하고, 카메라 이미지를 설명하고, 장기 기억을 유지할 수 있습니다. 로컬 Ollama 서버부터 OpenAI, Gemini, Anthropic까지 사용자가 고른 모델 제공자를 사용합니다. 이 리뷰는 프로젝트의 [GitHub 저장소](https://github.com/goruck/home-generative-agent), [Home Assistant 커뮤니티 스레드](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923), GitHub Releases를 바탕으로 하며, PromptQuorum은 설치하거나 실행하지 않았습니다. [PromptQuorum 디렉터리](/ko/directory)에 등재되어 있습니다.",
    "metaDescription": "Home Generative Agent 리뷰: Home Assistant용 무료 MIT 라이선스 LangGraph 에이전트. Ollama와 클라우드 모델 지원. 설치, 개인정보, 미검증 사항.",
    "twitterDescription": "Home Generative Agent 리뷰: 엔티티 제어, 자동화 작성, 카메라 분석을 하는 Home Assistant용 오픈소스 LLM 에이전트. Ollama 또는 클라우드 모델 지원. 자료가 확인한 것과 확인하지 못한 것.",
    "audience": "스마트홈에 대화형 AI 에이전트를 도입하려는 Home Assistant 사용자로, Home Generative Agent가 무엇을 하고 무엇이 필요하며 자료가 어떤 부분을 비워 두었는지 알고 싶은 분.",
    "readTime": "6분 읽기",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Home Generative Agent 리뷰",
    "targetKeywords": [
      "home generative agent 리뷰",
      "home generative agent",
      "home assistant ai 에이전트",
      "home assistant langgraph",
      "home assistant ollama 에이전트",
      "home assistant llm 자동화",
      "hacs home generative agent"
    ],
    "current_models_mentioned": [
      "Qwen",
      "gpt-oss"
    ],
    "current_hardware_mentioned": [
      "GPU"
    ],
    "leadAnswerBlock": "**Home Generative Agent(버전 3.44.10, 2026년 10월 23일 공개)는 Assist에 LLM 에이전트를 추가하는 무료 MIT 라이선스 Home Assistant 통합이며, 로컬 Ollama 서버나 클라우드 모델과 함께 동작합니다.** 실행 중인 Home Assistant, pgvector가 있는 PostgreSQL 데이터베이스, 그리고 하나 이상의 모델 제공자가 필요합니다.",
    "quickAnswerTop": {
      "ko": {
        "question": "Home Generative Agent를 완전히 로컬에서 실행할 수 있습니까?",
        "answer": "README에 따르면 가능합니다. 모델 제공자로 사용자 네트워크 안의 Ollama나 OpenAI 호환 서버를 쓰면 어떤 데이터도 집 밖으로 나갈 필요가 없습니다. 클라우드 대안은 OpenAI, Gemini, Anthropic입니다.",
        "bullets": [
          "에이전트는 Assist에 공개한 엔티티만 볼 수 있습니다.",
          "채팅 요청으로 Home Assistant 자동화를 작성하고 등록할 수 있습니다.",
          "카메라 분석에는 비전 모델이 필요하고, 얼굴 인식에는 외부 얼굴 서비스도 필요합니다.",
          "Home Assistant 2026.8.0 이상이 필요합니다."
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
        "label": "Home Generative Agent란?",
        "anchor": "what-is-home-generative-agent"
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
        "label": "이런 분께 적합합니다",
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
        "label": "결론",
        "anchor": "verdict"
      },
      {
        "label": "자료 출처",
        "anchor": "sources"
      },
      {
        "label": "함께 읽으면 좋은 글",
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
            "text": "Home Generative Agent는 집과 대화하고, 일상 언어로 자동화를 만들고, 카메라 이미지에 대해 질문할 수 있는 Home Assistant용 오픈소스 AI 에이전트입니다."
          },
          {
            "type": "plain-terms",
            "text": "HACS로 기존 Home Assistant에 설치하고, 로컬 Ollama 서버 같은 언어 모델을 연결한 뒤, Assist에서 대화 에이전트로 선택합니다."
          }
        ],
        "items": [
          "유지보수: 최신 안정 버전 3.44.10은 2026년 10월 23일에 나왔고 메인 브랜치는 2026년 11월 1일에 업데이트되어, 방치된 프로젝트 경고는 해당되지 않습니다.",
          "모델: 포함된 모델은 없으며 Ollama, OpenAI 호환 서버, OpenAI, Gemini, Anthropic을 지원합니다.",
          "비용: 소프트웨어는 MIT 라이선스로 무료이며, 클라우드 제공자를 고른 경우에만 그쪽에서 비용이 청구됩니다.",
          "설치: 단일 설치 프로그램이 아니라 데이터베이스 앱, HACS, 모델 제공자에 걸친 여러 단계가 필요합니다.",
          "개발자: 회사가 아닌 개인 개발자(GitHub 사용자 goruck)입니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이 리뷰는 2026년 11월 1일에 확인한 GitHub 저장소, 문서, Home Assistant 커뮤니티 스레드를 바탕으로 합니다. PromptQuorum은 Home Generative Agent를 설치·실행·측정하지 않았으므로 신뢰성, 속도, 작성되는 자동화의 품질은 평가하지 않았습니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-home-generative-agent",
        "title": "Home Generative Agent란?",
        "content": [
          "**Home Generative Agent는 사용자의 말을 언어 모델에 전달하는 데 그치지 않고 집에 직접 작용하는 Home Assistant용 AI 에이전트입니다.** README에 따르면 LangGraph를 기반으로 하며, 도구를 사용해 엔티티를 제어하고, 기록을 조회하고, 카메라를 확인하고, 실제 자동화를 작성합니다.",
          "HACS로 설치하는 Home Assistant 커스텀 통합이며 독립 실행형 앱이 아닙니다. Sentinel 엔진은 고정 규칙으로 보안 문제를 감시하며, README는 그 부분에서 언어 모델이 조언만 할 뿐 아무것도 작동시키지 않는다고 밝히지만, 이는 개발자의 설명이며 확인하지 않았습니다. 커뮤니티 스레드의 첫 글은 GitHub보다 오래된 버전을 표시하고 있어, 이 리뷰는 GitHub를 따랐습니다."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "구하는 방법",
        "content": [
          "**Home Generative Agent는 기존 Home Assistant에 HACS로 설치하며, 독립 실행형 다운로드는 없습니다.**"
        ],
        "columns": [
          "방법",
          "구하는 방법"
        ],
        "rows": [
          {
            "방법": "HACS(권장)",
            "구하는 방법": "기본 저장소에 등록된 HACS에서 검색하거나 [README](https://github.com/goruck/home-generative-agent)의 「Open in HACS」 버튼을 사용합니다. 그다음 Home Assistant를 재시작하고 통합을 추가합니다"
          },
          {
            "방법": "수동 설치",
            "구하는 방법": "[GitHub Releases](https://github.com/goruck/home-generative-agent/releases)에서 home_generative_agent.zip을 받아 설치 가이드대로 Home Assistant에 복사합니다"
          },
          {
            "방법": "데이터베이스",
            "구하는 방법": "Home Assistant OS 또는 Supervised의 [PostgreSQL with pgvector 앱](https://github.com/goruck/addon-postgres-pgvector), 또는 직접 운영하는 PostgreSQL 서버"
          },
          {
            "방법": "웹사이트",
            "구하는 방법": "[Home Assistant 커뮤니티 스레드](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923), GitHub에 기재된 프로젝트 홈페이지"
          },
          {
            "방법": "문서",
            "구하는 방법": "[저장소의 가이드](https://github.com/goruck/home-generative-agent/tree/main/docs): 설치, 설정, Sentinel, 카메라, 아키텍처"
          },
          {
            "방법": "개인정보 처리방침",
            "구하는 방법": "저장소와 커뮤니티 스레드에서 찾지 못했습니다"
          },
          {
            "방법": "소스 코드",
            "구하는 방법": "[github.com/goruck/home-generative-agent](https://github.com/goruck/home-generative-agent), MIT 라이선스"
          }
        ],
        "note": "검토한 버전: 3.44.10, GitHub Releases에 따르면 2026년 10월 23일 공개. 사전 릴리스인 3.45.0-beta.5도 있으나 검토하지 않았습니다. Home Assistant 쪽 단계는 웹 인터페이스에서 진행하지만 Ollama 모델을 받을 때는 터미널을 쓰며, 서비스 전체를 연결하는 데는 단일 설치보다 많은 노력이 듭니다."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "요구 사항",
        "content": [
          "**Home Assistant 2026.8.0 이상, HACS, pgvector가 있는 PostgreSQL 데이터베이스, 그리고 하나 이상의 모델 제공자가 필요합니다.**"
        ],
        "columns": [
          "항목",
          "자료의 설명"
        ],
        "rows": [
          {
            "항목": "Home Assistant",
            "자료의 설명": "최소 2026.8.0(HGA 3.43.3부터)이며, 2026.9와 2026.10도 지원으로 명시되어 있습니다"
          },
          {
            "항목": "데이터베이스",
            "자료의 설명": "pgvector가 있는 PostgreSQL. 없으면 메모리 내 저장만 되어 장기 기억, 얼굴 인식, 기준선 이상 탐지를 쓸 수 없습니다"
          },
          {
            "항목": "모델 제공자",
            "자료의 설명": "OpenAI, Gemini, Anthropic, Ollama 또는 모든 OpenAI 호환 서버"
          },
          {
            "항목": "로컬 모델(선택)",
            "자료의 설명": "가이드는 gpt-oss, qwen3:8b, qwen3-vl:8b 같은 Ollama 모델을 나열하지만 최소 RAM이나 VRAM은 제시하지 않습니다"
          },
          {
            "항목": "얼굴 인식(선택)",
            "자료의 설명": "별도로 구축하는 외부 얼굴 서비스"
          },
          {
            "항목": "음성(선택)",
            "자료의 설명": "OpenAI 음성 API 또는 [Speaches](https://speaches.ai/) 같은 OpenAI 호환 로컬 서버. 대형 faster-whisper 모델에는 VRAM 약 2 GB가 권장됩니다"
          }
        ],
        "note": "어떤 하드웨어가 어떤 모델에 맞는지는 이 이상 밝혀져 있지 않습니다. 그것은 Home Generative Agent가 아니라 모델 서버에 달려 있습니다."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "시작하는 방법",
        "content": [
          "**단계는 README와 설치 가이드를 따릅니다. PromptQuorum이 직접 실행해 보지는 않았습니다.**"
        ],
        "numberedItems": [
          {
            "title": "데이터베이스 준비",
            "whyItMatters": "Home Assistant OS 또는 Supervised에 PostgreSQL with pgvector 앱을 설치하거나, 통합이 직접 운영하는 PostgreSQL 서버를 가리키게 합니다."
          },
          {
            "title": "HACS로 설치하고 재시작",
            "whyItMatters": "HACS에서 Home Generative Agent를 설치하고 Home Assistant를 재시작한 뒤, 설정 → 기기 및 서비스에서 통합을 추가합니다."
          },
          {
            "title": "모델 제공자 추가",
            "whyItMatters": "+ Model Provider를 누르고 Edge(Ollama 또는 OpenAI 호환 서버) 또는 Cloud(OpenAI, Gemini, Anthropic)를 선택합니다."
          },
          {
            "title": "Setup 실행",
            "whyItMatters": "+ Setup을 누르고 권장 기본값으로 모든 기능을 켜는 Basic 또는 기능별로 설정하는 Advanced를 선택합니다."
          },
          {
            "title": "대화 에이전트로 선택",
            "whyItMatters": "설정 → 음성 어시스턴트에서 Home Generative Agent를 선택한 뒤, 보여 주려는 엔티티를 공개합니다."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "자료로 확인된 기능",
        "content": [
          "**아래 항목은 모두 README나 문서에서 가져온 것이며, 여기서 직접 테스트한 것은 없습니다.**"
        ],
        "items": [
          "**대화.** 공개된 엔티티에 대한 자연어 제어와 상태 질문이 가능하며, 응답은 스트리밍으로 표시됩니다.",
          "**자동화.** 채팅으로 자동화를 작성하고 등록합니다. 엔티티 ID와 서비스 호출은 먼저 Home Assistant에서 검증되며, 선택 사항인 Critical Action PIN을 켜면 문을 열거나 차고 문을 여는 자동화는 보류됩니다.",
          "**카메라.** 카메라 이미지를 설명하고 움직임 감지로 시작되는 분석을 수행합니다. README에는 Axis, ring-mqtt를 통한 Ring, Reolink, UniFi Protect와 움직임 엔티티를 제공하는 모든 카메라가 언급됩니다.",
          "**Sentinel.** 규칙 기반 이상 탐지와 Home Assistant 환경의 보안 감사를 제공하며, 휴대폰 알림과 선택적 언어 모델 분류가 있습니다.",
          "**기억과 도구.** pgvector의 장기 의미 기억, 그리고 MCP 서버나 Home Assistant LLM API를 통한 웹 검색 같은 추가 도구.",
          "**음성.** Assist 파이프라인용 자체 음성 인식·음성 합성 제공자로, OpenAI 또는 로컬 서버를 사용합니다."
        ],
        "note": "문서에는 영어, 체코어, 러시아어, 튀르키예어, 중국어 간체 인터페이스 언어가 나열되어 있습니다. 모든 기능은 개발자의 설명입니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "데이터 흐름과 개인정보",
        "content": [
          "**데이터가 어디로 가는지는 선택한 모델 제공자에 달려 있습니다. README에 따르면 Home Generative Agent는 Ollama나 OpenAI 호환 서버로 완전히 로컬에서 실행할 수 있고, 클라우드 제공자는 대안입니다.**",
          "클라우드 제공자를 쓰면 프롬프트와 분석을 요청한 카메라 이미지가 해당 제공자의 정책에 따라 그쪽으로 전달됩니다. README는 Sentinel과 감사 도구가 언어 모델에 무엇인가를 보여 주기 전에 MAC 주소, IP 주소, 클라이언트 호스트 이름을 가린다고 덧붙입니다. 얼굴 인식은 별도의 얼굴 서비스를 사용하며, 그 저장 방식은 이 리뷰에서 살펴보지 않았습니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이는 개발자의 설명이며 감사 결과가 아닙니다. PromptQuorum은 코드나 네트워크 트래픽을 검사하지 않았습니다."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "이런 분께 적합합니다",
        "items": [
          "**여유 GPU 머신이 있는 Home Assistant 사용자.** Ollama로 자기 네트워크 안에 머무는 대화 에이전트를 원하는 분.",
          "**일상 언어 요청으로 자동화 초안을 만들고 싶은 분.** 자동화 편집기에서 하나씩 검토할 분.",
          "**지원되는 카메라 소유자.** 직접 호스팅하는 비전 모델로 카메라에 무엇이 보이는지 묻고 싶은 분."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 내용",
        "items": [
          "**신뢰성.** 에이전트가 올바른 엔티티를 찾거나 올바른 자동화를 작성하는 빈도는 테스트하지 않았습니다.",
          "**안전 관련 설명.** Critical Action PIN과, Sentinel에서 모델이 아무것도 작동시키지 않는다는 설명은 개발자의 설명입니다.",
          "**로컬 모델 품질.** 가이드는 모델을 권장하지만 로컬 하드웨어에서의 도구 사용이나 비전 성능 벤치마크는 공개하지 않습니다.",
          "**데이터 처리.** 얼굴 서비스와 클라우드 제공자로 가는 데이터 흐름은 검사하지 않았습니다."
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
            "앱": "[Home Assistant Assist](/ko/power-local-llm/home-assistant-assist-review)",
            "플랫폼": "Home Assistant(웹, Android, iOS)",
            "가격 / 라이선스": "무료 / Apache-2.0",
            "핵심 차이": "음성 파이프라인 내장, LLM 에이전트는 선택 추가"
          },
          {
            "앱": "[nanobot](/ko/power-local-llm/nanobot-review)",
            "플랫폼": "Windows, macOS, Linux",
            "가격 / 라이선스": "무료 / MIT",
            "핵심 차이": "범용 셀프호스팅 에이전트, Home Assistant에 묶여 있지 않음"
          },
          {
            "앱": "[PicoClaw](/ko/power-local-llm/picoclaw-review)",
            "플랫폼": "Linux, macOS, Windows, Android",
            "가격 / 라이선스": "무료 / MIT",
            "핵심 차이": "소형 범용 에이전트, Home Assistant에 묶여 있지 않음"
          }
        ],
        "note": "같은 스마트홈 분야에 속하는 것은 Home Assistant Assist뿐이며, nanobot과 PicoClaw는 범용 에이전트입니다. 선택하기 전에 각 앱의 최신 가격, 라이선스, 플랫폼을 해당 앱 페이지에서 확인하십시오."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "Home Generative Agent는 Home Assistant Assist를 대체합니까?",
            "a": "아닙니다. Assist 안에서 대화 에이전트로 선택하는 것이며, Assist 파이프라인에 자체 음성 인식·음성 합성 제공자를 추가할 수 있습니다."
          },
          {
            "q": "에이전트가 기기를 찾을 수 없다고 하는 이유는 무엇입니까?",
            "a": "에이전트는 Assist에 공개된 엔티티만 이름과 영역으로 찾습니다. 그래서 README는 엔티티를 공개하고 분명한 이름과 영역을 지정하라고 권합니다."
          },
          {
            "q": "Home Assistant Container나 Core에서도 동작합니까?",
            "a": "포함된 데이터베이스 앱은 Home Assistant OS 또는 Supervised가 필요하므로, Container나 Core에서는 설치 가이드가 pgvector가 있는 별도의 PostgreSQL 서버를 안내합니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "결론",
        "content": "Home Generative Agent는 기존 Home Assistant에, 로컬 Ollama 서버나 클라우드 모델로 동작하는 도구 사용형 AI 에이전트를 무료 MIT 라이선스로 더하는 방법이며, 활발히 유지보수되고 있습니다. 반면 설치는 여러 서비스에 걸쳐 있고, 많은 기능이 얼굴 서비스 같은 선택 구성 요소에 의존하며, PromptQuorum은 신뢰성, 개인정보 동작, 로컬 모델 품질을 테스트하지 않았습니다. HACS와 모델 서버에 익숙한 Home Assistant 사용자에게 적합하며, 잠금장치나 보안 자동화에 쓴다면 생성된 자동화를 하나하나 직접 확인해야 합니다."
      },
      "sources": {
        "id": "sources",
        "title": "자료 출처",
        "items": [
          "[GitHub의 Home Generative Agent](https://github.com/goruck/home-generative-agent) — README, MIT 라이선스, 커밋 기록. 2026년 11월 1일 확인.",
          "[설치 가이드](https://github.com/goruck/home-generative-agent/blob/main/docs/installation.md) — HACS 및 수동 설치, 선택 앱, Ollama 모델. 2026년 11월 1일 확인.",
          "[설정 가이드](https://github.com/goruck/home-generative-agent/blob/main/docs/configuration.md) — 모델 제공자, 음성, 도구, 옵션. 2026년 11월 1일 확인.",
          "[Home Generative Agent 릴리스](https://github.com/goruck/home-generative-agent/releases) — 2026년 10월 23일의 버전 3.44.10과 파일 목록. 2026년 11월 1일 확인.",
          "[Home Assistant 커뮤니티 스레드](https://community.home-assistant.io/t/a-generative-agent-integration-based-on-langchain-and-langgraph/864923) — 프로젝트 공지와 사용자 토론. 2026년 11월 1일 확인."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "함께 읽으면 좋은 글",
        "items": [
          "[Home Assistant Assist 리뷰](/ko/power-local-llm/home-assistant-assist-review) — 내장 음성 및 대화 파이프라인.",
          "[nanobot 리뷰](/ko/power-local-llm/nanobot-review) — 기억과 MCP 도구를 갖춘 셀프호스팅 개인 AI 에이전트 프레임워크.",
          "[PicoClaw 리뷰](/ko/power-local-llm/picoclaw-review) — 저가 보드용 소형 오픈소스 에이전트.",
          "[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록."
        ]
      }
    }
  },
}
