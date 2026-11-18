// Phantasm Review: Self-Hosted AI Chat App for iPhone
// Slug: phantasm-review
// Companion to: reins-review, enchanted-review, lm-mini-review
// Sources: the App Store listing (apps.apple.com/us/app/phantasm/id6785720059 and the iTunes lookup API), getphantasm.com, getphantasm.com/privacy.html
// (last updated 2 July 2026), getphantasm.com/support.html and the GitHub repo benthecarman/phantasm (README, root listing, commits, tags), all checked
// 2026-11-13 — no hands-on testing. The app is free in every storefront, so no per-storefront prices are needed.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-13",
    "dateModified": "2026-11-13",
    "next_refresh_due": "2027-05-13",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/phantasm-review-hero-en.webp",
    "title": "Phantasm Review: Self-Hosted AI Chat App for iPhone",
    "seoTitle": "Phantasm Review: Self-Hosted AI Chat App for iPhone",
    "intro": "Phantasm is a free iPhone chat app, listed under the developer Benjamin Carman, that connects to an AI backend you run yourself, such as Ollama, vLLM or llama.cpp, and needs no account. It does not run models on the phone: the app is the client, and an optional companion server adds web search and image generation. This review is based on the [App Store listing](https://apps.apple.com/us/app/phantasm/id6785720059), the [website](https://getphantasm.com), the [privacy policy](https://getphantasm.com/privacy.html) and the [GitHub repository](https://github.com/benthecarman/phantasm), checked on 13 November 2026. PromptQuorum has not installed or run it.",
    "metaDescription": "Phantasm review: free iPhone chat app for your own Ollama, vLLM or llama.cpp server. The developer says no account or telemetry. Untested by PromptQuorum.",
    "twitterDescription": "Phantasm review: a free iPhone chat client for your own Ollama, vLLM or llama.cpp server, with no account. What the sources confirm and what they do not.",
    "audience": "iPhone owners who run Ollama, vLLM or llama.cpp at home and want to know what Phantasm does, what it costs and which claims the sources leave unconfirmed.",
    "readTime": "6 min read",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Phantasm review",
    "targetKeywords": [
      "phantasm review",
      "phantasm ios app",
      "ollama client iphone",
      "self-hosted ai chat iphone",
      "private ai chat iphone",
      "openai-compatible ios client",
      "llama.cpp iphone app"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "Mac"
    ],
    "leadAnswerBlock": "**Phantasm (version 1.2 on the App Store, released on 25 July 2026) is a free iPhone chat app that talks to an OpenAI-compatible AI server you run yourself, so the models run on your hardware, not on the phone.** The developer says it has no accounts, no analytics and no telemetry, and every statement here comes from the App Store listing, the website, the privacy policy and the GitHub repository; PromptQuorum has not tested it.",
    "quickAnswerTop": {
      "en": {
        "question": "Does Phantasm run AI models on the iPhone?",
        "answer": "No. According to the developer, the app is a client: it sends your messages to the backend URL you enter, typically a machine on your own network, and only speech transcription runs on the device.",
        "bullets": [
          "Any OpenAI-compatible server works, including a bare Ollama instance.",
          "An optional orchestrator server adds web search, image generation and research modes.",
          "Several backend profiles cover home network, VPN or tunnel setups.",
          "Photos and files can be attached to a chat, and dictation runs on the device."
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
        "label": "What Is Phantasm?",
        "anchor": "what-is-phantasm"
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
            "text": "Phantasm is an iPhone chat client for Ollama, vLLM, llama.cpp and other OpenAI-compatible servers that you host yourself."
          },
          {
            "type": "plain-terms",
            "text": "You enter the address and token of the computer that runs your models, and the app then chats with it, attaches photos and files and, with the optional server, searches the web."
          }
        ],
        "items": [
          "Maintenance: App Store version 1.2 is dated 25 July 2026, and the last repository commit, a build bump to 1.3, is dated 16 August 2026; the App Store did not list 1.3 on 13 November 2026.",
          "Cost: free download; the repository README calls accounts, billing and cloud sync a deferred premium layer.",
          "Platform: iPhone with iOS 18 or later; the listing also shows Mac and Apple Vision requirements but says the app is designed for iPhone.",
          "Source: the website and privacy policy call the app and server open source, but the repository showed no licence file when checked.",
          "Maker: Benjamin Carman is the App Store seller, and the first release was on 8 July 2026."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "This review is based on the App Store listing, the website, the privacy policy, the support page and the GitHub repository, checked on 13 November 2026. PromptQuorum has not installed, run or benchmarked the app or the orchestrator, so speed, answer quality and setup effort are not assessed."
          }
        ]
      },
      "overview": {
        "id": "what-is-phantasm",
        "title": "What Is Phantasm?",
        "content": [
          "**Phantasm is an iOS chat client for AI models that you host yourself, not an app that contains a model.** The App Store lists it as \"Phantasm\" from the seller Benjamin Carman, it first appeared on 8 July 2026, and the website calls it a \"fast, self-hostable AI chat app for iOS that talks to a backend you control\".",
          "The project has two parts: the SwiftUI app, which takes a server URL and a token, and an optional Rust server called the orchestrator that runs next to Ollama and ComfyUI and adds web search, image generation and a tool loop. Pointed at a bare Ollama instance, the app falls back to plain chat, according to the README."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Get It",
        "content": [
          "**Phantasm is a free App Store download for iPhone; the sources name no Android, Windows or web version.**"
        ],
        "columns": [
          "Option",
          "How to get it"
        ],
        "rows": [
          {
            "Option": "iPhone",
            "How to get it": "[Phantasm on the App Store](https://apps.apple.com/us/app/phantasm/id6785720059), free download"
          },
          {
            "Option": "Website",
            "How to get it": "[getphantasm.com](https://getphantasm.com)"
          },
          {
            "Option": "Privacy policy",
            "How to get it": "[getphantasm.com/privacy.html](https://getphantasm.com/privacy.html)"
          },
          {
            "Option": "Backend server",
            "How to get it": "[Orchestrator on GitHub](https://github.com/benthecarman/phantasm), optional, starts with docker compose"
          },
          {
            "Option": "Source code",
            "How to get it": "[github.com/benthecarman/phantasm](https://github.com/benthecarman/phantasm), no licence file"
          }
        ],
        "note": "Version reviewed: 1.2, released on 25 July 2026 per the App Store; the app is 19.1 MB. The app has no built-in model, so you also need a server to chat with. The listing shows the price as free and names no in-app purchases."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requirements",
        "content": [
          "**The App Store lists iOS 18.0 as the minimum, and the app cannot chat without a server that you provide.**"
        ],
        "columns": [
          "Item",
          "What the sources say"
        ],
        "rows": [
          {
            "Item": "Operating system",
            "What the sources say": "iOS 18.0 or later on iPhone"
          },
          {
            "Item": "Backend",
            "What the sources say": "An OpenAI-compatible server you provide, such as Ollama, vLLM or llama.cpp, reachable from the phone"
          },
          {
            "Item": "Connection",
            "What the sources say": "A server URL and a token; the token is kept in the iOS Keychain"
          },
          {
            "Item": "Orchestrator (optional)",
            "What the sources say": "Docker Compose; adds Brave web search, ComfyUI image generation and a tool loop"
          },
          {
            "Item": "Account",
            "What the sources say": "None; the developer says there are no accounts"
          }
        ],
        "note": "The sources name no minimum iPhone model or memory; the hardware you need depends on the models your own server runs. Reaching the server from outside your home network is your own job: the README says you use a server URL that is already reachable from your device."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "How to Get Started",
        "content": [
          "**The steps follow the developer's own description of the app; PromptQuorum has not run them.**"
        ],
        "numberedItems": [
          {
            "title": "Run a backend",
            "whyItMatters": "Start Ollama or another OpenAI-compatible server on a machine you own; optionally add the orchestrator with docker compose for web search and image generation."
          },
          {
            "title": "Install the app",
            "whyItMatters": "Get Phantasm from the App Store; no account is needed."
          },
          {
            "title": "Enter the URL and token",
            "whyItMatters": "Add the server address and token in Settings; the app finds the available models and capabilities on its own."
          },
          {
            "title": "Chat",
            "whyItMatters": "Pick a model, attach photos or files, and switch web access and image generation on or off for each chat."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Confirmed by the Sources",
        "content": [
          "**Every item below comes from the App Store description, the website or the repository; none has been independently tested.**"
        ],
        "items": [
          "**Flexible backends.** Any OpenAI-compatible endpoint, with several saved profiles for home network, VPN or tunnel setups and capability detection at runtime.",
          "**Chat display.** Streaming answers with markdown, syntax-highlighted code with a copy button, charts, inline math and the model's reasoning when a thinking model is selected; version 1.2 adds token and speed estimates.",
          "**Media.** Photo and file attachments for vision models, inline generated images, and audio and video generation with compatible servers since version 1.2.",
          "**Voice and system integration.** On-device dictation, read-aloud replies, Siri and Shortcuts, and long generations that pick up again after the app was in the background.",
          "**Tools.** Per-chat switches for web access and image generation, plus optional location, calendar and Apple Health tools that are off by default and shared only with your own backend."
        ],
        "note": "Web search, image generation and research modes need the optional orchestrator or a backend with matching capabilities; a bare Ollama server gives plain chat."
      },
      "privacy": {
        "id": "privacy",
        "title": "Data Flow and Privacy",
        "content": [
          "**The privacy policy, last updated on 2 July 2026, says Phantasm has no accounts, no analytics, no telemetry and no servers of the developer in the middle.** Messages go only to the backend URL you enter, conversations are stored on the phone, and speech transcription runs on the device. The App Store privacy label reads \"Data Not Collected\".",
          "Where your data travels depends on your backend. The website says conversations never leave your network, but the app also supports VPN and tunnel profiles, so a remote setup sends traffic over whatever route you build. The optional device tools share location, calendar or Health data with your backend only when you switch them on for a chat. The website is served through Cloudflare, which processes standard request data, and the policy says it sets no cookies."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "These are the developer's declarations, not audit results, and PromptQuorum has not inspected the app's network traffic. When the orchestrator's web search is on, the server queries Brave Search according to the README, so those queries leave your network."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**Ollama, vLLM or llama.cpp owners** who want a native iPhone front end for models already running at home.",
          "**Privacy-minded users** who want an app with no account and no analytics, as the developer describes it.",
          "**Home-lab tinkerers** who are comfortable running Docker Compose for web search and image generation."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Performance.** Speed, battery use and behaviour in very long chats are untested.",
          "**Orchestrator.** Web search, ComfyUI image generation and the tool loop were not run; the README calls the project an MVP build.",
          "**Licence.** The site calls the app and server open source, but the repository showed no licence file on 13 November 2026, so the terms for reuse are not stated.",
          "**Other devices.** The listing shows Mac and Apple Vision requirements yet says the app is designed for iPhone; iPad and Mac support is not described.",
          "**Latest build.** The repository holds a version 1.3 build bump from 16 August 2026 that the App Store listing did not show on 13 November 2026."
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
            "App": "[LM Mini](/power-local-llm/lm-mini-review)",
            "Platforms": "iPhone, iPad, Mac listing",
            "Price / license": "Free + in-app / closed source",
            "Key difference": "Also offers remote access and optional cloud APIs"
          },
          {
            "App": "[Enchanted](/power-local-llm/enchanted-review)",
            "Platforms": "iPhone, Mac",
            "Price / license": "Free / Apache 2.0",
            "Key difference": "Ollama client that needs a separate Ollama server"
          },
          {
            "App": "[Reins](/power-local-llm/reins-review)",
            "Platforms": "iPhone, iPad, Mac listing",
            "Price / license": "Free + Pro / closed source (v2)",
            "Key difference": "Connects to your server and can also run MLX models on the device"
          }
        ],
        "note": "Confirm each app's current price, license and platforms on its own listing before choosing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "Does Phantasm work without a server?",
            "a": "No. The App Store listing says it requires an OpenAI-compatible server that you provide, for example Ollama on your own machine; the privacy policy says only speech transcription runs on the phone."
          },
          {
            "q": "Can I use Phantasm away from home?",
            "a": "The app takes any reachable URL and the listing mentions VPN and tunnel profiles, but the sources describe no built-in remote-access service, and the README lists a managed relay as deferred."
          },
          {
            "q": "Which models does Phantasm support?",
            "a": "Any model your backend serves, because the app bundles none. Vision input, reasoning display and image, audio or video generation depend on what your backend offers."
          },
          {
            "q": "Can I use Phantasm with Siri?",
            "a": "The listing says you can ask Phantasm from Siri and Shortcuts; how deep that integration goes is not described."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Phantasm is a young project with recent commits that gives an iPhone a free, account-free way to reach a home Ollama, vLLM or llama.cpp server, and its privacy policy declares no data collection. Against that, it is only a client, it needs a server you run, its repository showed no licence file on 13 November 2026 although the site calls it open source, and its newest repository build was not on the App Store when checked. It suits people who already host models and want a native front end; anyone who needs audited privacy claims should treat the policy as a declaration, not proof."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Phantasm on the App Store](https://apps.apple.com/us/app/phantasm/id6785720059) — description, version history, requirements and privacy label, checked 13 November 2026.",
          "[Phantasm website](https://getphantasm.com) — feature list and setup steps, checked 13 November 2026.",
          "[Phantasm privacy policy](https://getphantasm.com/privacy.html) — data flow, storage and on-device transcription, last updated 2 July 2026.",
          "[Phantasm support page](https://getphantasm.com/support.html) — setup and contact information, checked 13 November 2026.",
          "[Phantasm on GitHub](https://github.com/benthecarman/phantasm) — README, commits, tags and file listing, checked 13 November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[Reins Review](/power-local-llm/reins-review) — an iPhone and iPad chat app for your own Ollama or LM Studio server that can also run MLX models.",
          "[Enchanted Review](/power-local-llm/enchanted-review) — a free, Apache-2.0 Ollama client for iPhone and Mac.",
          "[LM Mini Review](/power-local-llm/lm-mini-review) — an iPhone and iPad chat app with on-device models and a connection to your own server.",
          "[Best Local LLM Apps for iPhone](/power-local-llm/best-local-llm-apps-iphone-2026) — the roundup of iPhone apps this review belongs to.",
          "[Local LLM Software Directory](/directory) — the full catalogue of local AI tools."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Phantasm Review: Self-Hosted AI Chat App for iPhone",
      "description": "Phantasm review: a free iPhone chat app for self-hosted Ollama, vLLM and llama.cpp servers with an optional orchestrator server. Requirements, privacy and what the sources leave unconfirmed.",
      "url": "https://www.promptquorum.com/power-local-llm/phantasm-review",
      "inLanguage": "en",
      "datePublished": "2026-11-13",
      "dateModified": "2026-11-13",
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
        "audienceType": "iPhone users evaluating a chat client for a self-hosted AI server"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Phantasm"
        },
        {
          "@type": "Thing",
          "name": "Ollama"
        },
        {
          "@type": "Thing",
          "name": "Self-hosted AI"
        },
        {
          "@type": "Thing",
          "name": "iOS apps"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/power-local-llm/phantasm-review"
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
          "name": "Phantasm Review",
          "item": "https://www.promptquorum.com/power-local-llm/phantasm-review"
        }
      ]
    }
  },
  de: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-13",
    "dateModified": "2026-11-13",
    "next_refresh_due": "2027-05-13",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/phantasm-review-hero-de.webp",
    "title": "Phantasm-Rezension: Self-Hosted-KI-Chat-App für das iPhone",
    "seoTitle": "Phantasm-Rezension: Self-Hosted-KI-Chat-App fürs iPhone",
    "intro": "Phantasm ist eine kostenlose iPhone-Chat-App, die unter dem Entwickler Benjamin Carman geführt wird, sich mit einem KI-Backend verbindet, das Sie selbst betreiben (etwa Ollama, vLLM oder llama.cpp), und kein Konto verlangt. Modelle laufen nicht auf dem Telefon: Die App ist der Client, und ein optionaler Begleitserver ergänzt Websuche und Bildgenerierung. Diese Rezension stützt sich auf den [App-Store-Eintrag](https://apps.apple.com/us/app/phantasm/id6785720059), die [Website](https://getphantasm.com), die [Datenschutzerklärung](https://getphantasm.com/privacy.html) und das [GitHub-Repository](https://github.com/benthecarman/phantasm), geprüft am 13. November 2026. PromptQuorum hat die App weder installiert noch ausgeführt.",
    "metaDescription": "Phantasm-Rezension: kostenlose iPhone-Chat-App für Ihren Ollama-, vLLM- oder llama.cpp-Server. Laut Entwickler ohne Konto und Telemetrie. Ungetestet.",
    "twitterDescription": "Phantasm-Rezension: ein kostenloser iPhone-Chat-Client für Ihren eigenen Ollama-, vLLM- oder llama.cpp-Server, ohne Konto. Was die Quellen bestätigen und was nicht.",
    "audience": "iPhone-Nutzer, die Ollama, vLLM oder llama.cpp zu Hause betreiben und wissen möchten, was Phantasm kann, was es kostet und welche Aussagen die Quellen offenlassen.",
    "readTime": "6 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Phantasm Rezension",
    "targetKeywords": [
      "phantasm rezension",
      "phantasm ios app",
      "ollama client iphone",
      "self-hosted ki chat iphone",
      "private ki chat iphone",
      "openai-kompatibler ios client",
      "llama.cpp iphone app"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "Mac"
    ],
    "leadAnswerBlock": "**Phantasm (Version 1.2 im App Store, veröffentlicht am 25. Juli 2026) ist eine kostenlose iPhone-Chat-App, die mit einem OpenAI-kompatiblen KI-Server spricht, den Sie selbst betreiben – die Modelle laufen also auf Ihrer Hardware, nicht auf dem Telefon.** Laut Entwickler gibt es keine Konten, keine Analyse- und keine Telemetriedaten; jede Aussage hier stammt aus dem App-Store-Eintrag, der Website, der Datenschutzerklärung und dem GitHub-Repository, und PromptQuorum hat die App nicht getestet.",
    "quickAnswerTop": {
      "de": {
        "question": "Führt Phantasm KI-Modelle auf dem iPhone aus?",
        "answer": "Nein. Laut Entwickler ist die App ein Client: Sie sendet Ihre Nachrichten an die eingegebene Backend-URL, in der Regel ein Rechner in Ihrem eigenen Netzwerk; nur die Spracherkennung läuft auf dem Gerät.",
        "bullets": [
          "Jeder OpenAI-kompatible Server funktioniert, auch eine einfache Ollama-Instanz.",
          "Ein optionaler Orchestrator-Server ergänzt Websuche, Bildgenerierung und Recherchemodi.",
          "Mehrere Backend-Profile decken Heimnetz-, VPN- und Tunnel-Setups ab.",
          "Fotos und Dateien lassen sich an einen Chat anhängen, das Diktieren läuft auf dem Gerät."
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
        "label": "Was ist Phantasm?",
        "anchor": "what-is-phantasm"
      },
      {
        "label": "Bezugsquellen",
        "anchor": "get-it"
      },
      {
        "label": "Voraussetzungen",
        "anchor": "requirements"
      },
      {
        "label": "So legen Sie los",
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
        "label": "Für wen geeignet",
        "anchor": "who-should-use"
      },
      {
        "label": "Was wir nicht überprüfen konnten",
        "anchor": "who-should-not-use"
      },
      {
        "label": "Konkurrenz und Alternativen",
        "anchor": "vs-alternatives"
      },
      {
        "label": "Häufige Fragen",
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
            "text": "Phantasm ist ein iPhone-Chat-Client für Ollama, vLLM, llama.cpp und andere OpenAI-kompatible Server, die Sie selbst hosten."
          },
          {
            "type": "plain-terms",
            "text": "Sie tragen Adresse und Token des Rechners ein, auf dem Ihre Modelle laufen; die App chattet dann mit ihm, hängt Fotos und Dateien an und durchsucht mit dem optionalen Server das Web."
          }
        ],
        "items": [
          "Pflege: Die App-Store-Version 1.2 stammt vom 25. Juli 2026, der letzte Repository-Commit, ein Build-Hochzählen auf 1.3, vom 16. August 2026; der App Store führte 1.3 am 13. November 2026 nicht auf.",
          "Kosten: kostenloser Download; die README des Repositorys nennt Konten, Abrechnung und Cloud-Sync eine zurückgestellte Premium-Ebene.",
          "Plattform: iPhone mit iOS 18 oder neuer; der Eintrag zeigt auch Anforderungen für Mac und Apple Vision, nennt die App aber für das iPhone konzipiert.",
          "Quellcode: Website und Datenschutzerklärung nennen App und Server Open Source, doch das Repository zeigte bei der Prüfung keine Lizenzdatei.",
          "Anbieter: Benjamin Carman ist der Verkäufer im App Store, die erste Version erschien am 8. Juli 2026."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Diese Rezension stützt sich auf den App-Store-Eintrag, die Website, die Datenschutzerklärung, die Support-Seite und das GitHub-Repository, geprüft am 13. November 2026. PromptQuorum hat die App und den Orchestrator weder installiert noch ausgeführt oder gemessen; Geschwindigkeit, Antwortqualität und Einrichtungsaufwand sind daher nicht bewertet."
          }
        ]
      },
      "overview": {
        "id": "what-is-phantasm",
        "title": "Was ist Phantasm?",
        "content": [
          "**Phantasm ist ein iOS-Chat-Client für KI-Modelle, die Sie selbst hosten – keine App, die ein Modell enthält.** Der App Store führt sie als „Phantasm“ vom Verkäufer Benjamin Carman, sie erschien erstmals am 8. Juli 2026, und die Website nennt sie eine „schnelle, selbst hostbare KI-Chat-App für iOS, die mit einem Backend spricht, das Sie kontrollieren“.",
          "Das Projekt besteht aus zwei Teilen: der SwiftUI-App, die eine Server-URL und ein Token entgegennimmt, und einem optionalen Rust-Server namens Orchestrator, der neben Ollama und ComfyUI läuft und Websuche, Bildgenerierung und eine Werkzeugschleife ergänzt. Auf eine einfache Ollama-Instanz gerichtet, fällt die App laut README auf reinen Chat zurück."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Bezugsquellen",
        "content": [
          "**Phantasm ist ein kostenloser App-Store-Download für das iPhone; die Quellen nennen keine Android-, Windows- oder Web-Version.**"
        ],
        "columns": [
          "Option",
          "So erhalten Sie es"
        ],
        "rows": [
          {
            "Option": "iPhone",
            "So erhalten Sie es": "[Phantasm im App Store](https://apps.apple.com/us/app/phantasm/id6785720059), kostenloser Download"
          },
          {
            "Option": "Website",
            "So erhalten Sie es": "[getphantasm.com](https://getphantasm.com)"
          },
          {
            "Option": "Datenschutzerklärung",
            "So erhalten Sie es": "[getphantasm.com/privacy.html](https://getphantasm.com/privacy.html)"
          },
          {
            "Option": "Backend-Server",
            "So erhalten Sie es": "[Orchestrator auf GitHub](https://github.com/benthecarman/phantasm), optional, Start mit docker compose"
          },
          {
            "Option": "Quellcode",
            "So erhalten Sie es": "[github.com/benthecarman/phantasm](https://github.com/benthecarman/phantasm), keine Lizenzdatei"
          }
        ],
        "note": "Geprüfte Version: 1.2, laut App Store am 25. Juli 2026 veröffentlicht; die App ist 19,1 MB groß. Die App enthält kein Modell, Sie benötigen also zusätzlich einen Server zum Chatten. Der Eintrag zeigt den Preis als kostenlos und nennt keine In-App-Käufe."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Voraussetzungen",
        "content": [
          "**Der App Store nennt iOS 18.0 als Minimum, und ohne einen Server, den Sie selbst bereitstellen, kann die App nicht chatten.**"
        ],
        "columns": [
          "Punkt",
          "Aussage der Quellen"
        ],
        "rows": [
          {
            "Punkt": "Betriebssystem",
            "Aussage der Quellen": "iOS 18.0 oder neuer auf dem iPhone"
          },
          {
            "Punkt": "Backend",
            "Aussage der Quellen": "Ein OpenAI-kompatibler Server Ihrer Wahl, etwa Ollama, vLLM oder llama.cpp, vom Telefon aus erreichbar"
          },
          {
            "Punkt": "Verbindung",
            "Aussage der Quellen": "Server-URL und Token; das Token liegt im iOS-Schlüsselbund"
          },
          {
            "Punkt": "Orchestrator (optional)",
            "Aussage der Quellen": "Docker Compose; ergänzt Websuche über Brave, Bildgenerierung über ComfyUI und eine Werkzeugschleife"
          },
          {
            "Punkt": "Konto",
            "Aussage der Quellen": "Keines; laut Entwickler gibt es keine Konten"
          }
        ],
        "note": "Die Quellen nennen kein Mindest-iPhone-Modell und keinen Mindestspeicher; die nötige Hardware hängt von den Modellen auf Ihrem eigenen Server ab. Den Zugriff von außerhalb Ihres Heimnetzes müssen Sie selbst einrichten: Laut README verwenden Sie eine Server-URL, die von Ihrem Gerät aus bereits erreichbar ist."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "So legen Sie los",
        "content": [
          "**Die Schritte folgen der Beschreibung des Entwicklers; PromptQuorum hat sie nicht ausgeführt.**"
        ],
        "numberedItems": [
          {
            "title": "Ein Backend starten",
            "whyItMatters": "Starten Sie Ollama oder einen anderen OpenAI-kompatiblen Server auf einem eigenen Rechner; optional ergänzen Sie den Orchestrator per docker compose für Websuche und Bildgenerierung."
          },
          {
            "title": "App installieren",
            "whyItMatters": "Laden Sie Phantasm aus dem App Store; ein Konto ist nicht nötig."
          },
          {
            "title": "URL und Token eintragen",
            "whyItMatters": "Tragen Sie in den Einstellungen Serveradresse und Token ein; die App findet verfügbare Modelle und Funktionen selbst."
          },
          {
            "title": "Chatten",
            "whyItMatters": "Wählen Sie ein Modell, hängen Sie Fotos oder Dateien an und schalten Sie Webzugriff und Bildgenerierung für jeden Chat ein oder aus."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Von den Quellen bestätigte Funktionen",
        "content": [
          "**Jeder Punkt unten stammt aus der App-Store-Beschreibung, der Website oder dem Repository; keiner wurde unabhängig getestet.**"
        ],
        "items": [
          "**Flexible Backends.** Jeder OpenAI-kompatible Endpunkt, mit mehreren gespeicherten Profilen für Heimnetz-, VPN- oder Tunnel-Setups und Funktionserkennung zur Laufzeit.",
          "**Chat-Darstellung.** Gestreamte Antworten mit Markdown, Code mit Syntaxhervorhebung und Kopierknopf, Diagramme, Formeln im Text und die Denkschritte des Modells, wenn ein Reasoning-Modell gewählt ist; Version 1.2 ergänzt Schätzwerte zu Tokens und Geschwindigkeit.",
          "**Medien.** Foto- und Dateianhänge für Vision-Modelle, eingebettete generierte Bilder sowie seit Version 1.2 Audio- und Videogenerierung mit kompatiblen Servern.",
          "**Sprache und Systemanbindung.** Diktieren auf dem Gerät, vorgelesene Antworten, Siri und Kurzbefehle sowie lange Generierungen, die nach einem Hintergrundaufenthalt der App weiterlaufen.",
          "**Werkzeuge.** Schalter pro Chat für Webzugriff und Bildgenerierung sowie optionale Werkzeuge für Standort, Kalender und Apple Health, die standardmäßig aus sind und nur mit Ihrem eigenen Backend geteilt werden."
        ],
        "note": "Websuche, Bildgenerierung und Recherchemodi brauchen den optionalen Orchestrator oder ein Backend mit passenden Funktionen; ein einfacher Ollama-Server liefert reinen Chat."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenfluss und Datenschutz",
        "content": [
          "**Die Datenschutzerklärung, zuletzt aktualisiert am 2. Juli 2026, besagt, dass Phantasm keine Konten, keine Analyse, keine Telemetrie und keine Server des Entwicklers dazwischen hat.** Nachrichten gehen nur an die von Ihnen eingegebene Backend-URL, Unterhaltungen liegen auf dem Telefon, und die Spracherkennung läuft auf dem Gerät. Das Datenschutzlabel im App Store lautet „Data Not Collected“ (Daten werden nicht erfasst).",
          "Wohin Ihre Daten laufen, hängt von Ihrem Backend ab. Die Website sagt, Unterhaltungen verließen Ihr Netzwerk nie, doch die App unterstützt auch VPN- und Tunnel-Profile; ein Fernzugriff sendet den Datenverkehr also über die Route, die Sie selbst aufbauen. Die optionalen Gerätewerkzeuge teilen Standort-, Kalender- oder Gesundheitsdaten nur dann mit Ihrem Backend, wenn Sie sie für einen Chat einschalten. Die Website wird über Cloudflare ausgeliefert, das übliche Anfragedaten verarbeitet, und laut Erklärung setzt sie keine Cookies."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Das sind Angaben des Entwicklers, keine Prüfergebnisse, und PromptQuorum hat den Netzwerkverkehr der App nicht untersucht. Ist die Websuche des Orchestrators aktiv, fragt der Server laut README Brave Search ab; diese Suchanfragen verlassen also Ihr Netzwerk."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen geeignet",
        "items": [
          "**Besitzer von Ollama, vLLM oder llama.cpp**, die eine native iPhone-Oberfläche für Modelle möchten, die bereits zu Hause laufen.",
          "**Datenschutzbewusste Nutzer**, die eine App ohne Konto und ohne Analyse wünschen, wie der Entwickler sie beschreibt.",
          "**Heimserver-Tüftler**, die Docker Compose für Websuche und Bildgenerierung selbst betreiben können."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht überprüfen konnten",
        "items": [
          "**Leistung.** Geschwindigkeit, Akkuverbrauch und Verhalten in sehr langen Chats sind ungetestet.",
          "**Orchestrator.** Websuche, Bildgenerierung über ComfyUI und die Werkzeugschleife wurden nicht ausgeführt; die README nennt das Projekt einen MVP-Stand.",
          "**Lizenz.** Die Website nennt App und Server Open Source, doch das Repository zeigte am 13. November 2026 keine Lizenzdatei; die Bedingungen für eine Weiterverwendung sind daher nicht angegeben.",
          "**Andere Geräte.** Der Eintrag zeigt Anforderungen für Mac und Apple Vision, nennt die App aber für das iPhone konzipiert; Unterstützung für iPad und Mac wird nicht beschrieben.",
          "**Neuester Build.** Das Repository enthält ein Build-Hochzählen auf Version 1.3 vom 16. August 2026, das der App-Store-Eintrag am 13. November 2026 nicht zeigte."
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
          "Wesentlicher Unterschied"
        ],
        "rows": [
          {
            "App": "[LM Mini](/de/power-local-llm/lm-mini-review)",
            "Plattformen": "iPhone, iPad, Mac laut Eintrag",
            "Preis / Lizenz": "Gratis + In-App / Closed Source",
            "Wesentlicher Unterschied": "Bietet auch Fernzugriff und optionale Cloud-APIs"
          },
          {
            "App": "[Enchanted](/de/power-local-llm/enchanted-review)",
            "Plattformen": "iPhone, Mac",
            "Preis / Lizenz": "Gratis / Apache 2.0",
            "Wesentlicher Unterschied": "Ollama-Client, der einen separaten Ollama-Server braucht"
          },
          {
            "App": "[Reins](/de/power-local-llm/reins-review)",
            "Plattformen": "iPhone, iPad, Mac laut Eintrag",
            "Preis / Lizenz": "Gratis + Pro / Closed Source (v2)",
            "Wesentlicher Unterschied": "Verbindet sich mit Ihrem Server und führt auch MLX-Modelle auf dem Gerät aus"
          }
        ],
        "note": "Prüfen Sie Preis, Lizenz und Plattformen jeder App vor der Wahl im jeweiligen Eintrag."
      },
      "faq": {
        "id": "faq",
        "title": "Häufige Fragen",
        "faqs": [
          {
            "q": "Funktioniert Phantasm ohne Server?",
            "a": "Nein. Laut App-Store-Eintrag benötigt die App einen OpenAI-kompatiblen Server, den Sie bereitstellen, zum Beispiel Ollama auf Ihrem eigenen Rechner; laut Datenschutzerklärung läuft nur die Spracherkennung auf dem Telefon."
          },
          {
            "q": "Kann ich Phantasm unterwegs nutzen?",
            "a": "Die App nimmt jede erreichbare URL, und der Eintrag erwähnt VPN- und Tunnel-Profile; die Quellen beschreiben aber keinen eingebauten Fernzugriffsdienst, und die README führt ein verwaltetes Relay als zurückgestellt auf."
          },
          {
            "q": "Welche Modelle unterstützt Phantasm?",
            "a": "Jedes Modell, das Ihr Backend bereitstellt, denn die App bringt keines mit. Bildeingabe, Anzeige der Denkschritte sowie Bild-, Audio- oder Videogenerierung hängen davon ab, was Ihr Backend bietet."
          },
          {
            "q": "Kann ich Phantasm mit Siri nutzen?",
            "a": "Laut Eintrag können Sie Phantasm über Siri und Kurzbefehle ansprechen; wie tief diese Integration geht, wird nicht beschrieben."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "Phantasm ist ein junges Projekt mit aktuellen Commits, das dem iPhone einen kostenlosen, kontofreien Zugang zu einem Ollama-, vLLM- oder llama.cpp-Server zu Hause gibt; die Datenschutzerklärung erklärt, keine Daten zu erfassen. Dagegen ist es nur ein Client, setzt einen selbst betriebenen Server voraus, sein Repository zeigte am 13. November 2026 keine Lizenzdatei, obwohl die Website es Open Source nennt, und der neueste Repository-Build war bei der Prüfung nicht im App Store. Die App passt zu Menschen, die bereits Modelle hosten und eine native Oberfläche wollen; wer geprüfte Datenschutzzusagen braucht, sollte die Erklärung als Angabe und nicht als Beleg lesen."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[Phantasm im App Store](https://apps.apple.com/us/app/phantasm/id6785720059) — Beschreibung, Versionsverlauf, Anforderungen und Datenschutzlabel, geprüft am 13. November 2026.",
          "[Phantasm-Website](https://getphantasm.com) — Funktionsliste und Einrichtungsschritte, geprüft am 13. November 2026.",
          "[Phantasm-Datenschutzerklärung](https://getphantasm.com/privacy.html) — Datenfluss, Speicherung und Spracherkennung auf dem Gerät, zuletzt aktualisiert am 2. Juli 2026.",
          "[Phantasm-Support-Seite](https://getphantasm.com/support.html) — Einrichtung und Kontaktdaten, geprüft am 13. November 2026.",
          "[Phantasm auf GitHub](https://github.com/benthecarman/phantasm) — README, Commits, Tags und Dateiliste, geprüft am 13. November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[Reins-Rezension](/de/power-local-llm/reins-review) — eine Chat-App für iPhone und iPad für Ihren eigenen Ollama- oder LM-Studio-Server, die auch MLX-Modelle ausführen kann.",
          "[Enchanted-Rezension](/de/power-local-llm/enchanted-review) — ein kostenloser Ollama-Client unter Apache 2.0 für iPhone und Mac.",
          "[LM-Mini-Rezension](/de/power-local-llm/lm-mini-review) — eine Chat-App für iPhone und iPad mit Modellen auf dem Gerät und Anbindung an Ihren eigenen Server.",
          "[Beste lokale LLM-Apps für das iPhone](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die Übersicht der iPhone-Apps, zu der diese Rezension gehört.",
          "[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools."
        ]
      }
    }
  },
  es: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-13",
    "dateModified": "2026-11-13",
    "next_refresh_due": "2027-05-13",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/phantasm-review-hero-es.webp",
    "title": "Reseña de Phantasm: app de chat con IA autoalojada para iPhone",
    "seoTitle": "Reseña de Phantasm: chat de IA autoalojada para iPhone",
    "intro": "Phantasm es una app de chat gratuita para iPhone, publicada bajo el desarrollador Benjamin Carman, que se conecta a un backend de IA que tú mismo ejecutas, como Ollama, vLLM o llama.cpp, y no pide cuenta. No ejecuta modelos en el teléfono: la app es el cliente, y un servidor complementario opcional añade búsqueda web y generación de imágenes. Esta reseña se basa en la [ficha de la App Store](https://apps.apple.com/us/app/phantasm/id6785720059), el [sitio web](https://getphantasm.com), la [política de privacidad](https://getphantasm.com/privacy.html) y el [repositorio de GitHub](https://github.com/benthecarman/phantasm), consultados el 13 de noviembre de 2026. PromptQuorum no la ha instalado ni ejecutado.",
    "metaDescription": "Reseña de Phantasm: app de chat gratuita para iPhone y tu servidor Ollama, vLLM o llama.cpp. Según el desarrollador, sin cuenta ni telemetría. Sin probar.",
    "twitterDescription": "Reseña de Phantasm: un cliente de chat gratuito para iPhone que se conecta a tu propio servidor Ollama, vLLM o llama.cpp, sin cuenta. Qué confirman las fuentes y qué no.",
    "audience": "Propietarios de iPhone que ejecutan Ollama, vLLM o llama.cpp en casa y quieren saber qué hace Phantasm, cuánto cuesta y qué afirmaciones dejan sin confirmar las fuentes.",
    "readTime": "6 min de lectura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Reseña de Phantasm",
    "targetKeywords": [
      "reseña phantasm",
      "phantasm app ios",
      "cliente ollama iphone",
      "chat ia autoalojada iphone",
      "chat ia privado iphone",
      "cliente ios compatible con openai",
      "app llama.cpp iphone"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "Mac"
    ],
    "leadAnswerBlock": "**Phantasm (versión 1.2 en la App Store, publicada el 25 de julio de 2026) es una app de chat gratuita para iPhone que habla con un servidor de IA compatible con OpenAI que tú mismo ejecutas, así que los modelos corren en tu hardware, no en el teléfono.** El desarrollador afirma que no hay cuentas, análisis ni telemetría; cada dato de esta reseña procede de la ficha de la App Store, el sitio web, la política de privacidad y el repositorio de GitHub, y PromptQuorum no la ha probado.",
    "quickAnswerTop": {
      "es": {
        "question": "¿Phantasm ejecuta modelos de IA en el iPhone?",
        "answer": "No. Según el desarrollador, la app es un cliente: envía tus mensajes a la URL del backend que introduces, normalmente un equipo de tu propia red, y solo la transcripción de voz se ejecuta en el dispositivo.",
        "bullets": [
          "Sirve cualquier servidor compatible con OpenAI, incluida una instancia sencilla de Ollama.",
          "Un servidor orquestador opcional añade búsqueda web, generación de imágenes y modos de investigación.",
          "Varios perfiles de backend cubren redes domésticas, VPN o túneles.",
          "Se pueden adjuntar fotos y archivos a un chat, y el dictado se ejecuta en el dispositivo."
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
        "label": "¿Qué es Phantasm?",
        "anchor": "what-is-phantasm"
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
            "text": "Phantasm es un cliente de chat para iPhone para Ollama, vLLM, llama.cpp y otros servidores compatibles con OpenAI que alojas tú mismo."
          },
          {
            "type": "plain-terms",
            "text": "Introduces la dirección y el token del equipo que ejecuta tus modelos, y la app chatea con él, adjunta fotos y archivos y, con el servidor opcional, busca en la web."
          }
        ],
        "items": [
          "Mantenimiento: la versión 1.2 de la App Store es del 25 de julio de 2026, y el último commit del repositorio, un aumento de compilación a 1.3, es del 16 de agosto de 2026; la App Store no mostraba la 1.3 el 13 de noviembre de 2026.",
          "Coste: descarga gratuita; el README del repositorio llama capa premium aplazada a las cuentas, la facturación y la sincronización en la nube.",
          "Plataforma: iPhone con iOS 18 o posterior; la ficha también muestra requisitos para Mac y Apple Vision, pero dice que la app está diseñada para iPhone.",
          "Código: el sitio web y la política de privacidad llaman de código abierto a la app y al servidor, pero el repositorio no mostraba archivo de licencia al comprobarlo.",
          "Autor: Benjamin Carman figura como vendedor en la App Store, y la primera versión salió el 8 de julio de 2026."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta reseña se basa en la ficha de la App Store, el sitio web, la política de privacidad, la página de soporte y el repositorio de GitHub, consultados el 13 de noviembre de 2026. PromptQuorum no ha instalado, ejecutado ni medido la app ni el orquestador, así que no se evalúan la velocidad, la calidad de las respuestas ni el esfuerzo de configuración."
          }
        ]
      },
      "overview": {
        "id": "what-is-phantasm",
        "title": "¿Qué es Phantasm?",
        "content": [
          "**Phantasm es un cliente de chat para iOS para modelos de IA que alojas tú mismo, no una app que incluya un modelo.** La App Store la lista como «Phantasm» del vendedor Benjamin Carman, apareció por primera vez el 8 de julio de 2026, y el sitio web la describe como una app de chat con IA para iOS, rápida y autoalojable, que habla con un backend que tú controlas.",
          "El proyecto tiene dos partes: la app en SwiftUI, que recibe una URL de servidor y un token, y un servidor opcional en Rust llamado orquestador, que se ejecuta junto a Ollama y ComfyUI y añade búsqueda web, generación de imágenes y un bucle de herramientas. Si se apunta a una instancia sencilla de Ollama, la app vuelve al chat simple, según el README."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo conseguirla",
        "content": [
          "**Phantasm es una descarga gratuita de la App Store para iPhone; las fuentes no mencionan versión para Android, Windows ni web.**"
        ],
        "columns": [
          "Opción",
          "Cómo conseguirla"
        ],
        "rows": [
          {
            "Opción": "iPhone",
            "Cómo conseguirla": "[Phantasm en la App Store](https://apps.apple.com/us/app/phantasm/id6785720059), descarga gratuita"
          },
          {
            "Opción": "Sitio web",
            "Cómo conseguirla": "[getphantasm.com](https://getphantasm.com)"
          },
          {
            "Opción": "Política de privacidad",
            "Cómo conseguirla": "[getphantasm.com/privacy.html](https://getphantasm.com/privacy.html)"
          },
          {
            "Opción": "Servidor backend",
            "Cómo conseguirla": "[Orquestador en GitHub](https://github.com/benthecarman/phantasm), opcional, se inicia con docker compose"
          },
          {
            "Opción": "Código fuente",
            "Cómo conseguirla": "[github.com/benthecarman/phantasm](https://github.com/benthecarman/phantasm), sin archivo de licencia"
          }
        ],
        "note": "Versión revisada: 1.2, publicada el 25 de julio de 2026 según la App Store; la app pesa 19.1 MB. La app no incluye ningún modelo, así que además necesitas un servidor con el que chatear. La ficha muestra el precio como gratuito y no menciona compras dentro de la app."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**La App Store indica iOS 18.0 como mínimo, y la app no puede chatear sin un servidor que tú aportes.**"
        ],
        "columns": [
          "Elemento",
          "Lo que dicen las fuentes"
        ],
        "rows": [
          {
            "Elemento": "Sistema operativo",
            "Lo que dicen las fuentes": "iOS 18.0 o posterior en iPhone"
          },
          {
            "Elemento": "Backend",
            "Lo que dicen las fuentes": "Un servidor compatible con OpenAI que tú aportas, como Ollama, vLLM o llama.cpp, accesible desde el teléfono"
          },
          {
            "Elemento": "Conexión",
            "Lo que dicen las fuentes": "Una URL de servidor y un token; el token se guarda en el llavero de iOS"
          },
          {
            "Elemento": "Orquestador (opcional)",
            "Lo que dicen las fuentes": "Docker Compose; añade búsqueda web con Brave, generación de imágenes con ComfyUI y un bucle de herramientas"
          },
          {
            "Elemento": "Cuenta",
            "Lo que dicen las fuentes": "Ninguna; el desarrollador dice que no hay cuentas"
          }
        ],
        "note": "Las fuentes no indican un iPhone ni una memoria mínimos; el hardware necesario depende de los modelos que ejecute tu propio servidor. Llegar al servidor desde fuera de tu red doméstica corre por tu cuenta: según el README, usas una URL de servidor que ya sea accesible desde tu dispositivo."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Primeros pasos",
        "content": [
          "**Los pasos siguen la descripción del propio desarrollador; PromptQuorum no los ha ejecutado.**"
        ],
        "numberedItems": [
          {
            "title": "Ejecuta un backend",
            "whyItMatters": "Inicia Ollama u otro servidor compatible con OpenAI en un equipo que sea tuyo; opcionalmente añade el orquestador con docker compose para búsqueda web y generación de imágenes."
          },
          {
            "title": "Instala la app",
            "whyItMatters": "Descarga Phantasm de la App Store; no hace falta cuenta."
          },
          {
            "title": "Introduce la URL y el token",
            "whyItMatters": "Añade la dirección del servidor y el token en Ajustes; la app encuentra por sí sola los modelos y las funciones disponibles."
          },
          {
            "title": "Chatea",
            "whyItMatters": "Elige un modelo, adjunta fotos o archivos y activa o desactiva el acceso web y la generación de imágenes en cada chat."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones confirmadas por las fuentes",
        "content": [
          "**Cada punto siguiente procede de la descripción de la App Store, el sitio web o el repositorio; ninguno se ha probado de forma independiente.**"
        ],
        "items": [
          "**Backends flexibles.** Cualquier endpoint compatible con OpenAI, con varios perfiles guardados para redes domésticas, VPN o túneles y detección de funciones en tiempo de ejecución.",
          "**Presentación del chat.** Respuestas en streaming con markdown, código con resaltado de sintaxis y botón de copiar, gráficos, matemáticas en línea y el razonamiento del modelo cuando se elige un modelo de pensamiento; la versión 1.2 añade estimaciones de tokens y velocidad.",
          "**Contenido multimedia.** Adjuntos de fotos y archivos para modelos de visión, imágenes generadas en el chat y, desde la versión 1.2, generación de audio y vídeo con servidores compatibles.",
          "**Voz e integración con el sistema.** Dictado en el dispositivo, respuestas leídas en voz alta, Siri y Atajos, y generaciones largas que se retoman tras pasar la app a segundo plano.",
          "**Herramientas.** Interruptores por chat para el acceso web y la generación de imágenes, además de herramientas opcionales de ubicación, calendario y Apple Health que vienen desactivadas y solo se comparten con tu propio backend."
        ],
        "note": "La búsqueda web, la generación de imágenes y los modos de investigación necesitan el orquestador opcional o un backend con funciones equivalentes; un servidor Ollama sencillo ofrece chat simple."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flujo de datos y privacidad",
        "content": [
          "**La política de privacidad, actualizada por última vez el 2 de julio de 2026, dice que Phantasm no tiene cuentas, análisis, telemetría ni servidores del desarrollador en medio.** Los mensajes van solo a la URL de backend que introduces, las conversaciones se guardan en el teléfono y la transcripción de voz se ejecuta en el dispositivo. La etiqueta de privacidad de la App Store indica «Data Not Collected» (datos no recopilados).",
          "Adónde viajan tus datos depende de tu backend. El sitio web dice que las conversaciones nunca salen de tu red, pero la app también admite perfiles de VPN y túnel, de modo que una configuración remota envía el tráfico por la ruta que montes tú. Las herramientas opcionales del dispositivo comparten ubicación, calendario o datos de salud con tu backend solo cuando las activas en un chat. El sitio web se sirve a través de Cloudflare, que procesa datos habituales de las solicitudes, y la política dice que no usa cookies."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Son declaraciones del desarrollador, no resultados de una auditoría, y PromptQuorum no ha inspeccionado el tráfico de red de la app. Cuando la búsqueda web del orquestador está activada, el servidor consulta Brave Search según el README, así que esas consultas salen de tu red."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quién es",
        "items": [
          "**Quienes usan Ollama, vLLM o llama.cpp** y quieren una interfaz nativa para iPhone para modelos que ya funcionan en casa.",
          "**Usuarios atentos a la privacidad** que quieren una app sin cuenta y sin análisis, tal como la describe el desarrollador.",
          "**Aficionados al homelab** que se sienten cómodos ejecutando Docker Compose para la búsqueda web y la generación de imágenes."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Rendimiento.** La velocidad, el consumo de batería y el comportamiento en chats muy largos no se han probado.",
          "**Orquestador.** No se ejecutaron la búsqueda web, la generación de imágenes con ComfyUI ni el bucle de herramientas; el README llama al proyecto una versión MVP.",
          "**Licencia.** El sitio web llama de código abierto a la app y al servidor, pero el repositorio no mostraba archivo de licencia el 13 de noviembre de 2026, así que no se indican las condiciones de reutilización.",
          "**Otros dispositivos.** La ficha muestra requisitos para Mac y Apple Vision, pero dice que la app está diseñada para iPhone; no se describe la compatibilidad con iPad ni Mac.",
          "**Última compilación.** El repositorio contiene un aumento de compilación a la versión 1.3 del 16 de agosto de 2026 que la ficha de la App Store no mostraba el 13 de noviembre de 2026."
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
            "App": "[LM Mini](/es/power-local-llm/lm-mini-review)",
            "Plataformas": "iPhone, iPad, Mac según la ficha",
            "Precio / licencia": "Gratis + compras / código cerrado",
            "Diferencia clave": "También ofrece acceso remoto y APIs en la nube opcionales"
          },
          {
            "App": "[Enchanted](/es/power-local-llm/enchanted-review)",
            "Plataformas": "iPhone, Mac",
            "Precio / licencia": "Gratis / Apache 2.0",
            "Diferencia clave": "Cliente de Ollama que necesita un servidor Ollama aparte"
          },
          {
            "App": "[Reins](/es/power-local-llm/reins-review)",
            "Plataformas": "iPhone, iPad, Mac según la ficha",
            "Precio / licencia": "Gratis + Pro / código cerrado (v2)",
            "Diferencia clave": "Se conecta a tu servidor y también ejecuta modelos MLX en el dispositivo"
          }
        ],
        "note": "Confirma el precio, la licencia y las plataformas actuales de cada app en su propia ficha antes de elegir."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿Funciona Phantasm sin servidor?",
            "a": "No. La ficha de la App Store dice que requiere un servidor compatible con OpenAI que tú aportes, por ejemplo Ollama en tu propio equipo; según la política de privacidad, solo la transcripción de voz se ejecuta en el teléfono."
          },
          {
            "q": "¿Puedo usar Phantasm fuera de casa?",
            "a": "La app acepta cualquier URL accesible y la ficha menciona perfiles de VPN y túnel, pero las fuentes no describen ningún servicio de acceso remoto integrado, y el README lista un relé gestionado como aplazado."
          },
          {
            "q": "¿Qué modelos admite Phantasm?",
            "a": "Cualquier modelo que sirva tu backend, porque la app no incluye ninguno. La entrada de imágenes, la visualización del razonamiento y la generación de imágenes, audio o vídeo dependen de lo que ofrezca tu backend."
          },
          {
            "q": "¿Puedo usar Phantasm con Siri?",
            "a": "La ficha dice que puedes preguntar a Phantasm desde Siri y Atajos; no se describe hasta dónde llega esa integración."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "Phantasm es un proyecto joven con commits recientes que da al iPhone una forma gratuita y sin cuenta de llegar a un servidor Ollama, vLLM o llama.cpp en casa, y su política de privacidad declara que no recopila datos. En contra, es solo un cliente, exige un servidor que tú ejecutes, su repositorio no mostraba archivo de licencia el 13 de noviembre de 2026 aunque el sitio lo llama de código abierto, y su compilación más reciente del repositorio no estaba en la App Store al comprobarlo. Encaja con quienes ya alojan modelos y quieren una interfaz nativa; quien necesite afirmaciones de privacidad auditadas debería leer la política como una declaración, no como una prueba."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Phantasm en la App Store](https://apps.apple.com/us/app/phantasm/id6785720059) — descripción, historial de versiones, requisitos y etiqueta de privacidad, consultados el 13 de noviembre de 2026.",
          "[Sitio web de Phantasm](https://getphantasm.com) — lista de funciones y pasos de configuración, consultados el 13 de noviembre de 2026.",
          "[Política de privacidad de Phantasm](https://getphantasm.com/privacy.html) — flujo de datos, almacenamiento y transcripción en el dispositivo, actualizada por última vez el 2 de julio de 2026.",
          "[Página de soporte de Phantasm](https://getphantasm.com/support.html) — configuración e información de contacto, consultada el 13 de noviembre de 2026.",
          "[Phantasm en GitHub](https://github.com/benthecarman/phantasm) — README, commits, etiquetas y lista de archivos, consultados el 13 de noviembre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Reseña de Reins](/es/power-local-llm/reins-review) — una app de chat para iPhone y iPad para tu propio servidor Ollama o LM Studio que también puede ejecutar modelos MLX.",
          "[Reseña de Enchanted](/es/power-local-llm/enchanted-review) — un cliente gratuito de Ollama con licencia Apache 2.0 para iPhone y Mac.",
          "[Reseña de LM Mini](/es/power-local-llm/lm-mini-review) — una app de chat para iPhone y iPad con modelos en el dispositivo y conexión a tu propio servidor.",
          "[Mejores apps de LLM locales para iPhone](/es/power-local-llm/best-local-llm-apps-iphone-2026) — la recopilación de apps para iPhone a la que pertenece esta reseña.",
          "[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA local."
        ]
      }
    }
  },
  fr: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-13",
    "dateModified": "2026-11-13",
    "next_refresh_due": "2027-05-13",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/phantasm-review-hero-fr.webp",
    "title": "Test de Phantasm : appli de chat IA auto-hébergée pour iPhone",
    "seoTitle": "Test de Phantasm : chat IA auto-hébergé pour iPhone",
    "intro": "Phantasm est une appli de chat gratuite pour iPhone, listée sous le développeur Benjamin Carman, qui se connecte à un serveur d’IA que vous exploitez vous-même, comme Ollama, vLLM ou llama.cpp, et ne demande aucun compte. Elle n’exécute pas de modèles sur le téléphone : l’appli est le client, et un serveur complémentaire facultatif ajoute la recherche web et la génération d’images. Ce test s’appuie sur la [fiche App Store](https://apps.apple.com/us/app/phantasm/id6785720059), le [site web](https://getphantasm.com), la [politique de confidentialité](https://getphantasm.com/privacy.html) et le [dépôt GitHub](https://github.com/benthecarman/phantasm), consultés le 13 novembre 2026. PromptQuorum ne l’a ni installée ni exécutée.",
    "metaDescription": "Test de Phantasm : appli de chat gratuite pour iPhone et votre serveur Ollama, vLLM ou llama.cpp. Selon l’éditeur, sans compte ni télémétrie. Non testée.",
    "twitterDescription": "Test de Phantasm : un client de chat gratuit pour iPhone qui se connecte à votre propre serveur Ollama, vLLM ou llama.cpp, sans compte. Ce que confirment les sources, et ce qu’elles ne confirment pas.",
    "audience": "Les propriétaires d’iPhone qui font tourner Ollama, vLLM ou llama.cpp chez eux et veulent savoir ce que fait Phantasm, ce qu’elle coûte et quelles affirmations les sources laissent sans confirmation.",
    "readTime": "6 min de lecture",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Test de Phantasm",
    "targetKeywords": [
      "test phantasm",
      "phantasm appli ios",
      "client ollama iphone",
      "chat ia auto-hébergé iphone",
      "chat ia privé iphone",
      "client ios compatible openai",
      "appli llama.cpp iphone"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "Mac"
    ],
    "leadAnswerBlock": "**Phantasm (version 1.2 sur l’App Store, publiée le 25 juillet 2026) est une appli de chat gratuite pour iPhone qui dialogue avec un serveur d’IA compatible OpenAI que vous exploitez vous-même ; les modèles tournent donc sur votre matériel, pas sur le téléphone.** Le développeur affirme qu’il n’y a ni comptes, ni analyses, ni télémétrie ; chaque affirmation ici provient de la fiche App Store, du site web, de la politique de confidentialité et du dépôt GitHub, et PromptQuorum ne l’a pas testée.",
    "quickAnswerTop": {
      "fr": {
        "question": "Phantasm exécute-t-elle des modèles d’IA sur l’iPhone ?",
        "answer": "Non. Selon le développeur, l’appli est un client : elle envoie vos messages à l’URL du serveur que vous saisissez, généralement une machine de votre propre réseau, et seule la transcription vocale s’exécute sur l’appareil.",
        "bullets": [
          "Tout serveur compatible OpenAI fonctionne, y compris une simple instance Ollama.",
          "Un serveur orchestrateur facultatif ajoute la recherche web, la génération d’images et des modes de recherche.",
          "Plusieurs profils de serveur couvrent les réseaux domestiques, les VPN ou les tunnels.",
          "Des photos et des fichiers peuvent être joints à une conversation, et la dictée s’exécute sur l’appareil."
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
        "label": "Qu’est-ce que Phantasm ?",
        "anchor": "what-is-phantasm"
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
        "label": "Pour commencer",
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
        "label": "À qui s’adresse-t-elle",
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
            "text": "Phantasm est un client de chat pour iPhone destiné à Ollama, vLLM, llama.cpp et aux autres serveurs compatibles OpenAI que vous hébergez vous-même."
          },
          {
            "type": "plain-terms",
            "text": "Vous saisissez l’adresse et le jeton de l’ordinateur qui exécute vos modèles ; l’appli dialogue alors avec lui, joint des photos et des fichiers et, avec le serveur facultatif, interroge le web."
          }
        ],
        "items": [
          "Maintenance : la version 1.2 de l’App Store date du 25 juillet 2026, et le dernier commit du dépôt, une incrémentation de build vers 1.3, du 16 août 2026 ; l’App Store ne listait pas la 1.3 le 13 novembre 2026.",
          "Coût : téléchargement gratuit ; le README du dépôt décrit les comptes, la facturation et la synchronisation cloud comme une couche premium différée.",
          "Plateforme : iPhone avec iOS 18 ou plus récent ; la fiche affiche aussi des exigences pour Mac et Apple Vision, mais indique que l’appli est conçue pour iPhone.",
          "Code source : le site web et la politique de confidentialité parlent d’open source pour l’appli et le serveur, mais le dépôt ne montrait aucun fichier de licence lors de la vérification.",
          "Éditeur : Benjamin Carman est le vendeur sur l’App Store, et la première version date du 8 juillet 2026."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce test s’appuie sur la fiche App Store, le site web, la politique de confidentialité, la page d’assistance et le dépôt GitHub, consultés le 13 novembre 2026. PromptQuorum n’a ni installé, ni exécuté, ni mesuré l’appli ou l’orchestrateur ; la vitesse, la qualité des réponses et l’effort de mise en place ne sont donc pas évalués."
          }
        ]
      },
      "overview": {
        "id": "what-is-phantasm",
        "title": "Qu’est-ce que Phantasm ?",
        "content": [
          "**Phantasm est un client de chat iOS pour des modèles d’IA que vous hébergez vous-même, et non une appli qui contient un modèle.** L’App Store la liste sous le nom « Phantasm » chez le vendeur Benjamin Carman, elle est apparue le 8 juillet 2026, et le site web la présente comme une appli de chat IA pour iOS, rapide et auto-hébergeable, qui dialogue avec un serveur que vous contrôlez.",
          "Le projet comprend deux parties : l’appli SwiftUI, qui prend une URL de serveur et un jeton, et un serveur Rust facultatif appelé orchestrateur, qui tourne à côté d’Ollama et de ComfyUI et ajoute la recherche web, la génération d’images et une boucle d’outils. Dirigée vers une simple instance Ollama, l’appli revient au chat simple, selon le README."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Où l’obtenir",
        "content": [
          "**Phantasm est un téléchargement gratuit sur l’App Store pour iPhone ; les sources ne mentionnent aucune version Android, Windows ou web.**"
        ],
        "columns": [
          "Option",
          "Comment l’obtenir"
        ],
        "rows": [
          {
            "Option": "iPhone",
            "Comment l’obtenir": "[Phantasm sur l’App Store](https://apps.apple.com/us/app/phantasm/id6785720059), téléchargement gratuit"
          },
          {
            "Option": "Site web",
            "Comment l’obtenir": "[getphantasm.com](https://getphantasm.com)"
          },
          {
            "Option": "Politique de confidentialité",
            "Comment l’obtenir": "[getphantasm.com/privacy.html](https://getphantasm.com/privacy.html)"
          },
          {
            "Option": "Serveur",
            "Comment l’obtenir": "[Orchestrateur sur GitHub](https://github.com/benthecarman/phantasm), facultatif, se lance avec docker compose"
          },
          {
            "Option": "Code source",
            "Comment l’obtenir": "[github.com/benthecarman/phantasm](https://github.com/benthecarman/phantasm), aucun fichier de licence"
          }
        ],
        "note": "Version examinée : 1.2, publiée le 25 juillet 2026 selon l’App Store ; l’appli pèse 19.1 Mo. Elle n’intègre aucun modèle : il vous faut donc aussi un serveur avec lequel discuter. La fiche affiche le prix comme gratuit et ne mentionne aucun achat intégré."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Prérequis",
        "content": [
          "**L’App Store indique iOS 18.0 au minimum, et l’appli ne peut pas discuter sans un serveur que vous fournissez.**"
        ],
        "columns": [
          "Élément",
          "Ce que disent les sources"
        ],
        "rows": [
          {
            "Élément": "Système",
            "Ce que disent les sources": "iOS 18.0 ou plus récent sur iPhone"
          },
          {
            "Élément": "Serveur",
            "Ce que disent les sources": "Un serveur compatible OpenAI que vous fournissez, comme Ollama, vLLM ou llama.cpp, joignable depuis le téléphone"
          },
          {
            "Élément": "Connexion",
            "Ce que disent les sources": "Une URL de serveur et un jeton ; le jeton est conservé dans le trousseau iOS"
          },
          {
            "Élément": "Orchestrateur (facultatif)",
            "Ce que disent les sources": "Docker Compose ; ajoute la recherche web via Brave, la génération d’images via ComfyUI et une boucle d’outils"
          },
          {
            "Élément": "Compte",
            "Ce que disent les sources": "Aucun ; le développeur indique qu’il n’y a pas de comptes"
          }
        ],
        "note": "Les sources n’indiquent ni iPhone minimal ni mémoire minimale ; le matériel nécessaire dépend des modèles exécutés par votre propre serveur. Joindre le serveur hors de votre réseau domestique vous incombe : selon le README, vous utilisez une URL de serveur déjà joignable depuis votre appareil."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Pour commencer",
        "content": [
          "**Les étapes suivent la description du développeur lui-même ; PromptQuorum ne les a pas exécutées.**"
        ],
        "numberedItems": [
          {
            "title": "Lancer un serveur",
            "whyItMatters": "Démarrez Ollama ou un autre serveur compatible OpenAI sur une machine qui vous appartient ; ajoutez éventuellement l’orchestrateur avec docker compose pour la recherche web et la génération d’images."
          },
          {
            "title": "Installer l’appli",
            "whyItMatters": "Téléchargez Phantasm depuis l’App Store ; aucun compte n’est nécessaire."
          },
          {
            "title": "Saisir l’URL et le jeton",
            "whyItMatters": "Ajoutez l’adresse du serveur et le jeton dans les réglages ; l’appli découvre seule les modèles et les capacités disponibles."
          },
          {
            "title": "Discuter",
            "whyItMatters": "Choisissez un modèle, joignez des photos ou des fichiers, et activez ou désactivez l’accès web et la génération d’images pour chaque conversation."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions confirmées par les sources",
        "content": [
          "**Chaque point ci-dessous provient de la description App Store, du site web ou du dépôt ; aucun n’a été testé de façon indépendante.**"
        ],
        "items": [
          "**Serveurs flexibles.** Tout point d’accès compatible OpenAI, avec plusieurs profils enregistrés pour les réseaux domestiques, les VPN ou les tunnels, et détection des capacités à l’exécution.",
          "**Affichage du chat.** Réponses en streaming avec markdown, code coloré avec bouton de copie, graphiques, mathématiques en ligne et raisonnement du modèle lorsqu’un modèle à réflexion est choisi ; la version 1.2 ajoute des estimations de jetons et de vitesse.",
          "**Médias.** Pièces jointes photo et fichier pour les modèles de vision, images générées intégrées au chat et, depuis la version 1.2, génération audio et vidéo avec des serveurs compatibles.",
          "**Voix et intégration système.** Dictée sur l’appareil, réponses lues à voix haute, Siri et Raccourcis, et longues générations qui reprennent après un passage de l’appli en arrière-plan.",
          "**Outils.** Interrupteurs par conversation pour l’accès web et la génération d’images, plus des outils facultatifs de localisation, d’agenda et d’Apple Santé, désactivés par défaut et partagés uniquement avec votre propre serveur."
        ],
        "note": "La recherche web, la génération d’images et les modes de recherche exigent l’orchestrateur facultatif ou un serveur aux capacités correspondantes ; un simple serveur Ollama offre le chat simple."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flux de données et confidentialité",
        "content": [
          "**La politique de confidentialité, mise à jour le 2 juillet 2026, indique que Phantasm n’a ni comptes, ni analyses, ni télémétrie, ni serveurs du développeur au milieu.** Les messages vont uniquement à l’URL de serveur que vous saisissez, les conversations sont stockées sur le téléphone et la transcription vocale s’exécute sur l’appareil. L’étiquette de confidentialité de l’App Store indique « Data Not Collected » (données non collectées).",
          "Le trajet de vos données dépend de votre serveur. Le site web affirme que les conversations ne quittent jamais votre réseau, mais l’appli prend aussi en charge des profils VPN et tunnel : une configuration distante envoie donc le trafic par la route que vous mettez en place. Les outils facultatifs de l’appareil ne partagent la localisation, l’agenda ou les données de santé avec votre serveur que lorsque vous les activez pour une conversation. Le site web est servi par Cloudflare, qui traite des données de requête usuelles, et la politique indique qu’il ne dépose aucun cookie."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce sont des déclarations du développeur, non des résultats d’audit, et PromptQuorum n’a pas inspecté le trafic réseau de l’appli. Lorsque la recherche web de l’orchestrateur est active, le serveur interroge Brave Search selon le README ; ces requêtes quittent donc votre réseau."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui s’adresse-t-elle",
        "items": [
          "**Les utilisateurs d’Ollama, de vLLM ou de llama.cpp** qui veulent une interface iPhone native pour des modèles déjà en service chez eux.",
          "**Les utilisateurs soucieux de confidentialité** qui veulent une appli sans compte et sans analyses, telle que la décrit le développeur.",
          "**Les bricoleurs de home lab** à l’aise avec Docker Compose pour la recherche web et la génération d’images."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n’avons pas pu vérifier",
        "items": [
          "**Performances.** La vitesse, la consommation de batterie et le comportement dans de très longues conversations ne sont pas testés.",
          "**Orchestrateur.** La recherche web, la génération d’images via ComfyUI et la boucle d’outils n’ont pas été exécutées ; le README qualifie le projet de version MVP.",
          "**Licence.** Le site web parle d’open source pour l’appli et le serveur, mais le dépôt ne montrait aucun fichier de licence le 13 novembre 2026 : les conditions de réutilisation ne sont donc pas indiquées.",
          "**Autres appareils.** La fiche affiche des exigences pour Mac et Apple Vision mais indique que l’appli est conçue pour iPhone ; la prise en charge d’iPad et de Mac n’est pas décrite.",
          "**Dernier build.** Le dépôt contient une incrémentation de build vers la version 1.3 datée du 16 août 2026 que la fiche App Store ne montrait pas le 13 novembre 2026."
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
            "Appli": "[LM Mini](/fr/power-local-llm/lm-mini-review)",
            "Plateformes": "iPhone, iPad, Mac selon la fiche",
            "Prix / licence": "Gratuit + achats / code fermé",
            "Différence clé": "Propose aussi l’accès à distance et des API cloud facultatives"
          },
          {
            "Appli": "[Enchanted](/fr/power-local-llm/enchanted-review)",
            "Plateformes": "iPhone, Mac",
            "Prix / licence": "Gratuit / Apache 2.0",
            "Différence clé": "Client Ollama qui exige un serveur Ollama distinct"
          },
          {
            "Appli": "[Reins](/fr/power-local-llm/reins-review)",
            "Plateformes": "iPhone, iPad, Mac selon la fiche",
            "Prix / licence": "Gratuit + Pro / code fermé (v2)",
            "Différence clé": "Se connecte à votre serveur et exécute aussi des modèles MLX sur l’appareil"
          }
        ],
        "note": "Vérifiez le prix, la licence et les plateformes actuels de chaque appli sur sa propre fiche avant de choisir."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "Phantasm fonctionne-t-elle sans serveur ?",
            "a": "Non. La fiche App Store indique qu’elle exige un serveur compatible OpenAI que vous fournissez, par exemple Ollama sur votre propre machine ; selon la politique de confidentialité, seule la transcription vocale s’exécute sur le téléphone."
          },
          {
            "q": "Puis-je utiliser Phantasm hors de chez moi ?",
            "a": "L’appli accepte toute URL joignable et la fiche mentionne des profils VPN et tunnel, mais les sources ne décrivent aucun service d’accès à distance intégré, et le README classe un relais géré parmi les éléments différés."
          },
          {
            "q": "Quels modèles Phantasm prend-elle en charge ?",
            "a": "Tout modèle que sert votre serveur, car l’appli n’en embarque aucun. La saisie d’images, l’affichage du raisonnement et la génération d’images, d’audio ou de vidéo dépendent de ce que propose votre serveur."
          },
          {
            "q": "Puis-je utiliser Phantasm avec Siri ?",
            "a": "La fiche indique qu’on peut interroger Phantasm depuis Siri et Raccourcis ; la profondeur de cette intégration n’est pas décrite."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Phantasm est un projet jeune, avec des commits récents, qui offre à l’iPhone un accès gratuit et sans compte à un serveur Ollama, vLLM ou llama.cpp domestique ; sa politique de confidentialité déclare ne collecter aucune donnée. En contrepartie, ce n’est qu’un client, il faut un serveur que vous exploitez, son dépôt ne montrait aucun fichier de licence le 13 novembre 2026 alors que le site la dit open source, et son build le plus récent du dépôt n’était pas sur l’App Store lors de la vérification. Elle convient à ceux qui hébergent déjà des modèles et veulent une interface native ; qui exige des garanties de confidentialité auditées devrait lire la politique comme une déclaration, non comme une preuve."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Phantasm sur l’App Store](https://apps.apple.com/us/app/phantasm/id6785720059) — description, historique des versions, exigences et étiquette de confidentialité, consultés le 13 novembre 2026.",
          "[Site web de Phantasm](https://getphantasm.com) — liste des fonctions et étapes de mise en place, consultés le 13 novembre 2026.",
          "[Politique de confidentialité de Phantasm](https://getphantasm.com/privacy.html) — flux de données, stockage et transcription sur l’appareil, mise à jour le 2 juillet 2026.",
          "[Page d’assistance de Phantasm](https://getphantasm.com/support.html) — mise en place et contact, consultée le 13 novembre 2026.",
          "[Phantasm sur GitHub](https://github.com/benthecarman/phantasm) — README, commits, tags et liste des fichiers, consultés le 13 novembre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lectures associées",
        "items": [
          "[Test de Reins](/fr/power-local-llm/reins-review) — une appli de chat pour iPhone et iPad destinée à votre propre serveur Ollama ou LM Studio, qui peut aussi exécuter des modèles MLX.",
          "[Test d’Enchanted](/fr/power-local-llm/enchanted-review) — un client Ollama gratuit sous licence Apache 2.0 pour iPhone et Mac.",
          "[Test de LM Mini](/fr/power-local-llm/lm-mini-review) — une appli de chat pour iPhone et iPad avec des modèles sur l’appareil et une connexion à votre propre serveur.",
          "[Meilleures applis de LLM locaux pour iPhone](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le panorama des applis iPhone auquel appartient ce test.",
          "[Annuaire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale."
        ]
      }
    }
  },
  ja: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-13",
    "dateModified": "2026-11-13",
    "next_refresh_due": "2027-05-13",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/phantasm-review-hero-ja.webp",
    "title": "Phantasmレビュー：iPhone向けセルフホストAIチャットアプリ",
    "seoTitle": "Phantasmレビュー：iPhone用セルフホストAIチャット",
    "intro": "Phantasmは、開発者Benjamin Carman名義で公開されている無料のiPhoneチャットアプリです。Ollama、vLLM、llama.cppなど自分で運用するAIバックエンドに接続し、アカウントは不要です。モデルをスマートフォン上で動かすのではなく、アプリはクライアントとして働き、任意の補助サーバーでWeb検索と画像生成を追加できます。このレビューは、[App Storeの掲載情報](https://apps.apple.com/us/app/phantasm/id6785720059)、[公式サイト](https://getphantasm.com)、[プライバシーポリシー](https://getphantasm.com/privacy.html)、[GitHubリポジトリ](https://github.com/benthecarman/phantasm)を2026年11月13日に確認した内容に基づいています。PromptQuorumはインストールも実行もしていません。",
    "metaDescription": "Phantasmのレビュー。自分のOllama、vLLM、llama.cppサーバーにつなぐ無料のiPhoneチャットアプリ。開発者によればアカウントもテレメトリも不要。動作は未検証です。",
    "twitterDescription": "Phantasmのレビュー：自分のOllama、vLLM、llama.cppサーバーにつなぐ無料のiPhoneチャットクライアント。アカウント不要。情報源が裏付けること、裏付けないこと。",
    "audience": "自宅でOllama、vLLM、llama.cppを運用するiPhoneユーザーで、Phantasmの機能、費用、情報源が確認していない点を知りたい方。",
    "readTime": "6分で読める",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Phantasm レビュー",
    "targetKeywords": [
      "phantasm レビュー",
      "phantasm iosアプリ",
      "ollama クライアント iphone",
      "セルフホスト ai チャット iphone",
      "プライベート ai チャット iphone",
      "openai互換 iosクライアント",
      "llama.cpp iphone アプリ"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "Mac"
    ],
    "leadAnswerBlock": "**Phantasm（App Storeのバージョン1.2、2026年7月25日公開）は、自分で運用するOpenAI互換のAIサーバーと会話する無料のiPhoneチャットアプリで、モデルは自分のハードウェア上で動き、スマートフォン上では動きません。** 開発者はアカウント、分析、テレメトリはないと説明しています。ここに書いた内容はすべてApp Storeの掲載情報、公式サイト、プライバシーポリシー、GitHubリポジトリに基づいており、PromptQuorumは動作を検証していません。",
    "quickAnswerTop": {
      "ja": {
        "question": "PhantasmはiPhone上でAIモデルを実行しますか？",
        "answer": "いいえ。開発者によると、アプリはクライアントです。入力したバックエンドのURL（通常は自分のネットワーク内のマシン）にメッセージを送り、端末上で動くのは音声の文字起こしだけです。",
        "bullets": [
          "OpenAI互換のサーバーならどれでも使え、素のOllamaにも対応します。",
          "任意のオーケストレーターサーバーで、Web検索、画像生成、リサーチモードを追加できます。",
          "複数のバックエンドプロファイルで、自宅ネットワーク、VPN、トンネルの構成に対応します。",
          "チャットに写真やファイルを添付でき、音声入力は端末上で動きます。"
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
        "label": "Phantasmとは",
        "anchor": "what-is-phantasm"
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
        "label": "使い始める手順",
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
        "label": "競合と代替アプリ",
        "anchor": "vs-alternatives"
      },
      {
        "label": "よくある質問",
        "anchor": "faq"
      },
      {
        "label": "結論",
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
            "text": "Phantasmは、自分でホストするOllama、vLLM、llama.cppなどOpenAI互換サーバー向けのiPhoneチャットクライアントです。"
          },
          {
            "type": "plain-terms",
            "text": "モデルを動かしているコンピューターのアドレスとトークンを入力すると、アプリがそこと会話し、写真やファイルを添付でき、任意のサーバーを使えばWeb検索もできます。"
          }
        ],
        "items": [
          "メンテナンス：App Storeのバージョン1.2は2026年7月25日付、リポジトリの最新コミット（1.3へのビルド番号更新）は2026年8月16日付です。App Storeは2026年11月13日時点で1.3を掲載していませんでした。",
          "費用：ダウンロードは無料です。リポジトリのREADMEは、アカウント、課金、クラウド同期を先送りしたプレミアム層としています。",
          "プラットフォーム：iOS 18以降のiPhone。掲載情報にはMacとApple Visionの要件も表示されますが、iPhone向けに設計されたアプリとされています。",
          "ソース：公式サイトとプライバシーポリシーはアプリとサーバーをオープンソースとしていますが、確認時点でリポジトリにライセンスファイルは見当たりませんでした。",
          "提供元：App Storeの販売元はBenjamin Carmanで、最初のリリースは2026年7月8日です。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "このレビューは、App Storeの掲載情報、公式サイト、プライバシーポリシー、サポートページ、GitHubリポジトリを2026年11月13日に確認した内容に基づいています。PromptQuorumはアプリもオーケストレーターもインストール、実行、ベンチマークしていないため、速度、回答品質、セットアップの手間は評価していません。"
          }
        ]
      },
      "overview": {
        "id": "what-is-phantasm",
        "title": "Phantasmとは",
        "content": [
          "**Phantasmは、自分でホストするAIモデル用のiOSチャットクライアントであり、モデルを内蔵したアプリではありません。** App Storeでは販売元Benjamin Carmanの「Phantasm」として掲載され、2026年7月8日に初登場しました。公式サイトは、自分が管理するバックエンドと会話する、高速でセルフホスト可能なiOS向けAIチャットアプリと説明しています。",
          "プロジェクトは2つの部分でできています。サーバーURLとトークンを受け取るSwiftUIアプリと、OllamaやComfyUIの隣で動いてWeb検索、画像生成、ツールループを追加する、任意のRust製サーバー（オーケストレーター）です。READMEによると、素のOllamaに向けた場合、アプリは通常のチャットに戻ります。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "入手方法",
        "content": [
          "**PhantasmはiPhone向けのApp Store無料ダウンロードで、Android、Windows、Web版については情報源に記載がありません。**"
        ],
        "columns": [
          "選択肢",
          "入手方法"
        ],
        "rows": [
          {
            "選択肢": "iPhone",
            "入手方法": "[App StoreのPhantasm](https://apps.apple.com/us/app/phantasm/id6785720059)、無料ダウンロード"
          },
          {
            "選択肢": "公式サイト",
            "入手方法": "[getphantasm.com](https://getphantasm.com)"
          },
          {
            "選択肢": "プライバシーポリシー",
            "入手方法": "[getphantasm.com/privacy.html](https://getphantasm.com/privacy.html)"
          },
          {
            "選択肢": "バックエンドサーバー",
            "入手方法": "[GitHubのオーケストレーター](https://github.com/benthecarman/phantasm)、任意、docker composeで起動"
          },
          {
            "選択肢": "ソースコード",
            "入手方法": "[github.com/benthecarman/phantasm](https://github.com/benthecarman/phantasm)、ライセンスファイルなし"
          }
        ],
        "note": "確認したバージョン：1.2（App Storeによると2026年7月25日公開）、アプリのサイズは19.1 MBです。アプリにモデルは内蔵されていないため、会話相手となるサーバーが別途必要です。掲載情報では価格は無料で、アプリ内課金の記載はありません。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "動作要件",
        "content": [
          "**App StoreはiOS 18.0以降を最小要件としており、自分で用意するサーバーがなければアプリはチャットできません。**"
        ],
        "columns": [
          "項目",
          "情報源の記載"
        ],
        "rows": [
          {
            "項目": "OS",
            "情報源の記載": "iPhoneのiOS 18.0以降"
          },
          {
            "項目": "バックエンド",
            "情報源の記載": "自分で用意するOpenAI互換サーバー（Ollama、vLLM、llama.cppなど）で、スマートフォンから到達できること"
          },
          {
            "項目": "接続",
            "情報源の記載": "サーバーURLとトークン。トークンはiOSキーチェーンに保存されます"
          },
          {
            "項目": "オーケストレーター（任意）",
            "情報源の記載": "Docker Compose。BraveによるWeb検索、ComfyUIによる画像生成、ツールループを追加します"
          },
          {
            "項目": "アカウント",
            "情報源の記載": "不要。開発者はアカウントはないと説明しています"
          }
        ],
        "note": "情報源に最小のiPhone機種やメモリの記載はなく、必要なハードウェアは自分のサーバーで動かすモデルによって変わります。自宅ネットワークの外からサーバーに到達する方法は自分で用意する必要があり、READMEは、端末から既に到達できるサーバーURLを使うとしています。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "使い始める手順",
        "content": [
          "**手順は開発者自身の説明に沿っており、PromptQuorumは実行していません。**"
        ],
        "numberedItems": [
          {
            "title": "バックエンドを動かす",
            "whyItMatters": "自分のマシンでOllamaなどOpenAI互換サーバーを起動します。Web検索と画像生成が必要なら、docker composeでオーケストレーターを追加します。"
          },
          {
            "title": "アプリをインストールする",
            "whyItMatters": "App StoreからPhantasmを入手します。アカウントは不要です。"
          },
          {
            "title": "URLとトークンを入力する",
            "whyItMatters": "設定にサーバーのアドレスとトークンを入力すると、アプリが利用可能なモデルと機能を自動で見つけます。"
          },
          {
            "title": "チャットする",
            "whyItMatters": "モデルを選び、写真やファイルを添付し、チャットごとにWebアクセスと画像生成のオンとオフを切り替えます。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "情報源が確認している機能",
        "content": [
          "**以下の項目はすべてApp Storeの説明、公式サイト、リポジトリに基づくもので、独自のテストはしていません。**"
        ],
        "items": [
          "**柔軟なバックエンド。** OpenAI互換のエンドポイントならどれでも使え、自宅ネットワーク、VPN、トンネル用に複数のプロファイルを保存でき、実行時に機能を検出します。",
          "**チャット表示。** ストリーミング回答、Markdown、構文ハイライトとコピー付きのコード、グラフ、文中の数式、思考モデルを選んだときのモデルの推論を表示します。バージョン1.2ではトークン数と速度の推定値が加わりました。",
          "**メディア。** ビジョンモデル向けの写真・ファイル添付、チャット内の生成画像、バージョン1.2以降は対応サーバーでの音声・動画生成に対応します。",
          "**音声とシステム連携。** 端末上の音声入力、返信の読み上げ、SiriとShortcuts、アプリがバックグラウンドに回った後も再開する長い生成に対応します。",
          "**ツール。** チャットごとのWebアクセスと画像生成のスイッチに加え、位置情報、カレンダー、Apple Healthの任意ツールがあります。これらは初期状態でオフで、自分のバックエンドとだけ共有されます。"
        ],
        "note": "Web検索、画像生成、リサーチモードには、任意のオーケストレーターか対応機能を持つバックエンドが必要です。素のOllamaサーバーでは通常のチャットになります。"
      },
      "privacy": {
        "id": "privacy",
        "title": "データの流れとプライバシー",
        "content": [
          "**2026年7月2日更新のプライバシーポリシーは、Phantasmにはアカウント、分析、テレメトリ、開発者側の中継サーバーがないとしています。** メッセージは入力したバックエンドのURLにだけ送られ、会話はスマートフォンに保存され、音声の文字起こしは端末上で動きます。App Storeのプライバシー表示は「Data Not Collected」（データ収集なし）です。",
          "データがどこを通るかは、バックエンド次第です。公式サイトは会話がネットワークの外に出ないとしていますが、アプリはVPNやトンネルのプロファイルにも対応しているため、リモート構成では自分で構築した経路を通ります。任意のデバイスツールは、チャットごとにオンにしたときだけ、位置情報、カレンダー、ヘルスのデータを自分のバックエンドと共有します。公式サイトはCloudflare経由で配信され、通常のリクエストデータが処理されますが、ポリシーによればCookieは設定しません。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "これらは開発者の申告であり、監査の結果ではありません。PromptQuorumはアプリの通信を検査していません。オーケストレーターのWeb検索を有効にすると、READMEによればサーバーがBrave Searchに問い合わせるため、その検索クエリはネットワークの外に出ます。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "向いている人",
        "items": [
          "**Ollama、vLLM、llama.cppの利用者**で、自宅で動かしているモデル用にネイティブのiPhoneフロントエンドが欲しい方。",
          "**プライバシーを重視する方**で、開発者の説明どおりアカウントも分析もないアプリが欲しい方。",
          "**ホームラボ好きの方**で、Web検索や画像生成のためにDocker Composeを動かすのが苦にならない方。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかった点",
        "items": [
          "**性能。** 速度、バッテリー消費、非常に長いチャットでの動作は未検証です。",
          "**オーケストレーター。** Web検索、ComfyUIでの画像生成、ツールループは実行していません。READMEはプロジェクトをMVPビルドとしています。",
          "**ライセンス。** 公式サイトはアプリとサーバーをオープンソースとしていますが、2026年11月13日時点でリポジトリにライセンスファイルが見当たらなかったため、再利用の条件は示されていません。",
          "**その他のデバイス。** 掲載情報にはMacとApple Visionの要件が表示されますが、iPhone向けに設計されたアプリとされており、iPadやMacへの対応は説明されていません。",
          "**最新ビルド。** リポジトリには2026年8月16日付のバージョン1.3へのビルド番号更新がありますが、App Storeの掲載情報は2026年11月13日時点でそれを示していませんでした。"
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "競合と代替アプリ",
        "columns": [
          "アプリ",
          "プラットフォーム",
          "価格／ライセンス",
          "主な違い"
        ],
        "rows": [
          {
            "アプリ": "[LM Mini](/ja/power-local-llm/lm-mini-review)",
            "プラットフォーム": "iPhone、iPad、Mac（掲載情報）",
            "価格／ライセンス": "無料＋アプリ内課金／非公開",
            "主な違い": "リモートアクセスと任意のクラウドAPIにも対応"
          },
          {
            "アプリ": "[Enchanted](/ja/power-local-llm/enchanted-review)",
            "プラットフォーム": "iPhone、Mac",
            "価格／ライセンス": "無料／Apache 2.0",
            "主な違い": "別のOllamaサーバーが必要なOllamaクライアント"
          },
          {
            "アプリ": "[Reins](/ja/power-local-llm/reins-review)",
            "プラットフォーム": "iPhone、iPad、Mac（掲載情報）",
            "価格／ライセンス": "無料＋Pro／非公開（v2）",
            "主な違い": "自分のサーバーに接続し、端末上でMLXモデルも実行"
          }
        ],
        "note": "選ぶ前に、各アプリの最新の価格、ライセンス、対応プラットフォームをそれぞれの掲載ページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "Phantasmはサーバーなしで使えますか？",
            "a": "いいえ。App Storeの掲載情報によると、自分で用意するOpenAI互換サーバー（たとえば自分のマシン上のOllama）が必要です。プライバシーポリシーによると、スマートフォン上で実行されるのは音声の文字起こしだけです。"
          },
          {
            "q": "外出先でもPhantasmを使えますか？",
            "a": "アプリは到達可能なURLならどれでも受け付け、掲載情報にはVPNとトンネルのプロファイルの記載がありますが、情報源に組み込みのリモートアクセスサービスの説明はなく、READMEは管理型リレーを先送りとしています。"
          },
          {
            "q": "Phantasmはどのモデルに対応していますか？",
            "a": "バックエンドが提供するモデルならどれでも使えます。アプリ自体はモデルを内蔵していません。画像入力、推論の表示、画像・音声・動画の生成は、バックエンドが対応しているかどうかで決まります。"
          },
          {
            "q": "PhantasmをSiriで使えますか？",
            "a": "掲載情報によると、SiriとShortcutsからPhantasmに尋ねることができます。連携がどこまで深いかは説明されていません。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "結論",
        "content": "Phantasmは、最近もコミットのある若いプロジェクトで、iPhoneから自宅のOllama、vLLM、llama.cppサーバーへ、無料でアカウントなしにつなぐ手段を提供し、プライバシーポリシーはデータを収集しないと申告しています。一方で、クライアントにすぎず、自分で運用するサーバーが必要で、公式サイトはオープンソースとしていますが2026年11月13日時点でリポジトリにライセンスファイルが見当たらず、確認時点でリポジトリの最新ビルドはApp Storeにありませんでした。すでにモデルをホストしていてネイティブのフロントエンドが欲しい人に向いています。監査済みのプライバシー保証が必要な人は、ポリシーを証明ではなく申告として読んでください。"
      },
      "sources": {
        "id": "sources",
        "title": "情報源",
        "items": [
          "[App StoreのPhantasm](https://apps.apple.com/us/app/phantasm/id6785720059) — 説明、バージョン履歴、要件、プライバシー表示。2026年11月13日確認。",
          "[Phantasm公式サイト](https://getphantasm.com) — 機能一覧とセットアップ手順。2026年11月13日確認。",
          "[Phantasmのプライバシーポリシー](https://getphantasm.com/privacy.html) — データの流れ、保存、端末上の文字起こし。2026年7月2日更新。",
          "[Phantasmのサポートページ](https://getphantasm.com/support.html) — セットアップと連絡先。2026年11月13日確認。",
          "[GitHubのPhantasm](https://github.com/benthecarman/phantasm) — README、コミット、タグ、ファイル一覧。2026年11月13日確認。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[Reinsレビュー](/ja/power-local-llm/reins-review) — 自分のOllamaまたはLM Studioサーバー向けのiPhone・iPadチャットアプリで、MLXモデルも実行できます。",
          "[Enchantedレビュー](/ja/power-local-llm/enchanted-review) — iPhoneとMac向けの、Apache 2.0の無料Ollamaクライアントです。",
          "[LM Miniレビュー](/ja/power-local-llm/lm-mini-review) — 端末上のモデルと自分のサーバーへの接続に対応するiPhone・iPadチャットアプリです。",
          "[iPhone向けローカルLLMアプリのおすすめ](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — このレビューが属するiPhoneアプリの一覧記事です。",
          "[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログです。"
        ]
      }
    }
  },
  pt: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-13",
    "dateModified": "2026-11-13",
    "next_refresh_due": "2027-05-13",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/phantasm-review-hero-pt.webp",
    "title": "Análise do Phantasm: app de chat com IA auto-hospedada para iPhone",
    "seoTitle": "Análise do Phantasm: chat de IA auto-hospedada no iPhone",
    "intro": "O Phantasm é um app de chat gratuito para iPhone, listado sob o desenvolvedor Benjamin Carman, que se conecta a um backend de IA que você mesmo executa, como Ollama, vLLM ou llama.cpp, e não exige conta. Ele não executa modelos no celular: o app é o cliente, e um servidor complementar opcional adiciona busca na web e geração de imagens. Esta análise se baseia na [página da App Store](https://apps.apple.com/us/app/phantasm/id6785720059), no [site](https://getphantasm.com), na [política de privacidade](https://getphantasm.com/privacy.html) e no [repositório do GitHub](https://github.com/benthecarman/phantasm), consultados em 13 de novembro de 2026. A PromptQuorum não o instalou nem o executou.",
    "metaDescription": "Análise do Phantasm: app de chat gratuito para iPhone e seu servidor Ollama, vLLM ou llama.cpp. Segundo o dev, sem conta nem telemetria. Não testado.",
    "twitterDescription": "Análise do Phantasm: um cliente de chat gratuito para iPhone que se conecta ao seu próprio servidor Ollama, vLLM ou llama.cpp, sem conta. O que as fontes confirmam e o que não confirmam.",
    "audience": "Donos de iPhone que executam Ollama, vLLM ou llama.cpp em casa e querem saber o que o Phantasm faz, quanto custa e quais afirmações as fontes deixam sem confirmação.",
    "readTime": "6 min de leitura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Análise do Phantasm",
    "targetKeywords": [
      "análise phantasm",
      "phantasm app ios",
      "cliente ollama iphone",
      "chat ia auto-hospedada iphone",
      "chat ia privado iphone",
      "cliente ios compatível com openai",
      "app llama.cpp iphone"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "Mac"
    ],
    "leadAnswerBlock": "**O Phantasm (versão 1.2 na App Store, lançada em 25 de julho de 2026) é um app de chat gratuito para iPhone que conversa com um servidor de IA compatível com a OpenAI que você mesmo executa, de modo que os modelos rodam no seu hardware, não no celular.** O desenvolvedor diz que não há contas, análises nem telemetria; cada afirmação aqui vem da página da App Store, do site, da política de privacidade e do repositório do GitHub, e a PromptQuorum não o testou.",
    "quickAnswerTop": {
      "pt": {
        "question": "O Phantasm executa modelos de IA no iPhone?",
        "answer": "Não. Segundo o desenvolvedor, o app é um cliente: ele envia suas mensagens para a URL do backend que você informa, normalmente um computador da sua própria rede, e só a transcrição de voz roda no aparelho.",
        "bullets": [
          "Qualquer servidor compatível com a OpenAI funciona, inclusive uma instância simples do Ollama.",
          "Um servidor orquestrador opcional adiciona busca na web, geração de imagens e modos de pesquisa.",
          "Vários perfis de backend cobrem rede doméstica, VPN ou túnel.",
          "Fotos e arquivos podem ser anexados a um chat, e o ditado roda no aparelho."
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
        "label": "O que é o Phantasm?",
        "anchor": "what-is-phantasm"
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
        "label": "Para quem serve",
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
            "text": "O Phantasm é um cliente de chat para iPhone para Ollama, vLLM, llama.cpp e outros servidores compatíveis com a OpenAI que você hospeda."
          },
          {
            "type": "plain-terms",
            "text": "Você informa o endereço e o token do computador que executa seus modelos, e o app conversa com ele, anexa fotos e arquivos e, com o servidor opcional, pesquisa na web."
          }
        ],
        "items": [
          "Manutenção: a versão 1.2 da App Store é de 25 de julho de 2026, e o último commit do repositório, um aumento de build para 1.3, é de 16 de agosto de 2026; a App Store não listava a 1.3 em 13 de novembro de 2026.",
          "Custo: download gratuito; o README do repositório chama contas, cobrança e sincronização na nuvem de uma camada premium adiada.",
          "Plataforma: iPhone com iOS 18 ou posterior; a página também mostra requisitos para Mac e Apple Vision, mas diz que o app foi projetado para iPhone.",
          "Código: o site e a política de privacidade chamam o app e o servidor de código aberto, mas o repositório não mostrava arquivo de licença na verificação.",
          "Autoria: Benjamin Carman consta como vendedor na App Store, e a primeira versão saiu em 8 de julho de 2026."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta análise se baseia na página da App Store, no site, na política de privacidade, na página de suporte e no repositório do GitHub, consultados em 13 de novembro de 2026. A PromptQuorum não instalou, executou nem mediu o app ou o orquestrador, portanto velocidade, qualidade das respostas e esforço de configuração não são avaliados."
          }
        ]
      },
      "overview": {
        "id": "what-is-phantasm",
        "title": "O que é o Phantasm?",
        "content": [
          "**O Phantasm é um cliente de chat para iOS para modelos de IA que você hospeda, não um app que contém um modelo.** A App Store o lista como «Phantasm», do vendedor Benjamin Carman, ele apareceu em 8 de julho de 2026, e o site o descreve como um app de chat com IA para iOS, rápido e auto-hospedável, que conversa com um backend que você controla.",
          "O projeto tem duas partes: o app em SwiftUI, que recebe uma URL de servidor e um token, e um servidor opcional em Rust chamado orquestrador, que roda ao lado do Ollama e do ComfyUI e adiciona busca na web, geração de imagens e um laço de ferramentas. Apontado para uma instância simples do Ollama, o app volta ao chat simples, segundo o README."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Como obter",
        "content": [
          "**O Phantasm é um download gratuito da App Store para iPhone; as fontes não citam versão para Android, Windows ou web.**"
        ],
        "columns": [
          "Opção",
          "Como obter"
        ],
        "rows": [
          {
            "Opção": "iPhone",
            "Como obter": "[Phantasm na App Store](https://apps.apple.com/us/app/phantasm/id6785720059), download gratuito"
          },
          {
            "Opção": "Site",
            "Como obter": "[getphantasm.com](https://getphantasm.com)"
          },
          {
            "Opção": "Política de privacidade",
            "Como obter": "[getphantasm.com/privacy.html](https://getphantasm.com/privacy.html)"
          },
          {
            "Opção": "Servidor backend",
            "Como obter": "[Orquestrador no GitHub](https://github.com/benthecarman/phantasm), opcional, inicia com docker compose"
          },
          {
            "Opção": "Código-fonte",
            "Como obter": "[github.com/benthecarman/phantasm](https://github.com/benthecarman/phantasm), sem arquivo de licença"
          }
        ],
        "note": "Versão analisada: 1.2, lançada em 25 de julho de 2026 segundo a App Store; o app tem 19.1 MB. O app não traz nenhum modelo, então você também precisa de um servidor para conversar. A página mostra o preço como gratuito e não cita compras no app."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**A App Store indica o iOS 18.0 como mínimo, e o app não consegue conversar sem um servidor que você mesmo forneça.**"
        ],
        "columns": [
          "Item",
          "O que as fontes dizem"
        ],
        "rows": [
          {
            "Item": "Sistema operacional",
            "O que as fontes dizem": "iOS 18.0 ou posterior no iPhone"
          },
          {
            "Item": "Backend",
            "O que as fontes dizem": "Um servidor compatível com a OpenAI que você fornece, como Ollama, vLLM ou llama.cpp, acessível a partir do celular"
          },
          {
            "Item": "Conexão",
            "O que as fontes dizem": "Uma URL de servidor e um token; o token fica no Chaveiro do iOS"
          },
          {
            "Item": "Orquestrador (opcional)",
            "O que as fontes dizem": "Docker Compose; adiciona busca na web via Brave, geração de imagens via ComfyUI e um laço de ferramentas"
          },
          {
            "Item": "Conta",
            "O que as fontes dizem": "Nenhuma; o desenvolvedor diz que não há contas"
          }
        ],
        "note": "As fontes não citam iPhone nem memória mínimos; o hardware necessário depende dos modelos que o seu próprio servidor executa. Alcançar o servidor de fora da rede doméstica fica por sua conta: segundo o README, você usa uma URL de servidor que já seja acessível a partir do seu aparelho."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Como começar",
        "content": [
          "**Os passos seguem a descrição do próprio desenvolvedor; a PromptQuorum não os executou.**"
        ],
        "numberedItems": [
          {
            "title": "Execute um backend",
            "whyItMatters": "Inicie o Ollama ou outro servidor compatível com a OpenAI em um computador seu; opcionalmente adicione o orquestrador com docker compose para busca na web e geração de imagens."
          },
          {
            "title": "Instale o app",
            "whyItMatters": "Baixe o Phantasm na App Store; não é preciso conta."
          },
          {
            "title": "Informe a URL e o token",
            "whyItMatters": "Adicione o endereço do servidor e o token nos Ajustes; o app descobre sozinho os modelos e os recursos disponíveis."
          },
          {
            "title": "Converse",
            "whyItMatters": "Escolha um modelo, anexe fotos ou arquivos e ative ou desative o acesso à web e a geração de imagens em cada chat."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos confirmados pelas fontes",
        "content": [
          "**Cada item abaixo vem da descrição da App Store, do site ou do repositório; nenhum foi testado de forma independente.**"
        ],
        "items": [
          "**Backends flexíveis.** Qualquer endpoint compatível com a OpenAI, com vários perfis salvos para rede doméstica, VPN ou túnel e detecção de recursos em tempo de execução.",
          "**Exibição do chat.** Respostas em streaming com markdown, código com realce de sintaxe e botão de copiar, gráficos, matemática em linha e o raciocínio do modelo quando um modelo de raciocínio é escolhido; a versão 1.2 acrescenta estimativas de tokens e velocidade.",
          "**Mídia.** Anexos de fotos e arquivos para modelos de visão, imagens geradas exibidas no chat e, desde a versão 1.2, geração de áudio e vídeo com servidores compatíveis.",
          "**Voz e integração com o sistema.** Ditado no aparelho, respostas lidas em voz alta, Siri e Atalhos, e gerações longas que continuam depois de o app ter ido para segundo plano.",
          "**Ferramentas.** Chaves por chat para acesso à web e geração de imagens, além de ferramentas opcionais de localização, calendário e Apple Saúde que vêm desativadas e só são compartilhadas com o seu próprio backend."
        ],
        "note": "Busca na web, geração de imagens e modos de pesquisa exigem o orquestrador opcional ou um backend com recursos equivalentes; um servidor Ollama simples oferece chat simples."
      },
      "privacy": {
        "id": "privacy",
        "title": "Fluxo de dados e privacidade",
        "content": [
          "**A política de privacidade, atualizada pela última vez em 2 de julho de 2026, diz que o Phantasm não tem contas, análises, telemetria nem servidores do desenvolvedor no meio do caminho.** As mensagens vão apenas para a URL de backend que você informa, as conversas ficam no celular e a transcrição de voz roda no aparelho. O rótulo de privacidade da App Store diz «Data Not Collected» (dados não coletados).",
          "Para onde seus dados viajam depende do seu backend. O site diz que as conversas nunca saem da sua rede, mas o app também aceita perfis de VPN e túnel, de modo que uma configuração remota envia o tráfego pela rota que você montar. As ferramentas opcionais do aparelho compartilham localização, calendário ou dados de saúde com o seu backend somente quando você as ativa em um chat. O site é servido pela Cloudflare, que processa dados comuns de requisição, e a política diz que ele não usa cookies."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "São declarações do desenvolvedor, não resultados de auditoria, e a PromptQuorum não inspecionou o tráfego de rede do app. Quando a busca na web do orquestrador está ativa, o servidor consulta o Brave Search segundo o README, portanto essas consultas saem da sua rede."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem serve",
        "items": [
          "**Quem usa Ollama, vLLM ou llama.cpp** e quer uma interface nativa para iPhone para modelos que já rodam em casa.",
          "**Usuários atentos à privacidade** que querem um app sem conta e sem análises, como o desenvolvedor o descreve.",
          "**Entusiastas de home lab** que se sentem à vontade executando Docker Compose para busca na web e geração de imagens."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Desempenho.** Velocidade, consumo de bateria e comportamento em chats muito longos não foram testados.",
          "**Orquestrador.** Busca na web, geração de imagens com ComfyUI e o laço de ferramentas não foram executados; o README chama o projeto de versão MVP.",
          "**Licença.** O site chama o app e o servidor de código aberto, mas o repositório não mostrava arquivo de licença em 13 de novembro de 2026, então as condições de reutilização não estão indicadas.",
          "**Outros dispositivos.** A página mostra requisitos para Mac e Apple Vision, mas diz que o app foi projetado para iPhone; o suporte a iPad e Mac não é descrito.",
          "**Build mais recente.** O repositório contém um aumento de build para a versão 1.3 de 16 de agosto de 2026 que a página da App Store não mostrava em 13 de novembro de 2026."
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
            "App": "[LM Mini](/pt/power-local-llm/lm-mini-review)",
            "Plataformas": "iPhone, iPad, Mac conforme a página",
            "Preço / licença": "Grátis + compras / código fechado",
            "Diferença principal": "Também oferece acesso remoto e APIs na nuvem opcionais"
          },
          {
            "App": "[Enchanted](/pt/power-local-llm/enchanted-review)",
            "Plataformas": "iPhone, Mac",
            "Preço / licença": "Grátis / Apache 2.0",
            "Diferença principal": "Cliente do Ollama que exige um servidor Ollama separado"
          },
          {
            "App": "[Reins](/pt/power-local-llm/reins-review)",
            "Plataformas": "iPhone, iPad, Mac conforme a página",
            "Preço / licença": "Grátis + Pro / código fechado (v2)",
            "Diferença principal": "Conecta-se ao seu servidor e também executa modelos MLX no aparelho"
          }
        ],
        "note": "Confirme o preço, a licença e as plataformas atuais de cada app na própria página antes de escolher."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "O Phantasm funciona sem servidor?",
            "a": "Não. A página da App Store diz que ele exige um servidor compatível com a OpenAI que você fornece, por exemplo o Ollama no seu próprio computador; segundo a política de privacidade, só a transcrição de voz roda no celular."
          },
          {
            "q": "Posso usar o Phantasm fora de casa?",
            "a": "O app aceita qualquer URL acessível e a página cita perfis de VPN e túnel, mas as fontes não descrevem nenhum serviço de acesso remoto integrado, e o README lista um relay gerenciado como adiado."
          },
          {
            "q": "Quais modelos o Phantasm suporta?",
            "a": "Qualquer modelo que o seu backend sirva, porque o app não traz nenhum. Entrada de imagens, exibição do raciocínio e geração de imagens, áudio ou vídeo dependem do que o seu backend oferece."
          },
          {
            "q": "Posso usar o Phantasm com a Siri?",
            "a": "A página diz que você pode chamar o Phantasm pela Siri e pelos Atalhos; a profundidade dessa integração não é descrita."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O Phantasm é um projeto jovem, com commits recentes, que dá ao iPhone um acesso gratuito e sem conta a um servidor Ollama, vLLM ou llama.cpp doméstico; sua política de privacidade declara não coletar dados. Em contrapartida, é só um cliente, exige um servidor que você executa, seu repositório não mostrava arquivo de licença em 13 de novembro de 2026 embora o site o chame de código aberto, e seu build mais recente do repositório não estava na App Store na verificação. Serve para quem já hospeda modelos e quer uma interface nativa; quem precisa de garantias de privacidade auditadas deve ler a política como uma declaração, não como prova."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Phantasm na App Store](https://apps.apple.com/us/app/phantasm/id6785720059) — descrição, histórico de versões, requisitos e rótulo de privacidade, consultados em 13 de novembro de 2026.",
          "[Site do Phantasm](https://getphantasm.com) — lista de recursos e passos de configuração, consultados em 13 de novembro de 2026.",
          "[Política de privacidade do Phantasm](https://getphantasm.com/privacy.html) — fluxo de dados, armazenamento e transcrição no aparelho, atualizada pela última vez em 2 de julho de 2026.",
          "[Página de suporte do Phantasm](https://getphantasm.com/support.html) — configuração e contato, consultada em 13 de novembro de 2026.",
          "[Phantasm no GitHub](https://github.com/benthecarman/phantasm) — README, commits, tags e lista de arquivos, consultados em 13 de novembro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leitura relacionada",
        "items": [
          "[Análise do Reins](/pt/power-local-llm/reins-review) — um app de chat para iPhone e iPad para o seu próprio servidor Ollama ou LM Studio que também pode executar modelos MLX.",
          "[Análise do Enchanted](/pt/power-local-llm/enchanted-review) — um cliente gratuito do Ollama sob licença Apache 2.0 para iPhone e Mac.",
          "[Análise do LM Mini](/pt/power-local-llm/lm-mini-review) — um app de chat para iPhone e iPad com modelos no aparelho e conexão com o seu próprio servidor.",
          "[Melhores apps de LLM locais para iPhone](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama de apps para iPhone a que esta análise pertence.",
          "[Diretório de software de LLM locais](/pt/directory) — o catálogo completo de ferramentas de IA local."
        ]
      }
    }
  },
  ar: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-13",
    "dateModified": "2026-11-13",
    "next_refresh_due": "2027-05-13",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/phantasm-review-hero-ar.webp",
    "title": "مراجعة Phantasm: تطبيق دردشة بالذكاء الاصطناعي المستضاف ذاتيًا لـ iPhone",
    "seoTitle": "مراجعة Phantasm: دردشة ذكاء اصطناعي لخادمك على iPhone",
    "intro": "Phantasm تطبيق دردشة مجاني لـ iPhone مدرج باسم المطوّر Benjamin Carman، يتصل بخادم ذكاء اصطناعي تشغّله بنفسك مثل Ollama أو vLLM أو llama.cpp ولا يطلب حسابًا. لا يشغّل التطبيق النماذج على الهاتف: فهو العميل فقط، ويضيف خادم مساعد اختياري البحث على الويب وتوليد الصور. تستند هذه المراجعة إلى [صفحة App Store](https://apps.apple.com/us/app/phantasm/id6785720059) و[الموقع الرسمي](https://getphantasm.com) و[سياسة الخصوصية](https://getphantasm.com/privacy.html) و[مستودع GitHub](https://github.com/benthecarman/phantasm)، وقد جرى الاطلاع عليها في 13 نوفمبر 2026. لم تثبّت PromptQuorum التطبيق ولم تشغّله.",
    "metaDescription": "مراجعة Phantasm: تطبيق دردشة مجاني لـ iPhone يتصل بخادم Ollama أو vLLM أو llama.cpp. بحسب المطوّر لا حساب ولا قياس عن بُعد. لم تختبره PromptQuorum.",
    "twitterDescription": "مراجعة Phantasm: عميل دردشة مجاني لـ iPhone يتصل بخادم Ollama أو vLLM أو llama.cpp الخاص بك، بلا حساب. ما تؤكده المصادر وما لا تؤكده.",
    "audience": "مالكو iPhone الذين يشغّلون Ollama أو vLLM أو llama.cpp في المنزل ويريدون معرفة ما يفعله Phantasm وكم يكلّف وما الادعاءات التي تتركها المصادر دون تأكيد.",
    "readTime": "6 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة Phantasm",
    "targetKeywords": [
      "مراجعة phantasm",
      "تطبيق phantasm لنظام ios",
      "عميل ollama لـ iphone",
      "دردشة ذكاء اصطناعي مستضافة ذاتيًا iphone",
      "دردشة ذكاء اصطناعي خاصة iphone",
      "عميل ios متوافق مع openai",
      "تطبيق llama.cpp لـ iphone"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "Mac"
    ],
    "leadAnswerBlock": "**Phantasm (الإصدار 1.2 على App Store، صدر في 25 يوليو 2026) تطبيق دردشة مجاني لـ iPhone يتحدث مع خادم ذكاء اصطناعي متوافق مع OpenAI تشغّله بنفسك، فتعمل النماذج على عتادك أنت لا على الهاتف.** يقول المطوّر إنه لا توجد حسابات ولا تحليلات ولا قياس عن بُعد؛ وكل ما هنا مأخوذ من صفحة App Store والموقع الرسمي وسياسة الخصوصية ومستودع GitHub، ولم تختبر PromptQuorum التطبيق.",
    "quickAnswerTop": {
      "ar": {
        "question": "هل يشغّل Phantasm نماذج الذكاء الاصطناعي على iPhone؟",
        "answer": "لا. بحسب المطوّر، التطبيق عميل فقط: يرسل رسائلك إلى عنوان الخادم الذي تدخله، وهو عادةً جهاز في شبكتك الخاصة، ولا يعمل على الجهاز سوى تحويل الكلام إلى نص.",
        "bullets": [
          "يعمل أي خادم متوافق مع OpenAI، بما في ذلك نسخة Ollama بسيطة.",
          "يضيف خادم منسّق اختياري البحث على الويب وتوليد الصور وأوضاع البحث.",
          "تغطي ملفات تعريف الخوادم المتعددة الشبكة المنزلية وVPN والأنفاق.",
          "يمكن إرفاق الصور والملفات بالدردشة، ويعمل الإملاء الصوتي على الجهاز."
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
        "label": "ما هو Phantasm؟",
        "anchor": "what-is-phantasm"
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
        "label": "الميزات التي تؤكدها المصادر",
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
            "text": "Phantasm عميل دردشة لـ iPhone يعمل مع Ollama وvLLM وllama.cpp وغيرها من الخوادم المتوافقة مع OpenAI التي تستضيفها بنفسك."
          },
          {
            "type": "plain-terms",
            "text": "تدخل عنوان الجهاز الذي يشغّل نماذجك ورمزه، فيتحدث التطبيق معه ويرفق الصور والملفات، ويبحث في الويب إذا استخدمت الخادم الاختياري."
          }
        ],
        "items": [
          "الصيانة: إصدار App Store 1.2 مؤرخ في 25 يوليو 2026، وآخر إيداع (commit) في المستودع، وهو رفع رقم البناء إلى 1.3، مؤرخ في 16 أغسطس 2026؛ ولم يعرض App Store الإصدار 1.3 في 13 نوفمبر 2026.",
          "التكلفة: تنزيل مجاني؛ ويصف ملف README في المستودع الحسابات والفوترة والمزامنة السحابية بأنها طبقة مميزة مؤجلة.",
          "المنصة: iPhone بنظام iOS 18 أو أحدث؛ وتعرض الصفحة أيضًا متطلبات Mac وApple Vision لكنها تقول إن التطبيق مصمم لـ iPhone.",
          "الشيفرة: يصف الموقع وسياسة الخصوصية التطبيق والخادم بأنهما مفتوحا المصدر، لكن المستودع لم يُظهر ملف ترخيص عند التحقق.",
          "الجهة المطوّرة: Benjamin Carman هو البائع على App Store، وصدر أول إصدار في 8 يوليو 2026."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "تستند هذه المراجعة إلى صفحة App Store والموقع الرسمي وسياسة الخصوصية وصفحة الدعم ومستودع GitHub، وقد جرى الاطلاع عليها في 13 نوفمبر 2026. لم تثبّت PromptQuorum التطبيق أو المنسّق ولم تشغّلهما ولم تقِس أداءهما، لذا لا تُقيَّم السرعة ولا جودة الإجابات ولا جهد الإعداد."
          }
        ]
      },
      "overview": {
        "id": "what-is-phantasm",
        "title": "ما هو Phantasm؟",
        "content": [
          "**Phantasm عميل دردشة لنظام iOS لنماذج ذكاء اصطناعي تستضيفها بنفسك، وليس تطبيقًا يحتوي نموذجًا.** يدرجه App Store باسم «Phantasm» من البائع Benjamin Carman، وظهر أول مرة في 8 يوليو 2026، ويصفه الموقع بأنه تطبيق دردشة بالذكاء الاصطناعي لنظام iOS سريع وقابل للاستضافة الذاتية يتحدث مع خادم تتحكم فيه.",
          "يتألف المشروع من جزأين: تطبيق SwiftUI الذي يقبل عنوان خادم ورمزًا، وخادم Rust اختياري يُسمى المنسّق (orchestrator) يعمل بجوار Ollama وComfyUI ويضيف البحث على الويب وتوليد الصور وحلقة أدوات. وعند توجيهه إلى نسخة Ollama بسيطة يعود التطبيق إلى دردشة عادية، بحسب README."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "كيف تحصل عليه",
        "content": [
          "**Phantasm تنزيل مجاني من App Store لـ iPhone؛ ولا تذكر المصادر إصدارًا لأندرويد أو ويندوز أو الويب.**"
        ],
        "columns": [
          "الخيار",
          "كيف تحصل عليه"
        ],
        "rows": [
          {
            "الخيار": "iPhone",
            "كيف تحصل عليه": "[Phantasm على App Store](https://apps.apple.com/us/app/phantasm/id6785720059)، تنزيل مجاني"
          },
          {
            "الخيار": "الموقع",
            "كيف تحصل عليه": "[getphantasm.com](https://getphantasm.com)"
          },
          {
            "الخيار": "سياسة الخصوصية",
            "كيف تحصل عليه": "[getphantasm.com/privacy.html](https://getphantasm.com/privacy.html)"
          },
          {
            "الخيار": "خادم الواجهة الخلفية",
            "كيف تحصل عليه": "[المنسّق على GitHub](https://github.com/benthecarman/phantasm)، اختياري، يبدأ بـ docker compose"
          },
          {
            "الخيار": "الشيفرة المصدرية",
            "كيف تحصل عليه": "[github.com/benthecarman/phantasm](https://github.com/benthecarman/phantasm)، بلا ملف ترخيص"
          }
        ],
        "note": "الإصدار الذي رُوجع: 1.2، صدر في 25 يوليو 2026 بحسب App Store؛ وحجم التطبيق 19.1 MB. لا يتضمن التطبيق نموذجًا مدمجًا، لذا تحتاج أيضًا إلى خادم تتحدث معه. تعرض الصفحة السعر مجانيًا ولا تذكر مشتريات داخل التطبيق."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "المتطلبات",
        "content": [
          "**يذكر App Store نظام iOS 18.0 حدًّا أدنى، ولا يستطيع التطبيق الدردشة دون خادم توفّره بنفسك.**"
        ],
        "columns": [
          "البند",
          "ما تقوله المصادر"
        ],
        "rows": [
          {
            "البند": "نظام التشغيل",
            "ما تقوله المصادر": "iOS 18.0 أو أحدث على iPhone"
          },
          {
            "البند": "الواجهة الخلفية",
            "ما تقوله المصادر": "خادم متوافق مع OpenAI توفّره بنفسك، مثل Ollama أو vLLM أو llama.cpp، ويمكن الوصول إليه من الهاتف"
          },
          {
            "البند": "الاتصال",
            "ما تقوله المصادر": "عنوان خادم ورمز؛ ويُحفظ الرمز في سلسلة مفاتيح iOS"
          },
          {
            "البند": "المنسّق (اختياري)",
            "ما تقوله المصادر": "Docker Compose؛ يضيف البحث على الويب عبر Brave وتوليد الصور عبر ComfyUI وحلقة أدوات"
          },
          {
            "البند": "الحساب",
            "ما تقوله المصادر": "لا يوجد؛ يقول المطوّر إنه لا توجد حسابات"
          }
        ],
        "note": "لا تذكر المصادر حدًّا أدنى لطراز iPhone أو الذاكرة؛ فالعتاد المطلوب يتوقف على النماذج التي يشغّلها خادمك. والوصول إلى الخادم من خارج شبكتك المنزلية مسؤوليتك: يقول README إنك تستخدم عنوان خادم يمكن الوصول إليه فعلًا من جهازك."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "كيف تبدأ",
        "content": [
          "**تتبع الخطوات وصف المطوّر نفسه للتطبيق؛ ولم تنفّذها PromptQuorum.**"
        ],
        "numberedItems": [
          {
            "title": "شغّل خادمًا",
            "whyItMatters": "ابدأ Ollama أو خادمًا آخر متوافقًا مع OpenAI على جهاز تملكه؛ ويمكنك اختياريًا إضافة المنسّق عبر docker compose للبحث على الويب وتوليد الصور."
          },
          {
            "title": "ثبّت التطبيق",
            "whyItMatters": "نزّل Phantasm من App Store؛ ولا حاجة إلى حساب."
          },
          {
            "title": "أدخل العنوان والرمز",
            "whyItMatters": "أضف عنوان الخادم والرمز في الإعدادات؛ فيكتشف التطبيق النماذج والإمكانات المتاحة بنفسه."
          },
          {
            "title": "ابدأ الدردشة",
            "whyItMatters": "اختر نموذجًا، وأرفق صورًا أو ملفات، وشغّل الوصول إلى الويب وتوليد الصور أو أوقفهما لكل دردشة."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "الميزات التي تؤكدها المصادر",
        "content": [
          "**كل بند أدناه مأخوذ من وصف App Store أو الموقع أو المستودع؛ ولم يُختبر أيٌّ منها بشكل مستقل.**"
        ],
        "items": [
          "**خوادم مرنة.** أي نقطة نهاية متوافقة مع OpenAI، مع عدة ملفات تعريف محفوظة للشبكة المنزلية أو VPN أو الأنفاق، واكتشاف للإمكانات أثناء التشغيل.",
          "**عرض الدردشة.** إجابات متدفقة مع markdown وشيفرة بتلوين صياغي وزر نسخ ومخططات ومعادلات داخل النص، وعرض استدلال النموذج عند اختيار نموذج تفكير؛ ويضيف الإصدار 1.2 تقديرات للرموز (tokens) والسرعة.",
          "**الوسائط.** مرفقات صور وملفات لنماذج الرؤية، وصور مولَّدة تظهر داخل الدردشة، وتوليد صوت وفيديو مع الخوادم المتوافقة منذ الإصدار 1.2.",
          "**الصوت والتكامل مع النظام.** إملاء على الجهاز، وقراءة الردود بصوت عالٍ، وSiri والاختصارات، وعمليات توليد طويلة تستأنف بعد انتقال التطبيق إلى الخلفية.",
          "**الأدوات.** مفاتيح لكل دردشة للوصول إلى الويب وتوليد الصور، إضافة إلى أدوات اختيارية للموقع والتقويم وApple Health تكون معطّلة افتراضيًا ولا تُشارَك إلا مع خادمك الخاص."
        ],
        "note": "يحتاج البحث على الويب وتوليد الصور وأوضاع البحث إلى المنسّق الاختياري أو إلى خادم بإمكانات مماثلة؛ أما خادم Ollama البسيط فيقدّم دردشة عادية."
      },
      "privacy": {
        "id": "privacy",
        "title": "تدفق البيانات والخصوصية",
        "content": [
          "**تقول سياسة الخصوصية، التي حُدّثت آخر مرة في 2 يوليو 2026، إن Phantasm لا يملك حسابات ولا تحليلات ولا قياسًا عن بُعد ولا خوادم للمطوّر في المنتصف.** تذهب الرسائل إلى عنوان الخادم الذي تدخله فقط، وتُخزَّن المحادثات على الهاتف، ويعمل تحويل الكلام إلى نص على الجهاز. وتعرض بطاقة الخصوصية في App Store عبارة «Data Not Collected» (لا تُجمع بيانات).",
          "وجهة بياناتك تتوقف على خادمك. يقول الموقع إن المحادثات لا تغادر شبكتك أبدًا، لكن التطبيق يدعم أيضًا ملفات تعريف VPN والأنفاق، فيرسل الإعداد البعيد حركة البيانات عبر المسار الذي تبنيه بنفسك. وتشارك أدوات الجهاز الاختيارية بيانات الموقع أو التقويم أو الصحة مع خادمك فقط حين تشغّلها لدردشة معيّنة. ويُقدَّم الموقع عبر Cloudflare التي تعالج بيانات الطلبات المعتادة، وتقول السياسة إنه لا يضع ملفات تعريف ارتباط."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "هذه إفادات من المطوّر وليست نتائج تدقيق، ولم تفحص PromptQuorum حركة الشبكة الخاصة بالتطبيق. وعند تشغيل البحث على الويب في المنسّق يستعلم الخادم من Brave Search بحسب README، لذا تغادر تلك الاستعلامات شبكتك."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**مستخدمو Ollama أو vLLM أو llama.cpp** الذين يريدون واجهة iPhone أصلية للنماذج التي تعمل في المنزل أصلًا.",
          "**المهتمون بالخصوصية** الذين يريدون تطبيقًا بلا حساب وبلا تحليلات كما يصفه المطوّر.",
          "**هواة المختبرات المنزلية** الذين يرتاحون إلى تشغيل Docker Compose للبحث على الويب وتوليد الصور."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**الأداء.** لم تُختبر السرعة ولا استهلاك البطارية ولا السلوك في الدردشات الطويلة جدًا.",
          "**المنسّق.** لم يُشغَّل البحث على الويب ولا توليد الصور عبر ComfyUI ولا حلقة الأدوات؛ ويصف README المشروع بأنه إصدار MVP.",
          "**الترخيص.** يصف الموقع التطبيق والخادم بأنهما مفتوحا المصدر، لكن المستودع لم يُظهر ملف ترخيص في 13 نوفمبر 2026، فلا تُذكر شروط إعادة الاستخدام.",
          "**أجهزة أخرى.** تعرض الصفحة متطلبات Mac وApple Vision لكنها تقول إن التطبيق مصمم لـ iPhone؛ ولا يُوصَف دعم iPad وMac.",
          "**أحدث بناء.** يحتوي المستودع على رفع لرقم البناء إلى الإصدار 1.3 بتاريخ 16 أغسطس 2026 لم تعرضه صفحة App Store في 13 نوفمبر 2026."
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
            "التطبيق": "[LM Mini](/ar/power-local-llm/lm-mini-review)",
            "المنصات": "iPhone وiPad وMac بحسب الصفحة",
            "السعر / الترخيص": "مجاني + مشتريات / مغلق المصدر",
            "الفرق الرئيسي": "يقدّم أيضًا وصولًا عن بُعد وواجهات سحابية اختيارية"
          },
          {
            "التطبيق": "[Enchanted](/ar/power-local-llm/enchanted-review)",
            "المنصات": "iPhone وMac",
            "السعر / الترخيص": "مجاني / Apache 2.0",
            "الفرق الرئيسي": "عميل Ollama يحتاج إلى خادم Ollama منفصل"
          },
          {
            "التطبيق": "[Reins](/ar/power-local-llm/reins-review)",
            "المنصات": "iPhone وiPad وMac بحسب الصفحة",
            "السعر / الترخيص": "مجاني + Pro / مغلق المصدر (v2)",
            "الفرق الرئيسي": "يتصل بخادمك ويشغّل أيضًا نماذج MLX على الجهاز"
          }
        ],
        "note": "تحقق من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته قبل الاختيار."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل يعمل Phantasm دون خادم؟",
            "a": "لا. تقول صفحة App Store إنه يتطلب خادمًا متوافقًا مع OpenAI توفّره بنفسك، مثل Ollama على جهازك؛ وبحسب سياسة الخصوصية لا يعمل على الهاتف سوى تحويل الكلام إلى نص."
          },
          {
            "q": "هل يمكنني استخدام Phantasm خارج المنزل؟",
            "a": "يقبل التطبيق أي عنوان يمكن الوصول إليه، وتذكر الصفحة ملفات تعريف VPN والأنفاق، لكن المصادر لا تصف خدمة وصول عن بُعد مدمجة، ويدرج README خدمة ترحيل مُدارة ضمن البنود المؤجلة."
          },
          {
            "q": "ما النماذج التي يدعمها Phantasm؟",
            "a": "أي نموذج يقدّمه خادمك، لأن التطبيق لا يضم أي نموذج. ويتوقف إدخال الصور وعرض الاستدلال وتوليد الصور أو الصوت أو الفيديو على ما يوفّره خادمك."
          },
          {
            "q": "هل يمكنني استخدام Phantasm مع Siri؟",
            "a": "تقول الصفحة إنه يمكنك سؤال Phantasm عبر Siri والاختصارات؛ ولا يُوصَف مدى عمق هذا التكامل."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "Phantasm مشروع فتيّ بإيداعات (commits) حديثة يمنح iPhone طريقة مجانية وبلا حساب للوصول إلى خادم Ollama أو vLLM أو llama.cpp في المنزل، وتعلن سياسة الخصوصية أنه لا يجمع بيانات. في المقابل هو عميل فقط، ويحتاج إلى خادم تشغّله بنفسك، ولم يُظهر مستودعه ملف ترخيص في 13 نوفمبر 2026 مع أن الموقع يصفه بأنه مفتوح المصدر، ولم يكن أحدث بناء في المستودع على App Store عند التحقق. يناسب من يستضيفون النماذج أصلًا ويريدون واجهة أصلية؛ ومن يحتاج إلى ضمانات خصوصية مدقَّقة فعليه أن يقرأ السياسة بوصفها إفادة لا دليلًا."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[Phantasm على App Store](https://apps.apple.com/us/app/phantasm/id6785720059) — الوصف وسجل الإصدارات والمتطلبات وبطاقة الخصوصية، اطُّلع عليها في 13 نوفمبر 2026.",
          "[موقع Phantasm](https://getphantasm.com) — قائمة الميزات وخطوات الإعداد، اطُّلع عليه في 13 نوفمبر 2026.",
          "[سياسة خصوصية Phantasm](https://getphantasm.com/privacy.html) — تدفق البيانات والتخزين والتحويل الصوتي على الجهاز، حُدّثت آخر مرة في 2 يوليو 2026.",
          "[صفحة دعم Phantasm](https://getphantasm.com/support.html) — الإعداد ومعلومات التواصل، اطُّلع عليها في 13 نوفمبر 2026.",
          "[Phantasm على GitHub](https://github.com/benthecarman/phantasm) — README والإيداعات والوسوم وقائمة الملفات، اطُّلع عليها في 13 نوفمبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة Reins](/ar/power-local-llm/reins-review) — تطبيق دردشة لـ iPhone وiPad لخادم Ollama أو LM Studio الخاص بك ويمكنه أيضًا تشغيل نماذج MLX.",
          "[مراجعة Enchanted](/ar/power-local-llm/enchanted-review) — عميل Ollama مجاني بترخيص Apache 2.0 لـ iPhone وMac.",
          "[مراجعة LM Mini](/ar/power-local-llm/lm-mini-review) — تطبيق دردشة لـ iPhone وiPad بنماذج على الجهاز واتصال بخادمك الخاص.",
          "[أفضل تطبيقات LLM المحلية لـ iPhone](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — ملخص تطبيقات iPhone الذي تنتمي إليه هذه المراجعة.",
          "[دليل برامج LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلي."
        ]
      }
    }
  },
  zh: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-13",
    "dateModified": "2026-11-13",
    "next_refresh_due": "2027-05-13",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/phantasm-review-hero-zh.webp",
    "title": "Phantasm 评测：面向 iPhone 的自托管 AI 聊天应用",
    "seoTitle": "Phantasm 评测：iPhone 自托管 AI 聊天应用",
    "intro": "Phantasm 是一款免费的 iPhone 聊天应用，开发者署名为 Benjamin Carman，可连接你自己运行的 AI 后端（如 Ollama、vLLM 或 llama.cpp），无需账号。它不在手机上运行模型：应用只是客户端，可选的配套服务器负责补充网页搜索和图像生成。本评测基于 [App Store 页面](https://apps.apple.com/us/app/phantasm/id6785720059)、[官方网站](https://getphantasm.com)、[隐私政策](https://getphantasm.com/privacy.html)和 [GitHub 仓库](https://github.com/benthecarman/phantasm)，查证日期为 2026 年 11 月 13 日。PromptQuorum 没有安装或运行过它。",
    "metaDescription": "Phantasm 评测：连接自建 Ollama、vLLM 或 llama.cpp 服务器的免费 iPhone 聊天应用，开发者称无账号、无遥测。尚未实测。",
    "twitterDescription": "Phantasm 评测：连接自建 Ollama、vLLM 或 llama.cpp 服务器的免费 iPhone 聊天客户端，无需账号。来源能证实什么，不能证实什么。",
    "audience": "在家运行 Ollama、vLLM 或 llama.cpp 的 iPhone 用户，想了解 Phantasm 的功能、费用，以及来源尚未证实的说法。",
    "readTime": "阅读约6分钟",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Phantasm 评测",
    "targetKeywords": [
      "phantasm 评测",
      "phantasm ios 应用",
      "ollama 客户端 iphone",
      "自托管 ai 聊天 iphone",
      "私有 ai 聊天 iphone",
      "openai 兼容 ios 客户端",
      "llama.cpp iphone 应用"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "Mac"
    ],
    "leadAnswerBlock": "**Phantasm（App Store 版本 1.2，2026 年 7 月 25 日发布）是一款免费的 iPhone 聊天应用，连接你自己运行的 OpenAI 兼容 AI 服务器，因此模型运行在你的硬件上，而不是手机上。** 开发者表示没有账号、分析和遥测；本文所有说法均来自 App Store 页面、官方网站、隐私政策和 GitHub 仓库，PromptQuorum 没有测试过该应用。",
    "quickAnswerTop": {
      "zh": {
        "question": "Phantasm 会在 iPhone 上运行 AI 模型吗？",
        "answer": "不会。据开发者说明，应用只是客户端：它把你的消息发送到你填写的后端地址（通常是你自己网络中的一台机器），只有语音转写在设备上运行。",
        "bullets": [
          "任何 OpenAI 兼容服务器都可使用，包括未加任何扩展的 Ollama 实例。",
          "可选的编排器服务器可增加网页搜索、图像生成和研究模式。",
          "多个后端配置文件覆盖家庭网络、VPN 或隧道方案。",
          "可以向聊天附加照片和文件，语音输入在设备上运行。"
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
        "label": "Phantasm 是什么？",
        "anchor": "what-is-phantasm"
      },
      {
        "label": "获取方式",
        "anchor": "get-it"
      },
      {
        "label": "运行要求",
        "anchor": "requirements"
      },
      {
        "label": "上手步骤",
        "anchor": "getting-started"
      },
      {
        "label": "来源证实的功能",
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
        "label": "我们未能核实的内容",
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
            "text": "Phantasm 是一款 iPhone 聊天客户端，面向你自己托管的 Ollama、vLLM、llama.cpp 及其他 OpenAI 兼容服务器。"
          },
          {
            "type": "plain-terms",
            "text": "你填入运行模型的那台电脑的地址和令牌，应用就会与它对话、附加照片和文件；配合可选服务器，还能搜索网页。"
          }
        ],
        "items": [
          "维护情况：App Store 版本 1.2 的日期为 2026 年 7 月 25 日，仓库最近一次提交（构建号升至 1.3）为 2026 年 8 月 16 日；截至 2026 年 11 月 13 日，App Store 尚未列出 1.3。",
          "费用：免费下载；仓库 README 将账号、计费和云同步称为推迟的高级层。",
          "平台：iOS 18 及以上的 iPhone；页面也显示了 Mac 和 Apple Vision 的要求，但称该应用是为 iPhone 设计的。",
          "源代码：官网和隐私政策称应用与服务器为开源，但查证时仓库中未见许可证文件。",
          "开发方：App Store 上的销售方是 Benjamin Carman，首个版本发布于 2026 年 7 月 8 日。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本评测基于 App Store 页面、官方网站、隐私政策、支持页面和 GitHub 仓库，查证日期为 2026 年 11 月 13 日。PromptQuorum 没有安装、运行或测评该应用及编排器，因此速度、回答质量和部署难度均未评估。"
          }
        ]
      },
      "overview": {
        "id": "what-is-phantasm",
        "title": "Phantasm 是什么？",
        "content": [
          "**Phantasm 是用于连接你自己托管的 AI 模型的 iOS 聊天客户端，而不是内置模型的应用。** App Store 将其列为销售方 Benjamin Carman 的“Phantasm”，首次出现于 2026 年 7 月 8 日；官网称它是一款快速、可自托管的 iOS AI 聊天应用，与你掌控的后端对话。",
          "项目分为两部分：接受服务器地址和令牌的 SwiftUI 应用，以及可选的 Rust 服务器“编排器”，它与 Ollama、ComfyUI 运行在一起，增加网页搜索、图像生成和工具循环。据 README，指向未加扩展的 Ollama 实例时，应用会退回到普通聊天。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "content": [
          "**Phantasm 是 iPhone 上的免费 App Store 下载项；来源中没有提到 Android、Windows 或网页版本。**"
        ],
        "columns": [
          "选项",
          "获取方式"
        ],
        "rows": [
          {
            "选项": "iPhone",
            "获取方式": "[App Store 上的 Phantasm](https://apps.apple.com/us/app/phantasm/id6785720059)，免费下载"
          },
          {
            "选项": "官方网站",
            "获取方式": "[getphantasm.com](https://getphantasm.com)"
          },
          {
            "选项": "隐私政策",
            "获取方式": "[getphantasm.com/privacy.html](https://getphantasm.com/privacy.html)"
          },
          {
            "选项": "后端服务器",
            "获取方式": "[GitHub 上的编排器](https://github.com/benthecarman/phantasm)，可选，用 docker compose 启动"
          },
          {
            "选项": "源代码",
            "获取方式": "[github.com/benthecarman/phantasm](https://github.com/benthecarman/phantasm)，无许可证文件"
          }
        ],
        "note": "评测版本：1.2，据 App Store 发布于 2026 年 7 月 25 日；应用大小为 19.1 MB。应用不内置模型，因此你还需要一台可对话的服务器。页面显示价格为免费，未提到应用内购买。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "运行要求",
        "content": [
          "**App Store 将 iOS 18.0 列为最低要求，而且没有你自己提供的服务器，这款应用就无法聊天。**"
        ],
        "columns": [
          "项目",
          "来源的说法"
        ],
        "rows": [
          {
            "项目": "操作系统",
            "来源的说法": "iPhone 上的 iOS 18.0 或更高版本"
          },
          {
            "项目": "后端",
            "来源的说法": "你自己提供的 OpenAI 兼容服务器（如 Ollama、vLLM 或 llama.cpp），手机可访问"
          },
          {
            "项目": "连接",
            "来源的说法": "服务器地址和令牌；令牌保存在 iOS 钥匙串中"
          },
          {
            "项目": "编排器（可选）",
            "来源的说法": "Docker Compose；增加 Brave 网页搜索、ComfyUI 图像生成和工具循环"
          },
          {
            "项目": "账号",
            "来源的说法": "无；开发者表示没有账号"
          }
        ],
        "note": "来源没有给出最低的 iPhone 机型或内存要求；所需硬件取决于你自己的服务器运行的模型。从家庭网络之外访问服务器需要你自己解决：README 称，你使用的是设备已经可以访问的服务器地址。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "上手步骤",
        "content": [
          "**以下步骤依据开发者自己的描述；PromptQuorum 没有执行过。**"
        ],
        "numberedItems": [
          {
            "title": "运行后端",
            "whyItMatters": "在你自己的机器上启动 Ollama 或其他 OpenAI 兼容服务器；如需网页搜索和图像生成，可用 docker compose 添加编排器。"
          },
          {
            "title": "安装应用",
            "whyItMatters": "从 App Store 获取 Phantasm；无需账号。"
          },
          {
            "title": "填写地址和令牌",
            "whyItMatters": "在设置中填入服务器地址和令牌；应用会自行发现可用的模型和功能。"
          },
          {
            "title": "开始聊天",
            "whyItMatters": "选择模型，附加照片或文件，并按聊天分别开启或关闭网页访问和图像生成。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "来源证实的功能",
        "content": [
          "**以下每一项都来自 App Store 描述、官网或仓库；均未经独立测试。**"
        ],
        "items": [
          "**灵活的后端。** 任何 OpenAI 兼容端点都可使用，可保存多个配置文件以适应家庭网络、VPN 或隧道方案，并在运行时检测功能。",
          "**聊天显示。** 流式回答、Markdown、带语法高亮和复制按钮的代码、图表、行内数学公式，以及选择思考型模型时显示模型的推理过程；1.2 版新增令牌和速度估算。",
          "**媒体。** 为视觉模型提供照片和文件附件、在聊天中内嵌显示生成的图像，自 1.2 版起还支持通过兼容服务器生成音频和视频。",
          "**语音与系统集成。** 设备端语音输入、朗读回复、Siri 和快捷指令，以及应用转入后台后仍可继续的长时间生成。",
          "**工具。** 按聊天设置的网页访问和图像生成开关，另有位置、日历和 Apple 健康的可选工具，默认关闭，且只与你自己的后端共享。"
        ],
        "note": "网页搜索、图像生成和研究模式需要可选的编排器，或具备相应功能的后端；未加扩展的 Ollama 服务器只提供普通聊天。"
      },
      "privacy": {
        "id": "privacy",
        "title": "数据流向与隐私",
        "content": [
          "**隐私政策（最后更新于 2026 年 7 月 2 日）称，Phantasm 没有账号、分析、遥测，也没有开发者的中转服务器。** 消息只发送到你填写的后端地址，对话保存在手机上，语音转写在设备上运行。App Store 隐私标签显示“Data Not Collected”（不收集数据）。",
          "数据走向取决于你的后端。官网称对话不会离开你的网络，但应用也支持 VPN 和隧道配置，因此远程方案会让流量经过你自己搭建的路径。可选的设备工具只有在你为某个聊天开启后，才会把位置、日历或健康数据共享给你的后端。官网通过 Cloudflare 提供服务，Cloudflare 会处理常规请求数据，政策称网站不设置 Cookie。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "这些是开发者的声明，而非审计结果，PromptQuorum 没有检查过应用的网络流量。据 README，开启编排器的网页搜索后，服务器会向 Brave Search 发起查询，这些搜索请求会离开你的网络。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合哪些人",
        "items": [
          "**Ollama、vLLM 或 llama.cpp 用户**，想为家中已在运行的模型配一个原生 iPhone 前端。",
          "**注重隐私的用户**，想要如开发者所述无账号、无分析的应用。",
          "**家庭实验室爱好者**，能自己运行 Docker Compose 来实现网页搜索和图像生成。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们未能核实的内容",
        "items": [
          "**性能。** 速度、耗电以及在超长聊天中的表现均未测试。",
          "**编排器。** 网页搜索、ComfyUI 图像生成和工具循环均未运行；README 称该项目为 MVP 构建。",
          "**许可证。** 官网称应用与服务器为开源，但截至 2026 年 11 月 13 日仓库中未见许可证文件，因此未说明复用条款。",
          "**其他设备。** 页面显示了 Mac 和 Apple Vision 的要求，却称应用是为 iPhone 设计的；未描述对 iPad 和 Mac 的支持。",
          "**最新构建。** 仓库中有一个 2026 年 8 月 16 日的 1.3 版构建号提升，而 App Store 页面在 2026 年 11 月 13 日并未显示。"
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
            "应用": "[LM Mini](/zh/power-local-llm/lm-mini-review)",
            "平台": "页面显示 iPhone、iPad、Mac",
            "价格 / 许可证": "免费 + 内购 / 闭源",
            "主要区别": "还提供远程访问和可选的云端 API"
          },
          {
            "应用": "[Enchanted](/zh/power-local-llm/enchanted-review)",
            "平台": "iPhone、Mac",
            "价格 / 许可证": "免费 / Apache 2.0",
            "主要区别": "需要另行搭建 Ollama 服务器的 Ollama 客户端"
          },
          {
            "应用": "[Reins](/zh/power-local-llm/reins-review)",
            "平台": "页面显示 iPhone、iPad、Mac",
            "价格 / 许可证": "免费 + Pro / 闭源（v2）",
            "主要区别": "连接你的服务器，也可在设备上运行 MLX 模型"
          }
        ],
        "note": "选择之前，请在各应用自己的页面上确认其当前价格、许可证和平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "没有服务器，Phantasm 能用吗？",
            "a": "不能。App Store 页面称它需要你自己提供的 OpenAI 兼容服务器，例如你自己机器上的 Ollama；据隐私政策，只有语音转写在手机上运行。"
          },
          {
            "q": "出门在外还能用 Phantasm 吗？",
            "a": "应用接受任何可访问的地址，页面也提到了 VPN 和隧道配置，但来源没有描述内置的远程访问服务，README 将托管中继列为推迟项。"
          },
          {
            "q": "Phantasm 支持哪些模型？",
            "a": "你的后端提供的任何模型，因为应用本身不内置模型。图像输入、推理显示以及图像、音频或视频生成，取决于你的后端提供什么。"
          },
          {
            "q": "能通过 Siri 使用 Phantasm 吗？",
            "a": "页面称可以通过 Siri 和快捷指令向 Phantasm 提问；这种集成有多深，未作说明。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "Phantasm 是一个近期仍有提交的年轻项目，为 iPhone 提供了免费、无账号地连接家中 Ollama、vLLM 或 llama.cpp 服务器的方式，其隐私政策声明不收集数据。另一方面，它只是客户端，需要你自己运行服务器，官网称其开源，但截至 2026 年 11 月 13 日仓库中未见许可证文件，且查证时仓库中最新的构建并未上架 App Store。它适合已经托管模型并想要原生前端的人；需要经过审计的隐私保证的人，应把该政策视为声明而非证明。"
      },
      "sources": {
        "id": "sources",
        "title": "资料来源",
        "items": [
          "[App Store 上的 Phantasm](https://apps.apple.com/us/app/phantasm/id6785720059) — 描述、版本历史、要求和隐私标签，查证于 2026 年 11 月 13 日。",
          "[Phantasm 官方网站](https://getphantasm.com) — 功能列表和设置步骤，查证于 2026 年 11 月 13 日。",
          "[Phantasm 隐私政策](https://getphantasm.com/privacy.html) — 数据流向、存储和设备端转写，最后更新于 2026 年 7 月 2 日。",
          "[Phantasm 支持页面](https://getphantasm.com/support.html) — 设置和联系方式，查证于 2026 年 11 月 13 日。",
          "[GitHub 上的 Phantasm](https://github.com/benthecarman/phantasm) — README、提交、标签和文件列表，查证于 2026 年 11 月 13 日。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "相关阅读",
        "items": [
          "[Reins 评测](/zh/power-local-llm/reins-review) — 面向你自己的 Ollama 或 LM Studio 服务器的 iPhone 和 iPad 聊天应用，也可运行 MLX 模型。",
          "[Enchanted 评测](/zh/power-local-llm/enchanted-review) — 适用于 iPhone 和 Mac 的免费 Ollama 客户端，采用 Apache 2.0 许可证。",
          "[LM Mini 评测](/zh/power-local-llm/lm-mini-review) — 带有设备端模型并可连接你自己服务器的 iPhone 和 iPad 聊天应用。",
          "[iPhone 最佳本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 本评测所属的 iPhone 应用汇总。",
          "[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。"
        ]
      }
    }
  },
  ko: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-13",
    "dateModified": "2026-11-13",
    "next_refresh_due": "2027-05-13",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/phantasm-review-hero-ko.webp",
    "title": "Phantasm 리뷰: iPhone용 셀프호스팅 AI 채팅 앱",
    "seoTitle": "Phantasm 리뷰: iPhone용 셀프호스팅 AI 채팅 앱",
    "intro": "Phantasm은 개발자 Benjamin Carman 명의로 등록된 무료 iPhone 채팅 앱으로, Ollama, vLLM, llama.cpp처럼 직접 운영하는 AI 백엔드에 연결하며 계정이 필요 없습니다. 모델을 휴대폰에서 실행하지 않습니다. 앱은 클라이언트 역할만 하고, 선택 사항인 보조 서버가 웹 검색과 이미지 생성을 더합니다. 이 리뷰는 2026년 11월 13일에 확인한 [App Store 페이지](https://apps.apple.com/us/app/phantasm/id6785720059), [공식 웹사이트](https://getphantasm.com), [개인정보 처리방침](https://getphantasm.com/privacy.html), [GitHub 저장소](https://github.com/benthecarman/phantasm)를 바탕으로 합니다. PromptQuorum은 앱을 설치하거나 실행해 보지 않았습니다.",
    "metaDescription": "Phantasm 리뷰: 직접 운영하는 Ollama, vLLM, llama.cpp 서버용 무료 iPhone 채팅 앱. 개발자에 따르면 계정과 텔레메트리가 없습니다. 직접 테스트하지 않았습니다.",
    "twitterDescription": "Phantasm 리뷰: 직접 운영하는 Ollama, vLLM, llama.cpp 서버에 연결하는 무료 iPhone 채팅 클라이언트. 계정이 필요 없습니다. 출처가 확인하는 것과 확인하지 못한 것.",
    "audience": "집에서 Ollama, vLLM, llama.cpp를 운영하며 Phantasm이 무엇을 하는지, 비용은 얼마인지, 출처가 확인하지 못한 주장은 무엇인지 알고 싶은 iPhone 사용자.",
    "readTime": "6분 읽기",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Phantasm 리뷰",
    "targetKeywords": [
      "phantasm 리뷰",
      "phantasm ios 앱",
      "ollama 클라이언트 iphone",
      "셀프호스팅 ai 채팅 iphone",
      "프라이빗 ai 채팅 iphone",
      "openai 호환 ios 클라이언트",
      "llama.cpp iphone 앱"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "iPhone",
      "Mac"
    ],
    "leadAnswerBlock": "**Phantasm(App Store 버전 1.2, 2026년 7월 25일 출시)은 직접 운영하는 OpenAI 호환 AI 서버와 대화하는 무료 iPhone 채팅 앱이며, 모델은 휴대폰이 아니라 사용자의 하드웨어에서 실행됩니다.** 개발자는 계정, 분석, 텔레메트리가 없다고 밝히고 있으며, 이 글의 모든 내용은 App Store 페이지, 공식 웹사이트, 개인정보 처리방침, GitHub 저장소에서 가져왔습니다. PromptQuorum은 앱을 테스트하지 않았습니다.",
    "quickAnswerTop": {
      "ko": {
        "question": "Phantasm은 iPhone에서 AI 모델을 실행합니까?",
        "answer": "아닙니다. 개발자에 따르면 앱은 클라이언트입니다. 입력한 백엔드 URL(보통 자신의 네트워크에 있는 컴퓨터)로 메시지를 보내며, 기기에서 실행되는 것은 음성 받아쓰기뿐입니다.",
        "bullets": [
          "OpenAI 호환 서버라면 모두 사용할 수 있으며, 기본 Ollama 인스턴스도 가능합니다.",
          "선택 사항인 오케스트레이터 서버가 웹 검색, 이미지 생성, 리서치 모드를 더합니다.",
          "여러 백엔드 프로필로 홈 네트워크, VPN, 터널 구성을 지원합니다.",
          "채팅에 사진과 파일을 첨부할 수 있고, 음성 입력은 기기에서 실행됩니다."
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
        "label": "Phantasm이란?",
        "anchor": "what-is-phantasm"
      },
      {
        "label": "받는 방법",
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
        "label": "결론",
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
            "text": "Phantasm은 직접 호스팅하는 Ollama, vLLM, llama.cpp 등 OpenAI 호환 서버용 iPhone 채팅 클라이언트입니다."
          },
          {
            "type": "plain-terms",
            "text": "모델을 실행하는 컴퓨터의 주소와 토큰을 입력하면 앱이 그 컴퓨터와 대화하고, 사진과 파일을 첨부하며, 선택 사항인 서버를 쓰면 웹도 검색합니다."
          }
        ],
        "items": [
          "유지 관리: App Store 버전 1.2는 2026년 7월 25일자이고, 저장소의 마지막 커밋(1.3으로의 빌드 번호 증가)은 2026년 8월 16일자입니다. App Store는 2026년 11월 13일에 1.3을 표시하지 않았습니다.",
          "비용: 무료로 내려받을 수 있으며, 저장소 README는 계정, 결제, 클라우드 동기화를 보류된 프리미엄 계층으로 설명합니다.",
          "플랫폼: iOS 18 이상의 iPhone입니다. 페이지에는 Mac과 Apple Vision 요구 사항도 표시되지만 iPhone용으로 설계된 앱이라고 되어 있습니다.",
          "소스: 공식 웹사이트와 개인정보 처리방침은 앱과 서버를 오픈소스라고 하지만, 확인 시점에 저장소에서 라이선스 파일이 보이지 않았습니다.",
          "제작자: App Store 판매자는 Benjamin Carman이며, 첫 출시는 2026년 7월 8일입니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이 리뷰는 2026년 11월 13일에 확인한 App Store 페이지, 공식 웹사이트, 개인정보 처리방침, 지원 페이지, GitHub 저장소를 바탕으로 합니다. PromptQuorum은 앱과 오케스트레이터를 설치, 실행, 벤치마크하지 않았으므로 속도, 답변 품질, 설정 난이도는 평가하지 않았습니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-phantasm",
        "title": "Phantasm이란?",
        "content": [
          "**Phantasm은 직접 호스팅하는 AI 모델을 위한 iOS 채팅 클라이언트이며, 모델을 담고 있는 앱이 아닙니다.** App Store에는 판매자 Benjamin Carman의 \"Phantasm\"으로 등록되어 있고 2026년 7월 8일에 처음 나타났으며, 공식 웹사이트는 사용자가 제어하는 백엔드와 대화하는 빠르고 셀프호스팅 가능한 iOS용 AI 채팅 앱이라고 소개합니다.",
          "프로젝트는 두 부분으로 이루어져 있습니다. 서버 URL과 토큰을 받는 SwiftUI 앱, 그리고 Ollama·ComfyUI 옆에서 실행되며 웹 검색, 이미지 생성, 도구 루프를 더하는 선택 사항인 Rust 서버(오케스트레이터)입니다. README에 따르면 기본 Ollama 인스턴스를 가리키면 앱은 일반 채팅으로 돌아갑니다."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "받는 방법",
        "content": [
          "**Phantasm은 iPhone용 App Store 무료 다운로드이며, 출처에는 Android, Windows, 웹 버전이 언급되지 않습니다.**"
        ],
        "columns": [
          "옵션",
          "받는 방법"
        ],
        "rows": [
          {
            "옵션": "iPhone",
            "받는 방법": "[App Store의 Phantasm](https://apps.apple.com/us/app/phantasm/id6785720059), 무료 다운로드"
          },
          {
            "옵션": "웹사이트",
            "받는 방법": "[getphantasm.com](https://getphantasm.com)"
          },
          {
            "옵션": "개인정보 처리방침",
            "받는 방법": "[getphantasm.com/privacy.html](https://getphantasm.com/privacy.html)"
          },
          {
            "옵션": "백엔드 서버",
            "받는 방법": "[GitHub의 오케스트레이터](https://github.com/benthecarman/phantasm), 선택 사항, docker compose로 시작"
          },
          {
            "옵션": "소스 코드",
            "받는 방법": "[github.com/benthecarman/phantasm](https://github.com/benthecarman/phantasm), 라이선스 파일 없음"
          }
        ],
        "note": "확인한 버전: 1.2, App Store 기준 2026년 7월 25일 출시이며 앱 크기는 19.1 MB입니다. 앱에는 모델이 내장되어 있지 않으므로 대화할 서버가 따로 필요합니다. 페이지에는 가격이 무료로 표시되며 앱 내 구입은 언급되어 있지 않습니다."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "요구 사항",
        "content": [
          "**App Store는 최소 요구 사항으로 iOS 18.0을 표시하며, 직접 마련한 서버가 없으면 앱으로 대화할 수 없습니다.**"
        ],
        "columns": [
          "항목",
          "출처의 설명"
        ],
        "rows": [
          {
            "항목": "운영체제",
            "출처의 설명": "iPhone의 iOS 18.0 이상"
          },
          {
            "항목": "백엔드",
            "출처의 설명": "직접 마련하는 OpenAI 호환 서버(Ollama, vLLM, llama.cpp 등)로, 휴대폰에서 접속할 수 있어야 함"
          },
          {
            "항목": "연결",
            "출처의 설명": "서버 URL과 토큰이며, 토큰은 iOS 키체인에 저장됨"
          },
          {
            "항목": "오케스트레이터(선택)",
            "출처의 설명": "Docker Compose로 실행하며 Brave 웹 검색, ComfyUI 이미지 생성, 도구 루프를 더함"
          },
          {
            "항목": "계정",
            "출처의 설명": "없음. 개발자는 계정이 없다고 밝힘"
          }
        ],
        "note": "출처에는 최소 iPhone 기종이나 메모리가 나와 있지 않으며, 필요한 하드웨어는 자신의 서버에서 실행하는 모델에 따라 달라집니다. 집 네트워크 밖에서 서버에 접속하는 일은 직접 해결해야 하며, README는 기기에서 이미 접속할 수 있는 서버 URL을 사용한다고 설명합니다."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "시작하는 방법",
        "content": [
          "**아래 단계는 개발자 본인의 설명을 따른 것이며, PromptQuorum이 직접 실행해 보지는 않았습니다.**"
        ],
        "numberedItems": [
          {
            "title": "백엔드 실행하기",
            "whyItMatters": "자신의 컴퓨터에서 Ollama 또는 다른 OpenAI 호환 서버를 시작합니다. 웹 검색과 이미지 생성이 필요하면 docker compose로 오케스트레이터를 추가합니다."
          },
          {
            "title": "앱 설치하기",
            "whyItMatters": "App Store에서 Phantasm을 받습니다. 계정은 필요 없습니다."
          },
          {
            "title": "URL과 토큰 입력하기",
            "whyItMatters": "설정에 서버 주소와 토큰을 입력하면 앱이 사용 가능한 모델과 기능을 스스로 찾습니다."
          },
          {
            "title": "채팅하기",
            "whyItMatters": "모델을 고르고 사진이나 파일을 첨부하며, 채팅마다 웹 접근과 이미지 생성을 켜거나 끕니다."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "출처가 확인한 기능",
        "content": [
          "**아래 항목은 모두 App Store 설명, 공식 웹사이트, 저장소에서 가져온 것이며 독자적으로 테스트하지 않았습니다.**"
        ],
        "items": [
          "**유연한 백엔드.** OpenAI 호환 엔드포인트라면 모두 쓸 수 있으며, 홈 네트워크, VPN, 터널 구성을 위한 여러 프로필을 저장하고 실행 중에 기능을 감지합니다.",
          "**채팅 표시.** 스트리밍 답변, 마크다운, 구문 강조와 복사 버튼이 있는 코드, 차트, 문장 내 수식을 지원하고, 추론 모델을 선택하면 모델의 추론 과정을 보여 줍니다. 버전 1.2에서 토큰 수와 속도 추정치가 추가되었습니다.",
          "**미디어.** 비전 모델용 사진·파일 첨부, 채팅 안에 표시되는 생성 이미지, 버전 1.2부터는 호환 서버에서의 오디오·동영상 생성을 지원합니다.",
          "**음성과 시스템 연동.** 기기에서 실행되는 음성 입력, 답변 읽어 주기, Siri와 단축어, 앱이 백그라운드로 갔다가 돌아와도 이어지는 긴 생성을 지원합니다.",
          "**도구.** 채팅별 웹 접근·이미지 생성 스위치와, 위치·캘린더·Apple Health용 선택 도구가 있으며, 이 도구들은 기본적으로 꺼져 있고 자신의 백엔드와만 공유됩니다."
        ],
        "note": "웹 검색, 이미지 생성, 리서치 모드에는 선택 사항인 오케스트레이터 또는 해당 기능을 갖춘 백엔드가 필요하며, 기본 Ollama 서버는 일반 채팅만 제공합니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "데이터 흐름과 개인정보",
        "content": [
          "**2026년 7월 2일에 마지막으로 갱신된 개인정보 처리방침은 Phantasm에 계정, 분석, 텔레메트리, 그리고 개발자의 중간 서버가 없다고 밝힙니다.** 메시지는 입력한 백엔드 URL로만 전송되고, 대화는 휴대폰에 저장되며, 음성 받아쓰기는 기기에서 실행됩니다. App Store 개인정보 보호 라벨에는 \"Data Not Collected\"(수집되는 데이터 없음)로 표시됩니다.",
          "데이터가 어디로 가는지는 백엔드에 달려 있습니다. 공식 웹사이트는 대화가 네트워크 밖으로 나가지 않는다고 하지만, 앱은 VPN과 터널 프로필도 지원하므로 원격 구성에서는 사용자가 만든 경로로 트래픽이 흐릅니다. 선택 사항인 기기 도구는 채팅별로 켰을 때만 위치, 캘린더, 건강 데이터를 자신의 백엔드와 공유합니다. 웹사이트는 Cloudflare를 통해 제공되며 Cloudflare는 일반적인 요청 데이터를 처리하고, 방침에 따르면 쿠키는 설정하지 않습니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이는 개발자의 선언이며 감사 결과가 아니고, PromptQuorum은 앱의 네트워크 트래픽을 검사하지 않았습니다. 오케스트레이터의 웹 검색을 켜면 README에 따라 서버가 Brave Search에 질의하므로, 그 검색어는 네트워크 밖으로 나갑니다."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "이런 분께 적합합니다",
        "items": [
          "**Ollama, vLLM, llama.cpp 사용자**로서 집에서 이미 실행 중인 모델용 네이티브 iPhone 프런트엔드를 원하는 분.",
          "**개인정보를 중시하는 사용자**로서 개발자의 설명대로 계정과 분석이 없는 앱을 원하는 분.",
          "**홈 랩 애호가**로서 웹 검색과 이미지 생성을 위해 Docker Compose를 직접 운영할 수 있는 분."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 내용",
        "items": [
          "**성능.** 속도, 배터리 사용량, 매우 긴 채팅에서의 동작은 테스트하지 않았습니다.",
          "**오케스트레이터.** 웹 검색, ComfyUI 이미지 생성, 도구 루프는 실행하지 않았으며, README는 프로젝트를 MVP 빌드라고 설명합니다.",
          "**라이선스.** 공식 웹사이트는 앱과 서버를 오픈소스라고 하지만 2026년 11월 13일 기준 저장소에 라이선스 파일이 보이지 않아 재사용 조건이 명시되어 있지 않습니다.",
          "**다른 기기.** 페이지에는 Mac과 Apple Vision 요구 사항이 표시되지만 iPhone용으로 설계된 앱이라고 되어 있으며, iPad와 Mac 지원은 설명되어 있지 않습니다.",
          "**최신 빌드.** 저장소에는 2026년 8월 16일자 버전 1.3 빌드 번호 증가가 있으나 App Store 페이지는 2026년 11월 13일에 이를 표시하지 않았습니다."
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
            "앱": "[LM Mini](/ko/power-local-llm/lm-mini-review)",
            "플랫폼": "페이지 기준 iPhone, iPad, Mac",
            "가격 / 라이선스": "무료 + 앱 내 구입 / 비공개 소스",
            "핵심 차이": "원격 접속과 선택적 클라우드 API도 제공"
          },
          {
            "앱": "[Enchanted](/ko/power-local-llm/enchanted-review)",
            "플랫폼": "iPhone, Mac",
            "가격 / 라이선스": "무료 / Apache 2.0",
            "핵심 차이": "별도의 Ollama 서버가 필요한 Ollama 클라이언트"
          },
          {
            "앱": "[Reins](/ko/power-local-llm/reins-review)",
            "플랫폼": "페이지 기준 iPhone, iPad, Mac",
            "가격 / 라이선스": "무료 + Pro / 비공개 소스(v2)",
            "핵심 차이": "자신의 서버에 연결하며 기기에서 MLX 모델도 실행"
          }
        ],
        "note": "선택하기 전에 각 앱의 현재 가격, 라이선스, 플랫폼을 해당 앱의 페이지에서 확인하십시오."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "Phantasm은 서버 없이 작동합니까?",
            "a": "아닙니다. App Store 페이지에 따르면 직접 마련하는 OpenAI 호환 서버(예: 자신의 컴퓨터에서 실행하는 Ollama)가 필요하며, 개인정보 처리방침에 따르면 휴대폰에서 실행되는 것은 음성 받아쓰기뿐입니다."
          },
          {
            "q": "집 밖에서도 Phantasm을 쓸 수 있습니까?",
            "a": "앱은 접속 가능한 URL이라면 모두 받아들이고 페이지에도 VPN과 터널 프로필이 언급되어 있지만, 출처에는 내장된 원격 접속 서비스에 대한 설명이 없으며 README는 관리형 릴레이를 보류 항목으로 둡니다."
          },
          {
            "q": "Phantasm은 어떤 모델을 지원합니까?",
            "a": "백엔드가 제공하는 모델이라면 무엇이든 가능하며, 앱 자체에는 모델이 들어 있지 않습니다. 이미지 입력, 추론 표시, 이미지·오디오·동영상 생성은 백엔드가 무엇을 제공하느냐에 따라 달라집니다."
          },
          {
            "q": "Phantasm을 Siri와 함께 쓸 수 있습니까?",
            "a": "페이지에 따르면 Siri와 단축어에서 Phantasm에 물어볼 수 있습니다. 이 연동이 얼마나 깊은지는 설명되어 있지 않습니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "결론",
        "content": "Phantasm은 최근에도 커밋이 이어지는 젊은 프로젝트로, iPhone에서 집의 Ollama, vLLM, llama.cpp 서버에 무료로 계정 없이 접속하는 방법을 제공하며 개인정보 처리방침은 데이터를 수집하지 않는다고 밝힙니다. 반면 클라이언트일 뿐이어서 직접 운영하는 서버가 필요하고, 공식 웹사이트는 오픈소스라고 하지만 2026년 11월 13일 기준 저장소에 라이선스 파일이 보이지 않았고, 확인 시점에 저장소의 최신 빌드는 App Store에 올라와 있지 않았습니다. 이미 모델을 호스팅하고 있고 네이티브 프런트엔드를 원하는 분께 적합합니다. 감사를 거친 개인정보 보장이 필요한 분은 방침을 증거가 아닌 선언으로 읽어야 합니다."
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[App Store의 Phantasm](https://apps.apple.com/us/app/phantasm/id6785720059) — 설명, 버전 기록, 요구 사항, 개인정보 보호 라벨. 2026년 11월 13일 확인.",
          "[Phantasm 공식 웹사이트](https://getphantasm.com) — 기능 목록과 설정 단계. 2026년 11월 13일 확인.",
          "[Phantasm 개인정보 처리방침](https://getphantasm.com/privacy.html) — 데이터 흐름, 저장, 기기 내 받아쓰기. 2026년 7월 2일 마지막 갱신.",
          "[Phantasm 지원 페이지](https://getphantasm.com/support.html) — 설정과 연락처. 2026년 11월 13일 확인.",
          "[GitHub의 Phantasm](https://github.com/benthecarman/phantasm) — README, 커밋, 태그, 파일 목록. 2026년 11월 13일 확인."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[Reins 리뷰](/ko/power-local-llm/reins-review) — 직접 운영하는 Ollama 또는 LM Studio 서버용 iPhone·iPad 채팅 앱으로, MLX 모델도 실행할 수 있습니다.",
          "[Enchanted 리뷰](/ko/power-local-llm/enchanted-review) — iPhone과 Mac용 무료 Ollama 클라이언트로, Apache 2.0 라이선스입니다.",
          "[LM Mini 리뷰](/ko/power-local-llm/lm-mini-review) — 기기 내 모델과 자신의 서버 연결을 지원하는 iPhone·iPad 채팅 앱입니다.",
          "[iPhone용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — 이 리뷰가 속한 iPhone 앱 모음 글입니다.",
          "[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그입니다."
        ]
      }
    }
  },
}
