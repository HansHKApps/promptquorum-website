// Nutrient Review: commercial PDF SDK, hosted APIs and a free PDF-to-Markdown CLI
// Slug: nutrient-review | segment: ocr-document-parsing
// Facts read 2026-11-17 from nutrient.io (SDK page, pricing, SDK pricing, legal/impressum, privacy policy, guides, changelogs), the CLI repository
// github.com/PSPDFKit/pdf-to-markdown (README, LICENSE.md) and npm (@nutrient-sdk/viewer, @pspdfkit/pdf-to-markdown). No hands-on testing.
// Newest dated releases: Java 2.1.14 / .NET 14.4.12 / Python 1.0.14 on 2026-11-15; Web SDK 1.25.0 on 2026-11-02 (pqReview version).
// OPEN: the legal page lists entities in the US, Austria, France and the UK; the privacy policy names the Austrian GmbH as controller for the cloud API.
// geo-translation: APPLIED (docs/geo-translation.md read 2026-11-17; formal registers, Latin product/mode names kept, USD not converted).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'RAG & Document Chat',
    heroImage: '/images/nutrient-review-hero-en.webp',
    title: 'Nutrient Review: Commercial PDF SDK With a Markdown Converter',
    seoTitle: 'Nutrient Review: PDF SDK, Cloud APIs and Markdown CLI',
    intro: 'Nutrient is a commercial vendor of PDF software: licensed SDKs for web, mobile and server, a self-hosted Document Engine, usage-based cloud APIs, and a command-line tool that converts PDFs to Markdown and is free in its Standard mode. It is not a single app and it is not open source. This review is based on the vendor\'s website, documentation, changelogs and privacy policy and on the converter\'s GitHub repository, checked on 17 November 2026; PromptQuorum has not installed or run any Nutrient product.',
    metaDescription: 'Nutrient review: commercial PDF SDKs, cloud APIs and a PDF-to-Markdown CLI with a free Standard mode. What stays local, pricing and open questions.',
    twitterDescription: 'Nutrient review: PDF SDKs by quote, hosted APIs and a PDF-to-Markdown CLI with a free Standard mode. Data flow, pricing and what the vendor sources leave open.',
    audience: 'Developers and teams who build PDF or RAG pipelines and want to know what Nutrient offers next to open-source parsers, what stays on their machine and which claims are the vendor\'s own.',
    readTime: '7 min read',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'Nutrient review',
    targetKeywords: [
      'nutrient review',
      'nutrient pdf sdk',
      'nutrient pdf to markdown cli',
      'nutrient document engine',
      'nutrient vs docling',
      'pdf parser for rag',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Nutrient is a commercial PDF platform, not a single app: licensed SDKs, hosted APIs and a command-line converter can all turn PDFs into Markdown or JSON for RAG, and only the converter\'s Standard mode is free.** Its closed source and quote-based licensing set it apart from the open-source parsers in this category.',
    quickAnswerTop: {
      en: {
        question: 'Can Nutrient process my PDFs without sending them to a cloud?',
        answer: 'Partly. The vendor says its PDF-to-Markdown CLI keeps documents on your computer and that Standard conversion works offline on text-based PDFs, and a macOS app runs the extraction engine on your Mac. Scans in the CLI need Vision mode, which requires a Nutrient sign-in. The hosted APIs run on Nutrient\'s servers. These are the vendor\'s statements; PromptQuorum has not tested them or inspected network traffic.',
        bullets: [
          'Input: the CLI reads PDFs; the cloud Data Extraction API also reads scans, images and Office files, per the vendor.',
          'Output: Markdown or plain text from the CLI; structured JSON from the Data Extraction API.',
          'Licence: closed source; the CLI is under a proprietary licence and the SDKs are licensed per quote.',
        ],
        updatedDate: '2026-11-17',
      },
    },
    toc: [
      {
        label: 'Quick Answer',
        anchor: 'quick-answer',
      },
      {
        label: 'What Is Nutrient?',
        anchor: 'what-is-nutrient',
      },
      {
        label: 'Get It',
        anchor: 'get-it',
      },
      {
        label: 'Local, Self-Hosted and Cloud Data Flow',
        anchor: 'privacy',
      },
      {
        label: 'Features Confirmed by the Sources',
        anchor: 'key-features',
      },
      {
        label: 'Licence and Pricing',
        anchor: 'pricing',
      },
      {
        label: 'What We Could Not Verify',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competitors and Alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Frequently Asked Questions',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'Related Reading',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Nutrient sells PDF software for developers, from SDKs that add viewing, editing and signing to an app to a converter with a free Standard mode that turns PDFs into Markdown for language models.',
          },
          {
            type: 'plain-terms',
            text: 'You either license an SDK or the Document Engine and build it into your own software, call Nutrient\'s hosted APIs, or install the converter and run it on your computer.',
          },
        ],
        items: [
          'Maintenance: the newest SDK releases, .NET 14.4.12, Java 2.1.14 and Python 1.0.14, are from 15 November 2026, so no stale-project warning applies.',
          'Scope: three product families, SDKs with Document Engine, cloud APIs and a command-line converter, so check which one a claim refers to.',
          'Overlap with open-source parsers: the PDF-to-Markdown converter and the Data Extraction API; the SDKs add viewing, editing, signing and redaction to apps.',
          'Cost: three pricing models, from a free converter mode to quote-only SDK licences; see Licence and Pricing.',
          'Unverified: speed and accuracy figures are the vendor\'s own benchmarks, and PromptQuorum has run no Nutrient product.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'All facts come from the vendor\'s own pages and the converter\'s repository. PromptQuorum has not tested Nutrient, so speed, accuracy and memory use are not assessed here.',
          },
        ],
      },
      overview: {
        id: 'what-is-nutrient',
        title: 'What Is Nutrient?',
        content: [
          '**Nutrient sells software for viewing, editing, signing, redacting, OCR and data extraction in PDFs, in three forms: licensed SDKs with a self-hosted Document Engine, usage-based cloud APIs, and a command-line converter with a free Standard mode.** Per the vendor\'s [SDK page](https://www.nutrient.io/sdk/), the SDKs run on Web, iOS, Android, Flutter, React Native, MAUI, .NET, Python, Java and Node.js.',
          'The name PSPDFKit still appears in the vendor\'s [legal page](https://www.nutrient.io/legal/impressum/), in the converter\'s npm package name and in its GitHub organisation. The legal page lists several companies doing business as Nutrient, with addresses in the United States, Austria, France and the United Kingdom; the sources do not say which one is the headquarters.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Get It',
        content: [
          '**Nutrient has no single installer: the easiest route is the macOS app for Apple silicon, and every other route needs a terminal or a developer environment.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          {
            Option: 'macOS app (Apple silicon)',
            'How to get it': '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/), a DMG installer for macOS Tahoe 26.4 or later; sign in with a free Nutrient account; extraction needs an AI model that you connect',
          },
          {
            Option: 'Converter (npm)',
            'How to get it': '`npm install -g @pspdfkit/pdf-to-markdown`, per the [README](https://github.com/PSPDFKit/pdf-to-markdown); needs Node 18 or newer on macOS 13+ (Apple silicon), Linux (glibc 2.38+) or Windows (Git Bash)',
          },
          {
            Option: 'Cloud APIs',
            'How to get it': 'Create a Nutrient account and call the hosted APIs, per the [API overview](https://www.nutrient.io/api/)',
          },
          {
            Option: 'SDKs',
            'How to get it': 'Package-manager install per platform with a licence key, for example `@nutrient-sdk/viewer` on npm for Web; see the [SDK page](https://www.nutrient.io/sdk/)',
          },
          {
            Option: 'Document Engine',
            'How to get it': 'A commercial container that is started with an activation key, per the [product activation guide](https://www.nutrient.io/guides/document-engine/deployment/product-activation/)',
          },
          {
            Option: 'Website',
            'How to get it': '[nutrient.io](https://www.nutrient.io)',
          },
          {
            Option: 'Privacy policy',
            'How to get it': '[Privacy policy](https://www.nutrient.io/legal/privacy/)',
          },
          {
            Option: 'Source code',
            'How to get it': 'The SDKs are closed source; only the converter\'s wrapper and documentation are on [GitHub](https://github.com/PSPDFKit/pdf-to-markdown)',
          },
        ],
        note: 'Newest releases checked on 17 November 2026: Web SDK 1.25.0 (2 November 2026), Document Engine 1.20.0 (29 October 2026), .NET SDK 14.4.12, Java SDK 2.1.14 and Python SDK 1.0.14 (all 15 November 2026), iOS 27.2.0 (11 November 2026) and Android 12.1.0 (10 November 2026), from the [Web SDK changelog](https://www.nutrient.io/guides/web/changelog/) and the changelogs of the other SDKs. The converter\'s latest npm version is 0.6.0 (28 September 2026). The last upstream update is 15 November 2026. A terminal or developer environment is required for every route except the macOS app.',
      },
      privacy: {
        id: 'privacy',
        title: 'Local, Self-Hosted and Cloud Data Flow',
        content: [
          '**What stays on your machine depends on the product: the vendor says the converter keeps documents on your computer, while the hosted APIs process files on Nutrient\'s servers.** The [converter guide](https://www.nutrient.io/guides/dws-pdf-to-markdown/) says it reports usage details such as conversion mode and page count but not file names, paths, contents or output, and that Standard conversion works offline unless you use an API key.',
          'For the macOS app, the vendor says documents never leave the Mac if the AI model also runs on the Mac, and that a connected OpenAI or Anthropic key sends document content to that provider; Nutrient receives usage records for billing.',
          'For the hosted Processor API, the [privacy policy](https://www.nutrient.io/legal/privacy/) says uploaded files are deleted within 24 hours on plans without data retention. On plans where data retention is enabled, it says Nutrient keeps submitted files and outputs and uses them to improve its services, including training and evaluating machine-learning models. Check which kind of plan you are on before sending sensitive documents.',
          'For the self-hosted Document Engine and the Web, .NET, Python and Java SDKs, the policy says licences issued after 18 March 2025 (Document Engine) or 20 January 2026 (the four SDKs) collect anonymized usage metrics, while older licences can only be measured with explicit consent. An online Document Engine licence authenticates its activation key with the Nutrient Portal on first start, and an offline licence type also exists.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are the vendor\'s statements, not audit results. PromptQuorum has not inspected network traffic, the binaries or any contract terms.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from vendor pages, vendor documentation or the converter\'s repository; none has been tested here.**',
        ],
        items: [
          '**Markdown and text output.** The converter creates Markdown with headings, lists, tables and reading order, or plain text that keeps columns and spacing; Standard suits text-based PDFs, and Vision targets scans, handwriting, formulas and complex layouts.',
          '**Structured extraction.** The Data Extraction product, offered as a cloud API and as an SDK, is described as returning values with bounding boxes, match labels and confidence scores against a JSON Schema that you define, as the [Extract Studio page](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/) explains.',
          '**OCR.** Document Engine includes OCR and generates searchable PDF/A files, and Web SDK OCR requires Document Engine; the vendor\'s OCR pages give different language counts, 30+ on the [Web SDK page](https://www.nutrient.io/guides/web/ocr/) and 120+ on the [Document Engine page](https://www.nutrient.io/guides/document-engine/ocr/).',
          '**Viewing, editing and signing in your own app.** The SDKs add viewing, editing, signing, redaction and data extraction to web, mobile and server software.',
          '**MCP.** The vendor lists a hosted MCP server that needs a Nutrient account, an MCP server for a self-hosted Document Engine, and a local [Web SDK MCP server](https://www.nutrient.io/guides/web/mcp-server/) that gives coding agents access to the SDK documentation over stdio without an account; the last one does not parse documents.',
          '**Benchmarks.** The vendor\'s own WholeDoc Bench scores parsers on text, reading order, structure, tables, barcodes, charts and position, and the converter\'s README reports Nutrient results against Docling and pymupdf4llm. PromptQuorum has not reproduced any figure.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Licence and Pricing',
        content: [
          '**Nutrient is closed-source commercial software, and the price depends on the product: the SDKs are sold by quote, the cloud APIs are usage-based with a free monthly allowance, and the converter\'s Standard mode is free.**',
          'SDK licences are annual subscriptions that include access, updates and support, with multiyear terms available, and the [SDK pricing page](https://www.nutrient.io/sdk/pricing/) offers a 30-day evaluation without payment information; no list price is published. The cloud APIs are priced in US dollars per operation, page or session, and the [pricing overview](https://www.nutrient.io/pricing/) lists $5 of free usage per month with no credit card.',
          'The converter is under the proprietary [Nutrient PDF to Markdown License](https://github.com/PSPDFKit/pdf-to-markdown/blob/main/LICENSE.md): Standard conversion and the query command are free without limits, while organisations with more than 20 employees or more than USD 1,000,000 in annual gross revenue are excluded from free Vision access and must buy it. The licence also bars competitive use and requires a separate agreement to supply the engine inside products that customers operate.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Speed and accuracy.** All figures are the vendor\'s own; none were measured by PromptQuorum.',
          '**Data flow in practice.** The statements about local processing, offline use and telemetry come from vendor documents; no network traffic or binary was inspected.',
          '**Vision mode.** The converter\'s README says Vision runs locally, while its guide says Vision requires a Nutrient sign-in and is billed per page; this review does not resolve the difference.',
          '**Headquarters.** The legal page lists companies in four countries and does not name one as the headquarters.',
          '**SDK prices.** No list prices are published; quotes depend on products, platforms and deployment.',
          '**Bounding boxes.** The pages checked describe coordinates for the Data Extraction product and do not mention them for the free converter.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          {
            App: '[Docling](/power-local-llm/docling-review)',
            Platforms: 'Linux, Mac, Windows',
            'Price / license': 'Free / MIT',
            'Key difference': 'Open-source Python library that runs locally; Nutrient is closed source and mixes local and hosted products',
          },
          {
            App: '[Marker](/power-local-llm/marker-review)',
            Platforms: 'Linux, Mac, Windows',
            'Price / license': 'Freemium / Apache-2.0 code',
            'Key difference': 'Python parser whose code is Apache-2.0 but whose model weights carry commercial limits; Nutrient is proprietary throughout',
          },
          {
            App: '[MinerU](/power-local-llm/mineru-review)',
            Platforms: 'Linux, Mac, Windows',
            'Price / license': 'Free / MinerU licence',
            'Key difference': 'Source-available under Apache 2.0-based terms with thresholds; Nutrient charges by quote or by usage',
          },
          {
            App: '[OpenDataLoader PDF](/power-local-llm/opendataloader-pdf-review)',
            Platforms: 'Linux, Mac, Windows',
            'Price / license': 'Freemium / Apache-2.0',
            'Key difference': 'PDF-only open-source parser that needs Java; Nutrient adds OCR, Office input and SDKs in its paid and hosted products',
          },
          {
            App: '[Stirling PDF](/power-local-llm/stirling-pdf-review)',
            Platforms: 'Windows, Mac, Linux, self-hosted',
            'Price / license': 'Freemium / MIT with exceptions',
            'Key difference': 'Open-core PDF toolkit for desktop and self-hosting; Nutrient\'s self-hosted route, Document Engine, is commercial',
          },
        ],
        note: 'Confirm each tool\'s current price, license and platforms on its own listing before choosing. Nutrient publishes comparisons against Docling and Unstructured itself; those comparisons are the vendor\'s.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Nutrient the same as PSPDFKit?',
            a: 'The legal page lists PSPDFKit GmbH as a company doing business as Nutrient, and PSPDFKit still appears in the converter\'s package name and GitHub organisation; the sources checked do not describe the renaming itself.',
          },
          {
            q: 'Can I use the converter in a commercial product?',
            a: 'Standard conversion is free for organisations of every size under the licence, including inside your own applications and hosted services, provided the use does not compete with Nutrient\'s commercial offerings; supplying the engine to customers in products they operate needs a separate agreement.',
          },
          {
            q: 'Do I need a Nutrient account to try it?',
            a: 'Not for the converter\'s Standard mode, which needs no account. The macOS app and Vision mode need a sign-in, and the SDKs offer a 30-day evaluation.',
          },
          {
            q: 'How often do the SDKs get updates?',
            a: 'The changelogs show November 2026 releases for most SDKs, while the newest entries for Node.js, Flutter and React Native are from February, August and August 2026.',
          },
          {
            q: 'Can I use the converter inside a coding agent?',
            a: 'The README describes plugins for Claude Code, Codex and other agent tools that install the same binary, so an agent can read a PDF while you work.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Nutrient is a maintained, closed-source PDF platform whose converter has a free Standard mode for text-based PDFs, while scans, the macOS app, the Data Extraction API, the SDKs and Document Engine are paid or account-bound. Against that, its benchmarks are its own, its data-flow statements are untested here, its converter licence is proprietary, and its legal page names no single headquarters. It suits teams that already license PDF SDKs or want a vendor-supported parser; for open-source local parsing, compare [Docling](/power-local-llm/docling-review) or [Marker](/power-local-llm/marker-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Nutrient SDK page](https://www.nutrient.io/sdk/) — platforms and product overview, checked 17 November 2026.',
          '[Pricing](https://www.nutrient.io/pricing/) and [SDK pricing](https://www.nutrient.io/sdk/pricing/) — licensing model, free allowance and evaluation, checked 17 November 2026.',
          '[Legal page](https://www.nutrient.io/legal/impressum/) and [privacy policy](https://www.nutrient.io/legal/privacy/) — companies, data retention and usage metrics, checked 17 November 2026.',
          '[Web SDK changelog](https://www.nutrient.io/guides/web/changelog/) and the changelogs of the other SDKs, for example the [Java SDK changelog](https://www.nutrient.io/guides/java/changelog/) — versions and release dates, checked 17 November 2026.',
          '[PDF-to-Markdown converter guide](https://www.nutrient.io/guides/dws-pdf-to-markdown/) and its [GitHub repository](https://github.com/PSPDFKit/pdf-to-markdown) — modes, install, data handling and licence, checked 17 November 2026.',
          '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/) — the macOS app and the Data Extraction features, checked 17 November 2026.',
          '[OCR in Web SDK](https://www.nutrient.io/guides/web/ocr/) and [OCR in Document Engine](https://www.nutrient.io/guides/document-engine/ocr/) — OCR scope and languages, checked 17 November 2026.',
          '[Nutrient llms.txt](https://www.nutrient.io/llms.txt) — the vendor\'s product overview, used for Data Extraction input types, MCP servers and the vendor\'s own comparisons, checked 17 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Docling Review](/power-local-llm/docling-review) — an open-source document parser from IBM Research.',
          '[Marker Review](/power-local-llm/marker-review) — a PDF-to-Markdown parser with a hosted option.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Nutrient Review: Commercial PDF SDK With a Markdown Converter',
      description: 'Nutrient review: commercial PDF SDKs, cloud APIs and a PDF-to-Markdown CLI with a free Standard mode. Data flow, pricing as published, vendor benchmarks and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/nutrient-review',
      inLanguage: 'en',
      datePublished: '2026-11-17',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'Developers evaluating a commercial PDF toolkit next to open-source parsers for RAG and LLM pipelines',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Nutrient',
        },
        {
          '@type': 'Thing',
          name: 'PDF parsing',
        },
        {
          '@type': 'Thing',
          name: 'Retrieval-augmented generation',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/power-local-llm/nutrient-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Nutrient Review',
          item: 'https://www.promptquorum.com/power-local-llm/nutrient-review',
        },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'RAG & Document Chat',
    heroImage: '/images/nutrient-review-hero-de.webp',
    title: 'Nutrient Rezension: Kommerzielles PDF-SDK mit Markdown-Konverter',
    seoTitle: 'Nutrient Rezension: PDF-SDK, Cloud-APIs und Markdown-CLI',
    intro: 'Nutrient ist ein kommerzieller Anbieter von PDF-Software: lizenzierte SDKs für Web, Mobilgeräte und Server, eine selbst gehostete Document Engine, nutzungsbasierte Cloud-APIs und ein Kommandozeilenwerkzeug, das PDFs in Markdown umwandelt und im Standard-Modus kostenlos ist. Es ist keine einzelne App und nicht quelloffen. Diese Rezension stützt sich auf Website, Dokumentation, Changelogs und Datenschutzerklärung des Anbieters sowie auf das GitHub-Repository des Konverters, geprüft am 17. November 2026; PromptQuorum hat kein Nutrient-Produkt installiert oder ausgeführt.',
    metaDescription: 'Nutrient im Test: kommerzielle PDF-SDKs und Cloud-APIs plus Markdown-CLI mit kostenlosem Standard-Modus. Was lokal bleibt, Preise und was offenbleibt.',
    twitterDescription: 'Nutrient-Rezension: PDF-SDKs auf Anfrage, gehostete APIs und eine PDF-zu-Markdown-CLI mit kostenlosem Standard-Modus. Datenfluss, Preise und was die Herstellerquellen offenlassen.',
    audience: 'Entwickler und Teams, die PDF- oder RAG-Pipelines bauen und wissen möchten, was Nutrient neben quelloffenen Parsern bietet, was auf dem eigenen Rechner bleibt und welche Aussagen vom Hersteller stammen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'Nutrient Rezension',
    targetKeywords: [
      'nutrient rezension',
      'nutrient pdf sdk',
      'nutrient pdf to markdown cli',
      'nutrient document engine',
      'nutrient vs docling',
      'pdf parser für rag',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Nutrient ist eine kommerzielle PDF-Plattform und keine einzelne App: lizenzierte SDKs, gehostete APIs und ein Kommandozeilen-Konverter können PDFs in Markdown oder JSON für RAG umwandeln, und nur der Standard-Modus des Konverters ist kostenlos.** Der geschlossene Quellcode und die Lizenzierung auf Anfrage unterscheiden es von den quelloffenen Parsern dieser Kategorie.',
    quickAnswerTop: {
      de: {
        question: 'Kann Nutrient meine PDFs verarbeiten, ohne sie an eine Cloud zu senden?',
        answer: 'Teilweise. Laut Hersteller behält die PDF-zu-Markdown-CLI die Dokumente auf Ihrem Computer, und die Standard-Konvertierung funktioniert bei textbasierten PDFs offline; eine macOS-App führt die Extraktions-Engine auf Ihrem Mac aus. Für Scans braucht die CLI den Vision-Modus, der eine Nutrient-Anmeldung voraussetzt. Die gehosteten APIs laufen auf den Servern von Nutrient. Das sind Aussagen des Herstellers; PromptQuorum hat sie weder getestet noch den Netzwerkverkehr geprüft.',
        bullets: [
          'Eingabe: Die CLI liest PDFs; die Cloud-Data-Extraction-API liest laut Hersteller auch Scans, Bilder und Office-Dateien.',
          'Ausgabe: Markdown oder Klartext aus der CLI; strukturiertes JSON aus der Data Extraction API.',
          'Lizenz: geschlossener Quellcode; die CLI steht unter einer proprietären Lizenz, die SDKs werden auf Anfrage lizenziert.',
        ],
        updatedDate: '2026-11-17',
      },
    },
    toc: [
      {
        label: 'Kurzantwort',
        anchor: 'quick-answer',
      },
      {
        label: 'Was ist Nutrient?',
        anchor: 'what-is-nutrient',
      },
      {
        label: 'Bezugsquelle',
        anchor: 'get-it',
      },
      {
        label: 'Lokaler, selbst gehosteter und Cloud-Datenfluss',
        anchor: 'privacy',
      },
      {
        label: 'Von den Quellen bestätigte Funktionen',
        anchor: 'key-features',
      },
      {
        label: 'Lizenz und Preis',
        anchor: 'pricing',
      },
      {
        label: 'Was wir nicht überprüfen konnten',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Wettbewerber und Alternativen',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Häufig gestellte Fragen',
        anchor: 'faq',
      },
      {
        label: 'Fazit',
        anchor: 'verdict',
      },
      {
        label: 'Quellen',
        anchor: 'sources',
      },
      {
        label: 'Weiterführende Artikel',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Nutrient verkauft PDF-Software für Entwickler, von SDKs, die einer App Anzeigen, Bearbeiten und Signieren hinzufügen, bis zu einem Konverter mit kostenlosem Standard-Modus, der PDFs für Sprachmodelle in Markdown umwandelt.',
          },
          {
            type: 'plain-terms',
            text: 'Sie lizenzieren entweder ein SDK oder die Document Engine und bauen sie in eigene Software ein, rufen die gehosteten APIs von Nutrient auf oder installieren den Konverter und führen ihn auf Ihrem Computer aus.',
          },
        ],
        items: [
          'Pflege: Die neuesten SDK-Releases, .NET 14.4.12, Java 2.1.14 und Python 1.0.14, stammen vom 15. November 2026; eine Warnung vor einem veralteten Projekt entfällt daher.',
          'Umfang: drei Produktfamilien, SDKs mit Document Engine, Cloud-APIs und ein Kommandozeilen-Konverter; prüfen Sie daher, auf welche sich eine Aussage bezieht.',
          'Überschneidung mit quelloffenen Parsern: der PDF-zu-Markdown-Konverter und die Data Extraction API; die SDKs ergänzen Apps um Anzeigen, Bearbeiten, Signieren und Schwärzen.',
          'Kosten: drei Preismodelle, vom kostenlosen Konverter-Modus bis zu SDK-Lizenzen nur auf Anfrage; siehe Lizenz und Preis.',
          'Nicht überprüft: Geschwindigkeits- und Genauigkeitsangaben sind die eigenen Benchmarks des Herstellers, und PromptQuorum hat kein Nutrient-Produkt ausgeführt.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Alle Angaben stammen von Seiten des Herstellers und aus dem Repository des Konverters. PromptQuorum hat Nutrient nicht getestet; Geschwindigkeit, Genauigkeit und Speicherbedarf werden hier daher nicht bewertet.',
          },
        ],
      },
      overview: {
        id: 'what-is-nutrient',
        title: 'Was ist Nutrient?',
        content: [
          '**Nutrient verkauft Software zum Anzeigen, Bearbeiten, Signieren, Schwärzen, für OCR und Datenextraktion in PDFs, in drei Formen: lizenzierte SDKs mit einer selbst gehosteten Document Engine, nutzungsbasierte Cloud-APIs und ein Kommandozeilen-Konverter mit kostenlosem Standard-Modus.** Laut der [SDK-Seite](https://www.nutrient.io/sdk/) des Herstellers laufen die SDKs auf Web, iOS, Android, Flutter, React Native, MAUI, .NET, Python, Java und Node.js.',
          'Der Name PSPDFKit taucht weiterhin auf der [Rechtsseite](https://www.nutrient.io/legal/impressum/) des Herstellers, im npm-Paketnamen des Konverters und in dessen GitHub-Organisation auf. Die Rechtsseite führt mehrere Unternehmen auf, die als Nutrient auftreten, mit Adressen in den USA, Österreich, Frankreich und im Vereinigten Königreich; die Quellen nennen nicht, welches davon der Hauptsitz ist.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Bezugsquelle',
        content: [
          '**Nutrient hat keinen einheitlichen Installer: Der einfachste Weg ist die macOS-App für Apple Silicon, alle anderen Wege brauchen ein Terminal oder eine Entwicklungsumgebung.**',
        ],
        columns: ['Option', 'Bezug'],
        rows: [
          {
            Option: 'macOS-App (Apple Silicon)',
            Bezug: '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/), ein DMG-Installer für macOS Tahoe 26.4 oder neuer; Anmeldung mit einem kostenlosen Nutrient-Konto; die Extraktion braucht ein KI-Modell, das Sie anbinden',
          },
          {
            Option: 'Konverter (npm)',
            Bezug: '`npm install -g @pspdfkit/pdf-to-markdown`, laut [README](https://github.com/PSPDFKit/pdf-to-markdown); erfordert Node 18 oder neuer unter macOS 13+ (Apple Silicon), Linux (glibc 2.38+) oder Windows (Git Bash)',
          },
          {
            Option: 'Cloud-APIs',
            Bezug: 'Nutrient-Konto anlegen und die gehosteten APIs aufrufen, laut [API-Übersicht](https://www.nutrient.io/api/)',
          },
          {
            Option: 'SDKs',
            Bezug: 'Installation per Paketmanager je Plattform mit Lizenzschlüssel, zum Beispiel `@nutrient-sdk/viewer` auf npm für Web; siehe [SDK-Seite](https://www.nutrient.io/sdk/)',
          },
          {
            Option: 'Document Engine',
            Bezug: 'Ein kommerzieller Container, der mit einem Aktivierungsschlüssel gestartet wird, laut [Anleitung zur Produktaktivierung](https://www.nutrient.io/guides/document-engine/deployment/product-activation/)',
          },
          {
            Option: 'Website',
            Bezug: '[nutrient.io](https://www.nutrient.io)',
          },
          {
            Option: 'Datenschutzerklärung',
            Bezug: '[Datenschutzerklärung](https://www.nutrient.io/legal/privacy/)',
          },
          {
            Option: 'Quellcode',
            Bezug: 'Die SDKs sind nicht quelloffen; nur Wrapper und Dokumentation des Konverters liegen auf [GitHub](https://github.com/PSPDFKit/pdf-to-markdown)',
          },
        ],
        note: 'Neueste geprüfte Releases am 17. November 2026: Web SDK 1.25.0 (2. November 2026), Document Engine 1.20.0 (29. Oktober 2026), .NET SDK 14.4.12, Java SDK 2.1.14 und Python SDK 1.0.14 (alle 15. November 2026), iOS 27.2.0 (11. November 2026) und Android 12.1.0 (10. November 2026), aus dem [Web-SDK-Changelog](https://www.nutrient.io/guides/web/changelog/) und den Changelogs der übrigen SDKs. Die neueste npm-Version des Konverters ist 0.6.0 (28. September 2026). Das letzte Update des Projekts ist vom 15. November 2026. Für jeden Weg außer der macOS-App sind ein Terminal oder eine Entwicklungsumgebung erforderlich.',
      },
      privacy: {
        id: 'privacy',
        title: 'Lokaler, selbst gehosteter und Cloud-Datenfluss',
        content: [
          '**Was auf Ihrem Rechner bleibt, hängt vom Produkt ab: Laut Hersteller behält der Konverter die Dokumente auf Ihrem Computer, während die gehosteten APIs Dateien auf den Servern von Nutrient verarbeiten.** Die [Konverter-Anleitung](https://www.nutrient.io/guides/dws-pdf-to-markdown/) nennt, dass Nutzungsdaten wie Konvertierungsmodus und Seitenzahl gemeldet werden, nicht aber Dateinamen, Pfade, Inhalte oder Ausgaben, und dass die Standard-Konvertierung offline funktioniert, solange Sie keinen API-Schlüssel verwenden.',
          'Zur macOS-App sagt der Hersteller, Dokumente verließen den Mac nicht, wenn das KI-Modell ebenfalls auf dem Mac läuft; ein angebundener OpenAI- oder Anthropic-Schlüssel sendet Dokumentinhalte an den jeweiligen Anbieter, und Nutrient erhält Nutzungsdaten für die Abrechnung.',
          'Für die gehostete Processor API gibt die [Datenschutzerklärung](https://www.nutrient.io/legal/privacy/) an, dass hochgeladene Dateien bei Tarifen ohne Datenspeicherung innerhalb von 24 Stunden gelöscht werden. Bei Tarifen mit aktivierter Datenspeicherung behält Nutrient laut Erklärung übermittelte Dateien und Ausgaben und nutzt sie zur Verbesserung seiner Dienste, einschließlich Training und Bewertung von Modellen des maschinellen Lernens. Prüfen Sie, welchen Tarif Sie nutzen, bevor Sie sensible Dokumente senden.',
          'Für die selbst gehostete Document Engine sowie die Web-, .NET-, Python- und Java-SDKs besagt die Erklärung: Lizenzen, die nach dem 18. März 2025 (Document Engine) beziehungsweise nach dem 20. Januar 2026 (die vier SDKs) ausgestellt wurden, erheben anonymisierte Nutzungsmetriken, ältere Lizenzen nur mit ausdrücklicher Einwilligung. Eine Online-Lizenz der Document Engine authentifiziert ihren Aktivierungsschlüssel beim ersten Start im Nutrient Portal; es gibt auch einen Offline-Lizenztyp.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das sind Aussagen des Herstellers, keine Prüfergebnisse. PromptQuorum hat weder Netzwerkverkehr noch die Binärdateien oder Vertragsbedingungen geprüft.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt von Herstellerseiten, Herstellerdokumentation oder dem Repository des Konverters; keiner wurde hier getestet.**',
        ],
        items: [
          '**Markdown- und Textausgabe.** Der Konverter erzeugt Markdown mit Überschriften, Listen, Tabellen und Lesereihenfolge oder Klartext, der Spalten und Abstände beibehält; Standard eignet sich für textbasierte PDFs, Vision für Scans, Handschrift, Formeln und komplexe Layouts.',
          '**Strukturierte Extraktion.** Das Data-Extraction-Produkt, angeboten als Cloud-API und als SDK, liefert laut Beschreibung Werte mit Bounding-Boxen, Treffer-Labels und Konfidenzwerten zu einem von Ihnen definierten JSON-Schema, wie die [Extract-Studio-Seite](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/) erklärt.',
          '**OCR.** Die Document Engine enthält OCR und erzeugt durchsuchbare PDF/A-Dateien, und OCR im Web SDK setzt die Document Engine voraus; die OCR-Seiten des Herstellers nennen unterschiedliche Sprachzahlen, 30+ auf der [Web-SDK-Seite](https://www.nutrient.io/guides/web/ocr/) und 120+ auf der [Document-Engine-Seite](https://www.nutrient.io/guides/document-engine/ocr/).',
          '**Anzeigen, Bearbeiten und Signieren in der eigenen App.** Die SDKs ergänzen Web-, Mobil- und Serversoftware um Anzeigen, Bearbeiten, Signieren, Schwärzen und Datenextraktion.',
          '**MCP.** Der Hersteller führt einen gehosteten MCP-Server auf, der ein Nutrient-Konto erfordert, einen MCP-Server für eine selbst gehostete Document Engine und einen lokalen [Web-SDK-MCP-Server](https://www.nutrient.io/guides/web/mcp-server/), der Coding-Agenten per stdio ohne Konto Zugriff auf die SDK-Dokumentation gibt; Letzterer parst keine Dokumente.',
          '**Benchmarks.** Der herstellereigene WholeDoc Bench bewertet Parser nach Text, Lesereihenfolge, Struktur, Tabellen, Barcodes, Diagrammen und Position, und die README des Konverters nennt Nutrient-Ergebnisse im Vergleich zu Docling und pymupdf4llm. PromptQuorum hat keine der Zahlen nachgemessen.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Lizenz und Preis',
        content: [
          '**Nutrient ist proprietäre kommerzielle Software, und der Preis hängt vom Produkt ab: Die SDKs werden auf Anfrage verkauft, die Cloud-APIs nutzungsbasiert mit monatlichem Gratiskontingent abgerechnet, und der Standard-Modus des Konverters ist kostenlos.**',
          'SDK-Lizenzen sind Jahresabonnements mit Zugang, Updates und Support, mehrjährige Laufzeiten sind möglich, und die [SDK-Preisseite](https://www.nutrient.io/sdk/pricing/) bietet eine 30-tägige Evaluierung ohne Zahlungsangaben; einen Listenpreis gibt es nicht. Die Cloud-APIs werden in US-Dollar pro Vorgang, Seite oder Sitzung abgerechnet, und die [Preisübersicht](https://www.nutrient.io/pricing/) nennt ein Gratisguthaben von 5 US-Dollar pro Monat ohne Kreditkarte.',
          'Der Konverter steht unter der proprietären [Nutrient PDF to Markdown License](https://github.com/PSPDFKit/pdf-to-markdown/blob/main/LICENSE.md): Die Standard-Konvertierung und der Befehl query sind unbegrenzt kostenlos, während Organisationen mit mehr als 20 Beschäftigten oder mehr als 1.000.000 US-Dollar Jahresumsatz vom kostenlosen Vision-Zugang ausgeschlossen sind und ihn kaufen müssen. Die Lizenz untersagt außerdem wettbewerbliche Nutzung und verlangt eine gesonderte Vereinbarung, wenn die Engine in Produkten geliefert wird, die Kunden selbst betreiben.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Geschwindigkeit und Genauigkeit.** Alle Zahlen stammen vom Hersteller; PromptQuorum hat keine davon gemessen.',
          '**Datenfluss in der Praxis.** Die Aussagen zu lokaler Verarbeitung, Offline-Betrieb und Telemetrie stammen aus Herstellerdokumenten; Netzwerkverkehr und Binärdateien wurden nicht geprüft.',
          '**Vision-Modus.** Die README des Konverters sagt, Vision laufe lokal, während die Anleitung eine Nutrient-Anmeldung und seitenweise Abrechnung nennt; diese Rezension löst den Unterschied nicht auf.',
          '**Hauptsitz.** Die Rechtsseite führt Unternehmen in vier Ländern auf und nennt keines als Hauptsitz.',
          '**SDK-Preise.** Es gibt keine Listenpreise; Angebote hängen von Produkten, Plattformen und Bereitstellung ab.',
          '**Bounding-Boxen.** Die geprüften Seiten beschreiben Koordinaten für das Data-Extraction-Produkt und erwähnen sie nicht für den kostenlosen Konverter.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          {
            App: '[Docling](/de/power-local-llm/docling-review)',
            Plattformen: 'Linux, Mac, Windows',
            'Preis / Lizenz': 'Kostenlos / MIT',
            Hauptunterschied: 'Quelloffene Python-Bibliothek, die lokal läuft; Nutrient ist nicht quelloffen und mischt lokale und gehostete Produkte',
          },
          {
            App: '[Marker](/de/power-local-llm/marker-review)',
            Plattformen: 'Linux, Mac, Windows',
            'Preis / Lizenz': 'Freemium / Apache-2.0-Code',
            Hauptunterschied: 'Python-Parser, dessen Code unter Apache-2.0 steht, dessen Modellgewichte aber kommerzielle Einschränkungen haben; Nutrient ist durchgehend proprietär',
          },
          {
            App: '[MinerU](/de/power-local-llm/mineru-review)',
            Plattformen: 'Linux, Mac, Windows',
            'Preis / Lizenz': 'Kostenlos / MinerU-Lizenz',
            Hauptunterschied: 'Quellcode einsehbar unter Bedingungen auf Basis von Apache 2.0 mit Schwellenwerten; Nutrient rechnet auf Anfrage oder nach Nutzung ab',
          },
          {
            App: '[OpenDataLoader PDF](/de/power-local-llm/opendataloader-pdf-review)',
            Plattformen: 'Linux, Mac, Windows',
            'Preis / Lizenz': 'Freemium / Apache-2.0',
            Hauptunterschied: 'Quelloffener Parser nur für PDF, der Java braucht; Nutrient ergänzt OCR, Office-Eingabe und SDKs in kostenpflichtigen und gehosteten Produkten',
          },
          {
            App: '[Stirling PDF](/de/power-local-llm/stirling-pdf-review)',
            Plattformen: 'Windows, Mac, Linux, selbst gehostet',
            'Preis / Lizenz': 'Freemium / MIT mit Ausnahmen',
            Hauptunterschied: 'Open-Core-PDF-Werkzeug für Desktop und Selbsthosting; Nutrients selbst gehosteter Weg, die Document Engine, ist kommerziell',
          },
        ],
        note: 'Prüfen Sie Preis, Lizenz und Plattformen jedes Tools vor der Wahl in dessen eigenem Eintrag. Nutrient veröffentlicht Vergleiche mit Docling und Unstructured selbst; diese Vergleiche stammen vom Hersteller.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Nutrient dasselbe wie PSPDFKit?',
            a: 'Die Rechtsseite führt die PSPDFKit GmbH als Unternehmen auf, das als Nutrient auftritt, und PSPDFKit steht weiterhin im Paketnamen und in der GitHub-Organisation des Konverters; die geprüften Quellen beschreiben die Umbenennung selbst nicht.',
          },
          {
            q: 'Darf ich den Konverter in einem kommerziellen Produkt einsetzen?',
            a: 'Die Standard-Konvertierung ist laut Lizenz für Organisationen jeder Größe kostenlos, auch in eigenen Anwendungen und gehosteten Diensten, sofern die Nutzung nicht mit den kommerziellen Angeboten von Nutrient konkurriert; die Lieferung der Engine an Kunden in Produkten, die diese betreiben, erfordert eine gesonderte Vereinbarung.',
          },
          {
            q: 'Brauche ich ein Nutrient-Konto zum Ausprobieren?',
            a: 'Nicht für den Standard-Modus des Konverters, der kein Konto braucht. Die macOS-App und der Vision-Modus erfordern eine Anmeldung, und die SDKs bieten eine 30-tägige Evaluierung.',
          },
          {
            q: 'Wie oft erhalten die SDKs Updates?',
            a: 'Die Changelogs zeigen Releases im November 2026 für die meisten SDKs, während die neuesten Einträge für Node.js, Flutter und React Native vom Februar, August und August 2026 stammen.',
          },
          {
            q: 'Kann ich den Konverter in einem Coding-Agenten verwenden?',
            a: 'Die README beschreibt Plugins für Claude Code, Codex und andere Agenten-Werkzeuge, die dieselbe Binärdatei installieren, sodass ein Agent während der Arbeit ein PDF lesen kann.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: 'Nutrient ist eine gepflegte, nicht quelloffene PDF-Plattform, deren Konverter einen kostenlosen Standard-Modus für textbasierte PDFs bietet, während Scans, die macOS-App, die Data Extraction API, die SDKs und die Document Engine kostenpflichtig oder kontogebunden sind. Dagegen sprechen eigene Benchmarks des Herstellers, hier ungeprüfte Aussagen zum Datenfluss, eine proprietäre Konverter-Lizenz und eine Rechtsseite ohne eindeutigen Hauptsitz. Es passt zu Teams, die bereits PDF-SDKs lizenzieren oder einen vom Hersteller unterstützten Parser wollen; für quelloffenes lokales Parsing vergleichen Sie [Docling](/de/power-local-llm/docling-review) oder [Marker](/de/power-local-llm/marker-review).',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Nutrient-SDK-Seite](https://www.nutrient.io/sdk/) — Plattformen und Produktübersicht, geprüft am 17. November 2026.',
          '[Preise](https://www.nutrient.io/pricing/) und [SDK-Preise](https://www.nutrient.io/sdk/pricing/) — Lizenzmodell, Gratiskontingent und Evaluierung, geprüft am 17. November 2026.',
          '[Rechtsseite](https://www.nutrient.io/legal/impressum/) und [Datenschutzerklärung](https://www.nutrient.io/legal/privacy/) — Unternehmen, Datenspeicherung und Nutzungsmetriken, geprüft am 17. November 2026.',
          '[Web-SDK-Changelog](https://www.nutrient.io/guides/web/changelog/) und die Changelogs der übrigen SDKs, etwa der [Java-SDK-Changelog](https://www.nutrient.io/guides/java/changelog/) — Versionen und Release-Daten, geprüft am 17. November 2026.',
          '[Anleitung zum PDF-zu-Markdown-Konverter](https://www.nutrient.io/guides/dws-pdf-to-markdown/) und sein [GitHub-Repository](https://github.com/PSPDFKit/pdf-to-markdown) — Modi, Installation, Datenverarbeitung und Lizenz, geprüft am 17. November 2026.',
          '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/) — die macOS-App und die Data-Extraction-Funktionen, geprüft am 17. November 2026.',
          '[OCR im Web SDK](https://www.nutrient.io/guides/web/ocr/) und [OCR in der Document Engine](https://www.nutrient.io/guides/document-engine/ocr/) — OCR-Umfang und Sprachen, geprüft am 17. November 2026.',
          '[Nutrient llms.txt](https://www.nutrient.io/llms.txt) — Produktübersicht des Herstellers, genutzt für Eingabetypen der Data Extraction, MCP-Server und die eigenen Vergleiche des Herstellers, geprüft am 17. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Docling-Rezension](/de/power-local-llm/docling-review) — ein quelloffener Dokumenten-Parser von IBM Research.',
          '[Marker-Rezension](/de/power-local-llm/marker-review) — ein PDF-zu-Markdown-Parser mit gehosteter Option.',
          '[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Werkzeuge.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Nutrient Rezension: Kommerzielles PDF-SDK mit Markdown-Konverter',
      description: 'Nutrient-Rezension: kommerzielle PDF-SDKs, Cloud-APIs und eine PDF-zu-Markdown-CLI mit kostenlosem Standard-Modus. Datenfluss, veröffentlichte Preise, Herstellerbenchmarks und was die Quellen unbestätigt lassen.',
      url: 'https://www.promptquorum.com/de/power-local-llm/nutrient-review',
      inLanguage: 'de',
      datePublished: '2026-11-17',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'Entwickler, die ein kommerzielles PDF-Toolkit neben quelloffenen Parsern für RAG- und LLM-Pipelines bewerten',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Nutrient',
        },
        {
          '@type': 'Thing',
          name: 'PDF-Parsing',
        },
        {
          '@type': 'Thing',
          name: 'Retrieval-Augmented Generation',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/de/power-local-llm/nutrient-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Startseite',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/de/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Nutrient-Rezension',
          item: 'https://www.promptquorum.com/de/power-local-llm/nutrient-review',
        },
      ],
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'RAG & Document Chat',
    heroImage: '/images/nutrient-review-hero-fr.webp',
    title: 'Test de Nutrient : SDK PDF commercial et convertisseur Markdown',
    seoTitle: 'Test de Nutrient : SDK PDF, API cloud et CLI Markdown',
    intro: 'Nutrient est un éditeur commercial de logiciels PDF : des SDK sous licence pour le web, le mobile et les serveurs, un Document Engine auto-hébergé, des API cloud facturées à l’usage et un outil en ligne de commande qui convertit les PDF en Markdown, gratuit dans son mode Standard. Ce n’est ni une application unique ni un logiciel open source. Ce test s’appuie sur le site, la documentation, les journaux de modifications et la politique de confidentialité de l’éditeur, ainsi que sur le dépôt GitHub du convertisseur, consultés le 17 novembre 2026 ; PromptQuorum n’a installé ni exécuté aucun produit Nutrient.',
    metaDescription: 'Test de Nutrient : SDK PDF et API cloud commerciaux, CLI PDF vers Markdown à mode Standard gratuit. Ce qui reste en local, tarifs et zones d’ombre.',
    twitterDescription: 'Test de Nutrient : SDK PDF sur devis, API hébergées et CLI PDF vers Markdown au mode Standard gratuit. Flux de données, tarifs et ce que les sources laissent ouvert.',
    audience: 'Développeurs et équipes qui construisent des pipelines PDF ou RAG et veulent savoir ce que Nutrient propose face aux analyseurs open source, ce qui reste sur leur machine et quelles affirmations viennent de l’éditeur.',
    readTime: '7 min de lecture',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'test Nutrient',
    targetKeywords: [
      'test nutrient',
      'nutrient sdk pdf',
      'nutrient pdf to markdown cli',
      'nutrient document engine',
      'nutrient vs docling',
      'analyseur pdf pour rag',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Nutrient est une plateforme PDF commerciale, pas une application unique : des SDK sous licence, des API hébergées et un convertisseur en ligne de commande peuvent tous transformer des PDF en Markdown ou en JSON pour le RAG, et seul le mode Standard du convertisseur est gratuit.** Son code fermé et ses licences sur devis le distinguent des analyseurs open source de cette catégorie.',
    quickAnswerTop: {
      fr: {
        question: 'Nutrient peut-il traiter mes PDF sans les envoyer vers un cloud ?',
        answer: 'En partie. L’éditeur indique que sa CLI PDF vers Markdown garde les documents sur votre ordinateur et que la conversion Standard fonctionne hors ligne sur les PDF avec couche de texte, et qu’une application macOS exécute le moteur d’extraction sur votre Mac. Pour les scans, la CLI exige le mode Vision, qui demande une connexion à un compte Nutrient. Les API hébergées tournent sur les serveurs de Nutrient. Ce sont des déclarations de l’éditeur ; PromptQuorum ne les a ni testées ni vérifiées par une analyse du trafic réseau.',
        bullets: [
          'Entrée : la CLI lit les PDF ; l’API cloud Data Extraction lit aussi, selon l’éditeur, les scans, les images et les fichiers Office.',
          'Sortie : Markdown ou texte brut depuis la CLI ; JSON structuré depuis l’API Data Extraction.',
          'Licence : code fermé ; la CLI relève d’une licence propriétaire et les SDK sont concédés sur devis.',
        ],
        updatedDate: '2026-11-17',
      },
    },
    toc: [
      {
        label: 'Réponse rapide',
        anchor: 'quick-answer',
      },
      {
        label: 'Qu’est-ce que Nutrient ?',
        anchor: 'what-is-nutrient',
      },
      {
        label: 'Où l’obtenir',
        anchor: 'get-it',
      },
      {
        label: 'Flux de données local, auto-hébergé et cloud',
        anchor: 'privacy',
      },
      {
        label: 'Fonctions confirmées par les sources',
        anchor: 'key-features',
      },
      {
        label: 'Licence et prix',
        anchor: 'pricing',
      },
      {
        label: 'Ce que nous n’avons pas pu vérifier',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concurrents et alternatives',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Questions fréquentes',
        anchor: 'faq',
      },
      {
        label: 'Verdict',
        anchor: 'verdict',
      },
      {
        label: 'Sources',
        anchor: 'sources',
      },
      {
        label: 'À lire aussi',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Nutrient vend des logiciels PDF pour développeurs, des SDK qui ajoutent affichage, édition et signature à une application jusqu’à un convertisseur au mode Standard gratuit qui transforme les PDF en Markdown pour les modèles de langage.',
          },
          {
            type: 'plain-terms',
            text: 'Vous concédez en licence un SDK ou le Document Engine et l’intégrez à votre propre logiciel, vous appelez les API hébergées de Nutrient, ou vous installez le convertisseur et l’exécutez sur votre ordinateur.',
          },
        ],
        items: [
          'Maintenance : les versions les plus récentes des SDK, .NET 14.4.12, Java 2.1.14 et Python 1.0.14, datent du 15 novembre 2026 ; aucun avertissement de projet inactif ne s’applique.',
          'Périmètre : trois familles de produits, SDK avec Document Engine, API cloud et convertisseur en ligne de commande ; vérifiez donc à laquelle se rapporte chaque affirmation.',
          'Recoupement avec les analyseurs open source : le convertisseur PDF vers Markdown et l’API Data Extraction ; les SDK ajoutent affichage, édition, signature et caviardage aux applications.',
          'Coût : trois modèles de prix, du mode gratuit du convertisseur aux licences de SDK sur devis uniquement ; voir Licence et prix.',
          'Non vérifié : les chiffres de vitesse et de précision sont les benchmarks de l’éditeur, et PromptQuorum n’a exécuté aucun produit Nutrient.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Toutes les informations proviennent des pages de l’éditeur et du dépôt du convertisseur. PromptQuorum n’a pas testé Nutrient : la vitesse, la précision et l’utilisation de la mémoire ne sont donc pas évaluées ici.',
          },
        ],
      },
      overview: {
        id: 'what-is-nutrient',
        title: 'Qu’est-ce que Nutrient ?',
        content: [
          '**Nutrient vend des logiciels d’affichage, d’édition, de signature, de caviardage, d’OCR et d’extraction de données pour les PDF, sous trois formes : des SDK sous licence avec un Document Engine auto-hébergé, des API cloud facturées à l’usage et un convertisseur en ligne de commande au mode Standard gratuit.** D’après la [page SDK](https://www.nutrient.io/sdk/) de l’éditeur, les SDK fonctionnent sur Web, iOS, Android, Flutter, React Native, MAUI, .NET, Python, Java et Node.js.',
          'Le nom PSPDFKit apparaît toujours sur la [page légale](https://www.nutrient.io/legal/impressum/) de l’éditeur, dans le nom du paquet npm du convertisseur et dans son organisation GitHub. La page légale énumère plusieurs sociétés exerçant sous le nom Nutrient, avec des adresses aux États-Unis, en Autriche, en France et au Royaume-Uni ; les sources n’indiquent pas laquelle est le siège.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Où l’obtenir',
        content: [
          '**Nutrient n’a pas d’installateur unique : la voie la plus simple est l’application macOS pour Apple silicon, et toutes les autres exigent un terminal ou un environnement de développement.**',
        ],
        columns: ['Option', 'Comment l’obtenir'],
        rows: [
          {
            Option: 'Application macOS (Apple silicon)',
            'Comment l’obtenir': '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/), un installateur DMG pour macOS Tahoe 26.4 ou plus récent ; connexion avec un compte Nutrient gratuit ; l’extraction exige un modèle d’IA que vous connectez',
          },
          {
            Option: 'Convertisseur (npm)',
            'Comment l’obtenir': '`npm install -g @pspdfkit/pdf-to-markdown`, selon le [README](https://github.com/PSPDFKit/pdf-to-markdown) ; exige Node 18 ou plus récent sous macOS 13+ (Apple silicon), Linux (glibc 2.38+) ou Windows (Git Bash)',
          },
          {
            Option: 'API cloud',
            'Comment l’obtenir': 'Créez un compte Nutrient et appelez les API hébergées, selon la [présentation des API](https://www.nutrient.io/api/)',
          },
          {
            Option: 'SDK',
            'Comment l’obtenir': 'Installation par gestionnaire de paquets selon la plateforme, avec une clé de licence, par exemple `@nutrient-sdk/viewer` sur npm pour le Web ; voir la [page SDK](https://www.nutrient.io/sdk/)',
          },
          {
            Option: 'Document Engine',
            'Comment l’obtenir': 'Un conteneur commercial démarré avec une clé d’activation, selon le [guide d’activation du produit](https://www.nutrient.io/guides/document-engine/deployment/product-activation/)',
          },
          {
            Option: 'Site web',
            'Comment l’obtenir': '[nutrient.io](https://www.nutrient.io)',
          },
          {
            Option: 'Politique de confidentialité',
            'Comment l’obtenir': '[Politique de confidentialité](https://www.nutrient.io/legal/privacy/)',
          },
          {
            Option: 'Code source',
            'Comment l’obtenir': 'Les SDK sont à code fermé ; seuls l’enveloppe et la documentation du convertisseur sont sur [GitHub](https://github.com/PSPDFKit/pdf-to-markdown)',
          },
        ],
        note: 'Versions les plus récentes vérifiées le 17 novembre 2026 : Web SDK 1.25.0 (2 novembre 2026), Document Engine 1.20.0 (29 octobre 2026), SDK .NET 14.4.12, SDK Java 2.1.14 et SDK Python 1.0.14 (tous le 15 novembre 2026), iOS 27.2.0 (11 novembre 2026) et Android 12.1.0 (10 novembre 2026), d’après le [journal des modifications du Web SDK](https://www.nutrient.io/guides/web/changelog/) et ceux des autres SDK. La dernière version npm du convertisseur est la 0.6.0 (28 septembre 2026). La dernière mise à jour du projet date du 15 novembre 2026. Un terminal ou un environnement de développement est requis pour toutes les voies sauf l’application macOS.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données local, auto-hébergé et cloud',
        content: [
          '**Ce qui reste sur votre machine dépend du produit : l’éditeur indique que le convertisseur garde les documents sur votre ordinateur, alors que les API hébergées traitent les fichiers sur les serveurs de Nutrient.** Le [guide du convertisseur](https://www.nutrient.io/guides/dws-pdf-to-markdown/) précise qu’il transmet des informations d’usage comme le mode de conversion et le nombre de pages, mais ni noms de fichiers, ni chemins, ni contenus, ni résultats, et que la conversion Standard fonctionne hors ligne tant que vous n’utilisez pas de clé d’API.',
          'Pour l’application macOS, l’éditeur indique que les documents ne quittent pas le Mac si le modèle d’IA tourne lui aussi sur le Mac, et qu’une clé OpenAI ou Anthropic connectée envoie le contenu des documents à ce fournisseur ; Nutrient reçoit des relevés d’usage pour la facturation.',
          'Pour l’API Processor hébergée, la [politique de confidentialité](https://www.nutrient.io/legal/privacy/) indique que les fichiers téléversés sont supprimés sous 24 heures pour les offres sans conservation des données. Pour les offres avec conservation activée, elle indique que Nutrient conserve les fichiers soumis et les résultats et les utilise pour améliorer ses services, y compris pour entraîner et évaluer des modèles d’apprentissage automatique. Vérifiez de quelle offre il s’agit avant d’envoyer des documents sensibles.',
          'Pour le Document Engine auto-hébergé et les SDK Web, .NET, Python et Java, la politique indique que les licences émises après le 18 mars 2025 (Document Engine) ou le 20 janvier 2026 (les quatre SDK) collectent des mesures d’usage anonymisées, tandis que les licences plus anciennes ne peuvent être mesurées qu’avec un consentement explicite. Une licence en ligne du Document Engine authentifie sa clé d’activation auprès du Nutrient Portal au premier démarrage, et un type de licence hors ligne existe aussi.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce sont des déclarations de l’éditeur, pas des résultats d’audit. PromptQuorum n’a inspecté ni le trafic réseau, ni les binaires, ni les conditions contractuelles.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de pages de l’éditeur, de sa documentation ou du dépôt du convertisseur ; aucun n’a été testé ici.**',
        ],
        items: [
          '**Sortie Markdown et texte.** Le convertisseur crée du Markdown avec titres, listes, tableaux et ordre de lecture, ou du texte brut qui conserve colonnes et espacements ; Standard convient aux PDF avec couche de texte, et Vision vise les scans, l’écriture manuscrite, les formules et les mises en page complexes.',
          '**Extraction structurée.** Le produit Data Extraction, proposé comme API cloud et comme SDK, est décrit comme renvoyant des valeurs avec cadres de délimitation, libellés de correspondance et scores de confiance selon un schéma JSON que vous définissez, comme l’explique la [page Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/).',
          '**OCR.** Document Engine inclut l’OCR et génère des fichiers PDF/A interrogeables, et l’OCR du Web SDK exige Document Engine ; les pages OCR de l’éditeur donnent des nombres de langues différents, 30+ sur la [page Web SDK](https://www.nutrient.io/guides/web/ocr/) et 120+ sur la [page Document Engine](https://www.nutrient.io/guides/document-engine/ocr/).',
          '**Affichage, édition et signature dans votre propre application.** Les SDK ajoutent affichage, édition, signature, caviardage et extraction de données aux logiciels web, mobiles et serveurs.',
          '**MCP.** L’éditeur recense un serveur MCP hébergé qui exige un compte Nutrient, un serveur MCP pour un Document Engine auto-hébergé et un [serveur MCP local du Web SDK](https://www.nutrient.io/guides/web/mcp-server/) qui donne aux agents de code accès à la documentation du SDK via stdio sans compte ; ce dernier n’analyse pas de documents.',
          '**Benchmarks.** Le WholeDoc Bench de l’éditeur évalue les analyseurs sur le texte, l’ordre de lecture, la structure, les tableaux, les codes-barres, les graphiques et la position, et le README du convertisseur présente des résultats de Nutrient face à Docling et pymupdf4llm. PromptQuorum n’a reproduit aucun chiffre.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Licence et prix',
        content: [
          '**Nutrient est un logiciel commercial à code fermé, et le prix dépend du produit : les SDK se vendent sur devis, les API cloud sont facturées à l’usage avec une enveloppe mensuelle gratuite, et le mode Standard du convertisseur est gratuit.**',
          'Les licences de SDK sont des abonnements annuels incluant l’accès, les mises à jour et l’assistance, avec des durées pluriannuelles possibles, et la [page de prix des SDK](https://www.nutrient.io/sdk/pricing/) propose une évaluation de 30 jours sans informations de paiement ; aucun prix public n’est publié. Les API cloud sont facturées en dollars américains par opération, par page ou par session, et la [présentation des prix](https://www.nutrient.io/pricing/) indique 5 dollars américains d’utilisation gratuite par mois sans carte bancaire.',
          'Le convertisseur relève de la [Nutrient PDF to Markdown License](https://github.com/PSPDFKit/pdf-to-markdown/blob/main/LICENSE.md), propriétaire : la conversion Standard et la commande query sont gratuites sans limite, tandis que les organisations de plus de 20 salariés ou de plus de 1 000 000 de dollars américains de chiffre d’affaires annuel brut sont exclues de l’accès gratuit à Vision et doivent l’acheter. La licence interdit aussi l’usage concurrentiel et exige un accord distinct pour fournir le moteur dans des produits que les clients exploitent.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Vitesse et précision.** Tous les chiffres viennent de l’éditeur ; PromptQuorum n’en a mesuré aucun.',
          '**Flux de données en pratique.** Les déclarations sur le traitement local, l’usage hors ligne et la télémétrie viennent de documents de l’éditeur ; ni le trafic réseau ni les binaires n’ont été inspectés.',
          '**Mode Vision.** Le README du convertisseur dit que Vision s’exécute en local, alors que son guide indique que Vision exige une connexion Nutrient et est facturé à la page ; ce test ne tranche pas cette différence.',
          '**Siège.** La page légale énumère des sociétés dans quatre pays et n’en désigne aucune comme siège.',
          '**Prix des SDK.** Aucun prix public n’est publié ; les devis dépendent des produits, des plateformes et du déploiement.',
          '**Cadres de délimitation.** Les pages consultées décrivent des coordonnées pour le produit Data Extraction et ne les mentionnent pas pour le convertisseur gratuit.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Appli', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          {
            Appli: '[Docling](/fr/power-local-llm/docling-review)',
            Plateformes: 'Linux, Mac, Windows',
            'Prix / licence': 'Gratuit / MIT',
            'Différence clé': 'Bibliothèque Python open source qui s’exécute en local ; Nutrient est à code fermé et mélange produits locaux et hébergés',
          },
          {
            Appli: '[Marker](/fr/power-local-llm/marker-review)',
            Plateformes: 'Linux, Mac, Windows',
            'Prix / licence': 'Freemium / code Apache-2.0',
            'Différence clé': 'Analyseur Python dont le code est sous Apache-2.0 mais dont les poids de modèle ont des limites commerciales ; Nutrient est entièrement propriétaire',
          },
          {
            Appli: '[MinerU](/fr/power-local-llm/mineru-review)',
            Plateformes: 'Linux, Mac, Windows',
            'Prix / licence': 'Gratuit / licence MinerU',
            'Différence clé': 'Code source disponible sous conditions dérivées d’Apache 2.0 avec seuils ; Nutrient facture sur devis ou à l’usage',
          },
          {
            Appli: '[OpenDataLoader PDF](/fr/power-local-llm/opendataloader-pdf-review)',
            Plateformes: 'Linux, Mac, Windows',
            'Prix / licence': 'Freemium / Apache-2.0',
            'Différence clé': 'Analyseur open source limité au PDF qui exige Java ; Nutrient ajoute OCR, entrée Office et SDK dans ses produits payants et hébergés',
          },
          {
            Appli: '[Stirling PDF](/fr/power-local-llm/stirling-pdf-review)',
            Plateformes: 'Windows, Mac, Linux, auto-hébergé',
            'Prix / licence': 'Freemium / MIT avec exceptions',
            'Différence clé': 'Boîte à outils PDF open core pour poste de travail et auto-hébergement ; la voie auto-hébergée de Nutrient, Document Engine, est commerciale',
          },
        ],
        note: 'Confirmez le prix, la licence et les plateformes de chaque outil sur sa propre fiche avant de choisir. Nutrient publie lui-même des comparaisons avec Docling et Unstructured ; ces comparaisons sont celles de l’éditeur.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Nutrient est-il la même chose que PSPDFKit ?',
            a: 'La page légale cite PSPDFKit GmbH comme société exerçant sous le nom Nutrient, et PSPDFKit figure toujours dans le nom du paquet et l’organisation GitHub du convertisseur ; les sources consultées ne décrivent pas le changement de nom lui-même.',
          },
          {
            q: 'Puis-je utiliser le convertisseur dans un produit commercial ?',
            a: 'La conversion Standard est gratuite selon la licence pour les organisations de toute taille, y compris dans vos propres applications et services hébergés, à condition que l’usage ne concurrence pas les offres commerciales de Nutrient ; fournir le moteur aux clients dans des produits qu’ils exploitent exige un accord distinct.',
          },
          {
            q: 'Ai-je besoin d’un compte Nutrient pour essayer ?',
            a: 'Pas pour le mode Standard du convertisseur, qui n’exige aucun compte. L’application macOS et le mode Vision demandent une connexion, et les SDK offrent une évaluation de 30 jours.',
          },
          {
            q: 'À quelle fréquence les SDK sont-ils mis à jour ?',
            a: 'Les journaux de modifications montrent des versions de novembre 2026 pour la plupart des SDK, tandis que les entrées les plus récentes de Node.js, Flutter et React Native datent de février, août et août 2026.',
          },
          {
            q: 'Puis-je utiliser le convertisseur dans un agent de code ?',
            a: 'Le README décrit des plugins pour Claude Code, Codex et d’autres outils d’agents qui installent le même binaire, de sorte qu’un agent peut lire un PDF pendant que vous travaillez.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: 'Nutrient est une plateforme PDF maintenue et à code fermé, dont le convertisseur offre un mode Standard gratuit pour les PDF avec couche de texte, tandis que les scans, l’application macOS, l’API Data Extraction, les SDK et Document Engine sont payants ou liés à un compte. En sens inverse, ses benchmarks sont les siens, ses déclarations sur le flux de données ne sont pas testées ici, la licence de son convertisseur est propriétaire et sa page légale ne désigne pas un siège unique. Il convient aux équipes qui concèdent déjà des SDK PDF ou veulent un analyseur soutenu par l’éditeur ; pour l’analyse locale open source, comparez [Docling](/fr/power-local-llm/docling-review) ou [Marker](/fr/power-local-llm/marker-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Page SDK de Nutrient](https://www.nutrient.io/sdk/) — plateformes et présentation des produits, consultée le 17 novembre 2026.',
          '[Tarifs](https://www.nutrient.io/pricing/) et [tarifs des SDK](https://www.nutrient.io/sdk/pricing/) — modèle de licence, enveloppe gratuite et évaluation, consultés le 17 novembre 2026.',
          '[Page légale](https://www.nutrient.io/legal/impressum/) et [politique de confidentialité](https://www.nutrient.io/legal/privacy/) — sociétés, conservation des données et mesures d’usage, consultées le 17 novembre 2026.',
          '[Journal des modifications du Web SDK](https://www.nutrient.io/guides/web/changelog/) et ceux des autres SDK, par exemple le [journal du SDK Java](https://www.nutrient.io/guides/java/changelog/) — versions et dates de publication, consultés le 17 novembre 2026.',
          '[Guide du convertisseur PDF vers Markdown](https://www.nutrient.io/guides/dws-pdf-to-markdown/) et son [dépôt GitHub](https://github.com/PSPDFKit/pdf-to-markdown) — modes, installation, traitement des données et licence, consultés le 17 novembre 2026.',
          '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/) — l’application macOS et les fonctions Data Extraction, consultée le 17 novembre 2026.',
          '[OCR dans le Web SDK](https://www.nutrient.io/guides/web/ocr/) et [OCR dans Document Engine](https://www.nutrient.io/guides/document-engine/ocr/) — portée de l’OCR et langues, consultées le 17 novembre 2026.',
          '[Nutrient llms.txt](https://www.nutrient.io/llms.txt) — présentation des produits par l’éditeur, utilisée pour les types d’entrée de Data Extraction, les serveurs MCP et les comparaisons de l’éditeur, consultée le 17 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'À lire aussi',
        items: [
          '[Test de Docling](/fr/power-local-llm/docling-review) — un analyseur de documents open source d’IBM Research.',
          '[Test de Marker](/fr/power-local-llm/marker-review) — un analyseur PDF vers Markdown avec option hébergée.',
          '[Annuaire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Test de Nutrient : SDK PDF commercial et convertisseur Markdown',
      description: 'Test de Nutrient : SDK PDF commerciaux, API cloud et CLI PDF vers Markdown au mode Standard gratuit. Flux de données, prix publiés, benchmarks de l’éditeur et ce que les sources laissent sans confirmation.',
      url: 'https://www.promptquorum.com/fr/power-local-llm/nutrient-review',
      inLanguage: 'fr',
      datePublished: '2026-11-17',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'Développeurs qui évaluent une boîte à outils PDF commerciale face aux analyseurs open source pour les pipelines RAG et LLM',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Nutrient',
        },
        {
          '@type': 'Thing',
          name: 'Analyse de PDF',
        },
        {
          '@type': 'Thing',
          name: 'Génération augmentée par récupération (RAG)',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/fr/power-local-llm/nutrient-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/fr/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Test de Nutrient',
          item: 'https://www.promptquorum.com/fr/power-local-llm/nutrient-review',
        },
      ],
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'RAG & Document Chat',
    heroImage: '/images/nutrient-review-hero-ja.webp',
    title: 'Nutrientレビュー：Markdown変換ツール付きの商用PDF SDK',
    seoTitle: 'Nutrientレビュー：PDF SDKとMarkdown CLI',
    intro: 'Nutrientは商用のPDFソフトウェアを提供する企業で、Web・モバイル・サーバー向けのライセンス制SDK、セルフホスト型のDocument Engine、従量課金のクラウドAPI、PDFをMarkdownに変換するコマンドラインツール（Standardモードは無料）を扱っています。単一のアプリではなく、オープンソースでもありません。本レビューは、提供元のウェブサイト、ドキュメント、変更履歴、プライバシーポリシー、および変換ツールのGitHubリポジトリを2026年11月17日に確認した内容に基づいています。PromptQuorumはNutrientの製品をインストールも実行もしていません。',
    metaDescription: 'Nutrientレビュー：商用PDF SDKとクラウドAPI、Standardモードが無料のPDFからMarkdownへのCLI。ローカルに残るもの、価格、確認できなかった点を整理します。',
    twitterDescription: 'Nutrientレビュー：見積制のPDF SDK、ホスト型API、Standardモードが無料のPDFからMarkdownへのCLI。データの流れ、価格、確認できなかった点。',
    audience: 'PDFやRAGのパイプラインを構築する開発者・チームで、オープンソースのパーサーと比べたNutrientの内容、手元のマシンに残るデータ、提供元自身の主張を知りたい方。',
    readTime: '7分で読める',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'Nutrientレビュー',
    targetKeywords: [
      'nutrient レビュー',
      'nutrient pdf sdk',
      'nutrient pdf to markdown cli',
      'nutrient document engine',
      'nutrient vs docling',
      'rag向け pdfパーサー',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Nutrientは単一のアプリではなく商用のPDFプラットフォームです。ライセンス制SDK、ホスト型API、コマンドライン変換ツールのいずれも、RAG向けにPDFをMarkdownやJSONへ変換できます。無料なのは変換ツールのStandardモードだけです。** ソースコードが非公開で、ライセンスが見積制である点が、このカテゴリのオープンソースのパーサーとの違いです。',
    quickAnswerTop: {
      ja: {
        question: 'NutrientはPDFをクラウドに送らずに処理できますか？',
        answer: '一部は可能です。提供元によると、PDFからMarkdownへのCLIは文書をお使いのコンピューター上に保ち、Standard変換はテキストを含むPDFならオフラインで動作し、macOSアプリは抽出エンジンをMac上で実行します。スキャン文書にはCLIでVisionモードが必要で、Nutrientへのサインインが求められます。ホスト型APIはNutrientのサーバー上で動作します。これらは提供元の説明であり、PromptQuorumは検証もネットワーク通信の確認もしていません。',
        bullets: [
          '入力：CLIはPDFを読み取ります。クラウドのData Extraction APIは、提供元によると、スキャン文書、画像、Officeファイルも読み取ります。',
          '出力：CLIはMarkdownまたはプレーンテキスト、Data Extraction APIは構造化JSONを出力します。',
          'ライセンス：ソースコード非公開。CLIは独自ライセンス、SDKは見積によるライセンスです。',
        ],
        updatedDate: '2026-11-17',
      },
    },
    toc: [
      {
        label: 'クイックアンサー',
        anchor: 'quick-answer',
      },
      {
        label: 'Nutrientとは',
        anchor: 'what-is-nutrient',
      },
      {
        label: '入手方法',
        anchor: 'get-it',
      },
      {
        label: 'ローカル・セルフホスト・クラウドのデータの流れ',
        anchor: 'privacy',
      },
      {
        label: '情報源で確認できた機能',
        anchor: 'key-features',
      },
      {
        label: 'ライセンスと価格',
        anchor: 'pricing',
      },
      {
        label: '確認できなかった点',
        anchor: 'who-should-not-use',
      },
      {
        label: '競合・代替アプリ',
        anchor: 'vs-alternatives',
      },
      {
        label: 'よくある質問',
        anchor: 'faq',
      },
      {
        label: '総評',
        anchor: 'verdict',
      },
      {
        label: '情報源',
        anchor: 'sources',
      },
      {
        label: '関連記事',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Nutrientは開発者向けのPDFソフトウェアを販売しており、アプリに表示・編集・署名を追加するSDKから、言語モデル向けにPDFをMarkdownへ変換するツール（Standardモードは無料）までを揃えています。',
          },
          {
            type: 'plain-terms',
            text: 'SDKまたはDocument Engineのライセンスを取得して自社ソフトウェアに組み込むか、Nutrientのホスト型APIを呼び出すか、変換ツールをインストールして手元のコンピューターで実行します。',
          },
        ],
        items: [
          '保守状況：SDKの最新リリース（.NET 14.4.12、Java 2.1.14、Python 1.0.14）は2026年11月15日のもので、更新停止の警告は当てはまりません。',
          '対応範囲：Document Engineを含むSDK、クラウドAPI、コマンドライン変換ツールの3つの製品群があり、各記述がどれに当てはまるかを確認する必要があります。',
          'オープンソースのパーサーとの重なり：PDFからMarkdownへの変換ツールとData Extraction API。SDKはアプリに表示・編集・署名・墨消しを追加するものです。',
          '費用：無料の変換モードから見積のみのSDKライセンスまで3種類の料金体系があります。詳しくは「ライセンスと価格」をご覧ください。',
          '未確認：速度と精度の数値は提供元自身のベンチマークで、PromptQuorumはNutrientの製品を実行していません。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'すべての情報は提供元のページと変換ツールのリポジトリに基づいています。PromptQuorumはNutrientを試していないため、速度、精度、メモリ使用量は評価していません。',
          },
        ],
      },
      overview: {
        id: 'what-is-nutrient',
        title: 'Nutrientとは',
        content: [
          '**Nutrientは、PDFの表示、編集、署名、墨消し、OCR、データ抽出のためのソフトウェアを、ライセンス制SDKとセルフホスト型Document Engine、従量課金のクラウドAPI、コマンドライン変換ツール（Standardモードは無料）という3つの形で提供しています。** 提供元の[SDKのページ](https://www.nutrient.io/sdk/)によると、SDKはWeb、iOS、Android、Flutter、React Native、MAUI、.NET、Python、Java、Node.jsで動作します。',
          'PSPDFKitという名前は、提供元の[法務ページ](https://www.nutrient.io/legal/impressum/)、変換ツールのnpmパッケージ名、GitHub組織名に今も残っています。法務ページにはNutrientとして事業を行う複数の会社が、米国、オーストリア、フランス、英国の所在地とともに載っていますが、どれが本社かは情報源に書かれていません。',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '入手方法',
        content: [
          '**Nutrientに共通のインストーラーはありません。最も手軽なのはApple silicon向けのmacOSアプリで、それ以外の方法にはターミナルまたは開発環境が必要です。**',
        ],
        columns: ['項目', '入手方法'],
        rows: [
          {
            '項目': 'macOSアプリ（Apple silicon）',
            '入手方法': '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/)、macOS Tahoe 26.4以降向けのDMGインストーラー。無料のNutrientアカウントでサインインし、抽出には自分で接続するAIモデルが必要です',
          },
          {
            '項目': '変換ツール（npm）',
            '入手方法': '`npm install -g @pspdfkit/pdf-to-markdown`（[README](https://github.com/PSPDFKit/pdf-to-markdown)による）。macOS 13以降（Apple silicon）、Linux（glibc 2.38以降）、Windows（Git Bash）でNode 18以降が必要です',
          },
          {
            '項目': 'クラウドAPI',
            '入手方法': 'Nutrientのアカウントを作成してホスト型APIを呼び出します（[APIの概要](https://www.nutrient.io/api/)による）',
          },
          {
            '項目': 'SDK',
            '入手方法': 'プラットフォームごとにパッケージマネージャーでインストールし、ライセンスキーを使います。例：Web向けはnpmの`@nutrient-sdk/viewer`。[SDKのページ](https://www.nutrient.io/sdk/)をご覧ください',
          },
          {
            '項目': 'Document Engine',
            '入手方法': '有効化キーで起動する商用コンテナです（[製品の有効化ガイド](https://www.nutrient.io/guides/document-engine/deployment/product-activation/)による）',
          },
          {
            '項目': '公式サイト',
            '入手方法': '[nutrient.io](https://www.nutrient.io)',
          },
          {
            '項目': 'プライバシーポリシー',
            '入手方法': '[プライバシーポリシー](https://www.nutrient.io/legal/privacy/)',
          },
          {
            '項目': 'ソースコード',
            '入手方法': 'SDKはクローズドソースで、変換ツールのラッパーとドキュメントのみが[GitHub](https://github.com/PSPDFKit/pdf-to-markdown)にあります',
          },
        ],
        note: '2026年11月17日に確認した最新リリース：Web SDK 1.25.0（2026年11月2日）、Document Engine 1.20.0（2026年10月29日）、.NET SDK 14.4.12・Java SDK 2.1.14・Python SDK 1.0.14（いずれも2026年11月15日）、iOS 27.2.0（2026年11月11日）、Android 12.1.0（2026年11月10日）。[Web SDKの変更履歴](https://www.nutrient.io/guides/web/changelog/)と他のSDKの変更履歴によります。変換ツールの最新のnpmバージョンは0.6.0（2026年9月28日）です。上流の最終更新は2026年11月15日です。macOSアプリ以外の方法にはターミナルまたは開発環境が必要です。',
      },
      privacy: {
        id: 'privacy',
        title: 'ローカル・セルフホスト・クラウドのデータの流れ',
        content: [
          '**手元に残るものは製品によって異なります。提供元によると、変換ツールは文書をお使いのコンピューター上に保ち、ホスト型APIはファイルをNutrientのサーバー上で処理します。** [変換ツールのガイド](https://www.nutrient.io/guides/dws-pdf-to-markdown/)によると、変換モードやページ数などの利用状況は報告されますが、ファイル名、パス、内容、出力は報告されず、Standard変換はAPIキーを使わない限りオフラインで動作します。',
          'macOSアプリについて、提供元は、AIモデルもMac上で動作する場合は文書がMacの外に出ないこと、接続したOpenAIまたはAnthropicのキーを使うと文書の内容がそのプロバイダーに送られることを説明しています。Nutrientは請求のための利用記録を受け取ります。',
          'ホスト型のProcessor APIについて、[プライバシーポリシー](https://www.nutrient.io/legal/privacy/)は、データ保持が有効でないプランでは、アップロードされたファイルが24時間以内に削除されると述べています。データ保持が有効なプランでは、Nutrientが送信されたファイルと出力を保持し、機械学習モデルの学習と評価を含むサービス改善に使用すると述べています。機密性の高い文書を送る前に、どちらのプランか確認してください。',
          'セルフホスト型のDocument EngineとWeb・.NET・Python・Java向けSDKについて、ポリシーは、2025年3月18日以降（Document Engine）または2026年1月20日以降（4つのSDK）に発行されたライセンスでは匿名化された利用指標が収集され、それ以前のライセンスでは明示的な同意がある場合のみ計測できると述べています。オンラインのDocument Engineライセンスは、初回起動時に有効化キーをNutrient Portalで認証し、オフライン用のライセンスタイプもあります。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは提供元の説明であり、監査結果ではありません。PromptQuorumはネットワーク通信、バイナリ、契約条件を確認していません。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: ['**以下の項目はすべて提供元のページ、ドキュメント、変換ツールのリポジトリに基づくもので、ここでは試していません。**'],
        items: [
          '**MarkdownとテキストのOutput。** 変換ツールは、見出し、リスト、表、読み取り順序を保ったMarkdown、または列と間隔を保ったプレーンテキストを作成します。Standardはテキストを含むPDF向けで、Visionはスキャン文書、手書き、数式、複雑なレイアウトを対象とします。',
          '**構造化抽出。** クラウドAPIとSDKの両方で提供されるData Extractionは、自分で定義したJSONスキーマに沿って、バウンディングボックス、一致ラベル、信頼度スコア付きの値を返すと説明されています（[Extract Studioのページ](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/)による）。',
          '**OCR。** Document EngineにはOCRが含まれ、検索可能なPDF/Aを生成します。Web SDKのOCRにはDocument Engineが必要です。提供元のOCRのページでは対応言語数の記載が異なり、[Web SDKのページ](https://www.nutrient.io/guides/web/ocr/)では30以上、[Document Engineのページ](https://www.nutrient.io/guides/document-engine/ocr/)では120以上です。',
          '**自社アプリでの表示・編集・署名。** SDKは、Web、モバイル、サーバーのソフトウェアに表示、編集、署名、墨消し、データ抽出を追加します。',
          '**MCP。** 提供元は、Nutrientアカウントが必要なホスト型MCPサーバー、セルフホスト型Document Engine向けのMCPサーバー、アカウント不要でstdio経由でコーディングエージェントにSDKのドキュメントを提供するローカルの[Web SDK MCPサーバー](https://www.nutrient.io/guides/web/mcp-server/)を挙げています。最後のものは文書を解析しません。',
          '**ベンチマーク。** 提供元独自のWholeDoc Benchは、テキスト、読み取り順序、構造、表、バーコード、グラフ、位置でパーサーを採点し、変換ツールのREADMEはDoclingやpymupdf4llmとのNutrientの結果を掲載しています。PromptQuorumはどの数値も再現していません。',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'ライセンスと価格',
        content: [
          '**Nutrientはクローズドソースの商用ソフトウェアで、価格は製品によって異なります。SDKは見積制、クラウドAPIは毎月の無料枠付きの従量課金、変換ツールのStandardモードは無料です。**',
          'SDKのライセンスはアクセス、アップデート、サポートを含む年間サブスクリプションで、複数年契約も選べます。[SDKの価格ページ](https://www.nutrient.io/sdk/pricing/)では、支払い情報なしで30日間の評価が可能です。定価は公開されていません。クラウドAPIは1操作・1ページ・1セッションあたりの米ドル建てで、[価格の概要](https://www.nutrient.io/pricing/)には、クレジットカード不要で毎月5米ドル分の無料利用枠があると記載されています。',
          '変換ツールは独自の[Nutrient PDF to Markdown License](https://github.com/PSPDFKit/pdf-to-markdown/blob/main/LICENSE.md)の下にあります。Standard変換とqueryコマンドは無制限に無料ですが、従業員が20人を超える、または年間総売上が1,000,000米ドルを超える組織はVisionの無料利用の対象外で、購入が必要です。ライセンスは競合する用途での利用も禁じ、顧客が運用する製品にエンジンを組み込んで提供する場合は別途の契約を求めています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**速度と精度。** 数値はすべて提供元のもので、PromptQuorumは測定していません。',
          '**実際のデータの流れ。** ローカル処理、オフライン利用、テレメトリに関する記述は提供元の文書に基づくもので、ネットワーク通信やバイナリは確認していません。',
          '**Visionモード。** 変換ツールのREADMEはVisionがローカルで動作すると述べる一方、ガイドはNutrientへのサインインとページ単位の課金が必要と述べています。本レビューはこの違いを解消していません。',
          '**本社。** 法務ページには4か国の会社が載っていますが、どれを本社とするかは書かれていません。',
          '**SDKの価格。** 定価は公開されておらず、見積は製品、プラットフォーム、導入形態によって変わります。',
          '**バウンディングボックス。** 確認したページでは、座標はData Extractionの製品について説明されており、無料の変換ツールについては触れられていません。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合・代替アプリ',
        columns: ['アプリ', '対応環境', '価格／ライセンス', '主な違い'],
        rows: [
          {
            'アプリ': '[Docling](/ja/power-local-llm/docling-review)',
            '対応環境': 'Linux、Mac、Windows',
            '価格／ライセンス': '無料／MIT',
            '主な違い': 'ローカルで動くオープンソースのPythonライブラリ。Nutrientはクローズドソースで、ローカルとホスト型の製品が混在',
          },
          {
            'アプリ': '[Marker](/ja/power-local-llm/marker-review)',
            '対応環境': 'Linux、Mac、Windows',
            '価格／ライセンス': 'フリーミアム／コードはApache-2.0',
            '主な違い': 'コードはApache-2.0だがモデルの重みに商用制限があるPythonパーサー。Nutrientは全体が独自ライセンス',
          },
          {
            'アプリ': '[MinerU](/ja/power-local-llm/mineru-review)',
            '対応環境': 'Linux、Mac、Windows',
            '価格／ライセンス': '無料／MinerUライセンス',
            '主な違い': 'Apache 2.0ベースで基準値付きの条件によるソース公開。Nutrientは見積または従量課金',
          },
          {
            'アプリ': '[OpenDataLoader PDF](/ja/power-local-llm/opendataloader-pdf-review)',
            '対応環境': 'Linux、Mac、Windows',
            '価格／ライセンス': 'フリーミアム／Apache-2.0',
            '主な違い': 'Javaが必要なPDF専用のオープンソースパーサー。NutrientはOCR、Office入力、SDKを有料・ホスト型の製品で追加',
          },
          {
            'アプリ': '[Stirling PDF](/ja/power-local-llm/stirling-pdf-review)',
            '対応環境': 'Windows、Mac、Linux、セルフホスト',
            '価格／ライセンス': 'フリーミアム／例外付きMIT',
            '主な違い': 'デスクトップとセルフホスト向けのオープンコアPDFツール。Nutrientのセルフホスト型であるDocument Engineは商用',
          },
        ],
        note: '選ぶ前に、各ツールの現在の価格、ライセンス、対応環境をそれぞれの掲載ページで確認してください。NutrientはDoclingやUnstructuredとの比較を自社で公開しており、それらは提供元の比較です。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'NutrientはPSPDFKitと同じものですか？',
            a: '法務ページにはPSPDFKit GmbHがNutrientとして事業を行う会社として載っており、PSPDFKitは変換ツールのパッケージ名とGitHub組織名にも残っています。確認した情報源には名称変更そのものの説明はありません。',
          },
          {
            q: '変換ツールを商用製品で使えますか？',
            a: 'ライセンスによると、Standard変換はあらゆる規模の組織で無料で、自社のアプリケーションやホスト型サービスの中でも使えますが、Nutrientの商用製品と競合する用途は対象外です。顧客が運用する製品にエンジンを組み込んで提供する場合は別途の契約が必要です。',
          },
          {
            q: '試すのにNutrientのアカウントは必要ですか？',
            a: '変換ツールのStandardモードにはアカウントは不要です。macOSアプリとVisionモードにはサインインが必要で、SDKには30日間の評価があります。',
          },
          {
            q: 'SDKはどのくらいの頻度で更新されますか？',
            a: '変更履歴を見ると、ほとんどのSDKに2026年11月のリリースがありますが、Node.js、Flutter、React Nativeの最新の記載はそれぞれ2026年2月、8月、8月のものです。',
          },
          {
            q: 'コーディングエージェントの中で変換ツールを使えますか？',
            a: 'READMEには、Claude Code、Codexなどのエージェントツール向けに同じバイナリをインストールするプラグインが記載されており、作業中にエージェントがPDFを読み取れます。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: 'Nutrientは更新が続くクローズドソースのPDFプラットフォームで、変換ツールのStandardモードはテキストを含むPDFに対して無料で使える一方、スキャン文書、macOSアプリ、Data Extraction API、SDK、Document Engineは有料またはアカウント必須です。反面、ベンチマークは自社のもので、データの流れに関する説明はここでは検証しておらず、変換ツールのライセンスは独自で、法務ページは本社を一つに特定していません。すでにPDF SDKのライセンスを持つチームや、提供元のサポートがあるパーサーを求めるチームに向いています。オープンソースのローカル解析なら[Docling](/ja/power-local-llm/docling-review)や[Marker](/ja/power-local-llm/marker-review)と比べてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[NutrientのSDKページ](https://www.nutrient.io/sdk/) — 対応プラットフォームと製品概要（2026年11月17日確認）。',
          '[価格](https://www.nutrient.io/pricing/)と[SDKの価格](https://www.nutrient.io/sdk/pricing/) — ライセンス体系、無料枠、評価（2026年11月17日確認）。',
          '[法務ページ](https://www.nutrient.io/legal/impressum/)と[プライバシーポリシー](https://www.nutrient.io/legal/privacy/) — 会社、データ保持、利用指標（2026年11月17日確認）。',
          '[Web SDKの変更履歴](https://www.nutrient.io/guides/web/changelog/)と他のSDKの変更履歴（例：[Java SDKの変更履歴](https://www.nutrient.io/guides/java/changelog/)） — バージョンとリリース日（2026年11月17日確認）。',
          '[PDFからMarkdownへの変換ツールのガイド](https://www.nutrient.io/guides/dws-pdf-to-markdown/)と[GitHubリポジトリ](https://github.com/PSPDFKit/pdf-to-markdown) — モード、インストール、データの扱い、ライセンス（2026年11月17日確認）。',
          '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/) — macOSアプリとData Extractionの機能（2026年11月17日確認）。',
          '[Web SDKのOCR](https://www.nutrient.io/guides/web/ocr/)と[Document EngineのOCR](https://www.nutrient.io/guides/document-engine/ocr/) — OCRの範囲と言語（2026年11月17日確認）。',
          '[Nutrient llms.txt](https://www.nutrient.io/llms.txt) — 提供元による製品概要。Data Extractionの入力形式、MCPサーバー、提供元自身の比較に使用（2026年11月17日確認）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Doclingレビュー](/ja/power-local-llm/docling-review) — IBM Researchによるオープンソースの文書パーサー。',
          '[Markerレビュー](/ja/power-local-llm/marker-review) — ホスト型の選択肢もあるPDFからMarkdownへのパーサー。',
          '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Nutrientレビュー：Markdown変換ツール付きの商用PDF SDK',
      description: 'Nutrientレビュー：商用PDF SDK、クラウドAPI、Standardモードが無料のPDFからMarkdownへのCLI。データの流れ、公開価格、提供元のベンチマーク、情報源で確認できなかった点。',
      url: 'https://www.promptquorum.com/ja/power-local-llm/nutrient-review',
      inLanguage: 'ja',
      datePublished: '2026-11-17',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'RAGやLLMパイプライン向けに、オープンソースのパーサーと並べて商用PDFツールキットを評価する開発者',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Nutrient',
        },
        {
          '@type': 'Thing',
          name: 'PDF解析',
        },
        {
          '@type': 'Thing',
          name: '検索拡張生成（RAG）',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/ja/power-local-llm/nutrient-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'ホーム',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/ja/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Nutrientレビュー',
          item: 'https://www.promptquorum.com/ja/power-local-llm/nutrient-review',
        },
      ],
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'RAG & Document Chat',
    heroImage: '/images/nutrient-review-hero-zh.webp',
    title: 'Nutrient 评测：附 Markdown 转换工具的商用 PDF SDK',
    seoTitle: 'Nutrient 评测：PDF SDK、云 API 与 CLI',
    intro: 'Nutrient 是一家商用 PDF 软件供应商，提供面向 Web、移动和服务器的授权 SDK、可自行托管的 Document Engine、按用量计费的云 API，以及一个把 PDF 转换为 Markdown 的命令行工具（Standard 模式免费）。它不是单一应用，也不是开源软件。本评测基于该供应商的网站、文档、更新日志和隐私政策，以及转换工具的 GitHub 仓库（2026 年 11 月 17 日查阅）；PromptQuorum 没有安装或运行任何 Nutrient 产品。',
    metaDescription: 'Nutrient 评测：商用 PDF SDK 与云 API，外加 Standard 模式免费的 PDF 转 Markdown CLI。哪些内容留在本地、如何定价，以及资料未能说明的部分。',
    twitterDescription: 'Nutrient 评测：按报价授权的 PDF SDK、托管 API 和 Standard 模式免费的 PDF 转 Markdown CLI。数据流向、价格，以及供应商资料未说明的部分。',
    audience: '构建 PDF 或 RAG 管道的开发者和团队，希望了解 Nutrient 与开源解析器相比提供什么、哪些数据留在本机，以及哪些说法来自供应商自己。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'Nutrient 评测',
    targetKeywords: [
      'nutrient 评测',
      'nutrient pdf sdk',
      'nutrient pdf to markdown cli',
      'nutrient document engine',
      'nutrient vs docling',
      '用于 rag 的 pdf 解析器',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Nutrient 是商用 PDF 平台，而不是单一应用：授权 SDK、托管 API 和命令行转换工具都能把 PDF 转成 Markdown 或 JSON，供 RAG 使用，其中只有转换工具的 Standard 模式免费。** 它的源码不公开、授权按报价进行，这是它与本类别开源解析器的区别。',
    quickAnswerTop: {
      zh: {
        question: 'Nutrient 能在不把 PDF 发送到云端的情况下处理文档吗？',
        answer: '部分可以。供应商称其 PDF 转 Markdown CLI 会把文档保留在你的电脑上，Standard 转换对含文字层的 PDF 可离线运行，macOS 应用会在你的 Mac 上运行提取引擎。扫描件需要在 CLI 中使用 Vision 模式，而 Vision 需要登录 Nutrient。托管 API 运行在 Nutrient 的服务器上。这些都是供应商的说法；PromptQuorum 没有测试，也没有检查网络流量。',
        bullets: [
          '输入：CLI 读取 PDF；据供应商称，云端 Data Extraction API 还能读取扫描件、图片和 Office 文件。',
          '输出：CLI 输出 Markdown 或纯文本；Data Extraction API 输出结构化 JSON。',
          '许可：源码不公开；CLI 采用专有许可，SDK 按报价授权。',
        ],
        updatedDate: '2026-11-17',
      },
    },
    toc: [
      {
        label: '快速回答',
        anchor: 'quick-answer',
      },
      {
        label: 'Nutrient 是什么？',
        anchor: 'what-is-nutrient',
      },
      {
        label: '获取方式',
        anchor: 'get-it',
      },
      {
        label: '本地、自托管与云端的数据流向',
        anchor: 'privacy',
      },
      {
        label: '资料证实的功能',
        anchor: 'key-features',
      },
      {
        label: '许可证与价格',
        anchor: 'pricing',
      },
      {
        label: '我们无法核实的内容',
        anchor: 'who-should-not-use',
      },
      {
        label: '竞品与替代方案',
        anchor: 'vs-alternatives',
      },
      {
        label: '常见问题',
        anchor: 'faq',
      },
      {
        label: '结论',
        anchor: 'verdict',
      },
      {
        label: '资料来源',
        anchor: 'sources',
      },
      {
        label: '相关阅读',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Nutrient 向开发者销售 PDF 软件，从为应用添加查看、编辑和签名功能的 SDK，到为语言模型把 PDF 转成 Markdown 的转换工具（Standard 模式免费）。',
          },
          {
            type: 'plain-terms',
            text: '你可以授权一个 SDK 或 Document Engine 并集成进自己的软件，也可以调用 Nutrient 的托管 API，或者安装转换工具并在自己的电脑上运行。',
          },
        ],
        items: [
          '维护情况：SDK 的最新版本（.NET 14.4.12、Java 2.1.14、Python 1.0.14）发布于 2026 年 11 月 15 日，因此不适用项目停更警告。',
          '范围：三类产品，即含 Document Engine 的 SDK、云 API 和命令行转换工具，因此需要确认每个说法对应哪一类。',
          '与开源解析器的交集：PDF 转 Markdown 转换工具和 Data Extraction API；SDK 则为应用添加查看、编辑、签名和涂黑功能。',
          '成本：三种定价方式，从免费的转换模式到仅按报价的 SDK 授权；详见“许可证与价格”。',
          '未核实：速度和准确率数据是供应商自己的基准测试，PromptQuorum 没有运行任何 Nutrient 产品。',
        ],
        callouts: [
          {
            type: 'note',
            text: '所有信息均来自供应商自己的页面和转换工具的仓库。PromptQuorum 未对 Nutrient 进行实机测试，因此这里不评估速度、准确率和内存占用。',
          },
        ],
      },
      overview: {
        id: 'what-is-nutrient',
        title: 'Nutrient 是什么？',
        content: [
          '**Nutrient 销售用于 PDF 查看、编辑、签名、涂黑、OCR 和数据提取的软件，分为三种形式：授权 SDK 加可自托管的 Document Engine、按用量计费的云 API，以及命令行转换工具（Standard 模式免费）。** 据供应商的 [SDK 页面](https://www.nutrient.io/sdk/)，这些 SDK 可在 Web、iOS、Android、Flutter、React Native、MAUI、.NET、Python、Java 和 Node.js 上运行。',
          'PSPDFKit 这个名称仍出现在供应商的[法律页面](https://www.nutrient.io/legal/impressum/)、转换工具的 npm 包名和它的 GitHub 组织名中。法律页面列出了多家以 Nutrient 名义经营的公司，地址分布在美国、奥地利、法国和英国；资料没有说明哪一家是总部。',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '获取方式',
        content: [
          '**Nutrient 没有统一的安装程序：最简单的方式是面向 Apple silicon 的 macOS 应用，其他方式都需要终端或开发环境。**',
        ],
        columns: ['选项', '获取方式'],
        rows: [
          {
            '选项': 'macOS 应用（Apple silicon）',
            '获取方式': '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/)，适用于 macOS Tahoe 26.4 或更高版本的 DMG 安装包；使用免费的 Nutrient 账号登录；提取需要你自行连接的 AI 模型',
          },
          {
            '选项': '转换工具（npm）',
            '获取方式': '`npm install -g @pspdfkit/pdf-to-markdown`，见 [README](https://github.com/PSPDFKit/pdf-to-markdown)；需要 Node 18 或更高版本，支持 macOS 13+（Apple silicon）、Linux（glibc 2.38+）或 Windows（Git Bash）',
          },
          {
            '选项': '云 API',
            '获取方式': '创建 Nutrient 账号并调用托管 API，见 [API 概览](https://www.nutrient.io/api/)',
          },
          {
            '选项': 'SDK',
            '获取方式': '按平台通过包管理器安装并使用许可证密钥，例如 Web 版的 npm 包 `@nutrient-sdk/viewer`；见 [SDK 页面](https://www.nutrient.io/sdk/)',
          },
          {
            '选项': 'Document Engine',
            '获取方式': '使用激活密钥启动的商用容器，见[产品激活指南](https://www.nutrient.io/guides/document-engine/deployment/product-activation/)',
          },
          {
            '选项': '官方网站',
            '获取方式': '[nutrient.io](https://www.nutrient.io)',
          },
          {
            '选项': '隐私政策',
            '获取方式': '[隐私政策](https://www.nutrient.io/legal/privacy/)',
          },
          {
            '选项': '源代码',
            '获取方式': 'SDK 为闭源；[GitHub](https://github.com/PSPDFKit/pdf-to-markdown) 上只有转换工具的封装层和文档',
          },
        ],
        note: '2026 年 11 月 17 日查阅的最新版本：Web SDK 1.25.0（2026 年 11 月 2 日）、Document Engine 1.20.0（2026 年 10 月 29 日）、.NET SDK 14.4.12、Java SDK 2.1.14 和 Python SDK 1.0.14（均为 2026 年 11 月 15 日）、iOS 27.2.0（2026 年 11 月 11 日）和 Android 12.1.0（2026 年 11 月 10 日），来自 [Web SDK 更新日志](https://www.nutrient.io/guides/web/changelog/)及其他 SDK 的更新日志。转换工具在 npm 上的最新版本是 0.6.0（2026 年 9 月 28 日）。上游最近一次更新为 2026 年 11 月 15 日。除 macOS 应用外，其他方式都需要终端或开发环境。',
      },
      privacy: {
        id: 'privacy',
        title: '本地、自托管与云端的数据流向',
        content: [
          '**哪些数据留在你的电脑上取决于具体产品：供应商称转换工具会把文档保留在你的电脑上，而托管 API 会在 Nutrient 的服务器上处理文件。** [转换工具指南](https://www.nutrient.io/guides/dws-pdf-to-markdown/)称它会报告转换模式和页数等使用信息，但不会报告文件名、路径、内容或输出，并且只要不使用 API 密钥，Standard 转换即可离线运行。',
          '关于 macOS 应用，供应商称如果 AI 模型也在 Mac 上运行，文档不会离开这台 Mac；连接 OpenAI 或 Anthropic 的密钥会把文档内容发送给该提供商；Nutrient 会收到用于计费的使用记录。',
          '对于托管的 Processor API，[隐私政策](https://www.nutrient.io/legal/privacy/)称，在未启用数据保留的套餐中，上传的文件会在 24 小时内删除。在启用数据保留的套餐中，Nutrient 会保留提交的文件和输出，并用于改进其服务，包括训练和评估机器学习模型。发送敏感文档之前，请先确认你使用的是哪种套餐。',
          '对于自托管的 Document Engine 以及 Web、.NET、Python 和 Java SDK，该政策称：2025 年 3 月 18 日之后签发的许可（Document Engine）或 2026 年 1 月 20 日之后签发的许可（四种 SDK）会收集匿名化的使用指标，较早的许可只有在明确同意后才能计量。在线的 Document Engine 许可会在首次启动时向 Nutrient Portal 验证激活密钥，也有离线许可类型。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是供应商的说法，不是审计结果。PromptQuorum 没有检查网络流量、二进制文件或合同条款。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '资料证实的功能',
        content: ['**以下每一项都来自供应商的页面、文档或转换工具的仓库；这里都没有实际测试。**'],
        items: [
          '**Markdown 和文本输出。** 转换工具生成带标题、列表、表格和阅读顺序的 Markdown，或保留列和间距的纯文本；Standard 适合含文字层的 PDF，Vision 面向扫描件、手写、公式和复杂版式。',
          '**结构化提取。** Data Extraction 产品既提供云 API，也提供 SDK，据描述会按你定义的 JSON Schema 返回带边界框、匹配标签和置信度分数的值，详见 [Extract Studio 页面](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/)。',
          '**OCR。** Document Engine 内置 OCR，可生成可搜索的 PDF/A 文件，Web SDK 的 OCR 需要 Document Engine；供应商的 OCR 页面给出的语言数量不一致，[Web SDK 页面](https://www.nutrient.io/guides/web/ocr/)为 30+，[Document Engine 页面](https://www.nutrient.io/guides/document-engine/ocr/)为 120+。',
          '**在自己的应用中查看、编辑和签名。** SDK 为 Web、移动和服务器软件添加查看、编辑、签名、涂黑和数据提取功能。',
          '**MCP。** 供应商列出一个需要 Nutrient 账号的托管 MCP 服务器、一个面向自托管 Document Engine 的 MCP 服务器，以及一个让编码智能体通过 stdio、无需账号访问 SDK 文档的本地 [Web SDK MCP 服务器](https://www.nutrient.io/guides/web/mcp-server/)；最后一个不解析文档。',
          '**基准测试。** 供应商自己的 WholeDoc Bench 从文本、阅读顺序、结构、表格、条形码、图表和位置几个方面给解析器打分，转换工具的 README 则给出了 Nutrient 与 Docling、pymupdf4llm 的对比结果。PromptQuorum 没有复现任何数字。',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '许可证与价格',
        content: [
          '**Nutrient 是闭源商用软件，价格取决于产品：SDK 按报价销售，云 API 按用量计费并有每月免费额度，转换工具的 Standard 模式免费。**',
          'SDK 许可为包含访问、更新和支持的年度订阅，也提供多年期，[SDK 价格页面](https://www.nutrient.io/sdk/pricing/)提供无需填写付款信息的 30 天评估；没有公布标价。云 API 按操作、页或会话以美元计价，[价格概览](https://www.nutrient.io/pricing/)列出每月 5 美元的免费用量，无需信用卡。',
          '转换工具采用专有的 [Nutrient PDF to Markdown License](https://github.com/PSPDFKit/pdf-to-markdown/blob/main/LICENSE.md)：Standard 转换和 query 命令不限量免费，而员工超过 20 人或年度总收入超过 1,000,000 美元的组织不能免费使用 Vision，必须购买。该许可还禁止竞争性使用，并要求在向客户自行运营的产品中提供该引擎时另行签订协议。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**速度和准确率。** 所有数字都来自供应商，PromptQuorum 没有测量任何一项。',
          '**实际的数据流向。** 关于本地处理、离线使用和遥测的说法都来自供应商文档；没有检查网络流量或二进制文件。',
          '**Vision 模式。** 转换工具的 README 称 Vision 在本地运行，而它的指南称 Vision 需要登录 Nutrient 并按页计费；本评测无法消除这一差异。',
          '**总部。** 法律页面列出了四个国家的公司，但没有指明哪一家是总部。',
          '**SDK 价格。** 没有公布标价；报价取决于产品、平台和部署方式。',
          '**边界框。** 查阅的页面只在 Data Extraction 产品中描述了坐标，没有提到免费的转换工具。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可', '主要区别'],
        rows: [
          {
            '应用': '[Docling](/zh/power-local-llm/docling-review)',
            '平台': 'Linux、Mac、Windows',
            '价格 / 许可': '免费 / MIT',
            '主要区别': '在本地运行的开源 Python 库；Nutrient 为闭源，本地与托管产品并存',
          },
          {
            '应用': '[Marker](/zh/power-local-llm/marker-review)',
            '平台': 'Linux、Mac、Windows',
            '价格 / 许可': '免费增值 / 代码 Apache-2.0',
            '主要区别': '代码为 Apache-2.0、但模型权重有商用限制的 Python 解析器；Nutrient 整体为专有',
          },
          {
            '应用': '[MinerU](/zh/power-local-llm/mineru-review)',
            '平台': 'Linux、Mac、Windows',
            '价格 / 许可': '免费 / MinerU 许可',
            '主要区别': '基于 Apache 2.0 并带阈值条件的源码可见许可；Nutrient 按报价或用量收费',
          },
          {
            '应用': '[OpenDataLoader PDF](/zh/power-local-llm/opendataloader-pdf-review)',
            '平台': 'Linux、Mac、Windows',
            '价格 / 许可': '免费增值 / Apache-2.0',
            '主要区别': '仅限 PDF、需要 Java 的开源解析器；Nutrient 在付费和托管产品中增加 OCR、Office 输入和 SDK',
          },
          {
            '应用': '[Stirling PDF](/zh/power-local-llm/stirling-pdf-review)',
            '平台': 'Windows、Mac、Linux、自托管',
            '价格 / 许可': '免费增值 / MIT（有例外）',
            '主要区别': '面向桌面和自托管的开源核心 PDF 工具包；Nutrient 的自托管方案 Document Engine 为商用',
          },
        ],
        note: '选择之前，请在各工具自己的页面确认其当前价格、许可和平台。Nutrient 自己发布了与 Docling 和 Unstructured 的对比；这些对比出自供应商之手。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Nutrient 就是 PSPDFKit 吗？',
            a: '法律页面把 PSPDFKit GmbH 列为以 Nutrient 名义经营的公司，PSPDFKit 也仍出现在转换工具的包名和 GitHub 组织名中；查阅的资料没有说明更名本身。',
          },
          {
            q: '可以在商用产品中使用转换工具吗？',
            a: '按照许可，Standard 转换对任何规模的组织都免费，包括用在自己的应用和托管服务中，但不得用于与 Nutrient 商用产品竞争；向客户自行运营的产品提供该引擎则需要另行签订协议。',
          },
          {
            q: '试用需要 Nutrient 账号吗？',
            a: '转换工具的 Standard 模式不需要账号。macOS 应用和 Vision 模式需要登录，SDK 提供 30 天评估。',
          },
          {
            q: 'SDK 的更新频率如何？',
            a: '更新日志显示，大多数 SDK 在 2026 年 11 月有新版本，而 Node.js、Flutter 和 React Native 的最新条目分别来自 2026 年 2 月、8 月和 8 月。',
          },
          {
            q: '能在编码智能体中使用转换工具吗？',
            a: 'README 介绍了面向 Claude Code、Codex 等智能体工具的插件，它们安装的是同一个二进制文件，因此智能体可以在你工作时读取 PDF。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: 'Nutrient 是持续维护的闭源 PDF 平台，其转换工具的 Standard 模式对含文字层的 PDF 免费，而扫描件、macOS 应用、Data Extraction API、SDK 和 Document Engine 则需要付费或绑定账号。不利之处在于：基准测试是供应商自己做的，数据流向的说法未在这里测试，转换工具的许可是专有的，法律页面也没有指明唯一的总部。它适合已经在授权 PDF SDK 的团队，或需要供应商提供支持的解析器；若想要开源的本地解析，请对比 [Docling](/zh/power-local-llm/docling-review) 或 [Marker](/zh/power-local-llm/marker-review)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Nutrient SDK 页面](https://www.nutrient.io/sdk/) — 平台和产品概览（2026-11-17 查阅）。',
          '[价格](https://www.nutrient.io/pricing/)和 [SDK 价格](https://www.nutrient.io/sdk/pricing/) — 授权模式、免费额度和评估（2026-11-17 查阅）。',
          '[法律页面](https://www.nutrient.io/legal/impressum/)和[隐私政策](https://www.nutrient.io/legal/privacy/) — 公司、数据保留和使用指标（2026-11-17 查阅）。',
          '[Web SDK 更新日志](https://www.nutrient.io/guides/web/changelog/)及其他 SDK 的更新日志（例如 [Java SDK 更新日志](https://www.nutrient.io/guides/java/changelog/)） — 版本和发布日期（2026-11-17 查阅）。',
          '[PDF 转 Markdown 转换工具指南](https://www.nutrient.io/guides/dws-pdf-to-markdown/)及其 [GitHub 仓库](https://github.com/PSPDFKit/pdf-to-markdown) — 模式、安装、数据处理和许可（2026-11-17 查阅）。',
          '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/) — macOS 应用和 Data Extraction 功能（2026-11-17 查阅）。',
          '[Web SDK 中的 OCR](https://www.nutrient.io/guides/web/ocr/)和 [Document Engine 中的 OCR](https://www.nutrient.io/guides/document-engine/ocr/) — OCR 范围和语言（2026-11-17 查阅）。',
          '[Nutrient llms.txt](https://www.nutrient.io/llms.txt) — 供应商的产品概览，用于 Data Extraction 的输入类型、MCP 服务器和供应商自己的对比（2026-11-17 查阅）。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Docling 评测](/zh/power-local-llm/docling-review) — IBM Research 的开源文档解析器。',
          '[Marker 评测](/zh/power-local-llm/marker-review) — 带托管选项的 PDF 转 Markdown 解析器。',
          '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Nutrient 评测：附 Markdown 转换工具的商用 PDF SDK',
      description: 'Nutrient 评测：商用 PDF SDK、云 API 和 Standard 模式免费的 PDF 转 Markdown CLI。数据流向、公开价格、供应商基准测试，以及资料未能确认的部分。',
      url: 'https://www.promptquorum.com/zh/power-local-llm/nutrient-review',
      inLanguage: 'zh',
      datePublished: '2026-11-17',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: '为 RAG 和 LLM 管道评估商用 PDF 工具包并与开源解析器对比的开发者',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Nutrient',
        },
        {
          '@type': 'Thing',
          name: 'PDF 解析',
        },
        {
          '@type': 'Thing',
          name: '检索增强生成（RAG）',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/zh/power-local-llm/nutrient-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '首页',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/zh/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Nutrient 评测',
          item: 'https://www.promptquorum.com/zh/power-local-llm/nutrient-review',
        },
      ],
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'RAG & Document Chat',
    heroImage: '/images/nutrient-review-hero-es.webp',
    title: 'Reseña de Nutrient: SDK de PDF comercial y conversor Markdown',
    seoTitle: 'Reseña de Nutrient: SDK de PDF, API en la nube y CLI',
    intro: 'Nutrient es un proveedor comercial de software PDF: SDK con licencia para web, móvil y servidor, un Document Engine autoalojado, API en la nube con pago por uso y una herramienta de línea de comandos que convierte PDF a Markdown y es gratuita en su modo Standard. No es una sola aplicación ni es de código abierto. Esta reseña se basa en el sitio web, la documentación, los registros de cambios y la política de privacidad del proveedor, y en el repositorio de GitHub del conversor, consultados el 17 de noviembre de 2026; PromptQuorum no ha instalado ni ejecutado ningún producto de Nutrient.',
    metaDescription: 'Reseña de Nutrient: SDK de PDF y API en la nube comerciales y CLI de PDF a Markdown con modo Standard gratuito. Qué queda en local, precio y omisiones.',
    twitterDescription: 'Reseña de Nutrient: SDK de PDF por cotización, API alojadas y una CLI de PDF a Markdown con modo Standard gratuito. Flujo de datos, precios y qué dejan abierto las fuentes.',
    audience: 'Desarrolladores y equipos que crean pipelines de PDF o RAG y quieren saber qué ofrece Nutrient frente a los analizadores de código abierto, qué se queda en su equipo y qué afirmaciones son del propio proveedor.',
    readTime: '7 min de lectura',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'reseña Nutrient',
    targetKeywords: [
      'reseña nutrient',
      'nutrient sdk pdf',
      'nutrient pdf to markdown cli',
      'nutrient document engine',
      'nutrient vs docling',
      'analizador pdf para rag',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Nutrient es una plataforma PDF comercial, no una sola aplicación: SDK con licencia, API alojadas y un conversor de línea de comandos pueden convertir PDF en Markdown o JSON para RAG, y solo el modo Standard del conversor es gratuito.** Su código cerrado y sus licencias por cotización lo distinguen de los analizadores de código abierto de esta categoría.',
    quickAnswerTop: {
      es: {
        question: '¿Puede Nutrient procesar mis PDF sin enviarlos a una nube?',
        answer: 'En parte. El proveedor dice que su CLI de PDF a Markdown mantiene los documentos en tu equipo y que la conversión Standard funciona sin conexión con PDF basados en texto, y que una aplicación de macOS ejecuta el motor de extracción en tu Mac. Para escaneos, la CLI necesita el modo Vision, que exige iniciar sesión en Nutrient. Las API alojadas se ejecutan en los servidores de Nutrient. Son afirmaciones del proveedor; PromptQuorum no las ha probado ni ha inspeccionado el tráfico de red.',
        bullets: [
          'Entrada: la CLI lee PDF; la API en la nube Data Extraction también lee, según el proveedor, escaneos, imágenes y archivos de Office.',
          'Salida: Markdown o texto sin formato desde la CLI; JSON estructurado desde la API Data Extraction.',
          'Licencia: código cerrado; la CLI tiene una licencia propietaria y los SDK se licencian por cotización.',
        ],
        updatedDate: '2026-11-17',
      },
    },
    toc: [
      {
        label: 'Respuesta rápida',
        anchor: 'quick-answer',
      },
      {
        label: '¿Qué es Nutrient?',
        anchor: 'what-is-nutrient',
      },
      {
        label: 'Cómo conseguirlo',
        anchor: 'get-it',
      },
      {
        label: 'Flujo de datos local, autoalojado y en la nube',
        anchor: 'privacy',
      },
      {
        label: 'Funciones confirmadas por las fuentes',
        anchor: 'key-features',
      },
      {
        label: 'Licencia y precio',
        anchor: 'pricing',
      },
      {
        label: 'Lo que no pudimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Competidores y alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Preguntas frecuentes',
        anchor: 'faq',
      },
      {
        label: 'Veredicto',
        anchor: 'verdict',
      },
      {
        label: 'Fuentes',
        anchor: 'sources',
      },
      {
        label: 'Lecturas relacionadas',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Nutrient vende software PDF para desarrolladores, desde SDK que añaden visualización, edición y firma a una aplicación hasta un conversor con modo Standard gratuito que convierte PDF en Markdown para modelos de lenguaje.',
          },
          {
            type: 'plain-terms',
            text: 'Puedes licenciar un SDK o el Document Engine e integrarlo en tu propio software, llamar a las API alojadas de Nutrient o instalar el conversor y ejecutarlo en tu equipo.',
          },
        ],
        items: [
          'Mantenimiento: las versiones más recientes de los SDK, .NET 14.4.12, Java 2.1.14 y Python 1.0.14, son del 15 de noviembre de 2026, así que no se aplica ninguna advertencia de proyecto inactivo.',
          'Alcance: tres familias de productos, SDK con Document Engine, API en la nube y un conversor de línea de comandos; comprueba, por tanto, a cuál se refiere cada afirmación.',
          'Solapamiento con los analizadores de código abierto: el conversor de PDF a Markdown y la API Data Extraction; los SDK añaden visualización, edición, firma y redacción a las aplicaciones.',
          'Coste: tres modelos de precio, desde un modo gratuito del conversor hasta licencias de SDK solo por cotización; consulta Licencia y precio.',
          'Sin verificar: las cifras de velocidad y precisión son los benchmarks del propio proveedor, y PromptQuorum no ha ejecutado ningún producto de Nutrient.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Toda la información procede de páginas del proveedor y del repositorio del conversor. PromptQuorum no ha probado Nutrient, por lo que aquí no se evalúan la velocidad, la precisión ni el uso de memoria.',
          },
        ],
      },
      overview: {
        id: 'what-is-nutrient',
        title: '¿Qué es Nutrient?',
        content: [
          '**Nutrient vende software para visualizar, editar, firmar y redactar PDF, y para OCR y extracción de datos, en tres formas: SDK con licencia con un Document Engine autoalojado, API en la nube con pago por uso y un conversor de línea de comandos con modo Standard gratuito.** Según la [página de SDK](https://www.nutrient.io/sdk/) del proveedor, los SDK funcionan en Web, iOS, Android, Flutter, React Native, MAUI, .NET, Python, Java y Node.js.',
          'El nombre PSPDFKit sigue apareciendo en la [página legal](https://www.nutrient.io/legal/impressum/) del proveedor, en el nombre del paquete npm del conversor y en su organización de GitHub. La página legal enumera varias empresas que operan como Nutrient, con direcciones en Estados Unidos, Austria, Francia y el Reino Unido; las fuentes no indican cuál es la sede central.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Cómo conseguirlo',
        content: [
          '**Nutrient no tiene un instalador único: la vía más fácil es la aplicación de macOS para Apple silicon, y todas las demás necesitan un terminal o un entorno de desarrollo.**',
        ],
        columns: ['Opción', 'Cómo conseguirlo'],
        rows: [
          {
            'Opción': 'Aplicación de macOS (Apple silicon)',
            'Cómo conseguirlo': '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/), un instalador DMG para macOS Tahoe 26.4 o posterior; inicia sesión con una cuenta gratuita de Nutrient; la extracción necesita un modelo de IA que conectes',
          },
          {
            'Opción': 'Conversor (npm)',
            'Cómo conseguirlo': '`npm install -g @pspdfkit/pdf-to-markdown`, según el [README](https://github.com/PSPDFKit/pdf-to-markdown); requiere Node 18 o posterior en macOS 13+ (Apple silicon), Linux (glibc 2.38+) o Windows (Git Bash)',
          },
          {
            'Opción': 'API en la nube',
            'Cómo conseguirlo': 'Crea una cuenta de Nutrient y llama a las API alojadas, según la [descripción general de las API](https://www.nutrient.io/api/)',
          },
          {
            'Opción': 'SDK',
            'Cómo conseguirlo': 'Instalación con gestor de paquetes según la plataforma y una clave de licencia, por ejemplo `@nutrient-sdk/viewer` en npm para Web; consulta la [página de SDK](https://www.nutrient.io/sdk/)',
          },
          {
            'Opción': 'Document Engine',
            'Cómo conseguirlo': 'Un contenedor comercial que se inicia con una clave de activación, según la [guía de activación del producto](https://www.nutrient.io/guides/document-engine/deployment/product-activation/)',
          },
          {
            'Opción': 'Sitio web',
            'Cómo conseguirlo': '[nutrient.io](https://www.nutrient.io)',
          },
          {
            'Opción': 'Política de privacidad',
            'Cómo conseguirlo': '[Política de privacidad](https://www.nutrient.io/legal/privacy/)',
          },
          {
            'Opción': 'Código fuente',
            'Cómo conseguirlo': 'Los SDK son de código cerrado; solo el envoltorio y la documentación del conversor están en [GitHub](https://github.com/PSPDFKit/pdf-to-markdown)',
          },
        ],
        note: 'Versiones más recientes comprobadas el 17 de noviembre de 2026: Web SDK 1.25.0 (2 de noviembre de 2026), Document Engine 1.20.0 (29 de octubre de 2026), SDK de .NET 14.4.12, SDK de Java 2.1.14 y SDK de Python 1.0.14 (todos el 15 de noviembre de 2026), iOS 27.2.0 (11 de noviembre de 2026) y Android 12.1.0 (10 de noviembre de 2026), según el [registro de cambios de Web SDK](https://www.nutrient.io/guides/web/changelog/) y los de los demás SDK. La última versión de npm del conversor es la 0.6.0 (28 de septiembre de 2026). La última actualización del proyecto es del 15 de noviembre de 2026. Todas las vías excepto la aplicación de macOS requieren un terminal o un entorno de desarrollo.',
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos local, autoalojado y en la nube',
        content: [
          '**Lo que se queda en tu equipo depende del producto: el proveedor dice que el conversor mantiene los documentos en tu ordenador, mientras que las API alojadas procesan los archivos en los servidores de Nutrient.** La [guía del conversor](https://www.nutrient.io/guides/dws-pdf-to-markdown/) indica que informa de datos de uso como el modo de conversión y el número de páginas, pero no de nombres de archivo, rutas, contenidos ni resultados, y que la conversión Standard funciona sin conexión mientras no uses una clave de API.',
          'Sobre la aplicación de macOS, el proveedor dice que los documentos no salen del Mac si el modelo de IA también se ejecuta en el Mac, y que una clave de OpenAI o Anthropic conectada envía el contenido de los documentos a ese proveedor; Nutrient recibe registros de uso para la facturación.',
          'Para la API Processor alojada, la [política de privacidad](https://www.nutrient.io/legal/privacy/) indica que los archivos subidos se eliminan en 24 horas en los planes sin retención de datos. En los planes con retención activada, indica que Nutrient conserva los archivos enviados y los resultados y los usa para mejorar sus servicios, incluido el entrenamiento y la evaluación de modelos de aprendizaje automático. Comprueba qué tipo de plan tienes antes de enviar documentos sensibles.',
          'Para el Document Engine autoalojado y los SDK de Web, .NET, Python y Java, la política indica que las licencias emitidas después del 18 de marzo de 2025 (Document Engine) o del 20 de enero de 2026 (los cuatro SDK) recogen métricas de uso anonimizadas, mientras que las licencias anteriores solo pueden medirse con consentimiento explícito. Una licencia en línea del Document Engine autentica su clave de activación en el Nutrient Portal en el primer arranque, y también existe un tipo de licencia sin conexión.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Son afirmaciones del proveedor, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red, los binarios ni las condiciones contractuales.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede de páginas del proveedor, de su documentación o del repositorio del conversor; ninguno se ha probado aquí.**',
        ],
        items: [
          '**Salida en Markdown y texto.** El conversor crea Markdown con encabezados, listas, tablas y orden de lectura, o texto sin formato que conserva columnas y espaciado; Standard sirve para PDF basados en texto, y Vision apunta a escaneos, escritura a mano, fórmulas y diseños complejos.',
          '**Extracción estructurada.** El producto Data Extraction, ofrecido como API en la nube y como SDK, se describe como un servicio que devuelve valores con cuadros delimitadores, etiquetas de coincidencia y puntuaciones de confianza según un esquema JSON que defines, como explica la [página de Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/).',
          '**OCR.** Document Engine incluye OCR y genera archivos PDF/A con búsqueda, y el OCR de Web SDK requiere Document Engine; las páginas de OCR del proveedor dan cifras de idiomas distintas, 30+ en la [página de Web SDK](https://www.nutrient.io/guides/web/ocr/) y 120+ en la [página de Document Engine](https://www.nutrient.io/guides/document-engine/ocr/).',
          '**Visualizar, editar y firmar en tu propia aplicación.** Los SDK añaden visualización, edición, firma, redacción y extracción de datos a software web, móvil y de servidor.',
          '**MCP.** El proveedor enumera un servidor MCP alojado que requiere una cuenta de Nutrient, un servidor MCP para un Document Engine autoalojado y un [servidor MCP local de Web SDK](https://www.nutrient.io/guides/web/mcp-server/) que da a los agentes de código acceso a la documentación del SDK por stdio sin cuenta; este último no analiza documentos.',
          '**Benchmarks.** El WholeDoc Bench del propio proveedor puntúa los analizadores en texto, orden de lectura, estructura, tablas, códigos de barras, gráficos y posición, y el README del conversor presenta resultados de Nutrient frente a Docling y pymupdf4llm. PromptQuorum no ha reproducido ninguna cifra.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Licencia y precio',
        content: [
          '**Nutrient es software comercial de código cerrado, y el precio depende del producto: los SDK se venden por cotización, las API en la nube se cobran por uso con una asignación mensual gratuita, y el modo Standard del conversor es gratuito.**',
          'Las licencias de SDK son suscripciones anuales que incluyen acceso, actualizaciones y soporte, con plazos plurianuales disponibles, y la [página de precios de SDK](https://www.nutrient.io/sdk/pricing/) ofrece una evaluación de 30 días sin datos de pago; no se publica ningún precio de lista. Las API en la nube se cobran en dólares estadounidenses por operación, página o sesión, y la [descripción general de precios](https://www.nutrient.io/pricing/) indica 5 dólares estadounidenses de uso gratuito al mes sin tarjeta de crédito.',
          'El conversor se rige por la [Nutrient PDF to Markdown License](https://github.com/PSPDFKit/pdf-to-markdown/blob/main/LICENSE.md), propietaria: la conversión Standard y el comando query son gratuitos sin límites, mientras que las organizaciones con más de 20 empleados o más de 1.000.000 de dólares estadounidenses de ingresos brutos anuales quedan excluidas del acceso gratuito a Vision y deben comprarlo. La licencia también prohíbe el uso competitivo y exige un acuerdo aparte para suministrar el motor dentro de productos que operan los clientes.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Velocidad y precisión.** Todas las cifras son del proveedor; PromptQuorum no midió ninguna.',
          '**Flujo de datos en la práctica.** Las afirmaciones sobre procesamiento local, uso sin conexión y telemetría proceden de documentos del proveedor; no se inspeccionó el tráfico de red ni ningún binario.',
          '**Modo Vision.** El README del conversor dice que Vision se ejecuta en local, mientras que su guía dice que Vision exige iniciar sesión en Nutrient y se factura por página; esta reseña no resuelve la diferencia.',
          '**Sede central.** La página legal enumera empresas en cuatro países y no señala ninguna como sede central.',
          '**Precios de los SDK.** No se publican precios de lista; las cotizaciones dependen de los productos, las plataformas y el despliegue.',
          '**Cuadros delimitadores.** Las páginas consultadas describen coordenadas para el producto Data Extraction y no las mencionan para el conversor gratuito.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia principal'],
        rows: [
          {
            App: '[Docling](/es/power-local-llm/docling-review)',
            Plataformas: 'Linux, Mac, Windows',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia principal': 'Biblioteca Python de código abierto que se ejecuta en local; Nutrient es de código cerrado y mezcla productos locales y alojados',
          },
          {
            App: '[Marker](/es/power-local-llm/marker-review)',
            Plataformas: 'Linux, Mac, Windows',
            'Precio / licencia': 'Freemium / código Apache-2.0',
            'Diferencia principal': 'Analizador Python cuyo código es Apache-2.0 pero cuyos pesos de modelo tienen límites comerciales; Nutrient es propietario en su totalidad',
          },
          {
            App: '[MinerU](/es/power-local-llm/mineru-review)',
            Plataformas: 'Linux, Mac, Windows',
            'Precio / licencia': 'Gratis / licencia MinerU',
            'Diferencia principal': 'Código disponible con condiciones basadas en Apache 2.0 y umbrales; Nutrient cobra por cotización o por uso',
          },
          {
            App: '[OpenDataLoader PDF](/es/power-local-llm/opendataloader-pdf-review)',
            Plataformas: 'Linux, Mac, Windows',
            'Precio / licencia': 'Freemium / Apache-2.0',
            'Diferencia principal': 'Analizador de código abierto solo para PDF que necesita Java; Nutrient añade OCR, entrada de Office y SDK en sus productos de pago y alojados',
          },
          {
            App: '[Stirling PDF](/es/power-local-llm/stirling-pdf-review)',
            Plataformas: 'Windows, Mac, Linux, autoalojado',
            'Precio / licencia': 'Freemium / MIT con excepciones',
            'Diferencia principal': 'Herramienta PDF open core para escritorio y autoalojamiento; la vía autoalojada de Nutrient, Document Engine, es comercial',
          },
        ],
        note: 'Confirma el precio, la licencia y las plataformas actuales de cada herramienta en su propia ficha antes de elegir. Nutrient publica por su cuenta comparaciones con Docling y Unstructured; esas comparaciones son del proveedor.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Nutrient es lo mismo que PSPDFKit?',
            a: 'La página legal enumera a PSPDFKit GmbH como una empresa que opera como Nutrient, y PSPDFKit sigue apareciendo en el nombre del paquete y en la organización de GitHub del conversor; las fuentes consultadas no describen el cambio de nombre en sí.',
          },
          {
            q: '¿Puedo usar el conversor en un producto comercial?',
            a: 'Según la licencia, la conversión Standard es gratuita para organizaciones de cualquier tamaño, también dentro de tus propias aplicaciones y servicios alojados, siempre que el uso no compita con las ofertas comerciales de Nutrient; suministrar el motor a clientes en productos que ellos operan requiere un acuerdo aparte.',
          },
          {
            q: '¿Necesito una cuenta de Nutrient para probarlo?',
            a: 'No para el modo Standard del conversor, que no necesita cuenta. La aplicación de macOS y el modo Vision exigen iniciar sesión, y los SDK ofrecen una evaluación de 30 días.',
          },
          {
            q: '¿Con qué frecuencia se actualizan los SDK?',
            a: 'Los registros de cambios muestran versiones de noviembre de 2026 para la mayoría de los SDK, mientras que las entradas más recientes de Node.js, Flutter y React Native son de febrero, agosto y agosto de 2026.',
          },
          {
            q: '¿Puedo usar el conversor dentro de un agente de código?',
            a: 'El README describe plugins para Claude Code, Codex y otras herramientas de agentes que instalan el mismo binario, de modo que un agente puede leer un PDF mientras trabajas.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: 'Nutrient es una plataforma PDF mantenida y de código cerrado, cuyo conversor ofrece un modo Standard gratuito para PDF basados en texto, mientras que los escaneos, la aplicación de macOS, la API Data Extraction, los SDK y Document Engine son de pago o dependen de una cuenta. En contra, sus benchmarks son suyos, sus afirmaciones sobre el flujo de datos no se han probado aquí, la licencia de su conversor es propietaria y su página legal no señala una única sede central. Encaja con equipos que ya licencian SDK de PDF o quieren un analizador respaldado por el proveedor; para el análisis local de código abierto, compara [Docling](/es/power-local-llm/docling-review) o [Marker](/es/power-local-llm/marker-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Página de SDK de Nutrient](https://www.nutrient.io/sdk/) — plataformas y descripción de productos, consultada el 17 de noviembre de 2026.',
          '[Precios](https://www.nutrient.io/pricing/) y [precios de SDK](https://www.nutrient.io/sdk/pricing/) — modelo de licencia, asignación gratuita y evaluación, consultados el 17 de noviembre de 2026.',
          '[Página legal](https://www.nutrient.io/legal/impressum/) y [política de privacidad](https://www.nutrient.io/legal/privacy/) — empresas, retención de datos y métricas de uso, consultadas el 17 de noviembre de 2026.',
          '[Registro de cambios de Web SDK](https://www.nutrient.io/guides/web/changelog/) y los de los demás SDK, por ejemplo el [registro del SDK de Java](https://www.nutrient.io/guides/java/changelog/) — versiones y fechas de publicación, consultados el 17 de noviembre de 2026.',
          '[Guía del conversor de PDF a Markdown](https://www.nutrient.io/guides/dws-pdf-to-markdown/) y su [repositorio de GitHub](https://github.com/PSPDFKit/pdf-to-markdown) — modos, instalación, tratamiento de datos y licencia, consultados el 17 de noviembre de 2026.',
          '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/) — la aplicación de macOS y las funciones de Data Extraction, consultada el 17 de noviembre de 2026.',
          '[OCR en Web SDK](https://www.nutrient.io/guides/web/ocr/) y [OCR en Document Engine](https://www.nutrient.io/guides/document-engine/ocr/) — alcance del OCR e idiomas, consultados el 17 de noviembre de 2026.',
          '[Nutrient llms.txt](https://www.nutrient.io/llms.txt) — descripción de productos del proveedor, usada para los tipos de entrada de Data Extraction, los servidores MCP y las comparaciones del propio proveedor, consultada el 17 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Docling](/es/power-local-llm/docling-review) — un analizador de documentos de código abierto de IBM Research.',
          '[Reseña de Marker](/es/power-local-llm/marker-review) — un analizador de PDF a Markdown con opción alojada.',
          '[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Reseña de Nutrient: SDK de PDF comercial y conversor Markdown',
      description: 'Reseña de Nutrient: SDK de PDF comerciales, API en la nube y una CLI de PDF a Markdown con modo Standard gratuito. Flujo de datos, precios publicados, benchmarks del proveedor y lo que las fuentes dejan sin confirmar.',
      url: 'https://www.promptquorum.com/es/power-local-llm/nutrient-review',
      inLanguage: 'es',
      datePublished: '2026-11-17',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'Desarrolladores que evalúan un conjunto de herramientas PDF comercial frente a analizadores de código abierto para pipelines de RAG y LLM',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Nutrient',
        },
        {
          '@type': 'Thing',
          name: 'Análisis de PDF',
        },
        {
          '@type': 'Thing',
          name: 'Generación aumentada por recuperación (RAG)',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/es/power-local-llm/nutrient-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/es/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Reseña de Nutrient',
          item: 'https://www.promptquorum.com/es/power-local-llm/nutrient-review',
        },
      ],
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'RAG & Document Chat',
    heroImage: '/images/nutrient-review-hero-pt.webp',
    title: 'Análise do Nutrient: SDK de PDF comercial e conversor Markdown',
    seoTitle: 'Análise do Nutrient: SDK de PDF, APIs na nuvem e CLI',
    intro: 'O Nutrient é um fornecedor comercial de software PDF: SDKs licenciados para web, dispositivos móveis e servidor, um Document Engine auto-hospedado, APIs na nuvem com cobrança por uso e uma ferramenta de linha de comando que converte PDF em Markdown e é gratuita no modo Standard. Não é um aplicativo único nem é de código aberto. Esta análise se baseia no site, na documentação, nos registros de alterações e na política de privacidade do fornecedor, além do repositório do conversor no GitHub, consultados em 17 de novembro de 2026; o PromptQuorum não instalou nem executou nenhum produto da Nutrient.',
    metaDescription: 'Análise do Nutrient: SDKs de PDF e APIs na nuvem comerciais e CLI de PDF para Markdown com modo Standard gratuito. O que fica local e o preço.',
    twitterDescription: 'Análise do Nutrient: SDKs de PDF sob cotação, APIs hospedadas e uma CLI de PDF para Markdown com modo Standard gratuito. Fluxo de dados, preços e o que as fontes deixam em aberto.',
    audience: 'Desenvolvedores e equipes que constroem pipelines de PDF ou RAG e querem saber o que o Nutrient oferece em comparação com parsers de código aberto, o que fica na sua máquina e quais afirmações são do próprio fornecedor.',
    readTime: '7 min de leitura',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'análise Nutrient',
    targetKeywords: [
      'análise nutrient',
      'nutrient sdk pdf',
      'nutrient pdf to markdown cli',
      'nutrient document engine',
      'nutrient vs docling',
      'parser de pdf para rag',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**O Nutrient é uma plataforma PDF comercial, não um aplicativo único: SDKs licenciados, APIs hospedadas e um conversor de linha de comando podem transformar PDFs em Markdown ou JSON para RAG, e somente o modo Standard do conversor é gratuito.** O código fechado e o licenciamento sob cotação o distinguem dos parsers de código aberto desta categoria.',
    quickAnswerTop: {
      pt: {
        question: 'O Nutrient consegue processar meus PDFs sem enviá-los a uma nuvem?',
        answer: 'Em parte. O fornecedor diz que a CLI de PDF para Markdown mantém os documentos no seu computador e que a conversão Standard funciona offline em PDFs com texto, e que um aplicativo para macOS executa o mecanismo de extração no seu Mac. Para digitalizações, a CLI precisa do modo Vision, que exige login na Nutrient. As APIs hospedadas rodam nos servidores da Nutrient. São afirmações do fornecedor; o PromptQuorum não as testou nem inspecionou o tráfego de rede.',
        bullets: [
          'Entrada: a CLI lê PDFs; a API na nuvem Data Extraction também lê, segundo o fornecedor, digitalizações, imagens e arquivos do Office.',
          'Saída: Markdown ou texto simples da CLI; JSON estruturado da API Data Extraction.',
          'Licença: código fechado; a CLI tem licença proprietária e os SDKs são licenciados sob cotação.',
        ],
        updatedDate: '2026-11-17',
      },
    },
    toc: [
      {
        label: 'Resposta rápida',
        anchor: 'quick-answer',
      },
      {
        label: 'O que é o Nutrient?',
        anchor: 'what-is-nutrient',
      },
      {
        label: 'Onde obter',
        anchor: 'get-it',
      },
      {
        label: 'Fluxo de dados local, auto-hospedado e na nuvem',
        anchor: 'privacy',
      },
      {
        label: 'Recursos confirmados pelas fontes',
        anchor: 'key-features',
      },
      {
        label: 'Licença e preço',
        anchor: 'pricing',
      },
      {
        label: 'O que não conseguimos verificar',
        anchor: 'who-should-not-use',
      },
      {
        label: 'Concorrentes e alternativas',
        anchor: 'vs-alternatives',
      },
      {
        label: 'Perguntas frequentes',
        anchor: 'faq',
      },
      {
        label: 'Veredito',
        anchor: 'verdict',
      },
      {
        label: 'Fontes',
        anchor: 'sources',
      },
      {
        label: 'Leitura relacionada',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Nutrient vende software PDF para desenvolvedores, de SDKs que adicionam visualização, edição e assinatura a um aplicativo até um conversor com modo Standard gratuito que transforma PDFs em Markdown para modelos de linguagem.',
          },
          {
            type: 'plain-terms',
            text: 'Você licencia um SDK ou o Document Engine e o integra ao seu próprio software, chama as APIs hospedadas da Nutrient ou instala o conversor e o executa no seu computador.',
          },
        ],
        items: [
          'Manutenção: as versões mais recentes dos SDKs, .NET 14.4.12, Java 2.1.14 e Python 1.0.14, são de 15 de novembro de 2026, então nenhum aviso de projeto parado se aplica.',
          'Escopo: três famílias de produtos, SDKs com Document Engine, APIs na nuvem e um conversor de linha de comando; verifique, portanto, a qual delas cada afirmação se refere.',
          'Sobreposição com parsers de código aberto: o conversor de PDF para Markdown e a API Data Extraction; os SDKs adicionam visualização, edição, assinatura e redação a aplicativos.',
          'Custo: três modelos de preço, de um modo gratuito do conversor a licenças de SDK somente sob cotação; veja Licença e preço.',
          'Não verificado: os números de velocidade e precisão são benchmarks do próprio fornecedor, e o PromptQuorum não executou nenhum produto da Nutrient.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Todas as informações vêm de páginas do fornecedor e do repositório do conversor. O PromptQuorum não testou o Nutrient, então velocidade, precisão e uso de memória não são avaliados aqui.',
          },
        ],
      },
      overview: {
        id: 'what-is-nutrient',
        title: 'O que é o Nutrient?',
        content: [
          '**O Nutrient vende software para visualizar, editar, assinar e redigir PDFs, além de OCR e extração de dados, em três formas: SDKs licenciados com um Document Engine auto-hospedado, APIs na nuvem com cobrança por uso e um conversor de linha de comando com modo Standard gratuito.** Segundo a [página de SDKs](https://www.nutrient.io/sdk/) do fornecedor, os SDKs rodam em Web, iOS, Android, Flutter, React Native, MAUI, .NET, Python, Java e Node.js.',
          'O nome PSPDFKit ainda aparece na [página legal](https://www.nutrient.io/legal/impressum/) do fornecedor, no nome do pacote npm do conversor e na sua organização no GitHub. A página legal lista várias empresas que atuam como Nutrient, com endereços nos Estados Unidos, na Áustria, na França e no Reino Unido; as fontes não dizem qual delas é a sede.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'Onde obter',
        content: [
          '**O Nutrient não tem um instalador único: o caminho mais fácil é o aplicativo para macOS com Apple silicon, e todos os outros exigem um terminal ou um ambiente de desenvolvimento.**',
        ],
        columns: ['Opção', 'Como obter'],
        rows: [
          {
            'Opção': 'Aplicativo para macOS (Apple silicon)',
            'Como obter': '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/), um instalador DMG para macOS Tahoe 26.4 ou posterior; entre com uma conta gratuita da Nutrient; a extração precisa de um modelo de IA que você conecta',
          },
          {
            'Opção': 'Conversor (npm)',
            'Como obter': '`npm install -g @pspdfkit/pdf-to-markdown`, conforme o [README](https://github.com/PSPDFKit/pdf-to-markdown); exige Node 18 ou posterior no macOS 13+ (Apple silicon), Linux (glibc 2.38+) ou Windows (Git Bash)',
          },
          {
            'Opção': 'APIs na nuvem',
            'Como obter': 'Crie uma conta na Nutrient e chame as APIs hospedadas, conforme a [visão geral das APIs](https://www.nutrient.io/api/)',
          },
          {
            'Opção': 'SDKs',
            'Como obter': 'Instalação por gerenciador de pacotes por plataforma, com uma chave de licença, por exemplo `@nutrient-sdk/viewer` no npm para Web; veja a [página de SDKs](https://www.nutrient.io/sdk/)',
          },
          {
            'Opção': 'Document Engine',
            'Como obter': 'Um contêiner comercial iniciado com uma chave de ativação, conforme o [guia de ativação do produto](https://www.nutrient.io/guides/document-engine/deployment/product-activation/)',
          },
          {
            'Opção': 'Site',
            'Como obter': '[nutrient.io](https://www.nutrient.io)',
          },
          {
            'Opção': 'Política de privacidade',
            'Como obter': '[Política de privacidade](https://www.nutrient.io/legal/privacy/)',
          },
          {
            'Opção': 'Código-fonte',
            'Como obter': 'Os SDKs são de código fechado; somente o wrapper e a documentação do conversor estão no [GitHub](https://github.com/PSPDFKit/pdf-to-markdown)',
          },
        ],
        note: 'Versões mais recentes verificadas em 17 de novembro de 2026: Web SDK 1.25.0 (2 de novembro de 2026), Document Engine 1.20.0 (29 de outubro de 2026), SDK .NET 14.4.12, SDK Java 2.1.14 e SDK Python 1.0.14 (todos em 15 de novembro de 2026), iOS 27.2.0 (11 de novembro de 2026) e Android 12.1.0 (10 de novembro de 2026), do [registro de alterações do Web SDK](https://www.nutrient.io/guides/web/changelog/) e dos registros dos outros SDKs. A versão mais recente do conversor no npm é a 0.6.0 (28 de setembro de 2026). A última atualização do projeto é de 15 de novembro de 2026. Todos os caminhos, exceto o aplicativo para macOS, exigem um terminal ou um ambiente de desenvolvimento.',
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados local, auto-hospedado e na nuvem',
        content: [
          '**O que fica na sua máquina depende do produto: o fornecedor diz que o conversor mantém os documentos no seu computador, enquanto as APIs hospedadas processam os arquivos nos servidores da Nutrient.** O [guia do conversor](https://www.nutrient.io/guides/dws-pdf-to-markdown/) diz que ele informa dados de uso, como o modo de conversão e o número de páginas, mas não nomes de arquivo, caminhos, conteúdos nem resultados, e que a conversão Standard funciona offline enquanto você não usar uma chave de API.',
          'Sobre o aplicativo para macOS, o fornecedor diz que os documentos não saem do Mac se o modelo de IA também rodar no Mac, e que uma chave da OpenAI ou da Anthropic conectada envia o conteúdo dos documentos a esse provedor; a Nutrient recebe registros de uso para cobrança.',
          'Para a API Processor hospedada, a [política de privacidade](https://www.nutrient.io/legal/privacy/) diz que os arquivos enviados são excluídos em até 24 horas nos planos sem retenção de dados. Nos planos com retenção ativada, diz que a Nutrient mantém os arquivos enviados e os resultados e os usa para melhorar seus serviços, inclusive para treinar e avaliar modelos de aprendizado de máquina. Verifique que tipo de plano você tem antes de enviar documentos sensíveis.',
          'Para o Document Engine auto-hospedado e os SDKs Web, .NET, Python e Java, a política diz que as licenças emitidas após 18 de março de 2025 (Document Engine) ou 20 de janeiro de 2026 (os quatro SDKs) coletam métricas de uso anonimizadas, enquanto as licenças mais antigas só podem ser medidas com consentimento explícito. Uma licença online do Document Engine autentica sua chave de ativação no Nutrient Portal na primeira inicialização, e também existe um tipo de licença offline.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'São afirmações do fornecedor, não resultados de auditoria. O PromptQuorum não inspecionou o tráfego de rede, os binários nem as condições contratuais.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem de páginas do fornecedor, da documentação dele ou do repositório do conversor; nenhum foi testado aqui.**',
        ],
        items: [
          '**Saída em Markdown e texto.** O conversor cria Markdown com títulos, listas, tabelas e ordem de leitura, ou texto simples que preserva colunas e espaçamento; o Standard serve para PDFs com texto, e o Vision é voltado a digitalizações, escrita à mão, fórmulas e layouts complexos.',
          '**Extração estruturada.** O produto Data Extraction, oferecido como API na nuvem e como SDK, é descrito como um serviço que devolve valores com caixas delimitadoras, rótulos de correspondência e pontuações de confiança conforme um esquema JSON que você define, como explica a [página do Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/).',
          '**OCR.** O Document Engine inclui OCR e gera arquivos PDF/A pesquisáveis, e o OCR do Web SDK exige o Document Engine; as páginas de OCR do fornecedor trazem números de idiomas diferentes, 30+ na [página do Web SDK](https://www.nutrient.io/guides/web/ocr/) e 120+ na [página do Document Engine](https://www.nutrient.io/guides/document-engine/ocr/).',
          '**Visualizar, editar e assinar no seu próprio aplicativo.** Os SDKs adicionam visualização, edição, assinatura, redação e extração de dados a softwares web, móveis e de servidor.',
          '**MCP.** O fornecedor lista um servidor MCP hospedado que exige uma conta da Nutrient, um servidor MCP para um Document Engine auto-hospedado e um [servidor MCP local do Web SDK](https://www.nutrient.io/guides/web/mcp-server/) que dá a agentes de código acesso à documentação do SDK por stdio sem conta; este último não analisa documentos.',
          '**Benchmarks.** O WholeDoc Bench do próprio fornecedor pontua parsers em texto, ordem de leitura, estrutura, tabelas, códigos de barras, gráficos e posição, e o README do conversor apresenta resultados da Nutrient frente ao Docling e ao pymupdf4llm. O PromptQuorum não reproduziu nenhum número.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Licença e preço',
        content: [
          '**O Nutrient é software comercial de código fechado, e o preço depende do produto: os SDKs são vendidos sob cotação, as APIs na nuvem são cobradas por uso com uma franquia mensal gratuita, e o modo Standard do conversor é gratuito.**',
          'As licenças de SDK são assinaturas anuais que incluem acesso, atualizações e suporte, com prazos plurianuais disponíveis, e a [página de preços dos SDKs](https://www.nutrient.io/sdk/pricing/) oferece uma avaliação de 30 dias sem dados de pagamento; nenhum preço de tabela é publicado. As APIs na nuvem são cobradas em dólares americanos por operação, página ou sessão, e a [visão geral de preços](https://www.nutrient.io/pricing/) indica 5 dólares americanos de uso gratuito por mês sem cartão de crédito.',
          'O conversor está sob a [Nutrient PDF to Markdown License](https://github.com/PSPDFKit/pdf-to-markdown/blob/main/LICENSE.md), proprietária: a conversão Standard e o comando query são gratuitos e sem limites, enquanto organizações com mais de 20 funcionários ou mais de 1.000.000 de dólares americanos de receita bruta anual ficam excluídas do acesso gratuito ao Vision e precisam comprá-lo. A licença também proíbe o uso concorrente e exige um acordo separado para fornecer o mecanismo dentro de produtos operados por clientes.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Velocidade e precisão.** Todos os números são do fornecedor; o PromptQuorum não mediu nenhum.',
          '**Fluxo de dados na prática.** As afirmações sobre processamento local, uso offline e telemetria vêm de documentos do fornecedor; não foram inspecionados tráfego de rede nem binários.',
          '**Modo Vision.** O README do conversor diz que o Vision roda localmente, enquanto o guia diz que o Vision exige login na Nutrient e é cobrado por página; esta análise não resolve a diferença.',
          '**Sede.** A página legal lista empresas em quatro países e não indica nenhuma como sede.',
          '**Preços dos SDKs.** Nenhum preço de tabela é publicado; as cotações dependem de produtos, plataformas e implantação.',
          '**Caixas delimitadoras.** As páginas consultadas descrevem coordenadas para o produto Data Extraction e não as mencionam para o conversor gratuito.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          {
            App: '[Docling](/pt/power-local-llm/docling-review)',
            Plataformas: 'Linux, Mac, Windows',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Biblioteca Python de código aberto que roda localmente; o Nutrient é de código fechado e mistura produtos locais e hospedados',
          },
          {
            App: '[Marker](/pt/power-local-llm/marker-review)',
            Plataformas: 'Linux, Mac, Windows',
            'Preço / licença': 'Freemium / código Apache-2.0',
            'Diferença principal': 'Parser Python cujo código é Apache-2.0, mas cujos pesos de modelo têm limites comerciais; o Nutrient é proprietário por inteiro',
          },
          {
            App: '[MinerU](/pt/power-local-llm/mineru-review)',
            Plataformas: 'Linux, Mac, Windows',
            'Preço / licença': 'Grátis / licença MinerU',
            'Diferença principal': 'Código disponível sob condições baseadas na Apache 2.0, com limites; o Nutrient cobra sob cotação ou por uso',
          },
          {
            App: '[OpenDataLoader PDF](/pt/power-local-llm/opendataloader-pdf-review)',
            Plataformas: 'Linux, Mac, Windows',
            'Preço / licença': 'Freemium / Apache-2.0',
            'Diferença principal': 'Parser de código aberto só para PDF que precisa de Java; o Nutrient acrescenta OCR, entrada do Office e SDKs em produtos pagos e hospedados',
          },
          {
            App: '[Stirling PDF](/pt/power-local-llm/stirling-pdf-review)',
            Plataformas: 'Windows, Mac, Linux, auto-hospedado',
            'Preço / licença': 'Freemium / MIT com exceções',
            'Diferença principal': 'Kit de ferramentas PDF open core para desktop e auto-hospedagem; o caminho auto-hospedado do Nutrient, o Document Engine, é comercial',
          },
        ],
        note: 'Confirme o preço, a licença e as plataformas atuais de cada ferramenta na própria página dela antes de escolher. A Nutrient publica por conta própria comparações com Docling e Unstructured; essas comparações são do fornecedor.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Nutrient é o mesmo que o PSPDFKit?',
            a: 'A página legal lista a PSPDFKit GmbH como uma empresa que atua como Nutrient, e PSPDFKit ainda aparece no nome do pacote e na organização do GitHub do conversor; as fontes consultadas não descrevem a mudança de nome em si.',
          },
          {
            q: 'Posso usar o conversor em um produto comercial?',
            a: 'Segundo a licença, a conversão Standard é gratuita para organizações de qualquer porte, inclusive dentro de seus próprios aplicativos e serviços hospedados, desde que o uso não concorra com as ofertas comerciais da Nutrient; fornecer o mecanismo a clientes em produtos que eles operam exige um acordo separado.',
          },
          {
            q: 'Preciso de uma conta da Nutrient para testar?',
            a: 'Não para o modo Standard do conversor, que não exige conta. O aplicativo para macOS e o modo Vision exigem login, e os SDKs oferecem uma avaliação de 30 dias.',
          },
          {
            q: 'Com que frequência os SDKs são atualizados?',
            a: 'Os registros de alterações mostram versões de novembro de 2026 para a maioria dos SDKs, enquanto as entradas mais recentes de Node.js, Flutter e React Native são de fevereiro, agosto e agosto de 2026.',
          },
          {
            q: 'Posso usar o conversor dentro de um agente de código?',
            a: 'O README descreve plugins para Claude Code, Codex e outras ferramentas de agentes que instalam o mesmo binário, de modo que um agente pode ler um PDF enquanto você trabalha.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: 'O Nutrient é uma plataforma PDF mantida e de código fechado, cujo conversor oferece um modo Standard gratuito para PDFs com texto, enquanto digitalizações, o aplicativo para macOS, a API Data Extraction, os SDKs e o Document Engine são pagos ou dependem de conta. Em contrapartida, seus benchmarks são próprios, suas afirmações sobre o fluxo de dados não foram testadas aqui, a licença do conversor é proprietária e a página legal não indica uma sede única. Serve para equipes que já licenciam SDKs de PDF ou querem um parser com suporte do fornecedor; para análise local de código aberto, compare o [Docling](/pt/power-local-llm/docling-review) ou o [Marker](/pt/power-local-llm/marker-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Página de SDKs do Nutrient](https://www.nutrient.io/sdk/) — plataformas e visão geral dos produtos, consultada em 17 de novembro de 2026.',
          '[Preços](https://www.nutrient.io/pricing/) e [preços dos SDKs](https://www.nutrient.io/sdk/pricing/) — modelo de licenciamento, franquia gratuita e avaliação, consultados em 17 de novembro de 2026.',
          '[Página legal](https://www.nutrient.io/legal/impressum/) e [política de privacidade](https://www.nutrient.io/legal/privacy/) — empresas, retenção de dados e métricas de uso, consultadas em 17 de novembro de 2026.',
          '[Registro de alterações do Web SDK](https://www.nutrient.io/guides/web/changelog/) e os dos outros SDKs, por exemplo o [registro do SDK Java](https://www.nutrient.io/guides/java/changelog/) — versões e datas de lançamento, consultados em 17 de novembro de 2026.',
          '[Guia do conversor de PDF para Markdown](https://www.nutrient.io/guides/dws-pdf-to-markdown/) e seu [repositório no GitHub](https://github.com/PSPDFKit/pdf-to-markdown) — modos, instalação, tratamento de dados e licença, consultados em 17 de novembro de 2026.',
          '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/) — o aplicativo para macOS e os recursos de Data Extraction, consultada em 17 de novembro de 2026.',
          '[OCR no Web SDK](https://www.nutrient.io/guides/web/ocr/) e [OCR no Document Engine](https://www.nutrient.io/guides/document-engine/ocr/) — escopo do OCR e idiomas, consultados em 17 de novembro de 2026.',
          '[Nutrient llms.txt](https://www.nutrient.io/llms.txt) — visão geral dos produtos do fornecedor, usada para os tipos de entrada do Data Extraction, os servidores MCP e as comparações do próprio fornecedor, consultada em 17 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Análise do Docling](/pt/power-local-llm/docling-review) — um parser de documentos de código aberto da IBM Research.',
          '[Análise do Marker](/pt/power-local-llm/marker-review) — um parser de PDF para Markdown com opção hospedada.',
          '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Análise do Nutrient: SDK de PDF comercial e conversor Markdown',
      description: 'Análise do Nutrient: SDKs de PDF comerciais, APIs na nuvem e uma CLI de PDF para Markdown com modo Standard gratuito. Fluxo de dados, preços publicados, benchmarks do fornecedor e o que as fontes deixam sem confirmação.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/nutrient-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-11-17',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'Desenvolvedores que avaliam um kit de ferramentas PDF comercial frente a parsers de código aberto para pipelines de RAG e de LLM',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Nutrient',
        },
        {
          '@type': 'Thing',
          name: 'Análise de PDF',
        },
        {
          '@type': 'Thing',
          name: 'Geração aumentada por recuperação (RAG)',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/pt/power-local-llm/nutrient-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/pt/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Análise do Nutrient',
          item: 'https://www.promptquorum.com/pt/power-local-llm/nutrient-review',
        },
      ],
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'RAG & Document Chat',
    heroImage: '/images/nutrient-review-hero-ar.webp',
    title: 'مراجعة Nutrient: حزمة تطوير PDF تجارية مع محوّل Markdown',
    seoTitle: 'مراجعة Nutrient: حزم PDF وواجهات سحابية وأداة CLI',
    intro: 'Nutrient مزوّد تجاري لبرمجيات PDF: حزم تطوير (SDK) مرخّصة للويب والجوال والخوادم، ومحرّك Document Engine يُستضاف ذاتيًا، وواجهات برمجية سحابية تُحاسَب حسب الاستخدام، وأداة سطر أوامر تحوّل PDF إلى Markdown وهي مجانية في وضع Standard. وهو ليس تطبيقًا واحدًا وليس مفتوح المصدر. تستند هذه المراجعة إلى موقع المزوّد ووثائقه وسجلات التغييرات وسياسة الخصوصية، وإلى مستودع المحوّل على GitHub، بتاريخ المراجعة 17 نوفمبر 2026؛ ولم يثبّت PromptQuorum أي منتج من Nutrient ولم يشغّله.',
    metaDescription: 'مراجعة Nutrient: حزم PDF وواجهات سحابية تجارية مع أداة CLI لتحويل PDF إلى Markdown بوضع Standard مجاني. ما يبقى محليًا، والتسعير، وما تتركه المصادر.',
    twitterDescription: 'مراجعة Nutrient: حزم PDF بتسعير عند الطلب وواجهات مستضافة وأداة CLI لتحويل PDF إلى Markdown بوضع Standard مجاني. تدفق البيانات والتسعير وما تتركه المصادر مفتوحًا.',
    audience: 'المطوّرون والفرق التي تبني خطوط PDF أو RAG وتريد معرفة ما يقدّمه Nutrient إلى جانب المحلّلات مفتوحة المصدر، وما يبقى على جهازها، وأي الادعاءات صادر عن المزوّد نفسه.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Nutrient',
    targetKeywords: [
      'مراجعة nutrient',
      'nutrient pdf sdk',
      'nutrient pdf to markdown cli',
      'nutrient document engine',
      'nutrient vs docling',
      'محلل pdf لـ rag',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Nutrient منصة PDF تجارية وليست تطبيقًا واحدًا: يمكن لحزم SDK المرخّصة والواجهات المستضافة ومحوّل سطر الأوامر أن تحوّل ملفات PDF إلى Markdown أو JSON لأغراض RAG، ووضع Standard وحده في المحوّل مجاني.** ويميّزه عن المحلّلات مفتوحة المصدر في هذه الفئة أن شيفرته مغلقة وأن ترخيصه يتم بعرض سعر.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستطيع Nutrient معالجة ملفات PDF لديّ دون إرسالها إلى سحابة؟',
        answer: 'جزئيًا. يقول المزوّد إن أداة CLI لتحويل PDF إلى Markdown تُبقي المستندات على حاسوبك وإن التحويل بوضع Standard يعمل دون اتصال مع ملفات PDF النصية، وإن تطبيق macOS يشغّل محرّك الاستخراج على جهاز Mac لديك. أما المستندات الممسوحة ضوئيًا فتتطلب وضع Vision الذي يستلزم تسجيل الدخول إلى Nutrient. وتعمل الواجهات المستضافة على خوادم Nutrient. هذه أقوال المزوّد؛ ولم يختبرها PromptQuorum ولم يفحص حركة الشبكة.',
        bullets: [
          'الإدخال: تقرأ أداة CLI ملفات PDF؛ وتقرأ واجهة Data Extraction السحابية أيضًا، بحسب المزوّد، المستندات الممسوحة والصور وملفات Office.',
          'الإخراج: Markdown أو نص عادي من أداة CLI؛ وJSON منظّم من واجهة Data Extraction.',
          'الترخيص: شيفرة مغلقة؛ أداة CLI بترخيص احتكاري، وحزم SDK تُرخَّص بعرض سعر.',
        ],
        updatedDate: '2026-11-17',
      },
    },
    toc: [
      {
        label: 'إجابة سريعة',
        anchor: 'quick-answer',
      },
      {
        label: 'ما هو Nutrient؟',
        anchor: 'what-is-nutrient',
      },
      {
        label: 'كيف تحصل عليه',
        anchor: 'get-it',
      },
      {
        label: 'تدفق البيانات المحلي والمستضاف ذاتيًا والسحابي',
        anchor: 'privacy',
      },
      {
        label: 'الميزات التي أكدتها المصادر',
        anchor: 'key-features',
      },
      {
        label: 'الترخيص والتسعير',
        anchor: 'pricing',
      },
      {
        label: 'ما لم نتمكن من التحقق منه',
        anchor: 'who-should-not-use',
      },
      {
        label: 'المنافسون والبدائل',
        anchor: 'vs-alternatives',
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: 'faq',
      },
      {
        label: 'الخلاصة',
        anchor: 'verdict',
      },
      {
        label: 'المصادر',
        anchor: 'sources',
      },
      {
        label: 'قراءات ذات صلة',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يبيع Nutrient برمجيات PDF للمطوّرين، من حزم SDK التي تضيف العرض والتحرير والتوقيع إلى تطبيق، إلى محوّل بوضع Standard مجاني يحوّل PDF إلى Markdown للنماذج اللغوية.',
          },
          {
            type: 'plain-terms',
            text: 'إما أن ترخّص حزمة SDK أو Document Engine وتدمجها في برمجياتك، أو تستدعي واجهات Nutrient المستضافة، أو تثبّت المحوّل وتشغّله على حاسوبك.',
          },
        ],
        items: [
          'الصيانة: أحدث إصدارات SDK، وهي .NET 14.4.12 وJava 2.1.14 وPython 1.0.14، صدرت في 15 نوفمبر 2026، لذا لا ينطبق تحذير المشروع المتوقف.',
          'النطاق: ثلاث عائلات منتجات، هي حزم SDK مع Document Engine وواجهات سحابية ومحوّل سطر أوامر؛ لذا تحقق من المنتج الذي يخصه كل قول.',
          'التقاطع مع المحلّلات مفتوحة المصدر: محوّل PDF إلى Markdown وواجهة Data Extraction؛ أما حزم SDK فتضيف العرض والتحرير والتوقيع والحجب إلى التطبيقات.',
          'التكلفة: ثلاثة نماذج تسعير، من وضع مجاني في المحوّل إلى تراخيص SDK بعرض سعر فقط؛ راجع الترخيص والتسعير.',
          'غير مؤكد: أرقام السرعة والدقة هي قياسات المزوّد نفسه، ولم يشغّل PromptQuorum أي منتج من Nutrient.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'جميع المعلومات مصدرها صفحات المزوّد ومستودع المحوّل. ولم يختبر PromptQuorum أداة Nutrient، لذا لا تُقيَّم هنا السرعة ولا الدقة ولا استهلاك الذاكرة.',
          },
        ],
      },
      overview: {
        id: 'what-is-nutrient',
        title: 'ما هو Nutrient؟',
        content: [
          '**يبيع Nutrient برمجيات لعرض ملفات PDF وتحريرها وتوقيعها وحجب أجزاء منها، وللتعرّف الضوئي على الحروف (OCR) واستخراج البيانات، بثلاث صيغ: حزم SDK مرخّصة مع Document Engine مستضاف ذاتيًا، وواجهات سحابية تُحاسَب حسب الاستخدام، ومحوّل سطر أوامر بوضع Standard مجاني.** بحسب [صفحة SDK](https://www.nutrient.io/sdk/) لدى المزوّد، تعمل حزم SDK على Web وiOS وAndroid وFlutter وReact Native وMAUI و.NET وPython وJava وNode.js.',
          'ما زال اسم PSPDFKit يظهر في [الصفحة القانونية](https://www.nutrient.io/legal/impressum/) لدى المزوّد، وفي اسم حزمة npm الخاصة بالمحوّل، وفي مؤسسته على GitHub. وتسرد الصفحة القانونية عدة شركات تعمل باسم Nutrient، بعناوين في الولايات المتحدة والنمسا وفرنسا والمملكة المتحدة؛ ولا تذكر المصادر أيّها المقر الرئيسي.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: 'كيف تحصل عليه',
        content: [
          '**ليس لدى Nutrient مثبّت واحد: أسهل طريق هو تطبيق macOS لأجهزة Apple silicon، وكل الطرق الأخرى تحتاج إلى طرفية أو بيئة تطوير.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          {
            'الخيار': 'تطبيق macOS (Apple silicon)',
            'مصدر الحصول عليه': '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/)، مثبّت DMG لنظام macOS Tahoe 26.4 أو أحدث؛ سجّل الدخول بحساب Nutrient مجاني؛ ويحتاج الاستخراج إلى نموذج ذكاء اصطناعي تربطه بنفسك',
          },
          {
            'الخيار': 'المحوّل (npm)',
            'مصدر الحصول عليه': '`npm install -g @pspdfkit/pdf-to-markdown`، بحسب [README](https://github.com/PSPDFKit/pdf-to-markdown)؛ يتطلب Node 18 أو أحدث على macOS 13+ (Apple silicon) أو Linux (glibc 2.38+) أو Windows (Git Bash)',
          },
          {
            'الخيار': 'الواجهات السحابية',
            'مصدر الحصول عليه': 'أنشئ حسابًا في Nutrient واستدعِ الواجهات المستضافة، بحسب [نظرة عامة على الواجهات](https://www.nutrient.io/api/)',
          },
          {
            'الخيار': 'حزم SDK',
            'مصدر الحصول عليه': 'تثبيت عبر مدير الحزم لكل منصة مع مفتاح ترخيص، مثل `@nutrient-sdk/viewer` على npm لـ Web؛ راجع [صفحة SDK](https://www.nutrient.io/sdk/)',
          },
          {
            'الخيار': 'Document Engine',
            'مصدر الحصول عليه': 'حاوية تجارية تُشغَّل بمفتاح تفعيل، بحسب [دليل تفعيل المنتج](https://www.nutrient.io/guides/document-engine/deployment/product-activation/)',
          },
          {
            'الخيار': 'الموقع الرسمي',
            'مصدر الحصول عليه': '[nutrient.io](https://www.nutrient.io)',
          },
          {
            'الخيار': 'سياسة الخصوصية',
            'مصدر الحصول عليه': '[سياسة الخصوصية](https://www.nutrient.io/legal/privacy/)',
          },
          {
            'الخيار': 'الشيفرة المصدرية',
            'مصدر الحصول عليه': 'حزم SDK مغلقة المصدر؛ والمتاح على [GitHub](https://github.com/PSPDFKit/pdf-to-markdown) هو غلاف المحوّل ووثائقه فقط',
          },
        ],
        note: 'أحدث الإصدارات التي روجعت في 17 نوفمبر 2026: Web SDK 1.25.0 (2 نوفمبر 2026) وDocument Engine 1.20.0 (29 أكتوبر 2026) و.NET SDK 14.4.12 وJava SDK 2.1.14 وPython SDK 1.0.14 (جميعها في 15 نوفمبر 2026) وiOS 27.2.0 (11 نوفمبر 2026) وAndroid 12.1.0 (10 نوفمبر 2026)، من [سجل تغييرات Web SDK](https://www.nutrient.io/guides/web/changelog/) وسجلات حزم SDK الأخرى. وأحدث إصدار للمحوّل على npm هو 0.6.0 (28 سبتمبر 2026). وآخر تحديث للمشروع في 15 نوفمبر 2026. تتطلب كل الطرق، عدا تطبيق macOS، طرفية أو بيئة تطوير.',
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات المحلي والمستضاف ذاتيًا والسحابي',
        content: [
          '**ما يبقى على جهازك يتوقف على المنتج: يقول المزوّد إن المحوّل يُبقي المستندات على حاسوبك، بينما تعالج الواجهات المستضافة الملفات على خوادم Nutrient.** يذكر [دليل المحوّل](https://www.nutrient.io/guides/dws-pdf-to-markdown/) أنه يُبلغ عن تفاصيل الاستخدام مثل وضع التحويل وعدد الصفحات، لكن لا يُبلغ عن أسماء الملفات أو مساراتها أو محتواها أو مخرجاتها، وأن التحويل بوضع Standard يعمل دون اتصال ما دمت لا تستخدم مفتاح API.',
          'وبخصوص تطبيق macOS، يقول المزوّد إن المستندات لا تغادر جهاز Mac إذا كان نموذج الذكاء الاصطناعي يعمل عليه أيضًا، وإن ربط مفتاح OpenAI أو Anthropic يرسل محتوى المستندات إلى ذلك المزوّد؛ وتتلقى Nutrient سجلات استخدام لأغراض الفوترة.',
          'أما بالنسبة لواجهة Processor المستضافة، فتذكر [سياسة الخصوصية](https://www.nutrient.io/legal/privacy/) أن الملفات المرفوعة تُحذف خلال 24 ساعة في الخطط التي لا تفعّل الاحتفاظ بالبيانات. وفي الخطط التي يكون فيها الاحتفاظ بالبيانات مفعّلًا، تذكر أن Nutrient تحتفظ بالملفات المقدَّمة والمخرجات وتستخدمها لتحسين خدماتها، بما في ذلك تدريب نماذج تعلّم الآلة وتقييمها. تحقّق من نوع خطتك قبل إرسال مستندات حساسة.',
          'وبالنسبة لـ Document Engine المستضاف ذاتيًا وحزم Web و.NET وPython وJava، تذكر السياسة أن التراخيص الصادرة بعد 18 مارس 2025 (Document Engine) أو بعد 20 يناير 2026 (حزم SDK الأربع) تجمع مقاييس استخدام مجهولة الهوية، بينما لا يمكن قياس التراخيص الأقدم إلا بموافقة صريحة. ويوثّق ترخيص Document Engine عبر الإنترنت مفتاح تفعيله لدى Nutrient Portal عند التشغيل الأول، ويوجد أيضًا نوع ترخيص يعمل دون اتصال.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه أقوال المزوّد وليست نتائج تدقيق. ولم يفحص PromptQuorum حركة الشبكة ولا الملفات التنفيذية ولا الشروط التعاقدية.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره صفحات المزوّد أو وثائقه أو مستودع المحوّل؛ ولم يُختبر أي منها هنا.**',
        ],
        items: [
          '**مخرجات Markdown ونص.** ينشئ المحوّل Markdown بعناوين وقوائم وجداول وترتيب قراءة، أو نصًا عاديًا يحافظ على الأعمدة والمسافات؛ ويناسب وضع Standard ملفات PDF النصية، بينما يستهدف وضع Vision المستندات الممسوحة ضوئيًا والكتابة اليدوية والمعادلات والتخطيطات المعقدة.',
          '**الاستخراج المنظّم.** يوصف منتج Data Extraction، المتاح كواجهة سحابية وكحزمة SDK، بأنه يعيد قيمًا مع مربعات إحاطة وعلامات مطابقة ودرجات ثقة وفق مخطط JSON تحدده أنت، كما توضح [صفحة Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/).',
          '**OCR.** يتضمن Document Engine خاصية OCR وينشئ ملفات PDF/A قابلة للبحث، ويتطلب OCR في Web SDK وجود Document Engine؛ وتذكر صفحات OCR لدى المزوّد أعدادًا مختلفة من اللغات، 30+ في [صفحة Web SDK](https://www.nutrient.io/guides/web/ocr/) و120+ في [صفحة Document Engine](https://www.nutrient.io/guides/document-engine/ocr/).',
          '**العرض والتحرير والتوقيع داخل تطبيقك.** تضيف حزم SDK العرض والتحرير والتوقيع والحجب واستخراج البيانات إلى برمجيات الويب والجوال والخوادم.',
          '**MCP.** يسرد المزوّد خادم MCP مستضافًا يتطلب حساب Nutrient، وخادم MCP لـ Document Engine المستضاف ذاتيًا، و[خادم MCP محليًا لـ Web SDK](https://www.nutrient.io/guides/web/mcp-server/) يمنح وكلاء البرمجة وصولًا إلى وثائق SDK عبر stdio دون حساب؛ والأخير لا يحلّل المستندات.',
          '**القياسات.** يقيّم WholeDoc Bench الخاص بالمزوّد المحلّلات في النص وترتيب القراءة والبنية والجداول والباركود والمخططات والموضع، ويعرض README الخاص بالمحوّل نتائج Nutrient مقارنةً بـ Docling وpymupdf4llm. ولم يعِد PromptQuorum إنتاج أي رقم.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'الترخيص والتسعير',
        content: [
          '**Nutrient برمجيات تجارية مغلقة المصدر، ويتوقف السعر على المنتج: تُباع حزم SDK بعرض سعر، وتُحاسَب الواجهات السحابية حسب الاستخدام مع حصة شهرية مجانية، ووضع Standard في المحوّل مجاني.**',
          'تراخيص SDK اشتراكات سنوية تشمل الوصول والتحديثات والدعم، مع إمكانية الاشتراك لعدة سنوات، وتقدّم [صفحة أسعار SDK](https://www.nutrient.io/sdk/pricing/) تقييمًا مدته 30 يومًا دون بيانات دفع؛ ولا يُنشر سعر قائمة. وتُسعَّر الواجهات السحابية بالدولار الأمريكي لكل عملية أو صفحة أو جلسة، وتذكر [نظرة الأسعار العامة](https://www.nutrient.io/pricing/) استخدامًا مجانيًا بقيمة 5 دولارات أمريكية شهريًا دون بطاقة ائتمان.',
          'يخضع المحوّل لترخيص [Nutrient PDF to Markdown License](https://github.com/PSPDFKit/pdf-to-markdown/blob/main/LICENSE.md) الاحتكاري: التحويل بوضع Standard وأمر query مجانيان دون حدود، بينما تُستثنى المؤسسات التي يزيد عدد موظفيها على 20 أو تتجاوز إيراداتها السنوية الإجمالية 1,000,000 دولار أمريكي من الوصول المجاني إلى Vision وعليها شراؤه. كما يمنع الترخيص الاستخدام التنافسي ويشترط اتفاقًا منفصلًا لتوريد المحرّك داخل منتجات يشغّلها العملاء.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**السرعة والدقة.** جميع الأرقام من المزوّد؛ ولم يقِس PromptQuorum أيًّا منها.',
          '**تدفق البيانات عمليًا.** الأقوال عن المعالجة المحلية والعمل دون اتصال والقياس عن بُعد مصدرها وثائق المزوّد؛ ولم تُفحص حركة الشبكة ولا الملفات التنفيذية.',
          '**وضع Vision.** يقول README الخاص بالمحوّل إن Vision يعمل محليًا، بينما يقول دليله إن Vision يتطلب تسجيل الدخول إلى Nutrient ويُحاسَب لكل صفحة؛ ولا تحسم هذه المراجعة الفرق.',
          '**المقر الرئيسي.** تسرد الصفحة القانونية شركات في أربع دول ولا تحدد إحداها مقرًا رئيسيًا.',
          '**أسعار SDK.** لا تُنشر أسعار قائمة؛ وتتوقف العروض على المنتجات والمنصات وطريقة النشر.',
          '**مربعات الإحاطة.** تصف الصفحات التي روجعت الإحداثيات لمنتج Data Extraction ولا تذكرها للمحوّل المجاني.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': '[Docling](/ar/power-local-llm/docling-review)',
            'المنصات': 'Linux وMac وWindows',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'مكتبة Python مفتوحة المصدر تعمل محليًا؛ أما Nutrient فمغلق المصدر ويجمع بين منتجات محلية ومستضافة',
          },
          {
            'التطبيق': '[Marker](/ar/power-local-llm/marker-review)',
            'المنصات': 'Linux وMac وWindows',
            'السعر / الترخيص': 'مجاني جزئيًا / شيفرة Apache-2.0',
            'الفرق الرئيسي': 'محلّل Python شيفرته Apache-2.0 لكن أوزان نماذجه عليها قيود تجارية؛ أما Nutrient فاحتكاري بالكامل',
          },
          {
            'التطبيق': '[MinerU](/ar/power-local-llm/mineru-review)',
            'المنصات': 'Linux وMac وWindows',
            'السعر / الترخيص': 'مجاني / ترخيص MinerU',
            'الفرق الرئيسي': 'شيفرة متاحة بشروط مبنية على Apache 2.0 مع عتبات؛ أما Nutrient فيحاسب بعرض سعر أو حسب الاستخدام',
          },
          {
            'التطبيق': '[OpenDataLoader PDF](/ar/power-local-llm/opendataloader-pdf-review)',
            'المنصات': 'Linux وMac وWindows',
            'السعر / الترخيص': 'مجاني جزئيًا / Apache-2.0',
            'الفرق الرئيسي': 'محلّل مفتوح المصدر لملفات PDF فقط ويحتاج إلى Java؛ ويضيف Nutrient OCR ومدخلات Office وحزم SDK في منتجاته المدفوعة والمستضافة',
          },
          {
            'التطبيق': '[Stirling PDF](/ar/power-local-llm/stirling-pdf-review)',
            'المنصات': 'Windows وMac وLinux ومستضاف ذاتيًا',
            'السعر / الترخيص': 'مجاني جزئيًا / MIT مع استثناءات',
            'الفرق الرئيسي': 'أدوات PDF بنموذج open core لسطح المكتب والاستضافة الذاتية؛ أما مسار Nutrient المستضاف ذاتيًا، Document Engine، فتجاري',
          },
        ],
        note: 'تأكد من السعر والترخيص والمنصات الحالية لكل أداة في صفحتها الخاصة قبل الاختيار. وتنشر Nutrient بنفسها مقارنات مع Docling وUnstructured؛ وهذه المقارنات من المزوّد.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Nutrient هو نفسه PSPDFKit؟',
            a: 'تسرد الصفحة القانونية PSPDFKit GmbH كشركة تعمل باسم Nutrient، وما زال PSPDFKit يظهر في اسم حزمة المحوّل وفي مؤسسته على GitHub؛ ولا تصف المصادر التي روجعت عملية تغيير الاسم نفسها.',
          },
          {
            q: 'هل يمكنني استخدام المحوّل في منتج تجاري؟',
            a: 'التحويل بوضع Standard مجاني بموجب الترخيص للمؤسسات من أي حجم، بما في ذلك داخل تطبيقاتك وخدماتك المستضافة، بشرط ألا يُنافس الاستخدام عروض Nutrient التجارية؛ أما توريد المحرّك إلى العملاء داخل منتجات يشغّلونها فيتطلب اتفاقًا منفصلًا.',
          },
          {
            q: 'هل أحتاج إلى حساب Nutrient للتجربة؟',
            a: 'لا لوضع Standard في المحوّل، فهو لا يتطلب حسابًا. أما تطبيق macOS ووضع Vision فيتطلبان تسجيل الدخول، وتقدّم حزم SDK تقييمًا مدته 30 يومًا.',
          },
          {
            q: 'ما مدى تكرار تحديث حزم SDK؟',
            a: 'تُظهر سجلات التغييرات إصدارات في نوفمبر 2026 لمعظم حزم SDK، بينما أحدث إدخالات Node.js وFlutter وReact Native تعود إلى فبراير وأغسطس وأغسطس 2026.',
          },
          {
            q: 'هل يمكنني استخدام المحوّل داخل وكيل برمجة؟',
            a: 'يصف README إضافات لـ Claude Code وCodex وأدوات وكلاء أخرى تثبّت الملف التنفيذي نفسه، بحيث يستطيع الوكيل قراءة ملف PDF أثناء عملك.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: 'Nutrient منصة PDF مغلقة المصدر ومحدَّثة باستمرار، يقدّم محوّلها وضع Standard مجانيًا لملفات PDF النصية، بينما المستندات الممسوحة وتطبيق macOS وواجهة Data Extraction وحزم SDK وDocument Engine إما مدفوعة أو مرتبطة بحساب. في المقابل، قياساته من إعداده، وأقواله عن تدفق البيانات لم تُختبر هنا، وترخيص محوّله احتكاري، وصفحته القانونية لا تحدد مقرًا رئيسيًا واحدًا. يناسب الفرق التي ترخّص حزم PDF بالفعل أو تريد محلّلًا يدعمه المزوّد؛ وللتحليل المحلي مفتوح المصدر قارن [Docling](/ar/power-local-llm/docling-review) أو [Marker](/ar/power-local-llm/marker-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[صفحة SDK من Nutrient](https://www.nutrient.io/sdk/) — المنصات ونظرة عامة على المنتجات، تاريخ المراجعة 17 نوفمبر 2026.',
          '[الأسعار](https://www.nutrient.io/pricing/) و[أسعار SDK](https://www.nutrient.io/sdk/pricing/) — نموذج الترخيص والحصة المجانية والتقييم، تاريخ المراجعة 17 نوفمبر 2026.',
          '[الصفحة القانونية](https://www.nutrient.io/legal/impressum/) و[سياسة الخصوصية](https://www.nutrient.io/legal/privacy/) — الشركات والاحتفاظ بالبيانات ومقاييس الاستخدام، تاريخ المراجعة 17 نوفمبر 2026.',
          '[سجل تغييرات Web SDK](https://www.nutrient.io/guides/web/changelog/) وسجلات حزم SDK الأخرى، مثل [سجل تغييرات Java SDK](https://www.nutrient.io/guides/java/changelog/) — الإصدارات وتواريخها، تاريخ المراجعة 17 نوفمبر 2026.',
          '[دليل محوّل PDF إلى Markdown](https://www.nutrient.io/guides/dws-pdf-to-markdown/) و[مستودعه على GitHub](https://github.com/PSPDFKit/pdf-to-markdown) — الأوضاع والتثبيت ومعالجة البيانات والترخيص، تاريخ المراجعة 17 نوفمبر 2026.',
          '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/) — تطبيق macOS وميزات Data Extraction، تاريخ المراجعة 17 نوفمبر 2026.',
          '[OCR في Web SDK](https://www.nutrient.io/guides/web/ocr/) و[OCR في Document Engine](https://www.nutrient.io/guides/document-engine/ocr/) — نطاق OCR واللغات، تاريخ المراجعة 17 نوفمبر 2026.',
          '[Nutrient llms.txt](https://www.nutrient.io/llms.txt) — نظرة المزوّد على منتجاته، استُخدمت لأنواع مدخلات Data Extraction وخوادم MCP ومقارنات المزوّد نفسه، تاريخ المراجعة 17 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Docling](/ar/power-local-llm/docling-review) — محلّل مستندات مفتوح المصدر من IBM Research.',
          '[مراجعة Marker](/ar/power-local-llm/marker-review) — محلّل من PDF إلى Markdown مع خيار مستضاف.',
          '[دليل برمجيات LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مراجعة Nutrient: حزمة تطوير PDF تجارية مع محوّل Markdown',
      description: 'مراجعة Nutrient: حزم PDF تجارية وواجهات سحابية وأداة CLI لتحويل PDF إلى Markdown بوضع Standard مجاني. تدفق البيانات والأسعار المنشورة وقياسات المزوّد وما تتركه المصادر غير مؤكد.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/nutrient-review',
      inLanguage: 'ar',
      datePublished: '2026-11-17',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'مطورون يقيّمون مجموعة أدوات PDF تجارية إلى جانب المحلّلات مفتوحة المصدر لخطوط RAG وLLM',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Nutrient',
        },
        {
          '@type': 'Thing',
          name: 'تحليل ملفات PDF',
        },
        {
          '@type': 'Thing',
          name: 'التوليد المعزز بالاسترجاع (RAG)',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/ar/power-local-llm/nutrient-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'الرئيسية',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/ar/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'مراجعة Nutrient',
          item: 'https://www.promptquorum.com/ar/power-local-llm/nutrient-review',
        },
      ],
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-17',
    theme: 'RAG & Document Chat',
    heroImage: '/images/nutrient-review-hero-ko.webp',
    title: 'Nutrient 리뷰: Markdown 변환기를 갖춘 상용 PDF SDK',
    seoTitle: 'Nutrient 리뷰: PDF SDK와 Markdown CLI',
    intro: 'Nutrient는 상용 PDF 소프트웨어 공급업체로, 웹·모바일·서버용 라이선스 SDK, 자체 호스팅 Document Engine, 사용량 기반 클라우드 API, PDF를 Markdown으로 바꿔 주는 명령줄 도구(Standard 모드는 무료)를 제공합니다. 단일 앱이 아니며 오픈소스도 아닙니다. 이 리뷰는 공급업체의 웹사이트, 문서, 변경 이력, 개인정보 처리방침과 변환기의 GitHub 저장소를 2026년 11월 17일에 확인한 내용을 기반으로 하며, PromptQuorum은 Nutrient 제품을 설치하거나 실행하지 않았습니다.',
    metaDescription: 'Nutrient 리뷰: 상용 PDF SDK와 클라우드 API, Standard 모드가 무료인 PDF-Markdown CLI. 로컬에 남는 것, 가격, 출처가 밝히지 않은 부분을 정리했습니다.',
    twitterDescription: 'Nutrient 리뷰: 견적제 PDF SDK, 호스팅 API, Standard 모드가 무료인 PDF-Markdown CLI. 데이터 흐름, 가격, 공급업체 자료가 밝히지 않은 부분.',
    audience: 'PDF나 RAG 파이프라인을 구축하며 오픈소스 파서와 비교한 Nutrient의 제공 범위, 내 컴퓨터에 남는 데이터, 공급업체 자체 주장이 무엇인지 알고 싶은 개발자와 팀.',
    readTime: '7분 읽기',
    educationalLevel: 'Advanced',
    affiliateDisclosure: false,
    primaryTerm: 'Nutrient 리뷰',
    targetKeywords: [
      'nutrient 리뷰',
      'nutrient pdf sdk',
      'nutrient pdf to markdown cli',
      'nutrient document engine',
      'nutrient vs docling',
      'rag용 pdf 파서',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock: '**Nutrient는 단일 앱이 아니라 상용 PDF 플랫폼입니다. 라이선스 SDK, 호스팅 API, 명령줄 변환기 모두 RAG용으로 PDF를 Markdown이나 JSON으로 바꿀 수 있으며, 변환기에서는 Standard 모드만 무료입니다.** 소스 코드가 비공개이고 라이선스가 견적제라는 점이 이 카테고리의 오픈소스 파서와 다른 부분입니다.',
    quickAnswerTop: {
      ko: {
        question: 'Nutrient는 PDF를 클라우드로 보내지 않고 처리할 수 있나요?',
        answer: '일부는 가능합니다. 공급업체에 따르면 PDF-Markdown CLI는 문서를 사용자의 컴퓨터에 두고, Standard 변환은 텍스트 기반 PDF에서 오프라인으로 동작하며, macOS 앱은 추출 엔진을 사용자의 Mac에서 실행합니다. 스캔 문서는 CLI에서 Vision 모드가 필요하며, Vision은 Nutrient 로그인이 필요합니다. 호스팅 API는 Nutrient의 서버에서 실행됩니다. 이는 공급업체의 설명이며, PromptQuorum은 이를 테스트하거나 네트워크 트래픽을 점검하지 않았습니다.',
        bullets: [
          '입력: CLI는 PDF를 읽고, 클라우드 Data Extraction API는 공급업체에 따르면 스캔 문서, 이미지, Office 파일도 읽습니다.',
          '출력: CLI는 Markdown 또는 일반 텍스트, Data Extraction API는 구조화된 JSON을 출력합니다.',
          '라이선스: 소스 비공개. CLI는 독점 라이선스이고 SDK는 견적에 따라 라이선스됩니다.',
        ],
        updatedDate: '2026-11-17',
      },
    },
    toc: [
      {
        label: '빠른 답변',
        anchor: 'quick-answer',
      },
      {
        label: 'Nutrient란?',
        anchor: 'what-is-nutrient',
      },
      {
        label: '설치 방법',
        anchor: 'get-it',
      },
      {
        label: '로컬·자체 호스팅·클라우드 데이터 흐름',
        anchor: 'privacy',
      },
      {
        label: '출처가 확인한 기능',
        anchor: 'key-features',
      },
      {
        label: '라이선스와 가격',
        anchor: 'pricing',
      },
      {
        label: '확인하지 못한 내용',
        anchor: 'who-should-not-use',
      },
      {
        label: '경쟁 앱과 대안',
        anchor: 'vs-alternatives',
      },
      {
        label: '자주 묻는 질문',
        anchor: 'faq',
      },
      {
        label: '총평',
        anchor: 'verdict',
      },
      {
        label: '출처',
        anchor: 'sources',
      },
      {
        label: '관련 글',
        anchor: 'related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Nutrient는 개발자를 위한 PDF 소프트웨어를 판매하며, 앱에 보기·편집·서명 기능을 더하는 SDK부터 언어 모델용으로 PDF를 Markdown으로 바꾸는 변환기(Standard 모드는 무료)까지 갖추고 있습니다.',
          },
          {
            type: 'plain-terms',
            text: 'SDK나 Document Engine의 라이선스를 받아 자체 소프트웨어에 넣거나, Nutrient의 호스팅 API를 호출하거나, 변환기를 설치해 내 컴퓨터에서 실행합니다.',
          },
        ],
        items: [
          '유지 관리: SDK 최신 릴리스(.NET 14.4.12, Java 2.1.14, Python 1.0.14)는 2026년 11월 15일에 나왔으므로 방치 프로젝트 경고는 해당하지 않습니다.',
          '범위: Document Engine을 포함한 SDK, 클라우드 API, 명령줄 변환기의 세 가지 제품군이 있으므로 각 설명이 어느 쪽에 해당하는지 확인해야 합니다.',
          '오픈소스 파서와 겹치는 부분: PDF-Markdown 변환기와 Data Extraction API이며, SDK는 앱에 보기·편집·서명·가림 기능을 더합니다.',
          '비용: 무료 변환기 모드부터 견적 전용 SDK 라이선스까지 세 가지 가격 체계가 있습니다. 라이선스와 가격 항목을 참고하세요.',
          '미확인: 속도와 정확도 수치는 공급업체 자체 벤치마크이며, PromptQuorum은 Nutrient 제품을 실행하지 않았습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '모든 정보는 공급업체의 페이지와 변환기 저장소에서 가져온 것입니다. PromptQuorum은 Nutrient를 테스트하지 않았으므로 속도, 정확도, 메모리 사용량은 평가하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-nutrient',
        title: 'Nutrient란?',
        content: [
          '**Nutrient는 PDF 보기, 편집, 서명, 가림, OCR, 데이터 추출용 소프트웨어를 세 가지 형태로 판매합니다. 자체 호스팅 Document Engine을 포함한 라이선스 SDK, 사용량 기반 클라우드 API, 명령줄 변환기(Standard 모드는 무료)입니다.** 공급업체의 [SDK 페이지](https://www.nutrient.io/sdk/)에 따르면 SDK는 Web, iOS, Android, Flutter, React Native, MAUI, .NET, Python, Java, Node.js에서 동작합니다.',
          'PSPDFKit이라는 이름은 공급업체의 [법적 고지 페이지](https://www.nutrient.io/legal/impressum/), 변환기의 npm 패키지 이름, GitHub 조직 이름에 여전히 남아 있습니다. 법적 고지 페이지에는 Nutrient라는 이름으로 사업하는 여러 회사가 미국, 오스트리아, 프랑스, 영국 주소와 함께 나열되어 있으며, 어느 곳이 본사인지는 출처에 나와 있지 않습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        itemHeadings: true,
        title: '설치 방법',
        content: [
          '**Nutrient에는 단일 설치 프로그램이 없습니다. 가장 쉬운 방법은 Apple silicon용 macOS 앱이고, 나머지 방법은 모두 터미널이나 개발 환경이 필요합니다.**',
        ],
        columns: ['옵션', '입수 방법'],
        rows: [
          {
            '옵션': 'macOS 앱(Apple silicon)',
            '입수 방법': '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/), macOS Tahoe 26.4 이상용 DMG 설치 프로그램. 무료 Nutrient 계정으로 로그인하며, 추출에는 직접 연결하는 AI 모델이 필요합니다',
          },
          {
            '옵션': '변환기(npm)',
            '입수 방법': '`npm install -g @pspdfkit/pdf-to-markdown`([README](https://github.com/PSPDFKit/pdf-to-markdown) 기준). macOS 13+(Apple silicon), Linux(glibc 2.38+), Windows(Git Bash)에서 Node 18 이상이 필요합니다',
          },
          {
            '옵션': '클라우드 API',
            '입수 방법': 'Nutrient 계정을 만들고 호스팅 API를 호출합니다([API 개요](https://www.nutrient.io/api/) 기준)',
          },
          {
            '옵션': 'SDK',
            '입수 방법': '플랫폼별로 패키지 관리자로 설치하고 라이선스 키를 사용합니다. 예: Web용 npm의 `@nutrient-sdk/viewer`. [SDK 페이지](https://www.nutrient.io/sdk/)를 참고하세요',
          },
          {
            '옵션': 'Document Engine',
            '입수 방법': '활성화 키로 시작하는 상용 컨테이너입니다([제품 활성화 가이드](https://www.nutrient.io/guides/document-engine/deployment/product-activation/) 기준)',
          },
          {
            '옵션': '웹사이트',
            '입수 방법': '[nutrient.io](https://www.nutrient.io)',
          },
          {
            '옵션': '개인정보 처리방침',
            '입수 방법': '[개인정보 처리방침](https://www.nutrient.io/legal/privacy/)',
          },
          {
            '옵션': '소스 코드',
            '입수 방법': 'SDK는 비공개 소스이며, 변환기의 래퍼와 문서만 [GitHub](https://github.com/PSPDFKit/pdf-to-markdown)에 있습니다',
          },
        ],
        note: '2026년 11월 17일에 확인한 최신 릴리스: Web SDK 1.25.0(2026년 11월 2일), Document Engine 1.20.0(2026년 10월 29일), .NET SDK 14.4.12·Java SDK 2.1.14·Python SDK 1.0.14(모두 2026년 11월 15일), iOS 27.2.0(2026년 11월 11일), Android 12.1.0(2026년 11월 10일). [Web SDK 변경 이력](https://www.nutrient.io/guides/web/changelog/)과 다른 SDK의 변경 이력을 근거로 했습니다. 변환기의 최신 npm 버전은 0.6.0(2026년 9월 28일)입니다. 업스트림 마지막 업데이트는 2026년 11월 15일입니다. macOS 앱을 제외한 모든 방법에는 터미널이나 개발 환경이 필요합니다.',
      },
      privacy: {
        id: 'privacy',
        title: '로컬·자체 호스팅·클라우드 데이터 흐름',
        content: [
          '**내 컴퓨터에 남는 것은 제품마다 다릅니다. 공급업체에 따르면 변환기는 문서를 사용자의 컴퓨터에 두고, 호스팅 API는 파일을 Nutrient의 서버에서 처리합니다.** [변환기 가이드](https://www.nutrient.io/guides/dws-pdf-to-markdown/)에 따르면 변환 모드와 페이지 수 같은 사용 정보는 보고하지만 파일 이름, 경로, 내용, 출력은 보고하지 않으며, Standard 변환은 API 키를 사용하지 않는 한 오프라인으로 동작합니다.',
          'macOS 앱에 대해 공급업체는 AI 모델도 Mac에서 실행되면 문서가 Mac을 벗어나지 않으며, 연결한 OpenAI 또는 Anthropic 키를 사용하면 문서 내용이 해당 제공업체로 전송된다고 설명합니다. Nutrient는 청구를 위한 사용 기록을 받습니다.',
          '호스팅 Processor API에 대해 [개인정보 처리방침](https://www.nutrient.io/legal/privacy/)은 데이터 보존이 켜져 있지 않은 요금제에서는 업로드된 파일이 24시간 이내에 삭제된다고 밝힙니다. 데이터 보존이 켜진 요금제에서는 Nutrient가 제출된 파일과 출력을 보관하고 머신러닝 모델의 학습·평가를 포함한 서비스 개선에 사용한다고 밝힙니다. 민감한 문서를 보내기 전에 어떤 요금제인지 확인하세요.',
          '자체 호스팅 Document Engine과 Web, .NET, Python, Java SDK에 대해 방침은 2025년 3월 18일 이후(Document Engine) 또는 2026년 1월 20일 이후(네 가지 SDK)에 발급된 라이선스는 익명화된 사용 지표를 수집하고, 그 이전 라이선스는 명시적 동의가 있을 때만 측정할 수 있다고 밝힙니다. 온라인 Document Engine 라이선스는 첫 시작 시 활성화 키를 Nutrient Portal에서 인증하며, 오프라인 라이선스 유형도 있습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 공급업체의 설명이며 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽, 바이너리, 계약 조건을 점검하지 않았습니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처가 확인한 기능',
        content: ['**아래 항목은 모두 공급업체의 페이지, 문서, 변환기 저장소에서 가져온 것이며 여기서 직접 테스트한 것은 없습니다.**'],
        items: [
          '**Markdown 및 텍스트 출력.** 변환기는 제목, 목록, 표, 읽기 순서를 담은 Markdown 또는 열과 간격을 유지하는 일반 텍스트를 만듭니다. Standard는 텍스트 기반 PDF에, Vision은 스캔 문서, 손글씨, 수식, 복잡한 레이아웃에 맞춰져 있습니다.',
          '**구조화 추출.** 클라우드 API와 SDK로 제공되는 Data Extraction은 사용자가 정의한 JSON 스키마에 따라 경계 상자, 일치 라벨, 신뢰도 점수가 붙은 값을 반환한다고 설명됩니다([Extract Studio 페이지](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/) 기준).',
          '**OCR.** Document Engine에는 OCR이 포함되어 검색 가능한 PDF/A 파일을 생성하며, Web SDK의 OCR에는 Document Engine이 필요합니다. 공급업체의 OCR 페이지는 언어 수를 다르게 적고 있어, [Web SDK 페이지](https://www.nutrient.io/guides/web/ocr/)는 30개 이상, [Document Engine 페이지](https://www.nutrient.io/guides/document-engine/ocr/)는 120개 이상입니다.',
          '**자체 앱에서 보기·편집·서명.** SDK는 웹, 모바일, 서버 소프트웨어에 보기, 편집, 서명, 가림, 데이터 추출 기능을 더합니다.',
          '**MCP.** 공급업체는 Nutrient 계정이 필요한 호스팅 MCP 서버, 자체 호스팅 Document Engine용 MCP 서버, 계정 없이 stdio로 코딩 에이전트에 SDK 문서 접근을 제공하는 로컬 [Web SDK MCP 서버](https://www.nutrient.io/guides/web/mcp-server/)를 나열합니다. 마지막 것은 문서를 파싱하지 않습니다.',
          '**벤치마크.** 공급업체 자체의 WholeDoc Bench는 텍스트, 읽기 순서, 구조, 표, 바코드, 차트, 위치로 파서를 평가하고, 변환기의 README는 Docling, pymupdf4llm과 비교한 Nutrient의 결과를 싣고 있습니다. PromptQuorum은 어떤 수치도 재현하지 않았습니다.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: '라이선스와 가격',
        content: [
          '**Nutrient는 비공개 소스 상용 소프트웨어이며 가격은 제품마다 다릅니다. SDK는 견적제, 클라우드 API는 월 무료 사용량이 있는 사용량 기반, 변환기의 Standard 모드는 무료입니다.**',
          'SDK 라이선스는 접근, 업데이트, 지원이 포함된 연간 구독이며 다년 계약도 가능하고, [SDK 가격 페이지](https://www.nutrient.io/sdk/pricing/)는 결제 정보 없이 30일 평가를 제공합니다. 정가는 공개되어 있지 않습니다. 클라우드 API는 작업, 페이지, 세션당 미국 달러로 가격이 매겨지며, [가격 개요](https://www.nutrient.io/pricing/)는 신용카드 없이 매월 5달러(USD)의 무료 사용량을 제시합니다.',
          '변환기는 독점 [Nutrient PDF to Markdown License](https://github.com/PSPDFKit/pdf-to-markdown/blob/main/LICENSE.md)를 따릅니다. Standard 변환과 query 명령은 제한 없이 무료이지만, 직원이 20명을 넘거나 연간 총매출이 1,000,000달러(USD)를 넘는 조직은 Vision 무료 이용에서 제외되어 구매해야 합니다. 라이선스는 경쟁 목적의 사용도 금지하며, 고객이 운영하는 제품 안에 엔진을 공급하려면 별도 계약이 필요하다고 규정합니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**속도와 정확도.** 모든 수치는 공급업체의 것이며 PromptQuorum은 어느 것도 측정하지 않았습니다.',
          '**실제 데이터 흐름.** 로컬 처리, 오프라인 사용, 텔레메트리에 관한 설명은 공급업체 문서에서 나온 것이며, 네트워크 트래픽이나 바이너리는 점검하지 않았습니다.',
          '**Vision 모드.** 변환기의 README는 Vision이 로컬에서 실행된다고 하지만 가이드는 Vision에 Nutrient 로그인이 필요하고 페이지 단위로 과금된다고 하며, 이 리뷰는 그 차이를 해소하지 못했습니다.',
          '**본사.** 법적 고지 페이지에는 네 나라의 회사가 나열되어 있지만 어느 곳이 본사인지는 밝히지 않습니다.',
          '**SDK 가격.** 정가는 공개되어 있지 않으며 견적은 제품, 플랫폼, 배포 방식에 따라 달라집니다.',
          '**경계 상자.** 확인한 페이지는 Data Extraction 제품에 대해서만 좌표를 설명하고, 무료 변환기에 대해서는 언급하지 않습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          {
            '앱': '[Docling](/ko/power-local-llm/docling-review)',
            '플랫폼': 'Linux, Mac, Windows',
            '가격 / 라이선스': '무료 / MIT',
            '핵심 차이': '로컬에서 실행되는 오픈소스 Python 라이브러리. Nutrient는 비공개 소스이며 로컬과 호스팅 제품이 섞여 있음',
          },
          {
            '앱': '[Marker](/ko/power-local-llm/marker-review)',
            '플랫폼': 'Linux, Mac, Windows',
            '가격 / 라이선스': '프리미엄 / 코드 Apache-2.0',
            '핵심 차이': '코드는 Apache-2.0이지만 모델 가중치에 상업적 제한이 있는 Python 파서. Nutrient는 전체가 독점',
          },
          {
            '앱': '[MinerU](/ko/power-local-llm/mineru-review)',
            '플랫폼': 'Linux, Mac, Windows',
            '가격 / 라이선스': '무료 / MinerU 라이선스',
            '핵심 차이': 'Apache 2.0 기반에 기준치가 붙은 조건의 소스 공개. Nutrient는 견적 또는 사용량 기준 과금',
          },
          {
            '앱': '[OpenDataLoader PDF](/ko/power-local-llm/opendataloader-pdf-review)',
            '플랫폼': 'Linux, Mac, Windows',
            '가격 / 라이선스': '프리미엄 / Apache-2.0',
            '핵심 차이': 'Java가 필요한 PDF 전용 오픈소스 파서. Nutrient는 유료·호스팅 제품에서 OCR, Office 입력, SDK를 추가',
          },
          {
            '앱': '[Stirling PDF](/ko/power-local-llm/stirling-pdf-review)',
            '플랫폼': 'Windows, Mac, Linux, 자체 호스팅',
            '가격 / 라이선스': '프리미엄 / 예외 있는 MIT',
            '핵심 차이': '데스크톱과 자체 호스팅용 오픈코어 PDF 도구 모음. Nutrient의 자체 호스팅 방식인 Document Engine은 상용',
          },
        ],
        note: '선택하기 전에 각 도구의 현재 가격, 라이선스, 플랫폼을 해당 도구의 페이지에서 확인하세요. Nutrient는 Docling, Unstructured와의 비교를 자체 공개하며, 그 비교는 공급업체의 것입니다.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Nutrient는 PSPDFKit과 같은 것인가요?',
            a: '법적 고지 페이지는 PSPDFKit GmbH를 Nutrient라는 이름으로 사업하는 회사로 나열하며, PSPDFKit은 변환기의 패키지 이름과 GitHub 조직에도 남아 있습니다. 확인한 출처는 이름 변경 자체를 설명하지 않습니다.',
          },
          {
            q: '변환기를 상용 제품에서 사용할 수 있나요?',
            a: '라이선스에 따르면 Standard 변환은 모든 규모의 조직에 무료이며, 자체 애플리케이션과 호스팅 서비스 안에서도 사용할 수 있지만, Nutrient의 상용 제품과 경쟁하는 용도는 제외됩니다. 고객이 운영하는 제품에 엔진을 공급하려면 별도 계약이 필요합니다.',
          },
          {
            q: '써 보려면 Nutrient 계정이 필요한가요?',
            a: '변환기의 Standard 모드에는 계정이 필요 없습니다. macOS 앱과 Vision 모드에는 로그인이 필요하고, SDK는 30일 평가를 제공합니다.',
          },
          {
            q: 'SDK는 얼마나 자주 업데이트되나요?',
            a: '변경 이력을 보면 대부분의 SDK에 2026년 11월 릴리스가 있지만, Node.js, Flutter, React Native의 최신 항목은 각각 2026년 2월, 8월, 8월의 것입니다.',
          },
          {
            q: '코딩 에이전트 안에서 변환기를 쓸 수 있나요?',
            a: 'README는 Claude Code, Codex 등 에이전트 도구용 플러그인이 같은 바이너리를 설치한다고 설명하므로, 작업하는 동안 에이전트가 PDF를 읽을 수 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: 'Nutrient는 꾸준히 관리되는 비공개 소스 PDF 플랫폼으로, 변환기의 Standard 모드는 텍스트 기반 PDF에 무료이고, 스캔 문서, macOS 앱, Data Extraction API, SDK, Document Engine은 유료이거나 계정이 필요합니다. 반대로 벤치마크는 자체 것이고, 데이터 흐름에 관한 설명은 여기서 검증하지 않았으며, 변환기 라이선스는 독점이고, 법적 고지 페이지는 단일 본사를 밝히지 않습니다. 이미 PDF SDK 라이선스를 쓰는 팀이나 공급업체 지원이 있는 파서를 원하는 팀에 맞습니다. 오픈소스 로컬 파싱이 목적이라면 [Docling](/ko/power-local-llm/docling-review)이나 [Marker](/ko/power-local-llm/marker-review)와 비교해 보세요.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Nutrient SDK 페이지](https://www.nutrient.io/sdk/) — 플랫폼과 제품 개요(2026-11-17 조회).',
          '[가격](https://www.nutrient.io/pricing/) 및 [SDK 가격](https://www.nutrient.io/sdk/pricing/) — 라이선스 모델, 무료 사용량, 평가(2026-11-17 조회).',
          '[법적 고지 페이지](https://www.nutrient.io/legal/impressum/) 및 [개인정보 처리방침](https://www.nutrient.io/legal/privacy/) — 회사, 데이터 보존, 사용 지표(2026-11-17 조회).',
          '[Web SDK 변경 이력](https://www.nutrient.io/guides/web/changelog/) 및 다른 SDK의 변경 이력(예: [Java SDK 변경 이력](https://www.nutrient.io/guides/java/changelog/)) — 버전과 릴리스 날짜(2026-11-17 조회).',
          '[PDF-Markdown 변환기 가이드](https://www.nutrient.io/guides/dws-pdf-to-markdown/) 및 [GitHub 저장소](https://github.com/PSPDFKit/pdf-to-markdown) — 모드, 설치, 데이터 처리, 라이선스(2026-11-17 조회).',
          '[Nutrient Extract Studio](https://www.nutrient.io/api/data-extraction-api/macos-desktop-app/) — macOS 앱과 Data Extraction 기능(2026-11-17 조회).',
          '[Web SDK의 OCR](https://www.nutrient.io/guides/web/ocr/) 및 [Document Engine의 OCR](https://www.nutrient.io/guides/document-engine/ocr/) — OCR 범위와 언어(2026-11-17 조회).',
          '[Nutrient llms.txt](https://www.nutrient.io/llms.txt) — 공급업체의 제품 개요로, Data Extraction 입력 형식, MCP 서버, 공급업체 자체 비교에 사용했습니다(2026-11-17 조회).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Docling 리뷰](/ko/power-local-llm/docling-review) — IBM Research의 오픈소스 문서 파서.',
          '[Marker 리뷰](/ko/power-local-llm/marker-review) — 호스팅 옵션이 있는 PDF-Markdown 파서.',
          '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Nutrient 리뷰: Markdown 변환기를 갖춘 상용 PDF SDK',
      description: 'Nutrient 리뷰: 상용 PDF SDK, 클라우드 API, Standard 모드가 무료인 PDF-Markdown CLI. 데이터 흐름, 공개된 가격, 공급업체 벤치마크, 출처가 확인하지 못한 부분.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/nutrient-review',
      inLanguage: 'ko',
      datePublished: '2026-11-17',
      dateModified: '2026-11-17',
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      educationalLevel: 'Advanced',
      proficiencyLevel: 'Advanced',
      audience: {
        '@type': 'Audience',
        audienceType: 'RAG 및 LLM 파이프라인을 위해 오픈소스 파서와 함께 상용 PDF 툴킷을 평가하는 개발자',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Nutrient',
        },
        {
          '@type': 'Thing',
          name: 'PDF 파싱',
        },
        {
          '@type': 'Thing',
          name: '검색 증강 생성(RAG)',
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.promptquorum.com/ko/power-local-llm/nutrient-review',
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '홈',
          item: 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/ko/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Nutrient 리뷰',
          item: 'https://www.promptquorum.com/ko/power-local-llm/nutrient-review',
        },
      ],
    },
  },
}
