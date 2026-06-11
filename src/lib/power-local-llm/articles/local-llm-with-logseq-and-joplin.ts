// Power Local LLM — Logseq and Joplin With Local LLMs: Smart Notes Without Cloud Sync (2026)
// Slug: local-llm-with-logseq-and-joplin
// EN + DE + FR + JA + ZH (all five languages translated).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Logseq and Joplin With Local LLMs: Smart Notes Without Cloud Sync (2026)',
    seoTitle: 'Logseq + Joplin Local LLM: Smart Notes No Cloud 2026',
    intro:
      '[Logseq](https://logseq.com) and [Joplin](https://joplinapp.org) are the two open-source notes apps in 2026 that pair cleanly with a local LLM and never need a cloud round-trip. Logseq runs the logseq-copilot plugin against [Ollama](https://ollama.com) for outliner-native chat and daily-journal AI; Joplin runs the Jarvis plugin against Ollama for note-aware chat, summaries, and embedding-backed retrieval. Both are GDPR-friendlier than Notion AI by default architecture — Notion sends note content to OpenAI; Logseq and Joplin send nothing unless you wire it up that way. The catch in 2026 is mobile: neither Logseq nor Joplin supports plugins on iOS or Android, so AI features run only on desktop. This guide ranks both tools on AI plugin maturity, sync-without-cloud paths, mobile compatibility, and the migration path from Notion, with concrete configuration steps for Ollama.',
    metaDescription:
      'Logseq + logseq-copilot vs Joplin + Jarvis on Ollama: private alternative to Notion AI. Cloud-free sync, GDPR posture, mobile plugin gap. 2026.',
    twitterDescription:
      'Open-source notes + local AI without cloud: Logseq with logseq-copilot, Joplin with Jarvis, both on Ollama. Mobile plugin gap explained. Notion migration path. GDPR-friendly by default.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'nomic-embed-text',
      'mxbai-embed-large',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16+ GB unified memory)',
      'PC with RTX 3060 12 GB or RTX 4060 8 GB',
      'PC with 16 GB RAM (CPU-only fallback)',
    ],
    audience:
      'Open-source notes users, privacy-conscious knowledge workers, EU/DACH professionals subject to GDPR, Notion AI defectors, and daily-journalers who want AI features without sending notes to OpenAI or Anthropic.',
    readTime: '14 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Logseq Joplin local LLM plugin',
    targetKeywords: [
      'logseq local llm',
      'joplin local ai',
      'logseq copilot ollama',
      'joplin jarvis plugin',
      'open source notes ai privacy',
      'notion ai alternative gdpr',
    ],
    leadAnswerBlock:
      '**For most readers in 2026, Logseq + logseq-copilot or Joplin + Jarvis paired with Ollama is the right private alternative to Notion AI.** Pick Logseq if you live in a daily-journal + outliner workflow; pick Joplin if you want plain Markdown notes with end-to-end encrypted sync. Both connect to Ollama at `http://localhost:11434/v1`, both support chat-with-current-note out of the box, and both are open-source under permissive licences (Logseq AGPL 3.0, Joplin AGPL 3.0 — same family). Neither sends note content to a cloud unless you explicitly configure a cloud provider in the plugin. The hard limit in 2026: neither tool supports plugins on iOS or Android, so AI features are desktop-only — mobile becomes a manual capture surface that you process with AI back at the desktop. For migration from Notion AI, Logseq has the cleaner import path via Notion\'s native Markdown export; Joplin\'s Notion import is functional but loses block-level structure.',
    quickAnswerTop: {
      en: {
        question: 'What is the best Logseq or Joplin plugin combo for a private local LLM in 2026?',
        answer:
          'Logseq + logseq-copilot or Joplin + Jarvis plugin, both pointed at Ollama at `http://localhost:11434/v1`. logseq-copilot adds chat blocks and slash commands inside Logseq; Jarvis adds chat, summarisation, and embedding-backed Q&A inside Joplin. Both are open-source AGPL plugins, both default to local-only, and both support Ollama natively. The recommended chat model in 2026 is Llama 3.2 3B (default) or Phi-4 Mini for 8 GB RAM systems. For embedding-backed retrieval (Joplin Jarvis only — Logseq does not currently expose a vault-wide embedding plugin in 2026), use nomic-embed-text or mxbai-embed-large. Mobile plugin support: not available on either tool in 2026 — AI features run only on desktop.',
        bullets: [
          'Logseq + logseq-copilot — slash-command chat blocks inside the outliner. Best for daily-journal and graph workflows.',
          'Joplin + Jarvis plugin — chat sidebar, summarisation, embedding-backed semantic search. Best for plain-Markdown notes with strong sync.',
          'Both plugins point at Ollama via `http://localhost:11434/v1` — no cloud calls by default.',
          'Logseq sync without cloud: Git (built-in) or local file sync via Syncthing/iCloud Drive. Joplin sync: end-to-end encrypted Joplin Cloud, or self-hosted Joplin Server, or Nextcloud / WebDAV / Dropbox / OneDrive with E2EE.',
          'Mobile plugin gap (2026): neither Logseq Mobile nor Joplin Mobile supports plugins. AI features are desktop-only — mobile is for capture, desktop is for processing.',
          'Notion AI migration: Logseq has the cleaner Markdown import path; Joplin loses block-level structure but preserves content. Both stop sending data to OpenAI the moment you switch.',
          'Recommended Ollama models: chat — Llama 3.2 3B or Phi-4 Mini; embeddings (Joplin Jarvis only) — nomic-embed-text or mxbai-embed-large.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Logseq or Joplin: Which Should You Pick?', anchor: '#which-tool' },
      { label: 'Tool Comparison Table', anchor: '#comparison-table' },
      { label: 'Logseq AI Plugins With Ollama', anchor: '#logseq-ai' },
      { label: 'Joplin AI Plugins With Ollama', anchor: '#joplin-ai' },
      { label: 'The Privacy Case Against Notion AI', anchor: '#vs-notion' },
      { label: 'Sync Without Cloud: Git, Syncthing, Joplin Server', anchor: '#sync' },
      { label: 'Mobile Plugin Gap: What Works and What Does Not', anchor: '#mobile' },
      { label: 'GDPR and EU Data Residency', anchor: '#gdpr' },
      { label: 'Migrating From Notion AI to Logseq or Joplin', anchor: '#notion-migration' },
      { label: 'Sample Workflows: Daily Journal, Meeting Notes, Research', anchor: '#workflows' },
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
          '**Logseq + logseq-copilot is the recommended combo for outliner / daily-journal users.** logseq-copilot adds chat blocks and slash commands inside Logseq, configured against Ollama at `http://localhost:11434/v1`. Best for users who already live in Logseq\'s daily-journal page model.',
          '**Joplin + Jarvis is the recommended combo for plain-Markdown notes users.** Jarvis adds a chat sidebar, summarisation commands, and embedding-backed semantic search across the notebook. Best for users who want a Notion-style notebook with strong end-to-end encrypted sync.',
          '**Both tools are open-source under AGPL 3.0** — the licence is permissive for personal and commercial use; the only constraint is source disclosure if you modify and host them publicly.',
          '**Privacy posture beats Notion AI by architecture.** Notion AI sends note content to OpenAI by design; Logseq and Joplin send nothing unless you explicitly configure a cloud provider. This is a meaningful distinction for healthcare, legal, journalism, and any GDPR-regulated context.',
          '**Mobile plugin gap is the biggest constraint in 2026.** Neither Logseq Mobile nor Joplin Mobile supports plugins. AI features run only on desktop — mobile becomes a capture surface (write notes), and processing (summarise, chat, retrieve) happens later on desktop.',
          '**Sync without cloud is straightforward but each tool takes a different approach.** Logseq has built-in Git sync and works cleanly with Syncthing or iCloud Drive. Joplin has end-to-end encrypted Joplin Cloud, self-hosted Joplin Server, or any WebDAV / Nextcloud / Dropbox backend with E2EE on top.',
          '**Notion AI migration is a one-way trip both tools handle.** Logseq imports Notion\'s Markdown export with cleaner block fidelity; Joplin imports content but flattens nested blocks. Once migrated, no notes leave your machine unless you choose to.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Tools covered:** Logseq (outliner, daily-journal-first) and Joplin (plain-Markdown notebook). [Obsidian](https://obsidian.md) is referenced for context — its dedicated guide is linked at the end.',
          '**Primary AI plugins:** logseq-copilot for Logseq; Jarvis (and similar Ollama-aware plugins) for Joplin.',
          '**LLM backend:** Ollama (recommended) at `http://localhost:11434/v1`, or any OpenAI-compatible local endpoint ([LM Studio](https://lmstudio.ai), llama.cpp server, vLLM).',
          '**Recommended chat models:** Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B (16 GB RAM systems); Qwen3 1.7B (8 GB RAM).',
          '**Recommended embedding models (Joplin Jarvis only):** nomic-embed-text (768-dim, fast), mxbai-embed-large (1024-dim, more accurate).',
          '**Licences:** Logseq AGPL 3.0; Joplin AGPL 3.0; logseq-copilot AGPL 3.0 (same author as Copilot for Obsidian, Logan Yang); Jarvis (Joplin) AGPL 3.0.',
          '**Sync paths:** Logseq — built-in Git, Syncthing, iCloud Drive, Logseq Sync (paid). Joplin — Joplin Cloud (paid, E2EE), self-hosted Joplin Server, WebDAV, Nextcloud, Dropbox, OneDrive (all support E2EE).',
          '**Mobile plugins:** not supported on either tool in 2026 — desktop-only AI.',
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: 'Logseq or Joplin: Which Should You Pick?',
        content:
          '**Pick Logseq if your note workflow is daily-journal-first or graph-shaped; pick Joplin if your notes are plain-Markdown documents with strong sync needs.** The two tools have different mental models — Logseq is an outliner with bidirectional links and a daily journal as the default capture surface; Joplin is a notebook of Markdown files with tags, search, and end-to-end encrypted sync. The AI plugin ecosystem in 2026 reflects this: logseq-copilot fits inside outliner blocks; Jarvis fits inside the Joplin sidebar.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq + logseq-copilot suits outliner / daily-journal workflows; Joplin + Jarvis suits plain-Markdown notebook workflows with strong end-to-end encrypted sync.',
          },
          {
            type: 'plain-terms',
            text: 'Both tools are private alternatives to Notion AI. The choice is mostly about how you write notes. Logseq treats notes as nested bullet points and gives you a daily journal page automatically — good for thinking-in-public, time-stamped capture, and graph-style cross-referencing. Joplin treats notes as full Markdown documents in notebooks — good for longer-form writing, structured documentation, and devices that need encrypted sync. Both work with a local LLM via Ollama, both are open-source, both stop sending data to anyone the moment you switch from Notion.',
          },
        ],
        decisionBlock: {
          title: 'Decision: Logseq or Joplin?',
          localIf: [
            'You write a daily journal and want AI to summarise / cluster / link days → Logseq + logseq-copilot',
            'You want graph-style backlinks and outliner blocks with chat in-line → Logseq + logseq-copilot',
            'You write longer-form Markdown notes (research, documentation, drafts) → Joplin + Jarvis',
            'You need end-to-end encrypted sync across devices → Joplin (better E2EE story)',
            'You want embedding-backed semantic search across the whole notebook → Joplin + Jarvis (Logseq has no equivalent in 2026)',
            'You are migrating from Notion and want the cleanest block-level fidelity → Logseq',
          ],
          cloudIf: [
            'You need AI features on iOS or Android (not just capture) → neither tool supports plugins on mobile in 2026; consider Obsidian Mobile + LAN Ollama with Tailscale',
            'You need real-time multi-user collaboration on the same vault → both Logseq and Joplin are single-user-by-design; collaborative editing is not in their model',
            'You need GPT-5.5 quality on every chat response → cloud equivalents (the local stack is ~70% as capable)',
          ],
          quick: [
            'Daily journal + outliner: Logseq + logseq-copilot',
            'Plain-Markdown notebook + E2EE sync: Joplin + Jarvis',
            'Mobile AI features: not feasible in 2026 — capture on mobile, process on desktop',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'A common pattern is to run both: Logseq for daily journal and rapid capture (everything time-stamped), Joplin for permanent reference notes (longer-form, tagged, encrypted-synced). The two tools do not share a database, but neither is heavy — running both adds about 200–400 MB combined RAM. Use Logseq for "thinking" and Joplin for "knowledge", with the local LLM available in both.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tool Comparison Table',
        content:
          '**The four axes that matter most: AI plugin depth, sync without cloud, mobile plugin support, and best-fit workflow.** Obsidian is included as a reference — readers comparing all three should also read the dedicated Obsidian guide linked at the end.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq leads on outliner-native AI and Git sync; Joplin leads on end-to-end encrypted sync and embedding-backed retrieval; Obsidian leads on plugin breadth at the cost of paid sync and a non-OSI licence.',
          },
        ],
        columns: ['Tool', 'AI plugins', 'Sync (no cloud)', 'Mobile', 'Best for'],
        rows: [
          { 'Tool': '[Logseq](https://logseq.com)', 'AI plugins': 'logseq-copilot (chat blocks, slash commands), GPT-3 Plugin variants', 'Sync (no cloud)': 'Built-in Git, Syncthing, iCloud Drive, Logseq Sync (paid E2EE)', 'Mobile': 'Mobile app available; plugins not supported on mobile (2026)', 'Best for': 'Daily-journal + outliner workflow' },
          { 'Tool': '[Joplin](https://joplinapp.org)', 'AI plugins': 'Jarvis (chat, summarise, embedding-backed Q&A), [Ollama](https://ollama.com)-aware integrations', 'Sync (no cloud)': 'Joplin Cloud (paid E2EE), self-hosted Joplin Server, WebDAV, Nextcloud, Dropbox, OneDrive (all E2EE-capable)', 'Mobile': 'Mobile app available; plugins not supported on mobile (2026)', 'Best for': 'Markdown notebook + E2EE sync' },
          { 'Tool': '[Obsidian](https://obsidian.md) (reference)', 'AI plugins': 'Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot', 'Sync (no cloud)': 'Git, Syncthing, iCloud Drive, Obsidian Sync (paid E2EE)', 'Mobile': 'Mobile app supports most plugins; LAN access to Ollama required', 'Best for': 'Power users with paid plugins / paid sync' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The mobile plugin column is the single biggest 2026 differentiator. Obsidian Mobile runs most plugins (including Smart Connections and Copilot) when Ollama is reachable on the LAN or via Tailscale. Logseq Mobile and Joplin Mobile do not run plugins at all — AI features are strictly desktop. If mobile AI matters, plan for capture-on-mobile + process-on-desktop, or look at Obsidian Mobile.',
          },
        ],
      },
      logseqAi: {
        id: 'logseq-ai',
        title: 'Logseq AI Plugins With Ollama',
        content:
          '**The recommended Logseq AI plugin in 2026 is logseq-copilot — same author as Copilot for Obsidian, configured to point at Ollama.** It adds chat blocks (`/copilot` slash command), inline rewriting, and journal-aware prompts directly inside Logseq\'s outliner. Logseq does not currently have an equivalent of Smart Connections (vault-wide embedding index), so semantic linking across the graph is not yet a solved problem in 2026.',
        items: [
          '**What it does:** chat blocks via slash commands, inline content generation, journal-aware prompts that pull the active page or selected blocks as context.',
          '**Install:** Settings → Plugins → Marketplace → search "logseq-copilot" → Install + Enable. Author: Logan Yang (same as Copilot for Obsidian).',
          '**Configure for Ollama:** Settings → logseq-copilot → API Provider → "Custom OpenAI" or "Ollama" → API base URL `http://localhost:11434/v1` → model `llama3.2:3b` (or any Ollama model name).',
          '**Slash commands:** type `/copilot` in any block to start a chat. Output appears as nested blocks under the prompt — outliner-native, so responses become first-class outline content.',
          '**Selection-based prompts:** select blocks → run a custom prompt template ("Summarise these into three bullets") → result appended below the selection.',
          '**Daily-journal integration:** point a template at the daily journal page → end-of-day summarisation, weekly review questions, or backlink expansion become single-keystroke actions.',
          '**What it does NOT do (2026):** there is no graph-wide embedding index. Logseq backlinks remain explicit; semantic discovery across pages is not yet supported by any open-source Logseq plugin.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Logseq-copilot output is just blocks — the same primitive as everything else in Logseq. This is the key advantage over Obsidian: AI responses are not floating sidebar text; they are graph nodes you can backlink, tag, query, and re-edit. Make heavy use of `/copilot` for capture, then refactor the response blocks the way you would any other note.',
          },
        ],
      },
      joplinAi: {
        id: 'joplin-ai',
        title: 'Joplin AI Plugins With Ollama',
        content:
          '**The recommended Joplin AI plugin in 2026 is Jarvis — it provides chat, summarisation, and embedding-backed semantic search across the entire notebook, all configurable to use Ollama.** Jarvis is the closest Joplin equivalent to Smart Connections + Copilot for Obsidian combined: one plugin, one config, two jobs.',
        items: [
          '**What it does:** chat sidebar, "Ask Jarvis" command across the whole notebook (embedding-backed retrieval), summarise selected note, generate notes from prompts, custom prompts on selections.',
          '**Install:** Tools → Options → Plugins → search "Jarvis" → Install + Enable. Author: Alon Bukai.',
          '**Configure for Ollama (chat):** Options → Jarvis → Model Provider → "OpenAI" with custom base URL → URL `http://localhost:11434/v1` → model `llama3.2:3b` → API key any non-empty string (Ollama ignores it).',
          '**Configure for Ollama (embeddings):** Options → Jarvis → Notes Database → enable Database → Embedding Model → "OpenAI" with custom base URL → URL `http://localhost:11434/v1` → model `nomic-embed-text`.',
          '**Initial indexing:** Jarvis embeds every note in the database when first enabled. Time on Mac M3 Pro with nomic-embed-text: 1K notes ~3 min, 5K notes ~15 min, 10K notes ~35 min. Re-embedding is incremental on save.',
          '**"Ask Jarvis" workflow:** Tools → Jarvis → Ask Jarvis → type a question → Jarvis retrieves relevant notes via embedding similarity and sends the chunks plus your question to the chat model. Equivalent to Copilot for Obsidian\'s vault QA.',
          '**Best for:** users who want a single plugin covering chat + retrieval inside Joplin without managing two separate plugins.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Jarvis stores its embedding database inside Joplin\'s SQLite database. The database file grows ~150–250 MB per 5,000 notes embedded with nomic-embed-text. If you sync the Joplin profile via Joplin Cloud or WebDAV, the embedding database is included in sync — plan for the bandwidth and sync-time cost. The embedding database itself is encrypted in transit when using Joplin\'s E2EE.',
          },
        ],
      },
      vsNotion: {
        id: 'vs-notion',
        title: 'The Privacy Case Against Notion AI',
        content:
          '**Notion AI sends note content to OpenAI by design — that is the architecture, not a configuration choice.** When you use Notion AI features on a page, Notion ships the page content to OpenAI servers, OpenAI processes it, and the response comes back through Notion. The data is governed by OpenAI\'s and Notion\'s privacy policies, not by your local file system. For users in regulated contexts (healthcare, legal, financial advice, journalism, GDPR-covered EU data) this is a structural problem that no setting fixes.',
        items: [
          '**Notion AI architecture:** notes leave your machine to be processed by OpenAI. Subject to OpenAI Enterprise data-handling terms (better than standard OpenAI API), but still off your infrastructure.',
          '**Logseq + logseq-copilot architecture:** Logseq runs as a local app, the plugin sends prompts to your local Ollama, no note content reaches a third party unless you explicitly configure a cloud provider in the plugin.',
          '**Joplin + Jarvis architecture:** Joplin runs as a local app, Jarvis sends prompts to your local Ollama, embedding generation runs locally, no note content reaches a third party unless you explicitly configure a cloud provider in Jarvis.',
          '**Data residency:** with Logseq or Joplin + Ollama, every byte of note content stays on your machine. With Notion AI, note content transits to US-based OpenAI servers regardless of where you are.',
          '**Audit trail:** with local LLMs, you can run a packet capture (Wireshark, Little Snitch, etc.) once after install and verify that the plugins make zero outbound calls during AI use. With Notion AI, outbound calls are inherent — there is nothing to verify.',
          '**Subprocessor risk:** Notion AI inherits all of OpenAI\'s subprocessors (Microsoft Azure as primary infrastructure, plus support vendors). Logseq and Joplin + Ollama have zero subprocessors for the AI layer.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The clearest test of "is my notes app actually private?" is to disconnect the network and try AI features. Logseq + logseq-copilot + Ollama: works fully offline. Joplin + Jarvis + Ollama: works fully offline. Notion AI: returns an error. Run this test once after setup to confirm your stack does what you think it does.',
          },
        ],
      },
      sync: {
        id: 'sync',
        title: 'Sync Without Cloud: Git, Syncthing, Joplin Server',
        content:
          '**Both Logseq and Joplin have multiple sync paths that never require trusting a third-party cloud with note content.** The right choice depends on whether you want zero-config (paid sync), Git-tracked history (developer-friendly), or peer-to-peer (no server).',
        items: [
          '**Logseq — built-in Git sync:** Settings → Sync → enable Git auto-commit. Logseq commits the graph to a configured Git remote on a schedule. Works with GitHub / GitLab / self-hosted Gitea. Plain-Markdown commits make history readable by humans.',
          '**Logseq — Syncthing (peer-to-peer):** install Syncthing on each device, point it at the Logseq graph folder. End-to-end encrypted, no central server, no third party. Excellent for desktop-to-desktop sync; works on Logseq Mobile when Syncthing-Fork (Android) or Möbius Sync (iOS) keeps the folder current.',
          '**Logseq — iCloud Drive:** keep the graph folder inside iCloud Drive on macOS / iOS. Cleanest path on Apple devices; data is at-rest encrypted by Apple but Apple holds the keys (not zero-knowledge).',
          '**Logseq Sync (paid E2EE):** the Logseq team\'s end-to-end encrypted sync. Trade-off: pay (~ to /year for the Pro tier including sync; pricing varies — check logseq.com), but get zero-config E2EE across devices including mobile.',
          '**Joplin — Joplin Cloud (paid E2EE):** the Joplin team\'s hosted sync with end-to-end encryption. Free for small note counts; paid tiers scale up. Hosted in the EU. Convenient and audit-friendly.',
          '**Joplin — self-hosted Joplin Server:** run the Joplin Server Docker image on a NAS / VPS / home server. End-to-end encryption from client to client; the server stores ciphertext. Best path for organisations wanting full ownership of the sync infrastructure.',
          '**Joplin — WebDAV / Nextcloud / Dropbox / OneDrive:** Joplin supports any WebDAV endpoint, plus first-class support for Nextcloud, Dropbox, OneDrive. Always enable Joplin\'s built-in E2EE on top — these providers see only ciphertext.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Self-hosted Joplin Server is the answer for organisations that want auditable, on-premises sync without trusting a third-party cloud. Run it on a small VPS or home server, point all clients at it, enable E2EE — the server holds only ciphertext, and you control the host. This is significantly easier than self-hosting Notion (which is not officially supported) or Obsidian Sync infrastructure.',
          },
        ],
      },
      mobile: {
        id: 'mobile',
        title: 'Mobile Plugin Gap: What Works and What Does Not',
        content:
          '**Neither Logseq Mobile nor Joplin Mobile supports plugins in 2026 — this is the single biggest constraint compared to Obsidian.** The mobile apps are functional capture and reading surfaces, but logseq-copilot and Jarvis run only on desktop. Any AI workflow has to assume mobile is for capture, desktop is for processing.',
        items: [
          '**Logseq Mobile (iOS / Android):** view, edit, and capture notes; backlinks and graph view work; sync works. Plugins do not run — including logseq-copilot. AI features are unavailable on mobile.',
          '**Joplin Mobile (iOS / Android):** view, edit, and capture notes; tags and search work; sync works (including E2EE). Plugins do not run — including Jarvis. AI features are unavailable on mobile.',
          '**Workaround pattern: capture on mobile, process on desktop.** Write notes freely on mobile. When you reach a desktop, run logseq-copilot or Jarvis to summarise, expand, link, or query the captured content.',
          '**Workaround pattern: home server + remote desktop.** Run logseq-copilot or Jarvis on a desktop in your home, access that desktop via Tailscale + a remote desktop / SSH tunnel from mobile when AI is needed. Adds setup cost; rarely worth it for casual users.',
          '**Workaround pattern: switch to Obsidian Mobile for AI use cases.** Obsidian Mobile runs most plugins. If mobile AI is critical, this is the simplest answer — at the cost of switching tools.',
          '**Why the gap exists:** both Logseq and Joplin run their plugin engines as desktop-only Node.js / Electron contexts. Mobile apps are native (Logseq Capacitor, Joplin React Native) and do not embed the plugin runtime. Removing the gap requires rewriting the plugin architecture — neither team has signalled this for 2026.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'If your AI use case is mobile-first (e.g., dictating notes on the go and wanting AI to summarise them immediately), Logseq and Joplin are not currently the right tools — Obsidian Mobile + LAN Ollama is. If your AI use case is desktop-first with mobile capture (the more common pattern), Logseq and Joplin both work well and the mobile gap is a minor inconvenience rather than a blocker.',
          },
        ],
      },
      gdpr: {
        id: 'gdpr',
        title: 'GDPR and EU Data Residency',
        content:
          '**For EU and DACH users, Logseq + logseq-copilot + Ollama and Joplin + Jarvis + Ollama are GDPR-friendlier than Notion AI by default architecture.** Note content never leaves the data controller\'s machine, so the data flows that GDPR Article 28 (processor agreements), Article 44 (international transfers), and the BSI-Grundschutz-Kataloge require to be documented for SaaS tools simply do not exist for the local stack.',
        items: [
          '**Article 28 (Processor agreements):** with Notion AI, Notion + OpenAI are processors and require a Data Processing Agreement (DPA) plus Standard Contractual Clauses for the OpenAI international transfer. With Logseq / Joplin + Ollama, there is no third-party processor — just the data controller running local software.',
          '**Article 44 (International transfers):** Notion AI ships data to US-based OpenAI servers; this is a Schrems II "international transfer" requiring SCCs and a Transfer Impact Assessment. Local Ollama processing eliminates the transfer entirely.',
          '**BSI-Grundschutz-Kataloge (DACH):** the German federal IT security guidelines treat cloud AI services as outsourcing requiring formal risk assessment. Local AI processing falls under the much simpler "in-house IT" baseline.',
          '**Right to erasure (Article 17):** with Notion AI, deleting note content from your account does not necessarily delete it from OpenAI\'s training pipeline or logs (depends on enterprise terms). With local Ollama, deletion is filesystem deletion — verifiable and complete.',
          '**Auditability:** local stacks are easier to audit. Run a packet capture once, verify zero outbound traffic during AI use, document the result. Cloud AI services require relying on the vendor\'s SOC 2 / ISO 27001 reports.',
          '**EU-friendly hosting (when sync involves a server):** Joplin Cloud is hosted in the EU; self-hosted Joplin Server can be hosted on EU infrastructure (Hetzner, OVH, IONOS). Logseq Sync is operated by Logseq Inc. (US-based) — for strict EU residency, prefer Git or Syncthing for Logseq sync.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For organisations needing a defensible AI-features story under GDPR, the local-LLM-on-Logseq-or-Joplin stack is the simplest answer. The DPA discussion goes from "we use Notion + OpenAI as subprocessors with these clauses" to "we use local software running on the controller\'s endpoint, no processor involved". The compliance team\'s job becomes much easier.',
          },
        ],
      },
      notionMigration: {
        id: 'notion-migration',
        title: 'Migrating From Notion AI to Logseq or Joplin',
        content:
          '**Notion offers a native Markdown export that both Logseq and Joplin can import — Logseq preserves block-level structure better, Joplin preserves content but flattens nested blocks.** Either way, the migration is a one-time export-import, not an ongoing sync, and it stops the data flow to OpenAI immediately.',
        numberedItems: [
          '**Export from Notion:** Settings → Settings & members → Settings → "Export all workspace content" → choose "Markdown & CSV" → download the ZIP. The export contains one .md file per page plus folders for nested pages.',
          '**Unzip and clean up:** Notion\'s export uses long page-ID suffixes in filenames (e.g., `My Page 1f8b2a3c4d5e6f7g8h9i.md`). Run a quick rename script to drop the IDs if filenames matter for your new tool.',
          '**Logseq import path:** open Logseq → File → New Graph → point at a new folder → copy the unzipped Notion files into the graph\'s `pages/` folder. Logseq picks them up; backlinks (Notion\'s `[[Page]]` style) survive when files match. Block-level nesting is preserved because both Notion and Logseq use list-style block indentation.',
          '**Joplin import path:** Tools → Import → "MD - Markdown directory" → select the unzipped Notion folder. Joplin creates one note per .md file inside a notebook structure mirroring Notion\'s page hierarchy. Block-level nesting flattens — Notion\'s nested toggle lists become flat Markdown lists.',
          '**Verify the migration:** spot-check 10–20 pages — confirm content, links, and tags survived. If you used Notion databases extensively, the CSV export is separate; both Logseq and Joplin treat it as a flat file rather than a structured database, so plan for some manual restructuring.',
          '**Stop Notion AI:** disable the Notion AI subscription in account settings. Future AI work happens via logseq-copilot or Jarvis on your local machine.',
          '**Verify privacy posture:** disconnect the network → run AI features in your new tool → confirm they work. This is the test that proves the migration achieved its goal.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'If you used Notion databases as structured data (project trackers, CRMs, etc.), the migration is more involved than for prose pages. Consider keeping those specific databases in Notion (without AI) while moving prose-heavy content to Logseq or Joplin — or migrate the databases to [AnythingLLM](https://anythingllm.com)\'s structured RAG, where the local LLM can query them as documents.',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: 'Sample Workflows: Daily Journal, Meeting Notes, Research',
        content:
          '**Three concrete workflows that show the local stack in action.** The first two are Logseq-centric (outliner / journal native); the third is Joplin-centric (longer-form notes).',
        items: [
          '**Logseq daily-journal summarisation:** end of day → open today\'s journal page → `/copilot Summarise this day in three bullets focused on decisions, blockers, and tomorrow\'s actions` → response appears as nested blocks. Save the prompt as a logseq-copilot template for one-keystroke runs.',
          '**Logseq weekly review:** Sunday evening → open a fresh page named `Week 19 review` → `/copilot Summarise the past 7 daily journal pages into 3 bullets per category: progress, blockers, themes` → logseq-copilot retrieves recent journal pages via the page link mechanism. Result becomes the seed of next week\'s planning.',
          '**Joplin meeting-note expansion:** during the meeting, capture rough bullets in a note → after the meeting, select all → Tools → Jarvis → "Expand and structure these notes" → output replaces or appends below. Save the prompt as a Jarvis preset.',
          '**Joplin research Q&A:** add 50–500 source notes (papers, articles, web clippings) into a single notebook → enable Jarvis Notes Database → wait for embedding → Tools → Jarvis → "Ask Jarvis" → ask cross-source questions ("Which sources discuss X?"). Equivalent to Obsidian Copilot vault QA but inside Joplin.',
          '**Logseq + Joplin combined:** capture in Logseq (fast, journal-native) → curate the durable items into Joplin (permanent reference). Run AI on each tool for its native strengths — quick chat / outline generation in Logseq, embedding-backed research Q&A in Joplin.',
          '**Mobile capture, desktop processing:** during the day, capture notes freely on Logseq Mobile or Joplin Mobile (no AI). At end-of-day on desktop, run logseq-copilot or Jarvis to summarise, link, and query — the AI catches up with what you captured offline.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The "mobile capture, desktop processing" pattern is the right way to think about Logseq + Joplin in 2026 given the mobile plugin gap. It is not a workaround — it matches how knowledge work actually happens. Mobile is for inputs (you have an idea, you capture it). Desktop is for synthesis (you process the captured material). The local LLM joins at synthesis time, which is exactly where its quality matters most.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Configuring logseq-copilot or Jarvis with a cloud provider by accident.** Both plugins offer "OpenAI" as a default provider. The local-only setup requires switching to a custom base URL pointing at `http://localhost:11434/v1`. Forgetting this means the plugin silently sends notes to OpenAI — exactly the failure mode you migrated away from. Verify with a packet capture.',
          '**Expecting plugin support on mobile.** Neither Logseq Mobile nor Joplin Mobile runs plugins in 2026. If you assume AI works everywhere your notes do, you will hit the wall the first time you try to summarise on the train. Plan for capture-on-mobile, process-on-desktop from day one.',
          '**Pointing the plugin at `http://localhost:11434/v1` from a different machine.** Localhost is per-machine. If you run Ollama on a desktop and Logseq on a laptop, you need the desktop\'s LAN IP (`http://192.168.1.20:11434/v1`) plus Ollama bound to `0.0.0.0:11434`.',
          '**Syncing the Joplin Jarvis embedding database to a free WebDAV tier with a small quota.** Embedding databases grow ~150–250 MB per 5,000 notes. Free tiers (Dropbox 2 GB) hit the limit fast at notebook scale. Plan for self-hosted Joplin Server or a paid tier when notebooks pass ~5,000 notes.',
          '**Not running an audit packet capture once.** Both plugins are open-source and well-behaved, but the only definitive proof that your stack is local-only is to run Wireshark / Little Snitch / equivalent during AI use and verify zero outbound traffic. Do this once after setup, document the result, move on.',
          '**Trying to use Logseq + logseq-copilot for embedding-backed retrieval.** logseq-copilot does not have a vault-wide embedding index in 2026. If you need "ask my whole graph", switch to Joplin + Jarvis or use Obsidian + Smart Connections. Logseq excels at outliner-native AI, not at semantic search.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Logseq — [logseq.com](https://logseq.com) and [github.com/logseq/logseq](https://github.com/logseq/logseq) (open-source outliner; AGPL 3.0).',
          'logseq-copilot — [github.com/logancyang/logseq-copilot](https://github.com/logancyang/logseq-copilot) (open-source Logseq plugin; AGPL 3.0).',
          'Joplin — [joplinapp.org](https://joplinapp.org) and [github.com/laurent22/joplin](https://github.com/laurent22/joplin) (open-source notebook; AGPL 3.0).',
          'Jarvis (Joplin) — [github.com/alondmnt/joplin-plugin-jarvis](https://github.com/alondmnt/joplin-plugin-jarvis) (open-source Joplin plugin; AGPL 3.0).',
          'Ollama — [ollama.com](https://ollama.com) and [github.com/ollama/ollama](https://github.com/ollama/ollama) (local LLM runtime; MIT).',
          'Notion AI privacy and data handling — [notion.com/help/notion-ai-faqs](https://www.notion.com/help/notion-ai-faqs) (vendor documentation for the comparison context).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Can Logseq replace Notion for AI users?',
            a: 'Yes for prose pages and daily-journal workflows. Install logseq-copilot, point it at Ollama, and you have chat, summarisation, and template-based generation inside Logseq — no data leaving your machine. The gap is structured databases: Notion\'s database views (project trackers, CRMs) do not have a clean Logseq equivalent. Prose-heavy users replace Notion fully; database-heavy users either accept manual restructuring or keep specific databases in Notion (without AI) while moving prose to Logseq.',
          },
          {
            q: 'Does Joplin support local AI plugins?',
            a: 'Yes. The recommended plugin in 2026 is Jarvis, which provides chat, summarisation, and embedding-backed semantic search across the notebook. Configure Jarvis to use Ollama at `http://localhost:11434/v1` for chat and `http://localhost:11434/v1` with `nomic-embed-text` for embeddings. Other Ollama-aware Joplin plugins exist but Jarvis is the most actively maintained and feature-complete.',
          },
          {
            q: 'Which has better sync without cloud — Logseq or Joplin?',
            a: 'Joplin has the broader and more polished cloud-free sync story. Joplin supports self-hosted Joplin Server, WebDAV, Nextcloud, plus first-class E2EE on top of any backend. Logseq has built-in Git sync (excellent for developers) and works with Syncthing or iCloud Drive, but lacks a self-hosted equivalent of Joplin Server. For teams that want auditable on-premises sync, Joplin Server is the better path; for developers who want Git-tracked history, Logseq Git sync is the better path.',
          },
          {
            q: 'Can I migrate from Notion to Logseq with AI features intact?',
            a: 'Migration moves content, not the Notion AI subscription. Export from Notion as Markdown, import into Logseq, then install logseq-copilot and configure it with Ollama — the AI layer is rebuilt locally. Logseq preserves Notion\'s block-level nesting better than Joplin does because both tools use list-indented blocks as their primitive. Notion AI features (auto-fill, smart properties on databases) do not have direct Logseq equivalents — those workflows need to be rebuilt with logseq-copilot prompts or scripts.',
          },
          {
            q: 'Does Logseq work fully offline?',
            a: 'Yes. Logseq is a local desktop app with no required cloud component. The graph is a folder of Markdown files; the app reads and writes them locally. Network access is needed only for syncing to a remote (Git push, Syncthing peer discovery, Logseq Sync) and for running logseq-copilot against a cloud LLM provider — the latter is optional. With Ollama as the LLM provider, the entire stack runs offline.',
          },
          {
            q: 'Are Joplin AI plugins as mature as Obsidian\'s?',
            a: 'Obsidian has more AI plugins and more concurrent maintainers. Joplin has fewer plugins but Jarvis is feature-complete and actively maintained — covering chat, summarisation, and embedding-backed retrieval in a single plugin. For most users, Jarvis matches or exceeds the Obsidian Copilot + Smart Connections combination on Joplin\'s plain-Markdown notebooks; for power users wanting plugin variety (template engines, character chat, MOC generators), Obsidian still has more options.',
          },
          {
            q: 'Which is better for daily journaling with AI — Logseq or Joplin?',
            a: 'Logseq. The daily journal is a built-in primitive in Logseq — every day automatically gets a journal page, blocks become first-class, and logseq-copilot output becomes nested blocks under the prompt. Daily-journal AI workflows (end-of-day summary, weekly review, mood tagging) feel native. Joplin can replicate this with notebooks-per-month and Jarvis prompts, but the friction is higher.',
          },
          {
            q: 'Can I use the same vault on multiple devices?',
            a: 'Yes — both tools support multi-device use via their sync layer. Logseq: Git, Syncthing, iCloud Drive, or Logseq Sync. Joplin: Joplin Cloud, self-hosted Joplin Server, WebDAV, Nextcloud, Dropbox, or OneDrive. Caveat: AI plugins run only on desktop. The vault content syncs to mobile, but logseq-copilot and Jarvis do not run there. Plan for desktop-AI, mobile-capture.',
          },
          {
            q: 'Do AI plugins work with Joplin Mobile or Logseq Mobile?',
            a: 'No — neither tool supports plugins on mobile in 2026. Logseq Mobile and Joplin Mobile are read/write surfaces for the synced vault, but the plugin runtime (Node.js / Electron) does not exist on the mobile apps. AI features (logseq-copilot, Jarvis) run only on desktop. If mobile AI matters, the alternatives are Obsidian Mobile + LAN Ollama, or capture-on-mobile + process-on-desktop.',
          },
          {
            q: 'Is open-source local AI integration safer than Notion AI?',
            a: 'Yes by default architecture. Notion AI sends note content to OpenAI by design — that is structural, not a configuration choice. Logseq + logseq-copilot + Ollama and Joplin + Jarvis + Ollama send nothing to a third party unless you explicitly configure a cloud LLM provider. For GDPR-covered EU data, healthcare, legal, and journalism contexts, this distinction is meaningful: local stacks have no processor, no international transfer, no subprocessor risk. The auditability is also simpler — a one-time packet capture proves zero outbound traffic during AI use.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Obsidian + Local LLM: 5 Plugins That Turn Your Vault Into a Second Brain (2026)](/power-local-llm/local-llm-with-obsidian-2026) — sister article for Obsidian users; the power-user alternative these readers are typically choosing against.',
          '[Local LLM Personal Knowledge Base 2026](/power-local-llm/local-llm-personal-knowledge-base-2026) — broader PKB architecture that Logseq and Joplin feed into; covers the RAG layer, capture pipelines, and 10K+ item workflows.',
          '[Replace Grammarly and Notion AI With a Local LLM (2026)](/power-local-llm/replace-grammarly-notion-ai-with-local) — adjacent SaaS replacement guide focused specifically on the Notion AI exit path.',
          '[Replace Zapier With Local AI Agents: 5 Workflows That Save /Month (2026)](/power-local-llm/replace-zapier-with-local-ai-agents) — adjacent productivity-stack replacement for readers consolidating SaaS dependencies.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — model authority for picking the chat and embedding models behind logseq-copilot and Jarvis.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — directory listings for Logseq, Joplin, Ollama, logseq-copilot, and Jarvis with licences and links.',
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
    title: 'Logseq y Joplin con LLMs locales: notas inteligentes sin sincronización en la nube (2026)',
    seoTitle: 'Logseq + Joplin con LLM local: notas sin nube 2026',
    intro:
      '[Logseq](https://logseq.com) y [Joplin](https://joplinapp.org) son las dos aplicaciones de notas open source que en 2026 se integran limpiamente con un LLM local y nunca necesitan una conexión a la nube. Logseq ejecuta el plugin logseq-copilot contra [Ollama](https://ollama.com) para chat nativo del outliner e IA en el diario diario; Joplin ejecuta el plugin Jarvis contra Ollama para chat consciente de notas, resúmenes y búsqueda respaldada por embeddings. Ambas son más compatibles con el RGPD que Notion AI por arquitectura predeterminada: Notion envía el contenido de las notas a OpenAI; Logseq y Joplin no envían nada a menos que tú lo configures así. El inconveniente en 2026 es el móvil: ni Logseq ni Joplin admiten plugins en iOS o Android, por lo que las funciones de IA solo se ejecutan en el escritorio. Esta guía clasifica ambas herramientas según la madurez de los plugins de IA, las rutas de sincronización sin nube, la compatibilidad móvil y el camino de migración desde Notion, con pasos de configuración concretos para Ollama.',
    metaDescription:
      'Logseq + logseq-copilot vs Joplin + Jarvis en Ollama: alternativa privada a Notion AI. Sync sin nube, postura RGPD, brecha de plugins móviles. 2026.',
    twitterDescription:
      'Notas open source + IA local sin nube: Logseq con logseq-copilot, Joplin con Jarvis, ambos en Ollama. Brecha de plugins móviles explicada. Ruta de migración desde Notion. Compatible con RGPD por defecto.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'nomic-embed-text',
      'mxbai-embed-large',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16+ GB de memoria unificada)',
      'PC con RTX 3060 12 GB o RTX 4060 8 GB',
      'PC con 16 GB de RAM (modo solo CPU como alternativa)',
    ],
    audience:
      'Usuarios de aplicaciones de notas open source, trabajadores del conocimiento con conciencia sobre la privacidad, profesionales de la UE/DACH sujetos al RGPD, usuarios que abandonan Notion AI, y personas que llevan un diario diario y quieren funciones de IA sin enviar sus notas a OpenAI o Anthropic.',
    readTime: '14 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Logseq Joplin LLM local plugin',
    targetKeywords: [
      'logseq llm local',
      'joplin ia local',
      'logseq copilot ollama',
      'joplin jarvis plugin',
      'notas open source ia privacidad',
      'alternativa notion ai rgpd',
    ],
    leadAnswerBlock:
      '**Para la mayoría de los lectores en 2026, Logseq + logseq-copilot o Joplin + Jarvis combinados con Ollama es la alternativa privada correcta a Notion AI.** Elige Logseq si tu flujo de trabajo es diario diario + outliner; elige Joplin si quieres notas Markdown puras con sincronización cifrada de extremo a extremo. Ambos se conectan a Ollama en `http://localhost:11434/v1`, ambos admiten chat con la nota actual de forma predeterminada, y ambos son open source bajo licencias permisivas (Logseq AGPL 3.0, Joplin AGPL 3.0 — misma familia). Ninguno envía contenido de notas a la nube a menos que configures explícitamente un proveedor en la nube en el plugin. El límite estricto en 2026: ninguna herramienta admite plugins en iOS o Android — las funciones de IA son exclusivamente de escritorio; el móvil se convierte en una superficie de captura manual que procesas con IA de vuelta en el escritorio. Para la migración desde Notion AI, Logseq tiene la ruta de importación más limpia a través del exportador nativo de Markdown de Notion; la importación de Notion en Joplin es funcional pero pierde la estructura a nivel de bloque.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor combinación de plugins de Logseq o Joplin para un LLM local privado en 2026?',
        answer:
          'Logseq + logseq-copilot o Joplin + plugin Jarvis, ambos apuntando a Ollama en `http://localhost:11434/v1`. logseq-copilot añade bloques de chat y comandos slash dentro de Logseq; Jarvis añade chat, resumen y Q&A respaldada por embeddings dentro de Joplin. Ambos son plugins open source AGPL, ambos se ejecutan solo localmente por defecto, y ambos admiten Ollama de forma nativa. El modelo de chat recomendado en 2026 es Llama 3.2 3B (predeterminado) o Phi-4 Mini para sistemas con 8 GB de RAM. Para búsqueda respaldada por embeddings (solo Joplin Jarvis — Logseq no expone actualmente un plugin de embeddings para todo el vault en 2026), usa nomic-embed-text o mxbai-embed-large. Soporte de plugins móviles: no disponible en ninguna herramienta en 2026 — las funciones de IA solo se ejecutan en el escritorio.',
        bullets: [
          'Logseq + logseq-copilot — bloques de chat mediante comandos slash dentro del outliner. Ideal para flujos de trabajo de diario diario y grafos.',
          'Joplin + plugin Jarvis — barra lateral de chat, resumen, búsqueda semántica respaldada por embeddings. Ideal para notas Markdown puras con sincronización robusta.',
          'Ambos plugins apuntan a Ollama via `http://localhost:11434/v1` — sin llamadas a la nube por defecto.',
          'Sync de Logseq sin nube: Git (integrado) o sincronización de archivos local mediante Syncthing/iCloud Drive. Sync de Joplin: Joplin Cloud cifrado de extremo a extremo, Joplin Server auto-alojado, o Nextcloud / WebDAV / Dropbox / OneDrive con E2EE.',
          'Brecha de plugins móviles (2026): ni Logseq Mobile ni Joplin Mobile admiten plugins. Las funciones de IA son solo de escritorio — el móvil es para captura, el escritorio para procesamiento.',
          'Migración desde Notion AI: Logseq tiene la ruta de importación Markdown más limpia; Joplin pierde la estructura a nivel de bloque pero preserva el contenido. Ambos dejan de enviar datos a OpenAI en el momento en que cambias.',
          'Modelos de Ollama recomendados: chat — Llama 3.2 3B o Phi-4 Mini; embeddings (solo Joplin Jarvis) — nomic-embed-text o mxbai-embed-large.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Logseq o Joplin: ¿cuál deberías elegir?', anchor: '#which-tool' },
      { label: 'Tabla comparativa de herramientas', anchor: '#comparison-table' },
      { label: 'Plugins de IA de Logseq con Ollama', anchor: '#logseq-ai' },
      { label: 'Plugins de IA de Joplin con Ollama', anchor: '#joplin-ai' },
      { label: 'El caso de privacidad contra Notion AI', anchor: '#vs-notion' },
      { label: 'Sync sin nube: Git, Syncthing, Joplin Server', anchor: '#sync' },
      { label: 'Brecha de plugins móviles: qué funciona y qué no', anchor: '#mobile' },
      { label: 'RGPD y residencia de datos en la UE', anchor: '#gdpr' },
      { label: 'Migrar de Notion AI a Logseq o Joplin', anchor: '#notion-migration' },
      { label: 'Flujos de trabajo de ejemplo: diario diario, notas de reunión, investigación', anchor: '#workflows' },
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
          '**Logseq + logseq-copilot es la combinación recomendada para usuarios de outliner / diario diario.** logseq-copilot añade bloques de chat y comandos slash dentro de Logseq, configurado contra Ollama en `http://localhost:11434/v1`. Ideal para usuarios que ya viven en el modelo de página de diario diario de Logseq.',
          '**Joplin + Jarvis es la combinación recomendada para usuarios de notas Markdown puras.** Jarvis añade una barra lateral de chat, comandos de resumen y búsqueda semántica respaldada por embeddings en todo el cuaderno. Ideal para usuarios que quieren un cuaderno estilo Notion con sincronización cifrada de extremo a extremo robusta.',
          '**Ambas herramientas son open source bajo AGPL 3.0** — la licencia es permisiva para uso personal y comercial; la única restricción es la divulgación del código fuente si las modificas y las alojas públicamente.',
          '**La postura de privacidad supera a Notion AI por arquitectura.** Notion AI envía el contenido de las notas a OpenAI por diseño; Logseq y Joplin no envían nada a menos que configures explícitamente un proveedor en la nube. Esta distinción es significativa para sanidad, derecho, periodismo y cualquier contexto regulado por el RGPD.',
          '**La brecha de plugins móviles es la mayor restricción en 2026.** Ni Logseq Mobile ni Joplin Mobile admiten plugins. Las funciones de IA solo se ejecutan en el escritorio — el móvil se convierte en una superficie de captura (escribir notas), y el procesamiento (resumir, chatear, recuperar) ocurre más tarde en el escritorio.',
          '**La sync sin nube es sencilla, pero cada herramienta toma un enfoque diferente.** Logseq tiene sincronización Git integrada y funciona limpiamente con Syncthing o iCloud Drive. Joplin tiene Joplin Cloud cifrado de extremo a extremo, Joplin Server auto-alojado, o cualquier backend WebDAV / Nextcloud / Dropbox con E2EE encima.',
          '**La migración desde Notion AI es un viaje de ida que ambas herramientas gestionan.** Logseq importa el exportador Markdown de Notion con mayor fidelidad a nivel de bloque; Joplin importa el contenido pero aplana los bloques anidados. Una vez migrado, ninguna nota sale de tu máquina a menos que lo decidas.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Herramientas cubiertas:** Logseq (outliner, con el diario diario como primera opción) y Joplin (cuaderno Markdown puro). [Obsidian](https://obsidian.md) se menciona como referencia — su guía dedicada está enlazada al final.',
          '**Plugins de IA principales:** logseq-copilot para Logseq; Jarvis (y plugins similares compatibles con Ollama) para Joplin.',
          '**Backend LLM:** Ollama (recomendado) en `http://localhost:11434/v1`, o cualquier endpoint local compatible con OpenAI ([LM Studio](https://lmstudio.ai), servidor llama.cpp, vLLM).',
          '**Modelos de chat recomendados:** Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B (sistemas con 16 GB de RAM); Qwen3 1.7B (8 GB de RAM).',
          '**Modelos de embedding recomendados (solo Joplin Jarvis):** nomic-embed-text (768 dimensiones, rápido), mxbai-embed-large (1024 dimensiones, más preciso).',
          '**Licencias:** Logseq AGPL 3.0; Joplin AGPL 3.0; logseq-copilot AGPL 3.0 (mismo autor que Copilot for Obsidian, Logan Yang); Jarvis (Joplin) AGPL 3.0.',
          '**Rutas de sync:** Logseq — Git integrado, Syncthing, iCloud Drive, Logseq Sync (de pago). Joplin — Joplin Cloud (de pago, E2EE), Joplin Server auto-alojado, WebDAV, Nextcloud, Dropbox, OneDrive (todos admiten E2EE).',
          '**Plugins móviles:** no admitidos en ninguna herramienta en 2026 — IA solo en escritorio.',
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: 'Logseq o Joplin: ¿cuál deberías elegir?',
        content:
          '**Elige Logseq si tu flujo de trabajo de notas es principalmente diario diario o en forma de grafo; elige Joplin si tus notas son documentos Markdown puros con fuertes necesidades de sincronización.** Las dos herramientas tienen modelos mentales diferentes: Logseq es un outliner con enlaces bidireccionales y un diario diario como superficie de captura predeterminada; Joplin es un cuaderno de archivos Markdown con etiquetas, búsqueda y sincronización cifrada de extremo a extremo. El ecosistema de plugins de IA en 2026 refleja esto: logseq-copilot se integra en los bloques del outliner; Jarvis se integra en la barra lateral de Joplin.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq + logseq-copilot es adecuado para flujos de trabajo de outliner / diario diario; Joplin + Jarvis es adecuado para flujos de trabajo de cuaderno Markdown puro con sincronización cifrada de extremo a extremo robusta.',
          },
          {
            type: 'plain-terms',
            text: 'Ambas herramientas son alternativas privadas a Notion AI. La elección depende principalmente de cómo escribes notas. Logseq trata las notas como viñetas anidadas y te da una página de diario diario automáticamente — bueno para pensar en voz alta, capturar con marca de tiempo y referenciar en modo grafo. Joplin trata las notas como documentos Markdown completos en cuadernos — bueno para escritura de formato largo, documentación estructurada y dispositivos que necesitan sincronización cifrada. Ambos funcionan con un LLM local via Ollama, ambos son open source, y ambos dejan de enviar datos a nadie en el momento en que cambias desde Notion.',
          },
        ],
        decisionBlock: {
          title: 'Decisión: ¿Logseq o Joplin?',
          localIf: [
            'Llevas un diario diario y quieres que la IA resuma / agrupe / enlace días → Logseq + logseq-copilot',
            'Quieres backlinks estilo grafo y bloques del outliner con chat en línea → Logseq + logseq-copilot',
            'Escribes notas Markdown de formato largo (investigación, documentación, borradores) → Joplin + Jarvis',
            'Necesitas sincronización cifrada de extremo a extremo entre dispositivos → Joplin (mejor propuesta E2EE)',
            'Quieres búsqueda semántica respaldada por embeddings en todo el cuaderno → Joplin + Jarvis (Logseq no tiene equivalente en 2026)',
            'Estás migrando desde Notion y quieres la mayor fidelidad a nivel de bloque → Logseq',
          ],
          cloudIf: [
            'Necesitas funciones de IA en iOS o Android (no solo captura) → ninguna herramienta admite plugins en móvil en 2026; considera Obsidian Mobile + Ollama en LAN con Tailscale',
            'Necesitas colaboración multiusuario en tiempo real en el mismo vault → tanto Logseq como Joplin son de un solo usuario por diseño; la edición colaborativa no está en su modelo',
            'Necesitas calidad GPT-5.5 en cada respuesta de chat → equivalentes en la nube (la pila local alcanza ~70% de capacidad)',
          ],
          quick: [
            'Diario diario + outliner: Logseq + logseq-copilot',
            'Cuaderno Markdown puro + sync E2EE: Joplin + Jarvis',
            'Funciones de IA en móvil: no viable en 2026 — captura en móvil, procesamiento en escritorio',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Un patrón común es ejecutar ambos: Logseq para el diario diario y captura rápida (todo con marca de tiempo), Joplin para notas de referencia permanentes (más largas, etiquetadas, sincronizadas cifradas). Las dos herramientas no comparten una base de datos, pero ninguna es pesada — ejecutar ambas añade unos 200–400 MB de RAM combinados. Usa Logseq para "pensar" y Joplin para "saber", con el LLM local disponible en ambos.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa de herramientas',
        content:
          '**Los cuatro ejes que más importan: profundidad de plugins de IA, sync sin nube, soporte de plugins móviles y flujo de trabajo más adecuado.** Obsidian se incluye como referencia — los lectores que comparan las tres herramientas también deberían leer la guía dedicada de Obsidian enlazada al final.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq lidera en IA nativa del outliner y sync con Git; Joplin lidera en sync cifrada de extremo a extremo y recuperación respaldada por embeddings; Obsidian lidera en amplitud de plugins al costo de sync de pago y una licencia no OSI.',
          },
        ],
        columns: ['Herramienta', 'Plugins de IA', 'Sync (sin nube)', 'Móvil', 'Ideal para'],
        rows: [
          { 'Herramienta': '[Logseq](https://logseq.com)', 'Plugins de IA': 'logseq-copilot (bloques de chat, comandos slash), variantes del plugin GPT-3', 'Sync (sin nube)': 'Git integrado, Syncthing, iCloud Drive, Logseq Sync (de pago E2EE)', 'Móvil': 'App móvil disponible; plugins no admitidos en móvil (2026)', 'Ideal para': 'Flujo de trabajo de diario diario + outliner' },
          { 'Herramienta': '[Joplin](https://joplinapp.org)', 'Plugins de IA': 'Jarvis (chat, resumen, Q&A respaldada por embeddings), integraciones compatibles con [Ollama](https://ollama.com)', 'Sync (sin nube)': 'Joplin Cloud (de pago E2EE), Joplin Server auto-alojado, WebDAV, Nextcloud, Dropbox, OneDrive (todos compatibles con E2EE)', 'Móvil': 'App móvil disponible; plugins no admitidos en móvil (2026)', 'Ideal para': 'Cuaderno Markdown + sync E2EE' },
          { 'Herramienta': '[Obsidian](https://obsidian.md) (referencia)', 'Plugins de IA': 'Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot', 'Sync (sin nube)': 'Git, Syncthing, iCloud Drive, Obsidian Sync (de pago E2EE)', 'Móvil': 'La app móvil admite la mayoría de plugins; se requiere acceso LAN a Ollama', 'Ideal para': 'Usuarios avanzados con plugins de pago / sync de pago' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La columna de móvil es el mayor diferenciador de 2026. Obsidian Mobile ejecuta la mayoría de plugins (incluidos Smart Connections y Copilot) cuando Ollama es accesible en la LAN o via Tailscale. Logseq Mobile y Joplin Mobile no ejecutan ningún plugin — las funciones de IA son estrictamente de escritorio. Si la IA en móvil importa, planifica captura en móvil + procesamiento en escritorio, o echa un vistazo a Obsidian Mobile.',
          },
        ],
      },
      logseqAi: {
        id: 'logseq-ai',
        title: 'Plugins de IA de Logseq con Ollama',
        content:
          '**El plugin de IA de Logseq recomendado en 2026 es logseq-copilot — mismo autor que Copilot for Obsidian, configurado para apuntar a Ollama.** Añade bloques de chat (comando slash `/copilot`), reescritura en línea y prompts conscientes del diario directamente dentro del outliner de Logseq. Logseq actualmente no tiene un equivalente a Smart Connections (índice de embeddings para todo el vault), por lo que el enlace semántico a través del grafo aún no es un problema resuelto en 2026.',
        items: [
          '**Qué hace:** bloques de chat mediante comandos slash, generación de contenido en línea, prompts conscientes del diario que toman la página activa o los bloques seleccionados como contexto.',
          '**Instalación:** Configuración → Plugins → Marketplace → busca "logseq-copilot" → Instalar + Habilitar. Autor: Logan Yang (el mismo que Copilot for Obsidian).',
          '**Configurar para Ollama:** Configuración → logseq-copilot → API Provider → "Custom OpenAI" u "Ollama" → URL base de API `http://localhost:11434/v1` → modelo `llama3.2:3b` (o cualquier nombre de modelo de Ollama).',
          '**Comandos slash:** escribe `/copilot` en cualquier bloque para iniciar un chat. La salida aparece como bloques anidados bajo el prompt — nativo del outliner, por lo que las respuestas se convierten en contenido de esquema de primera clase.',
          '**Prompts basados en selección:** selecciona bloques → ejecuta una plantilla de prompt personalizada ("Resume estos en tres puntos") → el resultado se añade debajo de la selección.',
          '**Integración con el diario diario:** apunta una plantilla a la página del diario diario → el resumen de fin de día, las preguntas de revisión semanal o la expansión de backlinks se convierten en acciones con una sola tecla.',
          '**Lo que NO hace (2026):** no existe un índice de embeddings para todo el grafo. Los backlinks de Logseq siguen siendo explícitos; el descubrimiento semántico entre páginas aún no está soportado por ningún plugin open source de Logseq.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La salida de logseq-copilot son solo bloques — el mismo primitivo que todo lo demás en Logseq. Esta es la ventaja clave sobre Obsidian: las respuestas de IA no son texto flotante en la barra lateral; son nodos del grafo que puedes enlazar, etiquetar, consultar y reeditar. Usa `/copilot` intensivamente para la captura, luego refactoriza los bloques de respuesta como harías con cualquier otra nota.',
          },
        ],
      },
      joplinAi: {
        id: 'joplin-ai',
        title: 'Plugins de IA de Joplin con Ollama',
        content:
          '**El plugin de IA de Joplin recomendado en 2026 es Jarvis — proporciona chat, resumen y búsqueda semántica respaldada por embeddings en todo el cuaderno, todo configurable para usar Ollama.** Jarvis es el equivalente de Joplin más cercano a Smart Connections + Copilot for Obsidian combinados: un plugin, una configuración, dos trabajos.',
        items: [
          '**Qué hace:** barra lateral de chat, comando "Ask Jarvis" en todo el cuaderno (recuperación respaldada por embeddings), resumir nota seleccionada, generar notas a partir de prompts, prompts personalizados en selecciones.',
          '**Instalación:** Herramientas → Opciones → Plugins → busca "Jarvis" → Instalar + Habilitar. Autor: Alon Bukai.',
          '**Configurar para Ollama (chat):** Opciones → Jarvis → Model Provider → "OpenAI" con URL base personalizada → URL `http://localhost:11434/v1` → modelo `llama3.2:3b` → clave API cualquier cadena no vacía (Ollama la ignora).',
          '**Configurar para Ollama (embeddings):** Opciones → Jarvis → Notes Database → habilitar Database → Embedding Model → "OpenAI" con URL base personalizada → URL `http://localhost:11434/v1` → modelo `nomic-embed-text`.',
          '**Indexación inicial:** Jarvis integra cada nota en la base de datos cuando se habilita por primera vez. Tiempo en Mac M3 Pro con nomic-embed-text: 1K notas ~3 min, 5K notas ~15 min, 10K notas ~35 min. La reintegración al guardar es incremental.',
          '**Flujo de trabajo "Ask Jarvis":** Herramientas → Jarvis → Ask Jarvis → escribe una pregunta → Jarvis recupera notas relevantes por similitud de embedding y envía los fragmentos más tu pregunta al modelo de chat. Equivalente al QA del vault de Copilot for Obsidian.',
          '**Ideal para:** usuarios que quieren un único plugin que cubra chat + recuperación dentro de Joplin sin gestionar dos plugins separados.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Jarvis almacena su base de datos de embeddings dentro de la base de datos SQLite de Joplin. El archivo de base de datos crece ~150–250 MB por cada 5.000 notas integradas con nomic-embed-text. Si sincronizas el perfil de Joplin via Joplin Cloud o WebDAV, la base de datos de embeddings se incluye en la sync — planifica el costo de ancho de banda y tiempo de sincronización. La base de datos de embeddings en sí está cifrada en tránsito cuando se usa el E2EE de Joplin.',
          },
        ],
      },
      vsNotion: {
        id: 'vs-notion',
        title: 'El caso de privacidad contra Notion AI',
        content:
          '**Notion AI envía el contenido de las notas a OpenAI por diseño — eso es la arquitectura, no una elección de configuración.** Cuando usas las funciones de Notion AI en una página, Notion envía el contenido de la página a los servidores de OpenAI, OpenAI lo procesa, y la respuesta vuelve a través de Notion. Los datos se rigen por las políticas de privacidad de OpenAI y Notion, no por tu sistema de archivos local. Para usuarios en contextos regulados (sanidad, derecho, asesoramiento financiero, periodismo, datos de la UE cubiertos por el RGPD) este es un problema estructural que ninguna configuración soluciona.',
        items: [
          '**Arquitectura de Notion AI:** las notas salen de tu máquina para ser procesadas por OpenAI. Sujeto a los términos de manejo de datos de OpenAI Enterprise (mejor que la API estándar de OpenAI), pero aún fuera de tu infraestructura.',
          '**Arquitectura de Logseq + logseq-copilot:** Logseq se ejecuta como una aplicación local, el plugin envía los prompts a tu Ollama local, ningún contenido de nota llega a un tercero a menos que configures explícitamente un proveedor en la nube en el plugin.',
          '**Arquitectura de Joplin + Jarvis:** Joplin se ejecuta como una aplicación local, Jarvis envía los prompts a tu Ollama local, la generación de embeddings se ejecuta localmente, ningún contenido de nota llega a un tercero a menos que configures explícitamente un proveedor en la nube en Jarvis.',
          '**Residencia de datos:** con Logseq o Joplin + Ollama, cada byte de contenido de nota permanece en tu máquina. Con Notion AI, el contenido de las notas transita por servidores de OpenAI con sede en EE. UU. independientemente de dónde estés.',
          '**Pista de auditoría:** con LLMs locales, puedes ejecutar una captura de paquetes (Wireshark, Little Snitch, etc.) una vez después de la instalación y verificar que los plugins realizan cero llamadas salientes durante el uso de IA. Con Notion AI, las llamadas salientes son inherentes — no hay nada que verificar.',
          '**Riesgo de subprocesadores:** Notion AI hereda todos los subprocesadores de OpenAI (Microsoft Azure como infraestructura principal, más proveedores de soporte). Logseq y Joplin + Ollama tienen cero subprocesadores para la capa de IA.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La prueba más clara de "¿es mi aplicación de notas realmente privada?" es desconectar la red e intentar usar las funciones de IA. Logseq + logseq-copilot + Ollama: funciona completamente sin conexión. Joplin + Jarvis + Ollama: funciona completamente sin conexión. Notion AI: devuelve un error. Haz esta prueba una vez después de la configuración para confirmar que tu stack hace lo que crees.',
          },
        ],
      },
      sync: {
        id: 'sync',
        title: 'Sync sin nube: Git, Syncthing, Joplin Server',
        content:
          '**Tanto Logseq como Joplin tienen múltiples rutas de sync que nunca requieren confiar el contenido de las notas a una nube de terceros.** La elección correcta depende de si quieres cero configuración (sync de pago), historial rastreado por Git (amigable para desarrolladores) o par a par (sin servidor).',
        items: [
          '**Logseq — sync Git integrada:** Configuración → Sync → habilitar auto-commit de Git. Logseq confirma el grafo en un remoto Git configurado según un calendario. Funciona con GitHub / GitLab / Gitea auto-alojado. Los commits de Markdown puro hacen que el historial sea legible para humanos.',
          '**Logseq — Syncthing (par a par):** instala Syncthing en cada dispositivo, apúntalo a la carpeta del grafo de Logseq. Cifrado de extremo a extremo, sin servidor central, sin terceros. Excelente para sync de escritorio a escritorio; funciona en Logseq Mobile cuando Syncthing-Fork (Android) o Möbius Sync (iOS) mantiene la carpeta actualizada.',
          '**Logseq — iCloud Drive:** mantén la carpeta del grafo dentro de iCloud Drive en macOS / iOS. La ruta más limpia en dispositivos Apple; los datos están cifrados en reposo por Apple, pero Apple guarda las claves (no es zero-knowledge).',
          '**Logseq Sync (de pago E2EE):** la sync cifrada de extremo a extremo del equipo de Logseq. Desventaja: de pago (el nivel Pro incluye sync; los precios varían — consulta logseq.com), pero ofrece E2EE sin configuración en todos los dispositivos incluido el móvil.',
          '**Joplin — Joplin Cloud (de pago E2EE):** la sync alojada del equipo de Joplin con cifrado de extremo a extremo. Gratis para cantidades pequeñas de notas; los niveles de pago escalan. Alojado en la UE. Conveniente y amigable para auditorías.',
          '**Joplin — Joplin Server auto-alojado:** ejecuta la imagen Docker de Joplin Server en un NAS / VPS / servidor doméstico. Cifrado de extremo a extremo de cliente a cliente; el servidor almacena texto cifrado. La mejor opción para organizaciones que quieren propiedad total de la infraestructura de sync.',
          '**Joplin — WebDAV / Nextcloud / Dropbox / OneDrive:** Joplin admite cualquier endpoint WebDAV, más soporte de primera clase para Nextcloud, Dropbox, OneDrive. Siempre habilita el E2EE integrado de Joplin encima — estos proveedores solo ven texto cifrado.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Joplin Server auto-alojado es la respuesta para organizaciones que quieren sync auditable en las instalaciones sin confiar en una nube de terceros. Ejecútalo en un pequeño VPS o servidor doméstico, apunta todos los clientes a él, habilita E2EE — el servidor solo guarda texto cifrado y tú controlas el host. Esto es significativamente más fácil que auto-alojar Notion (no admitido oficialmente) o la infraestructura de Obsidian Sync.',
          },
        ],
      },
      mobile: {
        id: 'mobile',
        title: 'Brecha de plugins móviles: qué funciona y qué no',
        content:
          '**Ni Logseq Mobile ni Joplin Mobile admiten plugins en 2026 — esta es la mayor restricción en comparación con Obsidian.** Las apps móviles son superficies funcionales de captura y lectura, pero logseq-copilot y Jarvis solo se ejecutan en el escritorio. Cualquier flujo de trabajo de IA debe asumir que el móvil es para captura y el escritorio para procesamiento.',
        items: [
          '**Logseq Mobile (iOS / Android):** ver, editar y capturar notas; los backlinks y la vista de grafo funcionan; la sync funciona. Los plugins no se ejecutan — incluido logseq-copilot. Las funciones de IA no están disponibles en móvil.',
          '**Joplin Mobile (iOS / Android):** ver, editar y capturar notas; las etiquetas y la búsqueda funcionan; la sync funciona (incluido E2EE). Los plugins no se ejecutan — incluido Jarvis. Las funciones de IA no están disponibles en móvil.',
          '**Patrón alternativo: captura en móvil, procesamiento en escritorio.** Escribe notas libremente en móvil. Cuando llegas al escritorio, ejecuta logseq-copilot o Jarvis para resumir, expandir, enlazar o consultar el contenido capturado.',
          '**Patrón alternativo: servidor doméstico + escritorio remoto.** Ejecuta logseq-copilot o Jarvis en un escritorio en tu casa, accede a ese escritorio via Tailscale + un escritorio remoto / túnel SSH desde el móvil cuando se necesita IA. Añade costo de configuración; rara vez vale la pena para usuarios ocasionales.',
          '**Patrón alternativo: cambiar a Obsidian Mobile para casos de uso de IA.** Obsidian Mobile ejecuta la mayoría de plugins. Si la IA en móvil es crítica, esta es la respuesta más sencilla — al costo de cambiar de herramienta.',
          '**Por qué existe la brecha:** tanto Logseq como Joplin ejecutan sus motores de plugins como contextos Node.js / Electron exclusivos del escritorio. Las apps móviles son nativas (Logseq Capacitor, Joplin React Native) y no incorporan el runtime de plugins. Eliminar la brecha requiere reescribir la arquitectura de plugins — ningún equipo ha señalado esto para 2026.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Si tu caso de uso de IA es principalmente móvil (p. ej., dictar notas en movimiento y querer que la IA las resuma inmediatamente), Logseq y Joplin no son las herramientas correctas actualmente — Obsidian Mobile + Ollama en LAN lo es. Si tu caso de uso de IA es principalmente de escritorio con captura móvil (el patrón más común), Logseq y Joplin funcionan bien y la brecha móvil es una inconveniencia menor en lugar de un bloqueador.',
          },
        ],
      },
      gdpr: {
        id: 'gdpr',
        title: 'RGPD y residencia de datos en la UE',
        content:
          '**Para usuarios de la UE y DACH, Logseq + logseq-copilot + Ollama y Joplin + Jarvis + Ollama son más compatibles con el RGPD que Notion AI por arquitectura predeterminada.** El contenido de las notas nunca sale de la máquina del responsable del tratamiento, por lo que los flujos de datos que el artículo 28 del RGPD (acuerdos con encargados del tratamiento), el artículo 44 (transferencias internacionales) y los catálogos BSI-Grundschutz requieren documentar para herramientas SaaS simplemente no existen para la pila local.',
        items: [
          '**Artículo 28 (Acuerdos con encargados del tratamiento):** con Notion AI, Notion + OpenAI son encargados del tratamiento y requieren un Acuerdo de Procesamiento de Datos (APD) más Cláusulas Contractuales Estándar para la transferencia internacional a OpenAI. Con Logseq / Joplin + Ollama, no hay ningún encargado del tratamiento de terceros — solo el responsable ejecutando software local.',
          '**Artículo 44 (Transferencias internacionales):** Notion AI envía datos a servidores de OpenAI con sede en EE. UU.; esta es una "transferencia internacional" de Schrems II que requiere CCE y una Evaluación de Impacto de la Transferencia. El procesamiento local de Ollama elimina la transferencia por completo.',
          '**Catálogos BSI-Grundschutz (DACH):** las directrices federales de seguridad informática de Alemania tratan los servicios de IA en la nube como subcontratación que requiere evaluación formal de riesgos. El procesamiento de IA local cae bajo la línea de base de "TI interna" mucho más sencilla.',
          '**Derecho de supresión (Artículo 17):** con Notion AI, eliminar el contenido de las notas de tu cuenta no necesariamente lo elimina del pipeline de entrenamiento o los registros de OpenAI (depende de los términos empresariales). Con Ollama local, la eliminación es la eliminación del sistema de archivos — verificable y completa.',
          '**Auditabilidad:** las pilas locales son más fáciles de auditar. Ejecuta una captura de paquetes una vez, verifica cero tráfico saliente durante el uso de IA, documenta el resultado. Los servicios de IA en la nube requieren confiar en los informes SOC 2 / ISO 27001 del proveedor.',
          '**Alojamiento compatible con la UE (cuando la sync implica un servidor):** Joplin Cloud está alojado en la UE; Joplin Server auto-alojado puede alojarse en infraestructura de la UE (Hetzner, OVH, IONOS). Logseq Sync está operado por Logseq Inc. (con sede en EE. UU.) — para residencia estricta en la UE, prefiere Git o Syncthing para la sync de Logseq.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para organizaciones que necesitan una historia defendible de funciones de IA bajo el RGPD, la pila de LLM local en Logseq o Joplin es la respuesta más sencilla. La discusión sobre el APD pasa de "usamos Notion + OpenAI como subprocesadores con estas cláusulas" a "usamos software local ejecutándose en el endpoint del responsable, sin ningún encargado del tratamiento implicado". El trabajo del equipo de cumplimiento se vuelve mucho más sencillo.',
          },
        ],
      },
      notionMigration: {
        id: 'notion-migration',
        title: 'Migrar de Notion AI a Logseq o Joplin',
        content:
          '**Notion ofrece una exportación nativa de Markdown que tanto Logseq como Joplin pueden importar — Logseq preserva mejor la estructura a nivel de bloque, Joplin preserva el contenido pero aplana los bloques anidados.** De cualquier manera, la migración es una exportación-importación única, no una sync continua, y detiene el flujo de datos a OpenAI de inmediato.',
        numberedItems: [
          '**Exportar desde Notion:** Configuración → Configuración y miembros → Configuración → "Exportar todo el contenido del espacio de trabajo" → elige "Markdown & CSV" → descarga el ZIP. La exportación contiene un archivo .md por página más carpetas para páginas anidadas.',
          '**Descomprimir y limpiar:** la exportación de Notion usa sufijos largos de ID de página en los nombres de archivo (p. ej., `My Page 1f8b2a3c4d5e6f7g8h9i.md`). Ejecuta un script rápido de renombrado para eliminar los IDs si los nombres de archivo importan para tu nueva herramienta.',
          '**Ruta de importación de Logseq:** abre Logseq → Archivo → Nuevo grafo → apunta a una nueva carpeta → copia los archivos de Notion descomprimidos en la carpeta `pages/` del grafo. Logseq los reconoce; los backlinks (estilo `[[Página]]` de Notion) sobreviven cuando los archivos coinciden. El anidamiento a nivel de bloque se preserva porque tanto Notion como Logseq usan sangría de bloques estilo lista.',
          '**Ruta de importación de Joplin:** Herramientas → Importar → "MD - Markdown directory" → selecciona la carpeta de Notion descomprimida. Joplin crea una nota por archivo .md dentro de una estructura de cuaderno que refleja la jerarquía de páginas de Notion. El anidamiento a nivel de bloque se aplana — las listas desplegables anidadas de Notion se convierten en listas Markdown planas.',
          '**Verificar la migración:** comprueba al azar 10–20 páginas — confirma que el contenido, los enlaces y las etiquetas sobrevivieron. Si usaste bases de datos de Notion extensivamente, la exportación CSV es separada; tanto Logseq como Joplin la tratan como un archivo plano en lugar de una base de datos estructurada, así que planifica alguna reestructuración manual.',
          '**Detener Notion AI:** desactiva la suscripción a Notion AI en la configuración de la cuenta. El trabajo de IA futuro ocurre via logseq-copilot o Jarvis en tu máquina local.',
          '**Verificar la postura de privacidad:** desconecta la red → ejecuta las funciones de IA en tu nueva herramienta → confirma que funcionan. Esta es la prueba que demuestra que la migración logró su objetivo.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si usaste bases de datos de Notion como datos estructurados (rastreadores de proyectos, CRMs, etc.), la migración es más compleja que para páginas de prosa. Considera mantener esas bases de datos específicas en Notion (sin IA) mientras mueves el contenido con mucho texto a Logseq o Joplin — o migra las bases de datos al RAG estructurado de [AnythingLLM](https://anythingllm.com), donde el LLM local puede consultarlas como documentos.',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: 'Flujos de trabajo de ejemplo: diario diario, notas de reunión, investigación',
        content:
          '**Tres flujos de trabajo concretos que muestran la pila local en acción.** Los dos primeros son centrados en Logseq (nativos del outliner / diario); el tercero es centrado en Joplin (notas de formato más largo).',
        items: [
          '**Resumen del diario diario de Logseq:** al final del día → abre la página del diario de hoy → `/copilot Resume este día en tres puntos centrados en decisiones, bloqueos y acciones para mañana` → la respuesta aparece como bloques anidados. Guarda el prompt como plantilla de logseq-copilot para ejecuciones con una sola tecla.',
          '**Revisión semanal de Logseq:** domingo por la tarde → abre una página nueva llamada `Revisión semana 19` → `/copilot Resume las últimas 7 páginas del diario diario en 3 puntos por categoría: progreso, bloqueos, temas` → logseq-copilot recupera páginas del diario recientes via el mecanismo de enlace de páginas. El resultado se convierte en la semilla de la planificación de la próxima semana.',
          '**Expansión de notas de reunión de Joplin:** durante la reunión, captura viñetas aproximadas en una nota → después de la reunión, selecciona todo → Herramientas → Jarvis → "Expande y estructura estas notas" → la salida reemplaza o se añade a continuación. Guarda el prompt como preset de Jarvis.',
          '**Q&A de investigación de Joplin:** añade 50–500 notas de fuentes (artículos, documentos, recortes web) en un solo cuaderno → habilita Jarvis Notes Database → espera a la integración → Herramientas → Jarvis → "Ask Jarvis" → haz preguntas entre fuentes ("¿Qué fuentes hablan de X?"). Equivalente al QA del vault de Obsidian Copilot pero dentro de Joplin.',
          '**Logseq + Joplin combinados:** captura en Logseq (rápido, nativo del diario) → cura los elementos duraderos en Joplin (referencia permanente). Ejecuta IA en cada herramienta para sus puntos fuertes nativos — chat rápido / generación de esquemas en Logseq, Q&A de investigación respaldada por embeddings en Joplin.',
          '**Captura en móvil, procesamiento en escritorio:** durante el día, captura notas libremente en Logseq Mobile o Joplin Mobile (sin IA). Al final del día en el escritorio, ejecuta logseq-copilot o Jarvis para resumir, enlazar y consultar — la IA se pone al día con lo que capturaste sin conexión.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El patrón de "captura en móvil, procesamiento en escritorio" es la forma correcta de pensar en Logseq + Joplin en 2026 dada la brecha de plugins móviles. No es una solución alternativa — corresponde a cómo funciona realmente el trabajo del conocimiento. El móvil es para las entradas (tienes una idea, la capturas). El escritorio es para la síntesis (procesas el material capturado). El LLM local se une en el momento de la síntesis, que es exactamente donde más importa su calidad.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        items: [
          '**Configurar logseq-copilot o Jarvis con un proveedor en la nube por accidente.** Ambos plugins ofrecen "OpenAI" como proveedor predeterminado. La configuración solo local requiere cambiar a una URL base personalizada que apunte a `http://localhost:11434/v1`. Olvidar esto significa que el plugin envía notas silenciosamente a OpenAI — exactamente el modo de fallo del que migraste. Verifica con una captura de paquetes.',
          '**Esperar soporte de plugins en móvil.** Ni Logseq Mobile ni Joplin Mobile ejecuta plugins en 2026. Si asumes que la IA funciona en cualquier lugar donde estén tus notas, te toparás con el límite la primera vez que intentes resumir en el tren. Planifica captura en móvil, procesamiento en escritorio desde el primer día.',
          '**Apuntar el plugin a `http://localhost:11434/v1` desde una máquina diferente.** Localhost es por máquina. Si ejecutas Ollama en un escritorio y Logseq en un portátil, necesitas la IP de LAN del escritorio (`http://192.168.1.20:11434/v1`) más Ollama enlazado a `0.0.0.0:11434`.',
          '**Sincronizar la base de datos de embeddings de Joplin Jarvis con un nivel WebDAV gratuito con cuota pequeña.** Las bases de datos de embeddings crecen ~150–250 MB por cada 5.000 notas. Los niveles gratuitos (Dropbox 2 GB) alcanzan el límite rápidamente a escala de cuaderno. Planifica Joplin Server auto-alojado o un nivel de pago cuando los cuadernos superen ~5.000 notas.',
          '**No ejecutar una captura de paquetes de auditoría una vez.** Ambos plugins son open source y se comportan bien, pero la única prueba definitiva de que tu pila es solo local es ejecutar Wireshark / Little Snitch / equivalente durante el uso de IA y verificar cero tráfico saliente. Hazlo una vez después de la configuración, documenta el resultado, sigue adelante.',
          '**Intentar usar Logseq + logseq-copilot para recuperación respaldada por embeddings.** logseq-copilot no tiene un índice de embeddings para todo el grafo en 2026. Si necesitas "pregunta a todo mi grafo", cambia a Joplin + Jarvis o usa Obsidian + Smart Connections. Logseq sobresale en IA nativa del outliner, no en búsqueda semántica.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'Logseq — [logseq.com](https://logseq.com) y [github.com/logseq/logseq](https://github.com/logseq/logseq) (outliner open source; AGPL 3.0).',
          'logseq-copilot — [github.com/logancyang/logseq-copilot](https://github.com/logancyang/logseq-copilot) (plugin open source de Logseq; AGPL 3.0).',
          'Joplin — [joplinapp.org](https://joplinapp.org) y [github.com/laurent22/joplin](https://github.com/laurent22/joplin) (cuaderno open source; AGPL 3.0).',
          'Jarvis (Joplin) — [github.com/alondmnt/joplin-plugin-jarvis](https://github.com/alondmnt/joplin-plugin-jarvis) (plugin open source de Joplin; AGPL 3.0).',
          'Ollama — [ollama.com](https://ollama.com) y [github.com/ollama/ollama](https://github.com/ollama/ollama) (runtime de LLM local; MIT).',
          'Privacidad y manejo de datos de Notion AI — [notion.com/help/notion-ai-faqs](https://www.notion.com/help/notion-ai-faqs) (documentación del proveedor para el contexto comparativo).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿Puede Logseq reemplazar a Notion para usuarios de IA?',
            a: 'Sí para páginas de prosa y flujos de trabajo de diario diario. Instala logseq-copilot, apúntalo a Ollama, y tendrás chat, resumen y generación basada en plantillas dentro de Logseq — sin que los datos salgan de tu máquina. La brecha son las bases de datos estructuradas: las vistas de base de datos de Notion (rastreadores de proyectos, CRMs) no tienen un equivalente limpio en Logseq. Los usuarios con mucho texto reemplazan Notion completamente; los usuarios con muchas bases de datos aceptan reestructuración manual o mantienen bases de datos específicas en Notion (sin IA) mientras mueven el texto a Logseq.',
          },
          {
            q: '¿Admite Joplin plugins de IA locales?',
            a: 'Sí. El plugin recomendado en 2026 es Jarvis, que proporciona chat, resumen y búsqueda semántica respaldada por embeddings en todo el cuaderno. Configura Jarvis para usar Ollama en `http://localhost:11434/v1` para chat y `http://localhost:11434/v1` con `nomic-embed-text` para embeddings. Existen otros plugins de Joplin compatibles con Ollama, pero Jarvis es el más mantenido activamente y con más funciones.',
          },
          {
            q: '¿Cuál tiene mejor sync sin nube — Logseq o Joplin?',
            a: 'Joplin tiene la historia de sync sin nube más amplia y pulida. Joplin admite Joplin Server auto-alojado, WebDAV, Nextcloud, más E2EE de primera clase sobre cualquier backend. Logseq tiene sync Git integrada (excelente para desarrolladores) y funciona con Syncthing o iCloud Drive, pero carece de un equivalente auto-alojado a Joplin Server. Para equipos que quieren sync auditable en las instalaciones, Joplin Server es la mejor opción; para desarrolladores que quieren historial rastreado por Git, la sync Git de Logseq es la mejor opción.',
          },
          {
            q: '¿Puedo migrar de Notion a Logseq con las funciones de IA intactas?',
            a: 'La migración mueve el contenido, no la suscripción a Notion AI. Exporta desde Notion como Markdown, importa a Logseq, luego instala logseq-copilot y configúralo con Ollama — la capa de IA se reconstruye localmente. Logseq preserva mejor el anidamiento a nivel de bloque de Notion que Joplin porque ambas herramientas usan bloques con sangría de lista como primitivo. Las funciones de Notion AI (auto-rellenado, propiedades inteligentes en bases de datos) no tienen equivalentes directos en Logseq — esos flujos de trabajo deben reconstruirse con prompts de logseq-copilot o scripts.',
          },
          {
            q: '¿Funciona Logseq completamente sin conexión?',
            a: 'Sí. Logseq es una aplicación de escritorio local sin ningún componente de nube requerido. El grafo es una carpeta de archivos Markdown; la app los lee y escribe localmente. El acceso a la red solo es necesario para sincronizar con un remoto (Git push, descubrimiento de pares de Syncthing, Logseq Sync) y para ejecutar logseq-copilot contra un proveedor de LLM en la nube — esto último es opcional. Con Ollama como proveedor de LLM, toda la pila funciona sin conexión.',
          },
          {
            q: '¿Son los plugins de IA de Joplin tan maduros como los de Obsidian?',
            a: 'Obsidian tiene más plugins de IA y más mantenedores concurrentes. Joplin tiene menos plugins, pero Jarvis tiene funciones completas y está mantenido activamente — cubre chat, resumen y recuperación respaldada por embeddings en un solo plugin. Para la mayoría de los usuarios, Jarvis iguala o supera la combinación de Obsidian Copilot + Smart Connections en los cuadernos Markdown puros de Joplin; para usuarios avanzados que quieren variedad de plugins (motores de plantillas, chat de personajes, generadores de MOC), Obsidian sigue teniendo más opciones.',
          },
          {
            q: '¿Cuál es mejor para el diario diario con IA — Logseq o Joplin?',
            a: 'Logseq. El diario diario es un primitivo integrado en Logseq — cada día obtiene automáticamente una página de diario, los bloques son de primera clase, y la salida de logseq-copilot se convierte en bloques anidados bajo el prompt. Los flujos de trabajo de IA del diario diario (resumen de fin de día, revisión semanal, etiquetado de estado de ánimo) se sienten nativos. Joplin puede replicar esto con cuadernos por mes y prompts de Jarvis, pero la fricción es mayor.',
          },
          {
            q: '¿Puedo usar el mismo vault en múltiples dispositivos?',
            a: 'Sí — ambas herramientas admiten uso en múltiples dispositivos via su capa de sync. Logseq: Git, Syncthing, iCloud Drive o Logseq Sync. Joplin: Joplin Cloud, Joplin Server auto-alojado, WebDAV, Nextcloud, Dropbox u OneDrive. Advertencia: los plugins de IA solo se ejecutan en el escritorio. El contenido del vault se sincroniza con el móvil, pero logseq-copilot y Jarvis no se ejecutan allí. Planifica IA en escritorio, captura en móvil.',
          },
          {
            q: '¿Funcionan los plugins de IA con Joplin Mobile o Logseq Mobile?',
            a: 'No — ninguna herramienta admite plugins en móvil en 2026. Logseq Mobile y Joplin Mobile son superficies de lectura/escritura para el vault sincronizado, pero el runtime de plugins (Node.js / Electron) no existe en las apps móviles. Las funciones de IA (logseq-copilot, Jarvis) solo se ejecutan en el escritorio. Si la IA en móvil importa, las alternativas son Obsidian Mobile + Ollama en LAN, o captura en móvil + procesamiento en escritorio.',
          },
          {
            q: '¿Es la integración de IA local open source más segura que Notion AI?',
            a: 'Sí por arquitectura predeterminada. Notion AI envía el contenido de las notas a OpenAI por diseño — eso es estructural, no una elección de configuración. Logseq + logseq-copilot + Ollama y Joplin + Jarvis + Ollama no envían nada a un tercero a menos que configures explícitamente un proveedor de LLM en la nube. Para datos de la UE cubiertos por el RGPD, sanidad, derecho y periodismo, esta distinción es significativa: las pilas locales no tienen encargado del tratamiento, no hay transferencia internacional, no hay riesgo de subprocesadores. La auditabilidad también es más sencilla — una captura de paquetes única demuestra cero tráfico saliente durante el uso de IA.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Obsidian + LLM local: 5 plugins que convierten tu vault en un segundo cerebro (2026)](/es/power-local-llm/local-llm-with-obsidian-2026) — artículo hermano para usuarios de Obsidian; la alternativa de usuario avanzado contra la que estos lectores típicamente se están decidiendo.',
          '[Base de conocimiento personal con LLM local 2026](/es/power-local-llm/local-llm-personal-knowledge-base-2026) — arquitectura PKB más amplia que Logseq y Joplin alimentan; cubre la capa RAG, pipelines de captura y flujos de trabajo de más de 10K elementos.',
          '[Reemplaza Grammarly y Notion AI con un LLM local (2026)](/es/power-local-llm/replace-grammarly-notion-ai-with-local) — guía adyacente de reemplazo SaaS centrada específicamente en la salida de Notion AI.',
          '[Reemplaza Zapier con agentes de IA locales: 5 flujos de trabajo que ahorran /mes (2026)](/es/power-local-llm/replace-zapier-with-local-ai-agents) — reemplazo adyacente de pila de productividad para lectores que consolidan dependencias SaaS.',
          '[Los mejores LLMs locales en 2026](/es/local-llms/best-local-llms-2026) — autoridad en modelos para elegir los modelos de chat y embeddings detrás de logseq-copilot y Jarvis.',
          '[Directorio de software de LLM local 2026](/es/power-local-llm/local-llm-software-directory-2026) — entradas del directorio para Logseq, Joplin, Ollama, logseq-copilot y Jarvis con licencias y enlaces.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Logseq y Joplin con LLMs locales: notas inteligentes sin sincronización en la nube (2026)',
      description: 'Logseq + logseq-copilot vs Joplin + Jarvis en Ollama: alternativa privada a Notion AI. Sync sin nube, postura RGPD, brecha de plugins móviles. 2026.',
      url: 'https://www.promptquorum.com/es/es/power-local-llm/local-llm-with-logseq-and-joplin',
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
    title: 'Logseq e Joplin com LLMs locais: notas inteligentes sem sincronização na nuvem (2026)',
    seoTitle: 'Logseq + Joplin com LLM local: notas sem nuvem 2026',
    intro:
      '[Logseq](https://logseq.com) e [Joplin](https://joplinapp.org) são os dois aplicativos de notas de código aberto que em 2026 se integram de forma limpa com um LLM local e nunca precisam de uma ida e volta à nuvem. O Logseq roda o plugin logseq-copilot contra o [Ollama](https://ollama.com) para chat nativo do outliner e IA no diário diário; o Joplin roda o plugin Jarvis contra o Ollama para chat consciente das notas, resumos e recuperação respaldada por embeddings. Ambos são mais compatíveis com o GDPR que o Notion AI por arquitetura padrão — o Notion envia o conteúdo das notas para a OpenAI; o Logseq e o Joplin não enviam nada a menos que você configure assim. O obstáculo em 2026 é o celular: nem o Logseq nem o Joplin suportam plugins no iOS ou Android, então os recursos de IA rodam apenas no desktop. Este guia classifica ambas as ferramentas pela maturidade dos plugins de IA, pelas rotas de sincronização sem nuvem, pela compatibilidade móvel e pelo caminho de migração a partir do Notion, com etapas de configuração concretas para o Ollama.',
    metaDescription:
      'Logseq + logseq-copilot vs Joplin + Jarvis no Ollama: alternativa privada ao Notion AI. Sync sem nuvem, postura GDPR, lacuna de plugins móveis. 2026.',
    twitterDescription:
      'Notas de código aberto + IA local sem nuvem: Logseq com logseq-copilot, Joplin com Jarvis, ambos no Ollama. Lacuna de plugins móveis explicada. Caminho de migração a partir do Notion. Compatível com GDPR por padrão.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'nomic-embed-text',
      'mxbai-embed-large',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16+ GB de memória unificada)',
      'PC com RTX 3060 12 GB ou RTX 4060 8 GB',
      'PC com 16 GB de RAM (modo somente CPU como alternativa)',
    ],
    audience:
      'Usuários de aplicativos de notas de código aberto, trabalhadores do conhecimento preocupados com privacidade, profissionais da UE/DACH sujeitos ao GDPR, usuários que abandonam o Notion AI e pessoas que mantêm um diário diário e querem recursos de IA sem enviar suas notas para a OpenAI ou a Anthropic.',
    readTime: '14 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Logseq Joplin LLM local plugin',
    targetKeywords: [
      'logseq llm local',
      'joplin ia local',
      'logseq copilot ollama',
      'joplin jarvis plugin',
      'notas código aberto ia privacidade',
      'alternativa notion ai gdpr',
    ],
    leadAnswerBlock:
      '**Para a maioria dos leitores em 2026, Logseq + logseq-copilot ou Joplin + Jarvis combinados com o Ollama é a alternativa privada certa ao Notion AI.** Escolha o Logseq se seu fluxo de trabalho é diário diário + outliner; escolha o Joplin se você quer notas Markdown puras com sincronização criptografada de ponta a ponta. Ambos se conectam ao Ollama em `http://localhost:11434/v1`, ambos suportam chat com a nota atual de imediato, e ambos são de código aberto sob licenças permissivas (Logseq AGPL 3.0, Joplin AGPL 3.0 — mesma família). Nenhum envia conteúdo de notas para a nuvem a menos que você configure explicitamente um provedor de nuvem no plugin. O limite rígido em 2026: nenhuma ferramenta suporta plugins no iOS ou Android — os recursos de IA são exclusivos do desktop; o celular se torna uma superfície de captura manual que você processa com IA de volta no desktop. Para a migração a partir do Notion AI, o Logseq tem o caminho de importação mais limpo via o exportador nativo de Markdown do Notion; a importação do Notion no Joplin é funcional, mas perde a estrutura no nível de bloco.',
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor combinação de plugins do Logseq ou Joplin para um LLM local privado em 2026?',
        answer:
          'Logseq + logseq-copilot ou Joplin + plugin Jarvis, ambos apontando para o Ollama em `http://localhost:11434/v1`. O logseq-copilot adiciona blocos de chat e comandos de barra dentro do Logseq; o Jarvis adiciona chat, resumo e perguntas e respostas respaldadas por embeddings dentro do Joplin. Ambos são plugins de código aberto AGPL, ambos rodam apenas localmente por padrão, e ambos suportam o Ollama nativamente. O modelo de chat recomendado em 2026 é o Llama 3.2 3B (padrão) ou o Phi-4 Mini para sistemas com 8 GB de RAM. Para recuperação respaldada por embeddings (apenas Joplin Jarvis — o Logseq não expõe atualmente um plugin de embeddings para todo o vault em 2026), use nomic-embed-text ou mxbai-embed-large. Suporte a plugins móveis: não disponível em nenhuma ferramenta em 2026 — os recursos de IA rodam apenas no desktop.',
        bullets: [
          'Logseq + logseq-copilot — blocos de chat por comandos de barra dentro do outliner. Ideal para fluxos de trabalho de diário diário e grafos.',
          'Joplin + plugin Jarvis — barra lateral de chat, resumo, busca semântica respaldada por embeddings. Ideal para notas Markdown puras com sincronização robusta.',
          'Ambos os plugins apontam para o Ollama via `http://localhost:11434/v1` — sem chamadas à nuvem por padrão.',
          'Sync do Logseq sem nuvem: Git (integrado) ou sincronização de arquivos local via Syncthing/iCloud Drive. Sync do Joplin: Joplin Cloud criptografado de ponta a ponta, Joplin Server auto-hospedado, ou Nextcloud / WebDAV / Dropbox / OneDrive com E2EE.',
          'Lacuna de plugins móveis (2026): nem o Logseq Mobile nem o Joplin Mobile suportam plugins. Os recursos de IA são apenas de desktop — o celular é para captura, o desktop para processamento.',
          'Migração a partir do Notion AI: o Logseq tem o caminho de importação Markdown mais limpo; o Joplin perde a estrutura no nível de bloco, mas preserva o conteúdo. Ambos param de enviar dados para a OpenAI no momento em que você muda.',
          'Modelos do Ollama recomendados: chat — Llama 3.2 3B ou Phi-4 Mini; embeddings (apenas Joplin Jarvis) — nomic-embed-text ou mxbai-embed-large.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Pontos-chave', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Logseq ou Joplin: qual você deve escolher?', anchor: '#which-tool' },
      { label: 'Tabela comparativa de ferramentas', anchor: '#comparison-table' },
      { label: 'Plugins de IA do Logseq com Ollama', anchor: '#logseq-ai' },
      { label: 'Plugins de IA do Joplin com Ollama', anchor: '#joplin-ai' },
      { label: 'O argumento de privacidade contra o Notion AI', anchor: '#vs-notion' },
      { label: 'Sync sem nuvem: Git, Syncthing, Joplin Server', anchor: '#sync' },
      { label: 'Lacuna de plugins móveis: o que funciona e o que não', anchor: '#mobile' },
      { label: 'GDPR e residência de dados na UE', anchor: '#gdpr' },
      { label: 'Migrar do Notion AI para o Logseq ou Joplin', anchor: '#notion-migration' },
      { label: 'Fluxos de trabalho de exemplo: diário diário, notas de reunião, pesquisa', anchor: '#workflows' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Logseq + logseq-copilot é a combinação recomendada para usuários de outliner / diário diário.** O logseq-copilot adiciona blocos de chat e comandos de barra dentro do Logseq, configurado contra o Ollama em `http://localhost:11434/v1`. Ideal para usuários que já vivem no modelo de página de diário diário do Logseq.',
          '**Joplin + Jarvis é a combinação recomendada para usuários de notas Markdown puras.** O Jarvis adiciona uma barra lateral de chat, comandos de resumo e busca semântica respaldada por embeddings em todo o caderno. Ideal para usuários que querem um caderno estilo Notion com sincronização criptografada de ponta a ponta robusta.',
          '**Ambas as ferramentas são de código aberto sob AGPL 3.0** — a licença é permissiva para uso pessoal e comercial; a única restrição é a divulgação do código-fonte se você as modificar e hospedar publicamente.',
          '**A postura de privacidade supera o Notion AI por arquitetura.** O Notion AI envia o conteúdo das notas para a OpenAI por design; o Logseq e o Joplin não enviam nada a menos que você configure explicitamente um provedor de nuvem. Essa distinção é significativa para saúde, jurídico, jornalismo e qualquer contexto regulado pelo GDPR.',
          '**A lacuna de plugins móveis é a maior restrição em 2026.** Nem o Logseq Mobile nem o Joplin Mobile suportam plugins. Os recursos de IA rodam apenas no desktop — o celular se torna uma superfície de captura (escrever notas), e o processamento (resumir, conversar, recuperar) acontece depois no desktop.',
          '**A sync sem nuvem é simples, mas cada ferramenta adota uma abordagem diferente.** O Logseq tem sincronização Git integrada e funciona de forma limpa com Syncthing ou iCloud Drive. O Joplin tem Joplin Cloud criptografado de ponta a ponta, Joplin Server auto-hospedado, ou qualquer backend WebDAV / Nextcloud / Dropbox com E2EE por cima.',
          '**A migração a partir do Notion AI é uma viagem só de ida que ambas as ferramentas gerenciam.** O Logseq importa o exportador Markdown do Notion com maior fidelidade no nível de bloco; o Joplin importa o conteúdo, mas achata os blocos aninhados. Uma vez migrado, nenhuma nota sai da sua máquina a menos que você decida.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Ferramentas cobertas:** Logseq (outliner, com o diário diário em primeiro lugar) e Joplin (caderno Markdown puro). O [Obsidian](https://obsidian.md) é mencionado como referência — seu guia dedicado está vinculado no final.',
          '**Plugins de IA principais:** logseq-copilot para o Logseq; Jarvis (e plugins similares compatíveis com Ollama) para o Joplin.',
          '**Backend de LLM:** Ollama (recomendado) em `http://localhost:11434/v1`, ou qualquer endpoint local compatível com OpenAI ([LM Studio](https://lmstudio.ai), servidor llama.cpp, vLLM).',
          '**Modelos de chat recomendados:** Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B (sistemas com 16 GB de RAM); Qwen3 1.7B (8 GB de RAM).',
          '**Modelos de embedding recomendados (apenas Joplin Jarvis):** nomic-embed-text (768 dimensões, rápido), mxbai-embed-large (1024 dimensões, mais preciso).',
          '**Licenças:** Logseq AGPL 3.0; Joplin AGPL 3.0; logseq-copilot AGPL 3.0 (mesmo autor que o Copilot for Obsidian, Logan Yang); Jarvis (Joplin) AGPL 3.0.',
          '**Rotas de sync:** Logseq — Git integrado, Syncthing, iCloud Drive, Logseq Sync (pago). Joplin — Joplin Cloud (pago, E2EE), Joplin Server auto-hospedado, WebDAV, Nextcloud, Dropbox, OneDrive (todos suportam E2EE).',
          '**Plugins móveis:** não suportados em nenhuma ferramenta em 2026 — IA apenas no desktop.',
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: 'Logseq ou Joplin: qual você deve escolher?',
        content:
          '**Escolha o Logseq se seu fluxo de trabalho de notas é principalmente diário diário ou em formato de grafo; escolha o Joplin se suas notas são documentos Markdown puros com fortes necessidades de sincronização.** As duas ferramentas têm modelos mentais diferentes — o Logseq é um outliner com links bidirecionais e um diário diário como superfície de captura padrão; o Joplin é um caderno de arquivos Markdown com tags, busca e sincronização criptografada de ponta a ponta. O ecossistema de plugins de IA em 2026 reflete isso: o logseq-copilot se integra dentro dos blocos do outliner; o Jarvis se integra dentro da barra lateral do Joplin.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq + logseq-copilot serve para fluxos de trabalho de outliner / diário diário; Joplin + Jarvis serve para fluxos de trabalho de caderno Markdown puro com sincronização criptografada de ponta a ponta robusta.',
          },
          {
            type: 'plain-terms',
            text: 'Ambas as ferramentas são alternativas privadas ao Notion AI. A escolha depende principalmente de como você escreve notas. O Logseq trata as notas como marcadores aninhados e dá a você uma página de diário diário automaticamente — bom para pensar em voz alta, captura com marca de tempo e referência cruzada em estilo grafo. O Joplin trata as notas como documentos Markdown completos em cadernos — bom para escrita de formato longo, documentação estruturada e dispositivos que precisam de sincronização criptografada. Ambos funcionam com um LLM local via Ollama, ambos são de código aberto, e ambos param de enviar dados para qualquer um no momento em que você muda do Notion.',
          },
        ],
        decisionBlock: {
          title: 'Decisão: Logseq ou Joplin?',
          localIf: [
            'Você mantém um diário diário e quer que a IA resuma / agrupe / vincule dias → Logseq + logseq-copilot',
            'Você quer backlinks em estilo grafo e blocos do outliner com chat em linha → Logseq + logseq-copilot',
            'Você escreve notas Markdown de formato longo (pesquisa, documentação, rascunhos) → Joplin + Jarvis',
            'Você precisa de sincronização criptografada de ponta a ponta entre dispositivos → Joplin (melhor proposta E2EE)',
            'Você quer busca semântica respaldada por embeddings em todo o caderno → Joplin + Jarvis (o Logseq não tem equivalente em 2026)',
            'Você está migrando do Notion e quer a maior fidelidade no nível de bloco → Logseq',
          ],
          cloudIf: [
            'Você precisa de recursos de IA no iOS ou Android (não apenas captura) → nenhuma ferramenta suporta plugins no celular em 2026; considere Obsidian Mobile + Ollama na LAN com Tailscale',
            'Você precisa de colaboração multiusuário em tempo real no mesmo vault → tanto o Logseq quanto o Joplin são de usuário único por design; a edição colaborativa não está no modelo deles',
            'Você precisa de qualidade GPT-5.5 em cada resposta de chat → equivalentes na nuvem (a pilha local atinge ~70% da capacidade)',
          ],
          quick: [
            'Diário diário + outliner: Logseq + logseq-copilot',
            'Caderno Markdown puro + sync E2EE: Joplin + Jarvis',
            'Recursos de IA no celular: não viável em 2026 — captura no celular, processamento no desktop',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Um padrão comum é rodar ambos: o Logseq para o diário diário e captura rápida (tudo com marca de tempo), o Joplin para notas de referência permanentes (mais longas, com tags, sincronizadas criptografadas). As duas ferramentas não compartilham um banco de dados, mas nenhuma é pesada — rodar ambas adiciona cerca de 200–400 MB de RAM combinados. Use o Logseq para "pensar" e o Joplin para "saber", com o LLM local disponível em ambos.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa de ferramentas',
        content:
          '**Os quatro eixos que mais importam: profundidade dos plugins de IA, sync sem nuvem, suporte a plugins móveis e fluxo de trabalho mais adequado.** O Obsidian é incluído como referência — os leitores que comparam as três ferramentas também deveriam ler o guia dedicado do Obsidian vinculado no final.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Logseq lidera em IA nativa do outliner e sync com Git; o Joplin lidera em sync criptografada de ponta a ponta e recuperação respaldada por embeddings; o Obsidian lidera em amplitude de plugins ao custo de sync paga e uma licença não OSI.',
          },
        ],
        columns: ['Ferramenta', 'Plugins de IA', 'Sync (sem nuvem)', 'Móvel', 'Ideal para'],
        rows: [
          { 'Ferramenta': '[Logseq](https://logseq.com)', 'Plugins de IA': 'logseq-copilot (blocos de chat, comandos de barra), variantes do plugin GPT-3', 'Sync (sem nuvem)': 'Git integrado, Syncthing, iCloud Drive, Logseq Sync (pago E2EE)', 'Móvel': 'App móvel disponível; plugins não suportados no celular (2026)', 'Ideal para': 'Fluxo de trabalho de diário diário + outliner' },
          { 'Ferramenta': '[Joplin](https://joplinapp.org)', 'Plugins de IA': 'Jarvis (chat, resumo, Q&A respaldada por embeddings), integrações compatíveis com [Ollama](https://ollama.com)', 'Sync (sem nuvem)': 'Joplin Cloud (pago E2EE), Joplin Server auto-hospedado, WebDAV, Nextcloud, Dropbox, OneDrive (todos compatíveis com E2EE)', 'Móvel': 'App móvel disponível; plugins não suportados no celular (2026)', 'Ideal para': 'Caderno Markdown + sync E2EE' },
          { 'Ferramenta': '[Obsidian](https://obsidian.md) (referência)', 'Plugins de IA': 'Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot', 'Sync (sem nuvem)': 'Git, Syncthing, iCloud Drive, Obsidian Sync (pago E2EE)', 'Móvel': 'O app móvel suporta a maioria dos plugins; acesso LAN ao Ollama necessário', 'Ideal para': 'Usuários avançados com plugins pagos / sync paga' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A coluna de móvel é o maior diferenciador de 2026. O Obsidian Mobile roda a maioria dos plugins (incluindo Smart Connections e Copilot) quando o Ollama é acessível na LAN ou via Tailscale. O Logseq Mobile e o Joplin Mobile não rodam nenhum plugin — os recursos de IA são estritamente de desktop. Se a IA no celular importa, planeje captura no celular + processamento no desktop, ou dê uma olhada no Obsidian Mobile.',
          },
        ],
      },
      logseqAi: {
        id: 'logseq-ai',
        title: 'Plugins de IA do Logseq com Ollama',
        content:
          '**O plugin de IA do Logseq recomendado em 2026 é o logseq-copilot — mesmo autor que o Copilot for Obsidian, configurado para apontar para o Ollama.** Ele adiciona blocos de chat (comando de barra `/copilot`), reescrita em linha e prompts conscientes do diário diretamente dentro do outliner do Logseq. O Logseq atualmente não tem um equivalente ao Smart Connections (índice de embeddings para todo o vault), então o vínculo semântico através do grafo ainda não é um problema resolvido em 2026.',
        items: [
          '**O que faz:** blocos de chat por comandos de barra, geração de conteúdo em linha, prompts conscientes do diário que puxam a página ativa ou os blocos selecionados como contexto.',
          '**Instalação:** Configurações → Plugins → Marketplace → busque "logseq-copilot" → Instalar + Habilitar. Autor: Logan Yang (o mesmo que o Copilot for Obsidian).',
          '**Configurar para o Ollama:** Configurações → logseq-copilot → API Provider → "Custom OpenAI" ou "Ollama" → URL base da API `http://localhost:11434/v1` → modelo `llama3.2:3b` (ou qualquer nome de modelo do Ollama).',
          '**Comandos de barra:** digite `/copilot` em qualquer bloco para iniciar um chat. A saída aparece como blocos aninhados sob o prompt — nativa do outliner, então as respostas se tornam conteúdo de esboço de primeira classe.',
          '**Prompts baseados em seleção:** selecione blocos → execute um modelo de prompt personalizado ("Resuma estes em três marcadores") → o resultado é anexado abaixo da seleção.',
          '**Integração com o diário diário:** aponte um modelo para a página do diário diário → o resumo de fim de dia, as perguntas de revisão semanal ou a expansão de backlinks se tornam ações de uma única tecla.',
          '**O que NÃO faz (2026):** não existe um índice de embeddings para todo o grafo. Os backlinks do Logseq permanecem explícitos; a descoberta semântica entre páginas ainda não é suportada por nenhum plugin de código aberto do Logseq.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A saída do logseq-copilot são apenas blocos — o mesmo primitivo que tudo o mais no Logseq. Essa é a vantagem-chave sobre o Obsidian: as respostas de IA não são texto flutuante na barra lateral; são nós do grafo que você pode vincular, marcar com tags, consultar e reeditar. Use `/copilot` intensamente para a captura, depois refatore os blocos de resposta como faria com qualquer outra nota.',
          },
        ],
      },
      joplinAi: {
        id: 'joplin-ai',
        title: 'Plugins de IA do Joplin com Ollama',
        content:
          '**O plugin de IA do Joplin recomendado em 2026 é o Jarvis — ele fornece chat, resumo e busca semântica respaldada por embeddings em todo o caderno, tudo configurável para usar o Ollama.** O Jarvis é o equivalente do Joplin mais próximo do Smart Connections + Copilot for Obsidian combinados: um plugin, uma configuração, dois trabalhos.',
        items: [
          '**O que faz:** barra lateral de chat, comando "Ask Jarvis" em todo o caderno (recuperação respaldada por embeddings), resumir nota selecionada, gerar notas a partir de prompts, prompts personalizados em seleções.',
          '**Instalação:** Ferramentas → Opções → Plugins → busque "Jarvis" → Instalar + Habilitar. Autor: Alon Bukai.',
          '**Configurar para o Ollama (chat):** Opções → Jarvis → Model Provider → "OpenAI" com URL base personalizada → URL `http://localhost:11434/v1` → modelo `llama3.2:3b` → chave de API qualquer string não vazia (o Ollama a ignora).',
          '**Configurar para o Ollama (embeddings):** Opções → Jarvis → Notes Database → habilitar Database → Embedding Model → "OpenAI" com URL base personalizada → URL `http://localhost:11434/v1` → modelo `nomic-embed-text`.',
          '**Indexação inicial:** o Jarvis incorpora cada nota no banco de dados quando habilitado pela primeira vez. Tempo em Mac M3 Pro com nomic-embed-text: 1K notas ~3 min, 5K notas ~15 min, 10K notas ~35 min. A reincorporação ao salvar é incremental.',
          '**Fluxo de trabalho "Ask Jarvis":** Ferramentas → Jarvis → Ask Jarvis → digite uma pergunta → o Jarvis recupera notas relevantes por similaridade de embedding e envia os trechos mais sua pergunta ao modelo de chat. Equivalente ao QA do vault do Copilot for Obsidian.',
          '**Ideal para:** usuários que querem um único plugin cobrindo chat + recuperação dentro do Joplin sem gerenciar dois plugins separados.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'O Jarvis armazena seu banco de dados de embeddings dentro do banco de dados SQLite do Joplin. O arquivo do banco de dados cresce ~150–250 MB a cada 5.000 notas incorporadas com nomic-embed-text. Se você sincronizar o perfil do Joplin via Joplin Cloud ou WebDAV, o banco de dados de embeddings é incluído na sync — planeje o custo de largura de banda e tempo de sincronização. O próprio banco de dados de embeddings é criptografado em trânsito ao usar o E2EE do Joplin.',
          },
        ],
      },
      vsNotion: {
        id: 'vs-notion',
        title: 'O argumento de privacidade contra o Notion AI',
        content:
          '**O Notion AI envia o conteúdo das notas para a OpenAI por design — isso é a arquitetura, não uma escolha de configuração.** Quando você usa os recursos do Notion AI em uma página, o Notion envia o conteúdo da página para os servidores da OpenAI, a OpenAI o processa, e a resposta volta através do Notion. Os dados são regidos pelas políticas de privacidade da OpenAI e do Notion, não pelo seu sistema de arquivos local. Para usuários em contextos regulados (saúde, jurídico, aconselhamento financeiro, jornalismo, dados da UE cobertos pelo GDPR) este é um problema estrutural que nenhuma configuração resolve.',
        items: [
          '**Arquitetura do Notion AI:** as notas saem da sua máquina para serem processadas pela OpenAI. Sujeito aos termos de tratamento de dados do OpenAI Enterprise (melhor que a API padrão da OpenAI), mas ainda fora da sua infraestrutura.',
          '**Arquitetura do Logseq + logseq-copilot:** o Logseq roda como um aplicativo local, o plugin envia os prompts para o seu Ollama local, nenhum conteúdo de nota chega a um terceiro a menos que você configure explicitamente um provedor de nuvem no plugin.',
          '**Arquitetura do Joplin + Jarvis:** o Joplin roda como um aplicativo local, o Jarvis envia os prompts para o seu Ollama local, a geração de embeddings roda localmente, nenhum conteúdo de nota chega a um terceiro a menos que você configure explicitamente um provedor de nuvem no Jarvis.',
          '**Residência de dados:** com Logseq ou Joplin + Ollama, cada byte de conteúdo de nota permanece na sua máquina. Com o Notion AI, o conteúdo das notas transita por servidores da OpenAI sediados nos EUA independentemente de onde você esteja.',
          '**Trilha de auditoria:** com LLMs locais, você pode executar uma captura de pacotes (Wireshark, Little Snitch, etc.) uma vez após a instalação e verificar que os plugins fazem zero chamadas de saída durante o uso de IA. Com o Notion AI, as chamadas de saída são inerentes — não há nada a verificar.',
          '**Risco de subprocessadores:** o Notion AI herda todos os subprocessadores da OpenAI (Microsoft Azure como infraestrutura principal, mais fornecedores de suporte). O Logseq e o Joplin + Ollama têm zero subprocessadores para a camada de IA.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O teste mais claro de "meu aplicativo de notas é realmente privado?" é desconectar a rede e tentar usar os recursos de IA. Logseq + logseq-copilot + Ollama: funciona completamente offline. Joplin + Jarvis + Ollama: funciona completamente offline. Notion AI: retorna um erro. Faça este teste uma vez após a configuração para confirmar que sua pilha faz o que você pensa.',
          },
        ],
      },
      sync: {
        id: 'sync',
        title: 'Sync sem nuvem: Git, Syncthing, Joplin Server',
        content:
          '**Tanto o Logseq quanto o Joplin têm múltiplas rotas de sync que nunca exigem confiar o conteúdo das notas a uma nuvem de terceiros.** A escolha certa depende de você querer zero configuração (sync paga), histórico rastreado por Git (amigável para desenvolvedores) ou ponto a ponto (sem servidor).',
        items: [
          '**Logseq — sync Git integrada:** Configurações → Sync → habilitar auto-commit do Git. O Logseq faz commit do grafo em um remoto Git configurado conforme um cronograma. Funciona com GitHub / GitLab / Gitea auto-hospedado. Os commits de Markdown puro tornam o histórico legível para humanos.',
          '**Logseq — Syncthing (ponto a ponto):** instale o Syncthing em cada dispositivo, aponte-o para a pasta do grafo do Logseq. Criptografado de ponta a ponta, sem servidor central, sem terceiros. Excelente para sync de desktop para desktop; funciona no Logseq Mobile quando o Syncthing-Fork (Android) ou o Möbius Sync (iOS) mantém a pasta atualizada.',
          '**Logseq — iCloud Drive:** mantenha a pasta do grafo dentro do iCloud Drive no macOS / iOS. O caminho mais limpo em dispositivos Apple; os dados são criptografados em repouso pela Apple, mas a Apple guarda as chaves (não é zero-knowledge).',
          '**Logseq Sync (pago E2EE):** a sync criptografada de ponta a ponta da equipe do Logseq. Desvantagem: pago (o nível Pro inclui sync; os preços variam — consulte logseq.com), mas oferece E2EE sem configuração em todos os dispositivos, incluindo o celular.',
          '**Joplin — Joplin Cloud (pago E2EE):** a sync hospedada da equipe do Joplin com criptografia de ponta a ponta. Gratuita para quantidades pequenas de notas; os níveis pagos escalam. Hospedado na UE. Conveniente e amigável para auditorias.',
          '**Joplin — Joplin Server auto-hospedado:** rode a imagem Docker do Joplin Server em um NAS / VPS / servidor doméstico. Criptografia de ponta a ponta de cliente para cliente; o servidor armazena texto cifrado. A melhor opção para organizações que querem propriedade total da infraestrutura de sync.',
          '**Joplin — WebDAV / Nextcloud / Dropbox / OneDrive:** o Joplin suporta qualquer endpoint WebDAV, mais suporte de primeira classe para Nextcloud, Dropbox, OneDrive. Sempre habilite o E2EE integrado do Joplin por cima — esses provedores só veem texto cifrado.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O Joplin Server auto-hospedado é a resposta para organizações que querem sync auditável on-premises sem confiar em uma nuvem de terceiros. Rode-o em um pequeno VPS ou servidor doméstico, aponte todos os clientes para ele, habilite E2EE — o servidor guarda apenas texto cifrado e você controla o host. Isso é significativamente mais fácil do que auto-hospedar o Notion (não suportado oficialmente) ou a infraestrutura do Obsidian Sync.',
          },
        ],
      },
      mobile: {
        id: 'mobile',
        title: 'Lacuna de plugins móveis: o que funciona e o que não',
        content:
          '**Nem o Logseq Mobile nem o Joplin Mobile suportam plugins em 2026 — esta é a maior restrição em comparação com o Obsidian.** Os apps móveis são superfícies funcionais de captura e leitura, mas o logseq-copilot e o Jarvis rodam apenas no desktop. Qualquer fluxo de trabalho de IA tem que assumir que o celular é para captura e o desktop para processamento.',
        items: [
          '**Logseq Mobile (iOS / Android):** ver, editar e capturar notas; os backlinks e a visualização de grafo funcionam; a sync funciona. Os plugins não rodam — incluindo o logseq-copilot. Os recursos de IA não estão disponíveis no celular.',
          '**Joplin Mobile (iOS / Android):** ver, editar e capturar notas; as tags e a busca funcionam; a sync funciona (incluindo E2EE). Os plugins não rodam — incluindo o Jarvis. Os recursos de IA não estão disponíveis no celular.',
          '**Padrão alternativo: captura no celular, processamento no desktop.** Escreva notas livremente no celular. Quando chegar a um desktop, execute o logseq-copilot ou o Jarvis para resumir, expandir, vincular ou consultar o conteúdo capturado.',
          '**Padrão alternativo: servidor doméstico + desktop remoto.** Rode o logseq-copilot ou o Jarvis em um desktop na sua casa, acesse esse desktop via Tailscale + um desktop remoto / túnel SSH a partir do celular quando precisar de IA. Adiciona custo de configuração; raramente vale a pena para usuários ocasionais.',
          '**Padrão alternativo: mudar para o Obsidian Mobile para casos de uso de IA.** O Obsidian Mobile roda a maioria dos plugins. Se a IA no celular é crítica, esta é a resposta mais simples — ao custo de mudar de ferramenta.',
          '**Por que a lacuna existe:** tanto o Logseq quanto o Joplin rodam seus motores de plugins como contextos Node.js / Electron exclusivos do desktop. Os apps móveis são nativos (Logseq Capacitor, Joplin React Native) e não incorporam o runtime de plugins. Eliminar a lacuna exige reescrever a arquitetura de plugins — nenhuma equipe sinalizou isso para 2026.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Se o seu caso de uso de IA é principalmente móvel (por exemplo, ditar notas em movimento e querer que a IA as resuma imediatamente), o Logseq e o Joplin não são as ferramentas certas atualmente — o Obsidian Mobile + Ollama na LAN é. Se o seu caso de uso de IA é principalmente de desktop com captura móvel (o padrão mais comum), o Logseq e o Joplin funcionam bem e a lacuna móvel é um inconveniente menor em vez de um impedimento.',
          },
        ],
      },
      gdpr: {
        id: 'gdpr',
        title: 'GDPR e residência de dados na UE',
        content:
          '**Para usuários da UE e DACH, Logseq + logseq-copilot + Ollama e Joplin + Jarvis + Ollama são mais compatíveis com o GDPR que o Notion AI por arquitetura padrão.** O conteúdo das notas nunca sai da máquina do controlador de dados, então os fluxos de dados que o Artigo 28 do GDPR (acordos de operador), o Artigo 44 (transferências internacionais) e os catálogos BSI-Grundschutz exigem documentar para ferramentas SaaS simplesmente não existem para a pilha local.',
        items: [
          '**Artigo 28 (Acordos de operador):** com o Notion AI, o Notion + a OpenAI são operadores e exigem um Acordo de Tratamento de Dados (DPA) mais Cláusulas Contratuais Padrão para a transferência internacional à OpenAI. Com Logseq / Joplin + Ollama, não há nenhum operador terceiro — apenas o controlador de dados rodando software local.',
          '**Artigo 44 (Transferências internacionais):** o Notion AI envia dados para servidores da OpenAI sediados nos EUA; esta é uma "transferência internacional" de Schrems II que exige SCCs e uma Avaliação de Impacto da Transferência. O processamento local do Ollama elimina a transferência por completo.',
          '**Catálogos BSI-Grundschutz (DACH):** as diretrizes federais alemãs de segurança de TI tratam os serviços de IA na nuvem como terceirização que exige avaliação formal de risco. O processamento de IA local cai sob a linha de base muito mais simples de "TI interna".',
          '**Direito ao apagamento (Artigo 17):** com o Notion AI, apagar o conteúdo das notas da sua conta não necessariamente o apaga do pipeline de treinamento ou dos logs da OpenAI (depende dos termos corporativos). Com o Ollama local, o apagamento é o apagamento do sistema de arquivos — verificável e completo.',
          '**Auditabilidade:** as pilhas locais são mais fáceis de auditar. Execute uma captura de pacotes uma vez, verifique zero tráfego de saída durante o uso de IA, documente o resultado. Os serviços de IA na nuvem exigem confiar nos relatórios SOC 2 / ISO 27001 do fornecedor.',
          '**Hospedagem compatível com a UE (quando a sync envolve um servidor):** o Joplin Cloud é hospedado na UE; o Joplin Server auto-hospedado pode ser hospedado em infraestrutura da UE (Hetzner, OVH, IONOS). O Logseq Sync é operado pela Logseq Inc. (sediada nos EUA) — para residência estrita na UE, prefira Git ou Syncthing para a sync do Logseq.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para organizações que precisam de um argumento defensável de recursos de IA sob o GDPR, a pilha de LLM local no Logseq ou Joplin é a resposta mais simples. A discussão sobre o DPA passa de "usamos Notion + OpenAI como subprocessadores com estas cláusulas" para "usamos software local rodando no endpoint do controlador, sem nenhum operador envolvido". O trabalho da equipe de conformidade se torna muito mais fácil.',
          },
        ],
      },
      notionMigration: {
        id: 'notion-migration',
        title: 'Migrar do Notion AI para o Logseq ou Joplin',
        content:
          '**O Notion oferece uma exportação nativa de Markdown que tanto o Logseq quanto o Joplin podem importar — o Logseq preserva melhor a estrutura no nível de bloco, o Joplin preserva o conteúdo, mas achata os blocos aninhados.** De qualquer forma, a migração é uma exportação-importação única, não uma sync contínua, e interrompe o fluxo de dados para a OpenAI imediatamente.',
        numberedItems: [
          '**Exportar do Notion:** Configurações → Configurações e membros → Configurações → "Exportar todo o conteúdo do espaço de trabalho" → escolha "Markdown & CSV" → baixe o ZIP. A exportação contém um arquivo .md por página mais pastas para páginas aninhadas.',
          '**Descompactar e limpar:** a exportação do Notion usa sufixos longos de ID de página nos nomes de arquivo (por exemplo, `My Page 1f8b2a3c4d5e6f7g8h9i.md`). Execute um script rápido de renomeação para remover os IDs se os nomes de arquivo importarem para a sua nova ferramenta.',
          '**Caminho de importação do Logseq:** abra o Logseq → Arquivo → Novo grafo → aponte para uma nova pasta → copie os arquivos do Notion descompactados para a pasta `pages/` do grafo. O Logseq os reconhece; os backlinks (estilo `[[Página]]` do Notion) sobrevivem quando os arquivos coincidem. O aninhamento no nível de bloco é preservado porque tanto o Notion quanto o Logseq usam indentação de blocos em estilo lista.',
          '**Caminho de importação do Joplin:** Ferramentas → Importar → "MD - Markdown directory" → selecione a pasta do Notion descompactada. O Joplin cria uma nota por arquivo .md dentro de uma estrutura de caderno que espelha a hierarquia de páginas do Notion. O aninhamento no nível de bloco é achatado — as listas suspensas aninhadas do Notion se tornam listas Markdown planas.',
          '**Verificar a migração:** confira aleatoriamente 10–20 páginas — confirme que o conteúdo, os links e as tags sobreviveram. Se você usou bancos de dados do Notion extensivamente, a exportação CSV é separada; tanto o Logseq quanto o Joplin a tratam como um arquivo plano em vez de um banco de dados estruturado, então planeje alguma reestruturação manual.',
          '**Parar o Notion AI:** desative a assinatura do Notion AI nas configurações da conta. O trabalho de IA futuro acontece via logseq-copilot ou Jarvis na sua máquina local.',
          '**Verificar a postura de privacidade:** desconecte a rede → execute os recursos de IA na sua nova ferramenta → confirme que funcionam. Este é o teste que prova que a migração alcançou seu objetivo.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Se você usou bancos de dados do Notion como dados estruturados (rastreadores de projetos, CRMs, etc.), a migração é mais complexa do que para páginas de prosa. Considere manter esses bancos de dados específicos no Notion (sem IA) enquanto move o conteúdo com muito texto para o Logseq ou Joplin — ou migre os bancos de dados para o RAG estruturado do [AnythingLLM](https://anythingllm.com), onde o LLM local pode consultá-los como documentos.',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: 'Fluxos de trabalho de exemplo: diário diário, notas de reunião, pesquisa',
        content:
          '**Três fluxos de trabalho concretos que mostram a pilha local em ação.** Os dois primeiros são centrados no Logseq (nativos do outliner / diário); o terceiro é centrado no Joplin (notas de formato mais longo).',
        items: [
          '**Resumo do diário diário do Logseq:** ao final do dia → abra a página do diário de hoje → `/copilot Resuma este dia em três marcadores focados em decisões, bloqueios e ações para amanhã` → a resposta aparece como blocos aninhados. Salve o prompt como modelo do logseq-copilot para execuções de uma única tecla.',
          '**Revisão semanal do Logseq:** domingo à noite → abra uma página nova chamada `Revisão semana 19` → `/copilot Resuma as últimas 7 páginas do diário diário em 3 marcadores por categoria: progresso, bloqueios, temas` → o logseq-copilot recupera páginas recentes do diário via o mecanismo de link de páginas. O resultado se torna a semente do planejamento da próxima semana.',
          '**Expansão de notas de reunião do Joplin:** durante a reunião, capture marcadores aproximados em uma nota → após a reunião, selecione tudo → Ferramentas → Jarvis → "Expanda e estruture estas notas" → a saída substitui ou é anexada abaixo. Salve o prompt como preset do Jarvis.',
          '**Q&A de pesquisa do Joplin:** adicione 50–500 notas de fontes (artigos, documentos, recortes da web) em um único caderno → habilite o Jarvis Notes Database → aguarde a incorporação → Ferramentas → Jarvis → "Ask Jarvis" → faça perguntas entre fontes ("Quais fontes falam de X?"). Equivalente ao QA do vault do Obsidian Copilot, mas dentro do Joplin.',
          '**Logseq + Joplin combinados:** capture no Logseq (rápido, nativo do diário) → faça a curadoria dos itens duradouros no Joplin (referência permanente). Execute IA em cada ferramenta para seus pontos fortes nativos — chat rápido / geração de esboços no Logseq, Q&A de pesquisa respaldada por embeddings no Joplin.',
          '**Captura no celular, processamento no desktop:** durante o dia, capture notas livremente no Logseq Mobile ou Joplin Mobile (sem IA). Ao final do dia no desktop, execute o logseq-copilot ou o Jarvis para resumir, vincular e consultar — a IA se atualiza com o que você capturou offline.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O padrão de "captura no celular, processamento no desktop" é a forma certa de pensar no Logseq + Joplin em 2026 dada a lacuna de plugins móveis. Não é uma solução alternativa — corresponde a como o trabalho do conhecimento realmente acontece. O celular é para as entradas (você tem uma ideia, você a captura). O desktop é para a síntese (você processa o material capturado). O LLM local entra no momento da síntese, que é exatamente onde sua qualidade mais importa.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        items: [
          '**Configurar o logseq-copilot ou o Jarvis com um provedor de nuvem por acidente.** Ambos os plugins oferecem "OpenAI" como provedor padrão. A configuração somente local exige mudar para uma URL base personalizada apontando para `http://localhost:11434/v1`. Esquecer isso significa que o plugin envia notas silenciosamente para a OpenAI — exatamente o modo de falha do qual você migrou. Verifique com uma captura de pacotes.',
          '**Esperar suporte a plugins no celular.** Nem o Logseq Mobile nem o Joplin Mobile roda plugins em 2026. Se você assumir que a IA funciona em qualquer lugar onde estejam suas notas, vai bater na parede na primeira vez que tentar resumir no trem. Planeje captura no celular, processamento no desktop desde o primeiro dia.',
          '**Apontar o plugin para `http://localhost:11434/v1` a partir de uma máquina diferente.** O localhost é por máquina. Se você roda o Ollama em um desktop e o Logseq em um laptop, você precisa do IP de LAN do desktop (`http://192.168.1.20:11434/v1`) mais o Ollama vinculado a `0.0.0.0:11434`.',
          '**Sincronizar o banco de dados de embeddings do Joplin Jarvis com um nível WebDAV gratuito de cota pequena.** Os bancos de dados de embeddings crescem ~150–250 MB a cada 5.000 notas. Os níveis gratuitos (Dropbox 2 GB) atingem o limite rapidamente em escala de caderno. Planeje o Joplin Server auto-hospedado ou um nível pago quando os cadernos ultrapassarem ~5.000 notas.',
          '**Não executar uma captura de pacotes de auditoria uma vez.** Ambos os plugins são de código aberto e se comportam bem, mas a única prova definitiva de que sua pilha é somente local é executar Wireshark / Little Snitch / equivalente durante o uso de IA e verificar zero tráfego de saída. Faça isso uma vez após a configuração, documente o resultado, siga em frente.',
          '**Tentar usar o Logseq + logseq-copilot para recuperação respaldada por embeddings.** O logseq-copilot não tem um índice de embeddings para todo o grafo em 2026. Se você precisa de "pergunte a todo o meu grafo", mude para o Joplin + Jarvis ou use o Obsidian + Smart Connections. O Logseq se destaca em IA nativa do outliner, não em busca semântica.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'Logseq — [logseq.com](https://logseq.com) e [github.com/logseq/logseq](https://github.com/logseq/logseq) (outliner de código aberto; AGPL 3.0).',
          'logseq-copilot — [github.com/logancyang/logseq-copilot](https://github.com/logancyang/logseq-copilot) (plugin de código aberto do Logseq; AGPL 3.0).',
          'Joplin — [joplinapp.org](https://joplinapp.org) e [github.com/laurent22/joplin](https://github.com/laurent22/joplin) (caderno de código aberto; AGPL 3.0).',
          'Jarvis (Joplin) — [github.com/alondmnt/joplin-plugin-jarvis](https://github.com/alondmnt/joplin-plugin-jarvis) (plugin de código aberto do Joplin; AGPL 3.0).',
          'Ollama — [ollama.com](https://ollama.com) e [github.com/ollama/ollama](https://github.com/ollama/ollama) (runtime de LLM local; MIT).',
          'Privacidade e tratamento de dados do Notion AI — [notion.com/help/notion-ai-faqs](https://www.notion.com/help/notion-ai-faqs) (documentação do fornecedor para o contexto comparativo).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'O Logseq pode substituir o Notion para usuários de IA?',
            a: 'Sim para páginas de prosa e fluxos de trabalho de diário diário. Instale o logseq-copilot, aponte-o para o Ollama, e você terá chat, resumo e geração baseada em modelos dentro do Logseq — sem que os dados saiam da sua máquina. A lacuna são os bancos de dados estruturados: as visualizações de banco de dados do Notion (rastreadores de projetos, CRMs) não têm um equivalente limpo no Logseq. Os usuários com muito texto substituem o Notion completamente; os usuários com muitos bancos de dados aceitam reestruturação manual ou mantêm bancos de dados específicos no Notion (sem IA) enquanto movem o texto para o Logseq.',
          },
          {
            q: 'O Joplin suporta plugins de IA locais?',
            a: 'Sim. O plugin recomendado em 2026 é o Jarvis, que fornece chat, resumo e busca semântica respaldada por embeddings em todo o caderno. Configure o Jarvis para usar o Ollama em `http://localhost:11434/v1` para chat e `http://localhost:11434/v1` com `nomic-embed-text` para embeddings. Existem outros plugins do Joplin compatíveis com Ollama, mas o Jarvis é o mais ativamente mantido e completo em recursos.',
          },
          {
            q: 'Qual tem melhor sync sem nuvem — Logseq ou Joplin?',
            a: 'O Joplin tem a história de sync sem nuvem mais ampla e polida. O Joplin suporta o Joplin Server auto-hospedado, WebDAV, Nextcloud, mais E2EE de primeira classe sobre qualquer backend. O Logseq tem sync Git integrada (excelente para desenvolvedores) e funciona com Syncthing ou iCloud Drive, mas não tem um equivalente auto-hospedado ao Joplin Server. Para equipes que querem sync auditável on-premises, o Joplin Server é a melhor opção; para desenvolvedores que querem histórico rastreado por Git, a sync Git do Logseq é a melhor opção.',
          },
          {
            q: 'Posso migrar do Notion para o Logseq com os recursos de IA intactos?',
            a: 'A migração move o conteúdo, não a assinatura do Notion AI. Exporte do Notion como Markdown, importe para o Logseq, depois instale o logseq-copilot e configure-o com o Ollama — a camada de IA é reconstruída localmente. O Logseq preserva melhor o aninhamento no nível de bloco do Notion do que o Joplin porque ambas as ferramentas usam blocos com indentação de lista como primitivo. Os recursos do Notion AI (preenchimento automático, propriedades inteligentes em bancos de dados) não têm equivalentes diretos no Logseq — esses fluxos de trabalho precisam ser reconstruídos com prompts do logseq-copilot ou scripts.',
          },
          {
            q: 'O Logseq funciona completamente offline?',
            a: 'Sim. O Logseq é um aplicativo de desktop local sem nenhum componente de nuvem necessário. O grafo é uma pasta de arquivos Markdown; o app os lê e escreve localmente. O acesso à rede só é necessário para sincronizar com um remoto (Git push, descoberta de pares do Syncthing, Logseq Sync) e para executar o logseq-copilot contra um provedor de LLM na nuvem — este último é opcional. Com o Ollama como provedor de LLM, toda a pilha roda offline.',
          },
          {
            q: 'Os plugins de IA do Joplin são tão maduros quanto os do Obsidian?',
            a: 'O Obsidian tem mais plugins de IA e mais mantenedores simultâneos. O Joplin tem menos plugins, mas o Jarvis é completo em recursos e ativamente mantido — cobrindo chat, resumo e recuperação respaldada por embeddings em um único plugin. Para a maioria dos usuários, o Jarvis iguala ou supera a combinação de Obsidian Copilot + Smart Connections nos cadernos Markdown puros do Joplin; para usuários avançados que querem variedade de plugins (motores de modelos, chat de personagens, geradores de MOC), o Obsidian ainda tem mais opções.',
          },
          {
            q: 'Qual é melhor para o diário diário com IA — Logseq ou Joplin?',
            a: 'Logseq. O diário diário é um primitivo integrado no Logseq — cada dia obtém automaticamente uma página de diário, os blocos são de primeira classe, e a saída do logseq-copilot se torna blocos aninhados sob o prompt. Os fluxos de trabalho de IA do diário diário (resumo de fim de dia, revisão semanal, marcação de humor) parecem nativos. O Joplin pode replicar isso com cadernos por mês e prompts do Jarvis, mas o atrito é maior.',
          },
          {
            q: 'Posso usar o mesmo vault em vários dispositivos?',
            a: 'Sim — ambas as ferramentas suportam uso em vários dispositivos via sua camada de sync. Logseq: Git, Syncthing, iCloud Drive ou Logseq Sync. Joplin: Joplin Cloud, Joplin Server auto-hospedado, WebDAV, Nextcloud, Dropbox ou OneDrive. Advertência: os plugins de IA rodam apenas no desktop. O conteúdo do vault sincroniza com o celular, mas o logseq-copilot e o Jarvis não rodam lá. Planeje IA no desktop, captura no celular.',
          },
          {
            q: 'Os plugins de IA funcionam com o Joplin Mobile ou o Logseq Mobile?',
            a: 'Não — nenhuma ferramenta suporta plugins no celular em 2026. O Logseq Mobile e o Joplin Mobile são superfícies de leitura/escrita para o vault sincronizado, mas o runtime de plugins (Node.js / Electron) não existe nos apps móveis. Os recursos de IA (logseq-copilot, Jarvis) rodam apenas no desktop. Se a IA no celular importa, as alternativas são Obsidian Mobile + Ollama na LAN, ou captura no celular + processamento no desktop.',
          },
          {
            q: 'A integração de IA local de código aberto é mais segura que o Notion AI?',
            a: 'Sim por arquitetura padrão. O Notion AI envia o conteúdo das notas para a OpenAI por design — isso é estrutural, não uma escolha de configuração. O Logseq + logseq-copilot + Ollama e o Joplin + Jarvis + Ollama não enviam nada a um terceiro a menos que você configure explicitamente um provedor de LLM na nuvem. Para dados da UE cobertos pelo GDPR, saúde, jurídico e jornalismo, essa distinção é significativa: as pilhas locais não têm operador, não há transferência internacional, não há risco de subprocessadores. A auditabilidade também é mais simples — uma captura de pacotes única prova zero tráfego de saída durante o uso de IA.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Obsidian + LLM local: 5 plugins que transformam seu vault em um segundo cérebro (2026)](/pt/power-local-llm/local-llm-with-obsidian-2026) — artigo irmão para usuários do Obsidian; a alternativa de usuário avançado contra a qual esses leitores tipicamente estão se decidindo.',
          '[Base de conhecimento pessoal com LLM local 2026](/pt/power-local-llm/local-llm-personal-knowledge-base-2026) — arquitetura PKB mais ampla que o Logseq e o Joplin alimentam; cobre a camada RAG, pipelines de captura e fluxos de trabalho de mais de 10K itens.',
          '[Substitua o Grammarly e o Notion AI por um LLM local (2026)](/pt/power-local-llm/replace-grammarly-notion-ai-with-local) — guia adjacente de substituição de SaaS focado especificamente na saída do Notion AI.',
          '[Substitua o Zapier por agentes de IA locais: 5 fluxos de trabalho que economizam /mês (2026)](/pt/power-local-llm/replace-zapier-with-local-ai-agents) — substituição adjacente de pilha de produtividade para leitores que consolidam dependências de SaaS.',
          '[Os melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026) — autoridade em modelos para escolher os modelos de chat e embeddings por trás do logseq-copilot e do Jarvis.',
          '[Diretório de software de LLM local 2026](/pt/power-local-llm/local-llm-software-directory-2026) — entradas do diretório para Logseq, Joplin, Ollama, logseq-copilot e Jarvis com licenças e links.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Logseq e Joplin com LLMs locais: notas inteligentes sem sincronização na nuvem (2026)',
      description: 'Logseq + logseq-copilot vs Joplin + Jarvis no Ollama: alternativa privada ao Notion AI. Sync sem nuvem, postura GDPR, lacuna de plugins móveis. 2026.',
      url: 'https://www.promptquorum.com/pt/pt/power-local-llm/local-llm-with-logseq-and-joplin',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
},
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Logseq und Joplin mit lokalen LLMs: Intelligente Notizen ohne Cloud-Synchronisierung (2026)',
    seoTitle: 'Logseq + Joplin mit lokalem LLM: Notizen ohne Cloud 2026',
    intro:
      '[Logseq](https://logseq.com) und [Joplin](https://joplinapp.org) sind die beiden Open-Source-Notiz-Apps, die sich 2026 sauber mit einem lokalen LLM kombinieren lassen und niemals eine Cloud-Verbindung benötigen. Logseq nutzt das logseq-copilot-Plugin gegen [Ollama](https://ollama.com) für Outliner-natives Chatten und KI im Tagesjournal; Joplin nutzt das Jarvis-Plugin gegen Ollama für notizbewussten Chat, Zusammenfassungen und Embedding-gestützte Suche. Beide sind durch ihre Standardarchitektur DSGVO-freundlicher als Notion AI — Notion sendet Notizinhalte an OpenAI; Logseq und Joplin senden nichts, sofern Sie es nicht entsprechend konfigurieren. Der Haken in 2026 ist mobil: Weder Logseq noch Joplin unterstützen Plugins unter iOS oder Android, KI-Funktionen laufen also ausschließlich am Desktop. Dieser Leitfaden bewertet beide Tools nach Reife der KI-Plugins, Synchronisierungspfaden ohne Cloud, mobiler Kompatibilität und Migrationspfad von Notion — mit konkreten Konfigurationsschritten für Ollama.',
    metaDescription:
      'Logseq + logseq-copilot vs. Joplin + Jarvis mit Ollama: private Alternative zu Notion AI. Cloud-freie Sync, DSGVO-konform, Mobile-Lücke. 2026.',
    twitterDescription:
      'Open-Source-Notizen + lokale KI ohne Cloud: Logseq mit logseq-copilot, Joplin mit Jarvis, beide auf Ollama. Mobile Plugin-Lücke erklärt. Notion-Migrationspfad. DSGVO-freundlich von Haus aus.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'nomic-embed-text',
      'mxbai-embed-large',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16+ GB Unified Memory)',
      'PC mit RTX 3060 12 GB oder RTX 4060 8 GB',
      'PC mit 16 GB RAM (Nur-CPU-Fallback)',
    ],
    audience:
      'Open-Source-Notiz-Nutzer, datenschutzbewusste Wissensarbeiter, EU-/DACH-Fachkräfte mit DSGVO-Pflichten, Notion-AI-Aussteiger und Tagesjournal-Schreiber, die KI-Funktionen wünschen, ohne ihre Notizen an OpenAI oder Anthropic zu senden.',
    readTime: '14 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Logseq Joplin lokales LLM Plugin',
    targetKeywords: [
      'logseq lokales llm',
      'joplin lokale ki',
      'logseq copilot ollama',
      'joplin jarvis plugin',
      'open source notizen ki datenschutz',
      'notion ai alternative dsgvo',
    ],
    leadAnswerBlock:
      '**Für die meisten Leser ist 2026 Logseq + logseq-copilot oder Joplin + Jarvis kombiniert mit Ollama die richtige private Alternative zu Notion AI.** Wählen Sie Logseq, wenn Sie in einem Tagesjournal- + Outliner-Workflow leben; wählen Sie Joplin, wenn Sie reine Markdown-Notizen mit Ende-zu-Ende-verschlüsselter Synchronisierung möchten. Beide verbinden sich mit Ollama unter `http://localhost:11434/v1`, beide unterstützen ab Werk Chat mit der aktuellen Notiz, und beide sind Open Source unter permissiven Lizenzen (Logseq AGPL 3.0, Joplin AGPL 3.0 — selbe Familie). Keines sendet Notizinhalte an eine Cloud, sofern Sie nicht ausdrücklich einen Cloud-Anbieter im Plugin konfigurieren. Die harte Grenze in 2026: Keines der Tools unterstützt Plugins unter iOS oder Android — KI-Funktionen sind ausschließlich am Desktop verfügbar; Mobile wird zu einer manuellen Erfassungsfläche, die Sie zurück am Desktop mit KI verarbeiten. Für die Migration von Notion AI hat Logseq den saubereren Importpfad über Notions nativen Markdown-Export; Joplins Notion-Import funktioniert, verliert aber die Block-Struktur.',
    quickAnswerTop: {
      de: {
        question: 'Welche Logseq- oder Joplin-Plugin-Kombination eignet sich 2026 am besten für ein privates lokales LLM?',
        answer:
          'Logseq + logseq-copilot oder Joplin + Jarvis-Plugin, beide auf Ollama unter `http://localhost:11434/v1` ausgerichtet. logseq-copilot fügt Chat-Blöcke und Slash-Befehle innerhalb von Logseq hinzu; Jarvis fügt Chat, Zusammenfassung und Embedding-gestützte Q&A innerhalb von Joplin hinzu. Beide sind Open-Source-Plugins unter AGPL, beide laufen standardmäßig nur lokal, und beide unterstützen Ollama nativ. Empfohlenes Chat-Modell 2026 ist Llama 3.2 3B (Standard) oder Phi-4 Mini für 8-GB-RAM-Systeme. Für Embedding-gestützte Suche (nur Joplin Jarvis — Logseq bietet 2026 derzeit kein Plugin für graphweites Embedding) verwenden Sie nomic-embed-text oder mxbai-embed-large. Mobile Plugin-Unterstützung: 2026 in keinem der beiden Tools verfügbar — KI-Funktionen laufen nur am Desktop.',
        bullets: [
          'Logseq + logseq-copilot — Chat-Blöcke per Slash-Befehl direkt im Outliner. Optimal für Tagesjournal- und Graph-Workflows.',
          'Joplin + Jarvis-Plugin — Chat-Sidebar, Zusammenfassung, Embedding-gestützte semantische Suche. Optimal für reine Markdown-Notizen mit starker Synchronisierung.',
          'Beide Plugins verbinden sich mit Ollama unter `http://localhost:11434/v1` — keine Cloud-Aufrufe in der Standardkonfiguration.',
          'Logseq-Sync ohne Cloud: Git (eingebaut) oder lokale Datei-Synchronisierung über Syncthing/iCloud Drive. Joplin-Sync: Ende-zu-Ende-verschlüsselte Joplin Cloud, selbstgehosteter Joplin Server oder Nextcloud / WebDAV / Dropbox / OneDrive mit E2EE.',
          'Mobile Plugin-Lücke (2026): Weder Logseq Mobile noch Joplin Mobile unterstützt Plugins. KI-Funktionen laufen nur am Desktop — Mobile dient der Erfassung, der Desktop der Verarbeitung.',
          'Notion-AI-Migration: Logseq hat den saubereren Markdown-Importpfad; Joplin verliert die Block-Struktur, behält aber den Inhalt. Beide stoppen den Datenfluss zu OpenAI sofort beim Wechsel.',
          'Empfohlene Ollama-Modelle: Chat — Llama 3.2 3B oder Phi-4 Mini; Embeddings (nur Joplin Jarvis) — nomic-embed-text oder mxbai-embed-large.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Auf einen Blick', anchor: '#quick-facts' },
      { label: 'Logseq oder Joplin: Welches Tool sollten Sie wählen?', anchor: '#which-tool' },
      { label: 'Tool-Vergleichstabelle', anchor: '#comparison-table' },
      { label: 'Logseq-KI-Plugins mit Ollama', anchor: '#logseq-ai' },
      { label: 'Joplin-KI-Plugins mit Ollama', anchor: '#joplin-ai' },
      { label: 'Der Datenschutz-Fall gegen Notion AI', anchor: '#vs-notion' },
      { label: 'Synchronisierung ohne Cloud: Git, Syncthing, Joplin Server', anchor: '#sync' },
      { label: 'Mobile Plugin-Lücke: Was funktioniert und was nicht', anchor: '#mobile' },
      { label: 'DSGVO und EU-Datenresidenz', anchor: '#gdpr' },
      { label: 'Migration von Notion AI zu Logseq oder Joplin', anchor: '#notion-migration' },
      { label: 'Beispiel-Workflows: Tagesjournal, Meeting-Notizen, Recherche', anchor: '#workflows' },
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
          '**Logseq + logseq-copilot ist die empfohlene Kombination für Outliner- / Tagesjournal-Nutzer.** logseq-copilot fügt Chat-Blöcke und Slash-Befehle innerhalb von Logseq hinzu, konfiguriert gegen Ollama unter `http://localhost:11434/v1`. Optimal für Nutzer, die bereits im Tagesjournal-Seitenmodell von Logseq arbeiten.',
          '**Joplin + Jarvis ist die empfohlene Kombination für Nutzer reiner Markdown-Notizen.** Jarvis fügt eine Chat-Sidebar, Zusammenfassungs-Befehle und Embedding-gestützte semantische Suche über das gesamte Notizbuch hinzu. Optimal für Nutzer, die ein Notion-ähnliches Notizbuch mit starker Ende-zu-Ende-verschlüsselter Synchronisierung möchten.',
          '**Beide Tools sind Open Source unter AGPL 3.0** — die Lizenz ist permissiv für private und kommerzielle Nutzung; die einzige Auflage ist die Quelloffenlegung, falls Sie sie modifizieren und öffentlich hosten.',
          '**Datenschutzhaltung schlägt Notion AI architektonisch.** Notion AI sendet Notizinhalte per Design an OpenAI; Logseq und Joplin senden nichts, sofern Sie nicht ausdrücklich einen Cloud-Anbieter konfigurieren. Diese Unterscheidung ist relevant für Gesundheitswesen, Recht, Journalismus und jeden DSGVO-regulierten Kontext.',
          '**Die mobile Plugin-Lücke ist die größte Einschränkung 2026.** Weder Logseq Mobile noch Joplin Mobile unterstützt Plugins. KI-Funktionen laufen nur am Desktop — Mobile wird zur Erfassungsfläche (Notizen schreiben), und die Verarbeitung (Zusammenfassung, Chat, Abruf) erfolgt später am Desktop.',
          '**Synchronisierung ohne Cloud ist unkompliziert, jedes Tool geht jedoch einen anderen Weg.** Logseq verfügt über eingebaute Git-Synchronisierung und arbeitet sauber mit Syncthing oder iCloud Drive. Joplin bietet Ende-zu-Ende-verschlüsselte Joplin Cloud, selbstgehosteten Joplin Server oder beliebiges WebDAV / Nextcloud / Dropbox / OneDrive mit E2EE-Aufsatz.',
          '**Die Migration von Notion AI ist eine Einbahnstraße, die beide Tools beherrschen.** Logseq importiert Notions Markdown-Export mit besserer Block-Treue; Joplin importiert Inhalte, flacht aber verschachtelte Blöcke ab. Nach der Migration verlassen keine Notizen Ihren Rechner mehr, sofern Sie es nicht selbst entscheiden.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Auf einen Blick',
        items: [
          '**Behandelte Tools:** Logseq (Outliner, Tagesjournal-zentriert) und Joplin (reines Markdown-Notizbuch). [Obsidian](https://obsidian.md) wird zur Einordnung erwähnt — der dedizierte Leitfaden ist am Ende verlinkt.',
          '**Primäre KI-Plugins:** logseq-copilot für Logseq; Jarvis (und ähnliche Ollama-fähige Plugins) für Joplin.',
          '**LLM-Backend:** Ollama (empfohlen) unter `http://localhost:11434/v1` oder beliebiger OpenAI-kompatibler lokaler Endpunkt ([LM Studio](https://lmstudio.ai), llama.cpp Server, vLLM).',
          '**Empfohlene Chat-Modelle:** Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B (16-GB-RAM-Systeme); Qwen3 1.7B (8 GB RAM).',
          '**Empfohlene Embedding-Modelle (nur Joplin Jarvis):** nomic-embed-text (768-dim, schnell), mxbai-embed-large (1024-dim, präziser).',
          '**Lizenzen:** Logseq AGPL 3.0; Joplin AGPL 3.0; logseq-copilot AGPL 3.0 (gleicher Autor wie Copilot for Obsidian, Logan Yang); Jarvis (Joplin) AGPL 3.0.',
          '**Sync-Pfade:** Logseq — eingebautes Git, Syncthing, iCloud Drive, Logseq Sync (kostenpflichtig). Joplin — Joplin Cloud (kostenpflichtig, E2EE), selbstgehosteter Joplin Server, WebDAV, Nextcloud, Dropbox, OneDrive (alle unterstützen E2EE).',
          '**Mobile Plugins:** 2026 in keinem der Tools unterstützt — KI nur am Desktop.',
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: 'Logseq oder Joplin: Welches Tool sollten Sie wählen?',
        content:
          '**Wählen Sie Logseq, wenn Ihr Notiz-Workflow Tagesjournal- oder graph-orientiert ist; wählen Sie Joplin, wenn Ihre Notizen reine Markdown-Dokumente mit hohen Sync-Anforderungen sind.** Die beiden Tools haben unterschiedliche mentale Modelle — Logseq ist ein Outliner mit bidirektionalen Links und einem Tagesjournal als Standard-Erfassungsfläche; Joplin ist ein Notizbuch aus Markdown-Dateien mit Tags, Suche und Ende-zu-Ende-verschlüsselter Synchronisierung. Das KI-Plugin-Ökosystem 2026 spiegelt das wider: logseq-copilot integriert sich in Outliner-Blöcke; Jarvis integriert sich in die Joplin-Sidebar.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq + logseq-copilot eignet sich für Outliner- / Tagesjournal-Workflows; Joplin + Jarvis eignet sich für reine Markdown-Notizbuch-Workflows mit starker Ende-zu-Ende-verschlüsselter Synchronisierung.',
          },
          {
            type: 'plain-terms',
            text: 'Beide Tools sind private Alternativen zu Notion AI. Die Wahl hängt vor allem davon ab, wie Sie Notizen schreiben. Logseq behandelt Notizen als verschachtelte Stichpunkte und stellt Ihnen automatisch eine Tagesjournal-Seite bereit — gut für lautes Denken, zeitgestempelte Erfassung und graphartiges Querverweisen. Joplin behandelt Notizen als vollständige Markdown-Dokumente in Notizbüchern — gut für längere Texte, strukturierte Dokumentation und Geräte, die verschlüsselte Synchronisierung benötigen. Beide arbeiten mit einem lokalen LLM über Ollama, beide sind Open Source, und beide stoppen den Datenfluss zu Dritten in dem Moment, in dem Sie von Notion wechseln.',
          },
        ],
        decisionBlock: {
          title: 'Entscheidung: Logseq oder Joplin?',
          localIf: [
            'Sie schreiben ein Tagesjournal und möchten, dass die KI Tage zusammenfasst / clustert / verlinkt → Logseq + logseq-copilot',
            'Sie wollen graph-artige Backlinks und Outliner-Blöcke mit Inline-Chat → Logseq + logseq-copilot',
            'Sie schreiben längere Markdown-Notizen (Recherche, Dokumentation, Entwürfe) → Joplin + Jarvis',
            'Sie benötigen Ende-zu-Ende-verschlüsselte Synchronisierung über Geräte hinweg → Joplin (bessere E2EE-Story)',
            'Sie möchten Embedding-gestützte semantische Suche über das gesamte Notizbuch → Joplin + Jarvis (Logseq hat 2026 keine Entsprechung)',
            'Sie migrieren von Notion und möchten die sauberste Block-Treue → Logseq',
          ],
          cloudIf: [
            'Sie benötigen KI-Funktionen unter iOS oder Android (nicht nur Erfassung) → keines der Tools unterstützt Plugins auf Mobile in 2026; ziehen Sie Obsidian Mobile + LAN-Ollama mit Tailscale in Betracht',
            'Sie benötigen Echtzeit-Mehrbenutzer-Zusammenarbeit am selben Vault → sowohl Logseq als auch Joplin sind per Design Single-User; kollaborative Bearbeitung ist nicht ihr Modell',
            'Sie benötigen GPT-5.5-Qualität bei jeder Chat-Antwort → Cloud-Pendants (der lokale Stack erreicht ~70 % der Leistungsfähigkeit)',
          ],
          quick: [
            'Tagesjournal + Outliner: Logseq + logseq-copilot',
            'Reines Markdown-Notizbuch + E2EE-Sync: Joplin + Jarvis',
            'Mobile KI-Funktionen: 2026 nicht praktikabel — Erfassung am Mobilgerät, Verarbeitung am Desktop',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Ein verbreitetes Muster ist, beide parallel zu betreiben: Logseq für Tagesjournal und schnelle Erfassung (alles zeitgestempelt), Joplin für dauerhafte Referenznotizen (länger, getaggt, verschlüsselt synchronisiert). Die beiden Tools teilen keine Datenbank, aber keines ist schwergewichtig — der Betrieb beider erhöht den RAM-Verbrauch um etwa 200–400 MB. Nutzen Sie Logseq fürs „Denken" und Joplin fürs „Wissen", mit dem lokalen LLM in beiden verfügbar.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tool-Vergleichstabelle',
        content:
          '**Die vier wichtigsten Achsen: Tiefe der KI-Plugins, Synchronisierung ohne Cloud, mobile Plugin-Unterstützung und idealer Workflow.** Obsidian ist als Referenz enthalten — Leser, die alle drei vergleichen, sollten auch den dedizierten Obsidian-Leitfaden am Ende lesen.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq führt bei Outliner-nativer KI und Git-Synchronisierung; Joplin führt bei Ende-zu-Ende-verschlüsselter Synchronisierung und Embedding-gestütztem Abruf; Obsidian führt bei Plugin-Vielfalt zum Preis von kostenpflichtiger Synchronisierung und einer Nicht-OSI-Lizenz.',
          },
        ],
        columns: ['Tool', 'KI-Plugins', 'Sync (ohne Cloud)', 'Mobile', 'Optimal für'],
        rows: [
          { 'Tool': '[Logseq](https://logseq.com)', 'KI-Plugins': 'logseq-copilot (Chat-Blöcke, Slash-Befehle), GPT-3-Plugin-Varianten', 'Sync (ohne Cloud)': 'Eingebautes Git, Syncthing, iCloud Drive, Logseq Sync (kostenpflichtig E2EE)', 'Mobile': 'Mobile App verfügbar; Plugins auf Mobile nicht unterstützt (2026)', 'Optimal für': 'Tagesjournal- + Outliner-Workflow' },
          { 'Tool': '[Joplin](https://joplinapp.org)', 'KI-Plugins': 'Jarvis (Chat, Zusammenfassung, Embedding-gestützte Q&A), [Ollama](https://ollama.com)-fähige Integrationen', 'Sync (ohne Cloud)': 'Joplin Cloud (kostenpflichtig E2EE), selbstgehosteter Joplin Server, WebDAV, Nextcloud, Dropbox, OneDrive (alle E2EE-fähig)', 'Mobile': 'Mobile App verfügbar; Plugins auf Mobile nicht unterstützt (2026)', 'Optimal für': 'Markdown-Notizbuch + E2EE-Sync' },
          { 'Tool': '[Obsidian](https://obsidian.md) (Referenz)', 'KI-Plugins': 'Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot', 'Sync (ohne Cloud)': 'Git, Syncthing, iCloud Drive, Obsidian Sync (kostenpflichtig E2EE)', 'Mobile': 'Mobile App unterstützt die meisten Plugins; LAN-Zugriff auf Ollama erforderlich', 'Optimal für': 'Power-User mit kostenpflichtigen Plugins / kostenpflichtiger Synchronisierung' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die Spalte „Mobile" ist 2026 das größte Unterscheidungsmerkmal. Obsidian Mobile führt die meisten Plugins aus (einschließlich Smart Connections und Copilot), wenn Ollama im LAN oder über Tailscale erreichbar ist. Logseq Mobile und Joplin Mobile führen überhaupt keine Plugins aus — KI-Funktionen sind strikt auf den Desktop beschränkt. Wenn mobile KI wichtig ist, planen Sie für Erfassung am Mobilgerät + Verarbeitung am Desktop, oder schauen Sie sich Obsidian Mobile an.',
          },
        ],
      },
      logseqAi: {
        id: 'logseq-ai',
        title: 'Logseq-KI-Plugins mit Ollama',
        content:
          '**Das empfohlene Logseq-KI-Plugin 2026 ist logseq-copilot — gleicher Autor wie Copilot for Obsidian, konfiguriert auf Ollama gerichtet.** Es fügt Chat-Blöcke (`/copilot` Slash-Befehl), Inline-Umschreibung und journalbewusste Prompts direkt im Outliner von Logseq hinzu. Logseq verfügt 2026 derzeit nicht über ein Äquivalent zu Smart Connections (graphweiter Embedding-Index), sodass semantisches Verlinken im Graph noch kein gelöstes Problem ist.',
        items: [
          '**Was es leistet:** Chat-Blöcke per Slash-Befehl, Inline-Inhaltsgenerierung, journalbewusste Prompts, die die aktive Seite oder ausgewählte Blöcke als Kontext einziehen.',
          '**Installation:** Einstellungen → Plugins → Marketplace → nach „logseq-copilot" suchen → Installieren + Aktivieren. Autor: Logan Yang (gleicher wie Copilot for Obsidian).',
          '**Konfiguration für Ollama:** Einstellungen → logseq-copilot → API Provider → „Custom OpenAI" oder „Ollama" → API-Basis-URL `http://localhost:11434/v1` → Modell `llama3.2:3b` (oder beliebiger Ollama-Modellname).',
          '**Slash-Befehle:** Tippen Sie `/copilot` in einen beliebigen Block, um einen Chat zu starten. Die Ausgabe erscheint als verschachtelte Blöcke unter dem Prompt — Outliner-nativ, sodass Antworten zu erstklassigen Outline-Inhalten werden.',
          '**Auswahlbasierte Prompts:** Blöcke auswählen → eine benutzerdefinierte Prompt-Vorlage ausführen („Fasse diese in drei Stichpunkte zusammen") → Ergebnis wird unter der Auswahl angehängt.',
          '**Tagesjournal-Integration:** Eine Vorlage auf die Tagesjournal-Seite richten → Tagesabschluss-Zusammenfassung, Wochenrückblick-Fragen oder Backlink-Erweiterung werden zu Aktionen mit einem Tastendruck.',
          '**Was es 2026 NICHT leistet:** Es gibt keinen graphweiten Embedding-Index. Logseq-Backlinks bleiben explizit; semantische Entdeckung über Seiten hinweg wird derzeit von keinem Open-Source-Logseq-Plugin unterstützt.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'logseq-copilot-Ausgabe ist einfach Blöcke — dasselbe Primitiv wie alles andere in Logseq. Das ist der entscheidende Vorteil gegenüber Obsidian: KI-Antworten sind kein schwebender Sidebar-Text, sondern Graph-Knoten, die Sie verlinken, taggen, abfragen und bearbeiten können. Nutzen Sie `/copilot` intensiv für die Erfassung und refaktorieren Sie die Antwort-Blöcke anschließend wie jede andere Notiz.',
          },
        ],
      },
      joplinAi: {
        id: 'joplin-ai',
        title: 'Joplin-KI-Plugins mit Ollama',
        content:
          '**Das empfohlene Joplin-KI-Plugin 2026 ist Jarvis — es bietet Chat, Zusammenfassung und Embedding-gestützte semantische Suche über das gesamte Notizbuch, alles konfigurierbar mit Ollama.** Jarvis ist die nächste Joplin-Entsprechung zu Smart Connections + Copilot for Obsidian zusammen: ein Plugin, eine Konfiguration, zwei Aufgaben.',
        items: [
          '**Was es leistet:** Chat-Sidebar, „Ask Jarvis"-Befehl über das gesamte Notizbuch (Embedding-gestützter Abruf), ausgewählte Notiz zusammenfassen, Notizen aus Prompts generieren, benutzerdefinierte Prompts auf Auswahlen.',
          '**Installation:** Werkzeuge → Optionen → Plugins → nach „Jarvis" suchen → Installieren + Aktivieren. Autor: Alon Bukai.',
          '**Konfiguration für Ollama (Chat):** Optionen → Jarvis → Model Provider → „OpenAI" mit benutzerdefinierter Basis-URL → URL `http://localhost:11434/v1` → Modell `llama3.2:3b` → API-Schlüssel beliebiger nicht leerer String (Ollama ignoriert ihn).',
          '**Konfiguration für Ollama (Embeddings):** Optionen → Jarvis → Notes Database → Datenbank aktivieren → Embedding Model → „OpenAI" mit benutzerdefinierter Basis-URL → URL `http://localhost:11434/v1` → Modell `nomic-embed-text`.',
          '**Initiale Indexierung:** Jarvis bettet jede Notiz in der Datenbank ein, wenn sie zum ersten Mal aktiviert wird. Zeit auf Mac M3 Pro mit nomic-embed-text: 1.000 Notizen ~3 Min., 5.000 Notizen ~15 Min., 10.000 Notizen ~35 Min. Die Neueinbettung beim Speichern erfolgt inkrementell.',
          '**„Ask Jarvis"-Workflow:** Werkzeuge → Jarvis → Ask Jarvis → eine Frage eingeben → Jarvis ruft relevante Notizen über Embedding-Ähnlichkeit ab und sendet die Chunks plus Ihre Frage an das Chat-Modell. Entspricht Copilot-for-Obsidians Vault-QA.',
          '**Optimal für:** Nutzer, die ein einzelnes Plugin für Chat + Abruf in Joplin möchten, ohne zwei separate Plugins verwalten zu müssen.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Jarvis speichert seine Embedding-Datenbank innerhalb von Joplins SQLite-Datenbank. Die Datenbankdatei wächst um ~150–250 MB pro 5.000 mit nomic-embed-text eingebetteten Notizen. Wenn Sie das Joplin-Profil über Joplin Cloud oder WebDAV synchronisieren, ist die Embedding-Datenbank in der Synchronisierung enthalten — planen Sie für die Bandbreiten- und Synchronisierungszeitkosten ein. Die Embedding-Datenbank selbst ist während der Übertragung verschlüsselt, wenn Joplins E2EE verwendet wird.',
          },
        ],
      },
      vsNotion: {
        id: 'vs-notion',
        title: 'Der Datenschutz-Fall gegen Notion AI',
        content:
          '**Notion AI sendet Notizinhalte per Design an OpenAI — das ist Architektur, keine Konfigurationsentscheidung.** Wenn Sie Notion-AI-Funktionen auf einer Seite nutzen, schickt Notion den Seiteninhalt an OpenAI-Server, OpenAI verarbeitet ihn, und die Antwort kommt über Notion zurück. Die Daten unterliegen den Datenschutzrichtlinien von OpenAI und Notion, nicht Ihrem lokalen Dateisystem. Für Nutzer in regulierten Kontexten (Gesundheitswesen, Recht, Finanzberatung, Journalismus, DSGVO-pflichtige EU-Daten) ist das ein strukturelles Problem, das keine Einstellung beheben kann.',
        items: [
          '**Notion-AI-Architektur:** Notizen verlassen Ihren Rechner zur Verarbeitung durch OpenAI. Den Bedingungen von OpenAI Enterprise unterworfen (besser als die Standard-OpenAI-API), aber dennoch außerhalb Ihrer Infrastruktur.',
          '**Logseq + logseq-copilot-Architektur:** Logseq läuft als lokale App, das Plugin sendet Prompts an Ihr lokales Ollama, kein Notizinhalt erreicht einen Dritten, sofern Sie nicht ausdrücklich einen Cloud-Anbieter im Plugin konfigurieren.',
          '**Joplin + Jarvis-Architektur:** Joplin läuft als lokale App, Jarvis sendet Prompts an Ihr lokales Ollama, die Embedding-Generierung läuft lokal, kein Notizinhalt erreicht einen Dritten, sofern Sie nicht ausdrücklich einen Cloud-Anbieter in Jarvis konfigurieren.',
          '**Datenresidenz:** Mit Logseq oder Joplin + Ollama bleibt jedes Byte Notizinhalt auf Ihrem Rechner. Mit Notion AI durchlaufen Notizinhalte US-basierte OpenAI-Server, unabhängig davon, wo Sie sich befinden.',
          '**Audit-Spur:** Mit lokalen LLMs können Sie nach der Installation einmalig eine Paketmitschnitt-Aufnahme (Wireshark, Little Snitch, etc.) durchführen und verifizieren, dass die Plugins während der KI-Nutzung null ausgehende Anfragen machen. Bei Notion AI sind ausgehende Anfragen inhärent — es gibt nichts zu verifizieren.',
          '**Unterauftragsverarbeiter-Risiko:** Notion AI erbt alle Unterauftragsverarbeiter von OpenAI (Microsoft Azure als primäre Infrastruktur plus Support-Anbieter). Logseq und Joplin + Ollama haben null Unterauftragsverarbeiter für die KI-Schicht.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Der klarste Test für „ist meine Notiz-App tatsächlich privat?" ist, das Netzwerk zu trennen und KI-Funktionen auszuprobieren. Logseq + logseq-copilot + Ollama: funktioniert vollständig offline. Joplin + Jarvis + Ollama: funktioniert vollständig offline. Notion AI: gibt einen Fehler zurück. Führen Sie diesen Test einmal nach der Einrichtung durch, um zu bestätigen, dass Ihr Stack das tut, was Sie erwarten.',
          },
        ],
      },
      sync: {
        id: 'sync',
        title: 'Synchronisierung ohne Cloud: Git, Syncthing, Joplin Server',
        content:
          '**Sowohl Logseq als auch Joplin verfügen über mehrere Synchronisierungspfade, die niemals erfordern, einer Drittanbieter-Cloud Notizinhalte anzuvertrauen.** Die richtige Wahl hängt davon ab, ob Sie Null-Konfiguration (kostenpflichtige Synchronisierung), Git-verfolgte Historie (entwicklerfreundlich) oder Peer-to-Peer (kein Server) wünschen.',
        items: [
          '**Logseq — eingebaute Git-Synchronisierung:** Einstellungen → Sync → Git-Auto-Commit aktivieren. Logseq committet den Graph nach einem konfigurierten Git-Remote nach Zeitplan. Funktioniert mit GitHub / GitLab / selbstgehostetem Gitea. Reine Markdown-Commits machen die Historie für Menschen lesbar.',
          '**Logseq — Syncthing (Peer-to-Peer):** Syncthing auf jedem Gerät installieren und auf den Logseq-Graph-Ordner zeigen. Ende-zu-Ende-verschlüsselt, kein zentraler Server, kein Dritter. Hervorragend für Desktop-zu-Desktop-Synchronisierung; funktioniert auf Logseq Mobile, wenn Syncthing-Fork (Android) oder Möbius Sync (iOS) den Ordner aktuell hält.',
          '**Logseq — iCloud Drive:** Den Graph-Ordner unter macOS / iOS in iCloud Drive halten. Sauberster Pfad auf Apple-Geräten; Daten sind ruhend von Apple verschlüsselt, aber Apple hält die Schlüssel (kein Zero-Knowledge).',
          '**Logseq Sync (kostenpflichtig E2EE):** Die Ende-zu-Ende-verschlüsselte Synchronisierung des Logseq-Teams. Kompromiss: kostenpflichtig (Pro-Tier inklusive Sync, Preisgestaltung variiert — siehe logseq.com), dafür aber gerätenübergreifende E2EE ohne Konfiguration, einschließlich Mobile.',
          '**Joplin — Joplin Cloud (kostenpflichtig E2EE):** Die gehostete Synchronisierung des Joplin-Teams mit Ende-zu-Ende-Verschlüsselung. Kostenlos für kleine Notizmengen; bezahlte Tarife skalieren. Gehostet in der EU. Komfortabel und audit-freundlich.',
          '**Joplin — selbstgehosteter Joplin Server:** Das Joplin-Server-Docker-Image auf einem NAS / VPS / Heimserver betreiben. Ende-zu-Ende-Verschlüsselung von Client zu Client; der Server speichert Chiffretext. Bester Pfad für Organisationen, die volle Eigentümerschaft an der Synchronisierungsinfrastruktur möchten.',
          '**Joplin — WebDAV / Nextcloud / Dropbox / OneDrive:** Joplin unterstützt jeden WebDAV-Endpunkt sowie erstklassige Unterstützung für Nextcloud, Dropbox, OneDrive. Aktivieren Sie immer Joplins eingebautes E2EE darüber — diese Anbieter sehen nur Chiffretext.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Selbstgehosteter Joplin Server ist die Antwort für Organisationen, die auditierbare On-Premises-Synchronisierung wollen, ohne einer Drittanbieter-Cloud zu vertrauen. Betreiben Sie ihn auf einem kleinen VPS oder Heimserver, richten Sie alle Clients darauf, aktivieren Sie E2EE — der Server hält nur Chiffretext, und Sie kontrollieren den Host. Das ist deutlich einfacher als das Selbsthosten von Notion (offiziell nicht unterstützt) oder Obsidian-Sync-Infrastruktur.',
          },
        ],
      },
      mobile: {
        id: 'mobile',
        title: 'Mobile Plugin-Lücke: Was funktioniert und was nicht',
        content:
          '**Weder Logseq Mobile noch Joplin Mobile unterstützt Plugins in 2026 — das ist die größte Einschränkung gegenüber Obsidian.** Die mobilen Apps sind funktionale Erfassungs- und Leseflächen, aber logseq-copilot und Jarvis laufen nur am Desktop. Jeder KI-Workflow muss davon ausgehen, dass Mobile zur Erfassung dient und der Desktop zur Verarbeitung.',
        items: [
          '**Logseq Mobile (iOS / Android):** Notizen ansehen, bearbeiten und erfassen; Backlinks und Graph-Ansicht funktionieren; Synchronisierung funktioniert. Plugins laufen nicht — einschließlich logseq-copilot. KI-Funktionen sind auf Mobile nicht verfügbar.',
          '**Joplin Mobile (iOS / Android):** Notizen ansehen, bearbeiten und erfassen; Tags und Suche funktionieren; Synchronisierung funktioniert (einschließlich E2EE). Plugins laufen nicht — einschließlich Jarvis. KI-Funktionen sind auf Mobile nicht verfügbar.',
          '**Workaround-Muster: Erfassung am Mobilgerät, Verarbeitung am Desktop.** Schreiben Sie auf Mobile frei Notizen. Wenn Sie einen Desktop erreichen, führen Sie logseq-copilot oder Jarvis aus, um den erfassten Inhalt zusammenzufassen, zu erweitern, zu verlinken oder abzufragen.',
          '**Workaround-Muster: Heimserver + Remote-Desktop.** Betreiben Sie logseq-copilot oder Jarvis auf einem Desktop zu Hause, greifen Sie auf diesen Desktop über Tailscale + einen Remote-Desktop / SSH-Tunnel vom Mobilgerät zu, wenn KI benötigt wird. Erhöht die Einrichtungskosten; lohnt sich für Gelegenheitsnutzer selten.',
          '**Workaround-Muster: Wechsel zu Obsidian Mobile für KI-Anwendungsfälle.** Obsidian Mobile führt die meisten Plugins aus. Wenn mobile KI kritisch ist, ist das die einfachste Antwort — zum Preis eines Tool-Wechsels.',
          '**Warum die Lücke existiert:** Sowohl Logseq als auch Joplin betreiben ihre Plugin-Engines als Desktop-only Node.js / Electron-Kontexte. Mobile Apps sind nativ (Logseq Capacitor, Joplin React Native) und betten die Plugin-Laufzeitumgebung nicht ein. Die Beseitigung der Lücke erfordert die Neugestaltung der Plugin-Architektur — kein Team hat das für 2026 signalisiert.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Wenn Ihr KI-Anwendungsfall mobile-first ist (z. B. Notizen unterwegs diktieren und sofort von der KI zusammenfassen lassen), sind Logseq und Joplin derzeit nicht die richtigen Tools — Obsidian Mobile + LAN-Ollama ist es. Wenn Ihr KI-Anwendungsfall Desktop-first mit mobiler Erfassung ist (das verbreitetere Muster), funktionieren Logseq und Joplin beide gut, und die mobile Lücke ist eine geringfügige Unannehmlichkeit statt eines Hindernisses.',
          },
        ],
      },
      gdpr: {
        id: 'gdpr',
        title: 'DSGVO und EU-Datenresidenz',
        content:
          '**Für EU- und DACH-Nutzer sind Logseq + logseq-copilot + Ollama und Joplin + Jarvis + Ollama durch ihre Standardarchitektur DSGVO-freundlicher als Notion AI.** Notizinhalte verlassen niemals den Rechner des Verantwortlichen, sodass die Datenflüsse, deren Dokumentation DSGVO-Artikel 28 (Auftragsverarbeitungsverträge), Artikel 44 (Internationale Übermittlungen) und die BSI-Grundschutz-Kataloge für SaaS-Tools verlangen, beim lokalen Stack schlicht nicht existieren.',
        items: [
          '**Artikel 28 (Auftragsverarbeitungsverträge):** Bei Notion AI sind Notion + OpenAI Auftragsverarbeiter und erfordern einen Auftragsverarbeitungsvertrag (AVV) plus Standardvertragsklauseln für die internationale Übermittlung an OpenAI. Bei Logseq / Joplin + Ollama gibt es keinen Drittauftragsverarbeiter — nur den Verantwortlichen, der lokale Software ausführt.',
          '**Artikel 44 (Internationale Übermittlungen):** Notion AI sendet Daten an US-basierte OpenAI-Server; das ist eine Schrems-II-„internationale Übermittlung", die SCCs und ein Transfer Impact Assessment erfordert. Lokale Ollama-Verarbeitung eliminiert die Übermittlung vollständig.',
          '**BSI-Grundschutz-Kataloge (DACH):** Die deutschen IT-Grundschutz-Richtlinien des Bundesamts für Sicherheit in der Informationstechnik behandeln Cloud-KI-Dienste als Outsourcing, das eine formelle Risikobewertung erfordert. Lokale KI-Verarbeitung fällt unter den deutlich einfacheren „eigene IT"-Basisschutz und ist für Mittelstand und öffentliche Verwaltung prüfungstechnisch wesentlich leichter zu vertreten.',
          '**Recht auf Löschung (Artikel 17):** Bei Notion AI bedeutet das Löschen von Notizinhalten aus Ihrem Konto nicht zwangsläufig die Löschung aus OpenAIs Trainingspipeline oder Logs (abhängig von Enterprise-Bedingungen). Bei lokalem Ollama ist Löschung Dateisystem-Löschung — verifizierbar und vollständig.',
          '**Auditierbarkeit:** Lokale Stacks sind einfacher zu auditieren. Führen Sie einmal eine Paketmitschnitt-Aufnahme durch, verifizieren Sie null ausgehenden Verkehr während der KI-Nutzung, dokumentieren Sie das Ergebnis. Cloud-KI-Dienste erfordern den Verlass auf die SOC-2- / ISO-27001-Berichte des Anbieters.',
          '**EU-freundliches Hosting (wenn Synchronisierung einen Server erfordert):** Joplin Cloud wird in der EU gehostet; selbstgehosteter Joplin Server kann auf EU-Infrastruktur (Hetzner, OVH, IONOS) gehostet werden. Logseq Sync wird von Logseq Inc. (US-basiert) betrieben — für strikte EU-Datenresidenz bevorzugen Sie Git oder Syncthing für die Logseq-Synchronisierung.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für Organisationen, die eine vertretbare KI-Funktionen-Story unter der DSGVO benötigen, ist der Stack mit lokalem LLM auf Logseq oder Joplin die einfachste Antwort. Die AVV-Diskussion verschiebt sich von „wir nutzen Notion + OpenAI als Unterauftragsverarbeiter mit folgenden Klauseln" zu „wir nutzen lokale Software, die auf dem Endgerät des Verantwortlichen läuft, ohne beteiligten Auftragsverarbeiter". Die Arbeit des Compliance-Teams wird deutlich einfacher.',
          },
        ],
      },
      notionMigration: {
        id: 'notion-migration',
        title: 'Migration von Notion AI zu Logseq oder Joplin',
        content:
          '**Notion bietet einen nativen Markdown-Export, den sowohl Logseq als auch Joplin importieren können — Logseq erhält die Block-Struktur besser, Joplin erhält den Inhalt, flacht aber verschachtelte Blöcke ab.** So oder so ist die Migration ein einmaliger Export-Import, kein laufender Sync, und sie stoppt den Datenfluss zu OpenAI sofort.',
        numberedItems: [
          '**Aus Notion exportieren:** Einstellungen → Einstellungen & Mitglieder → Einstellungen → „Gesamten Workspace-Inhalt exportieren" → „Markdown & CSV" wählen → ZIP herunterladen. Der Export enthält eine .md-Datei pro Seite plus Ordner für verschachtelte Seiten.',
          '**Entpacken und aufräumen:** Notions Export verwendet lange Seiten-ID-Suffixe in Dateinamen (z. B. `My Page 1f8b2a3c4d5e6f7g8h9i.md`). Führen Sie ein schnelles Umbenennungs-Skript aus, um die IDs zu entfernen, falls Dateinamen für Ihr neues Tool wichtig sind.',
          '**Logseq-Importpfad:** Logseq öffnen → Datei → Neuer Graph → auf einen neuen Ordner zeigen → die entpackten Notion-Dateien in den `pages/`-Ordner des Graphs kopieren. Logseq erkennt sie; Backlinks (Notions `[[Page]]`-Stil) bleiben erhalten, wenn die Dateien übereinstimmen. Die Block-Verschachtelung bleibt erhalten, weil sowohl Notion als auch Logseq listenartige Block-Einrückung verwenden.',
          '**Joplin-Importpfad:** Werkzeuge → Importieren → „MD - Markdown directory" → den entpackten Notion-Ordner wählen. Joplin erstellt eine Notiz pro .md-Datei innerhalb einer Notizbuchstruktur, die Notions Seitenhierarchie spiegelt. Block-Verschachtelung wird flach — Notions verschachtelte Toggle-Listen werden zu flachen Markdown-Listen.',
          '**Migration verifizieren:** 10–20 Seiten stichprobenartig prüfen — bestätigen, dass Inhalt, Links und Tags überlebt haben. Wenn Sie Notion-Datenbanken intensiv genutzt haben, ist der CSV-Export separat; sowohl Logseq als auch Joplin behandeln ihn als flache Datei statt als strukturierte Datenbank, also planen Sie für etwas manuelle Restrukturierung ein.',
          '**Notion AI stoppen:** Das Notion-AI-Abo in den Kontoeinstellungen deaktivieren. Zukünftige KI-Arbeit erfolgt über logseq-copilot oder Jarvis auf Ihrem lokalen Rechner.',
          '**Datenschutzhaltung verifizieren:** Netzwerk trennen → KI-Funktionen im neuen Tool ausführen → bestätigen, dass sie funktionieren. Das ist der Test, der beweist, dass die Migration ihr Ziel erreicht hat.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Sie Notion-Datenbanken als strukturierte Daten genutzt haben (Projekt-Tracker, CRMs etc.), ist die Migration aufwändiger als bei reinen Prosa-Seiten. Erwägen Sie, diese spezifischen Datenbanken in Notion zu behalten (ohne KI), während Sie prosa-lastige Inhalte zu Logseq oder Joplin verschieben — oder migrieren Sie die Datenbanken zu [AnythingLLM](https://anythingllm.com)s strukturiertem RAG, wo das lokale LLM sie als Dokumente abfragen kann.',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: 'Beispiel-Workflows: Tagesjournal, Meeting-Notizen, Recherche',
        content:
          '**Drei konkrete Workflows, die den lokalen Stack in Aktion zeigen.** Die ersten beiden sind Logseq-zentriert (Outliner- / Journal-nativ); der dritte ist Joplin-zentriert (längere Notizen).',
        items: [
          '**Logseq-Tagesjournal-Zusammenfassung:** Tagesende → heutige Journalseite öffnen → `/copilot Fasse diesen Tag in drei Stichpunkten zusammen, fokussiert auf Entscheidungen, Blocker und Aktionen für morgen` → Antwort erscheint als verschachtelte Blöcke. Speichern Sie den Prompt als logseq-copilot-Vorlage für Ein-Tasten-Läufe.',
          '**Logseq-Wochenrückblick:** Sonntagabend → eine frische Seite namens `Woche 19 Rückblick` öffnen → `/copilot Fasse die letzten 7 Tagesjournal-Seiten in 3 Stichpunkten pro Kategorie zusammen: Fortschritt, Blocker, Themen` → logseq-copilot ruft aktuelle Journalseiten über den Seitenlink-Mechanismus ab. Das Ergebnis wird zur Saat der Planung der nächsten Woche.',
          '**Joplin-Meeting-Notizen-Erweiterung:** Während des Meetings grobe Stichpunkte in einer Notiz erfassen → nach dem Meeting alles auswählen → Werkzeuge → Jarvis → „Erweitere und strukturiere diese Notizen" → Ausgabe ersetzt oder hängt unten an. Speichern Sie den Prompt als Jarvis-Preset.',
          '**Joplin-Recherche-Q&A:** 50–500 Quellnotizen (Papers, Artikel, Web-Clippings) in ein einzelnes Notizbuch geben → Jarvis Notes Database aktivieren → auf Embedding warten → Werkzeuge → Jarvis → „Ask Jarvis" → quellenübergreifende Fragen stellen („Welche Quellen behandeln X?"). Entspricht Obsidian-Copilot-Vault-QA, aber innerhalb von Joplin.',
          '**Logseq + Joplin kombiniert:** Erfassen in Logseq (schnell, journal-nativ) → die dauerhaften Inhalte in Joplin kuratieren (permanente Referenz). KI auf jedem Tool für seine nativen Stärken einsetzen — schneller Chat / Outline-Generierung in Logseq, Embedding-gestütztes Recherche-Q&A in Joplin.',
          '**Mobile Erfassung, Desktop-Verarbeitung:** Erfassen Sie tagsüber Notizen frei in Logseq Mobile oder Joplin Mobile (ohne KI). Am Tagesende führen Sie am Desktop logseq-copilot oder Jarvis aus, um zusammenzufassen, zu verlinken und abzufragen — die KI holt das Erfasste offline auf.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Das Muster „mobile Erfassung, Desktop-Verarbeitung" ist 2026 die richtige Denkweise für Logseq + Joplin angesichts der mobilen Plugin-Lücke. Es ist kein Workaround — es entspricht dem tatsächlichen Ablauf von Wissensarbeit. Mobile dient den Eingaben (Sie haben einen Gedanken, Sie erfassen ihn). Desktop dient der Synthese (Sie verarbeiten das erfasste Material). Das lokale LLM kommt zur Synthese-Zeit dazu, genau dort, wo seine Qualität am meisten zählt.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**logseq-copilot oder Jarvis versehentlich mit einem Cloud-Anbieter konfigurieren.** Beide Plugins bieten „OpenAI" als Standardanbieter an. Die rein lokale Einrichtung erfordert den Wechsel zu einer benutzerdefinierten Basis-URL, die auf `http://localhost:11434/v1` zeigt. Wer das vergisst, riskiert, dass das Plugin Notizen still an OpenAI sendet — genau der Fehlermodus, von dem Sie weggewandert sind. Mit einem Paketmitschnitt verifizieren.',
          '**Plugin-Unterstützung auf Mobile erwarten.** Weder Logseq Mobile noch Joplin Mobile führt 2026 Plugins aus. Wenn Sie annehmen, dass KI überall funktioniert, wo Ihre Notizen sind, stoßen Sie an die Wand, sobald Sie das erste Mal im Zug zusammenfassen wollen. Planen Sie ab Tag eins für Erfassung am Mobilgerät, Verarbeitung am Desktop.',
          '**Das Plugin von einer anderen Maschine aus auf `http://localhost:11434/v1` zeigen.** Localhost ist pro Maschine. Wenn Sie Ollama auf einem Desktop und Logseq auf einem Laptop betreiben, brauchen Sie die LAN-IP des Desktops (`http://192.168.1.20:11434/v1`) plus Ollama gebunden an `0.0.0.0:11434`.',
          '**Die Joplin-Jarvis-Embedding-Datenbank auf einem kostenlosen WebDAV-Tier mit kleinem Kontingent synchronisieren.** Embedding-Datenbanken wachsen um ~150–250 MB pro 5.000 Notizen. Kostenlose Tarife (Dropbox 2 GB) erreichen das Limit bei Notizbuch-Skala schnell. Planen Sie für selbstgehosteten Joplin Server oder einen kostenpflichtigen Tarif, wenn Notizbücher ~5.000 Notizen überschreiten.',
          '**Keine einmalige Audit-Paketmitschnitt-Aufnahme durchführen.** Beide Plugins sind Open Source und korrekt konstruiert, aber der einzige definitive Beweis, dass Ihr Stack rein lokal ist, besteht darin, Wireshark / Little Snitch / Äquivalent während der KI-Nutzung laufen zu lassen und null ausgehenden Verkehr zu verifizieren. Tun Sie das einmal nach der Einrichtung, dokumentieren Sie das Ergebnis, gehen Sie weiter.',
          '**Versuchen, Logseq + logseq-copilot für Embedding-gestützten Abruf zu verwenden.** logseq-copilot hat 2026 keinen graphweiten Embedding-Index. Wenn Sie „frag meinen ganzen Graph" benötigen, wechseln Sie zu Joplin + Jarvis oder verwenden Sie Obsidian + Smart Connections. Logseq glänzt bei Outliner-nativer KI, nicht bei semantischer Suche.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Logseq — [logseq.com](https://logseq.com) und [github.com/logseq/logseq](https://github.com/logseq/logseq) (Open-Source-Outliner; AGPL 3.0).',
          'logseq-copilot — [github.com/logancyang/logseq-copilot](https://github.com/logancyang/logseq-copilot) (Open-Source-Logseq-Plugin; AGPL 3.0).',
          'Joplin — [joplinapp.org](https://joplinapp.org) und [github.com/laurent22/joplin](https://github.com/laurent22/joplin) (Open-Source-Notizbuch; AGPL 3.0).',
          'Jarvis (Joplin) — [github.com/alondmnt/joplin-plugin-jarvis](https://github.com/alondmnt/joplin-plugin-jarvis) (Open-Source-Joplin-Plugin; AGPL 3.0).',
          'Ollama — [ollama.com](https://ollama.com) und [github.com/ollama/ollama](https://github.com/ollama/ollama) (lokale LLM-Laufzeitumgebung; MIT).',
          'Notion-AI-Datenschutz und Datenverarbeitung — [notion.com/help/notion-ai-faqs](https://www.notion.com/help/notion-ai-faqs) (Anbieter-Dokumentation für den Vergleichskontext).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Kann Logseq Notion für KI-Nutzer ersetzen?',
            a: 'Ja, für Prosa-Seiten und Tagesjournal-Workflows. Installieren Sie logseq-copilot, richten Sie es auf Ollama, und Sie haben Chat, Zusammenfassung und vorlagenbasierte Generierung innerhalb von Logseq — ohne dass Daten Ihren Rechner verlassen. Die Lücke sind strukturierte Datenbanken: Notions Datenbankansichten (Projekt-Tracker, CRMs) haben kein sauberes Logseq-Pendant. Prosa-lastige Nutzer ersetzen Notion vollständig; datenbank-lastige Nutzer akzeptieren entweder manuelle Restrukturierung oder behalten spezifische Datenbanken in Notion (ohne KI), während sie Prosa zu Logseq verschieben.',
          },
          {
            q: 'Unterstützt Joplin lokale KI-Plugins?',
            a: 'Ja. Das empfohlene Plugin 2026 ist Jarvis, das Chat, Zusammenfassung und Embedding-gestützte semantische Suche über das Notizbuch hinweg bietet. Konfigurieren Sie Jarvis auf Ollama unter `http://localhost:11434/v1` für Chat und `http://localhost:11434/v1` mit `nomic-embed-text` für Embeddings. Andere Ollama-fähige Joplin-Plugins existieren, aber Jarvis wird am aktivsten gepflegt und ist am funktionsreichsten.',
          },
          {
            q: 'Welches hat die bessere Synchronisierung ohne Cloud — Logseq oder Joplin?',
            a: 'Joplin hat die breitere und ausgereiftere Cloud-freie Synchronisierungs-Story. Joplin unterstützt selbstgehosteten Joplin Server, WebDAV, Nextcloud sowie erstklassiges E2EE über jedem Backend. Logseq bietet eingebaute Git-Synchronisierung (hervorragend für Entwickler) und arbeitet mit Syncthing oder iCloud Drive, hat aber kein selbstgehostetes Pendant zu Joplin Server. Für Teams, die auditierbare On-Premises-Synchronisierung wollen, ist Joplin Server der bessere Pfad; für Entwickler, die Git-verfolgte Historie wollen, ist Logseqs Git-Synchronisierung der bessere Pfad.',
          },
          {
            q: 'Kann ich von Notion zu Logseq mit erhaltenen KI-Funktionen migrieren?',
            a: 'Die Migration verschiebt Inhalte, nicht das Notion-AI-Abonnement. Aus Notion als Markdown exportieren, in Logseq importieren, dann logseq-copilot installieren und mit Ollama konfigurieren — die KI-Schicht wird lokal neu aufgebaut. Logseq erhält Notions Block-Verschachtelung besser als Joplin, weil beide Tools listen-eingerückte Blöcke als Primitiv verwenden. Notion-AI-Funktionen (Auto-Fill, Smart Properties auf Datenbanken) haben keine direkten Logseq-Pendants — diese Workflows müssen mit logseq-copilot-Prompts oder Skripten neu aufgebaut werden.',
          },
          {
            q: 'Funktioniert Logseq vollständig offline?',
            a: 'Ja. Logseq ist eine lokale Desktop-App ohne erforderliche Cloud-Komponente. Der Graph ist ein Ordner aus Markdown-Dateien; die App liest und schreibt sie lokal. Netzwerkzugang wird nur für die Synchronisierung mit einem Remote benötigt (Git Push, Syncthing-Peer-Discovery, Logseq Sync) und für die Ausführung von logseq-copilot gegen einen Cloud-LLM-Anbieter — letzteres ist optional. Mit Ollama als LLM-Anbieter läuft der gesamte Stack offline.',
          },
          {
            q: 'Sind Joplin-KI-Plugins so ausgereift wie die von Obsidian?',
            a: 'Obsidian hat mehr KI-Plugins und mehr gleichzeitige Pflegende. Joplin hat weniger Plugins, aber Jarvis ist funktionsreich und wird aktiv gepflegt — es deckt Chat, Zusammenfassung und Embedding-gestützten Abruf in einem einzigen Plugin ab. Für die meisten Nutzer entspricht Jarvis der Kombination aus Obsidian Copilot + Smart Connections auf Joplins reinen Markdown-Notizbüchern oder übertrifft sie sogar; für Power-User, die Plugin-Vielfalt suchen (Vorlagen-Engines, Charakter-Chat, MOC-Generatoren), bietet Obsidian weiterhin mehr Optionen.',
          },
          {
            q: 'Welches eignet sich besser zum Tagesjournaling mit KI — Logseq oder Joplin?',
            a: 'Logseq. Das Tagesjournal ist ein eingebautes Primitiv in Logseq — jeder Tag erhält automatisch eine Journalseite, Blöcke werden erstklassig, und logseq-copilot-Ausgabe wird zu verschachtelten Blöcken unter dem Prompt. Tagesjournal-KI-Workflows (Tagesabschluss-Zusammenfassung, Wochenrückblick, Stimmungs-Tagging) wirken nativ. Joplin kann das mit Notizbüchern-pro-Monat und Jarvis-Prompts replizieren, aber die Reibung ist höher.',
          },
          {
            q: 'Kann ich denselben Vault auf mehreren Geräten nutzen?',
            a: 'Ja — beide Tools unterstützen Mehrgeräte-Nutzung über ihre Synchronisierungsschicht. Logseq: Git, Syncthing, iCloud Drive oder Logseq Sync. Joplin: Joplin Cloud, selbstgehosteter Joplin Server, WebDAV, Nextcloud, Dropbox oder OneDrive. Einschränkung: KI-Plugins laufen nur am Desktop. Der Vault-Inhalt wird auf Mobile synchronisiert, aber logseq-copilot und Jarvis laufen dort nicht. Planen Sie für Desktop-KI, Mobile-Erfassung.',
          },
          {
            q: 'Funktionieren KI-Plugins mit Joplin Mobile oder Logseq Mobile?',
            a: 'Nein — keines der Tools unterstützt 2026 Plugins auf Mobile. Logseq Mobile und Joplin Mobile sind Lese-/Schreibflächen für den synchronisierten Vault, aber die Plugin-Laufzeitumgebung (Node.js / Electron) existiert in den mobilen Apps nicht. KI-Funktionen (logseq-copilot, Jarvis) laufen nur am Desktop. Wenn mobile KI wichtig ist, sind die Alternativen Obsidian Mobile + LAN-Ollama oder Erfassung am Mobilgerät + Verarbeitung am Desktop.',
          },
          {
            q: 'Ist Open-Source-lokale-KI-Integration sicherer als Notion AI?',
            a: 'Ja, durch die Standardarchitektur. Notion AI sendet Notizinhalte per Design an OpenAI — das ist strukturell, keine Konfigurationsentscheidung. Logseq + logseq-copilot + Ollama und Joplin + Jarvis + Ollama senden nichts an Dritte, sofern Sie nicht ausdrücklich einen Cloud-LLM-Anbieter konfigurieren. Für DSGVO-pflichtige EU-Daten, Gesundheitswesen, Recht und Journalismus ist diese Unterscheidung relevant: Lokale Stacks haben keinen Auftragsverarbeiter, keine internationale Übermittlung, kein Unterauftragsverarbeiter-Risiko. Die Auditierbarkeit ist ebenfalls einfacher — eine einmalige Paketmitschnitt-Aufnahme beweist null ausgehenden Verkehr während der KI-Nutzung.',
          },
          {
            q: 'Muss ich bei der Verwendung von Logseq + logseq-copilot oder Joplin + Jarvis die DSGVO beachten?',
            a: 'Ja, aber die Compliance-Last wird durch die lokale Architektur deutlich reduziert. Da Notizinhalte den Rechner des Verantwortlichen niemals verlassen, entfallen DSGVO-Artikel 28 (Auftragsverarbeitungsverträge) und Artikel 44 (internationale Übermittlungen) für die KI-Schicht — es gibt schlicht keinen Auftragsverarbeiter und keine Übermittlung in ein Drittland. Im Vergleich zu Notion AI, das einen AVV mit Notion plus Standardvertragsklauseln für die OpenAI-Übermittlung erfordert, vereinfacht sich das DSGVO-Verzeichnis von Verarbeitungstätigkeiten erheblich. Für die DACH-Region erfüllen lokale Stacks den BSI-Grundschutz-Kataloge-Baustein „eigene IT" einfacher als Cloud-KI-Outsourcing-Bausteine. Halten Sie weiterhin Datenschutz-Folgenabschätzungen (Artikel 35) für sensible Notizinhalte vor, wo erforderlich.',
          },
          {
            q: 'Sind Logseq und Joplin für den deutschen Mittelstand geeignet?',
            a: 'Ja, beide eignen sich gut für den deutschen Mittelstand und österreichische / Schweizer KMU mit ähnlichen Anforderungen. Mittelständische Unternehmen profitieren von drei Aspekten: Erstens senken die AGPL-3.0-Lizenzen Beschaffungsbarrieren (keine Lizenzkosten, keine Vendor-Lock-in-Risiken), zweitens vereinfachen lokale KI-Plugins die BSI-Grundschutz-Vorgaben für IT-Sicherheitsverantwortliche (kein externes Cloud-Outsourcing zu prüfen), drittens lässt sich der selbstgehostete Joplin Server in vorhandene NAS-, VPS- oder On-Premises-Infrastruktur integrieren — typisch für mittelständische IT-Landschaften. Für regulierte Branchen (Steuerberater, Rechtsanwälte, Arztpraxen, Berater mit Mandantengeheimnissen) ist die Kombination lokale Verarbeitung + selbstgehostete Synchronisierung ein gangbarer Weg, der gegenüber Wirtschaftsprüfern und Datenschutzbeauftragten einfacher zu vertreten ist als SaaS-KI mit Drittland-Übermittlung.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Obsidian + lokales LLM: 5 Plugins, die Ihren Vault in ein zweites Gehirn verwandeln (2026)](/de/power-local-llm/local-llm-with-obsidian-2026) — Schwester-Artikel für Obsidian-Nutzer; die Power-User-Alternative, gegen die diese Leser typischerweise abwägen.',
          '[Lokale-LLM-Persönliche-Wissensbasis 2026](/de/power-local-llm/local-llm-personal-knowledge-base-2026) — breitere PKB-Architektur, in die Logseq und Joplin einspeisen; behandelt die RAG-Schicht, Erfassungs-Pipelines und 10K+-Item-Workflows.',
          '[Grammarly und Notion AI durch ein lokales LLM ersetzen (2026)](/de/power-local-llm/replace-grammarly-notion-ai-with-local) — angrenzender SaaS-Ersatz-Leitfaden, fokussiert speziell auf den Notion-AI-Ausstieg.',
          '[Zapier durch lokale KI-Agenten ersetzen: 5 Workflows, die /Monat sparen (2026)](/de/power-local-llm/replace-zapier-with-local-ai-agents) — angrenzender Produktivitäts-Stack-Ersatz für Leser, die SaaS-Abhängigkeiten konsolidieren.',
          '[Beste lokale LLMs in 2026](/de/local-llms/best-local-llms-2026) — Modell-Autorität für die Auswahl der Chat- und Embedding-Modelle hinter logseq-copilot und Jarvis.',
          '[Lokale-LLM-Software-Verzeichnis 2026](/de/power-local-llm/local-llm-software-directory-2026) — Verzeichnis-Einträge für Logseq, Joplin, Ollama, logseq-copilot und Jarvis mit Lizenzen und Links.',
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
    title: 'Logseq et Joplin avec LLM locaux : notes intelligentes sans synchronisation cloud (2026)',
    seoTitle: 'Logseq + Joplin avec LLM local : notes sans cloud 2026',
    intro:
      '[Logseq](https://logseq.com) et [Joplin](https://joplinapp.org) sont les deux applications de prise de notes open source qui se combinent proprement avec un LLM local en 2026 sans jamais nécessiter d\'aller-retour cloud. Logseq exécute le plugin logseq-copilot contre [Ollama](https://ollama.com) pour un chat natif outliner et de l\'IA dans le journal quotidien ; Joplin exécute le plugin Jarvis contre Ollama pour un chat conscient des notes, des résumés et une recherche basée sur les embeddings. Les deux sont plus respectueux du RGPD que Notion AI par architecture par défaut — Notion envoie le contenu des notes à OpenAI ; Logseq et Joplin n\'envoient rien sauf si vous le configurez ainsi. Le hic en 2026 est mobile : ni Logseq ni Joplin ne prennent en charge les plugins sur iOS ou Android, donc les fonctionnalités IA s\'exécutent uniquement sur ordinateur de bureau. Ce guide classe les deux outils selon la maturité des plugins IA, les chemins de synchronisation sans cloud, la compatibilité mobile et le chemin de migration depuis Notion, avec des étapes de configuration concrètes pour Ollama.',
    metaDescription:
      'Logseq + logseq-copilot vs Joplin + Jarvis sur Ollama : alternative privée et RGPD à Notion AI. Sync sans cloud, lacune mobile expliquée. 2026.',
    twitterDescription:
      'Notes open source + IA locale sans cloud : Logseq avec logseq-copilot, Joplin avec Jarvis, tous deux sur Ollama. Lacune mobile expliquée. Migration depuis Notion. RGPD-friendly par défaut.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'nomic-embed-text',
      'mxbai-embed-large',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16+ Go de mémoire unifiée)',
      'PC avec RTX 3060 12 Go ou RTX 4060 8 Go',
      'PC avec 16 Go de RAM (repli CPU uniquement)',
    ],
    audience:
      'Utilisateurs de notes open source, travailleurs du savoir soucieux de la vie privée, professionnels UE/DACH soumis au RGPD, transfuges de Notion AI et journaliers quotidiens souhaitant des fonctionnalités IA sans envoyer leurs notes à OpenAI ou Anthropic.',
    readTime: '14 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Logseq Joplin LLM local plugin',
    targetKeywords: [
      'logseq llm local',
      'joplin ia locale',
      'logseq copilot ollama',
      'joplin jarvis plugin',
      'notes open source ia confidentialité',
      'alternative notion ai rgpd',
    ],
    leadAnswerBlock:
      '**Pour la plupart des lecteurs en 2026, Logseq + logseq-copilot ou Joplin + Jarvis associés à Ollama est la bonne alternative privée à Notion AI.** Choisissez Logseq si vous vivez dans un workflow journal quotidien + outliner ; choisissez Joplin si vous voulez des notes Markdown pures avec une synchronisation chiffrée de bout en bout. Les deux se connectent à Ollama sur `http://localhost:11434/v1`, les deux prennent en charge le chat-avec-note-courante en standard, et les deux sont open source sous des licences permissives (Logseq AGPL 3.0, Joplin AGPL 3.0 — même famille). Aucun n\'envoie de contenu de note vers le cloud sauf si vous configurez explicitement un fournisseur cloud dans le plugin. La limite stricte en 2026 : ni l\'un ni l\'autre ne prend en charge les plugins sur iOS ou Android — les fonctionnalités IA sont exclusivement sur ordinateur de bureau ; le mobile devient une surface de capture manuelle que vous traitez avec l\'IA de retour sur ordinateur. Pour la migration depuis Notion AI, Logseq a le chemin d\'import le plus propre via l\'export Markdown natif de Notion ; l\'import Notion de Joplin est fonctionnel mais perd la structure au niveau des blocs.',
    quickAnswerTop: {
      fr: {
        question: 'Quelle combinaison de plugins Logseq ou Joplin convient le mieux à un LLM local privé en 2026 ?',
        answer:
          'Logseq + logseq-copilot ou Joplin + plugin Jarvis, tous deux pointés vers Ollama sur `http://localhost:11434/v1`. logseq-copilot ajoute des blocs de chat et des commandes slash dans Logseq ; Jarvis ajoute chat, résumé et Q&R basée sur les embeddings dans Joplin. Les deux sont des plugins open source sous AGPL, les deux sont locaux par défaut, et les deux prennent en charge Ollama nativement. Le modèle de chat recommandé en 2026 est Llama 3.2 3B (par défaut) ou Phi-4 Mini pour les systèmes à 8 Go de RAM. Pour la recherche basée sur les embeddings (Joplin Jarvis uniquement — Logseq n\'expose actuellement aucun plugin d\'embedding à l\'échelle du graphe en 2026), utilisez nomic-embed-text ou mxbai-embed-large. Prise en charge des plugins mobiles : indisponible sur les deux outils en 2026 — les fonctionnalités IA s\'exécutent uniquement sur ordinateur de bureau.',
        bullets: [
          'Logseq + logseq-copilot — blocs de chat par commande slash dans l\'outliner. Idéal pour les workflows journal quotidien et graphe.',
          'Joplin + plugin Jarvis — barre latérale de chat, résumé, recherche sémantique basée sur les embeddings. Idéal pour les notes Markdown pures avec sync robuste.',
          'Les deux plugins pointent vers Ollama via `http://localhost:11434/v1` — aucun appel cloud par défaut.',
          'Sync Logseq sans cloud : Git (intégré) ou sync de fichiers locale via Syncthing/iCloud Drive. Sync Joplin : Joplin Cloud chiffré de bout en bout, Joplin Server auto-hébergé, ou Nextcloud / WebDAV / Dropbox / OneDrive avec E2EE.',
          'Lacune des plugins mobiles (2026) : ni Logseq Mobile ni Joplin Mobile ne prend en charge les plugins. Les fonctionnalités IA sont uniquement sur bureau — le mobile pour la capture, le bureau pour le traitement.',
          'Migration Notion AI : Logseq a le chemin d\'import Markdown le plus propre ; Joplin perd la structure au niveau des blocs mais préserve le contenu. Les deux arrêtent immédiatement l\'envoi de données à OpenAI dès le passage.',
          'Modèles Ollama recommandés : chat — Llama 3.2 3B ou Phi-4 Mini ; embeddings (Joplin Jarvis uniquement) — nomic-embed-text ou mxbai-embed-large.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Aperçu rapide', anchor: '#quick-facts' },
      { label: 'Logseq ou Joplin : lequel choisir ?', anchor: '#which-tool' },
      { label: 'Tableau comparatif des outils', anchor: '#comparison-table' },
      { label: 'Plugins IA Logseq avec Ollama', anchor: '#logseq-ai' },
      { label: 'Plugins IA Joplin avec Ollama', anchor: '#joplin-ai' },
      { label: 'Le dossier confidentialité contre Notion AI', anchor: '#vs-notion' },
      { label: 'Sync sans cloud : Git, Syncthing, Joplin Server', anchor: '#sync' },
      { label: 'Lacune des plugins mobiles : ce qui marche et ce qui ne marche pas', anchor: '#mobile' },
      { label: 'RGPD et résidence des données UE', anchor: '#gdpr' },
      { label: 'Migrer de Notion AI vers Logseq ou Joplin', anchor: '#notion-migration' },
      { label: 'Workflows types : journal quotidien, notes de réunion, recherche', anchor: '#workflows' },
      { label: 'Erreurs fréquentes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Logseq + logseq-copilot est la combinaison recommandée pour les utilisateurs outliner / journal quotidien.** logseq-copilot ajoute des blocs de chat et des commandes slash dans Logseq, configuré contre Ollama sur `http://localhost:11434/v1`. Idéal pour les utilisateurs qui vivent déjà dans le modèle de page journal quotidien de Logseq.',
          '**Joplin + Jarvis est la combinaison recommandée pour les utilisateurs de notes Markdown pures.** Jarvis ajoute une barre latérale de chat, des commandes de résumé et une recherche sémantique basée sur les embeddings sur l\'ensemble du carnet. Idéal pour les utilisateurs qui veulent un carnet façon Notion avec une synchronisation chiffrée de bout en bout robuste.',
          '**Les deux outils sont open source sous AGPL 3.0** — la licence est permissive pour usage personnel et commercial ; la seule contrainte est la divulgation des sources si vous les modifiez et les hébergez publiquement.',
          '**La posture de confidentialité bat Notion AI par architecture.** Notion AI envoie le contenu des notes à OpenAI par conception ; Logseq et Joplin n\'envoient rien sauf si vous configurez explicitement un fournisseur cloud. Cette distinction est significative pour la santé, le droit, le journalisme et tout contexte régulé par le RGPD.',
          '**La lacune des plugins mobiles est la plus grande contrainte en 2026.** Ni Logseq Mobile ni Joplin Mobile ne prend en charge les plugins. Les fonctionnalités IA s\'exécutent uniquement sur bureau — le mobile devient une surface de capture (écrire des notes), et le traitement (résumé, chat, recherche) se fait plus tard sur bureau.',
          '**La sync sans cloud est simple, mais chaque outil prend une approche différente.** Logseq dispose d\'une sync Git intégrée et fonctionne proprement avec Syncthing ou iCloud Drive. Joplin propose Joplin Cloud chiffré de bout en bout, Joplin Server auto-hébergé, ou tout backend WebDAV / Nextcloud / Dropbox / OneDrive avec couche E2EE.',
          '**La migration depuis Notion AI est un aller simple que les deux outils gèrent.** Logseq importe l\'export Markdown de Notion avec une meilleure fidélité au niveau des blocs ; Joplin importe le contenu mais aplatit les blocs imbriqués. Une fois migré, aucune note ne quitte votre machine sauf si vous le décidez.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Aperçu rapide',
        items: [
          '**Outils traités :** Logseq (outliner, journal quotidien en premier) et Joplin (carnet Markdown pur). [Obsidian](https://obsidian.md) est mentionné pour le contexte — son guide dédié est lié à la fin.',
          '**Plugins IA principaux :** logseq-copilot pour Logseq ; Jarvis (et plugins Ollama-compatibles similaires) pour Joplin.',
          '**Backend LLM :** Ollama (recommandé) sur `http://localhost:11434/v1`, ou tout endpoint local compatible OpenAI ([LM Studio](https://lmstudio.ai), llama.cpp server, vLLM).',
          '**Modèles de chat recommandés :** Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B (systèmes 16 Go de RAM) ; Qwen3 1.7B (8 Go de RAM).',
          '**Modèles d\'embedding recommandés (Joplin Jarvis uniquement) :** nomic-embed-text (768-dim, rapide), mxbai-embed-large (1024-dim, plus précis).',
          '**Licences :** Logseq AGPL 3.0 ; Joplin AGPL 3.0 ; logseq-copilot AGPL 3.0 (même auteur que Copilot for Obsidian, Logan Yang) ; Jarvis (Joplin) AGPL 3.0.',
          '**Chemins de sync :** Logseq — Git intégré, Syncthing, iCloud Drive, Logseq Sync (payant). Joplin — Joplin Cloud (payant, E2EE), Joplin Server auto-hébergé, WebDAV, Nextcloud, Dropbox, OneDrive (tous prennent en charge E2EE).',
          '**Plugins mobiles :** non pris en charge sur l\'un ou l\'autre des outils en 2026 — IA uniquement sur bureau.',
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: 'Logseq ou Joplin : lequel choisir ?',
        content:
          '**Choisissez Logseq si votre workflow de notes est journal quotidien d\'abord ou en forme de graphe ; choisissez Joplin si vos notes sont des documents Markdown purs avec de forts besoins de sync.** Les deux outils ont des modèles mentaux différents — Logseq est un outliner avec des liens bidirectionnels et un journal quotidien comme surface de capture par défaut ; Joplin est un carnet de fichiers Markdown avec tags, recherche et sync chiffrée de bout en bout. L\'écosystème de plugins IA en 2026 reflète cela : logseq-copilot s\'intègre dans les blocs outliner ; Jarvis s\'intègre dans la barre latérale Joplin.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq + logseq-copilot convient aux workflows outliner / journal quotidien ; Joplin + Jarvis convient aux workflows de carnet Markdown pur avec sync chiffrée de bout en bout robuste.',
          },
          {
            type: 'plain-terms',
            text: 'Les deux outils sont des alternatives privées à Notion AI. Le choix dépend surtout de la façon dont vous écrivez les notes. Logseq traite les notes comme des puces imbriquées et vous donne une page de journal quotidien automatiquement — bon pour penser à voix haute, capturer avec horodatage et croiser les références en mode graphe. Joplin traite les notes comme des documents Markdown complets dans des carnets — bon pour l\'écriture longue, la documentation structurée et les appareils ayant besoin de sync chiffrée. Les deux fonctionnent avec un LLM local via Ollama, les deux sont open source, et les deux arrêtent d\'envoyer des données à des tiers dès que vous quittez Notion.',
          },
        ],
        decisionBlock: {
          title: 'Décision : Logseq ou Joplin ?',
          localIf: [
            'Vous écrivez un journal quotidien et voulez que l\'IA résume / regroupe / lie les jours → Logseq + logseq-copilot',
            'Vous voulez des backlinks en graphe et des blocs outliner avec chat en ligne → Logseq + logseq-copilot',
            'Vous écrivez des notes Markdown longues (recherche, documentation, brouillons) → Joplin + Jarvis',
            'Vous avez besoin de sync chiffrée de bout en bout entre appareils → Joplin (meilleure histoire E2EE)',
            'Vous voulez une recherche sémantique basée sur les embeddings sur tout le carnet → Joplin + Jarvis (Logseq n\'a pas d\'équivalent en 2026)',
            'Vous migrez depuis Notion et voulez la meilleure fidélité au niveau des blocs → Logseq',
          ],
          cloudIf: [
            'Vous avez besoin de fonctionnalités IA sur iOS ou Android (pas seulement la capture) → aucun des outils ne prend en charge les plugins sur mobile en 2026 ; envisagez Obsidian Mobile + Ollama LAN avec Tailscale',
            'Vous avez besoin de collaboration multi-utilisateurs en temps réel sur le même vault → Logseq comme Joplin sont mono-utilisateur par conception ; l\'édition collaborative n\'est pas dans leur modèle',
            'Vous avez besoin de la qualité GPT-5.5 sur chaque réponse de chat → équivalents cloud (la pile locale atteint ~70 % des capacités)',
          ],
          quick: [
            'Journal quotidien + outliner : Logseq + logseq-copilot',
            'Carnet Markdown pur + sync E2EE : Joplin + Jarvis',
            'Fonctionnalités IA mobiles : non réalisable en 2026 — capture sur mobile, traitement sur bureau',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Un schéma courant consiste à exécuter les deux : Logseq pour le journal quotidien et la capture rapide (tout horodaté), Joplin pour les notes de référence durables (longues, étiquetées, sync chiffrée). Les deux outils ne partagent pas de base de données, mais aucun n\'est lourd — exécuter les deux ajoute environ 200–400 Mo de RAM combinés. Utilisez Logseq pour « penser » et Joplin pour « savoir », avec le LLM local disponible dans les deux.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau comparatif des outils',
        content:
          '**Les quatre axes qui comptent le plus : profondeur des plugins IA, sync sans cloud, prise en charge des plugins mobiles et workflow le mieux adapté.** Obsidian est inclus comme référence — les lecteurs comparant les trois devraient également lire le guide Obsidian dédié lié à la fin.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq mène sur l\'IA native outliner et la sync Git ; Joplin mène sur la sync chiffrée de bout en bout et la recherche basée sur les embeddings ; Obsidian mène sur l\'étendue des plugins au prix de la sync payante et d\'une licence non OSI.',
          },
        ],
        columns: ['Outil', 'Plugins IA', 'Sync (sans cloud)', 'Mobile', 'Idéal pour'],
        rows: [
          { 'Outil': '[Logseq](https://logseq.com)', 'Plugins IA': 'logseq-copilot (blocs de chat, commandes slash), variantes du plugin GPT-3', 'Sync (sans cloud)': 'Git intégré, Syncthing, iCloud Drive, Logseq Sync (payant E2EE)', 'Mobile': 'App mobile disponible ; plugins non pris en charge sur mobile (2026)', 'Idéal pour': 'Workflow journal quotidien + outliner' },
          { 'Outil': '[Joplin](https://joplinapp.org)', 'Plugins IA': 'Jarvis (chat, résumé, Q&R basée sur les embeddings), intégrations [Ollama](https://ollama.com)-compatibles', 'Sync (sans cloud)': 'Joplin Cloud (payant E2EE), Joplin Server auto-hébergé, WebDAV, Nextcloud, Dropbox, OneDrive (tous compatibles E2EE)', 'Mobile': 'App mobile disponible ; plugins non pris en charge sur mobile (2026)', 'Idéal pour': 'Carnet Markdown + sync E2EE' },
          { 'Outil': '[Obsidian](https://obsidian.md) (référence)', 'Plugins IA': 'Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot', 'Sync (sans cloud)': 'Git, Syncthing, iCloud Drive, Obsidian Sync (payant E2EE)', 'Mobile': 'L\'app mobile prend en charge la plupart des plugins ; accès LAN à Ollama requis', 'Idéal pour': 'Power-users avec plugins payants / sync payante' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La colonne « Mobile » est le plus grand différenciateur de 2026. Obsidian Mobile exécute la plupart des plugins (y compris Smart Connections et Copilot) lorsque Ollama est joignable sur le LAN ou via Tailscale. Logseq Mobile et Joplin Mobile n\'exécutent aucun plugin — les fonctionnalités IA sont strictement sur bureau. Si l\'IA mobile compte, planifiez une capture-sur-mobile + traitement-sur-bureau, ou regardez Obsidian Mobile.',
          },
        ],
      },
      logseqAi: {
        id: 'logseq-ai',
        title: 'Plugins IA Logseq avec Ollama',
        content:
          '**Le plugin IA Logseq recommandé en 2026 est logseq-copilot — même auteur que Copilot for Obsidian, configuré pour pointer vers Ollama.** Il ajoute des blocs de chat (commande slash `/copilot`), de la réécriture en ligne et des prompts conscients du journal directement dans l\'outliner de Logseq. Logseq n\'a actuellement pas d\'équivalent à Smart Connections (index d\'embeddings à l\'échelle du vault), donc le lien sémantique à travers le graphe n\'est pas encore un problème résolu en 2026.',
        items: [
          '**Ce qu\'il fait :** blocs de chat via commandes slash, génération de contenu en ligne, prompts conscients du journal qui tirent la page active ou les blocs sélectionnés comme contexte.',
          '**Installation :** Paramètres → Plugins → Marketplace → rechercher « logseq-copilot » → Installer + Activer. Auteur : Logan Yang (même que Copilot for Obsidian).',
          '**Configuration pour Ollama :** Paramètres → logseq-copilot → API Provider → « Custom OpenAI » ou « Ollama » → URL de base API `http://localhost:11434/v1` → modèle `llama3.2:3b` (ou tout nom de modèle Ollama).',
          '**Commandes slash :** tapez `/copilot` dans n\'importe quel bloc pour démarrer un chat. La sortie apparaît comme blocs imbriqués sous le prompt — natif outliner, donc les réponses deviennent du contenu de plan de première classe.',
          '**Prompts basés sur la sélection :** sélectionner des blocs → exécuter un modèle de prompt personnalisé (« Résume ces points en trois puces ») → résultat ajouté sous la sélection.',
          '**Intégration journal quotidien :** pointer un modèle vers la page de journal quotidien → résumé de fin de journée, questions de revue hebdomadaire ou expansion des backlinks deviennent des actions à une touche.',
          '**Ce qu\'il NE fait PAS (2026) :** il n\'y a pas d\'index d\'embeddings à l\'échelle du graphe. Les backlinks Logseq restent explicites ; la découverte sémantique entre pages n\'est pas encore prise en charge par aucun plugin Logseq open source.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La sortie de logseq-copilot n\'est que des blocs — le même primitif que tout le reste dans Logseq. C\'est l\'avantage clé sur Obsidian : les réponses IA ne sont pas du texte flottant en barre latérale ; ce sont des nœuds de graphe que vous pouvez backlinker, étiqueter, interroger et rééditer. Utilisez intensivement `/copilot` pour la capture, puis refactorisez les blocs de réponse comme n\'importe quelle autre note.',
          },
        ],
      },
      joplinAi: {
        id: 'joplin-ai',
        title: 'Plugins IA Joplin avec Ollama',
        content:
          '**Le plugin IA Joplin recommandé en 2026 est Jarvis — il fournit chat, résumé et recherche sémantique basée sur les embeddings sur tout le carnet, le tout configurable pour utiliser Ollama.** Jarvis est l\'équivalent Joplin le plus proche de Smart Connections + Copilot for Obsidian combinés : un plugin, une configuration, deux jobs.',
        items: [
          '**Ce qu\'il fait :** barre latérale de chat, commande « Ask Jarvis » sur tout le carnet (récupération basée sur les embeddings), résumé de la note sélectionnée, génération de notes à partir de prompts, prompts personnalisés sur sélections.',
          '**Installation :** Outils → Options → Plugins → rechercher « Jarvis » → Installer + Activer. Auteur : Alon Bukai.',
          '**Configuration pour Ollama (chat) :** Options → Jarvis → Model Provider → « OpenAI » avec URL de base personnalisée → URL `http://localhost:11434/v1` → modèle `llama3.2:3b` → clé API toute chaîne non vide (Ollama l\'ignore).',
          '**Configuration pour Ollama (embeddings) :** Options → Jarvis → Notes Database → activer Database → Embedding Model → « OpenAI » avec URL de base personnalisée → URL `http://localhost:11434/v1` → modèle `nomic-embed-text`.',
          '**Indexation initiale :** Jarvis intègre chaque note dans la base de données lors de la première activation. Temps sur Mac M3 Pro avec nomic-embed-text : 1K notes ~3 min, 5K notes ~15 min, 10K notes ~35 min. La ré-intégration est incrémentale lors de l\'enregistrement.',
          '**Workflow « Ask Jarvis » :** Outils → Jarvis → Ask Jarvis → tapez une question → Jarvis récupère les notes pertinentes par similarité d\'embedding et envoie les chunks plus votre question au modèle de chat. Équivalent au QA de vault de Copilot for Obsidian.',
          '**Idéal pour :** utilisateurs qui veulent un seul plugin couvrant chat + récupération dans Joplin sans gérer deux plugins distincts.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Jarvis stocke sa base de données d\'embeddings à l\'intérieur de la base SQLite de Joplin. Le fichier de base de données croît de ~150–250 Mo par 5 000 notes intégrées avec nomic-embed-text. Si vous synchronisez le profil Joplin via Joplin Cloud ou WebDAV, la base d\'embeddings est incluse dans la sync — planifiez le coût de bande passante et de temps de sync. La base d\'embeddings elle-même est chiffrée en transit lorsque l\'E2EE de Joplin est utilisé.',
          },
        ],
      },
      vsNotion: {
        id: 'vs-notion',
        title: 'Le dossier confidentialité contre Notion AI',
        content:
          '**Notion AI envoie le contenu des notes à OpenAI par conception — c\'est l\'architecture, pas un choix de configuration.** Lorsque vous utilisez les fonctionnalités Notion AI sur une page, Notion expédie le contenu de la page aux serveurs OpenAI, OpenAI le traite, et la réponse revient via Notion. Les données sont régies par les politiques de confidentialité d\'OpenAI et de Notion, pas par votre système de fichiers local. Pour les utilisateurs en contexte régulé (santé, droit, conseil financier, journalisme, données UE couvertes par le RGPD), c\'est un problème structurel qu\'aucun paramètre ne corrige.',
        items: [
          '**Architecture Notion AI :** les notes quittent votre machine pour être traitées par OpenAI. Soumis aux conditions de traitement des données OpenAI Enterprise (meilleures que l\'API OpenAI standard), mais toujours en dehors de votre infrastructure.',
          '**Architecture Logseq + logseq-copilot :** Logseq s\'exécute en application locale, le plugin envoie les prompts à votre Ollama local, aucun contenu de note n\'atteint un tiers sauf si vous configurez explicitement un fournisseur cloud dans le plugin.',
          '**Architecture Joplin + Jarvis :** Joplin s\'exécute en application locale, Jarvis envoie les prompts à votre Ollama local, la génération d\'embeddings s\'exécute localement, aucun contenu de note n\'atteint un tiers sauf si vous configurez explicitement un fournisseur cloud dans Jarvis.',
          '**Résidence des données :** avec Logseq ou Joplin + Ollama, chaque octet de contenu de note reste sur votre machine. Avec Notion AI, le contenu des notes transite vers les serveurs OpenAI basés aux États-Unis quel que soit votre emplacement.',
          '**Piste d\'audit :** avec les LLM locaux, vous pouvez exécuter une capture de paquets (Wireshark, Little Snitch, etc.) une fois après installation et vérifier que les plugins ne font aucun appel sortant pendant l\'usage IA. Avec Notion AI, les appels sortants sont inhérents — il n\'y a rien à vérifier.',
          '**Risque sous-traitant :** Notion AI hérite de tous les sous-traitants d\'OpenAI (Microsoft Azure comme infrastructure principale, plus fournisseurs de support). Logseq et Joplin + Ollama n\'ont aucun sous-traitant pour la couche IA.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Le test le plus clair de « mon app de notes est-elle réellement privée ? » est de déconnecter le réseau et d\'essayer les fonctionnalités IA. Logseq + logseq-copilot + Ollama : fonctionne entièrement hors ligne. Joplin + Jarvis + Ollama : fonctionne entièrement hors ligne. Notion AI : retourne une erreur. Faites ce test une fois après configuration pour confirmer que votre pile fait ce que vous pensez.',
          },
        ],
      },
      sync: {
        id: 'sync',
        title: 'Sync sans cloud : Git, Syncthing, Joplin Server',
        content:
          '**Logseq comme Joplin disposent de plusieurs chemins de sync qui ne nécessitent jamais de confier le contenu des notes à un cloud tiers.** Le bon choix dépend de si vous voulez zéro configuration (sync payante), historique suivi par Git (compatible développeur) ou pair-à-pair (sans serveur).',
        items: [
          '**Logseq — sync Git intégrée :** Paramètres → Sync → activer auto-commit Git. Logseq commit le graphe vers un remote Git configuré selon un planning. Fonctionne avec GitHub / GitLab / Gitea auto-hébergé. Les commits Markdown purs rendent l\'historique lisible par les humains.',
          '**Logseq — Syncthing (pair-à-pair) :** installer Syncthing sur chaque appareil, le pointer vers le dossier du graphe Logseq. Chiffré de bout en bout, sans serveur central, sans tiers. Excellent pour la sync bureau-à-bureau ; fonctionne sur Logseq Mobile lorsque Syncthing-Fork (Android) ou Möbius Sync (iOS) maintient le dossier à jour.',
          '**Logseq — iCloud Drive :** garder le dossier du graphe dans iCloud Drive sur macOS / iOS. Chemin le plus propre sur appareils Apple ; les données sont chiffrées au repos par Apple mais Apple détient les clés (pas zero-knowledge).',
          '**Logseq Sync (payant E2EE) :** la sync chiffrée de bout en bout de l\'équipe Logseq. Compromis : payer (offre Pro incluant la sync, tarification variable — voir logseq.com), mais obtenir une E2EE multi-appareils sans configuration, mobile inclus.',
          '**Joplin — Joplin Cloud (payant E2EE) :** la sync hébergée de l\'équipe Joplin avec chiffrement de bout en bout. Gratuit pour de petits volumes de notes ; les offres payantes montent en charge. Hébergé en UE. Pratique et compatible audit.',
          '**Joplin — Joplin Server auto-hébergé :** exécuter l\'image Docker Joplin Server sur un NAS / VPS / serveur domestique. Chiffrement de bout en bout client à client ; le serveur stocke du chiffré. Meilleur chemin pour les organisations voulant la pleine propriété de l\'infrastructure de sync.',
          '**Joplin — WebDAV / Nextcloud / Dropbox / OneDrive :** Joplin prend en charge tout endpoint WebDAV, plus une prise en charge de première classe pour Nextcloud, Dropbox, OneDrive. Activez toujours l\'E2EE intégré de Joplin par-dessus — ces fournisseurs ne voient que du chiffré.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Joplin Server auto-hébergé est la réponse pour les organisations voulant une sync auditable sur site sans confiance dans un cloud tiers. Exécutez-le sur un petit VPS ou un serveur domestique, pointez tous les clients vers lui, activez l\'E2EE — le serveur ne contient que du chiffré, et vous contrôlez l\'hôte. C\'est nettement plus simple que d\'auto-héberger Notion (non officiellement pris en charge) ou l\'infrastructure Obsidian Sync.',
          },
        ],
      },
      mobile: {
        id: 'mobile',
        title: 'Lacune des plugins mobiles : ce qui marche et ce qui ne marche pas',
        content:
          '**Ni Logseq Mobile ni Joplin Mobile ne prend en charge les plugins en 2026 — c\'est la plus grande contrainte par rapport à Obsidian.** Les apps mobiles sont des surfaces fonctionnelles de capture et de lecture, mais logseq-copilot et Jarvis ne s\'exécutent que sur bureau. Tout workflow IA doit supposer que le mobile sert à la capture, le bureau au traitement.',
        items: [
          '**Logseq Mobile (iOS / Android) :** consulter, éditer et capturer des notes ; les backlinks et la vue graphe fonctionnent ; la sync fonctionne. Les plugins ne s\'exécutent pas — y compris logseq-copilot. Les fonctionnalités IA sont indisponibles sur mobile.',
          '**Joplin Mobile (iOS / Android) :** consulter, éditer et capturer des notes ; les tags et la recherche fonctionnent ; la sync fonctionne (E2EE inclus). Les plugins ne s\'exécutent pas — y compris Jarvis. Les fonctionnalités IA sont indisponibles sur mobile.',
          '**Schéma de contournement : capture sur mobile, traitement sur bureau.** Écrivez librement des notes sur mobile. Lorsque vous arrivez sur un bureau, exécutez logseq-copilot ou Jarvis pour résumer, étendre, lier ou interroger le contenu capturé.',
          '**Schéma de contournement : serveur domestique + bureau distant.** Exécutez logseq-copilot ou Jarvis sur un bureau chez vous, accédez à ce bureau via Tailscale + un bureau distant / tunnel SSH depuis le mobile lorsque l\'IA est nécessaire. Ajoute du coût de configuration ; rarement justifié pour les usages occasionnels.',
          '**Schéma de contournement : passer à Obsidian Mobile pour les usages IA.** Obsidian Mobile exécute la plupart des plugins. Si l\'IA mobile est critique, c\'est la réponse la plus simple — au prix d\'un changement d\'outil.',
          '**Pourquoi la lacune existe :** Logseq comme Joplin exécutent leurs moteurs de plugins comme contextes Node.js / Electron uniquement bureau. Les apps mobiles sont natives (Logseq Capacitor, Joplin React Native) et n\'embarquent pas le runtime de plugin. Combler la lacune nécessite de réécrire l\'architecture de plugin — aucune équipe ne l\'a signalé pour 2026.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Si votre cas d\'usage IA est mobile-d\'abord (par exemple, dicter des notes en déplacement et vouloir que l\'IA les résume immédiatement), Logseq et Joplin ne sont pas actuellement les bons outils — Obsidian Mobile + Ollama LAN l\'est. Si votre cas d\'usage IA est bureau-d\'abord avec capture mobile (le schéma le plus courant), Logseq comme Joplin fonctionnent bien, et la lacune mobile est une gêne mineure plutôt qu\'un blocage.',
          },
        ],
      },
      gdpr: {
        id: 'gdpr',
        title: 'RGPD et résidence des données UE',
        content:
          '**Pour les utilisateurs UE et DACH, Logseq + logseq-copilot + Ollama et Joplin + Jarvis + Ollama sont plus respectueux du RGPD que Notion AI par architecture par défaut.** Le contenu des notes ne quitte jamais la machine du responsable de traitement, donc les flux de données que l\'article 28 du RGPD (contrats de sous-traitance), l\'article 44 (transferts internationaux) et les catalogues BSI-Grundschutz exigent de documenter pour les outils SaaS n\'existent simplement pas pour la pile locale. La CNIL recommande explicitement le traitement IA local lorsqu\'on manipule des données professionnelles sensibles (financières, médicales, juridiques) — la pile Logseq ou Joplin avec Ollama répond directement à cette recommandation.',
        items: [
          '**Article 28 (contrats de sous-traitance) :** avec Notion AI, Notion + OpenAI sont sous-traitants et exigent un Contrat de Sous-Traitance des Données (DPA) plus des Clauses Contractuelles Types pour le transfert international vers OpenAI. Avec Logseq / Joplin + Ollama, il n\'y a pas de sous-traitant tiers — juste le responsable de traitement exécutant un logiciel local.',
          '**Article 44 (transferts internationaux) :** Notion AI expédie les données aux serveurs OpenAI basés aux États-Unis ; c\'est un « transfert international » Schrems II nécessitant des CCT et une Évaluation d\'Impact sur les Transferts. Le traitement Ollama local élimine entièrement le transfert.',
          '**Catalogues BSI-Grundschutz (DACH) :** les directives fédérales allemandes de sécurité IT considèrent les services IA cloud comme de l\'externalisation nécessitant une évaluation formelle des risques. Le traitement IA local relève de la base « IT interne » beaucoup plus simple.',
          '**Droit à l\'effacement (article 17) :** avec Notion AI, supprimer le contenu de note de votre compte ne supprime pas nécessairement de la pipeline d\'entraînement ou des logs d\'OpenAI (selon les conditions entreprise). Avec Ollama local, la suppression est une suppression de système de fichiers — vérifiable et complète.',
          '**Auditabilité :** les piles locales sont plus faciles à auditer. Exécutez une capture de paquets une fois, vérifiez aucun trafic sortant pendant l\'usage IA, documentez le résultat. Les services IA cloud nécessitent de s\'appuyer sur les rapports SOC 2 / ISO 27001 du fournisseur.',
          '**Hébergement compatible UE (lorsque la sync implique un serveur) :** Joplin Cloud est hébergé en UE ; Joplin Server auto-hébergé peut l\'être sur infrastructure UE (Hetzner, OVH, IONOS). Logseq Sync est opéré par Logseq Inc. (basé aux États-Unis) — pour une stricte résidence UE, préférez Git ou Syncthing pour la sync Logseq.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour les organisations ayant besoin d\'une histoire défendable de fonctionnalités IA sous le RGPD, la pile LLM-local-sur-Logseq-ou-Joplin est la réponse la plus simple. La discussion DPA passe de « nous utilisons Notion + OpenAI comme sous-traitants avec ces clauses » à « nous utilisons un logiciel local s\'exécutant sur le terminal du responsable, sans sous-traitant impliqué ». Le travail de l\'équipe conformité devient bien plus facile.',
          },
        ],
      },
      notionMigration: {
        id: 'notion-migration',
        title: 'Migrer de Notion AI vers Logseq ou Joplin',
        content:
          '**Notion offre un export Markdown natif que Logseq comme Joplin peuvent importer — Logseq préserve mieux la structure au niveau des blocs, Joplin préserve le contenu mais aplatit les blocs imbriqués.** Quoi qu\'il en soit, la migration est un export-import unique, pas une sync continue, et elle arrête immédiatement le flux de données vers OpenAI.',
        numberedItems: [
          '**Exporter depuis Notion :** Paramètres → Paramètres & membres → Paramètres → « Exporter tout le contenu de l\'espace de travail » → choisir « Markdown & CSV » → télécharger le ZIP. L\'export contient un fichier .md par page plus des dossiers pour les pages imbriquées.',
          '**Décompresser et nettoyer :** l\'export de Notion utilise de longs suffixes d\'ID de page dans les noms de fichiers (par ex. `My Page 1f8b2a3c4d5e6f7g8h9i.md`). Exécutez un script de renommage rapide pour supprimer les ID si les noms de fichiers comptent pour votre nouvel outil.',
          '**Chemin d\'import Logseq :** ouvrir Logseq → Fichier → Nouveau Graphe → pointer vers un nouveau dossier → copier les fichiers Notion décompressés dans le dossier `pages/` du graphe. Logseq les détecte ; les backlinks (style Notion `[[Page]]`) survivent quand les fichiers correspondent. L\'imbrication au niveau des blocs est préservée car Notion comme Logseq utilisent l\'indentation de blocs en style liste.',
          '**Chemin d\'import Joplin :** Outils → Importer → « MD - Markdown directory » → sélectionner le dossier Notion décompressé. Joplin crée une note par fichier .md à l\'intérieur d\'une structure de carnet reflétant la hiérarchie de pages de Notion. L\'imbrication au niveau des blocs s\'aplatit — les listes à bascule imbriquées de Notion deviennent des listes Markdown plates.',
          '**Vérifier la migration :** vérifier 10–20 pages au hasard — confirmer que contenu, liens et tags ont survécu. Si vous avez beaucoup utilisé les bases de données Notion, l\'export CSV est séparé ; Logseq comme Joplin le traitent comme un fichier plat plutôt qu\'une base structurée, donc planifiez une certaine restructuration manuelle.',
          '**Arrêter Notion AI :** désactiver l\'abonnement Notion AI dans les paramètres du compte. Le travail IA futur passe par logseq-copilot ou Jarvis sur votre machine locale.',
          '**Vérifier la posture de confidentialité :** déconnecter le réseau → exécuter les fonctionnalités IA dans votre nouvel outil → confirmer qu\'elles fonctionnent. C\'est le test qui prouve que la migration a atteint son objectif.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si vous avez utilisé les bases de données Notion comme données structurées (trackers de projet, CRM, etc.), la migration est plus complexe que pour les pages prose. Envisagez de garder ces bases spécifiques dans Notion (sans IA) tout en déplaçant le contenu prose vers Logseq ou Joplin — ou migrez les bases vers le RAG structuré d\'[AnythingLLM](https://anythingllm.com), où le LLM local peut les interroger comme des documents.',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: 'Workflows types : journal quotidien, notes de réunion, recherche',
        content:
          '**Trois workflows concrets qui montrent la pile locale en action.** Les deux premiers sont centrés Logseq (outliner / journal natif) ; le troisième est centré Joplin (notes plus longues).',
        items: [
          '**Résumé du journal quotidien Logseq :** fin de journée → ouvrir la page de journal du jour → `/copilot Résume cette journée en trois puces axées sur décisions, blocages et actions de demain` → la réponse apparaît comme blocs imbriqués. Sauvegardez le prompt comme modèle logseq-copilot pour des exécutions à une touche.',
          '**Revue hebdomadaire Logseq :** dimanche soir → ouvrir une page fraîche nommée `Revue Semaine 19` → `/copilot Résume les 7 dernières pages de journal quotidien en 3 puces par catégorie : progrès, blocages, thèmes` → logseq-copilot récupère les pages de journal récentes via le mécanisme de lien de page. Le résultat devient la graine de la planification de la semaine suivante.',
          '**Expansion des notes de réunion Joplin :** pendant la réunion, capturer des puces brutes dans une note → après la réunion, tout sélectionner → Outils → Jarvis → « Étendre et structurer ces notes » → la sortie remplace ou s\'ajoute en dessous. Sauvegardez le prompt comme préréglage Jarvis.',
          '**Q&R recherche Joplin :** ajouter 50–500 notes sources (articles, papiers, clips web) dans un seul carnet → activer Jarvis Notes Database → attendre l\'embedding → Outils → Jarvis → « Ask Jarvis » → poser des questions cross-sources (« Quelles sources discutent de X ? »). Équivalent au QA de vault d\'Obsidian Copilot mais dans Joplin.',
          '**Logseq + Joplin combinés :** capturer dans Logseq (rapide, journal-natif) → curer les éléments durables dans Joplin (référence permanente). Exécutez l\'IA sur chaque outil pour ses forces natives — chat rapide / génération de plan dans Logseq, Q&R recherche basée sur les embeddings dans Joplin.',
          '**Capture mobile, traitement bureau :** pendant la journée, capturez librement des notes sur Logseq Mobile ou Joplin Mobile (sans IA). En fin de journée sur bureau, exécutez logseq-copilot ou Jarvis pour résumer, lier et interroger — l\'IA rattrape ce que vous avez capturé hors ligne.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Le schéma « capture mobile, traitement bureau » est la bonne façon de penser Logseq + Joplin en 2026 étant donné la lacune des plugins mobiles. Ce n\'est pas un contournement — il correspond à la façon dont le travail de la connaissance se passe réellement. Le mobile est pour les entrées (vous avez une idée, vous la capturez). Le bureau est pour la synthèse (vous traitez le matériel capturé). Le LLM local rejoint au moment de la synthèse, exactement là où sa qualité compte le plus.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs fréquentes',
        items: [
          '**Configurer logseq-copilot ou Jarvis avec un fournisseur cloud par accident.** Les deux plugins offrent « OpenAI » comme fournisseur par défaut. La configuration purement locale exige de basculer vers une URL de base personnalisée pointant vers `http://localhost:11434/v1`. L\'oublier signifie que le plugin envoie silencieusement les notes à OpenAI — exactement le mode de défaillance que vous avez quitté. Vérifiez avec une capture de paquets.',
          '**S\'attendre à la prise en charge des plugins sur mobile.** Ni Logseq Mobile ni Joplin Mobile n\'exécute de plugins en 2026. Si vous supposez que l\'IA fonctionne partout où vos notes vont, vous heurterez le mur la première fois que vous essaierez de résumer dans le train. Planifiez la capture-sur-mobile, traitement-sur-bureau dès le premier jour.',
          '**Pointer le plugin vers `http://localhost:11434/v1` depuis une autre machine.** Localhost est par machine. Si vous exécutez Ollama sur un bureau et Logseq sur un portable, vous avez besoin de l\'IP LAN du bureau (`http://192.168.1.20:11434/v1`) plus Ollama lié à `0.0.0.0:11434`.',
          '**Synchroniser la base d\'embeddings Joplin Jarvis vers un palier WebDAV gratuit avec petit quota.** Les bases d\'embeddings croissent de ~150–250 Mo par 5 000 notes. Les paliers gratuits (Dropbox 2 Go) atteignent vite la limite à l\'échelle de carnet. Planifiez Joplin Server auto-hébergé ou un palier payant lorsque les carnets dépassent ~5 000 notes.',
          '**Ne pas exécuter une capture de paquets d\'audit une fois.** Les deux plugins sont open source et bien comportés, mais la seule preuve définitive que votre pile est purement locale est d\'exécuter Wireshark / Little Snitch / équivalent pendant l\'usage IA et de vérifier aucun trafic sortant. Faites-le une fois après configuration, documentez le résultat, passez à autre chose.',
          '**Essayer d\'utiliser Logseq + logseq-copilot pour la récupération basée sur les embeddings.** logseq-copilot n\'a pas d\'index d\'embeddings à l\'échelle du graphe en 2026. Si vous avez besoin de « interroger tout mon graphe », passez à Joplin + Jarvis ou utilisez Obsidian + Smart Connections. Logseq excelle à l\'IA native outliner, pas à la recherche sémantique.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Logseq — [logseq.com](https://logseq.com) et [github.com/logseq/logseq](https://github.com/logseq/logseq) (outliner open source ; AGPL 3.0).',
          'logseq-copilot — [github.com/logancyang/logseq-copilot](https://github.com/logancyang/logseq-copilot) (plugin Logseq open source ; AGPL 3.0).',
          'Joplin — [joplinapp.org](https://joplinapp.org) et [github.com/laurent22/joplin](https://github.com/laurent22/joplin) (carnet open source ; AGPL 3.0).',
          'Jarvis (Joplin) — [github.com/alondmnt/joplin-plugin-jarvis](https://github.com/alondmnt/joplin-plugin-jarvis) (plugin Joplin open source ; AGPL 3.0).',
          'Ollama — [ollama.com](https://ollama.com) et [github.com/ollama/ollama](https://github.com/ollama/ollama) (runtime LLM local ; MIT).',
          'Confidentialité et traitement des données Notion AI — [notion.com/help/notion-ai-faqs](https://www.notion.com/help/notion-ai-faqs) (documentation fournisseur pour le contexte de comparaison).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Logseq peut-il remplacer Notion pour les utilisateurs IA ?',
            a: 'Oui pour les pages prose et les workflows journal quotidien. Installez logseq-copilot, pointez-le vers Ollama, et vous avez chat, résumé et génération basée sur des modèles dans Logseq — sans données quittant votre machine. La lacune : les bases de données structurées. Les vues de base de Notion (trackers de projet, CRM) n\'ont pas d\'équivalent Logseq propre. Les utilisateurs prose remplacent Notion entièrement ; les utilisateurs orientés base de données acceptent une restructuration manuelle ou gardent des bases spécifiques dans Notion (sans IA) tout en déplaçant le prose vers Logseq.',
          },
          {
            q: 'Joplin prend-il en charge les plugins IA locaux ?',
            a: 'Oui. Le plugin recommandé en 2026 est Jarvis, qui fournit chat, résumé et recherche sémantique basée sur les embeddings sur tout le carnet. Configurez Jarvis pour utiliser Ollama sur `http://localhost:11434/v1` pour le chat et `http://localhost:11434/v1` avec `nomic-embed-text` pour les embeddings. D\'autres plugins Joplin Ollama-compatibles existent mais Jarvis est le plus activement maintenu et le plus complet.',
          },
          {
            q: 'Lequel a la meilleure sync sans cloud — Logseq ou Joplin ?',
            a: 'Joplin a l\'histoire de sync sans cloud la plus large et la plus aboutie. Joplin prend en charge Joplin Server auto-hébergé, WebDAV, Nextcloud, plus E2EE de première classe par-dessus tout backend. Logseq a la sync Git intégrée (excellente pour les développeurs) et fonctionne avec Syncthing ou iCloud Drive, mais manque d\'un équivalent auto-hébergé à Joplin Server. Pour les équipes voulant une sync sur site auditable, Joplin Server est le meilleur chemin ; pour les développeurs voulant un historique suivi par Git, la sync Git de Logseq est le meilleur chemin.',
          },
          {
            q: 'Puis-je migrer de Notion vers Logseq avec les fonctionnalités IA intactes ?',
            a: 'La migration déplace le contenu, pas l\'abonnement Notion AI. Exportez depuis Notion en Markdown, importez dans Logseq, puis installez logseq-copilot et configurez-le avec Ollama — la couche IA est reconstruite localement. Logseq préserve mieux l\'imbrication au niveau des blocs de Notion que Joplin, car les deux outils utilisent les blocs indentés en liste comme primitif. Les fonctionnalités Notion AI (auto-remplissage, propriétés intelligentes sur les bases) n\'ont pas d\'équivalents directs dans Logseq — ces workflows doivent être reconstruits avec des prompts logseq-copilot ou des scripts.',
          },
          {
            q: 'Logseq fonctionne-t-il entièrement hors ligne ?',
            a: 'Oui. Logseq est une app de bureau locale sans composant cloud requis. Le graphe est un dossier de fichiers Markdown ; l\'app les lit et les écrit localement. L\'accès réseau n\'est nécessaire que pour la sync vers un remote (push Git, découverte de pairs Syncthing, Logseq Sync) et pour exécuter logseq-copilot contre un fournisseur LLM cloud — ce dernier est optionnel. Avec Ollama comme fournisseur LLM, toute la pile s\'exécute hors ligne.',
          },
          {
            q: 'Les plugins IA Joplin sont-ils aussi matures que ceux d\'Obsidian ?',
            a: 'Obsidian a plus de plugins IA et plus de mainteneurs simultanés. Joplin a moins de plugins mais Jarvis est complet et activement maintenu — couvrant chat, résumé et récupération basée sur les embeddings dans un seul plugin. Pour la plupart des utilisateurs, Jarvis égale ou dépasse la combinaison Obsidian Copilot + Smart Connections sur les carnets Markdown purs de Joplin ; pour les power-users voulant la variété de plugins (moteurs de modèle, chat de personnage, générateurs MOC), Obsidian a encore plus d\'options.',
          },
          {
            q: 'Lequel est meilleur pour le journal quotidien avec IA — Logseq ou Joplin ?',
            a: 'Logseq. Le journal quotidien est un primitif intégré dans Logseq — chaque jour reçoit automatiquement une page de journal, les blocs deviennent de première classe, et la sortie de logseq-copilot devient des blocs imbriqués sous le prompt. Les workflows IA de journal quotidien (résumé de fin de journée, revue hebdomadaire, étiquetage d\'humeur) sont natifs. Joplin peut répliquer cela avec des carnets-par-mois et des prompts Jarvis, mais la friction est plus élevée.',
          },
          {
            q: 'Puis-je utiliser le même vault sur plusieurs appareils ?',
            a: 'Oui — les deux outils prennent en charge l\'usage multi-appareils via leur couche de sync. Logseq : Git, Syncthing, iCloud Drive ou Logseq Sync. Joplin : Joplin Cloud, Joplin Server auto-hébergé, WebDAV, Nextcloud, Dropbox ou OneDrive. Réserve : les plugins IA ne s\'exécutent que sur bureau. Le contenu du vault se synchronise sur mobile, mais logseq-copilot et Jarvis ne s\'y exécutent pas. Planifiez IA-bureau, capture-mobile.',
          },
          {
            q: 'Les plugins IA fonctionnent-ils avec Joplin Mobile ou Logseq Mobile ?',
            a: 'Non — aucun des outils ne prend en charge les plugins sur mobile en 2026. Logseq Mobile et Joplin Mobile sont des surfaces lecture/écriture pour le vault synchronisé, mais le runtime de plugin (Node.js / Electron) n\'existe pas sur les apps mobiles. Les fonctionnalités IA (logseq-copilot, Jarvis) ne s\'exécutent que sur bureau. Si l\'IA mobile compte, les alternatives sont Obsidian Mobile + Ollama LAN, ou capture-sur-mobile + traitement-sur-bureau.',
          },
          {
            q: 'L\'intégration IA locale open source est-elle plus sûre que Notion AI ?',
            a: 'Oui par architecture par défaut. Notion AI envoie le contenu des notes à OpenAI par conception — c\'est structurel, pas un choix de configuration. Logseq + logseq-copilot + Ollama et Joplin + Jarvis + Ollama n\'envoient rien à un tiers sauf si vous configurez explicitement un fournisseur LLM cloud. Pour les données UE couvertes par le RGPD, la santé, le droit et le journalisme, cette distinction est significative : les piles locales n\'ont pas de sous-traitant, pas de transfert international, pas de risque sous-traitant. L\'auditabilité est aussi plus simple — une capture de paquets unique prouve aucun trafic sortant pendant l\'usage IA.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Obsidian + LLM local : 5 plugins qui transforment votre vault en deuxième cerveau (2026)](/fr/power-local-llm/local-llm-with-obsidian-2026) — article frère pour les utilisateurs Obsidian ; l\'alternative power-user contre laquelle ces lecteurs choisissent typiquement.',
          '[Base de connaissances personnelle LLM local 2026](/fr/power-local-llm/local-llm-personal-knowledge-base-2026) — architecture PKB plus large dans laquelle Logseq et Joplin alimentent ; couvre la couche RAG, les pipelines de capture et les workflows 10K+ items.',
          '[Remplacer Grammarly et Notion AI par un LLM local (2026)](/fr/power-local-llm/replace-grammarly-notion-ai-with-local) — guide adjacent de remplacement SaaS axé spécifiquement sur le chemin de sortie de Notion AI.',
          '[Remplacer Zapier par des agents IA locaux : 5 workflows qui économisent /mois (2026)](/fr/power-local-llm/replace-zapier-with-local-ai-agents) — remplacement adjacent de pile productivité pour les lecteurs consolidant les dépendances SaaS.',
          '[Meilleurs LLM locaux en 2026](/fr/local-llms/best-local-llms-2026) — autorité de modèle pour choisir les modèles de chat et d\'embedding derrière logseq-copilot et Jarvis.',
          '[Annuaire logiciels LLM local 2026](/fr/power-local-llm/local-llm-software-directory-2026) — entrées d\'annuaire pour Logseq, Joplin, Ollama, logseq-copilot et Jarvis avec licences et liens.',
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
    title: 'Logseq と Joplin でローカル LLM：クラウド同期なしのスマートノート（2026）',
    seoTitle: 'Logseq + Joplin ローカルLLM：クラウドなしノート 2026',
    intro:
      '[Logseq](https://logseq.com) と [Joplin](https://joplinapp.org) は、2026年にローカル LLM とクリーンに統合でき、クラウド往復が不要な2つのオープンソースのノートアプリです。Logseq は logseq-copilot プラグインを [Ollama](https://ollama.com) に対して実行し、アウトライナーネイティブなチャットと日々のジャーナル AI を提供します。Joplin は Jarvis プラグインを Ollama に対して実行し、ノート対応チャット、要約、埋め込みベースの検索を提供します。両者ともデフォルトアーキテクチャの観点から Notion AI より日本の APPI（個人情報保護法）への適合性が高い構成です — Notion はノート内容を OpenAI に送信しますが、Logseq と Joplin は設定しない限り何も送信しません。2026年の落とし穴はモバイル：Logseq も Joplin も iOS や Android でプラグインをサポートしていないため、AI 機能はデスクトップでのみ動作します。本ガイドでは両ツールを AI プラグインの成熟度、クラウドなし同期、モバイル互換性、Notion からの移行パスで評価し、Ollama 用の具体的な設定手順を示します。',
    metaDescription:
      'Logseq + logseq-copilot vs Joplin + Jarvis（Ollama 上）：プライベートな Notion AI 代替。クラウド不要同期、APPI適合、モバイル制約。2026年版。',
    twitterDescription:
      'オープンソースノート + クラウドなしローカル AI：Logseq + logseq-copilot、Joplin + Jarvis（Ollama 上）。モバイルプラグイン制約を解説。Notion 移行パス。APPI フレンドリー。',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'nomic-embed-text',
      'mxbai-embed-large',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4（16GB 以上のユニファイドメモリ）',
      'RTX 3060 12GB または RTX 4060 8GB 搭載 PC',
      '16GB RAM の PC（CPU のみフォールバック）',
    ],
    audience:
      'オープンソースノートユーザー、プライバシー重視のナレッジワーカー、日本の APPI に基づくコンプライアンス要件のあるエンタープライズ、Notion AI 移行検討者、ノートを OpenAI や Anthropic に送信せずに AI 機能を利用したいデイリージャーナル利用者向け。',
    readTime: '14分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Logseq Joplin ローカルLLM プラグイン',
    targetKeywords: [
      'logseq ローカル llm',
      'joplin ローカル ai',
      'logseq copilot ollama',
      'joplin jarvis plugin',
      'オープンソース ノート ai プライバシー',
      'notion ai 代替 appi',
    ],
    leadAnswerBlock:
      '**2026年、ほとんどの読者にとって Logseq + logseq-copilot または Joplin + Jarvis を Ollama と組み合わせるのが、Notion AI の正しいプライベート代替です。** デイリージャーナル + アウトライナーワークフローで生活している場合は Logseq を選択してください。エンドツーエンド暗号化同期付きのプレーンな Markdown ノートが欲しい場合は Joplin を選択してください。両者とも `http://localhost:11434/v1` で Ollama に接続し、両者とも現在のノートとのチャットを標準でサポートし、両者とも寛容なライセンス下のオープンソース（Logseq AGPL 3.0、Joplin AGPL 3.0 — 同じ系統）です。プラグイン内で明示的にクラウドプロバイダを設定しない限り、どちらもノート内容をクラウドに送信しません。2026年の厳しい制限：iOS や Android でプラグインをサポートしているツールはありません — AI 機能はデスクトップ専用です。モバイルは、デスクトップに戻ってから AI で処理するための手動キャプチャ面になります。Notion AI からの移行については、Logseq が Notion ネイティブの Markdown エクスポート経由でよりクリーンなインポートパスを持っています。Joplin の Notion インポートは機能しますが、ブロックレベルの構造を失います。',
    quickAnswerTop: {
      ja: {
        question: '2026年、プライベートなローカル LLM に最適な Logseq または Joplin プラグインの組み合わせは何ですか？',
        answer:
          'Logseq + logseq-copilot または Joplin + Jarvis プラグイン、両者とも `http://localhost:11434/v1` の Ollama を指します。logseq-copilot は Logseq 内にチャットブロックとスラッシュコマンドを追加します。Jarvis は Joplin 内にチャット、要約、埋め込みベースの Q&A を追加します。両者とも AGPL のオープンソースプラグイン、両者ともデフォルトでローカルのみ、両者とも Ollama をネイティブにサポートします。2026年の推奨チャットモデルは Llama 3.2 3B（デフォルト）または 8GB RAM システムには Phi-4 Mini です。埋め込みベース検索には（Joplin Jarvis のみ — Logseq は2026年時点でグラフ全体の埋め込みプラグインを公開していません）、nomic-embed-text または mxbai-embed-large を使用してください。モバイルプラグインサポート：2026年時点でどちらのツールでも利用不可 — AI 機能はデスクトップでのみ動作します。',
        bullets: [
          'Logseq + logseq-copilot — アウトライナー内のスラッシュコマンドによるチャットブロック。デイリージャーナルおよびグラフワークフローに最適。',
          'Joplin + Jarvis プラグイン — チャットサイドバー、要約、埋め込みベースのセマンティック検索。強力な同期付きプレーン Markdown ノートに最適。',
          '両プラグインとも `http://localhost:11434/v1` 経由で Ollama を指します — デフォルトでクラウド呼び出しなし。',
          'Logseq のクラウドなし同期：Git（組み込み）または Syncthing / iCloud Drive 経由のローカルファイル同期。Joplin の同期：エンドツーエンド暗号化された Joplin Cloud、自己ホスト型 Joplin Server、または E2EE 付きの Nextcloud / WebDAV / Dropbox / OneDrive。',
          'モバイルプラグイン制約（2026）：Logseq Mobile も Joplin Mobile もプラグインをサポートしていません。AI 機能はデスクトップ専用 — モバイルはキャプチャ用、デスクトップは処理用。',
          'Notion AI 移行：Logseq はよりクリーンな Markdown インポートパス。Joplin はブロック構造を失いますが内容は保持。両者とも切り替え時点で OpenAI へのデータ送信を即停止。',
          '推奨 Ollama モデル：チャット — Llama 3.2 3B または Phi-4 Mini。埋め込み（Joplin Jarvis のみ）— nomic-embed-text または mxbai-embed-large。',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: 'Logseq か Joplin か：どちらを選ぶべきか', anchor: '#which-tool' },
      { label: 'ツール比較表', anchor: '#comparison-table' },
      { label: 'Ollama と動作する Logseq AI プラグイン', anchor: '#logseq-ai' },
      { label: 'Ollama と動作する Joplin AI プラグイン', anchor: '#joplin-ai' },
      { label: 'Notion AI に対するプライバシーの論点', anchor: '#vs-notion' },
      { label: 'クラウドなし同期：Git、Syncthing、Joplin Server', anchor: '#sync' },
      { label: 'モバイルプラグインの制約：何が動き、何が動かないか', anchor: '#mobile' },
      { label: 'AI ガバナンスとデータ主権', anchor: '#gdpr' },
      { label: 'Notion AI から Logseq または Joplin への移行', anchor: '#notion-migration' },
      { label: 'ワークフロー例：デイリージャーナル、ミーティングノート、リサーチ', anchor: '#workflows' },
      { label: 'よくある失敗', anchor: '#common-mistakes' },
      { label: '出典', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Logseq + logseq-copilot は、アウトライナー / デイリージャーナルユーザーへの推奨構成。** logseq-copilot は Logseq 内にチャットブロックとスラッシュコマンドを追加し、`http://localhost:11434/v1` の Ollama に対して設定します。すでに Logseq のデイリージャーナルページモデルで生活しているユーザーに最適。',
          '**Joplin + Jarvis は、プレーン Markdown ノートユーザーへの推奨構成。** Jarvis は Joplin 内にチャットサイドバー、要約コマンド、ノートブック全体への埋め込みベースのセマンティック検索を追加します。強力なエンドツーエンド暗号化同期付きの Notion 風ノートブックが欲しいユーザーに最適。',
          '**両ツールとも AGPL 3.0 のオープンソース。** 個人および商用利用に寛容なライセンス。唯一の制約は、変更して公開ホストする場合のソース開示要件のみ。',
          '**プライバシー姿勢はアーキテクチャ的に Notion AI を上回ります。** Notion AI は設計上ノート内容を OpenAI に送信します。Logseq と Joplin は、明示的にクラウドプロバイダを設定しない限り何も送信しません。医療、法務、ジャーナリズム、APPI 規制下の文脈で意味のある差です。',
          '**モバイルプラグイン制約は、2026年の最大の制限。** Logseq Mobile も Joplin Mobile もプラグインをサポートしません。AI 機能はデスクトップでのみ動作 — モバイルはキャプチャ面（ノートを書く）、処理（要約、チャット、検索）は後でデスクトップで実施。',
          '**クラウドなし同期はシンプルですが、各ツールが異なるアプローチを取ります。** Logseq は組み込み Git 同期があり、Syncthing や iCloud Drive とクリーンに動作します。Joplin はエンドツーエンド暗号化された Joplin Cloud、自己ホスト型 Joplin Server、または E2EE を重ねた WebDAV / Nextcloud / Dropbox / OneDrive バックエンドを提供します。',
          '**Notion AI からの移行は、両ツールが処理する一方向の旅。** Logseq は Notion の Markdown エクスポートを、ブロックレベルの忠実度を保ったままインポートします。Joplin は内容をインポートしますが、ネストされたブロックを平坦化します。移行後、選択しない限りノートはマシンを離れません。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**対象ツール：** Logseq（アウトライナー、デイリージャーナル中心）と Joplin（プレーン Markdown ノートブック）。[Obsidian](https://obsidian.md) は文脈用に言及 — 専用ガイドは末尾でリンク。',
          '**主要 AI プラグイン：** Logseq 用は logseq-copilot。Joplin 用は Jarvis（および同様の Ollama 対応プラグイン）。',
          '**LLM バックエンド：** `http://localhost:11434/v1` の Ollama（推奨）、または OpenAI 互換のローカルエンドポイント（[LM Studio](https://lmstudio.ai)、llama.cpp server、vLLM）。',
          '**推奨チャットモデル：** Llama 3.2 3B、Phi-4 Mini、Gemma 3 4B（16GB RAM システム）。Qwen3 1.7B（8GB RAM）。',
          '**推奨埋め込みモデル（Joplin Jarvis のみ）：** nomic-embed-text（768次元、高速）、mxbai-embed-large（1024次元、より精度高）。',
          '**ライセンス：** Logseq AGPL 3.0。Joplin AGPL 3.0。logseq-copilot AGPL 3.0（Copilot for Obsidian と同じ作者、Logan Yang）。Jarvis（Joplin）AGPL 3.0。',
          '**同期パス：** Logseq — 組み込み Git、Syncthing、iCloud Drive、Logseq Sync（有料）。Joplin — Joplin Cloud（有料、E2EE）、自己ホスト型 Joplin Server、WebDAV、Nextcloud、Dropbox、OneDrive（全て E2EE 対応）。',
          '**モバイルプラグイン：** 2026年時点でどちらのツールでもサポートなし — AI はデスクトップ専用。',
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: 'Logseq か Joplin か：どちらを選ぶべきか',
        content:
          '**ノートワークフローがデイリージャーナル中心またはグラフ型なら Logseq を選択。ノートがプレーン Markdown ドキュメントで強い同期ニーズがあるなら Joplin を選択。** 2つのツールは異なるメンタルモデルを持ちます — Logseq は双方向リンクとデフォルトキャプチャ面としてのデイリージャーナルを持つアウトライナー。Joplin はタグ、検索、エンドツーエンド暗号化同期を持つ Markdown ファイルのノートブック。2026年の AI プラグインエコシステムはこれを反映：logseq-copilot はアウトライナーブロック内に収まり、Jarvis は Joplin サイドバー内に収まります。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq + logseq-copilot はアウトライナー / デイリージャーナルワークフローに適し、Joplin + Jarvis は強力なエンドツーエンド暗号化同期付きのプレーン Markdown ノートブックワークフローに適しています。',
          },
          {
            type: 'plain-terms',
            text: 'このセクションでは両ツールを Notion AI のプライベート代替として位置づけます。選択は主にノートの書き方次第。Logseq はノートをネストされた箇条書きとして扱い、デイリージャーナルページを自動で提供します — 思考の公開、タイムスタンプ付きキャプチャ、グラフ型のクロスリファレンスに適します。Joplin はノートをノートブック内の完全な Markdown ドキュメントとして扱います — 長文の執筆、構造化されたドキュメント、暗号化同期が必要なデバイスに適します。両者とも Ollama 経由でローカル LLM と動作し、両者ともオープンソースで、両者とも Notion から切り替えた瞬間に第三者へのデータ送信を停止します。',
          },
        ],
        decisionBlock: {
          title: '決定：Logseq か Joplin か',
          localIf: [
            'デイリージャーナルを書き、AI に日々の要約 / クラスタリング / リンクをさせたい → Logseq + logseq-copilot',
            'グラフ型バックリンクとインラインチャット付きアウトライナーブロックが欲しい → Logseq + logseq-copilot',
            '長文の Markdown ノート（リサーチ、ドキュメント、下書き）を書く → Joplin + Jarvis',
            'デバイス間でエンドツーエンド暗号化同期が必要 → Joplin（E2EE ストーリーが優れる）',
            'ノートブック全体に対する埋め込みベースのセマンティック検索が欲しい → Joplin + Jarvis（Logseq には2026年時点で同等品なし）',
            'Notion から移行し、ブロックレベルの最もクリーンな忠実度が欲しい → Logseq',
          ],
          cloudIf: [
            'iOS や Android で AI 機能が必要（キャプチャだけでなく） → 2026年時点でどちらのツールもモバイルでプラグインをサポートしません。Tailscale 経由の Obsidian Mobile + LAN Ollama を検討',
            '同じ vault での実時間マルチユーザー協業が必要 → Logseq も Joplin も設計上シングルユーザー。協業編集はモデルにない',
            'すべてのチャット応答に GPT-5.5 品質が必要 → クラウド版（ローカルスタックは約70%の能力）',
          ],
          quick: [
            'デイリージャーナル + アウトライナー：Logseq + logseq-copilot',
            'プレーン Markdown ノートブック + E2EE 同期：Joplin + Jarvis',
            'モバイル AI 機能：2026年実用不可 — モバイルでキャプチャ、デスクトップで処理',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '一般的なパターンは両方を実行すること：Logseq でデイリージャーナルと高速キャプチャ（全てタイムスタンプ付き）、Joplin で恒久参照ノート（長文、タグ付き、暗号化同期）。2つのツールはデータベースを共有しませんが、どちらも重くなく — 両方実行しても RAM 使用量は合計約 200–400 MB 増加するのみ。Logseq を「考える」用、Joplin を「知識」用に使い、両方でローカル LLM を利用可能にします。',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'ツール比較表',
        content:
          '**最も重要な4軸：AI プラグインの深さ、クラウドなし同期、モバイルプラグインサポート、最適ワークフロー。** Obsidian は参照として含まれます — 3つすべてを比較する読者は、末尾でリンクされる Obsidian の専用ガイドも読むべきです。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq はアウトライナーネイティブ AI と Git 同期でリード。Joplin はエンドツーエンド暗号化同期と埋め込みベース検索でリード。Obsidian は有料同期と非 OSI ライセンスを代償にプラグインの幅でリード。',
          },
        ],
        columns: ['ツール', 'AI プラグイン', '同期（クラウドなし）', 'モバイル', '最適な用途'],
        rows: [
          { 'ツール': '[Logseq](https://logseq.com)', 'AI プラグイン': 'logseq-copilot（チャットブロック、スラッシュコマンド）、GPT-3 プラグイン亜種', '同期（クラウドなし）': '組み込み Git、Syncthing、iCloud Drive、Logseq Sync（有料 E2EE）', 'モバイル': 'モバイルアプリあり。モバイルではプラグイン未サポート（2026）', '最適な用途': 'デイリージャーナル + アウトライナーワークフロー' },
          { 'ツール': '[Joplin](https://joplinapp.org)', 'AI プラグイン': 'Jarvis（チャット、要約、埋め込みベース Q&A）、[Ollama](https://ollama.com) 対応統合', '同期（クラウドなし）': 'Joplin Cloud（有料 E2EE）、自己ホスト型 Joplin Server、WebDAV、Nextcloud、Dropbox、OneDrive（全て E2EE 対応可能）', 'モバイル': 'モバイルアプリあり。モバイルではプラグイン未サポート（2026）', '最適な用途': 'Markdown ノートブック + E2EE 同期' },
          { 'ツール': '[Obsidian](https://obsidian.md)（参照）', 'AI プラグイン': 'Smart Connections、Copilot、Text Generator、Local GPT、BMO Chatbot', '同期（クラウドなし）': 'Git、Syncthing、iCloud Drive、Obsidian Sync（有料 E2EE）', 'モバイル': 'モバイルアプリはほとんどのプラグインをサポート。Ollama への LAN アクセスが必要', '最適な用途': '有料プラグイン / 有料同期を使うパワーユーザー' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'モバイルプラグイン列が2026年最大の差別化要因です。Obsidian Mobile は Ollama が LAN または Tailscale 経由で到達可能な場合、ほとんどのプラグイン（Smart Connections や Copilot を含む）を実行します。Logseq Mobile と Joplin Mobile はプラグインを一切実行しません — AI 機能は厳密にデスクトップのみ。モバイル AI が重要なら、モバイルキャプチャ + デスクトップ処理を計画するか、Obsidian Mobile を検討してください。',
          },
        ],
      },
      logseqAi: {
        id: 'logseq-ai',
        title: 'Ollama と動作する Logseq AI プラグイン',
        content:
          '**2026年の推奨 Logseq AI プラグインは logseq-copilot です — Copilot for Obsidian と同じ作者、Ollama を指すように設定されます。** Logseq のアウトライナー内に直接、チャットブロック（`/copilot` スラッシュコマンド）、インラインリライト、ジャーナル対応プロンプトを追加します。Logseq は2026年時点で Smart Connections（vault 全体の埋め込みインデックス）に相当するものを持たないため、グラフ全体のセマンティックリンクはまだ解決された問題ではありません。',
        items: [
          '**機能：** スラッシュコマンドによるチャットブロック、インラインコンテンツ生成、アクティブページまたは選択ブロックを文脈として取り込むジャーナル対応プロンプト。',
          '**インストール：** Settings → Plugins → Marketplace → 「logseq-copilot」を検索 → Install + Enable。作者：Logan Yang（Copilot for Obsidian と同じ）。',
          '**Ollama 用の設定：** Settings → logseq-copilot → API Provider → 「Custom OpenAI」または「Ollama」→ API base URL `http://localhost:11434/v1` → モデル `llama3.2:3b`（または任意の Ollama モデル名）。',
          '**スラッシュコマンド：** 任意のブロックで `/copilot` を入力してチャットを開始。出力はプロンプトの下にネストされたブロックとして表示 — アウトライナーネイティブなので、応答が第一級のアウトラインコンテンツになります。',
          '**選択ベースのプロンプト：** ブロックを選択 → カスタムプロンプトテンプレートを実行（「これを3つの箇条書きに要約して」）→ 結果は選択の下に追加されます。',
          '**デイリージャーナル統合：** テンプレートをデイリージャーナルページに向ける → 終日要約、週次レビュー質問、バックリンク展開がワンキーストロークアクションになります。',
          '**2026年時点で動作しないこと：** グラフ全体の埋め込みインデックスはありません。Logseq のバックリンクは明示的なまま。ページ間のセマンティック発見は、現時点でどのオープンソース Logseq プラグインでもサポートされていません。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'logseq-copilot の出力は単なるブロック — Logseq の他のすべてのものと同じプリミティブです。これが Obsidian に対する主な利点：AI 応答は浮遊するサイドバーテキストではなく、バックリンク、タグ付け、クエリ、再編集可能なグラフノードです。`/copilot` をキャプチャに積極的に使用し、応答ブロックを他のノートと同じようにリファクタしてください。',
          },
        ],
      },
      joplinAi: {
        id: 'joplin-ai',
        title: 'Ollama と動作する Joplin AI プラグイン',
        content:
          '**2026年の推奨 Joplin AI プラグインは Jarvis です — チャット、要約、ノートブック全体への埋め込みベースのセマンティック検索を提供し、すべて Ollama を使うように設定可能。** Jarvis は Smart Connections + Copilot for Obsidian の組み合わせに最も近い Joplin 版：1プラグイン、1設定、2機能。',
        items: [
          '**機能：** チャットサイドバー、ノートブック全体への「Ask Jarvis」コマンド（埋め込みベースの検索）、選択ノートの要約、プロンプトからノート生成、選択へのカスタムプロンプト。',
          '**インストール：** Tools → Options → Plugins → 「Jarvis」を検索 → Install + Enable。作者：Alon Bukai。',
          '**Ollama 用の設定（チャット）：** Options → Jarvis → Model Provider → 「OpenAI」+ カスタム base URL → URL `http://localhost:11434/v1` → モデル `llama3.2:3b` → API key は任意の空でない文字列（Ollama は無視します）。',
          '**Ollama 用の設定（埋め込み）：** Options → Jarvis → Notes Database → Database を有効化 → Embedding Model → 「OpenAI」+ カスタム base URL → URL `http://localhost:11434/v1` → モデル `nomic-embed-text`。',
          '**初期インデックス作成：** Jarvis は初回有効化時にデータベース内のすべてのノートを埋め込みます。Mac M3 Pro での nomic-embed-text の時間：1K ノート約3分、5K ノート約15分、10K ノート約35分。保存時の再埋め込みはインクリメンタル。',
          '**「Ask Jarvis」ワークフロー：** Tools → Jarvis → Ask Jarvis → 質問を入力 → Jarvis が埋め込み類似度で関連ノートを検索し、チャンクと質問をチャットモデルに送信。Copilot for Obsidian の vault QA に相当。',
          '**最適な用途：** 2つの別プラグインを管理せず、Joplin 内でチャット + 検索をカバーする単一プラグインが欲しいユーザー。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Jarvis は埋め込みデータベースを Joplin の SQLite データベース内に保存します。データベースファイルは nomic-embed-text で埋め込んだ5,000ノートあたり約150–250 MB 成長します。Joplin プロファイルを Joplin Cloud または WebDAV 経由で同期する場合、埋め込みデータベースは同期に含まれます — 帯域幅と同期時間のコストを計画してください。埋め込みデータベース自体は、Joplin の E2EE 使用時には転送中に暗号化されます。',
          },
        ],
      },
      vsNotion: {
        id: 'vs-notion',
        title: 'Notion AI に対するプライバシーの論点',
        content:
          '**Notion AI は設計上ノート内容を OpenAI に送信します — これはアーキテクチャであり、設定の選択ではありません。** ページで Notion AI 機能を使用すると、Notion がページコンテンツを OpenAI サーバーに送信し、OpenAI が処理し、応答が Notion 経由で返ります。データは OpenAI と Notion のプライバシーポリシーに従い、あなたのローカルファイルシステムには従いません。規制された文脈のユーザー（医療、法務、金融アドバイス、ジャーナリズム、APPI 対象データ）にとって、これは設定では修正できない構造的問題です。',
        items: [
          '**Notion AI のアーキテクチャ：** ノートがマシンを離れて OpenAI で処理されます。OpenAI Enterprise のデータ取扱条件下（標準 OpenAI API より良好）ですが、依然としてあなたのインフラ外。',
          '**Logseq + logseq-copilot のアーキテクチャ：** Logseq はローカルアプリとして動作し、プラグインはローカル Ollama にプロンプトを送信。プラグイン内でクラウドプロバイダを明示的に設定しない限り、ノート内容が第三者に到達することはありません。',
          '**Joplin + Jarvis のアーキテクチャ：** Joplin はローカルアプリとして動作し、Jarvis はローカル Ollama にプロンプトを送信。埋め込み生成もローカル。Jarvis 内でクラウドプロバイダを明示的に設定しない限り、ノート内容が第三者に到達することはありません。',
          '**データ主権：** Logseq または Joplin + Ollama では、ノート内容の全バイトがマシン上に留まります。Notion AI では、所在地に関わらず、ノート内容が米国の OpenAI サーバーを経由します。',
          '**監査証跡：** ローカル LLM では、インストール後にパケットキャプチャ（Wireshark、Little Snitch 等）を一度実行し、AI 使用中にプラグインがアウトバウンド通信ゼロであることを検証できます。Notion AI ではアウトバウンド通信が本質的に発生 — 検証する対象がありません。',
          '**副処理者リスク：** Notion AI は OpenAI のすべての副処理者（主要インフラとして Microsoft Azure、加えてサポートベンダー）を継承します。Logseq と Joplin + Ollama は、AI 層に副処理者がゼロ。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '「ノートアプリが実際にプライベートか？」の最も明確なテストは、ネットワークを切断して AI 機能を試すことです。Logseq + logseq-copilot + Ollama：完全オフライン動作。Joplin + Jarvis + Ollama：完全オフライン動作。Notion AI：エラーを返します。セットアップ後にこのテストを一度実行して、スタックが期待通りに動作することを確認してください。',
          },
        ],
      },
      sync: {
        id: 'sync',
        title: 'クラウドなし同期：Git、Syncthing、Joplin Server',
        content:
          '**Logseq と Joplin の両者とも、ノート内容を第三者クラウドに預ける必要のない複数の同期パスを持ちます。** 正しい選択は、ゼロ設定（有料同期）、Git 追跡履歴（開発者向け）、ピアツーピア（サーバーなし）のどれを望むかに依存します。',
        items: [
          '**Logseq — 組み込み Git 同期：** Settings → Sync → Git auto-commit を有効化。Logseq はスケジュールで設定された Git リモートにグラフをコミット。GitHub / GitLab / 自己ホスト型 Gitea で動作。プレーン Markdown コミットにより、履歴が人間に読みやすくなります。',
          '**Logseq — Syncthing（ピアツーピア）：** 各デバイスに Syncthing をインストールし、Logseq グラフフォルダを指します。エンドツーエンド暗号化、中央サーバーなし、第三者なし。デスクトップ間同期に最適。Syncthing-Fork（Android）または Möbius Sync（iOS）がフォルダを最新に保つ場合、Logseq Mobile でも動作。',
          '**Logseq — iCloud Drive：** macOS / iOS で iCloud Drive 内にグラフフォルダを保持。Apple デバイスでの最もクリーンなパス。データは Apple によって保管時暗号化されますが、Apple がキーを保持（ゼロ知識ではない）。',
          '**Logseq Sync（有料 E2EE）：** Logseq チームのエンドツーエンド暗号化同期。トレードオフ：有料（同期込みの Pro プラン、価格は変動 — logseq.com を参照）ですが、モバイルを含むデバイス間で設定不要の E2EE を取得。',
          '**Joplin — Joplin Cloud（有料 E2EE）：** Joplin チームのエンドツーエンド暗号化付きホスト型同期。少ないノート数では無料。有料プランでスケール。EU でホスト。便利で監査向き。',
          '**Joplin — 自己ホスト型 Joplin Server：** NAS / VPS / ホームサーバー上で Joplin Server Docker イメージを実行。クライアント間でエンドツーエンド暗号化、サーバーは暗号文を保存。同期インフラの完全所有を望む組織への最適パス。',
          '**Joplin — WebDAV / Nextcloud / Dropbox / OneDrive：** Joplin は任意の WebDAV エンドポイントをサポート、加えて Nextcloud、Dropbox、OneDrive を第一級サポート。常に Joplin の組み込み E2EE を上に有効化 — これらのプロバイダは暗号文のみを見ます。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '自己ホスト型 Joplin Server は、第三者クラウドを信頼せずに監査可能なオンプレミス同期を望む組織への答えです。小さな VPS またはホームサーバーで実行し、すべてのクライアントを指し、E2EE を有効化 — サーバーは暗号文のみを保持し、あなたがホストを制御します。これは Notion の自己ホスト（公式にサポートされていない）や Obsidian Sync インフラより大幅に容易です。',
          },
        ],
      },
      mobile: {
        id: 'mobile',
        title: 'モバイルプラグインの制約：何が動き、何が動かないか',
        content:
          '**Logseq Mobile も Joplin Mobile も2026年にプラグインをサポートしていません — これは Obsidian と比較して最大の制約です。** モバイルアプリは機能的なキャプチャと読書面ですが、logseq-copilot と Jarvis はデスクトップでのみ動作します。AI ワークフローは、モバイルをキャプチャ用、デスクトップを処理用と仮定する必要があります。',
        items: [
          '**Logseq Mobile（iOS / Android）：** ノートの閲覧、編集、キャプチャ。バックリンクとグラフビューが動作。同期が動作。プラグインは動作しません — logseq-copilot を含む。AI 機能はモバイルで利用不可。',
          '**Joplin Mobile（iOS / Android）：** ノートの閲覧、編集、キャプチャ。タグと検索が動作。同期が動作（E2EE 含む）。プラグインは動作しません — Jarvis を含む。AI 機能はモバイルで利用不可。',
          '**回避策パターン：モバイルでキャプチャ、デスクトップで処理。** モバイルで自由にノートを書く。デスクトップに到達したら、logseq-copilot または Jarvis を実行してキャプチャしたコンテンツを要約、拡張、リンク、クエリ。',
          '**回避策パターン：ホームサーバー + リモートデスクトップ。** 自宅のデスクトップで logseq-copilot または Jarvis を実行し、AI が必要なときに Tailscale + リモートデスクトップ / SSH トンネル経由でモバイルからアクセス。設定コストが追加されます。カジュアルユーザーには稀にしか割に合いません。',
          '**回避策パターン：AI ユースケース用に Obsidian Mobile に切り替える。** Obsidian Mobile はほとんどのプラグインを実行。モバイル AI が重要なら最もシンプルな答え — ツール切り替えのコストで。',
          '**ギャップが存在する理由：** Logseq と Joplin の両者ともプラグインエンジンをデスクトップ専用の Node.js / Electron 文脈で実行しています。モバイルアプリはネイティブ（Logseq Capacitor、Joplin React Native）でプラグインランタイムを組み込んでいません。ギャップを除去するにはプラグインアーキテクチャの書き換えが必要 — どちらのチームも2026年に向けてこれを示唆していません。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'AI ユースケースがモバイル優先（例：移動中にノートを口述し、すぐに AI に要約してほしい）なら、Logseq と Joplin は現在適切なツールではありません — Obsidian Mobile + LAN Ollama が適切。AI ユースケースがデスクトップ優先でモバイルキャプチャ（より一般的なパターン）なら、Logseq と Joplin は両方とも良く動作し、モバイルの制約は阻害要因ではなく軽微な不便です。',
          },
        ],
      },
      gdpr: {
        id: 'gdpr',
        title: 'AI ガバナンスとデータ主権',
        content:
          '**日本のエンタープライズおよび規制業界のユーザーにとって、Logseq + logseq-copilot + Ollama と Joplin + Jarvis + Ollama は、METI の AI ガバナンスガイドライン2024 に整合する数少ないアーキテクチャの一つです。** ノート内容が責任者のマシンを離れることがないため、クラウド AI 利用時に必要となる委託先管理、データ越境制御、副処理者リスクの議論が、ローカルスタックでは発生しません。このセクションでは、日本固有のコンプライアンス文脈から始め、東アジアおよび APAC、エンタープライズセクター、技術監査の順に整理します。',
        items: [
          '**METI AI ガバナンスガイドライン2024（日本）：** AI システムのデータフローの追跡可能性が求められます。ローカル推論はデータが内部ネットワーク内に留まるため、最も追跡しやすいパターン。エンタープライズ導入時、追加コンプライアンス資料は最小限で済みます。',
          '**APPI（個人情報保護法）：** 第三者提供および委託に関する厳格な要件があります。ローカル LLM 処理は第三者提供にも委託にも該当しないため、これらの要件が AI 層では発生しません。Notion AI を使用する場合、Notion + OpenAI が委託先となり、それぞれに対する確認・契約が必要です。',
          '**データ主権・東アジア：** 日本と韓国の双方とも、機密企業データのクラウド AI 処理に関する規制が強化されつつあります。ローカル LLM は、データ越境のリスクを完全に回避します。',
          '**APAC コンプライアンスパターン：** シンガポール、台湾、香港の金融・医療・法務セクターは、データ越境制限のため多くの SaaS AI サービスを採用できません。Logseq / Joplin + Ollama は、これらの制約下で機能する数少ない構成です。',
          '**規制業界（金融・医療・法務）：** 日本の金融機関、医療機関、法律事務所は、顧客機密データの第三者送信に厳しい制約があります。ローカル LLM スタックは、これらの業界での AI 導入を実現可能にし、内部監査・外部監査の双方で説明しやすい構成です。',
          '**削除の検証可能性：** Notion AI では、ノート内容のアカウントからの削除が必ずしも OpenAI のトレーニングパイプラインやログから削除されるとは限りません（エンタープライズ条件次第）。ローカル Ollama では、削除はファイルシステム削除 — 検証可能かつ完全。',
          '**監査性：** ローカルスタックは監査が容易。Wireshark 等のパケットキャプチャを一度実行し、AI 使用中のアウトバウンド通信がゼロであることを確認・記録します。クラウド AI サービスでは、ベンダーの SOC 2 / ISO 27001 レポートに依存する必要があります。',
          '**日本国内ホスティング（同期サーバーが必要な場合）：** 自己ホスト型 Joplin Server は、AWS Tokyo、Sakura Internet、IDC Frontier、Z.com 等の日本国内インフラ上で実行可能。データ主権が厳しく要求される場合、Logseq には Git または Syncthing が推奨されます（Logseq Sync は米国運営のため）。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '弁解可能な AI 機能ストーリーを必要とする日本のエンタープライズにとって、Logseq または Joplin 上のローカル LLM スタックが最もシンプルな答えです。委託の議論は「Notion + OpenAI を副処理者として使用、これらの条項で」から「責任者のエンドポイントで動作するローカルソフトウェアを使用、処理者は介在せず」に変わります。コンプライアンスチームの作業は格段に楽になります。',
          },
        ],
      },
      notionMigration: {
        id: 'notion-migration',
        title: 'Notion AI から Logseq または Joplin への移行',
        content:
          '**Notion はネイティブの Markdown エクスポートを提供し、Logseq と Joplin の両者がインポート可能です — Logseq はブロックレベルの構造をよりよく保ち、Joplin は内容を保つがネストされたブロックを平坦化します。** いずれの場合も、移行は一度きりのエクスポート・インポートであり、継続的な同期ではありません。OpenAI へのデータ送信を即座に停止します。',
        numberedItems: [
          '**Notion からエクスポート：** Settings → Settings & members → Settings → 「Export all workspace content」→ 「Markdown & CSV」を選択 → ZIP をダウンロード。エクスポートは1ページあたり1つの .md ファイルと、ネストされたページ用のフォルダを含みます。',
          '**解凍してクリーンアップ：** Notion のエクスポートはファイル名に長いページ ID サフィックスを使用（例：`My Page 1f8b2a3c4d5e6f7g8h9i.md`）。新ツールでファイル名が重要なら、ID を削除する簡単なリネームスクリプトを実行します。',
          '**Logseq インポートパス：** Logseq を開く → File → New Graph → 新しいフォルダを指す → 解凍した Notion ファイルをグラフの `pages/` フォルダにコピー。Logseq が検出します。バックリンク（Notion の `[[Page]]` スタイル）はファイルが一致する場合に維持。Notion と Logseq の両者ともリストスタイルのブロックインデントを使用するため、ブロックレベルのネストが保持されます。',
          '**Joplin インポートパス：** Tools → Import → 「MD - Markdown directory」→ 解凍した Notion フォルダを選択。Joplin は Notion のページ階層を反映したノートブック構造内に、.md ファイルごとに1ノートを作成します。ブロックレベルのネストは平坦化 — Notion のネストされたトグルリストは平坦な Markdown リストになります。',
          '**移行を検証：** 10–20ページをスポットチェック — 内容、リンク、タグが保たれているか確認。Notion データベースを多用していた場合、CSV エクスポートは別。Logseq と Joplin の両者ともこれを構造化データベースではなく平坦ファイルとして扱うため、手動再構成を計画してください。',
          '**Notion AI を停止：** アカウント設定で Notion AI サブスクリプションを無効化。今後の AI 作業はローカルマシン上の logseq-copilot または Jarvis 経由になります。',
          '**プライバシー姿勢を検証：** ネットワークを切断 → 新ツールで AI 機能を実行 → 動作することを確認。これが、移行が目標を達成したことを証明するテストです。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Notion データベースを構造化データとして使用していた場合（プロジェクトトラッカー、CRM 等）、移行は文章ページよりも複雑です。それらの特定のデータベースを Notion に残し（AI なし）、文章中心のコンテンツを Logseq または Joplin に移動することを検討するか、データベースを [AnythingLLM](https://anythingllm.com) の構造化 RAG に移行することを検討してください — そこでローカル LLM がそれらをドキュメントとして照会できます。',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: 'ワークフロー例：デイリージャーナル、ミーティングノート、リサーチ',
        content:
          '**ローカルスタックを実際に動作させる3つの具体的なワークフロー。** 最初の2つは Logseq 中心（アウトライナー / ジャーナルネイティブ）。3つ目は Joplin 中心（長文ノート）です。',
        items: [
          '**Logseq デイリージャーナル要約：** 終日 → 今日のジャーナルページを開く → `/copilot この日を3つの箇条書きで、決定事項、ブロッカー、明日のアクションに焦点を当てて要約` → 応答がネストされたブロックとして表示。プロンプトを logseq-copilot テンプレートとして保存し、ワンキーストロークで実行できるようにします。',
          '**Logseq 週次レビュー：** 日曜夕方 → `Week 19 review` という名前の新しいページを開く → `/copilot 過去7日間のデイリージャーナルページを、カテゴリごとに3つの箇条書きで要約：進捗、ブロッカー、テーマ` → logseq-copilot はページリンクメカニズム経由で最近のジャーナルページを取得。結果が翌週の計画の種になります。',
          '**Joplin ミーティングノート拡張：** ミーティング中、ノートに大まかな箇条書きをキャプチャ → ミーティング後、全選択 → Tools → Jarvis → 「これらのノートを拡張して構造化」→ 出力が下に置き換えまたは追加。プロンプトを Jarvis プリセットとして保存。',
          '**Joplin リサーチ Q&A：** 50–500件のソースノート（論文、記事、ウェブクリッピング）を1つのノートブックに追加 → Jarvis Notes Database を有効化 → 埋め込みを待つ → Tools → Jarvis → 「Ask Jarvis」→ ソース横断の質問（「どのソースが X を議論しているか？」）。Obsidian Copilot の vault QA に相当しますが Joplin 内です。',
          '**Logseq + Joplin の組み合わせ：** Logseq でキャプチャ（高速、ジャーナルネイティブ）→ 持続的な項目を Joplin にキュレート（恒久参照）。各ツールのネイティブな強みで AI を実行 — Logseq で高速チャット / アウトライン生成、Joplin で埋め込みベースのリサーチ Q&A。',
          '**モバイルキャプチャ、デスクトップ処理：** 日中、Logseq Mobile または Joplin Mobile で自由にノートをキャプチャ（AI なし）。終日デスクトップで、logseq-copilot または Jarvis を実行して要約、リンク、クエリ — AI がオフラインでキャプチャした内容に追いつきます。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '「モバイルキャプチャ、デスクトップ処理」パターンは、モバイルプラグインの制約を考えると、2026年の Logseq + Joplin について考える正しい方法です。これは回避策ではなく — ナレッジワークが実際に行われる方法に一致します。モバイルは入力用（アイデアがあり、キャプチャする）。デスクトップは合成用（キャプチャした素材を処理）。ローカル LLM は合成時に参加し、その品質が最も重要な場所です。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある失敗',
        items: [
          '**logseq-copilot または Jarvis を誤ってクラウドプロバイダで設定する。** どちらのプラグインも「OpenAI」をデフォルトプロバイダとして提供します。ローカルのみのセットアップには、カスタム base URL を `http://localhost:11434/v1` に切り替える必要があります。忘れると、プラグインがノートを静かに OpenAI に送信 — 移行した先の失敗モードそのもの。パケットキャプチャで検証してください。',
          '**モバイルでのプラグインサポートを期待する。** Logseq Mobile も Joplin Mobile も2026年にプラグインを実行しません。AI がノートのあるすべての場所で動作すると仮定すると、電車内で初めて要約しようとしたときに壁にぶつかります。1日目からモバイルキャプチャ、デスクトップ処理を計画してください。',
          '**別マシンから `http://localhost:11434/v1` にプラグインを向ける。** localhost はマシンごと。Ollama をデスクトップで実行し Logseq をラップトップで実行する場合、デスクトップの LAN IP（`http://192.168.1.20:11434/v1`）と、`0.0.0.0:11434` にバインドされた Ollama が必要です。',
          '**Joplin Jarvis 埋め込みデータベースを、小さなクォータの無料 WebDAV ティアに同期する。** 埋め込みデータベースは5,000ノートあたり約150–250 MB 成長します。無料ティア（Dropbox 2 GB）はノートブック規模で素早く制限に達します。ノートブックが約5,000ノートを超えたら、自己ホスト型 Joplin Server または有料ティアを計画してください。',
          '**監査パケットキャプチャを一度も実行しない。** 両プラグインともオープンソースで挙動が良いですが、スタックがローカルのみであることの確定的な証明は、Wireshark / Little Snitch / 同等を AI 使用中に実行し、アウトバウンド通信ゼロを検証することのみです。セットアップ後に一度実行し、結果を記録し、先に進んでください。',
          '**Logseq + logseq-copilot を埋め込みベースの検索に使おうとする。** logseq-copilot は2026年時点でグラフ全体の埋め込みインデックスを持ちません。「グラフ全体に質問」が必要なら、Joplin + Jarvis に切り替えるか Obsidian + Smart Connections を使用してください。Logseq はアウトライナーネイティブ AI に優れますが、セマンティック検索には優れません。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          'Logseq — [logseq.com](https://logseq.com) および [github.com/logseq/logseq](https://github.com/logseq/logseq)（オープンソースアウトライナー；AGPL 3.0）。',
          'logseq-copilot — [github.com/logancyang/logseq-copilot](https://github.com/logancyang/logseq-copilot)（オープンソース Logseq プラグイン；AGPL 3.0）。',
          'Joplin — [joplinapp.org](https://joplinapp.org) および [github.com/laurent22/joplin](https://github.com/laurent22/joplin)（オープンソースノートブック；AGPL 3.0）。',
          'Jarvis（Joplin）— [github.com/alondmnt/joplin-plugin-jarvis](https://github.com/alondmnt/joplin-plugin-jarvis)（オープンソース Joplin プラグイン；AGPL 3.0）。',
          'Ollama — [ollama.com](https://ollama.com) および [github.com/ollama/ollama](https://github.com/ollama/ollama)（ローカル LLM ランタイム；MIT）。',
          'Notion AI のプライバシーとデータ取扱 — [notion.com/help/notion-ai-faqs](https://www.notion.com/help/notion-ai-faqs)（比較文脈のためのベンダードキュメント）。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Logseq は AI ユーザーにとって Notion を置き換えられますか？',
            a: '文章ページとデイリージャーナルワークフローについては「はい」です。logseq-copilot をインストールし、Ollama を指すように設定すると、Logseq 内でチャット、要約、テンプレートベースの生成が利用可能 — データがマシンを離れることはありません。ギャップは構造化データベース：Notion のデータベースビュー（プロジェクトトラッカー、CRM）にはクリーンな Logseq 等価物がありません。文章中心のユーザーは Notion を完全に置き換え、データベース中心のユーザーは手動再構成を受け入れるか、特定のデータベースを Notion に残しつつ（AI なし）文章を Logseq に移動します。',
          },
          {
            q: 'Joplin はローカル AI プラグインをサポートしていますか？',
            a: 'はい。2026年の推奨プラグインは Jarvis で、ノートブック全体でチャット、要約、埋め込みベースのセマンティック検索を提供します。Jarvis を `http://localhost:11434/v1` の Ollama でチャット用に、`http://localhost:11434/v1` + `nomic-embed-text` で埋め込み用に設定してください。他の Ollama 対応 Joplin プラグインも存在しますが、Jarvis が最も活発に保守され、機能が完成しています。',
          },
          {
            q: 'クラウドなし同期は Logseq と Joplin のどちらが優れていますか？',
            a: 'Joplin の方が広範でより洗練されたクラウドなし同期ストーリーを持ちます。Joplin は自己ホスト型 Joplin Server、WebDAV、Nextcloud、加えて任意のバックエンド上の第一級 E2EE をサポート。Logseq は組み込み Git 同期（開発者向けに優れる）と Syncthing / iCloud Drive で動作しますが、Joplin Server に相当する自己ホスト版がありません。監査可能なオンプレミス同期を望むチームには Joplin Server が良い選択。Git 追跡履歴を望む開発者には Logseq Git 同期が良い選択です。',
          },
          {
            q: 'AI 機能を維持したまま Notion から Logseq に移行できますか？',
            a: '移行は内容を移動しますが、Notion AI サブスクリプションは移動しません。Notion から Markdown としてエクスポートし、Logseq にインポートし、その後 logseq-copilot をインストールして Ollama で設定します — AI 層がローカルで再構築されます。Logseq は Notion のブロックレベルのネストを Joplin よりよく保持します。両ツールともリスト形式のブロックをプリミティブとして使用するためです。Notion AI 機能（自動入力、データベース上のスマートプロパティ）には直接の Logseq 等価物がありません — これらのワークフローは logseq-copilot プロンプトまたはスクリプトで再構築する必要があります。',
          },
          {
            q: 'Logseq は完全にオフラインで動作しますか？',
            a: 'はい。Logseq はクラウドコンポーネントを必須としないローカルデスクトップアプリ。グラフは Markdown ファイルのフォルダ。アプリはローカルでそれらを読み書きします。ネットワークアクセスはリモートへの同期（Git プッシュ、Syncthing ピア検出、Logseq Sync）と、logseq-copilot をクラウド LLM プロバイダに対して実行する場合にのみ必要 — 後者はオプション。Ollama を LLM プロバイダとして使用すると、スタック全体がオフラインで動作します。',
          },
          {
            q: 'Joplin の AI プラグインは Obsidian のものと同じくらい成熟していますか？',
            a: 'Obsidian の方が AI プラグイン数と同時メンテナ数が多い。Joplin はプラグイン数が少ないですが、Jarvis は機能が完成し活発に保守されています — チャット、要約、埋め込みベースの検索を単一プラグインでカバー。ほとんどのユーザーにとって、Jarvis は Joplin のプレーン Markdown ノートブック上で Obsidian Copilot + Smart Connections の組み合わせと同等以上。プラグインの多様性（テンプレートエンジン、キャラクターチャット、MOC ジェネレータ）を求めるパワーユーザーには、Obsidian の方が多くの選択肢があります。',
          },
          {
            q: 'AI 付きのデイリージャーナリングには Logseq と Joplin のどちらが適していますか？',
            a: 'Logseq です。デイリージャーナルは Logseq の組み込みプリミティブ — 毎日自動的にジャーナルページが作成され、ブロックが第一級になり、logseq-copilot 出力がプロンプトの下のネストされたブロックになります。デイリージャーナル AI ワークフロー（終日要約、週次レビュー、気分タグ付け）がネイティブに感じられます。Joplin は月ごとのノートブックと Jarvis プロンプトで再現可能ですが、摩擦が高くなります。',
          },
          {
            q: '同じ vault を複数のデバイスで使用できますか？',
            a: 'はい — 両ツールとも同期層経由でマルチデバイス使用をサポート。Logseq：Git、Syncthing、iCloud Drive、または Logseq Sync。Joplin：Joplin Cloud、自己ホスト型 Joplin Server、WebDAV、Nextcloud、Dropbox、または OneDrive。注意：AI プラグインはデスクトップでのみ動作します。vault 内容はモバイルに同期しますが、logseq-copilot と Jarvis はそこで動作しません。デスクトップ AI、モバイルキャプチャを計画してください。',
          },
          {
            q: 'AI プラグインは Joplin Mobile または Logseq Mobile で動作しますか？',
            a: 'いいえ — どちらのツールも2026年にモバイルでプラグインをサポートしません。Logseq Mobile と Joplin Mobile は同期された vault の読み書き面ですが、プラグインランタイム（Node.js / Electron）がモバイルアプリに存在しません。AI 機能（logseq-copilot、Jarvis）はデスクトップでのみ動作します。モバイル AI が重要なら、選択肢は Obsidian Mobile + LAN Ollama、またはモバイルキャプチャ + デスクトップ処理です。',
          },
          {
            q: 'オープンソースのローカル AI 統合は Notion AI より安全ですか？',
            a: 'デフォルトアーキテクチャの観点で「はい」です。Notion AI は設計上ノート内容を OpenAI に送信します — これは構造的、設定の選択ではありません。Logseq + logseq-copilot + Ollama と Joplin + Jarvis + Ollama は、明示的にクラウド LLM プロバイダを設定しない限り、第三者に何も送信しません。APPI 対象データ、医療、法務、ジャーナリズム文脈では、この区別が重要です：ローカルスタックには委託先がなく、国際移転がなく、副処理者リスクがありません。監査性もシンプル — 一度のパケットキャプチャで AI 使用中のアウトバウンド通信ゼロを証明できます。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Obsidian + ローカル LLM：vault を第二の脳に変える5つのプラグイン（2026）](/ja/power-local-llm/local-llm-with-obsidian-2026) — Obsidian ユーザー向け姉妹記事。これらの読者が典型的に対抗候補として検討するパワーユーザー向け代替。',
          '[ローカル LLM 個人ナレッジベース 2026](/ja/power-local-llm/local-llm-personal-knowledge-base-2026) — Logseq と Joplin が供給する、より広範な PKB アーキテクチャ。RAG 層、キャプチャパイプライン、10K以上のアイテムワークフローをカバー。',
          '[Grammarly と Notion AI をローカル LLM で置き換える（2026）](/ja/power-local-llm/replace-grammarly-notion-ai-with-local) — Notion AI 移行パスに特化した隣接 SaaS 置換ガイド。',
          '[Zapier をローカル AI エージェントで置き換える：月額/月を節約する5つのワークフロー（2026）](/ja/power-local-llm/replace-zapier-with-local-ai-agents) — SaaS 依存を統合する読者向けの隣接生産性スタック置換。',
          '[2026年最高のローカル LLM](/ja/local-llms/best-local-llms-2026) — logseq-copilot と Jarvis の背後にあるチャットおよび埋め込みモデルを選ぶためのモデル権威。',
          '[ローカル LLM ソフトウェアディレクトリ 2026](/ja/power-local-llm/local-llm-software-directory-2026) — Logseq、Joplin、Ollama、logseq-copilot、Jarvis のディレクトリエントリ、ライセンスとリンク付き。',
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
    title: 'Logseq 与 Joplin 配合本地 LLM：无云同步的智能笔记（2026）',
    seoTitle: 'Logseq + Joplin 本地 LLM：无云同步笔记 2026',
    intro:
      '[Logseq](https://logseq.com) 和 [Joplin](https://joplinapp.org) 是 2026 年两款可与本地 LLM 完美集成、无需任何云端往返的开源笔记应用。Logseq 通过 logseq-copilot 插件对接 [Ollama](https://ollama.com)，提供大纲器原生的聊天和每日日志 AI；Joplin 通过 Jarvis 插件对接 Ollama，提供笔记感知聊天、摘要和基于嵌入的检索。两者的默认架构都比 Notion AI 更符合数据安全法和跨境合规要求——Notion 会将笔记内容发送至 OpenAI；Logseq 和 Joplin 除非您主动配置，否则不发送任何数据。2026 年的硬限制是移动端：Logseq 和 Joplin 都不支持 iOS 或 Android 插件，因此 AI 功能仅在桌面端运行。本指南从 AI 插件成熟度、无云同步路径、移动兼容性以及从 Notion 的迁移路径对两款工具进行评分，并提供 Ollama 的具体配置步骤。',
    metaDescription:
      'Logseq + logseq-copilot vs Joplin + Jarvis（基于 Ollama）：私密 Notion AI 替代方案。无云同步、数据本地化合规、移动端插件限制说明。2026 年。',
    twitterDescription:
      '开源笔记 + 本地 AI 无需云端：Logseq + logseq-copilot，Joplin + Jarvis，均基于 Ollama。解析移动端插件限制。Notion 迁移路径。默认符合数据安全法。',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'nomic-embed-text',
      'mxbai-embed-large',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4（16GB 以上统一内存）',
      '搭载 RTX 3060 12GB 或 RTX 4060 8GB 的 PC',
      '16GB RAM 的 PC（仅 CPU 回退）',
    ],
    audience:
      '开源笔记用户、注重隐私的知识工作者、受数据安全法或跨境合规要求约束的中国及亚太企业用户、Notion AI 离开者、希望使用 AI 功能但不将笔记发送至 OpenAI 或 Anthropic 的每日日志撰写者。',
    readTime: '阅读约14分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Logseq Joplin 本地 LLM 插件',
    targetKeywords: [
      'logseq 本地 llm',
      'joplin 本地 ai',
      'logseq copilot ollama',
      'joplin jarvis plugin',
      '开源笔记 ai 隐私',
      'notion ai 替代 数据安全法',
    ],
    leadAnswerBlock:
      '**2026 年，对于大多数读者，Logseq + logseq-copilot 或 Joplin + Jarvis 配合 Ollama 是合适的私密 Notion AI 替代方案。** 如果您的工作流以每日日志 + 大纲器为主，选择 Logseq；如果您需要带端到端加密同步的纯 Markdown 笔记，选择 Joplin。两者都通过 `http://localhost:11434/v1` 连接 Ollama，都开箱支持与当前笔记的对话，且都在宽松许可下开源（Logseq AGPL 3.0，Joplin AGPL 3.0——同一系列）。除非您在插件中明确配置云端提供商，否则均不会将笔记内容发送至云端。2026 年的硬限制：iOS 或 Android 上都无插件支持——AI 功能仅在桌面端可用；移动端成为手动捕获面，您将在桌面端用 AI 处理。从 Notion AI 迁移时，Logseq 通过 Notion 原生 Markdown 导出提供更干净的导入路径；Joplin 的 Notion 导入可用但会丢失块级结构。',
    quickAnswerTop: {
      zh: {
        question: '2026 年用于私密本地 LLM 的最佳 Logseq 或 Joplin 插件组合是什么？',
        answer:
          'Logseq + logseq-copilot 或 Joplin + Jarvis 插件，均指向 `http://localhost:11434/v1` 的 Ollama。logseq-copilot 在 Logseq 中添加聊天块和斜杠命令；Jarvis 在 Joplin 中添加聊天、摘要和基于嵌入的问答。两者都是 AGPL 开源插件，都默认仅本地运行，都原生支持 Ollama。2026 年推荐的聊天模型是 Llama 3.2 3B（默认）或 Phi-4 Mini（8GB RAM 系统）。基于嵌入的检索（仅 Joplin Jarvis——Logseq 在 2026 年暂未公开图谱级嵌入插件）使用 nomic-embed-text 或 mxbai-embed-large。移动端插件支持：2026 年两款工具均不可用——AI 功能仅在桌面端运行。',
        bullets: [
          'Logseq + logseq-copilot——大纲器内基于斜杠命令的聊天块。最适合每日日志和图谱工作流。',
          'Joplin + Jarvis 插件——聊天侧边栏、摘要、基于嵌入的语义检索。最适合带强同步的纯 Markdown 笔记。',
          '两款插件都通过 `http://localhost:11434/v1` 对接 Ollama——默认无云端调用。',
          'Logseq 无云同步：内置 Git 或通过 Syncthing/iCloud Drive 的本地文件同步。Joplin 同步：端到端加密的 Joplin Cloud、自托管 Joplin Server，或带 E2EE 的 Nextcloud / WebDAV / Dropbox / OneDrive。',
          '移动端插件限制（2026）：Logseq Mobile 和 Joplin Mobile 都不支持插件。AI 功能仅在桌面端——移动用于捕获，桌面用于处理。',
          'Notion AI 迁移：Logseq 提供更干净的 Markdown 导入路径；Joplin 丢失块级结构但保留内容。两者都在切换瞬间停止向 OpenAI 发送数据。',
          '推荐 Ollama 模型：聊天——Llama 3.2 3B 或 Phi-4 Mini；嵌入（仅 Joplin Jarvis）——nomic-embed-text 或 mxbai-embed-large。',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '速览', anchor: '#quick-facts' },
      { label: 'Logseq 还是 Joplin：如何选择？', anchor: '#which-tool' },
      { label: '工具对比表', anchor: '#comparison-table' },
      { label: '与 Ollama 协作的 Logseq AI 插件', anchor: '#logseq-ai' },
      { label: '与 Ollama 协作的 Joplin AI 插件', anchor: '#joplin-ai' },
      { label: '反对 Notion AI 的隐私论据', anchor: '#vs-notion' },
      { label: '无云同步：Git、Syncthing、Joplin Server', anchor: '#sync' },
      { label: '移动端插件限制：哪些可用、哪些不可用', anchor: '#mobile' },
      { label: 'AI 治理与数据主权', anchor: '#gdpr' },
      { label: '从 Notion AI 迁移到 Logseq 或 Joplin', anchor: '#notion-migration' },
      { label: '示例工作流：每日日志、会议记录、研究', anchor: '#workflows' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '来源', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Logseq + logseq-copilot 是大纲器 / 每日日志用户的推荐组合。** logseq-copilot 在 Logseq 中添加聊天块和斜杠命令，配置对接 `http://localhost:11434/v1` 的 Ollama。最适合已在 Logseq 每日日志页面模型中工作的用户。',
          '**Joplin + Jarvis 是纯 Markdown 笔记用户的推荐组合。** Jarvis 在 Joplin 中添加聊天侧边栏、摘要命令和跨整个笔记本的基于嵌入的语义检索。最适合需要带强端到端加密同步的 Notion 风格笔记本的用户。',
          '**两款工具都在 AGPL 3.0 下开源**——许可对个人和商业使用宽松；唯一限制是若您修改并公开托管时需开源。',
          '**隐私态势在架构层面优于 Notion AI。** Notion AI 按设计将笔记内容发送至 OpenAI；Logseq 和 Joplin 除非您明确配置云端提供商，否则不发送任何数据。在医疗、法律、新闻和数据安全法监管场景中，这是有意义的区别。',
          '**移动端插件限制是 2026 年最大的约束。** Logseq Mobile 和 Joplin Mobile 都不支持插件。AI 功能仅在桌面端运行——移动端成为捕获面（写笔记），处理（摘要、对话、检索）稍后在桌面端进行。',
          '**无云同步简单直接，但每款工具方式不同。** Logseq 内置 Git 同步，与 Syncthing 或 iCloud Drive 协作顺畅。Joplin 提供端到端加密的 Joplin Cloud、自托管 Joplin Server，或叠加 E2EE 的任何 WebDAV / Nextcloud / Dropbox / OneDrive 后端。',
          '**Notion AI 迁移是两款工具都能处理的单向操作。** Logseq 导入 Notion Markdown 导出时块级结构保真度更高；Joplin 导入内容但展平嵌套块。迁移后，除非您主动选择，否则笔记不再离开您的设备。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '速览',
        items: [
          '**涉及工具：** Logseq（大纲器，每日日志为主）和 Joplin（纯 Markdown 笔记本）。[Obsidian](https://obsidian.md) 作为参照提及——其专用指南在文末链接。',
          '**主要 AI 插件：** Logseq 用 logseq-copilot；Joplin 用 Jarvis（以及类似的 Ollama 兼容插件）。',
          '**LLM 后端：** Ollama（推荐）位于 `http://localhost:11434/v1`，或任何 OpenAI 兼容的本地端点（[LM Studio](https://lmstudio.ai)、llama.cpp server、vLLM）。',
          '**推荐聊天模型：** Llama 3.2 3B、Phi-4 Mini、Gemma 3 4B（16GB RAM 系统）；Qwen3 1.7B（8GB RAM）。',
          '**推荐嵌入模型（仅 Joplin Jarvis）：** nomic-embed-text（768 维，速度快）、mxbai-embed-large（1024 维，更精确）。',
          '**许可：** Logseq AGPL 3.0；Joplin AGPL 3.0；logseq-copilot AGPL 3.0（与 Copilot for Obsidian 同一作者 Logan Yang）；Jarvis（Joplin）AGPL 3.0。',
          '**同步路径：** Logseq——内置 Git、Syncthing、iCloud Drive、Logseq Sync（付费）。Joplin——Joplin Cloud（付费，E2EE）、自托管 Joplin Server、WebDAV、Nextcloud、Dropbox、OneDrive（全部支持 E2EE）。',
          '**移动端插件：** 2026 年两款工具都不支持——AI 仅在桌面端。',
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: 'Logseq 还是 Joplin：如何选择？',
        content:
          '**如果您的笔记工作流以每日日志或图谱为主，选 Logseq；如果您的笔记是带强同步需求的纯 Markdown 文档，选 Joplin。** 两款工具的心智模型不同——Logseq 是带双向链接和默认每日日志捕获面的大纲器；Joplin 是带标签、搜索和端到端加密同步的 Markdown 文件笔记本。2026 年的 AI 插件生态反映了这一点：logseq-copilot 嵌入大纲器块；Jarvis 嵌入 Joplin 侧边栏。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq + logseq-copilot 适合大纲器 / 每日日志工作流；Joplin + Jarvis 适合带强端到端加密同步的纯 Markdown 笔记本工作流。',
          },
          {
            type: 'plain-terms',
            text: '两款工具都是 Notion AI 的私密替代品。选择主要取决于您如何写笔记。Logseq 把笔记当作嵌套要点处理，自动给您一个每日日志页面——适合公开思考、带时间戳的捕获和图谱式交叉引用。Joplin 把笔记当作笔记本中的完整 Markdown 文档处理——适合长文写作、结构化文档和需要加密同步的设备。两者都通过 Ollama 与本地 LLM 协作，都开源，都在您从 Notion 切换的瞬间停止向第三方发送数据。',
          },
        ],
        decisionBlock: {
          title: '决定：Logseq 还是 Joplin？',
          localIf: [
            '您撰写每日日志，希望 AI 摘要 / 聚类 / 链接每日内容 → Logseq + logseq-copilot',
            '您需要图谱风格反向链接和大纲器块与内联聊天 → Logseq + logseq-copilot',
            '您撰写较长的 Markdown 笔记（研究、文档、草稿）→ Joplin + Jarvis',
            '您需要跨设备的端到端加密同步 → Joplin（E2EE 体验更好）',
            '您需要跨整个笔记本的基于嵌入的语义检索 → Joplin + Jarvis（Logseq 在 2026 年无对应方案）',
            '您从 Notion 迁移且需要最干净的块级保真度 → Logseq',
          ],
          cloudIf: [
            '您需要在 iOS 或 Android 上使用 AI 功能（不只是捕获）→ 2026 年两款工具均不支持移动端插件；考虑 Obsidian Mobile + 通过 Tailscale 的 LAN Ollama',
            '您需要同一 vault 的实时多用户协作 → Logseq 和 Joplin 都设计为单用户；协作编辑不在其模型中',
            '您需要每次聊天回复都达到 GPT-5.5 质量 → 云端等同方案（本地堆栈约为 70% 的能力）',
          ],
          quick: [
            '每日日志 + 大纲器：Logseq + logseq-copilot',
            '纯 Markdown 笔记本 + E2EE 同步：Joplin + Jarvis',
            '移动端 AI 功能：2026 年不可行——移动端捕获，桌面端处理',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '一种常见模式是同时运行两款：Logseq 用于每日日志和快速捕获（全部时间戳化），Joplin 用于持久参考笔记（较长、带标签、加密同步）。两款工具不共享数据库，但都不重——同时运行总共增加约 200–400 MB RAM。Logseq 用于"思考"，Joplin 用于"知识"，本地 LLM 在两者中均可用。',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '工具对比表',
        content:
          '**最重要的四个维度：AI 插件深度、无云同步、移动端插件支持、最佳工作流。** Obsidian 作为参照纳入——比较三款的读者也应阅读文末链接的 Obsidian 专属指南。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq 在大纲器原生 AI 和 Git 同步领先；Joplin 在端到端加密同步和基于嵌入的检索领先；Obsidian 在插件广度领先，代价是付费同步和非 OSI 许可。',
          },
        ],
        columns: ['工具', 'AI 插件', '同步（无云）', '移动端', '最适合'],
        rows: [
          { '工具': '[Logseq](https://logseq.com)', 'AI 插件': 'logseq-copilot（聊天块、斜杠命令）、GPT-3 插件变体', '同步（无云）': '内置 Git、Syncthing、iCloud Drive、Logseq Sync（付费 E2EE）', '移动端': '提供移动应用；移动端不支持插件（2026）', '最适合': '每日日志 + 大纲器工作流' },
          { '工具': '[Joplin](https://joplinapp.org)', 'AI 插件': 'Jarvis（聊天、摘要、基于嵌入的问答）、[Ollama](https://ollama.com) 兼容集成', '同步（无云）': 'Joplin Cloud（付费 E2EE）、自托管 Joplin Server、WebDAV、Nextcloud、Dropbox、OneDrive（全部支持 E2EE）', '移动端': '提供移动应用；移动端不支持插件（2026）', '最适合': 'Markdown 笔记本 + E2EE 同步' },
          { '工具': '[Obsidian](https://obsidian.md)（参照）', 'AI 插件': 'Smart Connections、Copilot、Text Generator、Local GPT、BMO Chatbot', '同步（无云）': 'Git、Syncthing、iCloud Drive、Obsidian Sync（付费 E2EE）', '移动端': '移动应用支持大多数插件；需 LAN 访问 Ollama', '最适合': '使用付费插件 / 付费同步的高级用户' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '移动端插件列是 2026 年最大的差异化要素。Obsidian Mobile 在 Ollama 可通过 LAN 或 Tailscale 访问时运行大多数插件（含 Smart Connections 和 Copilot）。Logseq Mobile 和 Joplin Mobile 完全不运行插件——AI 功能严格限于桌面端。如果移动 AI 重要，请规划移动端捕获 + 桌面端处理，或考虑 Obsidian Mobile。',
          },
        ],
      },
      logseqAi: {
        id: 'logseq-ai',
        title: '与 Ollama 协作的 Logseq AI 插件',
        content:
          '**2026 年推荐的 Logseq AI 插件是 logseq-copilot——与 Copilot for Obsidian 同一作者，配置指向 Ollama。** 它在 Logseq 大纲器内直接添加聊天块（`/copilot` 斜杠命令）、内联重写和日志感知提示词。Logseq 在 2026 年暂未提供 Smart Connections（vault 级嵌入索引）的等价方案，因此图谱级语义链接仍不是已解决的问题。',
        items: [
          '**功能：** 通过斜杠命令的聊天块、内联内容生成、能将当前页面或所选块作为上下文的日志感知提示词。',
          '**安装：** 设置 → 插件 → Marketplace → 搜索 "logseq-copilot" → 安装 + 启用。作者：Logan Yang（与 Copilot for Obsidian 同）。',
          '**Ollama 配置：** 设置 → logseq-copilot → API Provider → "Custom OpenAI" 或 "Ollama" → API base URL `http://localhost:11434/v1` → 模型 `llama3.2:3b`（或任何 Ollama 模型名）。',
          '**斜杠命令：** 在任何块中输入 `/copilot` 启动对话。输出以嵌套块形式出现在提示词下方——大纲器原生，因此回复成为一等大纲内容。',
          '**基于选择的提示词：** 选中块 → 运行自定义提示词模板（"将这些总结为三个要点"）→ 结果附加到所选内容下方。',
          '**每日日志集成：** 将模板指向每日日志页面 → 日终摘要、周回顾问题或反向链接扩展成为单击操作。',
          '**2026 年不具备的功能：** 没有图谱级嵌入索引。Logseq 反向链接保持显式；跨页面的语义发现尚不被任何开源 Logseq 插件支持。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'logseq-copilot 输出就是块——与 Logseq 中所有其他内容相同的原语。这是相对于 Obsidian 的关键优势：AI 回复不是浮动的侧边栏文本，而是您可以反向链接、标签、查询和重新编辑的图谱节点。大量使用 `/copilot` 进行捕获，然后像处理其他笔记一样重构回复块。',
          },
        ],
      },
      joplinAi: {
        id: 'joplin-ai',
        title: '与 Ollama 协作的 Joplin AI 插件',
        content:
          '**2026 年推荐的 Joplin AI 插件是 Jarvis——它在整个笔记本上提供聊天、摘要和基于嵌入的语义检索，全部可配置使用 Ollama。** Jarvis 是 Joplin 最接近 Smart Connections + Copilot for Obsidian 组合的方案：一个插件、一份配置、两个职能。',
        items: [
          '**功能：** 聊天侧边栏、跨整个笔记本的 "Ask Jarvis" 命令（基于嵌入的检索）、摘要所选笔记、从提示词生成笔记、对选择应用自定义提示词。',
          '**安装：** 工具 → 选项 → 插件 → 搜索 "Jarvis" → 安装 + 启用。作者：Alon Bukai。',
          '**Ollama 配置（聊天）：** 选项 → Jarvis → Model Provider → "OpenAI" 带自定义 base URL → URL `http://localhost:11434/v1` → 模型 `llama3.2:3b` → API key 为任意非空字符串（Ollama 忽略）。',
          '**Ollama 配置（嵌入）：** 选项 → Jarvis → Notes Database → 启用 Database → Embedding Model → "OpenAI" 带自定义 base URL → URL `http://localhost:11434/v1` → 模型 `nomic-embed-text`。',
          '**初始索引：** Jarvis 首次启用时嵌入数据库中的每条笔记。Mac M3 Pro + nomic-embed-text 时间：1K 笔记约 3 分钟、5K 笔记约 15 分钟、10K 笔记约 35 分钟。保存时重新嵌入为增量。',
          '**"Ask Jarvis" 工作流：** 工具 → Jarvis → Ask Jarvis → 输入问题 → Jarvis 通过嵌入相似度检索相关笔记并将块加上您的问题发送给聊天模型。等同于 Copilot for Obsidian 的 vault QA。',
          '**最适合：** 希望在 Joplin 中用单个插件覆盖聊天 + 检索、无需管理两个独立插件的用户。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Jarvis 将嵌入数据库存储在 Joplin 的 SQLite 数据库中。数据库文件每嵌入 5,000 条笔记（使用 nomic-embed-text）增长约 150–250 MB。如果通过 Joplin Cloud 或 WebDAV 同步 Joplin 配置文件，嵌入数据库包含在同步内——请规划带宽和同步时间成本。使用 Joplin 的 E2EE 时，嵌入数据库本身在传输中加密。',
          },
        ],
      },
      vsNotion: {
        id: 'vs-notion',
        title: '反对 Notion AI 的隐私论据',
        content:
          '**Notion AI 按设计将笔记内容发送至 OpenAI——这是架构而非配置选择。** 当您在页面上使用 Notion AI 功能时，Notion 将页面内容发送至 OpenAI 服务器，OpenAI 处理后通过 Notion 返回响应。数据受 OpenAI 和 Notion 的隐私政策约束，而非您的本地文件系统。对于受监管场景中的用户（医疗、法律、金融咨询、新闻、数据安全法覆盖的中国数据），这是任何设置都无法修复的结构性问题。',
        items: [
          '**Notion AI 架构：** 笔记离开您的设备由 OpenAI 处理。受 OpenAI Enterprise 数据处理条款约束（优于标准 OpenAI API），但仍在您的基础设施之外。',
          '**Logseq + logseq-copilot 架构：** Logseq 作为本地应用运行，插件将提示词发送至您的本地 Ollama，除非您在插件中明确配置云端提供商，否则没有笔记内容到达第三方。',
          '**Joplin + Jarvis 架构：** Joplin 作为本地应用运行，Jarvis 将提示词发送至您的本地 Ollama，嵌入生成本地运行，除非您在 Jarvis 中明确配置云端提供商，否则没有笔记内容到达第三方。',
          '**数据驻留：** 使用 Logseq 或 Joplin + Ollama，笔记内容的每一字节都留在您的设备上。使用 Notion AI 时，无论您身处何地，笔记内容都通过美国 OpenAI 服务器传输。',
          '**审计跟踪：** 使用本地 LLM，您可以在安装后运行一次抓包（Wireshark、Little Snitch 等）并验证插件在 AI 使用期间零出站调用。使用 Notion AI 时，出站调用是必然的——没什么可验证的。',
          '**子处理方风险：** Notion AI 继承 OpenAI 的所有子处理方（Microsoft Azure 作为主要基础设施，加上支持供应商）。Logseq 和 Joplin + Ollama 在 AI 层有零子处理方。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '"我的笔记应用真的私密吗？" 最清晰的测试是断开网络后试用 AI 功能。Logseq + logseq-copilot + Ollama：完全离线工作。Joplin + Jarvis + Ollama：完全离线工作。Notion AI：返回错误。设置后执行一次这个测试，确认您的堆栈如预期工作。',
          },
        ],
      },
      sync: {
        id: 'sync',
        title: '无云同步：Git、Syncthing、Joplin Server',
        content:
          '**Logseq 和 Joplin 都拥有多条无需信任第三方云端处理笔记内容的同步路径。** 正确选择取决于您是想零配置（付费同步）、Git 跟踪历史（对开发者友好）还是点对点（无服务器）。',
        items: [
          '**Logseq——内置 Git 同步：** 设置 → Sync → 启用 Git auto-commit。Logseq 按时间表将图谱提交至配置的 Git 远程。可与 GitHub / GitLab / 自托管 Gitea 协作。纯 Markdown 提交使历史对人类可读。',
          '**Logseq——Syncthing（点对点）：** 在每台设备上安装 Syncthing 并指向 Logseq 图谱文件夹。端到端加密、无中央服务器、无第三方。桌面间同步极佳；当 Syncthing-Fork（Android）或 Möbius Sync（iOS）保持文件夹同步时，可在 Logseq Mobile 上工作。',
          '**Logseq——iCloud Drive：** 将图谱文件夹保留在 macOS / iOS 的 iCloud Drive 中。Apple 设备上最干净的路径；数据由 Apple 静态加密但 Apple 持有密钥（非零知识）。',
          '**Logseq Sync（付费 E2EE）：** Logseq 团队的端到端加密同步。权衡：付费（含同步的 Pro 等级，定价变动——查看 logseq.com），但获得跨设备零配置 E2EE，含移动端。',
          '**Joplin——Joplin Cloud（付费 E2EE）：** Joplin 团队的带端到端加密的托管同步。少量笔记免费；付费等级按规模扩展。托管在欧盟。便利且对审计友好。',
          '**Joplin——自托管 Joplin Server：** 在 NAS / VPS / 家庭服务器上运行 Joplin Server Docker 镜像。客户端到客户端的端到端加密；服务器存储密文。组织希望完全拥有同步基础设施时的最佳路径。',
          '**Joplin——WebDAV / Nextcloud / Dropbox / OneDrive：** Joplin 支持任何 WebDAV 端点，加上对 Nextcloud、Dropbox、OneDrive 的一等支持。始终在其上启用 Joplin 内置 E2EE——这些提供商只能看到密文。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '自托管 Joplin Server 是组织希望可审计的本地同步而不信任第三方云端时的答案。在小型 VPS 或家庭服务器上运行，将所有客户端指向它，启用 E2EE——服务器只持有密文，您控制主机。这比自托管 Notion（未官方支持）或 Obsidian Sync 基础设施简单得多。',
          },
        ],
      },
      mobile: {
        id: 'mobile',
        title: '移动端插件限制：哪些可用、哪些不可用',
        content:
          '**Logseq Mobile 和 Joplin Mobile 在 2026 年都不支持插件——这是相对于 Obsidian 的最大限制。** 移动应用是功能性的捕获和阅读面，但 logseq-copilot 和 Jarvis 仅在桌面端运行。任何 AI 工作流都必须假设移动用于捕获、桌面用于处理。',
        items: [
          '**Logseq Mobile（iOS / Android）：** 查看、编辑和捕获笔记；反向链接和图谱视图可用；同步可用。插件不运行——含 logseq-copilot。移动端 AI 功能不可用。',
          '**Joplin Mobile（iOS / Android）：** 查看、编辑和捕获笔记；标签和搜索可用；同步可用（含 E2EE）。插件不运行——含 Jarvis。移动端 AI 功能不可用。',
          '**应对模式：移动端捕获、桌面端处理。** 在移动端自由地写笔记。当您到达桌面端时，运行 logseq-copilot 或 Jarvis 来摘要、扩展、链接或查询捕获的内容。',
          '**应对模式：家庭服务器 + 远程桌面。** 在家用桌面端运行 logseq-copilot 或 Jarvis，需要 AI 时通过 Tailscale + 远程桌面 / SSH 隧道从移动端访问该桌面。增加配置成本；对休闲用户很少值得。',
          '**应对模式：切换到 Obsidian Mobile 用于 AI 用例。** Obsidian Mobile 运行大多数插件。如果移动 AI 关键，这是最简答案——代价是更换工具。',
          '**为何存在这一限制：** Logseq 和 Joplin 都将插件引擎作为仅桌面的 Node.js / Electron 上下文运行。移动应用为原生（Logseq Capacitor、Joplin React Native），不嵌入插件运行时。移除限制需要重写插件架构——两个团队都未在 2026 年表明此意向。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '如果您的 AI 用例以移动为先（例如，在移动中口述笔记并希望 AI 立即摘要），Logseq 和 Joplin 目前不是合适工具——Obsidian Mobile + LAN Ollama 才是。如果您的 AI 用例以桌面为先且伴随移动捕获（更常见模式），Logseq 和 Joplin 都工作良好，移动限制只是轻微不便而非阻碍。',
          },
        ],
      },
      gdpr: {
        id: 'gdpr',
        title: 'AI 治理与数据主权',
        content:
          '**对于中国及亚太区域的企业用户，Logseq + logseq-copilot + Ollama 与 Joplin + Jarvis + Ollama 是少数与数据安全法和跨境合规要求保持一致的架构之一。** 笔记内容从不离开数据控制方的设备，因此在使用云端 AI 时所需的处理方管理、跨境数据控制、子处理方风险讨论，在本地堆栈中完全不存在。本节按中国监管、亚太框架和大型企业部署的顺序整理。',
        items: [
          '**中国（《数据安全法》）：** 2021 年《数据安全法》要求企业对涉及国家安全和关键基础设施的数据实施严格的存储和传输控制。本地 LLM 推理完全符合数据本地化要求——笔记数据始终保留在用户设备上，不进行跨境传输。Qwen3 1.7B（阿里巴巴出品）作为本地默认模型时，特别适合处理中文内容的中国企业，无需依赖境外推理服务。',
          '**亚太地区（数据跨境）：** 新加坡、香港、台湾的金融和医疗机构受到严格的数据跨境限制。Logseq / Joplin + Ollama 是符合这些跨境框架的少数 SaaS AI 替代方案之一。日韩的合规要求也类似——对云端 AI 处理机密数据的限制日益严格，本地推理完全规避此类风险。',
          '**企业部署：** 中国大型银行、医院、律师事务所对客户机密数据的第三方传输有严格限制。本地 LLM 堆栈使这些行业能够采用 AI 工具，同时符合内部审计和外部监管要求。自托管 Joplin Server 可在阿里云、腾讯云、华为云等中国境内基础设施上运行——为强制要求境内托管的部署提供清晰路径。',
          '**数据本地化合规：** 跨境数据流是云端 AI 服务的核心合规挑战。本地推理完全消除跨境流——所有数据处理在用户设备内完成。无需签署跨境传输协议、无需进行传输影响评估。',
          '**删除可验证性：** 使用 Notion AI 时，从账户删除笔记内容未必从 OpenAI 训练管道或日志中删除（取决于企业条款）。使用本地 Ollama 时，删除即文件系统删除——可验证且完整。',
          '**可审计性：** 本地堆栈更易审计。运行一次抓包，验证 AI 使用期间零出站流量，记录结果。云端 AI 服务需要依赖供应商的 SOC 2 / ISO 27001 报告。',
          '**境内托管选项（当同步涉及服务器时）：** 自托管 Joplin Server 可运行在阿里云、腾讯云、华为云等中国境内基础设施上。对于受跨境数据流限制的部署，避免使用 Logseq Sync（美国运营），优先选择 Git 或 Syncthing。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '对于在数据安全法或行业监管框架下需要可辩护 AI 功能策略的组织，Logseq 或 Joplin 上的本地 LLM 堆栈是最简答案。讨论从"使用 Notion + OpenAI 作为子处理方，包含以下条款"转变为"使用在数据控制方端点上运行的本地软件，无第三方处理方涉及"。合规团队的工作变得显著容易。',
          },
        ],
      },
      notionMigration: {
        id: 'notion-migration',
        title: '从 Notion AI 迁移到 Logseq 或 Joplin',
        content:
          '**Notion 提供原生 Markdown 导出，Logseq 和 Joplin 都可导入——Logseq 块级结构保留更好，Joplin 保留内容但展平嵌套块。** 无论哪种方式，迁移都是一次性导出 - 导入，而非持续同步，且立即停止向 OpenAI 的数据流。',
        numberedItems: [
          '**从 Notion 导出：** 设置 → 设置和成员 → 设置 → "导出所有工作区内容" → 选择 "Markdown & CSV" → 下载 ZIP。导出包含每页一个 .md 文件加上嵌套页面的文件夹。',
          '**解压和清理：** Notion 的导出在文件名中使用长页面 ID 后缀（例如，`My Page 1f8b2a3c4d5e6f7g8h9i.md`）。如果文件名对您的新工具重要，运行快速重命名脚本删除 ID。',
          '**Logseq 导入路径：** 打开 Logseq → 文件 → 新图谱 → 指向新文件夹 → 将解压的 Notion 文件复制到图谱的 `pages/` 文件夹。Logseq 识别它们；当文件匹配时反向链接（Notion 的 `[[Page]]` 风格）保留。块级嵌套保留，因为 Notion 和 Logseq 都使用列表风格的块缩进。',
          '**Joplin 导入路径：** 工具 → 导入 → "MD - Markdown directory" → 选择解压的 Notion 文件夹。Joplin 在反映 Notion 页面层级的笔记本结构内为每个 .md 文件创建一条笔记。块级嵌套展平——Notion 的嵌套切换列表变为扁平 Markdown 列表。',
          '**验证迁移：** 抽查 10–20 页——确认内容、链接和标签保留。如果您大量使用过 Notion 数据库，CSV 导出是单独的；Logseq 和 Joplin 都将其作为扁平文件而非结构化数据库处理，因此请规划一些手动重构。',
          '**停止 Notion AI：** 在账户设置中禁用 Notion AI 订阅。未来的 AI 工作通过本地设备上的 logseq-copilot 或 Jarvis 进行。',
          '**验证隐私态势：** 断开网络 → 在新工具中运行 AI 功能 → 确认它们工作。这是证明迁移已达成目标的测试。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '如果您将 Notion 数据库用作结构化数据（项目跟踪器、CRM 等），迁移比纯散文页面更复杂。考虑将这些特定数据库保留在 Notion 中（无 AI），同时将散文内容移至 Logseq 或 Joplin——或将数据库迁移至 [AnythingLLM](https://anythingllm.com) 的结构化 RAG，本地 LLM 可作为文档查询它们。',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: '示例工作流：每日日志、会议记录、研究',
        content:
          '**展示本地堆栈实际运作的三个具体工作流。** 前两个以 Logseq 为中心（大纲器 / 日志原生）；第三个以 Joplin 为中心（较长笔记）。',
        items: [
          '**Logseq 每日日志摘要：** 日终 → 打开今天的日志页面 → `/copilot 用三个要点总结这一天，聚焦于决定、阻碍和明天的行动` → 回复以嵌套块形式出现。将提示词保存为 logseq-copilot 模板，实现单击运行。',
          '**Logseq 周回顾：** 周日傍晚 → 打开名为 `第 19 周回顾` 的新页面 → `/copilot 将过去 7 天的每日日志页面按类别用 3 个要点总结：进展、阻碍、主题` → logseq-copilot 通过页面链接机制检索最近的日志页面。结果成为下周计划的起点。',
          '**Joplin 会议记录扩展：** 会议期间，在一条笔记中捕获粗略要点 → 会议后，全选 → 工具 → Jarvis → "扩展并构建这些笔记" → 输出替换或附加在下方。将提示词保存为 Jarvis 预设。',
          '**Joplin 研究问答：** 将 50–500 条来源笔记（论文、文章、网络剪辑）放入单个笔记本 → 启用 Jarvis Notes Database → 等待嵌入 → 工具 → Jarvis → "Ask Jarvis" → 提问跨来源问题（"哪些来源讨论 X？"）。等同于 Obsidian Copilot vault QA，但在 Joplin 内。',
          '**Logseq + Joplin 组合：** 在 Logseq 中捕获（快速、日志原生）→ 将持久项目整理到 Joplin（永久参考）。在每款工具上为其原生优势运行 AI——在 Logseq 中快速聊天 / 大纲生成，在 Joplin 中基于嵌入的研究问答。',
          '**移动捕获、桌面处理：** 白天，在 Logseq Mobile 或 Joplin Mobile 上自由地捕获笔记（无 AI）。日终在桌面端，运行 logseq-copilot 或 Jarvis 来摘要、链接和查询——AI 赶上您离线捕获的内容。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '"移动捕获、桌面处理" 模式在 2026 年是考虑 Logseq + Joplin 的正确方式，考虑到移动端插件限制。这不是应对——而是知识工作实际发生的方式。移动用于输入（您有想法，您捕获它）。桌面用于综合（您处理捕获的素材）。本地 LLM 在综合时加入，正是其质量最重要的位置。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**意外用云端提供商配置 logseq-copilot 或 Jarvis。** 两款插件都将 "OpenAI" 作为默认提供商。仅本地设置需要切换到指向 `http://localhost:11434/v1` 的自定义 base URL。忘记意味着插件静默向 OpenAI 发送笔记——正是您从中迁移的失败模式。用抓包验证。',
          '**期望移动端有插件支持。** Logseq Mobile 和 Joplin Mobile 在 2026 年都不运行插件。如果您假设 AI 可在笔记到达的任何地方工作，那么第一次在火车上尝试摘要时就会撞墙。从第一天起规划移动端捕获、桌面端处理。',
          '**从另一台机器指向 `http://localhost:11434/v1`。** localhost 是按机器算的。如果在桌面端运行 Ollama 而在笔记本上运行 Logseq，您需要桌面端的局域网 IP（`http://192.168.1.20:11434/v1`）加上绑定到 `0.0.0.0:11434` 的 Ollama。',
          '**将 Joplin Jarvis 嵌入数据库同步到配额小的免费 WebDAV 等级。** 嵌入数据库每 5,000 条笔记增长约 150–250 MB。免费等级（Dropbox 2 GB）在笔记本规模下很快达到限制。当笔记本超过约 5,000 条时，规划自托管 Joplin Server 或付费等级。',
          '**不运行一次审计抓包。** 两款插件都开源且表现良好，但您的堆栈仅在本地的最终证明是在 AI 使用期间运行 Wireshark / Little Snitch / 等同工具，验证零出站流量。设置后执行一次，记录结果，继续前进。',
          '**尝试将 Logseq + logseq-copilot 用于基于嵌入的检索。** logseq-copilot 在 2026 年没有图谱级嵌入索引。如果您需要 "询问我的整个图谱"，切换到 Joplin + Jarvis 或使用 Obsidian + Smart Connections。Logseq 在大纲器原生 AI 上出色，而非语义检索。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          'Logseq——[logseq.com](https://logseq.com) 和 [github.com/logseq/logseq](https://github.com/logseq/logseq)（开源大纲器；AGPL 3.0）。',
          'logseq-copilot——[github.com/logancyang/logseq-copilot](https://github.com/logancyang/logseq-copilot)（开源 Logseq 插件；AGPL 3.0）。',
          'Joplin——[joplinapp.org](https://joplinapp.org) 和 [github.com/laurent22/joplin](https://github.com/laurent22/joplin)（开源笔记本；AGPL 3.0）。',
          'Jarvis（Joplin）——[github.com/alondmnt/joplin-plugin-jarvis](https://github.com/alondmnt/joplin-plugin-jarvis)（开源 Joplin 插件；AGPL 3.0）。',
          'Ollama——[ollama.com](https://ollama.com) 和 [github.com/ollama/ollama](https://github.com/ollama/ollama)（本地 LLM 运行时；MIT）。',
          'Notion AI 隐私和数据处理——[notion.com/help/notion-ai-faqs](https://www.notion.com/help/notion-ai-faqs)（用于比较上下文的供应商文档）。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Logseq 能为 AI 用户替代 Notion 吗？',
            a: '散文页面和每日日志工作流可以。安装 logseq-copilot，指向 Ollama，您就在 Logseq 中拥有聊天、摘要和基于模板的生成——没有数据离开您的设备。差距是结构化数据库：Notion 的数据库视图（项目跟踪器、CRM）没有干净的 Logseq 对应。散文为主的用户完全替代 Notion；数据库为主的用户要么接受手动重构，要么将特定数据库保留在 Notion 中（无 AI），同时将散文移至 Logseq。',
          },
          {
            q: 'Joplin 支持本地 AI 插件吗？',
            a: '是。2026 年推荐的插件是 Jarvis，它在整个笔记本上提供聊天、摘要和基于嵌入的语义检索。配置 Jarvis 使用 `http://localhost:11434/v1` 的 Ollama 作为聊天，使用 `http://localhost:11434/v1` 加 `nomic-embed-text` 作为嵌入。其他 Ollama 兼容的 Joplin 插件存在但 Jarvis 维护最活跃且最完整。',
          },
          {
            q: '哪个无云同步更好——Logseq 还是 Joplin？',
            a: 'Joplin 拥有更广和更精致的无云同步故事。Joplin 支持自托管 Joplin Server、WebDAV、Nextcloud，加上任何后端之上的一等 E2EE。Logseq 内置 Git 同步（对开发者优秀）并与 Syncthing 或 iCloud Drive 协作，但缺少 Joplin Server 的自托管对应方案。对于希望可审计本地同步的团队，Joplin Server 是更好路径；对于希望 Git 跟踪历史的开发者，Logseq Git 同步是更好路径。',
          },
          {
            q: '我能从 Notion 迁移到 Logseq 并保留 AI 功能吗？',
            a: '迁移移动内容，而非 Notion AI 订阅。从 Notion 导出为 Markdown，导入 Logseq，然后安装 logseq-copilot 并用 Ollama 配置——AI 层在本地重建。Logseq 比 Joplin 更好地保留 Notion 的块级嵌套，因为两款工具都使用列表缩进的块作为原语。Notion AI 功能（自动填充、数据库的智能属性）没有直接的 Logseq 对应——这些工作流需要用 logseq-copilot 提示词或脚本重建。',
          },
          {
            q: 'Logseq 完全离线工作吗？',
            a: '是。Logseq 是无需云端组件的本地桌面应用。图谱是 Markdown 文件的文件夹；应用在本地读写。仅在同步到远程（Git push、Syncthing 对等发现、Logseq Sync）和将 logseq-copilot 对接云端 LLM 提供商时需要网络——后者可选。使用 Ollama 作为 LLM 提供商时，整个堆栈在离线下运行。',
          },
          {
            q: 'Joplin 的 AI 插件和 Obsidian 一样成熟吗？',
            a: 'Obsidian 有更多 AI 插件和更多并发维护者。Joplin 插件较少但 Jarvis 功能完整且活跃维护——在单插件中覆盖聊天、摘要和基于嵌入的检索。对于多数用户，Jarvis 在 Joplin 的纯 Markdown 笔记本上等于或超过 Obsidian Copilot + Smart Connections 组合；对于希望插件多样性（模板引擎、角色聊天、MOC 生成器）的高级用户，Obsidian 仍有更多选项。',
          },
          {
            q: 'AI 加每日日志哪个更好——Logseq 还是 Joplin？',
            a: 'Logseq。每日日志是 Logseq 中的内置原语——每天自动获得日志页面、块成为一等公民、logseq-copilot 输出成为提示词下方的嵌套块。每日日志 AI 工作流（日终摘要、周回顾、心情标签）感觉原生。Joplin 能用按月笔记本和 Jarvis 提示词复制，但摩擦更高。',
          },
          {
            q: '我能在多个设备上使用同一 vault 吗？',
            a: '是——两款工具都通过同步层支持多设备使用。Logseq：Git、Syncthing、iCloud Drive 或 Logseq Sync。Joplin：Joplin Cloud、自托管 Joplin Server、WebDAV、Nextcloud、Dropbox 或 OneDrive。注意：AI 插件仅在桌面端运行。vault 内容同步到移动端，但 logseq-copilot 和 Jarvis 不在那里运行。规划桌面 AI、移动捕获。',
          },
          {
            q: 'AI 插件能与 Joplin Mobile 或 Logseq Mobile 协作吗？',
            a: '不能——两款工具在 2026 年都不支持移动端插件。Logseq Mobile 和 Joplin Mobile 是同步 vault 的读写面，但插件运行时（Node.js / Electron）不存在于移动应用中。AI 功能（logseq-copilot、Jarvis）仅在桌面端运行。如果移动 AI 重要，替代方案是 Obsidian Mobile + LAN Ollama，或移动端捕获 + 桌面端处理。',
          },
          {
            q: '开源本地 AI 集成比 Notion AI 更安全吗？',
            a: '默认架构上是。Notion AI 按设计将笔记内容发送至 OpenAI——这是结构性的，而非配置选择。Logseq + logseq-copilot + Ollama 与 Joplin + Jarvis + Ollama 除非您明确配置云端 LLM 提供商，否则不向第三方发送任何数据。对于受数据安全法约束的中国数据、医疗、法律和新闻场景，这一区别有意义：本地堆栈无处理方、无跨境传输、无子处理方风险。可审计性也更简单——一次抓包证明 AI 使用期间零出站流量。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[Obsidian + 本地 LLM：将您的 vault 转变为第二大脑的 5 款插件（2026）](/zh/power-local-llm/local-llm-with-obsidian-2026) ——面向 Obsidian 用户的姊妹文章；这些读者通常对比选择的高级用户替代方案。',
          '[本地 LLM 个人知识库 2026](/zh/power-local-llm/local-llm-personal-knowledge-base-2026) ——Logseq 和 Joplin 喂入的更广 PKB 架构；覆盖 RAG 层、捕获管道和 10K+ 项目工作流。',
          '[用本地 LLM 替代 Grammarly 和 Notion AI（2026）](/zh/power-local-llm/replace-grammarly-notion-ai-with-local) ——专门聚焦 Notion AI 离开路径的相邻 SaaS 替代指南。',
          '[用本地 AI 代理替代 Zapier：每月节省 /月 的 5 个工作流（2026）](/zh/power-local-llm/replace-zapier-with-local-ai-agents) ——为整合 SaaS 依赖的读者提供的相邻生产力堆栈替代。',
          '[2026 年最佳本地 LLM](/zh/local-llms/best-local-llms-2026) ——为 logseq-copilot 和 Jarvis 背后的聊天和嵌入模型选择提供模型权威。',
          '[本地 LLM 软件目录 2026](/zh/power-local-llm/local-llm-software-directory-2026) ——Logseq、Joplin、Ollama、logseq-copilot 和 Jarvis 的目录条目，含许可和链接。',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Logseq وJoplin مع نماذج اللغة المحلية: ملاحظات ذكية بدون مزامنة سحابية (2026)',
    seoTitle: 'Logseq وJoplin مع LLM محلي: بديل خاص لـ Notion AI 2026',
    intro:
      '[Logseq](https://logseq.com) و[Joplin](https://joplinapp.org) هما تطبيقا الملاحظات مفتوحا المصدر في 2026 اللذان يتكاملان بسلاسة مع نماذج اللغة المحلية دون الحاجة إلى الاتصال بالسحابة. يُشغّل Logseq ملحق logseq-copilot مع [Ollama](https://ollama.com) للمحادثة الأصيلة في أداة التخطيط الهرمي والذكاء الاصطناعي لليوميات؛ بينما يُشغّل Joplin ملحق Jarvis مع Ollama للدردشة المدركة للملاحظات والملخصات والاسترجاع المدعوم بالتضمينات. كلا التطبيقين أكثر امتثالاً للائحة حماية البيانات العامة GDPR من Notion AI بحكم هندستهما الافتراضية — إذ يُرسل Notion محتوى الملاحظات إلى OpenAI، بينما لا يُرسل Logseq ولا Joplin أي شيء ما لم تُهيئهما على ذلك. القيد الرئيسي في 2026 هو الجوّال: لا يدعم أيٌّ منهما الملحقات على iOS أو Android، وبذلك تعمل ميزات الذكاء الاصطناعي على سطح المكتب فقط. يقيّم هذا الدليل كلا الأداتين من حيث نضج ملحقات الذكاء الاصطناعي ومسارات المزامنة بدون سحابة وتوافق الجوّال ومسار الانتقال من Notion، مع خطوات تهيئة ملموسة لـ Ollama.',
    metaDescription:
      'Logseq مع logseq-copilot وJoplin مع Jarvis — كلاهما على Ollama بدلاً من Notion AI. مزامنة بدون سحابة، امتثال GDPR، وفجوة ملحقات iOS وAndroid موضَّحة.',
    twitterDescription:
      'ملاحظات مفتوحة المصدر + ذكاء اصطناعي محلي بدون سحابة: Logseq مع logseq-copilot، Joplin مع Jarvis، كلاهما على Ollama. شرح فجوة ملحقات الجوّال. مسار الانتقال من Notion. صديق للخصوصية افتراضياً.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'nomic-embed-text',
      'mxbai-embed-large',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16+ GB unified memory)',
      'PC with RTX 3060 12 GB or RTX 4060 8 GB',
      'PC with 16 GB RAM (CPU-only fallback)',
    ],
    audience:
      'مستخدمو تطبيقات الملاحظات مفتوحة المصدر، والعمال المعرفيون المهتمون بالخصوصية، والمهنيون في الاتحاد الأوروبي ومنطقة DACH الخاضعون للائحة GDPR، والمنتقلون من Notion AI، وكتّاب اليوميات اليومية الذين يريدون ميزات ذكاء اصطناعي دون إرسال ملاحظاتهم إلى OpenAI أو Anthropic.',
    readTime: '14 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ملحق Logseq Joplin LLM محلي',
    targetKeywords: [
      'logseq local llm',
      'joplin local ai',
      'logseq copilot ollama',
      'joplin jarvis plugin',
      'open source notes ai privacy',
      'notion ai alternative gdpr',
    ],
    leadAnswerBlock:
      '**بالنسبة لمعظم القراء في 2026، يُعدّ Logseq + logseq-copilot أو Joplin + Jarvis مقترناً بـ Ollama هو البديل الخاص الصحيح لـ Notion AI.** اختر Logseq إن كنت تعيش في سير عمل اليوميات اليومية وأداة التخطيط الهرمي؛ واختر Joplin إن أردت ملاحظات Markdown عادية مع مزامنة مشفرة من طرف إلى طرف. يتصلان معاً بـ Ollama على `http://localhost:11434/v1`، وكلاهما يدعم الدردشة مع الملاحظة الحالية خارج الصندوق، وكلاهما مفتوح المصدر بموجب تراخيص متساهلة (Logseq AGPL 3.0، Joplin AGPL 3.0). لا يُرسل أيٌّ منهما محتوى الملاحظات إلى السحابة ما لم تُهيّئ موفر سحابياً في الملحق صراحةً. الحد الصعب في 2026: لا تدعم أيٌّ من الأداتين الملحقات على iOS أو Android، لذا تعمل ميزات الذكاء الاصطناعي على سطح المكتب فقط — يتحول الجوّال إلى سطح التقاط يدوي تعالجه بالذكاء الاصطناعي على سطح المكتب لاحقاً. للانتقال من Notion AI، يمتلك Logseq مسار الاستيراد الأنظف عبر تصدير Markdown الأصيل من Notion؛ استيراد Joplin من Notion يعمل لكنه يفقد البنية على مستوى الكتل.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل مزيج من ملحقات Logseq أو Joplin للذكاء الاصطناعي المحلي الخاص في 2026؟',
        answer:
          'Logseq + logseq-copilot أو Joplin + Jarvis، كلاهما موجَّه إلى Ollama على `http://localhost:11434/v1`. يُضيف logseq-copilot كتل دردشة وأوامر slash داخل Logseq؛ بينما يُضيف Jarvis دردشةً وتلخيصاً وإجابات على الأسئلة مدعومةً بالتضمينات داخل Joplin. كلا الملحقين مفتوح المصدر بموجب AGPL، وكلاهما يعمل محلياً افتراضياً، وكلاهما يدعم Ollama أصيلاً. النموذج الموصى به للدردشة في 2026 هو Llama 3.2 3B (افتراضي) أو Phi-4 Mini لأجهزة ذاكرة RAM بسعة 8 غيغابايت. للاسترجاع المدعوم بالتضمينات (Joplin Jarvis فقط — لا يكشف Logseq حالياً ملحق تضمين لكامل مخزن الرسم البياني في 2026)، استخدم nomic-embed-text أو mxbai-embed-large. دعم ملحقات الجوّال: غير متاح على أيٍّ من الأداتين في 2026 — تعمل ميزات الذكاء الاصطناعي على سطح المكتب فقط.',
        bullets: [
          'Logseq + logseq-copilot — كتل دردشة بأوامر slash داخل أداة التخطيط الهرمي. الأفضل لسير عمل اليوميات والرسم البياني.',
          'Joplin + ملحق Jarvis — شريط جانبي للدردشة والتلخيص والبحث الدلالي المدعوم بالتضمينات. الأفضل لملاحظات Markdown العادية مع مزامنة قوية.',
          'يتصل كلا الملحقين بـ Ollama عبر `http://localhost:11434/v1` — لا استدعاءات سحابية افتراضياً.',
          'مزامنة Logseq بدون سحابة: Git (مدمج) أو مزامنة ملفات محلية عبر Syncthing/iCloud Drive. مزامنة Joplin: Joplin Cloud مشفرة من طرف إلى طرف، أو Joplin Server ذاتي الاستضافة، أو Nextcloud / WebDAV / Dropbox / OneDrive مع E2EE.',
          'فجوة ملحقات الجوّال (2026): لا يدعم Logseq Mobile ولا Joplin Mobile الملحقات. ميزات الذكاء الاصطناعي حصرية لسطح المكتب — الجوّال للالتقاط، وسطح المكتب للمعالجة.',
          'الانتقال من Notion AI: Logseq لديه مسار استيراد Markdown أنظف؛ Joplin يفقد بنية مستوى الكتل لكنه يحافظ على المحتوى. كلاهما يوقف إرسال البيانات إلى OpenAI فور التبديل.',
          'نماذج Ollama الموصى بها: دردشة — Llama 3.2 3B أو Phi-4 Mini؛ تضمينات (Joplin Jarvis فقط) — nomic-embed-text أو mxbai-embed-large.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'Logseq أم Joplin: أيهما تختار؟', anchor: '#which-tool' },
      { label: 'جدول مقارنة الأدوات', anchor: '#comparison-table' },
      { label: 'ملحقات ذكاء اصطناعي لـ Logseq مع Ollama', anchor: '#logseq-ai' },
      { label: 'ملحقات ذكاء اصطناعي لـ Joplin مع Ollama', anchor: '#joplin-ai' },
      { label: 'الحجة الخصوصية ضد Notion AI', anchor: '#vs-notion' },
      { label: 'المزامنة بدون سحابة: Git وSyncthing وJoplin Server', anchor: '#sync' },
      { label: 'فجوة ملحقات الجوّال: ما يعمل وما لا يعمل', anchor: '#mobile' },
      { label: 'GDPR وإقامة البيانات في الاتحاد الأوروبي', anchor: '#gdpr' },
      { label: 'الانتقال من Notion AI إلى Logseq أو Joplin', anchor: '#notion-migration' },
      { label: 'سير عمل نموذجية: اليوميات وملاحظات الاجتماعات والبحث', anchor: '#workflows' },
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
          '**Logseq + logseq-copilot هو المزيج الموصى به لمستخدمي أداة التخطيط الهرمي / اليوميات اليومية.** يُضيف logseq-copilot كتل دردشة وأوامر slash داخل Logseq، مُهيَّأ للعمل مع Ollama على `http://localhost:11434/v1`. الأنسب للمستخدمين الذين يعيشون بالفعل في نموذج صفحة يوميات Logseq.',
          '**Joplin + Jarvis هو المزيج الموصى به لمستخدمي ملاحظات Markdown العادية.** يُضيف Jarvis شريطاً جانبياً للدردشة وأوامر تلخيص وبحثاً دلالياً مدعوماً بالتضمينات عبر دفتر الملاحظات. الأنسب للمستخدمين الذين يريدون دفتراً بأسلوب Notion مع مزامنة مشفرة من طرف إلى طرف قوية.',
          '**كلتا الأداتين مفتوحتا المصدر بموجب AGPL 3.0** — الترخيص متساهل للاستخدام الشخصي والتجاري؛ القيد الوحيد هو الإفصاح عن الكود المصدري إن عدّلتهما واستضفتهما علناً.',
          '**وضعية الخصوصية تتفوق على Notion AI بالهندسة.** يُرسل Notion AI محتوى الملاحظات إلى OpenAI بحكم التصميم؛ لا يُرسل Logseq ولا Joplin أي شيء ما لم تُهيّئ موفراً سحابياً صراحةً. هذا فارق ذو معنى في الرعاية الصحية والقانون والصحافة وأي سياق خاضع للائحة GDPR.',
          '**فجوة ملحقات الجوّال هي القيد الأكبر في 2026.** لا يدعم Logseq Mobile ولا Joplin Mobile الملحقات. تعمل ميزات الذكاء الاصطناعي على سطح المكتب فقط — يتحول الجوّال إلى سطح التقاط (كتابة الملاحظات)، وتجري المعالجة (التلخيص والدردشة والاسترجاع) لاحقاً على سطح المكتب.',
          '**المزامنة بدون سحابة مباشرة لكن كل أداة تتبع نهجاً مختلفاً.** يمتلك Logseq مزامنة Git مدمجة ويعمل بنظافة مع Syncthing أو iCloud Drive. يمتلك Joplin Joplin Cloud مشفراً من طرف إلى طرف أو Joplin Server ذاتي الاستضافة أو أي خلفية WebDAV / Nextcloud / Dropbox مع E2EE فوقها.',
          '**الانتقال من Notion AI رحلة في اتجاه واحد تتعامل معها كلتا الأداتين.** يستورد Logseq تصدير Markdown من Notion بدقة أعلى على مستوى الكتل؛ يستورد Joplin المحتوى لكنه يُسطّح الكتل المتداخلة. بعد الانتقال، لا تغادر أي ملاحظة جهازك ما لم تختر ذلك.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**الأدوات المغطاة:** Logseq (أداة التخطيط الهرمي، مع اليومية كسطح الالتقاط الافتراضي) وJoplin (دفتر Markdown عادي). [Obsidian](https://obsidian.md) مذكور كمرجع — دليله المخصص مرتبط في النهاية.',
          '**ملحقات الذكاء الاصطناعي الرئيسية:** logseq-copilot لـ Logseq؛ Jarvis (وملحقات مشابهة متوافقة مع Ollama) لـ Joplin.',
          '**خلفية نموذج اللغة:** Ollama (موصى به) على `http://localhost:11434/v1`، أو أي نقطة نهاية محلية متوافقة مع OpenAI ([LM Studio](https://lmstudio.ai)، خادم llama.cpp، vLLM).',
          '**نماذج الدردشة الموصى بها:** Llama 3.2 3B، Phi-4 Mini، Gemma 3 4B (أجهزة بذاكرة RAM 16 غيغابايت)؛ Qwen3 1.7B (ذاكرة RAM 8 غيغابايت).',
          '**نماذج التضمينات الموصى بها (Joplin Jarvis فقط):** nomic-embed-text (768 بُعداً، سريع)، mxbai-embed-large (1024 بُعداً، أكثر دقة).',
          '**التراخيص:** Logseq AGPL 3.0؛ Joplin AGPL 3.0؛ logseq-copilot AGPL 3.0 (نفس مؤلف Copilot for Obsidian، Logan Yang)؛ Jarvis (Joplin) AGPL 3.0.',
          '**مسارات المزامنة:** Logseq — Git مدمج، Syncthing، iCloud Drive، Logseq Sync (مدفوع). Joplin — Joplin Cloud (مدفوع، E2EE)، Joplin Server ذاتي الاستضافة، WebDAV، Nextcloud، Dropbox، OneDrive (جميعها تدعم E2EE).',
          '**ملحقات الجوّال:** غير مدعومة في أيٍّ من الأداتين في 2026 — الذكاء الاصطناعي على سطح المكتب فقط.',
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: 'Logseq أم Joplin: أيهما يجب أن تختار؟',
        content:
          '**اختر Logseq إن كان سير عملك في الملاحظات يقوم أساساً على اليوميات اليومية أو الرسم البياني؛ واختر Joplin إن كانت ملاحظاتك وثائق Markdown عادية مع احتياجات مزامنة قوية.** للأداتين نماذج ذهنية مختلفة: Logseq أداة تخطيط هرمي مع روابط ثنائية الاتجاه وصفحة يومية كسطح التقاط افتراضي؛ Joplin دفتر ملفات Markdown مع علامات وبحث ومزامنة مشفرة من طرف إلى طرف. تعكس منظومة ملحقات الذكاء الاصطناعي في 2026 ذلك: يندمج logseq-copilot في كتل أداة التخطيط الهرمي؛ يندمج Jarvis في الشريط الجانبي لـ Joplin.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Logseq + logseq-copilot مناسب لسير عمل أداة التخطيط الهرمي / اليوميات اليومية؛ Joplin + Jarvis مناسب لسير عمل دفتر Markdown العادي مع مزامنة مشفرة من طرف إلى طرف قوية.',
          },
          {
            type: 'plain-terms',
            text: 'كلتا الأداتين بديلان خاصان لـ Notion AI. يعتمد الاختيار في المقام الأول على طريقة كتابة ملاحظاتك. يتعامل Logseq مع الملاحظات كنقاط مرتبة ومتداخلة ويمنحك صفحة يومية تلقائياً — جيد للتفكير بصوت عالٍ والالتقاط بطابع زمني والتصفح في وضع الرسم البياني. يتعامل Joplin مع الملاحظات كوثائق Markdown كاملة في دفاتر — جيد للكتابة المطوّلة والتوثيق المنظم والأجهزة التي تحتاج مزامنة مشفرة. كلاهما يعمل مع نموذج لغة محلي عبر Ollama، وكلاهما مفتوح المصدر، وكلاهما يتوقف عن إرسال البيانات لأي طرف لحظة التبديل من Notion.',
          },
        ],
        decisionBlock: {
          title: 'القرار: Logseq أم Joplin؟',
          localIf: [
            'تحتفظ بيومية يومية وتريد من الذكاء الاصطناعي تلخيص / تجميع / ربط الأيام ← Logseq + logseq-copilot',
            'تريد روابط خلفية بأسلوب الرسم البياني وكتل أداة التخطيط الهرمي مع دردشة مضمّنة ← Logseq + logseq-copilot',
            'تكتب ملاحظات Markdown مطوّلة (بحث، توثيق، مسودات) ← Joplin + Jarvis',
            'تحتاج مزامنة مشفرة من طرف إلى طرف بين الأجهزة ← Joplin (أفضل اقتراح E2EE)',
            'تريد بحثاً دلالياً مدعوماً بالتضمينات عبر دفتر الملاحظات ← Joplin + Jarvis (لا يوجد ما يعادله في Logseq في 2026)',
            'تنتقل من Notion وتريد أعلى دقة على مستوى الكتل ← Logseq',
          ],
          cloudIf: [
            'تحتاج ميزات الذكاء الاصطناعي على iOS أو Android (ليس الالتقاط فقط) ← لا تدعم أيٌّ من الأداتين الملحقات على الجوّال في 2026؛ فكّر في Obsidian Mobile + Ollama على الشبكة المحلية مع Tailscale',
            'تحتاج تعاوناً متعدد المستخدمين في الوقت الفعلي على نفس المخزن ← كلٌّ من Logseq وJoplin مصمّمان للمستخدم الفردي؛ التحرير التعاوني ليس في نموذجهما',
            'تحتاج جودة GPT-5.5 في كل استجابة دردشة ← المكافئات السحابية (المكدس المحلي يصل إلى ~70% من القدرة)',
          ],
          quick: [
            'يومية يومية + أداة تخطيط هرمي: Logseq + logseq-copilot',
            'دفتر Markdown عادي + مزامنة E2EE: Joplin + Jarvis',
            'ميزات الذكاء الاصطناعي على الجوّال: غير قابل للتطبيق في 2026 — التقاط على الجوّال، معالجة على سطح المكتب',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'نمط شائع هو تشغيل كلتيهما: Logseq لليومية اليومية والالتقاط السريع (كل شيء بطابع زمني)، Joplin للملاحظات المرجعية الدائمة (أطول، موسومة، مزامنة مشفرة). الأداتان لا تتشاركان قاعدة بيانات، لكن لا إحداهما ثقيلة — تشغيل كلتيهما يُضيف نحو 200–400 ميغابايت مجمّعة من الذاكرة. استخدم Logseq للتفكير وJoplin للمعرفة، مع نموذج اللغة المحلي متاحاً في كليهما.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول مقارنة الأدوات',
        content:
          '**المحاور الأربعة الأكثر أهمية: عمق ملحقات الذكاء الاصطناعي، المزامنة بدون سحابة، دعم ملحقات الجوّال، وسير العمل الأنسب.** Obsidian مُدرج كمرجع — القراء الذين يقارنون الأدوات الثلاث يجب أن يقرأوا أيضاً الدليل المخصص لـ Obsidian المرتبط في النهاية.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يتصدر Logseq في الذكاء الاصطناعي الأصيل لأداة التخطيط الهرمي والمزامنة بـ Git؛ يتصدر Joplin في المزامنة المشفرة من طرف إلى طرف والاسترجاع المدعوم بالتضمينات؛ يتصدر Obsidian في اتساع الملحقات بتكلفة مزامنة مدفوعة وترخيص غير OSI.',
          },
        ],
        columns: ['الأداة', 'ملحقات الذكاء الاصطناعي', 'المزامنة (بدون سحابة)', 'الجوّال', 'الأنسب لـ'],
        rows: [
          { 'الأداة': '[Logseq](https://logseq.com)', 'ملحقات الذكاء الاصطناعي': 'logseq-copilot (كتل دردشة، أوامر slash)، متغيرات ملحق GPT-3', 'المزامنة (بدون سحابة)': 'Git مدمج، Syncthing، iCloud Drive، Logseq Sync (مدفوع E2EE)', 'الجوّال': 'تطبيق جوّال متاح؛ الملحقات غير مدعومة على الجوّال (2026)', 'الأنسب لـ': 'سير عمل اليومية اليومية + أداة التخطيط الهرمي' },
          { 'الأداة': '[Joplin](https://joplinapp.org)', 'ملحقات الذكاء الاصطناعي': 'Jarvis (دردشة، تلخيص، إجابات مدعومة بالتضمينات)، تكاملات متوافقة مع [Ollama](https://ollama.com)', 'المزامنة (بدون سحابة)': 'Joplin Cloud (مدفوع E2EE)، Joplin Server ذاتي الاستضافة، WebDAV، Nextcloud، Dropbox، OneDrive (جميعها متوافقة مع E2EE)', 'الجوّال': 'تطبيق جوّال متاح؛ الملحقات غير مدعومة على الجوّال (2026)', 'الأنسب لـ': 'دفتر Markdown + مزامنة E2EE' },
          { 'الأداة': '[Obsidian](https://obsidian.md) (مرجع)', 'ملحقات الذكاء الاصطناعي': 'Smart Connections، Copilot، Text Generator، Local GPT، BMO Chatbot', 'المزامنة (بدون سحابة)': 'Git، Syncthing، iCloud Drive، Obsidian Sync (مدفوع E2EE)', 'الجوّال': 'تطبيق الجوّال يدعم معظم الملحقات؛ يُطلب وصول LAN إلى Ollama', 'الأنسب لـ': 'المستخدمون المتقدمون مع ملحقات مدفوعة / مزامنة مدفوعة' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'عمود الجوّال هو المُمايز الأكبر في 2026. يُشغّل Obsidian Mobile معظم الملحقات (بما فيها Smart Connections وCopilot) حين يكون Ollama متاحاً على الشبكة المحلية أو عبر Tailscale. لا يُشغّل Logseq Mobile ولا Joplin Mobile أي ملحق — ميزات الذكاء الاصطناعي حصرية لسطح المكتب تماماً. إن كان الذكاء الاصطناعي على الجوّال مهماً، خطّط للالتقاط على الجوّال والمعالجة على سطح المكتب، أو ألقِ نظرة على Obsidian Mobile.',
          },
        ],
      },
      logseqAi: {
        id: 'logseq-ai',
        title: 'ملحقات ذكاء اصطناعي لـ Logseq مع Ollama',
        content:
          '**الملحق الموصى به للذكاء الاصطناعي في Logseq لعام 2026 هو logseq-copilot — نفس المؤلف المسؤول عن Copilot for Obsidian، مُهيَّأ للإشارة إلى Ollama.** يُضيف كتل دردشة (أمر slash `/copilot`)، وإعادة كتابة مضمّنة، وموجّهات مدركة لليومية مباشرةً داخل أداة تخطيط Logseq الهرمي. لا يوجد في Logseq حالياً ما يعادل Smart Connections (فهرس تضمين لكامل المخزن)، لذا الربط الدلالي عبر الرسم البياني لا يزال مسألة غير محلولة في 2026.',
        items: [
          '**ما يفعله:** كتل دردشة عبر أوامر slash، توليد محتوى مضمّن، موجّهات مدركة لليومية تأخذ الصفحة النشطة أو الكتل المحددة كسياق.',
          '**التثبيت:** الإعدادات ← الملحقات ← السوق ← ابحث عن "logseq-copilot" ← تثبيت + تمكين. المؤلف: Logan Yang (نفس مؤلف Copilot for Obsidian).',
          '**التهيئة مع Ollama:** الإعدادات ← logseq-copilot ← API Provider ← "Custom OpenAI" أو "Ollama" ← عنوان URL الأساسي للـ API `http://localhost:11434/v1` ← النموذج `llama3.2:3b` (أو أي اسم نموذج Ollama).',
          '**أوامر slash:** اكتب `/copilot` في أي كتلة لبدء المحادثة. تظهر المخرجات ككتل متداخلة تحت الموجّه — أصيل لأداة التخطيط الهرمي، وبذلك تصبح الاستجابات محتوى خطة من الدرجة الأولى.',
          '**الموجّهات المستندة إلى التحديد:** حدد الكتل ← شغّل قالب موجّه مخصص ("لخّص هذه في ثلاث نقاط") ← تُضاف النتيجة أسفل التحديد.',
          '**التكامل مع اليومية:** أشِر بقالب إلى صفحة اليومية ← يصبح ملخص نهاية اليوم وأسئلة المراجعة الأسبوعية أو توسيع الروابط الخلفية إجراءات بضغطة مفتاح واحدة.',
          '**ما لا يفعله (2026):** لا يوجد فهرس تضمين لكامل الرسم البياني. تبقى الروابط الخلفية في Logseq صريحة؛ الاكتشاف الدلالي بين الصفحات لا يزال غير مدعوم بأي ملحق Logseq مفتوح المصدر.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'مخرجات logseq-copilot مجرد كتل — نفس العنصر الأساسي لكل شيء آخر في Logseq. هذه هي الميزة الرئيسية على Obsidian: استجابات الذكاء الاصطناعي ليست نصاً عائماً في الشريط الجانبي؛ بل عقد في الرسم البياني يمكنك ربطها ووسمها والاستعلام عنها وإعادة تحريرها. استخدم `/copilot` بكثافة للالتقاط، ثم أعد هيكلة كتل الاستجابة كما تفعل مع أي ملاحظة أخرى.',
          },
        ],
      },
      joplinAi: {
        id: 'joplin-ai',
        title: 'ملحقات ذكاء اصطناعي لـ Joplin مع Ollama',
        content:
          '**الملحق الموصى به للذكاء الاصطناعي في Joplin لعام 2026 هو Jarvis — يوفر دردشةً وتلخيصاً وبحثاً دلالياً مدعوماً بالتضمينات عبر دفتر الملاحظات بأكمله، كل ذلك قابل للتهيئة لاستخدام Ollama.** Jarvis هو أقرب مكافئ لـ Joplin لدمج Smart Connections + Copilot for Obsidian معاً: ملحق واحد، تهيئة واحدة، وظيفتان.',
        items: [
          '**ما يفعله:** شريط جانبي للدردشة، أمر "Ask Jarvis" عبر دفتر الملاحظات (استرجاع مدعوم بالتضمينات)، تلخيص الملاحظة المحددة، توليد ملاحظات من موجّهات، موجّهات مخصصة على التحديدات.',
          '**التثبيت:** الأدوات ← الخيارات ← الملحقات ← ابحث عن "Jarvis" ← تثبيت + تمكين. المؤلف: Alon Bukai.',
          '**التهيئة لـ Ollama (دردشة):** الخيارات ← Jarvis ← Model Provider ← "OpenAI" مع عنوان URL أساسي مخصص ← العنوان `http://localhost:11434/v1` ← النموذج `llama3.2:3b` ← مفتاح API أي سلسلة غير فارغة (يتجاهله Ollama).',
          '**التهيئة لـ Ollama (التضمينات):** الخيارات ← Jarvis ← Notes Database ← تمكين Database ← Embedding Model ← "OpenAI" مع عنوان URL أساسي مخصص ← العنوان `http://localhost:11434/v1` ← النموذج `nomic-embed-text`.',
          '**الفهرسة الأولية:** يُضمّن Jarvis كل ملاحظة في قاعدة البيانات عند التمكين لأول مرة. الوقت على Mac M3 Pro مع nomic-embed-text: 1,000 ملاحظة ~3 دقائق، 5,000 ملاحظة ~15 دقيقة، 10,000 ملاحظة ~35 دقيقة. إعادة التضمين عند الحفظ تدريجية.',
          '**سير عمل "Ask Jarvis":** الأدوات ← Jarvis ← Ask Jarvis ← اكتب سؤالاً ← يسترجع Jarvis الملاحظات ذات الصلة بتشابه التضمينات ويُرسل المقتطفات مع سؤالك إلى نموذج الدردشة. مكافئ لـ QA مخزن Copilot لـ Obsidian.',
          '**الأنسب لـ:** المستخدمين الذين يريدون ملحقاً واحداً يغطي الدردشة + الاسترجاع داخل Joplin دون إدارة ملحقين منفصلين.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'يخزّن Jarvis قاعدة بيانات التضمينات الخاصة به داخل قاعدة بيانات SQLite لـ Joplin. يتزايد حجم ملف قاعدة البيانات بنحو 150–250 ميغابايت لكل 5,000 ملاحظة مُضمَّنة بـ nomic-embed-text. إن كنت تزامن ملف تعريف Joplin عبر Joplin Cloud أو WebDAV، فستُدرج قاعدة بيانات التضمينات في المزامنة — خطّط لتكلفة عرض النطاق الترددي ووقت المزامنة. قاعدة بيانات التضمينات مشفرة أثناء النقل عند استخدام E2EE لـ Joplin.',
          },
        ],
      },
      vsNotion: {
        id: 'vs-notion',
        title: 'الحجة الخصوصية ضد Notion AI',
        content:
          '**يُرسل Notion AI محتوى الملاحظات إلى OpenAI بحكم التصميم — هذه هي الهندسة، وليست خياراً في الإعدادات.** حين تستخدم ميزات Notion AI على صفحة ما، يُرسل Notion محتوى الصفحة إلى خوادم OpenAI، تعالجه OpenAI، وتعود الاستجابة عبر Notion. تخضع البيانات لسياسات الخصوصية لدى OpenAI وNotion، وليس لنظام ملفاتك المحلي. بالنسبة للمستخدمين في سياقات منظَّمة (رعاية صحية، قانون، استشارات مالية، صحافة، بيانات الاتحاد الأوروبي الخاضعة للائحة GDPR)، هذه مشكلة هيكلية لا يحلها أي إعداد.',
        items: [
          '**هندسة Notion AI:** تغادر الملاحظات جهازك لمعالجتها بواسطة OpenAI. تخضع لشروط التعامل مع البيانات لدى OpenAI Enterprise (أفضل من OpenAI API القياسية)، لكنها لا تزال خارج بنيتك التحتية.',
          '**هندسة Logseq + logseq-copilot:** يعمل Logseq كتطبيق محلي، يُرسل الملحق الموجّهات إلى Ollama المحلي الخاص بك، لا يصل أي محتوى ملاحظات إلى طرف ثالث ما لم تُهيّئ صراحةً موفراً سحابياً في الملحق.',
          '**هندسة Joplin + Jarvis:** يعمل Joplin كتطبيق محلي، يُرسل Jarvis الموجّهات إلى Ollama المحلي الخاص بك، يعمل توليد التضمينات محلياً، لا يصل أي محتوى ملاحظات إلى طرف ثالث ما لم تُهيّئ صراحةً موفراً سحابياً في Jarvis.',
          '**إقامة البيانات:** مع Logseq أو Joplin + Ollama، يبقى كل بايت من محتوى الملاحظات على جهازك. مع Notion AI، يعبر محتوى الملاحظات خوادم OpenAI الموجودة في الولايات المتحدة بصرف النظر عن موقعك.',
          '**مسار التدقيق:** مع نماذج اللغة المحلية، يمكنك تشغيل التقاط حزم (Wireshark، Little Snitch، إلخ) مرةً واحدة بعد التثبيت والتحقق من صفر مكالمات صادرة أثناء استخدام الذكاء الاصطناعي. مع Notion AI، المكالمات الصادرة متأصلة — لا شيء للتحقق منه.',
          '**مخاطر المعالجين الفرعيين:** يرث Notion AI جميع المعالجين الفرعيين لـ OpenAI (Microsoft Azure كبنية تحتية رئيسية، بالإضافة إلى موردي الدعم). لدى Logseq وJoplin + Ollama صفر معالجين فرعيين لطبقة الذكاء الاصطناعي.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'الاختبار الأوضح لـ "هل تطبيق ملاحظاتي خاص حقاً؟" هو قطع الاتصال بالشبكة ومحاولة استخدام ميزات الذكاء الاصطناعي. Logseq + logseq-copilot + Ollama: يعمل بالكامل دون اتصال. Joplin + Jarvis + Ollama: يعمل بالكامل دون اتصال. Notion AI: يُعيد خطأ. افعل هذا الاختبار مرةً واحدة بعد الإعداد لتأكيد أن مكدسك يفعل ما تعتقد.',
          },
        ],
      },
      sync: {
        id: 'sync',
        title: 'المزامنة بدون سحابة: Git وSyncthing وJoplin Server',
        content:
          '**كلٌّ من Logseq وJoplin لديهما مسارات مزامنة متعددة لا تتطلب أبداً إسناد محتوى الملاحظات إلى سحابة طرف ثالث.** يعتمد الاختيار الصحيح على ما إذا كنت تريد صفر تهيئة (مزامنة مدفوعة)، أو تاريخاً يتبعه Git (ملائم للمطورين)، أو نظير إلى نظير (بدون خادم).',
        items: [
          '**Logseq — مزامنة Git المدمجة:** الإعدادات ← Sync ← تمكين Git auto-commit. يُؤكّد Logseq الرسم البياني على خادم Git مُهيَّأ وفق جدول زمني. يعمل مع GitHub / GitLab / Gitea ذاتي الاستضافة. تجعل التأكيدات بـ Markdown العادي التاريخ مقروءاً للبشر.',
          '**Logseq — Syncthing (نظير إلى نظير):** ثبّت Syncthing على كل جهاز، وأشِر إليه نحو مجلد رسم Logseq. مشفر من طرف إلى طرف، بدون خادم مركزي، بدون طرف ثالث. ممتاز للمزامنة بين أجهزة سطح المكتب؛ يعمل على Logseq Mobile حين يُبقي Syncthing-Fork (Android) أو Möbius Sync (iOS) المجلد محدّثاً.',
          '**Logseq — iCloud Drive:** احتفظ بمجلد رسم Logseq داخل iCloud Drive على macOS / iOS. المسار الأنظف على أجهزة Apple؛ البيانات مشفرة في السكون بواسطة Apple، لكن Apple تحتفظ بالمفاتيح (ليس zero-knowledge).',
          '**Logseq Sync (مدفوع E2EE):** المزامنة المشفرة من طرف إلى طرف من فريق Logseq. العيب: مدفوعة (المستوى Pro يتضمن المزامنة؛ الأسعار تتغير — راجع logseq.com)، لكنها توفر E2EE بدون تهيئة على جميع الأجهزة بما فيها الجوّال.',
          '**Joplin — Joplin Cloud (مدفوع E2EE):** المزامنة المستضافة من فريق Joplin مع التشفير من طرف إلى طرف. مجانية لكميات صغيرة من الملاحظات؛ تتدرج المستويات المدفوعة. مستضافة في الاتحاد الأوروبي. ملائمة وصديقة للتدقيق.',
          '**Joplin — Joplin Server ذاتي الاستضافة:** شغّل صورة Docker لـ Joplin Server على NAS / VPS / خادم منزلي. تشفير من طرف إلى طرف من عميل إلى عميل؛ الخادم يخزّن نصاً مشفراً. الخيار الأفضل للمؤسسات التي تريد ملكية كاملة لبنية المزامنة التحتية.',
          '**Joplin — WebDAV / Nextcloud / Dropbox / OneDrive:** يدعم Joplin أي نقطة نهاية WebDAV، بالإضافة إلى دعم من الدرجة الأولى لـ Nextcloud وDropbox وOneDrive. دائماً مكّن E2EE المدمج في Joplin فوقها — هؤلاء الموفرون يرون نصاً مشفراً فقط.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Joplin Server ذاتي الاستضافة هو الجواب للمؤسسات التي تريد مزامنة قابلة للتدقيق في المبنى دون الوثوق بسحابة طرف ثالث. شغّله على VPS صغير أو خادم منزلي، أشِر جميع العملاء إليه، مكّن E2EE — الخادم يحتفظ بنص مشفر فقط وأنت تتحكم في المضيف. هذا أسهل بكثير من استضافة Notion ذاتياً (غير مدعوم رسمياً) أو بنية Obsidian Sync التحتية.',
          },
        ],
      },
      mobile: {
        id: 'mobile',
        title: 'فجوة ملحقات الجوّال: ما يعمل وما لا يعمل',
        content:
          '**لا يدعم Logseq Mobile ولا Joplin Mobile الملحقات في 2026 — هذا هو القيد الأكبر مقارنةً بـ Obsidian.** التطبيقات المحمولة أسطح التقاط وقراءة وظيفية، لكن logseq-copilot وJarvis يعملان على سطح المكتب فقط. يجب أن يفترض أي سير عمل للذكاء الاصطناعي أن الجوّال للالتقاط وسطح المكتب للمعالجة.',
        items: [
          '**Logseq Mobile (iOS / Android):** عرض وتحرير والتقاط الملاحظات؛ تعمل الروابط الخلفية وعرض الرسم البياني؛ تعمل المزامنة. لا تعمل الملحقات — بما فيها logseq-copilot. ميزات الذكاء الاصطناعي غير متاحة على الجوّال.',
          '**Joplin Mobile (iOS / Android):** عرض وتحرير والتقاط الملاحظات؛ تعمل العلامات والبحث؛ تعمل المزامنة (بما فيها E2EE). لا تعمل الملحقات — بما فيها Jarvis. ميزات الذكاء الاصطناعي غير متاحة على الجوّال.',
          '**نمط بديل: التقاط على الجوّال، معالجة على سطح المكتب.** اكتب ملاحظات بحرية على الجوّال. حين تصل إلى سطح المكتب، شغّل logseq-copilot أو Jarvis لتلخيص المحتوى المُلتقط وتوسيعه وربطه والاستعلام عنه.',
          '**نمط بديل: خادم منزلي + سطح مكتب بعيد.** شغّل logseq-copilot أو Jarvis على سطح مكتب في منزلك، ادخل إلى ذلك سطح المكتب عبر Tailscale + سطح مكتب بعيد / نفق SSH من الجوّال حين تحتاج ذكاءً اصطناعياً. يُضيف تكلفة إعداد؛ نادراً ما يستحق للمستخدمين غير المتكررين.',
          '**نمط بديل: التحول إلى Obsidian Mobile لحالات استخدام الذكاء الاصطناعي.** يُشغّل Obsidian Mobile معظم الملحقات. إن كان الذكاء الاصطناعي على الجوّال حيوياً، هذه هي الإجابة الأبسط — بتكلفة تغيير الأداة.',
          '**لماذا توجد الفجوة:** كلٌّ من Logseq وJoplin يُشغّلان محركَي ملحقاتهما كسياقات Node.js / Electron حصرية لسطح المكتب. التطبيقات المحمولة أصيلة (Logseq Capacitor، Joplin React Native) ولا تدمج وقت تشغيل الملحقات. إغلاق الفجوة يتطلب إعادة كتابة هندسة الملحقات — لم يُشِر أي فريق إلى ذلك لعام 2026.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'إن كانت حالة استخدام الذكاء الاصطناعي لديك أساساً على الجوّال (مثلاً، إملاء ملاحظات أثناء التنقل والرغبة في تلخيصها فوراً)، فـ Logseq وJoplin ليسا الأداتين الصحيحتين حالياً — Obsidian Mobile + Ollama على الشبكة المحلية هو الحل. إن كانت حالة استخدامك أساساً على سطح المكتب مع التقاط على الجوّال (النمط الأكثر شيوعاً)، يعمل Logseq وJoplin بشكل جيد والفجوة المحمولة إزعاج طفيف لا عائق.',
          },
        ],
      },
      gdpr: {
        id: 'gdpr',
        title: 'GDPR وإقامة البيانات في الاتحاد الأوروبي',
        content:
          '**بالنسبة لمستخدمي الاتحاد الأوروبي ومنطقة DACH، يتوافق Logseq + logseq-copilot + Ollama وJoplin + Jarvis + Ollama مع اللائحة العامة لحماية البيانات بشكل أفضل من Notion AI بحكم الهندسة الافتراضية.** لا يغادر محتوى الملاحظات أبداً جهاز المسؤول عن المعالجة، لذا فإن تدفقات البيانات التي تتطلب المادة 28 من GDPR (اتفاقيات المعالجين)، والمادة 44 (النقل الدولي)، وكتالوجات BSI-Grundschutz توثيقها لأدوات SaaS لا وجود لها ببساطة مع المكدس المحلي.',
        items: [
          '**المادة 28 (اتفاقيات المعالجين):** مع Notion AI، يُعدّ Notion + OpenAI معالجَين ويتطلبان اتفاقية معالجة بيانات (DPA) بالإضافة إلى بنود تعاقدية قياسية للنقل الدولي إلى OpenAI. مع Logseq / Joplin + Ollama، لا يوجد معالج بيانات طرف ثالث — المسؤول فقط يُشغّل برنامجاً محلياً.',
          '**المادة 44 (النقل الدولي):** يُرسل Notion AI البيانات إلى خوادم OpenAI في الولايات المتحدة؛ هذا "نقل دولي" بموجب Schrems II يتطلب بنوداً تعاقدية قياسية وتقييم أثر النقل. المعالجة المحلية بـ Ollama تُلغي النقل كلياً.',
          '**كتالوجات BSI-Grundschutz (DACH):** تتعامل إرشادات أمن المعلومات الاتحادية الألمانية مع خدمات الذكاء الاصطناعي السحابية كاستعانة بمصادر خارجية تتطلب تقييم مخاطر رسمي. المعالجة المحلية بالذكاء الاصطناعي تندرج تحت خط الأساس الأبسط بكثير لـ "تقنية المعلومات الداخلية".',
          '**الحق في المحو (المادة 17):** مع Notion AI، حذف محتوى الملاحظات من حسابك لا يحذفه بالضرورة من خط أنابيب التدريب أو سجلات OpenAI (يعتمد على الشروط المؤسسية). مع Ollama المحلي، الحذف هو حذف من نظام الملفات — قابل للتحقق وكامل.',
          '**قابلية التدقيق:** المكدسات المحلية أسهل في التدقيق. شغّل التقاط حزم مرةً واحدة، تحقق من صفر حركة مرور صادرة أثناء استخدام الذكاء الاصطناعي، وثّق النتيجة. تتطلب خدمات الذكاء الاصطناعي السحابية الوثوق بتقارير SOC 2 / ISO 27001 للموفر.',
          '**الاستضافة المتوافقة مع الاتحاد الأوروبي (حين تتضمن المزامنة خادماً):** تُستضاف Joplin Cloud في الاتحاد الأوروبي؛ يمكن استضافة Joplin Server ذاتياً على بنية تحتية أوروبية (Hetzner، OVH، IONOS). تُشغَّل Logseq Sync بواسطة Logseq Inc. (مقرها الولايات المتحدة) — للإقامة الصارمة في الاتحاد الأوروبي، فضّل Git أو Syncthing لمزامنة Logseq.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'للمؤسسات التي تحتاج قصة قابلة للدفاع عنها لميزات الذكاء الاصطناعي بموجب GDPR، مكدس نموذج اللغة المحلي في Logseq أو Joplin هو الجواب الأبسط. تتحول مناقشة DPA من "نستخدم Notion + OpenAI كمعالجَين فرعيَّين مع هذه البنود" إلى "نستخدم برنامجاً محلياً يعمل على نقطة نهاية المسؤول، دون أي معالج بيانات مُشارك". يصبح عمل فريق الامتثال أبسط بكثير.',
          },
        ],
      },
      notionMigration: {
        id: 'notion-migration',
        title: 'الانتقال من Notion AI إلى Logseq أو Joplin',
        content:
          '**يوفر Notion تصديراً أصيلاً بـ Markdown يمكن لـ Logseq وJoplin استيراده — يحافظ Logseq على البنية على مستوى الكتل بشكل أفضل، بينما يحافظ Joplin على المحتوى لكنه يُسطّح الكتل المتداخلة.** في كلتا الحالتين، الانتقال عملية تصدير-استيراد لمرة واحدة، وليس مزامنة مستمرة، ويوقف تدفق البيانات إلى OpenAI فوراً.',
        numberedItems: [
          '**التصدير من Notion:** الإعدادات ← الإعدادات والأعضاء ← الإعدادات ← "تصدير كل محتوى مساحة العمل" ← اختر "Markdown & CSV" ← نزّل الملف المضغوط. يحتوي التصدير على ملف .md لكل صفحة بالإضافة إلى مجلدات للصفحات المتداخلة.',
          '**فك الضغط والتنظيف:** يستخدم تصدير Notion لاحقات معرّف صفحة طويلة في أسماء الملفات (مثلاً `My Page 1f8b2a3c4d5e6f7g8h9i.md`). شغّل نصاً برمجياً سريعاً لإعادة التسمية لإزالة المعرّفات إن كانت أسماء الملفات مهمة لأداتك الجديدة.',
          '**مسار استيراد Logseq:** افتح Logseq ← ملف ← رسم بياني جديد ← أشِر إلى مجلد جديد ← انسخ ملفات Notion المفك ضغطها إلى مجلد `pages/` في الرسم البياني. يتعرف Logseq عليها؛ تبقى الروابط الخلفية (بأسلوب `[[صفحة]]` في Notion) حين تتطابق الملفات. يُحافَظ على التداخل على مستوى الكتل لأن كلاً من Notion وLogseq يستخدمان مسافة بادئة بأسلوب القوائم.',
          '**مسار استيراد Joplin:** الأدوات ← استيراد ← "MD - Markdown directory" ← حدد مجلد Notion المفك ضغطه. ينشئ Joplin ملاحظة لكل ملف .md ضمن هيكل دفتر يعكس تسلسل صفحات Notion. يُسطَّح التداخل على مستوى الكتل — تصبح القوائم المنسدلة المتداخلة في Notion قوائم Markdown مسطحة.',
          '**التحقق من الانتقال:** راجع عشوائياً 10–20 صفحة — تأكد من بقاء المحتوى والروابط والعلامات. إن كنت تستخدم قواعد بيانات Notion بكثافة، فالتصدير CSV منفصل؛ كلٌّ من Logseq وJoplin يتعامل معه كملف مسطح لا كقاعدة بيانات منظمة، لذا خطّط لإعادة هيكلة يدوية.',
          '**إيقاف Notion AI:** ألغِ اشتراك Notion AI في إعدادات الحساب. العمل المستقبلي بالذكاء الاصطناعي يجري عبر logseq-copilot أو Jarvis على جهازك المحلي.',
          '**التحقق من وضعية الخصوصية:** اقطع الاتصال بالشبكة ← شغّل ميزات الذكاء الاصطناعي في أداتك الجديدة ← تأكد من عملها. هذا هو الاختبار الذي يُثبت أن الانتقال حقق هدفه.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'إن كنت تستخدم قواعد بيانات Notion كبيانات منظمة (متتبعات مشاريع، CRM، إلخ)، فالانتقال أكثر تعقيداً من صفحات النصوص. فكّر في الاحتفاظ بتلك القواعد المحددة في Notion (بدون ذكاء اصطناعي) بينما تنقل المحتوى الثقيل النصوص إلى Logseq أو Joplin — أو انقل القواعد إلى RAG المنظم لـ [AnythingLLM](https://anythingllm.com)، حيث يمكن لنموذج اللغة المحلي الاستعلام عنها كوثائق.',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: 'سير عمل نموذجية: اليومية اليومية، ملاحظات الاجتماعات، البحث',
        content:
          '**ثلاثة سير عمل ملموسة تُظهر المكدس المحلي في العمل.** الأولان محوريّان حول Logseq (أصيلا أداة التخطيط الهرمي / اليومية)؛ الثالث محوريّ حول Joplin (ملاحظات أطول تنسيقاً).',
        items: [
          '**ملخص يومية Logseq اليومية:** في نهاية اليوم ← افتح صفحة يوميات اليوم ← `/copilot لخّص هذا اليوم في ثلاث نقاط مركّزة على القرارات والعوائق والإجراءات لغد` ← تظهر الاستجابة ككتل متداخلة. احفظ الموجّه كقالب logseq-copilot لتنفيذات بضغطة مفتاح واحدة.',
          '**المراجعة الأسبوعية لـ Logseq:** أحد بعد الظهر ← افتح صفحة جديدة باسم `مراجعة الأسبوع 19` ← `/copilot لخّص صفحات اليومية السبع الماضية في 3 نقاط لكل فئة: التقدم والعوائق والمواضيع` ← يسترجع logseq-copilot صفحات يومية حديثة عبر آلية ربط الصفحات. تصبح النتيجة بذرة تخطيط الأسبوع القادم.',
          '**توسيع ملاحظات اجتماعات Joplin:** أثناء الاجتماع، التقط نقاطاً تقريبية في ملاحظة ← بعد الاجتماع، حدد الكل ← الأدوات ← Jarvis ← "وسّع هذه الملاحظات ونظّمها" ← المخرجات تحل محل الملاحظات أو تُضاف لاحقاً. احفظ الموجّه كإعداد مسبق في Jarvis.',
          '**بحث أسئلة وأجوبة في Joplin:** أضف 50–500 ملاحظة من المصادر (مقالات، وثائق، مقتطفات ويب) في دفتر واحد ← مكّن Jarvis Notes Database ← انتظر التضمين ← الأدوات ← Jarvis ← "Ask Jarvis" ← اطرح أسئلة عبر المصادر ("ما المصادر التي تتحدث عن X؟"). مكافئ لبحث أسئلة وأجوبة مخزن Obsidian Copilot لكن داخل Joplin.',
          '**Logseq + Joplin مجتمعَين:** التقاط في Logseq (سريع، أصيل لليومية) ← تنظيم العناصر الدائمة في Joplin (مرجع دائم). شغّل الذكاء الاصطناعي في كل أداة لنقاط قوتها الأصيلة — دردشة سريعة / توليد مخطط في Logseq، بحث أسئلة وأجوبة مدعوم بالتضمينات في Joplin.',
          '**التقاط على الجوّال، معالجة على سطح المكتب:** خلال اليوم، التقط ملاحظات بحرية في Logseq Mobile أو Joplin Mobile (بدون ذكاء اصطناعي). في نهاية اليوم على سطح المكتب، شغّل logseq-copilot أو Jarvis لتلخيص المحتوى المُلتقط وربطه والاستعلام عنه — يلحق الذكاء الاصطناعي بما التقطته دون اتصال.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'نمط "التقاط على الجوّال، معالجة على سطح المكتب" هو الطريقة الصحيحة للتفكير في Logseq + Joplin في 2026 في ظل فجوة ملحقات الجوّال. إنه ليس حلاً بديلاً — بل يتوافق مع كيفية عمل العمل المعرفي فعلياً. الجوّال للمدخلات (لديك فكرة، تلتقطها). سطح المكتب للتوليف (تعالج المادة المُلتقطة). ينضم نموذج اللغة المحلي في لحظة التوليف، وهو بالضبط حيث تكون جودته أكثر أهمية.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          '**تهيئة logseq-copilot أو Jarvis بموفر سحابي عن طريق الخطأ.** يقدم كلا الملحقين "OpenAI" كموفر افتراضي. يتطلب الإعداد المحلي فقط التبديل إلى عنوان URL أساسي مخصص يُشير إلى `http://localhost:11434/v1`. نسيان ذلك يعني أن الملحق يُرسل ملاحظات بصمت إلى OpenAI — وهو بالضبط نمط الفشل الذي انتقلت منه. تحقق باستخدام التقاط حزم.',
          '**توقع دعم الملحقات على الجوّال.** لا يُشغّل Logseq Mobile ولا Joplin Mobile ملحقات في 2026. إن افترضت عمل الذكاء الاصطناعي في أي مكان توجد فيه ملاحظاتك، ستصطدم بالحد في المرة الأولى التي تحاول فيها التلخيص في القطار. خطّط للالتقاط على الجوّال والمعالجة على سطح المكتب من اليوم الأول.',
          '**الإشارة إلى `http://localhost:11434/v1` من جهاز مختلف.** Localhost خاص بكل جهاز. إن كنت تُشغّل Ollama على جهاز سطح مكتب وLogseq على كمبيوتر محمول، تحتاج عنوان IP الشبكة المحلية لسطح المكتب (`http://192.168.1.20:11434/v1`) بالإضافة إلى ربط Ollama بـ `0.0.0.0:11434`.',
          '**مزامنة قاعدة بيانات تضمينات Joplin Jarvis مع مستوى WebDAV مجاني بحصة صغيرة.** تتزايد قواعد بيانات التضمينات بنحو 150–250 ميغابايت لكل 5,000 ملاحظة. المستويات المجانية (Dropbox 2 غيغابايت) تصل إلى الحد بسرعة بحجم دفتر الملاحظات. خطّط لـ Joplin Server ذاتي الاستضافة أو مستوى مدفوع حين تتجاوز دفاتر الملاحظات ~5,000 ملاحظة.',
          '**عدم إجراء التقاط حزم للتدقيق مرةً واحدة.** كلا الملحقين مفتوح المصدر ويعملان بشكل سليم، لكن الاختبار الوحيد الحاسم لأن مكدسك محلي فقط هو تشغيل Wireshark / Little Snitch / ما يعادلهما أثناء استخدام الذكاء الاصطناعي والتحقق من صفر حركة مرور صادرة. افعل ذلك مرةً واحدة بعد الإعداد، وثّق النتيجة، وتقدّم.',
          '**محاولة استخدام Logseq + logseq-copilot للاسترجاع المدعوم بالتضمينات.** لا يمتلك logseq-copilot فهرس تضمين لكامل الرسم البياني في 2026. إن كنت تحتاج "اسأل كل رسمي البياني"، انتقل إلى Joplin + Jarvis أو استخدم Obsidian + Smart Connections. يتميز Logseq في الذكاء الاصطناعي الأصيل لأداة التخطيط الهرمي، لا في البحث الدلالي.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'Logseq — [logseq.com](https://logseq.com) و[github.com/logseq/logseq](https://github.com/logseq/logseq) (أداة تخطيط هرمي مفتوحة المصدر؛ AGPL 3.0).',
          'logseq-copilot — [github.com/logancyang/logseq-copilot](https://github.com/logancyang/logseq-copilot) (ملحق Logseq مفتوح المصدر؛ AGPL 3.0).',
          'Joplin — [joplinapp.org](https://joplinapp.org) و[github.com/laurent22/joplin](https://github.com/laurent22/joplin) (دفتر ملاحظات مفتوح المصدر؛ AGPL 3.0).',
          'Jarvis (Joplin) — [github.com/alondmnt/joplin-plugin-jarvis](https://github.com/alondmnt/joplin-plugin-jarvis) (ملحق Joplin مفتوح المصدر؛ AGPL 3.0).',
          'Ollama — [ollama.com](https://ollama.com) و[github.com/ollama/ollama](https://github.com/ollama/ollama) (وقت تشغيل LLM محلي؛ MIT).',
          'الخصوصية والتعامل مع بيانات Notion AI — [notion.com/help/notion-ai-faqs](https://www.notion.com/help/notion-ai-faqs) (وثائق الموفر للسياق المقارن).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكن لـ Logseq أن يحل محل Notion لمستخدمي الذكاء الاصطناعي؟',
            a: 'نعم لصفحات النثر وسير عمل اليوميات اليومية. ثبّت logseq-copilot وأشِر إليه نحو Ollama، وستحصل على دردشة وتلخيص وتوليد قائم على القوالب داخل Logseq — دون خروج البيانات من جهازك. الفجوة هي قواعد البيانات المنظمة: طرق عرض قاعدة بيانات Notion (متتبعات المشاريع، CRM) ليس لها مكافئ نظيف في Logseq. المستخدمون الثقيلون في النصوص يستبدلون Notion كلياً؛ المستخدمون الثقيلون في قواعد البيانات يقبلون إعادة الهيكلة اليدوية أو يُبقون قواعد بيانات محددة في Notion (بدون ذكاء اصطناعي) بينما ينقلون النصوص إلى Logseq.',
          },
          {
            q: 'هل يدعم Joplin ملحقات الذكاء الاصطناعي المحلية؟',
            a: 'نعم. الملحق الموصى به في 2026 هو Jarvis، الذي يوفر دردشةً وتلخيصاً وبحثاً دلالياً مدعوماً بالتضمينات عبر دفتر الملاحظات. هيّئ Jarvis لاستخدام Ollama على `http://localhost:11434/v1` للدردشة و`http://localhost:11434/v1` مع `nomic-embed-text` للتضمينات. توجد ملحقات Joplin أخرى متوافقة مع Ollama، لكن Jarvis هو الأكثر صيانةً نشطةً وميزات.',
          },
          {
            q: 'أيهما لديه مزامنة أفضل بدون سحابة — Logseq أم Joplin؟',
            a: 'لدى Joplin أوسع وأكثر تجربة مصقولة للمزامنة بدون سحابة. يدعم Joplin Joplin Server ذاتي الاستضافة وWebDAV وNextcloud بالإضافة إلى E2EE من الدرجة الأولى فوق أي خلفية. لدى Logseq مزامنة Git مدمجة (ممتازة للمطورين) ويعمل مع Syncthing أو iCloud Drive، لكنه يفتقر إلى مكافئ ذاتي الاستضافة لـ Joplin Server. للفرق التي تريد مزامنة قابلة للتدقيق في المبنى، Joplin Server هو الخيار الأفضل؛ للمطورين الذين يريدون تاريخاً يتتبعه Git، مزامنة Git في Logseq هي الخيار الأفضل.',
          },
          {
            q: 'هل يمكنني الانتقال من Notion إلى Logseq مع الحفاظ على ميزات الذكاء الاصطناعي؟',
            a: 'ينقل الانتقال المحتوى، وليس اشتراك Notion AI. صدّر من Notion بـ Markdown، استورد إلى Logseq، ثم ثبّت logseq-copilot وهيّئه مع Ollama — تُعاد بناء طبقة الذكاء الاصطناعي محلياً. يُحافظ Logseq على التداخل على مستوى الكتل من Notion بشكل أفضل من Joplin لأن كلا الأداتين تستخدمان الكتل ذات المسافة البادئة للقوائم كعنصر أساسي. ميزات Notion AI (الإكمال التلقائي، الخصائص الذكية في قواعد البيانات) ليس لها مكافئات مباشرة في Logseq — يجب إعادة بناء تلك سير العمل بموجّهات logseq-copilot أو نصوص برمجية.',
          },
          {
            q: 'هل يعمل Logseq بالكامل دون اتصال؟',
            a: 'نعم. Logseq تطبيق سطح مكتب محلي بدون أي مكوّن سحابي مطلوب. الرسم البياني مجلد من ملفات Markdown؛ التطبيق يقرأها ويكتبها محلياً. الوصول إلى الشبكة ضروري فقط للمزامنة مع خادم بعيد (git push، اكتشاف أقران Syncthing، Logseq Sync) ولتشغيل logseq-copilot مع موفر LLM سحابي — هذا الأخير اختياري. مع Ollama كموفر LLM، يعمل المكدس بأكمله دون اتصال.',
          },
          {
            q: 'هل ملحقات الذكاء الاصطناعي في Joplin بنفس نضج ملحقات Obsidian؟',
            a: 'لدى Obsidian ملحقات ذكاء اصطناعي أكثر وعدد أكبر من المطورين المتزامنين. لدى Joplin ملحقات أقل، لكن Jarvis كامل الميزات ويُصان بشكل نشط — يغطي الدردشة والتلخيص والاسترجاع المدعوم بالتضمينات في ملحق واحد. بالنسبة لمعظم المستخدمين، يُضاهي Jarvis أو يتفوق على مزيج Obsidian Copilot + Smart Connections في دفاتر Joplin لـ Markdown العادي؛ للمستخدمين المتقدمين الذين يريدون تنوع الملحقات (محركات قوالب، دردشة شخصيات، منشئو MOC)، لا يزال Obsidian يمتلك خيارات أكثر.',
          },
          {
            q: 'أيهما أفضل لليوميات اليومية مع الذكاء الاصطناعي — Logseq أم Joplin؟',
            a: 'Logseq. اليومية اليومية عنصر أساسي مدمج في Logseq — كل يوم يحصل تلقائياً على صفحة يومية، الكتل من الدرجة الأولى، ومخرجات logseq-copilot تصبح كتلاً متداخلة تحت الموجّه. سير عمل ذكاء اصطناعي اليومية (ملخص نهاية اليوم، المراجعة الأسبوعية، وسم الحالة المزاجية) تبدو أصيلة. يمكن لـ Joplin تكرار ذلك بدفاتر شهرية وموجّهات Jarvis، لكن الاحتكاك أكبر.',
          },
          {
            q: 'هل يمكنني استخدام نفس المخزن على أجهزة متعددة؟',
            a: 'نعم — كلتا الأداتين تدعمان الاستخدام متعدد الأجهزة عبر طبقة المزامنة. Logseq: Git وSyncthing وiCloud Drive أو Logseq Sync. Joplin: Joplin Cloud وJoplin Server ذاتي الاستضافة وWebDAV وNextcloud وDropbox أو OneDrive. تحذير: تعمل ملحقات الذكاء الاصطناعي على سطح المكتب فقط. تتزامن محتويات المخزن مع الجوّال، لكن logseq-copilot وJarvis لا يعملان هناك. خطّط للذكاء الاصطناعي على سطح المكتب والالتقاط على الجوّال.',
          },
          {
            q: 'هل تعمل ملحقات الذكاء الاصطناعي مع Joplin Mobile أو Logseq Mobile؟',
            a: 'لا — لا تدعم أيٌّ من الأداتين الملحقات على الجوّال في 2026. Logseq Mobile وJoplin Mobile سطحا قراءة/كتابة للمخزن المزامَن، لكن وقت تشغيل الملحقات (Node.js / Electron) غير موجود في التطبيقات المحمولة. ميزات الذكاء الاصطناعي (logseq-copilot، Jarvis) تعمل على سطح المكتب فقط. إن كان الذكاء الاصطناعي على الجوّال مهماً، البدائل هي Obsidian Mobile + Ollama على الشبكة المحلية، أو التقاط على الجوّال والمعالجة على سطح المكتب.',
          },
          {
            q: 'هل تكامل الذكاء الاصطناعي المحلي مفتوح المصدر أكثر أماناً من Notion AI؟',
            a: 'نعم بحكم الهندسة الافتراضية. يُرسل Notion AI محتوى الملاحظات إلى OpenAI بحكم التصميم — هذا هيكلي، وليس خيار إعداد. Logseq + logseq-copilot + Ollama وJoplin + Jarvis + Ollama لا يُرسلان أي شيء إلى طرف ثالث ما لم تُهيّئ صراحةً موفر LLM سحابي. بالنسبة لبيانات الاتحاد الأوروبي الخاضعة للائحة GDPR والرعاية الصحية والقانون والصحافة، هذا الفارق ذو معنى: المكدسات المحلية بلا معالج بيانات، وبلا نقل دولي، وبلا مخاطر معالجين فرعيين. قابلية التدقيق أيضاً أبسط — التقاط حزم واحد يُثبت صفر حركة مرور صادرة أثناء استخدام الذكاء الاصطناعي.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[Obsidian + LLM محلي: 5 ملحقات تحوّل مخزنك إلى دماغ ثانٍ (2026)](/ar/power-local-llm/local-llm-with-obsidian-2026) — مقال شقيق لمستخدمي Obsidian؛ البديل المتقدم الذي يقارنه هؤلاء القراء عادةً.',
          '[قاعدة المعرفة الشخصية مع LLM محلي 2026](/ar/power-local-llm/local-llm-personal-knowledge-base-2026) — هندسة PKB الأشمل التي يُغذّيها Logseq وJoplin؛ يغطي طبقة RAG وخطوط أنابيب الالتقاط وسير عمل أكثر من 10 آلاف عنصر.',
          '[استبدل Grammarly وNotion AI بـ LLM محلي (2026)](/ar/power-local-llm/replace-grammarly-notion-ai-with-local) — دليل استبدال SaaS المجاور المركّز تحديداً على مسار الخروج من Notion AI.',
          '[استبدل Zapier بوكلاء ذكاء اصطناعي محليين: 5 سير عمل توفر /شهر (2026)](/ar/power-local-llm/replace-zapier-with-local-ai-agents) — استبدال مكدس إنتاجية مجاور للقراء الذين يدمجون التبعيات على SaaS.',
          '[أفضل نماذج LLM المحلية في 2026](/ar/local-llms/best-local-llms-2026) — مرجع النماذج لاختيار نماذج الدردشة والتضمينات التي تعمل خلف logseq-copilot وJarvis.',
          '[دليل برامج LLM المحلية 2026](/ar/power-local-llm/local-llm-software-directory-2026) — إدخالات الدليل لـ Logseq وJoplin وOllama وlogseq-copilot وJarvis مع التراخيص والروابط.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Logseq وJoplin مع نماذج اللغة المحلية: ملاحظات ذكية بدون مزامنة سحابية (2026)',
      description: 'Logseq + logseq-copilot مقابل Joplin + Jarvis على Ollama: بديل خاص لـ Notion AI. مزامنة بدون سحابة، وضعية GDPR، فجوة ملحقات الجوّال. 2026.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/local-llm-with-logseq-and-joplin',
      inLanguage: 'ar',
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
}
