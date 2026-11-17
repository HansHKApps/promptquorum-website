// Stirling PDF Review: open-core PDF toolkit for desktop and self-hosting
// Slug: stirling-pdf-review
// SOURCE: external research package (app_research.py, 2026-11-16), carried over AS IS for a process test. English prose is verbatim from the package;
// only wiring was added (designSkin, dates, theme, heroImage, section ids, TL;DR isTldr + snippetBlocks reused from package text, Related Reading with directory backlink).
// Not hands-on tested by PromptQuorum. Stale-project warning is OFF (last commit 2026-11-15 per package).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-16",
    "dateModified": "2026-11-16",
    "next_refresh_due": "2027-05-16",
    "theme": "RAG & Document Chat",
    "heroImage": "/images/stirling-pdf-review-hero-en.webp",
    "title": "Stirling PDF Review: Open-Core PDF Toolkit for Desktop and Self-Hosting",
    "seoTitle": "Stirling PDF Review: Features, Install, Privacy",
    "intro": "Stirling PDF is a PDF toolkit that runs as a desktop app, a self-hosted web server or an API. This review summarises what the maker and public sources say. PromptQuorum has not tested the app.",
    "metaDescription": "Factual review of Stirling PDF, an open-core PDF editor and API that runs on desktop, Docker or Kubernetes. Install options, license limits and open questions.",
    "audience": "Individuals who want a local PDF editor, and IT or dev teams that need self-hosted PDF automation and API processing.",
    "readTime": "5 min",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Stirling PDF review",
    "targetKeywords": [
      "Stirling PDF review",
      "self-hosted PDF editor",
      "open source PDF editor",
      "Stirling PDF Docker",
      "Adobe Acrobat alternative"
    ],
    "leadAnswerBlock": "Stirling PDF is an open-core PDF toolkit from Stirling PDF Inc. that edits, converts, OCRs, redacts and batch-processes PDFs. It runs on Windows, macOS and Linux, or as a self-hosted server via Docker, Kubernetes or a .jar file. Its latest release is 3.3.0 (2026-11-05), and the last commit on GitHub was 2026-11-15.",
    "quickAnswerTop": {
      "question": "What is Stirling PDF?",
      "answer": "Stirling PDF is an open-core PDF toolkit that edits, converts, OCRs, redacts and batch-processes PDFs, as a desktop app, a self-hosted server or an API.",
      "bullets": [
        "License: MIT with exceptions; some directories are under separate licenses.",
        "Price: free for individual use per the site; paid Server Plan and Enterprise offerings have no published prices.",
        "Platforms: Windows, macOS, Linux, Docker, Kubernetes, manual .jar server.",
        "Not tested by PromptQuorum."
      ]
    },
    "toc": [
      {
        "label": "TL;DR",
        "anchor": "tldr"
      },
      {
        "label": "Overview",
        "anchor": "overview"
      },
      {
        "label": "How to get it",
        "anchor": "get-it"
      },
      {
        "label": "Requirements",
        "anchor": "requirements"
      },
      {
        "label": "Features",
        "anchor": "features"
      },
      {
        "label": "Privacy",
        "anchor": "privacy"
      },
      {
        "label": "Who should use it",
        "anchor": "who-should-use"
      },
      {
        "label": "What we could not verify",
        "anchor": "could-not-verify"
      },
      {
        "label": "Alternatives",
        "anchor": "alternatives"
      },
      {
        "label": "FAQ",
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
            "text": "Stirling PDF is an open-core PDF toolkit that edits, converts, OCRs, redacts and batch-processes PDFs, as a desktop app, a self-hosted server or an API."
          },
          {
            "type": "plain-terms",
            "text": "Stirling PDF is a PDF toolkit that runs as a desktop app, a self-hosted web server or an API."
          }
        ],
        "items": [
          "**Stirling PDF is a widely starred open-core PDF toolkit.** The project is actively maintained: latest release 3.3.0 (2026-11-05), last commit 2026-11-15.",
          "It runs as a desktop app on Windows, macOS and Linux, or as a self-hosted server via Docker, Kubernetes or a .jar.",
          "The site says it is free for individual use. Paid Server Plan and Enterprise offerings exist, but no prices were found.",
          "The MIT license has exceptions: some directories fall under separate licenses.",
          "The maker says documents are not sent to external services. That is a maker claim, and the AI features' data flow is not documented in the sources.",
          "PromptQuorum has not tested the app."
        ]
      },
      "overview": {
        "id": "overview",
        "title": "Overview",
        "content": [
          "**Stirling PDF is a PDF editor and document-processing platform that you run yourself, on a desktop or on a server.** The maker is Stirling PDF Inc., which calls itself a U.S. company in its privacy policy.",
          "Per the maker, it offers 60+ tools on desktop or server, including edit, merge, split, sign, redact, convert, OCR and compress. The README says 50+, so the tool count is inconsistent between sources.",
          "Beyond the editor, the maker describes no-code pipelines, a REST API, an MCP interface, webhooks and an AI assistant. The project is described as open-core: the README links to Server Plan and Enterprise offerings.",
          "Independent coverage exists. Pocket-lint and XDA Developers have published favourable pieces, and one XDA writer later switched to another self-hosted toolkit citing privacy concerns, although the details are not in our notes. See [Pocket-lint](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) for one positive review.",
          "This review is not hands-on. It summarises the maker's pages and public sources, and maker statements are attributed as such."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "How to get Stirling PDF",
        "content": [
          "**You can install Stirling PDF with a native installer, a single Docker command, Helm or a manual .jar.** The [download page](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) lists the options, and the [GitHub v3.3.0 release](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) carries the installer files."
        ],
        "columns": [
          "Platform",
          "How to get it"
        ],
        "rows": [
          {
            "Platform": "Windows",
            "How to get it": "Standalone .exe per the [download page](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review). Release assets: Stirling-PDF-windows-x86_64.msi and Stirling-PDF-windows-arm64-setup.exe."
          },
          {
            "Platform": "macOS",
            "How to get it": "Native app from the download page. Release assets: Stirling-PDF-macos-universal.dmg and a .app.tar.gz ([release](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review))."
          },
          {
            "Platform": "Linux",
            "How to get it": "Release assets: .AppImage, .deb and .rpm (x86_64). The download page says to run the Java .jar manually."
          },
          {
            "Platform": "Docker",
            "How to get it": "`docker run -p 8080:8080 docker.stirlingpdf.com/stirlingtools/stirling-pdf`, then open http://localhost:8080 (per the [README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review))."
          },
          {
            "Platform": "Kubernetes",
            "How to get it": "Deploy with Helm on any Kubernetes cluster, per the download page."
          },
          {
            "Platform": "Web (self-hosted browser UI)",
            "How to get it": "Served by the self-hosted server (Docker or the server .jar)."
          },
          {
            "Platform": "Bare metal / any OS with Java",
            "How to get it": "Manual server setup using the .jar (Stirling-PDF-server.jar and Stirling-PDF.jar in the release assets)."
          }
        ],
        "note": "No App Store or Google Play listing was found."
      },
      "requirements": {
        "id": "requirements",
        "title": "Requirements",
        "content": [
          "**The sources do not state RAM, GPU, disk or Java version requirements.** Only the operating systems and packaging are documented."
        ],
        "columns": [
          "Item",
          "What the sources say"
        ],
        "rows": [
          {
            "Item": "RAM",
            "What the sources say": "Not stated"
          },
          {
            "Item": "GPU",
            "What the sources say": "Not stated"
          },
          {
            "Item": "Disk",
            "What the sources say": "Not stated"
          },
          {
            "Item": "Operating system",
            "What the sources say": "Windows (x86_64 and arm64 assets), macOS (universal), Linux (x86_64 assets)"
          },
          {
            "Item": "Java",
            "What the sources say": "The .jar routes imply a Java runtime; no version is stated"
          },
          {
            "Item": "Docker",
            "What the sources say": "Needed for the container route"
          }
        ],
        "note": "Check the maker's documentation before deploying on small hardware."
      },
      "features": {
        "id": "features",
        "title": "Features",
        "content": [
          "**The maker lists a broad toolset plus automation and API features.** All items below are maker claims; PromptQuorum has not tested them."
        ],
        "items": [
          "60+ editing tools on desktop or server (the README says 50+): edit, merge, split, sign, redact, convert, OCR, compress.",
          "No-code pipelines in the UI and APIs for batch processing, including OCR, classify, validate, redact, compress and route.",
          "REST API for nearly all tools, plus an MCP interface and webhooks.",
          "AI assistant that makes edits in the open file (redact, translate, summarize, convert).",
          "SSO, auditing and flexible on-prem deployments, described as 'Enterprise-grade'.",
          "Interface in 40+ languages.",
          "Per Pocket-lint, the text editor was in an Alpha phase at the time of its review."
        ]
      },
      "privacy": {
        "id": "privacy",
        "title": "Privacy",
        "content": [
          "**The maker says the editor runs on your own machine or server and documents are not sent to external services.** This is a maker claim. The source code is public, so it can be checked.",
          "The data flow of the AI features is not documented in the sources, and the sources do not say whether they run locally or call external services.",
          "On telemetry, Contabo reports an analytics feature that was on by default in the past and later made configurable. A Gnoppix forum test found no telemetry. Neither statement is confirmed against the current code or policy text. The maker's [privacy policy](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) is the primary source to read.",
          "Whether the desktop or Docker versions need an account is not stated. The site has Log in and Sign up links, and a with-login .jar exists."
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who should use it",
        "items": [
          "**It suits people who want PDFs processed on their own hardware.**",
          "People who want to edit PDFs locally instead of uploading them to online converters.",
          "IT and dev teams that want a self-hosted PDF API or batch pipelines on Docker or Kubernetes.",
          "Users who want a free desktop PDF editor with OCR and redaction."
        ]
      },
      "whoShouldNotUse": {
        "id": "could-not-verify",
        "title": "What We Could Not Verify",
        "items": [
          "**Several decision-relevant points are not confirmed by the sources.**",
          "Prices: no amounts or tiers appear on the fetched pricing page, which asks visitors to book a demo. It is also unclear which features (SSO, auditing, on-prem) belong to which paid plan.",
          "Full licensing: the LICENSE is MIT, but the clause on the engine/ directory is truncated, and app/proprietary and app/saas are under separate licenses. Anyone who needs a purely open-source license for all components should check the LICENSE first.",
          "System requirements: RAM, GPU, disk and Java version are not stated.",
          "AI model and OCR engine: not named, and it is unclear whether AI features stay offline. Anyone who needs strictly offline AI should not assume it.",
          "Telemetry in the current version: only third-party statements (Contabo, a forum test) were found.",
          "Account requirement for the desktop and Docker versions: not stated.",
          "The '30M+ downloads' figure is a maker claim without independent confirmation.",
          "A hosted service: the Terms of Service reportedly mention one, but no details were verified.",
          "The details of the XDA article by a writer who switched away, and of the cookie-banner criticism, could not be recorded.",
          "Headquarters: the only primary-source address is a San Francisco mailing address, and the policy calls the maker a U.S. company.",
          "Fork count and store rating: not available."
        ]
      },
      "vsAlternatives": {
        "id": "alternatives",
        "title": "Alternatives",
        "content": [
          "**The sources name four alternatives, but PromptQuorum has not compared them hands-on.** The notes below only restate what the sources say."
        ],
        "columns": [
          "Alternative",
          "What the sources say"
        ],
        "rows": [
          {
            "Alternative": "BentoPDF",
            "What the sources say": "Self-hosted PDF toolkit compared directly with Stirling PDF in a [Contabo article](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review). Contabo is a hosting provider."
          },
          {
            "Alternative": "Adobe Acrobat",
            "What the sources say": "Commercial PDF editor that reviewers say Stirling PDF replaces."
          },
          {
            "Alternative": "UPDF",
            "What the sources say": "Sells a competing PDF product and publishes a review of Stirling PDF, so that review is biased."
          },
          {
            "Alternative": "SwifDoo PDF",
            "What the sources say": "Sells a competing PDF product and publishes a review of Stirling PDF, so that review is biased."
          }
        ]
      },
      "faq": {
        "id": "faq",
        "title": "FAQ",
        "faqs": [
          {
            "q": "Is Stirling PDF free?",
            "a": "The site says it is free for individual use, and the project is open-core. Paid Server Plan and Enterprise offerings exist, but no prices appear in the fetched pages."
          },
          {
            "q": "Is it really open source?",
            "a": "The LICENSE is MIT, but it states that some directories (app/proprietary, app/saas and engine/, the last clause truncated) have separate licenses. The README calls the project open-core."
          },
          {
            "q": "How do I install it quickly?",
            "a": "Run the Docker command from the README, then open http://localhost:8080. The download page offers a Windows .exe, a native Mac app and a Linux .jar. The GitHub v3.3.0 release also ships .msi, setup .exe, .dmg, .deb, .rpm and .AppImage files."
          },
          {
            "q": "Do my files leave my machine?",
            "a": "The maker says the editor runs on your machine or server and documents are not sent to external services. This is a maker claim. How the AI features handle data is not documented in the sources."
          },
          {
            "q": "Which platforms are supported?",
            "a": "Windows, macOS and Linux desktop apps, plus Docker, Kubernetes (Helm) and a manual .jar server setup. The browser UI is served by the self-hosted server."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": [
          "**Stirling PDF looks like a well-maintained, widely used option for local or self-hosted PDF work, with open questions about licensing, pricing and the AI features.** It has many installer formats, an API and active development (last commit 2026-11-15).",
          "Before relying on it, read the LICENSE, ask the maker about paid-plan pricing and check how the AI features handle data. PromptQuorum has not tested the app, so this verdict rests on the maker's statements and public sources."
        ]
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Stirling PDF website](https://www.stirlingpdf.com?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Download page](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Pricing page](https://www.stirlingpdf.com/pricing?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[GitHub repository and README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[GitHub release v3.3.0](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[LICENSE](https://github.com/Stirling-Tools/Stirling-PDF/blob/HEAD/LICENSE?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Privacy policy](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Pocket-lint review](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Contabo: BentoPDF vs Stirling PDF](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[XDA Developers: replaced Stirling PDF](https://www.xda-developers.com/replaced-stirling-pdf-with-this-self-hosted-pdf-toolkit/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[Docling Review](/power-local-llm/docling-review) — an open-source document parsing library, from the same directory category.",
          "[OpenDataLoader PDF Review](/power-local-llm/opendataloader-pdf-review) — an open-source PDF parser, from the same directory category.",
          "[The Complete Local LLM Software Directory](/power-local-llm/local-llm-software-directory) — the directory entry for Stirling PDF and related tools."
        ]
      }
    }
  },
  de: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-16",
    "dateModified": "2026-11-16",
    "next_refresh_due": "2027-05-16",
    "theme": "RAG & Document Chat",
    "title": "Stirling PDF im Überblick: Open-Core-PDF-Toolkit für Desktop und Self-Hosting",
    "seoTitle": "Stirling PDF im Überblick: Funktionen, Installation, Datenschutz",
    "intro": "Stirling PDF ist ein PDF-Toolkit, das als Desktop-App, als selbst gehosteter Webserver oder als API läuft. Dieser Überblick fasst zusammen, was der Hersteller und öffentliche Quellen sagen. PromptQuorum hat die App nicht getestet.",
    "metaDescription": "Sachlicher Überblick über Stirling PDF, einen Open-Core-PDF-Editor mit API für Desktop, Docker und Kubernetes. Installation, Lizenzgrenzen und offene Fragen.",
    "audience": "Privatpersonen, die einen lokalen PDF-Editor suchen, sowie IT- und Entwicklerteams, die selbst gehostete PDF-Automatisierung und API-Verarbeitung benötigen.",
    "readTime": "5 Min. Lesezeit",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Stirling PDF Überblick",
    "targetKeywords": [
      "Stirling PDF Überblick",
      "selbst gehosteter PDF-Editor",
      "Open-Source-PDF-Editor",
      "Stirling PDF Docker",
      "Adobe-Acrobat-Alternative"
    ],
    "leadAnswerBlock": "Stirling PDF ist ein Open-Core-PDF-Toolkit von Stirling PDF Inc., das PDFs bearbeitet, konvertiert, per OCR erkennt, schwärzt und stapelweise verarbeitet. Es läuft unter Windows, macOS und Linux oder als selbst gehosteter Server über Docker, Kubernetes oder eine .jar-Datei. Die neueste Version ist 3.3.0 (5. November 2026), der letzte Commit auf GitHub stammt vom 15. November 2026.",
    "quickAnswerTop": {
      "question": "Was ist Stirling PDF?",
      "answer": "Stirling PDF ist ein Open-Core-PDF-Toolkit, das PDFs bearbeitet, konvertiert, per OCR erkennt, schwärzt und stapelweise verarbeitet – als Desktop-App, als selbst gehosteter Server oder als API.",
      "bullets": [
        "Lizenz: MIT mit Ausnahmen; einige Verzeichnisse stehen unter gesonderten Lizenzen.",
        "Preis: laut Website für Privatpersonen kostenlos; für das kostenpflichtige Server Plan und die Enterprise-Angebote sind keine Preise veröffentlicht.",
        "Plattformen: Windows, macOS, Linux, Docker, Kubernetes, manueller .jar-Server.",
        "Von PromptQuorum nicht getestet."
      ]
    },
    "toc": [
      {
        "label": "Zusammenfassung",
        "anchor": "tldr"
      },
      {
        "label": "Überblick",
        "anchor": "overview"
      },
      {
        "label": "Bezugsquellen",
        "anchor": "get-it"
      },
      {
        "label": "Anforderungen",
        "anchor": "requirements"
      },
      {
        "label": "Funktionen",
        "anchor": "features"
      },
      {
        "label": "Datenschutz",
        "anchor": "privacy"
      },
      {
        "label": "Für wen geeignet",
        "anchor": "who-should-use"
      },
      {
        "label": "Was wir nicht prüfen konnten",
        "anchor": "could-not-verify"
      },
      {
        "label": "Alternativen",
        "anchor": "alternatives"
      },
      {
        "label": "FAQ",
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
            "text": "Stirling PDF ist ein Open-Core-PDF-Toolkit, das PDFs bearbeitet, konvertiert, per OCR erkennt, schwärzt und stapelweise verarbeitet – als Desktop-App, als selbst gehosteter Server oder als API."
          },
          {
            "type": "plain-terms",
            "text": "Stirling PDF ist ein PDF-Toolkit, das als Desktop-App, als selbst gehosteter Webserver oder als API läuft."
          }
        ],
        "items": [
          "**Stirling PDF ist ein vielfach mit Sternen markiertes Open-Core-PDF-Toolkit.** Das Projekt wird aktiv gepflegt: neueste Version 3.3.0 (5. November 2026), letzter Commit am 15. November 2026.",
          "Es läuft als Desktop-App unter Windows, macOS und Linux oder als selbst gehosteter Server über Docker, Kubernetes oder eine .jar-Datei.",
          "Laut Website ist es für Privatpersonen kostenlos. Kostenpflichtige Angebote (Server Plan und Enterprise) existieren, Preise wurden jedoch nicht gefunden.",
          "Die MIT-Lizenz hat Ausnahmen: Einige Verzeichnisse fallen unter gesonderte Lizenzen.",
          "Der Hersteller sagt, Dokumente würden nicht an externe Dienste gesendet. Das ist eine Herstelleraussage; der Datenfluss der KI-Funktionen ist in den Quellen nicht dokumentiert.",
          "PromptQuorum hat die App nicht getestet."
        ]
      },
      "overview": {
        "id": "overview",
        "title": "Überblick",
        "content": [
          "**Stirling PDF ist ein PDF-Editor und eine Plattform zur Dokumentenverarbeitung, die Sie selbst betreiben – auf dem Desktop oder auf einem Server.** Hersteller ist Stirling PDF Inc., die sich in ihrer Datenschutzerklärung als US-Unternehmen bezeichnet.",
          "Laut Hersteller bietet es mehr als 60 Werkzeuge für Desktop oder Server, darunter Bearbeiten, Zusammenführen, Teilen, Signieren, Schwärzen, Konvertieren, OCR und Komprimieren. Die README nennt mehr als 50, die Werkzeugzahl ist zwischen den Quellen also uneinheitlich.",
          "Über den Editor hinaus beschreibt der Hersteller No-Code-Pipelines, eine REST API, eine MCP-Schnittstelle, Webhooks und einen KI-Assistenten. Das Projekt wird als Open-Core beschrieben: Die README verweist auf Angebote für Server Plan und Enterprise.",
          "Es gibt unabhängige Berichterstattung. Pocket-lint und XDA Developers haben wohlwollende Beiträge veröffentlicht, und ein XDA-Autor wechselte später aus Datenschutzgründen zu einem anderen selbst gehosteten Toolkit, wobei die Einzelheiten nicht in unseren Notizen stehen. Eine positive Besprechung finden Sie bei [Pocket-lint](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review).",
          "Dieser Überblick beruht nicht auf eigenen Tests. Er fasst die Seiten des Herstellers und öffentliche Quellen zusammen; Herstelleraussagen sind als solche gekennzeichnet."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "So erhalten Sie Stirling PDF",
        "content": [
          "**Sie können Stirling PDF mit einem nativen Installer, einem einzelnen Docker-Befehl, Helm oder einer manuellen .jar-Datei installieren.** Die [Download-Seite](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) listet die Optionen auf, und das [GitHub-Release v3.3.0](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) enthält die Installationsdateien."
        ],
        "columns": [
          "Plattform",
          "Bezugsquelle"
        ],
        "rows": [
          {
            "Plattform": "Windows",
            "Bezugsquelle": "Eigenständige .exe laut [Download-Seite](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review). Release-Dateien: Stirling-PDF-windows-x86_64.msi und Stirling-PDF-windows-arm64-setup.exe."
          },
          {
            "Plattform": "macOS",
            "Bezugsquelle": "Native App von der Download-Seite. Release-Dateien: Stirling-PDF-macos-universal.dmg und eine .app.tar.gz ([Release](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review))."
          },
          {
            "Plattform": "Linux",
            "Bezugsquelle": "Release-Dateien: .AppImage, .deb und .rpm (x86_64). Laut Download-Seite wird die Java-.jar manuell ausgeführt."
          },
          {
            "Plattform": "Docker",
            "Bezugsquelle": "`docker run -p 8080:8080 docker.stirlingpdf.com/stirlingtools/stirling-pdf`, danach http://localhost:8080 öffnen (laut [README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review))."
          },
          {
            "Plattform": "Kubernetes",
            "Bezugsquelle": "Bereitstellung mit Helm auf jedem Kubernetes-Cluster, laut Download-Seite."
          },
          {
            "Plattform": "Web (selbst gehostete Browser-Oberfläche)",
            "Bezugsquelle": "Wird vom selbst gehosteten Server bereitgestellt (Docker oder Server-.jar)."
          },
          {
            "Plattform": "Bare Metal / jedes OS mit Java",
            "Bezugsquelle": "Manuelle Server-Einrichtung mit der .jar (Stirling-PDF-server.jar und Stirling-PDF.jar in den Release-Dateien)."
          }
        ],
        "note": "Ein Eintrag im App Store oder bei Google Play wurde nicht gefunden."
      },
      "requirements": {
        "id": "requirements",
        "title": "Anforderungen",
        "content": [
          "**Die Quellen nennen keine Anforderungen an RAM, GPU, Speicherplatz oder Java-Version.** Dokumentiert sind nur die Betriebssysteme und die Paketierung."
        ],
        "columns": [
          "Punkt",
          "Aussage der Quellen"
        ],
        "rows": [
          {
            "Punkt": "RAM",
            "Aussage der Quellen": "Nicht angegeben"
          },
          {
            "Punkt": "GPU",
            "Aussage der Quellen": "Nicht angegeben"
          },
          {
            "Punkt": "Speicherplatz",
            "Aussage der Quellen": "Nicht angegeben"
          },
          {
            "Punkt": "Betriebssystem",
            "Aussage der Quellen": "Windows (x86_64 und arm64), macOS (universal), Linux (x86_64)"
          },
          {
            "Punkt": "Java",
            "Aussage der Quellen": "Die .jar-Varianten setzen eine Java-Laufzeit voraus; keine Version angegeben"
          },
          {
            "Punkt": "Docker",
            "Aussage der Quellen": "Für die Container-Variante erforderlich"
          }
        ],
        "note": "Prüfen Sie vor dem Einsatz auf kleiner Hardware die Dokumentation des Herstellers."
      },
      "features": {
        "id": "features",
        "title": "Funktionen",
        "content": [
          "**Der Hersteller nennt ein breites Werkzeugangebot sowie Automatisierungs- und API-Funktionen.** Alle folgenden Punkte sind Herstelleraussagen; PromptQuorum hat sie nicht getestet."
        ],
        "items": [
          "Mehr als 60 Bearbeitungswerkzeuge für Desktop oder Server (die README nennt mehr als 50): bearbeiten, zusammenführen, teilen, signieren, schwärzen, konvertieren, OCR, komprimieren.",
          "No-Code-Pipelines in der Oberfläche und APIs für die Stapelverarbeitung, darunter OCR, Klassifizieren, Validieren, Schwärzen, Komprimieren und Weiterleiten.",
          "REST API für nahezu alle Werkzeuge sowie eine MCP-Schnittstelle und Webhooks.",
          "KI-Assistent, der Änderungen in der geöffneten Datei vornimmt (schwärzen, übersetzen, zusammenfassen, konvertieren).",
          "SSO, Auditing und flexible On-Premises-Bereitstellung, beschrieben als „Enterprise-grade“.",
          "Oberfläche in mehr als 40 Sprachen.",
          "Laut Pocket-lint befand sich der Texteditor zum Zeitpunkt der Besprechung in einer Alpha-Phase."
        ]
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenschutz",
        "content": [
          "**Der Hersteller sagt, der Editor laufe auf Ihrem eigenen Rechner oder Server und Dokumente würden nicht an externe Dienste gesendet.** Das ist eine Herstelleraussage. Der Quellcode ist öffentlich und lässt sich daher prüfen.",
          "Der Datenfluss der KI-Funktionen ist in den Quellen nicht dokumentiert, und die Quellen sagen nicht, ob sie lokal laufen oder externe Dienste aufrufen.",
          "Zur Telemetrie berichtet Contabo von einer Analysefunktion, die in der Vergangenheit standardmäßig aktiv war und später konfigurierbar wurde. Ein Test im Gnoppix-Forum fand keine Telemetrie. Keine der beiden Aussagen ist anhand des aktuellen Codes oder Richtlinientexts bestätigt. Die [Datenschutzerklärung](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) des Herstellers ist die maßgebliche Quelle.",
          "Ob für die Desktop- oder Docker-Versionen ein Konto nötig ist, ist nicht angegeben. Die Website hat Links zu Anmelden und Registrieren, und es gibt eine .jar-Variante mit Login."
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen geeignet",
        "items": [
          "**Es eignet sich für Personen, die PDFs auf der eigenen Hardware verarbeiten möchten.**",
          "Personen, die PDFs lokal bearbeiten möchten, statt sie bei Online-Konvertern hochzuladen.",
          "IT- und Entwicklerteams, die eine selbst gehostete PDF-API oder Stapel-Pipelines auf Docker oder Kubernetes wünschen.",
          "Nutzer, die einen kostenlosen Desktop-PDF-Editor mit OCR und Schwärzen suchen."
        ]
      },
      "whoShouldNotUse": {
        "id": "could-not-verify",
        "title": "Was wir nicht prüfen konnten",
        "items": [
          "**Mehrere entscheidungsrelevante Punkte sind durch die Quellen nicht bestätigt.**",
          "Preise: Auf der abgerufenen Preisseite stehen weder Beträge noch Stufen; Besucher werden aufgefordert, eine Demo zu buchen. Unklar ist auch, welche Funktionen (SSO, Auditing, On-Premises) zu welchem kostenpflichtigen Tarif gehören.",
          "Vollständige Lizenzierung: Die LICENSE ist MIT, aber die Klausel zum Verzeichnis engine/ ist abgeschnitten, und app/proprietary sowie app/saas stehen unter gesonderten Lizenzen. Wer für alle Komponenten eine rein quelloffene Lizenz benötigt, sollte zuerst die LICENSE prüfen.",
          "Systemanforderungen: RAM, GPU, Speicherplatz und Java-Version sind nicht angegeben.",
          "KI-Modell und OCR-Engine: nicht benannt, und es ist unklar, ob KI-Funktionen offline bleiben. Wer ausschließlich Offline-KI benötigt, sollte das nicht voraussetzen.",
          "Telemetrie in der aktuellen Version: Es wurden nur Aussagen Dritter (Contabo, ein Forumstest) gefunden.",
          "Kontopflicht für die Desktop- und Docker-Versionen: nicht angegeben.",
          "Die Zahl „30M+ Downloads“ ist eine Herstelleraussage ohne unabhängige Bestätigung.",
          "Ein gehosteter Dienst: Die Nutzungsbedingungen erwähnen einen solchen angeblich, Einzelheiten wurden jedoch nicht geprüft.",
          "Die Einzelheiten des XDA-Artikels eines Autors, der gewechselt ist, sowie der Kritik am Cookie-Banner konnten nicht erfasst werden.",
          "Firmensitz: Die einzige Adresse aus einer Primärquelle ist eine Postadresse in San Francisco, und die Richtlinie bezeichnet den Hersteller als US-Unternehmen.",
          "Anzahl der Forks und Store-Bewertung: nicht verfügbar."
        ]
      },
      "vsAlternatives": {
        "id": "alternatives",
        "title": "Alternativen",
        "content": [
          "**Die Quellen nennen vier Alternativen, PromptQuorum hat sie aber nicht praktisch verglichen.** Die folgenden Hinweise geben nur wieder, was die Quellen sagen."
        ],
        "columns": [
          "Alternative",
          "Aussage der Quellen"
        ],
        "rows": [
          {
            "Alternative": "BentoPDF",
            "Aussage der Quellen": "Selbst gehostetes PDF-Toolkit, in einem [Contabo-Artikel](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) direkt mit Stirling PDF verglichen. Contabo ist ein Hosting-Anbieter."
          },
          {
            "Alternative": "Adobe Acrobat",
            "Aussage der Quellen": "Kommerzieller PDF-Editor, den Stirling PDF laut Testern ersetzt."
          },
          {
            "Alternative": "UPDF",
            "Aussage der Quellen": "Verkauft ein konkurrierendes PDF-Produkt und veröffentlicht eine Besprechung von Stirling PDF, die daher voreingenommen ist."
          },
          {
            "Alternative": "SwifDoo PDF",
            "Aussage der Quellen": "Verkauft ein konkurrierendes PDF-Produkt und veröffentlicht eine Besprechung von Stirling PDF, die daher voreingenommen ist."
          }
        ]
      },
      "faq": {
        "id": "faq",
        "title": "FAQ",
        "faqs": [
          {
            "q": "Ist Stirling PDF kostenlos?",
            "a": "Laut Website ist es für Privatpersonen kostenlos, und das Projekt ist Open-Core. Kostenpflichtige Angebote (Server Plan und Enterprise) existieren, Preise stehen auf den abgerufenen Seiten jedoch nicht."
          },
          {
            "q": "Ist es wirklich Open Source?",
            "a": "Die LICENSE ist MIT, hält aber fest, dass einige Verzeichnisse (app/proprietary, app/saas und engine/, wobei die letzte Klausel abgeschnitten ist) gesonderte Lizenzen haben. Die README bezeichnet das Projekt als Open-Core."
          },
          {
            "q": "Wie installiere ich es schnell?",
            "a": "Führen Sie den Docker-Befehl aus der README aus und öffnen Sie dann http://localhost:8080. Die Download-Seite bietet eine Windows-.exe, eine native Mac-App und eine Linux-.jar. Das GitHub-Release v3.3.0 enthält außerdem .msi-, Setup-.exe-, .dmg-, .deb-, .rpm- und .AppImage-Dateien."
          },
          {
            "q": "Verlassen meine Dateien meinen Rechner?",
            "a": "Der Hersteller sagt, der Editor laufe auf Ihrem Rechner oder Server und Dokumente würden nicht an externe Dienste gesendet. Das ist eine Herstelleraussage. Wie die KI-Funktionen mit Daten umgehen, ist in den Quellen nicht dokumentiert."
          },
          {
            "q": "Welche Plattformen werden unterstützt?",
            "a": "Desktop-Apps für Windows, macOS und Linux sowie Docker, Kubernetes (Helm) und eine manuelle .jar-Server-Einrichtung. Die Browser-Oberfläche wird vom selbst gehosteten Server bereitgestellt."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": [
          "**Stirling PDF wirkt wie eine gut gepflegte, weit verbreitete Option für lokale oder selbst gehostete PDF-Arbeit, mit offenen Fragen zu Lizenzierung, Preisen und den KI-Funktionen.** Es bietet viele Installationsformate, eine API und aktive Entwicklung (letzter Commit am 15. November 2026).",
          "Lesen Sie vor dem Einsatz die LICENSE, fragen Sie den Hersteller nach den Preisen der kostenpflichtigen Tarife und prüfen Sie, wie die KI-Funktionen mit Daten umgehen. PromptQuorum hat die App nicht getestet; dieses Fazit beruht daher auf Herstelleraussagen und öffentlichen Quellen."
        ]
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[Stirling-PDF-Website](https://www.stirlingpdf.com?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Download-Seite](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Preisseite](https://www.stirlingpdf.com/pricing?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[GitHub-Repository und README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[GitHub-Release v3.3.0](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[LICENSE](https://github.com/Stirling-Tools/Stirling-PDF/blob/HEAD/LICENSE?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Datenschutzerklärung](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Pocket-lint-Besprechung](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Contabo: BentoPDF vs Stirling PDF](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[XDA Developers: Stirling PDF ersetzt](https://www.xda-developers.com/replaced-stirling-pdf-with-this-self-hosted-pdf-toolkit/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[Docling Review](/de/power-local-llm/docling-review) — eine quelloffene Bibliothek zum Parsen von Dokumenten, aus derselben Verzeichniskategorie.",
          "[OpenDataLoader PDF Review](/de/power-local-llm/opendataloader-pdf-review) — ein quelloffener PDF-Parser, aus derselben Verzeichniskategorie.",
          "[Das vollständige Verzeichnis für lokale LLM-Software](/de/power-local-llm/local-llm-software-directory) — der Verzeichniseintrag für Stirling PDF und verwandte Tools."
        ]
      }
    },
    "heroImage": "/images/stirling-pdf-review-hero-de.webp"
  },
  fr: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-16",
    "dateModified": "2026-11-16",
    "next_refresh_due": "2027-05-16",
    "theme": "RAG & Document Chat",
    "title": "Avis sur Stirling PDF : boîte à outils PDF open-core pour poste et auto-hébergement",
    "seoTitle": "Avis Stirling PDF : fonctions, installation, vie privée",
    "intro": "Stirling PDF est une boîte à outils PDF qui fonctionne comme application de bureau, serveur web auto-hébergé ou API. Cet avis résume ce que disent l'éditeur et les sources publiques. PromptQuorum n'a pas testé l'application.",
    "metaDescription": "Avis factuel sur Stirling PDF, éditeur PDF open-core sur poste, Docker ou Kubernetes : installation, limites de licence et points non vérifiés.",
    "audience": "Particuliers qui veulent un éditeur PDF local, et équipes IT ou développeurs qui ont besoin d'automatisation PDF auto-hébergée et d'un traitement par API.",
    "readTime": "5 min de lecture",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "avis Stirling PDF",
    "targetKeywords": [
      "avis Stirling PDF",
      "éditeur PDF auto-hébergé",
      "éditeur PDF open source",
      "Stirling PDF Docker",
      "alternative à Adobe Acrobat"
    ],
    "leadAnswerBlock": "Stirling PDF est une boîte à outils PDF open-core de Stirling PDF Inc. qui modifie, convertit, passe à l'OCR, caviarde et traite par lots des PDF. Elle fonctionne sous Windows, macOS et Linux, ou comme serveur auto-hébergé via Docker, Kubernetes ou un fichier .jar. Sa dernière version est la 3.3.0 (5 novembre 2026), et le dernier commit sur GitHub date du 15 novembre 2026.",
    "quickAnswerTop": {
      "question": "Qu'est-ce que Stirling PDF ?",
      "answer": "Stirling PDF est une boîte à outils PDF open-core qui modifie, convertit, passe à l'OCR, caviarde et traite par lots des PDF, sous forme d'application de bureau, de serveur auto-hébergé ou d'API.",
      "bullets": [
        "Licence : MIT avec exceptions ; certains répertoires relèvent de licences distinctes.",
        "Prix : gratuit pour un usage individuel selon le site ; les offres payantes Server Plan et Enterprise n'ont pas de prix publiés.",
        "Plateformes : Windows, macOS, Linux, Docker, Kubernetes, serveur .jar manuel.",
        "Non testé par PromptQuorum."
      ]
    },
    "toc": [
      {
        "label": "Points clés",
        "anchor": "tldr"
      },
      {
        "label": "Présentation",
        "anchor": "overview"
      },
      {
        "label": "Comment l'obtenir",
        "anchor": "get-it"
      },
      {
        "label": "Prérequis",
        "anchor": "requirements"
      },
      {
        "label": "Fonctionnalités",
        "anchor": "features"
      },
      {
        "label": "Vie privée",
        "anchor": "privacy"
      },
      {
        "label": "Pour qui",
        "anchor": "who-should-use"
      },
      {
        "label": "Ce que nous n'avons pas pu vérifier",
        "anchor": "could-not-verify"
      },
      {
        "label": "Alternatives",
        "anchor": "alternatives"
      },
      {
        "label": "FAQ",
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
            "text": "Stirling PDF est une boîte à outils PDF open-core qui modifie, convertit, passe à l'OCR, caviarde et traite par lots des PDF, sous forme d'application de bureau, de serveur auto-hébergé ou d'API."
          },
          {
            "type": "plain-terms",
            "text": "Stirling PDF est une boîte à outils PDF qui fonctionne comme application de bureau, serveur web auto-hébergé ou API."
          }
        ],
        "items": [
          "**Stirling PDF est une boîte à outils PDF open-core très suivie.** Le projet est activement maintenu : dernière version 3.3.0 (5 novembre 2026), dernier commit le 15 novembre 2026.",
          "Elle fonctionne comme application de bureau sous Windows, macOS et Linux, ou comme serveur auto-hébergé via Docker, Kubernetes ou un .jar.",
          "Le site indique qu'elle est gratuite pour un usage individuel. Des offres payantes Server Plan et Enterprise existent, mais aucun prix n'a été trouvé.",
          "La licence MIT comporte des exceptions : certains répertoires relèvent de licences distinctes.",
          "L'éditeur affirme que les documents ne sont pas envoyés à des services externes. C'est une affirmation de l'éditeur, et le flux de données des fonctions d'IA n'est pas documenté dans les sources.",
          "PromptQuorum n'a pas testé l'application."
        ]
      },
      "overview": {
        "id": "overview",
        "title": "Présentation",
        "content": [
          "**Stirling PDF est un éditeur PDF et une plateforme de traitement de documents que vous exécutez vous-même, sur un poste ou sur un serveur.** L'éditeur est Stirling PDF Inc., qui se présente comme une société américaine dans sa politique de confidentialité.",
          "Selon l'éditeur, elle propose plus de 60 outils sur poste ou serveur, dont modifier, fusionner, scinder, signer, caviarder, convertir, OCR et compresser. Le README parle de plus de 50, le nombre d'outils diffère donc selon les sources.",
          "Au-delà de l'éditeur de PDF, l'éditeur du logiciel décrit des pipelines sans code, une API REST, une interface MCP, des webhooks et un assistant IA. Le projet est décrit comme open-core : le README renvoie vers les offres Server Plan et Enterprise.",
          "Il existe des articles indépendants. Pocket-lint et XDA Developers ont publié des textes favorables, et un rédacteur de XDA est ensuite passé à une autre boîte à outils auto-hébergée en invoquant des préoccupations de confidentialité, mais les détails ne figurent pas dans nos notes. Voir [Pocket-lint](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) pour un avis positif.",
          "Cet avis ne repose pas sur un test pratique. Il résume les pages de l'éditeur et des sources publiques, et les déclarations de l'éditeur sont présentées comme telles."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Comment obtenir Stirling PDF",
        "content": [
          "**Vous pouvez installer Stirling PDF avec un installateur natif, une seule commande Docker, Helm ou un .jar manuel.** La [page de téléchargement](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) liste les options, et la [version GitHub v3.3.0](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) contient les fichiers d'installation."
        ],
        "columns": [
          "Plateforme",
          "Comment l'obtenir"
        ],
        "rows": [
          {
            "Plateforme": "Windows",
            "Comment l'obtenir": ".exe autonome selon la [page de téléchargement](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review). Fichiers de la version : Stirling-PDF-windows-x86_64.msi et Stirling-PDF-windows-arm64-setup.exe."
          },
          {
            "Plateforme": "macOS",
            "Comment l'obtenir": "Application native sur la page de téléchargement. Fichiers de la version : Stirling-PDF-macos-universal.dmg et un .app.tar.gz ([version](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review))."
          },
          {
            "Plateforme": "Linux",
            "Comment l'obtenir": "Fichiers de la version : .AppImage, .deb et .rpm (x86_64). La page de téléchargement indique d'exécuter le .jar Java manuellement."
          },
          {
            "Plateforme": "Docker",
            "Comment l'obtenir": "`docker run -p 8080:8080 docker.stirlingpdf.com/stirlingtools/stirling-pdf`, puis ouvrir http://localhost:8080 (selon le [README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review))."
          },
          {
            "Plateforme": "Kubernetes",
            "Comment l'obtenir": "Déploiement avec Helm sur tout cluster Kubernetes, selon la page de téléchargement."
          },
          {
            "Plateforme": "Web (interface navigateur auto-hébergée)",
            "Comment l'obtenir": "Servie par le serveur auto-hébergé (Docker ou .jar serveur)."
          },
          {
            "Plateforme": "Machine physique / tout OS avec Java",
            "Comment l'obtenir": "Installation manuelle du serveur avec le .jar (Stirling-PDF-server.jar et Stirling-PDF.jar dans les fichiers de la version)."
          }
        ],
        "note": "Aucune fiche App Store ou Google Play n'a été trouvée."
      },
      "requirements": {
        "id": "requirements",
        "title": "Prérequis",
        "content": [
          "**Les sources n'indiquent ni la RAM, ni le GPU, ni l'espace disque, ni la version de Java requis.** Seuls les systèmes d'exploitation et les formats de paquet sont documentés."
        ],
        "columns": [
          "Élément",
          "Ce que disent les sources"
        ],
        "rows": [
          {
            "Élément": "RAM",
            "Ce que disent les sources": "Non indiqué"
          },
          {
            "Élément": "GPU",
            "Ce que disent les sources": "Non indiqué"
          },
          {
            "Élément": "Disque",
            "Ce que disent les sources": "Non indiqué"
          },
          {
            "Élément": "Système d'exploitation",
            "Ce que disent les sources": "Windows (fichiers x86_64 et arm64), macOS (universel), Linux (fichiers x86_64)"
          },
          {
            "Élément": "Java",
            "Ce que disent les sources": "Les voies .jar supposent un runtime Java ; aucune version n'est indiquée"
          },
          {
            "Élément": "Docker",
            "Ce que disent les sources": "Nécessaire pour la voie conteneur"
          }
        ],
        "note": "Consultez la documentation de l'éditeur avant un déploiement sur du matériel modeste."
      },
      "features": {
        "id": "features",
        "title": "Fonctionnalités",
        "content": [
          "**L'éditeur annonce un large éventail d'outils ainsi que des fonctions d'automatisation et d'API.** Tous les éléments ci-dessous sont des affirmations de l'éditeur ; PromptQuorum ne les a pas testés."
        ],
        "items": [
          "Plus de 60 outils d'édition sur poste ou serveur (le README parle de plus de 50) : modifier, fusionner, scinder, signer, caviarder, convertir, OCR, compresser.",
          "Pipelines sans code dans l'interface et API pour le traitement par lots, dont OCR, classification, validation, caviardage, compression et routage.",
          "API REST pour la quasi-totalité des outils, plus une interface MCP et des webhooks.",
          "Assistant IA qui effectue des modifications dans le fichier ouvert (caviarder, traduire, résumer, convertir).",
          "SSO, audit et déploiements sur site flexibles, décrits comme « Enterprise-grade ».",
          "Interface disponible dans plus de 40 langues.",
          "Selon Pocket-lint, l'éditeur de texte était en phase Alpha au moment de son test."
        ]
      },
      "privacy": {
        "id": "privacy",
        "title": "Vie privée",
        "content": [
          "**L'éditeur affirme que l'éditeur de PDF s'exécute sur votre propre machine ou serveur et que les documents ne sont pas envoyés à des services externes.** C'est une affirmation de l'éditeur. Le code source est public, il peut donc être vérifié.",
          "Le flux de données des fonctions d'IA n'est pas documenté dans les sources, et celles-ci ne précisent pas si elles s'exécutent en local ou font appel à des services externes.",
          "Sur la télémétrie, Contabo signale une fonction d'analyse activée par défaut par le passé, puis rendue configurable. Un test sur le forum Gnoppix n'a trouvé aucune télémétrie. Aucune de ces deux affirmations n'est confirmée par rapport au code actuel ou au texte de la politique. La [politique de confidentialité](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) de l'éditeur est la source primaire à lire.",
          "La nécessité d'un compte pour les versions de bureau ou Docker n'est pas précisée. Le site propose des liens de connexion et d'inscription, et un .jar avec connexion existe."
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Pour qui",
        "items": [
          "**Elle convient à ceux qui veulent traiter leurs PDF sur leur propre matériel.**",
          "Les personnes qui veulent modifier des PDF en local plutôt que de les envoyer à des convertisseurs en ligne.",
          "Les équipes IT et développeurs qui veulent une API PDF auto-hébergée ou des pipelines par lots sur Docker ou Kubernetes.",
          "Les utilisateurs qui veulent un éditeur PDF de bureau gratuit avec OCR et caviardage."
        ]
      },
      "whoShouldNotUse": {
        "id": "could-not-verify",
        "title": "Ce que nous n'avons pas pu vérifier",
        "items": [
          "**Plusieurs points importants pour la décision ne sont pas confirmés par les sources.**",
          "Prix : aucun montant ni formule n'apparaît sur la page de tarifs consultée, qui invite à réserver une démonstration. On ne sait pas non plus quelles fonctions (SSO, audit, sur site) relèvent de quelle offre payante.",
          "Licence complète : la LICENSE est MIT, mais la clause sur le répertoire engine/ est tronquée, et app/proprietary et app/saas relèvent de licences distinctes. Quiconque a besoin d'une licence purement open source pour tous les composants doit d'abord consulter la LICENSE.",
          "Configuration requise : RAM, GPU, disque et version de Java ne sont pas indiqués.",
          "Modèle d'IA et moteur OCR : non nommés, et on ne sait pas si les fonctions d'IA restent hors ligne. Quiconque a besoin d'une IA strictement hors ligne ne doit pas le présumer.",
          "Télémétrie dans la version actuelle : seules des déclarations de tiers (Contabo, un test sur forum) ont été trouvées.",
          "Obligation de compte pour les versions de bureau et Docker : non indiquée.",
          "Le chiffre « 30M+ téléchargements » est une affirmation de l'éditeur sans confirmation indépendante.",
          "Un service hébergé : les conditions d'utilisation en mentionneraient un, mais aucun détail n'a été vérifié.",
          "Les détails de l'article de XDA d'un rédacteur qui a changé d'outil, et de la critique sur la bannière de cookies, n'ont pas pu être relevés.",
          "Siège : la seule adresse issue d'une source primaire est une adresse postale à San Francisco, et la politique présente l'éditeur comme une société américaine.",
          "Nombre de forks et note sur les magasins d'applications : non disponibles."
        ]
      },
      "vsAlternatives": {
        "id": "alternatives",
        "title": "Alternatives",
        "content": [
          "**Les sources citent quatre alternatives, mais PromptQuorum ne les a pas comparées en pratique.** Les notes ci-dessous reprennent seulement ce que disent les sources."
        ],
        "columns": [
          "Alternative",
          "Ce que disent les sources"
        ],
        "rows": [
          {
            "Alternative": "BentoPDF",
            "Ce que disent les sources": "Boîte à outils PDF auto-hébergée comparée directement à Stirling PDF dans un [article de Contabo](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review). Contabo est un hébergeur."
          },
          {
            "Alternative": "Adobe Acrobat",
            "Ce que disent les sources": "Éditeur PDF commercial que, selon des testeurs, Stirling PDF remplace."
          },
          {
            "Alternative": "UPDF",
            "Ce que disent les sources": "Vend un produit PDF concurrent et publie un avis sur Stirling PDF, cet avis est donc partial."
          },
          {
            "Alternative": "SwifDoo PDF",
            "Ce que disent les sources": "Vend un produit PDF concurrent et publie un avis sur Stirling PDF, cet avis est donc partial."
          }
        ]
      },
      "faq": {
        "id": "faq",
        "title": "FAQ",
        "faqs": [
          {
            "q": "Stirling PDF est-il gratuit ?",
            "a": "Le site indique qu'il est gratuit pour un usage individuel, et le projet est open-core. Des offres payantes Server Plan et Enterprise existent, mais aucun prix n'apparaît dans les pages consultées."
          },
          {
            "q": "Est-il vraiment open source ?",
            "a": "La LICENSE est MIT, mais elle précise que certains répertoires (app/proprietary, app/saas et engine/, cette dernière clause étant tronquée) ont des licences distinctes. Le README qualifie le projet d'open-core."
          },
          {
            "q": "Comment l'installer rapidement ?",
            "a": "Exécutez la commande Docker du README, puis ouvrez http://localhost:8080. La page de téléchargement propose un .exe Windows, une application Mac native et un .jar Linux. La version GitHub v3.3.0 fournit aussi des fichiers .msi, setup .exe, .dmg, .deb, .rpm et .AppImage."
          },
          {
            "q": "Mes fichiers quittent-ils ma machine ?",
            "a": "L'éditeur affirme que l'éditeur de PDF s'exécute sur votre machine ou serveur et que les documents ne sont pas envoyés à des services externes. C'est une affirmation de l'éditeur. La manière dont les fonctions d'IA traitent les données n'est pas documentée dans les sources."
          },
          {
            "q": "Quelles plateformes sont prises en charge ?",
            "a": "Les applications de bureau Windows, macOS et Linux, ainsi que Docker, Kubernetes (Helm) et une installation manuelle du serveur .jar. L'interface navigateur est servie par le serveur auto-hébergé."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": [
          "**Stirling PDF semble être une option bien maintenue et très utilisée pour le travail PDF local ou auto-hébergé, avec des questions ouvertes sur la licence, les prix et les fonctions d'IA.** Elle propose de nombreux formats d'installation, une API et un développement actif (dernier commit le 15 novembre 2026).",
          "Avant de vous y fier, lisez la LICENSE, interrogez l'éditeur sur le prix des offres payantes et vérifiez comment les fonctions d'IA traitent les données. PromptQuorum n'a pas testé l'application : ce verdict repose sur les déclarations de l'éditeur et sur des sources publiques."
        ]
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Site web de Stirling PDF](https://www.stirlingpdf.com?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Page de téléchargement](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Page de tarifs](https://www.stirlingpdf.com/pricing?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Dépôt GitHub et README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Version GitHub v3.3.0](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[LICENSE](https://github.com/Stirling-Tools/Stirling-PDF/blob/HEAD/LICENSE?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Politique de confidentialité](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Avis de Pocket-lint](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Contabo : BentoPDF contre Stirling PDF](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[XDA Developers : Stirling PDF remplacé](https://www.xda-developers.com/replaced-stirling-pdf-with-this-self-hosted-pdf-toolkit/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lectures associées",
        "items": [
          "[Avis sur Docling](/fr/power-local-llm/docling-review) — une bibliothèque open source d'analyse de documents, de la même catégorie du répertoire.",
          "[Avis sur OpenDataLoader PDF](/fr/power-local-llm/opendataloader-pdf-review) — un analyseur PDF open source, de la même catégorie du répertoire.",
          "[Le répertoire complet des logiciels de LLM locaux](/fr/power-local-llm/local-llm-software-directory) — la fiche de Stirling PDF et des outils associés dans le répertoire."
        ]
      }
    },
    "heroImage": "/images/stirling-pdf-review-hero-fr.webp"
  },
  ja: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-16",
    "dateModified": "2026-11-16",
    "next_refresh_due": "2027-05-16",
    "theme": "RAG & Document Chat",
    "title": "Stirling PDFレビュー：デスクトップとセルフホストで使えるオープンコアのPDFツールキット",
    "seoTitle": "Stirling PDFレビュー：機能・導入・プライバシー",
    "intro": "Stirling PDFは、デスクトップアプリ、セルフホストのWebサーバー、APIのいずれでも動かせるPDFツールキットです。このレビューは、開発元と公開情報の内容をまとめたものです。PromptQuorumはこのアプリを検証していません。",
    "metaDescription": "デスクトップ、Docker、Kubernetesで動くオープンコアのPDFエディタ兼APIであるStirling PDFの事実ベースのレビュー。導入方法、ライセンスの制約、未確認事項を整理します。",
    "audience": "ローカルで使えるPDFエディタを探している個人、およびセルフホストのPDF自動化やAPI処理が必要なIT・開発チーム。",
    "readTime": "5分で読める",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Stirling PDF レビュー",
    "targetKeywords": [
      "Stirling PDF レビュー",
      "セルフホスト PDFエディタ",
      "オープンソース PDFエディタ",
      "Stirling PDF Docker",
      "Adobe Acrobat 代替"
    ],
    "leadAnswerBlock": "Stirling PDFは、Stirling PDF Inc.が提供するオープンコアのPDFツールキットで、PDFの編集、変換、OCR、墨消し、一括処理に対応します。Windows、macOS、Linuxで動作し、Docker、Kubernetes、.jarファイルによるセルフホストサーバーとしても使えます。最新リリースは3.3.0（2026年11月5日）で、GitHubの最終コミットは2026年11月15日です。",
    "quickAnswerTop": {
      "question": "Stirling PDFとは何ですか？",
      "answer": "Stirling PDFは、PDFの編集、変換、OCR、墨消し、一括処理を行うオープンコアのPDFツールキットで、デスクトップアプリ、セルフホストサーバー、APIとして使えます。",
      "bullets": [
        "ライセンス：例外付きのMIT。一部のディレクトリは別のライセンスです。",
        "価格：サイトによると個人利用は無料。有料のServer PlanとEnterpriseの価格は公開されていません。",
        "対応環境：Windows、macOS、Linux、Docker、Kubernetes、手動の.jarサーバー。",
        "PromptQuorumによる検証は行っていません。"
      ]
    },
    "toc": [
      {
        "label": "重要ポイント",
        "anchor": "tldr"
      },
      {
        "label": "概要",
        "anchor": "overview"
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
        "label": "機能",
        "anchor": "features"
      },
      {
        "label": "プライバシー",
        "anchor": "privacy"
      },
      {
        "label": "おすすめの対象",
        "anchor": "who-should-use"
      },
      {
        "label": "確認できなかった点",
        "anchor": "could-not-verify"
      },
      {
        "label": "代替ツール",
        "anchor": "alternatives"
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
            "text": "Stirling PDFは、PDFの編集、変換、OCR、墨消し、一括処理を行うオープンコアのPDFツールキットで、デスクトップアプリ、セルフホストサーバー、APIとして使えます。"
          },
          {
            "type": "plain-terms",
            "text": "Stirling PDFは、デスクトップアプリ、セルフホストのWebサーバー、APIのいずれでも動かせるPDFツールキットです。"
          }
        ],
        "items": [
          "**Stirling PDFは、多くのスターを集めているオープンコアのPDFツールキットです。**プロジェクトは活発に保守されており、最新リリースは3.3.0（2026年11月5日）、最終コミットは2026年11月15日です。",
          "Windows、macOS、Linuxのデスクトップアプリとして、またはDocker、Kubernetes、.jarによるセルフホストサーバーとして動作します。",
          "サイトによると個人利用は無料です。有料のServer PlanとEnterpriseがありますが、価格は見つかりませんでした。",
          "MITライセンスには例外があり、一部のディレクトリは別のライセンスの対象です。",
          "開発元は、ドキュメントを外部サービスへ送信しないとしています。これは開発元の主張であり、AI機能のデータの流れは情報源に記載がありません。",
          "PromptQuorumはこのアプリを検証していません。"
        ]
      },
      "overview": {
        "id": "overview",
        "title": "概要",
        "content": [
          "**Stirling PDFは、デスクトップまたはサーバー上で自分で運用するPDFエディタ兼ドキュメント処理プラットフォームです。**開発元はStirling PDF Inc.で、プライバシーポリシーでは米国の企業と称しています。",
          "開発元によると、デスクトップまたはサーバーで60以上のツールを提供し、編集、結合、分割、署名、墨消し、変換、OCR、圧縮などに対応します。READMEでは50以上とされており、ツール数は情報源によって食い違っています。",
          "エディタのほかに、開発元はノーコードのパイプライン、REST API、MCPインターフェース、Webhook、AIアシスタントを挙げています。プロジェクトはオープンコアとされ、READMEにはServer PlanとEnterpriseへのリンクがあります。",
          "第三者による報道もあります。Pocket-lintとXDA Developersは好意的な記事を公開しており、XDAのライター1名はその後、プライバシー上の懸念を理由に別のセルフホスト型ツールキットへ乗り換えましたが、詳細は私たちの調査メモにはありません。肯定的なレビューの一例として[Pocket-lint](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)をご覧ください。",
          "このレビューは実機での検証に基づくものではありません。開発元のページと公開情報をまとめたもので、開発元の主張はそのように明記しています。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Stirling PDFの入手方法",
        "content": [
          "**Stirling PDFは、ネイティブのインストーラー、Dockerコマンド1つ、Helm、手動の.jarのいずれかで導入できます。**選択肢は[ダウンロードページ](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)に一覧があり、インストーラーのファイルは[GitHubのv3.3.0リリース](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)に含まれています。"
        ],
        "columns": [
          "プラットフォーム",
          "入手方法"
        ],
        "rows": [
          {
            "プラットフォーム": "Windows",
            "入手方法": "[ダウンロードページ](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)によるとスタンドアロンの.exe。リリースのファイル：Stirling-PDF-windows-x86_64.msiとStirling-PDF-windows-arm64-setup.exe。"
          },
          {
            "プラットフォーム": "macOS",
            "入手方法": "ダウンロードページのネイティブアプリ。リリースのファイル：Stirling-PDF-macos-universal.dmgと.app.tar.gz（[リリース](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)）。"
          },
          {
            "プラットフォーム": "Linux",
            "入手方法": "リリースのファイル：.AppImage、.deb、.rpm（x86_64）。ダウンロードページではJavaの.jarを手動で実行するよう案内しています。"
          },
          {
            "プラットフォーム": "Docker",
            "入手方法": "`docker run -p 8080:8080 docker.stirlingpdf.com/stirlingtools/stirling-pdf`を実行し、http://localhost:8080 を開きます（[README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)より）。"
          },
          {
            "プラットフォーム": "Kubernetes",
            "入手方法": "ダウンロードページによると、任意のKubernetesクラスターにHelmでデプロイできます。"
          },
          {
            "プラットフォーム": "Web（セルフホストのブラウザUI）",
            "入手方法": "セルフホストサーバー（Dockerまたはサーバー用.jar）が提供します。"
          },
          {
            "プラットフォーム": "ベアメタル／Javaが動く任意のOS",
            "入手方法": "サーバー用.jarによる手動セットアップ（リリースのファイルにStirling-PDF-server.jarとStirling-PDF.jar）。"
          }
        ],
        "note": "App StoreまたはGoogle Playの掲載は見つかりませんでした。"
      },
      "requirements": {
        "id": "requirements",
        "title": "動作要件",
        "content": [
          "**情報源には、RAM、GPU、ディスク、Javaバージョンの要件は記載されていません。**記載があるのはOSとパッケージ形式のみです。"
        ],
        "columns": [
          "項目",
          "情報源の記載"
        ],
        "rows": [
          {
            "項目": "RAM",
            "情報源の記載": "記載なし"
          },
          {
            "項目": "GPU",
            "情報源の記載": "記載なし"
          },
          {
            "項目": "ディスク",
            "情報源の記載": "記載なし"
          },
          {
            "項目": "OS",
            "情報源の記載": "Windows（x86_64とarm64のファイル）、macOS（universal）、Linux（x86_64のファイル）"
          },
          {
            "項目": "Java",
            "情報源の記載": ".jarの提供形態からJavaランタイムが必要と推測されるが、バージョンの記載なし"
          },
          {
            "項目": "Docker",
            "情報源の記載": "コンテナ版で必要"
          }
        ],
        "note": "小規模なハードウェアに導入する前に、開発元のドキュメントをご確認ください。"
      },
      "features": {
        "id": "features",
        "title": "機能",
        "content": [
          "**開発元は、幅広いツール群に加え、自動化とAPIの機能を挙げています。**以下はすべて開発元の主張であり、PromptQuorumは検証していません。"
        ],
        "items": [
          "デスクトップまたはサーバーで60以上の編集ツール（READMEでは50以上）：編集、結合、分割、署名、墨消し、変換、OCR、圧縮。",
          "UIのノーコードパイプラインと、OCR、分類、検証、墨消し、圧縮、振り分けなどの一括処理用API。",
          "ほぼすべてのツールに対応するREST API、MCPインターフェース、Webhook。",
          "開いているファイルを編集するAIアシスタント（墨消し、翻訳、要約、変換）。",
          "SSO、監査、柔軟なオンプレミス展開。「Enterprise-grade」と説明されています。",
          "40以上の言語に対応したインターフェース。",
          "Pocket-lintによると、同誌のレビュー時点ではテキストエディタはAlpha段階でした。"
        ]
      },
      "privacy": {
        "id": "privacy",
        "title": "プライバシー",
        "content": [
          "**開発元は、エディタは自分のマシンまたはサーバー上で動作し、ドキュメントは外部サービスに送信されないとしています。**これは開発元の主張です。ソースコードは公開されているため、確認できます。",
          "AI機能のデータの流れは情報源に記載がなく、ローカルで動くのか外部サービスを呼び出すのかも述べられていません。",
          "テレメトリについては、Contaboが、過去に初期状態で有効だった分析機能が後に設定可能になったと報告しています。Gnoppixのフォーラムでの検証ではテレメトリは見つかりませんでした。いずれも現行のコードやポリシー本文との照合は取れていません。開発元の[プライバシーポリシー](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)が、確認すべき一次情報です。",
          "デスクトップ版やDocker版でアカウントが必要かどうかは記載されていません。サイトにはログインとサインアップのリンクがあり、ログイン付きの.jarも存在します。"
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "おすすめの対象",
        "items": [
          "**PDFを自分のハードウェア上で処理したい方に向いています。**",
          "オンライン変換サービスにアップロードせず、PDFをローカルで編集したい方。",
          "DockerやKubernetes上でセルフホストのPDF APIや一括処理パイプラインを使いたいITチーム・開発チーム。",
          "OCRと墨消しを備えた無料のデスクトップPDFエディタを使いたい方。"
        ]
      },
      "whoShouldNotUse": {
        "id": "could-not-verify",
        "title": "確認できなかった点",
        "items": [
          "**判断に関わる複数の点が、情報源では確認できませんでした。**",
          "価格：取得した料金ページには金額やプランの記載がなく、デモの予約を求めています。また、SSO、監査、オンプレミスなどの機能がどの有料プランに含まれるかも不明です。",
          "ライセンスの全容：LICENSEはMITですが、engine/ディレクトリに関する条項は途中で切れており、app/proprietaryとapp/saasは別のライセンスです。全コンポーネントで純粋なオープンソースライセンスが必要な方は、先にLICENSEをご確認ください。",
          "システム要件：RAM、GPU、ディスク、Javaバージョンの記載はありません。",
          "AIモデルとOCRエンジン：名称が示されておらず、AI機能がオフラインで動くかどうかも不明です。厳密にオフラインのAIが必要な方は、動くものと決めつけないでください。",
          "現行バージョンのテレメトリ：第三者の記述（Contabo、フォーラムでの検証）のみ見つかりました。",
          "デスクトップ版とDocker版のアカウント要否：記載なし。",
          "「30M+ downloads」という数字は開発元の主張で、第三者による裏付けはありません。",
          "ホスト型サービス：利用規約に記載があるとされていますが、詳細は確認していません。",
          "乗り換えたライターによるXDAの記事の詳細と、Cookieバナーに関する批判の内容は、記録できませんでした。",
          "本社所在地：一次情報で確認できる住所はサンフランシスコの郵送先住所のみで、ポリシーでは開発元を米国の企業としています。",
          "フォーク数とストアの評価：入手できませんでした。"
        ]
      },
      "vsAlternatives": {
        "id": "alternatives",
        "title": "代替ツール",
        "content": [
          "**情報源は4つの代替ツールを挙げていますが、PromptQuorumは実機での比較をしていません。**以下のメモは、情報源の記述を言い換えたものにすぎません。"
        ],
        "columns": [
          "代替ツール",
          "情報源の記載"
        ],
        "rows": [
          {
            "代替ツール": "BentoPDF",
            "情報源の記載": "[Contaboの記事](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)でStirling PDFと直接比較されているセルフホスト型のPDFツールキット。Contaboはホスティング事業者です。"
          },
          {
            "代替ツール": "Adobe Acrobat",
            "情報源の記載": "レビュアーがStirling PDFで置き換えられるとしている商用PDFエディタ。"
          },
          {
            "代替ツール": "UPDF",
            "情報源の記載": "競合するPDF製品を販売し、Stirling PDFのレビューも公開しているため、そのレビューには偏りがあります。"
          },
          {
            "代替ツール": "SwifDoo PDF",
            "情報源の記載": "競合するPDF製品を販売し、Stirling PDFのレビューも公開しているため、そのレビューには偏りがあります。"
          }
        ]
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "Stirling PDFは無料ですか？",
            "a": "サイトによると個人利用は無料で、プロジェクトはオープンコアです。有料のServer PlanとEnterpriseがありますが、取得したページに価格の記載はありません。"
          },
          {
            "q": "本当にオープンソースですか？",
            "a": "LICENSEはMITですが、一部のディレクトリ（app/proprietary、app/saas、engine/。最後の条項は途中で切れています）は別のライセンスだと明記されています。READMEはこのプロジェクトをオープンコアと呼んでいます。"
          },
          {
            "q": "手早く導入するにはどうすればよいですか？",
            "a": "READMEのDockerコマンドを実行し、http://localhost:8080 を開きます。ダウンロードページではWindows用の.exe、Mac用のネイティブアプリ、Linux用の.jarが案内されています。GitHubのv3.3.0リリースには、.msi、セットアップ用.exe、.dmg、.deb、.rpm、.AppImageのファイルも含まれます。"
          },
          {
            "q": "ファイルはマシンの外に出ますか？",
            "a": "開発元は、エディタは自分のマシンまたはサーバー上で動作し、ドキュメントは外部サービスに送信されないとしています。これは開発元の主張です。AI機能がデータをどう扱うかは、情報源に記載がありません。"
          },
          {
            "q": "対応しているプラットフォームは？",
            "a": "Windows、macOS、Linuxのデスクトップアプリのほか、Docker、Kubernetes（Helm）、手動の.jarサーバー構成に対応します。ブラウザUIはセルフホストサーバーが提供します。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "総評",
        "content": [
          "**Stirling PDFは、ローカルまたはセルフホストでのPDF作業向けに、保守が行き届き広く使われている選択肢に見えますが、ライセンス、価格、AI機能については未解決の点があります。**多様なインストーラー形式、API、活発な開発（最終コミットは2026年11月15日）を備えています。",
          "頼る前に、LICENSEを読み、有料プランの価格を開発元に確認し、AI機能のデータの扱いを調べてください。PromptQuorumはこのアプリを検証していないため、この総評は開発元の主張と公開情報に基づいています。"
        ]
      },
      "sources": {
        "id": "sources",
        "title": "情報源",
        "items": [
          "[Stirling PDF公式サイト](https://www.stirlingpdf.com?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[ダウンロードページ](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[料金ページ](https://www.stirlingpdf.com/pricing?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[GitHubリポジトリとREADME](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[GitHubリリースv3.3.0](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[LICENSE](https://github.com/Stirling-Tools/Stirling-PDF/blob/HEAD/LICENSE?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[プライバシーポリシー](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Pocket-lintのレビュー](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Contabo：BentoPDF vs Stirling PDF](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[XDA Developers：Stirling PDFから乗り換え](https://www.xda-developers.com/replaced-stirling-pdf-with-this-self-hosted-pdf-toolkit/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[Doclingレビュー](/ja/power-local-llm/docling-review) — 同じディレクトリカテゴリのオープンソースのドキュメント解析ライブラリ。",
          "[OpenDataLoader PDFレビュー](/ja/power-local-llm/opendataloader-pdf-review) — 同じディレクトリカテゴリのオープンソースのPDFパーサー。",
          "[ローカルLLMソフトウェア完全ディレクトリ](/ja/power-local-llm/local-llm-software-directory) — Stirling PDFと関連ツールのディレクトリ項目。"
        ]
      }
    },
    "heroImage": "/images/stirling-pdf-review-hero-ja.webp"
  },
  zh: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-16",
    "dateModified": "2026-11-16",
    "next_refresh_due": "2027-05-16",
    "theme": "RAG & Document Chat",
    "title": "Stirling PDF 评测：面向桌面和自托管的开放核心 PDF 工具包",
    "seoTitle": "Stirling PDF 评测：功能、安装与隐私",
    "intro": "Stirling PDF 是一款 PDF 工具包，可作为桌面应用、自托管网页服务器或 API 运行。本评测汇总了开发方和公开来源的说法。PromptQuorum 未测试过该应用。",
    "metaDescription": "Stirling PDF 事实评测：一款可在桌面、Docker 或 Kubernetes 上运行的开放核心 PDF 编辑器与 API。涵盖安装方式、许可证限制和未解问题。",
    "audience": "想要本地 PDF 编辑器的个人用户，以及需要自托管 PDF 自动化和 API 处理的 IT 或开发团队。",
    "readTime": "阅读约5分钟",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Stirling PDF 评测",
    "targetKeywords": [
      "Stirling PDF 评测",
      "自托管 PDF 编辑器",
      "开源 PDF 编辑器",
      "Stirling PDF Docker 部署",
      "Adobe Acrobat 替代品"
    ],
    "leadAnswerBlock": "Stirling PDF 是 Stirling PDF Inc. 推出的开放核心 PDF 工具包，可编辑、转换、OCR、涂黑脱敏并批量处理 PDF。它可在 Windows、macOS 和 Linux 上运行，也可通过 Docker、Kubernetes 或 .jar 文件作为自托管服务器部署。最新版本为 3.3.0（2026年11月5日发布），GitHub 上最近一次提交是 2026年11月15日。",
    "quickAnswerTop": {
      "question": "什么是 Stirling PDF？",
      "answer": "Stirling PDF 是一款开放核心 PDF 工具包，可编辑、转换、OCR、涂黑脱敏并批量处理 PDF，提供桌面应用、自托管服务器和 API 三种形式。",
      "bullets": [
        "许可证：MIT 并带有例外条款，部分目录适用单独的许可证。",
        "价格：据官网所述个人使用免费；付费的 Server Plan 和 Enterprise 方案未公布价格。",
        "平台：Windows、macOS、Linux、Docker、Kubernetes、手动部署 .jar 服务器。",
        "PromptQuorum 未测试。"
      ]
    },
    "toc": [
      {
        "label": "核心要点",
        "anchor": "tldr"
      },
      {
        "label": "概述",
        "anchor": "overview"
      },
      {
        "label": "如何获取",
        "anchor": "get-it"
      },
      {
        "label": "系统要求",
        "anchor": "requirements"
      },
      {
        "label": "功能",
        "anchor": "features"
      },
      {
        "label": "隐私",
        "anchor": "privacy"
      },
      {
        "label": "适合哪些人使用",
        "anchor": "who-should-use"
      },
      {
        "label": "我们无法核实的内容",
        "anchor": "could-not-verify"
      },
      {
        "label": "替代品",
        "anchor": "alternatives"
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
        "label": "来源",
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
            "text": "Stirling PDF 是一款开放核心 PDF 工具包，可编辑、转换、OCR、涂黑脱敏并批量处理 PDF，提供桌面应用、自托管服务器和 API 三种形式。"
          },
          {
            "type": "plain-terms",
            "text": "Stirling PDF 是一款 PDF 工具包，可作为桌面应用、自托管网页服务器或 API 运行。"
          }
        ],
        "items": [
          "**Stirling PDF 是一款获得大量星标的开放核心 PDF 工具包。** 项目维护活跃：最新版本 3.3.0（2026年11月5日），最近一次提交为 2026年11月15日。",
          "它可作为 Windows、macOS 和 Linux 上的桌面应用运行，也可通过 Docker、Kubernetes 或 .jar 作为自托管服务器运行。",
          "官网称个人使用免费。付费的 Server Plan 和 Enterprise 方案确实存在，但未找到价格。",
          "MIT 许可证带有例外：部分目录适用单独的许可证。",
          "开发方称文档不会发送到外部服务。这是开发方的说法，且来源中未说明 AI 功能的数据流向。",
          "PromptQuorum 未测试过该应用。"
        ]
      },
      "overview": {
        "id": "overview",
        "title": "概述",
        "content": [
          "**Stirling PDF 是一个由你自己在桌面或服务器上运行的 PDF 编辑与文档处理平台。** 开发方为 Stirling PDF Inc.，其隐私政策中自称是一家美国公司。",
          "据开发方称，它在桌面或服务器上提供 60 多种工具，包括编辑、合并、拆分、签名、涂黑脱敏、转换、OCR 和压缩。README 写的是 50 多种，因此各来源对工具数量的说法不一致。",
          "除编辑器外，开发方还介绍了无代码流水线、REST API、MCP 接口、Webhook 和 AI 助手。该项目被描述为开放核心：README 中链接了 Server Plan 和 Enterprise 方案。",
          "另有独立媒体报道。Pocket-lint 和 XDA Developers 都发表过正面评价，其中一位 XDA 作者后来出于隐私顾虑改用了另一款自托管工具包，但具体细节不在我们的记录中。正面评价可参见 [Pocket-lint](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)。",
          "本评测并非亲身实测。内容汇总自开发方页面和公开来源，开发方的说法均已注明出处。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "如何获取 Stirling PDF",
        "content": [
          "**你可以通过原生安装程序、一条 Docker 命令、Helm 或手动 .jar 安装 Stirling PDF。** [下载页面](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)列出了各种方式，[GitHub v3.3.0 发布页](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)提供安装文件。"
        ],
        "columns": [
          "平台",
          "获取方式"
        ],
        "rows": [
          {
            "平台": "Windows",
            "获取方式": "根据[下载页面](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)为独立 .exe。发布文件：Stirling-PDF-windows-x86_64.msi 和 Stirling-PDF-windows-arm64-setup.exe。"
          },
          {
            "平台": "macOS",
            "获取方式": "下载页面提供原生应用。发布文件：Stirling-PDF-macos-universal.dmg 和 .app.tar.gz（[发布页](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)）。"
          },
          {
            "平台": "Linux",
            "获取方式": "发布文件：.AppImage、.deb 和 .rpm（x86_64）。下载页面说明需手动运行 Java .jar。"
          },
          {
            "平台": "Docker",
            "获取方式": "`docker run -p 8080:8080 docker.stirlingpdf.com/stirlingtools/stirling-pdf`，然后打开 http://localhost:8080（据 [README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)）。"
          },
          {
            "平台": "Kubernetes",
            "获取方式": "据下载页面，可在任意 Kubernetes 集群上用 Helm 部署。"
          },
          {
            "平台": "网页（自托管浏览器界面）",
            "获取方式": "由自托管服务器（Docker 或服务器 .jar）提供。"
          },
          {
            "平台": "裸机 / 任何装有 Java 的系统",
            "获取方式": "使用 .jar 手动搭建服务器（发布文件中的 Stirling-PDF-server.jar 和 Stirling-PDF.jar）。"
          }
        ],
        "note": "未找到 App Store 或 Google Play 上架信息。"
      },
      "requirements": {
        "id": "requirements",
        "title": "系统要求",
        "content": [
          "**来源中未说明 RAM、GPU、磁盘或 Java 版本要求。** 只记录了操作系统和打包方式。"
        ],
        "columns": [
          "项目",
          "来源所述"
        ],
        "rows": [
          {
            "项目": "RAM",
            "来源所述": "未说明"
          },
          {
            "项目": "GPU",
            "来源所述": "未说明"
          },
          {
            "项目": "磁盘",
            "来源所述": "未说明"
          },
          {
            "项目": "操作系统",
            "来源所述": "Windows（x86_64 和 arm64 文件）、macOS（通用）、Linux（x86_64 文件）"
          },
          {
            "项目": "Java",
            "来源所述": ".jar 路线意味着需要 Java 运行环境；未说明版本"
          },
          {
            "项目": "Docker",
            "来源所述": "容器方式需要"
          }
        ],
        "note": "在小型硬件上部署前，请查阅开发方文档。"
      },
      "features": {
        "id": "features",
        "title": "功能",
        "content": [
          "**开发方列出了丰富的工具集以及自动化和 API 功能。** 以下各项均为开发方的说法；PromptQuorum 未测试过。"
        ],
        "items": [
          "桌面或服务器上 60 多种编辑工具（README 写的是 50 多种）：编辑、合并、拆分、签名、涂黑脱敏、转换、OCR、压缩。",
          "界面中的无代码流水线以及用于批量处理的 API，包括 OCR、分类、校验、涂黑脱敏、压缩和路由。",
          "几乎所有工具都有 REST API，另有 MCP 接口和 Webhook。",
          "AI 助手可在打开的文件中进行编辑（涂黑脱敏、翻译、摘要、转换）。",
          "SSO、审计和灵活的本地部署，被描述为“企业级”。",
          "界面支持 40 多种语言。",
          "据 Pocket-lint，其评测时文本编辑器仍处于 Alpha 阶段。"
        ]
      },
      "privacy": {
        "id": "privacy",
        "title": "隐私",
        "content": [
          "**开发方称编辑器在你自己的机器或服务器上运行，文档不会发送到外部服务。** 这是开发方的说法。源代码是公开的，因此可以自行核查。",
          "来源中未记录 AI 功能的数据流向，也未说明它们是在本地运行还是调用外部服务。",
          "关于遥测，Contabo 报告称有一项分析功能过去默认开启，后来改为可配置。Gnoppix 论坛的一次测试未发现遥测。这两种说法均未对照当前代码或政策文本得到确认。开发方的[隐私政策](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)是应阅读的第一手来源。",
          "来源中未说明桌面版或 Docker 版是否需要账号。官网有登录和注册链接，另有带登录功能的 .jar。"
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合哪些人使用",
        "items": [
          "**适合希望在自己的硬件上处理 PDF 的人。**",
          "希望在本地编辑 PDF、而不是上传到在线转换网站的人。",
          "希望在 Docker 或 Kubernetes 上使用自托管 PDF API 或批处理流水线的 IT 和开发团队。",
          "想要带 OCR 和涂黑脱敏功能的免费桌面 PDF 编辑器的用户。"
        ]
      },
      "whoShouldNotUse": {
        "id": "could-not-verify",
        "title": "我们无法核实的内容",
        "items": [
          "**有几项与决策相关的要点，来源中未得到确认。**",
          "价格：所获取的定价页面上没有金额或档位，而是请访客预约演示。同样不清楚哪些功能（SSO、审计、本地部署）属于哪个付费方案。",
          "完整许可情况：LICENSE 为 MIT，但关于 engine/ 目录的条款被截断，app/proprietary 和 app/saas 适用单独的许可证。若需要所有组件都是纯开源许可证，请先查看 LICENSE。",
          "系统要求：未说明 RAM、GPU、磁盘和 Java 版本。",
          "AI 模型和 OCR 引擎：未指明名称，也不清楚 AI 功能是否保持离线。需要严格离线 AI 的用户不应想当然地认为可以。",
          "当前版本的遥测情况：只找到第三方的说法（Contabo、一次论坛测试）。",
          "桌面版和 Docker 版是否需要账号：未说明。",
          "“3000 万+下载量”这一数字是开发方的说法，没有独立证实。",
          "托管服务：据称服务条款提到了托管服务，但细节未经核实。",
          "那位改用其他工具的作者所写的 XDA 文章细节，以及对 Cookie 横幅的批评，均无法记录。",
          "总部：唯一的第一手地址是旧金山的一个邮寄地址，政策中称开发方为美国公司。",
          "复刻（fork）数量和应用商店评分：无法获取。"
        ]
      },
      "vsAlternatives": {
        "id": "alternatives",
        "title": "替代品",
        "content": [
          "**来源列出了四种替代品，但 PromptQuorum 未对它们做过实测对比。** 以下说明仅复述来源所述内容。"
        ],
        "columns": [
          "替代品",
          "来源所述"
        ],
        "rows": [
          {
            "替代品": "BentoPDF",
            "来源所述": "自托管 PDF 工具包，在 [Contabo 的文章](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)中与 Stirling PDF 直接对比。Contabo 是主机服务商。"
          },
          {
            "替代品": "Adobe Acrobat",
            "来源所述": "商业 PDF 编辑器，评测者称 Stirling PDF 可以替代它。"
          },
          {
            "替代品": "UPDF",
            "来源所述": "销售竞争性 PDF 产品，并发布了对 Stirling PDF 的评测，因此该评测存在偏向。"
          },
          {
            "替代品": "SwifDoo PDF",
            "来源所述": "销售竞争性 PDF 产品，并发布了对 Stirling PDF 的评测，因此该评测存在偏向。"
          }
        ]
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "Stirling PDF 免费吗？",
            "a": "官网称个人使用免费，项目采用开放核心模式。付费的 Server Plan 和 Enterprise 方案确实存在，但所获取的页面上没有价格。"
          },
          {
            "q": "它真的是开源的吗？",
            "a": "LICENSE 为 MIT，但其中说明部分目录（app/proprietary、app/saas 和 engine/，最后一条条款被截断）适用单独的许可证。README 称该项目为开放核心。"
          },
          {
            "q": "如何快速安装？",
            "a": "运行 README 中的 Docker 命令，然后打开 http://localhost:8080。下载页面提供 Windows .exe、原生 Mac 应用和 Linux .jar。GitHub v3.3.0 发布页还提供 .msi、安装版 .exe、.dmg、.deb、.rpm 和 .AppImage 文件。"
          },
          {
            "q": "我的文件会离开我的机器吗？",
            "a": "开发方称编辑器在你的机器或服务器上运行，文档不会发送到外部服务。这是开发方的说法。来源中未记录 AI 功能如何处理数据。"
          },
          {
            "q": "支持哪些平台？",
            "a": "Windows、macOS 和 Linux 桌面应用，以及 Docker、Kubernetes（Helm）和手动 .jar 服务器部署。浏览器界面由自托管服务器提供。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": [
          "**对于本地或自托管的 PDF 处理，Stirling PDF 看起来是一个维护良好、使用广泛的选择，但在许可、定价和 AI 功能方面仍有未解问题。** 它提供多种安装格式和 API，且开发活跃（最近一次提交为 2026年11月15日）。",
          "在依赖它之前，请阅读 LICENSE，向开发方询问付费方案的价格，并核查 AI 功能如何处理数据。PromptQuorum 未测试过该应用，因此本结论基于开发方的说法和公开来源。"
        ]
      },
      "sources": {
        "id": "sources",
        "title": "来源",
        "items": [
          "[Stirling PDF 官网](https://www.stirlingpdf.com?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[下载页面](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[定价页面](https://www.stirlingpdf.com/pricing?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[GitHub 仓库和 README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[GitHub 发布页 v3.3.0](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[LICENSE](https://github.com/Stirling-Tools/Stirling-PDF/blob/HEAD/LICENSE?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[隐私政策](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Pocket-lint 评测](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Contabo：BentoPDF 对比 Stirling PDF](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[XDA Developers：替换 Stirling PDF](https://www.xda-developers.com/replaced-stirling-pdf-with-this-self-hosted-pdf-toolkit/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "相关阅读",
        "items": [
          "[Docling 评测](/zh/power-local-llm/docling-review) — 一款开源文档解析库，来自同一目录分类。",
          "[OpenDataLoader PDF 评测](/zh/power-local-llm/opendataloader-pdf-review) — 一款开源 PDF 解析器，来自同一目录分类。",
          "[完整本地 LLM 软件目录](/zh/power-local-llm/local-llm-software-directory) — Stirling PDF 及相关工具的目录条目。"
        ]
      }
    },
    "heroImage": "/images/stirling-pdf-review-hero-zh.webp"
  },
  es: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-16",
    "dateModified": "2026-11-16",
    "next_refresh_due": "2027-05-16",
    "theme": "RAG & Document Chat",
    "title": "Reseña de Stirling PDF: kit de herramientas PDF open-core para escritorio y autoalojamiento",
    "seoTitle": "Reseña de Stirling PDF: funciones, instalación y privacidad",
    "intro": "Stirling PDF es un kit de herramientas PDF que funciona como aplicación de escritorio, servidor web autoalojado o API. Esta reseña resume lo que indican el fabricante y las fuentes públicas. PromptQuorum no ha probado la aplicación.",
    "metaDescription": "Reseña factual de Stirling PDF, un editor y API de PDF open-core para escritorio, Docker o Kubernetes. Opciones de instalación, límites de licencia y dudas abiertas.",
    "audience": "Personas que buscan un editor de PDF local, y equipos de TI o desarrollo que necesitan automatización de PDF autoalojada y procesamiento por API.",
    "readTime": "5 min de lectura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "reseña de Stirling PDF",
    "targetKeywords": [
      "reseña de Stirling PDF",
      "editor de PDF autoalojado",
      "editor de PDF de código abierto",
      "Stirling PDF Docker",
      "alternativa a Adobe Acrobat"
    ],
    "leadAnswerBlock": "Stirling PDF es un kit de herramientas PDF open-core de Stirling PDF Inc. que edita, convierte, aplica OCR, censura y procesa PDF por lotes. Funciona en Windows, macOS y Linux, o como servidor autoalojado mediante Docker, Kubernetes o un archivo .jar. Su última versión es la 3.3.0 (5 de noviembre de 2026) y el último commit en GitHub fue el 15 de noviembre de 2026.",
    "quickAnswerTop": {
      "question": "¿Qué es Stirling PDF?",
      "answer": "Stirling PDF es un kit de herramientas PDF open-core que edita, convierte, aplica OCR, censura y procesa PDF por lotes, como aplicación de escritorio, servidor autoalojado o API.",
      "bullets": [
        "Licencia: MIT con excepciones; algunos directorios tienen licencias independientes.",
        "Precio: gratis para uso individual según el sitio; el Server Plan de pago y las ofertas Enterprise no tienen precios publicados.",
        "Plataformas: Windows, macOS, Linux, Docker, Kubernetes y servidor .jar manual.",
        "No probado por PromptQuorum."
      ]
    },
    "toc": [
      {
        "label": "Puntos clave",
        "anchor": "tldr"
      },
      {
        "label": "Resumen",
        "anchor": "overview"
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
        "label": "Funciones",
        "anchor": "features"
      },
      {
        "label": "Privacidad",
        "anchor": "privacy"
      },
      {
        "label": "Quién debería usarlo",
        "anchor": "who-should-use"
      },
      {
        "label": "Qué no pudimos verificar",
        "anchor": "could-not-verify"
      },
      {
        "label": "Alternativas",
        "anchor": "alternatives"
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
            "text": "Stirling PDF es un kit de herramientas PDF open-core que edita, convierte, aplica OCR, censura y procesa PDF por lotes, como aplicación de escritorio, servidor autoalojado o API."
          },
          {
            "type": "plain-terms",
            "text": "Stirling PDF es un kit de herramientas PDF que funciona como aplicación de escritorio, servidor web autoalojado o API."
          }
        ],
        "items": [
          "**Stirling PDF es un kit de herramientas PDF open-core con muchas estrellas en GitHub.** El proyecto se mantiene activamente: última versión 3.3.0 (5 de noviembre de 2026), último commit el 15 de noviembre de 2026.",
          "Funciona como aplicación de escritorio en Windows, macOS y Linux, o como servidor autoalojado mediante Docker, Kubernetes o un .jar.",
          "El sitio indica que es gratis para uso individual. Existen ofertas de pago (Server Plan y Enterprise), pero no se encontraron precios.",
          "La licencia MIT tiene excepciones: algunos directorios están bajo licencias independientes.",
          "El fabricante afirma que los documentos no se envían a servicios externos. Es una afirmación del fabricante, y las fuentes no documentan el flujo de datos de las funciones de IA.",
          "PromptQuorum no ha probado la aplicación."
        ]
      },
      "overview": {
        "id": "overview",
        "title": "Resumen",
        "content": [
          "**Stirling PDF es un editor de PDF y plataforma de procesamiento de documentos que tú mismo ejecutas, en un equipo de escritorio o en un servidor.** El fabricante es Stirling PDF Inc., que en su política de privacidad se describe como una empresa estadounidense.",
          "Según el fabricante, ofrece más de 60 herramientas en escritorio o servidor, entre ellas editar, combinar, dividir, firmar, censurar, convertir, OCR y comprimir. El README indica más de 50, por lo que el número de herramientas no coincide entre fuentes.",
          "Además del editor, el fabricante describe pipelines sin código, una API REST, una interfaz MCP, webhooks y un asistente de IA. El proyecto se describe como open-core: el README enlaza a las ofertas Server Plan y Enterprise.",
          "Existe cobertura independiente. Pocket-lint y XDA Developers han publicado artículos favorables, y un redactor de XDA cambió después a otro kit de herramientas autoalojado por motivos de privacidad, aunque los detalles no constan en nuestras notas. Consulta [Pocket-lint](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) para ver una reseña positiva.",
          "Esta reseña no se basa en una prueba práctica. Resume las páginas del fabricante y fuentes públicas, y las afirmaciones del fabricante se atribuyen como tales."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo obtener Stirling PDF",
        "content": [
          "**Stirling PDF puede instalarse con un instalador nativo, un único comando de Docker, Helm o un .jar manual.** La [página de descarga](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) enumera las opciones, y la [versión v3.3.0 en GitHub](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) incluye los archivos de instalación."
        ],
        "columns": [
          "Plataforma",
          "Cómo obtenerlo"
        ],
        "rows": [
          {
            "Plataforma": "Windows",
            "Cómo obtenerlo": ".exe independiente según la [página de descarga](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review). Archivos de la versión: Stirling-PDF-windows-x86_64.msi y Stirling-PDF-windows-arm64-setup.exe."
          },
          {
            "Plataforma": "macOS",
            "Cómo obtenerlo": "Aplicación nativa desde la página de descarga. Archivos de la versión: Stirling-PDF-macos-universal.dmg y un .app.tar.gz ([versión](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review))."
          },
          {
            "Plataforma": "Linux",
            "Cómo obtenerlo": "Archivos de la versión: .AppImage, .deb y .rpm (x86_64). La página de descarga indica ejecutar manualmente el .jar de Java."
          },
          {
            "Plataforma": "Docker",
            "Cómo obtenerlo": "`docker run -p 8080:8080 docker.stirlingpdf.com/stirlingtools/stirling-pdf` y luego abrir http://localhost:8080 (según el [README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review))."
          },
          {
            "Plataforma": "Kubernetes",
            "Cómo obtenerlo": "Se despliega con Helm en cualquier clúster de Kubernetes, según la página de descarga."
          },
          {
            "Plataforma": "Web (interfaz de navegador autoalojada)",
            "Cómo obtenerlo": "Servida por el servidor autoalojado (Docker o el .jar del servidor)."
          },
          {
            "Plataforma": "Bare metal / cualquier SO con Java",
            "Cómo obtenerlo": "Configuración manual del servidor con el .jar (Stirling-PDF-server.jar y Stirling-PDF.jar en los archivos de la versión)."
          }
        ],
        "note": "No se encontró ninguna ficha en App Store ni en Google Play."
      },
      "requirements": {
        "id": "requirements",
        "title": "Requisitos",
        "content": [
          "**Las fuentes no indican requisitos de RAM, GPU, disco ni versión de Java.** Solo están documentados los sistemas operativos y el empaquetado."
        ],
        "columns": [
          "Elemento",
          "Qué indican las fuentes"
        ],
        "rows": [
          {
            "Elemento": "RAM",
            "Qué indican las fuentes": "No se indica"
          },
          {
            "Elemento": "GPU",
            "Qué indican las fuentes": "No se indica"
          },
          {
            "Elemento": "Disco",
            "Qué indican las fuentes": "No se indica"
          },
          {
            "Elemento": "Sistema operativo",
            "Qué indican las fuentes": "Windows (x86_64 y arm64), macOS (universal), Linux (x86_64)"
          },
          {
            "Elemento": "Java",
            "Qué indican las fuentes": "Las rutas con .jar implican un entorno Java; no se indica versión"
          },
          {
            "Elemento": "Docker",
            "Qué indican las fuentes": "Necesario para la vía de contenedor"
          }
        ],
        "note": "Consulta la documentación del fabricante antes de desplegarlo en hardware modesto."
      },
      "features": {
        "id": "features",
        "title": "Funciones",
        "content": [
          "**El fabricante enumera un amplio conjunto de herramientas, además de funciones de automatización y API.** Todos los puntos siguientes son afirmaciones del fabricante; PromptQuorum no las ha probado."
        ],
        "items": [
          "Más de 60 herramientas de edición en escritorio o servidor (el README indica más de 50): editar, combinar, dividir, firmar, censurar, convertir, OCR, comprimir.",
          "Pipelines sin código en la interfaz y API para procesamiento por lotes, incluidos OCR, clasificar, validar, censurar, comprimir y enrutar.",
          "API REST para casi todas las herramientas, además de una interfaz MCP y webhooks.",
          "Asistente de IA que realiza ediciones en el archivo abierto (censurar, traducir, resumir, convertir).",
          "SSO, auditoría y despliegues locales flexibles, descritos como de «nivel empresarial».",
          "Interfaz en más de 40 idiomas.",
          "Según Pocket-lint, el editor de texto estaba en fase Alpha en el momento de su reseña."
        ]
      },
      "privacy": {
        "id": "privacy",
        "title": "Privacidad",
        "content": [
          "**El fabricante afirma que el editor se ejecuta en tu propio equipo o servidor y que los documentos no se envían a servicios externos.** Es una afirmación del fabricante. El código fuente es público, por lo que puede comprobarse.",
          "El flujo de datos de las funciones de IA no está documentado en las fuentes, y estas no indican si se ejecutan en local o llaman a servicios externos.",
          "Sobre la telemetría, Contabo señala una función de analítica que estuvo activada por defecto en el pasado y que después se hizo configurable. Una prueba en un foro de Gnoppix no encontró telemetría. Ninguna de las dos afirmaciones está confirmada con el código o el texto de la política actuales. La [política de privacidad](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) del fabricante es la fuente primaria que conviene leer.",
          "No se indica si las versiones de escritorio o Docker requieren una cuenta. El sitio tiene enlaces de Log in y Sign up, y existe un .jar con inicio de sesión."
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Quién debería usarlo",
        "items": [
          "**Resulta adecuado para quienes quieren procesar PDF en tu propio hardware.**",
          "Personas que quieren editar PDF en local en lugar de subirlos a conversores en línea.",
          "Equipos de TI y desarrollo que buscan una API de PDF autoalojada o pipelines por lotes en Docker o Kubernetes.",
          "Usuarios que quieren un editor de PDF de escritorio gratuito con OCR y censura."
        ]
      },
      "whoShouldNotUse": {
        "id": "could-not-verify",
        "title": "Qué no pudimos verificar",
        "items": [
          "**Varios puntos relevantes para decidir no están confirmados por las fuentes.**",
          "Precios: en la página de precios consultada no aparecen importes ni planes, y se invita a reservar una demo. Tampoco está claro qué funciones (SSO, auditoría, instalación local) pertenecen a cada plan de pago.",
          "Licencia completa: el LICENSE es MIT, pero la cláusula sobre el directorio engine/ está truncada, y app/proprietary y app/saas tienen licencias independientes. Quien necesite una licencia puramente de código abierto para todos los componentes debería revisar antes el LICENSE.",
          "Requisitos del sistema: no se indican RAM, GPU, disco ni versión de Java.",
          "Modelo de IA y motor de OCR: no se nombran, y no está claro si las funciones de IA funcionan sin conexión. Quien necesite IA estrictamente sin conexión no debería darlo por supuesto.",
          "Telemetría en la versión actual: solo se encontraron afirmaciones de terceros (Contabo, una prueba en un foro).",
          "Requisito de cuenta en las versiones de escritorio y Docker: no se indica.",
          "La cifra de «30M+ downloads» es una afirmación del fabricante sin confirmación independiente.",
          "Un servicio alojado: según se informa, los Términos de servicio mencionan uno, pero no se verificó ningún detalle.",
          "No se pudieron registrar los detalles del artículo de XDA de un redactor que cambió de herramienta, ni de las críticas al banner de cookies.",
          "Sede: la única dirección de fuente primaria es un apartado postal en San Francisco, y la política describe al fabricante como una empresa estadounidense.",
          "Número de forks y valoración en tiendas: no disponibles."
        ]
      },
      "vsAlternatives": {
        "id": "alternatives",
        "title": "Alternativas",
        "content": [
          "**Las fuentes nombran cuatro alternativas, pero PromptQuorum no las ha comparado en la práctica.** Las notas siguientes solo repiten lo que indican las fuentes."
        ],
        "columns": [
          "Alternativa",
          "Qué indican las fuentes"
        ],
        "rows": [
          {
            "Alternativa": "BentoPDF",
            "Qué indican las fuentes": "Kit de herramientas PDF autoalojado, comparado directamente con Stirling PDF en un [artículo de Contabo](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review). Contabo es un proveedor de hosting."
          },
          {
            "Alternativa": "Adobe Acrobat",
            "Qué indican las fuentes": "Editor de PDF comercial que, según los analistas, Stirling PDF puede reemplazar."
          },
          {
            "Alternativa": "UPDF",
            "Qué indican las fuentes": "Vende un producto PDF competidor y publica una reseña de Stirling PDF, por lo que esa reseña es parcial."
          },
          {
            "Alternativa": "SwifDoo PDF",
            "Qué indican las fuentes": "Vende un producto PDF competidor y publica una reseña de Stirling PDF, por lo que esa reseña es parcial."
          }
        ]
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿Es gratis Stirling PDF?",
            "a": "El sitio indica que es gratis para uso individual, y el proyecto es open-core. Existen ofertas de pago (Server Plan y Enterprise), pero no aparecen precios en las páginas consultadas."
          },
          {
            "q": "¿Es realmente de código abierto?",
            "a": "El LICENSE es MIT, pero indica que algunos directorios (app/proprietary, app/saas y engine/, con esta última cláusula truncada) tienen licencias independientes. El README describe el proyecto como open-core."
          },
          {
            "q": "¿Cómo se instala rápidamente?",
            "a": "Ejecuta el comando de Docker del README y abre http://localhost:8080. La página de descarga ofrece un .exe para Windows, una aplicación nativa para Mac y un .jar para Linux. La versión v3.3.0 de GitHub incluye además archivos .msi, setup .exe, .dmg, .deb, .rpm y .AppImage."
          },
          {
            "q": "¿Salen mis archivos de mi equipo?",
            "a": "El fabricante afirma que el editor se ejecuta en tu equipo o servidor y que los documentos no se envían a servicios externos. Es una afirmación del fabricante. Las fuentes no documentan cómo tratan los datos las funciones de IA."
          },
          {
            "q": "¿Qué plataformas son compatibles?",
            "a": "Aplicaciones de escritorio para Windows, macOS y Linux, además de Docker, Kubernetes (Helm) y una configuración manual de servidor con .jar. La interfaz de navegador la sirve el servidor autoalojado."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": [
          "**Stirling PDF parece una opción bien mantenida y muy utilizada para trabajar con PDF en local o autoalojado, con dudas abiertas sobre licencia, precios y funciones de IA.** Ofrece muchos formatos de instalador, una API y desarrollo activo (último commit el 15 de noviembre de 2026).",
          "Antes de depender de ella, conviene leer el LICENSE, consultar al fabricante los precios de los planes de pago y comprobar cómo tratan los datos las funciones de IA. PromptQuorum no ha probado la aplicación, por lo que este veredicto se basa en las afirmaciones del fabricante y en fuentes públicas."
        ]
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Sitio web de Stirling PDF](https://www.stirlingpdf.com?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Página de descarga](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Página de precios](https://www.stirlingpdf.com/pricing?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Repositorio de GitHub y README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Versión v3.3.0 en GitHub](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[LICENSE](https://github.com/Stirling-Tools/Stirling-PDF/blob/HEAD/LICENSE?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Política de privacidad](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Reseña de Pocket-lint](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Contabo: BentoPDF frente a Stirling PDF](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[XDA Developers: sustituir Stirling PDF](https://www.xda-developers.com/replaced-stirling-pdf-with-this-self-hosted-pdf-toolkit/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Reseña de Docling](/es/power-local-llm/docling-review) — una biblioteca de código abierto para analizar documentos, de la misma categoría del directorio.",
          "[Reseña de OpenDataLoader PDF](/es/power-local-llm/opendataloader-pdf-review) — un analizador de PDF de código abierto, de la misma categoría del directorio.",
          "[El directorio completo de software de LLM local](/es/power-local-llm/local-llm-software-directory) — la entrada del directorio para Stirling PDF y herramientas relacionadas."
        ]
      }
    },
    "heroImage": "/images/stirling-pdf-review-hero-es.webp"
  },
  pt: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-16",
    "dateModified": "2026-11-16",
    "next_refresh_due": "2027-05-16",
    "theme": "RAG & Document Chat",
    "title": "Análise do Stirling PDF: kit PDF open-core para desktop e hospedagem própria",
    "seoTitle": "Análise do Stirling PDF: recursos, instalação, privacidade",
    "intro": "O Stirling PDF é um kit de ferramentas para PDF que roda como aplicativo desktop, servidor web próprio ou API. Esta análise resume o que o fabricante e fontes públicas dizem. A PromptQuorum não testou o aplicativo.",
    "metaDescription": "Análise factual do Stirling PDF, editor e API de PDF open-core que roda no desktop, no Docker ou no Kubernetes. Opções de instalação, limites de licença e dúvidas em aberto.",
    "audience": "Pessoas que querem um editor de PDF local e equipes de TI ou desenvolvimento que precisam de automação de PDF hospedada por conta própria e processamento via API.",
    "readTime": "5 min de leitura",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "análise do Stirling PDF",
    "targetKeywords": [
      "análise Stirling PDF",
      "editor de PDF auto-hospedado",
      "editor de PDF código aberto",
      "Stirling PDF Docker",
      "alternativa ao Adobe Acrobat"
    ],
    "leadAnswerBlock": "O Stirling PDF é um kit de ferramentas PDF open-core da Stirling PDF Inc. que edita, converte, aplica OCR, oculta dados sensíveis (redação) e processa PDFs em lote. Roda no Windows, macOS e Linux, ou como servidor próprio via Docker, Kubernetes ou um arquivo .jar. A versão mais recente é a 3.3.0 (05/11/2026), e o último commit no GitHub foi em 15/11/2026.",
    "quickAnswerTop": {
      "question": "O que é o Stirling PDF?",
      "answer": "O Stirling PDF é um kit de ferramentas PDF open-core que edita, converte, aplica OCR, oculta dados sensíveis (redação) e processa PDFs em lote, como aplicativo desktop, servidor próprio ou API.",
      "bullets": [
        "Licença: MIT com exceções; alguns diretórios têm licenças separadas.",
        "Preço: gratuito para uso individual segundo o site; as ofertas pagas Server Plan e Enterprise não têm preços publicados.",
        "Plataformas: Windows, macOS, Linux, Docker, Kubernetes, servidor manual com .jar.",
        "Não testado pela PromptQuorum."
      ]
    },
    "toc": [
      {
        "label": "Pontos principais",
        "anchor": "tldr"
      },
      {
        "label": "Visão geral",
        "anchor": "overview"
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
        "label": "Recursos",
        "anchor": "features"
      },
      {
        "label": "Privacidade",
        "anchor": "privacy"
      },
      {
        "label": "Para quem é indicado",
        "anchor": "who-should-use"
      },
      {
        "label": "O que não pudemos verificar",
        "anchor": "could-not-verify"
      },
      {
        "label": "Alternativas",
        "anchor": "alternatives"
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
            "text": "O Stirling PDF é um kit de ferramentas PDF open-core que edita, converte, aplica OCR, oculta dados sensíveis (redação) e processa PDFs em lote, como aplicativo desktop, servidor próprio ou API."
          },
          {
            "type": "plain-terms",
            "text": "O Stirling PDF é um kit de ferramentas para PDF que roda como aplicativo desktop, servidor web próprio ou API."
          }
        ],
        "items": [
          "**O Stirling PDF é um kit PDF open-core com muitas estrelas no GitHub.** O projeto é mantido ativamente: versão mais recente 3.3.0 (05/11/2026), último commit em 15/11/2026.",
          "Roda como aplicativo desktop no Windows, macOS e Linux, ou como servidor próprio via Docker, Kubernetes ou um .jar.",
          "O site diz que é gratuito para uso individual. Existem as ofertas pagas Server Plan e Enterprise, mas não encontramos preços.",
          "A licença MIT tem exceções: alguns diretórios estão sob licenças separadas.",
          "O fabricante diz que os documentos não são enviados a serviços externos. Isso é uma afirmação do fabricante, e o fluxo de dados dos recursos de IA não está documentado nas fontes.",
          "A PromptQuorum não testou o aplicativo."
        ]
      },
      "overview": {
        "id": "overview",
        "title": "Visão geral",
        "content": [
          "**O Stirling PDF é um editor de PDF e plataforma de processamento de documentos que você mesmo executa, em um desktop ou em um servidor.** O fabricante é a Stirling PDF Inc., que se descreve como uma empresa dos EUA em sua política de privacidade.",
          "Segundo o fabricante, são mais de 60 ferramentas no desktop ou no servidor, incluindo editar, mesclar, dividir, assinar, ocultar dados sensíveis, converter, OCR e compactar. O README diz mais de 50, portanto a contagem de ferramentas é inconsistente entre as fontes.",
          "Além do editor, o fabricante descreve pipelines no-code, uma API REST, uma interface MCP, webhooks e um assistente de IA. O projeto é descrito como open-core: o README aponta para as ofertas Server Plan e Enterprise.",
          "Há cobertura independente. A Pocket-lint e a XDA Developers publicaram textos favoráveis, e um redator da XDA depois migrou para outro kit auto-hospedado citando preocupações com privacidade, embora os detalhes não estejam em nossas anotações. Veja a [Pocket-lint](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) para uma análise positiva.",
          "Esta análise não é prática. Ela resume as páginas do fabricante e fontes públicas, e as declarações do fabricante são atribuídas como tal."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Como obter o Stirling PDF",
        "content": [
          "**Você pode instalar o Stirling PDF com um instalador nativo, um único comando Docker, Helm ou um .jar manual.** A [página de download](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) lista as opções, e a [versão v3.3.0 no GitHub](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) traz os arquivos de instalação."
        ],
        "columns": [
          "Plataforma",
          "Como obter"
        ],
        "rows": [
          {
            "Plataforma": "Windows",
            "Como obter": "Arquivo .exe independente, segundo a [página de download](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review). Arquivos da versão: Stirling-PDF-windows-x86_64.msi e Stirling-PDF-windows-arm64-setup.exe."
          },
          {
            "Plataforma": "macOS",
            "Como obter": "Aplicativo nativo na página de download. Arquivos da versão: Stirling-PDF-macos-universal.dmg e um .app.tar.gz ([versão](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review))."
          },
          {
            "Plataforma": "Linux",
            "Como obter": "Arquivos da versão: .AppImage, .deb e .rpm (x86_64). A página de download manda executar o .jar do Java manualmente."
          },
          {
            "Plataforma": "Docker",
            "Como obter": "`docker run -p 8080:8080 docker.stirlingpdf.com/stirlingtools/stirling-pdf`, depois abra http://localhost:8080 (segundo o [README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review))."
          },
          {
            "Plataforma": "Kubernetes",
            "Como obter": "Implantação com Helm em qualquer cluster Kubernetes, segundo a página de download."
          },
          {
            "Plataforma": "Web (interface própria)",
            "Como obter": "Servida pelo servidor próprio (Docker ou o .jar do servidor)."
          },
          {
            "Plataforma": "Bare metal / SO com Java",
            "Como obter": "Configuração manual do servidor com o .jar (Stirling-PDF-server.jar e Stirling-PDF.jar nos arquivos da versão)."
          }
        ],
        "note": "Não encontramos listagem na App Store nem no Google Play."
      },
      "requirements": {
        "id": "requirements",
        "title": "Requisitos",
        "content": [
          "**As fontes não informam requisitos de RAM, GPU, disco ou versão do Java.** Apenas os sistemas operacionais e os formatos de pacote estão documentados."
        ],
        "columns": [
          "Item",
          "O que as fontes dizem"
        ],
        "rows": [
          {
            "Item": "RAM",
            "O que as fontes dizem": "Não informado"
          },
          {
            "Item": "GPU",
            "O que as fontes dizem": "Não informado"
          },
          {
            "Item": "Disco",
            "O que as fontes dizem": "Não informado"
          },
          {
            "Item": "Sistema operacional",
            "O que as fontes dizem": "Windows (x86_64 e arm64), macOS (universal), Linux (x86_64)"
          },
          {
            "Item": "Java",
            "O que as fontes dizem": "Os arquivos .jar indicam um runtime Java; versão não informada"
          },
          {
            "Item": "Docker",
            "O que as fontes dizem": "Necessário para a opção em contêiner"
          }
        ],
        "note": "Consulte a documentação do fabricante antes de implantar em hardware modesto."
      },
      "features": {
        "id": "features",
        "title": "Recursos",
        "content": [
          "**O fabricante lista um conjunto amplo de ferramentas, além de recursos de automação e API.** Todos os itens abaixo são afirmações do fabricante; a PromptQuorum não os testou."
        ],
        "items": [
          "Mais de 60 ferramentas de edição no desktop ou no servidor (o README diz mais de 50): editar, mesclar, dividir, assinar, ocultar dados sensíveis, converter, OCR, compactar.",
          "Pipelines no-code na interface e APIs para processamento em lote, incluindo OCR, classificar, validar, ocultar dados sensíveis, compactar e encaminhar.",
          "API REST para quase todas as ferramentas, além de uma interface MCP e webhooks.",
          "Assistente de IA que faz edições no arquivo aberto (ocultar dados sensíveis, traduzir, resumir, converter).",
          "SSO, auditoria e implantações on-premises flexíveis, descritos como 'Enterprise-grade'.",
          "Interface em mais de 40 idiomas.",
          "Segundo a Pocket-lint, o editor de texto estava em fase Alpha na época da análise."
        ]
      },
      "privacy": {
        "id": "privacy",
        "title": "Privacidade",
        "content": [
          "**O fabricante diz que o editor roda na sua própria máquina ou servidor e que os documentos não são enviados a serviços externos.** Essa é uma afirmação do fabricante. O código-fonte é público, então pode ser conferido.",
          "O fluxo de dados dos recursos de IA não está documentado nas fontes, e elas não dizem se rodam localmente ou chamam serviços externos.",
          "Sobre telemetria, a Contabo relata um recurso de análise que esteve ativado por padrão no passado e depois passou a ser configurável. Um teste em um fórum da Gnoppix não encontrou telemetria. Nenhuma das afirmações foi confirmada com o código ou o texto da política atuais. A [política de privacidade](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) do fabricante é a fonte primária a ler.",
          "Não está informado se as versões desktop ou Docker exigem uma conta. O site tem links de login e de cadastro, e existe um .jar com login."
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem é indicado",
        "items": [
          "**É indicado para quem quer processar PDFs no próprio hardware.**",
          "Pessoas que querem editar PDFs localmente em vez de enviá-los a conversores online.",
          "Equipes de TI e desenvolvimento que querem uma API de PDF auto-hospedada ou pipelines em lote no Docker ou Kubernetes.",
          "Usuários que querem um editor de PDF desktop gratuito com OCR e ocultação de dados sensíveis."
        ]
      },
      "whoShouldNotUse": {
        "id": "could-not-verify",
        "title": "O que não pudemos verificar",
        "items": [
          "**Vários pontos relevantes para a decisão não são confirmados pelas fontes.**",
          "Preços: nenhum valor ou plano aparece na página de preços consultada, que pede aos visitantes para agendar uma demonstração. Também não está claro quais recursos (SSO, auditoria, on-premises) pertencem a qual plano pago.",
          "Licenciamento completo: a LICENSE é MIT, mas a cláusula sobre o diretório engine/ está truncada, e app/proprietary e app/saas estão sob licenças separadas. Quem precisa de uma licença puramente de código aberto para todos os componentes deve ler a LICENSE primeiro.",
          "Requisitos de sistema: RAM, GPU, disco e versão do Java não são informados.",
          "Modelo de IA e mecanismo de OCR: não são nomeados, e não está claro se os recursos de IA funcionam offline. Quem precisa de IA estritamente offline não deve presumir isso.",
          "Telemetria na versão atual: só encontramos declarações de terceiros (Contabo, um teste em fórum).",
          "Exigência de conta nas versões desktop e Docker: não informada.",
          "O número de '30M+ downloads' é uma afirmação do fabricante, sem confirmação independente.",
          "Um serviço hospedado: os Termos de Serviço supostamente mencionam um, mas nenhum detalhe foi verificado.",
          "Os detalhes do artigo da XDA de um redator que migrou para outra ferramenta, e das críticas ao banner de cookies, não puderam ser registrados.",
          "Sede: o único endereço em fonte primária é um endereço postal em San Francisco, e a política chama o fabricante de empresa dos EUA.",
          "Número de forks e avaliação em lojas: não disponíveis."
        ]
      },
      "vsAlternatives": {
        "id": "alternatives",
        "title": "Alternativas",
        "content": [
          "**As fontes citam quatro alternativas, mas a PromptQuorum não as comparou na prática.** As notas abaixo apenas repetem o que as fontes dizem."
        ],
        "columns": [
          "Alternativa",
          "O que as fontes dizem"
        ],
        "rows": [
          {
            "Alternativa": "BentoPDF",
            "O que as fontes dizem": "Kit PDF auto-hospedado comparado diretamente com o Stirling PDF em um [artigo da Contabo](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review). A Contabo é um provedor de hospedagem."
          },
          {
            "Alternativa": "Adobe Acrobat",
            "O que as fontes dizem": "Editor de PDF comercial que, segundo os analistas, o Stirling PDF substitui."
          },
          {
            "Alternativa": "UPDF",
            "O que as fontes dizem": "Vende um produto de PDF concorrente e publica uma análise do Stirling PDF, portanto essa análise é parcial."
          },
          {
            "Alternativa": "SwifDoo PDF",
            "O que as fontes dizem": "Vende um produto de PDF concorrente e publica uma análise do Stirling PDF, portanto essa análise é parcial."
          }
        ]
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "O Stirling PDF é gratuito?",
            "a": "O site diz que é gratuito para uso individual, e o projeto é open-core. Existem as ofertas pagas Server Plan e Enterprise, mas nenhum preço aparece nas páginas consultadas."
          },
          {
            "q": "É realmente código aberto?",
            "a": "A LICENSE é MIT, mas informa que alguns diretórios (app/proprietary, app/saas e engine/, com a última cláusula truncada) têm licenças separadas. O README chama o projeto de open-core."
          },
          {
            "q": "Como instalo rapidamente?",
            "a": "Execute o comando Docker do README e depois abra http://localhost:8080. A página de download oferece um .exe para Windows, um aplicativo nativo para Mac e um .jar para Linux. A versão v3.3.0 no GitHub também traz arquivos .msi, setup .exe, .dmg, .deb, .rpm e .AppImage."
          },
          {
            "q": "Meus arquivos saem da minha máquina?",
            "a": "O fabricante diz que o editor roda na sua máquina ou servidor e que os documentos não são enviados a serviços externos. Isso é uma afirmação do fabricante. Como os recursos de IA tratam os dados não está documentado nas fontes."
          },
          {
            "q": "Quais plataformas são compatíveis?",
            "a": "Aplicativos desktop para Windows, macOS e Linux, além de Docker, Kubernetes (Helm) e uma configuração manual de servidor com .jar. A interface no navegador é servida pelo servidor próprio."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": [
          "**O Stirling PDF parece uma opção bem mantida e amplamente usada para trabalho com PDF local ou auto-hospedado, com dúvidas em aberto sobre licenciamento, preços e os recursos de IA.** Tem muitos formatos de instalador, uma API e desenvolvimento ativo (último commit em 15/11/2026).",
          "Antes de depender dele, leia a LICENSE, pergunte ao fabricante o preço dos planos pagos e verifique como os recursos de IA tratam os dados. A PromptQuorum não testou o aplicativo, então este veredito se baseia nas declarações do fabricante e em fontes públicas."
        ]
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Site do Stirling PDF](https://www.stirlingpdf.com?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Página de download](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Página de preços](https://www.stirlingpdf.com/pricing?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Repositório e README no GitHub](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Versão v3.3.0 no GitHub](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[LICENSE](https://github.com/Stirling-Tools/Stirling-PDF/blob/HEAD/LICENSE?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Política de privacidade](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Análise da Pocket-lint](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Contabo: BentoPDF vs Stirling PDF](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[XDA Developers: substituiu o Stirling PDF](https://www.xda-developers.com/replaced-stirling-pdf-with-this-self-hosted-pdf-toolkit/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leitura relacionada",
        "items": [
          "[Análise do Docling](/pt/power-local-llm/docling-review) — uma biblioteca de código aberto para análise de documentos, da mesma categoria do diretório.",
          "[Análise do OpenDataLoader PDF](/pt/power-local-llm/opendataloader-pdf-review) — um parser de PDF de código aberto, da mesma categoria do diretório.",
          "[O diretório completo de software para LLMs locais](/pt/power-local-llm/local-llm-software-directory) — a entrada do diretório para o Stirling PDF e ferramentas relacionadas."
        ]
      }
    },
    "heroImage": "/images/stirling-pdf-review-hero-pt.webp"
  },
  ar: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-16",
    "dateModified": "2026-11-16",
    "next_refresh_due": "2027-05-16",
    "theme": "RAG & Document Chat",
    "title": "مراجعة Stirling PDF: مجموعة أدوات PDF مفتوحة النواة لسطح المكتب والاستضافة الذاتية",
    "seoTitle": "مراجعة Stirling PDF: الميزات والتثبيت والخصوصية",
    "intro": "Stirling PDF مجموعة أدوات PDF تعمل كتطبيق لسطح المكتب أو كخادم ويب مستضاف ذاتياً أو كواجهة API. تلخّص هذه المراجعة ما تقوله الجهة المطوِّرة والمصادر العامة. لم تختبر PromptQuorum التطبيق.",
    "metaDescription": "مراجعة واقعية لـ Stirling PDF، محرر PDF وواجهة API مفتوحا النواة يعملان على سطح المكتب وDocker وKubernetes. خيارات التثبيت وحدود الترخيص والأسئلة المفتوحة.",
    "audience": "الأفراد الذين يريدون محرر PDF محلياً، وفرق تقنية المعلومات والتطوير التي تحتاج إلى أتمتة PDF ومعالجة عبر API على خوادم مستضافة ذاتياً.",
    "readTime": "5 دقائق للقراءة",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة Stirling PDF",
    "targetKeywords": [
      "مراجعة Stirling PDF",
      "محرر PDF للاستضافة الذاتية",
      "محرر PDF مفتوح المصدر",
      "تشغيل Stirling PDF عبر Docker",
      "بديل Adobe Acrobat"
    ],
    "leadAnswerBlock": "Stirling PDF مجموعة أدوات PDF مفتوحة النواة (open-core) من شركة Stirling PDF Inc.، تحرّر ملفات PDF وتحوّلها وتطبّق عليها OCR وتحجب بياناتها وتعالجها دفعة واحدة. تعمل على Windows وmacOS وLinux، أو كخادم مستضاف ذاتياً عبر Docker أو Kubernetes أو ملف .jar. أحدث إصدار هو 3.3.0 (5 نوفمبر 2026)، وكان آخر commit على GitHub بتاريخ 15 نوفمبر 2026.",
    "quickAnswerTop": {
      "question": "ما هو Stirling PDF؟",
      "answer": "Stirling PDF مجموعة أدوات PDF مفتوحة النواة تحرّر ملفات PDF وتحوّلها وتطبّق عليها OCR وتحجب بياناتها وتعالجها دفعة واحدة، كتطبيق لسطح المكتب أو كخادم مستضاف ذاتياً أو كواجهة API.",
      "bullets": [
        "الترخيص: MIT مع استثناءات؛ بعض المجلدات تخضع لتراخيص منفصلة.",
        "السعر: مجاني للاستخدام الفردي بحسب الموقع؛ خطة Server Plan وعروض Enterprise المدفوعة بلا أسعار منشورة.",
        "المنصات: Windows وmacOS وLinux وDocker وKubernetes وخادم .jar يدوي.",
        "لم تختبره PromptQuorum."
      ]
    },
    "toc": [
      {
        "label": "ملخص سريع",
        "anchor": "tldr"
      },
      {
        "label": "نظرة عامة",
        "anchor": "overview"
      },
      {
        "label": "طرق الحصول عليه",
        "anchor": "get-it"
      },
      {
        "label": "المتطلبات",
        "anchor": "requirements"
      },
      {
        "label": "الميزات",
        "anchor": "features"
      },
      {
        "label": "الخصوصية",
        "anchor": "privacy"
      },
      {
        "label": "لمن يناسب",
        "anchor": "who-should-use"
      },
      {
        "label": "ما لم نتمكن من التحقق منه",
        "anchor": "could-not-verify"
      },
      {
        "label": "البدائل",
        "anchor": "alternatives"
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
        "title": "ملخص سريع",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "Stirling PDF مجموعة أدوات PDF مفتوحة النواة تحرّر ملفات PDF وتحوّلها وتطبّق عليها OCR وتحجب بياناتها وتعالجها دفعة واحدة، كتطبيق لسطح المكتب أو كخادم مستضاف ذاتياً أو كواجهة API."
          },
          {
            "type": "plain-terms",
            "text": "Stirling PDF مجموعة أدوات PDF تعمل كتطبيق لسطح المكتب أو كخادم ويب مستضاف ذاتياً أو كواجهة API."
          }
        ],
        "items": [
          "**Stirling PDF مجموعة أدوات PDF مفتوحة النواة حاصلة على عدد كبير من النجوم.** المشروع قيد الصيانة النشطة: أحدث إصدار 3.3.0 (5 نوفمبر 2026)، وآخر commit بتاريخ 15 نوفمبر 2026.",
          "يعمل كتطبيق لسطح المكتب على Windows وmacOS وLinux، أو كخادم مستضاف ذاتياً عبر Docker أو Kubernetes أو ملف .jar.",
          "يذكر الموقع أنه مجاني للاستخدام الفردي. توجد عروض مدفوعة (Server Plan وEnterprise) لكن لم نعثر على أسعار.",
          "ترخيص MIT له استثناءات: بعض المجلدات تخضع لتراخيص منفصلة.",
          "تقول الجهة المطوِّرة إن المستندات لا تُرسل إلى خدمات خارجية. هذا ادعاء من المطوِّر، كما أن تدفق بيانات ميزات الذكاء الاصطناعي غير موثّق في المصادر.",
          "لم تختبر PromptQuorum التطبيق."
        ]
      },
      "overview": {
        "id": "overview",
        "title": "نظرة عامة",
        "content": [
          "**Stirling PDF محرر PDF ومنصة لمعالجة المستندات تشغّلها بنفسك، على سطح المكتب أو على خادم.** الجهة المطوِّرة هي Stirling PDF Inc.، وتصف نفسها في سياسة الخصوصية بأنها شركة أمريكية.",
          "بحسب الجهة المطوِّرة، يقدّم أكثر من 60 أداة على سطح المكتب أو الخادم، منها التحرير والدمج والتقسيم والتوقيع وحجب البيانات والتحويل وOCR والضغط. يذكر ملف README أكثر من 50 أداة، لذا فإن عدد الأدوات غير متسق بين المصادر.",
          "إلى جانب المحرر، تصف الجهة المطوِّرة مسارات عمل بلا كتابة شيفرة (no-code pipelines) وواجهة REST API وواجهة MCP وwebhooks ومساعداً يعمل بالذكاء الاصطناعي. يوصف المشروع بأنه مفتوح النواة: يربط README بعروض Server Plan وEnterprise.",
          "توجد تغطية مستقلة. نشر كل من Pocket-lint وXDA Developers مقالات إيجابية، ثم انتقل أحد كتّاب XDA لاحقاً إلى مجموعة أدوات أخرى مستضافة ذاتياً مشيراً إلى مخاوف تتعلق بالخصوصية، رغم أن التفاصيل غير موجودة في ملاحظاتنا. انظر [Pocket-lint](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) لمراجعة إيجابية.",
          "هذه المراجعة ليست تجربة عملية. هي تلخّص صفحات الجهة المطوِّرة والمصادر العامة، وتُنسب أقوال المطوِّر إليه صراحةً."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "كيفية الحصول على Stirling PDF",
        "content": [
          "**يمكنك تثبيت Stirling PDF عبر مثبّت أصلي أو أمر Docker واحد أو Helm أو ملف .jar يدوي.** تعرض [صفحة التنزيل](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) الخيارات، وتحتوي [إصدار GitHub v3.3.0](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) على ملفات التثبيت."
        ],
        "columns": [
          "المنصة",
          "طريقة الحصول عليه"
        ],
        "rows": [
          {
            "المنصة": "Windows",
            "طريقة الحصول عليه": "ملف .exe مستقل بحسب [صفحة التنزيل](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review). ملفات الإصدار: Stirling-PDF-windows-x86_64.msi وStirling-PDF-windows-arm64-setup.exe."
          },
          {
            "المنصة": "macOS",
            "طريقة الحصول عليه": "تطبيق أصلي من صفحة التنزيل. ملفات الإصدار: Stirling-PDF-macos-universal.dmg وملف .app.tar.gz ([الإصدار](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review))."
          },
          {
            "المنصة": "Linux",
            "طريقة الحصول عليه": "ملفات الإصدار: .AppImage و.deb و.rpm (x86_64). تذكر صفحة التنزيل تشغيل ملف Java .jar يدوياً."
          },
          {
            "المنصة": "Docker",
            "طريقة الحصول عليه": "`docker run -p 8080:8080 docker.stirlingpdf.com/stirlingtools/stirling-pdf` ثم افتح http://localhost:8080 (بحسب [README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review))."
          },
          {
            "المنصة": "Kubernetes",
            "طريقة الحصول عليه": "النشر عبر Helm على أي عنقود Kubernetes، بحسب صفحة التنزيل."
          },
          {
            "المنصة": "الويب (واجهة متصفح مستضافة ذاتياً)",
            "طريقة الحصول عليه": "يقدّمه الخادم المستضاف ذاتياً (Docker أو ملف الخادم .jar)."
          },
          {
            "المنصة": "خادم مباشر / أي نظام فيه Java",
            "طريقة الحصول عليه": "إعداد خادم يدوي بملف .jar (Stirling-PDF-server.jar وStirling-PDF.jar ضمن ملفات الإصدار)."
          }
        ],
        "note": "لم نعثر على إدراج في App Store أو Google Play."
      },
      "requirements": {
        "id": "requirements",
        "title": "المتطلبات",
        "content": [
          "**لا تذكر المصادر متطلبات الذاكرة RAM أو GPU أو القرص أو إصدار Java.** الموثّق فقط هو أنظمة التشغيل وطرق التغليف."
        ],
        "columns": [
          "البند",
          "ما تذكره المصادر"
        ],
        "rows": [
          {
            "البند": "RAM",
            "ما تذكره المصادر": "غير مذكور"
          },
          {
            "البند": "GPU",
            "ما تذكره المصادر": "غير مذكور"
          },
          {
            "البند": "القرص",
            "ما تذكره المصادر": "غير مذكور"
          },
          {
            "البند": "نظام التشغيل",
            "ما تذكره المصادر": "Windows (ملفات x86_64 وarm64) وmacOS (universal) وLinux (ملفات x86_64)"
          },
          {
            "البند": "Java",
            "ما تذكره المصادر": "مسارات ملف .jar تعني الحاجة إلى بيئة Java؛ لا يُذكر إصدار"
          },
          {
            "البند": "Docker",
            "ما تذكره المصادر": "مطلوب لمسار الحاويات"
          }
        ],
        "note": "راجع وثائق الجهة المطوِّرة قبل النشر على أجهزة محدودة الإمكانات."
      },
      "features": {
        "id": "features",
        "title": "الميزات",
        "content": [
          "**تسرد الجهة المطوِّرة مجموعة أدوات واسعة إضافة إلى ميزات الأتمتة وواجهة API.** جميع البنود أدناه ادعاءات من المطوِّر؛ لم تختبرها PromptQuorum."
        ],
        "items": [
          "أكثر من 60 أداة تحرير على سطح المكتب أو الخادم (يذكر README أكثر من 50): التحرير والدمج والتقسيم والتوقيع وحجب البيانات والتحويل وOCR والضغط.",
          "مسارات عمل بلا كتابة شيفرة في الواجهة وواجهات API للمعالجة الدفعية، تشمل OCR والتصنيف والتحقق وحجب البيانات والضغط والتوجيه.",
          "واجهة REST API لمعظم الأدوات تقريباً، إضافة إلى واجهة MCP وwebhooks.",
          "مساعد يعمل بالذكاء الاصطناعي يجري تعديلات في الملف المفتوح (حجب البيانات والترجمة والتلخيص والتحويل).",
          "SSO والتدقيق ونشر مرن داخل البنية المحلية، موصوفة بأنها 'Enterprise-grade'.",
          "واجهة بأكثر من 40 لغة.",
          "بحسب Pocket-lint، كان محرر النصوص في مرحلة Alpha وقت مراجعته."
        ]
      },
      "privacy": {
        "id": "privacy",
        "title": "الخصوصية",
        "content": [
          "**تقول الجهة المطوِّرة إن المحرر يعمل على جهازك أو خادمك وإن المستندات لا تُرسل إلى خدمات خارجية.** هذا ادعاء من المطوِّر. الشيفرة المصدرية عامة، لذا يمكن التحقق منه.",
          "تدفق بيانات ميزات الذكاء الاصطناعي غير موثّق في المصادر، ولا تذكر المصادر ما إذا كانت تعمل محلياً أو تستدعي خدمات خارجية.",
          "بخصوص القياس عن بُعد (telemetry)، تذكر Contabo ميزة تحليلات كانت مفعّلة افتراضياً في الماضي ثم أصبحت قابلة للضبط لاحقاً. ولم يجد اختبار في منتدى Gnoppix أي telemetry. لم يتأكد أي من القولين مقابل الشيفرة الحالية أو نص السياسة. [سياسة الخصوصية](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) لدى الجهة المطوِّرة هي المصدر الأساسي الذي ينبغي قراءته.",
          "لا يُذكر ما إذا كانت نسختا سطح المكتب أو Docker تتطلبان حساباً. يعرض الموقع روابط تسجيل الدخول والتسجيل، ويوجد ملف .jar مع تسجيل دخول."
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**يناسب من يريدون معالجة ملفات PDF على أجهزتهم الخاصة.**",
          "من يريدون تحرير ملفات PDF محلياً بدلاً من رفعها إلى محوّلات عبر الإنترنت.",
          "فرق تقنية المعلومات والتطوير التي تريد واجهة API لـ PDF مستضافة ذاتياً أو مسارات معالجة دفعية على Docker أو Kubernetes.",
          "المستخدمون الذين يريدون محرر PDF مجانياً لسطح المكتب مع OCR وحجب البيانات."
        ]
      },
      "whoShouldNotUse": {
        "id": "could-not-verify",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**عدة نقاط مؤثرة في القرار لا تؤكدها المصادر.**",
          "الأسعار: لا مبالغ ولا فئات في صفحة الأسعار التي جُلبت، وهي تطلب من الزوار حجز عرض توضيحي. كما أنه غير واضح أي الميزات (SSO والتدقيق والنشر المحلي) تتبع أي خطة مدفوعة.",
          "الترخيص الكامل: ترخيص LICENSE هو MIT، لكن البند الخاص بمجلد engine/ مقطوع، ويخضع app/proprietary وapp/saas لتراخيص منفصلة. من يحتاج إلى ترخيص مفتوح المصدر بالكامل لكل المكونات عليه مراجعة LICENSE أولاً.",
          "متطلبات النظام: RAM وGPU والقرص وإصدار Java غير مذكورة.",
          "نموذج الذكاء الاصطناعي ومحرك OCR: غير مسمّيين، وغير واضح ما إذا كانت ميزات الذكاء الاصطناعي تبقى دون اتصال. من يحتاج إلى ذكاء اصطناعي دون اتصال بالكامل لا ينبغي أن يفترض ذلك.",
          "القياس عن بُعد في النسخة الحالية: لم نجد سوى أقوال أطراف ثالثة (Contabo واختبار في منتدى).",
          "اشتراط الحساب في نسختي سطح المكتب وDocker: غير مذكور.",
          "رقم '30M+ downloads' ادعاء من المطوِّر دون تأكيد مستقل.",
          "خدمة مستضافة: يُقال إن شروط الخدمة تذكر واحدة، لكن لم يُتحقق من أي تفاصيل.",
          "تعذّر تسجيل تفاصيل مقال XDA لكاتب انتقل إلى أداة أخرى، وتفاصيل انتقادات شريط ملفات تعريف الارتباط.",
          "المقر الرئيسي: العنوان الوحيد في مصدر أساسي هو عنوان بريدي في سان فرانسيسكو، وتصف السياسة الجهة المطوِّرة بأنها شركة أمريكية.",
          "عدد الـ forks وتقييم المتجر: غير متاحين."
        ]
      },
      "vsAlternatives": {
        "id": "alternatives",
        "title": "البدائل",
        "content": [
          "**تسمّي المصادر أربعة بدائل، لكن PromptQuorum لم تقارنها عملياً.** الملاحظات أدناه تعيد ذكر ما تقوله المصادر فقط."
        ],
        "columns": [
          "البديل",
          "ما تذكره المصادر"
        ],
        "rows": [
          {
            "البديل": "BentoPDF",
            "ما تذكره المصادر": "مجموعة أدوات PDF مستضافة ذاتياً قورنت مباشرة بـ Stirling PDF في [مقال Contabo](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review). Contabo مزوّد استضافة."
          },
          {
            "البديل": "Adobe Acrobat",
            "ما تذكره المصادر": "محرر PDF تجاري يقول المراجعون إن Stirling PDF يحل محله."
          },
          {
            "البديل": "UPDF",
            "ما تذكره المصادر": "يبيع منتج PDF منافساً وينشر مراجعة لـ Stirling PDF، لذا فهذه المراجعة متحيزة."
          },
          {
            "البديل": "SwifDoo PDF",
            "ما تذكره المصادر": "يبيع منتج PDF منافساً وينشر مراجعة لـ Stirling PDF، لذا فهذه المراجعة متحيزة."
          }
        ]
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل Stirling PDF مجاني؟",
            "a": "يذكر الموقع أنه مجاني للاستخدام الفردي، والمشروع مفتوح النواة. توجد عروض مدفوعة (Server Plan وEnterprise) لكن لا أسعار في الصفحات التي جُلبت."
          },
          {
            "q": "هل هو مفتوح المصدر فعلاً؟",
            "a": "ترخيص LICENSE هو MIT، لكنه ينص على أن بعض المجلدات (app/proprietary وapp/saas وengine/، والبند الأخير مقطوع) لها تراخيص منفصلة. ويصف README المشروع بأنه مفتوح النواة."
          },
          {
            "q": "كيف أثبّته بسرعة؟",
            "a": "شغّل أمر Docker من README ثم افتح http://localhost:8080. تعرض صفحة التنزيل ملف Windows .exe وتطبيق Mac أصلياً وملف Linux .jar. كما يتضمن إصدار GitHub v3.3.0 ملفات .msi وsetup .exe و.dmg و.deb و.rpm و.AppImage."
          },
          {
            "q": "هل تغادر ملفاتي جهازي؟",
            "a": "تقول الجهة المطوِّرة إن المحرر يعمل على جهازك أو خادمك وإن المستندات لا تُرسل إلى خدمات خارجية. هذا ادعاء من المطوِّر. أما كيفية تعامل ميزات الذكاء الاصطناعي مع البيانات فغير موثقة في المصادر."
          },
          {
            "q": "ما المنصات المدعومة؟",
            "a": "تطبيقات سطح المكتب لـ Windows وmacOS وLinux، إضافة إلى Docker وKubernetes (Helm) وإعداد خادم .jar يدوي. تُقدَّم واجهة المتصفح من الخادم المستضاف ذاتياً."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": [
          "**يبدو Stirling PDF خياراً جيد الصيانة وواسع الاستخدام للعمل على PDF محلياً أو بالاستضافة الذاتية، مع أسئلة مفتوحة حول الترخيص والأسعار وميزات الذكاء الاصطناعي.** يوفر صيغ تثبيت كثيرة وواجهة API وتطويراً نشطاً (آخر commit بتاريخ 15 نوفمبر 2026).",
          "قبل الاعتماد عليه، اقرأ LICENSE واسأل الجهة المطوِّرة عن أسعار الخطط المدفوعة وتحقق من كيفية تعامل ميزات الذكاء الاصطناعي مع البيانات. لم تختبر PromptQuorum التطبيق، لذا تستند هذه الخلاصة إلى أقوال الجهة المطوِّرة والمصادر العامة."
        ]
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[موقع Stirling PDF](https://www.stirlingpdf.com?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[صفحة التنزيل](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[صفحة الأسعار](https://www.stirlingpdf.com/pricing?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[مستودع GitHub وREADME](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[إصدار GitHub v3.3.0](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[LICENSE](https://github.com/Stirling-Tools/Stirling-PDF/blob/HEAD/LICENSE?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[سياسة الخصوصية](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[مراجعة Pocket-lint](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Contabo: BentoPDF مقابل Stirling PDF](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[XDA Developers: استبدال Stirling PDF](https://www.xda-developers.com/replaced-stirling-pdf-with-this-self-hosted-pdf-toolkit/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة Docling](/ar/power-local-llm/docling-review) — مكتبة مفتوحة المصدر لتحليل المستندات، من فئة الدليل نفسها.",
          "[مراجعة OpenDataLoader PDF](/ar/power-local-llm/opendataloader-pdf-review) — محلل PDF مفتوح المصدر، من فئة الدليل نفسها.",
          "[دليل برمجيات الذكاء الاصطناعي المحلي الكامل](/ar/power-local-llm/local-llm-software-directory) — إدراج Stirling PDF والأدوات ذات الصلة في الدليل."
        ]
      }
    },
    "heroImage": "/images/stirling-pdf-review-hero-ar.webp"
  },
  ko: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-16",
    "dateModified": "2026-11-16",
    "next_refresh_due": "2027-05-16",
    "theme": "RAG & Document Chat",
    "title": "Stirling PDF 리뷰: 데스크톱과 셀프 호스팅용 오픈코어 PDF 툴킷",
    "seoTitle": "Stirling PDF 리뷰: 기능·설치·개인정보",
    "intro": "Stirling PDF는 데스크톱 앱, 셀프 호스팅 웹 서버, API로 실행되는 PDF 툴킷입니다. 이 리뷰는 제작사와 공개 자료의 내용을 정리한 것입니다. PromptQuorum은 이 앱을 직접 테스트하지 않았습니다.",
    "metaDescription": "데스크톱, Docker, Kubernetes에서 실행되는 오픈코어 PDF 편집기이자 API인 Stirling PDF의 사실 기반 리뷰. 설치 방법, 라이선스 제한, 미확인 사항.",
    "audience": "로컬 PDF 편집기가 필요한 개인과, 셀프 호스팅 PDF 자동화 및 API 처리가 필요한 IT·개발 팀.",
    "readTime": "5분 읽기",
    "educationalLevel": "Beginner",
    "affiliateDisclosure": false,
    "primaryTerm": "Stirling PDF 리뷰",
    "targetKeywords": [
      "Stirling PDF 리뷰",
      "셀프 호스팅 PDF 편집기",
      "오픈소스 PDF 편집기",
      "Stirling PDF Docker 설치",
      "Adobe Acrobat 대안"
    ],
    "leadAnswerBlock": "Stirling PDF는 Stirling PDF Inc.가 만든 오픈코어 PDF 툴킷으로, PDF를 편집·변환·OCR·가림 처리하고 일괄 처리합니다. Windows, macOS, Linux에서 실행되며, Docker, Kubernetes 또는 .jar 파일로 셀프 호스팅 서버로도 쓸 수 있습니다. 최신 릴리스는 3.3.0(2026년 11월 5일)이고, GitHub의 마지막 커밋은 2026년 11월 15일입니다.",
    "quickAnswerTop": {
      "question": "Stirling PDF란 무엇입니까?",
      "answer": "Stirling PDF는 PDF를 편집·변환·OCR·가림 처리하고 일괄 처리하는 오픈코어 PDF 툴킷이며, 데스크톱 앱, 셀프 호스팅 서버, API로 사용할 수 있습니다.",
      "bullets": [
        "라이선스: 예외가 있는 MIT. 일부 디렉터리는 별도 라이선스를 따릅니다.",
        "가격: 사이트에 따르면 개인 사용은 무료. 유료 Server Plan과 Enterprise 상품의 가격은 공개되어 있지 않습니다.",
        "플랫폼: Windows, macOS, Linux, Docker, Kubernetes, 수동 .jar 서버.",
        "PromptQuorum은 테스트하지 않았습니다."
      ]
    },
    "toc": [
      {
        "label": "핵심 내용",
        "anchor": "tldr"
      },
      {
        "label": "개요",
        "anchor": "overview"
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
        "label": "기능",
        "anchor": "features"
      },
      {
        "label": "개인정보",
        "anchor": "privacy"
      },
      {
        "label": "추천 대상",
        "anchor": "who-should-use"
      },
      {
        "label": "확인하지 못한 사항",
        "anchor": "could-not-verify"
      },
      {
        "label": "대안",
        "anchor": "alternatives"
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
            "text": "Stirling PDF는 PDF를 편집·변환·OCR·가림 처리하고 일괄 처리하는 오픈코어 PDF 툴킷이며, 데스크톱 앱, 셀프 호스팅 서버, API로 사용할 수 있습니다."
          },
          {
            "type": "plain-terms",
            "text": "Stirling PDF는 데스크톱 앱, 셀프 호스팅 웹 서버, API로 실행되는 PDF 툴킷입니다."
          }
        ],
        "items": [
          "**Stirling PDF는 별을 많이 받은 오픈코어 PDF 툴킷입니다.** 프로젝트는 활발히 관리되고 있으며, 최신 릴리스는 3.3.0(2026년 11월 5일), 마지막 커밋은 2026년 11월 15일입니다.",
          "Windows, macOS, Linux 데스크톱 앱으로 실행하거나, Docker, Kubernetes, .jar를 통한 셀프 호스팅 서버로 실행할 수 있습니다.",
          "사이트에 따르면 개인 사용은 무료입니다. 유료 Server Plan과 Enterprise 상품이 있지만 가격은 찾지 못했습니다.",
          "MIT 라이선스에는 예외가 있으며, 일부 디렉터리는 별도 라이선스를 따릅니다.",
          "제작사는 문서가 외부 서비스로 전송되지 않는다고 밝힙니다. 이는 제작사의 주장이며, AI 기능의 데이터 흐름은 출처에 문서화되어 있지 않습니다.",
          "PromptQuorum은 이 앱을 테스트하지 않았습니다."
        ]
      },
      "overview": {
        "id": "overview",
        "title": "개요",
        "content": [
          "**Stirling PDF는 데스크톱이나 서버에서 직접 운영하는 PDF 편집기이자 문서 처리 플랫폼입니다.** 제작사는 Stirling PDF Inc.이며, 개인정보 처리방침에서 스스로를 미국 기업이라고 밝히고 있습니다.",
          "제작사에 따르면 데스크톱 또는 서버에서 편집, 병합, 분할, 서명, 가림 처리, 변환, OCR, 압축 등 60개 이상의 도구를 제공합니다. README에는 50개 이상이라고 되어 있어, 출처마다 도구 수가 일치하지 않습니다.",
          "제작사는 편집기 외에도 노코드 파이프라인, REST API, MCP 인터페이스, 웹훅, AI 어시스턴트를 설명합니다. 프로젝트는 오픈코어로 소개되며, README에는 Server Plan과 Enterprise 상품 링크가 있습니다.",
          "독립적인 보도도 있습니다. Pocket-lint와 XDA Developers가 호의적인 기사를 게재했고, XDA의 한 필자는 이후 개인정보 우려를 이유로 다른 셀프 호스팅 툴킷으로 옮겼지만, 자세한 내용은 저희 메모에 없습니다. 긍정적인 리뷰 하나는 [Pocket-lint](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)에서 볼 수 있습니다.",
          "이 리뷰는 직접 사용해 본 결과가 아닙니다. 제작사 페이지와 공개 자료를 정리한 것이며, 제작사의 설명은 그렇게 표시했습니다."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Stirling PDF 설치 방법",
        "content": [
          "**Stirling PDF는 네이티브 설치 프로그램, Docker 명령어 한 줄, Helm, 수동 .jar로 설치할 수 있습니다.** [다운로드 페이지](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)에 선택지가 나와 있고, 설치 파일은 [GitHub v3.3.0 릴리스](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)에 있습니다."
        ],
        "columns": [
          "플랫폼",
          "받는 방법"
        ],
        "rows": [
          {
            "플랫폼": "Windows",
            "받는 방법": "[다운로드 페이지](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)의 독립 실행형 .exe. 릴리스 파일: Stirling-PDF-windows-x86_64.msi, Stirling-PDF-windows-arm64-setup.exe."
          },
          {
            "플랫폼": "macOS",
            "받는 방법": "다운로드 페이지의 네이티브 앱. 릴리스 파일: Stirling-PDF-macos-universal.dmg와 .app.tar.gz([릴리스](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review))."
          },
          {
            "플랫폼": "Linux",
            "받는 방법": "릴리스 파일: .AppImage, .deb, .rpm(x86_64). 다운로드 페이지에는 Java .jar를 수동으로 실행하라고 되어 있습니다."
          },
          {
            "플랫폼": "Docker",
            "받는 방법": "`docker run -p 8080:8080 docker.stirlingpdf.com/stirlingtools/stirling-pdf` 실행 후 http://localhost:8080 접속([README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review) 기준)."
          },
          {
            "플랫폼": "Kubernetes",
            "받는 방법": "다운로드 페이지에 따르면 Kubernetes 클러스터에서 Helm으로 배포합니다."
          },
          {
            "플랫폼": "웹(셀프 호스팅 브라우저 UI)",
            "받는 방법": "셀프 호스팅 서버(Docker 또는 서버 .jar)가 제공합니다."
          },
          {
            "플랫폼": "베어메탈 / Java가 있는 모든 OS",
            "받는 방법": ".jar를 이용한 수동 서버 설정(릴리스 파일의 Stirling-PDF-server.jar, Stirling-PDF.jar)."
          }
        ],
        "note": "App Store나 Google Play 등록 정보는 찾지 못했습니다."
      },
      "requirements": {
        "id": "requirements",
        "title": "요구 사항",
        "content": [
          "**출처에는 RAM, GPU, 디스크, Java 버전 요구 사항이 나와 있지 않습니다.** 운영체제와 패키징 형태만 문서화되어 있습니다."
        ],
        "columns": [
          "항목",
          "출처에 나온 내용"
        ],
        "rows": [
          {
            "항목": "RAM",
            "출처에 나온 내용": "명시 없음"
          },
          {
            "항목": "GPU",
            "출처에 나온 내용": "명시 없음"
          },
          {
            "항목": "디스크",
            "출처에 나온 내용": "명시 없음"
          },
          {
            "항목": "운영체제",
            "출처에 나온 내용": "Windows(x86_64, arm64 파일), macOS(universal), Linux(x86_64 파일)"
          },
          {
            "항목": "Java",
            "출처에 나온 내용": ".jar 방식은 Java 런타임이 필요해 보이며, 버전은 명시 없음"
          },
          {
            "항목": "Docker",
            "출처에 나온 내용": "컨테이너 방식에 필요"
          }
        ],
        "note": "소형 하드웨어에 배포하기 전에 제작사 문서를 확인하십시오."
      },
      "features": {
        "id": "features",
        "title": "기능",
        "content": [
          "**제작사는 폭넓은 도구 모음과 자동화·API 기능을 제시합니다.** 아래 항목은 모두 제작사의 주장이며, PromptQuorum은 테스트하지 않았습니다."
        ],
        "items": [
          "데스크톱 또는 서버에서 쓰는 60개 이상의 편집 도구(README에는 50개 이상): 편집, 병합, 분할, 서명, 가림 처리, 변환, OCR, 압축.",
          "UI의 노코드 파이프라인과 일괄 처리용 API: OCR, 분류, 검증, 가림 처리, 압축, 라우팅 포함.",
          "거의 모든 도구를 위한 REST API와 MCP 인터페이스, 웹훅.",
          "열려 있는 파일을 직접 수정하는 AI 어시스턴트(가림 처리, 번역, 요약, 변환).",
          "SSO, 감사 기능, 유연한 온프레미스 배포. 'Enterprise-grade'로 소개됩니다.",
          "40개 이상의 언어로 제공되는 인터페이스.",
          "Pocket-lint에 따르면 리뷰 당시 텍스트 편집기는 알파 단계였습니다."
        ]
      },
      "privacy": {
        "id": "privacy",
        "title": "개인정보",
        "content": [
          "**제작사는 편집기가 사용자의 컴퓨터나 서버에서 실행되며 문서가 외부 서비스로 전송되지 않는다고 밝힙니다.** 이는 제작사의 주장입니다. 소스 코드가 공개되어 있어 확인할 수 있습니다.",
          "AI 기능의 데이터 흐름은 출처에 문서화되어 있지 않으며, 로컬에서 실행되는지 외부 서비스를 호출하는지도 나와 있지 않습니다.",
          "텔레메트리에 관해서는, Contabo가 과거에 분석 기능이 기본으로 켜져 있었고 이후 설정 가능하게 바뀌었다고 보고합니다. Gnoppix 포럼의 테스트에서는 텔레메트리가 발견되지 않았습니다. 두 주장 모두 현재 코드나 정책 문구와 대조해 확인된 것은 아닙니다. 제작사의 [개인정보 처리방침](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)이 읽어야 할 1차 출처입니다.",
          "데스크톱 또는 Docker 버전에 계정이 필요한지는 명시되어 있지 않습니다. 사이트에는 로그인과 회원가입 링크가 있고, 로그인 포함 .jar도 존재합니다."
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "추천 대상",
        "items": [
          "**PDF를 자신의 하드웨어에서 처리하려는 사용자에게 적합합니다.**",
          "PDF를 온라인 변환 사이트에 업로드하지 않고 로컬에서 편집하려는 사용자.",
          "Docker나 Kubernetes에서 셀프 호스팅 PDF API 또는 일괄 처리 파이프라인을 운영하려는 IT·개발 팀.",
          "OCR과 가림 처리 기능이 있는 무료 데스크톱 PDF 편집기를 원하는 사용자."
        ]
      },
      "whoShouldNotUse": {
        "id": "could-not-verify",
        "title": "확인하지 못한 사항",
        "items": [
          "**의사 결정에 중요한 여러 사항이 출처로는 확인되지 않았습니다.**",
          "가격: 가져온 가격 페이지에는 금액이나 요금제가 없고 데모 예약을 안내합니다. 어떤 기능(SSO, 감사, 온프레미스)이 어느 유료 플랜에 속하는지도 불분명합니다.",
          "전체 라이선스: LICENSE는 MIT이지만 engine/ 디렉터리에 관한 조항이 잘려 있고, app/proprietary와 app/saas는 별도 라이선스를 따릅니다. 모든 구성 요소에 순수 오픈소스 라이선스가 필요한 경우 먼저 LICENSE를 확인하십시오.",
          "시스템 요구 사항: RAM, GPU, 디스크, Java 버전은 명시되어 있지 않습니다.",
          "AI 모델과 OCR 엔진: 이름이 밝혀져 있지 않고, AI 기능이 오프라인으로 유지되는지도 불분명합니다. 엄격한 오프라인 AI가 필요하다면 그렇다고 가정해서는 안 됩니다.",
          "현재 버전의 텔레메트리: 제3자의 주장(Contabo, 포럼 테스트)만 찾았습니다.",
          "데스크톱 및 Docker 버전의 계정 요구 여부: 명시되어 있지 않습니다.",
          "'다운로드 3,000만 회 이상'이라는 수치는 독립적인 확인이 없는 제작사의 주장입니다.",
          "호스팅 서비스: 서비스 약관에 언급이 있다고 알려져 있으나 세부 내용은 확인하지 못했습니다.",
          "다른 도구로 옮긴 필자의 XDA 기사 내용과 쿠키 배너 비판의 세부 내용은 기록하지 못했습니다.",
          "본사 소재지: 1차 출처에서 확인된 주소는 샌프란시스코 우편 주소뿐이며, 처리방침은 제작사를 미국 기업이라고 밝힙니다.",
          "포크 수와 스토어 평점: 확인할 수 없었습니다."
        ]
      },
      "vsAlternatives": {
        "id": "alternatives",
        "title": "대안",
        "content": [
          "**출처에는 네 가지 대안이 나오지만 PromptQuorum은 직접 비교해 보지 않았습니다.** 아래 내용은 출처의 설명을 그대로 옮긴 것입니다."
        ],
        "columns": [
          "대안",
          "출처에 나온 내용"
        ],
        "rows": [
          {
            "대안": "BentoPDF",
            "출처에 나온 내용": "[Contabo 기사](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)에서 Stirling PDF와 직접 비교된 셀프 호스팅 PDF 툴킷. Contabo는 호스팅 업체입니다."
          },
          {
            "대안": "Adobe Acrobat",
            "출처에 나온 내용": "리뷰어들이 Stirling PDF로 대체할 수 있다고 말하는 상용 PDF 편집기."
          },
          {
            "대안": "UPDF",
            "출처에 나온 내용": "경쟁 PDF 제품을 판매하며 Stirling PDF 리뷰를 게재하므로 해당 리뷰는 편향되어 있습니다."
          },
          {
            "대안": "SwifDoo PDF",
            "출처에 나온 내용": "경쟁 PDF 제품을 판매하며 Stirling PDF 리뷰를 게재하므로 해당 리뷰는 편향되어 있습니다."
          }
        ]
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "Stirling PDF는 무료입니까?",
            "a": "사이트에 따르면 개인 사용은 무료이며, 프로젝트는 오픈코어입니다. 유료 Server Plan과 Enterprise 상품이 있지만 가져온 페이지에는 가격이 나와 있지 않습니다."
          },
          {
            "q": "정말 오픈소스입니까?",
            "a": "LICENSE는 MIT이지만, 일부 디렉터리(app/proprietary, app/saas, 마지막 조항이 잘린 engine/)는 별도 라이선스를 따른다고 명시되어 있습니다. README는 프로젝트를 오픈코어라고 부릅니다."
          },
          {
            "q": "빠르게 설치하려면 어떻게 합니까?",
            "a": "README의 Docker 명령어를 실행한 뒤 http://localhost:8080에 접속합니다. 다운로드 페이지에서는 Windows .exe, 네이티브 Mac 앱, Linux .jar를 제공합니다. GitHub v3.3.0 릴리스에는 .msi, 설치용 .exe, .dmg, .deb, .rpm, .AppImage 파일도 있습니다."
          },
          {
            "q": "내 파일이 내 컴퓨터 밖으로 나갑니까?",
            "a": "제작사는 편집기가 사용자의 컴퓨터나 서버에서 실행되며 문서가 외부 서비스로 전송되지 않는다고 밝힙니다. 이는 제작사의 주장입니다. AI 기능이 데이터를 어떻게 처리하는지는 출처에 문서화되어 있지 않습니다."
          },
          {
            "q": "어떤 플랫폼을 지원합니까?",
            "a": "Windows, macOS, Linux 데스크톱 앱과 Docker, Kubernetes(Helm), 수동 .jar 서버 설정을 지원합니다. 브라우저 UI는 셀프 호스팅 서버가 제공합니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "결론",
        "content": [
          "**Stirling PDF는 로컬 또는 셀프 호스팅 PDF 작업에 잘 관리되고 널리 쓰이는 선택지로 보이지만, 라이선스, 가격, AI 기능에는 풀리지 않은 의문이 있습니다.** 설치 파일 형식이 다양하고 API를 제공하며 개발이 활발합니다(마지막 커밋 2026년 11월 15일).",
          "의존하기 전에 LICENSE를 읽고, 유료 플랜 가격을 제작사에 문의하고, AI 기능의 데이터 처리 방식을 확인하십시오. PromptQuorum은 이 앱을 테스트하지 않았으므로, 이 결론은 제작사의 설명과 공개 자료에 근거합니다."
        ]
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[Stirling PDF 웹사이트](https://www.stirlingpdf.com?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[다운로드 페이지](https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[가격 페이지](https://www.stirlingpdf.com/pricing?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[GitHub 저장소 및 README](https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[GitHub 릴리스 v3.3.0](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[LICENSE](https://github.com/Stirling-Tools/Stirling-PDF/blob/HEAD/LICENSE?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[개인정보 처리방침](https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Pocket-lint 리뷰](https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[Contabo: BentoPDF vs Stirling PDF](https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)",
          "[XDA Developers: Stirling PDF를 대체한 사례](https://www.xda-developers.com/replaced-stirling-pdf-with-this-self-hosted-pdf-toolkit/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review)"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[Docling 리뷰](/ko/power-local-llm/docling-review) — 같은 디렉터리 카테고리의 오픈소스 문서 파싱 라이브러리입니다.",
          "[OpenDataLoader PDF 리뷰](/ko/power-local-llm/opendataloader-pdf-review) — 같은 디렉터리 카테고리의 오픈소스 PDF 파서입니다.",
          "[로컬 LLM 소프트웨어 전체 디렉터리](/ko/power-local-llm/local-llm-software-directory) — Stirling PDF와 관련 도구의 디렉터리 항목입니다."
        ]
      }
    },
    "heroImage": "/images/stirling-pdf-review-hero-ko.webp"
  },
}
