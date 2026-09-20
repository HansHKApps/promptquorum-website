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
}
