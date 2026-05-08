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
    theme: 'RAG & Document Chat',
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
    theme: 'RAG & Document Chat',
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
    current_models_mentioned: ['Llama 3.3 8B', 'nomic-embed-text-v1.5', 'Phi-4 Mini', 'Mistral 7B'],
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
            text: 'nomic-embed-text-v1.5 を選ぶ理由? 2026 年 5 月、500MB 以下のあらゆるモデルで MTEB Retrieval leaderboard top 5、最新 CPU で 400–800 chunks/sec、Apple Silicon で 2000+ chunks/sec、Apache 2.0 ライセンス。ほぼ全ローカル RAG stack のアップグレード first choice — 代替は [embedding model comparison](/power-local-llm/best-embedding-models-local-rag-2026?lang=ja) 参照。',
          },
        ],
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
            a: 'AnythingLLM は単一 drag-drop で数百ファイル受け入れ。Practical limit は parse step 中の RAM: ~100 medium PDF (50 page each) で ~1GB peak。Embed 後、on-disk vector store は小さい (~100 page あたり 10–30MB)。1000+ PDF は [1000 PDF locally](/power-local-llm/chat-with-1000-pdfs-locally?lang=ja) dedicated guide 参照。',
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
            a: 'Llama 3.3 8B Q4_K_M は 16GB system での 2026 best quality-per-RAM tradeoff。8GB RAM では Phi-4 Mini Q4_K_M (~2.4GB)。24GB+ では Qwen 2.5 14B Q4 for notably better synthesis on long document。Multilingual workload は Mistral Nemo 12B が non-English より優秀 (Llama 3.3 より)。',
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
          '[AnythingLLM vs PrivateGPT vs Open WebUI: 最高のローカル RAG](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag?lang=ja) — AnythingLLM に commit する前に代替を評価したいリーダー向け。',
          '[2026 ローカル RAG の最高 Embedding モデル](/power-local-llm/best-embedding-models-local-rag-2026?lang=ja) — nomic-embed-text より優秀な取得を望むリーダー向け。',
          '[Built-in RAG 付きローカル AI App: ファイルとチャット (ゼロセットアップ)](/power-local-llm/local-ai-app-with-built-in-rag?lang=ja) — AnythingLLM より even simpler を実現したいリーダー向け。',
          '[RAG 説明: リアルデータに基づいた AI 回答 (2026)](/prompt-engineering/rag-explained?lang=ja) — RAG とは何か、なぜ各 component が重要かの concept authority。',
          '[2026 ローカル LLM ハードウェアガイド](/local-llms/local-llm-hardware-guide-2026?lang=ja) — ノートパソコンだけでなく hardware も選択中のリーダー向けの sizing reference。',
          '[Power Local LLM Hub](/power-local-llm?lang=ja) — cluster 用の complete guide library。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'inLanguage': 'ja',
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
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'inLanguage': 'ja',
      'url': 'https://www.promptquorum.com/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'name': '30分でローカルRAGシステムを構築',
      'description':
        'Ollama をインストール、Llama 3.3 8B をプル、AnythingLLM をインストール、embedding モデルを設定、PDF をアップロード、クエリをテスト、chunk サイズを調整。',
      'totalTime': 'PT30M',
      'supply': [
        { '@type': 'HowToSupply', 'name': '16GB RAM ノートパソコン' },
        { '@type': 'HowToSupply', 'name': '20GB ディスク空き容量' },
        { '@type': 'HowToSupply', 'name': 'インターネット接続 (50 Mbps 推奨)' },
        { '@type': 'HowToSupply', 'name': '5–20 PDF 開始用' },
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
          'name': 'Ollama をインストール',
          'text': 'OS 用 Ollama installer を ollama.com/download からダウンロード、実行。Installer が ollama CLI を PATH に追加、background service を開始。`ollama --version` で確認。',
          'url': 'https://www.promptquorum.com/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-1-install-ollama',
        },
        {
          '@type': 'HowToStep',
          'position': 2,
          'name': 'Llama 3.3 8B をプル',
          'text': '`ollama pull llama3.3:8b-instruct-q4_K_M` を実行して 4.9GB 量子化モデルをダウンロード。50 Mbps で約 8 分。',
          'url': 'https://www.promptquorum.com/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-2-pull-model',
        },
        {
          '@type': 'HowToStep',
          'position': 3,
          'name': 'AnythingLLM Desktop をインストール',
          'text': 'AnythingLLM Desktop をダウンロード、installer を実行。App を起動、最初の画面で "Local Setup" を選択。Workspace を作成。',
          'url': 'https://www.promptquorum.com/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-3-install-anythingllm',
        },
        {
          '@type': 'HowToStep',
          'position': 4,
          'name': 'Embedding モデルを設定',
          'text': 'AnythingLLM 設定で LLM 選好を Ollama (http://127.0.0.1:11434) に設定、model は llama3.3:8b-instruct-q4_K_M を選択。`ollama pull nomic-embed-text` を実行、embedding 選好をそのモデルに設定。',
          'url': 'https://www.promptquorum.com/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-4-configure-embedding',
        },
        {
          '@type': 'HowToStep',
          'position': 5,
          'name': '最初の PDF をアップロード',
          'text': 'Workspace を開く、"Upload Documents" をクリック、5–20 PDF をドラッグ。"Move to Workspace" をクリック、"Save and Embed"。Progress bar を待つ。',
          'url': 'https://www.promptquorum.com/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-5-upload-pdfs',
        },
        {
          '@type': 'HowToStep',
          'position': 6,
          'name': 'クエリをテスト',
          'text': 'Workspace chat に fact-recall question を入力。回答が PDF の chunk を引用するか確認。Synthesis query と cross-document query も試す。',
          'url': 'https://www.promptquorum.com/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-6-test-queries',
        },
        {
          '@type': 'HowToStep',
          'position': 7,
          'name': 'Chunk サイズを調整',
          'text': 'Workspace 設定 → ベクトルデータベース を開く。Chunk 大きさを 1000、Chunk overlap を 200 に設定。再度 embed するよう prompt されたら実行。',
          'url': 'https://www.promptquorum.com/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step#step-7-tune-chunks',
        },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'ja',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Ollama のインストールが失敗する場合は?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'macOS では Gatekeeper が未署名 helper をブロック — システム設定 → プライバシー & セキュリティ で "許可" をクリック。Windows では Defender SmartScreen が quarantine — 右クリック → プロパティ → ブロック解除。Linux では install script が sudo を要求 (systemd unit 書き込み); sudo 利用不可なら github.com/ollama/ollama/releases から static binary をダウンロード、手動で PATH に配置。',
          },
        },
        {
          '@type': 'Question',
          'name': 'Embedding step が遅い理由は?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Session の初回 embed は遅い — Ollama が embedding model を lazy-load in RAM (disk speed に応じて 10–40 秒)。その後、embedding は最新 CPU で 400–800 chunks 毎秒、Apple Silicon で 2000+ chunks 毎秒。持続 throughput が 100 chunks 毎秒 以下なら model が swap-disk で実行 — 他 app を close してメモリ解放、retry。',
          },
        },
        {
          '@type': 'Question',
          'name': 'いくつの PDF を一度に upload できる?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM は単一 drag-drop で数百ファイル受け入れ。Practical limit は parse step 中の RAM: ~100 medium PDF (50 page each) で約 1GB peak。Embed 後、on-disk vector store は小さい (100 page あたり 10–30MB)。1000+ PDF については、1000 PDF locally のための dedicated guide 参照。',
          },
        },
        {
          '@type': 'Question',
          'name': 'Password-protected PDF に使用可能?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM は password-protected PDF を直接 decrypt できない。`qpdf --password=YOURPASSWORD --decrypt input.pdf output.pdf` で decrypt first (qpdf は無料、全オペレーティングシステム)、unprotected output を upload。Threat model が要求すれば embed 後に unprotected copy を delete — embedding は human-readable でない。',
          },
        },
        {
          '@type': 'Question',
          'name': '取得が wrong chunk を返す場合は?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              '3 つの knob (impact 順): default embedder から nomic-embed-text に switch (ステップ 4)、512/0 chunking を 1000/200 に change + re-embed (ステップ 7)、workspace setting で top-K を 4 から 6 に bump。3 つ全て後も取得が wrong なら、document が前処理が必要 — header と footer を strip、whitespace を normalize、long PDF を per-chapter file に split。',
          },
        },
        {
          '@type': 'Question',
          'name': 'Llama 3.3 8B 以外のモデルを使うべき?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Llama 3.3 8B Q4_K_M は 16GB system での 2026 best quality-per-RAM tradeoff。8GB RAM では Phi-4 Mini Q4_K_M (約 2.4GB)。24GB+ では Qwen 2.5 14B Q4 for notably better synthesis on long document。Multilingual workload は Mistral Nemo 12B が non-English より優秀 (Llama 3.3 より)。',
          },
        },
        {
          '@type': 'Question',
          'name': '後でモデルを update する方法は?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              '`ollama pull llama3.3:8b-instruct-q4_K_M` を再実行 latest build 取得、AnythingLLM を再起動して model version を re-detect。Completely different model に switch するには、`ollama pull <new-model>` 実行、AnythingLLM setting の LLM 選好 dropdown を変更 — re-embedding 不要 (embedding は model でなく embedder に依存)。',
          },
        },
        {
          '@type': 'Question',
          'name': '別のコンピュータに移動可能?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'はい。Ollama model は ~/.ollama/models (macOS と Linux) または %USERPROFILE%\\.ollama\\models (Windows) — フォルダをコピー。AnythingLLM workspace は ~/.anythingllm/storage — それもコピー。新 machine で Ollama と AnythingLLM Desktop をインストール、copied folder を place。Workspace と embedding は identically come up。',
          },
        },
        {
          '@type': 'Question',
          'name': 'PDF が scanned image の場合は?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Not directly — AnythingLLM は text 抽出できるが image の OCR はできない。Scanned PDF を前処理: `ocrmypdf input.pdf output.pdf` (cross-platform、MIT-licensed、Tesseract 使用)。Apple Silicon では `ocrmypdf -l jpn+eng` が 70+ 言語対応。OCR 後、output PDF は original image + searchable text layer を持つ、AnythingLLM が text を正しく抽出。',
          },
        },
        {
          '@type': 'Question',
          'name': 'Document database をバックアップする方法は?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'AnythingLLM は全て ~/.anythingllm/storage (macOS と Linux) または %LOCALAPPDATA%\\anythingllm-desktop\\storage (Windows) に store。このフォルダを tar か zip、backup drive にコピー。フォルダは original document、parsed chunk、vector index、chat history を包含。Restoration は copy-back-and-restart — special import flow 不要。',
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
    title: '30分钟内构建本地 RAG 系统（Ollama + AnythingLLM）',
    seoTitle: '30分钟本地 RAG PDF 系统 2026: Ollama + AnythingLLM',
    intro:
      '在16GB RAM笔记本电脑上构建完全本地 RAG 系统的最快路径。堆栈：Ollama、Llama 3.3 8B、AnythingLLM、nomic-embed-text。总时间：从空白系统到与自己的PDF聊天仅需30分钟。',
    metaDescription:
      '分步教程：安装 Ollama、设置 AnythingLLM、放入 PDF、与它们对话。总耗时30分钟。已在16GB RAM笔记本电脑上测试。2026年5月。',
    twitterDescription:
      '30分钟内：从空白笔记本到与自己的 PDF 聊天。Ollama + Llama 3.3 8B + AnythingLLM + nomic-embed-text。已在16GB RAM上测试。',
    current_models_mentioned: ['Llama 3.3 8B', 'nomic-embed-text-v1.5', 'Phi-4 Mini', 'Mistral 7B'],
    current_hardware_mentioned: ['16 GB RAM 笔记本电脑', 'Apple M1', 'Apple M3', 'Intel Core Ultra 5', 'AMD Ryzen 7 7700'],
    audience: '想在自己的笔记本电脑上构建本地 RAG 系统、不依赖云 API 的开发人员和高级用户。',
    readTime: '阅读约12分钟',
    educationalLevel: '初级',
    primaryTerm: '本地 RAG PDF',
    targetKeywords: [
      '本地 rag pdf 教程',
      'ollama anythingllm rag',
      '本地聊天 pdf',
      '本地 rag 30分钟',
      '私密 rag 笔记本电脑',
    ],
    leadAnswerBlock:
      '**安装 Ollama、拉取 Llama 3.3 8B、安装 AnythingLLM、指向 Ollama、将嵌入模型切换为 nomic-embed-text、将 PDF 拖入工作区、提出问题。在16GB RAM笔记本上整个过程需要30分钟——其中大部分是模型下载。**',
    quickAnswerTop: {
      zh: {
        question: '如何在30分钟内在 PDF 上构建本地 RAG 系统？',
        answer:
          '安装 Ollama（3分钟）、拉取 Llama 3.3 8B（8分钟，主要是下载）、安装 AnythingLLM（4分钟）、连接到 Ollama（3分钟）并将其嵌入器切换为 nomic-embed-text、将 PDF 放入工作区（5分钟用于嵌入）、测试查询（5分钟）、调整块大小（2分钟）。总计：在16GB RAM笔记本上需要30分钟。系统安装后完全离线运行。',
        bullets: [
          '堆栈：Ollama + Llama 3.3 8B Q4_K_M + AnythingLLM + nomic-embed-text-v1.5',
          '硬件下限：16GB RAM、20GB 可用磁盘、现代 CPU（任何 Apple Silicon、Ryzen 5000+、Intel 11代+）',
          '仅初始模型和应用下载需要互联网——推理完全本地运行',
          '在 macOS、Windows 10/11 和 Linux 上运行，AnythingLLM 步骤无需管理员/root',
          '无代码、无 Python、无向量数据库设置——AnythingLLM 内置 LanceDB',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '30分钟概览', anchor: 'overview' },
      { label: '什么是本地 RAG？', anchor: 'what-is-local-rag' },
      { label: '预备条件与硬件检查', anchor: 'prerequisites' },
      { label: '步骤1：安装 Ollama', anchor: 'step-1-install-ollama' },
      { label: '步骤2：拉取 Llama 3.3 8B', anchor: 'step-2-pull-model' },
      { label: '步骤3：安装 AnythingLLM', anchor: 'step-3-install-anythingllm' },
      { label: '步骤4：配置嵌入模型', anchor: 'step-4-embedding-model' },
      { label: '步骤5：上传 PDF', anchor: 'step-5-upload-pdfs' },
      { label: '步骤6：测试查询', anchor: 'step-6-test-queries' },
      { label: '步骤7：调整检索参数', anchor: 'step-7-tuning' },
      { label: '故障排除', anchor: 'troubleshooting' },
      { label: '常见问题解答', anchor: 'faq' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    tldr: {
      isTldr: true,
      title: '核心要点',
      content:
        '本地 RAG（检索增强生成）是指在自己的计算机上离线运行整个 LLM + 向量数据库堆栈——无云 API 调用、无数据传输、无订阅。本教程涵盖完整的安装-配置-运行流程：Ollama（模型运行时）+ Llama 3.3 8B Q4_K_M（量化 LLM）+ AnythingLLM（UI 和向量索引）+ nomic-embed-text-v1.5（快速嵌入模型）。硬件需求最低：16GB RAM、20GB 磁盘、现代 CPU。安装与配置均可视化点击完成，无 Python、无命令行 SQL。端到端时间：30分钟。',
    },
    whatIsLocalRag: {
      id: 'what-is-local-rag',
      title: '什么是本地 RAG？',
      content:
        '检索增强生成（RAG）是一种架构，将大型语言模型（LLM）与私有文档集合相结合，以回答特定于您的文档的问题。传统的云 RAG（OpenAI API、AWS Bedrock）将您的数据发送到远程服务器进行嵌入和查询处理，这涉及成本、延迟和数据隐私风险。**本地 RAG 在您的计算机上运行所有三个步骤**：将 PDF 分割成块、为每个块计算向量嵌入、存储向量索引。当您提出问题时，系统在本地找到最相关的块，通过 LLM 传递它们，得到回答。零网络往返、零云成本、100% 数据隐私。',
      items: [
        '**私密：** 您的 PDF、向量和对话永远不会离开您的计算机。无云日志、无数据中心、无第三方访问。',
        '**离线：** 初始模型下载后，整个系统在没有互联网连接的情况下运行。飞行中、现场办公、网络中断时工作。',
        '**成本固定：** 一次性下载模型（免费），然后零每查询成本。不同于按令牌计费的云 API。',
        '**可定制嵌入：** 选择特定于语言或领域的嵌入模型（医学文本、法律文件、代码），而不被迫使用通用云嵌入。',
      ],
    },
    stackOverview: {
      id: 'stack-overview',
      title: '堆栈概览及为何选择这些工具',
      content:
        '本教程中的堆栈经过精心选择，以平衡易用性、硬件效率和准确性。',
      subsections: [
        {
          heading: 'Ollama（模型运行时）',
          text: 'Ollama 是一个单一的跨平台二进制文件，可在您的计算机上本地运行 LLM。一行 curl/installer，没有 Docker、Python 或系统配置。支持在 macOS、Windows 和 Linux 上运行 GGUF 格式的模型（这是开源 LLM 的标准量化格式）。',
        },
        {
          heading: 'Llama 3.3 8B（LLM 模型）',
          text: '为16GB RAM 系统优化选择。8B 参数大小意味着在 Q4_K_M 量化下约4.9GB；推理速度 50–150 令牌/秒（Apple Silicon 更快）。足够好的推理质量用于 RAG（LLM 在这里是合成器，不是主要信息源）。如果您有8GB，请改用 Phi-4 Mini；如果您有24GB+，请使用 Qwen 2.5 14B 获得更好的长文档推理。',
        },
        {
          heading: 'AnythingLLM（UI 和向量存储）',
          text: 'AnythingLLM Desktop 是一个开源、单人使用的 LLM 应用程序，有内置的向量数据库 (LanceDB)、文档解析和基于网络的聊天 UI。无需学习 Python、向量数据库管理或 API。放入 PDF 并询问。',
        },
        {
          heading: 'nomic-embed-text-v1.5（嵌入模型）',
          text: '一个轻量级的、完全本地的嵌入模型（约 280MB）。在 CPU 上运行很快（每秒数百个块），并针对英语和技术文档进行了优化。其他有效的替代品：Ollama 内置默认值（不太准确）或 mxbai-embed-large（更准确但更慢）。',
        },
      ],
    },
    prerequisites: {
      id: 'prerequisites',
      title: '预备条件与硬件检查',
      content: '**16GB RAM、20GB 磁盘空间、互联网连接、30分钟时间。** 操作系统：macOS 12+、Windows 10/11、最新 Linux 桌面。',
      items: [
        '**RAM：** 16GB 是 Llama 3.3 8B Q4 + AnythingLLM + 常见桌面应用的实用最小值。8GB 可使用 Phi-4 Mini Q4 运行——请参阅步骤2的替代方案。',
        '**磁盘：** 20GB 可用空间。Llama 3.3 8B Q4_K_M 约为 5GB、嵌入模型约为 280MB、AnythingLLM 约为 600MB、嵌入需要余地 (约每100页 10–30MB)。',
        '**网络：** 模型拉取最低约 50 Mbps。25 Mbps 时约 16分钟；其余教程不受影响。',
        '**权限：** AnythingLLM 无需管理员/root。Ollama 在 macOS/Linux 上安装到 `/usr/local/bin`（密码一次）或 Windows `%LOCALAPPDATA%`（无管理员）。',
        '**文档准备：** 首先准备 5–20 个 PDF。更大的集合也可以工作，较小的集合可以更快地测试检索质量。',
      ],
    },
    step1InstallOllama: {
      id: 'step-1-install-ollama',
      title: '步骤1：安装 Ollama（3分钟）',
      content:
        '**从 ollama.com/download 下载您的操作系统 Ollama 安装程序并运行。安装程序将 `ollama` CLI 添加到 PATH、启动后台服务。** 无配置选项。',
      items: [
        '**macOS：** 下载 `.dmg`、将 Ollama 拖到应用程序文件夹、运行一次以安装 CLI 帮助程序。服务运行时菜单栏显示 llama 图标。',
        '**Windows：** 下载 `.exe`、运行、接受默认值。Ollama 在安装后以后台服务运行——无需单独启动。',
        '**Linux：** 单行安装：`curl -fsSL https://ollama.com/install.sh | sh`。脚本注册 systemd unit；`sudo systemctl start ollama` 启动。',
        '**验证：** 打开终端，运行 `ollama --version`。应显示版本字符串。如果显示命令未找到，重新启动终端以刷新 PATH。',
      ],
      codeBlock: 'ollama --version\n# ollama version is 0.5.x  (any 0.5+ build works for this tutorial)',
      codeLanguage: 'bash',
      callouts: [
        {
          type: 'warning',
          text: '`ollama --version` 成功但随后步骤出现"localhost:11434 连接被拒绝"错误时，后台服务未自动启动。macOS：从应用程序启动应用。Linux：`sudo systemctl start ollama`。Windows：打开 Ollama 托盘图标。',
        },
      ],
    },
    step2PullModel: {
      id: 'step-2-pull-model',
      title: '步骤2：拉取 Llama 3.3 8B（8分钟）',
      content:
        '**在终端中运行 `ollama pull llama3.3:8b-instruct-q4_K_M`。这将下载4.9GB 量化 GGUF、注册到 Ollama。** 整个30分钟中，几乎全部是这一步。',
      items: [
        '**下载大小：** 约 4.9GB (Q4_K_M 量化)。50 Mbps 时约 8分钟；100 Mbps 时约 4分钟；25 Mbps 时约 16分钟。',
        '**观看进度：** Ollama 显示百分比和速率。下载中断仍可通过重新运行继续——使用 `ollama list` 确认。',
        '**模型烟雾测试：** 下载完成后，运行 `ollama run llama3.3:8b-instruct-q4_K_M`、询问"2+2是多少"。验证合理回答。输入 `/bye` 退出。',
        '**低 RAM 替代：** 8GB 则 `ollama pull phi3:mini`（Phi-4 Mini，约 2.4GB）。步骤3中使用此模型名称。长文档的质量下降但可运行。',
      ],
      codeBlock:
        '# 16GB RAM 推荐\nollama pull llama3.3:8b-instruct-q4_K_M\n\n# 8GB RAM 替代方案\nollama pull phi3:mini\n\n# 快速烟雾测试（退出：/bye）\nollama run llama3.3:8b-instruct-q4_K_M',
      codeLanguage: 'bash',
      callouts: [
        {
          type: 'tip',
          text: '已有其他 Ollama 模型？`ollama list` 列出全部。保持多个模型、在 AnythingLLM 工作区设置中切换。',
        },
      ],
    },
    step3InstallAnythingLLM: {
      id: 'step-3-install-anythingllm',
      title: '步骤3：安装 AnythingLLM（4分钟）',
      content:
        '**从 anythingllm.com/download 下载 AnythingLLM Desktop、运行安装程序。应用程序启动后，创建工作区。** 无 Python、无数据库配置。',
      items: [
        '**macOS：** 下载 `.dmg`、拖到应用程序、首次运行时授予权限（数据库创建）。',
        '**Windows：** 下载 `.exe`、运行、默认安装路径是用户档案文件夹。',
        '**Linux：** `.AppImage` 下载、`chmod +x AnythingLLM-*.AppImage` 制作可执行、运行。',
        '**创建工作区：** 首次启动时选择"创建新工作区"。命名为`local-pdfs` 或任何名称。',
      ],
      codeBlock:
        '# 验证启动\n# 在浏览器中：http://localhost:3001\n# 您应该看到 AnythingLLM 登录界面\n# 首次访问无需密码',
      codeLanguage: 'bash',
      callouts: [
        {
          type: 'warning',
          text: '如果 localhost:3001 无法访问，确保没有其他应用使用端口3001。AnythingLLM 将回退到 3002、3003 等。检查控制台输出以查看实际端口。',
        },
      ],
    },
    step4EmbeddingModel: {
      id: 'step-4-embedding-model',
      title: '步骤4：配置嵌入模型（2分钟）',
      content:
        '**进入工作区设置 → 嵌入首选项 → 选择"Ollama"作为提供程序 → 选择"nomic-embed-text"作为模型。** AnythingLLM 的默认值较差；这一步大幅改善检索准确性。',
      items: [
        '**为什么？** AnythingLLM 默认使用内置较低质量的嵌入。Nomic-embed-text 快速、准确，已针对技术文档优化。',
        '**模型拉取自动化：** 首次 AnythingLLM 与 nomic-embed-text 连接时，Ollama 在后台自动拉取它（约 280MB，~2 分钟）。',
        '**测试：** 上传一个小 PDF（步骤5）并验证返回了相关块。如果块无关，跳到步骤7的调整。',
      ],
      codeBlock: '# 在 AnythingLLM 中：\n# 设置 → 嵌入首选项 → 提供程序：Ollama → 模型：nomic-embed-text',
      codeLanguage: 'text',
      callouts: [
        {
          type: 'tip',
          text: '如果您想使用 mxbai-embed-large（更准确但CPU 较慢），Ollama 也支持它。在模型下拉菜单中选择或在工作区设置中手动输入 "mxbai-embed-large"。',
        },
      ],
    },
    step5UploadPdfs: {
      id: 'step-5-upload-pdfs',
      title: '步骤5：上传 PDF（5分钟）',
      content:
        '**拖动 5–20 个 PDF 文件到 AnythingLLM 工作区窗口。系统自动解析、分割和嵌入它们。** 进度条显示完成百分比。',
      items: [
        '**解析：** AnythingLLM 提取文本、检测表格、识别标题。处理时间 ~100 页/分钟（取决于 PDF 复杂性和 CPU）。',
        '**嵌入：** 完成解析后，系统计算每个块的向量。使用 nomic-embed-text 在现代 CPU 上约 400–800 块/秒；Apple Silicon 快得多。',
        '**反馈：** 一旦某些 PDF 完成，您可以开始提问——系统不需要等待全部 PDF。但请等待至少一个完成。',
        '**存储：** 向量存储自动保存到 ~/.anythingllm/storage (macOS/Linux) 或 %LOCALAPPDATA%\\anythingllm-desktop\\storage (Windows)。您可以随时关闭应用——重新启动时加载。',
      ],
      codeBlock:
        '# AnythingLLM 中的工作区\n# 拖放 PDF、或按 "上传文档" 按钮\n# 观看嵌入进度——完成后开始提问\n# 无需等待全部完成',
      codeLanguage: 'text',
      callouts: [
        {
          type: 'warning',
          text: '如果嵌入非常慢（<100 块/秒），您的系统可能在 swap-disk 上运行模型。关闭其他应用以释放 RAM，重试。',
        },
      ],
    },
    step6TestQueries: {
      id: 'step-6-test-queries',
      title: '步骤6：测试查询（5分钟）',
      content:
        '**在 AnythingLLM 聊天框中输入问题。系统检索相关块、通过 LLM 处理、返回答案。** 验证答案来自您的文档，不是 LLM 的训练数据。',
      sampleQueries: [
        {
          question: '我的文件涉及什么主要概念？',
          expected:
            '系统应列出文件中提到的关键主题。如果答案过于通用（例如不提及您文件中的特定术语），请跳到步骤7进行调整。',
        },
        {
          question: '[特定术语或名称]如何工作？',
          expected: '如果您的文件定义或解释术语，系统应基于文件文本回答。',
        },
        {
          question: '您在阅读的文件中有什么数字或统计数据？',
          expected:
            '系统应引用来自您文件的数字（价格、日期、百分比），而非通用知识。',
        },
      ],
      items: [
        '**检查引用：** 在答案下方，AnythingLLM 显示"引用"——点击以查看检索到的块。验证块与您的问题相关。',
        '**红旗：** 如果 LLM 回答问题但块无关，则检索失败。继续步骤7进行调整。',
        '**自信度变化：** 询问与 PDF 无关的问题（例如，"谁赢得了 1982 年世界杯？"）。LLM 可能会回答（来自训练数据），但未显示引用——这表示检索未触发。这是预期的。',
      ],
    },
    step7Tuning: {
      id: 'step-7-tuning',
      title: '步骤7：调整检索参数（2分钟）',
      content:
        '**如果步骤6的答案相关性不佳，调整三个旋钮（按影响顺序）：嵌入模型、块大小和 top-K。** 每次调整后重新嵌入 PDF，然后重新测试。',
      tuningSteps: [
        {
          step: 1,
          title: '嵌入模型（最大影响）',
          description:
            '您已在步骤4中使用 nomic-embed-text。如果检索仍然不好，尝试 mxbai-embed-large（更精确但 CPU 更慢；在 AnythingLLM 设置中选择）。',
          action:
            'AnythingLLM 设置 → 嵌入首选项 → 更改模型 → 清空工作区文档、重新上传、重新嵌入、重新测试。',
        },
        {
          step: 2,
          title: '块大小和重叠',
          description:
            '默认：512 令牌块、0 重叠。较大的块（1000–1500）在长形式文档中工作更好。较小的块（256）在短 FAQ 或摘要中更精确。重叠（200–400）保留上下文跨越分割点。',
          action:
            'AnythingLLM 设置 → 工作区 → 分割选项 → 更改块大小/重叠 → 清空文档、重新上传、重新测试。',
        },
        {
          step: 3,
          title: '检索 top-K（最小影响）',
          description:
            '默认：向 LLM 传递 4 个块。如果系统跳过相关信息，尝试 6 或 8。更高的 K 增加噪声和令牌成本。',
          action: 'AnythingLLM 聊天设置 → top-K 滑块 → 调整为 6 → 重新测试，无需重新嵌入。',
        },
      ],
      items: [
        '**迭代：** 每次调整后观察答案质量。您可以在 5–10 分钟内找到适合您的文档集合的设置。',
        '**何时停止：** 一旦答案引用相关的、特定的文本块，停止调整。RAG 不是完美的——100% 检索准确性通常是不可能的。',
      ],
    },
    sampleQueries: [
      {
        question: '我应该如何处理密码保护的 PDF？',
        answer:
          '使用 qpdf 解密：`qpdf --password=YOUR_PASSWORD --decrypt input.pdf output.pdf`（qpdf 是免费的、跨平台的）。然后上传解密的副本。',
      },
      {
        question: '如何备份我的工作区和嵌入？',
        answer:
          '整个工作区保存到 ~/.anythingllm/storage（macOS/Linux）或 %LOCALAPPDATA%\\anythingllm-desktop\\storage（Windows）。复制该文件夹到备份驱动器。要恢复，只需复制回来、重新启动应用。',
      },
      {
        question: '我可以在多台计算机上使用同一个工作区吗？',
        answer:
          '是的。将 ~/.anythingllm/storage 复制到新计算机。安装 Ollama 和 AnythingLLM Desktop、复制 storage 文件夹、启动 AnythingLLM。工作区会自动加载。',
      },
    ],
    troubleshooting: {
      id: 'troubleshooting',
      title: '故障排除',
      issues: [
        {
          title: 'Ollama 安装失败',
          solutions: [
            'macOS 中，Gatekeeper 可能阻止未签名的帮助程序——进入系统设置 → 隐私和安全，点击"允许"。',
            'Windows 中，Defender SmartScreen 隔离二进制文件——右键单击 → 属性 → 解除阻止。',
            'Linux 中，安装脚本需要 sudo（systemd unit 写入）；如果无法使用 sudo，从 github.com/ollama/ollama/releases 下载静态二进制文件、手动放入 PATH。',
          ],
        },
        {
          title: '"localhost:11434 连接被拒绝"',
          solutions: [
            'Ollama 后台服务未运行。macOS：从应用程序启动应用。Linux：`sudo systemctl start ollama`。Windows：打开 Ollama 托盘图标。',
            '检查 `ollama --version` 成功——如果失败，重新安装。',
          ],
        },
        {
          title: '模型拉取非常慢',
          solutions: [
            '网络速度 < 50 Mbps——预计 20–30 分钟。保持连接不中断。',
            '网络波动——`ollama pull` 可以恢复。重新运行命令；它将从中断处继续。',
          ],
        },
        {
          title: '嵌入速度非常慢',
          solutions: [
            '系统在 swap-disk 上运行 embedding 模型——关闭其他应用以释放 RAM，重试。',
            '第一次 embed 会更慢（模型 lazy-load）；后续 embed 应该是 400–2000 块/秒。',
          ],
        },
        {
          title: '检索返回无关的块',
          solutions: [
            '步骤4中的嵌入模型——确认已切换到 nomic-embed-text。',
            '步骤7的块大小——尝试 1000/200（而不是默认 512/0）、重新嵌入、重新测试。',
            '文档质量——扫描的 PDF（无文本）、乱码字符或极其短的文本会导致差的检索。使用 ocrmypdf 预处理扫描的 PDF。',
          ],
        },
        {
          title: '应用程序使用过多内存',
          solutions: [
            '减小 Ollama 分配——停止 Ollama（macOS：退出应用；Linux：`sudo systemctl stop ollama`），编辑 Ollama 配置以限制 GPU 或 RAM，重新启动。',
            '关闭其他应用——AnythingLLM、嵌入模型、LLM 均在 RAM 中；总使用量通常为 6–8GB。',
          ],
        },
      ],
    },
    regionalContext: {
      id: 'regional-context',
      title: '数据安全、法规和中文市场',
      subsections: [
        {
          heading: '中国（数据安全法）',
          text: '中国 2021 年《数据安全法》要求敏感个人数据和重要数据的本地存储和处理。本地 RAG 完全满足这一要求——您的 PDF、向量索引和聊天历史记录始终保留在中国边界内。对于金融机构（个人财务数据）、医疗机构（患者记录）、法律事务所（客户文件）以及处理敏感商业秘密的企业，这是强制性的。无云 API、无跨境数据传输、无美国服务器。相比之下，OpenAI、Anthropic 或 Google 的云 RAG 要求将 PDF 发送到美国数据中心，违反数据安全法。对于中国企业，本地 RAG 不仅仅是隐私——这是合规强制。',
        },
        {
          heading: '亚太地区（跨境数据）',
          text: '日本（APPI）、韩国（PIPA）、新加坡（PDPA）和澳大利亚（Privacy Act）各有跨境数据传输限制。本地 RAG 规避所有这些——数据永远不会跨越边界。新加坡的多国 AI 治理倡议（MLAI）推荐本地部署敏感行业数据。对于 ASEAN、印度或太平洋地区的企业，选择本地 RAG 而不是云 API 消除了复杂的跨境合规。',
        },
        {
          heading: '企业部署（财务、医疗、法律）',
          text: '金融机构（银行、保险、投资公司）处理客户账户数据、交易历史和风险档案——所有受当地法规约束（中国人民银行数据安全指导、日本金融厅指南）。医疗机构（医院、诊所）保存患者医疗记录——中国《医疗记录暂行管理办法》要求本地化。法律事务所存储客户材料和诉讼文件——中国《律师职业操守规则》禁止不适当披露。AnythingLLM + Ollama + Llama 在您的服务器或工作站上运行，满足所有这些要求。无需云合规审计、无供应商锁定、无每月许可证费用。对于多个地点的大企业，您可以部署专用的本地 RAG 服务器，所有地点都指向同一本地向量索引——与云 RAG 成本相比节省 90%。',
        },
      ],
    },
    faqSection: {
      id: 'faq',
      title: '常见问题解答',
      faqs: [
        {
          q: 'Ollama 安装失败时如何处理？',
          a: 'macOS 中，Gatekeeper 可能阻止未签名帮助程序——转到系统设置 → 隐私和安全，点击"允许"。Windows 中，Defender SmartScreen 隔离二进制文件——右键单击 → 属性 → 解除阻止。Linux 中，安装脚本需要 sudo（用于 systemd unit 写入）；如果无法使用 sudo，从 github.com/ollama/ollama/releases 下载静态二进制文件、手动放入 PATH。',
        },
        {
          q: '为什么嵌入步骤很慢？',
          a: '首次 embed 时 Ollama 执行 lazy-load（磁盘速度 10–40 秒）。之后，在现代 CPU 上约 400–800 块/秒、Apple Silicon 上 2000+ 块/秒。如果持续吞吐量 < 100 块/秒，模型在 swap-disk 上运行——关闭其他应用释放 RAM、重试。',
        },
        {
          q: '一次可以上传多少个 PDF？',
          a: 'AnythingLLM 在单个拖放中接受数百个文件。实际限制是解析步骤中的 RAM：约 100 个中等 PDF（每个 50 页）峰值约 1GB。嵌入后，磁盘向量存储很小（每 100 页 10–30MB）。对于 1000+ PDF，参考本地 RAG 指南。',
        },
        {
          q: '受密码保护的 PDF 可以使用吗？',
          a: 'AnythingLLM 无法直接解密受密码保护的 PDF。先使用 `qpdf --password=YOUR_PASSWORD --decrypt input.pdf output.pdf` 解密（qpdf 是免费的、跨平台的）、上传未保护的输出。如果威胁模型需要，可以在嵌入后删除未保护的副本——嵌入不是人类可读的。',
        },
        {
          q: '如果检索返回错误的块怎么办？',
          a: '按影响顺序的三个旋钮：在步骤4中从默认嵌入器切换到 nomic-embed-text、将分块从 512/0 改为 1000/200 并重新嵌入（步骤7）、在工作区设置中将 top-K 从 4 增加到 6。之后全部如果检索仍然错误，文档需要预处理——删除页眉和页脚、规范化空格、将长 PDF 分割成每章文件。',
        },
        {
          q: '我应该使用 Llama 3.3 8B 以外的模型吗？',
          a: 'Llama 3.3 8B Q4_K_M 是 16GB 系统上 2026 年质量与 RAM 的最佳权衡。8GB RAM 使用 Phi-4 Mini Q4_K_M（约 2.4GB）。24GB+ 使用 Qwen 2.5 14B Q4 以获得更好的长文档综合。多语言工作负载中 Mistral Nemo 12B 表现比 Llama 3.3 更好。',
        },
        {
          q: '稍后如何更新模型？',
          a: '重新运行 `ollama pull llama3.3:8b-instruct-q4_K_M` 获取最新构建、重启 AnythingLLM 以重新检测模型版本。要切换到完全不同的模型，运行 `ollama pull <new-model>`、在 AnythingLLM 设置中更改 LLM 偏好下拉菜单——无需重新嵌入（嵌入依赖于嵌入器，而非模型）。',
        },
        {
          q: '可以移动到另一台计算机吗？',
          a: '可以。Ollama 模型存储在 ~/.ollama/models（macOS 和 Linux）或 %USERPROFILE%\\.ollama\\models（Windows）——复制该文件夹。AnythingLLM 工作区位于 ~/.anythingllm/storage——也复制。在新机器上安装 Ollama 和 AnythingLLM Desktop、放置复制的文件夹。工作区和嵌入会自动加载。',
        },
        {
          q: '如果 PDF 是扫描的图像怎么办？',
          a: '不能直接处理——AnythingLLM 可以提取文本但不能进行图像 OCR。预处理扫描的 PDF：`ocrmypdf input.pdf output.pdf`（跨平台、MIT 许可、使用 Tesseract）。Apple Silicon 上 `ocrmypdf -l jpn+eng` 支持 70+ 语言。OCR 后，输出 PDF 包含原始图像 + 可搜索文本层，AnythingLLM 正确提取文本。',
        },
        {
          q: '如何备份文档数据库？',
          a: 'AnythingLLM 将所有内容存储在 ~/.anythingllm/storage（macOS 和 Linux）或 %LOCALAPPDATA%\\anythingllm-desktop\\storage（Windows）。将该文件夹压缩为 tar 或 zip、复制到备份驱动器。文件夹包含原始文档、解析的块、向量索引和聊天历史。恢复就是复制回来并重新启动——无需特殊导入流程。',
        },
      ],
    },
    relatedReading: {
      id: 'related-reading',
      title: '相关阅读',
      items: [
        {
          title: '[本地 LLM 硬件指南 2026](/power-local-llm/local-llm-hardware-guide-2026?lang=zh)',
          description: '选择合适的硬件进行本地 RAG：16GB 笔记本电脑、桌面升级、专用服务器。',
        },
        {
          title: '[Ollama 模型库](/power-local-llm/ollama-models-list?lang=zh)',
          description: '浏览所有可用的开源量化模型——按大小、性能和用途过滤。',
        },
        {
          title: '[向量数据库在本地 RAG 中的作用](/power-local-llm/vector-databases-local-rag?lang=zh)',
          description: '了解 LanceDB、Chroma 和其他嵌入式向量存储如何加速检索。',
        },
        {
          title: '[生产中的本地 RAG：扩展到 1000+ 文档](/power-local-llm/scaling-local-rag-at-scale?lang=zh)',
          description: '超越单用户设置：多个工作区、同步、监测、成本分析。',
        },
      ],
    },
    sources: {
      id: 'sources',
      title: '来源和进一步阅读',
      items: [
        {
          title: 'Ollama 官方',
          url: 'https://ollama.com',
          description: 'Ollama 下载、文档和模型库。',
        },
        {
          title: 'AnythingLLM 官方',
          url: 'https://anythingllm.com',
          description: 'AnythingLLM Desktop 下载、文档和向量存储指南。',
        },
        {
          title: 'Nomic Embed Text',
          url: 'https://www.nomic.ai/blog/nomic-embed-text-v1-5',
          description: '关于嵌入模型、性能基准和与其他嵌入器的比较的技术详细信息。',
        },
        {
          title: 'Llama 3.3 模型卡',
          url: 'https://huggingface.co/meta-llama/Llama-3.3-70B',
          description: 'Meta 官方模型卡、训练数据、已知局限性和基准。',
        },
        {
          title: 'GGUF 量化指南',
          url: 'https://github.com/ggerganov/llama.cpp/discussions/4641',
          description: '理解 Q4_K_M、Q3_K 和其他 GGUF 量化方案的详细指南。',
        },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': '30分钟内构建本地 RAG 系统（Ollama + AnythingLLM）',
      'description':
        '在16GB RAM笔记本电脑上构建完全本地 RAG 系统的最快路径。堆栈：Ollama、Llama 3.3 8B、AnythingLLM、nomic-embed-text。总时间：从空白系统到与自己的PDF聊天仅需30分钟。',
      'url': 'https://www.promptquorum.com/zh/power-local-llm/local-rag-on-your-pdfs-step-by-step',
      'image': 'https://www.promptquorum.com/images/local-rag-pdf-hero.svg',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'inLanguage': 'zh',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
      },
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'AnythingLLM' },
        { '@type': 'Thing', 'name': 'Llama 3.3 8B' },
        { '@type': 'Thing', 'name': 'nomic-embed-text-v1.5' },
        { '@type': 'Thing', 'name': '本地 RAG' },
      ],
      'mentions': [
        { '@type': 'SoftwareApplication', 'name': 'Ollama' },
        { '@type': 'SoftwareApplication', 'name': 'AnythingLLM Desktop' },
        { '@type': 'SoftwareApplication', 'name': 'LanceDB' },
        { '@type': 'SoftwareApplication', 'name': 'Phi-4 Mini' },
        { '@type': 'SoftwareApplication', 'name': 'Qwen 2.5' },
      ],
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways'],
      },
      'howToSchema': {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'inLanguage': 'zh',
        'name': '在30分钟内构建本地 RAG 系统',
        'description': '分步指南在16GB RAM笔记本电脑上设置 Ollama、AnythingLLM 和本地 PDF RAG。',
        'step': [
          {
            '@type': 'HowToStep',
            'position': 1,
            'name': '安装 Ollama',
            'text': '从 ollama.com/download 下载您的操作系统 Ollama 安装程序并运行。',
          },
          {
            '@type': 'HowToStep',
            'position': 2,
            'name': '拉取 Llama 3.3 8B',
            'text': '在终端中运行 `ollama pull llama3.3:8b-instruct-q4_K_M`。',
          },
          {
            '@type': 'HowToStep',
            'position': 3,
            'name': '安装 AnythingLLM',
            'text': '从 anythingllm.com/download 下载 AnythingLLM Desktop 并运行安装程序。',
          },
          {
            '@type': 'HowToStep',
            'position': 4,
            'name': '配置嵌入模型',
            'text': '在 AnythingLLM 工作区设置中将嵌入提供程序更改为 Ollama、模型更改为 nomic-embed-text。',
          },
          {
            '@type': 'HowToStep',
            'position': 5,
            'name': '上传 PDF',
            'text': '将 5–20 个 PDF 拖到 AnythingLLM 工作区中。系统自动解析和嵌入它们。',
          },
          {
            '@type': 'HowToStep',
            'position': 6,
            'name': '测试查询',
            'text': '在聊天框中输入问题。验证答案引用相关块来自您的 PDF。',
          },
          {
            '@type': 'HowToStep',
            'position': 7,
            'name': '调整检索参数',
            'text': '如果检索不理想，调整嵌入模型、块大小或 top-K。重新嵌入并重新测试。',
          },
        ],
      },
      'faqSchema': {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'zh',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Ollama 安装失败时如何处理？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'macOS 中，Gatekeeper 可能阻止未签名帮助程序——转到系统设置 → 隐私和安全，点击"允许"。Windows 中，Defender SmartScreen 隔离二进制文件——右键单击 → 属性 → 解除阻止。Linux 中，安装脚本需要 sudo（用于 systemd unit 写入）；如果无法使用 sudo，从 github.com/ollama/ollama/releases 下载静态二进制文件、手动放入 PATH。',
            },
          },
          {
            '@type': 'Question',
            'name': '为什么嵌入步骤很慢？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                '首次 embed 时 Ollama 执行 lazy-load（磁盘速度 10–40 秒）。之后，在现代 CPU 上约 400–800 块/秒、Apple Silicon 上 2000+ 块/秒。如果持续吞吐量 < 100 块/秒，模型在 swap-disk 上运行——关闭其他应用释放 RAM、重试。',
            },
          },
          {
            '@type': 'Question',
            'name': '一次可以上传多少个 PDF？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'AnythingLLM 在单个拖放中接受数百个文件。实际限制是解析步骤中的 RAM：约 100 个中等 PDF（每个 50 页）峰值约 1GB。嵌入后，磁盘向量存储很小（每 100 页 10–30MB）。对于 1000+ PDF，参考本地 RAG 指南。',
            },
          },
          {
            '@type': 'Question',
            'name': '受密码保护的 PDF 可以使用吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'AnythingLLM 无法直接解密受密码保护的 PDF。先使用 `qpdf --password=YOUR_PASSWORD --decrypt input.pdf output.pdf` 解密（qpdf 是免费的、跨平台的）、上传未保护的输出。如果威胁模型需要，可以在嵌入后删除未保护的副本——嵌入不是人类可读的。',
            },
          },
          {
            '@type': 'Question',
            'name': '如果检索返回错误的块怎么办？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                '按影响顺序的三个旋钮：在步骤4中从默认嵌入器切换到 nomic-embed-text、将分块从 512/0 改为 1000/200 并重新嵌入（步骤7）、在工作区设置中将 top-K 从 4 增加到 6。之后全部如果检索仍然错误，文档需要预处理——删除页眉和页脚、规范化空格、将长 PDF 分割成每章文件。',
            },
          },
          {
            '@type': 'Question',
            'name': '我应该使用 Llama 3.3 8B 以外的模型吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'Llama 3.3 8B Q4_K_M 是 16GB 系统上 2026 年质量与 RAM 的最佳权衡。8GB RAM 使用 Phi-4 Mini Q4_K_M（约 2.4GB）。24GB+ 使用 Qwen 2.5 14B Q4 以获得更好的长文档综合。多语言工作负载中 Mistral Nemo 12B 表现比 Llama 3.3 更好。',
            },
          },
          {
            '@type': 'Question',
            'name': '稍后如何更新模型？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                '重新运行 `ollama pull llama3.3:8b-instruct-q4_K_M` 获取最新构建、重启 AnythingLLM 以重新检测模型版本。要切换到完全不同的模型，运行 `ollama pull <new-model>`、在 AnythingLLM 设置中更改 LLM 偏好下拉菜单——无需重新嵌入（嵌入依赖于嵌入器，而非模型）。',
            },
          },
          {
            '@type': 'Question',
            'name': '可以移动到另一台计算机吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                '可以。Ollama 模型存储在 ~/.ollama/models（macOS 和 Linux）或 %USERPROFILE%\\.ollama\\models（Windows）——复制该文件夹。AnythingLLM 工作区位于 ~/.anythingllm/storage——也复制。在新机器上安装 Ollama 和 AnythingLLM Desktop、放置复制的文件夹。工作区和嵌入会自动加载。',
            },
          },
          {
            '@type': 'Question',
            'name': '如果 PDF 是扫描的图像怎么办？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                '不能直接处理——AnythingLLM 可以提取文本但不能进行图像 OCR。预处理扫描的 PDF：`ocrmypdf input.pdf output.pdf`（跨平台、MIT 许可、使用 Tesseract）。Apple Silicon 上 `ocrmypdf -l jpn+eng` 支持 70+ 语言。OCR 后，输出 PDF 包含原始图像 + 可搜索文本层，AnythingLLM 正确提取文本。',
            },
          },
          {
            '@type': 'Question',
            'name': '如何备份文档数据库？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text':
                'AnythingLLM 将所有内容存储在 ~/.anythingllm/storage（macOS 和 Linux）或 %LOCALAPPDATA%\\anythingllm-desktop\\storage（Windows）。将该文件夹压缩为 tar 或 zip、复制到备份驱动器。文件夹包含原始文档、解析的块、向量索引和聊天历史。恢复就是复制回来并重新启动——无需特殊导入流程。',
            },
          },
        ],
      },
      'breadcrumbSchema': {
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
            'name': '本地 LLM 能力',
            'item': 'https://www.promptquorum.com/zh/power-local-llm',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': '30分钟内构建本地 RAG 系统',
            'item': 'https://www.promptquorum.com/zh/power-local-llm/local-rag-on-your-pdfs-step-by-step',
          },
        ],
      },
    },
  },
}
