// Scrypted Review: Camera and NVR Platform with Local AI Options
// Slug: scrypted-review
// Companion to: home-assistant-assist-review (only other smart-home-ai review; no camera/NVR review exists yet)
// Sources: scrypted.app, docs.scrypted.app (installation, desktop app, LLM plugin, NVR features, AI Summaries, apps, hardware guide, purchase
// policy, privacy policy), the GitHub repos koush/scrypted (LICENSE.md, package metadata, commits) and koush/nvr.scrypted.app (desktop releases)
// and the App Store listing, all checked 2026-11-01 — no hands-on testing. Prices are not published in the docs, so none are stated and there is
// nothing to localise per storefront. Translations follow docs/geo-translation.md (geo-translation: APPLIED); no regional/compliance section.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-01",
    "dateModified": "2026-11-01",
    "next_refresh_due": "2027-05-01",
    "theme": "Voice, Speech & Multimodal",
    "heroImage": "/images/scrypted-review-hero-en.webp",
    "title": "Scrypted Review: Camera and NVR Platform with Local AI Options",
    "seoTitle": "Scrypted Review: Open-Source Camera Platform and NVR",
    "intro": "Scrypted is an open-source video integration platform made by Vysor, Inc. It takes streams from local cameras and passes them to HomeKit, Google Home, Alexa and Home Assistant, and its paid Scrypted NVR plugin adds 24/7 recording and AI detections. It is not a chat or LLM app: its local AI is object detection plus an optional LLM plugin that writes event summaries. This review is based on [scrypted.app](https://www.scrypted.app), the [documentation](https://docs.scrypted.app) and the [GitHub repository](https://github.com/koush/scrypted), checked on 1 November 2026; PromptQuorum has not tested Scrypted hands-on.",
    "metaDescription": "Scrypted review: open-source platform that streams local cameras to HomeKit, Google Home and Home Assistant, with paid NVR and optional local AI. Untested.",
    "twitterDescription": "Scrypted review: an open-source camera platform with a paid NVR and optional local LLM summaries via llama.cpp. What the sources confirm and what they leave open.",
    "audience": "Owners of local IP cameras who want them in HomeKit, Google Home or Home Assistant, and who need to know what Scrypted costs, what hardware it wants and how much of its AI runs locally.",
    "readTime": "5 min read",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Scrypted review",
    "targetKeywords": [
      "scrypted review",
      "scrypted nvr",
      "scrypted homekit",
      "scrypted home assistant",
      "scrypted local llm",
      "scrypted ai summaries",
      "scrypted install"
    ],
    "current_models_mentioned": [
      "Qwen",
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "Mac mini",
      "Intel N100",
      "Apple Silicon"
    ],
    "leadAnswerBlock": "**Scrypted (desktop app version 0.147.1, released on 19 September 2026) is an open-source video platform that connects local IP cameras to HomeKit, Google Home, Alexa and Home Assistant, with a paid NVR plugin for recording and AI detections.** Its AI features are object detection and optional LLM summaries; it offers no chat assistant.",
    "quickAnswerTop": {
      "en": {
        "question": "Does Scrypted run a local LLM?",
        "answer": "Only if you add the LLM plugin. Per the documentation, the plugin can host models through llama.cpp on your own server or connect to ChatGPT, Claude or Gemini with your own API key; Scrypted NVR uses the model for event summaries.",
        "bullets": [
          "Viewer apps exist for iOS and Android; the desktop app covers Mac, Windows and Linux.",
          "The NVR plugin and the desktop app are paid; a free version and a free NVR trial are mentioned.",
          "Local models need about 12 GB of GPU memory, or a Mac with 16 GB, per the documentation.",
          "Detection can run on a CPU, GPU, Apple Neural Engine, Intel NPU or Coral accelerator."
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
        "label": "What Is Scrypted?",
        "anchor": "what-is-scrypted"
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
            "text": "Scrypted is an open-source platform that connects local IP cameras to HomeKit, Google Home, Alexa and Home Assistant, with a paid NVR add-on and optional local AI."
          },
          {
            "type": "plain-terms",
            "text": "You run Scrypted on a Mac, Windows PC, Linux box or NAS, add your cameras and watch them in the smart-home apps you already use; recording and AI event summaries are extras."
          }
        ],
        "items": [
          "Maintenance: the newest commit on the main branch is from 1 November 2026 and the latest desktop release, 0.147.1, is from 19 September 2026, so no stale-project warning applies.",
          "Scope: a camera integration and recording platform, not a chat app; the local AI is detection plus optional summaries.",
          "Cost: the platform starts free; the NVR is a subscription with a free trial and the desktop app needs a paid licence. The documentation lists no prices.",
          "Licence: the repository says licensing varies by directory, so each plugin needs its own check.",
          "Remote viewing: access from outside your network goes through the Scrypted Cloud plugin and a login."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "This review is based on the Scrypted website, the documentation and the GitHub repositories, checked on 1 November 2026. PromptQuorum has not installed or run Scrypted, so detection accuracy, speed and summary quality are not assessed."
          }
        ]
      },
      "overview": {
        "id": "what-is-scrypted",
        "title": "What Is Scrypted?",
        "content": [
          "**Scrypted is a video integration platform that takes streams from cameras and makes them appear in other smart-home systems.** The documentation lists HomeKit (including HomeKit Secure Video), Google Home, Alexa and Home Assistant as targets; the platform is built from plugins, one per camera brand or feature. The maker is Vysor, Inc., the company named in the documentation’s privacy policy.",
          "**Scrypted NVR is a paid plugin on top of it.** It records 24/7 and adds smart detections, face recognition, licence plate recognition, natural-language search of the recording history and AI Summaries, with iOS, Android, desktop and browser apps. The separate LLM plugin supplies the language model for the summaries."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Get It",
        "content": [
          "**Scrypted installs as a desktop app on Mac and Windows, or as a server on Linux, Proxmox VE, Unraid and NAS systems, with iOS and Android apps for viewing.**"
        ],
        "columns": [
          "Option",
          "How to get it"
        ],
        "rows": [
          {
            "Option": "Mac and Windows",
            "How to get it": "Desktop app installers on [GitHub Releases](https://github.com/koush/nvr.scrypted.app/releases): .dmg for Apple Silicon and Intel Macs, .exe for Windows; the documentation says the desktop app requires a paid licence"
          },
          {
            "Option": "iPhone and iPad",
            "How to get it": "[Scrypted on the App Store](https://apps.apple.com/us/app/scrypted/id1658171214)"
          },
          {
            "Option": "Android",
            "How to get it": "[Scrypted on Google Play](https://play.google.com/store/apps/details?id=app.scrypted.nvr)"
          },
          {
            "Option": "Linux",
            "How to get it": "Docker Compose with host networking, or the desktop app as a .deb package, which the documentation recommends only as a viewer for Scrypted NVR"
          },
          {
            "Option": "Proxmox VE, Unraid, NAS",
            "How to get it": "Proxmox VE is the recommended host for dedicated Intel or AMD servers; Unraid, ReadyNAS, Synology and QNAP use Docker, per the [installation guide](https://docs.scrypted.app/installation.html)"
          },
          {
            "Option": "Browser",
            "How to get it": "[nvr.scrypted.app](https://nvr.scrypted.app) after installing the Scrypted Cloud plugin, or the browser’s install-as-app option"
          },
          {
            "Option": "Website",
            "How to get it": "[scrypted.app](https://www.scrypted.app)"
          },
          {
            "Option": "Documentation",
            "How to get it": "[docs.scrypted.app](https://docs.scrypted.app)"
          },
          {
            "Option": "Privacy policy",
            "How to get it": "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html), last updated on 22 February 2024 according to the page"
          },
          {
            "Option": "Source code",
            "How to get it": "[github.com/koush/scrypted](https://github.com/koush/scrypted); licensing varies by directory"
          }
        ],
        "note": "Version reviewed: desktop app 0.147.1, released on 19 September 2026; the server repository’s latest release tag is 0.147.0 from 13 September 2026. Docker Desktop on Mac or Windows does not work with Scrypted because host networking is unavailable there, per the documentation."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requirements",
        "content": [
          "**For Scrypted NVR the documentation recommends a 9th-generation Intel CPU on Windows, a 6th-generation one on Linux or Apple Silicon on macOS, plus a drive of at least 1 TB.**"
        ],
        "columns": [
          "Item",
          "What the sources say"
        ],
        "rows": [
          {
            "Item": "Server speed",
            "What the sources say": "A rough chart lists an Intel N100 for 12 cameras, a Dell Wyse 5070 for 5, and a Mac mini with 16 GB or an Intel Core Ultra 125H for 20 or more"
          },
          {
            "Item": "Storage",
            "What the sources say": "At least 1 TB; surveillance drives are recommended, flash drives and SD cards should not be used because of the write volume"
          },
          {
            "Item": "Cameras",
            "What the sources say": "Local RTSP cameras with ONVIF and H.264 are officially supported; Ring, Google/Nest, Arlo, Wyze, custom firmware such as Thingino and battery cameras are not"
          },
          {
            "Item": "Local LLM",
            "What the sources say": "Apple Silicon Mac with 16 GB, NVIDIA or AMD GPU with 12 GB, or AMD AI MAX; the listed models need from 5 GB (Qwen3.5-4B) to 26 GB (Qwen3.5-35B-A3B)"
          },
          {
            "Item": "Detection hardware",
            "What the sources say": "CPU, GPU, Apple Neural Engine, Intel NPU or Coral accelerator"
          }
        ],
        "note": "These figures come from the NVR hardware guide and the LLM page; a separate minimum for the free platform without the NVR was not checked."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "How to Get Started",
        "content": [
          "**The steps follow the documentation; PromptQuorum has not run them.**"
        ],
        "numberedItems": [
          {
            "title": "Install Scrypted",
            "whyItMatters": "Use the desktop app on Mac or Windows, or Docker, Proxmox VE or Unraid on a server, then open the management console at https://localhost:10443 and accept the certificate warning."
          },
          {
            "title": "Add and validate your cameras",
            "whyItMatters": "Add each camera as described in the camera setup pages; the documentation advises verifying cameras in the free version before starting an NVR trial."
          },
          {
            "title": "Connect your smart-home platform",
            "whyItMatters": "Install the HomeKit, Google Home, Alexa or Home Assistant plugin and add the cameras there."
          },
          {
            "title": "Optional: add the NVR and an LLM",
            "whyItMatters": "Install the Scrypted NVR plugin and sign in with the billing-portal account; for AI Summaries, install the LLM plugin and pick a cloud key or a local model."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Confirmed by the Sources",
        "content": [
          "**Every item below comes from the website or the documentation; none has been tested here.**"
        ],
        "items": [
          "**Platforms.** HomeKit with HomeKit Secure Video, Google Home (not on iOS), Alexa and Home Assistant.",
          "**Scrypted NVR.** 24/7 recording, timeline and event views, face recognition, licence plate recognition, rich notifications and adaptive bitrate streaming.",
          "**AI Summaries and AI Search.** Short natural-language descriptions of detections sent as push notifications, and natural-language search across all cameras’ history.",
          "**LLM plugin.** ChatGPT, Claude or Gemini with your own API key, or local models hosted through llama.cpp, including Qwen3.5 and Gemma 4 variants; AI Summaries can use either route.",
          "**Hardware-accelerated detection.** Object detection plugins run on CPU, GPU, Apple Neural Engine, Intel NPU or Coral, and Cluster Mode can offload models to a GPU on another machine."
        ],
        "note": "The documentation recommends specific low-cost cloud models for price and performance; this is the maker’s guidance, not a PromptQuorum result."
      },
      "privacy": {
        "id": "privacy",
        "title": "Data Flow and Privacy",
        "content": [
          "**Detection and recording run on your own server, but AI Summaries stay in the house only if you choose a local model.** The documentation says local models let AI Summaries run entirely on-premises without sending images to the cloud; with a cloud provider, the images go to that provider under its own policy.",
          "Viewing from outside your network uses the Scrypted Cloud plugin and a Scrypted Cloud login. The documentation’s privacy policy names Vysor, Inc. as the company; PromptQuorum has not analysed what the cloud service stores."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "These are the maker’s statements, not audit results. PromptQuorum has not inspected network traffic, the cloud service or the code."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**HomeKit and Google Home users** with local RTSP or ONVIF cameras who want those streams in their home app.",
          "**Home Assistant users** who want camera streams with smart detections in their setup.",
          "**Owners of a Mac mini, Proxmox box or NAS** who want a self-hosted NVR with optional local AI summaries."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Prices.** The documentation gives no amount for the NVR subscription or the desktop licence and the billing portal needs a login, so no price is stated here.",
          "**Licensing.** The repository’s LICENSE file says licensing varies by directory and some plugins may need GPL compliance; the server package declares ISC, and the licence of each plugin and of the NVR was not checked.",
          "**Performance.** Camera counts per machine, detection accuracy and summary quality are the maker’s figures and were not measured.",
          "**Cloud data handling.** What Scrypted Cloud stores for remote viewing was not analysed.",
          "**Local-model quality.** Whether the listed local models write useful event summaries for your cameras is untested."
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
            "Platforms": "Linux, web, iOS, Android",
            "Price / license": "Free / Apache-2.0",
            "Key difference": "Voice assistant inside Home Assistant, not a camera platform"
          }
        ],
        "note": "No other camera or NVR app has a PromptQuorum review yet. Scrypted lists Home Assistant as a target platform, so the two are not strict rivals. Confirm each app’s current price, license and platforms on its own listing before choosing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "Can I get a refund for Scrypted NVR?",
            "a": "No. The purchase policy says all sales are final and cancelled subscriptions end on the next renewal date without proration; a payment reminder is emailed one week before billing."
          },
          {
            "q": "Does Scrypted work with Ollama?",
            "a": "The documentation says Ollama and LM Studio do not provide fully compliant OpenAI endpoints and may not work correctly. It prefers the LLM plugin’s own llama.cpp and also recommends vLLM and SGLang."
          },
          {
            "q": "Can Scrypted run on a Raspberry Pi?",
            "a": "The hardware guide says Raspberry Pi 4 and low-performance NAS devices are not recommended for Scrypted NVR; it gives no verdict for the platform without the NVR."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Scrypted is an actively developed way to get local IP cameras into HomeKit, Google Home, Alexa or Home Assistant, with a paid NVR and optional local LLM summaries on top. Against that, it is a video platform rather than a local LLM app, the NVR and desktop app cost money at undisclosed prices, repository licensing varies by directory and PromptQuorum has not tested any of it. It suits people with local RTSP or ONVIF cameras who accept a paid NVR; for a pure local chat setup it is the wrong tool."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Scrypted website](https://www.scrypted.app) — product overview and platform list, checked 1 November 2026.",
          "[Scrypted documentation](https://docs.scrypted.app) — installation, desktop app, LLM plugin, NVR features, AI Summaries, apps and hardware guide, checked 1 November 2026.",
          "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html) — company name and data-protection terms, checked 1 November 2026.",
          "[Scrypted on GitHub](https://github.com/koush/scrypted) — LICENSE file, package metadata and commit history, checked 1 November 2026.",
          "[Scrypted desktop app releases](https://github.com/koush/nvr.scrypted.app/releases) — version 0.147.1 of 19 September 2026 and its file list, checked 1 November 2026.",
          "[Scrypted on the App Store](https://apps.apple.com/us/app/scrypted/id1658171214) — seller name and listing, checked 1 November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[Home Assistant Assist Review](/power-local-llm/home-assistant-assist-review) — local voice control and LLM agents inside Home Assistant.",
          "[Local LLM Software Directory](/directory) — the full catalogue of local AI tools."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Scrypted Review: Camera and NVR Platform with Local AI Options",
      "description": "Scrypted review: an open-source video platform that connects local IP cameras to HomeKit, Google Home, Alexa and Home Assistant, with a paid NVR and optional local LLM summaries. Requirements, privacy and what the sources leave unconfirmed.",
      "url": "https://www.promptquorum.com/power-local-llm/scrypted-review",
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
        "audienceType": "Smart-home owners with local IP cameras evaluating an open-source camera platform with optional local AI"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Scrypted"
        },
        {
          "@type": "Thing",
          "name": "Network video recorders"
        },
        {
          "@type": "Thing",
          "name": "HomeKit"
        },
        {
          "@type": "Thing",
          "name": "Home Assistant"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/power-local-llm/scrypted-review"
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
          "name": "Scrypted Review",
          "item": "https://www.promptquorum.com/power-local-llm/scrypted-review"
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
    "theme": "Voice, Speech & Multimodal",
    "heroImage": "/images/scrypted-review-hero-de.webp",
    "title": "Scrypted-Rezension: Kamera- und NVR-Plattform mit lokalen KI-Optionen",
    "seoTitle": "Scrypted-Rezension: Open-Source-Kameraplattform & NVR",
    "intro": "Scrypted ist eine quelloffene Plattform für die Videointegration von Vysor, Inc. Sie nimmt Streams lokaler Kameras entgegen und reicht sie an HomeKit, Google Home, Alexa und Home Assistant weiter; das kostenpflichtige Plugin Scrypted NVR ergänzt Daueraufzeichnung und KI-Erkennungen. Es ist keine Chat- oder LLM-App: Die lokale KI besteht aus Objekterkennung und einem optionalen LLM-Plugin, das Ereigniszusammenfassungen schreibt. Diese Rezension stützt sich auf [scrypted.app](https://www.scrypted.app), die [Dokumentation](https://docs.scrypted.app) und das [GitHub-Repository](https://github.com/koush/scrypted), geprüft am 1. November 2026; PromptQuorum hat Scrypted nicht selbst getestet.",
    "metaDescription": "Scrypted-Rezension: quelloffene Plattform für lokale Kameras in HomeKit, Google Home und Home Assistant, mit bezahltem NVR und lokaler KI. Ungetestet.",
    "twitterDescription": "Scrypted-Rezension: eine quelloffene Kameraplattform mit kostenpflichtigem NVR und optionalen lokalen LLM-Zusammenfassungen über llama.cpp. Was die Quellen bestätigen und was offenbleibt.",
    "audience": "Besitzer lokaler IP-Kameras, die diese in HomeKit, Google Home oder Home Assistant nutzen möchten und wissen wollen, was Scrypted kostet, welche Hardware es braucht und wie viel von der KI lokal läuft.",
    "readTime": "5 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Scrypted Rezension",
    "targetKeywords": [
      "scrypted rezension",
      "scrypted nvr",
      "scrypted homekit",
      "scrypted home assistant",
      "scrypted lokales llm",
      "scrypted ki zusammenfassungen",
      "scrypted installieren"
    ],
    "current_models_mentioned": [
      "Qwen",
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "Mac mini",
      "Intel N100",
      "Apple Silicon"
    ],
    "leadAnswerBlock": "**Scrypted (Desktop-App in Version 0.147.1, veröffentlicht am 19. September 2026) ist eine quelloffene Videoplattform, die lokale IP-Kameras mit HomeKit, Google Home, Alexa und Home Assistant verbindet und über ein kostenpflichtiges NVR-Plugin Aufzeichnung und KI-Erkennungen bietet.** Die KI-Funktionen sind Objekterkennung und optionale LLM-Zusammenfassungen; einen Chat-Assistenten gibt es nicht.",
    "quickAnswerTop": {
      "de": {
        "question": "Führt Scrypted ein lokales LLM aus?",
        "answer": "Nur, wenn Sie das LLM-Plugin hinzufügen. Laut Dokumentation kann das Plugin Modelle über llama.cpp auf Ihrem eigenen Server betreiben oder sich mit ChatGPT, Claude oder Gemini über Ihren eigenen API-Schlüssel verbinden; Scrypted NVR nutzt das Modell für Ereigniszusammenfassungen.",
        "bullets": [
          "Viewer-Apps gibt es für iOS und Android; die Desktop-App deckt Mac, Windows und Linux ab.",
          "Das NVR-Plugin und die Desktop-App sind kostenpflichtig; erwähnt werden eine kostenlose Version und eine kostenlose NVR-Testphase.",
          "Lokale Modelle brauchen laut Dokumentation etwa 12 GB GPU-Speicher oder einen Mac mit 16 GB.",
          "Die Erkennung kann auf CPU, GPU, Apple Neural Engine, Intel NPU oder Coral-Beschleuniger laufen."
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
        "label": "Was ist Scrypted?",
        "anchor": "what-is-scrypted"
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
            "text": "Scrypted ist eine quelloffene Plattform, die lokale IP-Kameras mit HomeKit, Google Home, Alexa und Home Assistant verbindet, mit kostenpflichtigem NVR-Zusatz und optionaler lokaler KI."
          },
          {
            "type": "plain-terms",
            "text": "Sie betreiben Scrypted auf einem Mac, Windows-PC, Linux-Rechner oder NAS, fügen Ihre Kameras hinzu und sehen sie in den Smart-Home-Apps, die Sie ohnehin nutzen; Aufzeichnung und KI-Ereigniszusammenfassungen sind Extras."
          }
        ],
        "items": [
          "Pflege: Der neueste Commit im Hauptzweig stammt vom 1. November 2026, die aktuelle Desktop-Version 0.147.1 vom 19. September 2026; eine Warnung vor einem verwaisten Projekt entfällt.",
          "Umfang: eine Plattform für Kameraintegration und Aufzeichnung, keine Chat-App; die lokale KI ist Erkennung plus optionale Zusammenfassungen.",
          "Kosten: Die Plattform ist zum Einstieg kostenlos; das NVR ist ein Abonnement mit kostenloser Testphase, die Desktop-App braucht eine kostenpflichtige Lizenz. Preise nennt die Dokumentation nicht.",
          "Lizenz: Das Repository sagt, die Lizenzierung unterscheide sich je Verzeichnis; jedes Plugin muss einzeln geprüft werden.",
          "Fernzugriff: Der Zugriff von außerhalb Ihres Netzwerks läuft über das Scrypted-Cloud-Plugin und ein Login."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Diese Rezension stützt sich auf die Scrypted-Website, die Dokumentation und die GitHub-Repositories, geprüft am 1. November 2026. PromptQuorum hat Scrypted weder installiert noch ausgeführt; Erkennungsgenauigkeit, Geschwindigkeit und Qualität der Zusammenfassungen wurden daher nicht bewertet."
          }
        ]
      },
      "overview": {
        "id": "what-is-scrypted",
        "title": "Was ist Scrypted?",
        "content": [
          "**Scrypted ist eine Plattform für Videointegration, die Kamerastreams aufnimmt und in anderen Smart-Home-Systemen erscheinen lässt.** Die Dokumentation nennt HomeKit (einschließlich HomeKit Secure Video), Google Home, Alexa und Home Assistant als Ziele; die Plattform besteht aus Plugins, je eines pro Kameramarke oder Funktion. Hersteller ist Vysor, Inc., das Unternehmen, das in der Datenschutzerklärung der Dokumentation genannt wird.",
          "**Scrypted NVR ist ein kostenpflichtiges Plugin darauf.** Es zeichnet rund um die Uhr auf und ergänzt intelligente Erkennungen, Gesichtserkennung, Kennzeichenerkennung, Suche im Aufzeichnungsverlauf in natürlicher Sprache und KI-Zusammenfassungen, mit Apps für iOS, Android, Desktop und Browser. Das separate LLM-Plugin liefert das Sprachmodell für die Zusammenfassungen."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Bezugsquelle",
        "content": [
          "**Scrypted wird als Desktop-App unter Mac und Windows oder als Server unter Linux, Proxmox VE, Unraid und auf NAS-Systemen installiert; zum Ansehen gibt es Apps für iOS und Android.**"
        ],
        "columns": [
          "Option",
          "Bezug"
        ],
        "rows": [
          {
            "Option": "Mac und Windows",
            "Bezug": "Installer der Desktop-App auf [GitHub Releases](https://github.com/koush/nvr.scrypted.app/releases): .dmg für Apple-Silicon- und Intel-Macs, .exe für Windows; laut Dokumentation braucht die Desktop-App eine kostenpflichtige Lizenz"
          },
          {
            "Option": "iPhone und iPad",
            "Bezug": "[Scrypted im App Store](https://apps.apple.com/us/app/scrypted/id1658171214)"
          },
          {
            "Option": "Android",
            "Bezug": "[Scrypted bei Google Play](https://play.google.com/store/apps/details?id=app.scrypted.nvr)"
          },
          {
            "Option": "Linux",
            "Bezug": "Docker Compose mit Host-Netzwerk oder die Desktop-App als .deb-Paket, die die Dokumentation nur als Viewer für Scrypted NVR empfiehlt"
          },
          {
            "Option": "Proxmox VE, Unraid, NAS",
            "Bezug": "Proxmox VE ist der empfohlene Host für dedizierte Intel- oder AMD-Server; Unraid, ReadyNAS, Synology und QNAP nutzen Docker, laut [Installationsanleitung](https://docs.scrypted.app/installation.html)"
          },
          {
            "Option": "Browser",
            "Bezug": "[nvr.scrypted.app](https://nvr.scrypted.app) nach Installation des Scrypted-Cloud-Plugins oder über die „Als App installieren“-Funktion des Browsers"
          },
          {
            "Option": "Website",
            "Bezug": "[scrypted.app](https://www.scrypted.app)"
          },
          {
            "Option": "Dokumentation",
            "Bezug": "[docs.scrypted.app](https://docs.scrypted.app)"
          },
          {
            "Option": "Datenschutzerklärung",
            "Bezug": "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html), laut Seite zuletzt am 22. Februar 2024 aktualisiert"
          },
          {
            "Option": "Quellcode",
            "Bezug": "[github.com/koush/scrypted](https://github.com/koush/scrypted); die Lizenzierung unterscheidet sich je Verzeichnis"
          }
        ],
        "note": "Geprüfte Version: Desktop-App 0.147.1, veröffentlicht am 19. September 2026; das neueste Release-Tag des Server-Repositorys ist 0.147.0 vom 13. September 2026. Docker Desktop unter Mac oder Windows funktioniert mit Scrypted laut Dokumentation nicht, weil dort kein Host-Netzwerk verfügbar ist."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Anforderungen",
        "content": [
          "**Für Scrypted NVR empfiehlt die Dokumentation unter Windows eine Intel-CPU der 9. Generation, unter Linux der 6. Generation oder unter macOS Apple Silicon sowie ein Laufwerk mit mindestens 1 TB.**"
        ],
        "columns": [
          "Punkt",
          "Was die Quellen sagen"
        ],
        "rows": [
          {
            "Punkt": "Serverleistung",
            "Was die Quellen sagen": "Eine grobe Übersicht nennt einen Intel N100 für 12 Kameras, einen Dell Wyse 5070 für 5 sowie einen Mac mini mit 16 GB oder einen Intel Core Ultra 125H für 20 oder mehr"
          },
          {
            "Punkt": "Speicher",
            "Was die Quellen sagen": "Mindestens 1 TB; Überwachungsfestplatten werden empfohlen, USB-Sticks und SD-Karten sollten wegen der Schreiblast nicht verwendet werden"
          },
          {
            "Punkt": "Kameras",
            "Was die Quellen sagen": "Lokale RTSP-Kameras mit ONVIF und H.264 werden offiziell unterstützt; Ring, Google/Nest, Arlo, Wyze, eigene Firmware wie Thingino und Akkukameras nicht"
          },
          {
            "Punkt": "Lokales LLM",
            "Was die Quellen sagen": "Mac mit Apple Silicon und 16 GB, NVIDIA- oder AMD-GPU mit 12 GB oder AMD AI MAX; die gelisteten Modelle brauchen von 5 GB (Qwen3.5-4B) bis 26 GB (Qwen3.5-35B-A3B)"
          },
          {
            "Punkt": "Erkennungs-Hardware",
            "Was die Quellen sagen": "CPU, GPU, Apple Neural Engine, Intel NPU oder Coral-Beschleuniger"
          }
        ],
        "note": "Diese Angaben stammen aus dem NVR-Hardwareratgeber und der LLM-Seite; eine eigene Mindestanforderung für die freie Plattform ohne NVR wurde nicht geprüft."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "So gelingt der Einstieg",
        "content": [
          "**Die Schritte folgen der Dokumentation; PromptQuorum hat sie nicht ausgeführt.**"
        ],
        "numberedItems": [
          {
            "title": "Scrypted installieren",
            "whyItMatters": "Nutzen Sie die Desktop-App unter Mac oder Windows oder Docker, Proxmox VE bzw. Unraid auf einem Server und öffnen Sie dann die Verwaltungskonsole unter https://localhost:10443; bestätigen Sie die Zertifikatswarnung."
          },
          {
            "title": "Kameras hinzufügen und prüfen",
            "whyItMatters": "Fügen Sie jede Kamera wie auf den Seiten zur Kameraeinrichtung beschrieben hinzu; die Dokumentation rät, Kameras in der kostenlosen Version zu prüfen, bevor die NVR-Testphase beginnt."
          },
          {
            "title": "Smart-Home-Plattform verbinden",
            "whyItMatters": "Installieren Sie das Plugin für HomeKit, Google Home, Alexa oder Home Assistant und fügen Sie die Kameras dort hinzu."
          },
          {
            "title": "Optional: NVR und LLM ergänzen",
            "whyItMatters": "Installieren Sie das Plugin Scrypted NVR und melden Sie sich mit dem Konto des Abrechnungsportals an; für KI-Zusammenfassungen installieren Sie das LLM-Plugin und wählen einen Cloud-Schlüssel oder ein lokales Modell."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Von den Quellen bestätigte Funktionen",
        "content": [
          "**Jeder der folgenden Punkte stammt von der Website oder aus der Dokumentation; keiner wurde hier getestet.**"
        ],
        "items": [
          "**Plattformen.** HomeKit mit HomeKit Secure Video, Google Home (nicht unter iOS), Alexa und Home Assistant.",
          "**Scrypted NVR.** Daueraufzeichnung, Zeitleiste und Ereignisansichten, Gesichtserkennung, Kennzeichenerkennung, Benachrichtigungen mit Vorschaubild und adaptive Bitrate.",
          "**KI-Zusammenfassungen und KI-Suche.** Kurze Beschreibungen von Erkennungen in natürlicher Sprache als Push-Benachrichtigung sowie Suche im Verlauf aller Kameras in natürlicher Sprache.",
          "**LLM-Plugin.** ChatGPT, Claude oder Gemini mit eigenem API-Schlüssel oder lokale Modelle über llama.cpp, darunter Varianten von Qwen3.5 und Gemma 4; KI-Zusammenfassungen können beide Wege nutzen.",
          "**Hardwarebeschleunigte Erkennung.** Plugins zur Objekterkennung laufen auf CPU, GPU, Apple Neural Engine, Intel NPU oder Coral; der Cluster-Modus kann Modelle auf eine GPU in einem anderen Rechner auslagern."
        ],
        "note": "Die Dokumentation empfiehlt bestimmte günstige Cloud-Modelle nach Preis und Leistung; das ist die Empfehlung des Herstellers, kein Ergebnis von PromptQuorum."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenfluss und Datenschutz",
        "content": [
          "**Erkennung und Aufzeichnung laufen auf Ihrem eigenen Server, doch KI-Zusammenfassungen bleiben nur dann im Haus, wenn Sie ein lokales Modell wählen.** Laut Dokumentation können KI-Zusammenfassungen mit lokalen Modellen vollständig lokal laufen, ohne dass Bilder in die Cloud gesendet werden; bei einem Cloud-Anbieter gehen die Bilder nach dessen eigener Richtlinie an diesen Anbieter.",
          "Der Zugriff von außerhalb Ihres Netzwerks nutzt das Scrypted-Cloud-Plugin und ein Scrypted-Cloud-Login. Die Datenschutzerklärung in der Dokumentation nennt Vysor, Inc. als Unternehmen; PromptQuorum hat nicht analysiert, was der Cloud-Dienst speichert."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Das sind Aussagen des Herstellers, keine Prüfergebnisse. PromptQuorum hat weder den Netzwerkverkehr noch den Cloud-Dienst oder den Code untersucht."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen sich die App eignet",
        "items": [
          "**HomeKit- und Google-Home-Nutzer** mit lokalen RTSP- oder ONVIF-Kameras, die diese Streams in ihrer Home-App sehen möchten.",
          "**Home-Assistant-Nutzer**, die Kamerastreams mit intelligenten Erkennungen in ihrem Setup wünschen.",
          "**Besitzer eines Mac mini, einer Proxmox-Maschine oder eines NAS**, die ein selbst gehostetes NVR mit optionalen lokalen KI-Zusammenfassungen wollen."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht überprüfen konnten",
        "items": [
          "**Preise.** Die Dokumentation nennt keinen Betrag für das NVR-Abonnement oder die Desktop-Lizenz, und das Abrechnungsportal verlangt einen Login; deshalb steht hier kein Preis.",
          "**Lizenzierung.** Die LICENSE-Datei des Repositorys sagt, die Lizenzierung unterscheide sich je Verzeichnis und manche Plugins könnten GPL-Konformität erfordern; das Server-Paket deklariert ISC, die Lizenz der einzelnen Plugins und des NVR wurde nicht geprüft.",
          "**Leistung.** Kameraanzahl pro Rechner, Erkennungsgenauigkeit und Qualität der Zusammenfassungen sind Herstellerangaben und wurden nicht gemessen.",
          "**Datenhaltung in der Cloud.** Was Scrypted Cloud für den Fernzugriff speichert, wurde nicht analysiert.",
          "**Qualität lokaler Modelle.** Ob die gelisteten lokalen Modelle brauchbare Ereigniszusammenfassungen für Ihre Kameras schreiben, ist ungetestet."
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
            "App": "[Home Assistant Assist](/de/power-local-llm/home-assistant-assist-review)",
            "Plattformen": "Linux, Web, iOS, Android",
            "Preis / Lizenz": "Gratis / Apache-2.0",
            "Hauptunterschied": "Sprachassistent in Home Assistant, keine Kameraplattform"
          }
        ],
        "note": "Für keine andere Kamera- oder NVR-App gibt es bisher eine PromptQuorum-Rezension. Scrypted nennt Home Assistant als Zielplattform, die beiden sind also keine strikten Konkurrenten. Prüfen Sie Preis, Lizenz und Plattformen jeder App vor der Wahl im jeweiligen Eintrag."
      },
      "faq": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Kann ich Scrypted NVR erstattet bekommen?",
            "a": "Nein. Laut Kaufbedingungen sind alle Verkäufe endgültig, und gekündigte Abonnements enden am nächsten Verlängerungstermin ohne anteilige Erstattung; eine Woche vor der Abrechnung wird eine Zahlungserinnerung per E-Mail gesendet."
          },
          {
            "q": "Funktioniert Scrypted mit Ollama?",
            "a": "Die Dokumentation sagt, Ollama und LM Studio böten keine vollständig kompatiblen OpenAI-Endpunkte und funktionierten möglicherweise nicht richtig. Bevorzugt wird das eigene llama.cpp des LLM-Plugins; außerdem werden vLLM und SGLang empfohlen."
          },
          {
            "q": "Läuft Scrypted auf einem Raspberry Pi?",
            "a": "Laut Hardwareratgeber werden Raspberry Pi 4 und leistungsschwache NAS-Geräte für Scrypted NVR nicht empfohlen; für die Plattform ohne NVR gibt er kein Urteil ab."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "Scrypted ist ein aktiv entwickelter Weg, lokale IP-Kameras in HomeKit, Google Home, Alexa oder Home Assistant zu bringen, mit kostenpflichtigem NVR und optionalen lokalen LLM-Zusammenfassungen obendrauf. Dagegen spricht: Es ist eine Videoplattform und keine lokale LLM-App, NVR und Desktop-App kosten Geld zu nicht genannten Preisen, die Lizenzierung des Repositorys unterscheidet sich je Verzeichnis, und PromptQuorum hat nichts davon getestet. Es passt zu Menschen mit lokalen RTSP- oder ONVIF-Kameras, die ein kostenpflichtiges NVR akzeptieren; für ein reines lokales Chat-Setup ist es das falsche Werkzeug."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[Scrypted-Website](https://www.scrypted.app) — Produktüberblick und Plattformliste, geprüft am 1. November 2026.",
          "[Scrypted-Dokumentation](https://docs.scrypted.app) — Installation, Desktop-App, LLM-Plugin, NVR-Funktionen, KI-Zusammenfassungen, Apps und Hardwareratgeber, geprüft am 1. November 2026.",
          "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html) — Firmenname und Datenschutzbedingungen, geprüft am 1. November 2026.",
          "[Scrypted auf GitHub](https://github.com/koush/scrypted) — LICENSE-Datei, Paketangaben und Commit-Verlauf, geprüft am 1. November 2026.",
          "[Releases der Scrypted-Desktop-App](https://github.com/koush/nvr.scrypted.app/releases) — Version 0.147.1 vom 19. September 2026 und ihre Dateiliste, geprüft am 1. November 2026.",
          "[Scrypted im App Store](https://apps.apple.com/us/app/scrypted/id1658171214) — Anbietername und Eintrag, geprüft am 1. November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[Home-Assistant-Assist-Rezension](/de/power-local-llm/home-assistant-assist-review) — lokale Sprachsteuerung und LLM-Agenten in Home Assistant.",
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
    "theme": "Voice, Speech & Multimodal",
    "heroImage": "/images/scrypted-review-hero-es.webp",
    "title": "Reseña de Scrypted: plataforma de cámaras y NVR abierta con opciones de IA local",
    "seoTitle": "Reseña de Scrypted: plataforma de cámaras y NVR abierta",
    "intro": "Scrypted es una plataforma de integración de vídeo de código abierto creada por Vysor, Inc. Recibe las transmisiones de cámaras locales y las pasa a HomeKit, Google Home, Alexa y Home Assistant, y su plugin de pago Scrypted NVR añade grabación 24/7 y detecciones con IA. No es una app de chat ni de LLM: su IA local consiste en detección de objetos y un plugin LLM opcional que redacta resúmenes de eventos. Esta reseña se basa en [scrypted.app](https://www.scrypted.app), la [documentación](https://docs.scrypted.app) y el [repositorio de GitHub](https://github.com/koush/scrypted), consultados el 1 de noviembre de 2026; PromptQuorum no ha probado Scrypted en la práctica.",
    "metaDescription": "Reseña de Scrypted: plataforma abierta que lleva cámaras locales a HomeKit, Google Home y Home Assistant, con NVR de pago e IA local opcional. Sin probar.",
    "twitterDescription": "Reseña de Scrypted: una plataforma de cámaras de código abierto con NVR de pago y resúmenes LLM locales opcionales mediante llama.cpp. Qué confirman las fuentes y qué dejan abierto.",
    "audience": "Dueños de cámaras IP locales que quieren verlas en HomeKit, Google Home o Home Assistant y necesitan saber cuánto cuesta Scrypted, qué hardware pide y cuánta de su IA se ejecuta en local.",
    "readTime": "5 min de lectura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "reseña de Scrypted",
    "targetKeywords": [
      "reseña scrypted",
      "scrypted nvr",
      "scrypted homekit",
      "scrypted home assistant",
      "scrypted llm local",
      "scrypted resúmenes ia",
      "instalar scrypted"
    ],
    "current_models_mentioned": [
      "Qwen",
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "Mac mini",
      "Intel N100",
      "Apple Silicon"
    ],
    "leadAnswerBlock": "**Scrypted (app de escritorio versión 0.147.1, publicada el 19 de septiembre de 2026) es una plataforma de vídeo de código abierto que conecta cámaras IP locales con HomeKit, Google Home, Alexa y Home Assistant, con un plugin NVR de pago para grabación y detecciones con IA.** Sus funciones de IA son la detección de objetos y los resúmenes LLM opcionales; no ofrece un asistente de chat.",
    "quickAnswerTop": {
      "es": {
        "question": "¿Scrypted ejecuta un LLM local?",
        "answer": "Solo si añades el plugin LLM. Según la documentación, el plugin puede alojar modelos con llama.cpp en tu propio servidor o conectarse a ChatGPT, Claude o Gemini con tu propia clave de API; Scrypted NVR usa el modelo para los resúmenes de eventos.",
        "bullets": [
          "Hay apps de visualización para iOS y Android; la app de escritorio cubre Mac, Windows y Linux.",
          "El plugin NVR y la app de escritorio son de pago; se mencionan una versión gratuita y una prueba gratuita del NVR.",
          "Los modelos locales necesitan unos 12 GB de memoria de GPU, o un Mac con 16 GB, según la documentación.",
          "La detección puede ejecutarse en CPU, GPU, Apple Neural Engine, NPU de Intel o un acelerador Coral."
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
        "label": "¿Qué es Scrypted?",
        "anchor": "what-is-scrypted"
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
            "text": "Scrypted es una plataforma de código abierto que conecta cámaras IP locales con HomeKit, Google Home, Alexa y Home Assistant, con un NVR de pago y IA local opcional."
          },
          {
            "type": "plain-terms",
            "text": "Ejecutas Scrypted en un Mac, un PC con Windows, un equipo Linux o un NAS, añades tus cámaras y las ves en las apps de casa inteligente que ya usas; la grabación y los resúmenes de eventos con IA son extras."
          }
        ],
        "items": [
          "Mantenimiento: el último commit de la rama principal es del 1 de noviembre de 2026 y la última versión de escritorio, 0.147.1, del 19 de septiembre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.",
          "Alcance: una plataforma de integración y grabación de cámaras, no una app de chat; la IA local es detección más resúmenes opcionales.",
          "Coste: la plataforma empieza siendo gratuita; el NVR es una suscripción con prueba gratuita y la app de escritorio requiere una licencia de pago. La documentación no indica precios.",
          "Licencia: el repositorio dice que el licenciamiento varía según el directorio, así que cada plugin requiere su propia comprobación.",
          "Acceso remoto: ver las cámaras fuera de tu red pasa por el plugin Scrypted Cloud y un inicio de sesión."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta reseña se basa en el sitio web de Scrypted, la documentación y los repositorios de GitHub, consultados el 1 de noviembre de 2026. PromptQuorum no ha instalado ni ejecutado Scrypted, así que no se evalúan la precisión de la detección, la velocidad ni la calidad de los resúmenes."
          }
        ]
      },
      "overview": {
        "id": "what-is-scrypted",
        "title": "¿Qué es Scrypted?",
        "content": [
          "**Scrypted es una plataforma de integración de vídeo que toma las transmisiones de las cámaras y hace que aparezcan en otros sistemas de casa inteligente.** La documentación enumera HomeKit (incluido HomeKit Secure Video), Google Home, Alexa y Home Assistant como destinos; la plataforma se compone de plugins, uno por marca de cámara o función. El fabricante es Vysor, Inc., la empresa que figura en la política de privacidad de la documentación.",
          "**Scrypted NVR es un plugin de pago sobre esa base.** Graba 24/7 y añade detecciones inteligentes, reconocimiento facial, reconocimiento de matrículas, búsqueda en lenguaje natural en el historial de grabaciones y resúmenes con IA, con apps para iOS, Android, escritorio y navegador. El plugin LLM, independiente, aporta el modelo de lenguaje para los resúmenes."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo conseguirla",
        "content": [
          "**Scrypted se instala como app de escritorio en Mac y Windows, o como servidor en Linux, Proxmox VE, Unraid y sistemas NAS, con apps para iOS y Android para ver las cámaras.**"
        ],
        "columns": [
          "Opción",
          "Cómo conseguirla"
        ],
        "rows": [
          {
            "Opción": "Mac y Windows",
            "Cómo conseguirla": "Instaladores de la app de escritorio en [GitHub Releases](https://github.com/koush/nvr.scrypted.app/releases): .dmg para Mac con Apple Silicon e Intel, .exe para Windows; según la documentación, la app de escritorio requiere una licencia de pago"
          },
          {
            "Opción": "iPhone y iPad",
            "Cómo conseguirla": "[Scrypted en la App Store](https://apps.apple.com/us/app/scrypted/id1658171214)"
          },
          {
            "Opción": "Android",
            "Cómo conseguirla": "[Scrypted en Google Play](https://play.google.com/store/apps/details?id=app.scrypted.nvr)"
          },
          {
            "Opción": "Linux",
            "Cómo conseguirla": "Docker Compose con red de host, o la app de escritorio como paquete .deb, que la documentación recomienda solo como visor de Scrypted NVR"
          },
          {
            "Opción": "Proxmox VE, Unraid, NAS",
            "Cómo conseguirla": "Proxmox VE es el host recomendado para servidores Intel o AMD dedicados; Unraid, ReadyNAS, Synology y QNAP usan Docker, según la [guía de instalación](https://docs.scrypted.app/installation.html)"
          },
          {
            "Opción": "Navegador",
            "Cómo conseguirla": "[nvr.scrypted.app](https://nvr.scrypted.app) tras instalar el plugin Scrypted Cloud, o la opción de instalar como app del navegador"
          },
          {
            "Opción": "Sitio web",
            "Cómo conseguirla": "[scrypted.app](https://www.scrypted.app)"
          },
          {
            "Opción": "Documentación",
            "Cómo conseguirla": "[docs.scrypted.app](https://docs.scrypted.app)"
          },
          {
            "Opción": "Política de privacidad",
            "Cómo conseguirla": "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html), actualizada por última vez el 22 de febrero de 2024 según la página"
          },
          {
            "Opción": "Código fuente",
            "Cómo conseguirla": "[github.com/koush/scrypted](https://github.com/koush/scrypted); el licenciamiento varía según el directorio"
          }
        ],
        "note": "Versión revisada: app de escritorio 0.147.1, publicada el 19 de septiembre de 2026; la última etiqueta de versión del repositorio del servidor es la 0.147.0 del 13 de septiembre de 2026. Según la documentación, Docker Desktop en Mac o Windows no funciona con Scrypted porque allí no está disponible la red de host."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**Para Scrypted NVR la documentación recomienda una CPU Intel de 9.ª generación en Windows, de 6.ª generación en Linux o Apple Silicon en macOS, además de una unidad de al menos 1 TB.**"
        ],
        "columns": [
          "Elemento",
          "Qué dicen las fuentes"
        ],
        "rows": [
          {
            "Elemento": "Potencia del servidor",
            "Qué dicen las fuentes": "Una tabla orientativa indica un Intel N100 para 12 cámaras, un Dell Wyse 5070 para 5, y un Mac mini con 16 GB o un Intel Core Ultra 125H para 20 o más"
          },
          {
            "Elemento": "Almacenamiento",
            "Qué dicen las fuentes": "Al menos 1 TB; se recomiendan discos de videovigilancia y no deben usarse memorias flash ni tarjetas SD por el volumen de escritura"
          },
          {
            "Elemento": "Cámaras",
            "Qué dicen las fuentes": "Se admiten oficialmente cámaras RTSP locales con ONVIF y H.264; Ring, Google/Nest, Arlo, Wyze, firmware personalizado como Thingino y cámaras de batería no"
          },
          {
            "Elemento": "LLM local",
            "Qué dicen las fuentes": "Mac con Apple Silicon y 16 GB, GPU NVIDIA o AMD con 12 GB, o AMD AI MAX; los modelos listados necesitan de 5 GB (Qwen3.5-4B) a 26 GB (Qwen3.5-35B-A3B)"
          },
          {
            "Elemento": "Hardware de detección",
            "Qué dicen las fuentes": "CPU, GPU, Apple Neural Engine, NPU de Intel o acelerador Coral"
          }
        ],
        "note": "Estas cifras proceden de la guía de hardware del NVR y de la página del LLM; no se comprobó un mínimo aparte para la plataforma gratuita sin NVR."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Cómo empezar",
        "content": [
          "**Los pasos siguen la documentación; PromptQuorum no los ha ejecutado.**"
        ],
        "numberedItems": [
          {
            "title": "Instala Scrypted",
            "whyItMatters": "Usa la app de escritorio en Mac o Windows, o Docker, Proxmox VE o Unraid en un servidor, y abre la consola de administración en https://localhost:10443 aceptando la advertencia del certificado."
          },
          {
            "title": "Añade y valida tus cámaras",
            "whyItMatters": "Añade cada cámara como se describe en las páginas de configuración de cámaras; la documentación aconseja verificar las cámaras en la versión gratuita antes de iniciar la prueba del NVR."
          },
          {
            "title": "Conecta tu plataforma de casa inteligente",
            "whyItMatters": "Instala el plugin de HomeKit, Google Home, Alexa o Home Assistant y añade allí las cámaras."
          },
          {
            "title": "Opcional: añade el NVR y un LLM",
            "whyItMatters": "Instala el plugin Scrypted NVR e inicia sesión con la cuenta del portal de facturación; para los resúmenes con IA, instala el plugin LLM y elige una clave en la nube o un modelo local."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones confirmadas por las fuentes",
        "content": [
          "**Todo lo que sigue procede del sitio web o de la documentación; nada se ha probado aquí.**"
        ],
        "items": [
          "**Plataformas.** HomeKit con HomeKit Secure Video, Google Home (no en iOS), Alexa y Home Assistant.",
          "**Scrypted NVR.** Grabación 24/7, vistas de línea de tiempo y eventos, reconocimiento facial, reconocimiento de matrículas, notificaciones enriquecidas y bitrate adaptativo.",
          "**Resúmenes con IA y búsqueda con IA.** Descripciones breves en lenguaje natural de las detecciones enviadas como notificaciones push, y búsqueda en lenguaje natural en el historial de todas las cámaras.",
          "**Plugin LLM.** ChatGPT, Claude o Gemini con tu propia clave de API, o modelos locales alojados con llama.cpp, incluidas variantes de Qwen3.5 y Gemma 4; los resúmenes con IA pueden usar cualquiera de las dos vías.",
          "**Detección acelerada por hardware.** Los plugins de detección de objetos se ejecutan en CPU, GPU, Apple Neural Engine, NPU de Intel o Coral, y el modo Cluster puede delegar modelos en una GPU de otro equipo."
        ],
        "note": "La documentación recomienda modelos concretos de bajo coste en la nube por precio y rendimiento; es una orientación del fabricante, no un resultado de PromptQuorum."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flujo de datos y privacidad",
        "content": [
          "**La detección y la grabación se ejecutan en tu propio servidor, pero los resúmenes con IA solo se quedan en casa si eliges un modelo local.** La documentación dice que los modelos locales permiten ejecutar los resúmenes con IA íntegramente en local, sin enviar imágenes a la nube; con un proveedor en la nube, las imágenes van a ese proveedor según su propia política.",
          "Ver las cámaras fuera de tu red usa el plugin Scrypted Cloud y un inicio de sesión de Scrypted Cloud. La política de privacidad de la documentación nombra a Vysor, Inc. como la empresa; PromptQuorum no ha analizado qué almacena el servicio en la nube."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Son declaraciones del fabricante, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red, el servicio en la nube ni el código."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quién es",
        "items": [
          "**Usuarios de HomeKit y Google Home** con cámaras RTSP u ONVIF locales que quieren esas transmisiones en su app de casa.",
          "**Usuarios de Home Assistant** que quieren transmisiones de cámara con detecciones inteligentes en su configuración.",
          "**Dueños de un Mac mini, un equipo con Proxmox o un NAS** que quieren un NVR autoalojado con resúmenes de IA local opcionales."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Precios.** La documentación no da ningún importe para la suscripción del NVR ni para la licencia de escritorio y el portal de facturación exige iniciar sesión, así que aquí no se indica ningún precio.",
          "**Licenciamiento.** El archivo LICENSE del repositorio dice que el licenciamiento varía según el directorio y que algunos plugins pueden requerir cumplir la GPL; el paquete del servidor declara ISC, y no se comprobó la licencia de cada plugin ni la del NVR.",
          "**Rendimiento.** El número de cámaras por equipo, la precisión de la detección y la calidad de los resúmenes son cifras del fabricante y no se midieron.",
          "**Tratamiento de datos en la nube.** No se analizó qué almacena Scrypted Cloud para el acceso remoto.",
          "**Calidad de los modelos locales.** No se ha probado si los modelos locales listados redactan resúmenes de eventos útiles para tus cámaras."
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
            "Plataformas": "Linux, web, iOS, Android",
            "Precio / licencia": "Gratis / Apache-2.0",
            "Diferencia clave": "Asistente de voz dentro de Home Assistant, no una plataforma de cámaras"
          }
        ],
        "note": "Ninguna otra app de cámaras o NVR tiene todavía una reseña de PromptQuorum. Scrypted incluye Home Assistant como plataforma de destino, así que no son rivales estrictos. Comprueba el precio, la licencia y las plataformas actuales de cada app en su propia ficha antes de elegir."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿Puedo pedir un reembolso de Scrypted NVR?",
            "a": "No. La política de compra dice que todas las ventas son definitivas y que las suscripciones canceladas terminan en la siguiente fecha de renovación sin prorrateo; se envía un recordatorio de pago por correo una semana antes del cobro."
          },
          {
            "q": "¿Scrypted funciona con Ollama?",
            "a": "La documentación dice que Ollama y LM Studio no ofrecen endpoints de OpenAI totalmente compatibles y que pueden no funcionar bien. Prefiere el llama.cpp propio del plugin LLM y también recomienda vLLM y SGLang."
          },
          {
            "q": "¿Puede Scrypted funcionar en una Raspberry Pi?",
            "a": "La guía de hardware dice que no se recomiendan Raspberry Pi 4 ni NAS de bajo rendimiento para Scrypted NVR; no da veredicto para la plataforma sin el NVR."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "Scrypted es una forma activamente desarrollada de llevar cámaras IP locales a HomeKit, Google Home, Alexa o Home Assistant, con un NVR de pago y resúmenes LLM locales opcionales encima. En contra: es una plataforma de vídeo y no una app de LLM local, el NVR y la app de escritorio cuestan dinero a precios no publicados, el licenciamiento del repositorio varía según el directorio y PromptQuorum no ha probado nada de ello. Encaja con quien tiene cámaras RTSP u ONVIF locales y acepta un NVR de pago; para un chat local puro es la herramienta equivocada."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Sitio web de Scrypted](https://www.scrypted.app) — resumen del producto y lista de plataformas, consultado el 1 de noviembre de 2026.",
          "[Documentación de Scrypted](https://docs.scrypted.app) — instalación, app de escritorio, plugin LLM, funciones del NVR, resúmenes con IA, apps y guía de hardware, consultada el 1 de noviembre de 2026.",
          "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html) — nombre de la empresa y condiciones de protección de datos, consultada el 1 de noviembre de 2026.",
          "[Scrypted en GitHub](https://github.com/koush/scrypted) — archivo LICENSE, metadatos del paquete e historial de commits, consultado el 1 de noviembre de 2026.",
          "[Versiones de la app de escritorio de Scrypted](https://github.com/koush/nvr.scrypted.app/releases) — versión 0.147.1 del 19 de septiembre de 2026 y su lista de archivos, consultadas el 1 de noviembre de 2026.",
          "[Scrypted en la App Store](https://apps.apple.com/us/app/scrypted/id1658171214) — nombre del vendedor y ficha, consultados el 1 de noviembre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Reseña de Home Assistant Assist](/es/power-local-llm/home-assistant-assist-review) — control por voz local y agentes LLM dentro de Home Assistant.",
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
    "theme": "Voice, Speech & Multimodal",
    "heroImage": "/images/scrypted-review-hero-fr.webp",
    "title": "Test de Scrypted : plateforme de caméras et NVR ouverte avec options d’IA locale",
    "seoTitle": "Test de Scrypted : plateforme de caméras et NVR ouverte",
    "intro": "Scrypted est une plateforme d’intégration vidéo open source éditée par Vysor, Inc. Elle reçoit les flux de caméras locales et les transmet à HomeKit, Google Home, Alexa et Home Assistant, et son plugin payant Scrypted NVR ajoute l’enregistrement 24 h/24 et des détections par IA. Ce n’est pas une appli de chat ni de LLM : son IA locale se résume à la détection d’objets et à un plugin LLM facultatif qui rédige des résumés d’événements. Ce test s’appuie sur [scrypted.app](https://www.scrypted.app), la [documentation](https://docs.scrypted.app) et le [dépôt GitHub](https://github.com/koush/scrypted), consultés le 1er novembre 2026 ; PromptQuorum n’a pas testé Scrypted en pratique.",
    "metaDescription": "Test de Scrypted : plateforme open source reliant caméras locales, HomeKit, Google Home et Home Assistant, avec NVR payant et IA locale. Non testé.",
    "twitterDescription": "Test de Scrypted : une plateforme de caméras open source avec NVR payant et résumés LLM locaux facultatifs via llama.cpp. Ce que les sources confirment et ce qu’elles laissent ouvert.",
    "audience": "Propriétaires de caméras IP locales qui veulent les voir dans HomeKit, Google Home ou Home Assistant et qui doivent savoir ce que coûte Scrypted, quel matériel il exige et quelle part de son IA tourne en local.",
    "readTime": "5 min de lecture",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "test de Scrypted",
    "targetKeywords": [
      "test scrypted",
      "scrypted nvr",
      "scrypted homekit",
      "scrypted home assistant",
      "scrypted llm local",
      "scrypted résumés ia",
      "installer scrypted"
    ],
    "current_models_mentioned": [
      "Qwen",
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "Mac mini",
      "Intel N100",
      "Apple Silicon"
    ],
    "leadAnswerBlock": "**Scrypted (appli de bureau en version 0.147.1, publiée le 19 septembre 2026) est une plateforme vidéo open source qui relie des caméras IP locales à HomeKit, Google Home, Alexa et Home Assistant, avec un plugin NVR payant pour l’enregistrement et les détections par IA.** Ses fonctions d’IA sont la détection d’objets et des résumés LLM facultatifs ; il n’offre pas d’assistant de chat.",
    "quickAnswerTop": {
      "fr": {
        "question": "Scrypted exécute-t-il un LLM en local ?",
        "answer": "Uniquement si vous ajoutez le plugin LLM. D’après la documentation, le plugin peut héberger des modèles via llama.cpp sur votre propre serveur ou se connecter à ChatGPT, Claude ou Gemini avec votre propre clé d’API ; Scrypted NVR utilise le modèle pour les résumés d’événements.",
        "bullets": [
          "Des applis de visualisation existent pour iOS et Android ; l’appli de bureau couvre Mac, Windows et Linux.",
          "Le plugin NVR et l’appli de bureau sont payants ; une version gratuite et un essai gratuit du NVR sont mentionnés.",
          "Les modèles locaux demandent environ 12 Go de mémoire GPU, ou un Mac avec 16 Go, selon la documentation.",
          "La détection peut tourner sur CPU, GPU, Apple Neural Engine, NPU Intel ou accélérateur Coral."
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
        "label": "Qu’est-ce que Scrypted ?",
        "anchor": "what-is-scrypted"
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
            "text": "Scrypted est une plateforme open source qui relie des caméras IP locales à HomeKit, Google Home, Alexa et Home Assistant, avec un NVR payant en option et de l’IA locale facultative."
          },
          {
            "type": "plain-terms",
            "text": "Vous exécutez Scrypted sur un Mac, un PC Windows, une machine Linux ou un NAS, vous ajoutez vos caméras et vous les voyez dans les applis de maison connectée que vous utilisez déjà ; l’enregistrement et les résumés d’événements par IA sont des extras."
          }
        ],
        "items": [
          "Maintenance : le dernier commit de la branche principale date du 1er novembre 2026 et la dernière version de bureau, 0.147.1, du 19 septembre 2026 ; aucun avertissement de projet abandonné ne s’applique.",
          "Périmètre : une plateforme d’intégration et d’enregistrement de caméras, pas une appli de chat ; l’IA locale se limite à la détection et à des résumés facultatifs.",
          "Coût : la plateforme démarre gratuitement ; le NVR est un abonnement avec essai gratuit et l’appli de bureau exige une licence payante. La documentation n’indique aucun prix.",
          "Licence : le dépôt précise que la licence varie selon le répertoire ; chaque plugin doit donc être vérifié séparément.",
          "Accès à distance : la consultation hors de votre réseau passe par le plugin Scrypted Cloud et une connexion."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce test s’appuie sur le site de Scrypted, la documentation et les dépôts GitHub, consultés le 1er novembre 2026. PromptQuorum n’a ni installé ni exécuté Scrypted ; la précision de détection, la vitesse et la qualité des résumés ne sont donc pas évaluées."
          }
        ]
      },
      "overview": {
        "id": "what-is-scrypted",
        "title": "Qu’est-ce que Scrypted ?",
        "content": [
          "**Scrypted est une plateforme d’intégration vidéo qui récupère les flux des caméras et les fait apparaître dans d’autres systèmes de maison connectée.** La documentation cite HomeKit (dont HomeKit Secure Video), Google Home, Alexa et Home Assistant comme destinations ; la plateforme est construite à partir de plugins, un par marque de caméra ou par fonction. L’éditeur est Vysor, Inc., la société nommée dans la politique de confidentialité de la documentation.",
          "**Scrypted NVR est un plugin payant qui s’y ajoute.** Il enregistre 24 h/24 et ajoute des détections intelligentes, la reconnaissance faciale, la reconnaissance de plaques d’immatriculation, la recherche en langage naturel dans l’historique des enregistrements et des résumés par IA, avec des applis iOS, Android, de bureau et navigateur. Le plugin LLM, distinct, fournit le modèle de langage pour les résumés."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Où l’obtenir",
        "content": [
          "**Scrypted s’installe comme appli de bureau sur Mac et Windows, ou comme serveur sous Linux, Proxmox VE, Unraid et sur des NAS, avec des applis iOS et Android pour la consultation.**"
        ],
        "columns": [
          "Option",
          "Comment l’obtenir"
        ],
        "rows": [
          {
            "Option": "Mac et Windows",
            "Comment l’obtenir": "Installateurs de l’appli de bureau sur [GitHub Releases](https://github.com/koush/nvr.scrypted.app/releases) : .dmg pour les Mac Apple Silicon et Intel, .exe pour Windows ; selon la documentation, l’appli de bureau exige une licence payante"
          },
          {
            "Option": "iPhone et iPad",
            "Comment l’obtenir": "[Scrypted sur l’App Store](https://apps.apple.com/us/app/scrypted/id1658171214)"
          },
          {
            "Option": "Android",
            "Comment l’obtenir": "[Scrypted sur Google Play](https://play.google.com/store/apps/details?id=app.scrypted.nvr)"
          },
          {
            "Option": "Linux",
            "Comment l’obtenir": "Docker Compose en réseau hôte, ou l’appli de bureau en paquet .deb, que la documentation ne recommande que comme visionneuse pour Scrypted NVR"
          },
          {
            "Option": "Proxmox VE, Unraid, NAS",
            "Comment l’obtenir": "Proxmox VE est l’hôte recommandé pour les serveurs Intel ou AMD dédiés ; Unraid, ReadyNAS, Synology et QNAP passent par Docker, d’après le [guide d’installation](https://docs.scrypted.app/installation.html)"
          },
          {
            "Option": "Navigateur",
            "Comment l’obtenir": "[nvr.scrypted.app](https://nvr.scrypted.app) après installation du plugin Scrypted Cloud, ou l’option d’installation en appli du navigateur"
          },
          {
            "Option": "Site web",
            "Comment l’obtenir": "[scrypted.app](https://www.scrypted.app)"
          },
          {
            "Option": "Documentation",
            "Comment l’obtenir": "[docs.scrypted.app](https://docs.scrypted.app)"
          },
          {
            "Option": "Politique de confidentialité",
            "Comment l’obtenir": "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html), mise à jour pour la dernière fois le 22 février 2024 selon la page"
          },
          {
            "Option": "Code source",
            "Comment l’obtenir": "[github.com/koush/scrypted](https://github.com/koush/scrypted) ; la licence varie selon le répertoire"
          }
        ],
        "note": "Version examinée : appli de bureau 0.147.1, publiée le 19 septembre 2026 ; la dernière étiquette de version du dépôt serveur est la 0.147.0 du 13 septembre 2026. D’après la documentation, Docker Desktop sur Mac ou Windows ne fonctionne pas avec Scrypted, car le réseau hôte n’y est pas disponible."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Configuration requise",
        "content": [
          "**Pour Scrypted NVR, la documentation recommande un processeur Intel de 9e génération sous Windows, de 6e génération sous Linux ou Apple Silicon sous macOS, ainsi qu’un disque d’au moins 1 To.**"
        ],
        "columns": [
          "Élément",
          "Ce que disent les sources"
        ],
        "rows": [
          {
            "Élément": "Puissance du serveur",
            "Ce que disent les sources": "Un tableau indicatif cite un Intel N100 pour 12 caméras, un Dell Wyse 5070 pour 5, et un Mac mini 16 Go ou un Intel Core Ultra 125H pour 20 ou plus"
          },
          {
            "Élément": "Stockage",
            "Ce que disent les sources": "Au moins 1 To ; des disques de vidéosurveillance sont recommandés, les clés USB et cartes SD sont à éviter à cause du volume d’écriture"
          },
          {
            "Élément": "Caméras",
            "Ce que disent les sources": "Les caméras RTSP locales avec ONVIF et H.264 sont officiellement prises en charge ; Ring, Google/Nest, Arlo, Wyze, les firmwares personnalisés comme Thingino et les caméras sur batterie ne le sont pas"
          },
          {
            "Élément": "LLM local",
            "Ce que disent les sources": "Mac Apple Silicon 16 Go, GPU NVIDIA ou AMD 12 Go, ou AMD AI MAX ; les modèles listés demandent de 5 Go (Qwen3.5-4B) à 26 Go (Qwen3.5-35B-A3B)"
          },
          {
            "Élément": "Matériel de détection",
            "Ce que disent les sources": "CPU, GPU, Apple Neural Engine, NPU Intel ou accélérateur Coral"
          }
        ],
        "note": "Ces chiffres viennent du guide matériel du NVR et de la page LLM ; un minimum distinct pour la plateforme gratuite sans NVR n’a pas été vérifié."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Pour bien démarrer",
        "content": [
          "**Les étapes suivent la documentation ; PromptQuorum ne les a pas exécutées.**"
        ],
        "numberedItems": [
          {
            "title": "Installez Scrypted",
            "whyItMatters": "Utilisez l’appli de bureau sous Mac ou Windows, ou Docker, Proxmox VE ou Unraid sur un serveur, puis ouvrez la console d’administration à l’adresse https://localhost:10443 en acceptant l’avertissement de certificat."
          },
          {
            "title": "Ajoutez et validez vos caméras",
            "whyItMatters": "Ajoutez chaque caméra comme décrit dans les pages de configuration des caméras ; la documentation conseille de vérifier les caméras dans la version gratuite avant de lancer l’essai du NVR."
          },
          {
            "title": "Connectez votre plateforme de maison connectée",
            "whyItMatters": "Installez le plugin HomeKit, Google Home, Alexa ou Home Assistant et ajoutez-y les caméras."
          },
          {
            "title": "Facultatif : ajoutez le NVR et un LLM",
            "whyItMatters": "Installez le plugin Scrypted NVR et connectez-vous avec le compte du portail de facturation ; pour les résumés par IA, installez le plugin LLM et choisissez une clé cloud ou un modèle local."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions confirmées par les sources",
        "content": [
          "**Chaque point ci-dessous provient du site ou de la documentation ; aucun n’a été testé ici.**"
        ],
        "items": [
          "**Plateformes.** HomeKit avec HomeKit Secure Video, Google Home (pas sous iOS), Alexa et Home Assistant.",
          "**Scrypted NVR.** Enregistrement 24 h/24, vues chronologie et événements, reconnaissance faciale, reconnaissance de plaques, notifications enrichies et débit adaptatif.",
          "**Résumés par IA et recherche par IA.** Courtes descriptions en langage naturel des détections envoyées en notification push, et recherche en langage naturel dans l’historique de toutes les caméras.",
          "**Plugin LLM.** ChatGPT, Claude ou Gemini avec votre propre clé d’API, ou modèles locaux hébergés via llama.cpp, dont des variantes de Qwen3.5 et Gemma 4 ; les résumés par IA peuvent emprunter l’une ou l’autre voie.",
          "**Détection accélérée par le matériel.** Les plugins de détection d’objets tournent sur CPU, GPU, Apple Neural Engine, NPU Intel ou Coral, et le mode Cluster peut déporter des modèles vers un GPU situé sur une autre machine."
        ],
        "note": "La documentation recommande des modèles cloud précis et peu coûteux selon le prix et les performances ; c’est un conseil de l’éditeur, pas un résultat de PromptQuorum."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flux de données et confidentialité",
        "content": [
          "**La détection et l’enregistrement tournent sur votre propre serveur, mais les résumés par IA ne restent chez vous que si vous choisissez un modèle local.** La documentation indique que les modèles locaux permettent d’exécuter les résumés par IA entièrement sur place, sans envoyer d’images vers le cloud ; avec un fournisseur cloud, les images partent chez ce fournisseur selon sa propre politique.",
          "La consultation hors de votre réseau utilise le plugin Scrypted Cloud et une connexion Scrypted Cloud. La politique de confidentialité de la documentation nomme Vysor, Inc. comme société ; PromptQuorum n’a pas analysé ce que le service cloud conserve."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Il s’agit de déclarations de l’éditeur, pas de résultats d’audit. PromptQuorum n’a inspecté ni le trafic réseau, ni le service cloud, ni le code."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui s’adresse l’appli",
        "items": [
          "**Les utilisateurs de HomeKit et de Google Home** avec des caméras RTSP ou ONVIF locales qui veulent ces flux dans leur appli maison.",
          "**Les utilisateurs de Home Assistant** qui veulent des flux de caméras avec détections intelligentes dans leur installation.",
          "**Les propriétaires d’un Mac mini, d’une machine Proxmox ou d’un NAS** qui veulent un NVR auto-hébergé avec des résumés d’IA locale facultatifs."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n’avons pas pu vérifier",
        "items": [
          "**Prix.** La documentation n’indique aucun montant pour l’abonnement NVR ni pour la licence de bureau, et le portail de facturation exige une connexion ; aucun prix n’est donc indiqué ici.",
          "**Licence.** Le fichier LICENSE du dépôt indique que la licence varie selon le répertoire et que certains plugins peuvent imposer la conformité à la GPL ; le paquet serveur déclare ISC, et la licence de chaque plugin et du NVR n’a pas été vérifiée.",
          "**Performances.** Le nombre de caméras par machine, la précision de détection et la qualité des résumés sont des chiffres de l’éditeur et n’ont pas été mesurés.",
          "**Traitement des données dans le cloud.** Ce que Scrypted Cloud conserve pour l’accès à distance n’a pas été analysé.",
          "**Qualité des modèles locaux.** On ignore si les modèles locaux listés rédigent des résumés d’événements utiles pour vos caméras."
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
            "Appli": "[Home Assistant Assist](/fr/power-local-llm/home-assistant-assist-review)",
            "Plateformes": "Linux, web, iOS, Android",
            "Prix / licence": "Gratuit / Apache-2.0",
            "Différence clé": "Assistant vocal dans Home Assistant, pas une plateforme de caméras"
          }
        ],
        "note": "Aucune autre appli de caméras ou de NVR n’a encore de test PromptQuorum. Scrypted cite Home Assistant comme plateforme de destination ; les deux ne sont donc pas de strictes rivales. Vérifiez le prix, la licence et les plateformes actuels de chaque appli sur sa propre fiche avant de choisir."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "Puis-je me faire rembourser Scrypted NVR ?",
            "a": "Non. La politique d’achat indique que toutes les ventes sont définitives et que les abonnements résiliés prennent fin à la prochaine date de renouvellement sans prorata ; un rappel de paiement est envoyé par e-mail une semaine avant la facturation."
          },
          {
            "q": "Scrypted fonctionne-t-il avec Ollama ?",
            "a": "La documentation indique qu’Ollama et LM Studio ne fournissent pas de points d’accès OpenAI entièrement conformes et peuvent mal fonctionner. Elle préfère le llama.cpp intégré au plugin LLM et recommande aussi vLLM et SGLang."
          },
          {
            "q": "Scrypted peut-il tourner sur un Raspberry Pi ?",
            "a": "Le guide matériel indique que le Raspberry Pi 4 et les NAS peu performants ne sont pas recommandés pour Scrypted NVR ; il ne se prononce pas pour la plateforme sans NVR."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "Scrypted est un moyen activement développé d’amener des caméras IP locales dans HomeKit, Google Home, Alexa ou Home Assistant, avec un NVR payant et des résumés LLM locaux facultatifs par-dessus. En revanche, c’est une plateforme vidéo et non une appli de LLM local, le NVR et l’appli de bureau sont payants à des prix non publiés, la licence du dépôt varie selon le répertoire et PromptQuorum n’a rien testé de tout cela. Il convient à ceux qui ont des caméras RTSP ou ONVIF locales et acceptent un NVR payant ; pour un simple chat local, c’est le mauvais outil."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Site web de Scrypted](https://www.scrypted.app) — présentation du produit et liste des plateformes, consulté le 1er novembre 2026.",
          "[Documentation de Scrypted](https://docs.scrypted.app) — installation, appli de bureau, plugin LLM, fonctions du NVR, résumés par IA, applis et guide matériel, consultée le 1er novembre 2026.",
          "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html) — nom de la société et conditions de protection des données, consultée le 1er novembre 2026.",
          "[Scrypted sur GitHub](https://github.com/koush/scrypted) — fichier LICENSE, métadonnées du paquet et historique des commits, consulté le 1er novembre 2026.",
          "[Versions de l’appli de bureau Scrypted](https://github.com/koush/nvr.scrypted.app/releases) — version 0.147.1 du 19 septembre 2026 et sa liste de fichiers, consultées le 1er novembre 2026.",
          "[Scrypted sur l’App Store](https://apps.apple.com/us/app/scrypted/id1658171214) — nom du vendeur et fiche, consultés le 1er novembre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "À lire aussi",
        "items": [
          "[Test de Home Assistant Assist](/fr/power-local-llm/home-assistant-assist-review) — commande vocale locale et agents LLM dans Home Assistant.",
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
    "theme": "Voice, Speech & Multimodal",
    "heroImage": "/images/scrypted-review-hero-ja.webp",
    "title": "Scryptedレビュー：ローカルAIも選べるカメラ/NVRプラットフォーム",
    "seoTitle": "Scryptedレビュー：カメラ/NVRプラットフォーム",
    "intro": "Scryptedは、Vysor, Inc.が提供するオープンソースの映像統合プラットフォームです。ローカルカメラのストリームを受け取り、HomeKit、Google Home、Alexa、Home Assistantへ渡します。有料のScrypted NVRプラグインを加えると、24時間録画とAI検知が使えます。チャットやLLM向けのアプリではなく、ローカルAIはオブジェクト検知と、イベントの要約を書く任意のLLMプラグインで構成されています。本レビューは[scrypted.app](https://www.scrypted.app)、[ドキュメント](https://docs.scrypted.app)、[GitHubリポジトリ](https://github.com/koush/scrypted)を2026年11月1日に確認した内容に基づいており、PromptQuorumはScryptedの実機テストを行っていません。",
    "metaDescription": "Scryptedのレビュー。ローカルカメラをHomeKit・Google Home・Home Assistantへ配信するオープンソース基盤で、有料NVRとローカルAIも利用可能。未検証。",
    "twitterDescription": "Scryptedレビュー：有料NVRと、llama.cpp経由のローカルLLM要約を任意で使えるオープンソースのカメラ基盤。情報源が確認した点と未確認の点。",
    "audience": "ローカルIPカメラをHomeKit・Google Home・Home Assistantで使いたく、Scryptedの費用、必要なハードウェア、AIのどこまでがローカルで動くのかを知りたい方。",
    "readTime": "5分で読める",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Scryptedレビュー",
    "targetKeywords": [
      "scrypted レビュー",
      "scrypted nvr",
      "scrypted homekit",
      "scrypted home assistant",
      "scrypted ローカルllm",
      "scrypted ai要約",
      "scrypted インストール"
    ],
    "current_models_mentioned": [
      "Qwen",
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "Mac mini",
      "Intel N100",
      "Apple Silicon"
    ],
    "leadAnswerBlock": "**Scrypted（デスクトップアプリのバージョン0.147.1、2026年9月19日公開）は、ローカルIPカメラをHomeKit、Google Home、Alexa、Home Assistantにつなぐオープンソースの映像プラットフォームで、録画とAI検知は有料のNVRプラグインが担います。** AI機能はオブジェクト検知と任意のLLM要約で、チャットアシスタントはありません。",
    "quickAnswerTop": {
      "ja": {
        "question": "ScryptedはローカルLLMを動かしますか？",
        "answer": "LLMプラグインを追加した場合のみです。ドキュメントによると、このプラグインはllama.cpp経由で自分のサーバー上にモデルを置くか、自分のAPIキーでChatGPT・Claude・Geminiに接続できます。Scrypted NVRはそのモデルをイベント要約に使います。",
        "bullets": [
          "閲覧用アプリはiOSとAndroid向けがあり、デスクトップアプリはMac・Windows・Linuxに対応します。",
          "NVRプラグインとデスクトップアプリは有料で、無料版とNVRの無料トライアルがあるとされています。",
          "ローカルモデルには、ドキュメントによるとGPUメモリ約12 GB、または16 GBのMacが必要です。",
          "検知はCPU、GPU、Apple Neural Engine、Intel NPU、Coralアクセラレーターで実行できます。"
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
        "label": "Scryptedとは",
        "anchor": "what-is-scrypted"
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
            "text": "Scryptedは、ローカルIPカメラをHomeKit、Google Home、Alexa、Home Assistantにつなぐオープンソース基盤で、有料NVRの追加と任意のローカルAIを備えています。"
          },
          {
            "type": "plain-terms",
            "text": "Mac、Windows PC、Linuxマシン、NASのいずれかでScryptedを動かしてカメラを登録すると、普段使っているスマートホームアプリで映像を見られます。録画とAIによるイベント要約は追加機能です。"
          }
        ],
        "items": [
          "保守状況：メインブランチの最新コミットは2026年11月1日、デスクトップ版の最新リリース0.147.1は2026年9月19日で、放置プロジェクトの警告は該当しません。",
          "範囲：カメラの統合と録画のための基盤でチャットアプリではなく、ローカルAIは検知と任意の要約です。",
          "費用：基盤は無料で始められ、NVRはトライアル付きのサブスクリプション、デスクトップアプリは有料ライセンスが必要です。ドキュメントに金額の記載はありません。",
          "ライセンス：リポジトリはディレクトリごとにライセンスが異なると述べており、プラグインごとの確認が必要です。",
          "リモート視聴：ネットワーク外からの視聴にはScrypted Cloudプラグインとログインが必要です。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本レビューは、Scryptedのウェブサイト、ドキュメント、GitHubリポジトリを2026年11月1日に確認した内容に基づいています。PromptQuorumはScryptedをインストールも実行もしていないため、検知精度、速度、要約の品質は評価していません。"
          }
        ]
      },
      "overview": {
        "id": "what-is-scrypted",
        "title": "Scryptedとは",
        "content": [
          "**Scryptedは、カメラのストリームを受け取り、他のスマートホームシステムに表示させる映像統合プラットフォームです。** ドキュメントは連携先としてHomeKit（HomeKit Secure Videoを含む）、Google Home、Alexa、Home Assistantを挙げています。カメラのメーカーや機能ごとのプラグインで構成されています。提供元は、ドキュメントのプライバシーポリシーに記載されているVysor, Inc.です。",
          "**Scrypted NVRは、その上で動く有料プラグインです。** 24時間録画に加え、スマート検知、顔認識、ナンバープレート認識、録画履歴の自然言語検索、AI要約を提供し、iOS・Android・デスクトップ・ブラウザのアプリがあります。要約に使う言語モデルは、別のLLMプラグインが提供します。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "入手方法",
        "content": [
          "**ScryptedはMacとWindowsではデスクトップアプリとして、Linux・Proxmox VE・Unraid・NASではサーバーとしてインストールします。閲覧用にiOSとAndroidのアプリもあります。**"
        ],
        "columns": [
          "項目",
          "入手方法"
        ],
        "rows": [
          {
            "項目": "MacとWindows",
            "入手方法": "デスクトップアプリのインストーラーは[GitHub Releases](https://github.com/koush/nvr.scrypted.app/releases)にあります。Apple SiliconとIntel向けの.dmg、Windows向けの.exeで、ドキュメントによればデスクトップアプリには有料ライセンスが必要です"
          },
          {
            "項目": "iPhoneとiPad",
            "入手方法": "[App StoreのScrypted](https://apps.apple.com/us/app/scrypted/id1658171214)"
          },
          {
            "項目": "Android",
            "入手方法": "[Google PlayのScrypted](https://play.google.com/store/apps/details?id=app.scrypted.nvr)"
          },
          {
            "項目": "Linux",
            "入手方法": "ホストネットワークを使うDocker Compose、または.debパッケージのデスクトップアプリ（ドキュメントはScrypted NVRの閲覧用としてのみ推奨）"
          },
          {
            "項目": "Proxmox VE・Unraid・NAS",
            "入手方法": "Proxmox VEは専用のIntel/AMDサーバーの推奨ホストです。Unraid、ReadyNAS、Synology、QNAPはDockerを使います（[インストールガイド](https://docs.scrypted.app/installation.html)より）"
          },
          {
            "項目": "ブラウザ",
            "入手方法": "Scrypted Cloudプラグインを入れたうえで[nvr.scrypted.app](https://nvr.scrypted.app)を開くか、ブラウザのアプリとしてインストールする機能を使います"
          },
          {
            "項目": "公式サイト",
            "入手方法": "[scrypted.app](https://www.scrypted.app)"
          },
          {
            "項目": "ドキュメント",
            "入手方法": "[docs.scrypted.app](https://docs.scrypted.app)"
          },
          {
            "項目": "プライバシーポリシー",
            "入手方法": "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html)（ページによると最終更新は2024年2月22日）"
          },
          {
            "項目": "ソースコード",
            "入手方法": "[github.com/koush/scrypted](https://github.com/koush/scrypted)。ライセンスはディレクトリごとに異なります"
          }
        ],
        "note": "確認したバージョン：デスクトップアプリ0.147.1（2026年9月19日公開）。サーバーリポジトリの最新リリースタグは2026年9月13日の0.147.0です。ドキュメントによると、MacやWindowsのDocker Desktopではホストネットワークが使えないため、Scryptedは動作しません。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "動作要件",
        "content": [
          "**Scrypted NVRについて、ドキュメントはWindowsでは第9世代Intel CPU、Linuxでは第6世代、macOSではApple Siliconと、1 TB以上のドライブを推奨しています。**"
        ],
        "columns": [
          "項目",
          "情報源の記載"
        ],
        "rows": [
          {
            "項目": "サーバーの性能",
            "情報源の記載": "目安の表では、Intel N100で12台、Dell Wyse 5070で5台、16 GBのMac miniまたはIntel Core Ultra 125Hで20台以上とされています"
          },
          {
            "項目": "ストレージ",
            "情報源の記載": "1 TB以上。監視用ドライブを推奨し、書き込み量が多いためUSBメモリやSDカードは使わないよう案内されています"
          },
          {
            "項目": "カメラ",
            "情報源の記載": "ONVIFとH.264に対応したローカルRTSPカメラが公式対応です。Ring、Google/Nest、Arlo、Wyze、Thinginoなどのカスタムファームウェア、バッテリー式カメラは対象外です"
          },
          {
            "項目": "ローカルLLM",
            "情報源の記載": "16 GBのApple Silicon Mac、12 GBのNVIDIAまたはAMD GPU、またはAMD AI MAXが必要です。掲載モデルの必要量は5 GB（Qwen3.5-4B）から26 GB（Qwen3.5-35B-A3B）です"
          },
          {
            "項目": "検知用ハードウェア",
            "情報源の記載": "CPU、GPU、Apple Neural Engine、Intel NPU、Coralアクセラレーター"
          }
        ],
        "note": "これらの数値はNVRのハードウェアガイドとLLMのページによるものです。NVRなしの無料基盤の最小要件は別途確認していません。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "使い始めるには",
        "content": [
          "**手順はドキュメントに沿ったもので、PromptQuorumは実行していません。**"
        ],
        "numberedItems": [
          {
            "title": "Scryptedをインストールする",
            "whyItMatters": "MacやWindowsではデスクトップアプリを、サーバーではDocker、Proxmox VE、Unraidのいずれかを使い、https://localhost:10443で管理コンソールを開いて証明書の警告を承認します。"
          },
          {
            "title": "カメラを追加して検証する",
            "whyItMatters": "カメラ設定のページに従って各カメラを追加します。ドキュメントは、NVRのトライアルを始める前に無料版でカメラを確認するよう勧めています。"
          },
          {
            "title": "スマートホームのプラットフォームを接続する",
            "whyItMatters": "HomeKit、Google Home、Alexa、Home Assistantのいずれかのプラグインを入れ、そこにカメラを追加します。"
          },
          {
            "title": "任意：NVRとLLMを追加する",
            "whyItMatters": "Scrypted NVRプラグインをインストールし、課金ポータルのアカウントでログインします。AI要約を使う場合はLLMプラグインを入れ、クラウドのキーかローカルモデルを選びます。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "情報源で確認できた機能",
        "content": [
          "**以下はすべてウェブサイトまたはドキュメントの記載によるもので、ここでは試していません。**"
        ],
        "items": [
          "**対応プラットフォーム。** HomeKit（HomeKit Secure Video対応）、Google Home（iOSは非対応）、Alexa、Home Assistant。",
          "**Scrypted NVR。** 24時間録画、タイムラインとイベントの表示、顔認識、ナンバープレート認識、サムネイル付き通知、アダプティブビットレート。",
          "**AI要約とAI検索。** 検知内容を自然言語で短く説明してプッシュ通知で届ける機能と、全カメラの履歴を自然言語で検索する機能。",
          "**LLMプラグイン。** 自分のAPIキーでChatGPT・Claude・Gemini、またはllama.cppで動かすローカルモデル（Qwen3.5やGemma 4の各種）。AI要約はどちらの方法も使えます。",
          "**ハードウェアによる検知の高速化。** オブジェクト検知プラグインはCPU、GPU、Apple Neural Engine、Intel NPU、Coralで動作し、クラスターモードでは別マシンのGPUへモデルを任せられます。"
        ],
        "note": "ドキュメントは価格と性能の観点で低価格のクラウドモデルを推奨していますが、これは提供元の案内であり、PromptQuorumの結果ではありません。"
      },
      "privacy": {
        "id": "privacy",
        "title": "データの流れとプライバシー",
        "content": [
          "**検知と録画は自分のサーバーで動きますが、AI要約が家の外に出ないのはローカルモデルを選んだ場合だけです。** ドキュメントによると、ローカルモデルならAI要約を画像をクラウドに送らずにすべて自分の環境で実行できます。クラウドのプロバイダーを使う場合、画像はそのプロバイダーのポリシーに従って送られます。",
          "ネットワーク外から見る場合は、Scrypted Cloudプラグインとそのログインを使います。ドキュメントのプライバシーポリシーは運営会社をVysor, Inc.としており、クラウドサービスが何を保存するかはPromptQuorumでは分析していません。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "これらは提供元の説明であり、監査結果ではありません。PromptQuorumはネットワーク通信、クラウドサービス、コードのいずれも検査していません。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "おすすめできる人",
        "items": [
          "**HomeKitやGoogle Homeを使っていて**、ローカルのRTSP/ONVIFカメラの映像をホームアプリで見たい方。",
          "**Home Assistantを使っていて**、スマート検知付きのカメラ映像を環境に取り込みたい方。",
          "**Mac mini、Proxmoxマシン、NASを持っていて**、ローカルAI要約を任意で使えるセルフホストのNVRが欲しい方。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかった点",
        "items": [
          "**価格。** ドキュメントにはNVRのサブスクリプションもデスクトップライセンスも金額の記載がなく、課金ポータルはログインが必要なため、ここでは価格を示していません。",
          "**ライセンス。** リポジトリのLICENSEファイルはディレクトリごとにライセンスが異なり、一部のプラグインはGPL準拠が必要になり得ると述べています。サーバーパッケージはISCと宣言していますが、各プラグインとNVRのライセンスは確認していません。",
          "**性能。** 1台あたりのカメラ数、検知精度、要約の品質は提供元の数値で、測定していません。",
          "**クラウドでのデータの扱い。** リモート視聴のためにScrypted Cloudが何を保存するかは分析していません。",
          "**ローカルモデルの品質。** 掲載のローカルモデルが、お使いのカメラで役に立つイベント要約を書けるかは未検証です。"
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
            "アプリ": "[Home Assistant Assist](/ja/power-local-llm/home-assistant-assist-review)",
            "対応環境": "Linux、Web、iOS、Android",
            "価格／ライセンス": "無料／Apache-2.0",
            "主な違い": "Home Assistant内の音声アシスタントで、カメラ基盤ではない"
          }
        ],
        "note": "PromptQuorumのレビューがあるカメラ/NVRアプリは、現時点で他にありません。ScryptedはHome Assistantを連携先として挙げているため、両者は厳密な競合ではありません。選ぶ前に、各アプリの最新の価格、ライセンス、対応環境をそれぞれの掲載ページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "Scrypted NVRは返金してもらえますか？",
            "a": "いいえ。購入ポリシーでは、すべての販売は最終的で、解約したサブスクリプションは日割りなしで次の更新日に終了するとされています。請求の1週間前に支払いのリマインダーがメールで届きます。"
          },
          {
            "q": "ScryptedはOllamaで使えますか？",
            "a": "ドキュメントによると、OllamaとLM StudioはOpenAI互換のエンドポイントとして完全ではなく、正しく動かない場合があります。LLMプラグイン内蔵のllama.cppを優先し、vLLMとSGLangも推奨しています。"
          },
          {
            "q": "ScryptedはRaspberry Piで動きますか？",
            "a": "ハードウェアガイドは、Scrypted NVRにはRaspberry Pi 4や低性能なNASを推奨しないとしています。NVRなしの基盤については判断を示していません。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "総評",
        "content": "Scryptedは、ローカルIPカメラをHomeKit、Google Home、Alexa、Home Assistantに取り込むための、活発に開発されている手段です。有料のNVRと、任意のローカルLLM要約を上に重ねられます。一方で、ローカルLLMアプリではなく映像プラットフォームであり、NVRとデスクトップアプリは金額が公表されていない有料で、リポジトリのライセンスはディレクトリごとに異なり、PromptQuorumはいずれも試していません。ローカルのRTSP/ONVIFカメラを持ち、有料NVRを受け入れられる方に向いています。ローカルチャットだけが目的なら、適したツールではありません。"
      },
      "sources": {
        "id": "sources",
        "title": "情報源",
        "items": [
          "[Scryptedウェブサイト](https://www.scrypted.app) — 製品概要と対応プラットフォーム一覧（2026年11月1日確認）。",
          "[Scryptedドキュメント](https://docs.scrypted.app) — インストール、デスクトップアプリ、LLMプラグイン、NVR機能、AI要約、アプリ、ハードウェアガイド（2026年11月1日確認）。",
          "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html) — 会社名とデータ保護の条件（2026年11月1日確認）。",
          "[GitHubのScrypted](https://github.com/koush/scrypted) — LICENSEファイル、パッケージ情報、コミット履歴（2026年11月1日確認）。",
          "[Scryptedデスクトップアプリのリリース](https://github.com/koush/nvr.scrypted.app/releases) — 2026年9月19日公開のバージョン0.147.1とそのファイル一覧（2026年11月1日確認）。",
          "[App StoreのScrypted](https://apps.apple.com/us/app/scrypted/id1658171214) — 販売元名と掲載内容（2026年11月1日確認）。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[Home Assistant Assistレビュー](/ja/power-local-llm/home-assistant-assist-review) — Home Assistant内のローカル音声操作とLLMエージェント。",
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
    "theme": "Voice, Speech & Multimodal",
    "heroImage": "/images/scrypted-review-hero-pt.webp",
    "title": "Análise do Scrypted: plataforma de câmeras e NVR com opções de IA local",
    "seoTitle": "Análise do Scrypted: plataforma de câmeras e NVR",
    "intro": "O Scrypted é uma plataforma de integração de vídeo de código aberto feita pela Vysor, Inc. Ele recebe os streams de câmeras locais e os repassa ao HomeKit, Google Home, Alexa e Home Assistant, e seu plugin pago Scrypted NVR acrescenta gravação 24 horas e detecções com IA. Não é um app de chat nem de LLM: sua IA local consiste em detecção de objetos e um plugin de LLM opcional que escreve resumos de eventos. Esta análise se baseia em [scrypted.app](https://www.scrypted.app), na [documentação](https://docs.scrypted.app) e no [repositório do GitHub](https://github.com/koush/scrypted), consultados em 1º de novembro de 2026; a PromptQuorum não testou o Scrypted na prática.",
    "metaDescription": "Análise do Scrypted: plataforma aberta que leva câmeras locais ao HomeKit, Google Home e Home Assistant, com NVR pago e IA local opcional. Não testado.",
    "twitterDescription": "Análise do Scrypted: uma plataforma de câmeras de código aberto com NVR pago e resumos de LLM locais opcionais via llama.cpp. O que as fontes confirmam e o que deixam em aberto.",
    "audience": "Donos de câmeras IP locais que querem vê-las no HomeKit, Google Home ou Home Assistant e precisam saber quanto o Scrypted custa, que hardware exige e quanto da IA roda localmente.",
    "readTime": "5 min de leitura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "análise do Scrypted",
    "targetKeywords": [
      "análise scrypted",
      "scrypted nvr",
      "scrypted homekit",
      "scrypted home assistant",
      "scrypted llm local",
      "scrypted resumos ia",
      "instalar scrypted"
    ],
    "current_models_mentioned": [
      "Qwen",
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "Mac mini",
      "Intel N100",
      "Apple Silicon"
    ],
    "leadAnswerBlock": "**O Scrypted (app de desktop versão 0.147.1, lançada em 19 de setembro de 2026) é uma plataforma de vídeo de código aberto que conecta câmeras IP locais ao HomeKit, Google Home, Alexa e Home Assistant, com um plugin NVR pago para gravação e detecções com IA.** Seus recursos de IA são a detecção de objetos e os resumos de LLM opcionais; ele não oferece um assistente de chat.",
    "quickAnswerTop": {
      "pt": {
        "question": "O Scrypted executa um LLM local?",
        "answer": "Somente se você adicionar o plugin de LLM. Segundo a documentação, o plugin pode hospedar modelos via llama.cpp no seu próprio servidor ou se conectar ao ChatGPT, Claude ou Gemini com a sua chave de API; o Scrypted NVR usa o modelo para os resumos de eventos.",
        "bullets": [
          "Existem apps de visualização para iOS e Android; o app de desktop cobre Mac, Windows e Linux.",
          "O plugin NVR e o app de desktop são pagos; mencionam-se uma versão gratuita e um teste gratuito do NVR.",
          "Os modelos locais precisam de cerca de 12 GB de memória de GPU, ou de um Mac com 16 GB, segundo a documentação.",
          "A detecção pode rodar em CPU, GPU, Apple Neural Engine, NPU da Intel ou acelerador Coral."
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
        "label": "O que é o Scrypted?",
        "anchor": "what-is-scrypted"
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
            "text": "O Scrypted é uma plataforma de código aberto que conecta câmeras IP locais ao HomeKit, Google Home, Alexa e Home Assistant, com um NVR pago como complemento e IA local opcional."
          },
          {
            "type": "plain-terms",
            "text": "Você roda o Scrypted em um Mac, PC com Windows, máquina Linux ou NAS, adiciona suas câmeras e as vê nos apps de casa inteligente que já usa; a gravação e os resumos de eventos com IA são extras."
          }
        ],
        "items": [
          "Manutenção: o commit mais recente do ramo principal é de 1º de novembro de 2026 e a última versão de desktop, 0.147.1, é de 19 de setembro de 2026, então não se aplica aviso de projeto abandonado.",
          "Escopo: uma plataforma de integração e gravação de câmeras, não um app de chat; a IA local é detecção mais resumos opcionais.",
          "Custo: a plataforma começa gratuita; o NVR é uma assinatura com teste gratuito e o app de desktop exige licença paga. A documentação não informa preços.",
          "Licença: o repositório diz que o licenciamento varia conforme o diretório, então cada plugin precisa ser verificado separadamente.",
          "Acesso remoto: ver as câmeras fora da sua rede passa pelo plugin Scrypted Cloud e por um login."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta análise se baseia no site do Scrypted, na documentação e nos repositórios do GitHub, consultados em 1º de novembro de 2026. A PromptQuorum não instalou nem executou o Scrypted, então a precisão da detecção, a velocidade e a qualidade dos resumos não foram avaliadas."
          }
        ]
      },
      "overview": {
        "id": "what-is-scrypted",
        "title": "O que é o Scrypted?",
        "content": [
          "**O Scrypted é uma plataforma de integração de vídeo que recebe os streams das câmeras e os faz aparecer em outros sistemas de casa inteligente.** A documentação lista HomeKit (incluindo HomeKit Secure Video), Google Home, Alexa e Home Assistant como destinos; a plataforma é formada por plugins, um por marca de câmera ou recurso. O fabricante é a Vysor, Inc., a empresa citada na política de privacidade da documentação.",
          "**O Scrypted NVR é um plugin pago sobre essa base.** Ele grava 24 horas por dia e acrescenta detecções inteligentes, reconhecimento facial, reconhecimento de placas, busca em linguagem natural no histórico de gravações e resumos com IA, com apps para iOS, Android, desktop e navegador. O plugin de LLM, separado, fornece o modelo de linguagem para os resumos."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Onde obter",
        "content": [
          "**O Scrypted é instalado como app de desktop no Mac e no Windows, ou como servidor em Linux, Proxmox VE, Unraid e sistemas NAS, com apps para iOS e Android para visualização.**"
        ],
        "columns": [
          "Opção",
          "Como obter"
        ],
        "rows": [
          {
            "Opção": "Mac e Windows",
            "Como obter": "Instaladores do app de desktop no [GitHub Releases](https://github.com/koush/nvr.scrypted.app/releases): .dmg para Macs com Apple Silicon e Intel, .exe para Windows; segundo a documentação, o app de desktop exige licença paga"
          },
          {
            "Opção": "iPhone e iPad",
            "Como obter": "[Scrypted na App Store](https://apps.apple.com/us/app/scrypted/id1658171214)"
          },
          {
            "Opção": "Android",
            "Como obter": "[Scrypted no Google Play](https://play.google.com/store/apps/details?id=app.scrypted.nvr)"
          },
          {
            "Opção": "Linux",
            "Como obter": "Docker Compose com rede do host, ou o app de desktop como pacote .deb, que a documentação recomenda apenas como visualizador do Scrypted NVR"
          },
          {
            "Opção": "Proxmox VE, Unraid, NAS",
            "Como obter": "O Proxmox VE é o host recomendado para servidores Intel ou AMD dedicados; Unraid, ReadyNAS, Synology e QNAP usam Docker, conforme o [guia de instalação](https://docs.scrypted.app/installation.html)"
          },
          {
            "Opção": "Navegador",
            "Como obter": "[nvr.scrypted.app](https://nvr.scrypted.app) após instalar o plugin Scrypted Cloud, ou a opção de instalar como app do navegador"
          },
          {
            "Opção": "Site",
            "Como obter": "[scrypted.app](https://www.scrypted.app)"
          },
          {
            "Opção": "Documentação",
            "Como obter": "[docs.scrypted.app](https://docs.scrypted.app)"
          },
          {
            "Opção": "Política de privacidade",
            "Como obter": "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html), atualizada pela última vez em 22 de fevereiro de 2024, segundo a página"
          },
          {
            "Opção": "Código-fonte",
            "Como obter": "[github.com/koush/scrypted](https://github.com/koush/scrypted); o licenciamento varia conforme o diretório"
          }
        ],
        "note": "Versão analisada: app de desktop 0.147.1, lançada em 19 de setembro de 2026; a última tag de versão do repositório do servidor é a 0.147.0, de 13 de setembro de 2026. Segundo a documentação, o Docker Desktop no Mac ou no Windows não funciona com o Scrypted, porque a rede do host não está disponível ali."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**Para o Scrypted NVR, a documentação recomenda uma CPU Intel de 9ª geração no Windows, de 6ª geração no Linux ou Apple Silicon no macOS, além de um disco de pelo menos 1 TB.**"
        ],
        "columns": [
          "Item",
          "O que as fontes dizem"
        ],
        "rows": [
          {
            "Item": "Capacidade do servidor",
            "O que as fontes dizem": "Uma tabela aproximada cita um Intel N100 para 12 câmeras, um Dell Wyse 5070 para 5, e um Mac mini com 16 GB ou um Intel Core Ultra 125H para 20 ou mais"
          },
          {
            "Item": "Armazenamento",
            "O que as fontes dizem": "Pelo menos 1 TB; recomendam-se discos de vigilância, e pen drives e cartões SD não devem ser usados por causa do volume de gravação"
          },
          {
            "Item": "Câmeras",
            "O que as fontes dizem": "Câmeras RTSP locais com ONVIF e H.264 são oficialmente compatíveis; Ring, Google/Nest, Arlo, Wyze, firmware personalizado como o Thingino e câmeras a bateria não são"
          },
          {
            "Item": "LLM local",
            "O que as fontes dizem": "Mac com Apple Silicon e 16 GB, GPU NVIDIA ou AMD com 12 GB, ou AMD AI MAX; os modelos listados precisam de 5 GB (Qwen3.5-4B) a 26 GB (Qwen3.5-35B-A3B)"
          },
          {
            "Item": "Hardware de detecção",
            "O que as fontes dizem": "CPU, GPU, Apple Neural Engine, NPU da Intel ou acelerador Coral"
          }
        ],
        "note": "Esses números vêm do guia de hardware do NVR e da página do LLM; um mínimo separado para a plataforma gratuita sem o NVR não foi verificado."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Como começar",
        "content": [
          "**Os passos seguem a documentação; a PromptQuorum não os executou.**"
        ],
        "numberedItems": [
          {
            "title": "Instale o Scrypted",
            "whyItMatters": "Use o app de desktop no Mac ou Windows, ou Docker, Proxmox VE ou Unraid em um servidor, e abra o console de gerenciamento em https://localhost:10443, aceitando o aviso de certificado."
          },
          {
            "title": "Adicione e valide suas câmeras",
            "whyItMatters": "Adicione cada câmera como descrito nas páginas de configuração de câmeras; a documentação aconselha verificar as câmeras na versão gratuita antes de iniciar o teste do NVR."
          },
          {
            "title": "Conecte sua plataforma de casa inteligente",
            "whyItMatters": "Instale o plugin do HomeKit, Google Home, Alexa ou Home Assistant e adicione as câmeras lá."
          },
          {
            "title": "Opcional: adicione o NVR e um LLM",
            "whyItMatters": "Instale o plugin Scrypted NVR e entre com a conta do portal de cobrança; para os resumos com IA, instale o plugin de LLM e escolha uma chave de nuvem ou um modelo local."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos confirmados pelas fontes",
        "content": [
          "**Tudo o que segue vem do site ou da documentação; nada foi testado aqui.**"
        ],
        "items": [
          "**Plataformas.** HomeKit com HomeKit Secure Video, Google Home (não no iOS), Alexa e Home Assistant.",
          "**Scrypted NVR.** Gravação 24 horas, visões de linha do tempo e de eventos, reconhecimento facial, reconhecimento de placas, notificações enriquecidas e bitrate adaptativo.",
          "**Resumos com IA e busca com IA.** Descrições curtas em linguagem natural das detecções enviadas como notificações push, e busca em linguagem natural no histórico de todas as câmeras.",
          "**Plugin de LLM.** ChatGPT, Claude ou Gemini com a sua chave de API, ou modelos locais hospedados via llama.cpp, incluindo variantes do Qwen3.5 e do Gemma 4; os resumos com IA podem usar qualquer um dos caminhos.",
          "**Detecção acelerada por hardware.** Os plugins de detecção de objetos rodam em CPU, GPU, Apple Neural Engine, NPU da Intel ou Coral, e o modo Cluster pode transferir modelos para uma GPU em outra máquina."
        ],
        "note": "A documentação recomenda modelos específicos e baratos na nuvem por preço e desempenho; essa é uma orientação do fabricante, não um resultado da PromptQuorum."
      },
      "privacy": {
        "id": "privacy",
        "title": "Fluxo de dados e privacidade",
        "content": [
          "**A detecção e a gravação rodam no seu próprio servidor, mas os resumos com IA só ficam em casa se você escolher um modelo local.** A documentação diz que os modelos locais permitem executar os resumos com IA inteiramente no local, sem enviar imagens para a nuvem; com um provedor de nuvem, as imagens vão para esse provedor conforme a política dele.",
          "Ver as câmeras fora da sua rede usa o plugin Scrypted Cloud e um login do Scrypted Cloud. A política de privacidade da documentação cita a Vysor, Inc. como a empresa; a PromptQuorum não analisou o que o serviço em nuvem armazena."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "São declarações do fabricante, não resultados de auditoria. A PromptQuorum não inspecionou o tráfego de rede, o serviço em nuvem nem o código."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem é",
        "items": [
          "**Usuários de HomeKit e Google Home** com câmeras RTSP ou ONVIF locais que querem esses streams no app da casa.",
          "**Usuários de Home Assistant** que querem streams de câmeras com detecções inteligentes na sua configuração.",
          "**Donos de um Mac mini, de uma máquina com Proxmox ou de um NAS** que querem um NVR auto-hospedado com resumos de IA local opcionais."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Preços.** A documentação não informa valor para a assinatura do NVR nem para a licença de desktop, e o portal de cobrança exige login; por isso nenhum preço é indicado aqui.",
          "**Licenciamento.** O arquivo LICENSE do repositório diz que o licenciamento varia conforme o diretório e que alguns plugins podem exigir conformidade com a GPL; o pacote do servidor declara ISC, e a licença de cada plugin e do NVR não foi verificada.",
          "**Desempenho.** O número de câmeras por máquina, a precisão da detecção e a qualidade dos resumos são números do fabricante e não foram medidos.",
          "**Tratamento de dados na nuvem.** O que o Scrypted Cloud armazena para o acesso remoto não foi analisado.",
          "**Qualidade dos modelos locais.** Não foi testado se os modelos locais listados escrevem resumos de eventos úteis para as suas câmeras."
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
            "Plataformas": "Linux, web, iOS, Android",
            "Preço / licença": "Grátis / Apache-2.0",
            "Diferença principal": "Assistente de voz dentro do Home Assistant, não uma plataforma de câmeras"
          }
        ],
        "note": "Nenhum outro app de câmeras ou NVR tem ainda uma análise da PromptQuorum. O Scrypted lista o Home Assistant como plataforma de destino, então os dois não são rivais estritos. Confirme o preço, a licença e as plataformas atuais de cada app na própria página antes de escolher."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "Posso pedir reembolso do Scrypted NVR?",
            "a": "Não. A política de compra diz que todas as vendas são definitivas e que as assinaturas canceladas terminam na próxima data de renovação, sem proporcionalidade; um lembrete de pagamento é enviado por e-mail uma semana antes da cobrança."
          },
          {
            "q": "O Scrypted funciona com o Ollama?",
            "a": "A documentação diz que o Ollama e o LM Studio não oferecem endpoints OpenAI totalmente compatíveis e podem não funcionar corretamente. Ela prefere o llama.cpp do próprio plugin de LLM e também recomenda vLLM e SGLang."
          },
          {
            "q": "O Scrypted roda em um Raspberry Pi?",
            "a": "O guia de hardware diz que Raspberry Pi 4 e NAS de baixo desempenho não são recomendados para o Scrypted NVR; ele não dá veredito para a plataforma sem o NVR."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O Scrypted é um caminho ativamente desenvolvido para levar câmeras IP locais ao HomeKit, Google Home, Alexa ou Home Assistant, com um NVR pago e resumos de LLM locais opcionais por cima. Em contrapartida, é uma plataforma de vídeo e não um app de LLM local, o NVR e o app de desktop custam dinheiro a preços não divulgados, o licenciamento do repositório varia conforme o diretório e a PromptQuorum não testou nada disso. Serve para quem tem câmeras RTSP ou ONVIF locais e aceita um NVR pago; para um chat local puro, é a ferramenta errada."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Site do Scrypted](https://www.scrypted.app) — visão geral do produto e lista de plataformas, consultado em 1º de novembro de 2026.",
          "[Documentação do Scrypted](https://docs.scrypted.app) — instalação, app de desktop, plugin de LLM, recursos do NVR, resumos com IA, apps e guia de hardware, consultada em 1º de novembro de 2026.",
          "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html) — nome da empresa e termos de proteção de dados, consultada em 1º de novembro de 2026.",
          "[Scrypted no GitHub](https://github.com/koush/scrypted) — arquivo LICENSE, metadados do pacote e histórico de commits, consultado em 1º de novembro de 2026.",
          "[Versões do app de desktop do Scrypted](https://github.com/koush/nvr.scrypted.app/releases) — versão 0.147.1 de 19 de setembro de 2026 e sua lista de arquivos, consultadas em 1º de novembro de 2026.",
          "[Scrypted na App Store](https://apps.apple.com/us/app/scrypted/id1658171214) — nome do vendedor e página do app, consultados em 1º de novembro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leitura relacionada",
        "items": [
          "[Análise do Home Assistant Assist](/pt/power-local-llm/home-assistant-assist-review) — controle por voz local e agentes de LLM dentro do Home Assistant.",
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
    "theme": "Voice, Speech & Multimodal",
    "heroImage": "/images/scrypted-review-hero-ar.webp",
    "title": "مراجعة Scrypted: منصة كاميرات وNVR بخيارات ذكاء اصطناعي محلي",
    "seoTitle": "مراجعة Scrypted: منصة كاميرات وNVR مفتوحة المصدر",
    "intro": "Scrypted منصة مفتوحة المصدر لدمج الفيديو تقدمها شركة Vysor, Inc. تستقبل بث الكاميرات المحلية وتمرره إلى HomeKit وGoogle Home وAlexa وHome Assistant، ويضيف إضافة Scrypted NVR المدفوعة تسجيلًا على مدار الساعة وكشفًا بالذكاء الاصطناعي. وهو ليس تطبيق دردشة أو LLM: فذكاؤه الاصطناعي المحلي يتألف من كشف الأجسام وإضافة LLM اختيارية تكتب ملخصات الأحداث. تستند هذه المراجعة إلى [scrypted.app](https://www.scrypted.app) و[التوثيق](https://docs.scrypted.app) و[مستودع GitHub](https://github.com/koush/scrypted)، وقد روجعت في 1 نوفمبر 2026؛ ولم تختبر PromptQuorum Scrypted عمليًا.",
    "metaDescription": "مراجعة Scrypted: منصة مفتوحة المصدر تبث الكاميرات المحلية إلى HomeKit وGoogle Home وHome Assistant، مع NVR مدفوع وذكاء اصطناعي محلي اختياري. لم تُختبر.",
    "twitterDescription": "مراجعة Scrypted: منصة كاميرات مفتوحة المصدر مع NVR مدفوع وملخصات LLM محلية اختيارية عبر llama.cpp. ما تؤكده المصادر وما تتركه مفتوحًا.",
    "audience": "أصحاب كاميرات IP المحلية الذين يريدون استخدامها في HomeKit أو Google Home أو Home Assistant ويحتاجون إلى معرفة تكلفة Scrypted والعتاد الذي يتطلبه ومقدار ما يعمل من ذكائه الاصطناعي محليًا.",
    "readTime": "5 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة Scrypted",
    "targetKeywords": [
      "مراجعة scrypted",
      "scrypted nvr",
      "scrypted homekit",
      "scrypted home assistant",
      "scrypted llm محلي",
      "ملخصات scrypted بالذكاء الاصطناعي",
      "تثبيت scrypted"
    ],
    "current_models_mentioned": [
      "Qwen",
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "Mac mini",
      "Intel N100",
      "Apple Silicon"
    ],
    "leadAnswerBlock": "**Scrypted (تطبيق سطح المكتب بالإصدار 0.147.1، الصادر في 19 سبتمبر 2026) منصة فيديو مفتوحة المصدر تربط كاميرات IP المحلية بـ HomeKit وGoogle Home وAlexa وHome Assistant، مع إضافة NVR مدفوعة للتسجيل والكشف بالذكاء الاصطناعي.** ميزاته الذكية هي كشف الأجسام وملخصات LLM الاختيارية، ولا يقدم مساعد دردشة.",
    "quickAnswerTop": {
      "ar": {
        "question": "هل يشغّل Scrypted نموذج LLM محليًا؟",
        "answer": "فقط إذا أضفت إضافة LLM. وفق التوثيق، يمكن للإضافة استضافة النماذج عبر llama.cpp على خادمك الخاص أو الاتصال بـ ChatGPT أو Claude أو Gemini بمفتاح API الخاص بك؛ ويستخدم Scrypted NVR النموذج لملخصات الأحداث.",
        "bullets": [
          "توجد تطبيقات عرض لنظامي iOS وAndroid؛ ويغطي تطبيق سطح المكتب أنظمة Mac وWindows وLinux.",
          "إضافة NVR وتطبيق سطح المكتب مدفوعان؛ ويُذكر وجود نسخة مجانية وتجربة مجانية لـ NVR.",
          "تحتاج النماذج المحلية نحو 12 GB من ذاكرة GPU أو جهاز Mac بذاكرة 16 GB، وفق التوثيق.",
          "يمكن تشغيل الكشف على CPU أو GPU أو Apple Neural Engine أو Intel NPU أو مسرّع Coral."
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
        "label": "ما هو Scrypted؟",
        "anchor": "what-is-scrypted"
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
            "text": "Scrypted منصة مفتوحة المصدر تربط كاميرات IP المحلية بـ HomeKit وGoogle Home وAlexa وHome Assistant، مع إضافة NVR مدفوعة وذكاء اصطناعي محلي اختياري."
          },
          {
            "type": "plain-terms",
            "text": "تشغّل Scrypted على Mac أو حاسوب Windows أو جهاز Linux أو NAS، وتضيف كاميراتك، فتشاهدها في تطبيقات المنزل الذكي التي تستخدمها أصلًا؛ أما التسجيل وملخصات الأحداث بالذكاء الاصطناعي فهي إضافات."
          }
        ],
        "items": [
          "الصيانة: أحدث commit في الفرع الرئيسي بتاريخ 1 نوفمبر 2026 وأحدث إصدار لسطح المكتب 0.147.1 بتاريخ 19 سبتمبر 2026، لذا لا ينطبق تحذير المشروع المتوقف.",
          "النطاق: منصة لدمج الكاميرات وتسجيلها، وليست تطبيق دردشة؛ والذكاء المحلي هو الكشف مع ملخصات اختيارية.",
          "التكلفة: تبدأ المنصة مجانًا؛ وNVR اشتراك مع تجربة مجانية، ويحتاج تطبيق سطح المكتب إلى ترخيص مدفوع. ولا يذكر التوثيق أي أسعار.",
          "الترخيص: يذكر المستودع أن الترخيص يختلف باختلاف المجلد، لذا يجب فحص كل إضافة على حدة.",
          "العرض عن بُعد: الوصول من خارج شبكتك يمر عبر إضافة Scrypted Cloud وتسجيل الدخول."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "تستند هذه المراجعة إلى موقع Scrypted والتوثيق ومستودعات GitHub، وقد روجعت في 1 نوفمبر 2026. لم تثبّت PromptQuorum برنامج Scrypted ولم تشغّله، لذا لم تُقيَّم دقة الكشف ولا السرعة ولا جودة الملخصات."
          }
        ]
      },
      "overview": {
        "id": "what-is-scrypted",
        "title": "ما هو Scrypted؟",
        "content": [
          "**Scrypted منصة لدمج الفيديو تستقبل بث الكاميرات وتجعله يظهر في أنظمة المنزل الذكي الأخرى.** يذكر التوثيق وجهات HomeKit (بما فيها HomeKit Secure Video) وGoogle Home وAlexa وHome Assistant؛ وتتكون المنصة من إضافات، إضافة لكل علامة كاميرا أو ميزة. والجهة المطوِّرة هي Vysor, Inc.، وهي الشركة المذكورة في سياسة الخصوصية ضمن التوثيق.",
          "**Scrypted NVR إضافة مدفوعة فوق ذلك.** تسجّل على مدار الساعة وتضيف الكشف الذكي والتعرف على الوجوه والتعرف على لوحات السيارات والبحث بلغة طبيعية في سجل التسجيلات وملخصات الذكاء الاصطناعي، مع تطبيقات لـ iOS وAndroid وسطح المكتب والمتصفح. وتوفر إضافة LLM المنفصلة نموذج اللغة المستخدم في الملخصات."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "كيف تحصل عليه",
        "content": [
          "**يُثبَّت Scrypted كتطبيق سطح مكتب على Mac وWindows، أو كخادم على Linux وProxmox VE وUnraid وأنظمة NAS، مع تطبيقات iOS وAndroid للعرض.**"
        ],
        "columns": [
          "الخيار",
          "مصدر الحصول عليه"
        ],
        "rows": [
          {
            "الخيار": "Mac وWindows",
            "مصدر الحصول عليه": "مثبّتات تطبيق سطح المكتب على [GitHub Releases](https://github.com/koush/nvr.scrypted.app/releases): ملف .dmg لأجهزة Mac بمعالج Apple Silicon وIntel، وملف .exe لـ Windows؛ ويذكر التوثيق أن تطبيق سطح المكتب يتطلب ترخيصًا مدفوعًا"
          },
          {
            "الخيار": "iPhone وiPad",
            "مصدر الحصول عليه": "[Scrypted على App Store](https://apps.apple.com/us/app/scrypted/id1658171214)"
          },
          {
            "الخيار": "Android",
            "مصدر الحصول عليه": "[Scrypted على Google Play](https://play.google.com/store/apps/details?id=app.scrypted.nvr)"
          },
          {
            "الخيار": "Linux",
            "مصدر الحصول عليه": "Docker Compose مع شبكة المضيف، أو تطبيق سطح المكتب بصيغة حزمة .deb، وهو ما يوصي به التوثيق كعارض فقط لـ Scrypted NVR"
          },
          {
            "الخيار": "Proxmox VE وUnraid وNAS",
            "مصدر الحصول عليه": "Proxmox VE هو المضيف الموصى به لخوادم Intel أو AMD المخصصة؛ أما Unraid وReadyNAS وSynology وQNAP فتستخدم Docker، وفق [دليل التثبيت](https://docs.scrypted.app/installation.html)"
          },
          {
            "الخيار": "المتصفح",
            "مصدر الحصول عليه": "[nvr.scrypted.app](https://nvr.scrypted.app) بعد تثبيت إضافة Scrypted Cloud، أو خيار التثبيت كتطبيق من المتصفح"
          },
          {
            "الخيار": "الموقع الرسمي",
            "مصدر الحصول عليه": "[scrypted.app](https://www.scrypted.app)"
          },
          {
            "الخيار": "التوثيق",
            "مصدر الحصول عليه": "[docs.scrypted.app](https://docs.scrypted.app)"
          },
          {
            "الخيار": "سياسة الخصوصية",
            "مصدر الحصول عليه": "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html)، وآخر تحديث لها في 22 فبراير 2024 وفق الصفحة"
          },
          {
            "الخيار": "الشيفرة المصدرية",
            "مصدر الحصول عليه": "[github.com/koush/scrypted](https://github.com/koush/scrypted)؛ ويختلف الترخيص باختلاف المجلد"
          }
        ],
        "note": "الإصدار الذي رُوجع: تطبيق سطح المكتب 0.147.1 الصادر في 19 سبتمبر 2026؛ وأحدث وسم إصدار في مستودع الخادم هو 0.147.0 بتاريخ 13 سبتمبر 2026. وفق التوثيق، لا يعمل Docker Desktop على Mac أو Windows مع Scrypted لأن شبكة المضيف غير متاحة هناك."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "المتطلبات",
        "content": [
          "**لـ Scrypted NVR يوصي التوثيق بمعالج Intel من الجيل التاسع على Windows، ومن الجيل السادس على Linux، أو Apple Silicon على macOS، مع قرص لا تقل سعته عن 1 TB.**"
        ],
        "columns": [
          "البند",
          "ما تقوله المصادر"
        ],
        "rows": [
          {
            "البند": "قدرة الخادم",
            "ما تقوله المصادر": "يذكر جدول تقريبي معالج Intel N100 لـ 12 كاميرا، وجهاز Dell Wyse 5070 لـ 5 كاميرات، وجهاز Mac mini بذاكرة 16 GB أو معالج Intel Core Ultra 125H لـ 20 كاميرا أو أكثر"
          },
          {
            "البند": "التخزين",
            "ما تقوله المصادر": "1 TB على الأقل؛ يُوصى بأقراص المراقبة، ولا ينبغي استخدام ذاكرات الفلاش وبطاقات SD بسبب حجم الكتابة"
          },
          {
            "البند": "الكاميرات",
            "ما تقوله المصادر": "تُدعم رسميًا كاميرات RTSP المحلية التي تدعم ONVIF وH.264؛ ولا تُدعم Ring وGoogle/Nest وArlo وWyze ولا البرامج الثابتة المعدلة مثل Thingino ولا الكاميرات العاملة بالبطارية"
          },
          {
            "البند": "LLM محلي",
            "ما تقوله المصادر": "جهاز Mac بمعالج Apple Silicon وذاكرة 16 GB، أو GPU من NVIDIA أو AMD بذاكرة 12 GB، أو AMD AI MAX؛ وتحتاج النماذج المدرجة من 5 GB (Qwen3.5-4B) إلى 26 GB (Qwen3.5-35B-A3B)"
          },
          {
            "البند": "عتاد الكشف",
            "ما تقوله المصادر": "CPU أو GPU أو Apple Neural Engine أو Intel NPU أو مسرّع Coral"
          }
        ],
        "note": "هذه الأرقام من دليل عتاد NVR وصفحة LLM؛ ولم يُتحقق من حد أدنى منفصل للمنصة المجانية بدون NVR."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "كيف تبدأ",
        "content": [
          "**الخطوات تتبع التوثيق؛ ولم تنفذها PromptQuorum.**"
        ],
        "numberedItems": [
          {
            "title": "ثبّت Scrypted",
            "whyItMatters": "استخدم تطبيق سطح المكتب على Mac أو Windows، أو Docker أو Proxmox VE أو Unraid على خادم، ثم افتح وحدة الإدارة على https://localhost:10443 ووافق على تحذير الشهادة."
          },
          {
            "title": "أضف كاميراتك وتحقق منها",
            "whyItMatters": "أضف كل كاميرا كما في صفحات إعداد الكاميرات؛ وينصح التوثيق بالتحقق من الكاميرات في النسخة المجانية قبل بدء تجربة NVR."
          },
          {
            "title": "اربط منصة المنزل الذكي",
            "whyItMatters": "ثبّت إضافة HomeKit أو Google Home أو Alexa أو Home Assistant وأضف الكاميرات هناك."
          },
          {
            "title": "اختياري: أضف NVR وLLM",
            "whyItMatters": "ثبّت إضافة Scrypted NVR وسجّل الدخول بحساب بوابة الفوترة؛ ولملخصات الذكاء الاصطناعي ثبّت إضافة LLM واختر مفتاحًا سحابيًا أو نموذجًا محليًا."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "الميزات التي أكدتها المصادر",
        "content": [
          "**كل بند أدناه مأخوذ من الموقع أو التوثيق؛ ولم يُختبر أي منها هنا.**"
        ],
        "items": [
          "**المنصات.** HomeKit مع HomeKit Secure Video، وGoogle Home (غير مدعوم على iOS)، وAlexa، وHome Assistant.",
          "**Scrypted NVR.** تسجيل على مدار الساعة، وعرض الجدول الزمني والأحداث، والتعرف على الوجوه ولوحات السيارات، وإشعارات غنية بصور مصغّرة، ومعدل بت تكيفي.",
          "**ملخصات الذكاء الاصطناعي والبحث بالذكاء الاصطناعي.** أوصاف قصيرة بلغة طبيعية لما جرى كشفه تُرسل كإشعارات، وبحث بلغة طبيعية في سجل جميع الكاميرات.",
          "**إضافة LLM.** ChatGPT أو Claude أو Gemini بمفتاح API الخاص بك، أو نماذج محلية مستضافة عبر llama.cpp، منها إصدارات من Qwen3.5 وGemma 4؛ ويمكن لملخصات الذكاء الاصطناعي استخدام أي من الطريقتين.",
          "**كشف مسرَّع بالعتاد.** تعمل إضافات كشف الأجسام على CPU أو GPU أو Apple Neural Engine أو Intel NPU أو Coral، ويمكن لوضع Cluster إسناد النماذج إلى GPU على جهاز آخر."
        ],
        "note": "يوصي التوثيق بنماذج سحابية محددة منخفضة التكلفة من حيث السعر والأداء؛ وهذه إرشادات من المطوّر وليست نتيجة اختبار من PromptQuorum."
      },
      "privacy": {
        "id": "privacy",
        "title": "تدفق البيانات والخصوصية",
        "content": [
          "**يعمل الكشف والتسجيل على خادمك الخاص، لكن ملخصات الذكاء الاصطناعي لا تبقى في المنزل إلا إذا اخترت نموذجًا محليًا.** يذكر التوثيق أن النماذج المحلية تتيح تشغيل ملخصات الذكاء الاصطناعي بالكامل محليًا دون إرسال صور إلى السحابة؛ وعند استخدام مزوّد سحابي تُرسل الصور إليه وفق سياسته الخاصة.",
          "العرض من خارج شبكتك يستخدم إضافة Scrypted Cloud وتسجيل دخول Scrypted Cloud. وتذكر سياسة الخصوصية في التوثيق شركة Vysor, Inc.؛ ولم تحلل PromptQuorum ما تخزنه الخدمة السحابية."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "هذه أقوال المطوّر وليست نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة ولا الخدمة السحابية ولا الشيفرة."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**مستخدمو HomeKit وGoogle Home** الذين لديهم كاميرات RTSP أو ONVIF محلية ويريدون هذا البث في تطبيق المنزل.",
          "**مستخدمو Home Assistant** الذين يريدون بث الكاميرات مع الكشف الذكي ضمن إعدادهم.",
          "**أصحاب Mac mini أو جهاز Proxmox أو NAS** الذين يريدون NVR مستضافًا ذاتيًا مع ملخصات ذكاء اصطناعي محلية اختيارية."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**الأسعار.** لا يذكر التوثيق مبلغًا لاشتراك NVR ولا لترخيص سطح المكتب، وبوابة الفوترة تتطلب تسجيل الدخول؛ لذلك لا يُذكر هنا أي سعر.",
          "**الترخيص.** يذكر ملف LICENSE في المستودع أن الترخيص يختلف باختلاف المجلد وأن بعض الإضافات قد تتطلب الالتزام برخصة GPL؛ وتعلن حزمة الخادم رخصة ISC، ولم يُفحص ترخيص كل إضافة ولا ترخيص NVR.",
          "**الأداء.** عدد الكاميرات لكل جهاز ودقة الكشف وجودة الملخصات أرقام من المطوّر ولم تُقَس.",
          "**معالجة البيانات في السحابة.** لم يُحلَّل ما تخزنه Scrypted Cloud للعرض عن بُعد.",
          "**جودة النماذج المحلية.** لم يُختبر ما إذا كانت النماذج المحلية المدرجة تكتب ملخصات أحداث مفيدة لكاميراتك."
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
            "التطبيق": "[Home Assistant Assist](/ar/power-local-llm/home-assistant-assist-review)",
            "المنصات": "Linux وويب وiOS وAndroid",
            "السعر / الترخيص": "مجاني / Apache-2.0",
            "الفرق الرئيسي": "مساعد صوتي داخل Home Assistant وليس منصة كاميرات"
          }
        ],
        "note": "لا يوجد حتى الآن تطبيق كاميرات أو NVR آخر لديه مراجعة من PromptQuorum. يدرج Scrypted منصة Home Assistant وجهة مستهدفة، فالاثنان ليسا منافسين بالمعنى الصارم. تأكد من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته الخاصة قبل الاختيار."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل يمكنني استرداد ثمن Scrypted NVR؟",
            "a": "لا. تنص سياسة الشراء على أن جميع المبيعات نهائية وأن الاشتراكات الملغاة تنتهي في موعد التجديد التالي دون احتساب تناسبي؛ ويُرسل تذكير بالدفع بالبريد الإلكتروني قبل أسبوع من الفوترة."
          },
          {
            "q": "هل يعمل Scrypted مع Ollama؟",
            "a": "يذكر التوثيق أن Ollama وLM Studio لا يوفران نقاط نهاية OpenAI متوافقة بالكامل وقد لا يعملان بشكل صحيح. ويفضّل llama.cpp المدمج في إضافة LLM، كما يوصي بـ vLLM وSGLang."
          },
          {
            "q": "هل يعمل Scrypted على Raspberry Pi؟",
            "a": "يذكر دليل العتاد أن Raspberry Pi 4 وأجهزة NAS منخفضة الأداء لا يُوصى بها لـ Scrypted NVR؛ ولا يقدّم حكمًا بشأن المنصة بدون NVR."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "Scrypted طريقة نشطة التطوير لإدخال كاميرات IP المحلية إلى HomeKit أو Google Home أو Alexa أو Home Assistant، مع NVR مدفوع وملخصات LLM محلية اختيارية فوق ذلك. في المقابل، هو منصة فيديو وليس تطبيق LLM محليًا، وNVR وتطبيق سطح المكتب بأسعار غير معلنة، ويختلف ترخيص المستودع باختلاف المجلد، ولم تختبر PromptQuorum أيًا من ذلك. يناسب من لديهم كاميرات RTSP أو ONVIF محلية ويقبلون NVR مدفوعًا؛ أما لإعداد دردشة محلية بحتة فهو الأداة الخطأ."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[موقع Scrypted](https://www.scrypted.app) — نظرة عامة على المنتج وقائمة المنصات، روجع في 1 نوفمبر 2026.",
          "[توثيق Scrypted](https://docs.scrypted.app) — التثبيت وتطبيق سطح المكتب وإضافة LLM وميزات NVR وملخصات الذكاء الاصطناعي والتطبيقات ودليل العتاد، روجع في 1 نوفمبر 2026.",
          "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html) — اسم الشركة وشروط حماية البيانات، روجعت في 1 نوفمبر 2026.",
          "[Scrypted على GitHub](https://github.com/koush/scrypted) — ملف LICENSE وبيانات الحزمة وسجل commits، روجع في 1 نوفمبر 2026.",
          "[إصدارات تطبيق سطح المكتب Scrypted](https://github.com/koush/nvr.scrypted.app/releases) — الإصدار 0.147.1 الصادر في 19 سبتمبر 2026 وقائمة ملفاته، روجعت في 1 نوفمبر 2026.",
          "[Scrypted على App Store](https://apps.apple.com/us/app/scrypted/id1658171214) — اسم البائع وصفحة التطبيق، روجعا في 1 نوفمبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة Home Assistant Assist](/ar/power-local-llm/home-assistant-assist-review) — التحكم الصوتي المحلي ووكلاء LLM داخل Home Assistant.",
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
    "theme": "Voice, Speech & Multimodal",
    "heroImage": "/images/scrypted-review-hero-zh.webp",
    "title": "Scrypted 评测：带本地 AI 选项的摄像头与 NVR 平台",
    "seoTitle": "Scrypted 评测：开源摄像头与 NVR 平台，含本地 AI 选项",
    "intro": "Scrypted 是 Vysor, Inc. 推出的开源视频集成平台。它接收本地摄像头的视频流，并转发给 HomeKit、Google Home、Alexa 和 Home Assistant；付费的 Scrypted NVR 插件则增加 24 小时录像和 AI 检测。它不是聊天或 LLM 应用：其本地 AI 由物体检测和一个可选的 LLM 插件（用于撰写事件摘要）组成。本评测基于 [scrypted.app](https://www.scrypted.app)、[官方文档](https://docs.scrypted.app) 和 [GitHub 仓库](https://github.com/koush/scrypted)（均于 2026 年 11 月 1 日查阅）；PromptQuorum 没有亲自实测 Scrypted。",
    "metaDescription": "Scrypted 评测：开源平台，可把本地摄像头推送到 HomeKit、Google Home 和 Home Assistant，配有付费 NVR 与可选本地 AI。未经实测。",
    "twitterDescription": "Scrypted 评测：一个带付费 NVR 的开源摄像头平台，可通过 llama.cpp 使用本地 LLM 摘要。资料证实了什么，又留下了哪些未知。",
    "audience": "拥有本地 IP 摄像头、想在 HomeKit、Google Home 或 Home Assistant 中使用，并需要了解 Scrypted 的费用、硬件要求以及 AI 有多少在本地运行的读者。",
    "readTime": "阅读约5分钟",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Scrypted 评测",
    "targetKeywords": [
      "scrypted 评测",
      "scrypted nvr",
      "scrypted homekit",
      "scrypted home assistant",
      "scrypted 本地 llm",
      "scrypted ai 摘要",
      "scrypted 安装"
    ],
    "current_models_mentioned": [
      "Qwen",
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "Mac mini",
      "Intel N100",
      "Apple Silicon"
    ],
    "leadAnswerBlock": "**Scrypted（桌面应用版本 0.147.1，2026 年 9 月 19 日发布）是一个开源视频平台，可把本地 IP 摄像头接入 HomeKit、Google Home、Alexa 和 Home Assistant，录像与 AI 检测由付费的 NVR 插件提供。** 它的 AI 功能是物体检测和可选的 LLM 摘要，不提供聊天助手。",
    "quickAnswerTop": {
      "zh": {
        "question": "Scrypted 会运行本地 LLM 吗？",
        "answer": "只有添加 LLM 插件时才会。据文档，该插件可以通过 llama.cpp 在你自己的服务器上托管模型，也可以用你自己的 API 密钥连接 ChatGPT、Claude 或 Gemini；Scrypted NVR 用该模型生成事件摘要。",
        "bullets": [
          "查看用的应用有 iOS 和 Android 版；桌面应用覆盖 Mac、Windows 和 Linux。",
          "NVR 插件和桌面应用均为付费；文档提到有免费版和 NVR 免费试用。",
          "据文档，本地模型约需 12 GB 显存，或一台 16 GB 的 Mac。",
          "检测可在 CPU、GPU、Apple Neural Engine、Intel NPU 或 Coral 加速器上运行。"
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
        "label": "Scrypted 是什么？",
        "anchor": "what-is-scrypted"
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
            "text": "Scrypted 是一个开源平台，把本地 IP 摄像头接入 HomeKit、Google Home、Alexa 和 Home Assistant，另有付费 NVR 附加组件和可选的本地 AI。"
          },
          {
            "type": "plain-terms",
            "text": "你在 Mac、Windows 电脑、Linux 主机或 NAS 上运行 Scrypted，添加摄像头，就能在已有的智能家居应用中查看画面；录像和 AI 事件摘要是附加功能。"
          }
        ],
        "items": [
          "维护情况：主分支最新提交为 2026 年 11 月 1 日，桌面端最新版本 0.147.1 发布于 2026 年 9 月 19 日，因此不适用项目停更警告。",
          "范围：摄像头集成与录像平台，不是聊天应用；本地 AI 即检测加可选摘要。",
          "费用：平台可免费起步；NVR 为带免费试用的订阅，桌面应用需要付费许可。文档未列出价格。",
          "许可证：仓库说明许可因目录而异，每个插件都需单独核查。",
          "远程查看：从网络之外访问需要通过 Scrypted Cloud 插件并登录。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本评测基于 Scrypted 网站、官方文档和 GitHub 仓库，均于 2026 年 11 月 1 日查阅。PromptQuorum 没有安装或运行过 Scrypted，因此未评估检测准确度、速度和摘要质量。"
          }
        ]
      },
      "overview": {
        "id": "what-is-scrypted",
        "title": "Scrypted 是什么？",
        "content": [
          "**Scrypted 是一个视频集成平台，接收摄像头的视频流，并让它们出现在其他智能家居系统中。** 文档列出的目标包括 HomeKit（含 HomeKit Secure Video）、Google Home、Alexa 和 Home Assistant；平台由插件构成，每个摄像头品牌或功能对应一个插件。开发方是 Vysor, Inc.，即文档隐私政策中所列的公司。",
          "**Scrypted NVR 是建立在其上的付费插件。** 它提供 24 小时录像，并增加智能检测、人脸识别、车牌识别、对录像历史的自然语言搜索和 AI 摘要，配有 iOS、Android、桌面和浏览器应用。摘要所用的语言模型由另一个 LLM 插件提供。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "content": [
          "**Scrypted 在 Mac 和 Windows 上以桌面应用安装，在 Linux、Proxmox VE、Unraid 和 NAS 上以服务器方式安装，另有 iOS 和 Android 应用用于查看。**"
        ],
        "columns": [
          "选项",
          "获取方式"
        ],
        "rows": [
          {
            "选项": "Mac 和 Windows",
            "获取方式": "桌面应用安装包见 [GitHub Releases](https://github.com/koush/nvr.scrypted.app/releases)：Apple Silicon 和 Intel Mac 为 .dmg，Windows 为 .exe；据文档，桌面应用需要付费许可"
          },
          {
            "选项": "iPhone 和 iPad",
            "获取方式": "[App Store 上的 Scrypted](https://apps.apple.com/us/app/scrypted/id1658171214)"
          },
          {
            "选项": "Android",
            "获取方式": "[Google Play 上的 Scrypted](https://play.google.com/store/apps/details?id=app.scrypted.nvr)"
          },
          {
            "选项": "Linux",
            "获取方式": "使用主机网络的 Docker Compose，或 .deb 包形式的桌面应用（文档仅推荐将其用作 Scrypted NVR 的查看端）"
          },
          {
            "选项": "Proxmox VE、Unraid、NAS",
            "获取方式": "Proxmox VE 是专用 Intel 或 AMD 服务器的推荐宿主；Unraid、ReadyNAS、Synology 和 QNAP 使用 Docker，见[安装指南](https://docs.scrypted.app/installation.html)"
          },
          {
            "选项": "浏览器",
            "获取方式": "安装 Scrypted Cloud 插件后访问 [nvr.scrypted.app](https://nvr.scrypted.app)，或使用浏览器的“安装为应用”功能"
          },
          {
            "选项": "官方网站",
            "获取方式": "[scrypted.app](https://www.scrypted.app)"
          },
          {
            "选项": "文档",
            "获取方式": "[docs.scrypted.app](https://docs.scrypted.app)"
          },
          {
            "选项": "隐私政策",
            "获取方式": "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html)，页面显示最后更新于 2024 年 2 月 22 日"
          },
          {
            "选项": "源代码",
            "获取方式": "[github.com/koush/scrypted](https://github.com/koush/scrypted)；许可因目录而异"
          }
        ],
        "note": "评测版本：桌面应用 0.147.1，2026 年 9 月 19 日发布；服务器仓库的最新发布标签为 2026 年 9 月 13 日的 0.147.0。据文档，Mac 或 Windows 上的 Docker Desktop 无法使用主机网络，因此 Scrypted 无法在其中工作。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "系统要求",
        "content": [
          "**对于 Scrypted NVR，文档建议 Windows 使用第 9 代 Intel CPU、Linux 使用第 6 代、macOS 使用 Apple Silicon，并配备至少 1 TB 的硬盘。**"
        ],
        "columns": [
          "项目",
          "资料中的说法"
        ],
        "rows": [
          {
            "项目": "服务器性能",
            "资料中的说法": "一张粗略的图表列出：Intel N100 可接 12 路摄像头，Dell Wyse 5070 为 5 路，16 GB 的 Mac mini 或 Intel Core Ultra 125H 为 20 路以上"
          },
          {
            "项目": "存储",
            "资料中的说法": "至少 1 TB；推荐监控专用硬盘，因写入量大，不应使用 U 盘和 SD 卡"
          },
          {
            "项目": "摄像头",
            "资料中的说法": "正式支持具备 ONVIF 和 H.264 的本地 RTSP 摄像头；Ring、Google/Nest、Arlo、Wyze、Thingino 等自定义固件以及电池供电摄像头不在支持之列"
          },
          {
            "项目": "本地 LLM",
            "资料中的说法": "16 GB 的 Apple Silicon Mac、12 GB 的 NVIDIA 或 AMD GPU，或 AMD AI MAX；列出的模型需要 5 GB（Qwen3.5-4B）到 26 GB（Qwen3.5-35B-A3B）"
          },
          {
            "项目": "检测硬件",
            "资料中的说法": "CPU、GPU、Apple Neural Engine、Intel NPU 或 Coral 加速器"
          }
        ],
        "note": "这些数据来自 NVR 硬件指南和 LLM 页面；未单独核实不含 NVR 的免费平台的最低要求。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "如何上手",
        "content": [
          "**以下步骤依据官方文档，PromptQuorum 没有实际运行过。**"
        ],
        "numberedItems": [
          {
            "title": "安装 Scrypted",
            "whyItMatters": "Mac 或 Windows 上使用桌面应用，服务器上使用 Docker、Proxmox VE 或 Unraid，然后在 https://localhost:10443 打开管理控制台并接受证书警告。"
          },
          {
            "title": "添加并验证摄像头",
            "whyItMatters": "按摄像头设置页面的说明添加每台摄像头；文档建议在开始 NVR 试用之前，先在免费版中验证摄像头。"
          },
          {
            "title": "连接智能家居平台",
            "whyItMatters": "安装 HomeKit、Google Home、Alexa 或 Home Assistant 插件，并在其中添加摄像头。"
          },
          {
            "title": "可选：添加 NVR 和 LLM",
            "whyItMatters": "安装 Scrypted NVR 插件，并用计费门户的账户登录；若要使用 AI 摘要，请安装 LLM 插件，并选择云端密钥或本地模型。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "资料证实的功能",
        "content": [
          "**以下每一项都来自网站或文档；这里均未实测。**"
        ],
        "items": [
          "**支持的平台。** HomeKit（含 HomeKit Secure Video）、Google Home（iOS 不支持）、Alexa 和 Home Assistant。",
          "**Scrypted NVR。** 24 小时录像、时间线与事件视图、人脸识别、车牌识别、带缩略图的通知和自适应码率。",
          "**AI 摘要与 AI 搜索。** 把检测结果用自然语言简要描述并以推送通知发送，以及对所有摄像头历史记录的自然语言搜索。",
          "**LLM 插件。** 用自己的 API 密钥连接 ChatGPT、Claude 或 Gemini，或通过 llama.cpp 托管本地模型（含 Qwen3.5 和 Gemma 4 的多个版本）；AI 摘要两种方式都可使用。",
          "**硬件加速检测。** 物体检测插件可在 CPU、GPU、Apple Neural Engine、Intel NPU 或 Coral 上运行，集群模式可把模型交给另一台机器上的 GPU。"
        ],
        "note": "文档按价格与性能推荐了特定的低成本云端模型；这是开发方的建议，不是 PromptQuorum 的测试结果。"
      },
      "privacy": {
        "id": "privacy",
        "title": "数据流向与隐私",
        "content": [
          "**检测和录像在你自己的服务器上运行，但只有选择本地模型时，AI 摘要才会留在家中。** 据文档，使用本地模型时，AI 摘要可完全在本地运行，不向云端发送图像；使用云端提供商时，图像会按其自身政策发送给该提供商。",
          "从网络之外查看会使用 Scrypted Cloud 插件和 Scrypted Cloud 登录。文档中的隐私政策把 Vysor, Inc. 列为运营公司；PromptQuorum 没有分析云服务保存了哪些数据。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "这些是开发方的说法，不是审计结果。PromptQuorum 没有检查网络流量、云服务或代码。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合谁使用",
        "items": [
          "**HomeKit 和 Google Home 用户**：拥有本地 RTSP 或 ONVIF 摄像头，想在家庭应用中查看这些画面。",
          "**Home Assistant 用户**：想把带智能检测的摄像头画面接入自己的环境。",
          "**拥有 Mac mini、Proxmox 主机或 NAS 的用户**：想要自托管 NVR，并可选用本地 AI 摘要。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们无法核实的内容",
        "items": [
          "**价格。** 文档没有给出 NVR 订阅或桌面许可的金额，计费门户需要登录，因此这里不标注价格。",
          "**许可。** 仓库的 LICENSE 文件说明许可因目录而异，部分插件可能需要遵守 GPL；服务器包声明为 ISC，但各插件和 NVR 的许可均未核查。",
          "**性能。** 每台机器可接的摄像头数量、检测准确度和摘要质量都是开发方的数据，未经测量。",
          "**云端数据处理。** Scrypted Cloud 为远程查看保存了什么，未做分析。",
          "**本地模型质量。** 所列本地模型能否为你的摄像头写出有用的事件摘要，尚未测试。"
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
            "应用": "[Home Assistant Assist](/zh/power-local-llm/home-assistant-assist-review)",
            "平台": "Linux、Web、iOS、Android",
            "价格 / 许可": "免费 / Apache-2.0",
            "主要区别": "Home Assistant 内的语音助手，不是摄像头平台"
          }
        ],
        "note": "目前尚无其他摄像头或 NVR 应用有 PromptQuorum 评测。Scrypted 把 Home Assistant 列为目标平台，因此两者并非严格的竞争关系。选择前，请在各应用自己的页面上确认其当前价格、许可证和支持平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "Scrypted NVR 可以退款吗？",
            "a": "不可以。购买政策规定所有销售均为最终交易，取消订阅将在下一个续订日结束，不按比例退费；扣费前一周会通过邮件发送付款提醒。"
          },
          {
            "q": "Scrypted 能配合 Ollama 使用吗？",
            "a": "文档称 Ollama 和 LM Studio 没有提供完全兼容的 OpenAI 端点，可能无法正常工作。文档优先推荐 LLM 插件自带的 llama.cpp，同时也推荐 vLLM 和 SGLang。"
          },
          {
            "q": "Scrypted 能在树莓派上运行吗？",
            "a": "硬件指南指出，Scrypted NVR 不推荐使用树莓派 4 和低性能 NAS；对于不含 NVR 的平台，指南没有给出结论。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "Scrypted 是一种持续积极开发的方案，可把本地 IP 摄像头接入 HomeKit、Google Home、Alexa 或 Home Assistant，并可在其上叠加付费 NVR 和可选的本地 LLM 摘要。不足之处在于：它是视频平台而非本地 LLM 应用，NVR 和桌面应用收费且价格未公布，仓库许可因目录而异，而且 PromptQuorum 没有测试其中任何一项。它适合拥有本地 RTSP 或 ONVIF 摄像头并能接受付费 NVR 的用户；若只是想搭建纯本地聊天，它并不合适。"
      },
      "sources": {
        "id": "sources",
        "title": "资料来源",
        "items": [
          "[Scrypted 网站](https://www.scrypted.app) — 产品概览和平台列表，2026 年 11 月 1 日查阅。",
          "[Scrypted 文档](https://docs.scrypted.app) — 安装、桌面应用、LLM 插件、NVR 功能、AI 摘要、应用和硬件指南，2026 年 11 月 1 日查阅。",
          "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html) — 公司名称和数据保护条款，2026 年 11 月 1 日查阅。",
          "[GitHub 上的 Scrypted](https://github.com/koush/scrypted) — LICENSE 文件、包信息和提交历史，2026 年 11 月 1 日查阅。",
          "[Scrypted 桌面应用发布页](https://github.com/koush/nvr.scrypted.app/releases) — 2026 年 9 月 19 日发布的 0.147.1 版本及其文件列表，2026 年 11 月 1 日查阅。",
          "[App Store 上的 Scrypted](https://apps.apple.com/us/app/scrypted/id1658171214) — 发布者名称和商店页面，2026 年 11 月 1 日查阅。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "相关阅读",
        "items": [
          "[Home Assistant Assist 评测](/zh/power-local-llm/home-assistant-assist-review) — Home Assistant 内的本地语音控制与 LLM 智能体。",
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
    "theme": "Voice, Speech & Multimodal",
    "heroImage": "/images/scrypted-review-hero-ko.webp",
    "title": "Scrypted 리뷰: 로컬 AI 옵션을 갖춘 카메라·NVR 플랫폼",
    "seoTitle": "Scrypted 리뷰: 오픈소스 카메라·NVR 플랫폼",
    "intro": "Scrypted는 Vysor, Inc.가 만든 오픈소스 영상 통합 플랫폼입니다. 로컬 카메라의 스트림을 받아 HomeKit, Google Home, Alexa, Home Assistant로 전달하며, 유료 Scrypted NVR 플러그인을 더하면 24시간 녹화와 AI 감지를 쓸 수 있습니다. 채팅이나 LLM 앱이 아니며, 로컬 AI는 객체 감지와 이벤트 요약을 작성하는 선택형 LLM 플러그인으로 이루어져 있습니다. 이 리뷰는 [scrypted.app](https://www.scrypted.app), [공식 문서](https://docs.scrypted.app), [GitHub 저장소](https://github.com/koush/scrypted)를 2026년 11월 1일에 확인한 내용을 바탕으로 하며, PromptQuorum은 Scrypted를 직접 테스트하지 않았습니다.",
    "metaDescription": "Scrypted 리뷰: 로컬 카메라를 HomeKit, Google Home, Home Assistant로 보내는 오픈소스 플랫폼. 유료 NVR과 선택형 로컬 AI 제공. 직접 테스트하지 않음.",
    "twitterDescription": "Scrypted 리뷰: 유료 NVR과 llama.cpp 기반 로컬 LLM 요약을 선택적으로 쓸 수 있는 오픈소스 카메라 플랫폼. 출처가 확인한 내용과 남겨 둔 내용.",
    "audience": "로컬 IP 카메라를 HomeKit, Google Home, Home Assistant에서 쓰려는 분으로, Scrypted의 비용과 필요한 하드웨어, AI 중 로컬에서 동작하는 범위를 알고 싶은 분.",
    "readTime": "5분 읽기",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Scrypted 리뷰",
    "targetKeywords": [
      "scrypted 리뷰",
      "scrypted nvr",
      "scrypted homekit",
      "scrypted home assistant",
      "scrypted 로컬 llm",
      "scrypted ai 요약",
      "scrypted 설치"
    ],
    "current_models_mentioned": [
      "Qwen",
      "Gemma"
    ],
    "current_hardware_mentioned": [
      "Mac mini",
      "Intel N100",
      "Apple Silicon"
    ],
    "leadAnswerBlock": "**Scrypted(데스크톱 앱 버전 0.147.1, 2026년 9월 19일 출시)는 로컬 IP 카메라를 HomeKit, Google Home, Alexa, Home Assistant에 연결하는 오픈소스 영상 플랫폼이며, 녹화와 AI 감지는 유료 NVR 플러그인이 담당합니다.** AI 기능은 객체 감지와 선택형 LLM 요약이며, 채팅 어시스턴트는 제공하지 않습니다.",
    "quickAnswerTop": {
      "ko": {
        "question": "Scrypted는 로컬 LLM을 실행합니까?",
        "answer": "LLM 플러그인을 추가한 경우에만 그렇습니다. 문서에 따르면 이 플러그인은 llama.cpp로 사용자 서버에서 모델을 호스팅하거나, 본인의 API 키로 ChatGPT, Claude, Gemini에 연결할 수 있으며, Scrypted NVR은 이 모델을 이벤트 요약에 사용합니다.",
        "bullets": [
          "보기용 앱은 iOS와 Android용이 있으며, 데스크톱 앱은 Mac, Windows, Linux를 지원합니다.",
          "NVR 플러그인과 데스크톱 앱은 유료이며, 무료 버전과 NVR 무료 체험이 있다고 언급됩니다.",
          "문서에 따르면 로컬 모델에는 약 12 GB의 GPU 메모리 또는 16 GB Mac이 필요합니다.",
          "감지는 CPU, GPU, Apple Neural Engine, Intel NPU, Coral 가속기에서 실행할 수 있습니다."
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
        "label": "Scrypted란?",
        "anchor": "what-is-scrypted"
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
            "text": "Scrypted는 로컬 IP 카메라를 HomeKit, Google Home, Alexa, Home Assistant에 연결하는 오픈소스 플랫폼으로, 유료 NVR 추가 기능과 선택형 로컬 AI를 갖추고 있습니다."
          },
          {
            "type": "plain-terms",
            "text": "Mac, Windows PC, Linux 장비, NAS 중 하나에서 Scrypted를 실행하고 카메라를 추가하면 이미 쓰는 스마트홈 앱에서 영상을 볼 수 있습니다. 녹화와 AI 이벤트 요약은 추가 기능입니다."
          }
        ],
        "items": [
          "유지보수: 메인 브랜치의 최신 커밋은 2026년 11월 1일, 데스크톱 최신 릴리스 0.147.1은 2026년 9월 19일이므로 방치된 프로젝트 경고는 해당하지 않습니다.",
          "범위: 카메라 통합·녹화 플랫폼이며 채팅 앱이 아닙니다. 로컬 AI는 감지와 선택형 요약입니다.",
          "비용: 플랫폼은 무료로 시작할 수 있고, NVR은 무료 체험이 있는 구독이며, 데스크톱 앱에는 유료 라이선스가 필요합니다. 문서에는 가격이 없습니다.",
          "라이선스: 저장소는 디렉터리마다 라이선스가 다르다고 밝히므로 플러그인별로 확인해야 합니다.",
          "원격 시청: 네트워크 밖에서 보려면 Scrypted Cloud 플러그인과 로그인을 거쳐야 합니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이 리뷰는 Scrypted 웹사이트, 문서, GitHub 저장소를 2026년 11월 1일에 확인한 내용을 바탕으로 합니다. PromptQuorum은 Scrypted를 설치하거나 실행하지 않았으므로 감지 정확도, 속도, 요약 품질은 평가하지 않았습니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-scrypted",
        "title": "Scrypted란?",
        "content": [
          "**Scrypted는 카메라 스트림을 받아 다른 스마트홈 시스템에 나타나게 하는 영상 통합 플랫폼입니다.** 문서는 연결 대상으로 HomeKit(HomeKit Secure Video 포함), Google Home, Alexa, Home Assistant를 꼽으며, 플랫폼은 카메라 브랜드나 기능마다 하나씩 있는 플러그인으로 구성됩니다. 제작사는 문서의 개인정보처리방침에 회사로 명시된 Vysor, Inc.입니다.",
          "**Scrypted NVR은 그 위에서 동작하는 유료 플러그인입니다.** 24시간 녹화에 더해 스마트 감지, 얼굴 인식, 번호판 인식, 녹화 기록의 자연어 검색, AI 요약을 제공하며 iOS, Android, 데스크톱, 브라우저 앱이 있습니다. 요약에 쓰이는 언어 모델은 별도의 LLM 플러그인이 제공합니다."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "설치 방법",
        "content": [
          "**Scrypted는 Mac과 Windows에서는 데스크톱 앱으로, Linux, Proxmox VE, Unraid, NAS에서는 서버로 설치하며, 시청용 iOS·Android 앱이 있습니다.**"
        ],
        "columns": [
          "옵션",
          "입수 방법"
        ],
        "rows": [
          {
            "옵션": "Mac과 Windows",
            "입수 방법": "데스크톱 앱 설치 파일은 [GitHub Releases](https://github.com/koush/nvr.scrypted.app/releases)에 있습니다. Apple Silicon·Intel Mac용 .dmg, Windows용 .exe이며, 문서에 따르면 데스크톱 앱에는 유료 라이선스가 필요합니다"
          },
          {
            "옵션": "iPhone과 iPad",
            "입수 방법": "[App Store의 Scrypted](https://apps.apple.com/us/app/scrypted/id1658171214)"
          },
          {
            "옵션": "Android",
            "입수 방법": "[Google Play의 Scrypted](https://play.google.com/store/apps/details?id=app.scrypted.nvr)"
          },
          {
            "옵션": "Linux",
            "입수 방법": "호스트 네트워크를 쓰는 Docker Compose, 또는 .deb 패키지 형태의 데스크톱 앱(문서는 Scrypted NVR 시청용으로만 권장)"
          },
          {
            "옵션": "Proxmox VE, Unraid, NAS",
            "입수 방법": "Proxmox VE는 전용 Intel·AMD 서버에 권장되는 호스트이며, Unraid, ReadyNAS, Synology, QNAP은 Docker를 사용합니다([설치 가이드](https://docs.scrypted.app/installation.html) 기준)"
          },
          {
            "옵션": "브라우저",
            "입수 방법": "Scrypted Cloud 플러그인을 설치한 뒤 [nvr.scrypted.app](https://nvr.scrypted.app)에 접속하거나, 브라우저의 앱 설치 기능을 사용합니다"
          },
          {
            "옵션": "공식 웹사이트",
            "입수 방법": "[scrypted.app](https://www.scrypted.app)"
          },
          {
            "옵션": "문서",
            "입수 방법": "[docs.scrypted.app](https://docs.scrypted.app)"
          },
          {
            "옵션": "개인정보처리방침",
            "입수 방법": "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html), 페이지에 따르면 최종 업데이트는 2024년 2월 22일"
          },
          {
            "옵션": "소스 코드",
            "입수 방법": "[github.com/koush/scrypted](https://github.com/koush/scrypted). 라이선스는 디렉터리마다 다릅니다"
          }
        ],
        "note": "확인한 버전: 데스크톱 앱 0.147.1(2026년 9월 19일 출시). 서버 저장소의 최신 릴리스 태그는 2026년 9월 13일의 0.147.0입니다. 문서에 따르면 Mac이나 Windows의 Docker Desktop에서는 호스트 네트워크를 쓸 수 없어 Scrypted가 동작하지 않습니다."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "요구 사항",
        "content": [
          "**Scrypted NVR의 경우 문서는 Windows에서 9세대 Intel CPU, Linux에서 6세대, macOS에서 Apple Silicon과 1 TB 이상의 드라이브를 권장합니다.**"
        ],
        "columns": [
          "항목",
          "출처의 기재 내용"
        ],
        "rows": [
          {
            "항목": "서버 성능",
            "출처의 기재 내용": "대략적인 표에는 Intel N100이 카메라 12대, Dell Wyse 5070이 5대, 16 GB Mac mini 또는 Intel Core Ultra 125H가 20대 이상으로 나와 있습니다"
          },
          {
            "항목": "저장소",
            "출처의 기재 내용": "1 TB 이상. 감시용 드라이브를 권장하며, 쓰기량이 많아 USB 플래시 드라이브와 SD 카드는 쓰지 말아야 합니다"
          },
          {
            "항목": "카메라",
            "출처의 기재 내용": "ONVIF와 H.264를 지원하는 로컬 RTSP 카메라만 공식 지원합니다. Ring, Google/Nest, Arlo, Wyze, Thingino 같은 커스텀 펌웨어, 배터리 카메라는 지원하지 않습니다"
          },
          {
            "항목": "로컬 LLM",
            "출처의 기재 내용": "16 GB의 Apple Silicon Mac, 12 GB의 NVIDIA 또는 AMD GPU, 또는 AMD AI MAX. 나열된 모델에는 5 GB(Qwen3.5-4B)에서 26 GB(Qwen3.5-35B-A3B)가 필요합니다"
          },
          {
            "항목": "감지용 하드웨어",
            "출처의 기재 내용": "CPU, GPU, Apple Neural Engine, Intel NPU, Coral 가속기"
          }
        ],
        "note": "이 수치는 NVR 하드웨어 가이드와 LLM 페이지에서 가져왔으며, NVR 없는 무료 플랫폼의 별도 최소 사양은 확인하지 않았습니다."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "시작하는 방법",
        "content": [
          "**아래 단계는 공식 문서를 따른 것이며 PromptQuorum이 직접 실행해 보지는 않았습니다.**"
        ],
        "numberedItems": [
          {
            "title": "Scrypted 설치",
            "whyItMatters": "Mac이나 Windows에서는 데스크톱 앱을, 서버에서는 Docker, Proxmox VE, Unraid 중 하나를 사용한 뒤 https://localhost:10443 에서 관리 콘솔을 열고 인증서 경고를 수락합니다."
          },
          {
            "title": "카메라 추가 및 확인",
            "whyItMatters": "카메라 설정 페이지의 안내대로 각 카메라를 추가합니다. 문서는 NVR 체험을 시작하기 전에 무료 버전에서 카메라를 먼저 확인할 것을 권합니다."
          },
          {
            "title": "스마트홈 플랫폼 연결",
            "whyItMatters": "HomeKit, Google Home, Alexa, Home Assistant 플러그인을 설치하고 그곳에 카메라를 추가합니다."
          },
          {
            "title": "선택: NVR과 LLM 추가",
            "whyItMatters": "Scrypted NVR 플러그인을 설치하고 결제 포털 계정으로 로그인합니다. AI 요약을 쓰려면 LLM 플러그인을 설치하고 클라우드 키나 로컬 모델을 선택합니다."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "출처가 확인한 기능",
        "content": [
          "**아래 항목은 모두 웹사이트나 문서에서 가져온 것이며, 여기서 직접 테스트한 것은 없습니다.**"
        ],
        "items": [
          "**플랫폼.** HomeKit(HomeKit Secure Video 포함), Google Home(iOS 미지원), Alexa, Home Assistant.",
          "**Scrypted NVR.** 24시간 녹화, 타임라인·이벤트 보기, 얼굴 인식, 번호판 인식, 썸네일이 포함된 알림, 적응형 비트레이트.",
          "**AI 요약과 AI 검색.** 감지 내용을 자연어로 짧게 설명해 푸시 알림으로 보내는 기능과, 모든 카메라의 기록을 자연어로 검색하는 기능.",
          "**LLM 플러그인.** 본인의 API 키로 ChatGPT, Claude, Gemini를 쓰거나, llama.cpp로 호스팅하는 로컬 모델(Qwen3.5와 Gemma 4 변형 포함)을 쓸 수 있습니다. AI 요약은 두 방법 모두 사용할 수 있습니다.",
          "**하드웨어 가속 감지.** 객체 감지 플러그인은 CPU, GPU, Apple Neural Engine, Intel NPU, Coral에서 실행되며, Cluster 모드로 다른 장비의 GPU에 모델을 맡길 수 있습니다."
        ],
        "note": "문서는 가격과 성능을 기준으로 저렴한 특정 클라우드 모델을 권장합니다. 이는 제작사의 안내이며 PromptQuorum의 결과가 아닙니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "데이터 흐름과 개인정보",
        "content": [
          "**감지와 녹화는 사용자의 서버에서 실행되지만, AI 요약이 집 안에 머무는 것은 로컬 모델을 선택했을 때뿐입니다.** 문서에 따르면 로컬 모델을 쓰면 이미지를 클라우드로 보내지 않고 AI 요약을 전부 로컬에서 실행할 수 있습니다. 클라우드 제공업체를 쓰면 이미지가 해당 업체의 정책에 따라 그 업체로 전송됩니다.",
          "네트워크 밖에서 보려면 Scrypted Cloud 플러그인과 Scrypted Cloud 로그인을 사용합니다. 문서의 개인정보처리방침은 회사를 Vysor, Inc.로 명시하고 있으며, 클라우드 서비스가 무엇을 저장하는지는 PromptQuorum이 분석하지 않았습니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이는 제작사의 설명이며 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽, 클라우드 서비스, 코드를 검사하지 않았습니다."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "이런 분께 적합합니다",
        "items": [
          "**HomeKit과 Google Home 사용자** 중 로컬 RTSP·ONVIF 카메라의 영상을 홈 앱에서 보고 싶은 분.",
          "**Home Assistant 사용자** 중 스마트 감지가 붙은 카메라 스트림을 환경에 넣고 싶은 분.",
          "**Mac mini, Proxmox 장비, NAS를 가진 분** 중 선택형 로컬 AI 요약이 있는 자체 호스팅 NVR을 원하는 분."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 내용",
        "items": [
          "**가격.** 문서에는 NVR 구독과 데스크톱 라이선스의 금액이 없고 결제 포털은 로그인이 필요해서 여기에는 가격을 적지 않았습니다.",
          "**라이선스.** 저장소의 LICENSE 파일은 디렉터리마다 라이선스가 다르며 일부 플러그인은 GPL 준수가 필요할 수 있다고 밝힙니다. 서버 패키지는 ISC로 선언되어 있으나 각 플러그인과 NVR의 라이선스는 확인하지 않았습니다.",
          "**성능.** 장비당 카메라 수, 감지 정확도, 요약 품질은 제작사의 수치이며 측정하지 않았습니다.",
          "**클라우드의 데이터 처리.** 원격 시청을 위해 Scrypted Cloud가 무엇을 저장하는지는 분석하지 않았습니다.",
          "**로컬 모델 품질.** 나열된 로컬 모델이 사용자의 카메라에 쓸 만한 이벤트 요약을 작성하는지는 테스트하지 않았습니다."
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
            "앱": "[Home Assistant Assist](/ko/power-local-llm/home-assistant-assist-review)",
            "플랫폼": "Linux, 웹, iOS, Android",
            "가격 / 라이선스": "무료 / Apache-2.0",
            "핵심 차이": "Home Assistant 안의 음성 비서이며 카메라 플랫폼이 아님"
          }
        ],
        "note": "현재 PromptQuorum 리뷰가 있는 다른 카메라·NVR 앱은 없습니다. Scrypted는 Home Assistant를 연결 대상으로 꼽으므로 두 앱이 엄격한 경쟁 관계는 아닙니다. 선택하기 전에 각 앱의 최신 가격, 라이선스, 지원 플랫폼을 해당 페이지에서 확인하세요."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "Scrypted NVR은 환불받을 수 있습니까?",
            "a": "아니요. 구매 정책에 따르면 모든 판매는 최종이며, 해지한 구독은 일할 계산 없이 다음 갱신일에 종료됩니다. 결제 1주일 전에 이메일로 결제 알림이 발송됩니다."
          },
          {
            "q": "Scrypted는 Ollama와 함께 쓸 수 있습니까?",
            "a": "문서는 Ollama와 LM Studio가 OpenAI 호환 엔드포인트를 완전히 제공하지 않아 제대로 동작하지 않을 수 있다고 밝힙니다. LLM 플러그인에 내장된 llama.cpp를 우선하며 vLLM과 SGLang도 권장합니다."
          },
          {
            "q": "Scrypted를 Raspberry Pi에서 실행할 수 있습니까?",
            "a": "하드웨어 가이드는 Scrypted NVR에 Raspberry Pi 4와 저성능 NAS를 권장하지 않는다고 밝힙니다. NVR 없는 플랫폼에 대한 판단은 제시하지 않습니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "총평",
        "content": "Scrypted는 로컬 IP 카메라를 HomeKit, Google Home, Alexa, Home Assistant로 가져오는, 활발히 개발되는 방법이며 그 위에 유료 NVR과 선택형 로컬 LLM 요약을 얹을 수 있습니다. 반면 로컬 LLM 앱이 아니라 영상 플랫폼이고, NVR과 데스크톱 앱은 가격이 공개되지 않은 유료이며, 저장소 라이선스는 디렉터리마다 다르고, PromptQuorum은 이 중 아무것도 테스트하지 않았습니다. 로컬 RTSP·ONVIF 카메라가 있고 유료 NVR을 받아들일 수 있는 분께 맞으며, 순수한 로컬 채팅 환경이 목적이라면 맞지 않는 도구입니다."
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[Scrypted 웹사이트](https://www.scrypted.app) — 제품 개요와 플랫폼 목록, 2026년 11월 1일 확인.",
          "[Scrypted 문서](https://docs.scrypted.app) — 설치, 데스크톱 앱, LLM 플러그인, NVR 기능, AI 요약, 앱, 하드웨어 가이드, 2026년 11월 1일 확인.",
          "[Scrypted Privacy Policy](https://docs.scrypted.app/scrypted-nvr/policies/privacy.html) — 회사 이름과 데이터 보호 조건, 2026년 11월 1일 확인.",
          "[GitHub의 Scrypted](https://github.com/koush/scrypted) — LICENSE 파일, 패키지 정보, 커밋 기록, 2026년 11월 1일 확인.",
          "[Scrypted 데스크톱 앱 릴리스](https://github.com/koush/nvr.scrypted.app/releases) — 2026년 9월 19일의 0.147.1 버전과 파일 목록, 2026년 11월 1일 확인.",
          "[App Store의 Scrypted](https://apps.apple.com/us/app/scrypted/id1658171214) — 판매자 이름과 앱 정보, 2026년 11월 1일 확인."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[Home Assistant Assist 리뷰](/ko/power-local-llm/home-assistant-assist-review) — Home Assistant 안의 로컬 음성 제어와 LLM 에이전트.",
          "[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록."
        ]
      }
    }
  },
}
