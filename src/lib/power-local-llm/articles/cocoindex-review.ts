// CocoIndex Review: Incremental Data Framework for RAG and AI Agents, with Local Model Options
// Slug: cocoindex-review
// Companions (same sub-segment, rag-frameworks): llamaindex-rag-framework-review, haystack-deepset-rag-framework-review, txtai-embedded-vector-database-review, cognee-review
// Facts verified 2026-11-08 against cocoindex.io (home, llms.txt, enterprise page, CocoIndex Code page), the docs corpus (overview, installation, quickstart,
// database path, LiteLLM/Ollama embedding op, sentence-transformers op, connectors, anonymous telemetry), github.com/cocoindex-io/cocoindex (README, release v1.1.1,
// pushed_at) and PyPI (cocoindex 1.1.1). No hands-on testing. No price is published for CocoIndex Plus, so none is stated. No regional/compliance section
// (not a compliance article). Translations follow docs/geo-translation.md (geo-translation: APPLIED).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-08",
    "dateModified": "2026-11-08",
    "next_refresh_due": "2027-05-08",
    "theme": "RAG & Document Chat",
    "heroImage": "/images/cocoindex-review-hero-en.webp",
    "title": "CocoIndex Review: Incremental Data Framework for RAG and AI Agents",
    "seoTitle": "CocoIndex Review: Incremental RAG Data Framework",
    "intro": "CocoIndex is an open-source Python framework, with a Rust engine underneath, that keeps vector indexes, tables and knowledge graphs in sync with changing source data by reprocessing only what changed. It is not a chat app or a model runtime: it is the pipeline layer that feeds a RAG system or an AI agent. Its local-model angle is that embeddings and extraction can run through Ollama or sentence-transformers on your own machine. This review is based on [cocoindex.io](https://cocoindex.io), the [documentation](https://cocoindex.io/docs) and the [GitHub repository](https://github.com/cocoindex-io/cocoindex), checked on 8 November 2026; PromptQuorum has not tested CocoIndex hands-on.",
    "metaDescription": "CocoIndex review: open-source (Apache 2.0) Python framework that re-embeds only changed data for RAG/agents, with Ollama and local embeddings. Untested.",
    "twitterDescription": "CocoIndex review: an incremental data pipeline framework for RAG and AI agents. What runs locally with Ollama, what needs code, and what the sources leave open.",
    "audience": "Python developers who maintain RAG or agent pipelines over files that keep changing and want to know what CocoIndex does, what it needs and how much of it can stay on their own machine.",
    "readTime": "6 min read",
    "educationalLevel": "Advanced",
    "affiliateDisclosure": false,
    "primaryTerm": "CocoIndex review",
    "targetKeywords": [
      "cocoindex review",
      "cocoindex ollama",
      "cocoindex incremental indexing",
      "cocoindex vs llamaindex",
      "cocoindex rag",
      "cocoindex local embeddings",
      "cocoindex install"
    ],
    "current_models_mentioned": [
      "nomic-embed-text",
      "bge-m3",
      "Llama 3.2"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**CocoIndex (version 1.1.1, released on 5 November 2026) is a free, open-source (Apache 2.0) Python framework that keeps vector indexes and other AI data stores up to date by reprocessing only changed inputs.** It builds the data pipeline behind RAG and agents; it does not chat and it ships no model.",
    "quickAnswerTop": {
      "en": {
        "question": "Can CocoIndex run fully locally with Ollama?",
        "answer": "Yes, if you configure it that way. Per the documentation, embeddings can come from Ollama models such as nomic-embed-text or from sentence-transformers, extraction can use a local Llama 3.2 through Ollama, and its own state is an embedded file, so no server is required.",
        "bullets": [
          "Install with pip install -U cocoindex; the documentation lists Python 3.11 to 3.13.",
          "A pipeline is a small Python file; there is no visual builder.",
          "Targets include SQLite, LanceDB, PostgreSQL with pgvector and Qdrant.",
          "Cloud keys and hosted connectors are documented just as prominently, so local use is a choice, not a default."
        ],
        "updatedDate": "2026-11-08"
      }
    },
    "toc": [
      { "label": "Quick Answer", "anchor": "quick-answer" },
      { "label": "What Is CocoIndex?", "anchor": "what-is-cocoindex" },
      { "label": "Get It", "anchor": "get-it" },
      { "label": "Requirements", "anchor": "requirements" },
      { "label": "How to Get Started", "anchor": "getting-started" },
      { "label": "Features Confirmed by the Sources", "anchor": "key-features" },
      { "label": "Data Flow and Privacy", "anchor": "privacy" },
      { "label": "Who Should Use It", "anchor": "who-should-use" },
      { "label": "What We Could Not Verify", "anchor": "who-should-not-use" },
      { "label": "Competitors and Alternatives", "anchor": "vs-alternatives" },
      { "label": "Frequently Asked Questions", "anchor": "faq" },
      { "label": "Verdict", "anchor": "verdict" },
      { "label": "Sources", "anchor": "sources" },
      { "label": "Related Reading", "anchor": "related-reading" }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "TL;DR",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "CocoIndex is an open-source Python framework that keeps RAG indexes and agent context current by recomputing only the data and code paths that changed."
          },
          {
            "type": "plain-terms",
            "text": "You write a short Python description of what your index should contain; CocoIndex remembers earlier results and, when a file or your code changes, updates just the affected rows."
          }
        ],
        "items": [
          "Maintenance: the newest commit on the main branch is from 8 November 2026 and the latest release, 1.1.1, is from 5 November 2026, so no stale-project warning applies.",
          "Scope: a pipeline framework for developers, not an app; it contains no chat window and no model.",
          "Local use: Ollama, sentence-transformers and local targets are documented, but the same pages show cloud providers, so privacy depends on your configuration.",
          "Cost: the core is free; a separate licensed edition called CocoIndex Plus exists for teams, with no price published.",
          "Telemetry: release builds send anonymous usage events unless you opt out with an environment variable."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "This review is based on the CocoIndex website, the documentation, the GitHub repository and PyPI, checked on 8 November 2026. PromptQuorum has not installed or run CocoIndex, so speed, memory use and result quality are not assessed."
          }
        ]
      },
      "overview": {
        "id": "what-is-cocoindex",
        "title": "What Is CocoIndex?",
        "content": [
          "**CocoIndex is a framework for data pipelines that turn changing sources into AI-ready data and keep that data fresh.** You declare what the target should look like as a function of the source, in the way a spreadsheet formula or a React component works, and the engine works out which parts to recompute. Sources named in the documentation include local folders, Amazon S3, Google Drive, Kafka and databases; targets include vector databases, relational databases and graph databases. The maker is CocoIndex Inc, the company named on its website.",
          "**The engine is written in Rust and the pipelines are written in Python.** It remembers earlier results at three levels, per source item, per function call and per target row, so an edited document is re-parsed and re-embedded while unchanged ones are skipped. It also re-runs work when the code of a function changes. A separate product, CocoIndex Code, applies the same idea to codebases for coding agents and is not covered here."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Get It",
        "content": [
          "**CocoIndex is a Python package: install it with one command, then write a pipeline file.** It is not a downloadable desktop app, so there is no installer."
        ],
        "columns": [
          "Option",
          "How to get it"
        ],
        "rows": [
          {
            "Option": "pip",
            "How to get it": "`pip install -U cocoindex` from [PyPI](https://pypi.org/project/cocoindex/)"
          },
          {
            "Option": "uv or Poetry",
            "How to get it": "`uv add cocoindex` or `poetry add cocoindex`, per the [installation guide](https://cocoindex.io/docs/getting_started/installation/)"
          },
          {
            "Option": "Quickstart",
            "How to get it": "A PDF-to-Markdown pipeline that also needs `pip install docling`: [quickstart](https://cocoindex.io/docs/getting_started/quickstart/)"
          },
          {
            "Option": "Website",
            "How to get it": "[cocoindex.io](https://cocoindex.io)"
          },
          {
            "Option": "Documentation",
            "How to get it": "[cocoindex.io/docs](https://cocoindex.io/docs)"
          },
          {
            "Option": "Privacy policy",
            "How to get it": "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/), last updated on 6 November 2026 according to the page"
          },
          {
            "Option": "Source code",
            "How to get it": "[github.com/cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex), Apache 2.0"
          }
        ],
        "note": "Version reviewed: 1.1.1, released on 5 November 2026. A terminal and a Python environment are required; there is no graphical installer. The team-oriented CocoIndex Plus edition is installed separately with a license key."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requirements",
        "content": [
          "**The documentation asks for Python 3.11 to 3.13 and names three operating systems.** It publishes no RAM or GPU minimum for the framework itself."
        ],
        "columns": [
          "Item",
          "What the sources say"
        ],
        "rows": [
          {
            "Item": "Python",
            "What the sources say": "3.11 to 3.13 in the installation guide; the PyPI metadata requires 3.11 or newer"
          },
          {
            "Item": "macOS",
            "What the sources say": "10.12 or newer on Intel, 11.0 or newer on Apple Silicon"
          },
          {
            "Item": "Linux",
            "What the sources say": "x86_64 or arm64 with glibc 2.28 or newer, for example Debian 10 or Ubuntu 18.10"
          },
          {
            "Item": "Windows",
            "What the sources say": "Windows 10 or newer on x86_64"
          },
          {
            "Item": "Database",
            "What the sources say": "None for CocoIndex itself: its state lives in an embedded LMDB file whose path you set with COCOINDEX_DB; your chosen target, such as Postgres, is separate"
          },
          {
            "Item": "Models",
            "What the sources say": "Whatever you configure; Ollama must be running locally and each model pulled first for the Ollama route"
          }
        ],
        "note": "Hardware needs therefore depend on the embedding and language models you pick, not on CocoIndex."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "How to Get Started",
        "content": [
          "**The steps follow the documentation’s quickstart and embedding pages; PromptQuorum has not run them.**"
        ],
        "numberedItems": [
          {
            "title": "Install the package",
            "whyItMatters": "Run pip install -U cocoindex in a Python 3.11 to 3.13 environment, plus any parser you want, such as docling for PDFs."
          },
          {
            "title": "Set the state database path",
            "whyItMatters": "Create a .env file containing COCOINDEX_DB=./cocoindex.db so CocoIndex has a local file for its memory of earlier runs."
          },
          {
            "title": "Declare the pipeline",
            "whyItMatters": "Write a Python app that reads a source folder, processes each file with ordinary functions and declares the rows or files the target should hold."
          },
          {
            "title": "Choose local models",
            "whyItMatters": "For on-machine embeddings, start Ollama, run ollama pull nomic-embed-text and point the LiteLLM embedder at it, or use the sentence-transformers embedder instead."
          },
          {
            "title": "Run and re-run",
            "whyItMatters": "Run cocoindex update main.py, change a source file and run it again; the documentation says only the affected files are reprocessed."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Features Confirmed by the Sources",
        "content": [
          "**Every item below comes from the website, the documentation or the repository; none has been tested here.**"
        ],
        "items": [
          "**Incremental processing.** Change detection at component, function and target level, with memoization and tracking of code changes.",
          "**Connectors.** Sources and targets listed in the documentation include local files, Amazon S3, Azure Blob, Google Drive, Kafka, PostgreSQL, SQLite, LanceDB, Qdrant, Neo4j, Snowflake and BigQuery.",
          "**Local model options.** Embeddings through Ollama (nomic-embed-text, mxbai-embed-large, bge-m3 and others) or sentence-transformers, and structured extraction with a local Llama 3.2 through Ollama.",
          "**Lineage and recovery.** Inspect how an output was produced; transient failures are retried and runs resume after interruption.",
          "**Live mode.** Pipelines can watch sources and update continuously instead of in batches."
        ],
        "note": "Performance figures on the maker’s pages, such as token savings or cache-hit rates for CocoIndex Code, are the maker’s own claims and are not repeated here."
      },
      "privacy": {
        "id": "privacy",
        "title": "Data Flow and Privacy",
        "content": [
          "**With Ollama or sentence-transformers and a local target such as SQLite or LanceDB, the documented data path stays on your machine.** If you choose OpenAI, Gemini or a hosted database instead, your text goes to that provider under its own terms; CocoIndex does not prevent it.",
          "The telemetry page says release builds send anonymous events (event name, operating system and CPU architecture, Python version, and an application tag only if you set one) through the Scarf gateway. It lists what is not sent, including your data, code, file paths and credentials, and says that setting COCOINDEX_DISABLE_USAGE_TRACKING to a value other than 0 turns it off."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "These are the maker’s statements, not audit results. PromptQuorum has not inspected network traffic or the code."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Who Should Use It",
        "items": [
          "**Python developers** who re-index changing documents, code or records into a vector store and want to skip unchanged items.",
          "**Teams already running Ollama** who want local embeddings inside a maintained pipeline rather than a one-off script.",
          "**Agent builders** who need an index that tracks sources continuously and can write to several kinds of store."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "What We Could Not Verify",
        "items": [
          "**Performance.** Speed, memory use and the savings from incremental updates are the maker’s descriptions and were not measured.",
          "**Quality.** Whether the local embedding and extraction models give good results on your data is untested.",
          "**Plus pricing.** CocoIndex Plus is licensed, the website offers a booked call and no price is published, so none is stated here.",
          "**Windows behavior.** The documentation lists Windows 10 or newer, but no Windows-specific testing was checked.",
          "**Hardware floor.** No RAM or GPU minimum is published for the framework."
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
            "App": "[LlamaIndex](/power-local-llm/llamaindex-rag-framework-review)",
            "Platforms": "Mac, Windows, Linux",
            "Price / license": "Free / MIT",
            "Key difference": "Broader RAG toolkit for querying and agents; CocoIndex focuses on keeping the index current"
          },
          {
            "App": "[Haystack](/power-local-llm/haystack-deepset-rag-framework-review)",
            "Platforms": "Mac, Windows, Linux",
            "Price / license": "Free / Apache 2.0",
            "Key difference": "Explicit component pipelines for search and RAG, built around query-time flows"
          },
          {
            "App": "[txtai](/power-local-llm/txtai-embedded-vector-database-review)",
            "Platforms": "Mac, Windows, Linux",
            "Price / license": "Free / Apache 2.0",
            "Key difference": "Embeddings database and LLM workflows in one library, with its own storage"
          },
          {
            "App": "[Cognee](/power-local-llm/cognee-review)",
            "Platforms": "Self-hosted",
            "Price / license": "Free / Apache-2.0",
            "Key difference": "Builds knowledge graphs and memory for agents rather than syncing arbitrary targets"
          }
        ],
        "note": "These tools overlap in part and can be combined, for example by feeding an index that LlamaIndex or Haystack then queries. Confirm each tool’s current price, license and platforms on its own listing before choosing."
      },
      "faq": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "Does CocoIndex need a database server?",
            "a": "Not for its own state, which is an embedded file. Your target store, such as PostgreSQL with pgvector or Qdrant, is a separate choice, and SQLite and LanceDB are listed as file-based options."
          },
          {
            "q": "Is CocoIndex the same as CocoIndex Code?",
            "a": "No. CocoIndex is the general framework reviewed here; CocoIndex Code is a separate product for semantic search over codebases and exposes an MCP server for coding agents."
          },
          {
            "q": "How does CocoIndex differ from the version 0 releases?",
            "a": "The maker’s skill file says version 1 is a ground-up redesign and that agents trained on the older API tend to write the deprecated version 0 style, so use the current documentation."
          },
          {
            "q": "Can I turn the telemetry off?",
            "a": "Yes. Set the environment variable COCOINDEX_DISABLE_USAGE_TRACKING to any non-empty value other than 0 before starting your program, as described on the telemetry page."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "CocoIndex is an actively developed way to keep RAG indexes and agent context current without re-embedding everything, and its documentation shows Ollama and sentence-transformers as local routes. Against that, it is a code-first pipeline framework rather than a local LLM app, the documentation shows cloud providers as readily as local ones, the licensed Plus edition has no published price and PromptQuorum has not tested any of it. It suits Python developers who maintain changing document sets and accept writing pipeline code; for chatting with your files without programming, an app such as [AnythingLLM](/power-local-llm/anythingllm-review) is the better starting point."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[CocoIndex website](https://cocoindex.io) — product overview and edition comparison, checked 8 November 2026.",
          "[CocoIndex documentation](https://cocoindex.io/docs) — overview, installation, quickstart, database path, embedding and connector pages, checked 8 November 2026.",
          "[CocoIndex telemetry page](https://cocoindex.io/docs/about/telemetry/) — what anonymous events are sent and how to opt out, checked 8 November 2026.",
          "[CocoIndex on GitHub](https://github.com/cocoindex-io/cocoindex) — license, README and release 1.1.1, checked 8 November 2026.",
          "[cocoindex on PyPI](https://pypi.org/project/cocoindex/) — package version 1.1.1 and Python requirement, checked 8 November 2026.",
          "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/) — company privacy terms, last updated 6 November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[LlamaIndex Review](/power-local-llm/llamaindex-rag-framework-review) — a code-first RAG framework for querying your documents.",
          "[txtai Review](/power-local-llm/txtai-embedded-vector-database-review) — an embedded vector database with LLM workflows.",
          "[Local LLM Software Directory](/directory) — the full catalogue of local AI tools."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "CocoIndex Review: Incremental Data Framework for RAG and AI Agents",
      "description": "CocoIndex review: an open-source Python framework that keeps RAG indexes and agent context current by reprocessing only changed data, with Ollama and sentence-transformers options. Requirements, privacy and what the sources leave unconfirmed.",
      "url": "https://www.promptquorum.com/power-local-llm/cocoindex-review",
      "inLanguage": "en",
      "datePublished": "2026-11-08",
      "dateModified": "2026-11-08",
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "educationalLevel": "Advanced",
      "proficiencyLevel": "Advanced",
      "audience": {
        "@type": "Audience",
        "audienceType": "Python developers evaluating an incremental data pipeline framework for RAG and AI agents with local model options"
      },
      "about": [
        { "@type": "Thing", "name": "CocoIndex" },
        { "@type": "Thing", "name": "Retrieval-augmented generation" },
        { "@type": "Thing", "name": "Incremental indexing" },
        { "@type": "Thing", "name": "Ollama" }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/power-local-llm/cocoindex-review"
      }
    },
    "breadcrumbSchema": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.promptquorum.com" },
        { "@type": "ListItem", "position": 2, "name": "Power Local LLM", "item": "https://www.promptquorum.com/power-local-llm" },
        { "@type": "ListItem", "position": 3, "name": "CocoIndex Review", "item": "https://www.promptquorum.com/power-local-llm/cocoindex-review" }
      ]
    }
  },
  de: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-08",
    "dateModified": "2026-11-08",
    "next_refresh_due": "2027-05-08",
    "theme": "RAG & Document Chat",
    "heroImage": "/images/cocoindex-review-hero-de.webp",
    "title": "CocoIndex-Rezension: Inkrementelles Datenframework für RAG und KI-Agenten",
    "seoTitle": "CocoIndex-Rezension: Inkrementelles RAG-Datenframework",
    "intro": "CocoIndex ist ein quelloffenes Python-Framework mit einer Rust-Engine darunter. Es hält Vektorindizes, Tabellen und Wissensgraphen mit sich ändernden Quelldaten synchron, indem es nur neu verarbeitet, was sich geändert hat. Es ist weder eine Chat-App noch eine Modell-Laufzeitumgebung, sondern die Pipeline-Schicht, die ein RAG-System oder einen KI-Agenten speist. Der Bezug zu lokalen Modellen: Embeddings und Extraktion können über Ollama oder sentence-transformers auf Ihrem eigenen Rechner laufen. Diese Rezension stützt sich auf [cocoindex.io](https://cocoindex.io), die [Dokumentation](https://cocoindex.io/docs) und das [GitHub-Repository](https://github.com/cocoindex-io/cocoindex), geprüft am 8. November 2026; PromptQuorum hat CocoIndex nicht selbst getestet.",
    "metaDescription": "CocoIndex-Rezension: quelloffenes Python-Framework (Apache 2.0) für RAG, das nur geänderte Daten neu einbettet; Ollama und lokale Embeddings. Ungetestet.",
    "twitterDescription": "CocoIndex-Rezension: ein inkrementelles Pipeline-Framework für RAG und KI-Agenten. Was lokal mit Ollama läuft, wo Code nötig ist und was die Quellen offenlassen.",
    "audience": "Python-Entwickler, die RAG- oder Agenten-Pipelines über sich ständig ändernde Dateien betreiben und wissen möchten, was CocoIndex leistet, was es voraussetzt und wie viel davon auf dem eigenen Rechner bleiben kann.",
    "readTime": "6 Min. Lesezeit",
    "educationalLevel": "Advanced",
    "affiliateDisclosure": false,
    "primaryTerm": "CocoIndex Rezension",
    "targetKeywords": [
      "cocoindex rezension",
      "cocoindex ollama",
      "cocoindex inkrementelle indexierung",
      "cocoindex vs llamaindex",
      "cocoindex rag",
      "cocoindex lokale embeddings",
      "cocoindex installieren"
    ],
    "current_models_mentioned": [
      "nomic-embed-text",
      "bge-m3",
      "Llama 3.2"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**CocoIndex (Version 1.1.1, veröffentlicht am 5. November 2026) ist ein kostenloses, quelloffenes (Apache 2.0) Python-Framework, das Vektorindizes und andere KI-Datenspeicher aktuell hält, indem es nur geänderte Eingaben neu verarbeitet.** Es baut die Datenpipeline hinter RAG und Agenten; es chattet nicht und liefert kein Modell mit.",
    "quickAnswerTop": {
      "de": {
        "question": "Läuft CocoIndex vollständig lokal mit Ollama?",
        "answer": "Ja, wenn Sie es entsprechend konfigurieren. Laut Dokumentation können Embeddings von Ollama-Modellen wie nomic-embed-text oder von sentence-transformers stammen, die Extraktion kann ein lokales Llama 3.2 über Ollama nutzen, und der eigene Zustand liegt in einer eingebetteten Datei, sodass kein Server nötig ist.",
        "bullets": [
          "Die Installation erfolgt mit pip install -U cocoindex; die Dokumentation nennt Python 3.11 bis 3.13.",
          "Eine Pipeline ist eine kleine Python-Datei; einen visuellen Editor gibt es nicht.",
          "Als Ziele sind unter anderem SQLite, LanceDB, PostgreSQL mit pgvector und Qdrant genannt.",
          "Cloud-Schlüssel und gehostete Konnektoren sind ebenso prominent dokumentiert; lokale Nutzung ist also eine Entscheidung, keine Voreinstellung."
        ],
        "updatedDate": "2026-11-08"
      }
    },
    "toc": [
      { "label": "Kurzantwort", "anchor": "quick-answer" },
      { "label": "Was ist CocoIndex?", "anchor": "what-is-cocoindex" },
      { "label": "Bezugsquelle", "anchor": "get-it" },
      { "label": "Anforderungen", "anchor": "requirements" },
      { "label": "So gelingt der Einstieg", "anchor": "getting-started" },
      { "label": "Von den Quellen bestätigte Funktionen", "anchor": "key-features" },
      { "label": "Datenfluss und Datenschutz", "anchor": "privacy" },
      { "label": "Für wen sich das Framework eignet", "anchor": "who-should-use" },
      { "label": "Was wir nicht überprüfen konnten", "anchor": "who-should-not-use" },
      { "label": "Wettbewerber und Alternativen", "anchor": "vs-alternatives" },
      { "label": "Häufig gestellte Fragen", "anchor": "faq" },
      { "label": "Fazit", "anchor": "verdict" },
      { "label": "Quellen", "anchor": "sources" },
      { "label": "Weiterführende Artikel", "anchor": "related-reading" }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "Zusammenfassung",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "CocoIndex ist ein quelloffenes Python-Framework, das RAG-Indizes und Agentenkontext aktuell hält, indem es nur die geänderten Daten und Codepfade neu berechnet."
          },
          {
            "type": "plain-terms",
            "text": "Sie beschreiben in kurzem Python-Code, was Ihr Index enthalten soll; CocoIndex merkt sich frühere Ergebnisse und aktualisiert bei einer Änderung an einer Datei oder an Ihrem Code nur die betroffenen Zeilen."
          }
        ],
        "items": [
          "Pflege: Der neueste Commit im Hauptzweig stammt vom 8. November 2026 und das aktuelle Release 1.1.1 vom 5. November 2026; eine Warnung vor einem verwaisten Projekt entfällt.",
          "Umfang: ein Pipeline-Framework für Entwickler, keine App; es enthält weder ein Chatfenster noch ein Modell.",
          "Lokale Nutzung: Ollama, sentence-transformers und lokale Ziele sind dokumentiert, doch dieselben Seiten zeigen auch Cloud-Anbieter; der Datenschutz hängt daher von Ihrer Konfiguration ab.",
          "Kosten: Der Kern ist kostenlos; für Teams gibt es eine separate lizenzierte Edition namens CocoIndex Plus, deren Preis nicht veröffentlicht ist.",
          "Telemetrie: Release-Builds senden anonyme Nutzungsereignisse, sofern Sie nicht per Umgebungsvariable widersprechen."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Diese Rezension stützt sich auf die CocoIndex-Website, die Dokumentation, das GitHub-Repository und PyPI, geprüft am 8. November 2026. PromptQuorum hat CocoIndex weder installiert noch ausgeführt; Geschwindigkeit, Speicherbedarf und Ergebnisqualität wurden daher nicht bewertet."
          }
        ]
      },
      "overview": {
        "id": "what-is-cocoindex",
        "title": "Was ist CocoIndex?",
        "content": [
          "**CocoIndex ist ein Framework für Datenpipelines, die sich ändernde Quellen in KI-taugliche Daten verwandeln und diese Daten aktuell halten.** Sie legen fest, wie das Ziel als Funktion der Quelle aussehen soll, ähnlich wie bei einer Tabellenformel oder einer React-Komponente, und die Engine ermittelt, welche Teile neu berechnet werden müssen. Die Dokumentation nennt als Quellen unter anderem lokale Ordner, Amazon S3, Google Drive, Kafka und Datenbanken; als Ziele dienen Vektor-, relationale und Graphdatenbanken. Hersteller ist CocoIndex Inc, das Unternehmen, das auf der Website genannt wird.",
          "**Die Engine ist in Rust geschrieben, die Pipelines schreiben Sie in Python.** Frühere Ergebnisse werden auf drei Ebenen gespeichert, je Quellelement, je Funktionsaufruf und je Zielzeile; ein bearbeitetes Dokument wird deshalb neu geparst und neu eingebettet, unveränderte werden übersprungen. Auch wenn sich der Code einer Funktion ändert, wird die Arbeit erneut ausgeführt. Ein separates Produkt, CocoIndex Code, überträgt dieselbe Idee auf Codebasen für Coding-Agenten und wird hier nicht behandelt."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Bezugsquelle",
        "content": [
          "**CocoIndex ist ein Python-Paket: Sie installieren es mit einem Befehl und schreiben dann eine Pipeline-Datei.** Es ist keine herunterladbare Desktop-App, einen Installer gibt es daher nicht."
        ],
        "columns": [
          "Option",
          "Bezug"
        ],
        "rows": [
          {
            "Option": "pip",
            "Bezug": "`pip install -U cocoindex` von [PyPI](https://pypi.org/project/cocoindex/)"
          },
          {
            "Option": "uv oder Poetry",
            "Bezug": "`uv add cocoindex` oder `poetry add cocoindex`, laut [Installationsanleitung](https://cocoindex.io/docs/getting_started/installation/)"
          },
          {
            "Option": "Schnellstart",
            "Bezug": "Eine PDF-zu-Markdown-Pipeline, die zusätzlich `pip install docling` braucht: [Schnellstart](https://cocoindex.io/docs/getting_started/quickstart/)"
          },
          {
            "Option": "Website",
            "Bezug": "[cocoindex.io](https://cocoindex.io)"
          },
          {
            "Option": "Dokumentation",
            "Bezug": "[cocoindex.io/docs](https://cocoindex.io/docs)"
          },
          {
            "Option": "Datenschutzerklärung",
            "Bezug": "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/), laut Seite zuletzt am 6. November 2026 aktualisiert"
          },
          {
            "Option": "Quellcode",
            "Bezug": "[github.com/cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex), Apache 2.0"
          }
        ],
        "note": "Geprüfte Version: 1.1.1, veröffentlicht am 5. November 2026. Erforderlich sind ein Terminal und eine Python-Umgebung; einen grafischen Installer gibt es nicht. Die teamorientierte Edition CocoIndex Plus wird separat mit einem Lizenzschlüssel installiert."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Anforderungen",
        "content": [
          "**Die Dokumentation verlangt Python 3.11 bis 3.13 und nennt drei Betriebssysteme.** Für das Framework selbst gibt sie weder ein RAM- noch ein GPU-Minimum an."
        ],
        "columns": [
          "Punkt",
          "Was die Quellen sagen"
        ],
        "rows": [
          {
            "Punkt": "Python",
            "Was die Quellen sagen": "3.11 bis 3.13 laut Installationsanleitung; die PyPI-Metadaten verlangen 3.11 oder neuer"
          },
          {
            "Punkt": "macOS",
            "Was die Quellen sagen": "10.12 oder neuer auf Intel, 11.0 oder neuer auf Apple Silicon"
          },
          {
            "Punkt": "Linux",
            "Was die Quellen sagen": "x86_64 oder arm64 mit glibc 2.28 oder neuer, zum Beispiel Debian 10 oder Ubuntu 18.10"
          },
          {
            "Punkt": "Windows",
            "Was die Quellen sagen": "Windows 10 oder neuer auf x86_64"
          },
          {
            "Punkt": "Datenbank",
            "Was die Quellen sagen": "Für CocoIndex selbst keine: Der Zustand liegt in einer eingebetteten LMDB-Datei, deren Pfad Sie mit COCOINDEX_DB festlegen; Ihr gewähltes Ziel, etwa Postgres, ist separat"
          },
          {
            "Punkt": "Modelle",
            "Was die Quellen sagen": "Was Sie konfigurieren; für die Ollama-Route muss Ollama lokal laufen und jedes Modell zuvor geladen sein"
          }
        ],
        "note": "Der Hardwarebedarf hängt daher von den gewählten Embedding- und Sprachmodellen ab, nicht von CocoIndex."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "So gelingt der Einstieg",
        "content": [
          "**Die Schritte folgen den Seiten der Dokumentation zu Schnellstart und Embeddings; PromptQuorum hat sie nicht ausgeführt.**"
        ],
        "numberedItems": [
          {
            "title": "Paket installieren",
            "whyItMatters": "Führen Sie pip install -U cocoindex in einer Python-Umgebung 3.11 bis 3.13 aus, dazu einen gewünschten Parser, etwa docling für PDFs."
          },
          {
            "title": "Pfad der Zustandsdatenbank festlegen",
            "whyItMatters": "Legen Sie eine .env-Datei mit COCOINDEX_DB=./cocoindex.db an, damit CocoIndex eine lokale Datei für sein Gedächtnis früherer Läufe hat."
          },
          {
            "title": "Pipeline deklarieren",
            "whyItMatters": "Schreiben Sie eine Python-App, die einen Quellordner liest, jede Datei mit gewöhnlichen Funktionen verarbeitet und die Zeilen oder Dateien deklariert, die das Ziel enthalten soll."
          },
          {
            "title": "Lokale Modelle wählen",
            "whyItMatters": "Für Embeddings auf dem eigenen Rechner starten Sie Ollama, führen ollama pull nomic-embed-text aus und verweisen den LiteLLM-Embedder darauf; alternativ nutzen Sie den sentence-transformers-Embedder."
          },
          {
            "title": "Ausführen und erneut ausführen",
            "whyItMatters": "Führen Sie cocoindex update main.py aus, ändern Sie eine Quelldatei und starten Sie erneut; laut Dokumentation werden nur die betroffenen Dateien neu verarbeitet."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Von den Quellen bestätigte Funktionen",
        "content": [
          "**Jeder der folgenden Punkte stammt von der Website, aus der Dokumentation oder aus dem Repository; keiner wurde hier getestet.**"
        ],
        "items": [
          "**Inkrementelle Verarbeitung.** Änderungserkennung auf Komponenten-, Funktions- und Zielebene, mit Memoization und Nachverfolgung von Codeänderungen.",
          "**Konnektoren.** Die Dokumentation nennt als Quellen und Ziele unter anderem lokale Dateien, Amazon S3, Azure Blob, Google Drive, Kafka, PostgreSQL, SQLite, LanceDB, Qdrant, Neo4j, Snowflake und BigQuery.",
          "**Lokale Modelloptionen.** Embeddings über Ollama (nomic-embed-text, mxbai-embed-large, bge-m3 und weitere) oder sentence-transformers sowie strukturierte Extraktion mit einem lokalen Llama 3.2 über Ollama.",
          "**Herkunftsnachweis und Wiederaufnahme.** Sie können nachvollziehen, wie eine Ausgabe entstanden ist; vorübergehende Fehler werden wiederholt, und Läufe setzen nach einer Unterbrechung fort.",
          "**Live-Modus.** Pipelines können Quellen beobachten und fortlaufend statt im Stapel aktualisieren."
        ],
        "note": "Leistungsangaben auf den Seiten des Herstellers, etwa zu Token-Einsparungen oder Cache-Trefferquoten bei CocoIndex Code, sind Eigenaussagen des Herstellers und werden hier nicht wiederholt."
      },
      "privacy": {
        "id": "privacy",
        "title": "Datenfluss und Datenschutz",
        "content": [
          "**Mit Ollama oder sentence-transformers und einem lokalen Ziel wie SQLite oder LanceDB bleibt der dokumentierte Datenweg auf Ihrem Rechner.** Wählen Sie stattdessen OpenAI, Gemini oder eine gehostete Datenbank, geht Ihr Text nach deren eigenen Bedingungen an diesen Anbieter; CocoIndex verhindert das nicht.",
          "Die Telemetrie-Seite besagt, dass Release-Builds anonyme Ereignisse (Ereignisname, Betriebssystem und CPU-Architektur, Python-Version sowie ein Anwendungs-Tag nur, wenn Sie eines setzen) über das Scarf-Gateway senden. Sie listet auf, was nicht gesendet wird, darunter Ihre Daten, Ihr Code, Dateipfade und Zugangsdaten, und sagt, dass die Telemetrie abgeschaltet wird, wenn Sie COCOINDEX_DISABLE_USAGE_TRACKING auf einen anderen Wert als 0 setzen."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Das sind Aussagen des Herstellers, keine Prüfergebnisse. PromptQuorum hat weder den Netzwerkverkehr noch den Code untersucht."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Für wen sich das Framework eignet",
        "items": [
          "**Python-Entwickler**, die sich ändernde Dokumente, Code oder Datensätze in einen Vektorspeicher neu indexieren und unveränderte Elemente überspringen möchten.",
          "**Teams, die bereits Ollama betreiben** und lokale Embeddings in einer gepflegten Pipeline statt in einem Einmalskript nutzen möchten.",
          "**Agenten-Entwickler**, die einen Index brauchen, der Quellen fortlaufend verfolgt und in mehrere Arten von Speichern schreiben kann."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Was wir nicht überprüfen konnten",
        "items": [
          "**Leistung.** Geschwindigkeit, Speicherbedarf und die Einsparungen durch inkrementelle Updates sind Beschreibungen des Herstellers und wurden nicht gemessen.",
          "**Qualität.** Ob die lokalen Embedding- und Extraktionsmodelle auf Ihren Daten gute Ergebnisse liefern, ist ungetestet.",
          "**Plus-Preise.** CocoIndex Plus ist lizenzpflichtig, die Website bietet einen Gesprächstermin an und nennt keinen Preis; deshalb steht hier keiner.",
          "**Verhalten unter Windows.** Die Dokumentation nennt Windows 10 oder neuer, doch Windows-spezifische Tests wurden nicht geprüft.",
          "**Hardware-Untergrenze.** Für das Framework ist kein RAM- oder GPU-Minimum veröffentlicht."
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
            "App": "[LlamaIndex](/de/power-local-llm/llamaindex-rag-framework-review)",
            "Plattformen": "Mac, Windows, Linux",
            "Preis / Lizenz": "Gratis / MIT",
            "Hauptunterschied": "Breiteres RAG-Toolkit für Abfragen und Agenten; CocoIndex konzentriert sich darauf, den Index aktuell zu halten"
          },
          {
            "App": "[Haystack](/de/power-local-llm/haystack-deepset-rag-framework-review)",
            "Plattformen": "Mac, Windows, Linux",
            "Preis / Lizenz": "Gratis / Apache 2.0",
            "Hauptunterschied": "Explizite Komponenten-Pipelines für Suche und RAG, ausgelegt auf Abläufe zur Abfragezeit"
          },
          {
            "App": "[txtai](/de/power-local-llm/txtai-embedded-vector-database-review)",
            "Plattformen": "Mac, Windows, Linux",
            "Preis / Lizenz": "Gratis / Apache 2.0",
            "Hauptunterschied": "Embeddings-Datenbank und LLM-Workflows in einer Bibliothek, mit eigenem Speicher"
          },
          {
            "App": "[Cognee](/de/power-local-llm/cognee-review)",
            "Plattformen": "Selbst gehostet",
            "Preis / Lizenz": "Gratis / Apache-2.0",
            "Hauptunterschied": "Baut Wissensgraphen und Gedächtnis für Agenten auf, statt beliebige Ziele zu synchronisieren"
          }
        ],
        "note": "Diese Werkzeuge überschneiden sich teilweise und lassen sich kombinieren, etwa indem CocoIndex einen Index speist, den LlamaIndex oder Haystack anschließend abfragt. Prüfen Sie Preis, Lizenz und Plattformen jedes Werkzeugs vor der Wahl im jeweiligen Eintrag."
      },
      "faq": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Braucht CocoIndex einen Datenbankserver?",
            "a": "Nicht für den eigenen Zustand, der in einer eingebetteten Datei liegt. Ihr Zielspeicher, etwa PostgreSQL mit pgvector oder Qdrant, ist eine eigene Entscheidung; SQLite und LanceDB sind als dateibasierte Optionen aufgeführt."
          },
          {
            "q": "Ist CocoIndex dasselbe wie CocoIndex Code?",
            "a": "Nein. CocoIndex ist das hier besprochene allgemeine Framework; CocoIndex Code ist ein separates Produkt für die semantische Suche in Codebasen und stellt für Coding-Agenten einen MCP-Server bereit."
          },
          {
            "q": "Wie unterscheidet sich CocoIndex von den Releases der Version 0?",
            "a": "Die Skill-Datei des Herstellers sagt, Version 1 sei ein grundlegender Neuentwurf, und Agenten, die mit der älteren API trainiert wurden, schrieben tendenziell den veralteten Stil der Version 0; nutzen Sie daher die aktuelle Dokumentation."
          },
          {
            "q": "Kann ich die Telemetrie abschalten?",
            "a": "Ja. Setzen Sie die Umgebungsvariable COCOINDEX_DISABLE_USAGE_TRACKING vor dem Start Ihres Programms auf einen beliebigen nicht leeren Wert außer 0, wie auf der Telemetrie-Seite beschrieben."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "CocoIndex ist ein aktiv entwickelter Weg, RAG-Indizes und Agentenkontext aktuell zu halten, ohne alles neu einzubetten, und die Dokumentation zeigt Ollama und sentence-transformers als lokale Routen. Dagegen spricht: Es ist ein Pipeline-Framework, das mit Code arbeitet, und keine lokale LLM-App, die Dokumentation zeigt Cloud-Anbieter ebenso selbstverständlich wie lokale, die lizenzierte Plus-Edition hat keinen veröffentlichten Preis, und PromptQuorum hat nichts davon getestet. Es passt zu Python-Entwicklern, die sich ändernde Dokumentbestände pflegen und bereit sind, Pipeline-Code zu schreiben; um ohne Programmierung mit den eigenen Dateien zu chatten, ist eine App wie [AnythingLLM](/de/power-local-llm/anythingllm-review) der bessere Ausgangspunkt."
      },
      "sources": {
        "id": "sources",
        "title": "Quellen",
        "items": [
          "[CocoIndex-Website](https://cocoindex.io) — Produktüberblick und Editionsvergleich, geprüft am 8. November 2026.",
          "[CocoIndex-Dokumentation](https://cocoindex.io/docs) — Überblick, Installation, Schnellstart, Datenbankpfad sowie Seiten zu Embeddings und Konnektoren, geprüft am 8. November 2026.",
          "[CocoIndex-Telemetrie-Seite](https://cocoindex.io/docs/about/telemetry/) — welche anonymen Ereignisse gesendet werden und wie man widerspricht, geprüft am 8. November 2026.",
          "[CocoIndex auf GitHub](https://github.com/cocoindex-io/cocoindex) — Lizenz, README und Release 1.1.1, geprüft am 8. November 2026.",
          "[cocoindex auf PyPI](https://pypi.org/project/cocoindex/) — Paketversion 1.1.1 und Python-Anforderung, geprüft am 8. November 2026.",
          "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/) — Datenschutzbedingungen des Unternehmens, zuletzt aktualisiert am 6. November 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[LlamaIndex-Rezension](/de/power-local-llm/llamaindex-rag-framework-review) — ein codeorientiertes RAG-Framework zum Abfragen Ihrer Dokumente.",
          "[txtai-Rezension](/de/power-local-llm/txtai-embedded-vector-database-review) — eine eingebettete Vektordatenbank mit LLM-Workflows.",
          "[Verzeichnis lokaler LLM-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "CocoIndex-Rezension: Inkrementelles Datenframework für RAG und KI-Agenten",
      "description": "CocoIndex-Rezension: ein quelloffenes Python-Framework, das RAG-Indizes und Agentenkontext aktuell hält, indem es nur geänderte Daten neu verarbeitet, mit Ollama- und sentence-transformers-Optionen. Anforderungen, Datenschutz und was die Quellen unbestätigt lassen.",
      "url": "https://www.promptquorum.com/de/power-local-llm/cocoindex-review",
      "inLanguage": "de",
      "datePublished": "2026-11-08",
      "dateModified": "2026-11-08",
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "educationalLevel": "Advanced",
      "proficiencyLevel": "Advanced",
      "audience": {
        "@type": "Audience",
        "audienceType": "Python-Entwickler, die ein inkrementelles Datenpipeline-Framework für RAG und KI-Agenten mit lokalen Modelloptionen prüfen"
      },
      "about": [
        { "@type": "Thing", "name": "CocoIndex" },
        { "@type": "Thing", "name": "Retrieval-Augmented Generation" },
        { "@type": "Thing", "name": "Inkrementelle Indexierung" },
        { "@type": "Thing", "name": "Ollama" }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/de/power-local-llm/cocoindex-review"
      }
    },
    "breadcrumbSchema": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.promptquorum.com" },
        { "@type": "ListItem", "position": 2, "name": "Power Local LLM", "item": "https://www.promptquorum.com/de/power-local-llm" },
        { "@type": "ListItem", "position": 3, "name": "CocoIndex-Rezension", "item": "https://www.promptquorum.com/de/power-local-llm/cocoindex-review" }
      ]
    }
  },
  fr: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-08",
    "dateModified": "2026-11-08",
    "next_refresh_due": "2027-05-08",
    "theme": "RAG & Document Chat",
    "heroImage": "/images/cocoindex-review-hero-fr.webp",
    "title": "Test de CocoIndex : framework de données incrémental pour RAG et agents IA",
    "seoTitle": "Test de CocoIndex : framework de données RAG incrémental",
    "intro": "CocoIndex est un framework Python open source, avec un moteur Rust en dessous, qui garde les index vectoriels, les tables et les graphes de connaissances synchronisés avec des données sources changeantes en ne retraitant que ce qui a changé. Ce n’est ni une appli de chat ni un environnement d’exécution de modèles : c’est la couche de pipeline qui alimente un système RAG ou un agent IA. Côté modèles locaux, les embeddings et l’extraction peuvent passer par Ollama ou sentence-transformers sur votre propre machine. Ce test s’appuie sur [cocoindex.io](https://cocoindex.io), la [documentation](https://cocoindex.io/docs) et le [dépôt GitHub](https://github.com/cocoindex-io/cocoindex), consultés le 8 novembre 2026 ; PromptQuorum n’a pas testé CocoIndex en pratique.",
    "metaDescription": "Test de CocoIndex : framework Python open source (Apache 2.0) qui ne réindexe que ce qui change, pour RAG et agents, avec Ollama en local. Non testé.",
    "twitterDescription": "Test de CocoIndex : un framework de pipelines de données incrémental pour RAG et agents IA. Ce qui tourne en local avec Ollama, ce qui exige du code et ce que les sources laissent ouvert.",
    "audience": "Développeurs Python qui maintiennent des pipelines RAG ou d’agents sur des fichiers en évolution constante et veulent savoir ce que fait CocoIndex, ce qu’il exige et quelle part peut rester sur leur machine.",
    "readTime": "6 min de lecture",
    "educationalLevel": "Advanced",
    "affiliateDisclosure": false,
    "primaryTerm": "test de CocoIndex",
    "targetKeywords": [
      "test cocoindex",
      "cocoindex ollama",
      "cocoindex indexation incrémentale",
      "cocoindex vs llamaindex",
      "cocoindex rag",
      "cocoindex embeddings locaux",
      "installer cocoindex"
    ],
    "current_models_mentioned": [
      "nomic-embed-text",
      "bge-m3",
      "Llama 3.2"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**CocoIndex (version 1.1.1, publiée le 5 novembre 2026) est un framework Python gratuit et open source (Apache 2.0) qui maintient à jour les index vectoriels et d’autres stockages de données IA en ne retraitant que les entrées modifiées.** Il construit le pipeline de données derrière le RAG et les agents ; il ne dialogue pas et n’embarque aucun modèle.",
    "quickAnswerTop": {
      "fr": {
        "question": "CocoIndex peut-il fonctionner entièrement en local avec Ollama ?",
        "answer": "Oui, si vous le configurez ainsi. D’après la documentation, les embeddings peuvent venir de modèles Ollama comme nomic-embed-text ou de sentence-transformers, l’extraction peut utiliser un Llama 3.2 local via Ollama, et son propre état est un fichier embarqué : aucun serveur n’est nécessaire.",
        "bullets": [
          "Installation avec pip install -U cocoindex ; la documentation indique Python 3.11 à 3.13.",
          "Un pipeline est un petit fichier Python ; il n’y a pas de constructeur visuel.",
          "Les cibles incluent SQLite, LanceDB, PostgreSQL avec pgvector et Qdrant.",
          "Les clés cloud et les connecteurs hébergés sont documentés avec autant de relief : l’usage local est un choix, pas un réglage par défaut."
        ],
        "updatedDate": "2026-11-08"
      }
    },
    "toc": [
      { "label": "Réponse rapide", "anchor": "quick-answer" },
      { "label": "Qu’est-ce que CocoIndex ?", "anchor": "what-is-cocoindex" },
      { "label": "Où l’obtenir", "anchor": "get-it" },
      { "label": "Configuration requise", "anchor": "requirements" },
      { "label": "Pour bien démarrer", "anchor": "getting-started" },
      { "label": "Fonctions confirmées par les sources", "anchor": "key-features" },
      { "label": "Flux de données et confidentialité", "anchor": "privacy" },
      { "label": "À qui s’adresse l’outil", "anchor": "who-should-use" },
      { "label": "Ce que nous n’avons pas pu vérifier", "anchor": "who-should-not-use" },
      { "label": "Concurrents et alternatives", "anchor": "vs-alternatives" },
      { "label": "Questions fréquentes", "anchor": "faq" },
      { "label": "Verdict", "anchor": "verdict" },
      { "label": "Sources", "anchor": "sources" },
      { "label": "À lire aussi", "anchor": "related-reading" }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "Points clés",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "CocoIndex est un framework Python open source qui maintient à jour les index RAG et le contexte des agents en ne recalculant que les données et les chemins de code qui ont changé."
          },
          {
            "type": "plain-terms",
            "text": "Vous décrivez en quelques lignes de Python ce que votre index doit contenir ; CocoIndex mémorise les résultats précédents et, quand un fichier ou votre code change, ne met à jour que les lignes concernées."
          }
        ],
        "items": [
          "Maintenance : le dernier commit de la branche principale date du 8 novembre 2026 et la dernière version, 1.1.1, du 5 novembre 2026 ; aucun avertissement de projet abandonné ne s’applique.",
          "Périmètre : un framework de pipelines pour développeurs, pas une appli ; il ne contient ni fenêtre de chat ni modèle.",
          "Usage local : Ollama, sentence-transformers et des cibles locales sont documentés, mais les mêmes pages montrent des fournisseurs cloud ; la confidentialité dépend donc de votre configuration.",
          "Coût : le cœur est gratuit ; une édition sous licence distincte, CocoIndex Plus, existe pour les équipes, sans prix publié.",
          "Télémétrie : les versions publiées envoient des événements d’usage anonymes, sauf désactivation par une variable d’environnement."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Ce test s’appuie sur le site de CocoIndex, la documentation, le dépôt GitHub et PyPI, consultés le 8 novembre 2026. PromptQuorum n’a ni installé ni exécuté CocoIndex ; la vitesse, la consommation de mémoire et la qualité des résultats ne sont donc pas évaluées."
          }
        ]
      },
      "overview": {
        "id": "what-is-cocoindex",
        "title": "Qu’est-ce que CocoIndex ?",
        "content": [
          "**CocoIndex est un framework de pipelines de données qui transforme des sources changeantes en données prêtes pour l’IA et les garde à jour.** Vous déclarez à quoi la cible doit ressembler en fonction de la source, comme une formule de tableur ou un composant React, et le moteur détermine quelles parties recalculer. Les sources citées dans la documentation incluent les dossiers locaux, Amazon S3, Google Drive, Kafka et des bases de données ; les cibles incluent des bases vectorielles, relationnelles et de graphes. L’éditeur est CocoIndex Inc, la société nommée sur son site.",
          "**Le moteur est écrit en Rust et les pipelines en Python.** Il mémorise les résultats précédents à trois niveaux, par élément source, par appel de fonction et par ligne cible : un document modifié est ré-analysé et ré-encodé, tandis que les autres sont ignorés. Il relance aussi le travail quand le code d’une fonction change. Un produit distinct, CocoIndex Code, applique la même idée aux bases de code pour les agents de programmation et n’est pas traité ici."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Où l’obtenir",
        "content": [
          "**CocoIndex est un paquet Python : on l’installe en une commande, puis on écrit un fichier de pipeline.** Ce n’est pas une appli de bureau à télécharger, il n’y a donc pas d’installateur."
        ],
        "columns": [
          "Option",
          "Comment l’obtenir"
        ],
        "rows": [
          {
            "Option": "pip",
            "Comment l’obtenir": "`pip install -U cocoindex` depuis [PyPI](https://pypi.org/project/cocoindex/)"
          },
          {
            "Option": "uv ou Poetry",
            "Comment l’obtenir": "`uv add cocoindex` ou `poetry add cocoindex`, selon le [guide d’installation](https://cocoindex.io/docs/getting_started/installation/)"
          },
          {
            "Option": "Démarrage rapide",
            "Comment l’obtenir": "Un pipeline PDF vers Markdown qui exige aussi `pip install docling` : [démarrage rapide](https://cocoindex.io/docs/getting_started/quickstart/)"
          },
          {
            "Option": "Site web",
            "Comment l’obtenir": "[cocoindex.io](https://cocoindex.io)"
          },
          {
            "Option": "Documentation",
            "Comment l’obtenir": "[cocoindex.io/docs](https://cocoindex.io/docs)"
          },
          {
            "Option": "Politique de confidentialité",
            "Comment l’obtenir": "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/), mise à jour pour la dernière fois le 6 novembre 2026 selon la page"
          },
          {
            "Option": "Code source",
            "Comment l’obtenir": "[github.com/cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex), Apache 2.0"
          }
        ],
        "note": "Version examinée : 1.1.1, publiée le 5 novembre 2026. Un terminal et un environnement Python sont requis ; il n’y a pas d’installateur graphique. L’édition CocoIndex Plus, destinée aux équipes, s’installe séparément avec une clé de licence."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Configuration requise",
        "content": [
          "**La documentation demande Python 3.11 à 3.13 et nomme trois systèmes d’exploitation.** Elle ne publie aucun minimum de RAM ou de GPU pour le framework lui-même."
        ],
        "columns": [
          "Élément",
          "Ce que disent les sources"
        ],
        "rows": [
          {
            "Élément": "Python",
            "Ce que disent les sources": "3.11 à 3.13 dans le guide d’installation ; les métadonnées PyPI exigent 3.11 ou plus récent"
          },
          {
            "Élément": "macOS",
            "Ce que disent les sources": "10.12 ou plus récent sur Intel, 11.0 ou plus récent sur Apple Silicon"
          },
          {
            "Élément": "Linux",
            "Ce que disent les sources": "x86_64 ou arm64 avec glibc 2.28 ou plus récente, par exemple Debian 10 ou Ubuntu 18.10"
          },
          {
            "Élément": "Windows",
            "Ce que disent les sources": "Windows 10 ou plus récent sur x86_64"
          },
          {
            "Élément": "Base de données",
            "Ce que disent les sources": "Aucune pour CocoIndex lui-même : son état vit dans un fichier LMDB embarqué dont vous fixez le chemin avec COCOINDEX_DB ; la cible choisie, comme Postgres, est distincte"
          },
          {
            "Élément": "Modèles",
            "Ce que disent les sources": "Ceux que vous configurez ; pour la voie Ollama, Ollama doit tourner en local et chaque modèle être téléchargé au préalable"
          }
        ],
        "note": "Les besoins matériels dépendent donc des modèles d’embedding et de langage que vous choisissez, pas de CocoIndex."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Pour bien démarrer",
        "content": [
          "**Les étapes suivent le démarrage rapide et les pages sur les embeddings de la documentation ; PromptQuorum ne les a pas exécutées.**"
        ],
        "numberedItems": [
          {
            "title": "Installez le paquet",
            "whyItMatters": "Exécutez pip install -U cocoindex dans un environnement Python 3.11 à 3.13, plus l’analyseur de votre choix, comme docling pour les PDF."
          },
          {
            "title": "Définissez le chemin de la base d’état",
            "whyItMatters": "Créez un fichier .env contenant COCOINDEX_DB=./cocoindex.db pour que CocoIndex dispose d’un fichier local où mémoriser les exécutions précédentes."
          },
          {
            "title": "Déclarez le pipeline",
            "whyItMatters": "Écrivez une appli Python qui lit un dossier source, traite chaque fichier avec des fonctions ordinaires et déclare les lignes ou fichiers que la cible doit contenir."
          },
          {
            "title": "Choisissez des modèles locaux",
            "whyItMatters": "Pour des embeddings sur votre machine, démarrez Ollama, exécutez ollama pull nomic-embed-text et pointez l’encodeur LiteLLM vers lui, ou utilisez plutôt l’encodeur sentence-transformers."
          },
          {
            "title": "Exécutez, puis relancez",
            "whyItMatters": "Lancez cocoindex update main.py, modifiez un fichier source et relancez ; la documentation indique que seuls les fichiers concernés sont retraités."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Fonctions confirmées par les sources",
        "content": [
          "**Chaque point ci-dessous provient du site, de la documentation ou du dépôt ; aucun n’a été testé ici.**"
        ],
        "items": [
          "**Traitement incrémental.** Détection des changements au niveau du composant, de la fonction et de la cible, avec mémoïsation et suivi des modifications du code.",
          "**Connecteurs.** Les sources et cibles listées dans la documentation incluent les fichiers locaux, Amazon S3, Azure Blob, Google Drive, Kafka, PostgreSQL, SQLite, LanceDB, Qdrant, Neo4j, Snowflake et BigQuery.",
          "**Options de modèles locaux.** Embeddings via Ollama (nomic-embed-text, mxbai-embed-large, bge-m3 et d’autres) ou sentence-transformers, et extraction structurée avec un Llama 3.2 local via Ollama.",
          "**Traçabilité et reprise.** Possibilité d’inspecter la façon dont une sortie a été produite ; les échecs transitoires sont relancés et les exécutions reprennent après une interruption.",
          "**Mode live.** Les pipelines peuvent surveiller les sources et se mettre à jour en continu plutôt que par lots."
        ],
        "note": "Les chiffres de performance des pages de l’éditeur, comme les économies de jetons ou les taux de succès du cache pour CocoIndex Code, sont des affirmations de l’éditeur et ne sont pas repris ici."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flux de données et confidentialité",
        "content": [
          "**Avec Ollama ou sentence-transformers et une cible locale comme SQLite ou LanceDB, le chemin de données documenté reste sur votre machine.** Si vous choisissez plutôt OpenAI, Gemini ou une base hébergée, votre texte part chez ce fournisseur selon ses propres conditions ; CocoIndex ne l’empêche pas.",
          "La page de télémétrie indique que les versions publiées envoient des événements anonymes (nom de l’événement, système d’exploitation et architecture du processeur, version de Python, et une étiquette d’application seulement si vous en définissez une) via la passerelle Scarf. Elle liste ce qui n’est pas envoyé, dont vos données, votre code, vos chemins de fichiers et vos identifiants, et précise que définir COCOINDEX_DISABLE_USAGE_TRACKING à une valeur autre que 0 la désactive."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Il s’agit de déclarations de l’éditeur, pas de résultats d’audit. PromptQuorum n’a inspecté ni le trafic réseau ni le code."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "À qui s’adresse l’outil",
        "items": [
          "**Les développeurs Python** qui réindexent des documents, du code ou des enregistrements changeants dans un stockage vectoriel et veulent ignorer les éléments inchangés.",
          "**Les équipes qui utilisent déjà Ollama** et veulent des embeddings locaux dans un pipeline maintenu plutôt que dans un script ponctuel.",
          "**Les concepteurs d’agents** qui ont besoin d’un index suivant les sources en continu et pouvant écrire dans plusieurs types de stockage."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Ce que nous n’avons pas pu vérifier",
        "items": [
          "**Performances.** La vitesse, la consommation de mémoire et les gains des mises à jour incrémentales sont des descriptions de l’éditeur et n’ont pas été mesurés.",
          "**Qualité.** On ignore si les modèles locaux d’embedding et d’extraction donnent de bons résultats sur vos données.",
          "**Prix de Plus.** CocoIndex Plus est sous licence, le site propose un rendez-vous à réserver et aucun prix n’est publié ; aucun prix n’est donc indiqué ici.",
          "**Comportement sous Windows.** La documentation indique Windows 10 ou plus récent, mais aucun test spécifique à Windows n’a été vérifié.",
          "**Seuil matériel.** Aucun minimum de RAM ou de GPU n’est publié pour le framework."
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
            "Appli": "[LlamaIndex](/fr/power-local-llm/llamaindex-rag-framework-review)",
            "Plateformes": "Mac, Windows, Linux",
            "Prix / licence": "Gratuit / MIT",
            "Différence clé": "Boîte à outils RAG plus large pour l’interrogation et les agents ; CocoIndex se concentre sur la fraîcheur de l’index"
          },
          {
            "Appli": "[Haystack](/fr/power-local-llm/haystack-deepset-rag-framework-review)",
            "Plateformes": "Mac, Windows, Linux",
            "Prix / licence": "Gratuit / Apache 2.0",
            "Différence clé": "Pipelines de composants explicites pour la recherche et le RAG, centrés sur les flux au moment de la requête"
          },
          {
            "Appli": "[txtai](/fr/power-local-llm/txtai-embedded-vector-database-review)",
            "Plateformes": "Mac, Windows, Linux",
            "Prix / licence": "Gratuit / Apache 2.0",
            "Différence clé": "Base d’embeddings et flux de travail LLM dans une seule bibliothèque, avec son propre stockage"
          },
          {
            "Appli": "[Cognee](/fr/power-local-llm/cognee-review)",
            "Plateformes": "Auto-hébergé",
            "Prix / licence": "Gratuit / Apache-2.0",
            "Différence clé": "Construit des graphes de connaissances et une mémoire pour agents plutôt que de synchroniser des cibles arbitraires"
          }
        ],
        "note": "Ces outils se recoupent en partie et peuvent se combiner, par exemple en alimentant un index que LlamaIndex ou Haystack interroge ensuite. Vérifiez le prix, la licence et les plateformes actuels de chaque outil sur sa propre fiche avant de choisir."
      },
      "faq": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "CocoIndex a-t-il besoin d’un serveur de base de données ?",
            "a": "Pas pour son propre état, qui est un fichier embarqué. Votre stockage cible, comme PostgreSQL avec pgvector ou Qdrant, est un choix distinct, et SQLite et LanceDB sont listés comme options basées sur des fichiers."
          },
          {
            "q": "CocoIndex est-il identique à CocoIndex Code ?",
            "a": "Non. CocoIndex est le framework généraliste présenté dans ce test ; CocoIndex Code est un produit distinct pour la recherche sémantique dans les bases de code et expose un serveur MCP pour les agents de programmation."
          },
          {
            "q": "En quoi CocoIndex diffère-t-il des versions 0 ?",
            "a": "Le fichier de compétences de l’éditeur indique que la version 1 est une refonte complète et que les agents entraînés sur l’ancienne API ont tendance à écrire dans le style obsolète de la version 0 ; utilisez donc la documentation actuelle."
          },
          {
            "q": "Puis-je désactiver la télémétrie ?",
            "a": "Oui. Définissez la variable d’environnement COCOINDEX_DISABLE_USAGE_TRACKING à n’importe quelle valeur non vide autre que 0 avant de lancer votre programme, comme décrit sur la page de télémétrie."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "CocoIndex est un moyen activement développé de garder les index RAG et le contexte des agents à jour sans tout ré-encoder, et sa documentation présente Ollama et sentence-transformers comme des voies locales. En revanche, c’est un framework de pipelines orienté code et non une appli de LLM local, la documentation montre les fournisseurs cloud aussi volontiers que les locaux, l’édition Plus sous licence n’a pas de prix publié et PromptQuorum n’a rien testé de tout cela. Il convient aux développeurs Python qui maintiennent des corpus de documents changeants et acceptent d’écrire du code de pipeline ; pour discuter avec vos fichiers sans programmer, une appli comme [AnythingLLM](/fr/power-local-llm/anythingllm-review) est un meilleur point de départ."
      },
      "sources": {
        "id": "sources",
        "title": "Sources",
        "items": [
          "[Site web de CocoIndex](https://cocoindex.io) — présentation du produit et comparaison des éditions, consulté le 8 novembre 2026.",
          "[Documentation de CocoIndex](https://cocoindex.io/docs) — présentation, installation, démarrage rapide, chemin de la base, pages sur les embeddings et les connecteurs, consultée le 8 novembre 2026.",
          "[Page de télémétrie de CocoIndex](https://cocoindex.io/docs/about/telemetry/) — quels événements anonymes sont envoyés et comment les désactiver, consultée le 8 novembre 2026.",
          "[CocoIndex sur GitHub](https://github.com/cocoindex-io/cocoindex) — licence, README et version 1.1.1, consultés le 8 novembre 2026.",
          "[cocoindex sur PyPI](https://pypi.org/project/cocoindex/) — version 1.1.1 du paquet et version de Python requise, consultés le 8 novembre 2026.",
          "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/) — conditions de confidentialité de la société, mises à jour pour la dernière fois le 6 novembre 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "À lire aussi",
        "items": [
          "[Test de LlamaIndex](/fr/power-local-llm/llamaindex-rag-framework-review) — un framework RAG orienté code pour interroger vos documents.",
          "[Test de txtai](/fr/power-local-llm/txtai-embedded-vector-database-review) — une base vectorielle embarquée avec des flux de travail LLM.",
          "[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Test de CocoIndex : framework de données incrémental pour RAG et agents IA",
      "description": "Test de CocoIndex : un framework Python open source qui garde les index RAG et le contexte des agents à jour en ne retraitant que les données modifiées, avec des options Ollama et sentence-transformers. Configuration requise, confidentialité et ce que les sources laissent non confirmé.",
      "url": "https://www.promptquorum.com/fr/power-local-llm/cocoindex-review",
      "inLanguage": "fr",
      "datePublished": "2026-11-08",
      "dateModified": "2026-11-08",
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "educationalLevel": "Advanced",
      "proficiencyLevel": "Advanced",
      "audience": {
        "@type": "Audience",
        "audienceType": "Développeurs Python qui évaluent un framework de pipelines de données incrémental pour RAG et agents IA avec des options de modèles locaux"
      },
      "about": [
        { "@type": "Thing", "name": "CocoIndex" },
        { "@type": "Thing", "name": "Génération augmentée par récupération" },
        { "@type": "Thing", "name": "Indexation incrémentale" },
        { "@type": "Thing", "name": "Ollama" }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/fr/power-local-llm/cocoindex-review"
      }
    },
    "breadcrumbSchema": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.promptquorum.com" },
        { "@type": "ListItem", "position": 2, "name": "Power Local LLM", "item": "https://www.promptquorum.com/fr/power-local-llm" },
        { "@type": "ListItem", "position": 3, "name": "Test de CocoIndex", "item": "https://www.promptquorum.com/fr/power-local-llm/cocoindex-review" }
      ]
    }
  },
  es: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-08",
    "dateModified": "2026-11-08",
    "next_refresh_due": "2027-05-08",
    "theme": "RAG & Document Chat",
    "heroImage": "/images/cocoindex-review-hero-es.webp",
    "title": "Reseña de CocoIndex: framework de datos incremental para RAG y agentes de IA",
    "seoTitle": "Reseña de CocoIndex: framework de datos RAG incremental",
    "intro": "CocoIndex es un framework de código abierto en Python, con un motor en Rust por debajo, que mantiene sincronizados índices vectoriales, tablas y grafos de conocimiento con datos de origen que cambian, reprocesando solo lo que ha cambiado. No es una app de chat ni un runtime de modelos: es la capa de pipelines que alimenta un sistema RAG o un agente de IA. Su enfoque local es que los embeddings y la extracción pueden ejecutarse con Ollama o sentence-transformers en tu propio equipo. Esta reseña se basa en [cocoindex.io](https://cocoindex.io), la [documentación](https://cocoindex.io/docs) y el [repositorio de GitHub](https://github.com/cocoindex-io/cocoindex), consultados el 8 de noviembre de 2026; PromptQuorum no ha probado CocoIndex en la práctica.",
    "metaDescription": "Reseña de CocoIndex: framework Apache 2.0 en Python que recalcula solo los datos cambiados para RAG y agentes, con Ollama y embeddings locales. Sin probar.",
    "twitterDescription": "Reseña de CocoIndex: un framework de pipelines de datos incremental para RAG y agentes de IA. Qué se ejecuta en local con Ollama, qué requiere código y qué dejan abierto las fuentes.",
    "audience": "Desarrolladores de Python que mantienen pipelines RAG o de agentes sobre archivos que cambian y quieren saber qué hace CocoIndex, qué necesita y cuánto puede quedarse en su propio equipo.",
    "readTime": "6 min de lectura",
    "educationalLevel": "Advanced",
    "affiliateDisclosure": false,
    "primaryTerm": "reseña de CocoIndex",
    "targetKeywords": [
      "reseña cocoindex",
      "cocoindex ollama",
      "cocoindex indexación incremental",
      "cocoindex vs llamaindex",
      "cocoindex rag",
      "cocoindex embeddings locales",
      "instalar cocoindex"
    ],
    "current_models_mentioned": [
      "nomic-embed-text",
      "bge-m3",
      "Llama 3.2"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**CocoIndex (versión 1.1.1, publicada el 5 de noviembre de 2026) es un framework gratuito de código abierto (Apache 2.0) en Python que mantiene al día los índices vectoriales y otros almacenes de datos de IA reprocesando solo las entradas que han cambiado.** Construye el pipeline de datos detrás de RAG y de los agentes; no conversa y no incluye ningún modelo.",
    "quickAnswerTop": {
      "es": {
        "question": "¿Puede CocoIndex ejecutarse totalmente en local con Ollama?",
        "answer": "Sí, si lo configuras así. Según la documentación, los embeddings pueden venir de modelos de Ollama como nomic-embed-text o de sentence-transformers, la extracción puede usar un Llama 3.2 local mediante Ollama, y su propio estado es un archivo embebido, así que no hace falta ningún servidor.",
        "bullets": [
          "Se instala con pip install -U cocoindex; la documentación indica Python 3.11 a 3.13.",
          "Un pipeline es un pequeño archivo de Python; no hay constructor visual.",
          "Entre los destinos están SQLite, LanceDB, PostgreSQL con pgvector y Qdrant.",
          "Las claves en la nube y los conectores alojados se documentan con la misma prominencia, así que el uso local es una elección, no el valor por defecto."
        ],
        "updatedDate": "2026-11-08"
      }
    },
    "toc": [
      { "label": "Respuesta rápida", "anchor": "quick-answer" },
      { "label": "¿Qué es CocoIndex?", "anchor": "what-is-cocoindex" },
      { "label": "Cómo conseguirlo", "anchor": "get-it" },
      { "label": "Requisitos", "anchor": "requirements" },
      { "label": "Cómo empezar", "anchor": "getting-started" },
      { "label": "Funciones confirmadas por las fuentes", "anchor": "key-features" },
      { "label": "Flujo de datos y privacidad", "anchor": "privacy" },
      { "label": "Para quién es", "anchor": "who-should-use" },
      { "label": "Lo que no pudimos verificar", "anchor": "who-should-not-use" },
      { "label": "Competidores y alternativas", "anchor": "vs-alternatives" },
      { "label": "Preguntas frecuentes", "anchor": "faq" },
      { "label": "Veredicto", "anchor": "verdict" },
      { "label": "Fuentes", "anchor": "sources" },
      { "label": "Lecturas relacionadas", "anchor": "related-reading" }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "Puntos clave",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "CocoIndex es un framework de código abierto en Python que mantiene al día los índices RAG y el contexto de los agentes recalculando solo los datos y las rutas de código que han cambiado."
          },
          {
            "type": "plain-terms",
            "text": "Escribes en Python una descripción breve de lo que debe contener tu índice; CocoIndex recuerda los resultados anteriores y, cuando cambia un archivo o tu código, actualiza solo las filas afectadas."
          }
        ],
        "items": [
          "Mantenimiento: el último commit de la rama principal es del 8 de noviembre de 2026 y la última versión, la 1.1.1, del 5 de noviembre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.",
          "Alcance: un framework de pipelines para desarrolladores, no una app; no incluye ventana de chat ni modelo.",
          "Uso local: Ollama, sentence-transformers y destinos locales están documentados, pero las mismas páginas muestran proveedores en la nube, así que la privacidad depende de tu configuración.",
          "Coste: el núcleo es gratuito; existe una edición con licencia aparte llamada CocoIndex Plus para equipos, sin precio publicado.",
          "Telemetría: las compilaciones de versión envían eventos de uso anónimos salvo que te excluyas con una variable de entorno."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta reseña se basa en el sitio web de CocoIndex, la documentación, el repositorio de GitHub y PyPI, consultados el 8 de noviembre de 2026. PromptQuorum no ha instalado ni ejecutado CocoIndex, así que no se evalúan la velocidad, el uso de memoria ni la calidad de los resultados."
          }
        ]
      },
      "overview": {
        "id": "what-is-cocoindex",
        "title": "¿Qué es CocoIndex?",
        "content": [
          "**CocoIndex es un framework para pipelines de datos que convierten fuentes cambiantes en datos listos para la IA y los mantienen actualizados.** Declaras cómo debe ser el destino en función del origen, al estilo de una fórmula de hoja de cálculo o de un componente de React, y el motor decide qué partes recalcular. Entre las fuentes que nombra la documentación están carpetas locales, Amazon S3, Google Drive, Kafka y bases de datos; los destinos incluyen bases de datos vectoriales, relacionales y de grafos. El fabricante es CocoIndex Inc, la empresa que figura en su sitio web.",
          "**El motor está escrito en Rust y los pipelines se escriben en Python.** Recuerda los resultados anteriores en tres niveles, por elemento de origen, por llamada de función y por fila de destino, de modo que un documento editado se vuelve a analizar y a convertir en embeddings mientras que los que no cambian se omiten. También vuelve a ejecutar el trabajo cuando cambia el código de una función. Un producto aparte, CocoIndex Code, aplica la misma idea a bases de código para agentes de programación y no se trata aquí."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Cómo conseguirlo",
        "content": [
          "**CocoIndex es un paquete de Python: se instala con un solo comando y después escribes un archivo de pipeline.** No es una app de escritorio descargable, así que no hay instalador."
        ],
        "columns": [
          "Opción",
          "Cómo conseguirlo"
        ],
        "rows": [
          {
            "Opción": "pip",
            "Cómo conseguirlo": "`pip install -U cocoindex` desde [PyPI](https://pypi.org/project/cocoindex/)"
          },
          {
            "Opción": "uv o Poetry",
            "Cómo conseguirlo": "`uv add cocoindex` o `poetry add cocoindex`, según la [guía de instalación](https://cocoindex.io/docs/getting_started/installation/)"
          },
          {
            "Opción": "Inicio rápido",
            "Cómo conseguirlo": "Un pipeline de PDF a Markdown que además necesita `pip install docling`: [inicio rápido](https://cocoindex.io/docs/getting_started/quickstart/)"
          },
          {
            "Opción": "Sitio web",
            "Cómo conseguirlo": "[cocoindex.io](https://cocoindex.io)"
          },
          {
            "Opción": "Documentación",
            "Cómo conseguirlo": "[cocoindex.io/docs](https://cocoindex.io/docs)"
          },
          {
            "Opción": "Política de privacidad",
            "Cómo conseguirlo": "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/), actualizada por última vez el 6 de noviembre de 2026 según la página"
          },
          {
            "Opción": "Código fuente",
            "Cómo conseguirlo": "[github.com/cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex), Apache 2.0"
          }
        ],
        "note": "Versión revisada: 1.1.1, publicada el 5 de noviembre de 2026. Hacen falta un terminal y un entorno de Python; no hay instalador gráfico. La edición CocoIndex Plus, orientada a equipos, se instala por separado con una clave de licencia."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**La documentación pide Python 3.11 a 3.13 y nombra tres sistemas operativos.** No publica ningún mínimo de RAM ni de GPU para el propio framework."
        ],
        "columns": [
          "Elemento",
          "Qué dicen las fuentes"
        ],
        "rows": [
          {
            "Elemento": "Python",
            "Qué dicen las fuentes": "3.11 a 3.13 en la guía de instalación; los metadatos de PyPI exigen 3.11 o superior"
          },
          {
            "Elemento": "macOS",
            "Qué dicen las fuentes": "10.12 o superior en Intel, 11.0 o superior en Apple Silicon"
          },
          {
            "Elemento": "Linux",
            "Qué dicen las fuentes": "x86_64 o arm64 con glibc 2.28 o superior, por ejemplo Debian 10 o Ubuntu 18.10"
          },
          {
            "Elemento": "Windows",
            "Qué dicen las fuentes": "Windows 10 o superior en x86_64"
          },
          {
            "Elemento": "Base de datos",
            "Qué dicen las fuentes": "Ninguna para CocoIndex en sí: su estado vive en un archivo LMDB embebido cuya ruta defines con COCOINDEX_DB; el destino que elijas, como Postgres, es aparte"
          },
          {
            "Elemento": "Modelos",
            "Qué dicen las fuentes": "Los que configures; para la ruta con Ollama debe estar en ejecución en local y cada modelo descargado antes"
          }
        ],
        "note": "Por tanto, las necesidades de hardware dependen de los modelos de embeddings y de lenguaje que elijas, no de CocoIndex."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Cómo empezar",
        "content": [
          "**Los pasos siguen las páginas de inicio rápido y de embeddings de la documentación; PromptQuorum no los ha ejecutado.**"
        ],
        "numberedItems": [
          {
            "title": "Instala el paquete",
            "whyItMatters": "Ejecuta pip install -U cocoindex en un entorno de Python 3.11 a 3.13, junto con el parser que necesites, como docling para PDF."
          },
          {
            "title": "Define la ruta de la base de datos de estado",
            "whyItMatters": "Crea un archivo .env con COCOINDEX_DB=./cocoindex.db para que CocoIndex tenga un archivo local donde guardar la memoria de las ejecuciones anteriores."
          },
          {
            "title": "Declara el pipeline",
            "whyItMatters": "Escribe una app en Python que lea una carpeta de origen, procese cada archivo con funciones normales y declare las filas o los archivos que debe contener el destino."
          },
          {
            "title": "Elige modelos locales",
            "whyItMatters": "Para embeddings en tu equipo, inicia Ollama, ejecuta ollama pull nomic-embed-text y apunta el embedder de LiteLLM hacia él, o usa en su lugar el embedder de sentence-transformers."
          },
          {
            "title": "Ejecuta y vuelve a ejecutar",
            "whyItMatters": "Ejecuta cocoindex update main.py, cambia un archivo de origen y vuelve a ejecutarlo; según la documentación, solo se reprocesan los archivos afectados."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Funciones confirmadas por las fuentes",
        "content": [
          "**Todo lo que sigue procede del sitio web, la documentación o el repositorio; nada se ha probado aquí.**"
        ],
        "items": [
          "**Procesamiento incremental.** Detección de cambios a nivel de componente, de función y de destino, con memoización y seguimiento de los cambios de código.",
          "**Conectores.** Entre las fuentes y los destinos que lista la documentación están archivos locales, Amazon S3, Azure Blob, Google Drive, Kafka, PostgreSQL, SQLite, LanceDB, Qdrant, Neo4j, Snowflake y BigQuery.",
          "**Opciones de modelos locales.** Embeddings con Ollama (nomic-embed-text, mxbai-embed-large, bge-m3 y otros) o con sentence-transformers, y extracción estructurada con un Llama 3.2 local mediante Ollama.",
          "**Trazabilidad y recuperación.** Permite inspeccionar cómo se produjo una salida; los fallos transitorios se reintentan y las ejecuciones se reanudan tras una interrupción.",
          "**Modo en vivo.** Los pipelines pueden vigilar las fuentes y actualizarse de forma continua en lugar de por lotes."
        ],
        "note": "Las cifras de rendimiento de las páginas del fabricante, como el ahorro de tokens o las tasas de acierto de caché de CocoIndex Code, son afirmaciones del propio fabricante y no se repiten aquí."
      },
      "privacy": {
        "id": "privacy",
        "title": "Flujo de datos y privacidad",
        "content": [
          "**Con Ollama o sentence-transformers y un destino local como SQLite o LanceDB, la ruta de datos documentada se queda en tu equipo.** Si eliges en cambio OpenAI, Gemini o una base de datos alojada, tu texto va a ese proveedor según sus propios términos; CocoIndex no lo impide.",
          "La página de telemetría dice que las compilaciones de versión envían eventos anónimos (nombre del evento, sistema operativo y arquitectura de CPU, versión de Python y una etiqueta de aplicación solo si la defines) a través de la pasarela de Scarf. Enumera lo que no se envía, incluidos tus datos, tu código, las rutas de archivos y las credenciales, y dice que definir COCOINDEX_DISABLE_USAGE_TRACKING con un valor distinto de 0 la desactiva."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Son declaraciones del fabricante, no resultados de una auditoría. PromptQuorum no ha inspeccionado el tráfico de red ni el código."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quién es",
        "items": [
          "**Desarrolladores de Python** que reindexan documentos, código o registros cambiantes en un almacén vectorial y quieren omitir los elementos sin cambios.",
          "**Equipos que ya usan Ollama** y quieren embeddings locales dentro de un pipeline mantenido en lugar de un script puntual.",
          "**Quienes construyen agentes** y necesitan un índice que siga las fuentes de forma continua y pueda escribir en varios tipos de almacén."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "Lo que no pudimos verificar",
        "items": [
          "**Rendimiento.** La velocidad, el uso de memoria y el ahorro de las actualizaciones incrementales son descripciones del fabricante y no se midieron.",
          "**Calidad.** No se ha probado si los modelos locales de embeddings y de extracción dan buenos resultados con tus datos.",
          "**Precio de Plus.** CocoIndex Plus tiene licencia, el sitio web ofrece una llamada con cita y no publica ningún precio, así que aquí no se indica ninguno.",
          "**Comportamiento en Windows.** La documentación lista Windows 10 o superior, pero no se comprobaron pruebas específicas en Windows.",
          "**Mínimo de hardware.** No se publica ningún mínimo de RAM ni de GPU para el framework."
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
            "App": "[LlamaIndex](/es/power-local-llm/llamaindex-rag-framework-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Precio / licencia": "Gratis / MIT",
            "Diferencia clave": "Toolkit RAG más amplio para consultas y agentes; CocoIndex se centra en mantener el índice al día"
          },
          {
            "App": "[Haystack](/es/power-local-llm/haystack-deepset-rag-framework-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Precio / licencia": "Gratis / Apache 2.0",
            "Diferencia clave": "Pipelines de componentes explícitos para búsqueda y RAG, basados en flujos en tiempo de consulta"
          },
          {
            "App": "[txtai](/es/power-local-llm/txtai-embedded-vector-database-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Precio / licencia": "Gratis / Apache 2.0",
            "Diferencia clave": "Base de datos de embeddings y flujos con LLM en una sola biblioteca, con almacenamiento propio"
          },
          {
            "App": "[Cognee](/es/power-local-llm/cognee-review)",
            "Plataformas": "Autoalojado",
            "Precio / licencia": "Gratis / Apache-2.0",
            "Diferencia clave": "Construye grafos de conocimiento y memoria para agentes en lugar de sincronizar destinos arbitrarios"
          }
        ],
        "note": "Estas herramientas se solapan en parte y pueden combinarse, por ejemplo alimentando un índice que luego consultan LlamaIndex o Haystack. Comprueba el precio, la licencia y las plataformas actuales de cada herramienta en su propia ficha antes de elegir."
      },
      "faq": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿CocoIndex necesita un servidor de base de datos?",
            "a": "No para su propio estado, que es un archivo embebido. El almacén de destino, como PostgreSQL con pgvector o Qdrant, es una elección aparte, y SQLite y LanceDB figuran como opciones basadas en archivos."
          },
          {
            "q": "¿CocoIndex es lo mismo que CocoIndex Code?",
            "a": "No. CocoIndex es el framework general que se reseña aquí; CocoIndex Code es un producto aparte para la búsqueda semántica en bases de código y expone un servidor MCP para agentes de programación."
          },
          {
            "q": "¿En qué se diferencia CocoIndex de las versiones 0?",
            "a": "El archivo de skill del fabricante dice que la versión 1 es un rediseño desde cero y que los agentes entrenados con la API anterior tienden a escribir el estilo obsoleto de la versión 0, así que usa la documentación actual."
          },
          {
            "q": "¿Puedo desactivar la telemetría?",
            "a": "Sí. Define la variable de entorno COCOINDEX_DISABLE_USAGE_TRACKING con cualquier valor no vacío distinto de 0 antes de iniciar tu programa, como se describe en la página de telemetría."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "CocoIndex es una forma activamente desarrollada de mantener al día los índices RAG y el contexto de los agentes sin volver a generar todos los embeddings, y su documentación muestra Ollama y sentence-transformers como rutas locales. En contra: es un framework de pipelines basado en código y no una app de LLM local, la documentación muestra los proveedores en la nube con la misma naturalidad que los locales, la edición Plus con licencia no tiene precio publicado y PromptQuorum no ha probado nada de ello. Encaja con desarrolladores de Python que mantienen conjuntos de documentos cambiantes y aceptan escribir código de pipeline; para conversar con tus archivos sin programar, una app como [AnythingLLM](/es/power-local-llm/anythingllm-review) es mejor punto de partida."
      },
      "sources": {
        "id": "sources",
        "title": "Fuentes",
        "items": [
          "[Sitio web de CocoIndex](https://cocoindex.io) — resumen del producto y comparación de ediciones, consultado el 8 de noviembre de 2026.",
          "[Documentación de CocoIndex](https://cocoindex.io/docs) — páginas de resumen, instalación, inicio rápido, ruta de la base de datos, embeddings y conectores, consultada el 8 de noviembre de 2026.",
          "[Página de telemetría de CocoIndex](https://cocoindex.io/docs/about/telemetry/) — qué eventos anónimos se envían y cómo excluirse, consultada el 8 de noviembre de 2026.",
          "[CocoIndex en GitHub](https://github.com/cocoindex-io/cocoindex) — licencia, README y versión 1.1.1, consultados el 8 de noviembre de 2026.",
          "[cocoindex en PyPI](https://pypi.org/project/cocoindex/) — versión 1.1.1 del paquete y requisito de Python, consultados el 8 de noviembre de 2026.",
          "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/) — condiciones de privacidad de la empresa, actualizada por última vez el 6 de noviembre de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Reseña de LlamaIndex](/es/power-local-llm/llamaindex-rag-framework-review) — un framework RAG basado en código para consultar tus documentos.",
          "[Reseña de txtai](/es/power-local-llm/txtai-embedded-vector-database-review) — una base de datos vectorial embebida con flujos de trabajo con LLM.",
          "[Directorio de software de LLM local](/es/directory) — el catálogo completo de herramientas de IA locales."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Reseña de CocoIndex: framework de datos incremental para RAG y agentes de IA",
      "description": "Reseña de CocoIndex: un framework de código abierto en Python que mantiene al día los índices RAG y el contexto de los agentes reprocesando solo los datos cambiados, con opciones de Ollama y sentence-transformers. Requisitos, privacidad y lo que las fuentes dejan sin confirmar.",
      "url": "https://www.promptquorum.com/es/power-local-llm/cocoindex-review",
      "inLanguage": "es",
      "datePublished": "2026-11-08",
      "dateModified": "2026-11-08",
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "educationalLevel": "Advanced",
      "proficiencyLevel": "Advanced",
      "audience": {
        "@type": "Audience",
        "audienceType": "Desarrolladores de Python que evalúan un framework de pipelines de datos incremental para RAG y agentes de IA con opciones de modelos locales"
      },
      "about": [
        { "@type": "Thing", "name": "CocoIndex" },
        { "@type": "Thing", "name": "Generación aumentada por recuperación (RAG)" },
        { "@type": "Thing", "name": "Indexación incremental" },
        { "@type": "Thing", "name": "Ollama" }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/es/power-local-llm/cocoindex-review"
      }
    },
    "breadcrumbSchema": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.promptquorum.com" },
        { "@type": "ListItem", "position": 2, "name": "Power Local LLM", "item": "https://www.promptquorum.com/es/power-local-llm" },
        { "@type": "ListItem", "position": 3, "name": "Reseña de CocoIndex", "item": "https://www.promptquorum.com/es/power-local-llm/cocoindex-review" }
      ]
    }
  },
  pt: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-08",
    "dateModified": "2026-11-08",
    "next_refresh_due": "2027-05-08",
    "theme": "RAG & Document Chat",
    "heroImage": "/images/cocoindex-review-hero-pt.webp",
    "title": "Análise do CocoIndex: framework de dados incremental para RAG e agentes de IA",
    "seoTitle": "Análise do CocoIndex: framework de dados para RAG",
    "intro": "O CocoIndex é um framework Python de código aberto, com um motor em Rust por baixo, que mantém índices vetoriais, tabelas e grafos de conhecimento sincronizados com dados de origem em mudança, reprocessando apenas o que mudou. Não é um app de chat nem um runtime de modelos: é a camada de pipeline que alimenta um sistema RAG ou um agente de IA. Seu ponto de contato com modelos locais é que embeddings e extração podem rodar no seu próprio computador, com o Ollama ou o sentence-transformers. Esta análise se baseia em [cocoindex.io](https://cocoindex.io), na [documentação](https://cocoindex.io/docs) e no [repositório do GitHub](https://github.com/cocoindex-io/cocoindex), consultados em 8 de novembro de 2026; a PromptQuorum não testou o CocoIndex na prática.",
    "metaDescription": "Análise do CocoIndex: framework Python livre (Apache 2.0) que reprocessa só o alterado em RAG e agentes, com Ollama e embeddings locais. Não testado.",
    "twitterDescription": "Análise do CocoIndex: um framework de pipeline de dados incremental para RAG e agentes de IA. O que roda localmente com o Ollama, o que exige código e o que as fontes deixam em aberto.",
    "audience": "Desenvolvedores Python que mantêm pipelines de RAG ou de agentes sobre arquivos em constante mudança e querem saber o que o CocoIndex faz, o que ele exige e quanto dele pode ficar no seu próprio computador.",
    "readTime": "6 min de leitura",
    "educationalLevel": "Advanced",
    "affiliateDisclosure": false,
    "primaryTerm": "análise do CocoIndex",
    "targetKeywords": [
      "análise cocoindex",
      "cocoindex ollama",
      "cocoindex indexação incremental",
      "cocoindex vs llamaindex",
      "cocoindex rag",
      "cocoindex embeddings locais",
      "instalar cocoindex"
    ],
    "current_models_mentioned": [
      "nomic-embed-text",
      "bge-m3",
      "Llama 3.2"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**O CocoIndex (versão 1.1.1, lançada em 5 de novembro de 2026) é um framework Python gratuito e de código aberto (Apache 2.0) que mantém índices vetoriais e outros repositórios de dados de IA atualizados, reprocessando apenas as entradas alteradas.** Ele constrói o pipeline de dados por trás de RAG e agentes; não conversa e não inclui nenhum modelo.",
    "quickAnswerTop": {
      "pt": {
        "question": "O CocoIndex roda totalmente local com o Ollama?",
        "answer": "Sim, se você o configurar assim. Segundo a documentação, os embeddings podem vir de modelos do Ollama, como o nomic-embed-text, ou do sentence-transformers, a extração pode usar um Llama 3.2 local pelo Ollama, e o estado do próprio CocoIndex é um arquivo embutido, então nenhum servidor é necessário.",
        "bullets": [
          "Instale com pip install -U cocoindex; a documentação indica Python 3.11 a 3.13.",
          "Um pipeline é um pequeno arquivo Python; não há construtor visual.",
          "Os destinos incluem SQLite, LanceDB, PostgreSQL com pgvector e Qdrant.",
          "Chaves de nuvem e conectores hospedados aparecem na documentação com o mesmo destaque, então o uso local é uma escolha, não o padrão."
        ],
        "updatedDate": "2026-11-08"
      }
    },
    "toc": [
      { "label": "Resposta rápida", "anchor": "quick-answer" },
      { "label": "O que é o CocoIndex?", "anchor": "what-is-cocoindex" },
      { "label": "Onde obter", "anchor": "get-it" },
      { "label": "Requisitos", "anchor": "requirements" },
      { "label": "Como começar", "anchor": "getting-started" },
      { "label": "Recursos confirmados pelas fontes", "anchor": "key-features" },
      { "label": "Fluxo de dados e privacidade", "anchor": "privacy" },
      { "label": "Para quem é", "anchor": "who-should-use" },
      { "label": "O que não conseguimos verificar", "anchor": "who-should-not-use" },
      { "label": "Concorrentes e alternativas", "anchor": "vs-alternatives" },
      { "label": "Perguntas frequentes", "anchor": "faq" },
      { "label": "Veredito", "anchor": "verdict" },
      { "label": "Fontes", "anchor": "sources" },
      { "label": "Leitura relacionada", "anchor": "related-reading" }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "Pontos principais",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "O CocoIndex é um framework Python de código aberto que mantém índices RAG e o contexto de agentes atualizados, recalculando apenas os dados e os caminhos de código que mudaram."
          },
          {
            "type": "plain-terms",
            "text": "Você escreve uma descrição curta em Python do que o seu índice deve conter; o CocoIndex lembra dos resultados anteriores e, quando um arquivo ou o seu código muda, atualiza só as linhas afetadas."
          }
        ],
        "items": [
          "Manutenção: o commit mais recente do ramo principal é de 8 de novembro de 2026 e a última versão, 1.1.1, é de 5 de novembro de 2026, então não se aplica aviso de projeto abandonado.",
          "Escopo: um framework de pipeline para desenvolvedores, não um app; não tem janela de chat nem modelo.",
          "Uso local: Ollama, sentence-transformers e destinos locais estão documentados, mas as mesmas páginas mostram provedores de nuvem, então a privacidade depende da sua configuração.",
          "Custo: o núcleo é gratuito; existe uma edição licenciada separada para equipes, o CocoIndex Plus, sem preço divulgado.",
          "Telemetria: as versões de lançamento enviam eventos de uso anônimos, a menos que você desative por meio de uma variável de ambiente."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "Esta análise se baseia no site do CocoIndex, na documentação, no repositório do GitHub e no PyPI, consultados em 8 de novembro de 2026. A PromptQuorum não instalou nem executou o CocoIndex, então velocidade, uso de memória e qualidade dos resultados não foram avaliados."
          }
        ]
      },
      "overview": {
        "id": "what-is-cocoindex",
        "title": "O que é o CocoIndex?",
        "content": [
          "**O CocoIndex é um framework para pipelines de dados que transformam fontes em mudança em dados prontos para IA e os mantêm atualizados.** Você declara como o destino deve ficar em função da origem, no mesmo estilo de uma fórmula de planilha ou de um componente React, e o motor descobre quais partes precisam ser recalculadas. As origens citadas na documentação incluem pastas locais, Amazon S3, Google Drive, Kafka e bancos de dados; os destinos incluem bancos vetoriais, relacionais e de grafos. O fabricante é a CocoIndex Inc, a empresa citada no site.",
          "**O motor é escrito em Rust e os pipelines são escritos em Python.** Ele guarda resultados anteriores em três níveis, por item de origem, por chamada de função e por linha de destino, de modo que um documento editado é analisado e vetorizado de novo enquanto os inalterados são ignorados. Ele também refaz o trabalho quando o código de uma função muda. Um produto separado, o CocoIndex Code, aplica a mesma ideia a bases de código para agentes de programação e não é tratado aqui."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "Onde obter",
        "content": [
          "**O CocoIndex é um pacote Python: instale-o com um comando e depois escreva um arquivo de pipeline.** Não é um app de desktop para baixar, então não há instalador."
        ],
        "columns": [
          "Opção",
          "Como obter"
        ],
        "rows": [
          {
            "Opção": "pip",
            "Como obter": "`pip install -U cocoindex` a partir do [PyPI](https://pypi.org/project/cocoindex/)"
          },
          {
            "Opção": "uv ou Poetry",
            "Como obter": "`uv add cocoindex` ou `poetry add cocoindex`, conforme o [guia de instalação](https://cocoindex.io/docs/getting_started/installation/)"
          },
          {
            "Opção": "Início rápido",
            "Como obter": "Um pipeline de PDF para Markdown que também exige `pip install docling`: [início rápido](https://cocoindex.io/docs/getting_started/quickstart/)"
          },
          {
            "Opção": "Site",
            "Como obter": "[cocoindex.io](https://cocoindex.io)"
          },
          {
            "Opção": "Documentação",
            "Como obter": "[cocoindex.io/docs](https://cocoindex.io/docs)"
          },
          {
            "Opção": "Política de privacidade",
            "Como obter": "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/), atualizada pela última vez em 6 de novembro de 2026, segundo a página"
          },
          {
            "Opção": "Código-fonte",
            "Como obter": "[github.com/cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex), Apache 2.0"
          }
        ],
        "note": "Versão analisada: 1.1.1, lançada em 5 de novembro de 2026. São necessários um terminal e um ambiente Python; não há instalador gráfico. A edição CocoIndex Plus, voltada a equipes, é instalada separadamente com uma chave de licença."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "Requisitos",
        "content": [
          "**A documentação pede Python 3.11 a 3.13 e cita três sistemas operacionais.** Ela não publica um mínimo de RAM ou de GPU para o próprio framework."
        ],
        "columns": [
          "Item",
          "O que as fontes dizem"
        ],
        "rows": [
          {
            "Item": "Python",
            "O que as fontes dizem": "3.11 a 3.13 no guia de instalação; os metadados do PyPI exigem 3.11 ou mais recente"
          },
          {
            "Item": "macOS",
            "O que as fontes dizem": "10.12 ou mais recente em Intel, 11.0 ou mais recente em Apple Silicon"
          },
          {
            "Item": "Linux",
            "O que as fontes dizem": "x86_64 ou arm64 com glibc 2.28 ou mais recente, por exemplo Debian 10 ou Ubuntu 18.10"
          },
          {
            "Item": "Windows",
            "O que as fontes dizem": "Windows 10 ou mais recente em x86_64"
          },
          {
            "Item": "Banco de dados",
            "O que as fontes dizem": "Nenhum para o próprio CocoIndex: o estado fica em um arquivo LMDB embutido cujo caminho você define com COCOINDEX_DB; o destino escolhido, como o Postgres, é separado"
          },
          {
            "Item": "Modelos",
            "O que as fontes dizem": "O que você configurar; no caminho do Ollama, ele precisa estar rodando localmente e cada modelo deve ser baixado antes"
          }
        ],
        "note": "As necessidades de hardware dependem, portanto, dos modelos de embedding e de linguagem que você escolher, não do CocoIndex."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "Como começar",
        "content": [
          "**Os passos seguem o início rápido e as páginas de embedding da documentação; a PromptQuorum não os executou.**"
        ],
        "numberedItems": [
          {
            "title": "Instale o pacote",
            "whyItMatters": "Execute pip install -U cocoindex em um ambiente com Python 3.11 a 3.13, além de qualquer parser que você queira, como o docling para PDFs."
          },
          {
            "title": "Defina o caminho do banco de estado",
            "whyItMatters": "Crie um arquivo .env contendo COCOINDEX_DB=./cocoindex.db para que o CocoIndex tenha um arquivo local com a memória das execuções anteriores."
          },
          {
            "title": "Declare o pipeline",
            "whyItMatters": "Escreva um app Python que leia uma pasta de origem, processe cada arquivo com funções comuns e declare as linhas ou os arquivos que o destino deve conter."
          },
          {
            "title": "Escolha modelos locais",
            "whyItMatters": "Para embeddings na própria máquina, inicie o Ollama, execute ollama pull nomic-embed-text e aponte o embedder do LiteLLM para ele, ou use o embedder do sentence-transformers."
          },
          {
            "title": "Execute e execute de novo",
            "whyItMatters": "Execute cocoindex update main.py, altere um arquivo de origem e execute de novo; segundo a documentação, apenas os arquivos afetados são reprocessados."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "Recursos confirmados pelas fontes",
        "content": [
          "**Tudo o que segue vem do site, da documentação ou do repositório; nada foi testado aqui.**"
        ],
        "items": [
          "**Processamento incremental.** Detecção de mudanças em nível de componente, de função e de destino, com memoização e rastreamento de alterações no código.",
          "**Conectores.** As origens e os destinos listados na documentação incluem arquivos locais, Amazon S3, Azure Blob, Google Drive, Kafka, PostgreSQL, SQLite, LanceDB, Qdrant, Neo4j, Snowflake e BigQuery.",
          "**Opções de modelos locais.** Embeddings pelo Ollama (nomic-embed-text, mxbai-embed-large, bge-m3 e outros) ou pelo sentence-transformers, e extração estruturada com um Llama 3.2 local pelo Ollama.",
          "**Linhagem e recuperação.** É possível inspecionar como uma saída foi produzida; falhas transitórias são repetidas e as execuções retomam após uma interrupção.",
          "**Modo ao vivo.** Os pipelines podem observar as origens e atualizar continuamente, em vez de em lotes."
        ],
        "note": "Os números de desempenho nas páginas do fabricante, como a economia de tokens ou as taxas de acerto de cache do CocoIndex Code, são afirmações do próprio fabricante e não são repetidos aqui."
      },
      "privacy": {
        "id": "privacy",
        "title": "Fluxo de dados e privacidade",
        "content": [
          "**Com o Ollama ou o sentence-transformers e um destino local, como SQLite ou LanceDB, o caminho dos dados documentado permanece na sua máquina.** Se você escolher OpenAI, Gemini ou um banco hospedado, o seu texto vai para esse provedor, sob os termos dele; o CocoIndex não impede isso.",
          "A página de telemetria diz que as versões de lançamento enviam eventos anônimos (nome do evento, sistema operacional e arquitetura da CPU, versão do Python e uma etiqueta de aplicação apenas se você definir uma) pelo gateway Scarf. Ela lista o que não é enviado, incluindo seus dados, seu código, caminhos de arquivos e credenciais, e diz que definir COCOINDEX_DISABLE_USAGE_TRACKING com um valor diferente de 0 a desativa."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "São declarações do fabricante, não resultados de auditoria. A PromptQuorum não inspecionou o tráfego de rede nem o código."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "Para quem é",
        "items": [
          "**Desenvolvedores Python** que reindexam documentos, código ou registros em constante mudança em um repositório vetorial e querem pular os itens inalterados.",
          "**Equipes que já usam o Ollama** e querem embeddings locais dentro de um pipeline mantido, em vez de um script avulso.",
          "**Quem constrói agentes** e precisa de um índice que acompanhe as origens continuamente e possa gravar em vários tipos de repositório."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "O que não conseguimos verificar",
        "items": [
          "**Desempenho.** A velocidade, o uso de memória e a economia das atualizações incrementais são descrições do fabricante e não foram medidos.",
          "**Qualidade.** Não foi testado se os modelos locais de embedding e de extração dão bons resultados com os seus dados.",
          "**Preço do Plus.** O CocoIndex Plus é licenciado, o site oferece uma chamada agendada e nenhum preço é divulgado, então nenhum é indicado aqui.",
          "**Comportamento no Windows.** A documentação lista Windows 10 ou mais recente, mas nenhum teste específico no Windows foi verificado.",
          "**Piso de hardware.** Nenhum mínimo de RAM ou de GPU é publicado para o framework."
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
            "App": "[LlamaIndex](/pt/power-local-llm/llamaindex-rag-framework-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Preço / licença": "Grátis / MIT",
            "Diferença principal": "Kit de RAG mais amplo para consultas e agentes; o CocoIndex foca em manter o índice atualizado"
          },
          {
            "App": "[Haystack](/pt/power-local-llm/haystack-deepset-rag-framework-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Preço / licença": "Grátis / Apache 2.0",
            "Diferença principal": "Pipelines explícitos de componentes para busca e RAG, voltados a fluxos no momento da consulta"
          },
          {
            "App": "[txtai](/pt/power-local-llm/txtai-embedded-vector-database-review)",
            "Plataformas": "Mac, Windows, Linux",
            "Preço / licença": "Grátis / Apache 2.0",
            "Diferença principal": "Banco de embeddings e fluxos de LLM em uma só biblioteca, com armazenamento próprio"
          },
          {
            "App": "[Cognee](/pt/power-local-llm/cognee-review)",
            "Plataformas": "Auto-hospedado",
            "Preço / licença": "Grátis / Apache-2.0",
            "Diferença principal": "Constrói grafos de conhecimento e memória para agentes, em vez de sincronizar destinos arbitrários"
          }
        ],
        "note": "Essas ferramentas se sobrepõem em parte e podem ser combinadas, por exemplo alimentando um índice que o LlamaIndex ou o Haystack depois consulta. Confirme o preço, a licença e as plataformas atuais de cada ferramenta na própria página antes de escolher."
      },
      "faq": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "O CocoIndex precisa de um servidor de banco de dados?",
            "a": "Não para o próprio estado, que é um arquivo embutido. O repositório de destino, como PostgreSQL com pgvector ou Qdrant, é uma escolha separada, e SQLite e LanceDB aparecem como opções baseadas em arquivo."
          },
          {
            "q": "O CocoIndex é o mesmo que o CocoIndex Code?",
            "a": "Não. O CocoIndex é o framework geral analisado aqui; o CocoIndex Code é um produto separado para busca semântica em bases de código e expõe um servidor MCP para agentes de programação."
          },
          {
            "q": "Como o CocoIndex difere das versões 0?",
            "a": "O arquivo de skill do fabricante diz que a versão 1 é um redesenho completo e que agentes treinados na API antiga tendem a escrever no estilo obsoleto da versão 0, então use a documentação atual."
          },
          {
            "q": "Posso desativar a telemetria?",
            "a": "Sim. Defina a variável de ambiente COCOINDEX_DISABLE_USAGE_TRACKING com qualquer valor não vazio diferente de 0 antes de iniciar o seu programa, como descreve a página de telemetria."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "O CocoIndex é uma forma ativamente desenvolvida de manter índices RAG e o contexto de agentes atualizados sem vetorizar tudo de novo, e sua documentação mostra o Ollama e o sentence-transformers como caminhos locais. Em contrapartida, é um framework de pipeline orientado a código e não um app de LLM local, a documentação mostra provedores de nuvem tanto quanto os locais, a edição Plus licenciada não tem preço divulgado e a PromptQuorum não testou nada disso. Serve para desenvolvedores Python que mantêm conjuntos de documentos em mudança e aceitam escrever código de pipeline; para conversar com seus arquivos sem programar, um app como o [AnythingLLM](/pt/power-local-llm/anythingllm-review) é um ponto de partida melhor."
      },
      "sources": {
        "id": "sources",
        "title": "Fontes",
        "items": [
          "[Site do CocoIndex](https://cocoindex.io) — visão geral do produto e comparação de edições, consultado em 8 de novembro de 2026.",
          "[Documentação do CocoIndex](https://cocoindex.io/docs) — visão geral, instalação, início rápido, caminho do banco, páginas de embedding e de conectores, consultada em 8 de novembro de 2026.",
          "[Página de telemetria do CocoIndex](https://cocoindex.io/docs/about/telemetry/) — quais eventos anônimos são enviados e como desativá-los, consultada em 8 de novembro de 2026.",
          "[CocoIndex no GitHub](https://github.com/cocoindex-io/cocoindex) — licença, README e versão 1.1.1, consultados em 8 de novembro de 2026.",
          "[cocoindex no PyPI](https://pypi.org/project/cocoindex/) — versão 1.1.1 do pacote e requisito de Python, consultados em 8 de novembro de 2026.",
          "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/) — termos de privacidade da empresa, atualizados pela última vez em 6 de novembro de 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leitura relacionada",
        "items": [
          "[Análise do LlamaIndex](/pt/power-local-llm/llamaindex-rag-framework-review) — um framework de RAG orientado a código para consultar seus documentos.",
          "[Análise do txtai](/pt/power-local-llm/txtai-embedded-vector-database-review) — um banco vetorial embutido com fluxos de LLM.",
          "[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Análise do CocoIndex: framework de dados incremental para RAG e agentes de IA",
      "description": "Análise do CocoIndex: um framework Python de código aberto que mantém índices RAG e o contexto de agentes atualizados reprocessando apenas os dados alterados, com opções de Ollama e sentence-transformers. Requisitos, privacidade e o que as fontes deixam sem confirmação.",
      "url": "https://www.promptquorum.com/pt/power-local-llm/cocoindex-review",
      "inLanguage": "pt-BR",
      "datePublished": "2026-11-08",
      "dateModified": "2026-11-08",
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "educationalLevel": "Advanced",
      "proficiencyLevel": "Advanced",
      "audience": {
        "@type": "Audience",
        "audienceType": "Desenvolvedores Python que avaliam um framework de pipeline de dados incremental para RAG e agentes de IA com opções de modelos locais"
      },
      "about": [
        { "@type": "Thing", "name": "CocoIndex" },
        { "@type": "Thing", "name": "Geração aumentada por recuperação (RAG)" },
        { "@type": "Thing", "name": "Indexação incremental" },
        { "@type": "Thing", "name": "Ollama" }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/pt/power-local-llm/cocoindex-review"
      }
    },
    "breadcrumbSchema": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.promptquorum.com" },
        { "@type": "ListItem", "position": 2, "name": "Power Local LLM", "item": "https://www.promptquorum.com/pt/power-local-llm" },
        { "@type": "ListItem", "position": 3, "name": "Análise do CocoIndex", "item": "https://www.promptquorum.com/pt/power-local-llm/cocoindex-review" }
      ]
    }
  },
  ja: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-08",
    "dateModified": "2026-11-08",
    "next_refresh_due": "2027-05-08",
    "theme": "RAG & Document Chat",
    "heroImage": "/images/cocoindex-review-hero-ja.webp",
    "title": "CocoIndexレビュー：RAGとAIエージェント向けの差分更新データ基盤",
    "seoTitle": "CocoIndexレビュー：RAG向け差分更新データ基盤",
    "intro": "CocoIndexは、内部にRustエンジンを持つオープンソースのPythonフレームワークで、ベクトルインデックス、テーブル、ナレッジグラフを、元データの変化に合わせて、変更があった部分だけを再処理して最新に保ちます。チャットアプリやモデルの実行環境ではなく、RAGシステムやAIエージェントにデータを供給するパイプライン層です。ローカルモデルの面では、埋め込みや情報抽出をOllamaやsentence-transformers経由で自分のマシン上で実行できます。本レビューは[cocoindex.io](https://cocoindex.io)、[ドキュメント](https://cocoindex.io/docs)、[GitHubリポジトリ](https://github.com/cocoindex-io/cocoindex)を2026年11月8日に確認した内容に基づいており、PromptQuorumはCocoIndexの実機テストを行っていません。",
    "metaDescription": "CocoIndexのレビュー。変更分だけを再処理してRAGとエージェントの索引を更新するApache 2.0のPythonフレームワークで、Ollamaとローカル埋め込みに対応。未検証。",
    "twitterDescription": "CocoIndexレビュー：RAGとAIエージェント向けの差分更新型データパイプライン基盤。Ollamaでローカル実行できる部分、コードが必要な部分、情報源が確認していない点。",
    "audience": "更新され続けるファイルを対象にRAGやエージェントのパイプラインを運用しているPython開発者で、CocoIndexの機能、必要なもの、どこまで自分のマシン上で完結できるのかを知りたい方。",
    "readTime": "6分で読める",
    "educationalLevel": "Advanced",
    "affiliateDisclosure": false,
    "primaryTerm": "CocoIndexレビュー",
    "targetKeywords": [
      "cocoindex レビュー",
      "cocoindex ollama",
      "cocoindex 差分更新",
      "cocoindex llamaindex 違い",
      "cocoindex rag",
      "cocoindex ローカル埋め込み",
      "cocoindex インストール"
    ],
    "current_models_mentioned": [
      "nomic-embed-text",
      "bge-m3",
      "Llama 3.2"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**CocoIndex（バージョン1.1.1、2026年11月5日公開）は、変更された入力だけを再処理してベクトルインデックスなどのAIデータストアを最新に保つ、無料のオープンソース（Apache 2.0）Pythonフレームワークです。** RAGやエージェントの裏側にあるデータパイプラインを構築するもので、チャット機能はなく、モデルも同梱されていません。",
    "quickAnswerTop": {
      "ja": {
        "question": "CocoIndexはOllamaで完全にローカル実行できますか？",
        "answer": "そのように設定すれば可能です。ドキュメントによると、埋め込みはnomic-embed-textなどのOllamaモデルまたはsentence-transformersで生成でき、情報抽出はOllama経由のローカルLlama 3.2で行えます。CocoIndex自身の状態は組み込みファイルに保存されるため、サーバーは不要です。",
        "bullets": [
          "pip install -U cocoindex でインストールします。ドキュメントはPython 3.11から3.13と記載しています。",
          "パイプラインは短いPythonファイルで、ビジュアルビルダーはありません。",
          "出力先にはSQLite、LanceDB、pgvector付きPostgreSQL、Qdrantなどがあります。",
          "クラウドのAPIキーやホスト型コネクターも同じ程度に目立つ形で記載されており、ローカル利用は初期設定ではなく選択です。"
        ],
        "updatedDate": "2026-11-08"
      }
    },
    "toc": [
      { "label": "クイックアンサー", "anchor": "quick-answer" },
      { "label": "CocoIndexとは", "anchor": "what-is-cocoindex" },
      { "label": "入手方法", "anchor": "get-it" },
      { "label": "動作要件", "anchor": "requirements" },
      { "label": "使い始めるには", "anchor": "getting-started" },
      { "label": "情報源で確認できた機能", "anchor": "key-features" },
      { "label": "データの流れとプライバシー", "anchor": "privacy" },
      { "label": "おすすめできる人", "anchor": "who-should-use" },
      { "label": "確認できなかった点", "anchor": "who-should-not-use" },
      { "label": "競合・代替アプリ", "anchor": "vs-alternatives" },
      { "label": "よくある質問", "anchor": "faq" },
      { "label": "総評", "anchor": "verdict" },
      { "label": "情報源", "anchor": "sources" },
      { "label": "関連記事", "anchor": "related-reading" }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "重要ポイント",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "CocoIndexは、変更されたデータとコードの経路だけを再計算して、RAGのインデックスとエージェントのコンテキストを最新に保つオープンソースのPythonフレームワークです。"
          },
          {
            "type": "plain-terms",
            "text": "インデックスに含めたい内容を短いPythonコードで記述すると、CocoIndexが以前の結果を記憶し、ファイルやコードが変わったときに影響を受ける行だけを更新します。"
          }
        ],
        "items": [
          "保守状況：メインブランチの最新コミットは2026年11月8日、最新リリース1.1.1は2026年11月5日で、放置プロジェクトの警告は該当しません。",
          "範囲：開発者向けのパイプラインフレームワークでアプリではなく、チャット画面もモデルも含まれていません。",
          "ローカル利用：Ollama、sentence-transformers、ローカルの出力先がドキュメントに記載されていますが、同じページにクラウドのプロバイダーも載っているため、プライバシーは設定次第です。",
          "費用：中核部分は無料で、チーム向けにCocoIndex Plusというライセンス版が別にあり、価格は公表されていません。",
          "テレメトリ：リリース版は、環境変数でオプトアウトしない限り匿名の利用イベントを送信します。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本レビューは、CocoIndexのウェブサイト、ドキュメント、GitHubリポジトリ、PyPIを2026年11月8日に確認した内容に基づいています。PromptQuorumはCocoIndexをインストールも実行もしていないため、速度、メモリ使用量、結果の品質は評価していません。"
          }
        ]
      },
      "overview": {
        "id": "what-is-cocoindex",
        "title": "CocoIndexとは",
        "content": [
          "**CocoIndexは、変化するデータソースをAI向けのデータに変換し、その鮮度を保つデータパイプラインのフレームワークです。** スプレッドシートの数式やReactコンポーネントと同じように、ターゲットがソースの関数としてどうあるべきかを宣言すると、エンジンがどの部分を再計算すべきかを判断します。ドキュメントが挙げるソースにはローカルフォルダー、Amazon S3、Google Drive、Kafka、データベースがあり、出力先にはベクトルデータベース、リレーショナルデータベース、グラフデータベースがあります。提供元は、ウェブサイトに記載されているCocoIndex Incです。",
          "**エンジンはRustで書かれ、パイプラインはPythonで記述します。** ソース項目単位、関数呼び出し単位、ターゲット行単位の3つのレベルで以前の結果を記憶するため、編集した文書だけが再パースと再埋め込みの対象となり、変更のない文書はスキップされます。関数のコードが変わった場合も、その処理を再実行します。別製品のCocoIndex Codeは、同じ考え方をコーディングエージェント向けにコードベースへ適用するもので、本レビューの対象外です。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "入手方法",
        "content": [
          "**CocoIndexはPythonパッケージです。1つのコマンドでインストールし、パイプラインのファイルを書きます。** ダウンロード型のデスクトップアプリではないため、インストーラーはありません。"
        ],
        "columns": [
          "項目",
          "入手方法"
        ],
        "rows": [
          {
            "項目": "pip",
            "入手方法": "[PyPI](https://pypi.org/project/cocoindex/)から `pip install -U cocoindex`"
          },
          {
            "項目": "uvまたはPoetry",
            "入手方法": "[インストールガイド](https://cocoindex.io/docs/getting_started/installation/)によると `uv add cocoindex` または `poetry add cocoindex`"
          },
          {
            "項目": "クイックスタート",
            "入手方法": "PDFをMarkdownに変換するパイプライン。`pip install docling` も必要：[クイックスタート](https://cocoindex.io/docs/getting_started/quickstart/)"
          },
          {
            "項目": "公式サイト",
            "入手方法": "[cocoindex.io](https://cocoindex.io)"
          },
          {
            "項目": "ドキュメント",
            "入手方法": "[cocoindex.io/docs](https://cocoindex.io/docs)"
          },
          {
            "項目": "プライバシーポリシー",
            "入手方法": "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/)（ページによると最終更新は2026年11月6日）"
          },
          {
            "項目": "ソースコード",
            "入手方法": "[github.com/cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex)、Apache 2.0"
          }
        ],
        "note": "確認したバージョン：1.1.1（2026年11月5日公開）。ターミナルとPython環境が必要で、グラフィカルなインストーラーはありません。チーム向けのCocoIndex Plusは、ライセンスキーを使って別途インストールします。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "動作要件",
        "content": [
          "**ドキュメントはPython 3.11から3.13と、3つのオペレーティングシステムを挙げています。** フレームワーク自体のRAMやGPUの最小要件は公表されていません。"
        ],
        "columns": [
          "項目",
          "情報源の記載"
        ],
        "rows": [
          {
            "項目": "Python",
            "情報源の記載": "インストールガイドでは3.11から3.13。PyPIのメタデータは3.11以降を要求"
          },
          {
            "項目": "macOS",
            "情報源の記載": "Intelは10.12以降、Apple Siliconは11.0以降"
          },
          {
            "項目": "Linux",
            "情報源の記載": "glibc 2.28以降のx86_64またはarm64（例：Debian 10、Ubuntu 18.10）"
          },
          {
            "項目": "Windows",
            "情報源の記載": "x86_64のWindows 10以降"
          },
          {
            "項目": "データベース",
            "情報源の記載": "CocoIndex自体は不要。状態は組み込みのLMDBファイルに保存され、パスはCOCOINDEX_DBで指定します。Postgresなどの出力先は別途必要です"
          },
          {
            "項目": "モデル",
            "情報源の記載": "設定したもの次第。Ollamaを使う場合は、ローカルでOllamaを起動し、各モデルを先にpullする必要があります"
          }
        ],
        "note": "そのため、必要なハードウェアはCocoIndexではなく、選んだ埋め込みモデルと言語モデルによって決まります。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "使い始めるには",
        "content": [
          "**手順はドキュメントのクイックスタートと埋め込みのページに沿ったもので、PromptQuorumは実行していません。**"
        ],
        "numberedItems": [
          {
            "title": "パッケージをインストールする",
            "whyItMatters": "Python 3.11から3.13の環境で pip install -U cocoindex を実行し、PDF用のdoclingなど必要なパーサーも追加します。"
          },
          {
            "title": "状態データベースのパスを設定する",
            "whyItMatters": ".envファイルに COCOINDEX_DB=./cocoindex.db を記述し、CocoIndexが以前の実行の記憶を保存するローカルファイルを用意します。"
          },
          {
            "title": "パイプラインを宣言する",
            "whyItMatters": "ソースフォルダーを読み込み、各ファイルを通常の関数で処理し、ターゲットに保持させる行やファイルを宣言するPythonアプリを書きます。"
          },
          {
            "title": "ローカルモデルを選ぶ",
            "whyItMatters": "マシン上で埋め込みを生成するには、Ollamaを起動して ollama pull nomic-embed-text を実行し、LiteLLMの埋め込み機能をそこに向けるか、代わりにsentence-transformersの埋め込み機能を使います。"
          },
          {
            "title": "実行と再実行",
            "whyItMatters": "cocoindex update main.py を実行し、ソースファイルを変更してもう一度実行します。ドキュメントによると、影響を受けたファイルだけが再処理されます。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "情報源で確認できた機能",
        "content": [
          "**以下はすべてウェブサイト、ドキュメント、リポジトリの記載によるもので、ここでは試していません。**"
        ],
        "items": [
          "**差分処理。** コンポーネント、関数、ターゲットの各レベルでの変更検出に加え、メモ化とコード変更の追跡。",
          "**コネクター。** ドキュメントに載っているソースと出力先には、ローカルファイル、Amazon S3、Azure Blob、Google Drive、Kafka、PostgreSQL、SQLite、LanceDB、Qdrant、Neo4j、Snowflake、BigQueryがあります。",
          "**ローカルモデルの選択肢。** Ollama（nomic-embed-text、mxbai-embed-large、bge-m3など）またはsentence-transformersによる埋め込みと、Ollama経由のローカルLlama 3.2による構造化抽出。",
          "**系譜と復旧。** 出力がどのように作られたかを確認でき、一時的な障害は再試行され、中断後も実行を再開できます。",
          "**ライブモード。** パイプラインはソースを監視し、バッチ処理ではなく継続的に更新できます。"
        ],
        "note": "提供元のページにある性能の数値（CocoIndex Codeのトークン削減量やキャッシュヒット率など）は提供元自身の主張であり、ここでは繰り返していません。"
      },
      "privacy": {
        "id": "privacy",
        "title": "データの流れとプライバシー",
        "content": [
          "**Ollamaまたはsentence-transformersと、SQLiteやLanceDBなどのローカルの出力先を使えば、ドキュメントに記載されたデータの経路は自分のマシン内にとどまります。** 代わりにOpenAI、Gemini、ホスト型データベースを選ぶと、テキストはそのプロバイダーの規約に従って送られ、CocoIndexはそれを防ぎません。",
          "テレメトリのページによると、リリース版はScarfゲートウェイ経由で匿名イベント（イベント名、オペレーティングシステムとCPUアーキテクチャ、Pythonのバージョン、設定した場合のみアプリケーションタグ）を送信します。ページはデータ、コード、ファイルパス、認証情報などを送信しないと明記しており、COCOINDEX_DISABLE_USAGE_TRACKINGを0以外の値に設定すると無効になると説明しています。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "これらは提供元の説明であり、監査結果ではありません。PromptQuorumはネットワーク通信もコードも検査していません。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "おすすめできる人",
        "items": [
          "**Python開発者** で、変化する文書、コード、レコードをベクトルストアに再インデックスしており、変更のない項目を省きたい方。",
          "**すでにOllamaを使っているチーム** で、使い捨てのスクリプトではなく、保守されたパイプラインの中でローカル埋め込みを使いたい方。",
          "**エージェントを開発している方** で、ソースを継続的に追跡し、複数の種類のストアに書き込めるインデックスが必要な方。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "確認できなかった点",
        "items": [
          "**性能。** 速度、メモリ使用量、差分更新による節約は提供元の説明で、測定していません。",
          "**品質。** ローカルの埋め込みモデルと抽出モデルが、お使いのデータで良い結果を出すかは未検証です。",
          "**Plusの価格。** CocoIndex Plusはライセンス制で、ウェブサイトは通話の予約を案内するのみで価格が公表されていないため、ここでは示していません。",
          "**Windowsでの動作。** ドキュメントはWindows 10以降を挙げていますが、Windows固有のテストについては確認していません。",
          "**ハードウェアの下限。** フレームワークのRAMやGPUの最小要件は公表されていません。"
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
            "アプリ": "[LlamaIndex](/ja/power-local-llm/llamaindex-rag-framework-review)",
            "対応環境": "Mac、Windows、Linux",
            "価格／ライセンス": "無料／MIT",
            "主な違い": "クエリとエージェント向けのより広いRAGツールキット。CocoIndexはインデックスを最新に保つことに特化"
          },
          {
            "アプリ": "[Haystack](/ja/power-local-llm/haystack-deepset-rag-framework-review)",
            "対応環境": "Mac、Windows、Linux",
            "価格／ライセンス": "無料／Apache 2.0",
            "主な違い": "検索とRAG向けの明示的なコンポーネントパイプラインで、クエリ時のフローが中心"
          },
          {
            "アプリ": "[txtai](/ja/power-local-llm/txtai-embedded-vector-database-review)",
            "対応環境": "Mac、Windows、Linux",
            "価格／ライセンス": "無料／Apache 2.0",
            "主な違い": "埋め込みデータベースとLLMワークフローを1つのライブラリにまとめ、独自のストレージを持つ"
          },
          {
            "アプリ": "[Cognee](/ja/power-local-llm/cognee-review)",
            "対応環境": "セルフホスト",
            "価格／ライセンス": "無料／Apache-2.0",
            "主な違い": "任意の出力先を同期するのではなく、エージェント向けのナレッジグラフとメモリを構築する"
          }
        ],
        "note": "これらのツールは部分的に重なっており、組み合わせて使うこともできます。たとえば、CocoIndexが作ったインデックスをLlamaIndexやHaystackが検索する構成です。選ぶ前に、各ツールの最新の価格、ライセンス、対応環境をそれぞれの掲載ページで確認してください。"
      },
      "faq": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "CocoIndexにはデータベースサーバーが必要ですか？",
            "a": "CocoIndex自身の状態には不要で、組み込みファイルに保存されます。pgvector付きPostgreSQLやQdrantなどの出力先ストアは別の選択で、SQLiteとLanceDBはファイルベースの選択肢として挙げられています。"
          },
          {
            "q": "CocoIndexとCocoIndex Codeは同じものですか？",
            "a": "いいえ。CocoIndexは本レビューで扱う汎用フレームワークで、CocoIndex Codeはコードベースのセマンティック検索向けの別製品であり、コーディングエージェント向けにMCPサーバーを公開しています。"
          },
          {
            "q": "CocoIndexはバージョン0とどう違いますか？",
            "a": "提供元のスキルファイルによると、バージョン1は根本から再設計されたもので、古いAPIで学習したエージェントは非推奨のバージョン0の書き方を出力しがちなため、最新のドキュメントを参照するよう案内しています。"
          },
          {
            "q": "テレメトリはオフにできますか？",
            "a": "はい。テレメトリのページにあるとおり、プログラムを起動する前に、環境変数COCOINDEX_DISABLE_USAGE_TRACKINGを0以外の空でない値に設定します。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "総評",
        "content": "CocoIndexは、すべてを再埋め込みせずにRAGのインデックスとエージェントのコンテキストを最新に保つための、活発に開発されている手段で、ドキュメントはOllamaとsentence-transformersをローカルの選択肢として示しています。一方で、ローカルLLMアプリではなくコード中心のパイプラインフレームワークであり、ドキュメントはクラウドのプロバイダーもローカルと同程度に示し、ライセンス版のPlusには公表された価格がなく、PromptQuorumはいずれも試していません。変化する文書群を管理し、パイプラインのコードを書くことを受け入れられるPython開発者に向いています。プログラミングなしで自分のファイルとチャットしたい場合は、[AnythingLLM](/ja/power-local-llm/anythingllm-review)のようなアプリのほうが出発点として適しています。"
      },
      "sources": {
        "id": "sources",
        "title": "情報源",
        "items": [
          "[CocoIndexウェブサイト](https://cocoindex.io) — 製品概要とエディションの比較（2026年11月8日確認）。",
          "[CocoIndexドキュメント](https://cocoindex.io/docs) — 概要、インストール、クイックスタート、データベースのパス、埋め込みとコネクターのページ（2026年11月8日確認）。",
          "[CocoIndexテレメトリのページ](https://cocoindex.io/docs/about/telemetry/) — 送信される匿名イベントとオプトアウトの方法（2026年11月8日確認）。",
          "[GitHubのCocoIndex](https://github.com/cocoindex-io/cocoindex) — ライセンス、README、リリース1.1.1（2026年11月8日確認）。",
          "[PyPIのcocoindex](https://pypi.org/project/cocoindex/) — パッケージのバージョン1.1.1とPythonの要件（2026年11月8日確認）。",
          "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/) — 会社のプライバシー条件（最終更新は2026年11月6日）。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[LlamaIndexレビュー](/ja/power-local-llm/llamaindex-rag-framework-review) — 自分の文書に問い合わせるためのコード中心のRAGフレームワーク。",
          "[txtaiレビュー](/ja/power-local-llm/txtai-embedded-vector-database-review) — LLMワークフローを備えた組み込み型ベクトルデータベース。",
          "[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。"
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "CocoIndexレビュー：RAGとAIエージェント向けの差分更新データ基盤",
      "description": "CocoIndexのレビュー。変更されたデータだけを再処理してRAGのインデックスとエージェントのコンテキストを最新に保つオープンソースのPythonフレームワークで、Ollamaとsentence-transformersに対応。動作要件、プライバシー、情報源が確認していない点を解説します。",
      "url": "https://www.promptquorum.com/ja/power-local-llm/cocoindex-review",
      "inLanguage": "ja",
      "datePublished": "2026-11-08",
      "dateModified": "2026-11-08",
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "educationalLevel": "Advanced",
      "proficiencyLevel": "Advanced",
      "audience": {
        "@type": "Audience",
        "audienceType": "RAGとAIエージェント向けに、ローカルモデルも選べる差分更新型のデータパイプラインフレームワークを検討しているPython開発者"
      },
      "about": [
        { "@type": "Thing", "name": "CocoIndex" },
        { "@type": "Thing", "name": "検索拡張生成（RAG）" },
        { "@type": "Thing", "name": "差分インデックス更新" },
        { "@type": "Thing", "name": "Ollama" }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/ja/power-local-llm/cocoindex-review"
      }
    },
    "breadcrumbSchema": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.promptquorum.com" },
        { "@type": "ListItem", "position": 2, "name": "Power Local LLM", "item": "https://www.promptquorum.com/ja/power-local-llm" },
        { "@type": "ListItem", "position": 3, "name": "CocoIndexレビュー", "item": "https://www.promptquorum.com/ja/power-local-llm/cocoindex-review" }
      ]
    }
  },
  zh: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-08",
    "dateModified": "2026-11-08",
    "next_refresh_due": "2027-05-08",
    "theme": "RAG & Document Chat",
    "heroImage": "/images/cocoindex-review-hero-zh.webp",
    "title": "CocoIndex 评测：面向 RAG 与 AI 智能体的增量数据框架",
    "seoTitle": "CocoIndex 评测：增量式 RAG 数据框架，支持本地嵌入",
    "intro": "CocoIndex 是一个开源 Python 框架，底层引擎用 Rust 编写，通过只重新处理发生变化的部分，让向量索引、数据表和知识图谱与不断变化的源数据保持同步。它不是聊天应用，也不是模型运行时，而是为 RAG 系统或 AI 智能体供数的管道层。它的本地模型特点是：嵌入和信息提取可以通过 Ollama 或 sentence-transformers 在你自己的机器上运行。本评测基于 [cocoindex.io](https://cocoindex.io)、[官方文档](https://cocoindex.io/docs) 和 [GitHub 仓库](https://github.com/cocoindex-io/cocoindex)（均于 2026 年 11 月 8 日查阅）；PromptQuorum 没有亲自实测 CocoIndex。",
    "metaDescription": "CocoIndex 评测：开源（Apache 2.0）Python 框架，只重新嵌入变化的数据，可配合 Ollama 与本地嵌入模型使用。PromptQuorum 未实测。",
    "twitterDescription": "CocoIndex 评测：面向 RAG 和 AI 智能体的增量数据管道框架。哪些能用 Ollama 在本地运行，哪些需要写代码，资料又留下了哪些未知。",
    "audience": "维护 RAG 或智能体管道、处理持续变化的文件，并想了解 CocoIndex 的功能、前提条件，以及有多少环节可以留在自己机器上的 Python 开发者。",
    "readTime": "阅读约6分钟",
    "educationalLevel": "Advanced",
    "affiliateDisclosure": false,
    "primaryTerm": "CocoIndex 评测",
    "targetKeywords": [
      "cocoindex 评测",
      "cocoindex ollama",
      "cocoindex 增量索引",
      "cocoindex 对比 llamaindex",
      "cocoindex rag",
      "cocoindex 本地嵌入",
      "cocoindex 安装"
    ],
    "current_models_mentioned": [
      "nomic-embed-text",
      "bge-m3",
      "Llama 3.2"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**CocoIndex（版本 1.1.1，2026 年 11 月 5 日发布）是一个免费、开源（Apache 2.0）的 Python 框架，只重新处理发生变化的输入，从而让向量索引和其他 AI 数据存储保持最新。** 它构建的是 RAG 和智能体背后的数据管道；它不提供聊天功能，也不附带任何模型。",
    "quickAnswerTop": {
      "zh": {
        "question": "CocoIndex 能配合 Ollama 完全在本地运行吗？",
        "answer": "可以，前提是按此方式配置。据文档，嵌入可来自 nomic-embed-text 等 Ollama 模型或 sentence-transformers，信息提取可通过 Ollama 使用本地 Llama 3.2，而它自身的状态保存在一个嵌入式文件中，因此无需服务器。",
        "bullets": [
          "用 pip install -U cocoindex 安装；文档列出的 Python 版本为 3.11 到 3.13。",
          "一条管道就是一个简短的 Python 文件，没有可视化构建器。",
          "目标存储包括 SQLite、LanceDB、带 pgvector 的 PostgreSQL 和 Qdrant。",
          "云端密钥和托管连接器在文档中同样显眼，因此本地使用是一种选择，而不是默认设置。"
        ],
        "updatedDate": "2026-11-08"
      }
    },
    "toc": [
      { "label": "快速回答", "anchor": "quick-answer" },
      { "label": "CocoIndex 是什么？", "anchor": "what-is-cocoindex" },
      { "label": "获取方式", "anchor": "get-it" },
      { "label": "系统要求", "anchor": "requirements" },
      { "label": "如何上手", "anchor": "getting-started" },
      { "label": "资料证实的功能", "anchor": "key-features" },
      { "label": "数据流向与隐私", "anchor": "privacy" },
      { "label": "适合谁使用", "anchor": "who-should-use" },
      { "label": "我们无法核实的内容", "anchor": "who-should-not-use" },
      { "label": "竞品与替代方案", "anchor": "vs-alternatives" },
      { "label": "常见问题", "anchor": "faq" },
      { "label": "结论", "anchor": "verdict" },
      { "label": "资料来源", "anchor": "sources" },
      { "label": "相关阅读", "anchor": "related-reading" }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "核心要点",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "CocoIndex 是一个开源 Python 框架，只重新计算发生变化的数据和代码路径，让 RAG 索引和智能体上下文保持最新。"
          },
          {
            "type": "plain-terms",
            "text": "你用一小段 Python 描述索引应包含的内容；CocoIndex 会记住之前的结果，当文件或你的代码发生变化时，只更新受影响的行。"
          }
        ],
        "items": [
          "维护情况：主分支最新提交为 2026 年 11 月 8 日，最新版本 1.1.1 发布于 2026 年 11 月 5 日，因此不适用项目停更警告。",
          "范围：面向开发者的管道框架，不是应用；没有聊天窗口，也不含模型。",
          "本地使用：文档记载了 Ollama、sentence-transformers 和本地目标存储，但同样的页面也列出云端提供商，因此隐私取决于你的配置。",
          "费用：核心免费；另有面向团队的授权版本 CocoIndex Plus，未公布价格。",
          "遥测：发布版会发送匿名使用事件，除非你通过环境变量选择退出。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "本评测基于 CocoIndex 网站、官方文档、GitHub 仓库和 PyPI，均于 2026 年 11 月 8 日查阅。PromptQuorum 没有安装或运行过 CocoIndex，因此未评估速度、内存占用和结果质量。"
          }
        ]
      },
      "overview": {
        "id": "what-is-cocoindex",
        "title": "CocoIndex 是什么？",
        "content": [
          "**CocoIndex 是一个数据管道框架，把不断变化的数据源转换为可供 AI 使用的数据，并让这些数据保持最新。** 你像写电子表格公式或 React 组件那样，把目标应有的样子声明为源数据的函数，由引擎判断哪些部分需要重新计算。文档提到的数据源包括本地文件夹、Amazon S3、Google Drive、Kafka 和数据库；目标存储包括向量数据库、关系数据库和图数据库。开发方是 CocoIndex Inc，即其网站上标明的公司。",
          "**引擎用 Rust 编写，管道用 Python 编写。** 它在三个层级上记住之前的结果：每个源项目、每次函数调用和每个目标行，因此被编辑过的文档会重新解析和重新嵌入，未改动的文档则被跳过。当函数的代码发生变化时，它也会重新执行相关工作。另一款产品 CocoIndex Code 把同样的思路用于面向编程智能体的代码库，本文不涉及。"
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "获取方式",
        "content": [
          "**CocoIndex 是一个 Python 包：用一条命令安装，然后编写管道文件。** 它不是可下载的桌面应用，因此没有安装程序。"
        ],
        "columns": [
          "选项",
          "获取方式"
        ],
        "rows": [
          {
            "选项": "pip",
            "获取方式": "从 [PyPI](https://pypi.org/project/cocoindex/) 执行 `pip install -U cocoindex`"
          },
          {
            "选项": "uv 或 Poetry",
            "获取方式": "`uv add cocoindex` 或 `poetry add cocoindex`，见[安装指南](https://cocoindex.io/docs/getting_started/installation/)"
          },
          {
            "选项": "快速入门",
            "获取方式": "一条 PDF 转 Markdown 的管道，另需 `pip install docling`：[快速入门](https://cocoindex.io/docs/getting_started/quickstart/)"
          },
          {
            "选项": "官方网站",
            "获取方式": "[cocoindex.io](https://cocoindex.io)"
          },
          {
            "选项": "文档",
            "获取方式": "[cocoindex.io/docs](https://cocoindex.io/docs)"
          },
          {
            "选项": "隐私政策",
            "获取方式": "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/)，页面显示最后更新于 2026 年 11 月 6 日"
          },
          {
            "选项": "源代码",
            "获取方式": "[github.com/cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex)，Apache 2.0"
          }
        ],
        "note": "评测版本：1.1.1，2026 年 11 月 5 日发布。需要终端和 Python 环境，没有图形化安装程序。面向团队的 CocoIndex Plus 版本需另行安装，并使用许可证密钥。"
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "系统要求",
        "content": [
          "**文档要求 Python 3.11 到 3.13，并列出三种操作系统。** 框架本身没有公布内存或 GPU 的最低要求。"
        ],
        "columns": [
          "项目",
          "资料中的说法"
        ],
        "rows": [
          {
            "项目": "Python",
            "资料中的说法": "安装指南为 3.11 到 3.13；PyPI 元数据要求 3.11 或更高版本"
          },
          {
            "项目": "macOS",
            "资料中的说法": "Intel 机型需 10.12 或更高，Apple Silicon 需 11.0 或更高"
          },
          {
            "项目": "Linux",
            "资料中的说法": "x86_64 或 arm64，glibc 2.28 或更高，例如 Debian 10 或 Ubuntu 18.10"
          },
          {
            "项目": "Windows",
            "资料中的说法": "x86_64 架构的 Windows 10 或更高版本"
          },
          {
            "项目": "数据库",
            "资料中的说法": "CocoIndex 自身不需要：其状态保存在嵌入式 LMDB 文件中，路径由 COCOINDEX_DB 设置；你选的目标存储（如 Postgres）则是独立的"
          },
          {
            "项目": "模型",
            "资料中的说法": "取决于你的配置；走 Ollama 路线时，需先在本地运行 Ollama 并拉取各个模型"
          }
        ],
        "note": "因此，硬件需求取决于你选用的嵌入模型和语言模型，而不是 CocoIndex。"
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "如何上手",
        "content": [
          "**以下步骤依据文档的快速入门和嵌入页面，PromptQuorum 没有实际运行过。**"
        ],
        "numberedItems": [
          {
            "title": "安装软件包",
            "whyItMatters": "在 Python 3.11 到 3.13 环境中运行 pip install -U cocoindex，并按需安装解析器，例如用于 PDF 的 docling。"
          },
          {
            "title": "设置状态数据库路径",
            "whyItMatters": "创建包含 COCOINDEX_DB=./cocoindex.db 的 .env 文件，让 CocoIndex 有一个本地文件来记录之前运行的结果。"
          },
          {
            "title": "声明管道",
            "whyItMatters": "编写一个 Python 应用：读取源文件夹，用普通函数处理每个文件，并声明目标应保存的行或文件。"
          },
          {
            "title": "选择本地模型",
            "whyItMatters": "若要在本机生成嵌入，先启动 Ollama，运行 ollama pull nomic-embed-text，并让 LiteLLM 嵌入器指向它，或者改用 sentence-transformers 嵌入器。"
          },
          {
            "title": "运行并重新运行",
            "whyItMatters": "运行 cocoindex update main.py，修改一个源文件后再运行一次；据文档，只有受影响的文件会被重新处理。"
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "资料证实的功能",
        "content": [
          "**以下每一项都来自网站、文档或仓库；这里均未实测。**"
        ],
        "items": [
          "**增量处理。** 在组件、函数和目标三个层级检测变化，带有记忆化和代码变更跟踪。",
          "**连接器。** 文档列出的数据源和目标包括本地文件、Amazon S3、Azure Blob、Google Drive、Kafka、PostgreSQL、SQLite、LanceDB、Qdrant、Neo4j、Snowflake 和 BigQuery。",
          "**本地模型选项。** 通过 Ollama（nomic-embed-text、mxbai-embed-large、bge-m3 等）或 sentence-transformers 生成嵌入，并通过 Ollama 使用本地 Llama 3.2 做结构化提取。",
          "**数据溯源与恢复。** 可查看某项输出是如何产生的；临时性故障会重试，中断后可继续运行。",
          "**实时模式。** 管道可以监视数据源并持续更新，而不是分批处理。"
        ],
        "note": "开发方页面上的性能数据，例如 CocoIndex Code 的 token 节省量或缓存命中率，属于开发方自己的说法，这里不予转述。"
      },
      "privacy": {
        "id": "privacy",
        "title": "数据流向与隐私",
        "content": [
          "**使用 Ollama 或 sentence-transformers，并搭配 SQLite 或 LanceDB 等本地目标存储时，文档记载的数据路径都留在你的机器上。** 如果你改选 OpenAI、Gemini 或托管数据库，文本会按该提供商自己的条款发送给对方；CocoIndex 并不会阻止这一点。",
          "遥测页面称，发布版会通过 Scarf 网关发送匿名事件（事件名称、操作系统和 CPU 架构、Python 版本，以及仅在你设置时才有的应用标签）。页面列出了不会发送的内容，包括你的数据、代码、文件路径和凭据，并说明把 COCOINDEX_DISABLE_USAGE_TRACKING 设为 0 以外的值即可关闭。"
        ],
        "callouts": [
          {
            "type": "note",
            "text": "这些是开发方的说法，不是审计结果。PromptQuorum 没有检查网络流量或代码。"
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "适合谁使用",
        "items": [
          "**Python 开发者**：需要把不断变化的文档、代码或记录重新索引到向量库，并希望跳过未改动的项目。",
          "**已在运行 Ollama 的团队**：想在一条持续维护的管道中使用本地嵌入，而不是一次性脚本。",
          "**智能体开发者**：需要一个能持续跟踪数据源、并可写入多种存储的索引。"
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "我们无法核实的内容",
        "items": [
          "**性能。** 速度、内存占用以及增量更新带来的节省，都是开发方的描述，未经测量。",
          "**质量。** 本地嵌入和提取模型在你的数据上效果是否理想，尚未测试。",
          "**Plus 定价。** CocoIndex Plus 需要授权，网站只提供预约通话，没有公布价格，因此这里不标注价格。",
          "**Windows 表现。** 文档列出 Windows 10 或更高版本，但没有核查针对 Windows 的测试。",
          "**硬件下限。** 框架没有公布内存或 GPU 的最低要求。"
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
            "应用": "[LlamaIndex](/zh/power-local-llm/llamaindex-rag-framework-review)",
            "平台": "Mac、Windows、Linux",
            "价格 / 许可": "免费 / MIT",
            "主要区别": "更广泛的 RAG 工具包，用于查询和智能体；CocoIndex 专注于让索引保持最新"
          },
          {
            "应用": "[Haystack](/zh/power-local-llm/haystack-deepset-rag-framework-review)",
            "平台": "Mac、Windows、Linux",
            "价格 / 许可": "免费 / Apache 2.0",
            "主要区别": "用于搜索和 RAG 的显式组件管道，围绕查询时流程构建"
          },
          {
            "应用": "[txtai](/zh/power-local-llm/txtai-embedded-vector-database-review)",
            "平台": "Mac、Windows、Linux",
            "价格 / 许可": "免费 / Apache 2.0",
            "主要区别": "嵌入数据库和 LLM 工作流合在一个库里，自带存储"
          },
          {
            "应用": "[Cognee](/zh/power-local-llm/cognee-review)",
            "平台": "自托管",
            "价格 / 许可": "免费 / Apache-2.0",
            "主要区别": "为智能体构建知识图谱和记忆，而不是同步任意目标存储"
          }
        ],
        "note": "这些工具有部分重叠，也可以组合使用，例如先生成索引，再由 LlamaIndex 或 Haystack 查询。选择前，请在各工具自己的页面上确认其当前价格、许可证和支持平台。"
      },
      "faq": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "CocoIndex 需要数据库服务器吗？",
            "a": "自身状态不需要，它保存在一个嵌入式文件中。你的目标存储，例如带 pgvector 的 PostgreSQL 或 Qdrant，是另外的选择；SQLite 和 LanceDB 被列为基于文件的选项。"
          },
          {
            "q": "CocoIndex 和 CocoIndex Code 是同一个东西吗？",
            "a": "不是。CocoIndex 是本文评测的通用框架；CocoIndex Code 是另一款产品，用于对代码库做语义搜索，并为编程智能体提供 MCP 服务器。"
          },
          {
            "q": "CocoIndex 与 0 版本有什么不同？",
            "a": "开发方的 skill 文件称，1 版是彻底重新设计的，基于旧 API 训练的智能体往往会写出已弃用的 0 版风格，因此请以当前文档为准。"
          },
          {
            "q": "可以关闭遥测吗？",
            "a": "可以。按遥测页面的说明，在启动程序前，把环境变量 COCOINDEX_DISABLE_USAGE_TRACKING 设为 0 以外的任意非空值。"
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "CocoIndex 是一种持续积极开发的方案，可以在不重新嵌入全部内容的情况下，让 RAG 索引和智能体上下文保持最新，文档也把 Ollama 和 sentence-transformers 列为本地路线。不足之处在于：它是以代码为先的管道框架，而不是本地 LLM 应用；文档对云端提供商和本地方案一视同仁；授权的 Plus 版本没有公布价格；而且 PromptQuorum 没有测试其中任何一项。它适合维护变化文档集、并愿意编写管道代码的 Python 开发者；若想不写程序就与自己的文件对话，[AnythingLLM](/zh/power-local-llm/anythingllm-review) 这样的应用是更好的起点。"
      },
      "sources": {
        "id": "sources",
        "title": "资料来源",
        "items": [
          "[CocoIndex 网站](https://cocoindex.io) — 产品概览和版本对比，2026 年 11 月 8 日查阅。",
          "[CocoIndex 文档](https://cocoindex.io/docs) — 概览、安装、快速入门、数据库路径、嵌入和连接器页面，2026 年 11 月 8 日查阅。",
          "[CocoIndex 遥测页面](https://cocoindex.io/docs/about/telemetry/) — 发送哪些匿名事件以及如何选择退出，2026 年 11 月 8 日查阅。",
          "[GitHub 上的 CocoIndex](https://github.com/cocoindex-io/cocoindex) — 许可证、README 和 1.1.1 版本，2026 年 11 月 8 日查阅。",
          "[PyPI 上的 cocoindex](https://pypi.org/project/cocoindex/) — 包版本 1.1.1 和 Python 版本要求，2026 年 11 月 8 日查阅。",
          "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/) — 公司隐私条款，最后更新于 2026 年 11 月 6 日。"
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "相关阅读",
        "items": [
          "[LlamaIndex 评测](/zh/power-local-llm/llamaindex-rag-framework-review) — 以代码为先的 RAG 框架，用于查询你的文档。",
          "[txtai 评测](/zh/power-local-llm/txtai-embedded-vector-database-review) — 带 LLM 工作流的嵌入式向量数据库。",
          "[本地大模型软件目录](/zh/directory) — 本地 AI 工具的完整目录。"
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "CocoIndex 评测：面向 RAG 与 AI 智能体的增量数据框架",
      "description": "CocoIndex 评测：开源 Python 框架，只重新处理变化的数据，让 RAG 索引和智能体上下文保持最新，支持 Ollama 和 sentence-transformers。系统要求、隐私，以及资料未能证实的内容。",
      "url": "https://www.promptquorum.com/zh/power-local-llm/cocoindex-review",
      "inLanguage": "zh",
      "datePublished": "2026-11-08",
      "dateModified": "2026-11-08",
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "educationalLevel": "Advanced",
      "proficiencyLevel": "Advanced",
      "audience": {
        "@type": "Audience",
        "audienceType": "评估面向 RAG 和 AI 智能体、带本地模型选项的增量数据管道框架的 Python 开发者"
      },
      "about": [
        { "@type": "Thing", "name": "CocoIndex" },
        { "@type": "Thing", "name": "检索增强生成" },
        { "@type": "Thing", "name": "增量索引" },
        { "@type": "Thing", "name": "Ollama" }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/zh/power-local-llm/cocoindex-review"
      }
    },
    "breadcrumbSchema": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.promptquorum.com" },
        { "@type": "ListItem", "position": 2, "name": "Power Local LLM", "item": "https://www.promptquorum.com/zh/power-local-llm" },
        { "@type": "ListItem", "position": 3, "name": "CocoIndex 评测", "item": "https://www.promptquorum.com/zh/power-local-llm/cocoindex-review" }
      ]
    }
  },
  ar: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-08",
    "dateModified": "2026-11-08",
    "next_refresh_due": "2027-05-08",
    "theme": "RAG & Document Chat",
    "heroImage": "/images/cocoindex-review-hero-ar.webp",
    "title": "مراجعة CocoIndex: إطار بيانات تزايدي لـ RAG ووكلاء الذكاء الاصطناعي",
    "seoTitle": "مراجعة CocoIndex: إطار بيانات تزايدي لـ RAG والوكلاء",
    "intro": "CocoIndex إطار عمل مفتوح المصدر بلغة Python، بمحرك Rust في الأسفل، يُبقي فهارس المتجهات والجداول ورسوم المعرفة متزامنة مع بيانات المصدر المتغيرة بإعادة معالجة ما تغيّر فقط. وهو ليس تطبيق دردشة ولا بيئة تشغيل نماذج: إنه طبقة خطوط المعالجة التي تغذي نظام RAG أو وكيل ذكاء اصطناعي. وجانبه المحلي أن التضمينات والاستخراج يمكن أن تعمل عبر Ollama أو sentence-transformers على جهازك. تستند هذه المراجعة إلى [cocoindex.io](https://cocoindex.io) و[التوثيق](https://cocoindex.io/docs) و[مستودع GitHub](https://github.com/cocoindex-io/cocoindex)، وقد روجعت في 8 نوفمبر 2026؛ ولم تختبر PromptQuorum CocoIndex عمليًا.",
    "metaDescription": "مراجعة CocoIndex: إطار Python مفتوح المصدر (Apache 2.0) يعيد تضمين البيانات المتغيرة فقط لأنظمة RAG والوكلاء، مع Ollama وتضمينات محلية. لم يُختبر عمليًا.",
    "twitterDescription": "مراجعة CocoIndex: إطار خطوط بيانات تزايدي لـ RAG ووكلاء الذكاء الاصطناعي. ما يعمل محليًا مع Ollama وما يحتاج إلى شيفرة وما تتركه المصادر مفتوحًا.",
    "audience": "مطورو Python الذين يصونون خطوط RAG أو الوكلاء على ملفات متغيرة باستمرار ويريدون معرفة ما يفعله CocoIndex وما يتطلبه ومقدار ما يمكن إبقاؤه على أجهزتهم.",
    "readTime": "6 دقائق للقراءة",
    "educationalLevel": "Advanced",
    "affiliateDisclosure": false,
    "primaryTerm": "مراجعة CocoIndex",
    "targetKeywords": [
      "مراجعة cocoindex",
      "cocoindex ollama",
      "فهرسة تزايدية cocoindex",
      "cocoindex مقابل llamaindex",
      "cocoindex rag",
      "تضمينات cocoindex المحلية",
      "تثبيت cocoindex"
    ],
    "current_models_mentioned": [
      "nomic-embed-text",
      "bge-m3",
      "Llama 3.2"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**CocoIndex (الإصدار 1.1.1، الصادر في 5 نوفمبر 2026) إطار عمل مجاني ومفتوح المصدر (Apache 2.0) بلغة Python يُبقي فهارس المتجهات ومخازن بيانات الذكاء الاصطناعي الأخرى محدّثة بإعادة معالجة المدخلات المتغيرة فقط.** يبني خط البيانات الذي يقف خلف RAG والوكلاء؛ ولا يدردش ولا يأتي مع أي نموذج.",
    "quickAnswerTop": {
      "ar": {
        "question": "هل يعمل CocoIndex محليًا بالكامل مع Ollama؟",
        "answer": "نعم، إذا هيّأته بهذه الطريقة. وفق التوثيق، يمكن أن تأتي التضمينات من نماذج Ollama مثل nomic-embed-text أو من sentence-transformers، ويمكن للاستخراج استخدام Llama 3.2 محلي عبر Ollama، وحالته الداخلية ملف مضمَّن، فلا حاجة إلى خادم.",
        "bullets": [
          "ثبّته بالأمر pip install -U cocoindex؛ ويذكر التوثيق إصدارات Python من 3.11 إلى 3.13.",
          "خط المعالجة ملف Python صغير؛ ولا توجد أداة بناء مرئية.",
          "تشمل الوجهات SQLite وLanceDB وPostgreSQL مع pgvector وQdrant.",
          "مفاتيح السحابة والموصلات المستضافة موثقة بالبروز نفسه، لذا فالاستخدام المحلي خيار وليس الإعداد الافتراضي."
        ],
        "updatedDate": "2026-11-08"
      }
    },
    "toc": [
      { "label": "إجابة سريعة", "anchor": "quick-answer" },
      { "label": "ما هو CocoIndex؟", "anchor": "what-is-cocoindex" },
      { "label": "كيف تحصل عليه", "anchor": "get-it" },
      { "label": "المتطلبات", "anchor": "requirements" },
      { "label": "كيف تبدأ", "anchor": "getting-started" },
      { "label": "الميزات التي أكدتها المصادر", "anchor": "key-features" },
      { "label": "تدفق البيانات والخصوصية", "anchor": "privacy" },
      { "label": "لمن يناسب", "anchor": "who-should-use" },
      { "label": "ما لم نتمكن من التحقق منه", "anchor": "who-should-not-use" },
      { "label": "المنافسون والبدائل", "anchor": "vs-alternatives" },
      { "label": "الأسئلة الشائعة", "anchor": "faq" },
      { "label": "الخلاصة", "anchor": "verdict" },
      { "label": "المصادر", "anchor": "sources" },
      { "label": "قراءات ذات صلة", "anchor": "related-reading" }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "النقاط الرئيسية",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "CocoIndex إطار عمل مفتوح المصدر بلغة Python يُبقي فهارس RAG وسياق الوكلاء محدّثة بإعادة حساب البيانات ومسارات الشيفرة المتغيرة فقط."
          },
          {
            "type": "plain-terms",
            "text": "تكتب وصفًا قصيرًا بلغة Python لما ينبغي أن يحتويه فهرسك؛ ويتذكر CocoIndex النتائج السابقة، وعند تغيّر ملف أو شيفرتك يحدّث الصفوف المتأثرة فقط."
          }
        ],
        "items": [
          "الصيانة: أحدث commit في الفرع الرئيسي بتاريخ 8 نوفمبر 2026 وأحدث إصدار، 1.1.1، بتاريخ 5 نوفمبر 2026، لذا لا ينطبق تحذير المشروع المتوقف.",
          "النطاق: إطار خطوط معالجة للمطورين وليس تطبيقًا؛ لا يحتوي نافذة دردشة ولا نموذجًا.",
          "الاستخدام المحلي: Ollama وsentence-transformers والوجهات المحلية موثقة، لكن الصفحات نفسها تعرض مزودي السحابة، لذا تتوقف الخصوصية على إعدادك.",
          "التكلفة: النواة مجانية؛ وتوجد نسخة مرخّصة منفصلة للفرق تسمى CocoIndex Plus، دون سعر معلن.",
          "القياس عن بُعد: تُرسل نسخ الإصدار أحداث استخدام مجهولة ما لم تعطّلها بمتغير بيئة."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "تستند هذه المراجعة إلى موقع CocoIndex والتوثيق ومستودع GitHub وPyPI، وقد روجعت في 8 نوفمبر 2026. لم تثبّت PromptQuorum برنامج CocoIndex ولم تشغّله، لذا لم تُقيَّم السرعة ولا استهلاك الذاكرة ولا جودة النتائج."
          }
        ]
      },
      "overview": {
        "id": "what-is-cocoindex",
        "title": "ما هو CocoIndex؟",
        "content": [
          "**CocoIndex إطار عمل لخطوط البيانات يحوّل المصادر المتغيرة إلى بيانات جاهزة للذكاء الاصطناعي ويُبقي هذه البيانات حديثة.** تصف ما ينبغي أن تبدو عليه الوجهة كدالة للمصدر، على طريقة معادلة جدول البيانات أو مكوّن React، ويحدد المحرك الأجزاء التي يجب إعادة حسابها. تشمل المصادر المذكورة في التوثيق المجلدات المحلية وAmazon S3 وGoogle Drive وKafka وقواعد البيانات؛ وتشمل الوجهات قواعد بيانات المتجهات والقواعد العلائقية وقواعد الرسوم. والجهة المطوِّرة هي CocoIndex Inc، الشركة المذكورة على موقعها.",
          "**المحرك مكتوب بلغة Rust وخطوط المعالجة بلغة Python.** يتذكر النتائج السابقة على ثلاثة مستويات: لكل عنصر مصدر ولكل استدعاء دالة ولكل صف وجهة، فيُعاد تحليل المستند المعدَّل وتضمينه بينما تُتخطى المستندات غير المتغيرة. كما يعيد تشغيل العمل عند تغيّر شيفرة دالة. أما CocoIndex Code فمنتج منفصل يطبق الفكرة نفسها على قواعد الشيفرة لوكلاء البرمجة ولا تغطيه هذه المراجعة."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "كيف تحصل عليه",
        "content": [
          "**CocoIndex حزمة Python: ثبّتها بأمر واحد ثم اكتب ملف خط المعالجة.** وهو ليس تطبيق سطح مكتب قابلًا للتنزيل، لذا لا يوجد مثبّت."
        ],
        "columns": [
          "الخيار",
          "مصدر الحصول عليه"
        ],
        "rows": [
          {
            "الخيار": "pip",
            "مصدر الحصول عليه": "`pip install -U cocoindex` من [PyPI](https://pypi.org/project/cocoindex/)"
          },
          {
            "الخيار": "uv أو Poetry",
            "مصدر الحصول عليه": "`uv add cocoindex` أو `poetry add cocoindex`، وفق [دليل التثبيت](https://cocoindex.io/docs/getting_started/installation/)"
          },
          {
            "الخيار": "البدء السريع",
            "مصدر الحصول عليه": "خط من PDF إلى Markdown يحتاج أيضًا إلى `pip install docling`: [البدء السريع](https://cocoindex.io/docs/getting_started/quickstart/)"
          },
          {
            "الخيار": "الموقع الرسمي",
            "مصدر الحصول عليه": "[cocoindex.io](https://cocoindex.io)"
          },
          {
            "الخيار": "التوثيق",
            "مصدر الحصول عليه": "[cocoindex.io/docs](https://cocoindex.io/docs)"
          },
          {
            "الخيار": "سياسة الخصوصية",
            "مصدر الحصول عليه": "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/)، وآخر تحديث لها في 6 نوفمبر 2026 وفق الصفحة"
          },
          {
            "الخيار": "الشيفرة المصدرية",
            "مصدر الحصول عليه": "[github.com/cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex)، Apache 2.0"
          }
        ],
        "note": "الإصدار الذي رُوجع: 1.1.1، الصادر في 5 نوفمبر 2026. يلزم طرفية وبيئة Python؛ ولا يوجد مثبّت رسومي. وتُثبَّت نسخة CocoIndex Plus الموجهة للفرق بشكل منفصل بمفتاح ترخيص."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "المتطلبات",
        "content": [
          "**يطلب التوثيق Python من 3.11 إلى 3.13 ويذكر ثلاثة أنظمة تشغيل.** ولا ينشر حدًا أدنى من RAM أو GPU للإطار نفسه."
        ],
        "columns": [
          "البند",
          "ما تقوله المصادر"
        ],
        "rows": [
          {
            "البند": "Python",
            "ما تقوله المصادر": "من 3.11 إلى 3.13 في دليل التثبيت؛ وتشترط بيانات PyPI الإصدار 3.11 أو أحدث"
          },
          {
            "البند": "macOS",
            "ما تقوله المصادر": "10.12 أو أحدث على Intel، و11.0 أو أحدث على Apple Silicon"
          },
          {
            "البند": "Linux",
            "ما تقوله المصادر": "x86_64 أو arm64 مع glibc 2.28 أو أحدث، مثل Debian 10 أو Ubuntu 18.10"
          },
          {
            "البند": "Windows",
            "ما تقوله المصادر": "Windows 10 أو أحدث على x86_64"
          },
          {
            "البند": "قاعدة البيانات",
            "ما تقوله المصادر": "لا شيء لـ CocoIndex نفسه: حالته في ملف LMDB مضمَّن تحدد مساره بـ COCOINDEX_DB؛ أما وجهتك المختارة، مثل Postgres، فمنفصلة"
          },
          {
            "البند": "النماذج",
            "ما تقوله المصادر": "ما تهيّئه أنت؛ ويجب تشغيل Ollama محليًا وسحب كل نموذج أولًا في مسار Ollama"
          }
        ],
        "note": "لذلك تتوقف احتياجات العتاد على نماذج التضمين واللغة التي تختارها، لا على CocoIndex."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "كيف تبدأ",
        "content": [
          "**الخطوات تتبع صفحتَي البدء السريع والتضمين في التوثيق؛ ولم تنفذها PromptQuorum.**"
        ],
        "numberedItems": [
          {
            "title": "ثبّت الحزمة",
            "whyItMatters": "شغّل pip install -U cocoindex في بيئة Python من 3.11 إلى 3.13، مع أي محلل تريده، مثل docling لملفات PDF."
          },
          {
            "title": "حدّد مسار قاعدة بيانات الحالة",
            "whyItMatters": "أنشئ ملف .env يحتوي COCOINDEX_DB=./cocoindex.db ليكون لدى CocoIndex ملف محلي لذاكرته عن التشغيلات السابقة."
          },
          {
            "title": "صرّح بخط المعالجة",
            "whyItMatters": "اكتب تطبيق Python يقرأ مجلد المصدر ويعالج كل ملف بدوال عادية ويصرّح بالصفوف أو الملفات التي ينبغي أن تحتويها الوجهة."
          },
          {
            "title": "اختر النماذج المحلية",
            "whyItMatters": "للتضمينات على جهازك، شغّل Ollama ونفّذ ollama pull nomic-embed-text ووجّه مُضمِّن LiteLLM إليه، أو استخدم مُضمِّن sentence-transformers بدلًا من ذلك."
          },
          {
            "title": "شغّل وأعد التشغيل",
            "whyItMatters": "شغّل cocoindex update main.py، ثم غيّر ملف مصدر وشغّله مرة أخرى؛ ويذكر التوثيق أن الملفات المتأثرة فقط تُعاد معالجتها."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "الميزات التي أكدتها المصادر",
        "content": [
          "**كل بند أدناه مأخوذ من الموقع أو التوثيق أو المستودع؛ ولم يُختبر أي منها هنا.**"
        ],
        "items": [
          "**المعالجة التزايدية.** كشف التغيّر على مستوى المكوّن والدالة والوجهة، مع الحفظ المؤقت للنتائج وتتبع تغييرات الشيفرة.",
          "**الموصلات.** تشمل المصادر والوجهات المذكورة في التوثيق الملفات المحلية وAmazon S3 وAzure Blob وGoogle Drive وKafka وPostgreSQL وSQLite وLanceDB وQdrant وNeo4j وSnowflake وBigQuery.",
          "**خيارات النماذج المحلية.** تضمينات عبر Ollama (nomic-embed-text وmxbai-embed-large وbge-m3 وغيرها) أو sentence-transformers، واستخراج منظَّم باستخدام Llama 3.2 محلي عبر Ollama.",
          "**تتبع الأصل والاستعادة.** يمكن فحص كيفية إنتاج المخرجات؛ وتُعاد محاولة الإخفاقات العابرة وتُستأنف التشغيلات بعد الانقطاع.",
          "**الوضع المباشر.** يمكن لخطوط المعالجة مراقبة المصادر والتحديث باستمرار بدل التحديث على دفعات."
        ],
        "note": "أرقام الأداء في صفحات المطوّر، مثل توفير الرموز أو معدلات إصابة الذاكرة المؤقتة في CocoIndex Code، هي ادعاءات من المطوّر نفسه ولا تُكرَّر هنا."
      },
      "privacy": {
        "id": "privacy",
        "title": "تدفق البيانات والخصوصية",
        "content": [
          "**مع Ollama أو sentence-transformers ووجهة محلية مثل SQLite أو LanceDB، يبقى مسار البيانات الموثق على جهازك.** وإذا اخترت OpenAI أو Gemini أو قاعدة بيانات مستضافة بدلًا من ذلك، فإن نصك يذهب إلى ذلك المزوّد وفق شروطه الخاصة؛ ولا يمنع CocoIndex ذلك.",
          "تذكر صفحة القياس عن بُعد أن نسخ الإصدار ترسل أحداثًا مجهولة (اسم الحدث ونظام التشغيل ومعمارية المعالج وإصدار Python ووسم التطبيق فقط إذا حددته) عبر بوابة Scarf. وتسرد ما لا يُرسل، ومنه بياناتك وشيفرتك ومسارات ملفاتك وبيانات اعتمادك، وتقول إن ضبط COCOINDEX_DISABLE_USAGE_TRACKING على قيمة غير 0 يعطّله."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "هذه أقوال المطوّر وليست نتائج تدقيق. لم تفحص PromptQuorum حركة الشبكة ولا الشيفرة."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "لمن يناسب",
        "items": [
          "**مطورو Python** الذين يعيدون فهرسة مستندات أو شيفرة أو سجلات متغيرة في مخزن متجهات ويريدون تخطي العناصر غير المتغيرة.",
          "**الفرق التي تشغّل Ollama أصلًا** وتريد تضمينات محلية داخل خط معالجة مُصان بدل سكربت لمرة واحدة.",
          "**بناة الوكلاء** الذين يحتاجون إلى فهرس يتتبع المصادر باستمرار ويمكنه الكتابة إلى عدة أنواع من المخازن."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "ما لم نتمكن من التحقق منه",
        "items": [
          "**الأداء.** السرعة واستهلاك الذاكرة والوفورات من التحديثات التزايدية أوصاف من المطوّر ولم تُقَس.",
          "**الجودة.** لم يُختبر ما إذا كانت نماذج التضمين والاستخراج المحلية تعطي نتائج جيدة على بياناتك.",
          "**أسعار Plus.** نسخة CocoIndex Plus مرخّصة، ويعرض الموقع حجز مكالمة ولا ينشر سعرًا، لذلك لا يُذكر هنا أي سعر.",
          "**سلوك Windows.** يذكر التوثيق Windows 10 أو أحدث، لكن لم يُفحص أي اختبار خاص بـ Windows.",
          "**الحد الأدنى للعتاد.** لا يُنشر أي حد أدنى من RAM أو GPU للإطار."
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
            "التطبيق": "[LlamaIndex](/ar/power-local-llm/llamaindex-rag-framework-review)",
            "المنصات": "Mac وWindows وLinux",
            "السعر / الترخيص": "مجاني / MIT",
            "الفرق الرئيسي": "مجموعة أدوات RAG أوسع للاستعلام والوكلاء؛ بينما يركز CocoIndex على إبقاء الفهرس محدّثًا"
          },
          {
            "التطبيق": "[Haystack](/ar/power-local-llm/haystack-deepset-rag-framework-review)",
            "المنصات": "Mac وWindows وLinux",
            "السعر / الترخيص": "مجاني / Apache 2.0",
            "الفرق الرئيسي": "خطوط معالجة صريحة بمكونات للبحث وRAG، مبنية حول مسارات وقت الاستعلام"
          },
          {
            "التطبيق": "[txtai](/ar/power-local-llm/txtai-embedded-vector-database-review)",
            "المنصات": "Mac وWindows وLinux",
            "السعر / الترخيص": "مجاني / Apache 2.0",
            "الفرق الرئيسي": "قاعدة بيانات تضمينات وسير عمل LLM في مكتبة واحدة، بتخزين خاص بها"
          },
          {
            "التطبيق": "[Cognee](/ar/power-local-llm/cognee-review)",
            "المنصات": "استضافة ذاتية",
            "السعر / الترخيص": "مجاني / Apache-2.0",
            "الفرق الرئيسي": "يبني رسوم معرفة وذاكرة للوكلاء بدل مزامنة وجهات عشوائية"
          }
        ],
        "note": "هذه الأدوات تتداخل جزئيًا ويمكن الجمع بينها، مثل تغذية فهرس تستعلم عنه LlamaIndex أو Haystack لاحقًا. تأكد من السعر والترخيص والمنصات الحالية لكل أداة في صفحتها الخاصة قبل الاختيار."
      },
      "faq": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "هل يحتاج CocoIndex إلى خادم قاعدة بيانات؟",
            "a": "ليس لحالته الداخلية، فهي ملف مضمَّن. أما مخزن الوجهة، مثل PostgreSQL مع pgvector أو Qdrant، فاختيار منفصل، وتُذكر SQLite وLanceDB كخيارين قائمين على الملفات."
          },
          {
            "q": "هل CocoIndex هو نفسه CocoIndex Code؟",
            "a": "لا. CocoIndex هو الإطار العام الذي تتناوله هذه المراجعة؛ أما CocoIndex Code فمنتج منفصل للبحث الدلالي في قواعد الشيفرة ويوفر خادم MCP لوكلاء البرمجة."
          },
          {
            "q": "بماذا يختلف CocoIndex عن إصدارات الإصدار 0؟",
            "a": "يذكر ملف المهارة لدى المطوّر أن الإصدار 1 إعادة تصميم كاملة وأن الوكلاء المدرَّبين على الواجهة القديمة يميلون إلى كتابة أسلوب الإصدار 0 المهجور، لذا استخدم التوثيق الحالي."
          },
          {
            "q": "هل يمكنني إيقاف القياس عن بُعد؟",
            "a": "نعم. اضبط متغير البيئة COCOINDEX_DISABLE_USAGE_TRACKING على أي قيمة غير فارغة وغير 0 قبل تشغيل برنامجك، كما تصف صفحة القياس عن بُعد."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الخلاصة",
        "content": "CocoIndex طريقة نشطة التطوير لإبقاء فهارس RAG وسياق الوكلاء محدّثة دون إعادة تضمين كل شيء، ويعرض توثيقه Ollama وsentence-transformers كمسارين محليين. في المقابل، هو إطار خطوط معالجة قائم على الشيفرة وليس تطبيق LLM محليًا، ويعرض التوثيق مزودي السحابة بالسهولة نفسها، ولنسخة Plus المرخّصة سعر غير معلن، ولم تختبر PromptQuorum أيًا من ذلك. يناسب مطوري Python الذين يصونون مجموعات مستندات متغيرة ويقبلون كتابة شيفرة خطوط المعالجة؛ أما للدردشة مع ملفاتك دون برمجة فتطبيق مثل [AnythingLLM](/ar/power-local-llm/anythingllm-review) نقطة بداية أنسب."
      },
      "sources": {
        "id": "sources",
        "title": "المصادر",
        "items": [
          "[موقع CocoIndex](https://cocoindex.io) — نظرة عامة على المنتج ومقارنة النسخ، روجع في 8 نوفمبر 2026.",
          "[توثيق CocoIndex](https://cocoindex.io/docs) — صفحات النظرة العامة والتثبيت والبدء السريع ومسار قاعدة البيانات والتضمين والموصلات، روجعت في 8 نوفمبر 2026.",
          "[صفحة القياس عن بُعد في CocoIndex](https://cocoindex.io/docs/about/telemetry/) — الأحداث المجهولة التي تُرسل وكيفية إيقافها، روجعت في 8 نوفمبر 2026.",
          "[CocoIndex على GitHub](https://github.com/cocoindex-io/cocoindex) — الترخيص وملف README والإصدار 1.1.1، روجع في 8 نوفمبر 2026.",
          "[cocoindex على PyPI](https://pypi.org/project/cocoindex/) — إصدار الحزمة 1.1.1 ومتطلب Python، روجع في 8 نوفمبر 2026.",
          "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/) — شروط الخصوصية لدى الشركة، آخر تحديث في 6 نوفمبر 2026."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[مراجعة LlamaIndex](/ar/power-local-llm/llamaindex-rag-framework-review) — إطار RAG قائم على الشيفرة للاستعلام عن مستنداتك.",
          "[مراجعة txtai](/ar/power-local-llm/txtai-embedded-vector-database-review) — قاعدة بيانات متجهات مضمَّنة مع سير عمل LLM.",
          "[دليل برمجيات النماذج المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "مراجعة CocoIndex: إطار بيانات تزايدي لـ RAG ووكلاء الذكاء الاصطناعي",
      "description": "مراجعة CocoIndex: إطار Python مفتوح المصدر يُبقي فهارس RAG وسياق الوكلاء محدّثة بإعادة معالجة البيانات المتغيرة فقط، مع خيارات Ollama وsentence-transformers. المتطلبات والخصوصية وما تتركه المصادر غير مؤكد.",
      "url": "https://www.promptquorum.com/ar/power-local-llm/cocoindex-review",
      "inLanguage": "ar",
      "datePublished": "2026-11-08",
      "dateModified": "2026-11-08",
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "educationalLevel": "Advanced",
      "proficiencyLevel": "Advanced",
      "audience": {
        "@type": "Audience",
        "audienceType": "مطورو Python الذين يقيّمون إطار خطوط بيانات تزايدي لـ RAG ووكلاء الذكاء الاصطناعي مع خيارات نماذج محلية"
      },
      "about": [
        { "@type": "Thing", "name": "CocoIndex" },
        { "@type": "Thing", "name": "التوليد المعزز بالاسترجاع (RAG)" },
        { "@type": "Thing", "name": "الفهرسة التزايدية" },
        { "@type": "Thing", "name": "Ollama" }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/ar/power-local-llm/cocoindex-review"
      }
    },
    "breadcrumbSchema": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://www.promptquorum.com" },
        { "@type": "ListItem", "position": 2, "name": "Power Local LLM", "item": "https://www.promptquorum.com/ar/power-local-llm" },
        { "@type": "ListItem", "position": 3, "name": "مراجعة CocoIndex", "item": "https://www.promptquorum.com/ar/power-local-llm/cocoindex-review" }
      ]
    }
  },
  ko: {
    "designSkin": "hub",
    "freshness_tier": "semi_annual",
    "publishDate": "2026-11-08",
    "dateModified": "2026-11-08",
    "next_refresh_due": "2027-05-08",
    "theme": "RAG & Document Chat",
    "heroImage": "/images/cocoindex-review-hero-ko.webp",
    "title": "CocoIndex 리뷰: RAG와 AI 에이전트를 위한 증분 데이터 프레임워크",
    "seoTitle": "CocoIndex 리뷰: 증분 RAG 데이터 프레임워크",
    "intro": "CocoIndex는 Rust 엔진 위에서 동작하는 오픈소스 Python 프레임워크로, 변경된 부분만 다시 처리해 벡터 인덱스, 테이블, 지식 그래프를 원본 데이터와 동기화합니다. 채팅 앱이나 모델 런타임이 아니라 RAG 시스템과 AI 에이전트에 데이터를 공급하는 파이프라인 계층입니다. 로컬 모델 측면에서는 임베딩과 추출을 Ollama 또는 sentence-transformers로 사용자 기기에서 실행할 수 있습니다. 이 리뷰는 [cocoindex.io](https://cocoindex.io), [공식 문서](https://cocoindex.io/docs), [GitHub 저장소](https://github.com/cocoindex-io/cocoindex)를 2026년 11월 8일에 확인한 내용을 바탕으로 하며, PromptQuorum은 CocoIndex를 직접 테스트하지 않았습니다.",
    "metaDescription": "CocoIndex 리뷰: 변경된 데이터만 다시 임베딩하는 오픈소스(Apache 2.0) Python 프레임워크. Ollama와 로컬 임베딩 지원. 직접 테스트하지 않음.",
    "twitterDescription": "CocoIndex 리뷰: RAG와 AI 에이전트를 위한 증분 데이터 파이프라인 프레임워크. Ollama로 로컬 실행이 가능한 범위, 코드가 필요한 부분, 출처가 남겨 둔 내용.",
    "audience": "계속 바뀌는 파일을 대상으로 RAG나 에이전트 파이프라인을 운영하는 Python 개발자로, CocoIndex가 무엇을 하는지, 무엇이 필요한지, 어디까지 자체 기기에서 처리할 수 있는지 알고 싶은 분.",
    "readTime": "6분 읽기",
    "educationalLevel": "Advanced",
    "affiliateDisclosure": false,
    "primaryTerm": "CocoIndex 리뷰",
    "targetKeywords": [
      "cocoindex 리뷰",
      "cocoindex ollama",
      "cocoindex 증분 인덱싱",
      "cocoindex vs llamaindex",
      "cocoindex rag",
      "cocoindex 로컬 임베딩",
      "cocoindex 설치"
    ],
    "current_models_mentioned": [
      "nomic-embed-text",
      "bge-m3",
      "Llama 3.2"
    ],
    "current_hardware_mentioned": [],
    "leadAnswerBlock": "**CocoIndex(버전 1.1.1, 2026년 11월 5일 출시)는 변경된 입력만 다시 처리해 벡터 인덱스와 기타 AI 데이터 저장소를 최신 상태로 유지하는 무료 오픈소스(Apache 2.0) Python 프레임워크입니다.** RAG와 에이전트 뒤에서 데이터 파이프라인을 구성하며, 대화 기능이나 모델은 제공하지 않습니다.",
    "quickAnswerTop": {
      "ko": {
        "question": "CocoIndex를 Ollama로 완전히 로컬에서 실행할 수 있습니까?",
        "answer": "그렇게 설정하면 가능합니다. 문서에 따르면 임베딩은 nomic-embed-text 같은 Ollama 모델이나 sentence-transformers로, 추출은 Ollama의 로컬 Llama 3.2로 처리할 수 있고, 자체 상태는 내장 파일에 저장되므로 서버가 필요하지 않습니다.",
        "bullets": [
          "pip install -U cocoindex로 설치하며, 문서에는 Python 3.11에서 3.13까지가 명시되어 있습니다.",
          "파이프라인은 짧은 Python 파일이며 시각적 빌더는 없습니다.",
          "대상 저장소로는 SQLite, LanceDB, pgvector를 사용하는 PostgreSQL, Qdrant 등이 있습니다.",
          "클라우드 키와 호스팅 커넥터도 똑같이 눈에 띄게 문서화되어 있으므로 로컬 사용은 기본값이 아니라 선택입니다."
        ],
        "updatedDate": "2026-11-08"
      }
    },
    "toc": [
      { "label": "빠른 답변", "anchor": "quick-answer" },
      { "label": "CocoIndex란?", "anchor": "what-is-cocoindex" },
      { "label": "설치 방법", "anchor": "get-it" },
      { "label": "요구 사항", "anchor": "requirements" },
      { "label": "시작하는 방법", "anchor": "getting-started" },
      { "label": "출처가 확인한 기능", "anchor": "key-features" },
      { "label": "데이터 흐름과 개인정보", "anchor": "privacy" },
      { "label": "이런 분께 적합합니다", "anchor": "who-should-use" },
      { "label": "확인하지 못한 내용", "anchor": "who-should-not-use" },
      { "label": "경쟁 앱과 대안", "anchor": "vs-alternatives" },
      { "label": "자주 묻는 질문", "anchor": "faq" },
      { "label": "총평", "anchor": "verdict" },
      { "label": "출처", "anchor": "sources" },
      { "label": "관련 글", "anchor": "related-reading" }
    ],
    "sections": {
      "tldr": {
        "id": "tldr",
        "title": "핵심 내용",
        "isTldr": true,
        "snippetBlocks": [
          {
            "type": "one-sentence",
            "text": "CocoIndex는 변경된 데이터와 코드 경로만 다시 계산해 RAG 인덱스와 에이전트 컨텍스트를 최신 상태로 유지하는 오픈소스 Python 프레임워크입니다."
          },
          {
            "type": "plain-terms",
            "text": "인덱스에 담을 내용을 짧은 Python 코드로 기술하면 CocoIndex가 이전 결과를 기억해 두었다가, 파일이나 코드가 바뀌었을 때 영향을 받은 행만 갱신합니다."
          }
        ],
        "items": [
          "유지보수: 메인 브랜치의 최신 커밋은 2026년 11월 8일, 최신 릴리스 1.1.1은 2026년 11월 5일이므로 방치된 프로젝트 경고는 해당하지 않습니다.",
          "범위: 개발자를 위한 파이프라인 프레임워크이며 앱이 아닙니다. 채팅 창도, 모델도 포함되어 있지 않습니다.",
          "로컬 사용: Ollama, sentence-transformers, 로컬 대상 저장소가 문서화되어 있지만 같은 페이지에 클라우드 제공업체도 나와 있으므로 개인정보 보호 수준은 설정에 달려 있습니다.",
          "비용: 코어는 무료이며, 팀을 위한 별도의 유료 라이선스 에디션 CocoIndex Plus가 있으나 가격은 공개되지 않았습니다.",
          "텔레메트리: 릴리스 빌드는 환경 변수로 거부하지 않는 한 익명 사용 이벤트를 전송합니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이 리뷰는 CocoIndex 웹사이트, 문서, GitHub 저장소, PyPI를 2026년 11월 8일에 확인한 내용을 바탕으로 합니다. PromptQuorum은 CocoIndex를 설치하거나 실행하지 않았으므로 속도, 메모리 사용량, 결과 품질은 평가하지 않았습니다."
          }
        ]
      },
      "overview": {
        "id": "what-is-cocoindex",
        "title": "CocoIndex란?",
        "content": [
          "**CocoIndex는 변화하는 원본을 AI에 쓸 수 있는 데이터로 바꾸고 그 데이터를 최신으로 유지하는 데이터 파이프라인 프레임워크입니다.** 스프레드시트 수식이나 React 컴포넌트처럼, 대상이 원본의 함수로서 어떤 모습이어야 하는지를 선언하면 엔진이 어느 부분을 다시 계산할지 판단합니다. 문서에 언급된 원본에는 로컬 폴더, Amazon S3, Google Drive, Kafka, 데이터베이스가 있고, 대상에는 벡터 데이터베이스, 관계형 데이터베이스, 그래프 데이터베이스가 있습니다. 제작사는 웹사이트에 회사로 명시된 CocoIndex Inc입니다.",
          "**엔진은 Rust로, 파이프라인은 Python으로 작성합니다.** 원본 항목, 함수 호출, 대상 행의 세 단계에서 이전 결과를 기억하므로 수정된 문서는 다시 파싱하고 다시 임베딩하며 변경되지 않은 문서는 건너뜁니다. 함수의 코드가 바뀌면 해당 작업도 다시 실행합니다. 별도 제품인 CocoIndex Code는 같은 방식을 코딩 에이전트용 코드베이스에 적용하며 여기서는 다루지 않습니다."
        ]
      },
      "getIt": {
        "id": "get-it",
        "title": "설치 방법",
        "content": [
          "**CocoIndex는 Python 패키지입니다. 명령 한 줄로 설치한 뒤 파이프라인 파일을 작성합니다.** 다운로드하는 데스크톱 앱이 아니므로 설치 프로그램은 없습니다."
        ],
        "columns": [
          "옵션",
          "입수 방법"
        ],
        "rows": [
          {
            "옵션": "pip",
            "입수 방법": "[PyPI](https://pypi.org/project/cocoindex/)에서 `pip install -U cocoindex`"
          },
          {
            "옵션": "uv 또는 Poetry",
            "입수 방법": "[설치 가이드](https://cocoindex.io/docs/getting_started/installation/)에 따라 `uv add cocoindex` 또는 `poetry add cocoindex`"
          },
          {
            "옵션": "퀵스타트",
            "입수 방법": "`pip install docling`도 필요한 PDF-Markdown 변환 파이프라인: [퀵스타트](https://cocoindex.io/docs/getting_started/quickstart/)"
          },
          {
            "옵션": "웹사이트",
            "입수 방법": "[cocoindex.io](https://cocoindex.io)"
          },
          {
            "옵션": "문서",
            "입수 방법": "[cocoindex.io/docs](https://cocoindex.io/docs)"
          },
          {
            "옵션": "개인정보처리방침",
            "입수 방법": "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/), 페이지에 따르면 최종 업데이트는 2026년 11월 6일"
          },
          {
            "옵션": "소스 코드",
            "입수 방법": "[github.com/cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex), Apache 2.0"
          }
        ],
        "note": "확인한 버전: 1.1.1(2026년 11월 5일 출시). 터미널과 Python 환경이 필요하며 그래픽 설치 프로그램은 없습니다. 팀용 CocoIndex Plus 에디션은 라이선스 키로 별도 설치합니다."
      },
      "requirements": {
        "id": "requirements",
        "itemHeadings": true,
        "title": "요구 사항",
        "content": [
          "**문서는 Python 3.11에서 3.13까지를 요구하며 세 가지 운영체제를 명시합니다.** 프레임워크 자체의 RAM이나 GPU 최소 사양은 공개되어 있지 않습니다."
        ],
        "columns": [
          "항목",
          "출처의 기재 내용"
        ],
        "rows": [
          {
            "항목": "Python",
            "출처의 기재 내용": "설치 가이드에는 3.11에서 3.13까지, PyPI 메타데이터는 3.11 이상을 요구합니다"
          },
          {
            "항목": "macOS",
            "출처의 기재 내용": "Intel은 10.12 이상, Apple Silicon은 11.0 이상"
          },
          {
            "항목": "Linux",
            "출처의 기재 내용": "glibc 2.28 이상의 x86_64 또는 arm64, 예를 들면 Debian 10이나 Ubuntu 18.10"
          },
          {
            "항목": "Windows",
            "출처의 기재 내용": "x86_64의 Windows 10 이상"
          },
          {
            "항목": "데이터베이스",
            "출처의 기재 내용": "CocoIndex 자체에는 필요 없습니다. 상태는 COCOINDEX_DB로 경로를 지정하는 내장 LMDB 파일에 저장되며, Postgres 같은 대상 저장소는 별도입니다"
          },
          {
            "항목": "모델",
            "출처의 기재 내용": "설정하는 대로입니다. Ollama를 쓰려면 로컬에서 Ollama를 실행하고 각 모델을 먼저 내려받아야 합니다"
          }
        ],
        "note": "따라서 하드웨어 요구 사항은 CocoIndex가 아니라 선택하는 임베딩 모델과 언어 모델에 따라 달라집니다."
      },
      "gettingStarted": {
        "id": "getting-started",
        "title": "시작하는 방법",
        "content": [
          "**아래 단계는 문서의 퀵스타트와 임베딩 페이지를 따른 것이며 PromptQuorum이 직접 실행해 보지는 않았습니다.**"
        ],
        "numberedItems": [
          {
            "title": "패키지 설치",
            "whyItMatters": "Python 3.11에서 3.13 환경에서 pip install -U cocoindex를 실행하고, PDF용 docling처럼 필요한 파서를 함께 설치합니다."
          },
          {
            "title": "상태 데이터베이스 경로 설정",
            "whyItMatters": ".env 파일을 만들어 COCOINDEX_DB=./cocoindex.db를 넣으면 CocoIndex가 이전 실행 기록을 저장할 로컬 파일을 갖게 됩니다."
          },
          {
            "title": "파이프라인 선언",
            "whyItMatters": "원본 폴더를 읽고 각 파일을 일반 함수로 처리하며 대상이 담아야 할 행이나 파일을 선언하는 Python 앱을 작성합니다."
          },
          {
            "title": "로컬 모델 선택",
            "whyItMatters": "기기에서 임베딩을 실행하려면 Ollama를 시작하고 ollama pull nomic-embed-text를 실행한 뒤 LiteLLM 임베더가 이를 가리키게 하거나, 대신 sentence-transformers 임베더를 사용합니다."
          },
          {
            "title": "실행과 재실행",
            "whyItMatters": "cocoindex update main.py를 실행하고 원본 파일을 수정한 뒤 다시 실행합니다. 문서에 따르면 영향을 받은 파일만 다시 처리됩니다."
          }
        ]
      },
      "features": {
        "id": "key-features",
        "title": "출처가 확인한 기능",
        "content": [
          "**아래 항목은 모두 웹사이트, 문서, 저장소에서 가져온 것이며, 여기서 직접 테스트한 것은 없습니다.**"
        ],
        "items": [
          "**증분 처리.** 컴포넌트, 함수, 대상 단계의 변경 감지와 메모이제이션, 코드 변경 추적.",
          "**커넥터.** 문서에 나열된 원본과 대상에는 로컬 파일, Amazon S3, Azure Blob, Google Drive, Kafka, PostgreSQL, SQLite, LanceDB, Qdrant, Neo4j, Snowflake, BigQuery가 있습니다.",
          "**로컬 모델 옵션.** Ollama(nomic-embed-text, mxbai-embed-large, bge-m3 등) 또는 sentence-transformers를 통한 임베딩, Ollama의 로컬 Llama 3.2를 통한 구조화된 추출.",
          "**계보와 복구.** 출력이 어떻게 만들어졌는지 확인할 수 있으며, 일시적 오류는 재시도하고 중단된 실행은 이어서 진행합니다.",
          "**라이브 모드.** 파이프라인이 원본을 지켜보다가 일괄 처리 대신 지속적으로 갱신할 수 있습니다."
        ],
        "note": "CocoIndex Code의 토큰 절감이나 캐시 적중률처럼 제작사 페이지에 나온 성능 수치는 제작사의 주장이므로 여기에 옮기지 않았습니다."
      },
      "privacy": {
        "id": "privacy",
        "title": "데이터 흐름과 개인정보",
        "content": [
          "**Ollama나 sentence-transformers와 SQLite, LanceDB 같은 로컬 대상 저장소를 쓰면 문서화된 데이터 경로는 사용자의 기기 안에 머뭅니다.** OpenAI, Gemini, 호스팅 데이터베이스를 선택하면 텍스트가 해당 제공업체의 약관에 따라 그쪽으로 전송되며, CocoIndex가 이를 막지는 않습니다.",
          "텔레메트리 페이지에 따르면 릴리스 빌드는 이벤트 이름, 운영체제와 CPU 아키텍처, Python 버전, 사용자가 설정한 경우에만 애플리케이션 태그로 이루어진 익명 이벤트를 Scarf 게이트웨이를 통해 전송합니다. 사용자의 데이터, 코드, 파일 경로, 자격 증명은 전송하지 않는다고 명시하며, COCOINDEX_DISABLE_USAGE_TRACKING을 0이 아닌 값으로 설정하면 꺼진다고 설명합니다."
        ],
        "callouts": [
          {
            "type": "note",
            "text": "이는 제작사의 설명이며 감사 결과가 아닙니다. PromptQuorum은 네트워크 트래픽이나 코드를 검사하지 않았습니다."
          }
        ]
      },
      "whoShouldUse": {
        "id": "who-should-use",
        "title": "이런 분께 적합합니다",
        "items": [
          "**Python 개발자** 중 계속 바뀌는 문서, 코드, 레코드를 벡터 저장소에 다시 인덱싱하면서 변경되지 않은 항목은 건너뛰고 싶은 분.",
          "**이미 Ollama를 쓰는 팀** 중 일회용 스크립트가 아니라 관리되는 파이프라인 안에서 로컬 임베딩을 쓰고 싶은 분.",
          "**에이전트 개발자** 중 원본을 지속적으로 추적하고 여러 종류의 저장소에 쓸 수 있는 인덱스가 필요한 분."
        ]
      },
      "whoShouldNotUse": {
        "id": "who-should-not-use",
        "title": "확인하지 못한 내용",
        "items": [
          "**성능.** 속도, 메모리 사용량, 증분 업데이트로 얻는 절감 효과는 제작사의 설명이며 측정하지 않았습니다.",
          "**품질.** 로컬 임베딩 모델과 추출 모델이 사용자의 데이터에서 좋은 결과를 내는지는 테스트하지 않았습니다.",
          "**Plus 가격.** CocoIndex Plus는 유료 라이선스이고 웹사이트는 상담 예약만 안내하며 가격은 공개되어 있지 않아 여기에는 가격을 적지 않았습니다.",
          "**Windows 동작.** 문서에는 Windows 10 이상이 나와 있지만 Windows 전용 테스트는 확인하지 못했습니다.",
          "**하드웨어 하한.** 프레임워크의 RAM이나 GPU 최소 사양은 공개되어 있지 않습니다."
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
            "앱": "[LlamaIndex](/ko/power-local-llm/llamaindex-rag-framework-review)",
            "플랫폼": "Mac, Windows, Linux",
            "가격 / 라이선스": "무료 / MIT",
            "핵심 차이": "질의와 에이전트를 위한 더 폭넓은 RAG 툴킷이며, CocoIndex는 인덱스를 최신으로 유지하는 데 집중합니다"
          },
          {
            "앱": "[Haystack](/ko/power-local-llm/haystack-deepset-rag-framework-review)",
            "플랫폼": "Mac, Windows, Linux",
            "가격 / 라이선스": "무료 / Apache 2.0",
            "핵심 차이": "질의 시점의 흐름을 중심으로 한 검색·RAG용 명시적 컴포넌트 파이프라인"
          },
          {
            "앱": "[txtai](/ko/power-local-llm/txtai-embedded-vector-database-review)",
            "플랫폼": "Mac, Windows, Linux",
            "가격 / 라이선스": "무료 / Apache 2.0",
            "핵심 차이": "임베딩 데이터베이스와 LLM 워크플로를 자체 저장소와 함께 하나의 라이브러리로 제공"
          },
          {
            "앱": "[Cognee](/ko/power-local-llm/cognee-review)",
            "플랫폼": "자체 호스팅",
            "가격 / 라이선스": "무료 / Apache-2.0",
            "핵심 차이": "임의의 대상과 동기화하기보다 에이전트용 지식 그래프와 메모리를 구축"
          }
        ],
        "note": "이 도구들은 일부 겹치며 함께 쓸 수도 있습니다. 예를 들어 CocoIndex가 채운 인덱스를 LlamaIndex나 Haystack이 질의할 수 있습니다. 선택하기 전에 각 도구의 최신 가격, 라이선스, 지원 플랫폼을 해당 페이지에서 확인하세요."
      },
      "faq": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "CocoIndex에 데이터베이스 서버가 필요합니까?",
            "a": "자체 상태에는 필요하지 않으며 내장 파일에 저장됩니다. pgvector를 사용하는 PostgreSQL이나 Qdrant 같은 대상 저장소는 별도로 선택하며, SQLite와 LanceDB는 파일 기반 옵션으로 나열되어 있습니다."
          },
          {
            "q": "CocoIndex와 CocoIndex Code는 같은 제품입니까?",
            "a": "아니요. CocoIndex는 여기서 리뷰한 범용 프레임워크이고, CocoIndex Code는 코드베이스의 시맨틱 검색을 위한 별도 제품으로 코딩 에이전트용 MCP 서버를 제공합니다."
          },
          {
            "q": "CocoIndex는 버전 0 릴리스와 어떻게 다릅니까?",
            "a": "제작사의 스킬 파일은 버전 1이 처음부터 다시 설계된 것이며, 이전 API로 학습한 에이전트는 폐기된 버전 0 방식으로 코드를 작성하는 경향이 있다고 밝히므로 최신 문서를 사용해야 합니다."
          },
          {
            "q": "텔레메트리를 끌 수 있습니까?",
            "a": "예. 텔레메트리 페이지의 설명대로 프로그램을 시작하기 전에 환경 변수 COCOINDEX_DISABLE_USAGE_TRACKING을 0이 아닌 비어 있지 않은 값으로 설정합니다."
          }
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "총평",
        "content": "CocoIndex는 모든 것을 다시 임베딩하지 않고 RAG 인덱스와 에이전트 컨텍스트를 최신으로 유지하는, 활발히 개발되는 방법이며 문서는 Ollama와 sentence-transformers를 로컬 경로로 보여 줍니다. 반면 로컬 LLM 앱이 아니라 코드 중심의 파이프라인 프레임워크이고, 문서는 클라우드 제공업체도 로컬만큼 쉽게 보여 주며, 유료 Plus 에디션은 가격이 공개되지 않았고, PromptQuorum은 이 중 아무것도 테스트하지 않았습니다. 바뀌는 문서 집합을 관리하며 파이프라인 코드를 작성하는 것을 받아들일 수 있는 Python 개발자에게 맞습니다. 프로그래밍 없이 파일과 대화하려는 경우에는 [AnythingLLM](/ko/power-local-llm/anythingllm-review) 같은 앱이 더 나은 출발점입니다."
      },
      "sources": {
        "id": "sources",
        "title": "출처",
        "items": [
          "[CocoIndex 웹사이트](https://cocoindex.io) — 제품 개요와 에디션 비교, 2026년 11월 8일 확인.",
          "[CocoIndex 문서](https://cocoindex.io/docs) — 개요, 설치, 퀵스타트, 데이터베이스 경로, 임베딩과 커넥터 페이지, 2026년 11월 8일 확인.",
          "[CocoIndex 텔레메트리 페이지](https://cocoindex.io/docs/about/telemetry/) — 전송되는 익명 이벤트와 거부 방법, 2026년 11월 8일 확인.",
          "[GitHub의 CocoIndex](https://github.com/cocoindex-io/cocoindex) — 라이선스, README, 릴리스 1.1.1, 2026년 11월 8일 확인.",
          "[PyPI의 cocoindex](https://pypi.org/project/cocoindex/) — 패키지 버전 1.1.1과 Python 요구 사항, 2026년 11월 8일 확인.",
          "[CocoIndex Privacy Policy](https://cocoindex.io/privacy-policy/) — 회사의 개인정보 조건, 2026년 11월 6일 최종 업데이트."
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[LlamaIndex 리뷰](/ko/power-local-llm/llamaindex-rag-framework-review) — 문서를 질의하기 위한 코드 중심 RAG 프레임워크.",
          "[txtai 리뷰](/ko/power-local-llm/txtai-embedded-vector-database-review) — LLM 워크플로를 갖춘 내장형 벡터 데이터베이스.",
          "[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 목록."
        ]
      }
    },
    "schema": {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "CocoIndex 리뷰: RAG와 AI 에이전트를 위한 증분 데이터 프레임워크",
      "description": "CocoIndex 리뷰: 변경된 데이터만 다시 처리해 RAG 인덱스와 에이전트 컨텍스트를 최신으로 유지하는 오픈소스 Python 프레임워크. Ollama와 sentence-transformers 옵션, 요구 사항, 개인정보, 출처가 확인하지 못한 내용.",
      "url": "https://www.promptquorum.com/ko/power-local-llm/cocoindex-review",
      "inLanguage": "ko",
      "datePublished": "2026-11-08",
      "dateModified": "2026-11-08",
      "publisher": {
        "@type": "Organization",
        "name": "PromptQuorum",
        "url": "https://www.promptquorum.com"
      },
      "educationalLevel": "Advanced",
      "proficiencyLevel": "Advanced",
      "audience": {
        "@type": "Audience",
        "audienceType": "로컬 모델 옵션을 갖춘 RAG와 AI 에이전트용 증분 데이터 파이프라인 프레임워크를 검토하는 Python 개발자"
      },
      "about": [
        { "@type": "Thing", "name": "CocoIndex" },
        { "@type": "Thing", "name": "검색 증강 생성(RAG)" },
        { "@type": "Thing", "name": "증분 인덱싱" },
        { "@type": "Thing", "name": "Ollama" }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.promptquorum.com/ko/power-local-llm/cocoindex-review"
      }
    },
    "breadcrumbSchema": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.promptquorum.com" },
        { "@type": "ListItem", "position": 2, "name": "Power Local LLM", "item": "https://www.promptquorum.com/ko/power-local-llm" },
        { "@type": "ListItem", "position": 3, "name": "CocoIndex 리뷰", "item": "https://www.promptquorum.com/ko/power-local-llm/cocoindex-review" }
      ]
    }
  },
}
