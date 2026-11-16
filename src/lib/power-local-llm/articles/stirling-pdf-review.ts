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
        "items": [
          {
            "question": "Is Stirling PDF free?",
            "answer": "The site says it is free for individual use, and the project is open-core. Paid Server Plan and Enterprise offerings exist, but no prices appear in the fetched pages."
          },
          {
            "question": "Is it really open source?",
            "answer": "The LICENSE is MIT, but it states that some directories (app/proprietary, app/saas and engine/, the last clause truncated) have separate licenses. The README calls the project open-core."
          },
          {
            "question": "How do I install it quickly?",
            "answer": "Run the Docker command from the README, then open http://localhost:8080. The download page offers a Windows .exe, a native Mac app and a Linux .jar. The GitHub v3.3.0 release also ships .msi, setup .exe, .dmg, .deb, .rpm and .AppImage files."
          },
          {
            "question": "Do my files leave my machine?",
            "answer": "The maker says the editor runs on your machine or server and documents are not sent to external services. This is a maker claim. How the AI features handle data is not documented in the sources."
          },
          {
            "question": "Which platforms are supported?",
            "answer": "Windows, macOS and Linux desktop apps, plus Docker, Kubernetes (Helm) and a manual .jar server setup. The browser UI is served by the self-hosted server."
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
          {
            "label": "Stirling PDF website",
            "url": "https://www.stirlingpdf.com?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review"
          },
          {
            "label": "Download page",
            "url": "https://www.stirlingpdf.com/download?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review"
          },
          {
            "label": "Pricing page",
            "url": "https://www.stirlingpdf.com/pricing?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review"
          },
          {
            "label": "GitHub repository and README",
            "url": "https://github.com/Stirling-Tools/Stirling-PDF?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review"
          },
          {
            "label": "GitHub release v3.3.0",
            "url": "https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review"
          },
          {
            "label": "LICENSE",
            "url": "https://github.com/Stirling-Tools/Stirling-PDF/blob/HEAD/LICENSE?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review"
          },
          {
            "label": "Privacy policy",
            "url": "https://www.stirling.com/legal/privacy-policy?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review"
          },
          {
            "label": "Pocket-lint review",
            "url": "https://www.pocket-lint.com/i-replaced-adobe-acrobat-with-free-pdf-editor/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review"
          },
          {
            "label": "Contabo: BentoPDF vs Stirling PDF",
            "url": "https://contabo.com/blog/bentopdf-vs-stirling-pdf/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review"
          },
          {
            "label": "XDA Developers: replaced Stirling PDF",
            "url": "https://www.xda-developers.com/replaced-stirling-pdf-with-this-self-hosted-pdf-toolkit/?utm_source=promptquorum.com&utm_medium=referral&utm_campaign=app-review"
          }
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
}
