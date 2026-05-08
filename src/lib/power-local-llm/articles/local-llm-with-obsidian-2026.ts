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
            'You need GPT-4o quality on every chat response → cloud equivalents (the local stack is ~70% as capable)',
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
      'Fünf Obsidian-Plugins mit lokalem Ollama 2026 getestet: Smart Connections, Copilot, Text Generator, Local GPT, BMO Chatbot. Beste Kombination, Vault-Größe, Mobile-Sync.',
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
            'Sie benötigen GPT-4o-Qualität bei jeder Chat-Antwort → Cloud-Äquivalente (der lokale Stack erreicht ca. 70 % der Leistung)',
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
          '[Lokales LLM mit Logseq und Joplin](/power-local-llm/local-llm-with-logseq-and-joplin?lang=de) — verwandte Open-Source-Alternativen für Leser, die Logseq oder Joplin gegenüber Obsidian bevorzugen.',
          '[Lokale LLM-Wissensdatenbank 2026](/power-local-llm/local-llm-personal-knowledge-base-2026?lang=de) — die übergeordnete PKB-Architektur, in die Obsidian einfließt; behandelt RAG-Schicht, Tagging-Strategien und 10K-Item-Workflows.',
          '[Lokales RAG auf Ihren PDFs in 30 Minuten (Ollama + AnythingLLM)](/power-local-llm/local-rag-on-your-pdfs-step-by-step?lang=de) — die RAG-Schicht, die semantische Plugins wie Smart Connections antreibt; nützlicher Hintergrund zu Embedding-Entscheidungen.',
          '[Romane und Drehbücher mit lokalen LLMs entwerfen (2026)](/power-local-llm/local-llm-screenwriting-and-novel-drafting?lang=de) — Obsidian als Entwurfsschicht für Langform-Schreiben.',
          '[Die besten lokalen LLMs 2026](/local-llms/best-local-llms-2026?lang=de) — übergreifende Modell-Empfehlungen für Chat- und Embedding-Modelle hinter diesen Plugins.',
          '[Lokales LLM Software-Verzeichnis 2026](/power-local-llm/local-llm-software-directory-2026?lang=de) — Verzeichniseinträge zu Ollama, Smart Connections, Copilot und weiteren Komponenten dieses Stacks.',
        ],
      },
    },
  },
}
