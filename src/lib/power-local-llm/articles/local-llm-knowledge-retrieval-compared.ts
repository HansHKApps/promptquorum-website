// Local Knowledge & Retrieval Tools Compared: RAG frameworks, document chat, vector databases, notes and search
// Slug: local-llm-knowledge-retrieval-compared
// Category comparison guide for the `knowledge-retrieval` group. The comparison table is NOT written here:
// it is generated from the tool records (src/lib/power-local-llm/apps/*.ts) by the section whose
// `component` is 'CategoryCompareTable', so this article can never contradict the tool data.
// The per-attribute lists below were generated from those records (each value verified against the
// project's official README/site) and must also hold in each tool's own review (see docs/PAGE_UPDATER.md
// Step 4.5, category<->review rule). Keep the locale blocks structurally identical to `en`.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'RAG & Document Chat',
    title: 'Local Knowledge & Retrieval Tools Compared (2026): RAG, Document Chat, Vector Databases, Notes and Search',
    seoTitle: 'Local RAG, Document Chat & Vector DBs Compared 2026',
    intro:
      'Tools that let a local model work with your own documents fall into five different kinds — RAG frameworks and pipelines, document and PDF chat apps, vector databases, notes-app integrations, and local search and research tools — and no single feature list compares them fairly. This guide compares 40 free and freemium tools, one kind at a time, using a comparison table generated from the same data as each tool\'s own PromptQuorum review, so the table and the reviews cannot disagree.',
    metaDescription:
      'Compare 40 local knowledge and retrieval tools side by side: RAG frameworks, document chat, vector databases (Chroma, Milvus, Qdrant, Weaviate), notes plugins and search. Licenses, local LLM support, Docker, API, from official docs.',
    twitterDescription:
      'Local RAG frameworks, document chat apps, vector databases, notes plugins and search tools compared by kind — local LLM support, Docker, API, hybrid search — from official documentation.',
    audience:
      'Developers, self-hosters and privacy-conscious users choosing tools to run retrieval-augmented generation, document chat, vector search or AI notes locally, who want the differences laid out per kind of tool, not one blended list.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local RAG tools compared',
    targetKeywords: [
      'local rag comparison',
      'chat with pdf locally',
      'chroma vs qdrant vs weaviate',
      'best local document chat',
      'obsidian ai plugins local',
      'self hosted rag framework',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**The 40 local knowledge and retrieval tools in the PromptQuorum directory split into five kinds that should be compared separately: RAG frameworks and pipelines (13 tools), document and PDF chat apps (12), notes-app integrations (10), local search and research tools (7) and vector databases (4).** Among the vector databases, 3 of 4 document hybrid search and 4 of 4 document metadata filtering; among RAG frameworks, 4 document a visual builder and 9 document local-LLM support. Use the comparison table below, and read each tool\'s own review before you install it.',
    quickAnswerTop: {
      en: {
        question: 'Which local RAG or document-chat tool should I use?',
        answer:
          'It depends on the kind of tool, so compare within one kind at a time. Pick by the constraint that matters most — working with local LLMs, Docker or self-hosting, an API, hybrid search, a visual builder, or which notes app you already use — and use the table below, which is generated from each tool\'s official documentation.',
        bullets: [
          'RAG frameworks: 13 tools compared on visual builder, local LLMs, agents, vector stores, Docker and API.',
          'Document and PDF chat: 12 tools compared on local LLMs, document formats, citations, desktop app, Docker and API.',
          'Vector databases: 4 tools compared on hybrid search, metadata filtering, clustering, Docker and managed cloud.',
          'Notes integrations: 10 tools compared on which notes app, local LLMs, semantic search and chat with notes.',
          'Local search and research: 7 tools compared on local LLMs, web search, your own files and citations.',
          'A dash (—) means the project\'s documentation does not state it, not that the feature is missing.',
        ],
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'How We Compared', anchor: 'how-we-compared' },
      { label: 'Comparison Table', anchor: 'comparison-table' },
      { label: 'RAG Frameworks: What Differs', anchor: 'rag-differences' },
      { label: 'Document and PDF Chat: What Differs', anchor: 'doc-differences' },
      { label: 'Vector Databases: What Differs', anchor: 'vector-differences' },
      { label: 'Notes Integrations: What Differs', anchor: 'notes-differences' },
      { label: 'Local Search and Research: What Differs', anchor: 'search-differences' },
      { label: 'What This Comparison Cannot Tell You', anchor: 'limitations' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Tools that let a local model work with your own documents are five different kinds — RAG frameworks, document chat apps, vector databases, notes integrations and local search — so the 40 tools in the PromptQuorum directory are compared within each kind, using a table generated from the same tool data as each tool\'s own review.',
          },
          {
            type: 'plain-terms',
            text: 'Some tools are building blocks for developers, some are ready-made apps for chatting with your files, some store the vectors that make search work, and some plug into a notes app you already use. Comparing a database with a notes plugin on the same features makes no sense, so this guide compares like with like.',
          },
        ],
        items: [
          '40 tools, five kinds: RAG frameworks and pipelines (13), document and PDF chat apps (12), notes-app integrations (10), local search and research tools (7) and vector databases (4). Several tools, such as Onyx, Karakeep and Surf, belong to more than one kind and appear in each.',
          'The table is generated from each tool\'s record and checked against its official README or site; a dash means "not stated in the documentation", never "no".',
          'GitHub marks the Flowise and h2oGPT repositories as archived (read-only) at the time of writing; check their reviews for the current status before you build on them.',
          'Every tool name in the table links to its own PromptQuorum review, which is where installation steps and limits are covered.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'How We Compared',
        content: [
          'Each tool\'s facts — price, license, platforms, hardware needs and category-specific attributes — are stored once, in that tool\'s directory record. The comparison table below is generated from those records, and the tool\'s own review draws on the same record, so the two cannot state different values.',
          'Category-specific attributes (for example local-LLM support or hybrid search) were taken from each project\'s official README or website and checked against the exact wording there. Where the documentation is silent, the table shows a dash rather than guessing; where a claim is qualified (roadmap only, an enterprise edition, a companion project, or a paid tier), the attribute is left out of the table and covered in the tool\'s review instead.',
          'Only tools with their own PromptQuorum review are in the table. The comparison lists tools that run on your own hardware or that you self-host; it does not rank them, because the right one depends on your constraint.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comparison Table',
        content: 'Choose a kind of tool below, then read across a row. Click a tool name to open its full PromptQuorum review.',
        component: 'CategoryCompareTable',
      },
      ragDifferences: {
        id: 'rag-differences',
        title: 'RAG Frameworks: What Differs',
        items: [
          '**Visual builder.** [Dify](/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langflow](/power-local-llm/langflow-visual-ai-orchestration-review) and [Self-hosted AI Starter Kit](/power-local-llm/self-hosted-ai-starter-kit-review) document a visual or drag-and-drop workflow builder.',
          '**Local LLMs.** [cognee](/power-local-llm/cognee-review), [Haystack](/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/power-local-llm/langchain-chatchat-review), [LlamaIndex](/power-local-llm/llamaindex-rag-framework-review), [MaxKB](/power-local-llm/maxkb-review), [Onyx](/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/power-local-llm/self-hosted-ai-starter-kit-review), [txtai](/power-local-llm/txtai-embedded-vector-database-review) and [Vane (formerly Perplexica)](/power-local-llm/vane-review) document working with local LLMs.',
          '**Agents.** [Dify](/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/power-local-llm/flowise-ai-visual-workflow-builder-review), [Haystack](/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/power-local-llm/langchain-chatchat-review), [Langflow](/power-local-llm/langflow-visual-ai-orchestration-review), [LlamaIndex](/power-local-llm/llamaindex-rag-framework-review), [LongMemory](/power-local-llm/longmemory-review), [MaxKB](/power-local-llm/maxkb-review), [Onyx](/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/power-local-llm/self-hosted-ai-starter-kit-review) and [txtai](/power-local-llm/txtai-embedded-vector-database-review) document agent support.',
          '**Several vector stores.** [Flowise](/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langchain-Chatchat](/power-local-llm/langchain-chatchat-review), [Langflow](/power-local-llm/langflow-visual-ai-orchestration-review) and [LlamaIndex](/power-local-llm/llamaindex-rag-framework-review) document integrations with several vector stores.',
          '**Docker and self-hosting.** [cognee](/power-local-llm/cognee-review), [Dify](/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/power-local-llm/flowise-ai-visual-workflow-builder-review), [Haystack](/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/power-local-llm/langchain-chatchat-review), [Langflow](/power-local-llm/langflow-visual-ai-orchestration-review), [LongMemory](/power-local-llm/longmemory-review), [MaxKB](/power-local-llm/maxkb-review), [Onyx](/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/power-local-llm/self-hosted-ai-starter-kit-review), [txtai](/power-local-llm/txtai-embedded-vector-database-review) and [Vane (formerly Perplexica)](/power-local-llm/vane-review) document Docker or self-hosted deployment.',
          '**API.** [cognee](/power-local-llm/cognee-review), [Dify](/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langchain-Chatchat](/power-local-llm/langchain-chatchat-review), [Langflow](/power-local-llm/langflow-visual-ai-orchestration-review), [LongMemory](/power-local-llm/longmemory-review), [Onyx](/power-local-llm/onyx-review), [txtai](/power-local-llm/txtai-embedded-vector-database-review) and [Vane (formerly Perplexica)](/power-local-llm/vane-review) document an HTTP or REST API.',
        ],
      },
      docDifferences: {
        id: 'doc-differences',
        title: 'Document and PDF Chat: What Differs',
        items: [
          '**Local LLMs.** [AnythingLLM](/power-local-llm/anythingllm-review), [h2oGPT](/power-local-llm/h2ogpt-review), [Khoj](/power-local-llm/khoj-ai-second-brain-review), [Langchain-Chatchat](/power-local-llm/langchain-chatchat-review), [PrivateGPT](/power-local-llm/privategpt-review), [Quivr](/power-local-llm/quivr-self-hosted-knowledge-assistant-review), [Sidekick](/power-local-llm/sidekick-review) and [Surf](/power-local-llm/surf-review) document working with local LLMs.',
          '**Document formats.** [AnythingLLM](/power-local-llm/anythingllm-review), [h2oGPT](/power-local-llm/h2ogpt-review), [Khoj](/power-local-llm/khoj-ai-second-brain-review), [PrivateGPT](/power-local-llm/privategpt-review), [Quivr](/power-local-llm/quivr-self-hosted-knowledge-assistant-review) and [RAGFlow](/power-local-llm/ragflow-document-understanding-rag-review) document several supported file formats.',
          '**Citations.** [AnythingLLM](/power-local-llm/anythingllm-review), [PrivateGPT](/power-local-llm/privategpt-review), [RAGFlow](/power-local-llm/ragflow-document-understanding-rag-review), [Sidekick](/power-local-llm/sidekick-review) and [Surf](/power-local-llm/surf-review) document citing sources in answers.',
          '**Desktop app.** [AnythingLLM](/power-local-llm/anythingllm-review), [Khoj](/power-local-llm/khoj-ai-second-brain-review) and [Surf](/power-local-llm/surf-review) document an installable desktop app.',
          '**Docker and self-hosting.** [AnythingLLM](/power-local-llm/anythingllm-review), [h2oGPT](/power-local-llm/h2ogpt-review), [Langchain-Chatchat](/power-local-llm/langchain-chatchat-review), [PrivateGPT](/power-local-llm/privategpt-review) and [RAGFlow](/power-local-llm/ragflow-document-understanding-rag-review) document Docker or self-hosted deployment.',
          '**API.** [AnythingLLM](/power-local-llm/anythingllm-review), [h2oGPT](/power-local-llm/h2ogpt-review), [Langchain-Chatchat](/power-local-llm/langchain-chatchat-review), [PrivateGPT](/power-local-llm/privategpt-review), [RAGFlow](/power-local-llm/ragflow-document-understanding-rag-review) and [ToolNeuron](/power-local-llm/toolneuron-review) document an API.',
        ],
      },
      vectorDifferences: {
        id: 'vector-differences',
        title: 'Vector Databases: What Differs',
        items: [
          '**Hybrid search.** [Milvus](/power-local-llm/milvus-review), [Qdrant](/power-local-llm/qdrant-review) and [Weaviate](/power-local-llm/weaviate-review) document hybrid keyword and vector search.',
          '**Metadata filtering.** [Chroma](/power-local-llm/chroma-review), [Milvus](/power-local-llm/milvus-review), [Qdrant](/power-local-llm/qdrant-review) and [Weaviate](/power-local-llm/weaviate-review) document filtering by metadata.',
          '**Distributed deployment.** [Milvus](/power-local-llm/milvus-review), [Qdrant](/power-local-llm/qdrant-review) and [Weaviate](/power-local-llm/weaviate-review) document distributed or clustered deployment.',
          '**Docker and self-hosting.** [Milvus](/power-local-llm/milvus-review), [Qdrant](/power-local-llm/qdrant-review) and [Weaviate](/power-local-llm/weaviate-review) document Docker or self-hosted deployment.',
          '**Managed cloud.** [Chroma](/power-local-llm/chroma-review), [Milvus](/power-local-llm/milvus-review), [Qdrant](/power-local-llm/qdrant-review) and [Weaviate](/power-local-llm/weaviate-review) document a hosted cloud offering as well as self-hosting.',
          '**License.** Chroma, Milvus and Qdrant are Apache-2.0 and Weaviate\'s core is BSD-3-Clause, with some gated features under its own Weaviate License — see each tool\'s review for the details.',
        ],
      },
      notesDifferences: {
        id: 'notes-differences',
        title: 'Notes Integrations: What Differs',
        items: [
          '**Which notes app.** [BMO Chatbot](/power-local-llm/bmo-chatbot-review), [Copilot for Obsidian](/power-local-llm/copilot-for-obsidian-review), [Smart Connections](/power-local-llm/smart-connections-review) and [Text Generator](/power-local-llm/text-generator-review) for Obsidian; [logseq-copilot](/power-local-llm/logseq-copilot-review) for Logseq; [Joplin AI](/power-local-llm/joplin-ai-agent-review) for Joplin; [Blinko](/power-local-llm/blinko-review), [SiYuan](/power-local-llm/siyuan-review) and [Surf](/power-local-llm/surf-review) are standalone notes apps with AI built in.',
          '**Local LLMs.** [BMO Chatbot](/power-local-llm/bmo-chatbot-review), [Copilot for Obsidian](/power-local-llm/copilot-for-obsidian-review), [Joplin AI](/power-local-llm/joplin-ai-agent-review), [Karakeep](/power-local-llm/karakeep-review), [logseq-copilot](/power-local-llm/logseq-copilot-review) and [Surf](/power-local-llm/surf-review) document working with local LLMs.',
          '**Semantic search.** [Karakeep](/power-local-llm/karakeep-review) and [Smart Connections](/power-local-llm/smart-connections-review) document semantic search over notes.',
          '**Chat with your notes.** [BMO Chatbot](/power-local-llm/bmo-chatbot-review) and [Joplin AI](/power-local-llm/joplin-ai-agent-review) document chatting with your notes.',
        ],
      },
      searchDifferences: {
        id: 'search-differences',
        title: 'Local Search and Research: What Differs',
        items: [
          '**Local LLMs.** [Farfalle](/power-local-llm/farfalle-review), [Karakeep](/power-local-llm/karakeep-review), [Local Deep Research](/power-local-llm/local-deep-research-review), [Onyx](/power-local-llm/onyx-review) and [Vane (formerly Perplexica)](/power-local-llm/vane-review) document working with local LLMs.',
          '**Web search.** [Farfalle](/power-local-llm/farfalle-review), [Local Deep Research](/power-local-llm/local-deep-research-review), [Onyx](/power-local-llm/onyx-review) and [Vane (formerly Perplexica)](/power-local-llm/vane-review) document searching the web.',
          '**Your own files.** [Local Deep Research](/power-local-llm/local-deep-research-review), [Onyx](/power-local-llm/onyx-review) and [Smart Connections](/power-local-llm/smart-connections-review) document searching your own files or notes.',
          '**Citations.** [Local Deep Research](/power-local-llm/local-deep-research-review) and [Vane (formerly Perplexica)](/power-local-llm/vane-review) document citing sources.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What This Comparison Cannot Tell You',
        items: [
          'It compares documented capabilities, not quality. It says nothing about how accurate the answers are, how fast indexing is, or how well a tool scales — PromptQuorum has not measured these for the listed tools.',
          'Dashes are gaps in the documentation we checked, not negative findings. Some tools may support a feature their README does not mention.',
          'Project status matters: GitHub marks the Flowise and h2oGPT repositories as archived (read-only) at the time of writing, which means no further development there. Check each tool\'s review before choosing it for a new project.',
          'Tools change quickly. Each tool\'s review states the version it was checked against, and this guide is refreshed when a review is.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is the difference between a RAG framework, a document chat app and a vector database?',
            a: 'A RAG framework is a developer toolkit for building retrieval-augmented pipelines. A document chat app is a ready-made application for asking questions about your files. A vector database stores the numeric embeddings that make similarity search work and is usually one component inside the other two. They do different jobs, so they are compared separately.',
          },
          {
            q: 'What does a dash in the comparison table mean?',
            a: 'It means the project\'s own documentation does not state that attribute. It does not mean the feature is missing; check the tool\'s review or its repository.',
          },
          {
            q: 'Why does a tool appear more than once?',
            a: 'Some tools do more than one job — for example a search tool that also plugs into a notes app — so they are listed under each kind they belong to, with the attributes that apply to that kind.',
          },
          {
            q: 'Do any of these tools have an affiliate link?',
            a: 'No. PromptQuorum has no affiliate relationship with any tool in this comparison at the time of writing, and no link here earns a commission.',
          },
          {
            q: 'How often is this comparison updated?',
            a: 'It is refreshed twice a year and whenever one of the listed tools\' reviews is updated, because the table is generated from the same data as those reviews.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Each tool\'s official README or website, listed in that tool\'s PromptQuorum review (linked from the comparison table).',
          '[PromptQuorum local AI app directory](/directory) — the record each row of the table is generated from.',
          'GitHub repository status (archived or active) for each listed project, checked when this guide was written.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Software Directory](/directory) — browse all 200+ local AI apps and filter by category.',
          '[Local Inference Engines, Runtimes & Gateways Compared](/power-local-llm/local-llm-run-serve-compared) — the same comparison for the tools that run the models.',
          '[Local Image, Video & Vision Tools Compared](/power-local-llm/local-llm-images-video-compared) — the same comparison for image generation and vision models.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local Knowledge & Retrieval Tools Compared (2026): RAG, Document Chat, Vector Databases, Notes and Search',
      description:
        'Compare 40 local knowledge and retrieval tools side by side: RAG frameworks, document chat, vector databases, notes integrations and search, from official documentation.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
      inLanguage: 'en',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers and self-hosters choosing local RAG and retrieval tools' },
      about: [
        { '@type': 'Thing', name: 'Retrieval-augmented generation' },
        { '@type': 'Thing', name: 'Vector databases' },
        { '@type': 'Thing', name: 'Document chat' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Local Knowledge & Retrieval Tools Compared (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
        },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'RAG & Document Chat',
    title: 'Lokale Wissens- und Retrieval-Tools im Vergleich (2026): RAG, Dokumenten-Chat, Vektordatenbanken, Notizen und Suche',
    seoTitle: 'Lokale RAG-, Dokumenten-Chat- & Vektor-DB-Tools 2026',
    intro:
      'Tools, mit denen ein lokales Modell mit den eigenen Dokumenten arbeitet, lassen sich in fünf verschiedene Arten einteilen — RAG-Frameworks und -Pipelines, Dokumenten- und PDF-Chat-Apps, Vektordatenbanken, Notiz-App-Integrationen sowie lokale Such- und Recherche-Tools — und keine einzelne Funktionsliste vergleicht sie fair. Dieser Leitfaden vergleicht 40 kostenlose und Freemium-Tools, jeweils innerhalb einer Art, anhand einer Vergleichstabelle, die aus denselben Daten erzeugt wird wie der jeweilige PromptQuorum-Test des Tools — Tabelle und Tests können sich also nicht widersprechen.',
    metaDescription:
      '40 lokale Retrieval-Tools im Vergleich: RAG-Frameworks, Dokumenten-Chat, Vektordatenbanken, Notiz-Plugins und Suche. Lizenzen, lokale LLMs, Docker, API — aus offiziellen Docs.',
    twitterDescription:
      'Lokale RAG-Frameworks, Dokumenten-Chat-Apps, Vektordatenbanken, Notiz-Plugins und Suchtools nach Art verglichen — lokale LLMs, Docker, API, Hybridsuche — aus der offiziellen Dokumentation.',
    audience:
      'Entwickler, Self-Hoster und datenschutzbewusste Nutzer, die Tools für Retrieval-Augmented Generation, Dokumenten-Chat, Vektorsuche oder KI-Notizen lokal auswählen und die Unterschiede je Tool-Art sehen möchten statt einer einzigen gemischten Liste.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale RAG-Tools im Vergleich',
    targetKeywords: [
      'lokale rag tools vergleich',
      'lokal mit pdf chatten',
      'chroma vs qdrant vs weaviate',
      'beste lokale dokumenten-chat-apps',
      'obsidian ki plugins lokal',
      'self-hosted rag framework',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Die 40 lokalen Wissens- und Retrieval-Tools im PromptQuorum-Verzeichnis lassen sich in fünf Arten einteilen, die getrennt verglichen werden sollten: RAG-Frameworks und -Pipelines (13 Tools), Dokumenten- und PDF-Chat-Apps (12), Notiz-App-Integrationen (10), lokale Such- und Recherche-Tools (7) und Vektordatenbanken (4).** Unter den Vektordatenbanken dokumentieren 3 von 4 die Hybridsuche und 4 von 4 die Metadatenfilterung; unter den RAG-Frameworks dokumentieren 4 einen visuellen Builder und 9 die Unterstützung lokaler LLMs. Nutzen Sie die Vergleichstabelle unten und lesen Sie den jeweiligen Test eines Tools, bevor Sie es installieren.',
    quickAnswerTop: {
      en: {
        question: 'Welches lokale RAG- oder Dokumenten-Chat-Tool sollte ich verwenden?',
        answer:
          'Das hängt von der Art des Tools ab, vergleichen Sie also jeweils innerhalb einer Art. Wählen Sie nach der Anforderung, die Ihnen am wichtigsten ist — Arbeit mit lokalen LLMs, Docker oder Self-Hosting, eine API, Hybridsuche, ein visueller Builder oder die Notiz-App, die Sie ohnehin nutzen — und verwenden Sie die Tabelle unten, die aus der offiziellen Dokumentation der einzelnen Tools erzeugt wird.',
        bullets: [
          'RAG-Frameworks: 13 Tools verglichen nach visuellem Builder, lokalen LLMs, Agenten, Vektorspeichern, Docker und API.',
          'Dokumenten- und PDF-Chat: 12 Tools verglichen nach lokalen LLMs, Dokumentformaten, Quellenangaben, Desktop-App, Docker und API.',
          'Vektordatenbanken: 4 Tools verglichen nach Hybridsuche, Metadatenfilterung, Clustering, Docker und verwalteter Cloud.',
          'Notiz-Integrationen: 10 Tools verglichen nach Notiz-App, lokalen LLMs, semantischer Suche und Chat mit Notizen.',
          'Lokale Suche und Recherche: 7 Tools verglichen nach lokalen LLMs, Websuche, eigenen Dateien und Quellenangaben.',
          'Ein Strich (—) bedeutet, dass die Dokumentation des Projekts die Angabe nicht nennt — nicht, dass die Funktion fehlt.',
        ],
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'So haben wir verglichen', anchor: 'how-we-compared' },
      { label: 'Vergleichstabelle', anchor: 'comparison-table' },
      { label: 'RAG-Frameworks: Die Unterschiede', anchor: 'rag-differences' },
      { label: 'Dokumenten- und PDF-Chat: Die Unterschiede', anchor: 'doc-differences' },
      { label: 'Vektordatenbanken: Die Unterschiede', anchor: 'vector-differences' },
      { label: 'Notiz-Integrationen: Die Unterschiede', anchor: 'notes-differences' },
      { label: 'Lokale Suche und Recherche: Die Unterschiede', anchor: 'search-differences' },
      { label: 'Was dieser Vergleich nicht leisten kann', anchor: 'limitations' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Tools, mit denen ein lokales Modell mit den eigenen Dokumenten arbeitet, sind fünf verschiedene Arten — RAG-Frameworks, Dokumenten-Chat-Apps, Vektordatenbanken, Notiz-Integrationen und lokale Suche —, weshalb die 40 Tools im PromptQuorum-Verzeichnis jeweils innerhalb ihrer Art verglichen werden, anhand einer Tabelle, die aus denselben Tooldaten erzeugt wird wie der jeweilige Test des Tools.',
          },
          {
            type: 'plain-terms',
            text: 'Manche Tools sind Bausteine für Entwickler, manche sind fertige Apps zum Chatten mit den eigenen Dateien, manche speichern die Vektoren, die die Suche möglich machen, und manche binden sich in eine Notiz-App ein, die Sie schon nutzen. Eine Datenbank und ein Notiz-Plugin anhand derselben Funktionen zu vergleichen ergibt keinen Sinn, deshalb vergleicht dieser Leitfaden Gleiches mit Gleichem.',
          },
        ],
        items: [
          '40 Tools, fünf Arten: RAG-Frameworks und -Pipelines (13), Dokumenten- und PDF-Chat-Apps (12), Notiz-App-Integrationen (10), lokale Such- und Recherche-Tools (7) und Vektordatenbanken (4). Mehrere Tools, etwa Onyx, Karakeep und Surf, gehören zu mehr als einer Art und erscheinen in jeder davon.',
          'Die Tabelle wird aus dem Datensatz jedes Tools erzeugt und mit dessen offizieller README oder Website abgeglichen; ein Strich bedeutet „in der Dokumentation nicht genannt“, niemals „nein“.',
          'GitHub markiert die Repositories von Flowise und h2oGPT zum Zeitpunkt des Schreibens als archiviert (nur lesbar); prüfen Sie den jeweiligen Test auf den aktuellen Stand, bevor Sie darauf aufbauen.',
          'Jeder Toolname in der Tabelle verlinkt auf den eigenen PromptQuorum-Test, in dem Installationsschritte und Grenzen behandelt werden.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'So haben wir verglichen',
        content: [
          'Die Fakten jedes Tools — Preis, Lizenz, Plattformen, Hardwareanforderungen und kategoriespezifische Merkmale — sind einmal im Verzeichnis-Datensatz des Tools gespeichert. Die Vergleichstabelle unten wird aus diesen Datensätzen erzeugt, und der Test des Tools stützt sich auf denselben Datensatz, sodass beide keine unterschiedlichen Werte nennen können.',
          'Kategoriespezifische Merkmale (zum Beispiel Unterstützung lokaler LLMs oder Hybridsuche) wurden der offiziellen README oder Website des jeweiligen Projekts entnommen und am exakten Wortlaut dort geprüft. Wo die Dokumentation schweigt, zeigt die Tabelle einen Strich statt zu raten; wo eine Aussage eingeschränkt ist (nur Roadmap, eine Enterprise-Edition, ein Begleitprojekt oder eine kostenpflichtige Stufe), wird das Merkmal aus der Tabelle weggelassen und stattdessen im Test des Tools behandelt.',
          'In der Tabelle stehen nur Tools mit eigenem PromptQuorum-Test. Der Vergleich listet Tools, die auf der eigenen Hardware laufen oder selbst gehostet werden können; er reiht sie nicht in eine Rangfolge, weil das passende Tool von Ihrer Anforderung abhängt.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Vergleichstabelle',
        content: 'Wählen Sie unten eine Tool-Art und lesen Sie dann quer durch eine Zeile. Klicken Sie auf einen Toolnamen, um den vollständigen PromptQuorum-Test zu öffnen.',
        component: 'CategoryCompareTable',
      },
      ragDifferences: {
        id: 'rag-differences',
        title: 'RAG-Frameworks: Die Unterschiede',
        items: [
          '**Visueller Builder.** [Dify](/de/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/de/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langflow](/de/power-local-llm/langflow-visual-ai-orchestration-review) und [Self-hosted AI Starter Kit](/de/power-local-llm/self-hosted-ai-starter-kit-review) dokumentieren einen visuellen oder Drag-and-drop-Workflow-Builder.',
          '**Lokale LLMs.** [cognee](/de/power-local-llm/cognee-review), [Haystack](/de/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/de/power-local-llm/langchain-chatchat-review), [LlamaIndex](/de/power-local-llm/llamaindex-rag-framework-review), [MaxKB](/de/power-local-llm/maxkb-review), [Onyx](/de/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/de/power-local-llm/self-hosted-ai-starter-kit-review), [txtai](/de/power-local-llm/txtai-embedded-vector-database-review) und [Vane (formerly Perplexica)](/de/power-local-llm/vane-review) dokumentieren die Arbeit mit lokalen LLMs.',
          '**Agenten.** [Dify](/de/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/de/power-local-llm/flowise-ai-visual-workflow-builder-review), [Haystack](/de/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/de/power-local-llm/langchain-chatchat-review), [Langflow](/de/power-local-llm/langflow-visual-ai-orchestration-review), [LlamaIndex](/de/power-local-llm/llamaindex-rag-framework-review), [LongMemory](/de/power-local-llm/longmemory-review), [MaxKB](/de/power-local-llm/maxkb-review), [Onyx](/de/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/de/power-local-llm/self-hosted-ai-starter-kit-review) und [txtai](/de/power-local-llm/txtai-embedded-vector-database-review) dokumentieren Agenten-Unterstützung.',
          '**Mehrere Vektorspeicher.** [Flowise](/de/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langchain-Chatchat](/de/power-local-llm/langchain-chatchat-review), [Langflow](/de/power-local-llm/langflow-visual-ai-orchestration-review) und [LlamaIndex](/de/power-local-llm/llamaindex-rag-framework-review) dokumentieren Integrationen mit mehreren Vektorspeichern.',
          '**Docker und Self-Hosting.** [cognee](/de/power-local-llm/cognee-review), [Dify](/de/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/de/power-local-llm/flowise-ai-visual-workflow-builder-review), [Haystack](/de/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/de/power-local-llm/langchain-chatchat-review), [Langflow](/de/power-local-llm/langflow-visual-ai-orchestration-review), [LongMemory](/de/power-local-llm/longmemory-review), [MaxKB](/de/power-local-llm/maxkb-review), [Onyx](/de/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/de/power-local-llm/self-hosted-ai-starter-kit-review), [txtai](/de/power-local-llm/txtai-embedded-vector-database-review) und [Vane (formerly Perplexica)](/de/power-local-llm/vane-review) dokumentieren die Bereitstellung per Docker oder Self-Hosting.',
          '**API.** [cognee](/de/power-local-llm/cognee-review), [Dify](/de/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/de/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langchain-Chatchat](/de/power-local-llm/langchain-chatchat-review), [Langflow](/de/power-local-llm/langflow-visual-ai-orchestration-review), [LongMemory](/de/power-local-llm/longmemory-review), [Onyx](/de/power-local-llm/onyx-review), [txtai](/de/power-local-llm/txtai-embedded-vector-database-review) und [Vane (formerly Perplexica)](/de/power-local-llm/vane-review) dokumentieren eine HTTP- oder REST-API.',
        ],
      },
      docDifferences: {
        id: 'doc-differences',
        title: 'Dokumenten- und PDF-Chat: Die Unterschiede',
        items: [
          '**Lokale LLMs.** [AnythingLLM](/de/power-local-llm/anythingllm-review), [h2oGPT](/de/power-local-llm/h2ogpt-review), [Khoj](/de/power-local-llm/khoj-ai-second-brain-review), [Langchain-Chatchat](/de/power-local-llm/langchain-chatchat-review), [PrivateGPT](/de/power-local-llm/privategpt-review), [Quivr](/de/power-local-llm/quivr-self-hosted-knowledge-assistant-review), [Sidekick](/de/power-local-llm/sidekick-review) und [Surf](/de/power-local-llm/surf-review) dokumentieren die Arbeit mit lokalen LLMs.',
          '**Dokumentformate.** [AnythingLLM](/de/power-local-llm/anythingllm-review), [h2oGPT](/de/power-local-llm/h2ogpt-review), [Khoj](/de/power-local-llm/khoj-ai-second-brain-review), [PrivateGPT](/de/power-local-llm/privategpt-review), [Quivr](/de/power-local-llm/quivr-self-hosted-knowledge-assistant-review) und [RAGFlow](/de/power-local-llm/ragflow-document-understanding-rag-review) dokumentieren mehrere unterstützte Dateiformate.',
          '**Quellenangaben.** [AnythingLLM](/de/power-local-llm/anythingllm-review), [PrivateGPT](/de/power-local-llm/privategpt-review), [RAGFlow](/de/power-local-llm/ragflow-document-understanding-rag-review), [Sidekick](/de/power-local-llm/sidekick-review) und [Surf](/de/power-local-llm/surf-review) dokumentieren Quellenangaben in den Antworten.',
          '**Desktop-App.** [AnythingLLM](/de/power-local-llm/anythingllm-review), [Khoj](/de/power-local-llm/khoj-ai-second-brain-review) und [Surf](/de/power-local-llm/surf-review) dokumentieren eine installierbare Desktop-App.',
          '**Docker und Self-Hosting.** [AnythingLLM](/de/power-local-llm/anythingllm-review), [h2oGPT](/de/power-local-llm/h2ogpt-review), [Langchain-Chatchat](/de/power-local-llm/langchain-chatchat-review), [PrivateGPT](/de/power-local-llm/privategpt-review) und [RAGFlow](/de/power-local-llm/ragflow-document-understanding-rag-review) dokumentieren die Bereitstellung per Docker oder Self-Hosting.',
          '**API.** [AnythingLLM](/de/power-local-llm/anythingllm-review), [h2oGPT](/de/power-local-llm/h2ogpt-review), [Langchain-Chatchat](/de/power-local-llm/langchain-chatchat-review), [PrivateGPT](/de/power-local-llm/privategpt-review), [RAGFlow](/de/power-local-llm/ragflow-document-understanding-rag-review) und [ToolNeuron](/de/power-local-llm/toolneuron-review) dokumentieren eine API.',
        ],
      },
      vectorDifferences: {
        id: 'vector-differences',
        title: 'Vektordatenbanken: Die Unterschiede',
        items: [
          '**Hybridsuche.** [Milvus](/de/power-local-llm/milvus-review), [Qdrant](/de/power-local-llm/qdrant-review) und [Weaviate](/de/power-local-llm/weaviate-review) dokumentieren die hybride Schlüsselwort- und Vektorsuche.',
          '**Metadatenfilterung.** [Chroma](/de/power-local-llm/chroma-review), [Milvus](/de/power-local-llm/milvus-review), [Qdrant](/de/power-local-llm/qdrant-review) und [Weaviate](/de/power-local-llm/weaviate-review) dokumentieren das Filtern nach Metadaten.',
          '**Verteilter Betrieb.** [Milvus](/de/power-local-llm/milvus-review), [Qdrant](/de/power-local-llm/qdrant-review) und [Weaviate](/de/power-local-llm/weaviate-review) dokumentieren verteilte oder geclusterte Bereitstellung.',
          '**Docker und Self-Hosting.** [Milvus](/de/power-local-llm/milvus-review), [Qdrant](/de/power-local-llm/qdrant-review) und [Weaviate](/de/power-local-llm/weaviate-review) dokumentieren die Bereitstellung per Docker oder Self-Hosting.',
          '**Verwaltete Cloud.** [Chroma](/de/power-local-llm/chroma-review), [Milvus](/de/power-local-llm/milvus-review), [Qdrant](/de/power-local-llm/qdrant-review) und [Weaviate](/de/power-local-llm/weaviate-review) dokumentieren neben dem Self-Hosting ein gehostetes Cloud-Angebot.',
          '**Lizenz.** Chroma, Milvus und Qdrant stehen unter Apache-2.0, der Kern von Weaviate unter BSD-3-Clause, wobei einige eingeschränkte Funktionen unter der eigenen Weaviate License stehen — Details finden Sie im Test des jeweiligen Tools.',
        ],
      },
      notesDifferences: {
        id: 'notes-differences',
        title: 'Notiz-Integrationen: Die Unterschiede',
        items: [
          '**Welche Notiz-App.** [BMO Chatbot](/de/power-local-llm/bmo-chatbot-review), [Copilot for Obsidian](/de/power-local-llm/copilot-for-obsidian-review), [Smart Connections](/de/power-local-llm/smart-connections-review) und [Text Generator](/de/power-local-llm/text-generator-review) für Obsidian; [logseq-copilot](/de/power-local-llm/logseq-copilot-review) für Logseq; [Joplin AI](/de/power-local-llm/joplin-ai-agent-review) für Joplin; [Blinko](/de/power-local-llm/blinko-review), [SiYuan](/de/power-local-llm/siyuan-review) und [Surf](/de/power-local-llm/surf-review) sind eigenständige Notiz-Apps mit integrierter KI.',
          '**Lokale LLMs.** [BMO Chatbot](/de/power-local-llm/bmo-chatbot-review), [Copilot for Obsidian](/de/power-local-llm/copilot-for-obsidian-review), [Joplin AI](/de/power-local-llm/joplin-ai-agent-review), [Karakeep](/de/power-local-llm/karakeep-review), [logseq-copilot](/de/power-local-llm/logseq-copilot-review) und [Surf](/de/power-local-llm/surf-review) dokumentieren die Arbeit mit lokalen LLMs.',
          '**Semantische Suche.** [Karakeep](/de/power-local-llm/karakeep-review) und [Smart Connections](/de/power-local-llm/smart-connections-review) dokumentieren semantische Suche über Notizen.',
          '**Chat mit den eigenen Notizen.** [BMO Chatbot](/de/power-local-llm/bmo-chatbot-review) und [Joplin AI](/de/power-local-llm/joplin-ai-agent-review) dokumentieren das Chatten mit den eigenen Notizen.',
        ],
      },
      searchDifferences: {
        id: 'search-differences',
        title: 'Lokale Suche und Recherche: Die Unterschiede',
        items: [
          '**Lokale LLMs.** [Farfalle](/de/power-local-llm/farfalle-review), [Karakeep](/de/power-local-llm/karakeep-review), [Local Deep Research](/de/power-local-llm/local-deep-research-review), [Onyx](/de/power-local-llm/onyx-review) und [Vane (formerly Perplexica)](/de/power-local-llm/vane-review) dokumentieren die Arbeit mit lokalen LLMs.',
          '**Websuche.** [Farfalle](/de/power-local-llm/farfalle-review), [Local Deep Research](/de/power-local-llm/local-deep-research-review), [Onyx](/de/power-local-llm/onyx-review) und [Vane (formerly Perplexica)](/de/power-local-llm/vane-review) dokumentieren die Suche im Web.',
          '**Eigene Dateien.** [Local Deep Research](/de/power-local-llm/local-deep-research-review), [Onyx](/de/power-local-llm/onyx-review) und [Smart Connections](/de/power-local-llm/smart-connections-review) dokumentieren die Suche in den eigenen Dateien oder Notizen.',
          '**Quellenangaben.** [Local Deep Research](/de/power-local-llm/local-deep-research-review) und [Vane (formerly Perplexica)](/de/power-local-llm/vane-review) dokumentieren Quellenangaben.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Was dieser Vergleich nicht leisten kann',
        items: [
          'Er vergleicht dokumentierte Fähigkeiten, nicht Qualität. Er sagt nichts darüber aus, wie genau die Antworten sind, wie schnell die Indexierung ist oder wie gut ein Tool skaliert — PromptQuorum hat dies für die aufgeführten Tools nicht gemessen.',
          'Striche sind Lücken in der von uns geprüften Dokumentation, keine negativen Befunde. Manche Tools unterstützen möglicherweise eine Funktion, die ihre README nicht erwähnt.',
          'Der Projektstatus zählt: GitHub markiert die Repositories von Flowise und h2oGPT zum Zeitpunkt des Schreibens als archiviert (nur lesbar), was bedeutet, dass dort nicht weiterentwickelt wird. Prüfen Sie den Test des jeweiligen Tools, bevor Sie es für ein neues Projekt wählen.',
          'Tools ändern sich schnell. Der Test jedes Tools nennt die Version, gegen die er geprüft wurde, und dieser Leitfaden wird aktualisiert, wenn ein Test aktualisiert wird.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist der Unterschied zwischen einem RAG-Framework, einer Dokumenten-Chat-App und einer Vektordatenbank?',
            a: 'Ein RAG-Framework ist ein Entwickler-Toolkit zum Bau von Retrieval-Augmented-Pipelines. Eine Dokumenten-Chat-App ist eine fertige Anwendung, mit der Sie Fragen zu Ihren Dateien stellen. Eine Vektordatenbank speichert die numerischen Embeddings, die die Ähnlichkeitssuche ermöglichen, und ist meist eine Komponente innerhalb der beiden anderen. Sie erfüllen unterschiedliche Aufgaben und werden daher getrennt verglichen.',
          },
          {
            q: 'Was bedeutet ein Strich in der Vergleichstabelle?',
            a: 'Er bedeutet, dass die eigene Dokumentation des Projekts diese Angabe nicht nennt. Er bedeutet nicht, dass die Funktion fehlt; prüfen Sie den Test des Tools oder dessen Repository.',
          },
          {
            q: 'Warum erscheint ein Tool mehrfach?',
            a: 'Manche Tools erfüllen mehr als eine Aufgabe — zum Beispiel ein Suchtool, das sich auch in eine Notiz-App einbindet —, daher werden sie unter jeder Art aufgeführt, zu der sie gehören, mit den Merkmalen, die für diese Art gelten.',
          },
          {
            q: 'Haben diese Tools einen Affiliate-Link?',
            a: 'Nein. PromptQuorum hat zum Zeitpunkt des Schreibens keine Affiliate-Beziehung zu einem Tool in diesem Vergleich, und kein Link hier bringt eine Provision.',
          },
          {
            q: 'Wie oft wird dieser Vergleich aktualisiert?',
            a: 'Er wird zweimal im Jahr aktualisiert sowie immer dann, wenn der Test eines der aufgeführten Tools aktualisiert wird, weil die Tabelle aus denselben Daten wie diese Tests erzeugt wird.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Die offizielle README oder Website jedes Tools, aufgeführt im PromptQuorum-Test des jeweiligen Tools (verlinkt aus der Vergleichstabelle).',
          '[PromptQuorum-Verzeichnis für lokale KI-Apps](/de/directory) — der Datensatz, aus dem jede Zeile der Tabelle erzeugt wird.',
          'GitHub-Repository-Status (archiviert oder aktiv) jedes aufgeführten Projekts, geprüft beim Verfassen dieses Leitfadens.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Verzeichnis lokaler Software](/de/directory) — alle über 200 lokalen KI-Apps durchsuchen und nach Kategorie filtern.',
          '[Lokale Inferenz-Engines, Runtimes & Gateways im Vergleich](/de/power-local-llm/local-llm-run-serve-compared) — derselbe Vergleich für die Tools, die die Modelle ausführen.',
          '[Lokale Bild-, Video- & Vision-Tools im Vergleich](/de/power-local-llm/local-llm-images-video-compared) — derselbe Vergleich für Bildgenerierung und Vision-Modelle.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lokale Wissens- und Retrieval-Tools im Vergleich (2026): RAG, Dokumenten-Chat, Vektordatenbanken, Notizen und Suche',
      description:
        '40 lokale Wissens- und Retrieval-Tools im direkten Vergleich: RAG-Frameworks, Dokumenten-Chat, Vektordatenbanken, Notiz-Integrationen und Suche, aus der offiziellen Dokumentation.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
      inLanguage: 'de',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Entwickler und Self-Hoster, die lokale RAG- und Retrieval-Tools auswählen' },
      about: [
        { '@type': 'Thing', name: 'Retrieval-Augmented Generation' },
        { '@type': 'Thing', name: 'Vektordatenbanken' },
        { '@type': 'Thing', name: 'Dokumenten-Chat' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Lokale Wissens- und Retrieval-Tools im Vergleich (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
        },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'RAG & Document Chat',
    title: 'Outils locaux de connaissance et de recherche comparés (2026) : RAG, chat avec documents, bases vectorielles, notes et recherche',
    seoTitle: 'RAG local, chat de documents et bases vectorielles 2026',
    intro:
      'Les outils qui permettent à un modèle local de travailler avec vos propres documents se répartissent en cinq types différents — frameworks et pipelines RAG, applications de chat avec documents et PDF, bases de données vectorielles, intégrations aux applications de notes, et outils de recherche locale — et aucune liste de fonctionnalités unique ne permet de les comparer équitablement. Ce guide compare 40 outils gratuits et freemium, un type à la fois, à l\'aide d\'un tableau comparatif généré à partir des mêmes données que l\'avis PromptQuorum de chaque outil, de sorte que le tableau et les avis ne peuvent pas se contredire.',
    metaDescription:
      'Comparez 40 outils locaux de connaissance et de recherche : frameworks RAG, chat de documents, bases vectorielles (Chroma, Milvus, Qdrant, Weaviate), plugins de notes et recherche. Licences, LLM locaux, Docker, API, d\'après la documentation officielle.',
    twitterDescription:
      'Frameworks RAG locaux, applications de chat de documents, bases vectorielles, plugins de notes et outils de recherche comparés par type — LLM locaux, Docker, API, recherche hybride — d\'après la documentation officielle.',
    audience:
      'Développeurs, auto-hébergeurs et utilisateurs soucieux de la confidentialité qui choisissent des outils pour exécuter en local la génération augmentée par récupération, le chat avec documents, la recherche vectorielle ou des notes assistées par IA, et qui veulent voir les différences type d\'outil par type d\'outil, et non dans une liste unique mélangée.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'comparatif outils RAG locaux',
    targetKeywords: [
      'comparatif rag local',
      'discuter avec un pdf en local',
      'chroma vs qdrant vs weaviate',
      'meilleur chat de documents local',
      'plugins ia obsidian locaux',
      'framework rag auto-hébergé',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Les 40 outils locaux de connaissance et de recherche de l\'annuaire PromptQuorum se répartissent en cinq types qu\'il faut comparer séparément : frameworks et pipelines RAG (13 outils), applications de chat avec documents et PDF (12), intégrations aux applications de notes (10), outils de recherche locale (7) et bases de données vectorielles (4).** Parmi les bases vectorielles, 3 sur 4 documentent la recherche hybride et 4 sur 4 documentent le filtrage par métadonnées ; parmi les frameworks RAG, 4 documentent un constructeur visuel et 9 documentent la prise en charge des LLM locaux. Utilisez le tableau comparatif ci-dessous et lisez l\'avis de chaque outil avant de l\'installer.',
    quickAnswerTop: {
      en: {
        question: 'Quel outil de RAG local ou de chat avec documents dois-je utiliser ?',
        answer:
          'Cela dépend du type d\'outil : comparez donc un seul type à la fois. Choisissez selon la contrainte qui compte le plus — fonctionner avec des LLM locaux, Docker ou l\'auto-hébergement, une API, la recherche hybride, un constructeur visuel, ou l\'application de notes que vous utilisez déjà — et appuyez-vous sur le tableau ci-dessous, généré à partir de la documentation officielle de chaque outil.',
        bullets: [
          'Frameworks RAG : 13 outils comparés sur le constructeur visuel, les LLM locaux, les agents, les bases vectorielles, Docker et l\'API.',
          'Chat avec documents et PDF : 12 outils comparés sur les LLM locaux, les formats de documents, les citations, l\'application de bureau, Docker et l\'API.',
          'Bases de données vectorielles : 4 outils comparés sur la recherche hybride, le filtrage par métadonnées, le déploiement en cluster, Docker et le cloud géré.',
          'Intégrations de notes : 10 outils comparés sur l\'application de notes concernée, les LLM locaux, la recherche sémantique et le chat avec vos notes.',
          'Recherche et veille locales : 7 outils comparés sur les LLM locaux, la recherche web, vos propres fichiers et les citations.',
          'Un tiret (—) signifie que la documentation du projet ne le mentionne pas, et non que la fonctionnalité est absente.',
        ],
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Notre méthode de comparaison', anchor: 'how-we-compared' },
      { label: 'Tableau comparatif', anchor: 'comparison-table' },
      { label: 'Frameworks RAG : ce qui les distingue', anchor: 'rag-differences' },
      { label: 'Chat avec documents et PDF : ce qui les distingue', anchor: 'doc-differences' },
      { label: 'Bases vectorielles : ce qui les distingue', anchor: 'vector-differences' },
      { label: 'Intégrations de notes : ce qui les distingue', anchor: 'notes-differences' },
      { label: 'Recherche et veille locales : ce qui les distingue', anchor: 'search-differences' },
      { label: 'Ce que cette comparaison ne peut pas vous dire', anchor: 'limitations' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Sources', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Les outils qui permettent à un modèle local de travailler avec vos propres documents sont de cinq types différents — frameworks RAG, applications de chat avec documents, bases vectorielles, intégrations de notes et recherche locale — c\'est pourquoi les 40 outils de l\'annuaire PromptQuorum sont comparés au sein de chaque type, à l\'aide d\'un tableau généré à partir des mêmes données que l\'avis de chaque outil.',
          },
          {
            type: 'plain-terms',
            text: 'Certains outils sont des briques pour les développeurs, d\'autres sont des applications prêtes à l\'emploi pour discuter avec vos fichiers, d\'autres stockent les vecteurs qui font fonctionner la recherche, et d\'autres encore se branchent sur une application de notes que vous utilisez déjà. Comparer une base de données et un plugin de notes sur les mêmes fonctionnalités n\'a aucun sens : ce guide compare donc ce qui est comparable.',
          },
        ],
        items: [
          '40 outils, cinq types : frameworks et pipelines RAG (13), applications de chat avec documents et PDF (12), intégrations aux applications de notes (10), outils de recherche locale (7) et bases de données vectorielles (4). Plusieurs outils, comme Onyx, Karakeep et Surf, relèvent de plusieurs types et apparaissent dans chacun.',
          'Le tableau est généré à partir de la fiche de chaque outil et vérifié d\'après son README ou son site officiel ; un tiret signifie « non mentionné dans la documentation », jamais « non ».',
          'GitHub indique que les dépôts Flowise et h2oGPT sont archivés (en lecture seule) au moment de la rédaction ; consultez leurs avis pour connaître leur état actuel avant de vous appuyer dessus.',
          'Chaque nom d\'outil du tableau renvoie vers son propre avis PromptQuorum, où sont traités les étapes d\'installation et les limites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Notre méthode de comparaison',
        content: [
          'Les informations de chaque outil — prix, licence, plateformes, besoins matériels et attributs propres à sa catégorie — sont stockées une seule fois, dans la fiche de l\'outil dans l\'annuaire. Le tableau comparatif ci-dessous est généré à partir de ces fiches, et l\'avis de l\'outil s\'appuie sur la même fiche : les deux ne peuvent donc pas indiquer des valeurs différentes.',
          'Les attributs propres à chaque catégorie (par exemple la prise en charge des LLM locaux ou la recherche hybride) ont été repris du README ou du site officiel de chaque projet et vérifiés par rapport à la formulation exacte qui s\'y trouve. Lorsque la documentation est muette, le tableau affiche un tiret plutôt que de deviner ; lorsqu\'une affirmation est nuancée (feuille de route uniquement, édition entreprise, projet compagnon ou offre payante), l\'attribut est omis du tableau et traité dans l\'avis de l\'outil.',
          'Seuls les outils qui ont leur propre avis PromptQuorum figurent dans le tableau. La comparaison recense des outils qui s\'exécutent sur votre propre matériel ou que vous auto-hébergez ; elle ne les classe pas, car le bon choix dépend de votre contrainte.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau comparatif',
        content: 'Choisissez ci-dessous un type d\'outil, puis lisez la ligne de gauche à droite. Cliquez sur le nom d\'un outil pour ouvrir son avis PromptQuorum complet.',
        component: 'CategoryCompareTable',
      },
      ragDifferences: {
        id: 'rag-differences',
        title: 'Frameworks RAG : ce qui les distingue',
        items: [
          '**Constructeur visuel.** [Dify](/fr/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/fr/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langflow](/fr/power-local-llm/langflow-visual-ai-orchestration-review) et [Self-hosted AI Starter Kit](/fr/power-local-llm/self-hosted-ai-starter-kit-review) documentent un constructeur de workflows visuel ou par glisser-déposer.',
          '**LLM locaux.** [cognee](/fr/power-local-llm/cognee-review), [Haystack](/fr/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/fr/power-local-llm/langchain-chatchat-review), [LlamaIndex](/fr/power-local-llm/llamaindex-rag-framework-review), [MaxKB](/fr/power-local-llm/maxkb-review), [Onyx](/fr/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/fr/power-local-llm/self-hosted-ai-starter-kit-review), [txtai](/fr/power-local-llm/txtai-embedded-vector-database-review) et [Vane (formerly Perplexica)](/fr/power-local-llm/vane-review) documentent le fonctionnement avec des LLM locaux.',
          '**Agents.** [Dify](/fr/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/fr/power-local-llm/flowise-ai-visual-workflow-builder-review), [Haystack](/fr/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/fr/power-local-llm/langchain-chatchat-review), [Langflow](/fr/power-local-llm/langflow-visual-ai-orchestration-review), [LlamaIndex](/fr/power-local-llm/llamaindex-rag-framework-review), [LongMemory](/fr/power-local-llm/longmemory-review), [MaxKB](/fr/power-local-llm/maxkb-review), [Onyx](/fr/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/fr/power-local-llm/self-hosted-ai-starter-kit-review) et [txtai](/fr/power-local-llm/txtai-embedded-vector-database-review) documentent la prise en charge des agents.',
          '**Plusieurs bases vectorielles.** [Flowise](/fr/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langchain-Chatchat](/fr/power-local-llm/langchain-chatchat-review), [Langflow](/fr/power-local-llm/langflow-visual-ai-orchestration-review) et [LlamaIndex](/fr/power-local-llm/llamaindex-rag-framework-review) documentent des intégrations avec plusieurs bases vectorielles.',
          '**Docker et auto-hébergement.** [cognee](/fr/power-local-llm/cognee-review), [Dify](/fr/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/fr/power-local-llm/flowise-ai-visual-workflow-builder-review), [Haystack](/fr/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/fr/power-local-llm/langchain-chatchat-review), [Langflow](/fr/power-local-llm/langflow-visual-ai-orchestration-review), [LongMemory](/fr/power-local-llm/longmemory-review), [MaxKB](/fr/power-local-llm/maxkb-review), [Onyx](/fr/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/fr/power-local-llm/self-hosted-ai-starter-kit-review), [txtai](/fr/power-local-llm/txtai-embedded-vector-database-review) et [Vane (formerly Perplexica)](/fr/power-local-llm/vane-review) documentent un déploiement Docker ou auto-hébergé.',
          '**API.** [cognee](/fr/power-local-llm/cognee-review), [Dify](/fr/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/fr/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langchain-Chatchat](/fr/power-local-llm/langchain-chatchat-review), [Langflow](/fr/power-local-llm/langflow-visual-ai-orchestration-review), [LongMemory](/fr/power-local-llm/longmemory-review), [Onyx](/fr/power-local-llm/onyx-review), [txtai](/fr/power-local-llm/txtai-embedded-vector-database-review) et [Vane (formerly Perplexica)](/fr/power-local-llm/vane-review) documentent une API HTTP ou REST.',
        ],
      },
      docDifferences: {
        id: 'doc-differences',
        title: 'Chat avec documents et PDF : ce qui les distingue',
        items: [
          '**LLM locaux.** [AnythingLLM](/fr/power-local-llm/anythingllm-review), [h2oGPT](/fr/power-local-llm/h2ogpt-review), [Khoj](/fr/power-local-llm/khoj-ai-second-brain-review), [Langchain-Chatchat](/fr/power-local-llm/langchain-chatchat-review), [PrivateGPT](/fr/power-local-llm/privategpt-review), [Quivr](/fr/power-local-llm/quivr-self-hosted-knowledge-assistant-review), [Sidekick](/fr/power-local-llm/sidekick-review) et [Surf](/fr/power-local-llm/surf-review) documentent le fonctionnement avec des LLM locaux.',
          '**Formats de documents.** [AnythingLLM](/fr/power-local-llm/anythingllm-review), [h2oGPT](/fr/power-local-llm/h2ogpt-review), [Khoj](/fr/power-local-llm/khoj-ai-second-brain-review), [PrivateGPT](/fr/power-local-llm/privategpt-review), [Quivr](/fr/power-local-llm/quivr-self-hosted-knowledge-assistant-review) et [RAGFlow](/fr/power-local-llm/ragflow-document-understanding-rag-review) documentent plusieurs formats de fichiers pris en charge.',
          '**Citations.** [AnythingLLM](/fr/power-local-llm/anythingllm-review), [PrivateGPT](/fr/power-local-llm/privategpt-review), [RAGFlow](/fr/power-local-llm/ragflow-document-understanding-rag-review), [Sidekick](/fr/power-local-llm/sidekick-review) et [Surf](/fr/power-local-llm/surf-review) documentent la citation des sources dans les réponses.',
          '**Application de bureau.** [AnythingLLM](/fr/power-local-llm/anythingllm-review), [Khoj](/fr/power-local-llm/khoj-ai-second-brain-review) et [Surf](/fr/power-local-llm/surf-review) documentent une application de bureau installable.',
          '**Docker et auto-hébergement.** [AnythingLLM](/fr/power-local-llm/anythingllm-review), [h2oGPT](/fr/power-local-llm/h2ogpt-review), [Langchain-Chatchat](/fr/power-local-llm/langchain-chatchat-review), [PrivateGPT](/fr/power-local-llm/privategpt-review) et [RAGFlow](/fr/power-local-llm/ragflow-document-understanding-rag-review) documentent un déploiement Docker ou auto-hébergé.',
          '**API.** [AnythingLLM](/fr/power-local-llm/anythingllm-review), [h2oGPT](/fr/power-local-llm/h2ogpt-review), [Langchain-Chatchat](/fr/power-local-llm/langchain-chatchat-review), [PrivateGPT](/fr/power-local-llm/privategpt-review), [RAGFlow](/fr/power-local-llm/ragflow-document-understanding-rag-review) et [ToolNeuron](/fr/power-local-llm/toolneuron-review) documentent une API.',
        ],
      },
      vectorDifferences: {
        id: 'vector-differences',
        title: 'Bases vectorielles : ce qui les distingue',
        items: [
          '**Recherche hybride.** [Milvus](/fr/power-local-llm/milvus-review), [Qdrant](/fr/power-local-llm/qdrant-review) et [Weaviate](/fr/power-local-llm/weaviate-review) documentent la recherche hybride par mots-clés et par vecteurs.',
          '**Filtrage par métadonnées.** [Chroma](/fr/power-local-llm/chroma-review), [Milvus](/fr/power-local-llm/milvus-review), [Qdrant](/fr/power-local-llm/qdrant-review) et [Weaviate](/fr/power-local-llm/weaviate-review) documentent le filtrage par métadonnées.',
          '**Déploiement distribué.** [Milvus](/fr/power-local-llm/milvus-review), [Qdrant](/fr/power-local-llm/qdrant-review) et [Weaviate](/fr/power-local-llm/weaviate-review) documentent un déploiement distribué ou en cluster.',
          '**Docker et auto-hébergement.** [Milvus](/fr/power-local-llm/milvus-review), [Qdrant](/fr/power-local-llm/qdrant-review) et [Weaviate](/fr/power-local-llm/weaviate-review) documentent un déploiement Docker ou auto-hébergé.',
          '**Cloud géré.** [Chroma](/fr/power-local-llm/chroma-review), [Milvus](/fr/power-local-llm/milvus-review), [Qdrant](/fr/power-local-llm/qdrant-review) et [Weaviate](/fr/power-local-llm/weaviate-review) documentent une offre cloud hébergée en plus de l\'auto-hébergement.',
          '**Licence.** Chroma, Milvus et Qdrant sont sous Apache-2.0 et le cœur de Weaviate est sous BSD-3-Clause, certaines fonctionnalités restreintes relevant de sa propre licence Weaviate License — consultez l\'avis de chaque outil pour le détail.',
        ],
      },
      notesDifferences: {
        id: 'notes-differences',
        title: 'Intégrations de notes : ce qui les distingue',
        items: [
          '**Application de notes concernée.** [BMO Chatbot](/fr/power-local-llm/bmo-chatbot-review), [Copilot for Obsidian](/fr/power-local-llm/copilot-for-obsidian-review), [Smart Connections](/fr/power-local-llm/smart-connections-review) et [Text Generator](/fr/power-local-llm/text-generator-review) pour Obsidian ; [logseq-copilot](/fr/power-local-llm/logseq-copilot-review) pour Logseq ; [Joplin AI](/fr/power-local-llm/joplin-ai-agent-review) pour Joplin ; [Blinko](/fr/power-local-llm/blinko-review), [SiYuan](/fr/power-local-llm/siyuan-review) et [Surf](/fr/power-local-llm/surf-review) sont des applications de notes autonomes avec IA intégrée.',
          '**LLM locaux.** [BMO Chatbot](/fr/power-local-llm/bmo-chatbot-review), [Copilot for Obsidian](/fr/power-local-llm/copilot-for-obsidian-review), [Joplin AI](/fr/power-local-llm/joplin-ai-agent-review), [Karakeep](/fr/power-local-llm/karakeep-review), [logseq-copilot](/fr/power-local-llm/logseq-copilot-review) et [Surf](/fr/power-local-llm/surf-review) documentent le fonctionnement avec des LLM locaux.',
          '**Recherche sémantique.** [Karakeep](/fr/power-local-llm/karakeep-review) et [Smart Connections](/fr/power-local-llm/smart-connections-review) documentent la recherche sémantique dans les notes.',
          '**Discuter avec vos notes.** [BMO Chatbot](/fr/power-local-llm/bmo-chatbot-review) et [Joplin AI](/fr/power-local-llm/joplin-ai-agent-review) documentent la possibilité de discuter avec vos notes.',
        ],
      },
      searchDifferences: {
        id: 'search-differences',
        title: 'Recherche et veille locales : ce qui les distingue',
        items: [
          '**LLM locaux.** [Farfalle](/fr/power-local-llm/farfalle-review), [Karakeep](/fr/power-local-llm/karakeep-review), [Local Deep Research](/fr/power-local-llm/local-deep-research-review), [Onyx](/fr/power-local-llm/onyx-review) et [Vane (formerly Perplexica)](/fr/power-local-llm/vane-review) documentent le fonctionnement avec des LLM locaux.',
          '**Recherche web.** [Farfalle](/fr/power-local-llm/farfalle-review), [Local Deep Research](/fr/power-local-llm/local-deep-research-review), [Onyx](/fr/power-local-llm/onyx-review) et [Vane (formerly Perplexica)](/fr/power-local-llm/vane-review) documentent la recherche sur le web.',
          '**Vos propres fichiers.** [Local Deep Research](/fr/power-local-llm/local-deep-research-review), [Onyx](/fr/power-local-llm/onyx-review) et [Smart Connections](/fr/power-local-llm/smart-connections-review) documentent la recherche dans vos propres fichiers ou notes.',
          '**Citations.** [Local Deep Research](/fr/power-local-llm/local-deep-research-review) et [Vane (formerly Perplexica)](/fr/power-local-llm/vane-review) documentent la citation des sources.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Ce que cette comparaison ne peut pas vous dire',
        items: [
          'Elle compare des capacités documentées, pas la qualité. Elle ne dit rien de la précision des réponses, de la rapidité de l\'indexation ni de la capacité de montée en charge d\'un outil — PromptQuorum n\'a pas mesuré ces points pour les outils listés.',
          'Les tirets correspondent à des lacunes dans la documentation que nous avons consultée, pas à des constats négatifs. Certains outils peuvent prendre en charge une fonctionnalité que leur README ne mentionne pas.',
          'L\'état du projet compte : GitHub indique que les dépôts Flowise et h2oGPT sont archivés (en lecture seule) au moment de la rédaction, ce qui signifie qu\'il n\'y a plus de développement. Consultez l\'avis de chaque outil avant de le choisir pour un nouveau projet.',
          'Les outils évoluent vite. L\'avis de chaque outil indique la version sur laquelle il a été vérifié, et ce guide est actualisé lorsqu\'un avis l\'est.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Quelle est la différence entre un framework RAG, une application de chat avec documents et une base de données vectorielle ?',
            a: 'Un framework RAG est une boîte à outils pour développeurs destinée à construire des pipelines de génération augmentée par récupération. Une application de chat avec documents est une application prête à l\'emploi pour poser des questions sur vos fichiers. Une base de données vectorielle stocke les embeddings numériques qui font fonctionner la recherche par similarité et constitue généralement un composant des deux autres. Ils remplissent des rôles différents, c\'est pourquoi ils sont comparés séparément.',
          },
          {
            q: 'Que signifie un tiret dans le tableau comparatif ?',
            a: 'Cela signifie que la documentation du projet ne mentionne pas cet attribut. Cela ne veut pas dire que la fonctionnalité est absente ; consultez l\'avis de l\'outil ou son dépôt.',
          },
          {
            q: 'Pourquoi un outil apparaît-il plusieurs fois ?',
            a: 'Certains outils remplissent plusieurs rôles — par exemple un outil de recherche qui se branche aussi sur une application de notes — et sont donc listés dans chaque type auquel ils appartiennent, avec les attributs qui s\'appliquent à ce type.',
          },
          {
            q: 'Certains de ces outils ont-ils un lien d\'affiliation ?',
            a: 'Non. PromptQuorum n\'a de relation d\'affiliation avec aucun outil de cette comparaison au moment de la rédaction, et aucun lien ici ne rapporte de commission.',
          },
          {
            q: 'À quelle fréquence cette comparaison est-elle mise à jour ?',
            a: 'Elle est actualisée deux fois par an, ainsi qu\'à chaque mise à jour de l\'avis d\'un des outils listés, car le tableau est généré à partir des mêmes données que ces avis.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Le README ou le site officiel de chaque outil, indiqués dans l\'avis PromptQuorum de l\'outil (accessible depuis le tableau comparatif).',
          '[Annuaire PromptQuorum des applications d\'IA locale](/fr/directory) — la fiche à partir de laquelle chaque ligne du tableau est générée.',
          'État des dépôts GitHub (archivé ou actif) de chaque projet listé, vérifié lors de la rédaction de ce guide.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'À lire aussi',
        items: [
          '[Annuaire des logiciels locaux](/fr/directory) — parcourez plus de 200 applications d\'IA locale et filtrez par catégorie.',
          '[Moteurs d\'inférence, runtimes et passerelles locaux comparés](/fr/power-local-llm/local-llm-run-serve-compared) — la même comparaison pour les outils qui exécutent les modèles.',
          '[Outils locaux d\'image, de vidéo et de vision comparés](/fr/power-local-llm/local-llm-images-video-compared) — la même comparaison pour la génération d\'images et les modèles de vision.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Outils locaux de connaissance et de recherche comparés (2026) : RAG, chat avec documents, bases vectorielles, notes et recherche',
      description:
        'Comparez 40 outils locaux de connaissance et de recherche : frameworks RAG, chat de documents, bases vectorielles, intégrations de notes et recherche, d\'après la documentation officielle.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
      inLanguage: 'fr',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Développeurs et auto-hébergeurs qui choisissent des outils locaux de RAG et de recherche documentaire' },
      about: [
        { '@type': 'Thing', name: 'Génération augmentée par récupération' },
        { '@type': 'Thing', name: 'Bases de données vectorielles' },
        { '@type': 'Thing', name: 'Chat avec documents' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Outils locaux de connaissance et de recherche comparés (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
        },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'RAG & Document Chat',
    title: 'Herramientas locales de conocimiento y recuperación comparadas (2026): RAG, chat con documentos, bases de datos vectoriales, notas y búsqueda',
    seoTitle: 'RAG local, chat con documentos y BD vectoriales 2026',
    intro:
      'Las herramientas que permiten a un modelo local trabajar con tus propios documentos son de cinco tipos distintos — frameworks y pipelines RAG, apps de chat con documentos y PDF, bases de datos vectoriales, integraciones con apps de notas y herramientas locales de búsqueda e investigación — y ninguna lista de funciones única las compara de forma justa. Esta guía compara 40 herramientas gratuitas y freemium, un tipo cada vez, con una tabla comparativa generada a partir de los mismos datos que el análisis propio de cada herramienta en PromptQuorum, de modo que la tabla y los análisis no pueden contradecirse.',
    metaDescription:
      'Compara 40 herramientas locales de conocimiento y recuperación: frameworks RAG, chat con documentos, bases de datos vectoriales (Chroma, Milvus, Qdrant, Weaviate), plugins de notas y búsqueda. Licencias, LLM locales, Docker y API, según la documentación oficial.',
    twitterDescription:
      'Frameworks RAG locales, apps de chat con documentos, bases de datos vectoriales, plugins de notas y herramientas de búsqueda comparados por tipo — LLM locales, Docker, API, búsqueda híbrida — según la documentación oficial.',
    audience:
      'Desarrolladores, usuarios de autoalojamiento y personas atentas a la privacidad que eligen herramientas para ejecutar en local generación aumentada por recuperación, chat con documentos, búsqueda vectorial o notas con IA, y que quieren ver las diferencias por tipo de herramienta, no en una lista mezclada.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'comparativa de herramientas RAG locales',
    targetKeywords: [
      'comparativa rag local',
      'chat con pdf en local',
      'chroma vs qdrant vs weaviate',
      'mejor chat con documentos local',
      'plugins de ia para obsidian en local',
      'framework rag autoalojado',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**Las 40 herramientas locales de conocimiento y recuperación del directorio de PromptQuorum se dividen en cinco tipos que conviene comparar por separado: frameworks y pipelines RAG (13 herramientas), apps de chat con documentos y PDF (12), integraciones con apps de notas (10), herramientas locales de búsqueda e investigación (7) y bases de datos vectoriales (4).** Entre las bases de datos vectoriales, 3 de 4 documentan búsqueda híbrida y 4 de 4 documentan filtrado por metadatos; entre los frameworks RAG, 4 documentan un constructor visual y 9 documentan compatibilidad con LLM locales. Usa la tabla comparativa de abajo y lee el análisis de cada herramienta antes de instalarla.',
    quickAnswerTop: {
      en: {
        question: '¿Qué herramienta local de RAG o de chat con documentos debería usar?',
        answer:
          'Depende del tipo de herramienta, así que compara dentro de un mismo tipo. Elige según la restricción que más te importe — trabajar con LLM locales, Docker o autoalojamiento, una API, búsqueda híbrida, un constructor visual o la app de notas que ya usas — y apóyate en la tabla de abajo, generada a partir de la documentación oficial de cada herramienta.',
        bullets: [
          'Frameworks RAG: 13 herramientas comparadas en constructor visual, LLM locales, agentes, almacenes vectoriales, Docker y API.',
          'Chat con documentos y PDF: 12 herramientas comparadas en LLM locales, formatos de documento, citas, app de escritorio, Docker y API.',
          'Bases de datos vectoriales: 4 herramientas comparadas en búsqueda híbrida, filtrado por metadatos, clústeres, Docker y nube gestionada.',
          'Integraciones con notas: 10 herramientas comparadas en app de notas, LLM locales, búsqueda semántica y chat con las notas.',
          'Búsqueda e investigación locales: 7 herramientas comparadas en LLM locales, búsqueda web, tus propios archivos y citas.',
          'Un guion (—) significa que la documentación del proyecto no lo indica, no que la función no exista.',
        ],
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Cómo comparamos', anchor: 'how-we-compared' },
      { label: 'Tabla comparativa', anchor: 'comparison-table' },
      { label: 'Frameworks RAG: en qué se diferencian', anchor: 'rag-differences' },
      { label: 'Chat con documentos y PDF: en qué se diferencian', anchor: 'doc-differences' },
      { label: 'Bases de datos vectoriales: en qué se diferencian', anchor: 'vector-differences' },
      { label: 'Integraciones con notas: en qué se diferencian', anchor: 'notes-differences' },
      { label: 'Búsqueda e investigación locales: en qué se diferencian', anchor: 'search-differences' },
      { label: 'Lo que esta comparativa no puede decirte', anchor: 'limitations' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Fuentes', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Las herramientas que permiten a un modelo local trabajar con tus propios documentos son de cinco tipos distintos — frameworks RAG, apps de chat con documentos, bases de datos vectoriales, integraciones con notas y búsqueda local — por eso las 40 herramientas del directorio de PromptQuorum se comparan dentro de cada tipo, con una tabla generada a partir de los mismos datos que el análisis propio de cada herramienta.',
          },
          {
            type: 'plain-terms',
            text: 'Algunas herramientas son piezas para desarrolladores, otras son apps listas para chatear con tus archivos, otras almacenan los vectores que hacen posible la búsqueda y otras se integran en una app de notas que ya usas. Comparar una base de datos con un plugin de notas según las mismas funciones no tiene sentido, así que esta guía compara solo lo comparable.',
          },
        ],
        items: [
          '40 herramientas, cinco tipos: frameworks y pipelines RAG (13), apps de chat con documentos y PDF (12), integraciones con apps de notas (10), herramientas locales de búsqueda e investigación (7) y bases de datos vectoriales (4). Varias herramientas, como Onyx, Karakeep y Surf, pertenecen a más de un tipo y aparecen en cada uno.',
          'La tabla se genera a partir del registro de cada herramienta y se contrasta con su README o sitio oficial; un guion significa "no indicado en la documentación", nunca "no".',
          'GitHub marca los repositorios de Flowise y h2oGPT como archivados (solo lectura) en el momento de redactar esta guía; consulta sus análisis para conocer el estado actual antes de construir sobre ellos.',
          'Cada nombre de herramienta de la tabla enlaza con su propio análisis en PromptQuorum, donde se explican la instalación y los límites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Cómo comparamos',
        content: [
          'Los datos de cada herramienta — precio, licencia, plataformas, requisitos de hardware y atributos específicos de su categoría — se guardan una sola vez, en el registro de esa herramienta en el directorio. La tabla comparativa de abajo se genera a partir de esos registros, y el análisis de la herramienta se basa en el mismo registro, así que ambos no pueden indicar valores distintos.',
          'Los atributos específicos de cada categoría (por ejemplo, la compatibilidad con LLM locales o la búsqueda híbrida) se tomaron del README o del sitio web oficial de cada proyecto y se contrastaron con la redacción exacta allí. Cuando la documentación no dice nada, la tabla muestra un guion en lugar de adivinar; cuando una afirmación tiene salvedades (solo en la hoja de ruta, una edición empresarial, un proyecto complementario o un nivel de pago), el atributo se deja fuera de la tabla y se trata en el análisis de la herramienta.',
          'En la tabla solo figuran herramientas con análisis propio en PromptQuorum. La comparativa incluye herramientas que se ejecutan en tu propio hardware o que puedes autoalojar; no las clasifica en un ranking, porque la adecuada depende de tu restricción.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa',
        content: 'Elige abajo un tipo de herramienta y lee la fila de izquierda a derecha. Haz clic en el nombre de una herramienta para abrir su análisis completo en PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      ragDifferences: {
        id: 'rag-differences',
        title: 'Frameworks RAG: en qué se diferencian',
        items: [
          '**Constructor visual.** [Dify](/es/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/es/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langflow](/es/power-local-llm/langflow-visual-ai-orchestration-review) y [Self-hosted AI Starter Kit](/es/power-local-llm/self-hosted-ai-starter-kit-review) documentan un constructor de flujos visual o de arrastrar y soltar.',
          '**LLM locales.** [cognee](/es/power-local-llm/cognee-review), [Haystack](/es/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/es/power-local-llm/langchain-chatchat-review), [LlamaIndex](/es/power-local-llm/llamaindex-rag-framework-review), [MaxKB](/es/power-local-llm/maxkb-review), [Onyx](/es/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/es/power-local-llm/self-hosted-ai-starter-kit-review), [txtai](/es/power-local-llm/txtai-embedded-vector-database-review) y [Vane (antes Perplexica)](/es/power-local-llm/vane-review) documentan el trabajo con LLM locales.',
          '**Agentes.** [Dify](/es/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/es/power-local-llm/flowise-ai-visual-workflow-builder-review), [Haystack](/es/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/es/power-local-llm/langchain-chatchat-review), [Langflow](/es/power-local-llm/langflow-visual-ai-orchestration-review), [LlamaIndex](/es/power-local-llm/llamaindex-rag-framework-review), [LongMemory](/es/power-local-llm/longmemory-review), [MaxKB](/es/power-local-llm/maxkb-review), [Onyx](/es/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/es/power-local-llm/self-hosted-ai-starter-kit-review) y [txtai](/es/power-local-llm/txtai-embedded-vector-database-review) documentan compatibilidad con agentes.',
          '**Varios almacenes vectoriales.** [Flowise](/es/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langchain-Chatchat](/es/power-local-llm/langchain-chatchat-review), [Langflow](/es/power-local-llm/langflow-visual-ai-orchestration-review) y [LlamaIndex](/es/power-local-llm/llamaindex-rag-framework-review) documentan integraciones con varios almacenes vectoriales.',
          '**Docker y autoalojamiento.** [cognee](/es/power-local-llm/cognee-review), [Dify](/es/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/es/power-local-llm/flowise-ai-visual-workflow-builder-review), [Haystack](/es/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/es/power-local-llm/langchain-chatchat-review), [Langflow](/es/power-local-llm/langflow-visual-ai-orchestration-review), [LongMemory](/es/power-local-llm/longmemory-review), [MaxKB](/es/power-local-llm/maxkb-review), [Onyx](/es/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/es/power-local-llm/self-hosted-ai-starter-kit-review), [txtai](/es/power-local-llm/txtai-embedded-vector-database-review) y [Vane (antes Perplexica)](/es/power-local-llm/vane-review) documentan el despliegue con Docker o autoalojado.',
          '**API.** [cognee](/es/power-local-llm/cognee-review), [Dify](/es/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/es/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langchain-Chatchat](/es/power-local-llm/langchain-chatchat-review), [Langflow](/es/power-local-llm/langflow-visual-ai-orchestration-review), [LongMemory](/es/power-local-llm/longmemory-review), [Onyx](/es/power-local-llm/onyx-review), [txtai](/es/power-local-llm/txtai-embedded-vector-database-review) y [Vane (antes Perplexica)](/es/power-local-llm/vane-review) documentan una API HTTP o REST.',
        ],
      },
      docDifferences: {
        id: 'doc-differences',
        title: 'Chat con documentos y PDF: en qué se diferencian',
        items: [
          '**LLM locales.** [AnythingLLM](/es/power-local-llm/anythingllm-review), [h2oGPT](/es/power-local-llm/h2ogpt-review), [Khoj](/es/power-local-llm/khoj-ai-second-brain-review), [Langchain-Chatchat](/es/power-local-llm/langchain-chatchat-review), [PrivateGPT](/es/power-local-llm/privategpt-review), [Quivr](/es/power-local-llm/quivr-self-hosted-knowledge-assistant-review), [Sidekick](/es/power-local-llm/sidekick-review) y [Surf](/es/power-local-llm/surf-review) documentan el trabajo con LLM locales.',
          '**Formatos de documento.** [AnythingLLM](/es/power-local-llm/anythingllm-review), [h2oGPT](/es/power-local-llm/h2ogpt-review), [Khoj](/es/power-local-llm/khoj-ai-second-brain-review), [PrivateGPT](/es/power-local-llm/privategpt-review), [Quivr](/es/power-local-llm/quivr-self-hosted-knowledge-assistant-review) y [RAGFlow](/es/power-local-llm/ragflow-document-understanding-rag-review) documentan varios formatos de archivo compatibles.',
          '**Citas.** [AnythingLLM](/es/power-local-llm/anythingllm-review), [PrivateGPT](/es/power-local-llm/privategpt-review), [RAGFlow](/es/power-local-llm/ragflow-document-understanding-rag-review), [Sidekick](/es/power-local-llm/sidekick-review) y [Surf](/es/power-local-llm/surf-review) documentan la cita de fuentes en las respuestas.',
          '**App de escritorio.** [AnythingLLM](/es/power-local-llm/anythingllm-review), [Khoj](/es/power-local-llm/khoj-ai-second-brain-review) y [Surf](/es/power-local-llm/surf-review) documentan una app de escritorio instalable.',
          '**Docker y autoalojamiento.** [AnythingLLM](/es/power-local-llm/anythingllm-review), [h2oGPT](/es/power-local-llm/h2ogpt-review), [Langchain-Chatchat](/es/power-local-llm/langchain-chatchat-review), [PrivateGPT](/es/power-local-llm/privategpt-review) y [RAGFlow](/es/power-local-llm/ragflow-document-understanding-rag-review) documentan el despliegue con Docker o autoalojado.',
          '**API.** [AnythingLLM](/es/power-local-llm/anythingllm-review), [h2oGPT](/es/power-local-llm/h2ogpt-review), [Langchain-Chatchat](/es/power-local-llm/langchain-chatchat-review), [PrivateGPT](/es/power-local-llm/privategpt-review), [RAGFlow](/es/power-local-llm/ragflow-document-understanding-rag-review) y [ToolNeuron](/es/power-local-llm/toolneuron-review) documentan una API.',
        ],
      },
      vectorDifferences: {
        id: 'vector-differences',
        title: 'Bases de datos vectoriales: en qué se diferencian',
        items: [
          '**Búsqueda híbrida.** [Milvus](/es/power-local-llm/milvus-review), [Qdrant](/es/power-local-llm/qdrant-review) y [Weaviate](/es/power-local-llm/weaviate-review) documentan la búsqueda híbrida por palabras clave y vectores.',
          '**Filtrado por metadatos.** [Chroma](/es/power-local-llm/chroma-review), [Milvus](/es/power-local-llm/milvus-review), [Qdrant](/es/power-local-llm/qdrant-review) y [Weaviate](/es/power-local-llm/weaviate-review) documentan el filtrado por metadatos.',
          '**Despliegue distribuido.** [Milvus](/es/power-local-llm/milvus-review), [Qdrant](/es/power-local-llm/qdrant-review) y [Weaviate](/es/power-local-llm/weaviate-review) documentan el despliegue distribuido o en clúster.',
          '**Docker y autoalojamiento.** [Milvus](/es/power-local-llm/milvus-review), [Qdrant](/es/power-local-llm/qdrant-review) y [Weaviate](/es/power-local-llm/weaviate-review) documentan el despliegue con Docker o autoalojado.',
          '**Nube gestionada.** [Chroma](/es/power-local-llm/chroma-review), [Milvus](/es/power-local-llm/milvus-review), [Qdrant](/es/power-local-llm/qdrant-review) y [Weaviate](/es/power-local-llm/weaviate-review) documentan una oferta alojada en la nube además del autoalojamiento.',
          '**Licencia.** Chroma, Milvus y Qdrant son Apache-2.0 y el núcleo de Weaviate es BSD-3-Clause, con algunas funciones restringidas bajo su propia Weaviate License — consulta el análisis de cada herramienta para los detalles.',
        ],
      },
      notesDifferences: {
        id: 'notes-differences',
        title: 'Integraciones con notas: en qué se diferencian',
        items: [
          '**App de notas.** [BMO Chatbot](/es/power-local-llm/bmo-chatbot-review), [Copilot for Obsidian](/es/power-local-llm/copilot-for-obsidian-review), [Smart Connections](/es/power-local-llm/smart-connections-review) y [Text Generator](/es/power-local-llm/text-generator-review) para Obsidian; [logseq-copilot](/es/power-local-llm/logseq-copilot-review) para Logseq; [Joplin AI](/es/power-local-llm/joplin-ai-agent-review) para Joplin; [Blinko](/es/power-local-llm/blinko-review), [SiYuan](/es/power-local-llm/siyuan-review) y [Surf](/es/power-local-llm/surf-review) son apps de notas independientes con IA integrada.',
          '**LLM locales.** [BMO Chatbot](/es/power-local-llm/bmo-chatbot-review), [Copilot for Obsidian](/es/power-local-llm/copilot-for-obsidian-review), [Joplin AI](/es/power-local-llm/joplin-ai-agent-review), [Karakeep](/es/power-local-llm/karakeep-review), [logseq-copilot](/es/power-local-llm/logseq-copilot-review) y [Surf](/es/power-local-llm/surf-review) documentan el trabajo con LLM locales.',
          '**Búsqueda semántica.** [Karakeep](/es/power-local-llm/karakeep-review) y [Smart Connections](/es/power-local-llm/smart-connections-review) documentan la búsqueda semántica en las notas.',
          '**Chat con tus notas.** [BMO Chatbot](/es/power-local-llm/bmo-chatbot-review) y [Joplin AI](/es/power-local-llm/joplin-ai-agent-review) documentan el chat con tus notas.',
        ],
      },
      searchDifferences: {
        id: 'search-differences',
        title: 'Búsqueda e investigación locales: en qué se diferencian',
        items: [
          '**LLM locales.** [Farfalle](/es/power-local-llm/farfalle-review), [Karakeep](/es/power-local-llm/karakeep-review), [Local Deep Research](/es/power-local-llm/local-deep-research-review), [Onyx](/es/power-local-llm/onyx-review) y [Vane (antes Perplexica)](/es/power-local-llm/vane-review) documentan el trabajo con LLM locales.',
          '**Búsqueda web.** [Farfalle](/es/power-local-llm/farfalle-review), [Local Deep Research](/es/power-local-llm/local-deep-research-review), [Onyx](/es/power-local-llm/onyx-review) y [Vane (antes Perplexica)](/es/power-local-llm/vane-review) documentan la búsqueda en la web.',
          '**Tus propios archivos.** [Local Deep Research](/es/power-local-llm/local-deep-research-review), [Onyx](/es/power-local-llm/onyx-review) y [Smart Connections](/es/power-local-llm/smart-connections-review) documentan la búsqueda en tus propios archivos o notas.',
          '**Citas.** [Local Deep Research](/es/power-local-llm/local-deep-research-review) y [Vane (antes Perplexica)](/es/power-local-llm/vane-review) documentan la cita de fuentes.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Lo que esta comparativa no puede decirte',
        items: [
          'Compara capacidades documentadas, no calidad. No dice nada sobre la precisión de las respuestas, la velocidad de indexación ni lo bien que escala una herramienta — PromptQuorum no ha medido estos aspectos en las herramientas listadas.',
          'Los guiones son lagunas en la documentación que revisamos, no hallazgos negativos. Algunas herramientas pueden admitir una función que su README no menciona.',
          'El estado del proyecto importa: GitHub marca los repositorios de Flowise y h2oGPT como archivados (solo lectura) en el momento de redactar esta guía, lo que significa que no hay más desarrollo allí. Consulta el análisis de cada herramienta antes de elegirla para un proyecto nuevo.',
          'Las herramientas cambian rápido. El análisis de cada herramienta indica la versión con la que se contrastó, y esta guía se actualiza cuando se actualiza un análisis.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuál es la diferencia entre un framework RAG, una app de chat con documentos y una base de datos vectorial?',
            a: 'Un framework RAG es un kit para desarrolladores que sirve para construir pipelines de generación aumentada por recuperación. Una app de chat con documentos es una aplicación ya hecha para hacer preguntas sobre tus archivos. Una base de datos vectorial almacena los embeddings numéricos que hacen posible la búsqueda por similitud y suele ser un componente dentro de las otras dos. Hacen trabajos distintos, por eso se comparan por separado.',
          },
          {
            q: '¿Qué significa un guion en la tabla comparativa?',
            a: 'Significa que la documentación del propio proyecto no indica ese atributo. No significa que la función no exista; consulta el análisis de la herramienta o su repositorio.',
          },
          {
            q: '¿Por qué una herramienta aparece más de una vez?',
            a: 'Algunas herramientas hacen más de un trabajo — por ejemplo, una herramienta de búsqueda que además se integra en una app de notas — por eso figuran en cada tipo al que pertenecen, con los atributos que corresponden a ese tipo.',
          },
          {
            q: '¿Alguna de estas herramientas tiene un enlace de afiliado?',
            a: 'No. PromptQuorum no tiene ninguna relación de afiliación con ninguna herramienta de esta comparativa en el momento de redactarla, y ningún enlace de aquí genera comisión.',
          },
          {
            q: '¿Con qué frecuencia se actualiza esta comparativa?',
            a: 'Se actualiza dos veces al año y cada vez que se actualiza el análisis de alguna de las herramientas listadas, porque la tabla se genera a partir de los mismos datos que esos análisis.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'El README o sitio web oficial de cada herramienta, indicado en el análisis de esa herramienta en PromptQuorum (enlazado desde la tabla comparativa).',
          '[Directorio de apps de IA local de PromptQuorum](/es/directory) — el registro a partir del cual se genera cada fila de la tabla.',
          'Estado del repositorio de GitHub (archivado o activo) de cada proyecto listado, comprobado al redactar esta guía.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Directorio de software local](/es/directory) — explora más de 200 apps de IA local y filtra por categoría.',
          '[Motores de inferencia, runtimes y pasarelas locales comparados](/es/power-local-llm/local-llm-run-serve-compared) — la misma comparación para las herramientas que ejecutan los modelos.',
          '[Herramientas locales de imagen, vídeo y visión comparadas](/es/power-local-llm/local-llm-images-video-compared) — la misma comparación para la generación de imágenes y los modelos de visión.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Herramientas locales de conocimiento y recuperación comparadas (2026): RAG, chat con documentos, bases de datos vectoriales, notas y búsqueda',
      description:
        'Compara 40 herramientas locales de conocimiento y recuperación: frameworks RAG, chat con documentos, bases de datos vectoriales, integraciones con notas y búsqueda, según la documentación oficial.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
      inLanguage: 'es',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desarrolladores y usuarios de autoalojamiento que eligen herramientas locales de RAG y recuperación' },
      about: [
        { '@type': 'Thing', name: 'Generación aumentada por recuperación' },
        { '@type': 'Thing', name: 'Bases de datos vectoriales' },
        { '@type': 'Thing', name: 'Chat con documentos' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Herramientas locales de conocimiento y recuperación comparadas (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
        },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'RAG & Document Chat',
    title: 'ローカル知識・検索ツール比較(2026):RAG、ドキュメントチャット、ベクトルデータベース、ノート、検索',
    seoTitle: 'ローカルRAG・ドキュメントチャット・ベクトルDB比較2026',
    intro:
      'ローカルモデルに自分のドキュメントを扱わせるツールは、RAGフレームワーク・パイプライン、ドキュメント/PDFチャットアプリ、ベクトルデータベース、ノートアプリ連携、ローカル検索・リサーチツールという5つの異なる種類に分かれ、単一の機能一覧ではどれも公平に比較できません。このガイドでは、無料・フリーミアムの40ツールを種類ごとに比較します。比較表は各ツールのPromptQuorumレビューと同じデータから生成されるため、表とレビューの内容が食い違うことはありません。',
    metaDescription:
      'ローカルの知識・検索ツール40種を比較:RAGフレームワーク、ドキュメントチャット、ベクトルDB(Chroma、Milvus、Qdrant、Weaviate)、ノートプラグイン、検索。ライセンス、ローカルLLM対応、Docker、APIを公式ドキュメントから整理。',
    twitterDescription:
      'ローカルRAGフレームワーク、ドキュメントチャット、ベクトルDB、ノートプラグイン、検索ツールを種類別に比較。ローカルLLM対応、Docker、API、ハイブリッド検索を公式ドキュメントから整理。',
    audience:
      '検索拡張生成(RAG)、ドキュメントチャット、ベクトル検索、AIノートをローカルで動かすツールを選びたい開発者、セルフホスト派、プライバシー重視のユーザーで、1つにまとめた一覧ではなくツールの種類ごとに違いを整理して見たい方。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカルRAGツール比較',
    targetKeywords: [
      'ローカル rag 比較',
      'ローカル pdf チャット',
      'chroma qdrant weaviate 比較',
      'ローカル ドキュメントチャット おすすめ',
      'obsidian ai プラグイン ローカル',
      'セルフホスト rag フレームワーク',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**PromptQuorumディレクトリにある40のローカル知識・検索ツールは、別々に比較すべき5つの種類に分かれます。RAGフレームワーク・パイプライン(13ツール)、ドキュメント/PDFチャットアプリ(12)、ノートアプリ連携(10)、ローカル検索・リサーチツール(7)、ベクトルデータベース(4)です。** ベクトルデータベースでは4つのうち3つがハイブリッド検索を、4つすべてがメタデータフィルタリングをドキュメントに記載しています。RAGフレームワークでは4つがビジュアルビルダーを、9つがローカルLLM対応をドキュメントに記載しています。下の比較表を使い、インストールする前に各ツール自身のレビューを読んでください。',
    quickAnswerTop: {
      en: {
        question: 'どのローカルRAGまたはドキュメントチャットツールを使うべきか',
        answer:
          'ツールの種類によって異なるため、一度に1つの種類の中で比較してください。ローカルLLMでの利用、Dockerやセルフホスト、API、ハイブリッド検索、ビジュアルビルダー、すでに使っているノートアプリなど、最も重要な条件で選び、各ツールの公式ドキュメントから生成された下の表を活用してください。',
        bullets: [
          'RAGフレームワーク:13ツールを、ビジュアルビルダー、ローカルLLM、エージェント、ベクトルストア、Docker、APIで比較。',
          'ドキュメント/PDFチャット:12ツールを、ローカルLLM、ドキュメント形式、引用、デスクトップアプリ、Docker、APIで比較。',
          'ベクトルデータベース:4ツールを、ハイブリッド検索、メタデータフィルタリング、クラスタリング、Docker、マネージドクラウドで比較。',
          'ノート連携:10ツールを、対応ノートアプリ、ローカルLLM、セマンティック検索、ノートとのチャットで比較。',
          'ローカル検索・リサーチ:7ツールを、ローカルLLM、Web検索、自分のファイル、引用で比較。',
          'ダッシュ(—)は、プロジェクトのドキュメントに記載がないという意味であり、機能がないという意味ではありません。',
        ],
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '比較の方法', anchor: 'how-we-compared' },
      { label: '比較表', anchor: 'comparison-table' },
      { label: 'RAGフレームワーク:違い', anchor: 'rag-differences' },
      { label: 'ドキュメント/PDFチャット:違い', anchor: 'doc-differences' },
      { label: 'ベクトルデータベース:違い', anchor: 'vector-differences' },
      { label: 'ノート連携:違い', anchor: 'notes-differences' },
      { label: 'ローカル検索・リサーチ:違い', anchor: 'search-differences' },
      { label: 'この比較で分からないこと', anchor: 'limitations' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '出典', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルモデルに自分のドキュメントを扱わせるツールは、RAGフレームワーク、ドキュメントチャットアプリ、ベクトルデータベース、ノート連携、ローカル検索という5つの異なる種類があるため、PromptQuorumディレクトリの40ツールは、各ツール自身のレビューと同じツールデータから生成した表を使って、種類ごとに比較している。',
          },
          {
            type: 'plain-terms',
            text: '開発者向けの部品にあたるツール、ファイルとチャットするための完成したアプリ、検索を成り立たせるベクトルを保存するツール、すでに使っているノートアプリに組み込むツールがあります。データベースとノートプラグインを同じ機能で比べても意味がないため、このガイドでは同じ種類どうしを比較します。',
          },
        ],
        items: [
          '40ツール、5つの種類:RAGフレームワーク・パイプライン(13)、ドキュメント/PDFチャットアプリ(12)、ノートアプリ連携(10)、ローカル検索・リサーチツール(7)、ベクトルデータベース(4)。Onyx、Karakeep、Surfのように複数の種類にまたがるツールもあり、該当する種類のそれぞれに掲載されています。',
          '表は各ツールのレコードから生成され、公式のREADMEやサイトと照合されています。ダッシュは「ドキュメントに記載なし」を意味し、「非対応」を意味することはありません。',
          '執筆時点で、GitHubはFlowiseとh2oGPTのリポジトリをアーカイブ済み(読み取り専用)としています。これらをベースに構築する前に、レビューで最新の状況を確認してください。',
          '表内のツール名はすべて、そのツール自身のPromptQuorumレビューにリンクしています。インストール手順と制限事項はそちらで扱っています。',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '比較の方法',
        content: [
          '各ツールの事実(価格、ライセンス、対応プラットフォーム、ハードウェア要件、種類ごとの属性)は、そのツールのディレクトリレコードに一度だけ保存されます。下の比較表はこのレコードから生成され、ツール自身のレビューも同じレコードを参照するため、両者が異なる値を示すことはありません。',
          '種類ごとの属性(たとえばローカルLLM対応やハイブリッド検索)は、各プロジェクトの公式READMEまたはウェブサイトから取得し、そこに書かれた文言と照合しています。ドキュメントに記載がない場合は、推測せず表にダッシュを表示します。条件付きの記載(ロードマップのみ、エンタープライズ版、関連プロジェクト、有料プラン)の場合は、その属性を表から外し、ツールのレビューで扱います。',
          '表に載っているのは、PromptQuorum独自のレビューがあるツールだけです。この比較の対象は、自分のハードウェアで動くツールまたはセルフホストするツールで、順位付けはしません。最適なツールは、あなたの制約条件によって変わるためです。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '比較表',
        content: '下からツールの種類を選び、行に沿って横に読んでください。ツール名をクリックすると、PromptQuorumの詳細レビューが開きます。',
        component: 'CategoryCompareTable',
      },
      ragDifferences: {
        id: 'rag-differences',
        title: 'RAGフレームワーク:違い',
        items: [
          '**ビジュアルビルダー。** [Dify](/ja/power-local-llm/dify-ai-workflow-builder-review)、[Flowise](/ja/power-local-llm/flowise-ai-visual-workflow-builder-review)、[Langflow](/ja/power-local-llm/langflow-visual-ai-orchestration-review)および[Self-hosted AI Starter Kit](/ja/power-local-llm/self-hosted-ai-starter-kit-review)は、ビジュアルまたはドラッグ&ドロップ式のワークフロービルダーをドキュメントに記載しています。',
          '**ローカルLLM。** [cognee](/ja/power-local-llm/cognee-review)、[Haystack](/ja/power-local-llm/haystack-deepset-rag-framework-review)、[Langchain-Chatchat](/ja/power-local-llm/langchain-chatchat-review)、[LlamaIndex](/ja/power-local-llm/llamaindex-rag-framework-review)、[MaxKB](/ja/power-local-llm/maxkb-review)、[Onyx](/ja/power-local-llm/onyx-review)、[Self-hosted AI Starter Kit](/ja/power-local-llm/self-hosted-ai-starter-kit-review)、[txtai](/ja/power-local-llm/txtai-embedded-vector-database-review)および[Vane (formerly Perplexica)](/ja/power-local-llm/vane-review)は、ローカルLLMでの利用をドキュメントに記載しています。',
          '**エージェント。** [Dify](/ja/power-local-llm/dify-ai-workflow-builder-review)、[Flowise](/ja/power-local-llm/flowise-ai-visual-workflow-builder-review)、[Haystack](/ja/power-local-llm/haystack-deepset-rag-framework-review)、[Langchain-Chatchat](/ja/power-local-llm/langchain-chatchat-review)、[Langflow](/ja/power-local-llm/langflow-visual-ai-orchestration-review)、[LlamaIndex](/ja/power-local-llm/llamaindex-rag-framework-review)、[LongMemory](/ja/power-local-llm/longmemory-review)、[MaxKB](/ja/power-local-llm/maxkb-review)、[Onyx](/ja/power-local-llm/onyx-review)、[Self-hosted AI Starter Kit](/ja/power-local-llm/self-hosted-ai-starter-kit-review)および[txtai](/ja/power-local-llm/txtai-embedded-vector-database-review)は、エージェント対応をドキュメントに記載しています。',
          '**複数のベクトルストア。** [Flowise](/ja/power-local-llm/flowise-ai-visual-workflow-builder-review)、[Langchain-Chatchat](/ja/power-local-llm/langchain-chatchat-review)、[Langflow](/ja/power-local-llm/langflow-visual-ai-orchestration-review)および[LlamaIndex](/ja/power-local-llm/llamaindex-rag-framework-review)は、複数のベクトルストアとの連携をドキュメントに記載しています。',
          '**Dockerとセルフホスト。** [cognee](/ja/power-local-llm/cognee-review)、[Dify](/ja/power-local-llm/dify-ai-workflow-builder-review)、[Flowise](/ja/power-local-llm/flowise-ai-visual-workflow-builder-review)、[Haystack](/ja/power-local-llm/haystack-deepset-rag-framework-review)、[Langchain-Chatchat](/ja/power-local-llm/langchain-chatchat-review)、[Langflow](/ja/power-local-llm/langflow-visual-ai-orchestration-review)、[LongMemory](/ja/power-local-llm/longmemory-review)、[MaxKB](/ja/power-local-llm/maxkb-review)、[Onyx](/ja/power-local-llm/onyx-review)、[Self-hosted AI Starter Kit](/ja/power-local-llm/self-hosted-ai-starter-kit-review)、[txtai](/ja/power-local-llm/txtai-embedded-vector-database-review)および[Vane (formerly Perplexica)](/ja/power-local-llm/vane-review)は、Dockerまたはセルフホストでのデプロイをドキュメントに記載しています。',
          '**API。** [cognee](/ja/power-local-llm/cognee-review)、[Dify](/ja/power-local-llm/dify-ai-workflow-builder-review)、[Flowise](/ja/power-local-llm/flowise-ai-visual-workflow-builder-review)、[Langchain-Chatchat](/ja/power-local-llm/langchain-chatchat-review)、[Langflow](/ja/power-local-llm/langflow-visual-ai-orchestration-review)、[LongMemory](/ja/power-local-llm/longmemory-review)、[Onyx](/ja/power-local-llm/onyx-review)、[txtai](/ja/power-local-llm/txtai-embedded-vector-database-review)および[Vane (formerly Perplexica)](/ja/power-local-llm/vane-review)は、HTTPまたはREST APIをドキュメントに記載しています。',
        ],
      },
      docDifferences: {
        id: 'doc-differences',
        title: 'ドキュメント/PDFチャット:違い',
        items: [
          '**ローカルLLM。** [AnythingLLM](/ja/power-local-llm/anythingllm-review)、[h2oGPT](/ja/power-local-llm/h2ogpt-review)、[Khoj](/ja/power-local-llm/khoj-ai-second-brain-review)、[Langchain-Chatchat](/ja/power-local-llm/langchain-chatchat-review)、[PrivateGPT](/ja/power-local-llm/privategpt-review)、[Quivr](/ja/power-local-llm/quivr-self-hosted-knowledge-assistant-review)、[Sidekick](/ja/power-local-llm/sidekick-review)および[Surf](/ja/power-local-llm/surf-review)は、ローカルLLMでの利用をドキュメントに記載しています。',
          '**ドキュメント形式。** [AnythingLLM](/ja/power-local-llm/anythingllm-review)、[h2oGPT](/ja/power-local-llm/h2ogpt-review)、[Khoj](/ja/power-local-llm/khoj-ai-second-brain-review)、[PrivateGPT](/ja/power-local-llm/privategpt-review)、[Quivr](/ja/power-local-llm/quivr-self-hosted-knowledge-assistant-review)および[RAGFlow](/ja/power-local-llm/ragflow-document-understanding-rag-review)は、複数の対応ファイル形式をドキュメントに記載しています。',
          '**引用。** [AnythingLLM](/ja/power-local-llm/anythingllm-review)、[PrivateGPT](/ja/power-local-llm/privategpt-review)、[RAGFlow](/ja/power-local-llm/ragflow-document-understanding-rag-review)、[Sidekick](/ja/power-local-llm/sidekick-review)および[Surf](/ja/power-local-llm/surf-review)は、回答での情報源の引用をドキュメントに記載しています。',
          '**デスクトップアプリ。** [AnythingLLM](/ja/power-local-llm/anythingllm-review)、[Khoj](/ja/power-local-llm/khoj-ai-second-brain-review)および[Surf](/ja/power-local-llm/surf-review)は、インストール型のデスクトップアプリをドキュメントに記載しています。',
          '**Dockerとセルフホスト。** [AnythingLLM](/ja/power-local-llm/anythingllm-review)、[h2oGPT](/ja/power-local-llm/h2ogpt-review)、[Langchain-Chatchat](/ja/power-local-llm/langchain-chatchat-review)、[PrivateGPT](/ja/power-local-llm/privategpt-review)および[RAGFlow](/ja/power-local-llm/ragflow-document-understanding-rag-review)は、Dockerまたはセルフホストでのデプロイをドキュメントに記載しています。',
          '**API。** [AnythingLLM](/ja/power-local-llm/anythingllm-review)、[h2oGPT](/ja/power-local-llm/h2ogpt-review)、[Langchain-Chatchat](/ja/power-local-llm/langchain-chatchat-review)、[PrivateGPT](/ja/power-local-llm/privategpt-review)、[RAGFlow](/ja/power-local-llm/ragflow-document-understanding-rag-review)および[ToolNeuron](/ja/power-local-llm/toolneuron-review)は、APIをドキュメントに記載しています。',
        ],
      },
      vectorDifferences: {
        id: 'vector-differences',
        title: 'ベクトルデータベース:違い',
        items: [
          '**ハイブリッド検索。** [Milvus](/ja/power-local-llm/milvus-review)、[Qdrant](/ja/power-local-llm/qdrant-review)および[Weaviate](/ja/power-local-llm/weaviate-review)は、キーワード検索とベクトル検索を組み合わせたハイブリッド検索をドキュメントに記載しています。',
          '**メタデータフィルタリング。** [Chroma](/ja/power-local-llm/chroma-review)、[Milvus](/ja/power-local-llm/milvus-review)、[Qdrant](/ja/power-local-llm/qdrant-review)および[Weaviate](/ja/power-local-llm/weaviate-review)は、メタデータによる絞り込みをドキュメントに記載しています。',
          '**分散デプロイ。** [Milvus](/ja/power-local-llm/milvus-review)、[Qdrant](/ja/power-local-llm/qdrant-review)および[Weaviate](/ja/power-local-llm/weaviate-review)は、分散またはクラスタ構成でのデプロイをドキュメントに記載しています。',
          '**Dockerとセルフホスト。** [Milvus](/ja/power-local-llm/milvus-review)、[Qdrant](/ja/power-local-llm/qdrant-review)および[Weaviate](/ja/power-local-llm/weaviate-review)は、Dockerまたはセルフホストでのデプロイをドキュメントに記載しています。',
          '**マネージドクラウド。** [Chroma](/ja/power-local-llm/chroma-review)、[Milvus](/ja/power-local-llm/milvus-review)、[Qdrant](/ja/power-local-llm/qdrant-review)および[Weaviate](/ja/power-local-llm/weaviate-review)は、セルフホストに加えて、ホスト型のクラウド提供をドキュメントに記載しています。',
          '**ライセンス。** Chroma、Milvus、QdrantはApache-2.0で、WeaviateのコアはBSD-3-Clauseです。一部の制限付き機能は独自のWeaviate Licenseの下にあります。詳細は各ツールのレビューを参照してください。',
        ],
      },
      notesDifferences: {
        id: 'notes-differences',
        title: 'ノート連携:違い',
        items: [
          '**対応ノートアプリ。** Obsidian向けは[BMO Chatbot](/ja/power-local-llm/bmo-chatbot-review)、[Copilot for Obsidian](/ja/power-local-llm/copilot-for-obsidian-review)、[Smart Connections](/ja/power-local-llm/smart-connections-review)および[Text Generator](/ja/power-local-llm/text-generator-review)、Logseq向けは[logseq-copilot](/ja/power-local-llm/logseq-copilot-review)、Joplin向けは[Joplin AI](/ja/power-local-llm/joplin-ai-agent-review)です。[Blinko](/ja/power-local-llm/blinko-review)、[SiYuan](/ja/power-local-llm/siyuan-review)および[Surf](/ja/power-local-llm/surf-review)は、AIを内蔵した独立型のノートアプリです。',
          '**ローカルLLM。** [BMO Chatbot](/ja/power-local-llm/bmo-chatbot-review)、[Copilot for Obsidian](/ja/power-local-llm/copilot-for-obsidian-review)、[Joplin AI](/ja/power-local-llm/joplin-ai-agent-review)、[Karakeep](/ja/power-local-llm/karakeep-review)、[logseq-copilot](/ja/power-local-llm/logseq-copilot-review)および[Surf](/ja/power-local-llm/surf-review)は、ローカルLLMでの利用をドキュメントに記載しています。',
          '**セマンティック検索。** [Karakeep](/ja/power-local-llm/karakeep-review)および[Smart Connections](/ja/power-local-llm/smart-connections-review)は、ノートに対するセマンティック検索をドキュメントに記載しています。',
          '**ノートとのチャット。** [BMO Chatbot](/ja/power-local-llm/bmo-chatbot-review)および[Joplin AI](/ja/power-local-llm/joplin-ai-agent-review)は、ノートとのチャットをドキュメントに記載しています。',
        ],
      },
      searchDifferences: {
        id: 'search-differences',
        title: 'ローカル検索・リサーチ:違い',
        items: [
          '**ローカルLLM。** [Farfalle](/ja/power-local-llm/farfalle-review)、[Karakeep](/ja/power-local-llm/karakeep-review)、[Local Deep Research](/ja/power-local-llm/local-deep-research-review)、[Onyx](/ja/power-local-llm/onyx-review)および[Vane (formerly Perplexica)](/ja/power-local-llm/vane-review)は、ローカルLLMでの利用をドキュメントに記載しています。',
          '**Web検索。** [Farfalle](/ja/power-local-llm/farfalle-review)、[Local Deep Research](/ja/power-local-llm/local-deep-research-review)、[Onyx](/ja/power-local-llm/onyx-review)および[Vane (formerly Perplexica)](/ja/power-local-llm/vane-review)は、Web検索をドキュメントに記載しています。',
          '**自分のファイル。** [Local Deep Research](/ja/power-local-llm/local-deep-research-review)、[Onyx](/ja/power-local-llm/onyx-review)および[Smart Connections](/ja/power-local-llm/smart-connections-review)は、自分のファイルやノートの検索をドキュメントに記載しています。',
          '**引用。** [Local Deep Research](/ja/power-local-llm/local-deep-research-review)および[Vane (formerly Perplexica)](/ja/power-local-llm/vane-review)は、情報源の引用をドキュメントに記載しています。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'この比較で分からないこと',
        items: [
          'この比較が扱うのはドキュメントに記載された機能であり、品質ではありません。回答の精度、インデックス作成の速度、スケーラビリティについては何も示していません。PromptQuorumは、掲載ツールについてこれらを測定していません。',
          'ダッシュは、確認したドキュメントに記載がないことを示すもので、否定的な評価ではありません。READMEに書かれていなくても、その機能に対応しているツールがある可能性があります。',
          'プロジェクトの状況も重要です。執筆時点で、GitHubはFlowiseとh2oGPTのリポジトリをアーカイブ済み(読み取り専用)としており、そこでは今後の開発が行われないことを意味します。新しいプロジェクトで採用する前に、各ツールのレビューを確認してください。',
          'ツールは急速に変化します。各ツールのレビューには確認したバージョンが明記されており、このガイドはレビューが更新されるたびに更新されます。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'RAGフレームワーク、ドキュメントチャットアプリ、ベクトルデータベースの違いは何ですか?',
            a: 'RAGフレームワークは、検索拡張パイプラインを構築するための開発者向けツールキットです。ドキュメントチャットアプリは、ファイルについて質問するための完成したアプリケーションです。ベクトルデータベースは、類似検索を成り立たせる数値の埋め込みを保存するもので、通常は前の2つの内部の部品として使われます。それぞれ役割が異なるため、別々に比較しています。',
          },
          {
            q: '比較表のダッシュは何を意味しますか?',
            a: 'プロジェクト自身のドキュメントにその属性の記載がないという意味です。機能がないという意味ではありません。ツールのレビューやリポジトリを確認してください。',
          },
          {
            q: 'なぜ同じツールが複数回登場するのですか?',
            a: '一部のツールは、ノートアプリに組み込めて検索もできるツールのように、複数の役割を持ちます。そのため、該当する種類のそれぞれに、その種類に当てはまる属性とともに掲載しています。',
          },
          {
            q: 'これらのツールにアフィリエイトリンクはありますか?',
            a: 'いいえ。執筆時点で、PromptQuorumはこの比較に掲載されているどのツールともアフィリエイト関係がなく、ここにあるリンクから手数料が発生することもありません。',
          },
          {
            q: 'この比較はどのくらいの頻度で更新されますか?',
            a: '年に2回、および掲載ツールのレビューが更新されるたびに更新されます。表がそれらのレビューと同じデータから生成されているためです。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '各ツールの公式READMEまたはウェブサイト(そのツールのPromptQuorumレビューに記載。比較表からリンク)。',
          '[PromptQuorumローカルAIアプリディレクトリ](/ja/directory) — 表の各行の生成元となるレコード。',
          '掲載された各プロジェクトのGitHubリポジトリの状況(アーカイブ済みか稼働中か)。このガイドの執筆時に確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルソフトウェアディレクトリ](/ja/directory) — 200以上のローカルAIアプリを一覧し、カテゴリで絞り込めます。',
          '[ローカル推論エンジン・ランタイム・ゲートウェイ比較](/ja/power-local-llm/local-llm-run-serve-compared) — モデルを動かすツールについての同様の比較。',
          '[ローカル画像・動画・ビジョンツール比較](/ja/power-local-llm/local-llm-images-video-compared) — 画像生成とビジョンモデルについての同様の比較。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカル知識・検索ツール比較(2026):RAG、ドキュメントチャット、ベクトルデータベース、ノート、検索',
      description:
        'ローカルの知識・検索ツール40種を比較:RAGフレームワーク、ドキュメントチャット、ベクトルデータベース、ノート連携、検索を公式ドキュメントから整理。',
      url: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
      inLanguage: 'ja',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'ローカルRAG・検索ツールを選ぶ開発者とセルフホスト派' },
      about: [
        { '@type': 'Thing', name: '検索拡張生成(RAG)' },
        { '@type': 'Thing', name: 'ベクトルデータベース' },
        { '@type': 'Thing', name: 'ドキュメントチャット' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'ローカル知識・検索ツール比較(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
        },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'RAG & Document Chat',
    title: '本地知识与检索工具对比(2026):RAG、文档对话、向量数据库、笔记与搜索',
    seoTitle: '本地RAG、文档对话与向量数据库对比2026',
    intro:
      '让本地模型处理你自己文档的工具分为五种不同类型——RAG框架与流水线、文档与PDF对话应用、向量数据库、笔记应用集成,以及本地搜索与研究工具——没有任何单一的功能清单能公平地比较它们。本指南逐类对比40款免费及免费增值工具,所用对比表与每款工具各自的PromptQuorum评测生成自同一份数据,因此表格与评测不会相互矛盾。',
    metaDescription:
      '并排对比40款本地知识与检索工具:RAG框架、文档对话、向量数据库(Chroma、Milvus、Qdrant、Weaviate)、笔记插件与搜索。许可证、本地LLM支持、Docker、API,均取自官方文档。',
    twitterDescription:
      '按类型对比本地RAG框架、文档对话应用、向量数据库、笔记插件与搜索工具——本地LLM支持、Docker、API、混合搜索——均取自官方文档。',
    audience:
      '选择工具在本地运行检索增强生成、文档对话、向量搜索或AI笔记的开发者、自托管用户和注重隐私的用户,他们希望按工具类型逐一了解差异,而不是一份混杂的清单。',
    readTime: '阅读约11分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '本地RAG工具对比',
    targetKeywords: [
      '本地rag对比',
      '本地与pdf对话',
      'chroma vs qdrant vs weaviate',
      '最佳本地文档对话',
      'obsidian本地ai插件',
      '自托管rag框架',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**PromptQuorum目录中的40款本地知识与检索工具分为五类,应当分别比较:RAG框架与流水线(13款)、文档与PDF对话应用(12款)、笔记应用集成(10款)、本地搜索与研究工具(7款)以及向量数据库(4款)。** 在向量数据库中,4款里有3款记载了混合搜索,4款全部记载了元数据过滤;在RAG框架中,4款记载了可视化构建器,9款记载了本地LLM支持。请使用下方的对比表,并在安装前阅读每款工具各自的评测。',
    quickAnswerTop: {
      en: {
        question: '我应该使用哪款本地RAG或文档对话工具?',
        answer:
          '这取决于工具的类型,因此请一次只在同一类型内比较。按对你最重要的限制条件来选择——是否支持本地LLM、Docker或自托管、API、混合搜索、可视化构建器,或者你已在使用的笔记应用——并使用下方由各工具官方文档生成的表格。',
        bullets: [
          'RAG框架:对13款工具在可视化构建器、本地LLM、智能体、向量存储、Docker和API方面进行对比。',
          '文档与PDF对话:对12款工具在本地LLM、文档格式、引用来源、桌面应用、Docker和API方面进行对比。',
          '向量数据库:对4款工具在混合搜索、元数据过滤、集群部署、Docker和托管云方面进行对比。',
          '笔记集成:对10款工具在所支持的笔记应用、本地LLM、语义搜索和与笔记对话方面进行对比。',
          '本地搜索与研究:对7款工具在本地LLM、网络搜索、你自己的文件和引用来源方面进行对比。',
          '破折号(—)表示项目文档未说明该项,而不是表示缺少该功能。',
        ],
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '我们如何对比', anchor: 'how-we-compared' },
      { label: '对比表', anchor: 'comparison-table' },
      { label: 'RAG框架:差异所在', anchor: 'rag-differences' },
      { label: '文档与PDF对话:差异所在', anchor: 'doc-differences' },
      { label: '向量数据库:差异所在', anchor: 'vector-differences' },
      { label: '笔记集成:差异所在', anchor: 'notes-differences' },
      { label: '本地搜索与研究:差异所在', anchor: 'search-differences' },
      { label: '本对比无法告诉你的事', anchor: 'limitations' },
      { label: '常见问题', anchor: 'faq' },
      { label: '资料来源', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '让本地模型处理你自己文档的工具有五种不同类型——RAG框架、文档对话应用、向量数据库、笔记集成和本地搜索——因此PromptQuorum目录中的40款工具按类型分别比较,所用表格与每款工具各自的评测生成自同一份工具数据。',
          },
          {
            type: 'plain-terms',
            text: '有些工具是面向开发者的构建模块,有些是与你的文件对话的现成应用,有些负责存储让搜索得以运作的向量,还有些则接入你已在使用的笔记应用。把数据库与笔记插件放在同样的功能上比较毫无意义,所以本指南只在同类之间比较。',
          },
        ],
        items: [
          '40款工具,五种类型:RAG框架与流水线(13款)、文档与PDF对话应用(12款)、笔记应用集成(10款)、本地搜索与研究工具(7款)以及向量数据库(4款)。Onyx、Karakeep和Surf等若干工具属于不止一种类型,并在每种类型中都会出现。',
          '表格生成自每款工具的记录,并对照其官方README或网站核对;破折号表示“文档中未说明”,绝不表示“没有”。',
          '在撰写本文时,GitHub将Flowise和h2oGPT仓库标记为已归档(只读);在基于它们进行构建之前,请查看它们的评测了解当前状态。',
          '表格中的每个工具名称都链接到其自己的PromptQuorum评测,安装步骤与局限均在评测中介绍。',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '我们如何对比',
        content: [
          '每款工具的事实——价格、许可证、平台、硬件需求以及特定类别的属性——只在该工具的目录记录中存储一次。下方的对比表生成自这些记录,而该工具自己的评测也依据同一份记录,因此两者不会给出不同的数值。',
          '特定类别的属性(例如本地LLM支持或混合搜索)取自各项目的官方README或网站,并对照其中的确切措辞核对。当文档没有提及时,表格显示破折号而不是猜测;当某项说法带有限定条件(仅在路线图中、企业版、配套项目或付费层级)时,该属性不会列入表格,而是在该工具的评测中说明。',
          '只有拥有自己PromptQuorum评测的工具才会出现在表格中。该对比列出的是运行在你自己硬件上或由你自托管的工具;它不做排名,因为合适的选择取决于你的限制条件。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '对比表',
        content: '请先在下方选择一种工具类型,然后横向阅读一行。点击工具名称即可打开其完整的PromptQuorum评测。',
        component: 'CategoryCompareTable',
      },
      ragDifferences: {
        id: 'rag-differences',
        title: 'RAG框架:差异所在',
        items: [
          '**可视化构建器。**[Dify](/zh/power-local-llm/dify-ai-workflow-builder-review)、[Flowise](/zh/power-local-llm/flowise-ai-visual-workflow-builder-review)、[Langflow](/zh/power-local-llm/langflow-visual-ai-orchestration-review)和[Self-hosted AI Starter Kit](/zh/power-local-llm/self-hosted-ai-starter-kit-review)记载了可视化或拖拽式工作流构建器。',
          '**本地LLM。**[cognee](/zh/power-local-llm/cognee-review)、[Haystack](/zh/power-local-llm/haystack-deepset-rag-framework-review)、[Langchain-Chatchat](/zh/power-local-llm/langchain-chatchat-review)、[LlamaIndex](/zh/power-local-llm/llamaindex-rag-framework-review)、[MaxKB](/zh/power-local-llm/maxkb-review)、[Onyx](/zh/power-local-llm/onyx-review)、[Self-hosted AI Starter Kit](/zh/power-local-llm/self-hosted-ai-starter-kit-review)、[txtai](/zh/power-local-llm/txtai-embedded-vector-database-review)和[Vane(原名Perplexica)](/zh/power-local-llm/vane-review)记载了对本地LLM的支持。',
          '**智能体。**[Dify](/zh/power-local-llm/dify-ai-workflow-builder-review)、[Flowise](/zh/power-local-llm/flowise-ai-visual-workflow-builder-review)、[Haystack](/zh/power-local-llm/haystack-deepset-rag-framework-review)、[Langchain-Chatchat](/zh/power-local-llm/langchain-chatchat-review)、[Langflow](/zh/power-local-llm/langflow-visual-ai-orchestration-review)、[LlamaIndex](/zh/power-local-llm/llamaindex-rag-framework-review)、[LongMemory](/zh/power-local-llm/longmemory-review)、[MaxKB](/zh/power-local-llm/maxkb-review)、[Onyx](/zh/power-local-llm/onyx-review)、[Self-hosted AI Starter Kit](/zh/power-local-llm/self-hosted-ai-starter-kit-review)和[txtai](/zh/power-local-llm/txtai-embedded-vector-database-review)记载了对智能体的支持。',
          '**多种向量存储。**[Flowise](/zh/power-local-llm/flowise-ai-visual-workflow-builder-review)、[Langchain-Chatchat](/zh/power-local-llm/langchain-chatchat-review)、[Langflow](/zh/power-local-llm/langflow-visual-ai-orchestration-review)和[LlamaIndex](/zh/power-local-llm/llamaindex-rag-framework-review)记载了与多种向量存储的集成。',
          '**Docker与自托管。**[cognee](/zh/power-local-llm/cognee-review)、[Dify](/zh/power-local-llm/dify-ai-workflow-builder-review)、[Flowise](/zh/power-local-llm/flowise-ai-visual-workflow-builder-review)、[Haystack](/zh/power-local-llm/haystack-deepset-rag-framework-review)、[Langchain-Chatchat](/zh/power-local-llm/langchain-chatchat-review)、[Langflow](/zh/power-local-llm/langflow-visual-ai-orchestration-review)、[LongMemory](/zh/power-local-llm/longmemory-review)、[MaxKB](/zh/power-local-llm/maxkb-review)、[Onyx](/zh/power-local-llm/onyx-review)、[Self-hosted AI Starter Kit](/zh/power-local-llm/self-hosted-ai-starter-kit-review)、[txtai](/zh/power-local-llm/txtai-embedded-vector-database-review)和[Vane(原名Perplexica)](/zh/power-local-llm/vane-review)记载了Docker或自托管部署。',
          '**API。**[cognee](/zh/power-local-llm/cognee-review)、[Dify](/zh/power-local-llm/dify-ai-workflow-builder-review)、[Flowise](/zh/power-local-llm/flowise-ai-visual-workflow-builder-review)、[Langchain-Chatchat](/zh/power-local-llm/langchain-chatchat-review)、[Langflow](/zh/power-local-llm/langflow-visual-ai-orchestration-review)、[LongMemory](/zh/power-local-llm/longmemory-review)、[Onyx](/zh/power-local-llm/onyx-review)、[txtai](/zh/power-local-llm/txtai-embedded-vector-database-review)和[Vane(原名Perplexica)](/zh/power-local-llm/vane-review)记载了HTTP或REST API。',
        ],
      },
      docDifferences: {
        id: 'doc-differences',
        title: '文档与PDF对话:差异所在',
        items: [
          '**本地LLM。**[AnythingLLM](/zh/power-local-llm/anythingllm-review)、[h2oGPT](/zh/power-local-llm/h2ogpt-review)、[Khoj](/zh/power-local-llm/khoj-ai-second-brain-review)、[Langchain-Chatchat](/zh/power-local-llm/langchain-chatchat-review)、[PrivateGPT](/zh/power-local-llm/privategpt-review)、[Quivr](/zh/power-local-llm/quivr-self-hosted-knowledge-assistant-review)、[Sidekick](/zh/power-local-llm/sidekick-review)和[Surf](/zh/power-local-llm/surf-review)记载了对本地LLM的支持。',
          '**文档格式。**[AnythingLLM](/zh/power-local-llm/anythingllm-review)、[h2oGPT](/zh/power-local-llm/h2ogpt-review)、[Khoj](/zh/power-local-llm/khoj-ai-second-brain-review)、[PrivateGPT](/zh/power-local-llm/privategpt-review)、[Quivr](/zh/power-local-llm/quivr-self-hosted-knowledge-assistant-review)和[RAGFlow](/zh/power-local-llm/ragflow-document-understanding-rag-review)记载了对多种文件格式的支持。',
          '**引用来源。**[AnythingLLM](/zh/power-local-llm/anythingllm-review)、[PrivateGPT](/zh/power-local-llm/privategpt-review)、[RAGFlow](/zh/power-local-llm/ragflow-document-understanding-rag-review)、[Sidekick](/zh/power-local-llm/sidekick-review)和[Surf](/zh/power-local-llm/surf-review)记载了在回答中引用来源。',
          '**桌面应用。**[AnythingLLM](/zh/power-local-llm/anythingllm-review)、[Khoj](/zh/power-local-llm/khoj-ai-second-brain-review)和[Surf](/zh/power-local-llm/surf-review)记载了可安装的桌面应用。',
          '**Docker与自托管。**[AnythingLLM](/zh/power-local-llm/anythingllm-review)、[h2oGPT](/zh/power-local-llm/h2ogpt-review)、[Langchain-Chatchat](/zh/power-local-llm/langchain-chatchat-review)、[PrivateGPT](/zh/power-local-llm/privategpt-review)和[RAGFlow](/zh/power-local-llm/ragflow-document-understanding-rag-review)记载了Docker或自托管部署。',
          '**API。**[AnythingLLM](/zh/power-local-llm/anythingllm-review)、[h2oGPT](/zh/power-local-llm/h2ogpt-review)、[Langchain-Chatchat](/zh/power-local-llm/langchain-chatchat-review)、[PrivateGPT](/zh/power-local-llm/privategpt-review)、[RAGFlow](/zh/power-local-llm/ragflow-document-understanding-rag-review)和[ToolNeuron](/zh/power-local-llm/toolneuron-review)记载了API。',
        ],
      },
      vectorDifferences: {
        id: 'vector-differences',
        title: '向量数据库:差异所在',
        items: [
          '**混合搜索。**[Milvus](/zh/power-local-llm/milvus-review)、[Qdrant](/zh/power-local-llm/qdrant-review)和[Weaviate](/zh/power-local-llm/weaviate-review)记载了关键词与向量的混合搜索。',
          '**元数据过滤。**[Chroma](/zh/power-local-llm/chroma-review)、[Milvus](/zh/power-local-llm/milvus-review)、[Qdrant](/zh/power-local-llm/qdrant-review)和[Weaviate](/zh/power-local-llm/weaviate-review)记载了按元数据过滤。',
          '**分布式部署。**[Milvus](/zh/power-local-llm/milvus-review)、[Qdrant](/zh/power-local-llm/qdrant-review)和[Weaviate](/zh/power-local-llm/weaviate-review)记载了分布式或集群部署。',
          '**Docker与自托管。**[Milvus](/zh/power-local-llm/milvus-review)、[Qdrant](/zh/power-local-llm/qdrant-review)和[Weaviate](/zh/power-local-llm/weaviate-review)记载了Docker或自托管部署。',
          '**托管云。**[Chroma](/zh/power-local-llm/chroma-review)、[Milvus](/zh/power-local-llm/milvus-review)、[Qdrant](/zh/power-local-llm/qdrant-review)和[Weaviate](/zh/power-local-llm/weaviate-review)除自托管外还记载了托管云服务。',
          '**许可证。**Chroma、Milvus和Qdrant采用Apache-2.0,Weaviate的核心采用BSD-3-Clause,部分受限功能采用其自有的Weaviate License——详情请参阅各工具的评测。',
        ],
      },
      notesDifferences: {
        id: 'notes-differences',
        title: '笔记集成:差异所在',
        items: [
          '**所支持的笔记应用。**[BMO Chatbot](/zh/power-local-llm/bmo-chatbot-review)、[Copilot for Obsidian](/zh/power-local-llm/copilot-for-obsidian-review)、[Smart Connections](/zh/power-local-llm/smart-connections-review)和[Text Generator](/zh/power-local-llm/text-generator-review)适用于Obsidian;[logseq-copilot](/zh/power-local-llm/logseq-copilot-review)适用于Logseq;[Joplin AI](/zh/power-local-llm/joplin-ai-agent-review)适用于Joplin;[Blinko](/zh/power-local-llm/blinko-review)、[SiYuan](/zh/power-local-llm/siyuan-review)和[Surf](/zh/power-local-llm/surf-review)是内置AI的独立笔记应用。',
          '**本地LLM。**[BMO Chatbot](/zh/power-local-llm/bmo-chatbot-review)、[Copilot for Obsidian](/zh/power-local-llm/copilot-for-obsidian-review)、[Joplin AI](/zh/power-local-llm/joplin-ai-agent-review)、[Karakeep](/zh/power-local-llm/karakeep-review)、[logseq-copilot](/zh/power-local-llm/logseq-copilot-review)和[Surf](/zh/power-local-llm/surf-review)记载了对本地LLM的支持。',
          '**语义搜索。**[Karakeep](/zh/power-local-llm/karakeep-review)和[Smart Connections](/zh/power-local-llm/smart-connections-review)记载了对笔记的语义搜索。',
          '**与你的笔记对话。**[BMO Chatbot](/zh/power-local-llm/bmo-chatbot-review)和[Joplin AI](/zh/power-local-llm/joplin-ai-agent-review)记载了与你的笔记对话。',
        ],
      },
      searchDifferences: {
        id: 'search-differences',
        title: '本地搜索与研究:差异所在',
        items: [
          '**本地LLM。**[Farfalle](/zh/power-local-llm/farfalle-review)、[Karakeep](/zh/power-local-llm/karakeep-review)、[Local Deep Research](/zh/power-local-llm/local-deep-research-review)、[Onyx](/zh/power-local-llm/onyx-review)和[Vane(原名Perplexica)](/zh/power-local-llm/vane-review)记载了对本地LLM的支持。',
          '**网络搜索。**[Farfalle](/zh/power-local-llm/farfalle-review)、[Local Deep Research](/zh/power-local-llm/local-deep-research-review)、[Onyx](/zh/power-local-llm/onyx-review)和[Vane(原名Perplexica)](/zh/power-local-llm/vane-review)记载了搜索网络。',
          '**你自己的文件。**[Local Deep Research](/zh/power-local-llm/local-deep-research-review)、[Onyx](/zh/power-local-llm/onyx-review)和[Smart Connections](/zh/power-local-llm/smart-connections-review)记载了搜索你自己的文件或笔记。',
          '**引用来源。**[Local Deep Research](/zh/power-local-llm/local-deep-research-review)和[Vane(原名Perplexica)](/zh/power-local-llm/vane-review)记载了引用来源。',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '本对比无法告诉你的事',
        items: [
          '它比较的是文档中记载的功能,而不是质量。它无法说明回答有多准确、索引速度有多快,或者某款工具的扩展性如何——PromptQuorum并未对所列工具测量过这些方面。',
          '破折号表示我们所查阅文档中的空白,而不是否定的结论。有些工具可能支持某项功能,只是其README没有提及。',
          '项目状态很重要:在撰写本文时,GitHub将Flowise和h2oGPT仓库标记为已归档(只读),这意味着那里不再有进一步的开发。在为新项目选用某款工具之前,请查看它的评测。',
          '工具变化很快。每款工具的评测都会说明其核对所依据的版本,而本指南会在评测更新时随之刷新。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'RAG框架、文档对话应用和向量数据库有什么区别?',
            a: 'RAG框架是用于构建检索增强流水线的开发者工具包。文档对话应用是用于就你的文件提问的现成应用。向量数据库存储让相似度搜索得以运作的数值嵌入,通常是前两者内部的一个组件。它们承担不同的工作,因此分别进行比较。',
          },
          {
            q: '对比表中的破折号是什么意思?',
            a: '它表示项目自己的文档没有说明该属性。这并不表示缺少该功能;请查看该工具的评测或其代码仓库。',
          },
          {
            q: '为什么有的工具会出现不止一次?',
            a: '有些工具承担不止一种工作——例如同时也能接入笔记应用的搜索工具——因此它们会列在所属的每个类型下,并附上适用于该类型的属性。',
          },
          {
            q: '这些工具有联盟链接吗?',
            a: '没有。在撰写本文时,PromptQuorum与本对比中的任何工具都没有联盟关系,这里的任何链接也都不会带来佣金。',
          },
          {
            q: '这份对比多久更新一次?',
            a: '每年更新两次,并且每当所列工具之一的评测更新时也会更新,因为表格与这些评测生成自同一份数据。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '每款工具的官方README或网站,列于该工具的PromptQuorum评测中(可从对比表链接进入)。',
          '[PromptQuorum本地AI应用目录](/zh/directory)——表格每一行所生成自的记录。',
          '所列每个项目的GitHub仓库状态(已归档或活跃),在撰写本指南时核对。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地软件目录](/zh/directory)——浏览全部200多款本地AI应用,并按类别筛选。',
          '[本地推理引擎、运行时与网关对比](/zh/power-local-llm/local-llm-run-serve-compared)——针对运行模型的工具所做的同类对比。',
          '[本地图像、视频与视觉工具对比](/zh/power-local-llm/local-llm-images-video-compared)——针对图像生成与视觉模型所做的同类对比。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地知识与检索工具对比(2026):RAG、文档对话、向量数据库、笔记与搜索',
      description:
        '并排对比40款本地知识与检索工具:RAG框架、文档对话、向量数据库、笔记集成与搜索,均取自官方文档。',
      url: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
      inLanguage: 'zh',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '选择本地RAG与检索工具的开发者和自托管用户' },
      about: [
        { '@type': 'Thing', name: '检索增强生成' },
        { '@type': 'Thing', name: '向量数据库' },
        { '@type': 'Thing', name: '文档对话' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: '本地知识与检索工具对比(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
        },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'RAG & Document Chat',
    title: 'Ferramentas locais de conhecimento e recuperação comparadas (2026): RAG, chat com documentos, bancos de dados vetoriais, notas e busca',
    seoTitle: 'RAG local, chat com documentos e bancos vetoriais 2026',
    intro:
      'As ferramentas que permitem a um modelo local trabalhar com os seus próprios documentos se dividem em cinco tipos diferentes — frameworks e pipelines de RAG, apps de chat com documentos e PDFs, bancos de dados vetoriais, integrações com apps de notas e ferramentas locais de busca e pesquisa — e nenhuma lista única de recursos compara todas de forma justa. Este guia compara 40 ferramentas gratuitas e freemium, um tipo de cada vez, usando uma tabela comparativa gerada a partir dos mesmos dados da análise própria de cada ferramenta no PromptQuorum, de modo que a tabela e as análises não podem se contradizer.',
    metaDescription:
      'Compare 40 ferramentas locais de conhecimento e recuperação: frameworks RAG, chat com documentos, bancos vetoriais (Chroma, Milvus, Qdrant, Weaviate), plugins de notas e busca. Licenças, LLMs locais, Docker e API, segundo a documentação oficial.',
    twitterDescription:
      'Frameworks RAG locais, apps de chat com documentos, bancos vetoriais, plugins de notas e ferramentas de busca comparados por tipo — suporte a LLMs locais, Docker, API, busca híbrida — segundo a documentação oficial.',
    audience:
      'Desenvolvedores, usuários que hospedam os próprios serviços e pessoas atentas à privacidade que escolhem ferramentas para executar localmente geração aumentada por recuperação, chat com documentos, busca vetorial ou notas com IA, e que querem as diferenças apresentadas por tipo de ferramenta, e não em uma lista única misturada.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ferramentas RAG locais comparadas',
    targetKeywords: [
      'comparação de rag local',
      'conversar com pdf localmente',
      'chroma vs qdrant vs weaviate',
      'melhor chat com documentos local',
      'plugins de ia para obsidian locais',
      'framework rag auto-hospedado',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**As 40 ferramentas locais de conhecimento e recuperação do diretório PromptQuorum se dividem em cinco tipos que devem ser comparados separadamente: frameworks e pipelines de RAG (13 ferramentas), apps de chat com documentos e PDFs (12), integrações com apps de notas (10), ferramentas locais de busca e pesquisa (7) e bancos de dados vetoriais (4).** Entre os bancos vetoriais, 3 de 4 documentam busca híbrida e 4 de 4 documentam filtragem por metadados; entre os frameworks RAG, 4 documentam um construtor visual e 9 documentam suporte a LLMs locais. Use a tabela comparativa abaixo e leia a análise de cada ferramenta antes de instalá-la.',
    quickAnswerTop: {
      en: {
        question: 'Qual ferramenta local de RAG ou chat com documentos devo usar?',
        answer:
          'Depende do tipo de ferramenta, então compare um tipo de cada vez. Escolha pela restrição que mais importa — trabalhar com LLMs locais, Docker ou auto-hospedagem, uma API, busca híbrida, um construtor visual ou qual app de notas você já usa — e use a tabela abaixo, gerada a partir da documentação oficial de cada ferramenta.',
        bullets: [
          'Frameworks RAG: 13 ferramentas comparadas em construtor visual, LLMs locais, agentes, bancos vetoriais, Docker e API.',
          'Chat com documentos e PDFs: 12 ferramentas comparadas em LLMs locais, formatos de documento, citações, app de desktop, Docker e API.',
          'Bancos de dados vetoriais: 4 ferramentas comparadas em busca híbrida, filtragem por metadados, clusterização, Docker e nuvem gerenciada.',
          'Integrações com notas: 10 ferramentas comparadas em qual app de notas, LLMs locais, busca semântica e chat com as notas.',
          'Busca e pesquisa locais: 7 ferramentas comparadas em LLMs locais, busca na web, seus próprios arquivos e citações.',
          'Um traço (—) significa que a documentação do projeto não informa esse item, e não que o recurso não exista.',
        ],
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Como comparamos', anchor: 'how-we-compared' },
      { label: 'Tabela comparativa', anchor: 'comparison-table' },
      { label: 'Frameworks RAG: o que muda', anchor: 'rag-differences' },
      { label: 'Chat com documentos e PDFs: o que muda', anchor: 'doc-differences' },
      { label: 'Bancos de dados vetoriais: o que muda', anchor: 'vector-differences' },
      { label: 'Integrações com notas: o que muda', anchor: 'notes-differences' },
      { label: 'Busca e pesquisa locais: o que muda', anchor: 'search-differences' },
      { label: 'O que esta comparação não pode dizer', anchor: 'limitations' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Fontes', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'As ferramentas que permitem a um modelo local trabalhar com os seus próprios documentos são de cinco tipos — frameworks RAG, apps de chat com documentos, bancos de dados vetoriais, integrações com notas e busca local — por isso as 40 ferramentas do diretório PromptQuorum são comparadas dentro de cada tipo, com uma tabela gerada a partir dos mesmos dados de ferramenta da análise própria de cada uma.',
          },
          {
            type: 'plain-terms',
            text: 'Algumas ferramentas são blocos de construção para desenvolvedores, outras são apps prontos para conversar com os seus arquivos, outras armazenam os vetores que fazem a busca funcionar e outras se conectam a um app de notas que você já usa. Comparar um banco de dados com um plugin de notas nos mesmos recursos não faz sentido, então este guia compara o que é comparável.',
          },
        ],
        items: [
          '40 ferramentas, cinco tipos: frameworks e pipelines de RAG (13), apps de chat com documentos e PDFs (12), integrações com apps de notas (10), ferramentas locais de busca e pesquisa (7) e bancos de dados vetoriais (4). Várias ferramentas, como Onyx, Karakeep e Surf, pertencem a mais de um tipo e aparecem em cada um deles.',
          'A tabela é gerada a partir do registro de cada ferramenta e conferida com o README ou o site oficial; um traço significa "não informado na documentação", nunca "não".',
          'O GitHub marca os repositórios do Flowise e do h2oGPT como arquivados (somente leitura) no momento da redação; consulte as análises deles para saber o estado atual antes de construir sobre eles.',
          'O nome de cada ferramenta na tabela leva à sua própria análise no PromptQuorum, onde são tratados os passos de instalação e os limites.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'Como comparamos',
        content: [
          'Os fatos de cada ferramenta — preço, licença, plataformas, requisitos de hardware e atributos específicos da categoria — são armazenados uma única vez, no registro da ferramenta no diretório. A tabela comparativa abaixo é gerada a partir desses registros, e a análise da própria ferramenta usa o mesmo registro, de modo que as duas não podem informar valores diferentes.',
          'Os atributos específicos da categoria (por exemplo, suporte a LLMs locais ou busca híbrida) foram tirados do README ou do site oficial de cada projeto e conferidos com a redação exata de lá. Onde a documentação é omissa, a tabela mostra um traço em vez de adivinhar; onde uma afirmação vem com ressalva (apenas no roteiro de desenvolvimento, uma edição empresarial, um projeto complementar ou um plano pago), o atributo fica fora da tabela e é tratado na análise da ferramenta.',
          'Somente ferramentas com análise própria no PromptQuorum estão na tabela. A comparação lista ferramentas que rodam no seu próprio hardware ou que você hospeda por conta própria; ela não as classifica, porque a certa depende da sua restrição.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa',
        content: 'Escolha abaixo um tipo de ferramenta e leia ao longo de uma linha. Clique no nome de uma ferramenta para abrir a análise completa dela no PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      ragDifferences: {
        id: 'rag-differences',
        title: 'Frameworks RAG: o que muda',
        items: [
          '**Construtor visual.** [Dify](/pt/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/pt/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langflow](/pt/power-local-llm/langflow-visual-ai-orchestration-review) e [Self-hosted AI Starter Kit](/pt/power-local-llm/self-hosted-ai-starter-kit-review) documentam um construtor de fluxos visual ou de arrastar e soltar.',
          '**LLMs locais.** [cognee](/pt/power-local-llm/cognee-review), [Haystack](/pt/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/pt/power-local-llm/langchain-chatchat-review), [LlamaIndex](/pt/power-local-llm/llamaindex-rag-framework-review), [MaxKB](/pt/power-local-llm/maxkb-review), [Onyx](/pt/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/pt/power-local-llm/self-hosted-ai-starter-kit-review), [txtai](/pt/power-local-llm/txtai-embedded-vector-database-review) e [Vane (antigo Perplexica)](/pt/power-local-llm/vane-review) documentam o trabalho com LLMs locais.',
          '**Agentes.** [Dify](/pt/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/pt/power-local-llm/flowise-ai-visual-workflow-builder-review), [Haystack](/pt/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/pt/power-local-llm/langchain-chatchat-review), [Langflow](/pt/power-local-llm/langflow-visual-ai-orchestration-review), [LlamaIndex](/pt/power-local-llm/llamaindex-rag-framework-review), [LongMemory](/pt/power-local-llm/longmemory-review), [MaxKB](/pt/power-local-llm/maxkb-review), [Onyx](/pt/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/pt/power-local-llm/self-hosted-ai-starter-kit-review) e [txtai](/pt/power-local-llm/txtai-embedded-vector-database-review) documentam suporte a agentes.',
          '**Vários bancos vetoriais.** [Flowise](/pt/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langchain-Chatchat](/pt/power-local-llm/langchain-chatchat-review), [Langflow](/pt/power-local-llm/langflow-visual-ai-orchestration-review) e [LlamaIndex](/pt/power-local-llm/llamaindex-rag-framework-review) documentam integrações com vários bancos vetoriais.',
          '**Docker e auto-hospedagem.** [cognee](/pt/power-local-llm/cognee-review), [Dify](/pt/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/pt/power-local-llm/flowise-ai-visual-workflow-builder-review), [Haystack](/pt/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/pt/power-local-llm/langchain-chatchat-review), [Langflow](/pt/power-local-llm/langflow-visual-ai-orchestration-review), [LongMemory](/pt/power-local-llm/longmemory-review), [MaxKB](/pt/power-local-llm/maxkb-review), [Onyx](/pt/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/pt/power-local-llm/self-hosted-ai-starter-kit-review), [txtai](/pt/power-local-llm/txtai-embedded-vector-database-review) e [Vane (antigo Perplexica)](/pt/power-local-llm/vane-review) documentam implantação com Docker ou auto-hospedada.',
          '**API.** [cognee](/pt/power-local-llm/cognee-review), [Dify](/pt/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/pt/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langchain-Chatchat](/pt/power-local-llm/langchain-chatchat-review), [Langflow](/pt/power-local-llm/langflow-visual-ai-orchestration-review), [LongMemory](/pt/power-local-llm/longmemory-review), [Onyx](/pt/power-local-llm/onyx-review), [txtai](/pt/power-local-llm/txtai-embedded-vector-database-review) e [Vane (antigo Perplexica)](/pt/power-local-llm/vane-review) documentam uma API HTTP ou REST.',
        ],
      },
      docDifferences: {
        id: 'doc-differences',
        title: 'Chat com documentos e PDFs: o que muda',
        items: [
          '**LLMs locais.** [AnythingLLM](/pt/power-local-llm/anythingllm-review), [h2oGPT](/pt/power-local-llm/h2ogpt-review), [Khoj](/pt/power-local-llm/khoj-ai-second-brain-review), [Langchain-Chatchat](/pt/power-local-llm/langchain-chatchat-review), [PrivateGPT](/pt/power-local-llm/privategpt-review), [Quivr](/pt/power-local-llm/quivr-self-hosted-knowledge-assistant-review), [Sidekick](/pt/power-local-llm/sidekick-review) e [Surf](/pt/power-local-llm/surf-review) documentam o trabalho com LLMs locais.',
          '**Formatos de documento.** [AnythingLLM](/pt/power-local-llm/anythingllm-review), [h2oGPT](/pt/power-local-llm/h2ogpt-review), [Khoj](/pt/power-local-llm/khoj-ai-second-brain-review), [PrivateGPT](/pt/power-local-llm/privategpt-review), [Quivr](/pt/power-local-llm/quivr-self-hosted-knowledge-assistant-review) e [RAGFlow](/pt/power-local-llm/ragflow-document-understanding-rag-review) documentam vários formatos de arquivo compatíveis.',
          '**Citações.** [AnythingLLM](/pt/power-local-llm/anythingllm-review), [PrivateGPT](/pt/power-local-llm/privategpt-review), [RAGFlow](/pt/power-local-llm/ragflow-document-understanding-rag-review), [Sidekick](/pt/power-local-llm/sidekick-review) e [Surf](/pt/power-local-llm/surf-review) documentam a citação de fontes nas respostas.',
          '**App de desktop.** [AnythingLLM](/pt/power-local-llm/anythingllm-review), [Khoj](/pt/power-local-llm/khoj-ai-second-brain-review) e [Surf](/pt/power-local-llm/surf-review) documentam um app de desktop instalável.',
          '**Docker e auto-hospedagem.** [AnythingLLM](/pt/power-local-llm/anythingllm-review), [h2oGPT](/pt/power-local-llm/h2ogpt-review), [Langchain-Chatchat](/pt/power-local-llm/langchain-chatchat-review), [PrivateGPT](/pt/power-local-llm/privategpt-review) e [RAGFlow](/pt/power-local-llm/ragflow-document-understanding-rag-review) documentam implantação com Docker ou auto-hospedada.',
          '**API.** [AnythingLLM](/pt/power-local-llm/anythingllm-review), [h2oGPT](/pt/power-local-llm/h2ogpt-review), [Langchain-Chatchat](/pt/power-local-llm/langchain-chatchat-review), [PrivateGPT](/pt/power-local-llm/privategpt-review), [RAGFlow](/pt/power-local-llm/ragflow-document-understanding-rag-review) e [ToolNeuron](/pt/power-local-llm/toolneuron-review) documentam uma API.',
        ],
      },
      vectorDifferences: {
        id: 'vector-differences',
        title: 'Bancos de dados vetoriais: o que muda',
        items: [
          '**Busca híbrida.** [Milvus](/pt/power-local-llm/milvus-review), [Qdrant](/pt/power-local-llm/qdrant-review) e [Weaviate](/pt/power-local-llm/weaviate-review) documentam busca híbrida por palavras-chave e vetores.',
          '**Filtragem por metadados.** [Chroma](/pt/power-local-llm/chroma-review), [Milvus](/pt/power-local-llm/milvus-review), [Qdrant](/pt/power-local-llm/qdrant-review) e [Weaviate](/pt/power-local-llm/weaviate-review) documentam a filtragem por metadados.',
          '**Implantação distribuída.** [Milvus](/pt/power-local-llm/milvus-review), [Qdrant](/pt/power-local-llm/qdrant-review) e [Weaviate](/pt/power-local-llm/weaviate-review) documentam implantação distribuída ou em cluster.',
          '**Docker e auto-hospedagem.** [Milvus](/pt/power-local-llm/milvus-review), [Qdrant](/pt/power-local-llm/qdrant-review) e [Weaviate](/pt/power-local-llm/weaviate-review) documentam implantação com Docker ou auto-hospedada.',
          '**Nuvem gerenciada.** [Chroma](/pt/power-local-llm/chroma-review), [Milvus](/pt/power-local-llm/milvus-review), [Qdrant](/pt/power-local-llm/qdrant-review) e [Weaviate](/pt/power-local-llm/weaviate-review) documentam uma oferta de nuvem hospedada além da auto-hospedagem.',
          '**Licença.** Chroma, Milvus e Qdrant são Apache-2.0 e o núcleo do Weaviate é BSD-3-Clause, com alguns recursos restritos sob a própria Weaviate License — veja os detalhes na análise de cada ferramenta.',
        ],
      },
      notesDifferences: {
        id: 'notes-differences',
        title: 'Integrações com notas: o que muda',
        items: [
          '**Qual app de notas.** [BMO Chatbot](/pt/power-local-llm/bmo-chatbot-review), [Copilot for Obsidian](/pt/power-local-llm/copilot-for-obsidian-review), [Smart Connections](/pt/power-local-llm/smart-connections-review) e [Text Generator](/pt/power-local-llm/text-generator-review) para o Obsidian; [logseq-copilot](/pt/power-local-llm/logseq-copilot-review) para o Logseq; [Joplin AI](/pt/power-local-llm/joplin-ai-agent-review) para o Joplin; [Blinko](/pt/power-local-llm/blinko-review), [SiYuan](/pt/power-local-llm/siyuan-review) e [Surf](/pt/power-local-llm/surf-review) são apps de notas independentes com IA integrada.',
          '**LLMs locais.** [BMO Chatbot](/pt/power-local-llm/bmo-chatbot-review), [Copilot for Obsidian](/pt/power-local-llm/copilot-for-obsidian-review), [Joplin AI](/pt/power-local-llm/joplin-ai-agent-review), [Karakeep](/pt/power-local-llm/karakeep-review), [logseq-copilot](/pt/power-local-llm/logseq-copilot-review) e [Surf](/pt/power-local-llm/surf-review) documentam o trabalho com LLMs locais.',
          '**Busca semântica.** [Karakeep](/pt/power-local-llm/karakeep-review) e [Smart Connections](/pt/power-local-llm/smart-connections-review) documentam busca semântica nas notas.',
          '**Chat com as suas notas.** [BMO Chatbot](/pt/power-local-llm/bmo-chatbot-review) e [Joplin AI](/pt/power-local-llm/joplin-ai-agent-review) documentam a conversa com as suas notas.',
        ],
      },
      searchDifferences: {
        id: 'search-differences',
        title: 'Busca e pesquisa locais: o que muda',
        items: [
          '**LLMs locais.** [Farfalle](/pt/power-local-llm/farfalle-review), [Karakeep](/pt/power-local-llm/karakeep-review), [Local Deep Research](/pt/power-local-llm/local-deep-research-review), [Onyx](/pt/power-local-llm/onyx-review) e [Vane (antigo Perplexica)](/pt/power-local-llm/vane-review) documentam o trabalho com LLMs locais.',
          '**Busca na web.** [Farfalle](/pt/power-local-llm/farfalle-review), [Local Deep Research](/pt/power-local-llm/local-deep-research-review), [Onyx](/pt/power-local-llm/onyx-review) e [Vane (antigo Perplexica)](/pt/power-local-llm/vane-review) documentam a busca na web.',
          '**Seus próprios arquivos.** [Local Deep Research](/pt/power-local-llm/local-deep-research-review), [Onyx](/pt/power-local-llm/onyx-review) e [Smart Connections](/pt/power-local-llm/smart-connections-review) documentam a busca nos seus próprios arquivos ou notas.',
          '**Citações.** [Local Deep Research](/pt/power-local-llm/local-deep-research-review) e [Vane (antigo Perplexica)](/pt/power-local-llm/vane-review) documentam a citação de fontes.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'O que esta comparação não pode dizer',
        items: [
          'Ela compara capacidades documentadas, não qualidade. Não diz nada sobre a precisão das respostas, a velocidade da indexação ou o quanto uma ferramenta escala — o PromptQuorum não mediu isso nas ferramentas listadas.',
          'Os traços são lacunas na documentação que consultamos, não constatações negativas. Algumas ferramentas podem oferecer um recurso que o README não menciona.',
          'O estado do projeto importa: o GitHub marca os repositórios do Flowise e do h2oGPT como arquivados (somente leitura) no momento da redação, o que significa que não há mais desenvolvimento neles. Consulte a análise de cada ferramenta antes de escolhê-la para um novo projeto.',
          'As ferramentas mudam rápido. A análise de cada ferramenta informa a versão em que foi conferida, e este guia é atualizado quando uma análise é atualizada.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Qual é a diferença entre um framework RAG, um app de chat com documentos e um banco de dados vetorial?',
            a: 'Um framework RAG é um kit de ferramentas para desenvolvedores construírem pipelines de geração aumentada por recuperação. Um app de chat com documentos é uma aplicação pronta para fazer perguntas sobre os seus arquivos. Um banco de dados vetorial armazena os embeddings numéricos que fazem a busca por similaridade funcionar e costuma ser um componente dentro dos outros dois. Eles têm funções diferentes, por isso são comparados separadamente.',
          },
          {
            q: 'O que significa um traço na tabela comparativa?',
            a: 'Significa que a documentação do próprio projeto não informa esse atributo. Não significa que o recurso não exista; consulte a análise da ferramenta ou o repositório dela.',
          },
          {
            q: 'Por que uma ferramenta aparece mais de uma vez?',
            a: 'Algumas ferramentas têm mais de uma função — por exemplo, uma ferramenta de busca que também se conecta a um app de notas — por isso são listadas em cada tipo a que pertencem, com os atributos que se aplicam a esse tipo.',
          },
          {
            q: 'Alguma destas ferramentas tem link de afiliado?',
            a: 'Não. O PromptQuorum não tem relação de afiliado com nenhuma ferramenta desta comparação no momento da redação, e nenhum link aqui gera comissão.',
          },
          {
            q: 'Com que frequência esta comparação é atualizada?',
            a: 'Ela é atualizada duas vezes por ano e sempre que a análise de uma das ferramentas listadas é atualizada, porque a tabela é gerada a partir dos mesmos dados dessas análises.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'O README ou o site oficial de cada ferramenta, listados na análise dela no PromptQuorum (com link a partir da tabela comparativa).',
          '[Diretório de apps de IA local do PromptQuorum](/pt/directory) — o registro a partir do qual cada linha da tabela é gerada.',
          'Estado do repositório no GitHub (arquivado ou ativo) de cada projeto listado, conferido na redação deste guia.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Diretório de software local](/pt/directory) — navegue por todos os mais de 200 apps de IA local e filtre por categoria.',
          '[Motores de inferência, runtimes e gateways locais comparados](/pt/power-local-llm/local-llm-run-serve-compared) — a mesma comparação para as ferramentas que executam os modelos.',
          '[Ferramentas locais de imagem, vídeo e visão comparadas](/pt/power-local-llm/local-llm-images-video-compared) — a mesma comparação para geração de imagens e modelos de visão.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ferramentas locais de conhecimento e recuperação comparadas (2026): RAG, chat com documentos, bancos de dados vetoriais, notas e busca',
      description:
        'Compare 40 ferramentas locais de conhecimento e recuperação lado a lado: frameworks RAG, chat com documentos, bancos de dados vetoriais, integrações com notas e busca, segundo a documentação oficial.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desenvolvedores e usuários que hospedam os próprios serviços e escolhem ferramentas locais de RAG e recuperação' },
      about: [
        { '@type': 'Thing', name: 'Geração aumentada por recuperação' },
        { '@type': 'Thing', name: 'Bancos de dados vetoriais' },
        { '@type': 'Thing', name: 'Chat com documentos' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Ferramentas locais de conhecimento e recuperação comparadas (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
        },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'RAG & Document Chat',
    title: 'مقارنة أدوات المعرفة والاسترجاع المحلية (2026): RAG ومحادثة المستندات وقواعد البيانات المتجهية والملاحظات والبحث',
    seoTitle: 'مقارنة أدوات RAG ومحادثة المستندات المحلية 2026',
    intro:
      'تنقسم الأدوات التي تتيح لنموذج محلي العمل مع مستنداتك الخاصة إلى خمسة أنواع مختلفة — أطر RAG وخطوط المعالجة، وتطبيقات محادثة المستندات وملفات PDF، وقواعد البيانات المتجهية، وتكاملات تطبيقات الملاحظات، وأدوات البحث المحلي والاستقصاء — ولا توجد قائمة ميزات واحدة تقارن بينها بإنصاف. يقارن هذا الدليل 40 أداة مجانية أو بنموذج freemium، نوعًا بعد نوع، باستخدام جدول مقارنة مُولَّد من البيانات نفسها التي تعتمد عليها مراجعة PromptQuorum لكل أداة، ولذلك لا يمكن أن يتعارض الجدول مع المراجعات.',
    metaDescription:
      'قارن 40 أداة معرفة واسترجاع محلية: أطر RAG ومحادثة المستندات وقواعد البيانات المتجهية (Chroma وMilvus وQdrant وWeaviate) وإضافات الملاحظات والبحث. التراخيص ودعم النماذج المحلية وDocker وAPI من الوثائق الرسمية.',
    twitterDescription:
      'أطر RAG وتطبيقات محادثة المستندات وقواعد البيانات المتجهية وإضافات الملاحظات وأدوات البحث المحلية، مقارنة حسب النوع — دعم النماذج المحلية وDocker وAPI والبحث الهجين — من الوثائق الرسمية.',
    audience:
      'المطورون والمستضيفون الذاتيون والمستخدمون المهتمون بالخصوصية الذين يختارون أدوات لتشغيل التوليد المعزَّز بالاسترجاع أو محادثة المستندات أو البحث المتجهي أو الملاحظات الذكية محليًا، ويريدون عرض الفروق لكل نوع من الأدوات بدلًا من قائمة واحدة مختلطة.',
    readTime: '11 دقيقة للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'مقارنة أدوات RAG المحلية',
    targetKeywords: [
      'مقارنة rag محلي',
      'محادثة مع pdf محليًا',
      'chroma مقابل qdrant مقابل weaviate',
      'أفضل أداة محادثة مستندات محلية',
      'إضافات obsidian للذكاء الاصطناعي المحلي',
      'إطار rag للاستضافة الذاتية',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**تنقسم أدوات المعرفة والاسترجاع المحلية الأربعون في دليل PromptQuorum إلى خمسة أنواع ينبغي مقارنتها كلًّا على حدة: أطر RAG وخطوط المعالجة (13 أداة)، وتطبيقات محادثة المستندات وملفات PDF (12)، وتكاملات تطبيقات الملاحظات (10)، وأدوات البحث المحلي والاستقصاء (7)، وقواعد البيانات المتجهية (4).** ومن بين قواعد البيانات المتجهية، توثّق 3 من 4 البحث الهجين وتوثّق 4 من 4 التصفية حسب البيانات الوصفية؛ ومن بين أطر RAG، توثّق 4 أدوات منشئًا مرئيًا وتوثّق 9 دعم النماذج المحلية. استخدم جدول المقارنة أدناه، واقرأ مراجعة كل أداة قبل تثبيتها.',
    quickAnswerTop: {
      en: {
        question: 'أي أداة RAG أو محادثة مستندات محلية ينبغي أن أستخدم؟',
        answer:
          'يعتمد ذلك على نوع الأداة، لذا قارن داخل نوع واحد في كل مرة. اختر بحسب القيد الأهم لديك — العمل مع نماذج LLM محلية، أو Docker والاستضافة الذاتية، أو واجهة API، أو البحث الهجين، أو المنشئ المرئي، أو تطبيق الملاحظات الذي تستخدمه أصلًا — واستعن بالجدول أدناه، وهو مُولَّد من الوثائق الرسمية لكل أداة.',
        bullets: [
          'أطر RAG: مقارنة 13 أداة من حيث المنشئ المرئي ونماذج LLM المحلية والوكلاء ومخازن المتجهات وDocker وAPI.',
          'محادثة المستندات وملفات PDF: مقارنة 12 أداة من حيث نماذج LLM المحلية وصيغ المستندات والاستشهادات وتطبيق سطح المكتب وDocker وAPI.',
          'قواعد البيانات المتجهية: مقارنة 4 أدوات من حيث البحث الهجين والتصفية حسب البيانات الوصفية والتجميع في عنقود وDocker والسحابة المُدارة.',
          'تكاملات الملاحظات: مقارنة 10 أدوات من حيث تطبيق الملاحظات المدعوم ونماذج LLM المحلية والبحث الدلالي والمحادثة مع الملاحظات.',
          'البحث المحلي والاستقصاء: مقارنة 7 أدوات من حيث نماذج LLM المحلية والبحث على الويب وملفاتك الخاصة والاستشهادات.',
          'الشرطة (—) تعني أن وثائق المشروع لا تذكر هذه الخاصية، وليس أن الميزة غير موجودة.',
        ],
      },
    },
    toc: [
      { label: 'الخلاصة السريعة', anchor: 'tldr' },
      { label: 'كيف أجرينا المقارنة', anchor: 'how-we-compared' },
      { label: 'جدول المقارنة', anchor: 'comparison-table' },
      { label: 'أطر RAG: ما الذي يختلف', anchor: 'rag-differences' },
      { label: 'محادثة المستندات وملفات PDF: ما الذي يختلف', anchor: 'doc-differences' },
      { label: 'قواعد البيانات المتجهية: ما الذي يختلف', anchor: 'vector-differences' },
      { label: 'تكاملات الملاحظات: ما الذي يختلف', anchor: 'notes-differences' },
      { label: 'البحث المحلي والاستقصاء: ما الذي يختلف', anchor: 'search-differences' },
      { label: 'ما لا تستطيع هذه المقارنة إخبارك به', anchor: 'limitations' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'المصادر', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'الخلاصة السريعة',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'الأدوات التي تتيح لنموذج محلي العمل مع مستنداتك الخاصة خمسة أنواع مختلفة — أطر RAG، وتطبيقات محادثة المستندات، وقواعد البيانات المتجهية، وتكاملات الملاحظات، وأدوات البحث المحلي — ولذلك تُقارَن الأدوات الأربعون في دليل PromptQuorum داخل كل نوع على حدة، باستخدام جدول مُولَّد من بيانات الأدوات نفسها التي تعتمد عليها مراجعة كل أداة.',
          },
          {
            type: 'plain-terms',
            text: 'بعض الأدوات لبنات بناء للمطورين، وبعضها تطبيقات جاهزة للدردشة مع ملفاتك، وبعضها يخزّن المتجهات التي يقوم عليها البحث، وبعضها يُضاف إلى تطبيق ملاحظات تستخدمه أصلًا. ومقارنة قاعدة بيانات بإضافة ملاحظات على الميزات نفسها لا معنى لها، ولذلك يقارن هذا الدليل بين أدوات من النوع نفسه.',
          },
        ],
        items: [
          '40 أداة في خمسة أنواع: أطر RAG وخطوط المعالجة (13)، وتطبيقات محادثة المستندات وملفات PDF (12)، وتكاملات تطبيقات الملاحظات (10)، وأدوات البحث المحلي والاستقصاء (7)، وقواعد البيانات المتجهية (4). وتنتمي أدوات عدة، مثل Onyx وKarakeep وSurf، إلى أكثر من نوع وتظهر في كل نوع منها.',
          'الجدول مُولَّد من سجل كل أداة ومراجَع مقابل ملف README أو الموقع الرسمي لها؛ والشرطة تعني «غير مذكور في الوثائق»، وليست «لا» أبدًا.',
          'يُعلِّم GitHub مستودعَي Flowise وh2oGPT بأنهما مؤرشفان (للقراءة فقط) وقت كتابة هذا الدليل؛ راجع مراجعتيهما لمعرفة الوضع الحالي قبل البناء عليهما.',
          'يرتبط اسم كل أداة في الجدول بمراجعة PromptQuorum الخاصة بها، وهناك تجد خطوات التثبيت والحدود.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: 'كيف أجرينا المقارنة',
        content: [
          'تُخزَّن حقائق كل أداة — السعر والرخصة والمنصات ومتطلبات العتاد والخصائص الخاصة بالفئة — مرة واحدة في سجلها ضمن الدليل. وجدول المقارنة أدناه مُولَّد من تلك السجلات، وتعتمد مراجعة الأداة نفسها على السجل ذاته، ولذلك لا يمكن أن يذكرا قيمتين مختلفتين.',
          'أُخذت الخصائص الخاصة بالفئة (مثل دعم نماذج LLM المحلية أو البحث الهجين) من ملف README الرسمي لكل مشروع أو موقعه، وروجعت مقابل الصياغة الدقيقة هناك. وحيث تصمت الوثائق يعرض الجدول شرطة بدلًا من التخمين؛ وحيث يكون الادعاء مقيّدًا (خريطة طريق فقط، أو إصدار للمؤسسات، أو مشروع مرافق، أو خطة مدفوعة) تُستبعد الخاصية من الجدول وتُعالَج في مراجعة الأداة.',
          'الأدوات التي لها مراجعة خاصة بها في PromptQuorum فقط هي التي يتضمنها الجدول. وتسرد المقارنة الأدوات التي تعمل على عتادك الخاص أو التي تستضيفها بنفسك؛ ولا ترتّبها، لأن الأداة المناسبة تعتمد على القيد الذي يهمك.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول المقارنة',
        content: 'اختر نوعًا من الأدوات أدناه، ثم اقرأ عبر الصف. انقر على اسم أداة لفتح مراجعتها الكاملة في PromptQuorum.',
        component: 'CategoryCompareTable',
      },
      ragDifferences: {
        id: 'rag-differences',
        title: 'أطر RAG: ما الذي يختلف',
        items: [
          '**المنشئ المرئي.** توثّق [Dify](/ar/power-local-llm/dify-ai-workflow-builder-review)، [Flowise](/ar/power-local-llm/flowise-ai-visual-workflow-builder-review)، [Langflow](/ar/power-local-llm/langflow-visual-ai-orchestration-review) و[Self-hosted AI Starter Kit](/ar/power-local-llm/self-hosted-ai-starter-kit-review) منشئ سير عمل مرئيًا أو بالسحب والإفلات.',
          '**نماذج LLM المحلية.** توثّق [cognee](/ar/power-local-llm/cognee-review)، [Haystack](/ar/power-local-llm/haystack-deepset-rag-framework-review)، [Langchain-Chatchat](/ar/power-local-llm/langchain-chatchat-review)، [LlamaIndex](/ar/power-local-llm/llamaindex-rag-framework-review)، [MaxKB](/ar/power-local-llm/maxkb-review)، [Onyx](/ar/power-local-llm/onyx-review)، [Self-hosted AI Starter Kit](/ar/power-local-llm/self-hosted-ai-starter-kit-review)، [txtai](/ar/power-local-llm/txtai-embedded-vector-database-review) و[Vane (المعروف سابقًا باسم Perplexica)](/ar/power-local-llm/vane-review) العمل مع نماذج LLM محلية.',
          '**الوكلاء.** توثّق [Dify](/ar/power-local-llm/dify-ai-workflow-builder-review)، [Flowise](/ar/power-local-llm/flowise-ai-visual-workflow-builder-review)، [Haystack](/ar/power-local-llm/haystack-deepset-rag-framework-review)، [Langchain-Chatchat](/ar/power-local-llm/langchain-chatchat-review)، [Langflow](/ar/power-local-llm/langflow-visual-ai-orchestration-review)، [LlamaIndex](/ar/power-local-llm/llamaindex-rag-framework-review)، [LongMemory](/ar/power-local-llm/longmemory-review)، [MaxKB](/ar/power-local-llm/maxkb-review)، [Onyx](/ar/power-local-llm/onyx-review)، [Self-hosted AI Starter Kit](/ar/power-local-llm/self-hosted-ai-starter-kit-review) و[txtai](/ar/power-local-llm/txtai-embedded-vector-database-review) دعم الوكلاء.',
          '**مخازن متجهات متعددة.** توثّق [Flowise](/ar/power-local-llm/flowise-ai-visual-workflow-builder-review)، [Langchain-Chatchat](/ar/power-local-llm/langchain-chatchat-review)، [Langflow](/ar/power-local-llm/langflow-visual-ai-orchestration-review) و[LlamaIndex](/ar/power-local-llm/llamaindex-rag-framework-review) التكامل مع عدة مخازن متجهات.',
          '**Docker والاستضافة الذاتية.** توثّق [cognee](/ar/power-local-llm/cognee-review)، [Dify](/ar/power-local-llm/dify-ai-workflow-builder-review)، [Flowise](/ar/power-local-llm/flowise-ai-visual-workflow-builder-review)، [Haystack](/ar/power-local-llm/haystack-deepset-rag-framework-review)، [Langchain-Chatchat](/ar/power-local-llm/langchain-chatchat-review)، [Langflow](/ar/power-local-llm/langflow-visual-ai-orchestration-review)، [LongMemory](/ar/power-local-llm/longmemory-review)، [MaxKB](/ar/power-local-llm/maxkb-review)، [Onyx](/ar/power-local-llm/onyx-review)، [Self-hosted AI Starter Kit](/ar/power-local-llm/self-hosted-ai-starter-kit-review)، [txtai](/ar/power-local-llm/txtai-embedded-vector-database-review) و[Vane (المعروف سابقًا باسم Perplexica)](/ar/power-local-llm/vane-review) النشر عبر Docker أو الاستضافة الذاتية.',
          '**API.** توثّق [cognee](/ar/power-local-llm/cognee-review)، [Dify](/ar/power-local-llm/dify-ai-workflow-builder-review)، [Flowise](/ar/power-local-llm/flowise-ai-visual-workflow-builder-review)، [Langchain-Chatchat](/ar/power-local-llm/langchain-chatchat-review)، [Langflow](/ar/power-local-llm/langflow-visual-ai-orchestration-review)، [LongMemory](/ar/power-local-llm/longmemory-review)، [Onyx](/ar/power-local-llm/onyx-review)، [txtai](/ar/power-local-llm/txtai-embedded-vector-database-review) و[Vane (المعروف سابقًا باسم Perplexica)](/ar/power-local-llm/vane-review) واجهة HTTP أو REST API.',
        ],
      },
      docDifferences: {
        id: 'doc-differences',
        title: 'محادثة المستندات وملفات PDF: ما الذي يختلف',
        items: [
          '**نماذج LLM المحلية.** توثّق [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [h2oGPT](/ar/power-local-llm/h2ogpt-review)، [Khoj](/ar/power-local-llm/khoj-ai-second-brain-review)، [Langchain-Chatchat](/ar/power-local-llm/langchain-chatchat-review)، [PrivateGPT](/ar/power-local-llm/privategpt-review)، [Quivr](/ar/power-local-llm/quivr-self-hosted-knowledge-assistant-review)، [Sidekick](/ar/power-local-llm/sidekick-review) و[Surf](/ar/power-local-llm/surf-review) العمل مع نماذج LLM محلية.',
          '**صيغ المستندات.** توثّق [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [h2oGPT](/ar/power-local-llm/h2ogpt-review)، [Khoj](/ar/power-local-llm/khoj-ai-second-brain-review)، [PrivateGPT](/ar/power-local-llm/privategpt-review)، [Quivr](/ar/power-local-llm/quivr-self-hosted-knowledge-assistant-review) و[RAGFlow](/ar/power-local-llm/ragflow-document-understanding-rag-review) عدة صيغ ملفات مدعومة.',
          '**الاستشهادات.** توثّق [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [PrivateGPT](/ar/power-local-llm/privategpt-review)، [RAGFlow](/ar/power-local-llm/ragflow-document-understanding-rag-review)، [Sidekick](/ar/power-local-llm/sidekick-review) و[Surf](/ar/power-local-llm/surf-review) الاستشهاد بالمصادر في الإجابات.',
          '**تطبيق سطح المكتب.** توثّق [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [Khoj](/ar/power-local-llm/khoj-ai-second-brain-review) و[Surf](/ar/power-local-llm/surf-review) تطبيق سطح مكتب قابلًا للتثبيت.',
          '**Docker والاستضافة الذاتية.** توثّق [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [h2oGPT](/ar/power-local-llm/h2ogpt-review)، [Langchain-Chatchat](/ar/power-local-llm/langchain-chatchat-review)، [PrivateGPT](/ar/power-local-llm/privategpt-review) و[RAGFlow](/ar/power-local-llm/ragflow-document-understanding-rag-review) النشر عبر Docker أو الاستضافة الذاتية.',
          '**API.** توثّق [AnythingLLM](/ar/power-local-llm/anythingllm-review)، [h2oGPT](/ar/power-local-llm/h2ogpt-review)، [Langchain-Chatchat](/ar/power-local-llm/langchain-chatchat-review)، [PrivateGPT](/ar/power-local-llm/privategpt-review)، [RAGFlow](/ar/power-local-llm/ragflow-document-understanding-rag-review) و[ToolNeuron](/ar/power-local-llm/toolneuron-review) واجهة API.',
        ],
      },
      vectorDifferences: {
        id: 'vector-differences',
        title: 'قواعد البيانات المتجهية: ما الذي يختلف',
        items: [
          '**البحث الهجين.** توثّق [Milvus](/ar/power-local-llm/milvus-review)، [Qdrant](/ar/power-local-llm/qdrant-review) و[Weaviate](/ar/power-local-llm/weaviate-review) البحث الهجين بالكلمات المفتاحية والمتجهات.',
          '**التصفية حسب البيانات الوصفية.** توثّق [Chroma](/ar/power-local-llm/chroma-review)، [Milvus](/ar/power-local-llm/milvus-review)، [Qdrant](/ar/power-local-llm/qdrant-review) و[Weaviate](/ar/power-local-llm/weaviate-review) التصفية حسب البيانات الوصفية.',
          '**النشر الموزَّع.** توثّق [Milvus](/ar/power-local-llm/milvus-review)، [Qdrant](/ar/power-local-llm/qdrant-review) و[Weaviate](/ar/power-local-llm/weaviate-review) النشر الموزَّع أو في عنقود.',
          '**Docker والاستضافة الذاتية.** توثّق [Milvus](/ar/power-local-llm/milvus-review)، [Qdrant](/ar/power-local-llm/qdrant-review) و[Weaviate](/ar/power-local-llm/weaviate-review) النشر عبر Docker أو الاستضافة الذاتية.',
          '**السحابة المُدارة.** توثّق [Chroma](/ar/power-local-llm/chroma-review)، [Milvus](/ar/power-local-llm/milvus-review)، [Qdrant](/ar/power-local-llm/qdrant-review) و[Weaviate](/ar/power-local-llm/weaviate-review) عرضًا سحابيًا مستضافًا إلى جانب الاستضافة الذاتية.',
          '**الرخصة.** Chroma وMilvus وQdrant بترخيص Apache-2.0، ونواة Weaviate بترخيص BSD-3-Clause مع بعض الميزات المقيَّدة تحت رخصة Weaviate الخاصة بها — راجع مراجعة كل أداة للتفاصيل.',
        ],
      },
      notesDifferences: {
        id: 'notes-differences',
        title: 'تكاملات الملاحظات: ما الذي يختلف',
        items: [
          '**تطبيق الملاحظات.** [BMO Chatbot](/ar/power-local-llm/bmo-chatbot-review)، [Copilot for Obsidian](/ar/power-local-llm/copilot-for-obsidian-review)، [Smart Connections](/ar/power-local-llm/smart-connections-review) و[Text Generator](/ar/power-local-llm/text-generator-review) لتطبيق Obsidian؛ و[logseq-copilot](/ar/power-local-llm/logseq-copilot-review) لتطبيق Logseq؛ و[Joplin AI](/ar/power-local-llm/joplin-ai-agent-review) لتطبيق Joplin؛ أما [Blinko](/ar/power-local-llm/blinko-review)، [SiYuan](/ar/power-local-llm/siyuan-review) و[Surf](/ar/power-local-llm/surf-review) فهي تطبيقات ملاحظات مستقلة تتضمن ذكاءً اصطناعيًا مدمجًا.',
          '**نماذج LLM المحلية.** توثّق [BMO Chatbot](/ar/power-local-llm/bmo-chatbot-review)، [Copilot for Obsidian](/ar/power-local-llm/copilot-for-obsidian-review)، [Joplin AI](/ar/power-local-llm/joplin-ai-agent-review)، [Karakeep](/ar/power-local-llm/karakeep-review)، [logseq-copilot](/ar/power-local-llm/logseq-copilot-review) و[Surf](/ar/power-local-llm/surf-review) العمل مع نماذج LLM محلية.',
          '**البحث الدلالي.** توثّق [Karakeep](/ar/power-local-llm/karakeep-review) و[Smart Connections](/ar/power-local-llm/smart-connections-review) البحث الدلالي في الملاحظات.',
          '**المحادثة مع ملاحظاتك.** توثّق [BMO Chatbot](/ar/power-local-llm/bmo-chatbot-review) و[Joplin AI](/ar/power-local-llm/joplin-ai-agent-review) المحادثة مع ملاحظاتك.',
        ],
      },
      searchDifferences: {
        id: 'search-differences',
        title: 'البحث المحلي والاستقصاء: ما الذي يختلف',
        items: [
          '**نماذج LLM المحلية.** توثّق [Farfalle](/ar/power-local-llm/farfalle-review)، [Karakeep](/ar/power-local-llm/karakeep-review)، [Local Deep Research](/ar/power-local-llm/local-deep-research-review)، [Onyx](/ar/power-local-llm/onyx-review) و[Vane (المعروف سابقًا باسم Perplexica)](/ar/power-local-llm/vane-review) العمل مع نماذج LLM محلية.',
          '**البحث على الويب.** توثّق [Farfalle](/ar/power-local-llm/farfalle-review)، [Local Deep Research](/ar/power-local-llm/local-deep-research-review)، [Onyx](/ar/power-local-llm/onyx-review) و[Vane (المعروف سابقًا باسم Perplexica)](/ar/power-local-llm/vane-review) البحث على الويب.',
          '**ملفاتك الخاصة.** توثّق [Local Deep Research](/ar/power-local-llm/local-deep-research-review)، [Onyx](/ar/power-local-llm/onyx-review) و[Smart Connections](/ar/power-local-llm/smart-connections-review) البحث في ملفاتك أو ملاحظاتك الخاصة.',
          '**الاستشهادات.** توثّق [Local Deep Research](/ar/power-local-llm/local-deep-research-review) و[Vane (المعروف سابقًا باسم Perplexica)](/ar/power-local-llm/vane-review) الاستشهاد بالمصادر.',
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'ما لا تستطيع هذه المقارنة إخبارك به',
        items: [
          'تقارن هذه المقارنة القدرات الموثّقة، لا الجودة. فهي لا تقول شيئًا عن دقة الإجابات أو سرعة الفهرسة أو مدى قدرة الأداة على التوسع — ولم تقس PromptQuorum هذه الجوانب للأدوات المدرجة.',
          'الشرطات هي فجوات في الوثائق التي راجعناها، وليست نتائج سلبية. فقد تدعم بعض الأدوات ميزة لا يذكرها ملف README الخاص بها.',
          'حالة المشروع مهمة: يُعلِّم GitHub مستودعَي Flowise وh2oGPT بأنهما مؤرشفان (للقراءة فقط) وقت الكتابة، أي لا تطوير إضافيًا هناك. راجع مراجعة كل أداة قبل اختيارها لمشروع جديد.',
          'تتغير الأدوات بسرعة. وتذكر مراجعة كل أداة الإصدار الذي روجعت مقابله، ويُحدَّث هذا الدليل عند تحديث مراجعة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما الفرق بين إطار RAG وتطبيق محادثة المستندات وقاعدة البيانات المتجهية؟',
            a: 'إطار RAG هو مجموعة أدوات للمطورين لبناء خطوط معالجة قائمة على التوليد المعزَّز بالاسترجاع. وتطبيق محادثة المستندات هو تطبيق جاهز لطرح الأسئلة عن ملفاتك. أما قاعدة البيانات المتجهية فتخزّن التضمينات الرقمية التي يقوم عليها البحث بالتشابه، وتكون عادةً مكوّنًا داخل النوعين الآخرين. لكلٍّ منها وظيفة مختلفة، ولذلك تُقارَن على حدة.',
          },
          {
            q: 'ماذا تعني الشرطة في جدول المقارنة؟',
            a: 'تعني أن وثائق المشروع نفسه لا تذكر تلك الخاصية. ولا تعني أن الميزة غير موجودة؛ راجع مراجعة الأداة أو مستودعها.',
          },
          {
            q: 'لماذا تظهر أداة أكثر من مرة؟',
            a: 'بعض الأدوات تؤدي أكثر من وظيفة — مثل أداة بحث تُضاف أيضًا إلى تطبيق ملاحظات — ولذلك تُدرج تحت كل نوع تنتمي إليه، مع الخصائص التي تنطبق على ذلك النوع.',
          },
          {
            q: 'هل لأي من هذه الأدوات رابط أفلييت؟',
            a: 'لا. لا تربط PromptQuorum أي علاقة أفلييت بأي أداة في هذه المقارنة وقت الكتابة، ولا يحقق أي رابط هنا عمولة.',
          },
          {
            q: 'كم مرة تُحدَّث هذه المقارنة؟',
            a: 'تُحدَّث مرتين في السنة، وكلما حُدِّثت مراجعة إحدى الأدوات المدرجة، لأن الجدول مُولَّد من البيانات نفسها التي تعتمد عليها تلك المراجعات.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'ملف README الرسمي لكل أداة أو موقعها، المذكور في مراجعة PromptQuorum الخاصة بتلك الأداة (مرتبط من جدول المقارنة).',
          '[دليل PromptQuorum لتطبيقات الذكاء الاصطناعي المحلية](/ar/directory) — السجل الذي يُولَّد منه كل صف في الجدول.',
          'حالة مستودع GitHub (مؤرشف أو نشط) لكل مشروع مدرج، روجعت وقت كتابة هذا الدليل.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[دليل البرمجيات المحلية](/ar/directory) — تصفح أكثر من 200 تطبيق ذكاء اصطناعي محلي وصفِّها حسب الفئة.',
          '[مقارنة محركات الاستدلال المحلية وبيئات التشغيل والبوابات](/ar/power-local-llm/local-llm-run-serve-compared) — المقارنة نفسها للأدوات التي تشغّل النماذج.',
          '[مقارنة أدوات الصور والفيديو والرؤية المحلية](/ar/power-local-llm/local-llm-images-video-compared) — المقارنة نفسها لتوليد الصور ونماذج الرؤية.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مقارنة أدوات المعرفة والاسترجاع المحلية (2026): RAG ومحادثة المستندات وقواعد البيانات المتجهية والملاحظات والبحث',
      description:
        'قارن 40 أداة معرفة واسترجاع محلية: أطر RAG ومحادثة المستندات وقواعد البيانات المتجهية وتكاملات الملاحظات والبحث، من الوثائق الرسمية.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
      inLanguage: 'ar',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'المطورون والمستضيفون الذاتيون الذين يختارون أدوات RAG والاسترجاع المحلية' },
      about: [
        { '@type': 'Thing', name: 'التوليد المعزَّز بالاسترجاع' },
        { '@type': 'Thing', name: 'قواعد البيانات المتجهية' },
        { '@type': 'Thing', name: 'محادثة المستندات' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'مقارنة أدوات المعرفة والاسترجاع المحلية (2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
        },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    affiliateDisclosure: true,
    publishDate: '2026-09-20',
    dateModified: '2026-09-20',
    next_refresh_due: '2027-03-20',
    theme: 'RAG & Document Chat',
    title: '로컬 지식·검색 도구 비교(2026): RAG, 문서 채팅, 벡터 데이터베이스, 노트, 검색',
    seoTitle: '로컬 RAG·문서 채팅·벡터 DB 비교 2026',
    intro:
      '로컬 모델이 내 문서를 다루게 해 주는 도구는 RAG 프레임워크와 파이프라인, 문서·PDF 채팅 앱, 벡터 데이터베이스, 노트 앱 통합, 로컬 검색·리서치 도구의 다섯 가지 종류로 나뉘며, 하나의 기능 목록으로는 이들을 공정하게 비교할 수 없습니다. 이 가이드는 무료 및 프리미엄 도구 40개를 종류별로 하나씩 비교하며, 비교표는 각 도구의 PromptQuorum 리뷰와 같은 데이터로 생성되므로 표와 리뷰가 서로 어긋날 수 없습니다.',
    metaDescription:
      '로컬 지식·검색 도구 40개 비교: RAG 프레임워크, 문서 채팅, 벡터 DB(Chroma, Milvus, Qdrant, Weaviate), 노트 플러그인, 검색. 라이선스, 로컬 LLM, Docker, API를 공식 문서 기준으로 정리했습니다.',
    twitterDescription:
      '로컬 RAG 프레임워크, 문서 채팅 앱, 벡터 데이터베이스, 노트 플러그인, 검색 도구를 종류별로 비교했습니다. 로컬 LLM 지원, Docker, API, 하이브리드 검색을 공식 문서 기준으로 정리했습니다.',
    audience:
      '검색 증강 생성(RAG), 문서 채팅, 벡터 검색, AI 노트를 로컬에서 실행할 도구를 고르는 개발자, 셀프 호스팅 사용자, 개인정보를 중시하는 사용자로, 하나로 뭉뚱그린 목록이 아니라 도구 종류별 차이를 확인하려는 분들입니다.',
    readTime: '11분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 RAG 도구 비교',
    targetKeywords: [
      '로컬 rag 비교',
      'pdf 로컬 채팅',
      'chroma vs qdrant vs weaviate',
      '로컬 문서 채팅 추천',
      'obsidian ai 플러그인 로컬',
      '셀프 호스팅 rag 프레임워크',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    leadAnswerBlock:
      '**PromptQuorum 디렉터리의 로컬 지식·검색 도구 40개는 따로 비교해야 하는 다섯 종류로 나뉩니다: RAG 프레임워크와 파이프라인(13개), 문서·PDF 채팅 앱(12개), 노트 앱 통합(10개), 로컬 검색·리서치 도구(7개), 벡터 데이터베이스(4개).** 벡터 데이터베이스 4개 중 3개가 하이브리드 검색을, 4개 모두가 메타데이터 필터링을 문서에 명시하고 있으며, RAG 프레임워크 중에서는 4개가 시각적 빌더를, 9개가 로컬 LLM 지원을 문서에 명시하고 있습니다. 아래 비교표를 활용하고, 설치하기 전에 각 도구의 리뷰를 읽어 보십시오.',
    quickAnswerTop: {
      en: {
        question: '어떤 로컬 RAG 또는 문서 채팅 도구를 써야 합니까?',
        answer:
          '도구의 종류에 따라 다르므로 한 번에 한 종류 안에서 비교하십시오. 로컬 LLM 사용, Docker 또는 셀프 호스팅, API, 하이브리드 검색, 시각적 빌더, 이미 쓰고 있는 노트 앱 등 가장 중요한 조건을 기준으로 고르고, 각 도구의 공식 문서를 바탕으로 생성한 아래 표를 활용하십시오.',
        bullets: [
          'RAG 프레임워크: 시각적 빌더, 로컬 LLM, 에이전트, 벡터 저장소, Docker, API를 기준으로 13개 도구를 비교했습니다.',
          '문서·PDF 채팅: 로컬 LLM, 문서 형식, 출처 인용, 데스크톱 앱, Docker, API를 기준으로 12개 도구를 비교했습니다.',
          '벡터 데이터베이스: 하이브리드 검색, 메타데이터 필터링, 클러스터링, Docker, 관리형 클라우드를 기준으로 4개 도구를 비교했습니다.',
          '노트 통합: 지원하는 노트 앱, 로컬 LLM, 시맨틱 검색, 노트와의 대화를 기준으로 10개 도구를 비교했습니다.',
          '로컬 검색·리서치: 로컬 LLM, 웹 검색, 내 파일, 출처 인용을 기준으로 7개 도구를 비교했습니다.',
          '대시(—)는 프로젝트 문서에 해당 내용이 명시되어 있지 않다는 뜻이며, 기능이 없다는 뜻이 아닙니다.',
        ],
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '비교 방법', anchor: 'how-we-compared' },
      { label: '비교표', anchor: 'comparison-table' },
      { label: 'RAG 프레임워크: 차이점', anchor: 'rag-differences' },
      { label: '문서 및 PDF 채팅: 차이점', anchor: 'doc-differences' },
      { label: '벡터 데이터베이스: 차이점', anchor: 'vector-differences' },
      { label: '노트 통합: 차이점', anchor: 'notes-differences' },
      { label: '로컬 검색 및 리서치: 차이점', anchor: 'search-differences' },
      { label: '이 비교가 알려 주지 못하는 것', anchor: 'limitations' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '출처', anchor: 'sources' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 모델이 내 문서를 다루게 해 주는 도구는 RAG 프레임워크, 문서 채팅 앱, 벡터 데이터베이스, 노트 통합, 로컬 검색의 다섯 가지 종류이므로, PromptQuorum 디렉터리의 40개 도구를 종류별로 비교하며, 비교표는 각 도구의 리뷰와 같은 도구 데이터로 생성됩니다.',
          },
          {
            type: 'plain-terms',
            text: '어떤 도구는 개발자를 위한 구성 요소이고, 어떤 도구는 내 파일과 대화할 수 있는 완성형 앱이며, 어떤 도구는 검색이 동작하게 하는 벡터를 저장하고, 어떤 도구는 이미 쓰고 있는 노트 앱에 연결됩니다. 데이터베이스와 노트 플러그인을 같은 기능으로 비교하는 것은 의미가 없으므로, 이 가이드는 같은 종류끼리 비교합니다.',
          },
        ],
        items: [
          '도구 40개, 다섯 종류: RAG 프레임워크와 파이프라인(13개), 문서·PDF 채팅 앱(12개), 노트 앱 통합(10개), 로컬 검색·리서치 도구(7개), 벡터 데이터베이스(4개). Onyx, Karakeep, Surf처럼 여러 종류에 속하는 도구는 각 종류에 모두 나타납니다.',
          '표는 각 도구의 레코드로 생성되며 공식 README 또는 사이트와 대조해 확인했습니다. 대시는 문서에 명시되어 있지 않다는 뜻이며 절대 "아니오"를 뜻하지 않습니다.',
          'GitHub는 작성 시점에 Flowise와 h2oGPT 저장소를 아카이브(읽기 전용)로 표시하고 있습니다. 이들을 기반으로 무언가를 만들기 전에 현재 상태는 각 리뷰에서 확인하십시오.',
          '표의 모든 도구 이름은 해당 도구의 PromptQuorum 리뷰로 연결되며, 설치 방법과 한계는 그곳에서 다룹니다.',
        ],
      },
      howWeCompared: {
        id: 'how-we-compared',
        title: '비교 방법',
        content: [
          '각 도구의 사실 정보(가격, 라이선스, 플랫폼, 하드웨어 요구 사항, 종류별 속성)는 해당 도구의 디렉터리 레코드에 한 번만 저장됩니다. 아래 비교표는 이 레코드로 생성되고, 도구별 리뷰도 같은 레코드를 바탕으로 작성되므로 두 곳에서 서로 다른 값을 제시할 수 없습니다.',
          '종류별 속성(예: 로컬 LLM 지원 또는 하이브리드 검색)은 각 프로젝트의 공식 README 또는 웹사이트에서 가져와 그곳의 정확한 표현과 대조해 확인했습니다. 문서에 언급이 없으면 추측하지 않고 표에 대시로 표시하며, 주장에 조건이 붙는 경우(로드맵에만 있음, 엔터프라이즈 에디션, 동반 프로젝트, 유료 플랜)에는 해당 속성을 표에서 제외하고 도구 리뷰에서 다룹니다.',
          'PromptQuorum 자체 리뷰가 있는 도구만 표에 포함됩니다. 이 비교는 내 하드웨어에서 실행하거나 직접 셀프 호스팅하는 도구를 나열하며, 순위는 매기지 않습니다. 적합한 도구는 각자의 조건에 따라 달라지기 때문입니다.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '비교표',
        content: '아래에서 도구 종류를 선택한 다음 행을 따라 읽으십시오. 도구 이름을 클릭하면 PromptQuorum의 전체 리뷰가 열립니다.',
        component: 'CategoryCompareTable',
      },
      ragDifferences: {
        id: 'rag-differences',
        title: 'RAG 프레임워크: 차이점',
        items: [
          '**시각적 빌더.** 시각적 또는 드래그 앤 드롭 워크플로 빌더를 문서에 명시한 도구: [Dify](/ko/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/ko/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langflow](/ko/power-local-llm/langflow-visual-ai-orchestration-review) 및 [Self-hosted AI Starter Kit](/ko/power-local-llm/self-hosted-ai-starter-kit-review).',
          '**로컬 LLM.** 로컬 LLM 사용을 문서에 명시한 도구: [cognee](/ko/power-local-llm/cognee-review), [Haystack](/ko/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/ko/power-local-llm/langchain-chatchat-review), [LlamaIndex](/ko/power-local-llm/llamaindex-rag-framework-review), [MaxKB](/ko/power-local-llm/maxkb-review), [Onyx](/ko/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/ko/power-local-llm/self-hosted-ai-starter-kit-review), [txtai](/ko/power-local-llm/txtai-embedded-vector-database-review) 및 [Vane (formerly Perplexica)](/ko/power-local-llm/vane-review).',
          '**에이전트.** 에이전트 지원을 문서에 명시한 도구: [Dify](/ko/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/ko/power-local-llm/flowise-ai-visual-workflow-builder-review), [Haystack](/ko/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/ko/power-local-llm/langchain-chatchat-review), [Langflow](/ko/power-local-llm/langflow-visual-ai-orchestration-review), [LlamaIndex](/ko/power-local-llm/llamaindex-rag-framework-review), [LongMemory](/ko/power-local-llm/longmemory-review), [MaxKB](/ko/power-local-llm/maxkb-review), [Onyx](/ko/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/ko/power-local-llm/self-hosted-ai-starter-kit-review) 및 [txtai](/ko/power-local-llm/txtai-embedded-vector-database-review).',
          '**여러 벡터 저장소.** 여러 벡터 저장소와의 통합을 문서에 명시한 도구: [Flowise](/ko/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langchain-Chatchat](/ko/power-local-llm/langchain-chatchat-review), [Langflow](/ko/power-local-llm/langflow-visual-ai-orchestration-review) 및 [LlamaIndex](/ko/power-local-llm/llamaindex-rag-framework-review).',
          '**Docker 및 셀프 호스팅.** Docker 또는 셀프 호스팅 배포를 문서에 명시한 도구: [cognee](/ko/power-local-llm/cognee-review), [Dify](/ko/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/ko/power-local-llm/flowise-ai-visual-workflow-builder-review), [Haystack](/ko/power-local-llm/haystack-deepset-rag-framework-review), [Langchain-Chatchat](/ko/power-local-llm/langchain-chatchat-review), [Langflow](/ko/power-local-llm/langflow-visual-ai-orchestration-review), [LongMemory](/ko/power-local-llm/longmemory-review), [MaxKB](/ko/power-local-llm/maxkb-review), [Onyx](/ko/power-local-llm/onyx-review), [Self-hosted AI Starter Kit](/ko/power-local-llm/self-hosted-ai-starter-kit-review), [txtai](/ko/power-local-llm/txtai-embedded-vector-database-review) 및 [Vane (formerly Perplexica)](/ko/power-local-llm/vane-review).',
          '**API.** HTTP 또는 REST API를 문서에 명시한 도구: [cognee](/ko/power-local-llm/cognee-review), [Dify](/ko/power-local-llm/dify-ai-workflow-builder-review), [Flowise](/ko/power-local-llm/flowise-ai-visual-workflow-builder-review), [Langchain-Chatchat](/ko/power-local-llm/langchain-chatchat-review), [Langflow](/ko/power-local-llm/langflow-visual-ai-orchestration-review), [LongMemory](/ko/power-local-llm/longmemory-review), [Onyx](/ko/power-local-llm/onyx-review), [txtai](/ko/power-local-llm/txtai-embedded-vector-database-review) 및 [Vane (formerly Perplexica)](/ko/power-local-llm/vane-review).',
        ],
      },
      docDifferences: {
        id: 'doc-differences',
        title: '문서 및 PDF 채팅: 차이점',
        items: [
          '**로컬 LLM.** 로컬 LLM 사용을 문서에 명시한 도구: [AnythingLLM](/ko/power-local-llm/anythingllm-review), [h2oGPT](/ko/power-local-llm/h2ogpt-review), [Khoj](/ko/power-local-llm/khoj-ai-second-brain-review), [Langchain-Chatchat](/ko/power-local-llm/langchain-chatchat-review), [PrivateGPT](/ko/power-local-llm/privategpt-review), [Quivr](/ko/power-local-llm/quivr-self-hosted-knowledge-assistant-review), [Sidekick](/ko/power-local-llm/sidekick-review) 및 [Surf](/ko/power-local-llm/surf-review).',
          '**문서 형식.** 여러 지원 파일 형식을 문서에 명시한 도구: [AnythingLLM](/ko/power-local-llm/anythingllm-review), [h2oGPT](/ko/power-local-llm/h2ogpt-review), [Khoj](/ko/power-local-llm/khoj-ai-second-brain-review), [PrivateGPT](/ko/power-local-llm/privategpt-review), [Quivr](/ko/power-local-llm/quivr-self-hosted-knowledge-assistant-review) 및 [RAGFlow](/ko/power-local-llm/ragflow-document-understanding-rag-review).',
          '**출처 인용.** 답변에 출처를 인용한다고 문서에 명시한 도구: [AnythingLLM](/ko/power-local-llm/anythingllm-review), [PrivateGPT](/ko/power-local-llm/privategpt-review), [RAGFlow](/ko/power-local-llm/ragflow-document-understanding-rag-review), [Sidekick](/ko/power-local-llm/sidekick-review) 및 [Surf](/ko/power-local-llm/surf-review).',
          '**데스크톱 앱.** 설치형 데스크톱 앱을 문서에 명시한 도구: [AnythingLLM](/ko/power-local-llm/anythingllm-review), [Khoj](/ko/power-local-llm/khoj-ai-second-brain-review) 및 [Surf](/ko/power-local-llm/surf-review).',
          '**Docker 및 셀프 호스팅.** Docker 또는 셀프 호스팅 배포를 문서에 명시한 도구: [AnythingLLM](/ko/power-local-llm/anythingllm-review), [h2oGPT](/ko/power-local-llm/h2ogpt-review), [Langchain-Chatchat](/ko/power-local-llm/langchain-chatchat-review), [PrivateGPT](/ko/power-local-llm/privategpt-review) 및 [RAGFlow](/ko/power-local-llm/ragflow-document-understanding-rag-review).',
          '**API.** API를 문서에 명시한 도구: [AnythingLLM](/ko/power-local-llm/anythingllm-review), [h2oGPT](/ko/power-local-llm/h2ogpt-review), [Langchain-Chatchat](/ko/power-local-llm/langchain-chatchat-review), [PrivateGPT](/ko/power-local-llm/privategpt-review), [RAGFlow](/ko/power-local-llm/ragflow-document-understanding-rag-review) 및 [ToolNeuron](/ko/power-local-llm/toolneuron-review).',
        ],
      },
      vectorDifferences: {
        id: 'vector-differences',
        title: '벡터 데이터베이스: 차이점',
        items: [
          '**하이브리드 검색.** 키워드와 벡터를 결합한 하이브리드 검색을 문서에 명시한 도구: [Milvus](/ko/power-local-llm/milvus-review), [Qdrant](/ko/power-local-llm/qdrant-review) 및 [Weaviate](/ko/power-local-llm/weaviate-review).',
          '**메타데이터 필터링.** 메타데이터 기준 필터링을 문서에 명시한 도구: [Chroma](/ko/power-local-llm/chroma-review), [Milvus](/ko/power-local-llm/milvus-review), [Qdrant](/ko/power-local-llm/qdrant-review) 및 [Weaviate](/ko/power-local-llm/weaviate-review).',
          '**분산 배포.** 분산 또는 클러스터 배포를 문서에 명시한 도구: [Milvus](/ko/power-local-llm/milvus-review), [Qdrant](/ko/power-local-llm/qdrant-review) 및 [Weaviate](/ko/power-local-llm/weaviate-review).',
          '**Docker 및 셀프 호스팅.** Docker 또는 셀프 호스팅 배포를 문서에 명시한 도구: [Milvus](/ko/power-local-llm/milvus-review), [Qdrant](/ko/power-local-llm/qdrant-review) 및 [Weaviate](/ko/power-local-llm/weaviate-review).',
          '**관리형 클라우드.** 셀프 호스팅과 함께 호스팅 클라우드 서비스도 문서에 명시한 도구: [Chroma](/ko/power-local-llm/chroma-review), [Milvus](/ko/power-local-llm/milvus-review), [Qdrant](/ko/power-local-llm/qdrant-review) 및 [Weaviate](/ko/power-local-llm/weaviate-review).',
          '**라이선스.** Chroma, Milvus, Qdrant는 Apache-2.0이며 Weaviate의 코어는 BSD-3-Clause이고, 일부 제한 기능은 자체 Weaviate License를 따릅니다. 자세한 내용은 각 도구의 리뷰를 참고하십시오.',
        ],
      },
      notesDifferences: {
        id: 'notes-differences',
        title: '노트 통합: 차이점',
        items: [
          '**노트 앱.** Obsidian용: [BMO Chatbot](/ko/power-local-llm/bmo-chatbot-review), [Copilot for Obsidian](/ko/power-local-llm/copilot-for-obsidian-review), [Smart Connections](/ko/power-local-llm/smart-connections-review) 및 [Text Generator](/ko/power-local-llm/text-generator-review); Logseq용: [logseq-copilot](/ko/power-local-llm/logseq-copilot-review); Joplin용: [Joplin AI](/ko/power-local-llm/joplin-ai-agent-review); [Blinko](/ko/power-local-llm/blinko-review), [SiYuan](/ko/power-local-llm/siyuan-review) 및 [Surf](/ko/power-local-llm/surf-review)는 AI가 내장된 독립형 노트 앱입니다.',
          '**로컬 LLM.** 로컬 LLM 사용을 문서에 명시한 도구: [BMO Chatbot](/ko/power-local-llm/bmo-chatbot-review), [Copilot for Obsidian](/ko/power-local-llm/copilot-for-obsidian-review), [Joplin AI](/ko/power-local-llm/joplin-ai-agent-review), [Karakeep](/ko/power-local-llm/karakeep-review), [logseq-copilot](/ko/power-local-llm/logseq-copilot-review) 및 [Surf](/ko/power-local-llm/surf-review).',
          '**시맨틱 검색.** 노트에 대한 시맨틱 검색을 문서에 명시한 도구: [Karakeep](/ko/power-local-llm/karakeep-review) 및 [Smart Connections](/ko/power-local-llm/smart-connections-review).',
          '**노트와 대화.** 노트와의 대화를 문서에 명시한 도구: [BMO Chatbot](/ko/power-local-llm/bmo-chatbot-review) 및 [Joplin AI](/ko/power-local-llm/joplin-ai-agent-review).',
        ],
      },
      searchDifferences: {
        id: 'search-differences',
        title: '로컬 검색 및 리서치: 차이점',
        items: [
          '**로컬 LLM.** 로컬 LLM 사용을 문서에 명시한 도구: [Farfalle](/ko/power-local-llm/farfalle-review), [Karakeep](/ko/power-local-llm/karakeep-review), [Local Deep Research](/ko/power-local-llm/local-deep-research-review), [Onyx](/ko/power-local-llm/onyx-review) 및 [Vane (formerly Perplexica)](/ko/power-local-llm/vane-review).',
          '**웹 검색.** 웹 검색을 문서에 명시한 도구: [Farfalle](/ko/power-local-llm/farfalle-review), [Local Deep Research](/ko/power-local-llm/local-deep-research-review), [Onyx](/ko/power-local-llm/onyx-review) 및 [Vane (formerly Perplexica)](/ko/power-local-llm/vane-review).',
          '**내 파일.** 내 파일이나 노트 검색을 문서에 명시한 도구: [Local Deep Research](/ko/power-local-llm/local-deep-research-review), [Onyx](/ko/power-local-llm/onyx-review) 및 [Smart Connections](/ko/power-local-llm/smart-connections-review).',
          '**출처 인용.** 출처 인용을 문서에 명시한 도구: [Local Deep Research](/ko/power-local-llm/local-deep-research-review) 및 [Vane (formerly Perplexica)](/ko/power-local-llm/vane-review).',
        ],
      },
      limitations: {
        id: 'limitations',
        title: '이 비교가 알려 주지 못하는 것',
        items: [
          '이 비교는 품질이 아니라 문서에 명시된 기능을 비교합니다. 답변이 얼마나 정확한지, 인덱싱이 얼마나 빠른지, 도구가 얼마나 잘 확장되는지는 알려 주지 않으며, PromptQuorum은 나열된 도구에 대해 이를 측정하지 않았습니다.',
          '대시는 우리가 확인한 문서의 공백일 뿐 부정적인 결론이 아닙니다. 일부 도구는 README에 언급되지 않은 기능을 지원할 수 있습니다.',
          '프로젝트 상태도 중요합니다. GitHub는 작성 시점에 Flowise와 h2oGPT 저장소를 아카이브(읽기 전용)로 표시하고 있으며, 이는 해당 저장소에서 더 이상 개발이 진행되지 않는다는 뜻입니다. 새 프로젝트에 선택하기 전에 각 도구의 리뷰를 확인하십시오.',
          '도구는 빠르게 바뀝니다. 각 도구의 리뷰에는 확인한 버전이 명시되어 있으며, 이 가이드는 리뷰가 갱신될 때 함께 갱신됩니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'RAG 프레임워크, 문서 채팅 앱, 벡터 데이터베이스는 어떻게 다릅니까?',
            a: 'RAG 프레임워크는 검색 증강 파이프라인을 만들기 위한 개발자용 툴킷입니다. 문서 채팅 앱은 내 파일에 대해 질문할 수 있는 완성형 애플리케이션입니다. 벡터 데이터베이스는 유사도 검색이 동작하게 하는 숫자 임베딩을 저장하며, 보통 앞의 두 가지 안에 들어가는 구성 요소 중 하나입니다. 서로 하는 일이 다르기 때문에 따로 비교합니다.',
          },
          {
            q: '비교표의 대시는 무엇을 뜻합니까?',
            a: '프로젝트 자체 문서에 해당 속성이 명시되어 있지 않다는 뜻입니다. 기능이 없다는 뜻이 아니므로, 도구의 리뷰나 저장소를 확인하십시오.',
          },
          {
            q: '왜 하나의 도구가 여러 번 나타납니까?',
            a: '일부 도구는 두 가지 이상의 역할을 합니다. 예를 들어 노트 앱에도 연결되는 검색 도구가 그렇습니다. 이런 도구는 속한 종류마다 나열되며, 해당 종류에 적용되는 속성이 함께 표시됩니다.',
          },
          {
            q: '이 도구들 중에 제휴 링크가 있는 것이 있습니까?',
            a: '아니요. 작성 시점에 PromptQuorum은 이 비교에 포함된 어떤 도구와도 제휴 관계가 없으며, 여기에 있는 어떤 링크도 수수료를 발생시키지 않습니다.',
          },
          {
            q: '이 비교는 얼마나 자주 갱신됩니까?',
            a: '표가 각 도구 리뷰와 같은 데이터로 생성되기 때문에, 1년에 두 번, 그리고 나열된 도구의 리뷰가 갱신될 때마다 함께 갱신됩니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '각 도구의 공식 README 또는 웹사이트. 해당 도구의 PromptQuorum 리뷰(비교표에서 연결됨)에 정리되어 있습니다.',
          '[PromptQuorum 로컬 AI 앱 디렉터리](/ko/directory) — 표의 각 행이 생성되는 기반 레코드입니다.',
          '나열된 각 프로젝트의 GitHub 저장소 상태(아카이브 또는 활성). 이 가이드를 작성할 때 확인했습니다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[로컬 소프트웨어 디렉터리](/ko/directory) — 200개 이상의 로컬 AI 앱을 둘러보고 카테고리별로 필터링할 수 있습니다.',
          '[로컬 추론 엔진, 런타임, 게이트웨이 비교](/ko/power-local-llm/local-llm-run-serve-compared) — 모델을 실행하는 도구에 대한 같은 방식의 비교입니다.',
          '[로컬 이미지, 영상, 비전 도구 비교](/ko/power-local-llm/local-llm-images-video-compared) — 이미지 생성과 비전 모델에 대한 같은 방식의 비교입니다.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 지식·검색 도구 비교(2026): RAG, 문서 채팅, 벡터 데이터베이스, 노트, 검색',
      description:
        '로컬 지식·검색 도구 40개 비교: RAG 프레임워크, 문서 채팅, 벡터 데이터베이스, 노트 통합, 검색을 공식 문서 기준으로 정리했습니다.',
      url: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
      inLanguage: 'ko',
      datePublished: '2026-09-20',
      dateModified: '2026-09-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '로컬 RAG 및 검색 도구를 고르는 개발자와 셀프 호스팅 사용자' },
      about: [
        { '@type': 'Thing', name: '검색 증강 생성' },
        { '@type': 'Thing', name: '벡터 데이터베이스' },
        { '@type': 'Thing', name: '문서 채팅' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        {
          '@type': 'ListItem',
          position: 3,
          name: '로컬 지식·검색 도구 비교(2026)',
          item: 'https://promptquorum.com/power-local-llm/local-llm-knowledge-retrieval-compared',
        },
      ],
    },
  },
}
