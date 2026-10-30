// Reins Review: iPhone Chat App for Ollama and LM Studio
// Slug: reins-review
// Companion to: lm-mini-review, enchanted-review, pocketpal-ai-review
// Sources: the App Store listing (apps.apple.com/us/app/id6739738501, iTunes lookup API, per-storefront in-app prices), getreins.app,
// getreins.app/privacy (last updated 2026-09-20), getreins.app/terms and the GitHub repo ibrahimcetin/reins, all checked 2026-10-30 —
// no hands-on testing. Pro prices are per-storefront App Store prices, never converted.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-30",
    "dateModified": "2026-10-30",
    "next_refresh_due": "2027-04-30",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/reins-review-hero-en.webp",
    "title": "Reins Review: iPhone Chat App for Ollama and LM Studio",
    "seoTitle": "Reins Review: Ollama and LM Studio Chat App for iPhone",
    "intro": "Reins is a chat app for iPhone and iPad by the independent developer İbrahim Çetin that connects to your own Ollama, LM Studio or OpenAI-compatible server and, since version 2, can also run MLX models on the device. It is free to download, with paid Reins Pro plans. This review is based on the [App Store listing](https://apps.apple.com/app/id6739738501), the maker's [website](https://getreins.app), its privacy policy and its GitHub repository, checked on 30 October 2026; PromptQuorum has not tested the app hands-on.",
    "metaDescription": "Reins review: iPhone and iPad chat app for your Ollama or LM Studio server that also runs MLX models on the device. Free, Pro plans; untested.",
    "twitterDescription": "Reins review: a chat client for your own Ollama or LM Studio server, with on-device MLX models since v2. Free with Pro plans; what the sources confirm and what they do not.",
    "audience": "iPhone and iPad owners who run Ollama or LM Studio at home and want to know what Reins does, what it costs and which claims the sources leave unconfirmed.",
    "readTime": "6 min read",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Reins review",
    "targetKeywords": [
      "reins review",
      "reins ollama ios app",
      "ollama client iphone",
      "lm studio iphone app",
      "run ollama on iphone",
      "private ai chat iphone",
      "on-device mlx models iphone"
    ],
    "current_models_mentioned": [
      "Gemma",
      "Qwen",
      "Llama",
      "MiniCPM5",
      "LFM 2.5"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Apple silicon"
    ],
    "leadAnswerBlock": "**Reins (version 2.3.3, updated on 21 October 2026) is an iPhone and iPad chat app that talks to your own Ollama, LM Studio or OpenAI-compatible server and can also run MLX models on the device.** It is free to download and sells optional Reins Pro plans. The developer says it has no login and collects no data, and every statement here comes from the App Store listing, the maker's site and its policy documents.",
    "quickAnswerTop": {
      "en": {
        "question": "Does Reins need a server, or can it run models by itself?",
        "answer": "Both are possible, per the maker: you can connect to an Ollama, LM Studio or OpenAI-compatible server you run, or download MLX models and run them on the iPhone or iPad. The privacy policy says on-device prompts and answers are processed only on the device.",
        "bullets": [
          "Web search and tool use work without an API key, according to the maker.",
          "Each chat can have its own model, system prompt, temperature and context size.",
          "Images, PDFs, CSV and text files can be attached to a conversation.",
          "Chats can be branched, exported, imported or kept temporary."
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "Quick Answer",
        "anchor": "quick-answer"
      },
      {
        "label": "What Is Reins?",
        "anchor": "what-is-reins"
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
            "text": "Reins is an iPhone and iPad chat client for Ollama, LM Studio and other OpenAI-compatible servers that can also run MLX models directly on the device."
          },
          {
            "type": "plain-terms",
            "text": "You point the app at the computer that runs your models, or download a model onto the phone, and then chat, attach files and let the model search the web."
          }
        ],
        "items": [
          "Maintenance: version 2.3.3 was released on 21 October 2026 and the GitHub repository was last pushed on 14 October 2026, so no stale-project warning applies.",
          "Engines: your own Ollama, LM Studio or OpenAI-compatible server, Ollama Cloud, or MLX and Apple Foundation Models on the device.",
          "Cost: free download with monthly, yearly and lifetime Reins Pro plans.",
          "Source: closed since version 2; the public repository holds the code only up to version 1.3.4.",
          "Maker: an individual developer, with no company behind the app named in the sources."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "This review is based on the App Store listing, the maker's website, privacy policy, Terms of Use and GitHub repository, checked on 30 October 2026. PromptQuorum has not installed, run or benchmarked the app, so speed and answer quality are not assessed."
          }
        ]
      },
      "overview": {
        "id": "what-is-reins",
        "title": "What Is Reins?",
        "content": [
          "**Reins is a chat client for iPhone and iPad that connects to a self-hosted Ollama, LM Studio or other OpenAI-compatible server, and since version 2 can run models on the device too.** The App Store lists it as \"Reins: for Ollama & LM Studio\" under Developer Tools and Productivity, from the seller Ibrahim Cetin, and it first appeared on 2 January 2025.",
          "The project began as an open-source Ollama client and was later extended: the maker's site describes Reins as connecting to your server \"or runs AI models directly on-device\", and the App Store notes for version 2.3 introduce MLX-based on-device models and sharing them over the local network. The listing also mentions Ollama Cloud and Apple's Foundation Models."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Get It",
        "content": [
          "**Reins is an App Store download for iPhone and iPad; the current version is not offered as an Android or Windows build.**"
        ],
        "columns": [
          "Option",
          "How to get it"
        ],
        "rows": [
          {
            "Option": "iPhone and iPad",
            "How to get it": "[Reins on the App Store](https://apps.apple.com/app/id6739738501), free download with in-app purchases"
          },
          {
            "Option": "Reins Pro",
            "How to get it": "Monthly $6.99, yearly $39.99 (one-week trial), lifetime $99.99 on the US storefront"
          },
          {
            "Option": "Website",
            "How to get it": "[getreins.app](https://getreins.app)"
          },
          {
            "Option": "Privacy policy",
            "How to get it": "[getreins.app/privacy](https://getreins.app/privacy)"
          },
          {
            "Option": "Source code",
            "How to get it": "[github.com/ibrahimcetin/reins](https://github.com/ibrahimcetin/reins), version 1.3.4 and earlier only"
          }
        ],
        "note": "Version reviewed: 2.3.3, released on 21 October 2026 per the App Store; the app is 72.8 MB before any model download. The listing also shows macOS compatibility and the repository README names Mac, but the listing does not say whether that is a native Mac build. Prices are from the US storefront and vary by country."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requirements",
        "content": [
          "**The App Store lists iOS 17.0 as the minimum, and background generation needs iOS or iPadOS 26.**"
        ],
        "columns": [
          "Item",
          "What the sources say"
        ],
        "rows": [
          {
            "Item": "Operating system",
            "What the sources say": "iOS or iPadOS 17.0 or later; macOS 14.0 or later is shown for Mac"
          },
          {
            "Item": "Background generation",
            "What the sources say": "Responses and downloads keep running after you leave the app on iOS or iPadOS 26.0 or later"
          },
          {
            "Item": "Server mode",
            "What the sources say": "A reachable Ollama, LM Studio or OpenAI-compatible server that you set up and secure yourself"
          },
          {
            "Item": "On-device models",
            "What the sources say": "MLX models downloaded from Hugging Face; the listing gives no memory or iPhone-model requirements"
          },
          {
            "Item": "Account",
            "What the sources say": "None; the maker says there is no login"
          }
        ],
        "note": "The listing names no minimum RAM, and which on-device models run on which iPhone or iPad is not stated."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "How to Get Started",
        "content": [
          "**The steps follow the maker's own description of the app; PromptQuorum has not run them.**"
        ],
        "numberedItems": [
          {
            "title": "Install the app",
            "whyItMatters": "Get Reins from the App Store; no account or login is needed."
          },
          {
            "title": "Choose where models run",
            "whyItMatters": "Add the address of your Ollama, LM Studio or OpenAI-compatible server, with an API key or custom headers if it needs them, or download an on-device model instead."
          },
          {
            "title": "Pick a model and chat",
            "whyItMatters": "Select a model per conversation, set the system prompt and options such as temperature and context size, and start a chat."
          },
          {
            "title": "Add files, tools and web search",
            "whyItMatters": "Attach images, PDFs, CSV or text files, and switch on tools, web search or thinking mode where the model supports them."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Confirmed by the Sources",
        "content": [
          "**Every item below comes from the App Store description, the maker's website or the repository README; none has been independently tested.**"
        ],
        "items": [
          "**Several backends.** Ollama, LM Studio, Ollama Cloud and any OpenAI-compatible server, with multiple saved servers, API keys and custom headers that you switch between.",
          "**On-device models.** MLX models for Apple silicon, including any MLX model you search for and download, plus Apple Foundation Models; version 2.3 notes tool calling for MiniCPM5 models.",
          "**Tools and web search.** Models can call tools, search the web, fetch pages and calculate across several steps, with no API key for web search.",
          "**Chat control.** A separate system prompt, model, temperature, context size and token limit per conversation, thinking mode, continue-generation and chat branching.",
          "**Files and backup.** Image, PDF, CSV and text attachments, export and import of conversations, and temporary chats that leave no trace."
        ],
        "note": "The listing, the site and the Terms say Reins Pro unlocks additional features but do not list them, so which of the items above are free is not documented."
      },
      "privacy": {
        "id": "privacy",
        "title": "Data Flow and Privacy",
        "content": [
          "**The privacy policy, last updated on 20 September 2026, says the developer does not collect, store or monitor personal data, chat history or prompts, and uses no analytics or telemetry.** Chats, settings, server entries and downloaded models are stored on the device. In server mode, prompts and images go only to the address you enter; the developer says it sits in no middle position.",
          "With an on-device model, the policy says prompts, images and answers are processed entirely on the device. Model files come from Hugging Face, which sees the download under its own policy. Optional local network sharing is off by default; once on, any device on the same network can send prompts to your phone without a password, so the policy advises trusted networks only."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "These are the developer's declarations, not audit results, and the current source code is not published. PromptQuorum has not inspected the app's network traffic, and the sources do not say which service answers web-search requests or how it handles them."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**Ollama or LM Studio users** who want a phone client for the models already running at home.",
          "**Privacy-minded iPhone owners** who prefer a login-free app with no analytics, as the maker describes it.",
          "**Apple silicon tinkerers** who want to try MLX models offline on an iPhone or iPad before paying for anything."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Performance.** Speed, memory use, battery drain and the largest model that runs on a given iPhone or iPad are untested.",
          "**Pro features.** The sources do not list what Reins Pro unlocks or what the free version limits.",
          "**Web search.** The service behind the built-in search and where those queries go are not stated.",
          "**Open-source status.** The repository carries a GPL-3.0 licence file, but its README says it holds the source only up to version 1.3.4 while the Terms of Use forbid copying, modifying and reverse engineering the current app.",
          "**Other platforms.** The site speaks of \"Mobile\" and \"Desktop\"; the only Android and macOS downloads found are version 1.3.0 files from March 2025 on GitHub, and the Mac build of version 2 is not described."
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
            "App": "[PocketPal AI](/power-local-llm/pocketpal-ai-review)",
            "Platforms": "iOS, Android",
            "Price / license": "Free / MIT",
            "Key difference": "Open-source on-device chat app that also runs on Android"
          }
        ],
        "note": "Confirm each app's current price, license and platforms on its own listing before choosing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "Is there an Android or Windows version of Reins?",
            "a": "The current App Store line is for Apple devices. GitHub Releases hold an Android APK and a macOS DMG, but they are version 1.3.0 from March 2025 and the README says the repository covers code only up to 1.3.4."
          },
          {
            "q": "Which models can Reins run on the phone?",
            "a": "The listing says MLX models, including any MLX model you search for and download, plus Apple Foundation Models. Version 2.3 notes name MiniCPM5 and LFM 2.5; no list of supported iPhones is given."
          },
          {
            "q": "Does web search need an API key?",
            "a": "The maker says no: web search is built in and needs no key. The sources do not say which search service it uses."
          },
          {
            "q": "What does Reins Pro cost outside the United States?",
            "a": "On the App Store storefronts checked on 30 October 2026, monthly, yearly and lifetime were 7,99 €, 44,99 € and 99,99 € in Germany; 5,99 €, 34,99 € and 99,99 € in Spain; 7,99 €, 39,99 € and 99,99 € in France; ¥1,000, ¥5,000 and ¥15,000 in Japan; ₩8,800, ₩44,000 and ₩149,000 in South Korea; and R$ 19,90, R$ 119,90 and R$ 599,90 in Brazil. The US prices are $6.99, $39.99 and $99.99."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Reins is an actively updated, login-free way to reach a home Ollama or LM Studio server from an iPhone or iPad, with the option to run MLX models offline on the device. Against that, version 2 is closed source, comes from one individual developer, and the sources do not say what the paid Pro tier unlocks or how well on-device models perform. It suits people who already run their own server and can try the free download first; anyone who needs audited privacy claims should treat the policy as a declaration, not proof."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Reins on the App Store](https://apps.apple.com/app/id6739738501) — description, version history, requirements and in-app purchase prices per storefront, checked 30 October 2026.",
          "[Reins website](https://getreins.app) — feature list and links to the policy documents, checked 30 October 2026.",
          "[Reins privacy policy](https://getreins.app/privacy) — data collection, on-device processing and network sharing, last updated 20 September 2026.",
          "[Reins Terms of Use](https://getreins.app/terms) — licence terms and Reins Pro purchase conditions, checked 30 October 2026.",
          "[Reins on GitHub](https://github.com/ibrahimcetin/reins) — README, licence file and releases, checked 30 October 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[LM Mini Review](/power-local-llm/lm-mini-review) — an iPhone and iPad chat app with on-device models and a connection to your own server.",
          "[Enchanted Review](/power-local-llm/enchanted-review) — a free, Apache-2.0 Ollama client for iPhone and Mac.",
          "[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.",
          "[Best Local LLM Apps for iPhone](/power-local-llm/best-local-llm-apps-iphone-2026) — the roundup this review belongs to.",
          "[Local LLM Software Directory](/directory) — the full catalogue of local AI tools."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Reins Review: iPhone Chat App for Ollama and LM Studio",
      "description": "Reins review: an iPhone and iPad chat app for Ollama, LM Studio and OpenAI-compatible servers that also runs MLX models on the device. Pricing, requirements, privacy and what the sources leave unconfirmed.",
      "url": "https://www.promptquorum.com/power-local-llm/reins-review",
      "inLanguage": "en",
      "datePublished": "2026-10-30",
      "dateModified": "2026-10-30",
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
        "audienceType": "iPhone and iPad users evaluating a chat client for Ollama, LM Studio and on-device models"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Reins"
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
          "name": "On-device AI"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/power-local-llm/reins-review"
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
          "name": "Reins Review",
          "item": "https://www.promptquorum.com/power-local-llm/reins-review"
        }
      ]
    }
  },
  de: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-30",
    "dateModified": "2026-10-30",
    "next_refresh_due": "2027-04-30",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/reins-review-hero-de.webp",
    "title": "Reins-Rezension: iPhone-Chat-App für Ollama und LM Studio",
    "seoTitle": "Reins-Rezension: Chat-App für Ollama und LM Studio",
    "intro": "Reins ist eine Chat-App für iPhone und iPad des unabhängigen Entwicklers İbrahim Çetin, die sich mit Ihrem eigenen Ollama-, LM-Studio- oder OpenAI-kompatiblen Server verbindet und seit Version 2 auch MLX-Modelle direkt auf dem Gerät ausführen kann. Der Download ist kostenlos, dazu gibt es kostenpflichtige Reins-Pro-Tarife. Diese Rezension stützt sich auf den [App-Store-Eintrag](https://apps.apple.com/app/id6739738501), die [Website](https://getreins.app) des Herstellers, seine Datenschutzerklärung und sein GitHub-Repository, geprüft am 30. Oktober 2026; PromptQuorum hat die App nicht selbst getestet.",
    "metaDescription": "Reins-Rezension: iPhone-Chat-App für Ihren Ollama- oder LM-Studio-Server, die auch MLX-Modelle auf dem Gerät ausführt. Gratis, Pro-Tarife; ungetestet.",
    "twitterDescription": "Reins-Rezension: ein Chat-Client für Ihren eigenen Ollama- oder LM-Studio-Server, seit Version 2 mit MLX-Modellen auf dem Gerät. Gratis mit Pro-Tarifen; was die Quellen bestätigen und was nicht.",
    "audience": "iPhone- und iPad-Nutzer, die Ollama oder LM Studio zu Hause betreiben und wissen möchten, was Reins kann, was es kostet und welche Aussagen die Quellen offenlassen.",
    "readTime": "6 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Reins Rezension",
    "targetKeywords": [
      "reins rezension",
      "reins ollama ios app",
      "ollama client iphone",
      "lm studio iphone app",
      "ollama auf dem iphone nutzen",
      "private ki chat app iphone",
      "mlx modelle auf dem iphone"
    ],
    "current_models_mentioned": [
      "Gemma",
      "Qwen",
      "Llama",
      "MiniCPM5",
      "LFM 2.5"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Apple silicon"
    ],
    "leadAnswerBlock": "**Reins (Version 2.3.3, aktualisiert am 21. Oktober 2026) ist eine Chat-App für iPhone und iPad, die mit Ihrem eigenen Ollama-, LM-Studio- oder OpenAI-kompatiblen Server spricht und auch MLX-Modelle auf dem Gerät ausführen kann.** Der Download ist kostenlos, optional gibt es Reins-Pro-Tarife. Laut Entwickler gibt es keinen Login und keine Datenerhebung; jede Aussage hier stammt aus dem App-Store-Eintrag, der Website des Herstellers und seinen Richtliniendokumenten.",
    "quickAnswerTop": {
      "de": {
        "question": "Braucht Reins einen Server, oder kann es Modelle selbst ausführen?",
        "answer": "Laut Hersteller geht beides: Sie verbinden sich mit einem Ollama-, LM-Studio- oder OpenAI-kompatiblen Server, den Sie selbst betreiben, oder laden MLX-Modelle herunter und führen sie auf dem iPhone oder iPad aus. Die Datenschutzerklärung besagt, dass Prompts und Antworten bei On-Device-Modellen nur auf dem Gerät verarbeitet werden.",
        "bullets": [
          "Websuche und Tool-Nutzung funktionieren laut Hersteller ohne API-Schlüssel.",
          "Jeder Chat kann ein eigenes Modell, einen eigenen System-Prompt, eigene Temperatur und Kontextgröße haben.",
          "Bilder, PDFs, CSV- und Textdateien lassen sich an ein Gespräch anhängen.",
          "Chats lassen sich verzweigen, exportieren, importieren oder als temporär führen."
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "Kurzantwort",
        "anchor": "quick-answer"
      },
      {
        "label": "Was ist Reins?",
        "anchor": "what-is-reins"
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
            "text": "Reins ist ein Chat-Client für iPhone und iPad, der mit Ollama, LM Studio und anderen OpenAI-kompatiblen Servern arbeitet und MLX-Modelle auch direkt auf dem Gerät ausführen kann."
          },
          {
            "type": "plain-terms",
            "text": "Sie richten die App auf den Rechner mit Ihren Modellen aus oder laden ein Modell auf das Telefon, chatten dann, hängen Dateien an und lassen das Modell im Web suchen."
          }
        ],
        "items": [
          "Pflege: Version 2.3.3 erschien am 21. Oktober 2026, das GitHub-Repository wurde zuletzt am 14. Oktober 2026 aktualisiert; ein Warnhinweis für veraltete Projekte entfällt daher.",
          "Engines: Ihr eigener Ollama-, LM-Studio- oder OpenAI-kompatibler Server, Ollama Cloud oder MLX und Apple Foundation Models auf dem Gerät.",
          "Kosten: kostenloser Download mit Reins Pro als Monats-, Jahres- und Lifetime-Tarif.",
          "Quellcode: seit Version 2 geschlossen; das öffentliche Repository enthält den Code nur bis Version 1.3.4.",
          "Hersteller: ein einzelner Entwickler, hinter der App steht laut Quellen keine Firma."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Diese Rezension stützt sich auf den App-Store-Eintrag, die Website, die Datenschutzerklärung, die Nutzungsbedingungen und das GitHub-Repository des Herstellers, geprüft am 30. Oktober 2026. PromptQuorum hat die App weder installiert noch ausgeführt oder gemessen; Geschwindigkeit und Antwortqualität werden daher nicht bewertet."
          }
        ]
      },
      "overview": {
        "id": "what-is-reins",
        "title": "Was ist Reins?",
        "content": [
          "**Reins ist ein Chat-Client für iPhone und iPad, der sich mit einem selbst betriebenen Ollama-, LM-Studio- oder anderen OpenAI-kompatiblen Server verbindet und seit Version 2 auch Modelle auf dem Gerät ausführen kann.** Der App Store führt die App als „Reins: for Ollama & LM Studio“ unter Entwickler-Tools und Produktivität, Anbieter ist Ibrahim Cetin, und sie erschien erstmals am 2. Januar 2025.",
          "Das Projekt begann als Open-Source-Client für Ollama und wurde später erweitert: Die Website des Herstellers beschreibt Reins als Verbindung zu Ihrem Server „oder“ als Ausführung von KI-Modellen direkt auf dem Gerät, und die App-Store-Hinweise zu Version 2.3 führen MLX-basierte On-Device-Modelle und deren Freigabe im lokalen Netzwerk ein. Der Eintrag nennt außerdem Ollama Cloud und Apples Foundation Models."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Bezugsquelle",
        "content": [
          "**Reins gibt es als Download im App Store für iPhone und iPad; die aktuelle Version wird nicht als Android- oder Windows-Build angeboten.**"
        ],
        "columns": [
          "Option",
          "Bezug"
        ],
        "rows": [
          {
            "Option": "iPhone und iPad",
            "Bezug": "[Reins im App Store](https://apps.apple.com/app/id6739738501), kostenloser Download mit In-App-Käufen"
          },
          {
            "Option": "Reins Pro",
            "Bezug": "Monatlich 7,99 €, jährlich 44,99 € (eine Woche Testzeit), Lifetime 99,99 € (deutscher Store)"
          },
          {
            "Option": "Website",
            "Bezug": "[getreins.app](https://getreins.app)"
          },
          {
            "Option": "Datenschutzerklärung",
            "Bezug": "[getreins.app/privacy](https://getreins.app/privacy)"
          },
          {
            "Option": "Quellcode",
            "Bezug": "[github.com/ibrahimcetin/reins](https://github.com/ibrahimcetin/reins), nur Version 1.3.4 und älter"
          }
        ],
        "note": "Geprüfte Version: 2.3.3, laut App Store am 21. Oktober 2026 veröffentlicht; die App ist vor jedem Modell-Download 72,8 MB groß. Der Eintrag zeigt außerdem macOS-Kompatibilität und die README des Repositorys nennt den Mac, doch es steht nicht dort, ob es sich um eine native Mac-Version handelt. Die Preise stammen aus dem deutschen App Store und variieren je nach Land."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Anforderungen",
        "content": [
          "**Der App Store nennt iOS 17.0 als Mindestversion, und die Generierung im Hintergrund erfordert iOS oder iPadOS 26.**"
        ],
        "columns": [
          "Punkt",
          "Was die Quellen sagen"
        ],
        "rows": [
          {
            "Punkt": "Betriebssystem",
            "Was die Quellen sagen": "iOS oder iPadOS 17.0 oder neuer; für den Mac wird macOS 14.0 oder neuer angezeigt"
          },
          {
            "Punkt": "Generierung im Hintergrund",
            "Was die Quellen sagen": "Antworten und Downloads laufen ab iOS oder iPadOS 26.0 weiter, wenn Sie die App verlassen"
          },
          {
            "Punkt": "Server-Modus",
            "Was die Quellen sagen": "Ein erreichbarer Ollama-, LM-Studio- oder OpenAI-kompatibler Server, den Sie selbst einrichten und absichern"
          },
          {
            "Punkt": "On-Device-Modelle",
            "Was die Quellen sagen": "MLX-Modelle von Hugging Face; der Eintrag nennt weder Speicher- noch iPhone-Modell-Anforderungen"
          },
          {
            "Punkt": "Konto",
            "Was die Quellen sagen": "Keines; laut Hersteller gibt es keinen Login"
          }
        ],
        "note": "Der Eintrag nennt keinen Mindest-Arbeitsspeicher, und es steht nicht fest, welche On-Device-Modelle auf welchem iPhone oder iPad laufen."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "So gelingt der Einstieg",
        "content": [
          "**Die Schritte folgen der Beschreibung des Herstellers; PromptQuorum hat sie nicht selbst ausgeführt.**"
        ],
        "numberedItems": [
          {
            "title": "App installieren",
            "whyItMatters": "Reins aus dem App Store laden; ein Konto oder Login ist nicht nötig."
          },
          {
            "title": "Festlegen, wo Modelle laufen",
            "whyItMatters": "Die Adresse Ihres Ollama-, LM-Studio- oder OpenAI-kompatiblen Servers eintragen, bei Bedarf mit API-Schlüssel oder eigenen Headern, oder stattdessen ein On-Device-Modell herunterladen."
          },
          {
            "title": "Modell wählen und chatten",
            "whyItMatters": "Pro Gespräch ein Modell auswählen, den System-Prompt und Optionen wie Temperatur und Kontextgröße festlegen und den Chat starten."
          },
          {
            "title": "Dateien, Tools und Websuche hinzufügen",
            "whyItMatters": "Bilder, PDFs, CSV- oder Textdateien anhängen und Tools, Websuche oder den Denkmodus einschalten, sofern das Modell sie unterstützt."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Von den Quellen bestätigte Funktionen",
        "content": [
          "**Jeder Punkt unten stammt aus der App-Store-Beschreibung, der Website des Herstellers oder der README des Repositorys; nichts davon wurde unabhängig getestet.**"
        ],
        "items": [
          "**Mehrere Backends.** Ollama, LM Studio, Ollama Cloud und jeder OpenAI-kompatible Server, mit mehreren gespeicherten Servern, API-Schlüsseln und eigenen Headern, zwischen denen Sie wechseln.",
          "**On-Device-Modelle.** MLX-Modelle für Apple Silicon, auch jedes MLX-Modell, nach dem Sie suchen und das Sie herunterladen, sowie Apple Foundation Models; die Hinweise zu Version 2.3 nennen Tool-Aufrufe für MiniCPM5-Modelle.",
          "**Tools und Websuche.** Modelle können Tools aufrufen, im Web suchen, Seiten abrufen und über mehrere Schritte rechnen, ohne API-Schlüssel für die Websuche.",
          "**Chat-Steuerung.** Pro Gespräch eigener System-Prompt, eigenes Modell, eigene Temperatur, Kontextgröße und Token-Grenze, dazu Denkmodus, Weiterführen abgebrochener Antworten und Chat-Verzweigung.",
          "**Dateien und Sicherung.** Anhänge als Bild, PDF, CSV und Text, Export und Import von Gesprächen sowie temporäre Chats ohne Spuren."
        ],
        "note": "Eintrag, Website und Nutzungsbedingungen sagen, dass Reins Pro zusätzliche Funktionen freischaltet, listen sie aber nicht auf; welche der obigen Punkte kostenlos sind, ist daher nicht dokumentiert."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenfluss und Datenschutz",
        "content": [
          "**Die Datenschutzerklärung, zuletzt aktualisiert am 20. September 2026, besagt, dass der Entwickler keine personenbezogenen Daten, keinen Chatverlauf und keine Prompts erhebt, speichert oder überwacht und weder Analyse noch Telemetrie einsetzt.** Chats, Einstellungen, Servereinträge und heruntergeladene Modelle liegen auf dem Gerät. Im Server-Modus gehen Prompts und Bilder nur an die Adresse, die Sie eingeben; der Entwickler schalte sich nach eigener Aussage nicht dazwischen.",
          "Bei einem On-Device-Modell werden Prompts, Bilder und Antworten laut Erklärung vollständig auf dem Gerät verarbeitet. Die Modelldateien stammen von Hugging Face, das den Download nach eigener Richtlinie sieht. Die optionale Freigabe im lokalen Netzwerk ist standardmäßig aus; sobald sie aktiv ist, kann jedes Gerät im selben Netzwerk ohne Passwort Prompts an Ihr Telefon senden, weshalb die Erklärung nur vertrauenswürdige Netzwerke empfiehlt."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Das sind Erklärungen des Entwicklers, keine Prüfergebnisse, und der aktuelle Quellcode ist nicht veröffentlicht. PromptQuorum hat den Netzwerkverkehr der App nicht untersucht, und die Quellen sagen nicht, welcher Dienst Websuchanfragen beantwortet oder wie er sie behandelt."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen sich die App eignet",
        "items": [
          "**Ollama- oder LM-Studio-Nutzer**, die einen Telefon-Client für die zu Hause laufenden Modelle suchen.",
          "**Datenschutzbewusste iPhone-Besitzer**, die eine App ohne Login und ohne Analyse bevorzugen, wie der Hersteller sie beschreibt.",
          "**Apple-Silicon-Tüftler**, die MLX-Modelle offline auf dem iPhone oder iPad ausprobieren möchten, bevor sie etwas bezahlen."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht überprüfen konnten",
        "items": [
          "**Leistung.** Geschwindigkeit, Speicherbedarf, Akkuverbrauch und das größte Modell, das auf einem bestimmten iPhone oder iPad läuft, sind ungetestet.",
          "**Pro-Funktionen.** Die Quellen listen nicht auf, was Reins Pro freischaltet oder was die kostenlose Version begrenzt.",
          "**Websuche.** Der Dienst hinter der eingebauten Suche und das Ziel dieser Anfragen sind nicht genannt.",
          "**Open-Source-Status.** Das Repository enthält eine GPL-3.0-Lizenzdatei, doch seine README sagt, es führe den Quellcode nur bis Version 1.3.4, während die Nutzungsbedingungen Kopieren, Ändern und Reverse Engineering der aktuellen App untersagen.",
          "**Andere Plattformen.** Die Website spricht von „Mobile“ und „Desktop“; die einzigen gefundenen Android- und macOS-Downloads sind Dateien der Version 1.3.0 vom März 2025 auf GitHub, und die Mac-Version von Version 2 wird nicht beschrieben."
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
            "App": "[LM Mini](/de/power-local-llm/lm-mini-review)",
            "Plattformen": "iPhone, iPad, Mac im Eintrag",
            "Preis / Lizenz": "Gratis + In-App / Closed Source",
            "Hauptunterschied": "Bietet zusätzlich Fernzugriff und optionale Cloud-APIs"
          },
          {
            "App": "[Enchanted](/de/power-local-llm/enchanted-review)",
            "Plattformen": "iPhone, Mac",
            "Preis / Lizenz": "Gratis / Apache 2.0",
            "Hauptunterschied": "Ollama-Client, der einen separaten Ollama-Server braucht"
          },
          {
            "App": "[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)",
            "Plattformen": "iOS, Android",
            "Preis / Lizenz": "Gratis / MIT",
            "Hauptunterschied": "Quelloffene On-Device-Chat-App, die auch auf Android läuft"
          }
        ],
        "note": "Prüfen Sie Preis, Lizenz und Plattformen jeder App vor der Wahl im jeweiligen Eintrag."
      },
      "faq": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Gibt es Reins für Android oder Windows?",
            "a": "Die aktuelle App-Store-Linie richtet sich an Apple-Geräte. Unter GitHub Releases liegen ein Android-APK und ein macOS-DMG, doch das ist Version 1.3.0 vom März 2025, und die README sagt, das Repository decke Code nur bis 1.3.4 ab."
          },
          {
            "q": "Welche Modelle kann Reins auf dem Telefon ausführen?",
            "a": "Laut Eintrag MLX-Modelle, auch jedes MLX-Modell, nach dem Sie suchen und das Sie herunterladen, sowie Apple Foundation Models. Die Hinweise zu Version 2.3 nennen MiniCPM5 und LFM 2.5; eine Liste unterstützter iPhones fehlt."
          },
          {
            "q": "Braucht die Websuche einen API-Schlüssel?",
            "a": "Laut Hersteller nein: Die Websuche ist eingebaut und braucht keinen Schlüssel. Welchen Suchdienst sie nutzt, sagen die Quellen nicht."
          },
          {
            "q": "Was kostet Reins Pro außerhalb der USA?",
            "a": "In den am 30. Oktober 2026 geprüften App-Store-Ländern kosteten monatlich, jährlich und Lifetime in Deutschland 7,99 €, 44,99 € und 99,99 €; in Spanien 5,99 €, 34,99 € und 99,99 €; in Frankreich 7,99 €, 39,99 € und 99,99 €; in Japan 1.000 ¥, 5.000 ¥ und 15.000 ¥; in Südkorea 8.800 ₩, 44.000 ₩ und 149.000 ₩; in Brasilien R$ 19,90, R$ 119,90 und R$ 599,90. In den USA sind es 6,99 $, 39,99 $ und 99,99 $."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "Reins ist ein aktiv gepflegter Weg ohne Login, um von iPhone oder iPad einen Ollama- oder LM-Studio-Server zu Hause zu erreichen, mit der Option, MLX-Modelle offline auf dem Gerät auszuführen. Dagegen ist Version 2 Closed Source, stammt von einem einzelnen Entwickler, und die Quellen sagen nicht, was der kostenpflichtige Pro-Tarif freischaltet oder wie gut On-Device-Modelle laufen. Die App passt zu Menschen, die bereits einen eigenen Server betreiben und zuerst den kostenlosen Download testen können; wer geprüfte Datenschutzaussagen braucht, sollte die Erklärung als Behauptung statt als Beleg lesen."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[Reins im App Store](https://apps.apple.com/app/id6739738501) — Beschreibung, Versionsverlauf, Anforderungen und In-App-Preise je Store, geprüft am 30. Oktober 2026.",
          "[Reins-Website](https://getreins.app) — Funktionsliste und Links zu den Richtliniendokumenten, geprüft am 30. Oktober 2026.",
          "[Reins-Datenschutzerklärung](https://getreins.app/privacy) — Datenerhebung, Verarbeitung auf dem Gerät und Netzwerkfreigabe, zuletzt aktualisiert am 20. September 2026.",
          "[Reins-Nutzungsbedingungen](https://getreins.app/terms) — Lizenzbedingungen und Kaufbedingungen von Reins Pro, geprüft am 30. Oktober 2026.",
          "[Reins auf GitHub](https://github.com/ibrahimcetin/reins) — README, Lizenzdatei und Releases, geprüft am 30. Oktober 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[LM-Mini-Rezension](/de/power-local-llm/lm-mini-review) — eine Chat-App für iPhone und iPad mit On-Device-Modellen und Anbindung an Ihren eigenen Server.",
          "[Enchanted-Rezension](/de/power-local-llm/enchanted-review) — ein kostenloser Ollama-Client unter Apache 2.0 für iPhone und Mac.",
          "[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener On-Device-Chat-Client für iOS und Android.",
          "[Beste lokale LLM-Apps für das iPhone](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die Übersicht, zu der diese Rezension gehört.",
          "[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools."
        ]
      }
    }
  },
  es: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-30",
    "dateModified": "2026-10-30",
    "next_refresh_due": "2027-04-30",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/reins-review-hero-es.webp",
    "title": "Reseña de Reins: app de chat para Ollama y LM Studio en iPhone",
    "seoTitle": "Reseña de Reins: app de chat para Ollama y LM Studio",
    "intro": "Reins es una app de chat para iPhone y iPad del desarrollador independiente İbrahim Çetin que se conecta a tu propio servidor Ollama, LM Studio o compatible con OpenAI y, desde la versión 2, también puede ejecutar modelos MLX en el propio dispositivo. La descarga es gratuita, con planes de pago Reins Pro. Esta reseña se basa en la [ficha de la App Store](https://apps.apple.com/app/id6739738501), el [sitio web](https://getreins.app) del desarrollador, su política de privacidad y su repositorio de GitHub, consultados el 30 de octubre de 2026; PromptQuorum no ha probado la app personalmente.",
    "metaDescription": "Reseña de Reins: app de chat para iPhone y iPad para tu servidor Ollama o LM Studio, con modelos MLX en el dispositivo. Gratis, planes Pro; sin probar.",
    "twitterDescription": "Reseña de Reins: un cliente de chat para tu propio servidor Ollama o LM Studio, con modelos MLX en el dispositivo desde la v2. Gratis con planes Pro; qué confirman las fuentes y qué no.",
    "audience": "Usuarios de iPhone y iPad que ejecutan Ollama o LM Studio en casa y quieren saber qué hace Reins, cuánto cuesta y qué afirmaciones las fuentes dejan sin confirmar.",
    "readTime": "6 min de lectura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "reseña de Reins",
    "targetKeywords": [
      "reseña reins",
      "reins ollama app ios",
      "cliente ollama iphone",
      "app lm studio iphone",
      "usar ollama en iphone",
      "chat de ia privado iphone",
      "modelos mlx en iphone"
    ],
    "current_models_mentioned": [
      "Gemma",
      "Qwen",
      "Llama",
      "MiniCPM5",
      "LFM 2.5"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Apple silicon"
    ],
    "leadAnswerBlock": "**Reins (versión 2.3.3, actualizada el 21 de octubre de 2026) es una app de chat para iPhone y iPad que habla con tu propio servidor Ollama, LM Studio o compatible con OpenAI y que también puede ejecutar modelos MLX en el dispositivo.** La descarga es gratuita y vende planes opcionales Reins Pro. El desarrollador dice que no hay inicio de sesión ni recopilación de datos, y cada afirmación de aquí procede de la ficha de la App Store, el sitio del desarrollador y sus documentos legales.",
    "quickAnswerTop": {
      "es": {
        "question": "¿Reins necesita un servidor o puede ejecutar modelos por sí solo?",
        "answer": "Según el desarrollador, ambas cosas: te conectas a un servidor Ollama, LM Studio o compatible con OpenAI que tú mismo ejecutas, o descargas modelos MLX y los ejecutas en el iPhone o el iPad. La política de privacidad indica que con modelos en el dispositivo los prompts y las respuestas se procesan solo en el dispositivo.",
        "bullets": [
          "La búsqueda web y el uso de herramientas funcionan sin clave de API, según el desarrollador.",
          "Cada chat puede tener su propio modelo, prompt de sistema, temperatura y tamaño de contexto.",
          "Se pueden adjuntar imágenes, PDF, CSV y archivos de texto a una conversación.",
          "Los chats se pueden ramificar, exportar, importar o dejar como temporales."
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "Respuesta rápida",
        "anchor": "quick-answer"
      },
      {
        "label": "¿Qué es Reins?",
        "anchor": "what-is-reins"
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
            "text": "Reins es un cliente de chat para iPhone y iPad que funciona con Ollama, LM Studio y otros servidores compatibles con OpenAI y que también puede ejecutar modelos MLX directamente en el dispositivo."
          },
          {
            "type": "plain-terms",
            "text": "Apuntas la app al ordenador que ejecuta tus modelos o descargas un modelo en el teléfono, y después chateas, adjuntas archivos y dejas que el modelo busque en la web."
          }
        ],
        "items": [
          "Mantenimiento: la versión 2.3.3 se publicó el 21 de octubre de 2026 y el repositorio de GitHub se actualizó por última vez el 14 de octubre de 2026, por lo que no se aplica ninguna advertencia de proyecto abandonado.",
          "Motores: tu propio servidor Ollama, LM Studio o compatible con OpenAI, Ollama Cloud, o MLX y Apple Foundation Models en el dispositivo.",
          "Coste: descarga gratuita con planes Reins Pro mensual, anual y de por vida.",
          "Código: cerrado desde la versión 2; el repositorio público contiene el código solo hasta la versión 1.3.4.",
          "Desarrollo: un desarrollador individual, sin que las fuentes nombren ninguna empresa detrás de la app."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta reseña se basa en la ficha de la App Store, el sitio web, la política de privacidad, las condiciones de uso y el repositorio de GitHub del desarrollador, consultados el 30 de octubre de 2026. PromptQuorum no ha instalado, ejecutado ni medido la app, por lo que no se evalúan la velocidad ni la calidad de las respuestas."
          }
        ]
      },
      "overview": {
        "id": "what-is-reins",
        "title": "¿Qué es Reins?",
        "content": [
          "**Reins es un cliente de chat para iPhone y iPad que se conecta a un servidor Ollama, LM Studio u otro compatible con OpenAI que tú alojas y que, desde la versión 2, también puede ejecutar modelos en el dispositivo.** La App Store la lista como «Reins: for Ollama & LM Studio» en Herramientas para desarrolladores y Productividad, del vendedor Ibrahim Cetin, y apareció por primera vez el 2 de enero de 2025.",
          "El proyecto empezó como un cliente de Ollama de código abierto y se amplió después: el sitio del desarrollador describe Reins como una conexión a tu servidor «o» la ejecución de modelos de IA directamente en el dispositivo, y las notas de la App Store de la versión 2.3 presentan modelos MLX en el dispositivo y su uso compartido por la red local. La ficha menciona también Ollama Cloud y los Foundation Models de Apple."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo conseguirla",
        "content": [
          "**Reins se descarga desde la App Store para iPhone y iPad; la versión actual no se ofrece como compilación para Android ni Windows.**"
        ],
        "columns": [
          "Opción",
          "Cómo conseguirla"
        ],
        "rows": [
          {
            "Opción": "iPhone y iPad",
            "Cómo conseguirla": "[Reins en la App Store](https://apps.apple.com/app/id6739738501), descarga gratuita con compras dentro de la app"
          },
          {
            "Opción": "Reins Pro",
            "Cómo conseguirla": "Mensual 5,99 €, anual 34,99 € (una semana de prueba), de por vida 99,99 € (tienda española)"
          },
          {
            "Opción": "Sitio web",
            "Cómo conseguirla": "[getreins.app](https://getreins.app)"
          },
          {
            "Opción": "Política de privacidad",
            "Cómo conseguirla": "[getreins.app/privacy](https://getreins.app/privacy)"
          },
          {
            "Opción": "Código fuente",
            "Cómo conseguirla": "[github.com/ibrahimcetin/reins](https://github.com/ibrahimcetin/reins), solo la versión 1.3.4 y anteriores"
          }
        ],
        "note": "Versión revisada: 2.3.3, publicada el 21 de octubre de 2026 según la App Store; la app ocupa 72,8 MB antes de descargar ningún modelo. La ficha muestra también compatibilidad con macOS y el README del repositorio nombra el Mac, pero la ficha no indica si es una versión nativa para Mac. Los precios son de la tienda española y varían según el país."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**La App Store indica iOS 17.0 como mínimo, y la generación en segundo plano requiere iOS o iPadOS 26.**"
        ],
        "columns": [
          "Elemento",
          "Qué dicen las fuentes"
        ],
        "rows": [
          {
            "Elemento": "Sistema operativo",
            "Qué dicen las fuentes": "iOS o iPadOS 17.0 o posterior; para Mac se muestra macOS 14.0 o posterior"
          },
          {
            "Elemento": "Generación en segundo plano",
            "Qué dicen las fuentes": "Las respuestas y las descargas siguen al salir de la app en iOS o iPadOS 26.0 o posterior"
          },
          {
            "Elemento": "Modo servidor",
            "Qué dicen las fuentes": "Un servidor Ollama, LM Studio o compatible con OpenAI accesible, que configuras y proteges tú"
          },
          {
            "Elemento": "Modelos en el dispositivo",
            "Qué dicen las fuentes": "Modelos MLX descargados de Hugging Face; la ficha no da requisitos de memoria ni de modelo de iPhone"
          },
          {
            "Elemento": "Cuenta",
            "Qué dicen las fuentes": "Ninguna; el desarrollador dice que no hay inicio de sesión"
          }
        ],
        "note": "La ficha no indica una RAM mínima, y no se dice qué modelos en el dispositivo funcionan en qué iPhone o iPad."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Cómo empezar",
        "content": [
          "**Los pasos siguen la descripción del propio desarrollador; PromptQuorum no los ha ejecutado.**"
        ],
        "numberedItems": [
          {
            "title": "Instala la app",
            "whyItMatters": "Descarga Reins desde la App Store; no hace falta cuenta ni inicio de sesión."
          },
          {
            "title": "Elige dónde se ejecutan los modelos",
            "whyItMatters": "Añade la dirección de tu servidor Ollama, LM Studio o compatible con OpenAI, con clave de API o cabeceras personalizadas si las necesita, o descarga un modelo en el dispositivo."
          },
          {
            "title": "Elige un modelo y chatea",
            "whyItMatters": "Selecciona un modelo por conversación, define el prompt de sistema y opciones como la temperatura y el tamaño de contexto, e inicia un chat."
          },
          {
            "title": "Añade archivos, herramientas y búsqueda web",
            "whyItMatters": "Adjunta imágenes, PDF, CSV o archivos de texto, y activa herramientas, búsqueda web o el modo de razonamiento cuando el modelo los admita."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones confirmadas por las fuentes",
        "content": [
          "**Cada elemento de abajo procede de la descripción de la App Store, el sitio del desarrollador o el README del repositorio; ninguno se ha probado de forma independiente.**"
        ],
        "items": [
          "**Varios backends.** Ollama, LM Studio, Ollama Cloud y cualquier servidor compatible con OpenAI, con varios servidores guardados, claves de API y cabeceras personalizadas entre los que cambias.",
          "**Modelos en el dispositivo.** Modelos MLX para Apple silicon, incluido cualquier modelo MLX que busques y descargues, además de Apple Foundation Models; las notas de la versión 2.3 mencionan llamadas a herramientas para modelos MiniCPM5.",
          "**Herramientas y búsqueda web.** Los modelos pueden llamar a herramientas, buscar en la web, obtener páginas y calcular en varios pasos, sin clave de API para la búsqueda web.",
          "**Control del chat.** Prompt de sistema, modelo, temperatura, tamaño de contexto y límite de tokens propios por conversación, modo de razonamiento, continuar la generación y ramificación de chats.",
          "**Archivos y copia de seguridad.** Adjuntos de imagen, PDF, CSV y texto, exportación e importación de conversaciones y chats temporales que no dejan rastro."
        ],
        "note": "La ficha, el sitio y las condiciones de uso dicen que Reins Pro desbloquea funciones adicionales pero no las enumeran, así que no está documentado cuáles de los elementos anteriores son gratuitos."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flujo de datos y privacidad",
        "content": [
          "**La política de privacidad, actualizada por última vez el 20 de septiembre de 2026, dice que el desarrollador no recopila, almacena ni supervisa datos personales, historial de chat ni prompts, y que no usa analítica ni telemetría.** Los chats, los ajustes, los servidores guardados y los modelos descargados se almacenan en el dispositivo. En modo servidor, los prompts y las imágenes van solo a la dirección que introduces; el desarrollador afirma que no se interpone en ningún punto.",
          "Con un modelo en el dispositivo, la política dice que los prompts, las imágenes y las respuestas se procesan por completo en el dispositivo. Los archivos de modelo vienen de Hugging Face, que ve la descarga según su propia política. El uso compartido opcional por la red local viene desactivado; una vez activado, cualquier dispositivo de la misma red puede enviar prompts a tu teléfono sin contraseña, por lo que la política aconseja usarlo solo en redes de confianza."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Son declaraciones del desarrollador, no resultados de una auditoría, y el código fuente actual no está publicado. PromptQuorum no ha inspeccionado el tráfico de red de la app, y las fuentes no dicen qué servicio responde a las búsquedas web ni cómo las trata."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quién es",
        "items": [
          "**Usuarios de Ollama o LM Studio** que quieren un cliente para el teléfono de los modelos que ya ejecutan en casa.",
          "**Propietarios de iPhone atentos a la privacidad** que prefieren una app sin inicio de sesión y sin analítica, tal como la describe el desarrollador.",
          "**Aficionados a Apple silicon** que quieren probar modelos MLX sin conexión en un iPhone o iPad antes de pagar nada."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Rendimiento.** La velocidad, el uso de memoria, el consumo de batería y el mayor modelo que funciona en un iPhone o iPad concreto no se han probado.",
          "**Funciones Pro.** Las fuentes no enumeran qué desbloquea Reins Pro ni qué limita la versión gratuita.",
          "**Búsqueda web.** No se indica el servicio detrás de la búsqueda integrada ni adónde van esas consultas.",
          "**Estado de código abierto.** El repositorio incluye un archivo de licencia GPL-3.0, pero su README dice que contiene el código solo hasta la versión 1.3.4, mientras que las condiciones de uso prohíben copiar, modificar y aplicar ingeniería inversa a la app actual.",
          "**Otras plataformas.** El sitio habla de «Mobile» y «Desktop»; las únicas descargas de Android y macOS que se encontraron son archivos de la versión 1.3.0 de marzo de 2025 en GitHub, y la versión para Mac de la versión 2 no se describe."
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
            "Plataformas": "iPhone, iPad, Mac en la ficha",
            "Precio / licencia": "Gratis + compras / código cerrado",
            "Diferencia clave": "Ofrece además acceso remoto y APIs en la nube opcionales"
          },
          {
            "App": "[Enchanted](/es/power-local-llm/enchanted-review)",
            "Plataformas": "iPhone, Mac",
            "Precio / licencia": "Gratis / Apache 2.0",
            "Diferencia clave": "Cliente de Ollama que necesita un servidor Ollama aparte"
          },
          {
            "App": "[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)",
            "Plataformas": "iOS, Android",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "App de chat en el dispositivo de código abierto que también funciona en Android"
          }
        ],
        "note": "Comprueba el precio, la licencia y las plataformas actuales de cada app en su propia ficha antes de elegir."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿Hay una versión de Reins para Android o Windows?",
            "a": "La línea actual de la App Store es para dispositivos Apple. GitHub Releases contiene un APK de Android y un DMG de macOS, pero son de la versión 1.3.0 de marzo de 2025, y el README dice que el repositorio cubre el código solo hasta la 1.3.4."
          },
          {
            "q": "¿Qué modelos puede ejecutar Reins en el teléfono?",
            "a": "Según la ficha, modelos MLX, incluido cualquier modelo MLX que busques y descargues, además de Apple Foundation Models. Las notas de la versión 2.3 mencionan MiniCPM5 y LFM 2.5; no se da una lista de iPhone compatibles."
          },
          {
            "q": "¿La búsqueda web necesita una clave de API?",
            "a": "El desarrollador dice que no: la búsqueda web está integrada y no requiere clave. Las fuentes no dicen qué servicio de búsqueda usa."
          },
          {
            "q": "¿Cuánto cuesta Reins Pro fuera de Estados Unidos?",
            "a": "En las tiendas de la App Store consultadas el 30 de octubre de 2026, mensual, anual y de por vida costaban 7,99 €, 44,99 € y 99,99 € en Alemania; 5,99 €, 34,99 € y 99,99 € en España; 7,99 €, 39,99 € y 99,99 € en Francia; ¥1,000, ¥5,000 y ¥15,000 en Japón; ₩8,800, ₩44,000 y ₩149,000 en Corea del Sur; y R$ 19,90, R$ 119,90 y R$ 599,90 en Brasil. En Estados Unidos son $6.99, $39.99 y $99.99."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "Reins es una forma activamente mantenida y sin inicio de sesión de llegar desde un iPhone o iPad a un servidor Ollama o LM Studio doméstico, con la opción de ejecutar modelos MLX sin conexión en el dispositivo. En contra, la versión 2 es de código cerrado, procede de un solo desarrollador, y las fuentes no dicen qué desbloquea el plan Pro de pago ni qué tal rinden los modelos en el dispositivo. Encaja con quienes ya ejecutan su propio servidor y pueden probar primero la descarga gratuita; quien necesite afirmaciones de privacidad auditadas debe leer la política como una declaración, no como una prueba."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Reins en la App Store](https://apps.apple.com/app/id6739738501) — descripción, historial de versiones, requisitos y precios de compras dentro de la app por tienda, comprobado el 30 de octubre de 2026.",
          "[Sitio web de Reins](https://getreins.app) — lista de funciones y enlaces a los documentos legales, comprobado el 30 de octubre de 2026.",
          "[Política de privacidad de Reins](https://getreins.app/privacy) — recopilación de datos, procesamiento en el dispositivo y uso compartido en red, actualizada por última vez el 20 de septiembre de 2026.",
          "[Condiciones de uso de Reins](https://getreins.app/terms) — términos de licencia y condiciones de compra de Reins Pro, comprobado el 30 de octubre de 2026.",
          "[Reins en GitHub](https://github.com/ibrahimcetin/reins) — README, archivo de licencia y versiones, comprobado el 30 de octubre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Reseña de LM Mini](/es/power-local-llm/lm-mini-review) — una app de chat para iPhone y iPad con modelos en el dispositivo y conexión a tu propio servidor.",
          "[Reseña de Enchanted](/es/power-local-llm/enchanted-review) — un cliente de Ollama gratuito con licencia Apache 2.0 para iPhone y Mac.",
          "[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat en el dispositivo gratuito y de código abierto para iOS y Android.",
          "[Las mejores apps de LLM locales para iPhone](/es/power-local-llm/best-local-llm-apps-iphone-2026) — la comparativa a la que pertenece esta reseña.",
          "[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA locales."
        ]
      }
    }
  },
  fr: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-30",
    "dateModified": "2026-10-30",
    "next_refresh_due": "2027-04-30",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/reins-review-hero-fr.webp",
    "title": "Test de Reins : appli de chat iPhone pour Ollama et LM Studio",
    "seoTitle": "Test de Reins : chat iPhone pour Ollama et LM Studio",
    "intro": "Reins est une appli de chat pour iPhone et iPad du développeur indépendant İbrahim Çetin qui se connecte à votre propre serveur Ollama, LM Studio ou compatible OpenAI et, depuis la version 2, peut aussi exécuter des modèles MLX sur l’appareil. Le téléchargement est gratuit, avec des formules payantes Reins Pro. Ce test s’appuie sur la [fiche de l’App Store](https://apps.apple.com/app/id6739738501), le [site web](https://getreins.app) du développeur, sa politique de confidentialité et son dépôt GitHub, consultés le 30 octobre 2026 ; PromptQuorum n’a pas testé l’appli en conditions réelles.",
    "metaDescription": "Test de Reins : appli de chat iPhone et iPad pour votre serveur Ollama ou LM Studio, avec modèles MLX sur l’appareil. Gratuite, formules Pro ; non testée.",
    "twitterDescription": "Test de Reins : un client de chat pour votre propre serveur Ollama ou LM Studio, avec des modèles MLX sur l’appareil depuis la v2. Gratuit avec formules Pro ; ce que les sources confirment ou non.",
    "audience": "Utilisateurs d’iPhone et d’iPad qui font tourner Ollama ou LM Studio chez eux et veulent savoir ce que fait Reins, ce qu’il coûte et quelles affirmations les sources laissent sans confirmation.",
    "readTime": "6 min de lecture",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "test Reins",
    "targetKeywords": [
      "test reins",
      "reins ollama appli ios",
      "client ollama iphone",
      "appli lm studio iphone",
      "utiliser ollama sur iphone",
      "chat ia privé iphone",
      "modèles mlx sur iphone"
    ],
    "current_models_mentioned": [
      "Gemma",
      "Qwen",
      "Llama",
      "MiniCPM5",
      "LFM 2.5"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Apple silicon"
    ],
    "leadAnswerBlock": "**Reins (version 2.3.3, mise à jour le 21 octobre 2026) est une appli de chat pour iPhone et iPad qui dialogue avec votre propre serveur Ollama, LM Studio ou compatible OpenAI et peut aussi exécuter des modèles MLX sur l’appareil.** Le téléchargement est gratuit et des formules Reins Pro facultatives sont proposées. Le développeur affirme qu’il n’y a ni connexion ni collecte de données ; chaque affirmation ici provient de la fiche de l’App Store, du site du développeur et de ses documents juridiques.",
    "quickAnswerTop": {
      "fr": {
        "question": "Reins a-t-il besoin d’un serveur, ou peut-il exécuter des modèles seul ?",
        "answer": "Selon le développeur, les deux sont possibles : vous vous connectez à un serveur Ollama, LM Studio ou compatible OpenAI que vous gérez, ou vous téléchargez des modèles MLX et les exécutez sur l’iPhone ou l’iPad. La politique de confidentialité précise qu’avec un modèle sur l’appareil, les prompts et les réponses sont traités uniquement sur l’appareil.",
        "bullets": [
          "La recherche web et l’usage d’outils fonctionnent sans clé d’API, d’après le développeur.",
          "Chaque conversation peut avoir son propre modèle, prompt système, température et taille de contexte.",
          "Images, PDF, CSV et fichiers texte peuvent être joints à une conversation.",
          "Les chats peuvent être dupliqués en branches, exportés, importés ou rester temporaires."
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "Réponse rapide",
        "anchor": "quick-answer"
      },
      {
        "label": "Qu’est-ce que Reins ?",
        "anchor": "what-is-reins"
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
            "text": "Reins est un client de chat pour iPhone et iPad qui fonctionne avec Ollama, LM Studio et d’autres serveurs compatibles OpenAI et qui peut aussi exécuter des modèles MLX directement sur l’appareil."
          },
          {
            "type": "plain-terms",
            "text": "Vous pointez l’appli vers l’ordinateur qui exécute vos modèles ou vous téléchargez un modèle sur le téléphone, puis vous discutez, joignez des fichiers et laissez le modèle chercher sur le web."
          }
        ],
        "items": [
          "Maintenance : la version 2.3.3 est sortie le 21 octobre 2026 et le dépôt GitHub a été mis à jour pour la dernière fois le 14 octobre 2026 ; aucun avertissement de projet délaissé ne s’applique.",
          "Moteurs : votre propre serveur Ollama, LM Studio ou compatible OpenAI, Ollama Cloud, ou MLX et Apple Foundation Models sur l’appareil.",
          "Coût : téléchargement gratuit avec Reins Pro en formule mensuelle, annuelle et à vie.",
          "Code source : fermé depuis la version 2 ; le dépôt public ne contient le code que jusqu’à la version 1.3.4.",
          "Éditeur : un développeur individuel, sans société derrière l’appli d’après les sources."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce test s’appuie sur la fiche de l’App Store, le site web, la politique de confidentialité, les conditions d’utilisation et le dépôt GitHub du développeur, consultés le 30 octobre 2026. PromptQuorum n’a ni installé, ni exécuté, ni mesuré l’appli ; la vitesse et la qualité des réponses ne sont donc pas évaluées."
          }
        ]
      },
      "overview": {
        "id": "what-is-reins",
        "title": "Qu’est-ce que Reins ?",
        "content": [
          "**Reins est un client de chat pour iPhone et iPad qui se connecte à un serveur Ollama, LM Studio ou autre serveur compatible OpenAI que vous hébergez et qui, depuis la version 2, peut aussi exécuter des modèles sur l’appareil.** L’App Store la présente comme « Reins: for Ollama & LM Studio » dans Outils de développement et Productivité, du vendeur Ibrahim Cetin, et elle est apparue le 2 janvier 2025.",
          "Le projet a débuté comme client Ollama open source avant d’être étendu : le site du développeur décrit Reins comme une connexion à votre serveur « ou » l’exécution de modèles d’IA directement sur l’appareil, et les notes de l’App Store de la version 2.3 introduisent des modèles MLX sur l’appareil et leur partage sur le réseau local. La fiche mentionne aussi Ollama Cloud et les Foundation Models d’Apple."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Où l’obtenir",
        "content": [
          "**Reins se télécharge sur l’App Store pour iPhone et iPad ; la version actuelle n’est pas proposée en build Android ou Windows.**"
        ],
        "columns": [
          "Option",
          "Comment l’obtenir"
        ],
        "rows": [
          {
            "Option": "iPhone et iPad",
            "Comment l’obtenir": "[Reins sur l’App Store](https://apps.apple.com/app/id6739738501), téléchargement gratuit avec achats intégrés"
          },
          {
            "Option": "Reins Pro",
            "Comment l’obtenir": "Mensuel 7,99 €, annuel 39,99 € (une semaine d’essai), à vie 99,99 € (App Store français)"
          },
          {
            "Option": "Site web",
            "Comment l’obtenir": "[getreins.app](https://getreins.app)"
          },
          {
            "Option": "Politique de confidentialité",
            "Comment l’obtenir": "[getreins.app/privacy](https://getreins.app/privacy)"
          },
          {
            "Option": "Code source",
            "Comment l’obtenir": "[github.com/ibrahimcetin/reins](https://github.com/ibrahimcetin/reins), version 1.3.4 et antérieures seulement"
          }
        ],
        "note": "Version testée : 2.3.3, publiée le 21 octobre 2026 d’après l’App Store ; l’appli pèse 72,8 Mo avant tout téléchargement de modèle. La fiche indique aussi une compatibilité macOS et le README du dépôt cite le Mac, mais la fiche ne précise pas s’il s’agit d’une version Mac native. Les prix viennent de l’App Store français et varient selon le pays."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Configuration requise",
        "content": [
          "**L’App Store indique iOS 17.0 au minimum, et la génération en arrière-plan exige iOS ou iPadOS 26.**"
        ],
        "columns": [
          "Élément",
          "Ce que disent les sources"
        ],
        "rows": [
          {
            "Élément": "Système d’exploitation",
            "Ce que disent les sources": "iOS ou iPadOS 17.0 ou ultérieur ; macOS 14.0 ou ultérieur est indiqué pour le Mac"
          },
          {
            "Élément": "Génération en arrière-plan",
            "Ce que disent les sources": "Les réponses et les téléchargements continuent quand vous quittez l’appli sous iOS ou iPadOS 26.0 ou ultérieur"
          },
          {
            "Élément": "Mode serveur",
            "Ce que disent les sources": "Un serveur Ollama, LM Studio ou compatible OpenAI accessible, que vous installez et sécurisez vous-même"
          },
          {
            "Élément": "Modèles sur l’appareil",
            "Ce que disent les sources": "Modèles MLX téléchargés depuis Hugging Face ; la fiche ne donne ni mémoire requise ni modèles d’iPhone compatibles"
          },
          {
            "Élément": "Compte",
            "Ce que disent les sources": "Aucun ; le développeur affirme qu’il n’y a pas de connexion"
          }
        ],
        "note": "La fiche n’indique aucune RAM minimale, et les modèles sur l’appareil qui tournent sur tel iPhone ou iPad ne sont pas précisés."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Pour bien démarrer",
        "content": [
          "**Les étapes suivent la description du développeur ; PromptQuorum ne les a pas exécutées.**"
        ],
        "numberedItems": [
          {
            "title": "Installer l’appli",
            "whyItMatters": "Téléchargez Reins depuis l’App Store ; aucun compte ni connexion n’est nécessaire."
          },
          {
            "title": "Choisir où tournent les modèles",
            "whyItMatters": "Ajoutez l’adresse de votre serveur Ollama, LM Studio ou compatible OpenAI, avec une clé d’API ou des en-têtes personnalisés si besoin, ou téléchargez plutôt un modèle sur l’appareil."
          },
          {
            "title": "Choisir un modèle et discuter",
            "whyItMatters": "Sélectionnez un modèle par conversation, définissez le prompt système et des options comme la température et la taille de contexte, puis lancez le chat."
          },
          {
            "title": "Ajouter fichiers, outils et recherche web",
            "whyItMatters": "Joignez images, PDF, CSV ou fichiers texte, et activez outils, recherche web ou mode réflexion quand le modèle les prend en charge."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions confirmées par les sources",
        "content": [
          "**Chaque point ci-dessous provient de la description de l’App Store, du site du développeur ou du README du dépôt ; aucun n’a été testé de façon indépendante.**"
        ],
        "items": [
          "**Plusieurs backends.** Ollama, LM Studio, Ollama Cloud et tout serveur compatible OpenAI, avec plusieurs serveurs enregistrés, clés d’API et en-têtes personnalisés entre lesquels vous basculez.",
          "**Modèles sur l’appareil.** Modèles MLX pour Apple silicon, y compris tout modèle MLX que vous recherchez et téléchargez, ainsi qu’Apple Foundation Models ; les notes de la version 2.3 mentionnent l’appel d’outils pour les modèles MiniCPM5.",
          "**Outils et recherche web.** Les modèles peuvent appeler des outils, chercher sur le web, récupérer des pages et calculer en plusieurs étapes, sans clé d’API pour la recherche web.",
          "**Contrôle du chat.** Prompt système, modèle, température, taille de contexte et limite de jetons propres à chaque conversation, mode réflexion, reprise de génération et branches de chat.",
          "**Fichiers et sauvegarde.** Pièces jointes image, PDF, CSV et texte, export et import des conversations, et chats temporaires qui ne laissent aucune trace."
        ],
        "note": "La fiche, le site et les conditions d’utilisation disent que Reins Pro débloque des fonctions supplémentaires sans les énumérer ; on ne sait donc pas lesquelles des fonctions ci-dessus sont gratuites."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flux de données et confidentialité",
        "content": [
          "**La politique de confidentialité, mise à jour le 20 septembre 2026, indique que le développeur ne collecte, ne stocke ni ne surveille de données personnelles, d’historique de chat ni de prompts, et n’utilise ni analytique ni télémétrie.** Les chats, réglages, serveurs enregistrés et modèles téléchargés sont stockés sur l’appareil. En mode serveur, prompts et images vont uniquement à l’adresse que vous saisissez ; le développeur affirme ne s’interposer nulle part.",
          "Avec un modèle sur l’appareil, la politique dit que prompts, images et réponses sont traités entièrement sur l’appareil. Les fichiers de modèle viennent de Hugging Face, qui voit le téléchargement selon sa propre politique. Le partage facultatif sur le réseau local est désactivé par défaut ; une fois activé, tout appareil du même réseau peut envoyer des prompts à votre téléphone sans mot de passe, c’est pourquoi la politique recommande de ne l’utiliser que sur des réseaux de confiance."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce sont des déclarations du développeur, non des résultats d’audit, et le code source actuel n’est pas publié. PromptQuorum n’a pas inspecté le trafic réseau de l’appli, et les sources ne disent pas quel service répond aux recherches web ni comment il les traite."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui s’adresse l’appli",
        "items": [
          "**Les utilisateurs d’Ollama ou de LM Studio** qui veulent un client sur téléphone pour les modèles déjà hébergés chez eux.",
          "**Les propriétaires d’iPhone soucieux de confidentialité** qui préfèrent une appli sans connexion ni analytique, telle que le développeur la décrit.",
          "**Les curieux d’Apple silicon** qui veulent essayer des modèles MLX hors ligne sur un iPhone ou un iPad avant de payer."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n’avons pas pu vérifier",
        "items": [
          "**Performances.** La vitesse, l’usage mémoire, la consommation de batterie et le plus grand modèle qui tourne sur un iPhone ou iPad donné n’ont pas été testés.",
          "**Fonctions Pro.** Les sources n’énumèrent pas ce que Reins Pro débloque ni ce que la version gratuite limite.",
          "**Recherche web.** Le service derrière la recherche intégrée et la destination de ces requêtes ne sont pas indiqués.",
          "**Statut open source.** Le dépôt contient un fichier de licence GPL-3.0, mais son README dit qu’il ne contient le code que jusqu’à la version 1.3.4, tandis que les conditions d’utilisation interdisent de copier, modifier et décompiler l’appli actuelle.",
          "**Autres plateformes.** Le site parle de « Mobile » et « Desktop » ; les seuls téléchargements Android et macOS trouvés sont des fichiers de la version 1.3.0 de mars 2025 sur GitHub, et la version Mac de la version 2 n’est pas décrite."
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
            "Plateformes": "iPhone, iPad, Mac dans la fiche",
            "Prix / licence": "Gratuit + achats / code fermé",
            "Différence clé": "Propose aussi un accès à distance et des API cloud facultatives"
          },
          {
            "Appli": "[Enchanted](/fr/power-local-llm/enchanted-review)",
            "Plateformes": "iPhone, Mac",
            "Prix / licence": "Gratuit / Apache 2.0",
            "Différence clé": "Client Ollama qui exige un serveur Ollama distinct"
          },
          {
            "Appli": "[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)",
            "Plateformes": "iOS, Android",
            "Prix / licence": "Gratuit / MIT",
            "Différence clé": "Appli de chat open source sur l’appareil, aussi sur Android"
          }
        ],
        "note": "Vérifiez le prix, la licence et les plateformes actuels de chaque appli sur sa propre fiche avant de choisir."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "Existe-t-il une version de Reins pour Android ou Windows ?",
            "a": "La branche actuelle de l’App Store vise les appareils Apple. GitHub Releases contient un APK Android et un DMG macOS, mais ils datent de la version 1.3.0 de mars 2025, et le README dit que le dépôt ne couvre le code que jusqu’à la 1.3.4."
          },
          {
            "q": "Quels modèles Reins peut-il exécuter sur le téléphone ?",
            "a": "D’après la fiche, des modèles MLX, y compris tout modèle MLX que vous recherchez et téléchargez, ainsi qu’Apple Foundation Models. Les notes de la version 2.3 citent MiniCPM5 et LFM 2.5 ; aucune liste d’iPhone compatibles n’est donnée."
          },
          {
            "q": "La recherche web exige-t-elle une clé d’API ?",
            "a": "Le développeur dit que non : la recherche web est intégrée et sans clé. Les sources ne disent pas quel service de recherche elle utilise."
          },
          {
            "q": "Combien coûte Reins Pro hors des États-Unis ?",
            "a": "Dans les App Store consultés le 30 octobre 2026, mensuel, annuel et à vie coûtaient 7,99 €, 44,99 € et 99,99 € en Allemagne ; 5,99 €, 34,99 € et 99,99 € en Espagne ; 7,99 €, 39,99 € et 99,99 € en France ; 1 000 ¥, 5 000 ¥ et 15 000 ¥ au Japon ; 8 800 ₩, 44 000 ₩ et 149 000 ₩ en Corée du Sud ; et 19,90 R$, 119,90 R$ et 599,90 R$ au Brésil. Aux États-Unis : 6,99 $, 39,99 $ et 99,99 $."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Reins est un moyen activement maintenu et sans connexion d’atteindre depuis un iPhone ou un iPad un serveur Ollama ou LM Studio domestique, avec la possibilité d’exécuter des modèles MLX hors ligne sur l’appareil. En revanche, la version 2 est fermée, vient d’un seul développeur, et les sources ne disent pas ce que débloque la formule Pro payante ni comment les modèles sur l’appareil se comportent. Elle convient à ceux qui font déjà tourner leur propre serveur et peuvent d’abord essayer le téléchargement gratuit ; qui a besoin d’affirmations de confidentialité auditées doit lire la politique comme une déclaration, non comme une preuve."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Reins sur l’App Store](https://apps.apple.com/app/id6739738501) — description, historique des versions, configuration requise et prix des achats intégrés par boutique, consultés le 30 octobre 2026.",
          "[Site web de Reins](https://getreins.app) — liste des fonctions et liens vers les documents juridiques, consulté le 30 octobre 2026.",
          "[Politique de confidentialité de Reins](https://getreins.app/privacy) — collecte de données, traitement sur l’appareil et partage réseau, mise à jour le 20 septembre 2026.",
          "[Conditions d’utilisation de Reins](https://getreins.app/terms) — conditions de licence et d’achat de Reins Pro, consultées le 30 octobre 2026.",
          "[Reins sur GitHub](https://github.com/ibrahimcetin/reins) — README, fichier de licence et versions, consultés le 30 octobre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "À lire aussi",
        "items": [
          "[Test de LM Mini](/fr/power-local-llm/lm-mini-review) — une appli de chat pour iPhone et iPad avec modèles sur l’appareil et connexion à votre propre serveur.",
          "[Test d’Enchanted](/fr/power-local-llm/enchanted-review) — un client Ollama gratuit sous licence Apache 2.0 pour iPhone et Mac.",
          "[Test de PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat gratuit et open source sur l’appareil pour iOS et Android.",
          "[Meilleures applis LLM locales pour iPhone](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le comparatif auquel appartient ce test.",
          "[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale."
        ]
      }
    }
  },
  ja: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-30",
    "dateModified": "2026-10-30",
    "next_refresh_due": "2027-04-30",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/reins-review-hero-ja.webp",
    "title": "Reinsレビュー：OllamaとLM Studio向けのiPhoneチャットアプリ",
    "seoTitle": "Reinsレビュー：Ollama・LM Studio向けiPhoneチャット",
    "intro": "Reinsは、個人開発者のİbrahim Çetinが手がけるiPhone・iPad向けチャットアプリです。自分で運用するOllama、LM Studio、OpenAI互換サーバーに接続でき、バージョン2からは端末上でMLXモデルを実行することもできます。ダウンロードは無料で、有料のReins Proプランがあります。このレビューは[App Storeの掲載情報](https://apps.apple.com/app/id6739738501)、開発者の[公式サイト](https://getreins.app)、プライバシーポリシー、GitHubリポジトリに基づき、2026年10月30日に確認したものです。PromptQuorumはアプリを実際には試していません。",
    "metaDescription": "Reinsのレビュー。OllamaやLM Studioのサーバーに接続し、端末上でMLXモデルも実行できるiPhone・iPad向けチャットアプリ。無料でProプランあり。未検証。",
    "twitterDescription": "Reinsレビュー：自分のOllamaやLM Studioサーバー向けのチャットクライアント。v2から端末上のMLXモデルにも対応。無料でProプランあり。情報源が確認していること、していないこと。",
    "audience": "自宅でOllamaやLM Studioを動かしているiPhone・iPadユーザーで、Reinsにできること、費用、情報源が確認していない主張を知りたい方。",
    "readTime": "6分で読める",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Reins レビュー",
    "targetKeywords": [
      "reins レビュー",
      "reins ollama iosアプリ",
      "ollama クライアント iphone",
      "lm studio iphone アプリ",
      "iphone で ollama を使う",
      "プライベート ai チャット iphone",
      "iphone mlx モデル"
    ],
    "current_models_mentioned": [
      "Gemma",
      "Qwen",
      "Llama",
      "MiniCPM5",
      "LFM 2.5"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Apple silicon"
    ],
    "leadAnswerBlock": "**Reins（バージョン2.3.3、2026年10月21日更新）は、自分で運用するOllama、LM Studio、OpenAI互換サーバーと通信し、端末上でMLXモデルも実行できるiPhone・iPad向けチャットアプリです。**ダウンロードは無料で、任意のReins Proプランがあります。開発者はログイン不要でデータ収集もないと説明しており、ここでの記述はすべてApp Storeの掲載情報、開発者の公式サイト、ポリシー文書に基づきます。",
    "quickAnswerTop": {
      "ja": {
        "question": "Reinsはサーバーが必須ですか。それとも単体でモデルを実行できますか。",
        "answer": "開発者によれば両方可能です。自分で運用するOllama、LM Studio、OpenAI互換サーバーに接続するか、MLXモデルをダウンロードしてiPhoneやiPad上で実行します。プライバシーポリシーには、端末上のモデルではプロンプトと回答が端末内だけで処理されると書かれています。",
        "bullets": [
          "Web検索とツールの利用はAPIキーなしで動作すると開発者は説明しています。",
          "チャットごとにモデル、システムプロンプト、温度、コンテキストサイズを設定できます。",
          "画像、PDF、CSV、テキストファイルを会話に添付できます。",
          "チャットの分岐、エクスポート、インポート、一時チャットに対応します。"
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "クイックアンサー",
        "anchor": "quick-answer"
      },
      {
        "label": "Reinsとは",
        "anchor": "what-is-reins"
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
            "text": "Reinsは、Ollama、LM Studio、その他のOpenAI互換サーバーで使え、端末上でMLXモデルを直接実行することもできるiPhone・iPad向けチャットクライアントです。"
          },
          {
            "type": "plain-terms",
            "text": "モデルを動かしているパソコンをアプリに指定するか、スマートフォンにモデルをダウンロードして、チャットし、ファイルを添付し、モデルにWeb検索をさせます。"
          }
        ],
        "items": [
          "メンテナンス：バージョン2.3.3は2026年10月21日に公開され、GitHubリポジトリの最終プッシュは2026年10月14日のため、更新停滞の警告は不要です。",
          "エンジン：自分のOllama、LM Studio、OpenAI互換サーバー、Ollama Cloud、または端末上のMLXとAppleのFoundation Models。",
          "費用：ダウンロードは無料で、Reins Proは月額・年額・買い切りの3種類です。",
          "ソース：バージョン2以降は非公開で、公開リポジトリのコードはバージョン1.3.4までです。",
          "開発元：個人開発者で、情報源には背後の企業は記載されていません。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "このレビューは、2026年10月30日に確認した開発者のApp Store掲載情報、公式サイト、プライバシーポリシー、利用規約、GitHubリポジトリに基づきます。PromptQuorumはアプリをインストール・実行・計測していないため、速度や回答品質は評価していません。"
          }
        ]
      },
      "overview": {
        "id": "what-is-reins",
        "title": "Reinsとは",
        "content": [
          "**Reinsは、自分でホストするOllama、LM Studio、その他のOpenAI互換サーバーに接続するiPhone・iPad向けチャットクライアントで、バージョン2からは端末上でモデルを実行することもできます。**App Storeでは「Reins: for Ollama & LM Studio」の名称で、デベロッパツールと仕事効率化のカテゴリに、販売元Ibrahim Cetinとして掲載され、初公開は2025年1月2日です。",
          "プロジェクトはオープンソースのOllamaクライアントとして始まり、その後拡張されました。公式サイトはReinsを「サーバーに接続する」か「端末上で直接AIモデルを実行する」アプリと説明し、バージョン2.3のApp Store更新情報ではMLXベースの端末上モデルとローカルネットワークでの共有が紹介されています。掲載情報にはOllama CloudとAppleのFoundation Modelsへの言及もあります。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "入手方法",
        "content": [
          "**ReinsはiPhone・iPad向けにApp Storeで配布されており、現行バージョンのAndroid版・Windows版は提供されていません。**"
        ],
        "columns": [
          "項目",
          "入手方法"
        ],
        "rows": [
          {
            "項目": "iPhone・iPad",
            "入手方法": "[App StoreのReins](https://apps.apple.com/app/id6739738501)、無料ダウンロード（アプリ内課金あり）"
          },
          {
            "項目": "Reins Pro",
            "入手方法": "月額¥1,000、年額¥5,000（1週間の無料体験）、買い切り¥15,000（日本のApp Store）"
          },
          {
            "項目": "公式サイト",
            "入手方法": "[getreins.app](https://getreins.app)"
          },
          {
            "項目": "プライバシーポリシー",
            "入手方法": "[getreins.app/privacy](https://getreins.app/privacy)"
          },
          {
            "項目": "ソースコード",
            "入手方法": "[github.com/ibrahimcetin/reins](https://github.com/ibrahimcetin/reins)、バージョン1.3.4以前のみ"
          }
        ],
        "note": "レビュー対象のバージョンは2.3.3で、App Storeによれば2026年10月21日に公開されました。モデルをダウンロードする前のアプリサイズは72.8 MBです。掲載情報にはmacOS対応も表示され、リポジトリのREADMEもMacに触れていますが、ネイティブのMac版かどうかは書かれていません。価格は日本のApp Storeのもので、国によって異なります。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "動作要件",
        "content": [
          "**App Storeの最小要件はiOS 17.0で、バックグラウンド生成にはiOSまたはiPadOS 26が必要です。**"
        ],
        "columns": [
          "項目",
          "情報源の記載"
        ],
        "rows": [
          {
            "項目": "OS",
            "情報源の記載": "iOSまたはiPadOS 17.0以降。MacではmacOS 14.0以降と表示"
          },
          {
            "項目": "バックグラウンド生成",
            "情報源の記載": "iOSまたはiPadOS 26.0以降で、アプリを離れても回答とダウンロードが続行"
          },
          {
            "項目": "サーバーモード",
            "情報源の記載": "自分で構築・保護するOllama、LM Studio、OpenAI互換サーバーに到達できること"
          },
          {
            "項目": "端末上のモデル",
            "情報源の記載": "Hugging FaceからダウンロードするMLXモデル。メモリやiPhone機種の要件は記載なし"
          },
          {
            "項目": "アカウント",
            "情報源の記載": "不要。開発者はログインがないと説明"
          }
        ],
        "note": "掲載情報には最小RAMの記載がなく、どの端末上モデルがどのiPhone・iPadで動くかも示されていません。"
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
            "whyItMatters": "App StoreからReinsを入手します。アカウントやログインは不要です。"
          },
          {
            "title": "モデルを動かす場所を選ぶ",
            "whyItMatters": "Ollama、LM Studio、OpenAI互換サーバーのアドレスを追加し、必要ならAPIキーやカスタムヘッダーを設定します。または端末上のモデルをダウンロードします。"
          },
          {
            "title": "モデルを選んでチャットする",
            "whyItMatters": "会話ごとにモデルを選び、システムプロンプトや温度、コンテキストサイズなどを設定してチャットを始めます。"
          },
          {
            "title": "ファイル、ツール、Web検索を加える",
            "whyItMatters": "画像、PDF、CSV、テキストファイルを添付し、モデルが対応していればツール、Web検索、思考モードをオンにします。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "情報源で確認できた機能",
        "content": [
          "**以下はすべてApp Storeの説明、公式サイト、リポジトリのREADMEに基づく内容で、独自の検証はしていません。**"
        ],
        "items": [
          "**複数のバックエンド。**Ollama、LM Studio、Ollama Cloud、あらゆるOpenAI互換サーバーに対応し、複数のサーバー、APIキー、カスタムヘッダーを保存して切り替えられます。",
          "**端末上のモデル。**Apple silicon向けのMLXモデル（検索してダウンロードした任意のMLXモデルを含む）とAppleのFoundation Modelsに対応。バージョン2.3の更新情報にはMiniCPM5モデルのツール呼び出しが記載されています。",
          "**ツールとWeb検索。**モデルがツールを呼び出し、Webを検索し、ページを取得し、複数ステップで計算できます。Web検索にAPIキーは不要です。",
          "**チャットの制御。**会話ごとのシステムプロンプト、モデル、温度、コンテキストサイズ、トークン上限、思考モード、生成の続行、チャットの分岐。",
          "**ファイルとバックアップ。**画像、PDF、CSV、テキストの添付、会話のエクスポート・インポート、痕跡を残さない一時チャット。"
        ],
        "note": "掲載情報、公式サイト、利用規約はReins Proで追加機能が使えるとしていますが一覧はないため、上記のうち無料で使える機能は文書化されていません。"
      },
      "privacy": {
        "id": "privacy",
        "title": "データの流れとプライバシー",
        "content": [
          "**2026年9月20日更新のプライバシーポリシーによれば、開発者は個人データ、チャット履歴、プロンプトを収集・保存・監視せず、分析やテレメトリも使いません。**チャット、設定、サーバー情報、ダウンロードしたモデルは端末内に保存されます。サーバーモードでは、プロンプトと画像は入力したアドレスにのみ送られ、開発者は間に入らないと説明しています。",
          "端末上のモデルでは、プロンプト、画像、回答が端末内だけで処理されるとポリシーは述べています。モデルファイルはHugging Faceから取得され、そのダウンロードは同社のポリシーに従って把握されます。ローカルネットワーク共有は任意で、初期設定ではオフです。オンにすると、同じネットワーク上のどの端末もパスワードなしでスマートフォンにプロンプトを送れるため、ポリシーは信頼できるネットワークでのみ使うよう勧めています。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "これらは開発者の表明であり監査結果ではなく、現行のソースコードも公開されていません。PromptQuorumはアプリの通信を検査しておらず、Web検索のリクエストにどのサービスが応答し、どう扱われるかも情報源には書かれていません。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "おすすめできる人",
        "items": [
          "**OllamaやLM Studioを使っている人**：自宅で動かしているモデル用のスマートフォンクライアントを探している場合。",
          "**プライバシーを重視するiPhoneユーザー**：開発者の説明どおり、ログインも分析もないアプリを好む場合。",
          "**Apple siliconを試したい人**：お金を払う前に、iPhoneやiPadでMLXモデルをオフライン動作させてみたい場合。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかった点",
        "items": [
          "**性能。**速度、メモリ使用量、バッテリー消費、特定のiPhone・iPadで動く最大のモデルは未検証です。",
          "**Pro機能。**Reins Proで何が使えるようになるか、無料版で何が制限されるかは情報源に記載がありません。",
          "**Web検索。**内蔵検索の背後にあるサービスと、クエリの送信先は記載されていません。",
          "**オープンソースの状況。**リポジトリにはGPL-3.0のライセンスファイルがありますが、READMEはバージョン1.3.4までのソースしか含まないとしており、利用規約は現行アプリのコピー、改変、リバースエンジニアリングを禁じています。",
          "**他のプラットフォーム。**公式サイトは「Mobile」と「Desktop」に触れていますが、見つかったAndroid版とmacOS版のダウンロードは2025年3月のバージョン1.3.0のGitHub上のファイルのみで、バージョン2のMac版の説明はありません。"
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
            "アプリ": "[LM Mini](/ja/power-local-llm/lm-mini-review)",
            "対応環境": "iPhone・iPad（掲載はMacも）",
            "価格／ライセンス": "無料＋課金／クローズド",
            "主な違い": "リモートアクセスと任意のクラウドAPIにも対応"
          },
          {
            "アプリ": "[Enchanted](/ja/power-local-llm/enchanted-review)",
            "対応環境": "iPhone・Mac",
            "価格／ライセンス": "無料／Apache 2.0",
            "主な違い": "別途Ollamaサーバーが必要なOllamaクライアント"
          },
          {
            "アプリ": "[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)",
            "対応環境": "iOS・Android",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "Androidでも動くオープンソースの端末内チャットアプリ"
          }
        ],
        "note": "選ぶ前に、各アプリの最新の価格、ライセンス、対応環境をそれぞれの掲載ページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "ReinsにAndroid版やWindows版はありますか。",
            "a": "App Storeの現行版はAppleデバイス向けです。GitHub ReleasesにはAndroid用APKとmacOS用DMGがありますが、2025年3月のバージョン1.3.0で、READMEはリポジトリのコードが1.3.4までだと述べています。"
          },
          {
            "q": "Reinsはスマートフォン上でどのモデルを実行できますか。",
            "a": "掲載情報によれば、MLXモデル（検索してダウンロードした任意のMLXモデルを含む）とAppleのFoundation Modelsです。バージョン2.3の更新情報にはMiniCPM5とLFM 2.5が挙がっていますが、対応iPhoneの一覧はありません。"
          },
          {
            "q": "Web検索にAPIキーは必要ですか。",
            "a": "開発者は不要と説明しています。Web検索は内蔵でキーは要りません。どの検索サービスを使うかは情報源に書かれていません。"
          },
          {
            "q": "米国以外でReins Proはいくらですか。",
            "a": "2026年10月30日に確認したApp Storeでは、月額・年額・買い切りの順に、ドイツは7,99 €・44,99 €・99,99 €、スペインは5,99 €・34,99 €・99,99 €、フランスは7,99 €・39,99 €・99,99 €、日本は¥1,000・¥5,000・¥15,000、韓国は₩8,800・₩44,000・₩149,000、ブラジルはR$ 19,90・R$ 119,90・R$ 599,90でした。米国は$6.99・$39.99・$99.99です。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "総評",
        "content": "Reinsは、積極的に更新されているログイン不要のアプリで、iPhoneやiPadから自宅のOllamaやLM Studioサーバーに接続でき、端末上でMLXモデルをオフライン実行する選択肢もあります。一方で、バージョン2はクローズドソースで、開発者は個人1名、有料Proプランで何が使えるようになるか、端末上モデルの性能がどうかは情報源から分かりません。すでに自分のサーバーを運用していて、まず無料版を試せる人に向いています。監査済みのプライバシー保証が必要な場合、ポリシーは証明ではなく表明として読んでください。"
      },
      "sources": {
        "id": "sources",
        "title": "情報源",
        "items": [
          "[App StoreのReins](https://apps.apple.com/app/id6739738501) — 説明、バージョン履歴、動作要件、ストアごとのアプリ内課金価格。2026年10月30日確認。",
          "[Reins公式サイト](https://getreins.app) — 機能一覧とポリシー文書へのリンク。2026年10月30日確認。",
          "[Reinsのプライバシーポリシー](https://getreins.app/privacy) — データ収集、端末内処理、ネットワーク共有。最終更新2026年9月20日。",
          "[Reinsの利用規約](https://getreins.app/terms) — ライセンス条件とReins Proの購入条件。2026年10月30日確認。",
          "[GitHubのReins](https://github.com/ibrahimcetin/reins) — README、ライセンスファイル、リリース。2026年10月30日確認。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[LM Miniレビュー](/ja/power-local-llm/lm-mini-review) — 端末上のモデルと自分のサーバーへの接続を備えたiPhone・iPad向けチャットアプリ。",
          "[Enchantedレビュー](/ja/power-local-llm/enchanted-review) — iPhoneとMac向けの無料のApache 2.0 Ollamaクライアント。",
          "[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの無料のオープンソース端末内チャットクライアント。",
          "[iPhone向けローカルLLMアプリ比較](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — このレビューが属する比較記事。",
          "[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。"
        ]
      }
    }
  },
  pt: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-30",
    "dateModified": "2026-10-30",
    "next_refresh_due": "2027-04-30",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/reins-review-hero-pt.webp",
    "title": "Análise do Reins: app de chat para Ollama e LM Studio no iPhone",
    "seoTitle": "Análise do Reins: chat no iPhone para Ollama e LM Studio",
    "intro": "O Reins é um app de chat para iPhone e iPad do desenvolvedor independente İbrahim Çetin que se conecta ao seu próprio servidor Ollama, LM Studio ou compatível com OpenAI e, desde a versão 2, também pode executar modelos MLX no próprio aparelho. O download é gratuito, com planos pagos Reins Pro. Esta análise se baseia na [página da App Store](https://apps.apple.com/app/id6739738501), no [site](https://getreins.app) do desenvolvedor, na política de privacidade e no repositório do GitHub, consultados em 30 de outubro de 2026; a PromptQuorum não testou o app na prática.",
    "metaDescription": "Análise do Reins: app de chat para iPhone e iPad para o seu servidor Ollama ou LM Studio, com modelos MLX no aparelho. Grátis, planos Pro; não testado.",
    "twitterDescription": "Análise do Reins: um cliente de chat para o seu servidor Ollama ou LM Studio, com modelos MLX no aparelho desde a v2. Grátis com planos Pro; o que as fontes confirmam e o que não.",
    "audience": "Usuários de iPhone e iPad que rodam Ollama ou LM Studio em casa e querem saber o que o Reins faz, quanto custa e quais afirmações as fontes deixam sem confirmação.",
    "readTime": "6 min de leitura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "análise do Reins",
    "targetKeywords": [
      "análise reins",
      "reins ollama app ios",
      "cliente ollama iphone",
      "app lm studio iphone",
      "usar ollama no iphone",
      "chat de ia privado iphone",
      "modelos mlx no iphone"
    ],
    "current_models_mentioned": [
      "Gemma",
      "Qwen",
      "Llama",
      "MiniCPM5",
      "LFM 2.5"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Apple silicon"
    ],
    "leadAnswerBlock": "**O Reins (versão 2.3.3, atualizado em 21 de outubro de 2026) é um app de chat para iPhone e iPad que conversa com o seu próprio servidor Ollama, LM Studio ou compatível com OpenAI e também pode executar modelos MLX no aparelho.** O download é gratuito e há planos opcionais Reins Pro. O desenvolvedor diz que não há login nem coleta de dados, e cada afirmação aqui vem da página da App Store, do site do desenvolvedor e de seus documentos legais.",
    "quickAnswerTop": {
      "pt": {
        "question": "O Reins precisa de um servidor ou consegue executar modelos sozinho?",
        "answer": "Segundo o desenvolvedor, os dois: você se conecta a um servidor Ollama, LM Studio ou compatível com OpenAI que você mesmo mantém, ou baixa modelos MLX e os executa no iPhone ou iPad. A política de privacidade diz que, com modelos no aparelho, prompts e respostas são processados apenas no aparelho.",
        "bullets": [
          "A busca na web e o uso de ferramentas funcionam sem chave de API, segundo o desenvolvedor.",
          "Cada chat pode ter seu próprio modelo, prompt de sistema, temperatura e tamanho de contexto.",
          "Imagens, PDFs, CSV e arquivos de texto podem ser anexados a uma conversa.",
          "Os chats podem ser ramificados, exportados, importados ou mantidos como temporários."
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "Resposta rápida",
        "anchor": "quick-answer"
      },
      {
        "label": "O que é o Reins?",
        "anchor": "what-is-reins"
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
            "text": "O Reins é um cliente de chat para iPhone e iPad que funciona com Ollama, LM Studio e outros servidores compatíveis com OpenAI e que também pode executar modelos MLX diretamente no aparelho."
          },
          {
            "type": "plain-terms",
            "text": "Você aponta o app para o computador que roda seus modelos ou baixa um modelo no celular, e depois conversa, anexa arquivos e deixa o modelo pesquisar na web."
          }
        ],
        "items": [
          "Manutenção: a versão 2.3.3 foi lançada em 21 de outubro de 2026 e o repositório do GitHub foi atualizado pela última vez em 14 de outubro de 2026, portanto não há aviso de projeto abandonado.",
          "Motores: seu próprio servidor Ollama, LM Studio ou compatível com OpenAI, Ollama Cloud, ou MLX e Apple Foundation Models no aparelho.",
          "Custo: download gratuito com o Reins Pro nos planos mensal, anual e vitalício.",
          "Código: fechado desde a versão 2; o repositório público contém o código apenas até a versão 1.3.4.",
          "Desenvolvedor: um desenvolvedor individual, sem empresa por trás do app segundo as fontes."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta análise se baseia na página da App Store, no site, na política de privacidade, nos termos de uso e no repositório do GitHub do desenvolvedor, consultados em 30 de outubro de 2026. A PromptQuorum não instalou, executou nem mediu o app, portanto a velocidade e a qualidade das respostas não são avaliadas."
          }
        ]
      },
      "overview": {
        "id": "what-is-reins",
        "title": "O que é o Reins?",
        "content": [
          "**O Reins é um cliente de chat para iPhone e iPad que se conecta a um servidor Ollama, LM Studio ou outro compatível com OpenAI que você hospeda e que, desde a versão 2, também pode executar modelos no aparelho.** A App Store o lista como “Reins: for Ollama & LM Studio” em Ferramentas para desenvolvedores e Produtividade, do vendedor Ibrahim Cetin, e ele apareceu pela primeira vez em 2 de janeiro de 2025.",
          "O projeto começou como um cliente Ollama de código aberto e foi ampliado depois: o site do desenvolvedor descreve o Reins como conexão ao seu servidor “ou” execução de modelos de IA diretamente no aparelho, e as notas da App Store da versão 2.3 apresentam modelos MLX no aparelho e seu compartilhamento pela rede local. A página também menciona o Ollama Cloud e os Foundation Models da Apple."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Onde obter",
        "content": [
          "**O Reins é um download da App Store para iPhone e iPad; a versão atual não é oferecida como build para Android ou Windows.**"
        ],
        "columns": [
          "Opção",
          "Como obter"
        ],
        "rows": [
          {
            "Opção": "iPhone e iPad",
            "Como obter": "[Reins na App Store](https://apps.apple.com/app/id6739738501), download gratuito com compras no app"
          },
          {
            "Opção": "Reins Pro",
            "Como obter": "Mensal R$ 19,90, anual R$ 119,90 (uma semana de teste), vitalício R$ 599,90 (App Store brasileira)"
          },
          {
            "Opção": "Site",
            "Como obter": "[getreins.app](https://getreins.app)"
          },
          {
            "Opção": "Política de privacidade",
            "Como obter": "[getreins.app/privacy](https://getreins.app/privacy)"
          },
          {
            "Opção": "Código-fonte",
            "Como obter": "[github.com/ibrahimcetin/reins](https://github.com/ibrahimcetin/reins), somente a versão 1.3.4 e anteriores"
          }
        ],
        "note": "Versão analisada: 2.3.3, lançada em 21 de outubro de 2026 segundo a App Store; o app tem 72,8 MB antes de qualquer download de modelo. A página também mostra compatibilidade com macOS e o README do repositório cita o Mac, mas ela não diz se é uma versão nativa para Mac. Os preços vêm da App Store brasileira e variam conforme o país."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**A App Store indica iOS 17.0 como mínimo, e a geração em segundo plano exige iOS ou iPadOS 26.**"
        ],
        "columns": [
          "Item",
          "O que as fontes dizem"
        ],
        "rows": [
          {
            "Item": "Sistema operacional",
            "O que as fontes dizem": "iOS ou iPadOS 17.0 ou posterior; macOS 14.0 ou posterior é exibido para o Mac"
          },
          {
            "Item": "Geração em segundo plano",
            "O que as fontes dizem": "Respostas e downloads continuam ao sair do app no iOS ou iPadOS 26.0 ou posterior"
          },
          {
            "Item": "Modo servidor",
            "O que as fontes dizem": "Um servidor Ollama, LM Studio ou compatível com OpenAI acessível, que você mesmo configura e protege"
          },
          {
            "Item": "Modelos no aparelho",
            "O que as fontes dizem": "Modelos MLX baixados do Hugging Face; a página não informa requisitos de memória nem de modelo de iPhone"
          },
          {
            "Item": "Conta",
            "O que as fontes dizem": "Nenhuma; o desenvolvedor diz que não há login"
          }
        ],
        "note": "A página não indica RAM mínima, e não se diz quais modelos no aparelho rodam em qual iPhone ou iPad."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Como começar",
        "content": [
          "**Os passos seguem a descrição do próprio desenvolvedor; a PromptQuorum não os executou.**"
        ],
        "numberedItems": [
          {
            "title": "Instale o app",
            "whyItMatters": "Baixe o Reins na App Store; não é preciso conta nem login."
          },
          {
            "title": "Escolha onde os modelos rodam",
            "whyItMatters": "Adicione o endereço do seu servidor Ollama, LM Studio ou compatível com OpenAI, com chave de API ou cabeçalhos personalizados se precisar, ou baixe um modelo no aparelho."
          },
          {
            "title": "Escolha um modelo e converse",
            "whyItMatters": "Selecione um modelo por conversa, defina o prompt de sistema e opções como temperatura e tamanho de contexto, e inicie o chat."
          },
          {
            "title": "Adicione arquivos, ferramentas e busca na web",
            "whyItMatters": "Anexe imagens, PDFs, CSV ou arquivos de texto e ative ferramentas, busca na web ou modo de raciocínio quando o modelo os suportar."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos confirmados pelas fontes",
        "content": [
          "**Cada item abaixo vem da descrição da App Store, do site do desenvolvedor ou do README do repositório; nenhum foi testado de forma independente.**"
        ],
        "items": [
          "**Vários backends.** Ollama, LM Studio, Ollama Cloud e qualquer servidor compatível com OpenAI, com vários servidores salvos, chaves de API e cabeçalhos personalizados entre os quais você alterna.",
          "**Modelos no aparelho.** Modelos MLX para Apple silicon, incluindo qualquer modelo MLX que você pesquise e baixe, além dos Apple Foundation Models; as notas da versão 2.3 citam chamada de ferramentas para modelos MiniCPM5.",
          "**Ferramentas e busca na web.** Os modelos podem chamar ferramentas, pesquisar na web, buscar páginas e calcular em várias etapas, sem chave de API para a busca na web.",
          "**Controle do chat.** Prompt de sistema, modelo, temperatura, tamanho de contexto e limite de tokens próprios por conversa, modo de raciocínio, continuar a geração e ramificação de chats.",
          "**Arquivos e backup.** Anexos de imagem, PDF, CSV e texto, exportação e importação de conversas e chats temporários que não deixam rastro."
        ],
        "note": "A página, o site e os termos de uso dizem que o Reins Pro libera recursos adicionais, mas não os listam; portanto não está documentado quais dos itens acima são gratuitos."
      },
      "privacy": {
        "id": "privacy",
        "title": "Fluxo de dados e privacidade",
        "content": [
          "**A política de privacidade, atualizada pela última vez em 20 de setembro de 2026, diz que o desenvolvedor não coleta, armazena nem monitora dados pessoais, histórico de chat ou prompts, e não usa análise nem telemetria.** Chats, ajustes, servidores salvos e modelos baixados ficam no aparelho. No modo servidor, prompts e imagens vão apenas para o endereço que você informa; o desenvolvedor afirma não se colocar no meio.",
          "Com um modelo no aparelho, a política diz que prompts, imagens e respostas são processados inteiramente no aparelho. Os arquivos de modelo vêm do Hugging Face, que vê o download conforme a própria política. O compartilhamento opcional na rede local vem desativado; depois de ativado, qualquer dispositivo na mesma rede pode enviar prompts ao seu celular sem senha, por isso a política recomenda usá-lo só em redes confiáveis."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "São declarações do desenvolvedor, não resultados de auditoria, e o código-fonte atual não é publicado. A PromptQuorum não inspecionou o tráfego de rede do app, e as fontes não dizem qual serviço responde às buscas na web nem como as trata."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem é",
        "items": [
          "**Usuários de Ollama ou LM Studio** que querem um cliente no celular para os modelos que já rodam em casa.",
          "**Donos de iPhone atentos à privacidade** que preferem um app sem login e sem análise, como o desenvolvedor o descreve.",
          "**Entusiastas de Apple silicon** que querem testar modelos MLX offline em um iPhone ou iPad antes de pagar qualquer coisa."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Desempenho.** Velocidade, uso de memória, consumo de bateria e o maior modelo que roda em um iPhone ou iPad específico não foram testados.",
          "**Recursos Pro.** As fontes não listam o que o Reins Pro libera nem o que a versão gratuita limita.",
          "**Busca na web.** O serviço por trás da busca integrada e o destino dessas consultas não são informados.",
          "**Situação de código aberto.** O repositório tem um arquivo de licença GPL-3.0, mas o README diz que ele contém o código apenas até a versão 1.3.4, enquanto os termos de uso proíbem copiar, modificar e fazer engenharia reversa do app atual.",
          "**Outras plataformas.** O site fala em “Mobile” e “Desktop”; os únicos downloads de Android e macOS encontrados são arquivos da versão 1.3.0 de março de 2025 no GitHub, e a versão para Mac da versão 2 não é descrita."
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
            "Plataformas": "iPhone, iPad, Mac na página",
            "Preço / licença": "Grátis + compras / código fechado",
            "Diferença principal": "Oferece também acesso remoto e APIs de nuvem opcionais"
          },
          {
            "App": "[Enchanted](/pt/power-local-llm/enchanted-review)",
            "Plataformas": "iPhone, Mac",
            "Preço / licença": "Grátis / Apache 2.0",
            "Diferença principal": "Cliente Ollama que precisa de um servidor Ollama à parte"
          },
          {
            "App": "[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)",
            "Plataformas": "iOS, Android",
            "Preço / licença": "Grátis / MIT",
            "Diferença principal": "App de chat no aparelho de código aberto, que roda também no Android"
          }
        ],
        "note": "Confirme o preço, a licença e as plataformas atuais de cada app na própria página antes de escolher."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "Existe uma versão do Reins para Android ou Windows?",
            "a": "A linha atual da App Store é para aparelhos Apple. O GitHub Releases guarda um APK de Android e um DMG de macOS, mas são da versão 1.3.0 de março de 2025, e o README diz que o repositório cobre o código apenas até a 1.3.4."
          },
          {
            "q": "Quais modelos o Reins consegue executar no celular?",
            "a": "Segundo a página, modelos MLX, incluindo qualquer modelo MLX que você pesquise e baixe, além dos Apple Foundation Models. As notas da versão 2.3 citam MiniCPM5 e LFM 2.5; não há lista de iPhones compatíveis."
          },
          {
            "q": "A busca na web precisa de chave de API?",
            "a": "O desenvolvedor diz que não: a busca na web é integrada e dispensa chave. As fontes não dizem qual serviço de busca ela usa."
          },
          {
            "q": "Quanto custa o Reins Pro fora dos Estados Unidos?",
            "a": "Nas lojas da App Store verificadas em 30 de outubro de 2026, mensal, anual e vitalício custavam 7,99 €, 44,99 € e 99,99 € na Alemanha; 5,99 €, 34,99 € e 99,99 € na Espanha; 7,99 €, 39,99 € e 99,99 € na França; ¥1.000, ¥5.000 e ¥15.000 no Japão; ₩8.800, ₩44.000 e ₩149.000 na Coreia do Sul; e R$ 19,90, R$ 119,90 e R$ 599,90 no Brasil. Nos EUA são US$ 6,99, US$ 39,99 e US$ 99,99."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O Reins é um caminho ativamente mantido e sem login para alcançar, de um iPhone ou iPad, um servidor Ollama ou LM Studio doméstico, com a opção de executar modelos MLX offline no aparelho. Em contrapartida, a versão 2 é de código fechado, vem de um único desenvolvedor, e as fontes não dizem o que o plano Pro pago libera nem como os modelos no aparelho se saem. Serve para quem já mantém um servidor próprio e pode testar primeiro o download gratuito; quem precisa de afirmações de privacidade auditadas deve ler a política como declaração, não como prova."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Reins na App Store](https://apps.apple.com/app/id6739738501) — descrição, histórico de versões, requisitos e preços de compras no app por loja, consultados em 30 de outubro de 2026.",
          "[Site do Reins](https://getreins.app) — lista de recursos e links para os documentos legais, consultado em 30 de outubro de 2026.",
          "[Política de privacidade do Reins](https://getreins.app/privacy) — coleta de dados, processamento no aparelho e compartilhamento em rede, atualizada em 20 de setembro de 2026.",
          "[Termos de uso do Reins](https://getreins.app/terms) — termos de licença e condições de compra do Reins Pro, consultados em 30 de outubro de 2026.",
          "[Reins no GitHub](https://github.com/ibrahimcetin/reins) — README, arquivo de licença e versões, consultados em 30 de outubro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leitura relacionada",
        "items": [
          "[Análise do LM Mini](/pt/power-local-llm/lm-mini-review) — um app de chat para iPhone e iPad com modelos no aparelho e conexão ao seu próprio servidor.",
          "[Análise do Enchanted](/pt/power-local-llm/enchanted-review) — um cliente Ollama gratuito, sob Apache 2.0, para iPhone e Mac.",
          "[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat no aparelho, gratuito e de código aberto, para iOS e Android.",
          "[Melhores apps de LLM local para iPhone](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o comparativo a que esta análise pertence.",
          "[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local."
        ]
      }
    }
  },
  ar: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-30",
    "dateModified": "2026-10-30",
    "next_refresh_due": "2027-04-30",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/reins-review-hero-ar.webp",
    "title": "مراجعة Reins: تطبيق دردشة لـ iPhone مع Ollama وLM Studio",
    "seoTitle": "مراجعة Reins: تطبيق دردشة لـ iPhone مع Ollama وLM Studio",
    "intro": "Reins تطبيق دردشة لـ iPhone وiPad من المطوّر المستقل İbrahim Çetin، يتصل بخادم Ollama أو LM Studio أو أي خادم متوافق مع OpenAI تديره بنفسك، ويستطيع منذ الإصدار 2 تشغيل نماذج MLX على الجهاز نفسه. التنزيل مجاني مع خطط Reins Pro المدفوعة. تستند هذه المراجعة إلى [صفحة التطبيق في App Store](https://apps.apple.com/app/id6739738501) و[موقع](https://getreins.app) المطوّر وسياسة الخصوصية ومستودع GitHub، وقد روجعت جميعها في 30 أكتوبر 2026؛ ولم تجرّب PromptQuorum التطبيق عمليًا.",
    "metaDescription": "مراجعة Reins: تطبيق دردشة لـ iPhone وiPad يتصل بخادم Ollama أو LM Studio ويشغّل نماذج MLX على الجهاز أيضًا. مجاني مع خطط Pro، ولم يُختبر عمليًا.",
    "twitterDescription": "مراجعة Reins: عميل دردشة لخادم Ollama أو LM Studio الخاص بك، مع نماذج MLX على الجهاز منذ الإصدار 2. مجاني مع خطط Pro؛ ما تؤكده المصادر وما لا تؤكده.",
    "audience": "مستخدمو iPhone وiPad الذين يشغّلون Ollama أو LM Studio في المنزل ويريدون معرفة ما يفعله Reins وكم يكلّف وأي الادعاءات لم تؤكدها المصادر.",
    "readTime": "6 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة Reins",
    "targetKeywords": [
      "مراجعة reins",
      "تطبيق reins ollama ios",
      "عميل ollama لـ iphone",
      "تطبيق lm studio لـ iphone",
      "استخدام ollama على iphone",
      "دردشة ذكاء اصطناعي خاصة iphone",
      "نماذج mlx على iphone"
    ],
    "current_models_mentioned": [
      "Gemma",
      "Qwen",
      "Llama",
      "MiniCPM5",
      "LFM 2.5"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Apple silicon"
    ],
    "leadAnswerBlock": "**Reins (الإصدار 2.3.3، حُدّث في 21 أكتوبر 2026) تطبيق دردشة لـ iPhone وiPad يتحدث مع خادم Ollama أو LM Studio أو خادم متوافق مع OpenAI تديره بنفسك، ويستطيع أيضًا تشغيل نماذج MLX على الجهاز.** التنزيل مجاني وتتوفر خطط Reins Pro اختيارية. يقول المطوّر إنه لا يوجد تسجيل دخول ولا جمع بيانات، وكل عبارة هنا مصدرها صفحة App Store وموقع المطوّر ووثائقه القانونية.",
    "quickAnswerTop": {
      "ar": {
        "question": "هل يحتاج Reins إلى خادم، أم يستطيع تشغيل النماذج بنفسه؟",
        "answer": "بحسب المطوّر، الأمران ممكنان: تتصل بخادم Ollama أو LM Studio أو خادم متوافق مع OpenAI تديره بنفسك، أو تنزّل نماذج MLX وتشغّلها على iPhone أو iPad. وتذكر سياسة الخصوصية أن الأوامر والإجابات تُعالج على الجهاز فقط عند استخدام نماذج على الجهاز.",
        "bullets": [
          "يعمل البحث على الويب واستخدام الأدوات بلا مفتاح API، بحسب المطوّر.",
          "يمكن أن يكون لكل محادثة نموذجها وموجّه نظامها ودرجة حرارتها وحجم سياقها.",
          "يمكن إرفاق الصور وملفات PDF وCSV والملفات النصية بالمحادثة.",
          "يمكن تفريع المحادثات وتصديرها واستيرادها أو جعلها مؤقتة."
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "إجابة سريعة",
        "anchor": "quick-answer"
      },
      {
        "label": "ما هو Reins؟",
        "anchor": "what-is-reins"
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
            "text": "Reins عميل دردشة لـ iPhone وiPad يعمل مع Ollama وLM Studio وخوادم أخرى متوافقة مع OpenAI، ويستطيع أيضًا تشغيل نماذج MLX مباشرة على الجهاز."
          },
          {
            "type": "plain-terms",
            "text": "توجّه التطبيق إلى الحاسوب الذي يشغّل نماذجك أو تنزّل نموذجًا على الهاتف، ثم تدردش وترفق الملفات وتدع النموذج يبحث في الويب."
          }
        ],
        "items": [
          "الصيانة: صدر الإصدار 2.3.3 في 21 أكتوبر 2026 وآخر دفع إلى مستودع GitHub كان في 14 أكتوبر 2026، فلا ينطبق تحذير المشروع المهمل.",
          "المحركات: خادم Ollama أو LM Studio أو خادم متوافق مع OpenAI تديره بنفسك، أو Ollama Cloud، أو MLX وApple Foundation Models على الجهاز.",
          "التكلفة: تنزيل مجاني مع Reins Pro بخطط شهرية وسنوية ومدى الحياة.",
          "الشيفرة: مغلقة منذ الإصدار 2؛ المستودع العام يحتوي الشيفرة حتى الإصدار 1.3.4 فقط.",
          "المطوّر: مطوّر فرد، ولا تذكر المصادر شركة وراء التطبيق."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "تستند هذه المراجعة إلى صفحة App Store وموقع المطوّر وسياسة الخصوصية وشروط الاستخدام ومستودع GitHub، وقد روجعت في 30 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تشغّله ولم تقِس أداءه، لذلك لا تُقيَّم السرعة ولا جودة الإجابات."
          }
        ]
      },
      "overview": {
        "id": "what-is-reins",
        "title": "ما هو Reins؟",
        "content": [
          "**Reins عميل دردشة لـ iPhone وiPad يتصل بخادم Ollama أو LM Studio أو خادم آخر متوافق مع OpenAI تستضيفه بنفسك، ويستطيع منذ الإصدار 2 تشغيل النماذج على الجهاز أيضًا.** يدرجه App Store باسم “Reins: for Ollama & LM Studio” ضمن أدوات المطورين والإنتاجية، من البائع Ibrahim Cetin، وظهر لأول مرة في 2 يناير 2025.",
          "بدأ المشروع عميلًا مفتوح المصدر لـ Ollama ثم توسّع: يصف موقع المطوّر Reins بأنه يتصل بخادمك “أو” يشغّل نماذج الذكاء الاصطناعي مباشرة على الجهاز، وتقدّم ملاحظات App Store للإصدار 2.3 نماذج MLX على الجهاز ومشاركتها عبر الشبكة المحلية. وتذكر الصفحة أيضًا Ollama Cloud ونماذج Foundation Models من Apple."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "كيف تحصل عليه",
        "content": [
          "**يُنزَّل Reins من App Store لأجهزة iPhone وiPad؛ ولا يُعرض الإصدار الحالي كنسخة لـ Android أو Windows.**"
        ],
        "columns": [
          "الخيار",
          "مصدر الحصول عليه"
        ],
        "rows": [
          {
            "الخيار": "iPhone وiPad",
            "مصدر الحصول عليه": "[Reins في App Store](https://apps.apple.com/app/id6739738501)، تنزيل مجاني مع مشتريات داخل التطبيق"
          },
          {
            "الخيار": "Reins Pro",
            "مصدر الحصول عليه": "شهريًا $6.99، سنويًا $39.99 (تجربة أسبوع)، مدى الحياة $99.99 (المتجر الأمريكي)"
          },
          {
            "الخيار": "الموقع",
            "مصدر الحصول عليه": "[getreins.app](https://getreins.app)"
          },
          {
            "الخيار": "سياسة الخصوصية",
            "مصدر الحصول عليه": "[getreins.app/privacy](https://getreins.app/privacy)"
          },
          {
            "الخيار": "الشيفرة المصدرية",
            "مصدر الحصول عليه": "[github.com/ibrahimcetin/reins](https://github.com/ibrahimcetin/reins)، الإصدار 1.3.4 وما قبله فقط"
          }
        ],
        "note": "الإصدار المراجَع: 2.3.3، صدر في 21 أكتوبر 2026 بحسب App Store؛ وحجم التطبيق 72.8 ميغابايت قبل تنزيل أي نموذج. تُظهر الصفحة أيضًا توافقًا مع macOS ويذكر README المستودع جهاز Mac، لكنها لا تبيّن إن كانت نسخة Mac أصلية. الأسعار من المتجر الأمريكي وتختلف حسب البلد."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "المتطلبات",
        "content": [
          "**يذكر App Store الحد الأدنى iOS 17.0، ويتطلب التوليد في الخلفية iOS أو iPadOS 26.**"
        ],
        "columns": [
          "البند",
          "ما تقوله المصادر"
        ],
        "rows": [
          {
            "البند": "نظام التشغيل",
            "ما تقوله المصادر": "iOS أو iPadOS 17.0 أو أحدث؛ ويظهر macOS 14.0 أو أحدث لجهاز Mac"
          },
          {
            "البند": "التوليد في الخلفية",
            "ما تقوله المصادر": "تستمر الإجابات والتنزيلات بعد مغادرة التطبيق على iOS أو iPadOS 26.0 أو أحدث"
          },
          {
            "البند": "وضع الخادم",
            "ما تقوله المصادر": "خادم Ollama أو LM Studio أو خادم متوافق مع OpenAI يمكن الوصول إليه، وتتولى إعداده وتأمينه بنفسك"
          },
          {
            "البند": "النماذج على الجهاز",
            "ما تقوله المصادر": "نماذج MLX تُنزَّل من Hugging Face؛ ولا تذكر الصفحة متطلبات الذاكرة أو طراز iPhone"
          },
          {
            "البند": "الحساب",
            "ما تقوله المصادر": "لا يوجد؛ يقول المطوّر إنه لا يوجد تسجيل دخول"
          }
        ],
        "note": "لا تذكر الصفحة حدًّا أدنى لذاكرة RAM، ولا يُذكر أي النماذج على الجهاز يعمل على أي iPhone أو iPad."
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
            "whyItMatters": "نزّل Reins من App Store؛ لا حاجة إلى حساب أو تسجيل دخول."
          },
          {
            "title": "اختر مكان تشغيل النماذج",
            "whyItMatters": "أضف عنوان خادم Ollama أو LM Studio أو الخادم المتوافق مع OpenAI، مع مفتاح API أو ترويسات مخصصة إن لزم، أو نزّل نموذجًا على الجهاز بدلًا من ذلك."
          },
          {
            "title": "اختر نموذجًا وابدأ الدردشة",
            "whyItMatters": "اختر نموذجًا لكل محادثة، وحدّد موجّه النظام وخيارات مثل درجة الحرارة وحجم السياق، ثم ابدأ الدردشة."
          },
          {
            "title": "أضف الملفات والأدوات والبحث على الويب",
            "whyItMatters": "أرفق الصور وملفات PDF وCSV أو الملفات النصية، وفعّل الأدوات أو البحث على الويب أو وضع التفكير عندما يدعمها النموذج."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "الميزات التي أكدتها المصادر",
        "content": [
          "**كل بند أدناه مصدره وصف App Store أو موقع المطوّر أو README المستودع؛ ولم يُختبر أي منها بشكل مستقل.**"
        ],
        "items": [
          "**عدة واجهات خلفية.** Ollama وLM Studio وOllama Cloud وأي خادم متوافق مع OpenAI، مع حفظ عدة خوادم ومفاتيح API وترويسات مخصصة والتبديل بينها.",
          "**نماذج على الجهاز.** نماذج MLX لشرائح Apple بما فيها أي نموذج MLX تبحث عنه وتنزّله، إضافة إلى Apple Foundation Models؛ وتذكر ملاحظات الإصدار 2.3 استدعاء الأدوات لنماذج MiniCPM5.",
          "**الأدوات والبحث على الويب.** يمكن للنماذج استدعاء الأدوات والبحث في الويب وجلب الصفحات والحساب عبر خطوات متعددة، دون مفتاح API للبحث على الويب.",
          "**التحكم في المحادثة.** موجّه نظام ونموذج ودرجة حرارة وحجم سياق وحد للرموز لكل محادثة، مع وضع التفكير ومتابعة التوليد وتفريع المحادثات.",
          "**الملفات والنسخ الاحتياطي.** مرفقات الصور وPDF وCSV والنصوص، وتصدير المحادثات واستيرادها، ومحادثات مؤقتة لا تترك أثرًا."
        ],
        "note": "تقول الصفحة والموقع وشروط الاستخدام إن Reins Pro يفتح ميزات إضافية لكنها لا تسردها، لذلك لا يوجد توثيق لأي البنود أعلاه مجاني."
      },
      "privacy": {
        "id": "privacy",
        "title": "تدفق البيانات والخصوصية",
        "content": [
          "**تقول سياسة الخصوصية، المحدّثة آخر مرة في 20 سبتمبر 2026، إن المطوّر لا يجمع بيانات شخصية ولا سجل محادثات ولا أوامر ولا يخزّنها ولا يراقبها، ولا يستخدم أي تحليلات أو قياسات عن بُعد.** تُخزَّن المحادثات والإعدادات وإدخالات الخوادم والنماذج المنزَّلة على الجهاز. في وضع الخادم تُرسل الأوامر والصور إلى العنوان الذي تدخله فقط؛ ويقول المطوّر إنه لا يقف وسيطًا.",
          "مع نموذج على الجهاز، تقول السياسة إن الأوامر والصور والإجابات تُعالج بالكامل على الجهاز. تأتي ملفات النماذج من Hugging Face التي ترى التنزيل وفق سياستها الخاصة. مشاركة الشبكة المحلية الاختيارية معطّلة افتراضيًا؛ وعند تفعيلها يستطيع أي جهاز على الشبكة نفسها إرسال أوامر إلى هاتفك دون كلمة مرور، لذلك توصي السياسة باستخدامها على الشبكات الموثوقة فقط."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "هذه تصريحات من المطوّر وليست نتائج تدقيق، والشيفرة المصدرية الحالية غير منشورة. لم تفحص PromptQuorum حركة الشبكة للتطبيق، ولا تذكر المصادر أي خدمة تجيب عن طلبات البحث على الويب ولا كيف تتعامل معها."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**مستخدمو Ollama أو LM Studio** الذين يريدون عميلًا على الهاتف للنماذج التي تعمل في المنزل أصلًا.",
          "**ملّاك iPhone المهتمون بالخصوصية** ممن يفضلون تطبيقًا بلا تسجيل دخول ولا تحليلات كما يصفه المطوّر.",
          "**هواة شرائح Apple** الذين يريدون تجربة نماذج MLX دون اتصال على iPhone أو iPad قبل دفع أي مبلغ."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**الأداء.** لم تُختبر السرعة ولا استهلاك الذاكرة ولا استنزاف البطارية ولا أكبر نموذج يعمل على iPhone أو iPad بعينه.",
          "**ميزات Pro.** لا تسرد المصادر ما يفتحه Reins Pro أو ما تقيّده النسخة المجانية.",
          "**البحث على الويب.** لا تُذكر الخدمة وراء البحث المدمج ولا وجهة هذه الاستعلامات.",
          "**وضع المصدر المفتوح.** يضم المستودع ملف ترخيص GPL-3.0 لكن README يقول إنه يحتوي المصدر حتى الإصدار 1.3.4 فقط، بينما تحظر شروط الاستخدام نسخ التطبيق الحالي وتعديله وهندسته العكسية.",
          "**منصات أخرى.** يذكر الموقع “Mobile” و“Desktop”؛ وكل ما وجدناه من تنزيلات Android وmacOS هو ملفات الإصدار 1.3.0 من مارس 2025 على GitHub، ولا توصف نسخة Mac للإصدار 2."
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
            "المنصات": "iPhone وiPad، وMac في الصفحة",
            "السعر / الترخيص": "مجاني + مشتريات / مغلق",
            "الفرق الرئيسي": "يوفّر أيضًا وصولًا عن بُعد وواجهات سحابية اختيارية"
          },
          {
            "التطبيق": "[Enchanted](/ar/power-local-llm/enchanted-review)",
            "المنصات": "iPhone وMac",
            "السعر / الترخيص": "مجاني / Apache 2.0",
            "الفرق الرئيسي": "عميل Ollama يحتاج إلى خادم Ollama منفصل"
          },
          {
            "التطبيق": "[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)",
            "المنصات": "iOS وAndroid",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الرئيسي": "تطبيق دردشة مفتوح المصدر على الجهاز ويعمل على Android أيضًا"
          }
        ],
        "note": "تأكد من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته الخاصة قبل الاختيار."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل توجد نسخة من Reins لـ Android أو Windows؟",
            "a": "الخط الحالي في App Store لأجهزة Apple. تضم إصدارات GitHub ملف APK لـ Android وملف DMG لـ macOS، لكنها من الإصدار 1.3.0 في مارس 2025، ويقول README إن المستودع يغطي الشيفرة حتى 1.3.4 فقط."
          },
          {
            "q": "ما النماذج التي يستطيع Reins تشغيلها على الهاتف؟",
            "a": "بحسب الصفحة: نماذج MLX بما فيها أي نموذج MLX تبحث عنه وتنزّله، إضافة إلى Apple Foundation Models. تذكر ملاحظات الإصدار 2.3 نموذجي MiniCPM5 وLFM 2.5؛ ولا تُعطى قائمة بأجهزة iPhone المدعومة."
          },
          {
            "q": "هل يحتاج البحث على الويب إلى مفتاح API؟",
            "a": "يقول المطوّر لا: البحث على الويب مدمج ولا يحتاج إلى مفتاح. ولا تذكر المصادر أي خدمة بحث يستخدمها."
          },
          {
            "q": "كم يكلّف Reins Pro خارج الولايات المتحدة؟",
            "a": "في متاجر App Store التي روجعت في 30 أكتوبر 2026، كانت أسعار الشهري والسنوي ومدى الحياة على الترتيب: ألمانيا 7,99 € و44,99 € و99,99 €؛ إسبانيا 5,99 € و34,99 € و99,99 €؛ فرنسا 7,99 € و39,99 € و99,99 €؛ اليابان ¥1,000 و¥5,000 و¥15,000؛ كوريا الجنوبية ₩8,800 و₩44,000 و₩149,000؛ البرازيل R$ 19,90 وR$ 119,90 وR$ 599,90. وفي الولايات المتحدة $6.99 و$39.99 و$99.99."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "Reins طريقة محدّثة باستمرار وبلا تسجيل دخول للوصول من iPhone أو iPad إلى خادم Ollama أو LM Studio في المنزل، مع خيار تشغيل نماذج MLX دون اتصال على الجهاز. في المقابل، الإصدار 2 مغلق المصدر ومن مطوّر فرد، ولا تبيّن المصادر ما تفتحه خطة Pro المدفوعة ولا مدى جودة أداء النماذج على الجهاز. يناسب من يشغّل خادمه الخاص أصلًا ويستطيع تجربة التنزيل المجاني أولًا؛ ومن يحتاج إلى ضمانات خصوصية مدقَّقة فعليه أن يقرأ السياسة بوصفها تصريحًا لا دليلًا."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[Reins في App Store](https://apps.apple.com/app/id6739738501) — الوصف وسجل الإصدارات والمتطلبات وأسعار المشتريات داخل التطبيق لكل متجر، روجعت في 30 أكتوبر 2026.",
          "[موقع Reins](https://getreins.app) — قائمة الميزات وروابط الوثائق القانونية، روجع في 30 أكتوبر 2026.",
          "[سياسة خصوصية Reins](https://getreins.app/privacy) — جمع البيانات والمعالجة على الجهاز ومشاركة الشبكة، آخر تحديث في 20 سبتمبر 2026.",
          "[شروط استخدام Reins](https://getreins.app/terms) — شروط الترخيص وشروط شراء Reins Pro، روجعت في 30 أكتوبر 2026.",
          "[Reins على GitHub](https://github.com/ibrahimcetin/reins) — README وملف الترخيص والإصدارات، روجعت في 30 أكتوبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة LM Mini](/ar/power-local-llm/lm-mini-review) — تطبيق دردشة لـ iPhone وiPad بنماذج على الجهاز واتصال بخادمك الخاص.",
          "[مراجعة Enchanted](/ar/power-local-llm/enchanted-review) — عميل Ollama مجاني بترخيص Apache 2.0 لـ iPhone وMac.",
          "[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني ومفتوح المصدر على الجهاز لـ iOS وAndroid.",
          "[أفضل تطبيقات النماذج المحلية لـ iPhone](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — المقارنة الشاملة التي تنتمي إليها هذه المراجعة.",
          "[دليل برمجيات النماذج المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية."
        ]
      }
    }
  },
  zh: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-30",
    "dateModified": "2026-10-30",
    "next_refresh_due": "2027-04-30",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/reins-review-hero-zh.webp",
    "title": "Reins 评测：面向 Ollama 和 LM Studio 的 iPhone 聊天应用",
    "seoTitle": "Reins 评测：Ollama、LM Studio 的 iPhone 客户端",
    "intro": "Reins 是独立开发者 İbrahim Çetin 开发的 iPhone 和 iPad 聊天应用，可连接你自己搭建的 Ollama、LM Studio 或兼容 OpenAI 的服务器，自第 2 版起还能在设备上运行 MLX 模型。应用可免费下载，另有付费的 Reins Pro 方案。本评测基于 [App Store 页面](https://apps.apple.com/app/id6739738501)、开发者的[官网](https://getreins.app)、隐私政策和 GitHub 仓库，核查日期为 2026 年 10 月 30 日；PromptQuorum 未亲自测试该应用。",
    "metaDescription": "Reins 评测：连接你的 Ollama 或 LM Studio 服务器、并可在设备上运行 MLX 模型的 iPhone 和 iPad 聊天应用。免费，设有 Pro 方案，未经实测。",
    "twitterDescription": "Reins 评测：面向自建 Ollama 或 LM Studio 服务器的聊天客户端，第 2 版起支持设备端 MLX 模型。免费，设有 Pro 方案；资料证实了什么，没证实什么。",
    "audience": "在家运行 Ollama 或 LM Studio 的 iPhone 和 iPad 用户，想了解 Reins 能做什么、价格如何，以及哪些说法资料并未证实。",
    "readTime": "阅读约6分钟",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Reins 评测",
    "targetKeywords": [
      "reins 评测",
      "reins ollama ios 应用",
      "ollama 客户端 iphone",
      "lm studio iphone 应用",
      "在 iphone 上使用 ollama",
      "私密 ai 聊天 iphone",
      "iphone mlx 模型"
    ],
    "current_models_mentioned": [
      "Gemma",
      "Qwen",
      "Llama",
      "MiniCPM5",
      "LFM 2.5"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Apple silicon"
    ],
    "leadAnswerBlock": "**Reins（版本 2.3.3，2026 年 10 月 21 日更新）是一款 iPhone 和 iPad 聊天应用，可与你自己的 Ollama、LM Studio 或兼容 OpenAI 的服务器通信，也能在设备上运行 MLX 模型。**应用可免费下载，并提供可选的 Reins Pro 方案。开发者称应用无需登录、不收集数据；本文所有陈述均来自 App Store 页面、开发者官网及其政策文件。",
    "quickAnswerTop": {
      "zh": {
        "question": "Reins 必须有服务器，还是能自己运行模型？",
        "answer": "据开发者说明，两种方式都可以：连接你自己运行的 Ollama、LM Studio 或兼容 OpenAI 的服务器，或下载 MLX 模型在 iPhone 或 iPad 上运行。隐私政策称，使用设备端模型时，提示词和回答只在设备上处理。",
        "bullets": [
          "据开发者称，网页搜索和工具调用无需 API 密钥。",
          "每个对话可以有各自的模型、系统提示词、温度和上下文大小。",
          "可在对话中附加图片、PDF、CSV 和文本文件。",
          "对话可分支、导出、导入，也可设为临时对话。"
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "快速回答",
        "anchor": "quick-answer"
      },
      {
        "label": "Reins 是什么？",
        "anchor": "what-is-reins"
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
            "text": "Reins 是一款 iPhone 和 iPad 聊天客户端，可配合 Ollama、LM Studio 及其他兼容 OpenAI 的服务器使用，也能直接在设备上运行 MLX 模型。"
          },
          {
            "type": "plain-terms",
            "text": "你可以让应用指向运行模型的电脑，或把模型下载到手机上，然后聊天、附加文件，并让模型搜索网页。"
          }
        ],
        "items": [
          "维护情况：2.3.3 版于 2026 年 10 月 21 日发布，GitHub 仓库最近一次推送在 2026 年 10 月 14 日，因此无需显示停更警告。",
          "推理引擎：你自己的 Ollama、LM Studio 或兼容 OpenAI 的服务器、Ollama Cloud，或设备上的 MLX 与 Apple Foundation Models。",
          "费用：免费下载，Reins Pro 提供月付、年付和买断方案。",
          "源代码：第 2 版起闭源；公开仓库只包含截至 1.3.4 版的代码。",
          "开发者：个人开发者，资料中没有提到背后的公司。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本评测基于 2026 年 10 月 30 日核查的开发者 App Store 页面、官网、隐私政策、使用条款和 GitHub 仓库。PromptQuorum 未安装、运行或测量该应用，因此不评估其速度和回答质量。"
          }
        ]
      },
      "overview": {
        "id": "what-is-reins",
        "title": "Reins 是什么？",
        "content": [
          "**Reins 是一款 iPhone 和 iPad 聊天客户端，可连接自行托管的 Ollama、LM Studio 或其他兼容 OpenAI 的服务器，自第 2 版起还能在设备上运行模型。**App Store 将其列为“Reins: for Ollama & LM Studio”，分类为开发者工具和效率，销售方为 Ibrahim Cetin，首次上架时间为 2025 年 1 月 2 日。",
          "该项目最初是开源的 Ollama 客户端，后来不断扩展：开发者官网称 Reins 可连接你的服务器，“或”直接在设备上运行 AI 模型；第 2.3 版的 App Store 更新说明介绍了基于 MLX 的设备端模型及其在局域网内的共享。页面还提到 Ollama Cloud 和 Apple 的 Foundation Models。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "content": [
          "**Reins 通过 App Store 提供给 iPhone 和 iPad；当前版本没有 Android 或 Windows 构建。**"
        ],
        "columns": [
          "选项",
          "获取方式"
        ],
        "rows": [
          {
            "选项": "iPhone 和 iPad",
            "获取方式": "[App Store 上的 Reins](https://apps.apple.com/app/id6739738501)，免费下载，含应用内购买"
          },
          {
            "选项": "Reins Pro",
            "获取方式": "美国区：月付 $6.99，年付 $39.99（含一周试用），买断 $99.99"
          },
          {
            "选项": "官网",
            "获取方式": "[getreins.app](https://getreins.app)"
          },
          {
            "选项": "隐私政策",
            "获取方式": "[getreins.app/privacy](https://getreins.app/privacy)"
          },
          {
            "选项": "源代码",
            "获取方式": "[github.com/ibrahimcetin/reins](https://github.com/ibrahimcetin/reins)，仅限 1.3.4 版及更早版本"
          }
        ],
        "note": "评测版本：2.3.3，据 App Store 于 2026 年 10 月 21 日发布；下载任何模型前应用大小为 72.8 MB。页面还显示支持 macOS，仓库 README 也提到 Mac，但页面没有说明是否为原生 Mac 版本。价格取自美国区，各国家和地区有所不同。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "系统要求",
        "content": [
          "**App Store 标注的最低系统为 iOS 17.0，后台生成需要 iOS 或 iPadOS 26。**"
        ],
        "columns": [
          "项目",
          "资料中的说法"
        ],
        "rows": [
          {
            "项目": "操作系统",
            "资料中的说法": "iOS 或 iPadOS 17.0 及以上；Mac 显示为 macOS 14.0 及以上"
          },
          {
            "项目": "后台生成",
            "资料中的说法": "在 iOS 或 iPadOS 26.0 及以上，离开应用后回答和下载仍会继续"
          },
          {
            "项目": "服务器模式",
            "资料中的说法": "需有可访问的 Ollama、LM Studio 或兼容 OpenAI 的服务器，由你自行搭建并保障安全"
          },
          {
            "项目": "设备端模型",
            "资料中的说法": "从 Hugging Face 下载的 MLX 模型；页面未给出内存或 iPhone 机型要求"
          },
          {
            "项目": "账户",
            "资料中的说法": "无；开发者称无需登录"
          }
        ],
        "note": "页面没有标明最低内存，也没有说明哪些设备端模型能在哪款 iPhone 或 iPad 上运行。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "如何上手",
        "content": [
          "**以下步骤依据开发者自己的描述，PromptQuorum 并未实际操作。**"
        ],
        "numberedItems": [
          {
            "title": "安装应用",
            "whyItMatters": "从 App Store 获取 Reins，无需账户或登录。"
          },
          {
            "title": "选择模型运行位置",
            "whyItMatters": "添加 Ollama、LM Studio 或兼容 OpenAI 的服务器地址，如有需要可设置 API 密钥或自定义请求头；也可改为下载设备端模型。"
          },
          {
            "title": "选择模型并聊天",
            "whyItMatters": "为每个对话选择模型，设置系统提示词以及温度、上下文大小等选项，然后开始聊天。"
          },
          {
            "title": "添加文件、工具和网页搜索",
            "whyItMatters": "附加图片、PDF、CSV 或文本文件，并在模型支持时开启工具、网页搜索或思考模式。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "资料证实的功能",
        "content": [
          "**以下每一项都来自 App Store 描述、开发者官网或仓库 README，均未经独立测试。**"
        ],
        "items": [
          "**多种后端。**支持 Ollama、LM Studio、Ollama Cloud 和任何兼容 OpenAI 的服务器，可保存多个服务器、API 密钥和自定义请求头并随时切换。",
          "**设备端模型。**面向 Apple 芯片的 MLX 模型（包括你搜索并下载的任意 MLX 模型）以及 Apple Foundation Models；2.3 版更新说明提到 MiniCPM5 模型的工具调用。",
          "**工具与网页搜索。**模型可调用工具、搜索网页、获取页面并分多步计算，网页搜索无需 API 密钥。",
          "**对话控制。**每个对话可单独设置系统提示词、模型、温度、上下文大小和 token 上限，另有思考模式、继续生成和对话分支。",
          "**文件与备份。**支持图片、PDF、CSV 和文本附件，可导出和导入对话，临时对话不留痕迹。"
        ],
        "note": "页面、官网和使用条款都说 Reins Pro 会解锁额外功能，但没有列出具体内容，因此上述功能哪些免费并无文档说明。"
      },
      "privacy": {
        "id": "privacy",
        "title": "数据流向与隐私",
        "content": [
          "**隐私政策最近更新于 2026 年 9 月 20 日，称开发者不收集、存储或监控个人数据、聊天记录和提示词，也不使用分析或遥测。**聊天记录、设置、服务器条目和已下载的模型都保存在设备上。在服务器模式下，提示词和图片只发送到你输入的地址；开发者称自己不处于中间环节。",
          "使用设备端模型时，政策称提示词、图片和回答完全在设备上处理。模型文件来自 Hugging Face，下载行为按其自身政策处理。局域网共享为可选功能，默认关闭；开启后，同一网络中的任何设备都可无需密码向你的手机发送提示词，因此政策建议只在可信网络中使用。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "这些是开发者的声明，而非审计结果，且当前版本的源代码未公开。PromptQuorum 没有检查该应用的网络流量，资料也没有说明由哪项服务响应网页搜索请求以及如何处理这些请求。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合谁使用",
        "items": [
          "**Ollama 或 LM Studio 用户**：想要一个手机客户端来使用家里已在运行的模型。",
          "**注重隐私的 iPhone 用户**：偏好开发者所描述的无需登录、无分析的应用。",
          "**Apple 芯片爱好者**：想在付费之前，先在 iPhone 或 iPad 上离线试用 MLX 模型。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们无法核实的内容",
        "items": [
          "**性能。**速度、内存占用、耗电量，以及特定 iPhone 或 iPad 能运行的最大模型均未经测试。",
          "**Pro 功能。**资料没有列出 Reins Pro 解锁什么，也没有说明免费版有哪些限制。",
          "**网页搜索。**内置搜索背后的服务以及这些查询发往何处均未说明。",
          "**开源状态。**仓库带有 GPL-3.0 许可证文件，但其 README 称只包含截至 1.3.4 版的源代码，而使用条款禁止复制、修改和逆向工程当前版本的应用。",
          "**其他平台。**官网提到“Mobile”和“Desktop”；找到的 Android 和 macOS 下载仅是 GitHub 上 2025 年 3 月的 1.3.0 版文件，第 2 版的 Mac 版本没有说明。"
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
            "应用": "[LM Mini](/zh/power-local-llm/lm-mini-review)",
            "平台": "iPhone、iPad，页面含 Mac",
            "价格 / 许可": "免费 + 内购 / 闭源",
            "主要区别": "另提供远程访问和可选云端 API"
          },
          {
            "应用": "[Enchanted](/zh/power-local-llm/enchanted-review)",
            "平台": "iPhone、Mac",
            "价格 / 许可": "免费 / Apache 2.0",
            "主要区别": "需另配 Ollama 服务器的 Ollama 客户端"
          },
          {
            "应用": "[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)",
            "平台": "iOS、Android",
            "价格 / 许可": "免费 / MIT",
            "主要区别": "开源的设备端聊天应用，也支持 Android"
          }
        ],
        "note": "选择前，请在各应用自己的页面上确认其当前价格、许可证和支持平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "Reins 有 Android 或 Windows 版本吗？",
            "a": "App Store 当前版本面向 Apple 设备。GitHub Releases 中有 Android APK 和 macOS DMG，但它们是 2025 年 3 月的 1.3.0 版，且 README 称仓库只涵盖截至 1.3.4 的代码。"
          },
          {
            "q": "Reins 能在手机上运行哪些模型？",
            "a": "据页面说明，是 MLX 模型（包括你搜索并下载的任意 MLX 模型）以及 Apple Foundation Models。2.3 版更新说明提到 MiniCPM5 和 LFM 2.5；没有给出支持的 iPhone 列表。"
          },
          {
            "q": "网页搜索需要 API 密钥吗？",
            "a": "开发者称不需要：网页搜索内置，无需密钥。资料没有说明它使用哪家搜索服务。"
          },
          {
            "q": "在美国以外，Reins Pro 多少钱？",
            "a": "在 2026 年 10 月 30 日核查的 App Store 地区，月付、年付和买断价格依次为：德国 7,99 €、44,99 €、99,99 €；西班牙 5,99 €、34,99 €、99,99 €；法国 7,99 €、39,99 €、99,99 €；日本 ¥1,000、¥5,000、¥15,000；韩国 ₩8,800、₩44,000、₩149,000；巴西 R$ 19,90、R$ 119,90、R$ 599,90。美国为 $6.99、$39.99 和 $99.99。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "Reins 更新活跃、无需登录，可让 iPhone 或 iPad 连接家中的 Ollama 或 LM Studio 服务器，并可选择在设备上离线运行 MLX 模型。不过第 2 版是闭源的，出自单个开发者之手，资料也没有说明付费 Pro 方案解锁什么，或设备端模型表现如何。它适合已经自建服务器、可先试用免费版的用户；需要经审计的隐私保证的人，应把政策当作声明，而不是证明。"
      },
      "sources": {
        "id": "sources",
        "title": "资料来源",
        "items": [
          "[App Store 上的 Reins](https://apps.apple.com/app/id6739738501) — 描述、版本历史、系统要求以及各地区应用内购买价格，核查于 2026 年 10 月 30 日。",
          "[Reins 官网](https://getreins.app) — 功能列表及政策文件链接，核查于 2026 年 10 月 30 日。",
          "[Reins 隐私政策](https://getreins.app/privacy) — 数据收集、设备端处理和网络共享，最近更新于 2026 年 9 月 20 日。",
          "[Reins 使用条款](https://getreins.app/terms) — 许可条款和 Reins Pro 购买条件，核查于 2026 年 10 月 30 日。",
          "[GitHub 上的 Reins](https://github.com/ibrahimcetin/reins) — README、许可证文件和发布记录，核查于 2026 年 10 月 30 日。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "相关阅读",
        "items": [
          "[LM Mini 评测](/zh/power-local-llm/lm-mini-review) — 带设备端模型并可连接你自己服务器的 iPhone 和 iPad 聊天应用。",
          "[Enchanted 评测](/zh/power-local-llm/enchanted-review) — 面向 iPhone 和 Mac 的免费 Apache 2.0 Ollama 客户端。",
          "[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 面向 iOS 和 Android 的免费开源设备端聊天客户端。",
          "[iPhone 本地大模型应用推荐](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 本评测所属的综合对比。",
          "[本地大模型软件目录](/zh/directory) — 本地 AI 工具的完整目录。"
        ]
      }
    }
  },
  ko: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-30",
    "dateModified": "2026-10-30",
    "next_refresh_due": "2027-04-30",
    "theme": "Mobile & Edge LLMs",
    "heroImage": "/images/reins-review-hero-ko.webp",
    "title": "Reins 리뷰: Ollama·LM Studio용 iPhone 채팅 앱",
    "seoTitle": "Reins 리뷰: Ollama·LM Studio용 iPhone 채팅",
    "intro": "Reins는 독립 개발자 İbrahim Çetin이 만든 iPhone·iPad용 채팅 앱으로, 직접 운영하는 Ollama, LM Studio 또는 OpenAI 호환 서버에 연결하며 버전 2부터는 기기에서 MLX 모델도 실행할 수 있습니다. 다운로드는 무료이고 유료 Reins Pro 요금제가 있습니다. 이 리뷰는 [App Store 페이지](https://apps.apple.com/app/id6739738501), 개발자의 [공식 웹사이트](https://getreins.app), 개인정보 처리방침, GitHub 저장소를 2026년 10월 30일에 확인한 내용에 근거하며, PromptQuorum이 앱을 직접 테스트하지는 않았습니다.",
    "metaDescription": "Reins 리뷰: Ollama·LM Studio 서버에 연결하고 기기에서 MLX 모델도 실행하는 iPhone·iPad 채팅 앱. 무료, Pro 요금제 있음, 직접 테스트하지 않음.",
    "twitterDescription": "Reins 리뷰: 직접 운영하는 Ollama·LM Studio 서버용 채팅 클라이언트로, v2부터 기기 내 MLX 모델 지원. 무료이며 Pro 요금제 있음. 출처가 확인한 것과 확인하지 못한 것.",
    "audience": "집에서 Ollama나 LM Studio를 운영하는 iPhone·iPad 사용자 가운데 Reins의 기능, 가격, 출처가 확인하지 못한 주장을 알고 싶은 분.",
    "readTime": "6분 읽기",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Reins 리뷰",
    "targetKeywords": [
      "reins 리뷰",
      "reins ollama ios 앱",
      "ollama 클라이언트 iphone",
      "lm studio iphone 앱",
      "iphone에서 ollama 사용",
      "프라이빗 ai 채팅 iphone",
      "iphone mlx 모델"
    ],
    "current_models_mentioned": [
      "Gemma",
      "Qwen",
      "Llama",
      "MiniCPM5",
      "LFM 2.5"
    ],
    "current_hardware_mentioned": [
      "iPhone",
      "iPad",
      "Apple silicon"
    ],
    "leadAnswerBlock": "**Reins(버전 2.3.3, 2026년 10월 21일 업데이트)는 직접 운영하는 Ollama, LM Studio 또는 OpenAI 호환 서버와 통신하고 기기에서 MLX 모델도 실행할 수 있는 iPhone·iPad용 채팅 앱입니다.** 다운로드는 무료이며 선택형 Reins Pro 요금제가 있습니다. 개발자는 로그인과 데이터 수집이 없다고 밝히고 있으며, 여기 모든 서술은 App Store 페이지, 개발자 웹사이트, 정책 문서에 근거합니다.",
    "quickAnswerTop": {
      "ko": {
        "question": "Reins는 서버가 꼭 필요한가요, 아니면 혼자서 모델을 실행할 수 있나요?",
        "answer": "개발자에 따르면 둘 다 가능합니다. 직접 운영하는 Ollama, LM Studio 또는 OpenAI 호환 서버에 연결하거나, MLX 모델을 내려받아 iPhone이나 iPad에서 실행할 수 있습니다. 개인정보 처리방침은 기기 내 모델을 쓸 때 프롬프트와 답변이 기기에서만 처리된다고 설명합니다.",
        "bullets": [
          "개발자에 따르면 웹 검색과 도구 사용은 API 키 없이 작동합니다.",
          "채팅마다 모델, 시스템 프롬프트, 온도, 컨텍스트 크기를 따로 지정할 수 있습니다.",
          "이미지, PDF, CSV, 텍스트 파일을 대화에 첨부할 수 있습니다.",
          "채팅을 분기하거나 내보내고 가져오며, 임시 채팅으로도 쓸 수 있습니다."
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "빠른 답변",
        "anchor": "quick-answer"
      },
      {
        "label": "Reins란?",
        "anchor": "what-is-reins"
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
            "text": "Reins는 Ollama, LM Studio 및 기타 OpenAI 호환 서버와 함께 쓰며 기기에서 MLX 모델을 직접 실행할 수도 있는 iPhone·iPad용 채팅 클라이언트입니다."
          },
          {
            "type": "plain-terms",
            "text": "모델이 돌아가는 컴퓨터를 앱에 지정하거나 휴대폰에 모델을 내려받은 뒤, 채팅하고 파일을 첨부하며 모델이 웹을 검색하게 합니다."
          }
        ],
        "items": [
          "유지 관리: 버전 2.3.3이 2026년 10월 21일에 출시되었고 GitHub 저장소의 마지막 푸시는 2026년 10월 14일이어서 업데이트 중단 경고는 해당하지 않습니다.",
          "엔진: 직접 운영하는 Ollama, LM Studio, OpenAI 호환 서버, Ollama Cloud, 또는 기기의 MLX와 Apple Foundation Models.",
          "비용: 무료 다운로드이며 Reins Pro는 월간·연간·평생 요금제입니다.",
          "소스: 버전 2부터 비공개이며 공개 저장소에는 버전 1.3.4까지의 코드만 있습니다.",
          "개발자: 개인 개발자이며 출처에는 앱 뒤의 회사가 언급되지 않습니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이 리뷰는 2026년 10월 30일에 확인한 개발자의 App Store 페이지, 웹사이트, 개인정보 처리방침, 이용 약관, GitHub 저장소에 근거합니다. PromptQuorum은 앱을 설치하거나 실행하거나 측정하지 않았으므로 속도와 답변 품질은 평가하지 않습니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-reins",
        "title": "Reins란?",
        "content": [
          "**Reins는 직접 호스팅하는 Ollama, LM Studio 또는 기타 OpenAI 호환 서버에 연결하는 iPhone·iPad용 채팅 클라이언트이며, 버전 2부터는 기기에서 모델을 실행할 수도 있습니다.** App Store에는 “Reins: for Ollama & LM Studio”라는 이름으로 개발자 도구 및 생산성 카테고리에 판매자 Ibrahim Cetin으로 등록되어 있고, 처음 등장한 날짜는 2025년 1월 2일입니다.",
          "이 프로젝트는 오픈소스 Ollama 클라이언트로 시작해 이후 확장되었습니다. 공식 웹사이트는 Reins를 서버에 연결하거나 “또는” 기기에서 AI 모델을 직접 실행하는 앱으로 설명하며, 버전 2.3의 App Store 업데이트 노트는 MLX 기반 기기 내 모델과 로컬 네트워크 공유를 소개합니다. 페이지에는 Ollama Cloud와 Apple의 Foundation Models도 언급되어 있습니다."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "설치 방법",
        "content": [
          "**Reins는 iPhone·iPad용으로 App Store에서 내려받으며, 현재 버전은 Android나 Windows 빌드로 제공되지 않습니다.**"
        ],
        "columns": [
          "옵션",
          "입수 방법"
        ],
        "rows": [
          {
            "옵션": "iPhone·iPad",
            "입수 방법": "[App Store의 Reins](https://apps.apple.com/app/id6739738501), 무료 다운로드(앱 내 구입 포함)"
          },
          {
            "옵션": "Reins Pro",
            "입수 방법": "월간 ₩8,800, 연간 ₩44,000(1주 무료 체험), 평생 ₩149,000(한국 스토어)"
          },
          {
            "옵션": "웹사이트",
            "입수 방법": "[getreins.app](https://getreins.app)"
          },
          {
            "옵션": "개인정보 처리방침",
            "입수 방법": "[getreins.app/privacy](https://getreins.app/privacy)"
          },
          {
            "옵션": "소스 코드",
            "입수 방법": "[github.com/ibrahimcetin/reins](https://github.com/ibrahimcetin/reins), 버전 1.3.4 이하만"
          }
        ],
        "note": "리뷰한 버전은 2.3.3으로 App Store에 따르면 2026년 10월 21일에 출시되었으며, 모델을 내려받기 전 앱 크기는 72.8 MB입니다. 페이지에는 macOS 호환도 표시되고 저장소 README도 Mac을 언급하지만, 네이티브 Mac 버전인지는 나와 있지 않습니다. 가격은 한국 스토어 기준이며 국가마다 다릅니다."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "요구 사항",
        "content": [
          "**App Store의 최소 요구 사항은 iOS 17.0이며, 백그라운드 생성에는 iOS 또는 iPadOS 26이 필요합니다.**"
        ],
        "columns": [
          "항목",
          "출처의 기재 내용"
        ],
        "rows": [
          {
            "항목": "운영체제",
            "출처의 기재 내용": "iOS 또는 iPadOS 17.0 이상, Mac은 macOS 14.0 이상으로 표시"
          },
          {
            "항목": "백그라운드 생성",
            "출처의 기재 내용": "iOS 또는 iPadOS 26.0 이상에서 앱을 떠나도 답변과 다운로드가 계속됨"
          },
          {
            "항목": "서버 모드",
            "출처의 기재 내용": "직접 구축하고 보안을 관리하는, 접속 가능한 Ollama, LM Studio 또는 OpenAI 호환 서버"
          },
          {
            "항목": "기기 내 모델",
            "출처의 기재 내용": "Hugging Face에서 내려받는 MLX 모델이며 메모리나 iPhone 기종 요건은 기재되지 않음"
          },
          {
            "항목": "계정",
            "출처의 기재 내용": "없음. 개발자는 로그인이 없다고 밝힘"
          }
        ],
        "note": "페이지에는 최소 RAM이 없고, 어떤 기기 내 모델이 어떤 iPhone·iPad에서 돌아가는지도 나와 있지 않습니다."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "시작하는 방법",
        "content": [
          "**아래 단계는 개발자의 설명을 따른 것이며 PromptQuorum이 직접 실행해 보지는 않았습니다.**"
        ],
        "numberedItems": [
          {
            "title": "앱 설치",
            "whyItMatters": "App Store에서 Reins를 받습니다. 계정이나 로그인은 필요 없습니다."
          },
          {
            "title": "모델을 실행할 위치 선택",
            "whyItMatters": "Ollama, LM Studio 또는 OpenAI 호환 서버의 주소를 추가하고 필요하면 API 키나 사용자 지정 헤더를 설정하거나, 대신 기기 내 모델을 내려받습니다."
          },
          {
            "title": "모델을 고르고 채팅",
            "whyItMatters": "대화마다 모델을 고르고 시스템 프롬프트와 온도, 컨텍스트 크기 같은 옵션을 정한 뒤 채팅을 시작합니다."
          },
          {
            "title": "파일, 도구, 웹 검색 추가",
            "whyItMatters": "이미지, PDF, CSV, 텍스트 파일을 첨부하고 모델이 지원하면 도구, 웹 검색, 사고 모드를 켭니다."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "출처가 확인한 기능",
        "content": [
          "**아래 항목은 모두 App Store 설명, 공식 웹사이트 또는 저장소 README에서 가져온 것이며 독립적으로 테스트하지 않았습니다.**"
        ],
        "items": [
          "**여러 백엔드.** Ollama, LM Studio, Ollama Cloud, 모든 OpenAI 호환 서버를 지원하며, 여러 서버와 API 키, 사용자 지정 헤더를 저장해 전환할 수 있습니다.",
          "**기기 내 모델.** Apple 실리콘용 MLX 모델(검색해 내려받은 임의의 MLX 모델 포함)과 Apple Foundation Models를 지원하며, 버전 2.3 노트에는 MiniCPM5 모델의 도구 호출이 언급됩니다.",
          "**도구와 웹 검색.** 모델이 도구를 호출하고 웹을 검색하고 페이지를 가져오며 여러 단계에 걸쳐 계산할 수 있고, 웹 검색에 API 키가 필요하지 않습니다.",
          "**채팅 제어.** 대화별 시스템 프롬프트, 모델, 온도, 컨텍스트 크기, 토큰 한도, 사고 모드, 생성 이어가기, 채팅 분기.",
          "**파일과 백업.** 이미지, PDF, CSV, 텍스트 첨부, 대화 내보내기·가져오기, 흔적을 남기지 않는 임시 채팅."
        ],
        "note": "페이지, 웹사이트, 이용 약관은 Reins Pro가 추가 기능을 열어 준다고만 하고 목록은 제시하지 않으므로, 위 기능 중 무엇이 무료인지는 문서화되어 있지 않습니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "데이터 흐름과 개인정보",
        "content": [
          "**2026년 9월 20일에 마지막으로 업데이트된 개인정보 처리방침은 개발자가 개인 데이터, 채팅 기록, 프롬프트를 수집·저장·모니터링하지 않으며 분석이나 원격 측정도 쓰지 않는다고 밝힙니다.** 채팅, 설정, 서버 항목, 내려받은 모델은 기기에 저장됩니다. 서버 모드에서는 프롬프트와 이미지가 입력한 주소로만 전송되며, 개발자는 중간에 개입하지 않는다고 설명합니다.",
          "기기 내 모델을 쓰면 프롬프트, 이미지, 답변이 전적으로 기기에서 처리된다고 방침은 밝힙니다. 모델 파일은 Hugging Face에서 받으며 그 다운로드는 해당 회사의 방침에 따라 파악됩니다. 선택 사항인 로컬 네트워크 공유는 기본적으로 꺼져 있고, 켜면 같은 네트워크의 모든 기기가 비밀번호 없이 휴대폰에 프롬프트를 보낼 수 있으므로 방침은 신뢰할 수 있는 네트워크에서만 쓸 것을 권합니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이는 개발자의 선언이지 감사 결과가 아니며, 현재 버전의 소스 코드는 공개되어 있지 않습니다. PromptQuorum은 앱의 네트워크 트래픽을 검사하지 않았고, 어떤 서비스가 웹 검색 요청에 응답하고 어떻게 처리하는지도 출처에 나와 있지 않습니다."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "이런 분께 적합합니다",
        "items": [
          "**Ollama·LM Studio 사용자**: 집에서 돌리는 모델을 위한 휴대폰 클라이언트를 찾는 경우.",
          "**프라이버시를 중시하는 iPhone 사용자**: 개발자 설명대로 로그인과 분석이 없는 앱을 선호하는 경우.",
          "**Apple 실리콘 실험을 즐기는 사용자**: 돈을 내기 전에 iPhone이나 iPad에서 MLX 모델을 오프라인으로 써 보고 싶은 경우."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 내용",
        "items": [
          "**성능.** 속도, 메모리 사용량, 배터리 소모, 특정 iPhone·iPad에서 실행되는 가장 큰 모델은 테스트하지 않았습니다.",
          "**Pro 기능.** 출처에는 Reins Pro가 무엇을 열어 주는지, 무료 버전이 무엇을 제한하는지 나와 있지 않습니다.",
          "**웹 검색.** 내장 검색의 뒤에 있는 서비스와 그 쿼리가 전송되는 곳은 기재되어 있지 않습니다.",
          "**오픈소스 여부.** 저장소에는 GPL-3.0 라이선스 파일이 있지만 README는 버전 1.3.4까지의 소스만 담고 있다고 밝히고, 이용 약관은 현재 앱의 복사, 수정, 리버스 엔지니어링을 금지합니다.",
          "**다른 플랫폼.** 웹사이트는 “Mobile”과 “Desktop”을 언급하지만, 찾을 수 있었던 Android와 macOS 다운로드는 GitHub의 2025년 3월 버전 1.3.0 파일뿐이며 버전 2의 Mac 빌드는 설명되어 있지 않습니다."
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
            "플랫폼": "iPhone, iPad(페이지에 Mac 표시)",
            "가격 / 라이선스": "무료+앱 내 구입 / 비공개",
            "핵심 차이": "원격 접속과 선택형 클라우드 API도 제공"
          },
          {
            "앱": "[Enchanted](/ko/power-local-llm/enchanted-review)",
            "플랫폼": "iPhone, Mac",
            "가격 / 라이선스": "무료 / Apache 2.0",
            "핵심 차이": "별도 Ollama 서버가 필요한 Ollama 클라이언트"
          },
          {
            "앱": "[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)",
            "플랫폼": "iOS, Android",
            "가격 / 라이선스": "무료 / MIT",
            "핵심 차이": "Android에서도 쓰는 오픈소스 기기 내 채팅 앱"
          }
        ],
        "note": "선택하기 전에 각 앱의 최신 가격, 라이선스, 지원 플랫폼을 해당 페이지에서 확인하세요."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "Reins에 Android나 Windows 버전이 있나요?",
            "a": "App Store의 현재 버전은 Apple 기기용입니다. GitHub Releases에는 Android APK와 macOS DMG가 있지만 2025년 3월의 버전 1.3.0이며, README는 저장소가 1.3.4까지의 코드만 다룬다고 밝힙니다."
          },
          {
            "q": "Reins는 휴대폰에서 어떤 모델을 실행할 수 있나요?",
            "a": "페이지에 따르면 MLX 모델(검색해 내려받은 임의의 MLX 모델 포함)과 Apple Foundation Models입니다. 버전 2.3 노트에는 MiniCPM5와 LFM 2.5가 언급되며, 지원 iPhone 목록은 제공되지 않습니다."
          },
          {
            "q": "웹 검색에 API 키가 필요한가요?",
            "a": "개발자는 필요 없다고 합니다. 웹 검색은 내장되어 있고 키가 필요하지 않습니다. 어떤 검색 서비스를 쓰는지는 출처에 나와 있지 않습니다."
          },
          {
            "q": "미국 밖에서 Reins Pro는 얼마인가요?",
            "a": "2026년 10월 30일에 확인한 App Store에서 월간·연간·평생 가격은 독일 7,99 €·44,99 €·99,99 €, 스페인 5,99 €·34,99 €·99,99 €, 프랑스 7,99 €·39,99 €·99,99 €, 일본 ¥1,000·¥5,000·¥15,000, 한국 ₩8,800·₩44,000·₩149,000, 브라질 R$ 19,90·R$ 119,90·R$ 599,90이었습니다. 미국은 $6.99·$39.99·$99.99입니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "총평",
        "content": "Reins는 활발히 업데이트되는 로그인 없는 앱으로, iPhone이나 iPad에서 집의 Ollama·LM Studio 서버에 접속할 수 있고 기기에서 MLX 모델을 오프라인으로 실행하는 선택지도 있습니다. 반면 버전 2는 비공개 소스이고 개인 개발자 한 명이 만들었으며, 유료 Pro 요금제가 무엇을 열어 주는지와 기기 내 모델 성능이 어떤지는 출처에서 알 수 없습니다. 이미 자체 서버를 운영하고 먼저 무료 버전을 써 볼 수 있는 분께 맞고, 감사를 거친 개인정보 보장이 필요하다면 방침을 증명이 아니라 선언으로 읽어야 합니다."
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[App Store의 Reins](https://apps.apple.com/app/id6739738501) — 설명, 버전 기록, 요구 사항, 스토어별 앱 내 구입 가격. 2026년 10월 30일 확인.",
          "[Reins 웹사이트](https://getreins.app) — 기능 목록과 정책 문서 링크. 2026년 10월 30일 확인.",
          "[Reins 개인정보 처리방침](https://getreins.app/privacy) — 데이터 수집, 기기 내 처리, 네트워크 공유. 2026년 9월 20일 마지막 업데이트.",
          "[Reins 이용 약관](https://getreins.app/terms) — 라이선스 조건과 Reins Pro 구매 조건. 2026년 10월 30일 확인.",
          "[GitHub의 Reins](https://github.com/ibrahimcetin/reins) — README, 라이선스 파일, 릴리스. 2026년 10월 30일 확인."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[LM Mini 리뷰](/ko/power-local-llm/lm-mini-review) — 기기 내 모델과 직접 운영하는 서버 연결을 갖춘 iPhone·iPad용 채팅 앱.",
          "[Enchanted 리뷰](/ko/power-local-llm/enchanted-review) — iPhone과 Mac용 무료 Apache 2.0 Ollama 클라이언트.",
          "[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS와 Android용 무료 오픈소스 기기 내 채팅 클라이언트.",
          "[iPhone용 로컬 LLM 앱 추천](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — 이 리뷰가 속한 종합 비교 글.",
          "[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록."
        ]
      }
    }
  },
}
