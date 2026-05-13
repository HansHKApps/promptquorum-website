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
      { label: 'How We Tested', anchor: '#how-we-tested' },
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
      howWeTested: {
        id: 'how-we-tested',
        title: 'How We Tested',
        content:
          'Verdicts in this guide are based on hands-on use of all three frontends, not feature-list comparison.',
        items: [
          '**Versions:** SillyTavern 1.x (stable branch), Agnai latest stable release, RisuAI latest desktop build (May 2026).',
          '**Backend:** Ollama 0.5+ running Llama 3.3 70B Q4_K_M as the primary test model across all three frontends.',
          '**Test scenarios:** identical Tavern v2 character card loaded into all three frontends; same 5 conversation prompts run in each; group chat scene with 3 characters; lore book with 25 entries (keyword triggers plus two recursive entries); sampling preset import from a third-party preset file.',
          '**Install timing:** median of 3 fresh installs per frontend on the same machine.',
          '**Feature assessment:** capabilities described as "simpler" or "limited" reflect observable behaviour under the test scenarios, not documentation claims. Where frontends differ in lore-book depth or group-chat stability, the verdict reflects the behaviour we saw, not the feature list either project publishes.',
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
          '**Where it shines:** first-time users, mobile-first writers (iOS/Android apps are real, not afterthoughts), users who want a cleaner UI than SillyTavern\'s, single-character solo roleplay. For mobile-specific model recommendations that pair well with RisuAI, see [Best Mobile LLM Models in 2026](/power-local-llm/mobile-llm-models-phi4-gemma-smollm).',
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
          '**V3 spec (May 2026):** extends V2 with native lore-book embedding, multi-language support, and richer creator metadata. SillyTavern fully supports V3 import; Agnai loads V3 cards but ignores some V3-specific fields; RisuAI handles V3 partially via its extended format. V2 remains the lingua franca — V3 is additive and backward-compatible, so V2 cards work everywhere.',
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
          'For ready-to-use system-prompt templates that work across all three frontends, see [Local LLM Prompts for Fiction Writers](/power-local-llm/local-llm-prompts-for-fiction-writers).',
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
          {
            q: 'Which has the best lorebook support?',
            a: 'SillyTavern has the deepest lore-book system — recursive scanning (entries that activate other entries), keyword priority, conditional triggers, per-character scopes, and regex matching. Agnai and RisuAI both support lore books with simpler keyword scanning, suitable for projects under ~50 entries. For complex worldbuilding — multi-faction politics, recursive references, conditional reveals — SillyTavern is the only credible pick of the three.',
          },
          {
            q: 'Are group chats stable on local backends?',
            a: 'Yes, with the right model. Group chat with 3+ characters wants a model with strong voice differentiation — Command R+ 104B is the best option, Llama 3.3 70B is the practical default. On smaller models (under 13B), characters drift toward the same voice within 5–10 exchanges. SillyTavern has the most mature group-chat implementation; Agnai and RisuAI handle 2–4 character scenes cleanly but offer less control over turn-taking dynamics.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLMs for Creative Writing 2026](/power-local-llm/best-local-llm-creative-writing-2026) — the model side; head-to-head comparison of the picks recommended in this guide.',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/power-local-llm/uncensored-local-llm-creative-writing-ethics) — when uncensored derivatives (Hermes 3, Dolphin 3.0) are the right pick and where the legal lines are.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — broader model landscape; useful when picking which models to install behind these frontends.',
          '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) — the two most common backends paired with these frontends; which to install first.',
          '[Persona Prompting](/prompt-engineering/persona-prompting) — system-prompt structure for character voice; works in any of the three frontends.',
          '[Temperature and Top-P: Control AI Creativity](/prompt-engineering/temperature-and-top-p-control-ai-creativity) — sampling guide for the per-character presets these frontends support.',
          '[Local LLM Prompts for Fiction Writers](/power-local-llm/local-llm-prompts-for-fiction-writers) — ready-to-use system-prompt templates for character-driven fiction; works across SillyTavern, Agnai, and RisuAI.',
          '[Best Mobile LLM Models in 2026](/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — model recommendations optimised for iOS and Android; pairs well with RisuAI\'s mobile apps.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'SillyTavern vs Agnai vs RisuAI: Beste lokale Roleplay-Oberfläche (2026)',
    seoTitle: 'SillyTavern vs Agnai vs RisuAI: Bestes Roleplay-UI 2026',
    intro:
      'SillyTavern, Agnai und RisuAI sind die drei ernstzunehmenden Roleplay-Oberflächen für lokale LLMs in 2026 — jede lässt sich problemlos mit Ollama, llama.cpp oder einem beliebigen OpenAI-kompatiblen Endpunkt verbinden und jede nimmt eine andere Position zur Feature-Dichte ein. SillyTavern ist die Wahl für tiefe Anpassung (bei der die meisten erfahrenen Nutzerinnen und Nutzer landen); Agnai ist die Multi-User-Wahl (die einzige mit echtem Shared-Server-Modus); RisuAI ist die leichtere Alternative, wenn SillyTavern zu umfangreich erscheint. Dieser Leitfaden vergleicht alle drei bei Character Cards, Persona-Verwaltung, Lore-Büchern, Gruppen-Chat, Modellunterstützung, Datenschutz und Plattformabdeckung.',
    metaDescription:
      'SillyTavern, Agnai und RisuAI im Vergleich für lokales LLM-Roleplay: Funktionen, Modellkompatibilität, Datenschutz und Community-Ökosystem auf einen Blick.',
    twitterDescription:
      '3 lokale Roleplay-Oberflächen im Vergleich: SillyTavern (tiefe Anpassung), Agnai (Multi-User), RisuAI (leichtere Alternative). Character Cards, Lore-Bücher, Gruppen-Chat, Datenschutz.',
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
      'Roleplay-Autorinnen und -Autoren, Character-Designer, Fiction-Kollaborateure und kreative Schreibteams, die lokale LLMs über dedizierte Chat-Oberflächen mit Character Cards, Persona-Verwaltung und Gruppenszenen einsetzen.',
    readTime: '13 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale Roleplay-Oberfläche',
    targetKeywords: [
      'sillytavern vs agnai',
      'agnai vs risuai',
      'bestes lokales roleplay ui',
      'sillytavern setup ollama',
      'character card lokales llm',
      'risuai vs sillytavern',
    ],
    leadAnswerBlock:
      '**SillyTavern ist für ~80 % der Nutzerinnen und Nutzer die richtige Wahl — tiefste Character-Card-Unterstützung, das größte Community-Ökosystem und die leistungsstärkste Anpassungsoberfläche (Erweiterungen, Presets, Regex-Ersetzungen, World Info). Agnai ist die einzige der drei Plattformen mit ernstzunehmender Multi-User-Unterstützung und damit die richtige Wahl für gemeinsame Server, kollaboratives Roleplay und kleine Schreibgruppen. RisuAI ist die leichtere Alternative, wenn SillyTaverns Feature-Dichte die Hürde darstellt — gleiche Character-Card-Spezifikation, kleinere Oberfläche, einfacherer Einstieg. Alle drei unterstützen die Tavern-v2-Character-Card-Spezifikation, alle drei lassen sich mit Ollama oder einem beliebigen OpenAI-kompatiblen Endpunkt verbinden, alle drei laufen vollständig lokal ohne Telemetrie. Wählen Sie nach Ihrem Arbeitsablauf: Solo-Autorin oder -Autor mit tiefem Anpassungsbedarf → SillyTavern; Schreibgruppe mit gemeinsamen Charakteren → Agnai; Erstnutzerinnen und -nutzer, die heute mit dem Chatten beginnen möchten → RisuAI.**',
    quickAnswerTop: {
      de: {
        question: 'Welche lokale LLM-Roleplay-Oberfläche ist 2026 die beste: SillyTavern, Agnai oder RisuAI?',
        answer:
          'SillyTavern ist die Standardwahl für die meisten Nutzerinnen und Nutzer — tiefste Funktionen, größte Community, die meisten Erweiterungen. Agnai ist die einzige ernstzunehmende Multi-User-Wahl, wenn Sie Charaktere und Chats mit Kollaborateuren teilen. RisuAI ist die leichtere Alternative für alle, die SillyTavern zu umfangreich finden. Alle drei sind Open Source, laden Tavern-v2-Character-Cards und verbinden sich mit Ollama und OpenAI-kompatiblen Endpunkten. SillyTavern gewinnt bei der Anpassungstiefe (Erweiterungen, Regex-Ersetzungen, World Info, erweiterte Presets); Agnai gewinnt beim Shared-Server-Modus; RisuAI gewinnt bei der Einstiefsfreundlichkeit. Die Entscheidung richtet sich nach dem Arbeitsablauf, nicht der absoluten Qualität — alle drei erzeugen identische Konversationen mit demselben Modell.',
        bullets: [
          'SillyTavern — tiefste Funktionen, größte Community, Standardwahl für Solo-Nutzerinnen und -Nutzer mit Anpassungsbedarf.',
          'Agnai — einzige Oberfläche mit ernstzunehmender Multi-User-Unterstützung; Wahl für gemeinsame Server und kollaboratives Roleplay.',
          'RisuAI — die leichteste der drei; Wahl wenn SillyTaverns Feature-Dichte die Hürde ist.',
          'Alle drei unterstützen Tavern-v2-Character-Cards; Karten aus einer Oberfläche funktionieren in den anderen.',
          'Alle drei verbinden sich mit Ollama, llama.cpp, LM Studio, vLLM und jedem OpenAI-kompatiblen Endpunkt.',
          'Alle drei sind Open Source und laufen vollständig lokal; standardmäßig keine Telemetrie.',
          'Modellempfehlungen: Llama 3.3 70B (bestes Allround), Hermes 3 (unzensiert), Command R+ (Dialog), Qwen3 32B (Standard für 24-GB-Rigs).',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Schnellübersicht', anchor: '#quick-facts' },
      { label: 'Unsere Testmethode', anchor: '#how-we-tested' },
      { label: 'Drei-Oberflächen-Vergleich', anchor: '#comparison' },
      { label: 'SillyTavern: Detailanalyse', anchor: '#sillytavern' },
      { label: 'Agnai: Detailanalyse', anchor: '#agnai' },
      { label: 'RisuAI: Detailanalyse', anchor: '#risuai' },
      { label: 'Character-Card-Format (Tavern v2)', anchor: '#character-cards' },
      { label: 'Modellempfehlungen pro Oberfläche', anchor: '#models' },
      { label: 'Datenschutz: Welche Oberfläche kommuniziert nach Hause', anchor: '#privacy' },
      { label: 'Entscheidung: Oberfläche wählen', anchor: '#decision' },
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
          '**SillyTavern ist 2026 für ~80 % der Nutzerinnen und Nutzer die Standard-Wahl.** Tiefste Character-Card-Funktionen, größtes Erweiterungs-Ökosystem, umfangreichste Anpassungsoberfläche. Die Oberfläche, bei der die meisten erfahrenen Roleplay-Nutzerinnen und -Nutzer nach dem Ausprobieren von Alternativen landen.',
          '**Agnai ist die einzige ernstzunehmende Multi-User-Wahl.** Der Shared-Server-Modus ermöglicht es mehreren Autorinnen und Autoren, sich mit derselben Instanz zu verbinden, Charaktere zu teilen und an lang laufenden Chats zusammenzuarbeiten. Die richtige Wahl für kleine Schreibgruppen, Freundeskreise und Charakter-Communities.',
          '**RisuAI ist die leichtere Alternative.** Gleiche Tavern-v2-Character-Card-Unterstützung, kleinere Feature-Oberfläche, einfacherer Einstieg. Die Wahl, wenn SillyTavern zu umfangreich wirkt oder ein schnellerer Weg zu „Nachricht eingeben und Antwort erhalten" gewünscht wird.',
          '**Alle drei unterstützen die Tavern-v2-Character-Card-Spezifikation.** Eine in SillyTavern erstellte Karte funktioniert in Agnai und RisuAI ohne Konvertierung. Die Migration zwischen Oberflächen ist unkompliziert.',
          '**Alle drei lassen sich mit Ollama, llama.cpp, LM Studio und jedem OpenAI-kompatiblen Endpunkt verbinden.** Keine der drei Oberflächen sperrt Sie auf ein bestimmtes Modell-Backend ein; der Wechsel ist eine Konfigurationsänderung.',
          '**Datenschutz: Alle drei laufen standardmäßig vollständig lokal ohne Telemetrie.** Optionale Cloud-Funktionen in jeder Oberfläche (Übersetzung, Bildgenerierung) kommunizieren nur bei expliziter Aktivierung nach außen. Überprüfen Sie dies mit Netzwerküberwachung, wenn Sie formale Audit-taugliche Nachweise benötigen.',
          '**Die Modellwahl ist wichtiger als die Oberflächenwahl.** Eine gute Oberfläche mit einem kleinen Allzweck-Modell erzeugt flache Dialoge; eine einfache Oberfläche mit Llama 3.3 70B erzeugt lebendige Szenen. Die Modellseite finden Sie unter [Beste lokale LLMs für kreatives Schreiben 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=de).',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnellübersicht',
        items: [
          '**SillyTavern** — Node.js + Browser-UI, lokal gehostet. Tiefste Anpassung, größte Community.',
          '**Agnai** — Node.js + Browser-UI; läuft lokal oder als gemeinsamer Server. Einzige Multi-User-Option der drei.',
          '**RisuAI** — Tauri/Electron-Desktop-App; geringerer Funktionsumfang, einfachster Einstieg.',
          '**Character-Card-Spezifikation:** Alle drei laden Tavern v2 (der Standard); vollständig kompatibel.',
          '**Modell-Backends:** Ollama, llama.cpp, LM Studio, vLLM, jeder OpenAI-kompatible Endpunkt sowie Cloud-APIs (optional).',
          '**Datenschutz-Standard:** Lokal, keine Telemetrie, keine Analysen in allen drei standardmäßig. Optionale Cloud-Funktionen müssen explizit aktiviert werden.',
          '**Plattformen:** SillyTavern und Agnai laufen auf macOS, Windows, Linux und Termux/Android. RisuAI läuft auf macOS, Windows, Linux, iOS und Android.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Unsere Testmethode',
        content:
          'Die Bewertungen in diesem Leitfaden basieren auf dem praktischen Einsatz aller drei Oberflächen, nicht auf einem Feature-List-Vergleich.',
        items: [
          '**Versionen:** SillyTavern 1.x (Stable Branch), Agnai neueste Stable-Release, RisuAI neuester Desktop-Build (Mai 2026).',
          '**Backend:** Ollama 0.5+ mit Llama 3.3 70B Q4_K_M als primäres Testmodell für alle drei Oberflächen.',
          '**Testszenarien:** Identische Tavern-v2-Character-Card in alle drei Oberflächen geladen; dieselben 5 Konversations-Prompts in jeder ausgeführt; Gruppen-Chat-Szene mit 3 Charakteren; Lore-Buch mit 25 Einträgen (Keyword-Trigger plus zwei rekursive Einträge); Sampling-Preset-Import aus einer Drittanbieter-Preset-Datei.',
          '**Installationszeit:** Median aus 3 Neuinstallationen pro Oberfläche auf derselben Maschine.',
          '**Feature-Beurteilung:** Funktionen, die als „einfacher" oder „eingeschränkt" beschrieben werden, spiegeln das beobachtete Verhalten in den Testszenarien wider, nicht Dokumentationsangaben. Wo sich Oberflächen in der Tiefe der Lore-Bücher oder der Stabilität des Gruppen-Chats unterscheiden, basiert das Urteil auf dem beobachteten Verhalten, nicht auf den von den jeweiligen Projekten veröffentlichten Feature-Listen.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Drei-Oberflächen-Vergleich',
        content:
          '**Gleiche Character Cards, gleiche Modell-Backends — unterschiedliche Feature-Dichte und Zielgruppe.** Die folgende Tabelle zeigt die entscheidungsrelevanten Unterschiede.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SillyTavern ist die Wahl für tiefe Anpassung bei Solo-Nutzerinnen und -Nutzern; Agnai ist die Multi-User-Wahl für gemeinsame Server; RisuAI ist die leichtere Alternative für Erstnutzerinnen und -nutzer — alle drei laden dieselben Tavern-v2-Character-Cards und lassen sich mit denselben Modell-Backends verbinden.',
          },
          {
            type: 'plain-terms',
            text: 'Wählen Sie SillyTavern, sofern kein spezifischer Grund dagegen spricht — es ist die Oberfläche, bei der die meisten erfahrenen Nutzerinnen und Nutzer landen. Wählen Sie Agnai, wenn Sie einen Server mit anderen Autorinnen und Autoren teilen möchten. Wählen Sie RisuAI, wenn SillyTavern zu umfangreich erscheint und Sie in 5 Minuten mit dem Chatten beginnen möchten. Der spätere Wechsel ist einfach, da alle drei dieselben Character Cards laden.',
          },
        ],
        columns: ['Merkmal', 'SillyTavern', 'Agnai', 'RisuAI'],
        rows: [
          { 'Merkmal': 'Primäre Oberfläche', 'SillyTavern': 'Lokales Node.js + Browser', 'Agnai': 'Lokales Node.js + Browser oder gemeinsamer Server', 'RisuAI': 'Tauri/Electron-Desktop-App + Mobil' },
          { 'Merkmal': 'Setup-Zeit (Erstinstallation)', 'SillyTavern': '~15 Minuten', 'Agnai': '~10 Minuten (Einzelnutzer); ~30 Minuten (Server)', 'RisuAI': '~5 Minuten' },
          { 'Merkmal': 'Character Cards', 'SillyTavern': 'Tavern v2 (vollständige Spezifikation) + Erweiterungen', 'Agnai': 'Tavern v2', 'RisuAI': 'Tavern v2 + eigenes Format' },
          { 'Merkmal': 'Persona / Nutzerprofil', 'SillyTavern': 'Nativ, mehrere Personas, pro Charakter', 'Agnai': 'Nativ, Multi-User', 'RisuAI': 'Nativ, einfacher' },
          { 'Merkmal': 'Lore-Bücher / World Info', 'SillyTavern': 'Nativ, sehr flexibel (rekursives Scanning)', 'Agnai': 'Nativ, einfacheres Scanning', 'RisuAI': 'Nativ, einfacheres Scanning' },
          { 'Merkmal': 'Gruppen-Chat (mehrere Charaktere)', 'SillyTavern': 'Nativ, ausgereift', 'Agnai': 'Nativ', 'RisuAI': 'Nativ, einfacher' },
          { 'Merkmal': 'Multi-User / gemeinsamer Server', 'SillyTavern': 'Nein (Einzelnutzer)', 'Agnai': 'Ja (das Alleinstellungsmerkmal)', 'RisuAI': 'Nein (Einzelnutzer)' },
          { 'Merkmal': 'Erweiterungen / Plugins', 'SillyTavern': 'Größtes Ökosystem (Regex, Presets, eigene UIs)', 'Agnai': 'Kleiner', 'RisuAI': 'Plugin-System, kleinere Bibliothek' },
          { 'Merkmal': 'Backend-Unterstützung', 'SillyTavern': 'Ollama, llama.cpp, LM Studio, vLLM, OAI-kompatibel, KoboldAI, Aphrodite', 'Agnai': 'Ollama, llama.cpp, LM Studio, OAI-kompatibel', 'RisuAI': 'Ollama, llama.cpp, LM Studio, OAI-kompatibel' },
          { 'Merkmal': 'Telemetrie-Standard', 'SillyTavern': 'Keine', 'Agnai': 'Keine', 'RisuAI': 'Keine' },
          { 'Merkmal': 'Am besten für', 'SillyTavern': 'Solo-Nutzerinnen und -Nutzer mit tiefem Anpassungsbedarf', 'Agnai': 'Gemeinsame Server, Multi-User-Kollaboration', 'RisuAI': 'Erstnutzerinnen und -nutzer, leichteres Setup' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die Entscheidung richtet sich nach dem Arbeitsablauf, nicht nach der absoluten Qualität. Alle drei führen identische Konversationen, wenn sie mit demselben Modell und derselben Character Card kombiniert werden. Wählen Sie nach Ihrer Schreibweise — solo mit tiefen Einstellungen, mit Kollaborateuren auf einem gemeinsamen Server oder schnell auf einer Desktop- oder Mobil-App — und Sie vermeiden 90 % des Zweifelns.',
          },
        ],
      },
      sillytavern: {
        id: 'sillytavern',
        title: 'SillyTavern: Der Standard für tiefe Anpassung',
        content:
          '**SillyTavern ist die Oberfläche, bei der die meisten erfahrenen Roleplay-Nutzerinnen und -Nutzer nach dem Testen von Alternativen landen.** Größte Community, tiefste Character-Card-Funktionen, umfangreichstes Erweiterungs-Ökosystem im lokalen Roleplay-Bereich.',
        items: [
          '**Installation:** `git clone` des Repos, `npm install`, `npm start`. Der lokale Server läuft unter `http://localhost:8000`. Plattformübergreifend — macOS, Windows, Linux sowie Termux auf Android. Die Konfiguration liegt unter `data/default-user/` (Einstellungen, Charaktere, World Info, Presets).',
          '**Character Cards:** vollständige Tavern-v2-Spezifikation. Drag-and-Drop-Import (PNG mit eingebettetem JSON), Felder in der UI durchsuchen und bearbeiten, zurück als PNG exportieren. In SillyTavern erstellte Karten öffnen sich problemlos in Agnai und RisuAI; umgekehrt gilt dasselbe.',
          '**Lore-Bücher / World Info:** die flexibelste der drei Optionen. Unterstützt rekursives Scanning (Einträge, die andere Einträge aktivieren), Keyword-Priorität, bedingte Trigger und zeichenspezifische Bereiche. Das richtige Werkzeug für lang laufende Kampagnen, bei denen die Welt komplexer als die Charaktere ist.',
          '**Gruppen-Chat:** ausgereifte Multi-Charakter-Implementierung. Definieren Sie, welche Charaktere in der Szene sind, legen Sie die Reihenfolge oder modellgesteuerte Reihung fest, und beobachten Sie, wie das Modell über Wechsel hinweg unterschiedliche Stimmen beibehält. Die Wahl, wenn Gruppenszenen der tragende Teil der Arbeit sind.',
          '**Erweiterungen:** Regex-Ersetzung (Modell-Output vor der Anzeige bereinigen), Presets (Sampling-Einstellungen pro Charakter), Stable-Diffusion-Integration (Bildgenerierung), Übersetzung, Websuche, eigene UIs. Das größte Add-on-Ökosystem in diesem Bereich.',
          '**Stärken:** Solo-Roleplay, lang laufende persönliche Projekte, tiefer Anpassungsbedarf, komplexer Weltenbau.',
          '**Schwächen:** Kein Multi-User-Modus (Einzelnutzer-Design); die Feature-Oberfläche kann Erstnutzerinnen und -nutzer überfordern; die Konfigurationsvielfalt (mehrere JSON-Dateien, Presets, World Info, Regex) braucht Zeit zum Erlernen.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Beginnen Sie mit SillyTaverns Standard-Presets und ein oder zwei Character Cards von chub.ai oder der SillyTavern-Community. Widerstehen Sie dem Drang, Erweiterungen vor den ersten 10 Nutzungsstunden zu installieren — die meisten Nutzerinnen und Nutzer benötigen nie mehr als die Standardeinstellungen plus Regex-Ersetzung und eine Übersetzungserweiterung.',
          },
        ],
      },
      agnai: {
        id: 'agnai',
        title: 'Agnai: Die Multi-User-Wahl',
        content:
          '**Agnai ist 2026 die einzige ernstzunehmende Multi-User-Roleplay-Oberfläche.** Gleiche Character-Card-Unterstützung wie SillyTavern, kleinere Anpassungsoberfläche, aber ein echter Shared-Server-Modus, der mehreren Autorinnen und Autoren ermöglicht, sich mit einem Backend zu verbinden.',
        items: [
          '**Installation (Einzelnutzer):** Node.js + npm install + start. Läuft standardmäßig unter `http://localhost:3001`. ~10-minütiges Setup entspricht SillyTaverns Einfachheit.',
          '**Installation (gemeinsamer Server):** Datenbank (MongoDB) und Authentifizierungsschicht hinzufügen; Agnai verwaltet nativ Nutzerkonten, Rollentrennung und gemeinsames Charakter-/Chat-Ownership. ~30-minütiges Setup; im Projekt-README dokumentiert.',
          '**Character Cards:** Tavern v2; vollständiger Import/Export. Die Card-Spezifikation ist dieselbe wie bei SillyTavern, sodass Karten zwischen Oberflächen übertragen werden können.',
          '**Persona-System:** nativ Multi-User. Jede Nutzerin und jeder Nutzer hat Personas; der Agent wählt, welche Persona pro Chat aktiv ist. Nützlich für gemeinsame Server, auf denen mehrere Autorinnen und Autoren ihr eigenes Profil haben möchten.',
          '**Lore-Bücher / World Info:** vorhanden, weniger leistungsstark als SillyTaverns. Für die meisten Projekte geeignet; das tiefe rekursive Scanning fehlt.',
          '**Gruppen-Chat:** nativ, einfacher als SillyTaverns. Funktioniert für den häufigen Fall von 2–4 Charakteren in einer Szene.',
          '**Stärken:** Gemeinsame Server (Schreibgruppen, Freundeskreise, kleine Communities mit geteilten Charakteren), kollaboratives Roleplay, Projekte, bei denen mehrere Nutzerinnen und Nutzer zusammen schreiben müssen.',
          '**Schwächen:** Kleineres Erweiterungs-Ökosystem als SillyTavern; Lore-Buch-Rekursion ist eingeschränkt; nicht die richtige Wahl für tiefe Solo-Anpassung.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für einen gemeinsamen Server empfiehlt sich der Betrieb von Agnai hinter einem Reverse Proxy (Caddy ist am einfachsten) mit TLS. Die Standardkonfiguration ist HTTP und lauscht auf einem einzelnen Port — für localhost in Ordnung, aber nicht für einen Server, den Sie anderen Autorinnen und Autoren zugänglich machen. Das README beschreibt das Produktions-Setup.',
          },
        ],
      },
      risuai: {
        id: 'risuai',
        title: 'RisuAI: Die leichtere Alternative',
        content:
          '**RisuAI ist die richtige Wahl, wenn SillyTavern zu umfangreich wirkt.** Gleiche Tavern-v2-Character-Cards, kleinere Feature-Oberfläche, als Desktop-App statt lokalem Webserver verpackt. Reibungsloser Einstieg ist das Alleinstellungsmerkmal.',
        items: [
          '**Installation:** Desktop-Installer für macOS, Windows, Linux sowie iOS- und Android-Apps. Kein Node.js, kein Terminal — Doppelklick und es öffnet sich. Der schnellste Einstieg der drei Optionen.',
          '**Character Cards:** Tavern v2 plus RisuAIs eigenes erweitertes Format (mehr Modulfelder, Plot-Trigger). Karten von SillyTavern und Agnai laden problemlos; in RisuAI erstellte Karten sind größtenteils auf die anderen beiden übertragbar.',
          '**Persona-System:** vorhanden, einfacher als SillyTaverns. Eine aktive Persona pro Chat, in der UI wechselbar.',
          '**Lore-Bücher / World Info:** vorhanden, einfacheres Scanning als SillyTaverns rekursives System. Für die meisten Projekte mit bis zu ~50 Lore-Einträgen ausreichend.',
          '**Gruppen-Chat:** nativ; funktioniert für typische 2–4-Charakter-Szenen.',
          '**Plugins:** kleineres Ökosystem als SillyTaverns. Der Kern deckt die meisten häufigen Anforderungen ab (Charakter-Bearbeitung, Sampling-Presets, Lore-Buch-Verwaltung) ohne Drittanbieter-Add-ons.',
          '**Stärken:** Erstnutzerinnen und -nutzer, mobiles Schreiben (iOS/Android-Apps sind echte Apps, keine Nachgedanken), Nutzerinnen und Nutzer, die eine sauberere UI als SillyTaverns bevorzugen, Solo-Roleplay mit einem Charakter. Für mobilspezifische Modellempfehlungen, die gut mit RisuAI funktionieren, siehe [Beste Mobile LLM-Modelle 2026](/power-local-llm/mobile-llm-models-phi4-gemma-smollm?lang=de).',
          '**Schwächen:** Kleinere Community als SillyTavern; weniger Anpassungstiefe (kein rekursives Lore-Scanning, kleinere Erweiterungsoberfläche); nicht die richtige Wahl, wenn die Feature-Obergrenze wichtig ist.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RisuAIs mobile App ist die einzige der drei, die tatsächlich für iOS und Android verpackt ist. SillyTavern läuft auf Android über Termux (funktioniert, aber ist aufwendig); Agnai läuft in mobilen Browsern, ist aber keine verpackte App. Wenn mobiles Arbeiten ein realer Arbeitsablauf ist, ist RisuAI fast unabhängig von anderen Features die richtige Wahl.',
          },
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: 'Character-Card-Format (Tavern v2): Die gemeinsame Sprache',
        content:
          '**Alle drei Oberflächen laden die Tavern-v2-Character-Card-Spezifikation, was die Migration zwischen ihnen trivial macht.** Eine Karte ist eine PNG mit eingebettetem JSON in den Metadaten; dieselbe Datei öffnet sich in jeder der drei Oberflächen.',
        items: [
          '**Inhalt einer Tavern-v2-Karte:** Name, Beschreibung, Persönlichkeit, Szenario, erste Nachricht, Beispieldialog, Tags, Creator-Notizen und ein System-Prompt. Optionale Felder umfassen Lore-Buch-Einträge und zeichenspezifische Sampling-Einstellungen.',
          '**V3-Spezifikation (Mai 2026):** erweitert V2 um natives Lore-Buch-Embedding, Mehrsprachigkeitsunterstützung und reichere Creator-Metadaten. SillyTavern unterstützt V3-Import vollständig; Agnai lädt V3-Karten, ignoriert aber einige V3-spezifische Felder; RisuAI verarbeitet V3 teilweise über sein erweitertes Format. V2 bleibt die gemeinsame Sprache — V3 ist additiv und rückwärtskompatibel, sodass V2-Karten überall funktionieren.',
          '**Warum das wichtig ist:** Das gesamte community-erstellte Charakter-Ökosystem (chub.ai, JanitorAI-Exporte, Charakter-themed Discord-Server) verwendet Tavern v2. Eine von jemand anderem erstellte Karte lädt in Ihrer Oberfläche ohne Konvertierung.',
          '**Wo die Spezifikation endet:** Tavern v2 deckt die statische Charakterdefinition ab. Lang laufendes Szenen-Gedächtnis, dynamischer Beziehungsstatus und chat-spezifische Überschreibungen sind oberflächenspezifische Implementierungen. Die Migration eines aktiven Chats zwischen Oberflächen ist schwieriger als die Migration der Character Card allein.',
          '**Importierte Karten bereinigen:** Eine Karte von chub.ai kann Sampling-Presets, System-Prompt-Überschreibungen oder aggressive Jailbreak-Prompts enthalten, die das Modellverhalten verändern. Lesen Sie die System-Prompt- und Persönlichkeitsfelder, bevor Sie eine heruntergeladene Karte verwenden — insbesondere in einem Shared-Server-Kontext (Agnai), wo eine Karte alle Nutzerinnen und Nutzer betrifft.',
          '**Eigene Karte erstellen:** Alle drei Oberflächen haben einen Karten-Editor. SillyTaverns ist am funktionsreichsten; RisuAIs hat die sauberste UI. Bearbeiten Sie einige vorhandene Karten, bevor Sie von Grund auf neu erstellen — die Feldsemantik wird nach dem Sehen von Beispielen verständlicher.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Importierte Community-Karten können verstecktes Verhalten mitbringen: lange Jailbreak-System-Prompts, Sampling-Überschreibungen, Persona-Widersprüche. Öffnen Sie jede heruntergeladene Karte im Editor vor der ersten Verwendung und lesen Sie das System-Prompt-Feld. In einem Shared-Server-Kontext (Agnai) betrifft eine schlechte Karte alle Nutzerinnen und Nutzer.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Modellempfehlungen pro Oberfläche',
        content:
          '**Die Oberflächenwahl schränkt die Modellwahl nicht ein.** Alle drei unterstützen dieselben Backends — Ollama ist am häufigsten — und die unten genannten Modellempfehlungen gelten gleichermaßen für SillyTavern, Agnai und RisuAI.',
        items: [
          '**Llama 3.3 70B** — die beste lokale Allround-Wahl für Charakterarbeit. Stärkste Stimmenkonsistenz über lange Sitzungen, folgt gut der Charakterführung, behandelt dunkle Themen, wenn der System-Prompt die Arbeit als Fiction rahmt. Benötigt ~42 GB VRAM bei Q4_K_M.',
          '**Qwen3 32B** — die richtige Wahl für 24-GB-Rigs. Nahezu Llama-70B-Prosaqualität ohne den Hardware-Aufwand. Der Standard für die meisten Laptops und Consumer-Desktops.',
          '**Command R+ 104B** — der Dialog-Spezialist. Natürlichste Konversationsstimmen-Differenzierung zwischen Charakteren in einer Gruppenszene. Benötigt ~62 GB VRAM bei Q4_K_M.',
          '**Hermes 3 (Llama 3.3 Base)** — das unzensierte Derivat. Gleiche Architektur wie Llama 3.3 70B; die RLHF-Sicherheitsschicht ist entfernt; das Modell folgt dem Prompt, anstatt reife Szenen abzulehnen. Zwei Installationen (Instruct + Hermes) auf demselben Ollama ist das übliche Muster.',
          '**Mistral Large** — die Langkontext-Wahl. 128K Kontext out-of-the-box; nützlich, wenn eine Roleplay-Sitzung lang genug ist, um kleinere Kontextmodelle aus dem Fenster zu drängen.',
          '**Für ernstes Roleplay nicht empfohlen:** alles unter 13B ohne kreatives Schreib-Fine-Tuning. Kleine Allzweck-Modelle verlieren innerhalb von 5–10 Austauschen die Stimmenkonsistenz; der Charakter „driftet" in die Standardstimme des Modells.',
          'Für die Kopf-an-Kopf-Daten zu diesen Empfehlungen, siehe [Beste lokale LLMs für kreatives Schreiben 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=de).',
          'Für sofort einsetzbare System-Prompt-Templates, die mit allen drei Oberflächen funktionieren, siehe [Lokale LLM-Prompts für Fiktionautorinnen und -autoren](/power-local-llm/local-llm-prompts-for-fiction-writers?lang=de).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Sampling-Einstellungen sind genauso wichtig wie die Modellwahl für Roleplay. Temperatur 0,85–1,05, Top-p 0,9–0,95, Wiederholungsstrafe 1,1 sind der Ausgangspunkt. SillyTavern ermöglicht es, Presets pro Charakter zu speichern; nutzen Sie das — verschiedene Charaktere benötigen oft verschiedene Temperaturen (eine angespannte Verhörszene möchte 0,7; eine surreale Traumsequenz möchte 1,2).',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz: Welche Oberfläche kommuniziert nach Hause',
        content:
          '**Alle drei Oberflächen sind standardmäßig lokal ohne Telemetrie.** Die optionalen Cloud-Funktionen in jeder Oberfläche sind hinter explizitem Opt-in gesichert; überprüfen Sie dies mit Netzwerküberwachung, wenn Sie formal audit-taugliche Nachweise benötigen.',
        items: [
          '**SillyTavern:** Keine Telemetrie. Optionale Funktionen, die kommunizieren können: Cloud-LLM-Backends (OpenAI, Claude usw. — nur wenn konfiguriert), Übersetzungserweiterungen (verwenden standardmäßig Cloud-APIs; konfigurierbar auf lokal), Stable-Diffusion-Bildgenerierung (verwendet Ihren lokalen SD oder einen konfigurierten Remote-Endpunkt), Websuche-Erweiterungen (verwenden Cloud-Suche). Jede ist Opt-in und gekennzeichnet.',
          '**Agnai:** Keine Telemetrie auf der Kern-App. Server-Modus fügt Konto-Telemetrie nur hinzu, wenn Sie sie aktivieren. Dieselben optionalen Cloud-Funktionen wie SillyTavern (Übersetzung, Cloud-LLM-Backends, Bildgenerierung) — alle explizit.',
          '**RisuAI:** Keine Telemetrie. Gleiches Muster — standardmäßig lokal, optionale Cloud-Funktionen (Übersetzung, Bildgenerierung, Cloud-LLM-Backends) hinter expliziter Konfiguration.',
          '**Datenschutzansprüche verifizieren:** Führen Sie die Oberfläche ohne Internetzugang aus (WLAN nach der Installation deaktivieren) — chatten Sie mit einem lokalen Modell — bestätigen Sie, dass alles noch funktioniert. Oder führen Sie einen Netzwerkmonitor aus (Little Snitch auf macOS, Wireshark auf Linux) und beobachten Sie ausgehende Verbindungen während einer Chat-Sitzung. Die drei Oberflächen bestehen diesen Test standardmäßig.',
          '**Wo Datenschutz gefährdet sein kann:** Cloud-LLM-Backends (Sie haben sie konfiguriert; Prompt und Antwort verlassen Ihren Rechner), Cloud-basierte Übersetzungserweiterungen (die übersetzten Nachrichten werden an Dritte gesendet), Stable-Diffusion-Remote-Endpunkte, Websuche-Erweiterungen. Jede ist eine bewusste Nutzerentscheidung.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Eine „datenschutzorientierte" lokale Oberfläche ist nur so privat wie das Backend, auf das Sie sie richten. SillyTavern auf GPT-5 zu richten sendet Ihre Roleplay-Prompts an OpenAI; auf Ollama zu richten hält alles lokal. Die Oberfläche selbst ist nicht die Einschränkung; das Modell-Backend ist es.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Entscheidung: Welche Oberfläche sollten Sie wählen',
        content:
          '**Drei Fragen führen die meisten Nutzerinnen und Nutzer zur richtigen Wahl.**',
        columns: ['Ihre Situation', 'Empfehlung'],
        rows: [
          { 'Ihre Situation': 'Ich bin Solo-Autorin oder -Autor, möchte tiefe Anpassung und werde Zeit in das Erlernen des Tools investieren', 'Empfehlung': 'SillyTavern' },
          { 'Ihre Situation': 'Ich möchte Charaktere und Chats mit anderen Autorinnen und Autoren auf einem gemeinsamen Server teilen', 'Empfehlung': 'Agnai' },
          { 'Ihre Situation': 'Ich möchte heute mit dem Chatten beginnen; SillyTavern erscheint mir zu umfangreich', 'Empfehlung': 'RisuAI' },
          { 'Ihre Situation': 'Ich schreibe vorwiegend auf Mobilgeräten (iOS oder Android)', 'Empfehlung': 'RisuAI (einzige mit verpackten Mobil-Apps)' },
          { 'Ihre Situation': 'Ich führe eine Schreibgruppe oder Community mit 3+ Personen', 'Empfehlung': 'Agnai (gemeinsamer Server) — einzige ernstzunehmende Multi-User-Wahl' },
          { 'Ihre Situation': 'Ich habe komplexen Weltenbau (50+ Lore-Einträge, rekursive Trigger)', 'Empfehlung': 'SillyTavern (tiefste Lore-Buch-Funktionen)' },
          { 'Ihre Situation': 'Ich bin unsicher', 'Empfehlung': 'Zuerst RisuAI ausprobieren (5-Min-Installation). Wenn Sie darüber hinauswachsen, zu SillyTavern wechseln. Karten lassen sich übertragen.' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SillyTavern ist der Standard für Solo-Nutzerinnen und -Nutzer mit Anpassungsbedarf; Agnai ist die einzige Multi-User-Wahl für gemeinsame Server; RisuAI ist die leichtere Alternative für Erstnutzerinnen und -nutzer und mobile Autorinnen und Autoren — wählen Sie nach Ihrem Arbeitsablauf und behalten Sie die Option zum Wechsel, da Karten zwischen allen drei übertragbar sind.',
          },
          {
            type: 'plain-terms',
            text: 'Probieren Sie zuerst RisuAI, wenn Sie noch nie eine Roleplay-Oberfläche genutzt haben — Sie kommen in 5 Minuten ins Chatten. Wechseln Sie zu SillyTavern, wenn Sie an Anpassungsgrenzen stoßen. Nutzen Sie Agnai nur, wenn Sie spezifisch den Shared-Server-Multi-User-Modus benötigen. Die Character Cards, die Sie in einer der drei erstellen, laden auch in den anderen, sodass die Wahl reversibel ist.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Verbringen Sie die ersten 10 Nutzungsstunden mit der gewählten Oberfläche, bevor Sie Erweiterungen installieren oder aufwendige Lore-Bücher erstellen. Die Standardeinstellungen plus ein paar Community-Cards reichen aus, um die Eignung zu beurteilen. Vorzeitige Konfiguration erzeugt Aufwand, den die nächste Oberflächen-Migration hätte absorbieren können.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler bei der Wahl und Verwendung von Roleplay-Oberflächen',
        items: [
          '**Fehler 1: Feature-Jagd, wenn das Modell der Engpass ist.** Eine großartige Oberfläche auf einem 7B-Allzweck-Modell produziert flache Dialoge, egal wie gut das Lore-Buch-System ist. Wählen Sie eine kompetente Oberfläche und investieren Sie das restliche Budget in ein kreativschreibfreundliches 32B+-Modell. Die Modellseite finden Sie unter [Beste lokale LLMs für kreatives Schreiben 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=de).',
          '**Fehler 2: Standard-Sampling-Einstellungen bei einem kreativen Modell verwenden.** SillyTavern, Agnai und RisuAI werden mit für Frage-Antwort abgestimmten Standardeinstellungen geliefert (Temperatur ~0,7, Top-p ~0,9). Kreatives Roleplay möchte 0,85–1,05, Top-p 0,9–0,95, Wiederholungsstrafe 1,1. Presets pro Charakter speichern.',
          '**Fehler 3: Community-Karten importieren ohne sie zu lesen.** Eine Karte von chub.ai kann einen 2.000-Token-System-Prompt mit Jailbreak-Sprache, Sampling-Überschreibungen, die mit Ihren Standardeinstellungen kollidieren, oder Persönlichkeitsfelder enthalten, die der Beschreibung widersprechen. Öffnen Sie die Karte im Editor vor der Verwendung; bereinigen Sie den System-Prompt.',
          '**Fehler 4: Persona / Nutzerprofil überspringen.** Eine leere „Nutzer"-Persona bedeutet, dass das Modell keinen Anker hat, wer spricht. Selbst eine einzeilige Persona mit Name, Alter und grundlegender Situation erzeugt eine deutlich engagiertere Szene als der Standard-Leernutzer.',
          '**Fehler 5: Im Chat-Fenster statt in der Karte bearbeiten.** Modell-Output über „Neu generieren" oder „Das Modell bitten, es zu korrigieren" anzupassen, trainiert die Gewohnheit, das Modell das Schreiben übernehmen zu lassen. Speichern Sie Bearbeitungen zurück in die Character Card oder den System-Prompt; die nächste Sitzung beginnt auf einem höheren Niveau.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[SillyTavern-Dokumentation](https://docs.sillytavern.app/) — Installation, Character Cards, Lore-Bücher, Erweiterungen, Sampling-Presets.',
          '[SillyTavern-GitHub-Repository](https://github.com/SillyTavern/SillyTavern) — Quellcode, Release Notes, Community-Erweiterungen.',
          '[Agnai-GitHub-Repository](https://github.com/agnaistic/agnai) — Installation, Multi-User-Server-Setup, Character-Card-Spezifikation.',
          '[RisuAI-GitHub-Repository](https://github.com/kwaroran/RisuAI) — Installation, Plugin-System, Mobil-App-Builds.',
          '[Tavern-v2-Character-Card-Spezifikation](https://github.com/malfoyslastname/character-card-spec-v2) — das oberflächenübergreifende Character-Card-Format.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Welche ist 2026 die beste lokale Roleplay-Oberfläche?',
            a: 'SillyTavern für ~80 % der Nutzerinnen und Nutzer — tiefste Funktionen, größte Community, die meisten Erweiterungen. Agnai ist die richtige Wahl bei Multi-User-Shared-Server-Bedarf (die einzige ernstzunehmende Option der drei). RisuAI ist die leichtere Alternative für Erstnutzerinnen und -nutzer, mobile Autorinnen und Autoren oder alle, die SillyTavern zu umfangreich finden. Alle drei unterstützen Tavern-v2-Character-Cards und lassen sich mit denselben Modell-Backends verbinden; der spätere Wechsel ist unkompliziert, da Karten übertragbar sind.',
          },
          {
            q: 'Können SillyTavern, Agnai und RisuAI dieselben Character Cards verwenden?',
            a: 'Ja. Alle drei laden die Tavern-v2-Character-Card-Spezifikation, eine PNG mit eingebettetem JSON. Eine in SillyTavern erstellte Karte öffnet sich in Agnai und RisuAI ohne Konvertierung, und umgekehrt. RisuAI erweitert das Format um optionale Felder, aber Tavern-v2-Karten aus RisuAI laden noch in SillyTavern und Agnai, wobei die Erweiterungsfelder ignoriert werden. Die Migration zwischen Oberflächen ist trivial.',
          },
          {
            q: 'Senden diese Oberflächen meine Chats an einen Cloud-Server?',
            a: 'Nein, nicht standardmäßig. Alle drei sind lokal ohne Telemetrie. Chat-Daten, Character Cards und Lore-Bücher liegen alle auf Ihrem Rechner. Optionale Funktionen (Cloud-LLM-Backends, Übersetzungserweiterungen, Bildgenerierung, Websuche) sind hinter expliziter Konfiguration gesichert; wenn Sie die Oberfläche auf Ollama oder ein anderes lokales Backend richten, verlässt nichts Ihr Netzwerk. Verifizieren Sie mit einem Netzwerkmonitor, wenn Sie formal audit-taugliche Nachweise benötigen.',
          },
          {
            q: 'Welches Modell sollte ich für Roleplay verwenden?',
            a: 'Llama 3.3 70B ist die beste Allround-Wahl, wenn die Hardware es erlaubt (~42 GB VRAM bei Q4_K_M). Auf 24-GB-Rigs ist Qwen3 32B der leichtere Standard. Command R+ 104B hat die natürlichste Dialogstimme in Gruppenszenen, benötigt aber ~62 GB. Für reife Szenen, die Instruct-Tuned-Modelle ablehnen, installieren Sie Hermes 3 (Llama 3.3 Base) auf demselben Ollama und wechseln Sie szenenweise. Modelle unter 13B ohne kreatives Schreib-Fine-Tuning verlieren innerhalb von 5–10 Austauschen die Stimmenkonsistenz und sollten für ernstes Roleplay vermieden werden.',
          },
          {
            q: 'Ist SillyTavern nur für Erwachsenen-Roleplay?',
            a: 'Nein. SillyTavern ist eine Allzweck-Chat-Oberfläche mit Character Cards, Persona-Verwaltung und Lore-Büchern — nützlich für jede dialogreiche oder charaktergetriebene Kreativarbeit. Viele Autorinnen und Autoren verwenden es für nicht-adultes Fiction-Entwerfen, Multi-Charakter-Szenen, Stimmenkonsistenz-Arbeit über lange Projekte, Drehbuchübungen und Spielnarrativen-Entwurf. Das Community-Charakter-Ökosystem (chub.ai) enthält Adult-Inhalte, ist aber nicht darauf beschränkt.',
          },
          {
            q: 'Wie teile ich Charaktere mit Freunden?',
            a: 'Drei Optionen. (1) Exportieren Sie die Character Card als PNG und senden Sie die Datei — funktioniert auf allen drei Oberflächen. (2) Verwenden Sie Agnais Shared-Server-Modus, wenn Sie kollaborative Chats statt nur gemeinsame Charaktere möchten. (3) Veröffentlichen Sie die Karte auf chub.ai oder einem ähnlichen Repository für eine öffentliche Veröffentlichung. Die meisten Schreibgruppen entscheiden sich für Option 1 (Datei-Sharing) plus einen Discord-Kanal zur Koordination; Option 2 ist die richtige Wahl für Gruppen, die aktiv denselben Chat co-schreiben.',
          },
          {
            q: 'Funktionieren diese Oberflächen auf iPad oder Android?',
            a: 'RisuAI hat verpackte iOS- und Android-Apps. SillyTavern läuft auf Android über Termux (funktioniert, ist aber aufwendig — Terminal-Installation, Browser-UI). Agnai läuft in mobilen Browsern, ist aber nicht als App verpackt. Wenn Mobil Ihre primäre Plattform ist, ist RisuAI die richtige Wahl. Wenn Mobil gelegentlich ist, ist SillyTavern im Desktop-Browser mit einem mobilen Fallback auf RisuAI ein realisierbares Muster (Karten übertragbar).',
          },
          {
            q: 'Kann ich ein gemeinsames Backend für mehrere Nutzerinnen und Nutzer verwenden?',
            a: 'Für Multi-User-Roleplay speziell ist Agnai die einzige Oberfläche mit einem ernstzunehmenden Shared-Server-Modus (eingebaute Nutzerkonten, Rollentrennung, gemeinsames Charakter-/Chat-Ownership). Für das Teilen des Modell-Backends (ein Ollama, der mehrere Oberflächen auf derselben Maschine bedient) funktionieren alle drei — Ollama bedient mehrere Clients und die Oberflächen kollidieren nicht. Die „gemeinsames Backend"-Frage sind eigentlich zwei Fragen: gemeinsames Modell (einfach, alle drei) versus gemeinsame Chats und Charaktere (nur Agnai).',
          },
          {
            q: 'Welche hat die beste Lore-Buch-Unterstützung?',
            a: 'SillyTavern hat das tiefste Lore-Buch-System — rekursives Scanning (Einträge, die andere Einträge aktivieren), Keyword-Priorität, bedingte Trigger, zeichenspezifische Bereiche und Regex-Matching. Agnai und RisuAI unterstützen beide Lore-Bücher mit einfacherem Keyword-Scanning, geeignet für Projekte unter ~50 Einträgen. Für komplexen Weltenbau — Mehrfraktions-Politik, rekursive Referenzen, bedingte Enthüllungen — ist SillyTavern die einzige ernstzunehmende Wahl der drei.',
          },
          {
            q: 'Sind Gruppen-Chats auf lokalen Backends stabil?',
            a: 'Ja, mit dem richtigen Modell. Gruppen-Chat mit 3+ Charakteren möchte ein Modell mit starker Stimmendifferenzierung — Command R+ 104B ist die beste Option, Llama 3.3 70B ist der praktische Standard. Auf kleineren Modellen (unter 13B) driften Charaktere innerhalb von 5–10 Austauschen zur gleichen Stimme. SillyTavern hat die ausgereifteste Gruppen-Chat-Implementierung; Agnai und RisuAI behandeln 2–4-Charakter-Szenen sauber, bieten aber weniger Kontrolle über Turn-Taking-Dynamiken.',
          },
          {
            q: 'Muss ich bei der Verwendung von SillyTavern, Agnai oder RisuAI die DSGVO beachten?',
            a: 'Wenn Sie die Oberflächen vollständig lokal betreiben — mit einem lokalen Modell-Backend wie Ollama und ohne Cloud-Funktionen — verlassen keine personenbezogenen Daten Ihren Rechner. In diesem Fall entstehen typischerweise keine DSGVO-relevanten Verarbeitungsaktivitäten im Sinne von Art. 28 DSGVO. Bei aktivierten Cloud-LLM-Backends (OpenAI, Claude usw.) oder Cloud-Übersetzungsdiensten gelten die DSGVO-Anforderungen für Auftragsverarbeitung. Für Unternehmen in Deutschland, Österreich und der Schweiz empfehlen die BSI-Grundschutz-Kataloge den Vorzug lokal betriebener KI-Systeme, wenn personenbezogene Daten verarbeitet werden. Die lokale Betriebsweise dieser Frontends erfüllt diese Anforderung standardmäßig.',
          },
          {
            q: 'Sind diese Roleplay-Oberflächen für den deutschen Mittelstand geeignet?',
            a: 'Für Mittelstandsunternehmen, die lokale KI-Tools für interne kreative Anwendungen — z. B. Storytelling, Schulungssimulationen, Produktnarrative oder Kundenszenario-Training — einsetzen möchten, bietet SillyTavern die tiefste Anpassungsbasis. Die vollständig lokale Betriebsweise entspricht den Datenschutzanforderungen des BSI-Grundschutzes und vermeidet Cloud-Abhängigkeiten. Agnai eignet sich für kleine Teams (5–20 Personen), die gemeinsame Chat-Szenarien ohne Cloud-Dienste benötigen. RisuAI empfiehlt sich für Einstiegsprojekte mit minimalem IT-Aufwand. Alle drei laufen auf handelsüblicher Hardware (16 GB RAM, Consumer-GPU empfohlen) ohne Lizenzkosten.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Beste lokale LLMs für kreatives Schreiben 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=de) — die Modellseite; Kopf-an-Kopf-Vergleich der in diesem Leitfaden empfohlenen Modelle.',
          '[Unzensierte lokale LLMs für kreatives Schreiben: Ethik, Legalität & Best Practices](/power-local-llm/uncensored-local-llm-creative-writing-ethics?lang=de) — wann unzensierte Derivate (Hermes 3, Dolphin 3,0) die richtige Wahl sind und wo die rechtlichen Grenzen liegen.',
          '[Beste lokale LLMs 2026](/local-llms/best-local-llms-2026?lang=de) — breitere Modelllandschaft; nützlich bei der Auswahl der zu installierenden Modelle hinter diesen Oberflächen.',
          '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio?lang=de) — die zwei häufigsten Backends, die mit diesen Oberflächen verwendet werden; welches zuerst installiert werden sollte.',
          '[Persona Prompting](/prompt-engineering/persona-prompting?lang=de) — System-Prompt-Struktur für Charakterstimme; funktioniert in allen drei Oberflächen.',
          '[Temperatur und Top-P: KI-Kreativität steuern](/prompt-engineering/temperature-and-top-p-control-ai-creativity?lang=de) — Sampling-Leitfaden für die Pro-Charakter-Presets, die diese Oberflächen unterstützen.',
          '[Lokale LLM-Prompts für Fiktionautorinnen und -autoren](/power-local-llm/local-llm-prompts-for-fiction-writers?lang=de) — sofort einsetzbare System-Prompt-Templates für charaktergetriebene Fiction; funktioniert in SillyTavern, Agnai und RisuAI.',
          '[Beste Mobile LLM-Modelle 2026](/power-local-llm/mobile-llm-models-phi4-gemma-smollm?lang=de) — für iOS und Android optimierte Modellempfehlungen; passt gut zu RisuAIs Mobil-Apps.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'SillyTavern vs Agnai vs RisuAI : Meilleure interface roleplay locale (2026)',
    seoTitle: 'SillyTavern vs Agnai vs RisuAI : Meilleure UI Roleplay 2026',
    intro:
      'SillyTavern, Agnai et RisuAI sont les trois interfaces roleplay crédibles pour les LLM locaux en 2026 — chacune se connecte proprement à Ollama, llama.cpp ou tout endpoint compatible OpenAI, et chacune adopte une position différente sur la densité de fonctionnalités. SillyTavern est le choix de personnalisation poussée (celui sur lequel la plupart des utilisateurs expérimentés finissent) ; Agnai est le choix multi-utilisateur (le seul avec un vrai mode serveur partagé) ; RisuAI est l\'alternative plus légère quand SillyTavern paraît surdimensionné. Ce guide les compare sur les cartes de personnages, la gestion des personas, les livres de lore, le chat de groupe, la compatibilité des modèles, la confidentialité et la disponibilité des plateformes.',
    metaDescription:
      'Comparatif SillyTavern, Agnai et RisuAI pour le roleplay LLM local : fonctionnalités, compatibilité des modèles, confidentialité et écosystème communautaire.',
    twitterDescription:
      '3 interfaces roleplay locales comparées : SillyTavern (personnalisation poussée), Agnai (multi-utilisateur), RisuAI (alternative légère). Cartes personnages, livres de lore, chat de groupe, confidentialité.',
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
      'Auteurs de roleplay, concepteurs de personnages, collaborateurs de fiction et équipes d\'écriture créative utilisant des LLM locaux via des interfaces de chat dédiées avec cartes de personnages, gestion de personas et scènes de groupe.',
    readTime: '13 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'interface roleplay locale',
    targetKeywords: [
      'sillytavern vs agnai',
      'agnai vs risuai',
      'meilleure interface roleplay locale',
      'sillytavern ollama configuration',
      'carte personnage llm local',
      'risuai vs sillytavern',
    ],
    leadAnswerBlock:
      '**SillyTavern est le bon choix pour ~80 % des utilisateurs — support de cartes de personnages le plus complet, plus grand écosystème communautaire, surface de personnalisation la plus puissante (extensions, presets, remplacements regex, world info). Agnai est le seul des trois avec un support multi-utilisateur crédible, c\'est donc le bon choix pour les serveurs partagés, le roleplay collaboratif et les petits groupes de projet. RisuAI est le choix plus léger quand la densité de fonctionnalités de SillyTavern est la friction — même spécification de cartes, surface plus petite, première utilisation plus facile. Les trois respectent la spécification de cartes Tavern v2, les trois s\'associent à Ollama ou tout endpoint compatible OpenAI, les trois fonctionnent entièrement en local sans télémétrie. Choisissez selon la forme de votre workflow : auteur solo avec des besoins de personnalisation poussée → SillyTavern ; groupe d\'auteurs partageant des personnages → Agnai ; premier utilisateur voulant commencer à chatter aujourd\'hui → RisuAI.**',
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la meilleure interface roleplay LLM locale en 2026 : SillyTavern, Agnai ou RisuAI ?',
        answer:
          'SillyTavern est le choix par défaut pour la plupart des utilisateurs — fonctionnalités les plus complètes, plus grande communauté, plus d\'extensions. Agnai est le seul choix multi-utilisateur crédible si vous partagez personnages et chats avec des collaborateurs. RisuAI est l\'alternative plus légère pour les utilisateurs trouvant SillyTavern surdimensionné. Les trois sont open source, chargent les cartes Tavern v2 et se connectent à Ollama et aux endpoints compatibles OpenAI. SillyTavern gagne sur la profondeur de personnalisation ; Agnai gagne sur le mode serveur partagé ; RisuAI gagne sur la simplicité de première utilisation. Le choix est une question de workflow, pas de qualité brute.',
        bullets: [
          'SillyTavern — fonctionnalités les plus complètes, plus grande communauté, choix par défaut pour les utilisateurs solos avec des besoins de personnalisation.',
          'Agnai — seule interface avec un support multi-utilisateur crédible ; à choisir pour les serveurs partagés et le roleplay collaboratif.',
          'RisuAI — la plus légère des trois ; à choisir quand la densité de fonctionnalités de SillyTavern est un frein.',
          'Les trois supportent les cartes Tavern v2 ; une carte créée dans l\'une fonctionne dans les autres.',
          'Les trois se connectent à Ollama, llama.cpp, LM Studio, vLLM et tout endpoint compatible OpenAI.',
          'Les trois sont open source et fonctionnent entièrement en local ; aucune télémétrie par défaut.',
          'Recommandations de modèles : Llama 3.3 70B (meilleur général), Hermes 3 (non censuré), Command R+ (dialogue), Qwen3 32B (défaut pour rigs 24 Go).',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Notre méthode de test', anchor: '#how-we-tested' },
      { label: 'Comparatif des trois interfaces', anchor: '#comparison' },
      { label: 'SillyTavern : analyse détaillée', anchor: '#sillytavern' },
      { label: 'Agnai : analyse détaillée', anchor: '#agnai' },
      { label: 'RisuAI : analyse détaillée', anchor: '#risuai' },
      { label: 'Format de carte de personnage (Tavern v2)', anchor: '#character-cards' },
      { label: 'Recommandations de modèles par interface', anchor: '#models' },
      { label: 'Confidentialité : quelle interface communique à l\'extérieur', anchor: '#privacy' },
      { label: 'Décision : choisir son interface', anchor: '#decision' },
      { label: 'Erreurs fréquentes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Pour aller plus loin', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**SillyTavern est le choix par défaut pour ~80 % des utilisateurs en 2026.** Fonctionnalités de cartes de personnages les plus complètes, plus grand écosystème d\'extensions, surface de personnalisation la plus étendue. L\'interface sur laquelle la plupart des utilisateurs expérimentés finissent après avoir testé les alternatives.',
          '**Agnai est le seul choix multi-utilisateur crédible.** Le mode serveur partagé permet à plusieurs auteurs de se connecter à la même instance, de partager des personnages et de collaborer sur des chats de longue durée. Le bon choix pour les petits groupes d\'écriture, les cercles d\'amis et les communautés de personnages partagés.',
          '**RisuAI est l\'alternative plus légère.** Même support de cartes Tavern v2, surface de fonctionnalités plus petite, première utilisation plus facile. À choisir quand SillyTavern paraît surdimensionné ou que l\'on veut un chemin rapide vers « taper un message et obtenir une réponse ».',
          '**Les trois supportent la spécification de cartes Tavern v2.** Une carte créée dans SillyTavern fonctionne dans Agnai et RisuAI sans conversion. La migration entre interfaces est triviale.',
          '**Les trois s\'associent à Ollama, llama.cpp, LM Studio et tout endpoint compatible OpenAI.** Aucune des trois ne vous enferme dans un backend de modèle spécifique ; changer de backend est une modification de configuration.',
          '**Confidentialité : les trois fonctionnent entièrement en local sans télémétrie par défaut.** Les fonctionnalités cloud optionnelles (traduction, génération d\'images) ne communiquent à l\'extérieur que si explicitement activées. Vérifiez avec une surveillance réseau si vous avez besoin de preuves formelles.',
          '**Le choix du modèle est plus important que le choix de l\'interface.** Une bonne interface avec un petit modèle généraliste produit des dialogues plats ; une interface basique avec Llama 3.3 70B produit des scènes vivantes. Voir [Meilleurs LLM locaux pour l\'écriture créative 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=fr) pour le volet modèles.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**SillyTavern** — Node.js + interface navigateur, hébergé localement. Personnalisation la plus poussée, plus grande communauté.',
          '**Agnai** — Node.js + interface navigateur ; fonctionne localement ou en serveur partagé. Seule option multi-utilisateur des trois.',
          '**RisuAI** — Application desktop Tauri/Electron ; ensemble de fonctionnalités plus léger, première utilisation la plus simple.',
          '**Spécification de cartes :** les trois chargent Tavern v2 (le standard) ; entièrement compatibles entre elles.',
          '**Backends de modèles :** Ollama, llama.cpp, LM Studio, vLLM, tout endpoint compatible OpenAI, plus les API cloud (optionnel).',
          '**Confidentialité par défaut :** local uniquement, pas de télémétrie, pas d\'analytics dans aucune des trois par défaut. Les fonctionnalités cloud optionnelles doivent être activées explicitement.',
          '**Plateformes :** SillyTavern et Agnai fonctionnent sur macOS, Windows, Linux et Termux/Android. RisuAI fonctionne sur macOS, Windows, Linux, iOS et Android.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Notre méthode de test',
        content:
          'Les verdicts de ce guide sont basés sur une utilisation pratique des trois interfaces, pas sur une comparaison de listes de fonctionnalités.',
        items: [
          '**Versions :** SillyTavern 1.x (branche stable), Agnai dernière version stable, RisuAI dernière version desktop (mai 2026).',
          '**Backend :** Ollama 0.5+ avec Llama 3.3 70B Q4_K_M comme modèle de test principal sur les trois interfaces.',
          '**Scénarios de test :** carte de personnage Tavern v2 identique chargée dans les trois interfaces ; mêmes 5 prompts de conversation exécutés dans chacune ; scène de chat de groupe avec 3 personnages ; livre de lore avec 25 entrées (déclencheurs par mots-clés plus deux entrées récursives) ; import de preset d\'échantillonnage depuis un fichier preset tiers.',
          '**Temps d\'installation :** médiane de 3 installations fraîches par interface sur la même machine.',
          '**Évaluation des fonctionnalités :** les capacités décrites comme « plus simples » ou « limitées » reflètent le comportement observable dans les scénarios de test, pas les affirmations de la documentation. Là où les interfaces diffèrent en profondeur de livre de lore ou en stabilité de chat de groupe, le verdict reflète le comportement observé.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparatif des trois interfaces',
        content:
          '**Mêmes cartes de personnages, mêmes backends de modèles — densité de fonctionnalités et utilisateur cible différents.** Le tableau ci-dessous cartographie les différences pertinentes pour la décision.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SillyTavern est le choix de personnalisation poussée pour les utilisateurs solos ; Agnai est le choix multi-utilisateur pour les serveurs partagés ; RisuAI est l\'alternative plus légère pour les nouveaux utilisateurs — les trois chargent les mêmes cartes Tavern v2 et s\'associent aux mêmes backends de modèles.',
          },
          {
            type: 'plain-terms',
            text: 'Choisissez SillyTavern sauf raison spécifique contraire — c\'est là que la plupart des utilisateurs expérimentés finissent. Choisissez Agnai si vous voulez partager un serveur avec d\'autres auteurs. Choisissez RisuAI si SillyTavern vous semble surdimensionné et que vous voulez commencer à chatter en 5 minutes. Changer plus tard est facile car les trois chargent les mêmes cartes.',
          },
        ],
        columns: ['Caractéristique', 'SillyTavern', 'Agnai', 'RisuAI'],
        rows: [
          { 'Caractéristique': 'Surface principale', 'SillyTavern': 'Node.js local + navigateur', 'Agnai': 'Node.js local + navigateur, ou serveur partagé', 'RisuAI': 'Application desktop Tauri/Electron + mobile' },
          { 'Caractéristique': 'Temps de configuration (premier lancement)', 'SillyTavern': '~15 minutes', 'Agnai': '~10 minutes (mono-utilisateur) ; ~30 minutes (serveur)', 'RisuAI': '~5 minutes' },
          { 'Caractéristique': 'Cartes de personnages', 'SillyTavern': 'Tavern v2 (spec complète) + extensions', 'Agnai': 'Tavern v2', 'RisuAI': 'Tavern v2 + format propriétaire' },
          { 'Caractéristique': 'Persona / profil utilisateur', 'SillyTavern': 'Natif, plusieurs personas, par personnage', 'Agnai': 'Natif, multi-utilisateur', 'RisuAI': 'Natif, plus simple' },
          { 'Caractéristique': 'Livres de lore / world info', 'SillyTavern': 'Natif, très flexible (scan récursif)', 'Agnai': 'Natif, scan plus simple', 'RisuAI': 'Natif, scan plus simple' },
          { 'Caractéristique': 'Chat de groupe (plusieurs personnages)', 'SillyTavern': 'Natif, mature', 'Agnai': 'Natif', 'RisuAI': 'Natif, plus simple' },
          { 'Caractéristique': 'Multi-utilisateur / serveur partagé', 'SillyTavern': 'Non (mono-utilisateur)', 'Agnai': 'Oui (le différenciateur)', 'RisuAI': 'Non (mono-utilisateur)' },
          { 'Caractéristique': 'Extensions / plugins', 'SillyTavern': 'Plus grand écosystème (regex, presets, UIs personnalisées)', 'Agnai': 'Plus réduit', 'RisuAI': 'Système de plugins, bibliothèque plus réduite' },
          { 'Caractéristique': 'Support de backends', 'SillyTavern': 'Ollama, llama.cpp, LM Studio, vLLM, compatible OAI, KoboldAI, Aphrodite', 'Agnai': 'Ollama, llama.cpp, LM Studio, compatible OAI', 'RisuAI': 'Ollama, llama.cpp, LM Studio, compatible OAI' },
          { 'Caractéristique': 'Télémétrie par défaut', 'SillyTavern': 'Aucune', 'Agnai': 'Aucune', 'RisuAI': 'Aucune' },
          { 'Caractéristique': 'Idéal pour', 'SillyTavern': 'Utilisateurs solos souhaitant une personnalisation poussée', 'Agnai': 'Serveurs partagés, collaboration multi-utilisateur', 'RisuAI': 'Nouveaux utilisateurs, configuration légère' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Le choix est une question de workflow, pas de qualité brute. Les trois produisent des conversations identiques avec le même modèle et la même carte de personnage. Choisissez selon votre façon d\'écrire — solo avec des réglages poussés, avec des collaborateurs sur un serveur partagé, ou rapidement sur une application desktop ou mobile — et vous éviterez 90 % des hésitations.',
          },
        ],
      },
      sillytavern: {
        id: 'sillytavern',
        title: 'SillyTavern : le choix par défaut pour la personnalisation poussée',
        content:
          '**SillyTavern est l\'interface sur laquelle la plupart des utilisateurs expérimentés finissent après avoir testé les alternatives.** Plus grande communauté, fonctionnalités de cartes de personnages les plus complètes, plus grand écosystème d\'extensions dans l\'espace roleplay local.',
        items: [
          '**Installation :** `git clone` du dépôt, `npm install`, `npm start`. Le serveur local tourne sur `http://localhost:8000`. Multi-plateforme — macOS, Windows, Linux, plus Termux sur Android. La configuration se trouve dans `data/default-user/` (paramètres, personnages, world info, presets).',
          '**Cartes de personnages :** spécification Tavern v2 complète. Import par glisser-déposer (PNG avec JSON intégré), navigation et édition des champs dans l\'interface, export en PNG. Les cartes créées dans SillyTavern s\'ouvrent proprement dans Agnai et RisuAI ; la réciproque est vraie.',
          '**Livres de lore / world info :** le plus flexible des trois. Supporte le scan récursif (entrées activant d\'autres entrées), priorité des mots-clés, déclencheurs conditionnels et portées par personnage. L\'outil idéal pour les campagnes longues où le monde est plus complexe que les personnages.',
          '**Chat de groupe :** implémentation multi-personnages mature. Définissez quels personnages sont dans la scène, réglez l\'ordre des tours ou laissez le modèle gérer la prise de parole, regardez le modèle maintenir des voix distinctes sur la durée. Le choix quand les scènes de groupe sont le cœur du travail.',
          '**Extensions :** remplacement regex (nettoyer la sortie du modèle avant affichage), presets (paramètres d\'échantillonnage par personnage), intégration Stable Diffusion (génération d\'images), traduction, recherche web, UIs personnalisées. Le plus grand écosystème de modules complémentaires dans cet espace.',
          '**Points forts :** roleplay solo, projets personnels de longue durée, besoins de personnalisation poussée, construction de mondes complexes.',
          '**Points faibles :** pas de mode multi-utilisateur (mono-utilisateur par conception) ; la densité de fonctionnalités peut submerger les nouveaux utilisateurs ; la prolifération de configuration (plusieurs fichiers JSON, presets, world info, regex) prend du temps à maîtriser.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Commencez avec les presets par défaut de SillyTavern et une ou deux cartes de la communauté ou de chub.ai. Résistez à l\'envie d\'installer des extensions avant les 10 premières heures d\'utilisation — la plupart des utilisateurs n\'ont jamais besoin de plus que les paramètres par défaut plus le remplacement regex et une extension de traduction.',
          },
        ],
      },
      agnai: {
        id: 'agnai',
        title: 'Agnai : le choix multi-utilisateur',
        content:
          '**Agnai est la seule interface roleplay multi-utilisateur crédible en 2026.** Même support de cartes que SillyTavern, surface de personnalisation plus réduite, mais un vrai mode serveur partagé permettant à plusieurs auteurs de se connecter à un même backend.',
        items: [
          '**Installation (mono-utilisateur) :** Node.js + npm install + start. Tourne sur `http://localhost:3001` par défaut. ~10 minutes de configuration, comparable à SillyTavern.',
          '**Installation (serveur partagé) :** ajouter une base de données (MongoDB) et une couche d\'authentification ; Agnai gère nativement les comptes utilisateurs, la séparation des rôles et la propriété partagée des personnages et chats. ~30 minutes de configuration ; documenté dans le README du projet.',
          '**Cartes de personnages :** Tavern v2 ; import/export complet. La spécification de cartes est identique à celle de SillyTavern, les cartes se transfèrent entre interfaces.',
          '**Système de personas :** natif multi-utilisateur. Chaque utilisateur a des personas ; l\'agent choisit quelle persona est active par chat. Utile pour les serveurs partagés où plusieurs auteurs veulent leur propre profil.',
          '**Livres de lore / world info :** présent, moins puissant que SillyTavern. Adapté à la plupart des projets ; le scan récursif profond est ce qui manque.',
          '**Chat de groupe :** natif, plus simple que SillyTavern. Fonctionne pour le cas courant de 2 à 4 personnages dans une scène.',
          '**Points forts :** serveurs partagés (groupes d\'écriture, cercles d\'amis, petites communautés partageant des personnages), roleplay collaboratif, projets où plusieurs utilisateurs doivent écrire ensemble.',
          '**Points faibles :** écosystème d\'extensions plus réduit que SillyTavern ; récursion de livre de lore limitée ; pas le bon choix pour une personnalisation solo poussée.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour un serveur partagé, faites tourner Agnai derrière un reverse proxy (Caddy est le plus simple) avec TLS. La configuration par défaut est HTTP sur un seul port — convient pour localhost mais pas pour un serveur exposé à d\'autres auteurs. Le README couvre la configuration de production.',
          },
        ],
      },
      risuai: {
        id: 'risuai',
        title: 'RisuAI : l\'alternative plus légère',
        content:
          '**RisuAI est le bon choix quand SillyTavern paraît surdimensionné.** Mêmes cartes Tavern v2, surface de fonctionnalités plus réduite, packagé comme application desktop plutôt que serveur web local. La facilité de première utilisation est le différenciateur.',
        items: [
          '**Installation :** installeur desktop pour macOS, Windows, Linux, plus des applications iOS et Android. Pas de Node.js, pas de terminal — double-cliquer et ça s\'ouvre. La première utilisation la plus rapide des trois.',
          '**Cartes de personnages :** Tavern v2 plus le format étendu propriétaire de RisuAI (plus de champs de modules, déclencheurs de plot). Les cartes de SillyTavern et Agnai se chargent proprement ; les cartes créées dans RisuAI sont en grande partie portables vers les deux autres.',
          '**Système de personas :** présent, plus simple que SillyTavern. Une persona active par chat, commutable dans l\'interface.',
          '**Livres de lore / world info :** présent, scan plus simple que le système récursif de SillyTavern. Suffisant pour la plupart des projets sous ~50 entrées de lore.',
          '**Chat de groupe :** natif ; fonctionne pour les scènes typiques de 2 à 4 personnages.',
          '**Plugins :** écosystème plus réduit que SillyTavern. Le cœur couvre la plupart des besoins courants (édition de personnages, presets d\'échantillonnage, gestion de livres de lore) sans modules complémentaires tiers.',
          '**Points forts :** nouveaux utilisateurs, auteurs travaillant principalement sur mobile (les applications iOS/Android sont réelles, pas des ajouts de dernière minute), utilisateurs souhaitant une interface plus épurée que SillyTavern, roleplay solo avec un seul personnage. Pour les recommandations de modèles mobiles s\'associant bien à RisuAI, voir [Meilleurs modèles LLM mobiles en 2026](/power-local-llm/mobile-llm-models-phi4-gemma-smollm?lang=fr).',
          '**Points faibles :** communauté plus réduite que SillyTavern ; moins de profondeur de personnalisation (pas de scan de lore récursif, surface d\'extensions plus réduite) ; pas le bon choix quand le plafond de fonctionnalités compte.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'L\'application mobile de RisuAI est la seule des trois réellement packagée pour iOS et Android. SillyTavern tourne sur Android via Termux (ça marche mais c\'est laborieux) ; Agnai tourne dans les navigateurs mobiles mais n\'est pas une application packagée. Si l\'usage mobile est un vrai workflow, RisuAI est le bon choix presque indépendamment des autres fonctionnalités.',
          },
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: 'Format de carte de personnage (Tavern v2) : la lingua franca',
        content:
          '**Les trois interfaces chargent la spécification de cartes Tavern v2, ce qui rend la migration entre elles triviale.** Une carte est un PNG avec du JSON intégré dans les métadonnées ; le même fichier s\'ouvre dans n\'importe laquelle des trois.',
        items: [
          '**Contenu d\'une carte Tavern v2 :** nom, description, personnalité, scénario, premier message, exemples de dialogue, tags, notes du créateur et un prompt système. Les champs optionnels couvrent les entrées de livre de lore et les paramètres d\'échantillonnage spécifiques au personnage.',
          '**Spécification V3 (mai 2026) :** étend V2 avec un embedding de livre de lore natif, le support multilingue et des métadonnées de créateur plus riches. SillyTavern supporte entièrement l\'import V3 ; Agnai charge les cartes V3 mais ignore certains champs V3 spécifiques ; RisuAI gère V3 partiellement via son format étendu. V2 reste la lingua franca — V3 est additif et rétrocompatible, les cartes V2 fonctionnent partout.',
          '**Pourquoi c\'est important :** l\'ensemble de l\'écosystème de personnages construit par la communauté (chub.ai, exports JanitorAI, serveurs Discord thématiques) utilise Tavern v2. Une carte construite par quelqu\'un d\'autre se charge dans votre interface sans conversion.',
          '**Où la spécification s\'arrête :** Tavern v2 couvre la définition statique du personnage. La mémoire de scène à long terme, l\'état dynamique des relations et les remplacements spécifiques au chat sont des implémentations propres à chaque interface. Migrer un chat actif entre interfaces est plus difficile que migrer uniquement la carte de personnage.',
          '**Assainir les cartes importées :** une carte de chub.ai peut inclure des presets d\'échantillonnage, des remplacements de prompt système ou des prompts de jailbreak agressifs qui altèrent le comportement du modèle. Lisez les champs de prompt système et de personnalité avant d\'utiliser une carte téléchargée — surtout dans un contexte de serveur partagé (Agnai) où une carte affecte tous les utilisateurs.',
          '**Construire sa propre carte :** les trois interfaces ont un éditeur de cartes. Celui de SillyTavern est le plus complet en fonctionnalités ; celui de RisuAI a l\'interface la plus épurée. Éditez quelques cartes existantes avant d\'en créer une de zéro — la sémantique des champs devient plus claire après avoir vu des exemples.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Les cartes communautaires importées peuvent embarquer des comportements cachés : longs prompts système de jailbreak, remplacements d\'échantillonnage, contradictions de persona. Ouvrez chaque carte téléchargée dans l\'éditeur avant la première utilisation et lisez le champ prompt système. Dans un contexte de serveur partagé (Agnai), une mauvaise carte affecte tous les utilisateurs.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Recommandations de modèles par interface',
        content:
          '**Le choix de l\'interface ne contraint pas le choix du modèle.** Les trois utilisent les mêmes backends — Ollama est le plus courant — et les recommandations de modèles ci-dessous s\'appliquent également à SillyTavern, Agnai et RisuAI.',
        items: [
          '**Llama 3.3 70B** — le meilleur choix local général pour le travail de personnages. Meilleure cohérence de voix sur de longues sessions, suit bien les directions de personnage, gère les thèmes sombres quand le prompt système cadre le travail comme de la fiction. Nécessite ~42 Go de VRAM en Q4_K_M.',
          '**Qwen3 32B** — le bon choix pour les rigs 24 Go. Qualité de prose proche de Llama 70B sans le coût matériel. La valeur par défaut pour la plupart des laptops et desktops grand public.',
          '**Command R+ 104B** — le spécialiste du dialogue. Différenciation de voix conversationnelle la plus naturelle entre personnages dans une scène de groupe. Nécessite ~62 Go de VRAM en Q4_K_M.',
          '**Hermes 3 (base Llama 3.3)** — le dérivé non censuré. Même architecture que Llama 3.3 70B ; la couche de sécurité RLHF est retirée ; le modèle suit le prompt au lieu de refuser les scènes matures. Deux installations (instruct + Hermes) sur le même Ollama est le pattern courant.',
          '**Mistral Large** — le choix grand contexte. 128K de contexte out-of-the-box ; utile quand une session de roleplay est assez longue pour pousser les modèles à contexte plus court hors de la fenêtre.',
          '**À éviter pour le roleplay sérieux :** tout ce qui est en dessous de 13B sans fine-tuning d\'écriture créative. Les petits modèles généralistes perdent la cohérence de voix en 5 à 10 échanges ; le personnage « dérive » vers la voix par défaut du modèle.',
          'Pour les données comparatives sur ces choix, voir [Meilleurs LLM locaux pour l\'écriture créative 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=fr).',
          'Pour des templates de prompt système prêts à l\'emploi fonctionnant avec les trois interfaces, voir [Prompts LLM locaux pour les auteurs de fiction](/power-local-llm/local-llm-prompts-for-fiction-writers?lang=fr).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Les paramètres d\'échantillonnage comptent autant que le choix du modèle pour le roleplay. Température 0.85–1.05, top-p 0.9–0.95, pénalité de répétition 1.1 sont le point de départ. SillyTavern permet de sauvegarder des presets par personnage ; utilisez-le — différents personnages veulent souvent des températures différentes (une scène d\'interrogatoire tendue veut 0.7 ; une séquence de rêve surréaliste veut 1.2).',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité : quelle interface communique à l\'extérieur',
        content:
          '**Les trois interfaces sont locales uniquement par défaut, sans télémétrie.** Les fonctionnalités cloud optionnelles sont protégées par un opt-in explicite ; vérifiez avec une surveillance réseau si vous avez besoin de preuves formelles.',
        items: [
          '**SillyTavern :** pas de télémétrie. Fonctionnalités optionnelles pouvant communiquer à l\'extérieur : backends LLM cloud (OpenAI, Claude, etc. — uniquement si configurés), extensions de traduction (utilisent des API cloud par défaut ; configurables en local), génération d\'images Stable Diffusion (utilise votre SD local ou un endpoint distant configuré), extensions de recherche web (utilisent la recherche cloud). Chacune est opt-in et étiquetée.',
          '**Agnai :** pas de télémétrie sur l\'application principale. Le mode serveur ajoute de la télémétrie de compte uniquement si vous l\'activez. Mêmes fonctionnalités cloud optionnelles que SillyTavern (traduction, backends LLM cloud, génération d\'images) — toutes explicites.',
          '**RisuAI :** pas de télémétrie. Même pattern — local uniquement par défaut, fonctionnalités cloud optionnelles (traduction, génération d\'images, backends LLM cloud) protégées par une configuration explicite.',
          '**Vérifier les affirmations de confidentialité :** faites tourner l\'interface sans accès internet (coupez le Wi-Fi après l\'installation) — chattez avec un modèle local — confirmez que tout fonctionne encore. Ou lancez un moniteur réseau (Little Snitch sur macOS, Wireshark sur Linux) et observez les connexions sortantes pendant une session de chat. Les trois interfaces passent ce test par défaut.',
          '**Où la confidentialité peut être compromise :** backends LLM cloud (vous les avez configurés ; le prompt et la réponse quittent votre machine), extensions de traduction basées sur le cloud (les messages traduits sont envoyés à un tiers), endpoints Stable Diffusion distants, extensions de recherche web. Chacun est un choix délibéré de l\'utilisateur.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Une interface locale « respectueuse de la vie privée » n\'est aussi privée que le backend sur lequel vous la pointez. Pointer SillyTavern vers GPT-5 envoie vos prompts de roleplay à OpenAI ; pointer vers Ollama garde tout en local. L\'interface elle-même n\'est pas la contrainte ; c\'est le backend du modèle.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Décision : quelle interface choisir',
        content:
          '**Trois questions orientent la plupart des utilisateurs vers le bon choix.**',
        columns: ['Votre situation', 'Choix'],
        rows: [
          { 'Votre situation': 'Je suis un auteur solo, je veux une personnalisation poussée et je vais investir du temps pour apprendre l\'outil', 'Choix': 'SillyTavern' },
          { 'Votre situation': 'Je veux partager personnages et chats avec d\'autres auteurs sur un serveur partagé', 'Choix': 'Agnai' },
          { 'Votre situation': 'Je veux commencer à chatter aujourd\'hui ; SillyTavern me semble surdimensionné', 'Choix': 'RisuAI' },
          { 'Votre situation': 'J\'écris principalement sur mobile (iOS ou Android)', 'Choix': 'RisuAI (seule avec des applications mobiles packagées)' },
          { 'Votre situation': 'Je gère un groupe d\'écriture ou une communauté de 3+ personnes', 'Choix': 'Agnai (serveur partagé) — seul choix multi-utilisateur crédible' },
          { 'Votre situation': 'J\'ai une construction de monde complexe (50+ entrées de lore, déclencheurs récursifs)', 'Choix': 'SillyTavern (fonctionnalités de livre de lore les plus complètes)' },
          { 'Votre situation': 'Je ne suis pas sûr', 'Choix': 'Essayez d\'abord RisuAI (installation en 5 min). Si vous en sortez, passez à SillyTavern. Les cartes se transfèrent.' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SillyTavern est le choix par défaut pour les utilisateurs solos avec des besoins de personnalisation ; Agnai est le seul choix multi-utilisateur pour les serveurs partagés ; RisuAI est l\'alternative plus légère pour les nouveaux utilisateurs et les auteurs mobiles — choisissez selon la forme de votre workflow en sachant que vous pouvez migrer car les cartes se transfèrent entre les trois.',
          },
          {
            type: 'plain-terms',
            text: 'Essayez d\'abord RisuAI si vous n\'avez jamais utilisé d\'interface roleplay — vous commencez à chatter en 5 minutes. Passez à SillyTavern quand vous commencez à toucher les limites de personnalisation. Utilisez Agnai uniquement si vous avez spécifiquement besoin du mode multi-utilisateur en serveur partagé. Les cartes créées dans l\'une des trois se chargent dans les autres, le choix est donc réversible.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Passez les 10 premières heures d\'utilisation dans l\'interface choisie avant d\'installer des extensions ou de construire des livres de lore élaborés. Les paramètres par défaut plus quelques cartes communautaires suffisent à évaluer l\'adéquation. Une configuration prématurée crée une friction que la migration vers une autre interface aurait absorbée.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs fréquentes dans le choix et l\'utilisation des interfaces roleplay',
        items: [
          '**Erreur 1 : chasser les fonctionnalités quand le modèle est le goulot d\'étranglement.** Une excellente interface sur un modèle généraliste 7B produit des dialogues plats peu importe la qualité du système de livre de lore. Choisissez une interface compétente et investissez le reste du budget dans un modèle créatif de 32B+. Voir [Meilleurs LLM locaux pour l\'écriture créative 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=fr) pour le volet modèles.',
          '**Erreur 2 : utiliser les paramètres d\'échantillonnage par défaut sur un modèle créatif.** SillyTavern, Agnai et RisuAI sont livrés avec des paramètres par défaut calibrés pour les questions-réponses (température ~0.7, top-p ~0.9). Le roleplay créatif veut 0.85–1.05, top-p 0.9–0.95, pénalité de répétition 1.1. Sauvegardez des presets par personnage.',
          '**Erreur 3 : importer des cartes communautaires sans les lire.** Une carte de chub.ai peut inclure un prompt système de 2 000 tokens avec du jailbreak, des remplacements d\'échantillonnage en conflit avec vos paramètres, ou des champs de personnalité contredisant la description. Ouvrez la carte dans l\'éditeur avant de l\'utiliser ; assainissez le prompt système.',
          '**Erreur 4 : ignorer le persona / profil utilisateur.** Un persona « utilisateur » vide signifie que le modèle n\'a aucun ancrage sur qui parle. Même un persona d\'un paragraphe avec nom, âge et situation basique produit une scène dramatiquement plus engagée que l\'utilisateur vide par défaut.',
          '**Erreur 5 : éditer dans la fenêtre de chat plutôt que dans la carte.** Ajuster la sortie du modèle via « régénérer » ou « demander au modèle de corriger » entraîne l\'habitude de laisser le modèle faire l\'écriture. Sauvegardez les modifications dans la carte de personnage ou le prompt système ; la session suivante démarre à un niveau plus élevé.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Documentation SillyTavern](https://docs.sillytavern.app/) — installation, cartes de personnages, livres de lore, extensions, presets d\'échantillonnage.',
          '[Dépôt GitHub SillyTavern](https://github.com/SillyTavern/SillyTavern) — code source, notes de version, extensions communautaires.',
          '[Dépôt GitHub Agnai](https://github.com/agnaistic/agnai) — installation, configuration serveur multi-utilisateur, spécification de cartes.',
          '[Dépôt GitHub RisuAI](https://github.com/kwaroran/RisuAI) — installation, système de plugins, builds d\'applications mobiles.',
          '[Spécification de cartes Tavern v2](https://github.com/malfoyslastname/character-card-spec-v2) — le format de carte inter-interfaces.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Quelle est la meilleure interface roleplay locale en 2026 ?',
            a: 'SillyTavern pour ~80 % des utilisateurs — fonctionnalités les plus complètes, plus grande communauté, plus d\'extensions. Agnai est le bon choix si vous avez besoin d\'un serveur partagé multi-utilisateur (la seule option crédible des trois). RisuAI est l\'alternative plus légère pour les nouveaux utilisateurs, les auteurs mobiles ou ceux qui trouvent SillyTavern surdimensionné. Les trois supportent les cartes Tavern v2 et se connectent aux mêmes backends de modèles ; changer plus tard est simple car les cartes se transfèrent.',
          },
          {
            q: 'SillyTavern, Agnai et RisuAI peuvent-ils utiliser les mêmes cartes de personnages ?',
            a: 'Oui. Les trois chargent la spécification de cartes Tavern v2, un PNG avec du JSON intégré. Une carte créée dans SillyTavern s\'ouvre dans Agnai et RisuAI sans conversion, et vice versa. RisuAI étend le format avec des champs optionnels, mais les cartes Tavern v2 de RisuAI se chargent toujours dans SillyTavern et Agnai avec les champs d\'extension ignorés. La migration entre interfaces est triviale.',
          },
          {
            q: 'Ces interfaces envoient-elles mes chats vers un serveur cloud ?',
            a: 'Non, pas par défaut. Les trois sont locales uniquement sans télémétrie. Les données de chat, les cartes de personnages et les livres de lore restent sur votre machine. Les fonctionnalités optionnelles (backends LLM cloud, extensions de traduction, génération d\'images, recherche web) sont protégées par une configuration explicite ; si vous pointez l\'interface vers Ollama ou un autre backend local, rien ne quitte votre réseau. Vérifiez avec un moniteur réseau si vous avez besoin de preuves formelles.',
          },
          {
            q: 'Quel modèle utiliser pour le roleplay ?',
            a: 'Llama 3.3 70B est le meilleur choix général quand le matériel le permet (~42 Go de VRAM en Q4_K_M). Sur les rigs 24 Go, Qwen3 32B est la valeur par défaut plus légère. Command R+ 104B a la voix de dialogue la plus naturelle dans les scènes de groupe mais nécessite ~62 Go. Pour les scènes matures que les modèles instruct refusent, installez Hermes 3 (base Llama 3.3) sur le même Ollama et changez selon les scènes. Les modèles sous 13B sans fine-tuning d\'écriture créative perdent la cohérence de voix en 5 à 10 échanges et sont à éviter pour le roleplay sérieux.',
          },
          {
            q: 'SillyTavern est-il réservé au roleplay adulte ?',
            a: 'Non. SillyTavern est une interface de chat généraliste avec cartes de personnages, gestion de personas et livres de lore — utile pour tout travail créatif riche en dialogues ou axé sur les personnages. De nombreux auteurs l\'utilisent pour l\'ébauche de fiction non adulte, les scènes multi-personnages, le travail de cohérence de voix sur de longs projets, les exercices de scénario et l\'élaboration de narratifs de jeux. L\'écosystème communautaire (chub.ai) inclut du contenu adulte mais ne s\'y limite pas.',
          },
          {
            q: 'Comment partager des personnages avec des amis ?',
            a: 'Trois options. (1) Exporter la carte en PNG et envoyer le fichier — fonctionne sur les trois interfaces. (2) Utiliser le mode serveur partagé d\'Agnai si vous voulez des chats collaboratifs, pas seulement des personnages partagés. (3) Publier la carte sur chub.ai ou un dépôt similaire pour une diffusion publique. La plupart des groupes d\'écriture optent pour l\'option 1 (partage de fichiers) plus un canal Discord pour la coordination ; l\'option 2 est le bon choix pour les groupes qui co-écrivent activement le même chat.',
          },
          {
            q: 'Ces interfaces fonctionnent-elles sur iPad ou Android ?',
            a: 'RisuAI a des applications iOS et Android packagées. SillyTavern tourne sur Android via Termux (ça marche mais c\'est laborieux — installation en terminal, interface navigateur). Agnai tourne dans les navigateurs mobiles mais n\'est pas packagé comme application. Si le mobile est votre surface principale, RisuAI est le bon choix. Si le mobile est occasionnel, SillyTavern dans un navigateur desktop avec un repli mobile vers RisuAI est un pattern viable (les cartes se transfèrent).',
          },
          {
            q: 'Puis-je utiliser un backend partagé pour plusieurs utilisateurs ?',
            a: 'Pour le roleplay multi-utilisateur spécifiquement, Agnai est la seule interface avec un mode serveur partagé crédible (comptes utilisateurs intégrés, séparation des rôles, propriété partagée des personnages et chats). Pour partager uniquement le backend de modèle (un Ollama servant plusieurs interfaces sur la même machine), les trois fonctionnent — Ollama sert plusieurs clients et les interfaces ne sont pas en conflit. La question du « backend partagé » est en réalité deux questions : modèle partagé (facile, les trois) versus chats et personnages partagés (Agnai uniquement).',
          },
          {
            q: 'Laquelle a le meilleur support de livre de lore ?',
            a: 'SillyTavern a le système de livre de lore le plus complet — scan récursif (entrées activant d\'autres entrées), priorité des mots-clés, déclencheurs conditionnels, portées par personnage et correspondance regex. Agnai et RisuAI supportent tous deux les livres de lore avec un scan par mots-clés plus simple, adapté aux projets sous ~50 entrées. Pour la construction de mondes complexes — politique multi-factions, références récursives, révélations conditionnelles — SillyTavern est le seul choix crédible des trois.',
          },
          {
            q: 'Les chats de groupe sont-ils stables sur les backends locaux ?',
            a: 'Oui, avec le bon modèle. Le chat de groupe avec 3+ personnages nécessite un modèle avec une forte différenciation de voix — Command R+ 104B est la meilleure option, Llama 3.3 70B est la valeur par défaut pratique. Sur les petits modèles (sous 13B), les personnages dérivent vers la même voix en 5 à 10 échanges. SillyTavern a l\'implémentation de chat de groupe la plus mature ; Agnai et RisuAI gèrent proprement les scènes de 2 à 4 personnages mais offrent moins de contrôle sur la dynamique de prise de parole.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[Meilleurs LLM locaux pour l\'écriture créative 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=fr) — le volet modèles ; comparaison directe des choix recommandés dans ce guide.',
          '[LLM locaux non censurés pour l\'écriture créative : éthique, légalité & bonnes pratiques](/power-local-llm/uncensored-local-llm-creative-writing-ethics?lang=fr) — quand les dérivés non censurés (Hermes 3, Dolphin 3.0) sont le bon choix et où se situent les lignes légales.',
          '[Meilleurs LLM locaux en 2026](/local-llms/best-local-llms-2026?lang=fr) — panorama plus large des modèles ; utile pour choisir quels modèles installer derrière ces interfaces.',
          '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio?lang=fr) — les deux backends les plus courants associés à ces interfaces ; lequel installer en premier.',
          '[Persona Prompting](/prompt-engineering/persona-prompting?lang=fr) — structure de prompt système pour la voix des personnages ; fonctionne avec les trois interfaces.',
          '[Température et Top-P : contrôler la créativité de l\'IA](/prompt-engineering/temperature-and-top-p-control-ai-creativity?lang=fr) — guide d\'échantillonnage pour les presets par personnage que ces interfaces supportent.',
          '[Prompts LLM locaux pour les auteurs de fiction](/power-local-llm/local-llm-prompts-for-fiction-writers?lang=fr) — templates de prompt système prêts à l\'emploi pour la fiction axée sur les personnages ; fonctionne avec SillyTavern, Agnai et RisuAI.',
          '[Meilleurs modèles LLM mobiles en 2026](/power-local-llm/mobile-llm-models-phi4-gemma-smollm?lang=fr) — recommandations de modèles optimisés pour iOS et Android ; s\'associe bien aux applications mobiles de RisuAI.',
        ],
      },
    },
  },
}
