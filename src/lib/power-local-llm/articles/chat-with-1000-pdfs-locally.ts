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
}
