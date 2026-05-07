// Power Local LLM — SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend (2026)
// Slug: sillytavern-vs-agnai-vs-risuai-roleplay
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend (2026)',
    seoTitle: 'SillyTavern vs Agnai vs RisuAI: Best Local Roleplay UI 2026',
    intro:
      'SillyTavern, Agnai, and RisuAI are the three credible roleplay frontends for local LLMs in 2026 — each pairs cleanly with Ollama, llama.cpp, or any OpenAI-compatible endpoint, and each takes a different position on feature density. SillyTavern is the deep customisation pick (the one most experienced users land on); Agnai is the multi-user pick (the only one with a real shared-server mode); RisuAI is the lighter alternative when SillyTavern feels overbuilt. This guide compares them on character cards, persona management, lore books, group chat, model support, privacy, and platform reach.',
    metaDescription:
      'Compare SillyTavern, Agnai, and RisuAI for local LLM roleplay and character chat. Features, model support, privacy, and community ecosystem compared.',
    twitterDescription:
      '3 local roleplay frontends compared: SillyTavern (deep customisation), Agnai (multi-user), RisuAI (lighter alternative). Character cards, lore books, group chat, privacy.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Command R+ 104B',
      'Hermes 3 Llama 3.3',
      'Mistral Large',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      'Roleplay writers, character designers, fiction collaborators, and creative-writing teams running local LLMs through dedicated chat frontends with character cards, persona management, and group scenes.',
    readTime: '13 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local roleplay frontend',
    targetKeywords: [
      'sillytavern vs agnai',
      'agnai vs risuai',
      'best local roleplay ui',
      'sillytavern setup ollama',
      'character card local llm',
      'risuai vs sillytavern',
    ],
    leadAnswerBlock:
      '**SillyTavern is the right pick for ~80% of users — deepest character-card support, the largest community ecosystem, and the most powerful customisation surface (extensions, presets, regex replacements, world info). Agnai is the only one of the three with credible multi-user support, so it is the right pick for shared servers, collaborative roleplay, and small group projects. RisuAI is the lighter pick when SillyTavern\'s feature density is the friction — same character-card spec, smaller surface, easier first-run. All three speak the Tavern v2 character-card spec, all three pair with Ollama or any OpenAI-compatible endpoint, all three run fully local with no telemetry. Pick by workflow shape: solo writer with deep customisation needs → SillyTavern; group of writers sharing characters → Agnai; first-time user who wants to start chatting today → RisuAI.**',
    quickAnswerTop: {
      en: {
        question: 'Which is the best local LLM roleplay frontend in 2026: SillyTavern, Agnai, or RisuAI?',
        answer:
          'SillyTavern is the default pick for most users — deepest features, largest community, most extensions. Agnai is the only credible multi-user choice if you share characters and chats with collaborators. RisuAI is the lighter alternative for users who find SillyTavern overbuilt. All three are open-source, all three load Tavern v2 character cards, all three connect to Ollama and OpenAI-compatible endpoints. SillyTavern wins on customisation depth (extensions, regex replacements, world info, advanced presets); Agnai wins on shared-server mode; RisuAI wins on first-run simplicity. The decision is workflow shape, not raw quality — all three produce the same conversation when paired with the same model.',
        bullets: [
          'SillyTavern — deepest features, largest community, default pick for solo users with customisation needs.',
          'Agnai — only frontend with credible multi-user support; pick for shared servers and collaborative roleplay.',
          'RisuAI — lightest of the three; pick when SillyTavern\'s feature density is the friction.',
          'All three speak Tavern v2 character cards; cards from one work in the others.',
          'All three connect to Ollama, llama.cpp, LM Studio, vLLM, and any OpenAI-compatible endpoint.',
          'All three are open-source and run fully local; no telemetry by default in any of them.',
          'Model recommendations: Llama 3.3 70B (best all-round), Hermes 3 (uncensored), Command R+ (dialogue), Qwen3 32B (24 GB-rig default).',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Three-Frontend Comparison', anchor: '#comparison' },
      { label: 'SillyTavern: Deep Dive', anchor: '#sillytavern' },
      { label: 'Agnai: Deep Dive', anchor: '#agnai' },
      { label: 'RisuAI: Deep Dive', anchor: '#risuai' },
      { label: 'Character Card Format (Tavern v2)', anchor: '#character-cards' },
      { label: 'Model Recommendations Per Frontend', anchor: '#models' },
      { label: 'Privacy: Which Frontend Phones Home', anchor: '#privacy' },
      { label: 'Decision: Pick Your Frontend', anchor: '#decision' },
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
          '**SillyTavern is the default pick for ~80% of users in 2026.** Deepest character-card features, largest extension ecosystem, most customisation surface. The frontend most experienced roleplay users settle on after trying alternatives.',
          '**Agnai is the only credible multi-user pick.** Shared server mode lets multiple writers connect to the same instance, share characters, and collaborate on long-running chats. The right pick for small writing groups, friend circles, and shared-character communities.',
          '**RisuAI is the lighter alternative.** Same Tavern v2 character-card support, smaller feature surface, easier first-run. The pick when SillyTavern feels overbuilt or you want a faster path to "type a message and get a reply".',
          '**All three speak the Tavern v2 character-card spec.** A card built in SillyTavern works in Agnai and RisuAI without conversion. Migration between frontends is trivial.',
          '**All three pair with Ollama, llama.cpp, LM Studio, and any OpenAI-compatible endpoint.** None lock you into a specific model backend; switching backends is a config change.',
          '**Privacy: all three run fully local with no telemetry by default.** Optional cloud features in each (translation, image generation) phone home only when explicitly enabled. Verify with network monitoring if you need formal audit-grade evidence.',
          '**Model pick is more important than frontend pick.** A great frontend on a small general-purpose model produces flat dialogue; a basic frontend on Llama 3.3 70B produces lively scenes. See [Best Local LLMs for Creative Writing 2026](/power-local-llm/best-local-llm-creative-writing-2026) for the model side.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**SillyTavern** — Node.js + browser UI, hosted locally. Deepest customisation, largest community.',
          '**Agnai** — Node.js + browser UI; runs locally or as shared server. Only multi-user pick of the three.',
          '**RisuAI** — Tauri/Electron desktop app; lighter feature set, simplest first-run.',
          '**Character card spec:** all three load Tavern v2 (the standard); cross-compatible.',
          '**Model backends:** Ollama, llama.cpp, LM Studio, vLLM, any OpenAI-compatible endpoint, plus cloud APIs (optional).',
          '**Privacy default:** local-only, no telemetry, no analytics in any of the three by default. Optional cloud features must be enabled explicitly.',
          '**Platforms:** SillyTavern and Agnai run on macOS, Windows, Linux, and Termux/Android. RisuAI runs on macOS, Windows, Linux, iOS, and Android.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Three-Frontend Comparison',
        content:
          '**Same character cards, same model backends — different feature density and target user.** The table below maps the decision-relevant differences.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SillyTavern is the deep-customisation pick for solo users; Agnai is the multi-user pick for shared servers; RisuAI is the lighter pick for first-time users — all three load the same Tavern v2 character cards and pair with the same model backends.',
          },
          {
            type: 'plain-terms',
            text: 'Pick SillyTavern unless you have a specific reason not to — it is what most experienced users settle on. Pick Agnai if you want to share a server with other writers. Pick RisuAI if SillyTavern feels overbuilt and you want to start chatting in 5 minutes. Switching later is easy because all three load the same character cards.',
          },
        ],
        columns: ['Feature', 'SillyTavern', 'Agnai', 'RisuAI'],
        rows: [
          { 'Feature': 'Primary surface', 'SillyTavern': 'Local Node.js + browser', 'Agnai': 'Local Node.js + browser, or shared server', 'RisuAI': 'Tauri/Electron desktop app + mobile' },
          { 'Feature': 'Setup time (first run)', 'SillyTavern': '~15 minutes', 'Agnai': '~10 minutes (single-user); ~30 minutes (server)', 'RisuAI': '~5 minutes' },
          { 'Feature': 'Character cards', 'SillyTavern': 'Tavern v2 (full spec) + extensions', 'Agnai': 'Tavern v2', 'RisuAI': 'Tavern v2 + own format' },
          { 'Feature': 'Persona / user profile', 'SillyTavern': 'Native, multiple personas, per-character', 'Agnai': 'Native, multi-user', 'RisuAI': 'Native, simpler' },
          { 'Feature': 'Lore books / world info', 'SillyTavern': 'Native, very flexible (recursive scanning)', 'Agnai': 'Native, simpler scanning', 'RisuAI': 'Native, simpler scanning' },
          { 'Feature': 'Group chat (multiple characters)', 'SillyTavern': 'Native, mature', 'Agnai': 'Native', 'RisuAI': 'Native, simpler' },
          { 'Feature': 'Multi-user / shared server', 'SillyTavern': 'No (single user)', 'Agnai': 'Yes (the differentiator)', 'RisuAI': 'No (single user)' },
          { 'Feature': 'Extensions / plugins', 'SillyTavern': 'Largest ecosystem (regex, presets, custom UIs)', 'Agnai': 'Smaller', 'RisuAI': 'Plugin system, smaller library' },
          { 'Feature': 'Backend support', 'SillyTavern': 'Ollama, llama.cpp, LM Studio, vLLM, OAI-compatible, KoboldAI, Aphrodite', 'Agnai': 'Ollama, llama.cpp, LM Studio, OAI-compatible', 'RisuAI': 'Ollama, llama.cpp, LM Studio, OAI-compatible' },
          { 'Feature': 'Telemetry default', 'SillyTavern': 'None', 'Agnai': 'None', 'RisuAI': 'None' },
          { 'Feature': 'Best for', 'SillyTavern': 'Solo users wanting deep customisation', 'Agnai': 'Shared servers, multi-user collaboration', 'RisuAI': 'First-time users, lighter setup' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The decision is workflow shape, not raw quality. All three produce identical conversations when paired with the same model and the same character card. Pick by how you intend to write — solo with deep settings, with collaborators on a shared server, or quickly on a desktop or mobile app — and you avoid 90% of the second-guessing.',
          },
        ],
      },
      sillytavern: {
        id: 'sillytavern',
        title: 'SillyTavern: The Deep-Customisation Default',
        content:
          '**SillyTavern is what most experienced roleplay users land on after trying alternatives.** Largest community, deepest character-card features, most extension ecosystem in the local-roleplay space.',
        items: [
          '**Install:** `git clone` the repo, `npm install`, `npm start`. The local server runs at `http://localhost:8000`. Cross-platform — macOS, Windows, Linux, plus Termux on Android. Configuration lives in `data/default-user/` (settings, characters, world info, presets).',
          '**Character cards:** full Tavern v2 spec. Drag-and-drop import (PNG with embedded JSON), browse and edit fields in the UI, export back to PNG. Cards built in SillyTavern open in Agnai and RisuAI cleanly; the reverse is also true.',
          '**Lore books / world info:** the most flexible of the three. Supports recursive scanning (entries that activate other entries), keyword priority, conditional triggers, and per-character scopes. The right tool for long-running campaigns where the world is more complex than the characters.',
          '**Group chat:** mature multi-character implementation. Define which characters are in the scene, set turn order or model-driven turn-taking, watch the model maintain distinct voices across exchanges. The pick when group scenes are the load-bearing part of the work.',
          '**Extensions:** regex replacement (sanitise model output before display), presets (sampling settings per-character), Stable Diffusion integration (image generation), translation, web search, custom UIs. The largest add-on ecosystem in this space.',
          '**Where it shines:** solo roleplay, long-running personal projects, deep customisation needs, complex world-building.',
          '**Where it falls short:** no multi-user mode (single-user by design); the feature surface can overwhelm first-time users; the configuration sprawl (multiple JSON files, presets, world info, regex) takes time to learn.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Start with SillyTavern\'s default presets and one or two character cards from chub.ai or the SillyTavern community. Resist the urge to install extensions before the first 10 hours of use — most users never need more than the defaults plus regex replacement and a translation extension.',
          },
        ],
      },
      agnai: {
        id: 'agnai',
        title: 'Agnai: The Multi-User Pick',
        content:
          '**Agnai is the only credible multi-user roleplay frontend in 2026.** Same character-card support as SillyTavern, smaller customisation surface, but a real shared-server mode that lets multiple writers connect to one backend.',
        items: [
          '**Install (single-user):** Node.js + npm install + start. Runs at `http://localhost:3001` by default. ~10-minute setup matches SillyTavern\'s simplicity.',
          '**Install (shared server):** add a database (MongoDB) and an authentication layer; Agnai handles user accounts, role separation, and shared character/chat ownership natively. ~30-minute setup; documented in the project README.',
          '**Character cards:** Tavern v2; full import/export. The card spec is the same as SillyTavern\'s, so cards move between frontends.',
          '**Persona system:** native multi-user. Each user has personas; the agent chooses which persona is active per chat. Useful for shared servers where multiple writers want their own profile.',
          '**Lore books / world info:** present, less powerful than SillyTavern\'s. Suitable for most projects; the deep recursive-scanning is what is missing.',
          '**Group chat:** native, simpler than SillyTavern\'s. Works for the common case of 2–4 characters in a scene.',
          '**Where it shines:** shared servers (writing groups, friend circles, small communities sharing characters), collaborative roleplay, projects where multiple users need to write together.',
          '**Where it falls short:** smaller extension ecosystem than SillyTavern; lore-book recursion is limited; not the right pick for deep solo customisation.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For a shared server, run Agnai behind a reverse proxy (Caddy is the simplest) with TLS. The default config is HTTP and listens on a single port — fine for localhost but not for a server you expose to other writers. The README covers the production setup.',
          },
        ],
      },
      risuai: {
        id: 'risuai',
        title: 'RisuAI: The Lighter Alternative',
        content:
          '**RisuAI is the right pick when SillyTavern feels overbuilt.** Same Tavern v2 character cards, smaller feature surface, packaged as a desktop app instead of a local web server. Friction-free first-run is the differentiator.',
        items: [
          '**Install:** desktop installer for macOS, Windows, Linux, plus iOS and Android apps. No Node.js, no terminal — double-click and it opens. The fastest first-run of the three.',
          '**Character cards:** Tavern v2 plus RisuAI\'s own extended format (more module fields, plot triggers). Cards from SillyTavern and Agnai load cleanly; cards built in RisuAI mostly portable back to the other two.',
          '**Persona system:** present, simpler than SillyTavern\'s. One active persona per chat, switchable in the UI.',
          '**Lore books / world info:** present, simpler scanning than SillyTavern\'s recursive system. Adequate for most projects under ~50 lore entries.',
          '**Group chat:** native; works for typical 2–4 character scenes.',
          '**Plugins:** smaller ecosystem than SillyTavern\'s. The core covers most common needs (character editing, sampling presets, lore book management) without third-party add-ons.',
          '**Where it shines:** first-time users, mobile-first writers (iOS/Android apps are real, not afterthoughts), users who want a cleaner UI than SillyTavern\'s, single-character solo roleplay.',
          '**Where it falls short:** smaller community than SillyTavern; less customisation depth (no recursive lore scanning, smaller extension surface); not the right pick when the feature ceiling matters.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RisuAI\'s mobile app is the only one of the three that is actually packaged for iOS and Android. SillyTavern runs in Termux on Android (works but rough); Agnai runs in mobile browsers but is not a packaged app. If mobile use is a real workflow, RisuAI is the right pick almost regardless of other features.',
          },
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: 'Character Card Format (Tavern v2): The Lingua Franca',
        content:
          '**All three frontends load the Tavern v2 character-card spec, which makes migration between them trivial.** A card is a PNG with embedded JSON in the metadata; the same file opens in any of the three.',
        items: [
          '**What is in a Tavern v2 card:** name, description, personality, scenario, first message, example dialogue, tags, creator notes, and a system prompt. Optional fields cover lore-book entries and character-specific sampling settings.',
          '**Why it matters:** the entire community-built character ecosystem (chub.ai, JanitorAI exports, character-themed Discord servers) uses Tavern v2. A card built by someone else loads in your frontend without conversion.',
          '**Where the spec ends:** Tavern v2 covers the static character definition. Long-running scene memory, dynamic relationship state, and chat-specific overrides are per-frontend implementation. Migrating an active chat between frontends is harder than migrating just the character card.',
          '**Sanitising imported cards:** a card from chub.ai may include sampling presets, system-prompt overrides, or aggressive jailbreak prompts that alter model behaviour. Read the system prompt and personality fields before using a downloaded card — especially in a shared-server context (Agnai) where one card affects all users.',
          '**Building your own card:** all three frontends have a card editor. SillyTavern\'s is the most feature-complete; RisuAI\'s is the cleanest UI. Edit a few existing cards before building from scratch — the field semantics make more sense after seeing examples.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Imported community cards can ship with hidden behaviour: long jailbreak system prompts, sampling overrides, persona contradictions. Open every downloaded card in the editor before first use and read the system-prompt field. In a shared-server context (Agnai), one bad card affects all users.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Model Recommendations Per Frontend',
        content:
          '**Frontend choice does not constrain model choice.** All three speak the same backends — Ollama is the most common — and the model picks below apply equally to SillyTavern, Agnai, and RisuAI.',
        items: [
          '**Llama 3.3 70B** — the best all-round local pick for character work. Strongest voice consistency across long sessions, takes character direction well, handles dark themes when the system prompt frames the work as fiction. Wants ~42 GB VRAM at Q4_K_M.',
          '**Qwen3 32B** — the right 24 GB-rig pick. Nearly Llama 70B prose quality without the hardware bill. The default for most laptops and consumer desktops.',
          '**Command R+ 104B** — the dialogue specialist. Most natural conversational voice differentiation across characters in a group scene. Wants ~62 GB VRAM at Q4_K_M.',
          '**Hermes 3 (Llama 3.3 base)** — the uncensored derivative. Same architecture as Llama 3.3 70B; the RLHF safety layer is removed; the model follows the prompt instead of refusing mature scenes. Two installs (instruct + Hermes) on the same Ollama is the common pattern.',
          '**Mistral Large** — the long-context pick. 128K context out of the box; useful when a roleplay session is long enough to push smaller-context models out of the window.',
          '**Avoid for serious roleplay work:** anything below 13B without a creative-writing fine-tune. Small general-purpose models lose voice consistency within 5–10 exchanges; the character "drifts" into the model\'s default voice.',
          'For the head-to-head data on these picks, see [Best Local LLMs for Creative Writing 2026](/power-local-llm/best-local-llm-creative-writing-2026).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Sampling settings matter as much as model choice for roleplay. Temperature 0.85–1.05, top-p 0.9–0.95, repeat penalty 1.1 are the starting point. SillyTavern lets you save presets per-character; use that — different characters often want different temperatures (a tense interrogation scene wants 0.7; a surreal dream sequence wants 1.2).',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy: Which Frontend Phones Home',
        content:
          '**All three frontends are local-only by default with no telemetry.** The optional cloud features in each are gated behind explicit opt-in; verify with network monitoring if you need formal audit-grade evidence.',
        items: [
          '**SillyTavern:** no telemetry. Optional features that can call out: cloud LLM backends (OpenAI, Claude, etc. — only if you configure them), translation extensions (use cloud APIs by default; configurable to local), Stable Diffusion image generation (uses your local SD or a configured remote endpoint), web search extensions (use cloud search). Each is opt-in and labelled.',
          '**Agnai:** no telemetry on the core app. Server mode adds account telemetry only if you enable it. Same optional cloud features as SillyTavern (translation, cloud LLM backends, image generation) — all explicit.',
          '**RisuAI:** no telemetry. Same pattern — local-only by default, optional cloud features (translation, image generation, cloud LLM backends) gated behind explicit configuration.',
          '**Verifying privacy claims:** run the frontend with no internet access (turn off Wi-Fi after install) — chat with a local model — confirm everything still works. Or run a network monitor (Little Snitch on macOS, Wireshark on Linux) and watch for outbound connections during a chat session. The three frontends pass this test by default.',
          '**Where privacy can break:** cloud LLM backends (you configured them; the prompt and response leave your machine), cloud-based translation extensions (the messages you translate are sent to a third party), Stable Diffusion remote endpoints, web search extensions. Each is a deliberate user choice.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'A "privacy-first" local frontend is only as private as the backend you point it at. Pointing SillyTavern at GPT-5 sends your roleplay prompts to OpenAI; pointing it at Ollama keeps everything local. The frontend itself is not the constraint; the model backend is.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Decision: Which Frontend Should You Pick',
        content:
          '**Three questions get most users to the right pick.**',
        columns: ['Your situation', 'Pick'],
        rows: [
          { 'Your situation': 'I am a solo writer, want deep customisation, and will invest time in learning the tool', 'Pick': 'SillyTavern' },
          { 'Your situation': 'I want to share characters and chats with other writers on a shared server', 'Pick': 'Agnai' },
          { 'Your situation': 'I want to start chatting today; SillyTavern feels overbuilt', 'Pick': 'RisuAI' },
          { 'Your situation': 'I write primarily on mobile (iOS or Android)', 'Pick': 'RisuAI (only one with packaged mobile apps)' },
          { 'Your situation': 'I run a writing group or community of 3+ people', 'Pick': 'Agnai (shared server) — only credible multi-user pick' },
          { 'Your situation': 'I have complex worldbuilding (50+ lore entries, recursive triggers)', 'Pick': 'SillyTavern (lore-book features are deepest)' },
          { 'Your situation': 'I am unsure', 'Pick': 'Try RisuAI first (5-min install). If you outgrow it, move to SillyTavern. Cards transfer.' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SillyTavern is the default for solo users with customisation needs; Agnai is the only multi-user pick for shared servers; RisuAI is the lighter alternative for first-timers and mobile writers — pick by workflow shape, then keep the option to migrate as cards transfer between all three.',
          },
          {
            type: 'plain-terms',
            text: 'Try RisuAI first if you have never used a roleplay frontend — it gets you chatting in 5 minutes. Move to SillyTavern when you start hitting customisation walls. Use Agnai only if you specifically need shared-server multi-user mode. The character cards you build in any of the three will load in the others, so the choice is reversible.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Spend the first 10 hours of use in whichever frontend you picked before installing extensions or building elaborate lore books. The defaults plus a couple of community cards are enough to evaluate fit. Premature configuration creates churn that the next-frontend migration would have absorbed.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes Picking and Using Roleplay Frontends',
        items: [
          '**Mistake 1: chasing features when the model is the bottleneck.** A great frontend on a 7B general-purpose model produces flat dialogue regardless of how good the lore-book system is. Pick a competent frontend and spend the rest of the budget on a 32B+ creative-writing-friendly model. See [Best Local LLMs for Creative Writing 2026](/power-local-llm/best-local-llm-creative-writing-2026) for the model side.',
          '**Mistake 2: using default sampling settings on a creative model.** SillyTavern, Agnai, and RisuAI all ship with question-answering-tuned defaults (temperature ~0.7, top-p ~0.9). Creative roleplay wants 0.85–1.05, top-p 0.9–0.95, repeat penalty 1.1. Save presets per-character.',
          '**Mistake 3: importing community cards without reading them.** A card from chub.ai may include a 2,000-token system prompt with jailbreak language, sampling overrides that conflict with your defaults, or personality fields that contradict the description. Open the card in the editor before using it; sanitise the system prompt.',
          '**Mistake 4: skipping the persona / user profile.** A blank "user" persona means the model has no anchor for who is speaking. Even a one-paragraph persona with name, age, and basic situation produces a dramatically more engaged scene than the default empty user.',
          '**Mistake 5: editing in the chat window instead of the card.** Tweaking model output via "regenerate" or "ask the model to fix it" trains a habit of asking the model to do the writing. Save edits back to the character card or the system prompt; the next session starts at a higher floor.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[SillyTavern documentation](https://docs.sillytavern.app/) — install, character cards, lore books, extensions, sampling presets.',
          '[SillyTavern GitHub repository](https://github.com/SillyTavern/SillyTavern) — source, release notes, community extensions.',
          '[Agnai GitHub repository](https://github.com/agnaistic/agnai) — install, multi-user server setup, character-card spec.',
          '[RisuAI GitHub repository](https://github.com/kwaroran/RisuAI) — install, plugin system, mobile app builds.',
          '[Tavern v2 character card specification](https://github.com/malfoyslastname/character-card-spec-v2) — the cross-frontend character-card format.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Which is the best local roleplay frontend in 2026?',
            a: 'SillyTavern for ~80% of users — deepest features, largest community, most extensions. Agnai is the right pick if you need multi-user shared-server support (the only credible option of the three). RisuAI is the lighter pick for first-timers, mobile writers, or anyone who finds SillyTavern overbuilt. All three speak Tavern v2 character cards and pair with the same model backends; switching between them later is straightforward because cards transfer.',
          },
          {
            q: 'Can SillyTavern, Agnai, and RisuAI use the same character cards?',
            a: 'Yes. All three load the Tavern v2 character-card spec, which is a PNG with embedded JSON. A card built in SillyTavern opens in Agnai and RisuAI without conversion, and vice versa. RisuAI extends the format with optional fields, but Tavern v2 cards from RisuAI still load in SillyTavern and Agnai with the extension fields ignored. Migration between frontends is trivial.',
          },
          {
            q: 'Do these frontends send my chats to a cloud server?',
            a: 'No, not by default. All three are local-only with no telemetry. The chat data, character cards, and lore books all sit on your machine. Optional features (cloud LLM backends, translation extensions, image generation, web search) are gated behind explicit configuration; if you point the frontend at Ollama or another local backend, nothing leaves your network. Verify with a network monitor if you need formal audit-grade evidence.',
          },
          {
            q: 'Which model should I use for roleplay?',
            a: 'Llama 3.3 70B is the best all-round pick when hardware permits (~42 GB VRAM at Q4_K_M). On 24 GB rigs, Qwen3 32B is the lighter default. Command R+ 104B has the most natural dialogue voice in group scenes but wants ~62 GB. For mature scenes the instruct-tuned models refuse, install Hermes 3 (Llama 3.3 base) on the same Ollama and switch per scene. Models below 13B without creative-writing fine-tunes lose voice consistency within 5–10 exchanges and should be avoided for serious roleplay work.',
          },
          {
            q: 'Is SillyTavern only for adult roleplay?',
            a: 'No. SillyTavern is a general-purpose chat frontend with character cards, persona management, and lore books — useful for any dialogue-heavy or character-driven creative work. Many writers use it for non-adult fiction drafting, multi-character scenes, voice-consistency work across long projects, screenwriting exercises, and game-narrative drafting. The community character ecosystem (chub.ai) includes adult content but is not limited to it.',
          },
          {
            q: 'How do I share characters with friends?',
            a: 'Three options. (1) Export the character card as PNG and send the file — works across all three frontends. (2) Use Agnai\'s shared-server mode if you want collaborative chats, not just shared characters. (3) Publish the card to chub.ai or a similar repository if you want a public release. Most writing groups settle on option 1 (file sharing) plus a Discord channel for coordination; option 2 is the right pick for groups that actively co-write the same chat.',
          },
          {
            q: 'Do these frontends work on iPad or Android?',
            a: 'RisuAI has packaged iOS and Android apps. SillyTavern runs on Android via Termux (works but is rough — terminal install, browser UI). Agnai runs in mobile browsers but is not packaged as an app. If mobile is your primary surface, RisuAI is the right pick. If mobile is occasional, SillyTavern in a desktop browser with a mobile fallback to RisuAI is a viable pattern (cards transfer).',
          },
          {
            q: 'Can I use one shared backend for multiple users?',
            a: 'For multi-user roleplay specifically, Agnai is the only frontend with a credible shared-server mode (built-in user accounts, role separation, shared character/chat ownership). For sharing just the model backend (one Ollama serving multiple frontends on the same machine), all three work — Ollama serves multiple clients out of the box and the frontends do not conflict. The "shared backend" question is really two questions: shared model (easy, all three) versus shared chats and characters (Agnai only).',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLMs for Creative Writing 2026](/power-local-llm/best-local-llm-creative-writing-2026) — the model side; head-to-head comparison of the picks recommended in this guide.',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/power-local-llm/uncensored-local-llm-creative-writing-ethics) — when uncensored derivatives (Hermes 3, Dolphin 3.0) are the right pick and where the legal lines are.',
          '[Top Open-Source Models in Ollama](/local-llms/top-open-source-models-ollama) — broader landscape; useful when picking which models to install behind these frontends.',
          '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) — the two most common backends paired with these frontends; which to install first.',
          '[Persona Prompting](/prompt-engineering/persona-prompting) — system-prompt structure for character voice; works in any of the three frontends.',
          '[Temperature and Top-P: Control AI Creativity](/prompt-engineering/temperature-and-top-p-control-ai-creativity) — sampling guide for the per-character presets these frontends support.',
        ],
      },
    },
  },
}
