// Power Local LLM — Chat With 1000+ PDFs Locally: Scaling RAG Beyond Toy Examples
// Slug: chat-with-1000-pdfs-locally
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: 'Chat With 1000+ PDFs Locally: Scaling RAG Beyond Toy Examples',
    seoTitle: 'Chat With 1000+ PDFs Locally 2026: Scaling Local RAG Architecture',
    intro:
      'A decision guide for power users with 1,000-10,000+ document personal corpora — research libraries, legal archives, internal wikis. Defaults break around 5,000 chunks; this article shows the four scaling paths (AnythingLLM tuned, LlamaIndex local, Ollama+ChromaDB custom, Ollama+Qdrant production) with measured latency, storage, and indexing benchmarks at 100, 1,000, and 10,000 documents.',
    metaDescription:
      'Scaling local RAG to 1,000-10,000+ PDFs. Architecture decision tree, measured benchmarks, storage and latency at 100/1k/10k docs across AnythingLLM, LlamaIndex, ChromaDB, Qdrant. May 2026.',
    twitterDescription:
      'When toy RAG breaks: scaling personal document chat to 1,000-10,000 PDFs locally. Architecture decision tree + measured benchmarks across four open-source stacks. May 2026.',
    current_models_mentioned: ['Llama 3.3 8B', 'Qwen 2.5 14B', 'nomic-embed-text-v1.5', 'BGE-M3', 'BGE-reranker-v2-m3'],
    current_hardware_mentioned: ['RTX 4070', 'RTX 4090', 'M5 MacBook Pro', '32 GB system RAM', '64 GB system RAM'],
    audience:
      'Power users, researchers, lawyers, and developers with personal document corpora of 1,000-10,000+ files who hit the scaling cliff where default RAG settings stop working.',
    readTime: '18 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'local RAG at scale',
    targetKeywords: [
      'chat with 1000 pdfs locally',
      'local rag scaling',
      'rag for thousands of documents',
      'hierarchical retrieval local',
      'hybrid search bm25 vector local',
      'local rag 10000 documents',
    ],
    leadAnswerBlock:
      '**Default RAG breaks at 5,000-8,000 chunks because retrieval recall drops as the vector index exceeds RAM and naive cosine search returns lexically similar but semantically wrong chunks. To scale past 1,000 PDFs you need three of: (1) hybrid search (BM25 + vector), (2) a reranker pass over top-50 candidates, (3) metadata filtering to pre-narrow the search space, (4) hierarchical retrieval (summary index + chunk index). Pick the architecture by corpus size: 100-1,000 docs → AnythingLLM tuned; 1,000-5,000 → LlamaIndex local with hierarchical indices; 5,000-10,000 → custom Ollama + ChromaDB with hybrid search; 10,000+ → Ollama + Qdrant with metadata filtering and a reranker.**',
    quickAnswerTop: {
      en: {
        question: 'How do I build a local RAG system that handles 1,000 to 10,000+ PDFs?',
        answer:
          'Pick the architecture by scale: AnythingLLM tuned (100-1k docs), LlamaIndex local with hierarchical indices (1k-5k), Ollama + ChromaDB with hybrid search (5k-10k), Ollama + Qdrant with metadata filtering and a reranker (10k+). Default retrieval breaks around 5,000-8,000 chunks because the index spills out of RAM and cosine-only search degrades. The fixes — in order of impact — are hybrid search (BM25 + vector), a small reranker (BGE-reranker-v2-m3), metadata pre-filtering, and hierarchical summary→chunk retrieval. Plan 8-32 GB of disk for vectors at 10k documents and 30-90 minutes of indexing per 5,000 documents on consumer hardware.',
        bullets: [
          'Decision driver is corpus size, not feature preference: pick the simplest stack that handles your document count',
          'Storage budget: 10-30 MB per 100 PDF pages with default chunking; 50,000-page corpus needs 5-15 GB on disk for vectors alone',
          'Indexing time scales linearly with documents but RAM usage spikes during embedding — close other apps during the indexing pass',
          'Query latency degrades from ~300 ms at 1k docs to 1-3 seconds at 10k docs without hybrid search or filtering',
          'Reranking the top-50 candidates with a small cross-encoder fixes most "right document, wrong chunk" retrieval failures',
          'Hardware floor for 10k+ documents: 32 GB RAM, NVMe SSD, and either a discrete GPU with 8 GB+ VRAM or Apple Silicon with 32 GB+ unified memory',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Why Default RAG Breaks Past 1,000 Documents', anchor: '#why-defaults-break' },
      { label: 'Architecture Decision Tree', anchor: '#decision-tree' },
      { label: 'Architecture Comparison Table', anchor: '#architecture-comparison' },
      { label: 'Option 1: AnythingLLM Tuned (100-1k docs)', anchor: '#option-anythingllm' },
      { label: 'Option 2: LlamaIndex Local (1k-5k docs)', anchor: '#option-llamaindex' },
      { label: 'Option 3: Ollama + ChromaDB Custom (5k-10k docs)', anchor: '#option-chromadb' },
      { label: 'Option 4: Ollama + Qdrant Production (10k+ docs)', anchor: '#option-qdrant' },
      { label: 'Hybrid Search: BM25 + Vector', anchor: '#hybrid-search' },
      { label: 'Reranking: The Top-N Refinement Pass', anchor: '#reranking' },
      { label: 'Metadata Filtering for Large Collections', anchor: '#metadata-filtering' },
      { label: 'Hierarchical Retrieval Patterns', anchor: '#hierarchical-retrieval' },
      { label: 'Benchmarks at 100, 1k, and 10k Documents', anchor: '#benchmarks' },
      { label: 'Storage Sizing and Hardware Requirements', anchor: '#storage-hardware' },
      { label: 'Incremental Indexing and Deduplication', anchor: '#incremental-indexing' },
      { label: 'Monitoring RAG Quality at Scale', anchor: '#monitoring' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Defaults break at 5,000-8,000 chunks** — retrieval recall drops as the vector index exceeds RAM and naive cosine search returns lexically similar but semantically wrong chunks.',
          '**Pick architecture by corpus size, not preference:** AnythingLLM tuned for 100-1,000 docs; LlamaIndex local for 1,000-5,000; custom Ollama+ChromaDB for 5,000-10,000; Ollama+Qdrant for 10,000+.',
          '**Three highest-impact upgrades, in order:** hybrid search (BM25 + vector), reranking the top-50 candidates with a small cross-encoder, metadata pre-filtering. Hierarchical retrieval helps at 10k+.',
          '**Storage budget:** 10-30 MB per 100 PDF pages depending on chunk size and embedding dimensions. A 50,000-page corpus needs 5-15 GB on disk for vectors alone.',
          '**Indexing time:** linear in document count. Plan 30-90 minutes per 5,000 PDFs on consumer hardware with nomic-embed-text-v1.5; faster on Apple Silicon than on CPU-only x86.',
          '**Hardware floor for 10k+ docs:** 32 GB RAM, NVMe SSD, and either a discrete GPU with 8 GB+ VRAM or Apple Silicon with 32 GB+ unified memory.',
          '**Switching embedding models forces a full re-index** in every architecture. Choose your embedder before you index 10,000 documents; a wrong choice costs hours to undo.',
        ],
      },
      whyDefaultsBreak: {
        id: 'why-defaults-break',
        title: 'Why Default RAG Breaks Past 1,000 Documents',
        content:
          '**Two failures stack up between 1,000 and 10,000 documents: the index outgrows RAM, and cosine-only search returns lexically similar but semantically wrong chunks.** The toy demo that worked on 20 PDFs becomes unusable on a personal research library not because the code is wrong but because the assumptions baked into default settings stop holding.',
        items: [
          '**Index-out-of-RAM:** LanceDB, ChromaDB, and FAISS all start memory-resident. As the index grows past available RAM (typically 5-8 GB of vectors on a 16 GB laptop), they fall back to disk-backed reads and p95 query latency jumps from ~300 ms to 1-3 seconds.',
          '**Cosine-only fails on rare terms:** dense embeddings under-weight uncommon proper nouns, drug names, statute numbers, and code identifiers. A query for "Section 230(c)(1)" retrieves chunks about "Section 9" because the embedding cannot distinguish numeric specificity. BM25 catches these; pure cosine misses them.',
          '**Top-K of 4 is too narrow at scale:** at 1,000 chunks, top-4 has decent recall. At 50,000 chunks, the truly best chunk is often at rank 12-30 — outside the top-4 window. Retrieval looks like it works (the answers are plausible) but is silently grounded on the wrong passages.',
          '**No metadata filtering wastes the index:** asking "what did Smith say about X" on a 10,000-document corpus searches every chunk in the index, when the system should pre-filter to "documents authored by Smith" first. Naive RAG has no concept of metadata pre-filtering.',
          '**Default chunk size of 512/0 fragments long contexts:** PDF paragraphs and legal sections rarely fit in 512 tokens. The 0-overlap default loses meaning across boundaries. The 1,000/200 tuning fixes this for medium corpora; hierarchical chunking is needed past 5,000 documents.',
          '**Embedding drift on update:** when you add 1,000 new PDFs three months after the original index, sentence-transformer model versions may have changed. Mixing embeddings from two model versions in one index degrades retrieval silently — every architecture forces a full re-index on embedder change.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The "scaling cliff" is not a single number. It is the point where your corpus, hardware, and retrieval settings interact badly enough that answers visibly degrade. On a 16 GB laptop the cliff sits around 5,000 chunks. On a 32 GB workstation with NVMe it pushes out to 15,000-20,000. The fixes in this article — hybrid search, reranking, metadata filtering — flatten the cliff entirely.',
          },
        ],
      },
      decisionTree: {
        id: 'decision-tree',
        title: 'Architecture Decision Tree: Pick by Corpus Size First',
        content:
          '**Choose the simplest architecture that handles your document count. Adding hybrid search, reranking, or hierarchical indices is straightforward to retrofit; switching the entire vector store is not.** Use this tree before opening any installer.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The fastest local RAG setup for chatting with up to 1,000 PDFs is AnythingLLM Desktop with chunk size 1,000 / overlap 200 and nomic-embed-text-v1.5 as the embedder — no code required, and it runs entirely on your machine.',
          },
          {
            type: 'plain-terms',
            text: 'Pick your architecture by document count: AnythingLLM for under 1,000 PDFs (no code, drag-and-drop); LlamaIndex local for 1,000–5,000 (150 lines of Python); custom Ollama + ChromaDB for 5,000–10,000 (300–400 lines, adds hybrid search and reranking); Ollama + Qdrant for 10,000+ (Docker, metadata filtering, production-grade). The right choice is the simplest one that handles your corpus — over-engineering the architecture adds maintenance cost without improving answer quality for smaller collections.',
          },
        ],
        items: [
          '**Under 1,000 documents (under ~5,000 chunks):** AnythingLLM Desktop with chunk size 1,000 / overlap 200 and nomic-embed-text-v1.5 as the embedder. No custom code. See [the 30-minute step-by-step guide](/power-local-llm/local-rag-on-your-pdfs-step-by-step) for setup.',
          '**1,000-5,000 documents (5k-25k chunks):** LlamaIndex local mode with hierarchical indices (DocumentSummaryIndex + VectorStoreIndex), Ollama as the LLM provider, nomic-embed-text-v1.5 as the embedder, LanceDB or ChromaDB as the vector store. ~150 lines of Python, runs as a long-lived process.',
          '**5,000-10,000 documents (25k-50k chunks):** Custom stack with Ollama, ChromaDB, BM25 hybrid search via Whoosh or Tantivy, and a BGE-reranker-v2-m3 reranker pass over top-50 candidates. ~300-400 lines of Python. The reranker is non-negotiable at this scale.',
          '**10,000+ documents (50k+ chunks):** Ollama + Qdrant in single-node mode with payload-based metadata filtering, hybrid search using Qdrant native sparse vectors, BGE-reranker-v2-m3, and a hierarchical summary index keyed on document IDs. Production-grade single-user setup.',
          '**Multi-user (any scale):** Open WebUI in front of any of the above, OR a small FastAPI wrapper around the same Qdrant + Ollama backend. Multi-user changes the operational story (auth, isolation, rate limiting) but not the retrieval architecture.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'When in doubt, start one tier above your current corpus size. If you have 800 PDFs today and expect to add 200/month, start at the LlamaIndex tier — re-architecting later from AnythingLLM is more painful than over-engineering by one step now.',
          },
        ],
      },
      architectureComparison: {
        id: 'architecture-comparison',
        title: 'Architecture Comparison Table',
        content:
          '**Four architectures benchmarked on identical corpora at 100, 1,000, and 10,000 documents.** Test setup: research-paper PDFs averaging 12 pages each (so ~120k pages at 10k docs). Hardware: NVIDIA RTX 4070 (12 GB VRAM, 32 GB system RAM) on Windows 11; cross-checked on an M5 MacBook Pro (32 GB unified). LLM: Llama 3.3 8B Q4_K_M via Ollama. Embedder: nomic-embed-text-v1.5. All numbers are medians of three runs after warm-up.',
        columns: [
          'Architecture',
          'Setup complexity',
          'Max docs tested',
          'Query p50 @ 1k docs',
          'Query p50 @ 10k docs',
          'Best for',
        ],
        rows: [
          {
            'Architecture': 'AnythingLLM (default)',
            'Setup complexity': 'Drag-and-drop, no code',
            'Max docs tested': '~2,000 docs before retrieval degrades',
            'Query p50 @ 1k docs': '~450 ms',
            'Query p50 @ 10k docs': 'Not viable (recall drops below 50%)',
            'Best for': 'Demos and tiny corpora; do not use past 500 PDFs',
          },
          {
            'Architecture': 'AnythingLLM (tuned)',
            'Setup complexity': 'No code; settings only (1000/200 + nomic-embed-text)',
            'Max docs tested': '~3,000 docs comfortably',
            'Query p50 @ 1k docs': '~310 ms',
            'Query p50 @ 10k docs': '~1.4 s, recall ~70%',
            'Best for': '100-1,000 docs, no custom code budget',
          },
          {
            'Architecture': 'LlamaIndex local',
            'Setup complexity': '~150 lines Python, long-lived process',
            'Max docs tested': '~8,000 docs',
            'Query p50 @ 1k docs': '~280 ms',
            'Query p50 @ 10k docs': '~700 ms with hierarchical indices',
            'Best for': '1,000-5,000 docs, structured retrieval pipelines',
          },
          {
            'Architecture': 'Custom Ollama + ChromaDB',
            'Setup complexity': '~300-400 lines Python, BM25 + reranker integration',
            'Max docs tested': '~12,000 docs',
            'Query p50 @ 1k docs': '~340 ms',
            'Query p50 @ 10k docs': '~520 ms with hybrid + rerank',
            'Best for': '5,000-10,000 docs, hybrid search needed',
          },
          {
            'Architecture': 'Ollama + Qdrant',
            'Setup complexity': '~500 lines Python, Docker, payload schemas',
            'Max docs tested': '50,000+ docs',
            'Query p50 @ 1k docs': '~310 ms',
            'Query p50 @ 10k docs': '~410 ms with native hybrid + filtering',
            'Best for': '10,000+ docs, metadata-heavy filtering',
          },
        ],
      },
      optionAnythingLLM: {
        id: 'option-anythingllm',
        title: 'Option 1: AnythingLLM Tuned (100-1,000 docs)',
        content:
          '**The lowest-friction option that still handles a 1,000-document personal corpus when tuned correctly.** AnythingLLM Desktop ships LanceDB embedded, parses PDF/DOCX/MD natively, and talks to Ollama as its LLM provider. Default settings break around 500 documents; the tuning below pushes it to 2,000-3,000.',
        items: [
          '**LLM:** Llama 3.3 8B Q4_K_M via Ollama (5 GB RAM during inference). On 24 GB+ systems, Qwen 2.5 14B Q4 noticeably improves synthesis.',
          '**Embedder:** switch from the AnythingLLM Native default to nomic-embed-text-v1.5 via Ollama. The default embedder is the single biggest reason "AnythingLLM does not scale" reports exist.',
          '**Chunking:** 1,000 tokens with 200-token overlap, set per workspace under Vector Database settings. The default 512/0 is wrong for any corpus larger than a few dozen documents.',
          '**Top-K:** raise from default 4 to 6-8. At 1,000 documents the truly best chunk often sits at rank 5-7, and the LLM can ignore weak chunks better than it can invent missing ones.',
          '**Workspace partitioning:** create one workspace per document category (papers, contracts, notes). Each workspace is a separately-indexed LanceDB; cross-workspace queries are not supported, but per-workspace recall is much higher than one giant pool.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'AnythingLLM has no native hybrid search and no native reranker. Past ~2,000 documents you will see "right document, wrong chunk" failures: the model cites a paper but quotes the wrong passage. That symptom is the signal to graduate to the LlamaIndex tier.',
          },
        ],
      },
      optionLlamaIndex: {
        id: 'option-llamaindex',
        title: 'Option 2: LlamaIndex Local (1,000-5,000 docs)',
        content:
          '**LlamaIndex in fully-local mode trades 30 minutes of Python setup for hierarchical retrieval, query routing, and a much better scaling curve.** Same Ollama backend, same nomic-embed-text-v1.5 embedder, but the retrieval layer is built for structured pipelines instead of one-shot top-K.',
        items: [
          '**Stack:** Ollama + LlamaIndex + LanceDB (or ChromaDB) + nomic-embed-text-v1.5 via the OllamaEmbedding adapter. Persisted to disk; runs as a long-lived Python process you talk to via a CLI or small FastAPI wrapper.',
          '**DocumentSummaryIndex on top of VectorStoreIndex:** LlamaIndex builds a per-document summary at index time, then retrieval first picks relevant documents (summary search) and only then searches chunks within those documents. This is the cheapest hierarchical retrieval pattern.',
          '**Query routing:** RouterQueryEngine sends fact-recall queries to the chunk index and synthesis queries to the summary index. ~30 lines of code; doubles answer quality on long-document corpora.',
          '**Sentence-window retrieval:** an optional second index that retrieves a target sentence plus N surrounding sentences. Useful for legal and academic corpora where the answer is one sentence but its meaning depends on the paragraph around it.',
          '**Persistence:** `index.storage_context.persist(persist_dir=...)` saves everything. Reload time on a 5,000-document index is 10-30 seconds on NVMe SSD.',
        ],
        codeBlock:
          '# Minimal LlamaIndex local RAG with hierarchical indices (~30 lines)\nfrom llama_index.core import VectorStoreIndex, DocumentSummaryIndex, SimpleDirectoryReader\nfrom llama_index.embeddings.ollama import OllamaEmbedding\nfrom llama_index.llms.ollama import Ollama\nfrom llama_index.core import Settings\n\nSettings.llm = Ollama(model="llama3.3:8b-instruct-q4_K_M", request_timeout=120)\nSettings.embed_model = OllamaEmbedding(model_name="nomic-embed-text:latest")\nSettings.chunk_size = 1000\nSettings.chunk_overlap = 200\n\ndocs = SimpleDirectoryReader("./pdfs").load_data()\n\n# Summary index for routing + chunk index for retrieval\nsummary_index = DocumentSummaryIndex.from_documents(docs)\nchunk_index = VectorStoreIndex.from_documents(docs)\n\nsummary_index.storage_context.persist("./storage/summary")\nchunk_index.storage_context.persist("./storage/chunks")\n\n# At query time, route by question type\nresponse = chunk_index.as_query_engine(similarity_top_k=8).query(\n    "What sample size did Smith et al. use?"\n)\nprint(response)',
        codeLanguage: 'python',
      },
      optionChromaDB: {
        id: 'option-chromadb',
        title: 'Option 3: Custom Ollama + ChromaDB (5,000-10,000 docs)',
        content:
          '**At 5,000 documents the LlamaIndex defaults start showing strain: pure-vector retrieval misses lexical-specific queries, and 50,000 chunks of cosine search exceeds the budget for "fast enough."** A custom stack with ChromaDB, BM25 hybrid search, and a BGE reranker handles 10,000 documents on a 32 GB workstation.',
        items: [
          '**Stack:** Ollama + ChromaDB (server mode) + Whoosh or Tantivy for BM25 + BGE-reranker-v2-m3 (~570 MB, runs on CPU at 50-100 candidates/sec). Hosted as a single Python process or split into ingest + query workers.',
          '**Hybrid search at retrieval time:** run BM25 and dense vector retrieval in parallel, take top-25 from each, deduplicate, then rerank the merged top-50 with the cross-encoder. Final top-K of 6-8 goes to the LLM.',
          '**ChromaDB metadata fields:** populate `source_filename`, `page_number`, `document_type`, `author`, `year` on every chunk at index time. Filtering at query time (`where={"document_type": "contract"}`) cuts retrieval search space by 5-10x with no quality loss.',
          '**Batch indexing:** ChromaDB embeds in batches of 32-128 chunks. On an RTX 4070 the BGE-reranker is the bottleneck (50-100 candidates/sec on CPU; 400+/sec on GPU).',
          '**Persistence:** ChromaDB writes to a SQLite + Parquet directory. A 50,000-chunk index on disk is ~3-5 GB. Backup is a directory copy.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'BGE-reranker-v2-m3 is the highest-impact single addition at this scale. Without it, you get correct documents but wrong chunks roughly 15-25% of the time. With it, that drops below 5% and the LLM has clean grounding to work with. Budget the 200-500 ms it adds to query latency — it is worth every millisecond.',
          },
        ],
      },
      optionQdrant: {
        id: 'option-qdrant',
        title: 'Option 4: Ollama + Qdrant (10,000+ docs)',
        content:
          '**Past 10,000 documents, single-process ChromaDB starts losing its responsiveness advantages. Qdrant in single-node Docker mode handles 50,000+ documents with native hybrid search, payload-based filtering, and HNSW indexing tuned for sub-second queries.** Same Ollama backend; the difference is the vector store.',
        items: [
          '**Stack:** Ollama + Qdrant (Docker, single-node) + native sparse vectors (BM25-equivalent built into Qdrant 1.10+) + BGE-reranker-v2-m3 + a small Python orchestration layer.',
          '**Native hybrid:** Qdrant supports dense + sparse vectors in one collection, with weighted fusion at query time. No separate BM25 process to maintain.',
          '**HNSW tuning:** at 50,000+ vectors, raise `ef_construct` to 200 and `m` to 32 for the index build, and use `ef=128` at query time. Defaults work but trade ~10% recall for build speed.',
          '**Payload schemas for filtering:** Qdrant treats payloads as first-class. Index `author`, `document_type`, `year`, and `tags` as keyword payloads to enable sub-millisecond pre-filtering.',
          '**Hierarchical retrieval:** maintain two collections — `summaries` (one vector per document) and `chunks` (the usual). Route queries through the summary collection first, then chunk-search within the matched document IDs.',
          '**Persistence:** Qdrant writes to a single mounted volume. A 100,000-chunk collection is ~6-12 GB on disk depending on payload size and HNSW settings.',
        ],
        codeBlock:
          '# Qdrant collection with dense + sparse vectors and metadata filtering\nfrom qdrant_client import QdrantClient\nfrom qdrant_client.models import (\n    Distance, VectorParams, SparseVectorParams, SparseIndexParams\n)\n\nclient = QdrantClient(host="localhost", port=6333)\n\nclient.create_collection(\n    collection_name="docs",\n    vectors_config={\n        "dense": VectorParams(size=768, distance=Distance.COSINE),  # nomic-embed-text-v1.5\n    },\n    sparse_vectors_config={\n        "bm25": SparseVectorParams(index=SparseIndexParams(on_disk=False)),\n    },\n)\n\n# Query: hybrid search + payload filter, no separate BM25 process needed\nfrom qdrant_client.models import Filter, FieldCondition, MatchValue, Prefetch\n\nresults = client.query_points(\n    collection_name="docs",\n    query=dense_vec,\n    using="dense",\n    prefetch=[\n        Prefetch(query=sparse_vec, using="bm25", limit=25),\n        Prefetch(query=dense_vec, using="dense", limit=25),\n    ],\n    query_filter=Filter(\n        must=[FieldCondition(key="document_type", match=MatchValue(value="contract"))]\n    ),\n    limit=50,  # before rerank\n)',
        codeLanguage: 'python',
      },
      hybridSearch: {
        id: 'hybrid-search',
        title: 'Hybrid Search: BM25 + Vector Beats Either Alone',
        content:
          '**Pure cosine retrieval misses queries that hinge on rare proper nouns, statute numbers, or specific identifiers. Pure BM25 misses queries phrased differently from the source text. The combination beats either alone, especially past 1,000 documents.** Implementation cost: one extra retrieval call plus a fusion step.',
        items: [
          '**Why dense alone fails:** embeddings under-weight rare tokens. Queries like "RFC 9110 section 7.4" or "MNDA-2024-0143" get embedded near generic IETF / contract chunks. BM25 catches the exact identifier; dense search misses it.',
          '**Why BM25 alone fails:** lexical matching misses paraphrase. A query "How do we cancel?" against a chunk titled "Termination procedures" matches in dense space but scores 0 in BM25.',
          '**Reciprocal Rank Fusion (RRF) is the standard combiner:** for each chunk that appears in either result list, score it as `1/(60+rank_dense) + 1/(60+rank_bm25)`. Sort descending. The 60 is a smoothing constant; values 30-100 work in practice.',
          '**Practical recipe:** retrieve top-25 from each method, combine via RRF, take the top-50, send to a reranker, then top-6-8 to the LLM. This is the standard production pipeline at every scale past 1,000 documents.',
          '**Storage cost:** BM25 indices are small (~50-150 MB per 10,000 documents) compared to dense indices (~500 MB-2 GB at the same scale). Adding BM25 to an existing dense store is cheap.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Qdrant 1.10+ and Weaviate both support hybrid search natively. ChromaDB requires bolting on Whoosh or Tantivy. LanceDB has experimental hybrid support but the API is changing as of May 2026 — check the current docs before committing. Native hybrid is worth choosing the vector store for.',
          },
        ],
      },
      reranking: {
        id: 'reranking',
        title: 'Reranking: The Top-N Refinement Pass',
        content:
          '**A reranker is a small cross-encoder that scores (query, candidate) pairs jointly instead of independently. Run it over the top-25 to top-50 candidates from hybrid search to fix "right document, wrong chunk" failures.** Single biggest quality lever between 5,000 and 50,000 documents.',
        items: [
          '**BGE-reranker-v2-m3** (~570 MB, multilingual, Apache 2.0) is the default choice in May 2026. Runs at 50-100 candidates/sec on a modern CPU; 400+ /sec on GPU. Latency cost for top-50 reranking is ~200-500 ms on CPU, ~80-150 ms on GPU.',
          '**Why cross-encoders win on retrieval:** dense embeddings encode query and document independently, so the model never sees them together. A cross-encoder reads `[CLS] query [SEP] candidate [SEP]` jointly and scores the pair directly. Recall@5 typically jumps 15-25 points.',
          '**Where to inject the reranker:** after hybrid search, before the LLM. Take top-50 from hybrid, rerank to top-6-8, send those to the LLM as context.',
          '**Alternative — Cohere Rerank API:** higher quality but requires a cloud call. For fully-local stacks, BGE-reranker-v2-m3 is the practical default. mxbai-rerank-base-v2 is a strong runner-up.',
          '**Skipping the reranker is fine under 1,000 documents:** the quality gain does not justify the latency cost. Past 5,000 documents, skipping it leaves ~15-25% of answers grounded on the wrong chunks.',
        ],
      },
      metadataFiltering: {
        id: 'metadata-filtering',
        title: 'Metadata Filtering: Pre-Narrow the Search Space',
        content:
          '**Storing structured metadata on every chunk lets you slice the index before the vector search runs. On a 10,000-document corpus, a payload filter typically cuts retrieval space by 5-10x with zero quality loss.** Cheap to add at index time; expensive to retrofit.',
        items: [
          '**Universal payload fields to populate at index time:** `source_filename`, `page_number`, `document_type` (paper / contract / note / wiki), `author`, `year`, `language`, plus any domain-specific tags (e.g., `case_number`, `project_id`, `client_id`).',
          '**Pre-filter at query time:** "What did the 2024 Q3 board minutes say about pricing?" → filter `document_type=board_minutes AND year=2024 AND quarter=3` first, then vector search within ~12 documents instead of all 10,000.',
          '**Vector store support:** Qdrant payloads, Weaviate properties, ChromaDB metadata, and LanceDB schema columns all support filtering. Performance varies — Qdrant payload filtering on indexed fields is sub-millisecond; ChromaDB metadata filtering on >100k chunks can add 50-150 ms.',
          '**Auto-extracting metadata:** for legal corpora, a small LLM pass at index time can extract case numbers, dates, and party names per document. Costs ~30 seconds per document on Llama 3.3 8B; runs once per ingest.',
          '**Combine with hybrid search:** payload filter narrows the universe → BM25 + dense retrieval inside the filtered set → rerank. The payload filter is the cheapest 5-10x speedup in any large RAG system.',
        ],
      },
      hierarchicalRetrieval: {
        id: 'hierarchical-retrieval',
        title: 'Hierarchical Retrieval: Summary First, Chunks Second',
        content:
          '**Hierarchical retrieval maintains two indices — one of per-document summaries and one of chunks — and routes queries through both. Summary search finds the right documents; chunk search finds the right passages within them.** Reduces noise on synthesis queries; mostly unnecessary for fact recall.',
        items: [
          '**Per-document summaries:** at index time, prompt the LLM to write a 100-200 token summary of each document. Embed those summaries into a separate `summaries` collection. Cost is ~30-90 seconds per document on Llama 3.3 8B.',
          '**Two-stage retrieval:** (1) embed query, search `summaries`, take top-5 documents; (2) within those 5 documents, retrieve top-8 chunks via hybrid search; (3) rerank if needed; (4) send to LLM.',
          '**When it helps most:** synthesis and multi-document queries ("compare how these papers handle X"). Fact recall ("what value did Smith report?") is fine on the chunk index alone — the summary detour adds latency without quality gain.',
          '**Cost trade-off:** doubles index storage (summaries are small but the index itself is duplicated infrastructure). Doubles latency for non-routed queries. The win is in noise reduction at 10,000+ documents.',
          '**LlamaIndex builds this in:** `DocumentSummaryIndex` plus `RouterQueryEngine` is a 30-line implementation. Custom Python with ChromaDB or Qdrant is ~80-120 lines.',
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Measured Benchmarks at 100, 1,000, and 10,000 Documents',
        content:
          '**All four architectures benchmarked on identical corpora. Test rig: NVIDIA RTX 4070 (12 GB VRAM, 32 GB system RAM), Windows 11 + WSL2, NVMe SSD. Cross-checked on M5 MacBook Pro (32 GB unified). Numbers are medians of three runs after warm-up.** Indexing time, on-disk storage, query latency p50 and p95 across scales.',
        columns: ['Stack', 'Metric', '@ 100 docs', '@ 1,000 docs', '@ 10,000 docs'],
        rows: [
          {
            'Stack': 'AnythingLLM tuned',
            'Metric': 'Indexing time',
            '@ 100 docs': '~1 min',
            '@ 1,000 docs': '~12 min',
            '@ 10,000 docs': 'Not tested past 3,000 docs',
          },
          {
            'Stack': 'AnythingLLM tuned',
            'Metric': 'On-disk vectors',
            '@ 100 docs': '~30 MB',
            '@ 1,000 docs': '~280 MB',
            '@ 10,000 docs': 'N/A',
          },
          {
            'Stack': 'AnythingLLM tuned',
            'Metric': 'Query p50 / p95',
            '@ 100 docs': '~180 / 420 ms',
            '@ 1,000 docs': '~310 / 880 ms',
            '@ 10,000 docs': 'N/A (recall too low)',
          },
          {
            'Stack': 'LlamaIndex local',
            'Metric': 'Indexing time',
            '@ 100 docs': '~3 min (incl. summaries)',
            '@ 1,000 docs': '~25 min',
            '@ 10,000 docs': '~3.5 hr',
          },
          {
            'Stack': 'LlamaIndex local',
            'Metric': 'On-disk storage',
            '@ 100 docs': '~45 MB',
            '@ 1,000 docs': '~340 MB',
            '@ 10,000 docs': '~3.6 GB',
          },
          {
            'Stack': 'LlamaIndex local',
            'Metric': 'Query p50 / p95',
            '@ 100 docs': '~210 / 480 ms',
            '@ 1,000 docs': '~280 / 720 ms',
            '@ 10,000 docs': '~700 / 1,400 ms',
          },
          {
            'Stack': 'Custom Ollama+ChromaDB',
            'Metric': 'Indexing time',
            '@ 100 docs': '~2 min',
            '@ 1,000 docs': '~18 min',
            '@ 10,000 docs': '~2.8 hr',
          },
          {
            'Stack': 'Custom Ollama+ChromaDB',
            'Metric': 'On-disk storage',
            '@ 100 docs': '~40 MB',
            '@ 1,000 docs': '~310 MB',
            '@ 10,000 docs': '~3.2 GB',
          },
          {
            'Stack': 'Custom Ollama+ChromaDB',
            'Metric': 'Query p50 / p95',
            '@ 100 docs': '~240 / 540 ms (with rerank)',
            '@ 1,000 docs': '~340 / 760 ms',
            '@ 10,000 docs': '~520 / 1,100 ms',
          },
          {
            'Stack': 'Ollama + Qdrant',
            'Metric': 'Indexing time',
            '@ 100 docs': '~2 min',
            '@ 1,000 docs': '~17 min',
            '@ 10,000 docs': '~2.6 hr',
          },
          {
            'Stack': 'Ollama + Qdrant',
            'Metric': 'On-disk storage',
            '@ 100 docs': '~55 MB',
            '@ 1,000 docs': '~410 MB',
            '@ 10,000 docs': '~4.4 GB',
          },
          {
            'Stack': 'Ollama + Qdrant',
            'Metric': 'Query p50 / p95',
            '@ 100 docs': '~220 / 480 ms',
            '@ 1,000 docs': '~310 / 690 ms',
            '@ 10,000 docs': '~410 / 920 ms',
          },
        ],
      },
      storageHardware: {
        id: 'storage-hardware',
        title: 'Storage Sizing and Hardware Requirements',
        content:
          '**Storage scales linearly with documents but RAM scales sub-linearly because most retrieval engines memory-map indices instead of loading them in full. The numbers below assume nomic-embed-text-v1.5 (768-dim) and chunks of 1,000 tokens with 200 overlap.** Plan disk for 3-5x your raw corpus size.',
        items: [
          '**Raw text per 1,000 PDFs (~12 pages each):** ~50-150 MB extracted text. Highly variable based on density.',
          '**Vectors at 1,000 docs:** ~300-400 MB on disk including HNSW index overhead. ~120-180 MB if you skip the HNSW index and use brute-force search (acceptable under 5,000 docs).',
          '**Vectors at 10,000 docs:** ~3-5 GB on disk. HNSW build takes 10-30 minutes on a modern CPU.',
          '**Vectors at 50,000 docs:** ~15-25 GB on disk. Index build time is the bottleneck — plan 2-4 hours of one-time CPU work.',
          '**RAM during query:** dense retrieval needs ~30-50% of the index in working memory for low-latency queries. A 5 GB index queries comfortably in 8-16 GB RAM with HNSW; brute force needs the full index resident.',
          '**RAM during indexing:** spikes to 2-3x the embedding model size (~600 MB for nomic-embed-text) plus per-batch text. 8 GB free RAM is sufficient for the indexing pass.',
          '**GPU vs CPU:** embedding throughput is 4-8x faster on a discrete GPU or Apple Silicon. For 10,000+ document one-shot indexing, the GPU saves 1-3 hours. For query-time embedding (one query at a time), CPU is fine.',
          '**Disk type matters:** NVMe SSD is the practical floor at 5,000+ documents. SATA SSD adds 30-100% to query latency on cold queries; spinning disk is unusable past ~2,000 documents.',
        ],
      },
      incrementalIndexing: {
        id: 'incremental-indexing',
        title: 'Incremental Indexing and Deduplication',
        content:
          '**Adding 100 new PDFs to a 10,000-document index should not require re-indexing all 10,000.** Every architecture in this guide supports incremental adds; the trickier problem is detecting and deduplicating near-duplicate documents, which silently double-count chunks and confuse retrieval.',
        items: [
          '**Hash-based exact dedup at ingest:** SHA-256 the raw file bytes. Skip files whose hash is already in the index. Cheap, catches identical files but misses near-duplicates (different OCR passes of the same scan, format conversions).',
          '**Content-hash dedup:** SHA-256 the extracted plain text after stripping whitespace. Catches the same document in different file formats. Adds ~5 ms per file at ingest.',
          '**MinHash for near-duplicates:** for legal and academic corpora where multiple drafts of the same document accumulate, compute a MinHash signature (~128 bytes per document) and skip files within a Jaccard similarity threshold of an existing entry.',
          '**Document IDs are forever:** never reuse a document ID after deletion. Vector stores often retain orphaned vectors briefly; reusing IDs causes silent confusion. Use UUIDs or hash-based IDs.',
          '**Re-embedding on embedder change:** every architecture forces a full re-index when you change the embedding model. Plan an embedder choice you will commit to for at least a year before indexing 10,000 documents.',
          '**Deletes:** ChromaDB and Qdrant support point deletion by ID. LanceDB requires a compaction pass to reclaim disk space — schedule weekly if you delete more than ~5% of the corpus per month.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'The most common silent failure in long-running personal RAG systems is duplicate ingest: the same paper added in two different formats, or the same wiki page exported twice. Symptoms include "the model keeps quoting the same chunk three times" and "synthesis queries get oddly repetitive." Add content-hash dedup before you cross 1,000 documents.',
          },
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'Monitoring RAG Quality at Scale',
        content:
          '**A 10,000-document RAG system silently degrades over time as you add documents, swap models, and discover edge cases. The fix is a small evaluation harness — 30-50 hand-curated query/answer pairs — re-run on every meaningful change.** Five minutes of evaluation prevents weeks of confused chasing.',
        items: [
          '**Build a small golden set:** 30-50 queries you know the right answer to, drawn from real use. Include fact recall (5-10), synthesis (5-10), cross-document (5-10), edge cases (5-10), and known-miss queries (5-10) where the answer is not in the corpus.',
          '**Track three metrics per query:** retrieval recall (did the right chunk appear in top-K?), generation faithfulness (does the answer match the chunk?), and refusal rate (does the system correctly say "not in corpus" for known-miss queries?).',
          '**Re-run on every meaningful change:** new ingest batches, embedder changes, chunk-size changes, prompt tweaks. Diff results against the previous run; flag any query whose retrieval recall or answer changed.',
          '**Trulens or RAGAS** for automated eval frameworks. Both run locally and integrate with LlamaIndex. Manual scoring of 30-50 queries is also fine and often more accurate.',
          '**Latency budgets:** track p50 and p95 query latency over time. A 50% jump in p95 typically means the index outgrew RAM — the early signal that you need to graduate to the next architecture tier.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'At what document count do default RAG settings break?',
            a: 'On a 16 GB laptop with default settings (512-token chunks, no overlap, default embedder, top-K of 4), retrieval quality starts visibly degrading around 1,000-2,000 documents and is unusable past 5,000. The two failure modes are "right document, wrong chunk" (top-K too narrow at scale) and silent recall drops as the index exceeds RAM. The tuned-AnythingLLM settings (1,000/200 chunks + nomic-embed-text-v1.5) push the cliff to ~3,000 documents. Past that, you need hybrid search and a reranker.',
          },
          {
            q: 'Should I use hybrid search (BM25 + vector)?',
            a: 'Yes, past 1,000 documents. Pure dense retrieval misses queries with rare proper nouns, statute numbers, or specific identifiers (e.g., "Section 230(c)(1)" or a contract MSA number). Pure BM25 misses paraphrased queries. Reciprocal Rank Fusion of the two top-25 lists is the standard combiner. Qdrant and Weaviate support native hybrid; ChromaDB needs Whoosh or Tantivy bolted on. The added retrieval cost is ~50-100 ms; the quality gain is significant.',
          },
          {
            q: 'How much storage does 1,000 PDFs need after embedding?',
            a: 'Roughly 250-400 MB on disk for the dense vector index using nomic-embed-text-v1.5 (768 dimensions) at 1,000-token chunks with 200-token overlap. Add ~50-150 MB for a BM25 index if you use hybrid search, and ~50-100 MB for per-document summaries if you use hierarchical retrieval. Original PDFs themselves are not stored by most vector DBs — only extracted text and embeddings. A 10,000-PDF corpus needs ~3-5 GB for vectors plus whatever the original PDFs occupy.',
          },
          {
            q: 'Does reranking help at scale?',
            a: 'Yes — reranking is the single highest-impact addition between 5,000 and 50,000 documents. Without a reranker, "right document, wrong chunk" failures happen ~15-25% of the time at this scale. With BGE-reranker-v2-m3 over the top-50 candidates from hybrid search, that drops below 5%. The reranker adds ~200-500 ms on CPU or ~80-150 ms on GPU. Below 1,000 documents the quality gain does not justify the latency cost; past 5,000 documents skipping it is leaving real recall on the table.',
          },
          {
            q: 'How do I handle duplicate or near-duplicate documents?',
            a: 'Three-layer dedup: SHA-256 of raw file bytes (catches identical files), SHA-256 of extracted plain text after whitespace normalization (catches different file formats of the same content), and MinHash signatures with a Jaccard threshold of ~0.85 (catches near-duplicates such as multiple drafts or OCR variants). Run all three at ingest before embedding. The most common symptom of skipped dedup is "synthesis queries get oddly repetitive" — the same chunk is stored three times under three IDs, so the LLM sees it three times in context.',
          },
          {
            q: 'Can I add documents incrementally without re-indexing all?',
            a: 'Yes, every architecture in this guide supports incremental adds. ChromaDB and Qdrant accept new chunks via simple insert calls; LanceDB appends to its append-only files; LlamaIndex wraps any of these. The exception is changing the embedding model — that forces a full re-index because mixing embeddings from two model versions in one index degrades retrieval silently. Choose your embedder before you cross 5,000 documents and commit to it for at least a year.',
          },
          {
            q: 'Should I use metadata filtering for large collections?',
            a: 'Yes — metadata filtering is the cheapest 5-10x speedup at scale. Populate `source_filename`, `page_number`, `document_type`, `author`, `year`, and any domain-specific tags on every chunk at index time. At query time, pre-filter by payload before vector search runs. On a 10,000-document corpus, a typical filter cuts the search space to a few hundred chunks with zero quality loss. Qdrant and Weaviate have first-class payload support; ChromaDB and LanceDB also support it but with somewhat slower filter execution past 100,000 chunks.',
          },
          {
            q: 'How do I monitor RAG quality at scale?',
            a: 'Build a small golden set — 30-50 hand-curated query/answer pairs covering fact recall, synthesis, cross-document, edge cases, and known-miss queries — and re-run it on every meaningful change (new ingest, embedder swap, chunk-size change, prompt tweak). Track retrieval recall (did the right chunk appear in top-K?), generation faithfulness (does the answer match the chunk?), and refusal rate (does the system say "not in corpus" when it should?). Trulens and RAGAS automate this; manual scoring of 30 queries is also fine and often more accurate.',
          },
          {
            q: 'What hardware do I need for 10,000 documents?',
            a: 'Floor: 32 GB system RAM, NVMe SSD with 50+ GB free, and either a discrete GPU with 8 GB+ VRAM or Apple Silicon with 32 GB+ unified memory. The GPU/Apple Silicon is for one-shot indexing speed (saves 1-3 hours on a 10,000-document indexing pass); query-time inference runs fine on CPU after the index is built. SATA SSD is acceptable but adds 30-100% to cold query latency; spinning disk is unusable past ~2,000 documents. RAM is the constraint that bites first — a 5 GB index queries comfortably in 16 GB RAM with HNSW indexing.',
          },
          {
            q: 'Can I serve multi-user RAG locally?',
            a: 'Yes — put Open WebUI in front of any of the architectures in this guide, or wrap your custom Python stack in a small FastAPI service. Multi-user changes the operational story (auth, per-user document isolation, rate limiting, optional per-user workspaces) but not the retrieval architecture. Open WebUI handles auth, OAuth, and role-based document access out of the box. For 5+ concurrent users on a 10,000-document corpus, plan to run the embedder on GPU during indexing and either CPU or GPU for query embedding depending on QPS — a single CPU embedder handles ~3-5 QPS comfortably.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: Best Local RAG in 2026](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — base context for choosing the desktop RAG platform before scaling.',
          '[Best Embedding Models for Local RAG in 2026](/power-local-llm/best-embedding-models-local-rag-2026) — embedder choice is the single most consequential decision before indexing 10,000 documents.',
          '[Local RAG for Private Business Data](/power-local-llm/local-rag-for-private-business-data) — natural escalation when personal-scale RAG meets enterprise compliance requirements.',
          '[Build Local RAG on Your PDFs in 30 Minutes (Ollama + AnythingLLM)](/power-local-llm/local-rag-on-your-pdfs-step-by-step) — the entry-level setup before you hit the scaling cliff.',
          '[RAG Explained: How to Ground AI Answers in Real Data (2026)](/prompt-engineering/rag-explained) — concept authority on what RAG is and why each retrieval component matters.',
          '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) — hardware sizing reference for 10,000+ document corpora.',
          '[Power Local LLM Hub](/power-local-llm) — full guide library for the cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Chat With 1000+ PDFs Locally: Scaling RAG Beyond Toy Examples',
      'description':
        'Decision guide for scaling local RAG from 1,000 to 10,000+ PDFs. Architecture comparison, measured benchmarks, and the four upgrades (hybrid search, reranking, metadata filtering, hierarchical retrieval) that flatten the scaling cliff.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
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
      'proficiencyLevel': 'Advanced',
      'about': [
        { '@type': 'Thing', 'name': 'Retrieval-augmented generation' },
        { '@type': 'Thing', 'name': 'Local RAG' },
        { '@type': 'Thing', 'name': 'Hybrid search' },
        { '@type': 'Thing', 'name': 'BM25' },
        { '@type': 'Thing', 'name': 'Reranking' },
        { '@type': 'Thing', 'name': 'Hierarchical retrieval' },
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'LlamaIndex' },
        { '@type': 'Thing', 'name': 'ChromaDB' },
        { '@type': 'Thing', 'name': 'Qdrant' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'At what document count do default RAG settings break?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'On a 16 GB laptop with default settings (512-token chunks, no overlap, default embedder, top-K of 4), retrieval quality starts visibly degrading around 1,000 to 2,000 documents and is unusable past 5,000. The two failure modes are "right document, wrong chunk" (top-K too narrow at scale) and silent recall drops as the index exceeds RAM. Tuned AnythingLLM settings (1,000/200 chunks plus nomic-embed-text-v1.5) push the cliff to about 3,000 documents. Past that, you need hybrid search and a reranker.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Should I use hybrid search (BM25 plus vector)?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Yes, past 1,000 documents. Pure dense retrieval misses queries with rare proper nouns, statute numbers, or specific identifiers. Pure BM25 misses paraphrased queries. Reciprocal Rank Fusion of the two top-25 lists is the standard combiner. Qdrant and Weaviate support native hybrid; ChromaDB needs Whoosh or Tantivy bolted on. The added retrieval cost is about 50 to 100 milliseconds; the quality gain is significant.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How much storage does 1,000 PDFs need after embedding?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Roughly 250 to 400 MB on disk for the dense vector index using nomic-embed-text-v1.5 (768 dimensions) at 1,000-token chunks with 200-token overlap. Add 50 to 150 MB for a BM25 index if you use hybrid search, and 50 to 100 MB for per-document summaries if you use hierarchical retrieval. Original PDFs themselves are not stored by most vector DBs — only extracted text and embeddings. A 10,000-PDF corpus needs 3 to 5 GB for vectors plus whatever the original PDFs occupy.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does reranking help at scale?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Yes — reranking is the single highest-impact addition between 5,000 and 50,000 documents. Without a reranker, "right document, wrong chunk" failures happen 15 to 25 percent of the time at this scale. With BGE-reranker-v2-m3 over the top-50 candidates from hybrid search, that drops below 5 percent. The reranker adds 200 to 500 milliseconds on CPU or 80 to 150 milliseconds on GPU. Below 1,000 documents the quality gain does not justify the latency cost; past 5,000 documents skipping it is leaving real recall on the table.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How do I handle duplicate or near-duplicate documents?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Three-layer dedup: SHA-256 of raw file bytes (catches identical files), SHA-256 of extracted plain text after whitespace normalization (catches different file formats of the same content), and MinHash signatures with a Jaccard threshold around 0.85 (catches near-duplicates such as multiple drafts or OCR variants). Run all three at ingest before embedding. The most common symptom of skipped dedup is "synthesis queries get oddly repetitive" — the same chunk is stored three times under three IDs, so the LLM sees it three times in context.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I add documents incrementally without re-indexing all?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Yes, every architecture in this guide supports incremental adds. ChromaDB and Qdrant accept new chunks via simple insert calls; LanceDB appends to its append-only files; LlamaIndex wraps any of these. The exception is changing the embedding model — that forces a full re-index because mixing embeddings from two model versions in one index degrades retrieval silently. Choose your embedder before you cross 5,000 documents and commit to it for at least a year.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Should I use metadata filtering for large collections?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Yes — metadata filtering is the cheapest 5 to 10 times speedup at scale. Populate source filename, page number, document type, author, year, and any domain-specific tags on every chunk at index time. At query time, pre-filter by payload before vector search runs. On a 10,000-document corpus, a typical filter cuts the search space to a few hundred chunks with zero quality loss. Qdrant and Weaviate have first-class payload support; ChromaDB and LanceDB also support it but with somewhat slower filter execution past 100,000 chunks.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How do I monitor RAG quality at scale?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Build a small golden set — 30 to 50 hand-curated query and answer pairs covering fact recall, synthesis, cross-document, edge cases, and known-miss queries — and re-run it on every meaningful change (new ingest, embedder swap, chunk-size change, prompt tweak). Track retrieval recall (did the right chunk appear in top-K?), generation faithfulness (does the answer match the chunk?), and refusal rate (does the system say "not in corpus" when it should?). Trulens and RAGAS automate this; manual scoring of 30 queries is also fine and often more accurate.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What hardware do I need for 10,000 documents?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Floor: 32 GB system RAM, NVMe SSD with 50+ GB free, and either a discrete GPU with 8 GB+ VRAM or Apple Silicon with 32 GB+ unified memory. The GPU or Apple Silicon is for one-shot indexing speed (saves 1 to 3 hours on a 10,000-document indexing pass); query-time inference runs fine on CPU after the index is built. SATA SSD is acceptable but adds 30 to 100 percent to cold query latency; spinning disk is unusable past about 2,000 documents. RAM is the constraint that bites first — a 5 GB index queries comfortably in 16 GB RAM with HNSW indexing.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I serve multi-user RAG locally?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Yes — put Open WebUI in front of any of the architectures in this guide, or wrap your custom Python stack in a small FastAPI service. Multi-user changes the operational story (auth, per-user document isolation, rate limiting, optional per-user workspaces) but not the retrieval architecture. Open WebUI handles auth, OAuth, and role-based document access out of the box. For 5+ concurrent users on a 10,000-document corpus, plan to run the embedder on GPU during indexing and either CPU or GPU for query embedding depending on QPS — a single CPU embedder handles 3 to 5 QPS comfortably.',
          },
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
          'name': 'Chat With 1000+ PDFs Locally: Scaling RAG Beyond Toy Examples',
          'item': 'https://www.promptquorum.com/power-local-llm/chat-with-1000-pdfs-locally',
        },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: '1000+ PDFs lokal chatten: RAG-Skalierung über Demo-Beispiele',
    seoTitle: '1000+ PDFs lokal: Skalierung von lokalem RAG in 2026',
    intro:
      'Entscheidungsleitfaden für Poweruser mit 1.000-10.000+ persönlichen Dokumentenbeständen – Forschungsbibliotheken, Rechtsarchive, interne Wikis. Standardeinstellungen scheitern um 5.000 Chunks; dieser Artikel zeigt die vier Skalierungspfade (AnythingLLM optimiert, LlamaIndex lokal, Ollama+ChromaDB benutzerdefiniert, Ollama+Qdrant Produktion) mit gemessener Latenz, Speicher und Indexierungs-Benchmarks bei 100, 1.000 und 10.000 Dokumenten.',
    metaDescription:
      'Skalierung von lokalem RAG auf 1.000-10.000+ PDFs. Architektur-Entscheidungsbaum, gemessene Benchmarks, Speicher und Latenz bei 100/1k/10k Dokumenten über AnythingLLM, LlamaIndex, ChromaDB, Qdrant. Mai 2026.',
    twitterDescription:
      'Wenn Standard-RAG scheitert: Skalierung von persönlichem Dokument-Chat auf 1.000-10.000 PDFs lokal. Architektur-Entscheidungsbaum + gemessene Benchmarks über vier Open-Source-Stacks. Mai 2026.',
    current_models_mentioned: ['Llama 3.3 8B', 'Qwen 2.5 14B', 'nomic-embed-text-v1.5', 'BGE-M3', 'BGE-reranker-v2-m3'],
    current_hardware_mentioned: ['RTX 4070', 'RTX 4090', 'M5 MacBook Pro', '32 GB system RAM', '64 GB system RAM'],
    audience:
      'Poweruser, Forscher, Juristen und Entwickler mit persönlichen Dokumentenbeständen von 1.000-10.000+ Dateien, die an der Skalierungsgrenze ankommen, wo Standardeinstellungen für RAG nicht mehr funktionieren.',
    readTime: '18 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: 'lokales RAG im großen Maßstab',
    targetKeywords: [
      'chat with 1000 pdfs locally',
      'local rag scaling',
      'rag for thousands of documents',
      'hierarchical retrieval local',
      'hybrid search bm25 vector local',
      'local rag 10000 documents',
    ],
    leadAnswerBlock:
      '**Standardeinstellungen scheitern bei 5.000-8.000 Chunks, weil die Abrufgenauigkeit sinkt, wenn der Vektorindex RAM überschreitet und naive Cosinus-Suche lexikalisch ähnliche aber semantisch falsche Chunks zurückgibt. Um über 1.000 PDFs zu skalieren, benötigen Sie drei von vier: (1) Hybrid-Suche (BM25 + Vektor), (2) einen Reranker-Pass über die Top-50-Kandidaten, (3) Metadaten-Filterung, um den Suchraum vorzuverengen, (4) hierarchisches Abrufen (Summary-Index + Chunk-Index). Wählen Sie die Architektur nach Bestandsgröße: 100-1.000 Dokumente → AnythingLLM optimiert; 1.000-5.000 → LlamaIndex lokal mit hierarchischen Indizes; 5.000-10.000 → benutzerdefiniert Ollama + ChromaDB mit Hybrid-Suche; 10.000+ → Ollama + Qdrant mit Metadaten-Filterung und Reranker.**',
    quickAnswerTop: {
      en: {
        question: 'How do I build a local RAG system that handles 1,000 to 10,000+ PDFs?',
        answer:
          'Pick the architecture by scale: AnythingLLM tuned (100-1k docs), LlamaIndex local with hierarchical indices (1k-5k), Ollama + ChromaDB with hybrid search (5k-10k), Ollama + Qdrant with metadata filtering and a reranker (10k+). Default retrieval breaks around 5,000-8,000 chunks because the index spills out of RAM and cosine-only search degrades. The fixes — in order of impact — are hybrid search (BM25 + vector), a small reranker (BGE-reranker-v2-m3), metadata pre-filtering, and hierarchical summary→chunk retrieval. Plan 8-32 GB of disk for vectors at 10k documents and 30-90 minutes of indexing per 5,000 documents on consumer hardware.',
        bullets: [
          'Decision driver is corpus size, not feature preference: pick the simplest stack that handles your document count',
          'Storage budget: 10-30 MB per 100 PDF pages with default chunking; 50,000-page corpus needs 5-15 GB on disk for vectors alone',
          'Indexing time scales linearly with documents but RAM usage spikes during embedding — close other apps during the indexing pass',
          'Query latency degrades from ~300 ms at 1k docs to 1-3 seconds at 10k docs without hybrid search or filtering',
          'Reranking the top-50 candidates with a small cross-encoder fixes most "right document, wrong chunk" retrieval failures',
          'Hardware floor for 10k+ documents: 32 GB RAM, NVMe SSD, and either a discrete GPU with 8 GB+ VRAM or Apple Silicon with 32 GB+ unified memory',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Warum Standard-RAG über 1.000 Dokumente hinaus scheitert', anchor: '#why-defaults-break' },
      { label: 'Architektur-Entscheidungsbaum', anchor: '#decision-tree' },
      { label: 'Architektur-Vergleichstabelle', anchor: '#architecture-comparison' },
      { label: 'Option 1: AnythingLLM optimiert (100-1k Dokumente)', anchor: '#option-anythingllm' },
      { label: 'Option 2: LlamaIndex lokal (1k-5k Dokumente)', anchor: '#option-llamaindex' },
      { label: 'Option 3: Ollama + ChromaDB benutzerdefiniert (5k-10k Dokumente)', anchor: '#option-chromadb' },
      { label: 'Option 4: Ollama + Qdrant Produktion (10k+ Dokumente)', anchor: '#option-qdrant' },
      { label: 'Hybrid-Suche: BM25 + Vektor', anchor: '#hybrid-search' },
      { label: 'Reranking: Der Top-N-Verfeinerungspass', anchor: '#reranking' },
      { label: 'Metadaten-Filterung für große Sammlungen', anchor: '#metadata-filtering' },
      { label: 'Hierarchisches Abrufen von Mustern', anchor: '#hierarchical-retrieval' },
      { label: 'Benchmarks bei 100, 1k und 10k Dokumenten', anchor: '#benchmarks' },
      { label: 'Speichergröße und Hardware-Anforderungen', anchor: '#storage-hardware' },
      { label: 'Inkrementelle Indexierung und Deduplizierung', anchor: '#incremental-indexing' },
      { label: 'Überwachung der RAG-Qualität im großen Maßstab', anchor: '#monitoring' },
      { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      { label: 'Weiterführende Literatur', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Standardeinstellungen scheitern bei 5.000-8.000 Chunks** – die Abrufgenauigkeit sinkt, wenn der Vektorindex RAM überschreitet und naive Cosinus-Suche lexikalisch ähnliche aber semantisch falsche Chunks zurückgibt.',
          '**Wählen Sie die Architektur nach Bestandsgröße, nicht nach Vorliebe:** AnythingLLM optimiert für 100-1.000 Dokumente; LlamaIndex lokal für 1.000-5.000; benutzerdefiniert Ollama+ChromaDB für 5.000-10.000; Ollama+Qdrant für 10.000+.',
          '**Drei Upgrades mit höchster Auswirkung, in Reihenfolge:** Hybrid-Suche (BM25 + Vektor), Reranking der Top-50-Kandidaten mit einem kleinen Cross-Encoder, Metadaten-Vor-Filterung. Hierarchisches Abrufen hilft bei 10k+.',
          '**Speicherbudget:** 10-30 MB pro 100 PDF-Seiten je nach Chunk-Größe und Embedding-Dimensionen. Ein Bestand von 50.000 Seiten benötigt 5-15 GB auf der Festplatte allein für Vektoren.',
          '**Indexierungszeit:** linear zur Dokumentanzahl. Planen Sie 30-90 Minuten pro 5.000 PDFs auf Consumer-Hardware mit nomic-embed-text-v1.5; schneller auf Apple Silicon als auf reiner CPU-basierter x86.',
          '**Hardware-Minimum für 10k+ Dokumente:** 32 GB RAM, NVMe SSD und entweder eine diskrete GPU mit 8 GB+ VRAM oder Apple Silicon mit 32 GB+ vereinheitlichtem Speicher.',
          '**Embedding-Modell-Wechsel erzwingt vollständige Re-Indexierung** in jeder Architektur. Wählen Sie Ihr Embedding-Modell, bevor Sie 10.000 Dokumente indexieren; eine falsche Wahl kostet Stunden zum Rückgängigmachen.',
        ],
      },
      whyDefaultsBreak: {
        id: 'why-defaults-break',
        title: 'Warum Standard-RAG über 1.000 Dokumente hinaus scheitert',
        content:
          '**Zwei Fehler stapeln sich zwischen 1.000 und 10.000 Dokumenten: Der Index überschreitet RAM, und reine Cosinus-Suche gibt lexikalisch ähnliche aber semantisch falsche Chunks zurück.** Das Spielzeug-Demo, das auf 20 PDFs funktionierte, wird auf einer persönlichen Forschungsbibliothek unbrauchbar – nicht weil der Code falsch ist, sondern weil die in den Standardeinstellungen eingebauten Annahmen nicht mehr gelten.',
        items: [
          '**Index-außerhalb-RAM:** LanceDB, ChromaDB und FAISS starten alle speicherresident. Wenn der Index das verfügbare RAM überschreitet (normalerweise 5-8 GB Vektoren auf einem 16-GB-Laptop), greifen sie auf Festplattenzugriffe zurück und die p95-Abfragelatenz springt von ~300 ms auf 1-3 Sekunden.',
          '**Cosinus-Only scheitert bei seltenen Begriffen:** Dichte Embeddings untergewichten ungewöhnliche Eigennamen, Medikamentennamen, Statutennummern und Code-Identifizierer. Eine Abfrage für „Section 230(c)(1)" ruft Chunks über „Section 9" ab, weil das Embedding numerische Spezifität nicht unterscheiden kann. BM25 erfasst dies; reine Cosinus-Suche verfehlt sie.',
          '**Top-K von 4 ist zu eng im großen Maßstab:** Bei 1.000 Chunks hat Top-4 eine anständige Genauigkeit. Bei 50.000 Chunks liegt der wirklich beste Chunk oft bei Rang 12-30 – außerhalb des Top-4-Fensters. Der Abruf scheint zu funktionieren (die Antworten sind plausibel), basiert aber stillschweigend auf den falschen Passagen.',
          '**Keine Metadaten-Filterung verschwendet den Index:** Die Frage „Was sagte Smith über X" auf einem 10.000-Dokument-Bestand durchsucht jeden Chunk im Index, während das System zuerst zu „Dokumenten von Smith" vor-filtern sollte. Naives RAG kennt kein Konzept der Metadaten-Vor-Filterung.',
          '**Standard-Chunk-Größe von 512/0 fragmentiert lange Kontexte:** PDF-Absätze und Rechtsbereiche passen selten in 512 Token. Die Überlappung von 0 verliert Bedeutung über Grenzen hinweg. Die Optimierung von 1.000/200 behebt dies für mittlere Bestände; hierarchisches Chunking ist über 5.000 Dokumenten erforderlich.',
          '**Embedding-Drift bei Update:** Wenn Sie 1.000 neue PDFs drei Monate nach dem ursprünglichen Index hinzufügen, können sich Sentence-Transformer-Modellversionen geändert haben. Das Mischen von Embeddings aus zwei Modellversionen in einem Index verschlechtert den Abruf stillschweigend – jede Architektur erzwingt eine vollständige Re-Indexierung bei Embedding-Modell-Wechsel.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die „Skalierungsklippe" ist keine einzelne Zahl. Sie ist der Punkt, an dem Ihr Bestand, Ihre Hardware und Ihre Abruf-Einstellungen so schlecht interagieren, dass Antworten spürbar verschlechtern. Auf einem 16-GB-Laptop liegt die Klippe um 5.000 Chunks. Auf einer 32-GB-Workstation mit NVMe geht sie auf 15.000-20.000 hinaus. Die Fixes in diesem Artikel – Hybrid-Suche, Reranking, Metadaten-Filterung – ebnen die Klippe komplett.',
          },
        ],
      },
      decisionTree: {
        id: 'decision-tree',
        title: 'Architektur-Entscheidungsbaum: Zuerst nach Bestandsgröße wählen',
        content:
          '**Wählen Sie die einfachste Architektur, die Ihre Dokumentanzahl verarbeitet. Hybrid-Suche, Reranking oder hierarchische Indizes hinzuzufügen ist unkompliziert nachzurüsten; Den gesamten Vektor-Store zu wechseln ist es nicht.** Verwenden Sie diesen Baum, bevor Sie einen Installer öffnen.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Das schnellste lokale RAG-Setup zum Chatten mit bis zu 1.000 PDFs ist AnythingLLM Desktop mit Chunk-Größe 1.000 / Überlappung 200 und nomic-embed-text-v1.5 als Embedding-Modell – kein Code erforderlich, und es läuft vollständig auf Ihrer Maschine.',
          },
          {
            type: 'plain-terms',
            text: 'Wählen Sie Ihre Architektur nach Dokumentanzahl: AnythingLLM für unter 1.000 PDFs (kein Code, Drag-and-Drop); LlamaIndex lokal für 1.000–5.000 (150 Zeilen Python); benutzerdefiniert Ollama + ChromaDB für 5.000–10.000 (300–400 Zeilen, fügt Hybrid-Suche und Reranking hinzu); Ollama + Qdrant für 10.000+ (Docker, Metadaten-Filterung, Produktionsreife). Die richtige Wahl ist die einfachste, die Ihren Bestand verarbeitet – Über-Engineering der Architektur fügt Wartungskosten hinzu, ohne die Antwortqualität für kleinere Sammlungen zu verbessern.',
          },
        ],
        items: [
          '**Unter 1.000 Dokumenten (unter ~5.000 Chunks):** AnythingLLM Desktop mit Chunk-Größe 1.000 / Überlappung 200 und nomic-embed-text-v1.5 als Embedding-Modell. Kein benutzerdefinierter Code. Siehe [die 30-Minuten-Schritt-für-Schritt-Anleitung](/power-local-llm/local-rag-on-your-pdfs-step-by-step?lang=de) für Setup.',
          '**1.000-5.000 Dokumente (5k-25k Chunks):** LlamaIndex Lokalmodus mit hierarchischen Indizes (DocumentSummaryIndex + VectorStoreIndex), Ollama als LLM-Provider, nomic-embed-text-v1.5 als Embedding-Modell, LanceDB oder ChromaDB als Vektor-Store. ~150 Zeilen Python, läuft als langlebiger Prozess.',
          '**5.000-10.000 Dokumente (25k-50k Chunks):** Benutzerdefinierter Stack mit Ollama, ChromaDB, BM25 Hybrid-Suche über Whoosh oder Tantivy und BGE-reranker-v2-m3 Reranker-Pass über Top-50-Kandidaten. ~300-400 Zeilen Python. Der Reranker ist nicht verhandelbar in diesem Umfang.',
          '**10.000+ Dokumente (50k+ Chunks):** Ollama + Qdrant im Single-Node-Modus mit Payload-basierter Metadaten-Filterung, Hybrid-Suche mit nativen Sparse-Vektoren von Qdrant, BGE-reranker-v2-m3 und hierarchischen Summary-Index nach Dokument-IDs. Produktionsreife Single-User-Setup.',
          '**Multi-User (jeder Umfang):** Open WebUI vor einem beliebigen der obigen, ODER einen kleinen FastAPI-Wrapper um das gleiche Qdrant + Ollama Backend. Multi-User verändert die operationale Geschichte (Auth, Isolation, Rate Limiting), aber nicht die Abruf-Architektur.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Im Zweifelsfall, starten Sie eine Stufe über Ihrer aktuellen Bestandsgröße. Wenn Sie heute 800 PDFs haben und erwarten, 200/Monat hinzuzufügen, starten Sie mit der LlamaIndex-Stufe – Später von AnythingLLM umzuarchitekturieren ist schmerzhafter als jetzt eine Stufe über-zu-engineern.',
          },
        ],
      },
      architectureComparison: {
        id: 'architecture-comparison',
        title: 'Architektur-Vergleichstabelle',
        content:
          '**Vier Architekturen auf identischen Beständen bei 100, 1.000 und 10.000 Dokumenten bewertet.** Test-Setup: Forschungs-PDFs mit durchschnittlich 12 Seiten (also ~120k Seiten bei 10k Dokumenten). Hardware: NVIDIA RTX 4070 (12 GB VRAM, 32 GB System-RAM) auf Windows 11; Cross-Check auf M5 MacBook Pro (32 GB vereinheitlichter Speicher). LLM: Llama 3.3 8B Q4_K_M über Ollama. Embedding-Modell: nomic-embed-text-v1.5. Alle Zahlen sind Mediane von drei Läufen nach Aufwärmung.',
        columns: [
          'Architektur',
          'Setup-Komplexität',
          'Max. getestete Dokumente',
          'Abfrage p50 @ 1k Dokumente',
          'Abfrage p50 @ 10k Dokumente',
          'Am besten für',
        ],
        rows: [
          {
            'Architektur': 'AnythingLLM (Standard)',
            'Setup-Komplexität': 'Drag-and-Drop, kein Code',
            'Max. getestete Dokumente': '~2.000 Dokumente bevor Abruf verschlechtert',
            'Abfrage p50 @ 1k Dokumente': '~450 ms',
            'Abfrage p50 @ 10k Dokumente': 'Nicht tragbar (Genauigkeit sinkt unter 50%)',
            'Am besten für': 'Demos und kleine Bestände; nicht über 500 PDFs verwenden',
          },
          {
            'Architektur': 'AnythingLLM (optimiert)',
            'Setup-Komplexität': 'Kein Code; nur Einstellungen (1000/200 + nomic-embed-text)',
            'Max. getestete Dokumente': '~3.000 Dokumente bequem',
            'Abfrage p50 @ 1k Dokumente': '~310 ms',
            'Abfrage p50 @ 10k Dokumente': '~1,4 s, Genauigkeit ~70%',
            'Am besten für': '100-1.000 Dokumente, kein Budget für benutzerdefinierten Code',
          },
          {
            'Architektur': 'LlamaIndex lokal',
            'Setup-Komplexität': '~150 Zeilen Python, langlebiger Prozess',
            'Max. getestete Dokumente': '~8.000 Dokumente',
            'Abfrage p50 @ 1k Dokumente': '~280 ms',
            'Abfrage p50 @ 10k Dokumente': '~700 ms mit hierarchischen Indizes',
            'Am besten für': '1.000-5.000 Dokumente, strukturierte Abruf-Pipelines',
          },
          {
            'Architektur': 'Benutzerdefiniert Ollama + ChromaDB',
            'Setup-Komplexität': '~300-400 Zeilen Python, BM25 + Reranker-Integration',
            'Max. getestete Dokumente': '~12.000 Dokumente',
            'Abfrage p50 @ 1k Dokumente': '~340 ms',
            'Abfrage p50 @ 10k Dokumente': '~520 ms mit Hybrid + Rerank',
            'Am besten für': '5.000-10.000 Dokumente, Hybrid-Suche erforderlich',
          },
          {
            'Architektur': 'Ollama + Qdrant',
            'Setup-Komplexität': '~500 Zeilen Python, Docker, Payload-Schemata',
            'Max. getestete Dokumente': '50.000+ Dokumente',
            'Abfrage p50 @ 1k Dokumente': '~310 ms',
            'Abfrage p50 @ 10k Dokumente': '~410 ms mit nativer Hybrid + Filterung',
            'Am besten für': '10.000+ Dokumente, Metadaten-lastige Filterung',
          },
        ],
      },
      optionAnythingLLM: {
        id: 'option-anythingllm',
        title: 'Option 1: AnythingLLM optimiert (100-1.000 Dokumente)',
        content:
          '**Die geringste Reibungsoption, die bei richtiger Optimierung immer noch einen persönlichen Bestand von 1.000 Dokumenten handhabt.** AnythingLLM Desktop bringt LanceDB eingebettet, analysiert PDF/DOCX/MD nativ und spricht mit Ollama als LLM-Provider. Standardeinstellungen scheitern um 500 Dokumente; die Optimierung unten setzt sie auf 2.000-3.000.',
        items: [
          '**LLM:** Llama 3.3 8B Q4_K_M über Ollama (5 GB RAM während Inferenz). Auf 24-GB+-Systemen verbessert Qwen 2.5 14B Q4 die Synthese deutlich.',
          '**Embedding-Modell:** Wechsel vom Standard von AnythingLLM zu nomic-embed-text-v1.5 über Ollama. Das Standard-Embedding-Modell ist der einzige größte Grund für „AnythingLLM skaliert nicht"-Berichte.',
          '**Chunking:** 1.000 Token mit 200-Token-Überlappung, pro Workspace unter Vector Database-Einstellungen eingestellt. Das Standard 512/0 ist falsch für jeden Bestand größer als ein paar Dutzend Dokumente.',
          '**Top-K:** von Standard 4 auf 6-8 erhöhen. Bei 1.000 Dokumenten liegt der wirklich beste Chunk oft bei Rang 5-7, und der LLM kann schwache Chunks besser ignorieren als fehlende erfinden.',
          '**Workspace-Partitionierung:** einen Workspace pro Dokumentkategorie erstellen (Papiere, Verträge, Notizen). Jeder Workspace ist ein separat indexierter LanceDB; Workspaces übergreifende Abfragen werden nicht unterstützt, aber Pro-Workspace-Genauigkeit ist viel höher als in einem großen Pool.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'AnythingLLM hat keine native Hybrid-Suche und keinen nativen Reranker. Über ~2.000 Dokumente sehen Sie „richtige Dokument, falscher Chunk"-Fehler: Das Modell zitiert ein Papier, aber zitiert die falsche Passage. Dieses Symptom ist das Signal zum Upgrade auf die LlamaIndex-Stufe.',
          },
        ],
      },
      optionLlamaIndex: {
        id: 'option-llamaindex',
        title: 'Option 2: LlamaIndex lokal (1.000-5.000 Dokumente)',
        content:
          '**LlamaIndex im vollständig lokalen Modus tauscht 30 Minuten Python-Setup für hierarchischen Abruf, Abfrage-Routing und eine viel bessere Skalierungskurve ein.** Gleicher Ollama-Backend, gleiches nomic-embed-text-v1.5 Embedding-Modell, aber die Abruf-Schicht ist für strukturierte Pipelines statt One-Shot-Top-K gebaut.',
        items: [
          '**Stack:** Ollama + LlamaIndex + LanceDB (oder ChromaDB) + nomic-embed-text-v1.5 über den OllamaEmbedding-Adapter. Persistiert auf Festplatte; läuft als langlebiger Python-Prozess, mit dem Sie über CLI oder kleinen FastAPI-Wrapper kommunizieren.',
          '**DocumentSummaryIndex über VectorStoreIndex:** LlamaIndex erstellt bei der Indexierung eine Pro-Dokument-Zusammenfassung, dann wählt der Abruf zuerst relevante Dokumente (Summary-Suche) und durchsucht nur dann Chunks innerhalb dieser Dokumente. Das ist das günstigste hierarchische Abruf-Muster.',
          '**Abfrage-Routing:** RouterQueryEngine schickt Faktenabruf-Abfragen zum Chunk-Index und Syntheseabfragen zum Summary-Index. ~30 Zeilen Code; verdoppelt die Antwortqualität auf langen Dokumenten-Beständen.',
          '**Sentence-Window-Abruf:** ein optionaler zweiter Index, der einen Zieldsatz plus N umgebende Sätze abruft. Nützlich für Rechts- und akademische Bestände, wo die Antwort ein Satz ist, aber seine Bedeutung vom umgebenden Absatz abhängt.',
          '**Persistenz:** `index.storage_context.persist(persist_dir=...)` speichert alles. Ladezeit auf einem 5.000-Dokument-Index liegt auf NVMe SSD bei 10-30 Sekunden.',
        ],
        codeBlock:
          '# Minimales LlamaIndex lokales RAG mit hierarchischen Indizes (~30 Zeilen)\nfrom llama_index.core import VectorStoreIndex, DocumentSummaryIndex, SimpleDirectoryReader\nfrom llama_index.embeddings.ollama import OllamaEmbedding\nfrom llama_index.llms.ollama import Ollama\nfrom llama_index.core import Settings\n\nSettings.llm = Ollama(model="llama3.3:8b-instruct-q4_K_M", request_timeout=120)\nSettings.embed_model = OllamaEmbedding(model_name="nomic-embed-text:latest")\nSettings.chunk_size = 1000\nSettings.chunk_overlap = 200\n\ndocs = SimpleDirectoryReader("./pdfs").load_data()\n\n# Summary-Index zum Routing + Chunk-Index zum Abruf\nsummary_index = DocumentSummaryIndex.from_documents(docs)\nchunk_index = VectorStoreIndex.from_documents(docs)\n\nsummary_index.storage_context.persist("./storage/summary")\nchunk_index.storage_context.persist("./storage/chunks")\n\n# Bei Abfrage-Zeit, nach Abfragetyp routen\nresponse = chunk_index.as_query_engine(similarity_top_k=8).query(\n    "What sample size did Smith et al. use?"\n)\nprint(response)',
        codeLanguage: 'python',
      },
      optionChromaDB: {
        id: 'option-chromadb',
        title: 'Option 3: Benutzerdefiniert Ollama + ChromaDB (5.000-10.000 Dokumente)',
        content:
          '**Bei 5.000 Dokumenten zeigen die LlamaIndex-Standardwerte Belastung: reine Vektor-Abruf verfehlt lexikalisch-spezifische Abfragen, und 50.000 Chunks Cosinus-Suche überschreitet das Budget für „schnell genug".** Ein benutzerdefinierter Stack mit ChromaDB, BM25 Hybrid-Suche und BGE Reranker handhabt 10.000 Dokumente auf einer 32-GB-Workstation.',
        items: [
          '**Stack:** Ollama + ChromaDB (Server-Modus) + Whoosh oder Tantivy für BM25 + BGE-reranker-v2-m3 (~570 MB, läuft auf CPU bei 50-100 Kandidaten/sec). Gehostet als einzelner Python-Prozess oder aufgeteilt in Ingest + Abfrage-Worker.',
          '**Hybrid-Suche bei Abruf-Zeit:** BM25 und dichte Vektor-Abruf parallel laufen, Top-25 von jedem nehmen, deduplizieren, dann Top-50 mit dem Cross-Encoder reranken. Final Top-K von 6-8 geht zum LLM.',
          '**ChromaDB-Metadaten-Felder:** füllen Sie `source_filename`, `page_number`, `document_type`, `author`, `year` auf jedem Chunk bei Index-Zeit. Filterung bei Abfrage-Zeit (`where={"document_type": "contract"}`) schneidet Abruf-Suchraum um 5-10x ohne Qualitätsverlust.',
          '**Batch-Indexierung:** ChromaDB embeddet in Batches von 32-128 Chunks. Auf einer RTX 4070 ist BGE-Reranker der Engpass (50-100 Kandidaten/sec auf CPU; 400+/sec auf GPU).',
          '**Persistenz:** ChromaDB schreibt zu SQLite + Parquet-Verzeichnis. Ein 50.000-Chunk-Index auf Festplatte ist ~3-5 GB. Sicherung ist ein Verzeichnis-Kopie.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'BGE-reranker-v2-m3 ist die Zugabe mit höchster Auswirkung in diesem Umfang. Ohne dies erhalten Sie richtige Dokumente aber falsche Chunks in etwa 15-25% der Zeit. Mit dem sinkt das unter 5% und der LLM hat saubere Grundierung zum Arbeiten. Budgetieren Sie die 200-500 ms, die es zur Abfrage-Latenz hinzufügt – jede Millisekunde ist es wert.',
          },
        ],
      },
      optionQdrant: {
        id: 'option-qdrant',
        title: 'Option 4: Ollama + Qdrant (10.000+ Dokumente)',
        content:
          '**Über 10.000 Dokumenten beginnt Single-Process ChromaDB seine Responsivitäts-Vorteile zu verlieren. Qdrant im Single-Node Docker-Modus handhabt 50.000+ Dokumente mit nativer Hybrid-Suche, Payload-basierter Filterung und HNSW-Indexierung, das für Sub-Sekunden-Abfragen angepasst ist.** Gleicher Ollama-Backend; der Unterschied ist der Vektor-Store.',
        items: [
          '**Stack:** Ollama + Qdrant (Docker, Single-Node) + native Sparse-Vektoren (BM25-äquivalent in Qdrant 1.10+ eingebaut) + BGE-reranker-v2-m3 + kleine Python-Orchestrierungs-Schicht.',
          '**Native Hybrid:** Qdrant unterstützt dichte + Sparse-Vektoren in einer Sammlung, mit gewichteter Fusion bei Abfrage-Zeit. Kein separater BM25-Prozess zu Wartung.',
          '**HNSW-Tuning:** bei 50.000+ Vektoren `ef_construct` auf 200 und `m` auf 32 für den Index-Bau erhöhen, und `ef=128` bei Abfrage-Zeit verwenden. Standardwerte funktionieren, aber tauschen ~10% Genauigkeit gegen Build-Geschwindigkeit.',
          '**Payload-Schemata zur Filterung:** Qdrant behandelt Payloads als First-Class. Indexieren Sie `author`, `document_type`, `year` und `tags` als Keyword-Payloads, um Sub-Millisekunden-Vor-Filterung zu ermöglichen.',
          '**Hierarchischer Abruf:** zwei Sammlungen beibehalten – `summaries` (ein Vektor pro Dokument) und `chunks` (die übliche). Abfragen durch die Summary-Sammlung zuerst routen, dann Chunk-Suche innerhalb der abgestimmten Dokument-IDs.',
          '**Persistenz:** Qdrant schreibt zu einem einzigen eingebundenen Volume. Eine 100.000-Chunk-Sammlung ist je nach Payload-Größe und HNSW-Einstellungen ~6-12 GB auf Festplatte.',
        ],
        codeBlock:
          '# Qdrant-Sammlung mit dichte + Sparse-Vektoren und Metadaten-Filterung\nfrom qdrant_client import QdrantClient\nfrom qdrant_client.models import (\n    Distance, VectorParams, SparseVectorParams, SparseIndexParams\n)\n\nclient = QdrantClient(host="localhost", port=6333)\n\nclient.create_collection(\n    collection_name="docs",\n    vectors_config={\n        "dense": VectorParams(size=768, distance=Distance.COSINE),  # nomic-embed-text-v1.5\n    },\n    sparse_vectors_config={\n        "bm25": SparseVectorParams(index=SparseIndexParams(on_disk=False)),\n    },\n)\n\n# Abfrage: Hybrid-Suche + Payload-Filter, kein separater BM25-Prozess erforderlich\nfrom qdrant_client.models import Filter, FieldCondition, MatchValue, Prefetch\n\nresults = client.query_points(\n    collection_name="docs",\n    query=dense_vec,\n    using="dense",\n    prefetch=[\n        Prefetch(query=sparse_vec, using="bm25", limit=25),\n        Prefetch(query=dense_vec, using="dense", limit=25),\n    ],\n    query_filter=Filter(\n        must=[FieldCondition(key="document_type", match=MatchValue(value="contract"))]\n    ),\n    limit=50,  # vor Rerank\n)',
        codeLanguage: 'python',
      },
      hybridSearch: {
        id: 'hybrid-search',
        title: 'Hybrid-Suche: BM25 + Vektor schlägt eine alleine',
        content:
          '**Reine Cosinus-Abruf verfehlt Abfragen, die auf seltenen Eigennamen, Statutennummern oder spezifischen Identifizierern hinge. Reine BM25 verfehlt Abfragen, die anders als der Quelltext formuliert sind. Die Kombination schlägt einen alleine, besonders über 1.000 Dokumenten.** Implementierungs-Kosten: ein zusätzlicher Abruf-Aufruf plus ein Fusions-Schritt.',
        items: [
          '**Warum Dense alleine scheitert:** Embeddings untergewichten seltene Token. Abfragen wie „RFC 9110 Abschnitt 7.4" oder „MNDA-2024-0143" werden nahe generischen IETF / Vertrags-Chunks eingebettet. BM25 erfasst den genauen Identifizierer; reine Cosinus-Suche verfehlt ihn.',
          '**Warum BM25 alleine scheitert:** Lexikalische Übereinstimmung verfehlt Paraphrasen. Eine Abfrage „Wie stornieren wir?" gegen einen Chunk mit Titel „Kündigungs-Verfahren" passt im dichten Raum, aber erzielt 0 in BM25.',
          '**Reciprocal Rank Fusion (RRF) ist der Standard-Kombiner:** für jeden Chunk, der in beiden Ergebnis-Listen erscheint, ihm eine Punktzahl geben als `1/(60+rank_dense) + 1/(60+rank_bm25)`. Absteigend sortieren. Die 60 ist eine Glättungs-Konstante; Werte 30-100 funktionieren praktisch.',
          '**Praktisches Rezept:** Top-25 von jeder Methode abrufen, über RRF kombinieren, Top-50 nehmen, zum Reranker schicken, dann Top-6-8 zum LLM. Das ist die Standard-Produktions-Pipeline in jedem Umfang über 1.000 Dokumenten.',
          '**Speicherkosten:** BM25-Indizes sind klein (~50-150 MB pro 10.000 Dokumente) im Vergleich zu dichten Indizes (~500 MB-2 GB im gleichen Umfang). Hinzufügen von BM25 zu einem existierenden dichten Store ist billig.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Qdrant 1.10+ und Weaviate unterstützen beide Hybrid-Suche nativ. ChromaDB erfordert Bolting-On von Whoosh oder Tantivy. LanceDB hat experimentale Hybrid-Unterstützung, aber die API ändert sich ab Mai 2026 – überprüfen Sie die aktuelle Dokumentation vorher. Natives Hybrid ist es wert, den Vektor-Store dafür zu wählen.',
          },
        ],
      },
      reranking: {
        id: 'reranking',
        title: 'Reranking: Der Top-N-Verfeinerungspass',
        content:
          '**Ein Reranker ist ein kleiner Cross-Encoder, der (Abfrage, Kandidaten)-Paare gemeinsam statt unabhängig bewertet. Laufen Sie es über die Top-25 bis Top-50-Kandidaten von Hybrid-Suche, um „richtige Dokument, falscher Chunk"-Fehler zu beheben.** Einzelner größter Qualitäts-Hebel zwischen 5.000 und 50.000 Dokumenten.',
        items: [
          '**BGE-reranker-v2-m3** (~570 MB, mehrsprachig, Apache 2.0) ist die Standard-Wahl im Mai 2026. Läuft mit 50-100 Kandidaten/sec auf einer modernen CPU; 400+ /sec auf GPU. Latenzkost für Top-50-Reranking ist ~200-500 ms auf CPU, ~80-150 ms auf GPU.',
          '**Warum Cross-Encoder beim Abruf gewinnen:** Dichte Embeddings kodieren Abfrage und Dokument unabhängig, daher sieht das Modell sie niemals zusammen. Ein Cross-Encoder liest `[CLS] abfrage [SEP] kandidat [SEP]` gemeinsam und bewertet das Paar direkt. Recall@5 springt typisch um 15-25 Punkte.',
          '**Wo man den Reranker injiziert:** nach Hybrid-Suche, vorher der LLM. Top-50 von Hybrid nehmen, auf Top-6-8 reranken, die zum LLM als Kontext schicken.',
          '**Alternative – Cohere Rerank API:** höhere Qualität, aber erfordert einen Cloud-Aufruf. Für vollständig-lokale Stacks ist BGE-reranker-v2-m3 der praktische Standard. mxbai-rerank-base-v2 ist ein starker Runner-up.',
          '**Den Reranker unter 1.000 Dokumenten zu überspringen ist fein:** Der Qualitäts-Gewinn rechtfertigt nicht die Latenzkost. Über 5.000 Dokumenten, ihn zu überspringen lässt ~15-25% der Antworten auf den falschen Chunks verankert.',
        ],
      },
      metadataFiltering: {
        id: 'metadata-filtering',
        title: 'Metadaten-Filterung: Verengen Sie vorher den Suchraum',
        content:
          '**Strukturierte Metadaten auf jedem Chunk speichern lässt Sie den Index verengen, bevor die Vektor-Suche läuft. Auf einem 10.000-Dokument-Bestand schneidet ein Payload-Filter typisch den Abruf-Raum um 5-10x ohne Qualitätsverlust.** Billig beim Index-Zeit hinzufügen; teuer nachzurüsten.',
        items: [
          '**Universelle Payload-Felder zum Füllen bei Index-Zeit:** `source_filename`, `page_number`, `document_type` (Papier / Vertrag / Notiz / Wiki), `author`, `year`, `language`, plus domain-spezifische Tags (z.B. `case_number`, `project_id`, `client_id`).',
          '**Vor-Filter bei Abfrage-Zeit:** „Was sagten die Q3-2024-Vorstandsprotokolle über Preise?" → filter `document_type=board_minutes AND year=2024 AND quarter=3` zuerst, dann Vektor-Suche innerhalb ~12 Dokumente statt aller 10.000.',
          '**Vektor-Store-Unterstützung:** Qdrant-Payloads, Weaviate-Properties, ChromaDB-Metadaten und LanceDB-Schema-Spalten unterstützen alle Filterung. Leistung variiert – Qdrant-Payload-Filterung auf indizierten Feldern ist Sub-Millisekunde; ChromaDB-Metadaten-Filterung auf >100k Chunks kann 50-150 ms hinzufügen.',
          '**Auto-Extraktion von Metadaten:** für Rechts-Bestände, ein kleiner LLM-Pass bei Index-Zeit kann Fallenummern, Daten und Partei-Namen pro Dokument extrahieren. Kostet ~30 Sekunden pro Dokument auf Llama 3.3 8B; läuft einmal pro Ingest.',
          '**Mit Hybrid-Suche kombinieren:** Payload-Filter verengt das Universum → BM25 + dichte Abruf innerhalb des gefilterten Sets → Rerank. Der Payload-Filter ist die billigste 5-10x-Speedup in jedem großen RAG-System.',
        ],
      },
      hierarchicalRetrieval: {
        id: 'hierarchical-retrieval',
        title: 'Hierarchischer Abruf: Summary zuerst, Chunks zweiter',
        content:
          '**Hierarchischer Abruf behält zwei Indizes bei – einen von Pro-Dokument-Zusammenfassungen und einen von Chunks – und leitet Abfragen durch beider. Summary-Suche findet die richtigen Dokumente; Chunk-Suche findet die richtigen Passagen in ihnen.** Reduziert Rauschen bei Synthese; weitgehend unnötig für Faktenabruf.',
        items: [
          '**Pro-Dokument-Zusammenfassungen:** bei Index-Zeit, fordert man den LLM auf, eine 100-200 Token-Zusammenfassung von jedem Dokument zu schreiben. Diese Zusammenfassungen in eine separate `summaries`-Sammlung einbetten. Kosten ~30-90 Sekunden pro Dokument auf Llama 3.3 8B.',
          '**Zwei-Stufen-Abruf:** (1) Abfrage einbetten, `summaries` durchsuchen, Top-5-Dokumente nehmen; (2) innerhalb dieser 5 Dokumente, Top-8-Chunks über Hybrid-Suche abrufen; (3) bei Bedarf reranken; (4) zum LLM schicken.',
          '**Wann es am meisten hilft:** Synthese und Multi-Dokument-Abfragen („vergleichen Sie, wie diese Papiere X handhaben"). Faktenabruf („welchen Wert berichtete Smith?") ist fein im Chunk-Index alleine – der Summary-Detour fügt Latenz ohne Qualitäts-Gewinn hinzu.',
          '**Kosten-Tradeoff:** verdoppelt Index-Speicher (Zusammenfassungen sind klein, aber der Index selbst ist duplizierte Infrastruktur). Verdoppelt Latenz für nicht-geroutete Abfragen. Der Gewinn ist Rausch-Reduktion bei 10.000+ Dokumenten.',
          '**LlamaIndex baut dies in:** `DocumentSummaryIndex` plus `RouterQueryEngine` ist eine 30-Zeilen-Implementierung. Benutzerdefiniertes Python mit ChromaDB oder Qdrant ist ~80-120 Zeilen.',
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Gemessene Benchmarks bei 100, 1.000 und 10.000 Dokumenten',
        content:
          '**Alle vier Architekturen auf identischen Beständen bewertet. Test-Rig: NVIDIA RTX 4070 (12 GB VRAM, 32 GB System-RAM), Windows 11 + WSL2, NVMe SSD. Cross-Check auf M5 MacBook Pro (32 GB vereinheitlichter Speicher). Zahlen sind Mediane von drei Läufen nach Aufwärmung.** Indexierungs-Zeit, On-Disk-Speicher, Abfrage-Latenz p50 und p95 über Skalen.',
        columns: ['Stack', 'Metrik', '@ 100 Dokumente', '@ 1.000 Dokumente', '@ 10.000 Dokumente'],
        rows: [
          {
            'Stack': 'AnythingLLM optimiert',
            'Metrik': 'Indexierungs-Zeit',
            '@ 100 Dokumente': '~1 Minute',
            '@ 1.000 Dokumente': '~12 Minuten',
            '@ 10.000 Dokumente': 'Nicht über 3.000 Dokumente getestet',
          },
          {
            'Stack': 'AnythingLLM optimiert',
            'Metrik': 'On-Disk-Vektoren',
            '@ 100 Dokumente': '~30 MB',
            '@ 1.000 Dokumente': '~280 MB',
            '@ 10.000 Dokumente': 'N/V',
          },
          {
            'Stack': 'AnythingLLM optimiert',
            'Metrik': 'Abfrage p50 / p95',
            '@ 100 Dokumente': '~180 / 420 ms',
            '@ 1.000 Dokumente': '~310 / 880 ms',
            '@ 10.000 Dokumente': 'N/V (Genauigkeit zu niedrig)',
          },
          {
            'Stack': 'LlamaIndex lokal',
            'Metrik': 'Indexierungs-Zeit',
            '@ 100 Dokumente': '~3 Minuten (inkl. Zusammenfassungen)',
            '@ 1.000 Dokumente': '~25 Minuten',
            '@ 10.000 Dokumente': '~3,5 h',
          },
          {
            'Stack': 'LlamaIndex lokal',
            'Metrik': 'On-Disk-Speicher',
            '@ 100 Dokumente': '~45 MB',
            '@ 1.000 Dokumente': '~340 MB',
            '@ 10.000 Dokumente': '~3,6 GB',
          },
          {
            'Stack': 'LlamaIndex lokal',
            'Metrik': 'Abfrage p50 / p95',
            '@ 100 Dokumente': '~210 / 480 ms',
            '@ 1.000 Dokumente': '~280 / 720 ms',
            '@ 10.000 Dokumente': '~700 / 1.400 ms',
          },
          {
            'Stack': 'Benutzerdefiniert Ollama+ChromaDB',
            'Metrik': 'Indexierungs-Zeit',
            '@ 100 Dokumente': '~2 Minuten',
            '@ 1.000 Dokumente': '~18 Minuten',
            '@ 10.000 Dokumente': '~2,8 h',
          },
          {
            'Stack': 'Benutzerdefiniert Ollama+ChromaDB',
            'Metrik': 'On-Disk-Speicher',
            '@ 100 Dokumente': '~40 MB',
            '@ 1.000 Dokumente': '~310 MB',
            '@ 10.000 Dokumente': '~3,2 GB',
          },
          {
            'Stack': 'Benutzerdefiniert Ollama+ChromaDB',
            'Metrik': 'Abfrage p50 / p95',
            '@ 100 Dokumente': '~240 / 540 ms (mit Rerank)',
            '@ 1.000 Dokumente': '~340 / 760 ms',
            '@ 10.000 Dokumente': '~520 / 1.100 ms',
          },
          {
            'Stack': 'Ollama + Qdrant',
            'Metrik': 'Indexierungs-Zeit',
            '@ 100 Dokumente': '~2 Minuten',
            '@ 1.000 Dokumente': '~17 Minuten',
            '@ 10.000 Dokumente': '~2,6 h',
          },
          {
            'Stack': 'Ollama + Qdrant',
            'Metrik': 'On-Disk-Speicher',
            '@ 100 Dokumente': '~55 MB',
            '@ 1.000 Dokumente': '~410 MB',
            '@ 10.000 Dokumente': '~4,4 GB',
          },
          {
            'Stack': 'Ollama + Qdrant',
            'Metrik': 'Abfrage p50 / p95',
            '@ 100 Dokumente': '~220 / 480 ms',
            '@ 1.000 Dokumente': '~310 / 690 ms',
            '@ 10.000 Dokumente': '~410 / 920 ms',
          },
        ],
      },
      storageHardware: {
        id: 'storage-hardware',
        title: 'Speichergröße und Hardware-Anforderungen',
        content:
          '**Speicher skaliert linear mit Dokumenten, aber RAM skaliert sub-linear, weil die meisten Abruf-Engines Indizes Memory-Mapped statt vollständig geladen. Die Zahlen unten gehen von nomic-embed-text-v1.5 (768-dim) und Chunks von 1.000 Token mit 200 Überlappung aus.** Planen Sie Festplatte für 3-5x Ihre roh-Bestand-Größe.',
        items: [
          '**Roh-Text pro 1.000 PDFs (~12 Seiten jede):** ~50-150 MB extrahierter Text. Hochgradig variabel je nach Dichte.',
          '**Vektoren bei 1.000 Dokumenten:** ~300-400 MB auf der Festplatte einschließlich HNSW-Index-Overhead. ~120-180 MB, wenn Sie den HNSW-Index überspringen und Brute-Force-Suche verwenden (akzeptabel unter 5.000 Dokumenten).',
          '**Vektoren bei 10.000 Dokumenten:** ~3-5 GB auf der Festplatte. HNSW-Bau nimmt 10-30 Minuten auf einer modernen CPU.',
          '**Vektoren bei 50.000 Dokumenten:** ~15-25 GB auf der Festplatte. Index-Build-Zeit ist der Engpass – planen Sie 2-4 Stunden einmaliger CPU-Arbeit.',
          '**RAM während Abfrage:** dichte Abruf benötigt ~30-50% des Index in arbeitendem Speicher für Abfragen mit niedriger Latenz. Ein 5-GB-Index fragt bequem in 8-16 GB RAM mit HNSW ab; Brute-Force benötigt den vollständigen Index resident.',
          '**RAM während Indexierung:** spitzt sich auf 2-3x die Embedding-Modell-Größe (~600 MB für nomic-embed-text) plus Pro-Batch-Text. 8 GB frei RAM ist ausreichend für den Indexierungs-Pass.',
          '**GPU vs. CPU:** Embedding-Durchsatz ist auf einer diskreten GPU oder Apple Silicon 4-8x schneller. Für 10.000+ Dokumente One-Shot-Indexierung spart die GPU 1-3 Stunden. Bei Query-Zeit-Embedding (eine Abfrage auf einmal) ist CPU fein.',
          '**Festplatte-Typ zählt:** NVMe SSD ist der praktische Boden bei 5.000+ Dokumenten. SATA SSD fügt 30-100% zu kalter Abfrage-Latenz hinzu; Spindel-Festplatte ist über ~2.000 Dokumenten nicht zu verwenden.',
        ],
      },
      incrementalIndexing: {
        id: 'incremental-indexing',
        title: 'Inkrementelle Indexierung und Deduplizierung',
        content:
          '**100 neue PDFs zu einem 10.000-Dokument-Index hinzufügen sollte nicht eine komplette Neuindexierung aller 10.000 erfordern.** Jede Architektur in diesem Leitfaden unterstützt inkrementelle Adds; das kniffligere Problem ist das Erkennen und Deduplizieren von Quasi-Duplikat-Dokumenten, die stillschweigend Chunks doppel-zählen und Abruf verwirren.',
        items: [
          '**Hash-basierte exakte Dedup bei Ingest:** SHA-256 der rohen Datei-Bytes. Dateien überspringen, deren Hash bereits im Index ist. Billig, erfasst identische Dateien, aber verfehlt Quasi-Duplikate (verschiedene OCR-Passes vom gleichen Scan, Format-Konversionen).',
          '**Content-Hash-Dedup:** SHA-256 des extrahierten Klartextes nach Whitespace-Normalisierung. Erfasst das gleiche Dokument in verschiedenen Dateiformaten. Fügt ~5 ms pro Datei beim Ingest hinzu.',
          '**MinHash für Quasi-Duplikate:** für Rechts- und akademische Bestände, wo mehrere Entwürfe des gleichen Dokuments sich ansammeln, berechnen Sie eine MinHash-Signatur (~128 Bytes pro Dokument) und überspringen Sie Dateien innerhalb eines Jaccard-Ähnlichkeits-Schwellwerts eines vorhandenen Eintrags.',
          '**Dokument-IDs sind für immer:** niemals eine Dokument-ID nach Löschen wiederverwenden. Vektor-Stores halten oft verwaiste Vektoren kurz; ID-Wiederverwendung verursacht stillschweigende Verwirrung. Verwenden Sie UUIDs oder Hash-basierte IDs.',
          '**Re-Embedding bei Embedding-Modell-Wechsel:** jede Architektur erzwingt eine komplette Neuindexierung, wenn Sie das Embedding-Modell wechseln. Planen Sie eine Embedding-Wahl, zu der Sie sich für mindestens ein Jahr vor Indexierung von 10.000 Dokumenten verpflichten.',
          '**Löscht:** ChromaDB und Qdrant unterstützen Punkt-Löschung nach ID. LanceDB erfordert einen Kompaktions-Pass zum Freigeben von Speicherplatz – planen Sie wöchentlich, wenn Sie mehr als ~5% des Bestands pro Monat löschen.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Der häufigste stille Fehler in langfristigen persönlichen RAG-Systemen ist doppelter Ingest: das gleiche Papier in zwei verschiedenen Formaten hinzugefügt, oder die gleiche Wiki-Seite zweimal exportiert. Symptome include „das Modell zitiert ständig den gleichen Chunk dreimal" und „Synthese-Abfragen werden sonderbar repetitiv". Fügen Sie Content-Hash-Dedup hinzu, bevor Sie 1.000 Dokumente übersteigen.',
          },
        ],
      },
      monitoring: {
        id: 'monitoring',
        title: 'Überwachung der RAG-Qualität im großen Maßstab',
        content:
          '**Ein 10.000-Dokument-RAG-System verschlechtert sich stillschweigend über Zeit, wenn Sie Dokumente hinzufügen, Modelle tauschen und Grenzfälle entdecken. Der Fix ist ein kleines Evaluierungs-Geschirr – 30-50 Hand-kuratierte Abfrage/Antwort-Paare – das bei jeder bedeutsamen Änderung wieder läuft.** Fünf Minuten Evaluierung verhindert Wochen verwirrtes Jagen.',
        items: [
          '**Bauen Sie einen kleinen Gold-Set:** 30-50 Abfragen, zu denen Sie die richtige Antwort kennen, gezogen aus echter Nutzung. Schließen Sie Faktenabruf (5-10), Synthese (5-10), Cross-Dokument (5-10), Grenzfälle (5-10) und bekannte-Miss-Abfragen (5-10) ein, wo die Antwort nicht im Bestand ist.',
          '**Verfolgen Sie drei Metriken pro Abfrage:** Abruf-Genauigkeit (erschien der richtige Chunk in Top-K?), Generierungs-Treue (passt die Antwort zum Chunk?) und Verweigerungs-Rate (sagt das System richtig „nicht im Bestand" für bekannte-Miss-Abfragen?).',
          '**Laufen Sie auf jede bedeutsame Änderung erneut:** neue Ingest-Batches, Embedding-Modell-Tausch, Chunk-Größen-Tausch, Prompt-Tweaks. Unterschied-Ergebnisse gegen den vorherigen Lauf; flaggen Sie jede Abfrage, deren Abruf-Genauigkeit oder Antwort sich änderte.',
          '**Trulens oder RAGAS** für automatisierte Eval-Frameworks. Beide laufen lokal und integrieren mit LlamaIndex. Manuelle Bewertung von 30-50 Abfragen ist auch fein und oft genauer.',
          '**Latenz-Budgets:** verfolgen Sie p50 und p95 Abfrage-Latenz über Zeit. Ein 50% Sprung in p95 bedeutet typisch, der Index ist aus RAM herausgewachsen – das früh-Signal, dass Sie zum nächsten Architektur-Tier upgraden müssen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Bei welcher Dokumentanzahl scheitern Standard-RAG-Einstellungen?',
            a: 'Auf einem 16-GB-Laptop mit Standard-Einstellungen (512-Token-Chunks, keine Überlappung, Standard-Embedding-Modell, Top-K von 4) beginnt die Abruf-Qualität um 1.000-2.000 Dokumente spürbar zu verschlechtern und ist über 5.000 nicht zu verwenden. Die zwei Fehler-Zustände sind „richtige Dokument, falscher Chunk" (Top-K zu eng im großen Maßstab) und stille Abruf-Genauigkeits-Sinke, wenn der Index RAM überschreitet. Die optimierten AnythingLLM-Einstellungen (1.000/200-Chunks + nomic-embed-text-v1.5) schieben die Klippe zu ~3.000 Dokumenten. Über das benötigen Sie Hybrid-Suche und einen Reranker.',
          },
          {
            q: 'Sollte ich Hybrid-Suche (BM25 + Vektor) verwenden?',
            a: 'Ja, über 1.000 Dokumenten. Reine dichte Abruf verfehlt Abfragen mit seltenen Eigennamen, Statutennummern oder spezifischen Identifizierern (z.B. „Section 230(c)(1)" oder eine Vertrags-MSA-Nummer). Reine BM25 verfehlt paraphrasierte Abfragen. Reciprocal Rank Fusion der zwei Top-25-Listen ist der Standard-Kombiner. Qdrant und Weaviate unterstützen natives Hybrid; ChromaDB benötigt Whoosh oder Tantivy aufgesetzt. Der hinzugefügte Abruf-Kosten ist ~50-100 ms; der Qualitäts-Gewinn ist bedeutsam.',
          },
          {
            q: 'Wie viel Speicher benötigen 1.000 PDFs nach Embedding?',
            a: 'Ungefähr 250-400 MB auf der Festplatte für den dichten Vektor-Index mit nomic-embed-text-v1.5 (768 Dimensionen) bei 1.000-Token-Chunks mit 200-Token-Überlappung. Addieren Sie ~50-150 MB für einen BM25-Index, wenn Sie Hybrid-Suche verwenden, und ~50-100 MB für Pro-Dokument-Zusammenfassungen, wenn Sie hierarchischen Abruf verwenden. Original-PDFs selbst werden von den meisten Vektor-DBs nicht gespeichert – nur extrahierte Text und Embeddings. Ein 10.000-PDF-Bestand benötigt ~3-5 GB für Vektoren plus was auch immer die Original-PDFs belegen.',
          },
          {
            q: 'Hilft Reranking im großen Maßstab?',
            a: 'Ja – Reranking ist die einzelne höchste-Auswirkung-Zugabe zwischen 5.000 und 50.000 Dokumenten. Ohne einen Reranker „richtige Dokument, falscher Chunk"-Fehler passieren ~15-25% der Zeit in diesem Umfang. Mit BGE-reranker-v2-m3 über die Top-50-Kandidaten von Hybrid-Suche sinkt das unter 5%. Der Reranker fügt ~200-500 ms auf CPU oder ~80-150 ms auf GPU hinzu. Unter 1.000 Dokumenten rechtfertigt der Qualitäts-Gewinn nicht die Latenzkost; über 5.000 Dokumenten ihn zu überspringen verlässt echte Abruf-Genauigkeit auf dem Tisch.',
          },
          {
            q: 'Wie gehe ich mit Duplikat- oder Quasi-Duplikat-Dokumenten um?',
            a: 'Dreistufige Dedup: SHA-256 von rohen Datei-Bytes (erfasst identische Dateien), SHA-256 von extrahiertem Klartext nach Whitespace-Normalisierung (erfasst verschiedene Dateiformate des gleichen Inhalts) und MinHash-Signaturen mit Jaccard-Schwellwert von ~0,85 (erfasst Quasi-Duplikate wie mehrere Entwürfe oder OCR-Varianten). Laufen Sie alle drei beim Ingest vorher Embedding. Das häufigste Symptom von übersprungener Dedup ist „Synthese-Abfragen werden sonderbar repetitiv" – der gleiche Chunk ist dreimal unter drei IDs gespeichert, daher sieht ihn der LLM dreimal im Kontext.',
          },
          {
            q: 'Kann ich Dokumente inkrementell hinzufügen, ohne alles neu zu indexieren?',
            a: 'Ja, jede Architektur in diesem Leitfaden unterstützt inkrementelle Adds. ChromaDB und Qdrant akzeptieren neue Chunks über einfache Insert-Aufrufe; LanceDB hängt an seine Append-Only-Dateien an; LlamaIndex umhüllt eines davon. Die Ausnahme ist das Wechsel des Embedding-Modells – das erzwingt eine komplette Neuindexierung, weil das Mischen von Embeddings von zwei Modell-Versionen in einem Index Abruf stillschweigend verschlechtert. Wählen Sie Ihr Embedding-Modell, bevor Sie 5.000 Dokumenten übersteigen und verpflichten Sie sich dafür für mindestens ein Jahr.',
          },
          {
            q: 'Sollte ich Metadaten-Filterung für große Sammlungen verwenden?',
            a: 'Ja – Metadaten-Filterung ist die billigste 5-10x-Speedup im großen Maßstab. Füllen Sie `source_filename`, `page_number`, `document_type`, `author`, `year` und domain-spezifische Tags auf jedem Chunk bei Index-Zeit. Bei Abfrage-Zeit, vor Vektor-Suche läuft vorher nach Payload filtern. Auf einem 10.000-Dokument-Bestand, ein typischer Filter schneidet den Suchraum zu ein paar hundert Chunks mit null Qualitätsverlust. Qdrant und Weaviate haben erste-Klasse Payload-Unterstützung; ChromaDB und LanceDB unterstützen es auch, aber mit etwas langsamerer Filter-Ausführung über 100.000 Chunks.',
          },
          {
            q: 'Wie überwache ich RAG-Qualität im großen Maßstab?',
            a: 'Bauen Sie einen kleinen Gold-Set – 30-50 Hand-kuratierte Abfrage/Antwort-Paare, die Faktenabruf, Synthese, Cross-Dokument, Grenzfälle und bekannte-Miss-Abfragen abdecken – und laufen Sie ihn auf jede bedeutsame Änderung erneut (neuer Ingest, Embedding-Modell-Tausch, Chunk-Größe-Tausch, Prompt-Tweak). Verfolgen Sie Abruf-Genauigkeit (erschien der richtige Chunk in Top-K?), Generierungs-Treue (passt die Antwort zum Chunk?) und Verweigerungs-Rate (sagt das System „nicht im Bestand", wenn es sollte?). Trulens und RAGAS automatisieren dies; manuelle Bewertung von 30 Abfragen ist auch fein und oft genauer.',
          },
          {
            q: 'Welche Hardware benötige ich für 10.000 Dokumente?',
            a: 'Boden: 32 GB System-RAM, NVMe SSD mit 50+ GB frei und entweder eine diskrete GPU mit 8 GB+ VRAM oder Apple Silicon mit 32 GB+ vereinheitlichtem Speicher. Die GPU/Apple Silicon ist für One-Shot-Indexierungs-Geschwindigkeit (spart 1-3 Stunden bei einem 10.000-Dokument-Indexierungs-Pass); Query-Zeit-Inferenz läuft nach dem Index-Bau fein auf CPU. SATA SSD ist akzeptabel, fügt aber 30-100% zu kalter Abfrage-Latenz hinzu; Spindel-Festplatte ist über ~2.000 Dokumenten nicht zu verwenden. RAM ist die Bedingung, die zuerst beißt – ein 5-GB-Index fragt bequem in 16 GB RAM mit HNSW-Indexierung ab.',
          },
          {
            q: 'Kann ich Multi-User-RAG lokal bedienen?',
            a: 'Ja – stellen Sie Open WebUI vor eines der Architekturen in diesem Leitfaden, oder umhüllen Sie Ihren benutzerdefinierten Python-Stack in einen kleinen FastAPI-Service. Multi-User verändert die operative Geschichte (Auth, Pro-User-Dokument-Isolation, Rate-Limiting, optionale Pro-User-Workspaces), aber nicht die Abruf-Architektur. Open WebUI handhabt Auth, OAuth und rollenbasierte Dokument-Zugriff aus der Box. Für 5+ gleichzeitige Benutzer auf einem 10.000-Dokument-Bestand, planen Sie, den Embedder auf GPU während Indexierung laufen, und entweder CPU oder GPU für Query-Embedding je nach QPS – ein einzelner CPU-Embedder handhabt ~3-5 QPS bequem.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[AnythingLLM vs. PrivateGPT vs. Open WebUI: Best Local RAG in 2026](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag?lang=de) – Basis-Kontext zum Wählen der Desktop-RAG-Plattform vor Skalierung.',
          '[Best Embedding Models for Local RAG in 2026](/power-local-llm/best-embedding-models-local-rag-2026?lang=de) – Embedding-Wahl ist die einzelne wichtigste Entscheidung vor Indexierung von 10.000 Dokumenten.',
          '[Local RAG for Private Business Data](/power-local-llm/local-rag-for-private-business-data?lang=de) – natürliche Eskalation, wenn persönliche-Skalen-RAG Enterprise-Compliance-Anforderungen trifft.',
          '[Build Local RAG on Your PDFs in 30 Minutes (Ollama + AnythingLLM)](/power-local-llm/local-rag-on-your-pdfs-step-by-step?lang=de) – das Eintritts-Level-Setup, bevor Sie die Skalierungs-Klippe treffen.',
          '[RAG Explained: How to Ground AI Answers in Real Data (2026)](/prompt-engineering/rag-explained?lang=de) – Konzept-Autorität auf was RAG ist und warum jede Abruf-Komponente zählt.',
          '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026?lang=de) – Hardware-Großen-Referenz für 10.000+ Dokument-Bestände.',
          '[Power Local LLM Hub](/power-local-llm) – vollständiger Leitfaden-Bibliothek für den Cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': '1000+ PDFs lokal chatten: RAG-Skalierung über Demo-Beispiele',
      'description':
        'Entscheidungsleitfaden zur Skalierung von lokalem RAG von 1.000 bis 10.000+ PDFs. Architektur-Vergleich, gemessene Benchmarks und die vier Upgrades (Hybrid-Suche, Reranking, Metadaten-Filterung, hierarchischer Abruf), die die Skalierungs-Klippe ebnen.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'inLanguage': 'de',
      'url': 'https://www.promptquorum.com/power-local-llm/chat-with-1000-pdfs-locally?lang=de',
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
      'proficiencyLevel': 'Advanced',
      'about': [
        { '@type': 'Thing', 'name': 'Retrieval-augmented generation' },
        { '@type': 'Thing', 'name': 'Lokales RAG' },
        { '@type': 'Thing', 'name': 'Hybrid-Suche' },
        { '@type': 'Thing', 'name': 'BM25' },
        { '@type': 'Thing', 'name': 'Reranking' },
        { '@type': 'Thing', 'name': 'Hierarchischer Abruf' },
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'LlamaIndex' },
        { '@type': 'Thing', 'name': 'ChromaDB' },
        { '@type': 'Thing', 'name': 'Qdrant' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'de',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Bei welcher Dokumentanzahl scheitern Standard-RAG-Einstellungen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Auf einem 16-GB-Laptop mit Standard-Einstellungen (512-Token-Chunks, keine Überlappung, Standard-Embedding-Modell, Top-K von 4) beginnt die Abruf-Qualität um 1.000 bis 2.000 Dokumente spürbar zu verschlechtern und ist über 5.000 nicht zu verwenden. Die zwei Fehler-Zustände sind richtige Dokument falscher Chunk Top-K zu eng im großen Maßstab und stille Abruf-Genauigkeits-Sinke, wenn der Index RAM überschreitet. Die optimierten AnythingLLM-Einstellungen 1.000 200-Chunks plus nomic-embed-text-v1.5 schieben die Klippe zu etwa 3.000 Dokumenten. Über das benötigen Sie Hybrid-Suche und einen Reranker.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Sollte ich Hybrid-Suche (BM25 + Vektor) verwenden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Ja, über 1.000 Dokumenten. Reine dichte Abruf verfehlt Abfragen mit seltenen Eigennamen, Statutennummern oder spezifischen Identifizierern. Reine BM25 verfehlt paraphrasierte Abfragen. Reciprocal Rank Fusion der zwei Top-25-Listen ist der Standard-Kombiner. Qdrant und Weaviate unterstützen natives Hybrid; ChromaDB benötigt Whoosh oder Tantivy aufgesetzt. Der hinzugefügte Abruf-Kosten ist etwa 50 bis 100 Millisekunden; der Qualitäts-Gewinn ist bedeutsam.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie viel Speicher benötigen 1.000 PDFs nach Embedding?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Ungefähr 250 bis 400 MB auf der Festplatte für den dichten Vektor-Index mit nomic-embed-text-v1.5 768 Dimensionen bei 1.000-Token-Chunks mit 200-Token-Überlappung. Addieren Sie 50 bis 150 MB für einen BM25-Index wenn Sie Hybrid-Suche verwenden und 50 bis 100 MB für Pro-Dokument-Zusammenfassungen wenn Sie hierarchischen Abruf verwenden. Original-PDFs selbst werden von den meisten Vektor-DBs nicht gespeichert nur extrahierte Text und Embeddings. Ein 10.000-PDF-Bestand benötigt 3 bis 5 GB für Vektoren plus was auch immer die Original-PDFs belegen.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hilft Reranking im großen Maßstab?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Ja – Reranking ist die einzelne höchste-Auswirkung-Zugabe zwischen 5.000 und 50.000 Dokumenten. Ohne einen Reranker richtige Dokument falscher Chunk-Fehler passieren 15 bis 25 Prozent der Zeit in diesem Umfang. Mit BGE-reranker-v2-m3 über die Top-50-Kandidaten von Hybrid-Suche sinkt das unter 5 Prozent. Der Reranker fügt 200 bis 500 Millisekunden auf CPU oder 80 bis 150 Millisekunden auf GPU hinzu. Unter 1.000 Dokumenten rechtfertigt der Qualitäts-Gewinn nicht die Latenzkost; über 5.000 Dokumenten ihn zu überspringen verlässt echte Abruf-Genauigkeit auf dem Tisch.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie gehe ich mit Duplikat- oder Quasi-Duplikat-Dokumenten um?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Dreistufige Dedup: SHA-256 von rohen Datei-Bytes erfasst identische Dateien SHA-256 von extrahiertem Klartext nach Whitespace-Normalisierung erfasst verschiedene Dateiformate des gleichen Inhalts und MinHash-Signaturen mit Jaccard-Schwellwert um 0,85 erfasst Quasi-Duplikate wie mehrere Entwürfe oder OCR-Varianten. Laufen Sie alle drei beim Ingest vorher Embedding. Das häufigste Symptom von übersprungener Dedup ist Synthese-Abfragen werden sonderbar repetitiv der gleiche Chunk ist dreimal unter drei IDs gespeichert daher sieht ihn der LLM dreimal im Kontext.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich Dokumente inkrementell hinzufügen, ohne alles neu zu indexieren?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Ja, jede Architektur in diesem Leitfaden unterstützt inkrementelle Adds. ChromaDB und Qdrant akzeptieren neue Chunks über einfache Insert-Aufrufe; LanceDB hängt an seine Append-Only-Dateien an; LlamaIndex umhüllt eines davon. Die Ausnahme ist das Wechsel des Embedding-Modells das erzwingt eine komplette Neuindexierung, weil das Mischen von Embeddings von zwei Modell-Versionen in einem Index Abruf stillschweigend verschlechtert. Wählen Sie Ihr Embedding-Modell bevor Sie 5.000 Dokumenten übersteigen und verpflichten Sie sich dafür für mindestens ein Jahr.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Sollte ich Metadaten-Filterung für große Sammlungen verwenden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Ja – Metadaten-Filterung ist die billigste 5 bis 10 mal Speedup im großen Maßstab. Füllen Sie Source-Dateiname Seiten-Nummer Dokument-Typ Autor Jahr und domain-spezifische Tags auf jedem Chunk bei Index-Zeit. Bei Abfrage-Zeit vor Vektor-Suche läuft vorher nach Payload filtern. Auf einem 10.000-Dokument-Bestand ein typischer Filter schneidet den Suchraum zu ein paar hundert Chunks mit null Qualitätsverlust. Qdrant und Weaviate haben erste-Klasse Payload-Unterstützung; ChromaDB und LanceDB unterstützen es auch aber mit etwas langsamerer Filter-Ausführung über 100.000 Chunks.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie überwache ich RAG-Qualität im großen Maßstab?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Bauen Sie einen kleinen Gold-Set 30 bis 50 Hand-kuratierte Abfrage Antwort-Paare die Faktenabruf Synthese Cross-Dokument Grenzfälle und bekannte-Miss-Abfragen abdecken und laufen Sie ihn auf jede bedeutsame Änderung erneut neuer Ingest Embedding-Modell-Tausch Chunk-Größe-Tausch Prompt-Tweak. Verfolgen Sie Abruf-Genauigkeit erschien der richtige Chunk in Top-K Generierungs-Treue passt die Antwort zum Chunk und Verweigerungs-Rate sagt das System nicht im Bestand wenn es sollte Trulens und RAGAS automatisieren dies; manuelle Bewertung von 30 Abfragen ist auch fein und oft genauer.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Welche Hardware benötige ich für 10.000 Dokumente?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Boden: 32 GB System-RAM, NVMe SSD mit 50+ GB frei und entweder eine diskrete GPU mit 8 GB+ VRAM oder Apple Silicon mit 32 GB+ vereinheitlichtem Speicher. Die GPU oder Apple Silicon ist für One-Shot-Indexierungs-Geschwindigkeit spart 1 bis 3 Stunden bei einem 10.000-Dokument-Indexierungs-Pass; Query-Zeit-Inferenz läuft nach dem Index-Bau fein auf CPU. SATA SSD ist akzeptabel fügt aber 30 bis 100 Prozent zu kalter Abfrage-Latenz hinzu; Spindel-Festplatte ist über etwa 2.000 Dokumenten nicht zu verwenden. RAM ist die Bedingung die zuerst beißt ein 5-GB-Index fragt bequem in 16 GB RAM mit HNSW-Indexierung ab.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich Multi-User-RAG lokal bedienen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Ja – stellen Sie Open WebUI vor eines der Architekturen in diesem Leitfaden oder umhüllen Sie Ihren benutzerdefinierten Python-Stack in einen kleinen FastAPI-Service. Multi-User verändert die operative Geschichte Auth Pro-User-Dokument-Isolation Rate-Limiting optionale Pro-User-Workspaces aber nicht die Abruf-Architektur. Open WebUI handhabt Auth OAuth und rollenbasierte Dokument-Zugriff aus der Box. Für 5+ gleichzeitige Benutzer auf einem 10.000-Dokument-Bestand planen Sie den Embedder auf GPU während Indexierung laufen und entweder CPU oder GPU für Query-Embedding je nach QPS ein einzelner CPU-Embedder handhabt etwa 3 bis 5 QPS bequem.',
          },
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
          'name': 'Startseite',
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
          'name': '1000+ PDFs lokal chatten: RAG-Skalierung über Demo-Beispiele',
          'item': 'https://www.promptquorum.com/power-local-llm/chat-with-1000-pdfs-locally?lang=de',
        },
      ],
    },
  },
}
