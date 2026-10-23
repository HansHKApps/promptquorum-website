// OpenRAG Review: Open-Source Agentic RAG Platform
// Slug: openrag-review
// Companion to: langflow-visual-ai-orchestration-review, ragflow-document-understanding-rag-review, anythingllm-review, dify-ai-workflow-builder-review
// Sources: docs.openr.ag (what-is-openrag, quickstart, install-options, troubleshoot, configuration reference), openr.ag and the
// langflow-ai/openrag GitHub repository with its v0.8.0 release page, all checked 2026-10-23 — no hands-on testing. The project
// lists no prices, so there is no currency to localise.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'RAG & Document Chat',
    heroImage: '/images/openrag-review-hero-en.webp',
    title: 'OpenRAG Review: Open-Source Agentic RAG Platform',
    seoTitle: 'OpenRAG Review: Open-Source Agentic RAG Platform',
    intro:
      'OpenRAG is an open-source package that wires Langflow, OpenSearch and Docling together so you can upload documents, search them and chat with them in a browser. It is started from a terminal and runs as containers, so it is aimed at developers. This review reflects its documentation, website and GitHub release page as checked on 23 October 2026.',
    metaDescription:
      'OpenRAG review: Apache-2.0 RAG platform that bundles Langflow, OpenSearch and Docling. Install steps, requirements, data flow and what we could not verify.',
    twitterDescription:
      'OpenRAG review: an Apache-2.0 agentic RAG stack started with one uvx command. Requirements, data flow and open questions.',
    audience:
      'Developers and technical teams weighing a ready-wired RAG stack for their own documents, who need to know what it installs, what it demands and what the sources do not confirm.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenRAG review',
    targetKeywords: [
      'openrag review',
      'open source rag platform',
      'langflow opensearch docling',
      'agentic rag self-hosted',
      'chat with documents self-hosted',
      'openrag install',
    ],
    current_hardware_mentioned: ['Mac', 'Linux PC', 'Windows PC with WSL'],
    leadAnswerBlock:
      '**OpenRAG (version 0.8.0, released 1 October 2026) is a free, Apache-2.0 platform that bundles Langflow, OpenSearch and Docling so you can upload documents and chat with them through a web interface.** It runs as containers started from a terminal, which makes it a developer tool rather than a double-click app. PromptQuorum has not installed or tested it; every statement here comes from the project\'s own documentation.',
    quickAnswerTop: {
      en: {
        question: 'Is OpenRAG a local, private RAG app?',
        answer:
          'Partly. Per the docs, Docling parses your files and OpenSearch stores them in containers you run yourself, but the quickstart uses an OpenAI API key, so prompts and document excerpts go to OpenAI unless you pick a local Ollama model.',
        bullets: [
          'Built-in flows can be edited in the embedded Langflow visual editor.',
          'Ingests local files and, through OAuth connectors, cloud storage.',
          'OpenSearch adds hybrid search and multi-tenancy.',
          'Python and TypeScript SDKs let your own code call it.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is OpenRAG?', anchor: 'what-is-openrag' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'How to Get Started', anchor: 'getting-started' },
      { label: 'Features Confirmed by the Sources', anchor: 'key-features' },
      { label: 'Data Flow and Access', anchor: 'privacy' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
      { label: 'Competitors and Alternatives', anchor: 'vs-alternatives' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenRAG is an Apache-2.0 package that starts a ready-made RAG stack for your documents with one uvx command.',
          },
          {
            type: 'plain-terms',
            text: 'You run a terminal installer, it launches a few containers, and you then upload files and ask questions in a browser chat.',
          },
        ],
        items: [
          'Maintenance: v0.8.0 was published on 1 October 2026 and the repository changed again on 23 October 2026, so no stale-project warning applies.',
          'License: Apache-2.0, with the source on GitHub under the langflow-ai organization.',
          'Cost: the package has no price; your costs are hardware and any model API you connect.',
          'Windows: supported only inside the Windows Subsystem for Linux.',
          'Weight: it is container-based and disk-hungry, so it suits a dev machine or server more than a light laptop.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the OpenRAG documentation, website and GitHub release page, checked on 23 October 2026. PromptQuorum has not installed, tested or benchmarked the software.',
          },
        ],
      },
      overview: {
        id: 'what-is-openrag',
        title: 'What Is OpenRAG?',
        content: [
          '**OpenRAG is a retrieval-augmented generation platform in which you add documents to a knowledge base and ask an AI agent questions about them in a chat interface.** The project describes it as an open-source package for building agentic RAG systems that combines three existing projects: Langflow for agent flows, OpenSearch for document and vector storage, and Docling for parsing and chunking files.',
          'It is developed in the [langflow-ai/openrag](https://github.com/langflow-ai/openrag) repository, with a FastAPI backend and a Next.js frontend. Its documentation lives at [docs.openr.ag](https://docs.openr.ag).',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**OpenRAG is not a downloadable desktop app: you install it from a terminal with uv, and it then starts its own containers.**',
        ],
        columns: ['Option', 'How to get it'],
        rows: [
          { 'Option': 'Quickstart (macOS, Linux)', 'How to get it': 'Run uvx --python 3.13 openrag in an empty folder' },
          { 'Option': 'Windows', 'How to get it': 'Same command, but only inside WSL (see Requirements)' },
          { 'Option': 'Python project', 'How to get it': 'Add it as a dependency with uv, per the [install options](https://docs.openr.ag/install-options)' },
          { 'Option': 'Self-managed', 'How to get it': 'Docker or Podman with your own .env file, per the [Docker guide](https://docs.openr.ag/docker)' },
          { 'Option': 'Website', 'How to get it': '[openr.ag](https://www.openr.ag)' },
          { 'Option': 'Documentation', 'How to get it': '[docs.openr.ag](https://docs.openr.ag)' },
          { 'Option': 'Source code', 'How to get it': '[github.com/langflow-ai/openrag](https://github.com/langflow-ai/openrag)' },
          { 'Option': 'Privacy policy', 'How to get it': 'No own page found; the docs cite [IBM\'s privacy statement](https://www.ibm.com/privacy)' },
        ],
        note: 'Version reviewed: v0.8.0, published on 1 October 2026 per the [GitHub release page](https://github.com/langflow-ai/openrag/releases); the repository itself was last updated on 23 October 2026. The release ships only a Python wheel and source archive, with no installer or desktop build, so a terminal and a developer environment are required.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**The docs ask for a container runtime, 8 GB of RAM and more than 50 GB of free disk space.**',
        ],
        columns: ['Item', 'What the docs say'],
        rows: [
          { 'Item': 'Python and uv', 'What the docs say': 'Python 3.13 and uv, per the quickstart' },
          { 'Item': 'Container runtime', 'What the docs say': 'Docker or Podman plus a compose tool; uvx installs one if missing' },
          { 'Item': 'RAM', 'What the docs say': '8 GB is the minimum recommended' },
          { 'Item': 'Disk', 'What the docs say': 'More than 50 GB free for onboarding and ingestion' },
          { 'Item': 'Windows', 'What the docs say': 'Inside WSL only; not on a WSL distro in a Windows VM' },
          { 'Item': 'Local models', 'What the docs say': 'gpt-oss:20b via Ollama needs at least 16 GB of RAM' },
        ],
        note: 'The pages checked state no GPU requirement for OpenRAG itself, only that Ollama must run in a GPU-enabled container to use a GPU.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**The steps follow the project\'s quickstart; PromptQuorum has not run them.**',
        ],
        numberedItems: [
          {
            title: 'Create a workspace folder',
            whyItMatters: 'Make an empty directory such as openrag-workspace and open a terminal in it.',
          },
          {
            title: 'Start the installer',
            whyItMatters: 'Run uvx --python 3.13 openrag, which opens a terminal interface.',
          },
          {
            title: 'Set the admin passwords',
            whyItMatters: 'Autogenerate or enter the OpenSearch and Langflow admin passwords; skip the other prompts to keep the defaults.',
          },
          {
            title: 'Start the services',
            whyItMatters: 'Answer Y to "Start services now?" and wait for the "Services are running" message, then open OpenRAG in the browser.',
          },
          {
            title: 'Complete onboarding',
            whyItMatters: 'Choose a model provider, enter its API key and click Complete; the quickstart uses OpenAI.',
          },
          {
            title: 'Add knowledge and chat',
            whyItMatters: 'Upload files or folders, then ask questions in the chat view.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the project\'s documentation or README.**',
        ],
        items: [
          '**Editable flows.** Built-in agent flows can be customised in the embedded Langflow editor, including swapping models or components, and custom Langflow components and MCP servers are supported.',
          '**Document ingestion.** Files come from your local filesystem or from OAuth-authorised cloud storage connectors; Docling Serve parses and chunks them.',
          '**Search.** OpenSearch stores documents and embeddings and adds hybrid search and multi-tenancy.',
          '**SDKs and API.** Official Python and TypeScript SDKs are published as openrag-sdk, and the docs include an API reference.',
          '**Observability.** Tracing to Langfuse and the IBM Instana tracer are optional and switched off by default.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Flow and Access',
        content: [
          '**Per the docs, Docling Serve processes your documents locally and OpenSearch stores them in your own knowledge base; cloud sources load only through connectors you authorise.** The architecture is containers: a backend, Langflow, Docling Serve, the connectors and a frontend.',
          'OpenAI is the default model provider, so with it your prompts and the retrieved document excerpts go to OpenAI under its own policy. The configuration reference also lists Anthropic, Ollama and IBM watsonx.ai, which lets you route to a local Ollama endpoint instead. If no Langflow superuser password is set, Langflow starts without authentication, which is why the docs recommend setting one.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The local-processing statement is the project\'s own description; PromptQuorum has not audited the containers or their network traffic. The terminal\'s upgrade check queries the Docker Hub API unless the image registry is changed.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Developers who want a pre-wired RAG stack** instead of assembling Langflow, OpenSearch and Docling themselves.',
          '**Teams that already run containers** and want hybrid search with multi-tenancy over their own files.',
          '**Builders who need an API or SDK** to call a document-search agent from their own application.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality.** PromptQuorum did not run the software, so answer quality, citation accuracy, ingestion speed and stability are not assessed.',
          '**Telemetry.** The pages checked document no analytics or opt-out setting for the containers.',
          '**Privacy policy.** No OpenRAG-specific policy page was found; the docs page only references IBM\'s general privacy statement.',
          '**Local-only operation.** The docs describe Ollama support, but the quickstart was only documented with OpenAI, so a fully offline setup is untested.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Langflow](/power-local-llm/langflow-visual-ai-orchestration-review)', 'Platforms': 'Web', 'Price / license': 'Free / MIT', 'Key difference': 'The visual flow builder that OpenRAG embeds, without the bundled search stack' },
          { 'App': '[RAGFlow](/power-local-llm/ragflow-document-understanding-rag-review)', 'Platforms': 'Linux, web', 'Price / license': 'Free / Apache 2.0', 'Key difference': 'RAG engine centred on deep document understanding and citations' },
          { 'App': '[AnythingLLM](/power-local-llm/anythingllm-review)', 'Platforms': 'Windows, macOS, Linux, web', 'Price / license': 'Free / MIT', 'Key difference': 'Installable desktop app with a built-in vector store, no containers' },
          { 'App': '[Dify](/power-local-llm/dify-ai-workflow-builder-review)', 'Platforms': 'Web, Linux', 'Price / license': 'Freemium / modified Apache 2.0', 'Key difference': 'Broader AI workflow and agent builder with RAG as one part' },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Which Ollama models does OpenRAG recommend?',
            a: 'The docs suggest gpt-oss:20b or mistral-nemo:12b for language and nomic-embed-text, mxbai-embed-large or embeddinggemma for embeddings. Chat models must support tool calling, and the docs do not guarantee every Ollama model works.',
          },
          {
            q: 'Which ports does it use?',
            a: 'By default 3000 for the frontend, 7860 for Langflow, 8000 for the backend, 9200 for OpenSearch, 5601 for OpenSearch Dashboards and 5001 for Docling. Frontend and Langflow ports can be changed in the .env file.',
          },
          {
            q: 'Which cloud storage can it ingest from?',
            a: 'The configuration reference describes Google Drive through Google OAuth, SharePoint and OneDrive through a Microsoft Graph app registration, and AWS S3 through access keys.',
          },
          {
            q: 'How do I call it from my own code?',
            a: 'Install the Python SDK with pip install openrag-sdk or the TypeScript SDK with npm install openrag-sdk. The older standalone openrag-mcp package is deprecated.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'OpenRAG is a free, Apache-2.0 RAG stack that, per its documentation, ships Langflow, OpenSearch and Docling already connected and is actively updated, with a release in early October 2026 and commits through 23 October. Against that, it is heavy to run, supports Windows only through WSL, defaults to OpenAI, and PromptQuorum could not verify its quality, telemetry or fully offline use. It suits developers who want a ready-made, hackable RAG back end; readers who prefer an installable app can compare [AnythingLLM](/power-local-llm/anythingllm-review), and those who want only the flow builder can look at [Langflow](/power-local-llm/langflow-visual-ai-orchestration-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[OpenRAG documentation](https://docs.openr.ag) — overview, quickstart, install options, troubleshooting and configuration reference, checked 23 October 2026.',
          '[OpenRAG website](https://www.openr.ag) — project homepage.',
          '[OpenRAG on GitHub](https://github.com/langflow-ai/openrag) and its [v0.8.0 release](https://github.com/langflow-ai/openrag/releases) — source, Apache-2.0 license and release assets.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Langflow Review](/power-local-llm/langflow-visual-ai-orchestration-review) — the visual AI orchestration tool OpenRAG builds on.',
          '[RAGFlow Review](/power-local-llm/ragflow-document-understanding-rag-review) — a RAG engine built around deep document understanding.',
          '[AnythingLLM Review](/power-local-llm/anythingllm-review) — a document-chat workspace with a built-in vector store.',
          '[SurfSense Review](/power-local-llm/surfsense-review) — an open-source desktop agent for your own documents.',
          '[Local LLM Knowledge Retrieval Compared](/power-local-llm/local-llm-knowledge-retrieval-compared) — the category comparison for document and knowledge tools.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'OpenRAG Review: Open-Source Agentic RAG Platform',
      description:
        'OpenRAG review: an Apache-2.0 RAG platform that bundles Langflow, OpenSearch and Docling. Install steps, requirements, data flow and what the sources leave unconfirmed.',
      url: 'https://www.promptquorum.com/power-local-llm/openrag-review',
      inLanguage: 'en',
      datePublished: '2026-10-23',
      dateModified: '2026-10-23',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers evaluating an open-source RAG platform for searching and chatting with their own documents' },
      about: [
        { '@type': 'Thing', name: 'OpenRAG' },
        { '@type': 'Thing', name: 'Retrieval-augmented generation' },
        { '@type': 'Thing', name: 'Langflow' },
        { '@type': 'Thing', name: 'OpenSearch' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/openrag-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'OpenRAG Review', item: 'https://www.promptquorum.com/power-local-llm/openrag-review' },
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'RAG & Document Chat',
    heroImage: '/images/openrag-review-hero-de.webp',
    title: 'OpenRAG-Rezension: Quelloffene Plattform für agentisches RAG',
    seoTitle: 'OpenRAG-Rezension: Quelloffene agentische RAG-Plattform',
    intro:
      'OpenRAG ist ein quelloffenes Paket, das Langflow, OpenSearch und Docling verbindet, damit Sie Dokumente hochladen, durchsuchen und im Browser mit ihnen chatten können. Es wird im Terminal gestartet und läuft als Container, richtet sich also an Entwickler. Diese Rezension gibt Dokumentation, Website und GitHub-Release-Seite wieder, wie am 23. Oktober 2026 geprüft.',
    metaDescription:
      'OpenRAG-Rezension: RAG-Plattform unter Apache-2.0, die Langflow, OpenSearch und Docling bündelt. Installation, Anforderungen, Datenfluss und offene Punkte.',
    twitterDescription:
      'OpenRAG-Rezension: agentischer RAG-Stack unter Apache-2.0, gestartet mit einem uvx-Befehl. Anforderungen, Datenfluss und offene Fragen.',
    audience:
      'Entwickler und technische Teams, die einen vorverdrahteten RAG-Stack für eigene Dokumente prüfen und wissen müssen, was er installiert, was er verlangt und was die Quellen nicht bestätigen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenRAG Rezension',
    targetKeywords: [
      'openrag rezension',
      'open source rag plattform',
      'langflow opensearch docling',
      'agentisches rag selbst hosten',
      'mit dokumenten chatten selbst gehostet',
      'openrag installieren',
    ],
    current_hardware_mentioned: ['Mac', 'Linux PC', 'Windows PC with WSL'],
    leadAnswerBlock:
      '**OpenRAG (Version 0.8.0, veröffentlicht am 1. Oktober 2026) ist eine kostenlose Plattform unter Apache-2.0, die Langflow, OpenSearch und Docling bündelt, sodass Sie Dokumente hochladen und über eine Weboberfläche mit ihnen chatten können.** Sie läuft als Container, die im Terminal gestartet werden, und ist damit ein Entwicklerwerkzeug statt einer App zum Doppelklicken. PromptQuorum hat sie weder installiert noch getestet; alle Aussagen stammen aus der Dokumentation des Projekts.',
    quickAnswerTop: {
      de: {
        question: 'Ist OpenRAG eine lokale, private RAG-App?',
        answer:
          'Teilweise. Laut Dokumentation parst Docling Ihre Dateien und OpenSearch speichert sie in Containern, die Sie selbst betreiben, doch die Schnellstartanleitung nutzt einen OpenAI-API-Schlüssel – Prompts und Dokumentauszüge gehen also an OpenAI, sofern Sie kein lokales Ollama-Modell wählen.',
        bullets: [
          'Eingebaute Abläufe lassen sich im integrierten visuellen Langflow-Editor anpassen.',
          'Nimmt lokale Dateien und über OAuth-Konnektoren auch Cloud-Speicher auf.',
          'OpenSearch ergänzt hybride Suche und Mandantenfähigkeit.',
          'Python- und TypeScript-SDKs erlauben den Aufruf aus eigenem Code.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist OpenRAG?', anchor: 'what-is-openrag' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'So gelingt der Einstieg', anchor: 'getting-started' },
      { label: 'Von den Quellen bestätigte Funktionen', anchor: 'key-features' },
      { label: 'Datenfluss und Zugriff', anchor: 'privacy' },
      { label: 'Für wen sich die Plattform eignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
      { label: 'Wettbewerber und Alternativen', anchor: 'vs-alternatives' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenRAG ist ein Paket unter Apache-2.0, das mit einem einzigen uvx-Befehl einen fertigen RAG-Stack für Ihre Dokumente startet.',
          },
          {
            type: 'plain-terms',
            text: 'Sie starten ein Installationsprogramm im Terminal, es fährt einige Container hoch, und anschließend laden Sie Dateien hoch und stellen im Browser-Chat Fragen.',
          },
        ],
        items: [
          'Pflege: v0.8.0 erschien am 1. Oktober 2026, und das Repository wurde am 23. Oktober 2026 erneut geändert; ein Warnhinweis für veraltete Projekte entfällt daher.',
          'Lizenz: Apache-2.0, Quellcode auf GitHub in der Organisation langflow-ai.',
          'Kosten: Das Paket hat keinen Preis; Kosten entstehen durch Hardware und jede angebundene Modell-API.',
          'Windows: wird nur innerhalb des Windows-Subsystems für Linux unterstützt.',
          'Gewicht: Es ist containerbasiert und braucht viel Speicherplatz, passt also eher auf einen Entwicklungsrechner oder Server als auf einen schlanken Laptop.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension basiert auf der OpenRAG-Dokumentation, der Website und der GitHub-Release-Seite, geprüft am 23. Oktober 2026. PromptQuorum hat die Software weder installiert noch getestet oder gemessen.',
          },
        ],
      },
      overview: {
        id: 'what-is-openrag',
        title: 'Was ist OpenRAG?',
        content: [
          '**OpenRAG ist eine Plattform für Retrieval-Augmented Generation: Sie legen Dokumente in einer Wissensbasis ab und stellen einem KI-Agenten in einer Chat-Oberfläche Fragen dazu.** Das Projekt beschreibt sie als quelloffenes Paket zum Aufbau agentischer RAG-Systeme, das drei bestehende Projekte kombiniert: Langflow für Agenten-Abläufe, OpenSearch für Dokument- und Vektorspeicher und Docling zum Parsen und Zerlegen von Dateien.',
          'Entwickelt wird sie im Repository [langflow-ai/openrag](https://github.com/langflow-ai/openrag) mit einem FastAPI-Backend und einem Next.js-Frontend. Die Dokumentation finden Sie unter [docs.openr.ag](https://docs.openr.ag).',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**OpenRAG ist keine herunterladbare Desktop-App: Sie installieren es im Terminal mit uv, und es startet anschließend eigene Container.**',
        ],
        columns: ['Option', 'Bezugsquelle'],
        rows: [
          { 'Option': 'Schnellstart (macOS, Linux)', 'Bezugsquelle': 'uvx --python 3.13 openrag in einem leeren Ordner ausführen' },
          { 'Option': 'Windows', 'Bezugsquelle': 'Derselbe Befehl, aber nur innerhalb von WSL (siehe Anforderungen)' },
          { 'Option': 'Python-Projekt', 'Bezugsquelle': 'Als Abhängigkeit mit uv hinzufügen, laut [Installationsoptionen](https://docs.openr.ag/install-options)' },
          { 'Option': 'Selbstverwaltet', 'Bezugsquelle': 'Docker oder Podman mit eigener .env-Datei, laut [Docker-Anleitung](https://docs.openr.ag/docker)' },
          { 'Option': 'Website', 'Bezugsquelle': '[openr.ag](https://www.openr.ag)' },
          { 'Option': 'Dokumentation', 'Bezugsquelle': '[docs.openr.ag](https://docs.openr.ag)' },
          { 'Option': 'Quellcode', 'Bezugsquelle': '[github.com/langflow-ai/openrag](https://github.com/langflow-ai/openrag)' },
          { 'Option': 'Datenschutzerklärung', 'Bezugsquelle': 'Keine eigene Seite gefunden; die Doku verweist auf die [Datenschutzerklärung von IBM](https://www.ibm.com/privacy)' },
        ],
        note: 'Geprüfte Version: v0.8.0, laut [GitHub-Release-Seite](https://github.com/langflow-ai/openrag/releases) am 1. Oktober 2026 veröffentlicht; das Repository selbst wurde zuletzt am 23. Oktober 2026 aktualisiert. Das Release enthält nur ein Python-Wheel und ein Quellarchiv, keinen Installer und keinen Desktop-Build – ein Terminal und eine Entwicklungsumgebung sind daher erforderlich.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**Die Dokumentation verlangt eine Container-Laufzeit, 8 GB RAM und mehr als 50 GB freien Speicherplatz.**',
        ],
        columns: ['Punkt', 'Angabe der Dokumentation'],
        rows: [
          { 'Punkt': 'Python und uv', 'Angabe der Dokumentation': 'Python 3.13 und uv, laut Schnellstart' },
          { 'Punkt': 'Container-Laufzeit', 'Angabe der Dokumentation': 'Docker oder Podman plus Compose-Tool; uvx installiert eines bei Bedarf' },
          { 'Punkt': 'RAM', 'Angabe der Dokumentation': '8 GB sind das empfohlene Minimum' },
          { 'Punkt': 'Speicherplatz', 'Angabe der Dokumentation': 'Mehr als 50 GB frei für Onboarding und Aufnahme' },
          { 'Punkt': 'Windows', 'Angabe der Dokumentation': 'Nur in WSL; nicht in einer WSL-Distribution innerhalb einer Windows-VM' },
          { 'Punkt': 'Lokale Modelle', 'Angabe der Dokumentation': 'gpt-oss:20b über Ollama braucht mindestens 16 GB RAM' },
        ],
        note: 'Für OpenRAG selbst nennen die geprüften Seiten keine GPU-Anforderung, nur dass Ollama in einem GPU-fähigen Container laufen muss, um eine GPU zu nutzen.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Schritte folgen dem Schnellstart des Projekts; PromptQuorum hat sie nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Arbeitsordner anlegen',
            whyItMatters: 'Erstellen Sie ein leeres Verzeichnis wie openrag-workspace und öffnen Sie darin ein Terminal.',
          },
          {
            title: 'Installer starten',
            whyItMatters: 'Führen Sie uvx --python 3.13 openrag aus; das öffnet eine Terminal-Oberfläche.',
          },
          {
            title: 'Admin-Passwörter festlegen',
            whyItMatters: 'Lassen Sie die Admin-Passwörter für OpenSearch und Langflow erzeugen oder geben Sie eigene ein; überspringen Sie die übrigen Abfragen, um die Standardwerte zu behalten.',
          },
          {
            title: 'Dienste starten',
            whyItMatters: 'Antworten Sie auf „Start services now?“ mit Y, warten Sie auf „Services are running“ und öffnen Sie OpenRAG dann im Browser.',
          },
          {
            title: 'Onboarding abschließen',
            whyItMatters: 'Wählen Sie einen Modellanbieter, geben Sie dessen API-Schlüssel ein und klicken Sie auf Complete; der Schnellstart nutzt OpenAI.',
          },
          {
            title: 'Wissen hinzufügen und chatten',
            whyItMatters: 'Laden Sie Dateien oder Ordner hoch und stellen Sie in der Chat-Ansicht Fragen.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der Dokumentation oder der README des Projekts.**',
        ],
        items: [
          '**Anpassbare Abläufe.** Eingebaute Agenten-Abläufe lassen sich im integrierten Langflow-Editor anpassen, einschließlich des Austauschs von Modellen oder Komponenten; eigene Langflow-Komponenten und MCP-Server werden unterstützt.',
          '**Dokumentenaufnahme.** Dateien stammen aus Ihrem lokalen Dateisystem oder aus per OAuth autorisierten Cloud-Speicher-Konnektoren; Docling Serve parst und zerlegt sie.',
          '**Suche.** OpenSearch speichert Dokumente und Embeddings und ergänzt hybride Suche und Mandantenfähigkeit.',
          '**SDKs und API.** Offizielle Python- und TypeScript-SDKs erscheinen als openrag-sdk, und die Dokumentation enthält eine API-Referenz.',
          '**Beobachtbarkeit.** Tracing nach Langfuse und der IBM-Instana-Tracer sind optional und standardmäßig ausgeschaltet.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenfluss und Zugriff',
        content: [
          '**Laut Dokumentation verarbeitet Docling Serve Ihre Dokumente lokal, und OpenSearch speichert sie in Ihrer eigenen Wissensbasis; Cloud-Quellen werden nur über Konnektoren geladen, die Sie autorisieren.** Die Architektur besteht aus Containern: einem Backend, Langflow, Docling Serve, den Konnektoren und einem Frontend.',
          'OpenAI ist der Standard-Modellanbieter; dabei gehen Ihre Prompts und die abgerufenen Dokumentauszüge nach dessen eigener Richtlinie an OpenAI. Die Konfigurationsreferenz nennt außerdem Anthropic, Ollama und IBM watsonx.ai, sodass sich stattdessen auch ein lokaler Ollama-Endpunkt ansprechen lässt. Ist kein Langflow-Superuser-Passwort gesetzt, startet Langflow ohne Authentifizierung – deshalb empfiehlt die Dokumentation, eines festzulegen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die Aussage zur lokalen Verarbeitung ist die Eigenbeschreibung des Projekts; PromptQuorum hat die Container und ihren Netzwerkverkehr nicht geprüft. Die Update-Prüfung im Terminal fragt die Docker-Hub-API ab, sofern die Image-Registry nicht geändert wird.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die Plattform eignet',
        items: [
          '**Entwickler, die einen vorverdrahteten RAG-Stack wollen**, statt Langflow, OpenSearch und Docling selbst zusammenzusetzen.',
          '**Teams, die bereits Container betreiben** und hybride Suche mit Mandantenfähigkeit über eigene Dateien möchten.',
          '**Entwickler, die eine API oder ein SDK brauchen**, um einen Dokumentensuch-Agenten aus der eigenen Anwendung aufzurufen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praxisqualität.** PromptQuorum hat die Software nicht ausgeführt; Antwortqualität, Zitiergenauigkeit, Aufnahmegeschwindigkeit und Stabilität sind nicht bewertet.',
          '**Telemetrie.** Die geprüften Seiten dokumentieren weder Analysefunktionen noch eine Abschaltoption für die Container.',
          '**Datenschutzerklärung.** Es wurde keine OpenRAG-spezifische Erklärung gefunden; die Doku verweist nur auf die allgemeine Datenschutzerklärung von IBM.',
          '**Rein lokaler Betrieb.** Die Dokumentation beschreibt Ollama-Unterstützung, doch der Schnellstart ist nur mit OpenAI dokumentiert; ein vollständig offline betriebenes Setup ist ungetestet.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          { 'App': '[Langflow](/de/power-local-llm/langflow-visual-ai-orchestration-review)', 'Plattformen': 'Web', 'Preis / Lizenz': 'Kostenlos / MIT', 'Hauptunterschied': 'Der visuelle Ablauf-Builder, den OpenRAG einbettet – ohne den mitgelieferten Such-Stack' },
          { 'App': '[RAGFlow](/de/power-local-llm/ragflow-document-understanding-rag-review)', 'Plattformen': 'Linux, Web', 'Preis / Lizenz': 'Kostenlos / Apache 2.0', 'Hauptunterschied': 'RAG-Engine mit Schwerpunkt auf tiefem Dokumentverständnis und Quellenangaben' },
          { 'App': '[AnythingLLM](/de/power-local-llm/anythingllm-review)', 'Plattformen': 'Windows, macOS, Linux, Web', 'Preis / Lizenz': 'Kostenlos / MIT', 'Hauptunterschied': 'Installierbare Desktop-App mit eingebautem Vektorspeicher, ohne Container' },
          { 'App': '[Dify](/de/power-local-llm/dify-ai-workflow-builder-review)', 'Plattformen': 'Web, Linux', 'Preis / Lizenz': 'Freemium / modifiziertes Apache 2.0', 'Hauptunterschied': 'Breiterer Builder für KI-Workflows und Agenten, RAG ist nur ein Teil' },
        ],
        note: 'Details der Wettbewerber ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Welche Ollama-Modelle empfiehlt OpenRAG?',
            a: 'Die Dokumentation schlägt gpt-oss:20b oder mistral-nemo:12b für Sprachmodelle und nomic-embed-text, mxbai-embed-large oder embeddinggemma für Embeddings vor. Chat-Modelle müssen Tool-Calling unterstützen, und die Dokumentation garantiert nicht, dass jedes Ollama-Modell funktioniert.',
          },
          {
            q: 'Welche Ports verwendet es?',
            a: 'Standardmäßig 3000 für das Frontend, 7860 für Langflow, 8000 für das Backend, 9200 für OpenSearch, 5601 für OpenSearch Dashboards und 5001 für Docling. Die Ports von Frontend und Langflow lassen sich in der .env-Datei ändern.',
          },
          {
            q: 'Aus welchem Cloud-Speicher kann es Daten aufnehmen?',
            a: 'Die Konfigurationsreferenz beschreibt Google Drive über Google OAuth, SharePoint und OneDrive über eine Microsoft-Graph-App-Registrierung sowie AWS S3 über Zugriffsschlüssel.',
          },
          {
            q: 'Wie rufe ich es aus eigenem Code auf?',
            a: 'Installieren Sie das Python-SDK mit pip install openrag-sdk oder das TypeScript-SDK mit npm install openrag-sdk. Das ältere eigenständige Paket openrag-mcp ist veraltet.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'OpenRAG ist ein kostenloser RAG-Stack unter Apache-2.0, der laut Dokumentation Langflow, OpenSearch und Docling bereits verbunden mitliefert und aktiv gepflegt wird – mit einem Release Anfang Oktober 2026 und Änderungen bis zum 23. Oktober. Dagegen ist der Betrieb aufwendig, Windows wird nur über WSL unterstützt, OpenAI ist die Voreinstellung, und PromptQuorum konnte weder Qualität noch Telemetrie noch rein offline Nutzung überprüfen. Es eignet sich für Entwickler, die ein fertiges, anpassbares RAG-Backend wollen; wer eine installierbare App bevorzugt, kann [AnythingLLM](/de/power-local-llm/anythingllm-review) vergleichen, und wer nur den Ablauf-Builder braucht, schaut sich [Langflow](/de/power-local-llm/langflow-visual-ai-orchestration-review) an.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[OpenRAG-Dokumentation](https://docs.openr.ag) — Überblick, Schnellstart, Installationsoptionen, Fehlerbehebung und Konfigurationsreferenz, geprüft am 23. Oktober 2026.',
          '[OpenRAG-Website](https://www.openr.ag) — Startseite des Projekts.',
          '[OpenRAG auf GitHub](https://github.com/langflow-ai/openrag) und das zugehörige [v0.8.0-Release](https://github.com/langflow-ai/openrag/releases) — Quellcode, Apache-2.0-Lizenz und Release-Dateien.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Langflow-Rezension](/de/power-local-llm/langflow-visual-ai-orchestration-review) — das visuelle KI-Orchestrierungswerkzeug, auf dem OpenRAG aufbaut.',
          '[RAGFlow-Rezension](/de/power-local-llm/ragflow-document-understanding-rag-review) — eine RAG-Engine rund um tiefes Dokumentverständnis.',
          '[AnythingLLM-Rezension](/de/power-local-llm/anythingllm-review) — ein Dokumenten-Chat-Arbeitsbereich mit eingebautem Vektorspeicher.',
          '[SurfSense-Rezension](/de/power-local-llm/surfsense-review) — ein quelloffener Desktop-Agent für Ihre eigenen Dokumente.',
          '[Lokale LLM-Wissensabruf-Tools im Vergleich](/de/power-local-llm/local-llm-knowledge-retrieval-compared) — der Kategorievergleich für Dokumenten- und Wissenswerkzeuge.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'RAG & Document Chat',
    heroImage: '/images/openrag-review-hero-es.webp',
    title: 'Reseña de OpenRAG: plataforma RAG agéntica de código abierto',
    seoTitle: 'Reseña de OpenRAG: plataforma RAG agéntica abierta',
    intro:
      'OpenRAG es un paquete de código abierto que conecta Langflow, OpenSearch y Docling para que puedas subir documentos, buscarlos y chatear con ellos en el navegador. Se inicia desde una terminal y se ejecuta en contenedores, así que está pensado para desarrolladores. Esta reseña refleja su documentación, su sitio web y su página de versiones en GitHub, según lo comprobado el 23 de octubre de 2026.',
    metaDescription:
      'Reseña de OpenRAG: plataforma RAG Apache-2.0 que reúne Langflow, OpenSearch y Docling. Instalación, requisitos, flujo de datos y lo no verificado.',
    twitterDescription:
      'Reseña de OpenRAG: un stack RAG agéntico con licencia Apache-2.0 que se inicia con un comando uvx. Requisitos, flujo de datos y dudas abiertas.',
    audience:
      'Desarrolladores y equipos técnicos que evalúan un stack RAG ya integrado para sus propios documentos y necesitan saber qué instala, qué exige y qué no confirman las fuentes.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de OpenRAG',
    targetKeywords: [
      'reseña openrag',
      'plataforma rag de código abierto',
      'langflow opensearch docling',
      'rag agéntico autoalojado',
      'chatear con documentos autoalojado',
      'instalar openrag',
    ],
    current_hardware_mentioned: ['Mac', 'Linux PC', 'Windows PC with WSL'],
    leadAnswerBlock:
      '**OpenRAG (versión 0.8.0, publicada el 1 de octubre de 2026) es una plataforma gratuita con licencia Apache-2.0 que reúne Langflow, OpenSearch y Docling para que puedas subir documentos y chatear con ellos mediante una interfaz web.** Funciona con contenedores que se inician desde una terminal, por lo que es una herramienta para desarrolladores y no una app de doble clic. PromptQuorum no la ha instalado ni probado; todo lo que se afirma aquí procede de la documentación del propio proyecto.',
    quickAnswerTop: {
      es: {
        question: '¿Es OpenRAG una app RAG local y privada?',
        answer:
          'En parte. Según la documentación, Docling analiza tus archivos y OpenSearch los almacena en contenedores que ejecutas tú mismo, pero la guía de inicio rápido usa una clave de API de OpenAI, así que los prompts y los fragmentos de documentos van a OpenAI salvo que elijas un modelo local de Ollama.',
        bullets: [
          'Los flujos incluidos se pueden editar en el editor visual de Langflow integrado.',
          'Ingiere archivos locales y, mediante conectores OAuth, almacenamiento en la nube.',
          'OpenSearch añade búsqueda híbrida y multiinquilino.',
          'Los SDK de Python y TypeScript permiten llamarlo desde tu propio código.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es OpenRAG?', anchor: 'what-is-openrag' },
      { label: 'Dónde conseguirlo', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Flujo de datos y acceso', anchor: 'privacy' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
      { label: 'Competidores y alternativas', anchor: 'vs-alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenRAG es un paquete con licencia Apache-2.0 que pone en marcha con un solo comando uvx un stack RAG listo para tus documentos.',
          },
          {
            type: 'plain-terms',
            text: 'Ejecutas un instalador en la terminal, este levanta varios contenedores y después subes archivos y haces preguntas en un chat en el navegador.',
          },
        ],
        items: [
          'Mantenimiento: la v0.8.0 se publicó el 1 de octubre de 2026 y el repositorio volvió a cambiar el 23 de octubre de 2026, por lo que no se aplica ninguna advertencia de proyecto abandonado.',
          'Licencia: Apache-2.0, con el código fuente en GitHub dentro de la organización langflow-ai.',
          'Coste: el paquete no tiene precio; tus costes son el hardware y cualquier API de modelos que conectes.',
          'Windows: solo se admite dentro del Subsistema de Windows para Linux.',
          'Peso: se basa en contenedores y ocupa mucho disco, así que encaja mejor en un equipo de desarrollo o un servidor que en un portátil ligero.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en la documentación de OpenRAG, su sitio web y su página de versiones en GitHub, comprobados el 23 de octubre de 2026. PromptQuorum no ha instalado, probado ni medido el software.',
          },
        ],
      },
      overview: {
        id: 'what-is-openrag',
        title: '¿Qué es OpenRAG?',
        content: [
          '**OpenRAG es una plataforma de generación aumentada por recuperación en la que añades documentos a una base de conocimiento y le haces preguntas sobre ellos a un agente de IA en una interfaz de chat.** El proyecto la describe como un paquete de código abierto para construir sistemas RAG agénticos que combina tres proyectos existentes: Langflow para los flujos de agentes, OpenSearch para el almacenamiento de documentos y vectores, y Docling para analizar y fragmentar archivos.',
          'Se desarrolla en el repositorio [langflow-ai/openrag](https://github.com/langflow-ai/openrag), con un backend en FastAPI y un frontend en Next.js. Su documentación está en [docs.openr.ag](https://docs.openr.ag).',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirlo',
        content: [
          '**OpenRAG no es una app de escritorio descargable: se instala desde una terminal con uv y luego inicia sus propios contenedores.**',
        ],
        columns: ['Opción', 'Dónde conseguirlo'],
        rows: [
          { 'Opción': 'Inicio rápido (macOS, Linux)', 'Dónde conseguirlo': 'Ejecuta uvx --python 3.13 openrag en una carpeta vacía' },
          { 'Opción': 'Windows', 'Dónde conseguirlo': 'El mismo comando, pero solo dentro de WSL (ver Requisitos)' },
          { 'Opción': 'Proyecto de Python', 'Dónde conseguirlo': 'Añádelo como dependencia con uv, según las [opciones de instalación](https://docs.openr.ag/install-options)' },
          { 'Opción': 'Autogestionado', 'Dónde conseguirlo': 'Docker o Podman con tu propio archivo .env, según la [guía de Docker](https://docs.openr.ag/docker)' },
          { 'Opción': 'Sitio web', 'Dónde conseguirlo': '[openr.ag](https://www.openr.ag)' },
          { 'Opción': 'Documentación', 'Dónde conseguirlo': '[docs.openr.ag](https://docs.openr.ag)' },
          { 'Opción': 'Código fuente', 'Dónde conseguirlo': '[github.com/langflow-ai/openrag](https://github.com/langflow-ai/openrag)' },
          { 'Opción': 'Política de privacidad', 'Dónde conseguirlo': 'No se encontró una propia; la documentación cita la [declaración de privacidad de IBM](https://www.ibm.com/privacy)' },
        ],
        note: 'Versión revisada: v0.8.0, publicada el 1 de octubre de 2026 según la [página de versiones de GitHub](https://github.com/langflow-ai/openrag/releases); el repositorio se actualizó por última vez el 23 de octubre de 2026. La versión solo incluye un paquete wheel de Python y un archivo de código fuente, sin instalador ni compilación de escritorio, por lo que hacen falta una terminal y un entorno de desarrollo.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**La documentación pide un entorno de contenedores, 8 GB de RAM y más de 50 GB de disco libre.**',
        ],
        columns: ['Elemento', 'Lo que dice la documentación'],
        rows: [
          { 'Elemento': 'Python y uv', 'Lo que dice la documentación': 'Python 3.13 y uv, según el inicio rápido' },
          { 'Elemento': 'Entorno de contenedores', 'Lo que dice la documentación': 'Docker o Podman más una herramienta compose; uvx instala uno si falta' },
          { 'Elemento': 'RAM', 'Lo que dice la documentación': '8 GB es el mínimo recomendado' },
          { 'Elemento': 'Disco', 'Lo que dice la documentación': 'Más de 50 GB libres para la incorporación y la ingesta' },
          { 'Elemento': 'Windows', 'Lo que dice la documentación': 'Solo en WSL; no en una distro WSL dentro de una máquina virtual de Windows' },
          { 'Elemento': 'Modelos locales', 'Lo que dice la documentación': 'gpt-oss:20b con Ollama necesita al menos 16 GB de RAM' },
        ],
        note: 'Las páginas revisadas no indican ningún requisito de GPU para OpenRAG en sí, solo que Ollama debe ejecutarse en un contenedor con GPU para usarla.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**Los pasos siguen el inicio rápido del proyecto; PromptQuorum no los ha ejecutado.**',
        ],
        numberedItems: [
          {
            title: 'Crea una carpeta de trabajo',
            whyItMatters: 'Crea un directorio vacío, por ejemplo openrag-workspace, y abre una terminal en él.',
          },
          {
            title: 'Inicia el instalador',
            whyItMatters: 'Ejecuta uvx --python 3.13 openrag, que abre una interfaz de terminal.',
          },
          {
            title: 'Define las contraseñas de administrador',
            whyItMatters: 'Genera automáticamente o escribe las contraseñas de administrador de OpenSearch y Langflow; omite el resto de las preguntas para conservar los valores predeterminados.',
          },
          {
            title: 'Inicia los servicios',
            whyItMatters: 'Responde Y a «Start services now?», espera el mensaje «Services are running» y abre OpenRAG en el navegador.',
          },
          {
            title: 'Completa la incorporación',
            whyItMatters: 'Elige un proveedor de modelos, introduce su clave de API y pulsa Complete; el inicio rápido usa OpenAI.',
          },
          {
            title: 'Añade conocimiento y chatea',
            whyItMatters: 'Sube archivos o carpetas y haz preguntas en la vista de chat.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto de abajo procede de la documentación o del README del proyecto.**',
        ],
        items: [
          '**Flujos editables.** Los flujos de agentes incluidos se pueden personalizar en el editor de Langflow integrado, incluido el cambio de modelos o componentes; se admiten componentes personalizados de Langflow y servidores MCP.',
          '**Ingesta de documentos.** Los archivos proceden de tu sistema de archivos local o de conectores de almacenamiento en la nube autorizados por OAuth; Docling Serve los analiza y fragmenta.',
          '**Búsqueda.** OpenSearch almacena documentos y embeddings y añade búsqueda híbrida y multiinquilino.',
          '**SDK y API.** Los SDK oficiales de Python y TypeScript se publican como openrag-sdk, y la documentación incluye una referencia de la API.',
          '**Observabilidad.** El rastreo hacia Langfuse y el rastreador IBM Instana son opcionales y están desactivados de forma predeterminada.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flujo de datos y acceso',
        content: [
          '**Según la documentación, Docling Serve procesa tus documentos de forma local y OpenSearch los almacena en tu propia base de conocimiento; las fuentes en la nube solo se cargan mediante conectores que tú autorizas.** La arquitectura se compone de contenedores: un backend, Langflow, Docling Serve, los conectores y un frontend.',
          'OpenAI es el proveedor de modelos predeterminado, así que con él tus prompts y los fragmentos recuperados de los documentos van a OpenAI bajo su propia política. La referencia de configuración también menciona Anthropic, Ollama e IBM watsonx.ai, lo que permite dirigir las llamadas a un endpoint local de Ollama. Si no se define una contraseña de superusuario de Langflow, este arranca sin autenticación, por lo que la documentación recomienda establecer una.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La afirmación sobre el procesamiento local es la descripción del propio proyecto; PromptQuorum no ha auditado los contenedores ni su tráfico de red. La comprobación de actualizaciones de la terminal consulta la API de Docker Hub, salvo que se cambie el registro de imágenes.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Desarrolladores que quieren un stack RAG ya conectado** en lugar de montar Langflow, OpenSearch y Docling por su cuenta.',
          '**Equipos que ya ejecutan contenedores** y quieren búsqueda híbrida con multiinquilino sobre sus propios archivos.',
          '**Quienes necesitan una API o un SDK** para llamar a un agente de búsqueda de documentos desde su propia aplicación.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad en la práctica.** PromptQuorum no ejecutó el software, por lo que no se evalúan la calidad de las respuestas, la precisión de las citas, la velocidad de ingesta ni la estabilidad.',
          '**Telemetría.** Las páginas revisadas no documentan analíticas ni un ajuste para desactivarlas en los contenedores.',
          '**Política de privacidad.** No se encontró ninguna específica de OpenRAG; la documentación solo remite a la declaración de privacidad general de IBM.',
          '**Funcionamiento solo local.** La documentación describe la compatibilidad con Ollama, pero el inicio rápido solo está documentado con OpenAI, así que una configuración totalmente sin conexión no está probada.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Langflow](/es/power-local-llm/langflow-visual-ai-orchestration-review)', 'Plataformas': 'Web', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'El constructor visual de flujos que OpenRAG integra, sin el stack de búsqueda incluido' },
          { 'App': '[RAGFlow](/es/power-local-llm/ragflow-document-understanding-rag-review)', 'Plataformas': 'Linux, web', 'Precio / licencia': 'Gratis / Apache 2.0', 'Diferencia clave': 'Motor RAG centrado en la comprensión profunda de documentos y las citas' },
          { 'App': '[AnythingLLM](/es/power-local-llm/anythingllm-review)', 'Plataformas': 'Windows, macOS, Linux, web', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'App de escritorio instalable con almacén vectorial integrado, sin contenedores' },
          { 'App': '[Dify](/es/power-local-llm/dify-ai-workflow-builder-review)', 'Plataformas': 'Web, Linux', 'Precio / licencia': 'Freemium / Apache 2.0 modificada', 'Diferencia clave': 'Constructor más amplio de flujos de IA y agentes, con RAG como una parte' },
        ],
        note: 'Los detalles de los competidores cambian con frecuencia; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué modelos de Ollama recomienda OpenRAG?',
            a: 'La documentación sugiere gpt-oss:20b o mistral-nemo:12b como modelos de lenguaje y nomic-embed-text, mxbai-embed-large o embeddinggemma para embeddings. Los modelos de chat deben admitir llamadas a herramientas, y la documentación no garantiza que funcione cualquier modelo de Ollama.',
          },
          {
            q: '¿Qué puertos usa?',
            a: 'De forma predeterminada, el 3000 para el frontend, el 7860 para Langflow, el 8000 para el backend, el 9200 para OpenSearch, el 5601 para OpenSearch Dashboards y el 5001 para Docling. Los puertos del frontend y de Langflow se pueden cambiar en el archivo .env.',
          },
          {
            q: '¿De qué almacenamiento en la nube puede ingerir datos?',
            a: 'La referencia de configuración describe Google Drive mediante Google OAuth, SharePoint y OneDrive mediante un registro de aplicación de Microsoft Graph, y AWS S3 mediante claves de acceso.',
          },
          {
            q: '¿Cómo lo llamo desde mi propio código?',
            a: 'Instala el SDK de Python con pip install openrag-sdk o el SDK de TypeScript con npm install openrag-sdk. El paquete independiente anterior, openrag-mcp, está obsoleto.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'OpenRAG es un stack RAG gratuito con licencia Apache-2.0 que, según su documentación, incluye Langflow, OpenSearch y Docling ya conectados y se mantiene activamente, con una versión a principios de octubre de 2026 y cambios hasta el 23 de octubre. En contra, es pesado de ejecutar, solo admite Windows mediante WSL, usa OpenAI por defecto y PromptQuorum no pudo verificar su calidad, su telemetría ni su uso totalmente sin conexión. Encaja con desarrolladores que quieren un backend RAG listo y modificable; quien prefiera una app instalable puede comparar [AnythingLLM](/es/power-local-llm/anythingllm-review), y quien solo necesite el constructor de flujos puede mirar [Langflow](/es/power-local-llm/langflow-visual-ai-orchestration-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Documentación de OpenRAG](https://docs.openr.ag) — visión general, inicio rápido, opciones de instalación, resolución de problemas y referencia de configuración, consultadas el 23 de octubre de 2026.',
          '[Sitio web de OpenRAG](https://www.openr.ag) — página principal del proyecto.',
          '[OpenRAG en GitHub](https://github.com/langflow-ai/openrag) y su [versión v0.8.0](https://github.com/langflow-ai/openrag/releases) — código fuente, licencia Apache-2.0 y archivos de la versión.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Langflow](/es/power-local-llm/langflow-visual-ai-orchestration-review) — la herramienta de orquestación visual de IA sobre la que se construye OpenRAG.',
          '[Reseña de RAGFlow](/es/power-local-llm/ragflow-document-understanding-rag-review) — un motor RAG basado en la comprensión profunda de documentos.',
          '[Reseña de AnythingLLM](/es/power-local-llm/anythingllm-review) — un espacio de chat con documentos con almacén vectorial integrado.',
          '[Reseña de SurfSense](/es/power-local-llm/surfsense-review) — un agente de escritorio de código abierto para tus propios documentos.',
          '[Herramientas locales de recuperación de conocimiento comparadas](/es/power-local-llm/local-llm-knowledge-retrieval-compared) — la comparativa de la categoría de herramientas de documentos y conocimiento.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'RAG & Document Chat',
    heroImage: '/images/openrag-review-hero-fr.webp',
    title: 'Test d’OpenRAG : plateforme RAG agentique open source',
    seoTitle: 'Test d’OpenRAG : plateforme RAG agentique open source',
    intro:
      'OpenRAG est un paquet open source qui relie Langflow, OpenSearch et Docling pour que vous puissiez téléverser des documents, les interroger et dialoguer avec eux dans un navigateur. Il se lance depuis un terminal et tourne dans des conteneurs ; il s’adresse donc aux développeurs. Ce test reflète sa documentation, son site web et sa page de versions GitHub, consultés le 23 octobre 2026.',
    metaDescription:
      'Test d’OpenRAG : plateforme RAG Apache-2.0 qui réunit Langflow, OpenSearch et Docling. Installation, prérequis, flux de données, points non vérifiés.',
    twitterDescription:
      'Test d’OpenRAG : une pile RAG agentique sous Apache-2.0, lancée avec une seule commande uvx. Prérequis, flux de données et questions ouvertes.',
    audience:
      'Développeurs et équipes techniques qui évaluent une pile RAG prête à l’emploi pour leurs propres documents et veulent savoir ce qu’elle installe, ce qu’elle exige et ce que les sources ne confirment pas.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'test OpenRAG',
    targetKeywords: [
      'test openrag',
      'plateforme rag open source',
      'langflow opensearch docling',
      'rag agentique auto-hébergé',
      'dialoguer avec ses documents auto-hébergé',
      'installer openrag',
    ],
    current_hardware_mentioned: ['Mac', 'Linux PC', 'Windows PC with WSL'],
    leadAnswerBlock:
      '**OpenRAG (version 0.8.0, publiée le 1er octobre 2026) est une plateforme gratuite sous licence Apache-2.0 qui réunit Langflow, OpenSearch et Docling pour téléverser des documents et dialoguer avec eux via une interface web.** Elle tourne dans des conteneurs lancés depuis un terminal : c’est un outil de développeur, pas une application à installer d’un double-clic. PromptQuorum ne l’a ni installée ni testée ; tout ce qui suit provient de la documentation du projet.',
    quickAnswerTop: {
      fr: {
        question: 'OpenRAG est-il une application RAG locale et privée ?',
        answer:
          'En partie. Selon la documentation, Docling analyse vos fichiers et OpenSearch les stocke dans des conteneurs que vous exploitez vous-même, mais le démarrage rapide utilise une clé d’API OpenAI : vos requêtes et des extraits de documents partent donc chez OpenAI, sauf si vous choisissez un modèle Ollama local.',
        bullets: [
          'Les flux intégrés se modifient dans l’éditeur visuel Langflow embarqué.',
          'Ingère des fichiers locaux et, via des connecteurs OAuth, du stockage cloud.',
          'OpenSearch ajoute la recherche hybride et le multi-locataire.',
          'Des SDK Python et TypeScript permettent de l’appeler depuis votre propre code.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu’est-ce qu’OpenRAG ?', anchor: 'what-is-openrag' },
      { label: 'Où l’obtenir', anchor: 'get-it' },
      { label: 'Prérequis', anchor: 'requirements' },
      { label: 'Premiers pas', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Flux de données et accès', anchor: 'privacy' },
      { label: 'À qui elle s’adresse', anchor: 'who-should-use' },
      { label: 'Ce que nous n’avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Concurrents et alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures associées', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenRAG est un paquet sous Apache-2.0 qui démarre une pile RAG prête à l’emploi pour vos documents avec une seule commande uvx.',
          },
          {
            type: 'plain-terms',
            text: 'Vous lancez un installateur dans le terminal, il démarre quelques conteneurs, puis vous téléversez des fichiers et posez vos questions dans un chat en ligne.',
          },
        ],
        items: [
          'Maintenance : la v0.8.0 est sortie le 1er octobre 2026 et le dépôt a encore évolué le 23 octobre 2026 ; aucun avertissement de projet délaissé ne s’applique.',
          'Licence : Apache-2.0, code source sur GitHub dans l’organisation langflow-ai.',
          'Coût : le paquet n’a pas de prix ; vos frais sont le matériel et toute API de modèle que vous branchez.',
          'Windows : pris en charge uniquement dans le sous-système Windows pour Linux.',
          'Poids : elle repose sur des conteneurs et exige beaucoup d’espace disque ; elle convient mieux à un poste de développement ou à un serveur qu’à un portable léger.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s’appuie sur la documentation d’OpenRAG, son site web et sa page de versions GitHub, consultés le 23 octobre 2026. PromptQuorum n’a ni installé, ni testé, ni mesuré le logiciel.',
          },
        ],
      },
      overview: {
        id: 'what-is-openrag',
        title: 'Qu’est-ce qu’OpenRAG ?',
        content: [
          '**OpenRAG est une plateforme de génération augmentée par récupération : vous ajoutez des documents à une base de connaissances et posez des questions à un agent IA dans une interface de chat.** Le projet la décrit comme un paquet open source pour construire des systèmes RAG agentiques, qui combine trois projets existants : Langflow pour les flux d’agents, OpenSearch pour le stockage des documents et des vecteurs, et Docling pour l’analyse et le découpage des fichiers.',
          'Elle est développée dans le dépôt [langflow-ai/openrag](https://github.com/langflow-ai/openrag), avec un backend FastAPI et un frontend Next.js. Sa documentation se trouve sur [docs.openr.ag](https://docs.openr.ag).',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où l’obtenir',
        content: [
          '**OpenRAG n’est pas une application de bureau à télécharger : on l’installe depuis un terminal avec uv, puis il démarre ses propres conteneurs.**',
        ],
        columns: ['Option', 'Où l’obtenir'],
        rows: [
          { 'Option': 'Démarrage rapide (macOS, Linux)', 'Où l’obtenir': 'Exécuter uvx --python 3.13 openrag dans un dossier vide' },
          { 'Option': 'Windows', 'Où l’obtenir': 'Même commande, mais uniquement dans WSL (voir Prérequis)' },
          { 'Option': 'Projet Python', 'Où l’obtenir': 'L’ajouter comme dépendance avec uv, selon les [options d’installation](https://docs.openr.ag/install-options)' },
          { 'Option': 'Auto-géré', 'Où l’obtenir': 'Docker ou Podman avec votre propre fichier .env, selon le [guide Docker](https://docs.openr.ag/docker)' },
          { 'Option': 'Site web', 'Où l’obtenir': '[openr.ag](https://www.openr.ag)' },
          { 'Option': 'Documentation', 'Où l’obtenir': '[docs.openr.ag](https://docs.openr.ag)' },
          { 'Option': 'Code source', 'Où l’obtenir': '[github.com/langflow-ai/openrag](https://github.com/langflow-ai/openrag)' },
          { 'Option': 'Politique de confidentialité', 'Où l’obtenir': 'Aucune page propre ; la doc cite la [déclaration de confidentialité d’IBM](https://www.ibm.com/privacy)' },
        ],
        note: 'Version testée : v0.8.0, publiée le 1er octobre 2026 selon la [page de versions GitHub](https://github.com/langflow-ai/openrag/releases) ; le dépôt lui-même a été mis à jour pour la dernière fois le 23 octobre 2026. La version ne fournit qu’un paquet wheel Python et une archive de sources, sans installateur ni version de bureau : un terminal et un environnement de développement sont donc nécessaires.',
      },
      requirements: {
        id: 'requirements',
        title: 'Prérequis',
        content: [
          '**La documentation demande un environnement de conteneurs, 8 Go de RAM et plus de 50 Go d’espace disque libre.**',
        ],
        columns: ['Élément', 'Ce que dit la documentation'],
        rows: [
          { 'Élément': 'Python et uv', 'Ce que dit la documentation': 'Python 3.13 et uv, selon le démarrage rapide' },
          { 'Élément': 'Environnement de conteneurs', 'Ce que dit la documentation': 'Docker ou Podman plus un outil compose ; uvx en installe un si besoin' },
          { 'Élément': 'RAM', 'Ce que dit la documentation': '8 Go est le minimum recommandé' },
          { 'Élément': 'Disque', 'Ce que dit la documentation': 'Plus de 50 Go libres pour l’intégration et l’ingestion' },
          { 'Élément': 'Windows', 'Ce que dit la documentation': 'Dans WSL uniquement ; pas dans une distribution WSL au sein d’une VM Windows' },
          { 'Élément': 'Modèles locaux', 'Ce que dit la documentation': 'gpt-oss:20b via Ollama exige au moins 16 Go de RAM' },
        ],
        note: 'Les pages consultées n’indiquent aucune exigence de GPU pour OpenRAG lui-même, seulement qu’Ollama doit tourner dans un conteneur compatible GPU pour en profiter.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Premiers pas',
        content: [
          '**Les étapes suivent le démarrage rapide du projet ; PromptQuorum ne les a pas exécutées.**',
        ],
        numberedItems: [
          {
            title: 'Créer un dossier de travail',
            whyItMatters: 'Créez un répertoire vide, par exemple openrag-workspace, et ouvrez-y un terminal.',
          },
          {
            title: 'Lancer l’installateur',
            whyItMatters: 'Exécutez uvx --python 3.13 openrag, ce qui ouvre une interface en terminal.',
          },
          {
            title: 'Définir les mots de passe administrateur',
            whyItMatters: 'Générez automatiquement ou saisissez les mots de passe administrateur d’OpenSearch et de Langflow ; ignorez les autres questions pour garder les valeurs par défaut.',
          },
          {
            title: 'Démarrer les services',
            whyItMatters: 'Répondez Y à « Start services now? », attendez « Services are running », puis ouvrez OpenRAG dans le navigateur.',
          },
          {
            title: 'Terminer l’intégration',
            whyItMatters: 'Choisissez un fournisseur de modèles, saisissez sa clé d’API et cliquez sur Complete ; le démarrage rapide utilise OpenAI.',
          },
          {
            title: 'Ajouter des connaissances et discuter',
            whyItMatters: 'Téléversez des fichiers ou des dossiers, puis posez vos questions dans la vue de chat.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous provient de la documentation ou du README du projet.**',
        ],
        items: [
          '**Flux modifiables.** Les flux d’agents intégrés se personnalisent dans l’éditeur Langflow embarqué, y compris le remplacement de modèles ou de composants ; les composants Langflow personnalisés et les serveurs MCP sont pris en charge.',
          '**Ingestion de documents.** Les fichiers viennent de votre système de fichiers local ou de connecteurs de stockage cloud autorisés par OAuth ; Docling Serve les analyse et les découpe.',
          '**Recherche.** OpenSearch stocke les documents et les embeddings et ajoute la recherche hybride et le multi-locataire.',
          '**SDK et API.** Des SDK officiels Python et TypeScript sont publiés sous le nom openrag-sdk, et la documentation comprend une référence d’API.',
          '**Observabilité.** Le traçage vers Langfuse et le traceur IBM Instana sont facultatifs et désactivés par défaut.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Flux de données et accès',
        content: [
          '**Selon la documentation, Docling Serve traite vos documents en local et OpenSearch les stocke dans votre propre base de connaissances ; les sources cloud ne sont chargées que par des connecteurs que vous autorisez.** L’architecture repose sur des conteneurs : un backend, Langflow, Docling Serve, les connecteurs et un frontend.',
          'OpenAI est le fournisseur de modèles par défaut : avec lui, vos requêtes et les extraits de documents récupérés partent chez OpenAI, selon sa propre politique. La référence de configuration cite aussi Anthropic, Ollama et IBM watsonx.ai, ce qui permet de viser un point d’accès Ollama local à la place. Si aucun mot de passe de superutilisateur Langflow n’est défini, Langflow démarre sans authentification, d’où la recommandation d’en fixer un.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'L’affirmation sur le traitement local est la description du projet lui-même ; PromptQuorum n’a audité ni les conteneurs ni leur trafic réseau. La vérification de mise à jour du terminal interroge l’API de Docker Hub, sauf si le registre d’images est modifié.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui elle s’adresse',
        items: [
          '**Les développeurs qui veulent une pile RAG déjà câblée** plutôt que d’assembler eux-mêmes Langflow, OpenSearch et Docling.',
          '**Les équipes qui exploitent déjà des conteneurs** et veulent une recherche hybride multi-locataire sur leurs propres fichiers.',
          '**Ceux qui ont besoin d’une API ou d’un SDK** pour appeler un agent de recherche documentaire depuis leur application.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n’avons pas pu vérifier',
        items: [
          '**Qualité à l’usage.** PromptQuorum n’a pas exécuté le logiciel : qualité des réponses, exactitude des citations, vitesse d’ingestion et stabilité ne sont pas évaluées.',
          '**Télémétrie.** Les pages consultées ne documentent ni analyses d’usage ni réglage de désactivation pour les conteneurs.',
          '**Politique de confidentialité.** Aucune politique propre à OpenRAG n’a été trouvée ; la doc renvoie seulement à la déclaration générale d’IBM.',
          '**Fonctionnement entièrement local.** La documentation décrit la prise en charge d’Ollama, mais le démarrage rapide n’est documenté qu’avec OpenAI ; une configuration totalement hors ligne n’est pas testée.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        columns: ['Application', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Application': '[Langflow](/fr/power-local-llm/langflow-visual-ai-orchestration-review)', 'Plateformes': 'Web', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Le constructeur visuel de flux qu’OpenRAG embarque, sans la pile de recherche fournie' },
          { 'Application': '[RAGFlow](/fr/power-local-llm/ragflow-document-understanding-rag-review)', 'Plateformes': 'Linux, web', 'Prix / licence': 'Gratuit / Apache 2.0', 'Différence clé': 'Moteur RAG centré sur la compréhension approfondie des documents et les citations' },
          { 'Application': '[AnythingLLM](/fr/power-local-llm/anythingllm-review)', 'Plateformes': 'Windows, macOS, Linux, web', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Application de bureau installable avec base vectorielle intégrée, sans conteneurs' },
          { 'Application': '[Dify](/fr/power-local-llm/dify-ai-workflow-builder-review)', 'Plateformes': 'Web, Linux', 'Prix / licence': 'Freemium / Apache 2.0 modifiée', 'Différence clé': 'Constructeur plus large de flux IA et d’agents, où le RAG n’est qu’une partie' },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez prix, licence et plateformes sur la fiche de chaque application.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Quels modèles Ollama OpenRAG recommande-t-il ?',
            a: 'La documentation suggère gpt-oss:20b ou mistral-nemo:12b pour le langage, et nomic-embed-text, mxbai-embed-large ou embeddinggemma pour les embeddings. Les modèles de chat doivent prendre en charge l’appel d’outils, et la documentation ne garantit pas que tous les modèles Ollama fonctionnent.',
          },
          {
            q: 'Quels ports utilise-t-il ?',
            a: 'Par défaut, 3000 pour le frontend, 7860 pour Langflow, 8000 pour le backend, 9200 pour OpenSearch, 5601 pour OpenSearch Dashboards et 5001 pour Docling. Les ports du frontend et de Langflow se modifient dans le fichier .env.',
          },
          {
            q: 'Depuis quel stockage cloud peut-il ingérer des données ?',
            a: 'La référence de configuration décrit Google Drive via Google OAuth, SharePoint et OneDrive via un enregistrement d’application Microsoft Graph, et AWS S3 via des clés d’accès.',
          },
          {
            q: 'Comment l’appeler depuis mon propre code ?',
            a: 'Installez le SDK Python avec pip install openrag-sdk ou le SDK TypeScript avec npm install openrag-sdk. L’ancien paquet autonome openrag-mcp est obsolète.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'OpenRAG est une pile RAG gratuite sous Apache-2.0 qui, selon sa documentation, fournit Langflow, OpenSearch et Docling déjà reliés et reste activement mise à jour, avec une version début octobre 2026 et des modifications jusqu’au 23 octobre. En revanche, elle est lourde à exécuter, ne prend en charge Windows que via WSL, utilise OpenAI par défaut, et PromptQuorum n’a pu vérifier ni sa qualité, ni sa télémétrie, ni un usage totalement hors ligne. Elle convient aux développeurs qui veulent un backend RAG prêt à l’emploi et modifiable ; qui préfère une application installable peut comparer [AnythingLLM](/fr/power-local-llm/anythingllm-review), et qui ne veut que le constructeur de flux peut regarder [Langflow](/fr/power-local-llm/langflow-visual-ai-orchestration-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Documentation d’OpenRAG](https://docs.openr.ag) — présentation, démarrage rapide, options d’installation, dépannage et référence de configuration, consultés le 23 octobre 2026.',
          '[Site web d’OpenRAG](https://www.openr.ag) — page d’accueil du projet.',
          '[OpenRAG sur GitHub](https://github.com/langflow-ai/openrag) et sa [version v0.8.0](https://github.com/langflow-ai/openrag/releases) — code source, licence Apache-2.0 et fichiers de la version.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Langflow](/fr/power-local-llm/langflow-visual-ai-orchestration-review) — l’outil d’orchestration visuelle d’IA sur lequel repose OpenRAG.',
          '[Test de RAGFlow](/fr/power-local-llm/ragflow-document-understanding-rag-review) — un moteur RAG bâti autour de la compréhension approfondie des documents.',
          '[Test d’AnythingLLM](/fr/power-local-llm/anythingllm-review) — un espace de chat avec documents doté d’une base vectorielle intégrée.',
          '[Test de SurfSense](/fr/power-local-llm/surfsense-review) — un agent de bureau open source pour vos propres documents.',
          '[Outils locaux de recherche de connaissances comparés](/fr/power-local-llm/local-llm-knowledge-retrieval-compared) — le comparatif de la catégorie des outils de documents et de connaissances.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'RAG & Document Chat',
    heroImage: '/images/openrag-review-hero-ja.webp',
    title: 'OpenRAGレビュー：オープンソースのエージェント型RAGプラットフォーム',
    seoTitle: 'OpenRAGレビュー：オープンソースのエージェント型RAG基盤',
    intro:
      'OpenRAGは、Langflow・OpenSearch・Doclingをつなぎ、文書のアップロード、検索、ブラウザ上でのチャットを可能にするオープンソースのパッケージです。ターミナルから起動し、コンテナで動作するため、開発者向けです。このレビューは、2026年10月23日に確認したドキュメント、公式サイト、GitHubのリリースページに基づきます。',
    metaDescription:
      'OpenRAGレビュー：Langflow・OpenSearch・Doclingを束ねるApache-2.0のRAG基盤。導入手順、動作要件、データの流れ、確認できなかった点を解説します。',
    twitterDescription:
      'OpenRAGレビュー：uvxコマンド1つで起動するApache-2.0のエージェント型RAG基盤。動作要件、データの流れ、未確認の点。',
    audience:
      '自分の文書向けに、配線済みのRAG基盤を検討している開発者や技術チーム。何がインストールされ、何が必要で、情報源が何を確認していないかを知りたい方向けです。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenRAG レビュー',
    targetKeywords: [
      'openrag レビュー',
      'オープンソース rag プラットフォーム',
      'langflow opensearch docling',
      'エージェント型 rag セルフホスト',
      'セルフホスト 文書チャット',
      'openrag インストール',
    ],
    current_hardware_mentioned: ['Mac', 'Linux PC', 'Windows PC with WSL'],
    leadAnswerBlock:
      '**OpenRAG（バージョン0.8.0、2026年10月1日公開）は、Langflow・OpenSearch・Doclingを束ね、文書をアップロードしてWebインターフェースでチャットできる、Apache-2.0の無料プラットフォームです。**ターミナルから起動するコンテナで動作するため、ダブルクリックで使うアプリではなく開発者向けのツールです。PromptQuorumはインストールもテストもしておらず、記載はすべてプロジェクト自身のドキュメントに基づきます。',
    quickAnswerTop: {
      ja: {
        question: 'OpenRAGはローカルで完結するプライベートなRAGアプリですか？',
        answer:
          '一部のみです。ドキュメントによれば、ファイルの解析はDocling、保存はOpenSearchが、自分で運用するコンテナ内で行います。ただしクイックスタートはOpenAIのAPIキーを使うため、ローカルのOllamaモデルを選ばない限り、プロンプトと文書の抜粋はOpenAIに送られます。',
        bullets: [
          '組み込みのフローは、内蔵のLangflowビジュアルエディタで編集できます。',
          'ローカルファイルと、OAuthコネクタ経由のクラウドストレージを取り込めます。',
          'OpenSearchによりハイブリッド検索とマルチテナントに対応します。',
          'PythonとTypeScriptのSDKで、自作コードから呼び出せます。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'OpenRAGとは', anchor: 'what-is-openrag' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '始め方', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'データの流れとアクセス', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかった点', anchor: 'who-should-not-use' },
      { label: '競合と代替ツール', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenRAGは、uvxコマンド1つで文書向けの完成済みRAG基盤を起動できる、Apache-2.0のパッケージです。',
          },
          {
            type: 'plain-terms',
            text: 'ターミナルでインストーラーを実行すると複数のコンテナが起動し、あとはファイルをアップロードして、ブラウザのチャットで質問します。',
          },
        ],
        items: [
          '保守状況：v0.8.0は2026年10月1日に公開され、リポジトリは2026年10月23日にも更新されているため、更新停止の警告は不要です。',
          'ライセンス：Apache-2.0。ソースコードはGitHubのlangflow-ai組織で公開されています。',
          '費用：パッケージ自体に価格はなく、かかるのはハードウェアと、接続するモデルAPIの料金です。',
          'Windows：Windows Subsystem for Linux内でのみ対応しています。',
          '重さ：コンテナ前提でディスク容量も大きく必要なため、軽量ノートPCより開発用マシンやサーバー向きです。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'このレビューは、2026年10月23日に確認したOpenRAGのドキュメント、公式サイト、GitHubのリリースページに基づきます。PromptQuorumはソフトウェアのインストール、テスト、ベンチマークを行っていません。',
          },
        ],
      },
      overview: {
        id: 'what-is-openrag',
        title: 'OpenRAGとは',
        content: [
          '**OpenRAGは、ナレッジベースに文書を追加し、チャット画面でAIエージェントに質問できる検索拡張生成（RAG）プラットフォームです。**プロジェクトはこれを、エージェント型RAGシステムを構築するためのオープンソースのパッケージと説明しており、既存の3つのプロジェクトを組み合わせています。エージェントのフローにLangflow、文書とベクトルの保存にOpenSearch、ファイルの解析と分割にDoclingを使います。',
          '開発は[langflow-ai/openrag](https://github.com/langflow-ai/openrag)リポジトリで行われ、バックエンドはFastAPI、フロントエンドはNext.jsです。ドキュメントは[docs.openr.ag](https://docs.openr.ag)にあります。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**OpenRAGはダウンロードして使うデスクトップアプリではなく、ターミナルからuvでインストールし、独自のコンテナを起動する形です。**',
        ],
        columns: ['方法', '入手先'],
        rows: [
          { '方法': 'クイックスタート（macOS、Linux）', '入手先': '空のフォルダでuvx --python 3.13 openragを実行' },
          { '方法': 'Windows', '入手先': '同じコマンドをWSL内でのみ実行（動作要件を参照）' },
          { '方法': 'Pythonプロジェクト', '入手先': '[インストールオプション](https://docs.openr.ag/install-options)に従い、uvで依存関係として追加' },
          { '方法': 'セルフマネージド', '入手先': '[Dockerガイド](https://docs.openr.ag/docker)に従い、DockerまたはPodmanと自前の.envファイルで運用' },
          { '方法': '公式サイト', '入手先': '[openr.ag](https://www.openr.ag)' },
          { '方法': 'ドキュメント', '入手先': '[docs.openr.ag](https://docs.openr.ag)' },
          { '方法': 'ソースコード', '入手先': '[github.com/langflow-ai/openrag](https://github.com/langflow-ai/openrag)' },
          { '方法': 'プライバシーポリシー', '入手先': 'OpenRAG固有のページは見つからず。ドキュメントの同意設定は[IBMのプライバシーステートメント](https://www.ibm.com/privacy)を参照' },
        ],
        note: '確認したバージョン：v0.8.0。[GitHubのリリースページ](https://github.com/langflow-ai/openrag/releases)によれば2026年10月1日公開で、リポジトリ自体は2026年10月23日に最後に更新されています。リリースにはPythonのwheelとソースアーカイブしかなく、インストーラーやデスクトップ版はないため、ターミナルと開発環境が必要です。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**ドキュメントが求めるのは、コンテナ実行環境、8 GBのRAM、50 GBを超える空きディスクです。**',
        ],
        columns: ['項目', 'ドキュメントの記載'],
        rows: [
          { '項目': 'Pythonとuv', 'ドキュメントの記載': 'クイックスタートではPython 3.13とuv' },
          { '項目': 'コンテナ実行環境', 'ドキュメントの記載': 'DockerまたはPodmanとcomposeツール。なければuvxが導入' },
          { '項目': 'RAM', 'ドキュメントの記載': '推奨される最小値は8 GB' },
          { '項目': 'ディスク', 'ドキュメントの記載': '初期設定と取り込みに50 GB超の空き' },
          { '項目': 'Windows', 'ドキュメントの記載': 'WSL内のみ。Windows VM上のWSLディストリビューションは不可' },
          { '項目': 'ローカルモデル', 'ドキュメントの記載': 'Ollamaのgpt-oss:20bは16 GB以上のRAMが必要' },
        ],
        note: '確認したページには、OpenRAG自体のGPU要件の記載はなく、GPUを使うにはOllamaをGPU対応コンテナで動かす必要がある、とあるのみです。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '始め方',
        content: [
          '**手順はプロジェクトのクイックスタートに沿っています。PromptQuorumは実行していません。**',
        ],
        numberedItems: [
          {
            title: '作業フォルダを作る',
            whyItMatters: 'openrag-workspaceのような空のディレクトリを作り、そこでターミナルを開きます。',
          },
          {
            title: 'インストーラーを起動する',
            whyItMatters: 'uvx --python 3.13 openragを実行すると、ターミナル画面が開きます。',
          },
          {
            title: '管理者パスワードを設定する',
            whyItMatters: 'OpenSearchとLangflowの管理者パスワードは自動生成か手入力にし、ほかの質問はスキップして初期値のままにします。',
          },
          {
            title: 'サービスを起動する',
            whyItMatters: '「Start services now?」にYと答え、「Services are running」と表示されるのを待ってから、ブラウザでOpenRAGを開きます。',
          },
          {
            title: 'オンボーディングを完了する',
            whyItMatters: 'モデルプロバイダーを選び、APIキーを入力してCompleteをクリックします。クイックスタートではOpenAIを使います。',
          },
          {
            title: 'ナレッジを追加してチャットする',
            whyItMatters: 'ファイルやフォルダをアップロードし、チャット画面で質問します。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべて、プロジェクトのドキュメントまたはREADMEに基づきます。**',
        ],
        items: [
          '**編集できるフロー。**組み込みのエージェントフローは、内蔵のLangflowエディタで編集でき、モデルやコンポーネントの差し替えも可能です。独自のLangflowコンポーネントやMCPサーバーにも対応します。',
          '**文書の取り込み。**ファイルはローカルのファイルシステム、またはOAuthで認可したクラウドストレージのコネクタから取り込み、Docling Serveが解析・分割します。',
          '**検索。**OpenSearchが文書と埋め込みを保存し、ハイブリッド検索とマルチテナントを提供します。',
          '**SDKとAPI。**公式のPython／TypeScript SDKがopenrag-sdkとして公開され、ドキュメントにはAPIリファレンスもあります。',
          '**可観測性。**LangfuseへのトレースとIBM Instanaトレーサーは任意で、初期状態ではオフです。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'データの流れとアクセス',
        content: [
          '**ドキュメントによれば、文書はDocling Serveがローカルで処理し、OpenSearchの自分のナレッジベースに保存されます。クラウドのデータは、自分が認可したコネクタ経由でのみ読み込まれます。**構成はコンテナで、バックエンド、Langflow、Docling Serve、コネクタ、フロントエンドからなります。',
          '既定のモデルプロバイダーはOpenAIで、使う場合はプロンプトと取得した文書の抜粋が、OpenAIのポリシーのもとでOpenAIに送られます。設定リファレンスにはAnthropic、Ollama、IBM watsonx.aiも挙げられており、ローカルのOllamaエンドポイントに向けることもできます。Langflowのスーパーユーザーのパスワードを設定しないと、Langflowは認証なしで起動するため、ドキュメントは設定を勧めています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ローカル処理に関する記述はプロジェクト自身の説明です。PromptQuorumはコンテナやそのネットワーク通信を監査していません。ターミナルのアップグレード確認は、イメージレジストリを変更しない限りDocker Hub APIに問い合わせます。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**配線済みのRAG基盤がほしい開発者。**Langflow、OpenSearch、Doclingを自分で組み合わせる手間を省けます。',
          '**すでにコンテナを運用しているチーム。**自分のファイルに対して、マルチテナント対応のハイブリッド検索を使いたい場合に向きます。',
          '**APIやSDKが必要な開発者。**文書検索エージェントを自作アプリから呼び出せます。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実際の品質。**PromptQuorumはソフトウェアを実行していないため、回答の質、引用の正確さ、取り込み速度、安定性は評価していません。',
          '**テレメトリ。**確認したページには、コンテナの利用状況分析やオプトアウト設定の記載がありません。',
          '**プライバシーポリシー。**OpenRAG固有のポリシーページは見つからず、ドキュメントはIBMの一般的なプライバシーステートメントを参照するのみです。',
          '**完全ローカル運用。**ドキュメントにOllama対応の記載はありますが、クイックスタートはOpenAIでしか説明されておらず、完全オフラインの構成は未検証です。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替ツール',
        columns: ['アプリ', '対応プラットフォーム', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Langflow](/ja/power-local-llm/langflow-visual-ai-orchestration-review)', '対応プラットフォーム': 'Web', '価格／ライセンス': '無料／MIT', '主な違い': 'OpenRAGが内蔵するビジュアルフロービルダー。同梱の検索基盤は含まない' },
          { 'アプリ': '[RAGFlow](/ja/power-local-llm/ragflow-document-understanding-rag-review)', '対応プラットフォーム': 'Linux、Web', '価格／ライセンス': '無料／Apache 2.0', '主な違い': '深い文書理解と引用を重視するRAGエンジン' },
          { 'アプリ': '[AnythingLLM](/ja/power-local-llm/anythingllm-review)', '対応プラットフォーム': 'Windows、macOS、Linux、Web', '価格／ライセンス': '無料／MIT', '主な違い': 'ベクトルストア内蔵でコンテナ不要のインストール型デスクトップアプリ' },
          { 'アプリ': '[Dify](/ja/power-local-llm/dify-ai-workflow-builder-review)', '対応プラットフォーム': 'Web、Linux', '価格／ライセンス': 'フリーミアム／改変Apache 2.0', '主な違い': 'RAGは一部にすぎない、より広範なAIワークフロー／エージェント構築ツール' },
        ],
        note: '競合の情報は頻繁に変わります。価格、ライセンス、対応プラットフォームは各アプリの掲載ページでご確認ください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'OpenRAGはどのOllamaモデルを推奨していますか？',
            a: 'ドキュメントでは、言語モデルにgpt-oss:20bまたはmistral-nemo:12b、埋め込みにnomic-embed-text、mxbai-embed-large、embeddinggemmaを挙げています。チャットモデルはツール呼び出しに対応している必要があり、すべてのOllamaモデルが動作するとは保証されていません。',
          },
          {
            q: 'どのポートを使いますか？',
            a: '既定では、フロントエンドが3000、Langflowが7860、バックエンドが8000、OpenSearchが9200、OpenSearch Dashboardsが5601、Doclingが5001です。フロントエンドとLangflowのポートは.envファイルで変更できます。',
          },
          {
            q: 'どのクラウドストレージから取り込めますか？',
            a: '設定リファレンスには、Google OAuth経由のGoogle Drive、Microsoft Graphのアプリ登録経由のSharePointとOneDrive、アクセスキー経由のAWS S3が記載されています。',
          },
          {
            q: '自作コードから呼び出すにはどうしますか？',
            a: 'Python SDKはpip install openrag-sdk、TypeScript SDKはnpm install openrag-sdkでインストールします。以前の単体パッケージopenrag-mcpは非推奨です。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content:
          'OpenRAGは、ドキュメントによれば、Langflow・OpenSearch・Doclingを接続済みで同梱するApache-2.0の無料RAG基盤で、2026年10月初めのリリースと10月23日までの更新があり、活発に保守されています。一方で、動かすには重く、WindowsはWSL経由のみ、既定はOpenAIで、品質、テレメトリ、完全オフラインでの利用はPromptQuorumでは確認できませんでした。すぐ使えて手を入れやすいRAGバックエンドがほしい開発者に向いています。インストール型のアプリが好みなら[AnythingLLM](/ja/power-local-llm/anythingllm-review)、フロービルダーだけなら[Langflow](/ja/power-local-llm/langflow-visual-ai-orchestration-review)も比べてみてください。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[OpenRAGドキュメント](https://docs.openr.ag) — 概要、クイックスタート、インストールオプション、トラブルシューティング、設定リファレンス。2026年10月23日に確認。',
          '[OpenRAG公式サイト](https://www.openr.ag) — プロジェクトのトップページ。',
          '[GitHubのOpenRAG](https://github.com/langflow-ai/openrag)と[v0.8.0リリース](https://github.com/langflow-ai/openrag/releases) — ソースコード、Apache-2.0ライセンス、リリースのファイル。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Langflowレビュー](/ja/power-local-llm/langflow-visual-ai-orchestration-review)：OpenRAGが土台にしているビジュアルAIオーケストレーションツール。',
          '[RAGFlowレビュー](/ja/power-local-llm/ragflow-document-understanding-rag-review)：深い文書理解を軸にしたRAGエンジン。',
          '[AnythingLLMレビュー](/ja/power-local-llm/anythingllm-review)：ベクトルストア内蔵の文書チャットワークスペース。',
          '[SurfSenseレビュー](/ja/power-local-llm/surfsense-review)：自分の文書のためのオープンソースのデスクトップエージェント。',
          '[ローカルLLMの知識検索ツール比較](/ja/power-local-llm/local-llm-knowledge-retrieval-compared)：文書・ナレッジ系ツールのカテゴリ比較。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'RAG & Document Chat',
    heroImage: '/images/openrag-review-hero-pt.webp',
    title: 'Análise do OpenRAG: plataforma RAG agêntica de código aberto',
    seoTitle: 'Análise do OpenRAG: plataforma RAG agêntica aberta',
    intro:
      'O OpenRAG é um pacote de código aberto que conecta Langflow, OpenSearch e Docling para que você possa enviar documentos, pesquisá-los e conversar com eles no navegador. Ele é iniciado pelo terminal e roda em contêineres, por isso é voltado a desenvolvedores. Esta análise reflete sua documentação, seu site e a página de versões no GitHub, conforme verificados em 23 de outubro de 2026.',
    metaDescription:
      'Análise do OpenRAG: plataforma RAG Apache-2.0 que reúne Langflow, OpenSearch e Docling. Instalação, requisitos, fluxo de dados e o que não verificamos.',
    twitterDescription:
      'Análise do OpenRAG: um stack RAG agêntico com licença Apache-2.0, iniciado com um comando uvx. Requisitos, fluxo de dados e dúvidas em aberto.',
    audience:
      'Desenvolvedores e equipes técnicas que avaliam um stack RAG já integrado para seus próprios documentos e precisam saber o que ele instala, o que exige e o que as fontes não confirmam.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do OpenRAG',
    targetKeywords: [
      'análise openrag',
      'plataforma rag de código aberto',
      'langflow opensearch docling',
      'rag agêntico auto-hospedado',
      'conversar com documentos auto-hospedado',
      'instalar openrag',
    ],
    current_hardware_mentioned: ['Mac', 'Linux PC', 'Windows PC with WSL'],
    leadAnswerBlock:
      '**O OpenRAG (versão 0.8.0, lançada em 1º de outubro de 2026) é uma plataforma gratuita com licença Apache-2.0 que reúne Langflow, OpenSearch e Docling para que você envie documentos e converse com eles por uma interface web.** Ele roda em contêineres iniciados pelo terminal, o que o torna uma ferramenta para desenvolvedores, e não um app de duplo clique. A PromptQuorum não o instalou nem o testou; tudo o que consta aqui vem da documentação do próprio projeto.',
    quickAnswerTop: {
      pt: {
        question: 'O OpenRAG é um app RAG local e privado?',
        answer:
          'Em parte. Segundo a documentação, o Docling analisa seus arquivos e o OpenSearch os armazena em contêineres que você mesmo executa, mas o início rápido usa uma chave de API da OpenAI, então prompts e trechos de documentos vão para a OpenAI, a menos que você escolha um modelo local do Ollama.',
        bullets: [
          'Os fluxos incluídos podem ser editados no editor visual do Langflow integrado.',
          'Ingere arquivos locais e, por conectores OAuth, armazenamento em nuvem.',
          'O OpenSearch adiciona busca híbrida e multilocação.',
          'SDKs de Python e TypeScript permitem chamá-lo a partir do seu código.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o OpenRAG?', anchor: 'what-is-openrag' },
      { label: 'Onde obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Fluxo de dados e acesso', anchor: 'privacy' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
      { label: 'Concorrentes e alternativas', anchor: 'vs-alternatives' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O OpenRAG é um pacote com licença Apache-2.0 que inicia, com um único comando uvx, um stack RAG pronto para os seus documentos.',
          },
          {
            type: 'plain-terms',
            text: 'Você executa um instalador no terminal, ele sobe alguns contêineres e, depois, você envia arquivos e faz perguntas em um chat no navegador.',
          },
        ],
        items: [
          'Manutenção: a v0.8.0 foi publicada em 1º de outubro de 2026 e o repositório mudou de novo em 23 de outubro de 2026, então não se aplica nenhum aviso de projeto parado.',
          'Licença: Apache-2.0, com o código-fonte no GitHub, na organização langflow-ai.',
          'Custo: o pacote não tem preço; seus gastos são o hardware e qualquer API de modelo que você conectar.',
          'Windows: só é compatível dentro do Subsistema do Windows para Linux.',
          'Peso: é baseado em contêineres e ocupa muito disco, então serve mais para uma máquina de desenvolvimento ou servidor do que para um notebook leve.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise baseia-se na documentação do OpenRAG, no site e na página de versões do GitHub, verificados em 23 de outubro de 2026. A PromptQuorum não instalou, testou nem mediu o desempenho do software.',
          },
        ],
      },
      overview: {
        id: 'what-is-openrag',
        title: 'O que é o OpenRAG?',
        content: [
          '**O OpenRAG é uma plataforma de geração aumentada por recuperação em que você adiciona documentos a uma base de conhecimento e faz perguntas sobre eles a um agente de IA em uma interface de chat.** O projeto o descreve como um pacote de código aberto para construir sistemas RAG agênticos que combina três projetos existentes: o Langflow para os fluxos de agentes, o OpenSearch para o armazenamento de documentos e vetores e o Docling para analisar e dividir arquivos.',
          'Ele é desenvolvido no repositório [langflow-ai/openrag](https://github.com/langflow-ai/openrag), com backend em FastAPI e frontend em Next.js. A documentação fica em [docs.openr.ag](https://docs.openr.ag).',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde obter',
        content: [
          '**O OpenRAG não é um app de desktop para baixar: você o instala pelo terminal com o uv, e ele então inicia seus próprios contêineres.**',
        ],
        columns: ['Opção', 'Onde obter'],
        rows: [
          { 'Opção': 'Início rápido (macOS, Linux)', 'Onde obter': 'Execute uvx --python 3.13 openrag em uma pasta vazia' },
          { 'Opção': 'Windows', 'Onde obter': 'O mesmo comando, mas só dentro do WSL (veja Requisitos)' },
          { 'Opção': 'Projeto Python', 'Onde obter': 'Adicione como dependência com o uv, conforme as [opções de instalação](https://docs.openr.ag/install-options)' },
          { 'Opção': 'Autogerenciado', 'Onde obter': 'Docker ou Podman com seu próprio arquivo .env, conforme o [guia do Docker](https://docs.openr.ag/docker)' },
          { 'Opção': 'Site', 'Onde obter': '[openr.ag](https://www.openr.ag)' },
          { 'Opção': 'Documentação', 'Onde obter': '[docs.openr.ag](https://docs.openr.ag)' },
          { 'Opção': 'Código-fonte', 'Onde obter': '[github.com/langflow-ai/openrag](https://github.com/langflow-ai/openrag)' },
          { 'Opção': 'Política de privacidade', 'Onde obter': 'Nenhuma própria; a documentação cita a [declaração de privacidade da IBM](https://www.ibm.com/privacy)' },
        ],
        note: 'Versão analisada: v0.8.0, publicada em 1º de outubro de 2026 segundo a [página de versões do GitHub](https://github.com/langflow-ai/openrag/releases); o repositório em si foi atualizado pela última vez em 23 de outubro de 2026. A versão traz apenas um pacote wheel de Python e um arquivo de código-fonte, sem instalador nem build de desktop, por isso são necessários um terminal e um ambiente de desenvolvimento.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**A documentação pede um ambiente de contêineres, 8 GB de RAM e mais de 50 GB de disco livre.**',
        ],
        columns: ['Item', 'O que diz a documentação'],
        rows: [
          { 'Item': 'Python e uv', 'O que diz a documentação': 'Python 3.13 e uv, conforme o início rápido' },
          { 'Item': 'Ambiente de contêineres', 'O que diz a documentação': 'Docker ou Podman mais uma ferramenta compose; o uvx instala uma se faltar' },
          { 'Item': 'RAM', 'O que diz a documentação': '8 GB é o mínimo recomendado' },
          { 'Item': 'Disco', 'O que diz a documentação': 'Mais de 50 GB livres para a configuração inicial e a ingestão' },
          { 'Item': 'Windows', 'O que diz a documentação': 'Só no WSL; não em uma distro WSL dentro de uma VM do Windows' },
          { 'Item': 'Modelos locais', 'O que diz a documentação': 'O gpt-oss:20b via Ollama exige pelo menos 16 GB de RAM' },
        ],
        note: 'As páginas verificadas não indicam requisito de GPU para o OpenRAG em si, apenas que o Ollama precisa rodar em um contêiner com suporte a GPU para usá-la.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**Os passos seguem o início rápido do projeto; a PromptQuorum não os executou.**',
        ],
        numberedItems: [
          {
            title: 'Crie uma pasta de trabalho',
            whyItMatters: 'Crie um diretório vazio, como openrag-workspace, e abra um terminal nele.',
          },
          {
            title: 'Inicie o instalador',
            whyItMatters: 'Execute uvx --python 3.13 openrag, que abre uma interface de terminal.',
          },
          {
            title: 'Defina as senhas de administrador',
            whyItMatters: 'Gere automaticamente ou digite as senhas de administrador do OpenSearch e do Langflow; pule as demais perguntas para manter os padrões.',
          },
          {
            title: 'Inicie os serviços',
            whyItMatters: 'Responda Y a “Start services now?”, aguarde a mensagem “Services are running” e abra o OpenRAG no navegador.',
          },
          {
            title: 'Conclua a integração inicial',
            whyItMatters: 'Escolha um provedor de modelos, informe a chave de API e clique em Complete; o início rápido usa a OpenAI.',
          },
          {
            title: 'Adicione conhecimento e converse',
            whyItMatters: 'Envie arquivos ou pastas e faça perguntas na visualização de chat.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da documentação ou do README do projeto.**',
        ],
        items: [
          '**Fluxos editáveis.** Os fluxos de agentes incluídos podem ser personalizados no editor do Langflow integrado, inclusive trocando modelos ou componentes; há suporte a componentes personalizados do Langflow e a servidores MCP.',
          '**Ingestão de documentos.** Os arquivos vêm do seu sistema de arquivos local ou de conectores de armazenamento em nuvem autorizados por OAuth; o Docling Serve os analisa e divide.',
          '**Busca.** O OpenSearch armazena documentos e embeddings e adiciona busca híbrida e multilocação.',
          '**SDKs e API.** SDKs oficiais de Python e TypeScript são publicados como openrag-sdk, e a documentação inclui uma referência da API.',
          '**Observabilidade.** O rastreamento para o Langfuse e o rastreador IBM Instana são opcionais e vêm desativados por padrão.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Fluxo de dados e acesso',
        content: [
          '**Segundo a documentação, o Docling Serve processa seus documentos localmente e o OpenSearch os armazena na sua própria base de conhecimento; fontes na nuvem só são carregadas por conectores que você autoriza.** A arquitetura é feita de contêineres: um backend, o Langflow, o Docling Serve, os conectores e um frontend.',
          'A OpenAI é o provedor de modelos padrão; com ela, seus prompts e os trechos de documentos recuperados vão para a OpenAI, sob a política dela. A referência de configuração também cita Anthropic, Ollama e IBM watsonx.ai, o que permite apontar para um endpoint local do Ollama. Se nenhuma senha de superusuário do Langflow for definida, ele inicia sem autenticação, e por isso a documentação recomenda definir uma.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A afirmação sobre o processamento local é a descrição do próprio projeto; a PromptQuorum não auditou os contêineres nem o tráfego de rede deles. A verificação de atualização do terminal consulta a API do Docker Hub, a menos que o registro de imagens seja alterado.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        items: [
          '**Desenvolvedores que querem um stack RAG já conectado** em vez de montar Langflow, OpenSearch e Docling por conta própria.',
          '**Equipes que já executam contêineres** e querem busca híbrida com multilocação sobre seus próprios arquivos.',
          '**Quem precisa de uma API ou de um SDK** para chamar um agente de busca em documentos a partir da própria aplicação.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade na prática.** A PromptQuorum não executou o software, então qualidade das respostas, precisão das citações, velocidade de ingestão e estabilidade não foram avaliadas.',
          '**Telemetria.** As páginas verificadas não documentam análises de uso nem uma opção de desativação para os contêineres.',
          '**Política de privacidade.** Nenhuma específica do OpenRAG foi encontrada; a documentação só remete à declaração de privacidade geral da IBM.',
          '**Operação totalmente local.** A documentação descreve o suporte ao Ollama, mas o início rápido só está documentado com a OpenAI, então uma configuração totalmente offline não foi testada.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Langflow](/pt/power-local-llm/langflow-visual-ai-orchestration-review)', 'Plataformas': 'Web', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'O construtor visual de fluxos que o OpenRAG incorpora, sem o stack de busca incluído' },
          { 'App': '[RAGFlow](/pt/power-local-llm/ragflow-document-understanding-rag-review)', 'Plataformas': 'Linux, web', 'Preço / licença': 'Grátis / Apache 2.0', 'Diferença principal': 'Motor RAG centrado na compreensão profunda de documentos e nas citações' },
          { 'App': '[AnythingLLM](/pt/power-local-llm/anythingllm-review)', 'Plataformas': 'Windows, macOS, Linux, web', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'App de desktop instalável com armazenamento vetorial integrado, sem contêineres' },
          { 'App': '[Dify](/pt/power-local-llm/dify-ai-workflow-builder-review)', 'Plataformas': 'Web, Linux', 'Preço / licença': 'Freemium / Apache 2.0 modificada', 'Diferença principal': 'Construtor mais amplo de fluxos de IA e agentes, com o RAG como uma parte' },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quais modelos do Ollama o OpenRAG recomenda?',
            a: 'A documentação sugere gpt-oss:20b ou mistral-nemo:12b como modelos de linguagem e nomic-embed-text, mxbai-embed-large ou embeddinggemma para embeddings. Os modelos de chat precisam aceitar chamadas de ferramentas, e a documentação não garante que todo modelo do Ollama funcione.',
          },
          {
            q: 'Quais portas ele usa?',
            a: 'Por padrão, 3000 para o frontend, 7860 para o Langflow, 8000 para o backend, 9200 para o OpenSearch, 5601 para o OpenSearch Dashboards e 5001 para o Docling. As portas do frontend e do Langflow podem ser alteradas no arquivo .env.',
          },
          {
            q: 'De qual armazenamento em nuvem ele pode ingerir dados?',
            a: 'A referência de configuração descreve o Google Drive via Google OAuth, o SharePoint e o OneDrive via registro de aplicativo no Microsoft Graph e o AWS S3 via chaves de acesso.',
          },
          {
            q: 'Como chamo o OpenRAG do meu próprio código?',
            a: 'Instale o SDK de Python com pip install openrag-sdk ou o SDK de TypeScript com npm install openrag-sdk. O pacote independente anterior, openrag-mcp, está obsoleto.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'O OpenRAG é um stack RAG gratuito com licença Apache-2.0 que, segundo a documentação, traz Langflow, OpenSearch e Docling já conectados e é mantido ativamente, com uma versão no início de outubro de 2026 e alterações até 23 de outubro. Em contrapartida, é pesado de executar, só tem suporte ao Windows via WSL, usa a OpenAI por padrão, e a PromptQuorum não conseguiu verificar sua qualidade, sua telemetria nem o uso totalmente offline. Serve a desenvolvedores que querem um backend RAG pronto e modificável; quem prefere um app instalável pode comparar o [AnythingLLM](/pt/power-local-llm/anythingllm-review), e quem só precisa do construtor de fluxos pode olhar o [Langflow](/pt/power-local-llm/langflow-visual-ai-orchestration-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Documentação do OpenRAG](https://docs.openr.ag) — visão geral, início rápido, opções de instalação, solução de problemas e referência de configuração, verificados em 23 de outubro de 2026.',
          '[Site do OpenRAG](https://www.openr.ag) — página inicial do projeto.',
          '[OpenRAG no GitHub](https://github.com/langflow-ai/openrag) e sua [versão v0.8.0](https://github.com/langflow-ai/openrag/releases) — código-fonte, licença Apache-2.0 e arquivos da versão.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Langflow](/pt/power-local-llm/langflow-visual-ai-orchestration-review) — a ferramenta de orquestração visual de IA sobre a qual o OpenRAG é construído.',
          '[Análise do RAGFlow](/pt/power-local-llm/ragflow-document-understanding-rag-review) — um motor RAG construído em torno da compreensão profunda de documentos.',
          '[Análise do AnythingLLM](/pt/power-local-llm/anythingllm-review) — um espaço de chat com documentos com armazenamento vetorial integrado.',
          '[Análise do SurfSense](/pt/power-local-llm/surfsense-review) — um agente de desktop de código aberto para seus próprios documentos.',
          '[Ferramentas locais de recuperação de conhecimento comparadas](/pt/power-local-llm/local-llm-knowledge-retrieval-compared) — a comparação da categoria de ferramentas de documentos e conhecimento.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'RAG & Document Chat',
    heroImage: '/images/openrag-review-hero-ar.webp',
    title: 'مراجعة OpenRAG: منصة RAG وكيلية مفتوحة المصدر',
    seoTitle: 'مراجعة OpenRAG: منصة RAG وكيلية مفتوحة المصدر للمستندات',
    intro:
      'OpenRAG حزمة مفتوحة المصدر تربط Langflow وOpenSearch وDocling لتتمكن من رفع المستندات والبحث فيها والدردشة معها في المتصفح. تُشغَّل من الطرفية وتعمل داخل حاويات، لذا فهي موجّهة للمطورين. تعكس هذه المراجعة وثائقها وموقعها وصفحة الإصدارات على GitHub كما جرى التحقق منها في 23 أكتوبر 2026.',
    metaDescription:
      'مراجعة OpenRAG: منصة RAG بترخيص Apache-2.0 تجمع Langflow وOpenSearch وDocling. خطوات التثبيت والمتطلبات وتدفق البيانات وما لم نتمكن من التحقق منه.',
    twitterDescription:
      'مراجعة OpenRAG: حزمة RAG وكيلية بترخيص Apache-2.0 تبدأ بأمر uvx واحد. المتطلبات وتدفق البيانات وأسئلة مفتوحة.',
    audience:
      'مطورون وفرق تقنية يقيّمون حزمة RAG جاهزة لمستنداتهم الخاصة، ويحتاجون إلى معرفة ما تثبّته وما تتطلبه وما لا تؤكده المصادر.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة OpenRAG',
    targetKeywords: [
      'مراجعة openrag',
      'منصة rag مفتوحة المصدر',
      'langflow opensearch docling',
      'rag وكيلي مستضاف ذاتيًا',
      'الدردشة مع المستندات استضافة ذاتية',
      'تثبيت openrag',
    ],
    current_hardware_mentioned: ['Mac', 'Linux PC', 'Windows PC with WSL'],
    leadAnswerBlock:
      '**OpenRAG (الإصدار 0.8.0، صدر في 1 أكتوبر 2026) منصة مجانية بترخيص Apache-2.0 تجمع Langflow وOpenSearch وDocling لتتمكن من رفع المستندات والدردشة معها عبر واجهة ويب.** تعمل داخل حاويات تُشغَّل من الطرفية، فهي أداة للمطورين وليست تطبيقًا يُثبَّت بنقرتين. لم تثبّتها PromptQuorum ولم تختبرها؛ كل ما يرد هنا مصدره وثائق المشروع نفسه.',
    quickAnswerTop: {
      ar: {
        question: 'هل OpenRAG تطبيق RAG محلي وخاص؟',
        answer:
          'جزئيًا. وفق الوثائق، يحلّل Docling ملفاتك ويخزّنها OpenSearch في حاويات تشغّلها بنفسك، لكن البدء السريع يستخدم مفتاح واجهة OpenAI، ولذلك تُرسَل الأوامر ومقتطفات المستندات إلى OpenAI ما لم تختر نموذج Ollama محليًا.',
        bullets: [
          'يمكن تعديل التدفقات المدمجة في محرر Langflow المرئي المضمَّن.',
          'يستوعب الملفات المحلية، ويستوعب التخزين السحابي عبر موصّلات OAuth.',
          'يضيف OpenSearch بحثًا هجينًا ودعمًا لتعدد المستأجرين.',
          'تتيح حزم SDK لـ Python وTypeScript استدعاءه من شيفرتك.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو OpenRAG؟', anchor: 'what-is-openrag' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'الميزات التي أكدتها المصادر', anchor: 'key-features' },
      { label: 'تدفق البيانات والوصول', anchor: 'privacy' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
      { label: 'المنافسون والبدائل', anchor: 'vs-alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenRAG حزمة بترخيص Apache-2.0 تشغّل بأمر uvx واحد حزمة RAG جاهزة لمستنداتك.',
          },
          {
            type: 'plain-terms',
            text: 'تشغّل مثبّتًا في الطرفية فيطلق عدة حاويات، ثم ترفع الملفات وتطرح أسئلتك في دردشة داخل المتصفح.',
          },
        ],
        items: [
          'الصيانة: صدر الإصدار v0.8.0 في 1 أكتوبر 2026 وتغيّر المستودع مجددًا في 23 أكتوبر 2026، لذا لا ينطبق تحذير المشروع المتوقف.',
          'الترخيص: Apache-2.0، والشيفرة المصدرية على GitHub ضمن منظمة langflow-ai.',
          'التكلفة: لا سعر للحزمة؛ تكاليفك هي العتاد وأي واجهة نموذج تربطها.',
          'Windows: مدعوم فقط داخل نظام Windows الفرعي لـ Linux.',
          'الثقل: تعتمد على الحاويات وتحتاج مساحة قرص كبيرة، فهي أنسب لجهاز تطوير أو خادم منها لحاسوب محمول خفيف.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى وثائق OpenRAG وموقعه وصفحة الإصدارات على GitHub، كما جرى التحقق منها في 23 أكتوبر 2026. لم تثبّت PromptQuorum البرنامج ولم تختبره ولم تقِس أداءه.',
          },
        ],
      },
      overview: {
        id: 'what-is-openrag',
        title: 'ما هو OpenRAG؟',
        content: [
          '**OpenRAG منصة للتوليد المعزَّز بالاسترجاع، تضيف فيها مستندات إلى قاعدة معرفة وتطرح على وكيل ذكاء اصطناعي أسئلة عنها في واجهة دردشة.** يصفه المشروع بأنه حزمة مفتوحة المصدر لبناء أنظمة RAG وكيلية، تجمع ثلاثة مشاريع قائمة: Langflow لتدفقات الوكلاء، وOpenSearch لتخزين المستندات والمتجهات، وDocling لتحليل الملفات وتقطيعها.',
          'يُطوَّر في مستودع [langflow-ai/openrag](https://github.com/langflow-ai/openrag) بواجهة خلفية FastAPI وواجهة أمامية Next.js. وثائقه على [docs.openr.ag](https://docs.openr.ag).',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**OpenRAG ليس تطبيق سطح مكتب قابلًا للتنزيل: تثبّته من الطرفية بواسطة uv، ثم يطلق حاوياته الخاصة.**',
        ],
        columns: ['الخيار', 'مصدر الحصول عليه'],
        rows: [
          { 'الخيار': 'البدء السريع (macOS وLinux)', 'مصدر الحصول عليه': 'شغّل uvx --python 3.13 openrag في مجلد فارغ' },
          { 'الخيار': 'Windows', 'مصدر الحصول عليه': 'الأمر نفسه، لكن داخل WSL فقط (انظر المتطلبات)' },
          { 'الخيار': 'مشروع Python', 'مصدر الحصول عليه': 'أضفه تبعيةً عبر uv وفق [خيارات التثبيت](https://docs.openr.ag/install-options)' },
          { 'الخيار': 'إدارة ذاتية', 'مصدر الحصول عليه': 'Docker أو Podman مع ملف .env خاص بك وفق [دليل Docker](https://docs.openr.ag/docker)' },
          { 'الخيار': 'الموقع', 'مصدر الحصول عليه': '[openr.ag](https://www.openr.ag)' },
          { 'الخيار': 'الوثائق', 'مصدر الحصول عليه': '[docs.openr.ag](https://docs.openr.ag)' },
          { 'الخيار': 'الشيفرة المصدرية', 'مصدر الحصول عليه': '[github.com/langflow-ai/openrag](https://github.com/langflow-ai/openrag)' },
          { 'الخيار': 'سياسة الخصوصية', 'مصدر الحصول عليه': 'لا صفحة خاصة بـ OpenRAG؛ إعداد الموافقة في الوثائق يشير إلى [بيان خصوصية IBM](https://www.ibm.com/privacy)' },
        ],
        note: 'الإصدار الذي روجع: v0.8.0، صدر في 1 أكتوبر 2026 وفق [صفحة إصدارات GitHub](https://github.com/langflow-ai/openrag/releases)؛ وآخر تحديث للمستودع نفسه كان في 23 أكتوبر 2026. يضم الإصدار حزمة wheel لـ Python وأرشيف مصدر فقط، بلا مثبّت ولا نسخة سطح مكتب، لذا يلزم وجود طرفية وبيئة تطوير.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**تطلب الوثائق بيئة حاويات و8 GB من الذاكرة وأكثر من 50 GB من مساحة القرص الحرة.**',
        ],
        columns: ['البند', 'ما تقوله الوثائق'],
        rows: [
          { 'البند': 'Python وuv', 'ما تقوله الوثائق': 'Python 3.13 وuv وفق البدء السريع' },
          { 'البند': 'بيئة الحاويات', 'ما تقوله الوثائق': 'Docker أو Podman مع أداة compose؛ ويثبّت uvx واحدة عند غيابها' },
          { 'البند': 'الذاكرة', 'ما تقوله الوثائق': '8 GB هو الحد الأدنى الموصى به' },
          { 'البند': 'القرص', 'ما تقوله الوثائق': 'أكثر من 50 GB حرة للإعداد الأولي والاستيعاب' },
          { 'البند': 'Windows', 'ما تقوله الوثائق': 'داخل WSL فقط؛ وليس في توزيعة WSL داخل آلة افتراضية لـ Windows' },
          { 'البند': 'النماذج المحلية', 'ما تقوله الوثائق': 'يتطلب gpt-oss:20b عبر Ollama ما لا يقل عن 16 GB من الذاكرة' },
        ],
        note: 'لا تذكر الصفحات التي روجعت أي متطلب لوحدة معالجة الرسوميات لـ OpenRAG نفسه، بل فقط أن Ollama يجب أن يعمل في حاوية تدعم GPU للاستفادة منها.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**تتبع الخطوات البدء السريع للمشروع؛ ولم تنفّذها PromptQuorum.**',
        ],
        numberedItems: [
          {
            title: 'أنشئ مجلد عمل',
            whyItMatters: 'أنشئ مجلدًا فارغًا مثل openrag-workspace وافتح فيه طرفية.',
          },
          {
            title: 'شغّل المثبّت',
            whyItMatters: 'نفّذ uvx --python 3.13 openrag فتفتح واجهة طرفية.',
          },
          {
            title: 'عيّن كلمتي مرور المسؤول',
            whyItMatters: 'ولّد كلمتي مرور المسؤول لـ OpenSearch وLangflow تلقائيًا أو أدخلهما بنفسك؛ وتخطَّ بقية الأسئلة للإبقاء على القيم الافتراضية.',
          },
          {
            title: 'شغّل الخدمات',
            whyItMatters: 'أجب بـ Y عن “Start services now?” وانتظر رسالة “Services are running” ثم افتح OpenRAG في المتصفح.',
          },
          {
            title: 'أكمل الإعداد الأولي',
            whyItMatters: 'اختر مزوّد نماذج وأدخل مفتاح واجهته ثم انقر Complete؛ ويستخدم البدء السريع OpenAI.',
          },
          {
            title: 'أضف المعرفة وابدأ الدردشة',
            whyItMatters: 'ارفع ملفات أو مجلدات ثم اطرح أسئلتك في عرض الدردشة.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي أكدتها المصادر',
        content: [
          '**كل بند أدناه مصدره وثائق المشروع أو ملف README.**',
        ],
        items: [
          '**تدفقات قابلة للتعديل.** يمكن تخصيص تدفقات الوكلاء المدمجة في محرر Langflow المضمَّن، بما في ذلك استبدال النماذج أو المكونات؛ وتُدعَم مكونات Langflow المخصصة وخوادم MCP.',
          '**استيعاب المستندات.** تأتي الملفات من نظام ملفاتك المحلي أو من موصّلات تخزين سحابي مصرَّح بها عبر OAuth؛ ويحللها Docling Serve ويقطّعها.',
          '**البحث.** يخزّن OpenSearch المستندات والتضمينات ويضيف بحثًا هجينًا ودعمًا لتعدد المستأجرين.',
          '**حزم SDK وواجهة API.** تُنشَر حزم SDK الرسمية لـ Python وTypeScript باسم openrag-sdk، وتتضمن الوثائق مرجعًا لواجهة API.',
          '**قابلية الرصد.** التتبع إلى Langfuse ومتتبّع IBM Instana اختياريان ومعطّلان افتراضيًا.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'تدفق البيانات والوصول',
        content: [
          '**وفق الوثائق، يعالج Docling Serve مستنداتك محليًا ويخزّنها OpenSearch في قاعدة معرفتك الخاصة؛ ولا تُحمَّل المصادر السحابية إلا عبر موصّلات تصرّح بها أنت.** وتتكون البنية من حاويات: واجهة خلفية وLangflow وDocling Serve والموصّلات وواجهة أمامية.',
          'مزوّد النماذج الافتراضي هو OpenAI، وعند استخدامه تُرسَل أوامرك ومقتطفات المستندات المسترجعة إلى OpenAI وفق سياستها. ويذكر مرجع الإعداد أيضًا Anthropic وOllama وIBM watsonx.ai، ما يتيح توجيه الطلبات إلى نقطة Ollama محلية بدلًا من ذلك. وإذا لم تُضبط كلمة مرور للمستخدم المميز في Langflow فإنه يبدأ بلا مصادقة، ولذلك توصي الوثائق بتعيينها.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'العبارة المتعلقة بالمعالجة المحلية هي وصف المشروع لنفسه؛ ولم تدقّق PromptQuorum الحاويات ولا حركة الشبكة الخاصة بها. ويستعلم فحص الترقية في الطرفية عن واجهة Docker Hub ما لم يُغيَّر سجل الصور.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**المطورون الذين يريدون حزمة RAG جاهزة التوصيل** بدلًا من تجميع Langflow وOpenSearch وDocling بأنفسهم.',
          '**الفرق التي تشغّل الحاويات أصلًا** وتريد بحثًا هجينًا مع تعدد المستأجرين على ملفاتها.',
          '**من يحتاجون إلى واجهة API أو SDK** لاستدعاء وكيل بحث في المستندات من تطبيقهم.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة عمليًا.** لم تشغّل PromptQuorum البرنامج، لذا لم تُقيَّم جودة الإجابات ودقة الاستشهادات وسرعة الاستيعاب والاستقرار.',
          '**القياس عن بُعد.** لا توثّق الصفحات التي روجعت أي تحليلات للحاويات ولا خيارًا لتعطيلها.',
          '**سياسة الخصوصية.** لم نجد صفحة سياسة خاصة بـ OpenRAG؛ تكتفي الوثائق بالإشارة إلى بيان الخصوصية العام لدى IBM.',
          '**التشغيل المحلي بالكامل.** تصف الوثائق دعم Ollama، لكن البدء السريع موثّق مع OpenAI فقط، فالإعداد دون اتصال بالكامل لم يُختبر.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        columns: ['التطبيق', 'المنصات', 'السعر / الرخصة', 'الفرق الأبرز'],
        rows: [
          { 'التطبيق': '[Langflow](/ar/power-local-llm/langflow-visual-ai-orchestration-review)', 'المنصات': 'ويب', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'منشئ التدفقات المرئي الذي يضمّنه OpenRAG، دون حزمة البحث المرفقة' },
          { 'التطبيق': '[RAGFlow](/ar/power-local-llm/ragflow-document-understanding-rag-review)', 'المنصات': 'Linux، ويب', 'السعر / الرخصة': 'مجاني / Apache 2.0', 'الفرق الأبرز': 'محرك RAG يركّز على الفهم العميق للمستندات والاستشهادات' },
          { 'التطبيق': '[AnythingLLM](/ar/power-local-llm/anythingllm-review)', 'المنصات': 'Windows وmacOS وLinux وويب', 'السعر / الرخصة': 'مجاني / MIT', 'الفرق الأبرز': 'تطبيق سطح مكتب قابل للتثبيت مع مخزن متجهات مدمج وبلا حاويات' },
          { 'التطبيق': '[Dify](/ar/power-local-llm/dify-ai-workflow-builder-review)', 'المنصات': 'ويب، Linux', 'السعر / الرخصة': 'فريميوم / Apache 2.0 معدّلة', 'الفرق الأبرز': 'منشئ أوسع لتدفقات الذكاء الاصطناعي والوكلاء، وRAG جزء منه' },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تأكد من السعر والرخصة والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما نماذج Ollama التي يوصي بها OpenRAG؟',
            a: 'تقترح الوثائق gpt-oss:20b أو mistral-nemo:12b للنماذج اللغوية، وnomic-embed-text أو mxbai-embed-large أو embeddinggemma للتضمينات. ويجب أن تدعم نماذج الدردشة استدعاء الأدوات، ولا تضمن الوثائق عمل كل نموذج من Ollama.',
          },
          {
            q: 'ما المنافذ التي يستخدمها؟',
            a: 'افتراضيًا 3000 للواجهة الأمامية، و7860 لـ Langflow، و8000 للواجهة الخلفية، و9200 لـ OpenSearch، و5601 للوحة OpenSearch Dashboards، و5001 لـ Docling. ويمكن تغيير منفذَي الواجهة الأمامية وLangflow في ملف .env.',
          },
          {
            q: 'من أي تخزين سحابي يمكنه الاستيعاب؟',
            a: 'يصف مرجع الإعداد Google Drive عبر Google OAuth، وSharePoint وOneDrive عبر تسجيل تطبيق في Microsoft Graph، وAWS S3 عبر مفاتيح الوصول.',
          },
          {
            q: 'كيف أستدعيه من شيفرتي؟',
            a: 'ثبّت SDK الخاص بـ Python بالأمر pip install openrag-sdk أو SDK الخاص بـ TypeScript بالأمر npm install openrag-sdk. أما الحزمة المستقلة القديمة openrag-mcp فقد أُوقف دعمها.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'OpenRAG حزمة RAG مجانية بترخيص Apache-2.0 تأتي، وفق وثائقها، بـ Langflow وOpenSearch وDocling موصولة مسبقًا، وتُصان بنشاط، مع إصدار في مطلع أكتوبر 2026 وتغييرات حتى 23 أكتوبر. في المقابل هي ثقيلة التشغيل، وتدعم Windows عبر WSL فقط، وتعتمد OpenAI افتراضيًا، ولم تتمكن PromptQuorum من التحقق من جودتها أو قياسها عن بُعد أو استخدامها دون اتصال بالكامل. تناسب المطورين الذين يريدون واجهة خلفية RAG جاهزة وقابلة للتعديل؛ ومن يفضّل تطبيقًا قابلًا للتثبيت يمكنه مقارنة [AnythingLLM](/ar/power-local-llm/anythingllm-review)، ومن يحتاج منشئ التدفقات فقط يمكنه الاطلاع على [Langflow](/ar/power-local-llm/langflow-visual-ai-orchestration-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[وثائق OpenRAG](https://docs.openr.ag) — نظرة عامة والبدء السريع وخيارات التثبيت واستكشاف الأخطاء ومرجع الإعداد، روجعت في 23 أكتوبر 2026.',
          '[موقع OpenRAG](https://www.openr.ag) — الصفحة الرئيسية للمشروع.',
          '[OpenRAG على GitHub](https://github.com/langflow-ai/openrag) و[إصدار v0.8.0](https://github.com/langflow-ai/openrag/releases) — الشيفرة المصدرية وترخيص Apache-2.0 وملفات الإصدار.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Langflow](/ar/power-local-llm/langflow-visual-ai-orchestration-review) — أداة التنسيق المرئي للذكاء الاصطناعي التي يُبنى عليها OpenRAG.',
          '[مراجعة RAGFlow](/ar/power-local-llm/ragflow-document-understanding-rag-review) — محرك RAG مبني حول الفهم العميق للمستندات.',
          '[مراجعة AnythingLLM](/ar/power-local-llm/anythingllm-review) — مساحة دردشة مع المستندات بمخزن متجهات مدمج.',
          '[مراجعة SurfSense](/ar/power-local-llm/surfsense-review) — وكيل سطح مكتب مفتوح المصدر لمستنداتك الخاصة.',
          '[مقارنة أدوات استرجاع المعرفة المحلية](/ar/power-local-llm/local-llm-knowledge-retrieval-compared) — مقارنة فئة أدوات المستندات والمعرفة.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'RAG & Document Chat',
    heroImage: '/images/openrag-review-hero-zh.webp',
    title: 'OpenRAG 评测：开源的智能体 RAG 平台',
    seoTitle: 'OpenRAG 评测：开源智能体 RAG 平台的安装与运行要求',
    intro:
      'OpenRAG 是一个开源软件包，把 Langflow、OpenSearch 和 Docling 连接在一起，让你可以上传文档、检索文档，并在浏览器里与文档对话。它通过终端启动并以容器方式运行，因此面向开发者。本评测基于 2026 年 10 月 23 日核对的文档、官网和 GitHub 发布页。',
    metaDescription:
      'OpenRAG 评测：整合 Langflow、OpenSearch 和 Docling 的 Apache-2.0 RAG 平台。安装步骤、运行要求、数据流向，以及我们未能核实的内容。',
    twitterDescription:
      'OpenRAG 评测：一条 uvx 命令即可启动的 Apache-2.0 智能体 RAG 套件。运行要求、数据流向与未解问题。',
    audience:
      '正在为自己的文档评估一套现成 RAG 方案的开发者和技术团队，需要了解它会装什么、有什么要求，以及哪些内容来源并未证实。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenRAG 评测',
    targetKeywords: [
      'openrag 评测',
      '开源 rag 平台',
      'langflow opensearch docling',
      '智能体 rag 自托管',
      '自托管 文档聊天',
      'openrag 安装',
    ],
    current_hardware_mentioned: ['Mac', 'Linux PC', 'Windows PC with WSL'],
    leadAnswerBlock:
      '**OpenRAG（版本 0.8.0，2026 年 10 月 1 日发布）是一个免费的 Apache-2.0 平台，整合了 Langflow、OpenSearch 和 Docling，你可以上传文档并通过网页界面与之对话。**它以容器方式运行，需在终端中启动，因此是开发者工具，而不是双击即用的应用。PromptQuorum 没有安装或测试过它；本文所有说法均来自项目自己的文档。',
    quickAnswerTop: {
      zh: {
        question: 'OpenRAG 是本地私有的 RAG 应用吗？',
        answer:
          '只算一部分。按文档说法，Docling 解析文件、OpenSearch 存储文件，都在你自己运行的容器中；但快速入门使用的是 OpenAI API 密钥，所以除非选择本地 Ollama 模型，提示词和文档片段都会发往 OpenAI。',
        bullets: [
          '内置流程可在嵌入式 Langflow 可视化编辑器中修改。',
          '可导入本地文件，也可通过 OAuth 连接器导入云存储。',
          'OpenSearch 提供混合搜索和多租户支持。',
          'Python 和 TypeScript SDK 可让你的代码调用它。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'OpenRAG 是什么？', anchor: 'what-is-openrag' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '运行要求', anchor: 'requirements' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '来源已证实的功能', anchor: 'key-features' },
      { label: '数据流向与访问控制', anchor: 'privacy' },
      { label: '适合哪些人', anchor: 'who-should-use' },
      { label: '我们未能核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代方案', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenRAG 是一个 Apache-2.0 软件包，只需一条 uvx 命令，就能启动一套现成的文档 RAG 方案。',
          },
          {
            type: 'plain-terms',
            text: '你在终端运行安装程序，它会启动几个容器，之后上传文件，在浏览器聊天里提问即可。',
          },
        ],
        items: [
          '维护状态：v0.8.0 于 2026 年 10 月 1 日发布，仓库在 2026 年 10 月 23 日仍有更新，因此无需显示项目停更警告。',
          '许可证：Apache-2.0，源代码托管在 GitHub 的 langflow-ai 组织下。',
          '费用：软件包本身没有价格；你的成本是硬件和所接入模型 API 的费用。',
          'Windows：仅支持在 Windows Subsystem for Linux 内运行。',
          '体量：基于容器且占用磁盘较大，更适合开发机或服务器，而非轻薄笔记本。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 23 日核对的 OpenRAG 文档、官网和 GitHub 发布页。PromptQuorum 没有安装、测试或跑分该软件。',
          },
        ],
      },
      overview: {
        id: 'what-is-openrag',
        title: 'OpenRAG 是什么？',
        content: [
          '**OpenRAG 是一个检索增强生成平台：你把文档加入知识库，然后在聊天界面里向 AI 智能体提问。**项目把它描述为用于构建智能体 RAG 系统的开源软件包，组合了三个现有项目：用 Langflow 做智能体流程，用 OpenSearch 存储文档和向量，用 Docling 解析并切分文件。',
          '它在 [langflow-ai/openrag](https://github.com/langflow-ai/openrag) 仓库中开发，后端是 FastAPI，前端是 Next.js。文档位于 [docs.openr.ag](https://docs.openr.ag)。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**OpenRAG 不是可下载的桌面应用：你在终端里用 uv 安装，它随后会启动自己的容器。**',
        ],
        columns: ['方式', '获取方式'],
        rows: [
          { '方式': '快速入门（macOS、Linux）', '获取方式': '在空文件夹中运行 uvx --python 3.13 openrag' },
          { '方式': 'Windows', '获取方式': '同一条命令，但仅限在 WSL 内运行（见运行要求）' },
          { '方式': 'Python 项目', '获取方式': '按[安装选项](https://docs.openr.ag/install-options)，用 uv 作为依赖添加' },
          { '方式': '自行管理', '获取方式': '按 [Docker 指南](https://docs.openr.ag/docker)，用 Docker 或 Podman 和你自己的 .env 文件' },
          { '方式': '官网', '获取方式': '[openr.ag](https://www.openr.ag)' },
          { '方式': '文档', '获取方式': '[docs.openr.ag](https://docs.openr.ag)' },
          { '方式': '源代码', '获取方式': '[github.com/langflow-ai/openrag](https://github.com/langflow-ai/openrag)' },
          { '方式': '隐私政策', '获取方式': '未找到 OpenRAG 专属页面；文档的同意设置引用 [IBM 隐私声明](https://www.ibm.com/privacy)' },
        ],
        note: '评测版本：v0.8.0，据 [GitHub 发布页](https://github.com/langflow-ai/openrag/releases)于 2026 年 10 月 1 日发布；仓库本身最近一次更新在 2026 年 10 月 23 日。该版本只提供 Python wheel 包和源码压缩包，没有安装程序或桌面版，因此需要终端和开发环境。',
      },
      requirements: {
        id: 'requirements',
        title: '运行要求',
        content: [
          '**文档要求有容器运行环境、8 GB 内存和超过 50 GB 的可用磁盘空间。**',
        ],
        columns: ['项目', '文档说明'],
        rows: [
          { '项目': 'Python 与 uv', '文档说明': '快速入门要求 Python 3.13 和 uv' },
          { '项目': '容器运行环境', '文档说明': 'Docker 或 Podman 加 compose 工具；缺失时 uvx 会安装一个' },
          { '项目': '内存', '文档说明': '8 GB 为建议的最低配置' },
          { '项目': '磁盘', '文档说明': '初始设置和导入需超过 50 GB 空闲空间' },
          { '项目': 'Windows', '文档说明': '仅限 WSL 内；不支持 Windows 虚拟机里的 WSL 发行版' },
          { '项目': '本地模型', '文档说明': '通过 Ollama 运行 gpt-oss:20b 至少需要 16 GB 内存' },
        ],
        note: '所查页面没有给出 OpenRAG 本身的 GPU 要求，只说明要使用 GPU，Ollama 必须在支持 GPU 的容器中运行。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**以下步骤依据项目的快速入门；PromptQuorum 没有实际运行过。**',
        ],
        numberedItems: [
          {
            title: '创建工作文件夹',
            whyItMatters: '新建一个空目录，例如 openrag-workspace，并在其中打开终端。',
          },
          {
            title: '启动安装程序',
            whyItMatters: '运行 uvx --python 3.13 openrag，会打开一个终端界面。',
          },
          {
            title: '设置管理员密码',
            whyItMatters: '为 OpenSearch 和 Langflow 自动生成或手动输入管理员密码；其余提示可跳过以保留默认值。',
          },
          {
            title: '启动服务',
            whyItMatters: '对 “Start services now?” 回答 Y，等待出现 “Services are running”，再在浏览器中打开 OpenRAG。',
          },
          {
            title: '完成初始引导',
            whyItMatters: '选择模型提供商，输入其 API 密钥并点击 Complete；快速入门使用的是 OpenAI。',
          },
          {
            title: '添加知识并开始聊天',
            whyItMatters: '上传文件或文件夹，然后在聊天视图中提问。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源已证实的功能',
        content: [
          '**以下每一项都来自项目的文档或 README。**',
        ],
        items: [
          '**可编辑的流程。**内置的智能体流程可在嵌入式 Langflow 编辑器中定制，包括更换模型或组件；也支持自定义 Langflow 组件和 MCP 服务器。',
          '**文档导入。**文件来自本地文件系统，或经 OAuth 授权的云存储连接器；由 Docling Serve 解析并切分。',
          '**搜索。**OpenSearch 存储文档和嵌入向量，并提供混合搜索与多租户支持。',
          '**SDK 与 API。**官方 Python 和 TypeScript SDK 以 openrag-sdk 发布，文档中还有 API 参考。',
          '**可观测性。**向 Langfuse 的追踪和 IBM Instana 追踪器均为可选，默认关闭。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '数据流向与访问控制',
        content: [
          '**按文档所述，Docling Serve 在本地处理你的文档，OpenSearch 把它们存入你自己的知识库；云端数据只通过你授权的连接器加载。**整体架构由容器组成：后端、Langflow、Docling Serve、连接器和前端。',
          '默认的模型提供商是 OpenAI，使用它时，你的提示词和检索到的文档片段会按 OpenAI 自身的政策发往 OpenAI。配置参考还列出了 Anthropic、Ollama 和 IBM watsonx.ai，因此也可以改为指向本地的 Ollama 端点。如果没有设置 Langflow 超级用户密码，Langflow 会在无身份验证的状态下启动，这正是文档建议设置密码的原因。',
        ],
        callouts: [
          {
            type: 'note',
            text: '关于本地处理的说法是项目自己的描述；PromptQuorum 没有审计容器及其网络流量。除非更改镜像仓库，终端的升级检查会查询 Docker Hub API。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人',
        items: [
          '**想要现成 RAG 套件的开发者**，不必自己拼装 Langflow、OpenSearch 和 Docling。',
          '**已在运行容器的团队**，希望对自己的文件使用带多租户的混合搜索。',
          '**需要 API 或 SDK 的开发者**，想在自己的应用里调用文档检索智能体。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际表现。**PromptQuorum 没有运行该软件，因此回答质量、引用准确度、导入速度和稳定性均未评估。',
          '**遥测。**所查页面没有记录容器的数据分析情况，也没有关闭选项。',
          '**隐私政策。**没有找到 OpenRAG 专属的隐私政策页面；文档只引用了 IBM 的通用隐私声明。',
          '**纯本地运行。**文档介绍了对 Ollama 的支持，但快速入门只以 OpenAI 为例，完全离线的配置尚未测试。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代方案',
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Langflow](/zh/power-local-llm/langflow-visual-ai-orchestration-review)', '平台': 'Web', '价格 / 许可证': '免费 / MIT', '主要区别': 'OpenRAG 所嵌入的可视化流程构建器，不含配套的搜索套件' },
          { '应用': '[RAGFlow](/zh/power-local-llm/ragflow-document-understanding-rag-review)', '平台': 'Linux、Web', '价格 / 许可证': '免费 / Apache 2.0', '主要区别': '以深度文档理解和引用为核心的 RAG 引擎' },
          { '应用': '[AnythingLLM](/zh/power-local-llm/anythingllm-review)', '平台': 'Windows、macOS、Linux、Web', '价格 / 许可证': '免费 / MIT', '主要区别': '可安装的桌面应用，内置向量库，无需容器' },
          { '应用': '[Dify](/zh/power-local-llm/dify-ai-workflow-builder-review)', '平台': 'Web、Linux', '价格 / 许可证': '免费增值 / 修改版 Apache 2.0', '主要区别': '更广泛的 AI 工作流与智能体构建器，RAG 只是其中一部分' },
        ],
        note: '竞品信息变化较快；请在各应用自己的页面上确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'OpenRAG 推荐哪些 Ollama 模型？',
            a: '文档建议语言模型用 gpt-oss:20b 或 mistral-nemo:12b，嵌入模型用 nomic-embed-text、mxbai-embed-large 或 embeddinggemma。聊天模型必须支持工具调用，文档也不保证每个 Ollama 模型都能正常工作。',
          },
          {
            q: '它使用哪些端口？',
            a: '默认情况下，前端 3000，Langflow 7860，后端 8000，OpenSearch 9200，OpenSearch Dashboards 5601，Docling 5001。前端和 Langflow 的端口可以在 .env 文件中修改。',
          },
          {
            q: '它能从哪些云存储导入数据？',
            a: '配置参考介绍了经 Google OAuth 的 Google Drive、经 Microsoft Graph 应用注册的 SharePoint 与 OneDrive，以及使用访问密钥的 AWS S3。',
          },
          {
            q: '如何在自己的代码里调用它？',
            a: '用 pip install openrag-sdk 安装 Python SDK，或用 npm install openrag-sdk 安装 TypeScript SDK。较早的独立包 openrag-mcp 已被弃用。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'OpenRAG 是一套免费的 Apache-2.0 RAG 方案，按其文档，Langflow、OpenSearch 和 Docling 已预先连通，并且维护活跃：2026 年 10 月初有新版本发布，10 月 23 日仍有更新。另一方面，它运行较重，Windows 只能通过 WSL，默认使用 OpenAI，PromptQuorum 也无法核实它的质量、遥测情况和完全离线使用。它适合想要现成、可深度修改的 RAG 后端的开发者；偏好可安装应用的读者可以对比 [AnythingLLM](/zh/power-local-llm/anythingllm-review)，只需要流程构建器的读者可以看看 [Langflow](/zh/power-local-llm/langflow-visual-ai-orchestration-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[OpenRAG 文档](https://docs.openr.ag) — 概览、快速入门、安装选项、故障排查和配置参考，2026 年 10 月 23 日核对。',
          '[OpenRAG 官网](https://www.openr.ag) — 项目主页。',
          '[GitHub 上的 OpenRAG](https://github.com/langflow-ai/openrag)及其 [v0.8.0 版本](https://github.com/langflow-ai/openrag/releases) — 源代码、Apache-2.0 许可证和发布文件。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Langflow 评测](/zh/power-local-llm/langflow-visual-ai-orchestration-review)：OpenRAG 所基于的可视化 AI 编排工具。',
          '[RAGFlow 评测](/zh/power-local-llm/ragflow-document-understanding-rag-review)：围绕深度文档理解构建的 RAG 引擎。',
          '[AnythingLLM 评测](/zh/power-local-llm/anythingllm-review)：内置向量库的文档聊天工作区。',
          '[SurfSense 评测](/zh/power-local-llm/surfsense-review)：面向你自己文档的开源桌面智能体。',
          '[本地 LLM 知识检索工具对比](/zh/power-local-llm/local-llm-knowledge-retrieval-compared)：文档与知识类工具的类别对比。',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-23',
    dateModified: '2026-10-23',
    next_refresh_due: '2027-04-23',
    theme: 'RAG & Document Chat',
    heroImage: '/images/openrag-review-hero-ko.webp',
    title: 'OpenRAG 리뷰: 오픈소스 에이전틱 RAG 플랫폼',
    seoTitle: 'OpenRAG 리뷰: 오픈소스 에이전틱 RAG 플랫폼',
    intro:
      'OpenRAG는 Langflow, OpenSearch, Docling을 연결해 문서를 업로드하고 검색하며 브라우저에서 대화할 수 있게 해 주는 오픈소스 패키지입니다. 터미널에서 실행하고 컨테이너로 동작하므로 개발자를 대상으로 합니다. 이 리뷰는 2026년 10월 23일에 확인한 문서, 공식 웹사이트, GitHub 릴리스 페이지를 바탕으로 합니다.',
    metaDescription:
      'OpenRAG 리뷰: Langflow, OpenSearch, Docling을 묶은 Apache-2.0 RAG 플랫폼. 설치 방법, 요구 사항, 데이터 흐름, 확인하지 못한 사항을 정리했습니다.',
    twitterDescription:
      'OpenRAG 리뷰: uvx 명령 하나로 시작하는 Apache-2.0 에이전틱 RAG 스택. 요구 사항, 데이터 흐름, 남은 의문점.',
    audience:
      '자신의 문서를 위해 미리 연결된 RAG 스택을 검토하는 개발자와 기술 팀. 무엇이 설치되고, 무엇이 필요하며, 출처가 무엇을 확인해 주지 않는지 알아야 하는 분들을 위한 글입니다.',
    readTime: '7분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'OpenRAG 리뷰',
    targetKeywords: [
      'openrag 리뷰',
      '오픈소스 rag 플랫폼',
      'langflow opensearch docling',
      '에이전틱 rag 셀프 호스팅',
      '셀프 호스팅 문서 채팅',
      'openrag 설치',
    ],
    current_hardware_mentioned: ['Mac', 'Linux PC', 'Windows PC with WSL'],
    leadAnswerBlock:
      '**OpenRAG(버전 0.8.0, 2026년 10월 1일 공개)는 Langflow, OpenSearch, Docling을 묶어 문서를 업로드하고 웹 인터페이스로 대화할 수 있게 해 주는 Apache-2.0 라이선스의 무료 플랫폼입니다.** 터미널에서 시작하는 컨테이너로 동작하므로 더블클릭으로 설치하는 앱이 아니라 개발자용 도구입니다. PromptQuorum은 설치하거나 테스트하지 않았으며, 이 글의 모든 내용은 프로젝트 자체 문서에 근거합니다.',
    quickAnswerTop: {
      ko: {
        question: 'OpenRAG는 로컬에서 동작하는 프라이빗 RAG 앱입니까?',
        answer:
          '일부만 그렇습니다. 문서에 따르면 Docling이 파일을 분석하고 OpenSearch가 이를 저장하는 곳은 직접 운영하는 컨테이너이지만, 빠른 시작은 OpenAI API 키를 사용하므로 로컬 Ollama 모델을 고르지 않으면 프롬프트와 문서 발췌문이 OpenAI로 전송됩니다.',
        bullets: [
          '기본 제공 플로우는 내장된 Langflow 시각 편집기에서 수정할 수 있습니다.',
          '로컬 파일과, OAuth 커넥터를 통한 클라우드 저장소를 가져올 수 있습니다.',
          'OpenSearch가 하이브리드 검색과 멀티 테넌시를 더합니다.',
          'Python 및 TypeScript SDK로 직접 작성한 코드에서 호출할 수 있습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'OpenRAG란?', anchor: 'what-is-openrag' },
      { label: '입수 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '시작하는 방법', anchor: 'getting-started' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '데이터 흐름과 접근 제어', anchor: 'privacy' },
      { label: '이런 분께 적합합니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 사항', anchor: 'who-should-not-use' },
      { label: '경쟁 제품과 대안', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'OpenRAG는 uvx 명령 하나로 문서용 RAG 스택을 바로 띄워 주는 Apache-2.0 패키지입니다.',
          },
          {
            type: 'plain-terms',
            text: '터미널에서 설치 프로그램을 실행하면 컨테이너 몇 개가 시작되고, 이후 파일을 업로드해 브라우저 채팅으로 질문합니다.',
          },
        ],
        items: [
          '유지보수: v0.8.0이 2026년 10월 1일에 공개되었고 저장소가 2026년 10월 23일에도 변경되었으므로, 개발 중단 경고는 해당되지 않습니다.',
          '라이선스: Apache-2.0이며, 소스 코드는 GitHub의 langflow-ai 조직에 있습니다.',
          '비용: 패키지 자체에 가격은 없으며, 비용은 하드웨어와 연결하는 모델 API에서 발생합니다.',
          'Windows: Windows Subsystem for Linux 안에서만 지원됩니다.',
          '무게: 컨테이너 기반이고 디스크를 많이 쓰므로 가벼운 노트북보다 개발용 PC나 서버에 어울립니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 23일에 확인한 OpenRAG 문서, 웹사이트, GitHub 릴리스 페이지를 바탕으로 합니다. PromptQuorum은 소프트웨어를 설치하거나 테스트하거나 벤치마크하지 않았습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-openrag',
        title: 'OpenRAG란?',
        content: [
          '**OpenRAG는 지식 베이스에 문서를 추가하고 채팅 화면에서 AI 에이전트에게 질문하는 검색 증강 생성(RAG) 플랫폼입니다.** 프로젝트는 이를 에이전틱 RAG 시스템을 구축하기 위한 오픈소스 패키지로 설명하며, 기존 프로젝트 세 가지를 결합합니다. 에이전트 플로우에는 Langflow, 문서와 벡터 저장에는 OpenSearch, 파일 분석과 분할에는 Docling을 사용합니다.',
          '개발은 [langflow-ai/openrag](https://github.com/langflow-ai/openrag) 저장소에서 이루어지며, 백엔드는 FastAPI, 프론트엔드는 Next.js입니다. 문서는 [docs.openr.ag](https://docs.openr.ag)에서 볼 수 있습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '입수 방법',
        content: [
          '**OpenRAG는 내려받아 쓰는 데스크톱 앱이 아니라, 터미널에서 uv로 설치하면 자체 컨테이너를 시작하는 방식입니다.**',
        ],
        columns: ['옵션', '입수처'],
        rows: [
          { '옵션': '빠른 시작(macOS, Linux)', '입수처': '빈 폴더에서 uvx --python 3.13 openrag 실행' },
          { '옵션': 'Windows', '입수처': '같은 명령이지만 WSL 안에서만 실행(요구 사항 참조)' },
          { '옵션': 'Python 프로젝트', '입수처': '[설치 옵션](https://docs.openr.ag/install-options)에 따라 uv로 의존성에 추가' },
          { '옵션': '자체 관리', '입수처': '[Docker 가이드](https://docs.openr.ag/docker)에 따라 Docker 또는 Podman과 직접 만든 .env 파일 사용' },
          { '옵션': '웹사이트', '입수처': '[openr.ag](https://www.openr.ag)' },
          { '옵션': '문서', '입수처': '[docs.openr.ag](https://docs.openr.ag)' },
          { '옵션': '소스 코드', '입수처': '[github.com/langflow-ai/openrag](https://github.com/langflow-ai/openrag)' },
          { '옵션': '개인정보 처리방침', '입수처': 'OpenRAG 전용 페이지는 없으며, 문서의 동의 설정이 [IBM 개인정보 보호 정책](https://www.ibm.com/privacy)을 가리킵니다' },
        ],
        note: '검토한 버전: v0.8.0이며, [GitHub 릴리스 페이지](https://github.com/langflow-ai/openrag/releases)에 따르면 2026년 10월 1일에 공개되었습니다. 저장소 자체의 마지막 업데이트는 2026년 10월 23일입니다. 릴리스에는 Python wheel과 소스 아카이브만 있고 설치 프로그램이나 데스크톱 빌드가 없으므로 터미널과 개발 환경이 필요합니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**문서는 컨테이너 런타임, 8 GB RAM, 50 GB를 넘는 여유 디스크 공간을 요구합니다.**',
        ],
        columns: ['항목', '문서의 설명'],
        rows: [
          { '항목': 'Python 및 uv', '문서의 설명': '빠른 시작 기준 Python 3.13과 uv' },
          { '항목': '컨테이너 런타임', '문서의 설명': 'Docker 또는 Podman과 compose 도구, 없으면 uvx가 설치' },
          { '항목': 'RAM', '문서의 설명': '권장 최소치는 8 GB' },
          { '항목': '디스크', '문서의 설명': '초기 설정과 수집에 50 GB 넘는 여유 공간' },
          { '항목': 'Windows', '문서의 설명': 'WSL 안에서만 가능, Windows VM 내 WSL 배포판은 불가' },
          { '항목': '로컬 모델', '문서의 설명': 'Ollama의 gpt-oss:20b는 RAM 16 GB 이상 필요' },
        ],
        note: '확인한 페이지에는 OpenRAG 자체의 GPU 요구 사항이 없으며, GPU를 쓰려면 Ollama를 GPU 지원 컨테이너에서 실행해야 한다는 내용만 있습니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하는 방법',
        content: [
          '**아래 단계는 프로젝트의 빠른 시작을 따른 것이며, PromptQuorum은 직접 실행하지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '작업 폴더 만들기',
            whyItMatters: 'openrag-workspace 같은 빈 디렉터리를 만들고 그곳에서 터미널을 엽니다.',
          },
          {
            title: '설치 프로그램 시작하기',
            whyItMatters: 'uvx --python 3.13 openrag를 실행하면 터미널 인터페이스가 열립니다.',
          },
          {
            title: '관리자 비밀번호 설정하기',
            whyItMatters: 'OpenSearch와 Langflow 관리자 비밀번호를 자동 생성하거나 직접 입력하고, 나머지 질문은 건너뛰어 기본값을 유지합니다.',
          },
          {
            title: '서비스 시작하기',
            whyItMatters: '“Start services now?”에 Y로 답하고 “Services are running”이 나올 때까지 기다린 뒤 브라우저에서 OpenRAG를 엽니다.',
          },
          {
            title: '온보딩 완료하기',
            whyItMatters: '모델 제공자를 고르고 API 키를 입력한 뒤 Complete를 클릭합니다. 빠른 시작은 OpenAI를 사용합니다.',
          },
          {
            title: '지식 추가하고 대화하기',
            whyItMatters: '파일이나 폴더를 업로드한 뒤 채팅 화면에서 질문합니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 프로젝트의 문서 또는 README에 근거합니다.**',
        ],
        items: [
          '**편집 가능한 플로우.** 기본 제공 에이전트 플로우는 내장 Langflow 편집기에서 모델이나 구성 요소를 교체하는 것을 포함해 맞춤 설정할 수 있고, 사용자 정의 Langflow 구성 요소와 MCP 서버도 지원합니다.',
          '**문서 수집.** 파일은 로컬 파일 시스템이나 OAuth로 승인한 클라우드 저장소 커넥터에서 가져오며, Docling Serve가 분석하고 분할합니다.',
          '**검색.** OpenSearch가 문서와 임베딩을 저장하고 하이브리드 검색과 멀티 테넌시를 더합니다.',
          '**SDK와 API.** 공식 Python 및 TypeScript SDK가 openrag-sdk로 배포되며, 문서에는 API 레퍼런스도 있습니다.',
          '**관측 가능성.** Langfuse로의 트레이싱과 IBM Instana 트레이서는 선택 사항이며 기본적으로 꺼져 있습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '데이터 흐름과 접근 제어',
        content: [
          '**문서에 따르면 Docling Serve가 문서를 로컬에서 처리하고 OpenSearch가 이를 사용자 자신의 지식 베이스에 저장하며, 클라우드 소스는 사용자가 승인한 커넥터를 통해서만 불러옵니다.** 구조는 컨테이너로 이루어지며 백엔드, Langflow, Docling Serve, 커넥터, 프론트엔드로 구성됩니다.',
          '기본 모델 제공자는 OpenAI이며, 이를 쓰면 프롬프트와 검색된 문서 발췌문이 OpenAI의 정책에 따라 OpenAI로 전송됩니다. 구성 레퍼런스에는 Anthropic, Ollama, IBM watsonx.ai도 나와 있어 로컬 Ollama 엔드포인트로 연결할 수도 있습니다. Langflow 슈퍼유저 비밀번호를 설정하지 않으면 Langflow는 인증 없이 시작되므로 문서는 비밀번호 설정을 권장합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '로컬 처리에 관한 서술은 프로젝트 자체의 설명이며, PromptQuorum은 컨테이너나 네트워크 트래픽을 감사하지 않았습니다. 터미널의 업그레이드 확인은 이미지 레지스트리를 바꾸지 않는 한 Docker Hub API를 조회합니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**미리 연결된 RAG 스택을 원하는 개발자.** Langflow, OpenSearch, Docling을 직접 조립하지 않아도 됩니다.',
          '**이미 컨테이너를 운영하는 팀.** 자신의 파일에 멀티 테넌시를 갖춘 하이브리드 검색을 쓰고 싶은 경우입니다.',
          '**API나 SDK가 필요한 개발자.** 문서 검색 에이전트를 자신의 애플리케이션에서 호출할 수 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 품질.** PromptQuorum은 소프트웨어를 실행하지 않았으므로 답변 품질, 인용 정확도, 수집 속도, 안정성은 평가하지 않았습니다.',
          '**텔레메트리.** 확인한 페이지에는 컨테이너의 사용 분석이나 이를 끄는 설정에 관한 기록이 없습니다.',
          '**개인정보 처리방침.** OpenRAG 전용 방침 페이지는 찾지 못했으며, 문서는 IBM의 일반 개인정보 보호 정책만 참조합니다.',
          '**완전한 로컬 운영.** 문서에 Ollama 지원은 나와 있지만 빠른 시작은 OpenAI 기준으로만 기술되어 있어, 완전한 오프라인 구성은 검증되지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 제품과 대안',
        columns: ['앱', '플랫폼', '가격 / 라이선스', '핵심 차이'],
        rows: [
          { '앱': '[Langflow](/ko/power-local-llm/langflow-visual-ai-orchestration-review)', '플랫폼': '웹', '가격 / 라이선스': '무료 / MIT', '핵심 차이': 'OpenRAG가 내장한 시각적 플로우 빌더이며, 함께 제공되는 검색 스택은 없음' },
          { '앱': '[RAGFlow](/ko/power-local-llm/ragflow-document-understanding-rag-review)', '플랫폼': 'Linux, 웹', '가격 / 라이선스': '무료 / Apache 2.0', '핵심 차이': '깊은 문서 이해와 인용에 초점을 둔 RAG 엔진' },
          { '앱': '[AnythingLLM](/ko/power-local-llm/anythingllm-review)', '플랫폼': 'Windows, macOS, Linux, 웹', '가격 / 라이선스': '무료 / MIT', '핵심 차이': '벡터 저장소를 내장한 설치형 데스크톱 앱이며 컨테이너 불필요' },
          { '앱': '[Dify](/ko/power-local-llm/dify-ai-workflow-builder-review)', '플랫폼': '웹, Linux', '가격 / 라이선스': '프리미엄 / 수정된 Apache 2.0', '핵심 차이': 'RAG가 일부일 뿐인, 더 폭넓은 AI 워크플로우·에이전트 빌더' },
        ],
        note: '경쟁 제품의 세부 정보는 자주 바뀝니다. 현재 가격, 라이선스, 플랫폼은 각 앱의 공식 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'OpenRAG는 어떤 Ollama 모델을 권장합니까?',
            a: '문서는 언어 모델로 gpt-oss:20b 또는 mistral-nemo:12b, 임베딩으로 nomic-embed-text, mxbai-embed-large, embeddinggemma를 제안합니다. 채팅 모델은 도구 호출을 지원해야 하며, 문서는 모든 Ollama 모델이 작동한다고 보장하지 않습니다.',
          },
          {
            q: '어떤 포트를 사용합니까?',
            a: '기본값은 프론트엔드 3000, Langflow 7860, 백엔드 8000, OpenSearch 9200, OpenSearch Dashboards 5601, Docling 5001입니다. 프론트엔드와 Langflow 포트는 .env 파일에서 바꿀 수 있습니다.',
          },
          {
            q: '어떤 클라우드 저장소에서 가져올 수 있습니까?',
            a: '구성 레퍼런스에는 Google OAuth를 통한 Google Drive, Microsoft Graph 앱 등록을 통한 SharePoint와 OneDrive, 액세스 키를 통한 AWS S3가 설명되어 있습니다.',
          },
          {
            q: '직접 작성한 코드에서 어떻게 호출합니까?',
            a: 'Python SDK는 pip install openrag-sdk로, TypeScript SDK는 npm install openrag-sdk로 설치합니다. 이전의 독립 패키지 openrag-mcp는 더 이상 권장되지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'OpenRAG는 문서에 따르면 Langflow, OpenSearch, Docling이 이미 연결된 상태로 제공되는 Apache-2.0 무료 RAG 스택이며, 2026년 10월 초 릴리스와 10월 23일까지의 변경이 있을 만큼 활발히 관리됩니다. 반면 실행이 무겁고, Windows는 WSL로만 지원되며, 기본값이 OpenAI이고, PromptQuorum은 품질, 텔레메트리, 완전한 오프라인 사용을 확인하지 못했습니다. 바로 쓸 수 있고 손보기 쉬운 RAG 백엔드를 원하는 개발자에게 어울립니다. 설치형 앱을 선호한다면 [AnythingLLM](/ko/power-local-llm/anythingllm-review)을 비교해 보시고, 플로우 빌더만 필요하다면 [Langflow](/ko/power-local-llm/langflow-visual-ai-orchestration-review)를 살펴보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[OpenRAG 문서](https://docs.openr.ag) — 개요, 빠른 시작, 설치 옵션, 문제 해결, 구성 레퍼런스. 2026년 10월 23일 확인.',
          '[OpenRAG 웹사이트](https://www.openr.ag) — 프로젝트 홈페이지.',
          '[GitHub의 OpenRAG](https://github.com/langflow-ai/openrag)와 [v0.8.0 릴리스](https://github.com/langflow-ai/openrag/releases) — 소스 코드, Apache-2.0 라이선스, 릴리스 파일.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Langflow 리뷰](/ko/power-local-llm/langflow-visual-ai-orchestration-review) — OpenRAG의 바탕이 되는 시각적 AI 오케스트레이션 도구.',
          '[RAGFlow 리뷰](/ko/power-local-llm/ragflow-document-understanding-rag-review) — 깊은 문서 이해를 중심으로 한 RAG 엔진.',
          '[AnythingLLM 리뷰](/ko/power-local-llm/anythingllm-review) — 벡터 저장소를 내장한 문서 채팅 워크스페이스.',
          '[SurfSense 리뷰](/ko/power-local-llm/surfsense-review) — 내 문서를 위한 오픈소스 데스크톱 에이전트.',
          '[로컬 LLM 지식 검색 도구 비교](/ko/power-local-llm/local-llm-knowledge-retrieval-compared) — 문서·지식 도구 카테고리 비교.',
        ],
      },
    },
  },
}
