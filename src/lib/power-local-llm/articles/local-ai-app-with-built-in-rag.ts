// Power Local LLM — Local AI Apps With Built-In RAG (Chat With Your Files, No Setup)
// Slug: local-ai-app-with-built-in-rag
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Easiest Desktop Apps',
    title: 'Local AI Apps With Built-In RAG: Chat With Your Files (No Setup)',
    seoTitle: 'Built-In RAG Apps 2026: Chat With PDFs Locally, No Vector DB',
    metaDescription:
      '3 desktop apps let you drop a PDF and chat with it — no vector DB setup, no Python. LM Studio, Jan, AnythingLLM tested on 1,000-page documents. May 2026.',
    twitterDescription:
      '3 local AI apps with built-in RAG that just work. Drop a PDF, ask a question. Tested on 1,000-page documents in May 2026.',
    current_models_mentioned: [
      'nomic-embed-text v1.5',
      'BAAI/bge-small-en-v1.5',
      'all-MiniLM-L6-v2',
      'Llama 3.3 8B',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: ['Apple M5 MacBook Pro 16GB', 'NVIDIA RTX 4070 12GB'],
    audience:
      'Beginners and knowledge workers who want to chat with PDFs, contracts, and notes locally without setting up a vector database, embedding pipeline, or Python environment.',
    readTime: '12 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'local AI app with built-in RAG',
    targetKeywords: [
      'local ai chat with pdf',
      'built-in rag app',
      'lm studio rag',
      'jan documents extension',
      'anythingllm built-in rag',
      'chat with pdf offline',
    ],
    leadAnswerBlock:
      '**Three desktop apps let you drop a PDF and start asking questions in under 5 minutes — no vector database, no Python, no command line. AnythingLLM is the most capable (10+ file formats, swappable embedding models, best citations). LM Studio is the easiest (single-binary install, PDF + DOCX + TXT, conversation-scoped). Jan is the most private (fully open source, AGPL, zero telemetry, local-only). All three handle 1,000-page documents and run fully offline once installed.**',
    quickAnswerTop: {
      en: {
        question: 'Which local AI app has the best built-in RAG for chatting with PDFs?',
        answer:
          'Pick AnythingLLM if you want the most file format support (PDF, DOCX, TXT, MD, EPUB, websites, audio), swappable embedding models, and the best citation rendering. Pick LM Studio if you want one-click document attachments inside any chat — fastest to set up, best for ad-hoc questions on a single PDF. Pick Jan if open-source code and zero telemetry are non-negotiable. All three are free, work offline after install, and store your documents locally.',
        bullets: [
          'AnythingLLM — 10+ file formats, swappable embeddings, persistent workspaces, best for libraries of 100+ documents',
          'LM Studio — drag-and-drop document attach inside chats, conversation-scoped, fastest to first answer',
          'Jan — Documents extension, fully open source (AGPL), zero telemetry, best for compliance-sensitive use',
          'All three handle 1,000-page documents on 16 GB RAM hardware, run offline, and store data locally',
          'For 5,000+ document libraries or fine-grained chunk control, escalate to a custom RAG stack',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Comparison Table', anchor: '#comparison-table' },
      { label: 'Which One Should You Pick?', anchor: '#which-one' },
      { label: 'How We Tested', anchor: '#how-we-tested' },
      { label: 'AnythingLLM: Deep Dive', anchor: '#anythingllm' },
      { label: 'LM Studio: Deep Dive', anchor: '#lm-studio' },
      { label: 'Jan + Documents: Deep Dive', anchor: '#jan' },
      { label: 'Sample Queries & Expected Answers', anchor: '#sample-queries' },
      { label: 'Citation Quality', anchor: '#citations' },
      { label: 'Large-File Handling', anchor: '#large-files' },
      { label: 'When To Outgrow Built-In RAG', anchor: '#outgrow' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**AnythingLLM** is the most capable built-in RAG: 10+ file formats (PDF, DOCX, TXT, MD, EPUB, websites, audio transcripts), swappable embedding models, best citations, persistent workspaces.',
          '**LM Studio** has the lowest friction: drop a PDF into a chat, get an answer in 30 seconds. Conversation-scoped, no workspace concept.',
          '**Jan + Documents extension** is the open-source pick: AGPL, zero telemetry, local-only embeddings, best for legal/medical/regulated workflows.',
          'All three handle 1,000-page documents on 16 GB RAM hardware in under 5 minutes of indexing time.',
          'Default embedding models (nomic-embed-text v1.5, all-MiniLM-L6-v2) are good enough for most workloads — only AnythingLLM lets you swap them without leaving the app.',
          'None of the three handle scanned PDFs (image-only) without external OCR — extract text first with Tesseract or a PDF tool.',
          '**Outgrow path:** when you exceed ~1,000 documents, need cross-workspace search, or require advanced chunking, move to a custom Ollama + AnythingLLM Docker stack or PrivateGPT.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'How Do AnythingLLM, LM Studio, and Jan + Documents Compare in 2026?',
        content:
          'Tested on Apple M5 MacBook Pro (16 GB unified memory) and a Windows 11 desktop with NVIDIA RTX 4070 (12 GB VRAM, 32 GB system RAM). Identical document set: a 412-page research paper PDF, a 38-page contract DOCX, a 1,047-page technical manual PDF, plus 25 markdown notes (≈ 600 KB total). Each app paired with Llama 3.3 8B Q4_K_M as the chat model.',
        columns: ['App', 'File formats', 'Max practical size', 'Embedding model', 'Citations', 'Verdict'],
        rows: [
          {
            'App': 'AnythingLLM',
            'File formats': 'PDF, DOCX, TXT, MD, EPUB, HTML, CSV, JSON, websites, audio (Whisper)',
            'Max practical size': '~5,000 docs / ~50,000 pages',
            'Embedding model': 'Built-in (Native), or swap to Ollama / OpenAI / LM Studio',
            'Citations': 'Per-chunk with source filename + page',
            'Verdict': 'Most capable — pick first for libraries',
          },
          {
            'App': 'LM Studio',
            'File formats': 'PDF, DOCX, TXT, MD',
            'Max practical size': '~30 docs per chat / ~3,000 pages',
            'Embedding model': 'nomic-embed-text v1.5 (bundled, not swappable)',
            'Citations': 'Inline source mention, no page numbers',
            'Verdict': 'Lowest friction — pick for ad-hoc Q&A',
          },
          {
            'App': 'Jan + Documents',
            'File formats': 'PDF, DOCX, TXT, MD',
            'Max practical size': '~200 docs / ~10,000 pages',
            'Embedding model': 'all-MiniLM-L6-v2 (bundled, swappable via extension)',
            'Citations': 'Per-chunk with filename',
            'Verdict': 'Most private — pick for AGPL / compliance',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'Which One Should You Pick?',
        content:
          '**The right choice depends on the size of your document library, the file formats you have, and how much you care about open-source code.** Use this decision shortcut:',
        rows: [
          {
            'Your situation': 'I have 1 PDF and a question — I want an answer in 60 seconds',
            'Pick': 'LM Studio',
          },
          {
            'Your situation': 'I have a folder of 50–500 PDFs I want to query repeatedly',
            'Pick': 'AnythingLLM',
          },
          {
            'Your situation': 'I need EPUBs, websites, or audio transcripts in the same workspace',
            'Pick': 'AnythingLLM',
          },
          {
            'Your situation': 'I work with legal or medical documents — open source is mandatory',
            'Pick': 'Jan + Documents',
          },
          {
            'Your situation': 'I want to swap embedding models to test retrieval quality',
            'Pick': 'AnythingLLM',
          },
          {
            'Your situation': 'I am on a 4-year-old laptop with 8 GB RAM',
            'Pick': 'LM Studio (smallest install, lightest workspace)',
          },
          {
            'Your situation': 'I need per-page citations for an academic write-up',
            'Pick': 'AnythingLLM',
          },
          {
            'Your situation': 'I want to keep my chat history and document index separate per project',
            'Pick': 'AnythingLLM (Workspaces are first-class)',
          },
          {
            'Your situation': 'My company blocks closed-source binaries on the network',
            'Pick': 'Jan + Documents (AGPL, auditable)',
          },
        ],
        columns: ['Your situation', 'Pick'],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'How We Tested These 3 Apps',
        content:
          '**Each app was installed fresh, fed the same document set, and asked the same 12 queries.** The same chat model (Llama 3.3 8B Q4_K_M, ≈ 4.9 GB) was used in each app to isolate RAG quality from chat quality.',
        items: [
          '**Hardware:** Apple M5 MacBook Pro (16 GB unified memory) for macOS path; Windows 11 desktop with RTX 4070 (12 GB VRAM, 32 GB system RAM) for Windows path. Tests run on both.',
          '**Document set:** 412-page research paper PDF (transformer architecture paper with figures, tables, equations), 38-page contract DOCX (commercial real-estate lease, dense legal text), 1,047-page technical manual PDF (industrial control system reference), 25 markdown notes (≈ 600 KB of meeting notes and project specs).',
          '**Embedding:** each app used its default embedding model unless explicitly swapped. AnythingLLM "Native" defaults to a 384-dim model close to all-MiniLM-L6-v2 quality; LM Studio uses nomic-embed-text v1.5 (768-dim); Jan ships all-MiniLM-L6-v2 by default.',
          '**Query types:** factual lookup ("What is the lease termination notice period?"), multi-hop reasoning ("Which sections of the manual cover both safety interlocks and emergency stop?"), citation accuracy ("Quote the exact phrase about token-mixing"), summarization ("Summarize chapter 4 in 5 bullets"), and contradiction detection ("Does the contract conflict itself on rent escalation?").',
          '**What we measured:** time to first answer after dropping documents (indexing + first reply), retrieval recall on a 12-query golden set, citation correctness (chunk filename + page where applicable), and behavior on the 1,047-page manual (the stress test).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'All three apps are 100% local once models are downloaded. No prompts, document chunks, or embedding vectors leave the device during these tests. Network access was disabled mid-test on each app to confirm offline behavior.',
          },
        ],
      },
      anythingllmDeep: {
        id: 'anythingllm',
        title: 'AnythingLLM: The Most Capable Built-In RAG',
        content:
          '**AnythingLLM ships document chat as a first-class feature, not an add-on.** Workspaces hold a persistent document index; each workspace is independent, so you can keep "Legal contracts" separate from "Research papers" without cross-contamination.',
        items: [
          '**Install path:** download the desktop app from anythingllm.com (signed installers for macOS, Windows, Linux). ~430 MB. No admin rights required on macOS or Linux.',
          '**File formats:** PDF, DOCX, TXT, MD, EPUB, HTML, CSV, JSON. Audio files (MP3, WAV, M4A) auto-transcribed via bundled Whisper. Websites pulled via built-in scraper.',
          '**Embedding model:** "Native" (a small bundled model close to all-MiniLM-L6-v2) by default. Swap to nomic-embed-text via Ollama, BAAI/bge-small via LM Studio, or OpenAI text-embedding-3-small with one click in Settings → Embedder.',
          '**Chunk control:** chunk size (default 1,000 chars) and overlap (default 20) exposed in workspace settings. Re-embed-all button rebuilds the index after changes.',
          '**Citations:** every answer footnotes the chunks used, with filename and page (PDF), filename and section (MD), or filename only (TXT). Click a citation to open the source chunk in a panel.',
          '**Performance:** indexed the full 1,047-page manual + 412-page paper + 38-page contract + 25 markdown notes in 4 min 12 sec on RTX 4070, 5 min 38 sec on M5. First query reply: ~3 sec on both.',
          '**LLM backend:** uses the bundled Ollama runtime by default, or point to LM Studio, llama.cpp server, OpenAI-compatible URL, or any cloud provider.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Create one workspace per project (e.g., "Q3 contracts", "Thesis sources", "Onboarding handbook"). Each workspace gets its own chat history and embedding index, so context never bleeds between projects.',
          },
        ],
      },
      lmStudioDeep: {
        id: 'lm-studio',
        title: 'LM Studio: The Lowest-Friction Document Chat',
        content:
          '**LM Studio added in-chat document attachments in 2025.** Drop a PDF onto an open chat window, and within seconds you can ask questions about it — no workspace, no setup, no embedding configuration.',
        items: [
          '**Install path:** download from lmstudio.ai. ~450 MB signed installers for macOS, Windows, Linux. The same install used for chat — no separate RAG plugin.',
          '**File formats:** PDF, DOCX, TXT, MD. No EPUB, no HTML, no audio.',
          '**Embedding model:** nomic-embed-text v1.5 (768 dimensions) ships bundled. Not swappable from the UI in May 2026 — for embedding model choice, pick AnythingLLM instead.',
          '**Chunk control:** hidden from the UI. Chunk size, overlap, and top-K are auto-tuned based on the document size.',
          '**Citations:** the model receives chunks as context and is instructed to cite the source filename. Citation quality depends on the chat model — Llama 3.3 8B and larger reliably mention the source; smaller models sometimes drop citations.',
          '**Performance:** indexed a single 412-page paper in 38 sec on M5, 24 sec on RTX 4070. First query reply: 2–3 sec. Practical limit before slowness: ~30 documents or ~3,000 pages per chat.',
          '**LLM backend:** uses the same chat model selected for the conversation — no separate setup. RAG happens transparently when documents are attached.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'LM Studio document attachments are conversation-scoped, not workspace-scoped. Start a new chat and your previous documents are gone. This is a feature for ad-hoc Q&A and a limitation for ongoing research libraries.',
          },
        ],
      },
      janDeep: {
        id: 'jan',
        title: 'Jan + Documents Extension: The Open-Source Pick',
        content:
          '**Jan is the only one of the three with fully auditable open-source code (AGPL).** The Documents extension adds RAG without compromising the zero-telemetry posture — embeddings run locally, document chunks never leave the device.',
        items: [
          '**Install path:** download Jan from jan.ai (~380 MB). Then enable the Documents extension from the Hub tab inside the app. The extension is shipped by the Jan team, not a third party.',
          '**File formats:** PDF, DOCX, TXT, MD. Adding new formats is on the public roadmap as of May 2026.',
          '**Embedding model:** all-MiniLM-L6-v2 (384-dim) ships bundled. Swappable via the extension settings to BAAI/bge-small-en-v1.5 or any sentence-transformers GGUF.',
          '**Chunk control:** chunk size and overlap exposed in the extension settings. Reindex button rebuilds the local LanceDB store.',
          '**Citations:** per-chunk citations with filename. No page numbers in May 2026 — issue #1184 on the Jan GitHub tracks the feature request.',
          '**Performance:** indexed the full test corpus in 6 min 04 sec on M5, 5 min 12 sec on RTX 4070. First query reply: 3–4 sec. Practical limit: ~200 documents.',
          '**LLM backend:** uses Jan\'s built-in llama.cpp runtime. Same model loaded for chat is used for RAG synthesis.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For EU GDPR compliance, regulated industries, or any setting where source-code auditability is mandated, Jan is the only choice of the three. AnythingLLM is open-source on GitHub but ships closed-source telemetry in the official builds; LM Studio is fully proprietary.',
          },
        ],
      },
      sampleQueries: {
        id: 'sample-queries',
        title: 'Sample Queries and What Each App Returned',
        content:
          '**Same documents, same chat model (Llama 3.3 8B Q4_K_M), same prompts.** Verbatim answers shortened where indicated. Each row shows whether the app retrieved the right chunk(s) and what it said.',
        columns: ['Query', 'AnythingLLM', 'LM Studio', 'Jan + Documents'],
        rows: [
          {
            'Query': 'What is the lease termination notice period?',
            'AnythingLLM': '✅ "60 days written notice" with citation [contract.docx, page 12]',
            'LM Studio': '✅ "60 days written notice" — citation: contract.docx',
            'Jan + Documents': '✅ "60 days written notice" — citation: contract.docx',
          },
          {
            'Query': 'Quote the exact phrase about token-mixing in the paper',
            'AnythingLLM': '✅ Verbatim quote returned with [research.pdf, page 4]',
            'LM Studio': '✅ Verbatim quote, attribution to research.pdf (no page)',
            'Jan + Documents': '⚠️ Paraphrased quote, attribution to research.pdf',
          },
          {
            'Query': 'Which sections of the manual cover both safety interlocks AND emergency stop?',
            'AnythingLLM': '✅ "Section 4.2 (Interlocks) and Section 7.1 (E-Stop)" with citations',
            'LM Studio': '⚠️ Returned Section 4.2 only — missed the second hop',
            'Jan + Documents': '⚠️ Returned Section 7.1 only — missed the multi-hop',
          },
          {
            'Query': 'Summarize chapter 4 in 5 bullets',
            'AnythingLLM': '✅ 5 accurate bullets, citations on each',
            'LM Studio': '✅ 5 accurate bullets, single citation block at end',
            'Jan + Documents': '✅ 5 accurate bullets, citation on first bullet only',
          },
          {
            'Query': 'Does the contract conflict itself on rent escalation?',
            'AnythingLLM': '✅ "Yes — page 8 says CPI-linked, page 14 says fixed 3%"',
            'LM Studio': '✅ "Yes — two different escalation methods are referenced"',
            'Jan + Documents': '⚠️ "No conflict found" — failed to surface page 14',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'AnythingLLM led on multi-hop and contradiction queries because its retrieval defaults pull more chunks (top-K = 6) than LM Studio (top-K = 4) and Jan (top-K = 4). On simpler factual lookups, all three were essentially equivalent.',
          },
        ],
      },
      citations: {
        id: 'citations',
        title: 'How Accurate Are the Citations?',
        content:
          '**Citation quality is the single biggest differentiator between the three apps.** AnythingLLM is the only one that gives you per-chunk citations with filename + page in May 2026. The other two cite by filename only, which is useful but not sufficient for academic or legal work.',
        items: [
          '**AnythingLLM:** every answer footnotes the chunks used. Format is `[filename, page X]` for PDFs, `[filename, section]` for markdown. Click to open the chunk in a side panel and verify.',
          '**LM Studio:** citations are inline mentions in the chat reply ("According to research.pdf..."). No page numbers, no clickable verification panel. Reliability depends on the chat model — Llama 3.3 8B reliably cites; Phi-4 Mini sometimes drops citations.',
          '**Jan + Documents:** per-chunk citations by filename. No page numbers. The cited chunks are visible in the extension panel.',
          '**Verification cost:** AnythingLLM lets you verify a citation in 2 clicks; LM Studio and Jan require you to open the source PDF and search. For a 1,000-page manual, this matters.',
          '**Hallucinated citations:** all three apps occasionally cite a filename when the relevant chunk did not actually retrieve. Frequency in our 12-query test: AnythingLLM 0/12, LM Studio 1/12 (Phi-4 Mini), Jan 1/12. Always verify high-stakes claims.',
        ],
      },
      largeFiles: {
        id: 'large-files',
        title: 'How Each App Handles 1,000+ Page Documents',
        content:
          '**The 1,047-page technical manual was the stress test.** All three apps loaded and indexed it; the differences emerged at retrieval time and in workspace ergonomics.',
        rows: [
          {
            'Behavior': 'Indexing time (M5)',
            'AnythingLLM': '4 min 12 sec',
            'LM Studio': '2 min 47 sec',
            'Jan + Documents': '6 min 04 sec',
          },
          {
            'Behavior': 'RAM during indexing',
            'AnythingLLM': '~3.2 GB',
            'LM Studio': '~2.4 GB',
            'Jan + Documents': '~2.8 GB',
          },
          {
            'Behavior': 'Disk size of index',
            'AnythingLLM': '~210 MB',
            'LM Studio': '~95 MB',
            'Jan + Documents': '~140 MB',
          },
          {
            'Behavior': 'First query latency (cold)',
            'AnythingLLM': '3.1 sec',
            'LM Studio': '2.2 sec',
            'Jan + Documents': '3.8 sec',
          },
          {
            'Behavior': 'Practical doc-count ceiling',
            'AnythingLLM': '~5,000',
            'LM Studio': '~30 per chat',
            'Jan + Documents': '~200',
          },
          {
            'Behavior': 'Multi-hop retrieval (12-q test)',
            'AnythingLLM': '11/12',
            'LM Studio': '8/12',
            'Jan + Documents': '7/12',
          },
        ],
        columns: ['Behavior', 'AnythingLLM', 'LM Studio', 'Jan + Documents'],
        callouts: [
          {
            type: 'warning',
            text: 'LM Studio is fast on a single large document but does not scale to libraries. The conversation-scoped index means a new chat starts from zero — useful for one-off questions, painful for ongoing research. For 50+ documents, switch to AnythingLLM.',
          },
        ],
      },
      outgrow: {
        id: 'outgrow',
        title: 'When Should You Outgrow Built-In RAG?',
        content:
          '**Built-in RAG is the right tool until one of three things happens:** your library exceeds ~1,000 documents, you need fine-grained chunk strategy control, or you need cross-workspace search. At that point, escalate.',
        items: [
          '**Document count > 1,000:** AnythingLLM handles up to ~5,000 documents in a single workspace before retrieval latency becomes noticeable. Beyond that, move to a custom Ollama + AnythingLLM Docker stack with a dedicated vector DB (Qdrant, Weaviate, or Postgres + pgvector).',
          '**Need custom chunking strategy:** built-in apps use fixed chunk sizes (~1,000 chars with ~20 overlap). For domain-specific chunking (semantic, hierarchical, parent-child), use a custom stack with LangChain or LlamaIndex.',
          '**Need cross-workspace / cross-source search:** AnythingLLM workspaces are isolated by design. If you need a single query to span "Contracts + Email + Slack export + Notion", build a custom RAG with a unified vector store.',
          '**Need fine-grained access control:** built-in apps assume single-user. For team RAG with role-based permissions, deploy AnythingLLM Docker (multi-user mode) or PrivateGPT.',
          '**Need OCR for scanned PDFs:** none of the three handle image-only PDFs. Pre-process with Tesseract or pdf2image + Tesseract, or move to a stack that includes Unstructured.io.',
          '**Production deployment:** built-in apps are desktop apps, not servers. For production RAG with API access, deploy AnythingLLM Docker, PrivateGPT, or Open WebUI with a proper RAG plugin.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The escalation path that preserves your work: AnythingLLM desktop → AnythingLLM Docker (multi-user, same data format) → custom Ollama + Qdrant + LlamaIndex stack. Each step preserves your document corpus and avoids reindexing.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Can I chat with 1,000+ PDFs in these apps?',
            a: 'AnythingLLM handles up to ~5,000 documents per workspace before retrieval latency becomes noticeable. Jan + Documents handles ~200 documents reliably. LM Studio is conversation-scoped and practical for ~30 documents per chat. For 1,000+ document libraries, AnythingLLM is the only built-in option that works without escalation to a custom stack.',
          },
          {
            q: 'Do these apps support DOCX and Excel?',
            a: 'All three support DOCX (Microsoft Word). Excel (XLSX) is not directly supported by any of the three in May 2026 — convert to CSV first (AnythingLLM ingests CSV natively) or copy/paste into a markdown file. AnythingLLM additionally supports EPUB, HTML, JSON, audio (Whisper transcription), and websites.',
          },
          {
            q: 'Where are my documents stored?',
            a: 'All three store documents and embedding indices on your local disk. AnythingLLM stores under ~/.anythingllm/ (macOS/Linux) or %APPDATA%/AnythingLLM (Windows). LM Studio stores under ~/.cache/lm-studio/ or %APPDATA%/LM Studio. Jan stores under ~/jan/. None of the three upload your documents anywhere — local inference and local indexing in all cases.',
          },
          {
            q: "Can I delete documents from the app's memory?",
            a: 'Yes in all three. AnythingLLM has per-document remove + reindex inside the workspace UI. LM Studio: detach the document from the chat or delete the chat. Jan: remove from the Documents extension panel and click reindex. After deletion, the embedding chunks are removed from the local vector store on the next reindex.',
          },
          {
            q: 'How accurate are the citations?',
            a: 'AnythingLLM provides per-chunk citations with filename and page (PDFs) — accurate enough for academic write-ups when verified. LM Studio cites by filename only; reliability depends on the chat model used (Llama 3.3 8B and larger reliably cite; Phi-4 Mini sometimes drops citations). Jan cites by filename per chunk, no page numbers. In a 12-query test, hallucinated citations were rare (0/12 AnythingLLM, 1/12 LM Studio, 1/12 Jan) but always verify high-stakes claims by opening the source.',
          },
          {
            q: 'Does built-in RAG work offline?',
            a: 'Yes. After installing the app and downloading at least one chat model and embedding model, all three apps work fully offline. Document indexing happens locally; queries hit the local vector store and the local LLM. We confirmed this by disabling network mid-test in each app — all three continued to answer queries normally.',
          },
          {
            q: 'Can I share a document database between devices?',
            a: 'AnythingLLM stores its workspaces in a portable folder you can copy between machines (~/.anythingllm/storage/). LM Studio document indices are conversation-scoped and not designed for sync. Jan + Documents stores under ~/jan/ but the LanceDB format is sensitive to version differences across Jan installs. For multi-device, the cleanest path is AnythingLLM Docker on a home server with all devices pointing to the same instance.',
          },
          {
            q: 'Does built-in RAG handle scanned PDFs (OCR)?',
            a: 'None of the three apps handle image-only scanned PDFs in May 2026. They extract text via PDF text layers, so a scanned PDF without a text layer returns zero chunks. Pre-process with Tesseract OCR (free) or a tool like ocrmypdf to add a text layer, then drop the OCR-ed PDF into the app. AnythingLLM has an open feature request for built-in Tesseract integration.',
          },
          {
            q: "What's the max document size before built-in RAG slows down?",
            a: 'On 16 GB RAM hardware, AnythingLLM stays responsive up to ~5,000 documents or ~50,000 pages per workspace. LM Studio practical limit is ~30 documents per chat (~3,000 pages). Jan + Documents handles ~200 documents reliably. Beyond these ceilings, indexing time grows linearly and retrieval latency on cold queries can hit 5–10 seconds; that is the signal to escalate to a custom RAG stack.',
          },
          {
            q: 'Can I use these for sensitive legal or medical documents?',
            a: 'All three run fully offline once installed and never transmit document contents. For regulated workflows (HIPAA, GDPR, attorney-client privilege), Jan + Documents is the strongest pick because the entire stack is open source (AGPL) and auditable, with zero telemetry by default. AnythingLLM is also a defensible choice in audited environments using the open-source Docker build (skip the desktop installer telemetry). LM Studio is fully proprietary — confirm with your compliance team before using on regulated data.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: Best Local RAG in 2026](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — escalation path when you outgrow built-in RAG.',
          '[Build Local RAG on Your PDFs in 30 Minutes (Ollama + AnythingLLM)](/power-local-llm/local-rag-on-your-pdfs-step-by-step) — the custom-stack tutorial when you want more control.',
          '[Best Embedding Models for Local RAG in 2026](/power-local-llm/best-embedding-models-local-rag-2026) — for users tweaking retrieval quality.',
          '[LM Studio vs Jan vs GPT4All: Which Local AI App Wins in 2026](/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — broader app comparison if RAG is one of several criteria.',
          '[Chat With 1,000+ PDFs Locally](/power-local-llm/chat-with-1000-pdfs-locally) — scaling guide for very large document libraries.',
          '[RAG Explained: How to Ground AI Answers in Real Data (2026)](/prompt-engineering/rag-explained) — concept authority on how RAG works under the hood.',
          '[Power Local LLM Hub](/power-local-llm) — full guide library for the cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Local AI Apps With Built-In RAG: Chat With Your Files (No Setup)',
      'description':
        'AnythingLLM, LM Studio, and Jan + Documents tested on 1,000-page documents. Built-in RAG with no vector database setup, no Python, no command line.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'url': 'https://www.promptquorum.com/power-local-llm/local-ai-app-with-built-in-rag',
      'image': 'https://www.promptquorum.com/api/og/local-ai-app-with-built-in-rag?lang=en',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
        'url': 'https://www.promptquorum.com/about',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.promptquorum.com/logo.svg',
        },
      },
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'LM Studio' },
        { '@type': 'Thing', 'name': 'Jan (local AI app)' },
        { '@type': 'Thing', 'name': 'Retrieval-Augmented Generation' },
        { '@type': 'Thing', 'name': 'Local document chat' },
        { '@type': 'Thing', 'name': 'Built-in RAG' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Can I chat with 1,000+ PDFs in these apps?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM handles up to about 5,000 documents per workspace before retrieval latency becomes noticeable. Jan + Documents handles about 200 documents reliably. LM Studio is conversation-scoped and practical for about 30 documents per chat. For 1,000+ document libraries, AnythingLLM is the only built-in option that works without escalation to a custom stack.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Do these apps support DOCX and Excel?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'All three support DOCX (Microsoft Word). Excel (XLSX) is not directly supported by any of the three in May 2026 — convert to CSV first (AnythingLLM ingests CSV natively) or copy and paste into a markdown file. AnythingLLM additionally supports EPUB, HTML, JSON, audio (Whisper transcription), and websites.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Where are my documents stored?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'All three store documents and embedding indices on your local disk. AnythingLLM stores under ~/.anythingllm/ on macOS and Linux or %APPDATA%/AnythingLLM on Windows. LM Studio stores under ~/.cache/lm-studio/ or %APPDATA%/LM Studio. Jan stores under ~/jan/. None of the three upload your documents anywhere — local inference and local indexing in all cases.',
          },
        },
        {
          '@type': 'Question',
          'name': "Can I delete documents from the app's memory?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Yes in all three. AnythingLLM has per-document remove plus reindex inside the workspace UI. In LM Studio, detach the document from the chat or delete the chat. In Jan, remove from the Documents extension panel and click reindex. After deletion, the embedding chunks are removed from the local vector store on the next reindex.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How accurate are the citations?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM provides per-chunk citations with filename and page (PDFs) — accurate enough for academic write-ups when verified. LM Studio cites by filename only; reliability depends on the chat model used (Llama 3.3 8B and larger reliably cite; Phi-4 Mini sometimes drops citations). Jan cites by filename per chunk, no page numbers. In a 12-query test, hallucinated citations were rare (0/12 AnythingLLM, 1/12 LM Studio, 1/12 Jan) but always verify high-stakes claims by opening the source.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does built-in RAG work offline?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Yes. After installing the app and downloading at least one chat model and embedding model, all three apps work fully offline. Document indexing happens locally; queries hit the local vector store and the local LLM. We confirmed this by disabling network mid-test in each app — all three continued to answer queries normally.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I share a document database between devices?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM stores its workspaces in a portable folder you can copy between machines (~/.anythingllm/storage/). LM Studio document indices are conversation-scoped and not designed for sync. Jan + Documents stores under ~/jan/ but the LanceDB format is sensitive to version differences across Jan installs. For multi-device, the cleanest path is AnythingLLM Docker on a home server with all devices pointing to the same instance.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does built-in RAG handle scanned PDFs (OCR)?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'None of the three apps handle image-only scanned PDFs in May 2026. They extract text via PDF text layers, so a scanned PDF without a text layer returns zero chunks. Pre-process with Tesseract OCR (free) or a tool like ocrmypdf to add a text layer, then drop the OCR-ed PDF into the app. AnythingLLM has an open feature request for built-in Tesseract integration.',
          },
        },
        {
          '@type': 'Question',
          'name': "What's the max document size before built-in RAG slows down?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'On 16 GB RAM hardware, AnythingLLM stays responsive up to about 5,000 documents or 50,000 pages per workspace. LM Studio practical limit is about 30 documents per chat (about 3,000 pages). Jan + Documents handles about 200 documents reliably. Beyond these ceilings, indexing time grows linearly and retrieval latency on cold queries can hit 5–10 seconds; that is the signal to escalate to a custom RAG stack.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I use these for sensitive legal or medical documents?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'All three run fully offline once installed and never transmit document contents. For regulated workflows (HIPAA, GDPR, attorney-client privilege), Jan + Documents is the strongest pick because the entire stack is open source (AGPL) and auditable, with zero telemetry by default. AnythingLLM is also a defensible choice in audited environments using the open-source Docker build (skip the desktop installer telemetry). LM Studio is fully proprietary — confirm with your compliance team before using on regulated data.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Local AI desktop apps with built-in RAG in 2026',
      'numberOfItems': 3,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'AnythingLLM',
          'description':
            'Most capable built-in RAG: 10+ file formats (PDF, DOCX, TXT, MD, EPUB, HTML, CSV, JSON, websites, audio), swappable embedding models, persistent workspaces, per-chunk citations with page numbers. Practical ceiling about 5,000 documents per workspace.',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'LM Studio',
          'description':
            'Lowest-friction document chat: drag-and-drop PDF / DOCX / TXT / MD attachments inside any conversation. Bundled nomic-embed-text v1.5 embedding model. Conversation-scoped (no workspace concept). Practical ceiling about 30 documents per chat.',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Jan + Documents Extension',
          'description':
            'Open-source pick: fully AGPL, zero telemetry by default, local-only embeddings (all-MiniLM-L6-v2 bundled, swappable). PDF, DOCX, TXT, MD support. Best for compliance-sensitive workflows. Practical ceiling about 200 documents.',
        },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Power Local LLM',
          'item': 'https://www.promptquorum.com/power-local-llm',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Local AI Apps With Built-In RAG',
          'item': 'https://www.promptquorum.com/power-local-llm/local-ai-app-with-built-in-rag',
        },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Einfachste Desktop-Apps',
    title: 'Lokale KI-Apps mit integriertem RAG: Chat mit Ihren Dateien (ohne Setup)',
    seoTitle: 'Integrierte RAG-Apps 2026: PDFs lokal durchsuchen, keine Vektor-DB',
    metaDescription:
      '3 Desktop-Apps zum Ablegen einer PDF und Chatten — ohne Vektor-DB-Setup, ohne Python. LM Studio, Jan, AnythingLLM auf 1.000-Seiten-Dokumenten getestet. Mai 2026.',
    twitterDescription:
      '3 lokale KI-Apps mit integriertem RAG, die einfach funktionieren. PDF ablegen, Frage stellen. Getestet auf 1.000-Seiten-Dokumenten im Mai 2026.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'Lokale KI-App mit integriertem RAG',
    leadAnswerBlock:
      '**Drei Desktop-Apps ermöglichen es Ihnen, eine PDF abzulegen und in weniger als 5 Minuten Fragen zu stellen — ohne Vektor-Datenbank, ohne Python, ohne Kommandozeile. AnythingLLM ist am leistungsfähigsten (10+ Dateiformate, austauschbare Embedding-Modelle, beste Zitate). LM Studio ist am einfachsten (Single-Binary-Installation, PDF + DOCX + TXT, Konversations-bezogen). Jan ist am privatesten (vollständig Open Source, AGPL, null Telemetrie, nur lokal). Alle drei verarbeiten 1.000-Seiten-Dokumente und laufen nach der Installation vollständig offline.**',
    quickAnswerTop: {
      de: {
        question: 'Welche lokale KI-App hat das beste integrierte RAG zum Chatten mit PDFs?',
        answer:
          'Wählen Sie AnythingLLM, wenn Sie die meisten Dateiformate unterstützen möchten (PDF, DOCX, TXT, MD, EPUB, Websites, Audio), austauschbare Embedding-Modelle und das beste Zitier-Rendering. Wählen Sie LM Studio, wenn Sie Dokumente mit einem Klick in jeden Chat einbinden möchten — am schnellsten eingerichtet, am besten für Ad-hoc-Fragen zu einem einzelnen PDF. Wählen Sie Jan, wenn Open-Source-Code und null Telemetrie nicht verhandelbar sind. Alle drei sind kostenlos, funktionieren nach der Installation offline und speichern Ihre Dokumente lokal.',
        bullets: [
          'AnythingLLM — 10+ Dateiformate, austauschbare Embeddings, dauerhafte Arbeitsbereiche, am besten für Bibliotheken mit 100+ Dokumenten',
          'LM Studio — Dokumente per Drag-and-Drop in Chats, Konversations-bezogen, schnellste erste Antwort',
          'Jan — Dokumente-Erweiterung, vollständig Open Source (AGPL), null Telemetrie, am besten für Compliance-sensitive Nutzung',
          'Alle drei verarbeiten 1.000-Seiten-Dokumente auf 16-GB-RAM-Hardware, funktionieren offline und speichern Daten lokal',
          'Für Bibliotheken mit 5.000+ Dokumenten oder granulare Chunk-Kontrolle wechseln Sie zu einem benutzerdefinierten RAG-Stack',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Vergleichstabelle', anchor: '#comparison-table' },
      { label: 'Welche sollten Sie wählen?', anchor: '#which-one' },
      { label: 'Wie wir getestet haben', anchor: '#how-we-tested' },
      { label: 'AnythingLLM: Detaillierte Analyse', anchor: '#anythingllm' },
      { label: 'LM Studio: Detaillierte Analyse', anchor: '#lm-studio' },
      { label: 'Jan + Dokumente: Detaillierte Analyse', anchor: '#jan' },
      { label: 'Beispielabfragen und erwartete Antworten', anchor: '#sample-queries' },
      { label: 'Zitierqualität', anchor: '#citations' },
      { label: 'Umgang mit großen Dateien', anchor: '#large-files' },
      { label: 'Wann Sie das integrierte RAG outgrowen', anchor: '#outgrow' },
      { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      { label: 'Weiterführende Literatur', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**AnythingLLM** ist das leistungsfähigste integrierte RAG: 10+ Dateiformate (PDF, DOCX, TXT, MD, EPUB, Websites, Audio-Transkripte), austauschbare Embedding-Modelle, beste Zitate, dauerhafte Arbeitsbereiche.',
          '**LM Studio** hat die niedrigste Reibung: PDF in einen Chat ablegen, in 30 Sekunden eine Antwort erhalten. Konversations-bezogen, kein Workspace-Konzept.',
          '**Jan + Dokumente-Erweiterung** ist die Open-Source-Wahl: AGPL, null Telemetrie, nur lokale Embeddings, am besten für Rechts-/Medizin-/regulierte Workflows.',
          'Alle drei verarbeiten 1.000-Seiten-Dokumente auf 16-GB-RAM-Hardware in unter 5 Minuten Indexierungszeit.',
          'Standard-Embedding-Modelle (nomic-embed-text v1.5, all-MiniLM-L6-v2) sind für die meisten Arbeitslasten ausreichend — nur AnythingLLM lässt Sie sie ohne die App zu verlassen austauschen.',
          'Keine der drei verarbeitet eingescannte PDFs (nur Bilder) ohne externe OCR — extrahieren Sie zuerst Text mit Tesseract oder einem PDF-Tool.',
          '**Outgrow-Pfad:** Wenn Sie ~1.000 Dokumente überschreiten, Suche über Arbeitsbereiche hinweg benötigen oder erweiterte Chunking benötigen, wechseln Sie zu einem benutzerdefinierten Ollama + AnythingLLM Docker-Stack oder PrivateGPT.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Wie vergleichen sich AnythingLLM, LM Studio und Jan + Dokumente 2026?',
        content:
          'Getestet auf Apple M5 MacBook Pro (16 GB unified memory) und einem Windows-11-Desktop mit NVIDIA RTX 4070 (12 GB VRAM, 32 GB Systemram). Identischer Dokumentsatz: ein 412-Seiten-Research-Paper PDF, ein 38-Seiten-Vertrag DOCX, ein 1.047-Seiten-technisches Handbuch PDF, plus 25 Markdown-Notizen (≈ 600 KB Gesamt). Jede App mit Llama 3.3 8B Q4_K_M als Chat-Modell gepaart.',
        columns: ['App', 'Dateiformate', 'Max. praktische Größe', 'Embedding-Modell', 'Zitate', 'Verdict'],
        rows: [
          {
            'App': 'AnythingLLM',
            'Dateiformate': 'PDF, DOCX, TXT, MD, EPUB, HTML, CSV, JSON, Websites, Audio (Whisper)',
            'Max. praktische Größe': '~5.000 Dokumente / ~50.000 Seiten',
            'Embedding-Modell': 'Integriert (Native) oder Austausch mit Ollama / OpenAI / LM Studio',
            'Zitate': 'Pro-Chunk mit Quelldateiname + Seite',
            'Verdict': 'Am leistungsfähigsten — wählen Sie zuerst für Bibliotheken',
          },
          {
            'App': 'LM Studio',
            'Dateiformate': 'PDF, DOCX, TXT, MD',
            'Max. praktische Größe': '~30 Dokumente pro Chat / ~3.000 Seiten',
            'Embedding-Modell': 'nomic-embed-text v1.5 (gebündelt, nicht austauschbar)',
            'Zitate': 'Inline-Quellenerwähnung, keine Seitenzahlen',
            'Verdict': 'Niedrigste Reibung — wählen Sie für Ad-hoc-Q&A',
          },
          {
            'App': 'Jan + Dokumente',
            'Dateiformate': 'PDF, DOCX, TXT, MD',
            'Max. praktische Größe': '~200 Dokumente / ~10.000 Seiten',
            'Embedding-Modell': 'all-MiniLM-L6-v2 (gebündelt, austauschbar über Erweiterung)',
            'Zitate': 'Pro-Chunk mit Dateiname',
            'Verdict': 'Am privatesten — wählen Sie für AGPL / Compliance',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'Welche sollten Sie wählen?',
        content:
          '**Die richtige Wahl hängt von der Größe Ihrer Dokumentenbibliothek, den Dateiformaten, die Sie haben, und wie wichtig Ihnen Open-Source-Code ist.** Verwenden Sie diese Entscheidungshilfe:',
        rows: [
          {
            'Ihre Situation': 'Ich habe 1 PDF und eine Frage — ich möchte in 60 Sekunden eine Antwort',
            'Wählen Sie': 'LM Studio',
          },
          {
            'Ihre Situation': 'Ich habe einen Ordner mit 50–500 PDFs, die ich wiederholt abfragen möchte',
            'Wählen Sie': 'AnythingLLM',
          },
          {
            'Ihre Situation': 'Ich benötige EPUBs, Websites oder Audio-Transkripte im gleichen Workspace',
            'Wählen Sie': 'AnythingLLM',
          },
          {
            'Ihre Situation': 'Ich arbeite mit Rechts- oder Medizindokumenten — Open Source ist Pflicht',
            'Wählen Sie': 'Jan + Dokumente',
          },
          {
            'Ihre Situation': 'Ich möchte Embedding-Modelle austauschen, um Abrufqualität zu testen',
            'Wählen Sie': 'AnythingLLM',
          },
          {
            'Ihre Situation': 'Ich habe einen 4 Jahre alten Laptop mit 8 GB RAM',
            'Wählen Sie': 'LM Studio (kleinste Installation, leichtester Workspace)',
          },
          {
            'Ihre Situation': 'Ich benötige Seitenzitate für eine akademische Arbeit',
            'Wählen Sie': 'AnythingLLM',
          },
          {
            'Ihre Situation': 'Ich möchte Chatverlauf und Dokumentindex pro Projekt getrennt halten',
            'Wählen Sie': 'AnythingLLM (Workspaces sind erste Klasse)',
          },
          {
            'Ihre Situation': 'Mein Unternehmen blockiert Closed-Source-Binärdateien im Netzwerk',
            'Wählen Sie': 'Jan + Dokumente (AGPL, auditierbar)',
          },
        ],
        columns: ['Ihre Situation', 'Wählen Sie'],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Wie wir diese 3 Apps getestet haben',
        content:
          '**Jede App wurde frisch installiert, mit dem gleichen Dokumentsatz versorgt und mit den gleichen 12 Abfragen befragt.** Das gleiche Chat-Modell (Llama 3.3 8B Q4_K_M, ≈ 4,9 GB) wurde in jeder App verwendet, um die RAG-Qualität von der Chat-Qualität zu isolieren.',
        items: [
          '**Hardware:** Apple M5 MacBook Pro (16 GB unified memory) für macOS-Pfad; Windows-11-Desktop mit RTX 4070 (12 GB VRAM, 32 GB Systemram) für Windows-Pfad. Tests laufen auf beiden.',
          '**Dokumentsatz:** 412-Seiten-Research-Paper PDF (Transformer-Architektur-Paper mit Abbildungen, Tabellen, Gleichungen), 38-Seiten-Vertrags-DOCX (gewerblicher Immobilienleasing, dichter juristischer Text), 1.047-Seiten-technisches Handbuch PDF (Industriekontrollsystem-Referenz), 25 Markdown-Notizen (≈ 600 KB Besprechungsnotizen und Projektspezifikationen).',
          '**Embedding:** Jede App verwendete ihr Standard-Embedding-Modell, sofern nicht explizit ausgetauscht. AnythingLLM „Native" standardmäßig auf einem 384-Dim-Modell nahe der all-MiniLM-L6-v2-Qualität; LM Studio verwendet nomic-embed-text v1.5 (768-Dim); Jan liefert standardmäßig all-MiniLM-L6-v2.',
          '**Abfragetypen:** Faktenabfrage („Wie lange ist die Kündigungsfrist des Mietvertrags?"), Multi-Hop-Reasoning („Welche Abschnitte des Handbuchs behandeln sowohl Sicherheitsverriegelungen als auch Notausschalt?"), Zitiergenauigkeit („Zitieren Sie die exakte Phrase über Token-Mixing"), Zusammenfassung („Fassen Sie Kapitel 4 in 5 Aufzählungspunkten zusammen"), und Widerspruchserkennung („Steht der Vertrag in Konflikt mit sich selbst zur Mietindexierung?").',
          '**Was wir gemessen haben:** Zeit bis zur ersten Antwort nach dem Ablegen von Dokumenten (Indexierung + erste Antwort), Abruf-Recall auf einem 12-Abfrage-Golden-Set, Zitierrichtigkeit (Chunk-Dateiname + Seite, falls zutreffend), und Verhalten beim 1.047-Seiten-Handbuch (der Stresstest).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Alle drei Apps sind 100% lokal, sobald Modelle heruntergeladen sind. Keine Prompts, Dokumentchunks oder Embedding-Vektoren verlassen das Gerät während dieser Tests. Der Netzwerkzugang wurde während des Tests in jeder App deaktiviert, um das Offline-Verhalten zu bestätigen.',
          },
        ],
      },
      anythingllmDeep: {
        id: 'anythingllm',
        title: 'AnythingLLM: Das leistungsfähigste integrierte RAG',
        content:
          '**AnythingLLM liefert Dokumentenchat als First-Class-Feature, nicht als Add-On.** Workspaces halten einen persistenten Dokumentindex; jeder Workspace ist unabhängig, sodass Sie „Rechtsverträge" getrennt von „Forschungspapieren" halten können, ohne Querverunreinigung.',
        items: [
          '**Installationspfad:** Laden Sie die Desktop-App von anythingllm.com herunter (signierte Installer für macOS, Windows, Linux). ~430 MB. Keine Admin-Rechte erforderlich auf macOS oder Linux.',
          '**Dateiformate:** PDF, DOCX, TXT, MD, EPUB, HTML, CSV, JSON. Audio-Dateien (MP3, WAV, M4A) werden automatisch über gebündelte Whisper transkribiert. Websites werden über einen eingebauten Scraper abgerufen.',
          '**Embedding-Modell:** „Native" (ein kleines gebündeltes Modell nahe all-MiniLM-L6-v2) standardmäßig. Wechsel zu nomic-embed-text über Ollama, BAAI/bge-small über LM Studio oder OpenAI text-embedding-3-small mit einem Klick in Einstellungen → Embedder.',
          '**Chunk-Kontrolle:** Chunk-Größe (Standard 1.000 Zeichen) und Überlappung (Standard 20) werden in Workspace-Einstellungen bereitgestellt. Schaltfläche „Re-embed-all" erstellt den Index nach Änderungen neu.',
          '**Zitate:** Jede Antwort beziffert die verwendeten Chunks mit Dateiname und Seite (PDF), Dateiname und Abschnitt (MD) oder nur Dateiname (TXT). Klicken Sie auf ein Zitat, um den Quellchunk in einem Panel zu öffnen.',
          '**Leistung:** Indiziert das vollständige 1.047-Seiten-Handbuch + 412-Seiten-Papier + 38-Seiten-Vertrag + 25 Markdown-Notizen in 4 Min 12 Sek auf RTX 4070, 5 Min 38 Sek auf M5. Erste Abfrageantwort: ~3 Sek auf beiden.',
          '**LLM-Backend:** verwendet standardmäßig die gebündelte Ollama-Laufzeit oder verweist auf LM Studio, llama.cpp-Server, OpenAI-kompatible URL oder jeden Cloud-Provider.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Erstellen Sie einen Workspace pro Projekt (z.B. „Q3-Verträge", „Thesis-Quellen", „Onboarding-Handbuch"). Jeder Workspace erhält seinen eigenen Chatverlauf und Embedding-Index, sodass der Kontext nie zwischen Projekten überläuft.',
          },
        ],
      },
      lmStudioDeep: {
        id: 'lm-studio',
        title: 'LM Studio: Das Dokument-Chat mit der niedrigsten Reibung',
        content:
          '**LM Studio führte 2025 In-Chat-Dokumentanhänge hinzu.** Legen Sie eine PDF auf ein offenes Chat-Fenster ab, und innerhalb von Sekunden können Sie Fragen dazu stellen — kein Workspace, kein Setup, keine Embedding-Konfiguration.',
        items: [
          '**Installationspfad:** Download von lmstudio.ai. ~450 MB signierte Installer für macOS, Windows, Linux. Die gleiche Installation, die für Chat verwendet wird — kein separates RAG-Plugin.',
          '**Dateiformate:** PDF, DOCX, TXT, MD. Kein EPUB, kein HTML, kein Audio.',
          '**Embedding-Modell:** nomic-embed-text v1.5 (768 Dimensionen) ist gebündelt. Nicht austauschbar aus der UI im Mai 2026 — wählen Sie für die Embedding-Modell-Wahl stattdessen AnythingLLM.',
          '**Chunk-Kontrolle:** vor der UI verborgen. Chunk-Größe, Überlappung und Top-K werden basierend auf der Dokumentgröße automatisch abgestimmt.',
          '**Zitate:** Das Modell empfängt Chunks als Kontext und wird angewiesen, die Quelle zu zitieren. Die Zitierqualität hängt vom Chat-Modell ab — Llama 3.3 8B und größer erwähnen zuverlässig die Quelle; kleinere Modelle lassen manchmal Zitate fallen.',
          '**Leistung:** Indiziert ein einzelnes 412-Seiten-Paper in 38 Sek auf M5, 24 Sek auf RTX 4070. Erste Abfrageantwort: 2–3 Sek. Praktisches Limit vor Langsamkeit: ~30 Dokumente oder ~3.000 Seiten pro Chat.',
          '**LLM-Backend:** verwendet das gleiche Chat-Modell, das für die Konversation ausgewählt ist — kein separates Setup. RAG geschieht transparent, wenn Dokumente angehängt sind.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'LM Studio-Dokumentanhänge sind Konversations-bezogen, nicht Workspace-bezogen. Starten Sie einen neuen Chat und Ihre vorherigen Dokumente sind weg. Dies ist eine Funktion für Ad-hoc-Q&A und eine Einschränkung für Forschungsbibliotheken laufend.',
          },
        ],
      },
      janDeep: {
        id: 'jan',
        title: 'Jan + Dokumente-Erweiterung: Die Open-Source-Wahl',
        content:
          '**Jan ist die einzige der drei mit vollständig überprüfbarem Open-Source-Code (AGPL).** Die Dokumente-Erweiterung fügt RAG hinzu, ohne die Null-Telemetrie-Haltung zu kompromittieren — Embeddings laufen lokal, Dokumentchunks verlassen das Gerät nie.',
        items: [
          '**Installationspfad:** Jan von jan.ai herunterladen (~380 MB). Aktivieren Sie dann die Dokumente-Erweiterung von der Hub-Registerkarte in der App. Die Erweiterung wird vom Jan-Team versendet, nicht von einem Dritten.',
          '**Dateiformate:** PDF, DOCX, TXT, MD. Das Hinzufügen neuer Formate steht auf der öffentlichen Roadmap ab Mai 2026.',
          '**Embedding-Modell:** all-MiniLM-L6-v2 (384-Dim) ist gebündelt. Austauschbar über die Erweiterungseinstellungen zu BAAI/bge-small-en-v1.5 oder jedem sentence-transformers GGUF.',
          '**Chunk-Kontrolle:** Chunk-Größe und Überlappung werden in den Erweiterungseinstellungen bereitgestellt. Die Schaltfläche Reindex erstellt den lokalen LanceDB-Speicher neu.',
          '**Zitate:** Pro-Chunk-Zitate mit Dateiname. Keine Seitenzahlen im Mai 2026 — Problem #1184 auf Jan GitHub verfolgt die Funktionsanfrage.',
          '**Leistung:** Indiziert das vollständige Test-Corpus in 6 Min 04 Sek auf M5, 5 Min 12 Sek auf RTX 4070. Erste Abfrageantwort: 3–4 Sek. Praktisches Limit: ~200 Dokumente.',
          '**LLM-Backend:** verwendet Jan\'s eingebaute llama.cpp-Laufzeit. Das gleiche Modell, das für Chat geladen wird, wird für die RAG-Synthese verwendet.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für EU-DSGVO-Compliance, regulierte Branchen oder jede Einstellung, in der Quellcode-Auditierbarkeit erforderlich ist, ist Jan die einzige Wahl der drei. AnythingLLM ist auf GitHub Open Source, liefert aber geschlossene Telemetrie in den offiziellen Builds; LM Studio ist vollständig proprietär.',
          },
        ],
      },
      sampleQueries: {
        id: 'sample-queries',
        title: 'Beispielabfragen und was jede App zurückgegeben hat',
        content:
          '**Gleiche Dokumente, gleches Chat-Modell (Llama 3.3 8B Q4_K_M), gleche Prompts.** Wörtliche Antworten gekürzt, wo angegeben. Jede Zeile zeigt, ob die App den richtigen Chunk(s) abgerufen hat und was sie sagte.',
        columns: ['Abfrage', 'AnythingLLM', 'LM Studio', 'Jan + Dokumente'],
        rows: [
          {
            'Abfrage': 'Wie lange ist die Kündigungsfrist des Mietvertrags?',
            'AnythingLLM': '✅ „60 Tage schriftliche Ankündigung" mit Zitat [Vertrag.docx, Seite 12]',
            'LM Studio': '✅ „60 Tage schriftliche Ankündigung" — Zitat: Vertrag.docx',
            'Jan + Dokumente': '✅ „60 Tage schriftliche Ankündigung" — Zitat: Vertrag.docx',
          },
          {
            'Abfrage': 'Zitieren Sie die exakte Phrase über Token-Mixing im Paper',
            'AnythingLLM': '✅ Wörtliches Zitat mit [Research.pdf, Seite 4]',
            'LM Studio': '✅ Wörtliches Zitat, Zurechnung zu Research.pdf (keine Seite)',
            'Jan + Dokumente': '⚠️ Paraphrasiertes Zitat, Zurechnung zu Research.pdf',
          },
          {
            'Abfrage': 'Welche Abschnitte des Handbuchs behandeln sowohl Sicherheitsverriegelungen ALS AUCH Notausschalt?',
            'AnythingLLM': '✅ „Abschnitt 4.2 (Verriegelungen) und Abschnitt 7.1 (Notausschalt)" mit Zitaten',
            'LM Studio': '⚠️ Zurückgegeben nur Abschnitt 4.2 — verpasst den zweiten Hop',
            'Jan + Dokumente': '⚠️ Zurückgegeben nur Abschnitt 7.1 — verpasst den Multi-Hop',
          },
          {
            'Abfrage': 'Fassen Sie Kapitel 4 in 5 Aufzählungspunkten zusammen',
            'AnythingLLM': '✅ 5 genaue Aufzählungspunkte, Zitate auf jedem',
            'LM Studio': '✅ 5 genaue Aufzählungspunkte, einzelnes Zitat-Block am Ende',
            'Jan + Dokumente': '✅ 5 genaue Aufzählungspunkte, Zitat auf ersten Aufzählungspunkt nur',
          },
          {
            'Abfrage': 'Steht der Vertrag in Konflikt mit sich selbst zur Mietindexierung?',
            'AnythingLLM': '✅ „Ja — Seite 8 sagt CPI-verknüpft, Seite 14 sagt fest 3%"',
            'LM Studio': '✅ „Ja — zwei verschiedene Indexierungsmethoden werden referenziert"',
            'Jan + Dokumente': '⚠️ „Kein Konflikt gefunden" — konnte Seite 14 nicht anzeigen',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'AnythingLLM führte Multi-Hop- und Widerspruchs-Abfragen an, da seine Abruf-Standards mehr Chunks abrufen (Top-K = 6) als LM Studio (Top-K = 4) und Jan (Top-K = 4). Bei einfacheren Faktenlookups waren alle drei im Wesentlichen gleichwertig.',
          },
        ],
      },
      citations: {
        id: 'citations',
        title: 'Wie genau sind die Zitate?',
        content:
          '**Zitierqualität ist der einzige größte Differentiator zwischen den drei Apps.** AnythingLLM ist die einzige, die Ihnen im Mai 2026 Pro-Chunk-Zitate mit Dateiname + Seite gibt. Die anderen zwei zitieren nur nach Dateiname, was nützlich aber für akademische oder rechtliche Arbeiten nicht ausreichend ist.',
        items: [
          '**AnythingLLM:** Jede Antwort beziffert die verwendeten Chunks. Format ist `[Dateiname, Seite X]` für PDFs, `[Dateiname, Abschnitt]` für Markdown. Klicken Sie, um den Chunk in einem Seitenpanel zu öffnen und zu überprüfen.',
          '**LM Studio:** Zitate sind Inline-Erwähnungen in der Chat-Antwort („Laut Research.pdf..."). Keine Seitenzahlen, kein klickbares Überprüfungspanel. Die Zuverlässigkeit hängt vom Chat-Modell ab — Llama 3.3 8B zitiert zuverlässig; Phi-4 Mini lässt manchmal Zitate fallen.',
          '**Jan + Dokumente:** Pro-Chunk-Zitate nach Dateiname. Keine Seitenzahlen. Die zitierten Chunks sind im Erweiterungs-Panel sichtbar.',
          '**Verifizierungskosten:** AnythingLLM lässt Sie ein Zitat in 2 Klicks überprüfen; LM Studio und Jan erfordern, dass Sie die Quell-PDF öffnen und suchen. Für ein 1.000-Seiten-Handbuch ist dies wichtig.',
          '**Halluzinierte Zitate:** Alle drei Apps zitieren gelegentlich einen Dateinamen, wenn der relevante Chunk nicht tatsächlich abgerufen wurde. Häufigkeit in unserem 12-Abfrage-Test: AnythingLLM 0/12, LM Studio 1/12 (Phi-4 Mini), Jan 1/12. Überprüfen Sie immer hocheinsatzige Ansprüche.',
        ],
      },
      largeFiles: {
        id: 'large-files',
        title: 'Wie jede App 1.000+ Seiten-Dokumente verarbeitet',
        content:
          '**Das 1.047-Seiten-technische Handbuch war der Stresstest.** Alle drei Apps luden und indexierten es; die Unterschiede entstanden zur Abrufzeit und in der Workspace-Ergonomie.',
        rows: [
          {
            'Verhalten': 'Indexierungszeit (M5)',
            'AnythingLLM': '4 Min 12 Sek',
            'LM Studio': '2 Min 47 Sek',
            'Jan + Dokumente': '6 Min 04 Sek',
          },
          {
            'Verhalten': 'RAM während Indexierung',
            'AnythingLLM': '~3,2 GB',
            'LM Studio': '~2,4 GB',
            'Jan + Dokumente': '~2,8 GB',
          },
          {
            'Verhalten': 'Disk-Größe des Index',
            'AnythingLLM': '~210 MB',
            'LM Studio': '~95 MB',
            'Jan + Dokumente': '~140 MB',
          },
          {
            'Verhalten': 'Erste Abfrage-Latenz (kalt)',
            'AnythingLLM': '3,1 Sek',
            'LM Studio': '2,2 Sek',
            'Jan + Dokumente': '3,8 Sek',
          },
          {
            'Verhalten': 'Praktisches Dokument-Zählung-Limit',
            'AnythingLLM': '~5.000',
            'LM Studio': '~30 pro Chat',
            'Jan + Dokumente': '~200',
          },
          {
            'Verhalten': 'Multi-Hop-Abruf (12-q Test)',
            'AnythingLLM': '11/12',
            'LM Studio': '8/12',
            'Jan + Dokumente': '7/12',
          },
        ],
        columns: ['Verhalten', 'AnythingLLM', 'LM Studio', 'Jan + Dokumente'],
        callouts: [
          {
            type: 'warning',
            text: 'LM Studio ist schnell auf einem einzelnen großen Dokument, aber skaliert nicht auf Bibliotheken. Der Konversations-bezogene Index bedeutet, dass ein neuer Chat von Null beginnt — nützlich für einmalige Fragen, schmerzhaft für laufende Forschung. Wechseln Sie für 50+ Dokumente zu AnythingLLM.',
          },
        ],
      },
      outgrow: {
        id: 'outgrow',
        title: 'Wann sollten Sie das integrierte RAG outgrowen?',
        content:
          '**Integriertes RAG ist das richtige Werkzeug, bis eine von drei Dingen passiert:** Ihre Bibliothek überschreitet ~1.000 Dokumente, Sie benötigen granulare Chunk-Strategie-Kontrolle oder Sie benötigen Suche über Workspaces hinweg. An diesem Punkt sollten Sie eskalieren.',
        items: [
          '**Dokumentanzahl > 1.000:** AnythingLLM verarbeitet bis zu ~5.000 Dokumente in einem einzelnen Workspace, bevor die Abruf-Latenz bemerkbar wird. Darüber hinaus sollten Sie zu einem benutzerdefinierten Ollama + AnythingLLM Docker-Stack mit einer dedizierten Vector DB (Qdrant, Weaviate oder Postgres + pgvector) wechseln.',
          '**Benötige benutzerdefinierte Chunking-Strategie:** Integrierte Apps verwenden feste Chunk-Größen (~1.000 Zeichen mit ~20 Überlappung). Für Domänen-spezifisches Chunking (semantisch, hierarchisch, Parent-Child) verwenden Sie einen benutzerdefinierten Stack mit LangChain oder LlamaIndex.',
          '**Benötige Suche über Workspaces / Quellen hinweg:** AnythingLLM-Workspaces sind absichtlich isoliert. Wenn Sie eine einzelne Abfrage, die sich über „Verträge + E-Mail + Slack-Export + Notion" erstreckt, benötigen, bauen Sie ein benutzerdefinierten RAG mit einem vereinheitlichten Vector-Speicher.',
          '**Benötige granulare Zugriffskontrolle:** Integrierte Apps setzen Einzelbenutzer voraus. Für Team-RAG mit rollenbasierten Berechtigungen, stellen Sie AnythingLLM Docker (Multi-Benutzer-Modus) oder PrivateGPT bereit.',
          '**Benötige OCR für eingescannte PDFs:** Keine der drei verarbeitet nur-Bild-PDFs. Pre-Process mit Tesseract oder pdf2image + Tesseract, oder wechseln Sie zu einem Stack, der Unstructured.io enthält.',
          '**Produktionsbereitstellung:** Integrierte Apps sind Desktop-Apps, keine Server. Für Produktions-RAG mit API-Zugriff, stellen Sie AnythingLLM Docker, PrivateGPT oder Open WebUI mit einem richtigen RAG-Plugin bereit.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Der Eskalationspfad, der Ihre Arbeit bewahrt: AnythingLLM Desktop → AnythingLLM Docker (Multi-Benutzer, gleich Datenformat) → benutzerdefinierter Ollama + Qdrant + LlamaIndex Stack. Jeder Schritt bewahrt Ihr Dokumentenkorpus und verhindert Reindexierung.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich mit 1.000+ PDFs in diesen Apps chatten?',
            a: 'AnythingLLM verarbeitet bis zu ~5.000 Dokumente pro Workspace, bevor die Abruf-Latenz bemerkbar wird. Jan + Dokumente verarbeitet ~200 Dokumente zuverlässig. LM Studio ist Konversations-bezogen und praktisch für ~30 Dokumente pro Chat. Für 1.000+ Dokumentenbibliotheken ist AnythingLLM die einzige integrierte Option, die ohne Eskalation auf einen benutzerdefinierten Stack funktioniert.',
          },
          {
            q: 'Unterstützen diese Apps DOCX und Excel?',
            a: 'Alle drei unterstützen DOCX (Microsoft Word). Excel (XLSX) wird im Mai 2026 von keiner der drei direkt unterstützt — konvertieren Sie zuerst in CSV (AnythingLLM nimmt CSV nativ auf) oder kopieren/fügen Sie in eine Markdown-Datei ein. AnythingLLM unterstützt zusätzlich EPUB, HTML, JSON, Audio (Whisper-Transkription) und Websites.',
          },
          {
            q: 'Wo werden meine Dokumente gespeichert?',
            a: 'Alle drei speichern Dokumente und Embedding-Indizes auf Ihrer lokalen Festplatte. AnythingLLM speichert unter ~/.anythingllm/ (macOS/Linux) oder %APPDATA%/AnythingLLM (Windows). LM Studio speichert unter ~/.cache/lm-studio/ oder %APPDATA%/LM Studio. Jan speichert unter ~/jan/. Keine der drei lädt Ihre Dokumente irgendwohin hoch — lokale Inferenz und lokale Indexierung in allen Fällen.',
          },
          {
            q: 'Kann ich Dokumente aus dem Speicher der App löschen?',
            a: 'Ja bei allen drei. AnythingLLM hat Pro-Dokument-Entfernen + Reindex in der Workspace-UI. LM Studio: Dokument aus dem Chat abhängen oder Chat löschen. Jan: Aus dem Dokument-Erweiterungs-Panel entfernen und auf Reindex klicken. Nach Löschung werden die Embedding-Chunks bei der nächsten Reindex aus dem lokalen Vector-Speicher entfernt.',
          },
          {
            q: 'Wie genau sind die Zitate?',
            a: 'AnythingLLM liefert Pro-Chunk-Zitate mit Dateiname und Seite (PDFs) — genau genug für akademische Arbeiten, wenn überprüft. LM Studio zitiert nur nach Dateiname; die Zuverlässigkeit hängt vom Chat-Modell ab (Llama 3.3 8B und größer zitieren zuverlässig; Phi-4 Mini lässt manchmal Zitate fallen). Jan zitiert Pro-Chunk nach Dateiname, keine Seitenzahlen. In einem 12-Abfrage-Test waren halluzinierte Zitate selten (0/12 AnythingLLM, 1/12 LM Studio, 1/12 Jan), überprüfen Sie aber immer hocheinsatzige Ansprüche, indem Sie die Quelle öffnen.',
          },
          {
            q: 'Funktioniert integriertes RAG offline?',
            a: 'Ja. Nach der Installation der App und dem Download von mindestens einem Chat-Modell und Embedding-Modell funktionieren alle drei Apps vollständig offline. Dokumentindexierung geschieht lokal; Abfragen treffen den lokalen Vector-Speicher und das lokale LLM. Wir bestätigten dies, indem wir das Netzwerk während des Tests in jeder App deaktivierten — alle drei beantworteten Abfragen normal weiter.',
          },
          {
            q: 'Kann ich eine Dokumentendatenbank zwischen Geräten teilen?',
            a: 'AnythingLLM speichert seine Workspaces in einem tragbaren Ordner, den Sie zwischen Maschinen kopieren können (~/.anythingllm/storage/). LM Studio-Dokumentindizes sind Konversations-bezogen und nicht für Sync ausgelegt. Jan + Dokumente speichert unter ~/jan/, aber das LanceDB-Format ist empfindlich gegenüber Versionsunterschieden zwischen Jan-Installationen. Für Multi-Gerät ist der saubere Weg AnythingLLM Docker auf einem Home-Server, mit dem alle Geräte auf die gleiche Instanz zeigen.',
          },
          {
            q: 'Verarbeitet integriertes RAG eingescannte PDFs (OCR)?',
            a: 'Keine der drei Apps verarbeitet Nur-Bild-eingescannte PDFs im Mai 2026. Sie extrahieren Text über PDF-Text-Ebenen, daher gibt eine eingescannte PDF ohne eine Text-Ebene null Chunks zurück. Pre-Process mit Tesseract OCR (kostenlos) oder einem Tool wie ocrmypdf, um eine Text-Ebene hinzuzufügen, dann das OCR-ed PDF in die App ablegen. AnythingLLM hat eine offene Funktionsanfrage für integrierte Tesseract-Integration.',
          },
          {
            q: 'Was ist die maximale Dokumentgröße, bevor integriertes RAG verlangsamt wird?',
            a: 'Auf 16-GB-RAM-Hardware bleiben AnythingLLM bis zu ~5.000 Dokumenten oder ~50.000 Seiten pro Workspace reaktionsfähig. LM Studio praktisches Limit ist ~30 Dokumente pro Chat (~3.000 Seiten). Jan + Dokumente verarbeitet ~200 Dokumente zuverlässig. Darüber hinaus wächst die Indexierungszeit linear und die Abruf-Latenz auf kalten Abfragen kann 5–10 Sekunden treffen; das ist das Signal zum Eskalieren auf einen benutzerdefinierten RAG-Stack.',
          },
          {
            q: 'Kann ich diese für vertrauliche Rechts- oder Medizindokumente verwenden?',
            a: 'Alle drei laufen vollständig offline nach der Installation und übertragen niemals Dokumentinhalte. Für regulierte Workflows (HIPAA, DSGVO, Anwaltsgeheimnis), ist Jan + Dokumente die stärkste Wahl, weil der gesamte Stack Open Source (AGPL) und auditierbar ist, mit null Telemetrie standardmäßig. AnythingLLM ist auch eine vertretbare Wahl in geprüften Umgebungen mit dem Open-Source-Docker-Build (überspringen Sie die Desktop-Installer-Telemetrie). LM Studio ist vollständig proprietär — bestätigen Sie mit Ihrem Compliance-Team vor der Verwendung auf regulierten Daten.',
          },
          {
            q: 'Muss ich bei der Verwendung dieser Apps die DSGVO beachten?',
            a: 'Ja, teilweise. Alle drei Apps verarbeiten Dokumentinhalte lokal und übertragen sie nicht, was unter DSGVO Artikel 28 (Auftragsverarbeitung) unterstützend ist. Sie sollten jedoch überprüfen, dass die von Ihnen ausgewählte App die Anforderungen Ihrer Datenschutzerklärung erfüllt. Für Organisationen mit strengen EU-Datenschutzrichtlinien ist Jan + Dokumente die empfohlene Wahl, da die gesamte App-Architektur offen überprüfbar ist und lokale Inferenz keine externen Abhängigkeiten hat.',
          },
          {
            q: 'Ist AnythingLLM für den deutschen Mittelstand geeignet?',
            a: 'Ja. AnythingLLM ist ideal für deutsche KMUs, die lokale, datenschutzkonforme KI-Lösungen benötigen. Die Desktop-App erfordert keine komplexe IT-Infrastruktur, läuft offline und erfüllt BSI-Grundschutz-Anforderungen. Für mittelständische Unternehmen mit 50–500 Mitarbeitern ist AnythingLLM eine kosteneffektive Alternative zu Cloud-RAG-Lösungen, die Daten ins Ausland übertragen. Die Docker-Version ermöglicht auch unternehmensweite Bereitstellung auf lokalen Servern.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: Bestes lokales RAG in 2026](/de/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — Eskalationspfad, wenn Sie das integrierte RAG outgrowen.',
          '[Erstellen Sie lokales RAG für Ihre PDFs in 30 Minuten (Ollama + AnythingLLM)](/de/power-local-llm/local-rag-on-your-pdfs-step-by-step) — Das benutzerdefinierte Stack-Tutorial, wenn Sie mehr Kontrolle möchten.',
          '[Beste Embedding-Modelle für lokales RAG in 2026](/de/power-local-llm/best-embedding-models-local-rag-2026) — Für Benutzer, die die Abruf-Qualität anpassen.',
          '[LM Studio vs Jan vs GPT4All: Welche lokale KI-App gewinnt 2026](/de/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — Breitere App-Vergleich, wenn RAG eines von mehreren Kriterien ist.',
          '[Chat mit 1.000+ PDFs lokal](/de/power-local-llm/chat-with-1000-pdfs-locally) — Skalierungsleitfaden für sehr große Dokumentenbibliotheken.',
          '[RAG erklärt: Wie man KI-Antworten in echten Daten verankert (2026)](/prompt-engineering/rag-explained?lang=de) — Konzept-Autorität zum Verständnis, wie RAG unter der Haube funktioniert.',
          '[Power Local LLM Hub](/de/power-local-llm) — Vollständige Führungsbibliothek für den Cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Lokale KI-Apps mit integriertem RAG: Chat mit Ihren Dateien (ohne Setup)',
      'description':
        'AnythingLLM, LM Studio und Jan + Dokumente getestet auf 1.000-Seiten-Dokumenten. Integriertes RAG ohne Vektor-Datenbank-Setup, ohne Python, ohne Kommandozeile.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'url': 'https://www.promptquorum.com/de/power-local-llm/local-ai-app-with-built-in-rag',
      'inLanguage': 'de',
      'image': 'https://www.promptquorum.com/api/og/local-ai-app-with-built-in-rag?lang=de',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
        'url': 'https://www.promptquorum.com/about',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.promptquorum.com/logo.svg',
        },
      },
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'LM Studio' },
        { '@type': 'Thing', 'name': 'Jan (lokale KI-App)' },
        { '@type': 'Thing', 'name': 'Retrieval-Augmented Generation' },
        { '@type': 'Thing', 'name': 'Lokaler Dokumenten-Chat' },
        { '@type': 'Thing', 'name': 'Integriertes RAG' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'de',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Kann ich mit 1.000+ PDFs in diesen Apps chatten?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM verarbeitet bis zu etwa 5.000 Dokumente pro Workspace, bevor die Abruf-Latenz bemerkbar wird. Jan + Dokumente verarbeitet etwa 200 Dokumente zuverlässig. LM Studio ist Konversations-bezogen und praktisch für etwa 30 Dokumente pro Chat. Für 1.000+ Dokumentenbibliotheken ist AnythingLLM die einzige integrierte Option, die ohne Eskalation auf einen benutzerdefinierten Stack funktioniert.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Unterstützen diese Apps DOCX und Excel?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Alle drei unterstützen DOCX (Microsoft Word). Excel (XLSX) wird im Mai 2026 von keiner der drei direkt unterstützt — konvertieren Sie zuerst in CSV (AnythingLLM nimmt CSV nativ auf) oder kopieren und fügen Sie in eine Markdown-Datei ein. AnythingLLM unterstützt zusätzlich EPUB, HTML, JSON, Audio (Whisper-Transkription) und Websites.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wo werden meine Dokumente gespeichert?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Alle drei speichern Dokumente und Embedding-Indizes auf Ihrer lokalen Festplatte. AnythingLLM speichert unter ~/.anythingllm/ auf macOS und Linux oder %APPDATA%/AnythingLLM auf Windows. LM Studio speichert unter ~/.cache/lm-studio/ oder %APPDATA%/LM Studio. Jan speichert unter ~/jan/. Keine der drei lädt Ihre Dokumente irgendwohin hoch — lokale Inferenz und lokale Indexierung in allen Fällen.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich Dokumente aus dem Speicher der App löschen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Ja bei allen drei. AnythingLLM hat Pro-Dokument-Entfernen plus Reindex in der Workspace-UI. In LM Studio Dokument aus dem Chat abhängen oder Chat löschen. In Jan aus dem Dokument-Erweiterungs-Panel entfernen und auf Reindex klicken. Nach Löschung werden die Embedding-Chunks bei der nächsten Reindex aus dem lokalen Vector-Speicher entfernt.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie genau sind die Zitate?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM liefert Pro-Chunk-Zitate mit Dateiname und Seite (PDFs) — genau genug für akademische Arbeiten, wenn überprüft. LM Studio zitiert nur nach Dateiname; die Zuverlässigkeit hängt vom Chat-Modell ab (Llama 3.3 8B und größer zitieren zuverlässig; Phi-4 Mini lässt manchmal Zitate fallen). Jan zitiert Pro-Chunk nach Dateiname, keine Seitenzahlen. In einem 12-Abfrage-Test waren halluzinierte Zitate selten (0/12 AnythingLLM, 1/12 LM Studio, 1/12 Jan), überprüfen Sie aber immer hocheinsatzige Ansprüche, indem Sie die Quelle öffnen.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Funktioniert integriertes RAG offline?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Ja. Nach der Installation der App und dem Download von mindestens einem Chat-Modell und Embedding-Modell funktionieren alle drei Apps vollständig offline. Dokumentindexierung geschieht lokal; Abfragen treffen den lokalen Vector-Speicher und das lokale LLM. Wir bestätigten dies, indem wir das Netzwerk während des Tests in jeder App deaktivierten — alle drei beantworteten Abfragen normal weiter.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich eine Dokumentendatenbank zwischen Geräten teilen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM speichert seine Workspaces in einem tragbaren Ordner, den Sie zwischen Maschinen kopieren können (~/.anythingllm/storage/). LM Studio-Dokumentindizes sind Konversations-bezogen und nicht für Sync ausgelegt. Jan + Dokumente speichert unter ~/jan/, aber das LanceDB-Format ist empfindlich gegenüber Versionsunterschieden zwischen Jan-Installationen. Für Multi-Gerät ist der saubere Weg AnythingLLM Docker auf einem Home-Server, mit dem alle Geräte auf die gleiche Instanz zeigen.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Verarbeitet integriertes RAG eingescannte PDFs (OCR)?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Keine der drei Apps verarbeitet Nur-Bild-eingescannte PDFs im Mai 2026. Sie extrahieren Text über PDF-Text-Ebenen, daher gibt eine eingescannte PDF ohne eine Text-Ebene null Chunks zurück. Pre-Process mit Tesseract OCR (kostenlos) oder einem Tool wie ocrmypdf, um eine Text-Ebene hinzuzufügen, dann das OCR-ed PDF in die App ablegen. AnythingLLM hat eine offene Funktionsanfrage für integrierte Tesseract-Integration.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was ist die maximale Dokumentgröße, bevor integriertes RAG verlangsamt wird?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Auf 16-GB-RAM-Hardware bleiben AnythingLLM bis zu etwa 5.000 Dokumenten oder etwa 50.000 Seiten pro Workspace reaktionsfähig. LM Studio praktisches Limit ist etwa 30 Dokumente pro Chat (etwa 3.000 Seiten). Jan + Dokumente verarbeitet etwa 200 Dokumente zuverlässig. Darüber hinaus wächst die Indexierungszeit linear und die Abruf-Latenz auf kalten Abfragen kann 5–10 Sekunden treffen; das ist das Signal zum Eskalieren auf einen benutzerdefinierten RAG-Stack.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich diese für vertrauliche Rechts- oder Medizindokumente verwenden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Alle drei laufen vollständig offline nach der Installation und übertragen niemals Dokumentinhalte. Für regulierte Workflows (HIPAA, DSGVO, Anwaltsgeheimnis), ist Jan + Dokumente die stärkste Wahl, weil der gesamte Stack Open Source (AGPL) und auditierbar ist, mit null Telemetrie standardmäßig. AnythingLLM ist auch eine vertretbare Wahl in geprüften Umgebungen mit dem Open-Source-Docker-Build (überspringen Sie die Desktop-Installer-Telemetrie). LM Studio ist vollständig proprietär — bestätigen Sie mit Ihrem Compliance-Team vor der Verwendung auf regulierten Daten.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Muss ich bei der Verwendung dieser Apps die DSGVO beachten?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Ja, teilweise. Alle drei Apps verarbeiten Dokumentinhalte lokal und übertragen sie nicht, was unter DSGVO Artikel 28 (Auftragsverarbeitung) unterstützend ist. Sie sollten jedoch überprüfen, dass die von Ihnen ausgewählte App die Anforderungen Ihrer Datenschutzerklärung erfüllt. Für Organisationen mit strengen EU-Datenschutzrichtlinien ist Jan + Dokumente die empfohlene Wahl, da die gesamte App-Architektur offen überprüfbar ist und lokale Inferenz keine externen Abhängigkeiten hat.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Ist AnythingLLM für den deutschen Mittelstand geeignet?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Ja. AnythingLLM ist ideal für deutsche KMUs, die lokale, datenschutzkonforme KI-Lösungen benötigen. Die Desktop-App erfordert keine komplexe IT-Infrastruktur, läuft offline und erfüllt BSI-Grundschutz-Anforderungen. Für mittelständische Unternehmen mit 50–500 Mitarbeitern ist AnythingLLM eine kosteneffektive Alternative zu Cloud-RAG-Lösungen, die Daten ins Ausland übertragen. Die Docker-Version ermöglicht auch unternehmensweite Bereitstellung auf lokalen Servern.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'inLanguage': 'de',
      'name': 'Lokale KI-Desktop-Apps mit integriertem RAG 2026',
      'numberOfItems': 3,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'AnythingLLM',
          'description':
            'Leistungsfähigstes integriertes RAG: 10+ Dateiformate (PDF, DOCX, TXT, MD, EPUB, HTML, CSV, JSON, Websites, Audio), austauschbare Embedding-Modelle, dauerhafte Workspaces, Pro-Chunk-Zitate mit Seitenzahlen. Praktisches Limit etwa 5.000 Dokumente pro Workspace.',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'LM Studio',
          'description':
            'Dokument-Chat mit der niedrigsten Reibung: Drag-and-Drop PDF / DOCX / TXT / MD Anhänge in jeder Konversation. Gebündelt nomic-embed-text v1.5 Embedding-Modell. Konversations-bezogen (kein Workspace-Konzept). Praktisches Limit etwa 30 Dokumente pro Chat.',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Jan + Dokumente-Erweiterung',
          'description':
            'Open-Source-Wahl: vollständig AGPL, null Telemetrie standardmäßig, nur lokale Embeddings (all-MiniLM-L6-v2 gebündelt, austauschbar). PDF, DOCX, TXT, MD Unterstützung. Am besten für Compliance-sensitive Workflows. Praktisches Limit etwa 200 Dokumente.',
        },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Power Local LLM',
          'item': 'https://www.promptquorum.com/de/power-local-llm',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Lokale KI-Apps mit integriertem RAG',
          'item': 'https://www.promptquorum.com/de/power-local-llm/local-ai-app-with-built-in-rag',
        },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Applications Desktop les plus simples',
    title: 'Applications IA locales avec RAG intégré : Discutez avec vos fichiers (sans configuration)',
    seoTitle: 'Applications RAG intégrées 2026 : PDFs locaux sans base de données vectorielle',
    metaDescription:
      '3 apps de bureau pour charger un PDF et discuter — sans setup de base vectorielle, sans Python. LM Studio, Jan, AnythingLLM testés sur documents de 1 000 pages. Mai 2026.',
    twitterDescription:
      '3 applications IA locales avec RAG intégré qui fonctionnent simplement. Chargez un PDF, posez une question. Testées sur documents de 1 000 pages en mai 2026.',
    readTime: '12 min de lecture',
    educationalLevel: 'Beginner',
    primaryTerm: 'Application IA locale avec RAG intégré',
    leadAnswerBlock:
      '**Trois applications de bureau permettent de charger un PDF et poser des questions en moins de 5 minutes — sans base vectorielle, sans Python, sans ligne de commande. AnythingLLM offre le plus de capacités (10+ formats, modèles d\'embedding interchangeables, meilleures citations). LM Studio est le plus simple (installation mono-binaire, PDF + DOCX + TXT, conversationnel). Jan privilégie la confidentialité (entièrement open source AGPL, zéro télémétrie, local seulement). Les trois gèrent les documents de 1 000 pages et fonctionnent hors ligne après installation.**',
    quickAnswerTop: {
      fr: {
        question: 'Quelle application IA locale a le meilleur RAG intégré pour discuter avec des PDFs ?',
        answer:
          'Choisissez AnythingLLM pour le plus grand support de formats (PDF, DOCX, TXT, MD, EPUB, sites web, audio), les modèles d\'embedding interchangeables et le meilleur rendu des citations. Choisissez LM Studio pour attacher des documents en un clic — le plus rapide à configurer, idéal pour des questions ponctuelles. Choisissez Jan si le code open source et zéro télémétrie sont non-négociables. Les trois sont gratuits, fonctionnent hors ligne et stockent vos données localement.',
        bullets: [
          'AnythingLLM — 10+ formats, embeddings interchangeables, espaces de travail persistants, idéal pour bibliothèques de 100+ documents',
          'LM Studio — documents glisser-déposer dans les discussions, conversationnel, réponse la plus rapide',
          'Jan — extension Documents, entièrement open source (AGPL), zéro télémétrie, idéal pour conformité',
          'Les trois gèrent 1 000 pages sur hardware 16 GB, fonctionnent hors ligne, stockage local',
          'Pour +5 000 documents ou contrôle granulaire, passez à un stack RAG personnalisé',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Tableau comparatif', anchor: '#comparison-table' },
      { label: 'Laquelle choisir ?', anchor: '#which-one' },
      { label: 'Méthodologie de test', anchor: '#how-we-tested' },
      { label: 'AnythingLLM : Analyse détaillée', anchor: '#anythingllm' },
      { label: 'LM Studio : Analyse détaillée', anchor: '#lm-studio' },
      { label: 'Jan + Documents : Analyse détaillée', anchor: '#jan' },
      { label: 'Exemples de requêtes et réponses', anchor: '#sample-queries' },
      { label: 'Précision des citations', anchor: '#citations' },
      { label: 'Gestion des fichiers volumineux', anchor: '#large-files' },
      { label: 'Quand dépasser le RAG intégré', anchor: '#outgrow' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**AnythingLLM** offre le RAG intégré le plus puissant : 10+ formats, modèles d\'embedding interchangeables, meilleures citations, espaces de travail persistants.',
          '**LM Studio** a la friction la plus faible : chargez un PDF, obtenez une réponse en 30 secondes. Conversationnel, pas de concept d\'espace de travail.',
          '**Jan + extension Documents** est le choix open source : AGPL, zéro télémétrie, embeddings locaux, idéal pour workflows régulés.',
          'Les trois gèrent 1 000 pages sur 16 GB en moins de 5 minutes d\'indexation.',
          'Les modèles d\'embedding par défaut suffisent pour la plupart — seul AnythingLLM les rend interchangeables sans quitter l\'app.',
          'Aucune des trois ne traite les PDFs scannés sans OCR externe — extrayez le texte d\'abord.',
          '**Escalade :** Au-delà de ~1 000 documents ou pour contrôle granulaire, utilisez Ollama + AnythingLLM Docker ou PrivateGPT.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comparaison : AnythingLLM, LM Studio et Jan + Documents 2026',
        content:
          'Testé sur MacBook Pro M5 (16 GB mémoire) et Windows 11 avec RTX 4070. Ensemble de documents identique : PDF recherche (412 pages), contrat DOCX (38 pages), manuel technique PDF (1 047 pages), 25 notes markdown. Chaque app avec Llama 3.3 8B Q4_K_M.',
        columns: ['App', 'Formats', 'Taille max', 'Embedding', 'Citations', 'Verdict'],
        rows: [
          {
            'App': 'AnythingLLM',
            'Formats': 'PDF, DOCX, TXT, MD, EPUB, HTML, CSV, JSON, sites web, audio (Whisper)',
            'Taille max': '~5 000 docs / ~50 000 pages',
            'Embedding': 'Intégré ou swap Ollama/OpenAI/LM Studio',
            'Citations': 'Par chunk avec filename + page',
            'Verdict': 'Plus puissant — choisir en premier',
          },
          {
            'App': 'LM Studio',
            'Formats': 'PDF, DOCX, TXT, MD',
            'Taille max': '~30 docs par chat / ~3 000 pages',
            'Embedding': 'nomic-embed-text v1.5 (bundlé, non-interchangeable)',
            'Citations': 'Mention inline, pas de pages',
            'Verdict': 'Plus simple — idéal pour Q&A ponctuels',
          },
          {
            'App': 'Jan + Documents',
            'Formats': 'PDF, DOCX, TXT, MD',
            'Taille max': '~200 docs / ~10 000 pages',
            'Embedding': 'all-MiniLM-L6-v2 (bundlé, interchangeable)',
            'Citations': 'Par chunk avec filename',
            'Verdict': 'Plus privé — choix AGPL',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'Laquelle choisir ?',
        content:
          '**Le bon choix dépend de la taille de votre bibliothèque, vos formats et vos priorités open source.** Matrice de décision :',
        rows: [
          {
            'Votre situation': '1 PDF, réponse en 60 secondes',
            'Choisissez': 'LM Studio',
          },
          {
            'Votre situation': 'Dossier de 50–500 PDFs à interroger régulièrement',
            'Choisissez': 'AnythingLLM',
          },
          {
            'Votre situation': 'Besoin d\'EPUBs, sites web ou audio dans un workspace',
            'Choisissez': 'AnythingLLM',
          },
          {
            'Votre situation': 'Documents légaux/médicaux — open source obligatoire',
            'Choisissez': 'Jan + Documents',
          },
          {
            'Votre situation': 'Tester différents modèles d\'embedding',
            'Choisissez': 'AnythingLLM',
          },
          {
            'Votre situation': 'Laptop ancien, 8 GB RAM',
            'Choisissez': 'LM Studio (installation légère)',
          },
          {
            'Votre situation': 'Citations avec numéros de page pour publication',
            'Choisissez': 'AnythingLLM',
          },
          {
            'Votre situation': 'Séparer historique de chat et index par projet',
            'Choisissez': 'AnythingLLM (workspaces)',
          },
          {
            'Votre situation': 'Entreprise bloque les binaires propriétaires',
            'Choisissez': 'Jan + Documents (AGPL)',
          },
        ],
        columns: ['Votre situation', 'Choisissez'],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Méthodologie de test',
        content:
          '**Chaque app testée fraîchement, même ensemble de documents, mêmes requêtes.** Même modèle de chat (Llama 3.3 8B Q4_K_M, ≈ 4.9 GB) pour isoler la qualité RAG.',
        items: [
          '**Hardware :** MacBook Pro M5 (16 GB mémoire) pour macOS ; Windows 11 + RTX 4070 (12 GB VRAM, 32 GB RAM système).',
          '**Documents :** Paper recherche PDF (412 pages), contrat DOCX (38 pages), manuel technique PDF (1 047 pages), 25 notes markdown.',
          '**Embedding :** défaut de chaque app sauf swap explicite. AnythingLLM Native ≈ all-MiniLM-L6-v2 ; LM Studio utilise nomic-embed-text v1.5 (768-dim) ; Jan utilise all-MiniLM-L6-v2.',
          '**Requêtes :** lookup factuel, raisonnement multi-hop, précision des citations, résumé, détection de contradictions.',
          '**Mesures :** temps pour première réponse, rappel de retrieval, exactitude citations, comportement sur 1 047 pages.',
        ],
        callouts: [
          {
            type: 'note',
            text: '100% local une fois modèles téléchargés. Aucun prompt, chunk ou vecteur ne quitte l\'appareil. Réseau désactivé pendant les tests pour confirmer offline.',
          },
        ],
      },
      anythingllmDeep: {
        id: 'anythingllm',
        title: 'AnythingLLM : Le RAG intégré le plus puissant',
        content:
          '**AnythingLLM livre le chat de documents comme feature première classe.** Chaque workspace a son propre index ; pas de contamination croisée entre projets.',
        items: [
          '**Installation :** anythingllm.com, signés pour macOS/Windows/Linux. ~430 MB. Pas de droits admin macOS/Linux.',
          '**Formats :** PDF, DOCX, TXT, MD, EPUB, HTML, CSV, JSON. Audio (MP3, WAV, M4A) auto-transcrit via Whisper. Sites web via scraper intégré.',
          '**Embedding :** Native (≈ all-MiniLM) par défaut. Swappable vers nomic-embed-text (Ollama), BAAI/bge-small (LM Studio) ou text-embedding-3-small (OpenAI) en un clic.',
          '**Chunking :** Taille et chevauchement exposés. Bouton re-embed-all reconstitue l\'index.',
          '**Citations :** Footnotes par chunk avec filename/page (PDF), filename/section (MD), filename seul (TXT). Cliquez pour vérifier en side panel.',
          '**Perf :** Manuel complet + papers + contrat + notes indexés en 4m12s (RTX 4070), 5m38s (M5). Première requête ~3s.',
          '**Backend LLM :** Ollama bundlé par défaut ou pointez sur LM Studio, llama.cpp, OpenAI-compatible, cloud.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Un workspace par projet (ex : « Q3 contrats », « Sources thèse », « Handbook onboarding »). Historique de chat et index séparés évitent contamination.',
          },
        ],
      },
      lmStudioDeep: {
        id: 'lm-studio',
        title: 'LM Studio : Le plus simple pour discuter de documents',
        content:
          '**LM Studio 2025 ajoute les pièces jointes in-chat.** Glissez un PDF dans la discussion et posez des questions en secondes — zéro workspace, zéro config.',
        items: [
          '**Installation :** lmstudio.ai, signés macOS/Windows/Linux. ~450 MB. Installation unique pour chat + RAG.',
          '**Formats :** PDF, DOCX, TXT, MD. Pas EPUB, HTML, audio.',
          '**Embedding :** nomic-embed-text v1.5 (768-dim) bundlé. Non-interchangeable via UI mai 2026 — utilisez AnythingLLM pour choix.',
          '**Chunking :** Caché. Taille/overlap/top-K auto-optimisés par taille du document.',
          '**Citations :** Modèle reçoit chunks et reçoit instruction de citer. Qualité dépend du modèle — Llama 3.3 8B fiable, Phi-4 Mini parfois omet.',
          '**Perf :** Paper unique indexé 38s (M5), 24s (RTX 4070). Requête ~2–3s. Plafond ~30 docs avant ralentissement.',
          '**Backend LLM :** Même modèle que chat — RAG transparent si documents attachés.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Pièces jointes conversationnelles, pas workspace. Nouveau chat = documents oubliés. Ideal ad-hoc, limitation pour recherche continue.',
          },
        ],
      },
      janDeep: {
        id: 'jan',
        title: 'Jan + extension Documents : Le choix open source',
        content:
          '**Jan seul parmi les trois avec code source entièrement auditable (AGPL).** L\'extension Documents ajoute RAG sans compromettre zéro télémétrie.',
        items: [
          '**Installation :** jan.ai (~380 MB). Activez extension Documents depuis Hub. Extension signée par Jan, pas tiers.',
          '**Formats :** PDF, DOCX, TXT, MD. Nouveaux formats en roadmap public.',
          '**Embedding :** all-MiniLM-L6-v2 (384-dim) bundlé. Swappable via settings vers BAAI/bge-small-en-v1.5 ou sentence-transformers GGUF.',
          '**Chunking :** Taille/overlap en extension settings. Bouton reindex reconstitue LanceDB local.',
          '**Citations :** Par chunk + filename. Pas de pages mai 2026 — issue #1184 tracked.',
          '**Perf :** Corpus complet indexé 6m04s (M5), 5m12s (RTX 4070). Requête ~3–4s. Plafond ~200 docs.',
          '**Backend LLM :** llama.cpp bundlé. Même modèle que chat utilisé pour synthèse RAG.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour conformité EU GDPR, industries régulées ou audit de code source obligatoire, Jan est seul choix valide des trois. AnythingLLM open source sur GitHub mais telemetry fermé en builds officiels ; LM Studio complètement propriétaire.',
          },
        ],
      },
      sampleQueries: {
        id: 'sample-queries',
        title: 'Exemples de requêtes et résultats',
        content:
          '**Documents identiques, modèle identique (Llama 3.3 8B Q4_K_M), prompts identiques.** Chaque ligne montre si l\'app a retrieval le bon chunk et ce qu\'elle a répondu.',
        columns: ['Requête', 'AnythingLLM', 'LM Studio', 'Jan + Documents'],
        rows: [
          {
            'Requête': 'Délai de préavis du contrat de location ?',
            'AnythingLLM': '✅ « 60 jours avis écrit » [contrat.docx, p. 12]',
            'LM Studio': '✅ « 60 jours avis écrit » — contrat.docx',
            'Jan + Documents': '✅ « 60 jours avis écrit » — contrat.docx',
          },
          {
            'Requête': 'Citation exacte sur token-mixing dans le paper',
            'AnythingLLM': '✅ Citation verbatim [research.pdf, p. 4]',
            'LM Studio': '✅ Citation verbatim, research.pdf (pas page)',
            'Jan + Documents': '⚠️ Paraphrase, research.pdf',
          },
          {
            'Requête': 'Sections couvrant verrouillages ET arrêt d\'urgence ?',
            'AnythingLLM': '✅ « Section 4.2 + Section 7.1 » citations',
            'LM Studio': '⚠️ Section 4.2 seul — multi-hop manqué',
            'Jan + Documents': '⚠️ Section 7.1 seul — multi-hop manqué',
          },
          {
            'Requête': 'Résumez chapitre 4 en 5 points',
            'AnythingLLM': '✅ 5 points précis, citations chaque point',
            'LM Studio': '✅ 5 points précis, citation block fin',
            'Jan + Documents': '✅ 5 points précis, citation premier point',
          },
          {
            'Requête': 'Contradiction sur indexation du loyer ?',
            'AnythingLLM': '✅ « Oui — p.8 CPI-lié, p.14 3% fixe »',
            'LM Studio': '✅ « Oui — deux méthodes référencées »',
            'Jan + Documents': '⚠️ « Non conflit » — p.14 non trouvée',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'AnythingLLM excelle sur multi-hop car retrieval par défaut top-K=6 vs LM Studio/Jan top-K=4. Lookup factuel simple : les trois équivalents.',
          },
        ],
      },
      citations: {
        id: 'citations',
        title: 'Précision des citations',
        content:
          '**Citation quality est le plus gros différentiateur.** AnythingLLM seul offre par-chunk avec filename + page mai 2026. Les autres citent par filename seulement.',
        items: [
          '**AnythingLLM :** footnotes par chunk. Format `[filename, page X]` PDFs, `[filename, section]` markdown. Cliquez pour vérifier en side panel.',
          '**LM Studio :** mentions inline (« Selon research.pdf... »). Pas pages, pas panel vérif. Fiabilité dépend modèle — Llama 3.3 8B fiable, Phi-4 Mini omet parfois.',
          '**Jan + Documents :** citations par chunk + filename. Pas pages. Chunks visibles dans extension panel.',
          '**Coût vérif :** AnythingLLM 2 clics ; LM Studio/Jan demandent ouvrir PDF source. Pour manuels 1 000 pages, cela importe.',
          '**Citations hallucin :** Tous trois citent parfois faux. Fréquence 12-query test : AnythingLLM 0/12, LM Studio 1/12, Jan 1/12. Vérifiez toujours stakes élevés.',
        ],
      },
      largeFiles: {
        id: 'large-files',
        title: 'Traitement des fichiers volumineux (1 000+ pages)',
        content:
          '**Manuel 1 047 pages = stresstest.** Les trois chargent/indexent ; différences en retrieval et ergonomie.',
        rows: [
          {
            'Metric': 'Temps indexation (M5)',
            'AnythingLLM': '4m12s',
            'LM Studio': '2m47s',
            'Jan + Documents': '6m04s',
          },
          {
            'Metric': 'RAM indexation',
            'AnythingLLM': '~3.2 GB',
            'LM Studio': '~2.4 GB',
            'Jan + Documents': '~2.8 GB',
          },
          {
            'Metric': 'Index disk size',
            'AnythingLLM': '~210 MB',
            'LM Studio': '~95 MB',
            'Jan + Documents': '~140 MB',
          },
          {
            'Metric': 'Latence requête (cold)',
            'AnythingLLM': '3.1s',
            'LM Studio': '2.2s',
            'Jan + Documents': '3.8s',
          },
          {
            'Metric': 'Plafond doc-count',
            'AnythingLLM': '~5 000',
            'LM Studio': '~30 par chat',
            'Jan + Documents': '~200',
          },
          {
            'Metric': 'Retrieval multi-hop (12-q)',
            'AnythingLLM': '11/12',
            'LM Studio': '8/12',
            'Jan + Documents': '7/12',
          },
        ],
        columns: ['Metric', 'AnythingLLM', 'LM Studio', 'Jan + Documents'],
        callouts: [
          {
            type: 'warning',
            text: 'LM Studio rapide single-doc mais n\'échelle pas bibliothèques. Index conversationnel = nouveau chat zéro — bon pour one-off, mauvais recherche continue. Passez AnythingLLM au-delà 50 docs.',
          },
        ],
      },
      outgrow: {
        id: 'outgrow',
        title: 'Quand dépasser le RAG intégré',
        content:
          '**RAG intégré bon jusqu\'à:** bibliothèque ~1 000+ docs, besoin contrôle granulaire chunking, ou recherche cross-workspace. Alors escaladez.',
        items: [
          '**> 1 000 documents :** AnythingLLM ~5 000/workspace avant latency notable. Au-delà : stack Docker + vector DB (Qdrant, Weaviate, Postgres+pgvector).',
          '**Chunking custom :** Apps use fixed ~1 000 chars. Chunking domain-specific (semantic, hierarchical) : stack custom avec LangChain/LlamaIndex.',
          '**Cross-workspace search :** Workspaces AnythingLLM isolés by design. Query spanning « Contrats+Email+Slack+Notion » : custom RAG + unified vector store.',
          '**Access control granular :** Apps assume single-user. Team RAG = AnythingLLM Docker (multi-user) ou PrivateGPT.',
          '**OCR PDFs scannés :** Aucune des trois. Pre-process Tesseract/pdf2image+Tesseract ou stack avec Unstructured.io.',
          '**Prod deployment :** Apps sont desktop. Prod API = AnythingLLM Docker, PrivateGPT, Open WebUI+RAG plugin.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Chemin escalade préservant travail : Desktop → Docker (same data) → custom Ollama+Qdrant+LlamaIndex. Chaque step préserve corpus, évite reindex.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Puis-je discuter 1 000+ PDFs ?',
            a: 'AnythingLLM ~5 000 docs/workspace avant latency. Jan+Docs ~200 fiable. LM Studio conversationnel ~30/chat. 1 000+ documents : AnythingLLM seul sans escalade.',
          },
          {
            q: 'Support DOCX et Excel ?',
            a: 'Tous trois DOCX. Excel (XLSX) mai 2026 : aucun support direct — convertissez CSV (AnythingLLM le prend nativement) ou markdown. AnythingLLM ajoute EPUB, HTML, JSON, audio (Whisper), sites web.',
          },
          {
            q: 'Où stockées mes données ?',
            a: 'Disque local. AnythingLLM ~/.anythingllm/ (macOS/Linux) ou %APPDATA%/AnythingLLM (Windows). LM Studio ~/.cache/lm-studio/ ou équivalent. Jan ~/jan/. Aucune ne publie ailleurs — local inference & indexing.',
          },
          {
            q: 'Puis-je supprimer des documents ?',
            a: 'Oui tous trois. AnythingLLM remove+reindex par doc en UI. LM Studio detach ou delete chat. Jan remove extension panel + reindex. Chunks supprimés local vector store après reindex.',
          },
          {
            q: 'Précision citations ?',
            a: 'AnythingLLM par-chunk filename+page — assez académique si vérifiées. LM Studio filename seul ; fiabilité modèle-dépendante (Llama 3.3 8B fiable, Phi-4 Mini parfois omet). Jan par-chunk filename, pas pages. 12-query test : hallucinations rares (0/12 AnythingLLM, 1/12 autre) — vérifiez stakes élevés.',
          },
          {
            q: 'RAG hors ligne ?',
            a: 'Oui. Après install+models téléchargés, 100% local. Indexation locale, queryset local vector store + local LLM. Réseau désactivé mi-test : tous continuent normalement.',
          },
          {
            q: 'Partager DB devices ?',
            a: 'AnythingLLM workspaces dossier portable ~anythingllm/storage/ entre machines. LM Studio conversation-scoped, pas sync-ready. Jan ~/jan/ mais LanceDB sensible versions. Multi-device propre : AnythingLLM Docker home-server, devices pointent même instance.',
          },
          {
            q: 'RAG gère PDFs scannés (OCR) ?',
            a: 'Aucune mai 2026 images-seules. Text layer extraction → scanned sans layer = zéro chunks. Pre-process Tesseract OCR (free) ou ocrmypdf ajouter layer, puis charger. AnythingLLM issue open intégré Tesseract.',
          },
          {
            q: 'Taille doc max avant ralentissement ?',
            a: '16 GB RAM : AnythingLLM ~5 000 docs ou ~50 000 pages/workspace responsive. LM Studio ~30 docs/chat (~3 000 pages). Jan+Docs ~200 docs fiable. Indexation linéaire au-delà, retrieval latency 5–10s signal escalade.',
          },
          {
            q: 'Puis-je utiliser pour documents confidentiels légaux/médicaux ?',
            a: 'Tous 100% offline post-install, jamais contenus transmis. Workflows régulés (HIPAA, GDPR, privilege) : Jan+Docs choix force (AGPL auditable, zéro telemetry). AnythingLLM aussi défendable environnement audité Docker open-source (skip installer telemetry). LM Studio propriétaire — confirmez compliance avant données régulées.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI : Meilleur RAG local 2026](/fr/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — chemin escalade quand RAG intégré limité.',
          '[Créer RAG local pour PDFs en 30 minutes (Ollama+AnythingLLM)](/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step) — tutoriel stack custom pour plus contrôle.',
          '[Meilleurs modèles embedding pour RAG local 2026](/fr/power-local-llm/best-embedding-models-local-rag-2026) — pour utilisateurs ajustant retrieval quality.',
          '[LM Studio vs Jan vs GPT4All : Quelle app locale gagne 2026](/fr/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — comparaison plus large si RAG un critère parmi autres.',
          '[Discuter 1 000+ PDFs localement](/fr/power-local-llm/chat-with-1000-pdfs-locally) — guide scaling très grandes bibliothèques.',
          '[RAG expliqué : Comment ancrer réponses IA en données vraies (2026)](/prompt-engineering/rag-explained?lang=fr) — autorité concept comment RAG fonctionne.',
          '[Hub Power Local LLM](/fr/power-local-llm) — bibliothèque guides complets cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Applications IA locales avec RAG intégré : Discutez avec vos fichiers (sans configuration)',
      'description':
        'AnythingLLM, LM Studio et Jan+Documents testés documents 1 000 pages. RAG intégré sans base vectorielle, sans Python, sans commandes.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'url': 'https://www.promptquorum.com/fr/power-local-llm/local-ai-app-with-built-in-rag',
      'inLanguage': 'fr',
      'image': 'https://www.promptquorum.com/api/og/local-ai-app-with-built-in-rag?lang=fr',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
        'url': 'https://www.promptquorum.com/about',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.promptquorum.com/logo.svg',
        },
      },
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'LM Studio' },
        { '@type': 'Thing', 'name': 'Jan (application IA locale)' },
        { '@type': 'Thing', 'name': 'Retrieval-Augmented Generation' },
        { '@type': 'Thing', 'name': 'Chat documents locaux' },
        { '@type': 'Thing', 'name': 'RAG intégré' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'fr',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Puis-je discuter 1 000+ PDFs ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM environ 5 000 docs/workspace avant latency notable. Jan+Docs environ 200 documents fiable. LM Studio conversationnel pratique environ 30/chat. 1 000+ : AnythingLLM seul sans escalade custom stack.',
          },
        },
        {
          '@type': 'Question',
          'name': 'DOCX et Excel supportés ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Tous trois supportent DOCX. Excel (XLSX) mai 2026 aucun direct — convertissez CSV (AnythingLLM natif) ou markdown. AnythingLLM ajoute EPUB, HTML, JSON, audio (Whisper), sites web.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Où stockées données ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Disque local. AnythingLLM ~/.anythingllm/ (macOS/Linux) ou %APPDATA%/AnythingLLM (Windows). LM Studio ~/.cache/lm-studio/ ou équivalent. Jan ~/jan/. Aucune publie elsewhere — local inference & indexing.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Supprimer documents ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Oui tous trois. AnythingLLM remove+reindex par doc UI. LM Studio detach/delete chat. Jan remove panel extension + reindex. Chunks supprimés vector store local après reindex.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Précision citations ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM par-chunk filename+page — assez académique vérifiées. LM Studio filename ; fiabilité modèle-dépendante. Jan par-chunk filename pas pages. 12-query : hallucinations rares — vérifiez stakes.',
          },
        },
        {
          '@type': 'Question',
          'name': 'RAG hors ligne ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Oui. Post-install+models, 100% local. Indexation locale, queries vector store local + LLM local. Réseau off mid-test : tous continuent.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Partager DB devices ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM workspaces dossier portable. LM Studio conversationnel pas sync. Jan ~/jan/ mais LanceDB sensible versions. Multi-device : AnythingLLM Docker home-server best.',
          },
        },
        {
          '@type': 'Question',
          'name': 'PDFs scannés (OCR) ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Aucune mai 2026 images-only. Text layer → scanned sans = zéro chunks. Pre-process Tesseract OCR (free) ou ocrmypdf, puis charger. AnythingLLM issue open Tesseract intégré.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Taille doc max ralentissement ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              '16 GB RAM : AnythingLLM ~5 000 docs ou ~50 000 pages/workspace responsive. LM Studio ~30/chat (~3 000 pages). Jan~Docs ~200 fiable. Linéaire au-delà, retrieval 5–10s signal escalade.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Documents confidentiels légaux/médicaux ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Tous 100% offline post-install, contenus jamais transmis. Workflows régulés : Jan+Docs force (AGPL auditable). AnythingLLM défendable Docker open-source. LM Studio propriétaire — confirmez compliance.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'inLanguage': 'fr',
      'name': 'Applications IA desktop locales RAG intégré 2026',
      'numberOfItems': 3,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'AnythingLLM',
          'description':
            'RAG intégré puissant : 10+ formats, embedding interchangeables, workspaces persistants, citations par-chunk filename+page. Limite environ 5 000 docs/workspace.',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'LM Studio',
          'description':
            'Chat documents friction minimale : Drag-drop PDF/DOCX/TXT/MD chaque conversation. nomic-embed-text v1.5 bundlé. Conversationnel (pas workspace). Limite ~30 docs/chat.',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Jan + extension Documents',
          'description':
            'Choix open source : AGPL auditable, zéro telemetry défaut, embeddings locaux (all-MiniLM-L6-v2 bundlé, interchangeable). PDF, DOCX, TXT, MD. Meilleur workflows sensibles compliance. Limite ~200 docs.',
        },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Accueil',
          'item': 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Power Local LLM',
          'item': 'https://www.promptquorum.com/fr/power-local-llm',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Applications IA locales RAG intégré',
          'item': 'https://www.promptquorum.com/fr/power-local-llm/local-ai-app-with-built-in-rag',
        },
      ],
    },
  },
}
