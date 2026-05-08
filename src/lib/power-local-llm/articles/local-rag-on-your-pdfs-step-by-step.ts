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
    seoTitle: 'Local RAG on PDFs in 30 Minutes 2026: Ollama + AnythingLLM',
    intro:
      'A complete walk-through of the fastest path to a working personal RAG system on a 16 GB RAM laptop. Stack: Ollama, Llama 3.3 8B, AnythingLLM, nomic-embed-text. Total elapsed time: 30 minutes from blank machine to chatting with your own PDFs.',
    metaDescription:
      'Step-by-step: install Ollama, set up AnythingLLM, drop in PDFs, chat with them. Total time 30 minutes. Tested on a 16 GB RAM laptop. May 2026.',
    twitterDescription:
      '30 minutes from blank laptop to chatting with your own PDFs. Ollama + Llama 3.3 8B + AnythingLLM + nomic-embed-text. Tested on 16 GB RAM.',
    current_models_mentioned: ['Llama 3.3 8B', 'nomic-embed-text-v1.5', 'Phi-4 Mini', 'Mistral 7B'],
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
            a: 'Llama 3.3 8B Q4_K_M is the best quality-per-RAM trade-off in 2026 for 16 GB systems. On 8 GB RAM use Phi-4 Mini Q4_K_M (~2.4 GB). On 24 GB+ try Qwen 2.5 14B Q4 for noticeably better synthesis on long documents. For multilingual workloads, Mistral Nemo 12B handles non-English better than Llama 3.3.',
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
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Build a local RAG system on your PDFs in 30 minutes',
      'description':
        'Install Ollama, pull Llama 3.3 8B, install AnythingLLM, configure embedding, upload PDFs, test queries, tune chunk size.',
      'totalTime': 'PT30M',
      'supply': [
        { '@type': 'HowToSupply', 'name': '16 GB RAM laptop' },
        { '@type': 'HowToSupply', 'name': '20 GB free disk space' },
        { '@type': 'HowToSupply', 'name': 'Internet connection (50 Mbps recommended)' },
        { '@type': 'HowToSupply', 'name': '5–20 PDFs to start' },
      ],
      'tool': [
        { '@type': 'HowToTool', 'name': 'Ollama 0.5+' },
        { '@type': 'HowToTool', 'name': 'AnythingLLM Desktop' },
        { '@type': 'HowToTool', 'name': 'Llama 3.3 8B Instruct (Q4_K_M)' },
        { '@type': 'HowToTool', 'name': 'nomic-embed-text-v1.5' },
      ],
      'step': [
        {
          '@type': 'HowToStep',
          'position': 1,
          'name': 'Install Ollama',
          'text': 'Download the Ollama installer for your OS from ollama.com/download and run it. The installer adds the ollama CLI to PATH and starts a background service. Verify with `ollama --version`.',
          'url': 'https://www.promptquorum.com/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-1-install-ollama',
        },
        {
          '@type': 'HowToStep',
          'position': 2,
          'name': 'Pull Llama 3.3 8B',
          'text': 'Run `ollama pull llama3.3:8b-instruct-q4_K_M` to download the 4.9 GB quantized model. About 8 minutes on a 50 Mbps connection.',
          'url': 'https://www.promptquorum.com/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-2-pull-model',
        },
        {
          '@type': 'HowToStep',
          'position': 3,
          'name': 'Install AnythingLLM Desktop',
          'text': 'Download AnythingLLM Desktop and run the installer. Launch the app and pick "Local Setup" on the first-run screen. Create a workspace.',
          'url': 'https://www.promptquorum.com/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-3-install-anythingllm',
        },
        {
          '@type': 'HowToStep',
          'position': 4,
          'name': 'Configure embedding model',
          'text': 'In AnythingLLM Settings, set LLM Preference to Ollama at http://127.0.0.1:11434 with model llama3.3:8b-instruct-q4_K_M. Run `ollama pull nomic-embed-text` and set Embedding Preference to that model.',
          'url': 'https://www.promptquorum.com/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-4-configure-embedding',
        },
        {
          '@type': 'HowToStep',
          'position': 5,
          'name': 'Upload first PDFs',
          'text': 'Open the workspace, click "Upload Documents", drag in 5–20 PDFs. Click "Move to Workspace" then "Save and Embed". Wait for the progress bar.',
          'url': 'https://www.promptquorum.com/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-5-upload-pdfs',
        },
        {
          '@type': 'HowToStep',
          'position': 6,
          'name': 'Test queries',
          'text': 'Type a fact-recall question in the workspace chat. Verify the answer cites a chunk from your PDF. Try a synthesis query and a cross-document query.',
          'url': 'https://www.promptquorum.com/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-6-test-queries',
        },
        {
          '@type': 'HowToStep',
          'position': 7,
          'name': 'Tune chunk size',
          'text': 'Open Workspace Settings → Vector Database. Set Chunk Size to 1000 and Chunk Overlap to 200. Re-embed when prompted.',
          'url': 'https://www.promptquorum.com/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-7-tune-chunks',
        },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What if Ollama fails to install?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'On macOS, the most common failure is Gatekeeper blocking an unsigned helper — open System Settings → Privacy & Security and click "Allow Anyway". On Windows, Defender SmartScreen may quarantine the installer; right-click → Properties → Unblock. On Linux, the install script needs sudo to write the systemd unit; if sudo is not available, download the static binary from github.com/ollama/ollama/releases and place it on your PATH manually.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Why is the embedding step slow?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'The first embed of a session is slow because Ollama lazy-loads the embedding model into RAM (10–40 seconds depending on disk speed). After that, embedding runs at 400–800 chunks per second on a modern CPU and 2000+ chunks per second on Apple Silicon. If sustained throughput is below 100 chunks per second, the model is probably running on disk-backed swap — close other apps to free RAM and retry.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How many PDFs can I upload at once?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM accepts hundreds of files in a single drag-and-drop. The practical limit is RAM during the parse step: about 1 GB peak for 100 medium-sized PDFs (50 pages each). Once embedded, the on-disk vector store is small (10–30 MB per 100 PDF pages). For 1000+ PDFs, see the dedicated guide on chatting with 1000 PDFs locally.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I use this for password-protected PDFs?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM cannot decrypt password-protected PDFs directly. Decrypt them first with `qpdf --password=YOURPASSWORD --decrypt input.pdf output.pdf` (qpdf is free, available on all three operating systems), then upload the unprotected output. Delete the unprotected copy after embedding if your threat model requires it — the embeddings themselves are not human-readable.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What if my retrieval returns wrong chunks?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Three knobs in order of impact: switch from the default embedder to nomic-embed-text (Step 4), change chunking from 512/0 to 1000/200 and re-embed (Step 7), and bump top-K from 4 to 6 in Workspace Settings. If retrieval is still off after all three, your documents may need pre-processing — strip headers and footers, normalize whitespace, or split very long PDFs into per-chapter files.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Should I use a different model than Llama 3.3 8B?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Llama 3.3 8B Q4_K_M is the best quality-per-RAM trade-off in 2026 for 16 GB systems. On 8 GB RAM use Phi-4 Mini Q4_K_M (about 2.4 GB). On 24 GB+ try Qwen 2.5 14B Q4 for noticeably better synthesis on long documents. For multilingual workloads, Mistral Nemo 12B handles non-English better than Llama 3.3.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How do I update the model later?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Run `ollama pull llama3.3:8b-instruct-q4_K_M` again to get the latest build, then restart AnythingLLM so it re-detects the model version. To switch to a different model entirely, run `ollama pull <new-model>` then change the LLM Preference dropdown in AnythingLLM Settings — no re-embedding needed because embeddings depend only on the embedder, not the answer model.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I move this to a different computer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Yes. Ollama models live in ~/.ollama/models on macOS and Linux, or %USERPROFILE%\\.ollama\\models on Windows — copy the folder. AnythingLLM workspaces live in ~/.anythingllm/storage — copy that too. On the new machine, install Ollama and AnythingLLM Desktop, then drop the copied folders into place. Workspaces and embeddings come up identically.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does this work if my PDFs are scanned images?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Not directly — AnythingLLM extracts text but cannot OCR images. Pre-process scanned PDFs with `ocrmypdf input.pdf output.pdf` (cross-platform, MIT-licensed, uses Tesseract under the hood). On Apple Silicon, `ocrmypdf -l eng+deu+fra` handles 70+ languages. After OCR, the output PDF has both the original images and a searchable text layer, and AnythingLLM extracts the text correctly.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How do I back up my document database?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM stores everything under ~/.anythingllm/storage on macOS and Linux, or %LOCALAPPDATA%\\anythingllm-desktop\\storage on Windows. Tar or zip that folder and copy it to a backup drive. The folder includes original documents, parsed chunks, vector indexes, and chat history. Restoring is a copy-back-and-restart — no special import flow needed.',
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
    theme: 'RAG & Dokument-Chat',
    title: 'Lokales RAG auf deinen PDFs in 30 Minuten (Ollama + AnythingLLM)',
    seoTitle: 'Lokales RAG auf PDFs in 30 Minuten 2026: Ollama + AnythingLLM',
    intro:
      'Eine vollständige Anleitung zum schnellsten Weg zu einem funktionsfähigen persönlichen RAG-System auf einem Laptop mit 16 GB RAM. Stack: Ollama, Llama 3.3 8B, AnythingLLM, nomic-embed-text. Gesamtdauer: 30 Minuten vom leeren System bis zum Chatten mit deinen eigenen PDFs.',
    metaDescription:
      'Schritt-für-Schritt: Ollama installieren, AnythingLLM einrichten, PDFs hochladen, chatten. Gesamtzeit 30 Minuten. Getestet auf 16-GB-RAM-Laptop. Mai 2026.',
    twitterDescription:
      '30 Minuten vom leeren Laptop bis zum Chatten mit deinen eigenen PDFs. Ollama + Llama 3.3 8B + AnythingLLM + nomic-embed-text. Getestet auf 16 GB RAM.',
    current_models_mentioned: ['Llama 3.3 8B', 'nomic-embed-text-v1.5', 'Phi-4 Mini', 'Mistral 7B'],
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
            text: 'Warum nomic-embed-text-v1.5 speziell? Im Mai 2026 liegt es in den Top 5 der MTEB-Retrieval-Leaderboard für jedes Modell unter 500 MB, läuft mit 400–800 Chunks/Sek. auf einer modernen CPU und 2000+ Chunks/Sek. auf Apple Silicon und ist Apache-2.0-lizenziert. Es ist das Standard-erste-Upgrade für fast jeden lokalen RAG-Stack — siehe den [Embedding-Modell-Vergleich](/power-local-llm/best-embedding-models-local-rag-2026?lang=de) für Alternativen.',
          },
        ],
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
            a: 'AnythingLLM akzeptiert hunderte Dateien in einem einzelnen Drag-and-Drop. Die praktische Grenze ist RAM während des Parse-Schritts: ~1 GB Peak für 100 mittelgroße PDFs (50 Seiten pro Stück). Nach dem Embedding ist der On-Disk-Vector-Store klein (~10–30 MB pro 100 PDF-Seiten). Für 1000+ PDFs siehe die Spezial-Anleitung [Chatten mit 1000 PDFs lokal](/power-local-llm/chat-with-1000-pdfs-locally?lang=de).',
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
            a: 'Llama 3.3 8B Q4_K_M ist das beste Qualitäts-pro-RAM-Verhältnis 2026 für 16 GB Systeme. Auf 8 GB RAM verwende Phi-4 Mini Q4_K_M (~2,4 GB). Auf 24 GB+ probiere Qwen 2.5 14B Q4 für merklich bessere Synthese bei langen Dokumenten. Für mehrsprachige Arbeitsbereiche, Mistral Nemo 12B behandelt Nicht-Englisch besser als Llama 3.3.',
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
          '[AnythingLLM vs PrivateGPT vs Open WebUI: Best Local RAG](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag?lang=de) — für Leser, die Alternativen evaluieren wollen bevor sie sich auf AnythingLLM festlegen.',
          '[Best Embedding Models for Local RAG in 2026](/power-local-llm/best-embedding-models-local-rag-2026?lang=de) — für Leser, die besseren Abruf als nomic-embed-text wollen.',
          '[Local AI Apps With Built-In RAG: Chat With Your Files (No Setup)](/power-local-llm/local-ai-app-with-built-in-rag?lang=de) — für Leser, die merken, dass sie noch einfacher als AnythingLLM wollen.',
          '[RAG Explained: How to Ground AI Answers in Real Data (2026)](/prompt-engineering/rag-explained?lang=de) — Konzept-Autorität auf was RAG ist und warum jede Komponente wichtig ist.',
          '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026?lang=de) — Hardware-Sizing-Referenz falls du den Laptop wählst, nicht nur die Software.',
          '[Power Local LLM Hub](/power-local-llm?lang=de) — volle Guide-Bibliothek für den Cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/de/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'inLanguage': 'de',
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
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'inLanguage': 'de',
      'url': 'https://www.promptquorum.com/de/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'name': 'Baue ein lokales RAG-System für deine PDFs in 30 Minuten',
      'description':
        'Installiere Ollama, ziehe Llama 3.3 8B, installiere AnythingLLM, konfiguriere das Embedding-Modell, lade PDFs hoch, teste Queries, stimme Chunk-Größe ab.',
      'totalTime': 'PT30M',
      'supply': [
        { '@type': 'HowToSupply', 'name': '16 GB RAM Laptop' },
        { '@type': 'HowToSupply', 'name': '20 GB freier Disk-Speicher' },
        { '@type': 'HowToSupply', 'name': 'Internet-Verbindung (50 Mbps empfohlen)' },
        { '@type': 'HowToSupply', 'name': '5–20 PDFs zum Starten' },
      ],
      'tool': [
        { '@type': 'HowToTool', 'name': 'Ollama 0.5+' },
        { '@type': 'HowToTool', 'name': 'AnythingLLM Desktop' },
        { '@type': 'HowToTool', 'name': 'Llama 3.3 8B Instruct (Q4_K_M)' },
        { '@type': 'HowToTool', 'name': 'nomic-embed-text-v1.5' },
      ],
      'step': [
        {
          '@type': 'HowToStep',
          'position': 1,
          'name': 'Ollama installieren',
          'text': 'Lade das Ollama-Installationsprogramm für dein OS von ollama.com/download herunter und führe es aus. Das Installationsprogramm fügt die ollama CLI zu PATH hinzu und startet einen Hintergrund-Service. Überprüfe mit `ollama --version`.',
          'url': 'https://www.promptquorum.com/de/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-1-install-ollama',
        },
        {
          '@type': 'HowToStep',
          'position': 2,
          'name': 'Llama 3.3 8B ziehen',
          'text': 'Führe `ollama pull llama3.3:8b-instruct-q4_K_M` aus um das quantisierte 4,9 GB Modell herunterzuladen. Ungefähr 8 Minuten bei 50 Mbps.',
          'url': 'https://www.promptquorum.com/de/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-2-pull-model',
        },
        {
          '@type': 'HowToStep',
          'position': 3,
          'name': 'AnythingLLM Desktop installieren',
          'text': 'Lade AnythingLLM Desktop herunter und führe das Installationsprogramm aus. Starte die App und wähle "Lokale Einrichtung" auf dem ersten Bildschirm. Erstelle einen Workspace.',
          'url': 'https://www.promptquorum.com/de/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-3-install-anythingllm',
        },
        {
          '@type': 'HowToStep',
          'position': 4,
          'name': 'Embedding-Modell konfigurieren',
          'text': 'In AnythingLLM-Einstellungen, stelle LLM-Präferenz auf Ollama bei http://127.0.0.1:11434 mit Modell llama3.3:8b-instruct-q4_K_M. Führe `ollama pull nomic-embed-text` aus und stelle Embedding-Präferenz auf dieses Modell.',
          'url': 'https://www.promptquorum.com/de/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-4-configure-embedding',
        },
        {
          '@type': 'HowToStep',
          'position': 5,
          'name': 'Erste PDFs hochladen',
          'text': 'Öffne den Workspace, klicke "Dokumente hochladen", ziehe 5–20 PDFs rein. Klicke "In Workspace verschieben" dann "Speichern und Embedden". Warte auf die Fortschrittsleiste.',
          'url': 'https://www.promptquorum.com/de/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-5-upload-pdfs',
        },
        {
          '@type': 'HowToStep',
          'position': 6,
          'name': 'Queries testen',
          'text': 'Gib eine Fakten-Abruf-Frage in den Workspace-Chat ein. Überprüfe, dass die Antwort einen Chunk aus deiner PDF zitiert. Probiere eine Synthese-Query und eine Document-übergreifend-Query.',
          'url': 'https://www.promptquorum.com/de/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-6-test-queries',
        },
        {
          '@type': 'HowToStep',
          'position': 7,
          'name': 'Chunk-Größe abstimmen',
          'text': 'Öffne Workspace-Einstellungen → Vector Database. Stelle Chunk-Größe auf 1000 und Chunk-Überlappung auf 200. Re-embedde wenn aufgefordert.',
          'url': 'https://www.promptquorum.com/de/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-7-tune-chunks',
        },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'de',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Was wenn Ollama nicht installiert wird?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Auf macOS ist der häufigste Fehler Gatekeeper blockiert einen unsigniert Helper — öffne Systemeinstellungen → Datenschutz & Sicherheit und klicke "Trotzdem zulassen". Auf Windows könnte Defender SmartScreen das Installationsprogramm isolieren; Rechtsklick → Eigenschaften → Entsperren. Auf Linux braucht das Installationsskript sudo um die systemd-Unit zu schreiben; falls sudo nicht verfügbar ist, lade die statische Binärdatei von github.com/ollama/ollama/releases herunter und platziere sie manuell auf deinem PATH.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Warum ist der Embedding-Schritt langsam?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Der erste Embed einer Session ist langsam, weil Ollama das Embedding-Modell lazy-lädt in den RAM (10–40 Sekunden abhängig von Disk-Geschwindigkeit). Danach läuft Embedding mit 400–800 Chunks pro Sekunde auf einer modernen CPU und 2000+ Chunks pro Sekunde auf Apple Silicon. Falls anhaltender Durchsatz unter 100 Chunks pro Sekunde ist, läuft das Modell wahrscheinlich auf Swap-Disk — schließe andere Apps um RAM freizugeben und versuche es nochmal.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie viele PDFs kann ich auf einmal hochladen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM akzeptiert hunderte Dateien in einem einzelnen Drag-and-Drop. Die praktische Grenze ist RAM während des Parse-Schritts: ungefähr 1 GB Peak für 100 mittelgroße PDFs (50 Seiten pro Stück). Nach dem Embedding ist der On-Disk-Vector-Store klein (10–30 MB pro 100 PDF-Seiten). Für 1000+ PDFs siehe die Spezial-Anleitung Chatten mit 1000 PDFs lokal.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich das für passwortgeschützte PDFs verwenden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM kann passwortgeschützte PDFs nicht direkt entschlüsseln. Entschlüssele sie zuerst mit `qpdf --password=DEINPASSWORT --decrypt input.pdf output.pdf` (qpdf ist kostenlos, verfügbar auf allen drei Betriebssystemen), dann lade die ungeschützte Ausgabe hoch. Lösche die ungeschützte Kopie nach dem Embedding falls dein Threat-Modell es benötigt — die Embeddings selbst sind nicht menschenlesbar.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was wenn mein Abruf falsche Chunks zurückgibt?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Drei Knöpfe in Reihenfolge der Auswirkung: Wechsle von Standard-Embedder zu nomic-embed-text (Schritt 4), ändere Chunking von 512/0 auf 1000/200 und re-embedde (Schritt 7), und erhöhe Top-K von 4 auf 6 in Workspace-Einstellungen. Falls Abruf immer noch falsch ist nach all drei, könnten deine Dokumente Vorverarbeitung benötigen — entferne Header und Footer, normalisiere Whitespace oder teile sehr lange PDFs in Pro-Kapitel-Dateien.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Sollte ich ein anderes Modell als Llama 3.3 8B verwenden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Llama 3.3 8B Q4_K_M ist das beste Qualitäts-pro-RAM-Verhältnis 2026 für 16 GB Systeme. Auf 8 GB RAM verwende Phi-4 Mini Q4_K_M (ungefähr 2,4 GB). Auf 24 GB+ probiere Qwen 2.5 14B Q4 für merklich bessere Synthese bei langen Dokumenten. Für mehrsprachige Arbeitsbereiche, Mistral Nemo 12B behandelt Nicht-Englisch besser als Llama 3.3.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie aktualisiere ich das Modell später?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Führe `ollama pull llama3.3:8b-instruct-q4_K_M` erneut aus um den neuesten Build zu erhalten, dann starte AnythingLLM neu damit es die Model-Version neu-erkennt. Um zu einem anderen Modell ganz zu wechseln, führe `ollama pull <neues-modell>` aus dann ändere das LLM-Präferenz-Dropdown in AnythingLLM-Einstellungen — kein Re-Embedding benötigt, weil Embeddings nur auf dem Embedder abhängen, nicht auf dem Antwortmodell.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich das auf einen anderen Computer verschieben?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Ja. Ollama-Modelle leben in ~/.ollama/models auf macOS und Linux, oder %USERPROFILE%\\.ollama\\models auf Windows — kopiere den Ordner. AnythingLLM-Workspaces leben in ~/.anythingllm/storage — kopiere das auch. Auf der neuen Maschine installiere Ollama und AnythingLLM Desktop, dann lege die kopierten Ordner an den richtigen Stellen hin. Workspaces und Embeddings kommen identisch hoch.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Funktioniert das falls meine PDFs eingescannte Bilder sind?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Nicht direkt — AnythingLLM extrahiert Text, kann aber keine Bilder OCR-ieren. Vorverarbeite eingescannte PDFs mit `ocrmypdf input.pdf output.pdf` (plattformübergreifend, MIT-lizenziert, verwendet Tesseract unter der Haube). Auf Apple Silicon, `ocrmypdf -l eng+deu+fra` behandelt 70+ Sprachen. Nach OCR hat die Output-PDF beide die Original-Bilder und eine durchsuchbar Text-Layer, und AnythingLLM extrahiert den Text korrekt.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie sichere ich meine Dokumentdatenbank?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM speichert alles unter ~/.anythingllm/storage auf macOS und Linux, oder %LOCALAPPDATA%\\anythingllm-desktop\\storage auf Windows. Tar oder zip diesen Ordner und kopiere ihn auf ein Backup-Laufwerk. Der Ordner inkludiert Original-Dokumente, geparste Chunks, Vector-Indexe und Chat-Verlauf. Wiederherstellen ist Kopie-zurück-und-Neustart — kein spezieller Import-Flow benötigt.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Muss ich bei der Verwendung von AnythingLLM die DSGVO beachten?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Ja, falls deine PDFs personenbezogene Daten enthalten — Namen, E-Mails, Mitarbeiterdaten, Kundendaten etc. DSGVO Artikel 28 verpflichtet dich, Auftragsverarbeiter zu verwenden (oder Infrastruktur, wo Verarbeitung unter deiner Kontrolle bleibt). AnythingLLM auf deinem lokalen Server erfüllt dies: die Daten verlässt nicht deine Infrastruktur. Dokumentiere deine Datenschutz-Maßnahmen in deinem Verfahrensverzeichnis nach Artikel 30 DSGVO.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Ist AnythingLLM für den deutschen Mittelstand geeignet?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Sehr geeignet. Deutsche KMUs mit sensiblen Dokumenten (Verträge, Finanzunterlagen, Patientendaten) gewinnen von lokaler Inferenz, weil: (1) Null Cloud-Abhängigkeit, (2) Kein Datenfluss zu US-Unternehmen, (3) Erfüllung von BSI-Grundschutz-Katalogen für sichere Systeme, (4) Null Lizenzkosten (alles Open Source), (5) Sofortige Produktivität (auf deinem Server). Ein typisches Mittelstands-Szenario: Archiviere 5 Jahre Kundenverträge, indexiere sie mit AnythingLLM, führe Due-Diligence und Kundendaten-Anfragen lokal durch.',
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
    theme: 'RAG & Chat de Documents',
    title: 'Construire un RAG local sur vos PDFs en 30 minutes (Ollama + AnythingLLM)',
    seoTitle: 'RAG local sur PDFs en 30 minutes 2026: Ollama + AnythingLLM',
    intro:
      'Un guide complet pour le chemin le plus rapide vers un système RAG personnel fonctionnel sur un portable 16 Go. Stack: Ollama, Llama 3.3 8B, AnythingLLM, nomic-embed-text. Durée totale: 30 minutes de l\'ordinateur vierge au chat avec vos propres PDFs.',
    metaDescription:
      'Étape par étape: installer Ollama, configurer AnythingLLM, charger des PDFs, discuter. Temps total 30 minutes. Testé sur portable 16 GB. Mai 2026.',
    twitterDescription:
      '30 minutes du portable vierge au chat avec vos propres PDFs. Ollama + Llama 3.3 8B + AnythingLLM + nomic-embed-text. Testé sur 16 GB.',
    current_models_mentioned: ['Llama 3.3 8B', 'nomic-embed-text-v1.5', 'Phi-4 Mini', 'Mistral 7B'],
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
            text: 'Pourquoi nomic-embed-text-v1.5 spécifiquement? En mai 2026, il score dans top 5 du classement MTEB Retrieval pour tout modèle sous 500 Mo, tourne à 400–800 chunks/sec sur CPU moderne et 2000+ chunks/sec sur Apple Silicon, Apache 2.0 licencié. C\'est l\'upgrade première-standard pour presque tout stack RAG local — voir le [comparaison modèles embedding](/power-local-llm/best-embedding-models-local-rag-2026?lang=fr) pour alternatives.',
          },
        ],
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
            a: 'AnythingLLM accepte centaines de fichiers en un seul glissez-déposez. La limite pratique est RAM pendant étape parse: ~1 Go peak pour 100 PDFs taille-moyenne (50 pages chaque). Une fois embeddés, le magasin vectoriel on-disk est petit (~10–30 Mo par 100 pages PDF). Pour 1000+ PDFs, voir guide dédié [Discuter avec 1000 PDFs localement](/power-local-llm/chat-with-1000-pdfs-locally?lang=fr).',
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
            a: 'Llama 3.3 8B Q4_K_M est le meilleur tradeoff qualité-par-RAM 2026 pour systèmes 16 Go. Sur 8 Go RAM, utilisez Phi-4 Mini Q4_K_M (~2,4 Go). Sur 24 Go+, essayez Qwen 2.5 14B Q4 pour synthèse notablement meilleure sur longs documents. Pour charges-travail multilingues, Mistral Nemo 12B traite mieux non-English que Llama 3.3.',
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
          '[AnythingLLM vs PrivateGPT vs Open WebUI: Meilleur RAG local](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag?lang=fr) — pour lecteurs voulant évaluer alternatives avant de s\'engager à AnythingLLM.',
          '[Meilleurs modèles d\'embedding pour RAG local 2026](/power-local-llm/best-embedding-models-local-rag-2026?lang=fr) — pour lecteurs voulant meilleure récupération que nomic-embed-text.',
          '[Apps IA locales avec RAG intégré: Discuter avec vos fichiers (zéro setup)](/power-local-llm/local-ai-app-with-built-in-rag?lang=fr) — pour lecteurs réalisant ils veulent encore plus simple que AnythingLLM.',
          '[RAG expliqué: Fonder réponses IA sur données réelles (2026)](/prompt-engineering/rag-explained?lang=fr) — autorité concept sur quoi est RAG et pourquoi chaque composant importe.',
          '[Guide matériel LLM local 2026](/local-llms/local-llm-hardware-guide-2026?lang=fr) — référence hardware-sizing si vous choisissez l\'ordinateur portable, pas juste software.',
          '[Hub Power Local LLM](/power-local-llm?lang=fr) — bibliothèque guide complète pour le cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'inLanguage': 'fr',
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
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'inLanguage': 'fr',
      'url': 'https://www.promptquorum.com/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'name': 'Construire un système RAG local sur vos PDFs en 30 minutes',
      'description':
        'Installez Ollama, téléchargez Llama 3.3 8B, installez AnythingLLM, configurez modèle d\'embedding, chargez PDFs, testez requêtes, réglez taille chunks.',
      'totalTime': 'PT30M',
      'supply': [
        { '@type': 'HowToSupply', 'name': 'Portable 16 GB RAM' },
        { '@type': 'HowToSupply', 'name': '20 GB espace disque libre' },
        { '@type': 'HowToSupply', 'name': 'Connexion internet (50 Mbps recommandé)' },
        { '@type': 'HowToSupply', 'name': '5–20 PDFs pour commencer' },
      ],
      'tool': [
        { '@type': 'HowToTool', 'name': 'Ollama 0.5+' },
        { '@type': 'HowToTool', 'name': 'AnythingLLM Desktop' },
        { '@type': 'HowToTool', 'name': 'Llama 3.3 8B Instruct (Q4_K_M)' },
        { '@type': 'HowToTool', 'name': 'nomic-embed-text-v1.5' },
      ],
      'step': [
        {
          '@type': 'HowToStep',
          'position': 1,
          'name': 'Installer Ollama',
          'text': 'Téléchargez installeur Ollama pour votre OS depuis ollama.com/download et exécutez-le. L\'installeur ajoute CLI ollama à PATH et démarre un service de fond. Vérifiez avec `ollama --version`.',
          'url': 'https://www.promptquorum.com/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-1-install-ollama',
        },
        {
          '@type': 'HowToStep',
          'position': 2,
          'name': 'Télécharger Llama 3.3 8B',
          'text': 'Exécutez `ollama pull llama3.3:8b-instruct-q4_K_M` pour télécharger modèle quantisé 4,9 Go. Environ 8 minutes à 50 Mbps.',
          'url': 'https://www.promptquorum.com/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-2-pull-model',
        },
        {
          '@type': 'HowToStep',
          'position': 3,
          'name': 'Installer AnythingLLM Desktop',
          'text': 'Téléchargez AnythingLLM Desktop et exécutez l\'installeur. Lancez l\'app et choisissez "Configuration locale" sur premier écran. Créez un espace de travail.',
          'url': 'https://www.promptquorum.com/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-3-install-anythingllm',
        },
        {
          '@type': 'HowToStep',
          'position': 4,
          'name': 'Configurer modèle d\'embedding',
          'text': 'Dans paramètres AnythingLLM, réglez Préférence LLM à Ollama à http://127.0.0.1:11434 avec modèle llama3.3:8b-instruct-q4_K_M. Exécutez `ollama pull nomic-embed-text` et réglez Préférence embedding à ce modèle.',
          'url': 'https://www.promptquorum.com/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-4-configure-embedding',
        },
        {
          '@type': 'HowToStep',
          'position': 5,
          'name': 'Charger premiers PDFs',
          'text': 'Ouvrez l\'espace de travail, cliquez "Charger documents", glissez 5–20 PDFs. Cliquez "Déplacer vers espace de travail" puis "Sauvegarder et embedder". Attendez barre de progression.',
          'url': 'https://www.promptquorum.com/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-5-upload-pdfs',
        },
        {
          '@type': 'HowToStep',
          'position': 6,
          'name': 'Tester requêtes',
          'text': 'Tapez question fact-recall dans chat espace de travail. Vérifiez réponse cite un chunk de votre PDF. Essayez requête synthèse et requête cross-document.',
          'url': 'https://www.promptquorum.com/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-6-test-queries',
        },
        {
          '@type': 'HowToStep',
          'position': 7,
          'name': 'Ajuster taille chunks',
          'text': 'Ouvrez Paramètres espace de travail → Base de données vectorielle. Réglez taille chunk à 1000 et chevauchement chunk à 200. Re-embedde quand invité.',
          'url': 'https://www.promptquorum.com/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-7-tune-chunks',
        },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'fr',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Que faire si Ollama ne s\'installe pas?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Sur macOS, l\'erreur la plus commune est Gatekeeper bloquant un helper non-signé — ouvrez Paramètres système → Confidentialité & Sécurité et cliquez "Ouvrir quand même". Sur Windows, Defender SmartScreen peut mettre en quarantaine l\'installeur; clic-droit → Propriétés → Débloquer. Sur Linux, le script d\'installation a besoin sudo pour écrire l\'unité systemd; si sudo indisponible, téléchargez binaire statique depuis github.com/ollama/ollama/releases et placez-la sur PATH manuellement.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Pourquoi l\'étape embedding est lente?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Le premier embed d\'une session est lent parce que Ollama lazy-charge le modèle embedding dans RAM (10–40 secondes selon vitesse disque). Après, embedding tourne à 400–800 chunks par seconde sur CPU moderne et 2000+ chunks par seconde sur Apple Silicon. Si débit soutenu est sous 100 chunks par seconde, le modèle tourne probablement sur swap-disque — fermez autres applications pour libérer RAM et réessayez.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Combien de PDFs puis-je charger à la fois?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM accepte centaines de fichiers en un seul glissez-déposez. La limite pratique est RAM pendant étape parse: environ 1 Go peak pour 100 PDFs taille-moyenne (50 pages chacun). Une fois embeddés, le magasin vectoriel on-disk est petit (10–30 Mo par 100 pages PDF). Pour 1000+ PDFs, voir guide dédié sur discussion avec 1000 PDFs localement.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puis-je utiliser ceci pour PDFs protégés par mot de passe?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM ne peut pas déchiffrer directement PDFs protégés. Déchiffrez d\'abord avec `qpdf --password=VOTREMOTDEPASSE --decrypt input.pdf output.pdf` (qpdf gratuit, disponible sur tous les systèmes d\'exploitation), puis chargez output non-protégé. Supprimez la copie non-protégée après embedding si votre threat-model l\'exige — les embeddings eux-mêmes ne sont pas lisibles-humain.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Que faire si ma récupération retourne mauvais chunks?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Trois boutons dans ordre d\'impact: passez de embedder par défaut à nomic-embed-text (étape 4), changez chunking de 512/0 à 1000/200 et re-embedde (étape 7), et augmentez top-K de 4 à 6 dans paramètres espace de travail. Si récupération toujours mauvaise après tous trois, vos documents peuvent nécessiter pré-traitement — enlevez en-têtes et pieds, normalisez whitespace ou divisez très longs PDFs en fichiers per-chapitre.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Devrais-je utiliser un modèle différent de Llama 3.3 8B?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Llama 3.3 8B Q4_K_M est le meilleur rapport qualité-par-RAM 2026 pour systèmes 16 Go. Sur 8 Go RAM, utilisez Phi-4 Mini Q4_K_M (environ 2,4 Go). Sur 24 Go+, essayez Qwen 2.5 14B Q4 pour synthèse notablement meilleure sur longs documents. Pour charges-travail multilingues, Mistral Nemo 12B traite mieux le non-English que Llama 3.3.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Comment mets-à-jour le modèle après?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Exécutez `ollama pull llama3.3:8b-instruct-q4_K_M` à nouveau pour obtenir la dernière version, puis redémarrez AnythingLLM pour qu\'il re-détecte la version modèle. Pour basculer entièrement à un modèle différent, exécutez `ollama pull <nouveau-modèle>` puis changez le menu déroulant Préférence LLM dans paramètres AnythingLLM — aucun re-embedding requis parce que embeddings dépendent seulement de l\'embedder, pas du modèle réponse.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puis-je déplacer ceci à un ordinateur différent?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Oui. Modèles Ollama vivent dans ~/.ollama/models sur macOS et Linux, ou %USERPROFILE%\\.ollama\\models sur Windows — copiez le dossier. Espaces de travail AnythingLLM vivent dans ~/.anythingllm/storage — copiez aussi. Sur la nouvelle machine, installez Ollama et AnythingLLM Desktop, puis déposez les dossiers copiés en place. Espaces de travail et embeddings remontent identiquement.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Cela fonctionne si mes PDFs sont images scannées?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Pas directement — AnythingLLM extrait texte mais ne peut pas OCR images. Pré-traitez PDFs scannées avec `ocrmypdf input.pdf output.pdf` (multiplateforme, MIT-licencié, utilise Tesseract sous le capot). Sur Apple Silicon, `ocrmypdf -l eng+fra+deu` traite 70+ langues. Après OCR, le PDF résultant a les images originales plus une couche texte cherchable, et AnythingLLM extrait le texte correctement.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Comment sauvegarde-je ma base de données documents?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM stocke tout sous ~/.anythingllm/storage sur macOS et Linux, ou %LOCALAPPDATA%\\anythingllm-desktop\\storage sur Windows. Compressez ce dossier et copiez-le sur un lecteur de sauvegarde. Le dossier inclut documents originaux, chunks parsés, index vectoriels et historique chat. La restauration est copie-de-retour-et-redémarrage — aucun flux d\'import spécial requis.',
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
}
