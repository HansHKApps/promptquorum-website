// LastBrowser Review: Free AI Browser With a Local-Ollama Sidekick
// Slug: lastbrowser-review
// Companion to: sidekick-review (a different, macOS-only product), page-assist-review (local-llms cluster)
// Sources: lastbrowser.com (home, download, features, enterprise, privacy, imprint), github.com/Loggableim/lastbrowser (Releases v0.1.60 of 2026-10-26),
// all checked 2026-11-06 — no hands-on testing.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/lastbrowser-review-hero-en.webp",
    "title": "LastBrowser Review: Free AI Browser With a Local Ollama Sidekick",
    "seoTitle": "LastBrowser Review: AI Browser With Ollama Sidekick",
    "intro": "LastBrowser is a free desktop web browser for Windows, with a Linux preview, that has an AI assistant called Sidekick built into its sidebar. Sidekick can use a local Ollama model on your own machine or a cloud AI provider you configure with your own credentials. The project is very new: the public repository was created in September 2026 and the current release is a beta. This review covers what you download, where your data goes, the licence terms and what the sources leave unconfirmed.",
    "metaDescription": "LastBrowser review: a free Windows browser (Linux preview) with a built-in Sidekick AI sidebar that works with local Ollama models. Licence, privacy, risks.",
    "twitterDescription": "LastBrowser review: free Windows AI browser with a Sidekick sidebar that can use local Ollama models. Beta status, licence terms and what the sources do not confirm.",
    "audience": "Windows and Linux users who want to know whether LastBrowser and its Sidekick assistant can run on a local Ollama model, what it costs and which claims the sources leave open.",
    "readTime": "6 min read",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "LastBrowser review",
    "targetKeywords": [
      "lastbrowser review",
      "lastbrowser sidekick",
      "ai browser ollama",
      "local ai browser windows",
      "ai browser sidebar local model",
      "lastbrowser privacy",
      "open source ai browser"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**LastBrowser (version 0.1.60 beta, released on 26 October 2026) is a free desktop browser for Windows 10 and 11, with a Linux preview build, that includes the Sidekick AI sidebar, which can use a local Ollama model or a cloud provider you configure.** The decisive caveat is that Sidekick sends the task context, such as selected tab content, to whichever provider you choose, so only a local Ollama setup keeps that data on your machine.",
    "quickAnswerTop": {
      "en": {
        "question": "Can LastBrowser's Sidekick run on a local Ollama model?",
        "answer": "Yes, per the maker: the website says you can use local Ollama models, and the privacy policy says inference with Ollama on your own machine stays local. A remote Ollama endpoint, Ollama Cloud or any external provider can process requests outside your computer.",
        "bullets": [
          "Ollama and a model are a separate installation; the browser does not bundle one.",
          "The features page lists built-in on-device inference as not yet released.",
          "Free for personal use, education and research; commercial use in companies needs a paid licence, and no prices are published."
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
        "label": "What Is LastBrowser?",
        "anchor": "what-is-lastbrowser"
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
            "text": "LastBrowser is a free desktop browser for Windows, with a Linux preview, that has a built-in Sidekick AI sidebar which can use local Ollama models."
          },
          {
            "type": "plain-terms",
            "text": "You browse in a normal desktop browser and ask an AI assistant in the sidebar about what you are reading, using either a model running on your own computer through Ollama or a cloud AI service you set up yourself."
          }
        ],
        "items": [
          "Maintenance: version 0.1.60 was released on 26 October 2026 and the repository was updated on 3 November 2026, so no stale-project warning applies; the project is young, with beta releases.",
          "Cost: free for personal use, education and research; commercial use needs a paid licence, and the sources publish no prices.",
          "Platforms: Windows 10 and 11 (64-bit) as the main target, Linux x64 as a preview, no macOS version.",
          "AI: bring your own provider credentials or use local Ollama models; the on-device model that would ship inside the browser is not yet released.",
          "Privacy: no account and no telemetry code according to the maker; selected tab content goes to the provider you pick."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "This review is based on lastbrowser.com, its privacy policy and imprint, and the GitHub releases and repository data, checked on 6 November 2026. PromptQuorum has not installed, run or benchmarked the app, so speed, stability and answer quality are not assessed. LastBrowser's Sidekick is unrelated to the macOS app Sidekick reviewed elsewhere on this site."
          }
        ]
      },
      "overview": {
        "id": "what-is-lastbrowser",
        "title": "What Is LastBrowser?",
        "content": [
          "**LastBrowser is an Electron-based desktop browser with an AI assistant, Sidekick, integrated as a sidebar rather than added as an extension.** The GitHub repository describes it as a Windows desktop browser built with Electron, React and TypeScript plus a local Python backend that runs Sidekick; the README calls it Windows-first.",
          "The maker presents Sidekick with three personas (pragmatic, researching and developer), a terminal feature and workspaces called Spaces, and lists a comparison against Chrome, Edge, Brave and Arc; those comparisons are marketing claims that PromptQuorum has not verified. The project is published as \"LastBrowser Project\" and the repository was created on 18 September 2026."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Get It",
        "content": [
          "**LastBrowser is a free download for Windows, with a Linux preview build; the files are hosted on GitHub Releases and linked from the download page.**"
        ],
        "columns": [
          "Option",
          "How to get it"
        ],
        "rows": [
          {
            "Option": "Windows",
            "How to get it": "[LastBrowser downloads](https://lastbrowser.com/download/), x64 Setup installer or portable .exe"
          },
          {
            "Option": "Linux (preview)",
            "How to get it": "[LastBrowser on GitHub Releases](https://github.com/Loggableim/lastbrowser/releases/latest), x86_64 AppImage or .tar.gz"
          },
          {
            "Option": "Mac",
            "How to get it": "Not available; the site says a version is being developed"
          },
          {
            "Option": "Phone",
            "How to get it": "No mobile version is listed"
          },
          {
            "Option": "Price",
            "How to get it": "Free for personal use, education and research; paid licence for commercial use"
          },
          {
            "Option": "Website",
            "How to get it": "[lastbrowser.com](https://lastbrowser.com)"
          },
          {
            "Option": "Privacy policy",
            "How to get it": "[Privacy policy](https://lastbrowser.com/privacy/)"
          },
          {
            "Option": "Source code",
            "How to get it": "[GitHub, GPL-3.0](https://github.com/Loggableim/lastbrowser)"
          }
        ],
        "note": "Version reviewed: 0.1.60 beta (26 October 2026). The release notes say the Windows installer and portable build are signed with a Certum certificate and list checksums in a SHA256SUMS file; the Linux build is new in this release. The download page also explains how to proceed if Windows SmartScreen warns about a new release."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requirements",
        "content": [
          "**The sources give no minimum RAM, disk or CPU figures for the browser itself.**"
        ],
        "columns": [
          "Item",
          "What the sources say"
        ],
        "rows": [
          {
            "Item": "Windows",
            "What the sources say": "Windows 10 and 11, 64-bit; Setup installer (about 320 MB) or portable .exe"
          },
          {
            "Item": "Linux",
            "What the sources say": "x86_64 AppImage or tar.gz, labelled preview; run `chmod +x` on the AppImage, then start it"
          },
          {
            "Item": "Local AI",
            "What the sources say": "A separate Ollama installation and a model you choose; no model size or hardware figures are given"
          },
          {
            "Item": "Account",
            "What the sources say": "None; the site states no account and no registration"
          }
        ],
        "note": "Hardware needs for local answers depend on the Ollama model you pick, not on the browser."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "How to Get Started",
        "content": [
          "**The steps follow the maker's pages; PromptQuorum has not run them.**"
        ],
        "numberedItems": [
          {
            "title": "Install the browser",
            "whyItMatters": "Download the Windows Setup or portable build from the download page, or the Linux AppImage, and verify it against the published checksums if you want to."
          },
          {
            "title": "Install Ollama and a model",
            "whyItMatters": "For local answers, install Ollama separately and pull a model; the browser does not include one."
          },
          {
            "title": "Choose a provider in Sidekick",
            "whyItMatters": "Point Sidekick at your local Ollama endpoint, or enter credentials for a cloud provider if you accept that task context leaves your machine."
          },
          {
            "title": "Keep an eye on updates",
            "whyItMatters": "The download page describes automatic background updates for the Setup installer, and releases arrive every few days at this stage."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Confirmed by the Sources",
        "content": [
          "**Every item below comes from the maker's site, release notes or repository; none has been independently tested.**"
        ],
        "items": [
          "**Sidekick sidebar.** An AI assistant built into the browser, with selectable personas and configurable AI providers or local Ollama models.",
          "**No account.** The site and privacy policy state there is no registration, no sync service and no central profile storage.",
          "**Local profile data.** Browsing history, tabs and saved passwords are stored on the PC in the LastBrowser folder under AppData, protected with Windows DPAPI according to the site.",
          "**Open source.** The source code is public on GitHub under GPL-3.0.",
          "**Frequent releases.** Versions 0.1.55 to 0.1.60 appeared between 12 and 26 October 2026."
        ],
        "note": "The features page says local inference built into the browser is not yet released and that downloading a model does not by itself mean usable inference; this is separate from using Ollama."
      },
      "privacy": {
        "id": "privacy",
        "title": "Data Flow and Privacy",
        "content": [
          "**The maker states that the browser contains no Google Analytics code, tracking pixels or advertising IDs, and that no IP addresses or hardware fingerprints are sent to its servers.** There is no account, and the privacy policy says LastBrowser runs no central service for synchronising profiles. Profiles, browser history and API keys are stored locally, with the keys encrypted through Windows DPAPI according to the download page FAQ.",
          "The privacy policy says inference with Ollama on your own machine is local. A remotely reachable Ollama endpoint or a cloud model can process requests outside your computer. For Ollama Cloud and external AI providers, your requests and the context provided for the task, such as selected tab content, are sent to the provider you chose, and a deletion in LastBrowser does not undo what a provider has already received. The policy states plainly that a cloud connection is not offline processing."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "These are the maker's statements, not audit results, and PromptQuorum has not inspected network traffic. The privacy policy shows no last-updated date and does not mention update checks, although the download page describes automatic background updates."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**Windows users with Ollama** who want an AI assistant inside the browser instead of a separate chat window.",
          "**Open-source followers** who want a public GPL-3.0 codebase and are happy to follow a fast-moving beta.",
          "**Early adopters** who accept that a project created in September 2026 may change quickly."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Performance and stability.** Speed, memory use, crashes and Sidekick answer quality with local models are untested.",
          "**Default page access.** The privacy policy says selected tab content is sent to the chosen provider; how much of a page Sidekick can read by default was not tested.",
          "**Linux.** The Linux build is a preview that first appeared in version 0.1.60; it was not run.",
          "**Licence terms.** The source is GPL-3.0, while commercial use needs a paid licence; the sources we read do not explain how the two fit together, and no prices are published.",
          "**Operator details.** The imprint lists \"LastBrowser Project\" with a contact person and no street address, legal form or register number.",
          "**Browser security.** Update speed for Chromium security fixes and the effect of the early beta status were not assessed."
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
            "App": "[Page Assist](/local-llms/page-assist-review)",
            "Platforms": "Chrome and Firefox extension",
            "Price / license": "Free / MIT",
            "Key difference": "Sidebar extension for the browser you already use; works with Ollama"
          },
          {
            "App": "[Sidekick for macOS](/power-local-llm/sidekick-review)",
            "Platforms": "Mac (Apple silicon)",
            "Price / license": "Free / MIT",
            "Key difference": "Unrelated native macOS chat app with built-in local inference; not a browser"
          }
        ],
        "note": "Confirm each app's current price, license and platforms on its own page before choosing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "Does LastBrowser work on Linux?",
            "a": "A Linux x86_64 build (AppImage and tar.gz) is offered as a preview and first appeared in version 0.1.60 on 26 October 2026. The main target is Windows 10 and 11, and there is no macOS version yet."
          },
          {
            "q": "Is LastBrowser free for commercial use?",
            "a": "No. The site says LastBrowser is free for personal use, education and research, and that commercial use in companies needs a paid licence. No prices are published; the enterprise page points to contacting the project."
          },
          {
            "q": "Is LastBrowser's Sidekick the same as the macOS app Sidekick?",
            "a": "No. They are unrelated products with the same name. LastBrowser's Sidekick is a sidebar assistant inside a Windows browser; the macOS Sidekick is a native chat app with built-in local inference."
          },
          {
            "q": "Does Sidekick send my browsing data to the cloud?",
            "a": "Only if you pick a cloud or remote provider. The privacy policy says requests and task context, such as selected tab content, go to that provider; with Ollama on your own machine inference stays local."
          },
          {
            "q": "How often is LastBrowser released?",
            "a": "The GitHub releases show versions 0.1.55 on 12 October, 0.1.56 on 13 October, 0.1.58 on 17 October, 0.1.59 on 22 October and 0.1.60 on 26 October 2026, so releases arrive every few days."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "LastBrowser offers a free desktop browser for Windows with a Linux preview and a built-in Sidekick sidebar that can use local Ollama models, an open GPL-3.0 codebase and no account. Against that, the project is only weeks old and in beta, the Linux build is a preview, commercial use needs a paid licence with unpublished prices, the privacy policy sends task context to any cloud provider you pick, and speed, stability and answer quality are untested. It suits Windows users who already run Ollama and want to try an AI browser; anyone who needs a mature, audited browser should treat the documentation as a declaration, not proof."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[LastBrowser website](https://lastbrowser.com) — features, platforms, price and Sidekick summary, checked 6 November 2026.",
          "[LastBrowser download page](https://lastbrowser.com/download/) — builds, version, signing and FAQ, checked 6 November 2026.",
          "[LastBrowser privacy policy](https://lastbrowser.com/privacy/) — telemetry statement and data flow per provider type, checked 6 November 2026.",
          "[LastBrowser features page](https://lastbrowser.com/features/) — Ollama support and status of built-in local inference, checked 6 November 2026.",
          "[LastBrowser enterprise page](https://lastbrowser.com/enterprise/) — community and commercial plans, checked 6 November 2026.",
          "[LastBrowser imprint](https://lastbrowser.com/imprint/) — operator details and licence statement, checked 6 November 2026.",
          "[LastBrowser on GitHub](https://github.com/Loggableim/lastbrowser) — releases, assets, release notes and licence, checked 6 November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[Page Assist Review](/local-llms/page-assist-review) — a browser-extension sidebar that works with Ollama.",
          "[Sidekick Review](/power-local-llm/sidekick-review) — an unrelated, native macOS app for chatting with a local LLM.",
          "[Local LLM Software Directory](/directory) — the full catalogue of local AI tools."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "LastBrowser Review: Free AI Browser With a Local Ollama Sidekick",
      "description": "LastBrowser review: a free Windows desktop browser (Linux preview) with a built-in Sidekick AI sidebar that works with local Ollama models or cloud providers. Licence, privacy and what the sources leave unconfirmed.",
      "url": "https://www.promptquorum.com/power-local-llm/lastbrowser-review",
      "inLanguage": "en",
      "datePublished": "2026-11-06",
      "dateModified": "2026-11-06",
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
        "audienceType": "Windows and Linux users evaluating a free AI browser with optional local Ollama models"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "LastBrowser"
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
          "name": "Local AI"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/power-local-llm/lastbrowser-review"
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
          "name": "LastBrowser Review",
          "item": "https://www.promptquorum.com/power-local-llm/lastbrowser-review"
        }
      ]
    }
  },
  de: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/lastbrowser-review-hero-de.webp",
    "title": "LastBrowser-Rezension: Kostenloser KI-Browser mit lokalem Ollama-Sidekick",
    "seoTitle": "LastBrowser-Rezension: KI-Browser mit Ollama-Sidekick",
    "intro": "LastBrowser ist ein kostenloser Desktop-Webbrowser für Windows, mit einer Linux-Vorschau, der einen KI-Assistenten namens Sidekick in der Seitenleiste mitbringt. Sidekick kann ein lokales Ollama-Modell auf Ihrem eigenen Rechner nutzen oder einen Cloud-KI-Anbieter, den Sie mit Ihren eigenen Zugangsdaten einrichten. Das Projekt ist sehr neu: Das öffentliche Repository wurde im September 2026 angelegt, und die aktuelle Version ist eine Beta. Diese Rezension behandelt, was Sie herunterladen, wohin Ihre Daten gehen, welche Lizenzbedingungen gelten und was die Quellen offenlassen.",
    "metaDescription": "LastBrowser-Rezension: kostenloser Windows-Browser (Linux-Vorschau) mit Sidekick-KI-Seitenleiste für lokale Ollama-Modelle. Lizenz, Datenschutz, Risiken.",
    "twitterDescription": "LastBrowser-Rezension: kostenloser Windows-KI-Browser mit Sidekick-Seitenleiste, die lokale Ollama-Modelle nutzen kann. Beta-Status, Lizenzbedingungen und was die Quellen nicht bestätigen.",
    "audience": "Windows- und Linux-Nutzer, die wissen wollen, ob LastBrowser und sein Sidekick-Assistent mit einem lokalen Ollama-Modell laufen können, was es kostet und welche Aussagen die Quellen offenlassen.",
    "readTime": "6 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "LastBrowser Rezension",
    "targetKeywords": [
      "lastbrowser rezension",
      "lastbrowser sidekick",
      "ki browser ollama",
      "lokaler ki browser windows",
      "ki browser seitenleiste lokales modell",
      "lastbrowser datenschutz",
      "quelloffener ki browser"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**LastBrowser (Version 0.1.60 Beta, veröffentlicht am 26. Oktober 2026) ist ein kostenloser Desktop-Browser für Windows 10 und 11, mit einem Linux-Vorschau-Build, der die KI-Seitenleiste Sidekick enthält, die ein lokales Ollama-Modell oder einen von Ihnen eingerichteten Cloud-Anbieter nutzen kann.** Der entscheidende Vorbehalt: Sidekick sendet den Aufgabenkontext, etwa ausgewählte Tab-Inhalte, an den Anbieter Ihrer Wahl, daher hält nur ein lokales Ollama-Setup diese Daten auf Ihrem Rechner.",
    "quickAnswerTop": {
      "de": {
        "question": "Kann Sidekick von LastBrowser mit einem lokalen Ollama-Modell laufen?",
        "answer": "Ja, laut Hersteller: Die Website sagt, dass Sie lokale Ollama-Modelle nutzen können, und die Datenschutzerklärung besagt, dass die Inferenz mit Ollama auf Ihrem eigenen Rechner lokal bleibt. Ein entfernter Ollama-Endpunkt, Ollama Cloud oder ein externer Anbieter kann Anfragen außerhalb Ihres Computers verarbeiten.",
        "bullets": [
          "Ollama und ein Modell sind eine separate Installation; der Browser bringt keines mit.",
          "Die Funktionsseite führt die eingebaute Inferenz auf dem Gerät als noch nicht veröffentlicht auf.",
          "Kostenlos für private Nutzung, Ausbildung und Forschung; für die gewerbliche Nutzung in Unternehmen ist eine kostenpflichtige Lizenz nötig, und Preise sind nicht veröffentlicht."
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
        "label": "Was ist LastBrowser?",
        "anchor": "what-is-lastbrowser"
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
            "text": "LastBrowser ist ein kostenloser Desktop-Browser für Windows, mit einer Linux-Vorschau, der eine eingebaute KI-Seitenleiste namens Sidekick hat, die lokale Ollama-Modelle nutzen kann."
          },
          {
            "type": "plain-terms",
            "text": "Sie surfen in einem normalen Desktop-Browser und fragen in der Seitenleiste einen KI-Assistenten zu dem, was Sie gerade lesen, entweder mit einem Modell auf Ihrem eigenen Computer über Ollama oder mit einem Cloud-KI-Dienst, den Sie selbst einrichten."
          }
        ],
        "items": [
          "Pflege: Version 0.1.60 erschien am 26. Oktober 2026 und das Repository wurde am 3. November 2026 aktualisiert; eine Warnung vor veralteten Projekten entfällt, das Projekt ist jedoch jung und liefert Beta-Versionen.",
          "Kosten: kostenlos für private Nutzung, Ausbildung und Forschung; die gewerbliche Nutzung braucht eine kostenpflichtige Lizenz, und die Quellen nennen keine Preise.",
          "Plattformen: Windows 10 und 11 (64 Bit) als Hauptziel, Linux x64 als Vorschau, keine macOS-Version.",
          "KI: eigene Zugangsdaten eines Anbieters mitbringen oder lokale Ollama-Modelle nutzen; das Modell auf dem Gerät, das im Browser mitgeliefert würde, ist noch nicht veröffentlicht.",
          "Datenschutz: laut Hersteller kein Konto und kein Telemetrie-Code; ausgewählte Tab-Inhalte gehen an den Anbieter, den Sie wählen."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Diese Rezension stützt sich auf lastbrowser.com, die Datenschutzerklärung und das Impressum sowie die GitHub-Releases und Repository-Daten, geprüft am 6. November 2026. PromptQuorum hat die App weder installiert noch ausgeführt oder gemessen; Geschwindigkeit, Stabilität und Antwortqualität werden daher nicht bewertet. Sidekick von LastBrowser hat nichts mit der macOS-App Sidekick zu tun, die an anderer Stelle auf dieser Website rezensiert wird."
          }
        ]
      },
      "overview": {
        "id": "what-is-lastbrowser",
        "title": "Was ist LastBrowser?",
        "content": [
          "**LastBrowser ist ein Electron-basierter Desktop-Browser mit einem KI-Assistenten, Sidekick, der als Seitenleiste integriert ist und nicht als Erweiterung hinzukommt.** Das GitHub-Repository beschreibt ihn als Windows-Desktop-Browser, gebaut mit Electron, React und TypeScript sowie einem lokalen Python-Backend, auf dem Sidekick läuft; die README nennt ihn Windows-first.",
          "Der Hersteller stellt Sidekick mit drei Personas (pragmatisch, recherchierend und Entwickler), einer Terminal-Funktion und Arbeitsbereichen namens Spaces vor und führt einen Vergleich mit Chrome, Edge, Brave und Arc auf; diese Vergleiche sind Marketingaussagen, die PromptQuorum nicht überprüft hat. Das Projekt wird als \"LastBrowser Project\" veröffentlicht, und das Repository wurde am 18. September 2026 angelegt."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Bezugsquelle",
        "content": [
          "**LastBrowser ist ein kostenloser Download für Windows, mit einem Linux-Vorschau-Build; die Dateien liegen auf GitHub Releases und sind von der Download-Seite verlinkt.**"
        ],
        "columns": [
          "Option",
          "Bezug"
        ],
        "rows": [
          {
            "Option": "Windows",
            "Bezug": "[LastBrowser-Downloads](https://lastbrowser.com/download/), x64-Setup-Installer oder portable .exe"
          },
          {
            "Option": "Linux (Vorschau)",
            "Bezug": "[LastBrowser auf GitHub Releases](https://github.com/Loggableim/lastbrowser/releases/latest), x86_64-AppImage oder .tar.gz"
          },
          {
            "Option": "Mac",
            "Bezug": "Nicht verfügbar; die Website sagt, dass eine Version in Entwicklung ist"
          },
          {
            "Option": "Handy",
            "Bezug": "Es ist keine mobile Version aufgeführt"
          },
          {
            "Option": "Preis",
            "Bezug": "Kostenlos für private Nutzung, Ausbildung und Forschung; kostenpflichtige Lizenz für die gewerbliche Nutzung"
          },
          {
            "Option": "Website",
            "Bezug": "[lastbrowser.com](https://lastbrowser.com)"
          },
          {
            "Option": "Datenschutzerklärung",
            "Bezug": "[Datenschutzerklärung](https://lastbrowser.com/privacy/)"
          },
          {
            "Option": "Quellcode",
            "Bezug": "[GitHub, GPL-3.0](https://github.com/Loggableim/lastbrowser)"
          }
        ],
        "note": "Geprüfte Version: 0.1.60 Beta (26. Oktober 2026). Die Release-Hinweise sagen, dass der Windows-Installer und die portable Version mit einem Certum-Zertifikat signiert sind und Prüfsummen in einer SHA256SUMS-Datei aufgeführt werden; der Linux-Build ist in diesem Release neu. Die Download-Seite erklärt auch, wie Sie vorgehen, wenn Windows SmartScreen vor einem neuen Release warnt."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Anforderungen",
        "content": [
          "**Die Quellen nennen keine Mindestangaben zu RAM, Speicherplatz oder CPU für den Browser selbst.**"
        ],
        "columns": [
          "Punkt",
          "Was die Quellen sagen"
        ],
        "rows": [
          {
            "Punkt": "Windows",
            "Was die Quellen sagen": "Windows 10 und 11, 64 Bit; Setup-Installer (etwa 320 MB) oder portable .exe"
          },
          {
            "Punkt": "Linux",
            "Was die Quellen sagen": "x86_64-AppImage oder tar.gz, als Vorschau gekennzeichnet; führen Sie `chmod +x` auf dem AppImage aus und starten Sie es dann"
          },
          {
            "Punkt": "Lokale KI",
            "Was die Quellen sagen": "Eine separate Ollama-Installation und ein Modell Ihrer Wahl; Angaben zu Modellgröße oder Hardware fehlen"
          },
          {
            "Punkt": "Konto",
            "Was die Quellen sagen": "Keines; die Website gibt an, dass kein Konto und keine Registrierung nötig sind"
          }
        ],
        "note": "Der Hardwarebedarf für lokale Antworten hängt vom gewählten Ollama-Modell ab, nicht vom Browser."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "So gelingt der Einstieg",
        "content": [
          "**Die Schritte folgen den Seiten des Herstellers; PromptQuorum hat sie nicht ausgeführt.**"
        ],
        "numberedItems": [
          {
            "title": "Browser installieren",
            "whyItMatters": "Laden Sie das Windows-Setup oder die portable Version von der Download-Seite oder das Linux-AppImage herunter und prüfen Sie es bei Bedarf anhand der veröffentlichten Prüfsummen."
          },
          {
            "title": "Ollama und ein Modell installieren",
            "whyItMatters": "Für lokale Antworten installieren Sie Ollama separat und laden ein Modell; der Browser enthält keines."
          },
          {
            "title": "In Sidekick einen Anbieter wählen",
            "whyItMatters": "Richten Sie Sidekick auf Ihren lokalen Ollama-Endpunkt oder geben Sie Zugangsdaten für einen Cloud-Anbieter ein, wenn Sie akzeptieren, dass der Aufgabenkontext Ihren Rechner verlässt."
          },
          {
            "title": "Updates im Blick behalten",
            "whyItMatters": "Die Download-Seite beschreibt automatische Hintergrund-Updates für den Setup-Installer, und in diesem Stadium erscheinen alle paar Tage neue Releases."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Von den Quellen bestätigte Funktionen",
        "content": [
          "**Alle folgenden Punkte stammen von der Website, den Release-Hinweisen oder dem Repository des Herstellers; keiner wurde unabhängig getestet.**"
        ],
        "items": [
          "**Sidekick-Seitenleiste.** Ein in den Browser eingebauter KI-Assistent mit wählbaren Personas und konfigurierbaren KI-Anbietern oder lokalen Ollama-Modellen.",
          "**Kein Konto.** Die Website und die Datenschutzerklärung geben an, dass es keine Registrierung, keinen Sync-Dienst und keine zentrale Profilspeicherung gibt.",
          "**Lokale Profildaten.** Browserverlauf, Tabs und gespeicherte Passwörter liegen laut Website auf dem PC im LastBrowser-Ordner unter AppData und sind mit Windows DPAPI geschützt.",
          "**Quelloffen.** Der Quellcode ist auf GitHub unter GPL-3.0 öffentlich.",
          "**Häufige Releases.** Die Versionen 0.1.55 bis 0.1.60 erschienen zwischen dem 12. und 26. Oktober 2026."
        ],
        "note": "Die Funktionsseite sagt, dass die im Browser eingebaute lokale Inferenz noch nicht veröffentlicht ist und dass das Herunterladen eines Modells für sich genommen keine nutzbare Inferenz bedeutet; das ist von der Nutzung von Ollama getrennt."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenfluss und Datenschutz",
        "content": [
          "**Der Hersteller gibt an, dass der Browser keinen Google-Analytics-Code, keine Tracking-Pixel und keine Werbe-IDs enthält und dass keine IP-Adressen oder Hardware-Fingerabdrücke an seine Server gesendet werden.** Es gibt kein Konto, und die Datenschutzerklärung sagt, dass LastBrowser keinen zentralen Dienst zur Synchronisierung von Profilen betreibt. Profile, Browserverlauf und API-Schlüssel liegen lokal, wobei die Schlüssel laut FAQ der Download-Seite über Windows DPAPI verschlüsselt sind.",
          "Die Datenschutzerklärung besagt, dass die Inferenz mit Ollama auf Ihrem eigenen Rechner lokal ist. Ein von außen erreichbarer Ollama-Endpunkt oder ein Cloud-Modell kann Anfragen außerhalb Ihres Computers verarbeiten. Bei Ollama Cloud und externen KI-Anbietern werden Ihre Anfragen und der für die Aufgabe bereitgestellte Kontext, etwa ausgewählte Tab-Inhalte, an den von Ihnen gewählten Anbieter gesendet, und ein Löschen in LastBrowser macht nicht rückgängig, was ein Anbieter bereits erhalten hat. Die Erklärung hält ausdrücklich fest, dass eine Cloud-Verbindung keine Offline-Verarbeitung ist."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Das sind Aussagen des Herstellers, keine Prüfergebnisse, und PromptQuorum hat den Netzwerkverkehr nicht untersucht. Die Datenschutzerklärung nennt kein Datum der letzten Aktualisierung und erwähnt keine Update-Prüfungen, obwohl die Download-Seite automatische Hintergrund-Updates beschreibt."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen sich die App eignet",
        "items": [
          "**Windows-Nutzer mit Ollama**, die einen KI-Assistenten im Browser statt in einem separaten Chatfenster wollen.",
          "**Open-Source-Interessierte**, die eine öffentliche GPL-3.0-Codebasis wollen und gern eine schnell wachsende Beta verfolgen.",
          "**Early Adopters**, die akzeptieren, dass sich ein im September 2026 angelegtes Projekt schnell ändern kann."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht überprüfen konnten",
        "items": [
          "**Leistung und Stabilität.** Geschwindigkeit, Speicherverbrauch, Abstürze und die Qualität der Sidekick-Antworten mit lokalen Modellen sind ungetestet.",
          "**Standardzugriff auf Seiten.** Die Datenschutzerklärung sagt, dass ausgewählte Tab-Inhalte an den gewählten Anbieter gesendet werden; wie viel einer Seite Sidekick standardmäßig lesen kann, wurde nicht getestet.",
          "**Linux.** Der Linux-Build ist eine Vorschau, die erstmals in Version 0.1.60 erschien; er wurde nicht ausgeführt.",
          "**Lizenzbedingungen.** Der Quellcode steht unter GPL-3.0, während die gewerbliche Nutzung eine kostenpflichtige Lizenz braucht; die von uns gelesenen Quellen erklären nicht, wie beides zusammenpasst, und Preise sind nicht veröffentlicht.",
          "**Angaben zum Betreiber.** Das Impressum nennt \"LastBrowser Project\" mit einer Kontaktperson, aber ohne Straßenadresse, Rechtsform oder Registernummer.",
          "**Browsersicherheit.** Die Geschwindigkeit von Chromium-Sicherheitsupdates und die Folgen des frühen Beta-Status wurden nicht bewertet."
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
            "App": "[Page Assist](/de/local-llms/page-assist-review)",
            "Plattformen": "Chrome- und Firefox-Erweiterung",
            "Preis / Lizenz": "Gratis / MIT",
            "Hauptunterschied": "Seitenleisten-Erweiterung für den Browser, den Sie schon nutzen; funktioniert mit Ollama"
          },
          {
            "App": "[Sidekick für macOS](/de/power-local-llm/sidekick-review)",
            "Plattformen": "Mac (Apple Silicon)",
            "Preis / Lizenz": "Gratis / MIT",
            "Hauptunterschied": "Unabhängige native macOS-Chat-App mit eingebauter lokaler Inferenz; kein Browser"
          }
        ],
        "note": "Prüfen Sie Preis, Lizenz und Plattformen jeder App vor der Entscheidung auf deren eigener Seite."
      },
      "faq": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Läuft LastBrowser unter Linux?",
            "a": "Ein Linux-x86_64-Build (AppImage und tar.gz) wird als Vorschau angeboten und erschien erstmals in Version 0.1.60 am 26. Oktober 2026. Das Hauptziel sind Windows 10 und 11, und eine macOS-Version gibt es noch nicht."
          },
          {
            "q": "Ist LastBrowser für die gewerbliche Nutzung kostenlos?",
            "a": "Nein. Die Website sagt, dass LastBrowser für private Nutzung, Ausbildung und Forschung kostenlos ist und die gewerbliche Nutzung in Unternehmen eine kostenpflichtige Lizenz braucht. Preise sind nicht veröffentlicht; die Enterprise-Seite verweist auf die Kontaktaufnahme mit dem Projekt."
          },
          {
            "q": "Ist Sidekick von LastBrowser dasselbe wie die macOS-App Sidekick?",
            "a": "Nein. Es sind unabhängige Produkte mit demselben Namen. Sidekick von LastBrowser ist ein Seitenleisten-Assistent in einem Windows-Browser; das macOS-Sidekick ist eine native Chat-App mit eingebauter lokaler Inferenz."
          },
          {
            "q": "Sendet Sidekick meine Browserdaten in die Cloud?",
            "a": "Nur, wenn Sie einen Cloud- oder Remote-Anbieter wählen. Die Datenschutzerklärung sagt, dass Anfragen und Aufgabenkontext, etwa ausgewählte Tab-Inhalte, an diesen Anbieter gehen; mit Ollama auf Ihrem eigenen Rechner bleibt die Inferenz lokal."
          },
          {
            "q": "Wie oft erscheint LastBrowser?",
            "a": "Die GitHub-Releases zeigen die Versionen 0.1.55 am 12. Oktober, 0.1.56 am 13. Oktober, 0.1.58 am 17. Oktober, 0.1.59 am 22. Oktober und 0.1.60 am 26. Oktober 2026, also erscheinen Releases alle paar Tage."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "LastBrowser bietet einen kostenlosen Desktop-Browser für Windows mit Linux-Vorschau und eingebauter Sidekick-Seitenleiste, die lokale Ollama-Modelle nutzen kann, dazu eine offene GPL-3.0-Codebasis und kein Konto. Dagegen ist das Projekt erst wenige Wochen alt und in der Beta, der Linux-Build ist eine Vorschau, die gewerbliche Nutzung braucht eine kostenpflichtige Lizenz mit unveröffentlichten Preisen, die Datenschutzerklärung schickt den Aufgabenkontext an jeden Cloud-Anbieter, den Sie wählen, und Geschwindigkeit, Stabilität und Antwortqualität sind ungetestet. Die App passt zu Windows-Nutzern, die bereits Ollama betreiben und einen KI-Browser ausprobieren wollen; wer einen ausgereiften, geprüften Browser braucht, sollte die Dokumentation als Aussage, nicht als Beweis lesen."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[LastBrowser-Website](https://lastbrowser.com) — Funktionen, Plattformen, Preis und Sidekick-Überblick, geprüft am 6. November 2026.",
          "[LastBrowser-Download-Seite](https://lastbrowser.com/download/) — Builds, Version, Signierung und FAQ, geprüft am 6. November 2026.",
          "[LastBrowser-Datenschutzerklärung](https://lastbrowser.com/privacy/) — Telemetrie-Angabe und Datenfluss je Anbietertyp, geprüft am 6. November 2026.",
          "[LastBrowser-Funktionsseite](https://lastbrowser.com/features/) — Ollama-Unterstützung und Status der eingebauten lokalen Inferenz, geprüft am 6. November 2026.",
          "[LastBrowser-Enterprise-Seite](https://lastbrowser.com/enterprise/) — Community- und kommerzielle Tarife, geprüft am 6. November 2026.",
          "[LastBrowser-Impressum](https://lastbrowser.com/imprint/) — Angaben zum Betreiber und Lizenzaussage, geprüft am 6. November 2026.",
          "[LastBrowser auf GitHub](https://github.com/Loggableim/lastbrowser) — Releases, Dateien, Release-Hinweise und Lizenz, geprüft am 6. November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[Page-Assist-Rezension](/de/local-llms/page-assist-review) — eine Browser-Erweiterung mit Seitenleiste, die mit Ollama funktioniert.",
          "[Sidekick-Rezension](/de/power-local-llm/sidekick-review) — eine unabhängige, native macOS-App zum Chatten mit einem lokalen LLM.",
          "[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools."
        ]
      }
    }
  },
  es: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/lastbrowser-review-hero-es.webp",
    "title": "Reseña de LastBrowser: navegador con IA gratis y Sidekick con Ollama local",
    "seoTitle": "Reseña de LastBrowser: navegador con IA y Ollama local",
    "intro": "LastBrowser es un navegador de escritorio gratuito para Windows, con una versión preliminar para Linux, que lleva integrado en su barra lateral un asistente de IA llamado Sidekick. Sidekick puede usar un modelo local de Ollama en tu propio equipo o un proveedor de IA en la nube que configures con tus propias credenciales. El proyecto es muy reciente: el repositorio público se creó en septiembre de 2026 y la versión actual es una beta. Esta reseña cubre qué se descarga, adónde van tus datos, los términos de la licencia y qué dejan sin confirmar las fuentes.",
    "metaDescription": "Reseña de LastBrowser: navegador gratis para Windows (Linux en preview) con barra lateral de IA Sidekick compatible con Ollama local. Licencia y riesgos.",
    "twitterDescription": "Reseña de LastBrowser: navegador con IA gratis para Windows con una barra lateral Sidekick que puede usar modelos locales de Ollama. Estado beta, licencia y lo que las fuentes no confirman.",
    "audience": "Usuarios de Windows y Linux que quieren saber si LastBrowser y su asistente Sidekick pueden funcionar con un modelo local de Ollama, cuánto cuestan y qué afirmaciones dejan abiertas las fuentes.",
    "readTime": "6 min de lectura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "reseña de LastBrowser",
    "targetKeywords": [
      "reseña lastbrowser",
      "lastbrowser sidekick",
      "navegador con ia ollama",
      "navegador ia local windows",
      "navegador ia barra lateral modelo local",
      "lastbrowser privacidad",
      "navegador ia de código abierto"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**LastBrowser (versión 0.1.60 beta, publicada el 26 de octubre de 2026) es un navegador de escritorio gratuito para Windows 10 y 11, con una versión preliminar para Linux, que incluye la barra lateral de IA Sidekick, la cual puede usar un modelo local de Ollama o un proveedor en la nube que configures.** La advertencia decisiva es que Sidekick envía el contexto de la tarea, como el contenido seleccionado de una pestaña, al proveedor que elijas, así que solo una configuración local con Ollama mantiene esos datos en tu equipo.",
    "quickAnswerTop": {
      "es": {
        "question": "¿Puede Sidekick de LastBrowser funcionar con un modelo local de Ollama?",
        "answer": "Sí, según el creador: el sitio web dice que puedes usar modelos locales de Ollama, y la política de privacidad dice que la inferencia con Ollama en tu propio equipo se queda en local. Un endpoint remoto de Ollama, Ollama Cloud o cualquier proveedor externo puede procesar las solicitudes fuera de tu ordenador.",
        "bullets": [
          "Ollama y un modelo son una instalación aparte; el navegador no incluye ninguno.",
          "La página de funciones indica que la inferencia integrada en el dispositivo aún no se ha publicado.",
          "Gratis para uso personal, educación e investigación; el uso comercial en empresas requiere una licencia de pago y no se publican precios."
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
        "label": "¿Qué es LastBrowser?",
        "anchor": "what-is-lastbrowser"
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
            "text": "LastBrowser es un navegador de escritorio gratuito para Windows, con una versión preliminar para Linux, que incluye una barra lateral de IA Sidekick capaz de usar modelos locales de Ollama."
          },
          {
            "type": "plain-terms",
            "text": "Navegas en un navegador de escritorio normal y le preguntas a un asistente de IA en la barra lateral sobre lo que estás leyendo, usando un modelo que se ejecuta en tu propio equipo mediante Ollama o un servicio de IA en la nube que configuras tú mismo."
          }
        ],
        "items": [
          "Mantenimiento: la versión 0.1.60 se publicó el 26 de octubre de 2026 y el repositorio se actualizó el 3 de noviembre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado; el proyecto es joven y publica versiones beta.",
          "Coste: gratis para uso personal, educación e investigación; el uso comercial requiere una licencia de pago y las fuentes no publican precios.",
          "Plataformas: Windows 10 y 11 (64 bits) como objetivo principal, Linux x64 como versión preliminar, sin versión para macOS.",
          "IA: aporta las credenciales de tu propio proveedor o usa modelos locales de Ollama; el modelo en el dispositivo que se incluiría dentro del navegador aún no se ha publicado.",
          "Privacidad: sin cuenta y, según el creador, sin código de telemetría; el contenido seleccionado de una pestaña va al proveedor que elijas."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta reseña se basa en lastbrowser.com, su política de privacidad y su aviso legal, y en las versiones y los datos del repositorio de GitHub, consultados el 6 de noviembre de 2026. PromptQuorum no ha instalado, ejecutado ni medido la app, así que no se evalúan la velocidad, la estabilidad ni la calidad de las respuestas. El Sidekick de LastBrowser no tiene relación con la app para macOS Sidekick que se reseña en otra parte de este sitio."
          }
        ]
      },
      "overview": {
        "id": "what-is-lastbrowser",
        "title": "¿Qué es LastBrowser?",
        "content": [
          "**LastBrowser es un navegador de escritorio basado en Electron con un asistente de IA, Sidekick, integrado como barra lateral en lugar de añadido como extensión.** El repositorio de GitHub lo describe como un navegador de escritorio para Windows construido con Electron, React y TypeScript, más un backend local en Python que ejecuta Sidekick; el README lo llama \"Windows-first\".",
          "El creador presenta Sidekick con tres personalidades (pragmática, investigadora y de desarrollador), una función de terminal y espacios de trabajo llamados Spaces, y enumera una comparación con Chrome, Edge, Brave y Arc; esas comparaciones son afirmaciones de marketing que PromptQuorum no ha verificado. El proyecto se publica como \"LastBrowser Project\" y el repositorio se creó el 18 de septiembre de 2026."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo conseguirlo",
        "content": [
          "**LastBrowser se descarga gratis para Windows, con una versión preliminar para Linux; los archivos están alojados en GitHub Releases y enlazados desde la página de descarga.**"
        ],
        "columns": [
          "Opción",
          "Cómo conseguirlo"
        ],
        "rows": [
          {
            "Opción": "Windows",
            "Cómo conseguirlo": "[Descargas de LastBrowser](https://lastbrowser.com/download/), instalador Setup x64 o .exe portable"
          },
          {
            "Opción": "Linux (preliminar)",
            "Cómo conseguirlo": "[LastBrowser en GitHub Releases](https://github.com/Loggableim/lastbrowser/releases/latest), AppImage o .tar.gz para x86_64"
          },
          {
            "Opción": "Mac",
            "Cómo conseguirlo": "No disponible; el sitio dice que hay una versión en desarrollo"
          },
          {
            "Opción": "Teléfono",
            "Cómo conseguirlo": "No se indica ninguna versión móvil"
          },
          {
            "Opción": "Precio",
            "Cómo conseguirlo": "Gratis para uso personal, educación e investigación; licencia de pago para uso comercial"
          },
          {
            "Opción": "Sitio web",
            "Cómo conseguirlo": "[lastbrowser.com](https://lastbrowser.com)"
          },
          {
            "Opción": "Política de privacidad",
            "Cómo conseguirlo": "[Política de privacidad](https://lastbrowser.com/privacy/)"
          },
          {
            "Opción": "Código fuente",
            "Cómo conseguirlo": "[GitHub, GPL-3.0](https://github.com/Loggableim/lastbrowser)"
          }
        ],
        "note": "Versión revisada: 0.1.60 beta (26 de octubre de 2026). Las notas de la versión dicen que el instalador de Windows y la compilación portable están firmados con un certificado de Certum y enumeran las sumas de verificación en un archivo SHA256SUMS; la compilación para Linux es nueva en esta versión. La página de descarga también explica cómo proceder si Windows SmartScreen avisa sobre una versión nueva."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**Las fuentes no dan cifras mínimas de RAM, disco ni CPU para el propio navegador.**"
        ],
        "columns": [
          "Elemento",
          "Qué dicen las fuentes"
        ],
        "rows": [
          {
            "Elemento": "Windows",
            "Qué dicen las fuentes": "Windows 10 y 11, 64 bits; instalador Setup (unos 320 MB) o .exe portable"
          },
          {
            "Elemento": "Linux",
            "Qué dicen las fuentes": "AppImage o tar.gz para x86_64, etiquetado como versión preliminar; ejecuta `chmod +x` en el AppImage y luego inícialo"
          },
          {
            "Elemento": "IA local",
            "Qué dicen las fuentes": "Una instalación aparte de Ollama y un modelo que tú elijas; no se indican tamaños de modelo ni cifras de hardware"
          },
          {
            "Elemento": "Cuenta",
            "Qué dicen las fuentes": "Ninguna; el sitio afirma que no hay cuenta ni registro"
          }
        ],
        "note": "Los requisitos de hardware para respuestas locales dependen del modelo de Ollama que elijas, no del navegador."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Cómo empezar",
        "content": [
          "**Los pasos siguen las páginas del creador; PromptQuorum no los ha ejecutado.**"
        ],
        "numberedItems": [
          {
            "title": "Instala el navegador",
            "whyItMatters": "Descarga el instalador Setup o la compilación portable para Windows desde la página de descarga, o el AppImage para Linux, y verifícalo con las sumas de verificación publicadas si quieres."
          },
          {
            "title": "Instala Ollama y un modelo",
            "whyItMatters": "Para respuestas locales, instala Ollama por separado y descarga un modelo; el navegador no incluye ninguno."
          },
          {
            "title": "Elige un proveedor en Sidekick",
            "whyItMatters": "Apunta Sidekick a tu endpoint local de Ollama, o introduce las credenciales de un proveedor en la nube si aceptas que el contexto de la tarea salga de tu equipo."
          },
          {
            "title": "Está pendiente de las actualizaciones",
            "whyItMatters": "La página de descarga describe actualizaciones automáticas en segundo plano para el instalador Setup, y en esta etapa las versiones llegan cada pocos días."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones confirmadas por las fuentes",
        "content": [
          "**Todo lo que sigue procede del sitio, de las notas de versión o del repositorio del creador; nada se ha probado de forma independiente.**"
        ],
        "items": [
          "**Barra lateral Sidekick.** Un asistente de IA integrado en el navegador, con personalidades seleccionables y proveedores de IA configurables o modelos locales de Ollama.",
          "**Sin cuenta.** El sitio y la política de privacidad afirman que no hay registro, ni servicio de sincronización, ni almacenamiento central de perfiles.",
          "**Datos de perfil locales.** El historial de navegación, las pestañas y las contraseñas guardadas se almacenan en el PC, en la carpeta LastBrowser dentro de AppData, protegidos con Windows DPAPI según el sitio.",
          "**Código abierto.** El código fuente es público en GitHub bajo GPL-3.0.",
          "**Versiones frecuentes.** Las versiones 0.1.55 a 0.1.60 aparecieron entre el 12 y el 26 de octubre de 2026."
        ],
        "note": "La página de funciones dice que la inferencia local integrada en el navegador aún no se ha publicado y que descargar un modelo no implica por sí solo una inferencia utilizable; esto es independiente de usar Ollama."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flujo de datos y privacidad",
        "content": [
          "**El creador afirma que el navegador no contiene código de Google Analytics, píxeles de seguimiento ni identificadores publicitarios, y que no se envían direcciones IP ni huellas de hardware a sus servidores.** No hay cuenta, y la política de privacidad dice que LastBrowser no ejecuta ningún servicio central para sincronizar perfiles. Los perfiles, el historial de navegación y las claves de API se almacenan en local, y las claves se cifran mediante Windows DPAPI según las preguntas frecuentes de la página de descarga.",
          "La política de privacidad dice que la inferencia con Ollama en tu propio equipo es local. Un endpoint de Ollama accesible de forma remota o un modelo en la nube pueden procesar las solicitudes fuera de tu ordenador. Con Ollama Cloud y proveedores de IA externos, tus solicitudes y el contexto aportado para la tarea, como el contenido seleccionado de una pestaña, se envían al proveedor que elegiste, y borrar algo en LastBrowser no deshace lo que un proveedor ya ha recibido. La política afirma con claridad que una conexión a la nube no es procesamiento sin conexión."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Estas son afirmaciones del creador, no resultados de una auditoría, y PromptQuorum no ha inspeccionado el tráfico de red. La política de privacidad no muestra fecha de última actualización y no menciona las comprobaciones de actualizaciones, aunque la página de descarga describe actualizaciones automáticas en segundo plano."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quién es",
        "items": [
          "**Usuarios de Windows con Ollama** que quieren un asistente de IA dentro del navegador en lugar de una ventana de chat aparte.",
          "**Seguidores del código abierto** que quieren una base de código pública bajo GPL-3.0 y no les importa seguir una beta que avanza rápido.",
          "**Early adopters** que aceptan que un proyecto creado en septiembre de 2026 puede cambiar con rapidez."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Rendimiento y estabilidad.** La velocidad, el uso de memoria, los fallos y la calidad de las respuestas de Sidekick con modelos locales no se han probado.",
          "**Acceso a la página por defecto.** La política de privacidad dice que el contenido seleccionado de una pestaña se envía al proveedor elegido; no se probó cuánto de una página puede leer Sidekick por defecto.",
          "**Linux.** La compilación para Linux es una versión preliminar que apareció por primera vez en la versión 0.1.60; no se ejecutó.",
          "**Términos de la licencia.** El código fuente es GPL-3.0, mientras que el uso comercial requiere una licencia de pago; las fuentes que leímos no explican cómo encajan ambas cosas, y no se publican precios.",
          "**Datos del operador.** El aviso legal indica \"LastBrowser Project\" con una persona de contacto, sin dirección postal, forma jurídica ni número de registro.",
          "**Seguridad del navegador.** No se evaluaron la rapidez con la que se aplican las correcciones de seguridad de Chromium ni el efecto del estado beta temprano."
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
            "App": "[Page Assist](/es/local-llms/page-assist-review)",
            "Plataformas": "Extensión para Chrome y Firefox",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "Extensión de barra lateral para el navegador que ya usas; funciona con Ollama"
          },
          {
            "App": "[Sidekick para macOS](/es/power-local-llm/sidekick-review)",
            "Plataformas": "Mac (Apple silicon)",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "App de chat nativa de macOS sin relación, con inferencia local integrada; no es un navegador"
          }
        ],
        "note": "Confirma el precio, la licencia y las plataformas actuales de cada app en su propia página antes de elegir."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿LastBrowser funciona en Linux?",
            "a": "Se ofrece una compilación para Linux x86_64 (AppImage y tar.gz) como versión preliminar, que apareció por primera vez en la versión 0.1.60 el 26 de octubre de 2026. El objetivo principal es Windows 10 y 11, y todavía no hay versión para macOS."
          },
          {
            "q": "¿LastBrowser es gratis para uso comercial?",
            "a": "No. El sitio dice que LastBrowser es gratis para uso personal, educación e investigación, y que el uso comercial en empresas requiere una licencia de pago. No se publican precios; la página para empresas remite a contactar con el proyecto."
          },
          {
            "q": "¿El Sidekick de LastBrowser es lo mismo que la app de macOS Sidekick?",
            "a": "No. Son productos sin relación que comparten nombre. El Sidekick de LastBrowser es un asistente de barra lateral dentro de un navegador para Windows; el Sidekick de macOS es una app de chat nativa con inferencia local integrada."
          },
          {
            "q": "¿Sidekick envía mis datos de navegación a la nube?",
            "a": "Solo si eliges un proveedor en la nube o remoto. La política de privacidad dice que las solicitudes y el contexto de la tarea, como el contenido seleccionado de una pestaña, van a ese proveedor; con Ollama en tu propio equipo la inferencia se queda en local."
          },
          {
            "q": "¿Cada cuánto se publica una versión de LastBrowser?",
            "a": "Las versiones de GitHub muestran la 0.1.55 el 12 de octubre, la 0.1.56 el 13 de octubre, la 0.1.58 el 17 de octubre, la 0.1.59 el 22 de octubre y la 0.1.60 el 26 de octubre de 2026, es decir, llegan versiones cada pocos días."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "LastBrowser ofrece un navegador de escritorio gratuito para Windows con una versión preliminar para Linux y una barra lateral Sidekick integrada que puede usar modelos locales de Ollama, una base de código abierta bajo GPL-3.0 y ninguna cuenta. En contra, el proyecto tiene solo unas semanas y está en beta, la compilación para Linux es preliminar, el uso comercial requiere una licencia de pago con precios sin publicar, la política de privacidad envía el contexto de la tarea a cualquier proveedor en la nube que elijas, y la velocidad, la estabilidad y la calidad de las respuestas no se han probado. Encaja con usuarios de Windows que ya ejecutan Ollama y quieren probar un navegador con IA; quien necesite un navegador maduro y auditado debería tratar la documentación como una declaración, no como una prueba."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Sitio web de LastBrowser](https://lastbrowser.com) — funciones, plataformas, precio y resumen de Sidekick, consultado el 6 de noviembre de 2026.",
          "[Página de descarga de LastBrowser](https://lastbrowser.com/download/) — compilaciones, versión, firma y preguntas frecuentes, consultado el 6 de noviembre de 2026.",
          "[Política de privacidad de LastBrowser](https://lastbrowser.com/privacy/) — declaración sobre telemetría y flujo de datos según el tipo de proveedor, consultado el 6 de noviembre de 2026.",
          "[Página de funciones de LastBrowser](https://lastbrowser.com/features/) — compatibilidad con Ollama y estado de la inferencia local integrada, consultado el 6 de noviembre de 2026.",
          "[Página para empresas de LastBrowser](https://lastbrowser.com/enterprise/) — planes comunitario y comercial, consultado el 6 de noviembre de 2026.",
          "[Aviso legal de LastBrowser](https://lastbrowser.com/imprint/) — datos del operador y declaración de licencia, consultado el 6 de noviembre de 2026.",
          "[LastBrowser en GitHub](https://github.com/Loggableim/lastbrowser) — versiones, archivos, notas de versión y licencia, consultado el 6 de noviembre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Reseña de Page Assist](/es/local-llms/page-assist-review) — una barra lateral en forma de extensión de navegador que funciona con Ollama.",
          "[Reseña de Sidekick](/es/power-local-llm/sidekick-review) — una app nativa de macOS, sin relación, para chatear con un LLM local.",
          "[Directorio de software LLM local](/es/directory) — el catálogo completo de herramientas de IA local."
        ]
      }
    }
  },
  fr: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/lastbrowser-review-hero-fr.webp",
    "title": "Test de LastBrowser : navigateur IA gratuit avec Sidekick et Ollama local",
    "seoTitle": "Test de LastBrowser : navigateur IA et Sidekick Ollama",
    "intro": "LastBrowser est un navigateur web de bureau gratuit pour Windows, avec un aperçu Linux, qui intègre dans sa barre latérale un assistant IA nommé Sidekick. Sidekick peut utiliser un modèle Ollama local sur votre propre machine ou un fournisseur d’IA cloud que vous configurez avec vos propres identifiants. Le projet est très récent : le dépôt public a été créé en septembre 2026 et la version actuelle est une bêta. Ce test présente ce que l’on télécharge, où vont vos données, les conditions de licence et ce que les sources laissent ouvert.",
    "metaDescription": "Test de LastBrowser : navigateur Windows gratuit (aperçu Linux) avec barre latérale IA Sidekick et modèles Ollama locaux. Licence et confidentialité.",
    "twitterDescription": "Test de LastBrowser : navigateur IA gratuit pour Windows avec une barre latérale Sidekick qui peut utiliser des modèles Ollama locaux. Statut bêta, licence et ce que les sources ne confirment pas.",
    "audience": "Utilisateurs de Windows et de Linux qui veulent savoir si LastBrowser et son assistant Sidekick peuvent fonctionner avec un modèle Ollama local, ce que cela coûte et quelles affirmations les sources laissent ouvertes.",
    "readTime": "6 min de lecture",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "test LastBrowser",
    "targetKeywords": [
      "test lastbrowser",
      "lastbrowser sidekick",
      "navigateur ia ollama",
      "navigateur ia local windows",
      "navigateur ia barre latérale modèle local",
      "lastbrowser confidentialité",
      "navigateur ia open source"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**LastBrowser (version 0.1.60 bêta, publiée le 26 octobre 2026) est un navigateur de bureau gratuit pour Windows 10 et 11, avec un aperçu Linux, qui inclut la barre latérale IA Sidekick, laquelle peut utiliser un modèle Ollama local ou un fournisseur cloud que vous configurez.** La réserve décisive : Sidekick envoie le contexte de la tâche, par exemple le contenu d’un onglet sélectionné, au fournisseur que vous choisissez, de sorte que seule une configuration Ollama locale garde ces données sur votre machine.",
    "quickAnswerTop": {
      "fr": {
        "question": "Sidekick de LastBrowser peut-il utiliser un modèle Ollama local ?",
        "answer": "Oui, selon le créateur : le site indique que vous pouvez utiliser des modèles Ollama locaux, et la politique de confidentialité précise que l’inférence avec Ollama sur votre propre machine reste locale. Un point d’accès Ollama distant, Ollama Cloud ou tout fournisseur externe peut traiter les requêtes en dehors de votre ordinateur.",
        "bullets": [
          "Ollama et un modèle sont une installation distincte ; le navigateur n’en fournit pas.",
          "La page des fonctions indique que l’inférence intégrée sur l’appareil n’est pas encore disponible.",
          "Gratuit pour un usage personnel, pédagogique et de recherche ; l’usage commercial en entreprise exige une licence payante, et aucun prix n’est publié."
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
        "label": "Qu’est-ce que LastBrowser ?",
        "anchor": "what-is-lastbrowser"
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
            "text": "LastBrowser est un navigateur de bureau gratuit pour Windows, avec un aperçu Linux, doté d’une barre latérale IA Sidekick intégrée qui peut utiliser des modèles Ollama locaux."
          },
          {
            "type": "plain-terms",
            "text": "Vous naviguez dans un navigateur de bureau classique et vous interrogez un assistant IA dans la barre latérale sur ce que vous lisez, avec soit un modèle qui tourne sur votre propre ordinateur via Ollama, soit un service d’IA cloud que vous configurez vous-même."
          }
        ],
        "items": [
          "Maintenance : la version 0.1.60 est sortie le 26 octobre 2026 et le dépôt a été mis à jour le 3 novembre 2026, donc aucun avertissement de projet inactif ne s’applique ; le projet est jeune, avec des versions bêta.",
          "Coût : gratuit pour un usage personnel, pédagogique et de recherche ; l’usage commercial exige une licence payante, et les sources ne publient aucun prix.",
          "Plateformes : Windows 10 et 11 (64 bits) comme cible principale, Linux x64 en aperçu, pas de version macOS.",
          "IA : apportez les identifiants de votre fournisseur ou utilisez des modèles Ollama locaux ; le modèle sur l’appareil qui serait livré dans le navigateur n’est pas encore disponible.",
          "Confidentialité : ni compte ni code de télémétrie selon le créateur ; le contenu des onglets sélectionnés part chez le fournisseur que vous choisissez."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Cette analyse repose sur lastbrowser.com, sa politique de confidentialité et ses mentions légales, ainsi que sur les versions GitHub et les données du dépôt, consultés le 6 novembre 2026. PromptQuorum n’a ni installé, ni exécuté, ni mesuré l’appli : la vitesse, la stabilité et la qualité des réponses ne sont pas évaluées. Le Sidekick de LastBrowser n’a aucun lien avec l’appli macOS Sidekick testée ailleurs sur ce site."
          }
        ]
      },
      "overview": {
        "id": "what-is-lastbrowser",
        "title": "Qu’est-ce que LastBrowser ?",
        "content": [
          "**LastBrowser est un navigateur de bureau basé sur Electron, avec un assistant IA, Sidekick, intégré comme barre latérale plutôt qu’ajouté comme extension.** Le dépôt GitHub le décrit comme un navigateur de bureau pour Windows construit avec Electron, React et TypeScript, plus un backend Python local qui exécute Sidekick ; le README le qualifie de Windows d’abord.",
          "Le créateur présente Sidekick avec trois personas (pragmatique, chercheur et développeur), une fonction de terminal et des espaces de travail appelés Spaces, et liste une comparaison avec Chrome, Edge, Brave et Arc ; ces comparaisons sont des affirmations marketing que PromptQuorum n’a pas vérifiées. Le projet est publié sous le nom « LastBrowser Project » et le dépôt a été créé le 18 septembre 2026."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Où l’obtenir",
        "content": [
          "**LastBrowser se télécharge gratuitement pour Windows, avec une version d’aperçu pour Linux ; les fichiers sont hébergés sur GitHub Releases et liés depuis la page de téléchargement.**"
        ],
        "columns": [
          "Option",
          "Comment l’obtenir"
        ],
        "rows": [
          {
            "Option": "Windows",
            "Comment l’obtenir": "[Téléchargements LastBrowser](https://lastbrowser.com/download/), installateur Setup x64 ou .exe portable"
          },
          {
            "Option": "Linux (aperçu)",
            "Comment l’obtenir": "[LastBrowser sur GitHub Releases](https://github.com/Loggableim/lastbrowser/releases/latest), AppImage ou .tar.gz x86_64"
          },
          {
            "Option": "Mac",
            "Comment l’obtenir": "Non disponible ; le site indique qu’une version est en cours de développement"
          },
          {
            "Option": "Téléphone",
            "Comment l’obtenir": "Aucune version mobile n’est listée"
          },
          {
            "Option": "Prix",
            "Comment l’obtenir": "Gratuit pour un usage personnel, pédagogique et de recherche ; licence payante pour l’usage commercial"
          },
          {
            "Option": "Site web",
            "Comment l’obtenir": "[lastbrowser.com](https://lastbrowser.com)"
          },
          {
            "Option": "Politique de confidentialité",
            "Comment l’obtenir": "[Politique de confidentialité](https://lastbrowser.com/privacy/)"
          },
          {
            "Option": "Code source",
            "Comment l’obtenir": "[GitHub, GPL-3.0](https://github.com/Loggableim/lastbrowser)"
          }
        ],
        "note": "Version examinée : 0.1.60 bêta (26 octobre 2026). Les notes de version indiquent que l’installateur Windows et la version portable sont signés avec un certificat Certum et listent des sommes de contrôle dans un fichier SHA256SUMS ; la version Linux est nouvelle dans cette publication. La page de téléchargement explique aussi comment procéder si Windows SmartScreen affiche un avertissement pour une nouvelle version."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Configuration requise",
        "content": [
          "**Les sources ne donnent aucune valeur minimale de RAM, d’espace disque ou de processeur pour le navigateur lui-même.**"
        ],
        "columns": [
          "Élément",
          "Ce que disent les sources"
        ],
        "rows": [
          {
            "Élément": "Windows",
            "Ce que disent les sources": "Windows 10 et 11, 64 bits ; installateur Setup (environ 320 Mo) ou .exe portable"
          },
          {
            "Élément": "Linux",
            "Ce que disent les sources": "AppImage ou tar.gz x86_64, indiqué comme aperçu ; exécutez `chmod +x` sur l’AppImage, puis lancez-la"
          },
          {
            "Élément": "IA locale",
            "Ce que disent les sources": "Une installation distincte d’Ollama et un modèle de votre choix ; aucune taille de modèle ni exigence matérielle n’est indiquée"
          },
          {
            "Élément": "Compte",
            "Ce que disent les sources": "Aucun ; le site indique ni compte ni inscription"
          }
        ],
        "note": "Les besoins matériels pour des réponses locales dépendent du modèle Ollama que vous choisissez, pas du navigateur."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Pour bien démarrer",
        "content": [
          "**Les étapes suivent les pages du créateur ; PromptQuorum ne les a pas exécutées.**"
        ],
        "numberedItems": [
          {
            "title": "Installer le navigateur",
            "whyItMatters": "Téléchargez la version Setup ou portable pour Windows depuis la page de téléchargement, ou l’AppImage pour Linux, et vérifiez-la avec les sommes de contrôle publiées si vous le souhaitez."
          },
          {
            "title": "Installer Ollama et un modèle",
            "whyItMatters": "Pour des réponses locales, installez Ollama séparément et téléchargez un modèle ; le navigateur n’en inclut pas."
          },
          {
            "title": "Choisir un fournisseur dans Sidekick",
            "whyItMatters": "Pointez Sidekick vers votre point d’accès Ollama local, ou saisissez les identifiants d’un fournisseur cloud si vous acceptez que le contexte de la tâche quitte votre machine."
          },
          {
            "title": "Surveiller les mises à jour",
            "whyItMatters": "La page de téléchargement décrit des mises à jour automatiques en arrière-plan pour l’installateur Setup, et les versions arrivent tous les quelques jours à ce stade."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions confirmées par les sources",
        "content": [
          "**Chaque point ci-dessous vient du site, des notes de version ou du dépôt du créateur ; aucun n’a été testé de façon indépendante.**"
        ],
        "items": [
          "**Barre latérale Sidekick.** Un assistant IA intégré au navigateur, avec des personas au choix et des fournisseurs d’IA configurables ou des modèles Ollama locaux.",
          "**Sans compte.** Le site et la politique de confidentialité indiquent qu’il n’y a ni inscription, ni service de synchronisation, ni stockage central des profils.",
          "**Données de profil locales.** L’historique de navigation, les onglets et les mots de passe enregistrés sont stockés sur le PC dans le dossier LastBrowser sous AppData, protégés par Windows DPAPI selon le site.",
          "**Open source.** Le code source est public sur GitHub sous licence GPL-3.0.",
          "**Versions fréquentes.** Les versions 0.1.55 à 0.1.60 sont apparues entre le 12 et le 26 octobre 2026."
        ],
        "note": "La page des fonctions indique que l’inférence locale intégrée au navigateur n’est pas encore disponible et que télécharger un modèle ne signifie pas à lui seul une inférence utilisable ; cela est distinct de l’utilisation d’Ollama."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flux de données et confidentialité",
        "content": [
          "**Le créateur indique que le navigateur ne contient ni code Google Analytics, ni pixels de suivi, ni identifiants publicitaires, et qu’aucune adresse IP ni empreinte matérielle n’est envoyée à ses serveurs.** Il n’y a pas de compte, et la politique de confidentialité précise que LastBrowser n’exploite aucun service central de synchronisation des profils. Les profils, l’historique de navigation et les clés d’API sont stockés localement, les clés étant chiffrées via Windows DPAPI d’après la FAQ de la page de téléchargement.",
          "La politique de confidentialité indique que l’inférence avec Ollama sur votre propre machine est locale. Un point d’accès Ollama accessible à distance ou un modèle cloud peut traiter les requêtes en dehors de votre ordinateur. Pour Ollama Cloud et les fournisseurs d’IA externes, vos requêtes et le contexte fourni pour la tâche, par exemple le contenu d’un onglet sélectionné, sont envoyés au fournisseur que vous avez choisi, et une suppression dans LastBrowser n’annule pas ce qu’un fournisseur a déjà reçu. La politique précise sans détour qu’une connexion cloud n’est pas un traitement hors ligne."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce sont des déclarations du créateur, pas des résultats d’audit, et PromptQuorum n’a pas inspecté le trafic réseau. La politique de confidentialité n’affiche aucune date de dernière mise à jour et ne mentionne pas de vérification des mises à jour, alors que la page de téléchargement décrit des mises à jour automatiques en arrière-plan."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui s’adresse l’appli",
        "items": [
          "**Les utilisateurs de Windows avec Ollama** qui veulent un assistant IA dans le navigateur plutôt que dans une fenêtre de chat séparée.",
          "**Les adeptes de l’open source** qui veulent un code public sous GPL-3.0 et acceptent de suivre une bêta qui évolue vite.",
          "**Les adopteurs précoces** qui acceptent qu’un projet créé en septembre 2026 puisse changer rapidement."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n’avons pas pu vérifier",
        "items": [
          "**Performances et stabilité.** La vitesse, l’utilisation de la mémoire, les plantages et la qualité des réponses de Sidekick avec des modèles locaux n’ont pas été testés.",
          "**Accès aux pages par défaut.** La politique de confidentialité indique que le contenu des onglets sélectionnés est envoyé au fournisseur choisi ; la part d’une page que Sidekick peut lire par défaut n’a pas été testée.",
          "**Linux.** La version Linux est un aperçu apparu avec la version 0.1.60 ; elle n’a pas été exécutée.",
          "**Conditions de licence.** Le code source est sous GPL-3.0, alors que l’usage commercial exige une licence payante ; les sources que nous avons lues n’expliquent pas comment les deux s’articulent, et aucun prix n’est publié.",
          "**Informations sur l’exploitant.** Les mentions légales indiquent « LastBrowser Project » avec une personne de contact, sans adresse postale, forme juridique ni numéro de registre.",
          "**Sécurité du navigateur.** La rapidité des correctifs de sécurité de Chromium et l’effet du statut de bêta précoce n’ont pas été évalués."
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
            "Appli": "[Page Assist](/fr/local-llms/page-assist-review)",
            "Plateformes": "Extension Chrome et Firefox",
            "Prix / licence": "Gratuit / MIT",
            "Différence clé": "Extension de barre latérale pour le navigateur que vous utilisez déjà ; fonctionne avec Ollama"
          },
          {
            "Appli": "[Sidekick pour macOS](/fr/power-local-llm/sidekick-review)",
            "Plateformes": "Mac (Apple silicon)",
            "Prix / licence": "Gratuit / MIT",
            "Différence clé": "Appli de chat native pour macOS sans rapport, avec inférence locale intégrée ; pas un navigateur"
          }
        ],
        "note": "Vérifiez le prix, la licence et les plateformes de chaque appli sur sa propre page avant de choisir."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "LastBrowser fonctionne-t-il sous Linux ?",
            "a": "Une version Linux x86_64 (AppImage et tar.gz) est proposée en aperçu et est apparue avec la version 0.1.60 le 26 octobre 2026. La cible principale est Windows 10 et 11, et il n’existe pas encore de version macOS."
          },
          {
            "q": "LastBrowser est-il gratuit pour un usage commercial ?",
            "a": "Non. Le site indique que LastBrowser est gratuit pour un usage personnel, pédagogique et de recherche, et que l’usage commercial en entreprise exige une licence payante. Aucun prix n’est publié ; la page entreprise renvoie vers un contact avec le projet."
          },
          {
            "q": "Le Sidekick de LastBrowser est-il le même que l’appli macOS Sidekick ?",
            "a": "Non. Ce sont des produits sans rapport qui portent le même nom. Le Sidekick de LastBrowser est un assistant en barre latérale dans un navigateur Windows ; le Sidekick de macOS est une appli de chat native avec inférence locale intégrée."
          },
          {
            "q": "Sidekick envoie-t-il mes données de navigation dans le cloud ?",
            "a": "Seulement si vous choisissez un fournisseur cloud ou distant. La politique de confidentialité indique que les requêtes et le contexte de la tâche, par exemple le contenu d’un onglet sélectionné, vont chez ce fournisseur ; avec Ollama sur votre propre machine, l’inférence reste locale."
          },
          {
            "q": "À quel rythme LastBrowser publie-t-il des versions ?",
            "a": "Les versions GitHub montrent 0.1.55 le 12 octobre, 0.1.56 le 13 octobre, 0.1.58 le 17 octobre, 0.1.59 le 22 octobre et 0.1.60 le 26 octobre 2026, soit une version tous les quelques jours."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "LastBrowser propose un navigateur de bureau gratuit pour Windows, avec un aperçu Linux et une barre latérale Sidekick intégrée qui peut utiliser des modèles Ollama locaux, un code ouvert sous GPL-3.0 et aucun compte. En contrepartie, le projet n’a que quelques semaines et reste en bêta, la version Linux est un aperçu, l’usage commercial exige une licence payante dont les prix ne sont pas publiés, la politique de confidentialité envoie le contexte de la tâche à tout fournisseur cloud que vous choisissez, et la vitesse, la stabilité et la qualité des réponses n’ont pas été testées. L’appli convient aux utilisateurs de Windows qui font déjà tourner Ollama et veulent essayer un navigateur IA ; qui a besoin d’un navigateur mature et audité doit considérer la documentation comme une déclaration, pas comme une preuve."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Site web de LastBrowser](https://lastbrowser.com) — fonctions, plateformes, prix et résumé de Sidekick, consulté le 6 novembre 2026.",
          "[Page de téléchargement de LastBrowser](https://lastbrowser.com/download/) — versions, numéro de version, signature et FAQ, consultée le 6 novembre 2026.",
          "[Politique de confidentialité de LastBrowser](https://lastbrowser.com/privacy/) — déclaration sur la télémétrie et flux de données par type de fournisseur, consultée le 6 novembre 2026.",
          "[Page des fonctions de LastBrowser](https://lastbrowser.com/features/) — prise en charge d’Ollama et état de l’inférence locale intégrée, consultée le 6 novembre 2026.",
          "[Page entreprise de LastBrowser](https://lastbrowser.com/enterprise/) — offres communautaire et commerciale, consultée le 6 novembre 2026.",
          "[Mentions légales de LastBrowser](https://lastbrowser.com/imprint/) — informations sur l’exploitant et déclaration de licence, consultées le 6 novembre 2026.",
          "[LastBrowser sur GitHub](https://github.com/Loggableim/lastbrowser) — versions, fichiers, notes de version et licence, consultés le 6 novembre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "À lire aussi",
        "items": [
          "[Test de Page Assist](/fr/local-llms/page-assist-review) — une barre latérale en extension de navigateur qui fonctionne avec Ollama.",
          "[Test de Sidekick](/fr/power-local-llm/sidekick-review) — une appli macOS native, sans rapport, pour discuter avec un LLM local.",
          "[Répertoire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale."
        ]
      }
    }
  },
  ja: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/lastbrowser-review-hero-ja.webp",
    "title": "LastBrowserレビュー：ローカルOllamaに対応するSidekick搭載の無料AIブラウザ",
    "seoTitle": "LastBrowserレビュー：Ollama対応Sidekick搭載のAIブラウザ",
    "intro": "LastBrowserは、Windows向けの無料デスクトップブラウザ（Linuxはプレビュー）で、サイドバーにSidekickというAIアシスタントを内蔵しています。Sidekickは、自分のマシン上のローカルOllamaモデル、または自分の認証情報で設定したクラウドAIプロバイダーを使えます。プロジェクトはとても新しく、公開リポジトリが作られたのは2026年9月で、現行リリースはベータ版です。このレビューでは、入手するもの、データの行き先、ライセンス条件、情報源が確認していない点を扱います。",
    "metaDescription": "LastBrowserのレビュー。ローカルOllamaモデルに対応するSidekick AIサイドバー搭載の、Windows向け無料ブラウザ（Linuxはプレビュー）。ライセンスとプライバシー、リスクを解説。",
    "twitterDescription": "LastBrowserレビュー：ローカルOllamaモデルを使えるSidekickサイドバー搭載の、Windows向け無料AIブラウザ。ベータの状況、ライセンス条件、情報源が確認していない点。",
    "audience": "LastBrowserとそのSidekickアシスタントがローカルのOllamaモデルで動くか、費用はいくらか、情報源が確認していない主張は何かを知りたいWindowsとLinuxのユーザー。",
    "readTime": "6分で読める",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "LastBrowser レビュー",
    "targetKeywords": [
      "lastbrowser レビュー",
      "lastbrowser sidekick",
      "ai ブラウザ ollama",
      "ローカル ai ブラウザ windows",
      "ai ブラウザ サイドバー ローカルモデル",
      "lastbrowser プライバシー",
      "オープンソース ai ブラウザ"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**LastBrowser（バージョン0.1.60ベータ、2026年10月26日公開）は、Windows 10と11向けの無料デスクトップブラウザで、Linux向けにはプレビュー版があり、ローカルのOllamaモデルまたは自分で設定したクラウドプロバイダーを使えるSidekick AIサイドバーを備えています。**最大の注意点は、Sidekickが選択したタブの内容などのタスクコンテキストを、選んだプロバイダーに送ることです。そのため、データがマシンの外に出ないのはローカルのOllama構成だけです。",
    "quickAnswerTop": {
      "ja": {
        "question": "LastBrowserのSidekickはローカルのOllamaモデルで動きますか？",
        "answer": "はい、開発者によると動きます。サイトにはローカルのOllamaモデルを使えると書かれ、プライバシーポリシーには、自分のマシン上のOllamaによる推論はローカルにとどまると書かれています。リモートのOllamaエンドポイント、Ollama Cloud、外部プロバイダーを使うと、リクエストはお使いのコンピューターの外で処理される可能性があります。",
        "bullets": [
          "Ollamaとモデルは別途インストールが必要で、ブラウザには同梱されていません。",
          "機能ページでは、ブラウザ内蔵のオンデバイス推論は未公開と記載されています。",
          "個人利用、教育、研究は無料。企業での商用利用は有料ライセンスが必要で、価格は公表されていません。"
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
        "label": "LastBrowserとは",
        "anchor": "what-is-lastbrowser"
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
            "text": "LastBrowserは、Windows向けの無料デスクトップブラウザ（Linuxはプレビュー）で、ローカルのOllamaモデルを使えるSidekick AIサイドバーを内蔵しています。"
          },
          {
            "type": "plain-terms",
            "text": "通常のデスクトップブラウザで閲覧しながら、サイドバーのAIアシスタントに読んでいる内容について質問できます。使うのは、Ollama経由で自分のコンピューター上で動くモデルか、自分で設定したクラウドAIサービスのどちらかです。"
          }
        ],
        "items": [
          "メンテナンス：バージョン0.1.60は2026年10月26日に公開され、リポジトリは2026年11月3日に更新されたため、更新停止の警告は付きません。ただしプロジェクトは新しく、ベータ版のリリースです。",
          "費用：個人利用、教育、研究は無料です。商用利用は有料ライセンスが必要で、情報源に価格は載っていません。",
          "対応環境：主な対象はWindows 10と11（64ビット）、Linux x64はプレビュー、macOS版はありません。",
          "AI：自分のプロバイダーの認証情報を使うか、ローカルのOllamaモデルを使います。ブラウザ内に収める予定のオンデバイスモデルは未公開です。",
          "プライバシー：開発者によると、アカウントもテレメトリのコードもありません。選択したタブの内容は、選んだプロバイダーに送られます。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "このレビューは、2026年11月6日に確認したlastbrowser.com、そのプライバシーポリシーと運営者情報、GitHubのリリースとリポジトリのデータに基づきます。PromptQuorumはアプリをインストール・実行・計測していないため、速度、安定性、回答品質は評価していません。LastBrowserのSidekickは、このサイトで別に取り上げているmacOSアプリのSidekickとは無関係です。"
          }
        ]
      },
      "overview": {
        "id": "what-is-lastbrowser",
        "title": "LastBrowserとは",
        "content": [
          "**LastBrowserは、AIアシスタントのSidekickを拡張機能としてではなくサイドバーとして統合した、Electronベースのデスクトップブラウザです。**GitHubのリポジトリでは、Electron、React、TypeScriptで作られたWindows向けデスクトップブラウザと、Sidekickを動かすローカルのPythonバックエンドから成るとされ、READMEはWindows優先と説明しています。",
          "開発者はSidekickを、3つのペルソナ（実務的、調査向け、開発者向け）、ターミナル機能、Spacesと呼ぶワークスペースとともに紹介し、Chrome、Edge、Brave、Arcとの比較も掲載しています。これらの比較はマーケティング上の主張で、PromptQuorumは検証していません。プロジェクトは「LastBrowser Project」の名義で公開され、リポジトリは2026年9月18日に作られました。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "入手方法",
        "content": [
          "**LastBrowserはWindows向けに無料でダウンロードでき、Linux向けにはプレビュー版があります。ファイルはGitHub Releasesに置かれ、ダウンロードページからリンクされています。**"
        ],
        "columns": [
          "項目",
          "入手方法"
        ],
        "rows": [
          {
            "項目": "Windows",
            "入手方法": "[LastBrowserのダウンロード](https://lastbrowser.com/download/)、x64用のセットアップインストーラーまたはポータブル版の.exe"
          },
          {
            "項目": "Linux（プレビュー）",
            "入手方法": "[GitHub ReleasesのLastBrowser](https://github.com/Loggableim/lastbrowser/releases/latest)、x86_64用のAppImageまたは.tar.gz"
          },
          {
            "項目": "Mac",
            "入手方法": "提供なし。サイトによると、対応版を開発中"
          },
          {
            "項目": "スマートフォン",
            "入手方法": "モバイル版の記載なし"
          },
          {
            "項目": "価格",
            "入手方法": "個人利用、教育、研究は無料。商用利用は有料ライセンス"
          },
          {
            "項目": "公式サイト",
            "入手方法": "[lastbrowser.com](https://lastbrowser.com)"
          },
          {
            "項目": "プライバシーポリシー",
            "入手方法": "[プライバシーポリシー](https://lastbrowser.com/privacy/)"
          },
          {
            "項目": "ソースコード",
            "入手方法": "[GitHub、GPL-3.0](https://github.com/Loggableim/lastbrowser)"
          }
        ],
        "note": "確認したバージョン：0.1.60ベータ（2026年10月26日）。リリースノートによると、Windows用のインストーラーとポータブル版にはCertumの証明書で署名があり、チェックサムはSHA256SUMSファイルに記載されています。Linux版はこのリリースで新しく加わりました。ダウンロードページには、新しいリリースでWindows SmartScreenが警告を出した場合の進め方も説明されています。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "動作要件",
        "content": [
          "**ブラウザ本体について、最低RAM、ディスク容量、CPUの数値は情報源に記載がありません。**"
        ],
        "columns": [
          "項目",
          "情報源の記載"
        ],
        "rows": [
          {
            "項目": "Windows",
            "情報源の記載": "Windows 10と11、64ビット。セットアップインストーラー（約320 MB）またはポータブル版の.exe"
          },
          {
            "項目": "Linux",
            "情報源の記載": "x86_64用のAppImageまたはtar.gzで、プレビューと表示。AppImageに`chmod +x`を実行してから起動します"
          },
          {
            "項目": "ローカルAI",
            "情報源の記載": "別途Ollamaのインストールと、自分で選ぶモデルが必要。モデルのサイズやハードウェアの数値は示されていません"
          },
          {
            "項目": "アカウント",
            "情報源の記載": "不要。サイトにはアカウントも登録もないと明記されています"
          }
        ],
        "note": "ローカルで回答させるのに必要なハードウェアは、ブラウザではなく、選んだOllamaモデルによって決まります。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "使い始めるには",
        "content": [
          "**手順は開発者のページに沿ったもので、PromptQuorumは実行していません。**"
        ],
        "numberedItems": [
          {
            "title": "ブラウザをインストールする",
            "whyItMatters": "ダウンロードページからWindows用のセットアップ版かポータブル版、またはLinux用のAppImageをダウンロードします。必要なら、公開されているチェックサムで確認します。"
          },
          {
            "title": "Ollamaとモデルをインストールする",
            "whyItMatters": "ローカルで回答させるには、Ollamaを別途インストールしてモデルを取得します。ブラウザにモデルは含まれていません。"
          },
          {
            "title": "Sidekickでプロバイダーを選ぶ",
            "whyItMatters": "SidekickをローカルのOllamaエンドポイントに向けます。タスクコンテキストがマシンの外に出ることを受け入れる場合は、クラウドプロバイダーの認証情報を入力します。"
          },
          {
            "title": "更新に注意する",
            "whyItMatters": "ダウンロードページによると、セットアップ版のインストーラーはバックグラウンドで自動更新され、現時点では数日ごとにリリースが出ています。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "情報源で確認できた機能",
        "content": [
          "**以下の項目はすべて、開発者のサイト、リリースノート、リポジトリに基づくもので、独立したテストは行っていません。**"
        ],
        "items": [
          "**Sidekickサイドバー。**ブラウザに組み込まれたAIアシスタントで、ペルソナを選べ、AIプロバイダーまたはローカルのOllamaモデルを設定できます。",
          "**アカウント不要。**サイトとプライバシーポリシーによると、登録も、同期サービスも、プロフィールの一元保存もありません。",
          "**ローカルのプロファイルデータ。**閲覧履歴、タブ、保存したパスワードは、サイトによるとPC上のAppData内のLastBrowserフォルダに保存され、Windows DPAPIで保護されます。",
          "**オープンソース。**ソースコードはGitHubでGPL-3.0のもと公開されています。",
          "**頻繁なリリース。**バージョン0.1.55から0.1.60までが、2026年10月12日から26日の間に出ています。"
        ],
        "note": "機能ページによると、ブラウザ内蔵のローカル推論は未公開で、モデルをダウンロードしただけでは使える推論にはなりません。これはOllamaを使う場合とは別の話です。"
      },
      "privacy": {
        "id": "privacy",
        "title": "データの流れとプライバシー",
        "content": [
          "**開発者によると、ブラウザにはGoogle Analyticsのコード、トラッキングピクセル、広告IDが含まれず、IPアドレスやハードウェアのフィンガープリントも同社のサーバーに送られません。**アカウントはなく、プライバシーポリシーによるとLastBrowserにはプロファイルを同期する中央サービスもありません。プロファイル、閲覧履歴、APIキーはローカルに保存され、ダウンロードページのFAQによるとキーはWindows DPAPIで暗号化されます。",
          "プライバシーポリシーによると、自分のマシン上のOllamaによる推論はローカルです。外部から到達できるOllamaエンドポイントやクラウドモデルでは、リクエストがお使いのコンピューターの外で処理される可能性があります。Ollama Cloudや外部のAIプロバイダーでは、リクエストと、選択したタブの内容などタスクのために渡したコンテキストが、選んだプロバイダーに送られ、LastBrowser側で削除しても、プロバイダーがすでに受け取ったものは取り消せません。ポリシーは、クラウド接続はオフライン処理ではないとはっきり述べています。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "これらは開発者の説明であり、監査結果ではありません。PromptQuorumはネットワーク通信を検査していません。プライバシーポリシーには最終更新日がなく、更新確認についての記載もありませんが、ダウンロードページにはバックグラウンドでの自動更新が説明されています。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "おすすめできる人",
        "items": [
          "**Ollamaを使うWindowsユーザー**：別のチャットウィンドウではなく、ブラウザの中にAIアシスタントが欲しい方。",
          "**オープンソースを追う方**：公開されたGPL-3.0のコードベースを求め、変化の速いベータ版を追うのが苦にならない方。",
          "**アーリーアダプター**：2026年9月に作られたプロジェクトが急速に変わりうることを受け入れられる方。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかった点",
        "items": [
          "**性能と安定性。**速度、メモリ使用量、クラッシュ、ローカルモデルでのSidekickの回答品質は未検証です。",
          "**ページへの標準のアクセス範囲。**プライバシーポリシーでは、選択したタブの内容が選んだプロバイダーに送られるとされていますが、Sidekickが標準でページのどこまで読めるかは検証していません。",
          "**Linux。**Linux版はバージョン0.1.60で初めて登場したプレビューで、実行していません。",
          "**ライセンス条件。**ソースはGPL-3.0ですが、商用利用には有料ライセンスが必要とされています。確認した情報源には両者がどう両立するのか説明がなく、価格も公表されていません。",
          "**運営者の情報。**運営者情報には「LastBrowser Project」と担当者の連絡先が記載されていますが、番地、法的形態、登記番号はありません。",
          "**ブラウザのセキュリティ。**Chromiumのセキュリティ修正の反映の速さと、初期のベータ段階であることの影響は評価していません。"
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
            "アプリ": "[Page Assist](/ja/local-llms/page-assist-review)",
            "対応環境": "ChromeとFirefoxの拡張機能",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "今使っているブラウザに追加するサイドバー拡張機能。Ollamaに対応"
          },
          {
            "アプリ": "[Sidekick for macOS](/ja/power-local-llm/sidekick-review)",
            "対応環境": "Mac（Apple silicon）",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "無関係のネイティブmacOSチャットアプリで、ローカル推論を内蔵。ブラウザではありません"
          }
        ],
        "note": "選ぶ前に、各アプリの現在の価格、ライセンス、対応環境を、それぞれのページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "LastBrowserはLinuxで動きますか？",
            "a": "Linux x86_64版（AppImageと.tar.gz）がプレビューとして提供されており、2026年10月26日のバージョン0.1.60で初めて登場しました。主な対象はWindows 10と11で、macOS版はまだありません。"
          },
          {
            "q": "LastBrowserは商用利用でも無料ですか？",
            "a": "いいえ。サイトによると、LastBrowserは個人利用、教育、研究では無料で、企業での商用利用には有料ライセンスが必要です。価格は公表されておらず、企業向けページはプロジェクトへの問い合わせを案内しています。"
          },
          {
            "q": "LastBrowserのSidekickは、macOSアプリのSidekickと同じものですか？",
            "a": "いいえ。名前が同じだけの無関係な製品です。LastBrowserのSidekickはWindowsブラウザの中にあるサイドバーのアシスタントで、macOSのSidekickはローカル推論を内蔵したネイティブのチャットアプリです。"
          },
          {
            "q": "Sidekickは閲覧データをクラウドに送りますか？",
            "a": "クラウドまたはリモートのプロバイダーを選んだ場合だけです。プライバシーポリシーによると、リクエストと、選択したタブの内容などのタスクコンテキストはそのプロバイダーに送られます。自分のマシン上のOllamaなら、推論はローカルにとどまります。"
          },
          {
            "q": "LastBrowserはどのくらいの頻度でリリースされますか？",
            "a": "GitHubのリリースでは、0.1.55が10月12日、0.1.56が10月13日、0.1.58が10月17日、0.1.59が10月22日、0.1.60が2026年10月26日で、数日ごとにリリースが出ています。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "総評",
        "content": "LastBrowserは、Windows向けの無料デスクトップブラウザ（Linuxはプレビュー）で、ローカルのOllamaモデルを使えるSidekickサイドバーを内蔵し、公開されたGPL-3.0のコードベースとアカウント不要という利点があります。一方で、プロジェクトはまだ数週間でベータ版にとどまり、Linux版はプレビューで、商用利用には価格非公開の有料ライセンスが必要で、プライバシーポリシーでは選んだクラウドプロバイダーにタスクコンテキストが送られ、速度、安定性、回答品質は未検証です。すでにOllamaを使っていてAIブラウザを試したいWindowsユーザーに向いています。成熟して監査されたブラウザが必要な方は、ドキュメントを証拠ではなく申告として扱ってください。"
      },
      "sources": {
        "id": "sources",
        "title": "情報源",
        "items": [
          "[LastBrowserのウェブサイト](https://lastbrowser.com) — 機能、対応環境、価格、Sidekickの概要。2026年11月6日確認。",
          "[LastBrowserのダウンロードページ](https://lastbrowser.com/download/) — ビルド、バージョン、署名、FAQ。2026年11月6日確認。",
          "[LastBrowserのプライバシーポリシー](https://lastbrowser.com/privacy/) — テレメトリに関する説明と、プロバイダー種別ごとのデータの流れ。2026年11月6日確認。",
          "[LastBrowserの機能ページ](https://lastbrowser.com/features/) — Ollamaへの対応と、内蔵ローカル推論の状況。2026年11月6日確認。",
          "[LastBrowserの企業向けページ](https://lastbrowser.com/enterprise/) — コミュニティ向けと商用のプラン。2026年11月6日確認。",
          "[LastBrowserの運営者情報](https://lastbrowser.com/imprint/) — 運営者の詳細とライセンスに関する記載。2026年11月6日確認。",
          "[GitHubのLastBrowser](https://github.com/Loggableim/lastbrowser) — リリース、アセット、リリースノート、ライセンス。2026年11月6日確認。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[Page Assistレビュー](/ja/local-llms/page-assist-review) — Ollamaに対応する、ブラウザ拡張機能のサイドバー。",
          "[Sidekickレビュー](/ja/power-local-llm/sidekick-review) — ローカルLLMとチャットする、無関係なネイティブのmacOSアプリ。",
          "[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。"
        ]
      }
    }
  },
  pt: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/lastbrowser-review-hero-pt.webp",
    "title": "Análise do LastBrowser: navegador com IA grátis e Sidekick local com Ollama",
    "seoTitle": "Análise do LastBrowser: navegador com IA e Sidekick Ollama",
    "intro": "O LastBrowser é um navegador gratuito para computador com Windows, com uma prévia para Linux, que traz um assistente de IA chamado Sidekick embutido na barra lateral. O Sidekick pode usar um modelo local do Ollama na sua própria máquina ou um provedor de IA na nuvem que você configura com as suas credenciais. O projeto é muito novo: o repositório público foi criado em setembro de 2026 e a versão atual é um beta. Esta análise mostra o que você baixa, para onde vão os seus dados, os termos de licença e o que as fontes deixam sem confirmação.",
    "metaDescription": "Análise do LastBrowser: navegador grátis para Windows (prévia para Linux) com barra lateral de IA Sidekick e modelos locais do Ollama. Licença e riscos.",
    "twitterDescription": "Análise do LastBrowser: navegador de IA grátis para Windows com barra lateral Sidekick que pode usar modelos locais do Ollama. Status beta, licença e o que as fontes não confirmam.",
    "audience": "Usuários de Windows e Linux que querem saber se o LastBrowser e o assistente Sidekick rodam com um modelo local do Ollama, quanto custam e quais afirmações as fontes deixam em aberto.",
    "readTime": "6 min de leitura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "análise do LastBrowser",
    "targetKeywords": [
      "análise lastbrowser",
      "lastbrowser sidekick",
      "navegador com ia ollama",
      "navegador de ia local windows",
      "navegador com barra lateral de ia e modelo local",
      "privacidade lastbrowser",
      "navegador de ia de código aberto"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "PC com Windows",
      "PC com Linux"
    ],
    "leadAnswerBlock": "**O LastBrowser (versão 0.1.60 beta, lançada em 26 de outubro de 2026) é um navegador gratuito para computador com Windows 10 e 11, com uma versão prévia para Linux, que inclui a barra lateral de IA Sidekick, capaz de usar um modelo local do Ollama ou um provedor na nuvem que você configura.** O alerta decisivo é que o Sidekick envia o contexto da tarefa, como o conteúdo da aba selecionada, ao provedor que você escolher, então só uma configuração com Ollama local mantém esses dados na sua máquina.",
    "quickAnswerTop": {
      "pt": {
        "question": "O Sidekick do LastBrowser consegue usar um modelo local do Ollama?",
        "answer": "Sim, segundo o criador: o site diz que você pode usar modelos locais do Ollama, e a política de privacidade diz que a inferência com o Ollama na sua própria máquina permanece local. Um endpoint remoto do Ollama, o Ollama Cloud ou qualquer provedor externo pode processar as solicitações fora do seu computador.",
        "bullets": [
          "O Ollama e um modelo são uma instalação à parte; o navegador não inclui nenhum.",
          "A página de recursos lista a inferência embutida no próprio dispositivo como ainda não lançada.",
          "Grátis para uso pessoal, educação e pesquisa; o uso comercial em empresas exige uma licença paga, e nenhum preço é publicado."
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
        "label": "O que é o LastBrowser?",
        "anchor": "what-is-lastbrowser"
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
            "text": "O LastBrowser é um navegador gratuito para computador com Windows, com uma prévia para Linux, que tem uma barra lateral de IA Sidekick embutida capaz de usar modelos locais do Ollama."
          },
          {
            "type": "plain-terms",
            "text": "Você navega em um navegador de computador comum e pergunta a um assistente de IA na barra lateral sobre o que está lendo, usando um modelo rodando no seu próprio computador por meio do Ollama ou um serviço de IA na nuvem que você mesmo configura."
          }
        ],
        "items": [
          "Manutenção: a versão 0.1.60 foi lançada em 26 de outubro de 2026 e o repositório foi atualizado em 3 de novembro de 2026, então não há aviso de projeto parado; o projeto é jovem, com versões beta.",
          "Custo: grátis para uso pessoal, educação e pesquisa; o uso comercial exige uma licença paga, e as fontes não publicam preços.",
          "Plataformas: Windows 10 e 11 (64 bits) como alvo principal, Linux x64 como prévia, sem versão para macOS.",
          "IA: traga as credenciais do seu provedor ou use modelos locais do Ollama; o modelo no próprio dispositivo que viria dentro do navegador ainda não foi lançado.",
          "Privacidade: sem conta e sem código de telemetria, segundo o criador; o conteúdo da aba selecionada vai para o provedor que você escolher."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta análise se baseia em lastbrowser.com, na política de privacidade e no aviso legal do site, e nas versões e nos dados do repositório no GitHub, conferidos em 6 de novembro de 2026. A PromptQuorum não instalou, executou nem mediu o desempenho do app, então velocidade, estabilidade e qualidade das respostas não foram avaliadas. O Sidekick do LastBrowser não tem relação com o app Sidekick para macOS analisado em outra parte deste site."
          }
        ]
      },
      "overview": {
        "id": "what-is-lastbrowser",
        "title": "O que é o LastBrowser?",
        "content": [
          "**O LastBrowser é um navegador de computador baseado em Electron, com um assistente de IA, o Sidekick, integrado como barra lateral em vez de adicionado como extensão.** O repositório do GitHub o descreve como um navegador de computador para Windows construído com Electron, React e TypeScript, mais um backend local em Python que executa o Sidekick; o README o chama de Windows em primeiro lugar.",
          "O criador apresenta o Sidekick com três personas (pragmática, pesquisadora e desenvolvedora), um recurso de terminal e espaços de trabalho chamados Spaces, e lista uma comparação com Chrome, Edge, Brave e Arc; essas comparações são afirmações de marketing que a PromptQuorum não verificou. O projeto é publicado como \"LastBrowser Project\" e o repositório foi criado em 18 de setembro de 2026."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Onde obter",
        "content": [
          "**O LastBrowser pode ser baixado de graça para Windows, com uma versão prévia para Linux; os arquivos ficam hospedados no GitHub Releases e têm links na página de download.**"
        ],
        "columns": [
          "Opção",
          "Como obter"
        ],
        "rows": [
          {
            "Opção": "Windows",
            "Como obter": "[Downloads do LastBrowser](https://lastbrowser.com/download/), instalador Setup x64 ou .exe portátil"
          },
          {
            "Opção": "Linux (prévia)",
            "Como obter": "[LastBrowser no GitHub Releases](https://github.com/Loggableim/lastbrowser/releases/latest), AppImage ou .tar.gz x86_64"
          },
          {
            "Opção": "Mac",
            "Como obter": "Não disponível; o site diz que uma versão está em desenvolvimento"
          },
          {
            "Opção": "Celular",
            "Como obter": "Nenhuma versão para celular está listada"
          },
          {
            "Opção": "Preço",
            "Como obter": "Grátis para uso pessoal, educação e pesquisa; licença paga para uso comercial"
          },
          {
            "Opção": "Site",
            "Como obter": "[lastbrowser.com](https://lastbrowser.com)"
          },
          {
            "Opção": "Política de privacidade",
            "Como obter": "[Política de privacidade](https://lastbrowser.com/privacy/)"
          },
          {
            "Opção": "Código-fonte",
            "Como obter": "[GitHub, GPL-3.0](https://github.com/Loggableim/lastbrowser)"
          }
        ],
        "note": "Versão analisada: 0.1.60 beta (26 de outubro de 2026). As notas da versão dizem que o instalador e a versão portátil para Windows são assinados com um certificado Certum e listam somas de verificação em um arquivo SHA256SUMS; a versão para Linux é nova nesta atualização. A página de download também explica como proceder se o Windows SmartScreen exibir um aviso sobre uma versão nova."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**As fontes não informam números mínimos de RAM, disco ou CPU para o navegador em si.**"
        ],
        "columns": [
          "Item",
          "O que as fontes dizem"
        ],
        "rows": [
          {
            "Item": "Windows",
            "O que as fontes dizem": "Windows 10 e 11, 64 bits; instalador Setup (cerca de 320 MB) ou .exe portátil"
          },
          {
            "Item": "Linux",
            "O que as fontes dizem": "AppImage ou tar.gz x86_64, marcado como prévia; execute `chmod +x` no AppImage e depois inicie-o"
          },
          {
            "Item": "IA local",
            "O que as fontes dizem": "Uma instalação separada do Ollama e um modelo à sua escolha; não há tamanho de modelo nem números de hardware"
          },
          {
            "Item": "Conta",
            "O que as fontes dizem": "Nenhuma; o site afirma que não há conta nem cadastro"
          }
        ],
        "note": "Os requisitos de hardware para respostas locais dependem do modelo do Ollama que você escolher, não do navegador."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Como começar",
        "content": [
          "**Os passos seguem as páginas do criador; a PromptQuorum não os executou.**"
        ],
        "numberedItems": [
          {
            "title": "Instale o navegador",
            "whyItMatters": "Baixe o Setup ou a versão portátil para Windows na página de download, ou o AppImage para Linux, e confira-o com as somas de verificação publicadas, se quiser."
          },
          {
            "title": "Instale o Ollama e um modelo",
            "whyItMatters": "Para respostas locais, instale o Ollama separadamente e baixe um modelo; o navegador não inclui nenhum."
          },
          {
            "title": "Escolha um provedor no Sidekick",
            "whyItMatters": "Aponte o Sidekick para o seu endpoint local do Ollama ou informe as credenciais de um provedor na nuvem, se você aceitar que o contexto da tarefa saia da sua máquina."
          },
          {
            "title": "Acompanhe as atualizações",
            "whyItMatters": "A página de download descreve atualizações automáticas em segundo plano para o instalador Setup, e nesta fase as versões saem a cada poucos dias."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos confirmados pelas fontes",
        "content": [
          "**Todos os itens abaixo vêm do site, das notas de versão ou do repositório do criador; nenhum foi testado de forma independente.**"
        ],
        "items": [
          "**Barra lateral Sidekick.** Um assistente de IA embutido no navegador, com personas selecionáveis e provedores de IA configuráveis ou modelos locais do Ollama.",
          "**Sem conta.** O site e a política de privacidade afirmam que não há cadastro, serviço de sincronização nem armazenamento central de perfis.",
          "**Dados de perfil locais.** O histórico de navegação, as abas e as senhas salvas ficam no PC, na pasta LastBrowser em AppData, protegidos com o Windows DPAPI, segundo o site.",
          "**Código aberto.** O código-fonte é público no GitHub sob GPL-3.0.",
          "**Versões frequentes.** As versões 0.1.55 a 0.1.60 apareceram entre 12 e 26 de outubro de 2026."
        ],
        "note": "A página de recursos diz que a inferência local embutida no navegador ainda não foi lançada e que baixar um modelo não significa, por si só, ter uma inferência utilizável; isso é diferente de usar o Ollama."
      },
      "privacy": {
        "id": "privacy",
        "title": "Fluxo de dados e privacidade",
        "content": [
          "**O criador afirma que o navegador não contém código do Google Analytics, pixels de rastreamento nem identificadores de publicidade, e que nenhum endereço IP nem impressão digital de hardware é enviado aos servidores dele.** Não há conta, e a política de privacidade diz que o LastBrowser não opera nenhum serviço central de sincronização de perfis. Perfis, histórico de navegação e chaves de API ficam armazenados localmente, com as chaves criptografadas por meio do Windows DPAPI, segundo o FAQ da página de download.",
          "A política de privacidade diz que a inferência com o Ollama na sua própria máquina é local. Um endpoint do Ollama acessível remotamente ou um modelo na nuvem pode processar solicitações fora do seu computador. No caso do Ollama Cloud e de provedores de IA externos, as suas solicitações e o contexto fornecido para a tarefa, como o conteúdo da aba selecionada, são enviados ao provedor que você escolheu, e apagar algo no LastBrowser não desfaz o que um provedor já recebeu. A política afirma de forma direta que uma conexão com a nuvem não é processamento offline."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Estas são declarações do criador, não resultados de auditoria, e a PromptQuorum não inspecionou o tráfego de rede. A política de privacidade não mostra data de atualização e não menciona verificações de atualização, embora a página de download descreva atualizações automáticas em segundo plano."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem é",
        "items": [
          "**Usuários de Windows com Ollama** que querem um assistente de IA dentro do navegador em vez de uma janela de chat separada.",
          "**Quem acompanha o código aberto** e quer um código-fonte público sob GPL-3.0 e não se importa de acompanhar um beta que muda rápido.",
          "**Pioneiros** que aceitam que um projeto criado em setembro de 2026 pode mudar rapidamente."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Desempenho e estabilidade.** Velocidade, uso de memória, travamentos e qualidade das respostas do Sidekick com modelos locais não foram testados.",
          "**Acesso padrão às páginas.** A política de privacidade diz que o conteúdo da aba selecionada é enviado ao provedor escolhido; quanto de uma página o Sidekick consegue ler por padrão não foi testado.",
          "**Linux.** A versão para Linux é uma prévia que apareceu pela primeira vez na versão 0.1.60; ela não foi executada.",
          "**Termos de licença.** O código-fonte é GPL-3.0, enquanto o uso comercial exige uma licença paga; as fontes que lemos não explicam como as duas coisas se encaixam, e nenhum preço é publicado.",
          "**Dados do operador.** O aviso legal lista \"LastBrowser Project\" com uma pessoa de contato e sem endereço, forma jurídica nem número de registro.",
          "**Segurança do navegador.** A rapidez das correções de segurança do Chromium e o efeito do status beta inicial não foram avaliados."
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
            "App": "[Page Assist](/pt/local-llms/page-assist-review)",
            "Plataformas": "Extensão para Chrome e Firefox",
            "Preço / licença": "Grátis / MIT",
            "Diferença principal": "Extensão de barra lateral para o navegador que você já usa; funciona com o Ollama"
          },
          {
            "App": "[Sidekick para macOS](/pt/power-local-llm/sidekick-review)",
            "Plataformas": "Mac (Apple silicon)",
            "Preço / licença": "Grátis / MIT",
            "Diferença principal": "App de chat nativo para macOS, sem relação com o LastBrowser, com inferência local embutida; não é um navegador"
          }
        ],
        "note": "Confirme o preço, a licença e as plataformas de cada app na página dele antes de escolher."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "O LastBrowser funciona no Linux?",
            "a": "Uma versão para Linux x86_64 (AppImage e tar.gz) é oferecida como prévia e apareceu pela primeira vez na versão 0.1.60, em 26 de outubro de 2026. O alvo principal é o Windows 10 e 11, e ainda não há versão para macOS."
          },
          {
            "q": "O LastBrowser é grátis para uso comercial?",
            "a": "Não. O site diz que o LastBrowser é grátis para uso pessoal, educação e pesquisa, e que o uso comercial em empresas exige uma licença paga. Nenhum preço é publicado; a página para empresas orienta a entrar em contato com o projeto."
          },
          {
            "q": "O Sidekick do LastBrowser é o mesmo app Sidekick para macOS?",
            "a": "Não. São produtos sem relação entre si que têm o mesmo nome. O Sidekick do LastBrowser é um assistente de barra lateral dentro de um navegador para Windows; o Sidekick para macOS é um app de chat nativo com inferência local embutida."
          },
          {
            "q": "O Sidekick envia os meus dados de navegação para a nuvem?",
            "a": "Só se você escolher um provedor na nuvem ou remoto. A política de privacidade diz que as solicitações e o contexto da tarefa, como o conteúdo da aba selecionada, vão para esse provedor; com o Ollama na sua própria máquina, a inferência permanece local."
          },
          {
            "q": "Com que frequência o LastBrowser recebe versões novas?",
            "a": "As versões do GitHub mostram a 0.1.55 em 12 de outubro, a 0.1.56 em 13 de outubro, a 0.1.58 em 17 de outubro, a 0.1.59 em 22 de outubro e a 0.1.60 em 26 de outubro de 2026, ou seja, as versões saem a cada poucos dias."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O LastBrowser oferece um navegador gratuito para computador com Windows, com uma prévia para Linux e uma barra lateral Sidekick embutida que pode usar modelos locais do Ollama, um código aberto sob GPL-3.0 e nenhuma conta. Em contrapartida, o projeto tem só algumas semanas e está em beta, a versão para Linux é uma prévia, o uso comercial exige uma licença paga com preços não publicados, a política de privacidade envia o contexto da tarefa a qualquer provedor na nuvem que você escolher, e velocidade, estabilidade e qualidade das respostas não foram testadas. Serve para usuários de Windows que já rodam o Ollama e querem experimentar um navegador com IA; quem precisa de um navegador maduro e auditado deve tratar a documentação como uma declaração, não como prova."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Site do LastBrowser](https://lastbrowser.com) — recursos, plataformas, preço e resumo do Sidekick, conferido em 6 de novembro de 2026.",
          "[Página de download do LastBrowser](https://lastbrowser.com/download/) — versões, número da versão, assinatura e FAQ, conferido em 6 de novembro de 2026.",
          "[Política de privacidade do LastBrowser](https://lastbrowser.com/privacy/) — declaração sobre telemetria e fluxo de dados por tipo de provedor, conferido em 6 de novembro de 2026.",
          "[Página de recursos do LastBrowser](https://lastbrowser.com/features/) — suporte ao Ollama e status da inferência local embutida, conferido em 6 de novembro de 2026.",
          "[Página para empresas do LastBrowser](https://lastbrowser.com/enterprise/) — planos comunitário e comercial, conferido em 6 de novembro de 2026.",
          "[Aviso legal do LastBrowser](https://lastbrowser.com/imprint/) — dados do operador e declaração de licença, conferido em 6 de novembro de 2026.",
          "[LastBrowser no GitHub](https://github.com/Loggableim/lastbrowser) — versões, arquivos, notas de versão e licença, conferido em 6 de novembro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leitura relacionada",
        "items": [
          "[Análise do Page Assist](/pt/local-llms/page-assist-review) — uma barra lateral em extensão de navegador que funciona com o Ollama.",
          "[Análise do Sidekick](/pt/power-local-llm/sidekick-review) — um app nativo para macOS, sem relação com o LastBrowser, para conversar com um LLM local.",
          "[Diretório de software LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local."
        ]
      }
    }
  },
  ar: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/lastbrowser-review-hero-ar.webp",
    "title": "مراجعة LastBrowser: متصفح ذكاء اصطناعي مجاني مع Sidekick محلي عبر Ollama",
    "seoTitle": "مراجعة LastBrowser: متصفح ذكاء اصطناعي مع Sidekick وOllama",
    "intro": "LastBrowser متصفح ويب مجاني لسطح المكتب على Windows، مع نسخة Linux تجريبية، وفيه مساعد ذكاء اصطناعي اسمه Sidekick مدمج في الشريط الجانبي. يستطيع Sidekick استخدام نموذج Ollama محلي على جهازك أو مزوّد ذكاء اصطناعي سحابي تضبطه ببيانات اعتمادك الخاصة. المشروع جديد جدًا: أُنشئ المستودع العام في سبتمبر 2026 والإصدار الحالي تجريبي (beta). تتناول هذه المراجعة ما تنزّله، وأين تذهب بياناتك، وشروط الترخيص، وما تتركه المصادر دون تأكيد.",
    "metaDescription": "مراجعة LastBrowser: متصفح مجاني لـ Windows (ومعاينة Linux) بشريط Sidekick جانبي يعمل مع نماذج Ollama المحلية. الترخيص والخصوصية وما لم يُؤكَّد.",
    "twitterDescription": "مراجعة LastBrowser: متصفح ذكاء اصطناعي مجاني لـ Windows بشريط Sidekick جانبي يستخدم نماذج Ollama المحلية. حالة النسخة التجريبية وشروط الترخيص وما لا تؤكده المصادر.",
    "audience": "مستخدمو Windows وLinux الذين يريدون معرفة هل يعمل LastBrowser ومساعده Sidekick بنموذج Ollama محلي، وكم يكلّف، وأي ادعاءات تتركها المصادر مفتوحة.",
    "readTime": "6 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة LastBrowser",
    "targetKeywords": [
      "مراجعة lastbrowser",
      "lastbrowser sidekick",
      "متصفح ذكاء اصطناعي مع ollama",
      "متصفح ذكاء اصطناعي محلي لـ windows",
      "متصفح بشريط جانبي لنموذج محلي",
      "خصوصية lastbrowser",
      "متصفح ذكاء اصطناعي مفتوح المصدر"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "حاسوب Windows",
      "حاسوب Linux"
    ],
    "leadAnswerBlock": "**LastBrowser (الإصدار 0.1.60 التجريبي، صدر في 26 أكتوبر 2026) متصفح مجاني لسطح المكتب على Windows 10 و11، مع نسخة Linux تجريبية، ويتضمن شريط Sidekick الجانبي للذكاء الاصطناعي الذي يستطيع استخدام نموذج Ollama محلي أو مزوّدًا سحابيًا تضبطه.** والتحفظ الحاسم أن Sidekick يرسل سياق المهمة، مثل محتوى علامة التبويب المحددة، إلى المزوّد الذي تختاره، فلا يُبقي البيانات على جهازك إلا إعداد Ollama محلي.",
    "quickAnswerTop": {
      "ar": {
        "question": "هل يستطيع Sidekick في LastBrowser العمل بنموذج Ollama محلي؟",
        "answer": "نعم، بحسب المطوّر: يذكر الموقع إمكانية استخدام نماذج Ollama المحلية، وتقول سياسة الخصوصية إن الاستدلال عبر Ollama على جهازك يبقى محليًا. أما نقطة نهاية Ollama بعيدة أو Ollama Cloud أو أي مزوّد خارجي فقد تعالج الطلبات خارج حاسوبك.",
        "bullets": [
          "Ollama والنموذج يُثبَّتان بشكل منفصل؛ فالمتصفح لا يضمّ أيًّا منهما.",
          "تذكر صفحة الميزات أن الاستدلال المدمج على الجهاز لم يصدر بعد.",
          "مجاني للاستخدام الشخصي والتعليم والبحث؛ أما الاستخدام التجاري في الشركات فيتطلب ترخيصًا مدفوعًا، ولا تُنشر أسعار."
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
        "label": "ما هو LastBrowser؟",
        "anchor": "what-is-lastbrowser"
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
            "text": "LastBrowser متصفح مجاني لسطح المكتب على Windows، مع نسخة Linux تجريبية، وفيه شريط Sidekick جانبي للذكاء الاصطناعي يستطيع استخدام نماذج Ollama المحلية."
          },
          {
            "type": "plain-terms",
            "text": "تتصفح في متصفح مكتبي عادي وتسأل مساعد ذكاء اصطناعي في الشريط الجانبي عمّا تقرؤه، إما بنموذج يعمل على حاسوبك عبر Ollama أو بخدمة ذكاء اصطناعي سحابية تضبطها بنفسك."
          }
        ],
        "items": [
          "الصيانة: صدر الإصدار 0.1.60 في 26 أكتوبر 2026 وحُدّث المستودع في 3 نوفمبر 2026، فلا ينطبق تحذير المشروع المتوقف؛ والمشروع فتي ويصدر إصدارات تجريبية.",
          "التكلفة: مجاني للاستخدام الشخصي والتعليم والبحث؛ أما الاستخدام التجاري فيتطلب ترخيصًا مدفوعًا، ولا تنشر المصادر أسعارًا.",
          "المنصات: Windows 10 و11 (64 بت) هدف رئيسي، وLinux x64 معاينة تجريبية، ولا توجد نسخة macOS.",
          "الذكاء الاصطناعي: أحضر بيانات اعتماد مزوّدك أو استخدم نماذج Ollama المحلية؛ أما النموذج المدمج على الجهاز الذي سيأتي داخل المتصفح فلم يصدر بعد.",
          "الخصوصية: لا حساب ولا شيفرة قياس عن بُعد بحسب المطوّر؛ ويذهب محتوى علامة التبويب المحددة إلى المزوّد الذي تختاره."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "تستند هذه المراجعة إلى lastbrowser.com وسياسة الخصوصية وبيانات الجهة المشغّلة (imprint) وإصدارات GitHub وبيانات المستودع، وقد روجعت في 6 نوفمبر 2026. لم تثبّت PromptQuorum التطبيق ولم تشغّله ولم تقِس أداءه، لذلك لا تُقيَّم السرعة ولا الاستقرار ولا جودة الإجابات. وSidekick في LastBrowser لا علاقة له بتطبيق macOS المسمى Sidekick الذي نراجعه في مكان آخر من هذا الموقع."
          }
        ]
      },
      "overview": {
        "id": "what-is-lastbrowser",
        "title": "ما هو LastBrowser؟",
        "content": [
          "**LastBrowser متصفح لسطح المكتب مبني على Electron، ومعه مساعد الذكاء الاصطناعي Sidekick مدمجًا في شريط جانبي لا بوصفه إضافة.** يصفه مستودع GitHub بأنه متصفح لسطح المكتب على Windows مبني بـ Electron وReact وTypeScript مع خلفية Python محلية تشغّل Sidekick؛ ويصفه ملف README بأنه يبدأ من Windows أولًا.",
          "يقدّم المطوّر Sidekick بثلاث شخصيات (عملية وبحثية ومطوّر)، وميزة طرفية (terminal)، ومساحات عمل تسمى Spaces، ويورد مقارنة مع Chrome وEdge وBrave وArc؛ وهذه المقارنات ادعاءات تسويقية لم تتحقق منها PromptQuorum. ويُنشر المشروع باسم «LastBrowser Project»، وقد أُنشئ المستودع في 18 سبتمبر 2026."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "كيف تحصل عليه",
        "content": [
          "**LastBrowser متاح للتنزيل مجانًا على Windows، مع نسخة Linux تجريبية؛ والملفات مستضافة على GitHub Releases ومرتبطة من صفحة التنزيل.**"
        ],
        "columns": [
          "الخيار",
          "مصدر الحصول عليه"
        ],
        "rows": [
          {
            "الخيار": "Windows",
            "مصدر الحصول عليه": "[تنزيلات LastBrowser](https://lastbrowser.com/download/)، مثبّت Setup لـ x64 أو ملف .exe محمول"
          },
          {
            "الخيار": "Linux (معاينة)",
            "مصدر الحصول عليه": "[LastBrowser على GitHub Releases](https://github.com/Loggableim/lastbrowser/releases/latest)، AppImage أو .tar.gz لـ x86_64"
          },
          {
            "الخيار": "Mac",
            "مصدر الحصول عليه": "غير متاح؛ يذكر الموقع أن نسخة قيد التطوير"
          },
          {
            "الخيار": "الهاتف",
            "مصدر الحصول عليه": "لا توجد نسخة للهاتف في القائمة"
          },
          {
            "الخيار": "السعر",
            "مصدر الحصول عليه": "مجاني للاستخدام الشخصي والتعليم والبحث؛ وترخيص مدفوع للاستخدام التجاري"
          },
          {
            "الخيار": "الموقع",
            "مصدر الحصول عليه": "[lastbrowser.com](https://lastbrowser.com)"
          },
          {
            "الخيار": "سياسة الخصوصية",
            "مصدر الحصول عليه": "[سياسة الخصوصية](https://lastbrowser.com/privacy/)"
          },
          {
            "الخيار": "الشيفرة المصدرية",
            "مصدر الحصول عليه": "[GitHub، ترخيص GPL-3.0](https://github.com/Loggableim/lastbrowser)"
          }
        ],
        "note": "الإصدار الذي روجع: 0.1.60 تجريبي (26 أكتوبر 2026). تقول ملاحظات الإصدار إن مثبّت Windows والنسخة المحمولة موقّعان بشهادة Certum، وإن مجاميع التحقق (checksums) مدرجة في ملف SHA256SUMS؛ وإن نسخة Linux جديدة في هذا الإصدار. كما تشرح صفحة التنزيل كيف تتصرف إذا حذّر Windows SmartScreen من إصدار جديد."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "المتطلبات",
        "content": [
          "**لا تذكر المصادر أرقامًا دنيا للذاكرة أو القرص أو المعالج للمتصفح نفسه.**"
        ],
        "columns": [
          "البند",
          "ما تقوله المصادر"
        ],
        "rows": [
          {
            "البند": "Windows",
            "ما تقوله المصادر": "Windows 10 و11 بنظام 64 بت؛ مثبّت Setup (نحو 320 MB) أو ملف .exe محمول"
          },
          {
            "البند": "Linux",
            "ما تقوله المصادر": "AppImage أو tar.gz لـ x86_64، موصوف بأنه معاينة؛ نفّذ `chmod +x` على ملف AppImage ثم شغّله"
          },
          {
            "البند": "الذكاء الاصطناعي المحلي",
            "ما تقوله المصادر": "تثبيت منفصل لـ Ollama ونموذج تختاره؛ ولا تُذكر أحجام نماذج أو أرقام عتاد"
          },
          {
            "البند": "الحساب",
            "ما تقوله المصادر": "لا يوجد؛ يذكر الموقع أنه لا حساب ولا تسجيل"
          }
        ],
        "note": "تعتمد متطلبات العتاد للإجابات المحلية على نموذج Ollama الذي تختاره، لا على المتصفح."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "كيف تبدأ",
        "content": [
          "**تتبع الخطوات صفحات المطوّر؛ ولم تنفّذها PromptQuorum.**"
        ],
        "numberedItems": [
          {
            "title": "ثبّت المتصفح",
            "whyItMatters": "نزّل مثبّت Windows أو النسخة المحمولة من صفحة التنزيل، أو AppImage لـ Linux، وتحقق منه بمجاميع التحقق (checksums) المنشورة إن شئت."
          },
          {
            "title": "ثبّت Ollama ونموذجًا",
            "whyItMatters": "للإجابات المحلية ثبّت Ollama بشكل منفصل ونزّل نموذجًا؛ فالمتصفح لا يتضمن نموذجًا."
          },
          {
            "title": "اختر مزوّدًا في Sidekick",
            "whyItMatters": "وجّه Sidekick إلى نقطة نهاية Ollama المحلية لديك، أو أدخل بيانات اعتماد مزوّد سحابي إذا قبلت أن يغادر سياق المهمة جهازك."
          },
          {
            "title": "تابع التحديثات",
            "whyItMatters": "تصف صفحة التنزيل تحديثات تلقائية في الخلفية لمثبّت Setup، وتصدر الإصدارات كل بضعة أيام في هذه المرحلة."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "الميزات التي أكدتها المصادر",
        "content": [
          "**كل بند أدناه مأخوذ من موقع المطوّر أو ملاحظات الإصدار أو المستودع؛ ولم يُختبر أي منها بشكل مستقل.**"
        ],
        "items": [
          "**شريط Sidekick الجانبي.** مساعد ذكاء اصطناعي مدمج في المتصفح، بشخصيات قابلة للاختيار ومزوّدي ذكاء اصطناعي قابلين للضبط أو نماذج Ollama محلية.",
          "**بلا حساب.** يذكر الموقع وسياسة الخصوصية أنه لا تسجيل ولا خدمة مزامنة ولا تخزين مركزي للملفات الشخصية.",
          "**بيانات الملف الشخصي محلية.** يُخزَّن سجل التصفح وعلامات التبويب وكلمات المرور المحفوظة على الحاسوب في مجلد LastBrowser ضمن AppData، ومحمية بـ Windows DPAPI بحسب الموقع.",
          "**مفتوح المصدر.** الشيفرة المصدرية عامة على GitHub بترخيص GPL-3.0.",
          "**إصدارات متكررة.** ظهرت الإصدارات من 0.1.55 إلى 0.1.60 بين 12 و26 أكتوبر 2026."
        ],
        "note": "تقول صفحة الميزات إن الاستدلال المحلي المدمج في المتصفح لم يصدر بعد، وإن تنزيل نموذج لا يعني وحده وجود استدلال قابل للاستخدام؛ وهذا منفصل عن استخدام Ollama."
      },
      "privacy": {
        "id": "privacy",
        "title": "تدفق البيانات والخصوصية",
        "content": [
          "**يذكر المطوّر أن المتصفح لا يحتوي شيفرة Google Analytics ولا بكسلات تتبع ولا معرّفات إعلانية، وأنه لا تُرسل عناوين IP ولا بصمات العتاد إلى خوادمه.** لا يوجد حساب، وتقول سياسة الخصوصية إن LastBrowser لا يشغّل خدمة مركزية لمزامنة الملفات الشخصية. تُخزَّن الملفات الشخصية وسجل التصفح ومفاتيح API محليًا، وتُشفَّر المفاتيح عبر Windows DPAPI بحسب الأسئلة الشائعة في صفحة التنزيل.",
          "تقول سياسة الخصوصية إن الاستدلال عبر Ollama على جهازك محلي. أما نقطة نهاية Ollama يمكن الوصول إليها عن بُعد أو نموذج سحابي فقد يعالجان الطلبات خارج حاسوبك. ومع Ollama Cloud ومزوّدي الذكاء الاصطناعي الخارجيين تُرسل طلباتك والسياق المقدَّم للمهمة، مثل محتوى علامة التبويب المحددة، إلى المزوّد الذي اخترته، ولا يلغي الحذف في LastBrowser ما تلقّاه المزوّد فعلًا. وتنص السياسة صراحةً على أن الاتصال السحابي ليس معالجة دون اتصال."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "هذه إفادات من المطوّر وليست نتائج تدقيق، ولم تفحص PromptQuorum حركة الشبكة. لا تُظهر سياسة الخصوصية تاريخ آخر تحديث ولا تذكر فحوص التحديث، مع أن صفحة التنزيل تصف تحديثات تلقائية في الخلفية."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**مستخدمو Windows الذين لديهم Ollama** ويريدون مساعد ذكاء اصطناعي داخل المتصفح بدل نافذة دردشة منفصلة.",
          "**متابعو المصادر المفتوحة** الذين يريدون شيفرة عامة بترخيص GPL-3.0 ولا يمانعون متابعة نسخة تجريبية سريعة التغير.",
          "**المتبنّون الأوائل** الذين يقبلون أن مشروعًا أُنشئ في سبتمبر 2026 قد يتغير بسرعة."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**الأداء والاستقرار.** السرعة واستهلاك الذاكرة والأعطال وجودة إجابات Sidekick مع النماذج المحلية لم تُختبر.",
          "**الوصول الافتراضي إلى الصفحات.** تقول سياسة الخصوصية إن محتوى علامة التبويب المحددة يُرسل إلى المزوّد المختار؛ ولم يُختبر مقدار ما يستطيع Sidekick قراءته من الصفحة افتراضيًا.",
          "**Linux.** نسخة Linux معاينة ظهرت أول مرة في الإصدار 0.1.60؛ ولم تُشغَّل.",
          "**شروط الترخيص.** الشيفرة المصدرية بترخيص GPL-3.0 بينما يتطلب الاستخدام التجاري ترخيصًا مدفوعًا؛ ولا تشرح المصادر التي قرأناها كيف يتوافق الأمران، ولا تُنشر أسعار.",
          "**بيانات الجهة المشغّلة.** تذكر بيانات imprint «LastBrowser Project» مع شخص للتواصل، دون عنوان شارع أو شكل قانوني أو رقم سجل.",
          "**أمان المتصفح.** لم تُقيَّم سرعة وصول إصلاحات Chromium الأمنية ولا أثر حالة النسخة التجريبية المبكرة."
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
            "التطبيق": "[Page Assist](/ar/local-llms/page-assist-review)",
            "المنصات": "إضافة لمتصفحي Chrome وFirefox",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الرئيسي": "إضافة بشريط جانبي للمتصفح الذي تستخدمه أصلًا؛ تعمل مع Ollama"
          },
          {
            "التطبيق": "[Sidekick لـ macOS](/ar/power-local-llm/sidekick-review)",
            "المنصات": "Mac (Apple silicon)",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الرئيسي": "تطبيق دردشة أصلي لـ macOS لا علاقة له بما سبق، باستدلال محلي مدمج؛ وليس متصفحًا"
          }
        ],
        "note": "تحقق من السعر الحالي والترخيص والمنصات لكل تطبيق في صفحته الخاصة قبل الاختيار."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل يعمل LastBrowser على Linux؟",
            "a": "تُقدَّم نسخة Linux بنظام x86_64 (AppImage وtar.gz) معاينةً تجريبية، وظهرت أول مرة في الإصدار 0.1.60 في 26 أكتوبر 2026. الهدف الرئيسي هو Windows 10 و11، ولا توجد نسخة macOS حتى الآن."
          },
          {
            "q": "هل LastBrowser مجاني للاستخدام التجاري؟",
            "a": "لا. يقول الموقع إن LastBrowser مجاني للاستخدام الشخصي والتعليم والبحث، وإن الاستخدام التجاري في الشركات يتطلب ترخيصًا مدفوعًا. لا تُنشر أسعار؛ وتحيل صفحة المؤسسات إلى التواصل مع المشروع."
          },
          {
            "q": "هل Sidekick في LastBrowser هو نفسه تطبيق Sidekick لـ macOS؟",
            "a": "لا. إنهما منتجان لا علاقة بينهما ويحملان الاسم نفسه. Sidekick في LastBrowser مساعد في شريط جانبي داخل متصفح Windows؛ أما Sidekick لـ macOS فتطبيق دردشة أصلي باستدلال محلي مدمج."
          },
          {
            "q": "هل يرسل Sidekick بيانات تصفحي إلى السحابة؟",
            "a": "فقط إذا اخترت مزوّدًا سحابيًا أو بعيدًا. تقول سياسة الخصوصية إن الطلبات وسياق المهمة، مثل محتوى علامة التبويب المحددة، تذهب إلى ذلك المزوّد؛ ومع Ollama على جهازك يبقى الاستدلال محليًا."
          },
          {
            "q": "كم مرة يصدر LastBrowser؟",
            "a": "تُظهر إصدارات GitHub الإصدار 0.1.55 في 12 أكتوبر، و0.1.56 في 13 أكتوبر، و0.1.58 في 17 أكتوبر، و0.1.59 في 22 أكتوبر، و0.1.60 في 26 أكتوبر 2026، أي أن الإصدارات تصدر كل بضعة أيام."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "يقدّم LastBrowser متصفحًا مجانيًا لسطح المكتب على Windows مع نسخة Linux تجريبية وشريط Sidekick جانبيًا مدمجًا يستطيع استخدام نماذج Ollama المحلية، وشيفرة مفتوحة بترخيص GPL-3.0، ودون حساب. في المقابل، عمر المشروع أسابيع فقط وهو في مرحلة تجريبية، ونسخة Linux معاينة، والاستخدام التجاري يتطلب ترخيصًا مدفوعًا بأسعار غير منشورة، وسياسة الخصوصية ترسل سياق المهمة إلى أي مزوّد سحابي تختاره، والسرعة والاستقرار وجودة الإجابات لم تُختبر. يناسب مستخدمي Windows الذين يشغّلون Ollama أصلًا ويريدون تجربة متصفح بذكاء اصطناعي؛ ومن يحتاج إلى متصفح ناضج ومدقَّق فعليه أن يعدّ الوثائق إقرارًا لا دليلًا."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[موقع LastBrowser](https://lastbrowser.com) — الميزات والمنصات والسعر وملخص Sidekick، روجع في 6 نوفمبر 2026.",
          "[صفحة تنزيل LastBrowser](https://lastbrowser.com/download/) — النسخ والإصدار والتوقيع والأسئلة الشائعة، روجعت في 6 نوفمبر 2026.",
          "[سياسة الخصوصية في LastBrowser](https://lastbrowser.com/privacy/) — إفادة القياس عن بُعد وتدفق البيانات بحسب نوع المزوّد، روجعت في 6 نوفمبر 2026.",
          "[صفحة ميزات LastBrowser](https://lastbrowser.com/features/) — دعم Ollama وحالة الاستدلال المحلي المدمج، روجعت في 6 نوفمبر 2026.",
          "[صفحة المؤسسات في LastBrowser](https://lastbrowser.com/enterprise/) — الخطط المجتمعية والتجارية، روجعت في 6 نوفمبر 2026.",
          "[بيانات الجهة المشغّلة في LastBrowser](https://lastbrowser.com/imprint/) — تفاصيل الجهة المشغّلة وإفادة الترخيص، روجعت في 6 نوفمبر 2026.",
          "[LastBrowser على GitHub](https://github.com/Loggableim/lastbrowser) — الإصدارات والملفات وملاحظات الإصدار والترخيص، روجع في 6 نوفمبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة Page Assist](/ar/local-llms/page-assist-review) — شريط جانبي على شكل إضافة للمتصفح يعمل مع Ollama.",
          "[مراجعة Sidekick](/ar/power-local-llm/sidekick-review) — تطبيق macOS أصلي لا علاقة له بما سبق للدردشة مع نموذج لغوي محلي.",
          "[دليل برمجيات النماذج المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية."
        ]
      }
    }
  },
  zh: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/lastbrowser-review-hero-zh.webp",
    "title": "LastBrowser 评测：免费 AI 浏览器与本地 Ollama 侧边栏助手",
    "seoTitle": "LastBrowser 评测：带 Ollama 助手的 AI 浏览器",
    "intro": "LastBrowser 是一款免费的 Windows 桌面浏览器（另有 Linux 预览版），侧边栏内置名为 Sidekick 的 AI 助手。Sidekick 可以使用你本机上的 Ollama 本地模型，也可以使用你用自己的凭据配置的云端 AI 提供商。该项目非常新：公开代码仓库创建于 2026 年 9 月，当前版本为测试版。本评测说明下载什么、你的数据流向哪里、许可条款，以及哪些内容资料没有证实。",
    "metaDescription": "LastBrowser 评测：免费 Windows 浏览器（Linux 预览版），内置可配合本地 Ollama 模型的 Sidekick AI 侧边栏。许可、隐私与风险。",
    "twitterDescription": "LastBrowser 评测：免费 Windows AI 浏览器，Sidekick 侧边栏可使用本地 Ollama 模型。测试版状态、许可条款，以及资料没有证实的内容。",
    "audience": "想了解 LastBrowser 及其 Sidekick 助手能否运行在本地 Ollama 模型上、费用如何，以及哪些说法资料没有证实的 Windows 和 Linux 用户。",
    "readTime": "阅读约6分钟",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "LastBrowser 评测",
    "targetKeywords": [
      "lastbrowser 评测",
      "lastbrowser sidekick",
      "ai 浏览器 ollama",
      "本地 ai 浏览器 windows",
      "ai 浏览器侧边栏 本地模型",
      "lastbrowser 隐私",
      "开源 ai 浏览器"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**LastBrowser（0.1.60 测试版，2026 年 10 月 26 日发布）是面向 Windows 10 和 11 的免费桌面浏览器，另有 Linux 预览版，内置 Sidekick AI 侧边栏，可使用本地 Ollama 模型或你配置的云端提供商。**关键提醒是：Sidekick 会把任务上下文（例如所选标签页内容）发送给你选择的提供商，因此只有本地 Ollama 方案才能让这些数据留在你的机器上。",
    "quickAnswerTop": {
      "zh": {
        "question": "LastBrowser 的 Sidekick 可以运行在本地 Ollama 模型上吗？",
        "answer": "据开发者所述，可以：网站称可以使用本地 Ollama 模型，隐私政策称在你自己的机器上用 Ollama 做推理会保持在本地。远程 Ollama 端点、Ollama Cloud 或任何外部提供商都可能在你的电脑之外处理请求。",
        "bullets": [
          "Ollama 和模型需要另行安装；浏览器本身不附带。",
          "功能页面将内置的设备端推理列为尚未发布。",
          "个人使用、教育和研究免费；公司的商业使用需要付费许可，且没有公布价格。"
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
        "label": "LastBrowser 是什么？",
        "anchor": "what-is-lastbrowser"
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
            "text": "LastBrowser 是免费的 Windows 桌面浏览器（另有 Linux 预览版），内置可使用本地 Ollama 模型的 Sidekick AI 侧边栏。"
          },
          {
            "type": "plain-terms",
            "text": "你像平常一样用桌面浏览器上网，并在侧边栏向 AI 助手询问正在阅读的内容，助手可以用你电脑上通过 Ollama 运行的模型，也可以用你自己设置的云端 AI 服务。"
          }
        ],
        "items": [
          "维护情况：0.1.60 版于 2026 年 10 月 26 日发布，代码仓库于 2026 年 11 月 3 日更新，因此不适用停更警告；项目还很年轻，发布的是测试版。",
          "费用：个人使用、教育和研究免费；商业使用需要付费许可，资料没有公布价格。",
          "平台：以 Windows 10 和 11（64 位）为主要目标，Linux x64 为预览版，没有 macOS 版本。",
          "AI：自带提供商凭据或使用本地 Ollama 模型；将内置在浏览器中的设备端模型尚未发布。",
          "隐私：据开发者所述，没有账号也没有遥测代码；所选标签页内容会发送给你选择的提供商。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本评测基于 lastbrowser.com、其隐私政策和公司信息页面，以及 GitHub 发布版本和仓库数据，核查于 2026 年 11 月 6 日。PromptQuorum 没有安装、运行或测试该应用，因此不评估速度、稳定性和回答质量。LastBrowser 的 Sidekick 与本站另行评测的 macOS 应用 Sidekick 无关。"
          }
        ]
      },
      "overview": {
        "id": "what-is-lastbrowser",
        "title": "LastBrowser 是什么？",
        "content": [
          "**LastBrowser 是基于 Electron 的桌面浏览器，AI 助手 Sidekick 以侧边栏的形式集成在其中，而不是作为扩展添加。**GitHub 仓库将其描述为使用 Electron、React 和 TypeScript 构建的 Windows 桌面浏览器，并配有运行 Sidekick 的本地 Python 后端；README 称其以 Windows 为先。",
          "开发者为 Sidekick 提供三种人设（务实型、研究型和开发者型）、终端功能以及名为 Spaces 的工作区，并列出了与 Chrome、Edge、Brave 和 Arc 的对比；这些对比属于营销说法，PromptQuorum 未予核实。该项目以“LastBrowser Project”的名义发布，代码仓库创建于 2026 年 9 月 18 日。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "content": [
          "**LastBrowser 可在 Windows 上免费下载，另有 Linux 预览版；文件托管在 GitHub Releases，并从下载页面链接。**"
        ],
        "columns": [
          "选项",
          "获取方式"
        ],
        "rows": [
          {
            "选项": "Windows",
            "获取方式": "[LastBrowser 下载](https://lastbrowser.com/download/)，x64 Setup 安装程序或便携版 .exe"
          },
          {
            "选项": "Linux（预览版）",
            "获取方式": "[GitHub Releases 上的 LastBrowser](https://github.com/Loggableim/lastbrowser/releases/latest)，x86_64 AppImage 或 .tar.gz"
          },
          {
            "选项": "Mac",
            "获取方式": "暂不可用；网站称正在开发相应版本"
          },
          {
            "选项": "手机",
            "获取方式": "未列出移动版本"
          },
          {
            "选项": "价格",
            "获取方式": "个人使用、教育和研究免费；商业使用需付费许可"
          },
          {
            "选项": "官方网站",
            "获取方式": "[lastbrowser.com](https://lastbrowser.com)"
          },
          {
            "选项": "隐私政策",
            "获取方式": "[隐私政策](https://lastbrowser.com/privacy/)"
          },
          {
            "选项": "源代码",
            "获取方式": "[GitHub，GPL-3.0](https://github.com/Loggableim/lastbrowser)"
          }
        ],
        "note": "核查的版本：0.1.60 测试版（2026 年 10 月 26 日）。发布说明称 Windows 安装程序和便携版使用 Certum 证书签名，并在 SHA256SUMS 文件中列出校验和；Linux 版本为此版本新增。如果 Windows SmartScreen 对新版本发出警告，下载页面还说明了如何继续。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "系统要求",
        "content": [
          "**资料没有给出浏览器本身的最低内存、磁盘或 CPU 数字。**"
        ],
        "columns": [
          "项目",
          "资料中的说法"
        ],
        "rows": [
          {
            "项目": "Windows",
            "资料中的说法": "Windows 10 和 11，64 位；Setup 安装程序（约 320 MB）或便携版 .exe"
          },
          {
            "项目": "Linux",
            "资料中的说法": "x86_64 AppImage 或 tar.gz，标注为预览版；对 AppImage 运行 `chmod +x`，然后启动"
          },
          {
            "项目": "本地 AI",
            "资料中的说法": "需要另行安装 Ollama 并自选模型；没有给出模型大小或硬件数字"
          },
          {
            "项目": "账号",
            "资料中的说法": "无；网站称无需账号，也无需注册"
          }
        ],
        "note": "本地回答所需的硬件取决于你选择的 Ollama 模型，而不是浏览器。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "如何上手",
        "content": [
          "**以下步骤依据开发者的页面；PromptQuorum 没有实际执行过。**"
        ],
        "numberedItems": [
          {
            "title": "安装浏览器",
            "whyItMatters": "从下载页面下载 Windows 的 Setup 或便携版，或下载 Linux 的 AppImage，如有需要可对照公布的校验和进行验证。"
          },
          {
            "title": "安装 Ollama 和模型",
            "whyItMatters": "若要获得本地回答，请单独安装 Ollama 并拉取一个模型；浏览器不包含模型。"
          },
          {
            "title": "在 Sidekick 中选择提供商",
            "whyItMatters": "让 Sidekick 指向你本地的 Ollama 端点；如果你接受任务上下文离开你的机器，也可以输入云端提供商的凭据。"
          },
          {
            "title": "留意更新",
            "whyItMatters": "下载页面介绍了 Setup 安装程序的后台自动更新，现阶段每隔几天就会有新版本发布。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "资料证实的功能",
        "content": [
          "**以下每一项都来自开发者的网站、发布说明或代码仓库；均未经过独立测试。**"
        ],
        "items": [
          "**Sidekick 侧边栏。**内置于浏览器的 AI 助手，可选择人设，并可配置 AI 提供商或本地 Ollama 模型。",
          "**无需账号。**网站和隐私政策称没有注册、没有同步服务，也没有集中的个人资料存储。",
          "**本地个人资料数据。**据网站所述，浏览历史、标签页和保存的密码存储在电脑上 AppData 下的 LastBrowser 文件夹中，并由 Windows DPAPI 保护。",
          "**开源。**源代码以 GPL-3.0 许可在 GitHub 上公开。",
          "**发布频繁。**0.1.55 至 0.1.60 版本在 2026 年 10 月 12 日至 26 日之间陆续发布。"
        ],
        "note": "功能页面称，内置于浏览器的本地推理尚未发布，且下载模型本身并不等于可用的推理；这与使用 Ollama 是两回事。"
      },
      "privacy": {
        "id": "privacy",
        "title": "数据流向与隐私",
        "content": [
          "**开发者称，浏览器中不含 Google Analytics 代码、跟踪像素或广告 ID，也不会向其服务器发送 IP 地址或硬件指纹。**没有账号，隐私政策称 LastBrowser 不运行用于同步个人资料的集中服务。据下载页面的常见问题，个人资料、浏览历史和 API 密钥存储在本地，密钥通过 Windows DPAPI 加密。",
          "隐私政策称，在你自己的机器上用 Ollama 做推理是本地的。可远程访问的 Ollama 端点或云端模型可能在你的电脑之外处理请求。对于 Ollama Cloud 和外部 AI 提供商，你的请求以及为任务提供的上下文（例如所选标签页内容）会发送给你选择的提供商，在 LastBrowser 中删除内容并不能撤销提供商已经收到的数据。政策明确指出，云端连接不等于离线处理。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "这些是开发者的说法，不是审计结果，PromptQuorum 没有检查网络流量。该隐私政策没有显示最后更新日期，也没有提到更新检查，而下载页面介绍了后台自动更新。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合谁使用",
        "items": [
          "**使用 Ollama 的 Windows 用户**：想要在浏览器内部使用 AI 助手，而不是另开一个聊天窗口。",
          "**开源关注者**：想要公开的 GPL-3.0 代码库，并乐于跟进快速演进的测试版。",
          "**尝鲜用户**：能接受创建于 2026 年 9 月的项目可能变化很快。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们无法核实的内容",
        "items": [
          "**性能与稳定性。**速度、内存占用、崩溃情况以及 Sidekick 使用本地模型时的回答质量均未测试。",
          "**默认页面访问。**隐私政策称所选标签页内容会发送给所选提供商；Sidekick 默认能读取页面的多少内容未经测试。",
          "**Linux。**Linux 版本是预览版，首次出现在 0.1.60 版中；未运行过。",
          "**许可条款。**源代码为 GPL-3.0，而商业使用需要付费许可；我们阅读的资料没有说明两者如何并存，也没有公布价格。",
          "**运营方信息。**公司信息页面列出“LastBrowser Project”及一名联系人，没有街道地址、法律形式或注册号。",
          "**浏览器安全。**Chromium 安全修复的跟进速度，以及早期测试版状态的影响，均未评估。"
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
            "应用": "[Page Assist](/zh/local-llms/page-assist-review)",
            "平台": "Chrome 和 Firefox 扩展",
            "价格 / 许可": "免费 / MIT",
            "主要区别": "适用于你已在使用的浏览器的侧边栏扩展；可配合 Ollama"
          },
          {
            "应用": "[macOS 版 Sidekick](/zh/power-local-llm/sidekick-review)",
            "平台": "Mac（Apple silicon）",
            "价格 / 许可": "免费 / MIT",
            "主要区别": "无关的原生 macOS 聊天应用，内置本地推理；不是浏览器"
          }
        ],
        "note": "选择之前，请在各应用自己的页面确认其当前价格、许可证和支持平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "LastBrowser 能在 Linux 上使用吗？",
            "a": "提供 Linux x86_64 版本（AppImage 和 tar.gz），属于预览版，首次出现在 2026 年 10 月 26 日的 0.1.60 版中。主要目标是 Windows 10 和 11，目前还没有 macOS 版本。"
          },
          {
            "q": "LastBrowser 商业使用免费吗？",
            "a": "不免费。网站称 LastBrowser 对个人使用、教育和研究免费，公司的商业使用需要付费许可。没有公布价格；企业页面引导你联系项目方。"
          },
          {
            "q": "LastBrowser 的 Sidekick 与 macOS 应用 Sidekick 是同一个产品吗？",
            "a": "不是。它们是名称相同但互不相关的产品。LastBrowser 的 Sidekick 是 Windows 浏览器内的侧边栏助手；macOS 版 Sidekick 是内置本地推理的原生聊天应用。"
          },
          {
            "q": "Sidekick 会把我的浏览数据发送到云端吗？",
            "a": "只有当你选择云端或远程提供商时才会。隐私政策称，请求和任务上下文（例如所选标签页内容）会发送给该提供商；在你自己机器上使用 Ollama 时，推理保持在本地。"
          },
          {
            "q": "LastBrowser 多久发布一次版本？",
            "a": "GitHub 发布记录显示：2026 年 10 月 12 日 0.1.55、13 日 0.1.56、17 日 0.1.58、22 日 0.1.59、26 日 0.1.60，大约每隔几天就有新版本。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "LastBrowser 提供免费的 Windows 桌面浏览器（另有 Linux 预览版），内置可使用本地 Ollama 模型的 Sidekick 侧边栏，代码以 GPL-3.0 开放，且无需账号。另一方面，该项目只有几周历史且处于测试阶段，Linux 版本是预览版，商业使用需要付费许可且价格未公布，隐私政策会把任务上下文发送给你选择的任何云端提供商，速度、稳定性和回答质量也未经测试。它适合已在运行 Ollama、想尝试 AI 浏览器的 Windows 用户；需要成熟且经过审计的浏览器的人，应把文档当作声明而不是证明。"
      },
      "sources": {
        "id": "sources",
        "title": "资料来源",
        "items": [
          "[LastBrowser 网站](https://lastbrowser.com) — 功能、平台、价格和 Sidekick 概述，核查于 2026 年 11 月 6 日。",
          "[LastBrowser 下载页面](https://lastbrowser.com/download/) — 构建版本、版本号、签名和常见问题，核查于 2026 年 11 月 6 日。",
          "[LastBrowser 隐私政策](https://lastbrowser.com/privacy/) — 遥测声明以及各类提供商的数据流向，核查于 2026 年 11 月 6 日。",
          "[LastBrowser 功能页面](https://lastbrowser.com/features/) — Ollama 支持以及内置本地推理的状态，核查于 2026 年 11 月 6 日。",
          "[LastBrowser 企业页面](https://lastbrowser.com/enterprise/) — 社区版与商业方案，核查于 2026 年 11 月 6 日。",
          "[LastBrowser 公司信息页面](https://lastbrowser.com/imprint/) — 运营方信息和许可声明，核查于 2026 年 11 月 6 日。",
          "[GitHub 上的 LastBrowser](https://github.com/Loggableim/lastbrowser) — 发布版本、文件、发布说明和许可证，核查于 2026 年 11 月 6 日。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "相关阅读",
        "items": [
          "[Page Assist 评测](/zh/local-llms/page-assist-review) — 可配合 Ollama 使用的浏览器扩展侧边栏。",
          "[Sidekick 评测](/zh/power-local-llm/sidekick-review) — 与之无关的原生 macOS 应用，用于与本地 LLM 聊天。",
          "[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。"
        ]
      }
    }
  },
  ko: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-06",
    "dateModified": "2026-11-06",
    "next_refresh_due": "2027-05-06",
    "theme": "Easiest Desktop Apps",
    "heroImage": "/images/lastbrowser-review-hero-ko.webp",
    "title": "LastBrowser 리뷰: 로컬 Ollama Sidekick을 갖춘 무료 AI 브라우저",
    "seoTitle": "LastBrowser 리뷰: Ollama 지원 AI 브라우저",
    "intro": "LastBrowser는 Windows용 무료 데스크톱 웹 브라우저(Linux는 미리보기)로, 사이드바에 Sidekick이라는 AI 어시스턴트가 내장되어 있습니다. Sidekick은 내 컴퓨터의 로컬 Ollama 모델 또는 직접 자격 증명을 설정한 클라우드 AI 제공업체를 사용할 수 있습니다. 프로젝트는 매우 새롭습니다. 공개 저장소는 2026년 9월에 만들어졌고 현재 릴리스는 베타입니다. 이 리뷰는 무엇을 내려받는지, 데이터가 어디로 가는지, 라이선스 조건은 무엇인지, 출처가 확인하지 못한 내용이 무엇인지 다룹니다.",
    "metaDescription": "LastBrowser 리뷰: 로컬 Ollama 모델을 쓰는 Sidekick AI 사이드바를 갖춘 무료 Windows 브라우저(Linux 미리보기). 라이선스, 개인정보, 위험.",
    "twitterDescription": "LastBrowser 리뷰: 로컬 Ollama 모델을 쓸 수 있는 Sidekick 사이드바를 갖춘 무료 Windows AI 브라우저. 베타 상태, 라이선스 조건, 출처가 확인하지 못한 내용.",
    "audience": "LastBrowser와 Sidekick 어시스턴트를 로컬 Ollama 모델로 쓸 수 있는지, 비용은 얼마인지, 출처가 확인하지 못한 주장이 무엇인지 알고 싶은 Windows 및 Linux 사용자.",
    "readTime": "6분 읽기",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "LastBrowser 리뷰",
    "targetKeywords": [
      "lastbrowser 리뷰",
      "lastbrowser sidekick",
      "ollama ai 브라우저",
      "windows 로컬 ai 브라우저",
      "로컬 모델 ai 브라우저 사이드바",
      "lastbrowser 개인정보",
      "오픈소스 ai 브라우저"
    ],
    "current_models_mentioned": [],
    "current_hardware_mentioned": [
      "Windows PC",
      "Linux PC"
    ],
    "leadAnswerBlock": "**LastBrowser(버전 0.1.60 베타, 2026년 10월 26일 출시)는 Windows 10 및 11용 무료 데스크톱 브라우저(Linux 미리보기 빌드 포함)이며, 로컬 Ollama 모델 또는 직접 설정한 클라우드 제공업체를 쓸 수 있는 Sidekick AI 사이드바를 갖추고 있습니다.** 가장 중요한 주의점은 Sidekick이 선택한 탭 내용 같은 작업 컨텍스트를 고른 제공업체로 보낸다는 것이므로, 로컬 Ollama 설정만이 그 데이터를 내 컴퓨터 안에 둡니다.",
    "quickAnswerTop": {
      "ko": {
        "question": "LastBrowser의 Sidekick을 로컬 Ollama 모델로 쓸 수 있습니까?",
        "answer": "개발자에 따르면 쓸 수 있습니다. 웹사이트는 로컬 Ollama 모델을 사용할 수 있다고 밝히고, 개인정보 처리방침은 내 컴퓨터에서 Ollama로 수행하는 추론은 로컬에 머문다고 밝힙니다. 원격 Ollama 엔드포인트, Ollama Cloud 또는 외부 제공업체는 요청을 내 컴퓨터 밖에서 처리할 수 있습니다.",
        "bullets": [
          "Ollama와 모델은 별도로 설치해야 하며, 브라우저에는 포함되어 있지 않습니다.",
          "기능 페이지는 내장 온디바이스 추론을 아직 출시되지 않은 것으로 나열합니다.",
          "개인 사용, 교육, 연구에는 무료이며, 기업의 상업적 사용에는 유료 라이선스가 필요하고 가격은 공개되어 있지 않습니다."
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
        "label": "LastBrowser란?",
        "anchor": "what-is-lastbrowser"
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
            "text": "LastBrowser는 로컬 Ollama 모델을 쓸 수 있는 Sidekick AI 사이드바가 내장된 Windows용 무료 데스크톱 브라우저(Linux는 미리보기)입니다."
          },
          {
            "type": "plain-terms",
            "text": "일반적인 데스크톱 브라우저로 웹을 보면서, 읽고 있는 내용을 사이드바의 AI 어시스턴트에게 물어볼 수 있습니다. 어시스턴트는 Ollama로 내 컴퓨터에서 실행하는 모델이나 직접 설정한 클라우드 AI 서비스를 사용합니다."
          }
        ],
        "items": [
          "유지보수: 버전 0.1.60은 2026년 10월 26일에 출시되었고 저장소는 2026년 11월 3일에 업데이트되어 업데이트 중단 경고는 해당되지 않습니다. 프로젝트는 아직 어리며 베타 릴리스 단계입니다.",
          "비용: 개인 사용, 교육, 연구에는 무료이며, 상업적 사용에는 유료 라이선스가 필요하고 출처는 가격을 공개하지 않습니다.",
          "플랫폼: 주요 대상은 Windows 10 및 11(64비트), Linux x64는 미리보기이며 macOS 버전은 없습니다.",
          "AI: 직접 제공업체 자격 증명을 가져오거나 로컬 Ollama 모델을 쓸 수 있으며, 브라우저 안에 들어갈 온디바이스 모델은 아직 출시되지 않았습니다.",
          "개인정보: 개발자에 따르면 계정과 텔레메트리 코드가 없으며, 선택한 탭 내용은 고른 제공업체로 전송됩니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이 리뷰는 2026년 11월 6일에 확인한 lastbrowser.com, 개인정보 처리방침, 사업자 정보(imprint), GitHub 릴리스 및 저장소 데이터를 바탕으로 합니다. PromptQuorum은 앱을 설치·실행·측정하지 않았으므로 속도, 안정성, 답변 품질은 평가하지 않습니다. LastBrowser의 Sidekick은 이 사이트의 다른 곳에서 리뷰한 macOS 앱 Sidekick과 관련이 없습니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-lastbrowser",
        "title": "LastBrowser란?",
        "content": [
          "**LastBrowser는 Electron 기반 데스크톱 브라우저이며, AI 어시스턴트 Sidekick이 확장 프로그램이 아니라 사이드바로 통합되어 있습니다.** GitHub 저장소는 이를 Electron, React, TypeScript로 만든 Windows 데스크톱 브라우저에 Sidekick을 실행하는 로컬 Python 백엔드를 더한 것으로 설명하며, README는 Windows 우선이라고 밝힙니다.",
          "개발자는 Sidekick을 세 가지 페르소나(실용형, 리서치형, 개발자형), 터미널 기능, Spaces라는 작업 공간과 함께 소개하고 Chrome, Edge, Brave, Arc와의 비교를 나열하지만, 이 비교는 PromptQuorum이 검증하지 않은 마케팅 주장입니다. 프로젝트는 \"LastBrowser Project\"라는 이름으로 공개되어 있으며 저장소는 2026년 9월 18일에 만들어졌습니다."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "설치 방법",
        "content": [
          "**LastBrowser는 Windows용으로 무료로 내려받을 수 있으며 Linux 미리보기 빌드도 있습니다. 파일은 GitHub Releases에서 제공되고 다운로드 페이지에서 링크됩니다.**"
        ],
        "columns": [
          "옵션",
          "입수 방법"
        ],
        "rows": [
          {
            "옵션": "Windows",
            "입수 방법": "[LastBrowser 다운로드](https://lastbrowser.com/download/), x64 Setup 설치 파일 또는 포터블 .exe"
          },
          {
            "옵션": "Linux(미리보기)",
            "입수 방법": "[GitHub Releases의 LastBrowser](https://github.com/Loggableim/lastbrowser/releases/latest), x86_64 AppImage 또는 .tar.gz"
          },
          {
            "옵션": "Mac",
            "입수 방법": "제공되지 않음, 사이트는 버전을 개발 중이라고 밝힘"
          },
          {
            "옵션": "휴대폰",
            "입수 방법": "모바일 버전은 나열되어 있지 않음"
          },
          {
            "옵션": "가격",
            "입수 방법": "개인 사용, 교육, 연구에는 무료, 상업적 사용에는 유료 라이선스"
          },
          {
            "옵션": "웹사이트",
            "입수 방법": "[lastbrowser.com](https://lastbrowser.com)"
          },
          {
            "옵션": "개인정보 처리방침",
            "입수 방법": "[개인정보 처리방침](https://lastbrowser.com/privacy/)"
          },
          {
            "옵션": "소스 코드",
            "입수 방법": "[GitHub, GPL-3.0](https://github.com/Loggableim/lastbrowser)"
          }
        ],
        "note": "리뷰한 버전: 0.1.60 베타(2026년 10월 26일). 릴리스 노트에 따르면 Windows 설치 파일과 포터블 빌드는 Certum 인증서로 서명되어 있고 체크섬은 SHA256SUMS 파일에 나열되어 있으며, Linux 빌드는 이 릴리스에서 처음 나왔습니다. 다운로드 페이지는 새 릴리스에 대해 Windows SmartScreen이 경고할 때 어떻게 진행하는지도 설명합니다."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "요구 사항",
        "content": [
          "**출처에는 브라우저 자체의 최소 RAM, 디스크, CPU 수치가 나와 있지 않습니다.**"
        ],
        "columns": [
          "항목",
          "출처의 기재 내용"
        ],
        "rows": [
          {
            "항목": "Windows",
            "출처의 기재 내용": "Windows 10 및 11, 64비트. Setup 설치 파일(약 320 MB) 또는 포터블 .exe"
          },
          {
            "항목": "Linux",
            "출처의 기재 내용": "x86_64 AppImage 또는 tar.gz, 미리보기로 표시됨. AppImage에 `chmod +x`를 실행한 뒤 시작"
          },
          {
            "항목": "로컬 AI",
            "출처의 기재 내용": "별도로 설치한 Ollama와 직접 고른 모델, 모델 크기나 하드웨어 수치는 제시되지 않음"
          },
          {
            "항목": "계정",
            "출처의 기재 내용": "없음, 사이트는 계정과 등록이 없다고 밝힘"
          }
        ],
        "note": "로컬 답변에 필요한 하드웨어는 브라우저가 아니라 고른 Ollama 모델에 따라 달라집니다."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "시작하는 방법",
        "content": [
          "**아래 단계는 개발자의 페이지를 따른 것이며, PromptQuorum은 직접 실행하지 않았습니다.**"
        ],
        "numberedItems": [
          {
            "title": "브라우저 설치하기",
            "whyItMatters": "다운로드 페이지에서 Windows Setup 또는 포터블 빌드를, Linux에서는 AppImage를 내려받고, 원하면 공개된 체크섬으로 확인하십시오."
          },
          {
            "title": "Ollama와 모델 설치하기",
            "whyItMatters": "로컬 답변을 쓰려면 Ollama를 별도로 설치하고 모델을 받으십시오. 브라우저에는 모델이 포함되어 있지 않습니다."
          },
          {
            "title": "Sidekick에서 제공업체 고르기",
            "whyItMatters": "Sidekick을 로컬 Ollama 엔드포인트로 지정하거나, 작업 컨텍스트가 내 컴퓨터를 벗어나는 것을 받아들인다면 클라우드 제공업체의 자격 증명을 입력하십시오."
          },
          {
            "title": "업데이트 확인하기",
            "whyItMatters": "다운로드 페이지는 Setup 설치 파일의 자동 백그라운드 업데이트를 설명하며, 현재 단계에서는 릴리스가 며칠마다 나옵니다."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "출처가 확인한 기능",
        "content": [
          "**아래 항목은 모두 개발자의 사이트, 릴리스 노트, 저장소에서 가져온 것이며, 독립적으로 테스트하지 않았습니다.**"
        ],
        "items": [
          "**Sidekick 사이드바.** 브라우저에 내장된 AI 어시스턴트로, 선택 가능한 페르소나와 설정 가능한 AI 제공업체 또는 로컬 Ollama 모델을 지원합니다.",
          "**계정 없음.** 사이트와 개인정보 처리방침은 등록, 동기화 서비스, 중앙 프로필 저장소가 없다고 밝힙니다.",
          "**로컬 프로필 데이터.** 사이트에 따르면 방문 기록, 탭, 저장된 비밀번호는 AppData 아래 LastBrowser 폴더에 PC 안에 저장되며 Windows DPAPI로 보호됩니다.",
          "**오픈소스.** 소스 코드는 GitHub에서 GPL-3.0으로 공개되어 있습니다.",
          "**잦은 릴리스.** 버전 0.1.55부터 0.1.60까지가 2026년 10월 12일부터 26일 사이에 나왔습니다."
        ],
        "note": "기능 페이지는 브라우저에 내장된 로컬 추론이 아직 출시되지 않았으며 모델을 내려받는 것만으로 쓸 수 있는 추론이 되는 것은 아니라고 밝히는데, 이는 Ollama를 사용하는 것과는 별개입니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "데이터 흐름과 개인정보",
        "content": [
          "**개발자는 브라우저에 Google Analytics 코드, 추적 픽셀, 광고 ID가 없으며 IP 주소나 하드웨어 지문이 자사 서버로 전송되지 않는다고 밝힙니다.** 계정이 없고, 개인정보 처리방침은 LastBrowser가 프로필 동기화용 중앙 서비스를 운영하지 않는다고 밝힙니다. 다운로드 페이지 FAQ에 따르면 프로필, 방문 기록, API 키는 로컬에 저장되며 키는 Windows DPAPI로 암호화됩니다.",
          "개인정보 처리방침은 내 컴퓨터에서 Ollama로 수행하는 추론은 로컬이라고 밝힙니다. 원격으로 접근 가능한 Ollama 엔드포인트나 클라우드 모델은 요청을 내 컴퓨터 밖에서 처리할 수 있습니다. Ollama Cloud와 외부 AI 제공업체의 경우 요청과 선택한 탭 내용 같은 작업용 컨텍스트가 고른 제공업체로 전송되며, LastBrowser에서 삭제하더라도 제공업체가 이미 받은 내용은 되돌려지지 않습니다. 방침은 클라우드 연결이 오프라인 처리가 아니라고 분명히 밝힙니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이는 개발자의 설명이며 감사 결과가 아니고, PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다. 개인정보 처리방침에는 최종 수정일이 나와 있지 않고, 다운로드 페이지가 자동 백그라운드 업데이트를 설명함에도 업데이트 확인에 대한 언급이 없습니다."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "이런 분께 적합합니다",
        "items": [
          "**Ollama를 쓰는 Windows 사용자**: 별도의 채팅 창 대신 브라우저 안에서 AI 어시스턴트를 원하는 분.",
          "**오픈소스 지지자**: 공개된 GPL-3.0 코드베이스를 원하고 빠르게 변하는 베타를 따라가는 것을 즐기는 분.",
          "**얼리 어답터**: 2026년 9월에 만들어진 프로젝트가 빠르게 바뀔 수 있음을 받아들이는 분."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 내용",
        "items": [
          "**성능과 안정성.** 속도, 메모리 사용량, 충돌, 로컬 모델을 쓴 Sidekick 답변 품질은 테스트하지 않았습니다.",
          "**기본 페이지 접근 범위.** 개인정보 처리방침은 선택한 탭 내용이 고른 제공업체로 전송된다고 밝히며, Sidekick이 기본적으로 페이지의 얼마만큼을 읽을 수 있는지는 테스트하지 않았습니다.",
          "**Linux.** Linux 빌드는 버전 0.1.60에서 처음 나온 미리보기이며 실행해 보지 않았습니다.",
          "**라이선스 조건.** 소스는 GPL-3.0인 반면 상업적 사용에는 유료 라이선스가 필요한데, 우리가 읽은 출처는 이 둘이 어떻게 양립하는지 설명하지 않으며 가격도 공개되어 있지 않습니다.",
          "**운영 주체 정보.** 사업자 정보(imprint)에는 \"LastBrowser Project\"와 담당자 연락처가 나열되어 있으며 도로명 주소, 법적 형태, 등록 번호는 없습니다.",
          "**브라우저 보안.** Chromium 보안 수정의 반영 속도와 초기 베타 상태의 영향은 평가하지 않았습니다."
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
            "앱": "[Page Assist](/ko/local-llms/page-assist-review)",
            "플랫폼": "Chrome 및 Firefox 확장 프로그램",
            "가격 / 라이선스": "무료 / MIT",
            "핵심 차이": "이미 쓰는 브라우저에 붙이는 사이드바 확장 프로그램, Ollama와 함께 작동"
          },
          {
            "앱": "[macOS용 Sidekick](/ko/power-local-llm/sidekick-review)",
            "플랫폼": "Mac(Apple silicon)",
            "가격 / 라이선스": "무료 / MIT",
            "핵심 차이": "관련 없는 네이티브 macOS 채팅 앱, 내장 로컬 추론 제공, 브라우저 아님"
          }
        ],
        "note": "선택하기 전에 각 앱의 현재 가격, 라이선스, 지원 플랫폼을 해당 앱 페이지에서 확인하십시오."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "LastBrowser는 Linux에서 작동합니까?",
            "a": "Linux x86_64 빌드(AppImage와 tar.gz)가 미리보기로 제공되며 2026년 10월 26일 버전 0.1.60에서 처음 나왔습니다. 주요 대상은 Windows 10 및 11이고 macOS 버전은 아직 없습니다."
          },
          {
            "q": "LastBrowser는 상업적 사용에도 무료입니까?",
            "a": "아닙니다. 사이트는 LastBrowser가 개인 사용, 교육, 연구에는 무료이며 기업의 상업적 사용에는 유료 라이선스가 필요하다고 밝힙니다. 가격은 공개되어 있지 않으며 엔터프라이즈 페이지는 프로젝트에 문의하도록 안내합니다."
          },
          {
            "q": "LastBrowser의 Sidekick은 macOS 앱 Sidekick과 같은 것입니까?",
            "a": "아닙니다. 이름만 같은 서로 관련 없는 제품입니다. LastBrowser의 Sidekick은 Windows 브라우저 안의 사이드바 어시스턴트이며, macOS Sidekick은 내장 로컬 추론을 갖춘 네이티브 채팅 앱입니다."
          },
          {
            "q": "Sidekick은 내 브라우징 데이터를 클라우드로 보냅니까?",
            "a": "클라우드 또는 원격 제공업체를 고른 경우에만 그렇습니다. 개인정보 처리방침에 따르면 요청과 선택한 탭 내용 같은 작업 컨텍스트가 해당 제공업체로 가며, 내 컴퓨터의 Ollama를 쓰면 추론은 로컬에 머뭅니다."
          },
          {
            "q": "LastBrowser는 얼마나 자주 릴리스됩니까?",
            "a": "GitHub 릴리스에는 10월 12일 0.1.55, 10월 13일 0.1.56, 10월 17일 0.1.58, 10월 22일 0.1.59, 2026년 10월 26일 0.1.60이 있어 릴리스가 며칠마다 나옵니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "총평",
        "content": "LastBrowser는 로컬 Ollama 모델을 쓸 수 있는 Sidekick 사이드바를 내장한 Windows용 무료 데스크톱 브라우저(Linux 미리보기 포함)를 제공하며, 공개된 GPL-3.0 코드베이스와 계정 없는 사용 방식을 갖추고 있습니다. 반면 프로젝트는 생긴 지 몇 주밖에 되지 않은 베타이고, Linux 빌드는 미리보기이며, 상업적 사용에는 가격이 공개되지 않은 유료 라이선스가 필요하고, 개인정보 처리방침에 따라 작업 컨텍스트가 고른 클라우드 제공업체로 전송되며, 속도와 안정성과 답변 품질은 테스트하지 않았습니다. 이미 Ollama를 쓰면서 AI 브라우저를 시험해 보려는 Windows 사용자에게 적합하며, 성숙하고 감사를 거친 브라우저가 필요한 분은 문서를 증거가 아닌 개발자의 선언으로 보아야 합니다."
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[LastBrowser 웹사이트](https://lastbrowser.com) — 기능, 플랫폼, 가격, Sidekick 요약. 2026년 11월 6일 확인.",
          "[LastBrowser 다운로드 페이지](https://lastbrowser.com/download/) — 빌드, 버전, 서명, FAQ. 2026년 11월 6일 확인.",
          "[LastBrowser 개인정보 처리방침](https://lastbrowser.com/privacy/) — 텔레메트리 설명과 제공업체 유형별 데이터 흐름. 2026년 11월 6일 확인.",
          "[LastBrowser 기능 페이지](https://lastbrowser.com/features/) — Ollama 지원과 내장 로컬 추론의 상태. 2026년 11월 6일 확인.",
          "[LastBrowser 엔터프라이즈 페이지](https://lastbrowser.com/enterprise/) — 커뮤니티 및 상업용 요금제. 2026년 11월 6일 확인.",
          "[LastBrowser 사업자 정보](https://lastbrowser.com/imprint/) — 운영 주체 정보와 라이선스 설명. 2026년 11월 6일 확인.",
          "[GitHub의 LastBrowser](https://github.com/Loggableim/lastbrowser) — 릴리스, 파일, 릴리스 노트, 라이선스. 2026년 11월 6일 확인."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[Page Assist 리뷰](/ko/local-llms/page-assist-review) — Ollama와 함께 작동하는 브라우저 확장 프로그램 사이드바.",
          "[Sidekick 리뷰](/ko/power-local-llm/sidekick-review) — 로컬 LLM과 채팅하는, 관련 없는 네이티브 macOS 앱.",
          "[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그."
        ]
      }
    }
  },
}
