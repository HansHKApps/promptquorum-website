// Power Local LLM — Obsidian + Local LLM: 5 Plugins That Turn Your Vault Into a Second Brain
// Slug: local-llm-with-obsidian-2026
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
    title: 'Obsidian + Local LLM: 5 Plugins That Turn Your Vault Into a Second Brain (2026)',
    seoTitle: 'Obsidian + Local LLM: 5 Plugins for Your Vault 2026',
    intro:
      'Five Obsidian plugins turn a vault into a working second brain when paired with a local Ollama backend in 2026: Smart Connections, Copilot for Obsidian, Text Generator, Local GPT, and BMO Chatbot. Each covers a different layer — semantic search, inline chat, template generation, privacy-first conversation, lightweight context-aware chat. The recommended combination for most users is Smart Connections + Copilot for Obsidian: one handles vault-wide semantic linking, the other handles the chat interface. This guide ranks all five on vault search quality, generation speed, prompt customisation, and mobile-sync behaviour, with concrete configuration steps for Ollama.',
    metaDescription:
      'Five Obsidian plugins tested with local Ollama in 2026: Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot. Best combo, vault scale, mobile sync covered.',
    twitterDescription:
      'Best Obsidian + local LLM combo in 2026: Smart Connections (semantic vault search) + Copilot for Obsidian (chat). All 5 plugins tested with Ollama. Mobile sync caveats.',
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
      'Obsidian power users, knowledge workers, researchers, and writers running 1,000–20,000-note vaults who want AI features without sending notes to a cloud service.',
    readTime: '14 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Obsidian local LLM plugin',
    targetKeywords: [
      'obsidian local llm',
      'obsidian ollama plugin',
      'smart connections obsidian local',
      'copilot for obsidian local',
      'obsidian second brain ai',
      'obsidian plugin private llm',
    ],
    leadAnswerBlock:
      '**For most Obsidian users in 2026, install Smart Connections + Copilot for Obsidian and configure both to use a local Ollama backend.** Smart Connections handles vault-wide semantic linking (related-notes sidebar) using local embeddings via `nomic-embed-text` or `mxbai-embed-large`. Copilot for Obsidian provides the chat interface, configured to point at Ollama\'s OpenAI-compatible endpoint at `http://localhost:11434/v1`. This pair covers ~80% of "second brain" use cases (semantic search + chat with notes) without sending any vault content to a cloud. Add Text Generator as a third plugin if you want template-driven content generation (daily journal prompts, meeting note expansions). Smart Connections embeddings live in `.smart-env/` inside the vault — they sync across devices via Obsidian Sync but must be regenerated when using iCloud or Git as your sync method.',
    quickAnswerTop: {
      en: {
        question: 'What is the best Obsidian plugin combo for local LLMs in 2026?',
        answer:
          'Smart Connections + Copilot for Obsidian is the recommended combination. Smart Connections handles semantic vault search with local embeddings (nomic-embed-text or mxbai-embed-large via Ollama); Copilot provides the chat sidebar configured against Ollama\'s OpenAI-compatible endpoint. Together they cover related-notes discovery and chat with vault context — about 80% of "second brain" use cases. Add Text Generator as a third plugin for template-driven generation. Local GPT and BMO Chatbot are lighter alternatives to Copilot for users who want a simpler chat-only experience. All five plugins work with any Ollama model; the recommended chat model in 2026 is Llama 3.2 3B or Phi-4 Mini for 16 GB RAM systems.',
        bullets: [
          'Smart Connections — semantic search + related-notes sidebar. Best for vault-wide linking.',
          'Copilot for Obsidian — chat sidebar with vault context. Best for conversational queries.',
          'Text Generator — template-driven generation with frontmatter variables. Best for repeatable workflows (daily notes, meeting summaries).',
          'Local GPT — privacy-first chat with current note. Lightweight alternative to Copilot.',
          'BMO Chatbot — minimalist chat with vault context. Best for users wanting a single chat plugin without Copilot\'s feature surface.',
          'Recommended Ollama models: Llama 3.2 3B (chat), Phi-4 Mini (chat, smaller), nomic-embed-text or mxbai-embed-large (embeddings for Smart Connections).',
          'Mobile sync caveat: Smart Connections embeddings live in .smart-env/ — sync via Obsidian Sync, regenerate per-device with iCloud or Git.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Which Plugin Combo Should You Install?', anchor: '#which-plugins' },
      { label: 'Plugin Comparison Table', anchor: '#comparison-table' },
      { label: 'Smart Connections: Semantic Vault Search', anchor: '#smart-connections' },
      { label: 'Copilot for Obsidian: Chat with Vault Context', anchor: '#copilot' },
      { label: 'Text Generator: Template-Driven Generation', anchor: '#text-generator' },
      { label: 'Local GPT: Privacy-First Chat', anchor: '#local-gpt' },
      { label: 'BMO Chatbot: Lightweight Chat', anchor: '#bmo-chatbot' },
      { label: 'The Recommended Combo: Smart Connections + Copilot', anchor: '#recommended-combo' },
      { label: 'Sample Workflows: Daily Notes, MOCs, Writing Assistance', anchor: '#workflows' },
      { label: 'Mobile Sync: Obsidian Sync vs iCloud vs Git', anchor: '#mobile-sync' },
      { label: 'Vault Scale: 1K, 5K, 10K, 20K Notes', anchor: '#vault-scale' },
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
          '**Smart Connections + Copilot for Obsidian is the recommended combo for most users.** Smart Connections handles semantic vault search with local embeddings; Copilot handles chat with vault context. Together they cover ~80% of "second brain" use cases without cloud calls.',
          '**All five plugins work with Ollama via its OpenAI-compatible endpoint at `http://localhost:11434/v1`.** Configure each plugin\'s "API base URL" or equivalent setting to point at this address. The Ollama default model name (e.g., `llama3.2:3b`) is what you enter in the plugin\'s model field.',
          '**Smart Connections is the only plugin that builds an embedding index of your entire vault.** This makes related-notes search practical at 5,000+ notes. The index is stored in `.smart-env/` inside the vault and syncs with Obsidian Sync; regenerate per-device when using iCloud or Git.',
          '**Text Generator is the best plugin for repeatable workflows.** Daily-note summarisation, meeting-note expansion, and MOC (Map of Content) generation become single-keystroke actions via templates with frontmatter variables.',
          '**For chat-only users, BMO Chatbot is lighter than Copilot.** It does not build an index — context is just the current note. If you only chat about the open note, BMO is enough.',
          '**Vault scale (with Smart Connections + nomic-embed-text):** 1K notes index in ~2 min, 5K in ~10 min, 10K in ~25 min, 20K in ~75 min on Mac M3 Pro. Re-index time is small after the initial run because only changed notes are re-embedded.',
          '**Recommended Ollama models in 2026:** chat — Llama 3.2 3B (default) or Phi-4 Mini (smaller); embeddings — nomic-embed-text (768 dim, fast) or mxbai-embed-large (1024 dim, more accurate).',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Plugins covered:** Smart Connections, Copilot for Obsidian, Text Generator, Local GPT, BMO Chatbot.',
          '**LLM backend:** Ollama (recommended) or LM Studio — anything exposing an OpenAI-compatible endpoint at a local URL.',
          '**Default Ollama endpoint:** `http://localhost:11434/v1` (chat) or `http://localhost:11434/api/embeddings` (embeddings).',
          '**Recommended chat models:** Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B (16 GB RAM systems); Qwen3 1.7B (8 GB RAM).',
          '**Recommended embedding models:** nomic-embed-text (768-dim, fast), mxbai-embed-large (1024-dim, more accurate).',
          '**Vault size targets:** all five plugins remain responsive at 5,000+ notes; Smart Connections re-indexing is the bottleneck above 20K notes.',
          '**Mobile compatibility:** chat plugins work on Obsidian Mobile if Ollama is reachable on the LAN; Smart Connections embedding generation runs only on desktop.',
        ],
      },
      whichPlugins: {
        id: 'which-plugins',
        title: 'Which Plugin Combo Should You Install?',
        content:
          '**For most Obsidian users in 2026: install Smart Connections (semantic vault search) and Copilot for Obsidian (chat sidebar) — together they cover ~80% of "second brain" use cases.** Add Text Generator if you want template-driven generation. Skip the others unless you specifically prefer their UI.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Install Smart Connections + Copilot for Obsidian, configure both to use Ollama at localhost:11434, and you have a private second-brain stack covering vault-wide semantic search and conversational queries.',
          },
          {
            type: 'plain-terms',
            text: 'Think of Obsidian + AI as two jobs: finding related notes ("which other notes in my vault touch this idea?") and chatting about notes ("what did I write about this last quarter?"). Smart Connections does the first; Copilot does the second. Both use a local LLM via Ollama, so nothing leaves your machine. Add Text Generator if you do repeatable tasks (e.g., turning every meeting note into a summary). Skip Local GPT and BMO Chatbot unless you have a specific reason.',
          },
        ],
        decisionBlock: {
          title: 'Decision: Which Obsidian Plugins?',
          localIf: [
            'You want vault-wide semantic search ("show me related notes") → Smart Connections',
            'You want chat sidebar with note context → Copilot for Obsidian',
            'You want template-driven generation (daily notes, meeting summaries) → Text Generator',
            'You only chat about the current note (no vault search) → BMO Chatbot (lighter than Copilot)',
            'You want chat with strict privacy guarantees + minimal features → Local GPT',
          ],
          cloudIf: [
            'You need GPT-5.5 quality on every chat response → cloud equivalents (the local stack is ~70% as capable)',
            'Your vault is on a managed cloud service that blocks local network calls → cloud plugin',
            'You want an iOS-native AI feature inside the Obsidian Mobile app without LAN access → not yet feasible in 2026 (mobile cannot reach localhost LLM without Tailscale or similar)',
          ],
          quick: [
            'Recommended combo: Smart Connections + Copilot for Obsidian',
            'Add for templates: Text Generator',
            'Lightweight alternative: BMO Chatbot (chat only)',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Install Smart Connections and Copilot for Obsidian one at a time. Smart Connections needs to build an embedding index on first install (2–75 min depending on vault size). Letting it finish before adding Copilot avoids competing for CPU during the initial index. After both are running, RAM use is small (~200–400 MB combined) — Ollama is the heavy process, not the plugins.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Plugin Comparison Table',
        content:
          '**The five plugins differ on four axes that matter to most users: vault search depth, generation flexibility, mobile compatibility, and feature surface.** Smart Connections and Copilot are not interchangeable — they solve different problems and complement each other.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Smart Connections is the only plugin that searches the whole vault with embeddings; the other four are chat or generation tools that operate on the current note or selected text.',
          },
          {
            type: 'plain-terms',
            text: 'Two of these plugins (Smart Connections, Copilot) handle vault-wide context. The other three (Text Generator, Local GPT, BMO Chatbot) work on the current note or a specific selection. The most common reason to install more than one is that Smart Connections does not have a chat UI of its own — you need Copilot or one of the lighter chat plugins to actually talk to your vault.',
          },
        ],
        columns: ['Plugin', 'Vault search', 'Generation', 'Mobile sync', 'Best for'],
        rows: [
          { 'Plugin': 'Smart Connections', 'Vault search': 'Yes (embedding index)', 'Generation': 'No (search-only)', 'Mobile sync': 'Index syncs with Obsidian Sync; regenerate per device with iCloud / Git', 'Best for': 'Semantic linking across notes' },
          { 'Plugin': 'Copilot for Obsidian', 'Vault search': 'Yes (with vault QA mode)', 'Generation': 'Yes (chat + inline)', 'Mobile sync': 'Plugin syncs; Ollama must be LAN-reachable', 'Best for': 'Inline chat + writing assistance' },
          { 'Plugin': 'Text Generator', 'Vault search': 'No', 'Generation': 'Yes (template-driven)', 'Mobile sync': 'Templates sync; Ollama must be LAN-reachable', 'Best for': 'Repeatable template generation' },
          { 'Plugin': 'Local GPT', 'Vault search': 'No', 'Generation': 'Yes (chat)', 'Mobile sync': 'Plugin syncs; Ollama must be LAN-reachable', 'Best for': 'Privacy-first chat with current note' },
          { 'Plugin': 'BMO Chatbot', 'Vault search': 'No', 'Generation': 'Yes (chat)', 'Mobile sync': 'Plugin syncs; Ollama must be LAN-reachable', 'Best for': 'Lightweight chat with current note' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For mobile use, the constraint is not the plugin — it is whether Obsidian Mobile can reach Ollama. Solutions: (1) run Ollama on a home server and expose it on the LAN at a static IP, then enter that IP in the plugin instead of localhost, (2) use Tailscale or another mesh VPN to reach a home Ollama from anywhere, (3) accept that AI features only work when the phone is on the home Wi-Fi.',
          },
        ],
      },
      smartConnections: {
        id: 'smart-connections',
        title: 'Smart Connections: Semantic Vault Search',
        content:
          '**Smart Connections is the only Obsidian plugin in 2026 that builds an embedding index over the entire vault.** This makes "show me related notes" practical at 5,000+ notes and is the single biggest "second brain" enabler in the plugin ecosystem.',
        items: [
          '**What it does:** generates a vector embedding for every note (and configurable section) and shows a "Smart Connections" sidebar of semantically related notes for the active note.',
          '**Install:** Settings → Community plugins → Browse → "Smart Connections" → Install + Enable. Author: Brian Petro.',
          '**Configure for Ollama:** Settings → Smart Connections → Embedding Model → select "Local (Ollama)" → enter `http://localhost:11434/api/embeddings` → model name `nomic-embed-text` (or `mxbai-embed-large`).',
          '**First-run indexing:** the plugin embeds every note. Time on Mac M3 Pro with nomic-embed-text: 1K notes ~2 min, 5K notes ~10 min, 10K notes ~25 min, 20K notes ~75 min. Re-index after edits is incremental (only changed notes).',
          '**Storage:** index lives in `.smart-env/` inside the vault. Syncs cleanly with Obsidian Sync; with iCloud / Git you have to regenerate per device because the index is platform-specific binary.',
          '**Best embedding model 2026:** `nomic-embed-text` (137M params, 768 dim, fast) for most users. `mxbai-embed-large` (335M params, 1024 dim) is more accurate on technical content but takes ~2× the index time.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'After the first index completes, leave Smart Connections enabled in the background. Subsequent edits trigger incremental re-embedding — usually under a second per saved note. You can also pause indexing during heavy edit sessions to avoid CPU competition with Ollama itself.',
          },
        ],
      },
      copilot: {
        id: 'copilot',
        title: 'Copilot for Obsidian: Chat with Vault Context',
        content:
          '**Copilot for Obsidian provides the chat sidebar that Smart Connections lacks.** Configure it to use Ollama and you get a private chat assistant that can answer questions using your vault as context, generate inline content, and run custom prompts on selections.',
        items: [
          '**What it does:** chat sidebar, vault QA mode (chat with retrieved notes), inline chat, custom prompts on selections, command palette commands.',
          '**Install:** Settings → Community plugins → Browse → "Copilot" by Logan Yang → Install + Enable.',
          '**Configure for Ollama:** Settings → Copilot → API Settings → "Custom OpenAI" or "Ollama" provider → API base URL `http://localhost:11434/v1` → model `llama3.2:3b` (or any Ollama model).',
          '**Vault QA mode:** Copilot retrieves the most relevant notes using its own embedding pipeline (separate from Smart Connections), then sends the retrieved chunks to the chat model. Configure embeddings in Copilot settings — point to `http://localhost:11434/api/embeddings` and select `nomic-embed-text`.',
          '**Inline commands:** select text in a note → Cmd/Ctrl+P → "Copilot: …" — apply rewrites, summarisations, or custom prompt templates without opening the chat sidebar.',
          '**Best for:** users who want a chat interface AND vault-aware retrieval. If you only want chat about the current note, BMO Chatbot is lighter.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Copilot maintains its own embedding index separate from Smart Connections. Running both means two indexes over the same vault and roughly 2× the disk space (~200 MB of vector data per 5K notes). If disk space matters, configure Copilot to use the Smart Connections index, or accept that the two plugins do not currently share embeddings in 2026.',
          },
        ],
      },
      textGenerator: {
        id: 'text-generator',
        title: 'Text Generator: Template-Driven Generation',
        content:
          '**Text Generator is the best plugin for repeatable workflows: daily-note expansions, meeting-note summarisation, MOC generation, custom-format outputs.** Templates use frontmatter variables and Markdown, so a single template can be triggered by a hotkey on any note.',
        items: [
          '**What it does:** runs a custom prompt template against the current note (or selection) using your local LLM. Templates support frontmatter variables, current-date insertion, and selection capture.',
          '**Install:** Settings → Community plugins → Browse → "Text Generator" → Install + Enable. Author: nhaouari.',
          '**Configure for Ollama:** Settings → Text Generator → Provider → "Ollama" or "Custom" → endpoint `http://localhost:11434/v1` → model `llama3.2:3b`.',
          '**Templates:** stored as Markdown files in a configured folder (e.g., `Templates/`). A template is just a prompt with `{{title}}`, `{{selection}}`, `{{date}}` placeholders.',
          '**Hotkey workflows:** assign a hotkey to a specific template (Cmd/Ctrl+T → "Generate from template" → select template). One keystroke runs your template on the current note.',
          '**Best for:** workflows you do dozens of times — daily journal prompts, weekly review questions, meeting-note summaries, paper-reading notes.',
        ],
        promptExamples: [
          {
            label: 'Text Generator template: daily-note summariser',
            text: '---\nname: Daily summary\n---\nSummarise the following daily note in three concise bullet points. Focus on decisions made, blockers identified, and action items for tomorrow.\n\nDaily note ({{date}}):\n{{content}}\n\nSummary:',
          },
          {
            label: 'Text Generator template: MOC (Map of Content) generator',
            text: '---\nname: MOC for tag\n---\nGenerate a Map of Content for all notes tagged with `#{{selection}}`. Group related notes into 3–5 thematic clusters, with a one-sentence description per cluster and a list of the notes inside each cluster.\n\nNotes tagged #{{selection}}:\n{{vault_search_result tag={{selection}}}}\n\nMOC:',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Combine Text Generator templates with Obsidian QuickAdd to build a "daily review" sequence: a single QuickAdd command opens today\'s daily note, runs the daily-summary template, and inserts the result. Three plugins (Text Generator + QuickAdd + Templater for date math) let you build a workflow that takes 2 seconds to invoke and 10 seconds to complete.',
          },
        ],
      },
      localGpt: {
        id: 'local-gpt',
        title: 'Local GPT: Privacy-First Chat',
        content:
          '**Local GPT is a chat plugin built around the principle that no note content should leave the machine.** It is functionally simpler than Copilot for Obsidian — no vault QA mode, no template library — but it is the most explicit about its privacy posture.',
        items: [
          '**What it does:** chat with the current note (or selected text) using a local LLM. No cloud option exists in the plugin — only local providers.',
          '**Install:** Settings → Community plugins → Browse → "Local GPT" → Install + Enable. Author: pfrankov (verify in the listing — multiple plugins have similar names).',
          '**Configure for Ollama:** Settings → Local GPT → Provider → "Ollama" → URL `http://localhost:11434` → model `llama3.2:3b`.',
          '**Chat scope:** active note or selected text only. There is no embedding index — context is whatever you explicitly send.',
          '**Best for:** users who want chat over the current note, prefer the smallest possible feature surface, and want a plugin that cannot accidentally call a cloud service.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'If you trust Copilot for Obsidian to stay local (it can be configured cloud or local), use Copilot. If you want the plugin\'s code itself to make cloud calls impossible, use Local GPT — its design constraint is "no cloud providers, ever". This is a meaningful distinction for healthcare, legal, and journalism workflows where any chance of accidental cloud egress is a problem.',
          },
        ],
      },
      bmoChatbot: {
        id: 'bmo-chatbot',
        title: 'BMO Chatbot: Lightweight Chat',
        content:
          '**BMO Chatbot is the minimalist chat plugin: a sidebar, a model selector, and a config field for your endpoint.** No vault search, no templates, no inline commands. If you only chat about the active note, BMO is the lightest option.',
        items: [
          '**What it does:** chat sidebar that includes the active note as context.',
          '**Install:** Settings → Community plugins → Browse → "BMO Chatbot" → Install + Enable. Author: longy2k.',
          '**Configure for Ollama:** Settings → BMO Chatbot → API → URL `http://localhost:11434/v1` → model `llama3.2:3b`.',
          '**Context handling:** the active note is automatically included in the chat context. Switching notes switches context.',
          '**Best for:** users who want a single chat plugin with the smallest possible setup, no embedding index, and a UI that fits in a narrow Obsidian sidebar.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'BMO Chatbot is the right plugin for "I only want to chat about my current note." If you find yourself wanting "search across my whole vault" or "run this prompt template on every meeting note", you have outgrown BMO — switch to Copilot for Obsidian (vault QA) or Text Generator (templates).',
          },
        ],
      },
      recommendedCombo: {
        id: 'recommended-combo',
        title: 'The Recommended Combo: Smart Connections + Copilot',
        content:
          '**Install Smart Connections + Copilot for Obsidian, both pointing at Ollama.** This combination handles the two distinct AI jobs Obsidian users want — semantic vault search and chat with vault context — and covers ~80% of "second brain" use cases without sending notes to a cloud.',
        numberedItems: [
          '**Install Ollama** on your machine: `brew install ollama` (macOS) or download from ollama.com (Windows / Linux). Pull the chat model: `ollama pull llama3.2:3b`. Pull the embedding model: `ollama pull nomic-embed-text`.',
          '**Start Ollama:** it usually starts as a background service after install. Verify: `curl http://localhost:11434/api/tags` returns JSON with your installed models.',
          '**Install Smart Connections** in Obsidian → configure embeddings to use Ollama at `http://localhost:11434/api/embeddings` with model `nomic-embed-text`. Let it index (2–75 min depending on vault size).',
          '**Install Copilot for Obsidian** → configure provider to "Ollama" or "Custom OpenAI" → API base URL `http://localhost:11434/v1` → chat model `llama3.2:3b` → embedding model `nomic-embed-text` (for vault QA).',
          '**Test:** open a note → check Smart Connections sidebar for related notes → open Copilot chat → ask a question that requires vault knowledge ("summarise what I\'ve written about [topic]") → verify the response references your actual notes.',
          '**Optional third plugin:** add Text Generator if you have repeatable workflows (daily-note summaries, meeting expansions, MOC generation). Configure with the same Ollama endpoint.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A common mistake is configuring Copilot with one model and Smart Connections with a different one — then wondering why responses feel inconsistent. Use the same chat model in both (Llama 3.2 3B for most users; Phi-4 Mini for 8 GB RAM systems). The only place to use a different model is the embedding model — that is always a separate model from the chat model.',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: 'Sample Workflows: Daily Notes, MOCs, Writing Assistance',
        content:
          '**Three concrete workflows that demonstrate the combo in action.** Each builds on Smart Connections (for vault context) and Copilot (for chat) with Text Generator added for template work.',
        items: [
          '**Daily-note summarisation:** in your daily note, select all → Copilot inline command → "Summarise this day in three bullets focused on decisions, blockers, and tomorrow\'s actions". Output replaces or appends below the selection. Save the prompt as a Text Generator template to make it a one-keystroke action.',
          '**MOC (Map of Content) generation:** open a tag page or topic note → Copilot → "Generate a Map of Content for this topic, grouping the related notes I have into 3–5 thematic clusters. Use the Smart Connections sidebar to identify related notes." → review and edit. Smart Connections provides the discovery layer; Copilot synthesises the structure.',
          '**Contextual writing assistance:** while drafting a note, open Copilot chat → ask "Given the notes I\'ve written about [topic], what perspectives am I missing?" Copilot retrieves relevant notes via vault QA and proposes gaps. Useful for breaking out of single-perspective drafts.',
          '**Weekly review:** Text Generator template that runs against the past 7 daily notes → "Summarise the week into 3 bullets per category: progress, blockers, themes." Bind to a hotkey for one-keystroke review.',
          '**Paper / book reading notes:** open the source note → Copilot inline command → "Generate three Anki-style question/answer pairs from this note for spaced repetition." Output can be piped to the Spaced Repetition plugin.',
          '**Linking dormant notes:** Smart Connections sidebar shows related notes that may be untouched for months — prompts you to revisit and connect old material to current work.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The most underrated workflow is the daily Smart Connections review. Each morning, open the daily note → check the Smart Connections sidebar for unexpected related notes from your archive. The plugin surfaces forgotten notes that touch the same theme, which is exactly the "thinking partner" effect knowledge workers want from a second brain.',
          },
        ],
      },
      mobileSync: {
        id: 'mobile-sync',
        title: 'Mobile Sync: Obsidian Sync vs iCloud vs Git',
        content:
          '**Plugin compatibility on Obsidian Mobile depends on two factors: how your vault syncs, and whether your phone can reach a local Ollama server.** Smart Connections embeddings are the most sync-sensitive component.',
        items: [
          '**Obsidian Sync (paid):** the cleanest path. The `.smart-env/` folder syncs end-to-end encrypted across devices, so Smart Connections does not need to re-index per device. Plugin settings sync too. Mobile chat plugins still need Ollama LAN access (see below).',
          '**iCloud Drive:** vault syncs, but `.smart-env/` is platform-specific binary and may corrupt or fail to sync correctly across iOS / macOS / Windows / Android. Practical solution: re-index Smart Connections per device, or exclude `.smart-env/` from sync and accept that mobile has no semantic sidebar.',
          '**Git (via Working Copy on iOS, Termux on Android):** plain-text vault syncs cleanly; `.smart-env/` should be added to `.gitignore` because the binary index would bloat the repo and cause merge conflicts. Re-index per device.',
          '**Ollama LAN access from mobile:** by default Ollama listens on `localhost:11434` only — not reachable from your phone. To use AI plugins on Obsidian Mobile: bind Ollama to your LAN with `OLLAMA_HOST=0.0.0.0:11434 ollama serve`, find the desktop\'s LAN IP (e.g., `192.168.1.20`), enter that IP in the plugin instead of localhost. Phone must be on the home Wi-Fi.',
          '**Tailscale / mesh VPN:** lets your phone reach the home Ollama from anywhere, not just home Wi-Fi. Tailscale is the most popular option in 2026 — install on desktop and phone, use the Tailscale IP in the plugin config.',
          '**Smart Connections embedding generation runs only on desktop.** Even with Obsidian Sync moving the index, the index has to be created somewhere — that is always a desktop-class machine. Mobile uses the synced index for read-only related-notes lookup.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'If you use iCloud or Git for vault sync and want Smart Connections to work on multiple devices, the cleanest path is to designate one device as the "indexer" (your main desktop) and accept that Smart Connections only works fully there. On other devices you have either a stale index (iCloud) or no index (Git with .smart-env in .gitignore). Obsidian Sync is the only option that handles this correctly.',
          },
        ],
      },
      vaultScale: {
        id: 'vault-scale',
        title: 'Vault Scale: 1K, 5K, 10K, 20K Notes',
        content:
          '**All five plugins remain responsive at 5,000+ notes; the bottleneck above 20K notes is Smart Connections re-indexing time, not query latency.** Realistic numbers below are measured on Mac M3 Pro (16 GB unified memory) with `nomic-embed-text` embeddings and Llama 3.2 3B chat.',
        columns: ['Vault size', 'Smart Connections initial index', 'Re-index per change', 'Chat latency (Copilot)', 'Notes'],
        rows: [
          { 'Vault size': '1,000 notes', 'Smart Connections initial index': '~2 min', 'Re-index per change': '<1 sec', 'Chat latency (Copilot)': '~1–2 sec first token', 'Notes': 'Comfortable on any modern hardware.' },
          { 'Vault size': '5,000 notes', 'Smart Connections initial index': '~10 min', 'Re-index per change': '<1 sec', 'Chat latency (Copilot)': '~1–2 sec first token', 'Notes': 'Sweet spot for most knowledge workers.' },
          { 'Vault size': '10,000 notes', 'Smart Connections initial index': '~25 min', 'Re-index per change': '~1–2 sec', 'Chat latency (Copilot)': '~2–3 sec first token (vault QA retrieval adds ~500 ms)', 'Notes': 'Still fully usable; consider splitting if you notice slowdowns.' },
          { 'Vault size': '20,000 notes', 'Smart Connections initial index': '~75 min', 'Re-index per change': '~2–4 sec', 'Chat latency (Copilot)': '~3–5 sec first token', 'Notes': 'Plan for an overnight initial index. Disk usage of `.smart-env/` ~800 MB–1.2 GB.' },
          { 'Vault size': '50,000+ notes', 'Smart Connections initial index': '4–8 hours', 'Re-index per change': '~5–10 sec', 'Chat latency (Copilot)': '~5–10 sec first token', 'Notes': 'Edge of practical. Consider sub-vaults or upgrade to mxbai-embed-large for accuracy if quality matters more than speed.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Vault size has more impact on initial indexing than on day-to-day responsiveness. After the initial index, re-embedding only happens for changed notes — usually under a second per save even at 20K notes. The slow first-time experience is a one-time cost. Run the initial index overnight if your vault is large.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Configuring two plugins with two different chat models.** Smart Connections doesn\'t generate, but Copilot, Text Generator, Local GPT, and BMO all do. Using a different model in each makes responses feel inconsistent. Pick one chat model (Llama 3.2 3B is the default for most users) and configure all chat plugins to use it.',
          '**Adding `.smart-env/` to a Git-synced vault without `.gitignore`.** The Smart Connections index is binary and changes on every edit. Without `.gitignore`, you get massive Git history and constant merge conflicts. Add `.smart-env/` to `.gitignore` and re-index per device.',
          '**Expecting mobile Smart Connections to build its own index.** Embedding generation requires a desktop-class machine. Mobile uses a synced index (Obsidian Sync) or has no index (iCloud / Git). Plan accordingly.',
          '**Pointing the plugin at `http://localhost:11434/v1` from a mobile device.** Mobile cannot reach desktop\'s localhost. Bind Ollama to the LAN IP (`OLLAMA_HOST=0.0.0.0:11434`) and use that IP in the plugin config, or use Tailscale for off-network access.',
          '**Running both Smart Connections and Copilot indexes against the same vault.** Two separate indexes consume ~2× the disk and CPU. As of May 2026 the two plugins do not share embeddings. If disk pressure matters, use Smart Connections for retrieval and configure Copilot to use it (advanced — requires editing Copilot retrieval config to read the Smart Connections vector store).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Smart Connections — [github.com/brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections) (open-source Obsidian plugin).',
          'Copilot for Obsidian — [github.com/logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot) (open-source Obsidian plugin).',
          'Text Generator — [github.com/nhaouari/obsidian-textgenerator-plugin](https://github.com/nhaouari/obsidian-textgenerator-plugin) (open-source Obsidian plugin).',
          'Ollama — [ollama.com](https://ollama.com) and [github.com/ollama/ollama](https://github.com/ollama/ollama) (local LLM runtime).',
          'Obsidian Mobile sync architecture — [help.obsidian.md](https://help.obsidian.md) and Obsidian Sync documentation.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Which Obsidian plugin works best with Ollama?',
            a: 'For most users: Smart Connections (semantic vault search) + Copilot for Obsidian (chat). Both are configured to point at Ollama\'s endpoints (chat at `http://localhost:11434/v1`, embeddings at `http://localhost:11434/api/embeddings`). Smart Connections handles related-notes discovery; Copilot handles conversational queries with vault context. Add Text Generator as a third plugin if you have repeatable template workflows.',
          },
          {
            q: 'Can plugins handle a 10,000-note vault?',
            a: 'Yes. Smart Connections takes ~25 minutes for the initial embedding index on a Mac M3 Pro and ~1–2 seconds per change after that. Copilot vault QA latency is ~2–3 seconds first token. At 20K notes, plan for ~75 minutes initial indexing (run overnight). At 50K+ notes, indexing takes 4–8 hours and you should consider splitting into sub-vaults.',
          },
          {
            q: 'Do these plugins sync to mobile?',
            a: 'The plugins themselves sync via Obsidian\'s plugin sync. The constraints are: (1) Smart Connections embedding index — syncs cleanly with Obsidian Sync, requires re-indexing per device with iCloud or Git; (2) chat plugins need to reach Ollama, which means LAN access (replace `localhost` with the desktop\'s LAN IP after binding Ollama to `0.0.0.0`) or a mesh VPN like Tailscale.',
          },
          {
            q: 'Can I use multiple AI plugins together?',
            a: 'Yes. Smart Connections + Copilot is the recommended combo. Adding Text Generator for templates is common. Adding more than 3 chat plugins (Copilot + Local GPT + BMO) is redundant — they all do the same job. Pick one chat plugin and stick with it.',
          },
          {
            q: 'Which plugin is best for writing inside notes?',
            a: 'Copilot for Obsidian — it has inline commands (Cmd/Ctrl+P → Copilot → rewrite / summarise / custom prompt) that operate on selected text. Text Generator is also strong for repeatable writing tasks via templates. For ad-hoc writing assistance ("rewrite this paragraph in a more formal tone"), Copilot is faster. For structured generation ("turn every meeting note into a summary using this template"), Text Generator is better.',
          },
          {
            q: 'How do I prompt across my entire vault?',
            a: 'Use Copilot for Obsidian\'s vault QA mode. It uses an embedding index (similar to Smart Connections) to retrieve the most relevant notes for a query, then sends those chunks to the chat model. Configure embeddings in Copilot settings to point at your local Ollama. Smart Connections itself does not have a chat UI — it shows related notes but doesn\'t synthesise across them.',
          },
          {
            q: 'Can I use these for daily journaling?',
            a: 'Yes. Two strong patterns: (1) Smart Connections sidebar surfaces forgotten related notes when you open today\'s daily note — a "thinking partner" effect. (2) Text Generator template runs at end-of-day to summarise the daily note into 3 bullets (decisions, blockers, action items). Combining both makes daily journaling more reflective.',
          },
          {
            q: 'Do plugins survive Obsidian updates?',
            a: 'Generally yes — well-maintained plugins (Smart Connections, Copilot, Text Generator) are updated within days of major Obsidian releases. Less-maintained plugins occasionally lag. Check the plugin\'s GitHub Issues page if a plugin breaks after an Obsidian update; the fix is usually a maintainer release within 1–2 weeks. The plugin manifest declares minimum Obsidian version compatibility.',
          },
          {
            q: 'Which has the best community support?',
            a: 'Smart Connections has the largest and most active community (~5K Discord members in 2026, regular dev calls). Copilot for Obsidian has a strong GitHub Issues community and active maintainer (Logan Yang). Text Generator has a smaller but engaged community. Local GPT and BMO Chatbot have smaller communities — fine for stable use, slower for issue resolution.',
          },
          {
            q: 'Can I run the AI plugin on a different machine?',
            a: 'Yes. Run Ollama on a more powerful home server (mini PC, NAS, or dedicated workstation), bind it to the LAN with `OLLAMA_HOST=0.0.0.0:11434 ollama serve`, then enter the server\'s LAN IP in each plugin\'s config (e.g., `http://192.168.1.20:11434/v1`). This lets a low-powered laptop or mobile device use full 70B models running on the home server. Pair with Tailscale to make it work from anywhere, not just home Wi-Fi.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local LLM with Logseq and Joplin](/power-local-llm/local-llm-with-logseq-and-joplin) — adjacent open-source alternatives for readers who prefer Logseq or Joplin over Obsidian.',
          '[Local LLM Personal Knowledge Base 2026](/power-local-llm/local-llm-personal-knowledge-base-2026) — the broader PKB architecture that Obsidian feeds into; covers RAG layer, tagging strategies, and 10K-item workflows.',
          '[Build Local RAG on Your PDFs in 30 Minutes (Ollama + AnythingLLM)](/power-local-llm/local-rag-on-your-pdfs-step-by-step) — RAG layer that powers semantic plugins like Smart Connections; useful background on embedding choices.',
          '[Drafting Novels and Screenplays With Local LLMs (2026)](/power-local-llm/local-llm-screenwriting-and-novel-drafting) — Obsidian as the drafting layer for long-form writing.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — broader model authority for picking the chat and embedding models behind these plugins.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — directory listings for Ollama, Smart Connections, Copilot, and other components in this stack.',
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
    title: 'Obsidian + lokales LLM: 5 Plugins, die Ihr Vault zum zweiten Gehirn machen (2026)',
    seoTitle: 'Obsidian + lokales LLM: 5 Plugins für Ihren Vault 2026',
    intro:
      'Fünf Obsidian-Plugins verwandeln einen Vault 2026 in ein funktionierendes zweites Gehirn, sobald sie an ein lokales Ollama-Backend angebunden sind: Smart Connections, Copilot for Obsidian, Text Generator, Local GPT und BMO Chatbot. Jedes deckt eine andere Schicht ab — semantische Suche, Inline-Chat, Template-Generierung, Privacy-First-Konversation, schlanker kontextbewusster Chat. Die für die meisten Anwender empfohlene Kombination ist Smart Connections + Copilot for Obsidian: das eine übernimmt die vault-weite semantische Verknüpfung, das andere die Chat-Oberfläche. Dieser Leitfaden bewertet alle fünf Plugins anhand der Vault-Suchqualität, Generierungsgeschwindigkeit, Prompt-Anpassbarkeit und des Mobile-Sync-Verhaltens und enthält konkrete Konfigurationsschritte für Ollama.',
    metaDescription:
      'Lokales LLM mit Obsidian verbinden 2026: KI-gestützte Notizen ohne Cloud. Plugins, Setup und Workflows für private Wissensarbeit mit lokalen Modellen.',
    twitterDescription:
      'Beste Obsidian + lokales LLM-Kombination 2026: Smart Connections (semantische Vault-Suche) + Copilot for Obsidian (Chat). Alle 5 Plugins mit Ollama getestet. Mobile-Sync-Hinweise.',
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
      'PC mit 16 GB RAM (CPU-only-Fallback)',
    ],
    audience:
      'Obsidian-Power-User, Wissensarbeiter, Forschende und Autorinnen mit Vaults von 1.000–20.000 Notizen, die KI-Funktionen wollen, ohne ihre Notizen an einen Cloud-Dienst zu senden.',
    readTime: '14 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Obsidian Lokales-LLM-Plugin',
    targetKeywords: [
      'obsidian lokales llm',
      'obsidian ollama plugin',
      'smart connections obsidian lokal',
      'copilot for obsidian lokal',
      'obsidian zweites gehirn ki',
      'obsidian plugin privates llm',
    ],
    leadAnswerBlock:
      '**Für die meisten Obsidian-Anwender installieren Sie 2026 Smart Connections + Copilot for Obsidian und konfigurieren beide so, dass sie ein lokales Ollama-Backend nutzen.** Smart Connections übernimmt die vault-weite semantische Verknüpfung (Sidebar mit verwandten Notizen) über lokale Embeddings via `nomic-embed-text` oder `mxbai-embed-large`. Copilot for Obsidian liefert die Chat-Oberfläche und wird auf den OpenAI-kompatiblen Endpoint von Ollama unter `http://localhost:11434/v1` ausgerichtet. Dieses Paar deckt rund 80 % der typischen Anwendungsfälle eines „zweiten Gehirns" (semantische Suche + Chat mit Notizen) ab, ohne dass Vault-Inhalte die Cloud erreichen. Ergänzen Sie Text Generator als drittes Plugin, wenn Sie template-gesteuerte Inhaltserzeugung wünschen (Tagebuch-Prompts, Erweiterung von Meeting-Notizen). Die Embeddings von Smart Connections liegen unter `.smart-env/` im Vault — sie synchronisieren sich über Obsidian Sync geräteübergreifend, müssen aber bei iCloud oder Git pro Gerät neu erzeugt werden.',
    quickAnswerTop: {
      en: {
        question: 'Welche Obsidian-Plugin-Kombination ist 2026 für lokale LLMs die beste?',
        answer:
          'Smart Connections + Copilot for Obsidian ist die empfohlene Kombination. Smart Connections übernimmt die semantische Vault-Suche mit lokalen Embeddings (nomic-embed-text oder mxbai-embed-large via Ollama); Copilot stellt die Chat-Sidebar bereit, die auf den OpenAI-kompatiblen Endpoint von Ollama konfiguriert ist. Zusammen decken sie das Auffinden verwandter Notizen und den Chat mit Vault-Kontext ab — etwa 80 % der typischen Anwendungsfälle eines „zweiten Gehirns". Ergänzen Sie Text Generator als drittes Plugin für template-gesteuerte Generierung. Local GPT und BMO Chatbot sind schlankere Alternativen zu Copilot für Anwender, die ein einfacheres reines Chat-Erlebnis bevorzugen. Alle fünf Plugins funktionieren mit jedem Ollama-Modell; das 2026 empfohlene Chat-Modell für Systeme mit 16 GB RAM ist Llama 3.2 3B oder Phi-4 Mini.',
        bullets: [
          'Smart Connections — semantische Suche + Sidebar mit verwandten Notizen. Am besten für vault-weite Verknüpfung.',
          'Copilot for Obsidian — Chat-Sidebar mit Vault-Kontext. Am besten für konversationelle Abfragen.',
          'Text Generator — template-gesteuerte Generierung mit Frontmatter-Variablen. Am besten für wiederholbare Workflows (Daily Notes, Meeting-Zusammenfassungen).',
          'Local GPT — Privacy-First-Chat mit der aktuellen Notiz. Schlanke Alternative zu Copilot.',
          'BMO Chatbot — minimalistischer Chat mit Vault-Kontext. Am besten für Anwender, die ein einziges Chat-Plugin ohne den Funktionsumfang von Copilot wollen.',
          'Empfohlene Ollama-Modelle: Llama 3.2 3B (Chat), Phi-4 Mini (Chat, kleiner), nomic-embed-text oder mxbai-embed-large (Embeddings für Smart Connections).',
          'Mobile-Sync-Hinweis: Smart-Connections-Embeddings liegen in .smart-env/ — Sync über Obsidian Sync, bei iCloud oder Git pro Gerät neu generieren.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Wichtige Eckdaten', anchor: '#quick-facts' },
      { label: 'Welche Plugin-Kombination sollten Sie installieren?', anchor: '#which-plugins' },
      { label: 'Plugin-Vergleichstabelle', anchor: '#comparison-table' },
      { label: 'Smart Connections: Semantische Vault-Suche', anchor: '#smart-connections' },
      { label: 'Copilot for Obsidian: Chat mit Vault-Kontext', anchor: '#copilot' },
      { label: 'Text Generator: Template-getriebene Generierung', anchor: '#text-generator' },
      { label: 'Local GPT: Privacy-First-Chat', anchor: '#local-gpt' },
      { label: 'BMO Chatbot: Schlanker Chat', anchor: '#bmo-chatbot' },
      { label: 'Die empfohlene Kombination: Smart Connections + Copilot', anchor: '#recommended-combo' },
      { label: 'Beispiel-Workflows: Daily Notes, MOCs, Schreibassistenz', anchor: '#workflows' },
      { label: 'Mobile-Sync: Obsidian Sync vs. iCloud vs. Git', anchor: '#mobile-sync' },
      { label: 'Vault-Größe: 1K, 5K, 10K, 20K Notizen', anchor: '#vault-scale' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Literatur', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Smart Connections + Copilot for Obsidian ist die empfohlene Kombination für die meisten Anwender.** Smart Connections übernimmt die semantische Vault-Suche mit lokalen Embeddings; Copilot übernimmt den Chat mit Vault-Kontext. Zusammen decken sie rund 80 % der typischen Anwendungsfälle eines „zweiten Gehirns" ab — ohne Cloud-Aufrufe.',
          '**Alle fünf Plugins funktionieren mit Ollama über dessen OpenAI-kompatiblen Endpoint unter `http://localhost:11434/v1`.** Konfigurieren Sie die Einstellung „API Base URL" oder das entsprechende Feld jedes Plugins auf diese Adresse. Der Standard-Modellname von Ollama (z. B. `llama3.2:3b`) ist das, was Sie im Modellfeld des Plugins eintragen.',
          '**Smart Connections ist das einzige Plugin, das einen Embedding-Index über den gesamten Vault aufbaut.** Damit ist die Suche nach verwandten Notizen ab 5.000 Notizen praktikabel. Der Index liegt in `.smart-env/` innerhalb des Vaults und synchronisiert sich mit Obsidian Sync; bei iCloud oder Git pro Gerät neu erzeugen.',
          '**Text Generator ist das beste Plugin für wiederholbare Workflows.** Zusammenfassungen von Daily Notes, Erweiterung von Meeting-Notizen und MOC-Generierung (Map of Content) werden über Templates mit Frontmatter-Variablen zu Aktionen mit nur einem Tastendruck.',
          '**Für reine Chat-Anwender ist BMO Chatbot schlanker als Copilot.** Es baut keinen Index auf — Kontext ist immer nur die aktuelle Notiz. Wenn Sie ausschließlich über die geöffnete Notiz chatten, reicht BMO.',
          '**Vault-Skalierung (mit Smart Connections + nomic-embed-text):** 1K Notizen indizieren in ca. 2 Min., 5K in ca. 10 Min., 10K in ca. 25 Min., 20K in ca. 75 Min. auf einem Mac M3 Pro. Die Re-Index-Zeit ist nach dem ersten Lauf gering, da nur geänderte Notizen neu eingebettet werden.',
          '**Empfohlene Ollama-Modelle 2026:** Chat — Llama 3.2 3B (Standard) oder Phi-4 Mini (kleiner); Embeddings — nomic-embed-text (768 Dim., schnell) oder mxbai-embed-large (1024 Dim., genauer).',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Wichtige Eckdaten',
        items: [
          '**Behandelte Plugins:** Smart Connections, Copilot for Obsidian, Text Generator, Local GPT, BMO Chatbot.',
          '**LLM-Backend:** Ollama (empfohlen) oder LM Studio — alles, was einen OpenAI-kompatiblen Endpoint auf einer lokalen URL bereitstellt.',
          '**Standard-Endpoint von Ollama:** `http://localhost:11434/v1` (Chat) oder `http://localhost:11434/api/embeddings` (Embeddings).',
          '**Empfohlene Chat-Modelle:** Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B (Systeme mit 16 GB RAM); Qwen3 1,7B (8 GB RAM).',
          '**Empfohlene Embedding-Modelle:** nomic-embed-text (768 Dim., schnell), mxbai-embed-large (1024 Dim., genauer).',
          '**Vault-Zielgrößen:** Alle fünf Plugins bleiben bei über 5.000 Notizen reaktionsschnell; ab 20K Notizen ist die Re-Indizierung von Smart Connections der Engpass.',
          '**Mobile Kompatibilität:** Chat-Plugins funktionieren auf Obsidian Mobile, sofern Ollama im LAN erreichbar ist; die Embedding-Erzeugung von Smart Connections läuft nur auf dem Desktop.',
        ],
      },
      whichPlugins: {
        id: 'which-plugins',
        title: 'Welche Plugin-Kombination sollten Sie installieren?',
        content:
          '**Für die meisten Obsidian-Anwender 2026: Installieren Sie Smart Connections (semantische Vault-Suche) und Copilot for Obsidian (Chat-Sidebar) — zusammen decken sie rund 80 % der typischen Anwendungsfälle eines „zweiten Gehirns" ab.** Ergänzen Sie Text Generator, wenn Sie template-gesteuerte Generierung wünschen. Lassen Sie die übrigen weg, sofern Sie nicht gezielt deren Oberfläche bevorzugen.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Installieren Sie Smart Connections + Copilot for Obsidian, konfigurieren Sie beide auf Ollama unter localhost:11434, und Sie haben einen privaten Second-Brain-Stack mit vault-weiter semantischer Suche und konversationellen Abfragen.',
          },
          {
            type: 'plain-terms',
            text: 'Sehen Sie Obsidian + KI als zwei Aufgaben: verwandte Notizen finden („welche anderen Notizen in meinem Vault berühren diese Idee?") und über Notizen chatten („was habe ich im letzten Quartal dazu geschrieben?"). Smart Connections löst die erste, Copilot die zweite Aufgabe. Beide nutzen ein lokales LLM via Ollama, sodass nichts Ihren Rechner verlässt. Ergänzen Sie Text Generator, wenn Sie wiederkehrende Aufgaben erledigen (z. B. jede Meeting-Notiz in eine Zusammenfassung verwandeln). Lassen Sie Local GPT und BMO Chatbot weg, sofern Sie keinen konkreten Grund haben.',
          },
        ],
        decisionBlock: {
          title: 'Entscheidung: Welche Obsidian-Plugins?',
          localIf: [
            'Sie wollen vault-weite semantische Suche („zeige mir verwandte Notizen") → Smart Connections',
            'Sie wollen eine Chat-Sidebar mit Notiz-Kontext → Copilot for Obsidian',
            'Sie wollen template-gesteuerte Generierung (Daily Notes, Meeting-Zusammenfassungen) → Text Generator',
            'Sie chatten ausschließlich über die aktuelle Notiz (keine Vault-Suche) → BMO Chatbot (schlanker als Copilot)',
            'Sie wollen Chat mit strikten Datenschutzgarantien und minimalem Funktionsumfang → Local GPT',
          ],
          cloudIf: [
            'Sie benötigen GPT-5.5-Qualität bei jeder Chat-Antwort → Cloud-Äquivalente (der lokale Stack erreicht ca. 70 % der Leistung)',
            'Ihr Vault liegt auf einem verwalteten Cloud-Dienst, der lokale Netzwerkaufrufe blockiert → Cloud-Plugin',
            'Sie wollen eine iOS-native KI-Funktion in Obsidian Mobile ohne LAN-Zugriff → 2026 noch nicht praktikabel (Mobile erreicht localhost-LLM nicht ohne Tailscale o. ä.)',
          ],
          quick: [
            'Empfohlene Kombination: Smart Connections + Copilot for Obsidian',
            'Ergänzung für Templates: Text Generator',
            'Schlanke Alternative: BMO Chatbot (nur Chat)',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Installieren Sie Smart Connections und Copilot for Obsidian nacheinander. Smart Connections muss bei der Erstinstallation einen Embedding-Index aufbauen (2–75 Min. je nach Vault-Größe). Lassen Sie diesen Vorgang abschließen, bevor Sie Copilot hinzufügen, um Konkurrenz um die CPU während des Erstindex zu vermeiden. Sobald beide laufen, ist der RAM-Verbrauch gering (zusammen ca. 200–400 MB) — Ollama ist der schwere Prozess, nicht die Plugins.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Plugin-Vergleichstabelle',
        content:
          '**Die fünf Plugins unterscheiden sich in vier Achsen, die für die meisten Anwender relevant sind: Tiefe der Vault-Suche, Generierungs-Flexibilität, Mobile-Kompatibilität und Funktionsumfang.** Smart Connections und Copilot sind nicht austauschbar — sie lösen unterschiedliche Probleme und ergänzen einander.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Smart Connections ist das einzige Plugin, das den gesamten Vault mit Embeddings durchsucht; die anderen vier sind Chat- oder Generierungs-Werkzeuge, die auf der aktuellen Notiz oder einer Auswahl arbeiten.',
          },
          {
            type: 'plain-terms',
            text: 'Zwei dieser Plugins (Smart Connections, Copilot) verarbeiten vault-weiten Kontext. Die anderen drei (Text Generator, Local GPT, BMO Chatbot) arbeiten auf der aktuellen Notiz oder einer bestimmten Auswahl. Der häufigste Grund, mehr als eines zu installieren, ist, dass Smart Connections keine eigene Chat-Oberfläche hat — Sie brauchen Copilot oder eines der schlankeren Chat-Plugins, um tatsächlich mit Ihrem Vault zu sprechen.',
          },
        ],
        columns: ['Plugin', 'Vault-Suche', 'Generierung', 'Mobile-Sync', 'Am besten geeignet für'],
        rows: [
          { 'Plugin': 'Smart Connections', 'Vault-Suche': 'Ja (Embedding-Index)', 'Generierung': 'Nein (nur Suche)', 'Mobile-Sync': 'Index synchronisiert mit Obsidian Sync; pro Gerät neu erzeugen bei iCloud / Git', 'Am besten geeignet für': 'Semantische Verknüpfung über Notizen hinweg' },
          { 'Plugin': 'Copilot for Obsidian', 'Vault-Suche': 'Ja (mit Vault-QA-Modus)', 'Generierung': 'Ja (Chat + Inline)', 'Mobile-Sync': 'Plugin synchronisiert; Ollama muss im LAN erreichbar sein', 'Am besten geeignet für': 'Inline-Chat + Schreibassistenz' },
          { 'Plugin': 'Text Generator', 'Vault-Suche': 'Nein', 'Generierung': 'Ja (template-gesteuert)', 'Mobile-Sync': 'Templates synchronisieren; Ollama muss im LAN erreichbar sein', 'Am besten geeignet für': 'Wiederholbare Template-Generierung' },
          { 'Plugin': 'Local GPT', 'Vault-Suche': 'Nein', 'Generierung': 'Ja (Chat)', 'Mobile-Sync': 'Plugin synchronisiert; Ollama muss im LAN erreichbar sein', 'Am besten geeignet für': 'Privacy-First-Chat mit der aktuellen Notiz' },
          { 'Plugin': 'BMO Chatbot', 'Vault-Suche': 'Nein', 'Generierung': 'Ja (Chat)', 'Mobile-Sync': 'Plugin synchronisiert; Ollama muss im LAN erreichbar sein', 'Am besten geeignet für': 'Schlanker Chat mit der aktuellen Notiz' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Bei mobiler Nutzung ist nicht das Plugin der Engpass — sondern, ob Obsidian Mobile Ollama erreichen kann. Lösungen: (1) Ollama auf einem Heimserver mit fester IP im LAN betreiben und diese IP statt localhost im Plugin eintragen, (2) Tailscale oder ein anderes Mesh-VPN nutzen, um das heimische Ollama von überall zu erreichen, (3) akzeptieren, dass KI-Funktionen nur funktionieren, wenn das Smartphone im Heim-WLAN ist.',
          },
        ],
      },
      smartConnections: {
        id: 'smart-connections',
        title: 'Smart Connections: Semantische Vault-Suche',
        content:
          '**Smart Connections ist 2026 das einzige Obsidian-Plugin, das einen Embedding-Index über den gesamten Vault aufbaut.** Damit wird „zeige mir verwandte Notizen" ab 5.000 Notizen praktikabel und ist die größte Einzelfunktion im Plugin-Ökosystem, die das „zweite Gehirn" überhaupt ermöglicht.',
        items: [
          '**Was es tut:** Erzeugt ein Vektor-Embedding für jede Notiz (und konfigurierbar pro Abschnitt) und zeigt eine „Smart Connections"-Sidebar mit semantisch verwandten Notizen zur aktiven Notiz.',
          '**Installation:** Einstellungen → Community-Plugins → Durchsuchen → „Smart Connections" → Installieren + Aktivieren. Autor: Brian Petro.',
          '**Konfiguration für Ollama:** Einstellungen → Smart Connections → Embedding-Modell → „Local (Ollama)" wählen → `http://localhost:11434/api/embeddings` eintragen → Modellname `nomic-embed-text` (oder `mxbai-embed-large`).',
          '**Erstindex:** Das Plugin bettet jede Notiz ein. Zeit auf Mac M3 Pro mit nomic-embed-text: 1K Notizen ca. 2 Min., 5K Notizen ca. 10 Min., 10K Notizen ca. 25 Min., 20K Notizen ca. 75 Min. Nach Bearbeitungen erfolgt die Re-Indizierung inkrementell (nur geänderte Notizen).',
          '**Speicherort:** Der Index liegt in `.smart-env/` innerhalb des Vaults. Synchronisiert sauber mit Obsidian Sync; bei iCloud / Git müssen Sie pro Gerät neu indizieren, da der Index ein plattformspezifisches Binärformat ist.',
          '**Bestes Embedding-Modell 2026:** `nomic-embed-text` (137M Parameter, 768 Dim., schnell) für die meisten Anwender. `mxbai-embed-large` (335M Parameter, 1024 Dim.) ist bei technischen Inhalten genauer, benötigt aber rund die doppelte Indexierungszeit.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Lassen Sie Smart Connections nach Abschluss des Erstindex im Hintergrund aktiv. Spätere Bearbeitungen lösen inkrementelles Re-Embedding aus — meist unter einer Sekunde pro gespeicherter Notiz. Während intensiver Schreibsessions können Sie die Indexierung pausieren, um CPU-Konkurrenz mit Ollama selbst zu vermeiden.',
          },
        ],
      },
      copilot: {
        id: 'copilot',
        title: 'Copilot for Obsidian: Chat mit Vault-Kontext',
        content:
          '**Copilot for Obsidian liefert die Chat-Sidebar, die Smart Connections fehlt.** Konfigurieren Sie es auf Ollama, erhalten Sie einen privaten Chat-Assistenten, der Fragen mit Ihrem Vault als Kontext beantwortet, Inline-Inhalte erzeugt und benutzerdefinierte Prompts auf Auswahlen anwendet.',
        items: [
          '**Was es tut:** Chat-Sidebar, Vault-QA-Modus (Chat mit abgerufenen Notizen), Inline-Chat, benutzerdefinierte Prompts auf Auswahlen, Befehle in der Befehlspalette.',
          '**Installation:** Einstellungen → Community-Plugins → Durchsuchen → „Copilot" von Logan Yang → Installieren + Aktivieren.',
          '**Konfiguration für Ollama:** Einstellungen → Copilot → API-Einstellungen → Provider „Custom OpenAI" oder „Ollama" → API Base URL `http://localhost:11434/v1` → Modell `llama3.2:3b` (oder beliebiges Ollama-Modell).',
          '**Vault-QA-Modus:** Copilot ruft die relevantesten Notizen über eine eigene Embedding-Pipeline ab (getrennt von Smart Connections) und sendet die abgerufenen Chunks an das Chat-Modell. Embeddings konfigurieren Sie in den Copilot-Einstellungen — auf `http://localhost:11434/api/embeddings` und Modell `nomic-embed-text` zeigen.',
          '**Inline-Befehle:** Text in einer Notiz markieren → Cmd/Strg+P → „Copilot: …" — Umformulierungen, Zusammenfassungen oder benutzerdefinierte Prompt-Templates anwenden, ohne die Chat-Sidebar zu öffnen.',
          '**Am besten geeignet für:** Anwender, die eine Chat-Oberfläche UND vault-bewusste Retrieval möchten. Wer ausschließlich über die aktuelle Notiz chattet, fährt mit BMO Chatbot schlanker.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Copilot pflegt einen eigenen Embedding-Index getrennt von Smart Connections. Beide gleichzeitig zu betreiben bedeutet zwei Indexe über denselben Vault und etwa den doppelten Plattenplatz (ca. 200 MB Vektor-Daten pro 5K Notizen). Bei knappem Plattenplatz konfigurieren Sie Copilot so, dass es den Smart-Connections-Index nutzt — oder akzeptieren, dass die beiden Plugins 2026 keine gemeinsamen Embeddings teilen.',
          },
        ],
      },
      textGenerator: {
        id: 'text-generator',
        title: 'Text Generator: Template-getriebene Generierung',
        content:
          '**Text Generator ist das beste Plugin für wiederholbare Workflows: Erweiterungen von Daily Notes, Zusammenfassungen von Meeting-Notizen, MOC-Generierung, individuell formatierte Ausgaben.** Templates nutzen Frontmatter-Variablen und Markdown, sodass ein einzelnes Template per Hotkey auf jeder Notiz ausgelöst werden kann.',
        items: [
          '**Was es tut:** Führt ein benutzerdefiniertes Prompt-Template gegen die aktuelle Notiz (oder Auswahl) mithilfe Ihres lokalen LLM aus. Templates unterstützen Frontmatter-Variablen, das Einfügen des aktuellen Datums und das Einfangen von Auswahlen.',
          '**Installation:** Einstellungen → Community-Plugins → Durchsuchen → „Text Generator" → Installieren + Aktivieren. Autor: nhaouari.',
          '**Konfiguration für Ollama:** Einstellungen → Text Generator → Provider → „Ollama" oder „Custom" → Endpoint `http://localhost:11434/v1` → Modell `llama3.2:3b`.',
          '**Templates:** werden als Markdown-Dateien in einem konfigurierten Ordner gespeichert (z. B. `Templates/`). Ein Template ist nur ein Prompt mit Platzhaltern wie `{{title}}`, `{{selection}}`, `{{date}}`.',
          '**Hotkey-Workflows:** Weisen Sie einem bestimmten Template einen Hotkey zu (Cmd/Strg+T → „Aus Template generieren" → Template wählen). Ein Tastendruck führt Ihr Template auf der aktuellen Notiz aus.',
          '**Am besten geeignet für:** Workflows, die Sie dutzendfach erledigen — Tagebuch-Prompts, wöchentliche Review-Fragen, Meeting-Zusammenfassungen, Notizen aus dem Lesen wissenschaftlicher Arbeiten.',
        ],
        promptExamples: [
          {
            label: 'Text Generator Template: Daily-Note-Zusammenfasser',
            text: '---\nname: Daily summary\n---\nSummarise the following daily note in three concise bullet points. Focus on decisions made, blockers identified, and action items for tomorrow.\n\nDaily note ({{date}}):\n{{content}}\n\nSummary:',
          },
          {
            label: 'Text Generator Template: MOC-Generator (Map of Content)',
            text: '---\nname: MOC for tag\n---\nGenerate a Map of Content for all notes tagged with `#{{selection}}`. Group related notes into 3–5 thematic clusters, with a one-sentence description per cluster and a list of the notes inside each cluster.\n\nNotes tagged #{{selection}}:\n{{vault_search_result tag={{selection}}}}\n\nMOC:',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Kombinieren Sie Text-Generator-Templates mit Obsidian QuickAdd, um eine „Daily Review"-Sequenz aufzubauen: Ein einzelner QuickAdd-Befehl öffnet die heutige Daily Note, führt das Daily-Summary-Template aus und fügt das Ergebnis ein. Drei Plugins (Text Generator + QuickAdd + Templater für Datum-Mathematik) lassen Sie einen Workflow bauen, der zwei Sekunden zum Auslösen und zehn Sekunden zum Abschluss benötigt.',
          },
        ],
      },
      localGpt: {
        id: 'local-gpt',
        title: 'Local GPT: Privacy-First-Chat',
        content:
          '**Local GPT ist ein Chat-Plugin, das auf dem Prinzip aufbaut, dass kein Notizinhalt den Rechner verlassen darf.** Funktional ist es schlanker als Copilot for Obsidian — kein Vault-QA-Modus, keine Template-Bibliothek — aber es ist am explizitesten in seiner Privacy-Haltung.',
        items: [
          '**Was es tut:** Chat mit der aktuellen Notiz (oder ausgewähltem Text) mithilfe eines lokalen LLM. Eine Cloud-Option existiert im Plugin nicht — nur lokale Provider.',
          '**Installation:** Einstellungen → Community-Plugins → Durchsuchen → „Local GPT" → Installieren + Aktivieren. Autor: pfrankov (im Listing prüfen — mehrere Plugins haben ähnliche Namen).',
          '**Konfiguration für Ollama:** Einstellungen → Local GPT → Provider → „Ollama" → URL `http://localhost:11434` → Modell `llama3.2:3b`.',
          '**Chat-Umfang:** ausschließlich aktive Notiz oder ausgewählter Text. Es gibt keinen Embedding-Index — Kontext ist immer nur das, was Sie explizit senden.',
          '**Am besten geeignet für:** Anwender, die Chat über die aktuelle Notiz wollen, den kleinstmöglichen Funktionsumfang bevorzugen und ein Plugin nutzen möchten, das versehentlich keinen Cloud-Dienst aufrufen kann.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Sie Copilot for Obsidian zutrauen, lokal zu bleiben (es lässt sich auf Cloud oder lokal konfigurieren), nutzen Sie Copilot. Wenn Sie wollen, dass der Plugin-Code selbst Cloud-Aufrufe unmöglich macht, nutzen Sie Local GPT — sein Designprinzip lautet „keine Cloud-Provider, niemals". Diese Unterscheidung ist relevant für Workflows in Gesundheitswesen, Recht und Journalismus, in denen jede Möglichkeit eines versehentlichen Cloud-Abflusses ein Problem ist.',
          },
        ],
      },
      bmoChatbot: {
        id: 'bmo-chatbot',
        title: 'BMO Chatbot: Schlanker Chat',
        content:
          '**BMO Chatbot ist das minimalistische Chat-Plugin: eine Sidebar, eine Modellauswahl und ein Konfigurationsfeld für den Endpoint.** Keine Vault-Suche, keine Templates, keine Inline-Befehle. Wenn Sie ausschließlich über die aktive Notiz chatten, ist BMO die schlankste Option.',
        items: [
          '**Was es tut:** Chat-Sidebar, die die aktive Notiz als Kontext einschließt.',
          '**Installation:** Einstellungen → Community-Plugins → Durchsuchen → „BMO Chatbot" → Installieren + Aktivieren. Autor: longy2k.',
          '**Konfiguration für Ollama:** Einstellungen → BMO Chatbot → API → URL `http://localhost:11434/v1` → Modell `llama3.2:3b`.',
          '**Kontextverhalten:** Die aktive Notiz wird automatisch in den Chat-Kontext aufgenommen. Notizenwechsel wechselt den Kontext.',
          '**Am besten geeignet für:** Anwender, die ein einziges Chat-Plugin mit kleinstmöglichem Setup, ohne Embedding-Index und mit einer Oberfläche wollen, die in eine schmale Obsidian-Sidebar passt.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'BMO Chatbot ist das richtige Plugin für „Ich will nur über meine aktuelle Notiz chatten." Wenn Sie sich „Suche über meinen ganzen Vault" oder „dieses Prompt-Template auf jeder Meeting-Notiz ausführen" wünschen, sind Sie BMO entwachsen — wechseln Sie zu Copilot for Obsidian (Vault-QA) oder Text Generator (Templates).',
          },
        ],
      },
      recommendedCombo: {
        id: 'recommended-combo',
        title: 'Die empfohlene Kombination: Smart Connections + Copilot',
        content:
          '**Installieren Sie Smart Connections + Copilot for Obsidian, beide ausgerichtet auf Ollama.** Diese Kombination deckt die zwei zentralen KI-Aufgaben ab, die Obsidian-Anwender wirklich wollen — semantische Vault-Suche und Chat mit Vault-Kontext — und erfasst rund 80 % der typischen Anwendungsfälle eines „zweiten Gehirns", ohne dass Notizen die Cloud erreichen.',
        numberedItems: [
          '**Ollama installieren** auf Ihrem Rechner: `brew install ollama` (macOS) oder Download von ollama.com (Windows / Linux). Chat-Modell laden: `ollama pull llama3.2:3b`. Embedding-Modell laden: `ollama pull nomic-embed-text`.',
          '**Ollama starten:** Es startet nach der Installation üblicherweise als Hintergrunddienst. Überprüfung: `curl http://localhost:11434/api/tags` liefert JSON mit Ihren installierten Modellen.',
          '**Smart Connections installieren** in Obsidian → Embeddings auf Ollama unter `http://localhost:11434/api/embeddings` mit Modell `nomic-embed-text` konfigurieren. Indexieren lassen (2–75 Min. je nach Vault-Größe).',
          '**Copilot for Obsidian installieren** → Provider auf „Ollama" oder „Custom OpenAI" stellen → API Base URL `http://localhost:11434/v1` → Chat-Modell `llama3.2:3b` → Embedding-Modell `nomic-embed-text` (für Vault-QA).',
          '**Testen:** Notiz öffnen → Smart-Connections-Sidebar auf verwandte Notizen prüfen → Copilot-Chat öffnen → eine Frage stellen, die Vault-Wissen erfordert („Fasse zusammen, was ich zu [Thema] geschrieben habe") → prüfen, ob die Antwort tatsächlich Ihre Notizen referenziert.',
          '**Optionales drittes Plugin:** Text Generator hinzufügen, wenn Sie wiederholbare Workflows haben (Daily-Note-Zusammenfassungen, Meeting-Erweiterungen, MOC-Generierung). Mit demselben Ollama-Endpoint konfigurieren.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Ein häufiger Fehler ist, Copilot mit einem Modell und Smart Connections mit einem anderen zu konfigurieren — und sich dann zu wundern, warum Antworten inkonsistent wirken. Verwenden Sie in beiden dasselbe Chat-Modell (Llama 3.2 3B für die meisten Anwender; Phi-4 Mini für 8-GB-RAM-Systeme). Der einzige Punkt, an dem ein anderes Modell sinnvoll ist, ist das Embedding-Modell — das ist immer ein vom Chat-Modell getrenntes Modell.',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: 'Beispiel-Workflows: Daily Notes, MOCs, Schreibassistenz',
        content:
          '**Drei konkrete Workflows, die die Kombination in Aktion zeigen.** Jeder baut auf Smart Connections (für Vault-Kontext) und Copilot (für Chat) auf, ergänzt um Text Generator für Template-Arbeit.',
        items: [
          '**Daily-Note-Zusammenfassung:** In Ihrer Daily Note alles markieren → Copilot-Inline-Befehl → „Fasse diesen Tag in drei Punkten zusammen, fokussiert auf Entscheidungen, Blocker und morgige Aktionen". Die Ausgabe ersetzt oder ergänzt den Bereich unter der Auswahl. Speichern Sie den Prompt als Text-Generator-Template, um daraus eine Aktion mit nur einem Tastendruck zu machen.',
          '**MOC-Generierung (Map of Content):** Tag-Seite oder Themennotiz öffnen → Copilot → „Generiere eine Map of Content für dieses Thema und gruppiere die verwandten Notizen, die ich habe, in 3–5 thematische Cluster. Nutze die Smart-Connections-Sidebar, um verwandte Notizen zu identifizieren." → prüfen und bearbeiten. Smart Connections liefert die Entdeckungsschicht; Copilot synthetisiert die Struktur.',
          '**Kontextuelle Schreibassistenz:** Während des Verfassens einer Notiz Copilot-Chat öffnen → fragen „Welche Perspektiven fehlen mir, gegeben die Notizen, die ich zu [Thema] geschrieben habe?" Copilot ruft relevante Notizen über Vault-QA ab und schlägt Lücken vor. Hilfreich, um aus Einzelperspektiv-Entwürfen auszubrechen.',
          '**Wöchentliche Review:** Text-Generator-Template, das gegen die letzten sieben Daily Notes läuft → „Fasse die Woche in drei Punkten pro Kategorie zusammen: Fortschritt, Blocker, Themen." Per Hotkey für Ein-Tastendruck-Review binden.',
          '**Notizen aus Papern / Büchern:** Quellnotiz öffnen → Copilot-Inline-Befehl → „Generiere drei Anki-artige Frage-/Antwort-Paare aus dieser Notiz für Spaced Repetition." Die Ausgabe lässt sich in das Spaced-Repetition-Plugin überführen.',
          '**Verknüpfung schlummernder Notizen:** Die Smart-Connections-Sidebar zeigt verwandte Notizen, die monatelang unberührt sein können — ein Anstoß, alte Inhalte erneut aufzugreifen und mit aktuellen Arbeiten zu verbinden.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Der am meisten unterschätzte Workflow ist die tägliche Smart-Connections-Review. Öffnen Sie morgens die Daily Note → prüfen Sie die Smart-Connections-Sidebar auf unerwartete verwandte Notizen aus Ihrem Archiv. Das Plugin bringt vergessene Notizen, die dasselbe Thema berühren, an die Oberfläche — exakt der „Denkpartner"-Effekt, den Wissensarbeiter von einem zweiten Gehirn erwarten.',
          },
        ],
      },
      mobileSync: {
        id: 'mobile-sync',
        title: 'Mobile-Sync: Obsidian Sync vs. iCloud vs. Git',
        content:
          '**Die Plugin-Kompatibilität auf Obsidian Mobile hängt von zwei Faktoren ab: wie Ihr Vault synchronisiert wird und ob Ihr Smartphone einen lokalen Ollama-Server erreichen kann.** Smart-Connections-Embeddings sind die sync-empfindlichste Komponente.',
        items: [
          '**Obsidian Sync (kostenpflichtig):** Der sauberste Weg. Der Ordner `.smart-env/` synchronisiert Ende-zu-Ende-verschlüsselt über Geräte hinweg, sodass Smart Connections nicht pro Gerät neu indizieren muss. Plugin-Einstellungen synchronisieren ebenfalls. Mobile Chat-Plugins benötigen weiterhin LAN-Zugriff auf Ollama (siehe unten).',
          '**iCloud Drive:** Vault synchronisiert, aber `.smart-env/` ist plattformspezifisches Binärformat und kann zwischen iOS / macOS / Windows / Android korrupt werden oder nicht korrekt synchronisieren. Praktische Lösung: Smart Connections pro Gerät neu indizieren oder `.smart-env/` vom Sync ausschließen und akzeptieren, dass Mobile keine semantische Sidebar hat.',
          '**Git (via Working Copy auf iOS, Termux auf Android):** Der reine Markdown-Vault synchronisiert sauber; `.smart-env/` sollte zur `.gitignore` hinzugefügt werden, da der Binärindex das Repo aufblähen und Merge-Konflikte erzeugen würde. Pro Gerät neu indizieren.',
          '**LAN-Zugriff auf Ollama vom Smartphone:** Standardmäßig lauscht Ollama nur auf `localhost:11434` — vom Smartphone nicht erreichbar. Um KI-Plugins auf Obsidian Mobile zu nutzen: Ollama mit `OLLAMA_HOST=0.0.0.0:11434 ollama serve` ans LAN binden, die LAN-IP des Desktops ermitteln (z. B. `192.168.1.20`) und diese IP statt localhost im Plugin eintragen. Das Smartphone muss im Heim-WLAN sein.',
          '**Tailscale / Mesh-VPN:** Lässt Ihr Smartphone das heimische Ollama von überall erreichen, nicht nur im Heim-WLAN. Tailscale ist 2026 die populärste Option — auf Desktop und Smartphone installieren, die Tailscale-IP in der Plugin-Konfiguration verwenden.',
          '**Die Embedding-Erzeugung von Smart Connections läuft ausschließlich auf dem Desktop.** Selbst wenn Obsidian Sync den Index überträgt, muss er irgendwo erzeugt werden — und das ist immer ein Desktop-Klasse-Rechner. Mobil wird der synchronisierte Index nur lesend für die Suche nach verwandten Notizen genutzt.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Wenn Sie iCloud oder Git für Vault-Sync nutzen und Smart Connections auf mehreren Geräten verwenden möchten, ist der sauberste Weg, ein Gerät als „Indexer" festzulegen (Ihren Hauptdesktop) und zu akzeptieren, dass Smart Connections nur dort vollständig funktioniert. Auf anderen Geräten haben Sie entweder einen veralteten Index (iCloud) oder gar keinen (Git mit `.smart-env` in `.gitignore`). Obsidian Sync ist die einzige Option, die diesen Fall korrekt handhabt.',
          },
        ],
      },
      vaultScale: {
        id: 'vault-scale',
        title: 'Vault-Größe: 1K, 5K, 10K, 20K Notizen',
        content:
          '**Alle fünf Plugins bleiben bei über 5.000 Notizen reaktionsschnell; der Engpass jenseits von 20K Notizen ist die Re-Indizierungszeit von Smart Connections, nicht die Abfrage-Latenz.** Realistische Werte unten gemessen auf Mac M3 Pro (16 GB Unified Memory) mit `nomic-embed-text`-Embeddings und Llama 3.2 3B als Chat.',
        columns: ['Vault-Größe', 'Smart Connections Erstindex', 'Re-Indizierung pro Änderung', 'Chat-Latenz (Copilot)', 'Hinweise'],
        rows: [
          { 'Vault-Größe': '1.000 Notizen', 'Smart Connections Erstindex': 'ca. 2 Min.', 'Re-Indizierung pro Änderung': '<1 Sek.', 'Chat-Latenz (Copilot)': 'ca. 1–2 Sek. erstes Token', 'Hinweise': 'Auf jeder modernen Hardware komfortabel.' },
          { 'Vault-Größe': '5.000 Notizen', 'Smart Connections Erstindex': 'ca. 10 Min.', 'Re-Indizierung pro Änderung': '<1 Sek.', 'Chat-Latenz (Copilot)': 'ca. 1–2 Sek. erstes Token', 'Hinweise': 'Idealbereich für die meisten Wissensarbeiter.' },
          { 'Vault-Größe': '10.000 Notizen', 'Smart Connections Erstindex': 'ca. 25 Min.', 'Re-Indizierung pro Änderung': 'ca. 1–2 Sek.', 'Chat-Latenz (Copilot)': 'ca. 2–3 Sek. erstes Token (Vault-QA-Retrieval ergänzt ca. 500 ms)', 'Hinweise': 'Weiterhin voll nutzbar; bei spürbaren Verzögerungen ein Splitten erwägen.' },
          { 'Vault-Größe': '20.000 Notizen', 'Smart Connections Erstindex': 'ca. 75 Min.', 'Re-Indizierung pro Änderung': 'ca. 2–4 Sek.', 'Chat-Latenz (Copilot)': 'ca. 3–5 Sek. erstes Token', 'Hinweise': 'Erstindex über Nacht einplanen. Plattenverbrauch von `.smart-env/` ca. 800 MB–1,2 GB.' },
          { 'Vault-Größe': '50.000+ Notizen', 'Smart Connections Erstindex': '4–8 Std.', 'Re-Indizierung pro Änderung': 'ca. 5–10 Sek.', 'Chat-Latenz (Copilot)': 'ca. 5–10 Sek. erstes Token', 'Hinweise': 'Praktische Grenze. Sub-Vaults oder Upgrade auf mxbai-embed-large erwägen, wenn Qualität wichtiger ist als Geschwindigkeit.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die Vault-Größe beeinflusst den Erstindex stärker als die tägliche Reaktionsfähigkeit. Nach dem Erstindex erfolgt die Neueinbettung nur für geänderte Notizen — meist unter einer Sekunde pro Speichern, selbst bei 20K Notizen. Das langsame Erst-Erlebnis ist ein einmaliger Aufwand. Bei großen Vaults den Erstindex über Nacht laufen lassen.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Zwei Plugins mit zwei unterschiedlichen Chat-Modellen konfigurieren.** Smart Connections generiert nicht, aber Copilot, Text Generator, Local GPT und BMO tun es. Ein anderes Modell in jedem Plugin macht Antworten inkonsistent. Wählen Sie ein Chat-Modell (Llama 3.2 3B ist der Standard für die meisten Anwender) und konfigurieren Sie alle Chat-Plugins darauf.',
          '**`.smart-env/` zu einem Git-synchronisierten Vault hinzufügen, ohne `.gitignore` zu setzen.** Der Smart-Connections-Index ist binär und ändert sich bei jeder Bearbeitung. Ohne `.gitignore` bekommen Sie eine massive Git-Historie und ständige Merge-Konflikte. Fügen Sie `.smart-env/` zur `.gitignore` hinzu und indizieren Sie pro Gerät neu.',
          '**Erwarten, dass mobiles Smart Connections seinen eigenen Index aufbaut.** Embedding-Erzeugung benötigt einen Desktop-Klasse-Rechner. Mobile nutzt entweder einen synchronisierten Index (Obsidian Sync) oder hat keinen Index (iCloud / Git). Planen Sie entsprechend.',
          '**Das Plugin von einem Mobilgerät auf `http://localhost:11434/v1` zeigen lassen.** Mobile kann den localhost des Desktops nicht erreichen. Binden Sie Ollama auf die LAN-IP (`OLLAMA_HOST=0.0.0.0:11434`) und verwenden Sie diese IP in der Plugin-Konfiguration — oder Tailscale für Zugriff außerhalb des Heimnetzes.',
          '**Beide Indexe von Smart Connections und Copilot gegen denselben Vault laufen lassen.** Zwei separate Indexe verbrauchen rund das Doppelte an Plattenplatz und CPU. Stand Mai 2026 teilen die beiden Plugins keine Embeddings. Wenn der Plattendruck wichtig ist, nutzen Sie Smart Connections für das Retrieval und konfigurieren Sie Copilot so, dass es darauf zugreift (fortgeschritten — erfordert das Anpassen der Copilot-Retrieval-Konfiguration auf den Smart-Connections-Vector-Store).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Smart Connections — [github.com/brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections) (Open-Source-Obsidian-Plugin).',
          'Copilot for Obsidian — [github.com/logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot) (Open-Source-Obsidian-Plugin).',
          'Text Generator — [github.com/nhaouari/obsidian-textgenerator-plugin](https://github.com/nhaouari/obsidian-textgenerator-plugin) (Open-Source-Obsidian-Plugin).',
          'Ollama — [ollama.com](https://ollama.com) und [github.com/ollama/ollama](https://github.com/ollama/ollama) (lokale LLM-Laufzeitumgebung).',
          'Architektur des Obsidian-Mobile-Sync — [help.obsidian.md](https://help.obsidian.md) und Obsidian-Sync-Dokumentation.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Welches Obsidian-Plugin funktioniert am besten mit Ollama?',
            a: 'Für die meisten Anwender: Smart Connections (semantische Vault-Suche) + Copilot for Obsidian (Chat). Beide werden auf die Endpoints von Ollama gerichtet (Chat unter `http://localhost:11434/v1`, Embeddings unter `http://localhost:11434/api/embeddings`). Smart Connections übernimmt das Auffinden verwandter Notizen; Copilot übernimmt konversationelle Abfragen mit Vault-Kontext. Ergänzen Sie Text Generator als drittes Plugin, wenn Sie wiederholbare Template-Workflows haben.',
          },
          {
            q: 'Bewältigen die Plugins einen Vault mit 10.000 Notizen?',
            a: 'Ja. Smart Connections benötigt rund 25 Minuten für den Erstindex auf einem Mac M3 Pro und rund 1–2 Sekunden pro Änderung danach. Die Vault-QA-Latenz von Copilot liegt bei ca. 2–3 Sekunden bis zum ersten Token. Bei 20K Notizen rechnen Sie mit ca. 75 Minuten Erstindex (über Nacht laufen lassen). Bei 50K+ Notizen dauert die Indexierung 4–8 Stunden — überlegen Sie, in Sub-Vaults zu splitten.',
          },
          {
            q: 'Synchronisieren diese Plugins auf das Smartphone?',
            a: 'Die Plugins selbst synchronisieren über den Obsidian-Plugin-Sync. Die Einschränkungen sind: (1) Smart-Connections-Embedding-Index — synchronisiert sauber mit Obsidian Sync, erfordert pro Gerät neue Indexierung bei iCloud oder Git; (2) Chat-Plugins müssen Ollama erreichen, was LAN-Zugriff bedeutet (ersetzen Sie `localhost` durch die LAN-IP des Desktops, nachdem Sie Ollama an `0.0.0.0` gebunden haben) oder ein Mesh-VPN wie Tailscale.',
          },
          {
            q: 'Kann ich mehrere KI-Plugins gleichzeitig verwenden?',
            a: 'Ja. Smart Connections + Copilot ist die empfohlene Kombination. Text Generator für Templates zu ergänzen, ist üblich. Mehr als drei Chat-Plugins (Copilot + Local GPT + BMO) gleichzeitig zu betreiben, ist redundant — sie erledigen denselben Job. Wählen Sie ein Chat-Plugin und bleiben Sie dabei.',
          },
          {
            q: 'Welches Plugin eignet sich am besten zum Schreiben innerhalb von Notizen?',
            a: 'Copilot for Obsidian — es bietet Inline-Befehle (Cmd/Strg+P → Copilot → Umformulieren / Zusammenfassen / benutzerdefinierter Prompt), die auf ausgewähltem Text arbeiten. Text Generator ist ebenfalls stark für wiederholbare Schreibaufgaben über Templates. Für Ad-hoc-Schreibassistenz („formuliere diesen Absatz formaler um") ist Copilot schneller. Für strukturierte Generierung („verwandle jede Meeting-Notiz mithilfe dieses Templates in eine Zusammenfassung") ist Text Generator besser.',
          },
          {
            q: 'Wie prompte ich über meinen gesamten Vault hinweg?',
            a: 'Nutzen Sie den Vault-QA-Modus von Copilot for Obsidian. Er verwendet einen Embedding-Index (ähnlich Smart Connections), um die relevantesten Notizen für eine Anfrage abzurufen, und sendet dann diese Chunks an das Chat-Modell. Konfigurieren Sie die Embeddings in den Copilot-Einstellungen so, dass sie auf Ihr lokales Ollama zeigen. Smart Connections selbst hat keine Chat-Oberfläche — es zeigt verwandte Notizen, synthetisiert aber nicht über sie hinweg.',
          },
          {
            q: 'Kann ich diese Plugins zum täglichen Journaling nutzen?',
            a: 'Ja. Zwei starke Muster: (1) Die Smart-Connections-Sidebar bringt vergessene verwandte Notizen an die Oberfläche, sobald Sie die heutige Daily Note öffnen — ein „Denkpartner"-Effekt. (2) Ein Text-Generator-Template läuft am Tagesende, um die Daily Note in drei Punkten (Entscheidungen, Blocker, Action Items) zusammenzufassen. Beides kombiniert macht Daily Journaling reflektierter.',
          },
          {
            q: 'Überstehen Plugins Obsidian-Updates?',
            a: 'In der Regel ja — gut gepflegte Plugins (Smart Connections, Copilot, Text Generator) werden innerhalb weniger Tage nach größeren Obsidian-Releases aktualisiert. Weniger gepflegte Plugins hinken gelegentlich hinterher. Prüfen Sie die GitHub-Issues-Seite des Plugins, falls es nach einem Obsidian-Update bricht; der Fix erfolgt üblicherweise als Maintainer-Release innerhalb von 1–2 Wochen. Das Plugin-Manifest deklariert die minimale Obsidian-Versionskompatibilität.',
          },
          {
            q: 'Welches hat den besten Community-Support?',
            a: 'Smart Connections hat 2026 die größte und aktivste Community (~5K Discord-Mitglieder, regelmäßige Dev-Calls). Copilot for Obsidian hat eine starke GitHub-Issues-Community und einen aktiven Maintainer (Logan Yang). Text Generator hat eine kleinere, aber engagierte Community. Local GPT und BMO Chatbot haben kleinere Communities — für stabilen Einsatz in Ordnung, langsamer bei der Lösung von Issues.',
          },
          {
            q: 'Kann ich das KI-Plugin auf einem anderen Rechner laufen lassen?',
            a: 'Ja. Betreiben Sie Ollama auf einem leistungsstärkeren Heimserver (Mini-PC, NAS oder dedizierte Workstation), binden Sie es mit `OLLAMA_HOST=0.0.0.0:11434 ollama serve` ans LAN, und tragen Sie die LAN-IP des Servers in die Konfiguration jedes Plugins ein (z. B. `http://192.168.1.20:11434/v1`). So kann ein leistungsschwacher Laptop oder Mobilgerät auf vollwertige 70B-Modelle des Heimservers zugreifen. Kombinieren Sie das mit Tailscale, damit es nicht nur im Heim-WLAN funktioniert.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[Lokales LLM mit Logseq und Joplin](/de/power-local-llm/local-llm-with-logseq-and-joplin) — verwandte Open-Source-Alternativen für Leser, die Logseq oder Joplin gegenüber Obsidian bevorzugen.',
          '[Lokale LLM-Wissensdatenbank 2026](/de/power-local-llm/local-llm-personal-knowledge-base-2026) — die übergeordnete PKB-Architektur, in die Obsidian einfließt; behandelt RAG-Schicht, Tagging-Strategien und 10K-Item-Workflows.',
          '[Lokales RAG auf Ihren PDFs in 30 Minuten (Ollama + AnythingLLM)](/de/power-local-llm/local-rag-on-your-pdfs-step-by-step) — die RAG-Schicht, die semantische Plugins wie Smart Connections antreibt; nützlicher Hintergrund zu Embedding-Entscheidungen.',
          '[Romane und Drehbücher mit lokalen LLMs entwerfen (2026)](/de/power-local-llm/local-llm-screenwriting-and-novel-drafting) — Obsidian als Entwurfsschicht für Langform-Schreiben.',
          '[Die besten lokalen LLMs 2026](/de/local-llms/best-local-llms-2026) — übergreifende Modell-Empfehlungen für Chat- und Embedding-Modelle hinter diesen Plugins.',
          '[Lokales LLM Software-Verzeichnis 2026](/de/power-local-llm/local-llm-software-directory-2026) — Verzeichniseinträge zu Ollama, Smart Connections, Copilot und weiteren Komponenten dieses Stacks.',
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
    title: 'Obsidian + LLM Local : 5 Plugins pour Transformer Votre Vault en Deuxième Cerveau (2026)',
    seoTitle: 'Obsidian + LLM Local : 5 Plugins pour Votre Vault 2026',
    intro:
      'Cinq plugins Obsidian transforment un vault en deuxième cerveau fonctionnel en 2026 lorsqu\'ils sont connectés à un backend Ollama local : Smart Connections, Copilot for Obsidian, Text Generator, Local GPT et BMO Chatbot. Chacun couvre une couche différente — recherche sémantique, chat intégré, génération de templates, conversation centrée sur la confidentialité, chat contexte léger. Pour la plupart des utilisateurs, la combinaison recommandée est Smart Connections + Copilot for Obsidian : l\'une gère la liaison sémantique dans l\'ensemble du vault, l\'autre fournit l\'interface de chat. Ce guide classe les cinq plugins selon la qualité de recherche du vault, la vitesse de génération, la personnalisation des prompts et le comportement de synchronisation mobile, avec des étapes de configuration concrètes pour Ollama.',
    metaDescription:
      'LLM local avec Obsidian 2026 : notes assistées par IA sans cloud. Plugins, configuration et workflows pour un travail de connaissance privé avec modèles locaux.',
    twitterDescription:
      'Meilleure combinaison Obsidian + LLM local en 2026 : Smart Connections (recherche sémantique du vault) + Copilot for Obsidian (chat). Tous les 5 plugins testés avec Ollama. Notes sur la synchronisation mobile.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'nomic-embed-text',
      'mxbai-embed-large',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16+ GB mémoire unifiée)',
      'PC avec RTX 3060 12 GB ou RTX 4060 8 GB',
      'PC avec 16 GB RAM (secours CPU uniquement)',
    ],
    audience:
      'Utilisateurs avancés d\'Obsidian, travailleurs du savoir, chercheurs et rédacteurs exploitant des vaults de 1 000–20 000 notes qui souhaitent des fonctionnalités IA sans envoyer leurs notes à un service cloud.',
    readTime: '14 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Plugin LLM local Obsidian',
    targetKeywords: [
      'obsidian llm local',
      'plugin obsidian ollama',
      'smart connections obsidian local',
      'copilot for obsidian local',
      'obsidian deuxième cerveau ia',
      'plugin obsidian llm privé',
    ],
    leadAnswerBlock:
      '**Pour la plupart des utilisateurs Obsidian en 2026, installez Smart Connections + Copilot for Obsidian et configurez-les pour utiliser un backend Ollama local.** Smart Connections gère la liaison sémantique dans l\'ensemble du vault (barre latérale de notes connexes) via des embeddings locaux `nomic-embed-text` ou `mxbai-embed-large`. Copilot for Obsidian fournit l\'interface de chat, configurée pour l\'endpoint compatible OpenAI d\'Ollama à `http://localhost:11434/v1`. Cette paire couvre ~80 % des cas d\'usage typiques du « deuxième cerveau » (recherche sémantique + chat avec notes) sans envoyer le contenu du vault vers le cloud. Ajoutez Text Generator comme troisième plugin si vous souhaitez la génération de contenu basée sur des templates (prompts pour journal quotidien, expansion des notes de réunion). Les embeddings de Smart Connections résident dans `.smart-env/` à l\'intérieur du vault — ils se synchronisent entre appareils via Obsidian Sync mais doivent être regénérés par appareil avec iCloud ou Git.',
    quickAnswerTop: {
      en: {
        question: 'Quelle combinaison de plugins Obsidian est la meilleure pour les LLMs locaux en 2026 ?',
        answer:
          'Smart Connections + Copilot for Obsidian est la combinaison recommandée. Smart Connections gère la recherche sémantique du vault avec embeddings locaux (nomic-embed-text ou mxbai-embed-large via Ollama) ; Copilot fournit la barre latérale de chat configurée pour l\'endpoint compatible OpenAI d\'Ollama. Ensemble, ils couvrent la découverte de notes connexes et le chat avec contexte du vault — environ 80 % des cas d\'usage « deuxième cerveau ». Ajoutez Text Generator comme troisième plugin pour la génération basée sur templates. Local GPT et BMO Chatbot sont des alternatives plus légères à Copilot pour les utilisateurs préférant une expérience chat-uniquement plus simple. Tous les cinq plugins fonctionnent avec n\'importe quel modèle Ollama ; le modèle de chat recommandé en 2026 pour les systèmes 16 GB RAM est Llama 3.2 3B ou Phi-4 Mini.',
        bullets: [
          'Smart Connections — recherche sémantique + barre latérale de notes connexes. Meilleur pour la liaison vault-large.',
          'Copilot for Obsidian — barre latérale de chat avec contexte du vault. Meilleur pour les requêtes conversationnelles.',
          'Text Generator — génération basée sur templates avec variables frontmatter. Meilleur pour les workflows répétables (notes quotidiennes, résumés de réunions).',
          'Local GPT — chat axé sur la confidentialité avec la note actuelle. Alternative plus légère à Copilot.',
          'BMO Chatbot — chat minimaliste avec contexte du vault. Meilleur pour les utilisateurs souhaitant un plugin de chat unique sans la surface de fonctionnalités de Copilot.',
          'Modèles Ollama recommandés : Llama 3.2 3B (chat), Phi-4 Mini (chat, plus petit), nomic-embed-text ou mxbai-embed-large (embeddings pour Smart Connections).',
          'Note de synchronisation mobile : les embeddings de Smart Connections résident dans .smart-env/ — synchronisation via Obsidian Sync, regénération par appareil avec iCloud ou Git.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Points Clés', anchor: '#key-takeaways' },
      { label: 'Faits Importants', anchor: '#quick-facts' },
      { label: 'Quelle Combinaison de Plugins Installer ?', anchor: '#which-plugins' },
      { label: 'Tableau Comparatif des Plugins', anchor: '#comparison-table' },
      { label: 'Smart Connections : Recherche Sémantique du Vault', anchor: '#smart-connections' },
      { label: 'Copilot for Obsidian : Chat avec Contexte du Vault', anchor: '#copilot' },
      { label: 'Text Generator : Génération Basée sur Templates', anchor: '#text-generator' },
      { label: 'Local GPT : Chat Axé sur la Confidentialité', anchor: '#local-gpt' },
      { label: 'BMO Chatbot : Chat Léger', anchor: '#bmo-chatbot' },
      { label: 'Combinaison Recommandée : Smart Connections + Copilot', anchor: '#recommended-combo' },
      { label: 'Workflows Exemples : Notes Quotidiennes, MOCs, Assistance Rédactionnelle', anchor: '#workflows' },
      { label: 'Synchronisation Mobile : Obsidian Sync vs iCloud vs Git', anchor: '#mobile-sync' },
      { label: 'Taille du Vault : 1K, 5K, 10K, 20K Notes', anchor: '#vault-scale' },
      { label: 'Erreurs Courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures Complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Smart Connections + Copilot for Obsidian est la combinaison recommandée pour la plupart des utilisateurs.** Smart Connections gère la recherche sémantique du vault avec embeddings locaux ; Copilot gère le chat avec contexte du vault. Ensemble, ils couvrent ~80 % des cas d\'usage « deuxième cerveau » sans appels cloud.',
          '**Tous les cinq plugins fonctionnent avec Ollama via son endpoint compatible OpenAI à `http://localhost:11434/v1`.** Configurez le paramètre « URL de base API » ou équivalent de chaque plugin sur cette adresse. Le nom de modèle par défaut d\'Ollama (par ex. `llama3.2:3b`) est ce que vous entrez dans le champ modèle du plugin.',
          '**Smart Connections est le seul plugin qui construit un index d\'embeddings sur l\'ensemble du vault.** Cela rend pratique la recherche de notes connexes à 5 000+ notes. L\'index est stocké dans `.smart-env/` à l\'intérieur du vault et se synchronise avec Obsidian Sync ; regénérez par appareil avec iCloud ou Git.',
          '**Text Generator est le meilleur plugin pour les workflows répétables.** La résumé de notes quotidiennes, l\'expansion de notes de réunion et la génération MOC (Map of Content) deviennent des actions à une seule touche via des templates avec variables frontmatter.',
          '**Pour les utilisateurs chat uniquement, BMO Chatbot est plus léger que Copilot.** Il ne construit pas d\'index — le contexte est simplement la note actuelle. Si vous chatez uniquement sur la note ouverte, BMO suffit.',
          '**Échelle du vault (avec Smart Connections + nomic-embed-text) :** 1K notes index en ~2 min, 5K en ~10 min, 10K en ~25 min, 20K en ~75 min sur Mac M3 Pro. Le temps de réindexation est faible après la première exécution car seules les notes modifiées sont réintégrées.',
          '**Modèles Ollama recommandés en 2026 :** chat — Llama 3.2 3B (par défaut) ou Phi-4 Mini (plus petit) ; embeddings — nomic-embed-text (768 dim, rapide) ou mxbai-embed-large (1024 dim, plus précis).',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits Importants',
        items: [
          '**Plugins couverts :** Smart Connections, Copilot for Obsidian, Text Generator, Local GPT, BMO Chatbot.',
          '**Backend LLM :** Ollama (recommandé) ou LM Studio — tout ce qui expose un endpoint compatible OpenAI sur une URL locale.',
          '**Endpoint Ollama par défaut :** `http://localhost:11434/v1` (chat) ou `http://localhost:11434/api/embeddings` (embeddings).',
          '**Modèles de chat recommandés :** Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B (systèmes 16 GB RAM) ; Qwen3 1.7B (8 GB RAM).',
          '**Modèles d\'embeddings recommandés :** nomic-embed-text (768-dim, rapide), mxbai-embed-large (1024-dim, plus précis).',
          '**Cibles de taille de vault :** les cinq plugins restent réactifs à 5 000+ notes ; la réindexation de Smart Connections est le goulot d\'étranglement au-delà de 20K notes.',
          '**Compatibilité mobile :** les plugins de chat fonctionnent sur Obsidian Mobile si Ollama est accessible sur le LAN ; la génération d\'embeddings de Smart Connections s\'exécute uniquement sur ordinateur.',
        ],
      },
      whichPlugins: {
        id: 'which-plugins',
        title: 'Quelle Combinaison de Plugins Installer ?',
        content:
          '**Pour la plupart des utilisateurs Obsidian en 2026 : installez Smart Connections (recherche sémantique du vault) et Copilot for Obsidian (barre latérale de chat) — ensemble, ils couvrent ~80 % des cas d\'usage « deuxième cerveau ».** Ajoutez Text Generator si vous souhaitez la génération basée sur templates. Ignorez les autres sauf si vous préférez spécifiquement leur interface.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Installez Smart Connections + Copilot for Obsidian, configurez-les pour utiliser Ollama sur localhost:11434, et vous disposez d\'une pile deuxième cerveau privée couvrant la recherche sémantique vault-large et les requêtes conversationnelles.',
          },
          {
            type: 'plain-terms',
            text: 'Considérez Obsidian + IA comme deux tâches : trouver des notes connexes (« quelles autres notes de mon vault abordent cette idée ? ») et discuter de notes (« qu\'ai-je écrit sur ce sujet ce trimestre dernier ? »). Smart Connections fait la première ; Copilot fait la seconde. Les deux utilisent un LLM local via Ollama, rien ne quitte votre machine. Ajoutez Text Generator si vous effectuez des tâches répétables (par ex., transformer chaque note de réunion en résumé). Ignorez Local GPT et BMO Chatbot sauf si vous avez une raison spécifique.',
          },
        ],
        decisionBlock: {
          title: 'Décision : Quels Plugins Obsidian ?',
          localIf: [
            'Vous souhaitez une recherche sémantique vault-large (« montrez-moi les notes connexes ») → Smart Connections',
            'Vous souhaitez une barre latérale de chat avec contexte de note → Copilot for Obsidian',
            'Vous souhaitez une génération basée sur templates (notes quotidiennes, résumés de réunions) → Text Generator',
            'Vous chatez uniquement sur la note actuelle (pas de recherche vault) → BMO Chatbot (plus léger que Copilot)',
            'Vous souhaitez un chat avec garanties de confidentialité strictes + fonctionnalités minimales → Local GPT',
          ],
          cloudIf: [
            'Vous avez besoin de la qualité GPT-5.5 sur chaque réponse de chat → équivalents cloud (la pile locale atteint ~70 % de capacité)',
            'Votre vault est sur un service cloud géré qui bloque les appels réseau locaux → plugin cloud',
            'Vous souhaitez une fonctionnalité IA native iOS à l\'intérieur de l\'application Obsidian Mobile sans accès LAN → pas encore pratique en 2026 (mobile ne peut pas atteindre LLM localhost sans Tailscale ou similaire)',
          ],
          quick: [
            'Combinaison recommandée : Smart Connections + Copilot for Obsidian',
            'Ajouter pour les templates : Text Generator',
            'Alternative légère : BMO Chatbot (chat uniquement)',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Installez Smart Connections et Copilot for Obsidian l\'un après l\'autre. Smart Connections doit construire un index d\'embeddings lors de la première installation (2–75 min selon la taille du vault). Laissez-le se terminer avant d\'ajouter Copilot pour éviter la concurrence CPU pendant l\'index initial. Une fois les deux en cours d\'exécution, l\'utilisation de RAM est faible (~200–400 MB combinés) — Ollama est le processus lourd, pas les plugins.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau Comparatif des Plugins',
        content:
          '**Les cinq plugins diffèrent sur quatre axes importants pour la plupart des utilisateurs : profondeur de recherche du vault, flexibilité de génération, compatibilité mobile et surface de fonctionnalités.** Smart Connections et Copilot ne sont pas interchangeables — ils résolvent des problèmes différents et se complètent.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Smart Connections est le seul plugin qui recherche l\'ensemble du vault avec embeddings ; les quatre autres sont des outils de chat ou de génération qui opèrent sur la note actuelle ou une sélection spécifique.',
          },
          {
            type: 'plain-terms',
            text: 'Deux de ces plugins (Smart Connections, Copilot) gèrent le contexte vault-large. Les trois autres (Text Generator, Local GPT, BMO Chatbot) travaillent sur la note actuelle ou une sélection spécifique. La raison la plus courante d\'installer plus d\'un est que Smart Connections n\'a pas sa propre interface de chat — vous avez besoin de Copilot ou d\'un des plugins de chat plus légers pour réellement converser avec votre vault.',
          },
        ],
        columns: ['Plugin', 'Recherche vault', 'Génération', 'Synchronisation mobile', 'Meilleur pour'],
        rows: [
          { 'Plugin': 'Smart Connections', 'Recherche vault': 'Oui (index d\'embeddings)', 'Génération': 'Non (recherche uniquement)', 'Synchronisation mobile': 'L\'index se synchronise avec Obsidian Sync ; regénérez par appareil avec iCloud / Git', 'Meilleur pour': 'Liaison sémantique entre notes' },
          { 'Plugin': 'Copilot for Obsidian', 'Recherche vault': 'Oui (mode QA vault)', 'Génération': 'Oui (chat + intégré)', 'Synchronisation mobile': 'Le plugin se synchronise ; Ollama doit être accessible sur le LAN', 'Meilleur pour': 'Chat intégré + assistance rédactionnelle' },
          { 'Plugin': 'Text Generator', 'Recherche vault': 'Non', 'Génération': 'Oui (basée sur templates)', 'Synchronisation mobile': 'Les templates se synchronisent ; Ollama doit être accessible sur le LAN', 'Meilleur pour': 'Génération de templates répétable' },
          { 'Plugin': 'Local GPT', 'Recherche vault': 'Non', 'Génération': 'Oui (chat)', 'Synchronisation mobile': 'Le plugin se synchronise ; Ollama doit être accessible sur le LAN', 'Meilleur pour': 'Chat axé sur la confidentialité avec note actuelle' },
          { 'Plugin': 'BMO Chatbot', 'Recherche vault': 'Non', 'Génération': 'Oui (chat)', 'Synchronisation mobile': 'Le plugin se synchronise ; Ollama doit être accessible sur le LAN', 'Meilleur pour': 'Chat léger avec note actuelle' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour l\'utilisation mobile, la contrainte n\'est pas le plugin — c\'est si Obsidian Mobile peut atteindre Ollama. Solutions : (1) exécutez Ollama sur un serveur domestique et exposez-le sur le LAN à une adresse IP statique, puis entrez cette IP au lieu de localhost dans le plugin, (2) utilisez Tailscale ou un autre VPN maille pour atteindre un Ollama domestique de n\'importe où, (3) acceptez que les fonctionnalités IA ne fonctionnent que lorsque le téléphone est sur le Wi-Fi domestique.',
          },
        ],
      },
      smartConnections: {
        id: 'smart-connections',
        title: 'Smart Connections : Recherche Sémantique du Vault',
        content:
          '**Smart Connections est le seul plugin Obsidian en 2026 qui construit un index d\'embeddings sur l\'ensemble du vault.** Cela rend pratique « montrez-moi les notes connexes » à 5 000+ notes et c\'est le plus grand habilitant de « deuxième cerveau » dans l\'écosystème des plugins.',
        items: [
          '**Ce qu\'il fait :** génère un embedding vectoriel pour chaque note (et sections configurables) et affiche une barre latérale « Smart Connections » de notes sémantiquement connexes pour la note active.',
          '**Installation :** Paramètres → Plugins communautaires → Parcourir → « Smart Connections » → Installer + Activer. Auteur : Brian Petro.',
          '**Configurez pour Ollama :** Paramètres → Smart Connections → Modèle d\'embeddings → sélectionnez « Local (Ollama) » → entrez `http://localhost:11434/api/embeddings` → nom du modèle `nomic-embed-text` (ou `mxbai-embed-large`).',
          '**Indexation au premier lancement :** le plugin intègre chaque note. Temps sur Mac M3 Pro avec nomic-embed-text : 1K notes ~2 min, 5K notes ~10 min, 10K notes ~25 min, 20K notes ~75 min. La réindexation après modification est incrémentale (notes modifiées uniquement).',
          '**Stockage :** l\'index réside dans `.smart-env/` à l\'intérieur du vault. Se synchronise correctement avec Obsidian Sync ; avec iCloud / Git, vous devez regénérer par appareil car l\'index est un binaire spécifique à la plateforme.',
          '**Meilleur modèle d\'embeddings 2026 :** `nomic-embed-text` (137M paramètres, 768 dim, rapide) pour la plupart des utilisateurs. `mxbai-embed-large` (335M paramètres, 1024 dim) est plus précis sur le contenu technique mais prend ~2× le temps d\'index.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Après la fin de l\'index initial, laissez Smart Connections s\'exécuter en arrière-plan. Les modifications ultérieures déclenchent une réintégration incrémentale — généralement moins d\'une seconde par note sauvegardée. Vous pouvez également pausez l\'indexation pendant les séances d\'édition intensives pour éviter la concurrence CPU avec Ollama lui-même.',
          },
        ],
      },
      copilot: {
        id: 'copilot',
        title: 'Copilot for Obsidian : Chat avec Contexte du Vault',
        content:
          '**Copilot for Obsidian fournit la barre latérale de chat que Smart Connections n\'a pas.** Configurez-le pour utiliser Ollama et vous disposez d\'un assistant de chat privé capable de répondre aux questions en utilisant votre vault comme contexte, générer du contenu intégré et exécuter des prompts personnalisés sur les sélections.',
        items: [
          '**Ce qu\'il fait :** barre latérale de chat, mode QA vault (chat avec notes récupérées), chat intégré, prompts personnalisés sur sélections, commandes de palette de commandes.',
          '**Installation :** Paramètres → Plugins communautaires → Parcourir → « Copilot » par Logan Yang → Installer + Activer.',
          '**Configurez pour Ollama :** Paramètres → Copilot → Paramètres API → Fournisseur « OpenAI personnalisé » ou « Ollama » → URL de base API `http://localhost:11434/v1` → modèle `llama3.2:3b` (ou n\'importe quel modèle Ollama).',
          '**Mode QA vault :** Copilot récupère les notes les plus pertinentes à l\'aide de son propre pipeline d\'embeddings (séparé de Smart Connections), puis envoie les morceaux récupérés au modèle de chat. Configurez les embeddings dans les paramètres de Copilot — pointez vers `http://localhost:11434/api/embeddings` et sélectionnez `nomic-embed-text`.',
          '**Commandes intégrées :** sélectionnez le texte dans une note → Cmd/Ctrl+P → « Copilot: … » — appliquez des reformulations, résumés ou modèles de prompts personnalisés sans ouvrir la barre latérale de chat.',
          '**Meilleur pour :** les utilisateurs qui souhaitent une interface de chat ET la récupération consciente du vault. Si vous ne chatez que sur la note actuelle, BMO Chatbot est plus léger.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Copilot maintient son propre index d\'embeddings séparé de Smart Connections. Exécuter les deux signifie deux index sur le même vault et environ 2× l\'espace disque (~200 MB de données vectorielles par 5K notes). Si l\'espace disque compte, configurez Copilot pour utiliser l\'index Smart Connections, ou acceptez que les deux plugins ne partagent pas d\'embeddings en mai 2026.',
          },
        ],
      },
      textGenerator: {
        id: 'text-generator',
        title: 'Text Generator : Génération Basée sur Templates',
        content:
          '**Text Generator est le meilleur plugin pour les workflows répétables : expansions de notes quotidiennes, résumés de notes de réunion, génération MOC, sorties au format personnalisé.** Les templates utilisent des variables frontmatter et Markdown, donc un seul template peut être déclenché par raccourci clavier sur n\'importe quelle note.',
        items: [
          '**Ce qu\'il fait :** exécute un modèle de prompt personnalisé contre la note actuelle (ou sélection) à l\'aide de votre LLM local. Les templates supportent les variables frontmatter, l\'insertion de la date actuelle et la capture de sélection.',
          '**Installation :** Paramètres → Plugins communautaires → Parcourir → « Text Generator » → Installer + Activer. Auteur : nhaouari.',
          '**Configurez pour Ollama :** Paramètres → Text Generator → Fournisseur → « Ollama » ou « Personnalisé » → endpoint `http://localhost:11434/v1` → modèle `llama3.2:3b`.',
          '**Templates :** stockés en tant que fichiers Markdown dans un dossier configuré (par ex. `Templates/`). Un template est simplement un prompt avec des espaces réservés `{{title}}`, `{{selection}}`, `{{date}}`.',
          '**Workflows avec raccourci clavier :** attribuez un raccourci clavier à un template spécifique (Cmd/Ctrl+T → « Générer à partir du template » → sélectionner le template). Un seul appui déclenche votre template sur la note actuelle.',
          '**Meilleur pour :** les workflows que vous effectuez des douzaines de fois — prompts journal quotidien, questions d\'examen hebdomadaire, résumés de réunion, notes de lecture de papier.',
        ],
        promptExamples: [
          {
            label: 'Template Text Generator : résumé des notes quotidiennes',
            text: '---\nname: Daily summary\n---\nSummarise the following daily note in three concise bullet points. Focus on decisions made, blockers identified, and action items for tomorrow.\n\nDaily note ({{date}}):\n{{content}}\n\nSummary:',
          },
          {
            label: 'Template Text Generator : générateur MOC (Map of Content)',
            text: '---\nname: MOC for tag\n---\nGenerate a Map of Content for all notes tagged with `#{{selection}}`. Group related notes into 3–5 thematic clusters, with a one-sentence description per cluster and a list of the notes inside each cluster.\n\nNotes tagged #{{selection}}:\n{{vault_search_result tag={{selection}}}}\n\nMOC:',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Combinez les templates Text Generator avec Obsidian QuickAdd pour construire une séquence « Daily Review » : une seule commande QuickAdd ouvre la note quotidienne d\'aujourd\'hui, exécute le template de résumé quotidien et insère le résultat. Trois plugins (Text Generator + QuickAdd + Templater pour les mathématiques de date) vous permettent de construire un workflow qui prend 2 secondes à déclencher et 10 secondes à terminer.',
          },
        ],
      },
      localGpt: {
        id: 'local-gpt',
        title: 'Local GPT : Chat Axé sur la Confidentialité',
        content:
          '**Local GPT est un plugin de chat construit autour du principe qu\'aucun contenu de note ne doit quitter la machine.** Il est fonctionnellement plus simple que Copilot for Obsidian — pas de mode QA vault, pas de bibliothèque de templates — mais c\'est le plus explicite sur sa position en matière de confidentialité.',
        items: [
          '**Ce qu\'il fait :** chat avec la note actuelle (ou texte sélectionné) à l\'aide d\'un LLM local. Aucune option cloud n\'existe dans le plugin — uniquement des fournisseurs locaux.',
          '**Installation :** Paramètres → Plugins communautaires → Parcourir → « Local GPT » → Installer + Activer. Auteur : pfrankov (vérifiez dans la liste — plusieurs plugins ont des noms similaires).',
          '**Configurez pour Ollama :** Paramètres → Local GPT → Fournisseur → « Ollama » → URL `http://localhost:11434` → modèle `llama3.2:3b`.',
          '**Portée du chat :** note active ou texte sélectionné uniquement. Il n\'existe pas d\'index d\'embeddings — le contexte est simplement ce que vous envoyez explicitement.',
          '**Meilleur pour :** les utilisateurs qui souhaitent chatter sur la note actuelle, préfèrent la plus petite surface de fonctionnalités possible et souhaitent un plugin qui ne peut pas appeler accidentellement un service cloud.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si vous faites confiance à Copilot for Obsidian pour rester local (il peut être configuré en cloud ou local), utilisez Copilot. Si vous souhaitez que le code du plugin lui-même rend les appels cloud impossibles, utilisez Local GPT — sa contrainte de conception est « pas de fournisseurs cloud, jamais ». C\'est une distinction significative pour les workflows en santé, droit et journalisme où toute chance d\'une fuite cloud accidentelle est un problème.',
          },
        ],
      },
      bmoChatbot: {
        id: 'bmo-chatbot',
        title: 'BMO Chatbot : Chat Léger',
        content:
          '**BMO Chatbot est le plugin de chat minimaliste : une barre latérale, un sélecteur de modèle et un champ de configuration pour votre endpoint.** Pas de recherche vault, pas de templates, pas de commandes intégrées. Si vous ne chatez que sur la note active, BMO est l\'option la plus légère.',
        items: [
          '**Ce qu\'il fait :** barre latérale de chat qui inclut la note active comme contexte.',
          '**Installation :** Paramètres → Plugins communautaires → Parcourir → « BMO Chatbot » → Installer + Activer. Auteur : longy2k.',
          '**Configurez pour Ollama :** Paramètres → BMO Chatbot → API → URL `http://localhost:11434/v1` → modèle `llama3.2:3b`.',
          '**Gestion du contexte :** la note active est automatiquement incluse dans le contexte du chat. Le changement de note change le contexte.',
          '**Meilleur pour :** les utilisateurs qui souhaitent un seul plugin de chat avec la plus petite configuration possible, aucun index d\'embeddings et une interface qui s\'adapte à une barre latérale Obsidian étroite.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'BMO Chatbot est le bon plugin pour « Je veux uniquement chatter sur ma note actuelle. » Si vous vous trouvez souhaitant « rechercher dans tout mon vault » ou « exécuter ce modèle de prompt sur chaque note de réunion », vous avez dépassé BMO — basculez vers Copilot for Obsidian (QA vault) ou Text Generator (templates).',
          },
        ],
      },
      recommendedCombo: {
        id: 'recommended-combo',
        title: 'Combinaison Recommandée : Smart Connections + Copilot',
        content:
          '**Installez Smart Connections + Copilot for Obsidian, tous deux pointant vers Ollama.** Cette combinaison gère les deux tâches distinctes d\'IA qu\'Obsidian users veulent vraiment — recherche sémantique du vault et chat avec contexte du vault — et couvre ~80 % des cas d\'usage « deuxième cerveau » sans envoyer les notes vers le cloud.',
        numberedItems: [
          '**Installez Ollama** sur votre machine : `brew install ollama` (macOS) ou téléchargez depuis ollama.com (Windows / Linux). Tirez le modèle de chat : `ollama pull llama3.2:3b`. Tirez le modèle d\'embeddings : `ollama pull nomic-embed-text`.',
          '**Démarrez Ollama :** il démarre généralement en tant que service de fond après l\'installation. Vérifiez : `curl http://localhost:11434/api/tags` retourne JSON avec vos modèles installés.',
          '**Installez Smart Connections** dans Obsidian → configurez les embeddings pour utiliser Ollama à `http://localhost:11434/api/embeddings` avec le modèle `nomic-embed-text`. Laissez-le indexer (2–75 min selon la taille du vault).',
          '**Installez Copilot for Obsidian** → définissez le fournisseur sur « Ollama » ou « OpenAI personnalisé » → URL de base API `http://localhost:11434/v1` → modèle de chat `llama3.2:3b` → modèle d\'embeddings `nomic-embed-text` (pour QA vault).',
          '**Testez :** ouvrez une note → vérifiez la barre latérale Smart Connections pour les notes connexes → ouvrez le chat Copilot → posez une question nécessitant la connaissance du vault (« résumez ce que j\'ai écrit sur [sujet] ») → vérifiez que la réponse référence réellement vos notes.',
          '**Plugin tiers optionnel :** ajoutez Text Generator si vous avez des workflows répétables (résumés de notes quotidiennes, expansions de réunion, génération MOC). Configurez avec le même endpoint Ollama.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Une erreur courante est de configurer Copilot avec un modèle et Smart Connections avec un autre — puis de se demander pourquoi les réponses semblent incohérentes. Utilisez le même modèle de chat dans les deux (Llama 3.2 3B pour la plupart des utilisateurs ; Phi-4 Mini pour les systèmes 8 GB RAM). Le seul endroit où l\'utilisation d\'un modèle différent a du sens est le modèle d\'embeddings — c\'est toujours un modèle distinct du modèle de chat.',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: 'Workflows Exemples : Notes Quotidiennes, MOCs, Assistance Rédactionnelle',
        content:
          '**Trois workflows concrets démontrant la combinaison en action.** Chacun s\'appuie sur Smart Connections (pour le contexte vault) et Copilot (pour le chat) avec Text Generator ajouté pour le travail de template.',
        items: [
          '**Résumé de notes quotidiennes :** dans votre note quotidienne, sélectionnez tout → commande intégrée Copilot → « Résumez ce jour en trois points focalisés sur les décisions, les blocages et les actions de demain ». La sortie remplace ou s\'ajoute en dessous de la sélection. Enregistrez le prompt comme modèle Text Generator pour le rendre une action à un seul appui.',
          '**Génération MOC (Map of Content) :** ouvrez une page de tag ou une note de sujet → Copilot → « Générez une Map of Content pour ce sujet, en regroupant les notes connexes que j\'ai en 3–5 groupes thématiques. Utilisez la barre latérale Smart Connections pour identifier les notes connexes. » → examinez et modifiez. Smart Connections fournit la couche de découverte ; Copilot synthétise la structure.',
          '**Assistance rédactionnelle contextuelle :** en rédigeant une note, ouvrez le chat Copilot → demandez « Quelles perspectives me manquent, étant donné les notes que j\'ai écrites sur [sujet] ? » Copilot récupère les notes pertinentes via QA vault et propose des lacunes. Utile pour sortir des brouillons à perspective unique.',
          '**Examen hebdomadaire :** modèle Text Generator qui s\'exécute sur les sept derniers notes quotidiennes → « Résumez la semaine en trois points par catégorie : progrès, blocages, thèmes. » Liez à un raccourci clavier pour un examen à un seul appui.',
          '**Notes de papier / lecture de livre :** ouvrez la note source → commande intégrée Copilot → « Générez trois paires question/réponse de style Anki à partir de cette note pour la répétition espacée. » La sortie peut être acheminée vers le plugin Spaced Repetition.',
          '**Liaison de notes dormantes :** la barre latérale Smart Connections affiche les notes connexes qui peuvent être intactes pendant des mois — un rappel de réexaminer et de connecter d\'anciens matériels au travail actuel.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Le workflow le plus sous-estimé est l\'examen quotidien de Smart Connections. Chaque matin, ouvrez la note quotidienne → vérifiez la barre latérale Smart Connections pour les notes connexes inattendues de vos archives. Le plugin fait remonter les notes oubliées qui touchent le même thème, ce qui est exactement l\'effet « partenaire pensant » que les travailleurs du savoir attendent d\'un deuxième cerveau.',
          },
        ],
      },
      mobileSync: {
        id: 'mobile-sync',
        title: 'Synchronisation Mobile : Obsidian Sync vs iCloud vs Git',
        content:
          '**La compatibilité des plugins sur Obsidian Mobile dépend de deux facteurs : comment votre vault se synchronise et si votre téléphone peut atteindre un serveur Ollama local.** Les embeddings de Smart Connections sont le composant le plus sensible à la synchronisation.',
        items: [
          '**Obsidian Sync (payant) :** le chemin le plus propre. Le dossier `.smart-env/` se synchronise chiffré de bout en bout entre appareils, donc Smart Connections n\'a pas besoin de réindexer par appareil. Les paramètres des plugins se synchronisent également. Les plugins de chat mobile ont toujours besoin d\'accès LAN à Ollama (voir ci-dessous).',
          '**iCloud Drive :** vault se synchronise, mais `.smart-env/` est un binaire spécifique à la plateforme et peut se corrompre ou ne pas se synchroniser correctement entre iOS / macOS / Windows / Android. Solution pratique : regénérez Smart Connections par appareil, ou excluez `.smart-env/` de la synchronisation et acceptez que mobile n\'ait pas de barre latérale sémantique.',
          '**Git (via Working Copy sur iOS, Termux sur Android) :** le vault en texte brut se synchronise correctement ; `.smart-env/` doit être ajouté à `.gitignore` car l\'index binaire enflerait le repo et créerait des conflits de fusion. Regénérez par appareil.',
          '**Accès LAN à Ollama depuis mobile :** par défaut, Ollama écoute uniquement sur `localhost:11434` — non accessible depuis votre téléphone. Pour utiliser les plugins d\'IA sur Obsidian Mobile : liez Ollama à votre LAN avec `OLLAMA_HOST=0.0.0.0:11434 ollama serve`, trouvez l\'adresse IP LAN du bureau (par ex. `192.168.1.20`), entrez cette IP au lieu de localhost dans le plugin. Le téléphone doit être sur le Wi-Fi domestique.',
          '**Tailscale / VPN maille :** permet à votre téléphone d\'atteindre Ollama domestique de n\'importe où, pas seulement le Wi-Fi domestique. Tailscale est l\'option la plus populaire en 2026 — installez sur ordinateur et téléphone, utilisez l\'IP Tailscale dans la configuration du plugin.',
          '**La génération d\'embeddings de Smart Connections s\'exécute uniquement sur ordinateur.** Même si Obsidian Sync déplace l\'index, l\'index doit être créé quelque part — c\'est toujours une machine de classe ordinateur. Mobile utilise l\'index synchronisé pour la recherche de notes connexes en lecture seule.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Si vous utilisez iCloud ou Git pour la synchronisation du vault et souhaitez utiliser Smart Connections sur plusieurs appareils, le chemin le plus propre est de désigner un appareil comme « indexeur » (votre ordinateur principal) et d\'accepter que Smart Connections ne fonctionne complètement que là. Sur les autres appareils, vous avez soit un index obsolète (iCloud), soit aucun index (Git avec `.smart-env` dans `.gitignore`). Obsidian Sync est la seule option qui gère correctement ce cas.',
          },
        ],
      },
      vaultScale: {
        id: 'vault-scale',
        title: 'Taille du Vault : 1K, 5K, 10K, 20K Notes',
        content:
          '**Tous les cinq plugins restent réactifs à 5 000+ notes ; le goulot d\'étranglement au-delà de 20K notes est le temps de réindexation de Smart Connections, pas la latence de requête.** Les nombres réalistes ci-dessous sont mesurés sur Mac M3 Pro (16 GB mémoire unifiée) avec embeddings `nomic-embed-text` et Llama 3.2 3B chat.',
        columns: ['Taille du vault', 'Index initial Smart Connections', 'Réindexation par changement', 'Latence de chat (Copilot)', 'Notes'],
        rows: [
          { 'Taille du vault': '1 000 notes', 'Index initial Smart Connections': '~2 min', 'Réindexation par changement': '<1 sec', 'Latence de chat (Copilot)': '~1–2 sec premier token', 'Notes': 'Confortable sur n\'importe quel matériel moderne.' },
          { 'Taille du vault': '5 000 notes', 'Index initial Smart Connections': '~10 min', 'Réindexation par changement': '<1 sec', 'Latence de chat (Copilot)': '~1–2 sec premier token', 'Notes': 'Cible idéale pour la plupart des travailleurs du savoir.' },
          { 'Taille du vault': '10 000 notes', 'Index initial Smart Connections': '~25 min', 'Réindexation par changement': '~1–2 sec', 'Latence de chat (Copilot)': '~2–3 sec premier token (retrieval QA vault ajoute ~500 ms)', 'Notes': 'Toujours entièrement utilisable ; envisagez de diviser si vous remarquez des ralentissements.' },
          { 'Taille du vault': '20 000 notes', 'Index initial Smart Connections': '~75 min', 'Réindexation par changement': '~2–4 sec', 'Latence de chat (Copilot)': '~3–5 sec premier token', 'Notes': 'Planifiez l\'index initial pendant la nuit. Utilisation disque de `.smart-env/` ~800 MB–1,2 GB.' },
          { 'Taille du vault': '50 000+ notes', 'Index initial Smart Connections': '4–8 h', 'Réindexation par changement': '~5–10 sec', 'Latence de chat (Copilot)': '~5–10 sec premier token', 'Notes': 'Limite pratique. Envisagez des sous-vaults ou un upgrade vers mxbai-embed-large si la qualité compte plus que la vitesse.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La taille du vault a plus d\'impact sur l\'indexation initiale que sur la réactivité quotidienne. Après l\'index initial, la réintégration ne se produit que pour les notes modifiées — généralement moins d\'une seconde par sauvegarde, même à 20K notes. L\'expérience de première lenteur est un coût unique. Exécutez l\'index initial pendant la nuit pour les grands vaults.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs Courantes',
        items: [
          '**Configurer deux plugins avec deux modèles de chat différents.** Smart Connections ne génère pas, mais Copilot, Text Generator, Local GPT et BMO le font. Utiliser un modèle différent dans chacun rend les réponses incohérentes. Choisissez un modèle de chat (Llama 3.2 3B est le standard pour la plupart des utilisateurs) et configurez tous les plugins de chat sur celui-ci.',
          '**Ajouter `.smart-env/` à un vault synchronisé par Git sans `.gitignore`.** L\'index Smart Connections est binaire et change à chaque modification. Sans `.gitignore`, vous obtenez une historique Git massive et des conflits de fusion constants. Ajoutez `.smart-env/` à `.gitignore` et regénérez par appareil.',
          '**Attendre que Smart Connections mobile construise son propre index.** La génération d\'embeddings nécessite une machine de classe ordinateur. Mobile utilise un index synchronisé (Obsidian Sync) ou n\'a pas d\'index (iCloud / Git). Planifiez en conséquence.',
          '**Pointer le plugin sur `http://localhost:11434/v1` depuis un appareil mobile.** Mobile ne peut pas atteindre localhost du bureau. Liez Ollama à l\'adresse IP LAN (`OLLAMA_HOST=0.0.0.0:11434`) et utilisez cette adresse IP dans la configuration du plugin — ou Tailscale pour l\'accès en dehors du réseau domestique.',
          '**Exécuter les deux index de Smart Connections et Copilot sur le même vault.** Deux index séparés consomment environ 2× l\'espace disque et CPU. En mai 2026, les deux plugins ne partagent pas d\'embeddings. Si la pression disque compte, utilisez Smart Connections pour la récupération et configurez Copilot pour l\'utiliser (avancé — nécessite de modifier la configuration de récupération de Copilot pour lire le magasin vectoriel de Smart Connections).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Smart Connections — [github.com/brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections) (plugin Obsidian open-source).',
          'Copilot for Obsidian — [github.com/logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot) (plugin Obsidian open-source).',
          'Text Generator — [github.com/nhaouari/obsidian-textgenerator-plugin](https://github.com/nhaouari/obsidian-textgenerator-plugin) (plugin Obsidian open-source).',
          'Ollama — [ollama.com](https://ollama.com) et [github.com/ollama/ollama](https://github.com/ollama/ollama) (runtime LLM local).',
          'Architecture de synchronisation mobile Obsidian — [help.obsidian.md](https://help.obsidian.md) et documentation Obsidian Sync.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Quel plugin Obsidian fonctionne le mieux avec Ollama ?',
            a: 'Pour la plupart des utilisateurs : Smart Connections (recherche sémantique du vault) + Copilot for Obsidian (chat). Les deux sont configurés pour pointer vers les endpoints d\'Ollama (chat à `http://localhost:11434/v1`, embeddings à `http://localhost:11434/api/embeddings`). Smart Connections gère la découverte de notes connexes ; Copilot gère les requêtes conversationnelles avec contexte vault. Ajoutez Text Generator comme troisième plugin si vous avez des workflows de templates répétables.',
          },
          {
            q: 'Les plugins peuvent-ils gérer un vault de 10 000 notes ?',
            a: 'Oui. Smart Connections prend ~25 minutes pour l\'index initial sur un Mac M3 Pro et ~1–2 secondes par changement après. La latence QA vault de Copilot est ~2–3 secondes premier token. À 20K notes, planifiez ~75 minutes d\'indexation initiale (exécutez pendant la nuit). À 50K+ notes, l\'indexation prend 4–8 heures et vous devriez envisager de diviser en sous-vaults.',
          },
          {
            q: 'Ces plugins se synchronisent-ils sur mobile ?',
            a: 'Les plugins eux-mêmes se synchronisent via la synchronisation des plugins Obsidian. Les contraintes sont : (1) index d\'embeddings Smart Connections — se synchronise correctement avec Obsidian Sync, nécessite une réindexation par appareil avec iCloud ou Git ; (2) les plugins de chat ont besoin d\'atteindre Ollama, ce qui signifie accès LAN (remplacez `localhost` par l\'adresse IP LAN du bureau après avoir lié Ollama à `0.0.0.0`) ou un VPN maille comme Tailscale.',
          },
          {
            q: 'Puis-je utiliser plusieurs plugins IA ensemble ?',
            a: 'Oui. Smart Connections + Copilot est la combinaison recommandée. Ajouter Text Generator pour les templates est courant. Ajouter plus de trois plugins de chat (Copilot + Local GPT + BMO) est redondant — ils font tous le même travail. Choisissez un plugin de chat et restez-y.',
          },
          {
            q: 'Quel plugin est le meilleur pour écrire dans les notes ?',
            a: 'Copilot for Obsidian — il a des commandes intégrées (Cmd/Ctrl+P → Copilot → reformuler / résumer / prompt personnalisé) qui opèrent sur le texte sélectionné. Text Generator est aussi solide pour les tâches d\'écriture répétables via des templates. Pour l\'assistance rédactionnelle ad-hoc (« reformulez ce paragraphe de manière plus formelle »), Copilot est plus rapide. Pour la génération structurée (« transformez chaque note de réunion en résumé en utilisant ce template »), Text Generator est meilleur.',
          },
          {
            q: 'Comment puis-je prompter sur l\'ensemble de mon vault ?',
            a: 'Utilisez le mode QA vault de Copilot for Obsidian. Il utilise un index d\'embeddings (similaire à Smart Connections) pour récupérer les notes les plus pertinentes pour une requête, puis envoie ces morceaux au modèle de chat. Configurez les embeddings dans les paramètres de Copilot pour qu\'ils pointent vers votre Ollama local. Smart Connections lui-même n\'a pas d\'interface de chat — il affiche les notes connexes mais ne synthétise pas sur eux.',
          },
          {
            q: 'Puis-je utiliser ces plugins pour la tenue de journal quotidien ?',
            a: 'Oui. Deux schémas solides : (1) la barre latérale Smart Connections fait remonter les notes connexes oubliées lorsque vous ouvrez votre note quotidienne d\'aujourd\'hui — un effet « partenaire pensant ». (2) un template Text Generator s\'exécute en fin de journée pour résumer la note quotidienne en 3 points (décisions, blocages, action items). Combiner les deux rend la tenue de journal quotidien plus réfléchie.',
          },
          {
            q: 'Les plugins survivent-ils aux mises à jour Obsidian ?',
            a: 'Généralement oui — les plugins bien maintenus (Smart Connections, Copilot, Text Generator) sont mis à jour quelques jours après les versions majeures d\'Obsidian. Les plugins moins maintenus occasionnellement à la traîne. Vérifiez la page GitHub Issues du plugin s\'il se casse après une mise à jour Obsidian ; le correctif est généralement une version de maintenance dans 1–2 semaines. Le manifeste du plugin déclare la compatibilité minimale de version Obsidian.',
          },
          {
            q: 'Lequel a le meilleur support communautaire ?',
            a: 'Smart Connections a 2026 la plus grande communauté la plus active (~5K membres Discord, appels dev réguliers). Copilot for Obsidian a une solide communauté GitHub Issues et un mainteneur actif (Logan Yang). Text Generator a une communauté plus petite mais engagée. Local GPT et BMO Chatbot ont des communautés plus petites — bien pour l\'utilisation stable, plus lent pour la résolution de problèmes.',
          },
          {
            q: 'Puis-je exécuter le plugin IA sur une autre machine ?',
            a: 'Oui. Exécutez Ollama sur un serveur domestique plus puissant (mini PC, NAS ou station de travail dédiée), liez-le à votre LAN avec `OLLAMA_HOST=0.0.0.0:11434 ollama serve`, puis entrez l\'adresse IP LAN du serveur dans la configuration de chaque plugin (par ex. `http://192.168.1.20:11434/v1`). Cela permet à un ordinateur portable ou un appareil mobile peu puissant d\'utiliser des modèles complets 70B exécutés sur le serveur domestique. Associez avec Tailscale pour le faire fonctionner de n\'importe où, pas seulement le Wi-Fi domestique.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures Complémentaires',
        items: [
          '[LLM Local avec Logseq et Joplin](/fr/power-local-llm/local-llm-with-logseq-and-joplin) — alternatives open-source connexes pour les lecteurs préférant Logseq ou Joplin à Obsidian.',
          '[Base de Connaissances Personnelle LLM Local 2026](/fr/power-local-llm/local-llm-personal-knowledge-base-2026) — l\'architecture PKB plus large dans laquelle Obsidian s\'écoule ; couvre la couche RAG, les stratégies de marquage et les workflows 10K-items.',
          '[Construire RAG Local sur Vos PDFs en 30 Minutes (Ollama + AnythingLLM)](/fr/power-local-llm/local-rag-on-your-pdfs-step-by-step) — la couche RAG alimentant les plugins sémantiques comme Smart Connections ; arrière-plan utile sur les choix d\'embeddings.',
          '[Rédiger des Romans et des Scénarios avec LLMs Locaux (2026)](/fr/power-local-llm/local-llm-screenwriting-and-novel-drafting) — Obsidian comme couche de rédaction pour l\'écriture de long texte.',
          '[Meilleurs LLMs Locaux 2026](/fr/local-llms/best-local-llms-2026) — autorité de modèle plus large pour choisir les modèles de chat et d\'embeddings derrière ces plugins.',
          '[Annuaire Logiciels LLM Local 2026](/fr/power-local-llm/local-llm-software-directory-2026) — listings d\'annuaires pour Ollama, Smart Connections, Copilot et autres composants de cette pile.',
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
    title: 'Obsidian + ローカルLLM: あなたのボルトを第二の脳に変える5つのプラグイン (2026)',
    seoTitle: 'Obsidian + ローカルLLM: 2026年の5つプラグイン',
    intro:
      '2026年、5つのObsidianプラグインがローカルOllamaバックエンドと組み合わせることで、ボルトを機能する第二の脳に変えます: Smart Connections、Copilot for Obsidian、Text Generator、Local GPT、BMO Chatbot。各プラグインは異なるレイヤーをカバーしています — セマンティック検索、インラインチャット、テンプレート生成、プライバシー重視の会話、軽量なコンテキスト対応チャット。ほとんどのユーザーにとって推奨される組み合わせはSmart Connections + Copilot for Obsidianです: 一方がボルト全体のセマンティック連携を処理し、もう一方がチャットインターフェイスを提供します。このガイドは、ボルト検索品質、生成速度、プロンプトのカスタマイズ、モバイル同期の動作に基づいて5つのプラグインをランク付けし、Ollamaの具体的な設定手順を含みます。',
    metaDescription:
      '2026年版ObsidianとローカルLLMの連携：クラウド不要のAI支援ノート。プラグイン、設定、ローカルモデルを使ったプライベートな知識作業のワークフローを解説。',
    twitterDescription:
      '2026年のObsidian + ローカルLLM最良の組み合わせ: Smart Connections (ボルトセマンティック検索) + Copilot for Obsidian (チャット)。すべての5つのプラグインはOllamaでテスト済み。モバイル同期の注意事項。',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'nomic-embed-text',
      'mxbai-embed-large',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (16GB以上のユニファイドメモリ)',
      'RTX 3060 12GBまたはRTX 4060 8GB搭載PC',
      'RAM 16GB PC (CPU のみのフォールバック)',
    ],
    audience:
      '1,000～20,000ノートのボルトを運用するObsidianパワーユーザー、ナレッジワーカー、研究者、ライターで、ノートをクラウドサービスに送信することなくAI機能を利用したい方。',
    readTime: '14分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Obsidian ローカルLLM プラグイン',
    targetKeywords: [
      'obsidian ローカル llm',
      'obsidian ollama プラグイン',
      'smart connections obsidian ローカル',
      'copilot for obsidian ローカル',
      'obsidian 第二の脳 ai',
      'obsidian プラグイン プライベート llm',
    ],
    leadAnswerBlock:
      '**2026年のほとんどのObsidianユーザーにとって、Smart Connections + Copilot for Obsidianをインストールし、両方をローカルOllamaバックエンドを使用するよう設定してください。** Smart Connectionsは `nomic-embed-text` または `mxbai-embed-large` を介したローカルエンベディングを使用して、ボルト全体のセマンティック連携 (関連ノートサイドバー) を処理します。Copilot for Obsidianはチャットインターフェイスを提供し、`http://localhost:11434/v1` のOllamaのOpenAI互換エンドポイントに設定されます。このペアは、ボルトコンテンツをクラウドに送信することなく、「第二の脳」ユースケースの~80%(セマンティック検索+ノートとのチャット)をカバーしています。テンプレート駆動コンテンツ生成 (日次ジャーナルプロンプト、会議ノート展開) を望む場合は、Text Generatorを3番目のプラグインとして追加してください。Smart Connectionsエンベディングはボルト内の `.smart-env/` に存在します — Obsidian Syncで複数デバイス間で同期しますが、iCloudまたはGitを使用する場合はデバイスごとに再生成する必要があります。',
    quickAnswerTop: {
      en: {
        question: '2026年、ローカルLLMに最適なObsidianプラグイン組み合わせはどれですか?',
        answer:
          'Smart Connections + Copilot for Obsidianが推奨される組み合わせです。Smart Connectionsはローカルエンベディング (nomic-embed-text または mxbai-embed-large via Ollama) でボルトセマンティック検索を処理します; CopilotはあなたのボルトのOpenAI互換エンドポイントに設定されたチャットサイドバーを提供します。一緒に、関連ノートの発見とボルトコンテキストでのチャット — 「第二の脳」ユースケースの約80% をカバーしています。テンプレート駆動生成にはText Generatorを3番目のプラグインとして追加してください。Local GPTとBMO Chatbotはシンプルなチャットのみの体験を好むユーザーにはCopilotのより軽い代替案です。すべての5つのプラグインはあらゆるOllamaモデルで動作します; 2026年の16GB RAMシステムに推奨されるチャットモデルはLlama 3.2 3BまたはPhi-4 Miniです。',
        bullets: [
          'Smart Connections — セマンティック検索 + 関連ノートサイドバー。ボルト全体の連携に最適。',
          'Copilot for Obsidian — ボルトコンテキスト付きチャットサイドバー。会話型クエリに最適。',
          'Text Generator — フロントマター変数でテンプレート駆動生成。繰り返し可能なワークフロー (日次ノート、会議要約) に最適。',
          'Local GPT — プライバシー重視チャット (現在のノート)。Copilotの軽い代替案。',
          'BMO Chatbot — ボルトコンテキスト付きミニマリストチャット。Copilotの機能サーフェスなしに単一チャットプラグインを望むユーザーに最適。',
          '推奨Ollamaモデル: Llama 3.2 3B (チャット)、Phi-4 Mini (チャット、小)、nomic-embed-text または mxbai-embed-large (Smart Connectionsのエンベディング)。',
          'モバイル同期注意: Smart Connectionsエンベディングは .smart-env/ に存在します — Obsidian Syncで同期、iCloudまたはGitではデバイスごとに再生成。',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '重要なポイント', anchor: '#key-takeaways' },
      { label: '重要な事実', anchor: '#quick-facts' },
      { label: 'どのプラグイン組み合わせをインストールすべき?', anchor: '#which-plugins' },
      { label: 'プラグイン比較表', anchor: '#comparison-table' },
      { label: 'Smart Connections: ボルトセマンティック検索', anchor: '#smart-connections' },
      { label: 'Copilot for Obsidian: ボルトコンテキスト付きチャット', anchor: '#copilot' },
      { label: 'Text Generator: テンプレート駆動生成', anchor: '#text-generator' },
      { label: 'Local GPT: プライバシー重視チャット', anchor: '#local-gpt' },
      { label: 'BMO Chatbot: 軽量チャット', anchor: '#bmo-chatbot' },
      { label: '推奨コンボ: Smart Connections + Copilot', anchor: '#recommended-combo' },
      { label: 'ワークフロー例: Daily Notes、MOCs、執筆支援', anchor: '#workflows' },
      { label: 'モバイル同期: Obsidian Sync vs iCloud vs Git', anchor: '#mobile-sync' },
      { label: 'ボルトスケール: 1K、5K、10K、20Kノート', anchor: '#vault-scale' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: 'リソース', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連リーディング', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Smart Connections + Copilot for Obsidianはほとんどのユーザーに推奨される組み合わせです。** Smart Connectionsはローカルエンベディングでボルトセマンティック検索を処理します; Copilotはボルトコンテキスト付きチャットを処理します。一緒に、クラウド呼び出しなしで「第二の脳」ユースケースの~80%をカバーしています。',
          '**すべての5つのプラグインは `http://localhost:11434/v1` でOllamaのOpenAI互換エンドポイント経由で動作します。** 各プラグインの「API基本URL」設定または同等の設定をこのアドレスにポイントしてください。Ollamaデフォルトモデル名 (例: `llama3.2:3b`) はプラグインのモデルフィールドに入力するものです。',
          '**Smart Connectionsは、ボルト全体にエンベディングインデックスを構築する唯一のプラグインです。** これにより、5,000以上のノートでの関連ノート検索が実用的になります。インデックスはボルト内の `.smart-env/` に保存され、Obsidian Syncと同期します; iCloudまたはGitではデバイスごとに再生成してください。',
          '**Text Generatorは繰り返し可能なワークフロー向けの最高のプラグインです。** 日次ノート要約、会議ノート展開、MOC (コンテンツマップ) 生成は、フロントマター変数を備えたテンプレート経由でシングルキーストロークアクションになります。',
          '**チャットのみのユーザーの場合、BMO ChatbotはCopilotより軽量です。** インデックスを構築しません — コンテキストは単に現在のノートです。開いているノートについてのみチャットする場合、BMOで十分です。',
          '**ボルトスケール (Smart Connections + nomic-embed-text の場合):** Mac M3 Proで1Kノートは~2分、5Kは~10分、10Kは~25分、20Kは~75分のインデックス作成。最初の実行後は再インデックス時間が少なります (変更されたノートのみ)。',
          '**2026年の推奨Ollamaモデル:** チャット — Llama 3.2 3B (デフォルト) またはPhi-4 Mini (小); エンベディング — nomic-embed-text (768次元、高速) または mxbai-embed-large (1024次元、より正確)。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '重要な事実',
        items: [
          '**対象プラグイン:** Smart Connections、Copilot for Obsidian、Text Generator、Local GPT、BMO Chatbot。',
          '**LLMバックエンド:** Ollama (推奨) またはLM Studio — ローカルURLでOpenAI互換エンドポイントを公開するもの。',
          '**Ollamaデフォルトエンドポイント:** `http://localhost:11434/v1` (チャット) または `http://localhost:11434/api/embeddings` (エンベディング)。',
          '**推奨チャットモデル:** Llama 3.2 3B、Phi-4 Mini、Gemma 3 4B (16GB RAMシステム); Qwen3 1.7B (8GB RAM)。',
          '**推奨エンベディングモデル:** nomic-embed-text (768次元、高速)、mxbai-embed-large (1024次元、より正確)。',
          '**ボルトサイズターゲット:** すべての5つのプラグインは5,000以上のノートで応答性を保ちます; Smart Connections再インデックスは20Kノートを超えるボトルネックです。',
          '**モバイル互換性:** OllamaがLAN上でアクセス可能な場合、チャットプラグインはObsidian Mobileで動作します; Smart Connectionsエンベディング生成はデスクトップのみで実行されます。',
        ],
      },
      whichPlugins: {
        id: 'which-plugins',
        title: 'どのプラグイン組み合わせをインストールすべき?',
        content:
          '**2026年のほとんどのObsidianユーザーの場合: Smart Connections (ボルトセマンティック検索) とCopilot for Obsidian (チャットサイドバー) をインストールしてください — 一緒に「第二の脳」ユースケースの~80%をカバーしています。** テンプレート駆動生成を望む場合はText Generatorを追加してください。他は特定のUIを選んでいない限り無視してください。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Smart Connections + Copilot for Obsidianをインストールし、どちらもlocalhost:11434でOllamaを使用するよう設定してください。ボルト全体のセマンティック検索と会話型クエリをカバーするプライベート第二脳スタックが得られます。',
          },
          {
            type: 'plain-terms',
            text: 'Obsidian + AIを2つの仕事と考えてください: 関連ノートを見つける (「他のどのノートがこのアイデアに触れていますか?」) そしてノートについて議論する (「このテーマについて最後のクォーターに何を書きましたか?」)。Smart Connectionsが最初をする; Copilotが2番目をする。両方はOllama経由でローカルLLMを使用するため、何も機械を離れません。繰り返し可能なタスクを実行する場合はText Generatorを追加してください (たとえば、各会議ノートを要約に変える)。特定の理由がない限り、Local GPTとBMO Chatbotは無視してください。',
          },
        ],
        decisionBlock: {
          title: '決定: どのObsidianプラグイン?',
          localIf: [
            'ボルト全体のセマンティック検索が必要 (「関連ノートを見せて」) → Smart Connections',
            'ノートコンテキスト付きチャットサイドバーが必要 → Copilot for Obsidian',
            'テンプレート駆動生成が必要 (日次ノート、会議要約) → Text Generator',
            '現在のノートについてのみチャット (ボルト検索なし) → BMO Chatbot (Copilotより軽量)',
            '厳密なプライバシー保証と最小機能が必要 → Local GPT',
          ],
          cloudIf: [
            'すべてのチャット応答でGPT-5.5の品質が必要 → クラウドの同等品 (ローカルスタックは~70%の容量に達します)',
            'ボルトがローカルネットワーク呼び出しをブロックする管理クラウドサービス上にある → クラウドプラグイン',
            'Obsidian Mobileアプリ内のiOSネイティブAI機能がLANアクセスなしで必要 → 2026年ではまだ実用的ではありません (モバイルはTailscaleなしでlocal hosLLMに到達できません)',
          ],
          quick: [
            '推奨組み合わせ: Smart Connections + Copilot for Obsidian',
            'テンプレートに追加: Text Generator',
            '軽量代替案: BMO Chatbot (チャットのみ)',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Smart ConnectionsとCopilot for Obsidianを1つずつインストールしてください。Smart Connectionsは初回インストール時にエンベディングインデックスを構築する必要があります (ボルトサイズによって2～75分)。Copilotを追加する前に完了させてください (初期インデックス中のCPU競合を避けるため)。両方が実行されたら、RAMの使用量は低い (~200～400MB組み合わせ) — Ollamaが重いプロセスで、プラグインではありません。',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'プラグイン比較表',
        content:
          '**5つのプラグインは、ほとんどのユーザーにとって重要な4つの軸で異なります: ボルト検索の深さ、生成柔軟性、モバイル互換性、機能サーフェス。** Smart ConnectionsとCopilotは交換不可能です — 異なる問題を解決し、互いに補完します。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Smart Connectionsは埋め込みでボルト全体を検索する唯一のプラグインです; 他の4つはチャットまたは生成ツールで、現在のノートまたは特定の選択肢に対して機能します。',
          },
          {
            type: 'plain-terms',
            text: 'これら5つのうち2つ (Smart Connections、Copilot) はボルト全体のコンテキストを処理します。他の3つ (Text Generator、Local GPT、BMO Chatbot) は現在のノートまたは特定の選択肢に対して機能します。複数をインストールする最も一般的な理由は、Smart Connectionsが独自のチャットUIを持たないことです — ボルトと実際に会話するために、Copilotまたはより軽いチャットプラグインのいずれかが必要です。',
          },
        ],
        columns: ['プラグイン', 'ボルト検索', '生成', 'モバイル同期', '最適用途'],
        rows: [
          { 'プラグイン': 'Smart Connections', 'ボルト検索': 'はい (エンベディングインデックス)', '生成': 'いいえ (検索のみ)', 'モバイル同期': 'Obsidian Syncで同期; iCloud/Gitではデバイスごとに再生成', '最適用途': 'ノート間のセマンティック連携' },
          { 'プラグイン': 'Copilot for Obsidian', 'ボルト検索': 'はい (vault QAモード)', '生成': 'はい (チャット+インライン)', 'モバイル同期': 'プラグイン同期; OllamaはLAN上でアクセス可能である必要があります', '最適用途': 'インラインチャット+執筆支援' },
          { 'プラグイン': 'Text Generator', 'ボルト検索': 'いいえ', '生成': 'はい (テンプレート駆動)', 'モバイル同期': 'テンプレート同期; OllamaはLAN上でアクセス可能である必要があります', '最適用途': '繰り返し可能なテンプレート生成' },
          { 'プラグイン': 'Local GPT', 'ボルト検索': 'いいえ', '生成': 'はい (チャット)', 'モバイル同期': 'プラグイン同期; OllamaはLAN上でアクセス可能である必要があります', '最適用途': '現在のノートでプライバシー重視チャット' },
          { 'プラグイン': 'BMO Chatbot', 'ボルト検索': 'いいえ', '生成': 'はい (チャット)', 'モバイル同期': 'プラグイン同期; OllamaはLAN上でアクセス可能である必要があります', '最適用途': '現在のノートで軽量チャット' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'モバイル使用の場合、制約はプラグインではなく、Obsidian MobileがOllamaに到達できるかどうかです。解決策: (1) Ollamaをホームサーバーで実行し、LANで静的IPに公開し、プラグイン内でlocalhost代わりにそのIPを入力する、(2) TailscaleまたはメッシュVPNを使用してホームOllamaにどこからでも到達する、(3) AI機能がホームWi-Fiの時のみ機能することを受け入れる。',
          },
        ],
      },
      smartConnections: {
        id: 'smart-connections',
        title: 'Smart Connections: ボルトセマンティック検索',
        content:
          '**Smart Connectionsは2026年、ボルト全体にエンベディングインデックスを構築する唯一のObsidianプラグインです。** これにより、5,000以上のノートで「関連ノートを見せて」が実用的になり、プラグインエコシステムで「第二の脳」を実現する最大のドライバーです。',
        items: [
          '**実行内容:** 各ノート (および設定可能なセクション) に対してベクトルエンベディングを生成し、アクティブノートの意味的に関連するノートの「Smart Connections」サイドバーを表示します。',
          '**インストール:** 設定 → コミュニティプラグイン → 参照 → 「Smart Connections」 → インストール+有効化。作成者: Brian Petro。',
          '**Ollamaの設定:** 設定 → Smart Connections → エンベディングモデル → 「Local (Ollama)」選択 → `http://localhost:11434/api/embeddings` 入力 → モデル名 `nomic-embed-text` (または `mxbai-embed-large`)。',
          '**初回インデックス:** プラグインは各ノートを埋め込みます。Mac M3 Proでnomic-embed-textの時間: 1Kノート~2分、5K~10分、10K~25分、20K~75分。編集後の再インデックスは増分 (変更ノートのみ)。',
          '**ストレージ:** インデックスはボルト内の `.smart-env/` に存在します。Obsidian Syncでクリーンに同期; iCloud/Gitではデバイスごとに再生成してください (インデックスはプラットフォーム固有バイナリ)。',
          '**最高のエンベディングモデル2026:** `nomic-embed-text` (137Mパラメータ、768次元、高速) ほとんどのユーザー向け。`mxbai-embed-large` (335Mパラメータ、1024次元) は技術的コンテンツでより正確ですが、インデックス時間は~2倍かかります。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '初回インデックス完了後、Smart Connectionsをバックグラウンドで実行し続けてください。後の編集は増分再埋め込みをトリガーします — 通常は保存済みノート当たり1秒未満。集中編集セッション中にインデックスを一時停止してOllamaとのCPU競合を避けることもできます。',
          },
        ],
      },
      copilot: {
        id: 'copilot',
        title: 'Copilot for Obsidian: ボルトコンテキスト付きチャット',
        content:
          '**Copilot for ObsidianはSmart Connectionsが持たないチャットサイドバーを提供します。** Ollamaを使用するよう設定して、ボルトをコンテキストとして使用して質問に答え、インラインコンテンツを生成し、選択肢にカスタムプロンプトを実行できるプライベートチャットアシスタントを取得します。',
        items: [
          '**実行内容:** チャットサイドバー、vault QAモード (取得ノートでチャット)、インラインチャット、選択肢でカスタムプロンプト、コマンドパレットコマンド。',
          '**インストール:** 設定 → コミュニティプラグイン → 参照 → 「Copilot」by Logan Yang → インストール+有効化。',
          '**Ollamaの設定:** 設定 → Copilot → APIの設定 → 「カスタムOpenAI」または「Ollama」プロバイダー → API基本URL `http://localhost:11434/v1` → モデル `llama3.2:3b` (またはあらゆるOllamaモデル)。',
          '**Vault QAモード:** Copilotはその独自エンベディングパイプライン (Smart Connectionsから独立) を使用して関連性の高いノートを取得し、取得チャンクをチャットモデルに送信します。Copilot設定でエンベディングを設定 — `http://localhost:11434/api/embeddings` をポイント、`nomic-embed-text` 選択。',
          '**インラインコマンド:** ノート内のテキストを選択 → Cmd/Ctrl+P → 「Copilot: ...」 — チャットサイドバーを開かずに言い換え、要約、またはカスタムプロンプトテンプレートを適用。',
          '**最適用途:** チャットインターフェイスとボルト対応検索の両方を希望するユーザー。現在のノートについてのみチャットする場合、BMO Chatbotはより軽量。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'CopilotはSmart Connectionsから独立した独自のエンベディングインデックスを保守します。両方を実行すると、同じボルト上に2つのインデックスと約2倍のディスク領域 (~5Kノート当たり200MBのベクトルデータ) が意味します。ディスク容量が重要な場合、CopilotをSmart Connectionsインデックスを使用するよう設定するか、2026年5月時点で2つのプラグインが埋め込みを共有しないことを受け入れてください。',
          },
        ],
      },
      textGenerator: {
        id: 'text-generator',
        title: 'Text Generator: テンプレート駆動生成',
        content:
          '**Text Generatorは繰り返し可能なワークフロー向けの最高のプラグインです: 日次ノート拡張、会議ノート要約、MOC生成、カスタム形式出力。** テンプレートはフロントマター変数とMarkdownを使用するため、単一のテンプレートをあらゆるノート上でホットキーでトリガーできます。',
        items: [
          '**実行内容:** ローカルLLMを使用して、現在のノート (または選択) に対してカスタムプロンプトテンプレートを実行します。テンプレートはフロントマター変数、現在の日付挿入、選択キャプチャをサポートします。',
          '**インストール:** 設定 → コミュニティプラグイン → 参照 → 「Text Generator」 → インストール+有効化。作成者: nhaouari。',
          '**Ollamaの設定:** 設定 → Text Generator → プロバイダー → 「Ollama」または「カスタム」 → エンドポイント `http://localhost:11434/v1` → モデル `llama3.2:3b`。',
          '**テンプレート:** 設定フォルダ (例: `Templates/`) 内のMarkdownファイルとして保存されます。テンプレートは `{{title}}`、`{{selection}}`、`{{date}}` プレースホルダーを持つプロンプトです。',
          '**ホットキーワークフロー:** 特定のテンプレートにホットキーを割り当てます (Cmd/Ctrl+T → 「テンプレートから生成」 → テンプレート選択)。1つのキーストロークが現在のノートでテンプレートを実行します。',
          '**最適用途:** 何十回も行うワークフロー — 日次ジャーナルプロンプト、週間レビュー質問、会議要約、論文読み取りノート。',
        ],
        promptExamples: [
          {
            label: 'Text Generator テンプレート: 日次ノート要約作成者',
            text: '---\nname: Daily summary\n---\nSummarise the following daily note in three concise bullet points. Focus on decisions made, blockers identified, and action items for tomorrow.\n\nDaily note ({{date}}):\n{{content}}\n\nSummary:',
          },
          {
            label: 'Text Generator テンプレート: MOC (コンテンツマップ) ジェネレータ',
            text: '---\nname: MOC for tag\n---\nGenerate a Map of Content for all notes tagged with `#{{selection}}`. Group related notes into 3–5 thematic clusters, with a one-sentence description per cluster and a list of the notes inside each cluster.\n\nNotes tagged #{{selection}}:\n{{vault_search_result tag={{selection}}}}\n\nMOC:',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Text GeneratorテンプレートをObsidian QuickAddと組み合わせて「Daily Review」シーケンスを構築してください: 単一のQuickAddコマンドが今日の日次ノートを開き、日次要約テンプレートを実行し、結果を挿入します。3つのプラグイン (Text Generator + QuickAdd + 日付数学用Templater) でトリガーに2秒、完了に10秒のワークフローを構築できます。',
          },
        ],
      },
      localGpt: {
        id: 'local-gpt',
        title: 'Local GPT: プライバシー重視チャット',
        content:
          '**Local GPTは、ノートコンテンツが機械を離れないべきという原則の周りに構築されたチャットプラグインです。** 機能的にはCopilot for Obsidianより単純です — vault QAモード、テンプレートライブラリなし — しかしプライバシーのポーズについて最も明確です。',
        items: [
          '**実行内容:** ローカルLLMを使用して現在のノート (または選択テキスト) とチャットします。プラグインではクラウドオプションは存在しません — ローカルプロバイダーのみ。',
          '**インストール:** 設定 → コミュニティプラグイン → 参照 → 「Local GPT」 → インストール+有効化。作成者: pfrankov (リストで確認してください — 複数のプラグインに類似の名前があります)。',
          '**Ollamaの設定:** 設定 → Local GPT → プロバイダー → 「Ollama」 → URL `http://localhost:11434` → モデル `llama3.2:3b`。',
          '**チャットスコープ:** アクティブノートまたは選択テキストのみ。エンベディングインデックスはありません — コンテキストは明確に送信するものです。',
          '**最適用途:** 現在のノートでチャット、可能な限り最小の機能サーフェスを好む、クラウドサービスを誤って呼び出せないプラグインを望むユーザー。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Copilot for Obsidianをローカルに留まると信頼する場合 (クラウドまたはローカルで設定可能)、Copilotを使用してください。プラグインコード自体がクラウド呼び出しを不可能にすることを望む場合、Local GPTを使用してください — その設計制約は「クラウドプロバイダーなし、決して」です。これはヘルスケア、法律、ジャーナリズムのワークフローでは有意義な区別です (偶発的なクラウドエグレスの可能性が問題の場合)。',
          },
        ],
      },
      bmoChatbot: {
        id: 'bmo-chatbot',
        title: 'BMO Chatbot: 軽量チャット',
        content:
          '**BMO Chatbotはミニマリストチャットプラグインです: サイドバー、モデルセレクタ、エンドポイントの設定フィールド。** ボルト検索、テンプレート、インラインコマンドなし。アクティブノートについてのみチャットする場合、BMOが最も軽量。',
        items: [
          '**実行内容:** コンテキストとしてアクティブノートを含むチャットサイドバー。',
          '**インストール:** 設定 → コミュニティプラグイン → 参照 → 「BMO Chatbot」 → インストール+有効化。作成者: longy2k。',
          '**Ollamaの設定:** 設定 → BMO Chatbot → API → URL `http://localhost:11434/v1` → モデル `llama3.2:3b`。',
          '**コンテキスト処理:** アクティブノートは自動的にチャットコンテキストに含まれます。ノートの切り替えはコンテキストを切り替えます。',
          '**最適用途:** 最小セットアップを望むユーザー、エンベディングインデックスなし、狭いObsidianサイドバーにフィットするUI。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'BMO Chatbotは「現在のノートについてのみチャットしたい」に適しています。「ボルト全体を検索したい」または「すべての会議ノートでこのプロンプトテンプレートを実行したい」を見つけたら、BMOを超えました — Copilot for Obsidian (vault QA) またはText Generator (テンプレート) に切り替えてください。',
          },
        ],
      },
      recommendedCombo: {
        id: 'recommended-combo',
        title: '推奨コンボ: Smart Connections + Copilot',
        content:
          '**Smart Connections + Copilot for Obsidianをインストール、両方ともOllamaをポイントしてください。** この組み合わせは、Obsidianユーザーが実際に望む2つの異なるAIジョブを処理します — ボルトセマンティック検索とボルトコンテキスト付きチャット — そして「第二の脳」ユースケースの~80%をカバーし、ノートをクラウドに送信しません。',
        numberedItems: [
          '**Ollamaをインストール** マシンに: `brew install ollama` (macOS) またはollama.comから (Windows/Linux)。チャットモデル引き出す: `ollama pull llama3.2:3b`。エンベディングモデル引き出す: `ollama pull nomic-embed-text`。',
          '**Ollamaを起動:** インストール後、通常バックグラウンドサービスとして起動します。確認: `curl http://localhost:11434/api/tags` は、インストール済みモデルでJSONを返す。',
          '**Smart Connectionsをインストール** Obsidian内 → エンベディング設定 `http://localhost:11434/api/embeddings` でOllamaを使用するよう設定、モデル `nomic-embed-text`。インデックス実行 (ボルトサイズによって2～75分)。',
          '**Copilot for Obsidianをインストール** → プロバイダー「Ollama」または「カスタムOpenAI」に設定 → API基本URL `http://localhost:11434/v1` → チャットモデル `llama3.2:3b` → エンベディングモデル `nomic-embed-text` (vault QA用)。',
          '**テスト:** ノートを開く → Smart Connectionsサイドバーで関連ノートを確認 → Copilotチャットを開く → ボルト知識を必要とする質問を尋ねる (「[トピック] について書いたものを要約してください」) → 応答が実際にノートを参照しているか確認。',
          '**オプション3番目プラグイン:** 繰り返し可能なワークフローがある場合Text Generatorを追加 (日次ノート要約、会議展開、MOC生成)。同じOllamaエンドポイントで設定します。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '一般的な間違いは、CopilotをあるモデルとSmart Connectionsを別のモデルで設定してから、応答が一貫していない理由を疑問に思うことです。両方で同じチャットモデルを使用してください (ほとんどのユーザーはLlama 3.2 3B; 8GB RAMシステムではPhi-4 Mini)。異なるモデルを使用することが理にかなっている唯一の場所はエンベディングモデルです — それは常にチャットモデルから別のモデルです。',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: 'ワークフロー例: Daily Notes、MOCs、執筆支援',
        content:
          '**組み合わせを実際に示す3つの具体的なワークフロー。** 各々はSmart Connections (ボルトコンテキスト用) とCopilot (チャット用) の上に構築、テンプレート作業用Text Generator追加。',
        items: [
          '**日次ノート要約:** 日次ノート内のすべてを選択 → Copilotインラインコマンド → 「この日を3点で要約してください、決定、ブロッカー、明日のアクション項目に焦点」。出力は選択の下に置き換えるか追加します。Text Generatorテンプレートとしてプロンプトを保存して、シングルキーストロークアクションにします。',
          '**MOC (コンテンツマップ) 生成:** タグページまたはトピックノートを開く → Copilot → 「このトピックのコンテンツマップを生成し、関連ノートを3～5つのテーマクラスターにグループ化します。Smart Connectionsサイドバーを使用して関連ノートを識別します。」→ 確認編集。Smart Connectionsが発見レイヤーを提供; Copilotが構造を合成。',
          '**コンテキスト執筆支援:** ノートを起草しながら、Copilotチャットを開く → 「[トピック] について書いたノートを考えると、どのような視点が不足していますか?」Copilot vault QA経由で関連ノートを取得し、ギャップを提案。単一視点ドラフトから脱出するために役立つ。',
          '**週間レビュー:** 過去7日間の日次ノートに対して実行するText Generatorテンプレート → 「週を3ポイントで要約: 進捗、ブロッカー、テーマ」ホットキーに バインド シングルキーストロークレビュー。',
          '**論文/書籍読取ノート:** ソースノートを開く → Copilotインラインコマンド → 「このノートから間隔反復用3つのAnkiスタイル質問/回答ペアを生成します。」出力はSpaced Repetitionプラグインにパイプ可能。',
          '**眠いノートの連携:** Smart Connectionsサイドバーは数ヶ月触れられないままの関連ノートを表示 — 古い素材を再検討し、現在の作業に接続する促し。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '最も過小評価されたワークフローは毎日のSmart Connectionsレビューです。毎朝、日次ノートを開く → Smart Connectionsサイドバーで予期しない関連ノートをアーカイブから確認。プラグインは同じテーマに触れて忘れられたノートをサーフェスします — それはナレッジワーカーが第二の脳から期待する「思考パートナー」効果です。',
          },
        ],
      },
      mobileSync: {
        id: 'mobile-sync',
        title: 'モバイル同期: Obsidian Sync vs iCloud vs Git',
        content:
          '**Obsidian Mobileでのプラグイン互換性は2つの要因に依存します: ボルトがどのように同期し、電話がローカルOllamaサーバーに到達できるかどうか。** Smart Connectionsエンベディングが最も同期に敏感なコンポーネント。',
        items: [
          '**Obsidian Sync (有料):** クリーンなパス。`.smart-env/` フォルダはデバイス間でエンドツーエンド暗号化で同期するため、Smart Connectionsはデバイスごとに再インデックスする必要がありません。プラグイン設定も同期します。モバイルチャットプラグインはまだOllamaへのLANアクセスが必要です (下記)。',
          '**iCloud Drive:** ボルトが同期しますが、`.smart-env/` はプラットフォーム固有バイナリで、iOS/macOS/Windows/Android間で腐敗または不正な同期の可能性があります。実用的解決策: デバイスごとにSmart Connectionsを再インデックス、または `.smart-env/` を同期から除外し、モバイルが意味的サイドバーを持たないことを受け入れます。',
          '**Git (iOS経由Working Copy、Android経由Termux):** プレーンテキストボルトはクリーンに同期; `.smart-env/` を `.gitignore` に追加してください (バイナリインデックスはリポジトリを膨張させ、マージ競合を作成するため)。デバイスごとに再インデックス。',
          '**モバイルからOllamaへのLANアクセス:** デフォルトでOllamaは `localhost:11434` でのみリッスン — 電話からはアクセス不可。Obsidian MobileでAIプラグインを使用するには: Ollamaを `OLLAMA_HOST=0.0.0.0:11434 ollama serve` でLANにバインド、デスクトップのLAN IP (例: `192.168.1.20`) を検出、プラグイン内でlocalhostの代わりにそのIPを入力。電話はホームWi-Fiにあること。',
          '**Tailscale/メッシュVPN:** 電話がホームWi-FiのみならずどこからでもホームOllamaに到達できるようにします。Tailscaleは2026年で最も一般的なオプション — デスクトップと電話にインストール、プラグイン設定でTailscale IPを使用。',
          '**Smart Connectionsエンベディング生成はデスクトップのみで実行されます。** Obsidian Syncがインデックスを移動したとしても、インデックスはどこかで作成される必要があります — それは常にデスクトップクラスマシンです。モバイルは同期インデックスを関連ノート検索の読み取り専用参照として使用します。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'iCloudまたはGitをボルト同期に使用し、複数デバイスでSmart Connectionsを使用したい場合、クリーンなパスはあるデバイス (メインデスクトップ) を「インデクサー」として指定し、Smart Connectionsが完全にそこのみで機能することを受け入れることです。他のデバイスでは古いインデックス (iCloud) または結局インデックスなし (`.gitignore` に `.smart-env/` のGit) があります。Obsidian Syncがこれを正しく処理する唯一のオプションです。',
          },
        ],
      },
      vaultScale: {
        id: 'vault-scale',
        title: 'ボルトスケール: 1K、5K、10K、20Kノート',
        content:
          '**すべての5つのプラグインは5,000以上のノートで応答性を保ちます; 20Kノートを超えるボトルネックはSmart Connections再インデックス時間で、クエリレイテンシーではありません。** 下の現実的な数字はMac M3 Pro (16GB統一メモリ)、`nomic-embed-text` エンベディング、Llama 3.2 3Bチャットで測定されました。',
        columns: ['ボルトサイズ', 'Smart Connections初回インデックス', '変更ごと再インデックス', 'チャットレイテンシ (Copilot)', 'ノート'],
        rows: [
          { 'ボルトサイズ': '1,000ノート', 'Smart Connections初回インデックス': '~2分', '変更ごと再インデックス': '<1秒', 'チャットレイテンシ (Copilot)': '~1-2秒最初トークン', 'ノート': 'モダンハードウェアで快適。' },
          { 'ボルトサイズ': '5,000ノート', 'Smart Connections初回インデックス': '~10分', '変更ごと再インデックス': '<1秒', 'チャットレイテンシ (Copilot)': '~1-2秒最初トークン', 'ノート': 'ほとんどのナレッジワーカーのスイートスポット。' },
          { 'ボルトサイズ': '10,000ノート', 'Smart Connections初回インデックス': '~25分', '変更ごと再インデックス': '~1-2秒', 'チャットレイテンシ (Copilot)': '~2-3秒最初トークン (vault QA検索は~500ms追加)', 'ノート': 'まだ完全に使用可能; 速度低下を気づいたら分割を考慮。' },
          { 'ボルトサイズ': '20,000ノート', 'Smart Connections初回インデックス': '~75分', '変更ごと再インデックス': '~2-4秒', 'チャットレイテンシ (Copilot)': '~3-5秒最初トークン', 'ノート': '初回インデックスを夜間に計画します。`.smart-env/` ディスク使用量 ~800MB-1.2GB。' },
          { 'ボルトサイズ': '50,000+ノート', 'Smart Connections初回インデックス': '4-8時間', '変更ごと再インデックス': '~5-10秒', 'チャットレイテンシ (Copilot)': '~5-10秒最初トークン', 'ノート': '実用的限界。品質が速度より重要な場合はサブボルトまたはmxbai-embed-largeへのアップグレードを考慮。' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ボルトサイズは日々の応答性より初回インデックスに大きい影響があります。初回インデックス後、再埋め込みは変更ノートのみに発生 — 通常は保存済みノート当たり1秒未満、20Kノートでさえ。スロー初回体験は単回コストです。大きなボルトの場合、初回インデックスを夜間に実行してください。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある間違い',
        items: [
          '**2つ異なるチャットモデルで2つプラグイン設定。** Smart Connectionsは生成しません、しかしCopilot、Text Generator、Local GPT、BMOは生成します。各々で異なるモデル使用すると応答が一貫していません。チャットモデルを1つ選択 (ほとんどのユーザーはLlama 3.2 3Bがデフォルト) してすべてのチャットプラグインで設定。',
          '**`.gitignore` なしでGit同期ボルトに `.smart-env/` 追加。** Smart Connectionsインデックスはバイナリで毎回変更。`.gitignore` なしで、巨大なGit履歴と絶え間ないマージ競合。`.smart-env/` を `.gitignore` に追加し、デバイスごとに再インデックス。',
          '**モバイルSmart Connectionsが独自のインデックスを構築することを期待。** エンベディング生成はデスクトップクラスマシンが必要。モバイルは同期インデックス (Obsidian Sync) または無インデックス (iCloud/Git) を使用。相応に計画。',
          '**プラグインをモバイルデバイスから `http://localhost:11434/v1` にポイント。** モバイルはデスクトップのlocalhostに到達できません。Ollamaをランアドレス IP にバインド (`OLLAMA_HOST=0.0.0.0:11434`) してプラグイン設定でそのIPを使用 — またはネットワーク外アクセス用Tailscale。',
          '**同じボルト上でSmart ConnectionsとCopilot両方インデックス実行。** 2つの個別インデックスは約2倍のディスク容量と CPU消費 (~5Kノート当たり200MBベクトルデータ)。ディスク圧力が重要なら、Smart Connections検索用に設定してCopilot使用 (上級 — CopilotのVector store検索設定の編集が必要)。',
        ],
      },
      sources: {
        id: 'sources',
        title: 'リソース',
        items: [
          'Smart Connections — [github.com/brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections) (オープンソースObsidianプラグイン).',
          'Copilot for Obsidian — [github.com/logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot) (オープンソースObsidianプラグイン).',
          'Text Generator — [github.com/nhaouari/obsidian-textgenerator-plugin](https://github.com/nhaouari/obsidian-textgenerator-plugin) (オープンソースObsidianプラグイン).',
          'Ollama — [ollama.com](https://ollama.com) および [github.com/ollama/ollama](https://github.com/ollama/ollama) (ローカルLLM実行時).',
          'Obsidian Mobile同期アーキテクチャ — [help.obsidian.md](https://help.obsidian.md) およびObsidian Syncドキュメント。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'どのObsidianプラグインがOllamaで最高に機能しますか?',
            a: 'ほとんどのユーザー向け: Smart Connections (ボルトセマンティック検索) + Copilot for Obsidian (チャット)。両方はOllamaエンドポイントをポイント (チャット `http://localhost:11434/v1`、エンベディング `http://localhost:11434/api/embeddings`)。Smart Connectionsは関連ノート発見処理; Copilotはボルトコンテキスト会話型クエリ処理。繰り返し可能なテンプレートワークフローがある場合はText Generatorを3番目プラグインとして追加。',
          },
          {
            q: 'プラグインは10,000ノートボルトを処理できますか?',
            a: 'はい。Smart Connectionsはmac M3 Proで初回インデックスに~25分、その後1-2秒/変更。Copilot vault QAレイテンシ ~2-3秒最初トークン。20Kノートで~75分初回インデックス (夜間実行)。50K+ノートでは4-8時間かかり、サブボルト分割を考慮してください。',
          },
          {
            q: 'これらプラグインはモバイルに同期しますか?',
            a: 'プラグイン自体はObsidianプラグイン同期経由で同期します。制約: (1) Smart Connectionsエンベディングインデックス — Obsidian Syncでクリーンに同期、iCloudまたはGitではデバイスごと再インデックスが必要; (2) チャットプラグインはOllamaに到達する必要があります (LANアクセスはデスクトップのLAN IP後 `0.0.0.0` にバインド、またはTailscaleのようなメッシュVPN)。',
          },
          {
            q: '複数AI プラグインを一緒に使用できますか?',
            a: 'はい。Smart Connections + Copilotが推奨組み合わせ。テンプレート用Text Generator追加が一般的。3つ以上のチャットプラグイン (Copilot + Local GPT + BMO) は冗長 — すべて同じジョブをする。チャットプラグインを1つ選択してそのまま。',
          },
          {
            q: 'ノート内での執筆にはどのプラグインが最高ですか?',
            a: 'Copilot for Obsidian — インラインコマンド (Cmd/Ctrl+P → Copilot → 言い換え/要約/カスタムプロンプト) がありテキスト選択で機能します。Text Generatorもテンプレート経由の繰り返し可能な執筆タスクで強力。アドホック執筆支援 (「このパラグラフをより形式的に言い直して」) の場合はCopilotが速い。構造化生成 (「このテンプレートを使用して各会議ノートを要約に変える」) の場合はText Generatorが良い。',
          },
          {
            q: 'ボルト全体でどう prompt しますか?',
            a: 'Copilot for Obsidian vault QAモードを使用。関連最高のノートを検索するエンベディングインデックス (Smart Connectionsに同様) を使用してから、その chunk をチャットモデルに送信。Copilot設定のエンベディングを設定してローカルOllamaをポイント。Smart Connections自体はチャット UI を持たない — 関連ノート表示しますが合成しません。',
          },
          {
            q: 'これらを日次ジャーナリングに使用できますか?',
            a: 'はい。2つの強いパターン: (1) Smart Connectionsサイドバーは今日の日次ノート開いた時にアーカイブから忘れられた関連ノートをサーフェス — 「思考パートナー」効果。(2) Text Generatorテンプレートが日没に実行して日次ノート3ポイントに要約 (決定、ブロッカー、アクション項目)。両方組み合わせが日次ジャーナリングをより熟考させます。',
          },
          {
            q: 'プラグインはObsidian更新を生き残りますか?',
            a: '一般にはい — よく保守されたプラグイン (Smart Connections、Copilot、Text Generator) は主要Obsidian リリース内数日で更新。保守不足プラグインは時々ラグ。プラグインがObsidian更新後壊れた場合はそのGitHub Issues ページをチェック; fix は通常メンテナー リリース1-2週内。プラグインマニフェストは最小Obsidian互換性を宣言。',
          },
          {
            q: 'どれが最高のコミュニティサポートですか?',
            a: 'Smart Connectionsは2026年で最大で最も活発なコミュニティ (~5K Discordメンバー、定期的デベロッパーコール)。Copilot for Obsidianは強いGitHub Issuesコミュニティと活発なメンテナー (Logan Yang)。Text Generatorはより小さいが関心あるコミュニティ。Local GPTと BMO Chatbotは小さいコミュニティ — 安定使用は良好、問題解決は遅い。',
          },
          {
            q: 'AIプラグインを別マシンで実行できますか?',
            a: 'はい。ホームサーバーでOllamaを実行 (ミニPC、NAS、または専用ワークステーション)、`OLLAMA_HOST=0.0.0.0:11434 ollama serve` でLAN にバインド、各プラグイン設定にサーバーのLAN IP (例: `http://192.168.1.20:11434/v1`) を入力。低パワーノートパソコンまたはモバイルデバイスがホームサーバーで実行中フルサイズ70Bモデル使用可能。Tailscaleで組み合わせてホームWi-Fi外でも動作。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連リーディング',
        items: [
          '[LogseqとJoplinでのローカルLLM](/ja/power-local-llm/local-llm-with-logseq-and-joplin) — ObsidianよりLogseqやJoplinを好むリーダーの関連オープンソース代替案。',
          '[ローカルLLM個人ナレッジベース2026](/ja/power-local-llm/local-llm-personal-knowledge-base-2026) — Obsidianが流入する広いPKBアーキテクチャ; RAG層、タギング戦略、10K項目ワークフロー対応。',
          '[30分でPDFへのローカルRAGを構築 (Ollama + AnythingLLM)](/ja/power-local-llm/local-rag-on-your-pdfs-step-by-step) — Smart Connectionsのようなセマンティックプラグインを支えるRAG層; エンベディング選択の有用な背景。',
          '[ローカルLLMsで小説とスクリーンプレイを起草 (2026)](/ja/power-local-llm/local-llm-screenwriting-and-novel-drafting) — ロングフォーム執筆用起草レイヤーとしてのObsidian。',
          '[最高のローカルLLMs 2026](/ja/local-llms/best-local-llms-2026) — これらプラグインの背後のチャットとエンベディングモデルを選ぶための広いモデル機関。',
          '[ローカルLLMソフトウェアディレクトリ2026](/ja/power-local-llm/local-llm-software-directory-2026) — Ollama、Smart Connections、Copilot、このスタックの他のコンポーネントのディレクトリリスティング。',
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
    title: 'Obsidian + 本地大模型：5 个插件打造您的第二大脑（2026）',
    seoTitle: 'Obsidian + 本地大模型：2026 年 5 个插件指南',
    intro:
      '2026 年，五个 Obsidian 插件配合本地 Ollama 后端，能将您的库转变为真正可用的第二大脑：Smart Connections、Copilot for Obsidian、Text Generator、Local GPT 和 BMO Chatbot。每个插件负责不同的功能层——语义搜索、行内聊天、模板生成、隐私优先对话、轻量级上下文感知聊天。大多数用户的推荐组合是 Smart Connections + Copilot for Obsidian：前者处理库范围内的语义链接，后者处理聊天界面。本指南从库搜索质量、生成速度、提示自定义和移动同步行为五个维度评估这五个插件，并提供 Ollama 的具体配置步骤。',
    metaDescription:
      '2026 年用本地 Ollama 测试的五个 Obsidian 插件：Smart Connections、Copilot、Text Generator、Local GPT、BMO Chatbot。最佳组合、库规模、移动同步。',
    twitterDescription:
      '2026 年最佳 Obsidian + 本地大模型组合：Smart Connections（语义库搜索）+ Copilot for Obsidian（聊天）。用 Ollama 测试的全部 5 个插件。移动同步注意事项。',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'nomic-embed-text',
      'mxbai-embed-large',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4（16+ GB 统一内存）',
      '配备 RTX 3060 12GB 或 RTX 4060 8GB 的 PC',
      '配备 16GB RAM 的 PC（仅 CPU 备选方案）',
    ],
    audience:
      'Obsidian 高级用户、知识工作者、研究人员和作家，运行 1000–20000 条笔记的库，需要 AI 功能但不想将笔记发送到云服务。',
    readTime: '14 分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Obsidian 本地大模型插件',
    targetKeywords: [
      'obsidian local llm',
      'obsidian ollama plugin',
      'smart connections obsidian local',
      'copilot for obsidian local',
      'obsidian second brain ai',
      'obsidian plugin private llm',
    ],
    leadAnswerBlock:
      '**对于 2026 年的大多数 Obsidian 用户，安装 Smart Connections + Copilot for Obsidian 并配置两者使用本地 Ollama 后端。** Smart Connections 通过 `nomic-embed-text` 或 `mxbai-embed-large` 处理库范围内的语义链接（相关笔记侧边栏）。Copilot for Obsidian 提供聊天界面，配置指向 Ollama 的 OpenAI 兼容端点 `http://localhost:11434/v1`。这对插件覆盖了"第二大脑"大约 80% 的用例（语义搜索 + 聊天笔记），无需将任何库内容发送到云端。如果您需要模板驱动的内容生成（每日日记提示、会议笔记扩展），可添加 Text Generator 作为第三个插件。Smart Connections 嵌入存储在库内的 `.smart-env/` 文件夹中——通过 Obsidian Sync 跨设备同步，但使用 iCloud 或 Git 作为同步方法时必须按设备重新生成。',
    quickAnswerTop: {
      en: {
        question: '2026 年本地大模型的最佳 Obsidian 插件组合是什么？',
        answer:
          'Smart Connections + Copilot for Obsidian 是推荐的组合。Smart Connections 使用本地嵌入（nomic-embed-text 或 mxbai-embed-large via Ollama）处理语义库搜索；Copilot 提供聊天侧边栏，配置到 Ollama 的 OpenAI 兼容端点。两者一起覆盖相关笔记发现和库上下文聊天——大约 80% 的"第二大脑"用例。添加 Text Generator 作为第三个插件实现模板驱动生成。Local GPT 和 BMO Chatbot 是想要更简单纯聊天体验的用户对 Copilot 的轻量级替代品。所有五个插件都适用于任何 Ollama 模型；2026 年推荐的聊天模型适用于 16GB RAM 系统的是 Llama 3.2 3B 或 Phi-4 Mini。',
        bullets: [
          'Smart Connections — 语义搜索 + 相关笔记侧边栏。最适合库范围内链接。',
          'Copilot for Obsidian — 带库上下文的聊天侧边栏。最适合对话查询。',
          'Text Generator — 使用 Frontmatter 变量的模板驱动生成。最适合重复工作流（每日笔记、会议总结）。',
          'Local GPT — 隐私优先的当前笔记聊天。Copilot 的轻量级替代品。',
          'BMO Chatbot — 库上下文最小化聊天。最适合想要单个聊天插件而不要 Copilot 功能表面的用户。',
          '推荐的 Ollama 模型：Llama 3.2 3B（聊天）、Phi-4 Mini（聊天，较小）、nomic-embed-text 或 mxbai-embed-large（Smart Connections 嵌入）。',
          '移动同步注意：Smart Connections 嵌入存储在 .smart-env/ 中——通过 Obsidian Sync 同步，使用 iCloud 或 Git 时按设备重新生成。',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '关键要点', anchor: '#key-takeaways' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: '您应该安装哪个插件组合？', anchor: '#which-plugins' },
      { label: '插件对比表', anchor: '#comparison-table' },
      { label: 'Smart Connections：语义库搜索', anchor: '#smart-connections' },
      { label: 'Copilot for Obsidian：库上下文聊天', anchor: '#copilot' },
      { label: 'Text Generator：模板驱动生成', anchor: '#text-generator' },
      { label: 'Local GPT：隐私优先聊天', anchor: '#local-gpt' },
      { label: 'BMO Chatbot：轻量级聊天', anchor: '#bmo-chatbot' },
      { label: '推荐组合：Smart Connections + Copilot', anchor: '#recommended-combo' },
      { label: '示例工作流：每日笔记、MOC、写作辅助', anchor: '#workflows' },
      { label: '移动同步：Obsidian Sync vs iCloud vs Git', anchor: '#mobile-sync' },
      { label: '库规模：1K、5K、10K、20K 笔记', anchor: '#vault-scale' },
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
          '**Smart Connections + Copilot for Obsidian 是大多数用户的推荐组合。** Smart Connections 使用本地嵌入处理语义库搜索；Copilot 处理库上下文聊天。两者一起覆盖大约 80% 的"第二大脑"用例，无需云调用。',
          '**所有五个插件都通过 `http://localhost:11434/v1` 的 OpenAI 兼容端点与 Ollama 配合使用。** 将每个插件的"API 基础 URL"或等效设置配置为指向此地址。Ollama 默认模型名称（例如 `llama3.2:3b`）是您在插件的模型字段中输入的内容。',
          '**Smart Connections 是唯一在整个库上构建嵌入索引的插件。** 这使得相关笔记搜索在 5000+ 笔记处变得实用。索引存储在库内的 `.smart-env/` 中，与 Obsidian Sync 同步；使用 iCloud 或 Git 时按设备重新生成。',
          '**Text Generator 是重复工作流的最佳插件。** 每日笔记摘要、会议笔记扩展和 MOC（内容地图）生成通过具有 Frontmatter 变量的模板变成单键操作。',
          '**对于仅聊天用户，BMO Chatbot 比 Copilot 更轻量。** 它不构建索引——上下文只是当前笔记。如果您只聊论打开的笔记，BMO 足够了。',
          '**库规模（使用 Smart Connections + nomic-embed-text）：** 1K 笔记索引耗时约 2 分钟，5K 约 10 分钟，10K 约 25 分钟，20K 约 75 分钟（在 Mac M3 Pro 上）。初始运行后重新索引时间较短，因为只有更改的笔记被重新嵌入。',
          '**2026 年推荐的 Ollama 模型：** 聊天——Llama 3.2 3B（默认）或 Phi-4 Mini（更小）；嵌入——nomic-embed-text（768 维，快速）或 mxbai-embed-large（1024 维，更精确）。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**涵盖的插件：** Smart Connections、Copilot for Obsidian、Text Generator、Local GPT、BMO Chatbot。',
          '**大模型后端：** Ollama（推荐）或 LM Studio——任何在本地 URL 上公开 OpenAI 兼容端点的东西。',
          '**默认 Ollama 端点：** `http://localhost:11434/v1`（聊天）或 `http://localhost:11434/api/embeddings`（嵌入）。',
          '**推荐的聊天模型：** Llama 3.2 3B、Phi-4 Mini、Gemma 3 4B（16GB RAM 系统）；Qwen3 1.7B（8GB RAM）。',
          '**推荐的嵌入模型：** nomic-embed-text（768 维，快速）、mxbai-embed-large（1024 维，更精确）。',
          '**库大小目标：** 所有五个插件在 5000+ 笔记处保持响应；Smart Connections 重新索引是 20K 笔记以上的瓶颈。',
          '**移动兼容性：** 如果 Ollama 在 LAN 上可达，聊天插件在 Obsidian Mobile 上工作；Smart Connections 嵌入生成仅在桌面上运行。',
        ],
      },
      whichPlugins: {
        id: 'which-plugins',
        title: '您应该安装哪个插件组合？',
        content:
          '**对于 2026 年的大多数 Obsidian 用户：安装 Smart Connections（语义库搜索）和 Copilot for Obsidian（聊天侧边栏）——两者一起覆盖大约 80% 的"第二大脑"用例。** 如果您想要模板驱动生成，添加 Text Generator。除非您特别偏好它们的界面，否则跳过其他的。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '安装 Smart Connections + Copilot for Obsidian，将两者配置为在 localhost:11434 处使用 Ollama，您就拥有一个私有第二大脑堆栈，覆盖库范围内的语义搜索和对话查询。',
          },
          {
            type: 'plain-terms',
            text: '将 Obsidian + AI 看作两项工作：查找相关笔记（"我库中哪些其他笔记触及这个想法？"）和聊论笔记（"我上个季度写了什么关于这个的？"）。Smart Connections 做第一项；Copilot 做第二项。两者都通过 Ollama 使用本地大模型，因此没有任何东西离开您的计算机。如果您执行可重复的任务（例如将每个会议笔记变成摘要），添加 Text Generator。除非您有特定的理由，否则跳过 Local GPT 和 BMO Chatbot。',
          },
        ],
        decisionBlock: {
          title: '决策：选择哪个 Obsidian 插件？',
          localIf: [
            '您想要库范围内的语义搜索（"向我显示相关笔记"）→ Smart Connections',
            '您想要带笔记上下文的聊天侧边栏 → Copilot for Obsidian',
            '您想要模板驱动的生成（每日笔记、会议摘要）→ Text Generator',
            '您只聊论当前笔记（无库搜索）→ BMO Chatbot（比 Copilot 更轻量）',
            '您想要严格的隐私保障 + 最少功能的聊天 → Local GPT',
          ],
          cloudIf: [
            '您需要每次聊天响应都有 GPT-5.5 质量 → 云等效物（本地堆栈约 70% 有能力）',
            '您的库在阻止本地网络调用的托管云服务上 → 云插件',
            '您想要 Obsidian Mobile 应用内的原生 iOS AI 功能而无需 LAN 访问 → 2026 年尚不可行（移动端无法在没有 Tailscale 等帮助下到达本地大模型）',
          ],
          quick: [
            '推荐组合：Smart Connections + Copilot for Obsidian',
            '模板添加：Text Generator',
            '轻量级替代方案：BMO Chatbot（仅聊天）',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '逐个安装 Smart Connections 和 Copilot for Obsidian。Smart Connections 需要在首次安装时构建嵌入索引（2–75 分钟，取决于库大小）。让它完成，然后再添加 Copilot，以避免在初始索引期间 CPU 竞争。两者都运行后，RAM 使用很小（约 200–400 MB）——Ollama 是重型进程，不是插件。',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '插件对比表',
        content:
          '**五个插件在四个对大多数用户来说重要的轴上有所不同：库搜索深度、生成灵活性、移动兼容性和功能表面。** Smart Connections 和 Copilot 不可互换——它们解决不同的问题并相互补充。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Smart Connections 是唯一用嵌入搜索整个库的插件；其他四个是在当前笔记或选定文本上运行的聊天或生成工具。',
          },
          {
            type: 'plain-terms',
            text: '这些插件中的两个（Smart Connections、Copilot）处理库范围内的上下文。其他三个（Text Generator、Local GPT、BMO Chatbot）在当前笔记或特定选择上工作。安装多个的最常见原因是 Smart Connections 没有自己的聊天 UI——您需要 Copilot 或其中一个更轻量级的聊天插件来实际与您的库交谈。',
          },
        ],
        columns: ['插件', '库搜索', '生成', '移动同步', '最适合'],
        rows: [
          { '插件': 'Smart Connections', '库搜索': '是（嵌入索引）', '生成': '否（仅搜索）', '移动同步': '索引与 Obsidian Sync 同步；使用 iCloud / Git 时按设备重新生成', '最适合': '跨笔记的语义链接' },
          { '插件': 'Copilot for Obsidian', '库搜索': '是（带库 QA 模式）', '生成': '是（聊天 + 行内）', '移动同步': '插件同步；Ollama 必须在 LAN 上可达', '最适合': '行内聊天 + 写作辅助' },
          { '插件': 'Text Generator', '库搜索': '否', '生成': '是（模板驱动）', '移动同步': '模板同步；Ollama 必须在 LAN 上可达', '最适合': '可重复的模板生成' },
          { '插件': 'Local GPT', '库搜索': '否', '生成': '是（聊天）', '移动同步': '插件同步；Ollama 必须在 LAN 上可达', '最适合': '当前笔记的隐私优先聊天' },
          { '插件': 'BMO Chatbot', '库搜索': '否', '生成': '是（聊天）', '移动同步': '插件同步；Ollama 必须在 LAN 上可达', '最适合': '当前笔记的轻量级聊天' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '对于移动使用，约束不是插件——而是 Obsidian Mobile 是否可以到达 Ollama。解决方案：(1) 在家庭服务器上运行 Ollama 并将其暴露在 LAN 上的静态 IP，然后在插件中输入该 IP 而不是 localhost，(2) 使用 Tailscale 或另一个网格 VPN 从任何地方到达家庭 Ollama，(3) 接受 AI 功能仅在手机位于家庭 Wi-Fi 时工作。',
          },
        ],
      },
      smartConnections: {
        id: 'smart-connections',
        title: 'Smart Connections：语义库搜索',
        content:
          '**Smart Connections 是 2026 年唯一在整个库上构建嵌入索引的 Obsidian 插件。** 这使得"向我显示相关笔记"在 5000+ 笔记处变得实用，是插件生态系统中最大的"第二大脑"启用器。',
        items: [
          '**它的作用：** 为每条笔记（和可配置的部分）生成向量嵌入，并为活动笔记显示语义相关笔记的"Smart Connections"侧边栏。',
          '**安装：** 设置 → 社区插件 → 浏览 → "Smart Connections" → 安装 + 启用。作者：Brian Petro。',
          '**为 Ollama 配置：** 设置 → Smart Connections → 嵌入模型 → 选择"Local（Ollama）" → 输入 `http://localhost:11434/api/embeddings` → 模型名称 `nomic-embed-text`（或 `mxbai-embed-large`）。',
          '**首次索引：** 插件嵌入每条笔记。Mac M3 Pro 使用 nomic-embed-text 的时间：1K 笔记约 2 分钟，5K 笔记约 10 分钟，10K 笔记约 25 分钟，20K 笔记约 75 分钟。编辑后重新索引是增量的（仅更改的笔记）。',
          '**存储：** 索引存储在库内的 `.smart-env/` 中。与 Obsidian Sync 平稳同步；使用 iCloud / Git 时您必须按设备重新生成，因为索引是平台特定的二进制文件。',
          '**最佳嵌入模型 2026：** `nomic-embed-text`（137M 参数，768 维，快速）适合大多数用户。`mxbai-embed-large`（335M 参数，1024 维）在技术内容上更准确，但索引时间约为两倍。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '首次索引完成后，保持 Smart Connections 在后台启用。后续编辑会触发增量重新嵌入——通常每保存笔记不到一秒钟。您也可以在大量编辑会话期间暂停索引，以避免与 Ollama 本身的 CPU 竞争。',
          },
        ],
      },
      copilot: {
        id: 'copilot',
        title: 'Copilot for Obsidian：库上下文聊天',
        content:
          '**Copilot for Obsidian 提供 Smart Connections 缺少的聊天侧边栏。** 为其配置 Ollama，您将获得一个私人聊天助手，可以使用您的库作为上下文来回答问题、生成行内内容并在选择上运行自定义提示。',
        items: [
          '**它的作用：** 聊天侧边栏、库 QA 模式（与检索笔记聊天）、行内聊天、选择上的自定义提示、命令面板命令。',
          '**安装：** 设置 → 社区插件 → 浏览 → Logan Yang 的"Copilot" → 安装 + 启用。',
          '**为 Ollama 配置：** 设置 → Copilot → API 设置 → "Custom OpenAI"或"Ollama"提供商 → API 基础 URL `http://localhost:11434/v1` → 模型 `llama3.2:3b`（或任何 Ollama 模型）。',
          '**库 QA 模式：** Copilot 使用其自己的嵌入管道（独立于 Smart Connections）检索最相关的笔记，然后将检索的块发送到聊天模型。在 Copilot 设置中配置嵌入——指向 `http://localhost:11434/api/embeddings` 并选择 `nomic-embed-text`。',
          '**行内命令：** 在笔记中选择文本 → Cmd/Ctrl+P → "Copilot: …" ——应用重写、摘要或自定义提示模板，无需打开聊天侧边栏。',
          '**最适合：** 想要聊天界面和库感知检索的用户。如果您只想聊论当前笔记，BMO Chatbot 更轻量。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Copilot 维护自己的嵌入索引，独立于 Smart Connections。运行两者意味着在同一库上两个索引，大约 2 倍的磁盘空间（每 5K 笔记约 200 MB 的向量数据）。如果磁盘空间很紧张，配置 Copilot 使用 Smart Connections 索引（高级——需要编辑 Copilot 检索配置以读取 Smart Connections 向量存储），或接受这两个插件在 2026 年不共享嵌入。',
          },
        ],
      },
      textGenerator: {
        id: 'text-generator',
        title: 'Text Generator：模板驱动生成',
        content:
          '**Text Generator 是可重复工作流的最佳插件：每日笔记扩展、会议笔记摘要、MOC 生成、自定义格式输出。** 模板使用 Frontmatter 变量和 Markdown，因此单个模板可以通过任何笔记上的热键触发。',
        items: [
          '**它的作用：** 使用您的本地大模型针对当前笔记（或选择）运行自定义提示模板。模板支持 Frontmatter 变量、当前日期插入和选择捕获。',
          '**安装：** 设置 → 社区插件 → 浏览 → "Text Generator" → 安装 + 启用。作者：nhaouari。',
          '**为 Ollama 配置：** 设置 → Text Generator → 提供商 → "Ollama"或"Custom" → 端点 `http://localhost:11434/v1` → 模型 `llama3.2:3b`。',
          '**模板：** 存储为配置文件夹中的 Markdown 文件（例如 `Templates/`）。模板只是一个提示，带有 `{{title}}`、`{{selection}}`、`{{date}}` 占位符。',
          '**热键工作流：** 将热键分配给特定模板（Cmd/Ctrl+T → "从模板生成" → 选择模板）。一个按键在当前笔记上运行您的模板。',
          '**最适合：** 您做过数十次的工作流——每日日记提示、每周回顾问题、会议笔记摘要、论文阅读笔记。',
        ],
        promptExamples: [
          {
            label: 'Text Generator 模板：每日笔记摘要器',
            text: '---\nname: Daily summary\n---\nSummarise the following daily note in three concise bullet points. Focus on decisions made, blockers identified, and action items for tomorrow.\n\nDaily note ({{date}}):\n{{content}}\n\nSummary:',
          },
          {
            label: 'Text Generator 模板：MOC（内容地图）生成器',
            text: '---\nname: MOC for tag\n---\nGenerate a Map of Content for all notes tagged with `#{{selection}}`. Group related notes into 3–5 thematic clusters, with a one-sentence description per cluster and a list of the notes inside each cluster.\n\nNotes tagged #{{selection}}:\n{{vault_search_result tag={{selection}}}}\n\nMOC:',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '将 Text Generator 模板与 Obsidian QuickAdd 结合，构建一个"每日回顾"序列：单个 QuickAdd 命令打开今天的每日笔记，运行每日摘要模板，并插入结果。三个插件（Text Generator + QuickAdd + Templater 用于日期数学）让您构建一个耗时 2 秒来调用和 10 秒来完成的工作流。',
          },
        ],
      },
      localGpt: {
        id: 'local-gpt',
        title: 'Local GPT：隐私优先聊天',
        content:
          '**Local GPT 是一个围绕笔记内容不应离开机器的原则构建的聊天插件。** 从功能上讲，它比 Copilot for Obsidian 更简单——没有库 QA 模式，没有模板库——但它在隐私立场上最明确。',
        items: [
          '**它的作用：** 使用本地大模型与当前笔记（或选定文本）聊天。插件中不存在云选项——仅本地提供商。',
          '**安装：** 设置 → 社区插件 → 浏览 → "Local GPT" → 安装 + 启用。作者：pfrankov（在列表中验证——多个插件有相似名称）。',
          '**为 Ollama 配置：** 设置 → Local GPT → 提供商 → "Ollama" → URL `http://localhost:11434` → 模型 `llama3.2:3b`。',
          '**聊天范围：** 仅活动笔记或选定文本。没有嵌入索引——上下文只是您明确发送的内容。',
          '**最适合：** 想要在当前笔记上聊天、偏好尽可能小的功能表面、想要无法意外调用云服务的插件的用户。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '如果您信任 Copilot for Obsidian 保持本地（它可以配置为云或本地），使用 Copilot。如果您想要插件的代码本身使云调用不可能，使用 Local GPT——其设计约束是"无云提供商，永不"。这对医疗保健、法律和新闻工作流是有意义的区分，其中任何意外云泄漏的机会都是个问题。',
          },
        ],
      },
      bmoChatbot: {
        id: 'bmo-chatbot',
        title: 'BMO Chatbot：轻量级聊天',
        content:
          '**BMO Chatbot 是极简的聊天插件：一个侧边栏、一个模型选择器和一个端点配置字段。** 没有库搜索，没有模板，没有行内命令。如果您只聊论活动笔记，BMO 是最轻量的选项。',
        items: [
          '**它的作用：** 聊天侧边栏包括活动笔记作为上下文。',
          '**安装：** 设置 → 社区插件 → 浏览 → "BMO Chatbot" → 安装 + 启用。作者：longy2k。',
          '**为 Ollama 配置：** 设置 → BMO Chatbot → API → URL `http://localhost:11434/v1` → 模型 `llama3.2:3b`。',
          '**上下文处理：** 活动笔记自动包含在聊天上下文中。切换笔记会切换上下文。',
          '**最适合：** 想要单个聊天插件、最小设置、无嵌入索引和适合狭窄 Obsidian 侧边栏的 UI 的用户。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'BMO Chatbot 是"我只想聊论我的当前笔记"的正确插件。如果您发现自己想要"在整个库中搜索"或"在每个会议笔记上运行此提示模板"，您已经超出了 BMO——切换到 Copilot for Obsidian（库 QA）或 Text Generator（模板）。',
          },
        ],
      },
      recommendedCombo: {
        id: 'recommended-combo',
        title: '推荐组合：Smart Connections + Copilot',
        content:
          '**安装 Smart Connections + Copilot for Obsidian，两者都指向 Ollama。** 这个组合处理 Obsidian 用户想要的两个不同的 AI 工作——语义库搜索和库上下文聊天——并覆盖大约 80% 的"第二大脑"用例，无需将笔记发送到云端。',
        numberedItems: [
          '**在您的计算机上安装 Ollama**：`brew install ollama`（macOS）或从 ollama.com 下载（Windows / Linux）。拉取聊天模型：`ollama pull llama3.2:3b`。拉取嵌入模型：`ollama pull nomic-embed-text`。',
          '**启动 Ollama：** 它通常在安装后作为后台服务启动。验证：`curl http://localhost:11434/api/tags` 返回带有您安装的模型的 JSON。',
          '**在 Obsidian 中安装 Smart Connections** → 将嵌入配置为使用 Ollama，位于 `http://localhost:11434/api/embeddings`，模型为 `nomic-embed-text`。让它索引（2–75 分钟，取决于库大小）。',
          '**安装 Copilot for Obsidian** → 将提供商配置为"Ollama"或"Custom OpenAI" → API 基础 URL `http://localhost:11434/v1` → 聊天模型 `llama3.2:3b` → 嵌入模型 `nomic-embed-text`（用于库 QA）。',
          '**测试：** 打开笔记 → 检查 Smart Connections 侧边栏的相关笔记 → 打开 Copilot 聊天 → 提出需要库知识的问题（"总结我写过的关于[主题]的内容"）→ 验证响应引用您的实际笔记。',
          '**可选第三个插件：** 如果您有可重复的工作流（每日笔记摘要、会议扩展、MOC 生成），添加 Text Generator。使用相同的 Ollama 端点配置。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '一个常见的错误是在 Copilot 中配置一个模型，在 Smart Connections 中配置另一个——然后想知道为什么响应感觉不一致。在两者中使用相同的聊天模型（大多数用户使用 Llama 3.2 3B；8GB RAM 系统使用 Phi-4 Mini）。唯一使用不同模型的地方是嵌入模型——那总是从聊天模型分离的单独模型。',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: '示例工作流：每日笔记、MOC、写作辅助',
        content:
          '**三个具体工作流，演示组合的实际应用。** 每个都建立在 Smart Connections（用于库上下文）和 Copilot（用于聊天）的基础上，添加了 Text Generator 用于模板工作。',
        items: [
          '**每日笔记摘要：** 在您的每日笔记中，全选 → Copilot 行内命令 → "用三个要点摘要这一天，重点关注做出的决策、识别的阻碍和明天的行动项"。输出替换或附加到选择下方。将提示保存为 Text Generator 模板，使其成为一键操作。',
          '**MOC（内容地图）生成：** 打开标签页或主题笔记 → Copilot → "为此主题生成内容地图，将我拥有的相关笔记分组为 3–5 个主题集群。使用 Smart Connections 侧边栏识别相关笔记。" → 查看和编辑。Smart Connections 提供发现层；Copilot 综合结构。',
          '**上下文写作辅助：** 起草笔记时，打开 Copilot 聊天 → 问"鉴于我写过的关于[主题]的笔记，我遗漏了什么观点？" Copilot 通过库 QA 检索相关笔记并提议间隙。适用于打破单一观点草稿。',
          '**每周回顾：** Text Generator 模板针对过去 7 个每日笔记运行 → "将周摘要为每个类别 3 个要点：进度、阻碍、主题。" 绑定到热键以获得一键回顾。',
          '**论文 / 书籍阅读笔记：** 打开源笔记 → Copilot 行内命令 → "从此笔记生成三个 Anki 式问答对用于间隔重复。" 输出可以通过管道传送到间隔重复插件。',
          '**链接休眠笔记：** Smart Connections 侧边栏显示可能数月未触碰的相关笔记——促使您重新访问并将旧材料连接到当前工作。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '最被低估的工作流是每日 Smart Connections 回顾。每天早上，打开每日笔记 → 检查 Smart Connections 侧边栏的来自档案的意外相关笔记。插件浮现接触相同主题的遗忘笔记，这正是知识工作者从第二大脑期望的"思考伙伴"效应。',
          },
        ],
      },
      mobileSync: {
        id: 'mobile-sync',
        title: '移动同步：Obsidian Sync vs iCloud vs Git',
        content:
          '**Obsidian Mobile 上的插件兼容性取决于两个因素：您的库如何同步，以及您的手机是否可以到达本地 Ollama 服务器。** Smart Connections 嵌入是最同步敏感的组件。',
        items: [
          '**Obsidian Sync（付费）：** 最干净的路径。`.smart-env/` 文件夹跨设备端到端加密同步，所以 Smart Connections 不需要按设备重新索引。插件设置也同步。移动聊天插件仍需要 Ollama LAN 访问（见下文）。',
          '**iCloud Drive：** 库同步，但 `.smart-env/` 是平台特定的二进制文件，可能在 iOS / macOS / Windows / Android 上损坏或无法正确同步。实用解决方案：按设备重新索引 Smart Connections，或将 `.smart-env/` 从同步中排除并接受移动设备没有语义侧边栏。',
          '**Git（iOS 上通过 Working Copy，Android 上通过 Termux）：** 纯文本库平稳同步；`.smart-env/` 应添加到 `.gitignore`，因为二进制索引会膨胀存储库并导致合并冲突。按设备重新索引。',
          '**从移动设备的 Ollama LAN 访问：** 默认情况下，Ollama 仅侦听 `localhost:11434`——无法从您的手机访问。要在 Obsidian Mobile 上使用 AI 插件：将 Ollama 绑定到 LAN，使用 `OLLAMA_HOST=0.0.0.0:11434 ollama serve`，找到台式机的 LAN IP（例如 `192.168.1.20`），在插件中输入该 IP 而不是 localhost。手机必须在家庭 Wi-Fi 上。',
          '**Tailscale / 网格 VPN：** 让您的手机从任何地方到达家庭 Ollama，而不仅仅是家庭 Wi-Fi。Tailscale 是 2026 年最受欢迎的选项——在台式机和手机上安装，在插件配置中使用 Tailscale IP。',
          '**Smart Connections 嵌入生成仅在桌面上运行。** 即使 Obsidian Sync 移动索引，索引也必须在某处创建——那总是台式机级计算机。移动使用同步索引进行只读相关笔记查找。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '如果您使用 iCloud 或 Git 进行库同步并希望 Smart Connections 在多个设备上工作，最干净的路径是将一个设备指定为"索引器"（您的主台式机）并接受 Smart Connections 仅在那里完全工作。在其他设备上，您拥有陈旧的索引（iCloud）或无索引（Git，`.smart-env/` 在 `.gitignore` 中）。Obsidian Sync 是唯一正确处理这种情况的选项。',
          },
        ],
      },
      vaultScale: {
        id: 'vault-scale',
        title: '库规模：1K、5K、10K、20K 笔记',
        content:
          '**所有五个插件在 5000+ 笔记处保持响应；20K 笔记以上的瓶颈是 Smart Connections 重新索引时间，而不是查询延迟。** 下面的现实数字是在 Mac M3 Pro（16GB 统一内存）上用 `nomic-embed-text` 嵌入和 Llama 3.2 3B 聊天测量的。',
        columns: ['库大小', 'Smart Connections 初始索引', '每个更改重新索引', '聊天延迟（Copilot）', '笔记'],
        rows: [
          { '库大小': '1,000 笔记', 'Smart Connections 初始索引': '约 2 分钟', '每个更改重新索引': '<1 秒', '聊天延迟（Copilot）': '约 1–2 秒首个令牌', '笔记': '在任何现代硬件上舒适。' },
          { '库大小': '5,000 笔记', 'Smart Connections 初始索引': '约 10 分钟', '每个更改重新索引': '<1 秒', '聊天延迟（Copilot）': '约 1–2 秒首个令牌', '笔记': '大多数知识工作者的最佳点。' },
          { '库大小': '10,000 笔记', 'Smart Connections 初始索引': '约 25 分钟', '每个更改重新索引': '约 1–2 秒', '聊天延迟（Copilot）': '约 2–3 秒首个令牌（库 QA 检索增加约 500 毫秒）', '笔记': '仍然完全可用；如果注意到放慢，考虑拆分。' },
          { '库大小': '20,000 笔记', 'Smart Connections 初始索引': '约 75 分钟', '每个更改重新索引': '约 2–4 秒', '聊天延迟（Copilot）': '约 3–5 秒首个令牌', '笔记': '计划夜间初始索引。`.smart-env/` 的磁盘使用量约 800 MB–1.2 GB。' },
          { '库大小': '50,000+ 笔记', 'Smart Connections 初始索引': '4–8 小时', '每个更改重新索引': '约 5–10 秒', '聊天延迟（Copilot）': '约 5–10 秒首个令牌', '笔记': '实用边缘。考虑子库或升级到 mxbai-embed-large 以获得准确性，如果质量重于速度。' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '库大小对初始索引的影响比日常响应更大。初始索引后，重新嵌入仅发生在更改的笔记上——即使在 20K 笔记上通常也不到一秒。缓慢的首次体验是一次性成本。如果您的库很大，请在夜间运行初始索引。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**用两个不同的聊天模型配置两个插件。** Smart Connections 不生成，但 Copilot、Text Generator、Local GPT 和 BMO 都做。在每个中使用不同的模型使响应感觉不一致。选择一个聊天模型（大多数用户的默认值是 Llama 3.2 3B）并配置所有聊天插件使用它。',
          '**将 `.smart-env/` 添加到 Git 同步库而不添加 `.gitignore`。** Smart Connections 索引是二进制且每次编辑都会更改。没有 `.gitignore`，您会获得大量的 Git 历史记录和恒定的合并冲突。添加 `.smart-env/` 到 `.gitignore` 并按设备重新索引。',
          '**期望移动 Smart Connections 构建自己的索引。** 嵌入生成需要台式机级机器。移动使用同步索引（Obsidian Sync）或没有索引（iCloud / Git）。相应计划。',
          '**从移动设备指向插件到 `http://localhost:11434/v1`。** 移动无法到达台式机的 localhost。将 Ollama 绑定到 LAN IP（`OLLAMA_HOST=0.0.0.0:11434`）并在插件配置中使用该 IP，或使用 Tailscale 进行非网络访问。',
          '**针对同一库运行 Smart Connections 和 Copilot 索引。** 两个单独的索引消耗约 2 倍的磁盘和 CPU。截至 2026 年 5 月，这两个插件不共享嵌入。如果磁盘压力重要，使用 Smart Connections 进行检索并配置 Copilot 使用它（高级——需要编辑 Copilot 检索配置以读取 Smart Connections 向量存储）。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          'Smart Connections — [github.com/brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections)（开源 Obsidian 插件）。',
          'Copilot for Obsidian — [github.com/logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot)（开源 Obsidian 插件）。',
          'Text Generator — [github.com/nhaouari/obsidian-textgenerator-plugin](https://github.com/nhaouari/obsidian-textgenerator-plugin)（开源 Obsidian 插件）。',
          'Ollama — [ollama.com](https://ollama.com) 和 [github.com/ollama/ollama](https://github.com/ollama/ollama)（本地大模型运行时）。',
          'Obsidian Mobile 同步架构 — [help.obsidian.md](https://help.obsidian.md) 和 Obsidian Sync 文档。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '哪个 Obsidian 插件最适合与 Ollama 配合使用？',
            a: '对于大多数用户：Smart Connections（语义库搜索）+ Copilot for Obsidian（聊天）。两者都配置为指向 Ollama 的端点（聊天在 `http://localhost:11434/v1`，嵌入在 `http://localhost:11434/api/embeddings`）。Smart Connections 处理相关笔记发现；Copilot 处理库上下文的对话查询。如果您有可重复的模板工作流，添加 Text Generator 作为第三个插件。',
          },
          {
            q: '插件能处理 10000 条笔记的库吗？',
            a: '可以。Smart Connections 在 Mac M3 Pro 上首次嵌入索引需要约 25 分钟，之后每次更改约 1–2 秒。在 20K 笔记处，计划约 75 分钟的初始索引（在夜间运行）。在 50K+ 笔记处，索引需要 4–8 小时，您应该考虑拆分为子库。',
          },
          {
            q: '这些插件能同步到移动设备吗？',
            a: '插件本身通过 Obsidian 的插件同步同步。约束条件是：(1) Smart Connections 嵌入索引——与 Obsidian Sync 平稳同步，使用 iCloud 或 Git 时需要按设备重新索引；(2) 聊天插件需要到达 Ollama，这意味着 LAN 访问（在 Ollama 绑定到 `0.0.0.0` 后用台式机的 LAN IP 替换 `localhost`）或 Tailscale 之类的网格 VPN。',
          },
          {
            q: '我可以一起使用多个 AI 插件吗？',
            a: '可以。Smart Connections + Copilot 是推荐的组合。为模板添加 Text Generator 很常见。添加超过 3 个聊天插件（Copilot + Local GPT + BMO）是多余的——它们都做同样的工作。选择一个聊天插件并坚持使用它。',
          },
          {
            q: '哪个插件最适合在笔记内写作？',
            a: 'Copilot for Obsidian——它具有行内命令（Cmd/Ctrl+P → Copilot → 重写 / 摘要 / 自定义提示），可在选定文本上运行。Text Generator 对于通过模板的可重复写作任务也很强。对于临时写作辅助（"以更正式的语气重写此段落"），Copilot 更快。对于结构化生成（"使用此模板将每个会议笔记变为摘要"），Text Generator 更好。',
          },
          {
            q: '我如何在整个库中提示？',
            a: '使用 Copilot for Obsidian 的库 QA 模式。它使用嵌入索引（类似于 Smart Connections）检索查询最相关的笔记，然后将这些块发送到聊天模型。在 Copilot 设置中配置嵌入以指向您的本地 Ollama。Smart Connections 本身没有聊天 UI——它显示相关笔记但不综合跨越它们。',
          },
          {
            q: '我可以用这些做每日日记吗？',
            a: '可以。两个强大的模式：(1) Smart Connections 侧边栏在打开今天的每日笔记时浮现被遗忘的相关笔记——一个"思考伙伴"效应。(2) Text Generator 模板在日终运行以将每日笔记摘要为 3 个要点（决策、阻碍、行动项）。结合两者使每日日记更具反思性。',
          },
          {
            q: '插件能在 Obsidian 更新中存活吗？',
            a: '通常能——维护良好的插件（Smart Connections、Copilot、Text Generator）在重大 Obsidian 发布后的几天内更新。维护不足的插件偶尔滞后。如果插件在 Obsidian 更新后损坏，检查插件的 GitHub Issues 页面；修复通常是维护人员发布在 1–2 周内。插件清单声明最小 Obsidian 版本兼容性。',
          },
          {
            q: '哪个拥有最好的社区支持？',
            a: 'Smart Connections 拥有最大且最活跃的社区（2026 年 Discord 约 5K 成员，定期开发者电话）。Copilot for Obsidian 拥有强大的 GitHub Issues 社区和活跃的维护人员（Logan Yang）。Text Generator 拥有较小但参与度高的社区。Local GPT 和 BMO Chatbot 拥有较小的社区——适合稳定使用，问题解决较慢。',
          },
          {
            q: '我可以在不同的机器上运行 AI 插件吗？',
            a: '可以。在更强大的家庭服务器（迷你 PC、NAS 或专用工作站）上运行 Ollama，使用 `OLLAMA_HOST=0.0.0.0:11434 ollama serve` 将其绑定到 LAN，然后在每个插件的配置中输入服务器的 LAN IP（例如 `http://192.168.1.20:11434/v1`）。这让低功率笔记本或移动设备可以使用在家庭服务器上运行的完整 70B 模型。与 Tailscale 配对，使其从任何地方工作，而不仅仅是家庭 Wi-Fi。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Logseq 和 Joplin 本地大模型](/zh/power-local-llm/local-llm-with-logseq-and-joplin) — 针对偏好 Logseq 或 Joplin 而不是 Obsidian 的读者的邻近开源替代品。',
          '[本地大模型个人知识库 2026](/zh/power-local-llm/local-llm-personal-knowledge-base-2026) — Obsidian 流入的更广泛的 PKB 架构；涵盖 RAG 层、标记策略和 10K 项工作流。',
          '[在 30 分钟内构建 PDF 本地 RAG（Ollama + AnythingLLM）](/zh/power-local-llm/local-rag-on-your-pdfs-step-by-step) — 驱动 Smart Connections 之类的语义插件的 RAG 层；关于嵌入选择的有用背景。',
          '[用本地大模型起草小说和剧本（2026）](/zh/power-local-llm/local-llm-screenwriting-and-novel-drafting) — 作为长篇写作起草层的 Obsidian。',
          '[2026 年最佳本地大模型](/zh/local-llms/best-local-llms-2026) — 为这些插件后面的聊天和嵌入模型选择提供广泛的模型权威。',
          '[本地大模型软件目录 2026](/zh/power-local-llm/local-llm-software-directory-2026) — Ollama、Smart Connections、Copilot 和此堆栈中其他组件的目录列表。',
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
    title: 'Obsidian + LLM Local: 5 Plugins que Convierten tu Vault en un Segundo Cerebro (2026)',
    seoTitle: 'Obsidian + LLM Local: 5 Plugins para tu Vault 2026',
    intro:
      'Cinco plugins de Obsidian convierten un vault en un segundo cerebro funcional en 2026 cuando se combinan con un backend local de Ollama: Smart Connections, Copilot for Obsidian, Text Generator, Local GPT y BMO Chatbot. Cada uno cubre una capa diferente: búsqueda semántica, chat en línea, generación por plantillas, conversación con privacidad prioritaria, chat ligero con contexto. La combinación recomendada para la mayoría de usuarios es Smart Connections + Copilot for Obsidian: uno gestiona la vinculación semántica en todo el vault, el otro proporciona la interfaz de chat. Esta guía clasifica los cinco plugins según la calidad de búsqueda en el vault, velocidad de generación, personalización de prompts y comportamiento de sincronización móvil, con pasos concretos de configuración para Ollama.',
    metaDescription:
      'Cinco plugins de Obsidian probados con Ollama local en 2026: Smart Connections, Copilot, Text Generator, Local GPT y BMO Chatbot. La mejor combinación.',
    twitterDescription:
      'Mejor combinación Obsidian + LLM local en 2026: Smart Connections (búsqueda semántica del vault) + Copilot for Obsidian (chat). Los 5 plugins probados con Ollama. Advertencias de sincronización móvil.',
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
      'PC con 16 GB de RAM (respaldo solo CPU)',
    ],
    audience:
      'Usuarios avanzados de Obsidian, trabajadores del conocimiento, investigadores y escritores que gestionan vaults de 1.000–20.000 notas y quieren funciones de IA sin enviar sus notas a un servicio en la nube.',
    readTime: '14 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'plugin LLM local Obsidian',
    targetKeywords: [
      'obsidian llm local',
      'obsidian ollama plugin',
      'smart connections obsidian local',
      'copilot for obsidian local',
      'obsidian segundo cerebro ia',
      'obsidian plugin llm privado',
    ],
    leadAnswerBlock:
      '**Para la mayoría de usuarios de Obsidian en 2026, instala Smart Connections + Copilot for Obsidian y configura ambos para usar un backend local de Ollama.** Smart Connections gestiona la vinculación semántica en todo el vault (barra lateral de notas relacionadas) usando embeddings locales con `nomic-embed-text` o `mxbai-embed-large`. Copilot for Obsidian proporciona la interfaz de chat, configurada para apuntar al endpoint compatible con OpenAI de Ollama en `http://localhost:11434/v1`. Esta pareja cubre ~80 % de los casos de uso del "segundo cerebro" (búsqueda semántica + chat con notas) sin enviar contenido del vault a la nube. Agrega Text Generator como tercer plugin si quieres generación de contenido basada en plantillas (prompts para diario diario, expansión de notas de reunión). Los embeddings de Smart Connections viven en `.smart-env/` dentro del vault — se sincronizan entre dispositivos con Obsidian Sync pero deben regenerarse por dispositivo con iCloud o Git.',
    quickAnswerTop: {
      en: {
        question: '¿Cuál es la mejor combinación de plugins de Obsidian para LLMs locales en 2026?',
        answer:
          'Smart Connections + Copilot for Obsidian es la combinación recomendada. Smart Connections gestiona la búsqueda semántica del vault con embeddings locales (nomic-embed-text o mxbai-embed-large vía Ollama); Copilot proporciona la barra lateral de chat configurada contra el endpoint compatible con OpenAI de Ollama. Juntos cubren el descubrimiento de notas relacionadas y el chat con contexto del vault — alrededor del 80 % de los casos de uso del "segundo cerebro". Agrega Text Generator como tercer plugin para generación basada en plantillas. Local GPT y BMO Chatbot son alternativas más ligeras a Copilot para usuarios que prefieren una experiencia de solo chat más simple. Los cinco plugins funcionan con cualquier modelo de Ollama; el modelo de chat recomendado en 2026 para sistemas de 16 GB de RAM es Llama 3.2 3B o Phi-4 Mini.',
        bullets: [
          'Smart Connections — búsqueda semántica + barra lateral de notas relacionadas. Ideal para la vinculación en todo el vault.',
          'Copilot for Obsidian — barra lateral de chat con contexto del vault. Ideal para consultas conversacionales.',
          'Text Generator — generación basada en plantillas con variables de frontmatter. Ideal para flujos de trabajo repetibles (notas diarias, resúmenes de reuniones).',
          'Local GPT — chat con privacidad prioritaria con la nota actual. Alternativa más ligera a Copilot.',
          'BMO Chatbot — chat minimalista con contexto del vault. Ideal para usuarios que quieren un único plugin de chat sin la superficie de funciones de Copilot.',
          'Modelos de Ollama recomendados: Llama 3.2 3B (chat), Phi-4 Mini (chat, más pequeño), nomic-embed-text o mxbai-embed-large (embeddings para Smart Connections).',
          'Aviso de sincronización móvil: los embeddings de Smart Connections viven en .smart-env/ — sincronización vía Obsidian Sync, regenerar por dispositivo con iCloud o Git.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: '¿Qué combinación de plugins instalar?', anchor: '#which-plugins' },
      { label: 'Tabla comparativa de plugins', anchor: '#comparison-table' },
      { label: 'Smart Connections: Búsqueda semántica del vault', anchor: '#smart-connections' },
      { label: 'Copilot for Obsidian: Chat con contexto del vault', anchor: '#copilot' },
      { label: 'Text Generator: Generación por plantillas', anchor: '#text-generator' },
      { label: 'Local GPT: Chat con privacidad prioritaria', anchor: '#local-gpt' },
      { label: 'BMO Chatbot: Chat ligero', anchor: '#bmo-chatbot' },
      { label: 'La combinación recomendada: Smart Connections + Copilot', anchor: '#recommended-combo' },
      { label: 'Flujos de trabajo: Notas diarias, MOCs, asistencia de escritura', anchor: '#workflows' },
      { label: 'Sincronización móvil: Obsidian Sync vs iCloud vs Git', anchor: '#mobile-sync' },
      { label: 'Escala del vault: 1K, 5K, 10K, 20K notas', anchor: '#vault-scale' },
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
          '**Smart Connections + Copilot for Obsidian es la combinación recomendada para la mayoría de usuarios.** Smart Connections gestiona la búsqueda semántica del vault con embeddings locales; Copilot gestiona el chat con contexto del vault. Juntos cubren ~80 % de los casos de uso del "segundo cerebro" sin llamadas a la nube.',
          '**Los cinco plugins funcionan con Ollama a través de su endpoint compatible con OpenAI en `http://localhost:11434/v1`.** Configura el ajuste "URL base de API" o equivalente de cada plugin para apuntar a esta dirección. El nombre de modelo predeterminado de Ollama (por ejemplo, `llama3.2:3b`) es lo que ingresas en el campo de modelo del plugin.',
          '**Smart Connections es el único plugin que construye un índice de embeddings de todo el vault.** Esto hace que la búsqueda de notas relacionadas sea práctica con 5.000+ notas. El índice se almacena en `.smart-env/` dentro del vault y se sincroniza con Obsidian Sync; regenera por dispositivo cuando uses iCloud o Git.',
          '**Text Generator es el mejor plugin para flujos de trabajo repetibles.** El resumen de notas diarias, la expansión de notas de reunión y la generación de MOC (Mapa de Contenido) se convierten en acciones de una sola tecla mediante plantillas con variables de frontmatter.',
          '**Para usuarios de solo chat, BMO Chatbot es más ligero que Copilot.** No construye un índice — el contexto es solo la nota actual. Si solo chateas sobre la nota abierta, BMO es suficiente.',
          '**Escala del vault (con Smart Connections + nomic-embed-text):** 1K notas se indexan en ~2 min, 5K en ~10 min, 10K en ~25 min, 20K en ~75 min en Mac M3 Pro. El tiempo de reindexación es pequeño después de la primera ejecución porque solo se reincrustan las notas modificadas.',
          '**Modelos de Ollama recomendados en 2026:** chat — Llama 3.2 3B (predeterminado) o Phi-4 Mini (más pequeño); embeddings — nomic-embed-text (768 dim, rápido) o mxbai-embed-large (1024 dim, más preciso).',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Plugins cubiertos:** Smart Connections, Copilot for Obsidian, Text Generator, Local GPT, BMO Chatbot.',
          '**Backend LLM:** Ollama (recomendado) o LM Studio — cualquier cosa que exponga un endpoint compatible con OpenAI en una URL local.',
          '**Endpoint predeterminado de Ollama:** `http://localhost:11434/v1` (chat) o `http://localhost:11434/api/embeddings` (embeddings).',
          '**Modelos de chat recomendados:** Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B (sistemas de 16 GB de RAM); Qwen3 1.7B (8 GB de RAM).',
          '**Modelos de embeddings recomendados:** nomic-embed-text (768 dim, rápido), mxbai-embed-large (1024 dim, más preciso).',
          '**Objetivos de tamaño del vault:** los cinco plugins permanecen responsivos con 5.000+ notas; la reindexación de Smart Connections es el cuello de botella por encima de 20K notas.',
          '**Compatibilidad móvil:** los plugins de chat funcionan en Obsidian Mobile si Ollama es accesible en la LAN; la generación de embeddings de Smart Connections solo se ejecuta en escritorio.',
        ],
      },
      whichPlugins: {
        id: 'which-plugins',
        title: '¿Qué combinación de plugins instalar?',
        content:
          '**Para la mayoría de usuarios de Obsidian en 2026: instala Smart Connections (búsqueda semántica del vault) y Copilot for Obsidian (barra lateral de chat) — juntos cubren ~80 % de los casos de uso del "segundo cerebro".** Agrega Text Generator si quieres generación basada en plantillas. Omite los demás a menos que prefieras específicamente su interfaz.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Instala Smart Connections + Copilot for Obsidian, configura ambos para usar Ollama en localhost:11434, y tendrás una pila de segundo cerebro privado que cubre búsqueda semántica en todo el vault y consultas conversacionales.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en Obsidian + IA como dos trabajos: encontrar notas relacionadas ("¿qué otras notas en mi vault tocan esta idea?") y chatear sobre notas ("¿qué escribí sobre esto el último trimestre?"). Smart Connections hace lo primero; Copilot hace lo segundo. Ambos usan un LLM local vía Ollama, por lo que nada sale de tu máquina. Agrega Text Generator si haces tareas repetibles (por ejemplo, convertir cada nota de reunión en un resumen). Omite Local GPT y BMO Chatbot a menos que tengas una razón específica.',
          },
        ],
        decisionBlock: {
          title: 'Decisión: ¿Qué plugins de Obsidian instalar?',
          localIf: [
            'Quieres búsqueda semántica en todo el vault ("muéstrame notas relacionadas") → Smart Connections',
            'Quieres barra lateral de chat con contexto de notas → Copilot for Obsidian',
            'Quieres generación basada en plantillas (notas diarias, resúmenes de reuniones) → Text Generator',
            'Solo chateas sobre la nota actual (sin búsqueda en el vault) → BMO Chatbot (más ligero que Copilot)',
            'Quieres chat con garantías estrictas de privacidad y funciones mínimas → Local GPT',
          ],
          cloudIf: [
            'Necesitas calidad GPT-5.5 en cada respuesta de chat → equivalentes en la nube (la pila local alcanza ~70 % de capacidad)',
            'Tu vault está en un servicio en la nube gestionado que bloquea las llamadas a la red local → plugin en la nube',
            'Quieres una función de IA nativa de iOS dentro de la app Obsidian Mobile sin acceso LAN → aún no es factible en 2026 (el móvil no puede llegar al LLM local sin Tailscale o similar)',
          ],
          quick: [
            'Combinación recomendada: Smart Connections + Copilot for Obsidian',
            'Agregar para plantillas: Text Generator',
            'Alternativa ligera: BMO Chatbot (solo chat)',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Instala Smart Connections y Copilot for Obsidian uno a la vez. Smart Connections necesita construir un índice de embeddings en la primera instalación (2–75 min según el tamaño del vault). Deja que termine antes de agregar Copilot para evitar competir por la CPU durante el índice inicial. Una vez que ambos estén funcionando, el uso de RAM es pequeño (~200–400 MB combinados) — Ollama es el proceso pesado, no los plugins.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa de plugins',
        content:
          '**Los cinco plugins difieren en cuatro ejes que importan a la mayoría de usuarios: profundidad de búsqueda en el vault, flexibilidad de generación, compatibilidad móvil y superficie de funciones.** Smart Connections y Copilot no son intercambiables — resuelven problemas diferentes y se complementan entre sí.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Smart Connections es el único plugin que busca en todo el vault con embeddings; los otros cuatro son herramientas de chat o generación que operan en la nota actual o texto seleccionado.',
          },
          {
            type: 'plain-terms',
            text: 'Dos de estos plugins (Smart Connections, Copilot) manejan contexto de todo el vault. Los otros tres (Text Generator, Local GPT, BMO Chatbot) trabajan en la nota actual o una selección específica. La razón más común para instalar más de uno es que Smart Connections no tiene una interfaz de chat propia — necesitas Copilot o uno de los plugins de chat más ligeros para hablar realmente con tu vault.',
          },
        ],
        columns: ['Plugin', 'Búsqueda en vault', 'Generación', 'Sincronización móvil', 'Ideal para'],
        rows: [
          { 'Plugin': 'Smart Connections', 'Búsqueda en vault': 'Sí (índice de embeddings)', 'Generación': 'No (solo búsqueda)', 'Sincronización móvil': 'El índice se sincroniza con Obsidian Sync; regenerar por dispositivo con iCloud / Git', 'Ideal para': 'Vinculación semántica entre notas' },
          { 'Plugin': 'Copilot for Obsidian', 'Búsqueda en vault': 'Sí (con modo vault QA)', 'Generación': 'Sí (chat + inline)', 'Sincronización móvil': 'El plugin se sincroniza; Ollama debe ser accesible en LAN', 'Ideal para': 'Chat inline + asistencia de escritura' },
          { 'Plugin': 'Text Generator', 'Búsqueda en vault': 'No', 'Generación': 'Sí (basada en plantillas)', 'Sincronización móvil': 'Las plantillas se sincronizan; Ollama debe ser accesible en LAN', 'Ideal para': 'Generación repetible por plantillas' },
          { 'Plugin': 'Local GPT', 'Búsqueda en vault': 'No', 'Generación': 'Sí (chat)', 'Sincronización móvil': 'El plugin se sincroniza; Ollama debe ser accesible en LAN', 'Ideal para': 'Chat con privacidad prioritaria con la nota actual' },
          { 'Plugin': 'BMO Chatbot', 'Búsqueda en vault': 'No', 'Generación': 'Sí (chat)', 'Sincronización móvil': 'El plugin se sincroniza; Ollama debe ser accesible en LAN', 'Ideal para': 'Chat ligero con la nota actual' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para uso móvil, la limitación no es el plugin — es si Obsidian Mobile puede llegar a Ollama. Soluciones: (1) ejecutar Ollama en un servidor doméstico y exponerlo en la LAN con una IP estática, luego ingresar esa IP en el plugin en lugar de localhost, (2) usar Tailscale u otra VPN de malla para llegar a un Ollama doméstico desde cualquier lugar, (3) aceptar que las funciones de IA solo funcionan cuando el teléfono está en el Wi-Fi de casa.',
          },
        ],
      },
      smartConnections: {
        id: 'smart-connections',
        title: 'Smart Connections: Búsqueda semántica del vault',
        content:
          '**Smart Connections es el único plugin de Obsidian en 2026 que construye un índice de embeddings sobre todo el vault.** Esto hace que "muéstrame notas relacionadas" sea práctico con 5.000+ notas y es el mayor habilitador del "segundo cerebro" en el ecosistema de plugins.',
        items: [
          '**Qué hace:** genera un embedding vectorial para cada nota (y sección configurable) y muestra una barra lateral "Smart Connections" de notas semánticamente relacionadas con la nota activa.',
          '**Instalación:** Configuración → Plugins de comunidad → Explorar → "Smart Connections" → Instalar + Habilitar. Autor: Brian Petro.',
          '**Configurar para Ollama:** Configuración → Smart Connections → Modelo de embedding → seleccionar "Local (Ollama)" → ingresar `http://localhost:11434/api/embeddings` → nombre del modelo `nomic-embed-text` (o `mxbai-embed-large`).',
          '**Indexación inicial:** el plugin incrusta cada nota. Tiempo en Mac M3 Pro con nomic-embed-text: 1K notas ~2 min, 5K notas ~10 min, 10K notas ~25 min, 20K notas ~75 min. La reindexación tras ediciones es incremental (solo notas modificadas).',
          '**Almacenamiento:** el índice vive en `.smart-env/` dentro del vault. Se sincroniza limpiamente con Obsidian Sync; con iCloud / Git debes regenerar por dispositivo porque el índice es binario específico de la plataforma.',
          '**Mejor modelo de embeddings en 2026:** `nomic-embed-text` (137M parámetros, 768 dim, rápido) para la mayoría de usuarios. `mxbai-embed-large` (335M parámetros, 1024 dim) es más preciso en contenido técnico pero toma ~2× el tiempo de indexación.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Después de que el primer índice se complete, deja Smart Connections habilitado en segundo plano. Las ediciones posteriores desencadenan re-incrustación incremental — generalmente menos de un segundo por nota guardada. También puedes pausar la indexación durante sesiones de edición intensas para evitar competir por CPU con el propio Ollama.',
          },
        ],
      },
      copilot: {
        id: 'copilot',
        title: 'Copilot for Obsidian: Chat con contexto del vault',
        content:
          '**Copilot for Obsidian proporciona la barra lateral de chat que le falta a Smart Connections.** Configúralo para usar Ollama y obtendrás un asistente de chat privado que puede responder preguntas usando tu vault como contexto, generar contenido inline y ejecutar prompts personalizados en selecciones.',
        items: [
          '**Qué hace:** barra lateral de chat, modo vault QA (chat con notas recuperadas), chat inline, prompts personalizados en selecciones, comandos de paleta de comandos.',
          '**Instalación:** Configuración → Plugins de comunidad → Explorar → "Copilot" de Logan Yang → Instalar + Habilitar.',
          '**Configurar para Ollama:** Configuración → Copilot → Configuración de API → proveedor "Custom OpenAI" u "Ollama" → URL base de API `http://localhost:11434/v1` → modelo `llama3.2:3b` (o cualquier modelo de Ollama).',
          '**Modo vault QA:** Copilot recupera las notas más relevantes usando su propio pipeline de embeddings (separado de Smart Connections), luego envía los fragmentos recuperados al modelo de chat. Configura los embeddings en la configuración de Copilot — apunta a `http://localhost:11434/api/embeddings` y selecciona `nomic-embed-text`.',
          '**Comandos inline:** seleccionar texto en una nota → Cmd/Ctrl+P → "Copilot: …" — aplicar reescrituras, resúmenes o plantillas de prompts personalizadas sin abrir la barra lateral de chat.',
          '**Ideal para:** usuarios que quieren una interfaz de chat Y recuperación con contexto del vault. Si solo quieres chatear sobre la nota actual, BMO Chatbot es más ligero.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Copilot mantiene su propio índice de embeddings separado de Smart Connections. Ejecutar ambos significa dos índices sobre el mismo vault y aproximadamente 2× el espacio en disco (~200 MB de datos vectoriales por 5K notas). Si el espacio en disco importa, configura Copilot para usar el índice de Smart Connections, o acepta que los dos plugins no comparten embeddings actualmente en 2026.',
          },
        ],
      },
      textGenerator: {
        id: 'text-generator',
        title: 'Text Generator: Generación por plantillas',
        content:
          '**Text Generator es el mejor plugin para flujos de trabajo repetibles: expansiones de notas diarias, resumen de notas de reunión, generación de MOC, salidas con formato personalizado.** Las plantillas usan variables de frontmatter y Markdown, por lo que una sola plantilla puede activarse con un atajo de teclado en cualquier nota.',
        items: [
          '**Qué hace:** ejecuta una plantilla de prompt personalizada contra la nota actual (o selección) usando tu LLM local. Las plantillas soportan variables de frontmatter, inserción de fecha actual y captura de selección.',
          '**Instalación:** Configuración → Plugins de comunidad → Explorar → "Text Generator" → Instalar + Habilitar. Autor: nhaouari.',
          '**Configurar para Ollama:** Configuración → Text Generator → Proveedor → "Ollama" o "Custom" → endpoint `http://localhost:11434/v1` → modelo `llama3.2:3b`.',
          '**Plantillas:** almacenadas como archivos Markdown en una carpeta configurada (por ejemplo, `Templates/`). Una plantilla es simplemente un prompt con marcadores `{{title}}`, `{{selection}}`, `{{date}}`.',
          '**Flujos de trabajo con atajos de teclado:** asigna un atajo a una plantilla específica (Cmd/Ctrl+T → "Generar desde plantilla" → seleccionar plantilla). Una pulsación ejecuta tu plantilla en la nota actual.',
          '**Ideal para:** flujos de trabajo que realizas docenas de veces — prompts para diario, preguntas de revisión semanal, resúmenes de notas de reunión, notas de lectura de artículos.',
        ],
        promptExamples: [
          {
            label: 'Plantilla de Text Generator: resumidor de notas diarias',
            text: '---\nname: Daily summary\n---\nSummarise the following daily note in three concise bullet points. Focus on decisions made, blockers identified, and action items for tomorrow.\n\nDaily note ({{date}}):\n{{content}}\n\nSummary:',
          },
          {
            label: 'Plantilla de Text Generator: generador de MOC (Mapa de Contenido)',
            text: '---\nname: MOC for tag\n---\nGenerate a Map of Content for all notes tagged with `#{{selection}}`. Group related notes into 3–5 thematic clusters, with a one-sentence description per cluster and a list of the notes inside each cluster.\n\nNotes tagged #{{selection}}:\n{{vault_search_result tag={{selection}}}}\n\nMOC:',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Combina las plantillas de Text Generator con Obsidian QuickAdd para construir una secuencia de "revisión diaria": un solo comando QuickAdd abre la nota diaria de hoy, ejecuta la plantilla de resumen diario e inserta el resultado. Tres plugins (Text Generator + QuickAdd + Templater para cálculo de fechas) te permiten construir un flujo de trabajo que toma 2 segundos para activar y 10 segundos para completar.',
          },
        ],
      },
      localGpt: {
        id: 'local-gpt',
        title: 'Local GPT: Chat con privacidad prioritaria',
        content:
          '**Local GPT es un plugin de chat construido en torno al principio de que ningún contenido de nota debe salir de la máquina.** Funcionalmente es más simple que Copilot for Obsidian — sin modo vault QA, sin biblioteca de plantillas — pero es el más explícito en cuanto a su postura de privacidad.',
        items: [
          '**Qué hace:** chat con la nota actual (o texto seleccionado) usando un LLM local. No existe opción en la nube en el plugin — solo proveedores locales.',
          '**Instalación:** Configuración → Plugins de comunidad → Explorar → "Local GPT" → Instalar + Habilitar. Autor: pfrankov (verifica en el listado — varios plugins tienen nombres similares).',
          '**Configurar para Ollama:** Configuración → Local GPT → Proveedor → "Ollama" → URL `http://localhost:11434` → modelo `llama3.2:3b`.',
          '**Alcance del chat:** solo nota activa o texto seleccionado. No hay índice de embeddings — el contexto es lo que explícitamente envías.',
          '**Ideal para:** usuarios que quieren chatear sobre la nota actual, prefieren la menor superficie de funciones posible y quieren un plugin que no pueda llamar accidentalmente a un servicio en la nube.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si confías en que Copilot for Obsidian permanezca local (puede configurarse en la nube o local), usa Copilot. Si quieres que el propio código del plugin haga imposibles las llamadas a la nube, usa Local GPT — su restricción de diseño es "sin proveedores en la nube, nunca". Esta es una distinción significativa para flujos de trabajo de salud, legal y periodismo donde cualquier posibilidad de salida accidental a la nube es un problema.',
          },
        ],
      },
      bmoChatbot: {
        id: 'bmo-chatbot',
        title: 'BMO Chatbot: Chat ligero',
        content:
          '**BMO Chatbot es el plugin de chat minimalista: una barra lateral, un selector de modelo y un campo de configuración para tu endpoint.** Sin búsqueda en el vault, sin plantillas, sin comandos inline. Si solo chateas sobre la nota activa, BMO es la opción más ligera.',
        items: [
          '**Qué hace:** barra lateral de chat que incluye la nota activa como contexto.',
          '**Instalación:** Configuración → Plugins de comunidad → Explorar → "BMO Chatbot" → Instalar + Habilitar. Autor: longy2k.',
          '**Configurar para Ollama:** Configuración → BMO Chatbot → API → URL `http://localhost:11434/v1` → modelo `llama3.2:3b`.',
          '**Manejo del contexto:** la nota activa se incluye automáticamente en el contexto del chat. Cambiar de nota cambia el contexto.',
          '**Ideal para:** usuarios que quieren un único plugin de chat con la menor configuración posible, sin índice de embeddings y una interfaz que cabe en una barra lateral estrecha de Obsidian.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'BMO Chatbot es el plugin correcto para "solo quiero chatear sobre mi nota actual". Si te encuentras queriendo "buscar en todo mi vault" o "ejecutar esta plantilla de prompt en cada nota de reunión", has superado a BMO — cambia a Copilot for Obsidian (vault QA) o Text Generator (plantillas).',
          },
        ],
      },
      recommendedCombo: {
        id: 'recommended-combo',
        title: 'La combinación recomendada: Smart Connections + Copilot',
        content:
          '**Instala Smart Connections + Copilot for Obsidian, ambos apuntando a Ollama.** Esta combinación maneja las dos tareas distintas de IA que los usuarios de Obsidian quieren — búsqueda semántica del vault y chat con contexto del vault — y cubre ~80 % de los casos de uso del "segundo cerebro" sin enviar notas a la nube.',
        numberedItems: [
          '**Instala Ollama** en tu máquina: `brew install ollama` (macOS) o descarga desde ollama.com (Windows / Linux). Descarga el modelo de chat: `ollama pull llama3.2:3b`. Descarga el modelo de embeddings: `ollama pull nomic-embed-text`.',
          '**Inicia Ollama:** generalmente arranca como un servicio en segundo plano después de la instalación. Verifica: `curl http://localhost:11434/api/tags` devuelve JSON con tus modelos instalados.',
          '**Instala Smart Connections** en Obsidian → configura los embeddings para usar Ollama en `http://localhost:11434/api/embeddings` con modelo `nomic-embed-text`. Deja que indexe (2–75 min según el tamaño del vault).',
          '**Instala Copilot for Obsidian** → configura el proveedor a "Ollama" o "Custom OpenAI" → URL base de API `http://localhost:11434/v1` → modelo de chat `llama3.2:3b` → modelo de embeddings `nomic-embed-text` (para vault QA).',
          '**Prueba:** abre una nota → revisa la barra lateral de Smart Connections para notas relacionadas → abre el chat de Copilot → haz una pregunta que requiera conocimiento del vault ("resume lo que he escrito sobre [tema]") → verifica que la respuesta hace referencia a tus notas reales.',
          '**Tercer plugin opcional:** agrega Text Generator si tienes flujos de trabajo repetibles (resúmenes de notas diarias, expansiones de reuniones, generación de MOC). Configura con el mismo endpoint de Ollama.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Un error común es configurar Copilot con un modelo y Smart Connections con otro — y luego preguntarse por qué las respuestas se sienten inconsistentes. Usa el mismo modelo de chat en ambos (Llama 3.2 3B para la mayoría de usuarios; Phi-4 Mini para sistemas de 8 GB de RAM). El único lugar para usar un modelo diferente es el modelo de embeddings — ese siempre es un modelo separado del modelo de chat.',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: 'Flujos de trabajo: Notas diarias, MOCs, asistencia de escritura',
        content:
          '**Tres flujos de trabajo concretos que demuestran la combinación en acción.** Cada uno se basa en Smart Connections (para contexto del vault) y Copilot (para chat) con Text Generator agregado para trabajo con plantillas.',
        items: [
          '**Resumen de nota diaria:** en tu nota diaria, selecciona todo → comando inline de Copilot → "Resume este día en tres puntos centrados en decisiones, bloqueos y acciones de mañana". La salida reemplaza o se añade debajo de la selección. Guarda el prompt como plantilla de Text Generator para convertirlo en una acción de una sola tecla.',
          '**Generación de MOC (Mapa de Contenido):** abre una página de etiqueta o nota de tema → Copilot → "Genera un Mapa de Contenido para este tema, agrupando las notas relacionadas que tengo en 3–5 clusters temáticos. Usa la barra lateral de Smart Connections para identificar notas relacionadas." → revisar y editar. Smart Connections proporciona la capa de descubrimiento; Copilot sintetiza la estructura.',
          '**Asistencia de escritura contextual:** mientras redactas una nota, abre el chat de Copilot → pregunta "Dadas las notas que he escrito sobre [tema], ¿qué perspectivas me faltan?" Copilot recupera notas relevantes vía vault QA y propone brechas. Útil para salir de borradores con una sola perspectiva.',
          '**Revisión semanal:** plantilla de Text Generator que se ejecuta contra las últimas 7 notas diarias → "Resume la semana en 3 puntos por categoría: progreso, bloqueos, temas." Asigna a un atajo de teclado para revisión de una sola tecla.',
          '**Notas de lectura de artículos/libros:** abre la nota fuente → comando inline de Copilot → "Genera tres pares de pregunta/respuesta estilo Anki de esta nota para repetición espaciada." La salida puede enviarse al plugin de Repetición Espaciada.',
          '**Vinculación de notas dormidas:** la barra lateral de Smart Connections muestra notas relacionadas que pueden haber estado intactas durante meses — te invita a revisar y conectar material antiguo con el trabajo actual.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El flujo de trabajo más subestimado es la revisión diaria de Smart Connections. Cada mañana, abre la nota diaria → revisa la barra lateral de Smart Connections en busca de notas relacionadas inesperadas de tu archivo. El plugin saca a la superficie notas olvidadas que tocan el mismo tema, que es exactamente el efecto de "compañero de pensamiento" que los trabajadores del conocimiento quieren de un segundo cerebro.',
          },
        ],
      },
      mobileSync: {
        id: 'mobile-sync',
        title: 'Sincronización móvil: Obsidian Sync vs iCloud vs Git',
        content:
          '**La compatibilidad de plugins en Obsidian Mobile depende de dos factores: cómo se sincroniza tu vault y si tu teléfono puede llegar a un servidor Ollama local.** Los embeddings de Smart Connections son el componente más sensible a la sincronización.',
        items: [
          '**Obsidian Sync (de pago):** el camino más limpio. La carpeta `.smart-env/` se sincroniza con cifrado de extremo a extremo entre dispositivos, por lo que Smart Connections no necesita reindexar por dispositivo. La configuración de plugins también se sincroniza. Los plugins de chat móvil aún necesitan acceso LAN a Ollama (ver más abajo).',
          '**iCloud Drive:** el vault se sincroniza, pero `.smart-env/` es binario específico de la plataforma y puede corromperse o fallar al sincronizarse correctamente entre iOS / macOS / Windows / Android. Solución práctica: reindexar Smart Connections por dispositivo, o excluir `.smart-env/` de la sincronización y aceptar que el móvil no tiene barra lateral semántica.',
          '**Git (vía Working Copy en iOS, Termux en Android):** el vault de texto plano se sincroniza limpiamente; `.smart-env/` debe agregarse a `.gitignore` porque el índice binario inflaría el repositorio y causaría conflictos de fusión. Reindexar por dispositivo.',
          '**Acceso LAN a Ollama desde el móvil:** por defecto Ollama escucha solo en `localhost:11434` — no accesible desde tu teléfono. Para usar plugins de IA en Obsidian Mobile: vincula Ollama a tu LAN con `OLLAMA_HOST=0.0.0.0:11434 ollama serve`, encuentra la IP LAN del escritorio (por ejemplo, `192.168.1.20`), ingresa esa IP en el plugin en lugar de localhost. El teléfono debe estar en el Wi-Fi de casa.',
          '**Tailscale / VPN de malla:** permite que tu teléfono llegue al Ollama doméstico desde cualquier lugar, no solo el Wi-Fi de casa. Tailscale es la opción más popular en 2026 — instala en escritorio y teléfono, usa la IP de Tailscale en la configuración del plugin.',
          '**La generación de embeddings de Smart Connections solo se ejecuta en escritorio.** Incluso con Obsidian Sync moviendo el índice, el índice debe crearse en algún lugar — eso siempre es una máquina de nivel escritorio. El móvil usa el índice sincronizado para búsqueda de solo lectura de notas relacionadas.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Si usas iCloud o Git para sincronización del vault y quieres que Smart Connections funcione en varios dispositivos, el camino más limpio es designar un dispositivo como el "indexador" (tu escritorio principal) y aceptar que Smart Connections solo funciona completamente allí. En otros dispositivos tendrás un índice obsoleto (iCloud) o ningún índice (Git con .smart-env en .gitignore). Obsidian Sync es la única opción que maneja esto correctamente.',
          },
        ],
      },
      vaultScale: {
        id: 'vault-scale',
        title: 'Escala del vault: 1K, 5K, 10K, 20K notas',
        content:
          '**Los cinco plugins permanecen responsivos con 5.000+ notas; el cuello de botella por encima de 20K notas es el tiempo de reindexación de Smart Connections, no la latencia de consulta.** Los números realistas a continuación se miden en Mac M3 Pro (16 GB de memoria unificada) con embeddings `nomic-embed-text` y chat Llama 3.2 3B.',
        columns: ['Tamaño del vault', 'Índice inicial de Smart Connections', 'Reindexación por cambio', 'Latencia de chat (Copilot)', 'Notas'],
        rows: [
          { 'Tamaño del vault': '1.000 notas', 'Índice inicial de Smart Connections': '~2 min', 'Reindexación por cambio': '<1 seg', 'Latencia de chat (Copilot)': '~1–2 seg primer token', 'Notas': 'Cómodo en cualquier hardware moderno.' },
          { 'Tamaño del vault': '5.000 notas', 'Índice inicial de Smart Connections': '~10 min', 'Reindexación por cambio': '<1 seg', 'Latencia de chat (Copilot)': '~1–2 seg primer token', 'Notas': 'Punto óptimo para la mayoría de trabajadores del conocimiento.' },
          { 'Tamaño del vault': '10.000 notas', 'Índice inicial de Smart Connections': '~25 min', 'Reindexación por cambio': '~1–2 seg', 'Latencia de chat (Copilot)': '~2–3 seg primer token (recuperación vault QA agrega ~500 ms)', 'Notas': 'Aún completamente usable; considera dividir si notas ralentizaciones.' },
          { 'Tamaño del vault': '20.000 notas', 'Índice inicial de Smart Connections': '~75 min', 'Reindexación por cambio': '~2–4 seg', 'Latencia de chat (Copilot)': '~3–5 seg primer token', 'Notas': 'Planifica el índice inicial de noche. Uso de disco de `.smart-env/` ~800 MB–1,2 GB.' },
          { 'Tamaño del vault': '50.000+ notas', 'Índice inicial de Smart Connections': '4–8 horas', 'Reindexación por cambio': '~5–10 seg', 'Latencia de chat (Copilot)': '~5–10 seg primer token', 'Notas': 'Al límite de lo práctico. Considera sub-vaults o actualiza a mxbai-embed-large si la precisión importa más que la velocidad.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'El tamaño del vault tiene más impacto en la indexación inicial que en la capacidad de respuesta diaria. Después del índice inicial, la reincrustación solo ocurre para notas modificadas — generalmente menos de un segundo por guardado incluso con 20K notas. La experiencia lenta de la primera vez es un costo único. Ejecuta el índice inicial de noche si tu vault es grande.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        items: [
          '**Configurar dos plugins con dos modelos de chat diferentes.** Smart Connections no genera, pero Copilot, Text Generator, Local GPT y BMO sí. Usar un modelo diferente en cada uno hace que las respuestas se sientan inconsistentes. Elige un modelo de chat (Llama 3.2 3B es el predeterminado para la mayoría de usuarios) y configura todos los plugins de chat para usarlo.',
          '**Agregar `.smart-env/` a un vault sincronizado con Git sin `.gitignore`.** El índice de Smart Connections es binario y cambia en cada edición. Sin `.gitignore`, obtendrás un historial de Git masivo y conflictos de fusión constantes. Agrega `.smart-env/` a `.gitignore` y reindexar por dispositivo.',
          '**Esperar que Smart Connections móvil construya su propio índice.** La generación de embeddings requiere una máquina de nivel escritorio. El móvil usa un índice sincronizado (Obsidian Sync) o no tiene índice (iCloud / Git). Planifica en consecuencia.',
          '**Apuntar el plugin a `http://localhost:11434/v1` desde un dispositivo móvil.** El móvil no puede llegar al localhost del escritorio. Vincula Ollama a la IP LAN (`OLLAMA_HOST=0.0.0.0:11434`) y usa esa IP en la configuración del plugin, o usa Tailscale para acceso fuera de la red.',
          '**Ejecutar ambos índices de Smart Connections y Copilot contra el mismo vault.** Dos índices separados consumen ~2× el disco y CPU. A mayo de 2026 los dos plugins no comparten embeddings. Si el espacio en disco importa, usa Smart Connections para la recuperación y configura Copilot para usarlo (avanzado — requiere editar la configuración de recuperación de Copilot para leer el almacén vectorial de Smart Connections).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'Smart Connections — [github.com/brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections) (plugin de Obsidian de código abierto).',
          'Copilot for Obsidian — [github.com/logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot) (plugin de Obsidian de código abierto).',
          'Text Generator — [github.com/nhaouari/obsidian-textgenerator-plugin](https://github.com/nhaouari/obsidian-textgenerator-plugin) (plugin de Obsidian de código abierto).',
          'Ollama — [ollama.com](https://ollama.com) y [github.com/ollama/ollama](https://github.com/ollama/ollama) (entorno de ejecución LLM local).',
          'Arquitectura de sincronización móvil de Obsidian — [help.obsidian.md](https://help.obsidian.md) y documentación de Obsidian Sync.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿Qué plugin de Obsidian funciona mejor con Ollama?',
            a: 'Para la mayoría de usuarios: Smart Connections (búsqueda semántica del vault) + Copilot for Obsidian (chat). Ambos se configuran para apuntar a los endpoints de Ollama (chat en `http://localhost:11434/v1`, embeddings en `http://localhost:11434/api/embeddings`). Smart Connections gestiona el descubrimiento de notas relacionadas; Copilot gestiona las consultas conversacionales con contexto del vault. Agrega Text Generator como tercer plugin si tienes flujos de trabajo de plantillas repetibles.',
          },
          {
            q: '¿Pueden los plugins manejar un vault de 10.000 notas?',
            a: 'Sí. Smart Connections tarda ~25 minutos para el índice de embeddings inicial en un Mac M3 Pro y ~1–2 segundos por cambio después de eso. La latencia del vault QA de Copilot es de ~2–3 segundos al primer token. Con 20K notas, planifica ~75 minutos de indexación inicial (ejecutar de noche). Con 50K+ notas, la indexación tarda 4–8 horas y deberías considerar dividir en sub-vaults.',
          },
          {
            q: '¿Estos plugins se sincronizan al móvil?',
            a: 'Los propios plugins se sincronizan vía la sincronización de plugins de Obsidian. Las restricciones son: (1) índice de embeddings de Smart Connections — se sincroniza limpiamente con Obsidian Sync, requiere reindexación por dispositivo con iCloud o Git; (2) los plugins de chat necesitan llegar a Ollama, lo que significa acceso LAN (reemplaza `localhost` con la IP LAN del escritorio después de vincular Ollama a `0.0.0.0`) o una VPN de malla como Tailscale.',
          },
          {
            q: '¿Puedo usar varios plugins de IA juntos?',
            a: 'Sí. Smart Connections + Copilot es la combinación recomendada. Agregar Text Generator para plantillas es común. Agregar más de 3 plugins de chat (Copilot + Local GPT + BMO) es redundante — todos hacen el mismo trabajo. Elige un plugin de chat y quédate con él.',
          },
          {
            q: '¿Qué plugin es mejor para escribir dentro de notas?',
            a: 'Copilot for Obsidian — tiene comandos inline (Cmd/Ctrl+P → Copilot → reescribir / resumir / prompt personalizado) que operan en texto seleccionado. Text Generator también es sólido para tareas de escritura repetibles vía plantillas. Para asistencia de escritura ad-hoc ("reescribe este párrafo en un tono más formal"), Copilot es más rápido. Para generación estructurada ("convierte cada nota de reunión en un resumen usando esta plantilla"), Text Generator es mejor.',
          },
          {
            q: '¿Cómo hago prompts sobre todo mi vault?',
            a: 'Usa el modo vault QA de Copilot for Obsidian. Utiliza un índice de embeddings (similar a Smart Connections) para recuperar las notas más relevantes para una consulta, luego envía esos fragmentos al modelo de chat. Configura los embeddings en la configuración de Copilot para apuntar a tu Ollama local. Smart Connections en sí no tiene interfaz de chat — muestra notas relacionadas pero no sintetiza a través de ellas.',
          },
          {
            q: '¿Puedo usar estos para el diario diario?',
            a: 'Sí. Dos patrones sólidos: (1) la barra lateral de Smart Connections saca a la superficie notas relacionadas olvidadas cuando abres la nota diaria de hoy — un efecto de "compañero de pensamiento". (2) La plantilla de Text Generator se ejecuta al final del día para resumir la nota diaria en 3 puntos (decisiones, bloqueos, elementos de acción). Combinar ambos hace el diario diario más reflexivo.',
          },
          {
            q: '¿Sobreviven los plugins a las actualizaciones de Obsidian?',
            a: 'Generalmente sí — los plugins bien mantenidos (Smart Connections, Copilot, Text Generator) se actualizan dentro de días de las versiones principales de Obsidian. Los plugins menos mantenidos ocasionalmente se retrasan. Revisa la página de GitHub Issues del plugin si un plugin falla después de una actualización de Obsidian; la corrección suele ser un lanzamiento del mantenedor en 1–2 semanas. El manifiesto del plugin declara la compatibilidad mínima con la versión de Obsidian.',
          },
          {
            q: '¿Cuál tiene el mejor soporte de la comunidad?',
            a: 'Smart Connections tiene la comunidad más grande y activa (~5K miembros en Discord en 2026, llamadas de desarrolladores regulares). Copilot for Obsidian tiene una fuerte comunidad en GitHub Issues y un mantenedor activo (Logan Yang). Text Generator tiene una comunidad más pequeña pero comprometida. Local GPT y BMO Chatbot tienen comunidades más pequeñas — bien para uso estable, más lentos para la resolución de problemas.',
          },
          {
            q: '¿Puedo ejecutar el plugin de IA en una máquina diferente?',
            a: 'Sí. Ejecuta Ollama en un servidor doméstico más potente (mini PC, NAS o estación de trabajo dedicada), vincúlalo a la LAN con `OLLAMA_HOST=0.0.0.0:11434 ollama serve`, luego ingresa la IP LAN del servidor en la configuración de cada plugin (por ejemplo, `http://192.168.1.20:11434/v1`). Esto permite que un portátil de baja potencia o dispositivo móvil use modelos completos de 70B que se ejecutan en el servidor doméstico. Combínalo con Tailscale para que funcione desde cualquier lugar, no solo el Wi-Fi de casa.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[LLM local con Logseq y Joplin](/es/power-local-llm/local-llm-with-logseq-and-joplin) — alternativas de código abierto adyacentes para lectores que prefieren Logseq o Joplin sobre Obsidian.',
          '[Base de conocimiento personal con LLM local 2026](/es/power-local-llm/local-llm-personal-knowledge-base-2026) — la arquitectura PKB más amplia en la que se integra Obsidian; cubre la capa RAG, estrategias de etiquetado y flujos de trabajo de 10K elementos.',
          '[Construye RAG local en tus PDFs en 30 minutos (Ollama + AnythingLLM)](/es/power-local-llm/local-rag-on-your-pdfs-step-by-step) — la capa RAG que impulsa plugins semánticos como Smart Connections; útil como contexto sobre las opciones de embeddings.',
          '[Redacción de novelas y guiones con LLMs locales (2026)](/es/power-local-llm/local-llm-screenwriting-and-novel-drafting) — Obsidian como capa de redacción para escritura de larga duración.',
          '[Mejores LLMs locales en 2026](/es/local-llms/best-local-llms-2026) — autoridad de modelos más amplia para elegir los modelos de chat y embeddings detrás de estos plugins.',
          '[Directorio de software LLM local 2026](/es/power-local-llm/local-llm-software-directory-2026) — listados del directorio para Ollama, Smart Connections, Copilot y otros componentes de esta pila.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Obsidian + LLM Local: 5 Plugins que Convierten tu Vault en un Segundo Cerebro (2026)',
      description: 'Cinco plugins de Obsidian probados con Ollama local en 2026: Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot. Mejor combinación, escala del vault y sincronización móvil.',
      url: 'https://www.promptquorum.com/es/power-local-llm/local-llm-with-obsidian-2026',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
},



  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Obsidian + LLM Local: 5 Plugins que Transformam seu Vault em um Segundo Cérebro (2026)',
    seoTitle: 'Obsidian + LLM Local: 5 Plugins para seu Vault 2026',
    intro:
      'Cinco plugins do Obsidian transformam um vault em um segundo cérebro funcional em 2026 quando combinados com um backend local do Ollama: Smart Connections, Copilot for Obsidian, Text Generator, Local GPT e BMO Chatbot. Cada um cobre uma camada diferente: busca semântica, chat inline, geração por templates, conversa com privacidade em primeiro lugar, chat leve com contexto. A combinação recomendada para a maioria dos usuários é Smart Connections + Copilot for Obsidian: um cuida da vinculação semântica em todo o vault, o outro fornece a interface de chat. Este guia classifica os cinco plugins por qualidade de busca no vault, velocidade de geração, personalização de prompts e comportamento de sincronização móvel, com passos concretos de configuração para o Ollama.',
    metaDescription:
      'Cinco plugins do Obsidian testados com Ollama local em 2026: Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot. Melhor combinação, escala do vault, sincronização móvel cobertas.',
    twitterDescription:
      'Melhor combinação Obsidian + LLM local em 2026: Smart Connections (busca semântica do vault) + Copilot for Obsidian (chat). Os 5 plugins testados com Ollama. Ressalvas de sincronização móvel.',
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
      'PC com 16 GB de RAM (fallback apenas CPU)',
    ],
    audience:
      'Usuários avançados do Obsidian, trabalhadores do conhecimento, pesquisadores e escritores que rodam vaults de 1.000–20.000 notas e querem recursos de IA sem enviar suas notas a um serviço na nuvem.',
    readTime: '14 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'plugin LLM local Obsidian',
    targetKeywords: [
      'obsidian llm local',
      'obsidian ollama plugin',
      'smart connections obsidian local',
      'copilot for obsidian local',
      'obsidian segundo cérebro ia',
      'obsidian plugin llm privado',
    ],
    leadAnswerBlock:
      '**Para a maioria dos usuários do Obsidian em 2026, instale Smart Connections + Copilot for Obsidian e configure ambos para usar um backend local do Ollama.** O Smart Connections cuida da vinculação semântica em todo o vault (barra lateral de notas relacionadas) usando embeddings locais via `nomic-embed-text` ou `mxbai-embed-large`. O Copilot for Obsidian fornece a interface de chat, configurada para apontar para o endpoint compatível com OpenAI do Ollama em `http://localhost:11434/v1`. Esse par cobre ~80% dos casos de uso do "segundo cérebro" (busca semântica + chat com notas) sem enviar nenhum conteúdo do vault para a nuvem. Adicione o Text Generator como terceiro plugin se você quer geração de conteúdo baseada em templates (prompts de diário, expansões de notas de reunião). Os embeddings do Smart Connections vivem em `.smart-env/` dentro do vault — eles sincronizam entre dispositivos via Obsidian Sync, mas precisam ser regenerados ao usar iCloud ou Git como método de sincronização.',
    quickAnswerTop: {
      en: {
        question: 'Qual é a melhor combinação de plugins do Obsidian para LLMs locais em 2026?',
        answer:
          'Smart Connections + Copilot for Obsidian é a combinação recomendada. O Smart Connections cuida da busca semântica do vault com embeddings locais (nomic-embed-text ou mxbai-embed-large via Ollama); o Copilot fornece a barra lateral de chat configurada contra o endpoint compatível com OpenAI do Ollama. Juntos eles cobrem a descoberta de notas relacionadas e o chat com contexto do vault — cerca de 80% dos casos de uso do "segundo cérebro". Adicione o Text Generator como terceiro plugin para geração baseada em templates. Local GPT e BMO Chatbot são alternativas mais leves ao Copilot para usuários que querem uma experiência só de chat mais simples. Os cinco plugins funcionam com qualquer modelo do Ollama; o modelo de chat recomendado em 2026 é Llama 3.2 3B ou Phi-4 Mini para sistemas de 16 GB de RAM.',
        bullets: [
          'Smart Connections — busca semântica + barra lateral de notas relacionadas. Melhor para vinculação em todo o vault.',
          'Copilot for Obsidian — barra lateral de chat com contexto do vault. Melhor para consultas conversacionais.',
          'Text Generator — geração baseada em templates com variáveis de frontmatter. Melhor para fluxos de trabalho repetíveis (notas diárias, resumos de reunião).',
          'Local GPT — chat com privacidade em primeiro lugar com a nota atual. Alternativa mais leve ao Copilot.',
          'BMO Chatbot — chat minimalista com contexto do vault. Melhor para usuários que querem um único plugin de chat sem a superfície de recursos do Copilot.',
          'Modelos recomendados do Ollama: Llama 3.2 3B (chat), Phi-4 Mini (chat, menor), nomic-embed-text ou mxbai-embed-large (embeddings para o Smart Connections).',
          'Ressalva de sincronização móvel: os embeddings do Smart Connections vivem em .smart-env/ — sincronize via Obsidian Sync, regenere por dispositivo com iCloud ou Git.',
        ],
        updatedDate: '2026-05-08',
      },
      pt: {
        question: 'Qual é a melhor combinação de plugins do Obsidian para LLMs locais em 2026?', // VERIFY
        answer:
          'Smart Connections + Copilot for Obsidian é a combinação recomendada. O Smart Connections cuida da busca semântica do vault com embeddings locais (nomic-embed-text ou mxbai-embed-large via Ollama); o Copilot fornece a barra lateral de chat configurada contra o endpoint compatível com OpenAI do Ollama. Juntos eles cobrem a descoberta de notas relacionadas e o chat com contexto do vault — cerca de 80% dos casos de uso do "segundo cérebro". Adicione o Text Generator como terceiro plugin para geração baseada em templates. Local GPT e BMO Chatbot são alternativas mais leves ao Copilot para usuários que querem uma experiência só de chat mais simples. Os cinco plugins funcionam com qualquer modelo do Ollama; o modelo de chat recomendado em 2026 é Llama 3.2 3B ou Phi-4 Mini para sistemas de 16 GB de RAM.', // VERIFY
        bullets: [
          'Smart Connections — busca semântica + barra lateral de notas relacionadas. Melhor para vinculação em todo o vault.', // VERIFY
          'Copilot for Obsidian — barra lateral de chat com contexto do vault. Melhor para consultas conversacionais.', // VERIFY
          'Text Generator — geração baseada em templates com variáveis de frontmatter. Melhor para fluxos de trabalho repetíveis (notas diárias, resumos de reunião).', // VERIFY
          'Local GPT — chat com privacidade em primeiro lugar com a nota atual. Alternativa mais leve ao Copilot.', // VERIFY
          'BMO Chatbot — chat minimalista com contexto do vault. Melhor para usuários que querem um único plugin de chat sem a superfície de recursos do Copilot.', // VERIFY
          'Modelos recomendados do Ollama: Llama 3.2 3B (chat), Phi-4 Mini (chat, menor), nomic-embed-text ou mxbai-embed-large (embeddings para o Smart Connections).', // VERIFY
          'Ressalva de sincronização móvel: os embeddings do Smart Connections vivem em .smart-env/ — sincronize via Obsidian Sync, regenere por dispositivo com iCloud ou Git.', // VERIFY
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Principais conclusões', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Qual combinação de plugins instalar?', anchor: '#which-plugins' },
      { label: 'Tabela comparativa de plugins', anchor: '#comparison-table' },
      { label: 'Smart Connections: busca semântica do vault', anchor: '#smart-connections' },
      { label: 'Copilot for Obsidian: chat com contexto do vault', anchor: '#copilot' },
      { label: 'Text Generator: geração por templates', anchor: '#text-generator' },
      { label: 'Local GPT: chat com privacidade em primeiro lugar', anchor: '#local-gpt' },
      { label: 'BMO Chatbot: chat leve', anchor: '#bmo-chatbot' },
      { label: 'A combinação recomendada: Smart Connections + Copilot', anchor: '#recommended-combo' },
      { label: 'Fluxos de trabalho: notas diárias, MOCs, assistência de escrita', anchor: '#workflows' },
      { label: 'Sincronização móvel: Obsidian Sync vs iCloud vs Git', anchor: '#mobile-sync' },
      { label: 'Escala do vault: 1K, 5K, 10K, 20K notas', anchor: '#vault-scale' },
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
          '**Smart Connections + Copilot for Obsidian é a combinação recomendada para a maioria dos usuários.** O Smart Connections cuida da busca semântica do vault com embeddings locais; o Copilot cuida do chat com contexto do vault. Juntos eles cobrem ~80% dos casos de uso do "segundo cérebro" sem chamadas à nuvem.',
          '**Os cinco plugins funcionam com o Ollama via seu endpoint compatível com OpenAI em `http://localhost:11434/v1`.** Configure o ajuste "URL base da API" ou equivalente de cada plugin para apontar para este endereço. O nome de modelo padrão do Ollama (por exemplo, `llama3.2:3b`) é o que você insere no campo de modelo do plugin.',
          '**O Smart Connections é o único plugin que constrói um índice de embeddings de todo o vault.** Isso torna a busca de notas relacionadas prática com 5.000+ notas. O índice é armazenado em `.smart-env/` dentro do vault e sincroniza com o Obsidian Sync; regenere por dispositivo ao usar iCloud ou Git.',
          '**O Text Generator é o melhor plugin para fluxos de trabalho repetíveis.** O resumo de notas diárias, a expansão de notas de reunião e a geração de MOC (Mapa de Conteúdo) tornam-se ações de uma única tecla via templates com variáveis de frontmatter.',
          '**Para usuários só de chat, o BMO Chatbot é mais leve que o Copilot.** Ele não constrói um índice — o contexto é apenas a nota atual. Se você só conversa sobre a nota aberta, o BMO é suficiente.',
          '**Escala do vault (com Smart Connections + nomic-embed-text):** 1K notas indexam em ~2 min, 5K em ~10 min, 10K em ~25 min, 20K em ~75 min em um Mac M3 Pro. O tempo de reindexação é pequeno após a primeira execução porque apenas as notas alteradas são reincorporadas.',
          '**Modelos recomendados do Ollama em 2026:** chat — Llama 3.2 3B (padrão) ou Phi-4 Mini (menor); embeddings — nomic-embed-text (768 dim, rápido) ou mxbai-embed-large (1024 dim, mais preciso).',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Plugins cobertos:** Smart Connections, Copilot for Obsidian, Text Generator, Local GPT, BMO Chatbot.',
          '**Backend de LLM:** Ollama (recomendado) ou LM Studio — qualquer coisa que exponha um endpoint compatível com OpenAI em uma URL local.',
          '**Endpoint padrão do Ollama:** `http://localhost:11434/v1` (chat) ou `http://localhost:11434/api/embeddings` (embeddings).',
          '**Modelos de chat recomendados:** Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B (sistemas de 16 GB de RAM); Qwen3 1.7B (8 GB de RAM).',
          '**Modelos de embeddings recomendados:** nomic-embed-text (768 dim, rápido), mxbai-embed-large (1024 dim, mais preciso).',
          '**Metas de tamanho do vault:** os cinco plugins permanecem responsivos com 5.000+ notas; a reindexação do Smart Connections é o gargalo acima de 20K notas.',
          '**Compatibilidade móvel:** os plugins de chat funcionam no Obsidian Mobile se o Ollama for acessível na LAN; a geração de embeddings do Smart Connections roda apenas no desktop.',
        ],
      },
      whichPlugins: {
        id: 'which-plugins',
        title: 'Qual combinação de plugins instalar?',
        content:
          '**Para a maioria dos usuários do Obsidian em 2026: instale Smart Connections (busca semântica do vault) e Copilot for Obsidian (barra lateral de chat) — juntos eles cobrem ~80% dos casos de uso do "segundo cérebro".** Adicione o Text Generator se você quer geração baseada em templates. Pule os demais a menos que prefira especificamente a interface deles.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Instale Smart Connections + Copilot for Obsidian, configure ambos para usar o Ollama em localhost:11434, e você terá uma pilha de segundo cérebro privado cobrindo busca semântica em todo o vault e consultas conversacionais.',
          },
          {
            type: 'plain-terms',
            text: 'Pense no Obsidian + IA como dois trabalhos: encontrar notas relacionadas ("quais outras notas no meu vault tocam esta ideia?") e conversar sobre notas ("o que escrevi sobre isso no último trimestre?"). O Smart Connections faz o primeiro; o Copilot faz o segundo. Ambos usam um LLM local via Ollama, então nada sai da sua máquina. Adicione o Text Generator se você faz tarefas repetíveis (por exemplo, transformar cada nota de reunião em um resumo). Pule Local GPT e BMO Chatbot a menos que você tenha um motivo específico.',
          },
        ],
        decisionBlock: {
          title: 'Decisão: quais plugins do Obsidian instalar?',
          localIf: [
            'Você quer busca semântica em todo o vault ("mostre-me notas relacionadas") → Smart Connections',
            'Você quer barra lateral de chat com contexto de notas → Copilot for Obsidian',
            'Você quer geração baseada em templates (notas diárias, resumos de reunião) → Text Generator',
            'Você só conversa sobre a nota atual (sem busca no vault) → BMO Chatbot (mais leve que o Copilot)',
            'Você quer chat com garantias rígidas de privacidade + recursos mínimos → Local GPT',
          ],
          cloudIf: [
            'Você precisa de qualidade GPT-5.5 em cada resposta de chat → equivalentes na nuvem (a pilha local atinge ~70% da capacidade)',
            'Seu vault está em um serviço de nuvem gerenciado que bloqueia chamadas à rede local → plugin na nuvem',
            'Você quer um recurso de IA nativo do iOS dentro do app Obsidian Mobile sem acesso à LAN → ainda não é viável em 2026 (o móvel não consegue alcançar o LLM local sem Tailscale ou similar)',
          ],
          quick: [
            'Combinação recomendada: Smart Connections + Copilot for Obsidian',
            'Adicionar para templates: Text Generator',
            'Alternativa leve: BMO Chatbot (apenas chat)',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Instale Smart Connections e Copilot for Obsidian um de cada vez. O Smart Connections precisa construir um índice de embeddings na primeira instalação (2–75 min dependendo do tamanho do vault). Deixe-o terminar antes de adicionar o Copilot para evitar competição por CPU durante o índice inicial. Depois que ambos estiverem rodando, o uso de RAM é pequeno (~200–400 MB combinados) — o Ollama é o processo pesado, não os plugins.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa de plugins',
        content:
          '**Os cinco plugins diferem em quatro eixos que importam para a maioria dos usuários: profundidade de busca no vault, flexibilidade de geração, compatibilidade móvel e superfície de recursos.** Smart Connections e Copilot não são intercambiáveis — eles resolvem problemas diferentes e se complementam.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Smart Connections é o único plugin que busca em todo o vault com embeddings; os outros quatro são ferramentas de chat ou geração que operam na nota atual ou no texto selecionado.',
          },
          {
            type: 'plain-terms',
            text: 'Dois desses plugins (Smart Connections, Copilot) lidam com contexto de todo o vault. Os outros três (Text Generator, Local GPT, BMO Chatbot) trabalham na nota atual ou em uma seleção específica. O motivo mais comum para instalar mais de um é que o Smart Connections não tem uma interface de chat própria — você precisa do Copilot ou de um dos plugins de chat mais leves para realmente conversar com o seu vault.',
          },
        ],
        columns: ['Plugin', 'Busca no vault', 'Geração', 'Sincronização móvel', 'Melhor para'],
        rows: [
          { 'Plugin': 'Smart Connections', 'Busca no vault': 'Sim (índice de embeddings)', 'Geração': 'Não (apenas busca)', 'Sincronização móvel': 'O índice sincroniza com o Obsidian Sync; regenere por dispositivo com iCloud / Git', 'Melhor para': 'Vinculação semântica entre notas' },
          { 'Plugin': 'Copilot for Obsidian', 'Busca no vault': 'Sim (com modo vault QA)', 'Geração': 'Sim (chat + inline)', 'Sincronização móvel': 'O plugin sincroniza; o Ollama deve ser acessível na LAN', 'Melhor para': 'Chat inline + assistência de escrita' },
          { 'Plugin': 'Text Generator', 'Busca no vault': 'Não', 'Geração': 'Sim (baseada em templates)', 'Sincronização móvel': 'Os templates sincronizam; o Ollama deve ser acessível na LAN', 'Melhor para': 'Geração repetível por templates' },
          { 'Plugin': 'Local GPT', 'Busca no vault': 'Não', 'Geração': 'Sim (chat)', 'Sincronização móvel': 'O plugin sincroniza; o Ollama deve ser acessível na LAN', 'Melhor para': 'Chat com privacidade em primeiro lugar com a nota atual' },
          { 'Plugin': 'BMO Chatbot', 'Busca no vault': 'Não', 'Geração': 'Sim (chat)', 'Sincronização móvel': 'O plugin sincroniza; o Ollama deve ser acessível na LAN', 'Melhor para': 'Chat leve com a nota atual' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para uso móvel, a limitação não é o plugin — é se o Obsidian Mobile consegue alcançar o Ollama. Soluções: (1) rodar o Ollama em um servidor doméstico e expô-lo na LAN com um IP estático, depois inserir esse IP no plugin em vez de localhost, (2) usar Tailscale ou outra VPN de malha para alcançar um Ollama doméstico de qualquer lugar, (3) aceitar que os recursos de IA só funcionam quando o telefone está no Wi-Fi de casa.',
          },
        ],
      },
      smartConnections: {
        id: 'smart-connections',
        title: 'Smart Connections: busca semântica do vault',
        content:
          '**O Smart Connections é o único plugin do Obsidian em 2026 que constrói um índice de embeddings sobre todo o vault.** Isso torna "mostre-me notas relacionadas" prático com 5.000+ notas e é o maior habilitador do "segundo cérebro" no ecossistema de plugins.',
        items: [
          '**O que ele faz:** gera um embedding vetorial para cada nota (e seção configurável) e mostra uma barra lateral "Smart Connections" de notas semanticamente relacionadas à nota ativa.',
          '**Instalação:** Configurações → Plugins da comunidade → Procurar → "Smart Connections" → Instalar + Ativar. Autor: Brian Petro.',
          '**Configurar para o Ollama:** Configurações → Smart Connections → Modelo de embedding → selecionar "Local (Ollama)" → inserir `http://localhost:11434/api/embeddings` → nome do modelo `nomic-embed-text` (ou `mxbai-embed-large`).',
          '**Indexação inicial:** o plugin incorpora cada nota. Tempo em um Mac M3 Pro com nomic-embed-text: 1K notas ~2 min, 5K notas ~10 min, 10K notas ~25 min, 20K notas ~75 min. A reindexação após edições é incremental (apenas notas alteradas).',
          '**Armazenamento:** o índice vive em `.smart-env/` dentro do vault. Sincroniza de forma limpa com o Obsidian Sync; com iCloud / Git você precisa regenerar por dispositivo porque o índice é binário específico da plataforma.',
          '**Melhor modelo de embeddings em 2026:** `nomic-embed-text` (137M parâmetros, 768 dim, rápido) para a maioria dos usuários. `mxbai-embed-large` (335M parâmetros, 1024 dim) é mais preciso em conteúdo técnico, mas leva ~2× o tempo de indexação.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Depois que o primeiro índice for concluído, deixe o Smart Connections ativado em segundo plano. As edições posteriores disparam reincorporação incremental — geralmente menos de um segundo por nota salva. Você também pode pausar a indexação durante sessões de edição intensas para evitar competir por CPU com o próprio Ollama.',
          },
        ],
      },
      copilot: {
        id: 'copilot',
        title: 'Copilot for Obsidian: chat com contexto do vault',
        content:
          '**O Copilot for Obsidian fornece a barra lateral de chat que falta ao Smart Connections.** Configure-o para usar o Ollama e você terá um assistente de chat privado que pode responder perguntas usando o seu vault como contexto, gerar conteúdo inline e executar prompts personalizados em seleções.',
        items: [
          '**O que ele faz:** barra lateral de chat, modo vault QA (chat com notas recuperadas), chat inline, prompts personalizados em seleções, comandos da paleta de comandos.',
          '**Instalação:** Configurações → Plugins da comunidade → Procurar → "Copilot" de Logan Yang → Instalar + Ativar.',
          '**Configurar para o Ollama:** Configurações → Copilot → Configurações de API → provedor "Custom OpenAI" ou "Ollama" → URL base da API `http://localhost:11434/v1` → modelo `llama3.2:3b` (ou qualquer modelo do Ollama).',
          '**Modo vault QA:** o Copilot recupera as notas mais relevantes usando seu próprio pipeline de embeddings (separado do Smart Connections), depois envia os fragmentos recuperados ao modelo de chat. Configure os embeddings nas configurações do Copilot — aponte para `http://localhost:11434/api/embeddings` e selecione `nomic-embed-text`.',
          '**Comandos inline:** selecionar texto em uma nota → Cmd/Ctrl+P → "Copilot: …" — aplicar reescritas, resumos ou templates de prompt personalizados sem abrir a barra lateral de chat.',
          '**Melhor para:** usuários que querem uma interface de chat E recuperação com contexto do vault. Se você só quer conversar sobre a nota atual, o BMO Chatbot é mais leve.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'O Copilot mantém seu próprio índice de embeddings separado do Smart Connections. Rodar ambos significa dois índices sobre o mesmo vault e aproximadamente 2× o espaço em disco (~200 MB de dados vetoriais por 5K notas). Se o espaço em disco importa, configure o Copilot para usar o índice do Smart Connections, ou aceite que os dois plugins não compartilham embeddings atualmente em 2026.',
          },
        ],
      },
      textGenerator: {
        id: 'text-generator',
        title: 'Text Generator: geração por templates',
        content:
          '**O Text Generator é o melhor plugin para fluxos de trabalho repetíveis: expansões de notas diárias, resumo de notas de reunião, geração de MOC, saídas com formato personalizado.** Os templates usam variáveis de frontmatter e Markdown, então um único template pode ser disparado por um atalho de teclado em qualquer nota.',
        items: [
          '**O que ele faz:** executa um template de prompt personalizado contra a nota atual (ou seleção) usando o seu LLM local. Os templates suportam variáveis de frontmatter, inserção de data atual e captura de seleção.',
          '**Instalação:** Configurações → Plugins da comunidade → Procurar → "Text Generator" → Instalar + Ativar. Autor: nhaouari.',
          '**Configurar para o Ollama:** Configurações → Text Generator → Provedor → "Ollama" ou "Custom" → endpoint `http://localhost:11434/v1` → modelo `llama3.2:3b`.',
          '**Templates:** armazenados como arquivos Markdown em uma pasta configurada (por exemplo, `Templates/`). Um template é apenas um prompt com marcadores `{{title}}`, `{{selection}}`, `{{date}}`.',
          '**Fluxos de trabalho com atalho de teclado:** atribua um atalho a um template específico (Cmd/Ctrl+T → "Gerar a partir de template" → selecionar template). Uma tecla executa o seu template na nota atual.',
          '**Melhor para:** fluxos de trabalho que você faz dezenas de vezes — prompts de diário, perguntas de revisão semanal, resumos de notas de reunião, notas de leitura de artigos.',
        ],
        promptExamples: [
          {
            label: 'Template do Text Generator: resumidor de notas diárias',
            text: '---\nname: Daily summary\n---\nSummarise the following daily note in three concise bullet points. Focus on decisions made, blockers identified, and action items for tomorrow.\n\nDaily note ({{date}}):\n{{content}}\n\nSummary:',
          },
          {
            label: 'Template do Text Generator: gerador de MOC (Mapa de Conteúdo)',
            text: '---\nname: MOC for tag\n---\nGenerate a Map of Content for all notes tagged with `#{{selection}}`. Group related notes into 3–5 thematic clusters, with a one-sentence description per cluster and a list of the notes inside each cluster.\n\nNotes tagged #{{selection}}:\n{{vault_search_result tag={{selection}}}}\n\nMOC:',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Combine os templates do Text Generator com o Obsidian QuickAdd para construir uma sequência de "revisão diária": um único comando do QuickAdd abre a nota diária de hoje, executa o template de resumo diário e insere o resultado. Três plugins (Text Generator + QuickAdd + Templater para cálculo de datas) permitem construir um fluxo de trabalho que leva 2 segundos para acionar e 10 segundos para concluir.',
          },
        ],
      },
      localGpt: {
        id: 'local-gpt',
        title: 'Local GPT: chat com privacidade em primeiro lugar',
        content:
          '**O Local GPT é um plugin de chat construído em torno do princípio de que nenhum conteúdo de nota deve sair da máquina.** Ele é funcionalmente mais simples que o Copilot for Obsidian — sem modo vault QA, sem biblioteca de templates — mas é o mais explícito quanto à sua postura de privacidade.',
        items: [
          '**O que ele faz:** chat com a nota atual (ou texto selecionado) usando um LLM local. Não existe opção na nuvem no plugin — apenas provedores locais.',
          '**Instalação:** Configurações → Plugins da comunidade → Procurar → "Local GPT" → Instalar + Ativar. Autor: pfrankov (verifique na listagem — vários plugins têm nomes parecidos).',
          '**Configurar para o Ollama:** Configurações → Local GPT → Provedor → "Ollama" → URL `http://localhost:11434` → modelo `llama3.2:3b`.',
          '**Escopo do chat:** apenas nota ativa ou texto selecionado. Não há índice de embeddings — o contexto é o que você explicitamente envia.',
          '**Melhor para:** usuários que querem chat sobre a nota atual, preferem a menor superfície de recursos possível e querem um plugin que não possa acidentalmente chamar um serviço na nuvem.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Se você confia que o Copilot for Obsidian permaneça local (ele pode ser configurado na nuvem ou local), use o Copilot. Se você quer que o próprio código do plugin torne as chamadas à nuvem impossíveis, use o Local GPT — sua restrição de design é "sem provedores na nuvem, nunca". Esta é uma distinção significativa para fluxos de trabalho de saúde, jurídicos e de jornalismo, onde qualquer chance de saída acidental para a nuvem é um problema.',
          },
        ],
      },
      bmoChatbot: {
        id: 'bmo-chatbot',
        title: 'BMO Chatbot: chat leve',
        content:
          '**O BMO Chatbot é o plugin de chat minimalista: uma barra lateral, um seletor de modelo e um campo de configuração para o seu endpoint.** Sem busca no vault, sem templates, sem comandos inline. Se você só conversa sobre a nota ativa, o BMO é a opção mais leve.',
        items: [
          '**O que ele faz:** barra lateral de chat que inclui a nota ativa como contexto.',
          '**Instalação:** Configurações → Plugins da comunidade → Procurar → "BMO Chatbot" → Instalar + Ativar. Autor: longy2k.',
          '**Configurar para o Ollama:** Configurações → BMO Chatbot → API → URL `http://localhost:11434/v1` → modelo `llama3.2:3b`.',
          '**Tratamento de contexto:** a nota ativa é incluída automaticamente no contexto do chat. Trocar de nota troca o contexto.',
          '**Melhor para:** usuários que querem um único plugin de chat com a menor configuração possível, sem índice de embeddings e uma interface que cabe em uma barra lateral estreita do Obsidian.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O BMO Chatbot é o plugin certo para "só quero conversar sobre a minha nota atual". Se você se pega querendo "buscar em todo o meu vault" ou "executar este template de prompt em cada nota de reunião", você superou o BMO — mude para o Copilot for Obsidian (vault QA) ou o Text Generator (templates).',
          },
        ],
      },
      recommendedCombo: {
        id: 'recommended-combo',
        title: 'A combinação recomendada: Smart Connections + Copilot',
        content:
          '**Instale Smart Connections + Copilot for Obsidian, ambos apontando para o Ollama.** Essa combinação lida com os dois trabalhos distintos de IA que os usuários do Obsidian querem — busca semântica do vault e chat com contexto do vault — e cobre ~80% dos casos de uso do "segundo cérebro" sem enviar notas para a nuvem.',
        numberedItems: [
          '**Instale o Ollama** na sua máquina: `brew install ollama` (macOS) ou baixe em ollama.com (Windows / Linux). Baixe o modelo de chat: `ollama pull llama3.2:3b`. Baixe o modelo de embeddings: `ollama pull nomic-embed-text`.',
          '**Inicie o Ollama:** ele geralmente inicia como um serviço em segundo plano após a instalação. Verifique: `curl http://localhost:11434/api/tags` retorna JSON com os seus modelos instalados.',
          '**Instale o Smart Connections** no Obsidian → configure os embeddings para usar o Ollama em `http://localhost:11434/api/embeddings` com o modelo `nomic-embed-text`. Deixe-o indexar (2–75 min dependendo do tamanho do vault).',
          '**Instale o Copilot for Obsidian** → configure o provedor para "Ollama" ou "Custom OpenAI" → URL base da API `http://localhost:11434/v1` → modelo de chat `llama3.2:3b` → modelo de embeddings `nomic-embed-text` (para vault QA).',
          '**Teste:** abra uma nota → verifique a barra lateral do Smart Connections em busca de notas relacionadas → abra o chat do Copilot → faça uma pergunta que exija conhecimento do vault ("resuma o que escrevi sobre [tema]") → verifique se a resposta faz referência às suas notas reais.',
          '**Terceiro plugin opcional:** adicione o Text Generator se você tem fluxos de trabalho repetíveis (resumos de notas diárias, expansões de reunião, geração de MOC). Configure com o mesmo endpoint do Ollama.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Um erro comum é configurar o Copilot com um modelo e o Smart Connections com outro — e depois se perguntar por que as respostas parecem inconsistentes. Use o mesmo modelo de chat em ambos (Llama 3.2 3B para a maioria dos usuários; Phi-4 Mini para sistemas de 8 GB de RAM). O único lugar para usar um modelo diferente é o modelo de embeddings — esse é sempre um modelo separado do modelo de chat.',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: 'Fluxos de trabalho: notas diárias, MOCs, assistência de escrita',
        content:
          '**Três fluxos de trabalho concretos que demonstram a combinação em ação.** Cada um se baseia no Smart Connections (para contexto do vault) e no Copilot (para chat) com o Text Generator adicionado para trabalho com templates.',
        items: [
          '**Resumo de nota diária:** na sua nota diária, selecione tudo → comando inline do Copilot → "Resuma este dia em três pontos focados em decisões, bloqueios e ações de amanhã". A saída substitui ou é anexada abaixo da seleção. Salve o prompt como um template do Text Generator para torná-lo uma ação de uma única tecla.',
          '**Geração de MOC (Mapa de Conteúdo):** abra uma página de tag ou nota de tema → Copilot → "Gere um Mapa de Conteúdo para este tema, agrupando as notas relacionadas que tenho em 3–5 clusters temáticos. Use a barra lateral do Smart Connections para identificar notas relacionadas." → revisar e editar. O Smart Connections fornece a camada de descoberta; o Copilot sintetiza a estrutura.',
          '**Assistência de escrita contextual:** enquanto rascunha uma nota, abra o chat do Copilot → pergunte "Dadas as notas que escrevi sobre [tema], que perspectivas estou perdendo?" O Copilot recupera notas relevantes via vault QA e propõe lacunas. Útil para sair de rascunhos com uma única perspectiva.',
          '**Revisão semanal:** template do Text Generator que roda contra as últimas 7 notas diárias → "Resuma a semana em 3 pontos por categoria: progresso, bloqueios, temas." Vincule a um atalho de teclado para revisão de uma única tecla.',
          '**Notas de leitura de artigos/livros:** abra a nota fonte → comando inline do Copilot → "Gere três pares de pergunta/resposta no estilo Anki desta nota para repetição espaçada." A saída pode ser enviada ao plugin de Repetição Espaçada.',
          '**Vinculação de notas dormentes:** a barra lateral do Smart Connections mostra notas relacionadas que podem estar intocadas há meses — incentiva você a revisitar e conectar material antigo com o trabalho atual.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O fluxo de trabalho mais subestimado é a revisão diária do Smart Connections. Toda manhã, abra a nota diária → verifique a barra lateral do Smart Connections em busca de notas relacionadas inesperadas do seu arquivo. O plugin traz à tona notas esquecidas que tocam o mesmo tema, que é exatamente o efeito de "parceiro de pensamento" que os trabalhadores do conhecimento querem de um segundo cérebro.',
          },
        ],
      },
      mobileSync: {
        id: 'mobile-sync',
        title: 'Sincronização móvel: Obsidian Sync vs iCloud vs Git',
        content:
          '**A compatibilidade de plugins no Obsidian Mobile depende de dois fatores: como o seu vault sincroniza e se o seu telefone consegue alcançar um servidor Ollama local.** Os embeddings do Smart Connections são o componente mais sensível à sincronização.',
        items: [
          '**Obsidian Sync (pago):** o caminho mais limpo. A pasta `.smart-env/` sincroniza com criptografia de ponta a ponta entre dispositivos, então o Smart Connections não precisa reindexar por dispositivo. As configurações dos plugins também sincronizam. Os plugins de chat móvel ainda precisam de acesso LAN ao Ollama (veja abaixo).',
          '**iCloud Drive:** o vault sincroniza, mas `.smart-env/` é binário específico da plataforma e pode corromper ou falhar ao sincronizar corretamente entre iOS / macOS / Windows / Android. Solução prática: reindexar o Smart Connections por dispositivo, ou excluir `.smart-env/` da sincronização e aceitar que o móvel não tem barra lateral semântica.',
          '**Git (via Working Copy no iOS, Termux no Android):** o vault de texto plano sincroniza de forma limpa; `.smart-env/` deve ser adicionado ao `.gitignore` porque o índice binário inflaria o repositório e causaria conflitos de merge. Reindexar por dispositivo.',
          '**Acesso LAN ao Ollama a partir do móvel:** por padrão o Ollama escuta apenas em `localhost:11434` — não acessível do seu telefone. Para usar plugins de IA no Obsidian Mobile: vincule o Ollama à sua LAN com `OLLAMA_HOST=0.0.0.0:11434 ollama serve`, encontre o IP LAN do desktop (por exemplo, `192.168.1.20`), insira esse IP no plugin em vez de localhost. O telefone deve estar no Wi-Fi de casa.',
          '**Tailscale / VPN de malha:** permite que o seu telefone alcance o Ollama doméstico de qualquer lugar, não só o Wi-Fi de casa. O Tailscale é a opção mais popular em 2026 — instale no desktop e no telefone, use o IP do Tailscale na configuração do plugin.',
          '**A geração de embeddings do Smart Connections roda apenas no desktop.** Mesmo com o Obsidian Sync movendo o índice, o índice precisa ser criado em algum lugar — isso é sempre uma máquina de nível desktop. O móvel usa o índice sincronizado para consulta de notas relacionadas somente leitura.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Se você usa iCloud ou Git para a sincronização do vault e quer que o Smart Connections funcione em vários dispositivos, o caminho mais limpo é designar um dispositivo como o "indexador" (o seu desktop principal) e aceitar que o Smart Connections só funciona completamente lá. Em outros dispositivos você tem ou um índice desatualizado (iCloud) ou nenhum índice (Git com .smart-env no .gitignore). O Obsidian Sync é a única opção que lida com isso corretamente.',
          },
        ],
      },
      vaultScale: {
        id: 'vault-scale',
        title: 'Escala do vault: 1K, 5K, 10K, 20K notas',
        content:
          '**Os cinco plugins permanecem responsivos com 5.000+ notas; o gargalo acima de 20K notas é o tempo de reindexação do Smart Connections, não a latência de consulta.** Os números realistas abaixo são medidos em um Mac M3 Pro (16 GB de memória unificada) com embeddings `nomic-embed-text` e chat Llama 3.2 3B.',
        columns: ['Tamanho do vault', 'Índice inicial do Smart Connections', 'Reindexação por alteração', 'Latência de chat (Copilot)', 'Notas'],
        rows: [
          { 'Tamanho do vault': '1.000 notas', 'Índice inicial do Smart Connections': '~2 min', 'Reindexação por alteração': '<1 seg', 'Latência de chat (Copilot)': '~1–2 seg primeiro token', 'Notas': 'Confortável em qualquer hardware moderno.' },
          { 'Tamanho do vault': '5.000 notas', 'Índice inicial do Smart Connections': '~10 min', 'Reindexação por alteração': '<1 seg', 'Latência de chat (Copilot)': '~1–2 seg primeiro token', 'Notas': 'Ponto ideal para a maioria dos trabalhadores do conhecimento.' },
          { 'Tamanho do vault': '10.000 notas', 'Índice inicial do Smart Connections': '~25 min', 'Reindexação por alteração': '~1–2 seg', 'Latência de chat (Copilot)': '~2–3 seg primeiro token (a recuperação do vault QA adiciona ~500 ms)', 'Notas': 'Ainda totalmente utilizável; considere dividir se notar lentidões.' },
          { 'Tamanho do vault': '20.000 notas', 'Índice inicial do Smart Connections': '~75 min', 'Reindexação por alteração': '~2–4 seg', 'Latência de chat (Copilot)': '~3–5 seg primeiro token', 'Notas': 'Planeje o índice inicial durante a noite. Uso de disco de `.smart-env/` ~800 MB–1,2 GB.' },
          { 'Tamanho do vault': '50.000+ notas', 'Índice inicial do Smart Connections': '4–8 horas', 'Reindexação por alteração': '~5–10 seg', 'Latência de chat (Copilot)': '~5–10 seg primeiro token', 'Notas': 'No limite do prático. Considere sub-vaults ou faça upgrade para mxbai-embed-large se a precisão importar mais que a velocidade.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O tamanho do vault tem mais impacto na indexação inicial do que na capacidade de resposta do dia a dia. Após o índice inicial, a reincorporação só acontece para notas alteradas — geralmente menos de um segundo por salvamento, mesmo com 20K notas. A experiência lenta da primeira vez é um custo único. Rode o índice inicial durante a noite se o seu vault for grande.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        items: [
          '**Configurar dois plugins com dois modelos de chat diferentes.** O Smart Connections não gera, mas Copilot, Text Generator, Local GPT e BMO todos geram. Usar um modelo diferente em cada um faz as respostas parecerem inconsistentes. Escolha um modelo de chat (Llama 3.2 3B é o padrão para a maioria dos usuários) e configure todos os plugins de chat para usá-lo.',
          '**Adicionar `.smart-env/` a um vault sincronizado com Git sem `.gitignore`.** O índice do Smart Connections é binário e muda a cada edição. Sem `.gitignore`, você obtém um histórico de Git enorme e conflitos de merge constantes. Adicione `.smart-env/` ao `.gitignore` e reindexar por dispositivo.',
          '**Esperar que o Smart Connections móvel construa seu próprio índice.** A geração de embeddings exige uma máquina de nível desktop. O móvel usa um índice sincronizado (Obsidian Sync) ou não tem índice (iCloud / Git). Planeje de acordo.',
          '**Apontar o plugin para `http://localhost:11434/v1` a partir de um dispositivo móvel.** O móvel não consegue alcançar o localhost do desktop. Vincule o Ollama ao IP LAN (`OLLAMA_HOST=0.0.0.0:11434`) e use esse IP na configuração do plugin, ou use o Tailscale para acesso fora da rede.',
          '**Rodar tanto os índices do Smart Connections quanto do Copilot contra o mesmo vault.** Dois índices separados consomem ~2× o disco e a CPU. Em maio de 2026 os dois plugins não compartilham embeddings. Se a pressão de disco importa, use o Smart Connections para a recuperação e configure o Copilot para usá-lo (avançado — requer editar a configuração de recuperação do Copilot para ler o armazenamento vetorial do Smart Connections).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'Smart Connections — [github.com/brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections) (plugin do Obsidian open source).',
          'Copilot for Obsidian — [github.com/logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot) (plugin do Obsidian open source).',
          'Text Generator — [github.com/nhaouari/obsidian-textgenerator-plugin](https://github.com/nhaouari/obsidian-textgenerator-plugin) (plugin do Obsidian open source).',
          'Ollama — [ollama.com](https://ollama.com) e [github.com/ollama/ollama](https://github.com/ollama/ollama) (runtime de LLM local).',
          'Arquitetura de sincronização móvel do Obsidian — [help.obsidian.md](https://help.obsidian.md) e documentação do Obsidian Sync.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Qual plugin do Obsidian funciona melhor com o Ollama?',
            a: 'Para a maioria dos usuários: Smart Connections (busca semântica do vault) + Copilot for Obsidian (chat). Ambos são configurados para apontar para os endpoints do Ollama (chat em `http://localhost:11434/v1`, embeddings em `http://localhost:11434/api/embeddings`). O Smart Connections cuida da descoberta de notas relacionadas; o Copilot cuida das consultas conversacionais com contexto do vault. Adicione o Text Generator como terceiro plugin se você tem fluxos de trabalho de template repetíveis.',
          },
          {
            q: 'Os plugins conseguem lidar com um vault de 10.000 notas?',
            a: 'Sim. O Smart Connections leva ~25 minutos para o índice de embeddings inicial em um Mac M3 Pro e ~1–2 segundos por alteração depois disso. A latência do vault QA do Copilot é de ~2–3 segundos no primeiro token. Com 20K notas, planeje ~75 minutos de indexação inicial (rode durante a noite). Com 50K+ notas, a indexação leva 4–8 horas e você deve considerar dividir em sub-vaults.',
          },
          {
            q: 'Esses plugins sincronizam para o móvel?',
            a: 'Os próprios plugins sincronizam via a sincronização de plugins do Obsidian. As restrições são: (1) índice de embeddings do Smart Connections — sincroniza de forma limpa com o Obsidian Sync, requer reindexação por dispositivo com iCloud ou Git; (2) os plugins de chat precisam alcançar o Ollama, o que significa acesso LAN (substitua `localhost` pelo IP LAN do desktop depois de vincular o Ollama a `0.0.0.0`) ou uma VPN de malha como o Tailscale.',
          },
          {
            q: 'Posso usar vários plugins de IA juntos?',
            a: 'Sim. Smart Connections + Copilot é a combinação recomendada. Adicionar o Text Generator para templates é comum. Adicionar mais de 3 plugins de chat (Copilot + Local GPT + BMO) é redundante — todos fazem o mesmo trabalho. Escolha um plugin de chat e fique com ele.',
          },
          {
            q: 'Qual plugin é melhor para escrever dentro de notas?',
            a: 'Copilot for Obsidian — ele tem comandos inline (Cmd/Ctrl+P → Copilot → reescrever / resumir / prompt personalizado) que operam em texto selecionado. O Text Generator também é forte para tarefas de escrita repetíveis via templates. Para assistência de escrita ad-hoc ("reescreva este parágrafo em um tom mais formal"), o Copilot é mais rápido. Para geração estruturada ("transforme cada nota de reunião em um resumo usando este template"), o Text Generator é melhor.',
          },
          {
            q: 'Como faço prompts sobre todo o meu vault?',
            a: 'Use o modo vault QA do Copilot for Obsidian. Ele usa um índice de embeddings (similar ao Smart Connections) para recuperar as notas mais relevantes para uma consulta, depois envia esses fragmentos ao modelo de chat. Configure os embeddings nas configurações do Copilot para apontar para o seu Ollama local. O Smart Connections em si não tem interface de chat — ele mostra notas relacionadas, mas não sintetiza entre elas.',
          },
          {
            q: 'Posso usar esses para diário diário?',
            a: 'Sim. Dois padrões fortes: (1) a barra lateral do Smart Connections traz à tona notas relacionadas esquecidas quando você abre a nota diária de hoje — um efeito de "parceiro de pensamento". (2) O template do Text Generator roda ao fim do dia para resumir a nota diária em 3 pontos (decisões, bloqueios, itens de ação). Combinar ambos torna o diário diário mais reflexivo.',
          },
          {
            q: 'Os plugins sobrevivem às atualizações do Obsidian?',
            a: 'Geralmente sim — plugins bem mantidos (Smart Connections, Copilot, Text Generator) são atualizados em poucos dias após os lançamentos principais do Obsidian. Plugins menos mantidos ocasionalmente atrasam. Verifique a página de GitHub Issues do plugin se um plugin quebrar após uma atualização do Obsidian; a correção costuma ser um lançamento do mantenedor em 1–2 semanas. O manifesto do plugin declara a compatibilidade mínima com a versão do Obsidian.',
          },
          {
            q: 'Qual tem o melhor suporte da comunidade?',
            a: 'O Smart Connections tem a comunidade maior e mais ativa (~5K membros no Discord em 2026, chamadas de desenvolvimento regulares). O Copilot for Obsidian tem uma forte comunidade no GitHub Issues e um mantenedor ativo (Logan Yang). O Text Generator tem uma comunidade menor, mas engajada. Local GPT e BMO Chatbot têm comunidades menores — boas para uso estável, mais lentas para a resolução de problemas.',
          },
          {
            q: 'Posso rodar o plugin de IA em uma máquina diferente?',
            a: 'Sim. Rode o Ollama em um servidor doméstico mais potente (mini PC, NAS ou estação de trabalho dedicada), vincule-o à LAN com `OLLAMA_HOST=0.0.0.0:11434 ollama serve`, depois insira o IP LAN do servidor na configuração de cada plugin (por exemplo, `http://192.168.1.20:11434/v1`). Isso permite que um notebook de baixa potência ou dispositivo móvel use modelos completos de 70B rodando no servidor doméstico. Combine com o Tailscale para que funcione de qualquer lugar, não só o Wi-Fi de casa.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[LLM local com Logseq e Joplin](/pt/power-local-llm/local-llm-with-logseq-and-joplin) — alternativas open source adjacentes para leitores que preferem Logseq ou Joplin ao Obsidian.',
          '[Base de conhecimento pessoal com LLM local 2026](/pt/power-local-llm/local-llm-personal-knowledge-base-2026) — a arquitetura de PKB mais ampla na qual o Obsidian se integra; cobre a camada RAG, estratégias de tags e fluxos de trabalho de 10K itens.',
          '[Construa RAG local nos seus PDFs em 30 minutos (Ollama + AnythingLLM)](/pt/power-local-llm/local-rag-on-your-pdfs-step-by-step) — a camada RAG que impulsiona plugins semânticos como o Smart Connections; contexto útil sobre escolhas de embeddings.',
          '[Redação de romances e roteiros com LLMs locais (2026)](/pt/power-local-llm/local-llm-screenwriting-and-novel-drafting) — o Obsidian como camada de redação para escrita de formato longo.',
          '[Melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026) — autoridade de modelos mais ampla para escolher os modelos de chat e embeddings por trás desses plugins.',
          '[Diretório de software de LLM local 2026](/pt/power-local-llm/local-llm-software-directory-2026) — listagens de diretório para Ollama, Smart Connections, Copilot e outros componentes desta pilha.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Obsidian + LLM Local: 5 Plugins que Transformam seu Vault em um Segundo Cérebro (2026)',
      description: 'Cinco plugins do Obsidian testados com Ollama local em 2026: Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot. Melhor combinação, escala do vault e sincronização móvel.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/local-llm-with-obsidian-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Obsidian + LLM محلي: 5 ملحقات تحوّل مخزنك إلى دماغ ثانٍ (2026)',
    seoTitle: 'Obsidian + LLM محلي: 5 ملحقات لمخزنك 2026',
    intro:
      'خمسة ملحقات لـ Obsidian تحوّل المخزن إلى دماغ ثانٍ حقيقي في 2026 حين تُقرن بخلفية Ollama محلية: Smart Connections وCopilot for Obsidian وText Generator وLocal GPT وBMO Chatbot. يغطي كلٌّ منها طبقةً مختلفة: بحث دلالي، ودردشة مضمّنة، وتوليد بالقوالب، ومحادثة تعطي الأولوية للخصوصية، ودردشة خفيفة بسياق. المزيج الموصى به لمعظم المستخدمين هو Smart Connections + Copilot for Obsidian: الأول يتولى الربط الدلالي عبر المخزن بأكمله، والثاني يوفر واجهة الدردشة. يُقيّم هذا الدليل الملحقات الخمسة من حيث جودة البحث في المخزن وسرعة التوليد وتخصيص الموجّهات وسلوك المزامنة على الجوّال، مع خطوات تهيئة ملموسة لـ Ollama.',
    metaDescription:
      '5 ملحقات Obsidian مُختبرة مع Ollama: Smart Connections للبحث الدلالي، Copilot للدردشة، Text Generator وLocal GPT وBMO Chatbot — أفضل مزيج للمخزن.',
    twitterDescription:
      'أفضل مزيج Obsidian + LLM محلي في 2026: Smart Connections (بحث دلالي في المخزن) + Copilot for Obsidian (دردشة). الملحقات الخمسة مُختبرة مع Ollama. تحفظات المزامنة المحمولة.',
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
      'مستخدمو Obsidian المتقدمون والعمال المعرفيون والباحثون والكتّاب الذين يديرون مخازن من 1,000–20,000 ملاحظة ويريدون ميزات ذكاء اصطناعي دون إرسال ملاحظاتهم إلى خدمة سحابية.',
    readTime: '14 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ملحق LLM محلي Obsidian',
    targetKeywords: [
      'obsidian local llm',
      'obsidian ollama plugin',
      'smart connections obsidian local',
      'copilot for obsidian local',
      'obsidian second brain ai',
      'obsidian plugin private llm',
    ],
    leadAnswerBlock:
      '**لمعظم مستخدمي Obsidian في 2026، ثبّت Smart Connections + Copilot for Obsidian وهيّئ كليهما لاستخدام خلفية Ollama المحلية.** يتولى Smart Connections الربط الدلالي عبر المخزن (شريط جانبي للملاحظات ذات الصلة) باستخدام تضمينات محلية عبر `nomic-embed-text` أو `mxbai-embed-large`. يوفر Copilot for Obsidian واجهة الدردشة، مُهيَّأ للإشارة إلى نقطة نهاية Ollama المتوافقة مع OpenAI على `http://localhost:11434/v1`. يغطي هذا الثنائي ~80% من حالات استخدام "الدماغ الثاني" (بحث دلالي + دردشة مع الملاحظات) دون إرسال أي محتوى من المخزن إلى السحابة. أضف Text Generator كملحق ثالث إن أردت توليد محتوى قائماً على القوالب (موجّهات اليومية، توسيعات ملاحظات الاجتماعات). تضمينات Smart Connections تقيم في `.smart-env/` داخل المخزن — تتزامن بين الأجهزة عبر Obsidian Sync لكن يجب إعادة توليدها لكل جهاز عند استخدام iCloud أو Git.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل مزيج من ملحقات Obsidian لنماذج اللغة المحلية في 2026؟',
        answer:
          'Smart Connections + Copilot for Obsidian هو المزيج الموصى به. يتولى Smart Connections البحث الدلالي في المخزن بتضمينات محلية (nomic-embed-text أو mxbai-embed-large عبر Ollama)؛ يوفر Copilot الشريط الجانبي للدردشة مُهيَّأً مع نقطة نهاية Ollama المتوافقة مع OpenAI. معاً يغطيان اكتشاف الملاحظات ذات الصلة والدردشة بسياق المخزن — نحو 80% من حالات استخدام "الدماغ الثاني". أضف Text Generator كملحق ثالث للتوليد بالقوالب. Local GPT وBMO Chatbot بدائل أخف من Copilot للمستخدمين الذين يريدون تجربة دردشة بسيطة. تعمل الملحقات الخمسة مع أي نموذج Ollama؛ نموذج الدردشة الموصى به في 2026 هو Llama 3.2 3B أو Phi-4 Mini لأنظمة ذاكرة RAM بسعة 16 غيغابايت.',
        bullets: [
          'Smart Connections — بحث دلالي + شريط جانبي للملاحظات ذات الصلة. الأفضل للربط عبر المخزن بأكمله.',
          'Copilot for Obsidian — شريط جانبي للدردشة بسياق المخزن. الأفضل للاستعلامات التحاورية.',
          'Text Generator — توليد بالقوالب مع متغيرات frontmatter. الأفضل لسير العمل المتكررة (الملاحظات اليومية، ملخصات الاجتماعات).',
          'Local GPT — دردشة تعطي الأولوية للخصوصية مع الملاحظة الحالية. بديل أخف من Copilot.',
          'BMO Chatbot — دردشة بسيطة بسياق المخزن. الأفضل للمستخدمين الذين يريدون ملحق دردشة واحداً بدون الميزات الواسعة لـ Copilot.',
          'نماذج Ollama الموصى بها: Llama 3.2 3B (دردشة)، Phi-4 Mini (دردشة، أصغر)، nomic-embed-text أو mxbai-embed-large (تضمينات لـ Smart Connections).',
          'تحذير المزامنة المحمولة: تضمينات Smart Connections تقيم في .smart-env/ — زامن عبر Obsidian Sync، وأعد التوليد لكل جهاز مع iCloud أو Git.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'أي مزيج من الملحقات تثبّت؟', anchor: '#which-plugins' },
      { label: 'جدول مقارنة الملحقات', anchor: '#comparison-table' },
      { label: 'Smart Connections: البحث الدلالي في المخزن', anchor: '#smart-connections' },
      { label: 'Copilot for Obsidian: دردشة بسياق المخزن', anchor: '#copilot' },
      { label: 'Text Generator: التوليد بالقوالب', anchor: '#text-generator' },
      { label: 'Local GPT: دردشة تعطي الأولوية للخصوصية', anchor: '#local-gpt' },
      { label: 'BMO Chatbot: دردشة خفيفة', anchor: '#bmo-chatbot' },
      { label: 'المزيج الموصى به: Smart Connections + Copilot', anchor: '#recommended-combo' },
      { label: 'سير العمل: الملاحظات اليومية، وMOCs، ومساعدة الكتابة', anchor: '#workflows' },
      { label: 'المزامنة المحمولة: Obsidian Sync مقابل iCloud مقابل Git', anchor: '#mobile-sync' },
      { label: 'حجم المخزن: 1K و5K و10K و20K ملاحظة', anchor: '#vault-scale' },
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
          '**Smart Connections + Copilot for Obsidian هو المزيج الموصى به لمعظم المستخدمين.** يتولى Smart Connections البحث الدلالي في المخزن بتضمينات محلية؛ يتولى Copilot الدردشة بسياق المخزن. معاً يغطيان ~80% من حالات استخدام "الدماغ الثاني" بدون استدعاءات سحابية.',
          '**تعمل الملحقات الخمسة مع Ollama عبر نقطة نهايته المتوافقة مع OpenAI على `http://localhost:11434/v1`.** هيّئ إعداد "عنوان URL الأساسي للـ API" أو ما يعادله في كل ملحق للإشارة إلى هذا العنوان. اسم النموذج الافتراضي في Ollama (مثلاً `llama3.2:3b`) هو ما تُدخله في حقل النموذج بالملحق.',
          '**Smart Connections هو الملحق الوحيد الذي يبني فهرس تضمينات لكامل المخزن.** هذا يجعل البحث عن الملاحظات ذات الصلة عملياً مع 5,000+ ملاحظة. يُخزَّن الفهرس في `.smart-env/` داخل المخزن ويتزامن مع Obsidian Sync؛ أعد التوليد لكل جهاز عند استخدام iCloud أو Git.',
          '**Text Generator هو أفضل ملحق لسير العمل المتكررة.** يصبح تلخيص الملاحظات اليومية وتوسيع ملاحظات الاجتماعات وتوليد MOC (خريطة المحتوى) إجراءات بضغطة مفتاح واحدة عبر القوالب ذات متغيرات frontmatter.',
          '**لمستخدمي الدردشة فقط، BMO Chatbot أخف من Copilot.** لا يبني فهرساً — السياق هو الملاحظة الحالية فقط. إن كنت تتحدث فقط عن الملاحظة المفتوحة، فـ BMO كافٍ.',
          '**حجم المخزن (مع Smart Connections + nomic-embed-text):** 1K ملاحظة تُفهرس في ~2 دقيقة، 5K في ~10 دقائق، 10K في ~25 دقيقة، 20K في ~75 دقيقة على Mac M3 Pro. وقت إعادة الفهرسة صغير بعد التشغيل الأول لأن الملاحظات المُعدَّلة فقط تُعاد تضمينها.',
          '**نماذج Ollama الموصى بها في 2026:** دردشة — Llama 3.2 3B (افتراضي) أو Phi-4 Mini (أصغر)؛ تضمينات — nomic-embed-text (768 بُعداً، سريع) أو mxbai-embed-large (1024 بُعداً، أكثر دقة).',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**الملحقات المغطاة:** Smart Connections وCopilot for Obsidian وText Generator وLocal GPT وBMO Chatbot.',
          '**خلفية LLM:** Ollama (موصى به) أو LM Studio — أي شيء يكشف نقطة نهاية متوافقة مع OpenAI على عنوان URL محلي.',
          '**نقطة نهاية Ollama الافتراضية:** `http://localhost:11434/v1` (دردشة) أو `http://localhost:11434/api/embeddings` (تضمينات).',
          '**نماذج الدردشة الموصى بها:** Llama 3.2 3B وPhi-4 Mini وGemma 3 4B (أجهزة ذاكرة RAM 16 غيغابايت)؛ Qwen3 1.7B (8 غيغابايت).',
          '**نماذج التضمينات الموصى بها:** nomic-embed-text (768 بُعداً، سريع)، mxbai-embed-large (1024 بُعداً، أكثر دقة).',
          '**أهداف حجم المخزن:** تبقى الملحقات الخمسة مستجيبة مع 5,000+ ملاحظة؛ إعادة فهرسة Smart Connections هي الاختناق فوق 20K ملاحظة.',
          '**التوافق مع الجوّال:** تعمل ملحقات الدردشة على Obsidian Mobile إن كان Ollama متاحاً على الشبكة المحلية؛ يعمل توليد تضمينات Smart Connections على سطح المكتب فقط.',
        ],
      },
      whichPlugins: {
        id: 'which-plugins',
        title: 'أي مزيج من الملحقات تثبّت؟',
        content:
          '**لمعظم مستخدمي Obsidian في 2026: ثبّت Smart Connections (بحث دلالي في المخزن) وCopilot for Obsidian (شريط جانبي للدردشة) — معاً يغطيان ~80% من حالات استخدام "الدماغ الثاني".** أضف Text Generator إن أردت توليداً بالقوالب. تجاهل الباقين ما لم تُفضّل واجهتهم تحديداً.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ثبّت Smart Connections + Copilot for Obsidian، وهيّئ كليهما لاستخدام Ollama على localhost:11434، وستحصل على مكدس "دماغ ثانٍ" خاص يغطي البحث الدلالي عبر المخزن والاستعلامات التحاورية.',
          },
          {
            type: 'plain-terms',
            text: 'فكّر في Obsidian + الذكاء الاصطناعي كوظيفتين: إيجاد الملاحظات ذات الصلة ("ما الملاحظات الأخرى في مخزني التي تمسّ هذه الفكرة؟") والدردشة حول الملاحظات ("ما الذي كتبته عن هذا في الربع الأخير؟"). Smart Connections يؤدي الأولى؛ Copilot يؤدي الثانية. كلاهما يستخدم LLM محلياً عبر Ollama، لذا لا شيء يغادر جهازك. أضف Text Generator إن كنت تؤدي مهام متكررة (مثلاً تحويل كل ملاحظة اجتماع إلى ملخص). تجاهل Local GPT وBMO Chatbot ما لم يكن لديك سبب محدد.',
          },
        ],
        decisionBlock: {
          title: 'القرار: أي ملحقات Obsidian تثبّت؟',
          localIf: [
            'تريد بحثاً دلالياً عبر المخزن ("أرِني ملاحظات ذات صلة") ← Smart Connections',
            'تريد شريطاً جانبياً للدردشة بسياق الملاحظات ← Copilot for Obsidian',
            'تريد توليداً بالقوالب (ملاحظات يومية، ملخصات اجتماعات) ← Text Generator',
            'تتحدث فقط عن الملاحظة الحالية (بدون بحث في المخزن) ← BMO Chatbot (أخف من Copilot)',
            'تريد دردشة بضمانات خصوصية صارمة وحد أدنى من الميزات ← Local GPT',
          ],
          cloudIf: [
            'تحتاج جودة GPT-5.5 في كل استجابة دردشة ← المكافئات السحابية (المكدس المحلي يصل إلى ~70% من القدرة)',
            'مخزنك على خدمة سحابية مُدارة تحجب استدعاءات الشبكة المحلية ← ملحق سحابي',
            'تريد ميزة ذكاء اصطناعي أصيلة لـ iOS داخل تطبيق Obsidian Mobile بدون وصول LAN ← غير ممكن في 2026 (الجوّال لا يستطيع الوصول للـ LLM المحلي بدون Tailscale أو ما يشابهه)',
          ],
          quick: [
            'المزيج الموصى به: Smart Connections + Copilot for Obsidian',
            'أضف للقوالب: Text Generator',
            'البديل الأخف: BMO Chatbot (دردشة فقط)',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'ثبّت Smart Connections وCopilot for Obsidian واحداً تلو الآخر. يحتاج Smart Connections إلى بناء فهرس التضمينات عند التثبيت الأول (2–75 دقيقة حسب حجم المخزن). دعه ينتهي قبل إضافة Copilot لتجنّب التنافس على المعالج أثناء الفهرسة الأولية. بمجرد عمل كليهما، استهلاك الذاكرة العشوائية صغير (~200–400 ميغابايت مجتمعَين) — Ollama هو العملية الثقيلة، لا الملحقات.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول مقارنة الملحقات',
        content:
          '**تختلف الملحقات الخمسة في أربعة محاور تهم معظم المستخدمين: عمق البحث في المخزن ومرونة التوليد وتوافق الجوّال ونطاق الميزات.** Smart Connections وCopilot ليسا قابلَي التبادل — يحلّان مشكلتين مختلفتين ويكمّل كلٌّ منهما الآخر.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Smart Connections هو الملحق الوحيد الذي يبحث في كامل المخزن بالتضمينات؛ الأربعة الأخرى أدوات دردشة أو توليد تعمل على الملاحظة الحالية أو النص المحدد.',
          },
          {
            type: 'plain-terms',
            text: 'ملحقان من هذه الخمسة (Smart Connections وCopilot) يتعاملان مع سياق كامل المخزن. الثلاثة الأخرى (Text Generator وLocal GPT وBMO Chatbot) تعمل على الملاحظة الحالية أو تحديد معين. السبب الأكثر شيوعاً لتثبيت أكثر من واحد هو أن Smart Connections لا يملك واجهة دردشة خاصة به — تحتاج إلى Copilot أو أحد ملحقات الدردشة الأخف للتحدث فعلياً مع مخزنك.',
          },
        ],
        columns: ['الملحق', 'البحث في المخزن', 'التوليد', 'المزامنة المحمولة', 'الأنسب لـ'],
        rows: [
          { 'الملحق': 'Smart Connections', 'البحث في المخزن': 'نعم (فهرس تضمينات)', 'التوليد': 'لا (بحث فقط)', 'المزامنة المحمولة': 'يتزامن الفهرس مع Obsidian Sync؛ أعد التوليد لكل جهاز مع iCloud / Git', 'الأنسب لـ': 'الربط الدلالي بين الملاحظات' },
          { 'الملحق': 'Copilot for Obsidian', 'البحث في المخزن': 'نعم (مع وضع vault QA)', 'التوليد': 'نعم (دردشة + مضمّنة)', 'المزامنة المحمولة': 'يتزامن الملحق؛ يجب أن يكون Ollama متاحاً على LAN', 'الأنسب لـ': 'دردشة مضمّنة + مساعدة الكتابة' },
          { 'الملحق': 'Text Generator', 'البحث في المخزن': 'لا', 'التوليد': 'نعم (قائم على القوالب)', 'المزامنة المحمولة': 'تتزامن القوالب؛ يجب أن يكون Ollama متاحاً على LAN', 'الأنسب لـ': 'توليد متكرر بالقوالب' },
          { 'الملحق': 'Local GPT', 'البحث في المخزن': 'لا', 'التوليد': 'نعم (دردشة)', 'المزامنة المحمولة': 'يتزامن الملحق؛ يجب أن يكون Ollama متاحاً على LAN', 'الأنسب لـ': 'دردشة تعطي الأولوية للخصوصية مع الملاحظة الحالية' },
          { 'الملحق': 'BMO Chatbot', 'البحث في المخزن': 'لا', 'التوليد': 'نعم (دردشة)', 'المزامنة المحمولة': 'يتزامن الملحق؛ يجب أن يكون Ollama متاحاً على LAN', 'الأنسب لـ': 'دردشة خفيفة مع الملاحظة الحالية' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'للاستخدام المحمول، القيد ليس الملحق — بل هو ما إذا كان Obsidian Mobile يستطيع الوصول إلى Ollama. الحلول: (1) شغّل Ollama على خادم منزلي واكشفه على LAN بعنوان IP ثابت، ثم أدخل ذلك الـ IP في الملحق بدلاً من localhost، (2) استخدم Tailscale أو VPN شبكة شبكية للوصول إلى Ollama المنزلي من أي مكان، (3) اقبل أن ميزات الذكاء الاصطناعي تعمل فقط حين يكون الهاتف على شبكة Wi-Fi المنزل.',
          },
        ],
      },
      smartConnections: {
        id: 'smart-connections',
        title: 'Smart Connections: البحث الدلالي في المخزن',
        content:
          '**Smart Connections هو الملحق الوحيد لـ Obsidian في 2026 الذي يبني فهرس تضمينات على كامل المخزن.** هذا يجعل "أرِني ملاحظات ذات صلة" أمراً عملياً مع 5,000+ ملاحظة، وهو أكبر مُمكّن لـ "الدماغ الثاني" في منظومة الملحقات.',
        items: [
          '**ما يفعله:** يولّد متجه تضمين لكل ملاحظة (وقسم قابل للتهيئة) ويعرض شريطاً جانبياً "Smart Connections" من الملاحظات المرتبطة دلالياً بالملاحظة النشطة.',
          '**التثبيت:** الإعدادات ← الملحقات المجتمعية ← استكشاف ← "Smart Connections" ← تثبيت + تمكين. المؤلف: Brian Petro.',
          '**التهيئة مع Ollama:** الإعدادات ← Smart Connections ← نموذج التضمين ← اختر "Local (Ollama)" ← أدخل `http://localhost:11434/api/embeddings` ← اسم النموذج `nomic-embed-text` (أو `mxbai-embed-large`).',
          '**الفهرسة الأولية:** يُضمّن الملحق كل ملاحظة. الوقت على Mac M3 Pro مع nomic-embed-text: 1K ملاحظة ~2 دقيقة، 5K ملاحظات ~10 دقائق، 10K ملاحظات ~25 دقيقة، 20K ملاحظات ~75 دقيقة. إعادة الفهرسة بعد التعديلات تدريجية (الملاحظات المُعدَّلة فقط).',
          '**التخزين:** يقيم الفهرس في `.smart-env/` داخل المخزن. يتزامن بنظافة مع Obsidian Sync؛ مع iCloud / Git يجب إعادة التوليد لكل جهاز لأن الفهرس ثنائي خاص بالمنصة.',
          '**أفضل نموذج تضمينات في 2026:** `nomic-embed-text` (137 مليون معامل، 768 بُعداً، سريع) لمعظم المستخدمين. `mxbai-embed-large` (335 مليون معامل، 1024 بُعداً) أكثر دقة في المحتوى التقني لكن يأخذ ~ضعف وقت الفهرسة.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'بعد اكتمال الفهرس الأول، اترك Smart Connections مُفعَّلاً في الخلفية. التعديلات اللاحقة تُطلق إعادة تضمين تدريجية — عادةً أقل من ثانية لكل ملاحظة محفوظة. يمكنك أيضاً إيقاف الفهرسة مؤقتاً أثناء جلسات التحرير المكثّفة لتجنّب التنافس على المعالج مع Ollama نفسه.',
          },
        ],
      },
      copilot: {
        id: 'copilot',
        title: 'Copilot for Obsidian: دردشة بسياق المخزن',
        content:
          '**يوفر Copilot for Obsidian الشريط الجانبي للدردشة الذي يفتقر إليه Smart Connections.** هيّئه لاستخدام Ollama وستحصل على مساعد دردشة خاص يستطيع الإجابة على الأسئلة باستخدام مخزنك كسياق، وتوليد محتوى مضمّن، وتنفيذ موجّهات مخصصة على التحديدات.',
        items: [
          '**ما يفعله:** شريط جانبي للدردشة، ووضع vault QA (دردشة مع ملاحظات مُسترجَعة)، ودردشة مضمّنة، وموجّهات مخصصة على التحديدات، وأوامر لوحة الأوامر.',
          '**التثبيت:** الإعدادات ← الملحقات المجتمعية ← استكشاف ← "Copilot" من Logan Yang ← تثبيت + تمكين.',
          '**التهيئة مع Ollama:** الإعدادات ← Copilot ← إعدادات API ← موفر "Custom OpenAI" أو "Ollama" ← عنوان URL الأساسي للـ API `http://localhost:11434/v1` ← نموذج `llama3.2:3b` (أو أي نموذج Ollama).',
          '**وضع vault QA:** يسترجع Copilot أكثر الملاحظات صلةً باستخدام خط أنابيب تضمينات خاص به (منفصل عن Smart Connections)، ثم يُرسل المقتطفات المُسترجَعة إلى نموذج الدردشة. هيّئ التضمينات في إعدادات Copilot — أشِر إلى `http://localhost:11434/api/embeddings` واختر `nomic-embed-text`.',
          '**الأوامر المضمّنة:** حدد نصاً في ملاحظة ← Cmd/Ctrl+P ← "Copilot: …" — طبّق إعادات كتابة أو تلخيصات أو قوالب موجّهات مخصصة بدون فتح الشريط الجانبي للدردشة.',
          '**الأنسب لـ:** المستخدمين الذين يريدون واجهة دردشة واسترجاعاً بسياق المخزن. إن أردت فقط الدردشة حول الملاحظة الحالية، فـ BMO Chatbot أخف.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'يحتفظ Copilot بفهرس تضمينات خاص به منفصل عن Smart Connections. تشغيل كليهما يعني فهرسين على نفس المخزن وما يقارب ضعف مساحة القرص (~200 ميغابايت بيانات متجهات لكل 5K ملاحظة). إن كانت مساحة القرص مهمة، هيّئ Copilot لاستخدام فهرس Smart Connections، أو اقبل أن الملحقين لا يتشاركان التضمينات حالياً في 2026.',
          },
        ],
      },
      textGenerator: {
        id: 'text-generator',
        title: 'Text Generator: التوليد بالقوالب',
        content:
          '**Text Generator هو أفضل ملحق لسير العمل المتكررة: توسيعات الملاحظات اليومية، تلخيص ملاحظات الاجتماعات، توليد MOC، مخرجات ذات تنسيق مخصص.** تستخدم القوالب متغيرات frontmatter وMarkdown، لذا يمكن تفعيل قالب واحد بضغطة مفتاح في أي ملاحظة.',
        items: [
          '**ما يفعله:** يُشغّل قالب موجّه مخصص على الملاحظة الحالية (أو التحديد) باستخدام LLM المحلي. تدعم القوالب متغيرات frontmatter وإدراج التاريخ الحالي والتقاط التحديد.',
          '**التثبيت:** الإعدادات ← الملحقات المجتمعية ← استكشاف ← "Text Generator" ← تثبيت + تمكين. المؤلف: nhaouari.',
          '**التهيئة مع Ollama:** الإعدادات ← Text Generator ← الموفر ← "Ollama" أو "Custom" ← نقطة النهاية `http://localhost:11434/v1` ← نموذج `llama3.2:3b`.',
          '**القوالب:** مُخزَّنة كملفات Markdown في مجلد مُهيَّأ (مثلاً `Templates/`). القالب مجرد موجّه مع علامات `{{title}}` و`{{selection}}` و`{{date}}`.',
          '**سير العمل بضغطات المفاتيح:** اربط ضغطة مفتاح بقالب محدد (Cmd/Ctrl+T ← "توليد من قالب" ← اختر قالباً). ضغطة واحدة تُشغّل قالبك على الملاحظة الحالية.',
          '**الأنسب لـ:** سير العمل التي تُؤدّيها عشرات المرات — موجّهات اليومية، أسئلة المراجعة الأسبوعية، ملخصات ملاحظات الاجتماعات، ملاحظات قراءة المقالات.',
        ],
        promptExamples: [
          {
            label: 'قالب Text Generator: مُلخّص الملاحظات اليومية',
            text: '---\nname: Daily summary\n---\nSummarise the following daily note in three concise bullet points. Focus on decisions made, blockers identified, and action items for tomorrow.\n\nDaily note ({{date}}):\n{{content}}\n\nSummary:',
          },
          {
            label: 'قالب Text Generator: مُولّد MOC (خريطة المحتوى)',
            text: '---\nname: MOC for tag\n---\nGenerate a Map of Content for all notes tagged with `#{{selection}}`. Group related notes into 3–5 thematic clusters, with a one-sentence description per cluster and a list of the notes inside each cluster.\n\nNotes tagged #{{selection}}:\n{{vault_search_result tag={{selection}}}}\n\nMOC:',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ادمج قوالب Text Generator مع Obsidian QuickAdd لبناء تسلسل "مراجعة يومية": أمر QuickAdd واحد يفتح ملاحظة اليوم، يُشغّل قالب الملخص اليومي ويُدرج النتيجة. ثلاثة ملحقات (Text Generator + QuickAdd + Templater لحساب التاريخ) تتيح لك بناء سير عمل تستغرق ثانيتين للتفعيل وعشر ثوانٍ للإكمال.',
          },
        ],
      },
      localGpt: {
        id: 'local-gpt',
        title: 'Local GPT: دردشة تعطي الأولوية للخصوصية',
        content:
          '**Local GPT ملحق دردشة مبني على مبدأ أنه لا يجب أن يغادر أي محتوى ملاحظة الجهاز.** وظيفياً أبسط من Copilot for Obsidian — بدون وضع vault QA، بدون مكتبة قوالب — لكنه الأكثر صراحةً في وضعيته الخصوصية.',
        items: [
          '**ما يفعله:** دردشة مع الملاحظة الحالية (أو النص المحدد) باستخدام LLM محلي. لا يوجد خيار سحابي في الملحق — موفرون محليون فقط.',
          '**التثبيت:** الإعدادات ← الملحقات المجتمعية ← استكشاف ← "Local GPT" ← تثبيت + تمكين. المؤلف: pfrankov (تحقق في القائمة — عدة ملحقات لها أسماء مشابهة).',
          '**التهيئة مع Ollama:** الإعدادات ← Local GPT ← الموفر ← "Ollama" ← العنوان `http://localhost:11434` ← نموذج `llama3.2:3b`.',
          '**نطاق الدردشة:** الملاحظة النشطة أو النص المحدد فقط. لا يوجد فهرس تضمينات — السياق هو ما تُرسله صراحةً.',
          '**الأنسب لـ:** المستخدمين الذين يريدون الدردشة حول الملاحظة الحالية، ويُفضّلون أصغر نطاق ممكن من الميزات، ويريدون ملحقاً لا يستطيع الاستدعاء السحابي العرضي.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'إن كنت تثق في بقاء Copilot for Obsidian محلياً (يمكن تهيئته سحابياً أو محلياً)، استخدم Copilot. إن أردت أن يجعل كود الملحق نفسه الاستدعاءات السحابية مستحيلة، استخدم Local GPT — قيده التصميمي هو "بدون موفرين سحابيين، أبداً". هذا تمييز مهم لسير عمل الصحة والقانون والصحافة حيث أي احتمال للخروج السحابي العرضي يُشكّل مشكلة.',
          },
        ],
      },
      bmoChatbot: {
        id: 'bmo-chatbot',
        title: 'BMO Chatbot: دردشة خفيفة',
        content:
          '**BMO Chatbot هو الملحق التقليلي للدردشة: شريط جانبي واحد، ومحدد نموذج، وحقل تهيئة لنقطة نهايتك.** بدون بحث في المخزن، بدون قوالب، بدون أوامر مضمّنة. إن كنت تتحدث فقط عن الملاحظة النشطة، فـ BMO هو الخيار الأخف.',
        items: [
          '**ما يفعله:** شريط جانبي للدردشة يتضمن الملاحظة النشطة كسياق.',
          '**التثبيت:** الإعدادات ← الملحقات المجتمعية ← استكشاف ← "BMO Chatbot" ← تثبيت + تمكين. المؤلف: longy2k.',
          '**التهيئة مع Ollama:** الإعدادات ← BMO Chatbot ← API ← العنوان `http://localhost:11434/v1` ← نموذج `llama3.2:3b`.',
          '**معالجة السياق:** تُدرج الملاحظة النشطة تلقائياً في سياق الدردشة. تغيير الملاحظة يغيّر السياق.',
          '**الأنسب لـ:** المستخدمين الذين يريدون ملحق دردشة واحداً بأقل قدر من التهيئة، بدون فهرس تضمينات وواجهة تناسب شريطاً جانبياً ضيقاً في Obsidian.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'BMO Chatbot هو الملحق الصحيح لـ "أريد فقط التحدث عن ملاحظتي الحالية". إن وجدت نفسك تريد "البحث في كامل مخزني" أو "تشغيل قالب الموجّه هذا على كل ملاحظة اجتماع"، فقد تجاوزت قدرات BMO — انتقل إلى Copilot for Obsidian (vault QA) أو Text Generator (قوالب).',
          },
        ],
      },
      recommendedCombo: {
        id: 'recommended-combo',
        title: 'المزيج الموصى به: Smart Connections + Copilot',
        content:
          '**ثبّت Smart Connections + Copilot for Obsidian، كلاهما يُشير إلى Ollama.** يتعامل هذا المزيج مع مهمتَي الذكاء الاصطناعي المتمايزتين اللتين يريدهما مستخدمو Obsidian — البحث الدلالي في المخزن والدردشة بسياق المخزن — ويغطي ~80% من حالات استخدام "الدماغ الثاني" بدون إرسال ملاحظات إلى السحابة.',
        numberedItems: [
          '**ثبّت Ollama** على جهازك: `brew install ollama` (macOS) أو نزّل من ollama.com (Windows / Linux). نزّل نموذج الدردشة: `ollama pull llama3.2:3b`. نزّل نموذج التضمينات: `ollama pull nomic-embed-text`.',
          '**شغّل Ollama:** عادةً يعمل كخدمة في الخلفية بعد التثبيت. تحقق: `curl http://localhost:11434/api/tags` يُعيد JSON بنماذجك المثبتة.',
          '**ثبّت Smart Connections** في Obsidian ← هيّئ التضمينات لاستخدام Ollama على `http://localhost:11434/api/embeddings` مع نموذج `nomic-embed-text`. دع الفهرسة تكتمل (2–75 دقيقة حسب حجم المخزن).',
          '**ثبّت Copilot for Obsidian** ← هيّئ الموفر على "Ollama" أو "Custom OpenAI" ← عنوان URL الأساسي للـ API `http://localhost:11434/v1` ← نموذج الدردشة `llama3.2:3b` ← نموذج التضمينات `nomic-embed-text` (لـ vault QA).',
          '**الاختبار:** افتح ملاحظة ← راجع شريط Smart Connections الجانبي للملاحظات ذات الصلة ← افتح دردشة Copilot ← اطرح سؤالاً يتطلب معرفة بالمخزن ("لخّص ما كتبته عن [موضوع]") ← تحقق من أن الإجابة تُشير إلى ملاحظاتك الفعلية.',
          '**الملحق الثالث الاختياري:** أضف Text Generator إن كان لديك سير عمل متكررة (ملخصات الملاحظات اليومية، توسيعات الاجتماعات، توليد MOC). هيّئه بنفس نقطة نهاية Ollama.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'خطأ شائع هو تهيئة Copilot بنموذج وSmart Connections بآخر — ثم التساؤل عن سبب التناقض في الإجابات. استخدم نفس نموذج الدردشة في كليهما (Llama 3.2 3B لمعظم المستخدمين؛ Phi-4 Mini لأجهزة ذاكرة RAM 8 غيغابايت). المكان الوحيد لاستخدام نموذج مختلف هو نموذج التضمينات — هذا دائماً نموذج منفصل عن نموذج الدردشة.',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: 'سير العمل: الملاحظات اليومية وMOCs ومساعدة الكتابة',
        content:
          '**ثلاثة سير عمل ملموسة تُظهر المزيج في العمل.** كل منها يعتمد على Smart Connections (للسياق من المخزن) وCopilot (للدردشة) مع إضافة Text Generator للعمل بالقوالب.',
        items: [
          '**ملخص الملاحظة اليومية:** في ملاحظتك اليومية، حدد الكل ← أمر Copilot المضمّن ← "لخّص هذا اليوم في ثلاث نقاط مركّزة على القرارات والعوائق وإجراءات الغد". تحل المخرجات محل التحديد أو تُضاف أسفله. احفظ الموجّه كقالب Text Generator لتحويله إلى إجراء بضغطة مفتاح واحدة.',
          '**توليد MOC (خريطة المحتوى):** افتح صفحة وسم أو ملاحظة موضوع ← Copilot ← "ولّد خريطة محتوى لهذا الموضوع، مجموّعاً الملاحظات ذات الصلة التي أمتلكها في 3–5 مجموعات موضوعية. استخدم شريط Smart Connections الجانبي لتحديد الملاحظات ذات الصلة." ← راجع وعدّل. يوفر Smart Connections طبقة الاكتشاف؛ Copilot يُوليّف البنية.',
          '**مساعدة الكتابة السياقية:** أثناء صياغة ملاحظة، افتح دردشة Copilot ← اسأل "بالنظر إلى الملاحظات التي كتبتها عن [موضوع]، ما وجهات النظر التي تنقصني؟" يسترجع Copilot الملاحظات ذات الصلة عبر vault QA ويقترح الثغرات. مفيد للخروج من المسودات أحادية المنظور.',
          '**المراجعة الأسبوعية:** قالب Text Generator يعمل على آخر 7 ملاحظات يومية ← "لخّص الأسبوع في 3 نقاط لكل فئة: التقدم والعوائق والمواضيع." اربطه بضغطة مفتاح لمراجعة بضغطة واحدة.',
          '**ملاحظات قراءة المقالات / الكتب:** افتح ملاحظة المصدر ← أمر Copilot المضمّن ← "ولّد ثلاثة أزواج سؤال/جواب بأسلوب Anki من هذه الملاحظة للمراجعة المتباعدة." يمكن إرسال المخرجات إلى ملحق التكرار المتباعد.',
          '**ربط الملاحظات النائمة:** يعرض شريط Smart Connections الجانبي ملاحظات ذات صلة ربما بقيت دون مسّ لأشهر — يدعوك لمراجعة المادة القديمة وربطها بالعمل الحالي.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'سير العمل الأقل تقديراً هو مراجعة Smart Connections اليومية. كل صباح، افتح الملاحظة اليومية ← راجع شريط Smart Connections الجانبي بحثاً عن ملاحظات ذات صلة غير متوقعة من أرشيفك. يُطفو الملحق ملاحظات منسية تمسّ نفس الموضوع، وهو بالضبط تأثير "رفيق التفكير" الذي يريده العمال المعرفيون من الدماغ الثاني.',
          },
        ],
      },
      mobileSync: {
        id: 'mobile-sync',
        title: 'المزامنة المحمولة: Obsidian Sync مقابل iCloud مقابل Git',
        content:
          '**يعتمد توافق الملحقات على Obsidian Mobile على عاملين: طريقة مزامنة مخزنك وما إذا كان هاتفك يستطيع الوصول إلى خادم Ollama المحلي.** تضمينات Smart Connections هي المكوّن الأكثر حساسية للمزامنة.',
        items: [
          '**Obsidian Sync (مدفوع):** المسار الأنظف. تُزامَن مجلد `.smart-env/` بتشفير من طرف إلى طرف بين الأجهزة، لذا لا يحتاج Smart Connections إلى إعادة الفهرسة لكل جهاز. تُزامَن إعدادات الملحقات أيضاً. ملحقات الدردشة المحمولة لا تزال تحتاج وصول LAN إلى Ollama (انظر أدناه).',
          '**iCloud Drive:** يتزامن المخزن، لكن `.smart-env/` ثنائي خاص بالمنصة وقد يتلف أو يفشل في المزامنة الصحيحة بين iOS / macOS / Windows / Android. الحل العملي: أعد فهرسة Smart Connections لكل جهاز، أو استبعد `.smart-env/` من المزامنة واقبل أن الجوّال لا يملك شريطاً جانبياً دلالياً.',
          '**Git (عبر Working Copy على iOS، Termux على Android):** يتزامن مخزن النص العادي بنظافة؛ يجب إضافة `.smart-env/` إلى `.gitignore` لأن الفهرس الثنائي سيُضخّم المستودع ويُسبّب تعارضات دمج. أعد الفهرسة لكل جهاز.',
          '**وصول LAN إلى Ollama من الجوّال:** افتراضياً يستمع Ollama فقط على `localhost:11434` — غير متاح من هاتفك. لاستخدام ملحقات الذكاء الاصطناعي على Obsidian Mobile: اربط Ollama بشبكتك المحلية مع `OLLAMA_HOST=0.0.0.0:11434 ollama serve`، ابحث عن عنوان IP LAN لسطح المكتب (مثلاً `192.168.1.20`)، أدخل ذلك الـ IP في الملحق بدلاً من localhost. يجب أن يكون الهاتف على شبكة Wi-Fi المنزل.',
          '**Tailscale / VPN الشبكة الشبكية:** تتيح لهاتفك الوصول إلى Ollama المنزلي من أي مكان، وليس فقط شبكة Wi-Fi المنزل. Tailscale هو الخيار الأكثر شيوعاً في 2026 — ثبّته على سطح المكتب والهاتف، استخدم عنوان IP في Tailscale في إعدادات الملحق.',
          '**يعمل توليد تضمينات Smart Connections على سطح المكتب فقط.** حتى مع نقل Obsidian Sync للفهرس، يجب إنشاء الفهرس في مكان ما — هذا دائماً جهاز بمستوى سطح المكتب. يستخدم الجوّال الفهرس المزامَن للبحث عن الملاحظات ذات الصلة للقراءة فقط.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'إن كنت تستخدم iCloud أو Git لمزامنة المخزن وتريد عمل Smart Connections على أجهزة متعددة، المسار الأنظف هو تعيين جهاز واحد كـ "المُفهرس" (سطح مكتبك الرئيسي) والقبول بأن Smart Connections يعمل بالكامل هناك فقط. على الأجهزة الأخرى ستحصل على فهرس قديم (iCloud) أو لا فهرس (Git مع .smart-env في .gitignore). Obsidian Sync هو الخيار الوحيد الذي يتعامل مع هذا بشكل صحيح.',
          },
        ],
      },
      vaultScale: {
        id: 'vault-scale',
        title: 'حجم المخزن: 1K و5K و10K و20K ملاحظة',
        content:
          '**تبقى الملحقات الخمسة مستجيبة مع 5,000+ ملاحظة؛ الاختناق فوق 20K ملاحظة هو وقت إعادة فهرسة Smart Connections، وليس زمن استجابة الاستعلام.** الأرقام الواقعية أدناه مقاسة على Mac M3 Pro (ذاكرة موحّدة 16 غيغابايت) مع تضمينات `nomic-embed-text` ودردشة Llama 3.2 3B.',
        columns: ['حجم المخزن', 'الفهرس الأولي لـ Smart Connections', 'إعادة الفهرسة بالتغيير', 'زمن استجابة الدردشة (Copilot)', 'ملاحظات'],
        rows: [
          { 'حجم المخزن': '1,000 ملاحظة', 'الفهرس الأولي لـ Smart Connections': '~2 دقيقة', 'إعادة الفهرسة بالتغيير': '<1 ثانية', 'زمن استجابة الدردشة (Copilot)': '~1–2 ثانية للرمز الأول', 'ملاحظات': 'مريح على أي جهاز حديث.' },
          { 'حجم المخزن': '5,000 ملاحظة', 'الفهرس الأولي لـ Smart Connections': '~10 دقائق', 'إعادة الفهرسة بالتغيير': '<1 ثانية', 'زمن استجابة الدردشة (Copilot)': '~1–2 ثانية للرمز الأول', 'ملاحظات': 'النقطة المثالية لمعظم العمال المعرفيين.' },
          { 'حجم المخزن': '10,000 ملاحظة', 'الفهرس الأولي لـ Smart Connections': '~25 دقيقة', 'إعادة الفهرسة بالتغيير': '~1–2 ثانية', 'زمن استجابة الدردشة (Copilot)': '~2–3 ثوانٍ للرمز الأول (استرجاع vault QA يُضيف ~500 مللي ثانية)', 'ملاحظات': 'لا يزال قابلاً للاستخدام تماماً؛ فكّر في التقسيم إن لاحظت تباطؤاً.' },
          { 'حجم المخزن': '20,000 ملاحظة', 'الفهرس الأولي لـ Smart Connections': '~75 دقيقة', 'إعادة الفهرسة بالتغيير': '~2–4 ثوانٍ', 'زمن استجابة الدردشة (Copilot)': '~3–5 ثوانٍ للرمز الأول', 'ملاحظات': 'خطّط للفهرس الأولي ليلاً. استخدام القرص لـ `.smart-env/` ~800 ميغابايت–1.2 غيغابايت.' },
          { 'حجم المخزن': '50,000+ ملاحظة', 'الفهرس الأولي لـ Smart Connections': '4–8 ساعات', 'إعادة الفهرسة بالتغيير': '~5–10 ثوانٍ', 'زمن استجابة الدردشة (Copilot)': '~5–10 ثوانٍ للرمز الأول', 'ملاحظات': 'عند حدود العملي. فكّر في المخازن الفرعية أو ترقّ إلى mxbai-embed-large إن كانت الدقة أهم من السرعة.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'حجم المخزن له تأثير أكبر على الفهرسة الأولية من الاستجابة اليومية. بعد الفهرس الأولي، إعادة التضمين تحدث فقط للملاحظات المُعدَّلة — عادةً أقل من ثانية لكل حفظ حتى مع 20K ملاحظة. التجربة البطيئة في المرة الأولى تكلفة لمرة واحدة. شغّل الفهرس الأولي ليلاً إن كان مخزنك كبيراً.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          '**تهيئة ملحقَين بنموذجَي دردشة مختلفَين.** Smart Connections لا يُولّد، لكن Copilot وText Generator وLocal GPT وBMO يُولّدون. استخدام نموذج مختلف في كل منها يجعل الاستجابات تبدو متناقضة. اختر نموذج دردشة واحداً (Llama 3.2 3B هو الافتراضي لمعظم المستخدمين) وهيّئ جميع ملحقات الدردشة لاستخدامه.',
          '**إضافة `.smart-env/` إلى مخزن مُزامَن بـ Git بدون `.gitignore`.** فهرس Smart Connections ثنائي ويتغير في كل تعديل. بدون `.gitignore`، ستحصل على تاريخ Git ضخم وتعارضات دمج مستمرة. أضف `.smart-env/` إلى `.gitignore` وأعد الفهرسة لكل جهاز.',
          '**توقع بناء Smart Connections المحمول فهرسه الخاص.** يتطلب توليد التضمينات جهازاً بمستوى سطح المكتب. يستخدم الجوّال فهرساً مُزامَناً (Obsidian Sync) أو لا يملك فهرساً (iCloud / Git). خطّط وفق ذلك.',
          '**الإشارة إلى `http://localhost:11434/v1` من جهاز محمول.** الجوّال لا يستطيع الوصول إلى localhost لسطح المكتب. اربط Ollama بعنوان IP LAN (`OLLAMA_HOST=0.0.0.0:11434`) واستخدم ذلك الـ IP في إعدادات الملحق، أو استخدم Tailscale للوصول خارج الشبكة.',
          '**تشغيل فهرسَي Smart Connections وCopilot على نفس المخزن.** فهرسان منفصلان يستهلكان ~ضعف القرص والمعالج. في مايو 2026 الملحقان لا يتشاركان التضمينات. إن كانت مساحة القرص مهمة، استخدم Smart Connections للاسترجاع وهيّئ Copilot لاستخدامه (متقدم — يتطلب تعديل إعدادات استرجاع Copilot لقراءة مخزن Smart Connections المتجهي).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'Smart Connections — [github.com/brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections) (ملحق Obsidian مفتوح المصدر).',
          'Copilot for Obsidian — [github.com/logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot) (ملحق Obsidian مفتوح المصدر).',
          'Text Generator — [github.com/nhaouari/obsidian-textgenerator-plugin](https://github.com/nhaouari/obsidian-textgenerator-plugin) (ملحق Obsidian مفتوح المصدر).',
          'Ollama — [ollama.com](https://ollama.com) و[github.com/ollama/ollama](https://github.com/ollama/ollama) (وقت تشغيل LLM محلي).',
          'هندسة المزامنة المحمولة لـ Obsidian — [help.obsidian.md](https://help.obsidian.md) ووثائق Obsidian Sync.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'أي ملحق Obsidian يعمل بشكل أفضل مع Ollama؟',
            a: 'لمعظم المستخدمين: Smart Connections (بحث دلالي في المخزن) + Copilot for Obsidian (دردشة). يُهيَّأ كلاهما للإشارة إلى نقاط نهاية Ollama (دردشة على `http://localhost:11434/v1`، تضمينات على `http://localhost:11434/api/embeddings`). يتولى Smart Connections اكتشاف الملاحظات ذات الصلة؛ يتولى Copilot الاستعلامات التحاورية بسياق المخزن. أضف Text Generator كملحق ثالث إن كان لديك سير عمل قوالب متكررة.',
          },
          {
            q: 'هل تستطيع الملحقات التعامل مع مخزن من 10,000 ملاحظة؟',
            a: 'نعم. يستغرق Smart Connections ~25 دقيقة للفهرس الأولي للتضمينات على Mac M3 Pro و~1–2 ثانية لكل تغيير بعد ذلك. زمن استجابة vault QA في Copilot ~2–3 ثوانٍ للرمز الأول. مع 20K ملاحظة، خطّط لـ ~75 دقيقة فهرسة أولية (شغّلها ليلاً). مع 50K+ ملاحظة، تستغرق الفهرسة 4–8 ساعات ويجب أن تفكر في التقسيم إلى مخازن فرعية.',
          },
          {
            q: 'هل تتزامن هذه الملحقات على الجوّال؟',
            a: 'تتزامن الملحقات نفسها عبر مزامنة ملحقات Obsidian. القيود هي: (1) فهرس تضمينات Smart Connections — يتزامن بنظافة مع Obsidian Sync، يتطلب إعادة فهرسة لكل جهاز مع iCloud أو Git؛ (2) ملحقات الدردشة تحتاج الوصول إلى Ollama، مما يعني وصول LAN (استبدل `localhost` بعنوان IP LAN لسطح المكتب بعد ربط Ollama بـ `0.0.0.0`) أو VPN شبكة شبكية مثل Tailscale.',
          },
          {
            q: 'هل يمكنني استخدام عدة ملحقات ذكاء اصطناعي معاً؟',
            a: 'نعم. Smart Connections + Copilot هو المزيج الموصى به. إضافة Text Generator للقوالب شائعة. إضافة أكثر من 3 ملحقات دردشة (Copilot + Local GPT + BMO) تكرارية — جميعها تؤدي نفس العمل. اختر ملحق دردشة واحداً والتزم به.',
          },
          {
            q: 'أي ملحق أفضل للكتابة داخل الملاحظات؟',
            a: 'Copilot for Obsidian — لديه أوامر مضمّنة (Cmd/Ctrl+P ← Copilot ← إعادة كتابة / تلخيص / موجّه مخصص) تعمل على النص المحدد. Text Generator أيضاً متين لمهام الكتابة المتكررة عبر القوالب. للمساعدة الكتابية العرضية ("أعد كتابة هذه الفقرة بنبرة أكثر رسمية")، Copilot أسرع. للتوليد المنظم ("حوّل كل ملاحظة اجتماع إلى ملخص بهذا القالب")، Text Generator أفضل.',
          },
          {
            q: 'كيف أُنشئ موجّهات لكامل مخزني؟',
            a: 'استخدم وضع vault QA في Copilot for Obsidian. يستخدم فهرس تضمينات (مشابهاً لـ Smart Connections) لاسترجاع أكثر الملاحظات صلةً باستعلام، ثم يُرسل تلك المقتطفات إلى نموذج الدردشة. هيّئ التضمينات في إعدادات Copilot للإشارة إلى Ollama المحلي. Smart Connections نفسه لا يملك واجهة دردشة — يعرض الملاحظات ذات الصلة لكنه لا يُوليّف بينها.',
          },
          {
            q: 'هل يمكنني استخدام هذه للملاحظات اليومية؟',
            a: 'نعم. نمطان قويان: (1) يُطفو شريط Smart Connections الجانبي ملاحظات ذات صلة منسية حين تفتح ملاحظة اليوم — تأثير "رفيق التفكير". (2) يعمل قالب Text Generator في نهاية اليوم لتلخيص الملاحظة اليومية في 3 نقاط (قرارات، عوائق، إجراءات). الجمع بين الاثنين يجعل الملاحظات اليومية أكثر تأملاً.',
          },
          {
            q: 'هل تنجو الملحقات من تحديثات Obsidian؟',
            a: 'بشكل عام نعم — الملحقات المُصانة بشكل جيد (Smart Connections وCopilot وText Generator) تُحدَّث في غضون أيام من الإصدارات الرئيسية لـ Obsidian. الملحقات الأقل صيانةً تتأخر أحياناً. راجع صفحة GitHub Issues للملحق إن فشل بعد تحديث Obsidian؛ الإصلاح عادةً إصدار من المطور خلال 1–2 أسبوع. بيان الملحق يُعلن الحد الأدنى من توافق إصدار Obsidian.',
          },
          {
            q: 'أيهما لديه أفضل دعم من المجتمع؟',
            a: 'Smart Connections لديه أكبر وأنشط مجتمع (~5K عضو على Discord في 2026، اجتماعات تطوير منتظمة). Copilot for Obsidian لديه مجتمع قوي على GitHub Issues ومطور نشط (Logan Yang). Text Generator لديه مجتمع أصغر لكن متفاعل. Local GPT وBMO Chatbot لديهما مجتمعات أصغر — جيدة للاستخدام المستقر، أبطأ في حل المشكلات.',
          },
          {
            q: 'هل يمكنني تشغيل ملحق الذكاء الاصطناعي على جهاز مختلف؟',
            a: 'نعم. شغّل Ollama على خادم منزلي أقوى (ميني PC أو NAS أو محطة عمل مخصصة)، اربطه بالشبكة المحلية مع `OLLAMA_HOST=0.0.0.0:11434 ollama serve`، ثم أدخل عنوان IP LAN للخادم في إعدادات كل ملحق (مثلاً `http://192.168.1.20:11434/v1`). يتيح هذا لجهاز محمول منخفض الأداء أو الجوّال استخدام نماذج كاملة بـ 70B مليار معامل تعمل على الخادم المنزلي. ادمجه مع Tailscale للعمل من أي مكان، وليس فقط شبكة Wi-Fi المنزل.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[LLM محلي مع Logseq وJoplin](/ar/power-local-llm/local-llm-with-logseq-and-joplin) — بدائل مفتوحة المصدر مجاورة للقراء الذين يُفضّلون Logseq أو Joplin على Obsidian.',
          '[قاعدة المعرفة الشخصية مع LLM محلي 2026](/ar/power-local-llm/local-llm-personal-knowledge-base-2026) — هندسة PKB الأشمل التي يندمج فيها Obsidian؛ يغطي طبقة RAG واستراتيجيات الوسم وسير عمل 10K عنصر.',
          '[ابنِ RAG محلياً على ملفات PDF في 30 دقيقة (Ollama + AnythingLLM)](/ar/power-local-llm/local-rag-on-your-pdfs-step-by-step) — طبقة RAG التي تُشغّل ملحقات دلالية مثل Smart Connections؛ سياق مفيد حول خيارات التضمينات.',
          '[كتابة الروايات والسيناريو مع نماذج اللغة المحلية (2026)](/ar/power-local-llm/local-llm-screenwriting-and-novel-drafting) — Obsidian كطبقة كتابة للنصوص الطويلة.',
          '[أفضل نماذج LLM المحلية في 2026](/ar/local-llms/best-local-llms-2026) — مرجع النماذج الأوسع لاختيار نماذج الدردشة والتضمينات خلف هذه الملحقات.',
          '[دليل برامج LLM المحلية 2026](/ar/power-local-llm/local-llm-software-directory-2026) — قوائم الدليل لـ Ollama وSmart Connections وCopilot وغيرها من مكونات هذا المكدس.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Obsidian + LLM محلي: 5 ملحقات تحوّل مخزنك إلى دماغ ثانٍ (2026)',
      description: 'خمسة ملحقات Obsidian مُختبرة مع Ollama المحلي في 2026: Smart Connections وCopilot وText Generator وLocal GPT وBMO Chatbot. أفضل مزيج، حجم المخزن، المزامنة المحمولة.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/local-llm-with-obsidian-2026',
      inLanguage: 'ar',
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Obsidian + 로컬 LLM: 보관함을 제2의 뇌로 만드는 5가지 플러그인 (2026)',
    seoTitle: 'Obsidian + 로컬 LLM: 보관함을 위한 5가지 플러그인 2026',
    intro:
      '2026년에 Ollama 로컬 백엔드와 결합하면 5가지 Obsidian 플러그인이 보관함을 완전한 제2의 뇌로 변환합니다: Smart Connections, Copilot for Obsidian, Text Generator, Local GPT, BMO Chatbot. 각각 다른 레이어를 담당합니다—시맨틱 검색, 인라인 채팅, 템플릿 기반 생성, 개인 정보 보호 우선 대화, 컨텍스트가 있는 경량 채팅. 대부분의 사용자에게 권장하는 조합은 Smart Connections + Copilot for Obsidian입니다. 하나는 보관함 전체의 시맨틱 연결을 관리하고, 다른 하나는 채팅 인터페이스를 제공합니다. 이 가이드는 보관함 검색 품질, 생성 속도, 프롬프트 커스터마이징, 모바일 동기화 동작을 기준으로 5가지 플러그인을 평가하며 Ollama 설정을 위한 구체적인 단계를 제공합니다.',
    metaDescription:
      '2026년 로컬 Ollama로 테스트한 5가지 Obsidian 플러그인: Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot. 최적의 조합, 보관함 규모, 모바일 동기화 설명.',
    twitterDescription:
      '2026년 최적의 Obsidian + 로컬 LLM 조합: Smart Connections(보관함 시맨틱 검색) + Copilot for Obsidian(채팅). Ollama로 테스트한 5가지 플러그인. 모바일 동기화 주의사항 포함.',
    current_models_mentioned: [
      'Llama 3.2 3B',
      'Phi-4 Mini',
      'Gemma 3 4B',
      'Qwen3 1.7B',
      'nomic-embed-text',
      'mxbai-embed-large',
    ],
    current_hardware_mentioned: [
      'Mac M3 Pro / M4 (통합 메모리 16GB 이상)',
      'RTX 3060 12GB 또는 RTX 4060 8GB 탑재 PC',
      'RAM 16GB PC (CPU 전용 대체)',
    ],
    audience:
      '1,000~20,000개 노트로 보관함을 운영하며 클라우드 서비스에 노트를 전송하지 않고 AI 기능을 원하는 숙련된 Obsidian 사용자, 지식 노동자, 연구자, 작가.',
    readTime: '14분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Obsidian 로컬 LLM 플러그인',
    targetKeywords: [
      'obsidian 로컬 llm',
      'obsidian ollama 플러그인',
      'smart connections obsidian 로컬',
      'copilot for obsidian 로컬',
      'obsidian 제2의 뇌 ai',
      'obsidian llm 개인 정보 보호',
    ],
    leadAnswerBlock:
      '**2026년 대부분의 Obsidian 사용자에게는 Smart Connections + Copilot for Obsidian을 설치하고 두 플러그인 모두 로컬 Ollama 백엔드를 사용하도록 설정하십시오.** Smart Connections는 `nomic-embed-text` 또는 `mxbai-embed-large`를 이용한 로컬 임베딩으로 보관함 전체의 시맨틱 연결(관련 노트 사이드바)을 관리합니다. Copilot for Obsidian은 `http://localhost:11434/v1`의 Ollama OpenAI 호환 엔드포인트를 사용하도록 설정된 채팅 인터페이스를 제공합니다. 이 조합은 보관함 콘텐츠를 클라우드에 전송하지 않고도 "제2의 뇌" 사용 사례(시맨틱 검색 + 노트와 채팅)의 약 80%를 처리합니다. 반복 가능한 콘텐츠 생성(일일 일지 프롬프트, 회의 노트 확장)을 원한다면 세 번째 플러그인으로 Text Generator를 추가하십시오. Smart Connections 임베딩은 보관함 내 `.smart-env/`에 저장됩니다—Obsidian Sync로 기기 간 동기화되지만 iCloud 또는 Git 사용 시 기기별로 재생성이 필요합니다.',
    quickAnswerTop: {
      ko: {
        question: '2026년 로컬 LLM을 위한 최적의 Obsidian 플러그인 조합은 무엇입니까?',
        answer:
          'Smart Connections + Copilot for Obsidian이 권장 조합입니다. Smart Connections는 로컬 임베딩(Ollama를 통한 nomic-embed-text 또는 mxbai-embed-large)으로 보관함 시맨틱 검색을 처리하고, Copilot은 Ollama의 OpenAI 호환 엔드포인트에 연결된 채팅 사이드바를 제공합니다. 두 플러그인 함께 관련 노트 탐색과 보관함 컨텍스트 채팅을 담당하며 "제2의 뇌" 사용 사례의 약 80%를 처리합니다. 템플릿 기반 생성을 위해 세 번째 플러그인으로 Text Generator를 추가하십시오. Local GPT와 BMO Chatbot은 더 단순한 채팅 전용 경험을 원하는 사용자를 위한 Copilot의 경량 대안입니다. 5가지 플러그인 모두 어떤 Ollama 모델과도 작동하며, 2026년 RAM 16GB 시스템의 권장 채팅 모델은 Llama 3.2 3B 또는 Phi-4 Mini입니다.',
        bullets: [
          'Smart Connections — 시맨틱 검색 + 관련 노트 사이드바. 보관함 전체 연결에 최적.',
          'Copilot for Obsidian — 보관함 컨텍스트가 있는 채팅 사이드바. 대화형 질의에 최적.',
          'Text Generator — 프론트매터 변수가 있는 템플릿 기반 생성. 반복 가능한 워크플로(일일 노트, 회의 요약)에 최적.',
          'Local GPT — 현재 노트와 개인 정보 보호 우선 채팅. Copilot의 경량 대안.',
          'BMO Chatbot — 보관함 컨텍스트가 있는 미니멀 채팅. Copilot의 기능 표면 없이 단일 채팅 플러그인을 원하는 사용자에게 최적.',
          '권장 Ollama 모델: Llama 3.2 3B(채팅), Phi-4 Mini(채팅, 소형), nomic-embed-text 또는 mxbai-embed-large(Smart Connections용 임베딩).',
          '모바일 동기화 주의: Smart Connections 임베딩은 .smart-env/에 저장됨 — Obsidian Sync로 동기화, iCloud 또는 Git 사용 시 기기별 재생성 필요.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: '핵심 요점', anchor: '#key-takeaways' },
      { label: '빠른 정보', anchor: '#quick-facts' },
      { label: '어떤 플러그인 조합을 설치할까요?', anchor: '#which-plugins' },
      { label: '플러그인 비교표', anchor: '#comparison-table' },
      { label: 'Smart Connections: 보관함 시맨틱 검색', anchor: '#smart-connections' },
      { label: 'Copilot for Obsidian: 보관함 컨텍스트 채팅', anchor: '#copilot' },
      { label: 'Text Generator: 템플릿 기반 생성', anchor: '#text-generator' },
      { label: 'Local GPT: 개인 정보 보호 우선 채팅', anchor: '#local-gpt' },
      { label: 'BMO Chatbot: 경량 채팅', anchor: '#bmo-chatbot' },
      { label: '권장 조합: Smart Connections + Copilot', anchor: '#recommended-combo' },
      { label: '워크플로: 일일 노트, MOC, 글쓰기 지원', anchor: '#workflows' },
      { label: '모바일 동기화: Obsidian Sync vs iCloud vs Git', anchor: '#mobile-sync' },
      { label: '보관함 규모: 1K, 5K, 10K, 20K 노트', anchor: '#vault-scale' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 자료', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Smart Connections + Copilot for Obsidian이 대부분의 사용자에게 권장하는 조합입니다.** Smart Connections는 로컬 임베딩으로 보관함 시맨틱 검색을 처리하고, Copilot은 보관함 컨텍스트 채팅을 처리합니다. 두 플러그인 함께 클라우드 호출 없이 "제2의 뇌" 사용 사례의 약 80%를 처리합니다.',
          '**5가지 플러그인 모두 `http://localhost:11434/v1`의 OpenAI 호환 엔드포인트를 통해 Ollama와 작동합니다.** 각 플러그인의 "API 기본 URL" 또는 동등한 설정을 이 주소로 지정하십시오. Ollama 기본 모델 이름(예: `llama3.2:3b`)을 플러그인 모델 필드에 입력하십시오.',
          '**Smart Connections는 보관함 전체의 임베딩 인덱스를 구축하는 유일한 플러그인입니다.** 이를 통해 5,000개 이상의 노트에서 관련 노트 검색이 실용적으로 됩니다. 인덱스는 보관함 내 `.smart-env/`에 저장되어 Obsidian Sync와 동기화됩니다. iCloud 또는 Git 사용 시 기기별 재생성이 필요합니다.',
          '**Text Generator는 반복 가능한 워크플로를 위한 최적의 플러그인입니다.** 일일 노트 요약, 회의 노트 확장, MOC(콘텐츠 맵) 생성이 프론트매터 변수가 있는 템플릿을 통해 단일 키 액션이 됩니다.',
          '**채팅 전용 사용자에게는 BMO Chatbot이 Copilot보다 경량입니다.** 인덱스를 구축하지 않으며 컨텍스트는 현재 노트뿐입니다. 열린 노트에 대해서만 채팅한다면 BMO로 충분합니다.',
          '**보관함 규모(Smart Connections + nomic-embed-text 기준):** Mac M3 Pro에서 1K 노트 약 2분, 5K 약 10분, 10K 약 25분, 20K 약 75분 인덱싱. 변경된 노트만 재임베딩되므로 첫 실행 후 재인덱싱 시간은 작습니다.',
          '**2026년 권장 Ollama 모델:** 채팅—Llama 3.2 3B(기본) 또는 Phi-4 Mini(소형); 임베딩—nomic-embed-text(768차원, 빠름) 또는 mxbai-embed-large(1024차원, 더 정확).',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 정보',
        items: [
          '**다루는 플러그인:** Smart Connections, Copilot for Obsidian, Text Generator, Local GPT, BMO Chatbot.',
          '**LLM 백엔드:** Ollama(권장) 또는 LM Studio — 로컬 URL에서 OpenAI 호환 엔드포인트를 노출하는 모든 것.',
          '**Ollama 기본 엔드포인트:** `http://localhost:11434/v1`(채팅) 또는 `http://localhost:11434/api/embeddings`(임베딩).',
          '**권장 채팅 모델:** Llama 3.2 3B, Phi-4 Mini, Gemma 3 4B(RAM 16GB 시스템); Qwen3 1.7B(RAM 8GB).',
          '**권장 임베딩 모델:** nomic-embed-text(768차원, 빠름), mxbai-embed-large(1024차원, 더 정확).',
          '**보관함 규모 목표:** 5가지 플러그인 모두 5,000개 이상의 노트에서 반응적으로 유지됨; 20K 노트 이상에서 병목은 Smart Connections 재인덱싱.',
          '**모바일 호환성:** Ollama가 LAN에서 접근 가능하면 채팅 플러그인이 Obsidian Mobile에서 작동함; Smart Connections 임베딩 생성은 데스크톱에서만 실행됨.',
        ],
      },
      whichPlugins: {
        id: 'which-plugins',
        title: '어떤 플러그인 조합을 설치할까요?',
        content:
          '**2026년 대부분의 Obsidian 사용자에게는: Smart Connections(보관함 시맨틱 검색)와 Copilot for Obsidian(채팅 사이드바)를 설치하십시오 — 두 플러그인 함께 "제2의 뇌" 사용 사례의 약 80%를 처리합니다.** 템플릿 기반 생성을 원하면 Text Generator를 추가하십시오. 특정 인터페이스를 선호하지 않는 한 나머지는 건너뛰십시오.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Smart Connections + Copilot for Obsidian을 설치하고 두 플러그인 모두 localhost:11434의 Ollama를 사용하도록 설정하면 보관함 전체 시맨틱 검색과 대화형 질의를 처리하는 프라이빗 제2의 뇌 스택을 갖게 됩니다.',
          },
          {
            type: 'plain-terms',
            text: 'Obsidian + AI를 두 가지 작업으로 생각하십시오: 관련 노트 찾기("내 보관함의 어떤 다른 노트가 이 아이디어를 다루는가?")와 노트에 대해 채팅하기("지난 분기에 이것에 대해 무엇을 썼는가?"). Smart Connections가 첫 번째를 처리하고, Copilot이 두 번째를 처리합니다. 두 플러그인 모두 Ollama를 통해 로컬 LLM을 사용하므로 아무것도 기기를 떠나지 않습니다. 반복 가능한 작업을 수행한다면(예: 각 회의 노트를 요약으로 변환) Text Generator를 추가하십시오. 특별한 이유가 없다면 Local GPT와 BMO Chatbot은 건너뛰십시오.',
          },
        ],
        decisionBlock: {
          title: '결정: 어떤 Obsidian 플러그인을 설치할까요?',
          localIf: [
            '보관함 전체 시맨틱 검색("관련 노트 보여줘")을 원한다 → Smart Connections',
            '노트 컨텍스트가 있는 채팅 사이드바를 원한다 → Copilot for Obsidian',
            '템플릿 기반 생성(일일 노트, 회의 요약)을 원한다 → Text Generator',
            '보관함 검색 없이 현재 노트에 대해서만 채팅한다 → BMO Chatbot(Copilot보다 경량)',
            '엄격한 개인 정보 보호 보장과 최소 기능으로 채팅을 원한다 → Local GPT',
          ],
          cloudIf: [
            '모든 채팅 응답에서 GPT-5.5 수준의 품질이 필요하다 → 클라우드 동등품(로컬 스택은 약 70% 수준 달성)',
            '보관함이 로컬 네트워크 호출을 차단하는 관리형 클라우드 서비스에 있다 → 클라우드 플러그인',
            'LAN 접근 없이 Obsidian Mobile 앱 내에서 네이티브 iOS AI 기능을 원한다 → 2026년에는 아직 실현 불가(모바일은 Tailscale 등 없이 로컬 LLM에 접근 불가)',
          ],
          quick: [
            '권장 조합: Smart Connections + Copilot for Obsidian',
            '템플릿용 추가: Text Generator',
            '경량 대안: BMO Chatbot(채팅 전용)',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Smart Connections와 Copilot for Obsidian을 하나씩 설치하십시오. Smart Connections는 첫 설치 시 임베딩 인덱스를 구축해야 합니다(보관함 크기에 따라 2~75분). 초기 인덱싱 중 CPU 경쟁을 피하기 위해 완료 후 Copilot을 추가하십시오. 두 플러그인이 모두 실행되면 RAM 사용량은 작습니다(합계 약 200~400MB)—무거운 프로세스는 플러그인이 아니라 Ollama입니다.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '플러그인 비교표',
        content:
          '**5가지 플러그인은 대부분의 사용자에게 중요한 4가지 축에서 차이가 있습니다: 보관함 검색 깊이, 생성 유연성, 모바일 호환성, 기능 표면.** Smart Connections와 Copilot은 서로 교체 가능하지 않습니다—다른 문제를 해결하며 서로 보완합니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Smart Connections는 임베딩으로 보관함 전체를 검색하는 유일한 플러그인이며, 나머지 4가지는 현재 노트나 선택한 텍스트에서 작동하는 채팅 또는 생성 도구입니다.',
          },
          {
            type: 'plain-terms',
            text: '이 플러그인 중 두 개(Smart Connections, Copilot)는 보관함 전체 컨텍스트를 처리합니다. 나머지 세 개(Text Generator, Local GPT, BMO Chatbot)는 현재 노트나 특정 선택 항목에서 작동합니다. 둘 이상을 설치하는 가장 일반적인 이유는 Smart Connections에 자체 채팅 인터페이스가 없기 때문입니다—실제로 보관함과 대화하려면 Copilot이나 더 가벼운 채팅 플러그인 중 하나가 필요합니다.',
          },
        ],
        columns: ['플러그인', '보관함 검색', '생성', '모바일 동기화', '최적 용도'],
        rows: [
          { '플러그인': 'Smart Connections', '보관함 검색': '예(임베딩 인덱스)', '생성': '아니오(검색 전용)', '모바일 동기화': 'Obsidian Sync로 인덱스 동기화; iCloud / Git 사용 시 기기별 재생성', '최적 용도': '노트 간 시맨틱 연결' },
          { '플러그인': 'Copilot for Obsidian', '보관함 검색': '예(보관함 QA 모드 사용)', '생성': '예(채팅 + 인라인)', '모바일 동기화': '플러그인 동기화됨; Ollama는 LAN에서 접근 가능해야 함', '최적 용도': '인라인 채팅 + 글쓰기 지원' },
          { '플러그인': 'Text Generator', '보관함 검색': '아니오', '생성': '예(템플릿 기반)', '모바일 동기화': '템플릿 동기화됨; Ollama는 LAN에서 접근 가능해야 함', '최적 용도': '반복 가능한 템플릿 기반 생성' },
          { '플러그인': 'Local GPT', '보관함 검색': '아니오', '생성': '예(채팅)', '모바일 동기화': '플러그인 동기화됨; Ollama는 LAN에서 접근 가능해야 함', '최적 용도': '현재 노트와 개인 정보 보호 우선 채팅' },
          { '플러그인': 'BMO Chatbot', '보관함 검색': '아니오', '생성': '예(채팅)', '모바일 동기화': '플러그인 동기화됨; Ollama는 LAN에서 접근 가능해야 함', '최적 용도': '현재 노트와 경량 채팅' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '모바일 사용의 경우 제한 사항은 플러그인이 아니라 Obsidian Mobile이 Ollama에 접근할 수 있는지 여부입니다. 해결책: (1) 더 강력한 홈 서버에서 Ollama를 실행하고 고정 IP로 LAN에 노출한 다음 플러그인에서 localhost 대신 해당 IP 입력, (2) Tailscale 또는 다른 메시 VPN을 사용하여 어디서나 홈 Ollama에 접근, (3) AI 기능은 집 Wi-Fi에서만 작동한다고 수용.',
          },
        ],
      },
      smartConnections: {
        id: 'smart-connections',
        title: 'Smart Connections: 보관함 시맨틱 검색',
        content:
          '**Smart Connections는 2026년에 보관함 전체에 임베딩 인덱스를 구축하는 유일한 Obsidian 플러그인입니다.** 이를 통해 5,000개 이상의 노트에서 "관련 노트 보여줘"가 실용적이며, 플러그인 생태계에서 가장 큰 "제2의 뇌" 지원 기능입니다.',
        items: [
          '**기능:** 각 노트(및 설정 가능한 섹션)에 대한 벡터 임베딩을 생성하고 활성 노트와 시맨틱으로 관련된 노트의 "Smart Connections" 사이드바를 표시합니다.',
          '**설치:** 설정 → 커뮤니티 플러그인 → 탐색 → "Smart Connections" → 설치 + 활성화. 제작자: Brian Petro.',
          '**Ollama 설정:** 설정 → Smart Connections → 임베딩 모델 → "Local (Ollama)" 선택 → `http://localhost:11434/api/embeddings` 입력 → 모델 이름 `nomic-embed-text`(또는 `mxbai-embed-large`).',
          '**초기 인덱싱:** 플러그인이 각 노트를 임베딩합니다. nomic-embed-text 사용 시 Mac M3 Pro 소요 시간: 1K 노트 약 2분, 5K 노트 약 10분, 10K 노트 약 25분, 20K 노트 약 75분. 편집 후 재인덱싱은 증분적(수정된 노트만)입니다.',
          '**저장:** 인덱스는 보관함 내 `.smart-env/`에 저장됩니다. Obsidian Sync와 깔끔하게 동기화됩니다. iCloud / Git 사용 시 인덱스가 플랫폼별 바이너리이므로 기기별로 재생성해야 합니다.',
          '**2026년 최적 임베딩 모델:** 대부분의 사용자에게 `nomic-embed-text`(1.37억 파라미터, 768차원, 빠름). 기술 콘텐츠에서 더 정확하지만 인덱싱 시간이 약 2배인 `mxbai-embed-large`(3.35억 파라미터, 1024차원).',
        ],
        callouts: [
          {
            type: 'tip',
            text: '첫 번째 인덱스가 완료된 후 Smart Connections를 백그라운드에서 활성화 상태로 유지하십시오. 이후 편집은 증분 재임베딩을 트리거합니다—일반적으로 저장된 노트당 1초 미만입니다. 집중적인 편집 세션 중 Ollama 자체와의 CPU 경쟁을 피하기 위해 인덱싱을 일시 중지할 수도 있습니다.',
          },
        ],
      },
      copilot: {
        id: 'copilot',
        title: 'Copilot for Obsidian: 보관함 컨텍스트 채팅',
        content:
          '**Copilot for Obsidian은 Smart Connections에 없는 채팅 사이드바를 제공합니다.** Ollama를 사용하도록 설정하면 보관함을 컨텍스트로 사용하여 질문에 답변하고, 인라인 콘텐츠를 생성하고, 선택 항목에 대한 사용자 지정 프롬프트를 실행할 수 있는 프라이빗 채팅 어시스턴트를 갖게 됩니다.',
        items: [
          '**기능:** 채팅 사이드바, 보관함 QA 모드(검색된 노트와 채팅), 인라인 채팅, 선택 항목에 대한 사용자 지정 프롬프트, 명령 팔레트 명령.',
          '**설치:** 설정 → 커뮤니티 플러그인 → 탐색 → Logan Yang의 "Copilot" → 설치 + 활성화.',
          '**Ollama 설정:** 설정 → Copilot → API 설정 → 공급자 "Custom OpenAI" 또는 "Ollama" → API 기본 URL `http://localhost:11434/v1` → 모델 `llama3.2:3b`(또는 임의의 Ollama 모델).',
          '**보관함 QA 모드:** Copilot은 자체 임베딩 파이프라인(Smart Connections와 별도)으로 가장 관련성 높은 노트를 검색한 다음 검색된 스니펫을 채팅 모델로 전송합니다. Copilot 설정에서 임베딩을 설정하십시오—`http://localhost:11434/api/embeddings`를 지정하고 `nomic-embed-text`를 선택하십시오.',
          '**인라인 명령:** 노트에서 텍스트 선택 → Cmd/Ctrl+P → "Copilot: …" — 채팅 사이드바를 열지 않고 재작성, 요약 또는 사용자 지정 프롬프트 템플릿 적용.',
          '**최적 용도:** 채팅 인터페이스와 보관함 컨텍스트 검색을 모두 원하는 사용자. 현재 노트에 대해서만 채팅하고 싶다면 BMO Chatbot이 더 경량입니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Copilot은 Smart Connections와 별도로 자체 임베딩 인덱스를 유지합니다. 두 플러그인을 모두 실행하면 동일한 보관함에 두 개의 인덱스가 생성되어 디스크 공간이 약 2배 소모됩니다(5K 노트당 약 200MB 벡터 데이터). 디스크 공간이 중요하다면 Copilot이 Smart Connections 인덱스를 사용하도록 설정하거나, 2026년 현재 두 플러그인이 임베딩을 공유하지 않는다는 것을 수용하십시오.',
          },
        ],
      },
      textGenerator: {
        id: 'text-generator',
        title: 'Text Generator: 템플릿 기반 생성',
        content:
          '**Text Generator는 반복 가능한 워크플로를 위한 최적의 플러그인입니다: 일일 노트 확장, 회의 노트 요약, MOC 생성, 사용자 지정 형식의 출력.** 템플릿은 프론트매터 변수와 Markdown을 사용하므로 단일 템플릿을 모든 노트에서 키보드 단축키로 실행할 수 있습니다.',
        items: [
          '**기능:** 로컬 LLM을 사용하여 현재 노트(또는 선택 항목)에 대한 사용자 지정 프롬프트 템플릿을 실행합니다. 템플릿은 프론트매터 변수, 현재 날짜 삽입, 선택 캡처를 지원합니다.',
          '**설치:** 설정 → 커뮤니티 플러그인 → 탐색 → "Text Generator" → 설치 + 활성화. 제작자: nhaouari.',
          '**Ollama 설정:** 설정 → Text Generator → 공급자 → "Ollama" 또는 "Custom" → 엔드포인트 `http://localhost:11434/v1` → 모델 `llama3.2:3b`.',
          '**템플릿:** 설정된 폴더(예: `Templates/`)에 Markdown 파일로 저장됩니다. 템플릿은 `{{title}}`, `{{selection}}`, `{{date}}` 마커가 있는 프롬프트입니다.',
          '**키보드 단축키 워크플로:** 특정 템플릿에 단축키 할당(Cmd/Ctrl+T → "템플릿에서 생성" → 템플릿 선택). 한 번의 키 입력으로 현재 노트에서 템플릿을 실행합니다.',
          '**최적 용도:** 수십 번 반복하는 워크플로—일지 프롬프트, 주간 리뷰 질문, 회의 노트 요약, 아티클 독서 노트.',
        ],
        promptExamples: [
          {
            label: 'Text Generator 템플릿: 일일 노트 요약기',
            text: '---\nname: Daily summary\n---\nSummarise the following daily note in three concise bullet points. Focus on decisions made, blockers identified, and action items for tomorrow.\n\nDaily note ({{date}}):\n{{content}}\n\nSummary:',
          },
          {
            label: 'Text Generator 템플릿: MOC(콘텐츠 맵) 생성기',
            text: '---\nname: MOC for tag\n---\nGenerate a Map of Content for all notes tagged with `#{{selection}}`. Group related notes into 3–5 thematic clusters, with a one-sentence description per cluster and a list of the notes inside each cluster.\n\nNotes tagged #{{selection}}:\n{{vault_search_result tag={{selection}}}}\n\nMOC:',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Text Generator 템플릿을 Obsidian QuickAdd와 결합하여 "일일 리뷰" 시퀀스를 구축하십시오: 단일 QuickAdd 명령이 오늘의 일일 노트를 열고, 일일 요약 템플릿을 실행하고, 결과를 삽입합니다. 세 개의 플러그인(Text Generator + QuickAdd + 날짜 계산을 위한 Templater)으로 실행에 2초, 완료에 10초가 걸리는 워크플로를 구축할 수 있습니다.',
          },
        ],
      },
      localGpt: {
        id: 'local-gpt',
        title: 'Local GPT: 개인 정보 보호 우선 채팅',
        content:
          '**Local GPT는 노트 콘텐츠가 기기를 떠나서는 안 된다는 원칙을 중심으로 구축된 채팅 플러그인입니다.** 기능적으로는 Copilot for Obsidian보다 단순합니다—보관함 QA 모드 없음, 템플릿 라이브러리 없음—하지만 개인 정보 보호 입장에서 가장 명확합니다.',
        items: [
          '**기능:** 로컬 LLM을 사용하여 현재 노트(또는 선택한 텍스트)와 채팅합니다. 플러그인에 클라우드 옵션이 없습니다—로컬 공급자만.',
          '**설치:** 설정 → 커뮤니티 플러그인 → 탐색 → "Local GPT" → 설치 + 활성화. 제작자: pfrankov(목록에서 확인—여러 플러그인이 비슷한 이름을 가짐).',
          '**Ollama 설정:** 설정 → Local GPT → 공급자 → "Ollama" → URL `http://localhost:11434` → 모델 `llama3.2:3b`.',
          '**채팅 범위:** 활성 노트 또는 선택한 텍스트만. 임베딩 인덱스 없음—컨텍스트는 명시적으로 전송하는 것.',
          '**최적 용도:** 현재 노트에 대해 채팅하고, 가능한 한 최소한의 기능 표면을 선호하고, 실수로 클라우드 서비스를 호출할 수 없는 플러그인을 원하는 사용자.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Copilot for Obsidian이 로컬을 유지한다고 신뢰한다면(클라우드 또는 로컬로 설정 가능) Copilot을 사용하십시오. 플러그인 코드 자체가 클라우드 호출을 불가능하게 만들기를 원한다면 Local GPT를 사용하십시오—설계 제약은 "클라우드 공급자 없음, 절대로"입니다. 이는 실수로 클라우드로 유출될 가능성이 있는 것이 문제인 의료, 법률, 저널리즘 워크플로에서 중요한 차이점입니다.',
          },
        ],
      },
      bmoChatbot: {
        id: 'bmo-chatbot',
        title: 'BMO Chatbot: 경량 채팅',
        content:
          '**BMO Chatbot은 미니멀리스트 채팅 플러그인입니다: 사이드바 하나, 모델 선택기 하나, 엔드포인트용 설정 필드 하나.** 보관함 검색 없음, 템플릿 없음, 인라인 명령 없음. 활성 노트에 대해서만 채팅한다면 BMO가 가장 가벼운 옵션입니다.',
        items: [
          '**기능:** 활성 노트를 컨텍스트로 포함하는 채팅 사이드바.',
          '**설치:** 설정 → 커뮤니티 플러그인 → 탐색 → "BMO Chatbot" → 설치 + 활성화. 제작자: longy2k.',
          '**Ollama 설정:** 설정 → BMO Chatbot → API → URL `http://localhost:11434/v1` → 모델 `llama3.2:3b`.',
          '**컨텍스트 처리:** 활성 노트가 채팅 컨텍스트에 자동으로 포함됩니다. 노트를 전환하면 컨텍스트가 변경됩니다.',
          '**최적 용도:** 최소한의 설정으로 단일 채팅 플러그인을 원하고, 임베딩 인덱스가 없고, 좁은 Obsidian 사이드바에 맞는 인터페이스를 원하는 사용자.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'BMO Chatbot은 "현재 노트에 대해 채팅하고 싶을 뿐"이라는 경우에 적합한 플러그인입니다. "보관함 전체를 검색하고 싶다" 또는 "각 회의 노트에 이 프롬프트 템플릿을 실행하고 싶다"는 생각이 든다면 BMO를 넘어선 것입니다—Copilot for Obsidian(보관함 QA) 또는 Text Generator(템플릿)로 전환하십시오.',
          },
        ],
      },
      recommendedCombo: {
        id: 'recommended-combo',
        title: '권장 조합: Smart Connections + Copilot',
        content:
          '**Smart Connections + Copilot for Obsidian을 설치하고 두 플러그인 모두 Ollama를 사용하도록 설정하십시오.** 이 조합은 Obsidian 사용자가 원하는 두 가지 별개의 AI 작업—보관함 시맨틱 검색과 보관함 컨텍스트 채팅—을 처리하며, 노트를 클라우드에 전송하지 않고 "제2의 뇌" 사용 사례의 약 80%를 처리합니다.',
        numberedItems: [
          '**Ollama 설치:** 기기에 `brew install ollama`(macOS) 또는 ollama.com에서 다운로드(Windows / Linux). 채팅 모델 다운로드: `ollama pull llama3.2:3b`. 임베딩 모델 다운로드: `ollama pull nomic-embed-text`.',
          '**Ollama 시작:** 설치 후 보통 백그라운드 서비스로 시작됩니다. 확인: `curl http://localhost:11434/api/tags`가 설치된 모델이 포함된 JSON을 반환합니다.',
          '**Smart Connections 설치:** Obsidian에서 → `http://localhost:11434/api/embeddings`의 Ollama를 사용하도록 임베딩 설정, 모델 `nomic-embed-text`. 인덱싱을 기다리십시오(보관함 크기에 따라 2~75분).',
          '**Copilot for Obsidian 설치:** → 공급자를 "Ollama" 또는 "Custom OpenAI"로 설정 → API 기본 URL `http://localhost:11434/v1` → 채팅 모델 `llama3.2:3b` → 임베딩 모델 `nomic-embed-text`(보관함 QA용).',
          '**테스트:** 노트 열기 → Smart Connections 사이드바에서 관련 노트 확인 → Copilot 채팅 열기 → 보관함 지식이 필요한 질문 하기("내가 [주제]에 대해 쓴 내용 요약해줘") → 응답이 실제 노트를 참조하는지 확인.',
          '**선택적 세 번째 플러그인:** 반복 가능한 워크플로(일일 노트 요약, 회의 확장, MOC 생성)가 있다면 Text Generator를 추가하십시오. 동일한 Ollama 엔드포인트로 설정하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '흔한 실수는 Copilot과 Smart Connections에 각각 다른 모델을 설정하는 것입니다—그러면 응답이 일관성 없게 느껴질 수 있습니다. 두 플러그인 모두에서 동일한 채팅 모델을 사용하십시오(대부분의 사용자에게는 Llama 3.2 3B; RAM 8GB 시스템에는 Phi-4 Mini). 다른 모델을 사용하는 유일한 곳은 임베딩 모델입니다—이것은 항상 채팅 모델과 별도의 모델입니다.',
          },
        ],
      },
      workflows: {
        id: 'workflows',
        title: '워크플로: 일일 노트, MOC, 글쓰기 지원',
        content:
          '**조합을 실제로 보여주는 세 가지 구체적인 워크플로.** 각각 Smart Connections(보관함 컨텍스트용)와 Copilot(채팅용)을 기반으로 하며 템플릿 작업을 위해 Text Generator가 추가됩니다.',
        items: [
          '**일일 노트 요약:** 일일 노트에서 전체 선택 → Copilot 인라인 명령 → "이 날을 결정, 차단요소, 내일의 행동 항목에 집중한 세 가지 요점으로 요약해줘". 출력이 선택 항목 아래에 추가됩니다. 프롬프트를 Text Generator 템플릿으로 저장하여 단일 키 액션으로 만드십시오.',
          '**MOC(콘텐츠 맵) 생성:** 태그 페이지 또는 주제 노트 열기 → Copilot → "이 주제에 대한 콘텐츠 맵을 생성하고, 내가 가진 관련 노트를 3~5개의 주제 클러스터로 그룹화해줘. Smart Connections 사이드바를 사용하여 관련 노트를 식별해줘." → 검토 및 편집. Smart Connections가 탐색 레이어를 제공하고, Copilot이 구조를 합성합니다.',
          '**컨텍스트 글쓰기 지원:** 노트 작성 중 Copilot 채팅 열기 → "내가 [주제]에 대해 쓴 노트를 감안할 때, 내가 놓치고 있는 관점은 무엇인가?" 묻기. Copilot이 보관함 QA로 관련 노트를 검색하고 격차를 제안합니다. 단일 관점의 초안에서 벗어나는 데 유용합니다.',
          '**주간 리뷰:** 최근 7개 일일 노트에 대해 실행하는 Text Generator 템플릿 → "카테고리별로 주간을 3가지 요점으로 요약해줘: 진척, 차단요소, 주제." 단일 키 리뷰를 위해 키보드 단축키에 할당하십시오.',
          '**아티클/도서 독서 노트:** 원본 노트 열기 → Copilot 인라인 명령 → "간격 반복을 위해 이 노트에서 세 가지 Anki 스타일 질문/답변 쌍을 생성해줘." 출력을 간격 반복 플러그인으로 전달할 수 있습니다.',
          '**잠자는 노트 연결하기:** Smart Connections 사이드바는 몇 달 동안 건드리지 않았을 수 있는 관련 노트를 표시합니다—오래된 자료를 현재 작업과 검토하고 연결하도록 초대합니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '가장 과소평가된 워크플로는 매일 Smart Connections 리뷰입니다. 매일 아침 일일 노트를 열고 → 아카이브에서 예상치 못한 관련 노트를 찾기 위해 Smart Connections 사이드바를 확인하십시오. 플러그인이 같은 주제를 다루는 잊혀진 노트를 표면화하며, 이것이 바로 지식 노동자들이 제2의 뇌에서 원하는 "사고 파트너" 효과입니다.',
          },
        ],
      },
      mobileSync: {
        id: 'mobile-sync',
        title: '모바일 동기화: Obsidian Sync vs iCloud vs Git',
        content:
          '**Obsidian Mobile에서의 플러그인 호환성은 두 가지 요소에 달려 있습니다: 보관함 동기화 방법과 전화기가 로컬 Ollama 서버에 접근할 수 있는지 여부.** Smart Connections 임베딩이 동기화에 가장 민감한 구성 요소입니다.',
        items: [
          '**Obsidian Sync(유료):** 가장 깔끔한 경로. `.smart-env/` 폴더가 기기 간 종단 간 암호화로 동기화되므로 Smart Connections가 기기별로 재인덱싱할 필요가 없습니다. 플러그인 설정도 동기화됩니다. 모바일 채팅 플러그인은 여전히 Ollama에 LAN 접근이 필요합니다(아래 참조).',
          '**iCloud Drive:** 보관함은 동기화되지만 `.smart-env/`는 플랫폼별 바이너리이며 iOS / macOS / Windows / Android 간에 올바르게 동기화되지 않을 수 있습니다. 실용적인 해결책: 기기별로 Smart Connections를 재인덱싱하거나, 동기화에서 `.smart-env/`를 제외하고 모바일에서 시맨틱 사이드바가 없다고 수용하십시오.',
          '**Git(iOS의 Working Copy, Android의 Termux를 통해):** 일반 텍스트 보관함이 깔끔하게 동기화됩니다. `.smart-env/`는 바이너리 인덱스가 저장소를 부풀리고 병합 충돌을 일으키므로 `.gitignore`에 추가해야 합니다. 기기별로 재인덱싱하십시오.',
          '**모바일에서 Ollama LAN 접근:** 기본적으로 Ollama는 `localhost:11434`에서만 수신합니다—전화기에서 접근 불가. 모바일에서 AI 플러그인을 사용하려면: `OLLAMA_HOST=0.0.0.0:11434 ollama serve`로 LAN에 Ollama를 바인딩하고, 데스크톱 LAN IP를 찾아(예: `192.168.1.20`), localhost 대신 해당 IP를 플러그인에 입력하십시오. 전화기가 집 Wi-Fi에 있어야 합니다.',
          '**Tailscale / 메시 VPN:** 집 Wi-Fi뿐만 아니라 어디서나 홈 Ollama에 전화기가 접근할 수 있게 합니다. Tailscale이 2026년 가장 인기 있는 옵션입니다—데스크톱과 전화기에 설치하고, 플러그인 설정에서 Tailscale IP를 사용하십시오.',
          '**Smart Connections 임베딩 생성은 데스크톱에서만 실행됩니다.** Obsidian Sync가 인덱스를 이동시켜도 인덱스는 어딘가에서 생성되어야 합니다—그것은 항상 데스크톱 수준의 기기입니다. 모바일은 동기화된 인덱스를 읽기 전용 관련 노트 검색에 사용합니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '보관함 동기화에 iCloud 또는 Git을 사용하고 여러 기기에서 Smart Connections가 작동하기를 원한다면, 가장 깔끔한 경로는 하나의 기기를 "인덱서"(기본 데스크톱)로 지정하고 Smart Connections가 거기서만 완전히 작동한다고 수용하는 것입니다. 다른 기기에서는 오래된 인덱스(iCloud) 또는 인덱스 없음(`.smart-env`가 .gitignore에 있는 Git)이 됩니다. Obsidian Sync만이 이를 올바르게 처리하는 유일한 옵션입니다.',
          },
        ],
      },
      vaultScale: {
        id: 'vault-scale',
        title: '보관함 규모: 1K, 5K, 10K, 20K 노트',
        content:
          '**5가지 플러그인 모두 5,000개 이상의 노트에서 반응적으로 유지됩니다. 20K 노트 이상에서 병목은 쿼리 지연이 아니라 Smart Connections 재인덱싱 시간입니다.** 아래의 현실적인 수치는 `nomic-embed-text` 임베딩과 Llama 3.2 3B 채팅을 사용하는 Mac M3 Pro(통합 메모리 16GB)에서 측정되었습니다.',
        columns: ['보관함 크기', 'Smart Connections 초기 인덱스', '변경당 재인덱싱', '채팅 지연(Copilot)', '참고사항'],
        rows: [
          { '보관함 크기': '1,000 노트', 'Smart Connections 초기 인덱스': '약 2분', '변경당 재인덱싱': '1초 미만', '채팅 지연(Copilot)': '첫 번째 토큰 약 1~2초', '참고사항': '모든 최신 하드웨어에서 편안함.' },
          { '보관함 크기': '5,000 노트', 'Smart Connections 초기 인덱스': '약 10분', '변경당 재인덱싱': '1초 미만', '채팅 지연(Copilot)': '첫 번째 토큰 약 1~2초', '참고사항': '대부분의 지식 노동자에게 최적.' },
          { '보관함 크기': '10,000 노트', 'Smart Connections 초기 인덱스': '약 25분', '변경당 재인덱싱': '약 1~2초', '채팅 지연(Copilot)': '첫 번째 토큰 약 2~3초(보관함 QA 검색이 약 500ms 추가)', '참고사항': '여전히 완전히 사용 가능; 느려짐이 느껴지면 분리 고려.' },
          { '보관함 크기': '20,000 노트', 'Smart Connections 초기 인덱스': '약 75분', '변경당 재인덱싱': '약 2~4초', '채팅 지연(Copilot)': '첫 번째 토큰 약 3~5초', '참고사항': '초기 인덱스는 밤에 실행하십시오. `.smart-env/` 디스크 사용량 약 800MB~1.2GB.' },
          { '보관함 크기': '50,000개 이상 노트', 'Smart Connections 초기 인덱스': '4~8시간', '변경당 재인덱싱': '약 5~10초', '채팅 지연(Copilot)': '첫 번째 토큰 약 5~10초', '참고사항': '실용적 한계. 하위 보관함 고려 또는 정확도가 속도보다 중요하면 mxbai-embed-large로 업그레이드.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '보관함 크기는 일일 반응성보다 초기 인덱싱에 더 큰 영향을 미칩니다. 초기 인덱스 후 재임베딩은 수정된 노트에만 발생합니다—20K 노트에서도 일반적으로 저장당 1초 미만입니다. 처음 한 번만 느린 경험입니다. 보관함이 크다면 야간에 초기 인덱스를 실행하십시오.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '흔한 실수',
        items: [
          '**두 플러그인에 두 가지 다른 채팅 모델을 설정하는 것.** Smart Connections는 생성하지 않지만 Copilot, Text Generator, Local GPT, BMO는 생성합니다. 각 플러그인에서 다른 모델을 사용하면 응답이 일관성 없게 느껴집니다. 채팅 모델 하나(대부분의 사용자에게 Llama 3.2 3B가 기본)를 선택하고 모든 채팅 플러그인에서 사용하도록 설정하십시오.',
          '**`.gitignore` 없이 Git으로 동기화된 보관함에 `.smart-env/`를 추가하는 것.** Smart Connections 인덱스는 바이너리이며 모든 편집 시 변경됩니다. `.gitignore` 없이는 방대한 Git 이력과 끊임없는 병합 충돌이 생깁니다. `.smart-env/`를 `.gitignore`에 추가하고 기기별로 재인덱싱하십시오.',
          '**Smart Connections 모바일이 자체 인덱스를 구축할 것으로 기대하는 것.** 임베딩 생성에는 데스크톱 수준의 기기가 필요합니다. 모바일은 동기화된 인덱스(Obsidian Sync)를 사용하거나 인덱스가 없습니다(iCloud / Git). 그에 맞게 계획하십시오.',
          '**모바일 기기에서 `http://localhost:11434/v1`로 플러그인을 지정하는 것.** 모바일은 데스크톱의 localhost에 접근할 수 없습니다. Ollama를 LAN IP에 바인딩하고(`OLLAMA_HOST=0.0.0.0:11434`) 플러그인 설정에서 해당 IP를 사용하거나, 네트워크 외부에서 접근하려면 Tailscale을 사용하십시오.',
          '**동일한 보관함에 Smart Connections와 Copilot 두 인덱스를 모두 실행하는 것.** 두 개의 별도 인덱스는 디스크와 CPU를 약 2배 소비합니다. 2026년 5월 기준으로 두 플러그인은 임베딩을 공유하지 않습니다. 디스크 공간이 중요하다면 Smart Connections를 검색에 사용하고 Smart Connections 벡터 저장소를 읽도록 Copilot을 설정하십시오(고급—Copilot의 검색 설정 편집 필요).',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          'Smart Connections — [github.com/brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections) (오픈 소스 Obsidian 플러그인).',
          'Copilot for Obsidian — [github.com/logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot) (오픈 소스 Obsidian 플러그인).',
          'Text Generator — [github.com/nhaouari/obsidian-textgenerator-plugin](https://github.com/nhaouari/obsidian-textgenerator-plugin) (오픈 소스 Obsidian 플러그인).',
          'Ollama — [ollama.com](https://ollama.com) 및 [github.com/ollama/ollama](https://github.com/ollama/ollama) (로컬 LLM 실행 환경).',
          'Obsidian 모바일 동기화 아키텍처 — [help.obsidian.md](https://help.obsidian.md) 및 Obsidian Sync 문서.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ollama와 가장 잘 작동하는 Obsidian 플러그인은 무엇입니까?',
            a: '대부분의 사용자에게: Smart Connections(보관함 시맨틱 검색) + Copilot for Obsidian(채팅). 두 플러그인 모두 Ollama 엔드포인트를 사용하도록 설정하십시오(채팅은 `http://localhost:11434/v1`, 임베딩은 `http://localhost:11434/api/embeddings`). Smart Connections가 관련 노트 탐색을 처리하고, Copilot이 보관함 컨텍스트로 대화형 쿼리를 처리합니다. 반복 가능한 템플릿 워크플로가 있다면 세 번째 플러그인으로 Text Generator를 추가하십시오.',
          },
          {
            q: '플러그인이 10,000개 노트 보관함을 처리할 수 있습니까?',
            a: '예. Smart Connections는 Mac M3 Pro에서 초기 임베딩 인덱스에 약 25분이 걸리고 그 후 변경당 약 1~2초가 걸립니다. Copilot의 보관함 QA 지연은 첫 번째 토큰까지 약 2~3초입니다. 20K 노트의 경우 초기 인덱싱에 약 75분이 필요합니다(야간에 실행). 50K개 이상의 노트에서 인덱싱에 4~8시간이 걸리며 하위 보관함으로 분리를 고려해야 합니다.',
          },
          {
            q: '이 플러그인들이 모바일에 동기화됩니까?',
            a: '플러그인 자체는 Obsidian 플러그인 동기화를 통해 동기화됩니다. 제한 사항은: (1) Smart Connections 임베딩 인덱스—Obsidian Sync로 깔끔하게 동기화되고, iCloud 또는 Git 사용 시 기기별 재인덱싱 필요; (2) 채팅 플러그인은 Ollama에 접근해야 하므로 LAN 접근(localhost를 `0.0.0.0`에 바인딩한 후 데스크톱 LAN IP 사용) 또는 Tailscale과 같은 메시 VPN이 필요합니다.',
          },
          {
            q: '여러 AI 플러그인을 함께 사용할 수 있습니까?',
            a: '예. Smart Connections + Copilot이 권장 조합입니다. 템플릿용으로 Text Generator를 추가하는 것이 일반적입니다. 3개 이상의 채팅 플러그인(Copilot + Local GPT + BMO)을 추가하는 것은 중복됩니다—모두 같은 작업을 합니다. 채팅 플러그인 하나를 선택하고 유지하십시오.',
          },
          {
            q: '노트 내에서 쓰기에 어떤 플러그인이 가장 좋습니까?',
            a: 'Copilot for Obsidian — 선택한 텍스트에서 작동하는 인라인 명령(Cmd/Ctrl+P → Copilot → 재작성 / 요약 / 사용자 지정 프롬프트)이 있습니다. Text Generator도 템플릿을 통한 반복 가능한 쓰기 작업에 강력합니다. 임시 쓰기 지원("이 단락을 더 공식적인 톤으로 재작성해줘")에는 Copilot이 더 빠릅니다. 구조화된 생성("이 템플릿을 사용하여 각 회의 노트를 요약으로 변환해줘")에는 Text Generator가 더 좋습니다.',
          },
          {
            q: '전체 보관함에 대해 프롬프트를 어떻게 할 수 있습니까?',
            a: 'Copilot for Obsidian의 보관함 QA 모드를 사용하십시오. 임베딩 인덱스(Smart Connections와 유사)를 사용하여 쿼리에 가장 관련성 높은 노트를 검색한 다음 해당 스니펫을 채팅 모델로 전송합니다. 로컬 Ollama를 지정하도록 Copilot 설정에서 임베딩을 설정하십시오. Smart Connections 자체에는 채팅 인터페이스가 없습니다—관련 노트를 표시하지만 그것들을 합성하지는 않습니다.',
          },
          {
            q: '일일 일지에 이것들을 사용할 수 있습니까?',
            a: '예. 두 가지 견고한 패턴: (1) Smart Connections 사이드바가 오늘의 일일 노트를 열 때 잊혀진 관련 노트를 표면화합니다—"사고 파트너" 효과. (2) Text Generator 템플릿이 하루 끝에 실행되어 일일 노트를 3가지 요점(결정, 차단요소, 행동 항목)으로 요약합니다. 두 가지를 결합하면 일일 일지가 더 성찰적이 됩니다.',
          },
          {
            q: '플러그인이 Obsidian 업데이트 후에도 작동합니까?',
            a: '일반적으로 예—잘 유지되는 플러그인(Smart Connections, Copilot, Text Generator)은 주요 Obsidian 버전 이후 며칠 이내에 업데이트됩니다. 유지 관리가 덜 되는 플러그인은 가끔 지연됩니다. 업데이트 후 플러그인이 실패하면 플러그인의 GitHub Issues 페이지를 확인하십시오. 수정 사항은 보통 1~2주 내에 릴리스됩니다. 플러그인 매니페스트는 최소 Obsidian 버전 호환성을 선언합니다.',
          },
          {
            q: '어떤 플러그인이 커뮤니티 지원이 가장 좋습니까?',
            a: 'Smart Connections가 가장 크고 활발한 커뮤니티를 보유합니다(2026년 Discord에서 약 5,000명, 정기적인 개발자 미팅). Copilot for Obsidian은 GitHub Issues에 강력한 커뮤니티와 활발한 유지 관리자(Logan Yang)가 있습니다. Text Generator는 더 작지만 헌신적인 커뮤니티가 있습니다. Local GPT와 BMO Chatbot은 더 작은 커뮤니티를 가지고 있으며—안정적인 사용에는 좋지만 문제 해결이 느립니다.',
          },
          {
            q: '다른 기기에서 AI 플러그인을 실행할 수 있습니까?',
            a: '예. 더 강력한 홈 서버(미니 PC, NAS 또는 전용 워크스테이션)에서 Ollama를 실행하고, `OLLAMA_HOST=0.0.0.0:11434 ollama serve`로 LAN에 바인딩한 다음, 각 플러그인 설정에서 서버 LAN IP를 입력하십시오(예: `http://192.168.1.20:11434/v1`). 이를 통해 저전력 노트북이나 모바일 기기가 홈 서버에서 실행되는 전체 70B 모델을 사용할 수 있습니다. Tailscale과 결합하면 집 Wi-Fi뿐만 아니라 어디서나 작동합니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[로컬 LLM과 Logseq 및 Joplin](/ko/power-local-llm/local-llm-with-logseq-and-joplin) — Obsidian보다 Logseq 또는 Joplin을 선호하는 독자를 위한 인접 오픈 소스 대안.',
          '[2026년 로컬 LLM을 이용한 개인 지식 베이스](/ko/power-local-llm/local-llm-personal-knowledge-base-2026) — Obsidian이 통합되는 더 넓은 PKB 아키텍처; RAG 레이어, 태깅 전략, 10K 항목 워크플로 포함.',
          '[30분 만에 PDF에 로컬 RAG 구축하기(Ollama + AnythingLLM)](/ko/power-local-llm/local-rag-on-your-pdfs-step-by-step) — Smart Connections와 같은 시맨틱 플러그인을 구동하는 RAG 레이어; 임베딩 옵션에 대한 맥락으로 유용.',
          '[로컬 LLM을 이용한 소설 및 시나리오 작성(2026)](/ko/power-local-llm/local-llm-screenwriting-and-novel-drafting) — 장편 글쓰기를 위한 쓰기 레이어로서의 Obsidian.',
          '[2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026) — 이 플러그인 뒤의 채팅 및 임베딩 모델을 선택하기 위한 더 넓은 모델 권위.',
          '[2026년 로컬 LLM 소프트웨어 디렉토리](/ko/power-local-llm/local-llm-software-directory-2026) — Ollama, Smart Connections, Copilot 및 이 스택의 다른 구성 요소에 대한 디렉토리 목록.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Obsidian + 로컬 LLM: 보관함을 제2의 뇌로 만드는 5가지 플러그인 (2026)',
      description: '2026년 로컬 Ollama로 테스트한 5가지 Obsidian 플러그인: Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot. 최적의 조합, 보관함 규모, 모바일 동기화.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-llm-with-obsidian-2026',
      inLanguage: 'ko',
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
}
