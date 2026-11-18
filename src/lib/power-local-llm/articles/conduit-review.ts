// Conduit Review: Open WebUI Client for iPhone and Android
// Slug: conduit-review
// Companion to: reins-review, phantasm-review, enchanted-review
// Sources: conduit.mobile, the App Store listing (id6749840287, iTunes lookup API incl. per-storefront prices), the Google Play listing
// (app.cogwheel.conduit), the GitHub repo cogwheel0/conduit (README, GPL-3.0 LICENSE, releases, commits, PRIVACY_POLICY.md), all checked
// 2026-11-17 — no hands-on testing. Storefront prices are per-storefront App Store prices, never converted.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-17",
    "dateModified": "2026-11-17",
    "next_refresh_due": "2027-05-17",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/conduit-review-hero-en.webp",
    "title": "Conduit Review: Mobile Client for Open WebUI and Your Own Models",
    "seoTitle": "Conduit Review: Open WebUI Client for iPhone and Android",
    "intro": "Conduit is an open-source iPhone and Android app that connects to a self-hosted Open WebUI server and, since version 4.0, also to OpenAI-compatible endpoints, Ollama, OpenRouter, LibreChat and Hermes agents. This review is based on the maker's [website](https://conduit.mobile), the [App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) and [Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit) listings, the privacy policy and the [GitHub repository](https://github.com/cogwheel0/conduit), checked on 17 November 2026; PromptQuorum has not tested the app hands-on.",
    "metaDescription": "Conduit review: native iPhone and Android client for Open WebUI, OpenAI-compatible endpoints, Ollama and Hermes agents. GPL-3.0, paid on iOS. Untested.",
    "twitterDescription": "Conduit review: a Flutter client for self-hosted Open WebUI that also connects to Ollama, OpenRouter and Hermes. What the sources confirm and what they do not.",
    "audience": "iPhone and Android users who self-host Open WebUI or run their own model endpoints and want to know what Conduit does, what it costs and which claims remain unconfirmed.",
    "readTime": "6 min read",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Conduit review",
    "targetKeywords": [
      "conduit review",
      "conduit open webui app",
      "open webui mobile app",
      "open webui client iphone",
      "open webui android app",
      "self-hosted ai chat app",
      "hermes agent mobile client"
    ],
    "current_models_mentioned": [
      "Apple Foundation Models"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "Android phone"
    ],
    "leadAnswerBlock": "**Conduit (version 4.3.1, released on 11 November 2026) is an open-source iPhone and Android client for Open WebUI that, since version 4.0, also talks directly to OpenAI-compatible endpoints, Ollama, OpenRouter and Hermes agents.** It is built with Flutter and licensed GPL-3.0. The developer says chats stay on the device and no backend of its own receives your content; every statement here comes from the maker's site, the store listings and the repository.",
    "quickAnswerTop": {
      "en": {
        "question": "Does Conduit need an Open WebUI server?",
        "answer": "No. The README says that as of version 4.0 Conduit works with or without an Open WebUI server: you can instead connect to an OpenAI-compatible endpoint, Ollama, OpenRouter or a Hermes agent. Apple's on-device model is an option on eligible iPhones.",
        "bullets": [
          "Per the README, the Open WebUI connection offers the full feature set, including folders, notes, channels and the workspace.",
          "Chats, notes and drafts are stored on the device, including offline, according to the maker.",
          "Voice input and a voice-call mode are listed in the features.",
          "The iOS version costs money on the App Store; the Android version is listed without a price."
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
        "label": "What Is Conduit?",
        "anchor": "what-is-conduit"
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
            "text": "Conduit is a native iPhone and Android client that connects to your own Open WebUI, LibreChat, Hermes or model endpoints instead of a cloud service of its own."
          },
          {
            "type": "plain-terms",
            "text": "You enter the address of the server or provider you already use, sign in, and chat from the phone with files, voice and the server's tools."
          }
        ],
        "items": [
          "Maintenance: version 4.3.1 was released on 11 November 2026 and the GitHub repository was last pushed on 17 November 2026, so no stale-project warning applies.",
          "Backends: six connection types, from Open WebUI and direct provider endpoints to Hermes agents and Apple's on-device model.",
          "Licence: GPL-3.0 source code; the store builds are separate downloads.",
          "Voice: voice input and a voice-call mode are listed, but not tested here.",
          "Maker: an individual developer, with no company or country named in the sources."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "This review is based on the maker's website, the store listings, the privacy policy and the GitHub repository, checked on 17 November 2026. PromptQuorum has not installed, run or benchmarked the app, so speed, voice quality and reliability are not assessed."
          }
        ]
      },
      "overview": {
        "id": "what-is-conduit",
        "title": "What Is Conduit?",
        "content": [
          "**Conduit is a native mobile client for iOS and Android that connects to a self-hosted Open WebUI server, to model providers directly, or to a self-hosted Hermes agent.** Both stores list it as \"Conduit: Open WebUI & AI\"; the App Store seller is Tunap Paul and the GitHub account is cogwheel0.",
          "The README describes it as built to fix mobile weak spots of Open WebUI, such as sign-in behind reverse proxies and streaming that drops when the app is in the background. Other products share the name Conduit; this review covers only the app at [conduit.mobile](https://conduit.mobile)."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Get It",
        "content": [
          "**Conduit is a store download for iPhone, iPad and Android, with the same builds also attached to GitHub Releases.**"
        ],
        "columns": [
          "Option",
          "How to get it"
        ],
        "rows": [
          {
            "Option": "iPhone and iPad",
            "How to get it": "[Conduit on the App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287), paid download, $3.99 on the US storefront"
          },
          {
            "Option": "Android",
            "How to get it": "[Conduit on Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit), listed with an Install button and no price"
          },
          {
            "Option": "Website",
            "How to get it": "[conduit.mobile](https://conduit.mobile)"
          },
          {
            "Option": "Privacy policy",
            "How to get it": "[PRIVACY_POLICY.md on GitHub](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md)"
          },
          {
            "Option": "Source code",
            "How to get it": "[github.com/cogwheel0/conduit](https://github.com/cogwheel0/conduit), GPL-3.0; releases include APK and IPA files"
          }
        ],
        "note": "Version reviewed: 4.3.1, released on 11 November 2026 per the App Store and GitHub; the iOS app is 122.6 MB. The website says Conduit has no paid tiers, while the App Store charges for the download; the sources do not explain the difference. Prices vary by storefront."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requirements",
        "content": [
          "**The website lists iOS 16.0 or later and Android 7.0 or later; Apple's on-device model needs iOS 26.**"
        ],
        "columns": [
          "Item",
          "What the sources say"
        ],
        "rows": [
          {
            "Item": "Operating system",
            "What the sources say": "iOS 16.0 or later; Android 7.0 (API 24) or later"
          },
          {
            "Item": "Apple models",
            "What the sources say": "On-device model: iOS 26 with Apple Intelligence; Private Cloud Compute: iOS 27 with Apple's entitlement"
          },
          {
            "Item": "Server mode",
            "What the sources say": "Your own Open WebUI (0.11 tracked), LibreChat 0.8.8 or newer (beta) or a Hermes server, reachable from the phone"
          },
          {
            "Item": "Account",
            "What the sources say": "None for Conduit itself; your server or provider may need one or an API key"
          },
          {
            "Item": "Memory and storage",
            "What the sources say": "No minimum stated; models run on your server, the provider or Apple's system"
          }
        ],
        "note": "Which phones run Apple's on-device model well is not covered by the sources."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "How to Get Started",
        "content": [
          "**The steps follow the README's own getting-started guide; PromptQuorum has not run them.**"
        ],
        "numberedItems": [
          {
            "title": "Install the app",
            "whyItMatters": "Get Conduit from the App Store or Google Play, then choose how you want to connect on first launch."
          },
          {
            "title": "Add a backend",
            "whyItMatters": "Enter the base URL of your Open WebUI server, or add an OpenAI-compatible or Ollama profile with its address and any API key or custom headers."
          },
          {
            "title": "Sign in",
            "whyItMatters": "Use username and password, LDAP, a manual JWT, SSO or OAuth, or the proxy login your deployment requires; direct connections need no account."
          },
          {
            "title": "Pick a model and chat",
            "whyItMatters": "Select a discovered model, then start chatting, attach files or images, and turn on voice or server-side tools where your backend offers them."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Confirmed by the Sources",
        "content": [
          "**Every item below comes from the website or the repository README; none has been independently tested.**"
        ],
        "items": [
          "**Connection types.** Open WebUI (chats, folders, notes, channels, workspace, tools, web search, image generation), LibreChat in beta, direct OpenAI-compatible endpoints (Chat Completions or Responses, LM Studio, Azure-style), native Ollama, OpenRouter, Hermes agents with live tool calls and approvals, and Apple's models.",
          "**Chat.** Token streaming over WebSocket, file and image attachments, conversation search, temporary chats, and native rendering of code, math, Mermaid diagrams and citations.",
          "**Voice.** Voice input with on-device or server speech recognition, plus a full voice-call mode.",
          "**Self-hosting sign-in.** Password, LDAP, JWT, SSO and OAuth, custom headers, and reverse-proxy flows for oauth2-proxy, Authelia, Authentik, Pangolin and Cloudflare Tunnel.",
          "**Phone integration.** Home-screen widgets on iOS and Android, a share sheet, iOS App Intents and Shortcuts, offline notes and optional push notifications."
        ],
        "note": "Server-dependent features such as channels, notes, web search and image generation appear only when your deployment exposes them, per the README."
      },
      "privacy": {
        "id": "privacy",
        "title": "Data Flow and Privacy",
        "content": [
          "**The privacy policy, effective 9 November 2026, says the app operates no backend that receives your content and includes no third-party analytics or advertising SDKs.** Messages, files, images and voice input go straight from the device to the server or provider you chose; credentials sit in the iOS Keychain or Android Keystore. By default a direct chat is also synced to your active Open WebUI server when you are signed in, and you can keep new direct chats on the device only.",
          "One developer-operated service exists: an optional push-notification relay that, per the policy, only carries encrypted notifications it cannot read and keeps no database or access logs. The Google Play build includes Firebase Cloud Messaging for push only; a FOSS Android build contains no Google services. The App Store listing shows \"Data Not Collected\", which Apple notes is unverified."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "These are the developer's declarations, not audit results. PromptQuorum has not inspected the app's network traffic or the Google Play data-safety section, and the policy names no company or country."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**Open WebUI self-hosters** who want a native phone client that copes with reverse-proxy sign-in.",
          "**People with several backends** who want one app for Open WebUI, Ollama, OpenRouter and Hermes.",
          "**Open-source-minded users** who prefer GPL-3.0 code they can read, with Android APKs outside the store."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Performance.** Streaming reliability, voice quality, battery use and behaviour behind a given reverse proxy are untested.",
          "**Price.** The site says free with no paid tiers, but the App Store charges; what the purchase includes beyond store access is not stated.",
          "**Mac app.** The README describes Conduit Desktop for Apple Silicon Macs, but none of the 100 most recent GitHub releases carried a desktop tag on 17 November 2026.",
          "**Beta and new providers.** LibreChat support is labelled beta, and the Apple on-device and Private Cloud Compute options depend on iOS 26 and iOS 27.",
          "**Maker identity.** The sources name an App Store seller and a GitHub account, but no company, address or country."
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
            "App": "Reins",
            "Platforms": "iPhone, iPad",
            "Price / license": "Free + Pro / closed source",
            "Key difference": "Ollama and LM Studio client that also runs MLX models on the device"
          },
          {
            "App": "Phantasm",
            "Platforms": "iPhone",
            "Price / license": "Free / licence not stated",
            "Key difference": "Chat client for your own Ollama, vLLM or llama.cpp server"
          },
          {
            "App": "Enchanted",
            "Platforms": "iPhone, Mac",
            "Price / license": "Free / Apache 2.0",
            "Key difference": "Ollama client that needs a separate Ollama server"
          }
        ],
        "note": "Confirm each app's current price, license and platforms on its own listing before choosing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "What does Conduit cost on different storefronts?",
            "a": "The App Store listing showed $3.99 in the United States, 3,99 € in Germany, Spain and France, ¥600 in Japan, ₩6,600 in South Korea and R$ 24,90 in Brazil on 17 November 2026. Google Play lists the app with an Install button and no price, and the GitHub releases attach APK and IPA files."
          },
          {
            "q": "Which models does Conduit run itself?",
            "a": "None of its own: models run on your server or provider. The exception is Apple's on-device model on eligible iOS 26 iPhones, which works offline with a 4K context window but has no image input or tool calling, per the README."
          },
          {
            "q": "Is there a Mac version?",
            "a": "The README describes Conduit Desktop for Apple Silicon Macs with macOS 14 or later, signed, notarized and updated through Sparkle. No desktop release was found on GitHub on 17 November 2026, so it is unconfirmed."
          },
          {
            "q": "Do push notifications send my chats through the developer?",
            "a": "Push is off until you enable it. The policy says the developer's relay passes only encrypted notifications it cannot read, and on Android you can use a UnifiedPush distributor so the relay is not involved."
          },
          {
            "q": "Which interface languages does Conduit support?",
            "a": "The README lists 14 locales: English, German, Spanish, French, Italian, Japanese, Korean, Dutch, Russian, Simplified and Traditional Chinese, Czech, Slovak and Polish. The App Store lists 12 languages."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Conduit is an actively updated, open-source way to reach a self-hosted Open WebUI server, or a direct model endpoint, from an iPhone or Android phone, with sign-in paths that suit real reverse-proxy setups. Against that, the sources leave open how it performs, why the iOS version is paid while the site says free, whether the Mac app is released, and who the maker is. It suits people who already run their own server and can try the Android build or read the code first; anyone needing audited privacy claims should treat the policy as a declaration, not proof."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Conduit website](https://conduit.mobile) — features, platforms, pricing statement and store links, checked 17 November 2026.",
          "[Conduit on the App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) — seller, price per storefront, version, size and privacy label, checked 17 November 2026.",
          "[Conduit on Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit) — install button, update date and download band, checked 17 November 2026.",
          "[Conduit on GitHub](https://github.com/cogwheel0/conduit) — README, GPL-3.0 licence file, releases and commits, checked 17 November 2026.",
          "[Conduit privacy policy](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md) — data flow, push relay and permissions, effective 9 November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[Reins Review](/power-local-llm/reins-review) — a chat client for your own Ollama or LM Studio server, with on-device MLX models since version 2.",
          "[Phantasm Review](/power-local-llm/phantasm-review) — a free iPhone chat client for your own Ollama, vLLM or llama.cpp server.",
          "[Enchanted Review](/power-local-llm/enchanted-review) — a free, Apache-2.0 Ollama client for iPhone and Mac.",
          "[LibreChat Review](/power-local-llm/librechat-review-2026) — a self-hosted chat server that Conduit can connect to in beta.",
          "[Best Local LLM Apps for iPhone](/power-local-llm/best-local-llm-apps-iphone-2026) — the roundup this review belongs to.",
          "[Best Local LLM Apps for Android](/power-local-llm/best-local-llm-apps-android-2026) — the Android roundup this review belongs to.",
          "[Local LLM Software Directory](/directory) — the full catalogue of local AI tools."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Conduit Review: Mobile Client for Open WebUI and Your Own Models",
      "description": "Conduit review: a native iPhone and Android client for Open WebUI, OpenAI-compatible endpoints, Ollama, OpenRouter and Hermes agents. Pricing, requirements, privacy and what the sources leave unconfirmed.",
      "url": "https://www.promptquorum.com/power-local-llm/conduit-review",
      "inLanguage": "en",
      "datePublished": "2026-11-17",
      "dateModified": "2026-11-17",
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
        "audienceType": "iPhone and Android users evaluating a mobile client for Open WebUI and self-hosted models"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Conduit"
        },
        {
          "@type": "Thing",
          "name": "Open WebUI"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "Self-hosted AI"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/power-local-llm/conduit-review"
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
          "name": "Conduit Review",
          "item": "https://www.promptquorum.com/power-local-llm/conduit-review"
        }
      ]
    }
  },
  de: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-17",
    "dateModified": "2026-11-17",
    "next_refresh_due": "2027-05-17",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/conduit-review-hero-de.webp",
    "title": "Conduit-Rezension: Mobiler Client für Open WebUI und eigene Modelle",
    "seoTitle": "Conduit-Rezension: Open-WebUI-Client für Android & iPhone",
    "intro": "Conduit ist eine Open-Source-App für iPhone und Android, die sich mit einem selbst gehosteten Open-WebUI-Server verbindet und seit Version 4.0 auch mit OpenAI-kompatiblen Endpunkten, Ollama, OpenRouter, LibreChat und Hermes-Agenten. Diese Rezension stützt sich auf die [Website](https://conduit.mobile) des Entwicklers, die Einträge im [App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) und bei [Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit), die Datenschutzerklärung und das [GitHub-Repository](https://github.com/cogwheel0/conduit), geprüft am 17. November 2026; PromptQuorum hat die App nicht praktisch getestet.",
    "metaDescription": "Conduit-Rezension: nativer iPhone-/Android-Client für Open WebUI, OpenAI-kompatible Endpunkte, Ollama, Hermes. GPL-3.0, iOS kostenpflichtig. Ungetestet.",
    "twitterDescription": "Conduit-Rezension: ein Flutter-Client für selbst gehostetes Open WebUI, der auch Ollama, OpenRouter und Hermes anbindet. Was die Quellen bestätigen und was nicht.",
    "audience": "iPhone- und Android-Nutzer, die Open WebUI selbst hosten oder eigene Modell-Endpunkte betreiben und wissen möchten, was Conduit leistet, was es kostet und welche Angaben unbestätigt bleiben.",
    "readTime": "6 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Conduit Rezension",
    "targetKeywords": [
      "conduit rezension",
      "conduit open webui app",
      "open webui mobile app",
      "open webui client iphone",
      "open webui android app",
      "selbst gehostete ki chat app",
      "hermes agent mobiler client"
    ],
    "current_models_mentioned": [
      "Apple Foundation Models"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "Android-Smartphone"
    ],
    "leadAnswerBlock": "**Conduit (Version 4.3.1, veröffentlicht am 11. November 2026) ist ein Open-Source-Client für iPhone und Android, der Open WebUI anbindet und seit Version 4.0 auch direkt mit OpenAI-kompatiblen Endpunkten, Ollama, OpenRouter und Hermes-Agenten spricht.** Die App ist mit Flutter gebaut und steht unter der GPL-3.0. Laut Entwickler bleiben Chats auf dem Gerät, und kein eigenes Backend erhält Ihre Inhalte; jede Aussage hier stammt von der Website des Entwicklers, den Store-Einträgen und dem Repository.",
    "quickAnswerTop": {
      "de": {
        "question": "Braucht Conduit einen Open-WebUI-Server?",
        "answer": "Nein. Laut README funktioniert Conduit seit Version 4.0 mit oder ohne Open-WebUI-Server: Stattdessen können Sie einen OpenAI-kompatiblen Endpunkt, Ollama, OpenRouter oder einen Hermes-Agenten anbinden. Auf geeigneten iPhones ist außerdem Apples On-Device-Modell wählbar.",
        "bullets": [
          "Laut README bietet die Open-WebUI-Verbindung den vollen Funktionsumfang, darunter Ordner, Notizen, Kanäle und den Arbeitsbereich.",
          "Chats, Notizen und Entwürfe liegen laut Entwickler auf dem Gerät, auch offline.",
          "Spracheingabe und ein Sprachanruf-Modus gehören zu den genannten Funktionen.",
          "Die iOS-Version kostet im App Store Geld; die Android-Version wird ohne Preis gelistet."
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
        "label": "Was ist Conduit?",
        "anchor": "what-is-conduit"
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
            "text": "Conduit ist ein nativer iPhone- und Android-Client, der sich mit Ihrem eigenen Open WebUI, LibreChat, Hermes oder Modell-Endpunkten verbindet, statt einen eigenen Cloud-Dienst zu betreiben."
          },
          {
            "type": "plain-terms",
            "text": "Sie tragen die Adresse des Servers oder Anbieters ein, den Sie ohnehin nutzen, melden sich an und chatten vom Telefon aus mit Dateien, Sprache und den Werkzeugen des Servers."
          }
        ],
        "items": [
          "Pflege: Version 4.3.1 erschien am 11. November 2026, das GitHub-Repository wurde zuletzt am 17. November 2026 aktualisiert; ein Warnhinweis für veraltete Projekte entfällt daher.",
          "Backends: sechs Verbindungsarten, von Open WebUI und direkten Anbieter-Endpunkten bis zu Hermes-Agenten und Apples On-Device-Modell.",
          "Lizenz: Quellcode unter GPL-3.0; die Store-Versionen sind eigene Downloads.",
          "Sprache: Spracheingabe und ein Sprachanruf-Modus sind aufgeführt, hier aber nicht getestet.",
          "Entwickler: eine Einzelperson; die Quellen nennen weder ein Unternehmen noch ein Land."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Diese Rezension stützt sich auf die Website des Entwicklers, die Store-Einträge, die Datenschutzerklärung und das GitHub-Repository, geprüft am 17. November 2026. PromptQuorum hat die App nicht installiert, ausgeführt oder gemessen; Geschwindigkeit, Sprachqualität und Zuverlässigkeit sind daher nicht bewertet."
          }
        ]
      },
      "overview": {
        "id": "what-is-conduit",
        "title": "Was ist Conduit?",
        "content": [
          "**Conduit ist ein nativer mobiler Client für iOS und Android, der sich mit einem selbst gehosteten Open-WebUI-Server, direkt mit Modellanbietern oder mit einem selbst gehosteten Hermes-Agenten verbindet.** Beide Stores führen ihn als „Conduit: Open WebUI & AI“; Verkäufer im App Store ist Tunap Paul, das GitHub-Konto heißt cogwheel0.",
          "Die README beschreibt die App als Antwort auf mobile Schwachstellen von Open WebUI, etwa die Anmeldung hinter Reverse-Proxys und Streaming, das im Hintergrund abbricht. Andere Produkte tragen ebenfalls den Namen Conduit; diese Rezension behandelt nur die App unter [conduit.mobile](https://conduit.mobile)."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Bezugsquelle",
        "content": [
          "**Conduit ist ein Store-Download für iPhone, iPad und Android; dieselben Builds hängen auch an den GitHub-Releases.**"
        ],
        "columns": [
          "Option",
          "Bezug"
        ],
        "rows": [
          {
            "Option": "iPhone und iPad",
            "Bezug": "[Conduit im App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287), kostenpflichtiger Download, 3,99 € im deutschen App Store"
          },
          {
            "Option": "Android",
            "Bezug": "[Conduit bei Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit), mit Installieren-Schaltfläche und ohne Preis gelistet"
          },
          {
            "Option": "Website",
            "Bezug": "[conduit.mobile](https://conduit.mobile)"
          },
          {
            "Option": "Datenschutzerklärung",
            "Bezug": "[PRIVACY_POLICY.md auf GitHub](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md)"
          },
          {
            "Option": "Quellcode",
            "Bezug": "[github.com/cogwheel0/conduit](https://github.com/cogwheel0/conduit), GPL-3.0; die Releases enthalten APK- und IPA-Dateien"
          }
        ],
        "note": "Geprüfte Version: 4.3.1, laut App Store und GitHub am 11. November 2026 veröffentlicht; die iOS-App umfasst 122,6 MB. Die Website nennt keine bezahlten Stufen, der App Store verlangt dagegen Geld für den Download; die Quellen erklären den Unterschied nicht. Preise unterscheiden sich je nach Store."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Anforderungen",
        "content": [
          "**Die Website nennt iOS 16.0 oder neuer und Android 7.0 oder neuer; Apples On-Device-Modell braucht iOS 26.**"
        ],
        "columns": [
          "Punkt",
          "Was die Quellen sagen"
        ],
        "rows": [
          {
            "Punkt": "Betriebssystem",
            "Was die Quellen sagen": "iOS 16.0 oder neuer; Android 7.0 (API 24) oder neuer"
          },
          {
            "Punkt": "Apple-Modelle",
            "Was die Quellen sagen": "On-Device-Modell: iOS 26 mit Apple Intelligence; Private Cloud Compute: iOS 27 mit Apples Berechtigung"
          },
          {
            "Punkt": "Server-Modus",
            "Was die Quellen sagen": "Ihr eigenes Open WebUI (0.11 unterstützt), LibreChat ab 0.8.8 (Beta) oder ein Hermes-Server, vom Telefon erreichbar"
          },
          {
            "Punkt": "Konto",
            "Was die Quellen sagen": "Keines für Conduit selbst; Ihr Server oder Anbieter verlangt eventuell eines oder einen API-Schlüssel"
          },
          {
            "Punkt": "Speicher",
            "Was die Quellen sagen": "Kein Minimum genannt; Modelle laufen auf Ihrem Server, beim Anbieter oder im System von Apple"
          }
        ],
        "note": "Auf welchen Telefonen Apples On-Device-Modell gut läuft, behandeln die Quellen nicht."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "So gelingt der Einstieg",
        "content": [
          "**Die Schritte folgen der Einstiegsanleitung der README; PromptQuorum hat sie nicht ausgeführt.**"
        ],
        "numberedItems": [
          {
            "title": "App installieren",
            "whyItMatters": "Laden Sie Conduit aus dem App Store oder von Google Play und wählen Sie beim ersten Start, wie Sie sich verbinden möchten."
          },
          {
            "title": "Backend hinzufügen",
            "whyItMatters": "Geben Sie die Basis-URL Ihres Open-WebUI-Servers ein oder legen Sie ein OpenAI-kompatibles oder Ollama-Profil mit Adresse und gegebenenfalls API-Schlüssel oder eigenen Headern an."
          },
          {
            "title": "Anmelden",
            "whyItMatters": "Nutzen Sie Benutzername und Passwort, LDAP, ein manuelles JWT, SSO oder OAuth oder die Proxy-Anmeldung Ihrer Umgebung; direkte Verbindungen brauchen kein Konto."
          },
          {
            "title": "Modell wählen und chatten",
            "whyItMatters": "Wählen Sie ein erkanntes Modell, starten Sie den Chat, hängen Sie Dateien oder Bilder an und aktivieren Sie Sprache oder serverseitige Werkzeuge, sofern Ihr Backend sie bietet."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Von den Quellen bestätigte Funktionen",
        "content": [
          "**Jeder Punkt stammt von der Website oder der README des Repositorys; keiner wurde unabhängig getestet.**"
        ],
        "items": [
          "**Verbindungsarten.** Open WebUI (Chats, Ordner, Notizen, Kanäle, Arbeitsbereich, Werkzeuge, Websuche, Bilderzeugung), LibreChat als Beta, direkte OpenAI-kompatible Endpunkte (Chat Completions oder Responses, LM Studio, Azure-Stil), natives Ollama, OpenRouter, Hermes-Agenten mit Live-Werkzeugaufrufen und Freigaben sowie Apples Modelle.",
          "**Chat.** Token-Streaming per WebSocket, Datei- und Bildanhänge, Konversationssuche, temporäre Chats und native Darstellung von Code, Formeln, Mermaid-Diagrammen und Quellenangaben.",
          "**Sprache.** Spracheingabe mit Spracherkennung auf dem Gerät oder auf dem Server sowie ein vollständiger Sprachanruf-Modus.",
          "**Anmeldung bei Self-Hosting.** Passwort, LDAP, JWT, SSO und OAuth, eigene Header sowie Reverse-Proxy-Abläufe für oauth2-proxy, Authelia, Authentik, Pangolin und Cloudflare Tunnel.",
          "**Einbindung ins Telefon.** Widgets auf dem Startbildschirm unter iOS und Android, Teilen-Menü, iOS-App-Intents und Kurzbefehle, Offline-Notizen und optionale Push-Benachrichtigungen."
        ],
        "note": "Laut README erscheinen serverabhängige Funktionen wie Kanäle, Notizen, Websuche und Bilderzeugung nur, wenn Ihre Installation sie bereitstellt."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenfluss und Datenschutz",
        "content": [
          "**Die Datenschutzerklärung, gültig ab 9. November 2026, sagt, dass die App kein Backend betreibt, das Ihre Inhalte erhält, und keine Analyse- oder Werbe-SDKs von Drittanbietern enthält.** Nachrichten, Dateien, Bilder und Spracheingaben gehen direkt vom Gerät an den gewählten Server oder Anbieter; Zugangsdaten liegen in der iOS-Keychain oder im Android-Keystore. Standardmäßig wird ein Direkt-Chat bei Anmeldung auch mit Ihrem aktiven Open-WebUI-Server synchronisiert; neue Direkt-Chats lassen sich nur auf dem Gerät behalten.",
          "Einen vom Entwickler betriebenen Dienst gibt es: ein optionales Push-Relay, das laut Erklärung nur verschlüsselte Benachrichtigungen weiterreicht, die es nicht lesen kann, und weder Datenbank noch Zugriffsprotokolle führt. Der Google-Play-Build enthält Firebase Cloud Messaging ausschließlich für Push; ein FOSS-Android-Build enthält keine Google-Dienste. Der App-Store-Eintrag zeigt „Daten werden nicht erhoben“, was laut Apple ungeprüft ist."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Das sind Angaben des Entwicklers, keine Prüfergebnisse. PromptQuorum hat weder den Netzwerkverkehr der App noch den Datensicherheitsbereich bei Google Play geprüft, und die Erklärung nennt weder Unternehmen noch Land."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen sich die App eignet",
        "items": [
          "**Open-WebUI-Selbsthoster**, die einen nativen Telefon-Client wollen, der mit Anmeldung hinter Reverse-Proxys zurechtkommt.",
          "**Nutzer mehrerer Backends**, die eine App für Open WebUI, Ollama, OpenRouter und Hermes möchten.",
          "**Open-Source-Fans**, die lesbaren GPL-3.0-Code und Android-APKs außerhalb des Stores schätzen."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht überprüfen konnten",
        "items": [
          "**Leistung.** Streaming-Zuverlässigkeit, Sprachqualität, Akkuverbrauch und das Verhalten hinter einem bestimmten Reverse-Proxy sind ungetestet.",
          "**Preis.** Die Website nennt die App kostenlos ohne bezahlte Stufen, der App Store verlangt aber Geld; was der Kauf über den Store-Zugang hinaus umfasst, steht nicht da.",
          "**Mac-App.** Die README beschreibt Conduit Desktop für Apple-Silicon-Macs, doch keines der 100 neuesten GitHub-Releases trug am 17. November 2026 ein Desktop-Tag.",
          "**Beta und neue Anbieter.** Die LibreChat-Unterstützung ist als Beta gekennzeichnet, und die Optionen Apple On-Device und Private Cloud Compute hängen von iOS 26 und iOS 27 ab.",
          "**Identität des Entwicklers.** Die Quellen nennen einen App-Store-Verkäufer und ein GitHub-Konto, aber kein Unternehmen, keine Adresse und kein Land."
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
            "App": "Reins",
            "Plattformen": "iPhone, iPad",
            "Preis / Lizenz": "Kostenlos + Pro / Closed Source",
            "Hauptunterschied": "Client für Ollama und LM Studio, der auch MLX-Modelle auf dem Gerät ausführt"
          },
          {
            "App": "Phantasm",
            "Plattformen": "iPhone",
            "Preis / Lizenz": "Kostenlos / Lizenz nicht genannt",
            "Hauptunterschied": "Chat-Client für Ihren eigenen Ollama-, vLLM- oder llama.cpp-Server"
          },
          {
            "App": "Enchanted",
            "Plattformen": "iPhone, Mac",
            "Preis / Lizenz": "Kostenlos / Apache 2.0",
            "Hauptunterschied": "Ollama-Client, der einen separaten Ollama-Server braucht"
          }
        ],
        "note": "Prüfen Sie vor der Wahl Preis, Lizenz und Plattformen jeder App im jeweiligen Eintrag."
      },
      "faq": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Was kostet Conduit in den verschiedenen Stores?",
            "a": "Der App-Store-Eintrag zeigte am 17. November 2026 3,99 $ in den USA, 3,99 € in Deutschland, Spanien und Frankreich, ¥600 in Japan, ₩6.600 in Südkorea und R$ 24,90 in Brasilien. Google Play führt die App mit Installieren-Schaltfläche und ohne Preis, und die GitHub-Releases enthalten APK- und IPA-Dateien."
          },
          {
            "q": "Welche Modelle führt Conduit selbst aus?",
            "a": "Keine eigenen: Modelle laufen auf Ihrem Server oder beim Anbieter. Die Ausnahme ist Apples On-Device-Modell auf geeigneten iPhones mit iOS 26, das laut README offline mit einem Kontext von 4K läuft, aber weder Bildeingabe noch Werkzeugaufrufe bietet."
          },
          {
            "q": "Gibt es eine Mac-Version?",
            "a": "Die README beschreibt Conduit Desktop für Apple-Silicon-Macs ab macOS 14, signiert, notarisiert und über Sparkle aktualisiert. Am 17. November 2026 war auf GitHub kein Desktop-Release zu finden, daher bleibt es unbestätigt."
          },
          {
            "q": "Leiten Push-Benachrichtigungen meine Chats über den Entwickler?",
            "a": "Push ist aus, bis Sie es aktivieren. Laut Erklärung reicht das Relay des Entwicklers nur verschlüsselte Benachrichtigungen weiter, die es nicht lesen kann; unter Android lässt sich ein UnifiedPush-Verteiler nutzen, sodass das Relay entfällt."
          },
          {
            "q": "Welche Oberflächensprachen unterstützt Conduit?",
            "a": "Die README nennt 14 Sprachversionen: Englisch, Deutsch, Spanisch, Französisch, Italienisch, Japanisch, Koreanisch, Niederländisch, Russisch, vereinfachtes und traditionelles Chinesisch, Tschechisch, Slowakisch und Polnisch. Der App Store führt 12 Sprachen."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "Conduit ist ein aktiv gepflegter Open-Source-Weg, von iPhone oder Android-Telefon auf einen selbst gehosteten Open-WebUI-Server oder einen direkten Modell-Endpunkt zuzugreifen, mit Anmeldewegen, die zu realen Reverse-Proxy-Setups passen. Dagegen lassen die Quellen offen, wie gut die App arbeitet, warum die iOS-Version kostet, während die Website „kostenlos“ sagt, ob die Mac-App veröffentlicht ist und wer dahintersteht. Sie eignet sich für Leute, die schon einen eigenen Server betreiben und zuerst den Android-Build testen oder den Code lesen können; wer geprüfte Datenschutzangaben braucht, sollte die Erklärung als Aussage, nicht als Beleg verstehen."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[Conduit-Website](https://conduit.mobile) — Funktionen, Plattformen, Preisangabe und Store-Links, geprüft am 17. November 2026.",
          "[Conduit im App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) — Verkäufer, Preis je Store, Version, Größe und Datenschutz-Label, geprüft am 17. November 2026.",
          "[Conduit bei Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit) — Installieren-Schaltfläche, Aktualisierungsdatum und Download-Bereich, geprüft am 17. November 2026.",
          "[Conduit auf GitHub](https://github.com/cogwheel0/conduit) — README, GPL-3.0-Lizenzdatei, Releases und Commits, geprüft am 17. November 2026.",
          "[Conduit-Datenschutzerklärung](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md) — Datenfluss, Push-Relay und Berechtigungen, gültig ab 9. November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[Reins-Rezension](/de/power-local-llm/reins-review) — ein Chat-Client für Ihren eigenen Ollama- oder LM-Studio-Server, seit Version 2 mit MLX-Modellen auf dem Gerät.",
          "[Phantasm-Rezension](/de/power-local-llm/phantasm-review) — ein kostenloser iPhone-Chat-Client für Ihren eigenen Ollama-, vLLM- oder llama.cpp-Server.",
          "[Enchanted-Rezension](/de/power-local-llm/enchanted-review) — ein kostenloser Ollama-Client unter Apache 2.0 für iPhone und Mac.",
          "[LibreChat-Rezension](/de/power-local-llm/librechat-review-2026) — ein selbst gehosteter Chat-Server, den Conduit als Beta anbinden kann.",
          "[Beste lokale LLM-Apps für das iPhone](/de/power-local-llm/best-local-llm-apps-iphone-2026) — der Vergleich, zu dem diese Rezension gehört.",
          "[Beste lokale LLM-Apps für Android](/de/power-local-llm/best-local-llm-apps-android-2026) — der Android-Vergleich, zu dem diese Rezension gehört.",
          "[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools."
        ]
      }
    }
  },
  es: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-17",
    "dateModified": "2026-11-17",
    "next_refresh_due": "2027-05-17",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/conduit-review-hero-es.webp",
    "title": "Reseña de Conduit: cliente móvil para Open WebUI y tus propios modelos",
    "seoTitle": "Reseña de Conduit: Open WebUI en iPhone y Android",
    "intro": "Conduit es una app de código abierto para iPhone y Android que se conecta a un servidor Open WebUI autoalojado y, desde la versión 4.0, también a endpoints compatibles con OpenAI, Ollama, OpenRouter, LibreChat y agentes Hermes. Esta reseña se basa en el [sitio web](https://conduit.mobile) del desarrollador, las fichas de la [App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) y de [Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit), la política de privacidad y el [repositorio de GitHub](https://github.com/cogwheel0/conduit), consultados el 17 de noviembre de 2026; PromptQuorum no ha probado la app en la práctica.",
    "metaDescription": "Reseña de Conduit: cliente de iPhone y Android para Open WebUI, endpoints compatibles con OpenAI, Ollama y Hermes. GPL-3.0, de pago en iOS. Sin probar.",
    "twitterDescription": "Reseña de Conduit: un cliente Flutter para Open WebUI autoalojado que también conecta con Ollama, OpenRouter y Hermes. Qué confirman las fuentes y qué no.",
    "audience": "Usuarios de iPhone y Android que alojan Open WebUI por su cuenta o usan sus propios endpoints de modelos y quieren saber qué hace Conduit, cuánto cuesta y qué afirmaciones siguen sin confirmar.",
    "readTime": "6 min de lectura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "reseña de Conduit",
    "targetKeywords": [
      "reseña conduit",
      "conduit app open webui",
      "app móvil open webui",
      "cliente open webui iphone",
      "open webui android app",
      "app de chat ia autoalojada",
      "cliente móvil hermes agent"
    ],
    "current_models_mentioned": [
      "Apple Foundation Models"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "teléfono Android"
    ],
    "leadAnswerBlock": "**Conduit (versión 4.3.1, publicada el 11 de noviembre de 2026) es un cliente de código abierto para iPhone y Android que se conecta a Open WebUI y, desde la versión 4.0, también habla directamente con endpoints compatibles con OpenAI, Ollama, OpenRouter y agentes Hermes.** Está hecha con Flutter y tiene licencia GPL-3.0. El desarrollador dice que los chats se quedan en el dispositivo y que ningún backend propio recibe tu contenido; todo lo que se afirma aquí procede del sitio del desarrollador, las fichas de las tiendas y el repositorio.",
    "quickAnswerTop": {
      "es": {
        "question": "¿Conduit necesita un servidor Open WebUI?",
        "answer": "No. El README dice que desde la versión 4.0 Conduit funciona con o sin servidor Open WebUI: puedes conectarte a un endpoint compatible con OpenAI, a Ollama, a OpenRouter o a un agente Hermes. En iPhone compatibles también se puede elegir el modelo en el dispositivo de Apple.",
        "bullets": [
          "Según el README, la conexión con Open WebUI ofrece el conjunto completo de funciones, con carpetas, notas, canales y el espacio de trabajo.",
          "Según el desarrollador, los chats, las notas y los borradores se guardan en el dispositivo, también sin conexión.",
          "La entrada de voz y un modo de llamada de voz figuran entre las funciones.",
          "La versión de iOS es de pago en la App Store; la de Android aparece sin precio."
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
        "label": "¿Qué es Conduit?",
        "anchor": "what-is-conduit"
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
            "text": "Conduit es un cliente nativo para iPhone y Android que se conecta a tu propio Open WebUI, LibreChat, Hermes o endpoints de modelos en lugar de a un servicio en la nube propio."
          },
          {
            "type": "plain-terms",
            "text": "Introduces la dirección del servidor o proveedor que ya usas, inicias sesión y chateas desde el móvil con archivos, voz y las herramientas del servidor."
          }
        ],
        "items": [
          "Mantenimiento: la versión 4.3.1 salió el 11 de noviembre de 2026 y el repositorio de GitHub recibió su último push el 17 de noviembre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.",
          "Backends: seis tipos de conexión, desde Open WebUI y endpoints directos de proveedores hasta agentes Hermes y el modelo en el dispositivo de Apple.",
          "Licencia: código fuente bajo GPL-3.0; las versiones de las tiendas son descargas aparte.",
          "Voz: figuran la entrada de voz y un modo de llamada de voz, pero aquí no se han probado.",
          "Desarrollador: una persona a título individual; las fuentes no nombran ninguna empresa ni país."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta reseña se basa en el sitio web del desarrollador, las fichas de las tiendas, la política de privacidad y el repositorio de GitHub, consultados el 17 de noviembre de 2026. PromptQuorum no ha instalado, ejecutado ni medido la app, así que no se evalúan la velocidad, la calidad de la voz ni la fiabilidad."
          }
        ]
      },
      "overview": {
        "id": "what-is-conduit",
        "title": "¿Qué es Conduit?",
        "content": [
          "**Conduit es un cliente móvil nativo para iOS y Android que se conecta a un servidor Open WebUI autoalojado, directamente a proveedores de modelos o a un agente Hermes autoalojado.** Ambas tiendas lo listan como «Conduit: Open WebUI & AI»; el vendedor en la App Store es Tunap Paul y la cuenta de GitHub es cogwheel0.",
          "El README lo presenta como una solución a puntos débiles móviles de Open WebUI, como el inicio de sesión tras proxies inversos y un streaming que se corta cuando la app pasa a segundo plano. Otros productos comparten el nombre Conduit; esta reseña cubre solo la app de [conduit.mobile](https://conduit.mobile)."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo conseguirla",
        "content": [
          "**Conduit es una descarga de tienda para iPhone, iPad y Android, y las mismas compilaciones también están adjuntas a las versiones de GitHub.**"
        ],
        "columns": [
          "Opción",
          "Cómo conseguirla"
        ],
        "rows": [
          {
            "Opción": "iPhone y iPad",
            "Cómo conseguirla": "[Conduit en la App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287), descarga de pago, 3,99 € en la tienda de España"
          },
          {
            "Opción": "Android",
            "Cómo conseguirla": "[Conduit en Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit), listada con botón Instalar y sin precio"
          },
          {
            "Opción": "Sitio web",
            "Cómo conseguirla": "[conduit.mobile](https://conduit.mobile)"
          },
          {
            "Opción": "Política de privacidad",
            "Cómo conseguirla": "[PRIVACY_POLICY.md en GitHub](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md)"
          },
          {
            "Opción": "Código fuente",
            "Cómo conseguirla": "[github.com/cogwheel0/conduit](https://github.com/cogwheel0/conduit), GPL-3.0; las versiones incluyen archivos APK e IPA"
          }
        ],
        "note": "Versión revisada: 4.3.1, publicada el 11 de noviembre de 2026 según la App Store y GitHub; la app de iOS pesa 122.6 MB. El sitio web dice que Conduit no tiene niveles de pago, mientras que la App Store cobra por la descarga; las fuentes no explican la diferencia. Los precios varían según la tienda."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**El sitio web indica iOS 16.0 o posterior y Android 7.0 o posterior; el modelo en el dispositivo de Apple requiere iOS 26.**"
        ],
        "columns": [
          "Elemento",
          "Qué dicen las fuentes"
        ],
        "rows": [
          {
            "Elemento": "Sistema operativo",
            "Qué dicen las fuentes": "iOS 16.0 o posterior; Android 7.0 (API 24) o posterior"
          },
          {
            "Elemento": "Modelos de Apple",
            "Qué dicen las fuentes": "Modelo en el dispositivo: iOS 26 con Apple Intelligence; Private Cloud Compute: iOS 27 con el permiso de Apple"
          },
          {
            "Elemento": "Modo servidor",
            "Qué dicen las fuentes": "Tu propio Open WebUI (0.11 admitido), LibreChat 0.8.8 o posterior (beta) o un servidor Hermes, accesible desde el móvil"
          },
          {
            "Elemento": "Cuenta",
            "Qué dicen las fuentes": "Ninguna para Conduit; tu servidor o proveedor puede exigir una o una clave de API"
          },
          {
            "Elemento": "Memoria y almacenamiento",
            "Qué dicen las fuentes": "No se indica un mínimo; los modelos se ejecutan en tu servidor, en el proveedor o en el sistema de Apple"
          }
        ],
        "note": "Las fuentes no tratan qué teléfonos ejecutan bien el modelo en el dispositivo de Apple."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Cómo empezar",
        "content": [
          "**Los pasos siguen la guía de inicio del propio README; PromptQuorum no los ha ejecutado.**"
        ],
        "numberedItems": [
          {
            "title": "Instala la app",
            "whyItMatters": "Descarga Conduit desde la App Store o Google Play y elige en el primer arranque cómo quieres conectarte."
          },
          {
            "title": "Añade un backend",
            "whyItMatters": "Introduce la URL base de tu servidor Open WebUI o crea un perfil compatible con OpenAI o de Ollama con su dirección y, si hace falta, clave de API o cabeceras personalizadas."
          },
          {
            "title": "Inicia sesión",
            "whyItMatters": "Usa usuario y contraseña, LDAP, un JWT manual, SSO u OAuth, o el inicio de sesión por proxy que exija tu despliegue; las conexiones directas no necesitan cuenta."
          },
          {
            "title": "Elige un modelo y chatea",
            "whyItMatters": "Selecciona un modelo detectado, empieza a chatear, adjunta archivos o imágenes y activa la voz o las herramientas del servidor si tu backend las ofrece."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones confirmadas por las fuentes",
        "content": [
          "**Cada punto procede del sitio web o del README del repositorio; ninguno se ha probado de forma independiente.**"
        ],
        "items": [
          "**Tipos de conexión.** Open WebUI (chats, carpetas, notas, canales, espacio de trabajo, herramientas, búsqueda web, generación de imágenes), LibreChat en beta, endpoints directos compatibles con OpenAI (Chat Completions o Responses, LM Studio, estilo Azure), Ollama nativo, OpenRouter, agentes Hermes con llamadas a herramientas en vivo y aprobaciones, y los modelos de Apple.",
          "**Chat.** Streaming de tokens por WebSocket, archivos e imágenes adjuntos, búsqueda en conversaciones, chats temporales y representación nativa de código, matemáticas, diagramas Mermaid y citas.",
          "**Voz.** Entrada de voz con reconocimiento en el dispositivo o en el servidor, además de un modo completo de llamada de voz.",
          "**Inicio de sesión en autoalojado.** Contraseña, LDAP, JWT, SSO y OAuth, cabeceras personalizadas y flujos de proxy inverso para oauth2-proxy, Authelia, Authentik, Pangolin y Cloudflare Tunnel.",
          "**Integración con el teléfono.** Widgets en la pantalla de inicio de iOS y Android, menú de compartir, App Intents y Atajos de iOS, notas sin conexión y notificaciones push opcionales."
        ],
        "note": "Según el README, las funciones que dependen del servidor, como canales, notas, búsqueda web y generación de imágenes, solo aparecen si tu despliegue las ofrece."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flujo de datos y privacidad",
        "content": [
          "**La política de privacidad, vigente desde el 9 de noviembre de 2026, dice que la app no opera ningún backend que reciba tu contenido y que no incluye SDK de analítica ni de publicidad de terceros.** Los mensajes, archivos, imágenes y entradas de voz van directamente del dispositivo al servidor o proveedor que elijas; las credenciales se guardan en el llavero de iOS o en el Keystore de Android. De forma predeterminada, un chat directo también se sincroniza con tu servidor Open WebUI activo cuando has iniciado sesión, y puedes dejar los chats directos nuevos solo en el dispositivo.",
          "Existe un servicio operado por el desarrollador: un relé opcional de notificaciones push que, según la política, solo transporta notificaciones cifradas que no puede leer y no conserva base de datos ni registros de acceso. La compilación de Google Play incluye Firebase Cloud Messaging solo para push; una compilación FOSS de Android no contiene servicios de Google. La ficha de la App Store muestra «Datos no recopilados», algo que Apple indica que no ha verificado."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Son declaraciones del desarrollador, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red de la app ni la sección de seguridad de los datos de Google Play, y la política no nombra ninguna empresa ni país."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quién es",
        "items": [
          "**Quienes alojan Open WebUI por su cuenta** y quieren un cliente nativo para el móvil que maneje el inicio de sesión tras proxies inversos.",
          "**Quienes usan varios backends** y quieren una sola app para Open WebUI, Ollama, OpenRouter y Hermes.",
          "**Usuarios afines al código abierto** que valoran código GPL-3.0 legible y APK de Android fuera de la tienda."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Rendimiento.** No se han probado la fiabilidad del streaming, la calidad de la voz, el consumo de batería ni el comportamiento tras un proxy inverso concreto.",
          "**Precio.** El sitio dice que es gratis y sin niveles de pago, pero la App Store cobra; no se indica qué incluye la compra más allá del acceso a la tienda.",
          "**App para Mac.** El README describe Conduit Desktop para Mac con Apple Silicon, pero ninguna de las 100 versiones más recientes de GitHub llevaba una etiqueta de escritorio el 17 de noviembre de 2026.",
          "**Beta y proveedores nuevos.** La compatibilidad con LibreChat figura como beta, y las opciones de Apple en el dispositivo y Private Cloud Compute dependen de iOS 26 e iOS 27.",
          "**Identidad del desarrollador.** Las fuentes nombran a un vendedor de la App Store y una cuenta de GitHub, pero ninguna empresa, dirección ni país."
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
            "App": "Reins",
            "Plataformas": "iPhone, iPad",
            "Precio / licencia": "Gratis + Pro / código cerrado",
            "Diferencia clave": "Cliente de Ollama y LM Studio que también ejecuta modelos MLX en el dispositivo"
          },
          {
            "App": "Phantasm",
            "Plataformas": "iPhone",
            "Precio / licencia": "Gratis / licencia sin indicar",
            "Diferencia clave": "Cliente de chat para tu propio servidor Ollama, vLLM o llama.cpp"
          },
          {
            "App": "Enchanted",
            "Plataformas": "iPhone, Mac",
            "Precio / licencia": "Gratis / Apache 2.0",
            "Diferencia clave": "Cliente de Ollama que necesita un servidor Ollama aparte"
          }
        ],
        "note": "Antes de decidir, confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿Cuánto cuesta Conduit en distintas tiendas?",
            "a": "La ficha de la App Store mostraba el 17 de noviembre de 2026 3,99 $ en Estados Unidos, 3,99 € en Alemania, España y Francia, ¥600 en Japón, ₩6,600 en Corea del Sur y R$ 24,90 en Brasil. Google Play lista la app con botón Instalar y sin precio, y las versiones de GitHub adjuntan archivos APK e IPA."
          },
          {
            "q": "¿Qué modelos ejecuta Conduit por sí misma?",
            "a": "Ninguno propio: los modelos se ejecutan en tu servidor o proveedor. La excepción es el modelo en el dispositivo de Apple en iPhone compatibles con iOS 26, que funciona sin conexión con una ventana de contexto de 4K, pero sin entrada de imágenes ni llamadas a herramientas, según el README."
          },
          {
            "q": "¿Hay una versión para Mac?",
            "a": "El README describe Conduit Desktop para Mac con Apple Silicon y macOS 14 o posterior, firmada, notarizada y actualizada con Sparkle. El 17 de noviembre de 2026 no se encontró ninguna versión de escritorio en GitHub, así que no está confirmada."
          },
          {
            "q": "¿Las notificaciones push envían mis chats a través del desarrollador?",
            "a": "El push está desactivado hasta que lo actives. Según la política, el relé del desarrollador solo transporta notificaciones cifradas que no puede leer, y en Android puedes usar un distribuidor UnifiedPush para que el relé no intervenga."
          },
          {
            "q": "¿Qué idiomas de interfaz admite Conduit?",
            "a": "El README lista 14 idiomas: inglés, alemán, español, francés, italiano, japonés, coreano, neerlandés, ruso, chino simplificado y tradicional, checo, eslovaco y polaco. La App Store lista 12 idiomas."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "Conduit es una forma de código abierto y con actualizaciones activas de llegar desde un iPhone o un móvil Android a un servidor Open WebUI autoalojado, o a un endpoint de modelo directo, con vías de inicio de sesión pensadas para configuraciones reales con proxy inverso. En contra, las fuentes dejan abierto cómo rinde, por qué la versión de iOS es de pago cuando el sitio dice que es gratis, si la app para Mac está publicada y quién está detrás. Encaja con quienes ya ejecutan su propio servidor y pueden probar primero la compilación de Android o leer el código; quien necesite afirmaciones de privacidad auditadas debe tomar la política como una declaración, no como una prueba."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Sitio web de Conduit](https://conduit.mobile) — funciones, plataformas, declaración de precio y enlaces a las tiendas, consultado el 17 de noviembre de 2026.",
          "[Conduit en la App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) — vendedor, precio por tienda, versión, tamaño y etiqueta de privacidad, consultado el 17 de noviembre de 2026.",
          "[Conduit en Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit) — botón de instalación, fecha de actualización y rango de descargas, consultado el 17 de noviembre de 2026.",
          "[Conduit en GitHub](https://github.com/cogwheel0/conduit) — README, archivo de licencia GPL-3.0, versiones y commits, consultado el 17 de noviembre de 2026.",
          "[Política de privacidad de Conduit](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md) — flujo de datos, relé push y permisos, vigente desde el 9 de noviembre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Reseña de Reins](/es/power-local-llm/reins-review) — un cliente de chat para tu propio servidor Ollama o LM Studio, con modelos MLX en el dispositivo desde la versión 2.",
          "[Reseña de Phantasm](/es/power-local-llm/phantasm-review) — un cliente de chat gratuito para iPhone para tu propio servidor Ollama, vLLM o llama.cpp.",
          "[Reseña de Enchanted](/es/power-local-llm/enchanted-review) — un cliente de Ollama gratuito y con licencia Apache 2.0 para iPhone y Mac.",
          "[Reseña de LibreChat](/es/power-local-llm/librechat-review-2026) — un servidor de chat autoalojado al que Conduit puede conectarse en beta.",
          "[Mejores apps de LLM locales para iPhone](/es/power-local-llm/best-local-llm-apps-iphone-2026) — la comparativa a la que pertenece esta reseña.",
          "[Mejores apps de LLM locales para Android](/es/power-local-llm/best-local-llm-apps-android-2026) — la comparativa de Android a la que pertenece esta reseña.",
          "[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA local."
        ]
      }
    }
  },
  fr: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-17",
    "dateModified": "2026-11-17",
    "next_refresh_due": "2027-05-17",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/conduit-review-hero-fr.webp",
    "title": "Test de Conduit : client mobile pour Open WebUI et vos propres modèles",
    "seoTitle": "Test de Conduit : client Open WebUI pour iPhone et Android",
    "intro": "Conduit est une appli open source pour iPhone et Android qui se connecte à un serveur Open WebUI auto-hébergé et, depuis la version 4.0, aussi à des points d’accès compatibles OpenAI, Ollama, OpenRouter, LibreChat et des agents Hermes. Ce test s’appuie sur le [site web](https://conduit.mobile) du développeur, les fiches de l’[App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) et de [Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit), la politique de confidentialité et le [dépôt GitHub](https://github.com/cogwheel0/conduit), consultés le 17 novembre 2026 ; PromptQuorum n’a pas testé l’appli en pratique.",
    "metaDescription": "Test de Conduit : client natif iPhone et Android pour Open WebUI, points d’accès compatibles OpenAI, Ollama et Hermes. GPL-3.0, payant sur iOS.",
    "twitterDescription": "Test de Conduit : un client Flutter pour Open WebUI auto-hébergé qui se connecte aussi à Ollama, OpenRouter et Hermes. Ce que confirment les sources et ce qu’elles ne confirment pas.",
    "audience": "Utilisateurs d’iPhone et d’Android qui auto-hébergent Open WebUI ou exploitent leurs propres points d’accès de modèles et veulent savoir ce que fait Conduit, ce qu’il coûte et quelles affirmations restent non confirmées.",
    "readTime": "6 min de lecture",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "test Conduit",
    "targetKeywords": [
      "test conduit",
      "conduit appli open webui",
      "appli mobile open webui",
      "client open webui iphone",
      "open webui android appli",
      "appli chat ia auto-hébergée",
      "client mobile hermes agent"
    ],
    "current_models_mentioned": [
      "Apple Foundation Models"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "smartphone Android"
    ],
    "leadAnswerBlock": "**Conduit (version 4.3.1, publiée le 11 novembre 2026) est un client open source pour iPhone et Android qui se connecte à Open WebUI et, depuis la version 4.0, dialogue aussi directement avec des points d’accès compatibles OpenAI, Ollama, OpenRouter et des agents Hermes.** Elle est développée avec Flutter et sous licence GPL-3.0. Le développeur affirme que les conversations restent sur l’appareil et qu’aucun serveur à lui ne reçoit vos contenus ; chaque affirmation ici provient du site du développeur, des fiches des stores et du dépôt.",
    "quickAnswerTop": {
      "fr": {
        "question": "Conduit a-t-il besoin d’un serveur Open WebUI ?",
        "answer": "Non. Le README indique que, depuis la version 4.0, Conduit fonctionne avec ou sans serveur Open WebUI : vous pouvez vous connecter à un point d’accès compatible OpenAI, à Ollama, à OpenRouter ou à un agent Hermes. Le modèle sur l’appareil d’Apple est une option sur les iPhone compatibles.",
        "bullets": [
          "Selon le README, la connexion à Open WebUI offre l’ensemble des fonctions, avec dossiers, notes, canaux et espace de travail.",
          "Selon le développeur, les conversations, notes et brouillons sont stockés sur l’appareil, y compris hors ligne.",
          "La saisie vocale et un mode appel vocal figurent parmi les fonctions.",
          "La version iOS est payante sur l’App Store ; la version Android est listée sans prix."
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
        "label": "Qu’est-ce que Conduit ?",
        "anchor": "what-is-conduit"
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
            "text": "Conduit est un client natif iPhone et Android qui se connecte à votre propre Open WebUI, LibreChat, Hermes ou à vos points d’accès de modèles, plutôt qu’à un service cloud maison."
          },
          {
            "type": "plain-terms",
            "text": "Vous saisissez l’adresse du serveur ou du fournisseur que vous utilisez déjà, vous vous connectez et vous discutez depuis le téléphone avec fichiers, voix et outils du serveur."
          }
        ],
        "items": [
          "Maintenance : la version 4.3.1 est sortie le 11 novembre 2026 et le dépôt GitHub a reçu son dernier push le 17 novembre 2026 ; aucun avertissement de projet abandonné ne s’applique.",
          "Serveurs : six types de connexion, d’Open WebUI et des points d’accès directs de fournisseurs aux agents Hermes et au modèle sur l’appareil d’Apple.",
          "Licence : code source sous GPL-3.0 ; les versions des stores sont des téléchargements distincts.",
          "Voix : la saisie vocale et un mode appel vocal sont annoncés, mais non testés ici.",
          "Éditeur : un développeur individuel ; les sources ne nomment ni société ni pays."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce test s’appuie sur le site web du développeur, les fiches des stores, la politique de confidentialité et le dépôt GitHub, consultés le 17 novembre 2026. PromptQuorum n’a ni installé, ni exécuté, ni mesuré l’appli ; la vitesse, la qualité de la voix et la fiabilité ne sont donc pas évaluées."
          }
        ]
      },
      "overview": {
        "id": "what-is-conduit",
        "title": "Qu’est-ce que Conduit ?",
        "content": [
          "**Conduit est un client mobile natif pour iOS et Android qui se connecte à un serveur Open WebUI auto-hébergé, directement à des fournisseurs de modèles ou à un agent Hermes auto-hébergé.** Les deux stores le listent sous « Conduit : Open WebUI & AI » ; le vendeur sur l’App Store est Tunap Paul et le compte GitHub est cogwheel0.",
          "Le README la présente comme une réponse aux points faibles mobiles d’Open WebUI, comme la connexion derrière des proxys inverses et un streaming qui se coupe quand l’appli passe en arrière-plan. D’autres produits portent aussi le nom Conduit ; ce test ne couvre que l’appli de [conduit.mobile](https://conduit.mobile)."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Où l’obtenir",
        "content": [
          "**Conduit est un téléchargement de store pour iPhone, iPad et Android, et les mêmes versions sont aussi jointes aux publications GitHub.**"
        ],
        "columns": [
          "Option",
          "Comment l’obtenir"
        ],
        "rows": [
          {
            "Option": "iPhone et iPad",
            "Comment l’obtenir": "[Conduit sur l’App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287), téléchargement payant, 3,99 € sur le store français"
          },
          {
            "Option": "Android",
            "Comment l’obtenir": "[Conduit sur Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit), listée avec un bouton Installer et sans prix"
          },
          {
            "Option": "Site web",
            "Comment l’obtenir": "[conduit.mobile](https://conduit.mobile)"
          },
          {
            "Option": "Politique de confidentialité",
            "Comment l’obtenir": "[PRIVACY_POLICY.md sur GitHub](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md)"
          },
          {
            "Option": "Code source",
            "Comment l’obtenir": "[github.com/cogwheel0/conduit](https://github.com/cogwheel0/conduit), GPL-3.0 ; les publications incluent des fichiers APK et IPA"
          }
        ],
        "note": "Version testée : 4.3.1, publiée le 11 novembre 2026 selon l’App Store et GitHub ; l’appli iOS pèse 122.6 Mo. Le site indique que Conduit n’a pas d’offre payante, alors que l’App Store fait payer le téléchargement ; les sources n’expliquent pas l’écart. Les prix varient selon le store."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Configuration requise",
        "content": [
          "**Le site indique iOS 16.0 ou ultérieur et Android 7.0 ou ultérieur ; le modèle sur l’appareil d’Apple exige iOS 26.**"
        ],
        "columns": [
          "Élément",
          "Ce que disent les sources"
        ],
        "rows": [
          {
            "Élément": "Système d’exploitation",
            "Ce que disent les sources": "iOS 16.0 ou ultérieur ; Android 7.0 (API 24) ou ultérieur"
          },
          {
            "Élément": "Modèles d’Apple",
            "Ce que disent les sources": "Modèle sur l’appareil : iOS 26 avec Apple Intelligence ; Private Cloud Compute : iOS 27 avec l’autorisation d’Apple"
          },
          {
            "Élément": "Mode serveur",
            "Ce que disent les sources": "Votre propre Open WebUI (0.11 suivi), LibreChat 0.8.8 ou ultérieur (bêta) ou un serveur Hermes, joignable depuis le téléphone"
          },
          {
            "Élément": "Compte",
            "Ce que disent les sources": "Aucun pour Conduit lui-même ; votre serveur ou fournisseur peut en exiger un ou une clé d’API"
          },
          {
            "Élément": "Mémoire et stockage",
            "Ce que disent les sources": "Aucun minimum indiqué ; les modèles tournent sur votre serveur, chez le fournisseur ou dans le système d’Apple"
          }
        ],
        "note": "Les sources ne disent pas quels téléphones font bien tourner le modèle sur l’appareil d’Apple."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Pour bien démarrer",
        "content": [
          "**Les étapes suivent le guide de démarrage du README ; PromptQuorum ne les a pas exécutées.**"
        ],
        "numberedItems": [
          {
            "title": "Installer l’appli",
            "whyItMatters": "Téléchargez Conduit depuis l’App Store ou Google Play, puis choisissez au premier lancement comment vous connecter."
          },
          {
            "title": "Ajouter un serveur",
            "whyItMatters": "Saisissez l’URL de base de votre serveur Open WebUI ou créez un profil compatible OpenAI ou Ollama avec son adresse et, si besoin, une clé d’API ou des en-têtes personnalisés."
          },
          {
            "title": "Se connecter",
            "whyItMatters": "Utilisez identifiant et mot de passe, LDAP, un JWT saisi à la main, SSO ou OAuth, ou la connexion par proxy qu’exige votre déploiement ; les connexions directes n’ont pas besoin de compte."
          },
          {
            "title": "Choisir un modèle et discuter",
            "whyItMatters": "Sélectionnez un modèle détecté, lancez la conversation, joignez fichiers ou images et activez la voix ou les outils côté serveur si votre serveur les propose."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions confirmées par les sources",
        "content": [
          "**Chaque point provient du site web ou du README du dépôt ; aucun n’a été testé de façon indépendante.**"
        ],
        "items": [
          "**Types de connexion.** Open WebUI (conversations, dossiers, notes, canaux, espace de travail, outils, recherche web, génération d’images), LibreChat en bêta, points d’accès directs compatibles OpenAI (Chat Completions ou Responses, LM Studio, style Azure), Ollama natif, OpenRouter, agents Hermes avec appels d’outils en direct et validations, et les modèles d’Apple.",
          "**Chat.** Streaming de tokens par WebSocket, pièces jointes fichiers et images, recherche dans les conversations, conversations temporaires et rendu natif du code, des formules, des diagrammes Mermaid et des citations.",
          "**Voix.** Saisie vocale avec reconnaissance sur l’appareil ou sur le serveur, plus un mode appel vocal complet.",
          "**Connexion en auto-hébergement.** Mot de passe, LDAP, JWT, SSO et OAuth, en-têtes personnalisés et parcours de proxy inverse pour oauth2-proxy, Authelia, Authentik, Pangolin et Cloudflare Tunnel.",
          "**Intégration au téléphone.** Widgets sur l’écran d’accueil d’iOS et d’Android, feuille de partage, App Intents et Raccourcis iOS, notes hors ligne et notifications push facultatives."
        ],
        "note": "Selon le README, les fonctions qui dépendent du serveur, comme les canaux, les notes, la recherche web et la génération d’images, n’apparaissent que si votre déploiement les expose."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flux de données et confidentialité",
        "content": [
          "**La politique de confidentialité, en vigueur depuis le 9 novembre 2026, indique que l’appli n’exploite aucun serveur qui reçoit vos contenus et ne contient aucun SDK d’analyse ou de publicité tiers.** Messages, fichiers, images et saisies vocales vont directement de l’appareil au serveur ou au fournisseur choisi ; les identifiants sont conservés dans le Trousseau iOS ou le Keystore Android. Par défaut, une conversation directe est aussi synchronisée avec votre serveur Open WebUI actif lorsque vous êtes connecté, et vous pouvez garder les nouvelles conversations directes uniquement sur l’appareil.",
          "Un service exploité par le développeur existe : un relais facultatif de notifications push qui, selon la politique, ne transporte que des notifications chiffrées qu’il ne peut pas lire et ne tient ni base de données ni journaux d’accès. La version Google Play inclut Firebase Cloud Messaging uniquement pour le push ; une version Android FOSS ne contient aucun service Google. La fiche de l’App Store affiche « Données non collectées », ce qu’Apple indique ne pas avoir vérifié."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce sont des déclarations du développeur, non des résultats d’audit. PromptQuorum n’a inspecté ni le trafic réseau de l’appli ni la section sécurité des données de Google Play, et la politique ne nomme ni société ni pays."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui s’adresse l’appli",
        "items": [
          "**Les auto-hébergeurs d’Open WebUI** qui veulent un client natif pour le téléphone gérant la connexion derrière des proxys inverses.",
          "**Les utilisateurs de plusieurs serveurs** qui veulent une seule appli pour Open WebUI, Ollama, OpenRouter et Hermes.",
          "**Les amateurs d’open source** qui apprécient un code GPL-3.0 lisible et des APK Android hors du store."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n’avons pas pu vérifier",
        "items": [
          "**Performances.** La fiabilité du streaming, la qualité de la voix, la consommation de batterie et le comportement derrière un proxy inverse donné n’ont pas été testés.",
          "**Prix.** Le site dit gratuit et sans offre payante, mais l’App Store fait payer ; ce que l’achat inclut au-delà de l’accès au store n’est pas indiqué.",
          "**Appli Mac.** Le README décrit Conduit Desktop pour les Mac Apple Silicon, mais aucune des 100 publications GitHub les plus récentes ne portait de balise desktop le 17 novembre 2026.",
          "**Bêta et nouveaux fournisseurs.** Le support de LibreChat est qualifié de bêta, et les options Apple sur l’appareil et Private Cloud Compute dépendent d’iOS 26 et d’iOS 27.",
          "**Identité du développeur.** Les sources nomment un vendeur de l’App Store et un compte GitHub, mais ni société, ni adresse, ni pays."
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
            "Appli": "Reins",
            "Plateformes": "iPhone, iPad",
            "Prix / licence": "Gratuit + Pro / code fermé",
            "Différence clé": "Client Ollama et LM Studio qui exécute aussi des modèles MLX sur l’appareil"
          },
          {
            "Appli": "Phantasm",
            "Plateformes": "iPhone",
            "Prix / licence": "Gratuit / licence non indiquée",
            "Différence clé": "Client de chat pour votre propre serveur Ollama, vLLM ou llama.cpp"
          },
          {
            "Appli": "Enchanted",
            "Plateformes": "iPhone, Mac",
            "Prix / licence": "Gratuit / Apache 2.0",
            "Différence clé": "Client Ollama qui nécessite un serveur Ollama distinct"
          }
        ],
        "note": "Avant de choisir, vérifiez le prix, la licence et les plateformes actuels de chaque appli sur sa propre fiche."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "Combien coûte Conduit selon les stores ?",
            "a": "La fiche de l’App Store affichait le 17 novembre 2026 3,99 $ aux États-Unis, 3,99 € en Allemagne, en Espagne et en France, ¥600 au Japon, ₩6,600 en Corée du Sud et R$ 24,90 au Brésil. Google Play liste l’appli avec un bouton Installer et sans prix, et les publications GitHub joignent des fichiers APK et IPA."
          },
          {
            "q": "Quels modèles Conduit exécute-t-il lui-même ?",
            "a": "Aucun en propre : les modèles tournent sur votre serveur ou chez le fournisseur. L’exception est le modèle sur l’appareil d’Apple sur les iPhone compatibles sous iOS 26, qui fonctionne hors ligne avec une fenêtre de contexte de 4K mais sans entrée d’images ni appels d’outils, selon le README."
          },
          {
            "q": "Existe-t-il une version Mac ?",
            "a": "Le README décrit Conduit Desktop pour les Mac Apple Silicon sous macOS 14 ou ultérieur, signée, notarisée et mise à jour via Sparkle. Aucune publication desktop n’a été trouvée sur GitHub le 17 novembre 2026 ; elle n’est donc pas confirmée."
          },
          {
            "q": "Les notifications push font-elles transiter mes conversations par le développeur ?",
            "a": "Le push est désactivé tant que vous ne l’activez pas. Selon la politique, le relais du développeur ne transporte que des notifications chiffrées qu’il ne peut pas lire, et sous Android vous pouvez utiliser un distributeur UnifiedPush pour que le relais n’intervienne pas."
          },
          {
            "q": "Quelles langues d’interface Conduit prend-il en charge ?",
            "a": "Le README liste 14 langues : anglais, allemand, espagnol, français, italien, japonais, coréen, néerlandais, russe, chinois simplifié et traditionnel, tchèque, slovaque et polonais. L’App Store en liste 12."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Conduit est un moyen open source, mis à jour activement, d’atteindre depuis un iPhone ou un téléphone Android un serveur Open WebUI auto-hébergé ou un point d’accès de modèle direct, avec des parcours de connexion adaptés aux configurations réelles derrière proxy inverse. En revanche, les sources laissent ouvert son niveau de performance, la raison pour laquelle la version iOS est payante alors que le site dit gratuit, la publication ou non de l’appli Mac et l’identité de son auteur. Elle convient à ceux qui exploitent déjà leur propre serveur et peuvent d’abord essayer la version Android ou lire le code ; qui exige des garanties de confidentialité auditées doit considérer la politique comme une déclaration, non comme une preuve."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Site web de Conduit](https://conduit.mobile) — fonctions, plateformes, mention du prix et liens des stores, consulté le 17 novembre 2026.",
          "[Conduit sur l’App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) — vendeur, prix par store, version, taille et étiquette de confidentialité, consulté le 17 novembre 2026.",
          "[Conduit sur Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit) — bouton d’installation, date de mise à jour et tranche de téléchargements, consulté le 17 novembre 2026.",
          "[Conduit sur GitHub](https://github.com/cogwheel0/conduit) — README, fichier de licence GPL-3.0, publications et commits, consulté le 17 novembre 2026.",
          "[Politique de confidentialité de Conduit](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md) — flux de données, relais push et autorisations, en vigueur depuis le 9 novembre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "À lire aussi",
        "items": [
          "[Test de Reins](/fr/power-local-llm/reins-review) — un client de chat pour votre propre serveur Ollama ou LM Studio, avec des modèles MLX sur l’appareil depuis la version 2.",
          "[Test de Phantasm](/fr/power-local-llm/phantasm-review) — un client de chat gratuit pour iPhone destiné à votre propre serveur Ollama, vLLM ou llama.cpp.",
          "[Test d’Enchanted](/fr/power-local-llm/enchanted-review) — un client Ollama gratuit sous licence Apache 2.0 pour iPhone et Mac.",
          "[Test de LibreChat](/fr/power-local-llm/librechat-review-2026) — un serveur de chat auto-hébergé auquel Conduit peut se connecter en bêta.",
          "[Meilleures applis de LLM locaux pour iPhone](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le comparatif auquel appartient ce test.",
          "[Meilleures applis de LLM locaux pour Android](/fr/power-local-llm/best-local-llm-apps-android-2026) — le comparatif Android auquel appartient ce test.",
          "[Annuaire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale."
        ]
      }
    }
  },
  ja: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-17",
    "dateModified": "2026-11-17",
    "next_refresh_due": "2027-05-17",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/conduit-review-hero-ja.webp",
    "title": "Conduitレビュー：Open WebUIと自前モデル向けのモバイルクライアント",
    "seoTitle": "Conduitレビュー：Open WebUI対応のスマホアプリ",
    "intro": "Conduitは、セルフホストのOpen WebUIサーバーに接続し、バージョン4.0からはOpenAI互換エンドポイント、Ollama、OpenRouter、LibreChat、Hermesエージェントにも接続できる、iPhone・Android向けのオープンソースアプリです。このレビューは、開発者の[公式サイト](https://conduit.mobile)、[App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287)と[Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit)の掲載情報、プライバシーポリシー、[GitHubリポジトリ](https://github.com/cogwheel0/conduit)に基づき、2026年11月17日に確認しました。PromptQuorumはアプリを実機で検証していません。",
    "metaDescription": "Conduitのレビュー。Open WebUI、OpenAI互換エンドポイント、Ollama、Hermesに接続するiPhone・Android向けネイティブクライアント。GPL-3.0でiOSは有料。未検証。",
    "twitterDescription": "Conduitのレビュー。セルフホストのOpen WebUI向けFlutterクライアントで、Ollama、OpenRouter、Hermesにも接続。情報源が確認できる点とできない点。",
    "audience": "Open WebUIをセルフホストしている、または自前のモデルエンドポイントを運用していて、Conduitでできること、費用、未確認の点を知りたいiPhone・Androidユーザー。",
    "readTime": "6分で読める",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Conduit レビュー",
    "targetKeywords": [
      "conduit レビュー",
      "conduit open webui アプリ",
      "open webui スマホアプリ",
      "open webui iphone クライアント",
      "open webui android アプリ",
      "セルフホスト ai チャットアプリ",
      "hermes agent モバイルクライアント"
    ],
    "current_models_mentioned": [
      "Apple Foundation Models"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "Androidスマートフォン"
    ],
    "leadAnswerBlock": "**Conduit（バージョン4.3.1、2026年11月11日公開）は、Open WebUIに接続し、バージョン4.0からはOpenAI互換エンドポイント、Ollama、OpenRouter、Hermesエージェントとも直接やり取りできる、iPhone・Android向けのオープンソースクライアントです。**Flutter製で、ライセンスはGPL-3.0です。開発者はチャットが端末内に残り、コンテンツを受け取る独自バックエンドはないと説明しています。ここでの記述はすべて、開発者の公式サイト、ストアの掲載情報、リポジトリに基づきます。",
    "quickAnswerTop": {
      "ja": {
        "question": "ConduitにはOpen WebUIサーバーが必要ですか。",
        "answer": "不要です。READMEによれば、バージョン4.0からConduitはOpen WebUIサーバーの有無にかかわらず動作し、OpenAI互換エンドポイント、Ollama、OpenRouter、Hermesエージェントに接続できます。対応するiPhoneではAppleのオンデバイスモデルも選べます。",
        "bullets": [
          "READMEによれば、Open WebUI接続ではフォルダー、ノート、チャンネル、ワークスペースを含む全機能が使えます。",
          "開発者によれば、チャット、ノート、下書きはオフラインでも端末内に保存されます。",
          "音声入力と音声通話モードが機能として挙げられています。",
          "iOS版はApp Storeで有料で、Android版は価格なしで掲載されています。"
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
        "label": "Conduitとは",
        "anchor": "what-is-conduit"
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
            "text": "Conduitは、独自のクラウドサービスではなく、自分のOpen WebUI、LibreChat、Hermes、モデルエンドポイントに接続するiPhone・Android向けネイティブクライアントです。"
          },
          {
            "type": "plain-terms",
            "text": "すでに使っているサーバーやプロバイダーのアドレスを入力してサインインすると、スマートフォンからファイル、音声、サーバー側のツールを使ってチャットできます。"
          }
        ],
        "items": [
          "メンテナンス：バージョン4.3.1は2026年11月11日に公開され、GitHubリポジトリの最終プッシュは2026年11月17日のため、更新停滞の警告は不要です。",
          "接続先：Open WebUIや直接のプロバイダーエンドポイントから、HermesエージェントやAppleのオンデバイスモデルまで、6種類です。",
          "ライセンス：ソースコードはGPL-3.0で、ストア版は別のダウンロードです。",
          "音声：音声入力と音声通話モードが挙げられていますが、ここでは検証していません。",
          "開発元：個人開発者で、情報源には企業名も国も記載されていません。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "このレビューは、2026年11月17日に確認した開発者の公式サイト、ストアの掲載情報、プライバシーポリシー、GitHubリポジトリに基づきます。PromptQuorumはアプリをインストール・実行・計測していないため、速度、音声品質、信頼性は評価していません。"
          }
        ]
      },
      "overview": {
        "id": "what-is-conduit",
        "title": "Conduitとは",
        "content": [
          "**Conduitは、セルフホストのOpen WebUIサーバー、モデルプロバイダー、またはセルフホストのHermesエージェントに接続する、iOS・Android向けのネイティブモバイルクライアントです。**両ストアでの表記は「Conduit: Open WebUI & AI」で、App Storeの販売元はTunap Paul、GitHubアカウントはcogwheel0です。",
          "READMEは、リバースプロキシ配下のサインインや、アプリがバックグラウンドに回ると途切れるストリーミングなど、Open WebUIのモバイルでの弱点を解消するために作られたと説明しています。Conduitという名前の別製品もありますが、このレビューが扱うのは[conduit.mobile](https://conduit.mobile)のアプリだけです。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "入手方法",
        "content": [
          "**ConduitはiPhone、iPad、Android向けにストアで配布されており、同じビルドがGitHubのリリースにも添付されています。**"
        ],
        "columns": [
          "項目",
          "入手方法"
        ],
        "rows": [
          {
            "項目": "iPhone・iPad",
            "入手方法": "[App StoreのConduit](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287)、有料ダウンロード、日本のApp Storeで¥600"
          },
          {
            "項目": "Android",
            "入手方法": "[Google PlayのConduit](https://play.google.com/store/apps/details?id=app.cogwheel.conduit)、インストールボタンがあり価格表示なし"
          },
          {
            "項目": "公式サイト",
            "入手方法": "[conduit.mobile](https://conduit.mobile)"
          },
          {
            "項目": "プライバシーポリシー",
            "入手方法": "[GitHub上のPRIVACY_POLICY.md](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md)"
          },
          {
            "項目": "ソースコード",
            "入手方法": "[github.com/cogwheel0/conduit](https://github.com/cogwheel0/conduit)、GPL-3.0。リリースにはAPKとIPAのファイルを含む"
          }
        ],
        "note": "レビュー対象のバージョンは4.3.1で、App StoreとGitHubによれば2026年11月11日に公開されました。iOSアプリのサイズは122.6 MBです。公式サイトは有料プランがないと述べていますが、App Storeではダウンロードが有料で、この違いは情報源では説明されていません。価格はストアによって異なります。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "動作要件",
        "content": [
          "**公式サイトはiOS 16.0以降とAndroid 7.0以降を挙げており、AppleのオンデバイスモデルにはiOS 26が必要です。**"
        ],
        "columns": [
          "項目",
          "情報源の記載"
        ],
        "rows": [
          {
            "項目": "OS",
            "情報源の記載": "iOS 16.0以降、Android 7.0（API 24）以降"
          },
          {
            "項目": "Appleのモデル",
            "情報源の記載": "オンデバイスモデル：Apple Intelligence対応のiOS 26。Private Cloud Compute：Appleの権限付きのiOS 27"
          },
          {
            "項目": "サーバーモード",
            "情報源の記載": "自分のOpen WebUI（0.11に追従）、LibreChat 0.8.8以降（ベータ）、またはHermesサーバー。スマートフォンから到達できること"
          },
          {
            "項目": "アカウント",
            "情報源の記載": "Conduit自体には不要。サーバーやプロバイダーがアカウントやAPIキーを求める場合があります"
          },
          {
            "項目": "メモリとストレージ",
            "情報源の記載": "最低要件の記載なし。モデルは自分のサーバー、プロバイダー、Appleのシステム上で動作します"
          }
        ],
        "note": "Appleのオンデバイスモデルがどの機種で快適に動くかは、情報源では扱われていません。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "使い始めるには",
        "content": [
          "**手順はREADME自身の導入ガイドに沿っています。PromptQuorumは実行していません。**"
        ],
        "numberedItems": [
          {
            "title": "アプリをインストールする",
            "whyItMatters": "App StoreまたはGoogle PlayからConduitを入手し、初回起動時に接続方法を選びます。"
          },
          {
            "title": "バックエンドを追加する",
            "whyItMatters": "Open WebUIサーバーのベースURLを入力するか、OpenAI互換またはOllamaのプロファイルをアドレスと必要に応じてAPIキーやカスタムヘッダーとともに追加します。"
          },
          {
            "title": "サインインする",
            "whyItMatters": "ユーザー名とパスワード、LDAP、手入力のJWT、SSO、OAuth、または環境が求めるプロキシ経由のログインを使います。直接接続にアカウントは不要です。"
          },
          {
            "title": "モデルを選んでチャットする",
            "whyItMatters": "検出されたモデルを選んでチャットを始め、ファイルや画像を添付し、バックエンドが対応していれば音声やサーバー側ツールを有効にします。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "情報源で確認できた機能",
        "content": [
          "**以下の項目はすべて公式サイトまたはリポジトリのREADMEに基づきます。独自の検証はしていません。**"
        ],
        "items": [
          "**接続方式。**Open WebUI（チャット、フォルダー、ノート、チャンネル、ワークスペース、ツール、Web検索、画像生成）、ベータ版のLibreChat、OpenAI互換エンドポイントへの直接接続（Chat CompletionsまたはResponses、LM Studio、Azure形式）、ネイティブのOllama、OpenRouter、ツール呼び出しをリアルタイムに表示し承認を求めるHermesエージェント、Appleのモデル。",
          "**チャット。**WebSocketによるトークンのストリーミング、ファイルと画像の添付、会話の検索、一時チャット、コード、数式、Mermaid図、引用のネイティブ表示。",
          "**音声。**端末上またはサーバーの音声認識による音声入力と、フル機能の音声通話モード。",
          "**セルフホスト環境のサインイン。**パスワード、LDAP、JWT、SSO、OAuth、カスタムヘッダー、oauth2-proxy、Authelia、Authentik、Pangolin、Cloudflare Tunnel向けのリバースプロキシ対応フロー。",
          "**スマートフォンとの連携。**iOSとAndroidのホーム画面ウィジェット、共有シート、iOSのApp IntentsとショートカットApp、オフラインのノート、任意のプッシュ通知。"
        ],
        "note": "READMEによれば、チャンネル、ノート、Web検索、画像生成などサーバー依存の機能は、環境が提供している場合にのみ表示されます。"
      },
      "privacy": {
        "id": "privacy",
        "title": "データの流れとプライバシー",
        "content": [
          "**2026年11月9日施行のプライバシーポリシーは、アプリがコンテンツを受け取るバックエンドを運用せず、第三者の分析・広告SDKも含まないと述べています。**メッセージ、ファイル、画像、音声入力は端末から選んだサーバーまたはプロバイダーへ直接送られ、認証情報はiOSのキーチェーンまたはAndroidのKeystoreに保存されます。既定では、サインイン中のダイレクトチャットは有効なOpen WebUIサーバーにも同期され、新しいダイレクトチャットは端末内だけに保つこともできます。",
          "開発者が運用するサービスが1つあります。任意のプッシュ通知リレーで、ポリシーによれば読み取れない暗号化済み通知だけを中継し、データベースもアクセスログも持ちません。Google Play版はプッシュ専用にFirebase Cloud Messagingを含み、FOSS版AndroidビルドにはGoogleのサービスが含まれません。App Storeの掲載には「データ収集なし」と表示されていますが、Appleはこれが未検証だと注記しています。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "これらは開発者の申告であり、監査結果ではありません。PromptQuorumはアプリの通信もGoogle Playのデータセーフティ欄も確認しておらず、ポリシーには企業名も国も記載されていません。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "おすすめできる人",
        "items": [
          "**Open WebUIをセルフホストしている人**で、リバースプロキシ配下のサインインに対応したネイティブクライアントがほしい人。",
          "**複数のバックエンドを使う人**で、Open WebUI、Ollama、OpenRouter、Hermesを1つのアプリで扱いたい人。",
          "**オープンソースを重視する人**で、読めるGPL-3.0のコードと、ストア外のAndroid APKを評価する人。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかった点",
        "items": [
          "**性能。**ストリーミングの安定性、音声品質、バッテリー消費、特定のリバースプロキシ配下での動作は未検証です。",
          "**価格。**公式サイトは無料で有料プランなしとしていますが、App Storeは有料です。購入にストアへのアクセス以外の内容が含まれるかは記載がありません。",
          "**Mac版。**READMEはApple Silicon向けのConduit Desktopを説明していますが、2026年11月17日時点でGitHubの最新100件のリリースにデスクトップ用タグはありませんでした。",
          "**ベータと新しい接続先。**LibreChat対応はベータと表示され、AppleのオンデバイスモデルとPrivate Cloud Computeはそれぞれ iOS 26 と iOS 27 に依存します。",
          "**開発者の身元。**情報源にはApp Storeの販売元とGitHubアカウントはありますが、企業名、住所、国は記載されていません。"
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
            "アプリ": "Reins",
            "対応環境": "iPhone・iPad",
            "価格／ライセンス": "無料＋Pro／クローズド",
            "主な違い": "端末上でMLXモデルも実行できるOllama・LM Studioクライアント"
          },
          {
            "アプリ": "Phantasm",
            "対応環境": "iPhone",
            "価格／ライセンス": "無料／ライセンス記載なし",
            "主な違い": "自分のOllama、vLLM、llama.cppサーバー向けのチャットクライアント"
          },
          {
            "アプリ": "Enchanted",
            "対応環境": "iPhone・Mac",
            "価格／ライセンス": "無料／Apache 2.0",
            "主な違い": "別途Ollamaサーバーが必要なOllamaクライアント"
          }
        ],
        "note": "選ぶ前に、各アプリの最新の価格、ライセンス、対応環境をそれぞれの掲載ページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "ストアごとにConduitの価格はいくらですか。",
            "a": "2026年11月17日のApp Storeの掲載では、米国で$3.99、ドイツ・スペイン・フランスで3,99 €、日本で¥600、韓国で₩6,600、ブラジルでR$ 24,90でした。Google Playではインストールボタンがあり価格表示はなく、GitHubのリリースにはAPKとIPAのファイルが添付されています。"
          },
          {
            "q": "Conduit自体はどのモデルを実行しますか。",
            "a": "独自のモデルはなく、モデルは自分のサーバーやプロバイダー上で動作します。例外はiOS 26対応のiPhoneでのAppleのオンデバイスモデルで、READMEによればオフラインで動き、コンテキストは4Kですが、画像入力とツール呼び出しには対応しません。"
          },
          {
            "q": "Mac版はありますか。",
            "a": "READMEは、macOS 14以降のApple Silicon Mac向けConduit Desktopを、署名・公証済みでSparkleで更新されると説明しています。2026年11月17日時点でGitHubにデスクトップ版のリリースは見つからず、未確認です。"
          },
          {
            "q": "プッシュ通知で自分のチャットが開発者を経由しますか。",
            "a": "プッシュは有効にするまでオフです。ポリシーによれば、開発者のリレーは読み取れない暗号化済み通知だけを中継し、AndroidではUnifiedPushディストリビューターを使ってリレーを介さないこともできます。"
          },
          {
            "q": "Conduitはどの表示言語に対応していますか。",
            "a": "READMEは14のロケール（英語、ドイツ語、スペイン語、フランス語、イタリア語、日本語、韓国語、オランダ語、ロシア語、簡体字・繁体字中国語、チェコ語、スロバキア語、ポーランド語）を挙げています。App Storeでは12言語です。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "総評",
        "content": "Conduitは、iPhoneやAndroidからセルフホストのOpen WebUIサーバーや直接のモデルエンドポイントに接続できる、積極的に更新されているオープンソースの手段で、実際のリバースプロキシ構成に合うサインイン方式を備えています。一方で、性能、サイトが無料と述べるのにiOS版が有料な理由、Mac版が公開されているか、開発者が誰かは、情報源では確認できません。すでに自分のサーバーを運用していて、先にAndroid版を試すかコードを読める人に向いています。監査済みのプライバシー保証が必要な人は、ポリシーを証明ではなく申告として扱ってください。"
      },
      "sources": {
        "id": "sources",
        "title": "情報源",
        "items": [
          "[Conduit公式サイト](https://conduit.mobile) — 機能、対応プラットフォーム、価格の記述、ストアへのリンク。2026年11月17日確認。",
          "[App StoreのConduit](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) — 販売元、ストア別価格、バージョン、サイズ、プライバシー表示。2026年11月17日確認。",
          "[Google PlayのConduit](https://play.google.com/store/apps/details?id=app.cogwheel.conduit) — インストールボタン、更新日、ダウンロード数の区分。2026年11月17日確認。",
          "[GitHubのConduit](https://github.com/cogwheel0/conduit) — README、GPL-3.0のライセンスファイル、リリース、コミット。2026年11月17日確認。",
          "[Conduitのプライバシーポリシー](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md) — データの流れ、プッシュリレー、権限。2026年11月9日施行。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[Reinsレビュー](/ja/power-local-llm/reins-review) — 自分のOllamaまたはLM Studioサーバー向けのチャットクライアントで、バージョン2から端末上のMLXモデルにも対応。",
          "[Phantasmレビュー](/ja/power-local-llm/phantasm-review) — 自分のOllama・vLLM・llama.cppサーバー向けの無料iPhoneチャットクライアント。",
          "[Enchantedレビュー](/ja/power-local-llm/enchanted-review) — iPhoneとMac向けの無料のApache 2.0 Ollamaクライアント。",
          "[LibreChatレビュー](/ja/power-local-llm/librechat-review-2026) — Conduitがベータで接続できるセルフホストのチャットサーバー。",
          "[iPhone向けローカルLLMアプリ比較](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — このレビューが属する比較記事。",
          "[Android向けローカルLLMアプリ比較](/ja/power-local-llm/best-local-llm-apps-android-2026) — このレビューが属するAndroid向けの比較記事。",
          "[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。"
        ]
      }
    }
  },
  pt: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-17",
    "dateModified": "2026-11-17",
    "next_refresh_due": "2027-05-17",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/conduit-review-hero-pt.webp",
    "title": "Análise do Conduit: cliente móvel para Open WebUI e seus próprios modelos",
    "seoTitle": "Análise do Conduit: Open WebUI no iPhone e Android",
    "intro": "O Conduit é um app de código aberto para iPhone e Android que se conecta a um servidor Open WebUI hospedado por você e, desde a versão 4.0, também a endpoints compatíveis com OpenAI, Ollama, OpenRouter, LibreChat e agentes Hermes. Esta análise se baseia no [site](https://conduit.mobile) do desenvolvedor, nas páginas da [App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) e do [Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit), na política de privacidade e no [repositório do GitHub](https://github.com/cogwheel0/conduit), consultados em 17 de novembro de 2026; a PromptQuorum não testou o app na prática.",
    "metaDescription": "Análise do Conduit: cliente para iPhone e Android do Open WebUI, endpoints compatíveis com OpenAI, Ollama e Hermes. GPL-3.0, pago no iOS. Não testado.",
    "twitterDescription": "Análise do Conduit: um cliente Flutter para Open WebUI hospedado por você que também conecta a Ollama, OpenRouter e Hermes. O que as fontes confirmam e o que não confirmam.",
    "audience": "Usuários de iPhone e Android que hospedam o Open WebUI por conta própria ou mantêm seus próprios endpoints de modelos e querem saber o que o Conduit faz, quanto custa e quais afirmações seguem sem confirmação.",
    "readTime": "6 min de leitura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "análise do Conduit",
    "targetKeywords": [
      "análise conduit",
      "conduit app open webui",
      "app móvel open webui",
      "cliente open webui iphone",
      "open webui android app",
      "app de chat com ia auto-hospedado",
      "cliente móvel hermes agent"
    ],
    "current_models_mentioned": [
      "Apple Foundation Models"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "celular Android"
    ],
    "leadAnswerBlock": "**O Conduit (versão 4.3.1, lançada em 11 de novembro de 2026) é um cliente de código aberto para iPhone e Android que se conecta ao Open WebUI e, desde a versão 4.0, também fala diretamente com endpoints compatíveis com OpenAI, Ollama, OpenRouter e agentes Hermes.** Ele é feito com Flutter e licenciado sob a GPL-3.0. O desenvolvedor diz que os chats ficam no aparelho e que nenhum backend próprio recebe o seu conteúdo; tudo o que se afirma aqui vem do site do desenvolvedor, das páginas das lojas e do repositório.",
    "quickAnswerTop": {
      "pt": {
        "question": "O Conduit precisa de um servidor Open WebUI?",
        "answer": "Não. O README diz que, desde a versão 4.0, o Conduit funciona com ou sem servidor Open WebUI: você pode se conectar a um endpoint compatível com OpenAI, ao Ollama, ao OpenRouter ou a um agente Hermes. Em iPhones compatíveis, o modelo no aparelho da Apple também é uma opção.",
        "bullets": [
          "Segundo o README, a conexão com o Open WebUI oferece o conjunto completo de recursos, com pastas, notas, canais e a área de trabalho.",
          "Segundo o desenvolvedor, chats, notas e rascunhos ficam armazenados no aparelho, inclusive offline.",
          "A entrada por voz e um modo de chamada de voz constam entre os recursos.",
          "A versão para iOS é paga na App Store; a versão para Android aparece sem preço."
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
        "label": "O que é o Conduit?",
        "anchor": "what-is-conduit"
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
            "text": "O Conduit é um cliente nativo para iPhone e Android que se conecta ao seu próprio Open WebUI, LibreChat, Hermes ou a endpoints de modelos, em vez de a um serviço de nuvem próprio."
          },
          {
            "type": "plain-terms",
            "text": "Você informa o endereço do servidor ou provedor que já usa, faz login e conversa pelo celular com arquivos, voz e as ferramentas do servidor."
          }
        ],
        "items": [
          "Manutenção: a versão 4.3.1 foi lançada em 11 de novembro de 2026 e o repositório do GitHub recebeu o último push em 17 de novembro de 2026, então nenhum aviso de projeto parado se aplica.",
          "Backends: seis tipos de conexão, do Open WebUI e de endpoints diretos de provedores a agentes Hermes e ao modelo no aparelho da Apple.",
          "Licença: código-fonte sob GPL-3.0; as versões das lojas são downloads separados.",
          "Voz: entrada por voz e um modo de chamada de voz constam na lista, mas não foram testados aqui.",
          "Desenvolvedor: uma pessoa física; as fontes não citam empresa nem país."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta análise se baseia no site do desenvolvedor, nas páginas das lojas, na política de privacidade e no repositório do GitHub, consultados em 17 de novembro de 2026. A PromptQuorum não instalou, executou nem mediu o app, então velocidade, qualidade da voz e confiabilidade não foram avaliadas."
          }
        ]
      },
      "overview": {
        "id": "what-is-conduit",
        "title": "O que é o Conduit?",
        "content": [
          "**O Conduit é um cliente móvel nativo para iOS e Android que se conecta a um servidor Open WebUI hospedado por você, diretamente a provedores de modelos ou a um agente Hermes hospedado por você.** As duas lojas o listam como “Conduit: Open WebUI & AI”; o vendedor na App Store é Tunap Paul e a conta do GitHub é cogwheel0.",
          "O README o apresenta como uma resposta a pontos fracos do Open WebUI no celular, como o login atrás de proxies reversos e o streaming que cai quando o app vai para segundo plano. Outros produtos têm o mesmo nome Conduit; esta análise cobre apenas o app de [conduit.mobile](https://conduit.mobile)."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Onde obter",
        "content": [
          "**O Conduit é um download de loja para iPhone, iPad e Android, e as mesmas compilações também estão anexadas às versões do GitHub.**"
        ],
        "columns": [
          "Opção",
          "Como obter"
        ],
        "rows": [
          {
            "Opção": "iPhone e iPad",
            "Como obter": "[Conduit na App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287), download pago, R$ 24,90 na loja do Brasil"
          },
          {
            "Opção": "Android",
            "Como obter": "[Conduit no Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit), listado com botão Instalar e sem preço"
          },
          {
            "Opção": "Site",
            "Como obter": "[conduit.mobile](https://conduit.mobile)"
          },
          {
            "Opção": "Política de privacidade",
            "Como obter": "[PRIVACY_POLICY.md no GitHub](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md)"
          },
          {
            "Opção": "Código-fonte",
            "Como obter": "[github.com/cogwheel0/conduit](https://github.com/cogwheel0/conduit), GPL-3.0; as versões incluem arquivos APK e IPA"
          }
        ],
        "note": "Versão analisada: 4.3.1, lançada em 11 de novembro de 2026 segundo a App Store e o GitHub; o app para iOS tem 122.6 MB. O site diz que o Conduit não tem planos pagos, enquanto a App Store cobra pelo download; as fontes não explicam a diferença. Os preços variam conforme a loja."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**O site indica iOS 16.0 ou superior e Android 7.0 ou superior; o modelo no aparelho da Apple exige iOS 26.**"
        ],
        "columns": [
          "Item",
          "O que as fontes dizem"
        ],
        "rows": [
          {
            "Item": "Sistema operacional",
            "O que as fontes dizem": "iOS 16.0 ou superior; Android 7.0 (API 24) ou superior"
          },
          {
            "Item": "Modelos da Apple",
            "O que as fontes dizem": "Modelo no aparelho: iOS 26 com Apple Intelligence; Private Cloud Compute: iOS 27 com a permissão da Apple"
          },
          {
            "Item": "Modo servidor",
            "O que as fontes dizem": "Seu próprio Open WebUI (0.11 acompanhado), LibreChat 0.8.8 ou superior (beta) ou um servidor Hermes, acessível pelo celular"
          },
          {
            "Item": "Conta",
            "O que as fontes dizem": "Nenhuma para o próprio Conduit; seu servidor ou provedor pode exigir uma ou uma chave de API"
          },
          {
            "Item": "Memória e armazenamento",
            "O que as fontes dizem": "Nenhum mínimo informado; os modelos rodam no seu servidor, no provedor ou no sistema da Apple"
          }
        ],
        "note": "As fontes não tratam de quais celulares executam bem o modelo no aparelho da Apple."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Como começar",
        "content": [
          "**Os passos seguem o guia de início do próprio README; a PromptQuorum não os executou.**"
        ],
        "numberedItems": [
          {
            "title": "Instale o app",
            "whyItMatters": "Baixe o Conduit na App Store ou no Google Play e escolha, na primeira abertura, como deseja se conectar."
          },
          {
            "title": "Adicione um backend",
            "whyItMatters": "Informe a URL base do seu servidor Open WebUI ou crie um perfil compatível com OpenAI ou do Ollama, com o endereço e, se necessário, chave de API ou cabeçalhos personalizados."
          },
          {
            "title": "Faça login",
            "whyItMatters": "Use usuário e senha, LDAP, um JWT manual, SSO ou OAuth, ou o login por proxy que o seu ambiente exigir; conexões diretas não precisam de conta."
          },
          {
            "title": "Escolha um modelo e converse",
            "whyItMatters": "Selecione um modelo detectado, comece a conversar, anexe arquivos ou imagens e ative a voz ou as ferramentas do servidor se o seu backend as oferecer."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos confirmados pelas fontes",
        "content": [
          "**Cada item vem do site ou do README do repositório; nenhum foi testado de forma independente.**"
        ],
        "items": [
          "**Tipos de conexão.** Open WebUI (chats, pastas, notas, canais, área de trabalho, ferramentas, busca na web, geração de imagens), LibreChat em beta, endpoints diretos compatíveis com OpenAI (Chat Completions ou Responses, LM Studio, estilo Azure), Ollama nativo, OpenRouter, agentes Hermes com chamadas de ferramentas ao vivo e aprovações, e os modelos da Apple.",
          "**Chat.** Streaming de tokens por WebSocket, anexos de arquivos e imagens, busca em conversas, chats temporários e renderização nativa de código, matemática, diagramas Mermaid e citações.",
          "**Voz.** Entrada por voz com reconhecimento no aparelho ou no servidor, além de um modo completo de chamada de voz.",
          "**Login em ambientes próprios.** Senha, LDAP, JWT, SSO e OAuth, cabeçalhos personalizados e fluxos de proxy reverso para oauth2-proxy, Authelia, Authentik, Pangolin e Cloudflare Tunnel.",
          "**Integração com o celular.** Widgets na tela inicial do iOS e do Android, menu de compartilhamento, App Intents e Atalhos do iOS, notas offline e notificações push opcionais."
        ],
        "note": "Segundo o README, recursos que dependem do servidor, como canais, notas, busca na web e geração de imagens, só aparecem quando a sua instalação os oferece."
      },
      "privacy": {
        "id": "privacy",
        "title": "Fluxo de dados e privacidade",
        "content": [
          "**A política de privacidade, em vigor desde 9 de novembro de 2026, diz que o app não opera nenhum backend que receba o seu conteúdo e não inclui SDKs de análise ou publicidade de terceiros.** Mensagens, arquivos, imagens e entradas de voz vão direto do aparelho para o servidor ou provedor escolhido; as credenciais ficam no Keychain do iOS ou no Keystore do Android. Por padrão, um chat direto também é sincronizado com o seu servidor Open WebUI ativo quando você está conectado, e você pode manter os novos chats diretos apenas no aparelho.",
          "Existe um serviço operado pelo desenvolvedor: um relé opcional de notificações push que, segundo a política, só transporta notificações criptografadas que não consegue ler e não mantém banco de dados nem registros de acesso. A versão do Google Play inclui o Firebase Cloud Messaging apenas para push; uma compilação FOSS do Android não contém serviços do Google. A página da App Store mostra “Dados não coletados”, algo que a Apple informa não ter verificado."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Estas são declarações do desenvolvedor, não resultados de auditoria. A PromptQuorum não inspecionou o tráfego de rede do app nem a seção de segurança de dados do Google Play, e a política não cita empresa nem país."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem é",
        "items": [
          "**Quem hospeda o Open WebUI por conta própria** e quer um cliente nativo para o celular que lide com login atrás de proxies reversos.",
          "**Quem usa vários backends** e quer um único app para Open WebUI, Ollama, OpenRouter e Hermes.",
          "**Usuários simpáticos ao código aberto** que valorizam código GPL-3.0 legível e APKs do Android fora da loja."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Desempenho.** Não foram testados a confiabilidade do streaming, a qualidade da voz, o consumo de bateria nem o comportamento atrás de um proxy reverso específico.",
          "**Preço.** O site diz que é grátis e sem planos pagos, mas a App Store cobra; o que a compra inclui além do acesso à loja não é informado.",
          "**App para Mac.** O README descreve o Conduit Desktop para Macs com Apple Silicon, mas nenhuma das 100 versões mais recentes do GitHub trazia uma tag de desktop em 17 de novembro de 2026.",
          "**Beta e novos provedores.** O suporte ao LibreChat é marcado como beta, e as opções da Apple no aparelho e Private Cloud Compute dependem do iOS 26 e do iOS 27.",
          "**Identidade do desenvolvedor.** As fontes citam um vendedor da App Store e uma conta do GitHub, mas nenhuma empresa, endereço ou país."
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
            "App": "Reins",
            "Plataformas": "iPhone, iPad",
            "Preço / licença": "Grátis + Pro / código fechado",
            "Diferença principal": "Cliente de Ollama e LM Studio que também executa modelos MLX no aparelho"
          },
          {
            "App": "Phantasm",
            "Plataformas": "iPhone",
            "Preço / licença": "Grátis / licença não informada",
            "Diferença principal": "Cliente de chat para o seu próprio servidor Ollama, vLLM ou llama.cpp"
          },
          {
            "App": "Enchanted",
            "Plataformas": "iPhone, Mac",
            "Preço / licença": "Grátis / Apache 2.0",
            "Diferença principal": "Cliente de Ollama que precisa de um servidor Ollama separado"
          }
        ],
        "note": "Antes de escolher, confirme o preço, a licença e as plataformas atuais de cada app na página dele."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "Quanto o Conduit custa em diferentes lojas?",
            "a": "A página da App Store mostrava em 17 de novembro de 2026 US$ 3,99 nos Estados Unidos, 3,99 € na Alemanha, na Espanha e na França, ¥600 no Japão, ₩6,600 na Coreia do Sul e R$ 24,90 no Brasil. O Google Play lista o app com botão Instalar e sem preço, e as versões do GitHub anexam arquivos APK e IPA."
          },
          {
            "q": "Quais modelos o Conduit executa por conta própria?",
            "a": "Nenhum próprio: os modelos rodam no seu servidor ou provedor. A exceção é o modelo no aparelho da Apple em iPhones compatíveis com iOS 26, que funciona offline com janela de contexto de 4K, mas sem entrada de imagens nem chamadas de ferramentas, segundo o README."
          },
          {
            "q": "Existe versão para Mac?",
            "a": "O README descreve o Conduit Desktop para Macs com Apple Silicon e macOS 14 ou superior, assinado, notarizado e atualizado via Sparkle. Nenhuma versão de desktop foi encontrada no GitHub em 17 de novembro de 2026, então ela não está confirmada."
          },
          {
            "q": "As notificações push enviam meus chats pelo desenvolvedor?",
            "a": "O push fica desligado até você ativá-lo. Segundo a política, o relé do desenvolvedor só transporta notificações criptografadas que não consegue ler, e no Android você pode usar um distribuidor UnifiedPush para que o relé não participe."
          },
          {
            "q": "Quais idiomas de interface o Conduit oferece?",
            "a": "O README lista 14 idiomas: inglês, alemão, espanhol, francês, italiano, japonês, coreano, holandês, russo, chinês simplificado e tradicional, tcheco, eslovaco e polonês. A App Store lista 12 idiomas."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O Conduit é uma forma de código aberto, com atualizações ativas, de chegar de um iPhone ou celular Android a um servidor Open WebUI hospedado por você, ou a um endpoint de modelo direto, com caminhos de login pensados para configurações reais com proxy reverso. Em contrapartida, as fontes deixam em aberto como ele se comporta, por que a versão para iOS é paga enquanto o site diz que é grátis, se o app para Mac foi lançado e quem está por trás dele. Serve a quem já mantém o próprio servidor e pode testar primeiro a versão para Android ou ler o código; quem precisa de garantias de privacidade auditadas deve tratar a política como declaração, não como prova."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Site do Conduit](https://conduit.mobile) — recursos, plataformas, declaração de preço e links das lojas, consultado em 17 de novembro de 2026.",
          "[Conduit na App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) — vendedor, preço por loja, versão, tamanho e rótulo de privacidade, consultado em 17 de novembro de 2026.",
          "[Conduit no Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit) — botão de instalação, data de atualização e faixa de downloads, consultado em 17 de novembro de 2026.",
          "[Conduit no GitHub](https://github.com/cogwheel0/conduit) — README, arquivo de licença GPL-3.0, versões e commits, consultado em 17 de novembro de 2026.",
          "[Política de privacidade do Conduit](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md) — fluxo de dados, relé push e permissões, em vigor desde 9 de novembro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leitura relacionada",
        "items": [
          "[Análise do Reins](/pt/power-local-llm/reins-review) — um cliente de chat para o seu próprio servidor Ollama ou LM Studio, com modelos MLX no aparelho desde a versão 2.",
          "[Análise do Phantasm](/pt/power-local-llm/phantasm-review) — um cliente de chat gratuito para iPhone para o seu próprio servidor Ollama, vLLM ou llama.cpp.",
          "[Análise do Enchanted](/pt/power-local-llm/enchanted-review) — um cliente de Ollama gratuito, com licença Apache 2.0, para iPhone e Mac.",
          "[Análise do LibreChat](/pt/power-local-llm/librechat-review-2026) — um servidor de chat hospedado por você ao qual o Conduit pode se conectar em beta.",
          "[Melhores apps de LLM local para iPhone](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o comparativo a que esta análise pertence.",
          "[Melhores apps de LLM local para Android](/pt/power-local-llm/best-local-llm-apps-android-2026) — o comparativo para Android a que esta análise pertence.",
          "[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local."
        ]
      }
    }
  },
  ar: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-17",
    "dateModified": "2026-11-17",
    "next_refresh_due": "2027-05-17",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/conduit-review-hero-ar.webp",
    "title": "مراجعة Conduit: عميل جوال لـ Open WebUI ونماذجك الخاصة",
    "seoTitle": "مراجعة Conduit: عميل Open WebUI لـ iPhone وAndroid",
    "intro": "Conduit تطبيق مفتوح المصدر لـ iPhone وAndroid يتصل بخادم Open WebUI مستضاف ذاتيًا، ومنذ الإصدار 4.0 أيضًا بنقاط نهاية متوافقة مع OpenAI وبـ Ollama وOpenRouter وLibreChat ووكلاء Hermes. تستند هذه المراجعة إلى [موقع](https://conduit.mobile) المطوّر وصفحتي [App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) و[Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit) وسياسة الخصوصية و[مستودع GitHub](https://github.com/cogwheel0/conduit)، وقد جرى الاطلاع عليها في 17 نوفمبر 2026؛ ولم تجرّب PromptQuorum التطبيق عمليًا.",
    "metaDescription": "مراجعة Conduit: عميل أصلي لـ iPhone وAndroid يتصل بـ Open WebUI ونقاط نهاية متوافقة مع OpenAI وOllama ووكلاء Hermes. GPL-3.0، iOS مدفوع. لم يُجرَّب.",
    "twitterDescription": "مراجعة Conduit: عميل Flutter لـ Open WebUI المستضاف ذاتيًا يتصل أيضًا بـ Ollama وOpenRouter وHermes. ما تؤكده المصادر وما لا تؤكده.",
    "audience": "مستخدمو iPhone وAndroid الذين يستضيفون Open WebUI بأنفسهم أو يشغّلون نقاط نهاية نماذج خاصة بهم ويريدون معرفة ما يفعله Conduit وتكلفته والادعاءات التي بقيت دون تأكيد.",
    "readTime": "6 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة Conduit",
    "targetKeywords": [
      "مراجعة conduit",
      "تطبيق conduit open webui",
      "تطبيق open webui للجوال",
      "عميل open webui على iphone",
      "تطبيق open webui لأندرويد",
      "تطبيق دردشة ذكاء اصطناعي مستضاف ذاتيًا",
      "عميل جوال hermes agent"
    ],
    "current_models_mentioned": [
      "Apple Foundation Models"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "هاتف Android"
    ],
    "leadAnswerBlock": "**Conduit (الإصدار 4.3.1، صدر في 11 نوفمبر 2026) عميل مفتوح المصدر لـ iPhone وAndroid يتصل بـ Open WebUI، ومنذ الإصدار 4.0 يتحدث أيضًا مباشرة مع نقاط نهاية متوافقة مع OpenAI ومع Ollama وOpenRouter ووكلاء Hermes.** بُني باستخدام Flutter ويخضع لترخيص GPL-3.0. يقول المطوّر إن المحادثات تبقى على الجهاز وإنه لا يوجد خادم خاص به يستقبل محتواك؛ وكل ما يرد هنا مصدره موقع المطوّر وصفحتا المتجرين والمستودع.",
    "quickAnswerTop": {
      "ar": {
        "question": "هل يحتاج Conduit إلى خادم Open WebUI؟",
        "answer": "لا. يذكر ملف README أنه منذ الإصدار 4.0 يعمل Conduit مع خادم Open WebUI أو بدونه: يمكنك الاتصال بنقطة نهاية متوافقة مع OpenAI أو Ollama أو OpenRouter أو وكيل Hermes. كما يتوفر نموذج Apple على الجهاز كخيار في أجهزة iPhone المؤهلة.",
        "bullets": [
          "بحسب README، يوفّر الاتصال بـ Open WebUI مجموعة الميزات الكاملة، ومنها المجلدات والملاحظات والقنوات ومساحة العمل.",
          "بحسب المطوّر، تُخزَّن المحادثات والملاحظات والمسودات على الجهاز، حتى دون اتصال.",
          "يرد الإدخال الصوتي ووضع المكالمة الصوتية ضمن الميزات.",
          "نسخة iOS مدفوعة في App Store، أما نسخة Android فمُدرجة دون سعر."
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
        "label": "ما هو Conduit؟",
        "anchor": "what-is-conduit"
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
            "text": "Conduit عميل أصلي لـ iPhone وAndroid يتصل بـ Open WebUI أو LibreChat أو Hermes أو نقاط نهاية النماذج الخاصة بك بدلًا من خدمة سحابية خاصة به."
          },
          {
            "type": "plain-terms",
            "text": "تُدخل عنوان الخادم أو المزوّد الذي تستخدمه أصلًا، وتسجّل الدخول، ثم تدردش من الهاتف مع الملفات والصوت وأدوات الخادم."
          }
        ],
        "items": [
          "الصيانة: صدر الإصدار 4.3.1 في 11 نوفمبر 2026 ودُفع آخر تحديث إلى مستودع GitHub في 17 نوفمبر 2026، لذا لا ينطبق تحذير المشروع المتوقف.",
          "الخوادم: ستة أنواع اتصال، من Open WebUI ونقاط نهاية المزوّدين المباشرة إلى وكلاء Hermes ونموذج Apple على الجهاز.",
          "الترخيص: الشيفرة المصدرية بترخيص GPL-3.0؛ ونسخ المتجرين تنزيلات منفصلة.",
          "الصوت: يرد الإدخال الصوتي ووضع المكالمة الصوتية، لكن لم نختبرهما هنا.",
          "المطوّر: فرد، ولا تذكر المصادر شركة ولا دولة."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "تستند هذه المراجعة إلى موقع المطوّر وصفحتي المتجرين وسياسة الخصوصية ومستودع GitHub، وقد جرى الاطلاع عليها في 17 نوفمبر 2026. لم تثبّت PromptQuorum التطبيق ولم تشغّله ولم تقِس أداءه، لذلك لا تُقيَّم السرعة ولا جودة الصوت ولا الموثوقية."
          }
        ]
      },
      "overview": {
        "id": "what-is-conduit",
        "title": "ما هو Conduit؟",
        "content": [
          "**Conduit عميل جوال أصلي لنظامي iOS وAndroid يتصل بخادم Open WebUI مستضاف ذاتيًا، أو بمزوّدي النماذج مباشرة، أو بوكيل Hermes مستضاف ذاتيًا.** يُدرجه المتجران باسم «Conduit: Open WebUI & AI»؛ والبائع في App Store هو Tunap Paul وحساب GitHub هو cogwheel0.",
          "يصفه ملف README بأنه صُمّم لمعالجة نقاط ضعف Open WebUI على الجوال، مثل تسجيل الدخول خلف الوكلاء العكسيين وانقطاع البث حين ينتقل التطبيق إلى الخلفية. وهناك منتجات أخرى تحمل اسم Conduit؛ وتغطي هذه المراجعة التطبيق على [conduit.mobile](https://conduit.mobile) فقط."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "كيف تحصل عليه",
        "content": [
          "**Conduit تنزيل من المتجر لأجهزة iPhone وiPad وAndroid، وترد النسخ نفسها أيضًا ضمن إصدارات GitHub.**"
        ],
        "columns": [
          "الخيار",
          "مصدر الحصول عليه"
        ],
        "rows": [
          {
            "الخيار": "iPhone وiPad",
            "مصدر الحصول عليه": "[Conduit في App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287)، تنزيل مدفوع، 3.99 دولارًا في المتجر الأمريكي"
          },
          {
            "الخيار": "Android",
            "مصدر الحصول عليه": "[Conduit في Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit)، مُدرج بزر تثبيت ودون سعر"
          },
          {
            "الخيار": "الموقع",
            "مصدر الحصول عليه": "[conduit.mobile](https://conduit.mobile)"
          },
          {
            "الخيار": "سياسة الخصوصية",
            "مصدر الحصول عليه": "[PRIVACY_POLICY.md على GitHub](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md)"
          },
          {
            "الخيار": "الشيفرة المصدرية",
            "مصدر الحصول عليه": "[github.com/cogwheel0/conduit](https://github.com/cogwheel0/conduit)، GPL-3.0؛ وتتضمن الإصدارات ملفات APK وIPA"
          }
        ],
        "note": "الإصدار الذي رُوجع: 4.3.1، صدر في 11 نوفمبر 2026 بحسب App Store وGitHub؛ وحجم تطبيق iOS هو 122.6 MB. يقول الموقع إن Conduit بلا فئات مدفوعة، بينما يفرض App Store ثمنًا على التنزيل؛ ولا تشرح المصادر هذا الفرق. تختلف الأسعار باختلاف المتجر."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "المتطلبات",
        "content": [
          "**يذكر الموقع iOS 16.0 أو أحدث وAndroid 7.0 أو أحدث؛ أما نموذج Apple على الجهاز فيتطلب iOS 26.**"
        ],
        "columns": [
          "البند",
          "ما تقوله المصادر"
        ],
        "rows": [
          {
            "البند": "نظام التشغيل",
            "ما تقوله المصادر": "iOS 16.0 أو أحدث؛ Android 7.0 (API 24) أو أحدث"
          },
          {
            "البند": "نماذج Apple",
            "ما تقوله المصادر": "النموذج على الجهاز: iOS 26 مع Apple Intelligence؛ Private Cloud Compute: iOS 27 مع صلاحية من Apple"
          },
          {
            "البند": "وضع الخادم",
            "ما تقوله المصادر": "خادم Open WebUI الخاص بك (يتابع الإصدار 0.11) أو LibreChat بالإصدار 0.8.8 أو أحدث (تجريبي) أو خادم Hermes، ويمكن الوصول إليه من الهاتف"
          },
          {
            "البند": "الحساب",
            "ما تقوله المصادر": "لا حاجة إليه لـ Conduit نفسه؛ وقد يطلب خادمك أو مزوّدك حسابًا أو مفتاح API"
          },
          {
            "البند": "الذاكرة والتخزين",
            "ما تقوله المصادر": "لا يوجد حد أدنى مذكور؛ تعمل النماذج على خادمك أو لدى المزوّد أو في نظام Apple"
          }
        ],
        "note": "لا تتناول المصادر أي الهواتف تشغّل نموذج Apple على الجهاز بشكل جيد."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "كيف تبدأ",
        "content": [
          "**تتبع الخطوات دليل البدء في ملف README نفسه؛ ولم تنفّذها PromptQuorum.**"
        ],
        "numberedItems": [
          {
            "title": "ثبّت التطبيق",
            "whyItMatters": "نزّل Conduit من App Store أو Google Play، ثم اختر عند التشغيل الأول طريقة الاتصال."
          },
          {
            "title": "أضف خادمًا",
            "whyItMatters": "أدخل عنوان URL الأساسي لخادم Open WebUI، أو أضف ملفًا متوافقًا مع OpenAI أو ملف Ollama بعنوانه ومفتاح API أو ترويسات مخصصة إن لزم."
          },
          {
            "title": "سجّل الدخول",
            "whyItMatters": "استخدم اسم المستخدم وكلمة المرور أو LDAP أو JWT يدويًا أو SSO أو OAuth، أو تسجيل الدخول عبر الوكيل الذي تتطلبه بيئتك؛ ولا تحتاج الاتصالات المباشرة إلى حساب."
          },
          {
            "title": "اختر نموذجًا وابدأ المحادثة",
            "whyItMatters": "اختر نموذجًا مكتشفًا، وابدأ الدردشة، وأرفق الملفات أو الصور، وفعّل الصوت أو أدوات الخادم إن وفّرها خادمك."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "الميزات التي أكدتها المصادر",
        "content": [
          "**كل بند أدناه مصدره الموقع أو ملف README في المستودع؛ ولم يُختبر أي منها بشكل مستقل.**"
        ],
        "items": [
          "**أنواع الاتصال.** Open WebUI (المحادثات والمجلدات والملاحظات والقنوات ومساحة العمل والأدوات والبحث على الويب وتوليد الصور)، وLibreChat بصيغة تجريبية، ونقاط نهاية مباشرة متوافقة مع OpenAI (Chat Completions أو Responses وLM Studio وأسلوب Azure)، وOllama الأصلي، وOpenRouter، ووكلاء Hermes مع استدعاءات أدوات مباشرة وموافقات، ونماذج Apple.",
          "**الدردشة.** بث الرموز عبر WebSocket، ومرفقات الملفات والصور، والبحث في المحادثات، والمحادثات المؤقتة، وعرض أصلي للشيفرة والرياضيات ومخططات Mermaid والاستشهادات.",
          "**الصوت.** إدخال صوتي مع تعرّف على الكلام على الجهاز أو على الخادم، إضافة إلى وضع مكالمة صوتية كامل.",
          "**تسجيل الدخول في البيئات المستضافة ذاتيًا.** كلمة المرور وLDAP وJWT وSSO وOAuth وترويسات مخصصة ومسارات وكيل عكسي لـ oauth2-proxy وAuthelia وAuthentik وPangolin وCloudflare Tunnel.",
          "**التكامل مع الهاتف.** أدوات على الشاشة الرئيسية في iOS وAndroid، وقائمة المشاركة، وApp Intents والاختصارات في iOS، وملاحظات دون اتصال، وإشعارات دفع اختيارية."
        ],
        "note": "بحسب README، لا تظهر الميزات المعتمدة على الخادم، مثل القنوات والملاحظات والبحث على الويب وتوليد الصور، إلا إذا وفّرتها بيئتك."
      },
      "privacy": {
        "id": "privacy",
        "title": "تدفق البيانات والخصوصية",
        "content": [
          "**تقول سياسة الخصوصية، السارية منذ 9 نوفمبر 2026، إن التطبيق لا يشغّل أي خادم يستقبل محتواك ولا يتضمن حزم SDK للتحليلات أو الإعلانات من جهات خارجية.** تنتقل الرسائل والملفات والصور والإدخال الصوتي مباشرة من الجهاز إلى الخادم أو المزوّد الذي اخترته؛ وتُحفظ بيانات الاعتماد في Keychain على iOS أو Keystore على Android. افتراضيًا تُزامَن المحادثة المباشرة أيضًا مع خادم Open WebUI النشط حين تكون مسجّلًا للدخول، ويمكنك إبقاء المحادثات المباشرة الجديدة على الجهاز فقط.",
          "توجد خدمة واحدة يشغّلها المطوّر: مرحّل إشعارات دفع اختياري ينقل، بحسب السياسة، إشعارات مشفّرة فقط لا يستطيع قراءتها ولا يحتفظ بقاعدة بيانات ولا بسجلات وصول. تتضمن نسخة Google Play خدمة Firebase Cloud Messaging للإشعارات فقط؛ أما بناء Android الحر (FOSS) فلا يحتوي على خدمات Google. تعرض صفحة App Store عبارة «لا تُجمع البيانات»، وتذكر Apple أنها لم تتحقق منها."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "هذه تصريحات من المطوّر وليست نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة للتطبيق ولا قسم أمان البيانات في Google Play، ولا تذكر السياسة شركة ولا دولة."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**من يستضيفون Open WebUI بأنفسهم** ويريدون عميلًا أصليًا للهاتف يتعامل مع تسجيل الدخول خلف الوكلاء العكسيين.",
          "**من يستخدمون عدة خوادم** ويريدون تطبيقًا واحدًا لـ Open WebUI وOllama وOpenRouter وHermes.",
          "**محبو المصادر المفتوحة** الذين يقدّرون شيفرة GPL-3.0 المقروءة وملفات APK لنظام Android خارج المتجر."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**الأداء.** لم تُختبر موثوقية البث ولا جودة الصوت ولا استهلاك البطارية ولا السلوك خلف وكيل عكسي معيّن.",
          "**السعر.** يقول الموقع إنه مجاني بلا فئات مدفوعة، لكن App Store يفرض ثمنًا؛ ولا يُذكر ما يشمله الشراء غير الوصول عبر المتجر.",
          "**تطبيق Mac.** يصف README تطبيق Conduit Desktop لأجهزة Mac بمعالج Apple Silicon، لكن لم يحمل أي من أحدث 100 إصدار على GitHub وسم سطح المكتب في 17 نوفمبر 2026.",
          "**النسخة التجريبية والمزوّدون الجدد.** دعم LibreChat موسوم بأنه تجريبي، وخيارا Apple على الجهاز وPrivate Cloud Compute يعتمدان على iOS 26 وiOS 27.",
          "**هوية المطوّر.** تذكر المصادر بائعًا في App Store وحسابًا على GitHub، لكن لا شركة ولا عنوانًا ولا دولة."
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
            "التطبيق": "Reins",
            "المنصات": "iPhone، iPad",
            "السعر / الترخيص": "مجاني + Pro / مغلق المصدر",
            "الفرق الرئيسي": "عميل Ollama وLM Studio يشغّل أيضًا نماذج MLX على الجهاز"
          },
          {
            "التطبيق": "Phantasm",
            "المنصات": "iPhone",
            "السعر / الترخيص": "مجاني / الترخيص غير مذكور",
            "الفرق الرئيسي": "عميل دردشة لخادم Ollama أو vLLM أو llama.cpp الخاص بك"
          },
          {
            "التطبيق": "Enchanted",
            "المنصات": "iPhone، Mac",
            "السعر / الترخيص": "مجاني / Apache 2.0",
            "الفرق الرئيسي": "عميل Ollama يحتاج إلى خادم Ollama منفصل"
          }
        ],
        "note": "قبل الاختيار، تحقق من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "كم يكلّف Conduit في المتاجر المختلفة؟",
            "a": "عرضت صفحة App Store في 17 نوفمبر 2026 السعر 3.99 دولارًا في الولايات المتحدة، و3,99 € في ألمانيا وإسبانيا وفرنسا، و¥600 في اليابان، و₩6,600 في كوريا الجنوبية، وR$ 24,90 في البرازيل. يُدرج Google Play التطبيق بزر تثبيت ودون سعر، وتتضمن إصدارات GitHub ملفات APK وIPA."
          },
          {
            "q": "ما النماذج التي يشغّلها Conduit بنفسه؟",
            "a": "لا شيء خاص به: تعمل النماذج على خادمك أو لدى المزوّد. والاستثناء هو نموذج Apple على الجهاز في أجهزة iPhone المؤهلة مع iOS 26، وهو يعمل دون اتصال بنافذة سياق 4K، لكن دون إدخال صور أو استدعاء أدوات، بحسب README."
          },
          {
            "q": "هل توجد نسخة لنظام Mac؟",
            "a": "يصف README تطبيق Conduit Desktop لأجهزة Mac بمعالج Apple Silicon وmacOS 14 أو أحدث، موقّعًا وموثّقًا ويتحدّث عبر Sparkle. لم يُعثر على إصدار لسطح المكتب في GitHub بتاريخ 17 نوفمبر 2026، لذا يبقى غير مؤكد."
          },
          {
            "q": "هل تمرّ محادثاتي عبر المطوّر عند تفعيل إشعارات الدفع؟",
            "a": "الإشعارات متوقفة حتى تفعّلها. بحسب السياسة، لا ينقل مرحّل المطوّر سوى إشعارات مشفّرة لا يستطيع قراءتها، وعلى Android يمكنك استخدام موزّع UnifiedPush فلا يشارك المرحّل."
          },
          {
            "q": "ما لغات الواجهة التي يدعمها Conduit؟",
            "a": "يذكر README أربع عشرة لغة: الإنجليزية والألمانية والإسبانية والفرنسية والإيطالية واليابانية والكورية والهولندية والروسية والصينية المبسطة والتقليدية والتشيكية والسلوفاكية والبولندية. ويذكر App Store اثنتي عشرة لغة."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "Conduit وسيلة مفتوحة المصدر ومحدَّثة باستمرار للوصول من iPhone أو هاتف Android إلى خادم Open WebUI مستضاف ذاتيًا أو إلى نقطة نهاية نموذج مباشرة، مع مسارات تسجيل دخول تناسب إعدادات الوكيل العكسي الواقعية. في المقابل، تترك المصادر مفتوحًا مستوى أدائه، ولماذا نسخة iOS مدفوعة بينما يقول الموقع إنه مجاني، وهل صدر تطبيق Mac، ومن يقف خلفه. يناسب من يشغّلون خادمهم الخاص أصلًا ويمكنهم تجربة نسخة Android أولًا أو قراءة الشيفرة؛ ومن يحتاج إلى ضمانات خصوصية مدقَّقة فعليه اعتبار السياسة تصريحًا لا دليلًا."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[موقع Conduit](https://conduit.mobile) — الميزات والمنصات وبيان السعر وروابط المتجرين، جرى الاطلاع عليه في 17 نوفمبر 2026.",
          "[Conduit في App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) — البائع والسعر لكل متجر والإصدار والحجم وملصق الخصوصية، جرى الاطلاع عليه في 17 نوفمبر 2026.",
          "[Conduit في Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit) — زر التثبيت وتاريخ التحديث وفئة التنزيلات، جرى الاطلاع عليه في 17 نوفمبر 2026.",
          "[Conduit على GitHub](https://github.com/cogwheel0/conduit) — README وملف ترخيص GPL-3.0 والإصدارات والالتزامات، جرى الاطلاع عليه في 17 نوفمبر 2026.",
          "[سياسة خصوصية Conduit](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md) — تدفق البيانات ومرحّل الإشعارات والأذونات، سارية منذ 9 نوفمبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة Reins](/ar/power-local-llm/reins-review) — عميل دردشة لخادم Ollama أو LM Studio الخاص بك، مع نماذج MLX على الجهاز منذ الإصدار 2.",
          "[مراجعة Phantasm](/ar/power-local-llm/phantasm-review) — عميل دردشة مجاني لـ iPhone لخادم Ollama أو vLLM أو llama.cpp الخاص بك.",
          "[مراجعة Enchanted](/ar/power-local-llm/enchanted-review) — عميل Ollama مجاني بترخيص Apache 2.0 لـ iPhone وMac.",
          "[مراجعة LibreChat](/ar/power-local-llm/librechat-review-2026) — خادم دردشة مستضاف ذاتيًا يمكن لـ Conduit الاتصال به بصيغة تجريبية.",
          "[أفضل تطبيقات النماذج المحلية لـ iPhone](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — المقارنة الشاملة التي تنتمي إليها هذه المراجعة.",
          "[أفضل تطبيقات النماذج المحلية لـ Android](/ar/power-local-llm/best-local-llm-apps-android-2026) — مقارنة Android الشاملة التي تنتمي إليها هذه المراجعة.",
          "[دليل برمجيات النماذج المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية."
        ]
      }
    }
  },
  zh: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-17",
    "dateModified": "2026-11-17",
    "next_refresh_due": "2027-05-17",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/conduit-review-hero-zh.webp",
    "title": "Conduit 评测：面向 Open WebUI 和自有模型的手机客户端",
    "seoTitle": "Conduit 评测：Open WebUI 手机客户端应用",
    "intro": "Conduit 是一款面向 iPhone 和 Android 的开源应用，可连接自建的 Open WebUI 服务器，并且自 4.0 版起还能连接兼容 OpenAI 的接口、Ollama、OpenRouter、LibreChat 和 Hermes 智能体。本评测依据开发者的[官网](https://conduit.mobile)、[App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) 和 [Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit) 商店页面、隐私政策以及 [GitHub 仓库](https://github.com/cogwheel0/conduit)，核对于 2026 年 11 月 17 日；PromptQuorum 未对该应用做实际测试。",
    "metaDescription": "Conduit 评测：面向 iPhone 和 Android 的原生客户端，可连接 Open WebUI、兼容 OpenAI 的接口、Ollama 和 Hermes。GPL-3.0，iOS 版付费。未实测。",
    "twitterDescription": "Conduit 评测：自建 Open WebUI 的 Flutter 客户端，也可连接 Ollama、OpenRouter 和 Hermes。资料能证实什么，不能证实什么。",
    "audience": "自建 Open WebUI 或运行自有模型接口的 iPhone 和 Android 用户，想了解 Conduit 能做什么、价格如何，以及哪些说法仍未证实。",
    "readTime": "阅读约6分钟",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Conduit 评测",
    "targetKeywords": [
      "conduit 评测",
      "conduit open webui 应用",
      "open webui 手机应用",
      "open webui iphone 客户端",
      "open webui android 应用",
      "自建 ai 聊天应用",
      "hermes agent 手机客户端"
    ],
    "current_models_mentioned": [
      "Apple Foundation Models"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "Android 手机"
    ],
    "leadAnswerBlock": "**Conduit（4.3.1 版，2026 年 11 月 11 日发布）是一款面向 iPhone 和 Android 的开源客户端，可连接 Open WebUI，并且自 4.0 版起也能直接对接兼容 OpenAI 的接口、Ollama、OpenRouter 和 Hermes 智能体。**它使用 Flutter 开发，许可证为 GPL-3.0。开发者称聊天内容保存在设备上，没有自己的后端接收你的内容；此处所有说法均来自开发者官网、商店页面和代码仓库。",
    "quickAnswerTop": {
      "zh": {
        "question": "Conduit 需要 Open WebUI 服务器吗？",
        "answer": "不需要。README 说明，自 4.0 版起 Conduit 有无 Open WebUI 服务器都能工作：可以改为连接兼容 OpenAI 的接口、Ollama、OpenRouter 或 Hermes 智能体。在符合条件的 iPhone 上还可选用 Apple 的设备端模型。",
        "bullets": [
          "据 README，连接 Open WebUI 时可使用全部功能，包括文件夹、笔记、频道和工作区。",
          "据开发者称，聊天、笔记和草稿保存在设备上，离线时也可使用。",
          "功能列表中包含语音输入和语音通话模式。",
          "iOS 版在 App Store 中为付费下载；Android 版标注为无价格。"
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
        "label": "Conduit 是什么？",
        "anchor": "what-is-conduit"
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
            "text": "Conduit 是面向 iPhone 和 Android 的原生客户端，连接的是你自己的 Open WebUI、LibreChat、Hermes 或模型接口，而不是自家的云服务。"
          },
          {
            "type": "plain-terms",
            "text": "填入你已在使用的服务器或服务商地址并登录，就能在手机上带着文件、语音和服务器端工具聊天。"
          }
        ],
        "items": [
          "维护情况：4.3.1 版于 2026 年 11 月 11 日发布，GitHub 仓库最近一次推送是 2026 年 11 月 17 日，因此无需显示项目停滞警告。",
          "后端：共六种连接方式，从 Open WebUI 和直连服务商接口，到 Hermes 智能体和 Apple 设备端模型。",
          "许可证：源代码为 GPL-3.0；商店版本是另行提供的下载。",
          "语音：功能列表包含语音输入和语音通话模式，但此处未经测试。",
          "开发者：个人开发者，资料中没有提及公司或国家。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本评测依据开发者官网、商店页面、隐私政策和 GitHub 仓库，核对于 2026 年 11 月 17 日。PromptQuorum 未安装、运行或测试该应用，因此不评估速度、语音质量和稳定性。"
          }
        ]
      },
      "overview": {
        "id": "what-is-conduit",
        "title": "Conduit 是什么？",
        "content": [
          "**Conduit 是面向 iOS 和 Android 的原生手机客户端，可连接自建的 Open WebUI 服务器、直接连接模型服务商，或连接自建的 Hermes 智能体。**两个商店都以“Conduit: Open WebUI & AI”上架；App Store 的卖家是 Tunap Paul，GitHub 账号是 cogwheel0。",
          "README 称它是为解决 Open WebUI 在手机上的短板而做，例如反向代理后的登录，以及应用切到后台时流式输出中断的问题。另有其他产品同名为 Conduit；本评测只涉及 [conduit.mobile](https://conduit.mobile) 上的这款应用。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "content": [
          "**Conduit 通过商店下载，支持 iPhone、iPad 和 Android，同样的构建也附在 GitHub 发布页上。**"
        ],
        "columns": [
          "选项",
          "获取方式"
        ],
        "rows": [
          {
            "选项": "iPhone 和 iPad",
            "获取方式": "[App Store 上的 Conduit](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287)，付费下载，美国区 $3.99"
          },
          {
            "选项": "Android",
            "获取方式": "[Google Play 上的 Conduit](https://play.google.com/store/apps/details?id=app.cogwheel.conduit)，显示安装按钮，无价格"
          },
          {
            "选项": "官网",
            "获取方式": "[conduit.mobile](https://conduit.mobile)"
          },
          {
            "选项": "隐私政策",
            "获取方式": "[GitHub 上的 PRIVACY_POLICY.md](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md)"
          },
          {
            "选项": "源代码",
            "获取方式": "[github.com/cogwheel0/conduit](https://github.com/cogwheel0/conduit)，GPL-3.0；发布页包含 APK 和 IPA 文件"
          }
        ],
        "note": "评测版本：4.3.1，据 App Store 和 GitHub 于 2026 年 11 月 11 日发布；iOS 应用大小为 122.6 MB。官网称 Conduit 没有付费档，而 App Store 下载要收费；资料没有解释这一差异。价格因商店而异。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "系统要求",
        "content": [
          "**官网列出 iOS 16.0 或更高版本和 Android 7.0 或更高版本；Apple 的设备端模型需要 iOS 26。**"
        ],
        "columns": [
          "项目",
          "资料中的说法"
        ],
        "rows": [
          {
            "项目": "操作系统",
            "资料中的说法": "iOS 16.0 或更高；Android 7.0（API 24）或更高"
          },
          {
            "项目": "Apple 模型",
            "资料中的说法": "设备端模型：iOS 26 并支持 Apple Intelligence；Private Cloud Compute：iOS 27 并获得 Apple 授权"
          },
          {
            "项目": "服务器模式",
            "资料中的说法": "你自己的 Open WebUI（跟进 0.11）、LibreChat 0.8.8 或更高（测试版）或 Hermes 服务器，且手机可访问"
          },
          {
            "项目": "账户",
            "资料中的说法": "Conduit 本身无需账户；你的服务器或服务商可能需要账户或 API 密钥"
          },
          {
            "项目": "内存与存储",
            "资料中的说法": "未给出最低要求；模型运行在你的服务器、服务商或 Apple 系统上"
          }
        ],
        "note": "资料没有说明哪些手机能流畅运行 Apple 的设备端模型。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "如何上手",
        "content": [
          "**以下步骤依据 README 自带的入门指南；PromptQuorum 未实际执行。**"
        ],
        "numberedItems": [
          {
            "title": "安装应用",
            "whyItMatters": "从 App Store 或 Google Play 获取 Conduit，首次启动时选择连接方式。"
          },
          {
            "title": "添加后端",
            "whyItMatters": "填入 Open WebUI 服务器的基础 URL，或添加兼容 OpenAI 或 Ollama 的配置，填写地址以及所需的 API 密钥或自定义请求头。"
          },
          {
            "title": "登录",
            "whyItMatters": "使用用户名和密码、LDAP、手动输入的 JWT、SSO 或 OAuth，或你的部署要求的代理登录；直连无需账户。"
          },
          {
            "title": "选择模型并聊天",
            "whyItMatters": "选择已发现的模型后开始聊天，添加文件或图片，并在后端支持时开启语音或服务器端工具。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "资料证实的功能",
        "content": [
          "**以下每一项都来自官网或仓库 README，均未经独立测试。**"
        ],
        "items": [
          "**连接方式。**Open WebUI（聊天、文件夹、笔记、频道、工作区、工具、网页搜索、图像生成）、测试版 LibreChat、直连兼容 OpenAI 的接口（Chat Completions 或 Responses、LM Studio、Azure 风格）、原生 Ollama、OpenRouter、可实时显示工具调用并请求批准的 Hermes 智能体，以及 Apple 的模型。",
          "**聊天。**通过 WebSocket 流式输出 token，支持文件和图片附件、对话搜索、临时聊天，并原生渲染代码、数学公式、Mermaid 图表和引用。",
          "**语音。**语音输入，可用设备端或服务器端语音识别，另有完整的语音通话模式。",
          "**自建环境登录。**密码、LDAP、JWT、SSO 和 OAuth、自定义请求头，以及适配 oauth2-proxy、Authelia、Authentik、Pangolin 和 Cloudflare Tunnel 的反向代理流程。",
          "**手机集成。**iOS 和 Android 主屏幕小组件、分享菜单、iOS App Intents 和快捷指令、离线笔记以及可选的推送通知。"
        ],
        "note": "据 README，频道、笔记、网页搜索和图像生成等依赖服务器的功能，仅在你的部署提供时才会显示。"
      },
      "privacy": {
        "id": "privacy",
        "title": "数据流向与隐私",
        "content": [
          "**隐私政策自 2026 年 11 月 9 日起生效，称应用不运营接收你内容的后端，也不含第三方分析或广告 SDK。**消息、文件、图片和语音输入从设备直接发往你选择的服务器或服务商；凭据保存在 iOS 钥匙串或 Android Keystore 中。默认情况下，登录后的直连聊天也会同步到当前的 Open WebUI 服务器，你也可以让新的直连聊天只保存在设备上。",
          "存在一项由开发者运营的服务：可选的推送通知中继，据政策所述，它只转发自己无法读取的加密通知，不保留数据库或访问日志。Google Play 版本包含仅用于推送的 Firebase Cloud Messaging；FOSS 版 Android 构建不含 Google 服务。App Store 页面显示“未收集数据”，Apple 注明该信息未经验证。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "这些是开发者的声明，不是审计结果。PromptQuorum 未检查该应用的网络流量或 Google Play 的数据安全栏目，政策中也没有提及公司或国家。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合谁使用",
        "items": [
          "**自建 Open WebUI 的用户**，想要一款能处理反向代理后登录的原生手机客户端。",
          "**使用多种后端的用户**，想用一个应用管理 Open WebUI、Ollama、OpenRouter 和 Hermes。",
          "**偏好开源的用户**，看重可阅读的 GPL-3.0 代码，以及商店之外的 Android APK。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们无法核实的内容",
        "items": [
          "**性能。**流式输出的稳定性、语音质量、耗电情况以及在特定反向代理后的表现均未测试。",
          "**价格。**官网称免费且无付费档，但 App Store 收费；购买除获取商店下载外还包含什么，资料没有说明。",
          "**Mac 应用。**README 介绍了面向 Apple Silicon Mac 的 Conduit Desktop，但截至 2026 年 11 月 17 日，GitHub 最近 100 个发布中没有一个带桌面版标签。",
          "**测试版与新服务商。**LibreChat 支持标注为测试版，Apple 设备端模型和 Private Cloud Compute 分别依赖 iOS 26 和 iOS 27。",
          "**开发者身份。**资料给出了 App Store 卖家和 GitHub 账号，但没有公司、地址或国家。"
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
            "应用": "Reins",
            "平台": "iPhone、iPad",
            "价格 / 许可": "免费 + Pro / 闭源",
            "主要区别": "面向 Ollama 和 LM Studio 的客户端，还能在设备上运行 MLX 模型"
          },
          {
            "应用": "Phantasm",
            "平台": "iPhone",
            "价格 / 许可": "免费 / 未注明许可",
            "主要区别": "面向自建 Ollama、vLLM 或 llama.cpp 服务器的聊天客户端"
          },
          {
            "应用": "Enchanted",
            "平台": "iPhone、Mac",
            "价格 / 许可": "免费 / Apache 2.0",
            "主要区别": "需要另行搭建 Ollama 服务器的 Ollama 客户端"
          }
        ],
        "note": "选择之前，请在各应用自己的页面上核对当前的价格、许可证和平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "Conduit 在不同商店的价格是多少？",
            "a": "2026 年 11 月 17 日，App Store 页面显示：美国 $3.99，德国、西班牙和法国 3,99 €，日本 ¥600，韩国 ₩6,600，巴西 R$ 24,90。Google Play 显示安装按钮、无价格，GitHub 发布页附有 APK 和 IPA 文件。"
          },
          {
            "q": "Conduit 自己运行哪些模型？",
            "a": "没有自带模型：模型运行在你的服务器或服务商上。例外是支持 iOS 26 的 iPhone 上的 Apple 设备端模型，据 README，它可离线运行、上下文为 4K，但不支持图像输入和工具调用。"
          },
          {
            "q": "有 Mac 版本吗？",
            "a": "README 介绍了面向 macOS 14 或更高版本 Apple Silicon Mac 的 Conduit Desktop，已签名、公证并通过 Sparkle 更新。2026 年 11 月 17 日在 GitHub 上未找到桌面版发布，因此尚未证实。"
          },
          {
            "q": "推送通知会让我的聊天经过开发者吗？",
            "a": "推送在你开启之前是关闭的。据政策，开发者的中继只转发它无法读取的加密通知；在 Android 上，你可以改用 UnifiedPush 分发器，这样就不经过该中继。"
          },
          {
            "q": "Conduit 支持哪些界面语言？",
            "a": "README 列出 14 种语言版本：英语、德语、西班牙语、法语、意大利语、日语、韩语、荷兰语、俄语、简体和繁体中文、捷克语、斯洛伐克语和波兰语。App Store 列出 12 种语言。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "Conduit 是一种持续更新的开源方式，可让你在 iPhone 或 Android 手机上访问自建的 Open WebUI 服务器或直连模型接口，其登录方式适合真实的反向代理环境。另一方面，资料没有说明它的实际表现、网站称免费而 iOS 版却收费的原因、Mac 应用是否已发布，以及开发者是谁。它适合已经运行自有服务器、并愿意先试用 Android 版或阅读代码的用户；需要经过审计的隐私保证的人，应把政策视为声明而非证明。"
      },
      "sources": {
        "id": "sources",
        "title": "资料来源",
        "items": [
          "[Conduit 官网](https://conduit.mobile) — 功能、平台、价格说明和商店链接，核对于 2026 年 11 月 17 日。",
          "[App Store 上的 Conduit](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) — 卖家、各商店价格、版本、大小和隐私标签，核对于 2026 年 11 月 17 日。",
          "[Google Play 上的 Conduit](https://play.google.com/store/apps/details?id=app.cogwheel.conduit) — 安装按钮、更新日期和下载量区间，核对于 2026 年 11 月 17 日。",
          "[GitHub 上的 Conduit](https://github.com/cogwheel0/conduit) — README、GPL-3.0 许可证文件、发布和提交记录，核对于 2026 年 11 月 17 日。",
          "[Conduit 隐私政策](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md) — 数据流向、推送中继和权限，自 2026 年 11 月 9 日起生效。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "相关阅读",
        "items": [
          "[Reins 评测](/zh/power-local-llm/reins-review) — 面向自建 Ollama 或 LM Studio 服务器的聊天客户端，自第 2 版起可在设备上运行 MLX 模型。",
          "[Phantasm 评测](/zh/power-local-llm/phantasm-review) — 面向自建 Ollama、vLLM 或 llama.cpp 服务器的免费 iPhone 聊天客户端。",
          "[Enchanted 评测](/zh/power-local-llm/enchanted-review) — 面向 iPhone 和 Mac 的免费 Apache-2.0 Ollama 客户端。",
          "[LibreChat 评测](/zh/power-local-llm/librechat-review-2026) — Conduit 以测试版支持连接的自建聊天服务器。",
          "[iPhone 本地大模型应用推荐](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 本评测所属的综合对比。",
          "[Android 本地大模型应用推荐](/zh/power-local-llm/best-local-llm-apps-android-2026) — 本评测所属的 Android 综合对比。",
          "[本地大模型软件目录](/zh/directory) — 本地 AI 工具的完整目录。"
        ]
      }
    }
  },
  ko: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-17",
    "dateModified": "2026-11-17",
    "next_refresh_due": "2027-05-17",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/conduit-review-hero-ko.webp",
    "title": "Conduit 리뷰: Open WebUI와 자체 모델용 모바일 클라이언트",
    "seoTitle": "Conduit 리뷰: Open WebUI용 모바일 클라이언트",
    "intro": "Conduit은 직접 운영하는 Open WebUI 서버에 연결하고, 4.0 버전부터는 OpenAI 호환 엔드포인트, Ollama, OpenRouter, LibreChat, Hermes 에이전트에도 연결할 수 있는 iPhone·Android용 오픈소스 앱입니다. 이 리뷰는 개발자의 [웹사이트](https://conduit.mobile), [App Store](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287)와 [Google Play](https://play.google.com/store/apps/details?id=app.cogwheel.conduit) 등록 정보, 개인정보 처리방침, [GitHub 저장소](https://github.com/cogwheel0/conduit)를 근거로 2026년 11월 17일에 확인했으며, PromptQuorum은 앱을 직접 테스트하지 않았습니다.",
    "metaDescription": "Conduit 리뷰: Open WebUI, OpenAI 호환 엔드포인트, Ollama, Hermes에 연결하는 iPhone·Android 클라이언트. GPL-3.0, iOS는 유료. 미검증.",
    "twitterDescription": "Conduit 리뷰: 직접 운영하는 Open WebUI용 Flutter 클라이언트로 Ollama, OpenRouter, Hermes에도 연결합니다. 출처가 확인한 내용과 확인하지 못한 내용.",
    "audience": "Open WebUI를 직접 운영하거나 자체 모델 엔드포인트를 쓰면서 Conduit이 무엇을 하는지, 비용은 얼마인지, 어떤 내용이 확인되지 않았는지 알고 싶은 iPhone·Android 사용자.",
    "readTime": "6분 읽기",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Conduit 리뷰",
    "targetKeywords": [
      "conduit 리뷰",
      "conduit open webui 앱",
      "open webui 모바일 앱",
      "open webui iphone 클라이언트",
      "open webui android 앱",
      "자체 호스팅 ai 채팅 앱",
      "hermes agent 모바일 클라이언트"
    ],
    "current_models_mentioned": [
      "Apple Foundation Models"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "Android 스마트폰"
    ],
    "leadAnswerBlock": "**Conduit(버전 4.3.1, 2026년 11월 11일 출시)은 Open WebUI에 연결하고, 4.0 버전부터는 OpenAI 호환 엔드포인트, Ollama, OpenRouter, Hermes 에이전트와도 직접 통신하는 iPhone·Android용 오픈소스 클라이언트입니다.** Flutter로 만들어졌고 라이선스는 GPL-3.0입니다. 개발자는 채팅이 기기에 남고 콘텐츠를 받는 자체 백엔드가 없다고 설명하며, 여기의 모든 내용은 개발자 웹사이트, 스토어 등록 정보, 저장소에서 가져왔습니다.",
    "quickAnswerTop": {
      "ko": {
        "question": "Conduit에는 Open WebUI 서버가 필요합니까?",
        "answer": "아닙니다. README에 따르면 4.0 버전부터 Conduit은 Open WebUI 서버가 있든 없든 동작하며, OpenAI 호환 엔드포인트, Ollama, OpenRouter, Hermes 에이전트에 대신 연결할 수 있습니다. 지원되는 iPhone에서는 Apple의 기기 내 모델도 선택할 수 있습니다.",
        "bullets": [
          "README에 따르면 Open WebUI 연결에서는 폴더, 노트, 채널, 워크스페이스를 포함한 전체 기능을 쓸 수 있습니다.",
          "개발자에 따르면 채팅, 노트, 임시 저장본은 오프라인에서도 기기에 저장됩니다.",
          "음성 입력과 음성 통화 모드가 기능으로 나열되어 있습니다.",
          "iOS 버전은 App Store에서 유료이고 Android 버전은 가격 없이 등록되어 있습니다."
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
        "label": "Conduit이란?",
        "anchor": "what-is-conduit"
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
            "text": "Conduit은 자체 클라우드 서비스가 아니라 사용자의 Open WebUI, LibreChat, Hermes, 모델 엔드포인트에 연결하는 iPhone·Android 네이티브 클라이언트입니다."
          },
          {
            "type": "plain-terms",
            "text": "이미 쓰고 있는 서버나 제공업체의 주소를 입력하고 로그인하면, 휴대폰에서 파일, 음성, 서버 도구와 함께 채팅할 수 있습니다."
          }
        ],
        "items": [
          "유지보수: 버전 4.3.1은 2026년 11월 11일에 출시되었고 GitHub 저장소의 마지막 푸시는 2026년 11월 17일이므로 방치 프로젝트 경고는 해당되지 않습니다.",
          "백엔드: Open WebUI와 제공업체 직접 엔드포인트부터 Hermes 에이전트와 Apple 기기 내 모델까지 6가지 연결 방식입니다.",
          "라이선스: 소스 코드는 GPL-3.0이며 스토어 빌드는 별도 다운로드입니다.",
          "음성: 음성 입력과 음성 통화 모드가 나열되어 있으나 여기서는 테스트하지 않았습니다.",
          "개발자: 개인 개발자이며 출처에는 회사나 국가가 나와 있지 않습니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이 리뷰는 2026년 11월 17일에 확인한 개발자 웹사이트, 스토어 등록 정보, 개인정보 처리방침, GitHub 저장소를 근거로 합니다. PromptQuorum은 앱을 설치, 실행, 측정하지 않았으므로 속도, 음성 품질, 안정성은 평가하지 않았습니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-conduit",
        "title": "Conduit이란?",
        "content": [
          "**Conduit은 직접 운영하는 Open WebUI 서버, 모델 제공업체, 또는 직접 운영하는 Hermes 에이전트에 연결하는 iOS·Android용 네이티브 모바일 클라이언트입니다.** 두 스토어 모두 “Conduit: Open WebUI & AI”로 등록되어 있으며, App Store 판매자는 Tunap Paul, GitHub 계정은 cogwheel0입니다.",
          "README는 리버스 프록시 뒤 로그인이나 앱이 백그라운드로 가면 끊기는 스트리밍처럼 Open WebUI의 모바일 약점을 해결하기 위해 만들었다고 설명합니다. Conduit이라는 이름을 쓰는 다른 제품도 있으며, 이 리뷰는 [conduit.mobile](https://conduit.mobile)의 앱만 다룹니다."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "설치 방법",
        "content": [
          "**Conduit은 iPhone, iPad, Android용 스토어 다운로드이며, 같은 빌드가 GitHub 릴리스에도 첨부되어 있습니다.**"
        ],
        "columns": [
          "옵션",
          "입수 방법"
        ],
        "rows": [
          {
            "옵션": "iPhone·iPad",
            "입수 방법": "[App Store의 Conduit](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287), 유료 다운로드, 한국 App Store에서 ₩6,600"
          },
          {
            "옵션": "Android",
            "입수 방법": "[Google Play의 Conduit](https://play.google.com/store/apps/details?id=app.cogwheel.conduit), 설치 버튼이 있고 가격 표시 없음"
          },
          {
            "옵션": "웹사이트",
            "입수 방법": "[conduit.mobile](https://conduit.mobile)"
          },
          {
            "옵션": "개인정보 처리방침",
            "입수 방법": "[GitHub의 PRIVACY_POLICY.md](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md)"
          },
          {
            "옵션": "소스 코드",
            "입수 방법": "[github.com/cogwheel0/conduit](https://github.com/cogwheel0/conduit), GPL-3.0, 릴리스에 APK와 IPA 파일 포함"
          }
        ],
        "note": "검토한 버전은 4.3.1이며 App Store와 GitHub에 따르면 2026년 11월 11일에 출시되었습니다. iOS 앱 크기는 122.6 MB입니다. 웹사이트는 유료 요금제가 없다고 하지만 App Store는 다운로드에 요금을 받으며, 출처는 이 차이를 설명하지 않습니다. 가격은 스토어마다 다릅니다."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "요구 사항",
        "content": [
          "**웹사이트는 iOS 16.0 이상과 Android 7.0 이상을 제시하며, Apple의 기기 내 모델에는 iOS 26이 필요합니다.**"
        ],
        "columns": [
          "항목",
          "출처의 기재 내용"
        ],
        "rows": [
          {
            "항목": "운영체제",
            "출처의 기재 내용": "iOS 16.0 이상, Android 7.0(API 24) 이상"
          },
          {
            "항목": "Apple 모델",
            "출처의 기재 내용": "기기 내 모델: Apple Intelligence가 있는 iOS 26, Private Cloud Compute: Apple 권한이 있는 iOS 27"
          },
          {
            "항목": "서버 모드",
            "출처의 기재 내용": "직접 운영하는 Open WebUI(0.11 추적), LibreChat 0.8.8 이상(베타) 또는 Hermes 서버, 휴대폰에서 접속 가능해야 함"
          },
          {
            "항목": "계정",
            "출처의 기재 내용": "Conduit 자체에는 불필요하며 서버나 제공업체가 계정이나 API 키를 요구할 수 있음"
          },
          {
            "항목": "메모리와 저장 공간",
            "출처의 기재 내용": "최소 사양 기재 없음, 모델은 서버, 제공업체 또는 Apple 시스템에서 실행됨"
          }
        ],
        "note": "어떤 휴대폰에서 Apple의 기기 내 모델이 잘 동작하는지는 출처에서 다루지 않습니다."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "시작하는 방법",
        "content": [
          "**단계는 README의 시작 가이드를 따랐으며, PromptQuorum은 직접 실행하지 않았습니다.**"
        ],
        "numberedItems": [
          {
            "title": "앱 설치",
            "whyItMatters": "App Store 또는 Google Play에서 Conduit을 받고 첫 실행 때 연결 방식을 선택합니다."
          },
          {
            "title": "백엔드 추가",
            "whyItMatters": "Open WebUI 서버의 기본 URL을 입력하거나, OpenAI 호환 또는 Ollama 프로필을 주소와 필요한 API 키 또는 사용자 지정 헤더와 함께 추가합니다."
          },
          {
            "title": "로그인",
            "whyItMatters": "사용자 이름과 비밀번호, LDAP, 직접 입력한 JWT, SSO, OAuth 또는 환경이 요구하는 프록시 로그인을 사용합니다. 직접 연결에는 계정이 필요 없습니다."
          },
          {
            "title": "모델 선택 후 채팅",
            "whyItMatters": "검색된 모델을 선택해 채팅을 시작하고, 파일이나 이미지를 첨부하며, 백엔드가 지원하면 음성이나 서버 측 도구를 켭니다."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "출처가 확인한 기능",
        "content": [
          "**아래 항목은 모두 웹사이트 또는 저장소 README에서 가져온 것이며, 독립적으로 테스트하지 않았습니다.**"
        ],
        "items": [
          "**연결 방식.** Open WebUI(채팅, 폴더, 노트, 채널, 워크스페이스, 도구, 웹 검색, 이미지 생성), 베타 단계의 LibreChat, OpenAI 호환 엔드포인트 직접 연결(Chat Completions 또는 Responses, LM Studio, Azure 방식), 네이티브 Ollama, OpenRouter, 도구 호출을 실시간으로 보여 주고 승인을 요청하는 Hermes 에이전트, Apple 모델.",
          "**채팅.** WebSocket 기반 토큰 스트리밍, 파일과 이미지 첨부, 대화 검색, 임시 채팅, 코드, 수식, Mermaid 다이어그램, 인용의 네이티브 렌더링.",
          "**음성.** 기기 내 또는 서버 음성 인식을 쓰는 음성 입력과 전체 기능의 음성 통화 모드.",
          "**자체 호스팅 환경 로그인.** 비밀번호, LDAP, JWT, SSO와 OAuth, 사용자 지정 헤더, oauth2-proxy, Authelia, Authentik, Pangolin, Cloudflare Tunnel용 리버스 프록시 흐름.",
          "**휴대폰 연동.** iOS와 Android 홈 화면 위젯, 공유 시트, iOS App Intents와 단축어, 오프라인 노트, 선택형 푸시 알림."
        ],
        "note": "README에 따르면 채널, 노트, 웹 검색, 이미지 생성처럼 서버에 의존하는 기능은 사용 중인 환경이 제공할 때만 표시됩니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "데이터 흐름과 개인정보",
        "content": [
          "**2026년 11월 9일부터 시행되는 개인정보 처리방침은 앱이 콘텐츠를 받는 백엔드를 운영하지 않으며 서드파티 분석·광고 SDK도 포함하지 않는다고 밝힙니다.** 메시지, 파일, 이미지, 음성 입력은 기기에서 선택한 서버나 제공업체로 직접 전송되고, 자격 증명은 iOS 키체인 또는 Android Keystore에 저장됩니다. 기본적으로 로그인한 상태의 직접 채팅은 활성 Open WebUI 서버에도 동기화되며, 새 직접 채팅은 기기에만 보관하도록 선택할 수 있습니다.",
          "개발자가 운영하는 서비스가 하나 있습니다. 선택형 푸시 알림 릴레이로, 방침에 따르면 읽을 수 없는 암호화된 알림만 전달하며 데이터베이스나 접속 로그를 두지 않습니다. Google Play 빌드에는 푸시 전용 Firebase Cloud Messaging이 포함되고, FOSS Android 빌드에는 Google 서비스가 없습니다. App Store 등록 정보에는 “데이터 수집 안 함”이 표시되며, Apple은 이를 검증하지 않았다고 명시합니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이는 개발자의 주장이지 감사 결과가 아닙니다. PromptQuorum은 앱의 네트워크 트래픽이나 Google Play의 데이터 보안 항목을 점검하지 않았고, 방침에는 회사나 국가가 나와 있지 않습니다."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "이런 분께 적합합니다",
        "items": [
          "**Open WebUI를 직접 운영하는 분**으로, 리버스 프록시 뒤 로그인을 처리하는 네이티브 휴대폰 클라이언트가 필요한 경우.",
          "**여러 백엔드를 쓰는 분**으로, Open WebUI, Ollama, OpenRouter, Hermes를 앱 하나로 다루고 싶은 경우.",
          "**오픈소스를 중시하는 분**으로, 읽을 수 있는 GPL-3.0 코드와 스토어 밖의 Android APK를 높이 평가하는 경우."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 내용",
        "items": [
          "**성능.** 스트리밍 안정성, 음성 품질, 배터리 소모, 특정 리버스 프록시 뒤에서의 동작은 테스트하지 않았습니다.",
          "**가격.** 웹사이트는 무료이며 유료 요금제가 없다고 하지만 App Store는 요금을 받으며, 구매에 스토어 접근 외에 무엇이 포함되는지는 기재되어 있지 않습니다.",
          "**Mac 앱.** README는 Apple Silicon Mac용 Conduit Desktop을 설명하지만, 2026년 11월 17일 기준 GitHub 최신 릴리스 100개 중 데스크톱 태그가 붙은 것은 없었습니다.",
          "**베타와 새 제공업체.** LibreChat 지원은 베타로 표시되며, Apple 기기 내 모델과 Private Cloud Compute는 각각 iOS 26과 iOS 27에 의존합니다.",
          "**개발자 신원.** 출처에는 App Store 판매자와 GitHub 계정이 나와 있지만 회사, 주소, 국가는 없습니다."
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
            "앱": "Reins",
            "플랫폼": "iPhone, iPad",
            "가격 / 라이선스": "무료 + Pro / 비공개 소스",
            "핵심 차이": "기기에서 MLX 모델도 실행하는 Ollama·LM Studio 클라이언트"
          },
          {
            "앱": "Phantasm",
            "플랫폼": "iPhone",
            "가격 / 라이선스": "무료 / 라이선스 미기재",
            "핵심 차이": "직접 운영하는 Ollama, vLLM, llama.cpp 서버용 채팅 클라이언트"
          },
          {
            "앱": "Enchanted",
            "플랫폼": "iPhone, Mac",
            "가격 / 라이선스": "무료 / Apache 2.0",
            "핵심 차이": "별도 Ollama 서버가 필요한 Ollama 클라이언트"
          }
        ],
        "note": "선택하기 전에 각 앱의 최신 가격, 라이선스, 플랫폼을 해당 앱 페이지에서 확인하십시오."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "스토어별 Conduit 가격은 얼마입니까?",
            "a": "2026년 11월 17일 App Store 등록 정보에는 미국 $3.99, 독일·스페인·프랑스 3,99 €, 일본 ¥600, 한국 ₩6,600, 브라질 R$ 24,90이 표시되었습니다. Google Play에는 설치 버튼이 있고 가격 표시는 없으며, GitHub 릴리스에는 APK와 IPA 파일이 첨부되어 있습니다."
          },
          {
            "q": "Conduit은 스스로 어떤 모델을 실행합니까?",
            "a": "자체 모델은 없으며 모델은 사용자의 서버나 제공업체에서 실행됩니다. 예외는 iOS 26을 지원하는 iPhone의 Apple 기기 내 모델로, README에 따르면 오프라인으로 4K 컨텍스트에서 동작하지만 이미지 입력과 도구 호출은 지원하지 않습니다."
          },
          {
            "q": "Mac 버전이 있습니까?",
            "a": "README는 macOS 14 이상 Apple Silicon Mac용 Conduit Desktop을 서명·공증되어 Sparkle로 업데이트된다고 설명합니다. 2026년 11월 17일에 GitHub에서 데스크톱 릴리스를 찾지 못했으므로 확인되지 않았습니다."
          },
          {
            "q": "푸시 알림을 쓰면 내 채팅이 개발자를 거칩니까?",
            "a": "푸시는 켜기 전까지 꺼져 있습니다. 방침에 따르면 개발자의 릴레이는 읽을 수 없는 암호화된 알림만 전달하며, Android에서는 UnifiedPush 배포자를 사용해 릴레이를 거치지 않을 수도 있습니다."
          },
          {
            "q": "Conduit은 어떤 인터페이스 언어를 지원합니까?",
            "a": "README는 14개 로케일을 나열합니다. 영어, 독일어, 스페인어, 프랑스어, 이탈리아어, 일본어, 한국어, 네덜란드어, 러시아어, 중국어 간체와 번체, 체코어, 슬로바키아어, 폴란드어입니다. App Store에는 12개 언어가 나열됩니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "총평",
        "content": "Conduit은 iPhone이나 Android 휴대폰에서 직접 운영하는 Open WebUI 서버 또는 모델 엔드포인트에 접속할 수 있는, 활발히 업데이트되는 오픈소스 수단이며, 실제 리버스 프록시 환경에 맞는 로그인 경로를 갖추고 있습니다. 반면 출처는 성능이 어떤지, 웹사이트는 무료라는데 iOS 버전은 왜 유료인지, Mac 앱이 출시되었는지, 개발자가 누구인지를 열어 두고 있습니다. 이미 자체 서버를 운영하며 Android 빌드를 먼저 써 보거나 코드를 읽어 볼 수 있는 분께 맞고, 감사를 거친 개인정보 보장이 필요한 분은 방침을 증명이 아닌 주장으로 받아들여야 합니다."
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[Conduit 웹사이트](https://conduit.mobile) — 기능, 플랫폼, 가격 설명, 스토어 링크. 2026년 11월 17일 확인.",
          "[App Store의 Conduit](https://apps.apple.com/us/app/conduit-open-webui-client/id6749840287) — 판매자, 스토어별 가격, 버전, 크기, 개인정보 라벨. 2026년 11월 17일 확인.",
          "[Google Play의 Conduit](https://play.google.com/store/apps/details?id=app.cogwheel.conduit) — 설치 버튼, 업데이트 날짜, 다운로드 구간. 2026년 11월 17일 확인.",
          "[GitHub의 Conduit](https://github.com/cogwheel0/conduit) — README, GPL-3.0 라이선스 파일, 릴리스, 커밋. 2026년 11월 17일 확인.",
          "[Conduit 개인정보 처리방침](https://github.com/cogwheel0/conduit/blob/main/PRIVACY_POLICY.md) — 데이터 흐름, 푸시 릴레이, 권한. 2026년 11월 9일부터 시행."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[Reins 리뷰](/ko/power-local-llm/reins-review) — 직접 운영하는 Ollama·LM Studio 서버용 채팅 클라이언트로, 버전 2부터 기기 내 MLX 모델도 지원합니다.",
          "[Phantasm 리뷰](/ko/power-local-llm/phantasm-review) — 직접 운영하는 Ollama·vLLM·llama.cpp 서버용 무료 iPhone 채팅 클라이언트.",
          "[Enchanted 리뷰](/ko/power-local-llm/enchanted-review) — iPhone과 Mac용 무료 Apache 2.0 Ollama 클라이언트.",
          "[LibreChat 리뷰](/ko/power-local-llm/librechat-review-2026) — Conduit이 베타로 연결할 수 있는 자체 호스팅 채팅 서버.",
          "[iPhone용 로컬 LLM 앱 추천](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — 이 리뷰가 속한 종합 비교 글.",
          "[Android용 로컬 LLM 앱 추천](/ko/power-local-llm/best-local-llm-apps-android-2026) — 이 리뷰가 속한 Android 종합 비교 글.",
          "[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록."
        ]
      }
    }
  },
}
