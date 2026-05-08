// Power Local LLM — Logseq and Joplin With Local LLMs: Smart Notes Without Cloud Sync (2026)
// Slug: local-llm-with-logseq-and-joplin
// EN + DE; FR/JA/ZH render as "Coming Soon" via the article page.

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
      'Logseq and Joplin are the two open-source notes apps in 2026 that pair cleanly with a local LLM and never need a cloud round-trip. Logseq runs the logseq-copilot plugin against Ollama for outliner-native chat and daily-journal AI; Joplin runs the Jarvis plugin against Ollama for note-aware chat, summaries, and embedding-backed retrieval. Both are GDPR-friendlier than Notion AI by default architecture — Notion sends note content to OpenAI; Logseq and Joplin send nothing unless you wire it up that way. The catch in 2026 is mobile: neither Logseq nor Joplin supports plugins on iOS or Android, so AI features run only on desktop. This guide ranks both tools on AI plugin maturity, sync-without-cloud paths, mobile compatibility, and the migration path from Notion, with concrete configuration steps for Ollama.',
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
          '**Tools covered:** Logseq (outliner, daily-journal-first) and Joplin (plain-Markdown notebook). Obsidian is referenced for context — its dedicated guide is linked at the end.',
          '**Primary AI plugins:** logseq-copilot for Logseq; Jarvis (and similar Ollama-aware plugins) for Joplin.',
          '**LLM backend:** Ollama (recommended) at `http://localhost:11434/v1`, or any OpenAI-compatible local endpoint (LM Studio, llama.cpp server, vLLM).',
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
            'You need GPT-4o quality on every chat response → cloud equivalents (the local stack is ~70% as capable)',
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
          { 'Tool': 'Logseq', 'AI plugins': 'logseq-copilot (chat blocks, slash commands), GPT-3 Plugin variants', 'Sync (no cloud)': 'Built-in Git, Syncthing, iCloud Drive, Logseq Sync (paid E2EE)', 'Mobile': 'Mobile app available; plugins not supported on mobile (2026)', 'Best for': 'Daily-journal + outliner workflow' },
          { 'Tool': 'Joplin', 'AI plugins': 'Jarvis (chat, summarise, embedding-backed Q&A), Ollama-aware integrations', 'Sync (no cloud)': 'Joplin Cloud (paid E2EE), self-hosted Joplin Server, WebDAV, Nextcloud, Dropbox, OneDrive (all E2EE-capable)', 'Mobile': 'Mobile app available; plugins not supported on mobile (2026)', 'Best for': 'Markdown notebook + E2EE sync' },
          { 'Tool': 'Obsidian (reference)', 'AI plugins': 'Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot', 'Sync (no cloud)': 'Git, Syncthing, iCloud Drive, Obsidian Sync (paid E2EE)', 'Mobile': 'Mobile app supports most plugins; LAN access to Ollama required', 'Best for': 'Power users with paid plugins / paid sync' },
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
            text: 'If you used Notion databases as structured data (project trackers, CRMs, etc.), the migration is more involved than for prose pages. Consider keeping those specific databases in Notion (without AI) while moving prose-heavy content to Logseq or Joplin — or migrate the databases to AnythingLLM\'s structured RAG, where the local LLM can query them as documents.',
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
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Logseq und Joplin mit lokalen LLMs: Intelligente Notizen ohne Cloud-Synchronisierung (2026)',
    seoTitle: 'Logseq + Joplin mit lokalem LLM: Notizen ohne Cloud 2026',
    intro:
      'Logseq und Joplin sind die beiden Open-Source-Notiz-Apps, die sich 2026 sauber mit einem lokalen LLM kombinieren lassen und niemals eine Cloud-Verbindung benötigen. Logseq nutzt das logseq-copilot-Plugin gegen Ollama für Outliner-natives Chatten und KI im Tagesjournal; Joplin nutzt das Jarvis-Plugin gegen Ollama für notizbewussten Chat, Zusammenfassungen und Embedding-gestützte Suche. Beide sind durch ihre Standardarchitektur DSGVO-freundlicher als Notion AI — Notion sendet Notizinhalte an OpenAI; Logseq und Joplin senden nichts, sofern Sie es nicht entsprechend konfigurieren. Der Haken in 2026 ist mobil: Weder Logseq noch Joplin unterstützen Plugins unter iOS oder Android, KI-Funktionen laufen also ausschließlich am Desktop. Dieser Leitfaden bewertet beide Tools nach Reife der KI-Plugins, Synchronisierungspfaden ohne Cloud, mobiler Kompatibilität und Migrationspfad von Notion — mit konkreten Konfigurationsschritten für Ollama.',
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
          '**Behandelte Tools:** Logseq (Outliner, Tagesjournal-zentriert) und Joplin (reines Markdown-Notizbuch). Obsidian wird zur Einordnung erwähnt — der dedizierte Leitfaden ist am Ende verlinkt.',
          '**Primäre KI-Plugins:** logseq-copilot für Logseq; Jarvis (und ähnliche Ollama-fähige Plugins) für Joplin.',
          '**LLM-Backend:** Ollama (empfohlen) unter `http://localhost:11434/v1` oder beliebiger OpenAI-kompatibler lokaler Endpunkt (LM Studio, llama.cpp Server, vLLM).',
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
            'Sie benötigen GPT-4o-Qualität bei jeder Chat-Antwort → Cloud-Pendants (der lokale Stack erreicht ~70 % der Leistungsfähigkeit)',
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
          { 'Tool': 'Logseq', 'KI-Plugins': 'logseq-copilot (Chat-Blöcke, Slash-Befehle), GPT-3-Plugin-Varianten', 'Sync (ohne Cloud)': 'Eingebautes Git, Syncthing, iCloud Drive, Logseq Sync (kostenpflichtig E2EE)', 'Mobile': 'Mobile App verfügbar; Plugins auf Mobile nicht unterstützt (2026)', 'Optimal für': 'Tagesjournal- + Outliner-Workflow' },
          { 'Tool': 'Joplin', 'KI-Plugins': 'Jarvis (Chat, Zusammenfassung, Embedding-gestützte Q&A), Ollama-fähige Integrationen', 'Sync (ohne Cloud)': 'Joplin Cloud (kostenpflichtig E2EE), selbstgehosteter Joplin Server, WebDAV, Nextcloud, Dropbox, OneDrive (alle E2EE-fähig)', 'Mobile': 'Mobile App verfügbar; Plugins auf Mobile nicht unterstützt (2026)', 'Optimal für': 'Markdown-Notizbuch + E2EE-Sync' },
          { 'Tool': 'Obsidian (Referenz)', 'KI-Plugins': 'Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot', 'Sync (ohne Cloud)': 'Git, Syncthing, iCloud Drive, Obsidian Sync (kostenpflichtig E2EE)', 'Mobile': 'Mobile App unterstützt die meisten Plugins; LAN-Zugriff auf Ollama erforderlich', 'Optimal für': 'Power-User mit kostenpflichtigen Plugins / kostenpflichtiger Synchronisierung' },
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
            text: 'Wenn Sie Notion-Datenbanken als strukturierte Daten genutzt haben (Projekt-Tracker, CRMs etc.), ist die Migration aufwändiger als bei reinen Prosa-Seiten. Erwägen Sie, diese spezifischen Datenbanken in Notion zu behalten (ohne KI), während Sie prosa-lastige Inhalte zu Logseq oder Joplin verschieben — oder migrieren Sie die Datenbanken zu AnythingLLMs strukturiertem RAG, wo das lokale LLM sie als Dokumente abfragen kann.',
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
          '[Obsidian + lokales LLM: 5 Plugins, die Ihren Vault in ein zweites Gehirn verwandeln (2026)](/power-local-llm/local-llm-with-obsidian-2026?lang=de) — Schwester-Artikel für Obsidian-Nutzer; die Power-User-Alternative, gegen die diese Leser typischerweise abwägen.',
          '[Lokale-LLM-Persönliche-Wissensbasis 2026](/power-local-llm/local-llm-personal-knowledge-base-2026?lang=de) — breitere PKB-Architektur, in die Logseq und Joplin einspeisen; behandelt die RAG-Schicht, Erfassungs-Pipelines und 10K+-Item-Workflows.',
          '[Grammarly und Notion AI durch ein lokales LLM ersetzen (2026)](/power-local-llm/replace-grammarly-notion-ai-with-local?lang=de) — angrenzender SaaS-Ersatz-Leitfaden, fokussiert speziell auf den Notion-AI-Ausstieg.',
          '[Zapier durch lokale KI-Agenten ersetzen: 5 Workflows, die /Monat sparen (2026)](/power-local-llm/replace-zapier-with-local-ai-agents?lang=de) — angrenzender Produktivitäts-Stack-Ersatz für Leser, die SaaS-Abhängigkeiten konsolidieren.',
          '[Beste lokale LLMs in 2026](/local-llms/best-local-llms-2026?lang=de) — Modell-Autorität für die Auswahl der Chat- und Embedding-Modelle hinter logseq-copilot und Jarvis.',
          '[Lokale-LLM-Software-Verzeichnis 2026](/power-local-llm/local-llm-software-directory-2026?lang=de) — Verzeichnis-Einträge für Logseq, Joplin, Ollama, logseq-copilot und Jarvis mit Lizenzen und Links.',
        ],
      },
    },
  },
}
