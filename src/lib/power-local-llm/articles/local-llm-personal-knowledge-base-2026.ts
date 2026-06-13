// Power Local LLM — Build a Personal Knowledge Base With Local AI: 2026 Stack Guide
// Slug: local-llm-personal-knowledge-base-2026
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Build a Personal Knowledge Base With Local AI: 2026 Stack Guide',
    seoTitle: 'Local AI Personal Knowledge Base: 2026 Stack Guide',
    intro:
      'A personal knowledge base (PKB) built on local AI in 2026 has five layers: capture (web clipper, email forwarder, mobile share sheet), storage (a Markdown vault or document folder), embeddings (a local model via Ollama), retrieval (RAG), and interface (chat or semantic search). Three architectures cover ~95% of real builds — Obsidian-centric (note-first, scales to ~50K items), AnythingLLM-centric (document-first, scales to ~100K items), and a custom Python + ChromaDB stack (engineer-first, scales past 1M items). Hardware floor is a 16 GB RAM laptop; past 10,000 items, plan for 32 GB. The biggest scaling decision is not the LLM — it is whether your capture pipeline survives daily use on mobile, where most knowledge actually arrives.',
    metaDescription:
      'Local AI personal knowledge base 2026: 3 architectures compared (Obsidian, AnythingLLM, Python + ChromaDB). Scales to 100K+ items. Capture, RAG, sync, backup.',
    twitterDescription:
      'Three local-AI PKB architectures in 2026: Obsidian (~50K items), AnythingLLM (~100K), Python + ChromaDB (1M+). Capture, RAG, mobile sync, backup, scaling.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Qwen3 7B',
      'nomic-embed-text',
      'mxbai-embed-large',
      'bge-m3',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16 GB unified memory minimum, 32 GB recommended past 10K items)',
      'PC with RTX 3060 12 GB or RTX 4060 8 GB',
      'PC with 32 GB RAM (CPU-only fallback for large vaults)',
      'Home server / mini PC with 64 GB RAM (custom Python stack at 100K+ items)',
    ],
    audience:
      'Knowledge workers, researchers, writers, and engineers building a private AI-searchable archive of their notes, bookmarks, emails, and documents — typically 1,000 to 100,000 items — without sending content to a cloud service.',
    readTime: '15 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local AI personal knowledge base',
    targetKeywords: [
      'local AI personal knowledge base',
      'local LLM second brain',
      'private knowledge base AI',
      'local RAG knowledge base',
      'self-hosted AI knowledge base',
      'personal knowledge base 2026 stack',
    ],
    leadAnswerBlock:
      '**A local-AI personal knowledge base in 2026 is a five-layer stack — capture, storage, embeddings, retrieval, interface — and you should pick one of three reference architectures rather than designing from scratch.** Use Obsidian + Smart Connections + Copilot for Obsidian + Ollama if you write notes daily and want vault-wide semantic search; this scales cleanly to ~50,000 notes on a 16 GB Mac M3 Pro or PC. Use AnythingLLM + Ollama if your knowledge lives mostly as documents (PDFs, exports, web clippings) rather than notes; it scales to ~100,000 documents and bundles capture, RAG, and chat in one app. Build a custom Python + ChromaDB + Llama 3.2 3B stack only if you have 100,000+ items, multi-user access, or specific schema needs — the maintenance burden is real. The real bottleneck across all three is capture: most knowledge arrives on mobile (web pages, screenshots, voice notes, forwarded emails), and a stack with no mobile capture path will collect dust regardless of how clever its retrieval is. Hardware floor is 16 GB RAM; past 10,000 items, budget 32 GB. Past 100,000 items, move embeddings to a home server.',
    quickAnswerTop: {
      en: {
        question: 'What is the best local AI personal knowledge base architecture in 2026?',
        answer:
          'For most people: Obsidian + Smart Connections + Copilot for Obsidian + Ollama (Llama 3.2 3B chat, nomic-embed-text embeddings). Scales to ~50,000 notes on a 16 GB Mac. For document-heavy archives: AnythingLLM + Ollama in one app, scales to ~100,000 documents. For engineers and 100,000+ item vaults: custom Python + ChromaDB + Llama 3.2 3B with separate capture, embedding, and chat services. Hardware floor is 16 GB RAM; budget 32 GB past 10,000 items and a home server past 100,000. Capture is the real scaling bottleneck — design for mobile share sheet, web clipper, and email forwarding before optimising the LLM.',
        bullets: [
          'Obsidian-centric — best for note-first workflows, scales to ~50,000 notes, 16 GB RAM minimum.',
          'AnythingLLM-centric — best for document-heavy KBs (PDFs, exports), scales to ~100,000 documents, all-in-one app.',
          'Custom Python + ChromaDB — best for engineers, scales past 1M items, requires self-managed services.',
          'Recommended chat model in 2026: Llama 3.2 3B for 16 GB systems, Phi-4 Mini for 8 GB, Qwen3 7B for quality at 32 GB+.',
          'Recommended embedding model: nomic-embed-text (768-dim, fast) or mxbai-embed-large (1024-dim, more accurate); bge-m3 for multilingual archives.',
          'Hardware floor: 16 GB RAM laptop; 32 GB recommended past 10,000 items; home server with 64 GB past 100,000.',
          'Capture is the bottleneck: most KB items are captured on mobile (web pages, screenshots, voice notes), queried on desktop. iOS Shortcuts → Obsidian, Working Copy (Git), or a-Shell are the three mobile capture paths.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Which Architecture Should You Build?', anchor: '#which-architecture' },
      { label: 'Architecture Comparison Table', anchor: '#comparison-table' },
      { label: 'The Five Layers of a Local-AI PKB', anchor: '#five-layers' },
      { label: 'Architecture A: Obsidian-Centric', anchor: '#architecture-obsidian' },
      { label: 'Architecture B: AnythingLLM-Centric', anchor: '#architecture-anythingllm' },
      { label: 'Architecture C: Custom Python + ChromaDB', anchor: '#architecture-custom' },
      { label: 'Capture Pipeline: Web, Email, Mobile, Voice', anchor: '#capture' },
      { label: 'Mobile Capture: iOS Shortcuts, Working Copy, a-Shell', anchor: '#mobile-capture' },
      { label: 'Scaling: 1K, 10K, 100K Items', anchor: '#scaling' },
      { label: 'Backup, Version Control, Multi-Device Sync', anchor: '#backup-sync' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Pick one of three reference architectures rather than designing from scratch.** Obsidian-centric (note-first, ~50K items), AnythingLLM-centric (document-first, ~100K items), or custom Python + ChromaDB (engineer-first, 1M+ items). Mixing architectures rarely pays off — the integration tax dominates.',
          '**A local-AI PKB has five layers: capture, storage, embeddings, retrieval, interface.** Most beginner mistakes happen at the capture layer, not the LLM layer. If items do not flow into the system from mobile and email, no clever retrieval will save the build.',
          '**Hardware floor: 16 GB RAM.** Below that, you are choosing between running an embedding model and running a chat model — not both. At 16 GB you can run Llama 3.2 3B + nomic-embed-text concurrently. At 32 GB you can step up to Qwen3 7B or run multiple chat sessions. Past 100,000 items, move embeddings to a home server.',
          '**Recommended models in 2026:** chat — Llama 3.2 3B (default), Phi-4 Mini (8 GB systems), Qwen3 7B (quality on 32 GB+); embeddings — nomic-embed-text (768-dim, fast), mxbai-embed-large (1024-dim, more accurate), bge-m3 (multilingual).',
          '**Capture is the scaling bottleneck, not retrieval.** Most knowledge items arrive on mobile (web clippings, screenshots, voice notes, forwarded emails). Design the mobile share sheet → vault path before tuning the LLM. iOS Shortcuts → Obsidian / Working Copy / a-Shell are the three viable iOS paths.',
          '**Sync method dictates what works on mobile.** Obsidian Sync handles binary embedding indexes cleanly; iCloud Drive corrupts them across platforms; Git requires `.gitignore` discipline and per-device re-indexing. Pick sync first, plugins second.',
          '**Backup is not optional.** Three layers: vault snapshot (Time Machine, Backblaze, restic), Git history of plain-text content, and a quarterly export of embeddings + metadata for a clean rebuild path. Embeddings are regenerable but expensive — back them up too if your vault is over 10,000 items.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Architectures covered:** Obsidian-centric, AnythingLLM-centric, custom Python + ChromaDB.',
          '**LLM backend:** Ollama (recommended) — runs chat and embedding models behind one local endpoint at `http://localhost:11434`.',
          '**Recommended chat models 2026:** Llama 3.2 3B (16 GB systems), Phi-4 Mini (8 GB), Qwen3 7B (32 GB+).',
          '**Recommended embedding models 2026:** nomic-embed-text (768-dim, fast), mxbai-embed-large (1024-dim, accurate), bge-m3 (multilingual).',
          '**Item-count targets:** Obsidian ~50,000 notes, AnythingLLM ~100,000 documents, custom Python + ChromaDB 1M+ items.',
          '**Hardware floor:** 16 GB RAM laptop. Past 10,000 items: 32 GB recommended. Past 100,000 items: home server with 64 GB.',
          '**Mobile capture paths (iOS):** Shortcuts → Obsidian, Shortcuts → Working Copy (Git), Shortcuts → a-Shell. Android: Tasker or HTTP Shortcuts.',
        ],
      },
      whichArchitecture: {
        id: 'which-architecture',
        title: 'Which Architecture Should You Build?',
        content:
          '**Pick the architecture that matches how your knowledge already arrives, not the one that sounds most powerful.** If you already write daily notes, build Obsidian-centric. If your knowledge is mostly documents (PDFs, exports, web clippings), build AnythingLLM-centric. Build a custom Python + ChromaDB stack only if you genuinely have 100,000+ items or need multi-user access — the maintenance cost is real and rarely worth it under that threshold.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Note-first workflows pick Obsidian + Smart Connections + Copilot + Ollama; document-first archives pick AnythingLLM + Ollama; engineers with 100K+ items pick a custom Python + ChromaDB stack.',
          },
          {
            type: 'plain-terms',
            text: 'Three roads, one destination. If you live inside a notes app already, Obsidian wraps your existing habit with AI features. If you mostly hoard PDFs and web pages, AnythingLLM is a single app that ingests, indexes, and chats. If you write code and want full control, Python + ChromaDB lets you build exactly what you want — but you maintain it. Pick the road that matches your existing workflow; do not change your habits to fit the architecture.',
          },
        ],
        decisionBlock: {
          title: 'Decision: Which PKB Architecture?',
          localIf: [
            'You already use Obsidian or want a notes-first workflow with Markdown files → Obsidian-centric',
            'Your knowledge is mostly PDFs, exports, web clippings, and email archives → AnythingLLM-centric',
            'You have 100,000+ items, custom schema needs, or multi-user access → custom Python + ChromaDB',
            'You want one app that handles capture, storage, RAG, and chat → AnythingLLM-centric',
            'You want full control over chunking, retrieval, and re-ranking → custom Python + ChromaDB',
          ],
          cloudIf: [
            'You need GPT-5.5-class reasoning on every query and your archive is small → Notion AI or ChatGPT with custom GPTs (the local stack is ~70% as capable on synthesis)',
            'You have no machine with 16 GB+ RAM and no home server → cloud SaaS PKB (Mem, Reflect)',
            'Your team needs concurrent multi-user access and you do not want to host services → cloud equivalent',
          ],
          quick: [
            'Default for note-first users: Obsidian + Smart Connections + Copilot + Ollama',
            'Default for document-first users: AnythingLLM + Ollama',
            'Engineer with 100K+ items: custom Python + ChromaDB + Llama 3.2 3B',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Do not start with the custom Python stack just because it sounds more powerful. Build Obsidian-centric or AnythingLLM-centric first, run it for two months, find the layer that does not match your workflow, and only then consider replacing that one layer with a custom component. Every PKB project that started "from scratch in Python" and ran for over six months either converged on Obsidian-shaped or AnythingLLM-shaped designs anyway.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Architecture Comparison Table',
        content:
          '**The three reference architectures differ on five axes that matter to most builders: setup complexity, item-count ceiling, mobile sync, capture flexibility, and maintenance burden.** Setup complexity grows roughly linearly with control — and so does the maintenance cost.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obsidian is medium-complexity at ~50K items, AnythingLLM is low-complexity at ~100K items, and custom Python + ChromaDB is high-complexity but scales past 1M items.',
          },
          {
            type: 'plain-terms',
            text: 'AnythingLLM is the easiest to set up and scales the furthest of the two "off-the-shelf" options — but it is opinionated about how documents are organised. Obsidian gives you the most expressive note-taking layer and an active plugin ecosystem, at the cost of a slightly higher setup tax. Custom Python is unbounded but you maintain everything: chunking, re-ranking, deduplication, sync, backups. Pick by your patience for maintenance, not by item count alone.',
          },
        ],
        columns: ['Architecture', 'Setup complexity', 'Max items', 'Mobile sync', 'Best for'],
        rows: [
          { 'Architecture': 'Obsidian-centric', 'Setup complexity': 'Medium', 'Max items': '~50,000', 'Mobile sync': 'Yes (Obsidian Sync; iCloud / Git with caveats)', 'Best for': 'Note-first power users with daily writing habit' },
          { 'Architecture': 'AnythingLLM-centric', 'Setup complexity': 'Low', 'Max items': '~100,000', 'Mobile sync': 'Limited (web UI from phone over LAN / Tailscale)', 'Best for': 'Document-heavy KBs (PDFs, exports, web clippings)' },
          { 'Architecture': 'Custom Python + ChromaDB', 'Setup complexity': 'High', 'Max items': '1M+', 'Mobile sync': 'Manual (build your own API + mobile client)', 'Best for': 'Engineers wanting full control + multi-user' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Mobile sync is the most underrated comparison axis. AnythingLLM is technically easier to set up than Obsidian, but on mobile it is "open the LAN web UI in Safari" — not a native experience. Obsidian Mobile, paired with Obsidian Sync, gives you a near-native iOS / Android app with offline reading. If mobile capture and reading matters, weight Obsidian higher than the table suggests.',
          },
        ],
      },
      fiveLayers: {
        id: 'five-layers',
        title: 'The Five Layers of a Local-AI PKB',
        content:
          '**Every local-AI PKB has the same five layers regardless of architecture: capture, storage, embeddings, retrieval, interface.** Failures usually happen because one layer is mismatched with the others — most commonly, a sophisticated retrieval layer paired with a broken capture pipeline that nobody uses.',
        numberedItems: [
          {
            title: 'Capture',
            whyItMatters: 'How items enter the system. Web clipper, email forwarder, mobile share sheet, voice note, manual paste. The single most-skipped layer in beginner builds — and the layer that determines whether the system survives daily use. If capture takes more than 5 seconds on mobile, the system collects dust.',
          },
          {
            title: 'Storage',
            whyItMatters: 'Where items live on disk. Markdown vault (Obsidian, Logseq), document folder + database (AnythingLLM), or filesystem + manifest (custom Python). Pick a storage format that survives any tool change — plain text Markdown is the most portable; binary databases are the least.',
          },
          {
            title: 'Embeddings',
            whyItMatters: 'Vector representations of items used for semantic search. Generated by a local model (nomic-embed-text or mxbai-embed-large via Ollama). The embedding model can be changed later, but the migration cost is "re-embed everything" — pick once, stick with it.',
          },
          {
            title: 'Retrieval',
            whyItMatters: 'How items are found at query time. Top-k vector search, optional re-ranking, optional metadata filters (tags, dates, sources). The quality difference between a naive top-5 and a tuned top-20-with-reranker is the difference between "useful" and "magical."',
          },
          {
            title: 'Interface',
            whyItMatters: 'How you query and read. Sidebar (Smart Connections), chat (Copilot, AnythingLLM), CLI (custom Python), or API. Most users default to chat — but a "related notes" sidebar surfaces forgotten material that chat cannot, because you do not know what to ask.',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'A common build pattern that fails: pick the most powerful retrieval (custom hybrid search with re-ranking), the smartest chat model (Qwen3 7B), and ignore capture. Three weeks in, the vault has 47 items because nothing flows in from mobile. The fix is always the same: simplify retrieval, simplify chat, fix capture, and accept that 80% of value comes from items being in the system at all.',
          },
        ],
      },
      architectureObsidian: {
        id: 'architecture-obsidian',
        title: 'Architecture A: Obsidian-Centric',
        content:
          '**Obsidian + Smart Connections + Copilot for Obsidian + Ollama is the default architecture for note-first workflows in 2026.** It scales cleanly to ~50,000 notes on a 16 GB Mac M3 Pro or PC, supports mobile reading via Obsidian Mobile, and keeps everything in plain-text Markdown that you can take to any future tool.',
        items: [
          '**Storage:** Markdown files in a folder ("vault"). Plain text, plain folders, no database. Survives tool migration.',
          '**Capture:** Obsidian Web Clipper (browser extension), Obsidian Mobile share sheet (iOS / Android), email-to-Obsidian via Mailspike or a custom IFTTT recipe, manual paste.',
          '**Embeddings:** Smart Connections plugin → Ollama at `http://localhost:11434/api/embeddings` → nomic-embed-text (default) or mxbai-embed-large (more accurate). Index lives in `.smart-env/` inside the vault.',
          '**Retrieval:** Smart Connections sidebar (related-notes view) + Copilot for Obsidian vault QA mode (RAG over the vault for chat queries). Both retrieve over the embedding index.',
          '**Interface:** Smart Connections sidebar (passive discovery) + Copilot chat panel (active queries) + Text Generator templates (repeatable workflows like daily summaries).',
          '**Setup time:** ~30 min (install Ollama, pull models, install three plugins, configure endpoints, let initial index build).',
          '**Hardware:** 16 GB RAM minimum (Llama 3.2 3B + nomic-embed-text concurrently). 32 GB recommended past 10,000 notes. SSD strongly recommended — index re-build is I/O-bound on HDDs.',
          '**Item-count ceiling:** ~50,000 notes practical; tested up to 20,000 with sub-second incremental re-index. At 50K+ notes, initial index runs 4–8 hours and you should consider sub-vaults.',
          '**Best for:** users with a daily writing habit, Markdown-first preferences, and a desire for a "thinking partner" sidebar that surfaces forgotten notes.',
          '**Not for:** users whose knowledge is mostly PDFs and web clippings (use AnythingLLM-centric); users who want a single all-in-one app (Obsidian-centric is "Obsidian + 3 plugins + Ollama").',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For a deep-dive on the plugin layer of this architecture (which 5 plugins, configuration steps, vault scale numbers), see the [Obsidian + Local LLM plugin guide](/power-local-llm/local-llm-with-obsidian-2026). This page covers the architecture; the plugin guide covers the configuration.',
          },
        ],
      },
      architectureAnythingllm: {
        id: 'architecture-anythingllm',
        title: 'Architecture B: AnythingLLM-Centric',
        content:
          '**AnythingLLM + Ollama is the all-in-one option: capture, storage, RAG, and chat are bundled in a single desktop or self-hosted app.** It scales to ~100,000 documents (mixed PDFs, web clippings, exports) and is the right pick when your knowledge arrives mostly as documents rather than notes.',
        items: [
          '**Storage:** AnythingLLM internal database (SQLite by default; Postgres for self-hosted multi-user). Documents are ingested via the UI; originals can also stay in a folder you mirror.',
          '**Capture:** in-app upload (drag PDFs / files into a workspace), browser extension for web pages, public API for programmatic ingestion (`POST /api/v1/document/upload`), email forwarder via the official integration or a custom relay.',
          '**Embeddings:** AnythingLLM uses your configured embedding provider — pick "Ollama" → endpoint `http://localhost:11434` → model `nomic-embed-text`. Embeddings stored in AnythingLLM\'s built-in vector store (LanceDB by default; ChromaDB / Pinecone optional).',
          '**Retrieval:** RAG over the workspace. Configurable chunk size, top-k retrieval, optional re-ranking. Multiple workspaces let you partition by topic (e.g., "Work", "Reading", "Projects").',
          '**Interface:** AnythingLLM web UI (works on desktop and mobile browsers), public API for custom front-ends, OpenAI-compatible endpoint to plug other tools into your KB.',
          '**Setup time:** ~15 min (install AnythingLLM Desktop or Docker, point it at Ollama, drag in documents).',
          '**Hardware:** 16 GB RAM minimum. 32 GB recommended past 10,000 documents. AnythingLLM is more memory-efficient than Obsidian + plugins at the same item count because there is one process instead of two.',
          '**Item-count ceiling:** ~100,000 documents in a single workspace; partition into multiple workspaces past 50K to keep retrieval latency under ~1 sec.',
          '**Best for:** users with PDF-heavy archives, web-clipping-heavy capture, and a preference for one app over a stack of plugins. Also the right pick for small teams self-hosting a shared KB.',
          '**Not for:** users who want a notes-first writing surface (Obsidian); users who want to own their storage as plain Markdown (AnythingLLM\'s vector store is internal).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For step-by-step setup of the RAG layer used here (Ollama + AnythingLLM, ingestion, chunk tuning), see the [Local RAG on Your PDFs in 30 Minutes](/power-local-llm/local-rag-on-your-pdfs-step-by-step) walkthrough. For scaling RAG beyond toy examples to 1,000+ PDFs, see [Chat With 1000+ PDFs Locally](/power-local-llm/chat-with-1000-pdfs-locally).',
          },
        ],
      },
      architectureCustom: {
        id: 'architecture-custom',
        title: 'Architecture C: Custom Python + ChromaDB',
        content:
          '**A custom Python + ChromaDB + Ollama stack is the right pick only if you genuinely have 100,000+ items, multi-user needs, or specific schema requirements that off-the-shelf tools cannot model.** The maintenance cost is real: chunking, deduplication, re-ranking, sync, backup — you own it all.',
        items: [
          '**Storage:** filesystem (one folder per source: `notes/`, `pdfs/`, `web/`, `email/`) + a metadata manifest (SQLite or JSONL). Source files stay in plain formats so you can swap retrieval layers without re-ingesting.',
          '**Capture:** scripts triggered by webhooks (web clipper → HTTP endpoint → file write), email forwarder → IMAP poller → file write, mobile share sheet → Tailscale endpoint → file write. Every capture path is a small Python service.',
          '**Embeddings:** ChromaDB (local mode, persists to disk) + Ollama embeddings via the OpenAI-compatible endpoint. Re-embed on file change via a watchdog process. ChromaDB scales to millions of vectors on a single machine with HNSW indexing.',
          '**Retrieval:** ChromaDB top-k similarity + a re-ranker (BGE Re-ranker or Cohere local equivalent) + metadata filters (date range, tags, source). Optional hybrid search with BM25 over chunks for exact-term matching.',
          '**Interface:** any of: a small FastAPI service exposing an OpenAI-compatible `/v1/chat/completions` endpoint, a Streamlit / Gradio UI, a CLI, or all three. Plug Open WebUI in front for a polished chat experience without writing UI code.',
          '**Setup time:** ~1 day for a working v1; ~2 weeks of iteration to tune chunking, retrieval quality, and capture pipelines for your specific data.',
          '**Hardware:** 32 GB RAM laptop for development; home server with 64 GB RAM at 100,000+ items so the embedding service does not compete with your laptop. Consider a dedicated GPU (RTX 4060 or better) past 500K items for chat throughput.',
          '**Item-count ceiling:** 1M+ items practical with HNSW + sharding; the bottleneck shifts from retrieval to capture pipeline reliability and re-embedding cost on schema changes.',
          '**Best for:** engineers who want to own the stack, teams with custom schema (e.g., "every item has a confidence score, a source, and an author"), or users who hit hard limits in Obsidian or AnythingLLM (50K / 100K respectively).',
          '**Not for:** non-engineers; anyone who undervalues the maintenance cost; users for whom an off-the-shelf option already covers the use case.',
        ],
        promptExamples: [
          {
            label: 'ChromaDB ingestion (Python sketch)',
            text: 'import chromadb, ollama, pathlib\nclient = chromadb.PersistentClient(path="./chroma")\ncoll = client.get_or_create_collection("kb")\nfor p in pathlib.Path("vault").rglob("*.md"):\n    text = p.read_text()\n    emb = ollama.embeddings(model="nomic-embed-text", prompt=text)["embedding"]\n    coll.upsert(ids=[str(p)], embeddings=[emb], documents=[text], metadatas=[{"source": str(p)}])',
          },
          {
            label: 'Query with re-rank (sketch)',
            text: 'q = "What did I write about local RAG sync?"\nq_emb = ollama.embeddings(model="nomic-embed-text", prompt=q)["embedding"]\nhits = coll.query(query_embeddings=[q_emb], n_results=20)\n# pass hits["documents"] through a re-ranker, keep top 5\n# send top 5 + question to Llama 3.2 3B via Ollama chat endpoint',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'The most common failure pattern in custom builds: re-embedding the entire archive on every code change because the schema is not stable. Lock the embedding model + chunk size before ingesting more than ~5,000 items. Migrating from nomic-embed-text 768-dim to mxbai-embed-large 1024-dim at 100K items takes hours of compute and breaks the ChromaDB collection — you cannot mix dimensions.',
          },
        ],
      },
      capture: {
        id: 'capture',
        title: 'Capture Pipeline: Web, Email, Mobile, Voice',
        content:
          '**The capture layer determines whether your PKB survives daily use. Most knowledge arrives outside the desktop — on mobile, in email, in voice notes — and a capture pipeline that requires opening a desktop app first is a pipeline that gets bypassed.** Build for the four main inflows and accept that 80% of items will arrive on mobile.',
        items: [
          '**Web clipper (desktop + mobile):** Obsidian Web Clipper, AnythingLLM browser extension, or a custom bookmarklet that POSTs the current page to your capture endpoint. Mobile share sheet → web clipper extension → vault.',
          '**Email forwarder:** dedicated address (e.g., `kb@yourdomain.com`) + IMAP poller → file write. Forward emails you want to keep; the poller handles ingestion. Use a per-source prefix in the filename so retrieval can filter by source.',
          '**Mobile share sheet:** the most-used capture path. iOS Share → Obsidian (writes a Markdown file), iOS Share → Working Copy (commits to Git), iOS Share → custom Shortcut (POST to your capture API). Android: HTTP Shortcuts or Tasker.',
          '**Voice notes:** AudioPen-style capture is increasingly common in 2026. Record on phone → transcribe locally with Whisper.cpp or via a self-hosted Whisper service → write the transcript as a Markdown file → embed.',
          '**Manual paste:** the fallback. Always works, never scales. Use it for the long tail.',
          '**Screenshot OCR:** screenshots are a lossy capture format. Use Apple Live Text on iOS or a local OCR pipeline (Tesseract, Apple Vision, EasyOCR) to extract text + write a Markdown file with both image and OCR\'d text.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Audit your existing capture habits before designing the pipeline. Look at what you already save: browser bookmarks, screenshots, forwarded emails, voice memos. The PKB capture layer should mirror those existing inflows — if you already screenshot constantly, build the OCR path; if you already forward emails to yourself, build the email forwarder. Adding new habits ("now I will manually copy-paste each article into the KB") never works.',
          },
        ],
      },
      mobileCapture: {
        id: 'mobile-capture',
        title: 'Mobile Capture: iOS Shortcuts, Working Copy, a-Shell',
        content:
          '**iOS has three viable capture paths to a local-AI PKB in 2026: Shortcuts → Obsidian, Shortcuts → Working Copy (Git), or Shortcuts → a-Shell (script-driven).** Each pairs naturally with one of the three reference architectures. Pick the path whose sync model matches your overall architecture.',
        items: [
          '**Shortcuts → Obsidian (Obsidian-centric):** the "Append to Note" Obsidian Shortcut writes the captured content directly into the vault. Sync via Obsidian Sync (paid, recommended) or iCloud Drive (free, with caveats). Best for note-first workflows.',
          '**Shortcuts → Working Copy (Git):** the captured content is written into a Working Copy repository on the iPhone, then auto-committed and pushed. Desktop pulls. Free, robust, works with any Markdown vault. Caveat: Working Copy is paid (one-time ~$20). Best for Git-synced vaults.',
          '**Shortcuts → a-Shell:** a-Shell is a free iOS terminal that runs scripts. Build a Shortcut that pipes the captured text to an a-Shell script, which writes a file and either commits via `git`, syncs via `rsync` over Tailscale, or uploads to your custom capture endpoint. Best for engineer-built custom architectures.',
          '**Android equivalents:** Tasker + Termux + Git for parity with the iOS Working Copy path. HTTP Shortcuts for the custom-endpoint path. Obsidian Mobile share sheet for the Obsidian path.',
          '**Latency budget:** mobile capture should complete in under 5 seconds end-to-end (share sheet → file written / committed / uploaded). Anything slower and the user opens the app once and never again.',
          '**Offline capture:** all three iOS paths queue offline (Shortcuts queues, Working Copy queues commits, a-Shell scripts can write locally and sync later). Essential for capture during flights, transit, and rural areas.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Do not build a mobile capture path that requires the desktop to be online (e.g., POST to a Tailscale-protected endpoint that is only reachable when your laptop is awake). You will lose captures during work meetings, while the laptop is in sleep mode, and overnight. Either run the capture endpoint on a home server / NAS that is always-on, or write to a sync-eventually store (Obsidian Sync, Git, iCloud) that buffers offline.',
          },
        ],
      },
      scaling: {
        id: 'scaling',
        title: 'Scaling: 1K, 10K, 100K Items',
        content:
          '**Scaling a local-AI PKB has three regimes: under 1,000 items everything is fast on any modern laptop; 1,000–10,000 items the embedding index becomes a real artefact you have to manage; past 10,000 items hardware becomes the bottleneck and capture pipeline reliability dominates outcomes.** Realistic numbers below assume Mac M3 Pro / RTX 4060 PC with nomic-embed-text and Llama 3.2 3B.',
        columns: ['Item count', 'Recommended architecture', 'Initial embedding time', 'Hardware', 'Notes'],
        rows: [
          { 'Item count': '1,000 items', 'Recommended architecture': 'Any of the three', 'Initial embedding time': '~2 min', 'Hardware': '16 GB RAM laptop', 'Notes': 'Everything feels instant. Architecture choice is purely about workflow fit.' },
          { 'Item count': '10,000 items', 'Recommended architecture': 'Obsidian or AnythingLLM', 'Initial embedding time': '~25 min', 'Hardware': '16 GB RAM laptop (32 GB recommended)', 'Notes': 'Embedding index ~150–250 MB. Re-embed time on edits is sub-second. Sweet spot for most knowledge workers.' },
          { 'Item count': '50,000 items', 'Recommended architecture': 'AnythingLLM or custom Python', 'Initial embedding time': '~3 hours', 'Hardware': '32 GB RAM laptop or home server', 'Notes': 'Initial index runs overnight. Plan for sub-vaults / workspaces past this point. Disk usage ~1.5–2 GB for embeddings.' },
          { 'Item count': '100,000 items', 'Recommended architecture': 'AnythingLLM (multi-workspace) or custom Python', 'Initial embedding time': '6–8 hours', 'Hardware': '32 GB RAM minimum; home server preferred', 'Notes': 'Move embeddings to a dedicated home server. Capture pipeline reliability is now the primary failure mode, not retrieval.' },
          { 'Item count': '500,000+ items', 'Recommended architecture': 'Custom Python + ChromaDB', 'Initial embedding time': '24+ hours', 'Hardware': 'Home server with 64 GB RAM + dedicated GPU', 'Notes': 'Sharding, deduplication, and incremental re-embed pipelines become necessary. Off-the-shelf tools no longer fit.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The initial embedding cost is a one-time bill. After the first index, only changed items are re-embedded — usually under a second per save even at 100K items. The slow first-time experience is real but not recurring. Run the initial index overnight on a power-connected machine and forget about it.',
          },
        ],
      },
      backupSync: {
        id: 'backup-sync',
        title: 'Backup, Version Control, Multi-Device Sync',
        content:
          '**A local-AI PKB needs three backup layers: vault snapshots (Time Machine, Backblaze, restic), Git history of plain-text content, and a quarterly export of embeddings and metadata for clean rebuild.** Embeddings are technically regenerable, but at 100K+ items the regeneration cost is hours — back them up too.',
        items: [
          '**Vault snapshots (filesystem-level):** Time Machine (macOS) or restic (Linux) every 24 hours. Backblaze or rsync.net for off-site. Captures everything including embeddings.',
          '**Git history (content-only):** plain-text Markdown files committed to a Git repo (local + GitHub / Gitea private). Add `.smart-env/`, `vector_store/`, and any other binary index folders to `.gitignore`. Git gives you per-note version history; vault snapshots give you whole-system rollback.',
          '**Embedding export (quarterly):** export the vector store to a portable format (ChromaDB → parquet, Smart Connections → JSON dump, AnythingLLM → built-in export). Keep the latest two exports off-site. If a vault snapshot fails or the embedding index corrupts, this is your fast rebuild path.',
          '**Multi-device sync — Obsidian-centric:** Obsidian Sync handles plain-text + binary indexes cleanly (E2E encrypted). iCloud Drive works for plain-text but corrupts binary indexes across platforms. Git via Working Copy / Termux works for plain-text only — re-index per device.',
          '**Multi-device sync — AnythingLLM-centric:** run AnythingLLM as a self-hosted Docker container on a home server. All devices connect to the same instance via LAN or Tailscale. No client-side sync needed.',
          '**Multi-device sync — custom Python:** the architecture you build determines this. Most builds use a central API service (FastAPI on a home server) + clients that POST captures and GET queries. Tailscale provides the network layer.',
          '**Migration to a new computer:** restore vault snapshot → restore Git repo → restart Ollama → restart embedding indexer. Embedding regeneration is automatic if you skipped the embedding export step; manual re-index if you backed it up but the format is platform-specific.',
          '**Selective sharing:** for sharing parts of a vault (e.g., a research project with a collaborator), use a sub-vault or a tagged-export script. Do not share the whole vault — most local-AI PKBs accumulate sensitive items (medical, financial, personal) that should never leave the local stack.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Test your restore once a quarter. Most "I have backups" claims are aspirational — the test is "can I restore my vault to a fresh laptop in under 2 hours?" Run that test. The first time you do, you will discover that one of the three layers (snapshot, Git, embedding export) was misconfigured for the past six months.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Designing the retrieval layer before the capture layer.** A custom hybrid search with re-ranking is wasted on a 47-item vault. Build capture first, accept naive top-5 retrieval, and only optimise retrieval once the vault has 1,000+ items and you can measure retrieval quality on real queries.',
          '**Mixing architectures.** "Obsidian for notes + AnythingLLM for PDFs + custom Python for emails" sounds clean but the integration tax dominates. Pick one architecture, accept the limitations, and add a single connector if you absolutely must (e.g., AnythingLLM ingesting an Obsidian vault folder read-only).',
          '**Switching embedding models without re-embedding the archive.** Mixing nomic-embed-text 768-dim and mxbai-embed-large 1024-dim vectors in the same store breaks retrieval silently. Pick one embedding model + dimension, lock it, and only switch with a full re-embed of the archive.',
          '**Ignoring backup of the embedding index past 10,000 items.** "I can regenerate it" is true but the regeneration is hours. Add the embedding store to your backup strategy past 10K items.',
          '**Designing for desktop-only when 80% of capture happens on mobile.** A PKB with no mobile capture path collects dust. Test the mobile capture flow on day one — share sheet to vault should complete in under 5 seconds.',
          '**Relying on iCloud Drive for binary embedding indexes.** iCloud handles plain text fine; binary indexes (Smart Connections `.smart-env/`, AnythingLLM vector store) corrupt across platforms. Use Obsidian Sync, a self-hosted instance, or accept per-device re-indexing.',
          '**Not partitioning at 100K items.** A single workspace / vault past 100K items has retrieval latency in the seconds. Partition by topic (Work, Reading, Projects) into multiple workspaces or sub-vaults; query each separately or via a router.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Obsidian — [obsidian.md](https://obsidian.md) and [help.obsidian.md](https://help.obsidian.md) (vault structure, mobile sync architecture, plugin docs).',
          'AnythingLLM — [github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) (open-source self-hosted RAG application).',
          'Ollama — [ollama.com](https://ollama.com) and [github.com/ollama/ollama](https://github.com/ollama/ollama) (local LLM runtime; chat + embedding endpoints).',
          'ChromaDB — [trychroma.com](https://www.trychroma.com) and [github.com/chroma-core/chroma](https://github.com/chroma-core/chroma) (open-source local vector database).',
          'Working Copy — [workingcopy.app](https://workingcopy.app) (iOS Git client used for mobile capture pipelines).',
          'a-Shell — [holzschu.github.io/a-Shell_iOS/](https://holzschu.github.io/a-Shell_iOS/) (free iOS terminal for script-driven mobile capture).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'How do I capture web pages into my knowledge base?',
            a: 'Three options ranked by friction. (1) Browser extension web clipper — Obsidian Web Clipper or AnythingLLM browser extension write the current page directly to your vault / workspace. (2) Mobile share sheet — Safari / Chrome share → Obsidian (writes a Markdown file) or → Working Copy (commits to Git) or → custom Shortcut (POSTs to your capture API). (3) Bookmarklet — for browsers without an extension; POSTs the current URL + selection to your capture endpoint. The mobile share sheet is the most-used path in practice — design it first.',
          },
          {
            q: 'Can I forward emails into the system?',
            a: 'Yes. Set up a dedicated address (e.g., a Fastmail / Migadu alias `kb@yourdomain.com`) and run an IMAP poller on your home server or laptop that downloads new mail and writes one Markdown file per email into your vault. Add a from-address prefix in the filename so retrieval can filter by sender. AnythingLLM has a first-party email integration; Obsidian users typically build the IMAP poller themselves or use IFTTT / Zapier alternatives like n8n.',
          },
          {
            q: 'How do I sync across desktop and mobile?',
            a: 'Architecture-dependent. Obsidian-centric: Obsidian Sync (paid, handles binary indexes cleanly), iCloud Drive (free, plain-text only — re-index per device), or Git via Working Copy (free + Working Copy one-time fee, plain-text only — re-index per device). AnythingLLM-centric: run AnythingLLM on a home server in Docker, all devices connect via LAN or Tailscale — no client-side sync needed. Custom Python: build a central API service on a home server; clients POST captures and GET queries.',
          },
          {
            q: 'Should I use one big vault or split by topic?',
            a: 'One vault until ~50,000 items. Past 50K, split by topic (Work, Reading, Projects, Personal) for two reasons: retrieval latency stays under ~1 sec, and accidental cross-leak between contexts (e.g., personal notes surfacing in work queries) becomes possible at scale. Splitting earlier than 50K is premature — you lose serendipitous cross-domain connections that are a primary value of a PKB.',
          },
          {
            q: 'How often should I re-embed for accuracy?',
            a: 'Never re-embed for "accuracy drift" — embeddings do not degrade. Re-embed only when you change the embedding model (e.g., upgrading from nomic-embed-text to mxbai-embed-large for better retrieval on technical content). All three architectures handle incremental re-embedding automatically on file change; you do not schedule it. The exception is custom Python stacks where you control the indexer — there, watchdog-driven incremental re-embed on save is standard.',
          },
          {
            q: 'Can I version-control my knowledge base?',
            a: 'Yes for plain-text content (Markdown vault → Git repo, local + GitHub / Gitea private). Add binary index folders (`.smart-env/`, `vector_store/`, ChromaDB persistence dir) to `.gitignore` — they bloat history and cause merge conflicts. Git gives you per-note version history; vault snapshots (Time Machine, restic) give you whole-system rollback. Both layers, not either-or.',
          },
          {
            q: 'How do I handle PDFs in this system?',
            a: 'Obsidian-centric: store PDFs alongside Markdown notes; Smart Connections does not embed PDF content directly — extract text first (e.g., via the PDF++ plugin or a pre-processing script that writes a Markdown summary alongside each PDF). AnythingLLM-centric: drag PDFs directly into a workspace; AnythingLLM handles PDF parsing and chunking automatically. Custom Python: use `pypdf` or `pdfplumber` to extract text in your ingestion pipeline, then embed the extracted text. AnythingLLM is the lowest-friction option for PDF-heavy archives.',
          },
          {
            q: 'Can I share parts of my KB selectively?',
            a: 'Yes, but design for it from day one. Use sub-vaults (Obsidian) or workspaces (AnythingLLM) to keep "shareable" and "private" content in separate stores. For one-off sharing, build a tagged-export script that pulls items by tag (e.g., `#shareable`) into a portable Markdown bundle. Do not share the whole vault — most local-AI PKBs accumulate sensitive items (medical, financial, personal correspondence) that should never leave the local stack.',
          },
          {
            q: 'What backup strategy is best?',
            a: 'Three layers: (1) filesystem snapshot every 24 hours (Time Machine / restic) with off-site copy (Backblaze / rsync.net); (2) Git history of plain-text content for per-note version recovery; (3) quarterly export of embeddings + metadata for fast rebuild path. Test the restore once a quarter — "can I rebuild my vault on a fresh laptop in under 2 hours?" The first restore test usually reveals one of the three layers was misconfigured.',
          },
          {
            q: 'How do I migrate to a new computer?',
            a: 'Restore the vault snapshot → install Ollama and pull the same models → install Obsidian / AnythingLLM / your custom Python stack → restart the embedding indexer. With Obsidian Sync or a self-hosted AnythingLLM, the migration is "install the client and log in" — no manual restore needed. Without those, allow ~30 min for a 10K-item vault, ~2 hours for 50K, and overnight for 100K+ if you skipped the embedding export step.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Obsidian + Local LLM: 5 Plugins That Turn Your Vault Into a Second Brain (2026)](/power-local-llm/local-llm-with-obsidian-2026) — deep-dive on the plugin layer of Architecture A.',
          '[Local LLM with Logseq and Joplin](/power-local-llm/local-llm-with-logseq-and-joplin) — alternative storage layers for the PKB if Obsidian is not your preference.',
          '[Chat With 1000+ PDFs Locally: Scaling RAG Beyond Toy Examples](/power-local-llm/chat-with-1000-pdfs-locally) — scaling the RAG layer past 1,000 items, applies to all three architectures.',
          '[Build Local RAG on Your PDFs in 30 Minutes (Ollama + AnythingLLM)](/power-local-llm/local-rag-on-your-pdfs-step-by-step) — RAG implementation walkthrough for the retrieval layer used in Architecture B.',
          '[Best Embedding Models for Local RAG (2026)](/power-local-llm/best-embedding-models-local-rag-2026) — embedding model selection (nomic-embed-text vs mxbai-embed-large vs bge-m3) for any of the three architectures.',
          '[RAG Explained](/prompt-engineering/rag-explained) — concept authority for the retrieval layer.',
          '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) — hardware sizing for 16 GB floor, 32 GB recommended past 10K items, home server past 100K.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — directory listings for Ollama, ChromaDB, AnythingLLM, Obsidian, and other components in the stack.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Persönliche Wissensdatenbank mit lokaler KI aufbauen: Stack-Guide 2026',
    seoTitle: 'Persönliche KI-Wissensdatenbank: Stack-Guide 2026',
    intro:
      'Eine persönliche Wissensdatenbank (PKB) auf Basis lokaler KI besteht 2026 aus fünf Schichten: Capture (Web Clipper, E-Mail-Forwarder, Mobile Share Sheet), Speicherung (Markdown-Vault oder Dokumentenordner), Embeddings (lokales Modell via Ollama), Retrieval (RAG) und Schnittstelle (Chat oder semantische Suche). Drei Architekturen decken rund 95 % aller realen Builds ab — Obsidian-zentriert (notiz-zentrisch, skaliert bis ~50.000 Elemente), AnythingLLM-zentriert (dokumenten-zentrisch, skaliert bis ~100.000 Elemente) und ein eigener Stack aus Python + ChromaDB (engineer-zentrisch, skaliert über 1 Mio. Elemente). Die Hardware-Untergrenze ist ein Laptop mit 16 GB RAM; jenseits von 10.000 Elementen sollten Sie 32 GB einplanen. Die wichtigste Skalierungsentscheidung ist nicht das LLM — sondern ob Ihre Capture-Pipeline den Alltag auf dem Smartphone überlebt, denn dort entstehen die meisten Wissens-Items.',
    metaDescription:
      'Lokale KI-Wissensdatenbank 2026: 3 Architekturen (Obsidian, AnythingLLM, Python + ChromaDB). Skaliert bis 100.000+ Elemente. Capture, RAG, Sync, Backup.',
    twitterDescription:
      'Drei lokale KI-PKB-Architekturen 2026: Obsidian (~50K Elemente), AnythingLLM (~100K), Python + ChromaDB (1M+). Capture, RAG, Mobile Sync, Backup, Skalierung.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Qwen3 7B',
      'nomic-embed-text',
      'mxbai-embed-large',
      'bge-m3',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16 GB Unified Memory minimum, 32 GB empfohlen ab 10.000 Elementen)',
      'PC mit RTX 3060 12 GB oder RTX 4060 8 GB',
      'PC mit 32 GB RAM (CPU-only Fallback für große Vaults)',
      'Heimserver / Mini-PC mit 64 GB RAM (eigener Python-Stack ab 100.000 Elementen)',
    ],
    audience:
      'Wissensarbeitende, Forschende, Autoren und Engineers, die ein privates KI-durchsuchbares Archiv aus Notizen, Lesezeichen, E-Mails und Dokumenten aufbauen — typischerweise 1.000 bis 100.000 Elemente — ohne Inhalte an einen Cloud-Dienst zu senden.',
    readTime: '15 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale KI-Wissensdatenbank',
    targetKeywords: [
      'lokale KI Wissensdatenbank',
      'lokales LLM Second Brain',
      'private Wissensdatenbank KI',
      'lokales RAG Wissensdatenbank',
      'self-hosted KI Wissensdatenbank',
      'persönliche Wissensdatenbank 2026',
    ],
    leadAnswerBlock:
      '**Eine lokale KI-Wissensdatenbank besteht 2026 aus fünf Schichten — Capture, Speicherung, Embeddings, Retrieval, Schnittstelle — und Sie sollten eine von drei Referenzarchitekturen wählen, statt von Grund auf zu designen.** Verwenden Sie Obsidian + Smart Connections + Copilot for Obsidian + Ollama, wenn Sie täglich Notizen schreiben und vault-weite semantische Suche wünschen; das skaliert sauber bis ~50.000 Notizen auf einem 16-GB-Mac M3 Pro oder PC. Verwenden Sie AnythingLLM + Ollama, wenn Ihr Wissen vorwiegend als Dokumente vorliegt (PDFs, Exporte, Web-Clippings) statt als Notizen; das skaliert bis ~100.000 Dokumente und vereint Capture, RAG und Chat in einer App. Bauen Sie nur dann einen eigenen Python + ChromaDB + Llama 3.2 3B Stack, wenn Sie 100.000+ Elemente, Multi-User-Zugriff oder spezifische Schema-Anforderungen haben — der Wartungsaufwand ist real. Der eigentliche Engpass aller drei Architekturen ist Capture: Die meisten Wissens-Items entstehen mobil (Webseiten, Screenshots, Sprachnotizen, weitergeleitete E-Mails), und ein Stack ohne mobilen Capture-Pfad sammelt Staub, egal wie clever das Retrieval ist. Hardware-Untergrenze: 16 GB RAM; ab 10.000 Elementen 32 GB einplanen. Ab 100.000 Elementen Embeddings auf einen Heimserver auslagern.',
    quickAnswerTop: {
      de: {
        question: 'Welche Architektur eignet sich 2026 am besten für eine lokale KI-Wissensdatenbank?',
        answer:
          'Für die meisten Anwender: Obsidian + Smart Connections + Copilot for Obsidian + Ollama (Llama 3.2 3B Chat, nomic-embed-text Embeddings). Skaliert bis ~50.000 Notizen auf einem 16-GB-Mac. Für dokumentenlastige Archive: AnythingLLM + Ollama in einer App, skaliert bis ~100.000 Dokumente. Für Engineers und Vaults mit 100.000+ Elementen: eigener Stack aus Python + ChromaDB + Llama 3.2 3B mit getrennten Capture-, Embedding- und Chat-Diensten. Hardware-Untergrenze 16 GB RAM; ab 10.000 Elementen 32 GB einplanen, ab 100.000 einen Heimserver. Capture ist der eigentliche Skalierungs-Engpass — entwerfen Sie Mobile Share Sheet, Web Clipper und E-Mail-Weiterleitung, bevor Sie das LLM optimieren.',
        bullets: [
          'Obsidian-zentriert — am besten für notiz-zentrische Workflows, skaliert bis ~50.000 Notizen, mindestens 16 GB RAM.',
          'AnythingLLM-zentriert — am besten für dokumentenlastige PKBs (PDFs, Exporte), skaliert bis ~100.000 Dokumente, All-in-One-App.',
          'Eigener Python + ChromaDB Stack — am besten für Engineers, skaliert über 1 Mio. Elemente, erfordert selbstverwaltete Dienste.',
          'Empfohlene Chat-Modelle 2026: Llama 3.2 3B für 16-GB-Systeme, Phi-4 Mini für 8 GB, Qwen3 7B für Qualität ab 32 GB.',
          'Empfohlenes Embedding-Modell: nomic-embed-text (768-dim, schnell) oder mxbai-embed-large (1024-dim, präziser); bge-m3 für mehrsprachige Archive.',
          'Hardware-Untergrenze: Laptop mit 16 GB RAM; 32 GB ab 10.000 Elementen empfohlen; Heimserver mit 64 GB ab 100.000.',
          'Capture ist der Engpass: Die meisten PKB-Items werden mobil erfasst (Webseiten, Screenshots, Sprachnotizen), aber am Desktop abgefragt. iOS Shortcuts → Obsidian, Working Copy (Git) oder a-Shell sind die drei mobilen Capture-Pfade.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Wichtige Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Welche Architektur sollten Sie bauen?', anchor: '#which-architecture' },
      { label: 'Architektur-Vergleichstabelle', anchor: '#comparison-table' },
      { label: 'Die fünf Schichten einer lokalen KI-PKB', anchor: '#five-layers' },
      { label: 'Architektur A: Obsidian-zentriert', anchor: '#architecture-obsidian' },
      { label: 'Architektur B: AnythingLLM-zentriert', anchor: '#architecture-anythingllm' },
      { label: 'Architektur C: Eigener Python + ChromaDB Stack', anchor: '#architecture-custom' },
      { label: 'Capture-Pipeline: Web, E-Mail, Mobil, Sprache', anchor: '#capture' },
      { label: 'Mobile Capture: iOS Shortcuts, Working Copy, a-Shell', anchor: '#mobile-capture' },
      { label: 'Skalierung: 1K, 10K, 100K Elemente', anchor: '#scaling' },
      { label: 'Backup, Versionierung, Multi-Device-Sync', anchor: '#backup-sync' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Lektüre', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Wählen Sie eine von drei Referenzarchitekturen, statt von Grund auf zu designen.** Obsidian-zentriert (notiz-zentrisch, ~50K Elemente), AnythingLLM-zentriert (dokumenten-zentrisch, ~100K Elemente) oder eigener Python + ChromaDB Stack (engineer-zentrisch, 1M+ Elemente). Architekturen zu mischen lohnt sich selten — der Integrationsaufwand dominiert.',
          '**Eine lokale KI-PKB hat fünf Schichten: Capture, Speicherung, Embeddings, Retrieval, Schnittstelle.** Die meisten Anfängerfehler passieren in der Capture-Schicht, nicht im LLM. Wenn Items nicht aus Mobile und E-Mail in das System fließen, rettet kein noch so cleveres Retrieval den Build.',
          '**Hardware-Untergrenze: 16 GB RAM.** Darunter müssen Sie zwischen Embedding-Modell und Chat-Modell wählen — beides geht nicht. Mit 16 GB lassen sich Llama 3.2 3B + nomic-embed-text parallel betreiben. Mit 32 GB können Sie auf Qwen3 7B aufrüsten oder mehrere Chat-Sitzungen führen. Ab 100.000 Elementen Embeddings auf einen Heimserver auslagern.',
          '**Empfohlene Modelle 2026:** Chat — Llama 3.2 3B (Standard), Phi-4 Mini (8-GB-Systeme), Qwen3 7B (Qualität ab 32 GB); Embeddings — nomic-embed-text (768-dim, schnell), mxbai-embed-large (1024-dim, präziser), bge-m3 (mehrsprachig).',
          '**Capture ist der Skalierungs-Engpass, nicht Retrieval.** Die meisten Wissens-Items entstehen mobil (Web-Clippings, Screenshots, Sprachnotizen, weitergeleitete E-Mails). Entwerfen Sie den Pfad Mobile Share Sheet → Vault, bevor Sie das LLM tunen. iOS Shortcuts → Obsidian / Working Copy / a-Shell sind die drei tragfähigen iOS-Pfade.',
          '**Die Sync-Methode bestimmt, was auf Mobile funktioniert.** Obsidian Sync verarbeitet binäre Embedding-Indizes sauber; iCloud Drive korrumpiert sie plattformübergreifend; Git erfordert .gitignore-Disziplin und geräteweise Re-Indexing. Sync zuerst wählen, Plugins danach.',
          '**Backup ist nicht optional.** Drei Schichten: Vault-Snapshot (Time Machine, Backblaze, restic), Git-Historie der Klartext-Inhalte und ein quartalsweiser Export von Embeddings + Metadaten als sauberer Wiederaufbaupfad. Embeddings sind regenerierbar, aber teuer — sichern Sie sie ab 10.000 Elementen ebenfalls.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Behandelte Architekturen:** Obsidian-zentriert, AnythingLLM-zentriert, eigener Python + ChromaDB Stack.',
          '**LLM-Backend:** Ollama (empfohlen) — betreibt Chat- und Embedding-Modelle hinter einem lokalen Endpoint unter `http://localhost:11434`.',
          '**Empfohlene Chat-Modelle 2026:** Llama 3.2 3B (16-GB-Systeme), Phi-4 Mini (8 GB), Qwen3 7B (ab 32 GB).',
          '**Empfohlene Embedding-Modelle 2026:** nomic-embed-text (768-dim, schnell), mxbai-embed-large (1024-dim, präzise), bge-m3 (mehrsprachig).',
          '**Element-Zielgrößen:** Obsidian ~50.000 Notizen, AnythingLLM ~100.000 Dokumente, eigener Python + ChromaDB Stack 1 Mio.+.',
          '**Hardware-Untergrenze:** Laptop mit 16 GB RAM. Ab 10.000 Elementen: 32 GB empfohlen. Ab 100.000 Elementen: Heimserver mit 64 GB.',
          '**Mobile Capture-Pfade (iOS):** Shortcuts → Obsidian, Shortcuts → Working Copy (Git), Shortcuts → a-Shell. Android: Tasker oder HTTP Shortcuts.',
        ],
      },
      whichArchitecture: {
        id: 'which-architecture',
        title: 'Welche Architektur sollten Sie bauen?',
        content:
          '**Wählen Sie die Architektur, die zu Ihrem bestehenden Wissensfluss passt — nicht diejenige, die am leistungsstärksten klingt.** Wenn Sie bereits täglich Notizen schreiben, bauen Sie Obsidian-zentriert. Wenn Ihr Wissen überwiegend aus Dokumenten besteht (PDFs, Exporte, Web-Clippings), bauen Sie AnythingLLM-zentriert. Bauen Sie nur dann einen eigenen Python + ChromaDB Stack, wenn Sie wirklich 100.000+ Elemente haben oder Multi-User-Zugriff brauchen — die Wartungskosten sind real und unterhalb dieser Schwelle selten gerechtfertigt.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Notiz-zentrische Workflows wählen Obsidian + Smart Connections + Copilot + Ollama; dokumenten-zentrische Archive wählen AnythingLLM + Ollama; Engineers mit 100K+ Elementen wählen einen eigenen Python + ChromaDB Stack.',
          },
          {
            type: 'plain-terms',
            text: 'Drei Wege, ein Ziel. Wenn Sie ohnehin in einer Notiz-App leben, packt Obsidian KI-Funktionen um Ihre vorhandene Routine. Wenn Sie hauptsächlich PDFs und Webseiten sammeln, ist AnythingLLM eine einzelne App, die einliest, indexiert und chattet. Wenn Sie programmieren und volle Kontrolle wollen, lässt Sie Python + ChromaDB exakt das bauen, was Sie wollen — aber Sie warten es selbst. Wählen Sie den Weg, der zu Ihrer bestehenden Arbeitsweise passt; ändern Sie nicht Ihre Gewohnheiten, um zur Architektur zu passen.',
          },
        ],
        decisionBlock: {
          title: 'Entscheidung: Welche PKB-Architektur?',
          localIf: [
            'Sie nutzen bereits Obsidian oder wünschen einen notiz-zentrischen Workflow mit Markdown-Dateien → Obsidian-zentriert',
            'Ihr Wissen besteht überwiegend aus PDFs, Exporten, Web-Clippings und E-Mail-Archiven → AnythingLLM-zentriert',
            'Sie haben 100.000+ Elemente, eigene Schema-Anforderungen oder Multi-User-Zugriff → eigener Python + ChromaDB Stack',
            'Sie wollen eine App, die Capture, Speicherung, RAG und Chat abdeckt → AnythingLLM-zentriert',
            'Sie wollen volle Kontrolle über Chunking, Retrieval und Re-Ranking → eigener Python + ChromaDB Stack',
          ],
          cloudIf: [
            'Sie brauchen GPT-5.5-Klasse Reasoning bei jeder Anfrage und Ihr Archiv ist klein → Notion AI oder ChatGPT mit Custom GPTs (der lokale Stack ist bei Synthese rund 70 % so leistungsfähig)',
            'Sie haben keinen Rechner mit 16 GB+ RAM und keinen Heimserver → Cloud-SaaS-PKB (Mem, Reflect)',
            'Ihr Team braucht gleichzeitigen Multi-User-Zugriff und Sie wollen keine Dienste hosten → Cloud-Äquivalent',
          ],
          quick: [
            'Standard für notiz-zentrische Anwender: Obsidian + Smart Connections + Copilot + Ollama',
            'Standard für dokumenten-zentrische Anwender: AnythingLLM + Ollama',
            'Engineer mit 100K+ Elementen: eigener Python + ChromaDB + Llama 3.2 3B Stack',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Starten Sie nicht mit dem eigenen Python-Stack, nur weil er leistungsfähiger klingt. Bauen Sie zuerst Obsidian-zentriert oder AnythingLLM-zentriert, betreiben Sie es zwei Monate, identifizieren Sie die Schicht, die nicht zu Ihrem Workflow passt, und ersetzen Sie erst dann diese eine Schicht durch eine eigene Komponente. Jedes PKB-Projekt, das „from scratch in Python" begonnen und länger als sechs Monate gelaufen ist, konvergierte am Ende ohnehin zu Obsidian- oder AnythingLLM-Form.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Architektur-Vergleichstabelle',
        content:
          '**Die drei Referenzarchitekturen unterscheiden sich auf fünf Achsen, die für die meisten Builder relevant sind: Setup-Komplexität, Element-Obergrenze, Mobile Sync, Capture-Flexibilität und Wartungsaufwand.** Die Setup-Komplexität wächst grob linear mit der Kontrolle — und ebenso die Wartungskosten.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obsidian ist mittelkomplex bei ~50K Elementen, AnythingLLM ist niedrigkomplex bei ~100K Elementen, und ein eigener Python + ChromaDB Stack ist hochkomplex, skaliert aber über 1 Mio. Elemente.',
          },
          {
            type: 'plain-terms',
            text: 'AnythingLLM ist am einfachsten einzurichten und skaliert von den beiden „fertigen" Optionen am weitesten — ist aber meinungsstark, wie Dokumente organisiert sein sollten. Obsidian liefert die ausdrucksstärkste Notiz-Schicht und ein aktives Plugin-Ökosystem, gegen einen leicht höheren Setup-Aufwand. Eigenes Python ist unbegrenzt, aber Sie warten alles: Chunking, Re-Ranking, Deduplikation, Sync, Backups. Wählen Sie nach Ihrer Geduld für Wartung, nicht allein nach Element-Anzahl.',
          },
        ],
        columns: ['Architektur', 'Setup-Komplexität', 'Max. Elemente', 'Mobile Sync', 'Am besten für'],
        rows: [
          { 'Architektur': 'Obsidian-zentriert', 'Setup-Komplexität': 'Mittel', 'Max. Elemente': '~50.000', 'Mobile Sync': 'Ja (Obsidian Sync; iCloud / Git mit Einschränkungen)', 'Am besten für': 'Notiz-zentrische Power-User mit täglicher Schreibroutine' },
          { 'Architektur': 'AnythingLLM-zentriert', 'Setup-Komplexität': 'Niedrig', 'Max. Elemente': '~100.000', 'Mobile Sync': 'Eingeschränkt (Web-UI vom Smartphone via LAN / Tailscale)', 'Am besten für': 'Dokumentenlastige PKBs (PDFs, Exporte, Web-Clippings)' },
          { 'Architektur': 'Eigener Python + ChromaDB', 'Setup-Komplexität': 'Hoch', 'Max. Elemente': '1 Mio.+', 'Mobile Sync': 'Manuell (eigene API + mobiler Client erforderlich)', 'Am besten für': 'Engineers mit voller Kontrolle + Multi-User' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Mobile Sync ist die am stärksten unterschätzte Vergleichsachse. AnythingLLM ist technisch einfacher einzurichten als Obsidian, aber auf Mobile heißt das „LAN-Web-UI in Safari öffnen" — keine native Erfahrung. Obsidian Mobile, kombiniert mit Obsidian Sync, liefert Ihnen eine nahezu native iOS- / Android-App mit Offline-Lesen. Wenn mobiles Capture und Lesen wichtig sind, gewichten Sie Obsidian höher als die Tabelle vermuten lässt.',
          },
        ],
      },
      fiveLayers: {
        id: 'five-layers',
        title: 'Die fünf Schichten einer lokalen KI-PKB',
        content:
          '**Jede lokale KI-PKB hat unabhängig von der Architektur dieselben fünf Schichten: Capture, Speicherung, Embeddings, Retrieval, Schnittstelle.** Fehler entstehen meist, weil eine Schicht nicht zu den anderen passt — am häufigsten ein anspruchsvolles Retrieval gepaart mit einer kaputten Capture-Pipeline, die niemand benutzt.',
        numberedItems: [
          {
            title: 'Capture',
            whyItMatters: 'Wie Items ins System gelangen. Web Clipper, E-Mail-Forwarder, Mobile Share Sheet, Sprachnotiz, manuelles Einfügen. Die am häufigsten übersprungene Schicht in Anfänger-Builds — und die Schicht, die entscheidet, ob das System den Alltag überlebt. Wenn Capture mobil länger als 5 Sekunden dauert, sammelt das System Staub.',
          },
          {
            title: 'Speicherung',
            whyItMatters: 'Wo Items auf der Platte liegen. Markdown-Vault (Obsidian, Logseq), Dokumentenordner + Datenbank (AnythingLLM) oder Dateisystem + Manifest (eigenes Python). Wählen Sie ein Speicherformat, das jeden Tool-Wechsel überlebt — Klartext-Markdown ist am portabelsten; binäre Datenbanken sind es am wenigsten.',
          },
          {
            title: 'Embeddings',
            whyItMatters: 'Vektordarstellungen von Items für die semantische Suche. Erzeugt von einem lokalen Modell (nomic-embed-text oder mxbai-embed-large via Ollama). Das Embedding-Modell lässt sich später wechseln, aber die Migrationskosten lauten „alles neu embedden" — einmal wählen, dabei bleiben.',
          },
          {
            title: 'Retrieval',
            whyItMatters: 'Wie Items zur Abfragezeit gefunden werden. Top-k-Vektorsuche, optional Re-Ranking, optional Metadaten-Filter (Tags, Daten, Quellen). Der Qualitätsunterschied zwischen einem naiven Top-5 und einem getunten Top-20-mit-Re-Ranker ist der Unterschied zwischen „nützlich" und „magisch".',
          },
          {
            title: 'Schnittstelle',
            whyItMatters: 'Wie Sie abfragen und lesen. Sidebar (Smart Connections), Chat (Copilot, AnythingLLM), CLI (eigenes Python) oder API. Die meisten Anwender greifen standardmäßig zum Chat — aber eine Sidebar mit verwandten Notizen bringt vergessenes Material hervor, das Chat nicht findet, weil Sie nicht wissen, wonach Sie fragen sollen.',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ein häufiges Build-Muster, das scheitert: das leistungsstärkste Retrieval (eigene Hybridsuche mit Re-Ranking), das klügste Chat-Modell (Qwen3 7B) — und Capture wird ignoriert. Drei Wochen später hat der Vault 47 Items, weil mobil nichts hineinfließt. Die Korrektur ist immer dieselbe: Retrieval vereinfachen, Chat vereinfachen, Capture reparieren und akzeptieren, dass 80 % des Werts daraus entstehen, dass Items überhaupt im System landen.',
          },
        ],
      },
      architectureObsidian: {
        id: 'architecture-obsidian',
        title: 'Architektur A: Obsidian-zentriert',
        content:
          '**Obsidian + Smart Connections + Copilot for Obsidian + Ollama ist 2026 die Standardarchitektur für notiz-zentrische Workflows.** Sie skaliert sauber bis ~50.000 Notizen auf einem 16-GB-Mac M3 Pro oder PC, unterstützt mobiles Lesen via Obsidian Mobile und hält alles in Klartext-Markdown, das Sie zu jedem zukünftigen Tool mitnehmen können.',
        items: [
          '**Speicherung:** Markdown-Dateien in einem Ordner („Vault"). Klartext, einfache Ordner, keine Datenbank. Übersteht Tool-Migration.',
          '**Capture:** Obsidian Web Clipper (Browser-Erweiterung), Obsidian Mobile Share Sheet (iOS / Android), E-Mail-zu-Obsidian via Mailspike oder ein eigenes IFTTT-Rezept, manuelles Einfügen.',
          '**Embeddings:** Smart Connections Plugin → Ollama unter `http://localhost:11434/api/embeddings` → nomic-embed-text (Standard) oder mxbai-embed-large (präziser). Index liegt in `.smart-env/` innerhalb des Vaults.',
          '**Retrieval:** Smart Connections Sidebar (Verwandte-Notizen-Ansicht) + Copilot for Obsidian Vault-QA-Modus (RAG über den Vault für Chat-Anfragen). Beide nutzen den Embedding-Index.',
          '**Schnittstelle:** Smart Connections Sidebar (passive Entdeckung) + Copilot Chat-Panel (aktive Anfragen) + Text Generator Templates (wiederholbare Workflows wie tägliche Zusammenfassungen).',
          '**Setup-Zeit:** ~30 Min. (Ollama installieren, Modelle pullen, drei Plugins installieren, Endpoints konfigurieren, initialen Index aufbauen lassen).',
          '**Hardware:** mindestens 16 GB RAM (Llama 3.2 3B + nomic-embed-text parallel). 32 GB empfohlen ab 10.000 Notizen. SSD dringend empfohlen — Index-Neuaufbau ist auf HDDs I/O-gebunden.',
          '**Element-Obergrenze:** ~50.000 Notizen praktikabel; getestet bis 20.000 mit Sub-Sekunden-Inkrement-Reindex. Ab 50K+ Notizen läuft der Initial-Index 4–8 Stunden, und Sie sollten Sub-Vaults erwägen.',
          '**Am besten für:** Anwender mit täglicher Schreibroutine, Markdown-First-Vorlieben und dem Wunsch nach einer „Denkpartner"-Sidebar, die vergessene Notizen hervorholt.',
          '**Nicht geeignet für:** Anwender, deren Wissen überwiegend aus PDFs und Web-Clippings besteht (AnythingLLM-zentriert wählen); Anwender, die eine einzelne All-in-One-App wünschen (Obsidian-zentriert ist „Obsidian + 3 Plugins + Ollama").',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Eine Vertiefung der Plugin-Schicht dieser Architektur (welche 5 Plugins, Konfigurationsschritte, Vault-Skalierungswerte) finden Sie im [Obsidian + Local LLM Plugin-Guide](/de/power-local-llm/local-llm-with-obsidian-2026). Diese Seite behandelt die Architektur; der Plugin-Guide behandelt die Konfiguration.',
          },
        ],
      },
      architectureAnythingllm: {
        id: 'architecture-anythingllm',
        title: 'Architektur B: AnythingLLM-zentriert',
        content:
          '**AnythingLLM + Ollama ist die All-in-One-Option: Capture, Speicherung, RAG und Chat sind in einer Desktop- oder selbstgehosteten App gebündelt.** Sie skaliert bis ~100.000 Dokumente (gemischt PDFs, Web-Clippings, Exporte) und ist die richtige Wahl, wenn Ihr Wissen überwiegend als Dokumente und nicht als Notizen entsteht.',
        items: [
          '**Speicherung:** AnythingLLM-interne Datenbank (standardmäßig SQLite; Postgres für Multi-User Self-Hosting). Dokumente werden über die UI eingelesen; Originale können auch in einem Ordner verbleiben, den Sie spiegeln.',
          '**Capture:** In-App-Upload (PDFs / Dateien per Drag & Drop in einen Workspace), Browser-Erweiterung für Webseiten, öffentliche API für programmatische Ingestion (`POST /api/v1/document/upload`), E-Mail-Forwarder via offizielle Integration oder eigenes Relay.',
          '**Embeddings:** AnythingLLM nutzt Ihren konfigurierten Embedding-Provider — wählen Sie „Ollama" → Endpoint `http://localhost:11434` → Modell `nomic-embed-text`. Embeddings im integrierten Vector Store (standardmäßig LanceDB; ChromaDB / Pinecone optional).',
          '**Retrieval:** RAG über den Workspace. Konfigurierbare Chunk-Größe, Top-k-Retrieval, optionales Re-Ranking. Mehrere Workspaces erlauben Partitionierung nach Thema (z. B. „Arbeit", „Lesen", „Projekte").',
          '**Schnittstelle:** AnythingLLM Web-UI (funktioniert in Desktop- und Mobile-Browsern), öffentliche API für eigene Frontends, OpenAI-kompatibler Endpoint, um andere Tools an Ihre PKB anzubinden.',
          '**Setup-Zeit:** ~15 Min. (AnythingLLM Desktop oder Docker installieren, auf Ollama zeigen, Dokumente hineinziehen).',
          '**Hardware:** mindestens 16 GB RAM. 32 GB empfohlen ab 10.000 Dokumenten. AnythingLLM ist bei gleicher Element-Anzahl speichersparsamer als Obsidian + Plugins, weil ein Prozess statt zwei läuft.',
          '**Element-Obergrenze:** ~100.000 Dokumente in einem einzigen Workspace; ab 50K in mehrere Workspaces partitionieren, um die Retrieval-Latenz unter ~1 Sek. zu halten.',
          '**Am besten für:** Anwender mit PDF-lastigen Archiven, Web-Clipping-lastigem Capture und Vorliebe für eine App statt eines Plugin-Stacks. Auch die richtige Wahl für kleine Teams, die eine geteilte PKB selbst hosten.',
          '**Nicht geeignet für:** Anwender, die eine notiz-zentrische Schreibfläche wollen (Obsidian); Anwender, die ihre Speicherung als Klartext-Markdown besitzen wollen (AnythingLLMs Vector Store ist intern).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Eine Schritt-für-Schritt-Einrichtung der hier verwendeten RAG-Schicht (Ollama + AnythingLLM, Ingestion, Chunk-Tuning) finden Sie im Walkthrough [Local RAG on Your PDFs in 30 Minutes](/de/power-local-llm/local-rag-on-your-pdfs-step-by-step). Zur Skalierung von RAG über Spielzeugbeispiele hinaus auf 1.000+ PDFs siehe [Chat With 1000+ PDFs Locally](/de/power-local-llm/chat-with-1000-pdfs-locally).',
          },
        ],
      },
      architectureCustom: {
        id: 'architecture-custom',
        title: 'Architektur C: Eigener Python + ChromaDB Stack',
        content:
          '**Ein eigener Python + ChromaDB + Ollama Stack ist nur dann die richtige Wahl, wenn Sie tatsächlich 100.000+ Elemente, Multi-User-Anforderungen oder spezifische Schema-Anforderungen haben, die Standard-Tools nicht abbilden können.** Die Wartungskosten sind real: Chunking, Deduplikation, Re-Ranking, Sync, Backup — Sie verantworten alles selbst.',
        items: [
          '**Speicherung:** Dateisystem (ein Ordner pro Quelle: `notes/`, `pdfs/`, `web/`, `email/`) + ein Metadaten-Manifest (SQLite oder JSONL). Quelldateien bleiben in offenen Formaten, damit Sie Retrieval-Schichten ohne erneutes Einlesen austauschen können.',
          '**Capture:** Skripte, ausgelöst von Webhooks (Web Clipper → HTTP-Endpoint → Datei schreiben), E-Mail-Forwarder → IMAP-Poller → Datei schreiben, Mobile Share Sheet → Tailscale-Endpoint → Datei schreiben. Jeder Capture-Pfad ist ein kleiner Python-Service.',
          '**Embeddings:** ChromaDB (Local Mode, persistiert auf Platte) + Ollama-Embeddings über den OpenAI-kompatiblen Endpoint. Re-Embedding bei Datei-Änderung über einen Watchdog-Prozess. ChromaDB skaliert mit HNSW-Indexing auf einer einzelnen Maschine bis in die Millionen Vektoren.',
          '**Retrieval:** ChromaDB Top-k-Ähnlichkeit + ein Re-Ranker (BGE Re-ranker oder lokales Cohere-Äquivalent) + Metadaten-Filter (Datumsbereich, Tags, Quelle). Optional Hybridsuche mit BM25 über Chunks für Exakt-Term-Matching.',
          '**Schnittstelle:** beliebige Kombination aus: kleinem FastAPI-Service mit OpenAI-kompatiblem `/v1/chat/completions`-Endpoint, Streamlit- / Gradio-UI, CLI oder allen drei. Open WebUI davorschalten, um eine polierte Chat-Oberfläche ohne UI-Code zu erhalten.',
          '**Setup-Zeit:** ~1 Tag für eine lauffähige v1; ~2 Wochen Iteration, um Chunking, Retrieval-Qualität und Capture-Pipelines auf Ihre Daten zu tunen.',
          '**Hardware:** Laptop mit 32 GB RAM für die Entwicklung; Heimserver mit 64 GB RAM ab 100.000 Elementen, damit der Embedding-Service nicht mit Ihrem Laptop konkurriert. Eine dedizierte GPU (RTX 4060 oder besser) ab 500K Elementen für Chat-Durchsatz.',
          '**Element-Obergrenze:** 1 Mio.+ Elemente praktikabel mit HNSW + Sharding; der Engpass verschiebt sich von Retrieval zu Capture-Pipeline-Zuverlässigkeit und Re-Embedding-Kosten bei Schema-Änderungen.',
          '**Am besten für:** Engineers, die den Stack selbst besitzen wollen, Teams mit eigenem Schema (z. B. „jedes Item hat einen Confidence Score, eine Quelle und einen Autor") oder Anwender, die in Obsidian oder AnythingLLM an harte Grenzen stoßen (50K bzw. 100K).',
          '**Nicht geeignet für:** Nicht-Engineers; alle, die die Wartungskosten unterschätzen; Anwender, deren Use Case bereits von einer Standardlösung abgedeckt wird.',
        ],
        promptExamples: [
          {
            label: 'ChromaDB-Ingestion (Python-Skizze)',
            text: 'import chromadb, ollama, pathlib\nclient = chromadb.PersistentClient(path="./chroma")\ncoll = client.get_or_create_collection("kb")\nfor p in pathlib.Path("vault").rglob("*.md"):\n    text = p.read_text()\n    emb = ollama.embeddings(model="nomic-embed-text", prompt=text)["embedding"]\n    coll.upsert(ids=[str(p)], embeddings=[emb], documents=[text], metadatas=[{"source": str(p)}])',
          },
          {
            label: 'Abfrage mit Re-Ranking (Skizze)',
            text: 'q = "What did I write about local RAG sync?"\nq_emb = ollama.embeddings(model="nomic-embed-text", prompt=q)["embedding"]\nhits = coll.query(query_embeddings=[q_emb], n_results=20)\n# pass hits["documents"] through a re-ranker, keep top 5\n# send top 5 + question to Llama 3.2 3B via Ollama chat endpoint',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Das häufigste Versagensmuster in eigenen Builds: das gesamte Archiv bei jeder Code-Änderung neu zu embedden, weil das Schema nicht stabil ist. Fixieren Sie Embedding-Modell und Chunk-Größe, bevor Sie mehr als ~5.000 Elemente einlesen. Eine Migration von nomic-embed-text 768-dim zu mxbai-embed-large 1024-dim bei 100K Elementen kostet Stunden Compute und bricht die ChromaDB-Collection — Dimensionen lassen sich nicht mischen.',
          },
        ],
      },
      capture: {
        id: 'capture',
        title: 'Capture-Pipeline: Web, E-Mail, Mobil, Sprache',
        content:
          '**Die Capture-Schicht entscheidet, ob Ihre PKB den Alltag überlebt. Die meisten Wissens-Items entstehen außerhalb des Desktops — mobil, in E-Mail, in Sprachnotizen — und eine Capture-Pipeline, die zuerst eine Desktop-App öffnen verlangt, wird umgangen.** Bauen Sie für die vier Hauptzuflüsse und akzeptieren Sie, dass 80 % der Items mobil ankommen.',
        items: [
          '**Web Clipper (Desktop + Mobile):** Obsidian Web Clipper, AnythingLLM Browser-Erweiterung oder ein eigenes Bookmarklet, das die aktuelle Seite an Ihren Capture-Endpoint POSTet. Mobile Share Sheet → Web-Clipper-Erweiterung → Vault.',
          '**E-Mail-Forwarder:** dedizierte Adresse (z. B. `kb@ihre-domain.de`) + IMAP-Poller → Datei schreiben. Leiten Sie die E-Mails weiter, die Sie behalten möchten; der Poller erledigt die Ingestion. Verwenden Sie ein Quelle-Präfix im Dateinamen, damit das Retrieval nach Sender filtern kann.',
          '**Mobile Share Sheet:** der meistgenutzte Capture-Pfad. iOS Share → Obsidian (schreibt eine Markdown-Datei), iOS Share → Working Copy (committet zu Git), iOS Share → eigener Shortcut (POST an Ihre Capture-API). Android: HTTP Shortcuts oder Tasker.',
          '**Sprachnotizen:** AudioPen-artiges Capture wird 2026 zunehmend gängig. Auf dem Smartphone aufnehmen → lokal mit Whisper.cpp oder über einen selbstgehosteten Whisper-Service transkribieren → Transkript als Markdown-Datei schreiben → embedden.',
          '**Manuelles Einfügen:** der Fallback. Funktioniert immer, skaliert nie. Verwenden Sie es für den Long Tail.',
          '**Screenshot-OCR:** Screenshots sind ein verlustbehaftetes Capture-Format. Nutzen Sie Apple Live Text auf iOS oder eine lokale OCR-Pipeline (Tesseract, Apple Vision, EasyOCR), um Text zu extrahieren + eine Markdown-Datei mit Bild und OCR-Text zu schreiben.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Auditieren Sie Ihre bestehenden Capture-Gewohnheiten, bevor Sie die Pipeline entwerfen. Schauen Sie, was Sie bereits speichern: Browser-Bookmarks, Screenshots, weitergeleitete E-Mails, Sprachnotizen. Die PKB-Capture-Schicht sollte diese bestehenden Zuflüsse spiegeln — wenn Sie ohnehin ständig Screenshots machen, bauen Sie den OCR-Pfad; wenn Sie ohnehin E-Mails an sich selbst weiterleiten, bauen Sie den E-Mail-Forwarder. Neue Gewohnheiten hinzuzufügen („ab jetzt kopiere ich jeden Artikel manuell in die KB") funktioniert nie.',
          },
        ],
      },
      mobileCapture: {
        id: 'mobile-capture',
        title: 'Mobile Capture: iOS Shortcuts, Working Copy, a-Shell',
        content:
          '**iOS hat 2026 drei tragfähige Capture-Pfade in eine lokale KI-PKB: Shortcuts → Obsidian, Shortcuts → Working Copy (Git) oder Shortcuts → a-Shell (skriptgesteuert).** Jeder passt natürlicherweise zu einer der drei Referenzarchitekturen. Wählen Sie den Pfad, dessen Sync-Modell zu Ihrer Gesamtarchitektur passt.',
        items: [
          '**Shortcuts → Obsidian (Obsidian-zentriert):** der Obsidian-Shortcut „An Notiz anhängen" schreibt den erfassten Inhalt direkt in den Vault. Sync via Obsidian Sync (kostenpflichtig, empfohlen) oder iCloud Drive (kostenlos, mit Einschränkungen). Am besten für notiz-zentrische Workflows.',
          '**Shortcuts → Working Copy (Git):** der erfasste Inhalt wird in ein Working-Copy-Repository auf dem iPhone geschrieben, automatisch committet und gepusht. Der Desktop pullt. Kostenlos, robust, funktioniert mit jedem Markdown-Vault. Hinweis: Working Copy ist kostenpflichtig (einmalig ca. 22 €). Am besten für Git-synchronisierte Vaults.',
          '**Shortcuts → a-Shell:** a-Shell ist ein kostenloses iOS-Terminal, das Skripte ausführt. Bauen Sie einen Shortcut, der den erfassten Text an ein a-Shell-Skript leitet, das eine Datei schreibt und entweder via `git` committet, via `rsync` über Tailscale synchronisiert oder zu Ihrem eigenen Capture-Endpoint hochlädt. Am besten für engineer-gebaute Eigenarchitekturen.',
          '**Android-Pendants:** Tasker + Termux + Git als Pendant zum iOS Working Copy Pfad. HTTP Shortcuts für den Custom-Endpoint-Pfad. Obsidian Mobile Share Sheet für den Obsidian-Pfad.',
          '**Latenzbudget:** Mobile Capture sollte Ende-zu-Ende in unter 5 Sekunden abgeschlossen sein (Share Sheet → Datei geschrieben / committet / hochgeladen). Alles Langsamere und der Anwender öffnet die App einmal und nie wieder.',
          '**Offline-Capture:** alle drei iOS-Pfade puffern offline (Shortcuts puffert, Working Copy puffert Commits, a-Shell-Skripte können lokal schreiben und später syncen). Essentiell für Capture in Flugzeugen, im ÖPNV und in ländlichen Gebieten.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Bauen Sie keinen mobilen Capture-Pfad, der voraussetzt, dass der Desktop online ist (z. B. POST an einen Tailscale-geschützten Endpoint, der nur erreichbar ist, wenn Ihr Laptop wach ist). Sie verlieren Captures während Meetings, im Sleep-Modus und nachts. Betreiben Sie den Capture-Endpoint entweder auf einem dauerhaft laufenden Heimserver / NAS oder schreiben Sie in einen Eventually-consistent-Store (Obsidian Sync, Git, iCloud), der offline puffert.',
          },
        ],
      },
      scaling: {
        id: 'scaling',
        title: 'Skalierung: 1K, 10K, 100K Elemente',
        content:
          '**Die Skalierung einer lokalen KI-PKB hat drei Regimes: Unter 1.000 Elementen ist alles auf jedem modernen Laptop schnell; bei 1.000–10.000 Elementen wird der Embedding-Index zu einem realen Artefakt, das verwaltet werden muss; ab 10.000 Elementen wird Hardware zum Engpass und die Capture-Pipeline-Zuverlässigkeit dominiert das Ergebnis.** Realistische Werte unten gehen von Mac M3 Pro / RTX 4060 PC mit nomic-embed-text und Llama 3.2 3B aus.',
        columns: ['Element-Anzahl', 'Empfohlene Architektur', 'Initialer Embedding-Lauf', 'Hardware', 'Hinweise'],
        rows: [
          { 'Element-Anzahl': '1.000 Elemente', 'Empfohlene Architektur': 'Beliebige der drei', 'Initialer Embedding-Lauf': '~2 Min.', 'Hardware': 'Laptop mit 16 GB RAM', 'Hinweise': 'Alles fühlt sich sofort an. Architekturwahl rein nach Workflow-Passung.' },
          { 'Element-Anzahl': '10.000 Elemente', 'Empfohlene Architektur': 'Obsidian oder AnythingLLM', 'Initialer Embedding-Lauf': '~25 Min.', 'Hardware': 'Laptop mit 16 GB RAM (32 GB empfohlen)', 'Hinweise': 'Embedding-Index ~150–250 MB. Re-Embed-Zeit bei Bearbeitungen sub-sekündlich. Sweet Spot für die meisten Wissensarbeitenden.' },
          { 'Element-Anzahl': '50.000 Elemente', 'Empfohlene Architektur': 'AnythingLLM oder eigenes Python', 'Initialer Embedding-Lauf': '~3 Stunden', 'Hardware': 'Laptop mit 32 GB RAM oder Heimserver', 'Hinweise': 'Initial-Index läuft über Nacht. Ab hier in Sub-Vaults / Workspaces aufteilen. Disk-Verbrauch ~1,5–2 GB für Embeddings.' },
          { 'Element-Anzahl': '100.000 Elemente', 'Empfohlene Architektur': 'AnythingLLM (Multi-Workspace) oder eigenes Python', 'Initialer Embedding-Lauf': '6–8 Stunden', 'Hardware': 'mindestens 32 GB RAM; Heimserver bevorzugt', 'Hinweise': 'Embeddings auf einen dedizierten Heimserver auslagern. Capture-Pipeline-Zuverlässigkeit ist nun der primäre Fehlermodus, nicht Retrieval.' },
          { 'Element-Anzahl': '500.000+ Elemente', 'Empfohlene Architektur': 'Eigenes Python + ChromaDB', 'Initialer Embedding-Lauf': '24+ Stunden', 'Hardware': 'Heimserver mit 64 GB RAM + dedizierte GPU', 'Hinweise': 'Sharding, Deduplikation und inkrementelle Re-Embed-Pipelines werden notwendig. Standard-Tools passen nicht mehr.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die initialen Embedding-Kosten sind eine Einmalrechnung. Nach dem ersten Index werden nur geänderte Items neu embeddet — meist in unter einer Sekunde pro Save, selbst bei 100K Elementen. Die langsame erste Erfahrung ist real, aber nicht wiederkehrend. Lassen Sie den Initial-Index über Nacht auf einem netzgespeisten Gerät laufen und vergessen Sie ihn.',
          },
        ],
      },
      backupSync: {
        id: 'backup-sync',
        title: 'Backup, Versionierung, Multi-Device-Sync',
        content:
          '**Eine lokale KI-PKB benötigt drei Backup-Schichten: Vault-Snapshots (Time Machine, Backblaze, restic), Git-Historie der Klartext-Inhalte und einen quartalsweisen Export von Embeddings und Metadaten als sauberen Wiederaufbaupfad.** Embeddings sind technisch regenerierbar, aber bei 100K+ Elementen kostet die Regeneration Stunden — sichern Sie sie ebenfalls.',
        items: [
          '**Vault-Snapshots (Dateisystem-Ebene):** Time Machine (macOS) oder restic (Linux) alle 24 Stunden. Backblaze oder rsync.net für Off-Site. Erfasst alles inklusive Embeddings.',
          '**Git-Historie (nur Inhalte):** Klartext-Markdown-Dateien in einem Git-Repo committet (lokal + GitHub / Gitea privat). Fügen Sie `.smart-env/`, `vector_store/` und alle weiteren binären Index-Ordner zu `.gitignore` hinzu. Git liefert pro-Notiz-Versionshistorie; Vault-Snapshots liefern System-Rollback.',
          '**Embedding-Export (quartalsweise):** Vector Store in ein portables Format exportieren (ChromaDB → Parquet, Smart Connections → JSON-Dump, AnythingLLM → integrierter Export). Die letzten zwei Exporte off-site aufbewahren. Falls ein Vault-Snapshot fehlschlägt oder der Embedding-Index korrumpiert, ist dies Ihr schneller Wiederaufbaupfad.',
          '**Multi-Device-Sync — Obsidian-zentriert:** Obsidian Sync verarbeitet Klartext + binäre Indizes sauber (Ende-zu-Ende-verschlüsselt). iCloud Drive funktioniert für Klartext, korrumpiert aber binäre Indizes plattformübergreifend. Git via Working Copy / Termux funktioniert nur für Klartext — Re-Index pro Gerät.',
          '**Multi-Device-Sync — AnythingLLM-zentriert:** AnythingLLM als selbstgehosteten Docker-Container auf einem Heimserver betreiben. Alle Geräte verbinden sich per LAN oder Tailscale mit derselben Instanz. Kein Client-seitiger Sync nötig.',
          '**Multi-Device-Sync — eigenes Python:** Die Architektur, die Sie bauen, bestimmt das. Die meisten Builds verwenden einen zentralen API-Service (FastAPI auf einem Heimserver) + Clients, die Captures POSTen und Anfragen GETten. Tailscale liefert die Netzwerkschicht.',
          '**Migration auf einen neuen Rechner:** Vault-Snapshot wiederherstellen → Git-Repo wiederherstellen → Ollama neu starten → Embedding-Indexer neu starten. Embedding-Regeneration ist automatisch, falls Sie den Embedding-Export-Schritt übersprungen haben; manueller Re-Index, falls Sie ihn gesichert haben, das Format aber plattform-spezifisch ist.',
          '**Selektives Teilen:** Für das Teilen von Vault-Teilen (z. B. ein Forschungsprojekt mit Mit-Autoren) Sub-Vaults oder ein Tagged-Export-Skript verwenden. Den ganzen Vault nicht teilen — die meisten lokalen KI-PKBs sammeln sensible Items (medizinisch, finanziell, persönlich), die den lokalen Stack nie verlassen sollten.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Testen Sie Ihre Wiederherstellung einmal pro Quartal. Die meisten „Ich habe Backups"-Aussagen sind Wunschdenken — der Test ist „Kann ich meinen Vault auf einem frischen Laptop in unter 2 Stunden wiederherstellen?" Führen Sie den Test durch. Beim ersten Mal werden Sie feststellen, dass eine der drei Schichten (Snapshot, Git, Embedding-Export) seit sechs Monaten falsch konfiguriert war.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Die Retrieval-Schicht vor der Capture-Schicht designen.** Eine eigene Hybridsuche mit Re-Ranking ist bei 47 Items im Vault verschwendet. Bauen Sie zuerst Capture, akzeptieren Sie naives Top-5-Retrieval und optimieren Sie Retrieval erst, wenn der Vault 1.000+ Items hat und Sie Retrieval-Qualität an realen Anfragen messen können.',
          '**Architekturen mischen.** „Obsidian für Notizen + AnythingLLM für PDFs + eigenes Python für E-Mails" klingt sauber, aber der Integrationsaufwand dominiert. Wählen Sie eine Architektur, akzeptieren Sie die Einschränkungen und ergänzen Sie höchstens einen einzigen Connector, wenn unbedingt nötig (z. B. AnythingLLM, das einen Obsidian-Vault-Ordner read-only einliest).',
          '**Embedding-Modell wechseln, ohne das Archiv neu zu embedden.** Das Mischen von nomic-embed-text 768-dim und mxbai-embed-large 1024-dim Vektoren im selben Store bricht das Retrieval lautlos. Wählen Sie ein Embedding-Modell + Dimension, fixieren Sie es und wechseln Sie nur mit vollständigem Re-Embedding des Archivs.',
          '**Backup des Embedding-Index ab 10.000 Elementen ignorieren.** „Ich kann ihn regenerieren" stimmt, aber die Regeneration dauert Stunden. Nehmen Sie den Embedding-Store ab 10K Elementen in Ihre Backup-Strategie auf.',
          '**Für Desktop designen, obwohl 80 % des Captures mobil passieren.** Eine PKB ohne mobilen Capture-Pfad sammelt Staub. Testen Sie den mobilen Capture-Flow am ersten Tag — Share Sheet zu Vault sollte in unter 5 Sekunden abgeschlossen sein.',
          '**iCloud Drive für binäre Embedding-Indizes nutzen.** iCloud verarbeitet Klartext sauber; binäre Indizes (Smart Connections `.smart-env/`, AnythingLLM Vector Store) korrumpieren plattformübergreifend. Nutzen Sie Obsidian Sync, eine selbstgehostete Instanz oder akzeptieren Sie geräteweises Re-Indexing.',
          '**Bei 100K Elementen nicht partitionieren.** Ein einzelner Workspace / Vault mit 100K+ Elementen hat Retrieval-Latenzen im Sekundenbereich. Partitionieren Sie nach Thema (Arbeit, Lesen, Projekte) in mehrere Workspaces oder Sub-Vaults; fragen Sie jeden separat oder über einen Router ab.',
          '**DSGVO-Risiko unterschätzen.** PKBs sammeln zwangsläufig sensible Daten (E-Mails von Mandanten, Patienten, Kollegen, finanzielle und gesundheitsbezogene Notizen). Auch bei rein lokaler Verarbeitung greifen DSGVO Art. 6 + Art. 32 — und Cloud-Backups (Backblaze, Dropbox) machen aus Ihrem privaten Stack einen Verarbeitungsvorgang mit Auftragsverarbeitungsvertrag-Pflicht. Für berufliche Nutzung On-Premise-Backups (NAS, externe SSD) bevorzugen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Obsidian — [obsidian.md](https://obsidian.md) und [help.obsidian.md](https://help.obsidian.md) (Vault-Struktur, Mobile-Sync-Architektur, Plugin-Dokumentation).',
          'AnythingLLM — [github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) (Open-Source selbstgehostete RAG-Anwendung).',
          'Ollama — [ollama.com](https://ollama.com) und [github.com/ollama/ollama](https://github.com/ollama/ollama) (lokale LLM-Runtime; Chat- + Embedding-Endpoints).',
          'ChromaDB — [trychroma.com](https://www.trychroma.com) und [github.com/chroma-core/chroma](https://github.com/chroma-core/chroma) (Open-Source lokale Vektordatenbank).',
          'Working Copy — [workingcopy.app](https://workingcopy.app) (iOS Git-Client für mobile Capture-Pipelines).',
          'a-Shell — [holzschu.github.io/a-Shell_iOS/](https://holzschu.github.io/a-Shell_iOS/) (kostenloses iOS-Terminal für skriptgesteuertes Mobile Capture).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Wie erfasse ich Webseiten in meiner Wissensdatenbank?',
            a: 'Drei Optionen, nach Aufwand sortiert. (1) Browser-Erweiterungs-Web-Clipper — Obsidian Web Clipper oder AnythingLLM Browser-Erweiterung schreiben die aktuelle Seite direkt in Ihren Vault / Workspace. (2) Mobile Share Sheet — Safari / Chrome teilen → Obsidian (schreibt eine Markdown-Datei) oder → Working Copy (committet zu Git) oder → eigener Shortcut (POSTet zu Ihrer Capture-API). (3) Bookmarklet — für Browser ohne Erweiterung; POSTet die aktuelle URL + Auswahl an Ihren Capture-Endpoint. Das Mobile Share Sheet ist in der Praxis der meistgenutzte Pfad — entwerfen Sie es zuerst.',
          },
          {
            q: 'Kann ich E-Mails ins System weiterleiten?',
            a: 'Ja. Richten Sie eine dedizierte Adresse ein (z. B. ein Fastmail- / Migadu-Alias `kb@ihre-domain.de`) und betreiben Sie auf Ihrem Heimserver oder Laptop einen IMAP-Poller, der neue Mails herunterlädt und eine Markdown-Datei pro E-Mail in Ihren Vault schreibt. Verwenden Sie ein From-Adress-Präfix im Dateinamen, damit das Retrieval nach Sender filtern kann. AnythingLLM hat eine First-Party-E-Mail-Integration; Obsidian-Anwender bauen den IMAP-Poller meist selbst oder nutzen IFTTT- / Zapier-Alternativen wie n8n.',
          },
          {
            q: 'Wie synchronisiere ich Desktop und Mobile?',
            a: 'Architekturabhängig. Obsidian-zentriert: Obsidian Sync (kostenpflichtig, verarbeitet binäre Indizes sauber), iCloud Drive (kostenlos, nur Klartext — Re-Index pro Gerät) oder Git via Working Copy (kostenlos + einmalige Working-Copy-Gebühr, nur Klartext — Re-Index pro Gerät). AnythingLLM-zentriert: AnythingLLM in Docker auf einem Heimserver betreiben, alle Geräte per LAN oder Tailscale verbinden — kein Client-seitiger Sync nötig. Eigenes Python: zentralen API-Service auf einem Heimserver bauen; Clients POSTen Captures und GETten Anfragen.',
          },
          {
            q: 'Soll ich einen großen Vault verwenden oder nach Themen aufteilen?',
            a: 'Ein Vault bis ~50.000 Elemente. Ab 50K nach Thema aufteilen (Arbeit, Lesen, Projekte, Privat) aus zwei Gründen: Retrieval-Latenz bleibt unter ~1 Sek., und ungewollter Cross-Leak zwischen Kontexten (z. B. private Notizen tauchen in Arbeitsabfragen auf) wird ab dieser Größe möglich. Früher als 50K aufzuteilen ist verfrüht — Sie verlieren die zufälligen Cross-Domain-Verbindungen, die ein Hauptwert einer PKB sind.',
          },
          {
            q: 'Wie oft sollte ich für Genauigkeit neu embedden?',
            a: 'Niemals wegen „Genauigkeitsdrift" neu embedden — Embeddings degradieren nicht. Embedden Sie nur dann neu, wenn Sie das Embedding-Modell wechseln (z. B. Upgrade von nomic-embed-text auf mxbai-embed-large für besseres Retrieval bei technischen Inhalten). Alle drei Architekturen bewältigen inkrementelles Re-Embedding bei Datei-Änderungen automatisch; Sie planen nichts. Ausnahme sind eigene Python-Stacks, in denen Sie den Indexer kontrollieren — dort ist Watchdog-getriebenes inkrementelles Re-Embedding bei Save Standard.',
          },
          {
            q: 'Kann ich meine Wissensdatenbank versionieren?',
            a: 'Ja für Klartext-Inhalte (Markdown-Vault → Git-Repo, lokal + GitHub / Gitea privat). Fügen Sie binäre Index-Ordner (`.smart-env/`, `vector_store/`, ChromaDB-Persistenz-Verzeichnis) zu `.gitignore` hinzu — sie blähen die Historie auf und führen zu Merge-Konflikten. Git liefert pro-Notiz-Versionshistorie; Vault-Snapshots (Time Machine, restic) liefern Gesamtsystem-Rollback. Beide Schichten, nicht entweder/oder.',
          },
          {
            q: 'Wie behandle ich PDFs in diesem System?',
            a: 'Obsidian-zentriert: PDFs neben Markdown-Notizen ablegen; Smart Connections embeddet PDF-Inhalte nicht direkt — extrahieren Sie zuerst Text (z. B. via PDF++ Plugin oder ein Vorverarbeitungsskript, das eine Markdown-Zusammenfassung neben jedes PDF schreibt). AnythingLLM-zentriert: PDFs direkt in einen Workspace ziehen; AnythingLLM übernimmt PDF-Parsing und Chunking automatisch. Eigenes Python: `pypdf` oder `pdfplumber` für die Text-Extraktion in Ihrer Ingestion-Pipeline nutzen, dann den extrahierten Text embedden. AnythingLLM ist die reibungsärmste Option für PDF-lastige Archive.',
          },
          {
            q: 'Kann ich Teile meiner KB selektiv teilen?',
            a: 'Ja, aber von Tag eins darauf hin entwerfen. Verwenden Sie Sub-Vaults (Obsidian) oder Workspaces (AnythingLLM), um „teilbare" und „private" Inhalte in getrennten Stores zu halten. Für einmaliges Teilen ein Tagged-Export-Skript bauen, das Items per Tag (z. B. `#shareable`) in ein portables Markdown-Bundle zieht. Den ganzen Vault nicht teilen — die meisten lokalen KI-PKBs sammeln sensible Items (medizinisch, finanziell, persönliche Korrespondenz), die den lokalen Stack nie verlassen sollten.',
          },
          {
            q: 'Welche Backup-Strategie ist die beste?',
            a: 'Drei Schichten: (1) Dateisystem-Snapshot alle 24 Stunden (Time Machine / restic) mit Off-Site-Kopie (Backblaze / rsync.net); (2) Git-Historie der Klartext-Inhalte für pro-Notiz-Versionswiederherstellung; (3) quartalsweiser Export von Embeddings + Metadaten als schneller Wiederaufbaupfad. Wiederherstellung einmal pro Quartal testen — „Kann ich meinen Vault auf einem frischen Laptop in unter 2 Stunden aufbauen?" Der erste Wiederherstellungstest enthüllt meist, dass eine der drei Schichten falsch konfiguriert war.',
          },
          {
            q: 'Wie migriere ich auf einen neuen Rechner?',
            a: 'Vault-Snapshot wiederherstellen → Ollama installieren und dieselben Modelle pullen → Obsidian / AnythingLLM / Ihren eigenen Python-Stack installieren → Embedding-Indexer neu starten. Mit Obsidian Sync oder selbstgehostetem AnythingLLM ist die Migration „Client installieren und einloggen" — keine manuelle Wiederherstellung nötig. Ohne diese rechnen Sie mit ~30 Min. für einen 10K-Element-Vault, ~2 Stunden für 50K und über Nacht ab 100K, falls Sie den Embedding-Export-Schritt übersprungen haben.',
          },
          {
            q: 'Muss ich bei einer lokalen KI-Wissensdatenbank die DSGVO beachten?',
            a: 'Eine lokale KI-PKB speichert potenziell sensible personenbezogene Daten (Notizen, E-Mails, PDFs, Kontakte). DSGVO Art. 6 + Art. 32 verlangen Rechtsgrundlage + technisch-organisatorische Maßnahmen, auch bei privater oder beruflicher Nutzung. Lokale Inferenz (kein Cloud-Egress) erfüllt die meisten Anforderungen an Datenresidenz und Verarbeitung, weil kein Drittanbieter als Auftragsverarbeiter nach Art. 28 vertraglich gebunden werden muss. Aber: Backups auf Backblaze, Dropbox usw. bleiben Cloud-Dienste mit Auftragsverarbeitungsvertrag-Pflicht. Für Selbstständige (Anwälte, Ärzte, Steuerberater) mit Mandanten-/Patientendaten: rein lokale Backups (NAS, externe SSD) oder BSI-C5-zertifizierte Anbieter bevorzugen. Der lokale Stack ist der einfachere Compliance-Pfad als jede Cloud-PKB.',
          },
          {
            q: 'Ist eine lokale KI-Wissensdatenbank für den deutschen Mittelstand geeignet?',
            a: 'Ja — und für Mittelständler mit sensiblen Geschäftsdaten häufig die geeignetere Wahl als Cloud-PKBs. Empfohlene Aufstellung: AnythingLLM-zentriert auf einem Linux-Heimserver (oder Synology- / QNAP-NAS mit Docker) mit Ollama + Llama 3.2 3B. Das erfüllt BSI-Grundschutz-Bausteine SYS.1 + APP.4 mit auditierbarem On-Premise-Datenfluss. Mehrere Arbeitsplätze via Tailscale für Remote-Zugriff. Initiale Investition: ca. 3.000–5.000 € für Server mit 64 GB + Storage. Gesamtkosten über 3 Jahre liegen bei Teams ab fünf Personen unter den meisten Cloud-PKB-Abos. Für Mittelstand in Finanz, Recht und Medizin ist das die nüchterne Wahl.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Obsidian + Local LLM: 5 Plugins, die Ihren Vault zum Second Brain machen (2026)](/de/power-local-llm/local-llm-with-obsidian-2026) — Vertiefung der Plugin-Schicht von Architektur A.',
          '[Lokales LLM mit Logseq und Joplin](/de/power-local-llm/local-llm-with-logseq-and-joplin) — alternative Speicherschichten für die PKB, falls Obsidian nicht Ihre Wahl ist.',
          '[Chat mit 1000+ PDFs lokal: RAG über Spielzeugbeispiele hinaus skalieren](/de/power-local-llm/chat-with-1000-pdfs-locally) — Skalierung der RAG-Schicht über 1.000 Elemente, gilt für alle drei Architekturen.',
          '[Lokales RAG für Ihre PDFs in 30 Minuten (Ollama + AnythingLLM)](/de/power-local-llm/local-rag-on-your-pdfs-step-by-step) — RAG-Implementierungs-Walkthrough für die in Architektur B verwendete Retrieval-Schicht.',
          '[Beste Embedding-Modelle für lokales RAG (2026)](/de/power-local-llm/best-embedding-models-local-rag-2026) — Embedding-Modell-Auswahl (nomic-embed-text vs mxbai-embed-large vs bge-m3) für jede der drei Architekturen.',
          '[RAG erklärt](/de/prompt-engineering/rag-explained) — konzeptionelle Grundlage der Retrieval-Schicht.',
          '[Lokales LLM Hardware-Guide 2026](/de/local-llms/local-llm-hardware-guide-2026) — Hardware-Sizing für 16-GB-Untergrenze, 32 GB ab 10K Elementen, Heimserver ab 100K.',
          '[Lokales LLM Software-Verzeichnis 2026](/de/power-local-llm/local-llm-software-directory-2026) — Verzeichnislisten für Ollama, ChromaDB, AnythingLLM, Obsidian und weitere Komponenten des Stacks.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Construire une base de connaissances avec une IA locale : guide stack 2026',
    seoTitle: 'Base de connaissances IA locale : Guide stack 2026',
    intro:
      'Une base de connaissances personnelle (PKB) construite sur une IA locale en 2026 comporte cinq couches : capture (web clipper, redirection e-mail, partage mobile), stockage (vault Markdown ou dossier de documents), embeddings (modèle local via Ollama), récupération (RAG) et interface (chat ou recherche sémantique). Trois architectures couvrent ~95 % des projets réels — Obsidian-centré (orienté notes, jusqu\'à ~50 000 éléments), AnythingLLM-centré (orienté documents, jusqu\'à ~100 000 éléments) et un stack Python + ChromaDB sur mesure (orienté ingénieurs, au-delà de 1 M d\'éléments). Le seuil matériel est un ordinateur portable avec 16 Go de RAM ; au-delà de 10 000 éléments, prévoyez 32 Go. La décision de mise à l\'échelle la plus importante n\'est pas le LLM — mais de savoir si votre pipeline de capture survit à un usage quotidien sur mobile, là où la plupart des connaissances arrivent réellement.',
    metaDescription:
      'Base de connaissances personnelle avec LLM local 2026 : interrogez vos notes sans cloud. Obsidian, Logseq et RAG local pour une mémoire numérique privée.',
    twitterDescription:
      'Trois architectures de PKB IA locale en 2026 : Obsidian (~50K), AnythingLLM (~100K), Python + ChromaDB (1M+). Capture, RAG, sync mobile, sauvegarde.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Qwen3 7B',
      'nomic-embed-text',
      'mxbai-embed-large',
      'bge-m3',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16 Go de mémoire unifiée minimum, 32 Go recommandés au-delà de 10 000 éléments)',
      'PC avec RTX 3060 12 Go ou RTX 4060 8 Go',
      'PC avec 32 Go de RAM (repli CPU pour les vaults volumineux)',
      'Serveur domestique / mini-PC avec 64 Go de RAM (stack Python sur mesure au-delà de 100 000 éléments)',
    ],
    audience:
      'Travailleurs du savoir, chercheurs, auteurs et ingénieurs construisant une archive privée consultable par IA à partir de leurs notes, signets, e-mails et documents — typiquement de 1 000 à 100 000 éléments — sans envoyer de contenu à un service cloud.',
    readTime: '15 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'base de connaissances IA locale',
    targetKeywords: [
      'base de connaissances IA locale',
      'second cerveau LLM local',
      'base de connaissances privée IA',
      'RAG local base de connaissances',
      'base de connaissances auto-hébergée',
      'base de connaissances personnelle 2026',
    ],
    leadAnswerBlock:
      '**Une base de connaissances IA locale en 2026 comporte cinq couches — capture, stockage, embeddings, récupération, interface — et vous devriez choisir l\'une des trois architectures de référence plutôt que de partir de zéro.** Utilisez Obsidian + Smart Connections + Copilot for Obsidian + Ollama si vous écrivez des notes au quotidien et souhaitez une recherche sémantique sur tout le vault ; cela monte proprement jusqu\'à ~50 000 notes sur un Mac M3 Pro 16 Go ou un PC équivalent. Utilisez AnythingLLM + Ollama si vos connaissances sont essentiellement des documents (PDF, exports, captures web) plutôt que des notes ; cela monte jusqu\'à ~100 000 documents et regroupe capture, RAG et chat dans une seule application. Construisez un stack Python + ChromaDB + Llama 3.2 3B sur mesure uniquement si vous avez 100 000+ éléments, des besoins multi-utilisateurs ou des contraintes de schéma spécifiques — le coût de maintenance est réel. Le véritable goulot d\'étranglement des trois architectures est la capture : la plupart des connaissances arrivent sur mobile (pages web, captures d\'écran, notes vocales, e-mails transférés), et un stack sans chemin de capture mobile reste inutilisé, peu importe la qualité de la récupération. Seuil matériel : 16 Go de RAM ; au-delà de 10 000 éléments, prévoyez 32 Go. Au-delà de 100 000 éléments, déplacez les embeddings vers un serveur domestique.',
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la meilleure architecture pour une base de connaissances IA locale en 2026 ?',
        answer:
          'Pour la plupart des utilisateurs : Obsidian + Smart Connections + Copilot for Obsidian + Ollama (Llama 3.2 3B pour le chat, nomic-embed-text pour les embeddings). Monte jusqu\'à ~50 000 notes sur un Mac 16 Go. Pour les archives orientées documents : AnythingLLM + Ollama dans une seule application, jusqu\'à ~100 000 documents. Pour les ingénieurs et les vaults de 100 000+ éléments : stack Python + ChromaDB + Llama 3.2 3B sur mesure avec services de capture, embedding et chat séparés. Seuil matériel : 16 Go de RAM ; prévoyez 32 Go au-delà de 10 000 éléments et un serveur domestique au-delà de 100 000. La capture est le véritable goulot d\'étranglement — concevez le partage mobile, le web clipper et la redirection e-mail avant d\'optimiser le LLM.',
        bullets: [
          'Obsidian-centré — meilleur pour les workflows orientés notes, jusqu\'à ~50 000 notes, 16 Go de RAM minimum.',
          'AnythingLLM-centré — meilleur pour les PKB orientées documents (PDF, exports), jusqu\'à ~100 000 documents, application tout-en-un.',
          'Stack Python + ChromaDB sur mesure — meilleur pour les ingénieurs, au-delà de 1 M d\'éléments, services auto-gérés requis.',
          'Modèles de chat recommandés en 2026 : Llama 3.2 3B pour systèmes 16 Go, Phi-4 Mini pour 8 Go, Qwen3 7B pour la qualité au-delà de 32 Go.',
          'Modèles d\'embedding recommandés : nomic-embed-text (768-dim, rapide) ou mxbai-embed-large (1024-dim, plus précis) ; bge-m3 pour les archives multilingues.',
          'Seuil matériel : portable 16 Go de RAM ; 32 Go recommandés au-delà de 10 000 éléments ; serveur domestique 64 Go au-delà de 100 000.',
          'La capture est le goulot d\'étranglement : la plupart des éléments PKB sont capturés sur mobile (pages web, captures d\'écran, notes vocales) et consultés sur le bureau. iOS Shortcuts → Obsidian, Working Copy (Git) ou a-Shell sont les trois chemins de capture mobile.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Quelle architecture construire ?', anchor: '#which-architecture' },
      { label: 'Tableau comparatif des architectures', anchor: '#comparison-table' },
      { label: 'Les cinq couches d\'une PKB IA locale', anchor: '#five-layers' },
      { label: 'Architecture A : Obsidian-centré', anchor: '#architecture-obsidian' },
      { label: 'Architecture B : AnythingLLM-centré', anchor: '#architecture-anythingllm' },
      { label: 'Architecture C : Python + ChromaDB sur mesure', anchor: '#architecture-custom' },
      { label: 'Pipeline de capture : web, e-mail, mobile, vocal', anchor: '#capture' },
      { label: 'Capture mobile : iOS Shortcuts, Working Copy, a-Shell', anchor: '#mobile-capture' },
      { label: 'Mise à l\'échelle : 1K, 10K, 100K éléments', anchor: '#scaling' },
      { label: 'Sauvegarde, versioning, sync multi-appareils', anchor: '#backup-sync' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Choisissez l\'une des trois architectures de référence plutôt que de partir de zéro.** Obsidian-centré (orienté notes, ~50K éléments), AnythingLLM-centré (orienté documents, ~100K éléments) ou stack Python + ChromaDB sur mesure (orienté ingénieurs, 1M+ éléments). Mélanger les architectures est rarement rentable — le coût d\'intégration domine.',
          '**Une PKB IA locale comporte cinq couches : capture, stockage, embeddings, récupération, interface.** La plupart des erreurs de débutant se produisent au niveau de la capture, pas du LLM. Si les éléments ne circulent pas depuis le mobile et l\'e-mail, aucune récupération ingénieuse ne sauvera le projet.',
          '**Seuil matériel : 16 Go de RAM.** En dessous, vous choisissez entre exécuter un modèle d\'embedding ou un modèle de chat — pas les deux. À 16 Go, vous pouvez exécuter Llama 3.2 3B + nomic-embed-text simultanément. À 32 Go, vous pouvez passer à Qwen3 7B ou exécuter plusieurs sessions de chat. Au-delà de 100 000 éléments, déplacez les embeddings vers un serveur domestique.',
          '**Modèles recommandés en 2026 :** chat — Llama 3.2 3B (par défaut), Phi-4 Mini (systèmes 8 Go), Qwen3 7B (qualité au-delà de 32 Go) ; embeddings — nomic-embed-text (768-dim, rapide), mxbai-embed-large (1024-dim, plus précis), bge-m3 (multilingue).',
          '**La capture est le goulot d\'étranglement, pas la récupération.** La plupart des éléments arrivent sur mobile (captures web, captures d\'écran, notes vocales, e-mails transférés). Concevez le chemin partage mobile → vault avant de régler le LLM. iOS Shortcuts → Obsidian / Working Copy / a-Shell sont les trois chemins iOS viables.',
          '**La méthode de synchronisation détermine ce qui fonctionne sur mobile.** Obsidian Sync gère proprement les index binaires d\'embeddings ; iCloud Drive les corrompt entre plateformes ; Git nécessite une discipline .gitignore et une réindexation par appareil. Choisissez la sync d\'abord, les plugins ensuite.',
          '**La sauvegarde n\'est pas optionnelle.** Trois couches : snapshot du vault (Time Machine, Backblaze, restic), historique Git du contenu en clair et un export trimestriel des embeddings + métadonnées comme chemin de reconstruction propre. Les embeddings sont régénérables, mais coûteux — sauvegardez-les aussi au-delà de 10 000 éléments.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Architectures couvertes :** Obsidian-centré, AnythingLLM-centré, stack Python + ChromaDB sur mesure.',
          '**Backend LLM :** Ollama (recommandé) — exécute les modèles de chat et d\'embedding derrière un endpoint local à `http://localhost:11434`.',
          '**Modèles de chat recommandés en 2026 :** Llama 3.2 3B (systèmes 16 Go), Phi-4 Mini (8 Go), Qwen3 7B (32 Go+).',
          '**Modèles d\'embedding recommandés en 2026 :** nomic-embed-text (768-dim, rapide), mxbai-embed-large (1024-dim, précis), bge-m3 (multilingue).',
          '**Cibles en nombre d\'éléments :** Obsidian ~50 000 notes, AnythingLLM ~100 000 documents, stack Python + ChromaDB sur mesure 1 M+.',
          '**Seuil matériel :** portable 16 Go de RAM. Au-delà de 10 000 éléments : 32 Go recommandés. Au-delà de 100 000 : serveur domestique 64 Go.',
          '**Chemins de capture mobile (iOS) :** Shortcuts → Obsidian, Shortcuts → Working Copy (Git), Shortcuts → a-Shell. Android : Tasker ou HTTP Shortcuts.',
        ],
      },
      whichArchitecture: {
        id: 'which-architecture',
        title: 'Quelle architecture construire ?',
        content:
          '**Choisissez l\'architecture adaptée à la façon dont vos connaissances arrivent déjà — pas celle qui paraît la plus puissante.** Si vous écrivez déjà des notes au quotidien, optez pour Obsidian-centré. Si vos connaissances sont surtout des documents (PDF, exports, captures web), optez pour AnythingLLM-centré. Construisez un stack Python + ChromaDB sur mesure uniquement si vous avez véritablement 100 000+ éléments ou un besoin multi-utilisateurs — le coût de maintenance est réel et rarement justifié en deçà.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Les workflows orientés notes choisissent Obsidian + Smart Connections + Copilot + Ollama ; les archives orientées documents choisissent AnythingLLM + Ollama ; les ingénieurs avec 100K+ éléments choisissent un stack Python + ChromaDB sur mesure.',
          },
          {
            type: 'plain-terms',
            text: 'Trois voies, une destination. Si vous vivez déjà dans une application de notes, Obsidian habille votre routine existante de fonctionnalités IA. Si vous accumulez surtout des PDF et des pages web, AnythingLLM est une seule application qui ingère, indexe et chatte. Si vous codez et voulez un contrôle total, Python + ChromaDB vous laisse construire exactement ce que vous voulez — mais vous le maintenez. Choisissez la voie qui correspond à votre workflow existant ; ne changez pas vos habitudes pour vous adapter à l\'architecture.',
          },
        ],
        decisionBlock: {
          title: 'Décision : quelle architecture PKB ?',
          localIf: [
            'Vous utilisez déjà Obsidian ou souhaitez un workflow orienté notes en Markdown → Obsidian-centré',
            'Vos connaissances sont surtout des PDF, exports, captures web et archives e-mail → AnythingLLM-centré',
            'Vous avez 100 000+ éléments, des besoins de schéma sur mesure ou un accès multi-utilisateurs → stack Python + ChromaDB sur mesure',
            'Vous voulez une application qui couvre capture, stockage, RAG et chat → AnythingLLM-centré',
            'Vous voulez un contrôle total sur le chunking, la récupération et le re-ranking → stack Python + ChromaDB sur mesure',
          ],
          cloudIf: [
            'Vous avez besoin d\'un raisonnement de classe GPT-5.5 à chaque requête et votre archive est petite → Notion AI ou ChatGPT avec GPT personnalisés (le stack local est ~70 % aussi capable en synthèse)',
            'Vous n\'avez pas de machine avec 16 Go+ de RAM ni de serveur domestique → PKB SaaS cloud (Mem, Reflect)',
            'Votre équipe a besoin d\'un accès multi-utilisateurs concurrent et vous ne voulez pas héberger de services → équivalent cloud',
          ],
          quick: [
            'Par défaut pour les utilisateurs orientés notes : Obsidian + Smart Connections + Copilot + Ollama',
            'Par défaut pour les utilisateurs orientés documents : AnythingLLM + Ollama',
            'Ingénieur avec 100K+ éléments : stack Python + ChromaDB + Llama 3.2 3B sur mesure',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Ne commencez pas par le stack Python sur mesure simplement parce qu\'il paraît plus puissant. Construisez d\'abord en Obsidian-centré ou AnythingLLM-centré, faites tourner pendant deux mois, identifiez la couche qui ne convient pas à votre workflow, et ne remplacez qu\'ensuite cette couche par un composant sur mesure. Tous les projets PKB démarrés « from scratch en Python » et tournant plus de six mois ont fini par converger vers une forme Obsidian ou AnythingLLM.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau comparatif des architectures',
        content:
          '**Les trois architectures de référence diffèrent sur cinq axes pertinents pour la plupart des projets : complexité d\'installation, plafond en nombre d\'éléments, sync mobile, flexibilité de capture et coût de maintenance.** La complexité d\'installation croît à peu près linéairement avec le contrôle — et le coût de maintenance aussi.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obsidian a une complexité moyenne à ~50K éléments, AnythingLLM une faible complexité à ~100K éléments, et un stack Python + ChromaDB sur mesure une complexité élevée mais monte au-delà de 1 M d\'éléments.',
          },
          {
            type: 'plain-terms',
            text: 'AnythingLLM est le plus simple à installer et monte le plus haut des deux options « clé en main » — mais il est strict sur l\'organisation des documents. Obsidian offre la couche de prise de notes la plus expressive et un écosystème de plugins actif, au prix d\'une installation un peu plus longue. Python sur mesure est sans plafond, mais vous maintenez tout : chunking, re-ranking, déduplication, sync, sauvegardes. Choisissez selon votre tolérance à la maintenance, pas seulement selon le nombre d\'éléments.',
          },
        ],
        columns: ['Architecture', 'Complexité', 'Éléments max', 'Sync mobile', 'Idéal pour'],
        rows: [
          { 'Architecture': 'Obsidian-centré', 'Complexité': 'Moyenne', 'Éléments max': '~50 000', 'Sync mobile': 'Oui (Obsidian Sync ; iCloud / Git avec restrictions)', 'Idéal pour': 'Utilisateurs orientés notes avec routine d\'écriture quotidienne' },
          { 'Architecture': 'AnythingLLM-centré', 'Complexité': 'Faible', 'Éléments max': '~100 000', 'Sync mobile': 'Limitée (web UI depuis le mobile via LAN / Tailscale)', 'Idéal pour': 'PKB orientées documents (PDF, exports, captures web)' },
          { 'Architecture': 'Python + ChromaDB sur mesure', 'Complexité': 'Élevée', 'Éléments max': '1 M+', 'Sync mobile': 'Manuelle (API + client mobile à construire)', 'Idéal pour': 'Ingénieurs voulant un contrôle total + multi-utilisateurs' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La sync mobile est l\'axe de comparaison le plus sous-estimé. AnythingLLM est techniquement plus simple à installer qu\'Obsidian, mais sur mobile cela signifie « ouvrir l\'UI web LAN dans Safari » — ce n\'est pas une expérience native. Obsidian Mobile, associé à Obsidian Sync, vous offre une application iOS / Android quasi native avec lecture hors ligne. Si la capture et la lecture mobiles comptent, pondérez Obsidian plus haut que ne le suggère le tableau.',
          },
        ],
      },
      fiveLayers: {
        id: 'five-layers',
        title: 'Les cinq couches d\'une PKB IA locale',
        content:
          '**Toute PKB IA locale comporte les mêmes cinq couches, quelle que soit l\'architecture : capture, stockage, embeddings, récupération, interface.** Les échecs viennent généralement d\'un décalage entre couches — le plus souvent une récupération sophistiquée associée à un pipeline de capture cassé que personne n\'utilise.',
        numberedItems: [
          {
            title: 'Capture',
            whyItMatters: 'Comment les éléments entrent dans le système. Web clipper, redirection e-mail, partage mobile, note vocale, copier-coller manuel. La couche la plus souvent négligée dans les projets de débutants — et celle qui détermine la survie du système au quotidien. Si la capture mobile prend plus de 5 secondes, le système reste inutilisé.',
          },
          {
            title: 'Stockage',
            whyItMatters: 'Où vivent les éléments sur le disque. Vault Markdown (Obsidian, Logseq), dossier de documents + base de données (AnythingLLM) ou système de fichiers + manifeste (Python sur mesure). Choisissez un format de stockage qui survit à un changement d\'outil — le Markdown en clair est le plus portable ; les bases binaires le moins.',
          },
          {
            title: 'Embeddings',
            whyItMatters: 'Représentations vectorielles des éléments pour la recherche sémantique. Générées par un modèle local (nomic-embed-text ou mxbai-embed-large via Ollama). Le modèle d\'embedding peut être changé plus tard, mais le coût de migration vaut « tout réembedder » — choisissez une fois, tenez-vous-y.',
          },
          {
            title: 'Récupération',
            whyItMatters: 'Comment les éléments sont retrouvés à la requête. Recherche vectorielle top-k, re-ranking optionnel, filtres de métadonnées (tags, dates, sources). L\'écart de qualité entre un top-5 naïf et un top-20-avec-re-ranker bien réglé est l\'écart entre « utile » et « magique ».',
          },
          {
            title: 'Interface',
            whyItMatters: 'Comment vous interrogez et lisez. Sidebar (Smart Connections), chat (Copilot, AnythingLLM), CLI (Python sur mesure) ou API. La plupart des utilisateurs prennent le chat par défaut — mais une sidebar « notes liées » fait remonter du matériel oublié que le chat ne trouve pas, parce que vous ne savez pas quoi demander.',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Un schéma de projet courant qui échoue : choisir la récupération la plus puissante (recherche hybride sur mesure avec re-ranking), le modèle de chat le plus intelligent (Qwen3 7B), et ignorer la capture. Trois semaines plus tard, le vault contient 47 éléments parce que rien ne circule depuis le mobile. La correction est toujours la même : simplifier la récupération, simplifier le chat, réparer la capture, et accepter que 80 % de la valeur vienne du fait que les éléments sont simplement présents dans le système.',
          },
        ],
      },
      architectureObsidian: {
        id: 'architecture-obsidian',
        title: 'Architecture A : Obsidian-centré',
        content:
          '**Obsidian + Smart Connections + Copilot for Obsidian + Ollama est l\'architecture par défaut pour les workflows orientés notes en 2026.** Elle monte proprement jusqu\'à ~50 000 notes sur un Mac M3 Pro 16 Go ou un PC équivalent, supporte la lecture mobile via Obsidian Mobile, et garde tout en Markdown en clair que vous pourrez emporter vers n\'importe quel outil futur.',
        items: [
          '**Stockage :** fichiers Markdown dans un dossier (« vault »). Texte clair, dossiers simples, pas de base de données. Survit aux migrations d\'outils.',
          '**Capture :** Obsidian Web Clipper (extension navigateur), partage mobile Obsidian (iOS / Android), e-mail vers Obsidian via Mailspike ou une recette IFTTT sur mesure, copier-coller manuel.',
          '**Embeddings :** plugin Smart Connections → Ollama à `http://localhost:11434/api/embeddings` → nomic-embed-text (par défaut) ou mxbai-embed-large (plus précis). L\'index vit dans `.smart-env/` à l\'intérieur du vault.',
          '**Récupération :** sidebar Smart Connections (vue notes liées) + mode Vault QA de Copilot for Obsidian (RAG sur le vault pour les requêtes chat). Les deux exploitent l\'index d\'embeddings.',
          '**Interface :** sidebar Smart Connections (découverte passive) + panneau chat Copilot (requêtes actives) + templates Text Generator (workflows répétables comme les résumés quotidiens).',
          '**Temps d\'installation :** ~30 min (installer Ollama, télécharger les modèles, installer trois plugins, configurer les endpoints, laisser construire l\'index initial).',
          '**Matériel :** 16 Go de RAM minimum (Llama 3.2 3B + nomic-embed-text simultanément). 32 Go recommandés au-delà de 10 000 notes. SSD fortement recommandé — la reconstruction d\'index est I/O-limitée sur HDD.',
          '**Plafond d\'éléments :** ~50 000 notes en pratique ; testé jusqu\'à 20 000 avec ré-indexation incrémentale sub-seconde. Au-delà de 50K notes, l\'index initial tourne 4–8 heures et vous devriez envisager des sous-vaults.',
          '**Idéal pour :** utilisateurs avec routine d\'écriture quotidienne, préférences Markdown-first, et désir d\'une sidebar « partenaire de pensée » qui fait remonter les notes oubliées.',
          '**Pas pour :** utilisateurs dont les connaissances sont surtout des PDF et captures web (choisir AnythingLLM-centré) ; utilisateurs voulant une seule application tout-en-un (Obsidian-centré, c\'est « Obsidian + 3 plugins + Ollama »).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour un approfondissement de la couche plugin de cette architecture (quels 5 plugins, étapes de configuration, valeurs d\'échelle de vault), voir le [guide des plugins Obsidian + LLM local](/fr/power-local-llm/local-llm-with-obsidian-2026). Cette page couvre l\'architecture ; le guide des plugins couvre la configuration.',
          },
        ],
      },
      architectureAnythingllm: {
        id: 'architecture-anythingllm',
        title: 'Architecture B : AnythingLLM-centré',
        content:
          '**AnythingLLM + Ollama est l\'option tout-en-un : capture, stockage, RAG et chat sont regroupés dans une seule application bureau ou auto-hébergée.** Elle monte jusqu\'à ~100 000 documents (mélange de PDF, captures web, exports) et c\'est le bon choix quand vos connaissances arrivent surtout sous forme de documents plutôt que de notes.',
        items: [
          '**Stockage :** base de données interne AnythingLLM (SQLite par défaut ; Postgres pour l\'auto-hébergement multi-utilisateurs). Les documents sont ingérés via l\'UI ; les originaux peuvent rester dans un dossier que vous mirroirisez.',
          '**Capture :** upload in-app (glisser des PDF / fichiers dans un workspace), extension navigateur pour les pages web, API publique pour l\'ingestion programmatique (`POST /api/v1/document/upload`), redirection e-mail via l\'intégration officielle ou un relais sur mesure.',
          '**Embeddings :** AnythingLLM utilise le fournisseur d\'embeddings que vous configurez — choisissez « Ollama » → endpoint `http://localhost:11434` → modèle `nomic-embed-text`. Embeddings stockés dans le vector store intégré (LanceDB par défaut ; ChromaDB / Pinecone optionnels).',
          '**Récupération :** RAG sur le workspace. Taille de chunk configurable, récupération top-k, re-ranking optionnel. Plusieurs workspaces permettent de partitionner par sujet (ex. « Travail », « Lecture », « Projets »).',
          '**Interface :** UI web AnythingLLM (fonctionne dans les navigateurs bureau et mobiles), API publique pour des front-ends sur mesure, endpoint compatible OpenAI pour brancher d\'autres outils sur votre PKB.',
          '**Temps d\'installation :** ~15 min (installer AnythingLLM Desktop ou Docker, le pointer sur Ollama, glisser les documents).',
          '**Matériel :** 16 Go de RAM minimum. 32 Go recommandés au-delà de 10 000 documents. AnythingLLM est plus économe en mémoire qu\'Obsidian + plugins à nombre d\'éléments égal, parce qu\'il y a un seul processus au lieu de deux.',
          '**Plafond d\'éléments :** ~100 000 documents dans un seul workspace ; partitionnez en plusieurs workspaces au-delà de 50K pour garder la latence de récupération sous ~1 sec.',
          '**Idéal pour :** utilisateurs avec archives riches en PDF, capture orientée web clipping, et préférence pour une seule application plutôt qu\'un stack de plugins. Aussi le bon choix pour les petites équipes auto-hébergeant une PKB partagée.',
          '**Pas pour :** utilisateurs voulant une surface d\'écriture orientée notes (Obsidian) ; utilisateurs voulant posséder leur stockage en Markdown clair (le vector store d\'AnythingLLM est interne).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour la mise en place pas-à-pas de la couche RAG utilisée ici (Ollama + AnythingLLM, ingestion, réglage du chunking), voir le tutoriel [RAG local sur vos PDF en 30 minutes](/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step). Pour mettre à l\'échelle au-delà des exemples jouets jusqu\'à 1 000+ PDF, voir [Chatter avec 1000+ PDF localement](/fr/power-local-llm/chat-with-1000-pdfs-locally).',
          },
        ],
      },
      architectureCustom: {
        id: 'architecture-custom',
        title: 'Architecture C : Python + ChromaDB sur mesure',
        content:
          '**Un stack Python + ChromaDB + Ollama sur mesure n\'est le bon choix que si vous avez véritablement 100 000+ éléments, des besoins multi-utilisateurs ou des contraintes de schéma que les outils prêts à l\'emploi ne peuvent modéliser.** Le coût de maintenance est réel : chunking, déduplication, re-ranking, sync, sauvegarde — vous portez tout.',
        items: [
          '**Stockage :** système de fichiers (un dossier par source : `notes/`, `pdfs/`, `web/`, `email/`) + un manifeste de métadonnées (SQLite ou JSONL). Les fichiers source restent dans des formats ouverts pour pouvoir changer la couche de récupération sans tout réingérer.',
          '**Capture :** scripts déclenchés par webhooks (web clipper → endpoint HTTP → écriture fichier), redirection e-mail → poller IMAP → écriture fichier, partage mobile → endpoint Tailscale → écriture fichier. Chaque chemin de capture est un petit service Python.',
          '**Embeddings :** ChromaDB (mode local, persistant sur disque) + embeddings Ollama via l\'endpoint compatible OpenAI. Réembedding au changement de fichier via un processus watchdog. ChromaDB monte jusqu\'à des millions de vecteurs sur une seule machine avec indexation HNSW.',
          '**Récupération :** similarité top-k ChromaDB + un re-ranker (BGE Re-ranker ou équivalent Cohere local) + filtres de métadonnées (intervalle de dates, tags, source). Recherche hybride optionnelle avec BM25 sur les chunks pour le matching de termes exacts.',
          '**Interface :** au choix : un petit service FastAPI exposant un endpoint `/v1/chat/completions` compatible OpenAI, une UI Streamlit / Gradio, un CLI, ou les trois. Mettez Open WebUI en façade pour une expérience chat soignée sans écrire de code UI.',
          '**Temps d\'installation :** ~1 jour pour une v1 fonctionnelle ; ~2 semaines d\'itération pour régler chunking, qualité de récupération et pipelines de capture sur vos données.',
          '**Matériel :** portable 32 Go de RAM pour le développement ; serveur domestique 64 Go de RAM au-delà de 100 000 éléments pour que le service d\'embedding ne concurrence pas votre portable. GPU dédié (RTX 4060 ou mieux) au-delà de 500K éléments pour le débit chat.',
          '**Plafond d\'éléments :** 1 M+ éléments en pratique avec HNSW + sharding ; le goulot d\'étranglement passe de la récupération à la fiabilité du pipeline de capture et au coût de réembedding lors des changements de schéma.',
          '**Idéal pour :** ingénieurs voulant posséder le stack, équipes avec un schéma sur mesure (ex. « chaque élément a un score de confiance, une source et un auteur ») ou utilisateurs qui atteignent les limites dures d\'Obsidian ou AnythingLLM (50K et 100K respectivement).',
          '**Pas pour :** non-ingénieurs ; toute personne sous-estimant le coût de maintenance ; utilisateurs dont le cas d\'usage est déjà couvert par une option clé en main.',
        ],
        promptExamples: [
          {
            label: 'Ingestion ChromaDB (esquisse Python)',
            text: 'import chromadb, ollama, pathlib\nclient = chromadb.PersistentClient(path="./chroma")\ncoll = client.get_or_create_collection("kb")\nfor p in pathlib.Path("vault").rglob("*.md"):\n    text = p.read_text()\n    emb = ollama.embeddings(model="nomic-embed-text", prompt=text)["embedding"]\n    coll.upsert(ids=[str(p)], embeddings=[emb], documents=[text], metadatas=[{"source": str(p)}])',
          },
          {
            label: 'Requête avec re-ranking (esquisse)',
            text: 'q = "What did I write about local RAG sync?"\nq_emb = ollama.embeddings(model="nomic-embed-text", prompt=q)["embedding"]\nhits = coll.query(query_embeddings=[q_emb], n_results=20)\n# pass hits["documents"] through a re-ranker, keep top 5\n# send top 5 + question to Llama 3.2 3B via Ollama chat endpoint',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Le mode d\'échec le plus courant des projets sur mesure : réembedder toute l\'archive à chaque changement de code parce que le schéma n\'est pas stable. Verrouillez le modèle d\'embedding et la taille de chunk avant d\'ingérer plus de ~5 000 éléments. Migrer de nomic-embed-text 768-dim vers mxbai-embed-large 1024-dim à 100K éléments coûte des heures de calcul et casse la collection ChromaDB — vous ne pouvez pas mélanger les dimensions.',
          },
        ],
      },
      capture: {
        id: 'capture',
        title: 'Pipeline de capture : web, e-mail, mobile, vocal',
        content:
          '**La couche de capture détermine la survie de votre PKB au quotidien. La plupart des connaissances arrivent en dehors du bureau — sur mobile, en e-mail, en notes vocales — et un pipeline de capture qui exige d\'ouvrir d\'abord une application bureau est un pipeline contourné.** Construisez pour les quatre flux principaux et acceptez que 80 % des éléments arrivent sur mobile.',
        items: [
          '**Web clipper (bureau + mobile) :** Obsidian Web Clipper, extension navigateur AnythingLLM, ou un bookmarklet sur mesure qui POSTe la page courante vers votre endpoint de capture. Partage mobile → extension web clipper → vault.',
          '**Redirection e-mail :** adresse dédiée (ex. `kb@votre-domaine.fr`) + poller IMAP → écriture fichier. Transférez les e-mails que vous voulez garder ; le poller gère l\'ingestion. Utilisez un préfixe par source dans le nom de fichier pour permettre le filtrage par source à la récupération.',
          '**Partage mobile :** le chemin de capture le plus utilisé. Partage iOS → Obsidian (écrit un fichier Markdown), Partage iOS → Working Copy (commit Git), Partage iOS → Shortcut sur mesure (POST vers votre API de capture). Android : HTTP Shortcuts ou Tasker.',
          '**Notes vocales :** la capture style AudioPen devient courante en 2026. Enregistrer sur le téléphone → transcrire localement avec Whisper.cpp ou via un service Whisper auto-hébergé → écrire la transcription en Markdown → embedder.',
          '**Copier-coller manuel :** le repli. Marche toujours, ne monte jamais. À utiliser pour la traîne longue.',
          '**OCR de captures d\'écran :** les captures d\'écran sont un format de capture lossy. Utilisez Apple Live Text sur iOS ou un pipeline OCR local (Tesseract, Apple Vision, EasyOCR) pour extraire le texte + écrire un fichier Markdown contenant l\'image et le texte OCR.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Auditez vos habitudes de capture existantes avant de concevoir le pipeline. Regardez ce que vous sauvegardez déjà : signets navigateur, captures d\'écran, e-mails transférés, notes vocales. La couche de capture PKB doit refléter ces flux existants — si vous prenez déjà des captures d\'écran constamment, construisez le chemin OCR ; si vous transférez déjà des e-mails à vous-même, construisez la redirection e-mail. Ajouter de nouvelles habitudes (« désormais je copie-colle manuellement chaque article dans la KB ») ne marche jamais.',
          },
        ],
      },
      mobileCapture: {
        id: 'mobile-capture',
        title: 'Capture mobile : iOS Shortcuts, Working Copy, a-Shell',
        content:
          '**iOS dispose de trois chemins de capture viables vers une PKB IA locale en 2026 : Shortcuts → Obsidian, Shortcuts → Working Copy (Git) ou Shortcuts → a-Shell (piloté par script).** Chacun correspond naturellement à l\'une des trois architectures de référence. Choisissez le chemin dont le modèle de sync correspond à votre architecture globale.',
        items: [
          '**Shortcuts → Obsidian (Obsidian-centré) :** le Shortcut Obsidian « Ajouter à la note » écrit le contenu capturé directement dans le vault. Sync via Obsidian Sync (payant, recommandé) ou iCloud Drive (gratuit, avec restrictions). Idéal pour les workflows orientés notes.',
          '**Shortcuts → Working Copy (Git) :** le contenu capturé est écrit dans un dépôt Working Copy sur l\'iPhone, puis automatiquement committé et poussé. Le bureau pull. Gratuit, robuste, fonctionne avec n\'importe quel vault Markdown. Note : Working Copy est payant (env. 22 € en achat unique). Idéal pour les vaults sync via Git.',
          '**Shortcuts → a-Shell :** a-Shell est un terminal iOS gratuit qui exécute des scripts. Construisez un Shortcut qui passe le texte capturé à un script a-Shell, qui écrit un fichier puis soit committe via `git`, soit synchronise via `rsync` sur Tailscale, soit upload vers votre endpoint de capture. Idéal pour les architectures sur mesure construites par des ingénieurs.',
          '**Équivalents Android :** Tasker + Termux + Git en pendant du chemin Working Copy iOS. HTTP Shortcuts pour le chemin endpoint sur mesure. Partage mobile Obsidian pour le chemin Obsidian.',
          '**Budget de latence :** la capture mobile doit s\'achever de bout en bout en moins de 5 secondes (partage → fichier écrit / committé / uploadé). Plus lent et l\'utilisateur ouvre l\'application une fois et plus jamais.',
          '**Capture hors ligne :** les trois chemins iOS bufferisent hors ligne (Shortcuts bufferise, Working Copy bufferise les commits, les scripts a-Shell peuvent écrire localement et synchroniser plus tard). Essentiel pour la capture en avion, dans les transports et en zones rurales.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ne construisez pas un chemin de capture mobile qui exige que le bureau soit en ligne (ex. POST vers un endpoint protégé Tailscale, joignable seulement quand votre portable est éveillé). Vous perdrez des captures pendant les réunions, le veille du portable et la nuit. Faites tourner l\'endpoint de capture soit sur un serveur domestique / NAS toujours actif, soit écrivez vers un store eventually-consistent (Obsidian Sync, Git, iCloud) qui bufferise hors ligne.',
          },
        ],
      },
      scaling: {
        id: 'scaling',
        title: 'Mise à l\'échelle : 1K, 10K, 100K éléments',
        content:
          '**La mise à l\'échelle d\'une PKB IA locale a trois régimes : sous 1 000 éléments, tout est rapide sur n\'importe quel portable moderne ; entre 1 000 et 10 000, l\'index d\'embeddings devient un artefact réel à gérer ; au-delà de 10 000 éléments, le matériel devient le goulot d\'étranglement et la fiabilité du pipeline de capture domine les résultats.** Les valeurs réalistes ci-dessous supposent un Mac M3 Pro / PC RTX 4060 avec nomic-embed-text et Llama 3.2 3B.',
        columns: ['Nombre d\'éléments', 'Architecture recommandée', 'Embedding initial', 'Matériel', 'Notes'],
        rows: [
          { 'Nombre d\'éléments': '1 000 éléments', 'Architecture recommandée': 'L\'une des trois', 'Embedding initial': '~2 min', 'Matériel': 'Portable 16 Go de RAM', 'Notes': 'Tout paraît instantané. Le choix d\'architecture dépend purement de l\'adéquation au workflow.' },
          { 'Nombre d\'éléments': '10 000 éléments', 'Architecture recommandée': 'Obsidian ou AnythingLLM', 'Embedding initial': '~25 min', 'Matériel': 'Portable 16 Go (32 Go recommandés)', 'Notes': 'Index d\'embeddings ~150–250 Mo. Réembedding sub-seconde aux modifications. Sweet spot pour la plupart des travailleurs du savoir.' },
          { 'Nombre d\'éléments': '50 000 éléments', 'Architecture recommandée': 'AnythingLLM ou Python sur mesure', 'Embedding initial': '~3 heures', 'Matériel': 'Portable 32 Go ou serveur domestique', 'Notes': 'L\'index initial tourne la nuit. Prévoir des sous-vaults / workspaces au-delà. ~1.5–2 Go pour les embeddings.' },
          { 'Nombre d\'éléments': '100 000 éléments', 'Architecture recommandée': 'AnythingLLM (multi-workspace) ou Python sur mesure', 'Embedding initial': '6–8 heures', 'Matériel': 'Minimum 32 Go ; serveur domestique préféré', 'Notes': 'Déplacer les embeddings vers un serveur domestique dédié. La fiabilité du pipeline de capture devient le mode d\'échec primaire, pas la récupération.' },
          { 'Nombre d\'éléments': '500 000+ éléments', 'Architecture recommandée': 'Python + ChromaDB sur mesure', 'Embedding initial': '24+ heures', 'Matériel': 'Serveur domestique 64 Go + GPU dédié', 'Notes': 'Sharding, déduplication et pipelines de réembedding incrémental deviennent nécessaires. Les outils clé en main ne suffisent plus.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Le coût d\'embedding initial est une facture unique. Après le premier index, seuls les éléments modifiés sont réembeddés — généralement sous une seconde par sauvegarde, même à 100K éléments. La lenteur de la première fois est réelle mais non récurrente. Faites tourner l\'index initial la nuit sur une machine branchée et oubliez-le.',
          },
        ],
      },
      backupSync: {
        id: 'backup-sync',
        title: 'Sauvegarde, versioning, sync multi-appareils',
        content:
          '**Une PKB IA locale a besoin de trois couches de sauvegarde : snapshots du vault (Time Machine, Backblaze, restic), historique Git du contenu en clair et un export trimestriel des embeddings et métadonnées comme chemin de reconstruction propre.** Les embeddings sont techniquement régénérables, mais à 100K+ éléments la régénération coûte des heures — sauvegardez-les aussi.',
        items: [
          '**Snapshots du vault (système de fichiers) :** Time Machine (macOS) ou restic (Linux) toutes les 24 heures. Backblaze ou rsync.net pour le hors-site. Capture tout, embeddings inclus.',
          '**Historique Git (contenu uniquement) :** fichiers Markdown clairs committés vers un dépôt Git (local + GitHub / Gitea privé). Ajoutez `.smart-env/`, `vector_store/` et tout autre dossier d\'index binaire à `.gitignore`. Git vous donne l\'historique par note ; les snapshots du vault donnent le rollback global.',
          '**Export d\'embeddings (trimestriel) :** exportez le vector store dans un format portable (ChromaDB → parquet, Smart Connections → JSON dump, AnythingLLM → export intégré). Gardez les deux derniers exports hors-site. Si un snapshot du vault échoue ou si l\'index d\'embeddings se corrompt, c\'est votre chemin de reconstruction rapide.',
          '**Sync multi-appareils — Obsidian-centré :** Obsidian Sync gère proprement texte clair + index binaires (chiffré de bout en bout). iCloud Drive marche pour le clair mais corrompt les index binaires entre plateformes. Git via Working Copy / Termux marche pour le clair seulement — réindexer par appareil.',
          '**Sync multi-appareils — AnythingLLM-centré :** faites tourner AnythingLLM en conteneur Docker auto-hébergé sur un serveur domestique. Tous les appareils se connectent à la même instance via LAN ou Tailscale. Pas de sync côté client.',
          '**Sync multi-appareils — Python sur mesure :** l\'architecture que vous construisez le détermine. La plupart des projets utilisent un service API central (FastAPI sur un serveur domestique) + clients qui POSTent les captures et GETent les requêtes. Tailscale fournit la couche réseau.',
          '**Migration vers une nouvelle machine :** restaurer le snapshot du vault → restaurer le dépôt Git → relancer Ollama → relancer l\'indexeur d\'embeddings. La régénération d\'embeddings est automatique si vous avez sauté l\'export ; réindexation manuelle si vous l\'avez sauvegardé mais que le format est spécifique à la plateforme.',
          '**Partage sélectif :** pour partager des parties d\'un vault (ex. un projet de recherche avec des co-auteurs), utilisez des sous-vaults ou un script d\'export par tags. Ne partagez pas tout le vault — la plupart des PKB IA locales accumulent des éléments sensibles (médicaux, financiers, personnels) qui ne doivent jamais quitter le stack local.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Testez votre restauration une fois par trimestre. La plupart des affirmations « j\'ai des sauvegardes » sont des vœux pieux — le test est « puis-je restaurer mon vault sur un portable neuf en moins de 2 heures ? » Faites le test. La première fois, vous découvrirez qu\'une des trois couches (snapshot, Git, export d\'embeddings) était mal configurée depuis six mois.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes',
        items: [
          '**Concevoir la couche de récupération avant la couche de capture.** Une recherche hybride sur mesure avec re-ranking est gaspillée sur un vault de 47 éléments. Construisez d\'abord la capture, acceptez le top-5 naïf, et n\'optimisez la récupération que lorsque le vault dépasse 1 000 éléments et que vous pouvez mesurer la qualité sur de vraies requêtes.',
          '**Mélanger les architectures.** « Obsidian pour les notes + AnythingLLM pour les PDF + Python sur mesure pour les e-mails » paraît propre mais le coût d\'intégration domine. Choisissez une architecture, acceptez ses limites, et n\'ajoutez qu\'un seul connecteur si vraiment nécessaire (ex. AnythingLLM ingérant en lecture seule un dossier de vault Obsidian).',
          '**Changer de modèle d\'embedding sans réembedder l\'archive.** Mélanger des vecteurs nomic-embed-text 768-dim et mxbai-embed-large 1024-dim dans le même store casse silencieusement la récupération. Choisissez un modèle d\'embedding + dimension, verrouillez-le, et ne changez qu\'avec un réembedding complet de l\'archive.',
          '**Ignorer la sauvegarde de l\'index d\'embeddings au-delà de 10 000 éléments.** « Je peux le régénérer » est vrai mais la régénération prend des heures. Intégrez le store d\'embeddings à votre stratégie de sauvegarde au-delà de 10K éléments.',
          '**Concevoir pour le bureau alors que 80 % de la capture se fait sur mobile.** Une PKB sans chemin de capture mobile reste inutilisée. Testez le flux de capture mobile dès le premier jour — le partage vers le vault doit s\'achever en moins de 5 secondes.',
          '**Compter sur iCloud Drive pour les index d\'embeddings binaires.** iCloud gère le clair correctement ; les index binaires (Smart Connections `.smart-env/`, vector store AnythingLLM) se corrompent entre plateformes. Utilisez Obsidian Sync, une instance auto-hébergée, ou acceptez la réindexation par appareil.',
          '**Ne pas partitionner à 100K éléments.** Un seul workspace / vault au-delà de 100K éléments a une latence de récupération de l\'ordre de la seconde. Partitionnez par sujet (Travail, Lecture, Projets) en plusieurs workspaces ou sous-vaults ; interrogez chacun séparément ou via un routeur.',
          '**Sous-estimer les enjeux de conformité.** Les bases personnelles accumulent inévitablement des données sensibles (correspondances de clients, patients, collègues, notes financières et médicales). La CNIL recommande explicitement les solutions IA locales pour le traitement de données professionnelles sensibles (médical, financier, juridique) — l\'inférence locale élimine le besoin de contractualiser un sous-traitant tiers, simplifiant la conformité.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Obsidian — [obsidian.md](https://obsidian.md) et [help.obsidian.md](https://help.obsidian.md) (structure des vaults, architecture de sync mobile, documentation des plugins).',
          'AnythingLLM — [github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) (application RAG open-source auto-hébergée).',
          'Ollama — [ollama.com](https://ollama.com) et [github.com/ollama/ollama](https://github.com/ollama/ollama) (runtime LLM local ; endpoints chat + embedding).',
          'ChromaDB — [trychroma.com](https://www.trychroma.com) et [github.com/chroma-core/chroma](https://github.com/chroma-core/chroma) (base vectorielle locale open-source).',
          'Working Copy — [workingcopy.app](https://workingcopy.app) (client Git iOS pour les pipelines de capture mobile).',
          'a-Shell — [holzschu.github.io/a-Shell_iOS/](https://holzschu.github.io/a-Shell_iOS/) (terminal iOS gratuit pour la capture mobile pilotée par script).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Comment capturer des pages web dans ma base de connaissances ?',
            a: 'Trois options classées par friction. (1) Web clipper en extension navigateur — Obsidian Web Clipper ou extension AnythingLLM écrit la page courante directement dans votre vault / workspace. (2) Partage mobile — partager Safari / Chrome → Obsidian (écrit un fichier Markdown) ou → Working Copy (commit Git) ou → Shortcut sur mesure (POST vers votre API de capture). (3) Bookmarklet — pour les navigateurs sans extension ; POSTe l\'URL courante + sélection vers votre endpoint de capture. Le partage mobile est en pratique le chemin le plus utilisé — concevez-le en premier.',
          },
          {
            q: 'Puis-je transférer des e-mails dans le système ?',
            a: 'Oui. Configurez une adresse dédiée (ex. un alias Fastmail / Migadu `kb@votre-domaine.fr`) et faites tourner sur votre serveur domestique ou portable un poller IMAP qui télécharge les nouveaux e-mails et écrit un fichier Markdown par e-mail dans votre vault. Utilisez un préfixe d\'adresse expéditrice dans le nom de fichier pour permettre le filtrage par expéditeur. AnythingLLM a une intégration e-mail native ; les utilisateurs Obsidian construisent typiquement le poller IMAP eux-mêmes ou utilisent des alternatives à IFTTT / Zapier comme n8n.',
          },
          {
            q: 'Comment synchroniser bureau et mobile ?',
            a: 'Cela dépend de l\'architecture. Obsidian-centré : Obsidian Sync (payant, gère proprement les index binaires), iCloud Drive (gratuit, clair seulement — réindexer par appareil) ou Git via Working Copy (gratuit + paiement unique Working Copy, clair seulement — réindexer par appareil). AnythingLLM-centré : faites tourner AnythingLLM en Docker sur un serveur domestique, tous les appareils se connectent via LAN ou Tailscale — pas de sync côté client. Python sur mesure : construisez un service API central sur un serveur domestique ; les clients POSTent les captures et GETent les requêtes.',
          },
          {
            q: 'Faut-il un grand vault ou plusieurs par sujet ?',
            a: 'Un seul vault jusqu\'à ~50 000 éléments. Au-delà de 50K, séparez par sujet (Travail, Lecture, Projets, Personnel) pour deux raisons : la latence de récupération reste sous ~1 sec, et les fuites involontaires entre contextes (ex. notes personnelles apparaissant dans des requêtes pro) deviennent possibles à grande échelle. Séparer plus tôt que 50K est prématuré — vous perdez les connexions cross-domaine fortuites qui sont une valeur principale d\'une PKB.',
          },
          {
            q: 'À quelle fréquence faut-il réembedder pour la précision ?',
            a: 'Jamais pour cause de « dérive de précision » — les embeddings ne se dégradent pas. Réembeddez seulement quand vous changez de modèle d\'embedding (ex. mise à niveau de nomic-embed-text vers mxbai-embed-large pour une meilleure récupération sur du contenu technique). Les trois architectures gèrent automatiquement le réembedding incrémental aux changements de fichiers ; vous ne le planifiez pas. L\'exception : les stacks Python sur mesure où vous contrôlez l\'indexeur — là, le réembedding incrémental piloté par watchdog à la sauvegarde est la norme.',
          },
          {
            q: 'Puis-je mettre ma base de connaissances sous contrôle de version ?',
            a: 'Oui pour le contenu en clair (vault Markdown → dépôt Git, local + GitHub / Gitea privé). Ajoutez les dossiers d\'index binaires (`.smart-env/`, `vector_store/`, répertoire de persistance ChromaDB) à `.gitignore` — ils gonflent l\'historique et provoquent des conflits de merge. Git donne l\'historique par note ; les snapshots du vault (Time Machine, restic) donnent le rollback global. Les deux couches, pas l\'une ou l\'autre.',
          },
          {
            q: 'Comment gérer les PDF dans ce système ?',
            a: 'Obsidian-centré : stockez les PDF à côté des notes Markdown ; Smart Connections n\'embedde pas le contenu PDF directement — extrayez d\'abord le texte (ex. via le plugin PDF++ ou un script de prétraitement écrivant un résumé Markdown à côté de chaque PDF). AnythingLLM-centré : glissez les PDF directement dans un workspace ; AnythingLLM gère parsing PDF et chunking automatiquement. Python sur mesure : utilisez `pypdf` ou `pdfplumber` pour extraire le texte dans votre pipeline d\'ingestion, puis embeddez le texte extrait. AnythingLLM est l\'option avec le moins de friction pour les archives riches en PDF.',
          },
          {
            q: 'Puis-je partager des parties de ma KB de manière sélective ?',
            a: 'Oui, mais concevez-le dès le premier jour. Utilisez des sous-vaults (Obsidian) ou des workspaces (AnythingLLM) pour garder les contenus « partageables » et « privés » dans des stores séparés. Pour un partage ponctuel, construisez un script d\'export par tags qui extrait les éléments par tag (ex. `#shareable`) dans un bundle Markdown portable. Ne partagez pas tout le vault — la plupart des PKB IA locales accumulent des éléments sensibles (médicaux, financiers, correspondance personnelle) qui ne doivent jamais quitter le stack local.',
          },
          {
            q: 'Quelle est la meilleure stratégie de sauvegarde ?',
            a: 'Trois couches : (1) snapshot système de fichiers toutes les 24 heures (Time Machine / restic) avec copie hors-site (Backblaze / rsync.net) ; (2) historique Git du contenu en clair pour la récupération par note ; (3) export trimestriel des embeddings + métadonnées comme chemin de reconstruction rapide. Testez la restauration une fois par trimestre — « puis-je reconstruire mon vault sur un portable neuf en moins de 2 heures ? » Le premier test révèle généralement qu\'une des trois couches était mal configurée.',
          },
          {
            q: 'Comment migrer vers un nouvel ordinateur ?',
            a: 'Restaurer le snapshot du vault → installer Ollama et télécharger les mêmes modèles → installer Obsidian / AnythingLLM / votre stack Python sur mesure → relancer l\'indexeur d\'embeddings. Avec Obsidian Sync ou un AnythingLLM auto-hébergé, la migration se résume à « installer le client et se connecter » — pas de restauration manuelle. Sans cela, prévoyez ~30 min pour un vault de 10K éléments, ~2 heures pour 50K, et la nuit au-delà de 100K si vous avez sauté l\'étape d\'export d\'embeddings.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Obsidian + LLM local : 5 plugins qui transforment votre vault en second cerveau (2026)](/fr/power-local-llm/local-llm-with-obsidian-2026) — approfondissement de la couche plugin de l\'Architecture A.',
          '[LLM local avec Logseq et Joplin](/fr/power-local-llm/local-llm-with-logseq-and-joplin) — couches de stockage alternatives pour la PKB si Obsidian n\'est pas votre choix.',
          '[Chatter avec 1000+ PDF localement : RAG au-delà des exemples jouets](/fr/power-local-llm/chat-with-1000-pdfs-locally) — mise à l\'échelle de la couche RAG au-delà de 1 000 éléments, valable pour les trois architectures.',
          '[RAG local sur vos PDF en 30 minutes (Ollama + AnythingLLM)](/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step) — tutoriel d\'implémentation RAG pour la couche de récupération de l\'Architecture B.',
          '[Meilleurs modèles d\'embedding pour le RAG local (2026)](/fr/power-local-llm/best-embedding-models-local-rag-2026) — choix du modèle d\'embedding (nomic-embed-text vs mxbai-embed-large vs bge-m3) pour chacune des trois architectures.',
          '[RAG expliqué](/fr/prompt-engineering/rag-explained) — autorité conceptuelle pour la couche de récupération.',
          '[Guide matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026) — dimensionnement matériel pour seuil 16 Go, 32 Go au-delà de 10K, serveur domestique au-delà de 100K.',
          '[Annuaire logiciels LLM local 2026](/fr/power-local-llm/local-llm-software-directory-2026) — listes pour Ollama, ChromaDB, AnythingLLM, Obsidian et autres composants du stack.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'ローカルAIで個人ナレッジベースを構築する: 2026年スタックガイド',
    seoTitle: 'ローカルAI個人ナレッジベース 2026 スタックガイド',
    intro:
      'ローカルAIで構築する個人ナレッジベース (PKB) は、2026年時点で5つのレイヤーから成ります: キャプチャ (Web Clipper、メール転送、モバイル共有シート)、ストレージ (Markdown vaultまたはドキュメントフォルダ)、Embedding (Ollama経由のローカルモデル)、検索 (RAG)、インターフェース (チャットまたはセマンティック検索)。実際のビルドの約95%は3つのアーキテクチャでカバーされます — Obsidian中心型 (ノート優先、約50,000アイテムまで拡張)、AnythingLLM中心型 (ドキュメント優先、約100,000アイテムまで拡張)、独自Python + ChromaDBスタック (エンジニア向け、100万アイテム以上に拡張可能)。ハードウェアの最低要件は16 GB RAMのノートPC; 10,000アイテムを超える場合は32 GBを想定してください。最も重要なスケーリング判断はLLMではなく — 知識が実際に最も多く到着するモバイルでの日常使用にキャプチャパイプラインが耐えられるかどうかです。',
    metaDescription:
      'ローカルAI個人ナレッジベース 2026: 3つのアーキテクチャ (Obsidian、AnythingLLM、Python + ChromaDB) を比較。100,000以上のアイテムまで拡張。Capture、RAG、同期、バックアップ。',
    twitterDescription:
      '2026年のローカルAI PKBアーキテクチャ3つ: Obsidian (~50K)、AnythingLLM (~100K)、Python + ChromaDB (1M+)。Capture、RAG、モバイル同期、バックアップ、スケーリング。',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Qwen3 7B',
      'nomic-embed-text',
      'mxbai-embed-large',
      'bge-m3',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16 GB unified memory最低、10,000アイテム以上で32 GB推奨)',
      'PC with RTX 3060 12 GB or RTX 4060 8 GB',
      'PC 32 GB RAM (大規模vault向けCPU-onlyフォールバック)',
      'ホームサーバー / ミニPC 64 GB RAM (100,000アイテム以上のカスタムPythonスタック)',
    ],
    audience:
      'ナレッジワーカー、研究者、ライター、エンジニアで、ノート、ブックマーク、メール、ドキュメント (典型的には1,000〜100,000アイテム) からなるプライベートなAI検索可能アーカイブを、コンテンツをクラウドサービスに送信せずに構築したい方。',
    readTime: '15分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカルAI個人ナレッジベース',
    targetKeywords: [
      'ローカルAI 個人ナレッジベース',
      'ローカルLLM セカンドブレイン',
      'プライベート ナレッジベース AI',
      'ローカルRAG ナレッジベース',
      'セルフホスト AIナレッジベース',
      '個人ナレッジベース 2026',
    ],
    leadAnswerBlock:
      '**ローカルAI個人ナレッジベースは2026年時点で5つのレイヤー (キャプチャ、ストレージ、Embedding、検索、インターフェース) から成り、ゼロから設計するのではなく3つの参照アーキテクチャのいずれかを選ぶべきです。** 毎日ノートを書き、vault全体のセマンティック検索を望むなら、Obsidian + Smart Connections + Copilot for Obsidian + Ollamaを選択してください; これは16 GB MacのM3 ProまたはPCで約50,000ノートまで安定して拡張します。知識の大半がノートではなくドキュメント (PDF、エクスポート、Webクリッピング) なら、AnythingLLM + Ollamaを選択してください; これは約100,000ドキュメントまで拡張し、キャプチャ、RAG、チャットを1つのアプリにまとめます。100,000+アイテム、マルチユーザーアクセス、または特定のスキーマニーズがある場合のみ、独自のPython + ChromaDB + Llama 3.2 3Bスタックを構築してください — メンテナンスコストは現実です。3つすべての本当のボトルネックはキャプチャです: ほとんどの知識はモバイルで到着し (Webページ、スクリーンショット、音声メモ、転送メール)、モバイルキャプチャパスのないスタックは、検索がどれほど巧妙でも放置されます。ハードウェア最低要件: 16 GB RAM; 10,000アイテム以上で32 GB計画。100,000アイテム以上ではEmbeddingをホームサーバーに移してください。',
    quickAnswerTop: {
      ja: {
        question: '2026年のローカルAI個人ナレッジベースに最適なアーキテクチャは?',
        answer:
          'ほとんどのユーザー向け: Obsidian + Smart Connections + Copilot for Obsidian + Ollama (チャット用Llama 3.2 3B、Embedding用nomic-embed-text)。16 GB Macで約50,000ノートまで拡張。ドキュメント中心のアーカイブ向け: AnythingLLM + Ollamaを1つのアプリで、約100,000ドキュメントまで拡張。エンジニアおよび100,000+アイテムのvault向け: Python + ChromaDB + Llama 3.2 3Bのカスタムスタック、キャプチャ・Embedding・チャットサービスを分離。ハードウェア最低要件: 16 GB RAM; 10,000以上で32 GB、100,000以上でホームサーバー。キャプチャが本当のスケーリングボトルネックです — LLMを最適化する前に、モバイル共有シート、Web Clipper、メール転送を設計してください。',
        bullets: [
          'Obsidian中心型 — ノート優先のワークフローに最適、約50,000ノートまで拡張、最低16 GB RAM。',
          'AnythingLLM中心型 — ドキュメント中心のPKB (PDF、エクスポート) に最適、約100,000ドキュメントまで拡張、オールインワンアプリ。',
          'カスタムPython + ChromaDBスタック — エンジニアに最適、100万アイテム以上まで拡張、自己管理サービスが必要。',
          '2026年の推奨チャットモデル: 16 GBシステム向けLlama 3.2 3B、8 GB向けPhi-4 Mini、32 GB+の品質向けQwen3 7B。',
          '推奨Embeddingモデル: nomic-embed-text (768次元、高速) またはmxbai-embed-large (1024次元、より精密); 多言語アーカイブにはbge-m3。',
          'ハードウェア最低要件: 16 GB RAMノートPC; 10,000アイテム以上で32 GB推奨; 100,000以上でホームサーバー64 GB。',
          'キャプチャがボトルネック: ほとんどのPKBアイテムはモバイルでキャプチャされ (Webページ、スクリーンショット、音声メモ)、デスクトップで照会されます。iOS Shortcuts → Obsidian、Working Copy (Git)、a-Shellの3つがモバイルキャプチャパス。',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: 'どのアーキテクチャを構築すべきか?', anchor: '#which-architecture' },
      { label: 'アーキテクチャ比較表', anchor: '#comparison-table' },
      { label: 'ローカルAI PKBの5つのレイヤー', anchor: '#five-layers' },
      { label: 'アーキテクチャA: Obsidian中心型', anchor: '#architecture-obsidian' },
      { label: 'アーキテクチャB: AnythingLLM中心型', anchor: '#architecture-anythingllm' },
      { label: 'アーキテクチャC: カスタムPython + ChromaDB', anchor: '#architecture-custom' },
      { label: 'キャプチャパイプライン: Web、メール、モバイル、音声', anchor: '#capture' },
      { label: 'モバイルキャプチャ: iOS Shortcuts、Working Copy、a-Shell', anchor: '#mobile-capture' },
      { label: 'スケーリング: 1K、10K、100Kアイテム', anchor: '#scaling' },
      { label: 'バックアップ、バージョン管理、マルチデバイス同期', anchor: '#backup-sync' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: '出典', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**ゼロから設計するのではなく3つの参照アーキテクチャのいずれかを選択してください。** Obsidian中心型 (ノート優先、~50Kアイテム)、AnythingLLM中心型 (ドキュメント優先、~100Kアイテム)、カスタムPython + ChromaDBスタック (エンジニア向け、1M+アイテム)。アーキテクチャを混ぜることはまれにしか割に合いません — 統合コストが支配的になります。',
          '**ローカルAI PKBは5つのレイヤーから成ります: キャプチャ、ストレージ、Embedding、検索、インターフェース。** 初心者の失敗の多くはLLMレイヤーではなくキャプチャレイヤーで起こります。アイテムがモバイルとメールからシステムに流入しない場合、巧妙な検索もビルドを救えません。',
          '**ハードウェア最低要件: 16 GB RAM。** これ未満では、Embeddingモデルとチャットモデルのどちらか一方しか実行できません — 両方は無理です。16 GBではLlama 3.2 3B + nomic-embed-textを並列実行できます。32 GBではQwen3 7Bにアップグレードしたり、複数チャットセッションを実行できます。100,000アイテム以上ではEmbeddingをホームサーバーに移してください。',
          '**2026年の推奨モデル:** チャット — Llama 3.2 3B (デフォルト)、Phi-4 Mini (8 GBシステム)、Qwen3 7B (32 GB+の品質); Embedding — nomic-embed-text (768次元、高速)、mxbai-embed-large (1024次元、より精密)、bge-m3 (多言語)。',
          '**キャプチャがスケーリングのボトルネックで、検索ではありません。** ほとんどの知識アイテムはモバイルで到着します (Webクリッピング、スクリーンショット、音声メモ、転送メール)。LLMをチューニングする前に、モバイル共有シート → vaultのパスを設計してください。iOS Shortcuts → Obsidian / Working Copy / a-Shellが3つの実用的なiOSパスです。',
          '**同期方法がモバイルで何が動くかを決定します。** Obsidian Syncはバイナリ Embeddingインデックスをきれいに処理します; iCloud Driveはプラットフォーム間で破損させます; Gitは.gitignore規律とデバイスごとの再インデックスを必要とします。同期を先に選択し、プラグインを後にしてください。',
          '**バックアップは必須です。** 3つのレイヤー: vaultスナップショット (Time Machine、Backblaze、restic)、平文コンテンツのGit履歴、Embedding + メタデータの四半期エクスポートをクリーンな再構築パスとして。Embeddingは再生成可能ですが高価です — 10,000アイテム以上ではこれもバックアップしてください。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**カバーするアーキテクチャ:** Obsidian中心型、AnythingLLM中心型、カスタムPython + ChromaDBスタック。',
          '**LLMバックエンド:** Ollama (推奨) — チャットモデルとEmbeddingモデルを1つのローカルエンドポイント `http://localhost:11434` の背後で実行。',
          '**2026年の推奨チャットモデル:** Llama 3.2 3B (16 GBシステム)、Phi-4 Mini (8 GB)、Qwen3 7B (32 GB+)。',
          '**2026年の推奨Embeddingモデル:** nomic-embed-text (768次元、高速)、mxbai-embed-large (1024次元、精密)、bge-m3 (多言語)。',
          '**アイテム数の目標:** Obsidian約50,000ノート、AnythingLLM約100,000ドキュメント、カスタムPython + ChromaDBスタック1M+。',
          '**ハードウェア最低要件:** 16 GB RAMノートPC。10,000アイテム以上: 32 GB推奨。100,000アイテム以上: 64 GBホームサーバー。',
          '**モバイルキャプチャパス (iOS):** Shortcuts → Obsidian、Shortcuts → Working Copy (Git)、Shortcuts → a-Shell。Android: TaskerまたはHTTP Shortcuts。',
        ],
      },
      whichArchitecture: {
        id: 'which-architecture',
        title: 'どのアーキテクチャを構築すべきか?',
        content:
          '**最も強力に聞こえるアーキテクチャではなく、知識がすでに到着している方法に合うアーキテクチャを選択してください。** すでに毎日ノートを書いているなら、Obsidian中心型を構築します。知識の大半がドキュメント (PDF、エクスポート、Webクリッピング) であれば、AnythingLLM中心型を構築します。100,000+アイテムやマルチユーザーアクセスが本当に必要な場合のみ、カスタムPython + ChromaDBスタックを構築してください — メンテナンスコストは現実で、その閾値以下では正当化されにくいです。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ノート優先のワークフローはObsidian + Smart Connections + Copilot + Ollamaを選び; ドキュメント中心のアーカイブはAnythingLLM + Ollamaを選び; 100K+アイテムのエンジニアはカスタムPython + ChromaDBスタックを選びます。',
          },
          {
            type: 'plain-terms',
            text: 'このセクションでは、3つの道、1つの目的地という考え方で説明します。すでにノートアプリで生活しているなら、Obsidianが既存の習慣にAI機能をかぶせます。主にPDFとWebページを集めているなら、AnythingLLMが取り込み、インデックス化、チャットを1つのアプリで行います。コードを書き、完全な制御を望むなら、Python + ChromaDBで欲しいものを正確に構築できます — ただしメンテナンスは自分でします。既存のワークフローに合う道を選んでください; アーキテクチャに合わせて習慣を変えないでください。',
          },
        ],
        decisionBlock: {
          title: '判断: どのPKBアーキテクチャ?',
          localIf: [
            'すでにObsidianを使っている、またはMarkdownファイルでノート優先のワークフローを望む → Obsidian中心型',
            '知識の大半がPDF、エクスポート、Webクリッピング、メールアーカイブ → AnythingLLM中心型',
            '100,000+アイテム、カスタムスキーマ要件、またはマルチユーザーアクセスが必要 → カスタムPython + ChromaDBスタック',
            'キャプチャ、ストレージ、RAG、チャットを1つのアプリでカバーしたい → AnythingLLM中心型',
            'チャンキング、検索、再ランク付けを完全にコントロールしたい → カスタムPython + ChromaDBスタック',
          ],
          cloudIf: [
            'すべてのクエリでGPT-5.5クラスの推論が必要で、アーカイブが小さい → Notion AIまたはChatGPT with Custom GPTs (ローカルスタックは合成で約70%の能力)',
            '16 GB+ RAMのマシンもホームサーバーもない → クラウドSaaS PKB (Mem、Reflect)',
            'チームに同時マルチユーザーアクセスが必要で、サービスをホストしたくない → クラウド相当',
          ],
          quick: [
            'ノート優先ユーザーのデフォルト: Obsidian + Smart Connections + Copilot + Ollama',
            'ドキュメント中心ユーザーのデフォルト: AnythingLLM + Ollama',
            '100K+アイテムのエンジニア: カスタムPython + ChromaDB + Llama 3.2 3Bスタック',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'より強力に聞こえるという理由だけでカスタムPythonスタックから始めないでください。まずObsidian中心型またはAnythingLLM中心型を構築し、2か月運用し、ワークフローに合わないレイヤーを特定してから、そのレイヤーだけをカスタムコンポーネントに置き換えてください。「Pythonでゼロから」始めて6か月以上稼働したPKBプロジェクトはすべて、結局ObsidianまたはAnythingLLMの形に収束しました。',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'アーキテクチャ比較表',
        content:
          '**3つの参照アーキテクチャは、ほとんどのビルダーに重要な5つの軸で異なります: セットアップの複雑さ、アイテム数の上限、モバイル同期、キャプチャの柔軟性、メンテナンスの負担。** セットアップの複雑さはコントロールにほぼ比例して増加します — そしてメンテナンスコストも同様です。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obsidianは~50Kアイテムで中程度の複雑さ、AnythingLLMは~100Kアイテムで低複雑さ、カスタムPython + ChromaDBスタックは高複雑さですが100万アイテム以上に拡張します。',
          },
          {
            type: 'plain-terms',
            text: 'AnythingLLMはセットアップが最も簡単で、2つの「すぐに使える」オプションの中で最も拡張します — ただしドキュメントの整理方法に強い意見を持ちます。Obsidianは最も表現力豊かなノートレイヤーとアクティブなプラグインエコシステムを提供しますが、セットアップ作業がやや増えます。カスタムPythonは無制限ですが、すべてを自分でメンテナンスします: チャンキング、再ランク付け、重複排除、同期、バックアップ。アイテム数だけでなく、メンテナンスへの忍耐力で選択してください。',
          },
        ],
        columns: ['アーキテクチャ', 'セットアップ複雑さ', '最大アイテム数', 'モバイル同期', '最適な用途'],
        rows: [
          { 'アーキテクチャ': 'Obsidian中心型', 'セットアップ複雑さ': '中', '最大アイテム数': '~50,000', 'モバイル同期': 'はい (Obsidian Sync; iCloud / Gitは制限あり)', '最適な用途': '日常的な執筆習慣を持つノート優先のパワーユーザー' },
          { 'アーキテクチャ': 'AnythingLLM中心型', 'セットアップ複雑さ': '低', '最大アイテム数': '~100,000', 'モバイル同期': '限定的 (LAN / Tailscale経由でモバイルからWeb UI)', '最適な用途': 'ドキュメント中心のPKB (PDF、エクスポート、Webクリッピング)' },
          { 'アーキテクチャ': 'カスタムPython + ChromaDB', 'セットアップ複雑さ': '高', '最大アイテム数': '1M+', 'モバイル同期': '手動 (独自API + モバイルクライアントを構築)', '最適な用途': '完全な制御 + マルチユーザーを望むエンジニア' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'モバイル同期は最も過小評価されている比較軸です。AnythingLLMはObsidianより技術的にセットアップが簡単ですが、モバイルでは「SafariでLAN Web UIを開く」ことを意味します — ネイティブな体験ではありません。Obsidian Mobileは、Obsidian Syncと組み合わせると、オフライン読み込みのできるほぼネイティブなiOS / Androidアプリを提供します。モバイルでのキャプチャと読み込みが重要なら、表が示唆するよりObsidianを高く評価してください。',
          },
        ],
      },
      fiveLayers: {
        id: 'five-layers',
        title: 'ローカルAI PKBの5つのレイヤー',
        content:
          '**すべてのローカルAI PKBは、アーキテクチャに関係なく同じ5つのレイヤーを持ちます: キャプチャ、ストレージ、Embedding、検索、インターフェース。** 失敗は通常、1つのレイヤーが他とミスマッチしているために起こります — 最も多いのは、誰も使わない壊れたキャプチャパイプラインと組み合わされた高度な検索レイヤーです。',
        numberedItems: [
          {
            title: 'キャプチャ',
            whyItMatters: 'アイテムがシステムに入る方法。Web Clipper、メール転送、モバイル共有シート、音声メモ、手動貼り付け。初心者ビルドで最もスキップされるレイヤー — そしてシステムが日常使用に耐えるかを決定するレイヤー。モバイルでキャプチャに5秒以上かかる場合、システムは放置されます。',
          },
          {
            title: 'ストレージ',
            whyItMatters: 'アイテムがディスク上に存在する場所。Markdown vault (Obsidian、Logseq)、ドキュメントフォルダ + データベース (AnythingLLM)、またはファイルシステム + マニフェスト (カスタムPython)。ツール変更を生き延びる保存形式を選択してください — 平文Markdownが最も移植可能; バイナリデータベースは最も移植不可。',
          },
          {
            title: 'Embedding',
            whyItMatters: 'セマンティック検索に使用されるアイテムのベクトル表現。ローカルモデル (Ollama経由のnomic-embed-textまたはmxbai-embed-large) で生成。Embeddingモデルは後で変更可能ですが、移行コストは「すべて再Embedding」です — 一度選んで貫いてください。',
          },
          {
            title: '検索',
            whyItMatters: 'クエリ時にアイテムを見つける方法。Top-kベクトル検索、オプションの再ランク付け、オプションのメタデータフィルター (タグ、日付、ソース)。素朴なtop-5とチューニングされたtop-20-with-rerankerの品質差は「便利」と「魔法」の差です。',
          },
          {
            title: 'インターフェース',
            whyItMatters: 'クエリと閲覧の方法。サイドバー (Smart Connections)、チャット (Copilot、AnythingLLM)、CLI (カスタムPython)、またはAPI。ほとんどのユーザーはデフォルトでチャットに頼りますが — 「関連ノート」サイドバーは、何を尋ねるべきかわからない忘れた素材を浮上させます。',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: '失敗するよくあるビルドパターン: 最も強力な検索 (再ランク付き独自ハイブリッド検索)、最も賢いチャットモデル (Qwen3 7B)、そしてキャプチャを無視。3週間後、vaultには47アイテムしかありません — モバイルから何も流入していないからです。修正は常に同じ: 検索を簡素化、チャットを簡素化、キャプチャを修正、そして価値の80%はアイテムがシステムに存在することから来ると受け入れる。',
          },
        ],
      },
      architectureObsidian: {
        id: 'architecture-obsidian',
        title: 'アーキテクチャA: Obsidian中心型',
        content:
          '**Obsidian + Smart Connections + Copilot for Obsidian + Ollamaは、2026年のノート優先ワークフローのデフォルトアーキテクチャです。** 16 GB Mac M3 ProまたはPCで約50,000ノートまで安定して拡張し、Obsidian Mobile経由でモバイル読み込みをサポートし、すべてを将来のどのツールにも持ち運べる平文Markdownで保持します。',
        items: [
          '**ストレージ:** フォルダ (「vault」) 内のMarkdownファイル。平文、シンプルなフォルダ、データベースなし。ツール移行に耐えます。',
          '**キャプチャ:** Obsidian Web Clipper (ブラウザ拡張)、Obsidian Mobile共有シート (iOS / Android)、Mailspike経由またはカスタムIFTTTレシピでのObsidianへのメール転送、手動貼り付け。',
          '**Embedding:** Smart Connectionsプラグイン → `http://localhost:11434/api/embeddings` のOllama → nomic-embed-text (デフォルト) またはmxbai-embed-large (より精密)。インデックスはvault内の `.smart-env/` に存在します。',
          '**検索:** Smart Connectionsサイドバー (関連ノートビュー) + Copilot for Obsidian Vault QAモード (チャットクエリ用のvault上のRAG)。両方ともEmbeddingインデックスを使用します。',
          '**インターフェース:** Smart Connectionsサイドバー (受動的発見) + Copilotチャットパネル (能動的クエリ) + Text Generatorテンプレート (日次サマリーなど反復可能なワークフロー)。',
          '**セットアップ時間:** ~30分 (Ollamaインストール、モデルプル、3つのプラグインインストール、エンドポイント設定、初期インデックス構築)。',
          '**ハードウェア:** 16 GB RAM最低 (Llama 3.2 3B + nomic-embed-text並列)。10,000ノート以上で32 GB推奨。SSD強く推奨 — インデックス再構築はHDDではI/O律速。',
          '**アイテム数の上限:** ~50,000ノート実用; 20,000まで秒未満の増分再インデックスでテスト済み。50K+ノートで初期インデックスが4〜8時間かかり、サブvaultを検討すべきです。',
          '**最適な用途:** 日常的な執筆習慣、Markdown優先の好み、忘れたノートを浮上させる「思考パートナー」サイドバーへの欲求を持つユーザー。',
          '**不向き:** 知識の大半がPDFとWebクリッピングのユーザー (AnythingLLM中心型を選択); 1つのオールインワンアプリを望むユーザー (Obsidian中心型は「Obsidian + 3プラグイン + Ollama」)。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'このアーキテクチャのプラグインレイヤーの詳細 (どの5つのプラグイン、設定手順、vault規模の数値) については、[Obsidian + ローカルLLMプラグインガイド](/ja/power-local-llm/local-llm-with-obsidian-2026) を参照してください。このページはアーキテクチャをカバーし、プラグインガイドは設定をカバーします。',
          },
        ],
      },
      architectureAnythingllm: {
        id: 'architecture-anythingllm',
        title: 'アーキテクチャB: AnythingLLM中心型',
        content:
          '**AnythingLLM + Ollamaはオールインワンオプションです: キャプチャ、ストレージ、RAG、チャットが1つのデスクトップまたはセルフホスト型アプリにバンドルされています。** 約100,000ドキュメント (PDF、Webクリッピング、エクスポートの混合) まで拡張し、知識がノートではなく主にドキュメントとして到着する場合の正しい選択です。',
        items: [
          '**ストレージ:** AnythingLLM内部データベース (デフォルトSQLite; マルチユーザーセルフホスト用にPostgres)。ドキュメントはUI経由で取り込まれます; 元ファイルはミラーリングするフォルダに残せます。',
          '**キャプチャ:** アプリ内アップロード (PDF / ファイルをワークスペースにドラッグ)、Webページ用ブラウザ拡張、プログラム取り込み用パブリックAPI (`POST /api/v1/document/upload`)、公式統合またはカスタムリレー経由のメール転送。',
          '**Embedding:** AnythingLLMは設定したEmbeddingプロバイダーを使用 — 「Ollama」を選択 → エンドポイント `http://localhost:11434` → モデル `nomic-embed-text`。Embeddingは内蔵ベクトルストア (デフォルトLanceDB; ChromaDB / Pineconeオプション) に保存されます。',
          '**検索:** ワークスペース上のRAG。設定可能なチャンクサイズ、top-k検索、オプションの再ランク付け。複数のワークスペースでトピック (「仕事」、「読書」、「プロジェクト」など) ごとに分割可能。',
          '**インターフェース:** AnythingLLM Web UI (デスクトップとモバイルブラウザで動作)、カスタムフロントエンド用パブリックAPI、他のツールをPKBに接続するOpenAI互換エンドポイント。',
          '**セットアップ時間:** ~15分 (AnythingLLM DesktopまたはDockerをインストール、Ollamaを指定、ドキュメントをドラッグ)。',
          '**ハードウェア:** 16 GB RAM最低。10,000ドキュメント以上で32 GB推奨。AnythingLLMは同じアイテム数でObsidian + プラグインよりメモリ効率が良く、プロセスが2つではなく1つだからです。',
          '**アイテム数の上限:** 1つのワークスペースで~100,000ドキュメント; 50K以上で複数のワークスペースに分割し、検索レイテンシを~1秒未満に保ちます。',
          '**最適な用途:** PDF中心のアーカイブ、Webクリッピング中心のキャプチャ、プラグインのスタックよりも1つのアプリを好むユーザー。共有PKBをセルフホストする小規模チームにも正しい選択。',
          '**不向き:** ノート優先の執筆面を望むユーザー (Obsidian); 平文Markdownでストレージを所有したいユーザー (AnythingLLMのベクトルストアは内部)。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ここで使用されるRAGレイヤーの段階的セットアップ (Ollama + AnythingLLM、取り込み、チャンク調整) については、[30分でのローカルRAG (Ollama + AnythingLLM)](/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step) チュートリアルを参照してください。RAGをおもちゃの例を超えて1,000+ PDFに拡張するには、[1000+ PDFをローカルでチャット](/ja/power-local-llm/chat-with-1000-pdfs-locally) を参照してください。',
          },
        ],
      },
      architectureCustom: {
        id: 'architecture-custom',
        title: 'アーキテクチャC: カスタムPython + ChromaDB',
        content:
          '**カスタムPython + ChromaDB + Ollamaスタックは、本当に100,000+アイテム、マルチユーザーニーズ、または既製ツールでモデル化できない特定のスキーマ要件がある場合のみ正しい選択です。** メンテナンスコストは現実です: チャンキング、重複排除、再ランク付け、同期、バックアップ — すべて自分で所有します。',
        items: [
          '**ストレージ:** ファイルシステム (ソースごとに1フォルダ: `notes/`、`pdfs/`、`web/`、`email/`) + メタデータマニフェスト (SQLiteまたはJSONL)。ソースファイルは平文形式のままで、再取り込みなしで検索レイヤーを交換できます。',
          '**キャプチャ:** Webhookでトリガーされるスクリプト (Web Clipper → HTTPエンドポイント → ファイル書き込み)、メール転送 → IMAPポーラー → ファイル書き込み、モバイル共有シート → Tailscaleエンドポイント → ファイル書き込み。各キャプチャパスは小さなPythonサービス。',
          '**Embedding:** ChromaDB (ローカルモード、ディスクに永続化) + OpenAI互換エンドポイント経由のOllama Embedding。watchdogプロセス経由でファイル変更時に再Embedding。ChromaDBはHNSWインデックスで単一マシンで数百万ベクトルまで拡張。',
          '**検索:** ChromaDB top-k類似度 + 再ランカー (BGE Re-rankerまたはローカルCohere相当) + メタデータフィルター (日付範囲、タグ、ソース)。正確な単語マッチング用にチャンク上のBM25とのオプションのハイブリッド検索。',
          '**インターフェース:** 任意の組み合わせ: OpenAI互換 `/v1/chat/completions` エンドポイントを公開する小さなFastAPIサービス、Streamlit / Gradio UI、CLI、または3つすべて。Open WebUIをフロントに置くと、UIコードを書かずに洗練されたチャット体験が得られます。',
          '**セットアップ時間:** 動作するv1まで~1日; チャンキング、検索品質、データに合わせたキャプチャパイプラインの調整に~2週間の反復。',
          '**ハードウェア:** 開発用の32 GB RAMノートPC; Embeddingサービスがノートと競合しないよう100,000アイテム以上ではホームサーバー64 GB RAM。チャットスループット用に500K+アイテムで専用GPU (RTX 4060以上) を検討。',
          '**アイテム数の上限:** HNSW + シャーディングで1M+アイテム実用; ボトルネックは検索からキャプチャパイプラインの信頼性とスキーマ変更時の再Embeddingコストへ移ります。',
          '**最適な用途:** スタックを所有したいエンジニア、カスタムスキーマを持つチーム (例: 「すべてのアイテムには信頼度スコア、ソース、著者がある」)、またはObsidianまたはAnythingLLMの硬い限界 (それぞれ50K / 100K) に達したユーザー。',
          '**不向き:** 非エンジニア; メンテナンスコストを過小評価する人; 既製オプションでユースケースがすでにカバーされているユーザー。',
        ],
        promptExamples: [
          {
            label: 'ChromaDB取り込み (Pythonスケッチ)',
            text: 'import chromadb, ollama, pathlib\nclient = chromadb.PersistentClient(path="./chroma")\ncoll = client.get_or_create_collection("kb")\nfor p in pathlib.Path("vault").rglob("*.md"):\n    text = p.read_text()\n    emb = ollama.embeddings(model="nomic-embed-text", prompt=text)["embedding"]\n    coll.upsert(ids=[str(p)], embeddings=[emb], documents=[text], metadatas=[{"source": str(p)}])',
          },
          {
            label: '再ランク付きクエリ (スケッチ)',
            text: 'q = "What did I write about local RAG sync?"\nq_emb = ollama.embeddings(model="nomic-embed-text", prompt=q)["embedding"]\nhits = coll.query(query_embeddings=[q_emb], n_results=20)\n# pass hits["documents"] through a re-ranker, keep top 5\n# send top 5 + question to Llama 3.2 3B via Ollama chat endpoint',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'カスタムビルドで最もよくある失敗パターン: スキーマが安定していないため、コード変更のたびにアーカイブ全体を再Embedding。~5,000アイテムを取り込む前に、Embeddingモデル + チャンクサイズをロックしてください。100Kアイテムでnomic-embed-text 768次元からmxbai-embed-large 1024次元への移行は数時間の計算コストがかかり、ChromaDBコレクションを破壊します — 次元を混ぜることはできません。',
          },
        ],
      },
      capture: {
        id: 'capture',
        title: 'キャプチャパイプライン: Web、メール、モバイル、音声',
        content:
          '**キャプチャレイヤーがPKBが日常使用に耐えるかを決定します。ほとんどの知識はデスクトップの外で到着します — モバイル、メール、音声メモで — そして最初にデスクトップアプリを開く必要があるキャプチャパイプラインは、迂回されるパイプラインです。** 4つの主要な流入用に構築し、80%のアイテムがモバイルで到着することを受け入れてください。',
        items: [
          '**Web Clipper (デスクトップ + モバイル):** Obsidian Web Clipper、AnythingLLMブラウザ拡張、または現在のページをキャプチャエンドポイントにPOSTするカスタムbookmarklet。モバイル共有シート → Web Clipper拡張 → vault。',
          '**メール転送:** 専用アドレス (例: `kb@yourdomain.com`) + IMAPポーラー → ファイル書き込み。保存したいメールを転送; ポーラーが取り込みを処理。検索でソースごとにフィルターできるよう、ファイル名にソースごとのプレフィックスを使用してください。',
          '**モバイル共有シート:** 最も使用されるキャプチャパス。iOS Share → Obsidian (Markdownファイルを書く)、iOS Share → Working Copy (Gitにコミット)、iOS Share → カスタムShortcut (キャプチャAPIにPOST)。Android: HTTP ShortcutsまたはTasker。',
          '**音声メモ:** AudioPenスタイルのキャプチャは2026年に普及しています。電話で録音 → Whisper.cppでローカル転写またはセルフホストWhisperサービス経由 → 転写をMarkdownファイルとして書く → Embedding。',
          '**手動貼り付け:** フォールバック。常に動作、決して拡張しません。ロングテールに使用。',
          '**スクリーンショットOCR:** スクリーンショットは損失のあるキャプチャ形式。iOSではApple Live Textを使用するか、ローカルOCRパイプライン (Tesseract、Apple Vision、EasyOCR) を使用してテキストを抽出 + 画像とOCRテキストの両方を含むMarkdownファイルを書きます。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'パイプラインを設計する前に、既存のキャプチャ習慣を監査してください。すでに保存しているものを見てください: ブラウザブックマーク、スクリーンショット、転送メール、音声メモ。PKBキャプチャレイヤーはこれらの既存の流入を反映すべきです — すでに常にスクリーンショットを撮っているなら、OCRパスを構築; すでに自分にメールを転送しているなら、メール転送を構築。新しい習慣を追加する (「これからは各記事を手動でKBにコピー貼り付けする」) ことは決して機能しません。',
          },
        ],
      },
      mobileCapture: {
        id: 'mobile-capture',
        title: 'モバイルキャプチャ: iOS Shortcuts、Working Copy、a-Shell',
        content:
          '**iOSは2026年にローカルAI PKBへの3つの実用的なキャプチャパスを持ちます: Shortcuts → Obsidian、Shortcuts → Working Copy (Git)、またはShortcuts → a-Shell (スクリプト駆動)。** 各パスは3つの参照アーキテクチャの1つに自然にペアリングします。同期モデルが全体的なアーキテクチャに合うパスを選択してください。',
        items: [
          '**Shortcuts → Obsidian (Obsidian中心型):** Obsidianの「ノートに追加」Shortcutがキャプチャしたコンテンツを直接vaultに書き込みます。Obsidian Sync (有料、推奨) またはiCloud Drive (無料、制限あり) 経由で同期。ノート優先のワークフローに最適。',
          '**Shortcuts → Working Copy (Git):** キャプチャしたコンテンツがiPhone上のWorking Copyリポジトリに書き込まれ、自動コミットとプッシュ。デスクトップがプル。無料、堅牢、どのMarkdown vaultでも動作。注: Working Copyは有料 (一括約¥3,000)。Git同期vaultに最適。',
          '**Shortcuts → a-Shell:** a-Shellはスクリプトを実行する無料のiOSターミナル。キャプチャしたテキストをa-Shellスクリプトに渡すShortcutを構築し、ファイルを書いて `git` でコミット、Tailscale経由で `rsync` 同期、または独自キャプチャエンドポイントにアップロードします。エンジニアが構築するカスタムアーキテクチャに最適。',
          '**Android相当:** iOS Working CopyパスのペアとしてTasker + Termux + Git。カスタムエンドポイントパス用にHTTP Shortcuts。Obsidianパス用にObsidian Mobile共有シート。',
          '**レイテンシ予算:** モバイルキャプチャはエンドツーエンドで5秒未満で完了すべきです (共有シート → ファイル書き込み / コミット / アップロード)。それより遅いとユーザーは1度だけアプリを開いて二度と開きません。',
          '**オフラインキャプチャ:** 3つすべてのiOSパスはオフラインでキューイングします (Shortcutsはキューイング、Working Copyはコミットをキューイング、a-Shellスクリプトはローカルに書いて後で同期可能)。フライト、交通機関、地方でのキャプチャに不可欠。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'デスクトップがオンラインであることを必要とするモバイルキャプチャパス (例: ノートPCが起動している間だけ到達可能なTailscale保護エンドポイントへのPOST) を構築しないでください。仕事の会議中、ノートPCのスリープモード中、夜間にキャプチャを失います。キャプチャエンドポイントを常時稼働のホームサーバー / NASで実行するか、オフラインでバッファする最終的整合性ストア (Obsidian Sync、Git、iCloud) に書き込んでください。',
          },
        ],
      },
      scaling: {
        id: 'scaling',
        title: 'スケーリング: 1K、10K、100Kアイテム',
        content:
          '**ローカルAI PKBのスケーリングには3つの体制があります: 1,000アイテム未満では、すべてが現代のノートPCで高速; 1,000〜10,000アイテムでは、Embeddingインデックスが管理が必要な実物のアーティファクトになる; 10,000アイテム以上では、ハードウェアがボトルネックになり、キャプチャパイプラインの信頼性が結果を支配します。** 以下の現実的な数値は、Mac M3 Pro / RTX 4060 PCでnomic-embed-textとLlama 3.2 3Bを想定しています。',
        columns: ['アイテム数', '推奨アーキテクチャ', '初期Embedding時間', 'ハードウェア', 'メモ'],
        rows: [
          { 'アイテム数': '1,000アイテム', '推奨アーキテクチャ': '3つのいずれか', '初期Embedding時間': '~2分', 'ハードウェア': '16 GB RAMノートPC', 'メモ': 'すべてが瞬時に感じられます。アーキテクチャ選択は純粋にワークフローの適合性によります。' },
          { 'アイテム数': '10,000アイテム', '推奨アーキテクチャ': 'ObsidianまたはAnythingLLM', '初期Embedding時間': '~25分', 'ハードウェア': '16 GB RAMノートPC (32 GB推奨)', 'メモ': 'Embeddingインデックス~150〜250 MB。編集時の再Embedding時間は秒未満。ほとんどのナレッジワーカーのスイートスポット。' },
          { 'アイテム数': '50,000アイテム', '推奨アーキテクチャ': 'AnythingLLMまたはカスタムPython', '初期Embedding時間': '~3時間', 'ハードウェア': '32 GB RAMノートPCまたはホームサーバー', 'メモ': '初期インデックスは夜間実行。この点を超えるとサブvault / ワークスペースを計画。Embedding用ディスク使用量~1.5〜2 GB。' },
          { 'アイテム数': '100,000アイテム', '推奨アーキテクチャ': 'AnythingLLM (マルチワークスペース) またはカスタムPython', '初期Embedding時間': '6〜8時間', 'ハードウェア': '32 GB RAM最低; ホームサーバー優先', 'メモ': 'Embeddingを専用ホームサーバーに移動。キャプチャパイプラインの信頼性が主な失敗モードに、検索ではない。' },
          { 'アイテム数': '500,000+アイテム', '推奨アーキテクチャ': 'カスタムPython + ChromaDB', '初期Embedding時間': '24+時間', 'ハードウェア': '64 GB RAMホームサーバー + 専用GPU', 'メモ': 'シャーディング、重複排除、増分再Embeddingパイプラインが必要に。既製ツールはもはや適合しません。' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '初期Embeddingコストは1回限りの請求書です。最初のインデックスの後、変更されたアイテムのみが再Embeddingされます — 100Kアイテムでも通常save毎に1秒未満。最初の遅さは現実ですが繰り返しません。電源接続マシンで初期インデックスを夜間実行し、忘れてください。',
          },
        ],
      },
      backupSync: {
        id: 'backup-sync',
        title: 'バックアップ、バージョン管理、マルチデバイス同期',
        content:
          '**ローカルAI PKBには3つのバックアップレイヤーが必要です: vaultスナップショット (Time Machine、Backblaze、restic)、平文コンテンツのGit履歴、クリーンな再構築パスとしてのEmbeddingとメタデータの四半期エクスポート。** Embeddingは技術的には再生成可能ですが、100K+アイテムでは再生成コストは数時間 — これもバックアップしてください。',
        items: [
          '**vaultスナップショット (ファイルシステムレベル):** 24時間ごとのTime Machine (macOS) またはrestic (Linux)。オフサイトにBackblazeまたはrsync.net。Embeddingを含むすべてをキャプチャ。',
          '**Git履歴 (コンテンツのみ):** Gitリポジトリ (ローカル + GitHub / Gitea private) にコミットされた平文Markdownファイル。`.smart-env/`、`vector_store/`、その他のバイナリインデックスフォルダを `.gitignore` に追加。Gitはノート毎のバージョン履歴を提供; vaultスナップショットはシステム全体のロールバックを提供。',
          '**Embeddingエクスポート (四半期):** ベクトルストアを移植可能形式にエクスポート (ChromaDB → parquet、Smart Connections → JSONダンプ、AnythingLLM → 内蔵エクスポート)。最新2つのエクスポートをオフサイトに保管。vaultスナップショットが失敗するかEmbeddingインデックスが破損した場合、これが高速再構築パス。',
          '**マルチデバイス同期 — Obsidian中心型:** Obsidian Syncは平文 + バイナリインデックスをきれいに処理 (E2E暗号化)。iCloud Driveは平文には機能しますが、プラットフォーム間でバイナリインデックスを破損させます。Working Copy / Termux経由のGitは平文のみ機能 — デバイスごとに再インデックス。',
          '**マルチデバイス同期 — AnythingLLM中心型:** AnythingLLMをホームサーバーのセルフホストDockerコンテナとして実行。すべてのデバイスがLANまたはTailscale経由で同じインスタンスに接続。クライアント側同期不要。',
          '**マルチデバイス同期 — カスタムPython:** 構築するアーキテクチャがこれを決定。ほとんどのビルドは中央APIサービス (ホームサーバーのFastAPI) + キャプチャをPOSTしクエリをGETするクライアントを使用。Tailscaleがネットワークレイヤーを提供。',
          '**新しいコンピューターへの移行:** vaultスナップショット復元 → Gitリポジトリ復元 → Ollama再起動 → Embeddingインデクサー再起動。Embeddingエクスポート手順をスキップした場合、Embedding再生成は自動; バックアップしたが形式がプラットフォーム固有の場合は手動再インデックス。',
          '**選択的共有:** vaultの一部 (例: 共同研究プロジェクト) を共有するには、サブvaultまたはタグエクスポートスクリプトを使用。vault全体を共有しないでください — ほとんどのローカルAI PKBはローカルスタックを離れるべきでない機密アイテム (医療、財務、個人) を蓄積します。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '四半期に一度復元をテストしてください。ほとんどの「バックアップがあります」という主張は願望です — テストは「新しいノートPCで2時間以内にvaultを復元できますか?」 そのテストを実行してください。最初に行うとき、3つのレイヤー (スナップショット、Git、Embeddingエクスポート) のうち1つが過去6か月間誤設定だったことが判明します。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある間違い',
        items: [
          '**キャプチャレイヤーの前に検索レイヤーを設計する。** 47アイテムのvaultでは再ランク付き独自ハイブリッド検索は無駄です。最初にキャプチャを構築し、素朴なtop-5検索を受け入れ、vaultが1,000+アイテムを持ち、実際のクエリで検索品質を測定できるようになってから検索を最適化してください。',
          '**アーキテクチャを混ぜる。** 「ノート用Obsidian + PDF用AnythingLLM + メール用カスタムPython」はクリーンに聞こえますが、統合コストが支配的になります。1つのアーキテクチャを選択し、限界を受け入れ、絶対に必要な場合のみ単一のコネクタを追加してください (例: Obsidian vaultフォルダを読み取り専用で取り込むAnythingLLM)。',
          '**アーカイブを再Embeddingせずにモデルを切り替える。** 同じストアでnomic-embed-text 768次元とmxbai-embed-large 1024次元のベクトルを混ぜると、検索が静かに壊れます。Embeddingモデル + 次元を1つ選択し、ロックし、アーカイブの完全な再Embeddingでのみ切り替えてください。',
          '**10,000アイテム以上でEmbeddingインデックスのバックアップを無視する。** 「再生成できる」は本当ですが、再生成は数時間かかります。10Kアイテム以上でEmbeddingストアをバックアップ戦略に追加してください。',
          '**キャプチャの80%がモバイルで起こるのにデスクトップ専用に設計する。** モバイルキャプチャパスのないPKBは放置されます。1日目にモバイルキャプチャフローをテスト — 共有シートからvaultへは5秒未満で完了すべきです。',
          '**バイナリEmbeddingインデックスにiCloud Driveを依存する。** iCloudは平文をきれいに処理; バイナリインデックス (Smart Connections `.smart-env/`、AnythingLLMベクトルストア) はプラットフォーム間で破損。Obsidian Sync、セルフホストインスタンスを使用するか、デバイスごとの再インデックスを受け入れてください。',
          '**100Kアイテムで分割しない。** 100K+アイテムの単一ワークスペース / vaultは検索レイテンシが秒オーダーになります。トピックごと (仕事、読書、プロジェクト) に複数のワークスペースまたはサブvaultに分割; それぞれ別々にまたはルーター経由でクエリしてください。',
          '**コンプライアンスリスクを過小評価する。** 個人ナレッジベースは必然的に機密データ (顧客、患者、同僚からのメール、財務・医療メモ) を蓄積します。経済産業省の「AI事業者ガイドライン (2024)」は、個人情報を扱う企業展開において、ローカル推論によるデータ最小化と説明責任を推奨しています — クラウドエグレスがないため、第三者処理者契約 (Art. 28相当) が不要になります。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          'Obsidian — [obsidian.md](https://obsidian.md) と [help.obsidian.md](https://help.obsidian.md) (vault構造、モバイル同期アーキテクチャ、プラグインドキュメント)。',
          'AnythingLLM — [github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) (オープンソースのセルフホスト型RAGアプリケーション)。',
          'Ollama — [ollama.com](https://ollama.com) と [github.com/ollama/ollama](https://github.com/ollama/ollama) (ローカルLLMランタイム; チャット + Embeddingエンドポイント)。',
          'ChromaDB — [trychroma.com](https://www.trychroma.com) と [github.com/chroma-core/chroma](https://github.com/chroma-core/chroma) (オープンソースのローカルベクトルデータベース)。',
          'Working Copy — [workingcopy.app](https://workingcopy.app) (モバイルキャプチャパイプライン用のiOS Gitクライアント)。',
          'a-Shell — [holzschu.github.io/a-Shell_iOS/](https://holzschu.github.io/a-Shell_iOS/) (スクリプト駆動モバイルキャプチャ用の無料iOSターミナル)。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Webページをナレッジベースにキャプチャするには?',
            a: '摩擦順に3つのオプション。(1) ブラウザ拡張Web Clipper — Obsidian Web ClipperまたはAnythingLLMブラウザ拡張が現在のページを直接vault / ワークスペースに書き込みます。(2) モバイル共有シート — Safari / Chrome共有 → Obsidian (Markdownファイルを書く)、または → Working Copy (Gitにコミット)、または → カスタムShortcut (キャプチャAPIにPOST)。(3) Bookmarklet — 拡張のないブラウザ向け; 現在のURL + 選択をキャプチャエンドポイントにPOST。実際にはモバイル共有シートが最も使用されるパス — 最初に設計してください。',
          },
          {
            q: 'メールをシステムに転送できますか?',
            a: 'はい。専用アドレスを設定し (例: Fastmail / Migaduエイリアス `kb@yourdomain.com`)、ホームサーバーまたはノートPCで新しいメールをダウンロードしてvaultに1メールにつき1Markdownファイルを書くIMAPポーラーを実行します。検索でsenderごとにフィルターできるよう、ファイル名にfromアドレスプレフィックスを使用してください。AnythingLLMはファーストパーティのメール統合を持ちます; ObsidianユーザーはIMAPポーラーを自分で構築するか、IFTTT / Zapier代替のn8nなどを使用するのが一般的です。',
          },
          {
            q: 'デスクトップとモバイルを同期するには?',
            a: 'アーキテクチャ依存。Obsidian中心型: Obsidian Sync (有料、バイナリインデックスをきれいに処理)、iCloud Drive (無料、平文のみ — デバイスごとに再インデックス)、Working Copy経由のGit (無料 + Working Copy一括料金、平文のみ — デバイスごとに再インデックス)。AnythingLLM中心型: AnythingLLMをホームサーバーでDockerで実行、すべてのデバイスがLANまたはTailscale経由で接続 — クライアント側同期不要。カスタムPython: ホームサーバーに中央APIサービスを構築; クライアントがキャプチャをPOSTしクエリをGET。',
          },
          {
            q: '1つの大きなvaultを使うべきか、トピックで分割すべきか?',
            a: '~50,000アイテムまでは1つのvault。50K以上ではトピック (仕事、読書、プロジェクト、個人) で分割、2つの理由から: 検索レイテンシが~1秒未満を維持し、コンテキスト間の意図しないクロスリーク (例: 個人ノートが仕事クエリに表示) が大規模で可能になります。50Kより早く分割するのは時期尚早 — PKBの主な価値である偶発的なクロスドメイン接続を失います。',
          },
          {
            q: '精度のためにどのくらいの頻度で再Embeddingすべきか?',
            a: '「精度ドリフト」のために再Embeddingしないでください — Embeddingは劣化しません。Embeddingモデルを変更するときのみ再Embedding (例: 技術コンテンツのより良い検索のためにnomic-embed-textからmxbai-embed-largeへのアップグレード)。3つすべてのアーキテクチャがファイル変更時の増分再Embeddingを自動的に処理します; スケジュールしません。例外はインデクサーを制御するカスタムPythonスタック — そこではwatchdog駆動の保存時増分再Embeddingが標準です。',
          },
          {
            q: 'ナレッジベースをバージョン管理できますか?',
            a: '平文コンテンツについてははい (Markdown vault → Gitリポジトリ、ローカル + GitHub / Gitea private)。バイナリインデックスフォルダ (`.smart-env/`、`vector_store/`、ChromaDB永続化ディレクトリ) を `.gitignore` に追加 — それらは履歴を膨張させ、マージコンフリクトを引き起こします。Gitはノート毎のバージョン履歴を提供; vaultスナップショット (Time Machine、restic) はシステム全体のロールバックを提供。両方のレイヤーで、どちらか一方ではない。',
          },
          {
            q: 'このシステムでPDFを処理するには?',
            a: 'Obsidian中心型: PDFをMarkdownノートと並べて保存; Smart ConnectionsはPDFコンテンツを直接Embeddingしない — まずテキストを抽出 (例: PDF++プラグイン経由または各PDFと並んでMarkdownサマリーを書く前処理スクリプト)。AnythingLLM中心型: PDFを直接ワークスペースにドラッグ; AnythingLLMがPDFパースとチャンキングを自動的に処理。カスタムPython: 取り込みパイプラインで `pypdf` または `pdfplumber` を使用してテキストを抽出し、抽出したテキストをEmbedding。AnythingLLMがPDF中心のアーカイブで最も摩擦の少ないオプションです。',
          },
          {
            q: 'KBの一部を選択的に共有できますか?',
            a: 'はい、ただし1日目から設計してください。サブvault (Obsidian) またはワークスペース (AnythingLLM) を使用して、「共有可能」と「プライベート」コンテンツを別々のストアに保ちます。1回限りの共有には、タグ (例: `#shareable`) でアイテムを引っ張る移植可能Markdownバンドルへのタグエクスポートスクリプトを構築。vault全体を共有しないでください — ほとんどのローカルAI PKBはローカルスタックを離れるべきでない機密アイテム (医療、財務、個人通信) を蓄積します。',
          },
          {
            q: '最良のバックアップ戦略は?',
            a: '3つのレイヤー: (1) 24時間ごとのファイルシステムスナップショット (Time Machine / restic) とオフサイトコピー (Backblaze / rsync.net); (2) ノート毎のバージョン回復のための平文コンテンツのGit履歴; (3) 高速再構築パスとしてのEmbedding + メタデータの四半期エクスポート。四半期に一度復元をテスト — 「新しいノートPCで2時間以内にvaultを再構築できますか?」 最初の復元テストは通常、3つのレイヤーのうち1つが誤設定だったことを明らかにします。',
          },
          {
            q: '新しいコンピューターに移行するには?',
            a: 'vaultスナップショットを復元 → Ollamaをインストールして同じモデルをプル → Obsidian / AnythingLLM / カスタムPythonスタックをインストール → Embeddingインデクサーを再起動。Obsidian Syncまたはセルフホスト型AnythingLLMでは、移行は「クライアントをインストールしてログイン」 — 手動復元不要。それらなしでは、10Kアイテムvaultで~30分、50Kで~2時間、Embeddingエクスポート手順をスキップした場合は100K以上で夜間を見込んでください。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Obsidian + ローカルLLM: vaultをセカンドブレインに変える5つのプラグイン (2026)](/ja/power-local-llm/local-llm-with-obsidian-2026) — アーキテクチャAのプラグインレイヤーの詳細。',
          '[LogseqとJoplinでのローカルLLM](/ja/power-local-llm/local-llm-with-logseq-and-joplin) — Obsidianが選択でない場合のPKBの代替ストレージレイヤー。',
          '[1000+ PDFをローカルでチャット: おもちゃの例を超えてRAGをスケーリング](/ja/power-local-llm/chat-with-1000-pdfs-locally) — 1,000アイテムを超えるRAGレイヤーのスケーリング、3つすべてのアーキテクチャに適用。',
          '[30分でPDFのローカルRAG (Ollama + AnythingLLM)](/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step) — アーキテクチャBで使用される検索レイヤーのRAG実装ウォークスルー。',
          '[ローカルRAGに最適なEmbeddingモデル (2026)](/ja/power-local-llm/best-embedding-models-local-rag-2026) — 3つのアーキテクチャそれぞれのEmbeddingモデル選択 (nomic-embed-text vs mxbai-embed-large vs bge-m3)。',
          '[RAG解説](/ja/prompt-engineering/rag-explained) — 検索レイヤーの概念的な権威。',
          '[ローカルLLMハードウェアガイド 2026](/ja/local-llms/local-llm-hardware-guide-2026) — 16 GB最低、10K以上で32 GB、100K以上でホームサーバーのハードウェアサイジング。',
          '[ローカルLLMソフトウェアディレクトリ 2026](/ja/power-local-llm/local-llm-software-directory-2026) — Ollama、ChromaDB、AnythingLLM、Obsidian、その他のスタックコンポーネントのディレクトリリスト。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: '使用本地 AI 构建个人知识库:2026 技术栈指南',
    seoTitle: '本地 AI 个人知识库:2026 技术栈指南',
    intro:
      '基于本地 AI 构建的个人知识库 (PKB) 在 2026 年由五个层组成:捕获 (Web Clipper、邮件转发、移动端分享)、存储 (Markdown vault 或文档文件夹)、嵌入 (通过 Ollama 的本地模型)、检索 (RAG) 和界面 (聊天或语义搜索)。三种架构覆盖约 95% 的实际项目 — Obsidian 中心型 (笔记优先,可扩展至约 50,000 条目)、AnythingLLM 中心型 (文档优先,可扩展至约 100,000 条目),以及自建 Python + ChromaDB 技术栈 (工程师优先,可扩展至 100 万+ 条目)。硬件门槛是 16 GB 内存的笔记本电脑;超过 10,000 条目时应规划 32 GB。最重要的扩展决策不是 LLM — 而是您的捕获管道能否在移动端经受日常使用,因为大多数知识实际上是在手机上产生的。',
    metaDescription:
      '2026 本地 AI 个人知识库:对比 3 种架构 (Obsidian、AnythingLLM、Python + ChromaDB)。可扩展至 100,000+ 条目。捕获、RAG、同步、备份。',
    twitterDescription:
      '2026 三种本地 AI PKB 架构:Obsidian (~50K)、AnythingLLM (~100K)、Python + ChromaDB (1M+)。捕获、RAG、移动同步、备份、扩展。',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Qwen3 7B',
      'nomic-embed-text',
      'mxbai-embed-large',
      'bge-m3',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16 GB 统一内存最低,10,000 条目以上推荐 32 GB)',
      'PC with RTX 3060 12 GB or RTX 4060 8 GB',
      'PC with 32 GB 内存 (大型 vault 的 CPU-only 备用方案)',
      '家庭服务器 / 迷你 PC with 64 GB 内存 (100,000 条目以上的自建 Python 技术栈)',
    ],
    audience:
      '知识工作者、研究人员、作家和工程师,他们希望从笔记、书签、邮件和文档中构建一个私有的、可被 AI 检索的归档 — 通常 1,000 到 100,000 条目 — 而不将内容发送到云服务。',
    readTime: '阅读约15分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '本地 AI 个人知识库',
    targetKeywords: [
      '本地 AI 个人知识库',
      '本地 LLM 第二大脑',
      '私有知识库 AI',
      '本地 RAG 知识库',
      '自托管 AI 知识库',
      '个人知识库 2026',
    ],
    leadAnswerBlock:
      '**2026 年的本地 AI 个人知识库由五层组成 — 捕获、存储、嵌入、检索、界面 — 您应该选择三种参考架构之一,而不是从零开始设计。** 如果您每天写笔记并希望对整个 vault 进行语义搜索,使用 Obsidian + Smart Connections + Copilot for Obsidian + Ollama;在 16 GB Mac M3 Pro 或 PC 上可干净地扩展至约 50,000 条笔记。如果您的知识主要是文档 (PDF、导出、网页剪藏) 而非笔记,使用 AnythingLLM + Ollama;可扩展至约 100,000 条文档,并将捕获、RAG 和聊天集成到一个应用中。仅当您拥有 100,000+ 条目、多用户访问或特定的 schema 需求时,才构建自建 Python + ChromaDB + Llama 3.2 3B 技术栈 — 维护成本是真实的。三种架构的真正瓶颈都是捕获:大多数知识在移动端到达 (网页、截图、语音笔记、转发的邮件),没有移动捕获路径的技术栈无论检索多巧妙都会被闲置。硬件门槛:16 GB 内存;超过 10,000 条目时规划 32 GB。超过 100,000 条目时将嵌入迁移到家庭服务器。',
    quickAnswerTop: {
      zh: {
        question: '2026 年最佳的本地 AI 个人知识库架构是什么?',
        answer:
          '对大多数用户:Obsidian + Smart Connections + Copilot for Obsidian + Ollama (Llama 3.2 3B 用于聊天,nomic-embed-text 用于嵌入)。在 16 GB Mac 上可扩展至约 50,000 条笔记。对文档密集型归档:AnythingLLM + Ollama 集成在一个应用中,可扩展至约 100,000 条文档。对工程师和 100,000+ 条目的 vault:自建 Python + ChromaDB + Llama 3.2 3B 技术栈,捕获、嵌入和聊天服务分离。硬件门槛 16 GB 内存;10,000 条目以上规划 32 GB,100,000 以上规划家庭服务器。捕获是真正的扩展瓶颈 — 在优化 LLM 之前,先设计移动分享、Web Clipper 和邮件转发。',
        bullets: [
          'Obsidian 中心型 — 最适合笔记优先工作流,可扩展至约 50,000 条笔记,16 GB 内存最低。',
          'AnythingLLM 中心型 — 最适合文档密集型 PKB (PDF、导出),可扩展至约 100,000 条文档,一体化应用。',
          '自建 Python + ChromaDB 技术栈 — 最适合工程师,可扩展至 100 万+ 条目,需要自管服务。',
          '2026 推荐聊天模型:16 GB 系统选 Llama 3.2 3B,8 GB 选 Phi-4 Mini,32 GB+ 追求质量选 Qwen3 7B。',
          '推荐嵌入模型:nomic-embed-text (768 维,快速) 或 mxbai-embed-large (1024 维,更精准);多语言归档选 bge-m3。',
          '硬件门槛:笔记本 16 GB 内存;10,000 条目以上推荐 32 GB;100,000 以上家庭服务器 64 GB。',
          '捕获是瓶颈:大多数 PKB 条目在移动端被捕获 (网页、截图、语音笔记),在桌面端被查询。iOS Shortcuts → Obsidian、Working Copy (Git) 或 a-Shell 是三种移动捕获路径。',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: '应该构建哪种架构?', anchor: '#which-architecture' },
      { label: '架构对比表', anchor: '#comparison-table' },
      { label: '本地 AI PKB 的五层', anchor: '#five-layers' },
      { label: '架构 A:Obsidian 中心型', anchor: '#architecture-obsidian' },
      { label: '架构 B:AnythingLLM 中心型', anchor: '#architecture-anythingllm' },
      { label: '架构 C:自建 Python + ChromaDB', anchor: '#architecture-custom' },
      { label: '捕获管道:网页、邮件、移动、语音', anchor: '#capture' },
      { label: '移动捕获:iOS Shortcuts、Working Copy、a-Shell', anchor: '#mobile-capture' },
      { label: '扩展:1K、10K、100K 条目', anchor: '#scaling' },
      { label: '备份、版本控制、多设备同步', anchor: '#backup-sync' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**选择三种参考架构之一,而不是从零开始设计。** Obsidian 中心型 (笔记优先,~50K 条目)、AnythingLLM 中心型 (文档优先,~100K 条目) 或自建 Python + ChromaDB 技术栈 (工程师优先,1M+ 条目)。混合架构很少划算 — 集成成本占主导。',
          '**本地 AI PKB 有五层:捕获、存储、嵌入、检索、界面。** 大多数初学者错误发生在捕获层,而不是 LLM 层。如果条目不能从移动端和邮件流入系统,再巧妙的检索也无法挽救项目。',
          '**硬件门槛:16 GB 内存。** 低于此值,您只能在嵌入模型和聊天模型之间选一个 — 不能两者兼顾。在 16 GB 上可以并行运行 Llama 3.2 3B + nomic-embed-text。32 GB 可升级到 Qwen3 7B 或运行多个聊天会话。100,000 条目以上将嵌入迁移到家庭服务器。',
          '**2026 推荐模型:** 聊天 — Llama 3.2 3B (默认)、Phi-4 Mini (8 GB 系统)、Qwen3 7B (32 GB+ 追求质量);嵌入 — nomic-embed-text (768 维,快速)、mxbai-embed-large (1024 维,更精准)、bge-m3 (多语言)。',
          '**捕获是扩展瓶颈,不是检索。** 大多数知识条目在移动端到达 (网页剪藏、截图、语音笔记、转发邮件)。在调优 LLM 之前,先设计移动分享 → vault 路径。iOS Shortcuts → Obsidian / Working Copy / a-Shell 是三种可行的 iOS 路径。',
          '**同步方式决定移动端能跑什么。** Obsidian Sync 干净处理二进制嵌入索引;iCloud Drive 跨平台破坏它们;Git 需要 .gitignore 纪律和按设备重新索引。先选同步,再选插件。',
          '**备份不是可选项。** 三层:vault 快照 (Time Machine、Backblaze、restic)、明文内容的 Git 历史,以及嵌入 + 元数据的季度导出作为干净的重建路径。嵌入可重新生成但成本高 — 10,000 条目以上也要备份它们。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**覆盖架构:** Obsidian 中心型、AnythingLLM 中心型、自建 Python + ChromaDB 技术栈。',
          '**LLM 后端:** Ollama (推荐) — 在一个本地端点 `http://localhost:11434` 后运行聊天和嵌入模型。',
          '**2026 推荐聊天模型:** Llama 3.2 3B (16 GB 系统)、Phi-4 Mini (8 GB)、Qwen3 7B (32 GB+)。',
          '**2026 推荐嵌入模型:** nomic-embed-text (768 维,快速)、mxbai-embed-large (1024 维,精准)、bge-m3 (多语言)。',
          '**条目数量目标:** Obsidian ~50,000 条笔记,AnythingLLM ~100,000 条文档,自建 Python + ChromaDB 技术栈 1M+。',
          '**硬件门槛:** 笔记本 16 GB 内存。10,000 条目以上:32 GB 推荐。100,000 条目以上:64 GB 家庭服务器。',
          '**移动捕获路径 (iOS):** Shortcuts → Obsidian、Shortcuts → Working Copy (Git)、Shortcuts → a-Shell。Android:Tasker 或 HTTP Shortcuts。',
        ],
      },
      whichArchitecture: {
        id: 'which-architecture',
        title: '应该构建哪种架构?',
        content:
          '**选择与您现有知识流入方式相符的架构 — 不是听起来最强大的那种。** 如果您每天写笔记,选择 Obsidian 中心型。如果您的知识主要是文档 (PDF、导出、网页剪藏),选择 AnythingLLM 中心型。仅当您真的有 100,000+ 条目或多用户访问需求时,才构建自建 Python + ChromaDB 技术栈 — 维护成本是真实的,在该阈值以下很少能被证明合理。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '笔记优先的工作流选择 Obsidian + Smart Connections + Copilot + Ollama;文档密集型归档选择 AnythingLLM + Ollama;100K+ 条目的工程师选择自建 Python + ChromaDB 技术栈。',
          },
          {
            type: 'plain-terms',
            text: '三条路,一个目的地。如果您已经在笔记应用中生活,Obsidian 在您现有的习惯外包裹 AI 功能。如果您主要囤积 PDF 和网页,AnythingLLM 是一个集成应用,可摄取、索引并聊天。如果您写代码并希望完全控制,Python + ChromaDB 让您构建您想要的 — 但您自己维护。选择符合您现有工作流的路径;不要为了适应架构而改变习惯。',
          },
        ],
        decisionBlock: {
          title: '决策:哪种 PKB 架构?',
          localIf: [
            '您已经使用 Obsidian 或希望 Markdown 文件的笔记优先工作流 → Obsidian 中心型',
            '您的知识主要是 PDF、导出、网页剪藏和邮件归档 → AnythingLLM 中心型',
            '您有 100,000+ 条目、自定义 schema 需求或多用户访问 → 自建 Python + ChromaDB 技术栈',
            '您希望一个应用涵盖捕获、存储、RAG 和聊天 → AnythingLLM 中心型',
            '您希望完全控制分块、检索和重排 → 自建 Python + ChromaDB 技术栈',
          ],
          cloudIf: [
            '您每次查询都需要 GPT-5.5 级推理且归档很小 → Notion AI 或带自定义 GPT 的 ChatGPT (本地技术栈在合成上约有 70% 的能力)',
            '您没有 16 GB+ 内存的机器或家庭服务器 → 云 SaaS PKB (Mem、Reflect)',
            '您的团队需要并发多用户访问且不想托管服务 → 云等价方案',
          ],
          quick: [
            '笔记优先用户的默认选择:Obsidian + Smart Connections + Copilot + Ollama',
            '文档密集型用户的默认选择:AnythingLLM + Ollama',
            '100K+ 条目的工程师:自建 Python + ChromaDB + Llama 3.2 3B 技术栈',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '不要因为听起来更强大就从自建 Python 技术栈开始。先构建 Obsidian 中心型或 AnythingLLM 中心型,运行两个月,识别不符合您工作流的层,然后只用自定义组件替换那一层。所有从「Python 从零开始」并运行超过六个月的 PKB 项目最终都收敛到 Obsidian 形或 AnythingLLM 形。',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '架构对比表',
        content:
          '**三种参考架构在五个对大多数构建者重要的轴上不同:设置复杂度、条目数量上限、移动同步、捕获灵活性和维护负担。** 设置复杂度大致随控制度线性增长 — 维护成本也是如此。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obsidian 在 ~50K 条目时为中等复杂度,AnythingLLM 在 ~100K 条目时为低复杂度,自建 Python + ChromaDB 技术栈为高复杂度但可扩展至 100 万+ 条目。',
          },
          {
            type: 'plain-terms',
            text: 'AnythingLLM 设置最简单,在两种「开箱即用」选项中扩展最远 — 但它对文档组织有强烈意见。Obsidian 提供最具表达力的笔记层和活跃的插件生态,代价是设置稍多。自建 Python 无上限,但您维护一切:分块、重排、去重、同步、备份。按您对维护的耐心选择,而不是仅按条目数量。',
          },
        ],
        columns: ['架构', '设置复杂度', '最大条目', '移动同步', '最适合'],
        rows: [
          { '架构': 'Obsidian 中心型', '设置复杂度': '中', '最大条目': '~50,000', '移动同步': '是 (Obsidian Sync;iCloud / Git 有限制)', '最适合': '具有日常写作习惯的笔记优先重度用户' },
          { '架构': 'AnythingLLM 中心型', '设置复杂度': '低', '最大条目': '~100,000', '移动同步': '有限 (通过 LAN / Tailscale 从手机访问 Web UI)', '最适合': '文档密集型 PKB (PDF、导出、网页剪藏)' },
          { '架构': '自建 Python + ChromaDB', '设置复杂度': '高', '最大条目': '1M+', '移动同步': '手动 (需自建 API + 移动客户端)', '最适合': '希望完全控制 + 多用户的工程师' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '移动同步是最被低估的对比轴。AnythingLLM 在技术上比 Obsidian 更容易设置,但在移动端意味着「在 Safari 中打开 LAN Web UI」 — 不是原生体验。Obsidian Mobile 配合 Obsidian Sync,提供接近原生的 iOS / Android 应用,可离线阅读。如果移动捕获和阅读重要,请将 Obsidian 加权至高于表格暗示的水平。',
          },
        ],
      },
      fiveLayers: {
        id: 'five-layers',
        title: '本地 AI PKB 的五层',
        content:
          '**每个本地 AI PKB 无论架构如何都有相同的五层:捕获、存储、嵌入、检索、界面。** 失败通常是因为某一层与其他层不匹配 — 最常见的是先进的检索层搭配无人使用的破损捕获管道。',
        numberedItems: [
          {
            title: '捕获',
            whyItMatters: '条目进入系统的方式。Web Clipper、邮件转发、移动分享、语音笔记、手动粘贴。初学者构建中最容易跳过的层 — 也是决定系统能否经受日常使用的层。如果移动端捕获超过 5 秒,系统会被闲置。',
          },
          {
            title: '存储',
            whyItMatters: '条目在磁盘上的位置。Markdown vault (Obsidian、Logseq)、文档文件夹 + 数据库 (AnythingLLM) 或文件系统 + 清单 (自建 Python)。选择能在工具更换中存活的存储格式 — 明文 Markdown 最可移植;二进制数据库最不可移植。',
          },
          {
            title: '嵌入',
            whyItMatters: '用于语义搜索的条目向量表示。由本地模型生成 (通过 Ollama 的 nomic-embed-text 或 mxbai-embed-large)。嵌入模型可以稍后更换,但迁移成本是「全部重新嵌入」 — 选一次,坚持到底。',
          },
          {
            title: '检索',
            whyItMatters: '查询时如何找到条目。Top-k 向量搜索、可选重排、可选元数据过滤 (标签、日期、来源)。朴素 top-5 与调优 top-20 加重排器之间的质量差异是「有用」与「神奇」之差。',
          },
          {
            title: '界面',
            whyItMatters: '您查询和阅读的方式。侧边栏 (Smart Connections)、聊天 (Copilot、AnythingLLM)、CLI (自建 Python) 或 API。大多数用户默认选择聊天 — 但「相关笔记」侧边栏会浮现聊天找不到的被遗忘材料,因为您不知道该问什么。',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: '一种常见失败的构建模式:选择最强检索 (带重排的自定义混合搜索)、最聪明的聊天模型 (Qwen3 7B),却忽视捕获。三周后,vault 里有 47 个条目,因为移动端没有任何东西流入。修正方式始终一样:简化检索,简化聊天,修复捕获,接受 80% 的价值来自条目能进入系统这件事本身。',
          },
        ],
      },
      architectureObsidian: {
        id: 'architecture-obsidian',
        title: '架构 A:Obsidian 中心型',
        content:
          '**Obsidian + Smart Connections + Copilot for Obsidian + Ollama 是 2026 年笔记优先工作流的默认架构。** 在 16 GB Mac M3 Pro 或 PC 上可干净地扩展至约 50,000 条笔记,通过 Obsidian Mobile 支持移动阅读,并将所有内容保留为可带到任何未来工具的明文 Markdown。',
        items: [
          '**存储:** 文件夹 (「vault」) 中的 Markdown 文件。明文,简单文件夹,无数据库。可在工具迁移中存活。',
          '**捕获:** Obsidian Web Clipper (浏览器扩展)、Obsidian Mobile 分享 (iOS / Android)、通过 Mailspike 或自定义 IFTTT 配方的邮件到 Obsidian、手动粘贴。',
          '**嵌入:** Smart Connections 插件 → Ollama 在 `http://localhost:11434/api/embeddings` → nomic-embed-text (默认) 或 mxbai-embed-large (更精准)。索引位于 vault 内的 `.smart-env/`。',
          '**检索:** Smart Connections 侧边栏 (相关笔记视图) + Copilot for Obsidian Vault QA 模式 (vault 上聊天查询的 RAG)。两者都使用嵌入索引。',
          '**界面:** Smart Connections 侧边栏 (被动发现) + Copilot 聊天面板 (主动查询) + Text Generator 模板 (日常摘要等可重复工作流)。',
          '**设置时间:** ~30 分钟 (安装 Ollama、拉取模型、安装三个插件、配置端点、让初始索引构建)。',
          '**硬件:** 16 GB 内存最低 (Llama 3.2 3B + nomic-embed-text 并行)。10,000 条笔记以上推荐 32 GB。强烈推荐 SSD — 索引重建在 HDD 上受 I/O 限制。',
          '**条目上限:** ~50,000 条笔记可行;测试至 20,000 时增量重新索引在亚秒级。50K+ 条笔记时初始索引运行 4–8 小时,应考虑子 vault。',
          '**最适合:** 具有日常写作习惯、Markdown 优先偏好、希望「思考伙伴」侧边栏浮现被遗忘笔记的用户。',
          '**不适合:** 知识主要为 PDF 和网页剪藏的用户 (选择 AnythingLLM 中心型);希望单一一体化应用的用户 (Obsidian 中心型是「Obsidian + 3 插件 + Ollama」)。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '关于此架构插件层的深入探讨 (哪 5 个插件、配置步骤、vault 规模数值),请参阅 [Obsidian + 本地 LLM 插件指南](/zh/power-local-llm/local-llm-with-obsidian-2026)。本页面涵盖架构;插件指南涵盖配置。',
          },
        ],
      },
      architectureAnythingllm: {
        id: 'architecture-anythingllm',
        title: '架构 B:AnythingLLM 中心型',
        content:
          '**AnythingLLM + Ollama 是一体化选项:捕获、存储、RAG 和聊天打包在单个桌面或自托管应用中。** 可扩展至约 100,000 条文档 (PDF、网页剪藏、导出的混合),当您的知识主要以文档而非笔记的形式到达时,这是正确选择。',
        items: [
          '**存储:** AnythingLLM 内部数据库 (默认 SQLite;多用户自托管使用 Postgres)。文档通过 UI 摄取;原始文件可保留在您镜像的文件夹中。',
          '**捕获:** 应用内上传 (将 PDF / 文件拖入工作区)、网页浏览器扩展、用于编程摄取的公共 API (`POST /api/v1/document/upload`)、通过官方集成或自定义中继的邮件转发。',
          '**嵌入:** AnythingLLM 使用您配置的嵌入提供商 — 选择「Ollama」 → 端点 `http://localhost:11434` → 模型 `nomic-embed-text`。嵌入存储在内置向量库中 (默认 LanceDB;ChromaDB / Pinecone 可选)。',
          '**检索:** 工作区上的 RAG。可配置块大小、top-k 检索、可选重排。多个工作区允许按主题分区 (例如「工作」、「阅读」、「项目」)。',
          '**界面:** AnythingLLM Web UI (在桌面和移动浏览器中工作)、自定义前端的公共 API、用于将其他工具接入您的 PKB 的 OpenAI 兼容端点。',
          '**设置时间:** ~15 分钟 (安装 AnythingLLM Desktop 或 Docker、指向 Ollama、拖入文档)。',
          '**硬件:** 16 GB 内存最低。10,000 条文档以上推荐 32 GB。在相同条目数下,AnythingLLM 比 Obsidian + 插件更省内存,因为只有一个进程而不是两个。',
          '**条目上限:** 单个工作区中 ~100,000 条文档;50K 以上分区到多个工作区,以保持检索延迟低于 ~1 秒。',
          '**最适合:** PDF 重度归档用户、网页剪藏重度捕获用户,以及偏好单个应用而非插件栈的用户。也是自托管共享 PKB 的小团队的正确选择。',
          '**不适合:** 希望笔记优先写作面的用户 (Obsidian);希望以明文 Markdown 拥有存储的用户 (AnythingLLM 的向量库是内部的)。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '关于此处使用的 RAG 层的逐步设置 (Ollama + AnythingLLM、摄取、块调优),请参阅 [30 分钟内为 PDF 构建本地 RAG](/zh/power-local-llm/local-rag-on-your-pdfs-step-by-step) 教程。要将 RAG 从玩具示例扩展到 1,000+ PDF,请参阅 [本地与 1000+ PDF 聊天](/zh/power-local-llm/chat-with-1000-pdfs-locally)。',
          },
        ],
      },
      architectureCustom: {
        id: 'architecture-custom',
        title: '架构 C:自建 Python + ChromaDB',
        content:
          '**仅当您真的有 100,000+ 条目、多用户需求或现成工具无法建模的特定 schema 需求时,自建 Python + ChromaDB + Ollama 技术栈才是正确选择。** 维护成本是真实的:分块、去重、重排、同步、备份 — 您拥有一切。',
        items: [
          '**存储:** 文件系统 (每个来源一个文件夹:`notes/`、`pdfs/`、`web/`、`email/`) + 元数据清单 (SQLite 或 JSONL)。源文件保持开放格式,以便您可以更换检索层而无需重新摄取。',
          '**捕获:** 由 webhook 触发的脚本 (Web Clipper → HTTP 端点 → 文件写入)、邮件转发 → IMAP poller → 文件写入、移动分享 → Tailscale 端点 → 文件写入。每个捕获路径都是一个小型 Python 服务。',
          '**嵌入:** ChromaDB (本地模式,持久化到磁盘) + 通过 OpenAI 兼容端点的 Ollama 嵌入。通过 watchdog 进程在文件更改时重新嵌入。ChromaDB 通过 HNSW 索引在单台机器上扩展至数百万向量。',
          '**检索:** ChromaDB top-k 相似度 + 重排器 (BGE Re-ranker 或本地 Cohere 等价物) + 元数据过滤 (日期范围、标签、来源)。可选与 BM25 在块上的混合搜索,用于精确词项匹配。',
          '**界面:** 任意组合:小型 FastAPI 服务暴露 OpenAI 兼容 `/v1/chat/completions` 端点、Streamlit / Gradio UI、CLI 或全部三者。在前面放 Open WebUI,无需编写 UI 代码即可获得精致的聊天体验。',
          '**设置时间:** ~1 天可工作的 v1;~2 周迭代调优分块、检索质量和针对您数据的捕获管道。',
          '**硬件:** 32 GB 内存笔记本用于开发;100,000 条目以上家庭服务器 64 GB 内存,这样嵌入服务不会与您的笔记本竞争。500K 以上为聊天吞吐量考虑专用 GPU (RTX 4060 或更好)。',
          '**条目上限:** 通过 HNSW + 分片可行 1M+ 条目;瓶颈从检索转移到捕获管道可靠性和 schema 更改时的重新嵌入成本。',
          '**最适合:** 希望拥有技术栈的工程师、有自定义 schema 的团队 (例如「每个条目都有置信度分数、来源和作者」),或在 Obsidian 或 AnythingLLM 中遇到硬限制 (分别为 50K 和 100K) 的用户。',
          '**不适合:** 非工程师;低估维护成本的任何人;用例已被现成选项覆盖的用户。',
        ],
        promptExamples: [
          {
            label: 'ChromaDB 摄取 (Python 草图)',
            text: 'import chromadb, ollama, pathlib\nclient = chromadb.PersistentClient(path="./chroma")\ncoll = client.get_or_create_collection("kb")\nfor p in pathlib.Path("vault").rglob("*.md"):\n    text = p.read_text()\n    emb = ollama.embeddings(model="nomic-embed-text", prompt=text)["embedding"]\n    coll.upsert(ids=[str(p)], embeddings=[emb], documents=[text], metadatas=[{"source": str(p)}])',
          },
          {
            label: '带重排的查询 (草图)',
            text: 'q = "What did I write about local RAG sync?"\nq_emb = ollama.embeddings(model="nomic-embed-text", prompt=q)["embedding"]\nhits = coll.query(query_embeddings=[q_emb], n_results=20)\n# pass hits["documents"] through a re-ranker, keep top 5\n# send top 5 + question to Llama 3.2 3B via Ollama chat endpoint',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: '自建项目最常见的失败模式:由于 schema 不稳定,在每次代码更改时重新嵌入整个归档。在摄取超过 ~5,000 条目之前,锁定嵌入模型 + 块大小。在 100K 条目时从 nomic-embed-text 768 维迁移到 mxbai-embed-large 1024 维需要数小时计算并破坏 ChromaDB 集合 — 您不能混合维度。',
          },
        ],
      },
      capture: {
        id: 'capture',
        title: '捕获管道:网页、邮件、移动、语音',
        content:
          '**捕获层决定您的 PKB 能否经受日常使用。大多数知识在桌面之外到达 — 在移动端、邮件、语音笔记中 — 而要求先打开桌面应用的捕获管道是被绕过的管道。** 为四个主要流入构建,接受 80% 的条目将在移动端到达。',
        items: [
          '**Web Clipper (桌面 + 移动):** Obsidian Web Clipper、AnythingLLM 浏览器扩展,或将当前页面 POST 到您的捕获端点的自定义 bookmarklet。移动分享 → Web Clipper 扩展 → vault。',
          '**邮件转发:** 专用地址 (例如 `kb@yourdomain.com`) + IMAP poller → 文件写入。转发您想保留的邮件;poller 处理摄取。在文件名中使用每个来源的前缀,以便检索可以按来源过滤。',
          '**移动分享:** 最常用的捕获路径。iOS Share → Obsidian (写入 Markdown 文件)、iOS Share → Working Copy (提交到 Git)、iOS Share → 自定义 Shortcut (POST 到您的捕获 API)。Android:HTTP Shortcuts 或 Tasker。',
          '**语音笔记:** 类似 AudioPen 的捕获在 2026 年越来越普遍。在手机上录音 → 用 Whisper.cpp 本地转录或通过自托管 Whisper 服务 → 将转录写为 Markdown 文件 → 嵌入。',
          '**手动粘贴:** 备用方案。始终有效,从不扩展。用于长尾。',
          '**截图 OCR:** 截图是有损的捕获格式。在 iOS 上使用 Apple Live Text 或本地 OCR 管道 (Tesseract、Apple Vision、EasyOCR) 提取文本 + 写入包含图像和 OCR 文本的 Markdown 文件。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '在设计管道之前审计您现有的捕获习惯。看看您已经保存的:浏览器书签、截图、转发邮件、语音备忘录。PKB 捕获层应反映这些现有流入 — 如果您已经在不断截图,构建 OCR 路径;如果您已经在向自己转发邮件,构建邮件转发。添加新习惯 (「从现在起我手动复制粘贴每篇文章到 KB」) 从来都不奏效。',
          },
        ],
      },
      mobileCapture: {
        id: 'mobile-capture',
        title: '移动捕获:iOS Shortcuts、Working Copy、a-Shell',
        content:
          '**iOS 在 2026 年有三条可行的本地 AI PKB 捕获路径:Shortcuts → Obsidian、Shortcuts → Working Copy (Git),或 Shortcuts → a-Shell (脚本驱动)。** 每条路径自然地与三种参考架构之一配对。选择其同步模型符合您整体架构的路径。',
        items: [
          '**Shortcuts → Obsidian (Obsidian 中心型):** Obsidian「附加到笔记」Shortcut 将捕获的内容直接写入 vault。通过 Obsidian Sync (付费,推荐) 或 iCloud Drive (免费,有限制) 同步。最适合笔记优先工作流。',
          '**Shortcuts → Working Copy (Git):** 捕获的内容写入 iPhone 上的 Working Copy 仓库,然后自动提交并推送。桌面拉取。免费、稳健,与任何 Markdown vault 配合工作。注意:Working Copy 是付费的 (一次性约 $20)。最适合 Git 同步的 vault。',
          '**Shortcuts → a-Shell:** a-Shell 是运行脚本的免费 iOS 终端。构建一个 Shortcut,将捕获的文本管道传递给 a-Shell 脚本,该脚本写入文件并通过 `git` 提交,通过 Tailscale 上的 `rsync` 同步,或上传到您的自定义捕获端点。最适合工程师构建的自定义架构。',
          '**Android 等价物:** Tasker + Termux + Git 作为 iOS Working Copy 路径的对应。HTTP Shortcuts 用于自定义端点路径。Obsidian Mobile 分享用于 Obsidian 路径。',
          '**延迟预算:** 移动捕获应在端到端 5 秒内完成 (分享 → 文件写入 / 提交 / 上传)。任何更慢用户都会打开应用一次再也不打开。',
          '**离线捕获:** 三条 iOS 路径都离线排队 (Shortcuts 排队,Working Copy 排队提交,a-Shell 脚本可本地写入并稍后同步)。对飞行、交通和农村地区的捕获至关重要。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '不要构建需要桌面在线的移动捕获路径 (例如 POST 到仅在您的笔记本唤醒时可达的 Tailscale 保护端点)。您将在工作会议期间、笔记本睡眠模式期间和夜间丢失捕获。要么在始终在线的家庭服务器 / NAS 上运行捕获端点,要么写入离线缓冲的最终一致性存储 (Obsidian Sync、Git、iCloud)。',
          },
        ],
      },
      scaling: {
        id: 'scaling',
        title: '扩展:1K、10K、100K 条目',
        content:
          '**扩展本地 AI PKB 有三种状态:1,000 条目以下,任何现代笔记本上一切都很快;1,000–10,000 条目,嵌入索引成为需要管理的真实工件;10,000 条目以上,硬件成为瓶颈,捕获管道可靠性主导结果。** 以下现实数字假设 Mac M3 Pro / RTX 4060 PC 配 nomic-embed-text 和 Llama 3.2 3B。',
        columns: ['条目数', '推荐架构', '初始嵌入时间', '硬件', '备注'],
        rows: [
          { '条目数': '1,000 条目', '推荐架构': '三者任一', '初始嵌入时间': '~2 分钟', '硬件': '16 GB 内存笔记本', '备注': '一切感觉即时。架构选择纯粹按工作流契合度。' },
          { '条目数': '10,000 条目', '推荐架构': 'Obsidian 或 AnythingLLM', '初始嵌入时间': '~25 分钟', '硬件': '16 GB 内存笔记本 (推荐 32 GB)', '备注': '嵌入索引 ~150–250 MB。编辑时重新嵌入亚秒级。大多数知识工作者的甜蜜点。' },
          { '条目数': '50,000 条目', '推荐架构': 'AnythingLLM 或自建 Python', '初始嵌入时间': '~3 小时', '硬件': '32 GB 内存笔记本或家庭服务器', '备注': '初始索引夜间运行。此后规划子 vault / 工作区。嵌入磁盘使用 ~1.5–2 GB。' },
          { '条目数': '100,000 条目', '推荐架构': 'AnythingLLM (多工作区) 或自建 Python', '初始嵌入时间': '6–8 小时', '硬件': '最低 32 GB 内存;首选家庭服务器', '备注': '将嵌入迁移到专用家庭服务器。捕获管道可靠性现在是主要故障模式,而不是检索。' },
          { '条目数': '500,000+ 条目', '推荐架构': '自建 Python + ChromaDB', '初始嵌入时间': '24+ 小时', '硬件': '64 GB 内存家庭服务器 + 专用 GPU', '备注': '分片、去重和增量重新嵌入管道变得必要。现成工具不再适合。' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '初始嵌入成本是一次性账单。第一次索引后,只有更改的条目重新嵌入 — 即使在 100K 条目下也通常每次保存不到一秒。第一次的缓慢体验是真实的,但不会重复。在通电的机器上夜间运行初始索引,然后忘记它。',
          },
        ],
      },
      backupSync: {
        id: 'backup-sync',
        title: '备份、版本控制、多设备同步',
        content:
          '**本地 AI PKB 需要三层备份:vault 快照 (Time Machine、Backblaze、restic)、明文内容的 Git 历史,以及作为干净重建路径的嵌入和元数据的季度导出。** 嵌入在技术上可重新生成,但在 100K+ 条目时重新生成成本是数小时 — 也要备份它们。',
        items: [
          '**vault 快照 (文件系统级):** 每 24 小时的 Time Machine (macOS) 或 restic (Linux)。Backblaze 或 rsync.net 用于异地。捕获包括嵌入在内的一切。',
          '**Git 历史 (仅内容):** 提交到 Git 仓库 (本地 + GitHub / Gitea private) 的明文 Markdown 文件。将 `.smart-env/`、`vector_store/` 和任何其他二进制索引文件夹添加到 `.gitignore`。Git 提供每条笔记的版本历史;vault 快照提供整个系统回滚。',
          '**嵌入导出 (季度):** 将向量库导出为可移植格式 (ChromaDB → parquet、Smart Connections → JSON dump、AnythingLLM → 内置导出)。最近两次导出保留在异地。如果 vault 快照失败或嵌入索引损坏,这是您的快速重建路径。',
          '**多设备同步 — Obsidian 中心型:** Obsidian Sync 干净处理明文 + 二进制索引 (端到端加密)。iCloud Drive 适用于明文,但跨平台破坏二进制索引。Working Copy / Termux 上的 Git 仅适用于明文 — 按设备重新索引。',
          '**多设备同步 — AnythingLLM 中心型:** 在家庭服务器上将 AnythingLLM 作为自托管 Docker 容器运行。所有设备通过 LAN 或 Tailscale 连接到同一实例。无需客户端同步。',
          '**多设备同步 — 自建 Python:** 您构建的架构决定它。大多数构建使用中央 API 服务 (家庭服务器上的 FastAPI) + POST 捕获和 GET 查询的客户端。Tailscale 提供网络层。',
          '**迁移到新计算机:** 恢复 vault 快照 → 恢复 Git 仓库 → 重启 Ollama → 重启嵌入索引器。如果您跳过了嵌入导出步骤,嵌入重新生成是自动的;如果您备份了它但格式与平台相关,则需要手动重新索引。',
          '**选择性共享:** 要共享 vault 的部分 (例如与合著者的研究项目),使用子 vault 或带标签的导出脚本。不要共享整个 vault — 大多数本地 AI PKB 积累不应离开本地技术栈的敏感条目 (医疗、财务、个人)。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '每季度测试一次恢复。大多数「我有备份」的说法都是愿望 — 测试是「我能在不到 2 小时内将我的 vault 恢复到一台新笔记本上吗?」 运行该测试。第一次这样做时,您会发现三层 (快照、Git、嵌入导出) 中有一层在过去六个月被错误配置。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**在捕获层之前设计检索层。** 在 47 条目的 vault 上,带重排的自定义混合搜索是浪费。先构建捕获,接受朴素 top-5 检索,只在 vault 拥有 1,000+ 条目并能在真实查询上测量检索质量后才优化检索。',
          '**混合架构。** 「Obsidian 用于笔记 + AnythingLLM 用于 PDF + 自建 Python 用于邮件」听起来干净,但集成成本占主导。选择一种架构,接受其限制,只在绝对必要时添加单个连接器 (例如 AnythingLLM 只读摄取 Obsidian vault 文件夹)。',
          '**切换嵌入模型而不重新嵌入归档。** 在同一存储中混合 nomic-embed-text 768 维和 mxbai-embed-large 1024 维向量会悄无声息地破坏检索。选择一个嵌入模型 + 维度,锁定它,只通过完整重新嵌入归档来切换。',
          '**忽略 10,000 条目以上嵌入索引的备份。** 「我可以重新生成它」是真的,但重新生成需要数小时。10K 条目以上将嵌入存储添加到您的备份策略。',
          '**为桌面设计但 80% 的捕获在移动端发生。** 没有移动捕获路径的 PKB 会被闲置。第一天就测试移动捕获流程 — 分享到 vault 应在 5 秒内完成。',
          '**依赖 iCloud Drive 处理二进制嵌入索引。** iCloud 干净处理明文;二进制索引 (Smart Connections `.smart-env/`、AnythingLLM 向量库) 跨平台破坏。使用 Obsidian Sync、自托管实例,或接受按设备重新索引。',
          '**100K 条目时不分区。** 100K+ 条目的单个工作区 / vault 检索延迟为秒级。按主题 (工作、阅读、项目) 分区到多个工作区或子 vault;分别查询每个或通过路由器查询。',
          '**低估合规风险。** 个人知识库不可避免地积累敏感数据 (客户、患者、同事来信、财务和医疗笔记)。中国《数据安全法》(2021) 要求重要数据本地化存储和处理 — 本地推理满足数据本地化要求,因为没有跨境数据流动,无需签订第三方处理协议。对于金融、医疗、法律行业的企业部署,本地技术栈是合规的更简洁路径。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          'Obsidian — [obsidian.md](https://obsidian.md) 和 [help.obsidian.md](https://help.obsidian.md) (vault 结构、移动同步架构、插件文档)。',
          'AnythingLLM — [github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) (开源自托管 RAG 应用)。',
          'Ollama — [ollama.com](https://ollama.com) 和 [github.com/ollama/ollama](https://github.com/ollama/ollama) (本地 LLM 运行时;聊天 + 嵌入端点)。',
          'ChromaDB — [trychroma.com](https://www.trychroma.com) 和 [github.com/chroma-core/chroma](https://github.com/chroma-core/chroma) (开源本地向量数据库)。',
          'Working Copy — [workingcopy.app](https://workingcopy.app) (用于移动捕获管道的 iOS Git 客户端)。',
          'a-Shell — [holzschu.github.io/a-Shell_iOS/](https://holzschu.github.io/a-Shell_iOS/) (用于脚本驱动移动捕获的免费 iOS 终端)。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '如何将网页捕获到我的知识库?',
            a: '按摩擦排序的三个选项。(1) 浏览器扩展 Web Clipper — Obsidian Web Clipper 或 AnythingLLM 浏览器扩展将当前页面直接写入您的 vault / 工作区。(2) 移动分享 — 分享 Safari / Chrome → Obsidian (写入 Markdown 文件) 或 → Working Copy (提交到 Git) 或 → 自定义 Shortcut (POST 到您的捕获 API)。(3) Bookmarklet — 用于没有扩展的浏览器;将当前 URL + 选区 POST 到您的捕获端点。在实践中,移动分享是最常用的路径 — 先设计它。',
          },
          {
            q: '我可以将邮件转发到系统吗?',
            a: '可以。设置一个专用地址 (例如 Fastmail / Migadu 别名 `kb@yourdomain.com`) 并在您的家庭服务器或笔记本上运行 IMAP poller,该 poller 下载新邮件并将每封邮件作为一个 Markdown 文件写入您的 vault。在文件名中使用 from 地址前缀,以便检索可以按发件人过滤。AnythingLLM 有原生邮件集成;Obsidian 用户通常自己构建 IMAP poller 或使用 IFTTT / Zapier 替代品如 n8n。',
          },
          {
            q: '如何在桌面和移动之间同步?',
            a: '取决于架构。Obsidian 中心型:Obsidian Sync (付费,干净处理二进制索引)、iCloud Drive (免费,仅明文 — 按设备重新索引) 或 Working Copy 上的 Git (免费 + 一次性 Working Copy 费用,仅明文 — 按设备重新索引)。AnythingLLM 中心型:在家庭服务器上以 Docker 运行 AnythingLLM,所有设备通过 LAN 或 Tailscale 连接 — 无需客户端同步。自建 Python:在家庭服务器上构建中央 API 服务;客户端 POST 捕获并 GET 查询。',
          },
          {
            q: '应该使用一个大 vault 还是按主题拆分?',
            a: '~50,000 条目以下使用一个 vault。50K 以上按主题拆分 (工作、阅读、项目、个人),原因有二:检索延迟保持在 ~1 秒以下,以及上下文之间的意外交叉泄漏 (例如个人笔记出现在工作查询中) 在大规模时变得可能。早于 50K 拆分为时过早 — 您会失去 PKB 的主要价值之一:跨领域偶然连接。',
          },
          {
            q: '为了准确度应该多久重新嵌入一次?',
            a: '永远不要因「准确度漂移」而重新嵌入 — 嵌入不会退化。仅在更改嵌入模型时重新嵌入 (例如从 nomic-embed-text 升级到 mxbai-embed-large 以在技术内容上获得更好的检索)。三种架构都自动处理文件更改时的增量重新嵌入;您不安排它。例外是您控制索引器的自建 Python 技术栈 — 在那里,基于 watchdog 的保存时增量重新嵌入是标准做法。',
          },
          {
            q: '我可以对知识库进行版本控制吗?',
            a: '可以,对明文内容 (Markdown vault → Git 仓库,本地 + GitHub / Gitea private)。将二进制索引文件夹 (`.smart-env/`、`vector_store/`、ChromaDB 持久化目录) 添加到 `.gitignore` — 它们使历史膨胀并导致合并冲突。Git 提供每条笔记的版本历史;vault 快照 (Time Machine、restic) 提供整个系统回滚。两层都要,而不是二选一。',
          },
          {
            q: '如何在此系统中处理 PDF?',
            a: 'Obsidian 中心型:将 PDF 与 Markdown 笔记一起存储;Smart Connections 不直接嵌入 PDF 内容 — 先提取文本 (例如通过 PDF++ 插件或在每个 PDF 旁边写入 Markdown 摘要的预处理脚本)。AnythingLLM 中心型:将 PDF 直接拖入工作区;AnythingLLM 自动处理 PDF 解析和分块。自建 Python:在摄取管道中使用 `pypdf` 或 `pdfplumber` 提取文本,然后嵌入提取的文本。AnythingLLM 是 PDF 重度归档摩擦最小的选项。',
          },
          {
            q: '我可以选择性共享 KB 的部分吗?',
            a: '可以,但从第一天就为此设计。使用子 vault (Obsidian) 或工作区 (AnythingLLM) 将「可共享」和「私有」内容保留在分离的存储中。一次性共享时,构建一个带标签导出脚本,按标签 (例如 `#shareable`) 提取条目到一个可移植 Markdown 包中。不要共享整个 vault — 大多数本地 AI PKB 积累不应离开本地技术栈的敏感条目 (医疗、财务、个人通信)。',
          },
          {
            q: '最佳备份策略是什么?',
            a: '三层:(1) 每 24 小时文件系统快照 (Time Machine / restic) 加异地副本 (Backblaze / rsync.net);(2) 明文内容的 Git 历史用于每条笔记版本恢复;(3) 嵌入 + 元数据的季度导出作为快速重建路径。每季度测试一次恢复 — 「我能在不到 2 小时内在新笔记本上重建我的 vault 吗?」 第一次恢复测试通常会揭示三层中有一层被错误配置。',
          },
          {
            q: '如何迁移到新计算机?',
            a: '恢复 vault 快照 → 安装 Ollama 并拉取相同模型 → 安装 Obsidian / AnythingLLM / 您的自建 Python 技术栈 → 重启嵌入索引器。使用 Obsidian Sync 或自托管 AnythingLLM,迁移就是「安装客户端并登录」 — 无需手动恢复。否则,10K 条目 vault 大约需要 ~30 分钟,50K 大约 ~2 小时,如果您跳过了嵌入导出步骤,100K 以上需要一夜。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Obsidian + 本地 LLM:将您的 vault 变成第二大脑的 5 个插件 (2026)](/zh/power-local-llm/local-llm-with-obsidian-2026) — 架构 A 的插件层深入探讨。',
          '[Logseq 和 Joplin 的本地 LLM](/zh/power-local-llm/local-llm-with-logseq-and-joplin) — 如果 Obsidian 不是您的选择,PKB 的替代存储层。',
          '[本地与 1000+ PDF 聊天:将 RAG 扩展到玩具示例之外](/zh/power-local-llm/chat-with-1000-pdfs-locally) — 将 RAG 层扩展到 1,000 条目以上,适用于所有三种架构。',
          '[30 分钟内为 PDF 构建本地 RAG (Ollama + AnythingLLM)](/zh/power-local-llm/local-rag-on-your-pdfs-step-by-step) — 架构 B 中使用的检索层 RAG 实现演练。',
          '[本地 RAG 的最佳嵌入模型 (2026)](/zh/power-local-llm/best-embedding-models-local-rag-2026) — 三种架构每种的嵌入模型选择 (nomic-embed-text vs mxbai-embed-large vs bge-m3)。',
          '[RAG 解释](/zh/prompt-engineering/rag-explained) — 检索层的概念权威。',
          '[本地 LLM 硬件指南 2026](/zh/local-llms/local-llm-hardware-guide-2026) — 16 GB 门槛、10K 以上 32 GB、100K 以上家庭服务器的硬件规格。',
          '[本地 LLM 软件目录 2026](/zh/power-local-llm/local-llm-software-directory-2026) — Ollama、ChromaDB、AnythingLLM、Obsidian 和技术栈其他组件的目录列表。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Construye una base de conocimiento personal con IA local: guía de stack 2026',
    seoTitle: 'Base de conocimiento con IA local: guía de stack 2026',
    intro:
      'Una base de conocimiento personal (PKB) construida sobre IA local en 2026 tiene cinco capas: captura (web clipper, reenvío de email, hoja de compartir en móvil), almacenamiento (vault de Markdown o carpeta de documentos), embeddings (modelo local via Ollama), recuperación (RAG) e interfaz (chat o búsqueda semántica). Tres arquitecturas cubren aproximadamente el 95 % de los casos reales — centrada en Obsidian (orientada a notas, escala hasta ~50.000 elementos), centrada en AnythingLLM (orientada a documentos, escala hasta ~100.000 elementos) y un stack personalizado de Python + ChromaDB (orientada a ingenieros, escala por encima de 1 millón de elementos). El mínimo de hardware es un portátil con 16 GB de RAM; más allá de 10.000 elementos, planifica 32 GB. La decisión de escalado más importante no es el LLM — sino si tu pipeline de captura sobrevive al uso diario en móvil, donde llega la mayor parte del conocimiento.',
    metaDescription:
      'Base de conocimiento personal con IA local 2026: Obsidian, AnythingLLM y Python + ChromaDB comparados. Escala a 100.000+ elementos. Captura, RAG y backup.',
    twitterDescription:
      'Tres arquitecturas de PKB con IA local en 2026: Obsidian (~50K elementos), AnythingLLM (~100K), Python + ChromaDB (1M+). Captura, RAG, sync móvil, backup, escalado.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Qwen3 7B',
      'nomic-embed-text',
      'mxbai-embed-large',
      'bge-m3',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16 GB de memoria unificada mínimo, 32 GB recomendado a partir de 10.000 elementos)',
      'PC con RTX 3060 12 GB o RTX 4060 8 GB',
      'PC con 32 GB de RAM (fallback solo-CPU para vaults grandes)',
      'Servidor doméstico / mini PC con 64 GB de RAM (stack Python personalizado para más de 100.000 elementos)',
    ],
    audience:
      'Trabajadores del conocimiento, investigadores, escritores e ingenieros que construyen un archivo privado con búsqueda IA de sus notas, marcadores, emails y documentos — típicamente entre 1.000 y 100.000 elementos — sin enviar contenido a un servicio en la nube.',
    readTime: '15 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'base de conocimiento personal con IA local',
    targetKeywords: [
      'base de conocimiento IA local',
      'second brain LLM local',
      'base de conocimiento privada IA',
      'RAG local base de conocimiento',
      'base de conocimiento self-hosted IA',
      'base de conocimiento personal 2026',
    ],
    leadAnswerBlock:
      '**Una base de conocimiento con IA local en 2026 es un stack de cinco capas — captura, almacenamiento, embeddings, recuperación, interfaz — y deberías elegir una de las tres arquitecturas de referencia en lugar de diseñar desde cero.** Usa Obsidian + Smart Connections + Copilot for Obsidian + Ollama si escribes notas a diario y quieres búsqueda semántica en todo el vault; escala limpiamente hasta ~50.000 notas en un Mac M3 Pro de 16 GB o un PC equivalente. Usa AnythingLLM + Ollama si tu conocimiento vive principalmente como documentos (PDFs, exportaciones, recortes web) en lugar de notas; escala hasta ~100.000 documentos y agrupa captura, RAG y chat en una sola app. Construye un stack personalizado de Python + ChromaDB + Llama 3.2 3B solo si tienes más de 100.000 elementos, acceso multiusuario o requisitos de esquema específicos — el coste de mantenimiento es real. El verdadero cuello de botella en las tres arquitecturas es la captura: la mayor parte del conocimiento llega en móvil (páginas web, capturas de pantalla, notas de voz, emails reenviados), y un stack sin ruta de captura móvil acumula polvo independientemente de lo inteligente que sea la recuperación. Mínimo de hardware: 16 GB de RAM; más de 10.000 elementos, presupuesta 32 GB. Más de 100.000 elementos, mueve los embeddings a un servidor doméstico.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor arquitectura de base de conocimiento con IA local en 2026?',
        answer:
          'Para la mayoría de personas: Obsidian + Smart Connections + Copilot for Obsidian + Ollama (Llama 3.2 3B para chat, nomic-embed-text para embeddings). Escala hasta ~50.000 notas en un Mac de 16 GB. Para archivos con muchos documentos: AnythingLLM + Ollama en una sola app, escala hasta ~100.000 documentos. Para ingenieros y vaults con más de 100.000 elementos: stack personalizado de Python + ChromaDB + Llama 3.2 3B con servicios de captura, embedding y chat separados. Mínimo de hardware 16 GB de RAM; presupuesta 32 GB a partir de 10.000 elementos y un servidor doméstico a partir de 100.000. La captura es el verdadero cuello de botella de escalado — diseña la hoja de compartir móvil, el web clipper y el reenvío de email antes de optimizar el LLM.',
        bullets: [
          'Centrada en Obsidian — mejor para flujos de trabajo orientados a notas, escala hasta ~50.000 notas, mínimo 16 GB de RAM.',
          'Centrada en AnythingLLM — mejor para PKBs con muchos documentos (PDFs, exportaciones), escala hasta ~100.000 documentos, app todo en uno.',
          'Stack personalizado Python + ChromaDB — mejor para ingenieros, escala más de 1 millón de elementos, requiere servicios autogestionados.',
          'Modelos de chat recomendados en 2026: Llama 3.2 3B para sistemas de 16 GB, Phi-4 Mini para 8 GB, Qwen3 7B para calidad en 32 GB+.',
          'Modelos de embedding recomendados: nomic-embed-text (768 dimensiones, rápido) o mxbai-embed-large (1024 dimensiones, más preciso); bge-m3 para archivos multilingues.',
          'Mínimo de hardware: portátil con 16 GB de RAM; 32 GB recomendado a partir de 10.000 elementos; servidor doméstico con 64 GB a partir de 100.000.',
          'La captura es el cuello de botella: la mayoría de los elementos de PKB se capturan en móvil (páginas web, capturas de pantalla, notas de voz) y se consultan en escritorio. iOS Shortcuts → Obsidian, Working Copy (Git) o a-Shell son las tres rutas de captura móvil.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: '¿Qué arquitectura construir?', anchor: '#which-architecture' },
      { label: 'Tabla comparativa de arquitecturas', anchor: '#comparison-table' },
      { label: 'Las cinco capas de una PKB con IA local', anchor: '#five-layers' },
      { label: 'Arquitectura A: centrada en Obsidian', anchor: '#architecture-obsidian' },
      { label: 'Arquitectura B: centrada en AnythingLLM', anchor: '#architecture-anythingllm' },
      { label: 'Arquitectura C: Python + ChromaDB personalizado', anchor: '#architecture-custom' },
      { label: 'Pipeline de captura: web, email, móvil, voz', anchor: '#capture' },
      { label: 'Captura móvil: iOS Shortcuts, Working Copy, a-Shell', anchor: '#mobile-capture' },
      { label: 'Escalado: 1K, 10K, 100K elementos', anchor: '#scaling' },
      { label: 'Backup, control de versiones, sincronización multidispositivo', anchor: '#backup-sync' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Elige una de las tres arquitecturas de referencia en lugar de diseñar desde cero.** Centrada en Obsidian (orientada a notas, ~50K elementos), centrada en AnythingLLM (orientada a documentos, ~100K elementos) o stack personalizado de Python + ChromaDB (orientada a ingenieros, más de 1M de elementos). Mezclar arquitecturas rara vez vale la pena — el coste de integración domina.',
          '**Una PKB con IA local tiene cinco capas: captura, almacenamiento, embeddings, recuperación, interfaz.** La mayoría de errores de principiantes ocurren en la capa de captura, no en el LLM. Si los elementos no fluyen desde el móvil y el email, ninguna recuperación inteligente salvará el proyecto.',
          '**Mínimo de hardware: 16 GB de RAM.** Por debajo de eso, tienes que elegir entre ejecutar un modelo de embedding o un modelo de chat — no ambos. Con 16 GB puedes ejecutar Llama 3.2 3B + nomic-embed-text de forma concurrente. Con 32 GB puedes subir a Qwen3 7B o ejecutar varias sesiones de chat. Más de 100.000 elementos, mueve los embeddings a un servidor doméstico.',
          '**Modelos recomendados en 2026:** chat — Llama 3.2 3B (por defecto), Phi-4 Mini (sistemas de 8 GB), Qwen3 7B (calidad en 32 GB+); embeddings — nomic-embed-text (768 dimensiones, rápido), mxbai-embed-large (1024 dimensiones, más preciso), bge-m3 (multilingue).',
          '**La captura es el cuello de botella de escalado, no la recuperación.** La mayoría de los elementos de conocimiento llegan en móvil (recortes web, capturas de pantalla, notas de voz, emails reenviados). Diseña la ruta hoja de compartir móvil → vault antes de ajustar el LLM. iOS Shortcuts → Obsidian / Working Copy / a-Shell son las tres rutas iOS viables.',
          '**El método de sincronización determina lo que funciona en móvil.** Obsidian Sync gestiona los índices binarios de embeddings de forma limpia; iCloud Drive los corrompe entre plataformas; Git requiere disciplina con .gitignore y reindexación por dispositivo. Elige la sincronización primero, los plugins después.',
          '**El backup no es opcional.** Tres capas: snapshot del vault (Time Machine, Backblaze, restic), historial Git del contenido en texto plano y una exportación trimestral de embeddings + metadatos como ruta de reconstrucción limpia. Los embeddings son regenerables pero costosos — también respaldalos si tu vault supera los 10.000 elementos.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Arquitecturas cubiertas:** centrada en Obsidian, centrada en AnythingLLM, stack personalizado Python + ChromaDB.',
          '**Backend LLM:** Ollama (recomendado) — ejecuta modelos de chat y embedding detrás de un endpoint local en `http://localhost:11434`.',
          '**Modelos de chat recomendados 2026:** Llama 3.2 3B (sistemas de 16 GB), Phi-4 Mini (8 GB), Qwen3 7B (32 GB+).',
          '**Modelos de embedding recomendados 2026:** nomic-embed-text (768 dimensiones, rápido), mxbai-embed-large (1024 dimensiones, preciso), bge-m3 (multilingue).',
          '**Objetivos de número de elementos:** Obsidian ~50.000 notas, AnythingLLM ~100.000 documentos, stack personalizado Python + ChromaDB más de 1M.',
          '**Mínimo de hardware:** portátil con 16 GB de RAM. Más de 10.000 elementos: 32 GB recomendado. Más de 100.000 elementos: servidor doméstico con 64 GB.',
          '**Rutas de captura móvil (iOS):** Shortcuts → Obsidian, Shortcuts → Working Copy (Git), Shortcuts → a-Shell. Android: Tasker o HTTP Shortcuts.',
        ],
      },
      whichArchitecture: {
        id: 'which-architecture',
        title: '¿Qué arquitectura construir?',
        content:
          '**Elige la arquitectura que coincida con cómo llega ya tu conocimiento, no la que suene más potente.** Si ya escribes notas a diario, construye centrada en Obsidian. Si tu conocimiento son principalmente documentos (PDFs, exportaciones, recortes web), construye centrada en AnythingLLM. Construye un stack personalizado de Python + ChromaDB solo si genuinamente tienes más de 100.000 elementos o necesitas acceso multiusuario — el coste de mantenimiento es real y rara vez vale la pena por debajo de ese umbral.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Los flujos de trabajo orientados a notas eligen Obsidian + Smart Connections + Copilot + Ollama; los archivos orientados a documentos eligen AnythingLLM + Ollama; los ingenieros con más de 100K elementos eligen un stack personalizado de Python + ChromaDB.',
          },
          {
            type: 'plain-terms',
            text: 'Tres caminos, un destino. Si ya vives dentro de una app de notas, Obsidian envuelve tu hábito existente con funciones de IA. Si principalmente acumulas PDFs y páginas web, AnythingLLM es una sola app que ingiere, indexa y chatea. Si escribes código y quieres control total, Python + ChromaDB te permite construir exactamente lo que quieres — pero tú lo mantienes. Elige el camino que coincida con tu flujo de trabajo existente; no cambies tus hábitos para adaptarte a la arquitectura.',
          },
        ],
        decisionBlock: {
          title: 'Decisión: ¿qué arquitectura de PKB?',
          localIf: [
            'Ya usas Obsidian o quieres un flujo de trabajo orientado a notas con archivos Markdown → centrada en Obsidian',
            'Tu conocimiento son principalmente PDFs, exportaciones, recortes web y archivos de email → centrada en AnythingLLM',
            'Tienes más de 100.000 elementos, necesidades de esquema personalizadas o acceso multiusuario → stack personalizado Python + ChromaDB',
            'Quieres una app que gestione captura, almacenamiento, RAG y chat → centrada en AnythingLLM',
            'Quieres control total sobre el chunking, la recuperación y el re-ranking → stack personalizado Python + ChromaDB',
          ],
          cloudIf: [
            'Necesitas razonamiento de clase GPT-5.5 en cada consulta y tu archivo es pequeño → Notion AI o ChatGPT con GPTs personalizados (el stack local es ~70% tan capaz en síntesis)',
            'No tienes ninguna máquina con 16 GB+ de RAM ni servidor doméstico → PKB SaaS en la nube (Mem, Reflect)',
            'Tu equipo necesita acceso concurrente multiusuario y no quieres alojar servicios → equivalente en la nube',
          ],
          quick: [
            'Por defecto para usuarios orientados a notas: Obsidian + Smart Connections + Copilot + Ollama',
            'Por defecto para usuarios orientados a documentos: AnythingLLM + Ollama',
            'Ingeniero con más de 100K elementos: stack personalizado Python + ChromaDB + Llama 3.2 3B',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'No empieces con el stack personalizado de Python solo porque suena más potente. Construye primero centrado en Obsidian o en AnythingLLM, ejecútalo durante dos meses, encuentra la capa que no coincide con tu flujo de trabajo, y solo entonces considera reemplazar esa capa con un componente personalizado. Todos los proyectos de PKB que empezaron "desde cero en Python" y funcionaron más de seis meses convergieron de todas formas en diseños con forma de Obsidian o de AnythingLLM.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa de arquitecturas',
        content:
          '**Las tres arquitecturas de referencia difieren en cinco ejes que importan a la mayoría de los constructores: complejidad de configuración, límite de número de elementos, sincronización móvil, flexibilidad de captura y carga de mantenimiento.** La complejidad de configuración crece aproximadamente de forma lineal con el control — y también el coste de mantenimiento.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obsidian tiene complejidad media en ~50K elementos, AnythingLLM tiene baja complejidad en ~100K elementos, y el stack personalizado Python + ChromaDB tiene alta complejidad pero escala más allá de 1M de elementos.',
          },
          {
            type: 'plain-terms',
            text: 'AnythingLLM es el más fácil de configurar y escala más lejos de las dos opciones "listas para usar" — pero es opinionado sobre cómo se organizan los documentos. Obsidian ofrece la capa de toma de notas más expresiva y un ecosistema de plugins activo, a cambio de un impuesto de configuración ligeramente mayor. Python personalizado no tiene límite pero tú mantienes todo: chunking, re-ranking, deduplicación, sincronización, backups. Elige por tu tolerancia al mantenimiento, no solo por el número de elementos.',
          },
        ],
        columns: ['Arquitectura', 'Complejidad', 'Máx. elementos', 'Sync móvil', 'Ideal para'],
        rows: [
          { 'Arquitectura': 'Centrada en Obsidian', 'Complejidad': 'Media', 'Máx. elementos': '~50.000', 'Sync móvil': 'Sí (Obsidian Sync; iCloud / Git con matices)', 'Ideal para': 'Usuarios orientados a notas con hábito de escritura diaria' },
          { 'Arquitectura': 'Centrada en AnythingLLM', 'Complejidad': 'Baja', 'Máx. elementos': '~100.000', 'Sync móvil': 'Limitada (web UI desde el móvil via LAN / Tailscale)', 'Ideal para': 'PKBs con muchos documentos (PDFs, exportaciones, recortes web)' },
          { 'Arquitectura': 'Python + ChromaDB personalizado', 'Complejidad': 'Alta', 'Máx. elementos': 'Más de 1M', 'Sync móvil': 'Manual (construye tu propia API + cliente móvil)', 'Ideal para': 'Ingenieros que quieren control total + multiusuario' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La sincronización móvil es el eje de comparación más subestimado. AnythingLLM es técnicamente más fácil de configurar que Obsidian, pero en móvil significa "abre la UI web LAN en Safari" — no es una experiencia nativa. Obsidian Mobile, combinado con Obsidian Sync, te ofrece una app iOS / Android casi nativa con lectura sin conexión. Si la captura y la lectura en móvil son importantes, pondera Obsidian más alto de lo que sugiere la tabla.',
          },
        ],
      },
      fiveLayers: {
        id: 'five-layers',
        title: 'Las cinco capas de una PKB con IA local',
        content:
          '**Toda PKB con IA local tiene las mismas cinco capas independientemente de la arquitectura: captura, almacenamiento, embeddings, recuperación, interfaz.** Los fallos suelen ocurrir porque una capa no coincide con las demás — lo más común, una capa de recuperación sofisticada emparejada con un pipeline de captura roto que nadie usa.',
        numberedItems: [
          {
            title: 'Captura',
            whyItMatters: 'Cómo entran los elementos al sistema. Web clipper, reenvío de email, hoja de compartir en móvil, nota de voz, pegado manual. La capa más omitida en builds de principiantes — y la capa que determina si el sistema sobrevive al uso diario. Si la captura tarda más de 5 segundos en móvil, el sistema acumula polvo.',
          },
          {
            title: 'Almacenamiento',
            whyItMatters: 'Dónde viven los elementos en disco. Vault de Markdown (Obsidian, Logseq), carpeta de documentos + base de datos (AnythingLLM) o sistema de archivos + manifiesto (Python personalizado). Elige un formato de almacenamiento que sobreviva a cualquier cambio de herramienta — el Markdown en texto plano es el más portable; las bases de datos binarias son las menos.',
          },
          {
            title: 'Embeddings',
            whyItMatters: 'Representaciones vectoriales de los elementos usadas para la búsqueda semántica. Generadas por un modelo local (nomic-embed-text o mxbai-embed-large via Ollama). El modelo de embedding se puede cambiar después, pero el coste de migración es "reembedear todo" — elige una vez y mantente en él.',
          },
          {
            title: 'Recuperación',
            whyItMatters: 'Cómo se encuentran los elementos en tiempo de consulta. Búsqueda vectorial top-k, re-ranking opcional, filtros de metadatos opcionales (etiquetas, fechas, fuentes). La diferencia de calidad entre un top-5 naïf y un top-20-con-re-ranker ajustado es la diferencia entre "útil" y "mágico".',
          },
          {
            title: 'Interfaz',
            whyItMatters: 'Cómo consultas y lees. Barra lateral (Smart Connections), chat (Copilot, AnythingLLM), CLI (Python personalizado) o API. La mayoría de usuarios usan el chat por defecto — pero una barra lateral de "notas relacionadas" muestra material olvidado que el chat no puede, porque no sabes qué preguntar.',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Un patrón de build común que falla: elegir la recuperación más potente (búsqueda híbrida personalizada con re-ranking), el modelo de chat más inteligente (Qwen3 7B), e ignorar la captura. Tres semanas después, el vault tiene 47 elementos porque nada fluye desde el móvil. La corrección es siempre la misma: simplifica la recuperación, simplifica el chat, arregla la captura, y acepta que el 80% del valor viene de que los elementos estén en el sistema.',
          },
        ],
      },
      architectureObsidian: {
        id: 'architecture-obsidian',
        title: 'Arquitectura A: centrada en Obsidian',
        content:
          '**Obsidian + Smart Connections + Copilot for Obsidian + Ollama es la arquitectura por defecto para flujos de trabajo orientados a notas en 2026.** Escala limpiamente hasta ~50.000 notas en un Mac M3 Pro de 16 GB o un PC equivalente, soporta lectura en móvil via Obsidian Mobile, y mantiene todo en Markdown de texto plano que puedes llevar a cualquier herramienta futura.',
        items: [
          '**Almacenamiento:** archivos Markdown en una carpeta ("vault"). Texto plano, carpetas simples, sin base de datos. Sobrevive a la migración de herramientas.',
          '**Captura:** Obsidian Web Clipper (extensión de navegador), hoja de compartir Obsidian Mobile (iOS / Android), email a Obsidian via Mailspike o una receta IFTTT personalizada, pegado manual.',
          '**Embeddings:** plugin Smart Connections → Ollama en `http://localhost:11434/api/embeddings` → nomic-embed-text (por defecto) o mxbai-embed-large (más preciso). El índice vive en `.smart-env/` dentro del vault.',
          '**Recuperación:** barra lateral Smart Connections (vista de notas relacionadas) + modo Vault QA de Copilot for Obsidian (RAG sobre el vault para consultas de chat). Ambos recuperan sobre el índice de embeddings.',
          '**Interfaz:** barra lateral Smart Connections (descubrimiento pasivo) + panel de chat Copilot (consultas activas) + plantillas Text Generator (flujos de trabajo repetibles como resúmenes diarios).',
          '**Tiempo de configuración:** ~30 min (instalar Ollama, descargar modelos, instalar tres plugins, configurar endpoints, dejar que construya el índice inicial).',
          '**Hardware:** mínimo 16 GB de RAM (Llama 3.2 3B + nomic-embed-text de forma concurrente). 32 GB recomendado a partir de 10.000 notas. SSD muy recomendado — la reconstrucción del índice está limitada por I/O en HDDs.',
          '**Límite de elementos:** ~50.000 notas en la práctica; probado hasta 20.000 con reindexación incremental sub-segundo. A partir de 50K+ notas, el índice inicial tarda 4-8 horas y deberías considerar sub-vaults.',
          '**Ideal para:** usuarios con hábito de escritura diaria, preferencias Markdown-first y deseo de una barra lateral "compañero de pensamiento" que muestre notas olvidadas.',
          '**No para:** usuarios cuyo conocimiento son principalmente PDFs y recortes web (usa centrada en AnythingLLM); usuarios que quieren una sola app todo en uno (centrada en Obsidian es "Obsidian + 3 plugins + Ollama").',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para un análisis profundo de la capa de plugins de esta arquitectura (qué 5 plugins, pasos de configuración, números de escala del vault), consulta la [guía de plugins Obsidian + LLM local](/es/power-local-llm/local-llm-with-obsidian-2026). Esta página cubre la arquitectura; la guía de plugins cubre la configuración.',
          },
        ],
      },
      architectureAnythingllm: {
        id: 'architecture-anythingllm',
        title: 'Arquitectura B: centrada en AnythingLLM',
        content:
          '**AnythingLLM + Ollama es la opción todo en uno: captura, almacenamiento, RAG y chat están integrados en una sola app de escritorio o autoalojada.** Escala hasta ~100.000 documentos (mezcla de PDFs, recortes web, exportaciones) y es la elección correcta cuando tu conocimiento llega principalmente como documentos en lugar de notas.',
        items: [
          '**Almacenamiento:** base de datos interna de AnythingLLM (SQLite por defecto; Postgres para multiusuario autoalojado). Los documentos se ingieren via la UI; los originales también pueden quedarse en una carpeta que sincronizas.',
          '**Captura:** subida en la app (arrastra PDFs / archivos a un workspace), extensión de navegador para páginas web, API pública para ingesta programática (`POST /api/v1/document/upload`), reenvío de email via la integración oficial o un relay personalizado.',
          '**Embeddings:** AnythingLLM usa el proveedor de embeddings que configures — elige "Ollama" → endpoint `http://localhost:11434` → modelo `nomic-embed-text`. Embeddings almacenados en el vector store integrado (LanceDB por defecto; ChromaDB / Pinecone opcionales).',
          '**Recuperación:** RAG sobre el workspace. Tamaño de chunk configurable, recuperación top-k, re-ranking opcional. Varios workspaces permiten particionar por tema (p. ej., "Trabajo", "Lecturas", "Proyectos").',
          '**Interfaz:** UI web de AnythingLLM (funciona en navegadores de escritorio y móvil), API pública para frontends personalizados, endpoint compatible con OpenAI para conectar otras herramientas a tu PKB.',
          '**Tiempo de configuración:** ~15 min (instalar AnythingLLM Desktop o Docker, apuntarlo a Ollama, arrastrar documentos).',
          '**Hardware:** mínimo 16 GB de RAM. 32 GB recomendado a partir de 10.000 documentos. AnythingLLM es más eficiente en memoria que Obsidian + plugins con el mismo número de elementos porque hay un solo proceso en lugar de dos.',
          '**Límite de elementos:** ~100.000 documentos en un solo workspace; particiona en varios workspaces a partir de 50K para mantener la latencia de recuperación por debajo de ~1 segundo.',
          '**Ideal para:** usuarios con archivos con muchos PDFs, captura orientada a recortes web, y preferencia por una app sobre un stack de plugins. También la elección correcta para equipos pequeños que autoalojan una PKB compartida.',
          '**No para:** usuarios que quieren una superficie de escritura orientada a notas (Obsidian); usuarios que quieren poseer su almacenamiento en Markdown plano (el vector store de AnythingLLM es interno).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para la configuración paso a paso de la capa RAG utilizada aquí (Ollama + AnythingLLM, ingesta, ajuste de chunking), consulta el tutorial [RAG local en tus PDFs en 30 minutos](/es/power-local-llm/local-rag-on-your-pdfs-step-by-step). Para escalar RAG más allá de ejemplos de juguete a más de 1.000 PDFs, consulta [Chatea con más de 1000 PDFs localmente](/es/power-local-llm/chat-with-1000-pdfs-locally).',
          },
        ],
      },
      architectureCustom: {
        id: 'architecture-custom',
        title: 'Arquitectura C: Python + ChromaDB personalizado',
        content:
          '**Un stack personalizado de Python + ChromaDB + Ollama es la elección correcta solo si genuinamente tienes más de 100.000 elementos, necesidades multiusuario o requisitos de esquema específicos que las herramientas estándar no pueden modelar.** El coste de mantenimiento es real: chunking, deduplicación, re-ranking, sincronización, backup — tú lo gestionas todo.',
        items: [
          '**Almacenamiento:** sistema de archivos (una carpeta por fuente: `notes/`, `pdfs/`, `web/`, `email/`) + un manifiesto de metadatos (SQLite o JSONL). Los archivos fuente permanecen en formatos abiertos para poder cambiar las capas de recuperación sin volver a ingerir.',
          '**Captura:** scripts activados por webhooks (web clipper → endpoint HTTP → escritura de archivo), reenvío de email → poller IMAP → escritura de archivo, hoja de compartir móvil → endpoint Tailscale → escritura de archivo. Cada ruta de captura es un pequeño servicio Python.',
          '**Embeddings:** ChromaDB (modo local, persiste en disco) + embeddings de Ollama via el endpoint compatible con OpenAI. Reembedding al cambio de archivo via un proceso watchdog. ChromaDB escala a millones de vectores en una sola máquina con indexación HNSW.',
          '**Recuperación:** similitud top-k de ChromaDB + un re-ranker (BGE Re-ranker o equivalente local de Cohere) + filtros de metadatos (rango de fechas, etiquetas, fuente). Búsqueda híbrida opcional con BM25 sobre chunks para coincidencia exacta de términos.',
          '**Interfaz:** cualquiera de: un pequeño servicio FastAPI exponiendo un endpoint `/v1/chat/completions` compatible con OpenAI, una UI Streamlit / Gradio, una CLI, o los tres. Pon Open WebUI delante para una experiencia de chat pulida sin escribir código UI.',
          '**Tiempo de configuración:** ~1 día para una v1 funcional; ~2 semanas de iteración para ajustar el chunking, la calidad de recuperación y los pipelines de captura para tus datos.',
          '**Hardware:** portátil con 32 GB de RAM para desarrollo; servidor doméstico con 64 GB de RAM a partir de 100.000+ elementos para que el servicio de embeddings no compita con tu portátil. Considera una GPU dedicada (RTX 4060 o mejor) a partir de 500K elementos para el rendimiento del chat.',
          '**Límite de elementos:** más de 1M de elementos en la práctica con HNSW + sharding; el cuello de botella se desplaza de la recuperación a la fiabilidad del pipeline de captura y el coste de reembedding en cambios de esquema.',
          '**Ideal para:** ingenieros que quieren poseer el stack, equipos con esquema personalizado (p. ej., "cada elemento tiene una puntuación de confianza, una fuente y un autor"), o usuarios que alcanzan límites estrictos en Obsidian o AnythingLLM (50K y 100K respectivamente).',
          '**No para:** no ingenieros; cualquiera que subestime el coste de mantenimiento; usuarios para quienes una opción estándar ya cubre el caso de uso.',
        ],
        promptExamples: [
          {
            label: 'Ingesta con ChromaDB (esquema Python)',
            text: 'import chromadb, ollama, pathlib\nclient = chromadb.PersistentClient(path="./chroma")\ncoll = client.get_or_create_collection("kb")\nfor p in pathlib.Path("vault").rglob("*.md"):\n    text = p.read_text()\n    emb = ollama.embeddings(model="nomic-embed-text", prompt=text)["embedding"]\n    coll.upsert(ids=[str(p)], embeddings=[emb], documents=[text], metadatas=[{"source": str(p)}])',
          },
          {
            label: 'Consulta con re-ranking (esquema)',
            text: 'q = "What did I write about local RAG sync?"\nq_emb = ollama.embeddings(model="nomic-embed-text", prompt=q)["embedding"]\nhits = coll.query(query_embeddings=[q_emb], n_results=20)\n# pass hits["documents"] through a re-ranker, keep top 5\n# send top 5 + question to Llama 3.2 3B via Ollama chat endpoint',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'El patrón de fallo más común en builds personalizados: reembedear todo el archivo en cada cambio de código porque el esquema no es estable. Bloquea el modelo de embedding + el tamaño de chunk antes de ingerir más de ~5.000 elementos. Migrar de nomic-embed-text 768 dimensiones a mxbai-embed-large 1024 dimensiones en 100K elementos lleva horas de cómputo y rompe la colección ChromaDB — no puedes mezclar dimensiones.',
          },
        ],
      },
      capture: {
        id: 'capture',
        title: 'Pipeline de captura: web, email, móvil, voz',
        content:
          '**La capa de captura determina si tu PKB sobrevive al uso diario. La mayor parte del conocimiento llega fuera del escritorio — en móvil, en email, en notas de voz — y un pipeline de captura que requiere abrir primero una app de escritorio es un pipeline que se evita.** Construye para los cuatro flujos principales y acepta que el 80% de los elementos llegarán en móvil.',
        items: [
          '**Web clipper (escritorio + móvil):** Obsidian Web Clipper, extensión de navegador AnythingLLM, o un bookmarklet personalizado que hace POST de la página actual a tu endpoint de captura. Hoja de compartir móvil → extensión web clipper → vault.',
          '**Reenvío de email:** dirección dedicada (p. ej., `kb@tudominio.com`) + poller IMAP → escritura de archivo. Reenvía los emails que quieres conservar; el poller gestiona la ingesta. Usa un prefijo por fuente en el nombre de archivo para que la recuperación pueda filtrar por fuente.',
          '**Hoja de compartir móvil:** la ruta de captura más utilizada. Compartir iOS → Obsidian (escribe un archivo Markdown), Compartir iOS → Working Copy (commit a Git), Compartir iOS → Shortcut personalizado (POST a tu API de captura). Android: HTTP Shortcuts o Tasker.',
          '**Notas de voz:** la captura al estilo AudioPen es cada vez más común en 2026. Graba en el teléfono → transcribe localmente con Whisper.cpp o via un servicio Whisper autoalojado → escribe la transcripción como archivo Markdown → embedea.',
          '**Pegado manual:** el fallback. Siempre funciona, nunca escala. Úsalo para la cola larga.',
          '**OCR de capturas de pantalla:** las capturas de pantalla son un formato de captura con pérdida. Usa Apple Live Text en iOS o un pipeline OCR local (Tesseract, Apple Vision, EasyOCR) para extraer texto + escribir un archivo Markdown con la imagen y el texto extraído.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Audita tus hábitos de captura existentes antes de diseñar el pipeline. Mira qué ya guardas: marcadores del navegador, capturas de pantalla, emails reenviados, notas de voz. La capa de captura de la PKB debería reflejar esos flujos existentes — si ya tomas capturas de pantalla constantemente, construye la ruta OCR; si ya reenvías emails a ti mismo, construye el reenvío de email. Añadir nuevos hábitos ("ahora voy a copiar y pegar manualmente cada artículo en la KB") nunca funciona.',
          },
        ],
      },
      mobileCapture: {
        id: 'mobile-capture',
        title: 'Captura móvil: iOS Shortcuts, Working Copy, a-Shell',
        content:
          '**iOS tiene tres rutas de captura viables hacia una PKB con IA local en 2026: Shortcuts → Obsidian, Shortcuts → Working Copy (Git) o Shortcuts → a-Shell (basado en scripts).** Cada una se combina naturalmente con una de las tres arquitecturas de referencia. Elige la ruta cuyo modelo de sincronización coincida con tu arquitectura general.',
        items: [
          '**Shortcuts → Obsidian (centrada en Obsidian):** el Shortcut de Obsidian "Añadir a nota" escribe el contenido capturado directamente en el vault. Sincronización via Obsidian Sync (de pago, recomendado) o iCloud Drive (gratuito, con matices). Ideal para flujos de trabajo orientados a notas.',
          '**Shortcuts → Working Copy (Git):** el contenido capturado se escribe en un repositorio de Working Copy en el iPhone, luego se hace commit automático y push. El escritorio hace pull. Gratuito, robusto, funciona con cualquier vault de Markdown. Nota: Working Copy es de pago (pago único ~$20). Ideal para vaults sincronizados con Git.',
          '**Shortcuts → a-Shell:** a-Shell es un terminal iOS gratuito que ejecuta scripts. Construye un Shortcut que canalice el texto capturado a un script de a-Shell, que escribe un archivo y hace commit via `git`, sincroniza via `rsync` sobre Tailscale, o sube a tu endpoint de captura personalizado. Ideal para arquitecturas personalizadas construidas por ingenieros.',
          '**Equivalentes Android:** Tasker + Termux + Git como equivalente a la ruta Working Copy de iOS. HTTP Shortcuts para la ruta de endpoint personalizado. Hoja de compartir Obsidian Mobile para la ruta Obsidian.',
          '**Presupuesto de latencia:** la captura móvil debería completarse en menos de 5 segundos de extremo a extremo (hoja de compartir → archivo escrito / commit / subido). Todo lo más lento y el usuario abre la app una vez y nunca más.',
          '**Captura sin conexión:** las tres rutas iOS hacen cola sin conexión (Shortcuts hace cola, Working Copy hace cola de commits, los scripts de a-Shell pueden escribir localmente y sincronizar después). Esencial para captura durante vuelos, transporte público y zonas rurales.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No construyas una ruta de captura móvil que requiera que el escritorio esté en línea (p. ej., POST a un endpoint protegido por Tailscale que solo es accesible cuando tu portátil está despierto). Perderás capturas durante reuniones de trabajo, mientras el portátil está en modo de suspensión y durante la noche. Ejecuta el endpoint de captura en un servidor doméstico / NAS siempre encendido, o escribe en un store eventually-consistent (Obsidian Sync, Git, iCloud) que haga buffer sin conexión.',
          },
        ],
      },
      scaling: {
        id: 'scaling',
        title: 'Escalado: 1K, 10K, 100K elementos',
        content:
          '**El escalado de una PKB con IA local tiene tres regímenes: por debajo de 1.000 elementos todo es rápido en cualquier portátil moderno; entre 1.000 y 10.000 elementos el índice de embeddings se convierte en un artefacto real que debes gestionar; a partir de 10.000 elementos el hardware se convierte en el cuello de botella y la fiabilidad del pipeline de captura domina los resultados.** Los números realistas siguientes asumen Mac M3 Pro / PC RTX 4060 con nomic-embed-text y Llama 3.2 3B.',
        columns: ['Número de elementos', 'Arquitectura recomendada', 'Tiempo de embedding inicial', 'Hardware', 'Notas'],
        rows: [
          { 'Número de elementos': '1.000 elementos', 'Arquitectura recomendada': 'Cualquiera de las tres', 'Tiempo de embedding inicial': '~2 min', 'Hardware': 'Portátil con 16 GB de RAM', 'Notas': 'Todo parece instantáneo. La elección de arquitectura es puramente por adecuación al flujo de trabajo.' },
          { 'Número de elementos': '10.000 elementos', 'Arquitectura recomendada': 'Obsidian o AnythingLLM', 'Tiempo de embedding inicial': '~25 min', 'Hardware': 'Portátil con 16 GB de RAM (32 GB recomendado)', 'Notas': 'Índice de embeddings ~150-250 MB. Tiempo de reembedding en ediciones sub-segundo. Punto óptimo para la mayoría de trabajadores del conocimiento.' },
          { 'Número de elementos': '50.000 elementos', 'Arquitectura recomendada': 'AnythingLLM o Python personalizado', 'Tiempo de embedding inicial': '~3 horas', 'Hardware': 'Portátil con 32 GB de RAM o servidor doméstico', 'Notas': 'El índice inicial se ejecuta de noche. Planifica sub-vaults / workspaces a partir de este punto. Uso de disco ~1,5-2 GB para embeddings.' },
          { 'Número de elementos': '100.000 elementos', 'Arquitectura recomendada': 'AnythingLLM (multi-workspace) o Python personalizado', 'Tiempo de embedding inicial': '6-8 horas', 'Hardware': 'Mínimo 32 GB de RAM; servidor doméstico preferido', 'Notas': 'Mueve los embeddings a un servidor doméstico dedicado. La fiabilidad del pipeline de captura es ahora el modo de fallo principal, no la recuperación.' },
          { 'Número de elementos': 'Más de 500.000 elementos', 'Arquitectura recomendada': 'Python + ChromaDB personalizado', 'Tiempo de embedding inicial': 'Más de 24 horas', 'Hardware': 'Servidor doméstico con 64 GB de RAM + GPU dedicada', 'Notas': 'El sharding, la deduplicación y los pipelines de reembedding incremental se vuelven necesarios. Las herramientas estándar ya no encajan.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El coste de embedding inicial es una factura única. Después del primer índice, solo se reembedean los elementos cambiados — normalmente menos de un segundo por guardado incluso con 100K elementos. La lentitud de la primera vez es real pero no recurrente. Ejecuta el índice inicial de noche en una máquina enchufada y olvídalo.',
          },
        ],
      },
      backupSync: {
        id: 'backup-sync',
        title: 'Backup, control de versiones, sincronización multidispositivo',
        content:
          '**Una PKB con IA local necesita tres capas de backup: snapshots del vault (Time Machine, Backblaze, restic), historial Git del contenido en texto plano y una exportación trimestral de embeddings y metadatos para una reconstrucción limpia.** Los embeddings son técnicamente regenerables, pero a 100K+ elementos la regeneración cuesta horas — respaldalos también.',
        items: [
          '**Snapshots del vault (nivel de sistema de archivos):** Time Machine (macOS) o restic (Linux) cada 24 horas. Backblaze o rsync.net para almacenamiento externo. Captura todo incluyendo embeddings.',
          '**Historial Git (solo contenido):** archivos Markdown en texto plano con commit a un repositorio Git (local + GitHub / Gitea privado). Añade `.smart-env/`, `vector_store/` y cualquier otra carpeta de índice binario a `.gitignore`. Git te da historial de versiones por nota; los snapshots del vault te dan rollback de todo el sistema.',
          '**Exportación de embeddings (trimestral):** exporta el vector store a un formato portable (ChromaDB → parquet, Smart Connections → JSON dump, AnythingLLM → exportación integrada). Guarda las dos últimas exportaciones en almacenamiento externo. Si un snapshot del vault falla o el índice de embeddings se corrompe, esta es tu ruta de reconstrucción rápida.',
          '**Sincronización multidispositivo — centrada en Obsidian:** Obsidian Sync gestiona texto plano + índices binarios de forma limpia (cifrado de extremo a extremo). iCloud Drive funciona para texto plano pero corrompe los índices binarios entre plataformas. Git via Working Copy / Termux funciona solo para texto plano — reindexación por dispositivo.',
          '**Sincronización multidispositivo — centrada en AnythingLLM:** ejecuta AnythingLLM como contenedor Docker autoalojado en un servidor doméstico. Todos los dispositivos se conectan a la misma instancia via LAN o Tailscale. No se necesita sincronización del lado del cliente.',
          '**Sincronización multidispositivo — Python personalizado:** la arquitectura que construyes determina esto. La mayoría de builds usan un servicio API central (FastAPI en un servidor doméstico) + clientes que hacen POST de capturas y GET de consultas. Tailscale proporciona la capa de red.',
          '**Migración a un nuevo ordenador:** restaura el snapshot del vault → restaura el repositorio Git → reinicia Ollama → reinicia el indexador de embeddings. La regeneración de embeddings es automática si omitiste el paso de exportación de embeddings; reindexación manual si lo respaldaste pero el formato es específico de plataforma.',
          '**Compartición selectiva:** para compartir partes de un vault (p. ej., un proyecto de investigación con un colaborador), usa sub-vaults o un script de exportación por etiquetas. No compartas el vault completo — la mayoría de PKBs con IA local acumulan elementos sensibles (médicos, financieros, personales) que nunca deberían salir del stack local.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Prueba tu restauración una vez al trimestre. La mayoría de las afirmaciones "tengo backups" son aspiracionales — la prueba es "¿puedo restaurar mi vault en un portátil nuevo en menos de 2 horas?" Ejecuta esa prueba. La primera vez que lo hagas, descubrirás que una de las tres capas (snapshot, Git, exportación de embeddings) estaba mal configurada desde hace seis meses.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        items: [
          '**Diseñar la capa de recuperación antes que la capa de captura.** Una búsqueda híbrida personalizada con re-ranking está malgastada en un vault de 47 elementos. Construye la captura primero, acepta la recuperación naïf top-5, y solo optimiza la recuperación una vez que el vault tenga más de 1.000 elementos y puedas medir la calidad de recuperación en consultas reales.',
          '**Mezclar arquitecturas.** "Obsidian para notas + AnythingLLM para PDFs + Python personalizado para emails" suena limpio pero el coste de integración domina. Elige una arquitectura, acepta sus limitaciones, y añade como mucho un único conector si es absolutamente necesario (p. ej., AnythingLLM ingiriendo una carpeta del vault de Obsidian en modo solo lectura).',
          '**Cambiar modelos de embedding sin reembedear el archivo.** Mezclar vectores de nomic-embed-text de 768 dimensiones y mxbai-embed-large de 1024 dimensiones en el mismo store rompe la recuperación silenciosamente. Elige un modelo de embedding + dimensión, bloquéalo, y solo cambia con un reembedding completo del archivo.',
          '**Ignorar el backup del índice de embeddings a partir de 10.000 elementos.** "Puedo regenerarlo" es verdad pero la regeneración lleva horas. Añade el store de embeddings a tu estrategia de backup a partir de 10K elementos.',
          '**Diseñar solo para escritorio cuando el 80% de la captura ocurre en móvil.** Una PKB sin ruta de captura móvil acumula polvo. Prueba el flujo de captura móvil el primer día — hoja de compartir hasta el vault debería completarse en menos de 5 segundos.',
          '**Confiar en iCloud Drive para índices binarios de embeddings.** iCloud gestiona texto plano bien; los índices binarios (Smart Connections `.smart-env/`, vector store de AnythingLLM) se corrompen entre plataformas. Usa Obsidian Sync, una instancia autoalojada, o acepta la reindexación por dispositivo.',
          '**No particionar a 100K elementos.** Un solo workspace / vault a partir de 100K elementos tiene latencias de recuperación de varios segundos. Particiona por tema (Trabajo, Lecturas, Proyectos) en varios workspaces o sub-vaults; consulta cada uno por separado o via un enrutador.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'Obsidian — [obsidian.md](https://obsidian.md) y [help.obsidian.md](https://help.obsidian.md) (estructura del vault, arquitectura de sincronización móvil, documentación de plugins).',
          'AnythingLLM — [github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) (aplicación RAG autoalojada de código abierto).',
          'Ollama — [ollama.com](https://ollama.com) y [github.com/ollama/ollama](https://github.com/ollama/ollama) (runtime LLM local; endpoints de chat + embedding).',
          'ChromaDB — [trychroma.com](https://www.trychroma.com) y [github.com/chroma-core/chroma](https://github.com/chroma-core/chroma) (base de datos vectorial local de código abierto).',
          'Working Copy — [workingcopy.app](https://workingcopy.app) (cliente Git de iOS para pipelines de captura móvil).',
          'a-Shell — [holzschu.github.io/a-Shell_iOS/](https://holzschu.github.io/a-Shell_iOS/) (terminal iOS gratuito para captura móvil basada en scripts).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿Cómo capturo páginas web en mi base de conocimiento?',
            a: 'Tres opciones ordenadas por fricción. (1) Web clipper como extensión de navegador — Obsidian Web Clipper o la extensión AnythingLLM escribe la página actual directamente en tu vault / workspace. (2) Hoja de compartir móvil — compartir en Safari / Chrome → Obsidian (escribe un archivo Markdown) o → Working Copy (commit a Git) o → Shortcut personalizado (hace POST a tu API de captura). (3) Bookmarklet — para navegadores sin extensión; hace POST de la URL actual + selección a tu endpoint de captura. La hoja de compartir móvil es la ruta más utilizada en la práctica — diséñala primero.',
          },
          {
            q: '¿Puedo reenviar emails al sistema?',
            a: 'Sí. Configura una dirección dedicada (p. ej., un alias Fastmail / Migadu `kb@tudominio.com`) y ejecuta un poller IMAP en tu servidor doméstico o portátil que descargue el nuevo correo y escriba un archivo Markdown por email en tu vault. Añade un prefijo de dirección de remitente en el nombre de archivo para que la recuperación pueda filtrar por remitente. AnythingLLM tiene una integración de email propia; los usuarios de Obsidian típicamente construyen el poller IMAP ellos mismos o usan alternativas a IFTTT / Zapier como n8n.',
          },
          {
            q: '¿Cómo sincronizo entre escritorio y móvil?',
            a: 'Depende de la arquitectura. Centrada en Obsidian: Obsidian Sync (de pago, gestiona índices binarios limpiamente), iCloud Drive (gratuito, solo texto plano — reindexación por dispositivo) o Git via Working Copy (gratuito + pago único de Working Copy, solo texto plano — reindexación por dispositivo). Centrada en AnythingLLM: ejecuta AnythingLLM en Docker en un servidor doméstico, todos los dispositivos se conectan via LAN o Tailscale — no se necesita sincronización del lado del cliente. Python personalizado: construye un servicio API central en un servidor doméstico; los clientes hacen POST de capturas y GET de consultas.',
          },
          {
            q: '¿Debería usar un vault grande o dividir por tema?',
            a: 'Un vault hasta ~50.000 elementos. A partir de 50K, divide por tema (Trabajo, Lecturas, Proyectos, Personal) por dos razones: la latencia de recuperación se mantiene por debajo de ~1 segundo, y la filtración involuntaria entre contextos (p. ej., notas personales apareciendo en consultas de trabajo) se vuelve posible a escala. Dividir antes de 50K es prematuro — pierdes las conexiones transversales fortuitas que son un valor principal de una PKB.',
          },
          {
            q: '¿Con qué frecuencia debería reembedear para mayor precisión?',
            a: 'Nunca reembedees por "deriva de precisión" — los embeddings no se degradan. Reembedea solo cuando cambies el modelo de embedding (p. ej., actualizando de nomic-embed-text a mxbai-embed-large para mejor recuperación en contenido técnico). Las tres arquitecturas gestionan automáticamente el reembedding incremental al cambio de archivo; no lo programas. La excepción son los stacks Python personalizados donde controlas el indexador — ahí, el reembedding incremental controlado por watchdog al guardar es estándar.',
          },
          {
            q: '¿Puedo usar control de versiones en mi base de conocimiento?',
            a: 'Sí para el contenido en texto plano (vault Markdown → repositorio Git, local + GitHub / Gitea privado). Añade carpetas de índice binario (`.smart-env/`, `vector_store/`, directorio de persistencia de ChromaDB) a `.gitignore` — inflan el historial y causan conflictos de merge. Git te da historial de versiones por nota; los snapshots del vault (Time Machine, restic) dan rollback de todo el sistema. Ambas capas, no una u otra.',
          },
          {
            q: '¿Cómo gestiono los PDFs en este sistema?',
            a: 'Centrada en Obsidian: almacena PDFs junto a notas Markdown; Smart Connections no embeddea el contenido PDF directamente — extrae el texto primero (p. ej., via el plugin PDF++ o un script de preprocesamiento que escribe un resumen Markdown junto a cada PDF). Centrada en AnythingLLM: arrastra PDFs directamente a un workspace; AnythingLLM gestiona automáticamente el parsing y chunking de PDF. Python personalizado: usa `pypdf` o `pdfplumber` para extraer texto en tu pipeline de ingesta, luego embeddea el texto extraído. AnythingLLM es la opción con menos fricción para archivos con muchos PDFs.',
          },
          {
            q: '¿Puedo compartir partes de mi KB de forma selectiva?',
            a: 'Sí, pero diséñalo desde el primer día. Usa sub-vaults (Obsidian) o workspaces (AnythingLLM) para mantener el contenido "compartible" y "privado" en stores separados. Para compartición puntual, construye un script de exportación por etiquetas que extraiga elementos por etiqueta (p. ej., `#shareable`) en un bundle Markdown portable. No compartas el vault completo — la mayoría de PKBs con IA local acumulan elementos sensibles (médicos, financieros, correspondencia personal) que nunca deberían salir del stack local.',
          },
          {
            q: '¿Cuál es la mejor estrategia de backup?',
            a: 'Tres capas: (1) snapshot del sistema de archivos cada 24 horas (Time Machine / restic) con copia en almacenamiento externo (Backblaze / rsync.net); (2) historial Git del contenido en texto plano para recuperación de versiones por nota; (3) exportación trimestral de embeddings + metadatos como ruta de reconstrucción rápida. Prueba la restauración una vez al trimestre — "¿puedo reconstruir mi vault en un portátil nuevo en menos de 2 horas?" La primera prueba de restauración generalmente revela que una de las tres capas estaba mal configurada.',
          },
          {
            q: '¿Cómo migro a un ordenador nuevo?',
            a: 'Restaura el snapshot del vault → instala Ollama y descarga los mismos modelos → instala Obsidian / AnythingLLM / tu stack Python personalizado → reinicia el indexador de embeddings. Con Obsidian Sync o AnythingLLM autoalojado, la migración es "instala el cliente e inicia sesión" — no se necesita restauración manual. Sin eso, calcula ~30 min para un vault de 10K elementos, ~2 horas para 50K y toda la noche para más de 100K si omitiste el paso de exportación de embeddings.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Obsidian + LLM local: 5 plugins que convierten tu vault en un segundo cerebro (2026)](/es/power-local-llm/local-llm-with-obsidian-2026) — análisis profundo de la capa de plugins de la Arquitectura A.',
          '[LLM local con Logseq y Joplin](/es/power-local-llm/local-llm-with-logseq-and-joplin) — capas de almacenamiento alternativas para la PKB si Obsidian no es tu preferencia.',
          '[Chatea con más de 1000 PDFs localmente: escalando RAG más allá de ejemplos de juguete](/es/power-local-llm/chat-with-1000-pdfs-locally) — escalado de la capa RAG más allá de 1.000 elementos, aplicable a las tres arquitecturas.',
          '[RAG local en tus PDFs en 30 minutos (Ollama + AnythingLLM)](/es/power-local-llm/local-rag-on-your-pdfs-step-by-step) — tutorial de implementación RAG para la capa de recuperación utilizada en la Arquitectura B.',
          '[Mejores modelos de embedding para RAG local (2026)](/es/power-local-llm/best-embedding-models-local-rag-2026) — selección de modelo de embedding (nomic-embed-text vs mxbai-embed-large vs bge-m3) para cada una de las tres arquitecturas.',
          '[RAG explicado](/es/prompt-engineering/rag-explained) — referencia conceptual para la capa de recuperación.',
          '[Guía de hardware para LLM local 2026](/es/local-llms/local-llm-hardware-guide-2026) — dimensionamiento de hardware para el mínimo de 16 GB, 32 GB recomendado a partir de 10K elementos, servidor doméstico a partir de 100K.',
          '[Directorio de software LLM local 2026](/es/power-local-llm/local-llm-software-directory-2026) — listados de directorio para Ollama, ChromaDB, AnythingLLM, Obsidian y otros componentes del stack.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Construye una base de conocimiento personal con IA local: guía de stack 2026',
      description: 'Base de conocimiento personal con IA local 2026: 3 arquitecturas comparadas (Obsidian, AnythingLLM, Python + ChromaDB). Escala a más de 100.000 elementos. Captura, RAG, sincronización, backup.',
      url: 'https://www.promptquorum.com/es/power-local-llm/local-llm-personal-knowledge-base-2026',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
},

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Construa uma base de conhecimento pessoal com IA local: guia de stack 2026',
    seoTitle: 'Base de conhecimento com IA local: guia de stack 2026',
    intro:
      'Uma base de conhecimento pessoal (PKB) construída sobre IA local em 2026 tem cinco camadas: captura (web clipper, encaminhamento de e-mail, folha de compartilhamento no celular), armazenamento (vault de Markdown ou pasta de documentos), embeddings (modelo local via Ollama), recuperação (RAG) e interface (chat ou busca semântica). Três arquiteturas cobrem aproximadamente 95% dos casos reais — centrada no Obsidian (orientada a notas, escala até ~50.000 elementos), centrada no AnythingLLM (orientada a documentos, escala até ~100.000 elementos) e um stack personalizado de Python + ChromaDB (orientada a engenheiros, escala acima de 1 milhão de elementos). O mínimo de hardware é um notebook com 16 GB de RAM; acima de 10.000 elementos, planeje 32 GB. A decisão de escalonamento mais importante não é o LLM — é se o seu pipeline de captura sobrevive ao uso diário no celular, onde chega a maior parte do conhecimento.',
    metaDescription:
      'Base de conhecimento pessoal com IA local 2026: Obsidian, AnythingLLM e Python + ChromaDB comparados. Escala para 100.000+ elementos. Captura, RAG e backup.',
    twitterDescription:
      'Três arquiteturas de PKB com IA local em 2026: Obsidian (~50K elementos), AnythingLLM (~100K), Python + ChromaDB (1M+). Captura, RAG, sync no celular, backup, escalonamento.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Qwen3 7B',
      'nomic-embed-text',
      'mxbai-embed-large',
      'bge-m3',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16 GB de memória unificada mínimo, 32 GB recomendado a partir de 10.000 elementos)',
      'PC com RTX 3060 12 GB ou RTX 4060 8 GB',
      'PC com 32 GB de RAM (fallback só CPU para vaults grandes)',
      'Servidor doméstico / mini PC com 64 GB de RAM (stack Python personalizado para mais de 100.000 elementos)',
    ],
    audience:
      'Trabalhadores do conhecimento, pesquisadores, escritores e engenheiros que constroem um arquivo privado com busca por IA de suas notas, favoritos, e-mails e documentos — tipicamente entre 1.000 e 100.000 elementos — sem enviar conteúdo a um serviço na nuvem.',
    readTime: '15 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'base de conhecimento pessoal com IA local',
    targetKeywords: [
      'base de conhecimento IA local',
      'second brain LLM local',
      'base de conhecimento privada IA',
      'RAG local base de conhecimento',
      'base de conhecimento self-hosted IA',
      'base de conhecimento pessoal 2026',
    ],
    leadAnswerBlock:
      '**Uma base de conhecimento com IA local em 2026 é um stack de cinco camadas — captura, armazenamento, embeddings, recuperação, interface — e você deve escolher uma das três arquiteturas de referência em vez de projetar do zero.** Use Obsidian + Smart Connections + Copilot for Obsidian + Ollama se você escreve notas diariamente e quer busca semântica em todo o vault; escala de forma limpa até ~50.000 notas em um Mac M3 Pro de 16 GB ou um PC equivalente. Use AnythingLLM + Ollama se o seu conhecimento vive principalmente como documentos (PDFs, exportações, recortes web) em vez de notas; escala até ~100.000 documentos e agrupa captura, RAG e chat em um único app. Construa um stack personalizado de Python + ChromaDB + Llama 3.2 3B apenas se você tiver mais de 100.000 elementos, acesso multiusuário ou requisitos de esquema específicos — o custo de manutenção é real. O verdadeiro gargalo nas três arquiteturas é a captura: a maior parte do conhecimento chega no celular (páginas web, capturas de tela, notas de voz, e-mails encaminhados), e um stack sem rota de captura no celular acumula poeira independentemente de quão inteligente seja a recuperação. Mínimo de hardware: 16 GB de RAM; mais de 10.000 elementos, reserve 32 GB. Mais de 100.000 elementos, mova os embeddings para um servidor doméstico.',
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor arquitetura de base de conhecimento com IA local em 2026?',
        answer:
          'Para a maioria das pessoas: Obsidian + Smart Connections + Copilot for Obsidian + Ollama (Llama 3.2 3B para chat, nomic-embed-text para embeddings). Escala até ~50.000 notas em um Mac de 16 GB. Para arquivos com muitos documentos: AnythingLLM + Ollama em um único app, escala até ~100.000 documentos. Para engenheiros e vaults com mais de 100.000 elementos: stack personalizado de Python + ChromaDB + Llama 3.2 3B com serviços de captura, embedding e chat separados. Mínimo de hardware 16 GB de RAM; reserve 32 GB a partir de 10.000 elementos e um servidor doméstico a partir de 100.000. A captura é o verdadeiro gargalo de escalonamento — projete a folha de compartilhamento no celular, o web clipper e o encaminhamento de e-mail antes de otimizar o LLM.',
        bullets: [
          'Centrada no Obsidian — ideal para fluxos de trabalho orientados a notas, escala até ~50.000 notas, mínimo 16 GB de RAM.',
          'Centrada no AnythingLLM — ideal para PKBs com muitos documentos (PDFs, exportações), escala até ~100.000 documentos, app tudo em um.',
          'Stack personalizado Python + ChromaDB — ideal para engenheiros, escala mais de 1 milhão de elementos, exige serviços autogerenciados.',
          'Modelos de chat recomendados em 2026: Llama 3.2 3B para sistemas de 16 GB, Phi-4 Mini para 8 GB, Qwen3 7B para qualidade em 32 GB+.',
          'Modelos de embedding recomendados: nomic-embed-text (768 dimensões, rápido) ou mxbai-embed-large (1024 dimensões, mais preciso); bge-m3 para arquivos multilíngues.',
          'Mínimo de hardware: notebook com 16 GB de RAM; 32 GB recomendado a partir de 10.000 elementos; servidor doméstico com 64 GB a partir de 100.000.',
          'A captura é o gargalo: a maioria dos elementos da PKB é capturada no celular (páginas web, capturas de tela, notas de voz) e consultada no desktop. iOS Shortcuts → Obsidian, Working Copy (Git) ou a-Shell são as três rotas de captura no celular.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Dados rápidos', anchor: '#quick-facts' },
      { label: 'Qual arquitetura construir?', anchor: '#which-architecture' },
      { label: 'Tabela comparativa de arquiteturas', anchor: '#comparison-table' },
      { label: 'As cinco camadas de uma PKB com IA local', anchor: '#five-layers' },
      { label: 'Arquitetura A: centrada no Obsidian', anchor: '#architecture-obsidian' },
      { label: 'Arquitetura B: centrada no AnythingLLM', anchor: '#architecture-anythingllm' },
      { label: 'Arquitetura C: Python + ChromaDB personalizado', anchor: '#architecture-custom' },
      { label: 'Pipeline de captura: web, e-mail, celular, voz', anchor: '#capture' },
      { label: 'Captura no celular: iOS Shortcuts, Working Copy, a-Shell', anchor: '#mobile-capture' },
      { label: 'Escalonamento: 1K, 10K, 100K elementos', anchor: '#scaling' },
      { label: 'Backup, controle de versão, sincronização multidispositivo', anchor: '#backup-sync' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Escolha uma das três arquiteturas de referência em vez de projetar do zero.** Centrada no Obsidian (orientada a notas, ~50K elementos), centrada no AnythingLLM (orientada a documentos, ~100K elementos) ou stack personalizado de Python + ChromaDB (orientada a engenheiros, mais de 1M de elementos). Misturar arquiteturas raramente compensa — o custo de integração domina.',
          '**Uma PKB com IA local tem cinco camadas: captura, armazenamento, embeddings, recuperação, interface.** A maioria dos erros de iniciantes ocorre na camada de captura, não no LLM. Se os elementos não fluem do celular e do e-mail, nenhuma recuperação inteligente salvará o projeto.',
          '**Mínimo de hardware: 16 GB de RAM.** Abaixo disso, você tem que escolher entre rodar um modelo de embedding ou um modelo de chat — não ambos. Com 16 GB você pode rodar Llama 3.2 3B + nomic-embed-text de forma concorrente. Com 32 GB você pode subir para Qwen3 7B ou rodar várias sessões de chat. Mais de 100.000 elementos, mova os embeddings para um servidor doméstico.',
          '**Modelos recomendados em 2026:** chat — Llama 3.2 3B (padrão), Phi-4 Mini (sistemas de 8 GB), Qwen3 7B (qualidade em 32 GB+); embeddings — nomic-embed-text (768 dimensões, rápido), mxbai-embed-large (1024 dimensões, mais preciso), bge-m3 (multilíngue).',
          '**A captura é o gargalo de escalonamento, não a recuperação.** A maioria dos elementos de conhecimento chega no celular (recortes web, capturas de tela, notas de voz, e-mails encaminhados). Projete a rota folha de compartilhamento no celular → vault antes de ajustar o LLM. iOS Shortcuts → Obsidian / Working Copy / a-Shell são as três rotas iOS viáveis.',
          '**O método de sincronização determina o que funciona no celular.** O Obsidian Sync gerencia os índices binários de embeddings de forma limpa; o iCloud Drive os corrompe entre plataformas; o Git exige disciplina com .gitignore e reindexação por dispositivo. Escolha a sincronização primeiro, os plugins depois.',
          '**O backup não é opcional.** Três camadas: snapshot do vault (Time Machine, Backblaze, restic), histórico Git do conteúdo em texto puro e uma exportação trimestral de embeddings + metadados como rota de reconstrução limpa. Os embeddings são regeneráveis, mas custosos — faça backup deles também se o seu vault superar os 10.000 elementos.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Dados rápidos',
        items: [
          '**Arquiteturas cobertas:** centrada no Obsidian, centrada no AnythingLLM, stack personalizado Python + ChromaDB.',
          '**Backend LLM:** Ollama (recomendado) — roda modelos de chat e embedding atrás de um endpoint local em `http://localhost:11434`.',
          '**Modelos de chat recomendados 2026:** Llama 3.2 3B (sistemas de 16 GB), Phi-4 Mini (8 GB), Qwen3 7B (32 GB+).',
          '**Modelos de embedding recomendados 2026:** nomic-embed-text (768 dimensões, rápido), mxbai-embed-large (1024 dimensões, preciso), bge-m3 (multilíngue).',
          '**Metas de número de elementos:** Obsidian ~50.000 notas, AnythingLLM ~100.000 documentos, stack personalizado Python + ChromaDB mais de 1M.',
          '**Mínimo de hardware:** notebook com 16 GB de RAM. Mais de 10.000 elementos: 32 GB recomendado. Mais de 100.000 elementos: servidor doméstico com 64 GB.',
          '**Rotas de captura no celular (iOS):** Shortcuts → Obsidian, Shortcuts → Working Copy (Git), Shortcuts → a-Shell. Android: Tasker ou HTTP Shortcuts.',
        ],
      },
      whichArchitecture: {
        id: 'which-architecture',
        title: 'Qual arquitetura construir?',
        content:
          '**Escolha a arquitetura que combine com a forma como o seu conhecimento já chega, não a que soe mais poderosa.** Se você já escreve notas diariamente, construa centrada no Obsidian. Se o seu conhecimento são principalmente documentos (PDFs, exportações, recortes web), construa centrada no AnythingLLM. Construa um stack personalizado de Python + ChromaDB apenas se você genuinamente tiver mais de 100.000 elementos ou precisar de acesso multiusuário — o custo de manutenção é real e raramente compensa abaixo desse limite.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Os fluxos de trabalho orientados a notas escolhem Obsidian + Smart Connections + Copilot + Ollama; os arquivos orientados a documentos escolhem AnythingLLM + Ollama; os engenheiros com mais de 100K elementos escolhem um stack personalizado de Python + ChromaDB.',
          },
          {
            type: 'plain-terms',
            text: 'Três caminhos, um destino. Se você já vive dentro de um app de notas, o Obsidian envolve o seu hábito existente com recursos de IA. Se você principalmente acumula PDFs e páginas web, o AnythingLLM é um único app que ingere, indexa e conversa. Se você escreve código e quer controle total, o Python + ChromaDB permite construir exatamente o que você quer — mas você o mantém. Escolha o caminho que combine com o seu fluxo de trabalho existente; não mude seus hábitos para se adaptar à arquitetura.',
          },
        ],
        decisionBlock: {
          title: 'Decisão: qual arquitetura de PKB?',
          localIf: [
            'Você já usa o Obsidian ou quer um fluxo de trabalho orientado a notas com arquivos Markdown → centrada no Obsidian',
            'Seu conhecimento são principalmente PDFs, exportações, recortes web e arquivos de e-mail → centrada no AnythingLLM',
            'Você tem mais de 100.000 elementos, necessidades de esquema personalizado ou acesso multiusuário → stack personalizado Python + ChromaDB',
            'Você quer um app que gerencie captura, armazenamento, RAG e chat → centrada no AnythingLLM',
            'Você quer controle total sobre o chunking, a recuperação e o re-ranking → stack personalizado Python + ChromaDB',
          ],
          cloudIf: [
            'Você precisa de raciocínio de classe GPT-5.5 em cada consulta e seu arquivo é pequeno → Notion AI ou ChatGPT com GPTs personalizados (o stack local é ~70% tão capaz em síntese)',
            'Você não tem nenhuma máquina com 16 GB+ de RAM nem servidor doméstico → PKB SaaS na nuvem (Mem, Reflect)',
            'Sua equipe precisa de acesso concorrente multiusuário e você não quer hospedar serviços → equivalente na nuvem',
          ],
          quick: [
            'Padrão para usuários orientados a notas: Obsidian + Smart Connections + Copilot + Ollama',
            'Padrão para usuários orientados a documentos: AnythingLLM + Ollama',
            'Engenheiro com mais de 100K elementos: stack personalizado Python + ChromaDB + Llama 3.2 3B',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Não comece com o stack personalizado de Python só porque ele soa mais poderoso. Construa primeiro centrado no Obsidian ou no AnythingLLM, execute-o por dois meses, encontre a camada que não combina com o seu fluxo de trabalho e só então considere substituir essa camada por um componente personalizado. Todos os projetos de PKB que começaram "do zero em Python" e funcionaram por mais de seis meses convergiram de qualquer forma para designs com forma de Obsidian ou de AnythingLLM.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa de arquiteturas',
        content:
          '**As três arquiteturas de referência diferem em cinco eixos que importam à maioria dos construtores: complexidade de configuração, limite de número de elementos, sincronização no celular, flexibilidade de captura e carga de manutenção.** A complexidade de configuração cresce aproximadamente de forma linear com o controle — e o custo de manutenção também.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Obsidian tem complexidade média em ~50K elementos, o AnythingLLM tem baixa complexidade em ~100K elementos, e o stack personalizado Python + ChromaDB tem alta complexidade, mas escala além de 1M de elementos.',
          },
          {
            type: 'plain-terms',
            text: 'O AnythingLLM é o mais fácil de configurar e escala mais longe das duas opções "prontas para usar" — mas é opinativo sobre como os documentos são organizados. O Obsidian oferece a camada de tomada de notas mais expressiva e um ecossistema de plugins ativo, em troca de um imposto de configuração ligeiramente maior. O Python personalizado não tem limite, mas você mantém tudo: chunking, re-ranking, deduplicação, sincronização, backups. Escolha pela sua tolerância à manutenção, não só pelo número de elementos.',
          },
        ],
        columns: ['Arquitetura', 'Complexidade', 'Máx. elementos', 'Sync no celular', 'Ideal para'],
        rows: [
          { 'Arquitetura': 'Centrada no Obsidian', 'Complexidade': 'Média', 'Máx. elementos': '~50.000', 'Sync no celular': 'Sim (Obsidian Sync; iCloud / Git com ressalvas)', 'Ideal para': 'Usuários orientados a notas com hábito de escrita diária' },
          { 'Arquitetura': 'Centrada no AnythingLLM', 'Complexidade': 'Baixa', 'Máx. elementos': '~100.000', 'Sync no celular': 'Limitada (web UI a partir do celular via LAN / Tailscale)', 'Ideal para': 'PKBs com muitos documentos (PDFs, exportações, recortes web)' },
          { 'Arquitetura': 'Python + ChromaDB personalizado', 'Complexidade': 'Alta', 'Máx. elementos': 'Mais de 1M', 'Sync no celular': 'Manual (construa sua própria API + cliente no celular)', 'Ideal para': 'Engenheiros que querem controle total + multiusuário' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A sincronização no celular é o eixo de comparação mais subestimado. O AnythingLLM é tecnicamente mais fácil de configurar que o Obsidian, mas no celular significa "abra a UI web LAN no Safari" — não é uma experiência nativa. O Obsidian Mobile, combinado com o Obsidian Sync, oferece um app iOS / Android quase nativo com leitura offline. Se a captura e a leitura no celular são importantes, pondere o Obsidian mais alto do que a tabela sugere.',
          },
        ],
      },
      fiveLayers: {
        id: 'five-layers',
        title: 'As cinco camadas de uma PKB com IA local',
        content:
          '**Toda PKB com IA local tem as mesmas cinco camadas independentemente da arquitetura: captura, armazenamento, embeddings, recuperação, interface.** As falhas costumam ocorrer porque uma camada não combina com as demais — o mais comum, uma camada de recuperação sofisticada combinada com um pipeline de captura quebrado que ninguém usa.',
        numberedItems: [
          {
            title: 'Captura',
            whyItMatters: 'Como os elementos entram no sistema. Web clipper, encaminhamento de e-mail, folha de compartilhamento no celular, nota de voz, colagem manual. A camada mais omitida em builds de iniciantes — e a camada que determina se o sistema sobrevive ao uso diário. Se a captura demorar mais de 5 segundos no celular, o sistema acumula poeira.',
          },
          {
            title: 'Armazenamento',
            whyItMatters: 'Onde os elementos vivem no disco. Vault de Markdown (Obsidian, Logseq), pasta de documentos + banco de dados (AnythingLLM) ou sistema de arquivos + manifesto (Python personalizado). Escolha um formato de armazenamento que sobreviva a qualquer mudança de ferramenta — o Markdown em texto puro é o mais portável; os bancos de dados binários são os menos.',
          },
          {
            title: 'Embeddings',
            whyItMatters: 'Representações vetoriais dos elementos usadas para a busca semântica. Geradas por um modelo local (nomic-embed-text ou mxbai-embed-large via Ollama). O modelo de embedding pode ser trocado depois, mas o custo de migração é "reembedar tudo" — escolha uma vez e mantenha-se nele.',
          },
          {
            title: 'Recuperação',
            whyItMatters: 'Como os elementos são encontrados em tempo de consulta. Busca vetorial top-k, re-ranking opcional, filtros de metadados opcionais (etiquetas, datas, fontes). A diferença de qualidade entre um top-5 ingênuo e um top-20-com-re-ranker ajustado é a diferença entre "útil" e "mágico".',
          },
          {
            title: 'Interface',
            whyItMatters: 'Como você consulta e lê. Barra lateral (Smart Connections), chat (Copilot, AnythingLLM), CLI (Python personalizado) ou API. A maioria dos usuários usa o chat por padrão — mas uma barra lateral de "notas relacionadas" mostra material esquecido que o chat não consegue, porque você não sabe o que perguntar.',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Um padrão de build comum que falha: escolher a recuperação mais poderosa (busca híbrida personalizada com re-ranking), o modelo de chat mais inteligente (Qwen3 7B) e ignorar a captura. Três semanas depois, o vault tem 47 elementos porque nada flui do celular. A correção é sempre a mesma: simplifique a recuperação, simplifique o chat, conserte a captura e aceite que 80% do valor vem de os elementos estarem no sistema.',
          },
        ],
      },
      architectureObsidian: {
        id: 'architecture-obsidian',
        title: 'Arquitetura A: centrada no Obsidian',
        content:
          '**Obsidian + Smart Connections + Copilot for Obsidian + Ollama é a arquitetura padrão para fluxos de trabalho orientados a notas em 2026.** Escala de forma limpa até ~50.000 notas em um Mac M3 Pro de 16 GB ou um PC equivalente, suporta leitura no celular via Obsidian Mobile e mantém tudo em Markdown de texto puro que você pode levar para qualquer ferramenta futura.',
        items: [
          '**Armazenamento:** arquivos Markdown em uma pasta ("vault"). Texto puro, pastas simples, sem banco de dados. Sobrevive à migração de ferramentas.',
          '**Captura:** Obsidian Web Clipper (extensão de navegador), folha de compartilhamento do Obsidian Mobile (iOS / Android), e-mail para Obsidian via Mailspike ou uma receita IFTTT personalizada, colagem manual.',
          '**Embeddings:** plugin Smart Connections → Ollama em `http://localhost:11434/api/embeddings` → nomic-embed-text (padrão) ou mxbai-embed-large (mais preciso). O índice vive em `.smart-env/` dentro do vault.',
          '**Recuperação:** barra lateral Smart Connections (visão de notas relacionadas) + modo Vault QA do Copilot for Obsidian (RAG sobre o vault para consultas de chat). Ambos recuperam sobre o índice de embeddings.',
          '**Interface:** barra lateral Smart Connections (descoberta passiva) + painel de chat Copilot (consultas ativas) + modelos Text Generator (fluxos de trabalho repetíveis como resumos diários).',
          '**Tempo de configuração:** ~30 min (instalar Ollama, baixar modelos, instalar três plugins, configurar endpoints, deixar construir o índice inicial).',
          '**Hardware:** mínimo 16 GB de RAM (Llama 3.2 3B + nomic-embed-text de forma concorrente). 32 GB recomendado a partir de 10.000 notas. SSD altamente recomendado — a reconstrução do índice é limitada por I/O em HDDs.',
          '**Limite de elementos:** ~50.000 notas na prática; testado até 20.000 com reindexação incremental sub-segundo. A partir de 50K+ notas, o índice inicial leva 4-8 horas e você deve considerar sub-vaults.',
          '**Ideal para:** usuários com hábito de escrita diária, preferências Markdown-first e desejo de uma barra lateral "companheiro de pensamento" que mostre notas esquecidas.',
          '**Não para:** usuários cujo conhecimento são principalmente PDFs e recortes web (use centrada no AnythingLLM); usuários que querem um único app tudo em um (centrada no Obsidian é "Obsidian + 3 plugins + Ollama").',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para uma análise profunda da camada de plugins desta arquitetura (quais 5 plugins, passos de configuração, números de escala do vault), veja o [guia de plugins Obsidian + LLM local](/pt/power-local-llm/local-llm-with-obsidian-2026). Esta página cobre a arquitetura; o guia de plugins cobre a configuração.',
          },
        ],
      },
      architectureAnythingllm: {
        id: 'architecture-anythingllm',
        title: 'Arquitetura B: centrada no AnythingLLM',
        content:
          '**AnythingLLM + Ollama é a opção tudo em um: captura, armazenamento, RAG e chat estão integrados em um único app de desktop ou autohospedado.** Escala até ~100.000 documentos (mistura de PDFs, recortes web, exportações) e é a escolha certa quando o seu conhecimento chega principalmente como documentos em vez de notas.',
        items: [
          '**Armazenamento:** banco de dados interno do AnythingLLM (SQLite por padrão; Postgres para multiusuário autohospedado). Os documentos são ingeridos via a UI; os originais também podem ficar em uma pasta que você sincroniza.',
          '**Captura:** upload no app (arraste PDFs / arquivos para um workspace), extensão de navegador para páginas web, API pública para ingestão programática (`POST /api/v1/document/upload`), encaminhamento de e-mail via a integração oficial ou um relay personalizado.',
          '**Embeddings:** o AnythingLLM usa o provedor de embeddings que você configurar — escolha "Ollama" → endpoint `http://localhost:11434` → modelo `nomic-embed-text`. Embeddings armazenados no vector store integrado (LanceDB por padrão; ChromaDB / Pinecone opcionais).',
          '**Recuperação:** RAG sobre o workspace. Tamanho de chunk configurável, recuperação top-k, re-ranking opcional. Vários workspaces permitem particionar por tema (p. ex., "Trabalho", "Leituras", "Projetos").',
          '**Interface:** UI web do AnythingLLM (funciona em navegadores de desktop e celular), API pública para frontends personalizados, endpoint compatível com OpenAI para conectar outras ferramentas à sua PKB.',
          '**Tempo de configuração:** ~15 min (instalar AnythingLLM Desktop ou Docker, apontá-lo para o Ollama, arrastar documentos).',
          '**Hardware:** mínimo 16 GB de RAM. 32 GB recomendado a partir de 10.000 documentos. O AnythingLLM é mais eficiente em memória que o Obsidian + plugins com o mesmo número de elementos porque há um único processo em vez de dois.',
          '**Limite de elementos:** ~100.000 documentos em um único workspace; particione em vários workspaces a partir de 50K para manter a latência de recuperação abaixo de ~1 segundo.',
          '**Ideal para:** usuários com arquivos com muitos PDFs, captura orientada a recortes web e preferência por um app em vez de um stack de plugins. Também a escolha certa para equipes pequenas que autohospedam uma PKB compartilhada.',
          '**Não para:** usuários que querem uma superfície de escrita orientada a notas (Obsidian); usuários que querem possuir seu armazenamento em Markdown puro (o vector store do AnythingLLM é interno).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para a configuração passo a passo da camada RAG usada aqui (Ollama + AnythingLLM, ingestão, ajuste de chunking), veja o tutorial [RAG local nos seus PDFs em 30 minutos](/pt/power-local-llm/local-rag-on-your-pdfs-step-by-step). Para escalar o RAG além de exemplos de brinquedo para mais de 1.000 PDFs, veja [Converse com mais de 1000 PDFs localmente](/pt/power-local-llm/chat-with-1000-pdfs-locally).',
          },
        ],
      },
      architectureCustom: {
        id: 'architecture-custom',
        title: 'Arquitetura C: Python + ChromaDB personalizado',
        content:
          '**Um stack personalizado de Python + ChromaDB + Ollama é a escolha certa apenas se você genuinamente tiver mais de 100.000 elementos, necessidades multiusuário ou requisitos de esquema específicos que as ferramentas padrão não conseguem modelar.** O custo de manutenção é real: chunking, deduplicação, re-ranking, sincronização, backup — você gerencia tudo.',
        items: [
          '**Armazenamento:** sistema de arquivos (uma pasta por fonte: `notes/`, `pdfs/`, `web/`, `email/`) + um manifesto de metadados (SQLite ou JSONL). Os arquivos de origem permanecem em formatos abertos para que você possa trocar as camadas de recuperação sem reingerir.',
          '**Captura:** scripts acionados por webhooks (web clipper → endpoint HTTP → escrita de arquivo), encaminhamento de e-mail → poller IMAP → escrita de arquivo, folha de compartilhamento no celular → endpoint Tailscale → escrita de arquivo. Cada rota de captura é um pequeno serviço Python.',
          '**Embeddings:** ChromaDB (modo local, persiste em disco) + embeddings do Ollama via o endpoint compatível com OpenAI. Reembedding na mudança de arquivo via um processo watchdog. O ChromaDB escala para milhões de vetores em uma única máquina com indexação HNSW.',
          '**Recuperação:** similaridade top-k do ChromaDB + um re-ranker (BGE Re-ranker ou equivalente local da Cohere) + filtros de metadados (intervalo de datas, etiquetas, fonte). Busca híbrida opcional com BM25 sobre chunks para correspondência exata de termos.',
          '**Interface:** qualquer um de: um pequeno serviço FastAPI expondo um endpoint `/v1/chat/completions` compatível com OpenAI, uma UI Streamlit / Gradio, uma CLI, ou os três. Coloque o Open WebUI na frente para uma experiência de chat refinada sem escrever código de UI.',
          '**Tempo de configuração:** ~1 dia para uma v1 funcional; ~2 semanas de iteração para ajustar o chunking, a qualidade de recuperação e os pipelines de captura para os seus dados.',
          '**Hardware:** notebook com 32 GB de RAM para desenvolvimento; servidor doméstico com 64 GB de RAM a partir de 100.000+ elementos para que o serviço de embeddings não compita com o seu notebook. Considere uma GPU dedicada (RTX 4060 ou melhor) a partir de 500K elementos para o throughput do chat.',
          '**Limite de elementos:** mais de 1M de elementos na prática com HNSW + sharding; o gargalo se desloca da recuperação para a confiabilidade do pipeline de captura e o custo de reembedding em mudanças de esquema.',
          '**Ideal para:** engenheiros que querem possuir o stack, equipes com esquema personalizado (p. ex., "cada elemento tem uma pontuação de confiança, uma fonte e um autor") ou usuários que atingem limites rígidos no Obsidian ou no AnythingLLM (50K e 100K respectivamente).',
          '**Não para:** não engenheiros; qualquer um que subestime o custo de manutenção; usuários para quem uma opção padrão já cobre o caso de uso.',
        ],
        promptExamples: [
          {
            label: 'Ingestão com ChromaDB (esquema Python)',
            text: 'import chromadb, ollama, pathlib\nclient = chromadb.PersistentClient(path="./chroma")\ncoll = client.get_or_create_collection("kb")\nfor p in pathlib.Path("vault").rglob("*.md"):\n    text = p.read_text()\n    emb = ollama.embeddings(model="nomic-embed-text", prompt=text)["embedding"]\n    coll.upsert(ids=[str(p)], embeddings=[emb], documents=[text], metadatas=[{"source": str(p)}])',
          },
          {
            label: 'Consulta com re-ranking (esquema)',
            text: 'q = "What did I write about local RAG sync?"\nq_emb = ollama.embeddings(model="nomic-embed-text", prompt=q)["embedding"]\nhits = coll.query(query_embeddings=[q_emb], n_results=20)\n# pass hits["documents"] through a re-ranker, keep top 5\n# send top 5 + question to Llama 3.2 3B via Ollama chat endpoint',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'O padrão de falha mais comum em builds personalizados: reembedar todo o arquivo a cada mudança de código porque o esquema não é estável. Trave o modelo de embedding + o tamanho de chunk antes de ingerir mais de ~5.000 elementos. Migrar de nomic-embed-text 768 dimensões para mxbai-embed-large 1024 dimensões em 100K elementos leva horas de computação e quebra a coleção ChromaDB — você não pode misturar dimensões.',
          },
        ],
      },
      capture: {
        id: 'capture',
        title: 'Pipeline de captura: web, e-mail, celular, voz',
        content:
          '**A camada de captura determina se a sua PKB sobrevive ao uso diário. A maior parte do conhecimento chega fora do desktop — no celular, no e-mail, em notas de voz — e um pipeline de captura que exige abrir primeiro um app de desktop é um pipeline que é evitado.** Construa para os quatro fluxos principais e aceite que 80% dos elementos chegarão no celular.',
        items: [
          '**Web clipper (desktop + celular):** Obsidian Web Clipper, extensão de navegador do AnythingLLM, ou um bookmarklet personalizado que faz POST da página atual para o seu endpoint de captura. Folha de compartilhamento no celular → extensão web clipper → vault.',
          '**Encaminhamento de e-mail:** endereço dedicado (p. ex., `kb@seudominio.com`) + poller IMAP → escrita de arquivo. Encaminhe os e-mails que você quer guardar; o poller gerencia a ingestão. Use um prefixo por fonte no nome do arquivo para que a recuperação possa filtrar por fonte.',
          '**Folha de compartilhamento no celular:** a rota de captura mais usada. Compartilhar iOS → Obsidian (escreve um arquivo Markdown), Compartilhar iOS → Working Copy (commit no Git), Compartilhar iOS → Shortcut personalizado (POST para a sua API de captura). Android: HTTP Shortcuts ou Tasker.',
          '**Notas de voz:** a captura no estilo AudioPen é cada vez mais comum em 2026. Grave no telefone → transcreva localmente com Whisper.cpp ou via um serviço Whisper autohospedado → escreva a transcrição como arquivo Markdown → embede.',
          '**Colagem manual:** o fallback. Sempre funciona, nunca escala. Use-o para a cauda longa.',
          '**OCR de capturas de tela:** as capturas de tela são um formato de captura com perdas. Use o Apple Live Text no iOS ou um pipeline OCR local (Tesseract, Apple Vision, EasyOCR) para extrair o texto + escrever um arquivo Markdown com a imagem e o texto extraído.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Audite seus hábitos de captura existentes antes de projetar o pipeline. Veja o que você já salva: favoritos do navegador, capturas de tela, e-mails encaminhados, notas de voz. A camada de captura da PKB deve refletir esses fluxos existentes — se você já tira capturas de tela constantemente, construa a rota OCR; se você já encaminha e-mails para si mesmo, construa o encaminhamento de e-mail. Adicionar novos hábitos ("agora vou copiar e colar manualmente cada artigo na KB") nunca funciona.',
          },
        ],
      },
      mobileCapture: {
        id: 'mobile-capture',
        title: 'Captura no celular: iOS Shortcuts, Working Copy, a-Shell',
        content:
          '**O iOS tem três rotas de captura viáveis para uma PKB com IA local em 2026: Shortcuts → Obsidian, Shortcuts → Working Copy (Git) ou Shortcuts → a-Shell (baseado em scripts).** Cada uma se combina naturalmente com uma das três arquiteturas de referência. Escolha a rota cujo modelo de sincronização combine com a sua arquitetura geral.',
        items: [
          '**Shortcuts → Obsidian (centrada no Obsidian):** o Shortcut do Obsidian "Anexar à nota" escreve o conteúdo capturado diretamente no vault. Sincronização via Obsidian Sync (pago, recomendado) ou iCloud Drive (gratuito, com ressalvas). Ideal para fluxos de trabalho orientados a notas.',
          '**Shortcuts → Working Copy (Git):** o conteúdo capturado é escrito em um repositório do Working Copy no iPhone, depois é feito commit automático e push. O desktop faz pull. Gratuito, robusto, funciona com qualquer vault de Markdown. Observação: o Working Copy é pago (pagamento único ~$20). Ideal para vaults sincronizados com Git.',
          '**Shortcuts → a-Shell:** o a-Shell é um terminal iOS gratuito que executa scripts. Construa um Shortcut que canalize o texto capturado para um script do a-Shell, que escreve um arquivo e faz commit via `git`, sincroniza via `rsync` sobre Tailscale, ou envia para o seu endpoint de captura personalizado. Ideal para arquiteturas personalizadas construídas por engenheiros.',
          '**Equivalentes Android:** Tasker + Termux + Git como equivalente à rota Working Copy do iOS. HTTP Shortcuts para a rota de endpoint personalizado. Folha de compartilhamento do Obsidian Mobile para a rota Obsidian.',
          '**Orçamento de latência:** a captura no celular deve concluir em menos de 5 segundos de ponta a ponta (folha de compartilhamento → arquivo escrito / commit / enviado). Tudo mais lento e o usuário abre o app uma vez e nunca mais.',
          '**Captura offline:** as três rotas iOS fazem fila offline (o Shortcuts faz fila, o Working Copy faz fila de commits, os scripts do a-Shell podem escrever localmente e sincronizar depois). Essencial para captura durante voos, transporte público e zonas rurais.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Não construa uma rota de captura no celular que exija que o desktop esteja online (p. ex., POST para um endpoint protegido por Tailscale que só é acessível quando o seu notebook está acordado). Você perderá capturas durante reuniões de trabalho, enquanto o notebook está em modo de suspensão e durante a noite. Execute o endpoint de captura em um servidor doméstico / NAS sempre ligado, ou escreva em um store eventually-consistent (Obsidian Sync, Git, iCloud) que faça buffer offline.',
          },
        ],
      },
      scaling: {
        id: 'scaling',
        title: 'Escalonamento: 1K, 10K, 100K elementos',
        content:
          '**O escalonamento de uma PKB com IA local tem três regimes: abaixo de 1.000 elementos tudo é rápido em qualquer notebook moderno; entre 1.000 e 10.000 elementos o índice de embeddings se torna um artefato real que você deve gerenciar; a partir de 10.000 elementos o hardware se torna o gargalo e a confiabilidade do pipeline de captura domina os resultados.** Os números realistas a seguir assumem Mac M3 Pro / PC RTX 4060 com nomic-embed-text e Llama 3.2 3B.',
        columns: ['Número de elementos', 'Arquitetura recomendada', 'Tempo de embedding inicial', 'Hardware', 'Notas'],
        rows: [
          { 'Número de elementos': '1.000 elementos', 'Arquitetura recomendada': 'Qualquer uma das três', 'Tempo de embedding inicial': '~2 min', 'Hardware': 'Notebook com 16 GB de RAM', 'Notas': 'Tudo parece instantâneo. A escolha de arquitetura é puramente por adequação ao fluxo de trabalho.' },
          { 'Número de elementos': '10.000 elementos', 'Arquitetura recomendada': 'Obsidian ou AnythingLLM', 'Tempo de embedding inicial': '~25 min', 'Hardware': 'Notebook com 16 GB de RAM (32 GB recomendado)', 'Notas': 'Índice de embeddings ~150-250 MB. Tempo de reembedding em edições sub-segundo. Ponto ideal para a maioria dos trabalhadores do conhecimento.' },
          { 'Número de elementos': '50.000 elementos', 'Arquitetura recomendada': 'AnythingLLM ou Python personalizado', 'Tempo de embedding inicial': '~3 horas', 'Hardware': 'Notebook com 32 GB de RAM ou servidor doméstico', 'Notas': 'O índice inicial roda à noite. Planeje sub-vaults / workspaces a partir deste ponto. Uso de disco ~1,5-2 GB para embeddings.' },
          { 'Número de elementos': '100.000 elementos', 'Arquitetura recomendada': 'AnythingLLM (multi-workspace) ou Python personalizado', 'Tempo de embedding inicial': '6-8 horas', 'Hardware': 'Mínimo 32 GB de RAM; servidor doméstico preferido', 'Notas': 'Mova os embeddings para um servidor doméstico dedicado. A confiabilidade do pipeline de captura é agora o modo de falha principal, não a recuperação.' },
          { 'Número de elementos': 'Mais de 500.000 elementos', 'Arquitetura recomendada': 'Python + ChromaDB personalizado', 'Tempo de embedding inicial': 'Mais de 24 horas', 'Hardware': 'Servidor doméstico com 64 GB de RAM + GPU dedicada', 'Notas': 'O sharding, a deduplicação e os pipelines de reembedding incremental se tornam necessários. As ferramentas padrão já não encaixam.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O custo de embedding inicial é uma conta única. Depois do primeiro índice, apenas os elementos alterados são reembedados — normalmente menos de um segundo por salvamento mesmo com 100K elementos. A lentidão da primeira vez é real, mas não recorrente. Execute o índice inicial à noite em uma máquina ligada à tomada e esqueça.',
          },
        ],
      },
      backupSync: {
        id: 'backup-sync',
        title: 'Backup, controle de versão, sincronização multidispositivo',
        content:
          '**Uma PKB com IA local precisa de três camadas de backup: snapshots do vault (Time Machine, Backblaze, restic), histórico Git do conteúdo em texto puro e uma exportação trimestral de embeddings e metadados para uma reconstrução limpa.** Os embeddings são tecnicamente regeneráveis, mas a 100K+ elementos a regeneração custa horas — faça backup deles também.',
        items: [
          '**Snapshots do vault (nível de sistema de arquivos):** Time Machine (macOS) ou restic (Linux) a cada 24 horas. Backblaze ou rsync.net para armazenamento externo. Captura tudo incluindo embeddings.',
          '**Histórico Git (só conteúdo):** arquivos Markdown em texto puro com commit em um repositório Git (local + GitHub / Gitea privado). Adicione `.smart-env/`, `vector_store/` e qualquer outra pasta de índice binário ao `.gitignore`. O Git dá histórico de versões por nota; os snapshots do vault dão rollback de todo o sistema.',
          '**Exportação de embeddings (trimestral):** exporte o vector store para um formato portável (ChromaDB → parquet, Smart Connections → JSON dump, AnythingLLM → exportação integrada). Guarde as duas últimas exportações em armazenamento externo. Se um snapshot do vault falhar ou o índice de embeddings corromper, esta é a sua rota de reconstrução rápida.',
          '**Sincronização multidispositivo — centrada no Obsidian:** o Obsidian Sync gerencia texto puro + índices binários de forma limpa (criptografia de ponta a ponta). O iCloud Drive funciona para texto puro, mas corrompe os índices binários entre plataformas. O Git via Working Copy / Termux funciona só para texto puro — reindexação por dispositivo.',
          '**Sincronização multidispositivo — centrada no AnythingLLM:** execute o AnythingLLM como contêiner Docker autohospedado em um servidor doméstico. Todos os dispositivos se conectam à mesma instância via LAN ou Tailscale. Não é necessária sincronização do lado do cliente.',
          '**Sincronização multidispositivo — Python personalizado:** a arquitetura que você construir determina isso. A maioria dos builds usa um serviço API central (FastAPI em um servidor doméstico) + clientes que fazem POST de capturas e GET de consultas. O Tailscale fornece a camada de rede.',
          '**Migração para um novo computador:** restaure o snapshot do vault → restaure o repositório Git → reinicie o Ollama → reinicie o indexador de embeddings. A regeneração de embeddings é automática se você omitiu o passo de exportação de embeddings; reindexação manual se você fez backup, mas o formato é específico de plataforma.',
          '**Compartilhamento seletivo:** para compartilhar partes de um vault (p. ex., um projeto de pesquisa com um colaborador), use sub-vaults ou um script de exportação por etiquetas. Não compartilhe o vault completo — a maioria das PKBs com IA local acumula elementos sensíveis (médicos, financeiros, pessoais) que nunca deveriam sair do stack local.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Teste sua restauração uma vez por trimestre. A maioria das afirmações "tenho backups" é aspiracional — o teste é "consigo restaurar meu vault em um notebook novo em menos de 2 horas?" Execute esse teste. Na primeira vez que fizer isso, você descobrirá que uma das três camadas (snapshot, Git, exportação de embeddings) estava mal configurada havia seis meses.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        items: [
          '**Projetar a camada de recuperação antes da camada de captura.** Uma busca híbrida personalizada com re-ranking está desperdiçada em um vault de 47 elementos. Construa a captura primeiro, aceite a recuperação ingênua top-5, e só otimize a recuperação depois que o vault tiver mais de 1.000 elementos e você puder medir a qualidade de recuperação em consultas reais.',
          '**Misturar arquiteturas.** "Obsidian para notas + AnythingLLM para PDFs + Python personalizado para e-mails" soa limpo, mas o custo de integração domina. Escolha uma arquitetura, aceite suas limitações e adicione no máximo um único conector se for absolutamente necessário (p. ex., o AnythingLLM ingerindo uma pasta do vault do Obsidian em modo somente leitura).',
          '**Trocar modelos de embedding sem reembedar o arquivo.** Misturar vetores de nomic-embed-text de 768 dimensões e mxbai-embed-large de 1024 dimensões no mesmo store quebra a recuperação silenciosamente. Escolha um modelo de embedding + dimensão, trave-o, e só troque com um reembedding completo do arquivo.',
          '**Ignorar o backup do índice de embeddings a partir de 10.000 elementos.** "Posso regenerá-lo" é verdade, mas a regeneração leva horas. Adicione o store de embeddings à sua estratégia de backup a partir de 10K elementos.',
          '**Projetar só para desktop quando 80% da captura ocorre no celular.** Uma PKB sem rota de captura no celular acumula poeira. Teste o fluxo de captura no celular no primeiro dia — folha de compartilhamento até o vault deve concluir em menos de 5 segundos.',
          '**Confiar no iCloud Drive para índices binários de embeddings.** O iCloud gerencia texto puro bem; os índices binários (Smart Connections `.smart-env/`, vector store do AnythingLLM) corrompem entre plataformas. Use o Obsidian Sync, uma instância autohospedada, ou aceite a reindexação por dispositivo.',
          '**Não particionar a 100K elementos.** Um único workspace / vault a partir de 100K elementos tem latências de recuperação de vários segundos. Particione por tema (Trabalho, Leituras, Projetos) em vários workspaces ou sub-vaults; consulte cada um separadamente ou via um roteador.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'Obsidian — [obsidian.md](https://obsidian.md) e [help.obsidian.md](https://help.obsidian.md) (estrutura do vault, arquitetura de sincronização no celular, documentação de plugins).',
          'AnythingLLM — [github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) (aplicação RAG autohospedada de código aberto).',
          'Ollama — [ollama.com](https://ollama.com) e [github.com/ollama/ollama](https://github.com/ollama/ollama) (runtime LLM local; endpoints de chat + embedding).',
          'ChromaDB — [trychroma.com](https://www.trychroma.com) e [github.com/chroma-core/chroma](https://github.com/chroma-core/chroma) (banco de dados vetorial local de código aberto).',
          'Working Copy — [workingcopy.app](https://workingcopy.app) (cliente Git de iOS para pipelines de captura no celular).',
          'a-Shell — [holzschu.github.io/a-Shell_iOS/](https://holzschu.github.io/a-Shell_iOS/) (terminal iOS gratuito para captura no celular baseada em scripts).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Como capturo páginas web na minha base de conhecimento?',
            a: 'Três opções ordenadas por atrito. (1) Web clipper como extensão de navegador — o Obsidian Web Clipper ou a extensão do AnythingLLM escreve a página atual diretamente no seu vault / workspace. (2) Folha de compartilhamento no celular — compartilhar no Safari / Chrome → Obsidian (escreve um arquivo Markdown) ou → Working Copy (commit no Git) ou → Shortcut personalizado (faz POST para a sua API de captura). (3) Bookmarklet — para navegadores sem extensão; faz POST da URL atual + seleção para o seu endpoint de captura. A folha de compartilhamento no celular é a rota mais usada na prática — projete-a primeiro.',
          },
          {
            q: 'Posso encaminhar e-mails para o sistema?',
            a: 'Sim. Configure um endereço dedicado (p. ex., um alias Fastmail / Migadu `kb@seudominio.com`) e execute um poller IMAP no seu servidor doméstico ou notebook que baixe o novo e-mail e escreva um arquivo Markdown por e-mail no seu vault. Adicione um prefixo de endereço do remetente no nome do arquivo para que a recuperação possa filtrar por remetente. O AnythingLLM tem uma integração de e-mail própria; os usuários do Obsidian normalmente constroem o poller IMAP eles mesmos ou usam alternativas ao IFTTT / Zapier como o n8n.',
          },
          {
            q: 'Como sincronizo entre desktop e celular?',
            a: 'Depende da arquitetura. Centrada no Obsidian: Obsidian Sync (pago, gerencia índices binários de forma limpa), iCloud Drive (gratuito, só texto puro — reindexação por dispositivo) ou Git via Working Copy (gratuito + pagamento único do Working Copy, só texto puro — reindexação por dispositivo). Centrada no AnythingLLM: execute o AnythingLLM em Docker em um servidor doméstico, todos os dispositivos se conectam via LAN ou Tailscale — não é necessária sincronização do lado do cliente. Python personalizado: construa um serviço API central em um servidor doméstico; os clientes fazem POST de capturas e GET de consultas.',
          },
          {
            q: 'Devo usar um vault grande ou dividir por tema?',
            a: 'Um vault até ~50.000 elementos. A partir de 50K, divida por tema (Trabalho, Leituras, Projetos, Pessoal) por duas razões: a latência de recuperação se mantém abaixo de ~1 segundo, e o vazamento involuntário entre contextos (p. ex., notas pessoais aparecendo em consultas de trabalho) se torna possível em escala. Dividir antes de 50K é prematuro — você perde as conexões transversais fortuitas que são um valor principal de uma PKB.',
          },
          {
            q: 'Com que frequência devo reembedar para maior precisão?',
            a: 'Nunca reembede por "deriva de precisão" — os embeddings não se degradam. Reembede só quando você trocar o modelo de embedding (p. ex., atualizando de nomic-embed-text para mxbai-embed-large para melhor recuperação em conteúdo técnico). As três arquiteturas gerenciam automaticamente o reembedding incremental na mudança de arquivo; você não o agenda. A exceção são os stacks Python personalizados onde você controla o indexador — ali, o reembedding incremental controlado por watchdog ao salvar é padrão.',
          },
          {
            q: 'Posso usar controle de versão na minha base de conhecimento?',
            a: 'Sim para o conteúdo em texto puro (vault Markdown → repositório Git, local + GitHub / Gitea privado). Adicione pastas de índice binário (`.smart-env/`, `vector_store/`, diretório de persistência do ChromaDB) ao `.gitignore` — elas incham o histórico e causam conflitos de merge. O Git dá histórico de versões por nota; os snapshots do vault (Time Machine, restic) dão rollback de todo o sistema. Ambas as camadas, não uma ou outra.',
          },
          {
            q: 'Como gerencio os PDFs nesse sistema?',
            a: 'Centrada no Obsidian: armazene PDFs junto às notas Markdown; o Smart Connections não embede o conteúdo PDF diretamente — extraia o texto primeiro (p. ex., via o plugin PDF++ ou um script de pré-processamento que escreve um resumo Markdown junto a cada PDF). Centrada no AnythingLLM: arraste PDFs diretamente para um workspace; o AnythingLLM gerencia automaticamente o parsing e chunking de PDF. Python personalizado: use `pypdf` ou `pdfplumber` para extrair texto no seu pipeline de ingestão, depois embede o texto extraído. O AnythingLLM é a opção com menos atrito para arquivos com muitos PDFs.',
          },
          {
            q: 'Posso compartilhar partes da minha KB de forma seletiva?',
            a: 'Sim, mas projete isso desde o primeiro dia. Use sub-vaults (Obsidian) ou workspaces (AnythingLLM) para manter o conteúdo "compartilhável" e "privado" em stores separados. Para compartilhamento pontual, construa um script de exportação por etiquetas que extraia elementos por etiqueta (p. ex., `#shareable`) em um bundle Markdown portável. Não compartilhe o vault completo — a maioria das PKBs com IA local acumula elementos sensíveis (médicos, financeiros, correspondência pessoal) que nunca deveriam sair do stack local.',
          },
          {
            q: 'Qual é a melhor estratégia de backup?',
            a: 'Três camadas: (1) snapshot do sistema de arquivos a cada 24 horas (Time Machine / restic) com cópia em armazenamento externo (Backblaze / rsync.net); (2) histórico Git do conteúdo em texto puro para recuperação de versões por nota; (3) exportação trimestral de embeddings + metadados como rota de reconstrução rápida. Teste a restauração uma vez por trimestre — "consigo reconstruir meu vault em um notebook novo em menos de 2 horas?" O primeiro teste de restauração geralmente revela que uma das três camadas estava mal configurada.',
          },
          {
            q: 'Como migro para um computador novo?',
            a: 'Restaure o snapshot do vault → instale o Ollama e baixe os mesmos modelos → instale o Obsidian / AnythingLLM / seu stack Python personalizado → reinicie o indexador de embeddings. Com o Obsidian Sync ou o AnythingLLM autohospedado, a migração é "instale o cliente e faça login" — não é necessária restauração manual. Sem isso, calcule ~30 min para um vault de 10K elementos, ~2 horas para 50K e a noite toda para mais de 100K se você omitiu o passo de exportação de embeddings.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Obsidian + LLM local: 5 plugins que transformam seu vault em um segundo cérebro (2026)](/pt/power-local-llm/local-llm-with-obsidian-2026) — análise profunda da camada de plugins da Arquitetura A.',
          '[LLM local com Logseq e Joplin](/pt/power-local-llm/local-llm-with-logseq-and-joplin) — camadas de armazenamento alternativas para a PKB se o Obsidian não for a sua preferência.',
          '[Converse com mais de 1000 PDFs localmente: escalando RAG além de exemplos de brinquedo](/pt/power-local-llm/chat-with-1000-pdfs-locally) — escalonamento da camada RAG além de 1.000 elementos, aplicável às três arquiteturas.',
          '[RAG local nos seus PDFs em 30 minutos (Ollama + AnythingLLM)](/pt/power-local-llm/local-rag-on-your-pdfs-step-by-step) — tutorial de implementação RAG para a camada de recuperação usada na Arquitetura B.',
          '[Melhores modelos de embedding para RAG local (2026)](/pt/power-local-llm/best-embedding-models-local-rag-2026) — seleção de modelo de embedding (nomic-embed-text vs mxbai-embed-large vs bge-m3) para cada uma das três arquiteturas.',
          '[RAG explicado](/pt/prompt-engineering/rag-explained) — referência conceitual para a camada de recuperação.',
          '[Guia de hardware para LLM local 2026](/pt/local-llms/local-llm-hardware-guide-2026) — dimensionamento de hardware para o mínimo de 16 GB, 32 GB recomendado a partir de 10K elementos, servidor doméstico a partir de 100K.',
          '[Diretório de software LLM local 2026](/pt/power-local-llm/local-llm-software-directory-2026) — listagens de diretório para Ollama, ChromaDB, AnythingLLM, Obsidian e outros componentes do stack.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Construa uma base de conhecimento pessoal com IA local: guia de stack 2026',
      description: 'Base de conhecimento pessoal com IA local 2026: 3 arquiteturas comparadas (Obsidian, AnythingLLM, Python + ChromaDB). Escala para mais de 100.000 elementos. Captura, RAG, sincronização, backup.',
      url: 'https://www.promptquorum.com/pt/pt/power-local-llm/local-llm-personal-knowledge-base-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
},
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'بناء قاعدة معرفة شخصية بالذكاء الاصطناعي المحلي: دليل الحزمة 2026',
    seoTitle: 'قاعدة معرفة شخصية بالذكاء الاصطناعي المحلي 2026',
    intro:
      'تتألف قاعدة المعرفة الشخصية (PKB) المبنية على الذكاء الاصطناعي المحلي في 2026 من خمس طبقات: الالتقاط (قاصّ ويب، وإعادة توجيه البريد الإلكتروني، وورقة المشاركة في الجوال)، والتخزين (vault بصيغة Markdown أو مجلد مستندات)، والتضمينات (نموذج محلي عبر Ollama)، والاسترداد (RAG)، والواجهة (دردشة أو بحث دلالي). تغطي ثلاث بنى نحو 95% من الحالات الفعلية — بنية Obsidian المحورية (موجّهة للملاحظات، تتسع حتى ~50,000 عنصر)، وبنية AnythingLLM المحورية (موجّهة للمستندات، تتسع حتى ~100,000 عنصر)، وحزمة Python + ChromaDB المخصصة (موجّهة للمهندسين، تتسع فوق مليون عنصر). الحد الأدنى للأجهزة هو حاسوب محمول بـ 16 جيجابايت من الذاكرة العشوائية؛ وما فوق 10,000 عنصر، خطّط لـ 32 جيجابايت. القرار الأهم في التوسع ليس النموذج اللغوي — بل ما إذا كان خط أنابيب الالتقاط يصمد أمام الاستخدام اليومي على الجوال، حيث تصل معظم المعرفة.',
    metaDescription:
      'Obsidian وAnythingLLM وPython + ChromaDB: ثلاث بنى من 50,000 حتى مليون عنصر. RAG والتقاط عبر الجوال والمزامنة والنسخ الاحتياطي.',
    twitterDescription:
      'ثلاث بنى PKB بالذكاء الاصطناعي المحلي في 2026: Obsidian (~50K عنصر)، وAnythingLLM (~100K)، وPython + ChromaDB (+1M). الالتقاط وRAG ومزامنة الجوال والنسخ الاحتياطي والتوسع.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Qwen3 7B',
      'nomic-embed-text',
      'mxbai-embed-large',
      'bge-m3',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16 GB de memoria unificada mínimo, 32 GB recomendado a partir de 10.000 elementos)',
      'PC con RTX 3060 12 GB o RTX 4060 8 GB',
      'PC con 32 GB de RAM (fallback solo-CPU para vaults grandes)',
      'Servidor doméstico / mini PC con 64 GB de RAM (stack Python personalizado para más de 100.000 elementos)',
    ],
    audience:
      'العاملون في مجال المعرفة والباحثون والكتّاب والمهندسون الذين يبنون أرشيفاً خاصاً بالبحث الذكي في ملاحظاتهم وإشاراتهم المرجعية ورسائلهم الإلكترونية ومستنداتهم — عادةً بين 1,000 و100,000 عنصر — دون إرسال المحتوى إلى خدمة سحابية.',
    readTime: '15 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'قاعدة معرفة شخصية بالذكاء الاصطناعي المحلي',
    targetKeywords: [
      'قاعدة معرفة ذكاء اصطناعي محلي',
      'عقل ثانٍ نموذج llm محلي',
      'قاعدة معرفة خاصة ذكاء اصطناعي',
      'rag محلي قاعدة معرفة',
      'قاعدة معرفة مستضافة ذاتياً ذكاء اصطناعي',
      'قاعدة معرفة شخصية 2026',
    ],
    leadAnswerBlock:
      '**قاعدة المعرفة بالذكاء الاصطناعي المحلي في 2026 هي حزمة من خمس طبقات — الالتقاط والتخزين والتضمينات والاسترداد والواجهة — ويجب اختيار إحدى البنى المرجعية الثلاث بدلاً من التصميم من الصفر.** استخدم Obsidian + Smart Connections + Copilot for Obsidian + Ollama إذا كنت تكتب ملاحظات يومياً وتريد بحثاً دلالياً عبر كامل vault؛ يتسع بسلاسة حتى ~50,000 ملاحظة على Mac M3 Pro بـ 16 جيجابايت أو ما يعادله من أجهزة PC. استخدم AnythingLLM + Ollama إذا كانت معرفتك تعيش أساساً كمستندات (PDFs وتصديرات ومقتطفات ويب) بدلاً من ملاحظات؛ يتسع حتى ~100,000 مستند ويجمع الالتقاط وRAG والدردشة في تطبيق واحد. ابنِ حزمة Python + ChromaDB + Llama 3.2 3B المخصصة فقط إذا كان لديك أكثر من 100,000 عنصر أو وصول متعدد المستخدمين أو متطلبات مخطط محددة — تكلفة الصيانة حقيقية. العنق الزجاجي الفعلي في البنى الثلاث هو الالتقاط: تصل معظم المعرفة عبر الجوال (صفحات الويب والصور والملاحظات الصوتية والرسائل المُعاد توجيهها)، وحزمة بدون مسار التقاط للجوال تتراكم الغبار بصرف النظر عن كفاءة الاسترداد. الحد الأدنى للأجهزة: 16 جيجابايت ذاكرة عشوائية؛ وما فوق 10,000 عنصر خصّص 32 جيجابايت. وما فوق 100,000 عنصر انقل التضمينات إلى خادم منزلي.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل بنية لقاعدة معرفة بالذكاء الاصطناعي المحلي في 2026؟',
        answer:
          'لمعظم الناس: Obsidian + Smart Connections + Copilot for Obsidian + Ollama (Llama 3.2 3B للدردشة، وnomic-embed-text للتضمينات). يتسع حتى ~50,000 ملاحظة على Mac بـ 16 جيجابايت. للأرشيفات ذات المستندات الكثيرة: AnythingLLM + Ollama في تطبيق واحد، يتسع حتى ~100,000 مستند. للمهندسين والـ vaults بأكثر من 100,000 عنصر: حزمة Python + ChromaDB + Llama 3.2 3B المخصصة مع خدمات الالتقاط والتضمين والدردشة المنفصلة. الحد الأدنى للأجهزة 16 جيجابايت ذاكرة عشوائية؛ خصّص 32 جيجابايت من 10,000 عنصر وخادماً منزلياً من 100,000. الالتقاط هو عنق الزجاجة الفعلي للتوسع — صمّم ورقة مشاركة الجوال وقاصّ الويب وإعادة توجيه البريد الإلكتروني قبل تحسين النموذج اللغوي.',
        bullets: [
          'محورية Obsidian — الأفضل لسير عمل موجّه للملاحظات، يتسع حتى ~50,000 ملاحظة، حد أدنى 16 جيجابايت ذاكرة عشوائية.',
          'محورية AnythingLLM — الأفضل للـ PKBs ذات المستندات الكثيرة (PDFs، تصديرات)، تتسع حتى ~100,000 مستند، تطبيق شامل.',
          'حزمة Python + ChromaDB المخصصة — الأفضل للمهندسين، تتسع فوق مليون عنصر، تتطلب خدمات مُدارة ذاتياً.',
          'نماذج الدردشة الموصى بها في 2026: Llama 3.2 3B لأنظمة 16 جيجابايت، وPhi-4 Mini لـ 8 جيجابايت، وQwen3 7B للجودة على 32 جيجابايت+.',
          'نماذج التضمين الموصى بها: nomic-embed-text (768 بُعداً، سريع) أو mxbai-embed-large (1024 بُعداً، أدق)؛ bge-m3 للأرشيفات متعددة اللغات.',
          'الحد الأدنى للأجهزة: حاسوب محمول بـ 16 جيجابايت ذاكرة عشوائية؛ 32 جيجابايت موصى من 10,000 عنصر؛ خادم منزلي بـ 64 جيجابايت من 100,000.',
          'الالتقاط هو العنق الزجاجي: تصل معظم عناصر PKB عبر الجوال (صفحات ويب وصور وملاحظات صوتية) وتُستعلم على سطح المكتب. iOS Shortcuts ← Obsidian أو Working Copy (Git) أو a-Shell هي المسارات الثلاثة لالتقاط iOS.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'أي بنية تبني؟', anchor: '#which-architecture' },
      { label: 'جدول مقارنة البنى', anchor: '#comparison-table' },
      { label: 'الطبقات الخمس لـ PKB بالذكاء الاصطناعي المحلي', anchor: '#five-layers' },
      { label: 'البنية A: محورية Obsidian', anchor: '#architecture-obsidian' },
      { label: 'البنية B: محورية AnythingLLM', anchor: '#architecture-anythingllm' },
      { label: 'البنية C: Python + ChromaDB المخصصة', anchor: '#architecture-custom' },
      { label: 'خط أنابيب الالتقاط: ويب وبريد وجوال وصوت', anchor: '#capture' },
      { label: 'التقاط الجوال: iOS Shortcuts وWorking Copy وa-Shell', anchor: '#mobile-capture' },
      { label: 'التوسع: 1K و10K و100K عنصر', anchor: '#scaling' },
      { label: 'النسخ الاحتياطي والإصدارات والمزامنة متعددة الأجهزة', anchor: '#backup-sync' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**اختر إحدى البنى المرجعية الثلاث بدلاً من التصميم من الصفر.** محورية Obsidian (موجّهة للملاحظات، ~50K عنصر)، ومحورية AnythingLLM (موجّهة للمستندات، ~100K عنصر)، أو حزمة Python + ChromaDB المخصصة (موجّهة للمهندسين، أكثر من 1M عنصر). نادراً ما يستحق خلط البنى — تكلفة التكامل تسود.',
          '**لـ PKB بالذكاء الاصطناعي المحلي خمس طبقات: الالتقاط والتخزين والتضمينات والاسترداد والواجهة.** تقع معظم أخطاء المبتدئين في طبقة الالتقاط، لا في النموذج اللغوي. إذا لم تتدفق العناصر من الجوال والبريد الإلكتروني، فلن يُنقذ المشروع أي استرداد ذكي.',
          '**الحد الأدنى للأجهزة: 16 جيجابايت ذاكرة عشوائية.** تحتها يجب الاختيار بين تشغيل نموذج تضمين أو نموذج دردشة — ليس كليهما. بـ 16 جيجابايت يمكنك تشغيل Llama 3.2 3B + nomic-embed-text بشكل متزامن. بـ 32 جيجابايت يمكنك الارتقاء إلى Qwen3 7B أو تشغيل عدة جلسات دردشة. فوق 100,000 عنصر انقل التضمينات إلى خادم منزلي.',
          '**النماذج الموصى بها في 2026:** الدردشة — Llama 3.2 3B (الافتراضي)، وPhi-4 Mini (أنظمة 8 جيجابايت)، وQwen3 7B (الجودة على 32 جيجابايت+)؛ التضمينات — nomic-embed-text (768 بُعداً، سريع)، ومxbai-embed-large (1024 بُعداً، أدق)، وbge-m3 (متعدد اللغات).',
          '**الالتقاط هو عنق الزجاجة في التوسع، لا الاسترداد.** تصل معظم عناصر المعرفة عبر الجوال (مقتطفات ويب وصور وملاحظات صوتية ورسائل مُعادة التوجيه). صمّم مسار ورقة مشاركة الجوال ← vault قبل ضبط النموذج اللغوي. iOS Shortcuts ← Obsidian أو Working Copy أو a-Shell هي المسارات الثلاثة القابلة للتطبيق على iOS.',
          '**طريقة المزامنة تحدد ما يعمل على الجوال.** يتعامل Obsidian Sync مع فهارس التضمينات الثنائية بنظافة؛ iCloud Drive يُفسدها بين المنصات؛ Git يتطلب انضباطاً مع .gitignore وإعادة الفهرسة لكل جهاز. اختر المزامنة أولاً، ثم الإضافات.',
          '**النسخ الاحتياطي ليس اختيارياً.** ثلاث طبقات: لقطة vault (Time Machine، وBackblaze، وrestic)، وسجل Git للمحتوى بنص عادي، وتصدير ربع سنوي للتضمينات + البيانات الوصفية كمسار إعادة بناء نظيف. التضمينات قابلة للتجديد لكنها مكلفة — انسخها احتياطياً أيضاً إذا تجاوز vault 10,000 عنصر.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**البنى المشمولة:** محورية Obsidian، ومحورية AnythingLLM، وحزمة Python + ChromaDB المخصصة.',
          '**واجهة LLM الخلفية:** Ollama (موصى به) — يُشغّل نماذج الدردشة والتضمين خلف نقطة نهاية محلية على `http://localhost:11434`.',
          '**نماذج الدردشة الموصى بها 2026:** Llama 3.2 3B (أنظمة 16 جيجابايت)، وPhi-4 Mini (8 جيجابايت)، وQwen3 7B (+32 جيجابايت).',
          '**نماذج التضمين الموصى بها 2026:** nomic-embed-text (768 بُعداً، سريع)، ومxbai-embed-large (1024 بُعداً، دقيق)، وbge-m3 (متعدد اللغات).',
          '**أهداف عدد العناصر:** Obsidian ~50,000 ملاحظة، وAnythingLLM ~100,000 مستند، وحزمة Python + ChromaDB المخصصة أكثر من 1M.',
          '**الحد الأدنى للأجهزة:** حاسوب محمول بـ 16 جيجابايت ذاكرة عشوائية. أكثر من 10,000 عنصر: 32 جيجابايت موصى. أكثر من 100,000 عنصر: خادم منزلي بـ 64 جيجابايت.',
          '**مسارات التقاط الجوال (iOS):** Shortcuts ← Obsidian، وShortcuts ← Working Copy (Git)، وShortcuts ← a-Shell. Android: Tasker أو HTTP Shortcuts.',
        ],
      },
      whichArchitecture: {
        id: 'which-architecture',
        title: 'أي بنية تبني؟',
        content:
          '**اختر البنية التي تتوافق مع كيفية وصول معرفتك فعلاً، لا التي تبدو الأقوى.** إذا كنت تكتب ملاحظات يومياً، ابنِ محورية Obsidian. إذا كانت معرفتك أساساً مستندات (PDFs وتصديرات ومقتطفات ويب)، ابنِ محورية AnythingLLM. ابنِ حزمة Python + ChromaDB المخصصة فقط إذا كان لديك فعلاً أكثر من 100,000 عنصر أو تحتاج وصولاً متعدد المستخدمين — تكلفة الصيانة حقيقية ونادراً ما تستحق دون ذلك العتبة.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'سير العمل الموجّه للملاحظات يختار Obsidian + Smart Connections + Copilot + Ollama؛ الأرشيفات الموجّهة للمستندات تختار AnythingLLM + Ollama؛ المهندسون بأكثر من 100K عنصر يختارون حزمة Python + ChromaDB المخصصة.',
          },
          {
            type: 'plain-terms',
            text: 'ثلاثة مسارات، وجهة واحدة. إذا كنت تعيش داخل تطبيق ملاحظات، يُغلّف Obsidian عادتك الحالية بميزات ذكاء اصطناعي. إذا كنت تتراكم أساساً PDFs وصفحات ويب، فـ AnythingLLM تطبيق واحد يستوعب ويُفهرس ويتحادث. إذا كنت تكتب كوداً وتريد تحكماً كاملاً، يتيح لك Python + ChromaDB بناء ما تريد تحديداً — لكنك تصونه. اختر المسار الذي يتوافق مع سير عملك الحالي؛ لا تغيّر عاداتك لتتكيّف مع البنية.',
          },
        ],
        decisionBlock: {
          title: 'القرار: أي بنية PKB؟',
          localIf: [
            'تستخدم Obsidian بالفعل أو تريد سير عمل موجّهاً للملاحظات مع ملفات Markdown ← محورية Obsidian',
            'معرفتك أساساً PDFs وتصديرات ومقتطفات ويب وملفات بريد إلكتروني ← محورية AnythingLLM',
            'لديك أكثر من 100,000 عنصر أو احتياجات مخطط مخصصة أو وصول متعدد المستخدمين ← حزمة Python + ChromaDB المخصصة',
            'تريد تطبيقاً يُدير الالتقاط والتخزين وRAG والدردشة ← محورية AnythingLLM',
            'تريد تحكماً كاملاً في التقسيم والاسترداد وإعادة الترتيب ← حزمة Python + ChromaDB المخصصة',
          ],
          cloudIf: [
            'تحتاج استدلالاً بمستوى GPT-5.5 في كل استعلام وأرشيفك صغير ← Notion AI أو ChatGPT مع GPTs مخصصة (الحزمة المحلية ~70% قدرة في التوليف)',
            'لا تملك أي جهاز بـ 16 جيجابايت+ من الذاكرة العشوائية ولا خادماً منزلياً ← PKB SaaS سحابي (Mem، وReflect)',
            'يحتاج فريقك وصولاً متزامناً متعدد المستخدمين ولا تريد استضافة خدمات ← المكافئ السحابي',
          ],
          quick: [
            'الافتراضي للمستخدمين الموجّهين للملاحظات: Obsidian + Smart Connections + Copilot + Ollama',
            'الافتراضي للمستخدمين الموجّهين للمستندات: AnythingLLM + Ollama',
            'مهندس بأكثر من 100K عنصر: حزمة Python + ChromaDB + Llama 3.2 3B المخصصة',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'لا تبدأ بحزمة Python المخصصة فقط لأنها تبدو أقوى. ابنِ أولاً محورية Obsidian أو AnythingLLM، وشغّلها شهرين، وابحث عن الطبقة التي لا تلائم سير عملك، وعندها فقط فكّر في استبدال تلك الطبقة بمكوّن مخصص. جميع مشاريع PKB التي بدأت "من الصفر بـ Python" وعملت أكثر من ستة أشهر تقاربت في النهاية نحو تصميمات بشكل Obsidian أو AnythingLLM.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول مقارنة البنى',
        content:
          '**تختلف البنى المرجعية الثلاث في خمسة محاور تهم معظم البنّائين: تعقيد الإعداد وحد عدد العناصر ومزامنة الجوال ومرونة الالتقاط وعبء الصيانة.** يتزايد تعقيد الإعداد بشكل خطي تقريباً مع التحكم — وكذلك تكلفة الصيانة.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obsidian ذات تعقيد متوسط عند ~50K عنصر، وAnythingLLM ذات تعقيد منخفض عند ~100K عنصر، وحزمة Python + ChromaDB المخصصة ذات تعقيد مرتفع لكنها تتسع فوق 1M عنصر.',
          },
          {
            type: 'plain-terms',
            text: 'AnythingLLM هي الأسهل في الإعداد وتتسع أبعد من الخيارين "الجاهزين للاستخدام" — لكنها ذات رأي حول كيفية تنظيم المستندات. Obsidian تقدم طبقة تدوين الملاحظات الأكثر تعبيراً ونظام إضافات نشطاً، في مقابل ضريبة إعداد أعلى قليلاً. Python المخصصة لا حد لها لكنك تصون كل شيء: التقسيم وإعادة الترتيب وإزالة التكرار والمزامنة والنسخ الاحتياطية. اختر بناءً على تحملك للصيانة، ليس فقط بعدد العناصر.',
          },
        ],
        columns: ['البنية', 'التعقيد', 'أقصى عناصر', 'مزامنة الجوال', 'مثالية لـ'],
        rows: [
          { 'البنية': 'محورية Obsidian', 'التعقيد': 'متوسط', 'أقصى عناصر': '~50,000', 'مزامنة الجوال': 'نعم (Obsidian Sync؛ iCloud / Git مع تحفظات)', 'مثالية لـ': 'المستخدمون الموجّهون للملاحظات بعادة الكتابة اليومية' },
          { 'البنية': 'محورية AnythingLLM', 'التعقيد': 'منخفض', 'أقصى عناصر': '~100,000', 'مزامنة الجوال': 'محدود (واجهة ويب من الجوال عبر LAN / Tailscale)', 'مثالية لـ': 'الـ PKBs ذات المستندات الكثيرة (PDFs، تصديرات، مقتطفات ويب)' },
          { 'البنية': 'Python + ChromaDB المخصصة', 'التعقيد': 'مرتفع', 'أقصى عناصر': 'أكثر من 1M', 'مزامنة الجوال': 'يدوي (ابنِ API خاصة + عميل جوال)', 'مثالية لـ': 'المهندسون الراغبون في تحكم كامل + متعدد المستخدمين' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'مزامنة الجوال هي محور المقارنة الأكثر استهانةً. AnythingLLM أسهل تقنياً في الإعداد من Obsidian، لكن على الجوال تعني "افتح واجهة ويب LAN في Safari" — ليست تجربة أصلية. Obsidian Mobile، بالاقتران مع Obsidian Sync، يوفر تطبيق iOS / Android شبه أصلي مع قراءة دون اتصال. إذا كان الالتقاط والقراءة على الجوال مهمَّين، ارجح Obsidian أكثر مما يقترح الجدول.',
          },
        ],
      },
      fiveLayers: {
        id: 'five-layers',
        title: 'الطبقات الخمس لـ PKB بالذكاء الاصطناعي المحلي',
        content:
          '**كل PKB بالذكاء الاصطناعي المحلي لها الطبقات الخمس ذاتها بصرف النظر عن البنية: الالتقاط والتخزين والتضمينات والاسترداد والواجهة.** تحدث الإخفاقات عادةً لأن طبقة لا تلائم الأخريات — الأكثر شيوعاً، طبقة استرداد متطورة مقرونة بخط أنابيب التقاط معطل لا يستخدمه أحد.',
        numberedItems: [
          {
            title: 'الالتقاط',
            whyItMatters: 'كيف تدخل العناصر إلى النظام. قاصّ ويب، وإعادة توجيه البريد الإلكتروني، وورقة مشاركة الجوال، وملاحظة صوتية، ولصق يدوي. الطبقة الأكثر إهمالاً في بناءات المبتدئين — والطبقة التي تحدد ما إذا كان النظام يصمد أمام الاستخدام اليومي. إذا استغرق الالتقاط أكثر من 5 ثوانٍ على الجوال، يتراكم النظام الغبار.',
          },
          {
            title: 'التخزين',
            whyItMatters: 'أين تعيش العناصر على القرص. Vault بصيغة Markdown (Obsidian، وLogseq)، أو مجلد مستندات + قاعدة بيانات (AnythingLLM)، أو نظام ملفات + بيان (Python المخصصة). اختر تنسيق تخزين يصمد عبر أي تغيير للأدوات — Markdown بنص عادي هو الأكثر قابلية للنقل؛ قواعد البيانات الثنائية هي الأقل.',
          },
          {
            title: 'التضمينات',
            whyItMatters: 'تمثيلات متجهية للعناصر تُستخدم للبحث الدلالي. تُولَّد بنموذج محلي (nomic-embed-text أو mxbai-embed-large عبر Ollama). يمكن تبديل نموذج التضمين لاحقاً، لكن تكلفة الترحيل هي "إعادة تضمين كل شيء" — اختر مرة واحدة والتزم.',
          },
          {
            title: 'الاسترداد',
            whyItMatters: 'كيف تُعثر على العناصر وقت الاستعلام. بحث متجهي top-k، وإعادة ترتيب اختيارية، وفلاتر بيانات وصفية اختيارية (تصنيفات، تواريخ، مصادر). الفارق في الجودة بين top-5 البسيط وtop-20-مع-إعادة-ترتيب-مضبوط هو الفارق بين "مفيد" و"سحري".',
          },
          {
            title: 'الواجهة',
            whyItMatters: 'كيف تستعلم وتقرأ. شريط جانبي (Smart Connections)، أو دردشة (Copilot، وAnythingLLM)، أو CLI (Python المخصصة)، أو API. يستخدم معظم المستخدمين الدردشة افتراضياً — لكن شريط جانبي "الملاحظات ذات الصلة" يُظهر مادة منسية لا تستطيع الدردشة إظهارها، لأنك لا تعرف ما تسأل عنه.',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'نمط بناء شائع يفشل: اختيار الاسترداد الأقوى (بحث هجين مخصص مع إعادة ترتيب)، والنموذج الأذكى (Qwen3 7B)، وإهمال الالتقاط. بعد ثلاثة أسابيع، يحتوي vault على 47 عنصراً لأنه لا شيء يتدفق من الجوال. الحل دائماً واحد: بسّط الاسترداد، وبسّط الدردشة، وأصلح الالتقاط، واقبل أن 80% من القيمة تأتي من وجود العناصر في النظام.',
          },
        ],
      },
      architectureObsidian: {
        id: 'architecture-obsidian',
        title: 'البنية A: محورية Obsidian',
        content:
          '**Obsidian + Smart Connections + Copilot for Obsidian + Ollama هي البنية الافتراضية لسير العمل الموجّه للملاحظات في 2026.** تتسع بسلاسة حتى ~50,000 ملاحظة على Mac M3 Pro بـ 16 جيجابايت أو ما يعادله من أجهزة PC، وتدعم القراءة على الجوال عبر Obsidian Mobile، وتحتفظ بكل شيء بصيغة Markdown بنص عادي يمكن نقله إلى أي أداة مستقبلية.',
        items: [
          '**التخزين:** ملفات Markdown في مجلد ("vault"). نص عادي ومجلدات بسيطة وبدون قاعدة بيانات. يصمد عبر ترحيل الأدوات.',
          '**الالتقاط:** Obsidian Web Clipper (إضافة متصفح)، وورقة مشاركة Obsidian Mobile (iOS / Android)، والبريد الإلكتروني إلى Obsidian عبر Mailspike أو وصفة IFTTT مخصصة، واللصق اليدوي.',
          '**التضمينات:** إضافة Smart Connections ← Ollama على `http://localhost:11434/api/embeddings` ← nomic-embed-text (الافتراضي) أو mxbai-embed-large (أدق). الفهرس يعيش في `.smart-env/` داخل vault.',
          '**الاسترداد:** شريط Smart Connections الجانبي (عرض الملاحظات ذات الصلة) + وضع Vault QA لـ Copilot for Obsidian (RAG على vault لاستعلامات الدردشة). كلاهما يسترد من فهرس التضمينات.',
          '**الواجهة:** شريط Smart Connections الجانبي (اكتشاف سلبي) + لوحة دردشة Copilot (استعلامات نشطة) + قوالب Text Generator (سير عمل قابلة للتكرار كالملخصات اليومية).',
          '**وقت الإعداد:** ~30 دقيقة (تثبيت Ollama وتنزيل النماذج وتثبيت ثلاث إضافات وتهيئة نقاط النهاية وانتظار بناء الفهرس الأولي).',
          '**الأجهزة:** الحد الأدنى 16 جيجابايت ذاكرة عشوائية (Llama 3.2 3B + nomic-embed-text بشكل متزامن). 32 جيجابايت موصى من 10,000 ملاحظة. SSD موصى جداً — إعادة بناء الفهرس محدودة بـ I/O على الأقراص الصلبة.',
          '**حد العناصر:** ~50,000 ملاحظة عملياً؛ مُختبر حتى 20,000 مع إعادة فهرسة تدريجية دون ثانية. فوق 50K+ ملاحظة، يستغرق الفهرس الأولي 4-8 ساعات وينبغي التفكير في sub-vaults.',
          '**مثالية لـ:** المستخدمون بعادة الكتابة اليومية وتفضيلات Markdown-first والرغبة في شريط جانبي "رفيق تفكير" يُظهر ملاحظات منسية.',
          '**ليست لـ:** المستخدمون الذين معرفتهم أساساً PDFs ومقتطفات ويب (استخدم محورية AnythingLLM)؛ المستخدمون الذين يريدون تطبيقاً شاملاً واحداً (محورية Obsidian هي "Obsidian + 3 إضافات + Ollama").',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'للاطلاع على تحليل معمّق لطبقة الإضافات في هذه البنية (أي 5 إضافات وخطوات التهيئة وأرقام التوسع لـ vault)، راجع [دليل إضافات Obsidian + LLM المحلي](/ar/power-local-llm/local-llm-with-obsidian-2026). هذه الصفحة تغطي البنية؛ دليل الإضافات يغطي الإعداد.',
          },
        ],
      },
      architectureAnythingllm: {
        id: 'architecture-anythingllm',
        title: 'البنية B: محورية AnythingLLM',
        content:
          '**AnythingLLM + Ollama هو الخيار الشامل: الالتقاط والتخزين وRAG والدردشة مدمجة في تطبيق سطح مكتب واحد أو مستضاف ذاتياً.** يتسع حتى ~100,000 مستند (مزيج من PDFs ومقتطفات ويب وتصديرات) وهو الخيار الصحيح عندما تصل معرفتك أساساً كمستندات بدلاً من ملاحظات.',
        items: [
          '**التخزين:** قاعدة بيانات AnythingLLM الداخلية (SQLite افتراضياً؛ Postgres للمتعدد المستضاف ذاتياً). تُستوعب المستندات عبر الواجهة؛ يمكن أن تبقى الأصول أيضاً في مجلد تُزامنه.',
          '**الالتقاط:** رفع داخل التطبيق (اسحب PDFs / ملفات إلى مساحة عمل)، وإضافة متصفح لصفحات الويب، وAPI عامة للاستيعاب البرمجي (`POST /api/v1/document/upload`)، وإعادة توجيه البريد الإلكتروني عبر التكامل الرسمي أو وسيط مخصص.',
          '**التضمينات:** يستخدم AnythingLLM مزوّد التضمينات الذي تهيئه — اختر "Ollama" ← نقطة نهاية `http://localhost:11434` ← نموذج `nomic-embed-text`. التضمينات مخزونة في مخزن المتجهات المدمج (LanceDB افتراضياً؛ ChromaDB / Pinecone اختياريان).',
          '**الاسترداد:** RAG على مساحة العمل. حجم قطعة قابل للتهيئة واسترداد top-k وإعادة ترتيب اختيارية. مساحات عمل متعددة تتيح التقسيم حسب الموضوع (مثل "عمل" و"قراءات" و"مشاريع").',
          '**الواجهة:** واجهة ويب AnythingLLM (تعمل على متصفحات سطح المكتب والجوال)، وAPI عامة للواجهات الأمامية المخصصة، ونقطة نهاية متوافقة مع OpenAI لربط أدوات أخرى بـ PKB.',
          '**وقت الإعداد:** ~15 دقيقة (تثبيت AnythingLLM Desktop أو Docker، والإشارة إلى Ollama، وسحب المستندات).',
          '**الأجهزة:** الحد الأدنى 16 جيجابايت ذاكرة عشوائية. 32 جيجابايت موصى من 10,000 مستند. AnythingLLM أكثر كفاءة في الذاكرة من Obsidian + الإضافات مع نفس عدد العناصر لأنه عملية واحدة بدلاً من اثنتين.',
          '**حد العناصر:** ~100,000 مستند في مساحة عمل واحدة؛ قسّم في مساحات عمل متعددة من 50K للحفاظ على زمن استجابة الاسترداد دون ~ثانية واحدة.',
          '**مثالية لـ:** المستخدمون بأرشيفات غنية بـ PDFs والتقاط موجّه لمقتطفات الويب وتفضيل التطبيق على مجموعة الإضافات. كذلك الخيار الصحيح للفرق الصغيرة التي تستضيف ذاتياً PKB مشتركة.',
          '**ليست لـ:** المستخدمون الراغبون في سطح كتابة موجّه للملاحظات (Obsidian)؛ المستخدمون الراغبون في امتلاك تخزينهم بصيغة Markdown عادية (مخزن المتجهات في AnythingLLM داخلي).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'للإعداد خطوة بخطوة لطبقة RAG المستخدمة هنا (Ollama + AnythingLLM والاستيعاب وضبط التقسيم)، راجع البرنامج التعليمي [RAG المحلي على PDFs في 30 دقيقة](/ar/power-local-llm/local-rag-on-your-pdfs-step-by-step). لتوسيع RAG خارج أمثلة الألعاب إلى أكثر من 1,000 PDF، راجع [تحادث مع أكثر من 1000 PDF محلياً](/ar/power-local-llm/chat-with-1000-pdfs-locally).',
          },
        ],
      },
      architectureCustom: {
        id: 'architecture-custom',
        title: 'البنية C: Python + ChromaDB المخصصة',
        content:
          '**حزمة Python + ChromaDB + Ollama المخصصة هي الخيار الصحيح فقط إذا كان لديك فعلاً أكثر من 100,000 عنصر أو احتياجات متعددة المستخدمين أو متطلبات مخطط محددة لا تستطيع الأدوات القياسية نمذجتها.** تكلفة الصيانة حقيقية: التقسيم وإزالة التكرار وإعادة الترتيب والمزامنة والنسخ الاحتياطي — أنت تُدير كل ذلك.',
        items: [
          '**التخزين:** نظام ملفات (مجلد لكل مصدر: `notes/` و`pdfs/` و`web/` و`email/`) + بيان بيانات وصفية (SQLite أو JSONL). تبقى ملفات المصدر بتنسيقات مفتوحة لتمكين تبديل طبقات الاسترداد دون إعادة الاستيعاب.',
          '**الالتقاط:** سكريبتات مُفعَّلة بـ webhooks (قاصّ ويب ← نقطة نهاية HTTP ← كتابة ملف)، وإعادة توجيه البريد الإلكتروني ← poller IMAP ← كتابة ملف، وورقة مشاركة الجوال ← نقطة نهاية Tailscale ← كتابة ملف. كل مسار التقاط هو خدمة Python صغيرة.',
          '**التضمينات:** ChromaDB (وضع محلي، يحفظ على القرص) + تضمينات Ollama عبر نقطة النهاية المتوافقة مع OpenAI. إعادة التضمين عند تغيير الملف عبر عملية watchdog. يتسع ChromaDB لملايين المتجهات على جهاز واحد بفهرسة HNSW.',
          '**الاسترداد:** تشابه top-k من ChromaDB + مُعيد ترتيب (BGE Re-ranker أو ما يعادله محلياً من Cohere) + فلاتر البيانات الوصفية (نطاق تاريخ، وتصنيفات، ومصدر). بحث هجين اختياري مع BM25 على القطع لمطابقة المصطلحات الدقيقة.',
          '**الواجهة:** أي مما يلي: خدمة FastAPI صغيرة تكشف نقطة نهاية `/v1/chat/completions` متوافقة مع OpenAI، أو واجهة Streamlit / Gradio، أو CLI، أو الثلاثة. ضع Open WebUI في المقدمة لتجربة دردشة مصقولة دون كتابة كود واجهة.',
          '**وقت الإعداد:** ~يوم واحد لنسخة أولى وظيفية؛ ~أسبوعان من التكرار لضبط التقسيم وجودة الاسترداد وخطوط أنابيب الالتقاط لبياناتك.',
          '**الأجهزة:** حاسوب محمول بـ 32 جيجابايت ذاكرة عشوائية للتطوير؛ خادم منزلي بـ 64 جيجابايت ذاكرة عشوائية من 100,000+ عنصر حتى لا تتنافس خدمة التضمينات مع حاسوبك المحمول. فكّر في GPU مخصصة (RTX 4060 أو أفضل) من 500K عنصر لأداء الدردشة.',
          '**حد العناصر:** أكثر من 1M عنصر عملياً مع HNSW + sharding؛ عنق الزجاجة ينتقل من الاسترداد إلى موثوقية خط أنابيب الالتقاط وتكلفة إعادة التضمين عند تغييرات المخطط.',
          '**مثالية لـ:** المهندسون الراغبون في امتلاك الحزمة والفرق ذات المخطط المخصص (مثل "كل عنصر له درجة ثقة ومصدر ومؤلف") أو المستخدمون الذين يصطدمون بالحدود الصارمة في Obsidian أو AnythingLLM (50K و100K على التوالي).',
          '**ليست لـ:** غير المهندسين؛ أي شخص يُقلل من تكلفة الصيانة؛ المستخدمون الذين يغطي خيار قياسي بالفعل حالة الاستخدام.',
        ],
        promptExamples: [
          {
            label: 'الاستيعاب مع ChromaDB (هيكل Python)',
            text: 'import chromadb, ollama, pathlib\nclient = chromadb.PersistentClient(path="./chroma")\ncoll = client.get_or_create_collection("kb")\nfor p in pathlib.Path("vault").rglob("*.md"):\n    text = p.read_text()\n    emb = ollama.embeddings(model="nomic-embed-text", prompt=text)["embedding"]\n    coll.upsert(ids=[str(p)], embeddings=[emb], documents=[text], metadatas=[{"source": str(p)}])',
          },
          {
            label: 'الاستعلام مع إعادة الترتيب (هيكل)',
            text: 'q = "What did I write about local RAG sync?"\nq_emb = ollama.embeddings(model="nomic-embed-text", prompt=q)["embedding"]\nhits = coll.query(query_embeddings=[q_emb], n_results=20)\n# pass hits["documents"] through a re-ranker, keep top 5\n# send top 5 + question to Llama 3.2 3B via Ollama chat endpoint',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'نمط الفشل الأكثر شيوعاً في البناءات المخصصة: إعادة تضمين الأرشيف بأكمله عند كل تغيير كود لأن المخطط غير مستقر. ثبّت نموذج التضمين + حجم القطعة قبل استيعاب أكثر من ~5,000 عنصر. ترحيل nomic-embed-text ببُعد 768 إلى mxbai-embed-large ببُعد 1024 على 100K عنصر يستغرق ساعات حوسبة ويكسر مجموعة ChromaDB — لا يمكن خلط الأبعاد.',
          },
        ],
      },
      capture: {
        id: 'capture',
        title: 'خط أنابيب الالتقاط: ويب وبريد وجوال وصوت',
        content:
          '**طبقة الالتقاط تحدد ما إذا كانت PKB تصمد أمام الاستخدام اليومي. تصل معظم المعرفة خارج سطح المكتب — على الجوال، وفي البريد الإلكتروني، وفي الملاحظات الصوتية — وخط أنابيب الالتقاط الذي يتطلب فتح تطبيق سطح مكتب أولاً هو خط أنابيب يُتجنّب.** ابنِ للتدفقات الأربعة الرئيسية واقبل أن 80% من العناصر ستصل عبر الجوال.',
        items: [
          '**قاصّ الويب (سطح مكتب + جوال):** Obsidian Web Clipper، أو إضافة متصفح AnythingLLM، أو bookmarklet مخصص يُرسل الصفحة الحالية إلى نقطة نهاية التقاطك. ورقة مشاركة الجوال ← إضافة قاصّ الويب ← vault.',
          '**إعادة توجيه البريد الإلكتروني:** عنوان مخصص (مثل `kb@نطاقك.com`) + poller IMAP ← كتابة ملف. أعد توجيه الرسائل التي تريد الاحتفاظ بها؛ poller يتعامل مع الاستيعاب. استخدم بادئة حسب المصدر في اسم الملف حتى يتمكن الاسترداد من التصفية حسب المصدر.',
          '**ورقة مشاركة الجوال:** مسار الالتقاط الأكثر استخداماً. مشاركة iOS ← Obsidian (يكتب ملف Markdown)، أو مشاركة iOS ← Working Copy (commit إلى Git)، أو مشاركة iOS ← Shortcut مخصص (POST إلى API التقاطك). Android: HTTP Shortcuts أو Tasker.',
          '**الملاحظات الصوتية:** التقاط بأسلوب AudioPen أصبح أكثر شيوعاً في 2026. سجّل على الهاتف ← حوّل نصياً محلياً مع Whisper.cpp أو عبر خدمة Whisper مستضافة ذاتياً ← اكتب النص كملف Markdown ← ضمّن.',
          '**اللصق اليدوي:** الاحتياطي. يعمل دائماً، لا يتسع أبداً. استخدمه للذيل الطويل.',
          '**OCR لصور الشاشة:** صور الشاشة هي تنسيق التقاط بخسارة. استخدم Apple Live Text على iOS أو خط أنابيب OCR محلي (Tesseract، وApple Vision، وEasyOCR) لاستخراج النص + كتابة ملف Markdown مع الصورة والنص المستخرج.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'دقّق في عادات الالتقاط الحالية قبل تصميم خط الأنابيب. انظر ما تحفظه بالفعل: إشارات المتصفح المرجعية وصور الشاشة والرسائل المُعادة التوجيه والملاحظات الصوتية. يجب أن تعكس طبقة الالتقاط في PKB تلك التدفقات الحالية — إذا كنت تأخذ صور الشاشة باستمرار، ابنِ مسار OCR؛ إذا كنت تُعيد توجيه الرسائل لنفسك، ابنِ إعادة التوجيه. إضافة عادات جديدة ("الآن سأنسخ وألصق يدوياً كل مقال في KB") لا تنجح أبداً.',
          },
        ],
      },
      mobileCapture: {
        id: 'mobile-capture',
        title: 'التقاط الجوال: iOS Shortcuts وWorking Copy وa-Shell',
        content:
          '**لدى iOS ثلاثة مسارات التقاط قابلة للتطبيق نحو PKB بالذكاء الاصطناعي المحلي في 2026: Shortcuts ← Obsidian، أو Shortcuts ← Working Copy (Git)، أو Shortcuts ← a-Shell (قائم على السكريبت).** كل منها يتزاوج بشكل طبيعي مع إحدى البنى المرجعية الثلاث. اختر المسار الذي يتطابق نموذج مزامنته مع بنيتك العامة.',
        items: [
          '**Shortcuts ← Obsidian (محورية Obsidian):** Shortcut Obsidian "Add to note" يكتب المحتوى الملتقَط مباشرةً في vault. مزامنة عبر Obsidian Sync (مدفوع، موصى) أو iCloud Drive (مجاني، مع تحفظات). مثالي لسير العمل الموجّه للملاحظات.',
          '**Shortcuts ← Working Copy (Git):** يُكتب المحتوى الملتقَط في مستودع Working Copy على iPhone، ثم يُنفَّذ commit تلقائي ويُدفع. سطح المكتب يسحب. مجاني وقوي ويعمل مع أي vault بصيغة Markdown. ملاحظة: Working Copy مدفوع (دفعة واحدة ~20 دولاراً). مثالي لـ vaults المتزامنة بـ Git.',
          '**Shortcuts ← a-Shell:** a-Shell طرفية iOS مجانية تُشغّل سكريبتات. ابنِ Shortcut يوجّه النص الملتقَط إلى سكريبت a-Shell، يكتب ملفاً ويُنفّذ commit عبر `git`، أو يزامن عبر `rsync` على Tailscale، أو يُحمّل إلى نقطة نهاية التقاطك المخصصة. مثالي للبنى المخصصة التي يبنيها المهندسون.',
          '**مكافئات Android:** Tasker + Termux + Git كمكافئ لمسار Working Copy في iOS. HTTP Shortcuts لمسار نقطة النهاية المخصصة. ورقة مشاركة Obsidian Mobile لمسار Obsidian.',
          '**ميزانية زمن الاستجابة:** يجب أن يكتمل التقاط الجوال في أقل من 5 ثوانٍ من الطرف إلى الطرف (ورقة مشاركة ← ملف مكتوب / commit / مُحمَّل). كل ما هو أبطأ والمستخدم يفتح التطبيق مرة ولا يعود.',
          '**الالتقاط دون اتصال:** المسارات الثلاثة في iOS تُقيّد دون اتصال (Shortcuts تُقيّد، وWorking Copy تُقيّد commits، وسكريبتات a-Shell تكتب محلياً وتزامن لاحقاً). ضروري للالتقاط أثناء الرحلات الجوية والمواصلات العامة والمناطق الريفية.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تبنِ مسار التقاط جوال يتطلب أن يكون سطح المكتب متصلاً بالإنترنت (مثل POST إلى نقطة نهاية محمية بـ Tailscale يمكن الوصول إليها فقط عندما يكون حاسوبك المحمول مستيقظاً). ستفقد التقاطات أثناء اجتماعات العمل وأثناء وضع سكون الحاسوب وفي الليل. شغّل نقطة نهاية الالتقاط على خادم منزلي / NAS دائم التشغيل، أو اكتب في مخزن eventually-consistent (Obsidian Sync، وGit، وiCloud) يُنشئ مخزناً احتياطياً دون اتصال.',
          },
        ],
      },
      scaling: {
        id: 'scaling',
        title: 'التوسع: 1K و10K و100K عنصر',
        content:
          '**للتوسع في PKB بالذكاء الاصطناعي المحلي ثلاثة أنظمة: دون 1,000 عنصر كل شيء سريع على أي حاسوب محمول حديث؛ بين 1,000 و10,000 عنصر يصبح فهرس التضمينات أثراً حقيقياً يجب إدارته؛ وفوق 10,000 عنصر تصبح الأجهزة عنق الزجاجة وتسود موثوقية خط أنابيب الالتقاط.** الأرقام الواقعية التالية تفترض Mac M3 Pro / PC RTX 4060 مع nomic-embed-text وLlama 3.2 3B.',
        columns: ['عدد العناصر', 'البنية الموصى بها', 'وقت التضمين الأولي', 'الأجهزة', 'ملاحظات'],
        rows: [
          { 'عدد العناصر': '1,000 عنصر', 'البنية الموصى بها': 'أي من الثلاث', 'وقت التضمين الأولي': '~دقيقتان', 'الأجهزة': 'حاسوب محمول بـ 16 جيجابايت ذاكرة عشوائية', 'ملاحظات': 'كل شيء يبدو فورياً. اختيار البنية هو بحت الملاءمة لسير العمل.' },
          { 'عدد العناصر': '10,000 عنصر', 'البنية الموصى بها': 'Obsidian أو AnythingLLM', 'وقت التضمين الأولي': '~25 دقيقة', 'الأجهزة': 'حاسوب محمول بـ 16 جيجابايت ذاكرة عشوائية (32 جيجابايت موصى)', 'ملاحظات': 'فهرس التضمينات ~150-250 ميجابايت. وقت إعادة التضمين عند التعديلات دون ثانية. النقطة المثلى لمعظم العاملين في مجال المعرفة.' },
          { 'عدد العناصر': '50,000 عنصر', 'البنية الموصى بها': 'AnythingLLM أو Python المخصصة', 'وقت التضمين الأولي': '~3 ساعات', 'الأجهزة': 'حاسوب محمول بـ 32 جيجابايت ذاكرة عشوائية أو خادم منزلي', 'ملاحظات': 'الفهرس الأولي يعمل ليلاً. خطّط لـ sub-vaults / مساحات عمل من هذه النقطة. استخدام القرص ~1.5-2 جيجابايت للتضمينات.' },
          { 'عدد العناصر': '100,000 عنصر', 'البنية الموصى بها': 'AnythingLLM (متعدد مساحات العمل) أو Python المخصصة', 'وقت التضمين الأولي': '6-8 ساعات', 'الأجهزة': 'الحد الأدنى 32 جيجابايت ذاكرة عشوائية؛ خادم منزلي مفضّل', 'ملاحظات': 'انقل التضمينات إلى خادم منزلي مخصص. موثوقية خط أنابيب الالتقاط هي الآن وضع الفشل الرئيسي، لا الاسترداد.' },
          { 'عدد العناصر': 'أكثر من 500,000 عنصر', 'البنية الموصى بها': 'Python + ChromaDB المخصصة', 'وقت التضمين الأولي': 'أكثر من 24 ساعة', 'الأجهزة': 'خادم منزلي بـ 64 جيجابايت ذاكرة عشوائية + GPU مخصصة', 'ملاحظات': 'التشظية وإزالة التكرار وخطوط أنابيب إعادة التضمين التدريجية تصبح ضرورية. الأدوات القياسية لم تعد ملائمة.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'تكلفة التضمين الأولي هي فاتورة لمرة واحدة. بعد الفهرس الأول، تُعاد التضمينات فقط للعناصر المتغيرة — عادةً أقل من ثانية لكل حفظ حتى مع 100K عنصر. بطء المرة الأولى حقيقي لكن غير متكرر. شغّل الفهرس الأولي ليلاً على جهاز موصول وانسَه.',
          },
        ],
      },
      backupSync: {
        id: 'backup-sync',
        title: 'النسخ الاحتياطي والإصدارات والمزامنة متعددة الأجهزة',
        content:
          '**تحتاج PKB بالذكاء الاصطناعي المحلي إلى ثلاث طبقات نسخ احتياطي: لقطات vault (Time Machine وBackblaze وrestic)، وسجل Git للمحتوى بنص عادي، وتصدير ربع سنوي للتضمينات والبيانات الوصفية لإعادة بناء نظيفة.** التضمينات قابلة للتجديد تقنياً، لكن على 100K+ عنصر يستغرق التجديد ساعات — انسخها احتياطياً أيضاً.',
        items: [
          '**لقطات vault (مستوى نظام الملفات):** Time Machine (macOS) أو restic (Linux) كل 24 ساعة. Backblaze أو rsync.net للتخزين الخارجي. يلتقط كل شيء بما في ذلك التضمينات.',
          '**سجل Git (المحتوى فقط):** ملفات Markdown بنص عادي مع commit إلى مستودع Git (محلي + GitHub / Gitea خاص). أضف `.smart-env/` و`vector_store/` وأي مجلد فهرس ثنائي آخر إلى `.gitignore`. Git يمنحك سجل إصدارات لكل ملاحظة؛ لقطات vault تمنحك rollback لكامل النظام.',
          '**تصدير التضمينات (ربع سنوي):** صدّر مخزن المتجهات إلى تنسيق محمول (ChromaDB ← parquet، وSmart Connections ← JSON dump، وAnythingLLM ← تصدير مدمج). احفظ آخر تصديرين في تخزين خارجي. إذا فشلت لقطة vault أو تلف فهرس التضمينات، هذا مسار إعادة البناء السريع.',
          '**مزامنة متعددة الأجهزة — محورية Obsidian:** Obsidian Sync يتعامل مع النص العادي + فهارس التضمينات الثنائية بنظافة (تشفير من الطرف إلى الطرف). iCloud Drive يعمل للنص العادي لكن يُفسد الفهارس الثنائية بين المنصات. Git عبر Working Copy / Termux يعمل للنص العادي فقط — إعادة فهرسة لكل جهاز.',
          '**مزامنة متعددة الأجهزة — محورية AnythingLLM:** شغّل AnythingLLM كحاوية Docker مستضافة ذاتياً على خادم منزلي. جميع الأجهزة تتصل بالمثيل نفسه عبر LAN أو Tailscale. لا مزامنة من جانب العميل مطلوبة.',
          '**مزامنة متعددة الأجهزة — Python المخصصة:** البنية التي تبنيها تحدد ذلك. معظم البناءات تستخدم خدمة API مركزية (FastAPI على خادم منزلي) + عملاء يُرسلون POST للالتقاطات ويطلبون GET للاستعلامات. Tailscale يوفر طبقة الشبكة.',
          '**الترحيل إلى حاسوب جديد:** استعد لقطة vault ← استعد مستودع Git ← أعد تشغيل Ollama ← أعد تشغيل مُفهرس التضمينات. مع Obsidian Sync أو AnythingLLM المستضاف ذاتياً، الترحيل هو "ثبّت العميل وسجّل الدخول" — لا استعادة يدوية مطلوبة. بدون ذلك، احسب ~30 دقيقة لـ vault بـ 10K عنصر و~ساعتين لـ 50K وطوال الليل لأكثر من 100K إذا أهملت خطوة تصدير التضمينات.',
          '**المشاركة الانتقائية:** لمشاركة أجزاء من vault (مثل مشروع بحث مع متعاون)، استخدم sub-vaults أو سكريبت تصدير حسب التصنيفات. لا تشارك vault كاملة — تتراكم في معظم الـ PKBs بالذكاء الاصطناعي المحلي عناصر حساسة (طبية ومالية وشخصية) يجب ألا تغادر الحزمة المحلية أبداً.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'اختبر استعادتك مرة كل ربع سنة. معظم ادعاءات "لديّ نسخ احتياطية" تطلعية — الاختبار هو "هل يمكنني استعادة vault على حاسوب محمول جديد في أقل من ساعتين؟" نفّذ هذا الاختبار. في المرة الأولى ستكتشف أن إحدى الطبقات الثلاث (لقطة، وGit، وتصدير التضمينات) كانت مُهيّأة بشكل خاطئ منذ ستة أشهر.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          '**تصميم طبقة الاسترداد قبل طبقة الالتقاط.** بحث هجين مخصص مع إعادة الترتيب مُهدَر على vault بـ 47 عنصراً. ابنِ الالتقاط أولاً واقبل الاسترداد البسيط top-5، وحسّن الاسترداد فقط عندما يتجاوز vault 1,000 عنصر وتستطيع قياس جودة الاسترداد على استعلامات فعلية.',
          '**خلط البنى.** "Obsidian للملاحظات + AnythingLLM للـ PDFs + Python المخصصة للرسائل" يبدو واضحاً لكن تكلفة التكامل تسود. اختر بنية واحدة واقبل قيودها، وأضف كحد أقصى موصّلاً واحداً إذا كان ضرورياً مطلقاً (مثل AnythingLLM يستوعب مجلداً من vault Obsidian في وضع القراءة فقط).',
          '**تبديل نماذج التضمين دون إعادة تضمين الأرشيف.** خلط متجهات nomic-embed-text ببُعد 768 ومxbai-embed-large ببُعد 1024 في المخزن نفسه يكسر الاسترداد بصمت. اختر نموذج تضمين + بُعداً وثبّته، وغيّره فقط مع إعادة تضمين كاملة للأرشيف.',
          '**إهمال النسخ الاحتياطي لفهرس التضمينات من 10,000 عنصر.** "يمكنني إعادة توليده" صحيح لكن التوليد يستغرق ساعات. أضف مخزن التضمينات إلى استراتيجية النسخ الاحتياطي من 10K عنصر.',
          '**التصميم للحاسوب المكتبي فقط بينما 80% من الالتقاط يحدث على الجوال.** PKB بدون مسار التقاط للجوال تتراكم الغبار. اختبر تدفق التقاط الجوال في اليوم الأول — ورقة المشاركة إلى vault يجب أن تكتمل في أقل من 5 ثوانٍ.',
          '**الاعتماد على iCloud Drive لفهارس التضمينات الثنائية.** iCloud يتعامل مع النص العادي بشكل جيد؛ الفهارس الثنائية (Smart Connections `.smart-env/`، ومخزن المتجهات في AnythingLLM) تتلف بين المنصات. استخدم Obsidian Sync أو مثيلاً مستضافاً ذاتياً أو اقبل إعادة الفهرسة لكل جهاز.',
          '**عدم التقسيم عند 100K عنصر.** مساحة عمل / vault واحدة من 100K عنصر لديها زمن استجابة استرداد بعدة ثوانٍ. قسّم حسب الموضوع (عمل وقراءات ومشاريع) في مساحات عمل أو sub-vaults متعددة؛ استعلم كل واحدة بشكل منفصل أو عبر موجّه.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'Obsidian — [obsidian.md](https://obsidian.md) و[help.obsidian.md](https://help.obsidian.md) (بنية vault، ومعمارية المزامنة للجوال، وتوثيق الإضافات).',
          'AnythingLLM — [github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) (تطبيق RAG مستضاف ذاتياً مفتوح المصدر).',
          'أداة Ollama — [ollama.com](https://ollama.com) و[github.com/ollama/ollama](https://github.com/ollama/ollama) (وقت تشغيل LLM المحلي؛ نقاط نهاية الدردشة + التضمين).',
          'ChromaDB — [trychroma.com](https://www.trychroma.com) و[github.com/chroma-core/chroma](https://github.com/chroma-core/chroma) (قاعدة بيانات متجهية محلية مفتوحة المصدر).',
          'Working Copy — [workingcopy.app](https://workingcopy.app) (عميل Git لـ iOS لخطوط أنابيب التقاط الجوال).',
          'a-Shell — [holzschu.github.io/a-Shell_iOS/](https://holzschu.github.io/a-Shell_iOS/) (طرفية iOS مجانية للالتقاط القائم على السكريبت في الجوال).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'كيف أتقاطع صفحات الويب في قاعدة معرفتي؟',
            a: 'ثلاثة خيارات مرتبة حسب الاحتكاك. (1) قاصّ ويب كإضافة متصفح — Obsidian Web Clipper أو إضافة AnythingLLM يكتب الصفحة الحالية مباشرةً في vault / مساحة العمل. (2) ورقة مشاركة الجوال — مشاركة في Safari / Chrome ← Obsidian (يكتب ملف Markdown) أو ← Working Copy (commit إلى Git) أو ← Shortcut مخصص (يُرسل POST للـ URL الحالي + الاختيار إلى نقطة نهاية التقاطك). (3) Bookmarklet — للمتصفحات بدون إضافة؛ يُرسل POST للـ URL الحالي + الاختيار إلى نقطة نهاية التقاطك. ورقة مشاركة الجوال هي المسار الأكثر استخداماً عملياً — صمّمها أولاً.',
          },
          {
            q: 'هل يمكنني إعادة توجيه الرسائل الإلكترونية إلى النظام؟',
            a: 'نعم. هيّئ عنواناً مخصصاً (مثل alias Fastmail / Migadu `kb@نطاقك.com`) وشغّل poller IMAP على خادمك المنزلي أو حاسوبك المحمول يُنزّل البريد الجديد ويكتب ملف Markdown لكل رسالة في vault. أضف بادئة عنوان المرسل في اسم الملف حتى يتمكن الاسترداد من التصفية حسب المرسل. AnythingLLM لديه تكامل بريد إلكتروني خاص؛ مستخدمو Obsidian يبنون عادةً poller IMAP بأنفسهم أو يستخدمون بدائل IFTTT / Zapier مثل n8n.',
          },
          {
            q: 'كيف أزامن بين سطح المكتب والجوال؟',
            a: 'يعتمد على البنية. محورية Obsidian: Obsidian Sync (مدفوع، يتعامل مع الفهارس الثنائية بنظافة)، أو iCloud Drive (مجاني، النص العادي فقط — إعادة فهرسة لكل جهاز)، أو Git عبر Working Copy (مجاني + دفعة واحدة لـ Working Copy، النص العادي فقط — إعادة فهرسة لكل جهاز). محورية AnythingLLM: شغّل AnythingLLM في Docker على خادم منزلي، جميع الأجهزة تتصل عبر LAN أو Tailscale — لا مزامنة من جانب العميل مطلوبة. Python المخصصة: ابنِ خدمة API مركزية على خادم منزلي؛ العملاء يُرسلون POST للالتقاطات ويطلبون GET للاستعلامات.',
          },
          {
            q: 'هل يجب استخدام vault كبير أم تقسيمه حسب الموضوع؟',
            a: 'vault واحد حتى ~50,000 عنصر. من 50K، قسّم حسب الموضوع (عمل وقراءات ومشاريع وشخصي) لسببين: يبقى زمن استجابة الاسترداد دون ~ثانية واحدة، والتسرب غير المقصود بين السياقات (مثل الملاحظات الشخصية التي تظهر في استعلامات العمل) يصبح ممكناً على نطاق واسع. التقسيم قبل 50K مبكر — تخسر الاتصالات العرضية عبر السياقات التي هي قيمة رئيسية لـ PKB.',
          },
          {
            q: 'بأي تكرار يجب إعادة التضمين لتحسين الدقة؟',
            a: 'لا تُعد التضمينات مطلقاً بسبب "انجراف الدقة" — التضمينات لا تتدهور. أعد التضمين فقط عند تغيير نموذج التضمين (مثل الترقية من nomic-embed-text إلى mxbai-embed-large لاسترداد أفضل للمحتوى التقني). البنى الثلاث تتعامل تلقائياً مع إعادة التضمين التدريجي عند تغيير الملف؛ لا تُجدولها. الاستثناء هو حزم Python المخصصة حيث تتحكم في المُفهرس — هناك، إعادة التضمين التدريجي المتحكم بـ watchdog عند الحفظ هو المعيار.',
          },
          {
            q: 'هل يمكنني استخدام التحكم في الإصدارات على قاعدة معرفتي؟',
            a: 'نعم للمحتوى بنص عادي (vault Markdown ← مستودع Git، محلي + GitHub / Gitea خاص). أضف مجلدات الفهرس الثنائي (`.smart-env/` و`vector_store/` ودليل استمرارية ChromaDB) إلى `.gitignore` — تُضخّم السجل وتُسبّب تعارضات دمج. Git يمنحك سجل إصدارات لكل ملاحظة؛ لقطات vault (Time Machine وrestic) تمنح rollback لكامل النظام. كلا الطبقتين، لا إحداهما.',
          },
          {
            q: 'كيف أتعامل مع الـ PDFs في هذا النظام؟',
            a: 'محورية Obsidian: خزّن الـ PDFs جانباً لملاحظات Markdown؛ Smart Connections لا يُضمّن محتوى PDF مباشرةً — استخرج النص أولاً (مثل عبر إضافة PDF++ أو سكريبت معالجة مسبقة يكتب ملخصاً Markdown جانباً لكل PDF). محورية AnythingLLM: اسحب الـ PDFs مباشرةً إلى مساحة عمل؛ AnythingLLM يتعامل تلقائياً مع تحليل وتقسيم PDF. Python المخصصة: استخدم `pypdf` أو `pdfplumber` لاستخراج النص في خط أنابيب الاستيعاب، ثم ضمّن النص المستخرج. AnythingLLM هو الخيار الأقل احتكاكاً للأرشيفات الغنية بـ PDFs.',
          },
          {
            q: 'هل يمكنني مشاركة أجزاء من KB الخاصة بي بشكل انتقائي؟',
            a: 'نعم، لكن صمّم ذلك من اليوم الأول. استخدم sub-vaults (Obsidian) أو مساحات عمل (AnythingLLM) للحفاظ على المحتوى "القابل للمشاركة" و"الخاص" في مخازن منفصلة. للمشاركة لمرة واحدة، ابنِ سكريبت تصدير حسب التصنيفات يستخرج العناصر حسب التصنيف (مثل `#shareable`) في حزمة Markdown محمولة. لا تشارك vault كاملة — تتراكم في معظم الـ PKBs بالذكاء الاصطناعي المحلي عناصر حساسة (طبية ومالية ومراسلات شخصية) يجب ألا تغادر الحزمة المحلية أبداً.',
          },
          {
            q: 'ما أفضل استراتيجية نسخ احتياطي؟',
            a: 'ثلاث طبقات: (1) لقطة نظام الملفات كل 24 ساعة (Time Machine / restic) مع نسخة في تخزين خارجي (Backblaze / rsync.net)؛ (2) سجل Git للمحتوى بنص عادي لاسترداد الإصدارات لكل ملاحظة؛ (3) تصدير ربع سنوي للتضمينات + البيانات الوصفية كمسار إعادة بناء سريع. اختبر الاستعادة مرة كل ربع سنة — "هل يمكنني إعادة بناء vault على حاسوب جديد في أقل من ساعتين؟" أول اختبار استعادة يكشف عادةً أن إحدى الطبقات الثلاث كانت مُهيّأة بشكل خاطئ.',
          },
          {
            q: 'كيف أنتقل إلى حاسوب جديد؟',
            a: 'استعد لقطة vault ← ثبّت Ollama ونزّل النماذج ذاتها ← ثبّت Obsidian / AnythingLLM / حزمة Python المخصصة ← أعد تشغيل مُفهرس التضمينات. مع Obsidian Sync أو AnythingLLM المستضاف ذاتياً، الترحيل هو "ثبّت العميل وسجّل الدخول" — لا استعادة يدوية مطلوبة. بدون ذلك، احسب ~30 دقيقة لـ vault بـ 10K عنصر و~ساعتين لـ 50K وطوال الليل لأكثر من 100K إذا أهملت خطوة تصدير التضمينات.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[Obsidian + LLM محلي: 5 إضافات تحوّل vault إلى عقل ثانٍ (2026)](/ar/power-local-llm/local-llm-with-obsidian-2026) — تحليل معمّق لطبقة الإضافات في البنية A.',
          '[LLM محلي مع Logseq وJoplin](/ar/power-local-llm/local-llm-with-logseq-and-joplin) — طبقات تخزين بديلة لـ PKB إذا لم يكن Obsidian خيارك المفضّل.',
          '[تحادث مع أكثر من 1000 PDF محلياً: توسيع RAG فوق الأمثلة التجريبية](/ar/power-local-llm/chat-with-1000-pdfs-locally) — توسيع طبقة RAG فوق 1,000 عنصر، قابل للتطبيق على البنى الثلاث.',
          '[RAG محلي على PDFs في 30 دقيقة (Ollama + AnythingLLM)](/ar/power-local-llm/local-rag-on-your-pdfs-step-by-step) — برنامج تعليمي لتطبيق RAG لطبقة الاسترداد المستخدمة في البنية B.',
          '[أفضل نماذج التضمين لـ RAG المحلي (2026)](/ar/power-local-llm/best-embedding-models-local-rag-2026) — اختيار نموذج التضمين (nomic-embed-text مقابل mxbai-embed-large مقابل bge-m3) لكل من البنى الثلاث.',
          '[RAG موضّح](/ar/prompt-engineering/rag-explained) — مرجع مفاهيمي لطبقة الاسترداد.',
          '[دليل أجهزة LLM المحلي 2026](/ar/local-llms/local-llm-hardware-guide-2026) — تحجيم الأجهزة للحد الأدنى 16 جيجابايت و32 جيجابايت موصى من 10K عنصر وخادم منزلي من 100K.',
          '[دليل برامج LLM المحلية 2026](/ar/power-local-llm/local-llm-software-directory-2026) — قوائم الدليل لـ Ollama وChromaDB وAnythingLLM وObsidian وغيرها من مكونات الحزمة.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'بناء قاعدة معرفة شخصية بالذكاء الاصطناعي المحلي: دليل الحزمة 2026',
      description: 'قاعدة معرفة شخصية بالذكاء الاصطناعي المحلي 2026: 3 بنى مقارنة (Obsidian وAnythingLLM وPython + ChromaDB). تتسع لأكثر من 100,000 عنصر. الالتقاط وRAG والمزامنة والنسخ الاحتياطي.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/local-llm-personal-knowledge-base-2026',
      inLanguage: 'ar',
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: '로컬 AI로 개인 지식 베이스 구축하기: 2026 스택 가이드',
    seoTitle: '로컬 AI 개인 지식 베이스: 2026 스택 가이드',
    intro:
      '2026년에 로컬 AI 기반으로 구축한 개인 지식 베이스(PKB)는 다섯 가지 레이어로 구성됩니다: 캡처(웹 클리퍼, 이메일 전달, 모바일 공유 시트), 저장(Markdown vault 또는 문서 폴더), 임베딩(Ollama를 통한 로컬 모델), 검색(RAG), 인터페이스(채팅 또는 시맨틱 검색). 세 가지 아키텍처가 실제 사례의 약 95%를 커버합니다 — Obsidian 중심(노트 중심, 약 50,000개 항목까지 확장), AnythingLLM 중심(문서 중심, 약 100,000개 항목까지 확장), Python + ChromaDB 커스텀 스택(엔지니어 중심, 100만 개 이상 항목 확장). 하드웨어 최소 사양은 16 GB RAM 노트북이며, 10,000개 항목을 초과하면 32 GB를 계획하십시오. 가장 중요한 확장 결정은 LLM이 아니라 지식의 대부분이 도착하는 모바일에서 캡처 파이프라인이 일상적인 사용을 견딜 수 있는지 여부입니다.',
    metaDescription:
      '로컬 AI 개인 지식 베이스 2026: Obsidian, AnythingLLM, Python + ChromaDB 비교. 100,000개 이상 항목으로 확장. 캡처, RAG, 백업.',
    twitterDescription:
      '2026년 로컬 AI PKB 세 가지 아키텍처: Obsidian(~50K 항목), AnythingLLM(~100K), Python + ChromaDB(1M+). 캡처, RAG, 모바일 동기화, 백업, 확장.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Qwen3 7B',
      'nomic-embed-text',
      'mxbai-embed-large',
      'bge-m3',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (최소 16 GB 통합 메모리, 10,000개 항목 이상에서 32 GB 권장)',
      'RTX 3060 12 GB 또는 RTX 4060 8 GB PC',
      '32 GB RAM PC (대형 vault용 CPU 전용 폴백)',
      '홈 서버 / 미니 PC 64 GB RAM (100,000개 항목 이상용 Python 커스텀 스택)',
    ],
    audience:
      '노트, 북마크, 이메일, 문서에서 AI 검색을 사용하는 개인 비공개 아카이브를 구축하는 지식 근로자, 연구자, 작가, 엔지니어 — 일반적으로 1,000~100,000개 항목 — 클라우드 서비스로 콘텐츠를 전송하지 않고.',
    readTime: '15분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 AI 개인 지식 베이스',
    targetKeywords: [
      '로컬 AI 지식 베이스',
      '로컬 LLM 세컨드 브레인',
      '개인 AI 지식 베이스',
      '로컬 RAG 지식 베이스',
      '자체 호스팅 AI 지식 베이스',
      '개인 지식 베이스 2026',
    ],
    leadAnswerBlock:
      '**2026년 로컬 AI 지식 베이스는 5개 레이어 스택(캡처, 저장, 임베딩, 검색, 인터페이스)으로 이루어지며, 처음부터 설계하는 대신 세 가지 참조 아키텍처 중 하나를 선택해야 합니다.** 매일 노트를 작성하고 vault 전체에서 시맨틱 검색을 원한다면 Obsidian + Smart Connections + Copilot for Obsidian + Ollama를 사용하십시오. 16 GB Mac M3 Pro 또는 동급 PC에서 약 50,000개 노트까지 깔끔하게 확장됩니다. 지식이 주로 문서(PDF, 내보내기, 웹 클립) 형태로 존재한다면 AnythingLLM + Ollama를 사용하십시오. 약 100,000개 문서까지 확장되고 캡처, RAG, 채팅을 하나의 앱으로 통합합니다. 항목이 100,000개를 초과하거나 다중 사용자 액세스 또는 특정 스키마 요구 사항이 있는 경우에만 Python + ChromaDB + Llama 3.2 3B 커스텀 스택을 구축하십시오 — 유지 관리 비용이 실제로 존재합니다. 세 가지 아키텍처 모두에서 진정한 병목은 캡처입니다. 지식의 대부분은 모바일에서 도착하며(웹 페이지, 스크린샷, 음성 메모, 전달된 이메일), 모바일 캡처 경로가 없는 스택은 검색 기능이 아무리 뛰어나도 먼지가 쌓입니다. 하드웨어 최소 사양: 16 GB RAM; 10,000개 항목 이상에서 32 GB 예산. 100,000개 항목 이상에서 임베딩을 홈 서버로 이동하십시오.',
    quickAnswerTop: {
      ko: {
        question: '2026년 최선의 로컬 AI 지식 베이스 아키텍처는 무엇입니까?',
        answer:
          '대부분의 사용자에게는 Obsidian + Smart Connections + Copilot for Obsidian + Ollama(채팅용 Llama 3.2 3B, 임베딩용 nomic-embed-text)가 권장됩니다. 16 GB Mac에서 약 50,000개 노트까지 확장됩니다. 문서가 많은 아카이브에는 AnythingLLM + Ollama 단일 앱(최대 약 100,000개 문서)을 사용하십시오. 엔지니어나 100,000개 이상 항목의 vault에는 캡처, 임베딩, 채팅 서비스를 분리한 Python + ChromaDB + Llama 3.2 3B 커스텀 스택을 구축하십시오. 하드웨어 최소 사양 16 GB RAM; 10,000개 항목부터 32 GB, 100,000개 이상부터 홈 서버. 캡처가 진정한 확장 병목입니다 — LLM을 최적화하기 전에 모바일 공유 시트, 웹 클리퍼, 이메일 전달을 설계하십시오.',
        bullets: [
          'Obsidian 중심 — 노트 중심 워크플로우에 최적, 약 50,000개 노트까지 확장, 최소 16 GB RAM.',
          'AnythingLLM 중심 — 문서 중심 PKB(PDF, 내보내기)에 최적, 약 100,000개 문서까지 확장, 올인원 앱.',
          'Python + ChromaDB 커스텀 스택 — 엔지니어에게 최적, 100만 개 이상 항목 확장, 자체 관리 서비스 필요.',
          '2026년 권장 채팅 모델: 16 GB 시스템용 Llama 3.2 3B, 8 GB용 Phi-4 Mini, 32 GB+ 고품질용 Qwen3 7B.',
          '권장 임베딩 모델: nomic-embed-text(768차원, 빠름) 또는 mxbai-embed-large(1024차원, 더 정확); 다국어 아카이브용 bge-m3.',
          '하드웨어 최소 사양: 16 GB RAM 노트북; 10,000개 항목 이상에서 32 GB 권장; 100,000개 이상에서 64 GB 홈 서버.',
          '캡처가 병목입니다: PKB 항목의 대부분은 모바일(웹 페이지, 스크린샷, 음성 메모)에서 캡처되고 데스크탑에서 조회됩니다. iOS Shortcuts → Obsidian, Working Copy(Git), a-Shell이 세 가지 모바일 캡처 경로입니다.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '빠른 정보', anchor: '#quick-facts' },
      { label: '어떤 아키텍처를 구축할까?', anchor: '#which-architecture' },
      { label: '아키텍처 비교표', anchor: '#comparison-table' },
      { label: '로컬 AI PKB의 다섯 가지 레이어', anchor: '#five-layers' },
      { label: '아키텍처 A: Obsidian 중심', anchor: '#architecture-obsidian' },
      { label: '아키텍처 B: AnythingLLM 중심', anchor: '#architecture-anythingllm' },
      { label: '아키텍처 C: Python + ChromaDB 커스텀', anchor: '#architecture-custom' },
      { label: '캡처 파이프라인: 웹, 이메일, 모바일, 음성', anchor: '#capture' },
      { label: '모바일 캡처: iOS Shortcuts, Working Copy, a-Shell', anchor: '#mobile-capture' },
      { label: '확장: 1K, 10K, 100K 항목', anchor: '#scaling' },
      { label: '백업, 버전 관리, 다중 기기 동기화', anchor: '#backup-sync' },
      { label: '일반적인 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 읽기', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**처음부터 설계하는 대신 세 가지 참조 아키텍처 중 하나를 선택하십시오.** Obsidian 중심(노트 중심, ~50K 항목), AnythingLLM 중심(문서 중심, ~100K 항목), Python + ChromaDB 커스텀 스택(엔지니어 중심, 100만 개 이상). 아키텍처를 혼합하는 것은 거의 가치가 없습니다 — 통합 비용이 지배합니다.',
          '**로컬 AI PKB는 다섯 가지 레이어로 구성됩니다: 캡처, 저장, 임베딩, 검색, 인터페이스.** 초보자의 실수는 대부분 LLM이 아닌 캡처 레이어에서 발생합니다. 항목이 모바일과 이메일에서 흐르지 않으면 아무리 스마트한 검색도 프로젝트를 구할 수 없습니다.',
          '**하드웨어 최소 사양: 16 GB RAM.** 그 이하에서는 임베딩 모델 또는 채팅 모델 중 하나만 실행해야 합니다 — 둘 다는 불가능합니다. 16 GB에서 Llama 3.2 3B + nomic-embed-text를 동시에 실행할 수 있습니다. 32 GB에서 Qwen3 7B로 업그레이드하거나 여러 채팅 세션을 실행할 수 있습니다. 100,000개 항목 이상에서 임베딩을 홈 서버로 이동하십시오.',
          '**2026년 권장 모델:** 채팅 — Llama 3.2 3B(기본값), Phi-4 Mini(8 GB 시스템), Qwen3 7B(32 GB+ 고품질); 임베딩 — nomic-embed-text(768차원, 빠름), mxbai-embed-large(1024차원, 더 정확), bge-m3(다국어).',
          '**캡처가 확장 병목이며 검색이 아닙니다.** 지식 항목의 대부분은 모바일(웹 클립, 스크린샷, 음성 메모, 전달된 이메일)에서 도착합니다. LLM을 조정하기 전에 모바일 공유 시트 → vault 경로를 설계하십시오. iOS Shortcuts → Obsidian / Working Copy / a-Shell이 세 가지 실행 가능한 iOS 경로입니다.',
          '**동기화 방법이 모바일에서 무엇이 작동하는지를 결정합니다.** Obsidian Sync는 임베딩 바이너리 인덱스를 깔끔하게 처리합니다; iCloud Drive는 플랫폼 간에 손상시킵니다; Git은 .gitignore 규율과 기기별 재인덱싱이 필요합니다. 플러그인보다 먼저 동기화를 선택하십시오.',
          '**백업은 선택이 아닙니다.** 세 가지 레이어: vault 스냅샷(Time Machine, Backblaze, restic), 일반 텍스트 콘텐츠의 Git 기록, 깔끔한 재구성 경로로서의 분기별 임베딩 + 메타데이터 내보내기. 임베딩은 재생성 가능하지만 비용이 많이 듭니다 — vault가 10,000개 항목을 초과하면 함께 백업하십시오.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 정보',
        items: [
          '**다루는 아키텍처:** Obsidian 중심, AnythingLLM 중심, Python + ChromaDB 커스텀 스택.',
          '**LLM 백엔드:** Ollama(권장) — `http://localhost:11434`의 로컬 엔드포인트 뒤에서 채팅 및 임베딩 모델 실행.',
          '**2026년 권장 채팅 모델:** Llama 3.2 3B(16 GB 시스템), Phi-4 Mini(8 GB), Qwen3 7B(32 GB+).',
          '**2026년 권장 임베딩 모델:** nomic-embed-text(768차원, 빠름), mxbai-embed-large(1024차원, 정확), bge-m3(다국어).',
          '**항목 수 목표:** Obsidian 약 50,000개 노트, AnythingLLM 약 100,000개 문서, Python + ChromaDB 커스텀 스택 100만 개 이상.',
          '**하드웨어 최소 사양:** 16 GB RAM 노트북. 10,000개 항목 이상: 32 GB 권장. 100,000개 항목 이상: 64 GB 홈 서버.',
          '**모바일 캡처 경로(iOS):** Shortcuts → Obsidian, Shortcuts → Working Copy(Git), Shortcuts → a-Shell. Android: Tasker 또는 HTTP Shortcuts.',
        ],
      },
      whichArchitecture: {
        id: 'which-architecture',
        title: '어떤 아키텍처를 구축할까?',
        content:
          '**가장 강력하게 들리는 아키텍처가 아니라 지식이 이미 도착하는 방식과 일치하는 아키텍처를 선택하십시오.** 이미 매일 노트를 작성한다면 Obsidian 중심으로 구축하십시오. 지식이 주로 문서(PDF, 내보내기, 웹 클립) 형태라면 AnythingLLM 중심으로 구축하십시오. 진정으로 100,000개 이상의 항목이 있거나 다중 사용자 액세스가 필요한 경우에만 Python + ChromaDB 커스텀 스택을 구축하십시오 — 유지 관리 비용이 실제로 존재하며 그 임계값 이하에서는 거의 가치가 없습니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '노트 중심 워크플로우는 Obsidian + Smart Connections + Copilot + Ollama를 선택하고, 문서 중심 아카이브는 AnythingLLM + Ollama를 선택하며, 100K 이상 항목을 가진 엔지니어는 Python + ChromaDB 커스텀 스택을 선택합니다.',
          },
          {
            type: 'plain-terms',
            text: '세 가지 경로, 하나의 목적지. 이미 노트 앱 안에서 생활한다면 Obsidian이 기존 습관을 AI 기능으로 감쌉니다. 주로 PDF와 웹 페이지를 축적한다면 AnythingLLM은 수집, 인덱싱, 채팅을 하나로 처리하는 단일 앱입니다. 코드를 작성하고 완전한 제어를 원한다면 Python + ChromaDB로 원하는 것을 정확히 구축할 수 있습니다 — 하지만 유지 관리는 직접 해야 합니다. 아키텍처에 맞추어 습관을 바꾸지 말고 기존 워크플로우와 일치하는 경로를 선택하십시오.',
          },
        ],
        decisionBlock: {
          title: '결정: 어떤 PKB 아키텍처?',
          localIf: [
            '이미 Obsidian을 사용하거나 Markdown 파일을 사용한 노트 중심 워크플로우를 원함 → Obsidian 중심',
            '지식이 주로 PDF, 내보내기, 웹 클립, 이메일 파일임 → AnythingLLM 중심',
            '100,000개 이상의 항목, 커스텀 스키마 필요 또는 다중 사용자 액세스 → Python + ChromaDB 커스텀 스택',
            '캡처, 저장, RAG, 채팅을 관리하는 단일 앱을 원함 → AnythingLLM 중심',
            '청킹, 검색, 재순위 결정에 완전한 제어를 원함 → Python + ChromaDB 커스텀 스택',
          ],
          cloudIf: [
            '모든 쿼리에 GPT-5.5 수준 추론이 필요하고 아카이브가 작음 → Notion AI 또는 커스텀 GPT를 사용한 ChatGPT(로컬 스택은 종합에서 약 70% 수준)',
            '16 GB+ RAM 또는 홈 서버가 없음 → 클라우드 PKB SaaS(Mem, Reflect)',
            '팀에 동시 다중 사용자 액세스가 필요하고 서비스를 호스팅하고 싶지 않음 → 클라우드 동급',
          ],
          quick: [
            '노트 중심 사용자의 기본값: Obsidian + Smart Connections + Copilot + Ollama',
            '문서 중심 사용자의 기본값: AnythingLLM + Ollama',
            '100K 이상 항목을 가진 엔지니어: Python + ChromaDB 커스텀 스택 + Llama 3.2 3B',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '단지 더 강력하게 들린다는 이유로 Python 커스텀 스택으로 시작하지 마십시오. 먼저 Obsidian 또는 AnythingLLM 중심으로 구축하고 두 달간 실행하면서 워크플로우와 맞지 않는 레이어를 찾은 다음, 그 레이어를 커스텀 구성 요소로 교체하는 것을 고려하십시오. "Python으로 처음부터" 시작하고 6개월 이상 지속된 모든 PKB 프로젝트는 결국 Obsidian 또는 AnythingLLM 형태의 디자인으로 수렴했습니다.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '아키텍처 비교표',
        content:
          '**세 가지 참조 아키텍처는 대부분의 구축자에게 중요한 다섯 가지 축에서 차이가 납니다: 설정 복잡도, 항목 수 한계, 모바일 동기화, 캡처 유연성, 유지 관리 부담.** 설정 복잡도는 제어력에 대략 선형적으로 증가하며 유지 관리 비용도 마찬가지입니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obsidian은 약 50K 항목에서 중간 복잡도, AnythingLLM은 약 100K 항목에서 낮은 복잡도, Python + ChromaDB 커스텀 스택은 높은 복잡도이지만 100만 개 이상으로 확장됩니다.',
          },
          {
            type: 'plain-terms',
            text: 'AnythingLLM은 설정이 가장 쉽고 두 가지 "즉시 사용 가능한" 옵션 중 더 멀리 확장됩니다 — 하지만 문서 구성 방식에 대해 독단적입니다. Obsidian은 가장 표현력 있는 노트 작성 레이어와 활발한 플러그인 생태계를 제공하며, 설정 비용이 약간 더 높습니다. Python 커스텀은 한계가 없지만 모든 것을 직접 유지 관리해야 합니다: 청킹, 재순위, 중복 제거, 동기화, 백업. 항목 수만이 아니라 유지 관리 허용 수준으로 선택하십시오.',
          },
        ],
        columns: ['아키텍처', '복잡도', '최대 항목', '모바일 동기화', '적합 대상'],
        rows: [
          { '아키텍처': 'Obsidian 중심', '복잡도': '중간', '최대 항목': '~50,000개', '모바일 동기화': '예(Obsidian Sync; iCloud / Git 조건부)', '적합 대상': '매일 글쓰기 습관이 있는 노트 중심 사용자' },
          { '아키텍처': 'AnythingLLM 중심', '복잡도': '낮음', '최대 항목': '~100,000개', '모바일 동기화': '제한적(LAN / Tailscale을 통한 모바일 웹 UI)', '적합 대상': '문서 중심 PKB(PDF, 내보내기, 웹 클립)' },
          { '아키텍처': 'Python + ChromaDB 커스텀', '복잡도': '높음', '최대 항목': '100만 개 이상', '모바일 동기화': '수동(자체 API + 모바일 클라이언트 구축)', '적합 대상': '완전한 제어 + 다중 사용자를 원하는 엔지니어' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '모바일 동기화는 가장 과소평가된 비교 축입니다. AnythingLLM은 기술적으로 Obsidian보다 설정이 쉽지만 모바일에서는 "Safari에서 LAN 웹 UI 열기"를 의미합니다 — 네이티브 경험이 아닙니다. Obsidian Mobile은 Obsidian Sync와 결합하면 오프라인 읽기가 가능한 거의 네이티브 iOS / Android 앱을 제공합니다. 모바일 캡처와 읽기가 중요하다면 표가 제안하는 것보다 Obsidian에 더 높은 가중치를 두십시오.',
          },
        ],
      },
      fiveLayers: {
        id: 'five-layers',
        title: '로컬 AI PKB의 다섯 가지 레이어',
        content:
          '**모든 로컬 AI PKB는 아키텍처와 관계없이 동일한 다섯 가지 레이어를 가집니다: 캡처, 저장, 임베딩, 검색, 인터페이스.** 실패는 대개 한 레이어가 다른 레이어와 일치하지 않을 때 발생합니다 — 가장 일반적으로는, 아무도 사용하지 않는 손상된 캡처 파이프라인과 쌍을 이룬 정교한 검색 레이어입니다.',
        numberedItems: [
          {
            title: '캡처',
            whyItMatters: '항목이 시스템에 들어오는 방법입니다. 웹 클리퍼, 이메일 전달, 모바일 공유 시트, 음성 메모, 수동 붙여넣기. 초보자 구축에서 가장 많이 생략되는 레이어이며 시스템이 일상적인 사용을 견딜 수 있는지를 결정하는 레이어입니다. 모바일에서 캡처하는 데 5초 이상 걸리면 시스템에 먼지가 쌓입니다.',
          },
          {
            title: '저장',
            whyItMatters: '항목이 디스크에 저장되는 곳입니다. Markdown vault(Obsidian, Logseq), 문서 폴더 + 데이터베이스(AnythingLLM), 파일 시스템 + 매니페스트(Python 커스텀). 도구 변경에도 살아남는 저장 형식을 선택하십시오 — 일반 텍스트 Markdown이 가장 이식 가능하고 바이너리 데이터베이스가 가장 이식 가능하지 않습니다.',
          },
          {
            title: '임베딩',
            whyItMatters: '시맨틱 검색에 사용되는 항목의 벡터 표현입니다. 로컬 모델(Ollama를 통한 nomic-embed-text 또는 mxbai-embed-large)에 의해 생성됩니다. 임베딩 모델은 나중에 변경할 수 있지만 마이그레이션 비용은 "모든 것을 다시 임베딩"입니다 — 한 번 선택하고 유지하십시오.',
          },
          {
            title: '검색',
            whyItMatters: '쿼리 시간에 항목을 찾는 방법입니다. 상위-k 벡터 검색, 선택적 재순위, 선택적 메타데이터 필터(태그, 날짜, 출처). 순진한 상위-5와 조정된 상위-20-재순위의 품질 차이는 "유용함"과 "마법 같음"의 차이입니다.',
          },
          {
            title: '인터페이스',
            whyItMatters: '쿼리하고 읽는 방법입니다. 사이드바(Smart Connections), 채팅(Copilot, AnythingLLM), CLI(Python 커스텀), API. 대부분의 사용자는 기본적으로 채팅을 사용하지만 "관련 노트" 사이드바는 채팅이 할 수 없는 잊혀진 자료를 보여줍니다 — 무엇을 물어봐야 할지 모르기 때문입니다.',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: '실패하는 일반적인 구축 패턴: 가장 강력한 검색(재순위를 사용한 커스텀 하이브리드 검색)과 가장 스마트한 채팅 모델(Qwen3 7B)을 선택하고 캡처를 무시합니다. 3주 후 vault에 47개 항목이 있는데 모바일에서 아무것도 흐르지 않기 때문입니다. 수정은 항상 같습니다: 검색 단순화, 채팅 단순화, 캡처 수정, 그리고 가치의 80%는 항목이 시스템 안에 있다는 것에서 온다는 것을 받아들이십시오.',
          },
        ],
      },
      architectureObsidian: {
        id: 'architecture-obsidian',
        title: '아키텍처 A: Obsidian 중심',
        content:
          '**Obsidian + Smart Connections + Copilot for Obsidian + Ollama는 2026년 노트 중심 워크플로우의 기본 아키텍처입니다.** 16 GB Mac M3 Pro 또는 동급 PC에서 약 50,000개 노트까지 깔끔하게 확장되고, Obsidian Mobile을 통한 모바일 읽기를 지원하며, 미래의 어떤 도구로도 가져갈 수 있는 일반 텍스트 Markdown으로 모든 것을 유지합니다.',
        items: [
          '**저장:** 폴더("vault") 안의 Markdown 파일. 일반 텍스트, 단순 폴더, 데이터베이스 없음. 도구 마이그레이션에서 살아남습니다.',
          '**캡처:** Obsidian Web Clipper(브라우저 확장), Obsidian Mobile 공유 시트(iOS / Android), Mailspike 또는 커스텀 IFTTT 레시피를 통한 이메일-to-Obsidian, 수동 붙여넣기.',
          '**임베딩:** Smart Connections 플러그인 → `http://localhost:11434/api/embeddings`의 Ollama → nomic-embed-text(기본값) 또는 mxbai-embed-large(더 정확). 인덱스는 vault 내 `.smart-env/`에 저장됩니다.',
          '**검색:** Smart Connections 사이드바(관련 노트 보기) + Copilot for Obsidian의 Vault QA 모드(채팅 쿼리를 위한 vault 전체 RAG). 둘 다 임베딩 인덱스 위에서 검색합니다.',
          '**인터페이스:** Smart Connections 사이드바(수동적 발견) + Copilot 채팅 패널(능동적 쿼리) + Text Generator 템플릿(일일 요약과 같은 반복 가능한 워크플로우).',
          '**설정 시간:** 약 30분(Ollama 설치, 모델 다운로드, 세 가지 플러그인 설치, 엔드포인트 구성, 초기 인덱스 구축 대기).',
          '**하드웨어:** 최소 16 GB RAM(Llama 3.2 3B + nomic-embed-text 동시 실행). 10,000개 노트 이상에서 32 GB 권장. SSD 강력 권장 — 인덱스 재구성은 HDD에서 I/O 바운드입니다.',
          '**항목 한계:** 실제로 약 50,000개 노트; 서브-초 증분 재인덱싱으로 20,000개까지 테스트됨. 50K+ 노트에서 초기 인덱스는 4-8시간이 걸리며 서브-vault를 고려해야 합니다.',
          '**적합 대상:** 매일 글쓰기 습관이 있고 Markdown-first 선호도를 가지며 잊혀진 노트를 보여주는 "생각 동반자" 사이드바를 원하는 사용자.',
          '**부적합 대상:** 지식이 주로 PDF와 웹 클립인 사용자(AnythingLLM 중심 사용); 올인원 단일 앱을 원하는 사용자(Obsidian 중심은 "Obsidian + 3개 플러그인 + Ollama"입니다).',
        ],
        callouts: [
          {
            type: 'tip',
            text: '이 아키텍처의 플러그인 레이어 심층 분석(5개 플러그인, 설정 단계, vault 확장 수치)은 [Obsidian + 로컬 LLM 플러그인 가이드](/ko/power-local-llm/local-llm-with-obsidian-2026)를 참조하십시오. 이 페이지는 아키텍처를 다루고 플러그인 가이드는 설정을 다룹니다.',
          },
        ],
      },
      architectureAnythingllm: {
        id: 'architecture-anythingllm',
        title: '아키텍처 B: AnythingLLM 중심',
        content:
          '**AnythingLLM + Ollama는 올인원 옵션입니다: 캡처, 저장, RAG, 채팅이 단일 데스크탑 또는 자체 호스팅 앱에 통합되어 있습니다.** 약 100,000개 문서(PDF, 웹 클립, 내보내기 혼합)까지 확장되며 지식이 노트보다 주로 문서 형태로 도착할 때 올바른 선택입니다.',
        items: [
          '**저장:** AnythingLLM 내부 데이터베이스(기본값은 SQLite; 다중 사용자 자체 호스팅에는 Postgres). 문서는 UI를 통해 수집됩니다; 원본은 동기화하는 폴더에도 남을 수 있습니다.',
          '**캡처:** 앱 내 업로드(workspace에 PDF/파일 드래그), 웹 페이지용 브라우저 확장, 프로그래밍 방식 수집을 위한 공개 API(`POST /api/v1/document/upload`), 공식 통합 또는 커스텀 릴레이를 통한 이메일 전달.',
          '**임베딩:** AnythingLLM은 구성한 임베딩 공급자를 사용합니다 — "Ollama" 선택 → `http://localhost:11434` 엔드포인트 → `nomic-embed-text` 모델. 임베딩은 내장 벡터 스토어(기본값은 LanceDB; ChromaDB / Pinecone 선택 가능)에 저장됩니다.',
          '**검색:** workspace 전체 RAG. 구성 가능한 청크 크기, 상위-k 검색, 선택적 재순위. 여러 workspace를 통해 주제별 파티셔닝 가능(예: "업무", "읽기", "프로젝트").',
          '**인터페이스:** AnythingLLM 웹 UI(데스크탑 및 모바일 브라우저에서 작동), 커스텀 프론트엔드용 공개 API, 다른 도구를 PKB에 연결하기 위한 OpenAI 호환 엔드포인트.',
          '**설정 시간:** 약 15분(AnythingLLM Desktop 또는 Docker 설치, Ollama 연결, 문서 드래그).',
          '**하드웨어:** 최소 16 GB RAM. 10,000개 문서 이상에서 32 GB 권장. AnythingLLM은 동일한 항목 수에서 Obsidian + 플러그인보다 메모리 효율적입니다 — 두 개가 아닌 단일 프로세스이기 때문입니다.',
          '**항목 한계:** 단일 workspace에서 약 100,000개 문서; 검색 지연 시간을 약 1초 미만으로 유지하려면 50K에서 여러 workspace로 파티셔닝하십시오.',
          '**적합 대상:** PDF가 많은 아카이브, 웹 클립 중심 캡처, 플러그인 스택보다 단일 앱을 선호하는 사용자. 또한 공유 PKB를 자체 호스팅하는 소규모 팀에 적합합니다.',
          '**부적합 대상:** 노트 중심 글쓰기 표면을 원하는 사용자(Obsidian); 일반 텍스트 Markdown으로 저장소를 소유하고 싶은 사용자(AnythingLLM 벡터 스토어는 내부적입니다).',
        ],
        callouts: [
          {
            type: 'tip',
            text: '여기서 사용하는 RAG 레이어의 단계별 설정(Ollama + AnythingLLM, 수집, 청킹 조정)은 [30분 만에 PDF에서 로컬 RAG 설정 튜토리얼](/ko/power-local-llm/local-rag-on-your-pdfs-step-by-step)을 참조하십시오. 1,000개 이상 PDF로 RAG를 확장하는 방법은 [1000개 PDF와 로컬로 채팅하기](/ko/power-local-llm/chat-with-1000-pdfs-locally)를 참조하십시오.',
          },
        ],
      },
      architectureCustom: {
        id: 'architecture-custom',
        title: '아키텍처 C: Python + ChromaDB 커스텀',
        content:
          '**Python + ChromaDB + Ollama 커스텀 스택은 진정으로 100,000개 이상의 항목, 다중 사용자 필요성, 또는 표준 도구로는 모델링할 수 없는 특정 스키마 요구 사항이 있는 경우에만 올바른 선택입니다.** 유지 관리 비용이 실제로 존재합니다: 청킹, 중복 제거, 재순위, 동기화, 백업 — 모두 직접 관리해야 합니다.',
        items: [
          '**저장:** 파일 시스템(출처별 폴더: `notes/`, `pdfs/`, `web/`, `email/`) + 메타데이터 매니페스트(SQLite 또는 JSONL). 검색 레이어를 다시 수집하지 않고도 변경할 수 있도록 소스 파일은 개방형 형식으로 유지됩니다.',
          '**캡처:** 웹훅으로 트리거된 스크립트(웹 클리퍼 → HTTP 엔드포인트 → 파일 쓰기), 이메일 전달 → IMAP 폴러 → 파일 쓰기, 모바일 공유 시트 → Tailscale 엔드포인트 → 파일 쓰기. 각 캡처 경로는 소규모 Python 서비스입니다.',
          '**임베딩:** ChromaDB(로컬 모드, 디스크에 지속) + OpenAI 호환 엔드포인트를 통한 Ollama 임베딩. watchdog 프로세스를 통한 파일 변경 시 재임베딩. ChromaDB는 HNSW 인덱싱으로 단일 머신에서 수백만 개의 벡터로 확장됩니다.',
          '**검색:** ChromaDB 상위-k 유사도 + 재순위기(BGE Re-ranker 또는 로컬 Cohere 동급) + 메타데이터 필터(날짜 범위, 태그, 출처). 정확한 용어 매칭을 위한 청크의 BM25를 사용한 선택적 하이브리드 검색.',
          '**인터페이스:** 소규모 FastAPI 서비스를 `/v1/chat/completions` OpenAI 호환 엔드포인트로 노출하거나, Streamlit / Gradio UI, CLI, 또는 세 가지 모두. 코드 없이 세련된 채팅 경험을 위해 앞에 Open WebUI를 두십시오.',
          '**설정 시간:** 기능하는 v1에 약 1일; 데이터에 대한 청킹, 검색 품질, 캡처 파이프라인 조정에 약 2주 반복.',
          '**하드웨어:** 개발용 32 GB RAM 노트북; 임베딩 서비스가 노트북과 경쟁하지 않도록 100,000개 이상 항목에서 64 GB RAM 홈 서버. 채팅 성능을 위해 500K 항목 이상에서 전용 GPU(RTX 4060 이상) 고려.',
          '**항목 한계:** HNSW + 샤딩으로 실제로 100만 개 이상; 병목이 검색에서 캡처 파이프라인 신뢰성과 스키마 변경 시 재임베딩 비용으로 이동합니다.',
          '**적합 대상:** 스택을 소유하고 싶은 엔지니어, 커스텀 스키마를 가진 팀(예: "각 항목에는 신뢰도 점수, 출처, 저자가 있음"), 또는 Obsidian이나 AnythingLLM의 엄격한 한계(각각 50K와 100K)에 도달한 사용자.',
          '**부적합 대상:** 비-엔지니어; 유지 관리 비용을 과소평가하는 사람; 표준 옵션이 이미 사용 사례를 커버하는 사용자.',
        ],
        promptExamples: [
          {
            label: 'ChromaDB 수집(Python 스키마)',
            text: 'import chromadb, ollama, pathlib\nclient = chromadb.PersistentClient(path="./chroma")\ncoll = client.get_or_create_collection("kb")\nfor p in pathlib.Path("vault").rglob("*.md"):\ntext = p.read_text()\nemb = ollama.embeddings(model="nomic-embed-text", prompt=text)["embedding"]\ncoll.upsert(ids=[str(p)], embeddings=[emb], documents=[text], metadatas=[{"source": str(p)}])',
          },
          {
            label: '재순위를 사용한 쿼리(스키마)',
            text: 'q = "로컬 RAG 동기화에 대해 무엇을 작성했나요?"\nq_emb = ollama.embeddings(model="nomic-embed-text", prompt=q)["embedding"]\nhits = coll.query(query_embeddings=[q_emb], n_results=20)\n# pass hits["documents"] through a re-ranker, keep top 5\n# send top 5 + question to Llama 3.2 3B via Ollama chat endpoint',
          },
        ],
        callouts: [
          {
            type: 'warning',
            text: '커스텀 구축에서 가장 일반적인 실패 패턴: 스키마가 안정적이지 않아 모든 코드 변경 시 전체 아카이브를 다시 임베딩합니다. 약 5,000개 항목을 수집하기 전에 임베딩 모델 + 청크 크기를 고정하십시오. nomic-embed-text 768차원에서 mxbai-embed-large 1024차원으로 100K 항목 마이그레이션하는 데 몇 시간의 컴퓨팅이 걸리고 ChromaDB 컬렉션이 손상됩니다 — 차원을 혼합할 수 없습니다.',
          },
        ],
      },
      capture: {
        id: 'capture',
        title: '캡처 파이프라인: 웹, 이메일, 모바일, 음성',
        content:
          '**캡처 레이어는 PKB가 일상적인 사용을 견딜 수 있는지를 결정합니다. 지식의 대부분은 데스크탑 밖에서 도착합니다 — 모바일에서, 이메일에서, 음성 메모에서 — 먼저 데스크탑 앱을 열어야 하는 캡처 파이프라인은 피해지는 파이프라인입니다.** 네 가지 주요 흐름을 위해 구축하고 항목의 80%가 모바일에서 도착할 것이라는 것을 받아들이십시오.',
        items: [
          '**웹 클리퍼(데스크탑 + 모바일):** Obsidian Web Clipper, AnythingLLM 브라우저 확장, 또는 현재 페이지를 캡처 엔드포인트로 POST하는 커스텀 북마크릿. 모바일 공유 시트 → 웹 클리퍼 확장 → vault.',
          '**이메일 전달:** 전용 주소(예: `kb@yourdomain.com`) + IMAP 폴러 → 파일 쓰기. 보관하려는 이메일을 전달하면 폴러가 수집을 처리합니다. 검색에서 출처별 필터링을 위해 파일 이름에 출처 접두사를 사용하십시오.',
          '**모바일 공유 시트:** 가장 많이 사용되는 캡처 경로. iOS 공유 → Obsidian(Markdown 파일 쓰기), iOS 공유 → Working Copy(Git에 커밋), iOS 공유 → 커스텀 Shortcut(캡처 API로 POST). Android: HTTP Shortcuts 또는 Tasker.',
          '**음성 메모:** AudioPen 스타일 캡처는 2026년에 점점 보편화되고 있습니다. 전화로 녹음 → Whisper.cpp 또는 자체 호스팅 Whisper 서비스를 통해 로컬로 전사 → Markdown 파일로 전사 내용 쓰기 → 임베딩.',
          '**수동 붙여넣기:** 폴백. 항상 작동하지만 절대 확장되지 않습니다. 롱테일 용도로 사용하십시오.',
          '**스크린샷 OCR:** 스크린샷은 손실 캡처 형식입니다. iOS에서 Apple Live Text 또는 로컬 OCR 파이프라인(Tesseract, Apple Vision, EasyOCR)을 사용하여 텍스트를 추출하고 이미지와 추출된 텍스트가 있는 Markdown 파일을 쓰십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '파이프라인을 설계하기 전에 기존 캡처 습관을 감사하십시오. 이미 저장하는 것을 살펴보십시오: 브라우저 북마크, 스크린샷, 전달된 이메일, 음성 메모. PKB 캡처 레이어는 그러한 기존 흐름을 반영해야 합니다 — 스크린샷을 지속적으로 찍는다면 OCR 경로를 구축하고, 이미 이메일을 자신에게 전달한다면 이메일 전달을 구축하십시오. 새로운 습관을 추가하는 것("이제 모든 기사를 수동으로 KB에 복사 붙여넣기할 것이다")은 결코 작동하지 않습니다.',
          },
        ],
      },
      mobileCapture: {
        id: 'mobile-capture',
        title: '모바일 캡처: iOS Shortcuts, Working Copy, a-Shell',
        content:
          '**iOS에는 2026년 로컬 AI PKB로의 세 가지 실행 가능한 캡처 경로가 있습니다: Shortcuts → Obsidian, Shortcuts → Working Copy(Git), Shortcuts → a-Shell(스크립트 기반).** 각각은 세 가지 참조 아키텍처 중 하나와 자연스럽게 결합됩니다. 전반적인 아키텍처의 동기화 모델과 일치하는 경로를 선택하십시오.',
        items: [
          '**Shortcuts → Obsidian(Obsidian 중심):** Obsidian "노트에 추가" Shortcut이 캡처된 콘텐츠를 vault에 직접 씁니다. Obsidian Sync(유료, 권장) 또는 iCloud Drive(무료, 조건부)를 통한 동기화. 노트 중심 워크플로우에 적합합니다.',
          '**Shortcuts → Working Copy(Git):** 캡처된 콘텐츠가 iPhone의 Working Copy 저장소에 쓰여진 다음 자동으로 커밋되고 푸시됩니다. 데스크탑이 풀합니다. 무료, 견고, 모든 Markdown vault와 작동합니다. 참고: Working Copy는 유료입니다(일회성 결제 약 $20). Git 동기화 vault에 적합합니다.',
          '**Shortcuts → a-Shell:** a-Shell은 스크립트를 실행하는 무료 iOS 터미널입니다. 캡처된 텍스트를 a-Shell 스크립트로 파이프하는 Shortcut을 구축하면 파일을 쓰고 `git`을 통해 커밋하거나, Tailscale을 통해 `rsync`로 동기화하거나, 커스텀 캡처 엔드포인트로 업로드합니다. 엔지니어가 구축한 커스텀 아키텍처에 적합합니다.',
          '**Android 동급:** iOS의 Working Copy 경로와 동급인 Tasker + Termux + Git. 커스텀 엔드포인트 경로용 HTTP Shortcuts. Obsidian 경로용 Obsidian Mobile 공유 시트.',
          '**지연 시간 예산:** 모바일 캡처는 단 대 단으로 5초 미만(공유 시트 → 파일 쓰기 / 커밋 / 업로드)에 완료되어야 합니다. 더 느리면 사용자가 앱을 한 번 열고 다시는 열지 않습니다.',
          '**오프라인 캡처:** 세 가지 iOS 경로 모두 오프라인에서 대기열을 지원합니다(Shortcuts는 대기열, Working Copy는 커밋 대기열, a-Shell 스크립트는 로컬에 쓰고 나중에 동기화). 비행, 대중교통, 시골 지역에서의 캡처에 필수적입니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '데스크탑이 온라인 상태여야 하는 모바일 캡처 경로를 구축하지 마십시오(예: 노트북이 깨어 있을 때만 액세스 가능한 Tailscale로 보호된 엔드포인트로 POST). 업무 회의 중, 노트북이 절전 모드일 때, 밤에 캡처를 잃게 됩니다. 항상 켜져 있는 홈 서버 / NAS에서 캡처 엔드포인트를 실행하거나, 오프라인에서 버퍼링되는 eventually-consistent 스토어(Obsidian Sync, Git, iCloud)에 쓰십시오.',
          },
        ],
      },
      scaling: {
        id: 'scaling',
        title: '확장: 1K, 10K, 100K 항목',
        content:
          '**로컬 AI PKB 확장에는 세 가지 체제가 있습니다: 1,000개 항목 미만에서는 모든 현대 노트북에서 모든 것이 빠릅니다; 1,000~10,000개 항목 사이에서는 임베딩 인덱스가 관리해야 할 실제 아티팩트가 됩니다; 10,000개 항목을 초과하면 하드웨어가 병목이 되고 캡처 파이프라인 신뢰성이 결과를 지배합니다.** 아래 실제 수치는 nomic-embed-text와 Llama 3.2 3B를 사용하는 Mac M3 Pro / RTX 4060 PC를 가정합니다.',
        columns: ['항목 수', '권장 아키텍처', '초기 임베딩 시간', '하드웨어', '참고'],
        rows: [
          { '항목 수': '1,000개 항목', '권장 아키텍처': '세 가지 중 하나', '초기 임베딩 시간': '약 2분', '하드웨어': '16 GB RAM 노트북', '참고': '모든 것이 즉각적으로 느껴집니다. 아키텍처 선택은 순수하게 워크플로우 적합성 때문입니다.' },
          { '항목 수': '10,000개 항목', '권장 아키텍처': 'Obsidian 또는 AnythingLLM', '초기 임베딩 시간': '약 25분', '하드웨어': '16 GB RAM 노트북(32 GB 권장)', '참고': '임베딩 인덱스 약 150-250 MB. 편집 시 재임베딩 시간 서브-초. 대부분의 지식 근로자에게 최적 지점.' },
          { '항목 수': '50,000개 항목', '권장 아키텍처': 'AnythingLLM 또는 Python 커스텀', '초기 임베딩 시간': '약 3시간', '하드웨어': '32 GB RAM 노트북 또는 홈 서버', '참고': '초기 인덱스는 야간에 실행됩니다. 이 시점부터 서브-vault / workspace 계획. 임베딩 디스크 사용량 약 1.5-2 GB.' },
          { '항목 수': '100,000개 항목', '권장 아키텍처': 'AnythingLLM(다중 workspace) 또는 Python 커스텀', '초기 임베딩 시간': '6-8시간', '하드웨어': '최소 32 GB RAM; 홈 서버 선호', '참고': '임베딩을 전용 홈 서버로 이동하십시오. 캡처 파이프라인 신뢰성이 이제 주요 실패 모드이며 검색이 아닙니다.' },
          { '항목 수': '500,000개 항목 이상', '권장 아키텍처': 'Python + ChromaDB 커스텀', '초기 임베딩 시간': '24시간 이상', '하드웨어': '64 GB RAM + 전용 GPU 홈 서버', '참고': '샤딩, 중복 제거, 증분 재임베딩 파이프라인이 필요해집니다. 표준 도구는 더 이상 맞지 않습니다.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '초기 임베딩 비용은 일회성 청구입니다. 첫 번째 인덱스 이후 변경된 항목만 재임베딩됩니다 — 일반적으로 100K 항목에서도 저장 시 1초 미만. 처음의 느림은 실제이지만 반복적이지 않습니다. 충전된 머신에서 야간에 초기 인덱스를 실행하고 잊어버리십시오.',
          },
        ],
      },
      backupSync: {
        id: 'backup-sync',
        title: '백업, 버전 관리, 다중 기기 동기화',
        content:
          '**로컬 AI PKB에는 세 가지 백업 레이어가 필요합니다: vault 스냅샷(Time Machine, Backblaze, restic), 일반 텍스트 콘텐츠의 Git 기록, 깔끔한 재구성을 위한 분기별 임베딩 및 메타데이터 내보내기.** 임베딩은 기술적으로 재생성 가능하지만 100K+ 항목에서 재생성에는 몇 시간이 걸립니다 — 함께 백업하십시오.',
        items: [
          '**vault 스냅샷(파일 시스템 레벨):** Time Machine(macOS) 또는 restic(Linux) 매 24시간. 외부 저장을 위한 Backblaze 또는 rsync.net. 임베딩을 포함한 모든 것을 캡처합니다.',
          '**Git 기록(콘텐츠만):** 일반 텍스트 Markdown 파일을 Git 저장소에 커밋(로컬 + 비공개 GitHub / Gitea). `.smart-env/`, `vector_store/`, 기타 바이너리 인덱스 폴더를 `.gitignore`에 추가하십시오. Git은 노트별 버전 기록을 제공하고; vault 스냅샷은 전체 시스템 롤백을 제공합니다.',
          '**임베딩 내보내기(분기별):** 벡터 스토어를 이식 가능한 형식으로 내보내십시오(ChromaDB → parquet, Smart Connections → JSON dump, AnythingLLM → 내장 내보내기). 외부 저장소에 마지막 두 번의 내보내기를 저장하십시오. vault 스냅샷이 실패하거나 임베딩 인덱스가 손상된 경우 이것이 빠른 재구성 경로입니다.',
          '**다중 기기 동기화 — Obsidian 중심:** Obsidian Sync는 일반 텍스트 + 바이너리 인덱스를 깔끔하게 처리합니다(종단 간 암호화). iCloud Drive는 일반 텍스트에서는 작동하지만 플랫폼 간 바이너리 인덱스를 손상시킵니다. Working Copy / Termux를 통한 Git은 일반 텍스트 전용으로 작동합니다 — 기기별 재인덱싱.',
          '**다중 기기 동기화 — AnythingLLM 중심:** 홈 서버에서 Docker 컨테이너로 AnythingLLM을 실행하십시오. 모든 기기는 LAN 또는 Tailscale을 통해 동일한 인스턴스에 연결됩니다. 클라이언트 측 동기화가 필요 없습니다.',
          '**다중 기기 동기화 — Python 커스텀:** 구축하는 아키텍처가 이것을 결정합니다. 대부분의 구축은 중앙 API 서비스(홈 서버의 FastAPI)를 사용하고 클라이언트는 캡처를 POST하고 쿼리를 GET합니다. Tailscale이 네트워크 레이어를 제공합니다.',
          '**새 컴퓨터로 마이그레이션:** vault 스냅샷 복원 → Ollama 설치 및 동일한 모델 다운로드 → Obsidian / AnythingLLM / Python 커스텀 스택 설치 → 임베딩 인덱서 재시작. Obsidian Sync 또는 자체 호스팅 AnythingLLM을 사용하면 마이그레이션은 "클라이언트 설치 및 로그인"입니다 — 수동 복원이 필요 없습니다. 그것 없이는 10K 항목 vault에 약 30분, 50K에 약 2시간, 임베딩 내보내기 단계를 생략했다면 100K 이상에는 밤새 계산하십시오.',
          '**선택적 공유:** vault의 일부를 공유하려면(예: 협력자와 연구 프로젝트), 서브-vault 또는 태그 기반 내보내기 스크립트를 사용하십시오. 전체 vault를 공유하지 마십시오 — 대부분의 로컬 AI PKB는 로컬 스택을 절대 떠나서는 안 되는 민감한 항목(의료, 금융, 개인)을 축적합니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '분기별로 복원을 테스트하십시오. "나는 백업이 있다"라는 대부분의 주장은 열망적입니다 — 테스트는 "2시간 미만에 새 노트북에서 vault를 복원할 수 있습니까?"입니다. 그 테스트를 실행하십시오. 처음 실행할 때 세 가지 레이어(스냅샷, Git, 임베딩 내보내기) 중 하나가 6개월 동안 잘못 구성되어 있었다는 것을 발견하게 됩니다.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '일반적인 실수',
        items: [
          '**캡처 레이어보다 검색 레이어를 먼저 설계합니다.** 47개 항목의 vault에서 재순위를 사용한 커스텀 하이브리드 검색은 낭비입니다. 먼저 캡처를 구축하고, 순진한 상위-5 검색을 받아들이고, vault에 1,000개 이상의 항목이 있고 실제 쿼리에서 검색 품질을 측정할 수 있을 때만 검색을 최적화하십시오.',
          '**아키텍처 혼합.** "노트용 Obsidian + PDF용 AnythingLLM + 이메일용 Python 커스텀"은 깔끔하게 들리지만 통합 비용이 지배합니다. 하나의 아키텍처를 선택하고, 제한 사항을 받아들이고, 절대적으로 필요한 경우에만 단일 커넥터를 추가하십시오(예: Obsidian vault 폴더를 읽기 전용 모드로 수집하는 AnythingLLM).',
          '**아카이브를 다시 임베딩하지 않고 임베딩 모델 변경.** 동일한 스토어에서 nomic-embed-text의 768차원 벡터와 mxbai-embed-large의 1024차원 벡터를 혼합하면 검색이 자동으로 손상됩니다. 임베딩 모델 + 차원을 선택하고 고정하고, 아카이브 전체 재임베딩으로만 변경하십시오.',
          '**10,000개 항목 이상에서 임베딩 인덱스 백업 무시.** "재생성할 수 있습니다"는 사실이지만 재생성에 몇 시간이 걸립니다. 10K 항목에서 임베딩 스토어를 백업 전략에 추가하십시오.',
          '**캡처의 80%가 모바일에서 발생하는데 데스크탑 전용으로 설계합니다.** 모바일 캡처 경로가 없는 PKB는 먼지가 쌓입니다. 첫 날 모바일 캡처 흐름을 테스트하십시오 — 공유 시트에서 vault까지 5초 미만에 완료되어야 합니다.',
          '**바이너리 임베딩 인덱스에 iCloud Drive 신뢰.** iCloud는 일반 텍스트를 잘 처리합니다; 바이너리 인덱스(Smart Connections `.smart-env/`, AnythingLLM 벡터 스토어)는 플랫폼 간에 손상됩니다. Obsidian Sync, 자체 호스팅 인스턴스를 사용하거나 기기별 재인덱싱을 받아들이십시오.',
          '**100K 항목에서 파티셔닝하지 않음.** 100K 항목에서 단일 workspace / vault는 여러 초의 검색 지연 시간을 갖습니다. 주제(업무, 읽기, 프로젝트)별로 여러 workspace 또는 서브-vault로 파티셔닝하고; 각각을 별도로 또는 라우터를 통해 쿼리하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          'Obsidian — [obsidian.md](https://obsidian.md) 및 [help.obsidian.md](https://help.obsidian.md)(vault 구조, 모바일 동기화 아키텍처, 플러그인 문서).',
          'AnythingLLM — [github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)(오픈 소스 자체 호스팅 RAG 애플리케이션).',
          'Ollama — [ollama.com](https://ollama.com) 및 [github.com/ollama/ollama](https://github.com/ollama/ollama)(로컬 LLM 런타임; 채팅 + 임베딩 엔드포인트).',
          'ChromaDB — [trychroma.com](https://www.trychroma.com) 및 [github.com/chroma-core/chroma](https://github.com/chroma-core/chroma)(오픈 소스 로컬 벡터 데이터베이스).',
          'Working Copy — [workingcopy.app](https://workingcopy.app)(모바일 캡처 파이프라인용 iOS Git 클라이언트).',
          'a-Shell — [holzschu.github.io/a-Shell_iOS/](https://holzschu.github.io/a-Shell_iOS/)(스크립트 기반 모바일 캡처용 무료 iOS 터미널).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '지식 베이스에 웹 페이지를 어떻게 캡처합니까?',
            a: '마찰 순서로 정렬된 세 가지 옵션이 있습니다. (1) 브라우저 확장으로서의 웹 클리퍼 — Obsidian Web Clipper 또는 AnythingLLM 확장이 현재 페이지를 vault / workspace에 직접 씁니다. (2) 모바일 공유 시트 — Safari / Chrome에서 공유 → Obsidian(Markdown 파일 쓰기) 또는 → Working Copy(Git에 커밋) 또는 → 커스텀 Shortcut(캡처 API로 POST). (3) 북마크릿 — 확장이 없는 브라우저용; 현재 URL + 선택 내용을 캡처 엔드포인트로 POST합니다. 모바일 공유 시트가 실제로 가장 많이 사용되는 경로입니다 — 먼저 설계하십시오.',
          },
          {
            q: '시스템에 이메일을 전달할 수 있습니까?',
            a: '예. 전용 주소(예: Fastmail / Migadu 별칭 `kb@yourdomain.com`)를 설정하고 홈 서버 또는 노트북에서 새 메일을 다운로드하고 vault에 이메일당 Markdown 파일을 쓰는 IMAP 폴러를 실행하십시오. 검색이 발신자별로 필터링할 수 있도록 파일 이름에 발신자 주소 접두사를 추가하십시오. AnythingLLM에는 자체 이메일 통합이 있습니다; Obsidian 사용자는 일반적으로 직접 IMAP 폴러를 구축하거나 n8n과 같은 IFTTT / Zapier 대안을 사용합니다.',
          },
          {
            q: '데스크탑과 모바일 간에 어떻게 동기화합니까?',
            a: '아키텍처에 따라 다릅니다. Obsidian 중심: Obsidian Sync(유료, 바이너리 인덱스를 깔끔하게 처리), iCloud Drive(무료, 일반 텍스트 전용 — 기기별 재인덱싱) 또는 Working Copy를 통한 Git(무료 + Working Copy 일회성 결제, 일반 텍스트 전용 — 기기별 재인덱싱). AnythingLLM 중심: 홈 서버의 Docker에서 AnythingLLM을 실행하고 모든 기기가 LAN 또는 Tailscale을 통해 연결됩니다 — 클라이언트 측 동기화가 필요 없습니다. Python 커스텀: 홈 서버의 중앙 API 서비스를 구축하고; 클라이언트는 캡처를 POST하고 쿼리를 GET합니다.',
          },
          {
            q: '하나의 큰 vault를 사용해야 할까요, 아니면 주제별로 나눠야 할까요?',
            a: '약 50,000개 항목까지는 하나의 vault를 사용하십시오. 50K 이상에서는 두 가지 이유로 주제(업무, 읽기, 프로젝트, 개인)별로 나누십시오: 검색 지연 시간이 약 1초 미만으로 유지되고, 규모에서 발생할 수 있는 의도치 않은 컨텍스트 누출(예: 업무 쿼리에서 개인 노트 나타남)이 가능해집니다. 50K 이전에 나누는 것은 너무 이릅니다 — PKB의 주요 가치인 우연한 교차 연결을 잃게 됩니다.',
          },
          {
            q: '더 높은 정확도를 위해 얼마나 자주 재임베딩해야 합니까?',
            a: '"정확도 드리프트"로 인해 재임베딩하지 마십시오 — 임베딩은 저하되지 않습니다. 임베딩 모델을 변경할 때만 재임베딩하십시오(예: 기술 콘텐츠에서 더 나은 검색을 위해 nomic-embed-text에서 mxbai-embed-large로 업그레이드). 세 가지 아키텍처는 모두 파일 변경 시 증분 재임베딩을 자동으로 처리합니다; 스케줄링할 필요가 없습니다. 예외는 인덱서를 제어하는 Python 커스텀 스택입니다 — 거기서는 저장 시 watchdog으로 제어되는 증분 재임베딩이 표준입니다.',
          },
          {
            q: '지식 베이스에서 버전 관리를 사용할 수 있습니까?',
            a: '일반 텍스트 콘텐츠에는 예(Markdown vault → Git 저장소, 로컬 + 비공개 GitHub / Gitea). 바이너리 인덱스 폴더(`.smart-env/`, `vector_store/`, ChromaDB 지속성 디렉토리)를 `.gitignore`에 추가하십시오 — 기록을 부풀리고 병합 충돌을 유발합니다. Git은 노트별 버전 기록을 제공하고; vault 스냅샷(Time Machine, restic)은 전체 시스템 롤백을 제공합니다. 하나가 아닌 두 레이어 모두.',
          },
          {
            q: '이 시스템에서 PDF를 어떻게 처리합니까?',
            a: 'Obsidian 중심: Markdown 노트 옆에 PDF를 저장하십시오; Smart Connections는 PDF 콘텐츠를 직접 임베딩하지 않습니다 — 먼저 텍스트를 추출하십시오(예: PDF++ 플러그인 또는 각 PDF 옆에 Markdown 요약을 쓰는 전처리 스크립트를 통해). AnythingLLM 중심: PDF를 workspace에 직접 드래그하십시오; AnythingLLM이 PDF 파싱과 청킹을 자동으로 처리합니다. Python 커스텀: 수집 파이프라인에서 `pypdf` 또는 `pdfplumber`를 사용하여 텍스트를 추출하고, 추출된 텍스트를 임베딩하십시오. AnythingLLM은 PDF가 많은 아카이브에서 가장 마찰이 적은 옵션입니다.',
          },
          {
            q: 'KB의 일부를 선택적으로 공유할 수 있습니까?',
            a: '예, 하지만 첫 날부터 설계하십시오. "공유 가능"하고 "비공개" 콘텐츠를 별도의 스토어에 유지하기 위해 서브-vault(Obsidian) 또는 workspace(AnythingLLM)를 사용하십시오. 일회성 공유의 경우 태그(예: `#shareable`)별로 항목을 추출하는 이식 가능한 Markdown 번들로 내보내는 태그 기반 내보내기 스크립트를 구축하십시오. 전체 vault를 공유하지 마십시오 — 대부분의 로컬 AI PKB는 로컬 스택을 절대 떠나서는 안 되는 민감한 항목(의료, 금융, 개인 서신)을 축적합니다.',
          },
          {
            q: '최선의 백업 전략은 무엇입니까?',
            a: '세 가지 레이어: (1) 24시간마다 파일 시스템 스냅샷(Time Machine / restic)과 외부 저장소 사본(Backblaze / rsync.net); (2) 노트별 버전 검색을 위한 일반 텍스트 콘텐츠의 Git 기록; (3) 빠른 재구성 경로로서의 분기별 임베딩 + 메타데이터 내보내기. 분기별로 복원을 테스트하십시오 — "2시간 미만에 새 노트북에서 vault를 재구성할 수 있습니까?" 첫 번째 복원 테스트는 일반적으로 세 가지 레이어 중 하나가 잘못 구성되어 있었다는 것을 드러냅니다.',
          },
          {
            q: '새 컴퓨터로 어떻게 마이그레이션합니까?',
            a: 'vault 스냅샷 복원 → Ollama 설치 및 동일한 모델 다운로드 → Obsidian / AnythingLLM / Python 커스텀 스택 설치 → 임베딩 인덱서 재시작. Obsidian Sync 또는 자체 호스팅 AnythingLLM을 사용하면 마이그레이션은 "클라이언트 설치 및 로그인"입니다 — 수동 복원이 필요 없습니다. 그것 없이는 10K 항목 vault에 약 30분, 50K에 약 2시간, 임베딩 내보내기 단계를 생략했다면 100K 이상에는 밤새.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기',
        items: [
          '[Obsidian + 로컬 LLM: vault를 세컨드 브레인으로 만드는 5개 플러그인(2026)](/ko/power-local-llm/local-llm-with-obsidian-2026) — 아키텍처 A의 플러그인 레이어 심층 분석.',
          '[로컬 LLM과 Logseq 및 Joplin](/ko/power-local-llm/local-llm-with-logseq-and-joplin) — Obsidian이 선호하지 않는 경우 PKB의 대체 저장 레이어.',
          '[1000개 이상 PDF와 로컬로 채팅하기: 토이 예제 이상으로 RAG 확장](/ko/power-local-llm/chat-with-1000-pdfs-locally) — 1,000개 항목 이상으로 RAG 레이어 확장, 세 가지 아키텍처 모두에 적용 가능.',
          '[30분 만에 PDF에서 로컬 RAG(Ollama + AnythingLLM)](/ko/power-local-llm/local-rag-on-your-pdfs-step-by-step) — 아키텍처 B에서 사용하는 검색 레이어를 위한 RAG 구현 튜토리얼.',
          '[로컬 RAG를 위한 최선의 임베딩 모델(2026)](/ko/power-local-llm/best-embedding-models-local-rag-2026) — 세 가지 아키텍처 각각에 대한 임베딩 모델 선택(nomic-embed-text vs mxbai-embed-large vs bge-m3).',
          '[RAG 설명](/ko/prompt-engineering/rag-explained) — 검색 레이어의 개념적 참조.',
          '[로컬 LLM 하드웨어 가이드 2026](/ko/local-llms/local-llm-hardware-guide-2026) — 최소 16 GB, 10K 항목 이상에서 32 GB 권장, 100K 이상에서 홈 서버를 위한 하드웨어 사이징.',
          '[로컬 LLM 소프트웨어 디렉토리 2026](/ko/power-local-llm/local-llm-software-directory-2026) — Ollama, ChromaDB, AnythingLLM, Obsidian 및 기타 스택 구성 요소의 디렉토리 목록.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 AI로 개인 지식 베이스 구축하기: 2026 스택 가이드',
      description: '로컬 AI 개인 지식 베이스 2026: 3가지 아키텍처 비교(Obsidian, AnythingLLM, Python + ChromaDB). 100,000개 이상 항목으로 확장. 캡처, RAG, 동기화, 백업.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-llm-personal-knowledge-base-2026',
      inLanguage: 'ko',
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
}
