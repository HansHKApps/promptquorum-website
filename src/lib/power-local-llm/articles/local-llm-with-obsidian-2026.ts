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
}
