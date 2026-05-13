// Power Local LLM — Logseq and Joplin With Local LLMs: Smart Notes Without Cloud Sync (2026)
// Slug: local-llm-with-logseq-and-joplin
// EN + DE + FR + JA; ZH renders as "Coming Soon" via the article page.

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
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Logseq et Joplin avec LLM locaux : notes intelligentes sans synchronisation cloud (2026)',
    seoTitle: 'Logseq + Joplin avec LLM local : notes sans cloud 2026',
    intro:
      'Logseq et Joplin sont les deux applications de prise de notes open source qui se combinent proprement avec un LLM local en 2026 sans jamais nécessiter d\'aller-retour cloud. Logseq exécute le plugin logseq-copilot contre Ollama pour un chat natif outliner et de l\'IA dans le journal quotidien ; Joplin exécute le plugin Jarvis contre Ollama pour un chat conscient des notes, des résumés et une recherche basée sur les embeddings. Les deux sont plus respectueux du RGPD que Notion AI par architecture par défaut — Notion envoie le contenu des notes à OpenAI ; Logseq et Joplin n\'envoient rien sauf si vous le configurez ainsi. Le hic en 2026 est mobile : ni Logseq ni Joplin ne prennent en charge les plugins sur iOS ou Android, donc les fonctionnalités IA s\'exécutent uniquement sur ordinateur de bureau. Ce guide classe les deux outils selon la maturité des plugins IA, les chemins de synchronisation sans cloud, la compatibilité mobile et le chemin de migration depuis Notion, avec des étapes de configuration concrètes pour Ollama.',
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
          '**Outils traités :** Logseq (outliner, journal quotidien en premier) et Joplin (carnet Markdown pur). Obsidian est mentionné pour le contexte — son guide dédié est lié à la fin.',
          '**Plugins IA principaux :** logseq-copilot pour Logseq ; Jarvis (et plugins Ollama-compatibles similaires) pour Joplin.',
          '**Backend LLM :** Ollama (recommandé) sur `http://localhost:11434/v1`, ou tout endpoint local compatible OpenAI (LM Studio, llama.cpp server, vLLM).',
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
            'Vous avez besoin de la qualité GPT-4o sur chaque réponse de chat → équivalents cloud (la pile locale atteint ~70 % des capacités)',
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
          { 'Outil': 'Logseq', 'Plugins IA': 'logseq-copilot (blocs de chat, commandes slash), variantes du plugin GPT-3', 'Sync (sans cloud)': 'Git intégré, Syncthing, iCloud Drive, Logseq Sync (payant E2EE)', 'Mobile': 'App mobile disponible ; plugins non pris en charge sur mobile (2026)', 'Idéal pour': 'Workflow journal quotidien + outliner' },
          { 'Outil': 'Joplin', 'Plugins IA': 'Jarvis (chat, résumé, Q&R basée sur les embeddings), intégrations Ollama-compatibles', 'Sync (sans cloud)': 'Joplin Cloud (payant E2EE), Joplin Server auto-hébergé, WebDAV, Nextcloud, Dropbox, OneDrive (tous compatibles E2EE)', 'Mobile': 'App mobile disponible ; plugins non pris en charge sur mobile (2026)', 'Idéal pour': 'Carnet Markdown + sync E2EE' },
          { 'Outil': 'Obsidian (référence)', 'Plugins IA': 'Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot', 'Sync (sans cloud)': 'Git, Syncthing, iCloud Drive, Obsidian Sync (payant E2EE)', 'Mobile': 'L\'app mobile prend en charge la plupart des plugins ; accès LAN à Ollama requis', 'Idéal pour': 'Power-users avec plugins payants / sync payante' },
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
            text: 'Si vous avez utilisé les bases de données Notion comme données structurées (trackers de projet, CRM, etc.), la migration est plus complexe que pour les pages prose. Envisagez de garder ces bases spécifiques dans Notion (sans IA) tout en déplaçant le contenu prose vers Logseq ou Joplin — ou migrez les bases vers le RAG structuré d\'AnythingLLM, où le LLM local peut les interroger comme des documents.',
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
          '[Obsidian + LLM local : 5 plugins qui transforment votre vault en deuxième cerveau (2026)](/power-local-llm/local-llm-with-obsidian-2026?lang=fr) — article frère pour les utilisateurs Obsidian ; l\'alternative power-user contre laquelle ces lecteurs choisissent typiquement.',
          '[Base de connaissances personnelle LLM local 2026](/power-local-llm/local-llm-personal-knowledge-base-2026?lang=fr) — architecture PKB plus large dans laquelle Logseq et Joplin alimentent ; couvre la couche RAG, les pipelines de capture et les workflows 10K+ items.',
          '[Remplacer Grammarly et Notion AI par un LLM local (2026)](/power-local-llm/replace-grammarly-notion-ai-with-local?lang=fr) — guide adjacent de remplacement SaaS axé spécifiquement sur le chemin de sortie de Notion AI.',
          '[Remplacer Zapier par des agents IA locaux : 5 workflows qui économisent /mois (2026)](/power-local-llm/replace-zapier-with-local-ai-agents?lang=fr) — remplacement adjacent de pile productivité pour les lecteurs consolidant les dépendances SaaS.',
          '[Meilleurs LLM locaux en 2026](/local-llms/best-local-llms-2026?lang=fr) — autorité de modèle pour choisir les modèles de chat et d\'embedding derrière logseq-copilot et Jarvis.',
          '[Annuaire logiciels LLM local 2026](/power-local-llm/local-llm-software-directory-2026?lang=fr) — entrées d\'annuaire pour Logseq, Joplin, Ollama, logseq-copilot et Jarvis avec licences et liens.',
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
      'Logseq と Joplin は、2026年にローカル LLM とクリーンに統合でき、クラウド往復が不要な2つのオープンソースのノートアプリです。Logseq は logseq-copilot プラグインを Ollama に対して実行し、アウトライナーネイティブなチャットと日々のジャーナル AI を提供します。Joplin は Jarvis プラグインを Ollama に対して実行し、ノート対応チャット、要約、埋め込みベースの検索を提供します。両者ともデフォルトアーキテクチャの観点から Notion AI より日本の APPI（個人情報保護法）への適合性が高い構成です — Notion はノート内容を OpenAI に送信しますが、Logseq と Joplin は設定しない限り何も送信しません。2026年の落とし穴はモバイル：Logseq も Joplin も iOS や Android でプラグインをサポートしていないため、AI 機能はデスクトップでのみ動作します。本ガイドでは両ツールを AI プラグインの成熟度、クラウドなし同期、モバイル互換性、Notion からの移行パスで評価し、Ollama 用の具体的な設定手順を示します。',
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
          '**対象ツール：** Logseq（アウトライナー、デイリージャーナル中心）と Joplin（プレーン Markdown ノートブック）。Obsidian は文脈用に言及 — 専用ガイドは末尾でリンク。',
          '**主要 AI プラグイン：** Logseq 用は logseq-copilot。Joplin 用は Jarvis（および同様の Ollama 対応プラグイン）。',
          '**LLM バックエンド：** `http://localhost:11434/v1` の Ollama（推奨）、または OpenAI 互換のローカルエンドポイント（LM Studio、llama.cpp server、vLLM）。',
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
            'すべてのチャット応答に GPT-4o 品質が必要 → クラウド版（ローカルスタックは約70%の能力）',
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
          { 'ツール': 'Logseq', 'AI プラグイン': 'logseq-copilot（チャットブロック、スラッシュコマンド）、GPT-3 プラグイン亜種', '同期（クラウドなし）': '組み込み Git、Syncthing、iCloud Drive、Logseq Sync（有料 E2EE）', 'モバイル': 'モバイルアプリあり。モバイルではプラグイン未サポート（2026）', '最適な用途': 'デイリージャーナル + アウトライナーワークフロー' },
          { 'ツール': 'Joplin', 'AI プラグイン': 'Jarvis（チャット、要約、埋め込みベース Q&A）、Ollama 対応統合', '同期（クラウドなし）': 'Joplin Cloud（有料 E2EE）、自己ホスト型 Joplin Server、WebDAV、Nextcloud、Dropbox、OneDrive（全て E2EE 対応可能）', 'モバイル': 'モバイルアプリあり。モバイルではプラグイン未サポート（2026）', '最適な用途': 'Markdown ノートブック + E2EE 同期' },
          { 'ツール': 'Obsidian（参照）', 'AI プラグイン': 'Smart Connections、Copilot、Text Generator、Local GPT、BMO Chatbot', '同期（クラウドなし）': 'Git、Syncthing、iCloud Drive、Obsidian Sync（有料 E2EE）', 'モバイル': 'モバイルアプリはほとんどのプラグインをサポート。Ollama への LAN アクセスが必要', '最適な用途': '有料プラグイン / 有料同期を使うパワーユーザー' },
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
            text: 'Notion データベースを構造化データとして使用していた場合（プロジェクトトラッカー、CRM 等）、移行は文章ページよりも複雑です。それらの特定のデータベースを Notion に残し（AI なし）、文章中心のコンテンツを Logseq または Joplin に移動することを検討するか、データベースを AnythingLLM の構造化 RAG に移行することを検討してください — そこでローカル LLM がそれらをドキュメントとして照会できます。',
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
          '[Obsidian + ローカル LLM：vault を第二の脳に変える5つのプラグイン（2026）](/power-local-llm/local-llm-with-obsidian-2026?lang=ja) — Obsidian ユーザー向け姉妹記事。これらの読者が典型的に対抗候補として検討するパワーユーザー向け代替。',
          '[ローカル LLM 個人ナレッジベース 2026](/power-local-llm/local-llm-personal-knowledge-base-2026?lang=ja) — Logseq と Joplin が供給する、より広範な PKB アーキテクチャ。RAG 層、キャプチャパイプライン、10K以上のアイテムワークフローをカバー。',
          '[Grammarly と Notion AI をローカル LLM で置き換える（2026）](/power-local-llm/replace-grammarly-notion-ai-with-local?lang=ja) — Notion AI 移行パスに特化した隣接 SaaS 置換ガイド。',
          '[Zapier をローカル AI エージェントで置き換える：月額/月を節約する5つのワークフロー（2026）](/power-local-llm/replace-zapier-with-local-ai-agents?lang=ja) — SaaS 依存を統合する読者向けの隣接生産性スタック置換。',
          '[2026年最高のローカル LLM](/local-llms/best-local-llms-2026?lang=ja) — logseq-copilot と Jarvis の背後にあるチャットおよび埋め込みモデルを選ぶためのモデル権威。',
          '[ローカル LLM ソフトウェアディレクトリ 2026](/power-local-llm/local-llm-software-directory-2026?lang=ja) — Logseq、Joplin、Ollama、logseq-copilot、Jarvis のディレクトリエントリ、ライセンスとリンク付き。',
        ],
      },
    },
  },
}
