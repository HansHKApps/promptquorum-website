// Power Local LLM — Build Local RAG on Your PDFs in 30 Minutes (Tutorial)
// Slug: local-rag-on-your-pdfs-step-by-step
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
    title: 'Build Local RAG on Your PDFs in 30 Minutes (Ollama + AnythingLLM)',
    seoTitle: 'Local RAG on Your PDFs 2026: Step-by-Step Setup',
    intro:
      'A complete walk-through of the fastest path to a working personal RAG system on a 16 GB RAM laptop. Stack: Ollama, Llama 3.3 8B, AnythingLLM, nomic-embed-text. Total elapsed time: 30 minutes from blank machine to chatting with your own PDFs.',
    metaDescription:
      'Step-by-step: install Ollama, set up AnythingLLM, drop in PDFs, chat with them. Total time 30 minutes. Tested on a 16 GB RAM laptop. May 2026.',
    twitterDescription:
      '30 minutes from blank laptop to chatting with your own PDFs. Ollama + Llama 3.3 8B + AnythingLLM + nomic-embed-text. Tested on 16 GB RAM.',
    current_models_mentioned: ['Llama 3.3 8B', 'nomic-embed-text-v1.5', 'Phi-4 Mini', 'Mistral Small'],
    current_hardware_mentioned: ['16 GB RAM laptop', 'Apple M1', 'Apple M3', 'Intel Core Ultra 5', 'AMD Ryzen 7 7700'],
    audience: 'Developers and power users who want a working personal RAG system on their own laptop, without depending on a cloud API.',
    readTime: '12 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'local RAG on PDFs',
    targetKeywords: [
      'local rag pdfs tutorial',
      'ollama anythingllm rag',
      'chat with pdfs locally',
      'local rag setup 30 minutes',
      'private rag on laptop',
    ],
    leadAnswerBlock:
      '**Install Ollama, pull Llama 3.3 8B, install AnythingLLM, point it at Ollama, switch the embedding model to nomic-embed-text, drag your PDFs into a workspace, and ask questions. On a 16 GB RAM laptop the full path takes 30 minutes — most of which is the model download.**',
    quickAnswerTop: {
      en: {
        question: 'How do I build a local RAG system on my PDFs in 30 minutes?',
        answer:
          'Install Ollama (3 min), pull Llama 3.3 8B (8 min, mostly download), install AnythingLLM (4 min), wire it to Ollama (3 min) and switch its embedder to nomic-embed-text, drop PDFs into a workspace (5 min for embedding), test queries (5 min), and tune chunk size (2 min). Total: 30 minutes on a 16 GB RAM laptop. The system runs fully offline once installed.',
        bullets: [
          'Stack: Ollama + Llama 3.3 8B Q4_K_M + AnythingLLM + nomic-embed-text-v1.5',
          'Hardware floor: 16 GB RAM, 20 GB free disk, modern CPU (any Apple Silicon, Ryzen 5000+, Intel 11th-gen+)',
          'Internet needed only for the initial model and app downloads — inference is fully local',
          'Works on macOS, Windows 10/11, and Linux without admin/root for the AnythingLLM step',
          'No code, no Python, no vector database setup — AnythingLLM ships LanceDB built-in',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'What You Will Build', anchor: '#stack-overview' },
      { label: 'Prerequisites', anchor: '#prerequisites' },
      { label: 'Step 1: Install Ollama (3 min)', anchor: '#step-1-install-ollama' },
      { label: 'Step 2: Pull Llama 3.3 8B (8 min)', anchor: '#step-2-pull-model' },
      { label: 'Step 3: Install AnythingLLM (4 min)', anchor: '#step-3-install-anythingllm' },
      { label: 'Step 4: Configure Embedding Model (3 min)', anchor: '#step-4-configure-embedding' },
      { label: 'Step 5: Upload First PDFs (5 min)', anchor: '#step-5-upload-pdfs' },
      { label: 'Step 6: Test Queries (5 min)', anchor: '#step-6-test-queries' },
      { label: 'Step 7: Tune Chunk Size (2 min)', anchor: '#step-7-tune-chunks' },
      { label: 'Sample Queries and Expected Answers', anchor: '#sample-queries' },
      { label: 'Troubleshooting', anchor: '#troubleshooting' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Stack:** Ollama runs the LLM, AnythingLLM owns the UI + vector store, Llama 3.3 8B Q4_K_M answers, nomic-embed-text-v1.5 retrieves.',
          '**Time:** 30 minutes total. The longest single step is the model pull (~8 min on a 50 Mbps connection).',
          '**Hardware:** 16 GB RAM is the practical floor. 8 GB works only with Phi-4 Mini and small document sets — see the alternative model section.',
          '**Privacy:** Once installed, nothing leaves your machine. PDFs, embeddings, prompts, and outputs all stay local.',
          '**No code:** Zero Python, zero terminal beyond the two Ollama commands. AnythingLLM is a desktop app with drag-and-drop document import.',
          '**Default embedder is wrong:** AnythingLLM ships with a tiny default embedder. Switch to nomic-embed-text-v1.5 in Step 4 — retrieval quality jumps measurably.',
          '**Default chunk size is also wrong for PDFs:** 1000-token chunks with 200-token overlap is a better starting point than the 512/0 default. Tuned in Step 7.',
        ],
      },
      stackOverview: {
        id: 'stack-overview',
        title: 'What You Will Build',
        content:
          '**A self-contained desktop RAG system: a chat window where you drop PDFs and ask questions about them.** Four open-source pieces, all free, all running on your laptop:',
        items: [
          '**Ollama** — local LLM runtime. Manages model files, exposes an OpenAI-compatible API on localhost:11434. Provides the answer model.',
          '**Llama 3.3 8B Instruct (Q4_K_M)** — Meta\'s 8B-parameter chat model, quantized to fit in ~5 GB RAM. Good answer quality on document-grounded questions in 2026.',
          '**AnythingLLM Desktop** — the UI + vector store + RAG orchestration. Ships LanceDB embedded, parses PDFs/DOCX/TXT/MD natively, talks to Ollama as its LLM provider.',
          '**nomic-embed-text-v1.5** — embedding model. 768-dim vectors, runs through Ollama at ~600 chunks/sec on a modern CPU. Replaces AnythingLLM\'s underpowered default.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A local RAG system is four pieces — a runtime (Ollama), an answer model (Llama 3.3 8B), a UI plus vector store (AnythingLLM), and an embedding model (nomic-embed-text-v1.5) — wired together on one machine with no cloud calls.',
          },
          {
            type: 'plain-terms',
            text: 'Drop a PDF, ask a question, get a grounded answer with citations — fully offline. The four pieces split the work: Ollama runs the models, Llama 3.3 8B writes the answer, AnythingLLM handles the chunks and vectors, nomic-embed-text-v1.5 turns text into the vectors that make retrieval work. Total install: ~30 minutes; total cost: $0.',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'AnythingLLM also has a built-in default LLM and a built-in default embedder. Both are deliberately tiny so the app starts fast on weak hardware. We replace both in Steps 4 and 6 because retrieval quality is the entire game in a RAG system.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-rag-architecture-en.svg',
        imageCaption: 'Local RAG stack: Ollama (runtime, localhost:11434), Llama 3.3 8B Q4_K_M (~4.9 GB, answer model), AnythingLLM Desktop (UI + LanceDB vector store), and nomic-embed-text-v1.5 (~280 MB embedder). Data flows: PDFs → AnythingLLM → nomic-embed-text → LanceDB → Llama 3.3 8B → Answer.',
      },
      prerequisites: {
        id: 'prerequisites',
        title: 'What You Need Before You Start',
        content:
          '**A laptop with 16 GB RAM, 20 GB free disk, an internet connection, and 30 minutes.** Operating system can be macOS 12+, Windows 10/11, or any modern Linux desktop.',
        items: [
          '**RAM:** 16 GB is the practical floor for Llama 3.3 8B Q4 + AnythingLLM + your usual desktop apps. 8 GB works with Phi-4 Mini Q4 instead — see Step 2 alternatives.',
          '**Disk:** 20 GB free. Llama 3.3 8B Q4_K_M is ~5 GB, the embedding model is ~280 MB, AnythingLLM is ~600 MB, and you need headroom for embeddings (~10–30 MB per 100 PDF pages).',
          '**Network:** ~50 Mbps minimum for the model pull. On 25 Mbps the same step takes ~16 minutes; the rest of the tutorial is unaffected.',
          '**Permissions:** No admin/root needed for AnythingLLM. Ollama installs to `/usr/local/bin` on macOS/Linux (asks for password once) or `%LOCALAPPDATA%` on Windows (no admin).',
          '**Documents ready:** 5–20 PDFs to start. Anything larger works, but a small set is faster to test retrieval quality on.',
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-prerequisites-en.svg',
        imageCaption: 'System requirements: 16 GB RAM (floor for Llama 3.3 8B Q4 + AnythingLLM), 20 GB free disk, 50 Mbps for the model pull. macOS 12+, Windows 10/11, or Linux. No admin needed for AnythingLLM.',
      },
      step1InstallOllama: {
        id: 'step-1-install-ollama',
        title: 'Step 1: Install Ollama (3 min)',
        content:
          '**Download the Ollama installer for your OS from ollama.com/download and run it. The installer adds the `ollama` CLI to PATH and starts a background service.** No configuration choices to make.',
        items: [
          '**macOS:** download the `.dmg`, drag Ollama to Applications, launch once to install the CLI helper. The menu bar shows a llama icon when the service is running.',
          '**Windows:** download the `.exe`, run it, accept the defaults. Ollama runs as a background service after install — no separate launch needed.',
          '**Linux:** one-line install: `curl -fsSL https://ollama.com/install.sh | sh`. The script registers a systemd unit; start with `sudo systemctl start ollama`.',
          '**Verify:** open a terminal and run `ollama --version`. You should see a version string. If the command is not found, restart the terminal so it picks up the updated PATH.',
        ],
        codeBlock: 'ollama --version\n# ollama version is 0.5.x  (any 0.5+ build works for this tutorial)',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'warning',
            text: 'If `ollama --version` works but later steps fail with "connection refused on localhost:11434", the background service did not auto-start. macOS: launch the app from Applications. Linux: `sudo systemctl start ollama`. Windows: open the Ollama tray icon.',
          },
        ],
      },
      step2PullModel: {
        id: 'step-2-pull-model',
        title: 'Step 2: Pull Llama 3.3 8B (8 min)',
        content:
          '**Run `ollama pull llama3.3:8b-instruct-q4_K_M` in a terminal. This downloads the quantized 4.9 GB GGUF and registers it with Ollama.** Most of the 30-minute total is this single step on a typical home connection.',
        items: [
          '**Download size:** ~4.9 GB (Q4_K_M quantization). At 50 Mbps you will wait roughly 8 minutes; at 100 Mbps roughly 4 minutes; at 25 Mbps roughly 16 minutes.',
          '**Watch progress:** Ollama prints a percentage and rate. The download resumes if it gets interrupted — re-run the same command.',
          '**Smoke-test the model:** after the pull finishes, run `ollama run llama3.3:8b-instruct-q4_K_M` and ask "What is 2+2?". Confirm you get a reasonable answer. Type `/bye` to exit.',
          '**Lower-RAM alternative:** if you have 8 GB RAM instead of 16 GB, run `ollama pull phi3:mini` (Phi-4 Mini, ~2.4 GB on disk). Use that model name in Step 3 instead. Quality is lower on long documents but the system works.',
        ],
        codeBlock:
          '# Recommended for 16 GB RAM\nollama pull llama3.3:8b-instruct-q4_K_M\n\n# Alternative for 8 GB RAM\nollama pull phi3:mini\n\n# Quick smoke test (type /bye to exit)\nollama run llama3.3:8b-instruct-q4_K_M',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Already have other Ollama models? `ollama list` shows them all. You can keep multiple models installed and switch between them in AnythingLLM\'s workspace settings.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-model-options-en.svg',
        imageCaption: 'Model options by RAM: Llama 3.3 8B Q4_K_M (~4.9 GB, 16 GB RAM, ~8 min at 50 Mbps) is recommended; Phi-4 Mini Q4 (~2.4 GB, 8 GB RAM, ~4 min) for low-memory machines; Mistral Small Q4_K_M (~4.1 GB, 16 GB RAM, ~7 min) as an alternative.',
      },
      step3InstallAnythingLlm: {
        id: 'step-3-install-anythingllm',
        title: 'Step 3: Install AnythingLLM Desktop (4 min)',
        content:
          '**Download AnythingLLM Desktop from useanything.com (or anythingllm.com) and run the installer. Launch the app and skip the "create cloud account" prompt — Local-only mode is offered on the next screen.** Installation is unattended.',
        items: [
          '**macOS:** download the `.dmg`, drag AnythingLLM to Applications, launch. macOS may ask you to confirm the app is from a recognized developer; click "Open" in System Settings → Privacy if prompted.',
          '**Windows:** download the `.exe` installer. Windows SmartScreen may flag it as "not commonly downloaded" — click "More info" → "Run anyway". The app installs to `%LOCALAPPDATA%\\anythingllm-desktop` (no admin).',
          '**Linux:** download the `.AppImage`, mark it executable (`chmod +x AnythingLLMDesktop.AppImage`), double-click to run.',
          '**First-run choice:** AnythingLLM offers a hosted cloud workspace OR a local-only setup. Pick **Local Setup**. This is the choice that keeps the entire system offline.',
          '**Workspace creation:** when prompted, name the first workspace something descriptive ("research-papers", "contracts", "personal-notes"). Each workspace gets its own document collection and embedding store.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'AnythingLLM\'s default LLM is a tiny built-in model meant only for the welcome demo. We point it at your local Ollama in the next step. Do not use the default for real queries — the answers will be unusably weak.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-install-flow-en.svg',
        imageCaption: 'AnythingLLM Desktop 4-step install: Download from anythingllm.com (~600 MB), Install with no admin required, Launch and skip the cloud prompt, then choose "Local Setup" to keep all data offline.',
      },
      step4ConfigureEmbedding: {
        id: 'step-4-configure-embedding',
        title: 'Step 4: Wire AnythingLLM to Ollama and Switch the Embedder (3 min)',
        content:
          '**Open AnythingLLM Settings → LLM Preference. Pick "Ollama" as the provider, set the URL to `http://127.0.0.1:11434`, and select `llama3.3:8b-instruct-q4_K_M` from the model dropdown. Save. Then go to Embedding Preference and switch from the default to `nomic-embed-text` via Ollama.**',
        items: [
          '**LLM Preference panel:** Provider = Ollama, Endpoint = `http://127.0.0.1:11434`, Model = `llama3.3:8b-instruct-q4_K_M`. Click "Save Changes". A green checkmark confirms the connection.',
          '**Embedding Preference panel:** the default is "AnythingLLM Native Embedder" — a tiny built-in. Change Provider to Ollama, then run `ollama pull nomic-embed-text` in your terminal first (~280 MB), then refresh the model list in the panel and select `nomic-embed-text:latest`. Click Save.',
          '**Re-embed warning:** if you already added documents under the old embedder, AnythingLLM will prompt you to re-embed them. On a fresh install you have no documents yet, so the prompt does not appear.',
          '**Vector DB:** leave at the default (LanceDB). It is local, file-backed, and needs zero configuration. Switch only if you specifically need PGVector or Qdrant.',
        ],
        codeBlock:
          '# Run this in your terminal before opening the Embedding Preference panel\nollama pull nomic-embed-text',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Why nomic-embed-text-v1.5 specifically? In May 2026 it scores in the top 5 of the MTEB Retrieval leaderboard for any model under 500 MB, runs at 400–800 chunks/sec on a modern CPU and 2000+ chunks/sec on Apple Silicon, and is Apache 2.0 licensed. It is the default first-upgrade for almost every local RAG stack — see the [embedding model comparison](/power-local-llm/best-embedding-models-local-rag-2026) for alternatives.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-config-flow-en.svg',
        imageCaption: 'Step 4 in two panels: LLM Preference (Provider = Ollama, Endpoint = http://127.0.0.1:11434, Model = llama3.3:8b-instruct-q4_K_M), then Embedding Preference (pull nomic-embed-text first, then select nomic-embed-text:latest via Ollama).',
      },
      step5UploadPdfs: {
        id: 'step-5-upload-pdfs',
        title: 'Step 5: Upload Your First PDFs (5 min)',
        content:
          '**Open your workspace, click "Upload Documents", and drag in 5–20 PDFs. AnythingLLM extracts text, chunks it (default 512 tokens, 0 overlap), embeds each chunk through Ollama, and stores vectors in LanceDB.** A progress bar shows pages parsed and chunks embedded.',
        items: [
          '**Supported formats:** PDF (text-based), DOCX, TXT, MD, EPUB, plus URL scraping. Scanned-image PDFs need OCR first — see the troubleshooting section.',
          '**Speed:** 400–800 chunks/sec on a modern CPU and 2000+ chunks/sec on Apple Silicon once Ollama is warm. A 20-PDF set with ~50 pages each (~3000 chunks total) finishes in 5–8 seconds of embedding time on a modern CPU and 1–2 seconds on Apple Silicon, plus parsing time. Plan for ~5 minutes total to upload, parse, and embed 20 PDFs.',
          '**RAM during embedding:** Ollama loads the embedding model (~280 MB) on first request and keeps it cached. Subsequent embeds reuse the cache.',
          '**"Move to Workspace":** after upload, AnythingLLM places documents in a "limbo" pool. You must explicitly click "Move to Workspace" → "Save and Embed" to make them queryable. This two-step flow is intentional — it lets you preview before paying the embedding cost.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'PDFs from older OCR scans often contain garbled or empty text layers — the file looks fine to human eyes but AnythingLLM extracts "[image]" or empty strings. Open the PDF in a text editor (or run `pdftotext file.pdf -` from poppler-utils) to confirm the text layer exists before uploading.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-embed-flow-en.svg',
        imageCaption: 'PDF upload to query in 5 steps: Upload PDFs (drag & drop) → Parse text layer → Chunk at 1000 tokens / 200 overlap → Embed via nomic-embed-text through Ollama → Store in LanceDB and ask questions. Speed: 400–800 chunks/sec on CPU, 2000+ on Apple Silicon.',
      },
      step6TestQueries: {
        id: 'step-6-test-queries',
        title: 'Step 6: Test Queries (5 min)',
        content:
          '**Type a question in the workspace chat. AnythingLLM embeds the question, retrieves the top-N chunks from LanceDB, builds a prompt with those chunks as context, sends to Ollama, and shows the answer.** Latency on a 16 GB RAM laptop is roughly 3–10 seconds per query.',
        items: [
          '**Start with a fact-recall query:** "What does [specific term from one of your PDFs] mean?" — this tests retrieval grounding. The answer should cite the PDF and quote the exact phrasing.',
          '**Then a synthesis query:** "Summarize the main argument of [author/document title]." — this tests how well the model integrates multiple chunks.',
          '**Then a comparison query** (only if your PDFs contain comparable content): "Compare how [doc A] and [doc B] handle [topic]." — this tests cross-document retrieval.',
          '**Inspect citations:** AnythingLLM shows the source chunks beneath each answer. Click them to verify the model is grounding on the right passages. If the citations are off-topic, retrieval is broken — see Step 7.',
        ],
      },
      step7TuneChunks: {
        id: 'step-7-tune-chunks',
        title: 'Step 7: Tune Chunk Size (2 min)',
        content:
          '**Open Workspace Settings → Vector Database. Change Chunk Size from 512 to 1000 and Chunk Overlap from 0 to 200. Click Save, then re-embed your documents (the UI prompts).** This is the single biggest retrieval-quality lever in AnythingLLM.',
        items: [
          '**Why 1000/200 instead of 512/0:** PDF paragraphs and sections rarely fit cleanly in 512 tokens. The 200-token overlap means a sentence that straddles a chunk boundary still appears whole in at least one neighbour, so retrieval picks it up.',
          '**Re-embedding cost:** the 20-PDF / 3000-chunk set re-embeds in ~5 seconds. Larger sets take proportionally longer. The chunk store is overwritten, not appended.',
          '**Top-K retrieval:** the default top-K is 4 (the 4 best-matching chunks become context). Bump to 6–8 if your answers feel under-grounded; drop to 2–3 if the model gets distracted by noisy chunks.',
          '**Prompt template:** AnythingLLM exposes the system prompt under Workspace → Chat Settings → Prompt. The default is fine; tune only if you have a specific failure mode.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Empirical tuning beats theory: ask the same 5 test queries before and after the chunk-size change, and compare. If retrieval at 1000/200 is worse, you probably have very short documents (one-page memos, code docstrings) — try 256/64 instead.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-chunk-settings-en.svg',
        imageCaption: 'Default vs recommended chunk settings: default 512/0/Top-K 4 leaves sentence fragments at boundaries. Recommended 1000 tokens / 200 overlap / Top-K 4–6 captures boundary sentences in the overlap window. Re-embedding 20 PDFs takes ~5 seconds.',
      },
      sampleQueries: {
        id: 'sample-queries',
        title: 'What Should the Answers Actually Look Like?',
        content:
          '**A correctly-tuned local RAG system answers fact-recall questions verbatim from the source, synthesizes when asked, and cites the chunks it used.** Three example queries on a research-paper workspace, with what a healthy system returns:',
        rows: [
          {
            'Query type': 'Fact recall',
            'Example': 'What sample size did Smith et al. 2024 use?',
            'Healthy answer pattern': 'Direct quote from the methods section + citation to the chunk',
            'Failure pattern': 'Generic answer ("typically researchers use 100–500 participants") with no quote',
          },
          {
            'Query type': 'Synthesis',
            'Example': 'Summarize the main contribution of this paper.',
            'Healthy answer pattern': '3–5 sentences pulling from abstract + conclusion chunks',
            'Failure pattern': 'Restates the title or quotes one sentence from the abstract',
          },
          {
            'Query type': 'Cross-document',
            'Example': 'How do Smith and Jones disagree on chunk overlap?',
            'Healthy answer pattern': 'Quotes from both papers with explicit attribution',
            'Failure pattern': 'Cites only one paper, or invents a disagreement that is not in the chunks',
          },
        ],
        columns: ['Query type', 'Example', 'Healthy answer pattern', 'Failure pattern'],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A healthy local RAG answer quotes the source chunk verbatim for fact recall, synthesises across chunks for summary questions, and cites the specific chunk IDs it used — generic answers without quotes signal a retrieval problem, not a model problem.',
          },
          {
            type: 'plain-terms',
            text: 'If the answer reads like "typically researchers use 100-500 participants" instead of "Smith et al. used 287 participants (Methods, p.4)", retrieval is broken and the model is winging it from training data. Fix retrieval first (chunk size, embedder, similarity threshold) before changing the answer model.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Use these three query patterns as your test set after every retrieval-config change. If fact-recall still misses but synthesis works, your chunks are too coarse. If synthesis misses but fact-recall works, your top-k is too low. The pattern of what fails tells you which knob to turn.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-query-types-en.svg',
        imageCaption: '3 RAG query types: Fact Recall (direct quote + citation = healthy; generic answer = broken retrieval), Synthesis (3–5 sentences from abstract + conclusion = healthy), Cross-Document (quotes from both papers = healthy; cites one or invents = broken). Green = healthy, red = fix retrieval first.',
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'When Something Breaks: Six Common Failure Modes and Fixes',
        content:
          '**Most failures fall into one of six categories. Match the symptom to the row, apply the fix.**',
        rows: [
          {
            'Symptom': 'AnythingLLM shows "Cannot connect to Ollama"',
            'Likely cause': 'Ollama service not running, or wrong endpoint',
            'Fix': 'Run `ollama serve` (or restart the app/service). Confirm endpoint is `http://127.0.0.1:11434`, not `localhost:11434` on Windows where the alias sometimes fails.',
          },
          {
            'Symptom': 'Model pull stalls at 0% or 99%',
            'Likely cause': 'CDN edge issue or disk full',
            'Fix': 'Cancel with Ctrl+C, run `df -h` to confirm disk space, then re-run the same `ollama pull` — Ollama resumes from the last byte.',
          },
          {
            'Symptom': 'Embedding step appears to hang',
            'Likely cause': 'Ollama loading the embedding model for the first time',
            'Fix': 'Wait 30–60 seconds. First-time model load takes 10–40 seconds depending on disk speed. Subsequent embeds are fast.',
          },
          {
            'Symptom': 'Retrieval returns chunks unrelated to the query',
            'Likely cause': 'Default 512/0 chunking + weak default embedder',
            'Fix': 'Confirm Step 4 (nomic-embed-text) and Step 7 (1000/200 chunking) were both applied. Re-embed the workspace.',
          },
          {
            'Symptom': 'Answers are short, generic, or refuse to engage with the source',
            'Likely cause': 'Wrong LLM still selected (tiny default) or context too small',
            'Fix': 'Confirm LLM Preference shows `llama3.3:8b-instruct-q4_K_M`. Bump top-K from 4 to 6.',
          },
          {
            'Symptom': 'Scanned-image PDFs upload but produce empty chunks',
            'Likely cause': 'No text layer in the PDF — pure raster image',
            'Fix': 'OCR the PDF first. macOS: `ocrmypdf input.pdf output.pdf`. Linux/Windows: install Tesseract + ocrmypdf. Then re-upload the OCR\'d output.',
          },
        ],
        columns: ['Symptom', 'Likely cause', 'Fix'],
        image: '/images/local-rag-on-your-pdfs-step-by-step-troubleshooting-en.svg',
        imageCaption: 'Six failure modes: connection refused (run ollama serve), stalled pull (Ctrl+C → df -h → retry), hanging embed (wait 30–60 s), off-topic chunks (apply Steps 4 + 7), short/generic answers (set llama3.3:8b-instruct-q4_K_M, bump Top-K), empty chunks from scanned PDFs (run ocrmypdf first).',
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'What if Ollama fails to install?',
            a: 'On macOS, the most common failure is Gatekeeper blocking an unsigned helper — open System Settings → Privacy & Security and click "Allow Anyway". On Windows, Defender SmartScreen may quarantine the installer; right-click → Properties → Unblock. On Linux, the install script needs sudo to write the systemd unit; if sudo is not available, download the static binary from github.com/ollama/ollama/releases and place it on your PATH manually.',
          },
          {
            q: 'Why is the embedding step slow?',
            a: 'The first embed of a session is slow because Ollama lazy-loads the embedding model into RAM (10–40 seconds depending on disk speed). After that, embedding runs at 400–800 chunks/sec on a modern CPU and 2000+ chunks/sec on Apple Silicon. If sustained throughput is below 100 chunks/sec, the model is probably running on disk-backed swap — close other apps to free RAM and retry.',
          },
          {
            q: 'How many PDFs can I upload at once?',
            a: 'AnythingLLM accepts hundreds of files in a single drag-and-drop. The practical limit is RAM during the parse step: ~1 GB peak for 100 medium-sized PDFs (50 pages each). Once embedded, the on-disk vector store is small (~10–30 MB per 100 PDF pages). For 1000+ PDFs, see the dedicated guide on [chatting with 1000 PDFs locally](/power-local-llm/chat-with-1000-pdfs-locally).',
          },
          {
            q: 'Can I use this for password-protected PDFs?',
            a: 'AnythingLLM cannot decrypt password-protected PDFs directly. Decrypt them first with `qpdf --password=YOURPASSWORD --decrypt input.pdf output.pdf` (qpdf is free, available on all three OSes), then upload the unprotected output. Delete the unprotected copy after embedding if your threat model requires it — the embeddings themselves are not human-readable.',
          },
          {
            q: 'What if my retrieval returns wrong chunks?',
            a: 'Three knobs in order of impact: switch from the default embedder to nomic-embed-text (Step 4), change chunking from 512/0 to 1000/200 and re-embed (Step 7), and bump top-K from 4 to 6 in Workspace Settings. If retrieval is still off after all three, your documents may need pre-processing — strip headers/footers, normalize whitespace, or split very long PDFs into per-chapter files.',
          },
          {
            q: 'Should I use a different model than Llama 3.3 8B?',
            a: 'Llama 3.3 8B Q4_K_M is the best quality-per-RAM trade-off in 2026 for 16 GB systems. On 8 GB RAM use Phi-4 Mini Q4_K_M (~2.4 GB). On 24 GB+ try Qwen 3 14B Q4 for noticeably better synthesis on long documents. For multilingual workloads, Mistral Nemo 12B handles non-English better than Llama 3.3.',
          },
          {
            q: 'How do I update the model later?',
            a: 'Run `ollama pull llama3.3:8b-instruct-q4_K_M` again to get the latest build, then restart AnythingLLM so it re-detects the model version. To switch to a different model entirely, run `ollama pull <new-model>` then change the LLM Preference dropdown in AnythingLLM Settings — no re-embedding needed because embeddings depend only on the embedder, not the answer model.',
          },
          {
            q: 'Can I move this to a different computer?',
            a: 'Yes. Ollama models live in `~/.ollama/models` (macOS/Linux) or `%USERPROFILE%\\.ollama\\models` (Windows) — copy the folder. AnythingLLM workspaces live in `~/.anythingllm/storage` — copy that too. On the new machine, install Ollama and AnythingLLM Desktop, then drop the copied folders into place. Workspaces and embeddings come up identically.',
          },
          {
            q: 'Does this work if my PDFs are scanned images?',
            a: 'Not directly — AnythingLLM extracts text but cannot OCR images. Pre-process scanned PDFs with `ocrmypdf input.pdf output.pdf` (cross-platform, MIT-licensed, uses Tesseract). On Apple Silicon, `ocrmypdf -l eng+deu+fra` handles 70+ languages. After OCR, the output PDF has both the original images and a searchable text layer, and AnythingLLM extracts the text correctly.',
          },
          {
            q: 'How do I back up my document database?',
            a: 'AnythingLLM stores everything under `~/.anythingllm/storage` (macOS/Linux) or `%LOCALAPPDATA%\\anythingllm-desktop\\storage` (Windows). Tar/zip that folder and copy it to a backup drive. The folder includes original documents, parsed chunks, vector indexes, and chat history. Restoring is a copy-back-and-restart — no special import flow needed.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: Best Local RAG](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — for readers who want to evaluate alternatives before committing to AnythingLLM.',
          '[Best Embedding Models for Local RAG in 2026](/power-local-llm/best-embedding-models-local-rag-2026) — for readers wanting better retrieval than nomic-embed-text.',
          '[Local AI Apps With Built-In RAG: Chat With Your Files (No Setup)](/power-local-llm/local-ai-app-with-built-in-rag) — for readers who realize they want even simpler than AnythingLLM.',
          '[RAG Explained: How to Ground AI Answers in Real Data (2026)](/prompt-engineering/rag-explained) — concept authority on what RAG is and why each component matters.',
          '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) — hardware sizing reference if you are choosing the laptop, not just the software.',
          '[Power Local LLM Hub](/power-local-llm) — full guide library for the cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Build Local RAG on Your PDFs in 30 Minutes (Ollama + AnythingLLM)',
      'description':
        'Step-by-step: install Ollama, set up AnythingLLM, drop in PDFs, chat with them. Total time 30 minutes. Tested on a 16 GB RAM laptop. May 2026.',
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
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'Llama 3.3 8B' },
        { '@type': 'Thing', 'name': 'nomic-embed-text' },
        { '@type': 'Thing', 'name': 'Retrieval-augmented generation' },
        { '@type': 'Thing', 'name': 'Local RAG' },
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
          'name': 'Build Local RAG on Your PDFs in 30 Minutes',
          'item': 'https://www.promptquorum.com/power-local-llm/local-rag-on-your-pdfs-step-by-step',
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
    title: 'Lokales RAG auf deinen PDFs in 30 Minuten (Ollama + AnythingLLM)',
    seoTitle: 'Lokales RAG auf PDFs 2026: Ollama + AnythingLLM',
    intro:
      'Eine vollständige Anleitung zum schnellsten Weg zu einem funktionsfähigen persönlichen RAG-System auf einem Laptop mit 16 GB RAM. Stack: Ollama, Llama 3.3 8B, AnythingLLM, nomic-embed-text. Gesamtdauer: 30 Minuten vom leeren System bis zum Chatten mit deinen eigenen PDFs.',
    metaDescription:
      'Schritt-für-Schritt: Ollama installieren, AnythingLLM einrichten, PDFs hochladen, chatten. Gesamtzeit 30 Minuten. Getestet auf 16-GB-RAM-Laptop. Mai 2026.',
    twitterDescription:
      '30 Minuten vom leeren Laptop bis zum Chatten mit deinen eigenen PDFs. Ollama + Llama 3.3 8B + AnythingLLM + nomic-embed-text. Getestet auf 16 GB RAM.',
    current_models_mentioned: ['Llama 3.3 8B', 'nomic-embed-text-v1.5', 'Phi-4 Mini', 'Mistral Small'],
    current_hardware_mentioned: ['16 GB RAM Laptop', 'Apple M1', 'Apple M3', 'Intel Core Ultra 5', 'AMD Ryzen 7 7700'],
    audience: 'Entwickler und Power User, die ein funktionsfähiges persönliches RAG-System auf ihrem Laptop benötigen, ohne auf eine Cloud-API angewiesen zu sein.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'lokales RAG auf PDFs',
    targetKeywords: [
      'lokales rag pdf tutorial',
      'ollama anythingllm rag',
      'chat mit pdfs lokal',
      'lokales rag setup 30 minuten',
      'privates rag auf laptop',
    ],
    leadAnswerBlock:
      '**Installiere Ollama, ziehe Llama 3.3 8B, installiere AnythingLLM, verbinde es mit Ollama, wechsle das Embedding-Modell zu nomic-embed-text, ziehe deine PDFs in einen Workspace und stelle Fragen. Auf einem 16 GB RAM Laptop dauert der ganze Weg 30 Minuten — der Großteil ist der Model-Download.**',
    quickAnswerTop: {
      de: {
        question: 'Wie baue ich ein lokales RAG-System für meine PDFs in 30 Minuten?',
        answer:
          'Installiere Ollama (3 Min.), ziehe Llama 3.3 8B (8 Min., größtenteils Download), installiere AnythingLLM (4 Min.), verbinde es mit Ollama (3 Min.) und wechsle den Embedder zu nomic-embed-text, lade PDFs in einen Workspace (5 Min. zum Embedden), teste Queries (5 Min.) und stimme die Chunk-Größe ab (2 Min.). Gesamt: 30 Minuten auf einem 16 GB RAM Laptop. Nach der Installation läuft das System vollständig offline.',
        bullets: [
          'Stack: Ollama + Llama 3.3 8B Q4_K_M + AnythingLLM + nomic-embed-text-v1.5',
          'Hardware-Minimum: 16 GB RAM, 20 GB freier Speicher, moderner CPU (jede Apple Silicon, Ryzen 5000+, Intel 11. Gen+)',
          'Internet benötigt nur für die initialen Model- und App-Downloads — Inferenz läuft vollständig lokal',
          'Funktioniert auf macOS, Windows 10/11 und Linux ohne Admin/Root für den AnythingLLM-Schritt',
          'Kein Code, kein Python, keine Vector-Database-Einrichtung — AnythingLLM bringt LanceDB eingebaut mit',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Was du bauen wirst', anchor: '#stack-overview' },
      { label: 'Voraussetzungen', anchor: '#prerequisites' },
      { label: 'Schritt 1: Ollama installieren (3 Min.)', anchor: '#step-1-install-ollama' },
      { label: 'Schritt 2: Llama 3.3 8B ziehen (8 Min.)', anchor: '#step-2-pull-model' },
      { label: 'Schritt 3: AnythingLLM installieren (4 Min.)', anchor: '#step-3-install-anythingllm' },
      { label: 'Schritt 4: Embedding-Modell konfigurieren (3 Min.)', anchor: '#step-4-configure-embedding' },
      { label: 'Schritt 5: Erste PDFs hochladen (5 Min.)', anchor: '#step-5-upload-pdfs' },
      { label: 'Schritt 6: Queries testen (5 Min.)', anchor: '#step-6-test-queries' },
      { label: 'Schritt 7: Chunk-Größe abstimmen (2 Min.)', anchor: '#step-7-tune-chunks' },
      { label: 'Beispiel-Queries und erwartete Antworten', anchor: '#sample-queries' },
      { label: 'Fehlerbehebung', anchor: '#troubleshooting' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Literatur', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Stack:** Ollama führt das LLM aus, AnythingLLM besitzt die UI + Vector Store, Llama 3.3 8B Q4_K_M antwortet, nomic-embed-text-v1.5 ruft ab.',
          '**Zeit:** 30 Minuten gesamt. Der längste einzelne Schritt ist das Model-Download (~8 Min. bei 50 Mbps).',
          '**Hardware:** 16 GB RAM ist die praktische Untergrenze. 8 GB funktioniert nur mit Phi-4 Mini und kleinen Dokumentmengen — siehe den Abschnitt Alternative Modelle.',
          '**Datenschutz:** Nach der Installation verlässt nichts deine Maschine. PDFs, Embeddings, Prompts und Ausgaben bleiben lokal.',
          '**Kein Code:** Null Python, null Terminal außer die zwei Ollama-Befehle. AnythingLLM ist eine Desktop-App mit Drag-and-Drop-Dokumentimport.',
          '**Standard-Embedder ist falsch:** AnythingLLM bringt einen winzigen Standard-Embedder mit. Wechsle zu nomic-embed-text-v1.5 in Schritt 4 — die Abruf-Qualität steigt messbar.',
          '**Standard-Chunk-Größe ist auch falsch für PDFs:** 1000-Token-Chunks mit 200-Token-Überlappung ist ein besserer Startpunkt als die Standard-Einstellung 512/0. Abgestimmt in Schritt 7.',
        ],
      },
      stackOverview: {
        id: 'stack-overview',
        title: 'Was du bauen wirst',
        content:
          '**Ein eigenständiges Desktop-RAG-System: ein Chat-Fenster, in das du PDFs ziehst und Fragen dazu stellst.** Vier Open-Source-Komponenten, alle kostenlos, alle auf deinem Laptop:',
        items: [
          '**Ollama** — lokale LLM-Laufzeit. Verwaltet Model-Dateien, stellt eine OpenAI-kompatible API auf localhost:11434 bereit. Liefert das Antwortmodell.',
          '**Llama 3.3 8B Instruct (Q4_K_M)** — Metas 8B-Parameter-Chat-Modell, quantisiert um in ~5 GB RAM zu passen. Gute Antwortqualität bei dokumentgestützten Fragen in 2026.',
          '**AnythingLLM Desktop** — die UI + Vector Store + RAG-Orchestrierung. Bringt LanceDB eingebaut mit, analysiert PDFs/DOCX/TXT/MD nativ, kommuniziert mit Ollama als LLM-Provider.',
          '**nomic-embed-text-v1.5** — Embedding-Modell. 768-dim Vektoren, läuft durch Ollama mit ~600 Chunks/Sek. auf einer modernen CPU. Ersetzt AnythingLLMs underpowered Standard.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ein lokales RAG-System ist vier Teile — eine Laufzeit (Ollama), ein Antwortmodell (Llama 3.3 8B), eine UI plus Vector Store (AnythingLLM) und ein Embedding-Modell (nomic-embed-text-v1.5) — auf einer Maschine miteinander verbunden, ohne Cloud-Aufrufe.',
          },
          {
            type: 'plain-terms',
            text: 'Ziehe ein PDF rein, stelle eine Frage, erhalte eine fundierte Antwort mit Quellenangaben — vollständig offline. Die vier Teile teilen sich die Arbeit: Ollama führt die Modelle aus, Llama 3.3 8B schreibt die Antwort, AnythingLLM verwaltet die Chunks und Vektoren, nomic-embed-text-v1.5 wandelt Text in die Vektoren um, die das Abrufen möglich machen. Gesamtinstallation: ~30 Minuten; Gesamtkosten: 0 €.',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'AnythingLLM hat auch ein eingebautes Standard-LLM und einen eingebauten Standard-Embedder. Beide sind absichtlich winzig, damit die App auf schwacher Hardware schnell startet. Wir ersetzen beide in den Schritten 4 und 6, weil Abruf-Qualität das ganze Spiel bei einem RAG-System ist.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-rag-architecture-de.svg',
        imageCaption: 'Lokaler RAG-Stack: Ollama (Laufzeit, localhost:11434), Llama 3.3 8B Q4_K_M (~4,9 GB, Antwortmodell), AnythingLLM Desktop (UI + LanceDB Vektorspeicher) und nomic-embed-text-v1.5 (~280 MB Embedder). Datenfluss: PDFs → AnythingLLM → nomic-embed-text → LanceDB → Llama 3.3 8B → Antwort.',
      },
      prerequisites: {
        id: 'prerequisites',
        title: 'Was du vor dem Start brauchst',
        content:
          '**Ein Laptop mit 16 GB RAM, 20 GB freiem Speicher, einer Internet-Verbindung und 30 Minuten Zeit.** Das Betriebssystem kann macOS 12+, Windows 10/11 oder eine moderne Linux-Desktop-Distribution sein.',
        items: [
          '**RAM:** 16 GB ist die praktische Untergrenze für Llama 3.3 8B Q4 + AnythingLLM + deine üblichen Desktop-Apps. 8 GB funktioniert mit Phi-4 Mini Q4 stattdessen — siehe Schritt-2-Alternativen.',
          '**Speicher:** 20 GB frei. Llama 3.3 8B Q4_K_M ist ~5 GB, das Embedding-Modell ist ~280 MB, AnythingLLM ist ~600 MB, und du brauchst Spielraum für Embeddings (~10–30 MB pro 100 PDF-Seiten).',
          '**Netzwerk:** ~50 Mbps Minimum für das Model-Download. Bei 25 Mbps dauert derselbe Schritt ~16 Minuten; der Rest des Tutorials wird nicht beeinflusst.',
          '**Berechtigungen:** Kein Admin/Root benötigt für AnythingLLM. Ollama installiert sich auf `/usr/local/bin` auf macOS/Linux (fragt einmal nach Passwort) oder `%LOCALAPPDATA%` auf Windows (kein Admin).',
          '**Dokumente bereit:** 5–20 PDFs zum Starten. Alles Größere funktioniert, aber eine kleine Menge ist schneller zum Testen der Abruf-Qualität.',
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-prerequisites-de.svg',
        imageCaption: 'Systemanforderungen: 16 GB RAM (Untergrenze für Llama 3.3 8B Q4 + AnythingLLM), 20 GB freier Speicher, 50 Mbps für den Model-Download. macOS 12+, Windows 10/11 oder Linux. Kein Admin für AnythingLLM erforderlich.',
      },
      step1InstallOllama: {
        id: 'step-1-install-ollama',
        title: 'Schritt 1: Ollama installieren (3 Min.)',
        content:
          '**Lade das Ollama-Installationsprogramm für dein OS von ollama.com/download herunter und führe es aus. Das Installationsprogramm fügt die `ollama`-CLI zu PATH hinzu und startet einen Hintergrund-Service.** Es gibt keine Konfigurationswahlmöglichkeiten.',
        items: [
          '**macOS:** lade die `.dmg` herunter, ziehe Ollama in Programme, starte es einmal um den CLI-Helper zu installieren. Die Menüleiste zeigt ein Lama-Icon wenn der Service läuft.',
          '**Windows:** lade die `.exe` herunter, führe sie aus, akzeptiere die Standardeinstellungen. Ollama läuft als Hintergrund-Service nach der Installation — kein separater Start benötigt.',
          '**Linux:** Einzeiler-Installation: `curl -fsSL https://ollama.com/install.sh | sh`. Das Skript registriert eine systemd-Unit; starten mit `sudo systemctl start ollama`.',
          '**Überprüfen:** Öffne ein Terminal und führe `ollama --version` aus. Du solltest eine Versionsnummer sehen. Falls der Befehl nicht gefunden wird, starte das Terminal neu, damit es den aktualisierten PATH aufgreift.',
        ],
        codeBlock: 'ollama --version\n# ollama version is 0.5.x  (any 0.5+ build works for this tutorial)',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'warning',
            text: 'Falls `ollama --version` funktioniert, aber spätere Schritte mit "Verbindung abgelehnt auf localhost:11434" fehlschlagen, wurde der Hintergrund-Service nicht auto-gestartet. macOS: starte die App aus Programme. Linux: `sudo systemctl start ollama`. Windows: öffne das Ollama-Tray-Icon.',
          },
        ],
      },
      step2PullModel: {
        id: 'step-2-pull-model',
        title: 'Schritt 2: Llama 3.3 8B ziehen (8 Min.)',
        content:
          '**Führe `ollama pull llama3.3:8b-instruct-q4_K_M` in einem Terminal aus. Dies lädt die quantisierte 4,9 GB GGUF herunter und registriert sie bei Ollama.** Der Großteil der 30-Minuten-Gesamtdauer ist dieser einzelne Schritt bei einer typischen Haushaltsverbindung.',
        items: [
          '**Download-Größe:** ~4,9 GB (Q4_K_M-Quantisierung). Bei 50 Mbps wirst du ungefähr 8 Minuten warten; bei 100 Mbps ungefähr 4 Minuten; bei 25 Mbps ungefähr 16 Minuten.',
          '**Fortschritt beobachten:** Ollama druckt einen Prozentsatz und eine Rate. Der Download wird fortgesetzt, wenn er unterbrochen wird — führe denselben Befehl erneut aus.',
          '**Smoke-Test des Modells:** Nach dem Download-Abschluss, führe `ollama run llama3.3:8b-instruct-q4_K_M` aus und frage "Was ist 2+2?". Bestätige, dass du eine angemessene Antwort bekommst. Gib `/bye` ein um zu beenden.',
          '**RAM-arme Alternative:** Falls du 8 GB RAM statt 16 GB hast, führe `ollama pull phi3:mini` aus (Phi-4 Mini, ~2,4 GB auf Disk). Verwende diesen Model-Namen stattdessen in Schritt 3. Die Qualität ist bei langen Dokumenten niedriger, aber das System funktioniert.',
        ],
        codeBlock:
          '# Empfohlen für 16 GB RAM\nollama pull llama3.3:8b-instruct-q4_K_M\n\n# Alternative für 8 GB RAM\nollama pull phi3:mini\n\n# Schneller Smoke-Test (gib /bye ein zum Beenden)\nollama run llama3.3:8b-instruct-q4_K_M',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Hast du bereits andere Ollama-Modelle? `ollama list` zeigt sie alle. Du kannst mehrere Modelle installiert behalten und zwischen ihnen in AnythingLLMs Workspace-Einstellungen wechseln.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-model-options-de.svg',
        imageCaption: 'Modelloptionen nach RAM: Llama 3.3 8B Q4_K_M (~4,9 GB, 16 GB RAM, ~8 Min. bei 50 Mbps) empfohlen; Phi-4 Mini Q4 (~2,4 GB, 8 GB RAM) für wenig RAM; Mistral Small Q4_K_M (~4,1 GB, 16 GB RAM) als Alternative.',
      },
      step3InstallAnythingLlm: {
        id: 'step-3-install-anythingllm',
        title: 'Schritt 3: AnythingLLM Desktop installieren (4 Min.)',
        content:
          '**Lade AnythingLLM Desktop von useanything.com (oder anythingllm.com) herunter und führe das Installationsprogramm aus. Starte die App und überspringe die Aufforderung "Cloud-Konto erstellen" — der Nur-lokal-Modus wird im nächsten Bildschirm angeboten.** Die Installation läuft automatisch ab.',
        items: [
          '**macOS:** lade die `.dmg` herunter, ziehe AnythingLLM in Programme, starten. macOS könnte dich auffordern, zu bestätigen, dass die App von einem bekannten Entwickler ist; klicke "Öffnen" in Systemeinstellungen → Datenschutz, falls aufgefordert.',
          '**Windows:** lade das `.exe`-Installationsprogramm herunter. Windows SmartScreen könnte es als "nicht häufig heruntergeladen" kennzeichnen — klicke "Weitere Informationen" → "Trotzdem ausführen". Die App installiert sich zu `%LOCALAPPDATA%\\anythingllm-desktop` (kein Admin).',
          '**Linux:** lade die `.AppImage` herunter, markiere sie als ausführbar (`chmod +x AnythingLLMDesktop.AppImage`), Doppelklick zum Ausführen.',
          '**Erste-Ausführungs-Wahl:** AnythingLLM bietet einen gehosteten Cloud-Workspace ODER eine Nur-lokal-Einrichtung. Wähle **Lokale Einrichtung**. Das ist die Wahl, die das gesamte System offline hält.',
          '**Workspace-Erstellung:** Wenn aufgefordert, benenne deinen ersten Workspace aussagekräftig ("Forschungspapiere", "Verträge", "Persönliche Notizen"). Jeder Workspace bekommt seine eigene Dokumentsammlung und Embedding-Store.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Das Standard-LLM von AnythingLLM ist ein winziges eingebautes Modell, gedacht nur für die Willkommens-Demo. Wir zeigen ihm in den nächsten Schritt deinen lokalen Ollama. Verwende nicht das Standard-Modell für echte Queries — die Antworten werden unbrauchbar schwach sein.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-install-flow-de.svg',
        imageCaption: 'AnythingLLM Desktop in 4 Schritten: Herunterladen von anythingllm.com (~600 MB), Installieren ohne Admin, Starten und Cloud-Prompt überspringen, dann "Local Setup" wählen um alle Daten offline zu halten.',
      },
      step4ConfigureEmbedding: {
        id: 'step-4-configure-embedding',
        title: 'Schritt 4: AnythingLLM mit Ollama verbinden und den Embedder wechseln (3 Min.)',
        content:
          '**Öffne AnythingLLM Einstellungen → LLM-Präferenz. Wähle "Ollama" als Provider, stelle die URL auf `http://127.0.0.1:11434` und wähle `llama3.3:8b-instruct-q4_K_M` aus dem Model-Dropdown. Speichern. Dann gehe zu Embedding-Präferenz und wechsle vom Standard zu `nomic-embed-text` via Ollama.**',
        items: [
          '**LLM-Präferenz-Panel:** Provider = Ollama, Endpoint = `http://127.0.0.1:11434`, Model = `llama3.3:8b-instruct-q4_K_M`. Klicke "Änderungen speichern". Ein grünes Häkchen bestätigt die Verbindung.',
          '**Embedding-Präferenz-Panel:** Der Standard ist "AnythingLLM Native Embedder" — ein winziger Eingebauer. Ändere Provider zu Ollama, führe dann `ollama pull nomic-embed-text` in deinem Terminal zuerst aus (~280 MB), aktualisiere dann die Model-Liste im Panel und wähle `nomic-embed-text:latest`. Speichern.',
          '**Re-Embedding-Warnung:** Falls du bereits Dokumente mit dem alten Embedder hinzugefügt hast, wird AnythingLLM dich auffordern, sie erneut zu embedden. Bei einer Neuinstallation hast du noch keine Dokumente, also wird die Aufforderung nicht angezeigt.',
          '**Vector DB:** auf Standard belassen (LanceDB). Es ist lokal, datei-gestützt und braucht keine Konfiguration. Wechsle nur wenn du speziell PGVector oder Qdrant brauchst.',
        ],
        codeBlock:
          '# Führe dies in deinem Terminal aus, bevor du das Embedding-Präferenz-Panel öffnest\nollama pull nomic-embed-text',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Warum nomic-embed-text-v1.5 speziell? Im Mai 2026 liegt es in den Top 5 der MTEB-Retrieval-Leaderboard für jedes Modell unter 500 MB, läuft mit 400–800 Chunks/Sek. auf einer modernen CPU und 2000+ Chunks/Sek. auf Apple Silicon und ist Apache-2.0-lizenziert. Es ist das Standard-erste-Upgrade für fast jeden lokalen RAG-Stack — siehe den [Embedding-Modell-Vergleich](/de/power-local-llm/best-embedding-models-local-rag-2026) für Alternativen.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-config-flow-de.svg',
        imageCaption: 'Schritt 4 in zwei Panels: LLM-Präferenz (Provider = Ollama, Endpoint = http://127.0.0.1:11434, Model = llama3.3:8b-instruct-q4_K_M), dann Embedding-Präferenz (zuerst nomic-embed-text ziehen, dann nomic-embed-text:latest via Ollama auswählen).',
      },
      step5UploadPdfs: {
        id: 'step-5-upload-pdfs',
        title: 'Schritt 5: Deine ersten PDFs hochladen (5 Min.)',
        content:
          '**Öffne deinen Workspace, klicke "Dokumente hochladen" und ziehe 5–20 PDFs rein. AnythingLLM extrahiert Text, teilt ihn in Chunks auf (Standard 512 Token, 0 Überlappung), embeddet jeden Chunk durch Ollama und speichert Vektoren in LanceDB.** Eine Fortschrittsleiste zeigt analysierte Seiten und eingebettete Chunks.',
        items: [
          '**Unterstützte Formate:** PDF (textbasiert), DOCX, TXT, MD, EPUB, plus URL-Scraping. Eingescannte-Bild-PDFs brauchen zuerst OCR — siehe den Fehlerbehebungsabschnitt.',
          '**Geschwindigkeit:** 400–800 Chunks/Sek. auf einer modernen CPU und 2000+ Chunks/Sek. auf Apple Silicon sobald Ollama warm ist. Eine 20-PDF-Menge mit ~50 Seiten pro Stück (~3000 Chunks gesamt) beendet sich in 5–8 Sekunden Embedding-Zeit auf einer modernen CPU und 1–2 Sekunden auf Apple Silicon, plus Analyse-Zeit. Rechne mit ~5 Minuten gesamt zum Hochladen, Analysieren und Embedden von 20 PDFs.',
          '**RAM während des Embeddens:** Ollama lädt das Embedding-Modell (~280 MB) beim ersten Request und hält es gecacht. Nachfolgende Embeds verwenden den Cache wieder.',
          '**"In Workspace verschieben":** Nach dem Upload platziert AnythingLLM Dokumente in einem "Limbo"-Pool. Du musst explizit "In Workspace verschieben" → "Speichern und Embedden" klicken um sie abfragbar zu machen. Dieser zwei-Schritt-Fluss ist absichtlich — er lässt dich eine Vorschau machen, bevor du die Embedding-Kosten zahlst.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'PDFs von älteren OCR-Scans enthalten oft beschädigte oder leere Text-Layer — die Datei sieht für menschliche Augen gut aus, aber AnythingLLM extrahiert "[image]" oder leere Strings. Öffne die PDF in einem Text-Editor (oder führe `pdftotext file.pdf -` aus poppler-utils aus) um zu bestätigen, dass die Text-Layer existiert, bevor du sie hochlädst.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-embed-flow-de.svg',
        imageCaption: 'PDF-Upload bis Abfrage in 5 Schritten: PDFs hochladen → Text extrahieren → Chunking (1000/200) → Einbetten via nomic-embed-text/Ollama → LanceDB speichern. Geschwindigkeit: 400–800 Chunks/Sek. (CPU), 2000+ auf Apple Silicon.',
      },
      step6TestQueries: {
        id: 'step-6-test-queries',
        title: 'Schritt 6: Queries testen (5 Min.)',
        content:
          '**Gib eine Frage in den Workspace-Chat ein. AnythingLLM embeddet die Frage, ruft die Top-N Chunks aus LanceDB ab, erstellt einen Prompt mit diesen Chunks als Kontext, sendet zu Ollama und zeigt die Antwort.** Latenz auf einem 16 GB RAM Laptop beträgt ungefähr 3–10 Sekunden pro Query.',
        items: [
          '**Starten mit einer Fakten-Abruf-Query:** "Was bedeutet [spezifischer Term aus einem deiner PDFs]?" — das testet Abruf-Fundierung. Die Antwort sollte die PDF zitieren und die exakte Phrasing anführen.',
          '**Dann eine Synthese-Query:** "Fasse das Hauptargument von [Autor/Dokumenttitel] zusammen." — das testet wie gut das Modell mehrere Chunks integriert.',
          '**Dann eine Vergleichs-Query** (nur wenn deine PDFs vergleichbaren Inhalt enthalten): "Vergleiche wie [doc A] und [doc B] [Thema] behandeln." — das testet Document-übergreifenden Abruf.',
          '**Quellenangaben überprüfen:** AnythingLLM zeigt die Quell-Chunks unter jeder Antwort. Klicke sie um zu überprüfen, dass das Modell auf den richtigen Passagen gründet. Falls die Quellenangaben irrelevant sind, ist Abruf kaputt — siehe Schritt 7.',
        ],
      },
      step7TuneChunks: {
        id: 'step-7-tune-chunks',
        title: 'Schritt 7: Chunk-Größe abstimmen (2 Min.)',
        content:
          '**Öffne Workspace-Einstellungen → Vector Database. Ändere Chunk-Größe von 512 auf 1000 und Chunk-Überlappung von 0 auf 200. Klicke Speichern, dann re-embedde deine Dokumente (die UI fragt danach).** Das ist der einzelne größte Abruf-Qualitäts-Hebel in AnythingLLM.',
        items: [
          '**Warum 1000/200 statt 512/0:** PDF-Absätze und Abschnitte passen selten sauber in 512 Token. Die 200-Token-Überlappung bedeutet, dass ein Satz, der eine Chunk-Grenze überbrückt, trotzdem ganz in mindestens einem Nachbarn erscheint, so dass Abruf ihn aufgreift.',
          '**Re-Embedding-Kosten:** Die 20-PDF / 3000-Chunk-Menge re-embeddet sich in ~5 Sekunden. Größere Mengen dauern proportional länger. Der Chunk-Store wird überschrieben, nicht angefügt.',
          '**Top-K-Abruf:** Der Standard-Top-K ist 4 (die 4 besten Chunks werden Kontext). Erhöhe auf 6–8 falls deine Antworten zu wenig gegründet fühlen; senke auf 2–3 falls das Modell sich von verrauschten Chunks ablenken lässt.',
          '**Prompt-Vorlage:** AnythingLLM zeigt den Systemprompt unter Workspace → Chat-Einstellungen → Prompt. Der Standard ist gut; stimme nur ab falls du einen spezifischen Fehlermodus hast.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Empirische Abstimmung schlägt Theorie: stelle dieselben 5 Test-Queries vor und nach der Chunk-Größen-Änderung und vergleiche. Falls Abruf bei 1000/200 schlechter ist, hast du wahrscheinlich sehr kurze Dokumente (Einseiten-Memos, Code-Docstrings) — versuche stattdessen 256/64.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-chunk-settings-de.svg',
        imageCaption: 'Standard- vs. empfohlene Chunk-Einstellungen: Standard 512/0/Top-K 4 lässt Satzfragmente an Chunk-Grenzen zurück. Empfohlen 1000 Token / 200 Überlappung / Top-K 4–6 erfasst Grenzsätze im Überlappungsfenster. Re-Embedding von 20 PDFs dauert ~5 Sekunden.',
      },
      sampleQueries: {
        id: 'sample-queries',
        title: 'Wie sollten die Antworten tatsächlich aussehen?',
        content:
          '**Ein richtig abgestimmtes lokales RAG-System antwortet auf Fakten-Abruf-Fragen wörtlich aus der Quelle, synthetisiert wenn aufgefordert und zitiert die Chunks die es verwendet.** Drei Beispiel-Queries auf einem Forschungspapier-Workspace mit dem was ein gesundes System zurückgibt:',
        rows: [
          {
            'Query-Typ': 'Fakten-Abruf',
            'Beispiel': 'Welche Stichprobengröße verwendete Smith et al. 2024?',
            'Gesundes Antwortnuster': 'Direktes Zitat aus dem Methoden-Abschnitt + Quellenangabe zum Chunk',
            'Fehlermuster': 'Generische Antwort ("üblicherweise verwenden Forscher 100–500 Teilnehmer") ohne Zitat',
          },
          {
            'Query-Typ': 'Synthese',
            'Beispiel': 'Fasse den Hauptbeitrag dieses Papers zusammen.',
            'Gesundes Antwortnuster': '3–5 Sätze aus Abstract + Conclusion-Chunks',
            'Fehlermuster': 'Wiederholt den Titel oder zitiert einen Satz aus dem Abstract',
          },
          {
            'Query-Typ': 'Document-übergreifend',
            'Beispiel': 'Wie widersprechen Smith und Jones sich bei Chunk-Überlappung?',
            'Gesundes Antwortnuster': 'Zitate aus beiden Papers mit expliziter Zuschreibung',
            'Fehlermuster': 'Zitiert nur ein Paper oder erfindet einen Widerspruch der nicht in den Chunks ist',
          },
        ],
        columns: ['Query-Typ', 'Beispiel', 'Gesundes Antwortnuster', 'Fehlermuster'],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Eine gesunde lokale RAG-Antwort zitiert den Quell-Chunk wörtlich für Fakten-Abruf, synthetisiert über Chunks für Zusammenfassungs-Fragen und zitiert die spezifischen Chunk-IDs die es verwendet — generische Antworten ohne Zitate signalisieren ein Abruf-Problem, nicht ein Modell-Problem.',
          },
          {
            type: 'plain-terms',
            text: 'Falls die Antwort wie "üblicherweise verwenden Forscher 100-500 Teilnehmer" statt "Smith et al. verwendeten 287 Teilnehmer (Methoden, S.4)" klingt, ist Abruf kaputt und das Modell wingt es aus Trainingsdaten. Behebe zuerst Abruf (Chunk-Größe, Embedder, Ähnlichkeits-Schwelle) bevor du das Antwortmodell wechselst.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Verwende diese drei Query-Muster als dein Test-Set nach jeder Abruf-Konfigurations-Änderung. Falls Fakten-Abruf immer noch verfehlt aber Synthese funktioniert, sind deine Chunks zu grob. Falls Synthese verfehlt aber Fakten-Abruf funktioniert, ist dein Top-k zu niedrig. Das Muster was verfehlt sagt dir welcher Knopf zu drehen ist.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-query-types-de.svg',
        imageCaption: '3 RAG-Abfragetypen: Faktenabfrage (direktes Zitat + Quelle = gesund), Synthese (3–5 Sätze aus Abstract + Fazit = gesund), Dokumentübergreifend (Zitate aus beiden Papieren = gesund). Grün = gesund, Rot = Abruf defekt — zuerst Retrieval beheben.',
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Wenn etwas kaputt geht: Sechs häufige Fehlermodi und Fixes',
        content:
          '**Die meisten Fehler fallen in eine von sechs Kategorien. Ordne das Symptom der Zeile zu, wende den Fix an.**',
        rows: [
          {
            'Symptom': 'AnythingLLM zeigt "Kann keine Verbindung zu Ollama herstellen"',
            'Wahrscheinliche Ursache': 'Ollama-Service läuft nicht oder falscher Endpoint',
            'Fix': 'Führe `ollama serve` aus (oder starte die App/den Service neu). Bestätige Endpoint ist `http://127.0.0.1:11434` nicht `localhost:11434` auf Windows wo der Alias manchmal fehlschlägt.',
          },
          {
            'Symptom': 'Model-Download hält bei 0% oder 99% an',
            'Wahrscheinliche Ursache': 'CDN-Edge-Problem oder Disk voll',
            'Fix': 'Abbrechen mit Ctrl+C, führe `df -h` aus um Disk-Platz zu bestätigen, dann führe denselben `ollama pull` erneut aus — Ollama nimmt vom letzten Byte wieder auf.',
          },
          {
            'Symptom': 'Embedding-Schritt erscheint zu hängen',
            'Wahrscheinliche Ursache': 'Ollama lädt das Embedding-Modell zum ersten Mal',
            'Fix': 'Warte 30–60 Sekunden. Erstes-Mal-Model-Load dauert 10–40 Sekunden abhängig von Disk-Geschwindigkeit. Nachfolgende Embeds sind schnell.',
          },
          {
            'Symptom': 'Abruf gibt Chunks zurück die unrelevant zur Query sind',
            'Wahrscheinliche Ursache': 'Standard 512/0 Chunking + schwacher Standard-Embedder',
            'Fix': 'Bestätige Schritt 4 (nomic-embed-text) und Schritt 7 (1000/200 Chunking) wurden beide angewendet. Re-embedde den Workspace.',
          },
          {
            'Symptom': 'Antworten sind kurz, generisch oder weigern sich mit der Quelle zu engagieren',
            'Wahrscheinliche Ursache': 'Falsches LLM immer noch ausgewählt (winziger Standard) oder Kontext zu klein',
            'Fix': 'Bestätige LLM-Präferenz zeigt `llama3.3:8b-instruct-q4_K_M`. Erhöhe Top-K von 4 auf 6.',
          },
          {
            'Symptom': 'Eingescannte-Bild-PDFs laden hoch, aber produzieren leere Chunks',
            'Wahrscheinliche Ursache': 'Keine Text-Layer im PDF — reine Raster-Image',
            'Fix': 'OCR die PDF zuerst. macOS: `ocrmypdf input.pdf output.pdf`. Linux/Windows: installiere Tesseract + ocrmypdf. Dann lade die OCR\'d-Output erneut hoch.',
          },
        ],
        columns: ['Symptom', 'Wahrscheinliche Ursache', 'Fix'],
        image: '/images/local-rag-on-your-pdfs-step-by-step-troubleshooting-de.svg',
        imageCaption: 'Sechs Fehlermodi: Verbindung verweigert (ollama serve), angehaltener Download (Ctrl+C → df -h → Wiederholung), hängendes Embedding (30–60 s warten), irrelevante Chunks (Schritte 4 + 7 anwenden), kurze/generische Antworten (llama3.3:8b-instruct-q4_K_M setzen, Top-K erhöhen), leere Chunks aus gescannten PDFs (zuerst ocrmypdf ausführen).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Im DACH-Kontext: Datenschutz und Sicherheitsstandards',
        content:
          'Ein lokales RAG-System wie dieses adressiert kritische Datenschutz- und Sicherheitsanforderungen in Deutschland, Österreich und der Schweiz direkt. Im Gegensatz zu Cloud-RAG-Lösungen, die Daten an externe Anbieter senden, bleibt alles auf deiner Maschine.',
        items: [
          '**DSGVO Artikel 28 (Auftragsverarbeiter):** Wenn deine PDFs Kundendaten, Mitarbeiterdaten oder andere persönliche Informationen enthalten, ist eine lokale Inferenz eine saubere Architektur zur Erfüllung von Auftragsverarbeitungspflichten. Du brauchst keine Cloud-LLM-APIs, deren Datenverarbeitungsverträge (DVAs) fragil sind oder mit lokalen Anforderungen konkurrieren. Deine Daten verlassen die Maschine nicht.',
          '**BSI-Grundschutz-Kataloge:** Das Bundesamt für Informationssicherheit empfiehlt für sensible Geschäftsfunktionen (Finanzdienstleistungen, Gesundheit, Rechtsberatung) Datenschutz-by-Design. Lokale Inferenz mit open-source Komponenten (Ollama, AnythingLLM) erfüllt den BSI-Rahmen — du kennst genau, wo deine Daten fließen und hast Kontrolle über die Modelle.',
          '**Für den Mittelstand:** Viele deutsche, österreichische und Schweizer Mittelstands-Unternehmen (KMUs) haben Kundendaten in PDFs — Verträge, Rechnungen, Support-Dokumente. Ein lokales RAG-System kostet praktisch null € zum Betreiben und eliminiert Cloud-Abhängigkeit. Der Einsatz ist sofort produktiv: starte es auf deinem Laptop oder Server und schließe deine PDFs an.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Was wenn Ollama nicht installiert wird?',
            a: 'Auf macOS ist der häufigste Fehler Gatekeeper blockiert einen unsigniert Helper — öffne Systemeinstellungen → Datenschutz & Sicherheit und klicke "Trotzdem zulassen". Auf Windows könnte Defender SmartScreen das Installationsprogramm isolieren; Rechtsklick → Eigenschaften → Entsperren. Auf Linux braucht das Installationsskript sudo um die systemd-Unit zu schreiben; falls sudo nicht verfügbar ist, lade die statische Binärdatei von github.com/ollama/ollama/releases herunter und platziere sie manuell auf deinem PATH.',
          },
          {
            q: 'Warum ist der Embedding-Schritt langsam?',
            a: 'Der erste Embed einer Session ist langsam, weil Ollama das Embedding-Modell lazy-lädt in den RAM (10–40 Sekunden abhängig von Disk-Geschwindigkeit). Danach läuft Embedding mit 400–800 Chunks/Sek. auf einer modernen CPU und 2000+ Chunks/Sek. auf Apple Silicon. Falls anhaltender Durchsatz unter 100 Chunks/Sek. ist, läuft das Modell wahrscheinlich auf Swap-Disk — schließe andere Apps um RAM freizugeben und versuche es nochmal.',
          },
          {
            q: 'Wie viele PDFs kann ich auf einmal hochladen?',
            a: 'AnythingLLM akzeptiert hunderte Dateien in einem einzelnen Drag-and-Drop. Die praktische Grenze ist RAM während des Parse-Schritts: ~1 GB Peak für 100 mittelgroße PDFs (50 Seiten pro Stück). Nach dem Embedding ist der On-Disk-Vector-Store klein (~10–30 MB pro 100 PDF-Seiten). Für 1000+ PDFs siehe die Spezial-Anleitung [Chatten mit 1000 PDFs lokal](/de/power-local-llm/chat-with-1000-pdfs-locally).',
          },
          {
            q: 'Kann ich das für passwortgeschützte PDFs verwenden?',
            a: 'AnythingLLM kann passwortgeschützte PDFs nicht direkt entschlüsseln. Entschlüssele sie zuerst mit `qpdf --password=DEINPASSWORT --decrypt input.pdf output.pdf` (qpdf ist kostenlos, verfügbar auf allen drei OSes), dann lade die ungeschützte Ausgabe hoch. Lösche die ungeschützte Kopie nach dem Embedding falls dein Threat-Modell es benötigt — die Embeddings selbst sind nicht menschenlesbar.',
          },
          {
            q: 'Was wenn mein Abruf falsche Chunks zurückgibt?',
            a: 'Drei Knöpfe in Reihenfolge der Auswirkung: Wechsle von Standard-Embedder zu nomic-embed-text (Schritt 4), ändere Chunking von 512/0 auf 1000/200 und re-embedde (Schritt 7), und erhöhe Top-K von 4 auf 6 in Workspace-Einstellungen. Falls Abruf immer noch falsch ist nach allem drei, könnten deine Dokumente Vorverarbeitung benötigen — entferne Header/Footer, normalisiere Whitespace oder teile sehr lange PDFs in Pro-Kapitel-Dateien.',
          },
          {
            q: 'Sollte ich ein anderes Modell als Llama 3.3 8B verwenden?',
            a: 'Llama 3.3 8B Q4_K_M ist das beste Qualitäts-pro-RAM-Verhältnis 2026 für 16 GB Systeme. Auf 8 GB RAM verwende Phi-4 Mini Q4_K_M (~2,4 GB). Auf 24 GB+ probiere Qwen 3 14B Q4 für merklich bessere Synthese bei langen Dokumenten. Für mehrsprachige Arbeitsbereiche, Mistral Nemo 12B behandelt Nicht-Englisch besser als Llama 3.3.',
          },
          {
            q: 'Wie aktualisiere ich das Modell später?',
            a: 'Führe `ollama pull llama3.3:8b-instruct-q4_K_M` erneut aus um den neuesten Build zu erhalten, dann starte AnythingLLM neu damit es die Model-Version neu-erkennt. Um zu einem anderen Modell ganz zu wechseln, führe `ollama pull <neues-modell>` aus dann ändere das LLM-Präferenz-Dropdown in AnythingLLM-Einstellungen — kein Re-Embedding benötigt, weil Embeddings nur auf dem Embedder abhängen, nicht auf dem Antwortmodell.',
          },
          {
            q: 'Kann ich das auf einen anderen Computer verschieben?',
            a: 'Ja. Ollama-Modelle leben in `~/.ollama/models` (macOS/Linux) oder `%USERPROFILE%\\.ollama\\models` (Windows) — kopiere den Ordner. AnythingLLM-Workspaces leben in `~/.anythingllm/storage` — kopiere das auch. Auf der neuen Maschine installiere Ollama und AnythingLLM Desktop, dann lege die kopierten Ordner an den richtigen Stellen hin. Workspaces und Embeddings kommen identisch hoch.',
          },
          {
            q: 'Funktioniert das falls meine PDFs eingescannte Bilder sind?',
            a: 'Nicht direkt — AnythingLLM extrahiert Text, kann aber keine Bilder OCR-ieren. Vorverarbeite eingescannte PDFs mit `ocrmypdf input.pdf output.pdf` (plattformübergreifend, MIT-lizenziert, verwendet Tesseract). Auf Apple Silicon, `ocrmypdf -l eng+deu+fra` behandelt 70+ Sprachen. Nach OCR hat die Output-PDF beide die Original-Bilder und eine durchsuchbar Text-Layer, und AnythingLLM extrahiert den Text korrekt.',
          },
          {
            q: 'Wie sichere ich meine Dokumentdatenbank?',
            a: 'AnythingLLM speichert alles unter `~/.anythingllm/storage` (macOS/Linux) oder `%LOCALAPPDATA%\\anythingllm-desktop\\storage` (Windows). Tar/zip diesen Ordner und kopiere ihn auf ein Backup-Laufwerk. Der Ordner inkludiert Original-Dokumente, geparste Chunks, Vector-Indexe und Chat-Verlauf. Wiederherstellen ist Kopie-zurück-und-Neustart — kein spezieller Import-Flow benötigt.',
          },
          {
            q: 'Muss ich bei der Verwendung von AnythingLLM die DSGVO beachten?',
            a: 'Ja, falls deine PDFs personenbezogene Daten enthalten — Namen, E-Mails, Mitarbeiterdaten, Kundendaten etc. DSGVO Artikel 28 verpflichtet dich, Auftragsverarbeiter zu verwenden (oder Infrastruktur, wo Verarbeitung unter deiner Kontrolle bleibt). AnythingLLM auf deinem lokalen Server erfüllt dies: die Daten verlässt nicht deine Infrastruktur. Dokumentiere deine Datenschutz-Maßnahmen in deinem Verfahrensverzeichnis nach Artikel 30 DSGVO.',
          },
          {
            q: 'Ist AnythingLLM für den deutschen Mittelstand geeignet?',
            a: 'Sehr geeignet. Deutsche KMUs mit sensiblen Dokumenten (Verträge, Finanzunterlagen, Patientendaten) gewinnen von lokaler Inferenz, weil: (1) Null Cloud-Abhängigkeit, (2) Kein Datenfluss zu US-Unternehmen, (3) Erfüllung von BSI-Grundschutz-Katalogen für sichere Systeme, (4) Null Lizenzkosten (alles Open Source), (5) Sofortige Produktivität (auf deinem Server). Ein typisches Mittelstands-Szenario: Archiviere 5 Jahre Kundenverträge, indexiere sie mit AnythingLLM, führe Due-Diligence und Kundendaten-Anfragen lokal durch.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: Best Local RAG](/de/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — für Leser, die Alternativen evaluieren wollen bevor sie sich auf AnythingLLM festlegen.',
          '[Best Embedding Models for Local RAG in 2026](/de/power-local-llm/best-embedding-models-local-rag-2026) — für Leser, die besseren Abruf als nomic-embed-text wollen.',
          '[Local AI Apps With Built-In RAG: Chat With Your Files (No Setup)](/de/power-local-llm/local-ai-app-with-built-in-rag) — für Leser, die merken, dass sie noch einfacher als AnythingLLM wollen.',
          '[RAG Explained: How to Ground AI Answers in Real Data (2026)](/de/prompt-engineering/rag-explained) — Konzept-Autorität auf was RAG ist und warum jede Komponente wichtig ist.',
          '[Local LLM Hardware Guide 2026](/de/local-llms/local-llm-hardware-guide-2026) — Hardware-Sizing-Referenz falls du den Laptop wählst, nicht nur die Software.',
          '[Power Local LLM Hub](/de/power-local-llm) — volle Guide-Bibliothek für den Cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/de/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'headline': 'Lokales RAG auf deinen PDFs in 30 Minuten (Ollama + AnythingLLM)',
      'description':
        'Schritt-für-Schritt: Ollama installieren, AnythingLLM einrichten, PDFs hochladen, chatten. Gesamtzeit 30 Minuten. Getestet auf 16-GB-RAM-Laptop. Mai 2026.',
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
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'Llama 3.3 8B' },
        { '@type': 'Thing', 'name': 'nomic-embed-text' },
        { '@type': 'Thing', 'name': 'Retrieval-augmented generation' },
        { '@type': 'Thing', 'name': 'Local RAG' },
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
          'item': 'https://www.promptquorum.com/de',
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
          'name': 'Lokales RAG auf deinen PDFs in 30 Minuten',
          'item': 'https://www.promptquorum.com/de/power-local-llm/local-rag-on-your-pdfs-step-by-step',
        },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: 'Construire un RAG local sur vos PDFs en 30 minutes (Ollama + AnythingLLM)',
    seoTitle: 'RAG local sur vos PDF 2026 : configuration pas à pas',
    intro:
      'Un guide complet pour le chemin le plus rapide vers un système RAG personnel fonctionnel sur un portable 16 Go. Stack: Ollama, Llama 3.3 8B, AnythingLLM, nomic-embed-text. Durée totale: 30 minutes de l\'ordinateur vierge au chat avec vos propres PDFs.',
    metaDescription:
      'Étape par étape: installer Ollama, configurer AnythingLLM, charger des PDFs, discuter. Temps total 30 minutes. Testé sur portable 16 GB. Mai 2026.',
    twitterDescription:
      '30 minutes du portable vierge au chat avec vos propres PDFs. Ollama + Llama 3.3 8B + AnythingLLM + nomic-embed-text. Testé sur 16 GB.',
    current_models_mentioned: ['Llama 3.3 8B', 'nomic-embed-text-v1.5', 'Phi-4 Mini', 'Mistral Small'],
    current_hardware_mentioned: ['Portable 16 GB RAM', 'Apple M1', 'Apple M3', 'Intel Core Ultra 5', 'AMD Ryzen 7 7700'],
    audience: 'Développeurs et utilisateurs avancés qui souhaitent un système RAG personnel fonctionnel sur leur portable, sans dépendre d\'une API cloud.',
    readTime: '11 min de lecture',
    educationalLevel: 'Beginner',
    primaryTerm: 'RAG local sur PDFs',
    targetKeywords: [
      'rag local pdf tutoriel',
      'ollama anythingllm rag',
      'chat avec pdfs localement',
      'rag local setup 30 minutes',
      'rag privé sur ordinateur portable',
    ],
    leadAnswerBlock:
      '**Installez Ollama, téléchargez Llama 3.3 8B, installez AnythingLLM, connectez-le à Ollama, changez le modèle d\'embedding en nomic-embed-text, glissez vos PDFs dans un espace de travail et posez des questions. Sur un portable 16 Go, le processus complet prend 30 minutes — la plupart étant le téléchargement du modèle.**',
    quickAnswerTop: {
      fr: {
        question: 'Comment construire un système RAG local pour mes PDFs en 30 minutes?',
        answer:
          'Installez Ollama (3 min), téléchargez Llama 3.3 8B (8 min, surtout téléchargement), installez AnythingLLM (4 min), connectez-le à Ollama (3 min) et changez l\'embedder en nomic-embed-text, chargez les PDFs dans un espace de travail (5 min d\'embedding), testez les requêtes (5 min) et ajustez la taille des chunks (2 min). Total: 30 minutes sur un portable 16 Go. Après installation, le système fonctionne entièrement hors ligne.',
        bullets: [
          'Stack: Ollama + Llama 3.3 8B Q4_K_M + AnythingLLM + nomic-embed-text-v1.5',
          'Matériel minimum: 16 Go RAM, 20 Go disque libre, CPU moderne (Apple Silicon, Ryzen 5000+, Intel 11e gén+)',
          'Internet requis uniquement pour les téléchargements initiaux — l\'inférence fonctionne entièrement localement',
          'Fonctionne sur macOS, Windows 10/11 et Linux sans admin/root pour AnythingLLM',
          'Pas de code, pas Python, pas de configuration de base de données vectorielle — AnythingLLM inclut LanceDB',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Ce que vous construirez', anchor: '#stack-overview' },
      { label: 'Prérequis', anchor: '#prerequisites' },
      { label: 'Étape 1: Installer Ollama (3 min)', anchor: '#step-1-install-ollama' },
      { label: 'Étape 2: Télécharger Llama 3.3 8B (8 min)', anchor: '#step-2-pull-model' },
      { label: 'Étape 3: Installer AnythingLLM (4 min)', anchor: '#step-3-install-anythingllm' },
      { label: 'Étape 4: Configurer le modèle d\'embedding (3 min)', anchor: '#step-4-configure-embedding' },
      { label: 'Étape 5: Charger les premiers PDFs (5 min)', anchor: '#step-5-upload-pdfs' },
      { label: 'Étape 6: Tester les requêtes (5 min)', anchor: '#step-6-test-queries' },
      { label: 'Étape 7: Ajuster la taille des chunks (2 min)', anchor: '#step-7-tune-chunks' },
      { label: 'Exemples de requêtes et réponses attendues', anchor: '#sample-queries' },
      { label: 'Dépannage', anchor: '#troubleshooting' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Stack:** Ollama exécute le LLM, AnythingLLM gère l\'interface + magasin vectoriel, Llama 3.3 8B Q4_K_M répond, nomic-embed-text-v1.5 récupère.',
          '**Temps:** 30 minutes total. L\'étape la plus longue est le téléchargement du modèle (~8 min à 50 Mbps).',
          '**Matériel:** 16 Go RAM est le minimum pratique. 8 Go fonctionne uniquement avec Phi-4 Mini et petits ensembles de documents.',
          '**Confidentialité:** Après installation, rien ne quitte votre machine. PDFs, embeddings, prompts et sorties restent locaux.',
          '**Pas de code:** Zéro Python, zéro terminal sauf deux commandes Ollama. AnythingLLM est une app de bureau avec import par glisser-déposer.',
          '**L\'embedder par défaut est mauvais:** AnythingLLM inclut un minuscule embedder par défaut. Passez à nomic-embed-text-v1.5 à l\'étape 4 — la qualité de récupération s\'améliore sensiblement.',
          '**La taille de chunk par défaut aussi:** 1000-token chunks avec 200-token chevauchement est mieux que le défaut 512/0. Réglé à l\'étape 7.',
        ],
      },
      stackOverview: {
        id: 'stack-overview',
        title: 'Ce que vous construirez',
        content:
          '**Un système RAG autonome: une fenêtre de chat où vous glissez des PDFs et posez des questions.** Quatre composants open source, tous gratuits, tous sur votre portable:',
        items: [
          '**Ollama** — runtime LLM local. Gère les fichiers modèles, expose une API compatible OpenAI sur localhost:11434. Fournit le modèle réponse.',
          '**Llama 3.3 8B Instruct (Q4_K_M)** — modèle chat 8B de Meta, quantisé pour tenir en ~5 Go RAM. Bonne qualité de réponse pour questions basées sur documents.',
          '**AnythingLLM Desktop** — l\'interface + magasin vectoriel + orchestration RAG. Inclut LanceDB intégré, analyse les PDFs/DOCX/TXT/MD nativement, communique avec Ollama.',
          '**nomic-embed-text-v1.5** — modèle d\'embedding. Vecteurs 768-dim, s\'exécute via Ollama à ~600 chunks/sec sur CPU moderne. Remplace l\'embedder faible par défaut.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Un système RAG local est quatre pièces — un runtime (Ollama), un modèle réponse (Llama 3.3 8B), une interface plus magasin vectoriel (AnythingLLM) et un modèle d\'embedding (nomic-embed-text-v1.5) — connectés sur une machine sans appels cloud.',
          },
          {
            type: 'plain-terms',
            text: 'Glissez un PDF, posez une question, obtenez une réponse fondée avec citations — entièrement hors ligne. Les quatre pièces se partagent le travail: Ollama exécute les modèles, Llama 3.3 8B écrit la réponse, AnythingLLM gère les chunks et vecteurs, nomic-embed-text-v1.5 transforme le texte en vecteurs qui rendent la récupération possible. Installation totale: ~30 minutes; coût total: 0 €.',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'AnythingLLM a aussi un LLM par défaut intégré et un embedder par défaut. Tous deux sont intentionnellement minuscules pour que l\'app démarre rapidement sur matériel faible. Nous les remplaçons aux étapes 4 et 6 parce que la qualité de récupération est tout le jeu dans un système RAG.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-rag-architecture-fr.svg',
        imageCaption: 'Stack RAG local : Ollama (runtime, localhost:11434), Llama 3.3 8B Q4_K_M (~4,9 Go, modèle de réponse), AnythingLLM Desktop (UI + base vectorielle LanceDB) et nomic-embed-text-v1.5 (~280 Mo embedder). Flux : PDFs → AnythingLLM → nomic-embed-text → LanceDB → Llama 3.3 8B → Réponse.',
      },
      prerequisites: {
        id: 'prerequisites',
        title: 'Ce dont vous avez besoin avant de commencer',
        content:
          '**Un portable avec 16 Go RAM, 20 Go disque libre, connexion internet et 30 minutes.** Le système d\'exploitation peut être macOS 12+, Windows 10/11 ou Linux de bureau moderne.',
        items: [
          '**RAM:** 16 Go est le minimum pratique pour Llama 3.3 8B Q4 + AnythingLLM + vos apps habituelles. 8 Go fonctionne avec Phi-4 Mini Q4 — voir alternatives étape 2.',
          '**Disque:** 20 Go libre. Llama 3.3 8B Q4_K_M est ~5 Go, embedder ~280 Mo, AnythingLLM ~600 Mo, plus espace pour embeddings (~10–30 Mo par 100 pages PDF).',
          '**Réseau:** ~50 Mbps minimum pour téléchargement modèle. À 25 Mbps, l\'étape prend ~16 min; reste du tutoriel inaffecté.',
          '**Permissions:** Aucun admin/root requis pour AnythingLLM. Ollama installe à `/usr/local/bin` sur macOS/Linux (demande mot de passe une fois) ou `%LOCALAPPDATA%` sur Windows (sans admin).',
          '**Documents prêts:** 5–20 PDFs pour commencer. Plus grand fonctionne, mais petit ensemble plus rapide pour tester la qualité.',
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-prerequisites-fr.svg',
        imageCaption: 'Configuration requise : 16 Go RAM (plancher pour Llama 3.3 8B Q4 + AnythingLLM), 20 Go de disque libre, 50 Mbps pour le téléchargement du modèle. macOS 12+, Windows 10/11 ou Linux. AnythingLLM ne nécessite pas de droits admin.',
      },
      step1InstallOllama: {
        id: 'step-1-install-ollama',
        title: 'Étape 1: Installer Ollama (3 min)',
        content:
          '**Téléchargez l\'installeur Ollama pour votre OS depuis ollama.com/download et exécutez-le. L\'installeur ajoute la CLI `ollama` à PATH et démarre un service de fond.** Aucun choix de configuration.',
        items: [
          '**macOS:** téléchargez le `.dmg`, glissez Ollama dans Applications, lancez une fois pour installer le helper CLI. La barre de menu affiche l\'icône lama quand le service tourne.',
          '**Windows:** téléchargez l\'`.exe`, exécutez-le, acceptez les défauts. Ollama s\'exécute en service de fond après installation — aucun lancement séparé requis.',
          '**Linux:** installation une ligne: `curl -fsSL https://ollama.com/install.sh | sh`. Le script enregistre une unité systemd; démarrez avec `sudo systemctl start ollama`.',
          '**Vérifier:** ouvrez un terminal et exécutez `ollama --version`. Vous devriez voir une version. Si commande non trouvée, redémarrez terminal pour PATH mis à jour.',
        ],
        codeBlock: 'ollama --version\n# ollama version is 0.5.x  (any 0.5+ build works for this tutorial)',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'warning',
            text: 'Si `ollama --version` fonctionne mais étapes ultérieures échouent avec "connexion refusée sur localhost:11434", le service de fond n\'a pas démarré auto. macOS: lancez l\'app depuis Applications. Linux: `sudo systemctl start ollama`. Windows: ouvrez l\'icône plateau Ollama.',
          },
        ],
      },
      step2PullModel: {
        id: 'step-2-pull-model',
        title: 'Étape 2: Télécharger Llama 3.3 8B (8 min)',
        content:
          '**Exécutez `ollama pull llama3.3:8b-instruct-q4_K_M` dans un terminal. Cela télécharge la 4,9 Go quantisée GGUF et l\'enregistre auprès d\'Ollama.** La plupart du total 30 min est cette étape seule.',
        items: [
          '**Taille téléchargement:** ~4,9 Go (quantization Q4_K_M). À 50 Mbps vous attendrez ~8 min; à 100 Mbps ~4 min; à 25 Mbps ~16 min.',
          '**Regarder progression:** Ollama affiche pourcentage et débit. Le téléchargement reprend s\'il est interrompu — réexécutez la même commande.',
          '**Test rapide du modèle:** après téléchargement, exécutez `ollama run llama3.3:8b-instruct-q4_K_M` et demandez "Qu\'est-ce que 2+2?". Confirmez bonne réponse. Tapez `/bye` pour quitter.',
          '**Alternative moins RAM:** si vous avez 8 Go au lieu de 16 Go, exécutez `ollama pull phi3:mini` (Phi-4 Mini, ~2,4 Go disque). Utilisez ce nom modèle à la place à l\'étape 3.',
        ],
        codeBlock:
          '# Recommandé pour 16 GB RAM\nollama pull llama3.3:8b-instruct-q4_K_M\n\n# Alternative pour 8 GB RAM\nollama pull phi3:mini\n\n# Test rapide (tapez /bye pour quitter)\nollama run llama3.3:8b-instruct-q4_K_M',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Vous avez déjà d\'autres modèles Ollama? `ollama list` les affiche tous. Vous pouvez garder plusieurs modèles installés et basculer entre eux dans les paramètres espace de travail AnythingLLM.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-model-options-fr.svg',
        imageCaption: 'Options de modèles par RAM : Llama 3.3 8B Q4_K_M (~4,9 Go, 16 Go RAM, ~8 min à 50 Mbps) recommandé ; Phi-4 Mini Q4 (~2,4 Go, 8 Go RAM) pour peu de RAM ; Mistral Small Q4_K_M (~4,1 Go, 16 Go RAM) en alternative.',
      },
      step3InstallAnythingLlm: {
        id: 'step-3-install-anythingllm',
        title: 'Étape 3: Installer AnythingLLM Desktop (4 min)',
        content:
          '**Téléchargez AnythingLLM Desktop depuis useanything.com (ou anythingllm.com) et exécutez l\'installeur. Lancez l\'app et ignorez "créer compte cloud" — le mode local-seulement est proposé après.** Installation sans surveillance.',
        items: [
          '**macOS:** téléchargez le `.dmg`, glissez AnythingLLM dans Applications, lancez. macOS peut vous demander de confirmer app d\'éditeur connu; cliquez "Ouvrir" dans Paramètres système → Confidentialité si demandé.',
          '**Windows:** téléchargez installeur `.exe`. Windows SmartScreen peut le signaler "non couramment téléchargé" — cliquez "Plus d\'infos" → "Exécuter quand même". L\'app installe à `%LOCALAPPDATA%\\anythingllm-desktop` (pas admin).',
          '**Linux:** téléchargez `.AppImage`, marquez exécutable (`chmod +x AnythingLLMDesktop.AppImage`), double-clic pour exécuter.',
          '**Première exécution:** AnythingLLM propose espace de travail cloud hébergé OU configuration locale-seulement. Choisissez **Configuration locale**. C\'est le choix qui garde le système hors ligne.',
          '**Création espace de travail:** quand invité, nommez votre premier espace de travail de façon descriptive ("articles-recherche", "contrats", "notes-perso"). Chaque espace a sa propre collection et magasin d\'embeddings.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Le LLM par défaut d\'AnythingLLM est un minuscule modèle intégré prévu seulement pour la démo de bienvenue. Nous le pointons vers votre Ollama local à l\'étape suivante. N\'utilisez pas le défaut pour vraies requêtes — les réponses seront inutilisablement faibles.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-install-flow-fr.svg',
        imageCaption: 'Installation AnythingLLM Desktop en 4 étapes : Télécharger depuis anythingllm.com (~600 Mo), Installer sans admin, Lancer et ignorer l\'invite cloud, puis choisir "Local Setup" pour garder toutes les données hors ligne.',
      },
      step4ConfigureEmbedding: {
        id: 'step-4-configure-embedding',
        title: 'Étape 4: Connecter AnythingLLM à Ollama et changer l\'embedder (3 min)',
        content:
          '**Ouvrez Paramètres AnythingLLM → Préférence LLM. Choisissez "Ollama" comme fournisseur, définissez URL à `http://127.0.0.1:11434` et sélectionnez `llama3.3:8b-instruct-q4_K_M` du menu déroulant. Sauvegardez. Puis allez à Préférence embedding et passez du défaut à `nomic-embed-text` via Ollama.**',
        items: [
          '**Panneau Préférence LLM:** Fournisseur = Ollama, Point d\'entrée = `http://127.0.0.1:11434`, Modèle = `llama3.3:8b-instruct-q4_K_M`. Cliquez "Sauvegarder modifications". Une coche verte confirme la connexion.',
          '**Panneau Préférence embedding:** le défaut est "AnythingLLM Native Embedder" — un minuscule intégré. Changez Fournisseur à Ollama, exécutez `ollama pull nomic-embed-text` dans terminal d\'abord (~280 Mo), puis actualisez liste modèle dans panneau et sélectionnez `nomic-embed-text:latest`. Sauvegardez.',
          '**Avertissement re-embedding:** si vous avez déjà ajouté documents sous ancien embedder, AnythingLLM vous invitera à les re-embedder. Sur installation vierge, pas de documents donc pas d\'invite.',
          '**BD vecteur:** laissez au défaut (LanceDB). Elle est locale, fichier-sauvegardée, zéro config. Changez seulement si vous avez besoin spécifiquement PGVector ou Qdrant.',
        ],
        codeBlock:
          '# Exécutez ceci dans terminal avant ouvrir panneau Préférence embedding\nollama pull nomic-embed-text',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Pourquoi nomic-embed-text-v1.5 spécifiquement? En mai 2026, il score dans top 5 du classement MTEB Retrieval pour tout modèle sous 500 Mo, tourne à 400–800 chunks/sec sur CPU moderne et 2000+ chunks/sec sur Apple Silicon, Apache 2.0 licencié. C\'est l\'upgrade première-standard pour presque tout stack RAG local — voir le [comparaison modèles embedding](/fr/power-local-llm/best-embedding-models-local-rag-2026) pour alternatives.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-config-flow-fr.svg',
        imageCaption: 'Étape 4 en deux panneaux : Préférence LLM (Fournisseur = Ollama, Endpoint = http://127.0.0.1:11434, Modèle = llama3.3:8b-instruct-q4_K_M), puis Préférence Embedding (tirer nomic-embed-text d\'abord, puis sélectionner nomic-embed-text:latest via Ollama).',
      },
      step5UploadPdfs: {
        id: 'step-5-upload-pdfs',
        title: 'Étape 5: Charger vos premiers PDFs (5 min)',
        content:
          '**Ouvrez votre espace de travail, cliquez "Charger documents" et glissez 5–20 PDFs. AnythingLLM extrait texte, le divise en chunks (défaut 512 tokens, 0 chevauchement), embedde chaque chunk via Ollama et stocke vecteurs dans LanceDB.** Une barre de progression montre pages analysées et chunks embeddés.',
        items: [
          '**Formats supportés:** PDF (textuel), DOCX, TXT, MD, EPUB, plus scraping URL. PDFs image-scannée besoin OCR d\'abord — voir section dépannage.',
          '**Vitesse:** 400–800 chunks/sec sur CPU moderne et 2000+ chunks/sec sur Apple Silicon une fois Ollama chaud. Un ensemble 20-PDF avec ~50 pages chaque (~3000 chunks total) finit en 5–8 sec temps embedding sur CPU moderne, 1–2 sec sur Apple Silicon, plus temps parsing. Compter ~5 min total charger, analyser et embedder 20 PDFs.',
          '**RAM pendant embedding:** Ollama charge le modèle embedding (~280 Mo) sur première requête et le cache. Embeddings suivants réutilisent le cache.',
          '**"Déplacer vers espace de travail":** après upload, AnythingLLM place documents dans pool "limbe". Vous devez explicitement cliquer "Déplacer vers espace de travail" → "Sauvegarder et embedder" pour les rendre interrogeables. Ce flux deux-étapes est intentionnel — ça vous laisse prévisualiser avant coût embedding.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'PDFs d\'anciens scans OCR contiennent souvent texte garbled ou vides — le fichier semble bon pour yeux humains mais AnythingLLM extrait "[image]" ou strings vides. Ouvrez le PDF dans éditeur texte (ou exécutez `pdftotext file.pdf -` de poppler-utils) pour confirmer couche texte existe avant upload.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-embed-flow-fr.svg',
        imageCaption: 'Upload PDF vers requête en 5 étapes : Upload PDFs → Extraire texte → Chunking (1000/200) → Encoder via nomic-embed-text/Ollama → Stocker dans LanceDB. Vitesse : 400–800 chunks/sec (CPU), 2000+ sur Apple Silicon.',
      },
      step6TestQueries: {
        id: 'step-6-test-queries',
        title: 'Étape 6: Tester les requêtes (5 min)',
        content:
          '**Tapez une question dans le chat d\'espace de travail. AnythingLLM embedde la question, récupère top-N chunks de LanceDB, construit prompt avec chunks comme contexte, envoie à Ollama et affiche réponse.** Latence sur portable 16 Go est ~3–10 sec par requête.',
        items: [
          '**Commencez avec requête fact-recall:** "Que signifie [terme spécifique d\'un de vos PDFs]?" — teste fondement récupération. Réponse devrait citer le PDF et guillemeter la phrasing exacte.',
          '**Puis requête synthèse:** "Résumez l\'argument principal de [auteur/titre document]." — teste comment bien modèle intègre chunks multiples.',
          '**Puis requête comparaison** (seulement si PDFs contiennent contenu comparable): "Comparez comment [doc A] et [doc B] traitent [sujet]." — teste récupération cross-document.',
          '**Inspecter citations:** AnythingLLM affiche chunks source sous chaque réponse. Cliquez-les pour vérifier modèle fonde sur passages droits. Si citations hors-sujet, récupération est cassée — voir étape 7.',
        ],
      },
      step7TuneChunks: {
        id: 'step-7-tune-chunks',
        title: 'Étape 7: Ajuster la taille des chunks (2 min)',
        content:
          '**Ouvrez Paramètres espace de travail → Base de données vectorielle. Changez taille chunk de 512 à 1000 et chevauchement chunk de 0 à 200. Cliquez Sauvegarder, puis re-embedde vos documents (l\'interface invite).** C\'est le seul plus grand levier qualité récupération dans AnythingLLM.',
        items: [
          '**Pourquoi 1000/200 au lieu 512/0:** Paragraphes PDF et sections s\'ajustent rarement proprement en 512 tokens. Le chevauchement 200-token signifie phrase qui croise limite chunk apparaît quand-même entière dans au moins un voisin, donc récupération la saisit.',
          '**Coût re-embedding:** l\'ensemble 20-PDF / 3000-chunk re-embedde en ~5 sec. Ensembles plus grands prennent proportionnellement plus longtemps. Chunk store est surécrit, pas appendé.',
          '**Récupération top-K:** le top-K défaut est 4 (les 4 chunks meilleures-correspondance deviennent contexte). Augmentez à 6–8 si vos réponses semblent peu fondées; baissez à 2–3 si modèle se distrait par chunks bruyants.',
          '**Template de prompt:** AnythingLLM expose le systemprompt sous Espace de travail → Paramètres chat → Prompt. Le défaut va bien; ajustez seulement si vous avez mode défaut spécifique.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Réglage empirique bat théorie: posez mêmes 5 requêtes test avant et après changement taille chunk, comparez. Si récupération à 1000/200 pire, vous avez probablement documents très courts (memos une-page, docstrings code) — essayez 256/64 à la place.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-chunk-settings-fr.svg',
        imageCaption: 'Paramètres chunks par défaut vs recommandés : défaut 512/0/Top-K 4 laisse des fragments de phrases aux limites. Recommandé 1000 tokens / 200 chevauchement / Top-K 4–6 capture les phrases limites dans la fenêtre d\'overlap. Re-embedding de 20 PDFs : ~5 secondes.',
      },
      sampleQueries: {
        id: 'sample-queries',
        title: 'À quoi les réponses devraient ressembler?',
        content:
          '**Un système RAG local correctement réglé répond requêtes fact-recall mot-pour-mot de la source, synthétise quand invité et cite les chunks qu\'il utilise.** Trois exemples sur espace de travail articles-recherche avec quoi un système sain retourne:',
        rows: [
          {
            'Type requête': 'Fait-recall',
            'Exemple': 'Quelle taille d\'échantillon Smith et al. 2024 ont utilisé?',
            'Pattern réponse saine': 'Citation directe section méthodes + citation au chunk',
            'Pattern défaillance': 'Réponse générique ("typiquement chercheurs utilisent 100–500 participants") sans citation',
          },
          {
            'Type requête': 'Synthèse',
            'Exemple': 'Résumez la contribution principale de cet article.',
            'Pattern réponse saine': '3–5 phrases tirant des chunks abstract + conclusion',
            'Pattern défaillance': 'Reprend le titre ou cite une phrase de l\'abstract',
          },
          {
            'Type requête': 'Cross-document',
            'Exemple': 'Comment Smith et Jones se désaccordent sur chevauchement chunk?',
            'Pattern réponse saine': 'Citations des deux articles avec attribution explicite',
            'Pattern défaillance': 'Cite seulement un article, ou invente désaccord pas dans chunks',
          },
        ],
        columns: ['Type requête', 'Exemple', 'Pattern réponse saine', 'Pattern défaillance'],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Une réponse RAG local saine cite le chunk source mot-pour-mot pour fait-recall, synthétise cross-chunk pour questions résumé et cite les IDs chunk spécifiques qu\'il utilise — réponses génériques sans guillemets signalent problème récupération, pas problème modèle.',
          },
          {
            type: 'plain-terms',
            text: 'Si réponse lit comme "typiquement chercheurs utilisent 100-500 participants" au lieu "Smith et al. utilisaient 287 participants (Méthodes, p.4)", la récupération est cassée et modèle invente à partir données entraînement. Réparez récupération d\'abord (taille chunk, embedder, seuil similarité) avant de changer le modèle réponse.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Utilisez ces trois patterns requête comme votre test-set après chaque changement config récupération. Si fact-recall encore rate mais synthèse marche, chunks trop grossiers. Si synthèse rate mais fact-recall marche, top-k trop bas. Le pattern échoue dit quel bouton tourner.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-query-types-fr.svg',
        imageCaption: '3 types de requêtes RAG : Rappel de faits (citation directe + source = sain), Synthèse (3–5 phrases de l\'abstract + conclusion = sain), Croisement docs (citations des deux articles = sain). Vert = sain, rouge = récupération défectueuse.',
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Quand quelque chose casse: Six modes défaillance courants et fixes',
        content:
          '**La plupart défaillances tombent dans une de six catégories. Associez symptôme à la ligne, appliquez le fix.**',
        rows: [
          {
            'Symptôme': 'AnythingLLM affiche "Ne peut pas se connecter à Ollama"',
            'Cause probable': 'Service Ollama pas en cours, ou endpoint incorrect',
            'Fix': 'Exécutez `ollama serve` (ou redémarrez l\'app/service). Confirmez endpoint est `http://127.0.0.1:11434` pas `localhost:11434` sur Windows où alias échoue parfois.',
          },
          {
            'Symptôme': 'Téléchargement modèle bloque à 0% ou 99%',
            'Cause probable': 'Problème CDN edge ou disque plein',
            'Fix': 'Annulez avec Ctrl+C, exécutez `df -h` pour confirmer espace disque, puis réexécutez même `ollama pull` — Ollama reprend depuis dernier octet.',
          },
          {
            'Symptôme': 'Étape embedding semble faire suspendre',
            'Cause probable': 'Ollama charge modèle embedding pour première fois',
            'Fix': 'Attendez 30–60 secondes. Chargement première-fois modèle prend 10–40 secondes selon vitesse disque. Embeddings suivants sont rapides.',
          },
          {
            'Symptôme': 'Récupération retourne chunks non-relatifs à requête',
            'Cause probable': 'Chunking 512/0 par défaut + embedder faible par défaut',
            'Fix': 'Confirmez étape 4 (nomic-embed-text) et étape 7 (chunking 1000/200) furent appliquées. Re-embedde l\'espace de travail.',
          },
          {
            'Symptôme': 'Réponses sont courtes, génériques, ou refusent engager source',
            'Cause probable': 'Mauvais LLM toujours sélectionné (minuscule défaut) ou contexte trop petit',
            'Fix': 'Confirmez préférence LLM affiche `llama3.3:8b-instruct-q4_K_M`. Augmentez top-K de 4 à 6.',
          },
          {
            'Symptôme': 'PDFs image-scannée upload mais produisent chunks vides',
            'Cause probable': 'Pas de couche texte dans PDF — pure image raster',
            'Fix': 'OCR le PDF d\'abord. macOS: `ocrmypdf input.pdf output.pdf`. Linux/Windows: installez Tesseract + ocrmypdf. Puis re-uploadez output OCR\'d.',
          },
        ],
        columns: ['Symptôme', 'Cause probable', 'Fix'],
        image: '/images/local-rag-on-your-pdfs-step-by-step-troubleshooting-fr.svg',
        imageCaption: 'Six modes de défaillance : connexion refusée (ollama serve), téléchargement bloqué (Ctrl+C → df -h → relancer), embedding suspendu (attendre 30–60 sec), chunks hors-sujet (appliquer étapes 4 + 7), réponses courtes/génériques (configurer llama3.3:8b-instruct-q4_K_M, augmenter Top-K), chunks vides depuis PDFs scannés (exécuter ocrmypdf d\'abord).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Considérations pour les utilisateurs francophones',
        content:
          'Un système RAG local comme celui-ci répond à exigences de confidentialité et sécurité clés pour la France, la Belgique et la Suisse. Contrairement solutions RAG cloud qui envoient données à fournisseurs externes, tout reste sur votre machine.',
        items: [
          '**CNIL et données sensibles:** La CNIL recommande l\'IA locale pour données professionnelles sensibles (finance, santé, droit, RH). Un système RAG local qui jamais ne quitte votre serveur satisfait cette recommandation directement.',
          '**RGPD Article 32 (Sécurité du traitement):** Infra locale avec composants open source (Ollama, AnythingLLM) satisfait exigences sécurité RGPD. Vous contrôlez où données coulent, quels modèles exécutent, comment stockage est chiffré.',
          '**Utilisation pour secteurs régulés:** Organisations françaises, belges, suisses dans finance, services publics, éducation, santé gagnent de RAG local — zéro dépendance API cloud, zéro flux données transatlantique. Installation immédiate productive: déployez sur serveur local ou portable, connectez vos documents.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Que faire si Ollama ne s\'installe pas?',
            a: 'Sur macOS, l\'erreur la plus commune est Gatekeeper bloquant un helper non-signé — ouvrez Paramètres système → Confidentialité & Sécurité et cliquez "Ouvrir quand même". Sur Windows, Defender SmartScreen peut mettre en quarantaine l\'installeur; clic-droit → Propriétés → Débloquer. Sur Linux, le script d\'install a besoin sudo pour écrire l\'unité systemd; si sudo indisponible, téléchargez la binaire statique depuis github.com/ollama/ollama/releases et placez-la sur PATH manuellement.',
          },
          {
            q: 'Pourquoi l\'étape embedding est lente?',
            a: 'Le premier embed d\'une session est lent parce que Ollama lazy-charge le modèle embedding dans RAM (10–40 secondes selon vitesse disque). Après, embedding tourne à 400–800 chunks par seconde sur CPU moderne et 2000+ chunks par seconde sur Apple Silicon. Si débit soutenu est sous 100 chunks par seconde, le modèle tourne probablement sur swap-disque — fermez autres apps pour libérer RAM et réessayez.',
          },
          {
            q: 'Combien de PDFs puis-je charger à la fois?',
            a: 'AnythingLLM accepte centaines de fichiers en un seul glissez-déposez. La limite pratique est RAM pendant étape parse: ~1 Go peak pour 100 PDFs taille-moyenne (50 pages chaque). Une fois embeddés, le magasin vectoriel on-disk est petit (~10–30 Mo par 100 pages PDF). Pour 1000+ PDFs, voir guide dédié [Discuter avec 1000 PDFs localement](/fr/power-local-llm/chat-with-1000-pdfs-locally).',
          },
          {
            q: 'Puis-je utiliser ceci pour PDFs protégés par mot de passe?',
            a: 'AnythingLLM ne peut pas déchiffrer directement PDFs protégés. Déchiffrez d\'abord avec `qpdf --password=VOTREMOTDEPASSE --decrypt input.pdf output.pdf` (qpdf gratuit, disponible tous trois OSes), puis chargez output non-protégé. Supprimez copie non-protégée après embedding si votre threat-model l\'exige — les embeddings eux-mêmes ne sont pas lisibles-humain.',
          },
          {
            q: 'Que faire si ma récupération retourne mauvais chunks?',
            a: 'Trois boutons dans ordre d\'impact: passez de embedder par défaut à nomic-embed-text (étape 4), changez chunking de 512/0 à 1000/200 et re-embedde (étape 7), et augmentez top-K de 4 à 6 dans paramètres espace de travail. Si récupération toujours mauvaise après tout trois, vos documents peuvent avoir besoin pré-traitement — enlevez en-têtes/pieds, normalisez whitespace ou divisez très longs PDFs en fichiers per-chapitre.',
          },
          {
            q: 'Devrais-je utiliser un modèle différent de Llama 3.3 8B?',
            a: 'Llama 3.3 8B Q4_K_M est le meilleur tradeoff qualité-par-RAM 2026 pour systèmes 16 Go. Sur 8 Go RAM, utilisez Phi-4 Mini Q4_K_M (~2,4 Go). Sur 24 Go+, essayez Qwen 3 14B Q4 pour synthèse notablement meilleure sur longs documents. Pour charges-travail multilingues, Mistral Nemo 12B traite mieux non-English que Llama 3.3.',
          },
          {
            q: 'Comment mets-à-jour le modèle après?',
            a: 'Exécutez `ollama pull llama3.3:8b-instruct-q4_K_M` à nouveau pour obtenir latest build, puis redémarrez AnythingLLM pour qu\'il re-détecte la version modèle. Pour basculer à modèle différent entièrement, exécutez `ollama pull <nouveau-modèle>` puis changez menu-déroulant Préférence LLM dans paramètres AnythingLLM — aucun re-embedding requis parce que embeddings dépendent seulement d\'embedder, pas du modèle réponse.',
          },
          {
            q: 'Puis-je déplacer ceci à un ordinateur différent?',
            a: 'Oui. Modèles Ollama vivent dans `~/.ollama/models` (macOS/Linux) ou `%USERPROFILE%\\.ollama\\models` (Windows) — copiez le dossier. Espaces de travail AnythingLLM vivent dans `~/.anythingllm/storage` — copiez aussi. Sur la nouvelle machine, installez Ollama et AnythingLLM Desktop, puis déposez les dossiers copiés à la place. Espaces de travail et embeddings remontent identiquement.',
          },
          {
            q: 'Cela fonctionne si mes PDFs sont images scannées?',
            a: 'Pas directement — AnythingLLM extrait texte mais ne peut pas OCR images. Pré-traitez PDFs scannées avec `ocrmypdf input.pdf output.pdf` (multiplateforme, MIT-licencié, utilise Tesseract sous le capot). Sur Apple Silicon, `ocrmypdf -l eng+fra+deu` traite 70+ langues. Après OCR, PDF output a images originales plus couche texte cherchable, et AnythingLLM extrait texte correctement.',
          },
          {
            q: 'Comment sauvegarde-je ma base de données documents?',
            a: 'AnythingLLM stocke tout sous `~/.anythingllm/storage` (macOS/Linux) ou `%LOCALAPPDATA%\\anythingllm-desktop\\storage` (Windows). Tar/zip ce dossier et copiez-le sur lecteur sauvegarde. Le dossier inclut documents originaux, chunks parsés, index vectoriels et historique chat. Restauration est copie-de-retour-et-redémarrage — aucun flux d\'import spécial requis.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: Meilleur RAG local](/fr/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — pour lecteurs voulant évaluer alternatives avant de s\'engager à AnythingLLM.',
          '[Meilleurs modèles d\'embedding pour RAG local 2026](/fr/power-local-llm/best-embedding-models-local-rag-2026) — pour lecteurs voulant meilleure récupération que nomic-embed-text.',
          '[Apps IA locales avec RAG intégré: Discuter avec vos fichiers (zéro setup)](/fr/power-local-llm/local-ai-app-with-built-in-rag) — pour lecteurs réalisant ils veulent encore plus simple que AnythingLLM.',
          '[RAG expliqué: Fonder réponses IA sur données réelles (2026)](/fr/prompt-engineering/rag-explained) — autorité concept sur quoi est RAG et pourquoi chaque composant importe.',
          '[Guide matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026) — référence hardware-sizing si vous choisissez l\'ordinateur portable, pas juste software.',
          '[Hub Power Local LLM](/fr/power-local-llm) — bibliothèque guide complète pour le cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'headline': 'Construire un RAG local sur vos PDFs en 30 minutes (Ollama + AnythingLLM)',
      'description':
        'Étape par étape: installer Ollama, configurer AnythingLLM, charger des PDFs, discuter. Temps total 30 minutes. Testé sur portable 16 GB. Mai 2026.',
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
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'Llama 3.3 8B' },
        { '@type': 'Thing', 'name': 'nomic-embed-text' },
        { '@type': 'Thing', 'name': 'Retrieval-augmented generation' },
        { '@type': 'Thing', 'name': 'Local RAG' },
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
          'item': 'https://www.promptquorum.com/fr',
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
          'name': 'Construire un RAG local sur vos PDFs en 30 minutes',
          'item': 'https://www.promptquorum.com/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step',
        },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: '30分でローカルRAGシステムを構築: Ollama + AnythingLLM',
    seoTitle: '30分でローカルRAG構築 2026: Ollama + AnythingLLM',
    intro:
      '16GB ノートパソコンで動作する、最速のパーソナルRAGシステム構築ガイド。スタック: Ollama、Llama 3.3 8B、AnythingLLM、nomic-embed-text。合計時間: 空のマシンからPDFとのチャットまで30分。',
    metaDescription:
      'ステップバイステップ: Ollama をインストール、AnythingLLM を設定、PDF をアップロード、チャット。合計時間 30分。16GB ノートパソコンで検証。2026年5月。',
    twitterDescription:
      '空のノートパソコンから PDF とのチャットまで 30 分。Ollama + Llama 3.3 8B + AnythingLLM + nomic-embed-text。16GB RAM で検証済み。',
    current_models_mentioned: ['Llama 3.3 8B', 'nomic-embed-text-v1.5', 'Phi-4 Mini', 'Mistral Small'],
    current_hardware_mentioned: ['16GB RAM ノートパソコン', 'Apple M1', 'Apple M3', 'Intel Core Ultra 5', 'AMD Ryzen 7 7700'],
    audience: 'クラウド API に依存せず、ノートパソコン上で動作するパーソナルRAGシステムが必要な開発者とパワーユーザー。',
    readTime: '12分で読める',
    educationalLevel: 'Beginner',
    primaryTerm: 'ローカル PDF RAG',
    targetKeywords: [
      'ローカル rag pdf チュートリアル',
      'ollama anythingllm rag',
      'pdf とローカルチャット',
      'ローカル rag 30分セットアップ',
      'ノートパソコン上のプライベートRAG',
    ],
    leadAnswerBlock:
      '**Ollama をインストール、Llama 3.3 8B をプル、AnythingLLM をインストール、Ollama に接続、embedding モデルを nomic-embed-text に変更、PDF をワークスペースにドラッグして質問を開始。16GB ノートパソコンで全体の処理時間は 30 分 — ほぼモデルのダウンロード時間です。**',
    quickAnswerTop: {
      ja: {
        question: '30 分で PDF 用のローカル RAG システムを構築するにはどうすればよいですか?',
        answer:
          'Ollama をインストール (3 分)、Llama 3.3 8B をプル (8 分、ほぼダウンロード)、AnythingLLM をインストール (4 分)、Ollama に接続 (3 分) して embedding を nomic-embed-text に変更、PDF をワークスペースにアップロード (5 分 embedding)、クエリをテスト (5 分)、chunk サイズを調整 (2 分)。合計: 16GB ノートパソコンで 30 分。インストール後、システムは完全にオフラインで動作します。',
        bullets: [
          'スタック: Ollama + Llama 3.3 8B Q4_K_M + AnythingLLM + nomic-embed-text-v1.5',
          'ハードウェア最小要件: 16GB RAM、20GB ディスク空き容量、最新 CPU (Apple Silicon、Ryzen 5000+、Intel 11世代+)',
          'インターネットは初期モデルと app ダウンロードの時のみ必要 — 推論は完全にローカル',
          'macOS、Windows 10/11、Linux で動作、AnythingLLM ステップで admin/root 不要',
          'コードなし、Python なし、ベクトルデータベース設定なし — AnythingLLM に LanceDB が組み込まれている',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: '構築するもの', anchor: '#stack-overview' },
      { label: '前提条件', anchor: '#prerequisites' },
      { label: 'ステップ 1: Ollama をインストール (3 分)', anchor: '#step-1-install-ollama' },
      { label: 'ステップ 2: Llama 3.3 8B をプル (8 分)', anchor: '#step-2-pull-model' },
      { label: 'ステップ 3: AnythingLLM をインストール (4 分)', anchor: '#step-3-install-anythingllm' },
      { label: 'ステップ 4: Embedding モデルを設定 (3 分)', anchor: '#step-4-configure-embedding' },
      { label: 'ステップ 5: 最初の PDF をアップロード (5 分)', anchor: '#step-5-upload-pdfs' },
      { label: 'ステップ 6: クエリをテスト (5 分)', anchor: '#step-6-test-queries' },
      { label: 'ステップ 7: Chunk サイズを調整 (2 分)', anchor: '#step-7-tune-chunks' },
      { label: 'サンプルクエリと予想される回答', anchor: '#sample-queries' },
      { label: 'トラブルシューティング', anchor: '#troubleshooting' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連資料', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**スタック:** Ollama が LLM を実行、AnythingLLM が UI + ベクトルストアを管理、Llama 3.3 8B Q4_K_M が回答、nomic-embed-text-v1.5 が取得。',
          '**時間:** 合計 30 分。最長は model プル (~8 分 @ 50 Mbps)。',
          '**ハードウェア:** 16GB RAM が実用的な最小値。8GB は Phi-4 Mini と小規模データセットのみ対応。',
          '**プライバシー:** インストール後、何もマシンを離れません。PDF、embedding、prompt、出力は全てローカル。',
          '**コードなし:** Python なし、terminal コマンドは 2 つの Ollama コマンドのみ。AnythingLLM はドラッグ＆ドロップ式 desktop app。',
          '**デフォルト embedder は不適切:** AnythingLLM に tiny 組み込み embedder が付属。ステップ 4 で nomic-embed-text-v1.5 に変更 — 取得品質が大幅向上。',
          '**デフォルト chunk サイズも不適切:** 1000-token chunks + 200-token overlap がデフォルト 512/0 より優秀。ステップ 7 で調整。',
        ],
      },
      stackOverview: {
        id: 'stack-overview',
        title: '構築するもの',
        content:
          '**自己完結型 desktop RAG システム: PDF をドラッグして質問するチャットウィンドウ。** 4 つのオープンソースコンポーネント、すべて無料、全てノートパソコンで実行:',
        items: [
          '**Ollama** — ローカル LLM ランタイム。Model ファイルを管理、localhost:11434 で OpenAI 互換 API を公開。Answer model を提供。',
          '**Llama 3.3 8B Instruct (Q4_K_M)** — Meta の 8B parameter chat model、量子化して ~5GB RAM に適合。2026 年の文書ベース質問で良好な回答品質。',
          '**AnythingLLM Desktop** — UI + ベクトルストア + RAG orchestration。LanceDB 内蔵、PDF/DOCX/TXT/MD をネイティブで解析、Ollama と通信。',
          '**nomic-embed-text-v1.5** — embedding model。768-dim vectors、Ollama 経由で最新 CPU で ~600 chunks/sec。デフォルト embedder の代わり。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカル RAG システムは 4 つの部分 — ランタイム (Ollama)、answer model (Llama 3.3 8B)、UI + vector store (AnythingLLM)、embedding model (nomic-embed-text-v1.5) — クラウド呼び出しなしに 1 台のマシンで接続。',
          },
          {
            type: 'plain-terms',
            text: 'PDF をドラッグ、質問を入力、引用付き根拠のある回答を取得 — 完全にオフライン。4 つの部分が作業を分担: Ollama がモデル実行、Llama 3.3 8B が回答作成、AnythingLLM が chunks と vectors 管理、nomic-embed-text-v1.5 がテキストを取得可能なベクトルに変換。合計インストール: ~30 分；合計コスト: ¥0。',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'AnythingLLM にはビルトイン LLM とビルトイン embedder も搭載。両方が意図的に tiny なのは app が低スペック機器で高速起動するため。ステップ 4・6 で両方を置き換えます — RAG システムでは取得品質が全て。',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-rag-architecture-ja.svg',
        imageCaption: 'ローカル RAG スタック: Ollama (ランタイム, localhost:11434)、Llama 3.3 8B Q4_K_M (~4.9 GB、回答モデル)、AnythingLLM Desktop (UI + LanceDB ベクトルストア)、nomic-embed-text-v1.5 (~280 MB embedder)。データフロー: PDF → AnythingLLM → nomic-embed-text → LanceDB → Llama 3.3 8B → 回答。',
      },
      prerequisites: {
        id: 'prerequisites',
        title: '開始前に必要なもの',
        content:
          '**16GB RAM、20GB ディスク空き、インターネット接続、30 分を備えたノートパソコン。** OS は macOS 12+、Windows 10/11、最新 Linux desktop。',
        items: [
          '**RAM:** 16GB は Llama 3.3 8B Q4 + AnythingLLM + 通常の desktop app の実用最小値。8GB は Phi-4 Mini Q4 で動作 — ステップ 2 の代替を参照。',
          '**ディスク:** 20GB 空き。Llama 3.3 8B Q4_K_M は ~5GB、embedding model は ~280MB、AnythingLLM は ~600MB、embedding 用に余裕が必要 (~100 page あたり 10–30MB)。',
          '**ネットワーク:** Model プル用に ~50 Mbps 最小。25 Mbps では ~16 分；残りのチュートリアルは影響なし。',
          '**権限:** AnythingLLM に admin/root 不要。Ollama は macOS/Linux の `/usr/local/bin` にインストール (パスワード 1 回) または Windows `%LOCALAPPDATA%` (admin なし)。',
          '**ドキュメント準備:** 開始に 5–20 PDF。より大きいセットも動作、小セットで取得品質テストが高速。',
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-prerequisites-ja.svg',
        imageCaption: 'システム要件: 16 GB RAM (Llama 3.3 8B Q4 + AnythingLLM の最低値)、20 GB 空きディスク、モデルダウンロードに 50 Mbps。macOS 12+、Windows 10/11、または Linux。AnythingLLM に admin 不要。',
      },
      step1InstallOllama: {
        id: 'step-1-install-ollama',
        title: 'ステップ 1: Ollama をインストール (3 分)',
        content:
          '**ollama.com/download から OS 用 Ollama installer をダウンロード、実行。Installer が `ollama` CLI を PATH に追加、バックグラウンドサービス開始。** 設定選択肢なし。',
        items: [
          '**macOS:** `.dmg` をダウンロード、Ollama を Applications にドラッグ、1 回起動して CLI helper をインストール。Service が実行中はメニューバーに llama icon。',
          '**Windows:** `.exe` をダウンロード、実行、デフォルト受け入れ。Ollama はインストール後にバックグラウンドサービスで実行 — 別途起動不要。',
          '**Linux:** 1 行インストール: `curl -fsSL https://ollama.com/install.sh | sh`。Script が systemd unit を登録；`sudo systemctl start ollama` で開始。',
          '**確認:** Terminal を開き `ollama --version` 実行。Version 文字列が表示されるはず。Command not found ならば Terminal を再起動して PATH を更新。',
        ],
        codeBlock: 'ollama --version\n# ollama version is 0.5.x  (any 0.5+ build works for this tutorial)',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'warning',
            text: '`ollama --version` は成功するがその後のステップで "localhost:11434 接続拒否" エラーが出る場合、バックグラウンドサービスが自動起動していません。macOS: Applications から app 起動。Linux: `sudo systemctl start ollama`。Windows: Ollama tray icon を開く。',
          },
        ],
      },
      step2PullModel: {
        id: 'step-2-pull-model',
        title: 'ステップ 2: Llama 3.3 8B をプル (8 分)',
        content:
          '**Terminal で `ollama pull llama3.3:8b-instruct-q4_K_M` 実行。これで 4.9GB 量子化 GGUF をダウンロード、Ollama に登録。** 合計 30 分中ほぼこのステップだけ。',
        items: [
          '**ダウンロードサイズ:** ~4.9GB (Q4_K_M 量子化)。50 Mbps では ~8 分；100 Mbps では ~4 分；25 Mbps では ~16 分。',
          '**進捗を見る:** Ollama がパーセンテージとレートを表示。ダウンロードが中断されても再実行で再開 — `ollama list` で確認。',
          '**Model の smoke test:** ダウンロード完了後、`ollama run llama3.3:8b-instruct-q4_K_M` 実行、"2+2 は?" と聞く。妥当な回答を確認。`/bye` で終了。',
          '**低 RAM 代替:** 8GB 搭載なら `ollama pull phi3:mini` (Phi-4 Mini、~2.4GB)。ステップ 3 でこのモデル名を使用。長い文書では品質落ちるも動作可能。',
        ],
        codeBlock:
          '# 16GB RAM 推奨\nollama pull llama3.3:8b-instruct-q4_K_M\n\n# 8GB RAM 代替\nollama pull phi3:mini\n\n# Quick smoke test (終了: /bye)\nollama run llama3.3:8b-instruct-q4_K_M',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'すでに他の Ollama model がある? `ollama list` で全て表示。複数 model をインストール維持、AnythingLLM workspace 設定で切り替え可能。',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-model-options-ja.svg',
        imageCaption: 'RAM別モデルオプション: Llama 3.3 8B Q4_K_M (~4.9GB, 16GB RAM, 50Mbpsで~8分) 推奨; Phi-4 Mini Q4 (~2.4GB, 8GB RAM) 低メモリ向け; Mistral Small Q4_K_M (~4.1GB, 16GB RAM) 代替案。',
      },
      step3InstallAnythingLlm: {
        id: 'step-3-install-anythingllm',
        title: 'ステップ 3: AnythingLLM Desktop をインストール (4 分)',
        content:
          '**useanything.com (または anythingllm.com) から AnythingLLM Desktop をダウンロード、installer を実行。App を起動、"クラウドアカウント作成" を無視 — Local-only mode が次画面で提示。** 無人インストール。',
        items: [
          '**macOS:** `.dmg` をダウンロード、AnythingLLM を Applications にドラッグ、起動。macOS がアプリ開発者確認を要求する場合、システム設定 → プライバシー で "開く" をクリック。',
          '**Windows:** `.exe` installer をダウンロード。Windows SmartScreen が "一般的でないアプリ" とフラグ — "詳細情報" → "実行" をクリック。App は `%LOCALAPPDATA%\\anythingllm-desktop` にインストール (admin 不要)。',
          '**Linux:** `.AppImage` をダウンロード、実行可能にマーク (`chmod +x AnythingLLMDesktop.AppImage`)、ダブルクリックで実行。',
          '**初回選択:** AnythingLLM はホスト型クラウド workspace OR ローカルのみセットアップを提示。**ローカル設定** を選択 — このシステムをオフラインのまま。',
          '**Workspace 作成:** プロンプト時、最初の workspace に説明的な名前を付ける ("研究論文"、"契約"、"個人メモ")。各 workspace が独自の document collection と embedding store を持つ。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'AnythingLLM のデフォルト LLM は welcome デモ専用の tiny 組み込みモデル。次のステップで local Ollama を指す。本来のクエリにデフォルト使用禁止 — 回答が使用不可能に弱い。',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-install-flow-ja.svg',
        imageCaption: 'AnythingLLM Desktop 4ステップインストール: anythingllm.comからダウンロード(~600MB) → 管理者不要でインストール → 起動してクラウド画面スキップ → "Local Setup"を選択してデータをオフライン維持。',
      },
      step4ConfigureEmbedding: {
        id: 'step-4-configure-embedding',
        title: 'ステップ 4: AnythingLLM を Ollama に接続、embedder を変更 (3 分)',
        content:
          '**AnythingLLM 設定 → LLM 選好 を開く。Provider に "Ollama" 選択、URL を `http://127.0.0.1:11434` に設定、Model dropdown から `llama3.3:8b-instruct-q4_K_M` を選択。保存。次に Embedding 選好 を開き、デフォルトから `nomic-embed-text` (via Ollama) に変更。**',
        items: [
          '**LLM 選好 panel:** Provider = Ollama、Endpoint = `http://127.0.0.1:11434`、Model = `llama3.3:8b-instruct-q4_K_M`。"変更を保存" クリック。緑の checkmark が接続確認。',
          '**Embedding 選好 panel:** デフォルトは "AnythingLLM Native Embedder" (tiny 組み込み)。Provider を Ollama に変更、Terminal で `ollama pull nomic-embed-text` を先に実行 (~280MB)、panel の model list をリフレッシュ、`nomic-embed-text:latest` を選択。保存。',
          '**Re-embedding 警告:** 旧 embedder で既に document を追加していれば、AnythingLLM が re-embed を促す。新規インストールならば document がないので prompt なし。',
          '**ベクトル DB:** デフォルト (LanceDB) のまま。ローカル、ファイルバック、ゼロ config。PGVector や Qdrant が特に必要な場合のみ変更。',
        ],
        codeBlock:
          '# Embedding 選好 panel を開く前に Terminal で実行\nollama pull nomic-embed-text',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'nomic-embed-text-v1.5 を選ぶ理由? 2026 年 5 月、500MB 以下のあらゆるモデルで MTEB Retrieval leaderboard top 5、最新 CPU で 400–800 chunks/sec、Apple Silicon で 2000+ chunks/sec、Apache 2.0 ライセンス。ほぼ全ローカル RAG stack のアップグレード first choice — 代替は [embedding model comparison](/ja/power-local-llm/best-embedding-models-local-rag-2026) 参照。',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-config-flow-ja.svg',
        imageCaption: 'ステップ 4 の 2 つのパネル: LLM 選好 (プロバイダー = Ollama、エンドポイント = http://127.0.0.1:11434、モデル = llama3.3:8b-instruct-q4_K_M)、次に Embedding 選好 (nomic-embed-text を先にプル、その後 Ollama 経由で nomic-embed-text:latest を選択)。',
      },
      step5UploadPdfs: {
        id: 'step-5-upload-pdfs',
        title: 'ステップ 5: 最初の PDF をアップロード (5 分)',
        content:
          '**Workspace を開く、"ドキュメントをアップロード" をクリック、5–20 PDF をドラッグ。AnythingLLM がテキスト抽出、chunk (デフォルト 512 token、0 overlap)、各 chunk を Ollama で embedding、vector を LanceDB に保存。** Progress bar に解析 page と embedded chunk を表示。',
        items: [
          '**対応フォーマット:** PDF (テキスト)、DOCX、TXT、MD、EPUB + URL scraping。スキャンした image-PDF は OCR が必要 — troubleshooting 参照。',
          '**速度:** 最新 CPU で 400–800 chunks/sec、Apple Silicon で 2000+ chunks/sec (Ollama warm 後)。~50 page × 20 PDF (~3000 chunks 合計) は最新 CPU で embedding 5–8 秒、Apple Silicon で 1–2 秒 + parsing time。20 PDF アップロード、解析、embedding に ~5 分計上。',
          '**Embedding 中 RAM:** Ollama が embedding model (~280MB) を最初の request で load、cache 維持。以降の embed は cache 再利用。',
          '**"Workspace に移動":** Upload 後、AnythingLLM が document を "limbo" pool に配置。明示的に "Workspace に移動" → "保存して embedding" をクリック時のみクエリ可能に。このニステップは意図的 — embedding コスト前に preview 可能。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '古い OCR scan の PDF には破損または空の text layer — 人間の目では良好に見えるが AnythingLLM は "[image]" または空 string を抽出。Upload 前に text editor で PDF を開く (または `pdftotext file.pdf -` from poppler-utils 実行) して text layer 確認。',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-embed-flow-ja.svg',
        imageCaption: 'PDFアップロードからクエリまで5ステップ: PDFアップ → テキスト抽出 → チャンク化(1000/200) → nomic-embed-text/Ollama経由でエンベディング → LanceDB保存。速度: 400–800チャンク/秒(CPU)、2000+(Apple Silicon)。',
      },
      step6TestQueries: {
        id: 'step-6-test-queries',
        title: 'ステップ 6: クエリをテスト (5 分)',
        content:
          '**Workspace chat に質問を入力。AnythingLLM が質問を embedding、LanceDB から top-N chunk を取得、これらを context で prompt 構築、Ollama に送信、回答を表示。** 16GB ノートパソコンの latency は ~3–10 秒/query。',
        items: [
          '**Fact-recall query で開始:** "あなたの PDF の [特定用語] とは?" — 取得 grounding をテスト。回答は PDF を引用し正確な phrasing を例示すべき。',
          '**次に synthesis query:** "[著者/document title] の主論を要約。" — model が複数 chunk を統合する能力をテスト。',
          '**次に comparison query** (PDF に比較可能 content がある場合): "[doc A] と [doc B] は [topic] をどう扱う?" — cross-document 取得をテスト。',
          '**引用を検査:** AnythingLLM は各回答の下に source chunk を表示。クリックして、model が正しい passage から根拠を取ったか確認。引用が off-topic なら、取得が broken — ステップ 7 参照。',
        ],
      },
      step7TuneChunks: {
        id: 'step-7-tune-chunks',
        title: 'ステップ 7: Chunk サイズを調整 (2 分)',
        content:
          '**Workspace 設定 → ベクトルデータベース を開く。Chunk 大きさを 512 から 1000、Chunk overlap を 0 から 200 に変更。保存、document を re-embed (UI が prompt)。** AnythingLLM では単一最大レバレッジポイント。',
        items: [
          '**1000/200 を選ぶ理由:** PDF paragraph や section は 512 token に綺麗に適合しない。200-token overlap は chunk 境界を跨ぐ sentence が少なくとも 1 つの neighbor に完全に現れることを意味、取得がそれをつかむ。',
          '**Re-embed コスト:** 20-PDF / 3000-chunk set は ~5 秒で re-embed。より大きい set は比例して長い。Chunk store は overwrite、append でなく。',
          '**Top-K 取得:** デフォルト top-K は 4 (4 best-match chunks が context に)。回答が根拠薄く感じるなら 6–8 に増加；model が noisy chunk に distracted なら 2–3 に低下。',
          '**Prompt template:** AnythingLLM は system prompt を Workspace → Chat 設定 → Prompt で公開。デフォルト OK；specific failure mode がある場合のみ tune。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '理論より empirical tuning: chunk size 変更の前後で同じ 5 test query を入力、結果比較。1000/200 での取得が worse なら、おそらく非常に短い document (1-page memo、code docstring) — 代わりに 256/64 を試す。',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-chunk-settings-ja.svg',
        imageCaption: 'デフォルト vs 推奨 Chunk 設定: デフォルト 512/0/Top-K 4 は chunk 境界の文が切れる。推奨 1000 tokens / 200 overlap / Top-K 4–6 は overlap window で境界の文をキャプチャ。20 PDF の re-embedding: ~5 秒。',
      },
      sampleQueries: {
        id: 'sample-queries',
        title: 'サンプルクエリと期待される回答',
        content:
          '**正しく調整されたローカル RAG システムは fact-recall を source から逐語的に回答、求められれば synthesis、使用した chunk を引用。** 研究論文 workspace での 3 つの例と健全なシステム が返すもの:',
        rows: [
          {
            'Query 型': 'Fact-recall',
            'Example': 'Smith et al. 2024 は何のサンプルサイズを使用した?',
            '健全な回答パターン': 'Methods section からの直接引用 + chunk への引用',
            '失敗パターン': '引用なしの generic 回答 ("通常、研究者は 100–500 人の参加者")',
          },
          {
            'Query 型': 'Synthesis',
            'Example': 'この論文の主要な貢献を要約。',
            '健全な回答パターン': 'Abstract + Conclusion chunk から 3–5 文',
            '失敗パターン': 'Title 反復または abstract から 1 文引用のみ',
          },
          {
            'Query 型': 'Cross-document',
            'Example': 'Smith と Jones は chunk overlap をどう異なる見方する?',
            '健全な回答パターン': '両論文からの引用、明示的帰属',
            '失敗パターン': '1 論文のみ引用、または chunk にない disagreement を発明',
          },
        ],
        columns: ['Query 型', 'Example', '健全な回答パターン', '失敗パターン'],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '健全なローカル RAG 回答は fact-recall で source chunk を逐語引用、summary query で chunk を跨ぐ synthesis、使用した chunk ID を引用 — 引用なしの generic 回答は model problem でなく取得 problem を合図。',
          },
          {
            type: 'plain-terms',
            text: '回答が "通常、研究者は 100-500 人の参加者" 的に聞こえ、"Smith et al. 287 人を使用 (Methods p.4)" でなければ、取得が broken、model が training data から guessing。取得を先に修理 (chunk size、embedder、similarity threshold)、model を変更する前に。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'この 3 query pattern を各 retrieval config 変更後のテストセットとして使用。Fact-recall が still misses だが synthesis 機能すれば chunks が粗い。Synthesis は miss だが fact-recall 機能すれば top-k が低い。Fail パターンがどの knob を回すかを伝える。',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-query-types-ja.svg',
        imageCaption: '3つのRAGクエリタイプ: 事実確認(直接引用+出典=正常)、合成(概要+結論から3–5文=正常)、文書横断(両論文から引用=正常)。緑=正常、赤=検索障害 — 回答モデルではなく検索を先に修正。',
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: '何か壊れた時: 6 つの一般的な failure mode と fix',
        content:
          '**ほぼ全て failure が 6 カテゴリに該当。Symptom を行に match、fix を apply。**',
        rows: [
          {
            'Symptom': 'AnythingLLM が "Ollama に接続できません" を表示',
            '推定される原因': 'Ollama service が実行していない、または endpoint 不正',
            'Fix': '`ollama serve` を実行 (または app/service を再起動)。Endpoint が `http://127.0.0.1:11434` であり `localhost:11434` でないことを確認 (Windows で alias が時々失敗)。',
          },
          {
            'Symptom': 'Model pull が 0% または 99% で stall',
            '推定される原因': 'CDN edge issue または disk full',
            'Fix': 'Ctrl+C で cancel、`df -h` で disk space 確認、同じ `ollama pull` を再実行 — Ollama が last byte から resume。',
          },
          {
            'Symptom': 'Embedding step が hang している風',
            '推定される原因': 'Ollama が embedding model を初回 load',
            'Fix': '30–60 秒待つ。初回 model load は disk speed に応じて 10–40 秒。後続 embed は fast。',
          },
          {
            'Symptom': '取得が query に無関係な chunk を返す',
            '推定される原因': 'デフォルト 512/0 chunking + weak default embedder',
            'Fix': 'ステップ 4 (nomic-embed-text) とステップ 7 (1000/200 chunking) 両方が apply されたか確認。Workspace を re-embed。',
          },
          {
            'Symptom': '回答が短い、generic、source との engagement を拒否',
            '推定される原因': 'Wrong LLM (tiny default) が still selected または context 小さい',
            'Fix': 'LLM 選好が `llama3.3:8b-instruct-q4_K_M` を表示するか確認。Top-K を 4 から 6 に増加。',
          },
          {
            'Symptom': 'Scanned-image PDF は upload するが empty chunk を produce',
            '推定される原因': 'PDF に text layer がない — pure raster image',
            'Fix': 'PDF を OCR 先に。macOS: `ocrmypdf input.pdf output.pdf`。Linux/Windows: Tesseract + ocrmypdf をインストール。OCR\'d output を re-upload。',
          },
        ],
        columns: ['Symptom', '推定される原因', 'Fix'],
        image: '/images/local-rag-on-your-pdfs-step-by-step-troubleshooting-ja.svg',
        imageCaption: '6 つの failure mode: 接続拒否 (ollama serve を実行)、stall した pull (Ctrl+C → df -h → 再実行)、hang している embedding (30–60 秒待つ)、的外れな chunk (ステップ 4 + 7 を適用)、generic な回答 (llama3.3:8b-instruct-q4_K_M を設定、Top-K を増加)、scanned PDF からの空 chunk (ocrmypdf を先に実行)。',
      },
      regionalContext: {
        id: 'regional-context',
        title: '日本ユーザーのための活用ポイント',
        content:
          'ローカル RAG システムは日本のビジネスと教育における重要なニーズに対応します。METI (経済産業省) AI ガバナンス、企業セキュリティ基準、データ主権に合致した architecture。',
        items: [
          '**METI AI ガバナンス 2024:** 経済産業省が 2024 年に公開したフレームワークに準拠。ローカル推論で sensitive data (医療、金融、法務) を cloud LLM API に送らず、enterprise governance 要件を満たす。日本企業の risk management standard に aligned。',
          '**東アジアデータ主権:** Japan、Malaysia、Singapore、Korea では regional data residency framework が厳化。ローカル RAG (zero cloud API) はこれらを直接満たす。企業が regional boundary 内でデータ処理を完全制御。',
          '**日本企業活用シナリオ:** 大銀行、病院、law firm はローカル RAG を客契約書、patient record、法令解釈に使用。Zero cloud dependency、ゼロ license cost。インストール: laptop または on-premise server で 30 分、productivity: 即座。Financial/Medical/Legal sectors の due diligence、compliance scan、document search 自動化。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ollama のインストールが失敗する場合は?',
            a: 'macOS では Gatekeeper が未署名 helper をブロック — システム設定 → プライバシー & セキュリティ で "許可" をクリック。Windows では Defender SmartScreen が quarantine — 右クリック → プロパティ → ブロック解除。Linux では install script が sudo を要求 (systemd unit 書き込み); sudo 利用不可なら github.com/ollama/ollama/releases から static binary をダウンロード、手動で PATH に配置。',
          },
          {
            q: 'Embedding step が遅い理由は?',
            a: 'Session の初回 embed は遅い — Ollama が embedding model を lazy-load in RAM (disk speed に応じて 10–40 秒)。その後、embedding は最新 CPU で 400–800 chunks/sec、Apple Silicon で 2000+ chunks/sec。持続 throughput が 100 chunks/sec 以下なら model が swap-disk で実行 — 他 app を close してメモリ解放、retry。',
          },
          {
            q: 'いくつの PDF を一度に upload できる?',
            a: 'AnythingLLM は単一 drag-drop で数百ファイル受け入れ。Practical limit は parse step 中の RAM: ~100 medium PDF (50 page each) で ~1GB peak。Embed 後、on-disk vector store は小さい (~100 page あたり 10–30MB)。1000+ PDF は [1000 PDF locally](/ja/power-local-llm/chat-with-1000-pdfs-locally) dedicated guide 参照。',
          },
          {
            q: 'Password-protected PDF に使用可能?',
            a: 'AnythingLLM は password-protected PDF を直接 decrypt できない。`qpdf --password=YOURPASSWORD --decrypt input.pdf output.pdf` で decrypt first (qpdf は無料、全 OS)、unprotected output を upload。Threat model が要求すれば embed 後に unprotected copy を delete — embedding は human-readable でない。',
          },
          {
            q: '取得が wrong chunk を返す場合は?',
            a: '3 つの knob (impact 順): default embedder から nomic-embed-text に switch (ステップ 4)、512/0 chunking を 1000/200 に change + re-embed (ステップ 7)、workspace setting で top-K を 4 から 6 に bump。3 つ全て後も取得が wrong なら、document が前処理が必要 — header/footer を strip、whitespace を normalize、long PDF を per-chapter file に split。',
          },
          {
            q: 'Llama 3.3 8B 以外のモデルを使うべき?',
            a: 'Llama 3.3 8B Q4_K_M は 16GB system での 2026 best quality-per-RAM tradeoff。8GB RAM では Phi-4 Mini Q4_K_M (~2.4GB)。24GB+ では Qwen 3 14B Q4 for notably better synthesis on long document。Multilingual workload は Mistral Nemo 12B が non-English より優秀 (Llama 3.3 より)。',
          },
          {
            q: '後でモデルを update する方法は?',
            a: '`ollama pull llama3.3:8b-instruct-q4_K_M` を再実行 latest build 取得、AnythingLLM を再起動して model version を re-detect。Completely different model に switch するには、`ollama pull <new-model>` 実行、AnythingLLM setting の LLM 選好 dropdown を変更 — re-embedding 不要 (embedding は model でなく embedder に依存)。',
          },
          {
            q: '別のコンピュータに移動可能?',
            a: 'はい。Ollama model は `~/.ollama/models` (macOS/Linux) または `%USERPROFILE%\\.ollama\\models` (Windows) — フォルダをコピー。AnythingLLM workspace は `~/.anythingllm/storage` — それもコピー。新 machine で Ollama と AnythingLLM Desktop をインストール、copied folder を place。Workspace と embedding は identically come up。',
          },
          {
            q: 'PDF が scanned image の場合は?',
            a: 'Not directly — AnythingLLM は text 抽出できるが image の OCR はできない。Scanned PDF を前処理: `ocrmypdf input.pdf output.pdf` (cross-platform、MIT-licensed、Tesseract 使用)。Apple Silicon では `ocrmypdf -l jpn+eng` が 70+ 言語対応。OCR 後、output PDF は original image + searchable text layer を持つ、AnythingLLM が text を正しく抽出。',
          },
          {
            q: 'Document database をバックアップする方法は?',
            a: 'AnythingLLM は全て `~/.anythingllm/storage` (macOS/Linux) または `%LOCALAPPDATA%\\anythingllm-desktop\\storage` (Windows) に store。このフォルダを tar/zip、backup drive にコピー。フォルダは original document、parsed chunk、vector index、chat history を包含。Restoration は copy-back-and-restart — special import flow 不要。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: 最高のローカル RAG](/ja/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — AnythingLLM に commit する前に代替を評価したいリーダー向け。',
          '[2026 ローカル RAG の最高 Embedding モデル](/ja/power-local-llm/best-embedding-models-local-rag-2026) — nomic-embed-text より優秀な取得を望むリーダー向け。',
          '[Built-in RAG 付きローカル AI App: ファイルとチャット (ゼロセットアップ)](/ja/power-local-llm/local-ai-app-with-built-in-rag) — AnythingLLM より even simpler を実現したいリーダー向け。',
          '[RAG 説明: リアルデータに基づいた AI 回答 (2026)](/ja/prompt-engineering/rag-explained) — RAG とは何か、なぜ各 component が重要かの concept authority。',
          '[2026 ローカル LLM ハードウェアガイド](/ja/local-llms/local-llm-hardware-guide-2026) — ノートパソコンだけでなく hardware も選択中のリーダー向けの sizing reference。',
          '[Power Local LLM Hub](/ja/power-local-llm) — cluster 用の complete guide library。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'headline': '30分でローカルRAGシステムを構築: Ollama + AnythingLLM',
      'description':
        'ステップバイステップ: Ollama をインストール、AnythingLLM を設定、PDF をアップロード、チャット。合計時間 30分。16GB ノートパソコンで検証。2026年5月。',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
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
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'Llama 3.3 8B' },
        { '@type': 'Thing', 'name': 'nomic-embed-text' },
        { '@type': 'Thing', 'name': 'Retrieval-augmented generation' },
        { '@type': 'Thing', 'name': 'ローカル RAG' },
      ],
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '#key-takeaways'],
      },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'ホーム',
          'item': 'https://www.promptquorum.com/ja',
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
          'name': '30分でローカルRAGシステムを構築',
          'item': 'https://www.promptquorum.com/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step',
        },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: '30分钟在本地PDF上构建RAG系统（Ollama + AnythingLLM）',
    seoTitle: '30分钟本地PDF RAG系统 2026：Ollama + AnythingLLM',
    intro:
      '在一台16 GB内存笔记本上搭建可用个人RAG系统的最快路径完整指南。技术栈：Ollama、Llama 3.3 8B、AnythingLLM、nomic-embed-text。总耗时：从空机器到与自己的PDF对话，30分钟完成。',
    metaDescription:
      '分步教程：安装 Ollama，配置 AnythingLLM，导入 PDF，即可对话。全程30分钟，在16 GB内存笔记本上测试验证。2026年5月。',
    twitterDescription:
      '30分钟从空笔记本到与自己的PDF对话。Ollama + Llama 3.3 8B + AnythingLLM + nomic-embed-text。在16 GB内存上测试验证。',
    current_models_mentioned: ['Llama 3.3 8B', 'nomic-embed-text-v1.5', 'Phi-4 Mini', 'Mistral Small'],
    current_hardware_mentioned: ['16 GB内存笔记本', 'Apple M1', 'Apple M3', 'Intel Core Ultra 5', 'AMD Ryzen 7 7700'],
    audience: '希望在自己笔记本上搭建可用个人RAG系统、无需依赖云端API的开发者和高级用户。',
    readTime: '约12分钟阅读',
    educationalLevel: 'Beginner',
    primaryTerm: '本地PDF RAG系统',
    targetKeywords: [
      '本地rag pdf教程',
      'ollama anythingllm rag',
      '本地与pdf对话',
      '本地rag 30分钟搭建',
      '笔记本私有rag',
    ],
    leadAnswerBlock:
      '**安装 Ollama，拉取 Llama 3.3 8B，安装 AnythingLLM，连接至 Ollama，将嵌入模型切换为 nomic-embed-text，将 PDF 拖入工作区并提问。在16 GB内存笔记本上，整个流程耗时30分钟——其中大部分时间是模型下载。**',
    quickAnswerTop: {
      zh: {
        question: '如何在30分钟内为我的PDF构建本地RAG系统？',
        answer:
          '安装 Ollama（3分钟），拉取 Llama 3.3 8B（8分钟，主要是下载），安装 AnythingLLM（4分钟），连接至 Ollama（3分钟）并将嵌入器切换为 nomic-embed-text，将 PDF 导入工作区（5分钟完成向量化），测试查询（5分钟），调整分块大小（2分钟）。总计：在16 GB内存笔记本上30分钟完成。安装后系统完全离线运行。',
        bullets: [
          '技术栈：Ollama + Llama 3.3 8B Q4_K_M + AnythingLLM + nomic-embed-text-v1.5',
          '硬件最低要求：16 GB内存、20 GB可用磁盘、现代CPU（任意Apple Silicon、Ryzen 5000+、Intel 11代+）',
          '仅初始模型和应用下载需要网络——推理完全本地执行',
          '支持macOS、Windows 10/11及Linux，AnythingLLM步骤无需管理员/root权限',
          '无需编写代码、无需Python、无需配置向量数据库——AnythingLLM内置LanceDB',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '要点总结', anchor: '#key-takeaways' },
      { label: '你将构建什么', anchor: '#stack-overview' },
      { label: '开始前的准备', anchor: '#prerequisites' },
      { label: '第1步：安装 Ollama（3分钟）', anchor: '#step-1-install-ollama' },
      { label: '第2步：拉取 Llama 3.3 8B（8分钟）', anchor: '#step-2-pull-model' },
      { label: '第3步：安装 AnythingLLM Desktop（4分钟）', anchor: '#step-3-install-anythingllm' },
      { label: '第4步：配置嵌入模型（3分钟）', anchor: '#step-4-configure-embedding' },
      { label: '第5步：上传第一批 PDF（5分钟）', anchor: '#step-5-upload-pdfs' },
      { label: '第6步：测试查询（5分钟）', anchor: '#step-6-test-queries' },
      { label: '第7步：调整分块大小（2分钟）', anchor: '#step-7-tune-chunks' },
      { label: '示例查询与预期回答格式', anchor: '#sample-queries' },
      { label: '故障排查', anchor: '#troubleshooting' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**技术栈：** Ollama 运行 LLM，AnythingLLM 提供界面和向量存储，Llama 3.3 8B Q4_K_M 负责回答，nomic-embed-text-v1.5 负责检索。',
          '**耗时：** 全程30分钟。最长单步是模型下载（50 Mbps网速约8分钟）。',
          '**硬件：** 16 GB内存是实际最低门槛。8 GB内存仅在使用 Phi-4 Mini 且文档量较小时可用——参见备选模型说明。',
          '**隐私：** 安装完成后，任何数据不离开本机。PDF、向量、提示词和输出结果全部本地保存。',
          '**无需编码：** 除两条 Ollama 命令外，零 Python、零终端操作。AnythingLLM 是带拖拽文档导入功能的桌面应用。',
          '**默认嵌入器存在问题：** AnythingLLM 内置了一个极小的默认嵌入器。在第4步切换为 nomic-embed-text-v1.5——检索质量会有明显提升。',
          '**默认分块大小对PDF同样不合适：** 1000 token分块配合200 token重叠比默认的512/0设置效果更好。在第7步进行调整。',
        ],
      },
      stackOverview: {
        id: 'stack-overview',
        title: '你将构建什么',
        content:
          '**一个独立的桌面RAG系统：一个可拖入PDF并提问的对话窗口。** 四个开源组件，全部免费，全部运行在你的笔记本上：',
        items: [
          '**Ollama** — 本地LLM运行时。管理模型文件，在localhost:11434暴露OpenAI兼容API。提供回答模型。',
          '**Llama 3.3 8B Instruct（Q4_K_M）** — Meta的8B参数对话模型，量化后约占5 GB内存。在2026年的文档问答任务中回答质量良好。',
          '**AnythingLLM Desktop** — 界面 + 向量存储 + RAG编排层。内置LanceDB，原生解析PDF/DOCX/TXT/MD，将 Ollama 作为LLM提供者。',
          '**nomic-embed-text-v1.5** — 嵌入模型。768维向量，通过 Ollama 在现代CPU上以约600 chunks/秒运行。替换 AnythingLLM 性能不足的默认嵌入器。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '本地RAG系统由四个部分组成——运行时（Ollama）、回答模型（Llama 3.3 8B）、界面加向量存储（AnythingLLM）和嵌入模型（nomic-embed-text-v1.5）——在同一台机器上组合使用，无需任何云端调用。',
          },
          {
            type: 'plain-terms',
            text: '拖入PDF，提出问题，获得带引用来源的有据可查回答——完全离线。四个组件各司其职：Ollama运行模型，Llama 3.3 8B生成回答，AnythingLLM处理分块和向量，nomic-embed-text-v1.5将文本转化为支持检索的向量。总安装时间：约30分钟；总成本：0元。',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'AnythingLLM 同样内置了一个默认LLM和一个默认嵌入器。两者都故意设计得很小，以便在低配硬件上快速启动。由于检索质量是RAG系统的核心，我们在第4步和第6步将两者都替换掉。',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-rag-architecture-zh.svg',
        imageCaption: '本地 RAG 技术栈：Ollama（运行时，localhost:11434）、Llama 3.3 8B Q4_K_M（~4.9 GB，回答模型）、AnythingLLM Desktop（界面 + LanceDB 向量存储）和 nomic-embed-text-v1.5（~280 MB 嵌入器）。数据流：PDF → AnythingLLM → nomic-embed-text → LanceDB → Llama 3.3 8B → 回答。',
      },
      prerequisites: {
        id: 'prerequisites',
        title: '开始前的准备',
        content:
          '**一台16 GB内存、20 GB可用磁盘空间、具备网络连接的笔记本，以及30分钟时间。** 操作系统可以是macOS 12+、Windows 10/11或任意现代Linux桌面发行版。',
        items: [
          '**内存：** 16 GB是 Llama 3.3 8B Q4 + AnythingLLM + 日常桌面应用同时运行的实际最低门槛。8 GB内存可使用 Phi-4 Mini Q4 替代——参见第2步备选方案。',
          '**磁盘：** 20 GB可用空间。Llama 3.3 8B Q4_K_M 约5 GB，嵌入模型约280 MB，AnythingLLM 约600 MB，向量化结果还需预留空间（每100页PDF约10–30 MB）。',
          '**网络：** 模型下载至少需要约50 Mbps。25 Mbps时同一步骤约需16分钟；教程其余部分不受影响。',
          '**权限：** AnythingLLM无需管理员/root权限。Ollama在macOS/Linux上安装至`/usr/local/bin`（仅询问一次密码），在Windows上安装至`%LOCALAPPDATA%`（无需管理员）。',
          '**准备文档：** 准备5–20个PDF开始测试。数量更多也可以，但小集合更便于快速验证检索质量。',
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-prerequisites-zh.svg',
        imageCaption: '系统要求：16 GB 内存（Llama 3.3 8B Q4 + AnythingLLM 的实际门槛）、20 GB 可用磁盘、模型下载需要 50 Mbps。支持 macOS 12+、Windows 10/11 或 Linux。AnythingLLM 无需管理员权限。',
      },
      step1InstallOllama: {
        id: 'step-1-install-ollama',
        title: '第1步：安装 Ollama（3分钟）',
        content:
          '**从 ollama.com/download 下载对应操作系统的 Ollama 安装包并运行。安装程序会将`ollama`命令添加至PATH并启动后台服务。** 无需进行任何配置选择。',
        items: [
          '**macOS：** 下载`.dmg`，将 Ollama 拖入"应用程序"，首次启动以安装CLI助手。服务运行时菜单栏会显示羊驼图标。',
          '**Windows：** 下载`.exe`，运行后接受默认设置。安装后 Ollama 以后台服务形式运行——无需单独启动。',
          '**Linux：** 一行安装命令：`curl -fsSL https://ollama.com/install.sh | sh`。脚本会注册systemd单元；执行`sudo systemctl start ollama`启动。',
          '**验证：** 打开终端，运行`ollama --version`，应看到版本号字符串。若提示命令未找到，请重启终端以加载更新后的PATH。',
        ],
        codeBlock: 'ollama --version\n# ollama version is 0.5.x  (any 0.5+ build works for this tutorial)',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'warning',
            text: '若`ollama --version`正常但后续步骤提示"localhost:11434连接被拒绝"，说明后台服务未自动启动。macOS：从"应用程序"启动该应用。Linux：`sudo systemctl start ollama`。Windows：点击 Ollama 托盘图标。',
          },
        ],
      },
      step2PullModel: {
        id: 'step-2-pull-model',
        title: '第2步：拉取 Llama 3.3 8B（8分钟）',
        content:
          '**在终端运行`ollama pull llama3.3:8b-instruct-q4_K_M`。此命令下载量化后的4.9 GB GGUF文件并注册至 Ollama。** 在典型家庭网络上，这一步占据30分钟总时长的大部分。',
        items: [
          '**下载大小：** 约4.9 GB（Q4_K_M量化）。50 Mbps约需8分钟；100 Mbps约需4分钟；25 Mbps约需16分钟。',
          '**查看进度：** Ollama会打印进度百分比和速率。下载中断后可重新运行同一命令——Ollama会从上次中断处续传。',
          '**冒烟测试：** 下载完成后，运行`ollama run llama3.3:8b-instruct-q4_K_M`，询问"2+2等于多少？"，确认得到合理回答。输入`/bye`退出。',
          '**低内存备选方案：** 若内存为8 GB而非16 GB，运行`ollama pull phi3:mini`（Phi-4 Mini，约2.4 GB）。在第3步中使用该模型名称替代。长文档质量会有所下降，但系统可正常运行。',
        ],
        codeBlock:
          '# 推荐用于16 GB内存\nollama pull llama3.3:8b-instruct-q4_K_M\n\n# 8 GB内存备选方案\nollama pull phi3:mini\n\n# 快速冒烟测试（输入/bye退出）\nollama run llama3.3:8b-instruct-q4_K_M',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: '已安装了其他 Ollama 模型？`ollama list`可查看所有已安装模型。你可以同时保留多个模型，并在 AnythingLLM 工作区设置中随时切换。',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-model-options-zh.svg',
        imageCaption: '按内存选择模型: Llama 3.3 8B Q4_K_M (~4.9GB, 16GB内存, 50Mbps约8分钟) 推荐; Phi-4 Mini Q4 (~2.4GB, 8GB内存) 低内存方案; Mistral Small Q4_K_M (~4.1GB, 16GB内存) 备选。',
      },
      step3InstallAnythingLlm: {
        id: 'step-3-install-anythingllm',
        title: '第3步：安装 AnythingLLM Desktop（4分钟）',
        content:
          '**从 useanything.com（或 anythingllm.com）下载 AnythingLLM Desktop 并运行安装程序。启动应用后跳过"创建云账户"提示——下一个界面会提供本地模式选项。** 安装过程无需人工干预。',
        items: [
          '**macOS：** 下载`.dmg`，将 AnythingLLM 拖入"应用程序"，启动。若 macOS 提示确认开发者身份，在"系统设置→隐私与安全性"中点击"仍要打开"。',
          '**Windows：** 下载`.exe`安装包。Windows SmartScreen 可能提示"不常见下载"——点击"更多信息"→"仍要运行"。应用安装至`%LOCALAPPDATA%\\anythingllm-desktop`（无需管理员权限）。',
          '**Linux：** 下载`.AppImage`，添加可执行权限（`chmod +x AnythingLLMDesktop.AppImage`），双击运行。',
          '**首次运行选择：** AnythingLLM 提供云端工作区或本地专用设置两个选项。选择**本地设置**。这是使整个系统保持离线的关键选择。',
          '**创建工作区：** 提示时，为第一个工作区起一个有意义的名称（如"研究论文"、"合同文件"、"个人笔记"）。每个工作区有独立的文档集合和向量存储。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'AnythingLLM 的默认LLM是仅用于欢迎演示的极小内置模型。下一步我们将把它指向你本地的 Ollama。请勿使用默认模型进行实际查询——回答质量会极差。',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-install-flow-zh.svg',
        imageCaption: 'AnythingLLM桌面版4步安装: 从anythingllm.com下载(~600MB) → 无需管理员权限安装 → 启动并跳过云端提示 → 选择"Local Setup"使所有数据完全离线。',
      },
      step4ConfigureEmbedding: {
        id: 'step-4-configure-embedding',
        title: '第4步：连接 AnythingLLM 至 Ollama 并切换嵌入模型（3分钟）',
        content:
          '**打开 AnythingLLM 设置→LLM偏好。选择"Ollama"作为提供者，URL设为`http://127.0.0.1:11434`，从模型下拉列表选择`llama3.3:8b-instruct-q4_K_M`，保存。然后进入嵌入偏好，通过 Ollama 将嵌入器从默认切换为`nomic-embed-text`。**',
        items: [
          '**LLM偏好面板：** 提供者=Ollama，端点=`http://127.0.0.1:11434`，模型=`llama3.3:8b-instruct-q4_K_M`。点击"保存更改"，绿色对勾表示连接成功。',
          '**嵌入偏好面板：** 默认为"AnythingLLM原生嵌入器"——一个极小的内置模型。先在终端运行`ollama pull nomic-embed-text`（约280 MB），再在面板中刷新模型列表并选择`nomic-embed-text:latest`。点击保存。',
          '**重新嵌入提示：** 若之前已在旧嵌入器下添加了文档，AnythingLLM 会提示重新嵌入。全新安装时尚无文档，不会出现此提示。',
          '**向量数据库：** 保持默认（LanceDB）。它是本地、基于文件的，无需任何配置。仅在明确需要 PGVector 或 Qdrant 时才切换。',
        ],
        codeBlock:
          '# 打开嵌入偏好面板前，先在终端运行此命令\nollama pull nomic-embed-text',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: '为何选择 nomic-embed-text-v1.5？在2026年5月，它在所有500 MB以下模型中位列MTEB检索排行榜前五，在现代CPU上以400–800 chunks/秒运行，在Apple Silicon上达2000+ chunks/秒，并采用Apache 2.0许可证。它是几乎所有本地RAG技术栈的首选升级方案——参见[嵌入模型对比](/zh/power-local-llm/best-embedding-models-local-rag-2026)了解其他选项。',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-config-flow-zh.svg',
        imageCaption: '第4步的两个面板：LLM偏好（提供者 = Ollama，端点 = http://127.0.0.1:11434，模型 = llama3.3:8b-instruct-q4_K_M），然后嵌入偏好（先拉取 nomic-embed-text，再通过 Ollama 选择 nomic-embed-text:latest）。',
      },
      step5UploadPdfs: {
        id: 'step-5-upload-pdfs',
        title: '第5步：上传第一批 PDF（5分钟）',
        content:
          '**打开工作区，点击"上传文档"，拖入5–20个PDF。AnythingLLM 会提取文本、分块（默认512 token，重叠0），通过 Ollama 对每个分块进行向量化，并将向量存储至LanceDB。** 进度条显示已解析页数和已向量化分块数。',
        items: [
          '**支持格式：** PDF（基于文本）、DOCX、TXT、MD、EPUB，以及URL抓取。扫描图片PDF需要先进行OCR——参见故障排查章节。',
          '**速度：** Ollama预热后，现代CPU约400–800 chunks/秒，Apple Silicon约2000+ chunks/秒。20个PDF（每个约50页，共约3000个分块）在现代CPU上约需5–8秒向量化，Apple Silicon上约1–2秒，加上解析时间。上传、解析并向量化20个PDF共约需5分钟。',
          '**向量化过程中的内存：** Ollama在首次请求时加载嵌入模型（约280 MB）并保持缓存。后续向量化会复用缓存。',
          '**"移入工作区"：** 上传后，AnythingLLM 将文档放置在"等待区"。必须明确点击"移入工作区"→"保存并向量化"才能使其可查询。这个两步流程是故意设计的——允许你在触发向量化之前预览文档。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '旧版OCR扫描的PDF通常包含损坏或空白的文本层——肉眼看起来正常，但 AnythingLLM 提取的是"[image]"或空字符串。上传前，用文本编辑器打开PDF（或运行`pdftotext file.pdf -`，来自poppler-utils）确认文本层存在。',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-embed-flow-zh.svg',
        imageCaption: 'PDF上传到查询5步流程: 上传PDF → 解析文本层 → 分块(1000/200) → nomic-embed-text/Ollama向量化 → LanceDB存储查询。速度: 400–800块/秒(CPU)，2000+(Apple Silicon)。',
      },
      step6TestQueries: {
        id: 'step-6-test-queries',
        title: '第6步：测试查询（5分钟）',
        content:
          '**在工作区对话框输入问题。AnythingLLM 对问题进行向量化，从LanceDB检索排名前N的分块，用这些分块作为上下文构建提示词，发送至 Ollama，并展示回答。** 在16 GB内存笔记本上，每次查询延迟约3–10秒。',
        items: [
          '**先测试事实召回查询：** "PDF中[某个具体术语]是什么意思？"——测试检索的有效性。回答应引用PDF并准确摘录相关文本。',
          '**再测试综合查询：** "总结[作者/文档标题]的主要论点。"——测试模型整合多个分块的能力。',
          '**最后测试跨文档查询**（仅在你的PDF包含可比较内容时）："比较[文档A]和[文档B]对[主题]的处理方式。"——测试跨文档检索能力。',
          '**检查引用来源：** AnythingLLM 在每条回答下方显示来源分块。点击以验证模型是否基于正确段落作答。若引用内容无关，说明检索存在问题——参见第7步。',
        ],
      },
      step7TuneChunks: {
        id: 'step-7-tune-chunks',
        title: '第7步：调整分块大小（2分钟）',
        content:
          '**打开工作区设置→向量数据库。将分块大小从512改为1000，重叠从0改为200。点击保存，然后重新向量化文档（界面会提示）。** 这是 AnythingLLM 中提升检索质量最关键的单一参数调整。',
        items: [
          '**为何用1000/200而非512/0：** PDF段落和章节通常无法整齐地放入512个token。200 token的重叠确保跨越分块边界的句子在至少一个相邻分块中完整出现，从而被检索命中。',
          '**重新向量化耗时：** 20个PDF / 3000个分块约需5秒重新向量化。更大的集合耗时成比例增加。分块存储会被覆盖而非追加。',
          '**Top-K检索：** 默认Top-K为4（最佳匹配的4个分块作为上下文）。若回答感觉依据不足，调高至6–8；若模型被噪声分块干扰，调低至2–3。',
          '**提示词模板：** AnythingLLM 在工作区→对话设置→提示词下提供系统提示词。默认即可；仅在出现特定失败模式时才调整。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '实证调整优于理论推断：在分块大小变更前后，用同一组5条测试查询进行对比。若1000/200的检索效果更差，你的文档可能非常短（单页备忘录、代码文档注释）——改为尝试256/64。',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-chunk-settings-zh.svg',
        imageCaption: '默认 vs 推荐分块参数：默认 512/0/Top-K 4 导致句子在分块边界断裂。推荐 1000 tokens / 200 重叠 / Top-K 4–6 在重叠窗口中捕获边界句子。20个PDF重新向量化约需5秒。',
      },
      sampleQueries: {
        id: 'sample-queries',
        title: '回答实际应该是什么样的？',
        content:
          '**一个调校良好的本地RAG系统对事实召回问题会逐字引用来源，对综合问题会整合多个分块，并引用所用分块。** 以下是研究论文工作区的三类示例查询及健康系统的预期回答：',
        rows: [
          {
            '查询类型': '事实召回',
            '示例': 'Smith等人2024年的样本量是多少？',
            '健康回答模式': '直接引用方法章节原文 + 分块来源引用',
            '故障模式': '泛泛作答（"研究人员通常使用100–500名参与者"），无原文引用',
          },
          {
            '查询类型': '综合',
            '示例': '总结这篇论文的主要贡献。',
            '健康回答模式': '从摘要和结论分块提取的3–5句话',
            '故障模式': '只是复述标题或引用摘要中的一句话',
          },
          {
            '查询类型': '跨文档',
            '示例': 'Smith和Jones在分块重叠问题上有何分歧？',
            '健康回答模式': '引用两篇论文的内容并明确标注来源',
            '故障模式': '只引用一篇论文，或捏造一个分块中不存在的分歧',
          },
        ],
        columns: ['查询类型', '示例', '健康回答模式', '故障模式'],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '健康的本地RAG回答对事实召回问题会逐字引用来源分块，对摘要问题会跨分块综合，并引用所用的具体分块ID——没有引用的泛泛回答说明检索存在问题，而非模型问题。',
          },
          {
            type: 'plain-terms',
            text: '如果回答是"研究人员通常使用100-500名参与者"而非"Smith等人使用了287名参与者（方法部分，第4页）"，说明检索已失效，模型在依靠训练数据作答。先修复检索（分块大小、嵌入器、相似度阈值），再考虑更换回答模型。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '每次调整检索配置后，用这三类查询模式作为测试集。若事实召回仍然失败但综合可以，说明分块粒度太粗。若综合失败但事实召回正常，说明Top-k太低。失败的模式告诉你该调哪个参数。',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-query-types-zh.svg',
        imageCaption: '3种RAG查询类型: 事实检索(直接引用+来源=正常)、综合归纳(摘要+结论3–5句=正常)、跨文档(两篇论文引用+明确来源=正常)。绿色=正常，红色=检索故障 — 先修复检索再改模型。',
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: '出现问题时：六种常见故障模式及解决方法',
        content:
          '**大多数故障属于以下六类之一。根据症状匹配对应行，按解决方法操作。**',
        rows: [
          {
            '症状': 'AnythingLLM 显示"无法连接到 Ollama"',
            '可能原因': 'Ollama 服务未运行，或端点设置错误',
            '修复方法': '运行`ollama serve`（或重启应用/服务）。确认端点为`http://127.0.0.1:11434`，Windows上`localhost:11434`别名有时失效。',
          },
          {
            '症状': '模型拉取卡在0%或99%',
            '可能原因': 'CDN边缘节点问题或磁盘已满',
            '修复方法': '用Ctrl+C取消，运行`df -h`确认磁盘空间，再重新运行同一`ollama pull`命令——Ollama会从上次中断字节处续传。',
          },
          {
            '症状': '向量化步骤看起来卡住了',
            '可能原因': 'Ollama 正在首次加载嵌入模型',
            '修复方法': '等待30–60秒。首次模型加载根据磁盘速度需10–40秒。后续向量化会很快。',
          },
          {
            '症状': '检索返回与查询无关的分块',
            '可能原因': '仍在使用默认512/0分块 + 弱默认嵌入器',
            '修复方法': '确认第4步（nomic-embed-text）和第7步（1000/200分块）均已应用。重新向量化工作区。',
          },
          {
            '症状': '回答简短、泛泛，或拒绝基于来源作答',
            '可能原因': '仍在使用错误的LLM（极小默认模型）或上下文太少',
            '修复方法': '确认LLM偏好显示的是`llama3.3:8b-instruct-q4_K_M`。将Top-K从4调高至6。',
          },
          {
            '症状': '扫描图片PDF上传成功但产生空分块',
            '可能原因': 'PDF没有文本层——纯光栅图像',
            '修复方法': '先对PDF进行OCR。macOS：`ocrmypdf input.pdf output.pdf`。Linux/Windows：安装Tesseract + ocrmypdf。然后重新上传OCR后的文件。',
          },
        ],
        columns: ['症状', '可能原因', '修复方法'],
        image: '/images/local-rag-on-your-pdfs-step-by-step-troubleshooting-zh.svg',
        imageCaption: '六种故障模式：连接被拒绝（运行 ollama serve）、拉取卡住（Ctrl+C → df -h → 重试）、向量化挂起（等待30–60秒）、检索返回无关分块（应用第4步和第7步）、回答简短泛泛（设置 llama3.3:8b-instruct-q4_K_M，调高 Top-K）、扫描图片PDF产生空分块（先运行 ocrmypdf）。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Ollama 安装失败怎么办？',
            a: 'macOS上最常见的问题是Gatekeeper阻止未签名的助手程序——打开"系统设置→隐私与安全性"，点击"仍要允许"。Windows上Defender SmartScreen可能隔离安装程序；右键→属性→解除锁定。Linux上install脚本需要sudo写入systemd单元；若sudo不可用，从github.com/ollama/ollama/releases下载静态二进制文件并手动添加至PATH。',
          },
          {
            q: '为什么向量化步骤这么慢？',
            a: '会话首次向量化较慢，因为 Ollama 需要将嵌入模型懒加载至内存（根据磁盘速度需10–40秒）。之后向量化在现代CPU上以400–800 chunks/秒运行，Apple Silicon上达2000+ chunks/秒。若持续吞吐量低于100 chunks/秒，模型可能在磁盘交换上运行——关闭其他应用释放内存后重试。',
          },
          {
            q: '一次可以上传多少个PDF？',
            a: 'AnythingLLM 支持单次拖拽上传数百个文件。实际限制在于解析步骤的内存峰值：100个中等PDF（每个50页）约需1 GB峰值内存。向量化完成后，磁盘向量存储很小（每100页PDF约10–30 MB）。1000+ PDF请参见专项指南[本地与1000个PDF对话](/zh/power-local-llm/chat-with-1000-pdfs-locally)。',
          },
          {
            q: '能处理密码保护的PDF吗？',
            a: 'AnythingLLM 无法直接解密密码保护的PDF。请先用`qpdf --password=你的密码 --decrypt input.pdf output.pdf`解密（qpdf免费，三大操作系统均可用），然后上传未加密的输出文件。若你的安全需求要求如此，向量化完成后可删除未加密副本——向量本身不可被人类阅读。',
          },
          {
            q: '检索返回错误分块怎么办？',
            a: '按影响程度依次调整三个参数：将默认嵌入器切换为nomic-embed-text（第4步），将分块从512/0改为1000/200并重新向量化（第7步），在工作区设置中将Top-K从4调高至6。若三项都调整后检索仍然错误，文档可能需要预处理——去除页眉页脚、规范化空白字符，或将超长PDF按章节拆分。',
          },
          {
            q: '应该使用 Llama 3.3 8B 以外的模型吗？',
            a: 'Llama 3.3 8B Q4_K_M 是2026年16 GB系统上质量与内存比的最佳选择。8 GB内存使用 Phi-4 Mini Q4_K_M（约2.4 GB）。24 GB+可尝试 Qwen 3 14B Q4，长文档综合能力明显更强。多语言工作负载下，Mistral Nemo 12B 处理非英语内容优于 Llama 3.3。',
          },
          {
            q: '以后如何更新模型？',
            a: '再次运行`ollama pull llama3.3:8b-instruct-q4_K_M`获取最新版本，然后重启 AnythingLLM 使其重新检测模型版本。若要完全切换到其他模型，运行`ollama pull <新模型>`，再在 AnythingLLM 设置中更改LLM偏好下拉选项——无需重新向量化，因为向量只依赖嵌入器而非回答模型。',
          },
          {
            q: '可以迁移到另一台电脑吗？',
            a: '可以。Ollama 模型存储在`~/.ollama/models`（macOS/Linux）或`%USERPROFILE%\\.ollama\\models`（Windows）——复制该文件夹。AnythingLLM 工作区存储在`~/.anythingllm/storage`——同样复制。在新机器上安装 Ollama 和 AnythingLLM Desktop，然后将复制的文件夹放置到对应位置。工作区和向量化结果会完全还原。',
          },
          {
            q: '如果我的PDF是扫描图片怎么办？',
            a: '不能直接处理——AnythingLLM 可以提取文本但无法对图像进行OCR。请先用`ocrmypdf input.pdf output.pdf`预处理扫描PDF（跨平台，MIT许可证，使用Tesseract）。Apple Silicon上`ocrmypdf -l chi_sim+eng`支持包括简体中文在内的70+种语言。OCR后，输出PDF同时包含原始图像和可检索文本层，AnythingLLM 可正确提取文本。',
          },
          {
            q: '如何备份我的文档数据库？',
            a: 'AnythingLLM 将所有内容存储在`~/.anythingllm/storage`（macOS/Linux）或`%LOCALAPPDATA%\\anythingllm-desktop\\storage`（Windows）下。将该文件夹打包（tar/zip）并复制至备份存储设备。文件夹包含原始文档、已解析分块、向量索引和对话历史。还原只需复制回来后重启——无需特殊导入流程。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI：最佳本地RAG对比](/zh/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — 适合在确定使用 AnythingLLM 之前想评估其他选项的读者。',
          '[2026年本地RAG最佳嵌入模型](/zh/power-local-llm/best-embedding-models-local-rag-2026) — 适合想获得比 nomic-embed-text 更好检索效果的读者。',
          '[内置RAG的本地AI应用：无需配置即可对话文件](/zh/power-local-llm/local-ai-app-with-built-in-rag) — 适合意识到自己想要比 AnythingLLM 更简单方案的读者。',
          '[RAG解析：如何让AI回答基于真实数据（2026）](/zh/prompt-engineering/rag-explained) — RAG概念权威解析，涵盖RAG是什么以及每个组件的作用。',
          '[本地LLM硬件指南2026](/zh/local-llms/local-llm-hardware-guide-2026) — 硬件规格参考，适合还在选购笔记本而非只是选软件的读者。',
          '[Power Local LLM 资源中心](/zh/power-local-llm) — 本专题的完整指南库。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/zh/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'headline': '30分钟在本地PDF上构建RAG系统（Ollama + AnythingLLM）',
      'description':
        '分步教程：安装 Ollama，配置 AnythingLLM，导入 PDF，即可对话。全程30分钟，在16 GB内存笔记本上测试验证。2026年5月。',
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
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'Llama 3.3 8B' },
        { '@type': 'Thing', 'name': 'nomic-embed-text' },
        { '@type': 'Thing', 'name': 'Retrieval-augmented generation' },
        { '@type': 'Thing', 'name': 'Local RAG' },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': '主页',
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
          'name': '30分钟构建本地PDF RAG系统',
          'item': 'https://www.promptquorum.com/zh/power-local-llm/local-rag-on-your-pdfs-step-by-step',
        },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: 'Crea un RAG local en tus PDFs en 30 minutos (Ollama + AnythingLLM)',
    seoTitle: 'RAG local en PDFs 2026: configuración paso a paso',
    intro:
      'Una guía completa del camino más rápido hacia un sistema RAG personal funcional en un portátil con 16 GB de RAM. Stack: Ollama, Llama 3.3 8B, AnythingLLM, nomic-embed-text. Tiempo total: 30 minutos desde un equipo vacío hasta chatear con tus propios PDFs.',
    metaDescription:
      'Paso a paso: instala Ollama, configura AnythingLLM, sube PDFs y chatea con ellos. Tiempo total 30 minutos. Probado en portátil con 16 GB de RAM. Mayo 2026.',
    twitterDescription:
      '30 minutos desde un portátil vacío hasta chatear con tus propios PDFs. Ollama + Llama 3.3 8B + AnythingLLM + nomic-embed-text. Probado con 16 GB de RAM.',
    current_models_mentioned: ['Llama 3.3 8B', 'nomic-embed-text-v1.5', 'Phi-4 Mini', 'Mistral Small'],
    current_hardware_mentioned: ['portátil con 16 GB de RAM', 'Apple M1', 'Apple M3', 'Intel Core Ultra 5', 'AMD Ryzen 7 7700'],
    audience: 'Desarrolladores y usuarios avanzados que quieren un sistema RAG personal funcional en su propio portátil, sin depender de una API en la nube.',
    readTime: '12 min de lectura',
    educationalLevel: 'Beginner',
    primaryTerm: 'RAG local en PDFs',
    targetKeywords: [
      'rag local pdf tutorial',
      'ollama anythingllm rag',
      'chat con pdfs localmente',
      'rag local configuración 30 minutos',
      'rag privado en portátil',
    ],
    leadAnswerBlock:
      '**Instala Ollama, descarga Llama 3.3 8B, instala AnythingLLM, conéctalo a Ollama, cambia el modelo de embedding a nomic-embed-text, arrastra tus PDFs a un workspace y haz preguntas. En un portátil con 16 GB de RAM el proceso completo tarda 30 minutos, la mayor parte de los cuales corresponde a la descarga del modelo.**',
    quickAnswerTop: {
      es: {
        question: '¿Cómo construyo un sistema RAG local para mis PDFs en 30 minutos?',
        answer:
          'Instala Ollama (3 min), descarga Llama 3.3 8B (8 min, principalmente la descarga), instala AnythingLLM (4 min), conéctalo a Ollama (3 min) y cambia el embedder a nomic-embed-text, sube PDFs a un workspace (5 min de embedding), prueba queries (5 min) y ajusta el tamaño de los chunks (2 min). Total: 30 minutos en un portátil con 16 GB de RAM. Una vez instalado, el sistema funciona completamente sin conexión.',
        bullets: [
          'Stack: Ollama + Llama 3.3 8B Q4_K_M + AnythingLLM + nomic-embed-text-v1.5',
          'Requisito mínimo de hardware: 16 GB de RAM, 20 GB de disco libre, CPU moderno (cualquier Apple Silicon, Ryzen 5000+, Intel 11.ª gen+)',
          'Internet solo es necesario para las descargas iniciales del modelo y la aplicación; la inferencia es completamente local',
          'Funciona en macOS, Windows 10/11 y Linux sin admin/root en el paso de AnythingLLM',
          'Sin código, sin Python, sin configuración de base de datos vectorial: AnythingLLM incluye LanceDB integrado',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Qué vas a construir', anchor: '#stack-overview' },
      { label: 'Requisitos previos', anchor: '#prerequisites' },
      { label: 'Paso 1: Instalar Ollama (3 min)', anchor: '#step-1-install-ollama' },
      { label: 'Paso 2: Descargar Llama 3.3 8B (8 min)', anchor: '#step-2-pull-model' },
      { label: 'Paso 3: Instalar AnythingLLM (4 min)', anchor: '#step-3-install-anythingllm' },
      { label: 'Paso 4: Configurar el modelo de embedding (3 min)', anchor: '#step-4-configure-embedding' },
      { label: 'Paso 5: Subir los primeros PDFs (5 min)', anchor: '#step-5-upload-pdfs' },
      { label: 'Paso 6: Probar queries (5 min)', anchor: '#step-6-test-queries' },
      { label: 'Paso 7: Ajustar el tamaño de los chunks (2 min)', anchor: '#step-7-tune-chunks' },
      { label: 'Queries de ejemplo y respuestas esperadas', anchor: '#sample-queries' },
      { label: 'Solución de problemas', anchor: '#troubleshooting' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Stack:** Ollama ejecuta el LLM, AnythingLLM gestiona la interfaz + el almacén vectorial, Llama 3.3 8B Q4_K_M responde y nomic-embed-text-v1.5 recupera.',
          '**Tiempo:** 30 minutos en total. El paso más largo es la descarga del modelo (~8 min a 50 Mbps).',
          '**Hardware:** 16 GB de RAM es el mínimo práctico. Con 8 GB solo funciona Phi-4 Mini y conjuntos de documentos pequeños; consulta la sección de modelos alternativos.',
          '**Privacidad:** Una vez instalado, nada sale de tu equipo. PDFs, embeddings, prompts y respuestas permanecen en local.',
          '**Sin código:** Cero Python, cero terminal más allá de los dos comandos de Ollama. AnythingLLM es una aplicación de escritorio con importación de documentos por arrastrar y soltar.',
          '**El embedder predeterminado no es el adecuado:** AnythingLLM incluye un embedder integrado muy pequeño. Cámbialo a nomic-embed-text-v1.5 en el Paso 4; la calidad de la recuperación mejora de forma notable.',
          '**El tamaño de chunk predeterminado tampoco es adecuado para PDFs:** Chunks de 1000 tokens con una superposición de 200 tokens es un mejor punto de partida que el valor predeterminado 512/0. Se ajusta en el Paso 7.',
        ],
      },
      stackOverview: {
        id: 'stack-overview',
        title: 'Qué vas a construir',
        content:
          '**Un sistema RAG de escritorio autocontenido: una ventana de chat donde arrastras PDFs y haces preguntas sobre ellos.** Cuatro piezas de código abierto, todas gratuitas y todas ejecutándose en tu portátil:',
        items: [
          '**Ollama** — runtime local de LLM. Gestiona los archivos del modelo y expone una API compatible con OpenAI en localhost:11434. Proporciona el modelo de respuesta.',
          '**Llama 3.3 8B Instruct (Q4_K_M)** — modelo de chat de 8B parámetros de Meta, cuantizado para caber en ~5 GB de RAM. Buena calidad de respuesta en preguntas basadas en documentos en 2026.',
          '**AnythingLLM Desktop** — interfaz + almacén vectorial + orquestación RAG. Incluye LanceDB embebido, parsea PDFs/DOCX/TXT/MD de forma nativa y se comunica con Ollama como proveedor de LLM.',
          '**nomic-embed-text-v1.5** — modelo de embedding. Vectores de 768 dimensiones, corre a través de Ollama a ~600 chunks/s en una CPU moderna. Reemplaza el embedder predeterminado de AnythingLLM, que es insuficiente.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Un sistema RAG local son cuatro piezas —un runtime (Ollama), un modelo de respuesta (Llama 3.3 8B), una interfaz más almacén vectorial (AnythingLLM) y un modelo de embedding (nomic-embed-text-v1.5)— conectadas en un mismo equipo sin llamadas a la nube.',
          },
          {
            type: 'plain-terms',
            text: 'Arrastra un PDF, haz una pregunta, obtén una respuesta fundamentada con citas, completamente sin conexión. Las cuatro piezas se reparten el trabajo: Ollama ejecuta los modelos, Llama 3.3 8B redacta la respuesta, AnythingLLM gestiona los chunks y vectores, y nomic-embed-text-v1.5 convierte el texto en los vectores que hacen posible la recuperación. Instalación total: ~30 minutos; coste total: $0.',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'AnythingLLM también tiene un LLM predeterminado integrado y un embedder predeterminado integrado. Ambos son deliberadamente pequeños para que la aplicación arranque rápido en hardware de gama baja. Los reemplazamos en los pasos 4 y 6 porque la calidad de recuperación es todo en un sistema RAG.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-rag-architecture-es.svg',
        imageCaption: 'Stack RAG local: Ollama (runtime, localhost:11434), Llama 3.3 8B Q4_K_M (~4,9 GB, modelo de respuesta), AnythingLLM Desktop (interfaz + almacén vectorial LanceDB) y nomic-embed-text-v1.5 (~280 MB embedder). Flujo de datos: PDFs → AnythingLLM → nomic-embed-text → LanceDB → Llama 3.3 8B → Respuesta.',
      },
      prerequisites: {
        id: 'prerequisites',
        title: 'Lo que necesitas antes de empezar',
        content:
          '**Un portátil con 16 GB de RAM, 20 GB de disco libre, conexión a internet y 30 minutos.** El sistema operativo puede ser macOS 12+, Windows 10/11 o cualquier escritorio Linux moderno.',
        items: [
          '**RAM:** 16 GB es el mínimo práctico para Llama 3.3 8B Q4 + AnythingLLM + tus aplicaciones de escritorio habituales. Con 8 GB funciona Phi-4 Mini Q4 en su lugar; consulta las alternativas del Paso 2.',
          '**Disco:** 20 GB libres. Llama 3.3 8B Q4_K_M ocupa ~5 GB, el modelo de embedding ~280 MB, AnythingLLM ~600 MB, y necesitas espacio para los embeddings (~10–30 MB por cada 100 páginas de PDF).',
          '**Red:** ~50 Mbps como mínimo para la descarga del modelo. Con 25 Mbps el mismo paso tarda ~16 minutos; el resto del tutorial no se ve afectado.',
          '**Permisos:** AnythingLLM no necesita admin/root. Ollama se instala en `/usr/local/bin` en macOS/Linux (pide contraseña una vez) o `%LOCALAPPDATA%` en Windows (sin admin).',
          '**Documentos listos:** 5–20 PDFs para empezar. Cantidades mayores también funcionan, pero un conjunto pequeño permite probar la calidad de recuperación más rápido.',
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-prerequisites-es.svg',
        imageCaption: 'Requisitos del sistema: 16 GB de RAM (mínimo para Llama 3.3 8B Q4 + AnythingLLM), 20 GB de disco libre, 50 Mbps para la descarga del modelo. macOS 12+, Windows 10/11 o Linux. AnythingLLM no requiere permisos de administrador.',
      },
      step1InstallOllama: {
        id: 'step-1-install-ollama',
        title: 'Paso 1: Instalar Ollama (3 min)',
        content:
          '**Descarga el instalador de Ollama para tu sistema operativo desde ollama.com/download y ejecútalo. El instalador añade la CLI `ollama` al PATH e inicia un servicio en segundo plano.** No hay opciones de configuración que elegir.',
        items: [
          '**macOS:** descarga el `.dmg`, arrastra Ollama a Aplicaciones, ábrelo una vez para instalar el helper de CLI. El icono de llama aparece en la barra de menú cuando el servicio está en ejecución.',
          '**Windows:** descarga el `.exe`, ejecútalo y acepta los valores predeterminados. Ollama se ejecuta como servicio en segundo plano tras la instalación; no se necesita un lanzamiento adicional.',
          '**Linux:** instalación en una línea: `curl -fsSL https://ollama.com/install.sh | sh`. El script registra una unidad systemd; iníciala con `sudo systemctl start ollama`.',
          '**Verificar:** abre un terminal y ejecuta `ollama --version`. Deberías ver una cadena de versión. Si el comando no se encuentra, reinicia el terminal para que cargue el PATH actualizado.',
        ],
        codeBlock: 'ollama --version\n# ollama version is 0.5.x  (any 0.5+ build works for this tutorial)',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'warning',
            text: 'Si `ollama --version` funciona pero los pasos posteriores fallan con "conexión rechazada en localhost:11434", el servicio en segundo plano no se inició automáticamente. macOS: abre la aplicación desde Aplicaciones. Linux: `sudo systemctl start ollama`. Windows: abre el icono de Ollama en la bandeja del sistema.',
          },
        ],
      },
      step2PullModel: {
        id: 'step-2-pull-model',
        title: 'Paso 2: Descargar Llama 3.3 8B (8 min)',
        content:
          '**Ejecuta `ollama pull llama3.3:8b-instruct-q4_K_M` en un terminal. Esto descarga la GGUF cuantizada de 4,9 GB y la registra en Ollama.** La mayor parte de los 30 minutos totales corresponde a este único paso en una conexión doméstica típica.',
        items: [
          '**Tamaño de descarga:** ~4,9 GB (cuantización Q4_K_M). A 50 Mbps esperarás aproximadamente 8 minutos; a 100 Mbps aproximadamente 4 minutos; a 25 Mbps aproximadamente 16 minutos.',
          '**Ver el progreso:** Ollama imprime un porcentaje y la velocidad. La descarga se reanuda si se interrumpe; vuelve a ejecutar el mismo comando.',
          '**Prueba rápida del modelo:** tras completar la descarga, ejecuta `ollama run llama3.3:8b-instruct-q4_K_M` y pregunta "¿Cuánto es 2+2?". Confirma que obtienes una respuesta razonable. Escribe `/bye` para salir.',
          '**Alternativa con menos RAM:** si tienes 8 GB de RAM en lugar de 16 GB, ejecuta `ollama pull phi3:mini` (Phi-4 Mini, ~2,4 GB en disco). Usa ese nombre de modelo en el Paso 3. La calidad es menor en documentos largos, pero el sistema funciona.',
        ],
        codeBlock:
          '# Recomendado para 16 GB de RAM\nollama pull llama3.3:8b-instruct-q4_K_M\n\n# Alternativa para 8 GB de RAM\nollama pull phi3:mini\n\n# Prueba rápida (escribe /bye para salir)\nollama run llama3.3:8b-instruct-q4_K_M',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: '¿Ya tienes otros modelos de Ollama? `ollama list` los muestra todos. Puedes mantener varios modelos instalados y cambiar entre ellos en la configuración del workspace de AnythingLLM.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-model-options-es.svg',
        imageCaption: 'Opciones de modelo por RAM: Llama 3.3 8B Q4_K_M (~4,9 GB, 16 GB de RAM, ~8 min a 50 Mbps) es el recomendado; Phi-4 Mini Q4 (~2,4 GB, 8 GB de RAM, ~4 min) para equipos con poca memoria; Mistral Small Q4_K_M (~4,1 GB, 16 GB de RAM, ~7 min) como alternativa.',
      },
      step3InstallAnythingLlm: {
        id: 'step-3-install-anythingllm',
        title: 'Paso 3: Instalar AnythingLLM Desktop (4 min)',
        content:
          '**Descarga AnythingLLM Desktop desde useanything.com (o anythingllm.com) y ejecuta el instalador. Abre la aplicación y omite el aviso de "crear cuenta en la nube"; el modo solo-local se ofrece en la siguiente pantalla.** La instalación es desatendida.',
        items: [
          '**macOS:** descarga el `.dmg`, arrastra AnythingLLM a Aplicaciones y ábrelo. macOS puede pedirte que confirmes que la aplicación es de un desarrollador reconocido; haz clic en "Abrir" en Configuración del sistema → Privacidad si se solicita.',
          '**Windows:** descarga el instalador `.exe`. Windows SmartScreen puede indicar que no es una descarga habitual; haz clic en "Más información" → "Ejecutar de todas formas". La aplicación se instala en `%LOCALAPPDATA%\\anythingllm-desktop` (sin admin).',
          '**Linux:** descarga el `.AppImage`, márcalo como ejecutable (`chmod +x AnythingLLMDesktop.AppImage`) y haz doble clic para ejecutarlo.',
          '**Elección en la primera ejecución:** AnythingLLM ofrece un workspace en la nube alojado O una configuración solo-local. Elige **Configuración local**. Esta es la opción que mantiene todo el sistema sin conexión.',
          '**Creación del workspace:** cuando se solicite, asigna al primer workspace un nombre descriptivo ("artículos-investigación", "contratos", "notas-personales"). Cada workspace tiene su propia colección de documentos y almacén de embeddings.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'El LLM predeterminado de AnythingLLM es un modelo integrado muy pequeño destinado únicamente a la demo de bienvenida. En el siguiente paso lo apuntaremos a tu Ollama local. No uses el predeterminado para consultas reales; las respuestas serán demasiado débiles para ser útiles.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-install-flow-es.svg',
        imageCaption: 'Instalación de AnythingLLM Desktop en 4 pasos: Descargar desde anythingllm.com (~600 MB), Instalar sin admin, Abrir y omitir el aviso de nube, luego elegir "Local Setup" para mantener todos los datos sin conexión.',
      },
      step4ConfigureEmbedding: {
        id: 'step-4-configure-embedding',
        title: 'Paso 4: Conectar AnythingLLM a Ollama y cambiar el embedder (3 min)',
        content:
          '**Abre Configuración de AnythingLLM → Preferencia de LLM. Elige "Ollama" como proveedor, establece la URL en `http://127.0.0.1:11434` y selecciona `llama3.3:8b-instruct-q4_K_M` en el menú desplegable de modelos. Guarda. Luego ve a Preferencia de embedding y cambia del predeterminado a `nomic-embed-text` a través de Ollama.**',
        items: [
          '**Panel de Preferencia de LLM:** Proveedor = Ollama, Endpoint = `http://127.0.0.1:11434`, Modelo = `llama3.3:8b-instruct-q4_K_M`. Haz clic en "Guardar cambios". Una marca de verificación verde confirma la conexión.',
          '**Panel de Preferencia de embedding:** el predeterminado es "AnythingLLM Native Embedder", un embedder integrado muy pequeño. Cambia el Proveedor a Ollama, luego ejecuta `ollama pull nomic-embed-text` en tu terminal primero (~280 MB), actualiza la lista de modelos en el panel y selecciona `nomic-embed-text:latest`. Guarda.',
          '**Aviso de re-embedding:** si ya añadiste documentos con el embedder anterior, AnythingLLM te pedirá que los vuelvas a procesar. En una instalación nueva no hay documentos, por lo que el aviso no aparece.',
          '**Base de datos vectorial:** déjala en el valor predeterminado (LanceDB). Es local, respaldada por archivos y no necesita configuración. Cámbiala solo si necesitas específicamente PGVector o Qdrant.',
        ],
        codeBlock:
          '# Ejecuta esto en tu terminal antes de abrir el panel de Preferencia de embedding\nollama pull nomic-embed-text',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: '¿Por qué nomic-embed-text-v1.5 específicamente? En mayo de 2026 ocupa el top 5 del ranking MTEB Retrieval para cualquier modelo de menos de 500 MB, corre a 400–800 chunks/s en una CPU moderna y a más de 2000 chunks/s en Apple Silicon, y tiene licencia Apache 2.0. Es el primer upgrade estándar para casi todos los stacks RAG locales; consulta la [comparativa de modelos de embedding](/es/power-local-llm/best-embedding-models-local-rag-2026) para conocer las alternativas.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-config-flow-es.svg',
        imageCaption: 'Paso 4 en dos paneles: Preferencia de LLM (Proveedor = Ollama, Endpoint = http://127.0.0.1:11434, Modelo = llama3.3:8b-instruct-q4_K_M), luego Preferencia de Embedding (primero descarga nomic-embed-text, luego selecciona nomic-embed-text:latest vía Ollama).',
      },
      step5UploadPdfs: {
        id: 'step-5-upload-pdfs',
        title: 'Paso 5: Subir los primeros PDFs (5 min)',
        content:
          '**Abre tu workspace, haz clic en "Subir documentos" y arrastra entre 5 y 20 PDFs. AnythingLLM extrae el texto, lo divide en chunks (por defecto 512 tokens, 0 de superposición), procesa cada chunk con Ollama y almacena los vectores en LanceDB.** Una barra de progreso muestra las páginas analizadas y los chunks procesados.',
        items: [
          '**Formatos compatibles:** PDF (basado en texto), DOCX, TXT, MD, EPUB, además de scraping de URLs. Los PDFs de imagen escaneada necesitan OCR primero; consulta la sección de solución de problemas.',
          '**Velocidad:** 400–800 chunks/s en una CPU moderna y más de 2000 chunks/s en Apple Silicon una vez que Ollama está caliente. Un conjunto de 20 PDFs con ~50 páginas cada uno (~3000 chunks en total) termina el embedding en 5–8 segundos en una CPU moderna y en 1–2 segundos en Apple Silicon, más el tiempo de análisis. Calcula ~5 minutos en total para subir, analizar y procesar 20 PDFs.',
          '**RAM durante el embedding:** Ollama carga el modelo de embedding (~280 MB) en la primera solicitud y lo mantiene en caché. Los embeddings posteriores reutilizan la caché.',
          '**"Mover al workspace":** tras la subida, AnythingLLM coloca los documentos en un pool "en espera". Debes hacer clic explícitamente en "Mover al workspace" → "Guardar y procesar" para que sean consultables. Este flujo de dos pasos es intencional: permite previsualizar antes de asumir el coste del embedding.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Los PDFs de escaneos OCR antiguos suelen contener texto corrupto o capas de texto vacías; el archivo parece correcto al ojo humano, pero AnythingLLM extrae "[image]" o cadenas vacías. Abre el PDF en un editor de texto (o ejecuta `pdftotext file.pdf -` de poppler-utils) para confirmar que existe la capa de texto antes de subirlo.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-embed-flow-es.svg',
        imageCaption: 'Del PDF subido a la consulta en 5 pasos: Subir PDFs (arrastrar y soltar) → Extraer capa de texto → Dividir en chunks (1000 tokens / 200 de superposición) → Procesar con nomic-embed-text vía Ollama → Almacenar en LanceDB y hacer preguntas. Velocidad: 400–800 chunks/s en CPU, más de 2000 en Apple Silicon.',
      },
      step6TestQueries: {
        id: 'step-6-test-queries',
        title: 'Paso 6: Probar queries (5 min)',
        content:
          '**Escribe una pregunta en el chat del workspace. AnythingLLM vectoriza la pregunta, recupera los N chunks principales de LanceDB, construye un prompt con esos chunks como contexto, lo envía a Ollama y muestra la respuesta.** La latencia en un portátil con 16 GB de RAM es de aproximadamente 3–10 segundos por query.',
        items: [
          '**Empieza con una query de recuperación de hechos:** "¿Qué significa [término específico de uno de tus PDFs]?" Esto prueba el anclaje de la recuperación. La respuesta debe citar el PDF y reproducir la phrasing exacta.',
          '**Luego una query de síntesis:** "Resume el argumento principal de [autor/título del documento]." Esto prueba qué tan bien integra el modelo varios chunks.',
          '**Luego una query de comparación** (solo si tus PDFs contienen contenido comparable): "Compara cómo [doc A] y [doc B] tratan [tema]." Esto prueba la recuperación entre documentos.',
          '**Inspecciona las citas:** AnythingLLM muestra los chunks fuente debajo de cada respuesta. Haz clic en ellos para verificar que el modelo se basa en los pasajes correctos. Si las citas son irrelevantes, la recuperación está rota; consulta el Paso 7.',
        ],
      },
      step7TuneChunks: {
        id: 'step-7-tune-chunks',
        title: 'Paso 7: Ajustar el tamaño de los chunks (2 min)',
        content:
          '**Abre Configuración del workspace → Base de datos vectorial. Cambia el tamaño de chunk de 512 a 1000 y la superposición de chunk de 0 a 200. Haz clic en Guardar y luego vuelve a procesar tus documentos (la interfaz te lo pedirá).** Este es el principal parámetro para mejorar la calidad de la recuperación en AnythingLLM.',
        items: [
          '**Por qué 1000/200 en lugar de 512/0:** los párrafos y secciones de los PDFs rara vez encajan limpiamente en 512 tokens. La superposición de 200 tokens significa que una oración que cruza un límite de chunk aparece íntegra en al menos un chunk vecino, por lo que la recuperación la capta.',
          '**Coste del re-embedding:** el conjunto de 20 PDFs / 3000 chunks se vuelve a procesar en ~5 segundos. Los conjuntos más grandes tardan proporcionalmente más. El almacén de chunks se sobrescribe, no se añade al existente.',
          '**Recuperación Top-K:** el Top-K predeterminado es 4 (los 4 chunks de mejor coincidencia se convierten en contexto). Súbelo a 6–8 si tus respuestas parecen poco fundamentadas; bájalo a 2–3 si el modelo se distrae con chunks ruidosos.',
          '**Plantilla de prompt:** AnythingLLM expone el system prompt en Workspace → Configuración de chat → Prompt. El predeterminado está bien; ajústalo solo si tienes un fallo concreto que resolver.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El ajuste empírico supera a la teoría: haz las mismas 5 queries de prueba antes y después del cambio de tamaño de chunk y compara. Si la recuperación a 1000/200 es peor, probablemente tienes documentos muy cortos (memos de una página, docstrings de código): prueba 256/64 en su lugar.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-chunk-settings-es.svg',
        imageCaption: 'Configuración de chunks predeterminada vs. recomendada: los valores predeterminados 512/0/Top-K 4 dejan fragmentos de oraciones en los límites. Los valores recomendados 1000 tokens / 200 de superposición / Top-K 4–6 capturan las oraciones en los límites dentro de la ventana de superposición. Volver a procesar 20 PDFs tarda ~5 segundos.',
      },
      sampleQueries: {
        id: 'sample-queries',
        title: '¿Cómo deben ser las respuestas realmente?',
        content:
          '**Un sistema RAG local correctamente ajustado responde las queries de recuperación de hechos con citas textuales de la fuente, sintetiza cuando se le pide y cita los chunks que utilizó.** Tres queries de ejemplo en un workspace de artículos de investigación, con lo que devuelve un sistema saludable:',
        rows: [
          {
            'Tipo de query': 'Recuperación de hechos',
            'Ejemplo': '¿Qué tamaño de muestra utilizaron Smith et al. 2024?',
            'Patrón de respuesta saludable': 'Cita directa de la sección de métodos + referencia al chunk',
            'Patrón de fallo': 'Respuesta genérica ("los investigadores suelen usar 100–500 participantes") sin cita',
          },
          {
            'Tipo de query': 'Síntesis',
            'Ejemplo': 'Resume la contribución principal de este artículo.',
            'Patrón de respuesta saludable': '3–5 oraciones extraídas de los chunks del abstract y la conclusión',
            'Patrón de fallo': 'Repite el título o cita una sola oración del abstract',
          },
          {
            'Tipo de query': 'Entre documentos',
            'Ejemplo': '¿En qué difieren Smith y Jones sobre la superposición de chunks?',
            'Patrón de respuesta saludable': 'Citas de ambos artículos con atribución explícita',
            'Patrón de fallo': 'Cita solo un artículo o inventa una discrepancia que no está en los chunks',
          },
        ],
        columns: ['Tipo de query', 'Ejemplo', 'Patrón de respuesta saludable', 'Patrón de fallo'],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Una respuesta RAG local saludable cita el chunk fuente de forma literal para la recuperación de hechos, sintetiza entre chunks para preguntas de resumen y cita los IDs de chunk específicos que utilizó; las respuestas genéricas sin citas señalan un problema de recuperación, no un problema del modelo.',
          },
          {
            type: 'plain-terms',
            text: 'Si la respuesta dice "los investigadores suelen usar 100–500 participantes" en lugar de "Smith et al. usaron 287 participantes (Métodos, p. 4)", la recuperación está rota y el modelo está improvisando con sus datos de entrenamiento. Arregla la recuperación primero (tamaño de chunk, embedder, umbral de similitud) antes de cambiar el modelo de respuesta.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Usa estos tres patrones de query como tu conjunto de prueba tras cada cambio en la configuración de recuperación. Si la recuperación de hechos falla pero la síntesis funciona, tus chunks son demasiado grandes. Si la síntesis falla pero la recuperación de hechos funciona, tu top-k es demasiado bajo. El patrón de lo que falla te dice qué parámetro ajustar.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-query-types-es.svg',
        imageCaption: '3 tipos de query RAG: Recuperación de hechos (cita directa + referencia = saludable; respuesta genérica = recuperación rota), Síntesis (3–5 oraciones del abstract + conclusión = saludable), Entre documentos (citas de ambos artículos = saludable; cita solo uno o inventa = roto). Verde = saludable, rojo = arregla primero la recuperación.',
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Cuando algo falla: seis modos de fallo comunes y soluciones',
        content:
          '**La mayoría de los fallos entran en una de estas seis categorías. Identifica el síntoma en la fila correspondiente y aplica la solución.**',
        rows: [
          {
            'Síntoma': 'AnythingLLM muestra "No se puede conectar a Ollama"',
            'Causa probable': 'El servicio de Ollama no está en ejecución o el endpoint es incorrecto',
            'Solución': 'Ejecuta `ollama serve` (o reinicia la aplicación/servicio). Confirma que el endpoint es `http://127.0.0.1:11434`, no `localhost:11434` (en Windows el alias a veces falla).',
          },
          {
            'Síntoma': 'La descarga del modelo se detiene al 0% o al 99%',
            'Causa probable': 'Problema con el edge de CDN o disco lleno',
            'Solución': 'Cancela con Ctrl+C, ejecuta `df -h` para confirmar el espacio en disco y vuelve a ejecutar el mismo `ollama pull`; Ollama reanuda desde el último byte.',
          },
          {
            'Síntoma': 'El paso de embedding parece colgado',
            'Causa probable': 'Ollama está cargando el modelo de embedding por primera vez',
            'Solución': 'Espera 30–60 segundos. La carga del modelo por primera vez tarda entre 10 y 40 segundos según la velocidad del disco. Los embeddings siguientes son rápidos.',
          },
          {
            'Síntoma': 'La recuperación devuelve chunks no relacionados con la query',
            'Causa probable': 'Chunking 512/0 predeterminado + embedder predeterminado débil',
            'Solución': 'Confirma que el Paso 4 (nomic-embed-text) y el Paso 7 (chunking 1000/200) se aplicaron ambos. Vuelve a procesar el workspace.',
          },
          {
            'Síntoma': 'Las respuestas son cortas, genéricas o se niegan a trabajar con la fuente',
            'Causa probable': 'El LLM seleccionado sigue siendo el diminuto predeterminado o el contexto es demasiado pequeño',
            'Solución': 'Confirma que la Preferencia de LLM muestra `llama3.3:8b-instruct-q4_K_M`. Sube el top-K de 4 a 6.',
          },
          {
            'Síntoma': 'Los PDFs de imagen escaneada se suben pero producen chunks vacíos',
            'Causa probable': 'El PDF no tiene capa de texto; es una imagen raster pura',
            'Solución': 'Aplica OCR al PDF primero. macOS: `ocrmypdf input.pdf output.pdf`. Linux/Windows: instala Tesseract + ocrmypdf. Luego vuelve a subir el archivo procesado con OCR.',
          },
        ],
        columns: ['Síntoma', 'Causa probable', 'Solución'],
        image: '/images/local-rag-on-your-pdfs-step-by-step-troubleshooting-es.svg',
        imageCaption: 'Seis modos de fallo: conexión rechazada (ejecutar ollama serve), descarga detenida (Ctrl+C → df -h → reintentar), embedding colgado (esperar 30–60 s), chunks irrelevantes (aplicar Pasos 4 + 7), respuestas cortas/genéricas (configurar llama3.3:8b-instruct-q4_K_M, subir Top-K), chunks vacíos de PDFs escaneados (ejecutar ocrmypdf primero).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Contexto regional: privacidad de datos en España y Latinoamérica',
        content:
          'Un sistema RAG local como este responde directamente a los requisitos clave de privacidad y seguridad de España y América Latina. A diferencia de las soluciones RAG en la nube que envían datos a proveedores externos, todo permanece en tu equipo.',
        items: [
          '**RGPD y normativas equivalentes en Latinoamérica:** En España y la UE, el Reglamento General de Protección de Datos (RGPD, Art. 28) exige gestionar con cuidado los procesadores de datos. Un sistema RAG local que nunca envía datos fuera de tu infraestructura satisface este requisito directamente. En Latinoamérica, leyes como la LGPD de Brasil, la Ley Estatutaria 1581 de Colombia y la LPDP de Argentina siguen principios similares: los datos personales no deben transferirse a servidores externos sin garantías adecuadas.',
          '**Sectores regulados en España y LATAM:** Organizaciones de finanzas, salud, derecho y sector público en España, México, Argentina, Colombia, Chile y Brasil se benefician del RAG local: cero dependencia de API en la nube, cero flujo de datos transfronterizo, cumplimiento inmediato de las normativas locales.',
          '**Escenario típico para empresas hispanohablantes:** Archiva cinco años de contratos de clientes, indexalos con AnythingLLM y realiza búsquedas de diligencia debida y consultas de datos de clientes completamente en local. Coste de operación: prácticamente cero. Instalación productiva: 30 minutos en tu portátil o servidor local.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿Qué pasa si Ollama no se instala?',
            a: 'En macOS, el fallo más común es que Gatekeeper bloquee un helper sin firmar; abre Configuración del sistema → Privacidad y seguridad y haz clic en "Abrir igualmente". En Windows, Defender SmartScreen puede poner en cuarentena el instalador; haz clic derecho → Propiedades → Desbloquear. En Linux, el script de instalación necesita sudo para escribir la unidad systemd; si sudo no está disponible, descarga el binario estático desde github.com/ollama/ollama/releases y colócalo manualmente en tu PATH.',
          },
          {
            q: '¿Por qué el paso de embedding es lento?',
            a: 'El primer embedding de una sesión es lento porque Ollama carga el modelo de embedding de forma perezosa en la RAM (entre 10 y 40 segundos según la velocidad del disco). Después, el embedding corre a 400–800 chunks/s en una CPU moderna y a más de 2000 chunks/s en Apple Silicon. Si el rendimiento sostenido es inferior a 100 chunks/s, el modelo probablemente está usando memoria virtual del disco; cierra otras aplicaciones para liberar RAM y vuelve a intentarlo.',
          },
          {
            q: '¿Cuántos PDFs puedo subir a la vez?',
            a: 'AnythingLLM acepta cientos de archivos en un solo arrastrar y soltar. El límite práctico es la RAM durante el paso de análisis: ~1 GB en el pico para 100 PDFs de tamaño medio (50 páginas cada uno). Una vez procesados, el almacén vectorial en disco es pequeño (~10–30 MB por cada 100 páginas de PDF). Para 1000+ PDFs, consulta la guía dedicada sobre [chatear con 1000 PDFs en local](/es/power-local-llm/chat-with-1000-pdfs-locally).',
          },
          {
            q: '¿Puedo usar esto con PDFs protegidos con contraseña?',
            a: 'AnythingLLM no puede descifrar directamente PDFs protegidos con contraseña. Descífrelos primero con `qpdf --password=TUCONTRASEÑA --decrypt input.pdf output.pdf` (qpdf es gratuito, disponible en los tres sistemas operativos) y luego sube el archivo sin proteger. Elimina la copia sin proteger tras el embedding si tu modelo de amenazas lo requiere; los propios embeddings no son legibles por humanos.',
          },
          {
            q: '¿Qué hago si la recuperación devuelve chunks incorrectos?',
            a: 'Tres parámetros por orden de impacto: cambia del embedder predeterminado a nomic-embed-text (Paso 4), cambia el chunking de 512/0 a 1000/200 y vuelve a procesar (Paso 7), y sube el top-K de 4 a 6 en la Configuración del workspace. Si la recuperación sigue fallando después de los tres, tus documentos pueden necesitar preprocesamiento: elimina encabezados y pies de página, normaliza los espacios en blanco o divide los PDFs muy largos en archivos por capítulo.',
          },
          {
            q: '¿Debería usar un modelo diferente a Llama 3.3 8B?',
            a: 'Llama 3.3 8B Q4_K_M es la mejor relación calidad-RAM en 2026 para sistemas con 16 GB. Con 8 GB de RAM usa Phi-4 Mini Q4_K_M (~2,4 GB). Con 24 GB o más, prueba Qwen 3 14B Q4 para una síntesis notablemente mejor en documentos largos. Para cargas de trabajo multilingüe, Mistral Nemo 12B maneja mejor el contenido que no está en inglés que Llama 3.3.',
          },
          {
            q: '¿Cómo actualizo el modelo más adelante?',
            a: 'Ejecuta de nuevo `ollama pull llama3.3:8b-instruct-q4_K_M` para obtener la última versión y reinicia AnythingLLM para que detecte de nuevo la versión del modelo. Para cambiar a un modelo diferente por completo, ejecuta `ollama pull <nuevo-modelo>` y luego cambia el menú desplegable de Preferencia de LLM en la Configuración de AnythingLLM. No es necesario volver a procesar los embeddings porque estos dependen únicamente del embedder, no del modelo de respuesta.',
          },
          {
            q: '¿Puedo moverlo a otro equipo?',
            a: 'Sí. Los modelos de Ollama se encuentran en `~/.ollama/models` (macOS/Linux) o `%USERPROFILE%\\.ollama\\models` (Windows); copia la carpeta. Los workspaces de AnythingLLM se encuentran en `~/.anythingllm/storage`; cópiala también. En el nuevo equipo, instala Ollama y AnythingLLM Desktop y coloca las carpetas copiadas en su lugar. Los workspaces y embeddings se restauran de forma idéntica.',
          },
          {
            q: '¿Funciona si mis PDFs son imágenes escaneadas?',
            a: 'No directamente: AnythingLLM extrae texto, pero no puede hacer OCR de imágenes. Preprocesa los PDFs escaneados con `ocrmypdf input.pdf output.pdf` (multiplataforma, licencia MIT, usa Tesseract). En Apple Silicon, `ocrmypdf -l eng+spa+por` admite más de 70 idiomas. Tras el OCR, el PDF de salida tiene tanto las imágenes originales como una capa de texto buscable, y AnythingLLM extrae el texto correctamente.',
          },
          {
            q: '¿Cómo hago una copia de seguridad de mi base de datos de documentos?',
            a: 'AnythingLLM almacena todo en `~/.anythingllm/storage` (macOS/Linux) o `%LOCALAPPDATA%\\anythingllm-desktop\\storage` (Windows). Comprime esa carpeta con tar/zip y cópiala en un dispositivo de respaldo. La carpeta incluye documentos originales, chunks analizados, índices vectoriales e historial de chat. La restauración consiste en copiar de vuelta y reiniciar; no se necesita ningún flujo de importación especial.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: Mejor RAG local](/es/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — para lectores que quieren evaluar alternativas antes de comprometerse con AnythingLLM.',
          '[Mejores modelos de embedding para RAG local en 2026](/es/power-local-llm/best-embedding-models-local-rag-2026) — para lectores que quieren mejor recuperación que nomic-embed-text.',
          '[Apps de IA local con RAG integrado: chatea con tus archivos (sin configuración)](/es/power-local-llm/local-ai-app-with-built-in-rag) — para lectores que buscan algo todavía más sencillo que AnythingLLM.',
          '[RAG explicado: cómo fundamentar las respuestas de IA en datos reales (2026)](/es/prompt-engineering/rag-explained) — autoridad conceptual sobre qué es RAG y por qué importa cada componente.',
          '[Guía de hardware para LLM local 2026](/es/local-llms/local-llm-hardware-guide-2026) — referencia de dimensionamiento de hardware si estás eligiendo el portátil, no solo el software.',
          '[Hub Power Local LLM](/es/power-local-llm) — biblioteca completa de guías del cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/es/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'headline': 'Crea un RAG local en tus PDFs en 30 minutos (Ollama + AnythingLLM)',
      'description':
        'Paso a paso: instala Ollama, configura AnythingLLM, sube PDFs y chatea con ellos. Tiempo total 30 minutos. Probado en portátil con 16 GB de RAM. Mayo 2026.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
      },
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'Llama 3.3 8B' },
        { '@type': 'Thing', 'name': 'nomic-embed-text' },
        { '@type': 'Thing', 'name': 'Retrieval-augmented generation' },
        { '@type': 'Thing', 'name': 'RAG local' },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Inicio',
          'item': 'https://www.promptquorum.com/es',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Power Local LLM',
          'item': 'https://www.promptquorum.com/es/power-local-llm',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Crea un RAG local en tus PDFs en 30 minutos',
          'item': 'https://www.promptquorum.com/es/power-local-llm/local-rag-on-your-pdfs-step-by-step',
        },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: 'Crie um RAG local nos seus PDFs em 30 minutos (Ollama + AnythingLLM)',
    seoTitle: 'RAG local nos seus PDFs 2026: configuração passo a passo',
    intro:
      'Um guia completo do caminho mais rápido para um sistema RAG pessoal funcional em um laptop com 16 GB de RAM. Stack: Ollama, Llama 3.3 8B, AnythingLLM, nomic-embed-text. Tempo total: 30 minutos de uma máquina vazia até conversar com os seus próprios PDFs.',
    metaDescription:
      'Passo a passo: instale o Ollama, configure o AnythingLLM, adicione PDFs e converse com eles. Tempo total 30 minutos. Testado em laptop com 16 GB de RAM. Maio de 2026.',
    twitterDescription:
      '30 minutos de um laptop vazio até conversar com os seus próprios PDFs. Ollama + Llama 3.3 8B + AnythingLLM + nomic-embed-text. Testado com 16 GB de RAM.',
    current_models_mentioned: ['Llama 3.3 8B', 'nomic-embed-text-v1.5', 'Phi-4 Mini', 'Mistral Small'],
    current_hardware_mentioned: ['laptop com 16 GB de RAM', 'Apple M1', 'Apple M3', 'Intel Core Ultra 5', 'AMD Ryzen 7 7700'],
    audience: 'Desenvolvedores e usuários avançados que querem um sistema RAG pessoal funcional no próprio laptop, sem depender de uma API na nuvem.',
    readTime: '12 min de leitura',
    educationalLevel: 'Beginner',
    primaryTerm: 'RAG local nos PDFs',
    targetKeywords: [
      'rag local pdf tutorial',
      'ollama anythingllm rag',
      'chat com pdfs localmente',
      'rag local configuração 30 minutos',
      'rag privado em laptop',
    ],
    leadAnswerBlock:
      '**Instale o Ollama, baixe o Llama 3.3 8B, instale o AnythingLLM, conecte-o ao Ollama, troque o modelo de embedding para nomic-embed-text, arraste os seus PDFs para um workspace e faça perguntas. Em um laptop com 16 GB de RAM o processo completo leva 30 minutos, a maior parte dos quais corresponde ao download do modelo.**',
    quickAnswerTop: {
      pt: {
        question: 'Como eu construo um sistema RAG local para os meus PDFs em 30 minutos?',
        answer:
          'Instale o Ollama (3 min), baixe o Llama 3.3 8B (8 min, principalmente o download), instale o AnythingLLM (4 min), conecte-o ao Ollama (3 min) e troque o embedder para nomic-embed-text, suba PDFs para um workspace (5 min de embedding), teste queries (5 min) e ajuste o tamanho dos chunks (2 min). Total: 30 minutos em um laptop com 16 GB de RAM. Uma vez instalado, o sistema funciona totalmente offline.',
        bullets: [
          'Stack: Ollama + Llama 3.3 8B Q4_K_M + AnythingLLM + nomic-embed-text-v1.5',
          'Requisito mínimo de hardware: 16 GB de RAM, 20 GB de disco livre, CPU moderna (qualquer Apple Silicon, Ryzen 5000+, Intel 11ª geração+)',
          'A internet só é necessária para os downloads iniciais do modelo e do aplicativo; a inferência é totalmente local',
          'Funciona no macOS, Windows 10/11 e Linux sem admin/root no passo do AnythingLLM',
          'Sem código, sem Python, sem configuração de banco de dados vetorial: o AnythingLLM já inclui o LanceDB integrado',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'O que você vai construir', anchor: '#stack-overview' },
      { label: 'Pré-requisitos', anchor: '#prerequisites' },
      { label: 'Passo 1: Instalar o Ollama (3 min)', anchor: '#step-1-install-ollama' },
      { label: 'Passo 2: Baixar o Llama 3.3 8B (8 min)', anchor: '#step-2-pull-model' },
      { label: 'Passo 3: Instalar o AnythingLLM (4 min)', anchor: '#step-3-install-anythingllm' },
      { label: 'Passo 4: Configurar o modelo de embedding (3 min)', anchor: '#step-4-configure-embedding' },
      { label: 'Passo 5: Subir os primeiros PDFs (5 min)', anchor: '#step-5-upload-pdfs' },
      { label: 'Passo 6: Testar queries (5 min)', anchor: '#step-6-test-queries' },
      { label: 'Passo 7: Ajustar o tamanho dos chunks (2 min)', anchor: '#step-7-tune-chunks' },
      { label: 'Queries de exemplo e respostas esperadas', anchor: '#sample-queries' },
      { label: 'Solução de problemas', anchor: '#troubleshooting' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Stack:** o Ollama executa o LLM, o AnythingLLM gerencia a interface + o armazenamento vetorial, o Llama 3.3 8B Q4_K_M responde e o nomic-embed-text-v1.5 recupera.',
          '**Tempo:** 30 minutos no total. O passo mais longo é o download do modelo (~8 min a 50 Mbps).',
          '**Hardware:** 16 GB de RAM é o mínimo prático. Com 8 GB só funciona o Phi-4 Mini e conjuntos de documentos pequenos; consulte a seção de modelos alternativos.',
          '**Privacidade:** Uma vez instalado, nada sai da sua máquina. PDFs, embeddings, prompts e respostas permanecem locais.',
          '**Sem código:** Zero Python, zero terminal além dos dois comandos do Ollama. O AnythingLLM é um aplicativo de desktop com importação de documentos por arrastar e soltar.',
          '**O embedder padrão não é o adequado:** o AnythingLLM inclui um embedder integrado muito pequeno. Troque-o para nomic-embed-text-v1.5 no Passo 4; a qualidade da recuperação melhora de forma notável.',
          '**O tamanho de chunk padrão também não é adequado para PDFs:** Chunks de 1000 tokens com uma sobreposição de 200 tokens é um ponto de partida melhor que o valor padrão 512/0. É ajustado no Passo 7.',
        ],
      },
      stackOverview: {
        id: 'stack-overview',
        title: 'O que você vai construir',
        content:
          '**Um sistema RAG de desktop autocontido: uma janela de chat onde você arrasta PDFs e faz perguntas sobre eles.** Quatro peças de código aberto, todas gratuitas e todas rodando no seu laptop:',
        items: [
          '**Ollama** — runtime local de LLM. Gerencia os arquivos do modelo e expõe uma API compatível com OpenAI em localhost:11434. Fornece o modelo de resposta.',
          '**Llama 3.3 8B Instruct (Q4_K_M)** — modelo de chat de 8B parâmetros da Meta, quantizado para caber em ~5 GB de RAM. Boa qualidade de resposta em perguntas baseadas em documentos em 2026.',
          '**AnythingLLM Desktop** — interface + armazenamento vetorial + orquestração RAG. Inclui o LanceDB embutido, faz parsing de PDFs/DOCX/TXT/MD de forma nativa e se comunica com o Ollama como provedor de LLM.',
          '**nomic-embed-text-v1.5** — modelo de embedding. Vetores de 768 dimensões, roda através do Ollama a ~600 chunks/s em uma CPU moderna. Substitui o embedder padrão do AnythingLLM, que é insuficiente.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Um sistema RAG local são quatro peças — um runtime (Ollama), um modelo de resposta (Llama 3.3 8B), uma interface mais armazenamento vetorial (AnythingLLM) e um modelo de embedding (nomic-embed-text-v1.5) — conectadas em uma mesma máquina sem chamadas à nuvem.',
          },
          {
            type: 'plain-terms',
            text: 'Arraste um PDF, faça uma pergunta, obtenha uma resposta fundamentada com citações, totalmente offline. As quatro peças dividem o trabalho: o Ollama executa os modelos, o Llama 3.3 8B redige a resposta, o AnythingLLM gerencia os chunks e vetores, e o nomic-embed-text-v1.5 converte o texto nos vetores que tornam a recuperação possível. Instalação total: ~30 minutos; custo total: $0.',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'O AnythingLLM também tem um LLM padrão integrado e um embedder padrão integrado. Ambos são deliberadamente pequenos para que o aplicativo inicie rápido em hardware de entrada. Nós os substituímos nos passos 4 e 6 porque a qualidade de recuperação é tudo em um sistema RAG.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-rag-architecture-en.svg',
        imageCaption: 'Stack RAG local: Ollama (runtime, localhost:11434), Llama 3.3 8B Q4_K_M (~4,9 GB, modelo de resposta), AnythingLLM Desktop (interface + armazenamento vetorial LanceDB) e nomic-embed-text-v1.5 (~280 MB embedder). Fluxo de dados: PDFs → AnythingLLM → nomic-embed-text → LanceDB → Llama 3.3 8B → Resposta.',
      },
      prerequisites: {
        id: 'prerequisites',
        title: 'O que você precisa antes de começar',
        content:
          '**Um laptop com 16 GB de RAM, 20 GB de disco livre, conexão com a internet e 30 minutos.** O sistema operacional pode ser macOS 12+, Windows 10/11 ou qualquer desktop Linux moderno.',
        items: [
          '**RAM:** 16 GB é o mínimo prático para Llama 3.3 8B Q4 + AnythingLLM + os seus aplicativos de desktop habituais. Com 8 GB funciona o Phi-4 Mini Q4 em vez disso; consulte as alternativas do Passo 2.',
          '**Disco:** 20 GB livres. O Llama 3.3 8B Q4_K_M ocupa ~5 GB, o modelo de embedding ~280 MB, o AnythingLLM ~600 MB, e você precisa de espaço para os embeddings (~10–30 MB por 100 páginas de PDF).',
          '**Rede:** ~50 Mbps no mínimo para o download do modelo. Com 25 Mbps o mesmo passo leva ~16 minutos; o resto do tutorial não é afetado.',
          '**Permissões:** o AnythingLLM não precisa de admin/root. O Ollama se instala em `/usr/local/bin` no macOS/Linux (pede senha uma vez) ou `%LOCALAPPDATA%` no Windows (sem admin).',
          '**Documentos prontos:** 5–20 PDFs para começar. Quantidades maiores também funcionam, mas um conjunto pequeno permite testar a qualidade de recuperação mais rápido.',
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-prerequisites-en.svg',
        imageCaption: 'Requisitos do sistema: 16 GB de RAM (mínimo para Llama 3.3 8B Q4 + AnythingLLM), 20 GB de disco livre, 50 Mbps para o download do modelo. macOS 12+, Windows 10/11 ou Linux. O AnythingLLM não requer permissões de administrador.',
      },
      step1InstallOllama: {
        id: 'step-1-install-ollama',
        title: 'Passo 1: Instalar o Ollama (3 min)',
        content:
          '**Baixe o instalador do Ollama para o seu sistema operacional em ollama.com/download e execute-o. O instalador adiciona a CLI `ollama` ao PATH e inicia um serviço em segundo plano.** Não há opções de configuração para escolher.',
        items: [
          '**macOS:** baixe o `.dmg`, arraste o Ollama para Aplicativos, abra-o uma vez para instalar o helper da CLI. O ícone de lhama aparece na barra de menus quando o serviço está em execução.',
          '**Windows:** baixe o `.exe`, execute-o e aceite os valores padrão. O Ollama roda como serviço em segundo plano após a instalação; nenhuma abertura adicional é necessária.',
          '**Linux:** instalação em uma linha: `curl -fsSL https://ollama.com/install.sh | sh`. O script registra uma unidade systemd; inicie-a com `sudo systemctl start ollama`.',
          '**Verificar:** abra um terminal e execute `ollama --version`. Você deve ver uma string de versão. Se o comando não for encontrado, reinicie o terminal para que ele carregue o PATH atualizado.',
        ],
        codeBlock: 'ollama --version\n# ollama version is 0.5.x  (any 0.5+ build works for this tutorial)',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'warning',
            text: 'Se `ollama --version` funciona mas os passos seguintes falham com "conexão recusada em localhost:11434", o serviço em segundo plano não iniciou automaticamente. macOS: abra o aplicativo em Aplicativos. Linux: `sudo systemctl start ollama`. Windows: abra o ícone do Ollama na bandeja do sistema.',
          },
        ],
      },
      step2PullModel: {
        id: 'step-2-pull-model',
        title: 'Passo 2: Baixar o Llama 3.3 8B (8 min)',
        content:
          '**Execute `ollama pull llama3.3:8b-instruct-q4_K_M` em um terminal. Isso baixa o GGUF quantizado de 4,9 GB e o registra no Ollama.** A maior parte dos 30 minutos totais corresponde a esse único passo em uma conexão doméstica típica.',
        items: [
          '**Tamanho do download:** ~4,9 GB (quantização Q4_K_M). A 50 Mbps você esperará aproximadamente 8 minutos; a 100 Mbps aproximadamente 4 minutos; a 25 Mbps aproximadamente 16 minutos.',
          '**Ver o progresso:** o Ollama imprime uma porcentagem e a velocidade. O download é retomado se for interrompido; execute o mesmo comando novamente.',
          '**Teste rápido do modelo:** após concluir o download, execute `ollama run llama3.3:8b-instruct-q4_K_M` e pergunte "Quanto é 2+2?". Confirme que você obtém uma resposta razoável. Digite `/bye` para sair.',
          '**Alternativa com menos RAM:** se você tem 8 GB de RAM em vez de 16 GB, execute `ollama pull phi3:mini` (Phi-4 Mini, ~2,4 GB em disco). Use esse nome de modelo no Passo 3. A qualidade é menor em documentos longos, mas o sistema funciona.',
        ],
        codeBlock:
          '# Recommended for 16 GB RAM\nollama pull llama3.3:8b-instruct-q4_K_M\n\n# Alternative for 8 GB RAM\nollama pull phi3:mini\n\n# Quick smoke test (type /bye to exit)\nollama run llama3.3:8b-instruct-q4_K_M',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Já tem outros modelos do Ollama? `ollama list` mostra todos eles. Você pode manter vários modelos instalados e alternar entre eles na configuração do workspace do AnythingLLM.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-model-options-en.svg',
        imageCaption: 'Opções de modelo por RAM: Llama 3.3 8B Q4_K_M (~4,9 GB, 16 GB de RAM, ~8 min a 50 Mbps) é o recomendado; Phi-4 Mini Q4 (~2,4 GB, 8 GB de RAM, ~4 min) para máquinas com pouca memória; Mistral Small Q4_K_M (~4,1 GB, 16 GB de RAM, ~7 min) como alternativa.',
      },
      step3InstallAnythingLlm: {
        id: 'step-3-install-anythingllm',
        title: 'Passo 3: Instalar o AnythingLLM Desktop (4 min)',
        content:
          '**Baixe o AnythingLLM Desktop em useanything.com (ou anythingllm.com) e execute o instalador. Abra o aplicativo e pule o aviso de "criar conta na nuvem"; o modo somente-local é oferecido na tela seguinte.** A instalação é não assistida.',
        items: [
          '**macOS:** baixe o `.dmg`, arraste o AnythingLLM para Aplicativos e abra-o. O macOS pode pedir que você confirme que o aplicativo é de um desenvolvedor reconhecido; clique em "Abrir" em Ajustes do Sistema → Privacidade se solicitado.',
          '**Windows:** baixe o instalador `.exe`. O Windows SmartScreen pode indicar que não é um download habitual; clique em "Mais informações" → "Executar mesmo assim". O aplicativo se instala em `%LOCALAPPDATA%\\anythingllm-desktop` (sem admin).',
          '**Linux:** baixe o `.AppImage`, marque-o como executável (`chmod +x AnythingLLMDesktop.AppImage`) e dê dois cliques para executá-lo.',
          '**Escolha na primeira execução:** o AnythingLLM oferece um workspace na nuvem hospedado OU uma configuração somente-local. Escolha **Configuração local**. Esta é a opção que mantém todo o sistema offline.',
          '**Criação do workspace:** quando solicitado, dê ao primeiro workspace um nome descritivo ("artigos-pesquisa", "contratos", "notas-pessoais"). Cada workspace tem a sua própria coleção de documentos e armazenamento de embeddings.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'O LLM padrão do AnythingLLM é um modelo integrado muito pequeno destinado apenas à demo de boas-vindas. No passo seguinte vamos apontá-lo para o seu Ollama local. Não use o padrão para queries reais; as respostas serão fracas demais para serem úteis.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-install-flow-en.svg',
        imageCaption: 'Instalação do AnythingLLM Desktop em 4 passos: Baixar em anythingllm.com (~600 MB), Instalar sem admin, Abrir e pular o aviso de nuvem, depois escolher "Local Setup" para manter todos os dados offline.',
      },
      step4ConfigureEmbedding: {
        id: 'step-4-configure-embedding',
        title: 'Passo 4: Conectar o AnythingLLM ao Ollama e trocar o embedder (3 min)',
        content:
          '**Abra Configurações do AnythingLLM → Preferência de LLM. Escolha "Ollama" como provedor, defina a URL como `http://127.0.0.1:11434` e selecione `llama3.3:8b-instruct-q4_K_M` no menu suspenso de modelos. Salve. Depois vá para Preferência de embedding e troque do padrão para `nomic-embed-text` através do Ollama.**',
        items: [
          '**Painel de Preferência de LLM:** Provedor = Ollama, Endpoint = `http://127.0.0.1:11434`, Modelo = `llama3.3:8b-instruct-q4_K_M`. Clique em "Salvar alterações". Uma marca de verificação verde confirma a conexão.',
          '**Painel de Preferência de embedding:** o padrão é "AnythingLLM Native Embedder", um embedder integrado muito pequeno. Troque o Provedor para Ollama, depois execute `ollama pull nomic-embed-text` no seu terminal primeiro (~280 MB), atualize a lista de modelos no painel e selecione `nomic-embed-text:latest`. Salve.',
          '**Aviso de re-embedding:** se você já adicionou documentos com o embedder anterior, o AnythingLLM pedirá que você os processe novamente. Em uma instalação nova não há documentos, então o aviso não aparece.',
          '**Banco de dados vetorial:** deixe no valor padrão (LanceDB). É local, respaldado por arquivos e não precisa de configuração. Troque-o apenas se você precisar especificamente de PGVector ou Qdrant.',
        ],
        codeBlock:
          '# Run this in your terminal before opening the Embedding Preference panel\nollama pull nomic-embed-text',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Por que nomic-embed-text-v1.5 especificamente? Em maio de 2026 ele ocupa o top 5 do ranking MTEB Retrieval para qualquer modelo de menos de 500 MB, roda a 400–800 chunks/s em uma CPU moderna e a mais de 2000 chunks/s em Apple Silicon, e tem licença Apache 2.0. É o primeiro upgrade padrão para quase todos os stacks RAG locais; consulte a [comparação de modelos de embedding](/pt/power-local-llm/best-embedding-models-local-rag-2026) para conhecer as alternativas.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-config-flow-en.svg',
        imageCaption: 'Passo 4 em dois painéis: Preferência de LLM (Provedor = Ollama, Endpoint = http://127.0.0.1:11434, Modelo = llama3.3:8b-instruct-q4_K_M), depois Preferência de Embedding (primeiro baixe nomic-embed-text, depois selecione nomic-embed-text:latest via Ollama).',
      },
      step5UploadPdfs: {
        id: 'step-5-upload-pdfs',
        title: 'Passo 5: Subir os primeiros PDFs (5 min)',
        content:
          '**Abra o seu workspace, clique em "Subir documentos" e arraste de 5 a 20 PDFs. O AnythingLLM extrai o texto, divide-o em chunks (por padrão 512 tokens, 0 de sobreposição), processa cada chunk com o Ollama e armazena os vetores no LanceDB.** Uma barra de progresso mostra as páginas analisadas e os chunks processados.',
        items: [
          '**Formatos compatíveis:** PDF (baseado em texto), DOCX, TXT, MD, EPUB, além de scraping de URLs. Os PDFs de imagem escaneada precisam de OCR primeiro; consulte a seção de solução de problemas.',
          '**Velocidade:** 400–800 chunks/s em uma CPU moderna e mais de 2000 chunks/s em Apple Silicon assim que o Ollama está aquecido. Um conjunto de 20 PDFs com ~50 páginas cada (~3000 chunks no total) conclui o embedding em 5–8 segundos em uma CPU moderna e em 1–2 segundos em Apple Silicon, mais o tempo de análise. Conte com ~5 minutos no total para subir, analisar e processar 20 PDFs.',
          '**RAM durante o embedding:** o Ollama carrega o modelo de embedding (~280 MB) na primeira solicitação e o mantém em cache. Os embeddings posteriores reutilizam o cache.',
          '**"Mover para o workspace":** após o upload, o AnythingLLM coloca os documentos em um pool "em espera". Você deve clicar explicitamente em "Mover para o workspace" → "Salvar e processar" para que sejam consultáveis. Esse fluxo de dois passos é intencional: permite pré-visualizar antes de assumir o custo do embedding.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Os PDFs de digitalizações OCR antigas costumam conter texto corrompido ou camadas de texto vazias; o arquivo parece correto ao olho humano, mas o AnythingLLM extrai "[image]" ou strings vazias. Abra o PDF em um editor de texto (ou execute `pdftotext file.pdf -` do poppler-utils) para confirmar que a camada de texto existe antes de subi-lo.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-embed-flow-en.svg',
        imageCaption: 'Do PDF subido à consulta em 5 passos: Subir PDFs (arrastar e soltar) → Extrair camada de texto → Dividir em chunks (1000 tokens / 200 de sobreposição) → Processar com nomic-embed-text via Ollama → Armazenar no LanceDB e fazer perguntas. Velocidade: 400–800 chunks/s em CPU, mais de 2000 em Apple Silicon.',
      },
      step6TestQueries: {
        id: 'step-6-test-queries',
        title: 'Passo 6: Testar queries (5 min)',
        content:
          '**Escreva uma pergunta no chat do workspace. O AnythingLLM vetoriza a pergunta, recupera os N chunks principais do LanceDB, constrói um prompt com esses chunks como contexto, envia-o ao Ollama e mostra a resposta.** A latência em um laptop com 16 GB de RAM é de aproximadamente 3–10 segundos por query.',
        items: [
          '**Comece com uma query de recuperação de fatos:** "O que significa [termo específico de um dos seus PDFs]?" Isso testa a fundamentação da recuperação. A resposta deve citar o PDF e reproduzir a phrasing exata.',
          '**Depois uma query de síntese:** "Resuma o argumento principal de [autor/título do documento]." Isso testa o quão bem o modelo integra vários chunks.',
          '**Depois uma query de comparação** (apenas se os seus PDFs contiverem conteúdo comparável): "Compare como [doc A] e [doc B] tratam [tema]." Isso testa a recuperação entre documentos.',
          '**Inspecione as citações:** o AnythingLLM mostra os chunks fonte abaixo de cada resposta. Clique neles para verificar que o modelo está se baseando nas passagens corretas. Se as citações forem irrelevantes, a recuperação está quebrada; consulte o Passo 7.',
        ],
      },
      step7TuneChunks: {
        id: 'step-7-tune-chunks',
        title: 'Passo 7: Ajustar o tamanho dos chunks (2 min)',
        content:
          '**Abra Configurações do workspace → Banco de dados vetorial. Mude o tamanho de chunk de 512 para 1000 e a sobreposição de chunk de 0 para 200. Clique em Salvar e depois processe novamente os seus documentos (a interface pedirá).** Esse é o principal parâmetro para melhorar a qualidade da recuperação no AnythingLLM.',
        items: [
          '**Por que 1000/200 em vez de 512/0:** os parágrafos e seções dos PDFs raramente cabem de forma limpa em 512 tokens. A sobreposição de 200 tokens significa que uma frase que cruza um limite de chunk aparece inteira em pelo menos um chunk vizinho, de modo que a recuperação a capta.',
          '**Custo do re-embedding:** o conjunto de 20 PDFs / 3000 chunks é processado novamente em ~5 segundos. Conjuntos maiores levam proporcionalmente mais tempo. O armazenamento de chunks é sobrescrito, não acrescentado ao existente.',
          '**Recuperação Top-K:** o Top-K padrão é 4 (os 4 chunks de melhor correspondência se tornam contexto). Suba para 6–8 se as suas respostas parecerem pouco fundamentadas; baixe para 2–3 se o modelo se distrair com chunks ruidosos.',
          '**Modelo de prompt:** o AnythingLLM expõe o system prompt em Workspace → Configurações de chat → Prompt. O padrão está bem; ajuste-o apenas se você tiver uma falha específica a resolver.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O ajuste empírico supera a teoria: faça as mesmas 5 queries de teste antes e depois da mudança de tamanho de chunk e compare. Se a recuperação a 1000/200 for pior, você provavelmente tem documentos muito curtos (memorandos de uma página, docstrings de código): tente 256/64 em vez disso.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-chunk-settings-en.svg',
        imageCaption: 'Configuração de chunks padrão vs. recomendada: os valores padrão 512/0/Top-K 4 deixam fragmentos de frases nos limites. Os valores recomendados 1000 tokens / 200 de sobreposição / Top-K 4–6 capturam as frases nos limites dentro da janela de sobreposição. Processar novamente 20 PDFs leva ~5 segundos.',
      },
      sampleQueries: {
        id: 'sample-queries',
        title: 'Como as respostas devem ser de verdade?',
        content:
          '**Um sistema RAG local corretamente ajustado responde as queries de recuperação de fatos com citações textuais da fonte, sintetiza quando solicitado e cita os chunks que utilizou.** Três queries de exemplo em um workspace de artigos de pesquisa, com o que um sistema saudável retorna:',
        rows: [
          {
            'Query type': 'Recuperação de fatos',
            'Example': 'Que tamanho de amostra Smith et al. 2024 utilizaram?',
            'Healthy answer pattern': 'Citação direta da seção de métodos + referência ao chunk',
            'Failure pattern': 'Resposta genérica ("os pesquisadores costumam usar 100–500 participantes") sem citação',
          },
          {
            'Query type': 'Síntese',
            'Example': 'Resuma a contribuição principal deste artigo.',
            'Healthy answer pattern': '3–5 frases extraídas dos chunks do abstract e da conclusão',
            'Failure pattern': 'Repete o título ou cita uma única frase do abstract',
          },
          {
            'Query type': 'Entre documentos',
            'Example': 'Em que Smith e Jones divergem sobre a sobreposição de chunks?',
            'Healthy answer pattern': 'Citações de ambos os artigos com atribuição explícita',
            'Failure pattern': 'Cita apenas um artigo ou inventa uma discordância que não está nos chunks',
          },
        ],
        columns: ['Query type', 'Example', 'Healthy answer pattern', 'Failure pattern'],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Uma resposta RAG local saudável cita o chunk fonte de forma literal para a recuperação de fatos, sintetiza entre chunks para perguntas de resumo e cita os IDs de chunk específicos que utilizou; as respostas genéricas sem citações sinalizam um problema de recuperação, não um problema do modelo.',
          },
          {
            type: 'plain-terms',
            text: 'Se a resposta diz "os pesquisadores costumam usar 100–500 participantes" em vez de "Smith et al. usaram 287 participantes (Métodos, p. 4)", a recuperação está quebrada e o modelo está improvisando com os seus dados de treinamento. Conserte a recuperação primeiro (tamanho de chunk, embedder, limiar de similaridade) antes de trocar o modelo de resposta.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Use esses três padrões de query como o seu conjunto de teste após cada mudança na configuração de recuperação. Se a recuperação de fatos falha mas a síntese funciona, os seus chunks são grandes demais. Se a síntese falha mas a recuperação de fatos funciona, o seu top-k é baixo demais. O padrão do que falha diz qual parâmetro ajustar.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-query-types-en.svg',
        imageCaption: '3 tipos de query RAG: Recuperação de fatos (citação direta + referência = saudável; resposta genérica = recuperação quebrada), Síntese (3–5 frases do abstract + conclusão = saudável), Entre documentos (citações de ambos os artigos = saudável; cita apenas um ou inventa = quebrado). Verde = saudável, vermelho = conserte primeiro a recuperação.',
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Quando algo falha: seis modos de falha comuns e soluções',
        content:
          '**A maioria das falhas se enquadra em uma destas seis categorias. Identifique o sintoma na linha correspondente e aplique a solução.**',
        rows: [
          {
            'Symptom': 'O AnythingLLM mostra "Não foi possível conectar ao Ollama"',
            'Likely cause': 'O serviço do Ollama não está em execução ou o endpoint está incorreto',
            'Fix': 'Execute `ollama serve` (ou reinicie o aplicativo/serviço). Confirme que o endpoint é `http://127.0.0.1:11434`, não `localhost:11434` (no Windows o alias às vezes falha).',
          },
          {
            'Symptom': 'O download do modelo trava em 0% ou 99%',
            'Likely cause': 'Problema com o edge de CDN ou disco cheio',
            'Fix': 'Cancele com Ctrl+C, execute `df -h` para confirmar o espaço em disco e execute o mesmo `ollama pull` novamente; o Ollama retoma a partir do último byte.',
          },
          {
            'Symptom': 'O passo de embedding parece travado',
            'Likely cause': 'O Ollama está carregando o modelo de embedding pela primeira vez',
            'Fix': 'Espere 30–60 segundos. O carregamento do modelo pela primeira vez leva entre 10 e 40 segundos conforme a velocidade do disco. Os embeddings seguintes são rápidos.',
          },
          {
            'Symptom': 'A recuperação devolve chunks não relacionados com a query',
            'Likely cause': 'Chunking 512/0 padrão + embedder padrão fraco',
            'Fix': 'Confirme que o Passo 4 (nomic-embed-text) e o Passo 7 (chunking 1000/200) foram ambos aplicados. Processe novamente o workspace.',
          },
          {
            'Symptom': 'As respostas são curtas, genéricas ou se recusam a trabalhar com a fonte',
            'Likely cause': 'O LLM selecionado ainda é o minúsculo padrão ou o contexto é pequeno demais',
            'Fix': 'Confirme que a Preferência de LLM mostra `llama3.3:8b-instruct-q4_K_M`. Suba o top-K de 4 para 6.',
          },
          {
            'Symptom': 'Os PDFs de imagem escaneada são subidos mas produzem chunks vazios',
            'Likely cause': 'O PDF não tem camada de texto; é uma imagem raster pura',
            'Fix': 'Aplique OCR ao PDF primeiro. macOS: `ocrmypdf input.pdf output.pdf`. Linux/Windows: instale Tesseract + ocrmypdf. Depois suba novamente o arquivo processado com OCR.',
          },
        ],
        columns: ['Symptom', 'Likely cause', 'Fix'],
        image: '/images/local-rag-on-your-pdfs-step-by-step-troubleshooting-en.svg',
        imageCaption: 'Seis modos de falha: conexão recusada (executar ollama serve), download travado (Ctrl+C → df -h → tentar novamente), embedding travado (esperar 30–60 s), chunks irrelevantes (aplicar Passos 4 + 7), respostas curtas/genéricas (configurar llama3.3:8b-instruct-q4_K_M, subir Top-K), chunks vazios de PDFs escaneados (executar ocrmypdf primeiro).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Contexto regional: privacidade de dados no Brasil (LGPD e ANPD)',
        content:
          'Um sistema RAG local como este responde diretamente aos principais requisitos de privacidade e segurança do Brasil. Ao contrário das soluções RAG na nuvem que enviam dados a provedores externos, tudo permanece na sua máquina.',
        items: [
          '**LGPD e a ANPD:** No Brasil, a Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018) exige gerenciar com cuidado os operadores de dados, e a Autoridade Nacional de Proteção de Dados (ANPD) fiscaliza o cumprimento. Um sistema RAG local que nunca envia dados para fora da sua infraestrutura atende a esse requisito diretamente: sem transferência internacional de dados, sem operador externo, base legal simplificada.',
          '**Setores regulados no Brasil:** Organizações de finanças, saúde, jurídico e setor público no Brasil se beneficiam do RAG local: zero dependência de API na nuvem, zero fluxo de dados transfronteiriço, conformidade imediata com a LGPD e com normas setoriais como as resoluções do Banco Central e do Conselho Federal de Medicina.',
          '**Cenário típico para empresas brasileiras:** Arquive cinco anos de contratos de clientes, indexe-os com o AnythingLLM e faça buscas de diligência e consultas de dados de clientes totalmente em local. Custo de operação: praticamente zero. Instalação produtiva: 30 minutos no seu laptop ou servidor local.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'E se o Ollama não instalar?',
            a: 'No macOS, a falha mais comum é o Gatekeeper bloquear um helper sem assinatura; abra Ajustes do Sistema → Privacidade e Segurança e clique em "Abrir mesmo assim". No Windows, o Defender SmartScreen pode colocar o instalador em quarentena; clique com o botão direito → Propriedades → Desbloquear. No Linux, o script de instalação precisa de sudo para escrever a unidade systemd; se o sudo não estiver disponível, baixe o binário estático em github.com/ollama/ollama/releases e coloque-o manualmente no seu PATH.',
          },
          {
            q: 'Por que o passo de embedding é lento?',
            a: 'O primeiro embedding de uma sessão é lento porque o Ollama carrega o modelo de embedding de forma preguiçosa na RAM (entre 10 e 40 segundos conforme a velocidade do disco). Depois, o embedding roda a 400–800 chunks/s em uma CPU moderna e a mais de 2000 chunks/s em Apple Silicon. Se o desempenho sustentado for inferior a 100 chunks/s, o modelo provavelmente está usando memória virtual do disco; feche outros aplicativos para liberar RAM e tente novamente.',
          },
          {
            q: 'Quantos PDFs eu posso subir de uma vez?',
            a: 'O AnythingLLM aceita centenas de arquivos em um único arrastar e soltar. O limite prático é a RAM durante o passo de análise: ~1 GB no pico para 100 PDFs de tamanho médio (50 páginas cada). Uma vez processados, o armazenamento vetorial em disco é pequeno (~10–30 MB por 100 páginas de PDF). Para 1000+ PDFs, consulte o guia dedicado sobre [conversar com 1000 PDFs em local](/pt/power-local-llm/chat-with-1000-pdfs-locally).',
          },
          {
            q: 'Posso usar isso com PDFs protegidos por senha?',
            a: 'O AnythingLLM não consegue descriptografar diretamente PDFs protegidos por senha. Descriptografe-os primeiro com `qpdf --password=SUASENHA --decrypt input.pdf output.pdf` (o qpdf é gratuito, disponível nos três sistemas operacionais) e depois suba o arquivo desprotegido. Exclua a cópia desprotegida após o embedding se o seu modelo de ameaças exigir; os próprios embeddings não são legíveis por humanos.',
          },
          {
            q: 'O que eu faço se a recuperação devolve chunks incorretos?',
            a: 'Três parâmetros por ordem de impacto: troque do embedder padrão para nomic-embed-text (Passo 4), mude o chunking de 512/0 para 1000/200 e processe novamente (Passo 7), e suba o top-K de 4 para 6 nas Configurações do workspace. Se a recuperação ainda falhar depois dos três, os seus documentos podem precisar de pré-processamento: remova cabeçalhos e rodapés, normalize os espaços em branco ou divida os PDFs muito longos em arquivos por capítulo.',
          },
          {
            q: 'Eu deveria usar um modelo diferente do Llama 3.3 8B?',
            a: 'O Llama 3.3 8B Q4_K_M é a melhor relação qualidade-RAM em 2026 para sistemas com 16 GB. Com 8 GB de RAM use o Phi-4 Mini Q4_K_M (~2,4 GB). Com 24 GB ou mais, experimente o Qwen 3 14B Q4 para uma síntese notavelmente melhor em documentos longos. Para cargas de trabalho multilíngues, o Mistral Nemo 12B lida melhor com conteúdo que não está em inglês do que o Llama 3.3.',
          },
          {
            q: 'Como eu atualizo o modelo mais adiante?',
            a: 'Execute novamente `ollama pull llama3.3:8b-instruct-q4_K_M` para obter a versão mais recente e reinicie o AnythingLLM para que ele detecte de novo a versão do modelo. Para trocar para um modelo diferente por completo, execute `ollama pull <novo-modelo>` e depois mude o menu suspenso de Preferência de LLM nas Configurações do AnythingLLM. Não é necessário processar novamente os embeddings porque eles dependem apenas do embedder, não do modelo de resposta.',
          },
          {
            q: 'Posso mover isso para outra máquina?',
            a: 'Sim. Os modelos do Ollama ficam em `~/.ollama/models` (macOS/Linux) ou `%USERPROFILE%\\.ollama\\models` (Windows); copie a pasta. Os workspaces do AnythingLLM ficam em `~/.anythingllm/storage`; copie-a também. Na nova máquina, instale o Ollama e o AnythingLLM Desktop e coloque as pastas copiadas no lugar. Os workspaces e embeddings são restaurados de forma idêntica.',
          },
          {
            q: 'Funciona se os meus PDFs são imagens escaneadas?',
            a: 'Não diretamente: o AnythingLLM extrai texto, mas não consegue fazer OCR de imagens. Pré-processe os PDFs escaneados com `ocrmypdf input.pdf output.pdf` (multiplataforma, licença MIT, usa Tesseract). Em Apple Silicon, `ocrmypdf -l eng+por+spa` suporta mais de 70 idiomas. Após o OCR, o PDF de saída tem tanto as imagens originais quanto uma camada de texto pesquisável, e o AnythingLLM extrai o texto corretamente.',
          },
          {
            q: 'Como eu faço backup do meu banco de dados de documentos?',
            a: 'O AnythingLLM armazena tudo em `~/.anythingllm/storage` (macOS/Linux) ou `%LOCALAPPDATA%\\anythingllm-desktop\\storage` (Windows). Comprima essa pasta com tar/zip e copie-a para um dispositivo de backup. A pasta inclui documentos originais, chunks analisados, índices vetoriais e histórico de chat. A restauração consiste em copiar de volta e reiniciar; nenhum fluxo de importação especial é necessário.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: melhor RAG local](/pt/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — para leitores que querem avaliar alternativas antes de se comprometer com o AnythingLLM.',
          '[Melhores modelos de embedding para RAG local em 2026](/pt/power-local-llm/best-embedding-models-local-rag-2026) — para leitores que querem melhor recuperação que o nomic-embed-text.',
          '[Apps de IA local com RAG integrado: converse com os seus arquivos (sem configuração)](/pt/power-local-llm/local-ai-app-with-built-in-rag) — para leitores que buscam algo ainda mais simples que o AnythingLLM.',
          '[RAG explicado: como fundamentar as respostas de IA em dados reais (2026)](/pt/prompt-engineering/rag-explained) — autoridade conceitual sobre o que é RAG e por que cada componente importa.',
          '[Guia de hardware para LLM local 2026](/pt/local-llms/local-llm-hardware-guide-2026) — referência de dimensionamento de hardware se você está escolhendo o laptop, não só o software.',
          '[Hub Power Local LLM](/pt/power-local-llm) — biblioteca completa de guias do cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/pt/pt/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'headline': 'Crie um RAG local nos seus PDFs em 30 minutos (Ollama + AnythingLLM)',
      'description':
        'Passo a passo: instale o Ollama, configure o AnythingLLM, adicione PDFs e converse com eles. Tempo total 30 minutos. Testado em laptop com 16 GB de RAM. Maio de 2026.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
      },
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'Llama 3.3 8B' },
        { '@type': 'Thing', 'name': 'nomic-embed-text' },
        { '@type': 'Thing', 'name': 'Retrieval-augmented generation' },
        { '@type': 'Thing', 'name': 'RAG local' },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Início',
          'item': 'https://www.promptquorum.com/pt',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Power Local LLM',
          'item': 'https://www.promptquorum.com/pt/power-local-llm',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Crie um RAG local nos seus PDFs em 30 minutos',
          'item': 'https://www.promptquorum.com/pt/power-local-llm/local-rag-on-your-pdfs-step-by-step',
        },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: 'بناء نظام RAG محلي على ملفات PDF في 30 دقيقة (Ollama + AnythingLLM)',
    seoTitle: 'RAG محلي على PDF في 30 دقيقة: Ollama + AnythingLLM 2026',
    intro:
      'دليل شامل لأسرع مسار نحو نظام RAG شخصي يعمل على حاسوب محمول بذاكرة RAM سعتها 16 غيغابايت. المكدس التقني: برنامج Ollama، ونموذج Llama 3.3 8B، وبرنامج AnythingLLM، ونموذج nomic-embed-text. الوقت الإجمالي: 30 دقيقة من جهاز فارغ إلى الدردشة مع ملفات PDF الخاصة بك.',
    metaDescription:
      'إعداد نظام RAG شخصي في 30 دقيقة على حاسوب بـ 16 غيغابايت RAM: Ollama وLlama 3.3 8B وAnythingLLM وnomic-embed-text — من جهاز فارغ إلى الدردشة مع PDF.',
    twitterDescription:
      '30 دقيقة من حاسوب محمول فارغ إلى الدردشة مع ملفات PDF الخاصة بك. Ollama + Llama 3.3 8B + AnythingLLM + nomic-embed-text. مُختبَر على ذاكرة RAM سعتها 16 غيغابايت.',
    current_models_mentioned: ['Llama 3.3 8B', 'nomic-embed-text-v1.5', 'Phi-4 Mini', 'Mistral Small'],
    current_hardware_mentioned: ['حاسوب محمول بذاكرة RAM سعتها 16 غيغابايت', 'Apple M1', 'Apple M3', 'Intel Core Ultra 5', 'AMD Ryzen 7 7700'],
    audience: 'المطورون والمستخدمون المتقدمون الراغبون في إنشاء نظام RAG شخصي يعمل على حاسوبهم المحمول الخاص، دون الاعتماد على واجهة برمجة تطبيقات سحابية.',
    readTime: '12 دقيقة قراءة',
    educationalLevel: 'Beginner',
    primaryTerm: 'نظام RAG المحلي على ملفات PDF',
    targetKeywords: [
      'شرح rag محلي pdf',
      'ollama anythingllm rag عربي',
      'الدردشة مع ملفات pdf محليًا',
      'إعداد rag محلي 30 دقيقة',
      'نظام rag خاص على الحاسوب المحمول',
    ],
    leadAnswerBlock:
      '**ثبّت برنامج Ollama، ونزّل نموذج Llama 3.3 8B، وثبّت برنامج AnythingLLM، وصِله بـ Ollama، وغيّر نموذج التضمين إلى nomic-embed-text، ثم اسحب ملفات PDF إلى مساحة العمل واطرح أسئلتك. على حاسوب محمول بذاكرة RAM سعتها 16 غيغابايت تستغرق العملية بأكملها 30 دقيقة، معظمها في تنزيل النموذج.**',
    quickAnswerTop: {
      ar: {
        question: 'كيف أبني نظام RAG محليًا لملفات PDF الخاصة بي في 30 دقيقة؟',
        answer:
          'ثبّت برنامج Ollama (3 دقائق)، ونزّل Llama 3.3 8B (8 دقائق، معظمها تنزيل)، وثبّت AnythingLLM (4 دقائق)، وصِله بـ Ollama (3 دقائق) وغيّر أداة التضمين إلى nomic-embed-text، وأضف ملفات PDF إلى مساحة العمل (5 دقائق للتضمين)، واختبر الاستعلامات (5 دقائق)، واضبط حجم الأجزاء (2 دقيقة). الإجمالي: 30 دقيقة على حاسوب محمول بذاكرة RAM سعتها 16 غيغابايت. يعمل النظام بالكامل دون اتصال بالإنترنت بعد التثبيت.',
        bullets: [
          'المكدس التقني: Ollama + Llama 3.3 8B Q4_K_M + AnythingLLM + nomic-embed-text-v1.5',
          'الحد الأدنى للأجهزة: 16 غيغابايت RAM، و20 غيغابايت مساحة حرة على القرص، ومعالج حديث (أي Apple Silicon أو Ryzen 5000+ أو Intel الجيل الحادي عشر+)',
          'الإنترنت مطلوب فقط للتنزيلات الأولية للنموذج والتطبيق — التشغيل محلي بالكامل',
          'يعمل على macOS وWindows 10/11 وLinux دون صلاحيات المشرف في خطوة AnythingLLM',
          'بدون كود، وبدون Python، وبدون إعداد قاعدة بيانات متجهية — يأتي AnythingLLM مع LanceDB مدمج',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'ما الذي ستبنيه', anchor: '#stack-overview' },
      { label: 'المتطلبات الأساسية', anchor: '#prerequisites' },
      { label: 'الخطوة 1: تثبيت Ollama (3 دقائق)', anchor: '#step-1-install-ollama' },
      { label: 'الخطوة 2: تنزيل Llama 3.3 8B (8 دقائق)', anchor: '#step-2-pull-model' },
      { label: 'الخطوة 3: تثبيت AnythingLLM (4 دقائق)', anchor: '#step-3-install-anythingllm' },
      { label: 'الخطوة 4: ضبط نموذج التضمين (3 دقائق)', anchor: '#step-4-configure-embedding' },
      { label: 'الخطوة 5: رفع أول ملفات PDF (5 دقائق)', anchor: '#step-5-upload-pdfs' },
      { label: 'الخطوة 6: اختبار الاستعلامات (5 دقائق)', anchor: '#step-6-test-queries' },
      { label: 'الخطوة 7: ضبط حجم الأجزاء (دقيقتان)', anchor: '#step-7-tune-chunks' },
      { label: 'نماذج الاستعلامات والإجابات المتوقعة', anchor: '#sample-queries' },
      { label: 'استكشاف الأخطاء وإصلاحها', anchor: '#troubleshooting' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**المكدس التقني:** يشغّل Ollama نموذج اللغة الكبير، ويدير AnythingLLM الواجهة ومخزن المتجهات، ويُجيب Llama 3.3 8B Q4_K_M، ويسترجع nomic-embed-text-v1.5.',
          '**الوقت:** 30 دقيقة إجمالًا. أطول خطوة منفردة هي تنزيل النموذج (~8 دقائق على اتصال 50 ميغابت/ث).',
          '**الأجهزة:** 16 غيغابايت RAM هو الحد الأدنى العملي. 8 غيغابايت تعمل فقط مع Phi-4 Mini ومجموعات المستندات الصغيرة — راجع قسم النماذج البديلة.',
          '**الخصوصية:** بعد التثبيت، لا يغادر شيء جهازك. تبقى ملفات PDF والتضمينات والمطالبات والمخرجات محلية بالكامل.',
          '**بدون كود:** صفر Python، وصفر سطر أوامر ما عدا أمرَي Ollama. برنامج AnythingLLM تطبيق سطح مكتب يدعم سحب المستندات وإفلاتها.',
          '**أداة التضمين الافتراضية غير مناسبة:** يأتي AnythingLLM مع أداة تضمين مدمجة صغيرة جدًا. غيّرها إلى nomic-embed-text-v1.5 في الخطوة 4 — تتحسن جودة الاسترجاع بشكل ملحوظ.',
          '**حجم الجزء الافتراضي غير مناسب أيضًا لملفات PDF:** أجزاء بحجم 1000 رمز مع تداخل 200 رمز نقطة بداية أفضل من القيمة الافتراضية 512/0. يُضبط في الخطوة 7.',
        ],
      },
      stackOverview: {
        id: 'stack-overview',
        title: 'ما الذي ستبنيه',
        content:
          '**نظام RAG مستقل لسطح المكتب: نافذة دردشة تسحب إليها ملفات PDF وتطرح أسئلة عليها.** أربعة مكونات مفتوحة المصدر، جميعها مجانية وتعمل على حاسوبك المحمول:',
        items: [
          '**Ollama** — بيئة تشغيل نماذج اللغة المحلية. تدير ملفات النماذج وتعرض واجهة برمجة تطبيقات متوافقة مع OpenAI على localhost:11434. توفر نموذج الإجابة.',
          '**Llama 3.3 8B Instruct (Q4_K_M)** — نموذج محادثة بثمانية مليارات معامل من Meta، مُكمَّل ليناسب ذاكرة RAM بحجم ~5 غيغابايت. جودة إجابة جيدة على الأسئلة المستندة إلى المستندات في 2026.',
          '**AnythingLLM Desktop** — الواجهة + مخزن المتجهات + تنسيق RAG. يأتي مع LanceDB مدمج، ويُحلّل ملفات PDF/DOCX/TXT/MD بشكل أصيل، ويتواصل مع Ollama كمزود لنموذج اللغة.',
          '**nomic-embed-text-v1.5** — نموذج التضمين. متجهات ذات 768 بُعدًا، يعمل عبر Ollama بسرعة ~600 جزء/ث على معالج حديث. يحل محل أداة التضمين الافتراضية الضعيفة في AnythingLLM.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'نظام RAG المحلي مكوّن من أربعة عناصر — بيئة تشغيل (Ollama)، ونموذج إجابة (Llama 3.3 8B)، وواجهة مع مخزن متجهات (AnythingLLM)، ونموذج تضمين (nomic-embed-text-v1.5) — مترابطة على جهاز واحد دون استدعاءات سحابية.',
          },
          {
            type: 'plain-terms',
            text: 'اسحب ملف PDF، واطرح سؤالًا، واحصل على إجابة مستندة بمراجع، كل ذلك دون اتصال بالإنترنت. تتقاسم الأربعة العمل: يشغّل Ollama النماذج، ويصيغ Llama 3.3 8B الإجابة، ويدير AnythingLLM الأجزاء والمتجهات، ويحوّل nomic-embed-text-v1.5 النص إلى متجهات تُتيح الاسترجاع. وقت التثبيت الإجمالي: ~30 دقيقة؛ التكلفة الإجمالية: صفر.',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'يأتي AnythingLLM أيضًا بنموذج لغوي افتراضي مدمج وأداة تضمين افتراضية مدمجة. كلاهما صغير عمدًا ليبدأ التطبيق بسرعة على أجهزة منخفضة الأداء. سنستبدلهما في الخطوتين 4 و6 لأن جودة الاسترجاع هي كل شيء في نظام RAG.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-rag-architecture-en.svg',
        imageCaption: 'مكدس RAG المحلي: Ollama (بيئة التشغيل، localhost:11434)، وLlama 3.3 8B Q4_K_M (~4.9 غيغابايت، نموذج الإجابة)، وAnythingLLM Desktop (الواجهة + مخزن المتجهات LanceDB)، وnomic-embed-text-v1.5 (~280 ميغابايت أداة التضمين). تدفق البيانات: ملفات PDF → AnythingLLM → nomic-embed-text → LanceDB → Llama 3.3 8B → الإجابة.',
      },
      prerequisites: {
        id: 'prerequisites',
        title: 'ما تحتاجه قبل البدء',
        content:
          '**حاسوب محمول بذاكرة RAM سعتها 16 غيغابايت، و20 غيغابايت مساحة حرة على القرص، واتصال بالإنترنت، و30 دقيقة من وقتك.** نظام التشغيل يمكن أن يكون macOS 12+ أو Windows 10/11 أو أي نظام Linux حديث لسطح المكتب.',
        items: [
          '**ذاكرة RAM:** 16 غيغابايت هو الحد الأدنى العملي لتشغيل Llama 3.3 8B Q4 + AnythingLLM + تطبيقات سطح المكتب المعتادة. مع 8 غيغابايت يعمل Phi-4 Mini Q4 بدلًا منه؛ راجع البدائل في الخطوة 2.',
          '**القرص:** 20 غيغابايت مساحة حرة. يشغل Llama 3.3 8B Q4_K_M ~5 غيغابايت، ونموذج التضمين ~280 ميغابايت، وAnythingLLM ~600 ميغابايت، وتحتاج مساحة للتضمينات (~10-30 ميغابايت لكل 100 صفحة PDF).',
          '**الشبكة:** ~50 ميغابت/ث كحد أدنى لتنزيل النموذج. مع 25 ميغابت/ث تستغرق الخطوة ذاتها ~16 دقيقة؛ بقية البرنامج التعليمي غير متأثرة.',
          '**الصلاحيات:** لا يحتاج AnythingLLM إلى صلاحيات المشرف. يثبّت Ollama في `/usr/local/bin` على macOS/Linux (يطلب كلمة مرور مرة واحدة) أو `%LOCALAPPDATA%` على Windows (بدون مشرف).',
          '**المستندات جاهزة:** 5-20 ملف PDF للبدء. الكميات الأكبر تعمل أيضًا، لكن المجموعة الصغيرة تتيح اختبار جودة الاسترجاع بشكل أسرع.',
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-prerequisites-en.svg',
        imageCaption: 'متطلبات النظام: 16 غيغابايت RAM (الحد الأدنى لـ Llama 3.3 8B Q4 + AnythingLLM)، و20 غيغابايت مساحة حرة، و50 ميغابت/ث لتنزيل النموذج. macOS 12+ أو Windows 10/11 أو Linux. لا يتطلب AnythingLLM صلاحيات المشرف.',
      },
      step1InstallOllama: {
        id: 'step-1-install-ollama',
        title: 'الخطوة 1: تثبيت Ollama (3 دقائق)',
        content:
          '**نزّل مثبّت Ollama لنظام تشغيلك من ollama.com/download وشغّله. يضيف المثبّت واجهة سطر أوامر `ollama` إلى PATH ويبدأ خدمة في الخلفية.** لا توجد خيارات ضبط يجب اختيارها.',
        items: [
          '**macOS:** نزّل ملف `.dmg`، واسحب Ollama إلى التطبيقات، وافتحه مرة واحدة لتثبيت مساعد CLI. تظهر أيقونة اللاما في شريط القوائم عندما تكون الخدمة قيد التشغيل.',
          '**Windows:** نزّل ملف `.exe`، وشغّله واقبل القيم الافتراضية. يعمل Ollama كخدمة في الخلفية بعد التثبيت؛ لا يلزم تشغيل إضافي.',
          '**Linux:** التثبيت في سطر واحد: `curl -fsSL https://ollama.com/install.sh | sh`. يُسجّل النص البرمجي وحدة systemd؛ ابدأها بالأمر `sudo systemctl start ollama`.',
          '**التحقق:** افتح طرفية ونفّذ `ollama --version`. يجب أن ترى سلسلة رقم الإصدار. إن لم يُعثر على الأمر، أعد تشغيل الطرفية لتحميل PATH المحدّث.',
        ],
        codeBlock: 'ollama --version\n# ollama version is 0.5.x  (any 0.5+ build works for this tutorial)',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'warning',
            text: 'إذا كان `ollama --version` يعمل لكن الخطوات اللاحقة تفشل بخطأ "رُفض الاتصال بـ localhost:11434"، فهذا يعني أن الخدمة الخلفية لم تبدأ تلقائيًا. macOS: افتح التطبيق من التطبيقات. Linux: `sudo systemctl start ollama`. Windows: افتح أيقونة Ollama في منطقة الإشعارات.',
          },
        ],
      },
      step2PullModel: {
        id: 'step-2-pull-model',
        title: 'الخطوة 2: تنزيل Llama 3.3 8B (8 دقائق)',
        content:
          '**نفّذ `ollama pull llama3.3:8b-instruct-q4_K_M` في طرفية. يُنزّل هذا ملف GGUF المكمَّل بحجم 4.9 غيغابايت ويسجّله في Ollama.** معظم الـ30 دقيقة الإجمالية تتعلق بهذه الخطوة الواحدة على اتصال منزلي نموذجي.',
        items: [
          '**حجم التنزيل:** ~4.9 غيغابايت (تكميل Q4_K_M). عند 50 ميغابت/ث تنتظر نحو 8 دقائق؛ وعند 100 ميغابت/ث نحو 4 دقائق؛ وعند 25 ميغابت/ث نحو 16 دقيقة.',
          '**متابعة التقدم:** يطبع Ollama نسبة مئوية والسرعة. يستأنف التنزيل في حال انقطاعه؛ أعد تنفيذ الأمر ذاته.',
          '**اختبار سريع للنموذج:** بعد اكتمال التنزيل، نفّذ `ollama run llama3.3:8b-instruct-q4_K_M` واسأل "كم يساوي 2+2؟". تأكد من حصولك على إجابة معقولة. اكتب `/bye` للخروج.',
          '**بديل لذاكرة RAM الأقل:** إن كان جهازك يحتوي على 8 غيغابايت RAM بدلًا من 16، نفّذ `ollama pull phi3:mini` (Phi-4 Mini، ~2.4 غيغابايت على القرص). استخدم اسم النموذج هذا في الخطوة 3. الجودة أقل مع المستندات الطويلة، لكن النظام يعمل.',
        ],
        codeBlock:
          '# Recommended for 16 GB RAM\nollama pull llama3.3:8b-instruct-q4_K_M\n\n# Alternative for 8 GB RAM\nollama pull phi3:mini\n\n# Quick smoke test (type /bye to exit)\nollama run llama3.3:8b-instruct-q4_K_M',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'هل لديك نماذج Ollama أخرى بالفعل؟ يُظهرها `ollama list` جميعًا. يمكنك إبقاء عدة نماذج مثبّتة والتبديل بينها في إعدادات مساحة العمل في AnythingLLM.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-model-options-en.svg',
        imageCaption: 'خيارات النماذج حسب ذاكرة RAM: Llama 3.3 8B Q4_K_M (~4.9 غيغابايت، 16 غيغابايت RAM، ~8 دقائق عند 50 ميغابت/ث) هو الموصى به؛ وPhi-4 Mini Q4 (~2.4 غيغابايت، 8 غيغابايت RAM، ~4 دقائق) للأجهزة ذات الذاكرة المحدودة؛ وMistral Small Q4_K_M (~4.1 غيغابايت، 16 غيغابايت RAM، ~7 دقائق) كبديل.',
      },
      step3InstallAnythingLlm: {
        id: 'step-3-install-anythingllm',
        title: 'الخطوة 3: تثبيت AnythingLLM Desktop (4 دقائق)',
        content:
          '**نزّل AnythingLLM Desktop من useanything.com (أو anythingllm.com) وشغّل المثبّت. افتح التطبيق وتخطَّ تنبيه "إنشاء حساب سحابي"؛ يُعرض وضع التشغيل المحلي فقط في الشاشة التالية.** التثبيت غير تفاعلي.',
        items: [
          '**macOS:** نزّل ملف `.dmg`، واسحب AnythingLLM إلى التطبيقات وافتحه. قد يطلب منك macOS تأكيد أن التطبيق من مطوّر معروف؛ انقر "فتح" في إعدادات النظام ← الخصوصية والأمان إذا طُلب ذلك.',
          '**Windows:** نزّل مثبّت `.exe`. قد يشير Windows SmartScreen إلى أنه تنزيل غير معتاد؛ انقر "مزيد من المعلومات" ← "تشغيل على أي حال". يثبّت التطبيق في `%LOCALAPPDATA%\\anythingllm-desktop` (بدون مشرف).',
          '**Linux:** نزّل ملف `.AppImage`، وجعله قابلًا للتنفيذ (`chmod +x AnythingLLMDesktop.AppImage`) وانقر عليه نقرًا مزدوجًا لتشغيله.',
          '**الاختيار عند أول تشغيل:** يعرض AnythingLLM مساحة عمل سحابية مستضافة أو إعداد محلي فقط. اختر **الإعداد المحلي**. هذا هو الخيار الذي يبقي النظام بأكمله دون اتصال بالإنترنت.',
          '**إنشاء مساحة العمل:** عند الطلب، أعطِ مساحة العمل الأولى اسمًا وصفيًا ("مقالات-بحثية"، "عقود"، "ملاحظات-شخصية"). لكل مساحة عمل مجموعة مستنداتها ومخزن تضميناتها الخاص.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'النموذج اللغوي الافتراضي في AnythingLLM هو نموذج مدمج صغير جدًا مخصص لعرض الترحيب فقط. في الخطوة التالية سنوجّهه إلى Ollama المحلي لديك. لا تستخدم النموذج الافتراضي للاستعلامات الحقيقية؛ ستكون الإجابات ضعيفة للغاية بحيث لا تُجدي.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-install-flow-en.svg',
        imageCaption: 'تثبيت AnythingLLM Desktop في 4 خطوات: التنزيل من anythingllm.com (~600 ميغابايت)، والتثبيت بدون مشرف، والفتح وتخطي تنبيه السحابة، ثم اختيار "Local Setup" للحفاظ على جميع البيانات دون اتصال.',
      },
      step4ConfigureEmbedding: {
        id: 'step-4-configure-embedding',
        title: 'الخطوة 4: ربط AnythingLLM بـ Ollama وتغيير أداة التضمين (3 دقائق)',
        content:
          '**افتح إعدادات AnythingLLM ← تفضيل نموذج اللغة. اختر "Ollama" كمزود، وحدد عنوان URL على `http://127.0.0.1:11434` واختر `llama3.3:8b-instruct-q4_K_M` من قائمة النماذج المنسدلة. احفظ. ثم انتقل إلى تفضيل التضمين وغيّر من الافتراضي إلى `nomic-embed-text` عبر Ollama.**',
        items: [
          '**لوحة تفضيل نموذج اللغة:** المزود = Ollama، ونقطة النهاية = `http://127.0.0.1:11434`، والنموذج = `llama3.3:8b-instruct-q4_K_M`. انقر "حفظ التغييرات". تأكيد الاتصال بعلامة صح خضراء.',
          '**لوحة تفضيل التضمين:** الافتراضي هو "AnythingLLM Native Embedder"، وهو أداة تضمين مدمجة صغيرة جدًا. غيّر المزود إلى Ollama، ثم نفّذ `ollama pull nomic-embed-text` في طرفيتك أولًا (~280 ميغابايت)، وحدّث قائمة النماذج في اللوحة واختر `nomic-embed-text:latest`. احفظ.',
          '**تنبيه إعادة التضمين:** إن أضفت مستندات بالفعل مع أداة التضمين السابقة، سيطلب منك AnythingLLM معالجتها مجددًا. في تثبيت جديد لا توجد مستندات، لذلك لن يظهر التنبيه.',
          '**قاعدة البيانات المتجهية:** اتركها على الافتراضي (LanceDB). إنها محلية ومعتمدة على الملفات ولا تحتاج إعدادًا. غيّرها فقط إن كنت تحتاج تحديدًا إلى PGVector أو Qdrant.',
        ],
        codeBlock:
          '# Run this in your terminal before opening the Embedding Preference panel\nollama pull nomic-embed-text',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'لماذا nomic-embed-text-v1.5 تحديدًا؟ في مايو 2026 يحتل المرتبة الأولى من بين أفضل 5 في تصنيف MTEB Retrieval لأي نموذج أقل من 500 ميغابايت، ويعمل بسرعة 400-800 جزء/ث على معالج حديث وأكثر من 2000 جزء/ث على Apple Silicon، ومرخّص بترخيص Apache 2.0. إنه أول ترقية معيارية لتقريبًا جميع مكدسات RAG المحلية؛ راجع [مقارنة نماذج التضمين](/ar/power-local-llm/best-embedding-models-local-rag-2026) للبدائل.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-config-flow-en.svg',
        imageCaption: 'الخطوة 4 في لوحتين: تفضيل نموذج اللغة (المزود = Ollama، ونقطة النهاية = http://127.0.0.1:11434، والنموذج = llama3.3:8b-instruct-q4_K_M)، ثم تفضيل التضمين (نزّل nomic-embed-text أولًا، ثم اختر nomic-embed-text:latest عبر Ollama).',
      },
      step5UploadPdfs: {
        id: 'step-5-upload-pdfs',
        title: 'الخطوة 5: رفع أول ملفات PDF (5 دقائق)',
        content:
          '**افتح مساحة العمل، وانقر "رفع المستندات" واسحب 5 إلى 20 ملف PDF. يستخرج AnythingLLM النص، ويقسّمه إلى أجزاء (افتراضيًا 512 رمز، 0 تداخل)، ويعالج كل جزء مع Ollama، ويخزّن المتجهات في LanceDB.** يُظهر شريط التقدم الصفحات المحللة والأجزاء المعالجة.',
        items: [
          '**الصيغ المدعومة:** PDF (نصية)، وDOCX، وTXT، وMD، وEPUB، فضلًا عن جلب محتوى الروابط. ملفات PDF المُمسوحة ضوئيًا تحتاج إلى OCR أولًا؛ راجع قسم استكشاف الأخطاء.',
          '**السرعة:** 400-800 جزء/ث على معالج حديث وأكثر من 2000 جزء/ث على Apple Silicon بعد تسخين Ollama. مجموعة من 20 ملف PDF بـ~50 صفحة لكل منها (~3000 جزء إجمالًا) تنتهي من التضمين في 5-8 ثوانٍ على معالج حديث وفي 1-2 ثانية على Apple Silicon، بالإضافة إلى وقت التحليل. احسب ~5 دقائق إجمالًا لرفع 20 ملف PDF وتحليلها ومعالجتها.',
          '**ذاكرة RAM أثناء التضمين:** يحمّل Ollama نموذج التضمين (~280 ميغابايت) عند الطلب الأول ويخزّنه مؤقتًا. تعيد التضمينات اللاحقة استخدام الذاكرة المؤقتة.',
          '**"نقل إلى مساحة العمل":** بعد الرفع، يضع AnythingLLM المستندات في مجموعة "انتظار". يجب النقر صراحةً على "نقل إلى مساحة العمل" ← "حفظ ومعالجة" لجعلها قابلة للاستعلام. هذا التدفق المكوّن من خطوتين مقصود: يتيح المعاينة قبل تكبّد تكلفة التضمين.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'كثيرًا ما تحتوي ملفات PDF الممسوحة ضوئيًا قديمًا على نص تالف أو طبقات نص فارغة؛ يبدو الملف صحيحًا للعين البشرية، لكن AnythingLLM يستخرج "[image]" أو سلاسل فارغة. افتح ملف PDF في محرر نصي (أو نفّذ `pdftotext file.pdf -` من poppler-utils) للتحقق من وجود طبقة النص قبل رفعه.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-embed-flow-en.svg',
        imageCaption: 'من ملف PDF مرفوع إلى استعلام في 5 خطوات: رفع ملفات PDF (سحب وإفلات) ← استخراج طبقة النص ← التقسيم إلى أجزاء (1000 رمز / 200 تداخل) ← المعالجة مع nomic-embed-text عبر Ollama ← التخزين في LanceDB والاستعلام. السرعة: 400-800 جزء/ث على المعالج، وأكثر من 2000 على Apple Silicon.',
      },
      step6TestQueries: {
        id: 'step-6-test-queries',
        title: 'الخطوة 6: اختبار الاستعلامات (5 دقائق)',
        content:
          '**اكتب سؤالًا في دردشة مساحة العمل. يُحوّل AnythingLLM السؤال إلى متجه، ويسترجع أفضل N أجزاء من LanceDB، ويبني مطالبة بتلك الأجزاء كسياق، ويرسلها إلى Ollama ويعرض الإجابة.** الكمون على حاسوب محمول بذاكرة RAM 16 غيغابايت نحو 3-10 ثوانٍ لكل استعلام.',
        items: [
          '**ابدأ باستعلام استرجاع حقائق:** "ماذا يعني [مصطلح محدد من ملفات PDF الخاصة بك]؟" هذا يختبر ارتكاز الاسترجاع. يجب أن تستشهد الإجابة بملف PDF وتُعيد الصياغة الحرفية.',
          '**ثم استعلام تركيب:** "لخّص الحجة الرئيسية في [اسم المؤلف/العنوان]." هذا يختبر مدى جودة دمج النموذج لعدة أجزاء.',
          '**ثم استعلام مقارنة** (فقط إذا كانت ملفات PDF تحتوي على محتوى قابل للمقارنة): "قارن بين كيفية تناول [المستند أ] و[المستند ب] لـ[الموضوع]." هذا يختبر الاسترجاع عبر المستندات.',
          '**افحص الاستشهادات:** يعرض AnythingLLM أجزاء المصدر أسفل كل إجابة. انقر عليها للتحقق من اعتماد النموذج على المقاطع الصحيحة. إن كانت الاستشهادات غير ذات صلة، فالاسترجاع معطوب؛ راجع الخطوة 7.',
        ],
      },
      step7TuneChunks: {
        id: 'step-7-tune-chunks',
        title: 'الخطوة 7: ضبط حجم الأجزاء (دقيقتان)',
        content:
          '**افتح إعدادات مساحة العمل ← قاعدة البيانات المتجهية. غيّر حجم الجزء من 512 إلى 1000 والتداخل من 0 إلى 200. انقر حفظ ثم أعد معالجة مستنداتك (ستطلبه الواجهة).** هذا هو المعامل الرئيسي لتحسين جودة الاسترجاع في AnythingLLM.',
        items: [
          '**لماذا 1000/200 بدلًا من 512/0:** فقرات وأقسام ملفات PDF نادرًا ما تنتهي بشكل نظيف عند 512 رمزًا. تداخل 200 رمز يعني أن جملة تتجاوز حدود جزء تظهر كاملةً في جزء مجاور على الأقل، فتلتقطها عملية الاسترجاع.',
          '**تكلفة إعادة التضمين:** تُعاد معالجة مجموعة 20 ملف PDF / 3000 جزء في ~5 ثوانٍ. المجموعات الأكبر تستغرق وقتًا أطول بالتناسب. تُستبدل الأجزاء المخزّنة ولا تُضاف إلى الموجودة.',
          '**استرجاع Top-K:** القيمة الافتراضية Top-K هي 4 (أفضل 4 أجزاء متطابقة تصبح السياق). ارفعها إلى 6-8 إن بدت إجاباتك غير كافية التأسيس؛ اخفضها إلى 2-3 إن تشتّت النموذج بأجزاء ضوضاء.',
          '**قالب المطالبة:** يكشف AnythingLLM عن مطالبة النظام في مساحة العمل ← إعدادات الدردشة ← المطالبة. القيمة الافتراضية جيدة؛ عدّلها فقط إن كان لديك فشل محدد تريد حله.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'الضبط التجريبي يتفوق على النظرية: نفّذ الاستعلامات الخمس ذاتها قبل تغيير حجم الجزء وبعده وقارن. إن كان الاسترجاع عند 1000/200 أسوأ، فمن المرجح أن مستنداتك قصيرة جدًا (مذكرات من صفحة واحدة، تعليقات كود توثيقية): جرّب 256/64 بدلًا من ذلك.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-chunk-settings-en.svg',
        imageCaption: 'إعدادات الأجزاء الافتراضية مقابل الموصى بها: القيم الافتراضية 512/0/Top-K 4 تترك شظايا جمل عند الحدود. القيم الموصى بها 1000 رمز / 200 تداخل / Top-K 4-6 تلتقط الجمل عند الحدود داخل نافذة التداخل. إعادة معالجة 20 ملف PDF تستغرق ~5 ثوانٍ.',
      },
      sampleQueries: {
        id: 'sample-queries',
        title: 'كيف يجب أن تبدو الإجابات الجيدة فعلًا؟',
        content:
          '**نظام RAG المحلي المضبوط بشكل صحيح يُجيب على استعلامات استرجاع الحقائق بنقل حرفي من المصدر، ويُلخّص عند الطلب، ويستشهد بالأجزاء التي استخدمها.** ثلاثة نماذج استعلام في مساحة عمل مقالات بحثية، مع ما يُرجعه النظام السليم:',
        rows: [
          {
            'نوع الاستعلام': 'استرجاع حقائق',
            'مثال': 'ما حجم العيّنة التي استخدمها Smith et al. 2024؟',
            'نمط الإجابة السليمة': 'اقتباس مباشر من قسم المنهجية + مرجع الجزء',
            'نمط الفشل': 'إجابة عامة ("يستخدم الباحثون عادةً 100-500 مشارك") بدون استشهاد',
          },
          {
            'نوع الاستعلام': 'تركيب',
            'مثال': 'لخّص المساهمة الرئيسية لهذه الورقة البحثية.',
            'نمط الإجابة السليمة': '3-5 جمل مستخرجة من أجزاء الملخص والخاتمة',
            'نمط الفشل': 'يُعيد العنوان أو يقتبس جملة واحدة فقط من الملخص',
          },
          {
            'نوع الاستعلام': 'بين المستندات',
            'مثال': 'كيف يختلف Smith وJones حول تداخل الأجزاء؟',
            'نمط الإجابة السليمة': 'اقتباسات من كلا المقالتين مع إسناد صريح',
            'نمط الفشل': 'يستشهد بمقالة واحدة فقط أو يخترع خلافًا غير موجود في الأجزاء',
          },
        ],
        columns: ['نوع الاستعلام', 'مثال', 'نمط الإجابة السليمة', 'نمط الفشل'],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'الإجابة السليمة من نظام RAG المحلي تقتبس الجزء المصدر حرفيًا لاسترجاع الحقائق، وتُلخّص عبر الأجزاء لأسئلة الملخص، وتستشهد بمعرّفات الأجزاء المحددة التي استخدمتها؛ الإجابات العامة بدون استشهادات تُشير إلى مشكلة في الاسترجاع لا في النموذج.',
          },
          {
            type: 'plain-terms',
            text: 'إذا قالت الإجابة "يستخدم الباحثون عادةً 100-500 مشارك" بدلًا من "استخدم Smith et al. 287 مشاركًا (المنهجية، ص. 4)"، فالاسترجاع معطوب والنموذج يرتجل من بيانات تدريبه. أصلح الاسترجاع أولًا (حجم الجزء، أداة التضمين، عتبة التشابه) قبل تغيير نموذج الإجابة.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'استخدم هذه الأنماط الثلاثة للاستعلام كمجموعة اختبارك بعد كل تغيير في إعدادات الاسترجاع. إذا فشل استرجاع الحقائق لكن التركيب نجح، فأجزاؤك كبيرة جدًا. إذا فشل التركيب لكن استرجاع الحقائق نجح، فقيمة top-k لديك منخفضة جدًا. نمط الفشل يُخبرك بالمعامل الذي يجب ضبطه.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-query-types-en.svg',
        imageCaption: '3 أنواع استعلام RAG: استرجاع الحقائق (اقتباس مباشر + مرجع = سليم؛ إجابة عامة = استرجاع معطوب)، والتركيب (3-5 جمل من الملخص + الخاتمة = سليم)، وبين المستندات (اقتباسات من كلا المقالتين = سليم؛ يستشهد بواحدة فقط أو يخترع = معطوب). أخضر = سليم، أحمر = أصلح الاسترجاع أولًا.',
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'عند حدوث خطأ: ستة أوضاع فشل شائعة وحلولها',
        content:
          '**معظم الأعطال تقع ضمن إحدى هذه الفئات الست. حدّد العَرَض في الصف المقابل وطبّق الحل.**',
        rows: [
          {
            'العَرَض': 'يعرض AnythingLLM "تعذّر الاتصال بـ Ollama"',
            'السبب المحتمل': 'خدمة Ollama ليست قيد التشغيل أو نقطة النهاية غير صحيحة',
            'الحل': 'نفّذ `ollama serve` (أو أعد تشغيل التطبيق/الخدمة). تأكد من أن نقطة النهاية هي `http://127.0.0.1:11434` وليس `localhost:11434` (الاسم المستعار يفشل أحيانًا على Windows).',
          },
          {
            'العَرَض': 'تنزيل النموذج متوقف عند 0% أو 99%',
            'السبب المحتمل': 'مشكلة في طرف CDN أو القرص ممتلئ',
            'الحل': 'ألغِ بـ Ctrl+C، ونفّذ `df -h` للتأكد من المساحة المتاحة، ثم نفّذ أمر `ollama pull` ذاته مجددًا؛ يستأنف Ollama من البايت الأخير.',
          },
          {
            'العَرَض': 'خطوة التضمين تبدو متوقفة',
            'السبب المحتمل': 'Ollama يحمّل نموذج التضمين لأول مرة',
            'الحل': 'انتظر 30-60 ثانية. التحميل الأول للنموذج يستغرق 10-40 ثانية حسب سرعة القرص. التضمينات التالية سريعة.',
          },
          {
            'العَرَض': 'الاسترجاع يُرجع أجزاء غير ذات صلة بالاستعلام',
            'السبب المحتمل': 'التجزئة الافتراضية 512/0 + أداة التضمين الافتراضية الضعيفة',
            'الحل': 'تأكد من تطبيق الخطوة 4 (nomic-embed-text) والخطوة 7 (تجزئة 1000/200) كلتيهما. أعد معالجة مساحة العمل.',
          },
          {
            'العَرَض': 'الإجابات قصيرة أو عامة أو ترفض العمل مع المصدر',
            'السبب المحتمل': 'النموذج اللغوي المحدد لا يزال هو النموذج الافتراضي الصغير أو السياق صغير جدًا',
            'الحل': 'تأكد من أن تفضيل نموذج اللغة يُظهر `llama3.3:8b-instruct-q4_K_M`. ارفع top-K من 4 إلى 6.',
          },
          {
            'العَرَض': 'ملفات PDF الممسوحة ضوئيًا تُرفع لكنها تُنتج أجزاء فارغة',
            'السبب المحتمل': 'ملف PDF لا يحتوي على طبقة نص؛ إنه صورة نقطية خالصة',
            'الحل': 'طبّق OCR على ملف PDF أولًا. macOS: `ocrmypdf input.pdf output.pdf`. Linux/Windows: ثبّت Tesseract + ocrmypdf. ثم أعد رفع الملف المعالج بـ OCR.',
          },
        ],
        columns: ['العَرَض', 'السبب المحتمل', 'الحل'],
        image: '/images/local-rag-on-your-pdfs-step-by-step-troubleshooting-en.svg',
        imageCaption: 'ستة أوضاع فشل: رُفض الاتصال (تنفيذ ollama serve)، تنزيل متوقف (Ctrl+C → df -h → إعادة المحاولة)، تضمين متوقف (انتظر 30-60 ث)، أجزاء غير ذات صلة (تطبيق الخطوتين 4 + 7)، إجابات قصيرة/عامة (ضبط llama3.3:8b-instruct-q4_K_M، رفع Top-K)، أجزاء فارغة من ملفات PDF ممسوحة (تنفيذ ocrmypdf أولًا).',
      },
      regionalContext: {
        id: 'regional-context',
        title: 'السياق الإقليمي: خصوصية البيانات في المنطقة العربية',
        content:
          'يستجيب نظام RAG المحلي كهذا مباشرةً للمتطلبات الرئيسية للخصوصية والأمان في المنطقة العربية. على خلاف حلول RAG السحابية التي ترسل البيانات إلى مزودين خارجيين، يبقى كل شيء على جهازك.',
        items: [
          '**أنظمة حماية البيانات الشخصية:** أصدرت دول عربية عديدة تشريعات لحماية البيانات الشخصية، من بينها نظام حماية البيانات الشخصية السعودي (نظام PDPL)، وقانون حماية البيانات الشخصية الإماراتي (قانون رقم 45 لعام 2021)، ولوائح PDPL المصرية. جميعها تُلزم بضمانات لنقل البيانات والمعالجة الخارجية. نظام RAG المحلي الذي لا يُرسل بيانات خارج بنيتك التحتية يستوفي هذا المتطلب مباشرةً.',
          '**القطاعات المُنظَّمة في المنطقة العربية:** تستفيد منظمات المال والصحة والقانون والقطاع العام في المملكة العربية السعودية والإمارات ومصر والأردن وسائر دول المنطقة من RAG المحلي: صفر اعتماد على واجهة برمجة سحابية، وصفر تدفق للبيانات عبر الحدود، وامتثال فوري للأنظمة المحلية.',
          '**السيناريو النموذجي للمؤسسات العربية:** أرشف خمس سنوات من عقود العملاء، وفهرسها بـ AnythingLLM، وأجرِ عمليات البحث والاستعلام عن بيانات العملاء محليًا بالكامل. تكلفة التشغيل: لا شيء تقريبًا. التثبيت الإنتاجي: 30 دقيقة على حاسوبك المحمول أو خادمك المحلي.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ماذا لو لم يثبّت Ollama؟',
            a: 'على macOS، أكثر الأعطال شيوعًا هو حجب Gatekeeper لمساعد غير موقّع؛ افتح إعدادات النظام ← الخصوصية والأمان وانقر "فتح على أي حال". على Windows، قد يعزل Windows Defender SmartScreen المثبّت؛ انقر بالزر الأيمن ← خصائص ← إلغاء الحظر. على Linux، يحتاج نص التثبيت إلى sudo لكتابة وحدة systemd؛ إن لم يكن sudo متاحًا، نزّل الثنائي الثابت من github.com/ollama/ollama/releases وضعه يدويًا في PATH.',
          },
          {
            q: 'لماذا خطوة التضمين بطيئة؟',
            a: 'أول تضمين في الجلسة بطيء لأن Ollama يحمّل نموذج التضمين كسولًا في ذاكرة RAM (10-40 ثانية حسب سرعة القرص). بعد ذلك يعمل التضمين بسرعة 400-800 جزء/ث على معالج حديث وأكثر من 2000 جزء/ث على Apple Silicon. إن كان الأداء المستمر أقل من 100 جزء/ث، فمن المرجح أن النموذج يستخدم الذاكرة الافتراضية للقرص؛ أغلق التطبيقات الأخرى لتحرير ذاكرة RAM وأعد المحاولة.',
          },
          {
            q: 'كم عدد ملفات PDF التي يمكنني رفعها دفعةً واحدة؟',
            a: 'يقبل AnythingLLM مئات الملفات في عملية سحب وإفلات واحدة. الحد العملي هو ذاكرة RAM أثناء خطوة التحليل: ~1 غيغابايت عند الذروة لـ100 ملف PDF متوسط الحجم (50 صفحة لكل منها). بعد المعالجة، يكون مخزن المتجهات على القرص صغيرًا (~10-30 ميغابايت لكل 100 صفحة PDF). لأكثر من 1000 ملف PDF، راجع الدليل المتخصص حول [الدردشة مع 1000 ملف PDF محليًا](/ar/power-local-llm/chat-with-1000-pdfs-locally).',
          },
          {
            q: 'هل يمكنني استخدام هذا مع ملفات PDF المحمية بكلمة مرور؟',
            a: 'لا يستطيع AnythingLLM فك تشفير ملفات PDF المحمية بكلمة مرور مباشرةً. افك التشفير أولًا بـ`qpdf --password=كلمةمرورك --decrypt input.pdf output.pdf` (qpdf مجاني، متاح للأنظمة الثلاثة) ثم ارفع الملف غير المحمي. احذف النسخة غير المحمية بعد التضمين إن كان نموذج التهديد لديك يقتضي ذلك؛ التضمينات بحد ذاتها غير قابلة للقراءة البشرية.',
          },
          {
            q: 'ماذا أفعل إن أرجع الاسترجاع أجزاءً خاطئة؟',
            a: 'ثلاثة معاملات بحسب الأثر: غيّر من أداة التضمين الافتراضية إلى nomic-embed-text (الخطوة 4)، وغيّر التجزئة من 512/0 إلى 1000/200 وأعد المعالجة (الخطوة 7)، وارفع top-K من 4 إلى 6 في إعدادات مساحة العمل. إن فشل الاسترجاع بعد الثلاثة، فمن المرجح أن مستنداتك تحتاج إلى معالجة مسبقة: احذف الرؤوس والتذييلات، وطبّع المسافات البيضاء، أو قسّم ملفات PDF الطويلة جدًا إلى ملفات لكل فصل.',
          },
          {
            q: 'هل يجب أن أستخدم نموذجًا مختلفًا عن Llama 3.3 8B؟',
            a: 'Llama 3.3 8B Q4_K_M هو أفضل نسبة جودة-ذاكرة RAM في 2026 للأنظمة ذات 16 غيغابايت. مع 8 غيغابايت RAM استخدم Phi-4 Mini Q4_K_M (~2.4 غيغابايت). مع 24 غيغابايت أو أكثر، جرّب Qwen 3 14B Q4 للحصول على تركيب أفضل بوضوح في المستندات الطويلة. لأعباء العمل متعددة اللغات، يتعامل Mistral Nemo 12B مع المحتوى غير الإنجليزي بشكل أفضل من Llama 3.3.',
          },
          {
            q: 'كيف أحدّث النموذج لاحقًا؟',
            a: 'نفّذ `ollama pull llama3.3:8b-instruct-q4_K_M` مجددًا للحصول على أحدث إصدار وأعد تشغيل AnythingLLM ليكشف إصدار النموذج من جديد. للتبديل إلى نموذج مختلف كليًا، نفّذ `ollama pull <النموذج-الجديد>` ثم غيّر القائمة المنسدلة لتفضيل نموذج اللغة في إعدادات AnythingLLM. لا حاجة لإعادة معالجة التضمينات لأنها تعتمد على أداة التضمين فقط لا على نموذج الإجابة.',
          },
          {
            q: 'هل يمكنني نقله إلى جهاز آخر؟',
            a: 'نعم. توجد نماذج Ollama في `~/.ollama/models` (macOS/Linux) أو `%USERPROFILE%\\.ollama\\models` (Windows)؛ انسخ المجلد. توجد مساحات عمل AnythingLLM في `~/.anythingllm/storage`؛ انسخها أيضًا. على الجهاز الجديد، ثبّت Ollama وAnythingLLM Desktop وضع المجلدات المنسوخة في مكانها. تُستعاد مساحات العمل والتضمينات بشكل متطابق.',
          },
          {
            q: 'هل يعمل إذا كانت ملفات PDF الخاصة بي صور ممسوحة ضوئيًا؟',
            a: 'ليس مباشرةً: يستخرج AnythingLLM النص لكنه لا يستطيع إجراء OCR على الصور. جهّز ملفات PDF الممسوحة ضوئيًا بـ`ocrmypdf input.pdf output.pdf` (متعدد المنصات، رخصة MIT، يستخدم Tesseract). على Apple Silicon، `ocrmypdf -l eng+ara` يدعم أكثر من 70 لغة. بعد OCR، يحتوي ملف PDF الناتج على الصور الأصلية وطبقة نص قابلة للبحث، ويستخرج AnythingLLM النص بشكل صحيح.',
          },
          {
            q: 'كيف أحتفظ بنسخة احتياطية من قاعدة بيانات المستندات؟',
            a: 'يُخزّن AnythingLLM كل شيء في `~/.anythingllm/storage` (macOS/Linux) أو `%LOCALAPPDATA%\\anythingllm-desktop\\storage` (Windows). اضغط هذا المجلد بـ tar/zip وانسخه إلى جهاز احتياطي. يشمل المجلد المستندات الأصلية والأجزاء المحللة وفهارس المتجهات وسجل الدردشة. الاستعادة تتم بالنسخ للخلف وإعادة التشغيل؛ لا يلزم أي تدفق استيراد خاص.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[AnythingLLM مقابل PrivateGPT مقابل Open WebUI: أفضل RAG محلي](/ar/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — للقراء الراغبين في تقييم البدائل قبل الالتزام بـ AnythingLLM.',
          '[أفضل نماذج التضمين لـ RAG المحلي في 2026](/ar/power-local-llm/best-embedding-models-local-rag-2026) — للقراء الراغبين في استرجاع أفضل من nomic-embed-text.',
          '[تطبيقات الذكاء الاصطناعي المحلي مع RAG مدمج: تحدّث مع ملفاتك (بدون إعداد)](/ar/power-local-llm/local-ai-app-with-built-in-rag) — للقراء الباحثين عن شيء أبسط من AnythingLLM.',
          '[RAG موضّح: كيف تُرسّخ إجابات الذكاء الاصطناعي في بيانات حقيقية (2026)](/ar/prompt-engineering/rag-explained) — المرجع المفاهيمي حول ماهية RAG ولماذا يهم كل مكوّن.',
          '[دليل الأجهزة لنماذج اللغة الكبيرة المحلية 2026](/ar/local-llms/local-llm-hardware-guide-2026) — مرجع تحديد حجم الأجهزة إن كنت تختار الحاسوب المحمول لا البرنامج فقط.',
          '[مركز Power Local LLM](/ar/power-local-llm) — المكتبة الكاملة لأدلة المجموعة.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/ar/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'headline': 'بناء نظام RAG محلي على ملفات PDF في 30 دقيقة (Ollama + AnythingLLM)',
      'description':
        'خطوة بخطوة: ثبّت برنامج Ollama، وأعدّ برنامج AnythingLLM، وأضف ملفات PDF وتحدّث معها. الوقت الإجمالي 30 دقيقة. مُختبَر على حاسوب محمول بذاكرة RAM سعتها 16 غيغابايت. مايو 2026.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
      },
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'Llama 3.3 8B' },
        { '@type': 'Thing', 'name': 'nomic-embed-text' },
        { '@type': 'Thing', 'name': 'Retrieval-augmented generation' },
        { '@type': 'Thing', 'name': 'RAG محلي' },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'الرئيسية',
          'item': 'https://www.promptquorum.com/ar',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Power Local LLM',
          'item': 'https://www.promptquorum.com/ar/power-local-llm',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'بناء نظام RAG محلي على ملفات PDF في 30 دقيقة',
          'item': 'https://www.promptquorum.com/ar/power-local-llm/local-rag-on-your-pdfs-step-by-step',
        },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'RAG & Document Chat',
    title: '30분 만에 PDF에 로컬 RAG 구축하기 (Ollama + AnythingLLM)',
    seoTitle: 'PDF 로컬 RAG 2026: 단계별 설정 가이드',
    intro:
      '16GB RAM 노트북에서 개인 RAG 시스템을 가장 빠르게 구축하는 완전한 가이드입니다. 스택: Ollama, Llama 3.3 8B, AnythingLLM, nomic-embed-text. 총 소요 시간: 빈 머신에서 내 PDF와 대화하기까지 30분.',
    metaDescription:
      '단계별 안내: Ollama 설치, AnythingLLM 설정, PDF 업로드 및 대화. 총 소요 시간 30분. 16GB RAM 노트북에서 테스트 완료. 2026년 5월.',
    twitterDescription:
      '빈 노트북에서 30분 만에 내 PDF와 대화하기. Ollama + Llama 3.3 8B + AnythingLLM + nomic-embed-text. 16GB RAM에서 테스트 완료.',
    current_models_mentioned: ['Llama 3.3 8B', 'nomic-embed-text-v1.5', 'Phi-4 Mini', 'Mistral Small'],
    current_hardware_mentioned: ['16GB RAM 노트북', 'Apple M1', 'Apple M3', 'Intel Core Ultra 5', 'AMD Ryzen 7 7700'],
    audience: '클라우드 API에 의존하지 않고 자신의 노트북에서 개인 RAG 시스템을 구축하고자 하는 개발자 및 고급 사용자.',
    readTime: '12분 분량',
    educationalLevel: 'Beginner',
    primaryTerm: 'PDF 로컬 RAG',
    targetKeywords: [
      '로컬 rag pdf 튜토리얼',
      'ollama anythingllm rag 설정',
      'pdf 로컬 채팅 방법',
      '로컬 rag 30분 설정',
      '프라이빗 rag 노트북',
    ],
    leadAnswerBlock:
      '**Ollama를 설치하고, Llama 3.3 8B를 다운로드하고, AnythingLLM을 설치한 후 Ollama에 연결하고, 임베딩 모델을 nomic-embed-text로 변경하고, PDF를 워크스페이스에 드래그하여 질문하십시오. 16GB RAM 노트북에서 전체 과정은 30분이 소요되며, 대부분의 시간은 모델 다운로드에 사용됩니다.**',
    quickAnswerTop: {
      ko: {
        question: '30분 안에 내 PDF용 로컬 RAG 시스템을 어떻게 구축합니까?',
        answer:
          'Ollama 설치(3분), Llama 3.3 8B 다운로드(8분, 주로 다운로드 시간), AnythingLLM 설치(4분), Ollama 연결 및 nomic-embed-text로 임베더 변경(3분), 워크스페이스에 PDF 업로드(임베딩 5분), 쿼리 테스트(5분), 청크 크기 조정(2분). 합계: 16GB RAM 노트북에서 30분. 설치 후에는 시스템이 완전히 오프라인으로 동작합니다.',
        bullets: [
          '스택: Ollama + Llama 3.3 8B Q4_K_M + AnythingLLM + nomic-embed-text-v1.5',
          '최소 하드웨어 요구 사항: RAM 16GB, 디스크 여유 공간 20GB, 최신 CPU(Apple Silicon, Ryzen 5000+, Intel 11세대+ 모두 해당)',
          '인터넷은 초기 모델 및 앱 다운로드에만 필요하며, 추론은 완전히 로컬에서 실행됩니다.',
          'macOS, Windows 10/11, Linux에서 AnythingLLM 단계에 관리자/루트 권한 없이 작동합니다.',
          '코드 없음, Python 없음, 벡터 데이터베이스 설정 없음: AnythingLLM에 LanceDB가 내장되어 있습니다.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '구축할 것', anchor: '#stack-overview' },
      { label: '사전 준비 사항', anchor: '#prerequisites' },
      { label: '1단계: Ollama 설치 (3분)', anchor: '#step-1-install-ollama' },
      { label: '2단계: Llama 3.3 8B 다운로드 (8분)', anchor: '#step-2-pull-model' },
      { label: '3단계: AnythingLLM 설치 (4분)', anchor: '#step-3-install-anythingllm' },
      { label: '4단계: 임베딩 모델 설정 (3분)', anchor: '#step-4-configure-embedding' },
      { label: '5단계: 첫 번째 PDF 업로드 (5분)', anchor: '#step-5-upload-pdfs' },
      { label: '6단계: 쿼리 테스트 (5분)', anchor: '#step-6-test-queries' },
      { label: '7단계: 청크 크기 조정 (2분)', anchor: '#step-7-tune-chunks' },
      { label: '예시 쿼리 및 예상 응답', anchor: '#sample-queries' },
      { label: '문제 해결', anchor: '#troubleshooting' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 자료', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**스택:** Ollama가 LLM을 실행하고, AnythingLLM이 인터페이스와 벡터 저장소를 관리하며, Llama 3.3 8B Q4_K_M이 응답하고 nomic-embed-text-v1.5가 검색을 담당합니다.',
          '**시간:** 총 30분. 가장 오래 걸리는 단계는 모델 다운로드입니다(50Mbps 기준 약 8분).',
          '**하드웨어:** RAM 16GB가 최소 실용 사양입니다. 8GB에서는 Phi-4 Mini와 소규모 문서 세트만 작동합니다. 대안 모델 섹션을 참조하십시오.',
          '**프라이버시:** 설치 후에는 아무것도 기기 밖으로 나가지 않습니다. PDF, 임베딩, 프롬프트, 응답 모두 로컬에 유지됩니다.',
          '**코드 없음:** Python 없음, Ollama의 두 가지 명령 외에는 터미널도 없음. AnythingLLM은 드래그 앤 드롭 문서 가져오기를 갖춘 데스크톱 앱입니다.',
          '**기본 임베더는 적합하지 않습니다:** AnythingLLM에는 매우 작은 내장 임베더가 포함되어 있습니다. 4단계에서 nomic-embed-text-v1.5로 교체하십시오. 검색 품질이 눈에 띄게 향상됩니다.',
          '**기본 청크 크기도 PDF에는 적합하지 않습니다:** 기본값 512/0 대신 오버랩 200 토큰의 1000 토큰 청크가 더 나은 출발점입니다. 7단계에서 조정합니다.',
        ],
      },
      stackOverview: {
        id: 'stack-overview',
        title: '구축할 것',
        content:
          '**자급자족형 데스크톱 RAG 시스템: PDF를 드래그하고 질문할 수 있는 채팅 창입니다.** 오픈소스 네 가지 구성 요소, 모두 무료이며 노트북에서 실행됩니다:',
        items: [
          '**Ollama** — 로컬 LLM 런타임. 모델 파일을 관리하고 localhost:11434에서 OpenAI 호환 API를 노출합니다. 응답 모델을 제공합니다.',
          '**Llama 3.3 8B Instruct (Q4_K_M)** — Meta의 80억 파라미터 채팅 모델, RAM 약 5GB에 맞게 양자화됩니다. 2026년 문서 기반 질문에서 우수한 응답 품질을 제공합니다.',
          '**AnythingLLM Desktop** — 인터페이스 + 벡터 저장소 + RAG 오케스트레이션. LanceDB 내장, PDF/DOCX/TXT/MD 네이티브 파싱, LLM 제공자로서 Ollama와 통신합니다.',
          '**nomic-embed-text-v1.5** — 임베딩 모델. 768차원 벡터, 최신 CPU에서 Ollama를 통해 약 600 청크/초로 실행됩니다. 불충분한 AnythingLLM 기본 임베더를 교체합니다.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 RAG 시스템은 런타임(Ollama), 응답 모델(Llama 3.3 8B), 인터페이스 및 벡터 저장소(AnythingLLM), 임베딩 모델(nomic-embed-text-v1.5)의 네 가지 구성 요소가 클라우드 호출 없이 동일한 기기에서 연결된 것입니다.',
          },
          {
            type: 'plain-terms',
            text: 'PDF를 드래그하고, 질문하고, 인용이 포함된 근거 있는 답변을 완전히 오프라인으로 받으십시오. 네 가지 구성 요소가 역할을 나눕니다: Ollama는 모델을 실행하고, Llama 3.3 8B는 응답을 작성하고, AnythingLLM은 청크와 벡터를 관리하며, nomic-embed-text-v1.5는 텍스트를 검색 가능한 벡터로 변환합니다. 총 설치 시간: 약 30분, 총 비용: $0.',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'AnythingLLM에는 기본 LLM과 기본 임베더가 내장되어 있습니다. 둘 다 로우엔드 하드웨어에서 빠르게 시작되도록 의도적으로 작게 설계되었습니다. RAG 시스템에서는 검색 품질이 전부이므로 4단계와 6단계에서 교체합니다.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-rag-architecture-en.svg',
        imageCaption: '로컬 RAG 스택: Ollama(런타임, localhost:11434), Llama 3.3 8B Q4_K_M(약 4.9GB, 응답 모델), AnythingLLM Desktop(인터페이스 + LanceDB 벡터 저장소), nomic-embed-text-v1.5(약 280MB 임베더). 데이터 흐름: PDF → AnythingLLM → nomic-embed-text → LanceDB → Llama 3.3 8B → 응답.',
      },
      prerequisites: {
        id: 'prerequisites',
        title: '시작 전 필요한 것',
        content:
          '**RAM 16GB, 디스크 여유 공간 20GB, 인터넷 연결, 그리고 30분이 필요합니다.** 운영 체제는 macOS 12+, Windows 10/11, 또는 최신 Linux 데스크톱을 사용할 수 있습니다.',
        items: [
          '**RAM:** 16GB는 Llama 3.3 8B Q4 + AnythingLLM + 일반 데스크톱 앱을 위한 최소 실용 사양입니다. 8GB의 경우 대신 Phi-4 Mini Q4를 사용하십시오. 2단계의 대안을 참조하십시오.',
          '**디스크:** 여유 공간 20GB. Llama 3.3 8B Q4_K_M은 약 5GB, 임베딩 모델은 약 280MB, AnythingLLM은 약 600MB를 차지하며, 임베딩을 위한 공간(PDF 100페이지당 약 10~30MB)도 필요합니다.',
          '**네트워크:** 모델 다운로드를 위해 최소 약 50Mbps가 필요합니다. 25Mbps에서는 같은 단계에 약 16분이 소요됩니다. 나머지 튜토리얼은 영향을 받지 않습니다.',
          '**권한:** AnythingLLM은 관리자/루트 권한이 필요하지 않습니다. Ollama는 macOS/Linux의 `/usr/local/bin`(한 번 비밀번호 요청) 또는 Windows의 `%LOCALAPPDATA%`(관리자 없음)에 설치됩니다.',
          '**문서 준비:** 시작을 위해 5~20개의 PDF를 준비하십시오. 더 많은 수량도 작동하지만, 소규모 세트로 검색 품질을 더 빠르게 테스트할 수 있습니다.',
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-prerequisites-en.svg',
        imageCaption: '시스템 요구 사항: RAM 16GB(Llama 3.3 8B Q4 + AnythingLLM 최소), 디스크 여유 공간 20GB, 모델 다운로드를 위한 50Mbps. macOS 12+, Windows 10/11 또는 Linux. AnythingLLM은 관리자 권한이 필요하지 않습니다.',
      },
      step1InstallOllama: {
        id: 'step-1-install-ollama',
        title: '1단계: Ollama 설치 (3분)',
        content:
          '**ollama.com/download에서 운영 체제용 Ollama 설치 파일을 다운로드하여 실행하십시오. 설치 프로그램이 `ollama` CLI를 PATH에 추가하고 백그라운드 서비스를 시작합니다.** 선택할 설정 옵션이 없습니다.',
        items: [
          '**macOS:** `.dmg`를 다운로드하고, Ollama를 응용 프로그램으로 드래그한 후, CLI 헬퍼를 설치하기 위해 한 번 여십시오. 서비스가 실행 중일 때 메뉴 막대에 라마 아이콘이 나타납니다.',
          '**Windows:** `.exe`를 다운로드하고 실행하여 기본값을 수락하십시오. Ollama는 설치 후 백그라운드 서비스로 실행됩니다. 추가 실행이 필요하지 않습니다.',
          '**Linux:** 한 줄 설치: `curl -fsSL https://ollama.com/install.sh | sh`. 스크립트가 systemd 유닛을 등록합니다. `sudo systemctl start ollama`로 시작하십시오.',
          '**확인:** 터미널을 열고 `ollama --version`을 실행하십시오. 버전 문자열이 표시되어야 합니다. 명령을 찾을 수 없는 경우 터미널을 재시작하여 업데이트된 PATH를 로드하십시오.',
        ],
        codeBlock: 'ollama --version\n# ollama version is 0.5.x  (any 0.5+ build works for this tutorial)',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'warning',
            text: '`ollama --version`은 작동하지만 이후 단계에서 "localhost:11434에서 연결 거부됨" 오류가 발생하면 백그라운드 서비스가 자동으로 시작되지 않은 것입니다. macOS: 응용 프로그램에서 앱을 여십시오. Linux: `sudo systemctl start ollama`. Windows: 시스템 트레이에서 Ollama 아이콘을 여십시오.',
          },
        ],
      },
      step2PullModel: {
        id: 'step-2-pull-model',
        title: '2단계: Llama 3.3 8B 다운로드 (8분)',
        content:
          '**터미널에서 `ollama pull llama3.3:8b-instruct-q4_K_M`을 실행하십시오. 이 명령은 4.9GB 양자화 GGUF를 다운로드하고 Ollama에 등록합니다.** 일반 가정용 인터넷 연결에서 전체 30분의 대부분이 이 단계에 소요됩니다.',
        items: [
          '**다운로드 크기:** 약 4.9GB(Q4_K_M 양자화). 50Mbps에서 약 8분, 100Mbps에서 약 4분, 25Mbps에서 약 16분이 소요됩니다.',
          '**진행 상황 확인:** Ollama가 퍼센트와 속도를 출력합니다. 중단되면 다운로드가 재개됩니다. 동일한 명령을 다시 실행하십시오.',
          '**빠른 모델 테스트:** 다운로드 완료 후 `ollama run llama3.3:8b-instruct-q4_K_M`을 실행하고 "2+2는 얼마입니까?"라고 질문하십시오. 합리적인 응답이 반환되는지 확인하십시오. `/bye`를 입력하여 종료하십시오.',
          '**RAM 절약 대안:** RAM이 16GB 대신 8GB인 경우 `ollama pull phi3:mini`(Phi-4 Mini, 디스크 약 2.4GB)를 실행하십시오. 3단계에서 해당 모델 이름을 사용하십시오. 긴 문서에서 품질은 낮지만 시스템은 작동합니다.',
        ],
        codeBlock:
          '# 16GB RAM 권장\nollama pull llama3.3:8b-instruct-q4_K_M\n\n# 8GB RAM 대안\nollama pull phi3:mini\n\n# 빠른 테스트 (/bye를 입력하여 종료)\nollama run llama3.3:8b-instruct-q4_K_M',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: '이미 다른 Ollama 모델이 있습니까? `ollama list`로 모두 확인하십시오. 여러 모델을 설치된 상태로 유지하고 AnythingLLM 워크스페이스 설정에서 전환할 수 있습니다.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-model-options-en.svg',
        imageCaption: 'RAM별 모델 옵션: Llama 3.3 8B Q4_K_M(약 4.9GB, RAM 16GB, 50Mbps에서 약 8분) 권장; Phi-4 Mini Q4(약 2.4GB, RAM 8GB, 약 4분) 메모리 절약형; Mistral Small Q4_K_M(약 4.1GB, RAM 16GB, 약 7분) 대안.',
      },
      step3InstallAnythingLlm: {
        id: 'step-3-install-anythingllm',
        title: '3단계: AnythingLLM Desktop 설치 (4분)',
        content:
          '**useanything.com(또는 anythingllm.com)에서 AnythingLLM Desktop을 다운로드하여 설치 프로그램을 실행하십시오. 앱을 열고 "클라우드 계정 만들기" 프롬프트를 건너뛰십시오. 로컬 전용 모드는 다음 화면에서 제공됩니다.** 설치는 무인으로 진행됩니다.',
        items: [
          '**macOS:** `.dmg`를 다운로드하고, AnythingLLM을 응용 프로그램으로 드래그하여 여십시오. macOS에서 앱이 인정된 개발자의 것인지 확인을 요청할 수 있습니다. 요청 시 시스템 설정 → 개인 정보 보호에서 "열기"를 클릭하십시오.',
          '**Windows:** `.exe` 설치 프로그램을 다운로드하십시오. Windows SmartScreen이 일반적이지 않은 다운로드라고 표시할 수 있습니다. "추가 정보" → "실행"을 클릭하십시오. 앱은 `%LOCALAPPDATA%\anythingllm-desktop`에 설치됩니다(관리자 없음).',
          '**Linux:** `.AppImage`를 다운로드하고, 실행 가능으로 표시(`chmod +x AnythingLLMDesktop.AppImage`)한 후 더블클릭하여 실행하십시오.',
          '**첫 실행 선택:** AnythingLLM은 호스팅된 클라우드 워크스페이스 또는 로컬 전용 설정을 제공합니다. **로컬 설정**을 선택하십시오. 이 옵션이 전체 시스템을 오프라인으로 유지합니다.',
          '**워크스페이스 생성:** 요청 시 첫 번째 워크스페이스에 설명적인 이름("연구-논문", "계약서", "개인-메모")을 지정하십시오. 각 워크스페이스에는 자체 문서 컬렉션과 임베딩 저장소가 있습니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'AnythingLLM의 기본 LLM은 환영 데모용으로만 설계된 매우 작은 내장 모델입니다. 다음 단계에서 로컬 Ollama로 지정합니다. 실제 쿼리에 기본값을 사용하지 마십시오. 응답이 너무 약해서 유용하지 않습니다.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-install-flow-en.svg',
        imageCaption: 'AnythingLLM Desktop 4단계 설치: anythingllm.com에서 다운로드(약 600MB), 관리자 없이 설치, 클라우드 프롬프트 건너뛰기, "Local Setup" 선택으로 모든 데이터를 오프라인으로 유지.',
      },
      step4ConfigureEmbedding: {
        id: 'step-4-configure-embedding',
        title: '4단계: AnythingLLM을 Ollama에 연결하고 임베더 변경 (3분)',
        content:
          '**AnythingLLM 설정 → LLM 기본 설정을 여십시오. 제공자로 "Ollama"를 선택하고, URL을 `http://127.0.0.1:11434`으로 설정하고, 모델 드롭다운에서 `llama3.3:8b-instruct-q4_K_M`을 선택하십시오. 저장하십시오. 그런 다음 임베딩 기본 설정으로 이동하여 기본값에서 Ollama를 통한 `nomic-embed-text`로 변경하십시오.**',
        items: [
          '**LLM 기본 설정 패널:** 제공자 = Ollama, 엔드포인트 = `http://127.0.0.1:11434`, 모델 = `llama3.3:8b-instruct-q4_K_M`. "변경 사항 저장"을 클릭하십시오. 녹색 체크 표시가 연결을 확인합니다.',
          '**임베딩 기본 설정 패널:** 기본값은 "AnythingLLM Native Embedder", 매우 작은 내장 임베더입니다. 제공자를 Ollama로 변경하고, 먼저 터미널에서 `ollama pull nomic-embed-text`를 실행(약 280MB)하고, 패널에서 모델 목록을 새로 고침하고, `nomic-embed-text:latest`를 선택하십시오. 저장하십시오.',
          '**재임베딩 경고:** 이전 임베더로 이미 문서를 추가한 경우 AnythingLLM이 재처리를 요청합니다. 새 설치에는 문서가 없으므로 경고가 나타나지 않습니다.',
          '**벡터 데이터베이스:** 기본값(LanceDB)으로 유지하십시오. 로컬, 파일 기반이며 설정이 필요 없습니다. PGVector 또는 Qdrant가 특별히 필요한 경우에만 변경하십시오.',
        ],
        codeBlock:
          '# 임베딩 기본 설정 패널을 열기 전에 터미널에서 실행하십시오\nollama pull nomic-embed-text',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: '왜 특별히 nomic-embed-text-v1.5입니까? 2026년 5월 기준 500MB 미만의 모든 모델 중 MTEB Retrieval 순위 상위 5위에 올라 있으며, 최신 CPU에서 400~800 청크/초, Apple Silicon에서 2000 청크/초 이상으로 실행되고, Apache 2.0 라이선스입니다. 거의 모든 로컬 RAG 스택의 표준 첫 번째 업그레이드입니다. 대안은 [임베딩 모델 비교](/ko/power-local-llm/best-embedding-models-local-rag-2026)를 참조하십시오.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-config-flow-en.svg',
        imageCaption: '4단계 두 패널: LLM 기본 설정(제공자 = Ollama, 엔드포인트 = http://127.0.0.1:11434, 모델 = llama3.3:8b-instruct-q4_K_M), 그런 다음 임베딩 기본 설정(먼저 nomic-embed-text 다운로드, 그런 다음 Ollama를 통해 nomic-embed-text:latest 선택).',
      },
      step5UploadPdfs: {
        id: 'step-5-upload-pdfs',
        title: '5단계: 첫 번째 PDF 업로드 (5분)',
        content:
          '**워크스페이스를 열고 "문서 업로드"를 클릭하여 5~20개의 PDF를 드래그하십시오. AnythingLLM이 텍스트를 추출하고, 청크로 분할하고(기본 512 토큰, 오버랩 0), 각 청크를 Ollama로 처리하고, 벡터를 LanceDB에 저장합니다.** 진행 표시줄에 분석된 페이지와 처리된 청크가 표시됩니다.',
        items: [
          '**지원 형식:** PDF(텍스트 기반), DOCX, TXT, MD, EPUB, 그리고 URL 스크래핑. 스캔된 이미지 PDF는 먼저 OCR이 필요합니다. 문제 해결 섹션을 참조하십시오.',
          '**속도:** 최신 CPU에서 400~800 청크/초, Apple Silicon에서 2000 청크/초 이상(Ollama가 웜업된 후). 각 약 50페이지의 PDF 20개(총 약 3000 청크)는 최신 CPU에서 5~8초, Apple Silicon에서 1~2초 만에 임베딩이 완료됩니다(업로드 및 파싱 시간 제외). PDF 20개를 업로드, 파싱, 처리하는 데 총 약 5분을 계산하십시오.',
          '**임베딩 중 RAM:** Ollama는 첫 번째 요청 시 임베딩 모델(약 280MB)을 RAM에 로드하고 캐시를 유지합니다. 이후 임베딩은 캐시를 재사용합니다.',
          '**"워크스페이스로 이동":** 업로드 후 AnythingLLM은 문서를 "대기" 풀에 배치합니다. 쿼리 가능하게 하려면 "워크스페이스로 이동" → "저장 및 처리"를 명시적으로 클릭해야 합니다. 이 2단계 흐름은 의도적입니다. 임베딩 비용을 발생시키기 전에 미리 볼 수 있습니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '오래된 OCR 스캔 PDF는 종종 손상된 텍스트나 빈 텍스트 레이어를 포함합니다. 파일은 육안으로 올바르게 보이지만 AnythingLLM은 "[image]" 또는 빈 문자열을 추출합니다. 업로드하기 전에 텍스트 편집기에서 PDF를 열거나(또는 poppler-utils에서 `pdftotext file.pdf -`를 실행) 텍스트 레이어가 있는지 확인하십시오.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-embed-flow-en.svg',
        imageCaption: 'PDF 업로드에서 쿼리까지 5단계: PDF 업로드(드래그 앤 드롭) → 텍스트 레이어 추출 → 청크 분할(1000 토큰 / 200 오버랩) → Ollama를 통해 nomic-embed-text로 처리 → LanceDB에 저장 및 질문. 속도: CPU 400~800 청크/초, Apple Silicon 2000+.',
      },
      step6TestQueries: {
        id: 'step-6-test-queries',
        title: '6단계: 쿼리 테스트 (5분)',
        content:
          '**워크스페이스 채팅에 질문을 입력하십시오. AnythingLLM이 질문을 벡터화하고, LanceDB에서 상위 N개 청크를 검색하고, 해당 청크를 컨텍스트로 포함한 프롬프트를 구성하고, Ollama에 전송하여 응답을 표시합니다.** 16GB RAM 노트북에서 쿼리당 지연 시간은 약 3~10초입니다.',
        items: [
          '**팩트 검색 쿼리로 시작하십시오:** "PDF 중 하나에서 [특정 용어]는 무엇을 의미합니까?" 이것은 검색 앵커링을 테스트합니다. 응답이 PDF를 인용하고 정확한 표현을 재현해야 합니다.',
          '**그런 다음 종합 쿼리:** "[문서 저자/제목]의 주요 주장을 요약하십시오." 이것은 모델이 여러 청크를 얼마나 잘 통합하는지 테스트합니다.',
          '**그런 다음 비교 쿼리**(PDF에 비교 가능한 콘텐츠가 있는 경우에만): "[문서 A]와 [문서 B]가 [주제]를 어떻게 다르게 다루는지 비교하십시오." 이것은 문서 간 검색을 테스트합니다.',
          '**인용 확인:** AnythingLLM은 각 응답 아래에 소스 청크를 표시합니다. 클릭하여 모델이 올바른 구절을 기반으로 하는지 확인하십시오. 인용이 무관련한 경우 검색이 손상된 것입니다. 7단계를 참조하십시오.',
        ],
      },
      step7TuneChunks: {
        id: 'step-7-tune-chunks',
        title: '7단계: 청크 크기 조정 (2분)',
        content:
          '**워크스페이스 설정 → 벡터 데이터베이스를 여십시오. 청크 크기를 512에서 1000으로, 청크 오버랩을 0에서 200으로 변경하십시오. 저장을 클릭하고 문서를 재처리하십시오(인터페이스에서 요청합니다).** 이것이 AnythingLLM에서 검색 품질을 향상시키는 주요 매개변수입니다.',
        items: [
          '**512/0 대신 1000/200인 이유:** PDF의 단락과 섹션은 512 토큰에 깔끔하게 맞는 경우가 드뭅니다. 200 토큰 오버랩은 청크 경계를 넘는 문장이 적어도 하나의 인접 청크에 완전히 나타나므로 검색이 이를 포착합니다.',
          '**재임베딩 비용:** PDF 20개/3000 청크 세트가 약 5초 만에 재처리됩니다. 더 큰 세트는 비례적으로 더 오래 걸립니다. 청크 저장소가 덮어쓰여집니다, 추가되지 않습니다.',
          '**검색 Top-K:** 기본 Top-K는 4입니다(상위 4개 일치 청크가 컨텍스트가 됩니다). 응답이 충분한 근거가 없어 보이면 6~8로 올리십시오. 모델이 노이즈 청크에 의해 산만해지면 2~3으로 낮추십시오.',
          '**프롬프트 템플릿:** AnythingLLM은 워크스페이스 → 채팅 설정 → 프롬프트에서 시스템 프롬프트를 노출합니다. 기본값은 괜찮습니다. 해결할 구체적인 실패가 있을 때만 조정하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '경험적 조정이 이론을 능가합니다: 청크 크기 변경 전후에 동일한 5가지 테스트 쿼리를 실행하고 비교하십시오. 1000/200에서 검색이 더 나쁘면 매우 짧은 문서(한 페이지 메모, 코드 독스트링)가 있을 가능성이 높습니다. 대신 256/64를 시도하십시오.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-chunk-settings-en.svg',
        imageCaption: '기본 vs. 권장 청크 설정: 기본값 512/0/Top-K 4는 경계에서 문장 단편을 남깁니다. 권장값 1000 토큰 / 200 오버랩 / Top-K 4~6은 오버랩 창 내에서 경계 문장을 포착합니다. PDF 20개 재처리에 약 5초 소요.',
      },
      sampleQueries: {
        id: 'sample-queries',
        title: '실제 응답은 어떻게 보여야 합니까?',
        content:
          '**올바르게 조정된 로컬 RAG 시스템은 팩트 검색 쿼리에 소스에서의 직접 인용으로 응답하고, 요청 시 종합하며, 사용한 청크를 인용합니다.** 연구 논문 워크스페이스에서의 세 가지 예시 쿼리와 정상적인 시스템이 반환하는 것:',
        rows: [
          {
            '쿼리 유형': '팩트 검색',
            '예시': 'Smith et al. 2024는 어떤 샘플 크기를 사용했습니까?',
            '정상 응답 패턴': '방법론 섹션의 직접 인용 + 청크 참조',
            '실패 패턴': '인용 없는 일반 응답("연구자들은 보통 100~500명의 참가자를 사용합니다")',
          },
          {
            '쿼리 유형': '종합',
            '예시': '이 논문의 주요 기여를 요약하십시오.',
            '정상 응답 패턴': '초록 및 결론 청크에서 추출한 3~5문장',
            '실패 패턴': '제목만 반복하거나 초록의 한 문장만 인용',
          },
          {
            '쿼리 유형': '문서 간',
            '예시': 'Smith와 Jones는 청크 오버랩에 대해 어떻게 다릅니까?',
            '정상 응답 패턴': '명시적 귀속으로 두 논문의 인용',
            '실패 패턴': '한 논문만 인용하거나 청크에 없는 불일치를 꾸며냄',
          },
        ],
        columns: ['쿼리 유형', '예시', '정상 응답 패턴', '실패 패턴'],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '정상적인 로컬 RAG 응답은 팩트 검색에 소스 청크를 문자 그대로 인용하고, 요약 질문에 청크 간 종합을 하며, 사용한 특정 청크 ID를 인용합니다. 인용 없는 일반 응답은 모델 문제가 아닌 검색 문제를 나타냅니다.',
          },
          {
            type: 'plain-terms',
            text: '응답이 "연구자들은 보통 100~500명의 참가자를 사용합니다" 대신 "Smith et al.은 287명의 참가자를 사용했습니다(방법론, 4쪽)"라고 말해야 합니다. 그렇지 않으면 검색이 손상된 것이며 모델이 학습 데이터로 즉흥적으로 답하고 있는 것입니다. 응답 모델을 변경하기 전에 먼저 검색을 수정하십시오(청크 크기, 임베더, 유사도 임계값).',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '이 세 가지 쿼리 패턴을 검색 설정 변경 후마다 테스트 세트로 사용하십시오. 팩트 검색은 실패하지만 종합이 작동하면 청크가 너무 큽니다. 종합이 실패하지만 팩트 검색이 작동하면 top-k가 너무 낮습니다. 실패 패턴이 어떤 매개변수를 조정해야 할지 알려줍니다.',
          },
        ],
        image: '/images/local-rag-on-your-pdfs-step-by-step-query-types-en.svg',
        imageCaption: '3가지 RAG 쿼리 유형: 팩트 검색(직접 인용 + 참조 = 정상, 일반 응답 = 검색 손상), 종합(초록 + 결론에서 3~5문장 = 정상), 문서 간(두 논문 인용 = 정상, 하나만 인용하거나 꾸며냄 = 손상). 녹색 = 정상, 빨간색 = 먼저 검색 수정.',
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: '문제가 발생했을 때: 여섯 가지 일반적인 실패 모드와 해결책',
        content:
          '**대부분의 실패는 이 여섯 가지 범주 중 하나에 해당합니다. 해당 행에서 증상을 파악하고 해결책을 적용하십시오.**',
        rows: [
          {
            '증상': 'AnythingLLM에 "Ollama에 연결할 수 없음" 표시',
            '가능한 원인': 'Ollama 서비스가 실행 중이지 않거나 엔드포인트가 잘못됨',
            '해결책': '`ollama serve`를 실행하십시오(또는 앱/서비스를 재시작하십시오). 엔드포인트가 `localhost:11434`가 아닌 `http://127.0.0.1:11434`인지 확인하십시오(Windows에서 별칭이 가끔 실패함).',
          },
          {
            '증상': '모델 다운로드가 0% 또는 99%에서 멈춤',
            '가능한 원인': 'CDN 엣지 문제 또는 디스크 가득 참',
            '해결책': 'Ctrl+C로 취소하고, `df -h`로 디스크 공간을 확인하고, 동일한 `ollama pull`을 다시 실행하십시오. Ollama가 마지막 바이트에서 재개합니다.',
          },
          {
            '증상': '임베딩 단계가 멈춘 것처럼 보임',
            '가능한 원인': 'Ollama가 처음으로 임베딩 모델을 로드하는 중',
            '해결책': '30~60초 기다리십시오. 처음 모델 로드는 디스크 속도에 따라 10~40초가 소요됩니다. 이후 임베딩은 빠릅니다.',
          },
          {
            '증상': '검색이 쿼리와 관련 없는 청크를 반환',
            '가능한 원인': '기본 512/0 청킹 + 약한 기본 임베더',
            '해결책': '4단계(nomic-embed-text)와 7단계(청킹 1000/200)가 모두 적용되었는지 확인하십시오. 워크스페이스를 재처리하십시오.',
          },
          {
            '증상': '응답이 짧거나, 일반적이거나, 소스 작업을 거부',
            '가능한 원인': '선택된 LLM이 여전히 기본 소형 모델이거나 컨텍스트가 너무 작음',
            '해결책': 'LLM 기본 설정에 `llama3.3:8b-instruct-q4_K_M`이 표시되는지 확인하십시오. top-K를 4에서 6으로 올리십시오.',
          },
          {
            '증상': '스캔된 이미지 PDF가 업로드되지만 빈 청크 생성',
            '가능한 원인': 'PDF에 텍스트 레이어가 없음. 순수 래스터 이미지',
            '해결책': '먼저 PDF에 OCR을 적용하십시오. macOS: `ocrmypdf input.pdf output.pdf`. Linux/Windows: Tesseract + ocrmypdf를 설치하십시오. 그런 다음 OCR 처리된 파일을 다시 업로드하십시오.',
          },
        ],
        columns: ['증상', '가능한 원인', '해결책'],
        image: '/images/local-rag-on-your-pdfs-step-by-step-troubleshooting-en.svg',
        imageCaption: '여섯 가지 실패 모드: 연결 거부됨(ollama serve 실행), 다운로드 멈춤(Ctrl+C → df -h → 재시도), 임베딩 멈춤(30~60초 대기), 관련 없는 청크(4단계 + 7단계 적용), 짧은/일반적 응답(llama3.3:8b-instruct-q4_K_M 설정, Top-K 올리기), 스캔 PDF 빈 청크(먼저 ocrmypdf 실행).',
      },
      regionalContext: {
        id: 'regional-context',
        title: '지역 컨텍스트: 한국의 데이터 프라이버시',
        content:
          '이 같은 로컬 RAG 시스템은 한국의 핵심 데이터 프라이버시 요구 사항을 직접적으로 충족합니다. 데이터를 외부 제공자에게 전송하는 클라우드 RAG 솔루션과 달리, 모든 것이 기기에 유지됩니다.',
        items: [
          '**개인정보보호법(PIPA) 준수:** 한국의 개인정보보호법(PIPA)은 개인 데이터 처리에 엄격한 기준을 요구합니다. 외부로 데이터를 전송하지 않는 로컬 RAG 시스템은 이 요구 사항을 직접적으로 충족합니다. 클라우드 RAG 솔루션과 달리 제3자 데이터 처리 계약이 필요하지 않습니다.',
          '**규제 산업:** 금융, 의료, 법률 및 공공 부문 조직은 로컬 RAG를 통해 혜택을 받습니다. 클라우드 API 의존성 없음, 데이터 국외 이전 없음, 로컬 규정 즉시 준수.',
          '**일반적인 한국 기업 시나리오:** 5년치 고객 계약서를 보관하고 AnythingLLM으로 인덱싱하여 실사 검색 및 고객 데이터 쿼리를 완전히 로컬에서 실행하십시오. 운영 비용: 사실상 제로. 프로덕션 설치: 노트북이나 로컬 서버에서 30분.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ollama가 설치되지 않으면 어떻게 합니까?',
            a: 'macOS에서 가장 일반적인 실패는 Gatekeeper가 서명되지 않은 헬퍼를 차단하는 것입니다. 시스템 설정 → 개인 정보 보호 및 보안을 열고 "그래도 열기"를 클릭하십시오. Windows에서 Defender SmartScreen이 설치 프로그램을 격리할 수 있습니다. 마우스 오른쪽 버튼 클릭 → 속성 → 차단 해제하십시오. Linux에서 설치 스크립트는 systemd 유닛을 작성하기 위해 sudo가 필요합니다. sudo를 사용할 수 없는 경우 github.com/ollama/ollama/releases에서 정적 바이너리를 다운로드하여 PATH에 수동으로 배치하십시오.',
          },
          {
            q: '임베딩 단계가 왜 느립니까?',
            a: '세션의 첫 번째 임베딩은 Ollama가 임베딩 모델을 지연 로드하기 때문에 느립니다(디스크 속도에 따라 10~40초). 그 후 임베딩은 최신 CPU에서 400~800 청크/초, Apple Silicon에서 2000 청크/초 이상으로 실행됩니다. 지속 처리량이 100 청크/초 미만이면 모델이 디스크 가상 메모리를 사용하고 있을 가능성이 높습니다. 다른 애플리케이션을 닫아 RAM을 확보하고 다시 시도하십시오.',
          },
          {
            q: '한 번에 몇 개의 PDF를 업로드할 수 있습니까?',
            a: 'AnythingLLM은 단일 드래그 앤 드롭으로 수백 개의 파일을 허용합니다. 실용적인 한계는 파싱 단계 중 RAM입니다. 평균 크기(각 50페이지)의 PDF 100개에 대해 최대 약 1GB. 처리 후 디스크의 벡터 저장소는 작습니다(PDF 100페이지당 약 10~30MB). PDF 1000개 이상의 경우 [로컬에서 PDF 1000개와 채팅하기](/ko/power-local-llm/chat-with-1000-pdfs-locally) 전용 가이드를 참조하십시오.',
          },
          {
            q: '비밀번호 보호된 PDF와 함께 사용할 수 있습니까?',
            a: 'AnythingLLM은 비밀번호 보호된 PDF를 직접 해독할 수 없습니다. 먼저 `qpdf --password=비밀번호 --decrypt input.pdf output.pdf`로 해독하십시오(qpdf는 무료, 세 가지 운영 체제 모두 사용 가능). 그런 다음 보호되지 않은 파일을 업로드하십시오. 위협 모델이 필요한 경우 임베딩 후 보호되지 않은 복사본을 삭제하십시오. 임베딩 자체는 사람이 읽을 수 없습니다.',
          },
          {
            q: '검색이 잘못된 청크를 반환하면 어떻게 합니까?',
            a: '영향 순서로 세 가지 매개변수: 기본 임베더를 nomic-embed-text로 변경(4단계), 청킹을 512/0에서 1000/200으로 변경하고 재처리(7단계), 워크스페이스 설정에서 top-K를 4에서 6으로 올리기. 세 가지 모두 적용 후에도 검색이 실패하면 문서에 전처리가 필요할 수 있습니다. 머리글과 바닥글을 제거하고, 공백을 정규화하거나, 매우 긴 PDF를 챕터별 파일로 분할하십시오.',
          },
          {
            q: 'Llama 3.3 8B 외에 다른 모델을 사용해야 합니까?',
            a: 'Llama 3.3 8B Q4_K_M은 2026년 16GB 시스템에서 최고의 품질 대 RAM 비율을 제공합니다. RAM 8GB에서는 Phi-4 Mini Q4_K_M(약 2.4GB)을 사용하십시오. RAM 24GB 이상에서는 긴 문서에서 현저히 나은 종합을 위해 Qwen 3 14B Q4를 시도하십시오. 다국어 워크로드의 경우 Mistral Nemo 12B가 Llama 3.3보다 한국어 콘텐츠를 더 잘 처리합니다.',
          },
          {
            q: '나중에 모델을 어떻게 업데이트합니까?',
            a: '`ollama pull llama3.3:8b-instruct-q4_K_M`을 다시 실행하여 최신 버전을 가져오고 AnythingLLM을 재시작하여 모델 버전을 다시 감지하게 하십시오. 완전히 다른 모델로 전환하려면 `ollama pull <새-모델>`을 실행하고 AnythingLLM 설정의 LLM 기본 설정 드롭다운을 변경하십시오. 임베딩은 임베더에만 의존하고 응답 모델에는 의존하지 않으므로 재처리가 필요하지 않습니다.',
          },
          {
            q: '다른 기기로 이동할 수 있습니까?',
            a: '예. Ollama 모델은 `~/.ollama/models`(macOS/Linux) 또는 `%USERPROFILE%\.ollama\models`(Windows)에 있습니다. 폴더를 복사하십시오. AnythingLLM 워크스페이스는 `~/.anythingllm/storage`에 있습니다. 이것도 복사하십시오. 새 기기에서 Ollama와 AnythingLLM Desktop을 설치하고 복사된 폴더를 제자리에 놓으십시오. 워크스페이스와 임베딩이 동일하게 복원됩니다.',
          },
          {
            q: 'PDF가 스캔된 이미지인 경우 작동합니까?',
            a: '직접적으로는 작동하지 않습니다. AnythingLLM은 텍스트를 추출하지만 이미지에서 OCR을 수행할 수 없습니다. `ocrmypdf input.pdf output.pdf`로 스캔된 PDF를 전처리하십시오(크로스 플랫폼, MIT 라이선스, Tesseract 사용). Apple Silicon에서 `ocrmypdf -l eng+kor`는 70개 이상의 언어를 지원합니다. OCR 후 출력 PDF에는 원본 이미지와 검색 가능한 텍스트 레이어가 모두 포함되어 있으며 AnythingLLM이 텍스트를 올바르게 추출합니다.',
          },
          {
            q: '문서 데이터베이스를 어떻게 백업합니까?',
            a: 'AnythingLLM은 모든 것을 `~/.anythingllm/storage`(macOS/Linux) 또는 `%LOCALAPPDATA%\anythingllm-desktop\storage`(Windows)에 저장합니다. 해당 폴더를 tar/zip으로 압축하여 백업 장치에 복사하십시오. 폴더에는 원본 문서, 파싱된 청크, 벡터 인덱스 및 채팅 기록이 포함됩니다. 복원은 다시 복사하고 재시작하는 것입니다. 특별한 가져오기 흐름이 필요하지 않습니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[AnythingLLM vs PrivateGPT vs Open WebUI: 최고의 로컬 RAG](/ko/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — AnythingLLM을 선택하기 전에 대안을 평가하려는 독자를 위해.',
          '[2026년 로컬 RAG를 위한 최고의 임베딩 모델](/ko/power-local-llm/best-embedding-models-local-rag-2026) — nomic-embed-text보다 나은 검색을 원하는 독자를 위해.',
          '[내장 RAG가 있는 로컬 AI 앱: 파일과 채팅하기 (설정 없음)](/ko/power-local-llm/local-ai-app-with-built-in-rag) — AnythingLLM보다 더 간단한 것을 찾는 독자를 위해.',
          '[RAG 설명: 실제 데이터로 AI 응답 기반 세우기 (2026)](/ko/prompt-engineering/rag-explained) — RAG가 무엇인지, 왜 각 구성 요소가 중요한지에 대한 개념적 권위.',
          '[2026년 로컬 LLM 하드웨어 가이드](/ko/local-llms/local-llm-hardware-guide-2026) — 소프트웨어만이 아닌 노트북을 선택하는 경우를 위한 하드웨어 크기 조정 참조.',
          '[Power Local LLM 허브](/ko/power-local-llm) — 클러스터의 전체 가이드 라이브러리.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/ko/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'headline': '30분 만에 PDF에 로컬 RAG 구축하기 (Ollama + AnythingLLM)',
      'description':
        '단계별 안내: Ollama 설치, AnythingLLM 설정, PDF 업로드 및 대화. 총 소요 시간 30분. 16GB RAM 노트북에서 테스트 완료. 2026년 5월.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
      },
      'inLanguage': 'ko',
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'Llama 3.3 8B' },
        { '@type': 'Thing', 'name': 'nomic-embed-text' },
        { '@type': 'Thing', 'name': 'Retrieval-augmented generation' },
        { '@type': 'Thing', 'name': '로컬 RAG' },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': '홈',
          'item': 'https://www.promptquorum.com/ko',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Power Local LLM',
          'item': 'https://www.promptquorum.com/ko/power-local-llm',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': '30분 만에 PDF에 로컬 RAG 구축하기',
          'item': 'https://www.promptquorum.com/ko/power-local-llm/local-rag-on-your-pdfs-step-by-step',
        },
      ],
    },
  },
}
