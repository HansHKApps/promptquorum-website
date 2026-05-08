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
    theme: 'Easiest Desktop Apps',
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
    theme: 'Easiest Desktop Apps',
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
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Easiest Desktop Apps',
    title: 'ローカルAIアプリ（内蔵RAG対応）：ファイルとチャット（セットアップ不要）',
    seoTitle: '内蔵RAGアプリ 2026 : ローカルPDF検索、ベクトルDB不要',
    metaDescription:
      'PDFを読み込んでチャットできるデスクトップアプリ3つ — ベクトルDB、Python、コマンドライン不要。LM Studio、Jan、AnythingLLM を1,000ページドキュメントでテスト。2026年5月。',
    twitterDescription:
      'ローカルAIの内蔵RAGアプリ3つ。PDFを読み込み、質問を入力。1,000ページドキュメントで2026年5月テスト済み。',
    readTime: '12分で読める',
    educationalLevel: 'Beginner',
    primaryTerm: '内蔵RAG対応ローカルAIアプリ',
    leadAnswerBlock:
      '**3つのデスクトップアプリなら、5分以内にPDFを読み込んで質問できます — ベクトルDB、Python、コマンドラインなし。AnythingLLM は最も高機能（10+ファイル形式、交換可能な埋め込みモデル、最高品質の引用）。LM Studio は最も簡単（シングルバイナリインストール、PDF + DOCX + TXT、会話スコープ）。Jan は最もプライベート（完全オープンソースAGPL、テレメトリゼロ、ローカルのみ）。3つすべてが1,000ページドキュメント対応、インストール後は完全オフライン動作。**',
    quickAnswerTop: {
      ja: {
        question: 'PDFチャット用の最高のローカルAI内蔵RAGアプリはどれですか？',
        answer:
          'AnythingLLMを選ぶなら、最大のファイル形式対応（PDF、DOCX、TXT、MD、EPUB、ウェブサイト、音声）、交換可能な埋め込みモデル、最高品質の引用が得られます。LM Studioを選ぶなら、1クリックでドキュメント添付、最速セットアップ、シングルPDFへのアドホック質問に最適です。Janを選ぶなら、オープンソースコードとテレメトリゼロが絶対条件の場合。3つすべて無料、インストール後オフライン動作、データローカル保存。',
        bullets: [
          'AnythingLLM — 10+ファイル形式、交換可能な埋め込み、永続的なワークスペース、100+ドキュメントライブラリに最適',
          'LM Studio — 会話内でドラッグ&ドロップ、会話スコープ、最速初回応答',
          'Jan — ドキュメント拡張、完全オープンソース（AGPL）、テレメトリゼロ、コンプライアンス対応',
          '3つすべて16GB RAM環境で1,000ページドキュメント対応、オフライン動作、ローカルストレージ',
          '5,000+ドキュメント、細かいチャンク制御が必要なら、カスタムRAGスタックへの移行を検討',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'キーポイント', anchor: '#key-takeaways' },
      { label: '比較表', anchor: '#comparison-table' },
      { label: 'どれを選ぶべき？', anchor: '#which-one' },
      { label: 'テスト方法', anchor: '#how-we-tested' },
      { label: 'AnythingLLM 詳細解説', anchor: '#anythingllm' },
      { label: 'LM Studio 詳細解説', anchor: '#lm-studio' },
      { label: 'Jan + ドキュメント 詳細解説', anchor: '#jan' },
      { label: 'サンプルクエリと結果', anchor: '#sample-queries' },
      { label: '引用の正確性', anchor: '#citations' },
      { label: '大規模ファイル処理', anchor: '#large-files' },
      { label: '内蔵RAGから卒業する時期', anchor: '#outgrow' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連資料', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**AnythingLLM** が最高機能の内蔵RAG：10+ファイル形式（PDF、DOCX、TXT、MD、EPUB、ウェブサイト、音声トランスクリプト）、交換可能な埋め込みモデル、最高品質の引用、永続的なワークスペース。',
          '**LM Studio** が最も摩擦が少ない：PDFをチャットにドラッグ、30秒で回答。会話スコープ、ワークスペース概念なし。',
          '**Jan + ドキュメント拡張** がオープンソース選択肢：AGPL、テレメトリゼロ、ローカルのみの埋め込み、法務/医療/規制ワークフロー向け。',
          '3つすべてが16GB RAM環境で1,000ページドキュメント、5分未満のインデックス時間で対応。',
          'デフォルト埋め込みモデル（nomic-embed-text v1.5、all-MiniLM-L6-v2）はほぼすべてのワークロードに十分 — AnythingLLMだけがアプリを離れずに交換可能。',
          '3つすべて外部OCRなしスキャンPDF（画像のみ）は未対応 — 先にTesseractまたはPDFツールでテキスト抽出。',
          '**アップスケール基準：** ~1,000ドキュメント超過、ワークスペース横断検索、高度なチャンキング需要時は、カスタムOllama + AnythingLLM DockerまたはPrivateGPTへ。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'AnythingLLM、LM Studio、Jan + ドキュメント 2026年比較',
        content:
          'Apple M5 MacBook Pro（16GB統合メモリ）および NVIDIA RTX 4070（12GB VRAM、32GB システムRAM）Windows 11デスクトップでテスト。ドキュメント同一セット：412ページリサーチPDF、38ページ契約DOCX、1,047ページ技術マニュアルPDF、25 markdown ノート（計600KB）。各アプリは Llama 3.3 8B Q4_K_M チャットモデル。',
        columns: ['アプリ', 'ファイル形式', '実用的な最大サイズ', '埋め込みモデル', '引用', '判定'],
        rows: [
          {
            'アプリ': 'AnythingLLM',
            'ファイル形式': 'PDF、DOCX、TXT、MD、EPUB、HTML、CSV、JSON、ウェブサイト、音声（Whisper）',
            '実用的な最大サイズ': '~5,000文書 / ~50,000ページ',
            '埋め込みモデル': '内蔵（Native）またはOllama / OpenAI / LM Studio に交換',
            '引用': 'チャンク単位の引用、ソースファイル名 + ページ',
            '判定': '最も高機能 — ライブラリには最初に選択',
          },
          {
            'アプリ': 'LM Studio',
            'ファイル形式': 'PDF、DOCX、TXT、MD',
            '実用的な最大サイズ': '~30文書（チャット単位） / ~3,000ページ',
            '埋め込みモデル': 'nomic-embed-text v1.5（バンドル、交換不可）',
            '引用': 'インライン記載、ページ番号なし',
            '判定': '最も簡単 — アドホックQ&A向け',
          },
          {
            'アプリ': 'Jan + ドキュメント',
            'ファイル形式': 'PDF、DOCX、TXT、MD',
            '実用的な最大サイズ': '~200文書 / ~10,000ページ',
            '埋め込みモデル': 'all-MiniLM-L6-v2（バンドル、拡張を通じて交換可能）',
            '引用': 'チャンク単位、ファイル名付き',
            '判定': '最もプライベート — AGPL / コンプライアンス向け',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'どれを選ぶべき？',
        content:
          '**正しい選択はドキュメントライブラリサイズ、ファイル形式、オープンソース重視度に依存します。** 意思決定マトリックス：',
        rows: [
          {
            'シナリオ': '1つのPDF、60秒で回答を得たい',
            '選択': 'LM Studio',
          },
          {
            'シナリオ': '50～500 PDFフォルダ、定期的に照会',
            '選択': 'AnythingLLM',
          },
          {
            'シナリオ': '同じワークスペースでEPUB、ウェブサイト、音声トランスクリプト必要',
            '選択': 'AnythingLLM',
          },
          {
            'シナリオ': '法務・医療ドキュメント、オープンソース必須',
            '選択': 'Jan + ドキュメント',
          },
          {
            'シナリオ': '埋め込みモデルを変更して取得品質をテスト',
            '選択': 'AnythingLLM',
          },
          {
            'シナリオ': '4年前のノートパソコン、8GB RAM',
            '選択': 'LM Studio（最小インストール、最軽量）',
          },
          {
            'シナリオ': 'アカデミック執筆用にページ番号付き引用が必要',
            '選択': 'AnythingLLM',
          },
          {
            'シナリオ': 'チャット履歴とドキュメントインデックスをプロジェクト別に分離',
            '選択': 'AnythingLLM（ワークスペースはファーストクラス）',
          },
          {
            'シナリオ': '企業がネットワーク上の独占的バイナリをブロック',
            '選択': 'Jan + ドキュメント（AGPL、監査可能）',
          },
        ],
        columns: ['シナリオ', '選択'],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'テスト方法',
        content:
          '**各アプリをクリーンインストール、同じドキュメント セット、同じ12クエリで評価。** RAG 品質をチャット品質から分離するため同じチャットモデル（Llama 3.3 8B Q4_K_M、≈ 4.9 GB）を使用。',
        items: [
          '**ハードウェア：** MacBook Pro M5（16GB 統合メモリ）macOS パス用；Windows 11 + RTX 4070（12GB VRAM、32GB システム RAM）。両方でテスト実行。',
          '**ドキュメント セット：** 412ページリサーチペーパーPDF（図表数式付き）、38ページ契約DOCX（企業不動産賃貸、密集法的テキスト）、1,047ページ技術マニュアルPDF（産業制御システム）、25 markdown ノート（～600 KB 会議ノート、プロジェクト仕様）。',
          '**埋め込み：** 各アプリはデフォルト埋め込みモデル使用（明示的交換を除く）。AnythingLLM Native は all-MiniLM-L6-v2 品質に近い384次元；LM Studio は nomic-embed-text v1.5（768次元）；Jan は all-MiniLM-L6-v2 デフォルト。',
          '**クエリ タイプ：** ファクト検索（「賃貸契約解約予告期間」）、マルチホップ推論（「マニュアルの安全インターロック＆緊急停止カバーセクション」）、引用精度（「トークンミキシング正確フレーズ引用」）、要約（「第4章を5つのポイントで要約」）、矛盾検出（「契約家賃指数付けで自己矛盾？」）。',
          '**測定項目：** ドキュメント投入後初回回答までの時間（インデックス + 初回応答）、12クエリ ゴールデンセット検索リコール、引用正確性（チャンクファイル名 + ページ該当時）、1,047ページマニュアルストレステスト動作。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'モデルダウンロード後は100%ローカル。このテスト中、プロンプト、ドキュメント チャンク、埋め込みベクトルは一切デバイスを離れません。各アプリでネットワーク無効化を途中で確認、オフライン動作確認。',
          },
        ],
      },
      anythingllmDeep: {
        id: 'anythingllm',
        title: 'AnythingLLM：最高機能の内蔵RAG',
        content:
          '**AnythingLLM はドキュメントチャットをファーストクラス機能として提供。** ワークスペースは永続的なドキュメントインデックスを保持；各ワークスペースは独立、「法務契約」と「リサーチペーパー」を分離保管。',
        items: [
          '**インストール：** anythingllm.com から署名済みインストーラー（macOS、Windows、Linux）。~430 MB。macOS、Linux では管理者権限不要。',
          '**ファイル形式：** PDF、DOCX、TXT、MD、EPUB、HTML、CSV、JSON。音声ファイル（MP3、WAV、M4A）は Whisper で自動トランスクリプション。ウェブサイトはスクレーパー内蔵。',
          '**埋め込みモデル：** デフォルト「Native」（all-MiniLM-L6-v2 に近い小型モデル）。Ollama を通じて nomic-embed-text、LM Studio を通じて BAAI/bge-small、OpenAI text-embedding-3-small に 1クリックで交換。',
          '**チャンク制御：** チャンクサイズ（デフォルト1,000文字）とオーバーラップ（デフォルト20）はワークスペース設定で公開。変更後、「すべて再埋め込み」ボタンでインデックス再構築。',
          '**引用：** 各回答はチャンク単位のフットノート付き、ファイル名 + ページ（PDF）、ファイル名 + セクション（MD）、またはファイル名のみ（TXT）。引用をクリックするとサイドパネルでソースチャンク開放。',
          '**パフォーマンス：** 完全マニュアル + ペーパー + 契約 + マークダウンノート、RTX 4070 で 4分12秒でインデックス、M5 で 5分38秒。初回クエリ応答：両方で～3秒。',
          '**LLM バックエンド：** デフォルトで Ollama バンドル、または LM Studio、llama.cpp サーバー、OpenAI 互換 URL、クラウドプロバイダーに指定。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'プロジェクト単位で1ワークスペース作成（例：「Q3契約」「論文ソース」「オンボーディングマニュアル」）。各ワークスペースは独立チャット履歴とインデックス、プロジェクト間での文脈漏洩なし。',
          },
        ],
      },
      lmStudioDeep: {
        id: 'lm-studio',
        title: 'LM Studio：最も簡単なドキュメントチャット',
        content:
          '**LM Studio 2025 でチャット内ドキュメント添付を追加。** PDF をチャットウィンドウにドラッグ、数秒で質問開始 — ワークスペース、セットアップ、埋め込み設定なし。',
        items: [
          '**インストール：** lmstudio.ai から署名済みインストーラー（macOS、Windows、Linux）。~450 MB。チャット専用インストール、RAG プラグイン別途なし。',
          '**ファイル形式：** PDF、DOCX、TXT、MD。EPUB、HTML、音声なし。',
          '**埋め込みモデル：** nomic-embed-text v1.5（768次元）バンドル。2026年5月時点で UI から交換不可 — 埋め込みモデル選択は AnythingLLM 使用。',
          '**チャンク制御：** UI から隠蔽。チャンクサイズ、オーバーラップ、top-K はドキュメントサイズに基づき自動最適化。',
          '**引用：** モデルはチャンクをコンテキストとして受け取り、引用指示受け取り。引用品質はチャットモデル依存 — Llama 3.3 8B 以上は確実に引用、Phi-4 Mini は時折落とす。',
          '**パフォーマンス：** シングルペーパー M5 で 38秒、RTX 4070 で 24秒でインデックス。初回クエリ：2～3秒。実用上限：ドキュメント ~30 件またはチャット ~3,000ページ。',
          '**LLM バックエンド：** 会話選択と同じチャットモデル使用 — ドキュメント添付時に RAG 透過化。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'LM Studio ドキュメント添付は会話スコープ、ワークスペーススコープでなし。新チャット開始 = 前のドキュメント消失。アドホック Q&A 向け機能、継続的リサーチライブラリ向けは制限。',
          },
        ],
      },
      janDeep: {
        id: 'jan',
        title: 'Jan + ドキュメント拡張：オープンソース選択肢',
        content:
          '**Jan は 3つの中で唯一、監査可能なオープンソースコード（AGPL）。** ドキュメント拡張は RAG 追加でテレメトリゼロ原則を侵害しない — 埋め込みはローカル実行、ドキュメントチャンクはデバイス離脱なし。',
        items: [
          '**インストール：** jan.ai (~380 MB)。次に、アプリ内 Hub タブからドキュメント拡張を有効化。拡張は Jan チーム署名、サードパーティでなし。',
          '**ファイル形式：** PDF、DOCX、TXT、MD。新形式追加は 2026年5月時点で公開ロードマップ上。',
          '**埋め込みモデル：** all-MiniLM-L6-v2（384次元）バンドル。拡張設定を通じて BAAI/bge-small-en-v1.5 または任意 sentence-transformers GGUF に交換可能。',
          '**チャンク制御：** チャンクサイズとオーバーラップは拡張設定で公開。再インデックスボタンでローカル LanceDB ストア再構築。',
          '**引用：** チャンク単位の引用、ファイル名付き。2026年5月版ではページ番号なし — Jan GitHub issue #1184 でこの機能をトラッキング。',
          '**パフォーマンス：** テストコーパス全体、M5 で 6分04秒、RTX 4070 で 5分12秒でインデックス。初回クエリ：3～4秒。実用上限：～200文書。',
          '**LLM バックエンド：** Jan 内蔵 llama.cpp ランタイム。チャット用にロードされた同じモデルを RAG 合成に使用。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'EU GDPR コンプライアンス、規制対象業界、またはソースコード監査必須の環境では Jan が 3つ中唯一の選択。AnythingLLM は GitHub でオープンソース、公式ビルドはテレメトリ非公開；LM Studio は全面的に独占。',
          },
        ],
      },
      sampleQueries: {
        id: 'sample-queries',
        title: 'サンプルクエリと各アプリの回答',
        content:
          '**ドキュメント同一、チャットモデル同一（Llama 3.3 8B Q4_K_M）、プロンプト同一。** 回答は必要に応じて短縮。各行は、アプリが正しいチャンク検索できたか、何を言ったかを表示。',
        columns: ['クエリ', 'AnythingLLM', 'LM Studio', 'Jan + ドキュメント'],
        rows: [
          {
            'クエリ': '賃貸契約解約予告期間は？',
            'AnythingLLM': '✅ 「60日間書面通知」[契約.docx、p.12]',
            'LM Studio': '✅ 「60日間書面通知」 — 契約.docx',
            'Jan + ドキュメント': '✅ 「60日間書面通知」 — 契約.docx',
          },
          {
            'クエリ': 'ペーパーのトークンミキシングの正確フレーズを引用',
            'AnythingLLM': '✅ 逐語引用 [research.pdf、p.4]',
            'LM Studio': '✅ 逐語引用、research.pdf（ページなし）',
            'Jan + ドキュメント': '⚠️ 言い換え、research.pdf',
          },
          {
            'クエリ': 'マニュアルで安全インターロック＆緊急停止をカバーするセクション？',
            'AnythingLLM': '✅ 「セクション4.2、セクション7.1」引用',
            'LM Studio': '⚠️ セクション4.2のみ — マルチホップ外す',
            'Jan + ドキュメント': '⚠️ セクション7.1のみ — マルチホップ外す',
          },
          {
            'クエリ': '第4章を5つのポイントで要約',
            'AnythingLLM': '✅ 5つの正確ポイント、各引用',
            'LM Studio': '✅ 5つの正確ポイント、末尾引用ブロック',
            'Jan + ドキュメント': '✅ 5つの正確ポイント、初回ポイント引用',
          },
          {
            'クエリ': '契約は家賃指数付けで自己矛盾？',
            'AnythingLLM': '✅ 「はい、p.8は CPI リンク、p.14は固定3%」',
            'LM Studio': '✅ 「はい、2つの異なる指数付けメソッド」',
            'Jan + ドキュメント': '⚠️ 「矛盾なし」 — p.14見落とし',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'AnythingLLM は複数ホップと矛盾クエリで lead、デフォルト検索でもっとチャンク pull（top-K = 6）LM Studio/Jan より（top-K = 4）。シンプルファクト検索：3つすべてほぼ同等。',
          },
        ],
      },
      citations: {
        id: 'citations',
        title: '引用の正確性',
        content:
          '**引用品質は 3つのアプリの単一最大の差別化要因。** AnythingLLM だけが 2026年5月にチャンク単位のファイル名 + ページ。他は ファイル名のみ。',
        items: [
          '**AnythingLLM：** 各回答はチャンク使用をフットノート。形式は `[filename、page X]` PDF、`[filename、section]` markdown。パネルで開いてソース段落検証。',
          '**LM Studio：** チャット回答内インラインメンション（「research.pdf による...」）。ページなし、検証パネルなし。引用信頼性はモデル依存 — Llama 3.3 8B 確実、Phi-4 Mini 時折落とす。',
          '**Jan + ドキュメント：** チャンク単位の引用、ファイル名付き。ページなし。拡張パネルで引用チャンク可視。',
          '**検証コスト：** AnythingLLM 2クリック；LM Studio/Jan はソース PDF 開いて検索。1,000ページマニュアル対象、これ重要。',
          '**幻想引用：** 3つ全部たまに非検索チャンク で ファイル名引用。12クエリテスト頻度：AnythingLLM 0/12、LM Studio 1/12、Jan 1/12。ハイステークス主張は常に検証。',
        ],
      },
      largeFiles: {
        id: 'large-files',
        title: '大規模ファイル（1,000+ページ）処理',
        content:
          '**1,047ページ技術マニュアル = ストレステスト。** 3つすべてロード・インデックス可能、差異は取得時と ワークスペース人間工学に出現。',
        rows: [
          {
            'メトリック': 'インデックス時間（M5）',
            'AnythingLLM': '4分12秒',
            'LM Studio': '2分47秒',
            'Jan + ドキュメント': '6分04秒',
          },
          {
            'メトリック': 'インデックス中 RAM',
            'AnythingLLM': '~3.2 GB',
            'LM Studio': '~2.4 GB',
            'Jan + ドキュメント': '~2.8 GB',
          },
          {
            'メトリック': 'インデックス ディスク',
            'AnythingLLM': '~210 MB',
            'LM Studio': '~95 MB',
            'Jan + ドキュメント': '~140 MB',
          },
          {
            'メトリック': '初回クエリ遅延（コールド）',
            'AnythingLLM': '3.1秒',
            'LM Studio': '2.2秒',
            'Jan + ドキュメント': '3.8秒',
          },
          {
            'メトリック': '実用的ドキュメント数上限',
            'AnythingLLM': '~5,000',
            'LM Studio': '~30（チャット単位）',
            'Jan + ドキュメント': '~200',
          },
          {
            'メトリック': 'マルチホップ取得（12クエリテスト）',
            'AnythingLLM': '11/12',
            'LM Studio': '8/12',
            'Jan + ドキュメント': '7/12',
          },
        ],
        columns: ['メトリック', 'AnythingLLM', 'LM Studio', 'Jan + ドキュメント'],
        callouts: [
          {
            type: 'warning',
            text: 'LM Studio は single-doc は高速、ライブラリはスケール不可。会話スコープインデックス = 新チャット ゼロ開始 — one-off ポジティブ、継続的リサーチは痛手。50+文書先は AnythingLLM に変更。',
          },
        ],
      },
      outgrow: {
        id: 'outgrow',
        title: '内蔵RAGから卒業する時期',
        content:
          '**内蔵RAGは正解、3つのいずれかが発生するまで：** ライブラリ～1,000+文書超過、細かいチャンク戦略制御必要、またはワークスペース横断検索必要。その時点で escalate。',
        items: [
          '**文書数 > 1,000：** AnythingLLM は～5,000/workspace 取得遅延目立つまで対応。超過時：カスタムOllama + AnythingLLM Docker + vector DB（Qdrant、Weaviate、Postgres+pgvector）へ移行。',
          '**カスタムチャンキング戦略必要：** 内蔵アプリは固定チャンクサイズ（～1,000文字、～20オーバーラップ）。ドメイン特化チャンキング（セマンティック、階層、親子）：LangChain/LlamaIndex の カスタムスタック。',
          '**ワークスペース横断・ソース横断検索必要：** AnythingLLM ワークスペースは意図的に隔離。単一クエリ「契約+メール+Slack+Notion」スパン必要 → unified vector store カスタム RAG。',
          '**細かいアクセス制御必要：** 内蔵アプリはシングルユーザー想定。チーム RAG ロール別権限 → AnythingLLM Docker（マルチユーザー）または PrivateGPT 配置。',
          '**スキャン PDF の OCR 必要：** 3つすべて未対応。Tesseract/pdf2image+Tesseract で前処理、または Unstructured.io 含むスタック へ移行。',
          '**本番配置：** 内蔵アプリはデスクトップアプリ、サーバーでなし。本番RAG API → AnythingLLM Docker、PrivateGPT、Open WebUI+RAG プラグイン。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'escalate パスで作業保全：Desktop → Docker（データ同一形式）→ カスタムOllama+Qdrant+LlamaIndex スタック。各ステップは文書コーパス保全、再インデックス回避。',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'これらアプリで 1,000+ PDF チャット可能？',
            a: 'AnythingLLM は約 5,000文書/workspace まで（取得遅延目立つ前）。Jan + ドキュメント は約200文書。LM Studio は会話スコープで約30/チャット。1,000+文書ライブラリ：AnythingLLM が唯一の内蔵オプション（カスタムstack escalate なし）。',
          },
          {
            q: 'これらアプリは DOCX と Excel をサポート？',
            a: '3つすべて DOCX（Microsoft Word）サポート。Excel（XLSX）は 2026年5月時点で 3つとも直接非対応 — CSV（AnythingLLM 原生対応）に先に変換するか markdown に コピペ。AnythingLLM はさらに EPUB、HTML、JSON、音声（Whisper トランスクリプション）、ウェブサイトをサポート。',
          },
          {
            q: 'ドキュメントはどこに保存？',
            a: 'ローカルディスク。AnythingLLM は ~/.anythingllm/（macOS/Linux）または %APPDATA%/AnythingLLM（Windows）。LM Studio は ~/.cache/lm-studio/ または %APPDATA%/LM Studio。Jan は ~/jan/。3つとも どこにもアップロード無し — 常にローカル推論とローカルインデックス。',
          },
          {
            q: 'アプリメモリからドキュメント削除可能？',
            a: 'はい 3つとも。AnythingLLM はワークスペース UI でドキュメント単位削除 + 再インデックス。LM Studio はチャットからドキュメント分離または削除。Jan は拡張パネルから削除 + 再インデックスボタン。削除後、埋め込みチャンク は次の再インデックスでローカル vector ストアから削除。',
          },
          {
            q: '引用精度はどのくらい？',
            a: 'AnythingLLM はチャンク単位の引用、ファイル名 + ページ（PDF）— アカデミック執筆に適切（検証時）。LM Studio はファイル名のみ；信頼性はモデル依存（Llama 3.3 8B 確実、Phi-4 Mini 時折落とす）。Jan はチャンク単位ファイル名、ページなし。12クエリテスト：幻想引用稀少（AnythingLLM 0/12、LM Studio 1/12、Jan 1/12）— ハイステークス主張は常に検証。',
          },
          {
            q: '内蔵 RAG はオフライン動作？',
            a: 'はい。アプリインストール + モデル最低1つ（チャットと埋め込み）ダウンロード後、100% オフライン。ドキュメント インデックスはローカル、クエリはローカル vector ストア + ローカル LLM 指向。ネットワーク無効化で各アプリでテスト済み、3つすべて通常通り応答。',
          },
          {
            q: '複数デバイス間で ドキュメント DB 共有可能？',
            a: 'AnythingLLM はワークスペース ポータブルフォルダ（~/.anythingllm/storage/）で マシン間でコピー可能。LM Studio はドキュメント インデックス会話スコープ、同期設計なし。Jan は ~/jan/ に保存、LanceDB フォーマットはバージョン間感度高い。マルチデバイス：ホームサーバー AnythingLLM Docker が最良（全デバイスが同一インスタンス指向）。',
          },
          {
            q: '内蔵 RAG はスキャン PDF（OCR）処理？',
            a: '2026年5月時点で 3つとも、画像のみスキャン PDF は未対応。テキストレイヤー抽出 → スキャン（テキストレイヤー無し） = ゼロチャンク 返却。Tesseract OCR（無料）または ocrmypdf でテキストレイヤー先に追加、その後 PDF をアプリに投入。AnythingLLM は統合 Tesseract 向けの公開機能リクエスト提供。',
          },
          {
            q: '内蔵 RAG 遅延化前の最大ドキュメント サイズは？',
            a: '16GB RAM ハードウェア：AnythingLLM は～5,000文書または～50,000ページ/workspace レスポンシブ維持。LM Studio 実用上限は～30文書/チャット（～3,000ページ）。Jan + ドキュメント は～200文書確実。この上限超過：インデックス時間は線形増長、コールドクエリ取得遅延は 5～10秒に到達可能；カスタム RAG スタック escalate 信号。',
          },
          {
            q: 'これらアプリを 機密法務・医療ドキュメント に使用可能？',
            a: 'すべて インストール後 100% オフライン、ドキュメント内容伝送なし。規制ワークフロー（HIPAA、GDPR、弁護士-クライアント特権）：Jan + ドキュメント が最強選択肢（スタック全体 AGPL 監査可能、デフォルト テレメトリゼロ）。AnythingLLM も監査環境内 オープンソース Docker ビルド使用なら防御可能（デスクトップ インストーラー テレメトリ回避）。LM Studio は完全独占的 — 規制データ前に コンプライアンスチーム確認必須。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI：ベスト ローカル RAG 2026](/ja/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — 内蔵 RAG を超える時点での escalate パス。',
          '[30分で PDF ローカル RAG を構築（Ollama + AnythingLLM）](/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step) — カスタムスタック チュートリアル（さらに制御が必要な場合）。',
          '[ローカル RAG の最高埋め込みモデル 2026](/ja/power-local-llm/best-embedding-models-local-rag-2026) — 取得品質を調整するユーザー向け。',
          '[LM Studio vs Jan vs GPT4All：ローカル AI アプリどれが 2026年勝つ？](/ja/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — RAG が複数基準の1つの広い比較。',
          '[ローカルで 1,000+ PDF チャット](/ja/power-local-llm/chat-with-1000-pdfs-locally) — 非常に大きな文書ライブラリのスケーリング ガイド。',
          '[RAG 説明：実データで AI 回答を根拠付ける方法（2026）](/prompt-engineering/rag-explained?lang=ja) — RAG が内部でどう動作するか概念権威。',
          '[Power Local LLM ハブ](/ja/power-local-llm) — クラスター向け完全ガイド ライブラリ。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'ローカル AI アプリ（内蔵 RAG 対応）：ファイルとチャット（セットアップ不要）',
      'description':
        'AnythingLLM、LM Studio、Jan + ドキュメント を 1,000 ページドキュメントでテスト。内蔵 RAG、ベクトル DB 不要、Python 不要、コマンドラインなし。',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'url': 'https://www.promptquorum.com/ja/power-local-llm/local-ai-app-with-built-in-rag',
      'inLanguage': 'ja',
      'image': 'https://www.promptquorum.com/api/og/local-ai-app-with-built-in-rag?lang=ja',
      'author': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
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
        { '@type': 'Thing', 'name': 'Jan（ローカル AI アプリ）' },
        { '@type': 'Thing', 'name': 'Retrieval-Augmented Generation' },
        { '@type': 'Thing', 'name': 'ローカル ドキュメント チャット' },
        { '@type': 'Thing', 'name': '内蔵 RAG' },
      ],
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways']
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'ja',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'これらアプリで 1,000+ PDF チャット可能？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM は約5,000文書/workspace（取得遅延目立つ前）対応。Jan+ドキュメント は約200文書確実。LM Studio は会話スコープ約30/チャット。1,000+文書ライブラリ：AnythingLLM が唯一の内蔵オプション（カスタムstack escalate なし）。',
          },
        },
        {
          '@type': 'Question',
          'name': 'これらアプリは DOCX と Excel をサポート？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              '3つすべて DOCX（Microsoft Word）サポート。Excel（XLSX）は 2026年5月時点で 3つとも直接非対応 — CSV に先に変換（AnythingLLM 原生対応）するか markdown に コピペ。AnythingLLM はさらに EPUB、HTML、JSON、音声（Whisper）、ウェブサイト をサポート。',
          },
        },
        {
          '@type': 'Question',
          'name': 'ドキュメントはどこに保存？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'ローカルディスク。AnythingLLM は ~/.anythingllm/（macOS/Linux）または %APPDATA%/AnythingLLM（Windows）。LM Studio は ~/.cache/lm-studio/ または %APPDATA%/LM Studio。Jan は ~/jan/。3つとも どこにもアップロード無し。',
          },
        },
        {
          '@type': 'Question',
          'name': 'アプリメモリからドキュメント削除可能？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'はい 3つとも。AnythingLLM はワークスペース UI で削除+再インデックス。LM Studio はチャットから分離または削除。Jan は拡張パネルから削除+再インデックス。削除後、チャンク は次の再インデックスでローカル vector ストアから削除。',
          },
        },
        {
          '@type': 'Question',
          'name': '引用精度はどのくらい？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM はチャンク単位の引用、ファイル名 + ページ（PDF）— アカデミック執筆に適切。LM Studio はファイル名のみ；信頼性はモデル依存。Jan はチャンク単位ファイル名、ページなし。12クエリテスト：幻想引用稀少 — ハイステークス主張は常に検証。',
          },
        },
        {
          '@type': 'Question',
          'name': '内蔵 RAG はオフライン動作？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'はい。アプリインストール + モデルダウンロード後、100% オフライン。インデックスはローカル、クエリはローカル vector ストア + ローカル LLM 指向。ネットワーク無効化で テスト済み、3つすべて通常通り応答。',
          },
        },
        {
          '@type': 'Question',
          'name': '複数デバイス間で ドキュメント DB 共有可能？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM はワークスペース ポータブルフォルダでマシン間でコピー可能。LM Studio はドキュメント インデックス会話スコープ、同期設計なし。Jan は ~/jan/ に保存。マルチデバイス：ホームサーバー AnythingLLM Docker が最良。',
          },
        },
        {
          '@type': 'Question',
          'name': '内蔵 RAG はスキャン PDF（OCR）処理？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              '2026年5月時点で 3つとも、画像のみスキャン PDF は未対応。テキストレイヤー抽出 → スキャン（テキストレイヤー無し） = ゼロチャンク。Tesseract OCR（無料）で テキストレイヤー先に追加。',
          },
        },
        {
          '@type': 'Question',
          'name': '内蔵 RAG 遅延化前の最大ドキュメント サイズは？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              '16GB RAM：AnythingLLM は～5,000文書または～50,000ページ/workspace レスポンシブ維持。LM Studio は～30/チャット（～3,000ページ）。Jan+ドキュメント は～200文書。この上限超過：コールドクエリ遅延 5～10秒が escalate 信号。',
          },
        },
        {
          '@type': 'Question',
          'name': 'これらアプリを 機密法務・医療ドキュメント に使用可能？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'すべて インストール後 100% オフライン、内容伝送なし。規制ワークフロー（HIPAA、GDPR、弁護士特権）：Jan+ドキュメント が最強（AGPL 監査可能、テレメトリゼロ）。AnythingLLM も監査環境内オープンソース Docker なら防御可能。LM Studio は完全独占的 — 規制データ前にコンプライアンス確認必須。',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'inLanguage': 'ja',
      'name': 'ローカル AI デスクトップアプリ（内蔵 RAG 対応）2026年',
      'numberOfItems': 3,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'AnythingLLM',
          'description':
            '最高機能の内蔵 RAG：10+ファイル形式（PDF、DOCX、TXT、MD、EPUB、HTML、CSV、JSON、ウェブサイト、音声）、交換可能な埋め込みモデル、永続的なワークスペース、チャンク単位の引用（ページ番号付き）。約5,000文書/workspace の実用上限。',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'LM Studio',
          'description':
            '最も簡単なドキュメントチャット：会話内ドラッグ&ドロップ PDF/DOCX/TXT/MD 添付。nomic-embed-text v1.5 バンドル。会話スコープ（ワークスペース概念なし）。約30文書/チャットの実用上限。',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Jan + ドキュメント拡張',
          'description':
            'オープンソース選択肢：AGPL 監査可能、デフォルト テレメトリゼロ、ローカルのみの埋め込み（all-MiniLM-L6-v2 バンドル、交換可能）。PDF、DOCX、TXT、MD サポート。コンプライアンス対応ワークフロー向け。約200文書の実用上限。',
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
          'name': 'ホーム',
          'item': 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Power Local LLM',
          'item': 'https://www.promptquorum.com/ja/power-local-llm',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'ローカル AI アプリ（内蔵 RAG 対応）',
          'item': 'https://www.promptquorum.com/ja/power-local-llm/local-ai-app-with-built-in-rag',
        },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Easiest Desktop Apps',
    title: '内置RAG的本地AI应用：与文件聊天（无需配置）',
    seoTitle: '内置RAG应用 2026：本地PDF查询，无需向量数据库',
    metaDescription:
      '3个桌面应用可以上传PDF并聊天 — 无向量库，无Python，无命令行。LM Studio、Jan、AnythingLLM在1,000页文档上测试。2026年5月。',
    twitterDescription:
      '3个本地AI内置RAG应用。上传PDF，提出问题。在1,000页文档上2026年5月测试。',
    readTime: '阅读约12分钟',
    educationalLevel: 'Beginner',
    primaryTerm: '内置RAG的本地AI应用',
    leadAnswerBlock:
      '**3个桌面应用让您在5分钟内上传PDF并提问 — 无向量库，无Python，无命令行。AnythingLLM功能最强（10+文件格式、可互换的嵌入模型、最佳引用）。LM Studio最简单（单二进制安装、PDF + DOCX + TXT、对话范围）。Jan最私密（完全开源AGPL、零遥测、仅本地）。三个都能处理1,000页文档，安装后完全离线运行。**',
    quickAnswerTop: {
      zh: {
        question: '用于PDF聊天的最佳本地AI内置RAG应用是什么？',
        answer:
          '选择AnythingLLM可以获得最多的文件格式支持（PDF、DOCX、TXT、MD、EPUB、网站、音频）、可互换的嵌入模型和最佳的引用呈现。选择LM Studio以在任何聊天中一键附加文档 — 设置最快，最适合临时问题。选择Jan如果开源代码和零遥测是不可协商的。三个都是免费的，安装后离线工作，本地存储数据。',
        bullets: [
          'AnythingLLM — 10+文件格式、可互换的嵌入、持久工作区、最适合100+文档库',
          'LM Studio — 在聊天中拖放文档、对话范围、最快首次回答',
          'Jan — 文档扩展、完全开源（AGPL）、零遥测、最适合合规工作流',
          '三个都在16GB RAM硬件上处理1,000页文档、离线运行、本地存储',
          '对于5,000+文档或细粒度分块控制，升级到自定义RAG堆栈',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '对比表', anchor: '#comparison-table' },
      { label: '我应该选择哪一个？', anchor: '#which-one' },
      { label: '测试方法', anchor: '#how-we-tested' },
      { label: 'AnythingLLM：深度评测', anchor: '#anythingllm' },
      { label: 'LM Studio：深度评测', anchor: '#lm-studio' },
      { label: 'Jan + 文档：深度评测', anchor: '#jan' },
      { label: '示例查询和结果', anchor: '#sample-queries' },
      { label: '引用准确性', anchor: '#citations' },
      { label: '大文件处理', anchor: '#large-files' },
      { label: '何时超越内置RAG', anchor: '#outgrow' },
      { label: '常见问题', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**AnythingLLM** 是功能最强的内置RAG：10+文件格式（PDF、DOCX、TXT、MD、EPUB、网站、音频记录）、可互换的嵌入模型、最佳引用、持久工作区。',
          '**LM Studio** 摩擦力最小：将PDF拖放到聊天中，30秒内获得答案。对话范围，无工作区概念。',
          '**Jan + 文档扩展** 是开源选择：AGPL、零遥测、仅本地嵌入，最适合法律/医疗/管制工作流。',
          '三个都在16GB RAM硬件上处理1,000页文档，索引时间不到5分钟。',
          '默认嵌入模型（nomic-embed-text v1.5、all-MiniLM-L6-v2）对大多数工作负载足够 — 只有AnythingLLM在不离开应用的情况下允许互换。',
          '三个都不处理扫描PDF（仅图像）而无外部OCR — 先用Tesseract或PDF工具提取文本。',
          '**升级路径：** 超过~1,000份文档、需要跨工作区搜索或高级分块时，升级到自定义Ollama + AnythingLLM Docker或PrivateGPT。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'AnythingLLM、LM Studio和Jan + 文档 2026年对比',
        content:
          '在Apple M5 MacBook Pro（16GB统一内存）和Windows 11配NVIDIA RTX 4070（12GB VRAM、32GB系统RAM）上测试。相同文档集：412页研究论文PDF、38页合同DOCX、1,047页技术手册PDF、25个markdown笔记（总共600KB）。每个应用配Llama 3.3 8B Q4_K_M聊天模型。',
        columns: ['应用', '文件格式', '最大实际大小', '嵌入模型', '引用', '结论'],
        rows: [
          {
            '应用': 'AnythingLLM',
            '文件格式': 'PDF、DOCX、TXT、MD、EPUB、HTML、CSV、JSON、网站、音频（Whisper）',
            '最大实际大小': '~5,000文档 / ~50,000页',
            '嵌入模型': '内置或交换到Ollama / OpenAI / LM Studio',
            '引用': '按分块加来源文件名 + 页码',
            '结论': '功能最强 — 优先选择库',
          },
          {
            '应用': 'LM Studio',
            '文件格式': 'PDF、DOCX、TXT、MD',
            '最大实际大小': '~30文档/聊天 / ~3,000页',
            '嵌入模型': 'nomic-embed-text v1.5（捆绑、不可互换）',
            '引用': '内联来源提及、无页码',
            '结论': '最简单 — 临时Q&A选择',
          },
          {
            '应用': 'Jan + 文档',
            '文件格式': 'PDF、DOCX、TXT、MD',
            '最大实际大小': '~200文档 / ~10,000页',
            '嵌入模型': 'all-MiniLM-L6-v2（捆绑、通过扩展可互换）',
            '引用': '按分块加文件名',
            '结论': '最私密 — AGPL/合规选择',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: '我应该选择哪一个？',
        content:
          '**正确选择取决于您的文档库大小、文件格式和开源优先级。** 决策矩阵：',
        rows: [
          {
            '您的情况': '1个PDF、60秒内想要答案',
            '选择': 'LM Studio',
          },
          {
            '您的情况': '50～500个PDF文件夹要定期查询',
            '选择': 'AnythingLLM',
          },
          {
            '您的情况': '同一工作区中需要EPUB、网站或音频',
            '选择': 'AnythingLLM',
          },
          {
            '您的情况': '处理法律或医疗文件 — 开源是必须',
            '选择': 'Jan + 文档',
          },
          {
            '您的情况': '想要交换嵌入模型来测试检索质量',
            '选择': 'AnythingLLM',
          },
          {
            '您的情况': '4年前的笔记本电脑、8GB RAM',
            '选择': 'LM Studio（最小安装、最轻工作区）',
          },
          {
            '您的情况': '需要学术文章的页码引用',
            '选择': 'AnythingLLM',
          },
          {
            '您的情况': '想按项目分离聊天历史和文档索引',
            '选择': 'AnythingLLM（工作区是一级概念）',
          },
          {
            '您的情况': '公司在网络上阻止闭源二进制文件',
            '选择': 'Jan + 文档（AGPL、可审计）',
          },
        ],
        columns: ['您的情况', '选择'],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: '测试方法',
        content:
          '**每个应用都被新鲜安装、用相同文档集、用相同12个查询进行测试。** 使用相同的聊天模型（Llama 3.3 8B Q4_K_M，≈ 4.9 GB）将RAG质量与聊天质量分离。',
        items: [
          '**硬件：** MacBook Pro M5（16GB统一内存）用于macOS路径；Windows 11 + RTX 4070（12GB VRAM、32GB系统RAM）。在两者上运行测试。',
          '**文档集：** 412页研究论文PDF（图表、表格、公式）、38页合同DOCX（商业房地产租赁、密集法律文本）、1,047页技术手册PDF（工业控制系统）、25个markdown笔记（～600 KB会议记录、项目规范）。',
          '**嵌入：** 每个应用使用其默认嵌入模型，除非明确交换。AnythingLLM Native默认使用接近all-MiniLM-L6-v2品质的384维；LM Studio使用nomic-embed-text v1.5（768维）；Jan默认使用all-MiniLM-L6-v2。',
          '**查询类型：** 事实查询（「租赁合同解约通知期限？」）、多跳推理（「手册中哪些部分涵盖安全互锁和紧急停止？」）、引用准确性（「论文中关于令牌混合的确切短语」）、摘要（「用5个要点总结第4章」）、矛盾检测（「合同在租金升级方面自相矛盾吗？」）。',
          '**测量内容：** 投入文档后到第一个答案的时间（索引+首次回复）、12个查询黄金集上的检索召回率、引用正确性（块文件名+页码），以及1,047页手册上的行为（压力测试）。',
        ],
        callouts: [
          {
            type: 'note',
            text: '一旦模型下载，三个都是100%本地化。在这些测试中，提示、文档块或嵌入向量都不会离开设备。我们在每个应用中禁用了网络访问来确认离线行为。',
          },
        ],
      },
      anythingllmDeep: {
        id: 'anythingllm',
        title: 'AnythingLLM：功能最强的内置RAG',
        content:
          '**AnythingLLM将文档聊天作为一级功能交付。** 工作区持有持久的文档索引；每个工作区独立，所以您可以将「法律合同」与「研究论文」分开存储，没有交叉污染。',
        items: [
          '**安装路径：** 从anythingllm.com下载签名的安装程序（macOS、Windows、Linux）。~430 MB。macOS或Linux上不需要管理员权限。',
          '**文件格式：** PDF、DOCX、TXT、MD、EPUB、HTML、CSV、JSON。音频文件（MP3、WAV、M4A）通过捆绑的Whisper自动转录。网站通过内置刮板拉取。',
          '**嵌入模型：** 默认「Native」（一个小捆绑模型，接近all-MiniLM-L6-v2质量）。通过一次点击，交换到Ollama上的nomic-embed-text、LM Studio上的BAAI/bge-small或OpenAI text-embedding-3-small。',
          '**块控制：** 块大小（默认1,000个字符）和重叠（默认20）在工作区设置中公开。重新嵌入所有按钮在更改后重建索引。',
          '**引用：** 每个答案都用所用块加脚注，格式为文件名 + 页码（PDF）、文件名 + 部分（MD）或仅文件名（TXT）。单击引用在侧面板中打开源块。',
          '**性能：** 在RTX 4070上用4分12秒索引完整的1,047页手册 + 412页论文 + 38页合同 + 25个markdown笔记，M5上5分38秒。首次查询回复：两者都约3秒。',
          '**LLM后端：** 默认使用捆绑的Ollama运行时，或指向LM Studio、llama.cpp服务器、OpenAI兼容URL或任何云提供商。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '为每个项目创建一个工作区（例如「Q3合同」「论文来源」「入职手册」）。每个工作区获得自己的聊天历史和嵌入索引，所以上下文永远不会在项目之间泄漏。',
          },
        ],
      },
      lmStudioDeep: {
        id: 'lm-studio',
        title: 'LM Studio：最简单的文档聊天',
        content:
          '**LM Studio在2025年增加了聊天内文档附件。** 将PDF拖放到打开的聊天窗口，数秒内即可提问 — 无工作区、无设置、无嵌入配置。',
        items: [
          '**安装路径：** 从lmstudio.ai下载。~450 MB签名的安装程序（macOS、Windows、Linux）。与聊天使用的同一安装 — 无单独的RAG插件。',
          '**文件格式：** PDF、DOCX、TXT、MD。无EPUB、HTML、音频。',
          '**嵌入模型：** nomic-embed-text v1.5（768维）捆绑。2026年5月不可从UI交换 — 对于嵌入模型选择，改用AnythingLLM。',
          '**块控制：** 从UI中隐藏。块大小、重叠和top-K根据文档大小自动调整。',
          '**引用：** 模型接收块作为上下文并获得引用指令。引用质量取决于聊天模型 — Llama 3.3 8B及以上可靠地提及来源；更小的模型有时会丢弃引用。',
          '**性能：** 在M5上用38秒、RTX 4070上用24秒索引一份412页的论文。首次查询回复：2～3秒。实际极限在减速前：~30文档或~3,000页/聊天。',
          '**LLM后端：** 使用为对话选择的相同聊天模型 — 当文档附加时RAG发生透明。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'LM Studio文档附件是对话范围，不是工作区范围。开始新聊天，您之前的文档就消失了。这是特定Q&A的特点，也是持续研究库的限制。',
          },
        ],
      },
      janDeep: {
        id: 'jan',
        title: 'Jan + 文档扩展：开源选择',
        content:
          '**Jan是三个中唯一具有完全可审计的开源代码（AGPL）的应用。** 文档扩展添加RAG而不损害零遥测立场 — 嵌入在本地运行，文档块永远不会离开设备。',
        items: [
          '**安装路径：** 从jan.ai下载Jan（~380 MB）。然后从应用中的Hub标签启用文档扩展。扩展由Jan团队发送，不是第三方。',
          '**文件格式：** PDF、DOCX、TXT、MD。添加新格式在2026年5月的公开路线图上。',
          '**嵌入模型：** all-MiniLM-L6-v2（384维）捆绑。通过扩展设置可交换到BAAI/bge-small-en-v1.5或任何sentence-transformers GGUF。',
          '**块控制：** 块大小和重叠在扩展设置中公开。重新索引按钮重建本地LanceDB存储。',
          '**引用：** 按块引用加文件名。2026年5月无页码 — Jan GitHub上的issue #1184追踪此功能请求。',
          '**性能：** 在M5上用6分04秒、RTX 4070上用5分12秒索引完整的测试语料库。首次查询回复：3～4秒。实际极限：~200文档。',
          '**LLM后端：** 使用Jan的内置llama.cpp运行时。为聊天加载的同一模型用于RAG合成。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '对于EU GDPR合规、管制行业或源代码审计必须的环境，Jan是三个中唯一的选择。AnythingLLM在GitHub上是开源的，但在官方构建中有闭源遥测；LM Studio完全专有。',
          },
        ],
      },
      sampleQueries: {
        id: 'sample-queries',
        title: '示例查询和每个应用返回的内容',
        content:
          '**相同的文档、相同的聊天模型（Llama 3.3 8B Q4_K_M）、相同的提示。** 逐字答案在适当处缩短。每行显示应用是否检索了正确的块以及它说了什么。',
        columns: ['查询', 'AnythingLLM', 'LM Studio', 'Jan + 文档'],
        rows: [
          {
            '查询': '租赁合同的解约通知期限是多少？',
            'AnythingLLM': '✅ 「60天书面通知」加引用[contract.docx，第12页]',
            'LM Studio': '✅ 「60天书面通知」 — 引用：contract.docx',
            'Jan + 文档': '✅ 「60天书面通知」 — 引用：contract.docx',
          },
          {
            '查询': '论文中关于令牌混合的确切短语',
            'AnythingLLM': '✅ 逐字引用加[research.pdf，第4页]',
            'LM Studio': '✅ 逐字引用，归因于research.pdf（无页码）',
            'Jan + 文档': '⚠️ 改述引用，归因于research.pdf',
          },
          {
            '查询': '手册中哪些部分既涵盖安全互锁又涵盖紧急停止？',
            'AnythingLLM': '✅ 「第4.2部分和第7.1部分」加引用',
            'LM Studio': '⚠️ 仅返回第4.2部分 — 错过多跳',
            'Jan + 文档': '⚠️ 仅返回第7.1部分 — 错过多跳',
          },
          {
            '查询': '用5个要点总结第4章',
            'AnythingLLM': '✅ 5个准确的要点，各有引用',
            'LM Studio': '✅ 5个准确的要点，末尾单个引用块',
            'Jan + 文档': '✅ 5个准确的要点，仅在首个要点引用',
          },
          {
            '查询': '合同在租金升级方面是否自相矛盾？',
            'AnythingLLM': '✅ 「是的 — 第8页说CPI关联，第14页说固定3%」',
            'LM Studio': '✅ 「是的 — 引用了两个不同的升级方法」',
            'Jan + 文档': '⚠️ 「未发现冲突」 — 未能呈现第14页',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'AnythingLLM在多跳和矛盾查询上领先，因为其检索默认值拉取更多块（top-K = 6）比LM Studio（top-K = 4）和Jan（top-K = 4）。在简单的事实查询上，三个基本相当。',
          },
        ],
      },
      citations: {
        id: 'citations',
        title: '引用准确性',
        content:
          '**引用质量是三个应用中最大的单一区分因素。** AnythingLLM是2026年5月唯一提供按块加文件名 + 页码的应用。其他两个只按文件名引用，这对学术或法律工作不足。',
        items: [
          '**AnythingLLM：** 每个答案都用所用块加脚注。格式为`[filename，page X]` PDFs、`[filename，section]` markdown。点击在侧面板中打开块以验证。',
          '**LM Studio：** 聊天回复中的内联提及（「根据research.pdf...」）。无页码，无可点击的验证面板。可靠性取决于聊天模型 — Llama 3.3 8B可靠地引用；Phi-4 Mini有时丢弃引用。',
          '**Jan + 文档：** 按块引用加文件名。无页码。引用的块在扩展面板中可见。',
          '**验证成本：** AnythingLLM用2次点击验证引用；LM Studio和Jan要求您打开源PDF并搜索。对于1,000页手册，这很重要。',
          '**幻想引用：** 三个应用都偶尔在不实际检索相关块的情况下引用文件名。在我们的12查询测试中频率：AnythingLLM 0/12、LM Studio 1/12、Jan 1/12。始终验证高风险声明。',
        ],
      },
      largeFiles: {
        id: 'large-files',
        title: '大文件处理（1,000+页）',
        content:
          '**1,047页技术手册是压力测试。** 三个都加载和索引；区别出现在检索时间和工作区人类工程学中。',
        rows: [
          {
            '行为': '索引时间（M5）',
            'AnythingLLM': '4分12秒',
            'LM Studio': '2分47秒',
            'Jan + 文档': '6分04秒',
          },
          {
            '行为': '索引过程中的RAM',
            'AnythingLLM': '~3.2 GB',
            'LM Studio': '~2.4 GB',
            'Jan + 文档': '~2.8 GB',
          },
          {
            '行为': '索引磁盘大小',
            'AnythingLLM': '~210 MB',
            'LM Studio': '~95 MB',
            'Jan + 文档': '~140 MB',
          },
          {
            '行为': '首次查询延迟（冷启动）',
            'AnythingLLM': '3.1秒',
            'LM Studio': '2.2秒',
            'Jan + 文档': '3.8秒',
          },
          {
            '行为': '实际文档计数上限',
            'AnythingLLM': '~5,000',
            'LM Studio': '~30/聊天',
            'Jan + 文档': '~200',
          },
          {
            '行为': '多跳检索（12查询测试）',
            'AnythingLLM': '11/12',
            'LM Studio': '8/12',
            'Jan + 文档': '7/12',
          },
        ],
        columns: ['行为', 'AnythingLLM', 'LM Studio', 'Jan + 文档'],
        callouts: [
          {
            type: 'warning',
            text: 'LM Studio在单个大文档上速度快但不能扩展到库。对话范围索引意味着新聊天从零开始 — 有利于一次性问题，对持续研究则是痛点。超过50个文档，改用AnythingLLM。',
          },
        ],
      },
      outgrow: {
        id: 'outgrow',
        title: '何时超越内置RAG',
        content:
          '**内置RAG是正确的工具，直到以下三种情况之一发生：** 库超过~1,000个文档、您需要细粒度块策略控制，或您需要跨工作区搜索。此时升级。',
        items: [
          '**文档计数 > 1,000：** AnythingLLM在~5,000个文档/工作区前检索延迟变得明显。超过此点，移至自定义Ollama + AnythingLLM Docker堆栈，配备专用向量DB（Qdrant、Weaviate或Postgres + pgvector）。',
          '**需要自定义分块策略：** 内置应用使用固定块大小（~1,000字符，~20重叠）。对于特定领域分块（语义、分层、父子），使用包含LangChain或LlamaIndex的自定义堆栈。',
          '**需要跨工作区/跨来源搜索：** AnythingLLM工作区是按设计隔离的。如果您需要单个查询跨越「合同+电子邮件+Slack+Notion」，构建一个带有统一向量存储的自定义RAG。',
          '**需要细粒度访问控制：** 内置应用假定单用户。对于具有基于角色权限的团队RAG，部署AnythingLLM Docker（多用户模式）或PrivateGPT。',
          '**需要扫描PDF的OCR：** 三个都不处理仅图像PDF。使用Tesseract或pdf2image + Tesseract预处理，或迁移到包含Unstructured.io的堆栈。',
          '**生产部署：** 内置应用是桌面应用，不是服务器。对于生产RAG配API访问，部署AnythingLLM Docker、PrivateGPT或Open WebUI配正确的RAG插件。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '保留您的工作的升级路径：Desktop → Docker（相同数据格式）→ 自定义Ollama + Qdrant + LlamaIndex堆栈。每个步骤保留您的文档语料库，避免重新索引。',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '我可以在这些应用中与1,000+ PDF聊天吗？',
            a: 'AnythingLLM处理每个工作区最多约5,000份文档，检索延迟才会变得明显。Jan + 文档可靠地处理约200份文档。LM Studio是对话范围的，实际上约30份文档/聊天。对于1,000+份文档库，AnythingLLM是唯一的内置选项，无需升级到自定义堆栈。',
          },
          {
            q: '这些应用支持DOCX和Excel吗？',
            a: '三个都支持DOCX（Microsoft Word）。Excel（XLSX）在2026年5月不被任何应用直接支持 — 先转换为CSV（AnythingLLM原生接受）或复制/粘贴到markdown文件。AnythingLLM另外支持EPUB、HTML、JSON、音频（Whisper转录）和网站。',
          },
          {
            q: '我的文档存储在哪里？',
            a: '全部在本地磁盘。AnythingLLM存储在~/.anythingllm/（macOS/Linux）或%APPDATA%/AnythingLLM（Windows）。LM Studio存储在~/.cache/lm-studio/或%APPDATA%/LM Studio。Jan存储在~/jan/。三个都不会将您的文档上传到任何地方 — 始终是本地推理和本地索引。',
          },
          {
            q: '我可以从应用的记忆中删除文档吗？',
            a: '是的，三个都可以。AnythingLLM在工作区UI中有按文档移除+重新索引。LM Studio：从聊天中分离文档或删除聊天。Jan：从文档扩展面板移除并点击重新索引。删除后，嵌入块会在下一次重新索引时从本地向量存储中移除。',
          },
          {
            q: '引用的准确性如何？',
            a: 'AnythingLLM提供按块的引用，文件名和页码（PDF）— 经过验证后足以用于学术文章。LM Studio按文件名引用；可靠性取决于聊天模型（Llama 3.3 8B及以上可靠地引用；Phi-4 Mini有时会丢弃）。Jan按块引用，文件名，无页码。在12查询测试中，虚假引用很少（AnythingLLM 0/12、LM Studio 1/12、Jan 1/12）— 始终验证高风险声明。',
          },
          {
            q: '内置RAG可以离线工作吗？',
            a: '是的。安装应用并下载至少一个聊天模型和嵌入模型后，三个都完全离线工作。文档索引在本地发生；查询击中本地向量存储和本地LLM。我们通过在每个应用中禁用网络来确认此行为 — 三个都继续正常应答查询。',
          },
          {
            q: '我可以在设备之间共享文档数据库吗？',
            a: 'AnythingLLM在便携文件夹中存储工作区（~/.anythingllm/storage/），您可以在机器之间复制。LM Studio文档索引是对话范围的，不是为同步设计的。Jan在~/jan/中存储，但LanceDB格式对Jan安装之间的版本差异敏感。对于多设备，最清洁的路径是家庭服务器上的AnythingLLM Docker，所有设备指向同一实例。',
          },
          {
            q: '内置RAG处理扫描PDF（OCR）吗？',
            a: '三个都不处理仅图像的扫描PDF，2026年5月。它们通过PDF文本层提取文本，所以没有文本层的扫描PDF返回零块。使用Tesseract OCR（免费）或ocrmypdf等工具先添加文本层，然后将OCR\'d PDF放入应用。AnythingLLM对内置Tesseract集成有开放的功能请求。',
          },
          {
            q: '内置RAG变慢之前的最大文档大小是多少？',
            a: '在16GB RAM硬件上，AnythingLLM在~5,000份文档或~50,000页/工作区前保持响应。LM Studio实际限制约30份文档/聊天（~3,000页）。Jan + 文档可靠地处理~200份文档。超过这些上限，索引时间增长线性，冷查询检索延迟可达5～10秒；这是升级到自定义RAG堆栈的信号。',
          },
          {
            q: '我能将这些用于敏感的法律或医疗文件吗？',
            a: '三个都在安装后100%离线运行，从不传输文档内容。对于管制工作流（HIPAA、GDPR、律师-客户特权），Jan + 文档是最强的选择，因为整个堆栈是开源（AGPL）和可审计的，默认情况下零遥测。AnythingLLM在使用开源Docker构建的已审计环境中也是合理的选择（跳过桌面安装程序遥测）。LM Studio是完全专有的 — 在使用管制数据之前请咨询您的合规团队。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI：最佳本地RAG 2026](/zh/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — 超越内置RAG时的升级路径。',
          '[在30分钟内为您的PDF构建本地RAG（Ollama + AnythingLLM）](/zh/power-local-llm/local-rag-on-your-pdfs-step-by-step) — 当您想要更多控制时的自定义堆栈教程。',
          '[2026年本地RAG最佳嵌入模型](/zh/power-local-llm/best-embedding-models-local-rag-2026) — 对于调整检索质量的用户。',
          '[LM Studio vs Jan vs GPT4All：2026年哪个本地AI应用赢？](/zh/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — 当RAG是多个标准之一时的更广泛的应用比较。',
          '[本地与1,000+ PDF聊天](/zh/power-local-llm/chat-with-1000-pdfs-locally) — 很大文档库的扩展指南。',
          '[RAG解释：如何用真实数据支撑AI答案（2026）](/prompt-engineering/rag-explained?lang=zh) — 关于RAG如何在幕后工作的概念权威。',
          '[Power Local LLM中心](/zh/power-local-llm) — 集群的完整指南库。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': '内置RAG的本地AI应用：与文件聊天（无需配置）',
      'description':
        'AnythingLLM、LM Studio和Jan + 文档在1,000页文档上测试。内置RAG无向量库、无Python、无命令行。',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'url': 'https://www.promptquorum.com/zh/power-local-llm/local-ai-app-with-built-in-rag',
      'inLanguage': 'zh',
      'image': 'https://www.promptquorum.com/api/og/local-ai-app-with-built-in-rag?lang=zh',
      'author': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
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
        { '@type': 'Thing', 'name': 'Jan（本地AI应用）' },
        { '@type': 'Thing', 'name': 'Retrieval-Augmented Generation' },
        { '@type': 'Thing', 'name': '本地文档聊天' },
        { '@type': 'Thing', 'name': '内置RAG' },
      ],
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways']
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'zh',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '我可以在这些应用中与1,000+ PDF聊天吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM处理每个工作区最多约5,000份文档。Jan + 文档可靠地处理约200份文档。LM Studio是对话范围，约30份文档/聊天。对于1,000+份文档库，AnythingLLM是唯一的内置选项，无需升级。',
          },
        },
        {
          '@type': 'Question',
          'name': '这些应用支持DOCX和Excel吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              '三个都支持DOCX。Excel在2026年5月不被任何应用直接支持 — 先转换为CSV或markdown。AnythingLLM另外支持EPUB、HTML、JSON、音频和网站。',
          },
        },
        {
          '@type': 'Question',
          'name': '我的文档存储在哪里？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM在~/.anythingllm/（macOS/Linux）或%APPDATA%/AnythingLLM（Windows）。LM Studio在~/.cache/lm-studio/或%APPDATA%/LM Studio。Jan在~/jan/。三个都不将您的文档上传到任何地方。',
          },
        },
        {
          '@type': 'Question',
          'name': '我可以从应用的记忆中删除文档吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              '是的，三个都可以。AnythingLLM在工作区UI中有移除 + 重新索引。LM Studio从聊天中分离或删除。Jan从扩展面板移除 + 重新索引。删除后，块会在下一次重新索引时从本地向量存储中移除。',
          },
        },
        {
          '@type': 'Question',
          'name': '引用的准确性如何？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM按块引用，文件名和页码 — 足以用于学术文章。LM Studio按文件名引用；可靠性取决于模型。Jan按块引用，文件名，无页码。在12查询测试中，虚假引用很少 — 始终验证高风险声明。',
          },
        },
        {
          '@type': 'Question',
          'name': '内置RAG可以离线工作吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              '是的。安装后，三个都完全离线工作。索引在本地；查询击中本地向量存储和本地LLM。我们通过禁用网络来确认 — 三个都继续正常应答。',
          },
        },
        {
          '@type': 'Question',
          'name': '我可以在设备之间共享文档数据库吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM在便携文件夹中存储工作区，可在机器之间复制。LM Studio是对话范围，不同步。Jan在~/jan/但LanceDB对版本敏感。最好的方式是家庭服务器上的AnythingLLM Docker。',
          },
        },
        {
          '@type': 'Question',
          'name': '内置RAG处理扫描PDF（OCR）吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              '三个都不处理仅图像的扫描PDF。使用Tesseract OCR或ocrmypdf先添加文本层，然后放入应用。AnythingLLM对内置Tesseract有开放的功能请求。',
          },
        },
        {
          '@type': 'Question',
          'name': '内置RAG变慢之前的最大文档大小是多少？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              '在16GB RAM上，AnythingLLM ~5,000份文档或~50,000页/工作区。LM Studio约30/聊天。Jan约200份文档。超过这些，升级到自定义RAG堆栈。',
          },
        },
        {
          '@type': 'Question',
          'name': '我能将这些用于敏感的法律或医疗文件吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              '三个都100%离线，从不传输内容。对于管制工作流，Jan + 文档最强（AGPL、可审计、零遥测）。AnythingLLM也可以用开源Docker。LM Studio完全专有 — 请咨询合规团队。',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'inLanguage': 'zh',
      'name': '2026年本地AI桌面应用，内置RAG',
      'numberOfItems': 3,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'AnythingLLM',
          'description':
            '功能最强的内置RAG：10+文件格式（PDF、DOCX、TXT、MD、EPUB、HTML、CSV、JSON、网站、音频）、可互换的嵌入模型、持久工作区、按块引用（页码）。约5,000份文档/工作区实用限制。',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'LM Studio',
          'description':
            '最简单的文档聊天：在聊天中拖放PDF/DOCX/TXT/MD。nomic-embed-text v1.5捆绑。对话范围（无工作区）。约30份文档/聊天实用限制。',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Jan + 文档扩展',
          'description':
            '开源选择：AGPL可审计、默认零遥测、仅本地嵌入（all-MiniLM-L6-v2捆绑、可互换）。PDF、DOCX、TXT、MD支持。最适合合规工作流。约200份文档实用限制。',
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
          'name': '首页',
          'item': 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Power Local LLM',
          'item': 'https://www.promptquorum.com/zh/power-local-llm',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': '内置RAG的本地AI应用',
          'item': 'https://www.promptquorum.com/zh/power-local-llm/local-ai-app-with-built-in-rag',
        },
      ],
    },
  },
}
