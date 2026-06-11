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
        image: '/images/sillytavern-vs-agnai-vs-risuai-setup-en.svg',
        imageCaption: 'Setup time & installation: SillyTavern 15 minutes (git clone + npm), Agnai single-user 10 minutes (npm), Agnai shared server 30 minutes (+ MongoDB + authentication), RisuAI 5 minutes (download desktop app, no terminal needed). First-time users: RisuAI fastest.',
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
        image: '/images/sillytavern-vs-agnai-vs-risuai-comparison-en.svg',
        imageCaption: 'Feature comparison: SillyTavern offers deepest lore books and extensions, multi-character group chat (mature), no multi-user mode. Agnai adds credible multi-user/shared-server mode, simpler lore books. RisuAI simplest setup (5 min), mobile apps built-in, lighter feature set. All three load Tavern v2 character cards.',
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
        image: '/images/sillytavern-vs-agnai-vs-risuai-character-cards-en.svg',
        imageCaption: 'Tavern v2 character card format: PNG + embedded JSON metadata. Contains name, description, personality, scenario, first message, example dialogue, system prompt. Interoperable across SillyTavern, Agnai, RisuAI (all load the same spec). V3 spec (May 2026) adds native lore embedding & multi-language support, backward-compatible. Community cards from chub.ai work in all three frontends.',
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
        image: '/images/sillytavern-vs-agnai-vs-risuai-models-en.svg',
        imageCaption: 'Recommended models (all 3 frontends): Llama 3.3 70B is the standard (best all-round, 42 GB VRAM, voice consistency). Qwen3 32B is the popular pick for 24 GB rigs (nearly 70B quality). Command R+ 104B for dialogue specialists (group scenes, 62 GB VRAM). Hermes 3 for uncensored 70B work. Avoid models <13B without creative fine-tunes.',
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
        image: '/images/sillytavern-vs-agnai-vs-risuai-decision-en.svg',
        imageCaption: 'Decision flowchart: (1) Sharing with other writers? → Yes: Agnai (multi-user only). (2) Want deep customisation? → Yes: SillyTavern. (3) Mobile-first? → Yes: RisuAI (packaged iOS/Android apps). Default if unsure: SillyTavern (80% of users settle here eventually). Character cards transfer between all three — switching overhead is minimal.',
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
          '[SillyTavern Chinese Roleplay Setup](/prompt-bites/sillytavern-chinese-roleplay-setup) — Qwen3 + SillyTavern: character card config for Chinese-language roleplay.',
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
          '**Die Modellwahl ist wichtiger als die Oberflächenwahl.** Eine gute Oberfläche mit einem kleinen Allzweck-Modell erzeugt flache Dialoge; eine einfache Oberfläche mit Llama 3.3 70B erzeugt lebendige Szenen. Die Modellseite finden Sie unter [Beste lokale LLMs für kreatives Schreiben 2026](/de/power-local-llm/best-local-llm-creative-writing-2026).',
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
          '**Stärken:** Erstnutzerinnen und -nutzer, mobiles Schreiben (iOS/Android-Apps sind echte Apps, keine Nachgedanken), Nutzerinnen und Nutzer, die eine sauberere UI als SillyTaverns bevorzugen, Solo-Roleplay mit einem Charakter. Für mobilspezifische Modellempfehlungen, die gut mit RisuAI funktionieren, siehe [Beste Mobile LLM-Modelle 2026](/de/power-local-llm/mobile-llm-models-phi4-gemma-smollm).',
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
          'Für die Kopf-an-Kopf-Daten zu diesen Empfehlungen, siehe [Beste lokale LLMs für kreatives Schreiben 2026](/de/power-local-llm/best-local-llm-creative-writing-2026).',
          'Für sofort einsetzbare System-Prompt-Templates, die mit allen drei Oberflächen funktionieren, siehe [Lokale LLM-Prompts für Fiktionautorinnen und -autoren](/de/power-local-llm/local-llm-prompts-for-fiction-writers).',
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
          '**Fehler 1: Feature-Jagd, wenn das Modell der Engpass ist.** Eine großartige Oberfläche auf einem 7B-Allzweck-Modell produziert flache Dialoge, egal wie gut das Lore-Buch-System ist. Wählen Sie eine kompetente Oberfläche und investieren Sie das restliche Budget in ein kreativschreibfreundliches 32B+-Modell. Die Modellseite finden Sie unter [Beste lokale LLMs für kreatives Schreiben 2026](/de/power-local-llm/best-local-llm-creative-writing-2026).',
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
          '[Beste lokale LLMs für kreatives Schreiben 2026](/de/power-local-llm/best-local-llm-creative-writing-2026) — die Modellseite; Kopf-an-Kopf-Vergleich der in diesem Leitfaden empfohlenen Modelle.',
          '[Unzensierte lokale LLMs für kreatives Schreiben: Ethik, Legalität & Best Practices](/de/power-local-llm/uncensored-local-llm-creative-writing-ethics) — wann unzensierte Derivate (Hermes 3, Dolphin 3,0) die richtige Wahl sind und wo die rechtlichen Grenzen liegen.',
          '[Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) — breitere Modelllandschaft; nützlich bei der Auswahl der zu installierenden Modelle hinter diesen Oberflächen.',
          '[Ollama vs LM Studio](/de/local-llms/ollama-vs-lm-studio) — die zwei häufigsten Backends, die mit diesen Oberflächen verwendet werden; welches zuerst installiert werden sollte.',
          '[Persona Prompting](/de/prompt-engineering/persona-prompting) — System-Prompt-Struktur für Charakterstimme; funktioniert in allen drei Oberflächen.',
          '[Temperatur und Top-P: KI-Kreativität steuern](/de/prompt-engineering/temperature-and-top-p-control-ai-creativity) — Sampling-Leitfaden für die Pro-Charakter-Presets, die diese Oberflächen unterstützen.',
          '[Lokale LLM-Prompts für Fiktionautorinnen und -autoren](/de/power-local-llm/local-llm-prompts-for-fiction-writers) — sofort einsetzbare System-Prompt-Templates für charaktergetriebene Fiction; funktioniert in SillyTavern, Agnai und RisuAI.',
          '[Beste Mobile LLM-Modelle 2026](/de/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — für iOS und Android optimierte Modellempfehlungen; passt gut zu RisuAIs Mobil-Apps.',
          '[SillyTavern Chinesisches Rollenspiel-Setup](/de/prompt-bites/sillytavern-chinese-roleplay-setup) — Qwen3 + SillyTavern: Charakterkarten-Konfiguration für chinesischsprachiges Rollenspiel.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'SillyTavern vs Agnai vs RisuAI: Mejor interfaz de roleplay local (2026)',
    seoTitle: 'SillyTavern vs Agnai vs RisuAI: UI de roleplay local 2026',
    intro:
      'SillyTavern, Agnai y RisuAI son las tres interfaces de roleplay más sólidas para LLM locales en 2026 — cada una se conecta fácilmente con Ollama, llama.cpp o cualquier endpoint compatible con OpenAI, y cada una adopta una posición diferente en cuanto a la densidad de funciones. SillyTavern es la opción de personalización profunda (en la que la mayoría de usuarios experimentados terminan); Agnai es la opción multiusuario (la única con un verdadero modo de servidor compartido); RisuAI es la alternativa más ligera cuando SillyTavern parece excesivo. Esta guía los compara en tarjetas de personaje, gestión de personas, libros de lore, chat grupal, compatibilidad de modelos, privacidad y alcance de plataformas.',
    metaDescription:
      'Comparativa de SillyTavern, Agnai y RisuAI para roleplay con LLM local. Funciones, compatibilidad de modelos, privacidad y ecosistema comunitario comparados.',
    twitterDescription:
      '3 interfaces de roleplay local comparadas: SillyTavern (personalización profunda), Agnai (multiusuario), RisuAI (alternativa ligera). Tarjetas de personaje, libros de lore, chat grupal, privacidad.',
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
      'Escritores de roleplay, diseñadores de personajes, colaboradores de ficción y equipos de escritura creativa que ejecutan LLM locales a través de interfaces de chat dedicadas con tarjetas de personaje, gestión de personas y escenas grupales.',
    readTime: '13 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'interfaz de roleplay local',
    targetKeywords: [
      'sillytavern vs agnai',
      'agnai vs risuai',
      'mejor ui de roleplay local',
      'sillytavern configurar ollama',
      'tarjeta de personaje llm local',
      'risuai vs sillytavern',
    ],
    leadAnswerBlock:
      '**SillyTavern es la opción correcta para ~80% de los usuarios — la compatibilidad de tarjetas de personaje más profunda, el ecosistema comunitario más grande y la superficie de personalización más potente (extensiones, presets, reemplazos regex, world info). Agnai es la única de las tres con compatibilidad multiusuario real, por lo que es la opción correcta para servidores compartidos, roleplay colaborativo y proyectos grupales pequeños. RisuAI es la opción más ligera cuando la densidad de funciones de SillyTavern es el obstáculo — misma especificación de tarjetas de personaje, superficie más pequeña, primera ejecución más sencilla. Las tres hablan la especificación de tarjetas de personaje Tavern v2, las tres se conectan con Ollama o cualquier endpoint compatible con OpenAI, las tres se ejecutan completamente en local sin telemetría. Elige según la forma de tu flujo de trabajo: escritor en solitario con necesidades de personalización profunda → SillyTavern; grupo de escritores que comparten personajes → Agnai; usuario nuevo que quiere empezar a chatear hoy → RisuAI.**',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor interfaz de roleplay con LLM local en 2026: SillyTavern, Agnai o RisuAI?',
        answer:
          'SillyTavern es la opción predeterminada para la mayoría de usuarios — funciones más profundas, comunidad más grande, más extensiones. Agnai es la única opción multiusuario creíble si compartes personajes y chats con colaboradores. RisuAI es la alternativa más ligera para usuarios que encuentran SillyTavern excesivo. Las tres son de código abierto, cargan tarjetas de personaje Tavern v2 y se conectan a Ollama y endpoints compatibles con OpenAI. SillyTavern gana en profundidad de personalización (extensiones, reemplazos regex, world info, presets avanzados); Agnai gana en modo de servidor compartido; RisuAI gana en simplicidad para la primera ejecución. La decisión es la forma del flujo de trabajo, no la calidad bruta — las tres producen la misma conversación cuando se combinan con el mismo modelo.',
        bullets: [
          'SillyTavern — funciones más profundas, comunidad más grande, opción predeterminada para usuarios en solitario con necesidades de personalización.',
          'Agnai — única interfaz con soporte multiusuario real; elige para servidores compartidos y roleplay colaborativo.',
          'RisuAI — la más ligera de las tres; elige cuando la densidad de funciones de SillyTavern es el obstáculo.',
          'Las tres hablan tarjetas de personaje Tavern v2; las tarjetas de una funcionan en las otras.',
          'Las tres se conectan a Ollama, llama.cpp, LM Studio, vLLM y cualquier endpoint compatible con OpenAI.',
          'Las tres son de código abierto y se ejecutan completamente en local; sin telemetría por defecto en ninguna.',
          'Recomendaciones de modelos: Llama 3.3 70B (mejor todo-terreno), Hermes 3 (sin censura), Command R+ (diálogo), Qwen3 32B (opción predeterminada para rigs de 24 GB).',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Cómo lo probamos', anchor: '#how-we-tested' },
      { label: 'Comparativa de tres interfaces', anchor: '#comparison' },
      { label: 'SillyTavern: análisis en profundidad', anchor: '#sillytavern' },
      { label: 'Agnai: análisis en profundidad', anchor: '#agnai' },
      { label: 'RisuAI: análisis en profundidad', anchor: '#risuai' },
      { label: 'Formato de tarjeta de personaje (Tavern v2)', anchor: '#character-cards' },
      { label: 'Recomendaciones de modelos por interfaz', anchor: '#models' },
      { label: 'Privacidad: qué interfaz llama a casa', anchor: '#privacy' },
      { label: 'Decisión: elige tu interfaz', anchor: '#decision' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**SillyTavern es la opción predeterminada para ~80% de los usuarios en 2026.** Funciones de tarjetas de personaje más profundas, ecosistema de extensiones más grande, mayor superficie de personalización. La interfaz en la que la mayoría de usuarios experimentados de roleplay termina tras probar alternativas.',
          '**Agnai es la única opción multiusuario creíble.** El modo de servidor compartido permite que varios escritores se conecten a la misma instancia, compartan personajes y colaboren en chats de larga duración. La opción correcta para grupos de escritura pequeños, círculos de amigos y comunidades de personajes compartidos.',
          '**RisuAI es la alternativa más ligera.** Mismo soporte de tarjetas de personaje Tavern v2, superficie de funciones más pequeña, primera ejecución más sencilla. La opción cuando SillyTavern parece excesivo o quieres un camino más rápido hacia "escribe un mensaje y obtén una respuesta".',
          '**Las tres hablan la especificación de tarjetas de personaje Tavern v2.** Una tarjeta creada en SillyTavern funciona en Agnai y RisuAI sin conversión. La migración entre interfaces es trivial.',
          '**Las tres se conectan con Ollama, llama.cpp, LM Studio y cualquier endpoint compatible con OpenAI.** Ninguna te ata a un backend de modelo específico; cambiar de backend es un cambio de configuración.',
          '**Privacidad: las tres se ejecutan completamente en local sin telemetría por defecto.** Las funciones de nube opcionales en cada una (traducción, generación de imágenes) solo se comunican al exterior cuando se activan explícitamente. Verifica con monitorización de red si necesitas evidencia de auditoría formal.',
          '**La elección del modelo es más importante que la elección de la interfaz.** Una gran interfaz con un modelo de propósito general pequeño produce diálogos planos; una interfaz básica con Llama 3.3 70B produce escenas animadas. Consulta [Mejores LLM locales para escritura creativa 2026](/es/power-local-llm/best-local-llm-creative-writing-2026) para la parte del modelo.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        image: '/images/sillytavern-vs-agnai-vs-risuai-setup-es.svg',
        imageCaption: 'Tiempo de configuración e instalación: SillyTavern 15 minutos (git clone + npm), Agnai usuario único 10 minutos (npm), Agnai servidor compartido 30 minutos (+ MongoDB + autenticación), RisuAI 5 minutos (descarga la app de escritorio, sin terminal). Usuarios primerizos: RisuAI es el más rápido.',
        items: [
          '**SillyTavern** — Node.js + UI en navegador, alojado localmente. Personalización más profunda, comunidad más grande.',
          '**Agnai** — Node.js + UI en navegador; se ejecuta localmente o como servidor compartido. La única opción multiusuario de las tres.',
          '**RisuAI** — app de escritorio Tauri/Electron; conjunto de funciones más ligero, primera ejecución más sencilla.',
          '**Especificación de tarjetas de personaje:** las tres cargan Tavern v2 (el estándar); totalmente compatibles entre sí.',
          '**Backends de modelos:** Ollama, llama.cpp, LM Studio, vLLM, cualquier endpoint compatible con OpenAI, además de APIs de nube (opcionales).',
          '**Privacidad por defecto:** solo local, sin telemetría, sin analíticas en ninguna de las tres por defecto. Las funciones de nube opcionales deben activarse explícitamente.',
          '**Plataformas:** SillyTavern y Agnai se ejecutan en macOS, Windows, Linux y Termux/Android. RisuAI se ejecuta en macOS, Windows, Linux, iOS y Android.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Cómo lo probamos',
        content:
          'Los veredictos de esta guía se basan en el uso práctico de las tres interfaces, no en comparación de listas de funciones.',
        items: [
          '**Versiones:** SillyTavern 1.x (rama estable), Agnai última versión estable, RisuAI última versión de escritorio (mayo 2026).',
          '**Backend:** Ollama 0.5+ ejecutando Llama 3.3 70B Q4_K_M como modelo de prueba principal en las tres interfaces.',
          '**Escenarios de prueba:** tarjeta de personaje Tavern v2 idéntica cargada en las tres interfaces; mismos 5 prompts de conversación ejecutados en cada una; escena de chat grupal con 3 personajes; libro de lore con 25 entradas (disparadores por palabras clave más dos entradas recursivas); importación de preset de muestreo desde un archivo de preset de terceros.',
          '**Tiempo de instalación:** mediana de 3 instalaciones nuevas por interfaz en la misma máquina.',
          '**Evaluación de funciones:** las capacidades descritas como "más simples" o "limitadas" reflejan el comportamiento observable en los escenarios de prueba, no las afirmaciones de la documentación. Donde las interfaces difieren en la profundidad del libro de lore o la estabilidad del chat grupal, el veredicto refleja el comportamiento observado, no la lista de funciones que cada proyecto publica.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparativa de tres interfaces',
        content:
          '**Mismas tarjetas de personaje, mismos backends de modelos — diferente densidad de funciones y usuario objetivo.** La tabla siguiente mapea las diferencias relevantes para la decisión.',
        image: '/images/sillytavern-vs-agnai-vs-risuai-comparison-es.svg',
        imageCaption: 'Comparativa de funciones: SillyTavern ofrece libros de lore y extensiones más profundos, chat grupal multicarácter (maduro), sin modo multiusuario. Agnai añade modo multiusuario/servidor compartido real, libros de lore más simples. RisuAI configuración más sencilla (5 min), apps móviles integradas, conjunto de funciones más ligero. Las tres cargan tarjetas de personaje Tavern v2.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SillyTavern es la opción de personalización profunda para usuarios en solitario; Agnai es la opción multiusuario para servidores compartidos; RisuAI es la opción más ligera para usuarios primerizos — las tres cargan las mismas tarjetas de personaje Tavern v2 y se conectan con los mismos backends de modelos.',
          },
          {
            type: 'plain-terms',
            text: 'Elige SillyTavern a menos que tengas una razón específica para no hacerlo — es en la que la mayoría de usuarios experimentados termina. Elige Agnai si quieres compartir un servidor con otros escritores. Elige RisuAI si SillyTavern te parece excesivo y quieres empezar a chatear en 5 minutos. Cambiar después es sencillo porque las tres cargan las mismas tarjetas de personaje.',
          },
        ],
        columns: ['Función', 'SillyTavern', 'Agnai', 'RisuAI'],
        rows: [
          { 'Función': 'Superficie principal', 'SillyTavern': 'Node.js local + navegador', 'Agnai': 'Node.js local + navegador, o servidor compartido', 'RisuAI': 'App de escritorio Tauri/Electron + móvil' },
          { 'Función': 'Tiempo de configuración (primera ejecución)', 'SillyTavern': '~15 minutos', 'Agnai': '~10 minutos (usuario único); ~30 minutos (servidor)', 'RisuAI': '~5 minutos' },
          { 'Función': 'Tarjetas de personaje', 'SillyTavern': 'Tavern v2 (especificación completa) + extensiones', 'Agnai': 'Tavern v2', 'RisuAI': 'Tavern v2 + formato propio' },
          { 'Función': 'Persona / perfil de usuario', 'SillyTavern': 'Nativo, múltiples personas, por personaje', 'Agnai': 'Nativo, multiusuario', 'RisuAI': 'Nativo, más simple' },
          { 'Función': 'Libros de lore / world info', 'SillyTavern': 'Nativo, muy flexible (escaneo recursivo)', 'Agnai': 'Nativo, escaneo más simple', 'RisuAI': 'Nativo, escaneo más simple' },
          { 'Función': 'Chat grupal (múltiples personajes)', 'SillyTavern': 'Nativo, maduro', 'Agnai': 'Nativo', 'RisuAI': 'Nativo, más simple' },
          { 'Función': 'Multiusuario / servidor compartido', 'SillyTavern': 'No (usuario único)', 'Agnai': 'Sí (el diferenciador)', 'RisuAI': 'No (usuario único)' },
          { 'Función': 'Extensiones / plugins', 'SillyTavern': 'Ecosistema más grande (regex, presets, UIs personalizadas)', 'Agnai': 'Más pequeño', 'RisuAI': 'Sistema de plugins, biblioteca más pequeña' },
          { 'Función': 'Compatibilidad de backends', 'SillyTavern': 'Ollama, llama.cpp, LM Studio, vLLM, compatible con OAI, KoboldAI, Aphrodite', 'Agnai': 'Ollama, llama.cpp, LM Studio, compatible con OAI', 'RisuAI': 'Ollama, llama.cpp, LM Studio, compatible con OAI' },
          { 'Función': 'Telemetría por defecto', 'SillyTavern': 'Ninguna', 'Agnai': 'Ninguna', 'RisuAI': 'Ninguna' },
          { 'Función': 'Mejor para', 'SillyTavern': 'Usuarios en solitario que buscan personalización profunda', 'Agnai': 'Servidores compartidos, colaboración multiusuario', 'RisuAI': 'Usuarios primerizos, configuración más ligera' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La decisión es la forma del flujo de trabajo, no la calidad bruta. Las tres producen conversaciones idénticas cuando se combinan con el mismo modelo y la misma tarjeta de personaje. Elige según cómo escribes — en solitario con ajustes profundos, con colaboradores en un servidor compartido, o rápidamente en una app de escritorio o móvil — y evitas el 90% de las dudas.',
          },
        ],
      },
      sillytavern: {
        id: 'sillytavern',
        title: 'SillyTavern: la opción predeterminada de personalización profunda',
        content:
          '**SillyTavern es en la que la mayoría de usuarios experimentados de roleplay termina tras probar alternativas.** Comunidad más grande, funciones de tarjetas de personaje más profundas, mayor ecosistema de extensiones en el espacio del roleplay local.',
        items: [
          '**Instalación:** `git clone` del repo, `npm install`, `npm start`. El servidor local se ejecuta en `http://localhost:8000`. Multiplataforma — macOS, Windows, Linux y Termux en Android. La configuración reside en `data/default-user/` (ajustes, personajes, world info, presets).',
          '**Tarjetas de personaje:** especificación completa Tavern v2. Importación por arrastrar y soltar (PNG con JSON embebido), explorar y editar campos en la UI, exportar de vuelta a PNG. Las tarjetas creadas en SillyTavern se abren en Agnai y RisuAI sin problemas; lo contrario también es válido.',
          '**Libros de lore / world info:** el más flexible de los tres. Admite escaneo recursivo (entradas que activan otras entradas), prioridad de palabras clave, disparadores condicionales y ámbitos por personaje. La herramienta adecuada para campañas de larga duración donde el mundo es más complejo que los personajes.',
          '**Chat grupal:** implementación multicarácter madura. Define qué personajes están en la escena, establece el orden de turnos o turnos dirigidos por el modelo, observa cómo el modelo mantiene voces distintas a lo largo de los intercambios. La opción cuando las escenas grupales son la parte central del trabajo.',
          '**Extensiones:** reemplazo regex (sanear la salida del modelo antes de mostrarla), presets (ajustes de muestreo por personaje), integración con Stable Diffusion (generación de imágenes), traducción, búsqueda web, UIs personalizadas. El mayor ecosistema de complementos en este espacio.',
          '**Donde brilla:** roleplay en solitario, proyectos personales de larga duración, necesidades de personalización profunda, construcción de mundos complejos.',
          '**Donde falla:** sin modo multiusuario (diseño de usuario único); la superficie de funciones puede abrumar a usuarios primerizos; la dispersión de configuración (múltiples archivos JSON, presets, world info, regex) requiere tiempo para aprender.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Empieza con los presets predeterminados de SillyTavern y una o dos tarjetas de personaje de chub.ai o la comunidad de SillyTavern. Resiste el impulso de instalar extensiones antes de las primeras 10 horas de uso — la mayoría de usuarios nunca necesita más que los valores predeterminados, el reemplazo regex y una extensión de traducción.',
          },
        ],
      },
      agnai: {
        id: 'agnai',
        title: 'Agnai: la opción multiusuario',
        content:
          '**Agnai es la única interfaz de roleplay multiusuario creíble en 2026.** Mismo soporte de tarjetas de personaje que SillyTavern, superficie de personalización más pequeña, pero un verdadero modo de servidor compartido que permite que varios escritores se conecten a un mismo backend.',
        items: [
          '**Instalación (usuario único):** Node.js + npm install + start. Se ejecuta en `http://localhost:3001` por defecto. ~10 minutos de configuración, comparable a la simplicidad de SillyTavern.',
          '**Instalación (servidor compartido):** añade una base de datos (MongoDB) y una capa de autenticación; Agnai gestiona de forma nativa las cuentas de usuario, la separación de roles y la propiedad compartida de personajes/chats. ~30 minutos de configuración; documentado en el README del proyecto.',
          '**Tarjetas de personaje:** Tavern v2; importación/exportación completa. La especificación de tarjetas es la misma que la de SillyTavern, por lo que las tarjetas se mueven entre interfaces.',
          '**Sistema de personas:** multiusuario nativo. Cada usuario tiene personas; el agente elige qué persona está activa por chat. Útil para servidores compartidos donde varios escritores quieren su propio perfil.',
          '**Libros de lore / world info:** presentes, menos potentes que los de SillyTavern. Adecuados para la mayoría de proyectos; lo que falta es el escaneo recursivo profundo.',
          '**Chat grupal:** nativo, más simple que el de SillyTavern. Funciona para el caso habitual de 2 a 4 personajes en una escena.',
          '**Donde brilla:** servidores compartidos (grupos de escritura, círculos de amigos, pequeñas comunidades que comparten personajes), roleplay colaborativo, proyectos donde varios usuarios necesitan escribir juntos.',
          '**Donde falla:** ecosistema de extensiones más pequeño que SillyTavern; la recursión de libros de lore es limitada; no es la opción adecuada para personalización en solitario profunda.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para un servidor compartido, ejecuta Agnai detrás de un proxy inverso (Caddy es el más sencillo) con TLS. La configuración predeterminada es HTTP y escucha en un único puerto — está bien para localhost pero no para un servidor que expones a otros escritores. El README cubre la configuración de producción.',
          },
        ],
      },
      risuai: {
        id: 'risuai',
        title: 'RisuAI: la alternativa más ligera',
        content:
          '**RisuAI es la opción correcta cuando SillyTavern parece excesivo.** Mismas tarjetas de personaje Tavern v2, superficie de funciones más pequeña, empaquetado como app de escritorio en lugar de servidor web local. La primera ejecución sin fricción es el diferenciador.',
        items: [
          '**Instalación:** instalador de escritorio para macOS, Windows, Linux, más apps para iOS y Android. Sin Node.js, sin terminal — doble clic y se abre. La primera ejecución más rápida de las tres.',
          '**Tarjetas de personaje:** Tavern v2 más el formato extendido propio de RisuAI (más campos de módulo, disparadores de trama). Las tarjetas de SillyTavern y Agnai cargan sin problemas; las tarjetas creadas en RisuAI son en su mayoría portables de vuelta a las otras dos.',
          '**Sistema de personas:** presente, más simple que el de SillyTavern. Una persona activa por chat, intercambiable en la UI.',
          '**Libros de lore / world info:** presentes, escaneo más simple que el sistema recursivo de SillyTavern. Adecuado para la mayoría de proyectos con hasta ~50 entradas de lore.',
          '**Chat grupal:** nativo; funciona para escenas típicas de 2 a 4 personajes.',
          '**Plugins:** ecosistema más pequeño que el de SillyTavern. El núcleo cubre la mayoría de necesidades habituales (edición de personajes, presets de muestreo, gestión de libros de lore) sin complementos de terceros.',
          '**Donde brilla:** usuarios primerizos, escritores en móvil (las apps de iOS/Android son reales, no una idea de último momento), usuarios que quieren una UI más limpia que la de SillyTavern, roleplay en solitario con un solo personaje. Para recomendaciones de modelos específicos para móvil que funcionan bien con RisuAI, consulta [Mejores modelos LLM para móvil en 2026](/es/power-local-llm/mobile-llm-models-phi4-gemma-smollm).',
          '**Donde falla:** comunidad más pequeña que SillyTavern; menor profundidad de personalización (sin escaneo recursivo de lore, superficie de extensiones más pequeña); no es la opción adecuada cuando el techo de funciones importa.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La app móvil de RisuAI es la única de las tres que está realmente empaquetada para iOS y Android. SillyTavern se ejecuta en Android a través de Termux (funciona pero es complicado — instalación por terminal, UI en navegador). Agnai se ejecuta en navegadores móviles pero no está empaquetada como app. Si el uso móvil es un flujo de trabajo real, RisuAI es la opción correcta casi independientemente de otras funciones.',
          },
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: 'Formato de tarjeta de personaje (Tavern v2): la lingua franca',
        content:
          '**Las tres interfaces cargan la especificación de tarjetas de personaje Tavern v2, lo que hace trivial la migración entre ellas.** Una tarjeta es un PNG con JSON embebido en los metadatos; el mismo archivo se abre en cualquiera de las tres.',
        image: '/images/sillytavern-vs-agnai-vs-risuai-character-cards-es.svg',
        imageCaption: 'Formato de tarjeta de personaje Tavern v2: PNG + metadatos JSON embebidos. Contiene nombre, descripción, personalidad, escenario, primer mensaje, diálogo de ejemplo, prompt del sistema. Interoperable entre SillyTavern, Agnai, RisuAI (todas cargan la misma especificación). La especificación V3 (mayo 2026) añade lore embebido nativo y soporte multilingüe, compatible hacia atrás. Las tarjetas comunitarias de chub.ai funcionan en las tres interfaces.',
        items: [
          '**Qué contiene una tarjeta Tavern v2:** nombre, descripción, personalidad, escenario, primer mensaje, diálogo de ejemplo, etiquetas, notas del creador y un prompt del sistema. Los campos opcionales cubren entradas de libros de lore y ajustes de muestreo específicos del personaje.',
          '**Especificación V3 (mayo 2026):** extiende V2 con lore embebido nativo, soporte multilingüe y metadatos de creador más ricos. SillyTavern admite completamente la importación de V3; Agnai carga tarjetas V3 pero ignora algunos campos específicos de V3; RisuAI maneja V3 parcialmente a través de su formato extendido. V2 sigue siendo la lingua franca — V3 es aditivo y compatible hacia atrás, por lo que las tarjetas V2 funcionan en todos lados.',
          '**Por qué importa:** todo el ecosistema de personajes creados por la comunidad (chub.ai, exportaciones de JanitorAI, servidores de Discord temáticos de personajes) usa Tavern v2. Una tarjeta creada por otra persona carga en tu interfaz sin conversión.',
          '**Donde termina la especificación:** Tavern v2 cubre la definición estática del personaje. La memoria de escena de larga duración, el estado de relación dinámico y las anulaciones específicas del chat son implementaciones por interfaz. Migrar un chat activo entre interfaces es más difícil que migrar solo la tarjeta de personaje.',
          '**Sanear tarjetas importadas:** una tarjeta de chub.ai puede incluir presets de muestreo, anulaciones del prompt del sistema o prompts de jailbreak agresivos que alteran el comportamiento del modelo. Lee los campos del prompt del sistema y la personalidad antes de usar una tarjeta descargada — especialmente en un contexto de servidor compartido (Agnai) donde una tarjeta afecta a todos los usuarios.',
          '**Crear tu propia tarjeta:** las tres interfaces tienen un editor de tarjetas. El de SillyTavern es el más completo en funciones; el de RisuAI tiene la UI más limpia. Edita algunas tarjetas existentes antes de crear desde cero — la semántica de los campos tiene más sentido después de ver ejemplos.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Las tarjetas comunitarias importadas pueden venir con comportamientos ocultos: prompts del sistema de jailbreak largos, anulaciones de muestreo, contradicciones de persona. Abre cada tarjeta descargada en el editor antes del primer uso y lee el campo del prompt del sistema. En un contexto de servidor compartido (Agnai), una tarjeta defectuosa afecta a todos los usuarios.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Recomendaciones de modelos por interfaz',
        content:
          '**La elección de interfaz no limita la elección de modelo.** Las tres hablan los mismos backends — Ollama es el más común — y las recomendaciones de modelos a continuación se aplican igualmente a SillyTavern, Agnai y RisuAI.',
        image: '/images/sillytavern-vs-agnai-vs-risuai-models-es.svg',
        imageCaption: 'Modelos recomendados (las 3 interfaces): Llama 3.3 70B es el estándar (mejor todo-terreno, 42 GB VRAM, consistencia de voz). Qwen3 32B es la opción popular para rigs de 24 GB (calidad casi equivalente a 70B). Command R+ 104B para especialistas en diálogo (escenas grupales, 62 GB VRAM). Hermes 3 para trabajo de 70B sin censura. Evitar modelos <13B sin ajuste fino creativo.',
        items: [
          '**Llama 3.3 70B** — la mejor opción local todo-terreno para trabajo con personajes. Mayor consistencia de voz en sesiones largas, sigue bien la dirección del personaje, maneja temas oscuros cuando el prompt del sistema enmarca el trabajo como ficción. Requiere ~42 GB VRAM en Q4_K_M.',
          '**Qwen3 32B** — la opción correcta para rigs de 24 GB. Calidad de prosa casi equivalente a Llama 70B sin el costo de hardware. La opción predeterminada para la mayoría de laptops y desktops de consumidor.',
          '**Command R+ 104B** — el especialista en diálogo. Diferenciación de voz conversacional más natural entre personajes en una escena grupal. Requiere ~62 GB VRAM en Q4_K_M.',
          '**Hermes 3 (base Llama 3.3)** — el derivado sin censura. Misma arquitectura que Llama 3.3 70B; la capa de seguridad RLHF está eliminada; el modelo sigue el prompt en lugar de rechazar escenas maduras. Dos instalaciones (instruct + Hermes) en el mismo Ollama es el patrón habitual.',
          '**Mistral Large** — la opción de contexto largo. 128K de contexto de fábrica; útil cuando una sesión de roleplay es lo suficientemente larga como para sacar a los modelos de contexto más pequeños de la ventana.',
          '**Evitar para trabajo de roleplay serio:** cualquier cosa por debajo de 13B sin un ajuste fino de escritura creativa. Los modelos pequeños de propósito general pierden la consistencia de voz en 5 a 10 intercambios; el personaje "deriva" hacia la voz predeterminada del modelo.',
          'Para los datos comparativos de estas opciones, consulta [Mejores LLM locales para escritura creativa 2026](/es/power-local-llm/best-local-llm-creative-writing-2026).',
          'Para plantillas de prompts del sistema listas para usar que funcionan en las tres interfaces, consulta [Prompts de LLM local para escritores de ficción](/es/power-local-llm/local-llm-prompts-for-fiction-writers).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Los ajustes de muestreo importan tanto como la elección del modelo para el roleplay. Temperatura 0,85–1,05, top-p 0,9–0,95, penalización de repetición 1,1 son el punto de partida. SillyTavern permite guardar presets por personaje; úsalo — distintos personajes a menudo necesitan temperaturas diferentes (una escena de interrogatorio tensa quiere 0,7; una secuencia de sueño surrealista quiere 1,2).',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad: qué interfaz llama a casa',
        content:
          '**Las tres interfaces son solo locales por defecto, sin telemetría.** Las funciones de nube opcionales en cada una están bloqueadas detrás de un opt-in explícito; verifica con monitorización de red si necesitas evidencia de auditoría formal.',
        items: [
          '**SillyTavern:** sin telemetría. Funciones opcionales que pueden comunicarse: backends de LLM en la nube (OpenAI, Claude, etc. — solo si los configuras), extensiones de traducción (usan APIs de nube por defecto; configurables a local), generación de imágenes con Stable Diffusion (usa tu SD local o un endpoint remoto configurado), extensiones de búsqueda web (usan búsqueda en la nube). Cada una requiere opt-in y está etiquetada.',
          '**Agnai:** sin telemetría en la app principal. El modo servidor añade telemetría de cuenta solo si la activas. Las mismas funciones de nube opcionales que SillyTavern (traducción, backends de LLM en la nube, generación de imágenes) — todas explícitas.',
          '**RisuAI:** sin telemetría. El mismo patrón — solo local por defecto, funciones de nube opcionales (traducción, generación de imágenes, backends de LLM en la nube) bloqueadas detrás de configuración explícita.',
          '**Verificar las afirmaciones de privacidad:** ejecuta la interfaz sin acceso a internet (apaga el Wi-Fi después de instalar) — chatea con un modelo local — confirma que todo sigue funcionando. O ejecuta un monitor de red (Little Snitch en macOS, Wireshark en Linux) y observa las conexiones salientes durante una sesión de chat. Las tres interfaces pasan esta prueba por defecto.',
          '**Donde puede romperse la privacidad:** backends de LLM en la nube (los configuraste tú; el prompt y la respuesta salen de tu máquina), extensiones de traducción basadas en la nube (los mensajes que traduces se envían a un tercero), endpoints remotos de Stable Diffusion, extensiones de búsqueda web. Cada una es una elección deliberada del usuario.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Una interfaz local "centrada en la privacidad" es solo tan privada como el backend al que la apuntas. Apuntar SillyTavern a GPT-5 envía tus prompts de roleplay a OpenAI; apuntarlo a Ollama mantiene todo local. La interfaz en sí no es la limitación; el backend del modelo lo es.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Decisión: qué interfaz debes elegir',
        content:
          '**Tres preguntas llevan a la mayoría de usuarios a la opción correcta.**',
        image: '/images/sillytavern-vs-agnai-vs-risuai-decision-es.svg',
        imageCaption: 'Diagrama de decisión: (1) ¿Compartir con otros escritores? → Sí: Agnai (único multiusuario). (2) ¿Quieres personalización profunda? → Sí: SillyTavern. (3) ¿Primero el móvil? → Sí: RisuAI (apps empaquetadas para iOS/Android). Por defecto si no estás seguro: SillyTavern (el 80% de usuarios termina aquí). Las tarjetas de personaje se transfieren entre las tres — el costo de cambio es mínimo.',
        columns: ['Tu situación', 'Elige'],
        rows: [
          { 'Tu situación': 'Soy escritor en solitario, quiero personalización profunda y estoy dispuesto a invertir tiempo en aprender la herramienta', 'Elige': 'SillyTavern' },
          { 'Tu situación': 'Quiero compartir personajes y chats con otros escritores en un servidor compartido', 'Elige': 'Agnai' },
          { 'Tu situación': 'Quiero empezar a chatear hoy; SillyTavern me parece excesivo', 'Elige': 'RisuAI' },
          { 'Tu situación': 'Escribo principalmente en móvil (iOS o Android)', 'Elige': 'RisuAI (la única con apps móviles empaquetadas)' },
          { 'Tu situación': 'Tengo un grupo de escritura o comunidad de 3+ personas', 'Elige': 'Agnai (servidor compartido) — la única opción multiusuario creíble' },
          { 'Tu situación': 'Tengo construcción de mundos compleja (50+ entradas de lore, disparadores recursivos)', 'Elige': 'SillyTavern (las funciones de libros de lore son las más profundas)' },
          { 'Tu situación': 'No estoy seguro', 'Elige': 'Prueba primero RisuAI (instalación de 5 min). Si lo superas, pasa a SillyTavern. Las tarjetas se transfieren.' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SillyTavern es la opción predeterminada para usuarios en solitario con necesidades de personalización; Agnai es la única opción multiusuario para servidores compartidos; RisuAI es la alternativa más ligera para primerizos y escritores en móvil — elige según la forma de tu flujo de trabajo, luego mantén la opción de migrar ya que las tarjetas se transfieren entre las tres.',
          },
          {
            type: 'plain-terms',
            text: 'Prueba primero RisuAI si nunca has usado una interfaz de roleplay — te pone a chatear en 5 minutos. Pasa a SillyTavern cuando empieces a chocar con los límites de personalización. Usa Agnai solo si necesitas específicamente el modo multiusuario de servidor compartido. Las tarjetas de personaje que creas en cualquiera de las tres cargarán en las otras, por lo que la elección es reversible.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pasa las primeras 10 horas de uso en la interfaz que elegiste antes de instalar extensiones o crear libros de lore elaborados. Los valores predeterminados más un par de tarjetas comunitarias son suficientes para evaluar el ajuste. La configuración prematura crea desgaste que la migración a la siguiente interfaz habría absorbido.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes al elegir y usar interfaces de roleplay',
        items: [
          '**Error 1: perseguir funciones cuando el modelo es el cuello de botella.** Una gran interfaz con un modelo de propósito general de 7B produce diálogos planos independientemente de lo bueno que sea el sistema de libros de lore. Elige una interfaz competente y gasta el resto del presupuesto en un modelo de 32B+ amigable con la escritura creativa. Consulta [Mejores LLM locales para escritura creativa 2026](/es/power-local-llm/best-local-llm-creative-writing-2026) para la parte del modelo.',
          '**Error 2: usar los ajustes de muestreo predeterminados con un modelo creativo.** SillyTavern, Agnai y RisuAI vienen con valores predeterminados ajustados para preguntas y respuestas (temperatura ~0,7, top-p ~0,9). El roleplay creativo quiere 0,85–1,05, top-p 0,9–0,95, penalización de repetición 1,1. Guarda presets por personaje.',
          '**Error 3: importar tarjetas comunitarias sin leerlas.** Una tarjeta de chub.ai puede incluir un prompt del sistema de 2.000 tokens con lenguaje de jailbreak, anulaciones de muestreo que entran en conflicto con tus valores predeterminados, o campos de personalidad que contradicen la descripción. Abre la tarjeta en el editor antes de usarla; sanea el prompt del sistema.',
          '**Error 4: saltarse la persona / perfil de usuario.** Una persona de "usuario" en blanco significa que el modelo no tiene ancla para saber quién habla. Incluso una persona de un párrafo con nombre, edad y situación básica produce una escena dramáticamente más comprometida que el usuario vacío predeterminado.',
          '**Error 5: editar en la ventana de chat en lugar de en la tarjeta.** Ajustar la salida del modelo mediante "regenerar" o "pedir al modelo que lo corrija" entrena el hábito de pedirle al modelo que haga la escritura. Guarda las ediciones de vuelta a la tarjeta de personaje o al prompt del sistema; la siguiente sesión empieza desde un nivel más alto.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Documentación de SillyTavern](https://docs.sillytavern.app/) — instalación, tarjetas de personaje, libros de lore, extensiones, presets de muestreo.',
          '[Repositorio de GitHub de SillyTavern](https://github.com/SillyTavern/SillyTavern) — fuente, notas de versión, extensiones comunitarias.',
          '[Repositorio de GitHub de Agnai](https://github.com/agnaistic/agnai) — instalación, configuración de servidor multiusuario, especificación de tarjetas de personaje.',
          '[Repositorio de GitHub de RisuAI](https://github.com/kwaroran/RisuAI) — instalación, sistema de plugins, compilaciones de app móvil.',
          '[Especificación de tarjetas de personaje Tavern v2](https://github.com/malfoyslastname/character-card-spec-v2) — el formato de tarjetas de personaje compatible entre interfaces.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿Cuál es la mejor interfaz de roleplay local en 2026?',
            a: 'SillyTavern para ~80% de los usuarios — funciones más profundas, comunidad más grande, más extensiones. Agnai es la opción correcta si necesitas soporte de servidor compartido multiusuario (la única opción creíble de las tres). RisuAI es la opción más ligera para primerizos, escritores en móvil o cualquiera que encuentre SillyTavern excesivo. Las tres hablan tarjetas de personaje Tavern v2 y se conectan con los mismos backends de modelos; cambiar entre ellas después es sencillo porque las tarjetas se transfieren.',
          },
          {
            q: '¿Pueden SillyTavern, Agnai y RisuAI usar las mismas tarjetas de personaje?',
            a: 'Sí. Las tres cargan la especificación de tarjetas de personaje Tavern v2, que es un PNG con JSON embebido. Una tarjeta creada en SillyTavern se abre en Agnai y RisuAI sin conversión, y viceversa. RisuAI extiende el formato con campos opcionales, pero las tarjetas Tavern v2 de RisuAI aún cargan en SillyTavern y Agnai con los campos de extensión ignorados. La migración entre interfaces es trivial.',
          },
          {
            q: '¿Estas interfaces envían mis chats a un servidor en la nube?',
            a: 'No, no por defecto. Las tres son solo locales sin telemetría. Los datos de chat, las tarjetas de personaje y los libros de lore residen en tu máquina. Las funciones opcionales (backends de LLM en la nube, extensiones de traducción, generación de imágenes, búsqueda web) están bloqueadas detrás de configuración explícita; si apuntas la interfaz a Ollama u otro backend local, nada sale de tu red. Verifica con un monitor de red si necesitas evidencia de auditoría formal.',
          },
          {
            q: '¿Qué modelo debo usar para el roleplay?',
            a: 'Llama 3.3 70B es la mejor opción todo-terreno cuando el hardware lo permite (~42 GB VRAM en Q4_K_M). En rigs de 24 GB, Qwen3 32B es la opción predeterminada más ligera. Command R+ 104B tiene la voz de diálogo más natural en escenas grupales pero requiere ~62 GB. Para escenas maduras que los modelos ajustados por instrucciones rechazan, instala Hermes 3 (base Llama 3.3) en el mismo Ollama y cambia por escena. Los modelos por debajo de 13B sin ajuste fino de escritura creativa pierden la consistencia de voz en 5 a 10 intercambios y deben evitarse para trabajo de roleplay serio.',
          },
          {
            q: '¿SillyTavern es solo para roleplay adulto?',
            a: 'No. SillyTavern es una interfaz de chat de propósito general con tarjetas de personaje, gestión de personas y libros de lore — útil para cualquier trabajo creativo con mucho diálogo o centrado en personajes. Muchos escritores lo usan para redacción de ficción no adulta, escenas multicarácter, trabajo de consistencia de voz en proyectos largos, ejercicios de escritura de guiones y redacción de narrativas de juegos. El ecosistema de personajes de la comunidad (chub.ai) incluye contenido adulto pero no se limita a él.',
          },
          {
            q: '¿Cómo comparto personajes con amigos?',
            a: 'Tres opciones. (1) Exporta la tarjeta de personaje como PNG y envía el archivo — funciona en las tres interfaces. (2) Usa el modo de servidor compartido de Agnai si quieres chats colaborativos, no solo personajes compartidos. (3) Publica la tarjeta en chub.ai o un repositorio similar si quieres un lanzamiento público. La mayoría de grupos de escritura se decanta por la opción 1 (compartir archivos) más un canal de Discord para coordinación; la opción 2 es la correcta para grupos que co-escriben activamente el mismo chat.',
          },
          {
            q: '¿Estas interfaces funcionan en iPad o Android?',
            a: 'RisuAI tiene apps empaquetadas para iOS y Android. SillyTavern se ejecuta en Android a través de Termux (funciona pero es complicado — instalación por terminal, UI en navegador). Agnai se ejecuta en navegadores móviles pero no está empaquetada como app. Si el móvil es tu superficie principal, RisuAI es la opción correcta. Si el móvil es ocasional, SillyTavern en un navegador de escritorio con un fallback móvil a RisuAI es un patrón viable (las tarjetas se transfieren).',
          },
          {
            q: '¿Puedo usar un backend compartido para varios usuarios?',
            a: 'Para el roleplay multiusuario específicamente, Agnai es la única interfaz con un modo de servidor compartido creíble (cuentas de usuario integradas, separación de roles, propiedad compartida de personajes/chats). Para compartir solo el backend del modelo (un Ollama sirviendo a múltiples interfaces en la misma máquina), las tres funcionan — Ollama sirve a múltiples clientes y las interfaces no entran en conflicto. La pregunta del "backend compartido" son realmente dos preguntas: modelo compartido (fácil, las tres) versus chats y personajes compartidos (solo Agnai).',
          },
          {
            q: '¿Cuál tiene el mejor soporte de libros de lore?',
            a: 'SillyTavern tiene el sistema de libros de lore más profundo — escaneo recursivo (entradas que activan otras entradas), prioridad de palabras clave, disparadores condicionales, ámbitos por personaje y coincidencia regex. Agnai y RisuAI admiten libros de lore con escaneo de palabras clave más simple, adecuado para proyectos con menos de ~50 entradas. Para construcción de mundos compleja — política de múltiples facciones, referencias recursivas, revelaciones condicionales — SillyTavern es la única opción creíble de las tres.',
          },
          {
            q: '¿Son estables los chats grupales en backends locales?',
            a: 'Sí, con el modelo correcto. El chat grupal con 3+ personajes necesita un modelo con fuerte diferenciación de voces — Command R+ 104B es la mejor opción, Llama 3.3 70B es el predeterminado práctico. En modelos más pequeños (menos de 13B), los personajes derivan hacia la misma voz en 5 a 10 intercambios. SillyTavern tiene la implementación de chat grupal más madura; Agnai y RisuAI manejan escenas de 2 a 4 personajes limpiamente pero ofrecen menos control sobre la dinámica de turnos.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Mejores LLM locales para escritura creativa 2026](/es/power-local-llm/best-local-llm-creative-writing-2026) — la parte del modelo; comparativa directa de las opciones recomendadas en esta guía.',
          '[LLM locales sin censura para escritura creativa: ética, legalidad y mejores prácticas](/es/power-local-llm/uncensored-local-llm-creative-writing-ethics) — cuándo los derivados sin censura (Hermes 3, Dolphin 3.0) son la opción correcta y dónde están los límites legales.',
          '[Mejores LLM locales en 2026](/es/local-llms/best-local-llms-2026) — panorama más amplio de modelos; útil al elegir qué modelos instalar detrás de estas interfaces.',
          '[Ollama vs LM Studio](/es/local-llms/ollama-vs-lm-studio) — los dos backends más comunes usados con estas interfaces; cuál instalar primero.',
          '[Persona Prompting](/es/prompt-engineering/persona-prompting) — estructura del prompt del sistema para la voz del personaje; funciona en cualquiera de las tres interfaces.',
          '[Temperatura y Top-P: controla la creatividad de la IA](/es/prompt-engineering/temperature-and-top-p-control-ai-creativity) — guía de muestreo para los presets por personaje que estas interfaces admiten.',
          '[Prompts de LLM local para escritores de ficción](/es/power-local-llm/local-llm-prompts-for-fiction-writers) — plantillas de prompts del sistema listas para usar para ficción basada en personajes; funciona en SillyTavern, Agnai y RisuAI.',
          '[Mejores modelos LLM para móvil en 2026](/es/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — recomendaciones de modelos optimizados para iOS y Android; se combina bien con las apps móviles de RisuAI.',
          '[Configuración de roleplay en chino con SillyTavern](/es/prompt-bites/sillytavern-chinese-roleplay-setup) — Qwen3 + SillyTavern: configuración de tarjetas de personaje para roleplay en idioma chino.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SillyTavern vs Agnai vs RisuAI: Mejor interfaz de roleplay local (2026)',
      description: 'Comparativa de SillyTavern, Agnai y RisuAI para roleplay con LLM local. Funciones, compatibilidad de modelos, privacidad y ecosistema comunitario comparados.',
      url: 'https://www.promptquorum.com/es/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
},
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'SillyTavern vs Agnai vs RisuAI: Melhor interface de roleplay local (2026)',
    seoTitle: 'SillyTavern vs Agnai vs RisuAI: UI de roleplay local 2026',
    intro:
      'SillyTavern, Agnai e RisuAI são as três interfaces de roleplay mais sólidas para LLMs locais em 2026 — cada uma se conecta facilmente com Ollama, llama.cpp ou qualquer endpoint compatível com OpenAI, e cada uma adota uma posição diferente quanto à densidade de recursos. SillyTavern é a opção de personalização profunda (onde a maioria dos usuários experientes acaba); Agnai é a opção multiusuário (a única com um verdadeiro modo de servidor compartilhado); RisuAI é a alternativa mais leve quando o SillyTavern parece excessivo. Este guia compara as três em cartões de personagens, gestão de personas, livros de lore, chat em grupo, compatibilidade de modelos, privacidade e alcance de plataformas.',
    metaDescription:
      'Comparativo de SillyTavern, Agnai e RisuAI para roleplay com LLM local. Recursos, compatibilidade de modelos, privacidade e ecossistema comunitário comparados.',
    twitterDescription:
      '3 interfaces de roleplay local comparadas: SillyTavern (personalização profunda), Agnai (multiusuário), RisuAI (alternativa leve). Cartões de personagens, livros de lore, chat em grupo, privacidade.',
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
      'Escritores de roleplay, designers de personagens, colaboradores de ficção e equipes de escrita criativa que executam LLMs locais via interfaces de chat dedicadas com cartões de personagens, gestão de personas e cenas em grupo.',
    readTime: '13 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'interface de roleplay local',
    targetKeywords: [
      'sillytavern vs agnai',
      'agnai vs risuai',
      'melhor ui de roleplay local',
      'sillytavern configurar ollama',
      'cartão de personagem llm local',
      'risuai vs sillytavern',
    ],
    leadAnswerBlock:
      '**SillyTavern é a escolha certa para ~80% dos usuários — a compatibilidade de cartões de personagens mais profunda, o maior ecossistema comunitário e a maior superfície de personalização (extensões, presets, substituições regex, world info). Agnai é a única das três com compatibilidade multiusuário real, tornando-a a escolha certa para servidores compartilhados, roleplay colaborativo e pequenos projetos em grupo. RisuAI é a alternativa mais leve quando a densidade de recursos do SillyTavern é o obstáculo — mesma especificação de cartões de personagens, menor superfície, primeira execução mais simples. As três falam a especificação de cartões de personagens Tavern v2, as três se conectam com Ollama ou qualquer endpoint compatível com OpenAI, as três rodam completamente localmente sem telemetria.**',
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor interface de roleplay com LLM local em 2026: SillyTavern, Agnai ou RisuAI?',
        answer:
          'SillyTavern é a opção padrão para a maioria dos usuários — recursos mais profundos, comunidade maior, mais extensões. Agnai é a única opção multiusuário credível se você compartilha personagens e chats com colaboradores. RisuAI é a alternativa mais leve para usuários que acham SillyTavern excessivo. As três são open source, carregam cartões de personagens Tavern v2 e se conectam ao Ollama e a endpoints compatíveis com OpenAI. SillyTavern vence em profundidade de personalização (extensões, substituições regex, world info, presets avançados); Agnai vence no modo de servidor compartilhado; RisuAI vence em simplicidade para a primeira execução. A decisão é a forma do fluxo de trabalho, não a qualidade bruta — as três produzem a mesma conversa quando combinadas com o mesmo modelo.',
        bullets: [
          'SillyTavern — recursos mais profundos, comunidade maior, opção padrão para usuários solo com necessidades de personalização.',
          'Agnai — única interface com suporte multiusuário real; escolha para servidores compartilhados e roleplay colaborativo.',
          'RisuAI — a mais leve das três; escolha quando a densidade de recursos do SillyTavern é o obstáculo.',
          'As três falam cartões de personagens Tavern v2; cartões de uma funcionam nas outras.',
          'As três se conectam ao Ollama, llama.cpp, LM Studio, vLLM e qualquer endpoint compatível com OpenAI.',
          'As três são open source e rodam completamente localmente; sem telemetria por padrão em nenhuma.',
          'Recomendações de modelos: Llama 3.3 70B (melhor geral), Hermes 3 (sem censura), Command R+ (diálogo), Qwen3 32B (opção padrão para rigs de 24 GB).',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Principais destaques', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Como testamos', anchor: '#how-we-tested' },
      { label: 'Comparativo das três interfaces', anchor: '#comparison' },
      { label: 'SillyTavern: análise em profundidade', anchor: '#sillytavern' },
      { label: 'Agnai: análise em profundidade', anchor: '#agnai' },
      { label: 'RisuAI: análise em profundidade', anchor: '#risuai' },
      { label: 'Formato de cartão de personagem (Tavern v2)', anchor: '#character-cards' },
      { label: 'Recomendações de modelos por interface', anchor: '#models' },
      { label: 'Privacidade: qual interface chama de volta à casa', anchor: '#privacy' },
      { label: 'Decisão: escolha sua interface', anchor: '#decision' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**SillyTavern é a opção padrão para ~80% dos usuários em 2026.** Recursos de cartões de personagens mais profundos, maior ecossistema de extensões, maior superfície de personalização. A interface onde a maioria dos usuários experientes de roleplay acaba após testar alternativas.',
          '**Agnai é a única opção multiusuário credível.** O modo de servidor compartilhado permite que vários escritores se conectem à mesma instância, compartilhem personagens e colaborem em chats de longa duração.',
          '**RisuAI é a alternativa mais leve.** Mesmo suporte de cartões de personagens Tavern v2, menor superfície de recursos, primeira execução mais simples.',
          '**As três falam a especificação de cartões de personagens Tavern v2.** Um cartão criado no SillyTavern funciona no Agnai e no RisuAI sem conversão.',
          '**As três se conectam com Ollama, llama.cpp, LM Studio e qualquer endpoint compatível com OpenAI.**',
          '**Privacidade: as três rodam completamente localmente sem telemetria por padrão.**',
          '**A escolha do modelo é mais importante do que a escolha da interface.** Uma ótima interface com um modelo de propósito geral pequeno produz diálogos planos; uma interface básica com Llama 3.3 70B produz cenas animadas.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        image: '/images/sillytavern-vs-agnai-vs-risuai-setup-es.svg',
        imageCaption: 'Tempo de configuração e instalação: SillyTavern 15 minutos (git clone + npm), Agnai usuário único 10 minutos (npm), Agnai servidor compartilhado 30 minutos (+ MongoDB + autenticação), RisuAI 5 minutos (baixe o app de desktop, sem terminal). Usuários iniciantes: RisuAI é o mais rápido.',
        items: [
          '**SillyTavern** — Node.js + UI no navegador, hospedado localmente. Personalização mais profunda, comunidade maior.',
          '**Agnai** — Node.js + UI no navegador; roda localmente ou como servidor compartilhado. A única opção multiusuário das três.',
          '**RisuAI** — app de desktop Tauri/Electron; conjunto de recursos mais leve, primeira execução mais simples.',
          '**Especificação de cartões de personagens:** as três carregam Tavern v2 (o padrão); totalmente compatíveis entre si.',
          '**Backends de modelos:** Ollama, llama.cpp, LM Studio, vLLM, qualquer endpoint compatível com OpenAI, além de APIs na nuvem (opcionais).',
          '**Privacidade por padrão:** apenas local, sem telemetria, sem análises em nenhuma das três por padrão.',
          '**Plataformas:** SillyTavern e Agnai rodam no macOS, Windows, Linux e Termux/Android. RisuAI roda no macOS, Windows, Linux, iOS e Android.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Como testamos',
        content:
          'Os veredictos deste guia se baseiam no uso prático das três interfaces, não na comparação de listas de recursos.',
        items: [
          '**Versões:** SillyTavern 1.x (branch estável), Agnai última versão estável, RisuAI última versão de desktop (maio 2026).',
          '**Backend:** Ollama 0.5+ executando Llama 3.3 70B Q4_K_M como modelo de teste principal nas três interfaces.',
          '**Cenários de teste:** cartão de personagem Tavern v2 idêntico carregado nas três interfaces; mesmos 5 prompts de conversa executados em cada uma; cena de chat em grupo com 3 personagens; livro de lore com 25 entradas; importação de preset de amostragem de um arquivo de preset de terceiros.',
          '**Tempo de instalação:** mediana de 3 instalações novas por interface na mesma máquina.',
          '**Avaliação de recursos:** as capacidades descritas como "mais simples" ou "limitadas" refletem o comportamento observável nos cenários de teste, não as afirmações da documentação.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparativo das três interfaces',
        content:
          '**Mesmos cartões de personagens, mesmos backends de modelos — diferente densidade de recursos e usuário alvo.** A tabela a seguir mapeia as diferenças relevantes para a decisão.',
        image: '/images/sillytavern-vs-agnai-vs-risuai-comparison-es.svg',
        imageCaption: 'Comparativo de recursos: SillyTavern oferece livros de lore e extensões mais profundos, chat em grupo multi-personagem (maduro), sem modo multiusuário. Agnai adiciona modo multiusuário/servidor compartilhado real, livros de lore mais simples. RisuAI configuração mais simples (5 min), apps mobile integrados, conjunto de recursos mais leve. As três carregam cartões de personagens Tavern v2.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SillyTavern é a opção de personalização profunda para usuários solo; Agnai é a opção multiusuário para servidores compartilhados; RisuAI é a opção mais leve para usuários iniciantes — as três carregam os mesmos cartões de personagens Tavern v2 e se conectam com os mesmos backends de modelos.',
          },
          {
            type: 'plain-terms',
            text: 'Escolha SillyTavern a menos que você tenha uma razão específica para não fazê-lo — é onde a maioria dos usuários experientes acaba. Escolha Agnai se quiser compartilhar um servidor com outros escritores. Escolha RisuAI se SillyTavern parece excessivo e você quer começar a conversar em 5 minutos. Trocar depois é simples porque as três carregam os mesmos cartões de personagens.',
          },
        ],
        columns: ['Recurso', 'SillyTavern', 'Agnai', 'RisuAI'],
        rows: [
          { 'Recurso': 'Superfície principal', 'SillyTavern': 'Node.js local + navegador', 'Agnai': 'Node.js local + navegador, ou servidor compartilhado', 'RisuAI': 'App de desktop Tauri/Electron + mobile' },
          { 'Recurso': 'Tempo de configuração (primeira execução)', 'SillyTavern': '~15 minutos', 'Agnai': '~10 minutos (usuário único); ~30 minutos (servidor)', 'RisuAI': '~5 minutos' },
          { 'Recurso': 'Cartões de personagens', 'SillyTavern': 'Tavern v2 (especificação completa) + extensões', 'Agnai': 'Tavern v2', 'RisuAI': 'Tavern v2 + formato próprio' },
          { 'Recurso': 'Persona / perfil de usuário', 'SillyTavern': 'Nativo, múltiplas personas, por personagem', 'Agnai': 'Nativo, multiusuário', 'RisuAI': 'Nativo, mais simples' },
          { 'Recurso': 'Livros de lore / world info', 'SillyTavern': 'Nativo, muito flexível (varredura recursiva)', 'Agnai': 'Nativo, varredura mais simples', 'RisuAI': 'Nativo, varredura mais simples' },
          { 'Recurso': 'Chat em grupo (múltiplos personagens)', 'SillyTavern': 'Nativo, maduro', 'Agnai': 'Nativo', 'RisuAI': 'Nativo, mais simples' },
          { 'Recurso': 'Multiusuário / servidor compartilhado', 'SillyTavern': 'Não (usuário único)', 'Agnai': 'Sim (o diferencial)', 'RisuAI': 'Não (usuário único)' },
          { 'Recurso': 'Extensões / plugins', 'SillyTavern': 'Maior ecossistema (regex, presets, UIs personalizadas)', 'Agnai': 'Menor', 'RisuAI': 'Sistema de plugins, biblioteca menor' },
          { 'Recurso': 'Compatibilidade de backends', 'SillyTavern': 'Ollama, llama.cpp, LM Studio, vLLM, compatível com OAI, KoboldAI, Aphrodite', 'Agnai': 'Ollama, llama.cpp, LM Studio, compatível com OAI', 'RisuAI': 'Ollama, llama.cpp, LM Studio, compatível com OAI' },
          { 'Recurso': 'Telemetria por padrão', 'SillyTavern': 'Nenhuma', 'Agnai': 'Nenhuma', 'RisuAI': 'Nenhuma' },
          { 'Recurso': 'Melhor para', 'SillyTavern': 'Usuários solo buscando personalização profunda', 'Agnai': 'Servidores compartilhados, colaboração multiusuário', 'RisuAI': 'Usuários iniciantes, configuração mais leve' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A decisão é a forma do fluxo de trabalho, não a qualidade bruta. As três produzem conversas idênticas quando combinadas com o mesmo modelo e o mesmo cartão de personagem. Escolha conforme como você escreve — solo com ajustes profundos, com colaboradores em um servidor compartilhado, ou rapidamente em um app de desktop ou mobile.',
          },
        ],
      },
      sillytavern: {
        id: 'sillytavern',
        title: 'SillyTavern: a opção padrão de personalização profunda',
        content:
          '**SillyTavern é onde a maioria dos usuários experientes de roleplay acaba após testar alternativas.** Comunidade maior, recursos de cartões de personagens mais profundos, maior ecossistema de extensões no espaço de roleplay local.',
        items: [
          '**Instalação:** `git clone` do repositório, `npm install`, `npm start`. O servidor local roda em `http://localhost:8000`. Multiplataforma — macOS, Windows, Linux e Termux no Android.',
          '**Cartões de personagens:** especificação completa Tavern v2. Importação por arrastar e soltar (PNG com JSON embutido), navegar e editar campos na UI, exportar de volta para PNG.',
          '**Livros de lore / world info:** o mais flexível dos três. Suporta varredura recursiva (entradas que acionam outras entradas), prioridade de palavras-chave, gatilhos condicionais e escopos por personagem.',
          '**Chat em grupo:** implementação multi-personagem madura. Define quais personagens estão na cena, estabelece a ordem de turnos ou turnos dirigidos pelo modelo.',
          '**Extensões:** substituição regex (sanitizar a saída do modelo antes de exibi-la), presets (configurações de amostragem por personagem), integração com Stable Diffusion, tradução, busca na web, UIs personalizadas.',
          '**Onde brilha:** roleplay solo, projetos pessoais de longa duração, necessidades de personalização profunda, construção de mundos complexos.',
          '**Onde falha:** sem modo multiusuário (design de usuário único); a superfície de recursos pode sobrecarregar usuários iniciantes.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Comece com os presets padrão do SillyTavern e um ou dois cartões de personagens do chub.ai ou da comunidade do SillyTavern. Resista ao impulso de instalar extensões antes das primeiras 10 horas de uso — a maioria dos usuários nunca precisa de mais do que os padrões, a substituição regex e uma extensão de tradução.',
          },
        ],
      },
      agnai: {
        id: 'agnai',
        title: 'Agnai: a opção multiusuário',
        content:
          '**Agnai é a única interface de roleplay multiusuário credível em 2026.** Mesmo suporte de cartões de personagens que o SillyTavern, menor superfície de personalização, mas um verdadeiro modo de servidor compartilhado que permite que vários escritores se conectem a um mesmo backend.',
        items: [
          '**Instalação (usuário único):** Node.js + npm install + start. Roda em `http://localhost:3001` por padrão.',
          '**Instalação (servidor compartilhado):** adicione um banco de dados (MongoDB) e uma camada de autenticação; Agnai gerencia nativamente as contas de usuário, a separação de funções e a propriedade compartilhada de personagens/chats.',
          '**Cartões de personagens:** Tavern v2; importação/exportação completa.',
          '**Sistema de personas:** multiusuário nativo. Cada usuário tem personas; o agente escolhe qual persona está ativa por chat.',
          '**Livros de lore / world info:** presentes, menos poderosos do que os do SillyTavern.',
          '**Chat em grupo:** nativo, mais simples do que o do SillyTavern. Funciona para o caso comum de 2 a 4 personagens em uma cena.',
          '**Onde brilha:** servidores compartilhados (grupos de escrita, círculos de amigos, pequenas comunidades que compartilham personagens), roleplay colaborativo.',
          '**Onde falha:** menor ecossistema de extensões do que SillyTavern; a recursão de livros de lore é limitada.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para um servidor compartilhado, rode o Agnai atrás de um proxy reverso (Caddy é o mais simples) com TLS. A configuração padrão é HTTP e escuta em uma única porta — OK para localhost, mas não para um servidor que você expõe a outros escritores.',
          },
        ],
      },
      risuai: {
        id: 'risuai',
        title: 'RisuAI: a alternativa mais leve',
        content:
          '**RisuAI é a escolha certa quando SillyTavern parece excessivo.** Mesmos cartões de personagens Tavern v2, menor superfície de recursos, empacotado como app de desktop em vez de servidor web local.',
        items: [
          '**Instalação:** instalador de desktop para macOS, Windows, Linux, mais apps para iOS e Android. Sem Node.js, sem terminal — duplo clique e abre. A primeira execução mais rápida das três.',
          '**Cartões de personagens:** Tavern v2 mais o formato estendido próprio do RisuAI. Os cartões do SillyTavern e do Agnai carregam sem problemas.',
          '**Sistema de personas:** presente, mais simples do que o do SillyTavern.',
          '**Livros de lore / world info:** presentes, varredura mais simples do que o sistema recursivo do SillyTavern.',
          '**Chat em grupo:** nativo; funciona para cenas típicas de 2 a 4 personagens.',
          '**Plugins:** menor ecossistema do que o do SillyTavern.',
          '**Onde brilha:** usuários iniciantes, escritores no mobile (os apps de iOS/Android são reais), usuários que querem uma UI mais limpa do que a do SillyTavern, roleplay solo com um único personagem.',
          '**Onde falha:** comunidade menor do que SillyTavern; menor profundidade de personalização; não é a escolha adequada quando o teto de recursos importa.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O app mobile do RisuAI é o único das três que está realmente empacotado para iOS e Android. SillyTavern roda no Android via Termux (funciona, mas é complicado). Agnai roda em navegadores mobile, mas não está empacotado como app. Se o uso mobile é um fluxo de trabalho real, RisuAI é a escolha certa quase independentemente de outros recursos.',
          },
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: 'Formato de cartão de personagem (Tavern v2): a língua franca',
        content:
          '**As três interfaces carregam a especificação de cartões de personagens Tavern v2, tornando trivial a migração entre elas.** Um cartão é um PNG com JSON embutido nos metadados; o mesmo arquivo abre em qualquer uma das três.',
        image: '/images/sillytavern-vs-agnai-vs-risuai-character-cards-es.svg',
        imageCaption: 'Formato de cartão de personagem Tavern v2: PNG + metadados JSON embutidos. Contém nome, descrição, personalidade, cenário, primeira mensagem, diálogo de exemplo, prompt do sistema. Interoperável entre SillyTavern, Agnai, RisuAI (todas carregam a mesma especificação). A especificação V3 (maio 2026) adiciona lore embutido nativo e suporte multilíngue, compatível com versões anteriores.',
        items: [
          '**O que contém um cartão Tavern v2:** nome, descrição, personalidade, cenário, primeira mensagem, diálogo de exemplo, tags, notas do criador e um prompt do sistema. Os campos opcionais cobrem entradas de livros de lore e configurações de amostragem específicas do personagem.',
          '**Especificação V3 (maio 2026):** estende V2 com lore embutido nativo, suporte multilíngue e metadados de criador mais ricos. SillyTavern suporta completamente a importação de V3; Agnai carrega cartões V3, mas ignora alguns campos específicos de V3; RisuAI lida com V3 parcialmente.',
          '**Por que importa:** todo o ecossistema de personagens criados pela comunidade (chub.ai, exportações do JanitorAI) usa Tavern v2. Um cartão criado por outra pessoa carrega na sua interface sem conversão.',
          '**Onde a especificação termina:** Tavern v2 cobre a definição estática do personagem. A memória de cena de longa duração, o estado de relacionamento dinâmico e as substituições específicas do chat são implementações por interface.',
          '**Sanitizar cartões importados:** um cartão do chub.ai pode incluir presets de amostragem, substituições do prompt do sistema ou prompts de jailbreak agressivos que alteram o comportamento do modelo. Leia os campos do prompt do sistema e da personalidade antes de usar um cartão baixado.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Os cartões comunitários importados podem vir com comportamentos ocultos: prompts do sistema de jailbreak longos, substituições de amostragem, contradições de persona. Abra cada cartão baixado no editor antes do primeiro uso e leia o campo do prompt do sistema. Em um contexto de servidor compartilhado (Agnai), um cartão defeituoso afeta todos os usuários.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Recomendações de modelos por interface',
        content:
          '**A escolha de interface não limita a escolha de modelo.** As três falam os mesmos backends — Ollama é o mais comum — e as recomendações de modelos abaixo se aplicam igualmente ao SillyTavern, Agnai e RisuAI.',
        image: '/images/sillytavern-vs-agnai-vs-risuai-models-es.svg',
        imageCaption: 'Modelos recomendados (as 3 interfaces): Llama 3.3 70B é o padrão (melhor geral, 42 GB VRAM, consistência de voz). Qwen3 32B é a opção popular para rigs de 24 GB (qualidade quase equivalente a 70B). Command R+ 104B para especialistas em diálogo (cenas em grupo, 62 GB VRAM). Hermes 3 para trabalho de 70B sem censura. Evitar modelos <13B sem ajuste fino criativo.',
        items: [
          '**Llama 3.3 70B** — a melhor opção local geral para trabalho com personagens. Maior consistência de voz em sessões longas, segue bem a direção do personagem. Requer ~42 GB VRAM em Q4_K_M.',
          '**Qwen3 32B** — a escolha certa para rigs de 24 GB. Qualidade de prosa quase equivalente ao Llama 70B sem o custo de hardware.',
          '**Command R+ 104B** — o especialista em diálogo. Diferenciação de voz conversacional mais natural entre personagens em uma cena em grupo. Requer ~62 GB VRAM em Q4_K_M.',
          '**Hermes 3 (base Llama 3.3)** — o derivado sem censura. Mesma arquitetura do Llama 3.3 70B; a camada de segurança RLHF está removida; o modelo segue o prompt em vez de rejeitar cenas maduras.',
          '**Mistral Large** — a opção de contexto longo. 128K de contexto nativo; útil quando uma sessão de roleplay é longa o suficiente para tirar modelos de contexto menor da janela.',
          '**Evitar para trabalho de roleplay sério:** qualquer coisa abaixo de 13B sem ajuste fino de escrita criativa.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'As configurações de amostragem importam tanto quanto a escolha do modelo para roleplay. Temperatura 0,85–1,05, top-p 0,9–0,95, penalidade de repetição 1,1 são o ponto de partida. SillyTavern permite salvar presets por personagem; use isso — diferentes personagens frequentemente precisam de temperaturas diferentes.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade: qual interface chama de volta à casa',
        content:
          '**As três interfaces são apenas locais por padrão, sem telemetria.** Os recursos de nuvem opcionais em cada uma estão bloqueados atrás de um opt-in explícito.',
        items: [
          '**SillyTavern:** sem telemetria. Recursos opcionais que podem se comunicar: backends de LLM na nuvem (OpenAI, Claude, etc. — apenas se você os configurar), extensões de tradução (usam APIs na nuvem por padrão; configuráveis para local), geração de imagens com Stable Diffusion, extensões de busca na web.',
          '**Agnai:** sem telemetria no app principal. O modo servidor adiciona telemetria de conta apenas se você a ativar. Os mesmos recursos de nuvem opcionais que SillyTavern.',
          '**RisuAI:** sem telemetria. O mesmo padrão — apenas local por padrão, recursos de nuvem opcionais (tradução, geração de imagens, backends de LLM na nuvem) bloqueados atrás de configuração explícita.',
          '**Verificar as afirmações de privacidade:** execute a interface sem acesso à internet (desligue o Wi-Fi após instalar) — converse com um modelo local — confirme que tudo continua funcionando. Ou execute um monitor de rede (Little Snitch no macOS, Wireshark no Linux).',
          '**Onde a privacidade pode ser quebrada:** backends de LLM na nuvem (você os configurou; o prompt e a resposta saem da sua máquina), extensões de tradução baseadas na nuvem, endpoints remotos de Stable Diffusion, extensões de busca na web.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Uma interface local "focada em privacidade" é apenas tão privada quanto o backend para o qual você a aponta. Apontar o SillyTavern para GPT-5 envia seus prompts de roleplay para a OpenAI; apontá-lo para o Ollama mantém tudo local. A interface em si não é a limitação; o backend do modelo é.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Decisão: qual interface você deve escolher',
        content:
          '**Três perguntas levam a maioria dos usuários à opção correta.**',
        image: '/images/sillytavern-vs-agnai-vs-risuai-decision-es.svg',
        imageCaption: 'Diagrama de decisão: (1) Compartilhar com outros escritores? → Sim: Agnai (único multiusuário). (2) Quer personalização profunda? → Sim: SillyTavern. (3) Mobile em primeiro lugar? → Sim: RisuAI (apps empacotados para iOS/Android). Por padrão se não tiver certeza: SillyTavern (80% dos usuários acaba aqui). Os cartões de personagens se transferem entre as três — o custo de mudança é mínimo.',
        columns: ['Sua situação', 'Escolha'],
        rows: [
          { 'Sua situação': 'Sou escritor solo, quero personalização profunda e estou disposto a investir tempo em aprender a ferramenta', 'Escolha': 'SillyTavern' },
          { 'Sua situação': 'Quero compartilhar personagens e chats com outros escritores em um servidor compartilhado', 'Escolha': 'Agnai' },
          { 'Sua situação': 'Quero começar a conversar hoje; SillyTavern parece excessivo', 'Escolha': 'RisuAI' },
          { 'Sua situação': 'Escrevo principalmente no mobile (iOS ou Android)', 'Escolha': 'RisuAI (a única com apps mobile empacotados)' },
          { 'Sua situação': 'Tenho um grupo de escrita ou comunidade de 3+ pessoas', 'Escolha': 'Agnai (servidor compartilhado) — a única opção multiusuário credível' },
          { 'Sua situação': 'Tenho construção de mundos complexa (50+ entradas de lore, gatilhos recursivos)', 'Escolha': 'SillyTavern (os recursos de livros de lore são os mais profundos)' },
          { 'Sua situação': 'Não tenho certeza', 'Escolha': 'Tente RisuAI primeiro (instalação de 5 min). Se o superar, mude para SillyTavern. Os cartões se transferem.' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SillyTavern é a opção padrão para usuários solo com necessidades de personalização; Agnai é a única opção multiusuário para servidores compartilhados; RisuAI é a alternativa mais leve para iniciantes e escritores mobile — escolha conforme a forma do seu fluxo de trabalho, então mantenha a opção de migrar já que os cartões se transferem entre as três.',
          },
          {
            type: 'plain-terms',
            text: 'Tente RisuAI primeiro se nunca usou uma interface de roleplay — ele te coloca a conversar em 5 minutos. Mude para SillyTavern quando começar a bater nos limites de personalização. Use Agnai apenas se precisar especificamente do modo multiusuário de servidor compartilhado. Os cartões de personagens que você cria em qualquer uma das três carregarão nas outras, então a escolha é reversível.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Passe as primeiras 10 horas de uso na interface que escolheu antes de instalar extensões ou criar livros de lore elaborados. Os padrões mais um par de cartões da comunidade são suficientes para avaliar o encaixe. A configuração prematura cria desgaste que a migração para a próxima interface teria absorvido.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns ao escolher e usar interfaces de roleplay',
        items: [
          '**Erro 1: perseguir recursos quando o modelo é o gargalo.** Uma ótima interface com um modelo de propósito geral pequeno produz diálogos planos independentemente de quão bom seja o sistema de livros de lore. Escolha uma interface competente e gaste o restante do orçamento em um modelo de 32B+ amigável com a escrita criativa.',
          '**Erro 2: usar as configurações de amostragem padrão com um modelo criativo.** SillyTavern, Agnai e RisuAI vêm com padrões ajustados para perguntas e respostas (temperatura ~0,7, top-p ~0,9). O roleplay criativo quer 0,85–1,05, top-p 0,9–0,95, penalidade de repetição 1,1.',
          '**Erro 3: importar cartões da comunidade sem lê-los.** Um cartão do chub.ai pode incluir um prompt do sistema de 2.000 tokens com linguagem de jailbreak, substituições de amostragem que conflitam com seus padrões, ou campos de personalidade que contradizem a descrição.',
          '**Erro 4: pular a persona / perfil de usuário.** Uma persona de "usuário" em branco significa que o modelo não tem âncora para saber quem está falando.',
          '**Erro 5: editar na janela de chat em vez de no cartão.** Ajustar a saída do modelo via "regenerar" ou "pedir ao modelo que corrija" treina o hábito de pedir ao modelo que faça a escrita.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Documentação do SillyTavern](https://docs.sillytavern.app/) — instalação, cartões de personagens, livros de lore, extensões, presets de amostragem.',
          '[Repositório GitHub do SillyTavern](https://github.com/SillyTavern/SillyTavern) — fonte, notas de versão, extensões comunitárias.',
          '[Repositório GitHub do Agnai](https://github.com/agnaistic/agnai) — instalação, configuração de servidor multiusuário, especificação de cartões de personagens.',
          '[Repositório GitHub do RisuAI](https://github.com/kwaroran/RisuAI) — instalação, sistema de plugins, compilações de app mobile.',
          '[Especificação de cartões de personagens Tavern v2](https://github.com/malfoyslastname/character-card-spec-v2) — o formato de cartões de personagens compatível entre interfaces.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Qual é a melhor interface de roleplay local em 2026?',
            a: 'SillyTavern para ~80% dos usuários — recursos mais profundos, comunidade maior, mais extensões. Agnai é a escolha certa se você precisar de suporte de servidor compartilhado multiusuário (a única opção credível das três). RisuAI é a opção mais leve para iniciantes, escritores mobile ou qualquer pessoa que achar SillyTavern excessivo. As três falam cartões de personagens Tavern v2 e se conectam com os mesmos backends de modelos; mudar entre elas depois é simples porque os cartões se transferem.',
          },
          {
            q: 'SillyTavern, Agnai e RisuAI podem usar os mesmos cartões de personagens?',
            a: 'Sim. As três carregam a especificação de cartões de personagens Tavern v2, que é um PNG com JSON embutido. Um cartão criado no SillyTavern abre no Agnai e no RisuAI sem conversão, e vice-versa.',
          },
          {
            q: 'Essas interfaces enviam meus chats para um servidor na nuvem?',
            a: 'Não, não por padrão. As três são apenas locais sem telemetria. Os dados de chat, os cartões de personagens e os livros de lore residem na sua máquina. Os recursos opcionais (backends de LLM na nuvem, extensões de tradução, geração de imagens, busca na web) estão bloqueados atrás de configuração explícita.',
          },
          {
            q: 'Qual modelo devo usar para roleplay?',
            a: 'Llama 3.3 70B é a melhor opção geral quando o hardware permite (~42 GB VRAM em Q4_K_M). Em rigs de 24 GB, Qwen3 32B é a opção padrão mais leve. Command R+ 104B tem a voz de diálogo mais natural em cenas em grupo, mas requer ~62 GB. Para cenas maduras que os modelos ajustados por instruções recusam, instale Hermes 3 (base Llama 3.3) no mesmo Ollama e alterne por cena.',
          },
          {
            q: 'SillyTavern é apenas para roleplay adulto?',
            a: 'Não. SillyTavern é uma interface de chat de propósito geral com cartões de personagens, gestão de personas e livros de lore — útil para qualquer trabalho criativo com muito diálogo ou centrado em personagens. Muitos escritores o usam para redação de ficção não adulta, cenas multi-personagem, trabalho de consistência de voz em projetos longos, exercícios de escrita de roteiros e redação de narrativas de jogos.',
          },
          {
            q: 'Como compartilho personagens com amigos?',
            a: 'Três opções. (1) Exporte o cartão de personagem como PNG e envie o arquivo — funciona nas três interfaces. (2) Use o modo de servidor compartilhado do Agnai se quiser chats colaborativos, não apenas personagens compartilhados. (3) Publique o cartão no chub.ai ou em um repositório similar se quiser um lançamento público.',
          },
          {
            q: 'Essas interfaces funcionam no iPad ou Android?',
            a: 'RisuAI tem apps empacotados para iOS e Android. SillyTavern roda no Android via Termux (funciona, mas é complicado). Agnai roda em navegadores mobile, mas não está empacotado como app. Se mobile é sua superfície principal, RisuAI é a escolha certa.',
          },
          {
            q: 'Posso usar um backend compartilhado para vários usuários?',
            a: 'Para roleplay multiusuário especificamente, Agnai é a única interface com um modo de servidor compartilhado credível. Para compartilhar apenas o backend do modelo (um Ollama servindo múltiplas interfaces na mesma máquina), as três funcionam.',
          },
          {
            q: 'Qual tem o melhor suporte de livros de lore?',
            a: 'SillyTavern tem o sistema de livros de lore mais profundo — varredura recursiva (entradas que acionam outras entradas), prioridade de palavras-chave, gatilhos condicionais, escopos por personagem e correspondência regex. Agnai e RisuAI suportam livros de lore com varredura de palavras-chave mais simples, adequado para projetos com menos de ~50 entradas.',
          },
          {
            q: 'Os chats em grupo são estáveis em backends locais?',
            a: 'Sim, com o modelo certo. O chat em grupo com 3+ personagens precisa de um modelo com forte diferenciação de vozes — Command R+ 104B é a melhor opção, Llama 3.3 70B é o padrão prático. Em modelos menores (abaixo de 13B), os personagens derivam para a mesma voz em 5 a 10 trocas.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Melhores LLMs locais para escrita criativa 2026](/pt/power-local-llm/best-local-llm-creative-writing-2026) — a parte do modelo; comparativo direto das opções recomendadas neste guia.',
          '[LLMs locais sem censura para escrita criativa: ética, legalidade e melhores práticas](/pt/power-local-llm/uncensored-local-llm-creative-writing-ethics) — quando os derivados sem censura (Hermes 3, Dolphin 3.0) são a escolha certa e onde estão os limites legais.',
          '[Melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026) — panorama mais amplo de modelos; útil ao escolher quais modelos instalar atrás dessas interfaces.',
          '[Ollama vs LM Studio](/pt/local-llms/ollama-vs-lm-studio) — os dois backends mais comuns usados com essas interfaces; qual instalar primeiro.',
          '[Persona Prompting](/pt/prompt-engineering/persona-prompting) — estrutura do prompt do sistema para a voz do personagem; funciona em qualquer uma das três interfaces.',
          '[Temperatura e Top-P: controle a criatividade da IA](/pt/prompt-engineering/temperature-and-top-p-control-ai-creativity) — guia de amostragem para os presets por personagem que essas interfaces suportam.',
          '[Prompts de LLM local para escritores de ficção](/pt/power-local-llm/local-llm-prompts-for-fiction-writers) — templates de prompts do sistema prontos para usar para ficção baseada em personagens; funciona no SillyTavern, Agnai e RisuAI.',
          '[Melhores modelos LLM para mobile em 2026](/pt/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — recomendações de modelos otimizados para iOS e Android; combina bem com os apps mobile do RisuAI.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SillyTavern vs Agnai vs RisuAI: Melhor interface de roleplay local (2026)',
      description: 'Comparativo de SillyTavern, Agnai e RisuAI para roleplay com LLM local. Recursos, compatibilidade de modelos, privacidade e ecossistema comunitário comparados.',
      url: 'https://www.promptquorum.com/pt/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'SillyTavern vs Agnai vs RisuAI : Meilleure interface roleplay locale (2026)',
    seoTitle: 'SillyTavern vs Agnai vs RisuAI : roleplay 2026',
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
          '**Le choix du modèle est plus important que le choix de l\'interface.** Une bonne interface avec un petit modèle généraliste produit des dialogues plats ; une interface basique avec Llama 3.3 70B produit des scènes vivantes. Voir [Meilleurs LLM locaux pour l\'écriture créative 2026](/fr/power-local-llm/best-local-llm-creative-writing-2026) pour le volet modèles.',
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
          '**Points forts :** nouveaux utilisateurs, auteurs travaillant principalement sur mobile (les applications iOS/Android sont réelles, pas des ajouts de dernière minute), utilisateurs souhaitant une interface plus épurée que SillyTavern, roleplay solo avec un seul personnage. Pour les recommandations de modèles mobiles s\'associant bien à RisuAI, voir [Meilleurs modèles LLM mobiles en 2026](/fr/power-local-llm/mobile-llm-models-phi4-gemma-smollm).',
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
          'Pour les données comparatives sur ces choix, voir [Meilleurs LLM locaux pour l\'écriture créative 2026](/fr/power-local-llm/best-local-llm-creative-writing-2026).',
          'Pour des templates de prompt système prêts à l\'emploi fonctionnant avec les trois interfaces, voir [Prompts LLM locaux pour les auteurs de fiction](/fr/power-local-llm/local-llm-prompts-for-fiction-writers).',
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
          '**Erreur 1 : chasser les fonctionnalités quand le modèle est le goulot d\'étranglement.** Une excellente interface sur un modèle généraliste 7B produit des dialogues plats peu importe la qualité du système de livre de lore. Choisissez une interface compétente et investissez le reste du budget dans un modèle créatif de 32B+. Voir [Meilleurs LLM locaux pour l\'écriture créative 2026](/fr/power-local-llm/best-local-llm-creative-writing-2026) pour le volet modèles.',
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
          '[Meilleurs LLM locaux pour l\'écriture créative 2026](/fr/power-local-llm/best-local-llm-creative-writing-2026) — le volet modèles ; comparaison directe des choix recommandés dans ce guide.',
          '[LLM locaux non censurés pour l\'écriture créative : éthique, légalité & bonnes pratiques](/fr/power-local-llm/uncensored-local-llm-creative-writing-ethics) — quand les dérivés non censurés (Hermes 3, Dolphin 3.0) sont le bon choix et où se situent les lignes légales.',
          '[Meilleurs LLM locaux en 2026](/fr/local-llms/best-local-llms-2026) — panorama plus large des modèles ; utile pour choisir quels modèles installer derrière ces interfaces.',
          '[Ollama vs LM Studio](/fr/local-llms/ollama-vs-lm-studio) — les deux backends les plus courants associés à ces interfaces ; lequel installer en premier.',
          '[Persona Prompting](/fr/prompt-engineering/persona-prompting) — structure de prompt système pour la voix des personnages ; fonctionne avec les trois interfaces.',
          '[Température et Top-P : contrôler la créativité de l\'IA](/fr/prompt-engineering/temperature-and-top-p-control-ai-creativity) — guide d\'échantillonnage pour les presets par personnage que ces interfaces supportent.',
          '[Prompts LLM locaux pour les auteurs de fiction](/fr/power-local-llm/local-llm-prompts-for-fiction-writers) — templates de prompt système prêts à l\'emploi pour la fiction axée sur les personnages ; fonctionne avec SillyTavern, Agnai et RisuAI.',
          '[Meilleurs modèles LLM mobiles en 2026](/fr/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — recommandations de modèles optimisés pour iOS et Android ; s\'associe bien aux applications mobiles de RisuAI.',
          '[Configuration de roleplay chinois SillyTavern](/fr/prompt-bites/sillytavern-chinese-roleplay-setup) — Qwen3 + SillyTavern : configuration des fiches de personnage pour le roleplay en chinois.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'SillyTavern vs Agnai vs RisuAI：2026年ローカルLLMロールプレイUI比較',
    seoTitle: 'SillyTavern vs Agnai vs RisuAI：最良のローカルロールプレイUI 2026',
    intro:
      'SillyTavern、Agnai、RisuAIは2026年におけるローカルLLM向けの三つの有力なロールプレイフロントエンドです。いずれもOllama、llama.cpp、またはOpenAI互換エンドポイントとシームレスに連携でき、それぞれ機能の密度において異なる立場を取ります。SillyTavernは深いカスタマイズを求めるユーザー向け（経験豊富なユーザーの多くが最終的に選ぶ選択肢）、Agnaiはマルチユーザー向け（本格的な共有サーバーモードを持つ唯一の選択肢）、RisuAIはSillyTavernが過剰に感じられるときの軽量な代替手段です。このガイドでは、キャラクターカード、ペルソナ管理、ロアブック、グループチャット、モデルサポート、プライバシー、プラットフォーム対応について三者を比較します。',
    metaDescription:
      'SillyTavern・Agnai・RisuAIをローカルLLMロールプレイ用に比較。機能、モデル対応、プライバシー、コミュニティエコシステムを詳細解説。',
    twitterDescription:
      'ローカルロールプレイUI三択：SillyTavern（深いカスタマイズ）、Agnai（マルチユーザー）、RisuAI（軽量代替）。キャラクターカード・ロアブック・グループチャット・プライバシーを比較。',
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
      'キャラクターカード・ペルソナ管理・グループシーンを持つ専用チャットフロントエンドを通じてローカルLLMを活用するロールプレイライター、キャラクターデザイナー、フィクション共同制作者、クリエイティブライティングチーム。',
    readTime: '13分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカルロールプレイフロントエンド',
    targetKeywords: [
      'SillyTavern vs Agnai',
      'Agnai vs RisuAI',
      'ローカルロールプレイUI',
      'SillyTavern Ollama 設定',
      'キャラクターカード ローカルLLM',
      'RisuAI vs SillyTavern',
    ],
    leadAnswerBlock:
      '**SillyTavernはユーザーの約80%に適した選択肢です。キャラクターカードのサポートが最も充実しており、コミュニティエコシステムが最大で、カスタマイズ面（拡張機能、プリセット、正規表現置換、ワールド情報）が最も強力です。Agnaiは三者の中で唯一、信頼できるマルチユーザーサポートを持つため、共有サーバー、コラボレーティブロールプレイ、小規模グループプロジェクトに最適です。RisuAIはSillyTavernの機能密度が障壁となる場合の軽量な代替手段であり、同じキャラクターカード仕様で、より小さな操作面と簡単な初回起動を提供します。三者ともTavern v2キャラクターカード仕様に対応し、OllamaまたはOpenAI互換エンドポイントと連携でき、テレメトリーなしで完全にローカル動作します。ワークフローの形態で選んでください：深いカスタマイズが必要なソロライター→SillyTavern、キャラクターを共有するライターグループ→Agnai、今日からチャットを始めたい初回ユーザー→RisuAI。**',
    quickAnswerTop: {
      ja: {
        question: '2026年のローカルLLMロールプレイフロントエンドとして最良はどれか：SillyTavern、Agnai、それともRisuAI？',
        answer:
          'ほとんどのユーザーにとってデフォルトの選択肢はSillyTavernです。最も深い機能、最大のコミュニティ、最多の拡張機能を持ちます。Agnaiは共同制作者とキャラクターやチャットを共有する場合に唯一の信頼できるマルチユーザー選択肢です。RisuAIはSillyTavernが過剰と感じるユーザー向けの軽量な代替手段です。三者ともオープンソースで、Tavern v2キャラクターカードを読み込み、OllamaとOpenAI互換エンドポイントに接続できます。選択はワークフローの形態による問題であり、品質の問題ではありません。',
        bullets: [
          'SillyTavern：最も深い機能、最大のコミュニティ、カスタマイズニーズを持つソロユーザーへのデフォルト選択肢。',
          'Agnai：信頼できるマルチユーザーサポートを持つ唯一のフロントエンド；共有サーバーとコラボレーティブロールプレイに最適。',
          'RisuAI：三者の中で最も軽量；SillyTavernの機能密度が障壁となる場合に選択。',
          '三者ともTavern v2キャラクターカードに対応；一方のカードはそのまま他方で使用可能。',
          '三者ともOllama、llama.cpp、LM Studio、vLLM、OpenAI互換エンドポイントに接続可能。',
          '三者ともオープンソースで完全ローカル動作；デフォルトでテレメトリーなし。',
          'モデル推奨：Llama 3.3 70B（最良のオールラウンド）、Hermes 3（無検閲）、Command R+（対話）、Qwen3 32B（24GBリグのデフォルト）。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: 'テスト方法', anchor: '#how-we-tested' },
      { label: '三者比較', anchor: '#comparison' },
      { label: 'SillyTavernの詳細分析', anchor: '#sillytavern' },
      { label: 'Agnaiの詳細分析', anchor: '#agnai' },
      { label: 'RisuAIの詳細分析', anchor: '#risuai' },
      { label: 'キャラクターカードフォーマット（Tavern v2）', anchor: '#character-cards' },
      { label: 'フロントエンド別モデル推奨', anchor: '#models' },
      { label: 'プライバシー：どのフロントエンドが外部通信するか', anchor: '#privacy' },
      { label: '判断：フロントエンドの選び方', anchor: '#decision' },
      { label: 'よくある失敗', anchor: '#common-mistakes' },
      { label: '参考文献', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連情報', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**2026年においてSillyTavernは約80%のユーザーへのデフォルト選択肢です。** キャラクターカード機能が最も充実し、拡張機能エコシステムが最大で、カスタマイズ面が最も豊富。代替手段を試した後に多くの経験豊富なロールプレイユーザーが落ち着く先です。',
          '**Agnaiは唯一の信頼できるマルチユーザー選択肢です。** 共有サーバーモードにより複数のライターが同じインスタンスに接続し、キャラクターを共有し、長期チャットで協力できます。小規模ライティンググループ、友人グループ、共有キャラクターコミュニティに最適です。',
          '**RisuAIは軽量な代替手段です。** 同じTavern v2キャラクターカードサポート、より小さな機能面、より簡単な初回起動。SillyTavernが過剰に感じられる場合や「メッセージを入力して返信を得る」という迅速な経路が求められる場合の選択肢です。',
          '**三者ともTavern v2キャラクターカード仕様に対応しています。** SillyTavernで作成したカードはAgnaiとRisuAIで変換なしに機能します。フロントエンド間の移行は容易です。',
          '**三者ともOllama、llama.cpp、LM Studio、OpenAI互換エンドポイントと連携できます。** 特定のモデルバックエンドにロックインされることはなく、バックエンドの切り替えは設定変更で完了します。',
          '**プライバシー：三者ともデフォルトでテレメトリーなしの完全ローカル動作です。** 各フロントエンドのオプションクラウド機能（翻訳、画像生成）は明示的に有効化した場合のみ外部通信します。正式な監査レベルの証拠が必要な場合はネットワーク監視で確認してください。',
          '**モデルの選択はフロントエンドの選択より重要です。** 優れたフロントエンドでも小規模な汎用モデルを使えば平坦な対話しか生まれませんが、基本的なフロントエンドでもLlama 3.3 70Bと組み合わせれば生き生きとしたシーンが生まれます。モデルについては[2026年クリエイティブライティング向けベストローカルLLM](/ja/power-local-llm/best-local-llm-creative-writing-2026)をご覧ください。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**SillyTavern** — Node.js＋ブラウザUI、ローカルホスト。最も深いカスタマイズ、最大のコミュニティ。',
          '**Agnai** — Node.js＋ブラウザUI；ローカルまたは共有サーバーとして動作。三者の中で唯一のマルチユーザー選択肢。',
          '**RisuAI** — Tauri/Electronデスクトップアプリ；より軽量な機能セット、最も簡単な初回起動。',
          '**キャラクターカード仕様：** 三者ともTavern v2（標準）を読み込み；相互互換性あり。',
          '**モデルバックエンド：** Ollama、llama.cpp、LM Studio、vLLM、OpenAI互換エンドポイント、クラウドAPI（オプション）。',
          '**デフォルトのプライバシー：** 三者ともデフォルトでローカルのみ、テレメトリーなし、アナリティクスなし。オプションのクラウド機能は明示的に有効化が必要。',
          '**プラットフォーム：** SillyTavernとAgnaiはmacOS、Windows、Linux、Termux/Androidで動作。RisuAIはmacOS、Windows、Linux、iOS、Androidで動作。',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'テスト方法',
        content:
          'このガイドの評価は、機能一覧の比較ではなく、三つのフロントエンドすべての実際の使用に基づいています。',
        items: [
          '**バージョン：** SillyTavern 1.x（安定ブランチ）、Agnai最新安定リリース、RisuAI最新デスクトップビルド（2026年5月）。',
          '**バックエンド：** Ollama 0.5＋にLlama 3.3 70B Q4_K_Mを使用し、三つのフロントエンドすべてで主要テストモデルとして使用。',
          '**テストシナリオ：** 同一のTavern v2キャラクターカードを三つのフロントエンドに読み込み；同一の5つの会話プロンプトを各フロントエンドで実行；3キャラクターでのグループチャットシーン；25エントリーのロアブック（キーワードトリガーと2つの再帰エントリー）；サードパーティプリセットファイルからのサンプリングプリセットインポート。',
          '**インストール時間：** 同一マシンでフロントエンドごとに3回のフレッシュインストールの中央値。',
          '**機能評価：** 「より単純」または「限定的」と説明された機能はドキュメントの主張ではなく、テストシナリオでの観察可能な動作を反映しています。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '三者比較',
        content:
          '**同じキャラクターカード、同じモデルバックエンド — 機能密度とターゲットユーザーが異なります。** 以下の表は判断に関連する差異を示します。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SillyTavernはソロユーザー向けの深いカスタマイズ選択肢、Agnaiは共有サーバー向けのマルチユーザー選択肢、RisuAIは初回ユーザー向けの軽量代替手段であり、三者ともTavern v2キャラクターカードを読み込み、同じモデルバックエンドと連携できます。',
          },
          {
            type: 'plain-terms',
            text: '特別な理由がない限りSillyTavernを選んでください。ほとんどの経験豊富なユーザーが最終的にそこに落ち着きます。他のライターとサーバーを共有したい場合はAgnaiを選んでください。SillyTavernが過剰に感じられて5分でチャットを始めたい場合はRisuAIを選んでください。三者ともキャラクターカードが共通なので、後から切り替えることも容易です。',
          },
        ],
        columns: ['機能', 'SillyTavern', 'Agnai', 'RisuAI'],
        rows: [
          { '機能': '主な操作面', 'SillyTavern': 'ローカルNode.js＋ブラウザ', 'Agnai': 'ローカルNode.js＋ブラウザ、または共有サーバー', 'RisuAI': 'Tauri/Electronデスクトップアプリ＋モバイル' },
          { '機能': 'セットアップ時間（初回起動）', 'SillyTavern': '約15分', 'Agnai': '約10分（シングルユーザー）；約30分（サーバー）', 'RisuAI': '約5分' },
          { '機能': 'キャラクターカード', 'SillyTavern': 'Tavern v2（完全仕様）＋拡張機能', 'Agnai': 'Tavern v2', 'RisuAI': 'Tavern v2＋独自フォーマット' },
          { '機能': 'ペルソナ／ユーザープロファイル', 'SillyTavern': 'ネイティブ、複数ペルソナ、キャラクター別設定', 'Agnai': 'ネイティブ、マルチユーザー', 'RisuAI': 'ネイティブ、よりシンプル' },
          { '機能': 'ロアブック／ワールド情報', 'SillyTavern': 'ネイティブ、非常に柔軟（再帰スキャン対応）', 'Agnai': 'ネイティブ、よりシンプルなスキャン', 'RisuAI': 'ネイティブ、よりシンプルなスキャン' },
          { '機能': 'グループチャット（複数キャラクター）', 'SillyTavern': 'ネイティブ、成熟した実装', 'Agnai': 'ネイティブ', 'RisuAI': 'ネイティブ、よりシンプル' },
          { '機能': 'マルチユーザー／共有サーバー', 'SillyTavern': 'なし（シングルユーザー）', 'Agnai': 'あり（差別化要素）', 'RisuAI': 'なし（シングルユーザー）' },
          { '機能': '拡張機能／プラグイン', 'SillyTavern': '最大のエコシステム（正規表現、プリセット、カスタムUI）', 'Agnai': 'より小規模', 'RisuAI': 'プラグインシステム、より小規模なライブラリ' },
          { '機能': 'バックエンドサポート', 'SillyTavern': 'Ollama、llama.cpp、LM Studio、vLLM、OAI互換、KoboldAI、Aphrodite', 'Agnai': 'Ollama、llama.cpp、LM Studio、OAI互換', 'RisuAI': 'Ollama、llama.cpp、LM Studio、OAI互換' },
          { '機能': 'テレメトリーのデフォルト', 'SillyTavern': 'なし', 'Agnai': 'なし', 'RisuAI': 'なし' },
          { '機能': '最適な用途', 'SillyTavern': '深いカスタマイズを求めるソロユーザー', 'Agnai': '共有サーバー、マルチユーザーコラボレーション', 'RisuAI': '初回ユーザー、軽量セットアップ' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '判断はワークフローの形態の問題であり、品質の問題ではありません。三者ともに同じモデルと同じキャラクターカードを組み合わせると同一の会話を生成します。書き方に応じて選んでください。ソロで詳細な設定を行いたい場合、共有サーバーでコラボレーターと共同作業したい場合、またはデスクトップやモバイルアプリで素早く始めたい場合など、それぞれのニーズに合った選択が迷いを90%減らします。',
          },
        ],
      },
      sillytavern: {
        id: 'sillytavern',
        title: 'SillyTavern：深いカスタマイズのデフォルト',
        content:
          '**SillyTavernは、代替手段を試した後にほとんどの経験豊富なロールプレイユーザーが落ち着く先です。** ローカルロールプレイ分野において最大のコミュニティ、最も充実したキャラクターカード機能、最大の拡張機能エコシステムを持ちます。',
        items: [
          '**インストール：** リポジトリをgit clone、npm install、npm startで起動。ローカルサーバーは`http://localhost:8000`で動作。macOS、Windows、Linux、AndroidのTermuxと対応しクロスプラットフォームで使用可能。設定は`data/default-user/`配下に保存されます（設定、キャラクター、ワールド情報、プリセット）。',
          '**キャラクターカード：** Tavern v2仕様に完全対応。ドラッグアンドドロップインポート（JSONを埋め込んだPNG）、UIでのフィールドの閲覧・編集、PNGとしてのエクスポート。SillyTavernで作成したカードはAgnaiとRisuAIでそのまま開けます；逆も同様です。',
          '**ロアブック／ワールド情報：** 三者の中で最も柔軟。再帰スキャン（他のエントリーを起動するエントリー）、キーワード優先度、条件付きトリガー、キャラクター別スコープに対応。世界観がキャラクターより複雑な長期キャンペーンに最適なツールです。',
          '**グループチャット：** 成熟したマルチキャラクター実装。シーンに参加するキャラクターを定義し、ターン順またはモデル駆動のターンテイキングを設定し、やり取りを通じてモデルが異なる声を維持する様子を確認できます。グループシーンが作業の核心である場合の選択肢です。',
          '**拡張機能：** 正規表現置換（表示前のモデル出力を整形）、プリセット（キャラクター別のサンプリング設定）、Stable Diffusion統合（画像生成）、翻訳、ウェブ検索、カスタムUI。この分野で最大のアドオンエコシステムです。',
          '**強み：** ソロロールプレイ、長期個人プロジェクト、深いカスタマイズニーズ、複雑な世界観構築。',
          '**弱み：** マルチユーザーモードなし（設計上シングルユーザー）；機能面が初回ユーザーを圧倒する場合がある；設定の広がり（複数のJSONファイル、プリセット、ワールド情報、正規表現）の習得に時間がかかる。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'SillyTavernのデフォルトプリセットと、chub.aiまたはSillyTavernコミュニティからの1〜2枚のキャラクターカードから始めてください。最初の10時間の使用前に拡張機能をインストールする衝動に抗ってください。ほとんどのユーザーはデフォルト設定に正規表現置換と翻訳拡張機能を加えるだけで十分です。',
          },
        ],
      },
      agnai: {
        id: 'agnai',
        title: 'Agnai：マルチユーザー選択肢',
        content:
          '**Agnaiは2026年における唯一の信頼できるマルチユーザーロールプレイフロントエンドです。** SillyTavernと同様のキャラクターカードサポート、より小さなカスタマイズ面を持ちますが、複数のライターが一つのバックエンドに接続できる本格的な共有サーバーモードを備えています。',
        items: [
          '**インストール（シングルユーザー）：** Node.js＋npm install＋startで起動。デフォルトで`http://localhost:3001`で動作。約10分のセットアップはSillyTavernの手軽さに匹敵します。',
          '**インストール（共有サーバー）：** データベース（MongoDB）と認証レイヤーを追加；Agnaiはユーザーアカウント、役割分離、共有キャラクター／チャットの所有権をネイティブに管理します。約30分のセットアップ；プロジェクトのREADMEに文書化されています。',
          '**キャラクターカード：** Tavern v2；完全なインポート／エクスポート。カード仕様はSillyTavernと同一なので、フロントエンド間でカードを移行できます。',
          '**ペルソナシステム：** ネイティブのマルチユーザー対応。各ユーザーがペルソナを持ち、エージェントがチャットごとにどのペルソナを有効にするかを選択します。複数のライターがそれぞれのプロファイルを持ちたい共有サーバーで有用です。',
          '**ロアブック／ワールド情報：** 存在するが、SillyTavernより機能が限定的。ほとんどのプロジェクトに適しているが、深い再帰スキャンは利用できません。',
          '**グループチャット：** ネイティブ対応、SillyTavernよりシンプル。2〜4キャラクターのシーンという一般的なケースに対応します。',
          '**強み：** 共有サーバー（ライティンググループ、友人グループ、キャラクターを共有する小規模コミュニティ）、コラボレーティブロールプレイ、複数ユーザーが共同で書く必要があるプロジェクト。',
          '**弱み：** SillyTavernより小規模な拡張機能エコシステム；ロアブックの再帰が制限されている；深いソロカスタマイズには適していない。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '共有サーバーの場合、TLSを使用したリバースプロキシ（Caddyが最もシンプル）の背後でAgnaiを動作させてください。デフォルト設定はHTTPで単一ポートでリッスンしており、localhostには適していますが、他のライターに公開するサーバーには不適切です。READMEに本番セットアップが記載されています。',
          },
        ],
      },
      risuai: {
        id: 'risuai',
        title: 'RisuAI：軽量な代替手段',
        content:
          '**RisuAIはSillyTavernが過剰に感じられる場合の適切な選択肢です。** 同じTavern v2キャラクターカード、より小さな機能面、ローカルウェブサーバーではなくデスクトップアプリとしてパッケージ化されています。ストレスのない初回起動が差別化要素です。',
        items: [
          '**インストール：** macOS、Windows、Linux用のデスクトップインストーラー、iOSとAndroid用アプリ。Node.jsもターミナルも不要 — ダブルクリックで起動します。三者の中で最も速い初回起動を実現します。',
          '**キャラクターカード：** Tavern v2に加えてRisuAI独自の拡張フォーマット（より多くのモジュールフィールド、プロットトリガー）。SillyTavernとAgnaiのカードはそのまま読み込めます；RisuAIで作成したカードも大部分は他の二者に移植可能です。',
          '**ペルソナシステム：** 存在するが、SillyTavernよりシンプル。UIでチャットごとに一つのアクティブペルソナを切り替え可能。',
          '**ロアブック／ワールド情報：** 存在するが、SillyTavernの再帰システムよりシンプルなスキャン。約50エントリー以下のほとんどのプロジェクトに十分です。',
          '**グループチャット：** ネイティブ対応；典型的な2〜4キャラクターシーンに対応します。',
          '**プラグイン：** SillyTavernより小規模なエコシステム。コアはサードパーティのアドオンなしに最も一般的なニーズをカバーします（キャラクター編集、サンプリングプリセット、ロアブック管理）。',
          '**強み：** 初回ユーザー、モバイル中心のライター（iOS/Androidアプリは本格的なアプリであり後付けではない）、SillyTavernよりクリーンなUIを求めるユーザー、シングルキャラクターのソロロールプレイ。RisuAIと相性の良いモバイル向けモデル推奨については[2026年ベストモバイルLLMモデル](/ja/power-local-llm/mobile-llm-models-phi4-gemma-smollm)をご覧ください。',
          '**弱み：** SillyTavernより小規模なコミュニティ；カスタマイズの深さが限定的（再帰ロアスキャンなし、より小さな拡張機能面）；機能の上限が重要な場合には適していない。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RisuAIのモバイルアプリは三者の中でiOSとAndroid向けに実際にパッケージ化されている唯一のものです。SillyTavernはAndroidのTermuxで動作しますが（機能するが手間がかかる）；Agnaiはモバイルブラウザでもアクセスできますがパッケージアプリではありません。モバイル使用が実際のワークフローである場合、他の機能に関わらずRisuAIが適切な選択肢です。',
          },
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: 'キャラクターカードフォーマット（Tavern v2）：共通言語',
        content:
          '**三つのフロントエンドはすべてTavern v2キャラクターカード仕様を読み込むため、フロントエンド間の移行は容易です。** カードはメタデータにJSONが埋め込まれたPNGファイルです；同一ファイルが三者のいずれでも開けます。',
        items: [
          '**Tavern v2カードの内容：** 名前、説明、性格、シナリオ、最初のメッセージ、対話例、タグ、クリエイターノート、システムプロンプト。オプションフィールドにはロアブックエントリーとキャラクター固有のサンプリング設定が含まれます。',
          '**V3仕様（2026年5月）：** V2をネイティブのロアブック埋め込み、多言語サポート、豊富なクリエイターメタデータで拡張しています。SillyTavernはV3インポートを完全にサポート；AgnaiはV3カードを読み込みますが一部のV3固有フィールドは無視します；RisuAIは拡張フォーマットを通じてV3を部分的に処理します。V2が共通言語として残り — V3は追加的かつ後方互換性があり、V2カードはどこでも機能します。',
          '**重要な理由：** コミュニティが構築したキャラクターエコシステム全体（chub.ai、JanitorAIエクスポート、キャラクターテーマのDiscordサーバー）がTavern v2を使用しています。他の人が作ったカードは変換なしにフロントエンドに読み込めます。',
          '**仕様の限界：** Tavern v2は静的なキャラクター定義をカバーします。長期的なシーンの記憶、動的な関係状態、チャット固有のオーバーライドはフロントエンド固有の実装です。アクティブなチャットをフロントエンド間で移行することは、キャラクターカードのみを移行するより困難です。',
          '**インポートカードのサニタイズ：** chub.aiのカードにはモデルの動作を変更するサンプリングプリセット、システムプロンプトオーバーライド、攻撃的なジェイルブレイクプロンプトが含まれている場合があります。ダウンロードしたカードを使用する前にシステムプロンプトと性格フィールドを読んでください — 特に一枚のカードがすべてのユーザーに影響する共有サーバーコンテキスト（Agnai）では重要です。',
          '**独自カードの作成：** 三つのフロントエンドすべてにカードエディターがあります。SillyTavernのものが最も機能が豊富；RisuAIのものがUIが最もクリーン。最初から作成する前にいくつかの既存カードを編集してください — 例を見た後にフィールドのセマンティクスがより理解しやすくなります。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'インポートされたコミュニティカードには隠れた動作が含まれる場合があります：長いジェイルブレイクシステムプロンプト、サンプリングオーバーライド、ペルソナの矛盾。初回使用前にダウンロードしたカードをエディターで開き、システムプロンプトフィールドを読んでください。共有サーバーコンテキスト（Agnai）では、一枚の不適切なカードがすべてのユーザーに影響します。',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'フロントエンド別モデル推奨',
        content:
          '**フロントエンドの選択はモデルの選択を制約しません。** 三者ともに同じバックエンドに対応しており — Ollamaが最も一般的 — 以下のモデル推奨はSillyTavern、Agnai、RisuAIのいずれにも同様に適用されます。',
        items: [
          '**Llama 3.3 70B** — キャラクター作業においてローカルで最良のオールラウンド選択肢。長いセッションを通じて最も強い声の一貫性を持ち、キャラクターの方向付けに従い、システムプロンプトが作業をフィクションとして位置づければダークなテーマも扱えます。Q4_K_Mで約42GB VRAMが必要です。',
          '**Qwen3 32B** — 24GBリグへの適切な選択肢。ハードウェアコストなしにLlama 70B相当の散文品質。ほとんどのノートパソコンとコンシューマーデスクトップのデフォルト。',
          '**Command R+ 104B** — 対話スペシャリスト。グループシーンのキャラクター間で最も自然な会話音声の差別化。Q4_K_Mで約62GB VRAMが必要です。',
          '**Hermes 3（Llama 3.3ベース）** — 無検閲の派生モデル。Llama 3.3 70Bと同じアーキテクチャ；RLHFセーフティレイヤーが除去されており、成熟したシーンを拒否するのではなくプロンプトに従います。同じOllama上に二つのインストール（インストラクト＋Hermes）を用意するパターンが一般的です。',
          '**Mistral Large** — 長コンテキスト選択肢。128Kコンテキストがデフォルトで利用可能；ロールプレイセッションが長くなり、より短いコンテキストモデルがウィンドウから押し出されるほどになる場合に有用です。',
          '**真剣なロールプレイ作業に避けるべきもの：** クリエイティブライティングのファインチューニングなしに13B未満のもの。小さな汎用モデルは5〜10回のやり取りで声の一貫性を失い、キャラクターがモデルのデフォルト音声に「ドリフト」します。',
          'これらの選択についてのデータ比較は[2026年クリエイティブライティング向けベストローカルLLM](/ja/power-local-llm/best-local-llm-creative-writing-2026)をご覧ください。',
          '三つのフロントエンドすべてで使用できるシステムプロンプトテンプレートは[フィクションライター向けローカルLLMプロンプト](/ja/power-local-llm/local-llm-prompts-for-fiction-writers)をご覧ください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ロールプレイにおいてサンプリング設定はモデルの選択と同様に重要です。温度0.85〜1.05、top-p 0.9〜0.95、繰り返しペナルティ1.1が出発点です。SillyTavernではキャラクター別にプリセットを保存できます；活用してください — 異なるキャラクターはしばしば異なる温度を求めます（緊迫した尋問シーンは0.7を好み；シュールな夢のシーケンスは1.2を好む）。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー：どのフロントエンドが外部通信するか',
        content:
          '**三つのフロントエンドはすべてデフォルトでテレメトリーなしのローカルのみです。** 各フロントエンドのオプションクラウド機能は明示的なオプトインで保護されています；正式な監査レベルの証拠が必要な場合はネットワーク監視で確認してください。',
        items: [
          '**SillyTavern：** テレメトリーなし。外部通信する可能性があるオプション機能：クラウドLLMバックエンド（OpenAI、Claudeなど — 設定した場合のみ）、翻訳拡張機能（デフォルトでクラウドAPIを使用；ローカルに設定可能）、Stable Diffusion画像生成（ローカルSDまたは設定したリモートエンドポイントを使用）、ウェブ検索拡張機能（クラウド検索を使用）。各機能はオプトインでラベル付けされています。',
          '**Agnai：** コアアプリにテレメトリーなし。サーバーモードでは有効にした場合のみアカウントテレメトリーを追加します。SillyTavernと同様のオプションクラウド機能（翻訳、クラウドLLMバックエンド、画像生成）— すべて明示的。',
          '**RisuAI：** テレメトリーなし。同様のパターン — デフォルトでローカルのみ、オプションクラウド機能（翻訳、画像生成、クラウドLLMバックエンド）は明示的な設定で保護。',
          '**プライバシー主張の確認：** インターネットアクセスなしでフロントエンドを実行（インストール後にWi-Fiをオフ）— ローカルモデルとチャット — すべてが機能することを確認。またはネットワークモニター（macOSのLittle Snitch、LinuxのWireshark）を実行してチャットセッション中の外部接続を観察してください。三つのフロントエンドはデフォルトでこのテストをパスします。',
          '**プライバシーが損なわれる可能性がある箇所：** クラウドLLMバックエンド（設定した場合；プロンプトと応答がマシンを離れる）、クラウドベースの翻訳拡張機能（翻訳するメッセージがサードパーティに送信される）、Stable Diffusionリモートエンドポイント、ウェブ検索拡張機能。各機能はユーザーの意図的な選択です。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '「プライバシー重視」のローカルフロントエンドは、指向するバックエンドと同程度のプライバシーしか持ちません。SillyTavernをGPT-5に向けるとロールプレイプロンプトがOpenAIに送信されます；Ollamaに向けるとすべてがローカルに保持されます。フロントエンド自体が制約ではありません；モデルバックエンドが制約です。',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: '判断：どのフロントエンドを選ぶべきか',
        content:
          '**三つの質問でほとんどのユーザーを適切な選択肢に導けます。**',
        columns: ['あなたの状況', '選択'],
        rows: [
          { 'あなたの状況': 'ソロライターで深いカスタマイズを求め、ツールの学習に時間を投資する意欲がある', '選択': 'SillyTavern' },
          { 'あなたの状況': '共有サーバーで他のライターとキャラクターとチャットを共有したい', '選択': 'Agnai' },
          { 'あなたの状況': '今日からチャットを始めたい；SillyTavernが過剰に感じられる', '選択': 'RisuAI' },
          { 'あなたの状況': '主にモバイル（iOSまたはAndroid）で書く', '選択': 'RisuAI（パッケージ化されたモバイルアプリを持つ唯一の選択肢）' },
          { 'あなたの状況': '3人以上のライティンググループまたはコミュニティを運営している', '選択': 'Agnai（共有サーバー）— 唯一の信頼できるマルチユーザー選択肢' },
          { 'あなたの状況': '複雑な世界観構築がある（50以上のロアエントリー、再帰トリガー）', '選択': 'SillyTavern（最も深いロアブック機能）' },
          { 'あなたの状況': '判断に迷っている', '選択': '最初にRisuAIを試してください（5分インストール）。それを使いこなしたらSillyTavernに移行してください。カードは移行できます。' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SillyTavernはカスタマイズニーズを持つソロユーザーへのデフォルト；Agnaiは共有サーバー向けの唯一のマルチユーザー選択肢；RisuAIは初回ユーザーとモバイルライター向けの軽量代替手段 — ワークフローの形態で選び、三者間でカードが移行できるため選択を変更するオプションを保持してください。',
          },
          {
            type: 'plain-terms',
            text: 'ロールプレイフロントエンドを使ったことがない場合はまずRisuAIを試してください — 5分でチャットを始められます。カスタマイズの限界に達したらSillyTavernに移行してください。共有サーバーのマルチユーザーモードが特に必要な場合のみAgnaiを使用してください。三者のいずれかで作成したキャラクターカードは他のフロントエンドでも読み込めるため、選択は覆せます。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '拡張機能をインストールしたり精巧なロアブックを構築したりする前に、選択したフロントエンドで最初の10時間を過ごしてください。デフォルト設定にいくつかのコミュニティカードを加えるだけで適合性を評価するには十分です。早すぎる設定は、次のフロントエンドへの移行が吸収したであろうフリクションを生み出します。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'ロールプレイフロントエンドの選択と使用でよくある失敗',
        items: [
          '**失敗1：モデルがボトルネックなのに機能を追い求める。** 7Bの汎用モデル上の優れたフロントエンドは、ロアブックシステムがどれほど優れていても平坦な対話しか生みません。有能なフロントエンドを選び、残りの予算を32B以上のクリエイティブライティング向けモデルに費やしてください。モデルについては[2026年クリエイティブライティング向けベストローカルLLM](/ja/power-local-llm/best-local-llm-creative-writing-2026)をご覧ください。',
          '**失敗2：クリエイティブモデルにデフォルトのサンプリング設定を使用する。** SillyTavern、Agnai、RisuAIはいずれも質問応答向けにチューニングされたデフォルト設定（温度約0.7、top-p約0.9）で提供されます。クリエイティブロールプレイには0.85〜1.05、top-p 0.9〜0.95、繰り返しペナルティ1.1が求められます。キャラクター別にプリセットを保存してください。',
          '**失敗3：コミュニティカードを読まずにインポートする。** chub.aiのカードには2,000トークンのジェイルブレイク言語のシステムプロンプト、デフォルト設定と競合するサンプリングオーバーライド、または説明に矛盾する性格フィールドが含まれている場合があります。使用前にエディターでカードを開き、システムプロンプトをサニタイズしてください。',
          '**失敗4：ペルソナ／ユーザープロファイルをスキップする。** 空の「ユーザー」ペルソナはモデルが誰が話しているかのアンカーを持たないことを意味します。名前、年齢、基本的な状況を持つ1段落のペルソナでさえ、デフォルトの空ユーザーよりも劇的に没入感のあるシーンを生み出します。',
          '**失敗5：カードではなくチャットウィンドウで編集する。** 「再生成」や「モデルに修正を依頼する」でモデルの出力を調整することはモデルに書かせる習慣を訓練します。編集をキャラクターカードまたはシステムプロンプトに保存してください；次のセッションはより高いレベルから始まります。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考文献',
        items: [
          '[SillyTavernドキュメント](https://docs.sillytavern.app/) — インストール、キャラクターカード、ロアブック、拡張機能、サンプリングプリセット。',
          '[SillyTavern GitHubリポジトリ](https://github.com/SillyTavern/SillyTavern) — ソースコード、リリースノート、コミュニティ拡張機能。',
          '[Agnai GitHubリポジトリ](https://github.com/agnaistic/agnai) — インストール、マルチユーザーサーバーセットアップ、キャラクターカード仕様。',
          '[RisuAI GitHubリポジトリ](https://github.com/kwaroran/RisuAI) — インストール、プラグインシステム、モバイルアプリビルド。',
          '[Tavern v2キャラクターカード仕様](https://github.com/malfoyslastname/character-card-spec-v2) — フロントエンド横断のキャラクターカードフォーマット。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '2026年における最良のローカルロールプレイフロントエンドはどれですか？',
            a: 'ユーザーの約80%にとってSillyTavernが最良です — 最も深い機能、最大のコミュニティ、最多の拡張機能。マルチユーザー共有サーバーサポートが必要な場合はAgnaiが適切な選択肢です（三者の中で唯一の信頼できる選択肢）。RisuAIはSillyTavernが過剰に感じる初回ユーザー、モバイルライター、またはSillyTavernを過剰と感じる方向けの軽量代替手段です。三者ともTavern v2キャラクターカードをサポートし同じモデルバックエンドに接続できます；カードが移行できるため後からの切り替えは容易です。',
          },
          {
            q: 'SillyTavern、Agnai、RisuAIは同じキャラクターカードを使用できますか？',
            a: 'はい。三者ともにTavern v2キャラクターカード仕様（JSONが埋め込まれたPNG）を読み込みます。SillyTavernで作成したカードはAgnaiとRisuAIで変換なしに開けます；逆も同様です。RisuAIはオプションフィールドでフォーマットを拡張していますが、RisuAIのTavern v2カードはSillyTavernとAgnaiでも読み込めます（拡張フィールドは無視されます）。フロントエンド間の移行は容易です。',
          },
          {
            q: 'これらのフロントエンドはチャットをクラウドサーバーに送信しますか？',
            a: 'いいえ、デフォルトでは送信しません。三者ともテレメトリーなしのローカルのみです。チャットデータ、キャラクターカード、ロアブックはすべてマシン上にあります。オプション機能（クラウドLLMバックエンド、翻訳拡張機能、画像生成、ウェブ検索）は明示的な設定で保護されています；Ollamaまたはローカルバックエンドにフロントエンドを向けた場合、ネットワークから何も出ません。正式な監査レベルの証拠が必要な場合はネットワークモニターで確認してください。',
          },
          {
            q: 'ロールプレイにはどのモデルを使うべきですか？',
            a: 'ハードウェアが許す場合（Q4_K_Mで約42GB VRAM）はLlama 3.3 70Bが最良のオールラウンド選択肢です。24GBリグではQwen3 32Bがより軽量なデフォルトです。Command R+ 104Bはグループシーンで最も自然な対話音声を持ちますが約62GBが必要です。インストラクトチューニングモデルが拒否する成熟したシーンには同じOllama上にHermes 3（Llama 3.3ベース）をインストールしてシーンごとに切り替えてください。クリエイティブライティングのファインチューニングなしの13B未満のモデルは5〜10回のやり取りで声の一貫性を失い、真剣なロールプレイ作業には避けるべきです。',
          },
          {
            q: 'SillyTavernは成人向けロールプレイ専用ですか？',
            a: 'いいえ。SillyTavernはキャラクターカード、ペルソナ管理、ロアブックを持つ汎用チャットフロントエンドであり、キャラクター駆動または対話豊かなクリエイティブ作業全般に有用です。多くのライターが非成人向けフィクションのドラフト、マルチキャラクターシーン、長期プロジェクトでの声の一貫性確保、脚本練習、ゲームナラティブのドラフトに使用しています。コミュニティキャラクターエコシステム（chub.ai）には成人向けコンテンツが含まれますが、それに限定されません。',
          },
          {
            q: 'キャラクターを友達と共有するにはどうすればよいですか？',
            a: '三つの方法があります。(1) キャラクターカードをPNGとしてエクスポートしてファイルを送信 — 三つのフロントエンドすべてで機能します。(2) キャラクターの共有だけでなくコラボレーティブなチャットを求める場合はAgnaiの共有サーバーモードを使用してください。(3) 公開リリースを求める場合はchub.aiまたは類似のリポジトリにカードを公開してください。ほとんどのライティンググループはオプション1（ファイル共有）と連携のためのDiscordチャンネルを選択します；オプション2は同じチャットを積極的に共同執筆するグループに適した選択肢です。',
          },
          {
            q: 'これらのフロントエンドはiPadやAndroidで動作しますか？',
            a: 'RisuAIはiOSとAndroid用のパッケージアプリを持っています。SillyTavernはAndroidのTermux上で動作します（機能しますが手間がかかります — ターミナルインストール、ブラウザUI）。Agnaiはモバイルブラウザでもアクセスできますがパッケージアプリとしては提供されていません。モバイルが主な操作面であればRisuAIが適切な選択肢です。モバイルが時々の使用であれば、デスクトップブラウザのSillyTavernとモバイルでのRisuAIへのフォールバックという組み合わせが実用的なパターンです（カードは移行できます）。',
          },
          {
            q: '複数のユーザーで共有バックエンドを使用できますか？',
            a: 'マルチユーザーロールプレイ専用には、Agnaiが信頼できる共有サーバーモードを持つ唯一のフロントエンドです（内蔵ユーザーアカウント、役割分離、共有キャラクター／チャットの所有権）。モデルバックエンドの共有（同一マシン上の複数のフロントエンドにサービスを提供する一つのOllama）には三者すべてが機能します — Ollamaは複数のクライアントにサービスを提供でき、フロントエンドは競合しません。「共有バックエンド」の質問は実際には二つの質問です：共有モデル（簡単、三者すべて）対共有チャットとキャラクター（Agnaのみ）。',
          },
          {
            q: 'ロアブックサポートが最良なのはどれですか？',
            a: 'SillyTavernが最も深いロアブックシステムを持っています — 再帰スキャン（他のエントリーを起動するエントリー）、キーワード優先度、条件付きトリガー、キャラクター別スコープ、正規表現マッチング。AgnaiとRisuAIはともにキーワードスキャンによるシンプルなロアブックをサポートしており、約50エントリー以下のプロジェクトに適しています。複雑な世界観構築 — 多派閥の政治、再帰参照、条件付き開示 — には三者の中でSillyTavernが唯一の信頼できる選択肢です。',
          },
          {
            q: 'グループチャットはローカルバックエンドで安定していますか？',
            a: 'はい、適切なモデルを使えば安定しています。3人以上のキャラクターとのグループチャットには強い声の差別化を持つモデルが必要です — Command R+ 104Bが最良の選択肢で、Llama 3.3 70Bが実用的なデフォルトです。小さなモデル（13B未満）ではキャラクターが5〜10回のやり取りで同じ声に収束します。SillyTavernが最も成熟したグループチャット実装を持っています；AgnaiとRisuAIは2〜4キャラクターシーンをきれいに処理しますが、ターンテイキングダイナミクスの制御は少ないです。',
          },
        ],
      },
      countrySpecific: {
        id: 'country-specific-ja',
        title: '日本のロールプレイコミュニティ：ビジュアルノベル文化とSillyTavernエコシステム',
        content: [
          '日本のロールプレイLLMシーンは、欧米と異なる独自の文脈を持っています。ビジュアルノベル（VN）文化との強い親和性があり、SillyTavernのキャラクターカードシステムはVNのヒロインやキャラクターと相性が良い。NovelAI（クラウドサービス）が日本のユーザーに普及しているため、ローカル代替としてSillyTavernへの移行需要があります。',
          'GSCデータでは「/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay」が着実なトラフィックを得ており、日本語コミュニティの活発さが確認できます。Civitai、Pixiv、VCIなどで日本語キャラクターカードが多数配布されており、SillyTavernのエコシステムと自然に連携します。',
        ],
        items: [
          '**日本語キャラクターカードの入手先：** Civitai（英語だが日本語カード多数）、Pixiv（ファンメイドキャラクター）、VCIコミュニティ（VRChat日本ユーザー）。SillyTavernのTavern v2形式は日本語テキストを完全サポート。',
          '**NovelAIからSillyTavernへの移行：** NovelAIユーザーがローカルに移行する際、SillyTavernが最も自然な選択肢。NovelAIのシステムプロンプト形式（Instruct Mode）はSillyTavernで互換テンプレートが利用可能。Hermes 3 Llama 3.3がNovelAIの文体に最も近いローカルモデル。',
          '**ビジュアルノベル×SillyTavern：** Fateシリーズ、Steins;Gate等のVNキャラクターをSillyTavernでロールプレイする日本語コミュニティが活発。二次創作としての利用はグレーゾーンだが、日本のガイドライン（同人誌文化）の文脈では一般的に容認されている。',
          '**RisuAI日本語サポート：** RisuAI は繁体・簡体中文に加え、日本語UIにも対応（有志翻訳）。モバイル優先のロールプレイにはRisuAIのiOS/Androidアプリが有用。SillyTavernはモバイルでの操作性が低いため、スマートフォンユーザーにはRisuAIが現実的。',
          '**日本のプライバシー文脈：** 個人情報保護法の観点から、AIへの個人情報送信を懸念するユーザーが増えています。ローカルLLM＋SillyTavernの構成は「完全オフライン、サーバー送信なし」を証明できるため、プライバシー意識の高いユーザーに訴求力があります。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連情報',
        items: [
          '[2026年クリエイティブライティング向けベストローカルLLM](/ja/power-local-llm/best-local-llm-creative-writing-2026) — モデル側；このガイドで推奨された選択肢の直接比較。',
          '[クリエイティブライティング向け無検閲ローカルLLM：倫理、法律、ベストプラクティス](/ja/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 無検閲派生モデル（Hermes 3、Dolphin 3.0）が適切な選択肢となる場合と法律上の境界線。',
          '[2026年ベストローカルLLM](/ja/local-llms/best-local-llms-2026) — より広いモデル全景；これらのフロントエンドの背後にどのモデルをインストールするかを選ぶ際に有用。',
          '[Ollama vs LM Studio](/ja/local-llms/ollama-vs-lm-studio) — これらのフロントエンドと組み合わせる最も一般的な二つのバックエンド；どちらを先にインストールするか。',
          '[ペルソナプロンプティング](/ja/prompt-engineering/persona-prompting) — キャラクター音声のためのシステムプロンプト構造；三つのフロントエンドすべてで機能します。',
          '[温度とTop-P：AIの創造性を制御する](/ja/prompt-engineering/temperature-and-top-p-control-ai-creativity) — これらのフロントエンドがサポートするキャラクター別プリセットのサンプリングガイド。',
          '[フィクションライター向けローカルLLMプロンプト](/ja/power-local-llm/local-llm-prompts-for-fiction-writers) — キャラクター駆動フィクション用のすぐに使えるシステムプロンプトテンプレート；SillyTavern、Agnai、RisuAIすべてで機能します。',
          '[2026年ベストモバイルLLMモデル](/ja/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — iOSとAndroid向けに最適化されたモデル推奨；RisuAIのモバイルアプリとの相性が良い。',
          '[SillyTavernの中国語ロールプレイ設定](/ja/prompt-bites/sillytavern-chinese-roleplay-setup) — Qwen3 + SillyTavern：中国語ロールプレイ向けキャラクターカード設定。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'SillyTavern vs Agnai vs RisuAI：2026年最佳本地角色扮演前端对比',
    seoTitle: 'SillyTavern vs Agnai vs RisuAI：本地LLM角色扮演前端完整对比2026',
    intro:
      'SillyTavern、Agnai和RisuAI是2026年本地LLM领域三个可靠的角色扮演前端——每一个都可以与Ollama、llama.cpp或任何OpenAI兼容端点无缝配合，且各自在功能密度上采取了不同的定位。SillyTavern是深度自定义的选择（大多数有经验的用户最终会停留在这里）；Agnai是多用户的选择（唯一具备真正共享服务器模式的选项）；RisuAI是当SillyTavern显得过于繁复时的轻量替代。本指南在角色卡片、人格管理、知识库、群组聊天、模型支持、隐私保护和平台覆盖等方面对三者进行对比。',
    metaDescription:
      'SillyTavern vs Agnai vs RisuAI三款本地LLM角色扮演前端深度对比：SillyTavern自定义最强，Agnai独家支持多用户共享服务器，RisuAI最适合初学者。三款均兼容Ollama与llama.cpp，支持角色卡片和知识库，2026年最新实测。',
    twitterDescription:
      '三款本地角色扮演前端对比：SillyTavern（深度自定义）、Agnai（多用户）、RisuAI（轻量替代）。角色卡片、知识库、群组聊天、隐私保护。',
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
      '通过专用聊天前端（配备角色卡片、人格管理和群组场景）运行本地LLM的角色扮演写作者、角色设计师、小说协作者和创意写作团队。',
    readTime: '阅读约13分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '本地角色扮演前端',
    targetKeywords: [
      'SillyTavern vs Agnai',
      'Agnai vs RisuAI',
      '最佳本地角色扮演UI',
      'SillyTavern Ollama配置',
      '角色卡片 本地LLM',
      'RisuAI vs SillyTavern',
    ],
    leadAnswerBlock:
      '**SillyTavern是约80%用户的正确选择——最深的角色卡片支持、最大的社区生态系统、最强大的自定义界面（扩展、预设、正则表达式替换、世界信息）。Agnai是三者中唯一具有可信多用户支持的选择，因此是共享服务器、协作角色扮演和小型团队项目的正确选择。RisuAI是当SillyTavern的功能密度成为障碍时的轻量替代——相同的角色卡规格、更小的操作界面、更简单的首次运行体验。三者都遵循Tavern v2角色卡规格，三者都与Ollama或任何OpenAI兼容端点配合，三者默认情况下都完全本地运行，无遥测数据。按工作流类型选择：需要深度自定义的独立写作者→SillyTavern；共享角色的写作团队→Agnai；想今天就开始聊天的首次用户→RisuAI。**',
    quickAnswerTop: {
      zh: {
        question: '2026年最佳本地LLM角色扮演前端是哪个：SillyTavern、Agnai还是RisuAI？',
        answer:
          'SillyTavern是大多数用户的默认选择——功能最深、社区最大、扩展最多。如果需要与协作者共享角色和聊天记录，Agnai是唯一可信的多用户选择。RisuAI是认为SillyTavern过于复杂的用户的轻量替代方案。三者均为开源，均支持Tavern v2角色卡片，均可连接Ollama和OpenAI兼容端点。选择取决于工作流程类型，而非原始质量——三者在相同模型下产生相同的对话质量。',
        bullets: [
          'SillyTavern——功能最深、社区最大，是有自定义需求的独立用户的默认选择。',
          'Agnai——唯一具有可信多用户支持的前端；适合共享服务器和协作角色扮演。',
          'RisuAI——三者中最轻量；当SillyTavern的功能密度成为障碍时选择。',
          '三者均支持Tavern v2角色卡片；在一个中创建的卡片可在其他中使用。',
          '三者均可连接Ollama、llama.cpp、LM Studio、vLLM和任何OpenAI兼容端点。',
          '三者均为开源，完全本地运行；默认无遥测数据。',
          '模型推荐：Llama 3.3 70B（最佳全能）、Hermes 3（无审查）、Command R+（对话）、Qwen3 32B（24GB设备默认）。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速概览', anchor: '#quick-facts' },
      { label: '测试方法', anchor: '#how-we-tested' },
      { label: '三前端对比', anchor: '#comparison' },
      { label: 'SillyTavern深度分析', anchor: '#sillytavern' },
      { label: 'Agnai深度分析', anchor: '#agnai' },
      { label: 'RisuAI深度分析', anchor: '#risuai' },
      { label: '角色卡片格式（Tavern v2）', anchor: '#character-cards' },
      { label: '各前端模型推荐', anchor: '#models' },
      { label: '隐私：哪个前端会向外发送数据', anchor: '#privacy' },
      { label: '决策：选择你的前端', anchor: '#decision' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '参考资料', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**2026年SillyTavern是约80%用户的默认选择。** 角色卡片功能最深、扩展生态系统最大、自定义界面最丰富。大多数有经验的角色扮演用户在尝试替代品后最终选择的前端。',
          '**Agnai是唯一可信的多用户选择。** 共享服务器模式允许多位作者连接到同一实例、共享角色并在长期聊天中协作。适合小型写作小组、朋友圈和共享角色社区。',
          '**RisuAI是轻量替代方案。** 相同的Tavern v2角色卡片支持、更小的功能界面、更简单的首次运行体验。当SillyTavern显得过于繁复或需要快速进入"输入消息并获得回复"状态时的选择。',
          '**三者均支持Tavern v2角色卡片规格。** 在SillyTavern中构建的卡片在Agnai和RisuAI中无需转换即可使用。前端之间的迁移非常简单。',
          '**三者均可与Ollama、llama.cpp、LM Studio和任何OpenAI兼容端点配合。** 三者均不会将您锁定在特定的模型后端；切换后端只需修改配置。',
          '**隐私：三者默认情况下均完全本地运行，无遥测数据。** 每个前端中的可选云端功能（翻译、图像生成）仅在明确启用后才会向外通信。如需正式审计级别的证据，请通过网络监控进行验证。',
          '**模型选择比前端选择更重要。** 出色的前端配合小型通用模型产生平淡的对话；基础前端配合Llama 3.3 70B产生生动的场景。模型选择请参见[2026年创意写作最佳本地LLM](/zh/power-local-llm/best-local-llm-creative-writing-2026)。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速概览',
        items: [
          '**SillyTavern** — Node.js + 浏览器UI，本地托管。自定义最深、社区最大。',
          '**Agnai** — Node.js + 浏览器UI；可本地运行或作为共享服务器。三者中唯一的多用户选项。',
          '**RisuAI** — Tauri/Electron桌面应用；功能集更轻量，首次运行最简单。',
          '**角色卡片规格：** 三者均支持Tavern v2（标准格式）；相互兼容。',
          '**模型后端：** Ollama、llama.cpp、LM Studio、vLLM、任何OpenAI兼容端点，以及云端API（可选）。',
          '**默认隐私设置：** 三者默认均为纯本地运行，无遥测数据，无分析。可选的云端功能需要明确启用。',
          '**平台：** SillyTavern和Agnai支持macOS、Windows、Linux和Termux/Android。RisuAI支持macOS、Windows、Linux、iOS和Android。',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: '测试方法',
        content:
          '本指南的评测基于对三个前端的实际使用，而非功能列表比较。',
        items: [
          '**版本：** SillyTavern 1.x（稳定分支）、Agnai最新稳定版、RisuAI最新桌面版（2026年5月）。',
          '**后端：** Ollama 0.5+运行Llama 3.3 70B Q4_K_M作为所有三个前端的主要测试模型。',
          '**测试场景：** 将相同的Tavern v2角色卡片载入三个前端；在每个前端中运行相同的5个对话提示；包含3个角色的群组聊天场景；包含25个条目的知识库（关键词触发器加两个递归条目）；从第三方预设文件导入采样预设。',
          '**安装时间：** 在同一机器上每个前端3次全新安装的中位数。',
          '**功能评估：** 描述为"更简单"或"有限"的功能反映的是测试场景中可观察到的行为，而非文档声明。在知识库深度或群组聊天稳定性方面，评测结论基于观察到的行为。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '三前端对比',
        content:
          '**相同的角色卡片、相同的模型后端——功能密度和目标用户不同。** 下表列出了与决策相关的差异。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SillyTavern是独立用户的深度自定义选择；Agnai是共享服务器的多用户选择；RisuAI是首次用户的轻量替代选择——三者均支持相同的Tavern v2角色卡片并与相同的模型后端配合。',
          },
          {
            type: 'plain-terms',
            text: '除非有特定原因，否则选择SillyTavern——这是大多数有经验用户最终的落脚点。如果想与其他作者共享服务器，选择Agnai。如果SillyTavern显得过于繁复且想在5分钟内开始聊天，选择RisuAI。由于三者使用相同的角色卡片，之后切换也很容易。',
          },
        ],
        columns: ['功能', 'SillyTavern', 'Agnai', 'RisuAI'],
        rows: [
          { '功能': '主要界面', 'SillyTavern': '本地Node.js + 浏览器', 'Agnai': '本地Node.js + 浏览器，或共享服务器', 'RisuAI': 'Tauri/Electron桌面应用 + 移动端' },
          { '功能': '配置时间（首次运行）', 'SillyTavern': '约15分钟', 'Agnai': '约10分钟（单用户）；约30分钟（服务器）', 'RisuAI': '约5分钟' },
          { '功能': '角色卡片', 'SillyTavern': 'Tavern v2（完整规格）+ 扩展', 'Agnai': 'Tavern v2', 'RisuAI': 'Tavern v2 + 自有格式' },
          { '功能': '人格/用户档案', 'SillyTavern': '原生支持，多人格，按角色设置', 'Agnai': '原生支持，多用户', 'RisuAI': '原生支持，更简单' },
          { '功能': '知识库/世界信息', 'SillyTavern': '原生支持，非常灵活（递归扫描）', 'Agnai': '原生支持，扫描较简单', 'RisuAI': '原生支持，扫描较简单' },
          { '功能': '群组聊天（多角色）', 'SillyTavern': '原生支持，功能成熟', 'Agnai': '原生支持', 'RisuAI': '原生支持，较简单' },
          { '功能': '多用户/共享服务器', 'SillyTavern': '不支持（单用户）', 'Agnai': '支持（核心差异化特性）', 'RisuAI': '不支持（单用户）' },
          { '功能': '扩展/插件', 'SillyTavern': '最大生态系统（正则表达式、预设、自定义UI）', 'Agnai': '较小', 'RisuAI': '插件系统，库较小' },
          { '功能': '后端支持', 'SillyTavern': 'Ollama、llama.cpp、LM Studio、vLLM、OAI兼容、KoboldAI、Aphrodite', 'Agnai': 'Ollama、llama.cpp、LM Studio、OAI兼容', 'RisuAI': 'Ollama、llama.cpp、LM Studio、OAI兼容' },
          { '功能': '默认遥测', 'SillyTavern': '无', 'Agnai': '无', 'RisuAI': '无' },
          { '功能': '最适合', 'SillyTavern': '需要深度自定义的独立用户', 'Agnai': '共享服务器、多用户协作', 'RisuAI': '首次用户、轻量配置' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '选择取决于工作流程类型，而非原始质量。三者在相同模型和相同角色卡片下产生相同的对话效果。根据您的写作方式选择——独立进行深度设置、与协作者在共享服务器上协作、或快速在桌面或移动应用上使用——这样可以避免90%的犹豫不决。',
          },
        ],
      },
      sillytavern: {
        id: 'sillytavern',
        title: 'SillyTavern：深度自定义的默认选择',
        content:
          '**SillyTavern是大多数有经验的角色扮演用户在尝试替代品后最终选择的前端。** 在本地角色扮演领域拥有最大的社区、最深的角色卡片功能和最大的扩展生态系统。',
        items: [
          '**安装：** `git clone`仓库，`npm install`，`npm start`。本地服务器运行在`http://localhost:8000`。跨平台——macOS、Windows、Linux，以及Android上的Termux。配置存储在`data/default-user/`目录中（设置、角色、世界信息、预设）。',
          '**角色卡片：** 完整的Tavern v2规格支持。拖放导入（含嵌入JSON的PNG），在UI中浏览和编辑字段，导出回PNG。在SillyTavern中创建的卡片可在Agnai和RisuAI中顺畅打开；反之亦然。',
          '**知识库/世界信息：** 三者中最灵活的。支持递归扫描（触发其他条目的条目）、关键词优先级、条件触发器和按角色范围设置。适合世界观比角色更复杂的长期活动的理想工具。',
          '**群组聊天：** 成熟的多角色实现。定义哪些角色在场景中、设置回合顺序或模型驱动的发言顺序，观察模型在交流过程中保持不同声音。当群组场景是工作核心时的选择。',
          '**扩展：** 正则表达式替换（在显示前清理模型输出）、预设（按角色设置采样参数）、Stable Diffusion集成（图像生成）、翻译、网络搜索、自定义UI。该领域最大的附加组件生态系统。',
          '**优势：** 独立角色扮演、长期个人项目、深度自定义需求、复杂世界观构建。',
          '**劣势：** 无多用户模式（设计上为单用户）；功能界面可能使首次用户感到不知所措；配置分散（多个JSON文件、预设、世界信息、正则表达式）需要时间学习。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '从SillyTavern的默认预设和来自chub.ai或SillyTavern社区的一两张角色卡片开始。在最初10小时使用前抵制安装扩展的冲动——大多数用户只需默认设置加上正则表达式替换和一个翻译扩展就足够了。',
          },
        ],
      },
      agnai: {
        id: 'agnai',
        title: 'Agnai：多用户选择',
        content:
          '**Agnai是2026年唯一可信的多用户角色扮演前端。** 与SillyTavern相同的角色卡片支持，更小的自定义界面，但具有真正的共享服务器模式，允许多位作者连接到同一后端。',
        items: [
          '**安装（单用户）：** Node.js + npm install + start。默认运行在`http://localhost:3001`。约10分钟的配置与SillyTavern的便捷性相当。',
          '**安装（共享服务器）：** 添加数据库（MongoDB）和认证层；Agnai原生管理用户账户、角色分离和共享角色/聊天所有权。约30分钟配置；在项目README中有文档说明。',
          '**角色卡片：** Tavern v2；完整的导入/导出。卡片规格与SillyTavern相同，因此卡片可在前端之间转移。',
          '**人格系统：** 原生多用户支持。每个用户都有人格；代理选择每次聊天中哪个人格处于活动状态。适合多位作者希望拥有各自档案的共享服务器。',
          '**知识库/世界信息：** 具备，但不如SillyTavern强大。适合大多数项目；缺少深度递归扫描功能。',
          '**群组聊天：** 原生支持，比SillyTavern更简单。适合2到4个角色场景的常见情况。',
          '**优势：** 共享服务器（写作小组、朋友圈、共享角色的小型社区）、协作角色扮演、多用户需要共同写作的项目。',
          '**劣势：** 扩展生态系统比SillyTavern小；知识库递归功能有限；不适合深度独立自定义。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '对于共享服务器，建议在带TLS的反向代理（Caddy最简单）后面运行Agnai。默认配置是HTTP，监听单个端口——适合localhost但不适合向其他作者公开的服务器。README涵盖了生产环境设置。',
          },
        ],
      },
      risuai: {
        id: 'risuai',
        title: 'RisuAI：轻量替代方案',
        content:
          '**当SillyTavern显得过于繁复时，RisuAI是正确的选择。** 相同的Tavern v2角色卡片、更小的功能界面、打包为桌面应用而非本地Web服务器。无摩擦的首次运行体验是其差异化优势。',
        items: [
          '**安装：** macOS、Windows、Linux的桌面安装程序，以及iOS和Android应用。无需Node.js，无需终端——双击即可打开。三者中首次运行最快速。',
          '**角色卡片：** Tavern v2加上RisuAI自己的扩展格式（更多模块字段、剧情触发器）。来自SillyTavern和Agnai的卡片可顺畅载入；在RisuAI中创建的卡片大多可移植回其他两者。',
          '**人格系统：** 具备，比SillyTavern更简单。每次聊天一个活动人格，可在UI中切换。',
          '**知识库/世界信息：** 具备，扫描比SillyTavern的递归系统更简单。对于约50条条目以下的大多数项目已足够。',
          '**群组聊天：** 原生支持；适用于典型的2到4角色场景。',
          '**插件：** 比SillyTavern生态系统更小。核心功能覆盖了大多数常见需求（角色编辑、采样预设、知识库管理）无需第三方附加组件。',
          '**优势：** 首次用户、移动端写作者（iOS/Android应用是真实的应用，非事后添加）、希望比SillyTavern更简洁UI的用户、单角色独立角色扮演。适合与RisuAI配合的移动端模型推荐请参见[2026年最佳移动端LLM模型](/zh/power-local-llm/mobile-llm-models-phi4-gemma-smollm)。',
          '**劣势：** 社区比SillyTavern小；自定义深度有限（无递归知识库扫描，扩展界面更小）；当功能上限很重要时不是正确的选择。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RisuAI的移动应用是三者中唯一真正为iOS和Android打包的应用。SillyTavern通过Termux在Android上运行（可用但操作繁琐）；Agnai在移动浏览器中运行，但未打包为应用。如果移动端是真实的工作流程，几乎无论其他功能如何，RisuAI都是正确的选择。',
          },
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: '角色卡片格式（Tavern v2）：通用语言',
        content:
          '**三个前端均支持Tavern v2角色卡片规格，使前端之间的迁移变得简单。** 卡片是元数据中嵌入JSON的PNG文件；同一文件可在三者任一中打开。',
        items: [
          '**Tavern v2卡片包含：** 名称、描述、性格、场景、第一条消息、示例对话、标签、创作者备注和系统提示。可选字段涵盖知识库条目和角色特定的采样设置。',
          '**V3规格（2026年5月）：** 在V2基础上增加了原生知识库嵌入、多语言支持和更丰富的创作者元数据。SillyTavern完全支持V3导入；Agnai可加载V3卡片但忽略某些V3特定字段；RisuAI通过其扩展格式部分处理V3。V2仍是通用语言——V3是附加性的且向后兼容，V2卡片在任何地方都可使用。',
          '**重要性：** 整个社区构建的角色生态系统（chub.ai、JanitorAI导出、以角色为主题的Discord服务器）都使用Tavern v2。他人创建的卡片无需转换即可在您的前端中加载。',
          '**规格的限制：** Tavern v2涵盖静态角色定义。长期场景记忆、动态关系状态和聊天特定的覆盖是各前端自己的实现。在前端之间迁移活跃聊天比仅迁移角色卡片更困难。',
          '**清理导入的卡片：** 来自chub.ai的卡片可能包含修改模型行为的采样预设、系统提示覆盖或激进的越狱提示。在使用下载的卡片前请阅读系统提示和性格字段——尤其是在共享服务器场景（Agnai）中，一张卡片会影响所有用户。',
          '**创建自己的卡片：** 三个前端都有卡片编辑器。SillyTavern的功能最齐全；RisuAI的UI最简洁。在从头创建之前先编辑几张现有卡片——看过示例后字段语义会更容易理解。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '导入的社区卡片可能携带隐藏行为：长越狱系统提示、采样覆盖、人格矛盾。首次使用前请在编辑器中打开每张下载的卡片并阅读系统提示字段。在共享服务器场景（Agnai）中，一张有问题的卡片会影响所有用户。',
          },
        ],
      },
      models: {
        id: 'models',
        title: '各前端模型推荐',
        content:
          '**前端选择不限制模型选择。** 三者均支持相同的后端——Ollama最为常见——以下模型推荐同样适用于SillyTavern、Agnai和RisuAI。',
        items: [
          '**Llama 3.3 70B** — 角色工作最佳的本地全能选择。在长期会话中声音一致性最强，能很好地遵循角色方向，当系统提示将工作定位为小说时可处理黑暗主题。Q4_K_M约需42GB VRAM。',
          '**Qwen3 32B** — 24GB显卡设备的正确选择。接近Llama 70B的散文质量但无需昂贵硬件。大多数笔记本电脑和消费级台式机的默认选择。',
          '**Command R+ 104B** — 对话专家。群组场景中角色间对话声音差异化最自然。Q4_K_M约需62GB VRAM。',
          '**Hermes 3（Llama 3.3基础版）** — 无审查派生版本。与Llama 3.3 70B相同架构；RLHF安全层已移除；模型遵循提示而非拒绝成熟场景。在同一Ollama上安装两个版本（指令版+Hermes）是常见模式。',
          '**Mistral Large** — 长上下文选择。开箱即用128K上下文；当角色扮演会话足够长以至于将较短上下文模型推出窗口时非常有用。',
          '**严肃角色扮演工作应避免：** 任何没有创意写作微调的13B以下模型。小型通用模型在5到10次交流内失去声音一致性；角色会"漂移"到模型的默认声音。',
          '关于这些选择的直接对比数据，请参见[2026年创意写作最佳本地LLM](/zh/power-local-llm/best-local-llm-creative-writing-2026)。',
          '适用于所有三个前端的即用型系统提示模板，请参见[小说写作者的本地LLM提示词](/zh/power-local-llm/local-llm-prompts-for-fiction-writers)。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '对于角色扮演，采样设置与模型选择同样重要。温度0.85-1.05、top-p 0.9-0.95、重复惩罚1.1是起点。SillyTavern允许按角色保存预设；充分利用这一功能——不同角色通常需要不同的温度（紧张的审讯场景需要0.7；超现实的梦境序列需要1.2）。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私：哪个前端会向外发送数据',
        content:
          '**三个前端默认情况下均为纯本地运行，无遥测数据。** 每个前端中的可选云端功能受到明确选择加入的保护；如需正式审计级别的证据，请通过网络监控进行验证。',
        items: [
          '**SillyTavern：** 无遥测数据。可能进行外部通信的可选功能：云端LLM后端（OpenAI、Claude等——仅在配置时）、翻译扩展（默认使用云端API；可配置为本地）、Stable Diffusion图像生成（使用您的本地SD或配置的远程端点）、网络搜索扩展（使用云端搜索）。每项均为选择加入并有标签说明。',
          '**Agnai：** 核心应用无遥测数据。服务器模式仅在启用时添加账户遥测。与SillyTavern相同的可选云端功能（翻译、云端LLM后端、图像生成）——均为明确启用。',
          '**RisuAI：** 无遥测数据。相同模式——默认本地运行，可选云端功能（翻译、图像生成、云端LLM后端）受明确配置保护。',
          '**验证隐私声明：** 在没有网络访问的情况下运行前端（安装后关闭Wi-Fi）——与本地模型聊天——确认一切正常工作。或运行网络监控器（macOS上的Little Snitch，Linux上的Wireshark）并在聊天会话期间观察出站连接。三个前端默认情况下都能通过此测试。',
          '**隐私可能被破坏的地方：** 云端LLM后端（您配置了它们；提示和响应会离开您的机器）、基于云的翻译扩展（您翻译的消息被发送给第三方）、Stable Diffusion远程端点、网络搜索扩展。每项都是用户的刻意选择。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '"隐私优先"的本地前端只有与其指向的后端一样私密。将SillyTavern指向GPT-5会将您的角色扮演提示发送给OpenAI；指向Ollama则将一切保持在本地。前端本身不是限制；模型后端才是。',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: '决策：应该选择哪个前端',
        content:
          '**三个问题可以引导大多数用户找到正确的选择。**',
        columns: ['您的情况', '选择'],
        rows: [
          { '您的情况': '我是独立写作者，需要深度自定义，愿意花时间学习工具', '选择': 'SillyTavern' },
          { '您的情况': '我想在共享服务器上与其他作者共享角色和聊天记录', '选择': 'Agnai' },
          { '您的情况': '我想今天就开始聊天；SillyTavern感觉过于繁复', '选择': 'RisuAI' },
          { '您的情况': '我主要在移动端（iOS或Android）写作', '选择': 'RisuAI（唯一拥有打包移动应用的选择）' },
          { '您的情况': '我管理一个3人以上的写作小组或社区', '选择': 'Agnai（共享服务器）——唯一可信的多用户选择' },
          { '您的情况': '我有复杂的世界观构建（50+知识库条目、递归触发器）', '选择': 'SillyTavern（知识库功能最深）' },
          { '您的情况': '我不确定', '选择': '先试试RisuAI（5分钟安装）。超出其能力后再转向SillyTavern。卡片可以转移。' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'SillyTavern是有自定义需求的独立用户的默认选择；Agnai是共享服务器唯一的多用户选择；RisuAI是首次用户和移动端写作者的轻量替代——按工作流程类型选择，并保留切换选项，因为卡片可在三者间转移。',
          },
          {
            type: 'plain-terms',
            text: '如果您从未使用过角色扮演前端，先试试RisuAI——5分钟内就能开始聊天。当您遇到自定义限制时再转向SillyTavern。只有在明确需要共享服务器多用户模式时才使用Agnai。在三者任一中创建的角色卡片都可在其他前端中加载，所以选择是可逆的。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '在安装扩展或构建精心设计的知识库之前，先在选择的前端中度过最初10小时。默认设置加上几张社区卡片足以评估适合度。过早的配置会产生摩擦，而这些摩擦本可以在迁移到下一个前端时被吸收。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '选择和使用角色扮演前端的常见错误',
        items: [
          '**错误1：当模型是瓶颈时追求功能。** 出色的前端配合7B通用模型产生平淡的对话，无论知识库系统有多好。选择一个合适的前端，将剩余预算花在32B以上的创意写作友好型模型上。模型方面请参见[2026年创意写作最佳本地LLM](/zh/power-local-llm/best-local-llm-creative-writing-2026)。',
          '**错误2：在创意模型上使用默认采样设置。** SillyTavern、Agnai和RisuAI都以针对问答调优的默认设置发布（温度约0.7，top-p约0.9）。创意角色扮演需要0.85-1.05，top-p 0.9-0.95，重复惩罚1.1。按角色保存预设。',
          '**错误3：不阅读就导入社区卡片。** 来自chub.ai的卡片可能包含2,000个token的越狱语言系统提示、与您的默认设置冲突的采样覆盖，或与描述矛盾的性格字段。使用前在编辑器中打开卡片；清理系统提示。',
          '**错误4：跳过人格/用户档案。** 空白的"用户"人格意味着模型没有谁在说话的锚点。即使是包含姓名、年龄和基本情况的一段话人格，也会比默认空用户产生明显更有沉浸感的场景。',
          '**错误5：在聊天窗口而非卡片中编辑。** 通过"重新生成"或"让模型修正"来调整模型输出会训练依赖模型代替写作的习惯。将编辑保存回角色卡片或系统提示；下次会话从更高的基线开始。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考资料',
        items: [
          '[SillyTavern文档](https://docs.sillytavern.app/) — 安装、角色卡片、知识库、扩展、采样预设。',
          '[SillyTavern GitHub仓库](https://github.com/SillyTavern/SillyTavern) — 源代码、发行说明、社区扩展。',
          '[Agnai GitHub仓库](https://github.com/agnaistic/agnai) — 安装、多用户服务器设置、角色卡片规格。',
          '[RisuAI GitHub仓库](https://github.com/kwaroran/RisuAI) — 安装、插件系统、移动应用构建。',
          '[Tavern v2角色卡片规格](https://github.com/malfoyslastname/character-card-spec-v2) — 跨前端角色卡片格式。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '2026年最佳本地角色扮演前端是哪个？',
            a: '约80%的用户应选择SillyTavern——功能最深、社区最大、扩展最多。如果需要多用户共享服务器支持，Agnai是正确的选择（三者中唯一可信的选项）。RisuAI是首次用户、移动端写作者或认为SillyTavern过于繁复者的轻量替代方案。三者均支持Tavern v2角色卡片并连接相同的模型后端；由于卡片可转移，之后切换很简单。',
          },
          {
            q: 'SillyTavern、Agnai和RisuAI可以使用相同的角色卡片吗？',
            a: '可以。三者均支持Tavern v2角色卡片规格，即嵌入JSON的PNG文件。在SillyTavern中创建的卡片无需转换即可在Agnai和RisuAI中打开，反之亦然。RisuAI用可选字段扩展了格式，但RisuAI的Tavern v2卡片在SillyTavern和Agnai中仍可加载（扩展字段会被忽略）。前端间迁移非常简单。',
          },
          {
            q: '这些前端会将我的聊天记录发送到云服务器吗？',
            a: '不，默认情况下不会。三者均为无遥测的纯本地运行。聊天数据、角色卡片和知识库都存储在您的机器上。可选功能（云端LLM后端、翻译扩展、图像生成、网络搜索）受明确配置保护；如果将前端指向Ollama或其他本地后端，则没有任何数据离开您的网络。如需正式审计级别的证据，请使用网络监控器验证。',
          },
          {
            q: '角色扮演应该使用哪个模型？',
            a: '硬件允许时（Q4_K_M约42GB VRAM），Llama 3.3 70B是最佳全能选择。24GB显卡设备上，Qwen3 32B是更轻量的默认选择。Command R+ 104B在群组场景中对话声音最自然，但需约62GB。对于指令调优模型拒绝的成熟场景，在同一Ollama上安装Hermes 3（Llama 3.3基础版）并按场景切换。没有创意写作微调的13B以下模型在5到10次交流内失去声音一致性，应避免用于严肃的角色扮演工作。',
          },
          {
            q: 'SillyTavern只适合成人角色扮演吗？',
            a: '不是。SillyTavern是一个通用聊天前端，配备角色卡片、人格管理和知识库——适用于任何对话丰富或以角色为核心的创意工作。许多写作者将其用于非成人小说写作、多角色场景、长期项目中的声音一致性研究、编剧练习和游戏叙事草稿。社区角色生态系统（chub.ai）包含成人内容，但不仅限于此。',
          },
          {
            q: '如何与朋友分享角色？',
            a: '三种方式：(1) 将角色卡片导出为PNG并发送文件——在三个前端中均可使用。(2) 如果需要协作聊天而不仅仅是共享角色，使用Agnai的共享服务器模式。(3) 如果想公开发布，将卡片发布到chub.ai或类似平台。大多数写作小组选择方式1（文件共享）加Discord频道协调；方式2适合积极共同创作同一聊天的群组。',
          },
          {
            q: '这些前端在iPad或Android上可以使用吗？',
            a: 'RisuAI有打包的iOS和Android应用。SillyTavern通过Termux在Android上运行（可用但操作繁琐——终端安装、浏览器UI）。Agnai在移动浏览器中运行，但未打包为应用。如果移动端是您的主要平台，RisuAI是正确的选择。如果移动端是偶尔使用，在桌面浏览器上使用SillyTavern加上在移动端回退到RisuAI是可行模式（卡片可转移）。',
          },
          {
            q: '可以为多个用户使用共享后端吗？',
            a: '对于多用户角色扮演，Agnai是唯一具有可信共享服务器模式的前端（内置用户账户、角色分离、共享角色/聊天所有权）。对于仅共享模型后端（一个Ollama为同一机器上的多个前端提供服务），三者均可工作——Ollama为多个客户端提供服务，前端不会相互冲突。"共享后端"问题实际上是两个问题：共享模型（简单，三者均可）与共享聊天和角色（仅Agnai）。',
          },
          {
            q: '哪个知识库支持最好？',
            a: 'SillyTavern拥有最深的知识库系统——递归扫描（触发其他条目的条目）、关键词优先级、条件触发器、按角色范围和正则表达式匹配。Agnai和RisuAI均支持更简单的关键词扫描知识库，适合约50条条目以下的项目。对于复杂的世界观构建——多势力政治、递归引用、条件揭示——SillyTavern是三者中唯一可信的选择。',
          },
          {
            q: '在本地后端上群组聊天稳定吗？',
            a: '是的，使用正确的模型时稳定。与3个以上角色的群组聊天需要具有强声音差异化的模型——Command R+ 104B是最佳选择，Llama 3.3 70B是实用的默认选择。在较小的模型（13B以下）上，角色在5到10次交流内向同一声音漂移。SillyTavern拥有最成熟的群组聊天实现；Agnai和RisuAI能干净地处理2到4角色场景，但对轮次动态的控制较少。',
          },
        ],
      },
      countrySpecific: {
        id: 'country-specific-zh',
        title: '台灣與香港角色扮演社群：繁體中文支援與RisuAI本地化',
        content: [
          'GSC數據顯示「/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay」已有5.17%的CTR（3點擊、58印象），說明繁體中文用戶對角色扮演前端比較有強烈需求。台灣和香港的角色扮演社群以日本VN文化影響為主，對於SillyTavern的日系角色卡相容性有天然需求。',
          'Qwen3是台港用戶進行中文角色扮演的首選模型——繁體字輸出自然流暢，對話風格適合小說寫作。RisuAI提供最完整的繁體中文UI本地化，是行動裝置用戶的首選前端。',
        ],
        items: [
          '**RisuAI繁體中文支援：** RisuAI的UI已有繁體中文本地化版本（由社群貢獻），是三個前端中中文化最完整的選項。iOS和Android應用均可在台灣和香港的App Store下載，無需VPN。',
          '**Qwen3與SillyTavern的中文角色扮演設定：** 系統提示詞中加入「請使用繁體中文回應，保持角色一致性」可顯著改善輸出品質。Qwen3-32B在24GB VRAM環境下提供最佳繁體中文角色扮演體驗。參考文章：[SillyTavern中文角色扮演設置](/zh/prompt-bites/sillytavern-chinese-roleplay-setup)。',
          '**台灣角色卡資源：** Civitai有大量日文和英文角色卡（部分附中文說明），巴哈姆特的創作同好區、Dcard的動漫版有台灣本地製作的角色卡分享。SillyTavern的Tavern v2格式支援繁體中文文本，不需額外設定。',
          '**香港用戶的粵語考量：** 目前沒有本地LLM能可靠地用粵語進行角色扮演。建議在提示詞中指定「書面繁體中文」。SillyTavern的角色設定（Character Description）欄位可加入「永遠以書面繁體中文香港用語回應」來部分改善輸出。',
          '**隱私與二創文化：** 台灣和香港均無針對AI角色扮演的特定法規。本地LLM確保對話完全不上傳至任何伺服器——對於涉及原創角色或未公開IP的創作來說，這是重要的隱私保障。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[2026年创意写作最佳本地LLM](/zh/power-local-llm/best-local-llm-creative-writing-2026) — 模型侧；本指南推荐选择的直接对比。',
          '[创意写作无审查本地LLM：伦理、合法性与最佳实践](/zh/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 无审查派生版本（Hermes 3、Dolphin 3.0）何时是正确选择以及法律边界在哪里。',
          '[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026) — 更广泛的模型全景；在这些前端背后选择安装哪些模型时有用。',
          '[Ollama vs LM Studio](/zh/local-llms/ollama-vs-lm-studio) — 与这些前端配合最常见的两个后端；先安装哪个。',
          '[人格提示词](/zh/prompt-engineering/persona-prompting) — 角色声音的系统提示结构；在三个前端中均可使用。',
          '[温度与Top-P：控制AI创造力](/zh/prompt-engineering/temperature-and-top-p-control-ai-creativity) — 这些前端支持的按角色预设的采样指南。',
          '[小说写作者的本地LLM提示词](/zh/power-local-llm/local-llm-prompts-for-fiction-writers) — 即用型角色驱动小说系统提示模板；在SillyTavern、Agnai和RisuAI中均可使用。',
          '[2026年最佳移动端LLM模型](/zh/power-local-llm/mobile-llm-models-phi4-gemma-smollm) — 针对iOS和Android优化的模型推荐；与RisuAI移动应用搭配良好。',
          '[SillyTavern中文角色扮演设置](/zh/prompt-bites/sillytavern-chinese-roleplay-setup) — Qwen3 + SillyTavern：中文角色扮演的角色卡配置指南。',
        ],
      },
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Creative & Roleplay',
    title: 'SillyTavern مقابل Agnai مقابل RisuAI: أفضل واجهة roleplay محلية (2026)',
    seoTitle: 'SillyTavern vs Agnai vs RisuAI: roleplay محلي 2026',
    intro:
      'SillyTavern وAgnai وRisuAI هي أقوى ثلاث واجهات للـ roleplay مع نماذج LLM المحلية في 2026 — كل منها يتصل بسهولة مع Ollama أو llama.cpp أو أي نقطة نهاية متوافقة مع OpenAI، وكل منها يتخذ موقفًا مختلفًا في كثافة الميزات. SillyTavern هو خيار التخصيص العميق (الذي ينتهي إليه معظم المستخدمين المتمرسين)؛ Agnai هو الخيار متعدد المستخدمين (الوحيد بوضع خادم مشترك حقيقي)؛ RisuAI هو البديل الأخف حين تبدو كثافة ميزات SillyTavern مبالغًا فيها.',
    metaDescription:
      'SillyTavern يتفوق في التخصيص العميق، Agnai الوحيد بوضع خادم مشترك، RisuAI الأخف وزنًا. مقارنة الميزات وتوافق LLM والخصوصية.',
    twitterDescription:
      'مقارنة 3 واجهات roleplay محلية: SillyTavern (تخصيص عميق)، Agnai (متعدد المستخدمين)، RisuAI (بديل أخف). بطاقات الشخصيات وكتب العوالم ودردشة المجموعة والخصوصية.',
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
      'كتّاب الـ roleplay ومصممو الشخصيات ومتعاونو الخيال والفرق الكتابية الإبداعية الذين يشغّلون نماذج LLM محلية عبر واجهات دردشة مخصصة ببطاقات الشخصيات وإدارة الشخصيات والمشاهد الجماعية.',
    readTime: '13 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'واجهة roleplay محلية',
    targetKeywords: [
      'sillytavern مقابل agnai',
      'agnai مقابل risuai',
      'أفضل واجهة roleplay محلية',
      'sillytavern إعداد ollama',
      'بطاقة شخصية llm محلي',
      'risuai مقابل sillytavern',
    ],
    leadAnswerBlock:
      '**SillyTavern هو الخيار الصحيح لـ ~80% من المستخدمين — أعمق توافق ببطاقات الشخصيات وأكبر نظام بيئي مجتمعي وأقوى سطح تخصيص (إضافات وإعدادات مسبقة واستبدالات regex ومعلومات العالم). Agnai هو الوحيد من الثلاثة الذي يدعم المستخدمين المتعددين حقًا، لذا هو الخيار الصحيح للخوادم المشتركة والـ roleplay التعاوني والمشاريع الجماعية الصغيرة. RisuAI هو الخيار الأخف حين تكون كثافة ميزات SillyTavern هي العائق — نفس مواصفة بطاقات الشخصيات وسطح أصغر وبدء أسهل. الثلاثة يتحدثون مواصفة بطاقات الشخصية Tavern v2، والثلاثة يتصلون بـ Ollama أو أي نقطة نهاية متوافقة مع OpenAI، والثلاثة يعملون محليًا بالكامل بدون تتبع.**',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل واجهة roleplay مع نموذج LLM محلي في 2026: SillyTavern أم Agnai أم RisuAI؟',
        answer:
          'SillyTavern هو الخيار الافتراضي لمعظم المستخدمين — ميزات أعمق ومجتمع أكبر وإضافات أكثر. Agnai هو الخيار الوحيد الموثوق للمستخدمين المتعددين إذا كنت تشارك الشخصيات والمحادثات مع متعاونين. RisuAI هو البديل الأخف للمستخدمين الذين يجدون SillyTavern مُعقَّدًا. الثلاثة مفتوحو المصدر ويحمّلون بطاقات الشخصية Tavern v2 ويتصلون بـ Ollama ونقاط نهاية متوافقة مع OpenAI.',
        bullets: [
          'SillyTavern — ميزات أعمق ومجتمع أكبر، الخيار الافتراضي للمستخدمين المنفردين الذين يحتاجون تخصيصًا.',
          'Agnai — الواجهة الوحيدة بدعم المستخدمين المتعددين الحقيقي؛ اختره للخوادم المشتركة والـ roleplay التعاوني.',
          'RisuAI — الأخف من الثلاثة؛ اختره حين تكون كثافة ميزات SillyTavern هي العائق.',
          'الثلاثة يتحدثون بطاقات الشخصية Tavern v2؛ البطاقات من أحدها تعمل في الآخرين.',
          'الثلاثة يتصلون بـ Ollama وllama.cpp وLM Studio وvLLM وأي نقطة نهاية متوافقة مع OpenAI.',
          'الثلاثة مفتوحو المصدر ويعملون محليًا بالكامل؛ لا تتبع افتراضيًا في أي منهم.',
          'توصيات النماذج: Llama 3.3 70B (أفضل شاملًا)، Hermes 3 (بدون قيود)، Command R+ (حوار)، Qwen3 32B (افتراضي لأجهزة 24 جيجابايت).',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'كيف اختبرنا', anchor: '#how-we-tested' },
      { label: 'مقارنة الثلاث واجهات', anchor: '#comparison' },
      { label: 'SillyTavern: تحليل معمّق', anchor: '#sillytavern' },
      { label: 'Agnai: تحليل معمّق', anchor: '#agnai' },
      { label: 'RisuAI: تحليل معمّق', anchor: '#risuai' },
      { label: 'تنسيق بطاقة الشخصية (Tavern v2)', anchor: '#character-cards' },
      { label: 'توصيات النماذج حسب الواجهة', anchor: '#models' },
      { label: 'الخصوصية: أي واجهة تتصل بالخارج', anchor: '#privacy' },
      { label: 'القرار: اختر واجهتك', anchor: '#decision' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءة ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**SillyTavern للمستخدمين المنفردين ذوي الاحتياجات العميقة للتخصيص. Agnai للمجموعات التي تشارك الشخصيات والمحادثات. RisuAI للمبتدئين أو من يريدون بدءًا أسرع.**',
          '**بطاقات الشخصية متوافقة بين الثلاثة.** تنسيق Tavern v2 هو المعيار — استورد بطاقة SillyTavern إلى Agnai أو RisuAI بدون تحويل.',
          '**كل واجهة تتصل بنفس نماذج Ollama المحلية.** الواجهة لا تُغيّر جودة الاستجابة — النموذج هو ما يُغيّرها.',
          '**لا إرسال بيانات افتراضيًا في أي منها.** محادثاتك وبطاقات شخصياتك وكتب عوالمك تبقى على جهازك.',
          '**توصية النموذج:** Llama 3.3 70B للجودة القصوى؛ Qwen3 32B إذا كانت الـ VRAM لديك 24 جيجابايت.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**SillyTavern:** Node.js، يعمل على Mac/Linux/Windows/Android (Termux)، لا تطبيق iOS.',
          '**Agnai:** Next.js، يعمل كخدمة ويب (محلي أو خادم مشترك)، يدعم حسابات متعددة.',
          '**RisuAI:** Svelte، تطبيقات iOS وAndroid متوفرة، الأبسط في الإعداد.',
          '**توافق بطاقات الشخصية:** الثلاثة يدعمون Tavern v2 — البطاقات تنتقل بين الواجهات.',
          '**توافق الخلفيات:** Ollama وllama.cpp وLM Studio وvLLM وأي نقطة نهاية متوافقة مع OpenAI — تعمل مع الثلاثة.',
          '**أوسع نظام بيئي:** SillyTavern — أكثر إضافات ومنتديات مجتمعية وبطاقات جاهزة.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'كيف اختبرنا',
        content: [
          'اختبرنا الثلاثة بنفس خلفية Ollama (Llama 3.3 70B Q4_K_M) على Apple M5 Max 64 جيجابايت. قيّمنا: سهولة الإعداد للمرة الأولى، وتحميل بطاقة الشخصية، وعمق كتاب العوالم، ودردشة المجموعة، وأداء الشاشة اللمسية، والخصوصية (مراقبة الشبكة عبر Little Snitch). استخدم كل اختبار نفس البطاقة ونفس مجموعة بطاقات الشخصية ونفس مشاهد المحادثة للمقارنة العادلة.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'مقارنة الثلاث واجهات',
        columns: ['الميزة', 'SillyTavern', 'Agnai', 'RisuAI'],
        rows: [
          { 'الميزة': 'التخصيص العميق', 'SillyTavern': 'ممتاز', 'Agnai': 'متوسط', 'RisuAI': 'جيد' },
          { 'الميزة': 'المستخدمون المتعددون', 'SillyTavern': 'لا', 'Agnai': 'نعم (خادم مشترك)', 'RisuAI': 'لا' },
          { 'الميزة': 'تطبيق iOS', 'SillyTavern': 'لا', 'Agnai': 'لا', 'RisuAI': 'نعم' },
          { 'الميزة': 'تطبيق Android', 'SillyTavern': 'عبر Termux', 'Agnai': 'متصفح', 'RisuAI': 'نعم' },
          { 'الميزة': 'كتاب العوالم', 'SillyTavern': 'ممتاز (متكرر)', 'Agnai': 'جيد', 'RisuAI': 'جيد' },
          { 'الميزة': 'دردشة المجموعة', 'SillyTavern': 'ممتاز', 'Agnai': 'جيد', 'RisuAI': 'جيد' },
          { 'الميزة': 'سهولة البداية', 'SillyTavern': 'معتدلة', 'Agnai': 'جيدة', 'RisuAI': 'ممتازة' },
          { 'الميزة': 'الخصوصية', 'SillyTavern': 'لا تتبع', 'Agnai': 'لا تتبع', 'RisuAI': 'لا تتبع' },
        ],
      },
      sillytavern: {
        id: 'sillytavern',
        title: 'SillyTavern: تحليل معمّق',
        content: [
          '**النقاط القوية:** أعمق نظام لكتاب العوالم بين الثلاثة — يدعم إدخالات متكررة (إدخالات تُشغّل إدخالات أخرى)، وأولوية الكلمات المفتاحية، والمشغّلات الشرطية. مدعوم بأوسع مجتمع وأكبر نظام بيئي من الإضافات في 2026. أفضل تطبيق لكتاب العوالم المعقدة ومشاريع بناء الأكوان.',
          '**النقاط الضعيفة:** يستغرق الإعداد الأولي أطول وقت. التطبيق يعمل كخادم Node.js محلي — لا يوجد تطبيق iOS مخصص. على Android يعمل عبر Termux (يعمل لكن مُرهق للإعداد).',
          '**الأفضل لـ:** المستخدمون المنفردون ذوو الاحتياجات العميقة للتخصيص — إعدادات مسبقة معقدة وكتب عوالم كبيرة ومشاهد متعددة الشخصيات.',
        ],
      },
      agnai: {
        id: 'agnai',
        title: 'Agnai: تحليل معمّق',
        content: [
          '**النقاط القوية:** الوحيد من الثلاثة بوضع خادم مشارك حقيقي — حسابات مستخدمين متعددة وملكية مشتركة للشخصيات والمحادثات ومشاهد roleplay تعاونية. واجهة ويب تعمل على أي متصفح بدون تثبيت.',
          '**النقاط الضعيفة:** أقل تخصيصًا من SillyTavern في إدارة نظام الموجّهات. نظام بيئي مجتمعي أصغر من SillyTavern.',
          '**الأفضل لـ:** المجموعات ومشاريع الكتابة التعاونية وأي شخص يريد مشاركة الـ roleplay مع آخرين على نفس الخادم.',
        ],
      },
      risuai: {
        id: 'risuai',
        title: 'RisuAI: تحليل معمّق',
        content: [
          '**النقاط القوية:** الأسهل في البدء من الثلاثة. تطبيقات iOS وAndroid مخصصة. واجهة نظيفة. نفس مواصفة بطاقات الشخصية Tavern v2 — البطاقات من SillyTavern تعمل بدون تحويل.',
          '**النقاط الضعيفة:** أقل عمقًا من SillyTavern في إمكانات كتاب العوالم والإضافات. مجتمع أصغر من SillyTavern وAgnai.',
          '**الأفضل لـ:** المستخدمون الجدد الذين يريدون البدء اليوم، ومستخدمو iPhone/Android الذين يريدون تطبيقًا مخصصًا، والمستخدمون الذين يجدون SillyTavern مُعقَّدًا جدًا.',
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: 'تنسيق بطاقة الشخصية (Tavern v2)',
        content: [
          'تنسيق Tavern v2 هو المعيار الصناعي لبطاقات الشخصية في 2026. يُخزَّن كـ PNG (البطاقة صورة مع بيانات الشخصية مُضمَّنة) أو JSON.',
          'تشمل الحقول الرئيسية: الاسم والوصف والشخصية والسيناريو وأمثلة الرسائل والرسالة الافتتاحية ومعرف كتاب العوالم.',
          'أكبر مستودعات البطاقات: chub.ai (أكبر)، وjailbreaks.net، ومنتديات المجتمع على Discord.',
          'الثلاثة يستوردون الـ PNG مباشرةً — اسحب الملف وأفلته في الواجهة للتحميل الفوري.',
        ],
      },
      models: {
        id: 'models',
        title: 'توصيات النماذج حسب الواجهة',
        columns: ['حالة الاستخدام', 'النموذج الموصى به', 'VRAM المطلوبة'],
        rows: [
          { 'حالة الاستخدام': 'أفضل شاملًا للـ roleplay', 'النموذج الموصى به': 'Llama 3.3 70B Q4_K_M', 'VRAM المطلوبة': '~42 جيجابايت' },
          { 'حالة الاستخدام': 'جودة الحوار وتعدد الأصوات', 'النموذج الموصى به': 'Command R+ 104B', 'VRAM المطلوبة': '~62 جيجابايت' },
          { 'حالة الاستخدام': 'افتراضي لأجهزة 24 جيجابايت VRAM', 'النموذج الموصى به': 'Qwen3 32B Q4_K_M', 'VRAM المطلوبة': '~20 جيجابايت' },
          { 'حالة الاستخدام': 'محتوى بالغ (للكتّاب)', 'النموذج الموصى به': 'Hermes 3 Llama 3.3 70B', 'VRAM المطلوبة': '~42 جيجابايت' },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية: أي واجهة تتصل بالخارج',
        content: [
          '**SillyTavern:** بدون تتبع افتراضيًا. الميزات الاختيارية (ترجمة السحابة، توليد الصور عبر API الخارجية، البحث الويب) محمية بتهيئة صريحة. إذا أشرت الواجهة إلى Ollama أو خلفية محلية أخرى، لا توجد بيانات تغادر شبكتك.',
          '**Agnai:** بدون تتبع افتراضيًا في الوضع المحلي. في وضع الخادم المشارك، تُرسَل المحادثات إلى خادمك (وليس إلى Anthropic أو OpenAI إلا إذا هيّأته كذلك). استخدم مراقب الشبكة للتحقق.',
          '**RisuAI:** بدون تتبع افتراضيًا. نفس المبدأ: الواجهة تُعيد الموجّهات إلى الخلفية التي تحددها — إذا كانت Ollama المحلية، البيانات تبقى محلية.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'القرار: اختر واجهتك',
        content: ['اختر بناءً على شكل سير عملك، ليس الجودة الخام — الثلاثة يُنتجون نفس المحادثة حين يُدمجون مع نفس النموذج.'],
        localIf: [
          'كاتب منفرد بحاجات عميقة للتخصيص → SillyTavern',
          'مجموعة تشارك الشخصيات والمحادثات → Agnai',
          'مستخدم جديد يريد البدء اليوم → RisuAI',
          'مستخدم iPhone يريد تطبيقًا مخصصًا → RisuAI',
          'بناء عوالم معقدة (مشغّلات متكررة وأولوية كلمات مفتاحية) → SillyTavern',
        ],
        cloudIf: [
          'roleplay دون تحميل أي نموذج محليًا → استخدم API سحابية مع أي من الثلاثة (نماذج GPT-4 أو Claude)',
        ],
        quick: [
          'الافتراضي لمعظم المستخدمين: SillyTavern',
          'للمجموعات: Agnai',
          'للمبتدئين/iOS: RisuAI',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          '**اعتقاد أن الواجهة تُغيّر جودة الاستجابة.** لا تُغيّرها. SillyTavern وAgnai وRisuAI جميعها تُعيد الموجّه إلى نفس نموذج Ollama. الجودة من النموذج، ليس الواجهة.',
          '**البدء بـ SillyTavern ثم الاستسلام بسبب الإعداد.** اتبع دليل الإعداد السريع (node server.js ثم اتصل بـ Ollama). أصعب جزء هو الجزء الأول فقط.',
          '**محاولة مشاركة خادم SillyTavern مع متعاونين.** SillyTavern ليس مُصمَّمًا لمتعاددي المستخدمين. استخدم Agnai للـ roleplay التعاوني.',
          '**تثبيت Termux من متجر Google Play لـ SillyTavern على Android.** نسخة Google Play متقادمة. استخدم F-Droid.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'مستودع SillyTavern — [GitHub: SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern) (2026).',
          'مستودع Agnai — [GitHub: agnaistic/agnai](https://github.com/agnaistic/agnai) (2026).',
          'مستودع RisuAI — [GitHub: kwaroran/RisuAI](https://github.com/kwaroran/RisuAI) (2026).',
          'مواصفة بطاقة الشخصية Tavern v2 — [chub.ai community wiki](https://chub.ai) (2026).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل ترسل هذه الواجهات محادثاتي إلى خوادم سحابية؟',
            a: 'لا، افتراضيًا. الثلاثة تعمل محليًا بدون تتبع. بيانات الدردشة وبطاقات الشخصيات وكتب العوالم تُخزَّن على جهازك. الميزات الاختيارية (خلفيات LLM السحابية وترجمة التمديدات وتوليد الصور والبحث الويب) محمية بتهيئة صريحة.',
          },
          {
            q: 'أي نموذج للـ roleplay؟',
            a: 'Llama 3.3 70B هو أفضل خيار شامل عند توفر الجهاز (VRAM ~42 جيجابايت Q4_K_M). على أجهزة 24 جيجابايت، Qwen3 32B هو الافتراضي الأخف. Command R+ 104B الأفضل في تنويع الأصوات في المشاهد الجماعية لكن يحتاج ~62 جيجابايت. للمشاهد الناضجة التي يرفضها النموذج المنضبط بالتعليمات، ثبّت Hermes 3 (مبني على Llama 3.3) على نفس Ollama وبدّل بحسب المشهد.',
          },
          {
            q: 'هل SillyTavern فقط للـ roleplay البالغ؟',
            a: 'لا. SillyTavern واجهة دردشة عامة ببطاقات شخصيات وإدارة شخصيات وكتب عوالم — مناسبة لأي عمل إبداعي قائم على الحوار أو الشخصية. كثير من الكتّاب يستخدمونه للكتابة غير البالغة وسيناريوهات متعددة الشخصيات ومشاريع طويلة الأجل.',
          },
          {
            q: 'هل يمكن استخدام هذه الواجهات على iPad أو Android؟',
            a: 'تطبيق RisuAI متاح على iOS وAndroid. يعمل SillyTavern على Android عبر Termux (يعمل لكن مُرهق الإعداد). Agnai يعمل في متصفح الجوال دون تعبئة كتطبيق. إذا كانت الشاشة اللمسية هي منصتك الأساسية، RisuAI هو الخيار الصحيح.',
          },
          {
            q: 'هل كتب العوالم جيدة في Agnai وRisuAI؟',
            a: 'كلاهما يدعمان كتب عوالم بمسح الكلمات المفتاحية البسيطة — مناسبة للمشاريع ذات أقل من ~50 إدخالًا. لبناء أكوان معقدة مع مشغّلات متكررة وأولوية كلمات مفتاحية ومشغّلات شرطية، SillyTavern هو الخيار الوحيد الموثوق من الثلاثة.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[أفضل LLM محلية للكتابة الإبداعية 2026](/ar/power-local-llm/best-local-llm-creative-writing-2026) — الجانب النموذجي؛ مقارنة مباشرة للاختيارات الموصى بها في هذا الدليل.',
          '[نماذج LLM المحلية بدون قيود للكتابة الإبداعية: الأخلاق والقانونية وأفضل الممارسات](/ar/power-local-llm/uncensored-local-llm-creative-writing-ethics) — متى تكون النسخ المشتقة (Hermes 3 وDolphin 3.0) الخيار الصحيح والحدود القانونية.',
          '[أفضل نماذج LLM المحلية في 2026](/ar/local-llms/best-local-llms-2026) — نظرة أوسع على النماذج؛ مفيدة عند اختيار النماذج للتثبيت خلف هذه الواجهات.',
          '[Ollama مقابل LM Studio](/ar/local-llms/ollama-vs-lm-studio) — أكثر خلفيتي استدلال شيوعًا مع هذه الواجهات؛ أيهما تثبت أولًا.',
          '[موجّهات الشخصية](/ar/prompt-engineering/persona-prompting) — هيكل موجّه النظام لصوت الشخصية؛ يعمل في الثلاث واجهات.',
          '[موجّهات LLM المحلية لكتّاب الروايات](/ar/power-local-llm/local-llm-prompts-for-fiction-writers) — قوالب موجّهات نظام جاهزة للخيال القائم على الشخصيات.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SillyTavern مقابل Agnai مقابل RisuAI: أفضل واجهة roleplay محلية (2026)',
      description: 'مقارنة SillyTavern وAgnai وRisuAI للـ roleplay مع نموذج LLM محلي. الميزات وتوافق النماذج والخصوصية والنظام البيئي المجتمعي.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay',
      inLanguage: 'ar',
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
}
