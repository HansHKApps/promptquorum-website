// LLM Vision Review: Camera Analysis for Home Assistant With Vision LLMs
// Slug: llm-vision-review
// Companion to: home-assistant-assist-review, ollama-review
// Sources: llmvision.org (home page and /glimpse), github.com/valentinfrlch/ha-llmvision (README, licence, manifest, commits, release v1.7.2 of
// 2026-09-03) and its PRIVACY.md (effective 2026-02-15), all checked 2026-11-01 — no hands-on testing. The integration has no price of its own;
// cloud-provider pricing is not quoted. Translations produced under docs/geo-translation.md (geo-translation: APPLIED).

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
    "heroImage": "/images/llm-vision-review-hero-en.webp",
    "title": "LLM Vision Review: Camera Analysis for Home Assistant With Vision LLMs",
    "seoTitle": "LLM Vision Review: Home Assistant Camera Analysis",
    "intro": "LLM Vision is a free Home Assistant integration that sends camera images, video clips and Frigate events to a multimodal language model and returns a text description that notifications, automations and an event timeline can use. It does no AI work itself: you connect a provider, either Ollama, Open WebUI or LocalAI on your own hardware or a cloud service. The maker is Valentin Fröhlich. This review is based on the [website](https://llmvision.org), the [GitHub repository](https://github.com/valentinfrlch/ha-llmvision) with its releases and privacy file, and the site's page on the Glimpse model, checked on 1 November 2026; PromptQuorum has not tested the integration hands-on.",
    "metaDescription": "LLM Vision review: a free Home Assistant integration that describes camera images, video and Frigate events with a vision LLM, local or cloud. Apache-2.0.",
    "twitterDescription": "LLM Vision review: Home Assistant camera analysis with a vision LLM you choose, from Ollama on your own hardware to cloud APIs. What the sources confirm and what they leave open.",
    "audience": "Home Assistant owners with cameras or Frigate who want to know what LLM Vision does, which AI providers it needs, where the images go and which claims the sources leave open.",
    "readTime": "6 min read",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "LLM Vision review",
    "targetKeywords": [
      "llm vision review",
      "llm vision home assistant",
      "home assistant camera ai",
      "home assistant ollama vision",
      "frigate llm integration",
      "local vision llm security camera",
      "llmvision hacs"
    ],
    "current_models_mentioned": [
      "Glimpse-v1"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**LLM Vision (version 1.7.2, released on 3 September 2026) is a free Home Assistant integration under the Apache-2.0 licence that lets a vision-capable language model describe camera images, videos, live streams and Frigate events.** It ships without a model: the analysis runs in the provider you configure. Every statement here comes from the maker's site, its GitHub repository and its privacy file.",
    "quickAnswerTop": {
      "en": {
        "question": "Do camera images stay on my network with LLM Vision?",
        "answer": "Only if you pick a local provider. The integration sends frames to whichever provider you configure: with Ollama, Open WebUI or LocalAI on your own hardware they stay with you, with a cloud provider they go to that company's servers. The privacy file says the integration itself has no telemetry.",
        "bullets": [
          "Four actions cover the inputs: Images, Videos, Streams and Data, which updates a Home Assistant entity from an image.",
          "A built-in downscaler lowers image resolution to cut token use and cost.",
          "Results can appear on the dashboard through a Timeline Card and a Preview Card."
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
        "label": "What Is LLM Vision?",
        "anchor": "what-is-llm-vision"
      },
      {
        "label": "Get It",
        "anchor": "get-it"
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
            "text": "LLM Vision is a Home Assistant integration that lets a vision LLM describe camera images, video and Frigate events, with the model supplied by a local or cloud provider you choose."
          },
          {
            "type": "plain-terms",
            "text": "Your camera or Frigate hands a picture to an AI model that you set up separately, and the answer comes back as text that Home Assistant can show, store or act on."
          }
        ],
        "items": [
          "Maintenance: version 1.7.2 was released on 3 September 2026 and the repository was last updated on 17 September 2026 with a beta blueprint for 1.8.0, so no stale-project warning applies.",
          "Cost: the integration is free; cloud providers charge per query.",
          "AI: no model is bundled, you connect a provider of your choice.",
          "Privacy: the privacy file states that the integration contains no telemetry; where frames go depends on your provider, see Data Flow and Privacy.",
          "Maker: an individual developer, Valentin Fröhlich, who says the project is not endorsed by or associated with any of the listed providers."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "This review is based on llmvision.org, the GitHub repository and its privacy file, checked on 1 November 2026. PromptQuorum has not installed, run or benchmarked the integration, so speed, detection accuracy and description quality are not assessed."
          }
        ]
      },
      "overview": {
        "id": "what-is-llm-vision",
        "title": "What Is LLM Vision?",
        "content": [
          "**LLM Vision is a custom integration for Home Assistant that passes images from cameras, image entities, video files and Frigate events to a multimodal language model.** The site calls it \"Visual Intelligence for your Home\", and the GitHub repository was created on 14 May 2024.",
          "It is an add-on for an existing smart-home setup, not a standalone app: you need a running Home Assistant, the HACS community store and an AI provider. The maker is Valentin Fröhlich, credited in the site's copyright line; the repository lists a second code owner on GitHub."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Get It",
        "content": [
          "**LLM Vision installs from HACS inside Home Assistant; there is no separate download, store app or installer.**"
        ],
        "columns": [
          "Option",
          "How to get it"
        ],
        "rows": [
          {
            "Option": "Install",
            "How to get it": "[LLM Vision on GitHub](https://github.com/valentinfrlch/ha-llmvision), added through HACS"
          },
          {
            "Option": "Setup",
            "How to get it": "Add it under Devices & services, set up the /media folder for snapshots, then add an AI provider entry"
          },
          {
            "Option": "Local providers",
            "How to get it": "Ollama, Open WebUI or LocalAI on your own hardware"
          },
          {
            "Option": "Cloud providers",
            "How to get it": "OpenAI, Anthropic, Google, OpenRouter, AWS, Groq or Azure AI, billed per query by the provider"
          },
          {
            "Option": "Price",
            "How to get it": "The integration is free; donations via Buy Me a Coffee are optional"
          },
          {
            "Option": "Documentation",
            "How to get it": "[Getting started guide](https://llm-vision.gitbook.io/getting-started)"
          },
          {
            "Option": "Website",
            "How to get it": "[llmvision.org](https://llmvision.org)"
          },
          {
            "Option": "Privacy policy",
            "How to get it": "[PRIVACY.md on GitHub](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md)"
          },
          {
            "Option": "Source code",
            "How to get it": "[Apache-2.0 licence on GitHub](https://github.com/valentinfrlch/ha-llmvision)"
          }
        ],
        "note": "Version reviewed: 1.7.2 (3 September 2026, GitHub). The integration manifest in the repository still says 1.7.1 and the website says v1.7.0, so both lag the release. No minimum Home Assistant version is stated in the repository, and Home Assistant Container users may need to mount the /media folder."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "How to Get Started",
        "content": [
          "**The steps follow the maker's README; PromptQuorum has not run them.**"
        ],
        "numberedItems": [
          {
            "title": "Install the integration",
            "whyItMatters": "Install LLM Vision from HACS and restart Home Assistant."
          },
          {
            "title": "Add it to Home Assistant",
            "whyItMatters": "Search for LLM Vision under Devices & services and submit with the default settings."
          },
          {
            "title": "Prepare the media folder",
            "whyItMatters": "Snapshots are stored in /media; Home Assistant Container users may need to mount it."
          },
          {
            "title": "Add an AI provider",
            "whyItMatters": "Return to the integration page and add an entry for your provider, for example Ollama on your own server or a cloud API key."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Confirmed by the Sources",
        "content": [
          "**Every item below comes from the maker's site or repository; none has been independently tested.**"
        ],
        "items": [
          "**Four actions.** Images analyses cameras, image entities or files; Videos extracts frames from a video file or Frigate event; Streams captures frames from camera entities; Data analyses an image and updates a number, text, select or boolean helper.",
          "**Notifications.** Camera feeds and Frigate events are analysed in near real time, and results can feed notifications and automations.",
          "**Timeline and memory.** Events are stored only if \"remember\" is on; with \"important\" they are classified and kept only if judged important, and appear as calendar entities. Remembering events needs a conversation agent such as Extended OpenAI Conversation.",
          "**Image pipeline.** The site says it picks relevant frames and optimises them for inference, and a downscaler reduces resolution and token use.",
          "**Glimpse-v1.** The maker's own 4-billion-parameter open vision-language model for summarising home-security events, in beta, on [Hugging Face and the Ollama Library](https://llmvision.org/glimpse/) (`ollama run llmvision/glimpse-v1`).",
          "**Languages.** English, German, Dutch, French, Spanish, Portuguese, Italian, Polish and Swedish, with more added over time."
        ],
        "note": "Detection accuracy, latency and the quality of descriptions were not tested."
      },
      "privacy": {
        "id": "privacy",
        "title": "Data Flow and Privacy",
        "content": [
          "**The integration sends images only to the provider you configure, so where they end up depends entirely on that choice.** With Ollama, Open WebUI or LocalAI on your own hardware the analysis stays with you; with OpenAI, Anthropic, Google, OpenRouter, AWS, Groq or Azure AI the frames travel to that company's servers and fall under its terms.",
          "The privacy file (effective 15 February 2026) says the Home Assistant integration contains no telemetry: the maker receives no usage data, cannot see which providers you configure and has no access to your Home Assistant data. No accounts are needed, and only the website uses Google Analytics. The site adds that analysed events never leave your Home Assistant instance, while the integration manifest classifies it as cloud polling."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "These are the maker's declarations, not audit results, and PromptQuorum has not inspected network traffic. The site's statement about events refers to stored events, not to the calls made to a provider."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**Home Assistant users with cameras** who want a text description of a doorbell or driveway event in the notification.",
          "**Frigate users** who want events summarised and searchable in a timeline.",
          "**Ollama, Open WebUI or LocalAI operators** who want frames analysed on their own hardware."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Performance.** Detection accuracy, latency, hardware needs and the cost per query are untested, and the site names no hardware requirement.",
          "**Fully local operation.** Neither the site nor the README spells out an end-to-end local setup; they list Ollama, Open WebUI and LocalAI as providers and recommend a local provider for the most private setup.",
          "**Home Assistant version.** No minimum version is stated in the repository.",
          "**Glimpse-v1 licence.** The site does not name a licence for the model and gives no hardware figures."
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
            "Platforms": "Linux, web, iPhone, Android",
            "Price / license": "Free / Apache-2.0",
            "Key difference": "Built-in voice assistant; LLM agents through Ollama or OpenAI"
          },
          {
            "App": "[Ollama](/power-local-llm/ollama-review)",
            "Platforms": "Mac, Windows, Linux",
            "Price / license": "Free / MIT",
            "Key difference": "Local model runner that LLM Vision can use as a provider"
          }
        ],
        "note": "Confirm each app's current price, license and platforms on its own page before choosing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "Can I use a provider that is not on the list?",
            "a": "The site says providers with an OpenAI-compatible API endpoint can also be used, possibly with additional setup."
          },
          {
            "q": "Is there a paid version or subscription?",
            "a": "None is listed; the site shows only an optional Buy Me a Coffee donation link, and the integration itself is free."
          },
          {
            "q": "Where do I get help or report a bug?",
            "a": "The site links GitHub Discussions, a Discord server and a Home Assistant community thread, and lists [hello@llmvision.org](mailto:hello@llmvision.org) for contact. Its \"Report a bug\" link points to the separate dashboard-card repository, not to the main one."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "LLM Vision turns Home Assistant camera images, video and Frigate events into text through a vision model you choose, it is free under Apache-2.0, and its repository was updated on 17 September 2026. Against that, it brings no model of its own, cloud providers receive your frames, no minimum Home Assistant version or hardware requirement is stated, and accuracy and speed are untested. It suits Home Assistant owners who can run Ollama, Open WebUI or LocalAI themselves; anyone sending frames to a cloud provider should read that provider's terms first."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[LLM Vision website](https://llmvision.org) — features, providers, privacy and install notes, checked 1 November 2026.",
          "[Glimpse-v1 page](https://llmvision.org/glimpse/) — model description and availability, checked 1 November 2026.",
          "[LLM Vision on GitHub](https://github.com/valentinfrlch/ha-llmvision) — README, licence, manifest and commits, checked 1 November 2026.",
          "[GitHub release v1.7.2](https://github.com/valentinfrlch/ha-llmvision/releases/tag/v1.7.2) — release of 3 September 2026, checked 1 November 2026.",
          "[Privacy policy](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md) — telemetry and data handling, effective 15 February 2026, checked 1 November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[Home Assistant Assist Review](/power-local-llm/home-assistant-assist-review) — the voice assistant built into Home Assistant, with Ollama and OpenAI agents.",
          "[Ollama Review](/power-local-llm/ollama-review) — the local model runner LLM Vision can use as a provider.",
          "[Local LLM Software Directory](/directory) — the full catalogue of local AI tools."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "LLM Vision Review: Camera Analysis for Home Assistant With Vision LLMs",
      "description": "LLM Vision review: a free Home Assistant integration that describes camera images, video and Frigate events with a vision LLM from Ollama, Open WebUI, LocalAI or a cloud provider. Install, privacy and what the sources leave unconfirmed.",
      "url": "https://www.promptquorum.com/power-local-llm/llm-vision-review",
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
        "audienceType": "Home Assistant owners evaluating camera analysis with vision language models"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "LLM Vision"
        },
        {
          "@type": "Thing",
          "name": "Home Assistant"
        },
        {
          "@type": "Thing",
          "name": "Vision language models"
        },
        {
          "@type": "Thing",
          "name": "Frigate"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/power-local-llm/llm-vision-review"
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
          "name": "LLM Vision Review",
          "item": "https://www.promptquorum.com/power-local-llm/llm-vision-review"
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
    "heroImage": "/images/llm-vision-review-hero-de.webp",
    "title": "LLM-Vision-Rezension: Kameraanalyse für Home Assistant mit Vision-LLMs",
    "seoTitle": "LLM-Vision-Rezension: Kameraanalyse für Home Assistant",
    "intro": "LLM Vision ist eine kostenlose Home-Assistant-Integration, die Kamerabilder, Videoclips und Frigate-Ereignisse an ein multimodales Sprachmodell schickt und eine Textbeschreibung zurückgibt, die Benachrichtigungen, Automatisierungen und eine Ereigniszeitleiste nutzen können. Die Integration leistet selbst keine KI-Arbeit: Sie verbinden einen Anbieter, entweder Ollama, Open WebUI oder LocalAI auf eigener Hardware oder einen Cloud-Dienst. Der Entwickler ist Valentin Fröhlich. Diese Rezension stützt sich auf die [Website](https://llmvision.org), das [GitHub-Repository](https://github.com/valentinfrlch/ha-llmvision) mit Releases und Datenschutzdatei sowie die Seite der Website zum Modell Glimpse, geprüft am 1. November 2026; PromptQuorum hat die Integration nicht selbst getestet.",
    "metaDescription": "LLM-Vision-Rezension: kostenlose Home-Assistant-Integration, die Kamerabilder und Frigate-Ereignisse mit einem Vision-LLM beschreibt, lokal oder per Cloud.",
    "twitterDescription": "LLM-Vision-Rezension: Kameraanalyse für Home Assistant mit einem Vision-LLM Ihrer Wahl, von Ollama auf eigener Hardware bis zu Cloud-APIs. Was die Quellen bestätigen und was offen bleibt.",
    "audience": "Home-Assistant-Nutzer mit Kameras oder Frigate, die wissen wollen, was LLM Vision leistet, welche KI-Anbieter nötig sind, wohin die Bilder gehen und welche Aussagen die Quellen offenlassen.",
    "readTime": "6 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "LLM Vision Rezension",
    "targetKeywords": [
      "llm vision rezension",
      "llm vision home assistant",
      "home assistant kamera ki",
      "home assistant ollama vision",
      "frigate llm integration",
      "lokales vision llm überwachungskamera",
      "llmvision hacs"
    ],
    "current_models_mentioned": [
      "Glimpse-v1"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**LLM Vision (Version 1.7.2, veröffentlicht am 3. September 2026) ist eine kostenlose Home-Assistant-Integration unter der Apache-2.0-Lizenz, mit der ein bildfähiges Sprachmodell Kamerabilder, Videos, Live-Streams und Frigate-Ereignisse beschreibt.** Ein Modell wird nicht mitgeliefert: Die Analyse läuft bei dem Anbieter, den Sie einrichten. Jede Aussage hier stammt von der Website des Entwicklers, seinem GitHub-Repository und seiner Datenschutzdatei.",
    "quickAnswerTop": {
      "de": {
        "question": "Bleiben Kamerabilder mit LLM Vision in meinem Netzwerk?",
        "answer": "Nur wenn Sie einen lokalen Anbieter wählen. Die Integration schickt Einzelbilder an den Anbieter, den Sie einrichten: Bei Ollama, Open WebUI oder LocalAI auf eigener Hardware bleiben sie bei Ihnen, bei einem Cloud-Anbieter gehen sie an dessen Server. Laut Datenschutzdatei enthält die Integration selbst keine Telemetrie.",
        "bullets": [
          "Vier Aktionen decken die Eingaben ab: Images, Videos, Streams und Data, das aus einem Bild eine Home-Assistant-Entität aktualisiert.",
          "Ein eingebauter Downscaler verringert die Bildauflösung, um Token-Verbrauch und Kosten zu senken.",
          "Ergebnisse können über eine Timeline Card und eine Preview Card im Dashboard erscheinen."
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
        "label": "Was ist LLM Vision?",
        "anchor": "what-is-llm-vision"
      },
      {
        "label": "Bezugsquellen",
        "anchor": "get-it"
      },
      {
        "label": "So starten Sie",
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
        "label": "Was wir nicht prüfen konnten",
        "anchor": "who-should-not-use"
      },
      {
        "label": "Konkurrenten und Alternativen",
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
            "text": "LLM Vision ist eine Home-Assistant-Integration, mit der ein Vision-LLM Kamerabilder, Videos und Frigate-Ereignisse beschreibt; das Modell stellt ein lokaler oder Cloud-Anbieter Ihrer Wahl."
          },
          {
            "type": "plain-terms",
            "text": "Ihre Kamera oder Frigate übergibt ein Bild an ein KI-Modell, das Sie getrennt einrichten, und die Antwort kommt als Text zurück, den Home Assistant anzeigen, speichern oder für Aktionen nutzen kann."
          }
        ],
        "items": [
          "Pflege: Version 1.7.2 erschien am 3. September 2026, das Repository wurde zuletzt am 17. September 2026 mit einem Beta-Blueprint für 1.8.0 aktualisiert, daher gilt keine Warnung vor einem veralteten Projekt.",
          "Kosten: Die Integration ist kostenlos; Cloud-Anbieter berechnen pro Anfrage.",
          "KI: Es ist kein Modell enthalten, Sie verbinden einen Anbieter Ihrer Wahl.",
          "Datenschutz: Die Datenschutzdatei erklärt, dass die Integration keine Telemetrie enthält; wohin die Bilder gehen, hängt von Ihrem Anbieter ab, siehe Datenfluss und Datenschutz.",
          "Entwickler: eine Einzelperson, Valentin Fröhlich, nach eigener Aussage ohne Billigung durch oder Verbindung zu den genannten Anbietern."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Diese Rezension stützt sich auf llmvision.org, das GitHub-Repository und seine Datenschutzdatei, geprüft am 1. November 2026. PromptQuorum hat die Integration weder installiert noch ausgeführt oder gemessen; Geschwindigkeit, Erkennungsgenauigkeit und Qualität der Beschreibungen werden daher nicht bewertet."
          }
        ]
      },
      "overview": {
        "id": "what-is-llm-vision",
        "title": "Was ist LLM Vision?",
        "content": [
          "**LLM Vision ist eine benutzerdefinierte Integration für Home Assistant, die Bilder von Kameras, Bild-Entitäten, Videodateien und Frigate-Ereignisse an ein multimodales Sprachmodell weitergibt.** Die Website nennt sie „Visual Intelligence for your Home“, das GitHub-Repository wurde am 14. Mai 2024 angelegt.",
          "Sie ist eine Erweiterung für ein bestehendes Smart-Home und keine eigenständige App: Sie brauchen ein laufendes Home Assistant, den Community-Store HACS und einen KI-Anbieter. Der Entwickler ist Valentin Fröhlich, genannt in der Copyright-Zeile der Website; das Repository führt einen weiteren Code-Owner auf GitHub."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Bezugsquellen",
        "content": [
          "**LLM Vision wird über HACS in Home Assistant installiert; es gibt keinen separaten Download, keine Store-App und kein Installationsprogramm.**"
        ],
        "columns": [
          "Option",
          "So erhalten Sie es"
        ],
        "rows": [
          {
            "Option": "Installation",
            "So erhalten Sie es": "[LLM Vision auf GitHub](https://github.com/valentinfrlch/ha-llmvision), über HACS hinzugefügt"
          },
          {
            "Option": "Einrichtung",
            "So erhalten Sie es": "Unter Geräte & Dienste hinzufügen, Ordner /media für Schnappschüsse einrichten, KI-Anbieter ergänzen"
          },
          {
            "Option": "Lokale Anbieter",
            "So erhalten Sie es": "Ollama, Open WebUI oder LocalAI auf eigener Hardware"
          },
          {
            "Option": "Cloud-Anbieter",
            "So erhalten Sie es": "OpenAI, Anthropic, Google, OpenRouter, AWS, Groq oder Azure AI, pro Anfrage vom Anbieter berechnet"
          },
          {
            "Option": "Preis",
            "So erhalten Sie es": "Die Integration ist kostenlos; Spenden über Buy Me a Coffee sind freiwillig"
          },
          {
            "Option": "Dokumentation",
            "So erhalten Sie es": "[Einstiegsanleitung](https://llm-vision.gitbook.io/getting-started)"
          },
          {
            "Option": "Website",
            "So erhalten Sie es": "[llmvision.org](https://llmvision.org)"
          },
          {
            "Option": "Datenschutzerklärung",
            "So erhalten Sie es": "[PRIVACY.md auf GitHub](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md)"
          },
          {
            "Option": "Quellcode",
            "So erhalten Sie es": "[Apache-2.0-Lizenz auf GitHub](https://github.com/valentinfrlch/ha-llmvision)"
          }
        ],
        "note": "Geprüfte Version: 1.7.2 (3. September 2026, GitHub). Das Integrations-Manifest im Repository nennt noch 1.7.1 und die Website v1.7.0, beide hinken dem Release also hinterher. Eine Mindestversion von Home Assistant nennt das Repository nicht; Nutzer von Home Assistant Container müssen den Ordner /media womöglich einbinden."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "So starten Sie",
        "content": [
          "**Die Schritte folgen der README des Entwicklers; PromptQuorum hat sie nicht ausgeführt.**"
        ],
        "numberedItems": [
          {
            "title": "Integration installieren",
            "whyItMatters": "Installieren Sie LLM Vision über HACS und starten Sie Home Assistant neu."
          },
          {
            "title": "In Home Assistant hinzufügen",
            "whyItMatters": "Suchen Sie unter Geräte & Dienste nach LLM Vision und bestätigen Sie mit den Standardeinstellungen."
          },
          {
            "title": "Medienordner vorbereiten",
            "whyItMatters": "Schnappschüsse liegen in /media; Nutzer von Home Assistant Container müssen ihn womöglich einbinden."
          },
          {
            "title": "KI-Anbieter hinzufügen",
            "whyItMatters": "Kehren Sie zur Integrationsseite zurück und ergänzen Sie einen Eintrag für Ihren Anbieter, etwa Ollama auf dem eigenen Server oder einen Cloud-API-Schlüssel."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Von den Quellen bestätigte Funktionen",
        "content": [
          "**Jeder Punkt unten stammt von der Website oder dem Repository des Entwicklers; keiner wurde unabhängig getestet.**"
        ],
        "items": [
          "**Vier Aktionen.** Images analysiert Kameras, Bild-Entitäten oder Dateien; Videos entnimmt Einzelbilder aus einer Videodatei oder einem Frigate-Ereignis; Streams erfasst Einzelbilder von Kamera-Entitäten; Data analysiert ein Bild und aktualisiert einen Zahlen-, Text-, Auswahl- oder Boolean-Helfer.",
          "**Benachrichtigungen.** Kamerabilder und Frigate-Ereignisse werden nahezu in Echtzeit analysiert, die Ergebnisse können Benachrichtigungen und Automatisierungen speisen.",
          "**Zeitleiste und Gedächtnis.** Ereignisse werden nur gespeichert, wenn „remember“ aktiv ist; mit „important“ werden sie klassifiziert und nur behalten, wenn sie als wichtig gelten, und erscheinen als Kalender-Entitäten. Das Merken von Ereignissen erfordert einen Konversations-Agenten wie Extended OpenAI Conversation.",
          "**Bild-Pipeline.** Laut Website wählt sie relevante Einzelbilder aus und optimiert sie für die Inferenz; ein Downscaler senkt Auflösung und Token-Verbrauch.",
          "**Glimpse-v1.** Das eigene offene Vision-Sprachmodell des Entwicklers mit 4 Milliarden Parametern zur Zusammenfassung von Sicherheitsereignissen im Haus, in der Beta, auf [Hugging Face und in der Ollama Library](https://llmvision.org/glimpse/) (`ollama run llmvision/glimpse-v1`).",
          "**Sprachen.** Englisch, Deutsch, Niederländisch, Französisch, Spanisch, Portugiesisch, Italienisch, Polnisch und Schwedisch, weitere folgen nach und nach."
        ],
        "note": "Erkennungsgenauigkeit, Latenz und Qualität der Beschreibungen wurden nicht getestet."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenfluss und Datenschutz",
        "content": [
          "**Die Integration schickt Bilder nur an den Anbieter, den Sie einrichten; wohin sie gelangen, hängt allein von dieser Wahl ab.** Bei Ollama, Open WebUI oder LocalAI auf eigener Hardware bleibt die Analyse bei Ihnen; bei OpenAI, Anthropic, Google, OpenRouter, AWS, Groq oder Azure AI gehen die Einzelbilder an die Server dieses Unternehmens und unterliegen dessen Bedingungen.",
          "Die Datenschutzdatei (gültig ab 15. Februar 2026) besagt, dass die Home-Assistant-Integration keine Telemetrie enthält: Der Entwickler erhält keine Nutzungsdaten, sieht nicht, welche Anbieter Sie einrichten, und hat keinen Zugriff auf Ihre Home-Assistant-Daten. Konten sind nicht nötig, und nur die Website nutzt Google Analytics. Die Website ergänzt, dass analysierte Ereignisse Ihre Home-Assistant-Instanz nie verlassen, während das Integrations-Manifest sie als Cloud Polling einstuft."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Das sind Erklärungen des Entwicklers, keine Prüfergebnisse, und PromptQuorum hat den Netzwerkverkehr nicht untersucht. Die Aussage der Website zu Ereignissen bezieht sich auf gespeicherte Ereignisse, nicht auf die Aufrufe an einen Anbieter."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen geeignet",
        "items": [
          "**Home-Assistant-Nutzer mit Kameras**, die in der Benachrichtigung eine Textbeschreibung eines Klingel- oder Einfahrtsereignisses wünschen.",
          "**Frigate-Nutzer**, die Ereignisse zusammengefasst und in einer Zeitleiste durchsuchbar haben möchten.",
          "**Betreiber von Ollama, Open WebUI oder LocalAI**, die Einzelbilder auf eigener Hardware analysieren lassen wollen."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht prüfen konnten",
        "items": [
          "**Leistung.** Erkennungsgenauigkeit, Latenz, Hardwarebedarf und Kosten pro Anfrage sind ungetestet, und die Website nennt keine Hardwareanforderung.",
          "**Rein lokaler Betrieb.** Weder die Website noch die README beschreibt eine durchgängig lokale Einrichtung; sie nennen Ollama, Open WebUI und LocalAI als Anbieter und empfehlen für maximale Privatsphäre einen lokalen Anbieter.",
          "**Home-Assistant-Version.** Eine Mindestversion nennt das Repository nicht.",
          "**Lizenz von Glimpse-v1.** Die Website nennt keine Lizenz für das Modell und macht keine Hardwareangaben."
        ]
      },
      "vsAlternatives": {
        "id": "vs-alternatives",
        "itemHeadings": true,
        "title": "Konkurrenten und Alternativen",
        "columns": [
          "App",
          "Plattformen",
          "Preis / Lizenz",
          "Hauptunterschied"
        ],
        "rows": [
          {
            "App": "[Home Assistant Assist](/de/power-local-llm/home-assistant-assist-review)",
            "Plattformen": "Linux, Web, iPhone, Android",
            "Preis / Lizenz": "Kostenlos / Apache-2.0",
            "Hauptunterschied": "Eingebauter Sprachassistent; LLM-Agenten über Ollama oder OpenAI"
          },
          {
            "App": "[Ollama](/de/power-local-llm/ollama-review)",
            "Plattformen": "Mac, Windows, Linux",
            "Preis / Lizenz": "Kostenlos / MIT",
            "Hauptunterschied": "Lokaler Modell-Runner, den LLM Vision als Anbieter nutzen kann"
          }
        ],
        "note": "Prüfen Sie vor der Entscheidung Preis, Lizenz und Plattformen jeder App auf deren eigener Seite."
      },
      "faq": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Kann ich einen Anbieter nutzen, der nicht auf der Liste steht?",
            "a": "Laut Website lassen sich auch Anbieter mit OpenAI-kompatiblem API-Endpunkt verwenden, womöglich mit zusätzlichem Einrichtungsaufwand."
          },
          {
            "q": "Gibt es eine kostenpflichtige Version oder ein Abo?",
            "a": "Keines ist aufgeführt; die Website zeigt nur einen freiwilligen Buy-Me-a-Coffee-Spendenlink, und die Integration selbst ist kostenlos."
          },
          {
            "q": "Wo bekomme ich Hilfe oder melde einen Fehler?",
            "a": "Die Website verlinkt GitHub Discussions, einen Discord-Server und einen Beitrag in der Home-Assistant-Community und nennt [hello@llmvision.org](mailto:hello@llmvision.org) als Kontakt. Der Link „Report a bug“ führt zum separaten Repository der Dashboard-Karte, nicht zum Haupt-Repository."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "LLM Vision macht aus Kamerabildern, Videos und Frigate-Ereignissen in Home Assistant Text mithilfe eines Vision-Modells Ihrer Wahl, ist unter Apache-2.0 kostenlos, und das Repository wurde am 17. September 2026 aktualisiert. Dagegen bringt es kein eigenes Modell mit, Cloud-Anbieter erhalten Ihre Einzelbilder, weder Mindestversion von Home Assistant noch Hardwareanforderung sind angegeben, und Genauigkeit und Geschwindigkeit sind ungetestet. Es eignet sich für Home-Assistant-Besitzer, die Ollama, Open WebUI oder LocalAI selbst betreiben können; wer Einzelbilder an einen Cloud-Anbieter schickt, sollte zuvor dessen Bedingungen lesen."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[Website von LLM Vision](https://llmvision.org) — Funktionen, Anbieter, Datenschutz und Installationshinweise, geprüft am 1. November 2026.",
          "[Seite zu Glimpse-v1](https://llmvision.org/glimpse/) — Modellbeschreibung und Verfügbarkeit, geprüft am 1. November 2026.",
          "[LLM Vision auf GitHub](https://github.com/valentinfrlch/ha-llmvision) — README, Lizenz, Manifest und Commits, geprüft am 1. November 2026.",
          "[GitHub-Release v1.7.2](https://github.com/valentinfrlch/ha-llmvision/releases/tag/v1.7.2) — Release vom 3. September 2026, geprüft am 1. November 2026.",
          "[Datenschutzerklärung](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md) — Telemetrie und Datenverarbeitung, gültig ab 15. Februar 2026, geprüft am 1. November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[Home Assistant Assist Rezension](/de/power-local-llm/home-assistant-assist-review) — der in Home Assistant eingebaute Sprachassistent mit Ollama- und OpenAI-Agenten.",
          "[Ollama Rezension](/de/power-local-llm/ollama-review) — der lokale Modell-Runner, den LLM Vision als Anbieter nutzen kann.",
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
    "theme": "Voice, Speech & Multimodal",
    "heroImage": "/images/llm-vision-review-hero-es.webp",
    "title": "Reseña de LLM Vision: análisis de cámaras para Home Assistant con LLM de visión",
    "seoTitle": "Reseña de LLM Vision: cámaras con IA en Home Assistant",
    "intro": "LLM Vision es una integración gratuita de Home Assistant que envía imágenes de cámara, clips de vídeo y eventos de Frigate a un modelo de lenguaje multimodal y devuelve una descripción en texto que pueden usar las notificaciones, las automatizaciones y una línea de tiempo de eventos. No hace ningún trabajo de IA por sí misma: conectas un proveedor, ya sea Ollama, Open WebUI o LocalAI en tu propio hardware, o un servicio en la nube. El desarrollador es Valentin Fröhlich. Esta reseña se basa en el [sitio web](https://llmvision.org), el [repositorio de GitHub](https://github.com/valentinfrlch/ha-llmvision) con sus versiones y su archivo de privacidad, y la página del sitio sobre el modelo Glimpse, consultados el 1 de noviembre de 2026; PromptQuorum no ha probado la integración en la práctica.",
    "metaDescription": "Reseña de LLM Vision: integración gratuita de Home Assistant que describe imágenes de cámara y eventos de Frigate con un LLM de visión, local o en la nube.",
    "twitterDescription": "Reseña de LLM Vision: análisis de cámaras en Home Assistant con el LLM de visión que elijas, desde Ollama en tu hardware hasta API en la nube. Qué confirman las fuentes y qué dejan abierto.",
    "audience": "Usuarios de Home Assistant con cámaras o Frigate que quieren saber qué hace LLM Vision, qué proveedores de IA necesita, adónde van las imágenes y qué afirmaciones dejan abiertas las fuentes.",
    "readTime": "6 min de lectura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "reseña LLM Vision",
    "targetKeywords": [
      "reseña llm vision",
      "llm vision home assistant",
      "home assistant cámara ia",
      "home assistant ollama visión",
      "integración frigate llm",
      "llm de visión local cámara de seguridad",
      "llmvision hacs"
    ],
    "current_models_mentioned": [
      "Glimpse-v1"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**LLM Vision (versión 1.7.2, publicada el 3 de septiembre de 2026) es una integración gratuita de Home Assistant con licencia Apache-2.0 que permite a un modelo de lenguaje con visión describir imágenes de cámara, vídeos, transmisiones en directo y eventos de Frigate.** Se entrega sin modelo: el análisis se ejecuta en el proveedor que configures. Todas las afirmaciones proceden del sitio del desarrollador, su repositorio de GitHub y su archivo de privacidad.",
    "quickAnswerTop": {
      "es": {
        "question": "¿Las imágenes de cámara se quedan en mi red con LLM Vision?",
        "answer": "Solo si eliges un proveedor local. La integración envía fotogramas al proveedor que configures: con Ollama, Open WebUI o LocalAI en tu propio hardware se quedan contigo; con un proveedor en la nube van a los servidores de esa empresa. Según el archivo de privacidad, la integración en sí no tiene telemetría.",
        "bullets": [
          "Cuatro acciones cubren las entradas: Images, Videos, Streams y Data, que actualiza una entidad de Home Assistant a partir de una imagen.",
          "Un reductor de resolución integrado baja el tamaño de la imagen para reducir el consumo de tokens y el coste.",
          "Los resultados pueden aparecer en el panel mediante una Timeline Card y una Preview Card."
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
        "label": "¿Qué es LLM Vision?",
        "anchor": "what-is-llm-vision"
      },
      {
        "label": "Dónde conseguirlo",
        "anchor": "get-it"
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
            "text": "LLM Vision es una integración de Home Assistant que permite a un LLM de visión describir imágenes de cámara, vídeo y eventos de Frigate, con el modelo aportado por un proveedor local o en la nube que elijas."
          },
          {
            "type": "plain-terms",
            "text": "Tu cámara o Frigate entrega una imagen a un modelo de IA que configuras por separado, y la respuesta vuelve como texto que Home Assistant puede mostrar, guardar o usar para actuar."
          }
        ],
        "items": [
          "Mantenimiento: la versión 1.7.2 se publicó el 3 de septiembre de 2026 y el repositorio se actualizó por última vez el 17 de septiembre de 2026 con un blueprint beta para la 1.8.0, así que no corresponde ningún aviso de proyecto abandonado.",
          "Coste: la integración es gratuita; los proveedores en la nube cobran por consulta.",
          "IA: no incluye ningún modelo, conectas el proveedor que prefieras.",
          "Privacidad: el archivo de privacidad indica que la integración no contiene telemetría; adónde van las imágenes depende de tu proveedor, consulta Flujo de datos y privacidad.",
          "Desarrollador: una persona a título individual, Valentin Fröhlich, que afirma que el proyecto no está respaldado por ninguno de los proveedores citados ni asociado a ellos."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta reseña se basa en llmvision.org, el repositorio de GitHub y su archivo de privacidad, consultados el 1 de noviembre de 2026. PromptQuorum no ha instalado, ejecutado ni medido la integración, así que no se evalúan la velocidad, la precisión de detección ni la calidad de las descripciones."
          }
        ]
      },
      "overview": {
        "id": "what-is-llm-vision",
        "title": "¿Qué es LLM Vision?",
        "content": [
          "**LLM Vision es una integración personalizada de Home Assistant que pasa a un modelo de lenguaje multimodal imágenes de cámaras, entidades de imagen, archivos de vídeo y eventos de Frigate.** El sitio la presenta como «Visual Intelligence for your Home» y el repositorio de GitHub se creó el 14 de mayo de 2024.",
          "Es un complemento para una instalación domótica existente, no una aplicación independiente: necesitas un Home Assistant en funcionamiento, la tienda comunitaria HACS y un proveedor de IA. El desarrollador es Valentin Fröhlich, citado en la línea de copyright del sitio; el repositorio indica un segundo responsable del código en GitHub."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Dónde conseguirlo",
        "content": [
          "**LLM Vision se instala desde HACS dentro de Home Assistant; no hay descarga aparte, aplicación de tienda ni instalador.**"
        ],
        "columns": [
          "Opción",
          "Cómo conseguirlo"
        ],
        "rows": [
          {
            "Opción": "Instalación",
            "Cómo conseguirlo": "[LLM Vision en GitHub](https://github.com/valentinfrlch/ha-llmvision), añadido con HACS"
          },
          {
            "Opción": "Configuración",
            "Cómo conseguirlo": "Añadir en Dispositivos y servicios, preparar la carpeta /media para capturas y añadir un proveedor de IA"
          },
          {
            "Opción": "Proveedores locales",
            "Cómo conseguirlo": "Ollama, Open WebUI o LocalAI en tu propio hardware"
          },
          {
            "Opción": "Proveedores en la nube",
            "Cómo conseguirlo": "OpenAI, Anthropic, Google, OpenRouter, AWS, Groq o Azure AI, facturados por consulta por el proveedor"
          },
          {
            "Opción": "Precio",
            "Cómo conseguirlo": "La integración es gratuita; las donaciones con Buy Me a Coffee son opcionales"
          },
          {
            "Opción": "Documentación",
            "Cómo conseguirlo": "[Guía de inicio](https://llm-vision.gitbook.io/getting-started)"
          },
          {
            "Opción": "Sitio web",
            "Cómo conseguirlo": "[llmvision.org](https://llmvision.org)"
          },
          {
            "Opción": "Política de privacidad",
            "Cómo conseguirlo": "[PRIVACY.md en GitHub](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md)"
          },
          {
            "Opción": "Código fuente",
            "Cómo conseguirlo": "[Licencia Apache-2.0 en GitHub](https://github.com/valentinfrlch/ha-llmvision)"
          }
        ],
        "note": "Versión revisada: 1.7.2 (3 de septiembre de 2026, GitHub). El manifiesto de la integración en el repositorio sigue indicando 1.7.1 y el sitio web v1.7.0, así que ambos van por detrás de la versión publicada. El repositorio no indica una versión mínima de Home Assistant, y quienes usan Home Assistant Container quizá tengan que montar la carpeta /media."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Cómo empezar",
        "content": [
          "**Los pasos siguen el README del desarrollador; PromptQuorum no los ha ejecutado.**"
        ],
        "numberedItems": [
          {
            "title": "Instalar la integración",
            "whyItMatters": "Instala LLM Vision desde HACS y reinicia Home Assistant."
          },
          {
            "title": "Añadirla a Home Assistant",
            "whyItMatters": "Busca LLM Vision en Dispositivos y servicios y confirma con los ajustes predeterminados."
          },
          {
            "title": "Preparar la carpeta multimedia",
            "whyItMatters": "Las capturas se guardan en /media; quienes usan Home Assistant Container quizá tengan que montarla."
          },
          {
            "title": "Añadir un proveedor de IA",
            "whyItMatters": "Vuelve a la página de la integración y añade una entrada para tu proveedor, por ejemplo Ollama en tu propio servidor o una clave de API en la nube."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones confirmadas por las fuentes",
        "content": [
          "**Cada elemento procede del sitio o del repositorio del desarrollador; ninguno se ha probado de forma independiente.**"
        ],
        "items": [
          "**Cuatro acciones.** Images analiza cámaras, entidades de imagen o archivos; Videos extrae fotogramas de un archivo de vídeo o de un evento de Frigate; Streams captura fotogramas de entidades de cámara; Data analiza una imagen y actualiza un ayudante numérico, de texto, de selección o booleano.",
          "**Notificaciones.** Las transmisiones de cámara y los eventos de Frigate se analizan casi en tiempo real, y los resultados pueden alimentar notificaciones y automatizaciones.",
          "**Línea de tiempo y memoria.** Los eventos solo se guardan si «remember» está activado; con «important» se clasifican y solo se conservan si se consideran importantes, y aparecen como entidades de calendario. Recordar eventos requiere un agente de conversación como Extended OpenAI Conversation.",
          "**Canalización de imágenes.** Según el sitio, elige los fotogramas relevantes y los optimiza para la inferencia, y un reductor de resolución disminuye el tamaño y el consumo de tokens.",
          "**Glimpse-v1.** El modelo abierto de visión y lenguaje del desarrollador, de 4000 millones de parámetros, para resumir eventos de seguridad del hogar, en beta, en [Hugging Face y la biblioteca de Ollama](https://llmvision.org/glimpse/) (`ollama run llmvision/glimpse-v1`).",
          "**Idiomas.** Inglés, alemán, neerlandés, francés, español, portugués, italiano, polaco y sueco, con más idiomas añadidos con el tiempo."
        ],
        "note": "No se probaron la precisión de detección, la latencia ni la calidad de las descripciones."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flujo de datos y privacidad",
        "content": [
          "**La integración envía las imágenes solo al proveedor que configures, así que su destino depende por completo de esa elección.** Con Ollama, Open WebUI o LocalAI en tu propio hardware, el análisis se queda contigo; con OpenAI, Anthropic, Google, OpenRouter, AWS, Groq o Azure AI, los fotogramas viajan a los servidores de esa empresa y quedan sujetos a sus condiciones.",
          "El archivo de privacidad (vigente desde el 15 de febrero de 2026) dice que la integración de Home Assistant no contiene telemetría: el desarrollador no recibe datos de uso, no ve qué proveedores configuras y no tiene acceso a tus datos de Home Assistant. No hacen falta cuentas, y solo el sitio web usa Google Analytics. El sitio añade que los eventos analizados nunca salen de tu instancia de Home Assistant, mientras que el manifiesto de la integración la clasifica como cloud polling."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Son declaraciones del desarrollador, no resultados de una auditoría, y PromptQuorum no ha inspeccionado el tráfico de red. La afirmación del sitio sobre los eventos se refiere a los eventos almacenados, no a las llamadas a un proveedor."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quién es",
        "items": [
          "**Usuarios de Home Assistant con cámaras** que quieren una descripción en texto de un evento del timbre o del acceso en la notificación.",
          "**Usuarios de Frigate** que quieren eventos resumidos y consultables en una línea de tiempo.",
          "**Quienes operan Ollama, Open WebUI o LocalAI** y quieren analizar los fotogramas en su propio hardware."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Rendimiento.** La precisión de detección, la latencia, los requisitos de hardware y el coste por consulta no se han probado, y el sitio no indica ningún requisito de hardware.",
          "**Funcionamiento totalmente local.** Ni el sitio ni el README describen una configuración local de extremo a extremo; citan Ollama, Open WebUI y LocalAI como proveedores y recomiendan un proveedor local para la máxima privacidad.",
          "**Versión de Home Assistant.** El repositorio no indica una versión mínima.",
          "**Licencia de Glimpse-v1.** El sitio no nombra ninguna licencia para el modelo y no da cifras de hardware."
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
            "Plataformas": "Linux, web, iPhone, Android",
            "Precio / licencia": "Gratis / Apache-2.0",
            "Diferencia clave": "Asistente de voz integrado; agentes LLM con Ollama u OpenAI"
          },
          {
            "App": "[Ollama](/es/power-local-llm/ollama-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "Ejecutor local de modelos que LLM Vision puede usar como proveedor"
          }
        ],
        "note": "Comprueba el precio, la licencia y las plataformas actuales de cada app en su propia página antes de decidir."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿Puedo usar un proveedor que no está en la lista?",
            "a": "Según el sitio, también pueden usarse proveedores con un punto de acceso de API compatible con OpenAI, quizá con una configuración adicional."
          },
          {
            "q": "¿Hay una versión de pago o una suscripción?",
            "a": "No figura ninguna; el sitio solo muestra un enlace de donación opcional de Buy Me a Coffee, y la integración en sí es gratuita."
          },
          {
            "q": "¿Dónde obtengo ayuda o informo de un error?",
            "a": "El sitio enlaza GitHub Discussions, un servidor de Discord y un hilo de la comunidad de Home Assistant, e indica [hello@llmvision.org](mailto:hello@llmvision.org) como contacto. Su enlace «Report a bug» apunta al repositorio aparte de la tarjeta del panel, no al principal."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "LLM Vision convierte en texto las imágenes de cámara, los vídeos y los eventos de Frigate de Home Assistant mediante un modelo de visión que tú eliges, es gratuito bajo Apache-2.0 y su repositorio se actualizó el 17 de septiembre de 2026. En contra, no trae un modelo propio, los proveedores en la nube reciben tus fotogramas, no se indica ni una versión mínima de Home Assistant ni un requisito de hardware, y la precisión y la velocidad no se han probado. Encaja con propietarios de Home Assistant que puedan ejecutar Ollama, Open WebUI o LocalAI por su cuenta; quien envíe fotogramas a un proveedor en la nube debería leer antes las condiciones de ese proveedor."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Sitio web de LLM Vision](https://llmvision.org) — funciones, proveedores, privacidad y notas de instalación, consultado el 1 de noviembre de 2026.",
          "[Página de Glimpse-v1](https://llmvision.org/glimpse/) — descripción del modelo y disponibilidad, consultada el 1 de noviembre de 2026.",
          "[LLM Vision en GitHub](https://github.com/valentinfrlch/ha-llmvision) — README, licencia, manifiesto y commits, consultados el 1 de noviembre de 2026.",
          "[Versión v1.7.2 en GitHub](https://github.com/valentinfrlch/ha-llmvision/releases/tag/v1.7.2) — versión del 3 de septiembre de 2026, consultada el 1 de noviembre de 2026.",
          "[Política de privacidad](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md) — telemetría y tratamiento de datos, vigente desde el 15 de febrero de 2026, consultada el 1 de noviembre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Reseña de Home Assistant Assist](/es/power-local-llm/home-assistant-assist-review) — el asistente de voz integrado en Home Assistant, con agentes de Ollama y OpenAI.",
          "[Reseña de Ollama](/es/power-local-llm/ollama-review) — el ejecutor local de modelos que LLM Vision puede usar como proveedor.",
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
    "theme": "Voice, Speech & Multimodal",
    "heroImage": "/images/llm-vision-review-hero-fr.webp",
    "title": "Test de LLM Vision : analyse des caméras pour Home Assistant avec des LLM de vision",
    "seoTitle": "Test de LLM Vision : analyse caméra pour Home Assistant",
    "intro": "LLM Vision est une intégration gratuite pour Home Assistant qui envoie des images de caméra, des clips vidéo et des événements Frigate à un modèle de langage multimodal et renvoie une description textuelle que les notifications, les automatisations et une chronologie d’événements peuvent exploiter. Elle ne fait elle-même aucun travail d’IA : vous connectez un fournisseur, soit Ollama, Open WebUI ou LocalAI sur votre propre matériel, soit un service cloud. Le développeur est Valentin Fröhlich. Ce test s’appuie sur le [site web](https://llmvision.org), le [dépôt GitHub](https://github.com/valentinfrlch/ha-llmvision) avec ses versions et son fichier de confidentialité, ainsi que la page du site consacrée au modèle Glimpse, consultés le 1er novembre 2026 ; PromptQuorum n’a pas testé l’intégration en conditions réelles.",
    "metaDescription": "Test de LLM Vision : intégration gratuite pour Home Assistant qui décrit images de caméra et événements Frigate avec un LLM de vision, en local ou cloud.",
    "twitterDescription": "Test de LLM Vision : analyse des caméras pour Home Assistant avec un LLM de vision de votre choix, d’Ollama sur votre matériel aux API cloud. Ce que confirment les sources et ce qui reste ouvert.",
    "audience": "Utilisateurs de Home Assistant dotés de caméras ou de Frigate qui veulent savoir ce que fait LLM Vision, quels fournisseurs d’IA il exige, où partent les images et quelles affirmations les sources laissent ouvertes.",
    "readTime": "6 min de lecture",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "test LLM Vision",
    "targetKeywords": [
      "test llm vision",
      "llm vision home assistant",
      "home assistant caméra ia",
      "home assistant ollama vision",
      "intégration frigate llm",
      "llm de vision local caméra de surveillance",
      "llmvision hacs"
    ],
    "current_models_mentioned": [
      "Glimpse-v1"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**LLM Vision (version 1.7.2, publiée le 3 septembre 2026) est une intégration gratuite pour Home Assistant, sous licence Apache-2.0, qui permet à un modèle de langage doté de vision de décrire des images de caméra, des vidéos, des flux en direct et des événements Frigate.** Elle est livrée sans modèle : l’analyse s’exécute chez le fournisseur que vous configurez. Chaque affirmation ci-dessous provient du site du développeur, de son dépôt GitHub et de son fichier de confidentialité.",
    "quickAnswerTop": {
      "fr": {
        "question": "Les images de caméra restent-elles sur mon réseau avec LLM Vision ?",
        "answer": "Seulement si vous choisissez un fournisseur local. L’intégration envoie des images au fournisseur que vous configurez : avec Ollama, Open WebUI ou LocalAI sur votre propre matériel, elles restent chez vous ; avec un fournisseur cloud, elles partent vers les serveurs de cette société. Selon le fichier de confidentialité, l’intégration elle-même n’a aucune télémétrie.",
        "bullets": [
          "Quatre actions couvrent les entrées : Images, Videos, Streams et Data, qui met à jour une entité Home Assistant à partir d’une image.",
          "Un réducteur de résolution intégré diminue la taille des images pour limiter la consommation de jetons et le coût.",
          "Les résultats peuvent s’afficher sur le tableau de bord via une Timeline Card et une Preview Card."
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
        "label": "Qu’est-ce que LLM Vision ?",
        "anchor": "what-is-llm-vision"
      },
      {
        "label": "Où l’obtenir",
        "anchor": "get-it"
      },
      {
        "label": "Pour démarrer",
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
        "label": "À qui s’adresse-t-il",
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
            "text": "LLM Vision est une intégration Home Assistant qui permet à un LLM de vision de décrire images de caméra, vidéos et événements Frigate, le modèle étant fourni par un fournisseur local ou cloud de votre choix."
          },
          {
            "type": "plain-terms",
            "text": "Votre caméra ou Frigate transmet une image à un modèle d’IA que vous installez séparément, et la réponse revient sous forme de texte que Home Assistant peut afficher, enregistrer ou utiliser pour agir."
          }
        ],
        "items": [
          "Maintenance : la version 1.7.2 est sortie le 3 septembre 2026 et le dépôt a été mis à jour pour la dernière fois le 17 septembre 2026 avec un blueprint bêta pour la 1.8.0 ; aucun avertissement de projet abandonné ne s’applique.",
          "Coût : l’intégration est gratuite ; les fournisseurs cloud facturent à la requête.",
          "IA : aucun modèle n’est fourni, vous connectez le fournisseur de votre choix.",
          "Confidentialité : le fichier de confidentialité indique que l’intégration ne contient aucune télémétrie ; la destination des images dépend de votre fournisseur, voir Flux de données et confidentialité.",
          "Développeur : un développeur individuel, Valentin Fröhlich, qui précise que le projet n’est ni approuvé par les fournisseurs cités ni associé à eux."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce test s’appuie sur llmvision.org, le dépôt GitHub et son fichier de confidentialité, consultés le 1er novembre 2026. PromptQuorum n’a ni installé, ni exécuté, ni mesuré l’intégration ; la vitesse, la précision de détection et la qualité des descriptions ne sont donc pas évaluées."
          }
        ]
      },
      "overview": {
        "id": "what-is-llm-vision",
        "title": "Qu’est-ce que LLM Vision ?",
        "content": [
          "**LLM Vision est une intégration personnalisée pour Home Assistant qui transmet à un modèle de langage multimodal les images de caméras, d’entités image, de fichiers vidéo et d’événements Frigate.** Le site la présente comme « Visual Intelligence for your Home » et le dépôt GitHub a été créé le 14 mai 2024.",
          "C’est un complément pour une installation domotique existante, pas une application autonome : il faut un Home Assistant en fonctionnement, la boutique communautaire HACS et un fournisseur d’IA. Le développeur est Valentin Fröhlich, cité dans la mention de copyright du site ; le dépôt indique un second propriétaire du code sur GitHub."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Où l’obtenir",
        "content": [
          "**LLM Vision s’installe depuis HACS dans Home Assistant ; il n’existe ni téléchargement séparé, ni application de boutique, ni installateur.**"
        ],
        "columns": [
          "Option",
          "Comment l’obtenir"
        ],
        "rows": [
          {
            "Option": "Installation",
            "Comment l’obtenir": "[LLM Vision sur GitHub](https://github.com/valentinfrlch/ha-llmvision), ajouté via HACS"
          },
          {
            "Option": "Configuration",
            "Comment l’obtenir": "Ajouter sous Appareils et services, préparer /media pour les instantanés, puis ajouter un fournisseur d’IA"
          },
          {
            "Option": "Fournisseurs locaux",
            "Comment l’obtenir": "Ollama, Open WebUI ou LocalAI sur votre propre matériel"
          },
          {
            "Option": "Fournisseurs cloud",
            "Comment l’obtenir": "OpenAI, Anthropic, Google, OpenRouter, AWS, Groq ou Azure AI, facturés à la requête par le fournisseur"
          },
          {
            "Option": "Prix",
            "Comment l’obtenir": "L’intégration est gratuite ; les dons via Buy Me a Coffee sont facultatifs"
          },
          {
            "Option": "Documentation",
            "Comment l’obtenir": "[Guide de démarrage](https://llm-vision.gitbook.io/getting-started)"
          },
          {
            "Option": "Site web",
            "Comment l’obtenir": "[llmvision.org](https://llmvision.org)"
          },
          {
            "Option": "Politique de confidentialité",
            "Comment l’obtenir": "[PRIVACY.md sur GitHub](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md)"
          },
          {
            "Option": "Code source",
            "Comment l’obtenir": "[Licence Apache-2.0 sur GitHub](https://github.com/valentinfrlch/ha-llmvision)"
          }
        ],
        "note": "Version testée : 1.7.2 (3 septembre 2026, GitHub). Le manifeste de l’intégration dans le dépôt indique encore 1.7.1 et le site v1.7.0 : tous deux sont en retard sur la version publiée. Le dépôt n’indique aucune version minimale de Home Assistant, et les utilisateurs de Home Assistant Container devront peut-être monter le dossier /media."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Pour démarrer",
        "content": [
          "**Les étapes suivent le README du développeur ; PromptQuorum ne les a pas exécutées.**"
        ],
        "numberedItems": [
          {
            "title": "Installer l’intégration",
            "whyItMatters": "Installez LLM Vision depuis HACS et redémarrez Home Assistant."
          },
          {
            "title": "L’ajouter à Home Assistant",
            "whyItMatters": "Recherchez LLM Vision sous Appareils et services et validez avec les paramètres par défaut."
          },
          {
            "title": "Préparer le dossier média",
            "whyItMatters": "Les instantanés sont stockés dans /media ; les utilisateurs de Home Assistant Container devront peut-être le monter."
          },
          {
            "title": "Ajouter un fournisseur d’IA",
            "whyItMatters": "Revenez à la page de l’intégration et ajoutez une entrée pour votre fournisseur, par exemple Ollama sur votre propre serveur ou une clé d’API cloud."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions confirmées par les sources",
        "content": [
          "**Chaque élément ci-dessous provient du site ou du dépôt du développeur ; aucun n’a été testé de façon indépendante.**"
        ],
        "items": [
          "**Quatre actions.** Images analyse des caméras, des entités image ou des fichiers ; Videos extrait des images d’un fichier vidéo ou d’un événement Frigate ; Streams capture des images depuis des entités caméra ; Data analyse une image et met à jour une aide de type nombre, texte, sélection ou booléen.",
          "**Notifications.** Les flux de caméra et les événements Frigate sont analysés quasiment en temps réel, et les résultats peuvent alimenter notifications et automatisations.",
          "**Chronologie et mémoire.** Les événements ne sont enregistrés que si « remember » est activé ; avec « important », ils sont classés et conservés seulement s’ils sont jugés importants, puis apparaissent comme entités de calendrier. La mémorisation des événements nécessite un agent conversationnel tel qu’Extended OpenAI Conversation.",
          "**Pipeline d’images.** Selon le site, il choisit les images pertinentes et les optimise pour l’inférence, et un réducteur de résolution diminue la taille et la consommation de jetons.",
          "**Glimpse-v1.** Le modèle de vision et de langage ouvert du développeur, de 4 milliards de paramètres, pour résumer les événements de sécurité à domicile, en bêta, sur [Hugging Face et la bibliothèque Ollama](https://llmvision.org/glimpse/) (`ollama run llmvision/glimpse-v1`).",
          "**Langues.** Anglais, allemand, néerlandais, français, espagnol, portugais, italien, polonais et suédois, d’autres s’ajoutant au fil du temps."
        ],
        "note": "La précision de détection, la latence et la qualité des descriptions n’ont pas été testées."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flux de données et confidentialité",
        "content": [
          "**L’intégration n’envoie les images qu’au fournisseur que vous configurez ; leur destination dépend donc entièrement de ce choix.** Avec Ollama, Open WebUI ou LocalAI sur votre propre matériel, l’analyse reste chez vous ; avec OpenAI, Anthropic, Google, OpenRouter, AWS, Groq ou Azure AI, les images partent vers les serveurs de cette société et relèvent de ses conditions.",
          "Le fichier de confidentialité (en vigueur depuis le 15 février 2026) indique que l’intégration Home Assistant ne contient aucune télémétrie : le développeur ne reçoit aucune donnée d’usage, ne voit pas quels fournisseurs vous configurez et n’a pas accès à vos données Home Assistant. Aucun compte n’est requis, et seul le site utilise Google Analytics. Le site ajoute que les événements analysés ne quittent jamais votre instance Home Assistant, alors que le manifeste de l’intégration la classe en cloud polling."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Il s’agit de déclarations du développeur, pas de résultats d’audit, et PromptQuorum n’a pas inspecté le trafic réseau. L’affirmation du site sur les événements concerne les événements enregistrés, pas les appels adressés à un fournisseur."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui s’adresse-t-il",
        "items": [
          "**Les utilisateurs de Home Assistant dotés de caméras** qui veulent une description textuelle d’un événement de sonnette ou d’allée dans la notification.",
          "**Les utilisateurs de Frigate** qui souhaitent des événements résumés et consultables dans une chronologie.",
          "**Les exploitants d’Ollama, d’Open WebUI ou de LocalAI** qui veulent analyser les images sur leur propre matériel."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n’avons pas pu vérifier",
        "items": [
          "**Performances.** La précision de détection, la latence, les besoins matériels et le coût par requête ne sont pas testés, et le site n’indique aucune exigence matérielle.",
          "**Fonctionnement entièrement local.** Ni le site ni le README ne décrivent une installation locale de bout en bout ; ils citent Ollama, Open WebUI et LocalAI comme fournisseurs et recommandent un fournisseur local pour la meilleure confidentialité.",
          "**Version de Home Assistant.** Le dépôt n’indique aucune version minimale.",
          "**Licence de Glimpse-v1.** Le site ne nomme aucune licence pour le modèle et ne donne aucune indication matérielle."
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
            "Application": "[Home Assistant Assist](/fr/power-local-llm/home-assistant-assist-review)",
            "Plateformes": "Linux, web, iPhone, Android",
            "Prix / licence": "Gratuit / Apache-2.0",
            "Différence clé": "Assistant vocal intégré ; agents LLM via Ollama ou OpenAI"
          },
          {
            "Application": "[Ollama](/fr/power-local-llm/ollama-review)",
            "Plateformes": "Mac, Windows, Linux",
            "Prix / licence": "Gratuit / MIT",
            "Différence clé": "Exécuteur de modèles local que LLM Vision peut utiliser comme fournisseur"
          }
        ],
        "note": "Vérifiez le prix, la licence et les plateformes actuels de chaque application sur sa propre page avant de choisir."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "Puis-je utiliser un fournisseur absent de la liste ?",
            "a": "Selon le site, les fournisseurs dotés d’un point d’accès API compatible OpenAI peuvent aussi être utilisés, parfois avec une configuration supplémentaire."
          },
          {
            "q": "Existe-t-il une version payante ou un abonnement ?",
            "a": "Aucun n’est indiqué ; le site ne montre qu’un lien de don facultatif Buy Me a Coffee, et l’intégration elle-même est gratuite."
          },
          {
            "q": "Où obtenir de l’aide ou signaler un bogue ?",
            "a": "Le site renvoie vers GitHub Discussions, un serveur Discord et un fil de la communauté Home Assistant, et indique [hello@llmvision.org](mailto:hello@llmvision.org) comme contact. Son lien « Report a bug » mène au dépôt distinct de la carte de tableau de bord, pas au dépôt principal."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "LLM Vision transforme les images de caméra, les vidéos et les événements Frigate de Home Assistant en texte grâce à un modèle de vision de votre choix, il est gratuit sous Apache-2.0 et son dépôt a été mis à jour le 17 septembre 2026. En contrepartie, il n’apporte aucun modèle propre, les fournisseurs cloud reçoivent vos images, ni version minimale de Home Assistant ni exigence matérielle ne sont indiquées, et la précision comme la vitesse ne sont pas testées. Il convient aux propriétaires de Home Assistant capables d’exploiter eux-mêmes Ollama, Open WebUI ou LocalAI ; qui envoie des images à un fournisseur cloud doit d’abord lire les conditions de celui-ci."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Site web de LLM Vision](https://llmvision.org) — fonctions, fournisseurs, confidentialité et notes d’installation, consulté le 1er novembre 2026.",
          "[Page de Glimpse-v1](https://llmvision.org/glimpse/) — description du modèle et disponibilité, consultée le 1er novembre 2026.",
          "[LLM Vision sur GitHub](https://github.com/valentinfrlch/ha-llmvision) — README, licence, manifeste et commits, consultés le 1er novembre 2026.",
          "[Version GitHub v1.7.2](https://github.com/valentinfrlch/ha-llmvision/releases/tag/v1.7.2) — version du 3 septembre 2026, consultée le 1er novembre 2026.",
          "[Politique de confidentialité](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md) — télémétrie et traitement des données, en vigueur depuis le 15 février 2026, consultée le 1er novembre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lectures associées",
        "items": [
          "[Test de Home Assistant Assist](/fr/power-local-llm/home-assistant-assist-review) — l’assistant vocal intégré à Home Assistant, avec agents Ollama et OpenAI.",
          "[Test d’Ollama](/fr/power-local-llm/ollama-review) — l’exécuteur de modèles local que LLM Vision peut utiliser comme fournisseur.",
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
    "theme": "Voice, Speech & Multimodal",
    "heroImage": "/images/llm-vision-review-hero-ja.webp",
    "title": "LLM Visionレビュー：ビジョンLLMでHome Assistantのカメラを解析",
    "seoTitle": "LLM Visionレビュー：Home Assistantのカメラ解析",
    "intro": "LLM Visionは、カメラ画像・動画クリップ・Frigateイベントをマルチモーダル言語モデルに送り、通知・オートメーション・イベントタイムラインで使えるテキスト説明を返す、無料のHome Assistant連携です。AIの処理は自分では行わず、Ollama、Open WebUI、LocalAIを自分のハードウェアで動かすか、クラウドサービスを接続して利用します。開発者はValentin Fröhlich氏です。このレビューは、[公式サイト](https://llmvision.org)、リリースとプライバシーファイルを含む[GitHubリポジトリ](https://github.com/valentinfrlch/ha-llmvision)、サイト内のGlimpseモデルのページに基づき、2026年11月1日に確認した内容です。PromptQuorumは実機での動作テストを行っていません。",
    "metaDescription": "LLM Visionレビュー：カメラ画像・動画・Frigateイベントをビジョン対応LLMで説明する無料のHome Assistant連携。ローカルもクラウドも可、Apache-2.0。",
    "twitterDescription": "LLM Visionレビュー：自分のハードウェア上のOllamaからクラウドAPIまで、好みのビジョンLLMでHome Assistantのカメラを解析。出典で確認できたことと未確認の点。",
    "audience": "カメラやFrigateを使うHome Assistantユーザーで、LLM Visionの機能、必要なAIプロバイダー、画像の送信先、出典が確認していない点を知りたい方。",
    "readTime": "6分で読める",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "LLM Visionレビュー",
    "targetKeywords": [
      "llm vision レビュー",
      "llm vision home assistant",
      "home assistant カメラ ai",
      "home assistant ollama ビジョン",
      "frigate llm 連携",
      "ローカル ビジョン llm 防犯カメラ",
      "llmvision hacs"
    ],
    "current_models_mentioned": [
      "Glimpse-v1"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**LLM Vision（バージョン1.7.2、2026年9月3日公開）は、Apache-2.0ライセンスの無料Home Assistant連携で、画像対応の言語モデルにカメラ画像・動画・ライブストリーム・Frigateイベントを説明させます。** モデルは付属せず、解析は設定したプロバイダー側で行われます。以下の記述はすべて、開発者のサイト、GitHubリポジトリ、プライバシーファイルに基づきます。",
    "quickAnswerTop": {
      "ja": {
        "question": "LLM Visionを使うと、カメラ画像は自宅ネットワーク内にとどまりますか？",
        "answer": "ローカルのプロバイダーを選んだ場合のみです。連携は設定したプロバイダーにフレームを送ります。自分のハードウェア上のOllama、Open WebUI、LocalAIなら手元にとどまり、クラウドプロバイダーならその会社のサーバーに送られます。プライバシーファイルによると、連携自体にテレメトリはありません。",
        "bullets": [
          "入力は4つのアクションで扱います：Images、Videos、Streams、そして画像からHome Assistantのエンティティを更新するData。",
          "内蔵のダウンスケーラーが画像の解像度を下げ、トークン消費とコストを抑えます。",
          "結果はTimeline CardとPreview Cardでダッシュボードに表示できます。"
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
        "label": "LLM Visionとは",
        "anchor": "what-is-llm-vision"
      },
      {
        "label": "入手方法",
        "anchor": "get-it"
      },
      {
        "label": "使い始めるには",
        "anchor": "getting-started"
      },
      {
        "label": "出典で確認できた機能",
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
        "label": "結論",
        "anchor": "verdict"
      },
      {
        "label": "出典",
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
            "text": "LLM Visionは、ビジョンLLMにカメラ画像・動画・Frigateイベントを説明させるHome Assistant連携で、モデルは選んだローカルまたはクラウドのプロバイダーが提供します。"
          },
          {
            "type": "plain-terms",
            "text": "カメラやFrigateが画像を別途用意したAIモデルに渡し、返ってきたテキストをHome Assistantが表示・保存・自動化に利用します。"
          }
        ],
        "items": [
          "メンテナンス：バージョン1.7.2は2026年9月3日に公開され、リポジトリは2026年9月17日に1.8.0のベータ版ブループリントで更新されたため、放置プロジェクトの警告は該当しません。",
          "費用：連携は無料で、クラウドプロバイダーはクエリごとに課金します。",
          "AI：モデルは付属せず、好みのプロバイダーを接続します。",
          "プライバシー：プライバシーファイルは連携にテレメトリがないと述べています。画像の送信先はプロバイダー次第です（「データの流れとプライバシー」参照）。",
          "開発者：個人開発者のValentin Fröhlich氏で、掲載されたプロバイダーから推奨も提携も受けていないと明記しています。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "このレビューは、llmvision.org、GitHubリポジトリ、プライバシーファイルに基づき、2026年11月1日に確認した内容です。PromptQuorumは連携をインストール・実行・計測していないため、速度、検出精度、説明の質は評価していません。"
          }
        ]
      },
      "overview": {
        "id": "what-is-llm-vision",
        "title": "LLM Visionとは",
        "content": [
          "**LLM Visionは、カメラ、画像エンティティ、動画ファイル、Frigateイベントの画像をマルチモーダル言語モデルに渡す、Home Assistant用のカスタム連携です。** サイトは「Visual Intelligence for your Home」と紹介しており、GitHubリポジトリは2024年5月14日に作成されました。",
          "既存のスマートホーム環境への追加機能であり、単独のアプリではありません。動作中のHome Assistant、コミュニティストアのHACS、AIプロバイダーが必要です。開発者はサイトの著作権表示にあるValentin Fröhlich氏で、リポジトリにはGitHub上のもう1人のコード所有者が記載されています。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "入手方法",
        "content": [
          "**LLM VisionはHome Assistant内のHACSからインストールします。別途のダウンロード、ストアアプリ、インストーラーはありません。**"
        ],
        "columns": [
          "項目",
          "入手方法"
        ],
        "rows": [
          {
            "項目": "インストール",
            "入手方法": "[GitHubのLLM Vision](https://github.com/valentinfrlch/ha-llmvision)をHACS経由で追加し、Home Assistantを再起動"
          },
          {
            "項目": "セットアップ",
            "入手方法": "デバイスとサービスで追加し、スナップショット用の/mediaフォルダーを用意して、AIプロバイダーを追加"
          },
          {
            "項目": "ローカルのプロバイダー",
            "入手方法": "自分のハードウェア上のOllama、Open WebUI、LocalAI"
          },
          {
            "項目": "クラウドのプロバイダー",
            "入手方法": "OpenAI、Anthropic、Google、OpenRouter、AWS、Groq、Azure AI（クエリごとにプロバイダーが課金）"
          },
          {
            "項目": "価格",
            "入手方法": "連携は無料。Buy Me a Coffeeでの寄付は任意"
          },
          {
            "項目": "ドキュメント",
            "入手方法": "[はじめにガイド](https://llm-vision.gitbook.io/getting-started)"
          },
          {
            "項目": "公式サイト",
            "入手方法": "[llmvision.org](https://llmvision.org)"
          },
          {
            "項目": "プライバシーポリシー",
            "入手方法": "[GitHubのPRIVACY.md](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md)"
          },
          {
            "項目": "ソースコード",
            "入手方法": "[GitHubのApache-2.0ライセンス](https://github.com/valentinfrlch/ha-llmvision)"
          }
        ],
        "note": "確認したバージョン：1.7.2（2026年9月3日、GitHub）。リポジトリ内の連携マニフェストはまだ1.7.1、サイトはv1.7.0と記載しており、どちらもリリースより遅れています。リポジトリには対応するHome Assistantの最小バージョンの記載がなく、Home Assistant Containerでは/mediaフォルダーのマウントが必要な場合があります。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "使い始めるには",
        "content": [
          "**手順は開発者のREADMEに基づくもので、PromptQuorumは実行していません。**"
        ],
        "numberedItems": [
          {
            "title": "連携をインストール",
            "whyItMatters": "HACSからLLM Visionをインストールし、Home Assistantを再起動します。"
          },
          {
            "title": "Home Assistantに追加",
            "whyItMatters": "デバイスとサービスでLLM Visionを検索し、デフォルト設定のまま送信します。"
          },
          {
            "title": "メディアフォルダーを用意",
            "whyItMatters": "スナップショットは/mediaに保存されます。Home Assistant Containerではマウントが必要な場合があります。"
          },
          {
            "title": "AIプロバイダーを追加",
            "whyItMatters": "連携のページに戻り、自分のサーバー上のOllamaやクラウドのAPIキーなど、プロバイダーのエントリーを追加します。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "出典で確認できた機能",
        "content": [
          "**以下はすべて開発者のサイトまたはリポジトリに基づく内容で、独自のテストは行っていません。**"
        ],
        "items": [
          "**4つのアクション。** Imagesはカメラ、画像エンティティ、ファイルを解析し、Videosは動画ファイルやFrigateイベントからフレームを抽出し、Streamsはカメラエンティティからフレームを取得し、Dataは画像を解析して数値・テキスト・選択・真偽値のヘルパーを更新します。",
          "**通知。** カメラ映像とFrigateイベントをほぼリアルタイムで解析し、結果を通知やオートメーションに利用できます。",
          "**タイムラインとメモリー。** イベントは「remember」がオンのときだけ保存されます。「important」を使うと分類され、重要と判断されたものだけが残り、カレンダーエンティティとして表示されます。イベントの記憶にはExtended OpenAI Conversationなどの会話エージェントが必要です。",
          "**画像パイプライン。** サイトによれば、関連するフレームを選んで推論向けに最適化し、ダウンスケーラーが解像度とトークン消費を減らします。",
          "**Glimpse-v1。** 開発者が公開する、家庭の防犯イベントを要約するための40億パラメーターのオープンなビジョン言語モデル（ベータ版）で、[Hugging FaceとOllamaライブラリ](https://llmvision.org/glimpse/)で入手できます（`ollama run llmvision/glimpse-v1`）。",
          "**言語。** 英語、ドイツ語、オランダ語、フランス語、スペイン語、ポルトガル語、イタリア語、ポーランド語、スウェーデン語に対応し、今後も追加されます。"
        ],
        "note": "検出精度、遅延、説明の質はテストしていません。"
      },
      "privacy": {
        "id": "privacy",
        "title": "データの流れとプライバシー",
        "content": [
          "**連携は設定したプロバイダーにのみ画像を送るため、画像の行き先はその選択で決まります。** 自分のハードウェア上のOllama、Open WebUI、LocalAIなら解析は手元で完結し、OpenAI、Anthropic、Google、OpenRouter、AWS、Groq、Azure AIではフレームがその会社のサーバーに送られ、その会社の規約が適用されます。",
          "プライバシーファイル（2026年2月15日施行）は、Home Assistant連携にテレメトリがなく、開発者は利用データを受け取らず、設定したプロバイダーも見えず、Home Assistantのデータにもアクセスできないと述べています。アカウントは不要で、Google Analyticsを使うのはサイトだけです。サイトは、解析したイベントがHome Assistantのインスタンスの外に出ることはないとも述べていますが、連携のマニフェストはcloud pollingに分類しています。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "これらは開発者による申告であり、監査結果ではありません。PromptQuorumはネットワーク通信を検査していません。サイトのイベントに関する記述は保存されたイベントを指し、プロバイダーへの呼び出しを指すものではありません。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "向いている人",
        "items": [
          "**カメラを使うHome Assistantユーザー**：玄関チャイムや車寄せのイベントを、通知でテキスト説明として受け取りたい方。",
          "**Frigateユーザー**：イベントを要約し、タイムラインで検索したい方。",
          "**Ollama、Open WebUI、LocalAIの運用者**：フレームを自分のハードウェアで解析したい方。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかった点",
        "items": [
          "**性能。** 検出精度、遅延、必要なハードウェア、クエリあたりの費用は未検証で、サイトにもハードウェア要件の記載はありません。",
          "**完全ローカル動作。** サイトにもREADMEにもエンドツーエンドのローカル構成の説明はなく、Ollama、Open WebUI、LocalAIをプロバイダーとして挙げ、最も安心できる構成にはローカルのプロバイダーを勧めています。",
          "**Home Assistantのバージョン。** リポジトリに最小バージョンの記載はありません。",
          "**Glimpse-v1のライセンス。** サイトはモデルのライセンスを明示しておらず、ハードウェアの数値も示していません。"
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
            "対応環境": "Linux、Web、iPhone、Android",
            "価格／ライセンス": "無料／Apache-2.0",
            "主な違い": "内蔵の音声アシスタント。OllamaやOpenAI経由のLLMエージェント"
          },
          {
            "アプリ": "[Ollama](/ja/power-local-llm/ollama-review)",
            "対応環境": "Mac、Windows、Linux",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "LLM Visionがプロバイダーとして使えるローカルのモデル実行環境"
          }
        ],
        "note": "選ぶ前に、各アプリの最新の価格・ライセンス・対応環境を各ページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "一覧にないプロバイダーも使えますか？",
            "a": "サイトによれば、OpenAI互換のAPIエンドポイントを持つプロバイダーも利用でき、追加の設定が必要な場合があります。"
          },
          {
            "q": "有料版やサブスクリプションはありますか？",
            "a": "記載はありません。サイトにあるのは任意のBuy Me a Coffee寄付リンクだけで、連携自体は無料です。"
          },
          {
            "q": "サポートやバグ報告はどこで？",
            "a": "サイトにはGitHub Discussions、Discordサーバー、Home Assistantコミュニティのスレッドへのリンクがあり、連絡先として[hello@llmvision.org](mailto:hello@llmvision.org)が載っています。「Report a bug」のリンクはメインではなく、別のダッシュボードカード用リポジトリを指しています。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "結論",
        "content": "LLM Visionは、Home Assistantのカメラ画像・動画・Frigateイベントを、選んだビジョンモデルでテキストに変換する無料のApache-2.0連携で、リポジトリは2026年9月17日に更新されました。一方で、独自のモデルは付属せず、クラウドプロバイダーにはフレームが送られ、Home Assistantの最小バージョンやハードウェア要件の記載はなく、精度と速度は未検証です。Ollama、Open WebUI、LocalAIを自分で動かせるHome Assistantユーザーに向いており、クラウドプロバイダーにフレームを送る場合は、先にそのプロバイダーの規約を確認してください。"
      },
      "sources": {
        "id": "sources",
        "title": "出典",
        "items": [
          "[LLM Visionの公式サイト](https://llmvision.org) — 機能、プロバイダー、プライバシー、インストールの案内。2026年11月1日確認。",
          "[Glimpse-v1のページ](https://llmvision.org/glimpse/) — モデルの説明と提供状況。2026年11月1日確認。",
          "[GitHubのLLM Vision](https://github.com/valentinfrlch/ha-llmvision) — README、ライセンス、マニフェスト、コミット。2026年11月1日確認。",
          "[GitHubリリースv1.7.2](https://github.com/valentinfrlch/ha-llmvision/releases/tag/v1.7.2) — 2026年9月3日のリリース。2026年11月1日確認。",
          "[プライバシーポリシー](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md) — テレメトリとデータの扱い。2026年2月15日施行、2026年11月1日確認。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[Home Assistant Assistレビュー](/ja/power-local-llm/home-assistant-assist-review) — OllamaやOpenAIのエージェントを使える、Home Assistant内蔵の音声アシスタント。",
          "[Ollamaレビュー](/ja/power-local-llm/ollama-review) — LLM Visionがプロバイダーとして使えるローカルのモデル実行環境。",
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
    "heroImage": "/images/llm-vision-review-hero-pt.webp",
    "title": "Análise do LLM Vision: análise de câmeras no Home Assistant com LLMs de visão",
    "seoTitle": "Análise do LLM Vision: câmeras no Home Assistant",
    "intro": "O LLM Vision é uma integração gratuita do Home Assistant que envia imagens de câmera, clipes de vídeo e eventos do Frigate para um modelo de linguagem multimodal e devolve uma descrição em texto que notificações, automações e uma linha do tempo de eventos podem usar. Ele não faz nenhum trabalho de IA por conta própria: você conecta um provedor, que pode ser Ollama, Open WebUI ou LocalAI no seu próprio hardware, ou um serviço na nuvem. O desenvolvedor é Valentin Fröhlich. Esta análise se baseia no [site](https://llmvision.org), no [repositório do GitHub](https://github.com/valentinfrlch/ha-llmvision) com suas versões e seu arquivo de privacidade, e na página do site sobre o modelo Glimpse, consultados em 1º de novembro de 2026; a PromptQuorum não testou a integração na prática.",
    "metaDescription": "Análise do LLM Vision: integração gratuita do Home Assistant que descreve imagens de câmera e eventos do Frigate com um LLM de visão, local ou na nuvem.",
    "twitterDescription": "Análise do LLM Vision: análise de câmeras no Home Assistant com o LLM de visão que você escolher, do Ollama no seu hardware a APIs na nuvem. O que as fontes confirmam e o que deixam em aberto.",
    "audience": "Usuários do Home Assistant com câmeras ou Frigate que querem saber o que o LLM Vision faz, quais provedores de IA ele exige, para onde vão as imagens e quais afirmações as fontes deixam em aberto.",
    "readTime": "6 min de leitura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "análise LLM Vision",
    "targetKeywords": [
      "análise llm vision",
      "llm vision home assistant",
      "home assistant câmera ia",
      "home assistant ollama visão",
      "integração frigate llm",
      "llm de visão local câmera de segurança",
      "llmvision hacs"
    ],
    "current_models_mentioned": [
      "Glimpse-v1"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**O LLM Vision (versão 1.7.2, lançada em 3 de setembro de 2026) é uma integração gratuita do Home Assistant, com licença Apache-2.0, que permite a um modelo de linguagem com visão descrever imagens de câmera, vídeos, transmissões ao vivo e eventos do Frigate.** Ele vem sem modelo: a análise roda no provedor que você configurar. Todas as afirmações aqui vêm do site do desenvolvedor, do repositório no GitHub e do arquivo de privacidade.",
    "quickAnswerTop": {
      "pt": {
        "question": "As imagens das câmeras ficam na minha rede com o LLM Vision?",
        "answer": "Somente se você escolher um provedor local. A integração envia quadros ao provedor que você configurar: com Ollama, Open WebUI ou LocalAI no seu próprio hardware, eles ficam com você; com um provedor na nuvem, vão para os servidores dessa empresa. Segundo o arquivo de privacidade, a integração em si não tem telemetria.",
        "bullets": [
          "Quatro ações cobrem as entradas: Images, Videos, Streams e Data, que atualiza uma entidade do Home Assistant a partir de uma imagem.",
          "Um redutor de resolução embutido diminui o tamanho da imagem para reduzir o uso de tokens e o custo.",
          "Os resultados podem aparecer no painel por meio de um Timeline Card e de um Preview Card."
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
        "label": "O que é o LLM Vision?",
        "anchor": "what-is-llm-vision"
      },
      {
        "label": "Onde obter",
        "anchor": "get-it"
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
            "text": "O LLM Vision é uma integração do Home Assistant que permite a um LLM de visão descrever imagens de câmera, vídeo e eventos do Frigate, com o modelo fornecido por um provedor local ou na nuvem à sua escolha."
          },
          {
            "type": "plain-terms",
            "text": "Sua câmera ou o Frigate entrega uma imagem a um modelo de IA que você configura separadamente, e a resposta volta como texto que o Home Assistant pode mostrar, guardar ou usar para agir."
          }
        ],
        "items": [
          "Manutenção: a versão 1.7.2 saiu em 3 de setembro de 2026 e o repositório foi atualizado pela última vez em 17 de setembro de 2026, com um blueprint beta para a 1.8.0; nenhum aviso de projeto abandonado se aplica.",
          "Custo: a integração é gratuita; provedores na nuvem cobram por consulta.",
          "IA: nenhum modelo vem incluído, você conecta o provedor de sua escolha.",
          "Privacidade: o arquivo de privacidade afirma que a integração não contém telemetria; para onde as imagens vão depende do seu provedor, veja Fluxo de dados e privacidade.",
          "Desenvolvedor: uma pessoa física, Valentin Fröhlich, que diz que o projeto não é endossado por nenhum dos provedores listados nem associado a eles."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta análise se baseia em llmvision.org, no repositório do GitHub e no arquivo de privacidade, consultados em 1º de novembro de 2026. A PromptQuorum não instalou, executou nem mediu a integração, portanto velocidade, precisão de detecção e qualidade das descrições não são avaliadas."
          }
        ]
      },
      "overview": {
        "id": "what-is-llm-vision",
        "title": "O que é o LLM Vision?",
        "content": [
          "**O LLM Vision é uma integração personalizada do Home Assistant que repassa a um modelo de linguagem multimodal imagens de câmeras, entidades de imagem, arquivos de vídeo e eventos do Frigate.** O site o chama de “Visual Intelligence for your Home” e o repositório no GitHub foi criado em 14 de maio de 2024.",
          "É um complemento para uma casa inteligente já existente, não um aplicativo independente: você precisa de um Home Assistant em funcionamento, da loja comunitária HACS e de um provedor de IA. O desenvolvedor é Valentin Fröhlich, citado na linha de copyright do site; o repositório lista um segundo responsável pelo código no GitHub."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Onde obter",
        "content": [
          "**O LLM Vision é instalado pelo HACS dentro do Home Assistant; não há download separado, app de loja nem instalador.**"
        ],
        "columns": [
          "Opção",
          "Como obter"
        ],
        "rows": [
          {
            "Opção": "Instalação",
            "Como obter": "[LLM Vision no GitHub](https://github.com/valentinfrlch/ha-llmvision), adicionado pelo HACS"
          },
          {
            "Opção": "Configuração",
            "Como obter": "Adicionar em Dispositivos e serviços, preparar a pasta /media para snapshots e adicionar um provedor de IA"
          },
          {
            "Opção": "Provedores locais",
            "Como obter": "Ollama, Open WebUI ou LocalAI no seu próprio hardware"
          },
          {
            "Opção": "Provedores na nuvem",
            "Como obter": "OpenAI, Anthropic, Google, OpenRouter, AWS, Groq ou Azure AI, cobrados por consulta pelo provedor"
          },
          {
            "Opção": "Preço",
            "Como obter": "A integração é gratuita; doações pelo Buy Me a Coffee são opcionais"
          },
          {
            "Opção": "Documentação",
            "Como obter": "[Guia de primeiros passos](https://llm-vision.gitbook.io/getting-started)"
          },
          {
            "Opção": "Site",
            "Como obter": "[llmvision.org](https://llmvision.org)"
          },
          {
            "Opção": "Política de privacidade",
            "Como obter": "[PRIVACY.md no GitHub](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md)"
          },
          {
            "Opção": "Código-fonte",
            "Como obter": "[Licença Apache-2.0 no GitHub](https://github.com/valentinfrlch/ha-llmvision)"
          }
        ],
        "note": "Versão analisada: 1.7.2 (3 de setembro de 2026, GitHub). O manifesto da integração no repositório ainda indica 1.7.1 e o site indica v1.7.0, então ambos estão atrasados em relação ao lançamento. O repositório não informa uma versão mínima do Home Assistant, e quem usa o Home Assistant Container talvez precise montar a pasta /media."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Como começar",
        "content": [
          "**Os passos seguem o README do desenvolvedor; a PromptQuorum não os executou.**"
        ],
        "numberedItems": [
          {
            "title": "Instalar a integração",
            "whyItMatters": "Instale o LLM Vision pelo HACS e reinicie o Home Assistant."
          },
          {
            "title": "Adicionar ao Home Assistant",
            "whyItMatters": "Procure LLM Vision em Dispositivos e serviços e confirme com as configurações padrão."
          },
          {
            "title": "Preparar a pasta de mídia",
            "whyItMatters": "Os snapshots ficam em /media; quem usa o Home Assistant Container talvez precise montá-la."
          },
          {
            "title": "Adicionar um provedor de IA",
            "whyItMatters": "Volte à página da integração e adicione uma entrada para o seu provedor, por exemplo Ollama no seu próprio servidor ou uma chave de API na nuvem."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos confirmados pelas fontes",
        "content": [
          "**Cada item abaixo vem do site ou do repositório do desenvolvedor; nenhum foi testado de forma independente.**"
        ],
        "items": [
          "**Quatro ações.** Images analisa câmeras, entidades de imagem ou arquivos; Videos extrai quadros de um arquivo de vídeo ou de um evento do Frigate; Streams captura quadros de entidades de câmera; Data analisa uma imagem e atualiza um auxiliar numérico, de texto, de seleção ou booleano.",
          "**Notificações.** Transmissões de câmera e eventos do Frigate são analisados quase em tempo real, e os resultados podem alimentar notificações e automações.",
          "**Linha do tempo e memória.** Os eventos só são guardados se “remember” estiver ativado; com “important”, eles são classificados e mantidos apenas se forem considerados importantes, e aparecem como entidades de calendário. Lembrar eventos exige um agente de conversação como o Extended OpenAI Conversation.",
          "**Pipeline de imagens.** Segundo o site, ele escolhe os quadros relevantes e os otimiza para a inferência, e um redutor de resolução diminui o tamanho e o uso de tokens.",
          "**Glimpse-v1.** O modelo aberto de visão e linguagem do próprio desenvolvedor, com 4 bilhões de parâmetros, para resumir eventos de segurança residencial, em beta, no [Hugging Face e na biblioteca do Ollama](https://llmvision.org/glimpse/) (`ollama run llmvision/glimpse-v1`).",
          "**Idiomas.** Inglês, alemão, holandês, francês, espanhol, português, italiano, polonês e sueco, com mais idiomas sendo adicionados ao longo do tempo."
        ],
        "note": "Precisão de detecção, latência e qualidade das descrições não foram testadas."
      },
      "privacy": {
        "id": "privacy",
        "title": "Fluxo de dados e privacidade",
        "content": [
          "**A integração envia imagens somente ao provedor que você configurar, então o destino delas depende inteiramente dessa escolha.** Com Ollama, Open WebUI ou LocalAI no seu próprio hardware, a análise fica com você; com OpenAI, Anthropic, Google, OpenRouter, AWS, Groq ou Azure AI, os quadros viajam para os servidores dessa empresa e ficam sujeitos aos termos dela.",
          "O arquivo de privacidade (em vigor desde 15 de fevereiro de 2026) diz que a integração do Home Assistant não contém telemetria: o desenvolvedor não recebe dados de uso, não vê quais provedores você configura e não tem acesso aos seus dados do Home Assistant. Não são necessárias contas, e somente o site usa o Google Analytics. O site acrescenta que os eventos analisados nunca saem da sua instância do Home Assistant, enquanto o manifesto da integração a classifica como cloud polling."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "São declarações do desenvolvedor, não resultados de auditoria, e a PromptQuorum não inspecionou o tráfego de rede. A afirmação do site sobre eventos se refere aos eventos armazenados, não às chamadas feitas a um provedor."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem serve",
        "items": [
          "**Usuários do Home Assistant com câmeras** que querem uma descrição em texto de um evento da campainha ou da garagem na notificação.",
          "**Usuários do Frigate** que querem eventos resumidos e pesquisáveis em uma linha do tempo.",
          "**Quem opera Ollama, Open WebUI ou LocalAI** e quer analisar quadros no próprio hardware."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Desempenho.** Precisão de detecção, latência, necessidades de hardware e custo por consulta não foram testados, e o site não informa nenhum requisito de hardware.",
          "**Operação totalmente local.** Nem o site nem o README descrevem uma configuração local de ponta a ponta; eles listam Ollama, Open WebUI e LocalAI como provedores e recomendam um provedor local para a máxima privacidade.",
          "**Versão do Home Assistant.** O repositório não informa uma versão mínima.",
          "**Licença do Glimpse-v1.** O site não cita uma licença para o modelo e não dá números de hardware."
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
            "Plataformas": "Linux, web, iPhone, Android",
            "Preço / licença": "Grátis / Apache-2.0",
            "Diferença principal": "Assistente de voz integrado; agentes LLM via Ollama ou OpenAI"
          },
          {
            "App": "[Ollama](/pt/power-local-llm/ollama-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Preço / licença": "Grátis / MIT",
            "Diferença principal": "Executor local de modelos que o LLM Vision pode usar como provedor"
          }
        ],
        "note": "Confirme o preço, a licença e as plataformas atuais de cada app na própria página antes de escolher."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "Posso usar um provedor que não está na lista?",
            "a": "Segundo o site, provedores com um endpoint de API compatível com a OpenAI também podem ser usados, possivelmente com configuração adicional."
          },
          {
            "q": "Existe versão paga ou assinatura?",
            "a": "Nenhuma é listada; o site mostra apenas um link opcional de doação do Buy Me a Coffee, e a integração em si é gratuita."
          },
          {
            "q": "Onde consigo ajuda ou relato um bug?",
            "a": "O site tem links para o GitHub Discussions, um servidor do Discord e um tópico da comunidade do Home Assistant, e indica [hello@llmvision.org](mailto:hello@llmvision.org) como contato. O link “Report a bug” aponta para o repositório separado do cartão do painel, não para o principal."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O LLM Vision transforma imagens de câmera, vídeos e eventos do Frigate no Home Assistant em texto por meio de um modelo de visão que você escolhe, é gratuito sob Apache-2.0 e teve o repositório atualizado em 17 de setembro de 2026. Em contrapartida, não traz modelo próprio, provedores na nuvem recebem seus quadros, não há versão mínima do Home Assistant nem requisito de hardware informados, e precisão e velocidade não foram testadas. Serve para donos de Home Assistant que consigam rodar Ollama, Open WebUI ou LocalAI por conta própria; quem envia quadros a um provedor na nuvem deve ler antes os termos desse provedor."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Site do LLM Vision](https://llmvision.org) — recursos, provedores, privacidade e notas de instalação, consultado em 1º de novembro de 2026.",
          "[Página do Glimpse-v1](https://llmvision.org/glimpse/) — descrição do modelo e disponibilidade, consultada em 1º de novembro de 2026.",
          "[LLM Vision no GitHub](https://github.com/valentinfrlch/ha-llmvision) — README, licença, manifesto e commits, consultados em 1º de novembro de 2026.",
          "[Versão v1.7.2 no GitHub](https://github.com/valentinfrlch/ha-llmvision/releases/tag/v1.7.2) — versão de 3 de setembro de 2026, consultada em 1º de novembro de 2026.",
          "[Política de privacidade](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md) — telemetria e tratamento de dados, em vigor desde 15 de fevereiro de 2026, consultada em 1º de novembro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leituras relacionadas",
        "items": [
          "[Análise do Home Assistant Assist](/pt/power-local-llm/home-assistant-assist-review) — o assistente de voz integrado ao Home Assistant, com agentes Ollama e OpenAI.",
          "[Análise do Ollama](/pt/power-local-llm/ollama-review) — o executor local de modelos que o LLM Vision pode usar como provedor.",
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
    "theme": "Voice, Speech & Multimodal",
    "heroImage": "/images/llm-vision-review-hero-ar.webp",
    "title": "مراجعة LLM Vision: تحليل الكاميرات في Home Assistant بنماذج لغوية بصرية",
    "seoTitle": "مراجعة LLM Vision: تحليل الكاميرات في Home Assistant",
    "intro": "LLM Vision تكامل مجاني مع Home Assistant يرسل صور الكاميرات ومقاطع الفيديو وأحداث Frigate إلى نموذج لغوي متعدد الوسائط ويعيد وصفًا نصيًا يمكن للإشعارات والأتمتة والجدول الزمني للأحداث الاستفادة منه. لا ينفذ التكامل أي عمل للذكاء الاصطناعي بنفسه: تربط به مزوّدًا، إما Ollama أو Open WebUI أو LocalAI على جهازك، أو خدمة سحابية. المطوّر هو Valentin Fröhlich. تستند هذه المراجعة إلى [الموقع](https://llmvision.org) و[مستودع GitHub](https://github.com/valentinfrlch/ha-llmvision) بإصداراته وملف الخصوصية، وإلى صفحة الموقع عن نموذج Glimpse، وقد جرى الاطلاع عليها في 1 نوفمبر 2026؛ ولم تختبر PromptQuorum التكامل عمليًا.",
    "metaDescription": "مراجعة LLM Vision: تكامل مجاني مع Home Assistant يصف صور الكاميرات والفيديو وأحداث Frigate بنموذج لغوي بصري محلي أو سحابي. ترخيص Apache-2.0.",
    "twitterDescription": "مراجعة LLM Vision: تحليل كاميرات Home Assistant بنموذج لغوي بصري تختاره، من Ollama على جهازك إلى واجهات السحابة. ما تؤكده المصادر وما تتركه مفتوحًا.",
    "audience": "مستخدمو Home Assistant الذين لديهم كاميرات أو Frigate ويريدون معرفة ما يفعله LLM Vision، وما مزوّدات الذكاء الاصطناعي التي يحتاجها، وإلى أين تذهب الصور، وأي ادعاءات تتركها المصادر مفتوحة.",
    "readTime": "6 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة LLM Vision",
    "targetKeywords": [
      "مراجعة llm vision",
      "llm vision home assistant",
      "ذكاء اصطناعي كاميرا home assistant",
      "home assistant ollama رؤية",
      "تكامل frigate مع llm",
      "نموذج لغوي بصري محلي لكاميرا المراقبة",
      "llmvision hacs"
    ],
    "current_models_mentioned": [
      "Glimpse-v1"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**LLM Vision (الإصدار 1.7.2، صدر في 3 سبتمبر 2026) تكامل مجاني مع Home Assistant بترخيص Apache-2.0، يتيح لنموذج لغوي يدعم الرؤية وصف صور الكاميرات ومقاطع الفيديو والبث المباشر وأحداث Frigate.** يأتي بلا نموذج: يجري التحليل لدى المزوّد الذي تضبطه. كل عبارة هنا مأخوذة من موقع المطوّر ومستودعه على GitHub وملف الخصوصية.",
    "quickAnswerTop": {
      "ar": {
        "question": "هل تبقى صور الكاميرات في شبكتي مع LLM Vision؟",
        "answer": "فقط إذا اخترت مزوّدًا محليًا. يرسل التكامل الإطارات إلى المزوّد الذي تضبطه: مع Ollama أو Open WebUI أو LocalAI على جهازك تبقى لديك، ومع مزوّد سحابي تذهب إلى خوادم تلك الشركة. وبحسب ملف الخصوصية، لا يحتوي التكامل نفسه على أي قياس عن بُعد.",
        "bullets": [
          "أربعة إجراءات تغطي المدخلات: Images وVideos وStreams وData، الذي يحدّث كيانًا في Home Assistant انطلاقًا من صورة.",
          "مصغّر دقة مدمج يخفض دقة الصورة لتقليل استهلاك الرموز (tokens) والتكلفة.",
          "يمكن أن تظهر النتائج في لوحة التحكم عبر Timeline Card وPreview Card."
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
        "label": "ما هو LLM Vision؟",
        "anchor": "what-is-llm-vision"
      },
      {
        "label": "كيف تحصل عليه",
        "anchor": "get-it"
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
            "text": "LLM Vision تكامل مع Home Assistant يتيح لنموذج لغوي بصري وصف صور الكاميرات والفيديو وأحداث Frigate، ويوفّر النموذجَ مزوّدٌ محلي أو سحابي من اختيارك."
          },
          {
            "type": "plain-terms",
            "text": "تسلّم الكاميرا أو Frigate صورة إلى نموذج ذكاء اصطناعي تضبطه بشكل منفصل، وتعود الإجابة نصًا يمكن لـ Home Assistant عرضه أو حفظه أو التصرف بناءً عليه."
          }
        ],
        "items": [
          "الصيانة: صدر الإصدار 1.7.2 في 3 سبتمبر 2026، وحُدّث المستودع آخر مرة في 17 سبتمبر 2026 بمخطط تجريبي (blueprint) للإصدار 1.8.0، لذا لا ينطبق تحذير المشروع المتوقف.",
          "التكلفة: التكامل مجاني؛ ويحاسب المزوّدون السحابيون على كل استعلام.",
          "الذكاء الاصطناعي: لا يُرفق أي نموذج، وتربط المزوّد الذي تختاره.",
          "الخصوصية: يذكر ملف الخصوصية أن التكامل لا يحتوي على قياس عن بُعد؛ ووجهة الإطارات تعتمد على مزوّدك، راجع تدفق البيانات والخصوصية.",
          "المطوّر: شخص مستقل هو Valentin Fröhlich، ويقول إن المشروع غير معتمد من أي من المزوّدين المذكورين ولا مرتبط بهم."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "تستند هذه المراجعة إلى llmvision.org ومستودع GitHub وملف الخصوصية، وقد جرى الاطلاع عليها في 1 نوفمبر 2026. لم تثبّت PromptQuorum التكامل ولم تشغّله ولم تقِس أداءه، لذلك لا يُقيَّم هنا السرعة ولا دقة الكشف ولا جودة الأوصاف."
          }
        ]
      },
      "overview": {
        "id": "what-is-llm-vision",
        "title": "ما هو LLM Vision؟",
        "content": [
          "**LLM Vision تكامل مخصص مع Home Assistant يمرّر إلى نموذج لغوي متعدد الوسائط صور الكاميرات وكيانات الصور وملفات الفيديو وأحداث Frigate.** يصفه الموقع بعبارة \"Visual Intelligence for your Home\"، وأُنشئ مستودع GitHub في 14 مايو 2024.",
          "هو إضافة لمنزل ذكي قائم وليس تطبيقًا مستقلًا: تحتاج إلى Home Assistant يعمل، ومتجر المجتمع HACS، ومزوّد للذكاء الاصطناعي. المطوّر هو Valentin Fröhlich المذكور في سطر حقوق النشر في الموقع؛ ويذكر المستودع مالكًا ثانيًا للشيفرة على GitHub."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "كيف تحصل عليه",
        "content": [
          "**يُثبَّت LLM Vision من HACS داخل Home Assistant؛ لا يوجد تنزيل منفصل ولا تطبيق في متجر ولا مثبّت.**"
        ],
        "columns": [
          "الخيار",
          "كيف تحصل عليه"
        ],
        "rows": [
          {
            "الخيار": "التثبيت",
            "كيف تحصل عليه": "[LLM Vision على GitHub](https://github.com/valentinfrlch/ha-llmvision)، يُضاف عبر HACS"
          },
          {
            "الخيار": "الإعداد",
            "كيف تحصل عليه": "أضفه ضمن الأجهزة والخدمات، وهيّئ المجلد /media للقطات، ثم أضف مزوّدًا للذكاء الاصطناعي"
          },
          {
            "الخيار": "المزوّدون المحليون",
            "كيف تحصل عليه": "Ollama أو Open WebUI أو LocalAI على جهازك"
          },
          {
            "الخيار": "المزوّدون السحابيون",
            "كيف تحصل عليه": "OpenAI أو Anthropic أو Google أو OpenRouter أو AWS أو Groq أو Azure AI، ويحاسب المزوّد على كل استعلام"
          },
          {
            "الخيار": "السعر",
            "كيف تحصل عليه": "التكامل مجاني؛ والتبرع عبر Buy Me a Coffee اختياري"
          },
          {
            "الخيار": "التوثيق",
            "كيف تحصل عليه": "[دليل البدء](https://llm-vision.gitbook.io/getting-started)"
          },
          {
            "الخيار": "الموقع",
            "كيف تحصل عليه": "[llmvision.org](https://llmvision.org)"
          },
          {
            "الخيار": "سياسة الخصوصية",
            "كيف تحصل عليه": "[PRIVACY.md على GitHub](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md)"
          },
          {
            "الخيار": "الشيفرة المصدرية",
            "كيف تحصل عليه": "[ترخيص Apache-2.0 على GitHub](https://github.com/valentinfrlch/ha-llmvision)"
          }
        ],
        "note": "الإصدار المراجَع: 1.7.2 (3 سبتمبر 2026، GitHub). لا يزال ملف manifest للتكامل في المستودع يذكر 1.7.1، ويذكر الموقع v1.7.0، فكلاهما متأخر عن الإصدار المنشور. لا يذكر المستودع حدًّا أدنى لإصدار Home Assistant، وقد يحتاج مستخدمو Home Assistant Container إلى ربط المجلد /media."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "كيف تبدأ",
        "content": [
          "**تتبع الخطوات ملف README الخاص بالمطوّر؛ ولم تنفذها PromptQuorum.**"
        ],
        "numberedItems": [
          {
            "title": "ثبّت التكامل",
            "whyItMatters": "ثبّت LLM Vision من HACS ثم أعد تشغيل Home Assistant."
          },
          {
            "title": "أضفه إلى Home Assistant",
            "whyItMatters": "ابحث عن LLM Vision ضمن الأجهزة والخدمات ثم أكّد بالإعدادات الافتراضية."
          },
          {
            "title": "هيّئ مجلد الوسائط",
            "whyItMatters": "تُخزَّن اللقطات في /media؛ وقد يحتاج مستخدمو Home Assistant Container إلى ربطه."
          },
          {
            "title": "أضف مزوّد ذكاء اصطناعي",
            "whyItMatters": "ارجع إلى صفحة التكامل وأضف إدخالًا لمزوّدك، مثل Ollama على خادمك أو مفتاح API سحابي."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "الميزات التي أكدتها المصادر",
        "content": [
          "**كل بند أدناه مأخوذ من موقع المطوّر أو مستودعه؛ ولم يُختبر أي منها بشكل مستقل.**"
        ],
        "items": [
          "**أربعة إجراءات.** يحلل Images الكاميرات أو كيانات الصور أو الملفات؛ ويستخرج Videos إطارات من ملف فيديو أو حدث Frigate؛ ويلتقط Streams إطارات من كيانات الكاميرا؛ ويحلل Data صورة ويحدّث مساعدًا رقميًا أو نصيًا أو للاختيار أو منطقيًا.",
          "**الإشعارات.** تُحلَّل بثوث الكاميرات وأحداث Frigate في زمن شبه فعلي، ويمكن للنتائج تغذية الإشعارات والأتمتة.",
          "**الجدول الزمني والذاكرة.** لا تُخزَّن الأحداث إلا إذا كان خيار \"remember\" مفعّلًا؛ ومع \"important\" تُصنَّف ولا تُحفظ إلا ما يُعدّ مهمًا، وتظهر ككيانات تقويم. ويتطلب تذكّر الأحداث وكيل محادثة مثل Extended OpenAI Conversation.",
          "**مسار معالجة الصور.** بحسب الموقع، يختار الإطارات ذات الصلة ويحسّنها للاستدلال، ويخفض مصغّر الدقة الحجم واستهلاك الرموز.",
          "**Glimpse-v1.** نموذج الرؤية واللغة المفتوح الخاص بالمطوّر بحجم 4 مليارات معامل لتلخيص أحداث أمان المنزل، في المرحلة التجريبية، على [Hugging Face ومكتبة Ollama](https://llmvision.org/glimpse/) (`ollama run llmvision/glimpse-v1`).",
          "**اللغات.** الإنجليزية والألمانية والهولندية والفرنسية والإسبانية والبرتغالية والإيطالية والبولندية والسويدية، مع إضافة المزيد بمرور الوقت."
        ],
        "note": "لم تُختبر دقة الكشف ولا زمن الاستجابة ولا جودة الأوصاف."
      },
      "privacy": {
        "id": "privacy",
        "title": "تدفق البيانات والخصوصية",
        "content": [
          "**يرسل التكامل الصور فقط إلى المزوّد الذي تضبطه، لذلك تعتمد وجهتها بالكامل على هذا الاختيار.** مع Ollama أو Open WebUI أو LocalAI على جهازك يبقى التحليل لديك؛ ومع OpenAI أو Anthropic أو Google أو OpenRouter أو AWS أو Groq أو Azure AI تنتقل الإطارات إلى خوادم تلك الشركة وتخضع لشروطها.",
          "يقول ملف الخصوصية (ساري من 15 فبراير 2026) إن تكامل Home Assistant لا يحتوي على قياس عن بُعد: لا يتلقى المطوّر بيانات استخدام، ولا يرى المزوّدين الذين تضبطهم، ولا يملك وصولًا إلى بيانات Home Assistant لديك. لا حاجة إلى حسابات، ولا يستخدم Google Analytics سوى الموقع. ويضيف الموقع أن الأحداث المحلَّلة لا تغادر نسخة Home Assistant لديك أبدًا، بينما يصنّف ملف manifest للتكامل نوعه بأنه cloud polling."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "هذه تصريحات من المطوّر وليست نتائج تدقيق، ولم تفحص PromptQuorum حركة الشبكة. وعبارة الموقع عن الأحداث تخص الأحداث المخزَّنة، لا الاستدعاءات الموجَّهة إلى مزوّد."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**مستخدمو Home Assistant الذين لديهم كاميرات** ويريدون وصفًا نصيًا لحدث جرس الباب أو المدخل في الإشعار.",
          "**مستخدمو Frigate** الذين يريدون أحداثًا ملخَّصة وقابلة للبحث في جدول زمني.",
          "**مشغّلو Ollama أو Open WebUI أو LocalAI** الذين يريدون تحليل الإطارات على أجهزتهم."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**الأداء.** لم تُختبر دقة الكشف ولا زمن الاستجابة ولا متطلبات العتاد ولا تكلفة الاستعلام، ولا يذكر الموقع أي متطلب للعتاد.",
          "**التشغيل المحلي بالكامل.** لا يشرح الموقع ولا README إعدادًا محليًا من البداية إلى النهاية؛ فهما يذكران Ollama وOpen WebUI وLocalAI كمزوّدين ويوصيان بمزوّد محلي لأعلى درجات الخصوصية.",
          "**إصدار Home Assistant.** لا يذكر المستودع حدًّا أدنى للإصدار.",
          "**ترخيص Glimpse-v1.** لا يذكر الموقع ترخيصًا للنموذج ولا يقدّم أرقامًا للعتاد."
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
            "المنصات": "Linux وويب وiPhone وAndroid",
            "السعر / الترخيص": "مجاني / Apache-2.0",
            "الفرق الأساسي": "مساعد صوتي مدمج؛ وكلاء LLM عبر Ollama أو OpenAI"
          },
          {
            "التطبيق": "[Ollama](/ar/power-local-llm/ollama-review)",
            "المنصات": "Mac وWindows وLinux",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الأساسي": "مشغّل نماذج محلي يمكن لـ LLM Vision استخدامه كمزوّد"
          }
        ],
        "note": "تحقق من السعر والترخيص والمنصات الحالية لكل تطبيق في صفحته الخاصة قبل الاختيار."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل يمكنني استخدام مزوّد غير مدرج في القائمة؟",
            "a": "يذكر الموقع أنه يمكن أيضًا استخدام المزوّدين الذين لديهم نقطة نهاية API متوافقة مع OpenAI، وقد يتطلب ذلك إعدادًا إضافيًا."
          },
          {
            "q": "هل توجد نسخة مدفوعة أو اشتراك؟",
            "a": "لا يُذكر أي منهما؛ فالموقع يعرض فقط رابط تبرع اختياريًا عبر Buy Me a Coffee، والتكامل نفسه مجاني."
          },
          {
            "q": "أين أجد المساعدة أو أبلّغ عن خطأ؟",
            "a": "يربط الموقع بـ GitHub Discussions وخادم Discord وموضوع في مجتمع Home Assistant، ويذكر [hello@llmvision.org](mailto:hello@llmvision.org) للتواصل. أما رابط \"Report a bug\" فيشير إلى مستودع بطاقة لوحة التحكم المنفصل وليس إلى المستودع الرئيسي."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "يحوّل LLM Vision صور كاميرات Home Assistant ومقاطع الفيديو وأحداث Frigate إلى نص عبر نموذج بصري تختاره، وهو مجاني بترخيص Apache-2.0، وقد حُدّث مستودعه في 17 سبتمبر 2026. في المقابل، لا يأتي بنموذج خاص، وتتلقى المزوّدات السحابية إطاراتك، ولم يُذكر حد أدنى لإصدار Home Assistant ولا متطلب للعتاد، والدقة والسرعة لم تُختبرا. يناسب مالكي Home Assistant القادرين على تشغيل Ollama أو Open WebUI أو LocalAI بأنفسهم؛ ومن يرسل الإطارات إلى مزوّد سحابي ينبغي أن يقرأ شروط ذلك المزوّد أولًا."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[موقع LLM Vision](https://llmvision.org) — الميزات والمزوّدون والخصوصية وملاحظات التثبيت، جرى الاطلاع عليه في 1 نوفمبر 2026.",
          "[صفحة Glimpse-v1](https://llmvision.org/glimpse/) — وصف النموذج وتوفره، جرى الاطلاع عليها في 1 نوفمبر 2026.",
          "[LLM Vision على GitHub](https://github.com/valentinfrlch/ha-llmvision) — README والترخيص وملف manifest وسجل التعديلات، جرى الاطلاع عليها في 1 نوفمبر 2026.",
          "[إصدار GitHub v1.7.2](https://github.com/valentinfrlch/ha-llmvision/releases/tag/v1.7.2) — إصدار 3 سبتمبر 2026، جرى الاطلاع عليه في 1 نوفمبر 2026.",
          "[سياسة الخصوصية](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md) — القياس عن بُعد ومعالجة البيانات، سارية من 15 فبراير 2026، جرى الاطلاع عليها في 1 نوفمبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة Home Assistant Assist](/ar/power-local-llm/home-assistant-assist-review) — المساعد الصوتي المدمج في Home Assistant مع وكلاء Ollama وOpenAI.",
          "[مراجعة Ollama](/ar/power-local-llm/ollama-review) — مشغّل النماذج المحلي الذي يمكن لـ LLM Vision استخدامه كمزوّد.",
          "[دليل برامج LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية."
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
    "heroImage": "/images/llm-vision-review-hero-zh.webp",
    "title": "LLM Vision 评测：用视觉 LLM 分析 Home Assistant 摄像头",
    "seoTitle": "LLM Vision 评测：Home Assistant 摄像头分析",
    "intro": "LLM Vision 是一款免费的 Home Assistant 集成，它把摄像头图像、视频片段和 Frigate 事件发送给多模态语言模型，并返回文字描述，供通知、自动化和事件时间线使用。它本身不做任何 AI 运算：你需要接入一个提供方，既可以是自己硬件上的 Ollama、Open WebUI 或 LocalAI，也可以是云服务。开发者是 Valentin Fröhlich。本评测基于其[官网](https://llmvision.org)、含发布版本和隐私文件的 [GitHub 仓库](https://github.com/valentinfrlch/ha-llmvision)以及官网上关于 Glimpse 模型的页面，核查日期为 2026 年 11 月 1 日；PromptQuorum 没有实际测试该集成。",
    "metaDescription": "LLM Vision 评测：免费的 Home Assistant 集成，用视觉 LLM 描述摄像头图像、视频和 Frigate 事件，可本地或云端运行，Apache-2.0 许可。",
    "twitterDescription": "LLM Vision 评测：用你选择的视觉 LLM 分析 Home Assistant 摄像头，从自有硬件上的 Ollama 到云端 API。资料证实了什么，又留下了哪些疑问。",
    "audience": "拥有摄像头或 Frigate 的 Home Assistant 用户，想了解 LLM Vision 能做什么、需要哪些 AI 提供方、图像会发往哪里，以及哪些说法资料没有证实。",
    "readTime": "阅读约6分钟",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "LLM Vision 评测",
    "targetKeywords": [
      "llm vision 评测",
      "llm vision home assistant",
      "home assistant 摄像头 ai",
      "home assistant ollama 视觉",
      "frigate llm 集成",
      "本地视觉 llm 监控摄像头",
      "llmvision hacs"
    ],
    "current_models_mentioned": [
      "Glimpse-v1"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**LLM Vision（1.7.2 版，2026 年 9 月 3 日发布）是一款采用 Apache-2.0 许可的免费 Home Assistant 集成，让具备视觉能力的语言模型描述摄像头图像、视频、实时流和 Frigate 事件。** 它不自带模型：分析在你配置的提供方那里进行。本文所有表述均来自开发者的官网、GitHub 仓库和隐私文件。",
    "quickAnswerTop": {
      "zh": {
        "question": "使用 LLM Vision 时，摄像头图像会留在我的网络里吗？",
        "answer": "只有选择本地提供方才会。该集成把画面帧发送给你配置的提供方：使用自己硬件上的 Ollama、Open WebUI 或 LocalAI 时留在你手里，使用云端提供方时则发往该公司的服务器。隐私文件称，集成本身没有遥测。",
        "bullets": [
          "四个操作覆盖各类输入：Images、Videos、Streams，以及根据图像更新 Home Assistant 实体的 Data。",
          "内置的降采样器会降低图像分辨率，以减少 token 消耗和费用。",
          "结果可通过 Timeline Card 和 Preview Card 显示在仪表板上。"
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
        "label": "LLM Vision 是什么？",
        "anchor": "what-is-llm-vision"
      },
      {
        "label": "获取方式",
        "anchor": "get-it"
      },
      {
        "label": "如何开始",
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
        "label": "适合谁用",
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
            "text": "LLM Vision 是一款 Home Assistant 集成，让视觉 LLM 描述摄像头图像、视频和 Frigate 事件，模型由你选择的本地或云端提供方提供。"
          },
          {
            "type": "plain-terms",
            "text": "摄像头或 Frigate 把图像交给你另行配置的 AI 模型，答案以文字形式返回，Home Assistant 可以显示、保存或据此执行动作。"
          }
        ],
        "items": [
          "维护：1.7.2 版于 2026 年 9 月 3 日发布，仓库最近一次更新是 2026 年 9 月 17 日（1.8.0 测试版蓝图），因此不触发“项目停更”警告。",
          "费用：集成免费；云端提供方按查询计费。",
          "AI：不附带任何模型，需自行接入提供方。",
          "隐私：隐私文件称集成不含遥测；画面帧的去向取决于你的提供方，见“数据流向与隐私”。",
          "开发者：个人开发者 Valentin Fröhlich，声明该项目未获所列提供方认可，也与它们没有关联。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本评测基于 llmvision.org、GitHub 仓库及其隐私文件，核查日期为 2026 年 11 月 1 日。PromptQuorum 没有安装、运行或测量该集成，因此速度、检测准确度和描述质量均未评估。"
          }
        ]
      },
      "overview": {
        "id": "what-is-llm-vision",
        "title": "LLM Vision 是什么？",
        "content": [
          "**LLM Vision 是 Home Assistant 的自定义集成，把摄像头、图像实体、视频文件和 Frigate 事件中的图像交给多模态语言模型处理。** 官网称其为“Visual Intelligence for your Home”，GitHub 仓库创建于 2024 年 5 月 14 日。",
          "它是现有智能家居的附加组件，而不是独立应用：你需要一个运行中的 Home Assistant、社区商店 HACS 和一个 AI 提供方。开发者是官网版权行中署名的 Valentin Fröhlich；仓库还列出 GitHub 上的另一位代码所有者。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "content": [
          "**LLM Vision 通过 Home Assistant 内的 HACS 安装；没有单独的下载包、商店应用或安装程序。**"
        ],
        "columns": [
          "选项",
          "获取方式"
        ],
        "rows": [
          {
            "选项": "安装",
            "获取方式": "[GitHub 上的 LLM Vision](https://github.com/valentinfrlch/ha-llmvision)，通过 HACS 添加，然后重启 Home Assistant"
          },
          {
            "选项": "设置",
            "获取方式": "在“设备与服务”中添加，准备好存放快照的 /media 文件夹，再添加 AI 提供方"
          },
          {
            "选项": "本地提供方",
            "获取方式": "自有硬件上的 Ollama、Open WebUI 或 LocalAI"
          },
          {
            "选项": "云端提供方",
            "获取方式": "OpenAI、Anthropic、Google、OpenRouter、AWS、Groq 或 Azure AI，由提供方按查询计费"
          },
          {
            "选项": "价格",
            "获取方式": "集成免费；可通过 Buy Me a Coffee 自愿捐赠"
          },
          {
            "选项": "文档",
            "获取方式": "[入门指南](https://llm-vision.gitbook.io/getting-started)"
          },
          {
            "选项": "官网",
            "获取方式": "[llmvision.org](https://llmvision.org)"
          },
          {
            "选项": "隐私政策",
            "获取方式": "[GitHub 上的 PRIVACY.md](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md)"
          },
          {
            "选项": "源代码",
            "获取方式": "[GitHub 上的 Apache-2.0 许可](https://github.com/valentinfrlch/ha-llmvision)"
          }
        ],
        "note": "核查的版本：1.7.2（2026 年 9 月 3 日，GitHub）。仓库中的集成清单仍写 1.7.1，官网写 v1.7.0，二者都落后于正式发布。仓库没有给出 Home Assistant 的最低版本，使用 Home Assistant Container 的用户可能需要挂载 /media 文件夹。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "如何开始",
        "content": [
          "**以下步骤依据开发者的 README，PromptQuorum 没有实际执行。**"
        ],
        "numberedItems": [
          {
            "title": "安装集成",
            "whyItMatters": "通过 HACS 安装 LLM Vision，然后重启 Home Assistant。"
          },
          {
            "title": "添加到 Home Assistant",
            "whyItMatters": "在“设备与服务”中搜索 LLM Vision，并使用默认设置提交。"
          },
          {
            "title": "准备媒体文件夹",
            "whyItMatters": "快照存放在 /media；使用 Home Assistant Container 的用户可能需要挂载它。"
          },
          {
            "title": "添加 AI 提供方",
            "whyItMatters": "回到集成页面，为你的提供方添加条目，例如自己服务器上的 Ollama 或云端 API 密钥。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "资料证实的功能",
        "content": [
          "**以下每一项都来自开发者的官网或仓库，均未经独立测试。**"
        ],
        "items": [
          "**四个操作。** Images 分析摄像头、图像实体或文件；Videos 从视频文件或 Frigate 事件中提取帧；Streams 从摄像头实体抓取帧；Data 分析图像并更新数字、文本、选择或布尔辅助实体。",
          "**通知。** 摄像头画面和 Frigate 事件近乎实时地被分析，结果可用于通知和自动化。",
          "**时间线与记忆。** 只有开启“remember”才会保存事件；开启“important”后，事件会被分类，只保留被判定为重要的，并显示为日历实体。记住事件需要 Extended OpenAI Conversation 之类的对话代理。",
          "**图像管线。** 官网称它会挑选相关帧并为推理优化，降采样器则降低分辨率和 token 消耗。",
          "**Glimpse-v1。** 开发者自己的 40 亿参数开源视觉语言模型，用于总结家庭安防事件，处于测试阶段，可在 [Hugging Face 和 Ollama 库](https://llmvision.org/glimpse/)获取（`ollama run llmvision/glimpse-v1`）。",
          "**语言。** 英语、德语、荷兰语、法语、西班牙语、葡萄牙语、意大利语、波兰语和瑞典语，后续还会增加。"
        ],
        "note": "检测准确度、延迟和描述质量均未测试。"
      },
      "privacy": {
        "id": "privacy",
        "title": "数据流向与隐私",
        "content": [
          "**集成只会把图像发送给你配置的提供方，所以图像去向完全取决于这一选择。** 使用自有硬件上的 Ollama、Open WebUI 或 LocalAI 时，分析留在你手里；使用 OpenAI、Anthropic、Google、OpenRouter、AWS、Groq 或 Azure AI 时，画面帧会发往该公司的服务器，并适用其条款。",
          "隐私文件（2026 年 2 月 15 日生效）称，Home Assistant 集成不含遥测：开发者不会收到使用数据，看不到你配置了哪些提供方，也无法访问你的 Home Assistant 数据。无需账户，只有官网使用 Google Analytics。官网补充说，已分析的事件不会离开你的 Home Assistant 实例，而集成清单将其归类为 cloud polling。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "这些是开发者的声明，不是审计结果，PromptQuorum 也没有检查网络流量。官网关于事件的说法指的是已保存的事件，而不是对提供方的调用。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合谁用",
        "items": [
          "**有摄像头的 Home Assistant 用户**：希望在通知里看到门铃或车道事件的文字描述。",
          "**Frigate 用户**：希望事件被总结，并能在时间线中检索。",
          "**运行 Ollama、Open WebUI 或 LocalAI 的用户**：希望在自己的硬件上分析画面帧。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们无法核实的内容",
        "items": [
          "**性能。** 检测准确度、延迟、硬件需求和每次查询的费用均未测试，官网也没有给出硬件要求。",
          "**完全本地运行。** 官网和 README 都没有说明端到端的本地配置；它们把 Ollama、Open WebUI 和 LocalAI 列为提供方，并建议隐私要求最高时使用本地提供方。",
          "**Home Assistant 版本。** 仓库没有给出最低版本。",
          "**Glimpse-v1 的许可证。** 官网没有说明该模型的许可证，也没有给出硬件数据。"
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
            "应用": "[Home Assistant Assist](/zh/power-local-llm/home-assistant-assist-review)",
            "平台": "Linux、网页、iPhone、Android",
            "价格 / 许可证": "免费 / Apache-2.0",
            "主要区别": "内置语音助手；通过 Ollama 或 OpenAI 使用 LLM 代理"
          },
          {
            "应用": "[Ollama](/zh/power-local-llm/ollama-review)",
            "平台": "Mac、Windows、Linux",
            "价格 / 许可证": "免费 / MIT",
            "主要区别": "本地模型运行器，LLM Vision 可将其用作提供方"
          }
        ],
        "note": "选择之前，请到各应用自己的页面确认当前的价格、许可证和平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "可以使用列表之外的提供方吗？",
            "a": "官网称，带有 OpenAI 兼容 API 端点的提供方也可以使用，可能需要额外配置。"
          },
          {
            "q": "有付费版或订阅吗？",
            "a": "没有列出；官网只有一个自愿的 Buy Me a Coffee 捐赠链接，集成本身免费。"
          },
          {
            "q": "在哪里获得帮助或报告 bug？",
            "a": "官网链接了 GitHub Discussions、Discord 服务器和 Home Assistant 社区帖子，并列出 [hello@llmvision.org](mailto:hello@llmvision.org) 作为联系方式。“Report a bug”链接指向独立的仪表板卡片仓库，而不是主仓库。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "LLM Vision 通过你选择的视觉模型，把 Home Assistant 的摄像头图像、视频和 Frigate 事件转成文字，采用 Apache-2.0 许可免费使用，仓库在 2026 年 9 月 17 日有更新。但它不自带模型，云端提供方会收到你的画面帧，没有给出 Home Assistant 最低版本或硬件要求，准确度和速度也未经测试。它适合能自己运行 Ollama、Open WebUI 或 LocalAI 的 Home Assistant 用户；如果要把画面帧发给云端提供方，请先阅读该提供方的条款。"
      },
      "sources": {
        "id": "sources",
        "title": "资料来源",
        "items": [
          "[LLM Vision 官网](https://llmvision.org) — 功能、提供方、隐私和安装说明，核查日期 2026 年 11 月 1 日。",
          "[Glimpse-v1 页面](https://llmvision.org/glimpse/) — 模型说明和可用性，核查日期 2026 年 11 月 1 日。",
          "[GitHub 上的 LLM Vision](https://github.com/valentinfrlch/ha-llmvision) — README、许可证、清单和提交记录，核查日期 2026 年 11 月 1 日。",
          "[GitHub 发布 v1.7.2](https://github.com/valentinfrlch/ha-llmvision/releases/tag/v1.7.2) — 2026 年 9 月 3 日的发布，核查日期 2026 年 11 月 1 日。",
          "[隐私政策](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md) — 遥测和数据处理，2026 年 2 月 15 日生效，核查日期 2026 年 11 月 1 日。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "延伸阅读",
        "items": [
          "[Home Assistant Assist 评测](/zh/power-local-llm/home-assistant-assist-review) — Home Assistant 内置的语音助手，支持 Ollama 和 OpenAI 代理。",
          "[Ollama 评测](/zh/power-local-llm/ollama-review) — LLM Vision 可用作提供方的本地模型运行器。",
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
    "theme": "Voice, Speech & Multimodal",
    "heroImage": "/images/llm-vision-review-hero-ko.webp",
    "title": "LLM Vision 리뷰: 비전 LLM으로 Home Assistant 카메라 분석",
    "seoTitle": "LLM Vision 리뷰: Home Assistant 카메라 분석",
    "intro": "LLM Vision은 카메라 이미지, 영상 클립, Frigate 이벤트를 멀티모달 언어 모델에 보내고, 알림·자동화·이벤트 타임라인에서 쓸 수 있는 텍스트 설명을 돌려주는 무료 Home Assistant 통합입니다. AI 작업은 직접 하지 않으며, 자신의 하드웨어에서 돌리는 Ollama, Open WebUI, LocalAI 또는 클라우드 서비스 중 하나를 제공업체로 연결해야 합니다. 개발자는 Valentin Fröhlich입니다. 이 리뷰는 [공식 웹사이트](https://llmvision.org), 릴리스와 개인정보 파일이 있는 [GitHub 저장소](https://github.com/valentinfrlch/ha-llmvision), 사이트의 Glimpse 모델 페이지를 바탕으로 2026년 11월 1일에 확인한 내용이며, PromptQuorum은 직접 사용해 테스트하지 않았습니다.",
    "metaDescription": "LLM Vision 리뷰: 카메라 이미지·영상·Frigate 이벤트를 비전 LLM으로 설명하는 무료 Home Assistant 통합. 로컬·클라우드 모두 가능, Apache-2.0.",
    "twitterDescription": "LLM Vision 리뷰: 내 하드웨어의 Ollama부터 클라우드 API까지, 원하는 비전 LLM으로 Home Assistant 카메라를 분석합니다. 출처가 확인한 내용과 남겨 둔 부분.",
    "audience": "카메라나 Frigate를 쓰는 Home Assistant 사용자 중 LLM Vision이 하는 일, 필요한 AI 제공업체, 이미지가 가는 곳, 출처가 확인하지 못한 주장을 알고 싶은 분.",
    "readTime": "6분 읽기",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "LLM Vision 리뷰",
    "targetKeywords": [
      "llm vision 리뷰",
      "llm vision home assistant",
      "home assistant 카메라 ai",
      "home assistant ollama 비전",
      "frigate llm 통합",
      "로컬 비전 llm 보안 카메라",
      "llmvision hacs"
    ],
    "current_models_mentioned": [
      "Glimpse-v1"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**LLM Vision(버전 1.7.2, 2026년 9월 3일 출시)은 Apache-2.0 라이선스의 무료 Home Assistant 통합으로, 이미지를 이해하는 언어 모델이 카메라 이미지, 영상, 라이브 스트림, Frigate 이벤트를 설명하게 합니다.** 모델은 포함되어 있지 않으며, 분석은 사용자가 설정한 제공업체에서 이루어집니다. 아래 모든 내용은 개발자의 사이트, GitHub 저장소, 개인정보 파일에 근거합니다.",
    "quickAnswerTop": {
      "ko": {
        "question": "LLM Vision을 쓰면 카메라 이미지가 내 네트워크 안에 머무나요?",
        "answer": "로컬 제공업체를 선택한 경우에만 그렇습니다. 통합은 설정한 제공업체로 프레임을 보냅니다. 내 하드웨어의 Ollama, Open WebUI, LocalAI라면 내부에 머물고, 클라우드 제공업체라면 해당 회사의 서버로 전송됩니다. 개인정보 파일에 따르면 통합 자체에는 텔레메트리가 없습니다.",
        "bullets": [
          "입력은 네 가지 액션으로 처리합니다: Images, Videos, Streams, 그리고 이미지로 Home Assistant 엔티티를 갱신하는 Data.",
          "내장 다운스케일러가 이미지 해상도를 낮춰 토큰 사용량과 비용을 줄입니다.",
          "결과는 Timeline Card와 Preview Card로 대시보드에 표시할 수 있습니다."
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
        "label": "LLM Vision이란?",
        "anchor": "what-is-llm-vision"
      },
      {
        "label": "구하는 방법",
        "anchor": "get-it"
      },
      {
        "label": "시작하는 방법",
        "anchor": "getting-started"
      },
      {
        "label": "출처로 확인된 기능",
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
            "text": "LLM Vision은 비전 LLM이 카메라 이미지, 영상, Frigate 이벤트를 설명하게 하는 Home Assistant 통합으로, 모델은 사용자가 고른 로컬 또는 클라우드 제공업체가 제공합니다."
          },
          {
            "type": "plain-terms",
            "text": "카메라나 Frigate가 따로 설정한 AI 모델에 이미지를 넘기면, 답이 텍스트로 돌아와 Home Assistant가 표시·저장하거나 동작에 활용할 수 있습니다."
          }
        ],
        "items": [
          "유지보수: 버전 1.7.2는 2026년 9월 3일에 출시되었고 저장소는 2026년 9월 17일에 1.8.0 베타 블루프린트로 마지막 갱신되었으므로 방치 프로젝트 경고는 해당되지 않습니다.",
          "비용: 통합은 무료이며, 클라우드 제공업체는 쿼리당 요금을 받습니다.",
          "AI: 모델은 포함되지 않으며 원하는 제공업체를 연결합니다.",
          "개인정보: 개인정보 파일은 통합에 텔레메트리가 없다고 밝힙니다. 프레임이 가는 곳은 제공업체에 따라 달라집니다(데이터 흐름과 개인정보 참조).",
          "개발자: 개인 개발자 Valentin Fröhlich로, 나열된 제공업체의 보증을 받거나 연관되어 있지 않다고 밝힙니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이 리뷰는 llmvision.org, GitHub 저장소와 개인정보 파일을 바탕으로 2026년 11월 1일에 확인한 내용입니다. PromptQuorum은 통합을 설치·실행·측정하지 않았으므로 속도, 탐지 정확도, 설명 품질은 평가하지 않았습니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-llm-vision",
        "title": "LLM Vision이란?",
        "content": [
          "**LLM Vision은 카메라, 이미지 엔티티, 영상 파일, Frigate 이벤트의 이미지를 멀티모달 언어 모델에 전달하는 Home Assistant용 커스텀 통합입니다.** 사이트는 이를 \"Visual Intelligence for your Home\"이라고 소개하며, GitHub 저장소는 2024년 5월 14일에 만들어졌습니다.",
          "독립 실행형 앱이 아니라 기존 스마트홈에 추가하는 구성 요소입니다. 작동 중인 Home Assistant, 커뮤니티 스토어 HACS, AI 제공업체가 필요합니다. 개발자는 사이트의 저작권 표기에 나온 Valentin Fröhlich이며, 저장소에는 GitHub의 다른 코드 소유자 한 명도 올라 있습니다."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "구하는 방법",
        "content": [
          "**LLM Vision은 Home Assistant 안의 HACS로 설치합니다. 별도 다운로드, 스토어 앱, 설치 프로그램은 없습니다.**"
        ],
        "columns": [
          "항목",
          "구하는 방법"
        ],
        "rows": [
          {
            "항목": "설치",
            "구하는 방법": "[GitHub의 LLM Vision](https://github.com/valentinfrlch/ha-llmvision)을 HACS로 추가한 뒤 Home Assistant 재시작"
          },
          {
            "항목": "설정",
            "구하는 방법": "기기 및 서비스에서 추가하고, 스냅샷용 /media 폴더를 준비한 다음 AI 제공업체 추가"
          },
          {
            "항목": "로컬 제공업체",
            "구하는 방법": "내 하드웨어의 Ollama, Open WebUI, LocalAI"
          },
          {
            "항목": "클라우드 제공업체",
            "구하는 방법": "OpenAI, Anthropic, Google, OpenRouter, AWS, Groq, Azure AI(쿼리당 제공업체가 과금)"
          },
          {
            "항목": "가격",
            "구하는 방법": "통합은 무료이며 Buy Me a Coffee 후원은 선택 사항"
          },
          {
            "항목": "문서",
            "구하는 방법": "[시작 가이드](https://llm-vision.gitbook.io/getting-started)"
          },
          {
            "항목": "웹사이트",
            "구하는 방법": "[llmvision.org](https://llmvision.org)"
          },
          {
            "항목": "개인정보 처리방침",
            "구하는 방법": "[GitHub의 PRIVACY.md](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md)"
          },
          {
            "항목": "소스 코드",
            "구하는 방법": "[GitHub의 Apache-2.0 라이선스](https://github.com/valentinfrlch/ha-llmvision)"
          }
        ],
        "note": "확인한 버전: 1.7.2(2026년 9월 3일, GitHub). 저장소의 통합 매니페스트는 아직 1.7.1, 웹사이트는 v1.7.0으로 표기해 둘 다 릴리스보다 뒤처져 있습니다. 저장소에는 Home Assistant 최소 버전이 명시되어 있지 않으며, Home Assistant Container 사용자는 /media 폴더를 마운트해야 할 수 있습니다."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "시작하는 방법",
        "content": [
          "**아래 단계는 개발자의 README를 따른 것이며 PromptQuorum이 직접 실행하지는 않았습니다.**"
        ],
        "numberedItems": [
          {
            "title": "통합 설치",
            "whyItMatters": "HACS에서 LLM Vision을 설치하고 Home Assistant를 재시작합니다."
          },
          {
            "title": "Home Assistant에 추가",
            "whyItMatters": "기기 및 서비스에서 LLM Vision을 검색하고 기본 설정으로 제출합니다."
          },
          {
            "title": "미디어 폴더 준비",
            "whyItMatters": "스냅샷은 /media에 저장됩니다. Home Assistant Container 사용자는 마운트해야 할 수 있습니다."
          },
          {
            "title": "AI 제공업체 추가",
            "whyItMatters": "통합 페이지로 돌아가 자신의 서버에 있는 Ollama나 클라우드 API 키 같은 제공업체 항목을 추가합니다."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "출처로 확인된 기능",
        "content": [
          "**아래 항목은 모두 개발자의 사이트나 저장소에 근거하며 독립적으로 테스트하지 않았습니다.**"
        ],
        "items": [
          "**네 가지 액션.** Images는 카메라, 이미지 엔티티, 파일을 분석하고, Videos는 영상 파일이나 Frigate 이벤트에서 프레임을 추출하며, Streams는 카메라 엔티티에서 프레임을 캡처하고, Data는 이미지를 분석해 숫자·텍스트·선택·불리언 헬퍼를 갱신합니다.",
          "**알림.** 카메라 영상과 Frigate 이벤트를 거의 실시간으로 분석하며, 결과를 알림과 자동화에 쓸 수 있습니다.",
          "**타임라인과 메모리.** \"remember\"를 켠 경우에만 이벤트가 저장됩니다. \"important\"를 켜면 이벤트가 분류되어 중요하다고 판단된 것만 보관되고 캘린더 엔티티로 표시됩니다. 이벤트를 기억하려면 Extended OpenAI Conversation 같은 대화 에이전트가 필요합니다.",
          "**이미지 파이프라인.** 사이트에 따르면 관련 프레임을 골라 추론에 맞게 최적화하며, 다운스케일러가 해상도와 토큰 사용량을 줄입니다.",
          "**Glimpse-v1.** 가정 보안 이벤트를 요약하는 개발자의 40억 매개변수 오픈 비전-언어 모델(베타)로, [Hugging Face와 Ollama 라이브러리](https://llmvision.org/glimpse/)에서 받을 수 있습니다(`ollama run llmvision/glimpse-v1`).",
          "**언어.** 영어, 독일어, 네덜란드어, 프랑스어, 스페인어, 포르투갈어, 이탈리아어, 폴란드어, 스웨덴어를 지원하며 계속 추가됩니다."
        ],
        "note": "탐지 정확도, 지연 시간, 설명 품질은 테스트하지 않았습니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "데이터 흐름과 개인정보",
        "content": [
          "**통합은 설정한 제공업체로만 이미지를 보내므로, 이미지가 가는 곳은 전적으로 그 선택에 달려 있습니다.** 내 하드웨어의 Ollama, Open WebUI, LocalAI라면 분석이 내부에 머물고, OpenAI, Anthropic, Google, OpenRouter, AWS, Groq, Azure AI라면 프레임이 해당 회사의 서버로 전송되어 그 회사의 약관이 적용됩니다.",
          "개인정보 파일(2026년 2월 15일 시행)은 Home Assistant 통합에 텔레메트리가 없다고 밝힙니다. 개발자는 사용 데이터를 받지 않고, 어떤 제공업체를 설정했는지 볼 수 없으며, Home Assistant 데이터에 접근할 수 없습니다. 계정은 필요 없고 웹사이트만 Google Analytics를 사용합니다. 사이트는 분석된 이벤트가 Home Assistant 인스턴스를 벗어나지 않는다고 덧붙이지만, 통합 매니페스트는 이를 cloud polling으로 분류합니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이는 개발자의 주장이지 감사 결과가 아니며, PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다. 이벤트에 관한 사이트의 설명은 저장된 이벤트를 가리키며 제공업체로의 호출을 가리키지 않습니다."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "이런 분께 적합합니다",
        "items": [
          "**카메라가 있는 Home Assistant 사용자**: 초인종이나 진입로 이벤트를 알림에서 텍스트 설명으로 받고 싶은 분.",
          "**Frigate 사용자**: 이벤트를 요약하고 타임라인에서 검색하고 싶은 분.",
          "**Ollama, Open WebUI, LocalAI 운영자**: 프레임을 자신의 하드웨어에서 분석하고 싶은 분."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 내용",
        "items": [
          "**성능.** 탐지 정확도, 지연 시간, 하드웨어 요구 사항, 쿼리당 비용은 테스트하지 않았으며 사이트에도 하드웨어 요구 사항이 없습니다.",
          "**완전한 로컬 운영.** 사이트와 README 모두 처음부터 끝까지 로컬로 구성하는 방법을 설명하지 않습니다. Ollama, Open WebUI, LocalAI를 제공업체로 나열하고 가장 높은 프라이버시를 원하면 로컬 제공업체를 권장합니다.",
          "**Home Assistant 버전.** 저장소에는 최소 버전이 명시되어 있지 않습니다.",
          "**Glimpse-v1 라이선스.** 사이트는 모델의 라이선스를 밝히지 않으며 하드웨어 수치도 제시하지 않습니다."
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
          "주요 차이점"
        ],
        "rows": [
          {
            "앱": "[Home Assistant Assist](/ko/power-local-llm/home-assistant-assist-review)",
            "플랫폼": "Linux, 웹, iPhone, Android",
            "가격 / 라이선스": "무료 / Apache-2.0",
            "주요 차이점": "내장 음성 비서, Ollama 또는 OpenAI로 LLM 에이전트 사용"
          },
          {
            "앱": "[Ollama](/ko/power-local-llm/ollama-review)",
            "플랫폼": "Mac, Windows, Linux",
            "가격 / 라이선스": "무료 / MIT",
            "주요 차이점": "LLM Vision이 제공업체로 쓸 수 있는 로컬 모델 실행기"
          }
        ],
        "note": "선택하기 전에 각 앱의 최신 가격, 라이선스, 플랫폼을 해당 앱의 페이지에서 확인하세요."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "목록에 없는 제공업체도 쓸 수 있나요?",
            "a": "사이트에 따르면 OpenAI 호환 API 엔드포인트를 가진 제공업체도 사용할 수 있으며, 추가 설정이 필요할 수 있습니다."
          },
          {
            "q": "유료 버전이나 구독이 있나요?",
            "a": "표기된 것이 없습니다. 사이트에는 선택 사항인 Buy Me a Coffee 후원 링크만 있고, 통합 자체는 무료입니다."
          },
          {
            "q": "도움을 받거나 버그를 신고하려면 어디로 가나요?",
            "a": "사이트는 GitHub Discussions, Discord 서버, Home Assistant 커뮤니티 글로 연결하며 연락처로 [hello@llmvision.org](mailto:hello@llmvision.org)를 안내합니다. \"Report a bug\" 링크는 메인 저장소가 아니라 별도의 대시보드 카드 저장소를 가리킵니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "결론",
        "content": "LLM Vision은 선택한 비전 모델로 Home Assistant의 카메라 이미지, 영상, Frigate 이벤트를 텍스트로 바꿔 주고, Apache-2.0 라이선스로 무료이며, 저장소는 2026년 9월 17일에 갱신되었습니다. 반면 자체 모델이 없고, 클라우드 제공업체는 프레임을 받으며, Home Assistant 최소 버전이나 하드웨어 요구 사항이 명시되어 있지 않고, 정확도와 속도는 테스트되지 않았습니다. Ollama, Open WebUI, LocalAI를 직접 운영할 수 있는 Home Assistant 사용자에게 적합하며, 클라우드 제공업체로 프레임을 보내려면 먼저 해당 업체의 약관을 읽어 보세요."
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[LLM Vision 웹사이트](https://llmvision.org) — 기능, 제공업체, 개인정보, 설치 안내. 2026년 11월 1일 확인.",
          "[Glimpse-v1 페이지](https://llmvision.org/glimpse/) — 모델 설명과 제공 여부. 2026년 11월 1일 확인.",
          "[GitHub의 LLM Vision](https://github.com/valentinfrlch/ha-llmvision) — README, 라이선스, 매니페스트, 커밋. 2026년 11월 1일 확인.",
          "[GitHub 릴리스 v1.7.2](https://github.com/valentinfrlch/ha-llmvision/releases/tag/v1.7.2) — 2026년 9월 3일 릴리스. 2026년 11월 1일 확인.",
          "[개인정보 처리방침](https://github.com/valentinfrlch/ha-llmvision/blob/main/PRIVACY.md) — 텔레메트리와 데이터 처리. 2026년 2월 15일 시행, 2026년 11월 1일 확인."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[Home Assistant Assist 리뷰](/ko/power-local-llm/home-assistant-assist-review) — Ollama와 OpenAI 에이전트를 쓸 수 있는 Home Assistant 내장 음성 비서.",
          "[Ollama 리뷰](/ko/power-local-llm/ollama-review) — LLM Vision이 제공업체로 쓸 수 있는 로컬 모델 실행기.",
          "[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구의 전체 카탈로그."
        ]
      }
    }
  },
}
