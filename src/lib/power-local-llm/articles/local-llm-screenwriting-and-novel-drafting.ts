// Power Local LLM — How to Run a Local LLM for Screenwriting and Novel Drafting
// Slug: local-llm-screenwriting-and-novel-drafting
// All 9 locales (en, de, es, fr, ja, pt, ar, zh, ko). Refreshed 2026-10-26 in no-GSC (data-free) mode: model landscape, context facts, Final Draft/Fountain, KDP and Clarkesworld policy re-checked against primary sources.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-26',
    next_refresh_due: '2027-04-26',
    theme: 'Creative & Roleplay',
    heroImage: '/images/local-llm-screenwriting-and-novel-drafting-overview-hero-en.webp',
    title: 'Drafting Novels and Screenplays With Local LLMs: 100K+ Word Workflow Guide (2026)',
    seoTitle: 'Local LLM Screenwriting & Novel Drafting Guide 2026',
    intro:
      'Local LLMs integrated into a screenwriting or novel-drafting workflow let you generate scene drafts, beat sheets, dialogue passes, and revision runs without internet access, cloud logging, or usage limits. This guide covers the full workflow: model selection, context-window management for long-form work, chapter scaffolding, scene generation, and the tools that connect a local LLM to your writing software.',
    metaDescription:
      'How to use local LLMs for screenwriting and novel drafting: model starting points, context management, scene generation and writer tool integrations.',
    twitterDescription:
      'How to use local LLMs for screenwriting and novel drafting: context-window management, chapter scaffolding, scene generation, dialogue passes, and tool integrations.',
    current_models_mentioned: [
      'Qwen3.6 27B',
      'Gemma 4 31B',
      'Llama 3.3 70B',
      'Hermes 4 70B',
      'Kimi-K2.6',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      'Screenwriters, novelists, and narrative game designers who want to use local LLMs as drafting assistants for extended creative work — managing context windows, generating draft content, and integrating AI assistance into their existing writing tools.',
    readTime: '15 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM screenwriting novel drafting',
    targetKeywords: [
      'local llm screenwriting',
      'local llm novel drafting',
      'ollama creative writing workflow',
      'context window management long fiction',
      'local ai writing assistant',
      'scene generation local model',
    ],
    leadAnswerBlock:
      '**The main challenge with local LLMs on long-form fiction is context management: plan around about 32K tokens per generation and give the model a compressed "session document" (character sheets, chapter summaries, current scene setup) for one scene at a time, instead of the whole manuscript.**',
    quickAnswerTop: {
      en: {
        question: 'How do you use a local LLM for novel writing or screenwriting without losing context?',
        answer:
        'The key technique is structured context injection — rather than pasting your entire manuscript into the context window, maintain a compressed session document: a character sheet (name, dominant trait, speech register), a plot summary of completed chapters (100–200 words per chapter), and the current scene\'s setup (beat, POV, word ceiling). Inject this session document at the start of each writing session. Generate one scene at a time rather than asking the model to continue a growing document. Because each call carries only the compressed state, this approach scales to any novel length and reduces the context drift and voice loss that writers report when they try to fit a full manuscript into one long context window.',
        bullets: [
          'Session document technique: inject character sheets + chapter summaries + current scene setup at session start.',
          'Generate one scene at a time — avoid asking the model to "continue" a growing document beyond about 32K tokens.',
          'Beat-sheet-first for screenwriting: generate the beat sheet before any prose; use it as the structural scaffold.',
          'Model starting points (specs from the model cards): Qwen3.6 27B, Gemma 4 31B, Llama 3.3 70B; PromptQuorum has not benchmarked them for fiction.',
          'Ollama + Obsidian is a common writer workflow; Scrivener documents no plugin API, so output is pasted in.',
          'Context window planning rule: models list 128K–262,144 tokens; plan around about 32K per generation, because long-context quality is uneven.',
          'Low-refusal fine-tunes such as Hermes 4 70B use the same workflow for mature fiction; check each model\'s licence.',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'The Context Window Problem', anchor: '#context-window' },
      { label: 'Session Document Technique', anchor: '#session-document' },
      { label: 'Novel Drafting Workflow', anchor: '#novel-workflow' },
      { label: 'Screenwriting Workflow', anchor: '#screenwriting-workflow' },
      { label: 'Scene Generation Templates', anchor: '#scene-generation' },
      { label: 'Tool Integrations', anchor: '#tools' },
      { label: 'Model Recommendations', anchor: '#models' },
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
          '**Context window planning rule: 128K–262,144 tokens listed, about 32K planned.** Models use the middle of long inputs less reliably ("Lost in the Middle"), so plan around about 32K tokens (~24,000 words) per generation and use the session document technique, not the full manuscript.',
          '**Session document technique is the core skill.** Maintain a compressed text file containing: active character sheets (one per character, 150 words each), chapter summaries (100–200 words per completed chapter), and the current scene\'s setup. Inject this at the start of every generation session.',
          '**Generate one scene at a time.** Ask the model to write one scene (200–600 words) per session rather than asking it to "continue" a growing document. One scene per session reduces context drift and helps keep the voice consistent.',
          '**Beat-sheet-first for screenwriting.** Before generating any script pages, generate a scene-level beat sheet (INT./EXT. LOCATION — what happens, what changes, what the scene accomplishes in one sentence). Use the beat sheet as the scaffold for each page generation.',
          '**Pick a model you can run, then test it on one of your own scenes.** Dense models in the 27B–31B class (Qwen3.6 27B, Gemma 4 31B) and Llama 3.3 70B are common starting points; PromptQuorum has not benchmarked any of them for fiction, and public creative-writing leaderboards rank models differently from one another.',
          '**Ollama + a plain-text writing tool is a dependable integration.** Scrivener, Obsidian, and VS Code can all hold the manuscript; Ollama serves the model through an API that companion apps or scripts can call.',
          '**Low-refusal models (Hermes 4 70B) slot into this workflow without setup changes.** For mature fiction, swap the Ollama model; the session document and scene generation techniques are identical. Check each model\'s licence for your use.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Model starting points (from the model cards):** Qwen3.6 27B (dense, Apache-2.0, 262,144-token context), Gemma 4 31B (dense, Apache-2.0, 256K context), Llama 3.3 70B (dense, 128K context, Llama 3.3 Community License).',
          '**Context window planning limit:** ~32K tokens (~24,000 words) per generation; models list 128K–262,144 tokens, which is a ceiling, not a quality guarantee.',
          '**Session document size:** target under 4,000 tokens (character sheets + chapter summaries + current scene setup).',
          '**Scene generation target:** 200–600 words per generation call; longer scenes via multiple sequential prompts.',
          '**Screenwriting format:** combine Ollama with Fountain-format output instructions for screenplay-format text.',
          '**Writing tools that pair with Ollama:** Scrivener (paste output; no documented plugin API), Obsidian (via local plugin or scripts), VS Code (via Continue.dev or direct API calls), plain terminal.',
          '**Low-refusal option:** Hermes 4 70B (Llama-3.1-70B base) for mature fiction; same workflow, same session document technique.',
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: 'The Context Window Problem for Long-Form Writing',
        image: '/images/local-llm-screenwriting-and-novel-drafting-context-window-en.svg',
        imageCaption:
          'Context planning: a 32K-token (~24,000 words) working limit versus the 128K–262,144 tokens that open models now list.',
        content:
        '**Plan around about 32K tokens per generation, even when a model lists far more.** This is a conservative PromptQuorum planning rule, not a measured limit: long-context research (Liu et al., "Lost in the Middle") found that models use information at the start and end of a long input more reliably than information in the middle, and that quality can fall as inputs grow. Newer models list much larger windows — Qwen3.6 27B lists 262,144 tokens natively and Gemma 4 31B lists 256K — so test your own model. For a novel, pasting the manuscript-so-far and asking for the next chapter is still the least reliable approach, and a long context also uses more memory because the KV cache grows with it.\n\nKimi-K2.6 from Moonshot AI lists a 256K-token (262,144) context window, the same class as the models above, but it is a mixture-of-experts model with about 1 trillion total parameters (32 billion active) shipped with native int4 weights. Even at 4 bits the weights alone come to roughly 500 GB (PromptQuorum estimate: 1 trillion parameters × 0.5 byte), so it is a server-class model, not a laptop one. The session document technique and scene-by-scene generation apply to locally runnable models of any context size.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A conservative planning ceiling for context adherence in local LLMs is around 32K tokens (~24,000 words) per generation — beyond this, long-context research finds less reliable use of earlier content, which can show up as voice drift and plot inconsistencies across a long manuscript.',
          },
          {
            type: 'plain-terms',
            text: 'You cannot reliably expect a model to remember what happened in chapter 3 while writing chapter 20 just because your whole manuscript fits in its context window. Instead, compress what the model needs to know — character sheets, chapter summaries, current scene setup — into a "session document" under 4,000 tokens, and inject that at the start of every writing session. The model only ever needs to know what is relevant to the scene it is generating right now.',
          },
        ],
        items: [
          '**Token-to-word conversion:** 1 token ≈ 0.75 words in English (rule of thumb). 32K tokens ≈ 24,000 words. 128K tokens ≈ 96,000 words (about one novel); 262,144 tokens ≈ 196,000 words.',
          '**Attention degradation:** models can lose reliable reference to content from early in a long context window. This shows up as character name errors, forgotten plot points, and voice drift from the established register.',
          '**The asymmetry:** in the Lost in the Middle study, models used the beginning and the end of the input best and content in the middle least reliably. The study tested models available in 2023, so test current models rather than assuming the same pattern.',
          '**Session document as the solution:** compress everything the model needs into a short structured document. Inject at the start. Generate the scene. End the session. Reset. Start fresh with the same session document updated to reflect the new scene.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Do not paste your full manuscript into the context. If your novel is over 10,000 words and you paste the full draft to ask for the next chapter, you risk context drift — the model may forget early character details, contradict established plot points, and regress toward a generic register. Use the session document technique instead.',
          },
        ],
      },
      sessionDocument: {
        id: 'session-document',
        title: 'Session Document Technique',
        content:
          'The session document technique is a PromptQuorum workflow recommendation built on the context limits described above. PromptQuorum has not run a controlled test of it, and the sizes below (4,000 tokens, 150 words per character sheet, 100–150 words per chapter summary) are planning guidelines, not measured thresholds.\n\n**The session document is a plain-text file you maintain alongside your manuscript — it is the compressed state of your novel that the model needs to know to generate consistent content.** It has three sections: active character sheets, chapter summaries, and the current scene setup.',
        promptExamples: [
          {
            label: 'Session Document Template',
            text: '# SESSION DOCUMENT — [NOVEL TITLE]\n\n## ACTIVE CHARACTERS\n**[Character Name]**\nDominant trait: [one trait]\nContradicting behaviour: [one behaviour]\nSpeech register: [formal/casual/specific verbal tics]\nRelationship to [other character]: [brief]\n\n**[Character Name 2]**\n[same structure]\n\n## CHAPTER SUMMARIES (completed)\n**Chapter 1:** [100–150 words — what happened, what changed, where it ended]\n**Chapter 2:** [100–150 words]\n[continue for all completed chapters]\n\n## CURRENT SCENE SETUP\nChapter: [N]\nScene: [brief description of what this scene needs to accomplish]\nPOV: [character name]\nOpening state: [where we are at the start of this scene — 1 sentence]\nEmotional beat to land on: [what the POV character feels at the end — do not state it directly in the scene]\nWord ceiling: [200–500 words]',
          },
        ],
        items: [
          '**Character sheets — target 150 words per active character.** Include dominant trait, contradicting behaviour, speech register, and the key relationship to the other active characters. Add or remove characters as they become active or exit the manuscript.',
          '**Chapter summaries — target 100–150 words per completed chapter.** Focus on: what happened, what changed in character relationships, what information the reader now knows, where the chapter ended spatially and emotionally. Do not include every scene — summarise the chapter\'s net effect.',
          '**Current scene setup — specific and brief.** Name the POV, the scene\'s purpose (what it needs to accomplish in the story), the emotional beat to land on, and the word ceiling. This is the action the model takes; the character sheets and chapter summaries are the context it uses to do it consistently.',
          '**Session document size — target under 4,000 tokens (~3,000 words).** A session document that exceeds this starts consuming context space that should go to the generation itself. Compress character sheets and summaries aggressively.',
          '**Update after each session.** After generating a scene, add a 1–2 sentence update to the relevant chapter summary and update any character sheet entries that changed. The session document is a living file; keeping it current is the maintenance cost of the technique.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Keep the session document in a plain-text file alongside your manuscript. After each writing session, copy-paste the session document into the system message or the first user turn of the next session. In Ollama, you can create a Modelfile with the session document in the SYSTEM block and refresh it before each session. In SillyTavern, paste it into the system prompt field at the start of each novel session.',
          },
        ],
      },
      novelWorkflow: {
        id: 'novel-workflow',
        title: 'Novel Drafting Workflow',
        image: '/images/local-llm-screenwriting-and-novel-drafting-workflow-steps-en.svg',
        imageCaption:
          'Four-phase novel workflow with a local LLM: outline, beat sheets, scene generation and revision, around a session document.',
        content:
          '**The novel drafting workflow with a local LLM has four phases: outline, chapter beat sheets, scene generation, and revision passes.** Each phase uses a different prompt structure.',
        items: [
          '**Phase 1 — Outline:** generate a chapter-level outline (10–30 chapters, one sentence per chapter: what happens, what changes). Prompt: "Genre: [genre]. Protagonist: [Name + core wound]. Central conflict: [in one sentence]. Write a 20-chapter outline — one sentence per chapter, each sentence names the scene and the change." Review and edit the outline before proceeding.',
          '**Phase 2 — Beat sheets:** expand each chapter entry into a scene-level beat sheet (3–8 scenes per chapter). Prompt per chapter: "Chapter [N] summary: [paste the one-sentence outline entry]. Expand into a scene-level beat sheet: 4–6 scenes, each described in one sentence naming location, participants, and the scene\'s single change. No prose yet."',
          '**Phase 3 — Scene generation:** use the session document + the current scene\'s beat to generate one scene at a time. See the scene generation templates below. Generate, review, paste into manuscript, update session document. Repeat.',
          '**Phase 4 — Revision passes:** after completing a chapter, run targeted revision prompts on specific scenes. See [Local LLM Prompts for Fiction Writers](/power-local-llm/local-llm-prompts-for-fiction-writers) for the revision prompt structures. Do not ask the model to revise more than one scene per generation call.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Keep the outline and beat sheets in separate files from the manuscript. They are the skeleton — the manuscript is the flesh. Keeping them separate means you can regenerate any part of either without overwriting the other, and you can paste just the relevant beat-sheet entry into the current scene setup without including the full outline.',
          },
        ],
      },
      screenwritingWorkflow: {
        id: 'screenwriting-workflow',
        title: 'Screenwriting Workflow',
        content:
          '**Screenwriting with a local LLM uses the same session document and beat-sheet techniques as novel drafting, with two additions: format instructions in the system prompt, and scene header (slug line) generation as a separate step from page generation.**',
        promptExamples: [
          {
            label: 'Screenwriting System Prompt',
            text: 'You are a screenplay formatting assistant. All prose you generate is formatted in standard US screenplay format:\n- Scene headers: INT./EXT. LOCATION — DAY/NIGHT\n- Action lines: present tense, concrete, maximum 3 lines per block\n- Character names: ALL CAPS above dialogue\n- Dialogue: centred, no dialogue tags\n- Parentheticals: sparingly, only for delivery or action mid-dialogue\n\nGenerate in Fountain-compatible plain text.',
          },
          {
            label: 'Scene Beat to Script Page Prompt',
            text: 'Beat: [paste the one-sentence scene beat from the beat sheet]\nPOV character: [Name]\nPage target: [1–3 pages]\n\nGenerate the script pages for this beat. Use standard screenplay format. Begin with the slug line. No narration — action lines and dialogue only.',
          },
        ],
        items: [
          '**Format in the system prompt, not the user turn.** Putting screenplay format instructions in the system message means every generation in the session follows the format without repeating the instruction.',
          '**Fountain-compatible output:** Fountain is a plain-text markup format for screenplays; Highland and Fade In read it, among other apps listed in the [Fountain app directory](https://fountain.io/apps). Asking the model to generate "Fountain-compatible plain text" produces output you can open in those tools or convert for others (see the Final Draft question in the FAQ).',
          '**Slug lines first:** generate the slug line (INT./EXT. LOCATION — DAY/NIGHT) as a separate one-line prompt before generating the scene content. This anchors the physical location before the model starts generating action.',
          '**Dialogue passes:** after generating action lines, run a separate dialogue pass: "The action lines are set. Write the dialogue for [Character A] and [Character B] in this scene. Character A wants [X]. Character B wants [Y]. No dialogue tags. 5–8 exchanges."',
          '**Page count management:** there is no fixed words-per-page figure, and "one page equals one minute" is only a rule of thumb. Count the average words per page of your own script and set word ceilings from that.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The beat-sheet-first discipline matters more for screenwriting than for novel drafting. A screenplay scene has a specific structural function (setup, confrontation, decision, reversal) and a specific page target. Generating pages without a beat sheet produces scenes that drift in length and lose their structural purpose. Always know what a scene is supposed to accomplish before generating the pages.',
          },
        ],
      },
      sceneGeneration: {
        id: 'scene-generation',
        title: 'Scene Generation Templates for Long-Form Work',
        content:
          '**Long-form scene generation requires the session document as a prefix and a single scene prompt as the action.** The templates below assume the session document is already in the system message or the first user turn.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For long-form fiction, a dependable generation pattern is: session document in the system prompt → single scene prompt in the user turn → review → update session document → repeat, one scene per session.',
          },
          {
            type: 'plain-terms',
            text: 'The model needs to know three things to write the next scene consistently: who these characters are (character sheets), what has already happened (chapter summaries), and what this scene needs to do (scene setup). Give it exactly those three things, nothing more. Then generate the scene, paste it into your manuscript, and update the session document to reflect what changed. Repeat.',
          },
        ],
        promptExamples: [
          {
            label: 'Novel Scene Generation Prompt',
            text: '[SESSION DOCUMENT ALREADY IN SYSTEM PROMPT]\n\nCurrent scene:\nChapter: [N]\nBeat: [one sentence from the beat sheet]\nPOV: [character name]\nOpening: [one sentence — where we are, who is present]\nEmotional landing: [what the POV character feels at the end — show, don\'t state]\nWord ceiling: [300–500 words]\n\nWrite this scene. No summarising. Every sentence renders a moment.',
          },
          {
            label: 'Continuity Check Prompt',
            text: 'Before writing the next scene, check for continuity. The session document says:\n- [Character A] is [trait/state]\n- The last scene ended with [brief description]\n\nThe next scene opens with [brief description]. Does this transition make sense? If not, what needs to change in the transition? One paragraph answer only.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Use the continuity check prompt at chapter transitions — not at every scene. Checking continuity at every scene slows the drafting flow for no consistent benefit. Chapter transitions (where the location, time, or POV character changes) are where continuity breaks most often and where the check pays off.',
          },
        ],
      },
      tools: {
        id: 'tools',
        itemHeadings: true,
        title: 'Tool Integrations for Writers',
        content:
          '**Ollama exposes an OpenAI-compatible API at localhost that a growing ecosystem of writer-facing tools connects to.** The integrations below represent the most established options as of 2026.',
        columns: ['Tool', 'Link', 'Integration', 'Best For'],
        rows: [
          { 'Tool': 'Obsidian', 'Link': '[obsidian.md](https://obsidian.md)', 'Integration': 'Copilot plugin or Smart Connections plugin → Ollama API. See [Obsidian + Local LLM Plugins](/power-local-llm/local-llm-with-obsidian-2026) for the deeper guide on which Obsidian plugins work best with Ollama.', 'Best For': 'Writers who already use Obsidian for notes + manuscript; seamless same-app generation' },
          { 'Tool': 'Scrivener', 'Link': '[literatureandlatte.com/scrivener](https://www.literatureandlatte.com/scrivener)', 'Integration': 'External script via Ollama API → paste into document', 'Best For': 'Writers who structure novels in Scrivener; AI drafts pasted into the existing project structure' },
          { 'Tool': 'VS Code', 'Link': '[code.visualstudio.com](https://code.visualstudio.com)', 'Integration': 'Continue.dev extension → Ollama backend', 'Best For': 'Technical writers and game narrative designers comfortable in a code editor' },
          { 'Tool': 'SillyTavern', 'Link': '[github.com/SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern)', 'Integration': 'OpenAI-compatible API → Ollama', 'Best For': 'Roleplay-style fiction and character-card-driven drafting; persistent character memory' },
          { 'Tool': 'Plain terminal', 'Integration': '`ollama run [model]` or curl to Ollama API', 'Best For': 'Scriptable workflows; writers who want maximum control with minimal UI overhead' },
          { 'Tool': 'LM Studio', 'Link': '[lmstudio.ai](https://lmstudio.ai)', 'Integration': 'Built-in chat UI + local server API', 'Best For': 'Writers who want a GUI model manager without installing Ollama separately' },
          { 'Tool': 'NovelCrafter', 'Link': '[novelcrafter.com](https://www.novelcrafter.com)', 'Integration': 'Built-in AI integration; its help pages list LM Studio, Ollama and OpenAI-API-compatible connections', 'Best For': 'Writers who want chapter-level AI assistance inside a single novel-focused app' },
          { 'Tool': 'Plottr', 'Link': '[plottr.com](https://plottr.com)', 'Integration': 'Manual workflow: structure novels in Plottr, paste scenes/beats into Ollama externally (Plottr states it is not adding AI features)', 'Best For': 'Plot-heavy genre fiction (mystery, thriller, fantasy) where structural plotting is the workflow centerpiece' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The simplest integration that works for most writers is Obsidian + the Copilot plugin pointed at Ollama. Your session document lives in an Obsidian note, your manuscript chapters live in the same vault, and you generate directly in the same app without switching contexts. The Copilot plugin passes selected text or the current note to Ollama and returns the completion inline. See [Obsidian + Local LLM Plugins](/power-local-llm/local-llm-with-obsidian-2026) for the deeper guide on which Obsidian plugins work best with Ollama.',
          },
        ],
      },
      models: {
        id: 'models',
        itemHeadings: true,
        title: 'Model Recommendations for Long-Form Work',
        content:
          '**Long-form drafting has different model requirements than short-form fiction.** Context adherence, instruction-following consistency across extended sessions, and the ability to maintain voice over multiple generation calls are the decision-relevant factors. The rows below are starting points taken from each model\'s card; PromptQuorum has not benchmarked these models for fiction, and public creative-writing leaderboards rank models differently from one another, so test two candidates on one of your own scenes. Server-class open models such as Command A+ (218B total parameters, 25B active, Apache 2.0) and Mistral Large 3 (675B total parameters, 256K context, Apache 2.0) are outside consumer hardware range. For the broader model landscape across all use cases, see [Best Local LLMs in 2026](/local-llms/best-local-llms-2026).',
        columns: ['Task', 'Recommended Model', 'Why'],
        rows: [
          { 'Task': 'Novel drafting (primary)', 'Recommended Model': 'Qwen3.6 27B or Gemma 4 31B', 'Why': 'Dense 27B–31B models listing 256K+ context under Apache licences; a size class that suits a 24 GB GPU or 32 GB+ unified memory at 4-bit (estimate)' },
          { 'Task': 'Screenwriting', 'Recommended Model': 'Qwen3.6 27B or Llama 3.3 70B', 'Why': 'Format adherence depends mostly on the system prompt; test one Fountain scene on two models. Llama 3.3 70B is dense, lists 128K context and needs roughly 40 GB at 4-bit (estimate)' },
          { 'Task': 'Beat sheet / outline generation', 'Recommended Model': 'Qwen3.6 35B-A3B', 'Why': 'Mixture-of-experts with 3B of 35B parameters active per token (Apache-2.0), so generation is faster per token; outline quality not benchmarked by PromptQuorum' },
          { 'Task': 'Dialogue passes', 'Recommended Model': 'The model whose samples fit', 'Why': 'Run dialogue as a separate pass on the model whose calibration lines match your character\'s register; there is no verified ranking of models for dialogue' },
          { 'Task': 'Revision (structural)', 'Recommended Model': 'The model you drafted with', 'Why': 'Revision prompts that name one structural constraint per call work on any instruction-following model; one scene per call' },
          { 'Task': 'Mature / dark fiction', 'Recommended Model': 'Hermes 4 70B', 'Why': 'Built on Llama-3.1-70B; Nous Research describes broadly neutral alignment and lower refusal rates; Llama 3 licence; hybrid reasoning mode' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Pasting the full manuscript into the context.** Even when a model lists a 128K–262K window, long inputs are used less reliably, so plan around about 32K tokens. Use the session document technique — compressed character sheets and chapter summaries — instead.',
          '**Asking the model to "continue" an open-ended document.** "Continue the novel" produces drift. "Write the next scene: [specific setup, POV, word ceiling]" produces a consistent, bounded output you can evaluate and paste.',
          '**No beat sheets for screenwriting.** Generating script pages without a scene beat produces pages that drift in length and lose their structural function. Generate the beat sheet first, always.',
          '**Ignoring session document updates.** If you do not update the chapter summary after generating a scene, the session document becomes stale. A stale session document produces inconsistencies within a few sessions.',
          '**Generating more than one scene per session.** Multi-scene generation within one context window produces the first scene well and each subsequent scene with lower consistency. One scene per session; reset and reinject.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Qwen3.6-27B model card](https://huggingface.co/Qwen/Qwen3.6-27B) and [Qwen3.6-35B-A3B model card](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — parameters, 262,144-token native context, YaRN extension, Apache-2.0, read 26 October 2026',
          '[Gemma 4 31B model card](https://huggingface.co/google/gemma-4-31B-it) — dense 31B, 256K context, Apache 2.0, read 26 October 2026',
          '[Llama 3.3 70B Instruct model card](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) — 70B, 128K context, Llama 3.3 Community License, released 6 December 2024',
          '[Hermes 4 70B model card](https://huggingface.co/NousResearch/Hermes-4-70B) — Llama-3.1-70B base, hybrid reasoning, "broadly neutral alignment"',
          '[Kimi-K2.6 model card](https://huggingface.co/moonshotai/Kimi-K2.6) — 1T total and 32B active parameters, 256K context, native int4',
          '[Command A+ documentation](https://docs.cohere.com/docs/command-a-plus) and [Mistral Large 3 model card](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512) — parameter counts and licences of the server-class models',
          '[Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172) — Liu et al., 2023',
          '[Fountain.io](https://fountain.io) — Fountain screenplay format specification and [list of apps](https://fountain.io/apps)',
          '[Final Draft help center](https://kb.finaldraft.com/hc/en-us/articles/15575076862228-Can-Final-Draft-import-a-file-written-in-a-Fountain-based-screenwriting-program) — states Final Draft cannot import .fountain files directly',
          '[Amazon KDP AI-content rules, Publishers Weekly](https://www.publishersweekly.com/pw/by-topic/digital/content-and-e-books/article/93122-amazon-issues-new-ai-guidelines-for-its-kdp-platform.html) and [Clarkesworld submissions](https://clarkesworldmagazine.com/submissions/) — publisher and platform AI policies; check the current wording before submitting',
          '[Scrivener release notes](https://www.literatureandlatte.com/scrivener/release-notes) — versions 3.4.0 to 3.5.2 (December 2025): no plugin or API entries; "Scrivener itself contains no AI"; read 26 October 2026',
          '[Plottr in 2026](https://plottr.com/plottr-in-2026/) and [NovelCrafter AI connections help](https://www.novelcrafter.com/help/categories/ai-connections) — Plottr says it is not building AI features; NovelCrafter lists LM Studio, Ollama and OpenAI-API-compatible connections',
          'Ollama API documentation — [Ollama](https://ollama.com/docs)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can a local LLM write a full novel?',
            a: 'A local LLM can generate the prose for a full novel — but the structural and editorial intelligence has to come from the writer. The model generates scenes when prompted with specific setups; it does not plan, evaluate, or make thematic decisions on its own. Treat it as a fast first-draft generator for scenes you already know how to write: it saves time on the blank-page problem, while the writer still makes every significant decision. Check publisher and platform AI policies before submitting (see the publishers question below).',
          },
          {
            q: 'What is the maximum context window I can use reliably?',
            a: 'Models list 128K to 262,144 tokens, but PromptQuorum recommends planning around about 32K tokens (~24,000 words) per generation, because long-context research finds that models use the middle of long inputs less reliably. That is a conservative planning rule, not a measured limit for every model, so test yours. The session document technique keeps the working context under 4,000–6,000 tokens, so every generation call stays well inside that range.',
          },
          {
            q: 'How do I stop the model from changing my character\'s voice mid-novel?',
            a: 'Voice drift has two causes: a stale session document (missing recent character developments) and context dilution (the character sheet is too far from the active generation in the context). Fix: keep the character sheet in the system message (not buried in a long user-turn preamble), update the sheet after any scene where the character has a meaningful arc moment, and keep the sheet concise enough to fit in the top section of every session context.',
          },
          {
            q: 'Can I use Scrivener with a local LLM?',
            a: 'Not natively — Scrivener 3 has no documented plugin system, and its official release notes through version 3.5.2 (December 2025) mention no AI integration: the 3.4.0 notes say "Scrivener itself contains no AI" and add support for Apple\'s Writing Tools, a macOS system feature. A common workflow is: generate in Ollama (via terminal or a companion script), copy the output, paste it into the relevant Scrivener document. Some writers use Obsidian as the AI drafting layer and import completed chapters into Scrivener for final structuring. Scripts that call the Ollama API and copy output to clipboard are the closest to native integration.',
          },
          {
            q: 'Which is better for screenwriting: Ollama or a cloud AI?',
            a: 'For screenwriters who need to generate mature content (violence, dark psychology, morally complex characters), a local model gives you control over the model and its refusal behaviour — some hosted models decline or soften content that appears in dramatic scripts, and hosted policies change over time. A low-refusal local model such as Hermes 4 70B has fewer built-in refusals, though you remain responsible for the content you generate and publish. Format consistency depends mostly on the instructions in the system prompt, which work with both. The choice is mainly about content control, privacy and cost; PromptQuorum has not compared output quality between hosted and local models for screenwriting.',
          },
          {
            q: 'How do I generate dialogue that sounds like a specific character?',
            a: 'Three-step approach: (1) Add the character\'s speech register to the session document ("formal, avoids contractions, starts sentences with qualifications like \'It seems to me that...\'"). (2) Generate 3–5 sample lines of dialogue from this character in a neutral context as a calibration step at session start. (3) Use those sample lines as an example in the dialogue prompt: "Write dialogue in the same register as these examples: [paste samples]." The calibration step is the most effective technique for character-voice consistency.',
          },
          {
            q: 'Do I need a GPU to use a local LLM for novel drafting?',
            a: 'A GPU speeds up generation significantly but is not required. On Apple Silicon, unified memory lets a MacBook Pro with 16 GB run smaller models (roughly the 8B–14B class at 4-bit, an estimate) — slower than a 24 GB GPU rig, but acceptable when you read and evaluate output between generations. A 24 GB NVIDIA GPU (RTX 4090, RTX 3090) fits 27B–32B-class models at 4-bit (estimate); 70B-class models need roughly 40 GB or more at 4-bit, so they require two GPUs, a 48 GB card, 64 GB of unified memory, or slower CPU offload.',
          },
          {
            q: 'Can I use local LLMs with Final Draft or other professional screenwriting software?',
            a: 'Not directly. Per Final Draft\'s help center, Final Draft cannot import .fountain files; its guidance is to save the text as plain .txt and choose Script (not Text) when importing, or to bring it in as FDX from an app that exports that format. Highland converts between Fountain, FDX and PDF, and Fade In imports and exports Fountain (per the Fountain app directory). Workflow: generate Fountain-format text in Ollama, open it in Highland or Fade In, and export FDX for Final Draft.',
          },
          {
            q: 'Can I use Kimi-K2.6 locally for novel drafting?',
            a: 'Kimi-K2.6 lists a 256K-token context window, the same class as Qwen3.6 27B and Gemma 4 31B, but it is a mixture-of-experts model with about 1 trillion total parameters (32 billion active) and native int4 weights. The weights alone come to roughly 500 GB (PromptQuorum estimate), so it needs a multi-GPU server or a very large unified-memory machine and is impractical on consumer hardware. For fully local workflows, a 27B–70B dense model with the session document technique covers novel-length work without a trillion-parameter model.',
          },
          {
            q: 'How do publishers feel about AI-drafted manuscripts?',
            a: 'Policies vary by publisher and platform and are still changing as of 2026, so check the specific one before submitting. Amazon KDP requires you to tell it when text, images or translations are AI-generated, and treats content created by an AI tool as AI-generated even if you edit it substantially; work you wrote yourself that AI only helped edit or refine is "AI-assisted" and needs no disclosure (per Amazon\'s rules as reported by Publishers Weekly in September 2023). Some magazines reject AI-involved work outright — Clarkesworld\'s submission guidelines say it is not considering stories written, co-written or assisted by AI. Scene text generated by a local LLM falls under policies like KDP\'s "AI-generated" definition, so disclose it where required. This is general information, not legal advice.',
          },
          {
            q: 'What hardware do I need for million-token contexts?',
            a: 'Qwen3.6 27B and Qwen3.6 35B-A3B list a native 262,144-token context that can be extended to about 1,010,000 tokens with YaRN scaling (per their model cards). A long context needs memory for the KV cache on top of the weights, so a million-token run needs far more memory than a typical consumer setup; PromptQuorum has not measured the requirement. The session document technique in this article is designed for exactly this gap — consistent long-form output without relying on a million-token window.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local LLM Prompts for Fiction Writers: Templates & Techniques](/power-local-llm/local-llm-prompts-for-fiction-writers) — scene-writing, dialogue, character, worldbuilding, and style transfer templates that work within the session document workflow.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — comprehensive model comparison across all use cases including creative writing, coding, and reasoning.',
          '[Obsidian + Local LLM Plugins](/power-local-llm/local-llm-with-obsidian-2026) — deeper guide on which Obsidian plugins work best with Ollama for writing workflows.',
          '[Best Local LLMs for Creative Writing 2026](/power-local-llm/best-local-llm-creative-writing) — model comparison for narrative generation including sampling settings and hardware requirements.',
          '[Uncensored Local LLMs for Creative Writing: Ethics and Setup](/power-local-llm/uncensored-local-llm-creative-writing-ethics) — when to use uncensored models for mature fiction and how to set them up in the same Ollama workflow.',
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — frontend options for character-card-driven drafting and collaborative fiction.',
          '[Continue.dev vs Cline vs Aider: Best Local Coding Assistant](/power-local-llm/continue-dev-vs-cline-vs-aider-local) — the same Continue.dev IDE extension used for code assistance can be pointed at Ollama for inline writing assistance in VS Code.',
          '[Chain-of-Thought Prompting Explained](/prompt-engineering/chain-of-thought-prompting) — structured reasoning prompts applicable to plot planning, story beat analysis, and narrative problem-solving.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-26',
    theme: 'Creative & Roleplay',
    heroImage: '/images/local-llm-screenwriting-and-novel-drafting-overview-hero-es.webp',
    title: 'Redactar novelas y guiones con LLMs locales: guía de flujo de trabajo para más de 100.000 palabras',
    seoTitle: 'LLM local para guiones y novelas sin conexión 2026',
    intro:
      'Los LLMs locales integrados en un flujo de trabajo de redacción de novelas o guiones te permiten generar borradores de escenas, beat sheets, pasadas de diálogo y rondas de revisión sin acceso a internet, registro en la nube ni límites de uso. Esta guía cubre el flujo de trabajo completo: selección de modelos, gestión de la ventana de contexto para trabajos de formato largo, andamiaje por capítulos, generación de escenas y las herramientas que conectan un LLM local con tu software de escritura.',
    metaDescription:
      'Flujo para escribir novelas y guiones con LLMs locales: modelos de partida, gestión del contexto, andamiaje por capítulos y generación de escenas.',
    twitterDescription:
      'Cómo usar LLMs locales para redactar novelas y guiones: gestión de ventana de contexto, andamiaje por capítulos, generación de escenas, pasadas de diálogo e integraciones de herramientas.',
    current_models_mentioned: [
      'Qwen3.6 27B',
      'Gemma 4 31B',
      'Llama 3.3 70B',
      'Hermes 4 70B',
      'Kimi-K2.6',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      'Guionistas, novelistas y diseñadores de narrativas para videojuegos que quieren usar LLMs locales como asistentes de borrador para trabajos creativos extensos — gestionando ventanas de contexto, generando contenido borrador e integrando asistencia de IA en sus herramientas de escritura existentes.',
    readTime: '15 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM screenwriting novel drafting',
    targetKeywords: [
      'llm local guion',
      'llm local novela redacción',
      'ollama escritura creativa flujo de trabajo',
      'ventana de contexto ficción larga',
      'asistente escritura ia local',
      'generación de escenas modelo local',
    ],
    leadAnswerBlock:
      '**El principal reto de los LLMs locales en ficción larga es la gestión del contexto: planifica unos 32.000 tokens por generación y da al modelo un "documento de sesión" comprimido (fichas, resúmenes de capítulos, escena actual) en lugar del manuscrito entero.**',
    quickAnswerTop: {
      es: {
        question: '¿Cómo usar un LLM local para escribir una novela o un guion sin perder el contexto?',
        answer:
          'La técnica clave es la inyección de contexto estructurada: en lugar de pegar todo el manuscrito en la ventana de contexto, mantén un documento de sesión comprimido: una ficha de personaje (nombre, rasgo dominante, registro de habla), un resumen de la trama de los capítulos completados (100–200 palabras por capítulo) y la configuración de la escena actual (beat, punto de vista, límite de palabras). Inyecta este documento al inicio de cada sesión de escritura. Genera una escena a la vez en lugar de pedir al modelo que continúe un documento en crecimiento. Como cada llamada lleva solo el estado comprimido, el método escala a cualquier longitud de novela y reduce la deriva de contexto y la pérdida de voz que señalan los escritores cuando intentan meter un manuscrito completo en una sola ventana de contexto larga.',
        bullets: [
          'Técnica del documento de sesión: inyecta fichas de personajes + resúmenes de capítulos + configuración de la escena actual al inicio de la sesión.',
          'Genera una escena a la vez — evita pedir al modelo que "continúe" un documento en crecimiento más allá de unos 32K tokens.',
          'Beat-sheet-first para guiones: genera el beat sheet antes de cualquier prosa; úsalo como andamio estructural.',
          'Modelos de partida (datos de las fichas de modelo): Qwen3.6 27B, Gemma 4 31B, Llama 3.3 70B; PromptQuorum no los ha evaluado para ficción.',
          'Ollama + Obsidian es un flujo de trabajo habitual entre escritores; Scrivener no documenta ninguna API de plugins, así que la salida se pega.',
          'Regla de planificación de la ventana de contexto: los modelos anuncian 128K–262.144 tokens; planifica en torno a 32K por generación, porque la calidad con contextos largos es irregular.',
          'Los fine-tunes con pocos rechazos, como Hermes 4 70B, usan el mismo flujo para ficción madura; revisa la licencia de cada modelo.',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'El problema de la ventana de contexto', anchor: '#context-window' },
      { label: 'Técnica del documento de sesión', anchor: '#session-document' },
      { label: 'Flujo de trabajo para novelas', anchor: '#novel-workflow' },
      { label: 'Flujo de trabajo para guiones', anchor: '#screenwriting-workflow' },
      { label: 'Plantillas de generación de escenas', anchor: '#scene-generation' },
      { label: 'Integraciones de herramientas', anchor: '#tools' },
      { label: 'Recomendaciones de modelos', anchor: '#models' },
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
          '**Regla de planificación de la ventana de contexto: 128K–262.144 tokens anunciados, unos 32K planificados.** Los modelos usan con menos fiabilidad el medio de entradas largas ("Lost in the Middle"); planifica unos 32K tokens por generación.',
          '**La técnica del documento de sesión es la habilidad fundamental.** Mantén un archivo de texto comprimido que contenga: fichas de personajes activos (150 palabras por personaje), resúmenes de capítulos (100–200 palabras por capítulo completado) y la configuración de la escena actual. Inyéctalo al inicio de cada sesión de generación.',
          '**Genera una escena a la vez.** Pide al modelo que escriba una escena (200–600 palabras) por sesión en lugar de pedirle que "continúe" un documento en crecimiento. Una escena por sesión reduce la deriva de contexto y ayuda a mantener una voz consistente.',
          '**Beat-sheet-first para guiones.** Antes de generar páginas de guion, genera un beat sheet a nivel de escena. Úsalo como andamio para cada generación de página.',
          '**Elige un modelo que puedas ejecutar y pruébalo con una escena tuya.** Los modelos densos de la clase 27B–31B (Qwen3.6 27B, Gemma 4 31B) y Llama 3.3 70B son puntos de partida habituales; PromptQuorum no ha evaluado ninguno para ficción, y las clasificaciones públicas de escritura creativa puntúan los modelos de forma distinta.',
          '**Ollama + una herramienta de escritura de texto plano es una integración fiable.** Scrivener, Obsidian y VS Code pueden alojar el manuscrito; Ollama sirve el modelo a través de una API que aplicaciones o scripts pueden llamar.',
          '**Los modelos con pocos rechazos (Hermes 4 70B) encajan en este flujo de trabajo sin cambios de configuración.** Para ficción madura, cambia el modelo de Ollama; las técnicas de documento de sesión y generación de escenas son idénticas. Revisa la licencia de cada modelo para tu uso.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Modelos de partida (según las fichas de modelo):** Qwen3.6 27B (denso, Apache-2.0, contexto de 262.144 tokens), Gemma 4 31B (denso, Apache-2.0, contexto de 256K), Llama 3.3 70B (denso, contexto de 128K, Llama 3.3 Community License).',
          '**Límite de planificación de la ventana de contexto:** ~32K tokens (~24.000 palabras) por generación; los modelos anuncian 128K–262.144 tokens, que es un techo, no una garantía de calidad.',
          '**Tamaño del documento de sesión:** objetivo de menos de 4.000 tokens (fichas de personajes + resúmenes de capítulos + configuración de la escena actual).',
          '**Objetivo de generación de escenas:** 200–600 palabras por llamada de generación; escenas más largas mediante múltiples prompts secuenciales.',
          '**Formato de guion:** combina Ollama con instrucciones de salida en formato Fountain para texto con formato de guion.',
          '**Herramientas de escritura que funcionan con Ollama:** Scrivener (pega la salida; sin API de plugins documentada), Obsidian (mediante plugin local o scripts), VS Code (mediante Continue.dev o llamadas API directas), terminal pura.',
          '**Opción con pocos rechazos:** Hermes 4 70B (base Llama-3.1-70B) para ficción madura; mismo flujo de trabajo, misma técnica de documento de sesión.',
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: 'El problema de la ventana de contexto para escritura de formato largo',
        image: '/images/local-llm-screenwriting-and-novel-drafting-context-window-en.svg',
        imageCaption:
          'Planificación del contexto: límite de trabajo de 32K tokens (~24.000 palabras) frente a los 128K–262.144 anunciados.',
        content:
          '**Planifica en torno a 32K tokens por generación, aunque un modelo anuncie mucho más.** Es una regla de planificación prudente de PromptQuorum, no un límite medido: la investigación sobre contextos largos (Liu et al., "Lost in the Middle") encontró que los modelos usan con más fiabilidad la información del inicio y del final de una entrada larga que la del medio, y que la calidad puede caer al crecer la entrada. Los modelos nuevos anuncian ventanas mucho mayores — Qwen3.6 27B anuncia 262.144 tokens nativos y Gemma 4 31B, 256K —, así que prueba tu propio modelo. Para una novela, pegar el manuscrito hasta ahora y pedir el siguiente capítulo sigue siendo el método menos fiable, y un contexto largo también consume más memoria porque la caché KV crece con él.\n\nKimi-K2.6 de Moonshot AI anuncia una ventana de contexto de 256K tokens (262.144), de la misma clase que los modelos anteriores, pero es un modelo de mezcla de expertos con en torno a 1 billón de parámetros totales (32.000 millones activos) y pesos int4 nativos. Incluso a 4 bits, solo los pesos suman unos 500 GB (estimación de PromptQuorum: 1 billón de parámetros × 0,5 byte), así que es un modelo de clase servidor, no de portátil. La técnica del documento de sesión y la generación escena por escena se aplican a modelos ejecutables en local de cualquier tamaño de contexto.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Un techo de planificación prudente para la adherencia al contexto en LLMs locales es de unos 32.000 tokens (~24.000 palabras) por generación — más allá, la investigación sobre contextos largos encuentra un uso menos fiable del contenido anterior, lo que puede notarse como deriva de voz e inconsistencias de trama a lo largo de un manuscrito largo.',
          },
          {
            type: 'plain-terms',
            text: 'No puedes esperar que el modelo recuerde lo que pasó en el capítulo 3 mientras escribe el capítulo 20 solo porque todo tu manuscrito cabe en su ventana de contexto. En cambio, comprime lo que el modelo necesita saber — fichas de personajes, resúmenes de capítulos, configuración de la escena actual — en un "documento de sesión" de menos de 4.000 tokens, e inyecta eso al inicio de cada sesión de escritura. El modelo solo necesita saber lo que es relevante para la escena que está generando ahora mismo.',
          },
        ],
        items: [
          '**Conversión token a palabra:** 1 token ≈ 0,75 palabras en inglés (regla general). 32K tokens ≈ 24.000 palabras. 128K tokens ≈ 96.000 palabras (aproximadamente una novela); 262.144 tokens ≈ 196.000 palabras.',
          '**Degradación de la atención:** los modelos pueden perder la referencia confiable al contenido del inicio de una ventana de contexto larga. Esto se manifiesta como errores en nombres de personajes, puntos de trama olvidados y deriva de voz respecto al registro establecido.',
          '**La asimetría:** en el estudio Lost in the Middle, los modelos usaron mejor el inicio y el final de la entrada y el contenido del medio de forma menos fiable. El estudio probó modelos disponibles en 2023, así que prueba los modelos actuales en lugar de asumir el mismo patrón.',
          '**El documento de sesión como solución:** comprime todo lo que el modelo necesita en un documento estructurado corto. Inyéctalo al inicio. Genera la escena. Termina la sesión. Reinicia. Comienza de nuevo con el mismo documento de sesión actualizado para reflejar la nueva escena.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No pegues el manuscrito completo en el contexto. Si tu novela supera las 10.000 palabras y pegas el borrador completo para pedir el siguiente capítulo, corres el riesgo de deriva de contexto — el modelo puede olvidar detalles tempranos de personajes, contradecir puntos de trama establecidos y regresar a un registro genérico. Usa la técnica del documento de sesión.',
          },
        ],
      },
      sessionDocument: {
        id: 'session-document',
        title: 'Técnica del documento de sesión',
        content:
          'La técnica del documento de sesión es una recomendación de flujo de trabajo de PromptQuorum basada en los límites de contexto descritos arriba. PromptQuorum no la ha sometido a una prueba controlada, y los tamaños de abajo (4.000 tokens, 150 palabras por ficha de personaje, 100–150 palabras por resumen de capítulo) son pautas de planificación, no umbrales medidos.\n\n**El documento de sesión es un archivo de texto plano que mantienes junto a tu manuscrito — es el estado comprimido de tu novela que el modelo necesita conocer para generar contenido consistente.** Tiene tres secciones: fichas de personajes activos, resúmenes de capítulos y la configuración de la escena actual.',
        promptExamples: [
          {
            label: 'Plantilla del documento de sesión',
            text: '# SESSION DOCUMENT — [NOVEL TITLE]\n\n## ACTIVE CHARACTERS\n**[Character Name]**\nDominant trait: [one trait]\nContradicting behaviour: [one behaviour]\nSpeech register: [formal/casual/specific verbal tics]\nRelationship to [other character]: [brief]\n\n**[Character Name 2]**\n[same structure]\n\n## CHAPTER SUMMARIES (completed)\n**Chapter 1:** [100–150 words — what happened, what changed, where it ended]\n**Chapter 2:** [100–150 words]\n[continue for all completed chapters]\n\n## CURRENT SCENE SETUP\nChapter: [N]\nScene: [brief description of what this scene needs to accomplish]\nPOV: [character name]\nOpening state: [where we are at the start of this scene — 1 sentence]\nEmotional beat to land on: [what the POV character feels at the end — do not state it directly in the scene]\nWord ceiling: [200–500 words]',
          },
        ],
        items: [
          '**Fichas de personajes — objetivo de 150 palabras por personaje activo.** Incluye el rasgo dominante, el comportamiento contradictorio, el registro de habla y la relación clave con los demás personajes activos. Agrega o elimina personajes a medida que se vuelven activos o abandonan el manuscrito.',
          '**Resúmenes de capítulos — objetivo de 100–150 palabras por capítulo completado.** Enfócate en: qué sucedió, qué cambió en las relaciones entre personajes, qué información conoce ahora el lector, dónde terminó el capítulo espacial y emocionalmente. No incluyas cada escena — resume el efecto neto del capítulo.',
          '**Configuración de la escena actual — específica y breve.** Nombra el punto de vista, el propósito de la escena (qué necesita lograr en la historia), el beat emocional al que llegar y el límite de palabras. Esta es la acción que toma el modelo; las fichas de personajes y los resúmenes de capítulos son el contexto que usa para hacerlo de forma consistente.',
          '**Tamaño del documento de sesión — objetivo de menos de 4.000 tokens (~3.000 palabras).** Un documento de sesión que supere esto empieza a consumir espacio de contexto que debería destinarse a la generación en sí. Comprime las fichas de personajes y los resúmenes de forma agresiva.',
          '**Actualiza después de cada sesión.** Después de generar una escena, agrega una actualización de 1–2 oraciones al resumen del capítulo relevante y actualiza cualquier entrada de ficha de personaje que haya cambiado. El documento de sesión es un archivo vivo; mantenerlo actualizado es el costo de mantenimiento de la técnica.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Guarda el documento de sesión en un archivo de texto plano junto a tu manuscrito. Después de cada sesión de escritura, copia y pega el documento de sesión en el mensaje del sistema o el primer turno de usuario de la siguiente sesión. En Ollama, puedes crear un Modelfile con el documento de sesión en el bloque SYSTEM y actualizarlo antes de cada sesión. En SillyTavern, pégalo en el campo de prompt del sistema al inicio de cada sesión de novela.',
          },
        ],
      },
      novelWorkflow: {
        id: 'novel-workflow',
        title: 'Flujo de trabajo para redacción de novelas',
        image: '/images/local-llm-screenwriting-and-novel-drafting-workflow-steps-en.svg',
        imageCaption:
          'Flujo de novela en cuatro fases con un LLM local: esquema, beat sheets, escenas y revisión, con un documento de sesión.',
        content:
          '**El flujo de trabajo de redacción de novelas con un LLM local tiene cuatro fases: esquema, beat sheets por capítulo, generación de escenas y pasadas de revisión.** Cada fase usa una estructura de prompt diferente.',
        items: [
          '**Fase 1 — Esquema:** genera un esquema a nivel de capítulo (10–30 capítulos, una oración por capítulo: qué sucede, qué cambia). Prompt: "Género: [género]. Protagonista: [Nombre + herida central]. Conflicto central: [en una oración]. Escribe un esquema de 20 capítulos — una oración por capítulo, cada oración nombra la escena y el cambio." Revisa y edita el esquema antes de continuar.',
          '**Fase 2 — Beat sheets:** expande cada entrada de capítulo en un beat sheet a nivel de escena (3–8 escenas por capítulo). Prompt por capítulo: "Resumen del capítulo [N]: [pega la entrada de una oración del esquema]. Expande en un beat sheet a nivel de escena: 4–6 escenas, cada una descrita en una oración que nombra la ubicación, los participantes y el único cambio de la escena. Todavía no hay prosa."',
          '**Fase 3 — Generación de escenas:** usa el documento de sesión + el beat de la escena actual para generar una escena a la vez. Consulta las plantillas de generación de escenas más abajo. Genera, revisa, pega en el manuscrito, actualiza el documento de sesión. Repite.',
          '**Fase 4 — Pasadas de revisión:** después de completar un capítulo, ejecuta prompts de revisión específicos en escenas concretas. Consulta [Prompts de LLM local para escritores de ficción](/es/power-local-llm/local-llm-prompts-for-fiction-writers) para las estructuras de prompt de revisión. No pidas al modelo que revise más de una escena por llamada de generación.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Guarda el esquema y los beat sheets en archivos separados del manuscrito. Son el esqueleto — el manuscrito es la carne. Mantenerlos separados significa que puedes regenerar cualquier parte de cualquiera sin sobrescribir el otro, y puedes pegar solo la entrada del beat sheet relevante en la configuración de la escena actual sin incluir el esquema completo.',
          },
        ],
      },
      screenwritingWorkflow: {
        id: 'screenwriting-workflow',
        title: 'Flujo de trabajo para guiones',
        content:
          '**La redacción de guiones con un LLM local usa las mismas técnicas de documento de sesión y beat sheet que la redacción de novelas, con dos adiciones: instrucciones de formato en el prompt del sistema, y la generación del encabezado de escena (slug line) como un paso separado de la generación de páginas.**',
        promptExamples: [
          {
            label: 'Prompt del sistema para guion',
            text: 'You are a screenplay formatting assistant. All prose you generate is formatted in standard US screenplay format:\n- Scene headers: INT./EXT. LOCATION — DAY/NIGHT\n- Action lines: present tense, concrete, maximum 3 lines per block\n- Character names: ALL CAPS above dialogue\n- Dialogue: centred, no dialogue tags\n- Parentheticals: sparingly, only for delivery or action mid-dialogue\n\nGenerate in Fountain-compatible plain text.',
          },
          {
            label: 'Prompt de beat de escena a páginas de guion',
            text: 'Beat: [paste the one-sentence scene beat from the beat sheet]\nPOV character: [Name]\nPage target: [1–3 pages]\n\nGenerate the script pages for this beat. Use standard screenplay format. Begin with the slug line. No narration — action lines and dialogue only.',
          },
        ],
        items: [
          '**El formato va en el prompt del sistema, no en el turno del usuario.** Colocar las instrucciones de formato de guion en el mensaje del sistema significa que cada generación de la sesión sigue el formato sin repetir la instrucción.',
          '**Salida compatible con Fountain:** Fountain es un formato de marcado de texto plano para guiones; Highland y Fade In lo leen, igual que otras apps del [directorio de apps de Fountain](https://fountain.io/apps). Pedir al modelo que genere "texto plano compatible con Fountain" produce una salida que puedes abrir en esas herramientas o convertir para otras (consulta la pregunta sobre Final Draft en las preguntas frecuentes).',
          '**Las slug lines primero:** genera la slug line (INT./EXT. UBICACIÓN — DÍA/NOCHE) como un prompt de una sola línea separado antes de generar el contenido de la escena. Esto ancla la ubicación física antes de que el modelo comience a generar la acción.',
          '**Pasadas de diálogo:** después de generar las líneas de acción, ejecuta una pasada de diálogo separada: "Las líneas de acción están definidas. Escribe el diálogo para [Personaje A] y [Personaje B] en esta escena. El personaje A quiere [X]. El personaje B quiere [Y]. Sin etiquetas de diálogo. 5–8 intercambios."',
          '**Gestión del recuento de páginas:** no hay una cifra fija de palabras por página, y "una página equivale a un minuto" es solo una regla general. Cuenta el promedio de palabras por página de tu propio guion y fija los límites de palabras a partir de ahí.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La disciplina de beat-sheet-first importa más para la redacción de guiones que para la de novelas. Una escena de guion tiene una función estructural específica (configuración, confrontación, decisión, giro) y un objetivo de páginas específico. Generar páginas sin un beat sheet produce escenas que derivan en longitud y pierden su propósito estructural. Siempre sabe qué debe lograr una escena antes de generar las páginas.',
          },
        ],
      },
      sceneGeneration: {
        id: 'scene-generation',
        title: 'Plantillas de generación de escenas para trabajos de formato largo',
        content:
          '**La generación de escenas de formato largo requiere el documento de sesión como prefijo y un único prompt de escena como acción.** Las plantillas a continuación asumen que el documento de sesión ya está en el mensaje del sistema o en el primer turno del usuario.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para ficción de formato largo, un patrón de generación confiable es: documento de sesión en el prompt del sistema → único prompt de escena en el turno del usuario → revisar → actualizar el documento de sesión → repetir, una escena por sesión.',
          },
          {
            type: 'plain-terms',
            text: 'El modelo necesita saber tres cosas para escribir la siguiente escena de forma consistente: quiénes son estos personajes (fichas de personajes), qué ya ha sucedido (resúmenes de capítulos) y qué necesita hacer esta escena (configuración de la escena). Dale exactamente esas tres cosas, nada más. Luego genera la escena, pégala en tu manuscrito y actualiza el documento de sesión para reflejar qué cambió. Repite.',
          },
        ],
        promptExamples: [
          {
            label: 'Prompt de generación de escena de novela',
            text: '[SESSION DOCUMENT ALREADY IN SYSTEM PROMPT]\n\nCurrent scene:\nChapter: [N]\nBeat: [one sentence from the beat sheet]\nPOV: [character name]\nOpening: [one sentence — where we are, who is present]\nEmotional landing: [what the POV character feels at the end — show, don\'t state]\nWord ceiling: [300–500 words]\n\nWrite this scene. No summarising. Every sentence renders a moment.',
          },
          {
            label: 'Prompt de comprobación de continuidad',
            text: 'Before writing the next scene, check for continuity. The session document says:\n- [Character A] is [trait/state]\n- The last scene ended with [brief description]\n\nThe next scene opens with [brief description]. Does this transition make sense? If not, what needs to change in the transition? One paragraph answer only.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Usa el prompt de comprobación de continuidad en las transiciones de capítulos — no en cada escena. Las transiciones de capítulos (donde cambia la ubicación, el tiempo o el personaje de punto de vista) son donde más frecuentemente ocurren los cortes de continuidad y donde la comprobación aporta mayor valor.',
          },
        ],
      },
      tools: {
        id: 'tools',
        itemHeadings: true,
        title: 'Integraciones de herramientas para escritores',
        content:
          '**Ollama expone una API compatible con OpenAI en localhost a la que se conecta un ecosistema creciente de herramientas orientadas a escritores.** Las integraciones a continuación representan las opciones más consolidadas a partir de 2026.',
        columns: ['Herramienta', 'Enlace', 'Integración', 'Ideal para'],
        rows: [
          { 'Herramienta': 'Obsidian', 'Enlace': '[obsidian.md](https://obsidian.md)', 'Integración': 'Plugin Copilot o Smart Connections → API de Ollama. Consulta [Obsidian + plugins de LLM local](/es/power-local-llm/local-llm-with-obsidian-2026) para la guía detallada sobre qué plugins de Obsidian funcionan mejor con Ollama.', 'Ideal para': 'Escritores que ya usan Obsidian para notas + manuscrito; generación integrada en la misma app sin cambiar de contexto' },
          { 'Herramienta': 'Scrivener', 'Enlace': '[literatureandlatte.com/scrivener](https://www.literatureandlatte.com/scrivener)', 'Integración': 'Script externo mediante API de Ollama → pegar en el documento', 'Ideal para': 'Escritores que estructuran novelas en Scrivener; borradores de IA pegados en la estructura de proyecto existente' },
          { 'Herramienta': 'VS Code', 'Enlace': '[code.visualstudio.com](https://code.visualstudio.com)', 'Integración': 'Extensión Continue.dev → backend de Ollama', 'Ideal para': 'Escritores técnicos y diseñadores de narrativas para videojuegos cómodos en un editor de código' },
          { 'Herramienta': 'SillyTavern', 'Enlace': '[github.com/SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern)', 'Integración': 'API compatible con OpenAI → Ollama', 'Ideal para': 'Ficción de tipo roleplay y redacción guiada por fichas de personajes; memoria persistente de personajes' },
          { 'Herramienta': 'Terminal pura', 'Integración': '`ollama run [model]` o curl a la API de Ollama', 'Ideal para': 'Flujos de trabajo scriptables; escritores que quieren máximo control con mínima sobrecarga de interfaz' },
          { 'Herramienta': 'LM Studio', 'Enlace': '[lmstudio.ai](https://lmstudio.ai)', 'Integración': 'Interfaz de chat integrada + API de servidor local', 'Ideal para': 'Escritores que quieren un gestor de modelos con GUI sin instalar Ollama por separado' },
          { 'Herramienta': 'NovelCrafter', 'Enlace': '[novelcrafter.com](https://www.novelcrafter.com)', 'Integración': 'Integración de IA incorporada; sus páginas de ayuda enumeran conexiones con LM Studio, Ollama y endpoints compatibles con la API de OpenAI', 'Ideal para': 'Escritores que quieren asistencia de IA a nivel de capítulo dentro de una única app enfocada en novelas' },
          { 'Herramienta': 'Plottr', 'Enlace': '[plottr.com](https://plottr.com)', 'Integración': 'Flujo de trabajo manual: estructura novelas en Plottr, pega escenas/beats en Ollama externamente (Plottr indica que no añadirá funciones de IA)', 'Ideal para': 'Ficción de género con mucha trama (misterio, thriller, fantasía) donde el trazado estructural de la trama es el eje del flujo de trabajo' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La integración más sencilla que funciona para la mayoría de los escritores es Obsidian + el plugin Copilot apuntando a Ollama. Tu documento de sesión vive en una nota de Obsidian, los capítulos de tu manuscrito viven en el mismo vault y generas directamente en la misma app sin cambiar de contexto. El plugin Copilot pasa el texto seleccionado o la nota actual a Ollama y devuelve la completación en línea. Consulta [Obsidian + plugins de LLM local](/es/power-local-llm/local-llm-with-obsidian-2026) para la guía detallada.',
          },
        ],
      },
      models: {
        id: 'models',
        itemHeadings: true,
        title: 'Recomendaciones de modelos para trabajos de formato largo',
        content:
          '**La redacción de formato largo tiene requisitos de modelo diferentes a los de la ficción de formato corto.** La adherencia al contexto, la consistencia en el seguimiento de instrucciones a lo largo de sesiones extensas y la capacidad de mantener la voz en múltiples llamadas de generación son los factores decisivos. Las filas de abajo son puntos de partida tomados de la ficha de cada modelo; PromptQuorum no ha evaluado estos modelos para ficción, y las clasificaciones públicas de escritura creativa puntúan los modelos de forma distinta, así que prueba dos candidatos con una escena tuya. Los modelos abiertos de clase servidor como Command A+ (218.000 millones de parámetros totales, 25.000 millones activos, Apache 2.0) y Mistral Large 3 (675.000 millones de parámetros totales, contexto de 256K, Apache 2.0) quedan fuera del alcance del hardware de consumo. Para el panorama más amplio de modelos en todos los casos de uso, consulta [Mejores LLMs locales en 2026](/es/local-llms/best-local-llms-2026).',
        columns: ['Tarea', 'Modelo recomendado', 'Por qué'],
        rows: [
          { 'Tarea': 'Redacción de novela (principal)', 'Modelo recomendado': 'Qwen3.6 27B o Gemma 4 31B', 'Por qué': 'Modelos densos de 27B–31B con contexto anunciado de 256K+ y licencias Apache; una clase de tamaño que encaja en una GPU de 24 GB o en 32 GB+ de memoria unificada a 4 bits (estimación)' },
          { 'Tarea': 'Redacción de guion', 'Modelo recomendado': 'Qwen3.6 27B o Llama 3.3 70B', 'Por qué': 'La adherencia al formato depende sobre todo del prompt del sistema; prueba una escena en Fountain con dos modelos. Llama 3.3 70B es denso, anuncia contexto de 128K y necesita unos 40 GB a 4 bits (estimación)' },
          { 'Tarea': 'Generación de beat sheet / esquema', 'Modelo recomendado': 'Qwen3.6 35B-A3B', 'Por qué': 'Mezcla de expertos con 3B de 35B parámetros activos por token (Apache-2.0), por lo que genera más rápido por token; PromptQuorum no ha evaluado la calidad de los esquemas' },
          { 'Tarea': 'Pasadas de diálogo', 'Modelo recomendado': 'El modelo cuyas muestras encajen', 'Por qué': 'Haz el diálogo como pasada aparte con el modelo cuyas líneas de calibración coincidan con el registro de tu personaje; no hay una clasificación verificada de modelos para diálogo' },
          { 'Tarea': 'Revisión (estructural)', 'Modelo recomendado': 'El modelo con el que redactaste', 'Por qué': 'Los prompts de revisión que nombran una restricción estructural por llamada funcionan con cualquier modelo que siga instrucciones; una escena por llamada' },
          { 'Tarea': 'Ficción madura / oscura', 'Modelo recomendado': 'Hermes 4 70B', 'Por qué': 'Base Llama-3.1-70B; Nous Research describe una alineación en general neutral y menos rechazos; licencia Llama 3; modo de razonamiento híbrido' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        items: [
          '**Pegar el manuscrito completo en el contexto.** Aunque un modelo anuncie una ventana de 128K–262K, las entradas largas se usan con menos fiabilidad, así que planifica en torno a 32K tokens. Usa la técnica del documento de sesión — fichas de personajes y resúmenes de capítulos comprimidos.',
          '**Pedir al modelo que "continúe" un documento abierto.** "Continúa la novela" produce deriva. "Escribe la siguiente escena: [configuración específica, punto de vista, límite de palabras]" produce una salida consistente y acotada que puedes evaluar y pegar.',
          '**Sin beat sheets para guiones.** Generar páginas de guion sin un beat de escena produce páginas que derivan en longitud y pierden su función estructural. Genera siempre el beat sheet primero.',
          '**Ignorar las actualizaciones del documento de sesión.** Si no actualizas el resumen del capítulo después de generar una escena, el documento de sesión queda obsoleto. Un documento de sesión obsoleto produce inconsistencias en pocas sesiones.',
          '**Generar más de una escena por sesión.** La generación de múltiples escenas dentro de una ventana de contexto produce la primera escena bien y cada escena subsiguiente con menor consistencia. Una escena por sesión; reinicia y vuelve a inyectar.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Ficha de modelo Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) y [ficha de modelo Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — parámetros, contexto nativo de 262.144 tokens, extensión YaRN, Apache-2.0, consultadas el 26 de octubre de 2026',
          '[Ficha de modelo Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it) — 31B denso, contexto de 256K, Apache 2.0, consultada el 26 de octubre de 2026',
          '[Ficha de modelo Llama 3.3 70B Instruct](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) — 70B, contexto de 128K, Llama 3.3 Community License, publicado el 6 de diciembre de 2024',
          '[Ficha de modelo Hermes 4 70B](https://huggingface.co/NousResearch/Hermes-4-70B) — base Llama-3.1-70B, razonamiento híbrido, "broadly neutral alignment"',
          '[Ficha de modelo Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) — 1 billón de parámetros totales y 32.000 millones activos, contexto de 256K, int4 nativo',
          '[Documentación de Command A+](https://docs.cohere.com/docs/command-a-plus) y [ficha de modelo Mistral Large 3](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512) — recuento de parámetros y licencias de los modelos de clase servidor',
          '[Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172) — Liu et al., 2023',
          '[Fountain.io](https://fountain.io) — especificación del formato de guion Fountain y [lista de apps](https://fountain.io/apps)',
          '[Centro de ayuda de Final Draft](https://kb.finaldraft.com/hc/en-us/articles/15575076862228-Can-Final-Draft-import-a-file-written-in-a-Fountain-based-screenwriting-program) — indica que Final Draft no puede importar archivos .fountain directamente',
          '[Reglas de IA de Amazon KDP, Publishers Weekly](https://www.publishersweekly.com/pw/by-topic/digital/content-and-e-books/article/93122-amazon-issues-new-ai-guidelines-for-its-kdp-platform.html) y [envíos a Clarkesworld](https://clarkesworldmagazine.com/submissions/) — políticas de IA de editoriales y plataformas; comprueba la redacción vigente antes de enviar',
          '[Notas de versión de Scrivener](https://www.literatureandlatte.com/scrivener/release-notes) — versiones 3.4.0 a 3.5.2 (diciembre de 2025): sin entradas de plugins ni API; "Scrivener itself contains no AI"; consultadas el 26 de octubre de 2026',
          '[Plottr in 2026](https://plottr.com/plottr-in-2026/) y [ayuda de NovelCrafter sobre conexiones de IA](https://www.novelcrafter.com/help/categories/ai-connections) — Plottr indica que no desarrolla funciones de IA; NovelCrafter enumera conexiones con LM Studio, Ollama y endpoints compatibles con la API de OpenAI',
          'Documentación de la API de Ollama — [Ollama](https://ollama.com/docs)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puede un LLM local escribir una novela completa?',
            a: 'Un LLM local puede generar la prosa de una novela completa, pero la inteligencia estructural y editorial tiene que venir del escritor. El modelo genera escenas cuando recibe planteamientos concretos; no planifica, evalúa ni toma decisiones temáticas por sí solo. Úsalo como un generador rápido de primeros borradores de escenas que ya sabes escribir: ahorra tiempo frente a la página en blanco, mientras que el escritor sigue tomando todas las decisiones importantes. Revisa las políticas de IA de editoriales y plataformas antes de enviar (consulta la pregunta sobre editores más abajo).',
          },
          {
            q: '¿Cuál es la ventana de contexto máxima que puedo usar de forma confiable?',
            a: 'Los modelos anuncian de 128K a 262.144 tokens, pero PromptQuorum recomienda planificar en torno a 32K tokens (~24.000 palabras) por generación, porque la investigación sobre contextos largos indica que los modelos usan con menos fiabilidad el medio de entradas largas. Es una regla de planificación prudente, no un límite medido para todos los modelos, así que prueba el tuyo. La técnica del documento de sesión mantiene el contexto de trabajo por debajo de 4.000–6.000 tokens, de modo que cada llamada de generación queda bien dentro de ese rango.',
          },
          {
            q: '¿Cómo evito que el modelo cambie la voz de mi personaje a mitad de la novela?',
            a: 'La deriva de voz tiene dos causas: un documento de sesión obsoleto (con desarrollos recientes del personaje ausentes) y la dilución del contexto (la ficha del personaje está demasiado lejos de la generación activa en el contexto). Solución: mantén la ficha del personaje en el mensaje del sistema (no enterrada en un preámbulo largo del turno del usuario), actualiza la ficha después de cualquier escena donde el personaje tenga un momento de arco significativo y mantén la ficha suficientemente concisa para que quepa en la sección superior del contexto de cada sesión.',
          },
          {
            q: '¿Puedo usar Scrivener con un LLM local?',
            a: 'No de forma nativa — Scrivener 3 no documenta ningún sistema de plugins, y sus notas de versión oficiales hasta la 3.5.2 (diciembre de 2025) no mencionan ninguna integración de IA: las notas de la 3.4.0 dicen "Scrivener itself contains no AI" y añaden compatibilidad con las Writing Tools de Apple, una función del sistema macOS. Un flujo habitual es: generar en Ollama (por terminal o con un script auxiliar), copiar la salida y pegarla en el documento de Scrivener correspondiente. Algunos escritores usan Obsidian como capa de redacción con IA e importan los capítulos terminados a Scrivener para la estructura final. Los scripts que llaman a la API de Ollama y copian la salida al portapapeles son lo más parecido a una integración nativa.',
          },
          {
            q: '¿Qué es mejor para redactar guiones: Ollama o una IA en la nube?',
            a: 'Para guionistas que necesitan generar contenido maduro (violencia, psicología oscura, personajes moralmente complejos), un modelo local da control sobre el modelo y su comportamiento de rechazo: algunos modelos alojados rechazan o suavizan contenido que aparece en guiones dramáticos, y las políticas de los servicios alojados cambian con el tiempo. Un modelo local con pocos rechazos, como Hermes 4 70B, tiene menos rechazos incorporados, aunque sigues siendo responsable del contenido que generas y publicas. La consistencia de formato depende sobre todo de las instrucciones del prompt del sistema, que funcionan en ambos casos. La elección trata sobre todo de control del contenido, privacidad y coste; PromptQuorum no ha comparado la calidad de salida entre modelos alojados y locales para guion.',
          },
          {
            q: '¿Cómo genero diálogo que suene como un personaje específico?',
            a: 'Enfoque de tres pasos: (1) Agrega el registro de habla del personaje al documento de sesión ("formal, evita contracciones, comienza las oraciones con calificaciones como \'Me parece que...\'"). (2) Genera 3–5 líneas de diálogo de muestra de este personaje en un contexto neutral como paso de calibración al inicio de la sesión. (3) Usa esas líneas de muestra como ejemplo en el prompt de diálogo: "Escribe el diálogo con el mismo registro que estos ejemplos: [pega las muestras]." El paso de calibración es la técnica más efectiva para la consistencia de voz del personaje.',
          },
          {
            q: '¿Necesito una GPU para usar un LLM local en la redacción de novelas?',
            a: 'Una GPU acelera mucho la generación, pero no es obligatoria. En Apple Silicon, la memoria unificada permite que un MacBook Pro de 16 GB ejecute modelos más pequeños (aproximadamente la clase de 8B–14B a 4 bits, una estimación) — más lento que un equipo con GPU de 24 GB, pero aceptable cuando lees y evalúas la salida entre generaciones. Una GPU NVIDIA de 24 GB (RTX 4090, RTX 3090) admite modelos de la clase 27B–32B a 4 bits (estimación); los modelos de clase 70B necesitan unos 40 GB o más a 4 bits, por lo que requieren dos GPU, una tarjeta de 48 GB, 64 GB de memoria unificada o descarga a la CPU, más lenta.',
          },
          {
            q: '¿Puedo usar LLMs locales con Final Draft u otro software profesional de guiones?',
            a: 'No directamente. Según el centro de ayuda de Final Draft, Final Draft no puede importar archivos .fountain; su recomendación es guardar el texto como .txt sin formato y elegir Script (no Text) al importar, o traerlo como FDX desde una app que exporte ese formato. Highland convierte entre Fountain, FDX y PDF, y Fade In importa y exporta Fountain (según el directorio de apps de Fountain). Flujo: genera texto en formato Fountain con Ollama, ábrelo en Highland o Fade In y exporta FDX para Final Draft.',
          },
          {
            q: '¿Puedo usar Kimi-K2.6 localmente para redactar novelas?',
            a: 'Kimi-K2.6 anuncia una ventana de contexto de 256K tokens, de la misma clase que Qwen3.6 27B y Gemma 4 31B, pero es un modelo de mezcla de expertos con en torno a 1 billón de parámetros totales (32.000 millones activos) y pesos int4 nativos. Solo los pesos suman unos 500 GB (estimación de PromptQuorum), así que necesita un servidor con varias GPU o un equipo con memoria unificada enorme y es poco práctico en hardware de consumo. Para flujos totalmente locales, un modelo denso de 27B–70B con la técnica del documento de sesión cubre trabajos de longitud de novela sin un modelo de un billón de parámetros.',
          },
          {
            q: '¿Qué opinan los editores sobre los manuscritos asistidos por IA?',
            a: 'Las políticas varían según la editorial y la plataforma y siguen cambiando en 2026, así que consulta la concreta antes de enviar. Amazon KDP exige avisar cuando el texto, las imágenes o las traducciones son generados por IA, y trata el contenido creado con una herramienta de IA como generado por IA aunque lo edites a fondo; el texto que escribiste tú y que la IA solo ayudó a editar o pulir es "asistido por IA" y no requiere declaración (según las normas de Amazon recogidas por Publishers Weekly en septiembre de 2023). Algunas revistas rechazan de plano el trabajo con IA — las pautas de envío de Clarkesworld dicen que no considera relatos escritos, coescritos o asistidos por IA. El texto de escenas generado por un LLM local entra en definiciones como la de "generado por IA" de KDP, así que decláralo donde se exija. Esta es información general, no asesoramiento legal.',
          },
          {
            q: '¿Qué hardware necesito para contextos de un millón de tokens?',
            a: 'Qwen3.6 27B y Qwen3.6 35B-A3B anuncian un contexto nativo de 262.144 tokens que, según sus fichas de modelo, puede ampliarse hasta unos 1.010.000 tokens con escalado YaRN. Un contexto largo necesita memoria para la caché KV además de los pesos, así que una ejecución de un millón de tokens exige mucha más memoria que una configuración de consumo típica; PromptQuorum no ha medido el requisito. La técnica del documento de sesión de este artículo está pensada justo para ese hueco: salida consistente de formato largo sin depender de una ventana de un millón de tokens.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Prompts de LLM local para escritores de ficción: plantillas y técnicas](/es/power-local-llm/local-llm-prompts-for-fiction-writers) — plantillas de escritura de escenas, diálogo, personajes, construcción de mundos y transferencia de estilo que funcionan dentro del flujo de trabajo del documento de sesión.',
          '[Mejores LLMs locales en 2026](/es/local-llms/best-local-llms-2026) — comparación completa de modelos en todos los casos de uso, incluida escritura creativa, programación y razonamiento.',
          '[Obsidian + plugins de LLM local](/es/power-local-llm/local-llm-with-obsidian-2026) — guía más detallada sobre qué plugins de Obsidian funcionan mejor con Ollama para flujos de trabajo de escritura.',
          '[Mejores LLMs locales para escritura creativa 2026](/es/power-local-llm/best-local-llm-creative-writing) — comparación de modelos para generación narrativa, incluidas las configuraciones de muestreo y los requisitos de hardware.',
          '[LLMs locales sin censura para escritura creativa: ética y configuración](/es/power-local-llm/uncensored-local-llm-creative-writing-ethics) — cuándo usar modelos sin censura para ficción madura y cómo configurarlos en el mismo flujo de trabajo de Ollama.',
          '[SillyTavern vs Agnai vs RisuAI: mejor frontend de roleplay local](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — opciones de frontend para redacción guiada por fichas de personajes y ficción colaborativa.',
          '[Continue.dev vs Cline vs Aider: mejor asistente de código local](/es/power-local-llm/continue-dev-vs-cline-vs-aider-local) — la misma extensión IDE Continue.dev usada para asistencia en código puede apuntarse a Ollama para asistencia de escritura en línea en VS Code.',
          '[Prompting con cadena de pensamiento explicado](/es/prompt-engineering/chain-of-thought-prompting) — prompts de razonamiento estructurado aplicables a la planificación de tramas, el análisis de beats narrativos y la resolución de problemas narrativos.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Redactar novelas y guiones con LLMs locales: guía de flujo de trabajo para más de 100.000 palabras',
      description: 'Flujo de trabajo completo para usar LLMs locales en la redacción de novelas y guiones: selección de modelos, gestión del contexto, andamiaje por capítulos, generación de escenas e integraciones de herramientas para escritores.',
      url: 'https://www.promptquorum.com/es/power-local-llm/local-llm-screenwriting-and-novel-drafting',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-10-26',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
},

  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-26',
    theme: 'Creative & Roleplay',
    heroImage: '/images/local-llm-screenwriting-and-novel-drafting-overview-hero-de.webp',
    title: 'Romane und Drehbücher mit lokalen LLMs verfassen: Workflow-Leitfaden für 100K+ Wörter',
    seoTitle: 'Lokales LLM-Drehbuch- & Romanschreiben offline 2026',
    intro:
      'Lokale LLMs lassen sich in den Schreib-Workflow für Romane und Drehbücher integrieren: Szenentwürfe, Beat Sheets, Dialogdurchläufe und Überarbeitungsrunden — ohne Internetzugang, Cloud-Logging oder Nutzungslimits. Dieser Leitfaden deckt den vollständigen Workflow ab: Modellauswahl, Kontextfensterverwaltung für Langformarbeiten, Kapitelstruktur, Szenengenerierung und Tools, die ein lokales LLM mit Ihrer Schreibsoftware verbinden.',
    metaDescription:
      'Workflow für lokale LLMs beim Roman- und Drehbuchschreiben: Modellauswahl, Kontextverwaltung, Kapitelstruktur, Szenengenerierung und Tool-Integration.',
    twitterDescription:
      'Lokale LLMs für Roman- und Drehbuchautoren: Kontextfensterverwaltung, Kapitelstruktur, Szenengenerierung, Dialogdurchläufe und Tool-Integrationen.',
    current_models_mentioned: [
      'Qwen3.6 27B',
      'Gemma 4 31B',
      'Llama 3.3 70B',
      'Hermes 4 70B',
      'Kimi-K2.6',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      'Drehbuchautorinnen und -autoren, Romanschriftstellerinnen und -schriftsteller sowie narrative Game-Designer, die lokale LLMs als Entwurfsassistenten für umfangreiche kreative Arbeiten einsetzen möchten — für Kontextfensterverwaltung, Entwurfsgenerierung und KI-Integration in bestehende Schreibtools.',
    readTime: '15 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM screenwriting novel drafting',
    targetKeywords: [
      'lokales LLM Roman schreiben',
      'lokales LLM Drehbuch',
      'Ollama kreatives Schreiben Workflow',
      'Kontextfenster Langform Fiktion',
      'lokaler KI Schreibassistent',
      'Szenengenerierung lokales Modell',
    ],
    leadAnswerBlock:
      '**Die größte Herausforderung bei lokalen LLMs für Langform-Fiktion ist die Kontextverwaltung: etwa 32.000 Token pro Generierung einplanen und je Szene ein komprimiertes „Session-Dokument“ (Charakterbögen, Kapitelzusammenfassungen, Szenen-Setup) statt des ganzen Manuskripts geben.**',
    quickAnswerTop: {
      de: {
        question: 'Wie verwendet man ein lokales LLM für Roman- oder Drehbucharbeiten, ohne den Kontext zu verlieren?',
        answer:
          'Die Kerntechnik ist strukturiertes Context-Injection: Statt das gesamte Manuskript in das Kontextfenster einzufügen, ein komprimiertes Session-Dokument pflegen — Charakterbogen (Name, dominantes Merkmal, Sprachregister), Handlungszusammenfassung abgeschlossener Kapitel (100–200 Wörter pro Kapitel) und Setup der aktuellen Szene (Beat, POV, Wortobergrenze). Dieses Dokument zu Beginn jeder Schreibsitzung injizieren. Eine Szene nach der anderen generieren, statt das Modell ein wachsendes Dokument fortsetzen zu lassen. Da jeder Aufruf nur den komprimierten Stand enthält, skaliert der Ansatz auf jede Romanlänge und verringert den Kontextdrift und Stimmverlust, von dem Autoren berichten, wenn sie ein ganzes Manuskript in ein einziges langes Kontextfenster packen.',
        bullets: [
          'Session-Dokument-Technik: Charakterbögen + Kapitelzusammenfassungen + aktuelles Szenen-Setup zu Sitzungsbeginn injizieren.',
          'Eine Szene nach der anderen generieren — das Modell möglichst nicht bitten, ein wachsendes Dokument über etwa 32.000 Token hinaus „fortzusetzen“.',
          'Beat-Sheet-First beim Drehbuchschreiben: Beat Sheet vor der Prosa generieren; als strukturelles Gerüst verwenden.',
          'Modell-Ausgangspunkte (Angaben laut Modellkarten): Qwen3.6 27B, Gemma 4 31B, Llama 3.3 70B; PromptQuorum hat sie nicht für Fiktion getestet.',
          'Ollama + Obsidian ist ein verbreiteter Autoren-Workflow; für Scrivener ist keine Plugin-API dokumentiert, die Ausgabe wird daher eingefügt.',
          'Faustregel zum Kontextfenster: Modelle geben 128K–262.144 Token an; pro Generierung etwa 32.000 einplanen, weil die Qualität bei langen Kontexten uneinheitlich ist.',
          'Low-Refusal-Fine-Tunes wie Hermes 4 70B nutzen denselben Workflow für reife Fiktion; die Lizenz des jeweiligen Modells prüfen.',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Schnellfakten', anchor: '#quick-facts' },
      { label: 'Das Kontextfensterproblem', anchor: '#context-window' },
      { label: 'Session-Dokument-Technik', anchor: '#session-document' },
      { label: 'Roman-Drafting-Workflow', anchor: '#novel-workflow' },
      { label: 'Drehbuch-Workflow', anchor: '#screenwriting-workflow' },
      { label: 'Szenengenerierungs-Templates', anchor: '#scene-generation' },
      { label: 'Tool-Integrationen', anchor: '#tools' },
      { label: 'Modellempfehlungen', anchor: '#models' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Faustregel zum Kontextfenster: 128K–262.144 Token angegeben, etwa 32K geplant.** Modelle nutzen die Mitte langer Eingaben weniger zuverlässig („Lost in the Middle“); etwa 32.000 Token pro Generierung einplanen.',
          '**Die Session-Dokument-Technik ist die Kernkompetenz.** Eine komprimierte Textdatei pflegen: aktive Charakterbögen (150 Wörter pro Charakter), Kapitelzusammenfassungen (100–200 Wörter pro Kapitel) und das Setup der aktuellen Szene. Zu Beginn jeder Sitzung injizieren.',
          '**Eine Szene pro Sitzung generieren.** Das Modell eine Szene (200–600 Wörter) schreiben lassen, statt es zu bitten, ein wachsendes Dokument fortzusetzen. Eine Szene pro Sitzung verringert Kontextdrift und hilft, die Stimme konsistent zu halten.',
          '**Beat-Sheet-First beim Drehbuchschreiben.** Vor dem Generieren von Skriptseiten zunächst ein szenenweises Beat Sheet generieren. Das Beat Sheet als Gerüst für jede Seitengenerierung nutzen.',
          '**Ein Modell wählen, das sich ausführen lässt, und es an einer eigenen Szene testen.** Dichte Modelle der 27B–31B-Klasse (Qwen3.6 27B, Gemma 4 31B) und Llama 3.3 70B sind gängige Ausgangspunkte; PromptQuorum hat keines davon für Fiktion getestet, und öffentliche Ranglisten zum kreativen Schreiben bewerten Modelle unterschiedlich.',
          '**Ollama + ein Nur-Text-Schreibtool ist eine verlässliche Integration.** Scrivener, Obsidian und VS Code können das Manuskript aufnehmen; Ollama stellt das Modell über eine API bereit, die Begleit-Apps oder Skripte aufrufen können.',
          '**Low-Refusal-Modelle (Hermes 4 70B) fügen sich ohne Setup-Änderungen in diesen Workflow ein.** Für reife Fiktion das Ollama-Modell wechseln; Session-Dokument- und Szenengenerierungs-Techniken bleiben identisch. Die Lizenz jedes Modells für den eigenen Einsatz prüfen.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnellfakten',
        items: [
          '**Modell-Ausgangspunkte (laut Modellkarten):** Qwen3.6 27B (dicht, Apache-2.0, 262.144 Token Kontext), Gemma 4 31B (dicht, Apache-2.0, 256K Kontext), Llama 3.3 70B (dicht, 128K Kontext, Llama 3.3 Community License).',
          '**Planungsgrenze für das Kontextfenster:** ~32.000 Token (~24.000 Wörter) pro Generierung; Modelle geben 128K–262.144 Token an — das ist eine Obergrenze, keine Qualitätsgarantie.',
          '**Größe des Session-Dokuments:** Ziel unter 4.000 Token (Charakterbögen + Kapitelzusammenfassungen + aktuelles Szenen-Setup).',
          '**Szenengenerierungsziel:** 200–600 Wörter pro Generierungsaufruf; längere Szenen über mehrere sequenzielle Prompts.',
          '**Drehbuchformat:** Ollama mit Fountain-Format-Ausgabeanweisungen kombinieren für Skript-formatierten Text.',
          '**Schreibtools, die mit Ollama funktionieren:** Scrivener (Ausgabe einfügen; keine dokumentierte Plugin-API), Obsidian (über lokales Plugin oder Skripte), VS Code (über Continue.dev oder direkte API-Aufrufe), reines Terminal.',
          '**Low-Refusal-Option:** Hermes 4 70B (Basis Llama-3.1-70B) für reife Fiktion; gleicher Workflow, gleiche Session-Dokument-Technik.',
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: 'Das Kontextfensterproblem beim Langformschreiben',
        image: '/images/local-llm-screenwriting-and-novel-drafting-context-window-en.svg',
        imageCaption:
          'Kontextplanung: 32K Token (~24.000 Wörter) als Arbeitsgrenze, gegenüber den 128K–262.144 Token, die offene Modelle angeben.',
        content:
          '**Pro Generierung etwa 32.000 Token einplanen — auch wenn ein Modell weit mehr angibt.** Das ist eine vorsichtige PromptQuorum-Planungsregel, kein gemessenes Limit: Forschung zu langen Kontexten (Liu et al., „Lost in the Middle“) fand, dass Modelle Informationen am Anfang und am Ende einer langen Eingabe zuverlässiger nutzen als solche in der Mitte und dass die Qualität mit wachsender Eingabe sinken kann. Neuere Modelle geben deutlich größere Fenster an — Qwen3.6 27B nativ 262.144 Token, Gemma 4 31B 256K —, daher das eigene Modell testen. Bei einem Roman bleibt es der unzuverlässigste Weg, den bisherigen Entwurf einzufügen und nach dem nächsten Kapitel zu fragen; zudem braucht ein langer Kontext mehr Speicher, weil der KV-Cache mitwächst.\n\nKimi-K2.6 von Moonshot AI gibt ein Kontextfenster von 256K Token (262.144) an, also in derselben Klasse wie die genannten Modelle, ist aber ein Mixture-of-Experts-Modell mit rund 1 Billion Gesamtparametern (32 Milliarden aktiv) und nativen int4-Gewichten. Selbst mit 4 Bit kommen allein die Gewichte auf etwa 500 GB (PromptQuorum-Schätzung: 1 Billion Parameter × 0,5 Byte) — ein Serverklassen-Modell, kein Laptop-Modell. Die Session-Dokument-Technik und die Szene-für-Szene-Generierung gelten für lokal ausführbare Modelle jeder Kontextgröße.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Eine vorsichtige Planungsgrenze für Kontextadhärenz bei lokalen LLMs liegt bei etwa 32.000 Token (~24.000 Wörter) pro Generierung — darüber hinaus nutzen Modelle laut Forschung zu langen Kontexten früheren Inhalt weniger zuverlässig, was sich als Stimmdrift und Plotwidersprüche über ein langes Manuskript zeigen kann.',
          },
          {
            type: 'plain-terms',
            text: 'Man kann nicht darauf vertrauen, dass ein Modell sich an Kapitel 3 erinnert, während es Kapitel 20 schreibt, nur weil das gesamte Manuskript in sein Kontextfenster passt. Stattdessen: alles, was das Modell wissen muss — Charakterbögen, Kapitelzusammenfassungen, aktuelles Szenen-Setup — in ein Session-Dokument mit unter 4.000 Token komprimieren und dieses zu Beginn jeder Schreibsitzung injizieren. Das Modell muss immer nur wissen, was für die Szene relevant ist, die es gerade generiert.',
          },
        ],
        items: [
          '**Token-zu-Wort-Umrechnung:** 1 Token ≈ 0,75 Wörter auf Englisch (Faustregel). 32K Token ≈ 24.000 Wörter. 128K Token ≈ 96.000 Wörter (etwa ein Roman); 262.144 Token ≈ 196.000 Wörter.',
          '**Aufmerksamkeitsdegradation:** Modelle können die zuverlässige Referenz auf Inhalte aus dem frühen Teil eines langen Kontextfensters verlieren — Charakternamensfehler, vergessene Handlungspunkte und Stimmdrift.',
          '**Die Asymmetrie:** In der Studie „Lost in the Middle“ nutzten Modelle den Anfang und das Ende der Eingabe am besten und Inhalte in der Mitte am wenigsten zuverlässig. Die Studie testete Modelle, die 2023 verfügbar waren; aktuelle Modelle daher selbst testen, statt dasselbe Muster anzunehmen.',
          '**Session-Dokument als Lösung:** Alles komprimieren, was das Modell benötigt. Zu Beginn injizieren. Szene generieren. Sitzung beenden. Zurücksetzen. Mit aktualisiertem Session-Dokument neu beginnen.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Nicht das vollständige Manuskript in den Kontext einfügen. Über 10.000 Wörter droht Kontextdrift — das Modell kann frühe Charakterdetails vergessen, Handlungspunkten widersprechen und zu einem generischen Register zurückkehren. Stattdessen die Session-Dokument-Technik verwenden.',
          },
        ],
      },
      sessionDocument: {
        id: 'session-document',
        title: 'Session-Dokument-Technik',
        content:
          'Die Session-Dokument-Technik ist eine PromptQuorum-Workflow-Empfehlung auf Grundlage der oben beschriebenen Kontextgrenzen. PromptQuorum hat sie nicht in einem kontrollierten Test geprüft, und die Größenangaben unten (4.000 Token, 150 Wörter pro Charakterbogen, 100–150 Wörter pro Kapitelzusammenfassung) sind Planungsrichtwerte, keine gemessenen Schwellen.\n\n**Das Session-Dokument ist eine Nur-Text-Datei neben dem Manuskript — der komprimierte Zustand des Romans, den das Modell kennen muss, um konsistenten Inhalt zu generieren.** Es hat drei Abschnitte: aktive Charakterbögen, Kapitelzusammenfassungen und das aktuelle Szenen-Setup.',
        promptExamples: [
          {
            label: 'Session-Dokument-Vorlage',
            text: '# SESSION DOCUMENT — [NOVEL TITLE]\n\n## ACTIVE CHARACTERS\n**[Character Name]**\nDominant trait: [one trait]\nContradicting behaviour: [one behaviour]\nSpeech register: [formal/casual/specific verbal tics]\nRelationship to [other character]: [brief]\n\n**[Character Name 2]**\n[same structure]\n\n## CHAPTER SUMMARIES (completed)\n**Chapter 1:** [100–150 words — what happened, what changed, where it ended]\n**Chapter 2:** [100–150 words]\n[continue for all completed chapters]\n\n## CURRENT SCENE SETUP\nChapter: [N]\nScene: [brief description of what this scene needs to accomplish]\nPOV: [character name]\nOpening state: [where we are at the start of this scene — 1 sentence]\nEmotional beat to land on: [what the POV character feels at the end — do not state it directly in the scene]\nWord ceiling: [200–500 words]',
          },
        ],
        items: [
          '**Charakterbögen — Ziel: 150 Wörter pro aktivem Charakter.** Dominantes Merkmal, widersprüchliches Verhalten, Sprachregister und Schlüsselbeziehungen einbeziehen. Charaktere hinzufügen oder entfernen, wenn sie aktiv werden oder das Manuskript verlassen.',
          '**Kapitelzusammenfassungen — Ziel: 100–150 Wörter pro abgeschlossenem Kapitel.** Fokus auf: was passiert ist, was sich verändert hat, welche Informationen der Leser nun kennt, wo das Kapitel räumlich und emotional endete.',
          '**Aktuelles Szenen-Setup — spezifisch und kurz.** POV, Zweck der Szene, emotionalen Beat und Wörtergrenze angeben. Das ist die Aktion des Modells; Charakterbögen und Kapitelzusammenfassungen sind der Kontext.',
          '**Größe des Session-Dokuments — Ziel: unter 4.000 Token (~3.000 Wörter).** Ein Session-Dokument, das diesen Wert überschreitet, beansprucht Kontextraum für die Generierung. Aggressiv komprimieren.',
          '**Nach jeder Sitzung aktualisieren.** 1–2 Sätze zur Kapitelzusammenfassung hinzufügen und geänderte Charakterbogeneinträge aktualisieren. Das Session-Dokument ist eine lebendige Datei.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Das Session-Dokument in einer Nur-Text-Datei neben dem Manuskript aufbewahren. In Ollama kann ein Modelfile mit dem Session-Dokument im SYSTEM-Block erstellt und vor jeder Sitzung aktualisiert werden. In SillyTavern das Dokument zu Beginn jeder Romansitzung in das System-Prompt-Feld einfügen.',
          },
        ],
      },
      novelWorkflow: {
        id: 'novel-workflow',
        title: 'Roman-Drafting-Workflow',
        image: '/images/local-llm-screenwriting-and-novel-drafting-workflow-steps-en.svg',
        imageCaption:
          'Roman-Workflow in vier Phasen mit lokalem LLM: Outline, Beat Sheets, Szenen, Überarbeitung rund um ein Session-Dokument.',
        content:
          '**Der Roman-Drafting-Workflow mit einem lokalen LLM hat vier Phasen: Outline, Kapitel-Beat-Sheets, Szenengenerierung und Überarbeitungsdurchläufe.** Jede Phase verwendet eine andere Prompt-Struktur.',
        items: [
          '**Phase 1 — Outline:** Kapitelweises Outline generieren (10–30 Kapitel, ein Satz pro Kapitel: was passiert, was sich ändert). Prompt: „Genre: [Genre]. Protagonist: [Name + Kernwunde]. Zentraler Konflikt: [in einem Satz]. Schreibe ein 20-Kapitel-Outline — ein Satz pro Kapitel, jeder Satz benennt die Szene und die Änderung." Outline vor dem Fortfahren überprüfen und bearbeiten.',
          '**Phase 2 — Beat Sheets:** Jeden Kapiteleintrag in ein szenenweises Beat Sheet erweitern (3–8 Szenen pro Kapitel). Prompt: „Kapitel-[N]-Zusammenfassung: [Einzeiler einfügen]. Erweitern zu einem szenenweisen Beat Sheet: 4–6 Szenen, jede in einem Satz mit Ort, Beteiligten und der einzigen Änderung beschrieben. Noch keine Prosa."',
          '**Phase 3 — Szenengenerierung:** Session-Dokument + aktuellen Szenen-Beat verwenden, um eine Szene nach der anderen zu generieren. Generieren, überprüfen, in das Manuskript einfügen, Session-Dokument aktualisieren. Wiederholen.',
          '**Phase 4 — Überarbeitungsdurchläufe:** Nach Abschluss eines Kapitels gezielte Überarbeitungs-Prompts auf bestimmte Szenen anwenden. Siehe [Lokale LLM-Prompts für Romanautoren](/de/power-local-llm/local-llm-prompts-for-fiction-writers) für Überarbeitungs-Prompt-Strukturen. Nie mehr als eine Szene pro Generierungsaufruf überarbeiten.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Outline und Beat Sheets in separaten Dateien vom Manuskript aufbewahren. Sie sind das Skelett — das Manuskript ist das Fleisch. Getrennte Dateien ermöglichen die Regenerierung jedes Teils, ohne den anderen zu überschreiben.',
          },
        ],
      },
      screenwritingWorkflow: {
        id: 'screenwriting-workflow',
        title: 'Drehbuch-Workflow',
        content:
          '**Das Drehbuchschreiben mit einem lokalen LLM verwendet dieselben Session-Dokument- und Beat-Sheet-Techniken, mit zwei Ergänzungen: Formatanweisungen im System-Prompt und Szenenheader (Slug Lines) als separater Schritt von der Seitengenerierung.**',
        promptExamples: [
          {
            label: 'Drehbuch-System-Prompt',
            text: 'You are a screenplay formatting assistant. All prose you generate is formatted in standard US screenplay format:\n- Scene headers: INT./EXT. LOCATION — DAY/NIGHT\n- Action lines: present tense, concrete, maximum 3 lines per block\n- Character names: ALL CAPS above dialogue\n- Dialogue: centred, no dialogue tags\n- Parentheticals: sparingly, only for delivery or action mid-dialogue\n\nGenerate in Fountain-compatible plain text.',
          },
          {
            label: 'Szenen-Beat zu Skriptseiten-Prompt',
            text: 'Beat: [paste the one-sentence scene beat from the beat sheet]\nPOV character: [Name]\nPage target: [1–3 pages]\n\nGenerate the script pages for this beat. Use standard screenplay format. Begin with the slug line. No narration — action lines and dialogue only.',
          },
        ],
        items: [
          '**Format im System-Prompt, nicht im User-Turn.** Formatanweisungen in der Systemnachricht bedeuten, dass jede Generierung der Sitzung dem Format folgt, ohne die Anweisung zu wiederholen.',
          '**Fountain-kompatibler Output:** Fountain ist ein Nur-Text-Markup-Format für Drehbücher; Highland und Fade In lesen es, ebenso weitere Apps im [Fountain-App-Verzeichnis](https://fountain.io/apps). Wird das Modell um „Fountain-compatible plain text“ gebeten, entsteht Output, den man in diesen Tools öffnen oder für andere konvertieren kann (siehe die Final-Draft-Frage in den FAQs).',
          '**Slug Lines zuerst:** Die Slug Line als separaten Einzeiler-Prompt generieren, bevor der Szeneninhalt generiert wird. Dies verankert den physischen Ort.',
          '**Dialogdurchläufe:** Nach Action Lines einen separaten Dialogdurchlauf: „Die Action Lines sind gesetzt. Schreibe den Dialog für [Charakter A] und [Charakter B]. Charakter A will [X]. Charakter B will [Y]. Keine Dialognachführer. 5–8 Austausche."',
          '**Seitenanzahlverwaltung:** Es gibt keine feste Wörterzahl pro Seite, und „eine Seite entspricht einer Minute“ ist nur eine Faustregel. Die durchschnittliche Wörterzahl pro Seite im eigenen Drehbuch zählen und die Wörterobergrenzen daraus ableiten.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die Beat-Sheet-First-Disziplin ist beim Drehbuchschreiben wichtiger als beim Romandrafting. Seiten ohne Beat Sheet produzieren Szenen, die in Länge und strukturellem Zweck abdriften. Immer wissen, was eine Szene leisten soll, bevor die Seiten generiert werden.',
          },
        ],
      },
      sceneGeneration: {
        id: 'scene-generation',
        title: 'Szenengenerierungs-Templates für Langformarbeiten',
        content:
          '**Die Langform-Szenengenerierung erfordert das Session-Dokument als Präfix und einen einzelnen Szenen-Prompt als Aktion.** Die Templates setzen voraus, dass das Session-Dokument bereits in der Systemnachricht oder im ersten User-Turn vorhanden ist.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ein zuverlässiges Generierungsmuster für Langformfiktion: Session-Dokument im System-Prompt → einzelner Szenen-Prompt im User-Turn → überprüfen → Session-Dokument aktualisieren → wiederholen, eine Szene pro Sitzung.',
          },
          {
            type: 'plain-terms',
            text: 'Das Modell muss drei Dinge wissen: wer diese Charaktere sind (Charakterbögen), was bereits passiert ist (Kapitelzusammenfassungen) und was diese Szene leisten muss (Szenen-Setup). Genau diese drei Dinge angeben, nicht mehr. Szene generieren, in das Manuskript einfügen, Session-Dokument aktualisieren. Wiederholen.',
          },
        ],
        promptExamples: [
          {
            label: 'Roman-Szenengenerierungs-Prompt',
            text: '[SESSION DOCUMENT ALREADY IN SYSTEM PROMPT]\n\nCurrent scene:\nChapter: [N]\nBeat: [one sentence from the beat sheet]\nPOV: [character name]\nOpening: [one sentence — where we are, who is present]\nEmotional landing: [what the POV character feels at the end — show, don\'t state]\nWord ceiling: [300–500 words]\n\nWrite this scene. No summarising. Every sentence renders a moment.',
          },
          {
            label: 'Kontinuitätsprüfungs-Prompt',
            text: 'Before writing the next scene, check for continuity. The session document says:\n- [Character A] is [trait/state]\n- The last scene ended with [brief description]\n\nThe next scene opens with [brief description]. Does this transition make sense? If not, what needs to change in the transition? One paragraph answer only.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Den Kontinuitätsprüfungs-Prompt bei Kapitelübergängen verwenden — nicht bei jeder Szene. Kapitelübergänge (wo sich Ort, Zeit oder POV-Charakter ändern) sind die Stellen, an denen Kontinuitätsbrüche am häufigsten auftreten.',
          },
        ],
      },
      tools: {
        id: 'tools',
        itemHeadings: true,
        title: 'Tool-Integrationen für Autoren',
        content:
          '**Ollama stellt eine OpenAI-kompatible API auf localhost bereit, mit der eine wachsende Zahl von autorenseitigen Tools verbindet.** Die folgenden Integrationen stellen die etabliertesten Optionen dar.',
        columns: ['Tool', 'Link', 'Integration', 'Ideal für'],
        rows: [
          { 'Tool': 'Obsidian', 'Link': '[obsidian.md](https://obsidian.md)', 'Integration': 'Copilot-Plugin oder Smart Connections-Plugin → Ollama API. Siehe [Obsidian + Lokale LLM-Plugins](/de/power-local-llm/local-llm-with-obsidian-2026) für den ausführlichen Leitfaden.', 'Ideal für': 'Autoren, die Obsidian bereits für Notizen + Manuskript verwenden; nahtlose Generierung in derselben App' },
          { 'Tool': 'Scrivener', 'Link': '[literatureandlatte.com/scrivener](https://www.literatureandlatte.com/scrivener)', 'Integration': 'Externes Skript über Ollama API → in Dokument einfügen', 'Ideal für': 'Autoren, die Romane in Scrivener strukturieren; KI-Entwürfe in bestehende Projektstruktur einfügen' },
          { 'Tool': 'VS Code', 'Link': '[code.visualstudio.com](https://code.visualstudio.com)', 'Integration': 'Continue.dev-Erweiterung → Ollama-Backend', 'Ideal für': 'Technische Autoren und Game-Narrative-Designer im Code-Editor' },
          { 'Tool': 'SillyTavern', 'Link': '[github.com/SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern)', 'Integration': 'OpenAI-kompatible API → Ollama', 'Ideal für': 'Roleplay-Fiktion und charakterkarten-gesteuertes Drafting; persistentes Charaktergedächtnis' },
          { 'Tool': 'Reines Terminal', 'Integration': '`ollama run [model]` oder curl zur Ollama API', 'Ideal für': 'Skriptierbare Workflows; maximale Kontrolle mit minimalem UI-Overhead' },
          { 'Tool': 'LM Studio', 'Link': '[lmstudio.ai](https://lmstudio.ai)', 'Integration': 'Integrierte Chat-Benutzeroberfläche + lokale Server-API', 'Ideal für': 'Autoren, die einen GUI-Modellmanager ohne separaten Ollama-Install wünschen' },
          { 'Tool': 'NovelCrafter', 'Link': '[novelcrafter.com](https://www.novelcrafter.com)', 'Integration': 'Integrierte KI-Anbindung; die Hilfeseiten nennen Verbindungen zu LM Studio, Ollama und OpenAI-API-kompatiblen Endpunkten', 'Ideal für': 'Autoren, die kapitelbezogene KI-Unterstützung in einer einzigen roman-fokussierten App wünschen' },
          { 'Tool': 'Plottr', 'Link': '[plottr.com](https://plottr.com)', 'Integration': 'Manueller Workflow: Romane in Plottr strukturieren, Szenen/Beats extern in Ollama einfügen (Plottr gibt an, keine KI-Funktionen zu ergänzen)', 'Ideal für': 'Plot-intensive Genrefiktion (Krimi, Thriller, Fantasy) mit strukturellem Plotten als Workflow-Mittelpunkt' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die einfachste Integration für die meisten Autoren: Obsidian + das Copilot-Plugin, das auf Ollama zeigt. Session-Dokument und Manuskriptkapitel im selben Vault, Generierung direkt in derselben App ohne Kontextwechsel. Siehe [Obsidian + Lokale LLM-Plugins](/de/power-local-llm/local-llm-with-obsidian-2026) für den ausführlichen Leitfaden.',
          },
        ],
      },
      models: {
        id: 'models',
        itemHeadings: true,
        title: 'Modellempfehlungen für Langformarbeiten',
        content:
          '**Langform-Drafting hat andere Modellanforderungen als Kurzformfiktion.** Kontextadhärenz, konsistente Instruktionsbefolgung über lange Sitzungen und die Fähigkeit, die Stimme über mehrere Generierungsaufrufe beizubehalten, sind die entscheidenden Faktoren. Die Zeilen unten sind Ausgangspunkte aus den jeweiligen Modellkarten; PromptQuorum hat diese Modelle nicht für Fiktion getestet, und öffentliche Ranglisten zum kreativen Schreiben bewerten Modelle unterschiedlich — daher zwei Kandidaten an einer eigenen Szene testen. Serverklassen-Modelle wie Command A+ (218 Mrd. Gesamtparameter, 25 Mrd. aktiv, Apache 2.0) und Mistral Large 3 (675 Mrd. Gesamtparameter, 256K Kontext, Apache 2.0) liegen außerhalb der Reichweite von Consumer-Hardware. Für das breitere Modellspektrum über alle Anwendungsfälle, siehe [Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026).',
        columns: ['Aufgabe', 'Empfohlenes Modell', 'Warum'],
        rows: [
          { 'Aufgabe': 'Roman-Drafting (primär)', 'Empfohlenes Modell': 'Qwen3.6 27B oder Gemma 4 31B', 'Warum': 'Dichte 27B–31B-Modelle mit 256K+ angegebenem Kontext unter Apache-Lizenzen; eine Größenklasse, die zu einer 24-GB-GPU oder 32 GB+ Unified Memory bei 4 Bit passt (Schätzung)' },
          { 'Aufgabe': 'Drehbuchschreiben', 'Empfohlenes Modell': 'Qwen3.6 27B oder Llama 3.3 70B', 'Warum': 'Formatadhärenz hängt vor allem vom System-Prompt ab; eine Fountain-Szene an zwei Modellen testen. Llama 3.3 70B ist dicht, gibt 128K Kontext an und braucht bei 4 Bit grob 40 GB (Schätzung)' },
          { 'Aufgabe': 'Beat Sheet / Outline-Generierung', 'Empfohlenes Modell': 'Qwen3.6 35B-A3B', 'Warum': 'Mixture-of-Experts mit 3B von 35B aktiven Parametern pro Token (Apache-2.0), daher schnellere Generierung pro Token; Outline-Qualität von PromptQuorum nicht getestet' },
          { 'Aufgabe': 'Dialogdurchläufe', 'Empfohlenes Modell': 'Das Modell, dessen Beispiele passen', 'Warum': 'Dialog als separaten Durchlauf mit dem Modell fahren, dessen Kalibrierzeilen zum Sprachregister der Figur passen; es gibt keine belastbare Rangliste von Modellen für Dialog' },
          { 'Aufgabe': 'Überarbeitung (strukturell)', 'Empfohlenes Modell': 'Das Modell, mit dem entworfen wurde', 'Warum': 'Überarbeitungs-Prompts, die pro Aufruf eine strukturelle Einschränkung nennen, funktionieren mit jedem instruktionsfolgenden Modell; eine Szene pro Aufruf' },
          { 'Aufgabe': 'Reife / dunkle Fiktion', 'Empfohlenes Modell': 'Hermes 4 70B', 'Warum': 'Basis Llama-3.1-70B; Nous Research beschreibt eine weitgehend neutrale Ausrichtung und geringere Ablehnungsraten; Llama-3-Lizenz; hybrider Reasoning-Modus' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Das vollständige Manuskript in den Kontext einfügen.** Auch wenn ein Modell ein 128K–262K-Fenster angibt, werden lange Eingaben weniger zuverlässig genutzt — daher etwa 32.000 Token einplanen. Stattdessen die Session-Dokument-Technik verwenden — komprimierte Charakterbögen und Kapitelzusammenfassungen.',
          '**Das Modell bitten, ein offenes Dokument „fortzusetzen".** „Setze den Roman fort" führt zu Drift. „Schreibe die nächste Szene: [spezifisches Setup, POV, Wörtergrenze]" produziert einen konsistenten, begrenzten Output.',
          '**Keine Beat Sheets beim Drehbuchschreiben.** Skriptseiten ohne einen Szenen-Beat produzieren Seiten, die in Länge und struktureller Funktion abdriften. Das Beat Sheet immer zuerst generieren.',
          '**Session-Dokument-Aktualisierungen ignorieren.** Ein veraltetes Session-Dokument produziert innerhalb weniger Sitzungen Inkonsistenzen.',
          '**Mehr als eine Szene pro Sitzung generieren.** Mehrere Szenen in einem Kontextfenster produzieren die erste gut und jede weitere mit geringerer Konsistenz. Eine Szene pro Sitzung; zurücksetzen und neu injizieren.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Qwen3.6-27B-Modellkarte](https://huggingface.co/Qwen/Qwen3.6-27B) und [Qwen3.6-35B-A3B-Modellkarte](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — Parameter, nativer Kontext von 262.144 Token, YaRN-Erweiterung, Apache-2.0, gelesen am 26. Oktober 2026',
          '[Gemma-4-31B-Modellkarte](https://huggingface.co/google/gemma-4-31B-it) — dichtes 31B-Modell, 256K Kontext, Apache 2.0, gelesen am 26. Oktober 2026',
          '[Llama-3.3-70B-Instruct-Modellkarte](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) — 70B, 128K Kontext, Llama 3.3 Community License, veröffentlicht am 6. Dezember 2024',
          '[Hermes-4-70B-Modellkarte](https://huggingface.co/NousResearch/Hermes-4-70B) — Basis Llama-3.1-70B, hybrides Reasoning, „broadly neutral alignment“',
          '[Kimi-K2.6-Modellkarte](https://huggingface.co/moonshotai/Kimi-K2.6) — 1 Billion Gesamt- und 32 Milliarden aktive Parameter, 256K Kontext, natives int4',
          '[Command-A+-Dokumentation](https://docs.cohere.com/docs/command-a-plus) und [Mistral-Large-3-Modellkarte](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512) — Parameterzahlen und Lizenzen der Serverklassen-Modelle',
          '[Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172) — Liu et al., 2023',
          '[Fountain.io](https://fountain.io) — Fountain-Drehbuchformat-Spezifikation und [App-Liste](https://fountain.io/apps)',
          '[Final-Draft-Hilfecenter](https://kb.finaldraft.com/hc/en-us/articles/15575076862228-Can-Final-Draft-import-a-file-written-in-a-Fountain-based-screenwriting-program) — nennt, dass Final Draft .fountain-Dateien nicht direkt importieren kann',
          '[Amazon-KDP-KI-Regeln, Publishers Weekly](https://www.publishersweekly.com/pw/by-topic/digital/content-and-e-books/article/93122-amazon-issues-new-ai-guidelines-for-its-kdp-platform.html) und [Clarkesworld-Einreichungen](https://clarkesworldmagazine.com/submissions/) — KI-Richtlinien von Verlagen und Plattformen; vor dem Einreichen den aktuellen Wortlaut prüfen',
          '[Scrivener-Release-Notes](https://www.literatureandlatte.com/scrivener/release-notes) — Versionen 3.4.0 bis 3.5.2 (Dezember 2025): keine Plugin- oder API-Einträge; „Scrivener itself contains no AI“; gelesen am 26. Oktober 2026',
          '[Plottr in 2026](https://plottr.com/plottr-in-2026/) und [NovelCrafter-Hilfe zu KI-Verbindungen](https://www.novelcrafter.com/help/categories/ai-connections) — Plottr gibt an, keine KI-Funktionen zu entwickeln; NovelCrafter nennt Verbindungen zu LM Studio, Ollama und OpenAI-API-kompatiblen Endpunkten',
          'Ollama API-Dokumentation — [Ollama](https://ollama.com/docs)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ein lokales LLM einen vollständigen Roman schreiben?',
            a: 'Ein lokales LLM kann die Prosa für einen vollständigen Roman generieren — die strukturelle und redaktionelle Intelligenz muss jedoch vom Autor kommen. Das Modell generiert Szenen auf Basis konkreter Vorgaben; es plant, bewertet oder trifft thematische Entscheidungen nicht selbstständig. Am besten versteht man es als schnellen Erstentwurfs-Generator für Szenen, die man ohnehin schreiben kann: Es spart Zeit gegenüber dem leeren Blatt, während der Autor jede wesentliche Entscheidung trifft. Vor dem Einreichen die KI-Richtlinien von Verlagen und Plattformen prüfen (siehe die Verlagsfrage unten).',
          },
          {
            q: 'Was ist das maximale Kontextfenster, das ich zuverlässig verwenden kann?',
            a: 'Modelle geben 128K bis 262.144 Token an, doch PromptQuorum empfiehlt, pro Generierung etwa 32.000 Token (~24.000 Wörter) einzuplanen, weil Forschung zu langen Kontexten zeigt, dass Modelle die Mitte langer Eingaben weniger zuverlässig nutzen. Das ist eine vorsichtige Planungsregel, kein gemessenes Limit für jedes Modell — das eigene Modell also testen. Die Session-Dokument-Technik hält den Arbeitskontext unter 4.000–6.000 Token, sodass jeder Generierungsaufruf deutlich innerhalb dieses Bereichs bleibt.',
          },
          {
            q: 'Wie verhindere ich, dass das Modell die Stimme meines Charakters ändert?',
            a: 'Stimmungsdrift hat zwei Ursachen: ein veraltetes Session-Dokument und Kontextverdünnung. Lösung: Charakterbogen in der Systemnachricht platzieren, nach bedeutsamen Szenen aktualisieren und kurz genug halten, um im obersten Abschnitt jedes Sitzungskontexts Platz zu finden.',
          },
          {
            q: 'Kann ich Scrivener mit einem lokalen LLM verwenden?',
            a: 'Nicht nativ — für Scrivener 3 ist kein Plugin-System dokumentiert, und die offiziellen Release Notes bis Version 3.5.2 (Dezember 2025) nennen keine KI-Integration: Die Notizen zu 3.4.0 sagen „Scrivener itself contains no AI“ und ergänzen die Unterstützung für Apples Writing Tools, eine macOS-Systemfunktion. Ein gängiger Workflow: in Ollama generieren (über Terminal oder ein Begleitskript), die Ausgabe kopieren und in das passende Scrivener-Dokument einfügen. Manche Autoren nutzen Obsidian als KI-Entwurfsebene und importieren fertige Kapitel zur finalen Strukturierung in Scrivener. Skripte, die die Ollama-API aufrufen und die Ausgabe in die Zwischenablage kopieren, kommen einer nativen Integration am nächsten.',
          },
          {
            q: 'Was ist besser fürs Drehbuchschreiben: Ollama oder eine Cloud-KI?',
            a: 'Für Drehbuchautoren, die reife Inhalte erzeugen müssen (Gewalt, dunkle Psychologie, moralisch komplexe Figuren), gibt ein lokales Modell Kontrolle über das Modell und sein Ablehnungsverhalten — manche gehostete Modelle lehnen Inhalte ab oder entschärfen sie, die in dramatischen Drehbüchern vorkommen, und gehostete Richtlinien ändern sich mit der Zeit. Ein lokales Low-Refusal-Modell wie Hermes 4 70B hat weniger eingebaute Ablehnungen; für die erzeugten und veröffentlichten Inhalte bleibt man dennoch selbst verantwortlich. Die Formatkonsistenz hängt vor allem von den Anweisungen im System-Prompt ab, die bei beiden funktionieren. Die Wahl betrifft hauptsächlich Inhaltskontrolle, Datenschutz und Kosten; PromptQuorum hat die Ausgabequalität gehosteter und lokaler Modelle für das Drehbuchschreiben nicht verglichen.',
          },
          {
            q: 'Wie generiere ich Dialog, der wie ein bestimmter Charakter klingt?',
            a: 'Drei Schritte: (1) Sprachregister des Charakters zum Session-Dokument hinzufügen. (2) 3–5 Beispieldialogzeilen als Kalibrierungsschritt zu Sitzungsbeginn generieren. (3) Diese Beispiele im Dialog-Prompt verwenden: „Schreibe Dialog im selben Register wie diese Beispiele: [einfügen]."',
          },
          {
            q: 'Brauche ich eine GPU für ein lokales LLM beim Roman-Drafting?',
            a: 'Eine GPU beschleunigt die Generierung deutlich, ist aber nicht erforderlich. Bei Apple Silicon erlaubt Unified Memory einem MacBook Pro mit 16 GB, kleinere Modelle auszuführen (grob die 8B–14B-Klasse bei 4 Bit, eine Schätzung) — langsamer als ein 24-GB-GPU-Rechner, aber akzeptabel, wenn man die Ausgabe zwischen den Generierungen liest und bewertet. Eine NVIDIA-GPU mit 24 GB (RTX 4090, RTX 3090) fasst Modelle der 27B–32B-Klasse bei 4 Bit (Schätzung); Modelle der 70B-Klasse brauchen bei 4 Bit grob 40 GB oder mehr und erfordern daher zwei GPUs, eine 48-GB-Karte, 64 GB Unified Memory oder langsameres CPU-Offloading.',
          },
          {
            q: 'Kann ich lokale LLMs mit Final Draft oder anderer professioneller Drehbuchsoftware verwenden?',
            a: 'Nicht direkt. Laut Hilfecenter von Final Draft kann Final Draft keine .fountain-Dateien importieren; empfohlen wird, den Text als reine .txt-Datei zu speichern und beim Import „Script“ (nicht „Text“) zu wählen, oder ihn als FDX aus einer App zu übernehmen, die dieses Format exportiert. Highland konvertiert zwischen Fountain, FDX und PDF, und Fade In importiert und exportiert Fountain (laut Fountain-App-Verzeichnis). Workflow: Fountain-Text in Ollama generieren, in Highland oder Fade In öffnen und FDX für Final Draft exportieren.',
          },
          {
            q: 'Kann ich Kimi-K2.6 lokal für Roman-Drafting verwenden?',
            a: 'Kimi-K2.6 gibt ein Kontextfenster von 256K Token an, also dieselbe Klasse wie Qwen3.6 27B und Gemma 4 31B, ist aber ein Mixture-of-Experts-Modell mit rund 1 Billion Gesamtparametern (32 Milliarden aktiv) und nativen int4-Gewichten. Allein die Gewichte kommen auf etwa 500 GB (PromptQuorum-Schätzung); es braucht einen Multi-GPU-Server oder einen Rechner mit sehr großem Unified Memory und ist auf Consumer-Hardware unpraktisch. Für vollständig lokale Workflows deckt ein dichtes 27B–70B-Modell mit der Session-Dokument-Technik Arbeiten in Romanlänge ab, ohne ein Billionen-Parameter-Modell.',
          },
          {
            q: 'Wie stehen Verlage zu KI-gestützten Manuskripten?',
            a: 'Die Richtlinien unterscheiden sich je nach Verlag und Plattform und ändern sich 2026 weiter — vor dem Einreichen also die jeweilige prüfen. Amazon KDP verlangt, dass man mitteilt, wenn Text, Bilder oder Übersetzungen KI-generiert sind, und behandelt von einem KI-Tool erzeugte Inhalte auch nach umfangreicher Bearbeitung als KI-generiert; selbst verfasste Texte, bei denen KI nur beim Bearbeiten oder Verfeinern half, gelten als „KI-unterstützt“ und müssen nicht offengelegt werden (laut Amazons Regeln, wie von Publishers Weekly im September 2023 berichtet). Manche Magazine lehnen KI-beteiligte Arbeiten grundsätzlich ab — die Einreichungsrichtlinien von Clarkesworld besagen, dass das Magazin keine Geschichten in Betracht zieht, die von KI geschrieben, mitgeschrieben oder unterstützt wurden. Von einem lokalen LLM generierter Szenentext fällt unter Definitionen wie die „KI-generiert“-Definition von KDP; daher dort offenlegen, wo es verlangt wird. Dies sind allgemeine Informationen und keine Rechtsberatung.',
          },
          {
            q: 'Welche Hardware brauche ich für Kontexte mit einer Million Token?',
            a: 'Qwen3.6 27B und Qwen3.6 35B-A3B geben einen nativen Kontext von 262.144 Token an, der sich laut Modellkarten mit YaRN-Skalierung auf rund 1.010.000 Token erweitern lässt. Ein langer Kontext braucht zusätzlich zu den Gewichten Speicher für den KV-Cache; ein Lauf mit einer Million Token braucht daher weit mehr Speicher als ein typisches Consumer-Setup; PromptQuorum hat den Bedarf nicht gemessen. Die Session-Dokument-Technik in diesem Artikel ist genau für diese Lücke gedacht — konsistente Langformausgaben, ohne auf ein Fenster von einer Million Token angewiesen zu sein.',
          },
          {
            q: 'Muss ich bei der Verwendung eines lokalen LLMs zum Schreiben von Romanen oder Drehbüchern die DSGVO beachten?',
            a: 'Bei vollständig lokalen Modellen (Ollama auf eigener Hardware, keine Cloud-API) werden keine personenbezogenen Daten an externe Server übertragen — DSGVO-Anforderungen für Datenübertragungen (Art. 28) entfallen. Wenn personenbezogene Daten realer Personen in Prompts einfließen, können DSGVO-Grundsätze (Datensparsamkeit, Zweckbindung) greifen. Für fiktive Inhalte ohne Bezug zu realen Personen stellen vollständig lokale LLM-Workflows in der Regel kein DSGVO-Problem dar.',
          },
          {
            q: 'Was gilt in Deutschland beim Schreiben von Texten mit sexuellem oder gewalttätigem Inhalt mithilfe lokaler KI-Modelle?',
            a: 'Für legale Erwachsenenfiktion mit einvernehmlichen Szenarien zwischen erwachsenen Charakteren gibt es keine spezifischen KI-Einschränkungen. §184b und §184c StGB verbieten Inhalte, die den sexuellen Missbrauch von Minderjährigen darstellen — unabhängig davon, ob Mensch oder KI den Text generiert. Für Gewaltinhalte gilt §131 StGB (Gewaltverherrlichung). Die rechtliche Verantwortung liegt beim Nutzer.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale LLM-Prompts für Romanautoren: Vorlagen & Techniken](/de/power-local-llm/local-llm-prompts-for-fiction-writers) — Szenenwriting-, Dialog-, Charakter-, Weltenbau- und Stil-Transfer-Templates für den Session-Dokument-Workflow.',
          '[Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) — umfassender Modellvergleich über alle Anwendungsfälle.',
          '[Obsidian + Lokale LLM-Plugins](/de/power-local-llm/local-llm-with-obsidian-2026) — ausführlicher Leitfaden zu den besten Obsidian-Plugins für Ollama in Schreib-Workflows.',
          '[Beste lokale LLMs für kreatives Schreiben 2026](/de/power-local-llm/best-local-llm-creative-writing) — Modellvergleich für narrative Generierung einschließlich Sampling-Einstellungen.',
          '[Uncensored Local LLMs für kreatives Schreiben: Ethik und Setup](/de/power-local-llm/uncensored-local-llm-creative-writing-ethics) — wann uncensored Modelle für reife Fiktion verwendet werden.',
          '[SillyTavern vs Agnai vs RisuAI: Bestes lokales Roleplay-Frontend](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — Frontend-Optionen für charakterkarten-gesteuertes Drafting.',
          '[Continue.dev vs Cline vs Aider: Bester lokaler Coding-Assistent](/de/power-local-llm/continue-dev-vs-cline-vs-aider-local) — Continue.dev kann für Inline-Schreibassistenz in VS Code auf Ollama gezeigt werden.',
          '[Chain-of-Thought Prompting erklärt](/de/prompt-engineering/chain-of-thought-prompting) — strukturierte Reasoning-Prompts für Plotplanung, Story-Beat-Analyse und narratives Problemlösen.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-26',
    theme: 'Creative & Roleplay',
    heroImage: '/images/local-llm-screenwriting-and-novel-drafting-overview-hero-fr.webp',
    title: 'Rédiger des romans et des scénarios avec des LLM locaux : guide de workflow 100 000+ mots',
    seoTitle: 'Scénarios et romans avec un LLM local hors ligne 2026',
    intro:
      'Les LLM locaux s\'intègrent dans le workflow d\'écriture de romans et de scénarios : brouillons de scènes, beat sheets, passes de dialogue et révisions — sans accès internet, journalisation dans le cloud ni limites d\'utilisation. Ce guide couvre le workflow complet : sélection du modèle, gestion de la fenêtre de contexte pour les longs formats, structuration des chapitres, génération de scènes et outils reliant un LLM local à votre logiciel d\'écriture.',
    metaDescription:
      'Utiliser des LLM locaux pour écrire romans et scénarios : modèles de départ, gestion du contexte, structure des chapitres, génération de scènes et outils.',
    twitterDescription:
      'LLM locaux pour romanciers et scénaristes : gestion de la fenêtre de contexte, structure des chapitres, génération de scènes, passes de dialogue et intégrations.',
    current_models_mentioned: [
      'Qwen3.6 27B',
      'Gemma 4 31B',
      'Llama 3.3 70B',
      'Hermes 4 70B',
      'Kimi-K2.6',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      'Scénaristes, romanciers et concepteurs de narration pour jeux vidéo souhaitant utiliser des LLM locaux comme assistants de rédaction pour des projets créatifs longs — gestion des fenêtres de contexte, génération de contenu et intégration de l\'IA dans les outils d\'écriture existants.',
    readTime: '15 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM screenwriting novel drafting',
    targetKeywords: [
      'llm local écriture roman',
      'llm local scénario',
      'ollama écriture créative workflow',
      'fenêtre contexte fiction longue',
      'assistant ia écriture local',
      'génération scène modèle local',
    ],
    leadAnswerBlock:
      '**Le principal défi des LLM locaux en fiction longue est la gestion du contexte : prévoir environ 32 000 tokens par génération et fournir un « document de session » compressé (fiches personnages, résumés de chapitres, scène en cours) plutôt que le manuscrit entier, une scène à la fois.**',
    quickAnswerTop: {
      fr: {
        question: 'Comment utiliser un LLM local pour l\'écriture d\'un roman ou d\'un scénario sans perdre le contexte ?',
        answer:
          'La technique clé est l\'injection de contexte structurée : plutôt que de coller tout le manuscrit dans la fenêtre de contexte, maintenir un document de session compressé — fiche de personnage (nom, trait dominant, registre de parole), résumé de l\'intrigue des chapitres terminés (100–200 mots par chapitre) et configuration de la scène en cours (beat, point de vue, plafond de mots). Injecter ce document au début de chaque session d\'écriture. Générer une scène à la fois plutôt que de demander au modèle de poursuivre un document qui grossit. Comme chaque appel ne porte que l\'état compressé, l\'approche s\'adapte à n\'importe quelle longueur de roman et réduit la dérive de contexte et la perte de voix que signalent les auteurs lorsqu\'ils tentent de faire tenir un manuscrit entier dans une seule longue fenêtre de contexte.',
        bullets: [
          'Technique du document de session : fiches personnages + résumés de chapitres + configuration de la scène en cours injectés en début de session.',
          'Générer une scène à la fois — éviter de demander au modèle de « poursuivre » un document qui grossit au-delà d\'environ 32 000 tokens.',
          'Beat-sheet-first pour les scénarios : générer le beat sheet avant la prose ; l\'utiliser comme armature structurelle.',
          'Modèles de départ (données des fiches de modèle) : Qwen3.6 27B, Gemma 4 31B, Llama 3.3 70B ; PromptQuorum ne les a pas évalués pour la fiction.',
          'Ollama + Obsidian est un workflow courant chez les auteurs ; Scrivener ne documente aucune API de plugins, la sortie est donc collée.',
          'Règle de planification de la fenêtre de contexte : les modèles annoncent 128K–262 144 tokens ; prévoir environ 32 000 par génération, car la qualité sur contexte long est inégale.',
          'Les fine-tunes à faible taux de refus, comme Hermes 4 70B, suivent le même workflow pour la fiction adulte ; vérifier la licence de chaque modèle.',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Le problème de la fenêtre de contexte', anchor: '#context-window' },
      { label: 'Technique du document de session', anchor: '#session-document' },
      { label: 'Workflow d\'écriture de roman', anchor: '#novel-workflow' },
      { label: 'Workflow scénario', anchor: '#screenwriting-workflow' },
      { label: 'Templates de génération de scènes', anchor: '#scene-generation' },
      { label: 'Intégrations d\'outils', anchor: '#tools' },
      { label: 'Recommandations de modèles', anchor: '#models' },
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
          '**Règle de planification de la fenêtre de contexte : 128K–262 144 tokens annoncés, environ 32K prévus.** Les modèles exploitent moins fiablement le milieu des longues entrées (« Lost in the Middle ») ; prévoir environ 32 000 tokens par génération plutôt que de coller le manuscrit complet.',
          '**La technique du document de session est la compétence fondamentale.** Maintenir un fichier texte compressé : fiches de personnages actifs (150 mots par personnage), résumés de chapitres (100–200 mots par chapitre terminé) et configuration de la scène actuelle. Injecter au début de chaque session.',
          '**Générer une scène à la fois.** Demander au modèle d\'écrire une scène (200–600 mots) par session plutôt que de poursuivre un document qui grossit. Une scène par session réduit la dérive de contexte et aide à garder une voix cohérente.',
          '**Beat-sheet-first pour les scénarios.** Avant de générer des pages de script, générer un beat sheet par scène. Utiliser le beat sheet comme scaffold pour chaque génération de page.',
          '**Choisir un modèle que l\'on peut exécuter, puis le tester sur l\'une de ses propres scènes.** Les modèles denses de la classe 27B–31B (Qwen3.6 27B, Gemma 4 31B) et Llama 3.3 70B sont des points de départ courants ; PromptQuorum n\'en a évalué aucun pour la fiction, et les classements publics d\'écriture créative notent les modèles différemment.',
          '**Ollama + un outil d\'écriture en texte brut est une intégration fiable.** Scrivener, Obsidian et VS Code peuvent accueillir le manuscrit ; Ollama sert le modèle via une API que des applications ou des scripts peuvent appeler.',
          '**Les modèles à faible taux de refus (Hermes 4 70B) s\'intègrent sans changement de configuration.** Pour la fiction adulte, changer le modèle Ollama ; les techniques du document de session et de génération de scènes restent identiques. Vérifier la licence de chaque modèle pour son usage.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Modèles de départ (d\'après les fiches de modèle) :** Qwen3.6 27B (dense, Apache-2.0, contexte de 262 144 tokens), Gemma 4 31B (dense, Apache-2.0, contexte de 256K), Llama 3.3 70B (dense, contexte de 128K, Llama 3.3 Community License).',
          '**Limite de planification de la fenêtre de contexte :** ~32 000 tokens (~24 000 mots) par génération ; les modèles annoncent 128K–262 144 tokens, ce qui est un plafond, pas une garantie de qualité.',
          '**Taille du document de session :** viser moins de 4 000 tokens (fiches personnages + résumés chapitres + configuration scène actuelle).',
          '**Cible de génération de scène :** 200–600 mots par appel de génération ; scènes plus longues via plusieurs prompts séquentiels.',
          '**Format scénario :** combiner Ollama avec des instructions de sortie au format Fountain pour du texte formaté screenplay.',
          '**Outils d\'écriture compatibles Ollama :** Scrivener (coller la sortie ; pas d\'API de plugins documentée), Obsidian (via plugin local ou scripts), VS Code (via Continue.dev ou appels API directs), terminal brut.',
          '**Option à faible taux de refus :** Hermes 4 70B (base Llama-3.1-70B) pour la fiction adulte ; même workflow, même technique du document de session.',
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: 'Le problème de la fenêtre de contexte pour l\'écriture longue',
        image: '/images/local-llm-screenwriting-and-novel-drafting-context-window-en.svg',
        imageCaption:
          'Planification du contexte : limite de travail de 32K tokens (~24 000 mots) contre 128K–262 144 annoncés par les modèles.',
        content:
          '**Prévoir environ 32 000 tokens par génération, même quand un modèle en annonce bien davantage.** Il s\'agit d\'une règle de planification prudente de PromptQuorum, non d\'une limite mesurée : la recherche sur les contextes longs (Liu et al., « Lost in the Middle ») a constaté que les modèles exploitent plus fiablement les informations du début et de la fin d\'une longue entrée que celles du milieu, et que la qualité peut baisser à mesure que l\'entrée s\'allonge. Les modèles récents annoncent des fenêtres bien plus grandes — Qwen3.6 27B annonce 262 144 tokens en natif et Gemma 4 31B 256K —, il faut donc tester son propre modèle. Pour un roman, coller le manuscrit écrit jusque-là et demander le chapitre suivant reste l\'approche la moins fiable, et un long contexte consomme aussi plus de mémoire, car le cache KV grossit avec lui.\n\nKimi-K2.6 de Moonshot AI annonce une fenêtre de contexte de 256K tokens (262 144), de la même classe que les modèles ci-dessus, mais c\'est un modèle à mélange d\'experts d\'environ 1 000 milliards de paramètres au total (32 milliards actifs) livré avec des poids int4 natifs. Même en 4 bits, les poids seuls représentent environ 500 Go (estimation PromptQuorum : 1 000 milliards de paramètres × 0,5 octet) ; c\'est un modèle de classe serveur, pas un modèle de portable. La technique du document de session et la génération scène par scène s\'appliquent aux modèles exécutables en local, quelle que soit la taille de leur contexte.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Un plafond de planification prudent pour l\'adhérence au contexte des LLM locaux est d\'environ 32 000 tokens (~24 000 mots) par génération — au-delà, la recherche sur les contextes longs constate une exploitation moins fiable du contenu antérieur, ce qui peut se traduire par une dérive de voix et des incohérences d\'intrigue sur un long manuscrit.',
          },
          {
            type: 'plain-terms',
            text: 'On ne peut pas compter sur un modèle pour se souvenir de ce qui s\'est passé au chapitre 3 en écrivant le chapitre 20 simplement parce que tout le manuscrit tient dans sa fenêtre de contexte. À la place : compresser ce que le modèle doit savoir — fiches personnages, résumés de chapitres, configuration de la scène en cours — dans un document de session de moins de 4 000 tokens, et l\'injecter au début de chaque session d\'écriture. Le modèle n\'a besoin de connaître que ce qui est pertinent pour la scène qu\'il génère à cet instant.',
          },
        ],
        items: [
          '**Conversion token-mot :** 1 token ≈ 0,75 mot en anglais (règle empirique). 32K tokens ≈ 24 000 mots. 128K tokens ≈ 96 000 mots (environ un roman) ; 262 144 tokens ≈ 196 000 mots.',
          '**Dégradation de l\'attention :** les modèles peuvent perdre la référence fiable au contenu du début d\'une longue fenêtre — erreurs de noms de personnages, points d\'intrigue oubliés, dérive de voix.',
          '**L\'asymétrie :** dans l\'étude Lost in the Middle, les modèles exploitaient le mieux le début et la fin de l\'entrée, et le moins fiablement le contenu du milieu. L\'étude portait sur des modèles disponibles en 2023 ; il faut donc tester les modèles actuels plutôt que de supposer le même schéma.',
          '**Document de session comme solution :** compresser tout ce dont le modèle a besoin dans un court document structuré. Injecter au début. Générer la scène. Terminer la session. Réinitialiser. Recommencer avec le document mis à jour.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ne pas coller le manuscrit complet dans le contexte. Au-delà de 10 000 mots, le risque de dérive de contexte apparaît — le modèle peut oublier les détails des personnages, contredire les points d\'intrigue établis et retomber vers un registre générique. Utiliser la technique du document de session.',
          },
        ],
      },
      sessionDocument: {
        id: 'session-document',
        title: 'Technique du document de session',
        content:
          'La technique du document de session est une recommandation de workflow de PromptQuorum, fondée sur les limites de contexte décrites plus haut. PromptQuorum ne l\'a pas soumise à un test contrôlé, et les tailles ci-dessous (4 000 tokens, 150 mots par fiche de personnage, 100–150 mots par résumé de chapitre) sont des repères de planification, non des seuils mesurés.\n\n**Le document de session est un fichier texte brut maintenu à côté du manuscrit — l\'état compressé du roman que le modèle doit connaître pour générer du contenu cohérent.** Il comporte trois sections : fiches de personnages actifs, résumés de chapitres et configuration de la scène en cours.',
        promptExamples: [
          {
            label: 'Modèle de document de session',
            text: '# SESSION DOCUMENT — [NOVEL TITLE]\n\n## ACTIVE CHARACTERS\n**[Character Name]**\nDominant trait: [one trait]\nContradicting behaviour: [one behaviour]\nSpeech register: [formal/casual/specific verbal tics]\nRelationship to [other character]: [brief]\n\n**[Character Name 2]**\n[same structure]\n\n## CHAPTER SUMMARIES (completed)\n**Chapter 1:** [100–150 words — what happened, what changed, where it ended]\n**Chapter 2:** [100–150 words]\n[continue for all completed chapters]\n\n## CURRENT SCENE SETUP\nChapter: [N]\nScene: [brief description of what this scene needs to accomplish]\nPOV: [character name]\nOpening state: [where we are at the start of this scene — 1 sentence]\nEmotional beat to land on: [what the POV character feels at the end — do not state it directly in the scene]\nWord ceiling: [200–500 words]',
          },
        ],
        items: [
          '**Fiches de personnages — cible 150 mots par personnage actif.** Inclure trait dominant, comportement contradictoire, registre de parole et relation clé aux autres personnages actifs.',
          '**Résumés de chapitres — cible 100–150 mots par chapitre terminé.** Focus sur : ce qui s\'est passé, ce qui a changé dans les relations, ce que le lecteur sait maintenant, où le chapitre s\'est terminé spatialement et émotionnellement.',
          '**Configuration de la scène actuelle — spécifique et bref.** Nommer le PDV, le but de la scène, le beat émotionnel à atteindre et le plafond de mots. C\'est l\'action que le modèle exécute.',
          '**Taille du document — cible moins de 4 000 tokens (~3 000 mots).** Un document dépassant cette taille empiète sur l\'espace de contexte dédié à la génération. Compresser agressivement.',
          '**Mettre à jour après chaque session.** Ajouter 1–2 phrases au résumé du chapitre et mettre à jour les fiches modifiées. Le document de session est un fichier vivant.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Conserver le document de session dans un fichier texte brut à côté du manuscrit. Dans Ollama, créer un Modelfile avec le document dans le bloc SYSTEM et le rafraîchir avant chaque session. Dans SillyTavern, le coller dans le champ system prompt au début de chaque session.',
          },
        ],
      },
      novelWorkflow: {
        id: 'novel-workflow',
        title: 'Workflow d\'écriture de roman',
        image: '/images/local-llm-screenwriting-and-novel-drafting-workflow-steps-en.svg',
        imageCaption:
          'Roman en quatre phases avec un LLM local : outline, beat sheets, scènes et révision, autour d\'un document de session.',
        content:
          '**Le workflow d\'écriture de roman avec un LLM local comporte quatre phases : outline, beat sheets de chapitres, génération de scènes et passes de révision.** Chaque phase utilise une structure de prompt différente.',
        items: [
          '**Phase 1 — Outline :** générer un outline au niveau des chapitres (10–30 chapitres, une phrase par chapitre). Prompt : « Genre : [genre]. Protagoniste : [Nom + blessure fondamentale]. Conflit central : [en une phrase]. Écrire un outline de 20 chapitres — une phrase par chapitre, chaque phrase nommant la scène et le changement. » Réviser l\'outline avant de continuer.',
          '**Phase 2 — Beat sheets :** développer chaque entrée de chapitre en beat sheet de niveau scène (3–8 scènes par chapitre). Prompt par chapitre : « Résumé chapitre [N] : [coller l\'entrée]. Développer en beat sheet : 4–6 scènes, chacune décrite en une phrase nommant lieu, participants et le seul changement de la scène. Pas de prose encore. »',
          '**Phase 3 — Génération de scènes :** utiliser le document de session + le beat de la scène actuelle pour générer une scène à la fois. Générer, réviser, coller dans le manuscrit, mettre à jour le document de session. Répéter.',
          '**Phase 4 — Passes de révision :** après avoir terminé un chapitre, appliquer des prompts de révision ciblés sur des scènes spécifiques. Voir [Prompts LLM locaux pour les auteurs de fiction](/fr/power-local-llm/local-llm-prompts-for-fiction-writers). Ne jamais demander au modèle de réviser plus d\'une scène par appel.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Conserver l\'outline et les beat sheets dans des fichiers séparés du manuscrit. Ils sont le squelette — le manuscrit est la chair. Des fichiers séparés permettent de régénérer n\'importe quelle partie sans écraser l\'autre.',
          },
        ],
      },
      screenwritingWorkflow: {
        id: 'screenwriting-workflow',
        title: 'Workflow scénario',
        content:
          '**L\'écriture de scénarios avec un LLM local utilise les mêmes techniques de document de session et de beat sheet, avec deux ajouts : des instructions de format dans le system prompt et la génération des en-têtes de scène (slug lines) comme étape séparée de la génération de pages.**',
        promptExamples: [
          {
            label: 'System prompt pour scénario',
            text: 'You are a screenplay formatting assistant. All prose you generate is formatted in standard US screenplay format:\n- Scene headers: INT./EXT. LOCATION — DAY/NIGHT\n- Action lines: present tense, concrete, maximum 3 lines per block\n- Character names: ALL CAPS above dialogue\n- Dialogue: centred, no dialogue tags\n- Parentheticals: sparingly, only for delivery or action mid-dialogue\n\nGenerate in Fountain-compatible plain text.',
          },
          {
            label: 'Prompt beat de scène vers pages de script',
            text: 'Beat: [paste the one-sentence scene beat from the beat sheet]\nPOV character: [Name]\nPage target: [1–3 pages]\n\nGenerate the script pages for this beat. Use standard screenplay format. Begin with the slug line. No narration — action lines and dialogue only.',
          },
        ],
        items: [
          '**Format dans le system prompt, pas dans le tour utilisateur.** Placer les instructions de format dans le message système signifie que chaque génération de la session suit le format sans répéter l\'instruction.',
          '**Sortie compatible Fountain :** Fountain est un format de balisage en texte brut pour scénarios ; Highland et Fade In le lisent, comme d\'autres applications du [répertoire d\'applications Fountain](https://fountain.io/apps). Demander « Fountain-compatible plain text » produit une sortie que l\'on peut ouvrir dans ces outils ou convertir pour d\'autres (voir la question sur Final Draft dans la FAQ).',
          '**Slug lines d\'abord :** générer la slug line comme prompt d\'une ligne avant de générer le contenu de la scène. Cela ancre le lieu physique avant que le modèle commence.',
          '**Passes de dialogue :** après les lignes d\'action, faire une passe séparée : « Les lignes d\'action sont définies. Écrire le dialogue pour [Personnage A] et [Personnage B]. Personnage A veut [X]. Personnage B veut [Y]. Pas de balises de dialogue. 5–8 échanges. »',
          '**Gestion du nombre de pages :** il n\'existe pas de nombre de mots par page fixe, et « une page égale une minute » n\'est qu\'une règle empirique. Compter la moyenne de mots par page de son propre script et fixer les plafonds de mots à partir de là.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La discipline beat-sheet-first est plus importante pour les scénarios que pour les romans. Une scène de scénario a une fonction structurelle précise et un objectif de pages. Générer des pages sans beat sheet produit des scènes qui dérivent en longueur et perdent leur fonction. Toujours savoir ce qu\'une scène doit accomplir avant de générer les pages.',
          },
        ],
      },
      sceneGeneration: {
        id: 'scene-generation',
        title: 'Templates de génération de scènes pour le long format',
        content:
          '**La génération de scènes longues nécessite le document de session comme préfixe et un seul prompt de scène comme action.** Les templates ci-dessous supposent que le document de session est déjà dans le message système ou le premier tour utilisateur.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pour la fiction longue, un schéma de génération fiable est : document de session dans le system prompt → unique prompt de scène dans le tour utilisateur → réviser → mettre à jour le document de session → répéter, une scène par session.',
          },
          {
            type: 'plain-terms',
            text: 'Le modèle doit savoir trois choses pour écrire la scène suivante de façon cohérente : qui sont ces personnages (fiches), ce qui s\'est déjà passé (résumés de chapitres) et ce que cette scène doit accomplir (configuration). Donner exactement ces trois choses, rien de plus. Générer la scène, la coller dans le manuscrit, mettre à jour le document de session. Répéter.',
          },
        ],
        promptExamples: [
          {
            label: 'Prompt de génération de scène de roman',
            text: '[SESSION DOCUMENT ALREADY IN SYSTEM PROMPT]\n\nCurrent scene:\nChapter: [N]\nBeat: [one sentence from the beat sheet]\nPOV: [character name]\nOpening: [one sentence — where we are, who is present]\nEmotional landing: [what the POV character feels at the end — show, don\'t state]\nWord ceiling: [300–500 words]\n\nWrite this scene. No summarising. Every sentence renders a moment.',
          },
          {
            label: 'Prompt de vérification de continuité',
            text: 'Before writing the next scene, check for continuity. The session document says:\n- [Character A] is [trait/state]\n- The last scene ended with [brief description]\n\nThe next scene opens with [brief description]. Does this transition make sense? If not, what needs to change in the transition? One paragraph answer only.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Utiliser le prompt de vérification de continuité aux transitions de chapitres — pas à chaque scène. Les transitions de chapitres (où le lieu, le temps ou le personnage PDV change) sont l\'endroit où les ruptures de continuité sont les plus fréquentes.',
          },
        ],
      },
      tools: {
        id: 'tools',
        itemHeadings: true,
        title: 'Intégrations d\'outils pour les auteurs',
        content:
          '**Ollama expose une API compatible OpenAI sur localhost qu\'un écosystème croissant d\'outils orientés auteurs connecte.** Les intégrations ci-dessous représentent les options les plus établies.',
        columns: ['Outil', 'Lien', 'Intégration', 'Idéal pour'],
        rows: [
          { 'Outil': 'Obsidian', 'Lien': '[obsidian.md](https://obsidian.md)', 'Intégration': 'Plugin Copilot ou Smart Connections → API Ollama. Voir [Obsidian + Plugins LLM locaux](/fr/power-local-llm/local-llm-with-obsidian-2026) pour le guide approfondi.', 'Idéal pour': 'Auteurs utilisant déjà Obsidian pour les notes + manuscrit ; génération dans la même appli sans changer de contexte' },
          { 'Outil': 'Scrivener', 'Lien': '[literatureandlatte.com/scrivener](https://www.literatureandlatte.com/scrivener)', 'Intégration': 'Script externe via API Ollama → coller dans le document', 'Idéal pour': 'Auteurs structurant leurs romans dans Scrivener ; brouillons IA collés dans la structure de projet existante' },
          { 'Outil': 'VS Code', 'Lien': '[code.visualstudio.com](https://code.visualstudio.com)', 'Intégration': 'Extension Continue.dev → backend Ollama', 'Idéal pour': 'Auteurs techniques et concepteurs de narration de jeux à l\'aise dans un éditeur de code' },
          { 'Outil': 'SillyTavern', 'Lien': '[github.com/SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern)', 'Intégration': 'API compatible OpenAI → Ollama', 'Idéal pour': 'Fiction roleplay et rédaction guidée par fiches personnages ; mémoire de personnage persistante' },
          { 'Outil': 'Terminal brut', 'Intégration': '`ollama run [model]` ou curl vers l\'API Ollama', 'Idéal pour': 'Workflows scriptables ; contrôle maximal avec overhead d\'interface minimal' },
          { 'Outil': 'LM Studio', 'Lien': '[lmstudio.ai](https://lmstudio.ai)', 'Intégration': 'Interface de chat intégrée + API serveur local', 'Idéal pour': 'Auteurs souhaitant un gestionnaire de modèles GUI sans installer Ollama séparément' },
          { 'Outil': 'NovelCrafter', 'Lien': '[novelcrafter.com](https://www.novelcrafter.com)', 'Intégration': 'Intégration IA intégrée ; ses pages d\'aide mentionnent des connexions LM Studio, Ollama et des endpoints compatibles avec l\'API OpenAI', 'Idéal pour': 'Auteurs souhaitant une assistance IA au niveau chapitre dans une seule app dédiée au roman' },
          { 'Outil': 'Plottr', 'Lien': '[plottr.com](https://plottr.com)', 'Intégration': 'Workflow manuel : structurer les romans dans Plottr, coller scènes/beats dans Ollama en externe (Plottr indique ne pas ajouter de fonctions d\'IA)', 'Idéal pour': 'Fiction de genre à plot dense (polar, thriller, fantasy) où la structure narrative est le cœur du workflow' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'L\'intégration la plus simple pour la plupart des auteurs : Obsidian + le plugin Copilot pointant vers Ollama. Le document de session, les chapitres du manuscrit et la génération dans la même appli sans changement de contexte. Voir [Obsidian + Plugins LLM locaux](/fr/power-local-llm/local-llm-with-obsidian-2026) pour le guide approfondi.',
          },
        ],
      },
      models: {
        id: 'models',
        itemHeadings: true,
        title: 'Recommandations de modèles pour le long format',
        content:
          '**Le long format a des exigences différentes de la fiction courte.** L\'adhérence au contexte, la cohérence du suivi des instructions sur des sessions longues et la capacité à maintenir la voix sur plusieurs appels de génération sont les facteurs décisifs. Les lignes ci-dessous sont des points de départ tirés de la fiche de chaque modèle ; PromptQuorum n\'a pas évalué ces modèles pour la fiction, et les classements publics d\'écriture créative notent les modèles différemment — il faut donc tester deux candidats sur l\'une de ses propres scènes. Les modèles ouverts de classe serveur comme Command A+ (218 milliards de paramètres au total, 25 milliards actifs, Apache 2.0) et Mistral Large 3 (675 milliards de paramètres au total, contexte de 256K, Apache 2.0) dépassent la portée du matériel grand public. Pour le panorama complet des modèles, voir [Meilleurs LLM locaux en 2026](/fr/local-llms/best-local-llms-2026).',
        columns: ['Tâche', 'Modèle recommandé', 'Pourquoi'],
        rows: [
          { 'Tâche': 'Rédaction de roman (principal)', 'Modèle recommandé': 'Qwen3.6 27B ou Gemma 4 31B', 'Pourquoi': 'Modèles denses de 27B–31B annonçant 256K+ de contexte sous licences Apache ; une classe de taille adaptée à un GPU de 24 Go ou à 32 Go+ de mémoire unifiée en 4 bits (estimation)' },
          { 'Tâche': 'Écriture de scénarios', 'Modèle recommandé': 'Qwen3.6 27B ou Llama 3.3 70B', 'Pourquoi': 'L\'adhérence au format dépend surtout du prompt système ; tester une scène Fountain sur deux modèles. Llama 3.3 70B est dense, annonce 128K de contexte et demande environ 40 Go en 4 bits (estimation)' },
          { 'Tâche': 'Génération de beat sheet / outline', 'Modèle recommandé': 'Qwen3.6 35B-A3B', 'Pourquoi': 'Mélange d\'experts avec 3B de 35B paramètres actifs par token (Apache-2.0), donc génération plus rapide par token ; qualité des outlines non évaluée par PromptQuorum' },
          { 'Tâche': 'Passes de dialogue', 'Modèle recommandé': 'Le modèle dont les échantillons conviennent', 'Pourquoi': 'Faire le dialogue en passe séparée avec le modèle dont les lignes de calibration correspondent au registre du personnage ; il n\'existe pas de classement vérifié des modèles pour le dialogue' },
          { 'Tâche': 'Révision (structurelle)', 'Modèle recommandé': 'Le modèle utilisé pour le premier jet', 'Pourquoi': 'Les prompts de révision qui nomment une contrainte structurelle par appel fonctionnent avec tout modèle suivant les instructions ; une scène par appel' },
          { 'Tâche': 'Fiction adulte / sombre', 'Modèle recommandé': 'Hermes 4 70B', 'Pourquoi': 'Base Llama-3.1-70B ; Nous Research décrit un alignement globalement neutre et moins de refus ; licence Llama 3 ; mode de raisonnement hybride' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs fréquentes',
        items: [
          '**Coller le manuscrit complet dans le contexte.** Même quand un modèle annonce une fenêtre de 128K–262K, les longues entrées sont exploitées moins fiablement ; il faut donc prévoir environ 32 000 tokens. Utiliser la technique du document de session — fiches de personnages et résumés de chapitres compressés.',
          '**Demander au modèle de « continuer » un document ouvert.** « Continue le roman » produit de la dérive. « Écris la scène suivante : [configuration spécifique, PDV, plafond de mots] » produit une sortie bornée et cohérente.',
          '**Pas de beat sheets pour les scénarios.** Générer des pages sans beat sheet produit des scènes qui dérivent en longueur et perdent leur fonction structurelle. Générer le beat sheet en premier, toujours.',
          '**Ignorer les mises à jour du document de session.** Un document de session obsolète produit des incohérences en quelques sessions.',
          '**Générer plus d\'une scène par session.** La génération multi-scènes dans une fenêtre produit la première scène correctement et chaque suivante avec moins de cohérence. Une scène par session ; réinitialiser et réinjecter.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Fiche de modèle Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) et [fiche de modèle Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — paramètres, contexte natif de 262 144 tokens, extension YaRN, Apache-2.0, consultées le 26 octobre 2026',
          '[Fiche de modèle Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it) — 31B dense, contexte de 256K, Apache 2.0, consultée le 26 octobre 2026',
          '[Fiche de modèle Llama 3.3 70B Instruct](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) — 70B, contexte de 128K, Llama 3.3 Community License, publié le 6 décembre 2024',
          '[Fiche de modèle Hermes 4 70B](https://huggingface.co/NousResearch/Hermes-4-70B) — base Llama-3.1-70B, raisonnement hybride, « broadly neutral alignment »',
          '[Fiche de modèle Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) — 1 000 milliards de paramètres au total et 32 milliards actifs, contexte de 256K, int4 natif',
          '[Documentation Command A+](https://docs.cohere.com/docs/command-a-plus) et [fiche de modèle Mistral Large 3](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512) — nombre de paramètres et licences des modèles de classe serveur',
          '[Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172) — Liu et al., 2023',
          '[Fountain.io](https://fountain.io) — spécification du format de scénario Fountain et [liste d\'applications](https://fountain.io/apps)',
          '[Centre d\'aide Final Draft](https://kb.finaldraft.com/hc/en-us/articles/15575076862228-Can-Final-Draft-import-a-file-written-in-a-Fountain-based-screenwriting-program) — indique que Final Draft ne peut pas importer directement les fichiers .fountain',
          '[Règles d\'IA d\'Amazon KDP, Publishers Weekly](https://www.publishersweekly.com/pw/by-topic/digital/content-and-e-books/article/93122-amazon-issues-new-ai-guidelines-for-its-kdp-platform.html) et [soumissions à Clarkesworld](https://clarkesworldmagazine.com/submissions/) — politiques d\'IA des éditeurs et plateformes ; vérifier la formulation en vigueur avant d\'envoyer',
          '[Notes de version Scrivener](https://www.literatureandlatte.com/scrivener/release-notes) — versions 3.4.0 à 3.5.2 (décembre 2025) : aucune entrée sur les plugins ou l\'API ; « Scrivener itself contains no AI » ; consultées le 26 octobre 2026',
          '[Plottr in 2026](https://plottr.com/plottr-in-2026/) et [aide NovelCrafter sur les connexions IA](https://www.novelcrafter.com/help/categories/ai-connections) — Plottr indique ne pas développer de fonctions d\'IA ; NovelCrafter mentionne des connexions LM Studio, Ollama et des endpoints compatibles avec l\'API OpenAI',
          'Documentation API Ollama — [Ollama](https://ollama.com/docs)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Un LLM local peut-il écrire un roman complet ?',
            a: 'Un LLM local peut générer la prose d\'un roman complet — mais l\'intelligence structurelle et éditoriale doit venir de l\'auteur. Le modèle génère des scènes à partir de consignes précises ; il ne planifie, n\'évalue ni ne prend de décisions thématiques de lui-même. Il vaut mieux le voir comme un générateur rapide de premiers jets pour des scènes que l\'on sait déjà écrire : il fait gagner du temps face à la page blanche, tandis que l\'auteur prend toutes les décisions importantes. Vérifier les politiques d\'IA des éditeurs et des plateformes avant d\'envoyer (voir la question sur les éditeurs plus bas).',
          },
          {
            q: 'Quelle est la fenêtre de contexte maximale utilisable de façon fiable ?',
            a: 'Les modèles annoncent de 128K à 262 144 tokens, mais PromptQuorum recommande de prévoir environ 32 000 tokens (~24 000 mots) par génération, car la recherche sur les contextes longs montre que les modèles exploitent moins fiablement le milieu des longues entrées. C\'est une règle de planification prudente, non une limite mesurée pour chaque modèle — il faut tester le sien. La technique du document de session garde le contexte de travail sous 4 000–6 000 tokens, de sorte que chaque appel de génération reste bien dans cette plage.',
          },
          {
            q: 'Comment empêcher le modèle de changer la voix de mon personnage en cours de roman ?',
            a: 'La dérive de voix a deux causes : un document de session obsolète et la dilution du contexte. Solution : placer la fiche de personnage dans le message système, la mettre à jour après chaque scène avec un moment d\'arc significatif, et la garder concise.',
          },
          {
            q: 'Puis-je utiliser Scrivener avec un LLM local ?',
            a: 'Pas nativement — Scrivener 3 ne documente aucun système de plugins, et ses notes de version officielles jusqu\'à la 3.5.2 (décembre 2025) ne mentionnent aucune intégration d\'IA : les notes de la 3.4.0 indiquent « Scrivener itself contains no AI » et ajoutent la prise en charge des Writing Tools d\'Apple, une fonction système de macOS. Un workflow courant : générer dans Ollama (via le terminal ou un script compagnon), copier la sortie, la coller dans le document Scrivener concerné. Certains auteurs utilisent Obsidian comme couche de rédaction assistée et importent les chapitres terminés dans Scrivener pour la structuration finale. Les scripts qui appellent l\'API Ollama et copient la sortie dans le presse-papiers sont ce qui se rapproche le plus d\'une intégration native.',
          },
          {
            q: 'Qu\'est-ce qui est mieux pour les scénarios : Ollama ou une IA cloud ?',
            a: 'Pour les scénaristes qui doivent générer du contenu adulte (violence, psychologie sombre, personnages moralement complexes), un modèle local donne le contrôle du modèle et de son comportement de refus — certains modèles hébergés refusent ou adoucissent des contenus présents dans les scripts dramatiques, et les politiques des services hébergés évoluent avec le temps. Un modèle local à faible taux de refus comme Hermes 4 70B a moins de refus intégrés, mais l\'on reste responsable du contenu généré et publié. La cohérence du format dépend surtout des instructions du prompt système, qui fonctionnent dans les deux cas. Le choix porte surtout sur le contrôle du contenu, la confidentialité et le coût ; PromptQuorum n\'a pas comparé la qualité de sortie entre modèles hébergés et locaux pour le scénario.',
          },
          {
            q: 'Comment générer du dialogue qui ressemble à un personnage spécifique ?',
            a: 'Approche en trois étapes : (1) Ajouter le registre de parole du personnage au document de session. (2) Générer 3–5 lignes de dialogue d\'exemple comme étape de calibration en début de session. (3) Utiliser ces lignes d\'exemple dans le prompt de dialogue : « Écrire du dialogue dans le même registre que ces exemples : [coller]. »',
          },
          {
            q: 'Ai-je besoin d\'un GPU pour utiliser un LLM local pour la rédaction de roman ?',
            a: 'Un GPU accélère nettement la génération mais n\'est pas indispensable. Sur Apple Silicon, la mémoire unifiée permet à un MacBook Pro de 16 Go d\'exécuter des modèles plus petits (environ la classe 8B–14B en 4 bits, une estimation) — plus lent qu\'une machine à GPU de 24 Go, mais acceptable quand on lit et évalue la sortie entre deux générations. Un GPU NVIDIA de 24 Go (RTX 4090, RTX 3090) accueille des modèles de la classe 27B–32B en 4 bits (estimation) ; les modèles de classe 70B demandent environ 40 Go ou plus en 4 bits et nécessitent donc deux GPU, une carte de 48 Go, 64 Go de mémoire unifiée ou un déchargement vers le CPU, plus lent.',
          },
          {
            q: 'Puis-je utiliser des LLM locaux avec Final Draft ou d\'autres logiciels de scénario professionnels ?',
            a: 'Pas directement. Selon le centre d\'aide de Final Draft, Final Draft ne peut pas importer les fichiers .fountain ; sa recommandation est d\'enregistrer le texte en .txt brut et de choisir Script (et non Text) à l\'import, ou de l\'importer en FDX depuis une application qui exporte ce format. Highland convertit entre Fountain, FDX et PDF, et Fade In importe et exporte Fountain (d\'après le répertoire d\'applications Fountain). Workflow : générer du texte au format Fountain dans Ollama, l\'ouvrir dans Highland ou Fade In, puis exporter en FDX pour Final Draft.',
          },
          {
            q: 'Puis-je utiliser Kimi-K2.6 localement pour la rédaction de roman ?',
            a: 'Kimi-K2.6 annonce une fenêtre de contexte de 256K tokens, de la même classe que Qwen3.6 27B et Gemma 4 31B, mais c\'est un modèle à mélange d\'experts d\'environ 1 000 milliards de paramètres au total (32 milliards actifs) avec des poids int4 natifs. Les poids seuls représentent environ 500 Go (estimation PromptQuorum) ; il faut un serveur multi-GPU ou une machine à très grande mémoire unifiée, et il est peu pratique sur du matériel grand public. Pour des workflows entièrement locaux, un modèle dense de 27B–70B avec la technique du document de session couvre un travail de la longueur d\'un roman sans modèle à mille milliards de paramètres.',
          },
          {
            q: 'Quelle est la position des éditeurs sur les manuscrits assistés par IA ?',
            a: 'Les politiques varient selon l\'éditeur et la plateforme et continuent d\'évoluer en 2026 ; il faut donc vérifier celle qui s\'applique avant d\'envoyer. Amazon KDP exige de signaler quand le texte, les images ou les traductions sont générés par IA, et considère un contenu créé par un outil d\'IA comme généré par IA même après une retouche importante ; un texte écrit par soi-même que l\'IA a seulement aidé à relire ou à affiner est « assisté par IA » et n\'a pas à être déclaré (d\'après les règles d\'Amazon rapportées par Publishers Weekly en septembre 2023). Certaines revues rejettent d\'emblée tout travail impliquant l\'IA — les consignes de soumission de Clarkesworld indiquent que la revue n\'étudie pas les récits écrits, coécrits ou assistés par IA. Un texte de scène généré par un LLM local relève de définitions comme celle de « généré par IA » de KDP : le déclarer là où c\'est exigé. Il s\'agit d\'informations générales, et non d\'un conseil juridique.',
          },
          {
            q: 'De quel matériel ai-je besoin pour des contextes d\'un million de tokens ?',
            a: 'Qwen3.6 27B et Qwen3.6 35B-A3B annoncent un contexte natif de 262 144 tokens, extensible jusqu\'à environ 1 010 000 tokens avec la mise à l\'échelle YaRN (d\'après leurs fiches de modèle). Un long contexte demande de la mémoire pour le cache KV en plus des poids ; une exécution à un million de tokens exige donc bien plus de mémoire qu\'une configuration grand public typique ; PromptQuorum n\'a pas mesuré ce besoin. La technique du document de session de cet article est conçue précisément pour cet écart : obtenir une sortie longue et cohérente sans dépendre d\'une fenêtre d\'un million de tokens.',
          },
          {
            q: 'Dois-je respecter le RGPD en utilisant un LLM local pour écrire des romans ou des scénarios ?',
            a: 'Avec des modèles entièrement locaux (Ollama sur son propre matériel, pas d\'API cloud), aucune donnée personnelle n\'est transmise à des serveurs externes — les exigences du RGPD pour les transferts de données (Art. 28) ne s\'appliquent pas. Si des données personnelles de personnes réelles entrent dans les prompts, les principes du RGPD (minimisation des données, limitation des finalités) peuvent s\'appliquer. Pour la fiction fictive sans lien avec des personnes réelles, les workflows LLM entièrement locaux ne posent généralement pas de problème RGPD.',
          },
          {
            q: 'Quelles restrictions légales s\'appliquent en France à l\'écriture de contenus à caractère sexuel ou violent avec un LLM local ?',
            a: 'Pour la fiction adulte légale avec des scénarios consentis entre personnages adultes, il n\'existe pas de restrictions spécifiques à l\'IA en France. L\'article 227-23 du Code pénal interdit les représentations de mineurs à caractère pornographique — cela s\'applique indépendamment du fait qu\'un humain ou un modèle IA génère le texte. Pour les contenus violents, le droit pénal général s\'applique. La responsabilité juridique incombe à l\'utilisateur.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Prompts LLM locaux pour les auteurs de fiction : templates et techniques](/fr/power-local-llm/local-llm-prompts-for-fiction-writers) — templates d\'écriture de scènes, dialogue, personnages, worldbuilding et transfert de style.',
          '[Meilleurs LLM locaux en 2026](/fr/local-llms/best-local-llms-2026) — comparaison complète des modèles pour tous les cas d\'usage.',
          '[Obsidian + Plugins LLM locaux](/fr/power-local-llm/local-llm-with-obsidian-2026) — guide approfondi sur les meilleurs plugins Obsidian pour Ollama dans les workflows d\'écriture.',
          '[Meilleurs LLM locaux pour l\'écriture créative 2026](/fr/power-local-llm/best-local-llm-creative-writing) — comparaison de modèles pour la génération narrative.',
          '[LLM locaux non censurés pour l\'écriture créative : éthique et configuration](/fr/power-local-llm/uncensored-local-llm-creative-writing-ethics) — quand utiliser des modèles non censurés pour la fiction adulte.',
          '[SillyTavern vs Agnai vs RisuAI : meilleur frontend roleplay local](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — options de frontend pour la rédaction guidée par fiches personnages.',
          '[Continue.dev vs Cline vs Aider : meilleur assistant de code local](/fr/power-local-llm/continue-dev-vs-cline-vs-aider-local) — Continue.dev peut être pointé vers Ollama pour l\'assistance à l\'écriture dans VS Code.',
          '[Chain-of-Thought Prompting expliqué](/fr/prompt-engineering/chain-of-thought-prompting) — prompts de raisonnement structuré pour la planification de plot, l\'analyse de beats narratifs et la résolution de problèmes.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-26',
    theme: 'Creative & Roleplay',
    heroImage: '/images/local-llm-screenwriting-and-novel-drafting-overview-hero-ja.webp',
    title: 'ローカルLLMで小説・脚本を執筆する：10万語以上のワークフロー完全ガイド',
    seoTitle: '小説執筆におすすめのローカルLLMモデルと長編ワークフロー',
    intro:
      'ローカルLLMを小説・脚本のワークフローに統合することで、シーン草稿・ビートシート・ダイアログパス・リビジョンをインターネット接続なし、クラウドロギングなし、利用制限なしで実行できます。本ガイドでは完全なワークフローを解説します：タスク別のおすすめモデル、長編作業のためのコンテキストウィンドウ管理、章の足場構築、シーン生成、そしてローカルLLMをライティングソフトウェアと連携させるツール。',
    metaDescription:
      'ローカルLLMで小説・脚本を書く完全ワークフロー：モデルの出発点、コンテキスト管理、章構成、シーン生成、執筆ツールとの連携まで丁寧に解説します。',
    twitterDescription:
      'ローカルLLMで小説・脚本を書く方法：コンテキストウィンドウ管理、章構造、シーン生成、ダイアログパス、ツール統合。',
    current_models_mentioned: [
      'Qwen3.6 27B',
      'Gemma 4 31B',
      'Llama 3.3 70B',
      'Hermes 4 70B',
      'Kimi-K2.6',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      'ローカルLLMを長編創作の執筆アシスタントとして活用したい脚本家・小説家・ナラティブゲームデザイナー。コンテキストウィンドウ管理、草稿コンテンツの生成、既存ライティングツールへのAI統合を目的とする中級者向け。',
    readTime: '15分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM screenwriting novel drafting',
    targetKeywords: [
      'ローカルLLM 小説執筆',
      'ローカルLLM 脚本',
      'Ollama 創作ワークフロー',
      'コンテキストウィンドウ 長編小説',
      'ローカルAI 執筆アシスタント',
      'シーン生成 ローカルモデル',
    ],
    leadAnswerBlock:
      '**長編フィクションでローカルLLMを使う際の主な課題はコンテキスト管理です：1回の生成は約32Kトークンで計画し、原稿全体ではなく圧縮した「セッションドキュメント」（キャラクターシート、章サマリー、現在のシーン設定）を渡して、1シーンずつ生成します。**',
    quickAnswerTop: {
      ja: {
        question: 'コンテキストを失わずにローカルLLMで小説や脚本を執筆するには？',
        answer:
          '核心技術は構造化コンテキストインジェクションです。原稿全体をコンテキストウィンドウに貼り付ける代わりに、圧縮されたセッションドキュメントを維持します：キャラクターシート（名前、支配的特性、話し言葉のレジスター）、完成した章のプロットサマリー（1章あたり100〜200語）、現在のシーンのセットアップ（ビート、POV、語数上限）。このセッションドキュメントを各ライティングセッションの開始時に注入します。増大するドキュメントの継続を求めず、1シーンずつ生成します。各呼び出しには圧縮した状態だけが載るため、どの小説の長さにも対応でき、原稿全体を1つの長いコンテキストウィンドウに詰め込もうとしたときにライターが報告するコンテキストドリフトや声の喪失を減らせます。',
        bullets: [
          'セッションドキュメント技術：キャラクターシート＋章サマリー＋現在のシーンセットアップをセッション開始時に注入。',
          '1セッションに1シーン生成——増大するドキュメントを約32Kトークンを超えて「継続」させるのは避ける。',
          '脚本はビートシートファースト：散文の前にビートシートを生成し、構造的な足場として使う。',
          'モデルの出発点（モデルカードの仕様）：Qwen3.6 27B、Gemma 4 31B、Llama 3.3 70B。PromptQuorumは小説向けに評価していません。',
          'Ollama＋Obsidianは一般的なライターのワークフロー。ScrivenerにはドキュメントされたプラグインAPIがないため、出力は貼り付けます。',
          'コンテキストウィンドウの計画目安：モデルは128K〜262,144トークンを掲げますが、長いコンテキストでは品質が不均一なため、1回の生成は約32Kで計画します。',
          'Hermes 4 70Bのような拒否の少ないファインチューンも同じワークフローで成熟したフィクションに使えます。モデルごとのライセンスを確認してください。',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: '重要なポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: 'コンテキストウィンドウ問題', anchor: '#context-window' },
      { label: 'セッションドキュメント技術', anchor: '#session-document' },
      { label: '小説執筆ワークフロー', anchor: '#novel-workflow' },
      { label: '脚本ワークフロー', anchor: '#screenwriting-workflow' },
      { label: 'シーン生成テンプレート', anchor: '#scene-generation' },
      { label: 'ツール統合', anchor: '#tools' },
      { label: 'モデル推薦', anchor: '#models' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: 'ソース', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**コンテキストウィンドウの計画目安：掲げられているのは128K〜262,144トークン、計画は約32K。** モデルは長い入力の中間を使う信頼性が下がる（「Lost in the Middle」）ため、1回の生成は約32Kトークン（〜24,000語）で計画し、原稿全体ではなくセッションドキュメント技術を使ってください。',
          '**セッションドキュメント技術がコアスキル。** 圧縮テキストファイルを維持します：アクティブなキャラクターシート（各キャラクター150語）、章サマリー（完成した章ごとに100〜200語）、現在のシーンのセットアップ。各生成セッションの開始時に注入します。',
          '**1セッションに1シーン生成。** 増大するドキュメントの継続を求めるのではなく、1セッションにつき1シーン（200〜600語）を生成します。1セッション1シーンはコンテキストドリフトを減らし、一貫した声を保つ助けになります。',
          '**脚本はビートシートファースト。** スクリプトページを生成する前に、シーンレベルのビートシートを生成します。ビートシートを各ページ生成の足場として使います。',
          '**実行できるモデルを選び、自分のシーンで試してください。** 27B〜31Bクラスの密モデル（Qwen3.6 27B、Gemma 4 31B）とLlama 3.3 70Bが一般的な出発点です。PromptQuorumはどれも小説向けに評価しておらず、公開されている創作ライティングのリーダーボードもモデルの順位付けが一致しません。',
          '**Ollama＋プレーンテキストライティングツールは信頼できる統合です。** Scrivener、Obsidian、VS Codeは原稿を保持でき、OllamaはAPIを通じてモデルを提供し、コンパニオンアプリやスクリプトから呼び出せます。',
          '**拒否の少ないモデル（Hermes 4 70B）はセットアップ変更なしに組み込めます。** 成熟したフィクション向けには、Ollamaのモデルを切り替えるだけ；セッションドキュメントと生成技術は同一です。用途に合うか、モデルごとのライセンスを確認してください。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**モデルの出発点（モデルカードより）：** Qwen3.6 27B（密、Apache-2.0、コンテキスト262,144トークン）、Gemma 4 31B（密、Apache-2.0、コンテキスト256K）、Llama 3.3 70B（密、コンテキスト128K、Llama 3.3 Community License）。',
          '**コンテキストウィンドウの計画上限：** 1回の生成あたり〜32Kトークン（〜24,000語）；モデルは128K〜262,144トークンを掲げますが、これは上限であり品質の保証ではありません。',
          '**セッションドキュメントのサイズ：** 4,000トークン未満を目標（キャラクターシート＋章サマリー＋現在のシーンセットアップ）。',
          '**シーン生成の目標：** 1生成呼び出しあたり200〜600語；複数の連続プロンプトで長いシーンを生成。',
          '**脚本フォーマット：** Fountain形式の出力命令とOllamaを組み合わせてスクリプトフォーマットのテキストを生成。',
          '**Ollamaと連携するライティングツール：** Scrivener（出力を貼り付け；文書化されたプラグインAPIなし）、Obsidian（プラグインまたはスクリプト経由）、VS Code（Continue.dev経由）、ターミナル。',
          '**拒否の少ないオプション：** 成熟したフィクション向けHermes 4 70B（Llama-3.1-70Bベース）；同じワークフロー、同じセッションドキュメント技術。',
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: '長編執筆のコンテキストウィンドウ問題',
        image: '/images/local-llm-screenwriting-and-novel-drafting-context-window-en.svg',
        imageCaption:
          'コンテキスト計画：作業上限は32Kトークン（約24,000語）。オープンモデルは128K〜262,144トークンを掲げる。',
        content:
          '**モデルがはるかに大きなウィンドウを掲げていても、1回の生成あたり約32Kトークンで計画してください。** これはPromptQuorumの慎重な計画ルールであり、測定された上限ではありません：長いコンテキストの研究（Liu et al.「Lost in the Middle」）では、モデルは長い入力の先頭と末尾の情報を中間の情報より確実に使い、入力が長くなるほど品質が下がり得ることが報告されています。新しいモデルはさらに大きなウィンドウを掲げており——Qwen3.6 27Bはネイティブで262,144トークン、Gemma 4 31Bは256K——ご自身のモデルで試す必要があります。小説では、ここまでの原稿をそのまま貼り付けて次の章を求める方法が依然として最も信頼できず、長いコンテキストはKVキャッシュが増えるためメモリも多く消費します。\n\nMoonshot AIのKimi-K2.6は256Kトークン（262,144）のコンテキストウィンドウを掲げており、上記のモデルと同じクラスですが、総パラメータ約1兆（アクティブ320億）のMixture-of-Expertsモデルで、ネイティブint4の重みで提供されています。4ビットでも重みだけで約500GBになり（PromptQuorumの推定：1兆パラメータ×0.5バイト）、ノートPC向けではなくサーバークラスのモデルです。セッションドキュメント技術とシーンごとの生成は、コンテキストサイズを問わずローカルで実行可能なモデルに適用できます。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルLLMにおけるコンテキスト遵守の慎重な計画上限は、1回の生成あたり約32,000トークン（〜24,000語）です——これを超えると、長いコンテキストの研究では以前の内容の利用が不安定になると報告されており、長い原稿にわたって声のドリフトやプロットの不一致として現れることがあります。',
          },
          {
            type: 'plain-terms',
            text: '原稿全体がコンテキストウィンドウに収まるからといって、第20章を書きながら第3章で何が起きたかをモデルが確実に覚えているとは期待できません。代わりに：モデルが知る必要があることを——キャラクターシート、章サマリー、現在のシーンセットアップを——4,000トークン未満の「セッションドキュメント」に圧縮し、各ライティングセッションの開始時にそれを注入します。モデルは、今生成しているシーンに関係することだけを知っていれば十分です。',
          },
        ],
        items: [
          '**トークン対語数変換：** 英語で1トークン≈0.75語（目安）。32Kトークン≈24,000語。128Kトークン≈96,000語（小説1冊分ほど）；262,144トークン≈196,000語。',
          '**注意の劣化：** モデルは長いコンテキストウィンドウの早い部分のコンテンツへの信頼できる参照を失うことがあります——キャラクター名の誤り、忘れられたプロットポイント、声のドリフト。',
          '**非対称性：** Lost in the Middleの研究では、モデルは入力の先頭と末尾を最もよく使い、中間の内容を最も不確実にしか使いませんでした。この研究は2023年に利用できたモデルを対象にしているため、同じ傾向を前提とせず現行モデルで試してください。',
          '**解決策としてのセッションドキュメント：** モデルが必要とするすべてのものを短い構造化ドキュメントに圧縮します。開始時に注入。シーンを生成。セッションを終了。リセット。更新されたドキュメントで新鮮に始めます。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '原稿全体をコンテキストに貼り付けないでください。10,000語を超える原稿を貼り付けると、コンテキストドリフトのリスクがあります——モデルは初期のキャラクター詳細を忘れ、確立されたプロットポイントと矛盾し、一般的なレジスターに戻ることがあります。代わりにセッションドキュメント技術を使ってください。',
          },
        ],
      },
      sessionDocument: {
        id: 'session-document',
        title: 'セッションドキュメント技術',
        content:
          'セッションドキュメント技術は、上で説明したコンテキストの制約に基づくPromptQuorumのワークフロー推奨です。PromptQuorumは管理された試験を行っておらず、以下のサイズ（4,000トークン、キャラクターシート1件あたり150語、章サマリー1件あたり100〜150語）は計画上の目安であり、測定された閾値ではありません。\n\n**セッションドキュメントは原稿の隣に保管するプレーンテキストファイルです——モデルが一貫したコンテンツを生成するために知る必要がある、小説の圧縮された状態。** 3つのセクションがあります：アクティブなキャラクターシート、章サマリー、現在のシーンセットアップ。',
        promptExamples: [
          {
            label: 'セッションドキュメントテンプレート',
            text: '# SESSION DOCUMENT — [NOVEL TITLE]\n\n## ACTIVE CHARACTERS\n**[Character Name]**\nDominant trait: [one trait]\nContradicting behaviour: [one behaviour]\nSpeech register: [formal/casual/specific verbal tics]\nRelationship to [other character]: [brief]\n\n**[Character Name 2]**\n[same structure]\n\n## CHAPTER SUMMARIES (completed)\n**Chapter 1:** [100–150 words — what happened, what changed, where it ended]\n**Chapter 2:** [100–150 words]\n[continue for all completed chapters]\n\n## CURRENT SCENE SETUP\nChapter: [N]\nScene: [brief description of what this scene needs to accomplish]\nPOV: [character name]\nOpening state: [where we are at the start of this scene — 1 sentence]\nEmotional beat to land on: [what the POV character feels at the end — do not state it directly in the scene]\nWord ceiling: [200–500 words]',
          },
        ],
        items: [
          '**キャラクターシート——アクティブなキャラクター1人あたり150語を目標。** 支配的特性、矛盾する行動、話し言葉のレジスター、他のアクティブなキャラクターとの主要な関係を含めます。',
          '**章サマリー——完成した章ごとに100〜150語を目標。** 焦点：何が起きたか、キャラクターの関係が何が変わったか、読者が今知っている情報、章が空間的・感情的にどこで終わったか。',
          '**現在のシーンセットアップ——具体的で簡潔。** POV、シーンの目的、着地する感情的ビート、語数上限を指定します。',
          '**セッションドキュメントのサイズ——4,000トークン（〜3,000語）未満を目標。** このサイズを超えるドキュメントは生成自体に使われるべきコンテキストスペースを消費します。',
          '**各セッション後に更新。** シーンを生成した後、関連する章サマリーに1〜2文を追加し、変更されたキャラクターシートのエントリを更新します。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'セッションドキュメントを原稿の隣のプレーンテキストファイルに保管します。Ollamaでは、セッションドキュメントをSYSTEMブロックに持つModelfileを作成し、各セッション前に更新できます。SillyTavernでは、各小説セッションの開始時にシステムプロンプトフィールドに貼り付けます。',
          },
        ],
      },
      novelWorkflow: {
        id: 'novel-workflow',
        title: '小説執筆ワークフロー',
        image: '/images/local-llm-screenwriting-and-novel-drafting-workflow-steps-en.svg',
        imageCaption:
          '小説執筆の4フェーズ：アウトライン、ビートシート、シーン生成、リビジョン。',
        content:
          '**ローカルLLMを使った小説執筆ワークフローには4つのフェーズがあります：アウトライン、章ビートシート、シーン生成、リビジョンパス。** 各フェーズは異なるプロンプト構造を使います。',
        items: [
          '**フェーズ1——アウトライン：** 章レベルのアウトラインを生成します（10〜30章、1章1文：何が起きるか、何が変わるか）。プロンプト例：「ジャンル：[ジャンル]。主人公：[名前＋核心的な傷]。中心的な葛藤：[1文で]。20章のアウトラインを書く——1章1文、各文はシーンと変化を名指しする。」進む前にアウトラインを確認・編集します。',
          '**フェーズ2——ビートシート：** 各章エントリをシーンレベルのビートシートに展開します（1章あたり3〜8シーン）。',
          '**フェーズ3——シーン生成：** セッションドキュメント＋現在のシーンのビートを使って、1シーンずつ生成します。生成し、確認し、原稿に貼り付け、セッションドキュメントを更新。繰り返します。',
          '**フェーズ4——リビジョンパス：** 章を完成させた後、特定のシーンにターゲットを絞ったリビジョンプロンプトを実行します。[フィクションライター向けローカルLLMプロンプト](/ja/power-local-llm/local-llm-prompts-for-fiction-writers)を参照。1生成呼び出しで1シーン以上のリビジョンを求めないこと。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'アウトラインとビートシートは原稿とは別のファイルに保管します。別々のファイルは、もう一方を上書きせずに任意の部分を再生成でき、現在のシーンセットアップに関連するビートシートエントリのみを貼り付けられます。',
          },
        ],
      },
      screenwritingWorkflow: {
        id: 'screenwriting-workflow',
        title: '脚本ワークフロー',
        content:
          '**ローカルLLMを使った脚本作業は、小説執筆と同じセッションドキュメントとビートシート技術を使いますが、2つの追加があります：システムプロンプトのフォーマット命令と、ページ生成とは別のステップとしてのシーンヘッダー（スラグライン）生成。**',
        promptExamples: [
          {
            label: '脚本システムプロンプト',
            text: 'You are a screenplay formatting assistant. All prose you generate is formatted in standard US screenplay format:\n- Scene headers: INT./EXT. LOCATION — DAY/NIGHT\n- Action lines: present tense, concrete, maximum 3 lines per block\n- Character names: ALL CAPS above dialogue\n- Dialogue: centred, no dialogue tags\n- Parentheticals: sparingly, only for delivery or action mid-dialogue\n\nGenerate in Fountain-compatible plain text.',
          },
          {
            label: 'シーンビートからスクリプトページへのプロンプト',
            text: 'Beat: [paste the one-sentence scene beat from the beat sheet]\nPOV character: [Name]\nPage target: [1–3 pages]\n\nGenerate the script pages for this beat. Use standard screenplay format. Begin with the slug line. No narration — action lines and dialogue only.',
          },
        ],
        items: [
          '**フォーマットはユーザーターンではなくシステムプロンプトで。** フォーマット命令をシステムメッセージに置くと、セッション中のすべての生成が命令を繰り返さずにフォーマットに従います。',
          '**Fountain互換出力：** Fountainは脚本用のプレーンテキストマークアップフォーマットで、Highland、Fade In、および[Fountainアプリ一覧](https://fountain.io/apps)の他のアプリが読み込めます。「Fountain-compatible plain text」の生成を求めると、それらのツールで開ける、または他のツール向けに変換できる出力が得られます（FAQのFinal Draftの質問を参照）。',
          '**スラグラインを先に：** シーンコンテンツを生成する前に、スラグライン（INT./EXT. 場所——昼/夜）を別の1行プロンプトとして生成します。',
          '**ダイアログパス：** アクションラインを生成した後、別のダイアログパスを実行：「アクションラインは設定されました。このシーンで[キャラクターA]と[キャラクターB]のダイアログを書いてください。ダイアログタグなし。5〜8回の交換。」',
          '**ページ数管理：** 1ページあたりの語数に決まった数値はなく、「1ページ＝1分」はあくまで目安です。ご自身の脚本の1ページあたり平均語数を数え、そこから語数上限を設定してください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ビートシートファーストの規律は小説執筆よりも脚本でより重要です。脚本のシーンは特定の構造的機能（セットアップ、対立、決定、逆転）と特定のページ目標を持ちます。ビートシートなしでページを生成すると、長さと構造的目的が逸脱したシーンになります。',
          },
        ],
      },
      sceneGeneration: {
        id: 'scene-generation',
        title: '長編作業のシーン生成テンプレート',
        content:
          '**長編シーン生成には、プレフィックスとしてのセッションドキュメントとアクションとしての1つのシーンプロンプトが必要です。** 以下のテンプレートは、セッションドキュメントがすでにシステムメッセージまたは最初のユーザーターンにあることを前提とします。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '長編フィクションで信頼できる生成パターンの一つ：システムプロンプトにセッションドキュメント→ユーザーターンに単一のシーンプロンプト→確認→セッションドキュメントを更新→繰り返し、1セッション1シーン。',
          },
          {
            type: 'plain-terms',
            text: 'モデルが次のシーンを一貫して書くために知る必要がある3つのこと：これらのキャラクターが誰か（キャラクターシート）、すでに何が起きたか（章サマリー）、このシーンが何をする必要があるか（シーンセットアップ）。ちょうどそれら3つを渡し、それ以上は渡さない。シーンを生成し、原稿に貼り付け、変化したことを反映してセッションドキュメントを更新。繰り返します。',
          },
        ],
        promptExamples: [
          {
            label: '小説シーン生成プロンプト',
            text: '[SESSION DOCUMENT ALREADY IN SYSTEM PROMPT]\n\nCurrent scene:\nChapter: [N]\nBeat: [one sentence from the beat sheet]\nPOV: [character name]\nOpening: [one sentence — where we are, who is present]\nEmotional landing: [what the POV character feels at the end — show, don\'t state]\nWord ceiling: [300–500 words]\n\nWrite this scene. No summarising. Every sentence renders a moment.',
          },
          {
            label: '連続性チェックプロンプト',
            text: 'Before writing the next scene, check for continuity. The session document says:\n- [Character A] is [trait/state]\n- The last scene ended with [brief description]\n\nThe next scene opens with [brief description]. Does this transition make sense? If not, what needs to change in the transition? One paragraph answer only.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '連続性チェックプロンプトは各シーンではなく、章の移行時に使います。章の移行（場所、時間、またはPOVキャラクターが変わる場所）が連続性の破綻が最も頻繁に起き、チェックが効果を発揮する場所です。',
          },
        ],
      },
      tools: {
        id: 'tools',
        itemHeadings: true,
        title: 'ライター向けツール統合',
        content:
          '**OllamaはローカルホストでOpenAI互換APIを公開しており、成長しているライター向けツールのエコシステムが接続しています。** 以下の統合は最も確立されたオプションを示します。',
        columns: ['ツール', 'リンク', '連携方法', '用途'],
        rows: [
          { 'ツール': 'Obsidian', 'リンク': '[obsidian.md](https://obsidian.md)', '連携方法': 'CopilotプラグインまたはSmart ConnectionsプラグインでOllama APIに接続。詳細は[Obsidian＋ローカルLLMプラグイン](/ja/power-local-llm/local-llm-with-obsidian-2026)を参照。', '用途': 'ノート＋原稿にObsidianをすでに使っているライター；同じアプリでシームレスに生成' },
          { 'ツール': 'Scrivener', 'リンク': '[literatureandlatte.com/scrivener](https://www.literatureandlatte.com/scrivener)', '連携方法': 'Ollama API経由の外部スクリプト→ドキュメントに貼り付け', '用途': 'Scrivenerで小説を構成するライター；AI草稿を既存のプロジェクト構造に貼り付け' },
          { 'ツール': 'VS Code', 'リンク': '[code.visualstudio.com](https://code.visualstudio.com)', '連携方法': 'Continue.dev拡張機能→Ollamaバックエンド', '用途': 'コードエディタに慣れているテクニカルライターとゲームナラティブデザイナー' },
          { 'ツール': 'SillyTavern', 'リンク': '[github.com/SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern)', '連携方法': 'OpenAI互換API→Ollama', '用途': 'ロールプレイ形式のフィクションとキャラクターカード駆動の執筆；永続的なキャラクター記憶' },
          { 'ツール': 'プレーンターミナル', '連携方法': '`ollama run [model]`またはOllama APIへのcurl', '用途': 'スクリプタブルなワークフロー；最小限のUIオーバーヘッドで最大限のコントロール' },
          { 'ツール': 'LM Studio', 'リンク': '[lmstudio.ai](https://lmstudio.ai)', '連携方法': '組み込みチャットUI＋ローカルサーバーAPI', '用途': 'Ollamaを別にインストールせずGUIモデルマネージャーを望むライター' },
          { 'ツール': 'NovelCrafter', 'リンク': '[novelcrafter.com](https://www.novelcrafter.com)', '連携方法': '組み込みAI統合；ヘルプページにLM Studio、Ollama、OpenAI API互換の接続が記載されている', '用途': '小説専用アプリで章レベルのAI支援を望むライター' },
          { 'ツール': 'Plottr', 'リンク': '[plottr.com](https://plottr.com)', '連携方法': '手動ワークフロー：Plottrで物語を構造化し、シーン/ビートを外部でOllamaに貼り付け（PlottrはAI機能を追加しない方針と表明）', '用途': '構造的プロッティングがワークフローの中心であるプロット重視のジャンルフィクション' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ほとんどのライターに機能する最もシンプルな統合：ObsidianにOllamaを向けたCopilotプラグイン。セッションドキュメントはObsidianノートに、原稿の章は同じVaultに、コンテキストを切り替えることなく同じアプリで直接生成できます。詳細は[Obsidian＋ローカルLLMプラグイン](/ja/power-local-llm/local-llm-with-obsidian-2026)を参照。',
          },
        ],
      },
      models: {
        id: 'models',
        itemHeadings: true,
        title: '長編作業のモデル推薦',
        content:
          '**長編執筆には短編フィクションとは異なるモデル要件があります。** コンテキスト遵守性、長いセッションにわたる命令追随の一貫性、複数の生成呼び出しにわたって声を維持する能力が意思決定に関連する要素です。以下の行は各モデルカードに基づく出発点であり、PromptQuorumはこれらのモデルを小説向けに評価していません。公開されている創作ライティングのリーダーボードもモデルの順位付けが一致しないため、自分のシーンで2つの候補を試してください。Command A+（総パラメータ2,180億、アクティブ250億、Apache 2.0）やMistral Large 3（総パラメータ6,750億、コンテキスト256K、Apache 2.0）のようなサーバークラスのオープンモデルは、一般消費者向けハードウェアの範囲外です。すべてのユースケースにわたるモデル景観については、[ローカルLLMベスト2026](/ja/local-llms/best-local-llms-2026)を参照。',
        columns: ['タスク', 'おすすめモデル', '理由'],
        rows: [
          { 'タスク': '小説執筆（主要）', 'おすすめモデル': 'Qwen3.6 27BまたはGemma 4 31B', '理由': '256K以上のコンテキストを掲げるApacheライセンスの27B〜31B密モデル；4ビットで24GB GPUまたは32GB以上のユニファイドメモリに収まるサイズクラス（推定）' },
          { 'タスク': '脚本作業', 'おすすめモデル': 'Qwen3.6 27BまたはLlama 3.3 70B', '理由': 'フォーマット遵守は主にシステムプロンプト次第；Fountainの1シーンを2つのモデルで試す。Llama 3.3 70Bは密モデルでコンテキスト128K、4ビットで約40GB必要（推定）' },
          { 'タスク': 'ビートシート/アウトライン生成', 'おすすめモデル': 'Qwen3.6 35B-A3B', '理由': 'トークンあたり350億パラメータ中30億がアクティブなMixture-of-Experts（Apache-2.0）のため、トークンあたりの生成が速い；アウトライン品質はPromptQuorumが未評価' },
          { 'タスク': 'ダイアログパス', 'おすすめモデル': 'サンプルが合うモデル', '理由': 'キャラクターのレジスターに合うキャリブレーション行を出したモデルで、ダイアログを別パスとして実行；ダイアログ向けモデルの検証済みランキングはない' },
          { 'タスク': 'リビジョン（構造的）', 'おすすめモデル': '初稿に使ったモデル', '理由': '1回の呼び出しにつき構造的制約を1つ指定するリビジョンプロンプトは、命令追随するどのモデルでも機能；1回の呼び出しにつき1シーン' },
          { 'タスク': '成熟した/暗いフィクション', 'おすすめモデル': 'Hermes 4 70B', '理由': 'Llama-3.1-70Bベース；Nous Researchはおおむね中立的なアラインメントと低い拒否率と説明；Llama 3ライセンス；ハイブリッド推論モード' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある間違い',
        items: [
          '**原稿全体をコンテキストに貼り付ける。** モデルが128K〜262Kのウィンドウを掲げていても、長い入力は使われる信頼性が下がるため、約32Kトークンで計画します。セッションドキュメント技術——圧縮したキャラクターシートと章サマリー——を使ってください。',
          '**モデルにオープンエンドのドキュメントを「継続」させる。** 「小説を続けて」はドリフトを生みます。「次のシーンを書いて：[特定のセットアップ、POV、語数上限]」は一貫した境界付き出力を生みます。',
          '**脚本にビートシートがない。** シーンビートなしでスクリプトページを生成すると、長さと構造的機能が逸脱したページになります。ビートシートを常に最初に生成してください。',
          '**セッションドキュメントの更新を無視する。** セッションドキュメントを更新しないと、数セッション以内に不整合が生じます。',
          '**1セッションで複数のシーンを生成する。** 複数シーン生成は最初のシーンは良く、その後は各シーンの一貫性が低下します。1セッション1シーン；リセットして再注入します。',
        ],
      },
      sources: {
        id: 'sources',
        title: 'ソース',
        items: [
          '[Qwen3.6-27Bモデルカード](https://huggingface.co/Qwen/Qwen3.6-27B)および[Qwen3.6-35B-A3Bモデルカード](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — パラメータ、ネイティブ262,144トークンのコンテキスト、YaRN拡張、Apache-2.0、2026年10月26日確認',
          '[Gemma 4 31Bモデルカード](https://huggingface.co/google/gemma-4-31B-it) — 密31B、256Kコンテキスト、Apache 2.0、2026年10月26日確認',
          '[Llama 3.3 70B Instructモデルカード](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) — 70B、128Kコンテキスト、Llama 3.3 Community License、2024年12月6日公開',
          '[Hermes 4 70Bモデルカード](https://huggingface.co/NousResearch/Hermes-4-70B) — Llama-3.1-70Bベース、ハイブリッド推論、「broadly neutral alignment」',
          '[Kimi-K2.6モデルカード](https://huggingface.co/moonshotai/Kimi-K2.6) — 総パラメータ1兆・アクティブ320億、256Kコンテキスト、ネイティブint4',
          '[Command A+ドキュメント](https://docs.cohere.com/docs/command-a-plus)および[Mistral Large 3モデルカード](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512) — サーバークラスモデルのパラメータ数とライセンス',
          '[Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172) — Liu et al., 2023',
          '[Fountain.io](https://fountain.io) — Fountain脚本フォーマット仕様と[アプリ一覧](https://fountain.io/apps)',
          '[Final Draftヘルプセンター](https://kb.finaldraft.com/hc/en-us/articles/15575076862228-Can-Final-Draft-import-a-file-written-in-a-Fountain-based-screenwriting-program) — Final Draftが.fountainファイルを直接インポートできないと記載',
          '[Amazon KDPのAIコンテンツ規則（Publishers Weekly）](https://www.publishersweekly.com/pw/by-topic/digital/content-and-e-books/article/93122-amazon-issues-new-ai-guidelines-for-its-kdp-platform.html)および[Clarkesworld投稿案内](https://clarkesworldmagazine.com/submissions/) — 出版社・プラットフォームのAI方針；投稿前に最新の文言を確認',
          '[Scrivenerリリースノート](https://www.literatureandlatte.com/scrivener/release-notes) — 3.4.0〜3.5.2（2025年12月）：プラグインやAPIの記載なし；「Scrivener itself contains no AI」；2026年10月26日確認',
          '[Plottr in 2026](https://plottr.com/plottr-in-2026/)および[NovelCrafterのAI接続ヘルプ](https://www.novelcrafter.com/help/categories/ai-connections) — PlottrはAI機能を開発していないと表明；NovelCrafterはLM Studio、Ollama、OpenAI API互換の接続を記載',
          'Ollama APIドキュメント — [Ollama](https://ollama.com/docs)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '小説執筆でまず試すローカルLLMモデルは？',
            a: '用途によって最適なモデルは異なり、PromptQuorumはこれらのモデルを小説向けに評価していません。出発点としては、27B〜31Bクラスの密モデル（Qwen3.6 27BまたはGemma 4 31B。どちらもモデルカードで256K以上のコンテキストとApacheライセンスが確認できます）か、実績のある70BクラスのLlama 3.3 70Bが現実的です。ビートシートやアウトラインにはアクティブパラメータが少なく生成が速いQwen3.6 35B-A3Bも選択肢です。ダイアログパスやFountain形式の出力は、ご自身のシーンで2つのモデルを比べて、キャラクターのレジスターやフォーマットに合う方を選んでください。成熟した/暗いフィクションには、拒否の少ないHermes 4 70B（Llama-3.1-70Bベース、Llama 3ライセンス）が同じワークフローで使えます。迷ったら1つの密モデルから始め、特定のタスクで物足りなさを感じたら別のモデルを試すのが実用的です。',
          },
          {
            q: 'ローカルLLMは完全な小説を書けますか？',
            a: 'ローカルLLMは完全な小説の散文を生成できますが、構成と編集の知性は書き手から来る必要があります。モデルは具体的なセットアップを与えられるとシーンを生成しますが、自分で計画したり、評価したり、テーマ上の判断をしたりはしません。すでに書き方が分かっているシーンのための高速な初稿ジェネレーターと考えるのが適切です：白紙の状態からの時間を節約してくれますが、重要な判断はすべて書き手が行います。投稿前に出版社やプラットフォームのAI方針を確認してください（下の出版社の質問を参照）。',
          },
          {
            q: '信頼できる最大のコンテキストウィンドウはどれくらいですか？',
            a: 'モデルは128Kから262,144トークンを掲げていますが、PromptQuorumは1回の生成あたり約32,000トークン（〜24,000語）で計画することを勧めます。長いコンテキストの研究では、モデルは長い入力の中間を使う信頼性が下がると報告されているためです。これは慎重な計画ルールであり、すべてのモデルについて測定された上限ではないため、ご自身のモデルで試してください。セッションドキュメント技術は作業コンテキストを4,000〜6,000トークン未満に保つので、どの生成呼び出しもその範囲内に十分収まります。',
          },
          {
            q: '小説の途中でモデルがキャラクターの声を変えるのを防ぐには？',
            a: '声のドリフトには2つの原因があります：古くなったセッションドキュメントとコンテキストの希薄化。修正：キャラクターシートをシステムメッセージに置き、重要なアークの瞬間の後にシートを更新し、各セッションコンテキストのトップセクションに収まるように簡潔に保ちます。',
          },
          {
            q: 'ScrivenerをローカルLLMで使えますか？',
            a: 'ネイティブには使えません——Scrivener 3にはドキュメント化されたプラグインシステムがなく、3.5.2（2025年12月）までの公式リリースノートにもAI統合の記載はありません：3.4.0のノートには「Scrivener itself contains no AI」とあり、macOSのシステム機能であるAppleのWriting Toolsへの対応が追加されています。一般的なワークフロー：Ollamaで生成（ターミナルまたはコンパニオンスクリプト経由）、出力をコピー、関連するScrivenerドキュメントに貼り付けます。ObsidianをAI執筆レイヤーとして使い、完成した章を最終構成のためにScrivenerにインポートするライターもいます。OllamaのAPIを呼び出して出力をクリップボードにコピーするスクリプトが、ネイティブ統合に最も近い方法です。',
          },
          {
            q: '脚本にはOllamaとクラウドAIどちらが良いですか？',
            a: '成熟したコンテンツ（暴力、暗い心理、道徳的に複雑なキャラクター）を生成する必要がある脚本家にとって、ローカルモデルはモデルとその拒否の挙動を自分で制御できる点が利点です——ホスト型モデルの中にはドラマチックな脚本に現れる内容を拒否したり和らげたりするものがあり、ホスト型の方針は時間とともに変わります。Hermes 4 70Bのような拒否の少ないローカルモデルは組み込みの拒否が少ないものの、生成・公開する内容の責任は自分にあります。フォーマットの一貫性は主にシステムプロンプトの指示で決まり、どちらでも機能します。選択は主にコンテンツの制御、プライバシー、コストの問題です。PromptQuorumは脚本向けにホスト型とローカルモデルの出力品質を比較していません。',
          },
          {
            q: '特定のキャラクターのように聞こえるダイアログを生成するには？',
            a: '3ステップのアプローチ：(1) キャラクターの話し言葉レジスターをセッションドキュメントに追加します。(2) セッション開始時にキャリブレーションステップとして中立的なコンテキストでそのキャラクターのサンプルダイアログ3〜5行を生成します。(3) ダイアログプロンプトでこれらのサンプル行を例として使います：「これらの例と同じレジスターでダイアログを書いて：[貼り付け]。」',
          },
          {
            q: '小説執筆のためにローカルLLMにGPUが必要ですか？',
            a: 'GPUは生成速度を大幅に高めますが必須ではありません。Apple Siliconでは、ユニファイドメモリのおかげで16GBのMacBook Proでも小さめのモデル（4ビットでおおむね8B〜14Bクラス、推定）を実行できます——24GB GPUの機材より遅いものの、生成の合間に出力を読んで評価する執筆ワークフローなら許容範囲です。24GBのNVIDIA GPU（RTX 4090、RTX 3090）は4ビットで27B〜32Bクラスのモデルを収められます（推定）。70Bクラスは4ビットで約40GB以上が必要なため、GPU2枚、48GBカード、64GBのユニファイドメモリ、または速度の落ちるCPUオフロードが必要です。',
          },
          {
            q: 'Final Draftや他のプロの脚本ソフトウェアでローカルLLMを使えますか？',
            a: '直接は使えません。Final Draftのヘルプセンターによれば、Final Draftは.fountainファイルをインポートできません。推奨されているのは、テキストをプレーンな.txtとして保存し、インポート時にScript（Textではなく）を選ぶか、FDXを書き出せるアプリ経由でFDXとして取り込む方法です。HighlandはFountain、FDX、PDFの間で変換でき、Fade InはFountainのインポートとエクスポートに対応しています（Fountainアプリ一覧による）。ワークフロー：OllamaでFountain形式のテキストを生成し、HighlandまたはFade Inで開き、Final Draft用にFDXを書き出します。',
          },
          {
            q: '小説執筆にKimi-K2.6をローカルで使えますか？',
            a: 'Kimi-K2.6は256Kトークンのコンテキストウィンドウを掲げており、Qwen3.6 27BやGemma 4 31Bと同じクラスですが、総パラメータ約1兆（アクティブ320億）のMixture-of-Expertsモデルで、ネイティブint4の重みを持ちます。重みだけで約500GBになり（PromptQuorumの推定）、マルチGPUサーバーか非常に大きなユニファイドメモリの機材が必要で、一般消費者向けハードウェアでは非現実的です。完全にローカルなワークフローでは、27B〜70Bの密モデルとセッションドキュメント技術で、1兆パラメータのモデルなしでも小説の長さの作業を処理できます。',
          },
          {
            q: '出版社はAI支援の原稿についてどう感じていますか？',
            a: '方針は出版社やプラットフォームによって異なり、2026年時点でも変化し続けているため、投稿前に該当するものを確認してください。Amazon KDPは、テキスト・画像・翻訳がAI生成の場合に申告を求め、AIツールで作成したコンテンツは大幅に編集してもAI生成として扱います。自分で書いた文章をAIが編集や推敲を手伝っただけなら「AI支援」で、申告は不要です（2023年9月にPublishers Weeklyが報じたAmazonの規則による）。一部の雑誌はAIが関与した作品を一切受け付けません——ClarkesworldはAIが執筆・共同執筆・支援した作品は検討しないと投稿案内に記しています。ローカルLLMが生成したシーンのテキストはKDPの「AI生成」の定義のような基準に該当するため、求められる場面では申告してください。これは一般的な情報であり、法的助言ではありません。',
          },
          {
            q: '100万トークン級のコンテキストにはどんなハードウェアが必要ですか？',
            a: 'Qwen3.6 27BとQwen3.6 35B-A3Bはネイティブで262,144トークンのコンテキストを掲げており、モデルカードによればYaRNスケーリングで約1,010,000トークンまで拡張できます。長いコンテキストでは重みに加えてKVキャッシュ用のメモリが必要なため、100万トークンでの実行には一般的な消費者向け環境よりはるかに多くのメモリが必要です。PromptQuorumは必要量を測定していません。この記事のセッションドキュメント技術は、まさにこのギャップのために設計されています——100万トークンのウィンドウに頼らずに一貫した長編出力を得るためです。',
          },
          {
            q: 'ローカルLLMを使って小説や脚本を執筆する際に個人情報保護法は関係しますか？',
            a: '完全にローカルなモデル（自分のハードウェア上のOllama、クラウドAPIなし）では、個人データは外部サーバーに送信されません。実在する人物の個人情報（氏名、経歴情報）をプロンプトに含める場合は個人情報保護法の原則（目的外利用禁止、安全管理措置）が適用される可能性があります。実在する個人に関係のないフィクションコンテンツの場合、完全ローカルLLMワークフローは一般的に問題を引き起こしません。',
          },
          {
            q: '日本でローカルAIモデルを使って性的または暴力的なコンテンツを書く際の法的制限は？',
            a: '合意のある成人キャラクターによる成人向けフィクションには、AIに特化した規制はありません。改正児童買春・ポルノ禁止法は未成年者の性的描写を禁止しています——これは人間かAIモデルがテキストを生成したかに関係なく適用されます。刑法175条はわいせつ物頒布を規制しています。法的責任はユーザーにあります。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[フィクションライター向けローカルLLMプロンプト：テンプレートと技術](/ja/power-local-llm/local-llm-prompts-for-fiction-writers) — セッションドキュメントワークフロー内で機能するシーン執筆、ダイアログ、キャラクター、ワールドビルディング、スタイル転換テンプレート。',
          '[ローカルLLMベスト2026](/ja/local-llms/best-local-llms-2026) — 創作執筆、コーディング、推論を含む全ユースケースにわたる包括的なモデル比較。',
          '[Obsidian＋ローカルLLMプラグイン](/ja/power-local-llm/local-llm-with-obsidian-2026) — 執筆ワークフロー向けにOllamaと最もよく機能するObsidianプラグインの詳細ガイド。',
          '[ローカルLLMクリエイティブライティングベスト2026](/ja/power-local-llm/best-local-llm-creative-writing) — サンプリング設定とハードウェア要件を含む物語生成のモデル比較。',
          '[アンセンサードローカルLLMと創作：倫理とセットアップ](/ja/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 成熟したフィクション向けにアンセンサードモデルをいつ使うか、同じOllamaワークフローでのセットアップ方法。',
          '[SillyTavern vs Agnai vs RisuAI：ベストローカルロールプレイフロントエンド](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — キャラクターカード駆動の執筆と協調フィクションのフロントエンドオプション。',
          '[Continue.dev vs Cline vs Aider：ベストローカルコーディングアシスタント](/ja/power-local-llm/continue-dev-vs-cline-vs-aider-local) — Continue.devをVS Codeのインライン執筆支援にOllamaに向けられます。',
          '[ゼロショット vs フューショットプロンプティング](/ja/prompt-engineering/zero-shot-vs-few-shot) — フィクションタスクでプロンプトにサンプルを含めるべき時と保留すべき時。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-26',
    theme: 'Creative & Roleplay',
    heroImage: '/images/local-llm-screenwriting-and-novel-drafting-overview-hero-zh.webp',
    title: '使用本地LLM创作小说与剧本：10万字以上工作流完整指南',
    seoTitle: '使用本地LLM创作小说与剧本：长篇工作流完整指南',
    intro:
      '将本地LLM整合到小说与剧本的写作工作流中，无需互联网连接、云端日志记录或使用限制，即可生成场景草稿、节拍表、对话轮次和修改润色。本指南涵盖完整工作流：模型选择、长篇写作的上下文窗口管理、章节结构搭建、场景生成，以及将本地LLM与写作软件相连接的工具。',
    metaDescription:
      '使用本地LLM创作小说与剧本的完整工作流：模型起点、上下文管理、章节结构、场景生成及写作工具集成全面详解，并核对各模型卡上标注的上下文窗口信息。',
    twitterDescription:
      '本地LLM创作小说与剧本的方法：上下文窗口管理、章节结构、场景生成、对话轮次和工具集成。',
    current_models_mentioned: [
      'Qwen3.6 27B',
      'Gemma 4 31B',
      'Llama 3.3 70B',
      'Hermes 4 70B',
      'Kimi-K2.6',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      '希望将本地LLM用作长篇创作写作助手的编剧、小说家和叙事游戏设计师——目标包括上下文窗口管理、生成草稿内容，以及将AI辅助整合到现有写作工具中的中级用户。',
    readTime: '15分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM screenwriting novel drafting',
    targetKeywords: [
      '本地LLM 小说创作',
      '本地LLM 剧本写作',
      'Ollama 创意写作工作流',
      '上下文窗口 长篇小说',
      '本地AI 写作助手',
      '场景生成 本地模型',
    ],
    leadAnswerBlock:
      '**用本地LLM写长篇小说的主要挑战是上下文管理：每次生成按约32,000 token规划，并向模型提供压缩的"会话文档"（角色卡、章节摘要、当前场景设置）而非整部手稿，一次只写一个场景。**',
    quickAnswerTop: {
      zh: {
        question: '如何在不丢失上下文的情况下使用本地LLM创作小说或剧本？',
        answer:
          '核心技术是结构化上下文注入：不是将整个手稿粘贴到上下文窗口中，而是维护一份压缩的会话文档——角色卡（名字、主导特质、说话风格）、已完成章节的情节摘要（每章100-200字）以及当前场景的设置（节拍、视角、字数上限）。在每个写作会话开始时注入这份文档。每次生成一个场景，而不是要求模型继续不断增长的文档。由于每次调用只携带压缩后的状态，这种方法可适用于任何小说长度，并减少作者把整部手稿塞进单个长上下文窗口时报告的上下文漂移和声音丢失。',
        bullets: [
          '会话文档技术：在会话开始时注入角色卡＋章节摘要＋当前场景设置。',
          '每次生成一个场景——避免要求模型在超过约32K token后"继续"不断增长的文档。',
          '剧本写作节拍表优先：在写散文之前先生成节拍表，用作结构支架。',
          '模型起点（来自模型卡的规格）：Qwen3.6 27B、Gemma 4 31B、Llama 3.3 70B；PromptQuorum未针对小说写作对它们做过评测。',
          'Ollama＋Obsidian是常见的作者工作流；Scrivener没有公开文档的插件API，因此输出需要粘贴。',
          '上下文窗口规划规则：模型标称128K–262,144 token；每次生成按约32K规划，因为长上下文的质量并不稳定。',
          'Hermes 4 70B等低拒答微调模型可用同一工作流写成熟小说；请查看各模型的许可证。',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: '上下文窗口问题', anchor: '#context-window' },
      { label: '会话文档技术', anchor: '#session-document' },
      { label: '小说写作工作流', anchor: '#novel-workflow' },
      { label: '剧本写作工作流', anchor: '#screenwriting-workflow' },
      { label: '场景生成模板', anchor: '#scene-generation' },
      { label: '工具集成', anchor: '#tools' },
      { label: '模型推荐', anchor: '#models' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '参考来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**上下文窗口规划规则：标称128K–262,144 token，规划约32K。** 模型对长输入中间部分的利用可靠性较低（"Lost in the Middle"），因此每次生成按约32K token（约24,000字）规划，并使用会话文档技术而非整部手稿。',
          '**会话文档技术是核心技能。** 维护一个压缩文本文件，包含：活跃角色卡（每个角色150字）、章节摘要（每个已完成章节100-200字）和当前场景设置。在每个生成会话开始时注入。',
          '**每次生成一个场景。** 每个会话要求模型写一个场景（200-600字），而非要求其继续不断增长的文档。每次一个场景可减少上下文漂移，并有助于保持声音一致。',
          '**剧本写作节拍表优先。** 在生成任何剧本页面之前，先生成场景级节拍表。将节拍表用作每次页面生成的结构支架。',
          '**选一个自己能运行的模型，并用自己的一个场景来测试。** 27B–31B级稠密模型（Qwen3.6 27B、Gemma 4 31B）和Llama 3.3 70B是常见的起点；PromptQuorum未针对小说写作评测其中任何一个，公开的创意写作排行榜对模型的排名也互不一致。',
          '**Ollama＋纯文本写作工具是可靠的集成。** Scrivener、Obsidian和VS Code都可以存放手稿；Ollama通过API提供模型服务，配套应用或脚本可以调用。',
          '**低拒答模型（Hermes 4 70B）无需更改设置即可融入工作流。** 对于成熟小说，只需切换Ollama模型；会话文档和场景生成技术完全相同。请按自己的用途查看各模型的许可证。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**模型起点（来自模型卡）：** Qwen3.6 27B（稠密，Apache-2.0，262,144 token上下文）、Gemma 4 31B（稠密，Apache-2.0，256K上下文）、Llama 3.3 70B（稠密，128K上下文，Llama 3.3 Community License）。',
          '**上下文窗口规划上限：** 每次生成约32K token（约24,000字）；模型标称128K–262,144 token，这是上限，而非质量保证。',
          '**会话文档大小：** 目标低于4,000 token（角色卡＋章节摘要＋当前场景设置）。',
          '**场景生成目标：** 每次生成调用200-600字；通过多个连续提示词生成较长场景。',
          '**剧本格式：** 将Ollama与Fountain格式输出指令结合，生成剧本格式文本。',
          '**与Ollama配合的写作工具：** Scrivener（粘贴输出；无公开文档的插件API）、Obsidian（通过本地插件或脚本）、VS Code（通过Continue.dev或直接API调用）、纯终端。',
          '**低拒答选项：** 成熟小说用Hermes 4 70B（基于Llama-3.1-70B）；相同工作流，相同会话文档技术。',
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: '长篇写作的上下文窗口问题',
        image: '/images/local-llm-screenwriting-and-novel-drafting-context-window-en.svg',
        imageCaption:
          '上下文规划：工作上限32K token（约24,000字），开源模型标称128K–262,144 token。',
        content:
          '**即使模型标称大得多的窗口，每次生成也应按约32K token规划。** 这是PromptQuorum的保守规划规则，而非实测上限：长上下文研究（Liu等，"Lost in the Middle"）发现，模型对长输入开头和结尾信息的利用比对中间信息更可靠，并且随着输入变长质量可能下降。较新的模型标称更大的窗口——Qwen3.6 27B原生标称262,144 token，Gemma 4 31B标称256K——因此应自己测试所用模型。对小说而言，粘贴目前的手稿并要求下一章仍是最不可靠的做法，而且长上下文还会占用更多内存，因为KV缓存会随之增长。\n\nMoonshot AI的Kimi-K2.6标称256K token（262,144）的上下文窗口，与上述模型属于同一级别，但它是总参数约1万亿（激活320亿）的混合专家模型，并以原生int4权重发布。即使按4位计算，仅权重就约500 GB（PromptQuorum估算：1万亿参数×0.5字节），因此它是服务器级模型，而非笔记本级模型。会话文档技术和逐场景生成适用于任何上下文大小的本地可运行模型。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '本地LLM上下文遵循的保守规划上限约为每次生成32,000 token（约24,000字）——超过此限制，长上下文研究发现模型对早期内容的利用可靠性较低，这可能在长篇手稿中表现为声音漂移和情节不一致。',
          },
          {
            type: 'plain-terms',
            text: '不能因为整部手稿放得进上下文窗口，就指望模型在写第20章时可靠地记得第3章发生了什么。替代方案：将模型需要知道的内容——角色卡、章节摘要、当前场景设置——压缩到不超过4,000 token的"会话文档"中，并在每个写作会话开始时注入。模型只需要知道与它正在生成的场景相关的内容。',
          },
        ],
        items: [
          '**Token与字数换算：** 英文中1个token约0.75个词（经验法则）。32K token约24,000个词。128K token约96,000个词（约一部小说）；262,144 token约196,000个词。',
          '**注意力退化：** 模型可能失去对长上下文窗口早期内容的可靠引用——表现为角色名字错误、遗忘情节点和声音漂移。',
          '**不对称性：** 在Lost in the Middle研究中，模型对输入开头和结尾的利用最好，对中间内容的利用最不可靠。该研究测试的是2023年可用的模型，因此应测试当前模型，而不是假定模式相同。',
          '**会话文档作为解决方案：** 将模型需要的所有内容压缩到简短的结构化文档中。开始时注入。生成场景。结束会话。重置。用更新后的文档重新开始。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '不要将完整手稿粘贴到上下文中。如果你的小说超过10,000字并粘贴完整草稿来要求下一章，就有上下文漂移的风险——模型可能忘记早期角色细节，与已建立的情节点矛盾，并退回到通用风格。请改用会话文档技术。',
          },
        ],
      },
      sessionDocument: {
        id: 'session-document',
        title: '会话文档技术',
        content:
          '会话文档技术是PromptQuorum基于上文所述上下文限制提出的工作流建议。PromptQuorum未对其做过对照测试，下列大小（4,000 token、每张角色卡150字、每章摘要100-150字）是规划参考值，而非实测阈值。\n\n**会话文档是你在手稿旁边维护的纯文本文件——它是模型需要了解的、用于生成一致内容的小说压缩状态。** 它有三个部分：活跃角色卡、章节摘要和当前场景设置。',
        promptExamples: [
          {
            label: '会话文档模板',
            text: '# SESSION DOCUMENT — [NOVEL TITLE]\n\n## ACTIVE CHARACTERS\n**[Character Name]**\nDominant trait: [one trait]\nContradicting behaviour: [one behaviour]\nSpeech register: [formal/casual/specific verbal tics]\nRelationship to [other character]: [brief]\n\n**[Character Name 2]**\n[same structure]\n\n## CHAPTER SUMMARIES (completed)\n**Chapter 1:** [100–150 words — what happened, what changed, where it ended]\n**Chapter 2:** [100–150 words]\n[continue for all completed chapters]\n\n## CURRENT SCENE SETUP\nChapter: [N]\nScene: [brief description of what this scene needs to accomplish]\nPOV: [character name]\nOpening state: [where we are at the start of this scene — 1 sentence]\nEmotional beat to land on: [what the POV character feels at the end — do not state it directly in the scene]\nWord ceiling: [200–500 words]',
          },
        ],
        items: [
          '**角色卡——每个活跃角色目标150字。** 包含主导特质、矛盾行为、说话风格和与其他活跃角色的关键关系。角色活跃或离开手稿时添加或移除。',
          '**章节摘要——每个已完成章节目标100-150字。** 重点：发生了什么，角色关系发生了什么变化，读者现在知道哪些信息，章节在空间和情感上的结束位置。',
          '**当前场景设置——具体而简洁。** 指定视角、场景目的（在故事中需要完成什么）、要达到的情感节拍和字数上限。',
          '**会话文档大小——目标低于4,000 token（约3,000字）。** 超过这一大小的文档会占用本应用于生成本身的上下文空间。',
          '**每次会话后更新。** 生成场景后，在相关章节摘要中添加1-2句更新，并更新任何发生变化的角色卡条目。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '将会话文档保存在手稿旁边的纯文本文件中。在Ollama中，可以创建一个在SYSTEM块中包含会话文档的Modelfile，并在每次会话前刷新。在SillyTavern中，在每次小说会话开始时将其粘贴到系统提示字段中。',
          },
        ],
      },
      novelWorkflow: {
        id: 'novel-workflow',
        title: '小说写作工作流',
        image: '/images/local-llm-screenwriting-and-novel-drafting-workflow-steps-en.svg',
        imageCaption:
          '本地LLM小说写作四阶段：大纲、节拍表、场景生成、修改，围绕会话文档展开。',
        content:
          '**使用本地LLM的小说写作工作流有四个阶段：大纲、章节节拍表、场景生成和修改轮次。** 每个阶段使用不同的提示词结构。',
        items: [
          '**第一阶段——大纲：** 生成章节级大纲（10-30章，每章一句话：发生什么，什么改变）。提示词：「类型：[类型]。主角：[姓名＋核心创伤]。中心冲突：[一句话]。写一个20章大纲——每章一句话，每句话命名场景和变化。」在继续之前审查并编辑大纲。',
          '**第二阶段——节拍表：** 将每个章节条目扩展为场景级节拍表（每章3-8个场景）。每章提示词：「第[N]章摘要：[粘贴一句话大纲条目]。扩展为场景级节拍表：4-6个场景，每个用一句话描述地点、参与者和场景的唯一变化。还不需要散文。」',
          '**第三阶段——场景生成：** 使用会话文档＋当前场景节拍，逐场景生成。生成、审查、粘贴到手稿、更新会话文档。重复。',
          '**第四阶段——修改轮次：** 完成章节后，对特定场景运行有针对性的修改提示词。参见[小说作家本地LLM提示词](/zh/power-local-llm/local-llm-prompts-for-fiction-writers)了解修改提示词结构。不要要求模型在一次生成调用中修改超过一个场景。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '将大纲和节拍表保存在与手稿分开的文件中。它们是骨架——手稿是血肉。分开的文件意味着可以重新生成任何部分而不覆盖另一部分，并且可以只粘贴当前场景设置的相关节拍表条目而不包含完整大纲。',
          },
        ],
      },
      screenwritingWorkflow: {
        id: 'screenwriting-workflow',
        title: '剧本写作工作流',
        content:
          '**使用本地LLM进行剧本写作使用与小说写作相同的会话文档和节拍表技术，加上两个补充：系统提示中的格式指令，以及将场景标题（slug line）生成作为独立于页面生成的步骤。**',
        promptExamples: [
          {
            label: '剧本系统提示词',
            text: 'You are a screenplay formatting assistant. All prose you generate is formatted in standard US screenplay format:\n- Scene headers: INT./EXT. LOCATION — DAY/NIGHT\n- Action lines: present tense, concrete, maximum 3 lines per block\n- Character names: ALL CAPS above dialogue\n- Dialogue: centred, no dialogue tags\n- Parentheticals: sparingly, only for delivery or action mid-dialogue\n\nGenerate in Fountain-compatible plain text.',
          },
          {
            label: '场景节拍到剧本页面提示词',
            text: 'Beat: [paste the one-sentence scene beat from the beat sheet]\nPOV character: [Name]\nPage target: [1–3 pages]\n\nGenerate the script pages for this beat. Use standard screenplay format. Begin with the slug line. No narration — action lines and dialogue only.',
          },
        ],
        items: [
          '**格式放在系统提示中，而非用户轮次。** 将剧本格式指令放入系统消息意味着会话中的每次生成都遵循格式，无需重复指令。',
          '**Fountain兼容输出：** Fountain是剧本纯文本标记格式；Highland和Fade In可读取它，[Fountain应用目录](https://fountain.io/apps)中的其他应用也可以。要求生成"Fountain兼容纯文本"会产生可在这些工具中打开或转换给其他工具使用的输出（见常见问题中关于Final Draft的问题）。',
          '**先生成slug line：** 在生成场景内容之前，先将slug line（INT./EXT. 地点——白天/夜晚）作为单独的单行提示词生成。这在模型开始生成动作描述之前确定了物理地点。',
          '**对话轮次：** 生成动作描述后，运行单独的对话轮次：「动作描述已定。为这个场景写[角色A]和[角色B]的对话。角色A想要[X]。角色B想要[Y]。不要对话标签。5-8次交换。」',
          '**页数管理：** 每页字数没有固定数值，"一页等于一分钟"也只是经验法则。统计自己剧本每页的平均字数，并据此设定字数上限。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '节拍表优先的纪律在剧本写作中比小说写作更重要。剧本场景有特定的结构功能（设置、对抗、决定、逆转）和特定的页数目标。没有节拍表就生成页面会产生在长度和结构目的上漂移的场景。在生成页面之前，始终要知道一个场景应该完成什么。',
          },
        ],
      },
      sceneGeneration: {
        id: 'scene-generation',
        title: '长篇写作的场景生成模板',
        content:
          '**长篇场景生成需要会话文档作为前缀，单个场景提示词作为动作。** 下面的模板假设会话文档已经在系统消息或第一个用户轮次中。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '长篇小说可靠的生成模式之一：系统提示中放会话文档→用户轮次中放单个场景提示词→审查→更新会话文档→重复，每次会话一个场景。',
          },
          {
            type: 'plain-terms',
            text: '模型需要知道三件事才能一致地写下一个场景：这些角色是谁（角色卡）、已经发生了什么（章节摘要）、这个场景需要做什么（场景设置）。只给它这三件事，不多不少。生成场景，粘贴到手稿中，更新会话文档以反映发生了什么变化。重复。',
          },
        ],
        promptExamples: [
          {
            label: '小说场景生成提示词',
            text: '[SESSION DOCUMENT ALREADY IN SYSTEM PROMPT]\n\nCurrent scene:\nChapter: [N]\nBeat: [one sentence from the beat sheet]\nPOV: [character name]\nOpening: [one sentence — where we are, who is present]\nEmotional landing: [what the POV character feels at the end — show, don\'t state]\nWord ceiling: [300–500 words]\n\nWrite this scene. No summarising. Every sentence renders a moment.',
          },
          {
            label: '连续性检查提示词',
            text: 'Before writing the next scene, check for continuity. The session document says:\n- [Character A] is [trait/state]\n- The last scene ended with [brief description]\n\nThe next scene opens with [brief description]. Does this transition make sense? If not, what needs to change in the transition? One paragraph answer only.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '在章节转换时使用连续性检查提示词——而非每个场景都用。章节转换（地点、时间或视角角色发生变化的地方）是连续性断裂最常发生、检查效果最好的地方。',
          },
        ],
      },
      tools: {
        id: 'tools',
        itemHeadings: true,
        title: '作者工具集成',
        content:
          '**Ollama在本地主机上暴露一个OpenAI兼容API，越来越多的面向作者的工具生态系统与之连接。** 以下集成代表截至目前最成熟的选项。',
        columns: ['工具', '链接', '集成方式', '适用场景'],
        rows: [
          { '工具': 'Obsidian', '链接': '[obsidian.md](https://obsidian.md)', '集成方式': 'Copilot插件或Smart Connections插件→Ollama API。详见[Obsidian＋本地LLM插件](/zh/power-local-llm/local-llm-with-obsidian-2026)深度指南。', '适用场景': '已在用Obsidian做笔记＋手稿的作者；在同一应用中无缝生成' },
          { '工具': 'Scrivener', '链接': '[literatureandlatte.com/scrivener](https://www.literatureandlatte.com/scrivener)', '集成方式': '通过Ollama API的外部脚本→粘贴到文档', '适用场景': '在Scrivener中结构化小说的作者；AI草稿粘贴到现有项目结构' },
          { '工具': 'VS Code', '链接': '[code.visualstudio.com](https://code.visualstudio.com)', '集成方式': 'Continue.dev扩展→Ollama后端', '适用场景': '熟悉代码编辑器的技术写作者和游戏叙事设计师' },
          { '工具': 'SillyTavern', '链接': '[github.com/SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern)', '集成方式': 'OpenAI兼容API→Ollama', '适用场景': '角色扮演式小说和角色卡驱动的写作；持久化角色记忆' },
          { '工具': '纯终端', '集成方式': '`ollama run [model]`或curl到Ollama API', '适用场景': '可脚本化工作流；希望以最小UI开销获得最大控制权的作者' },
          { '工具': 'LM Studio', '链接': '[lmstudio.ai](https://lmstudio.ai)', '集成方式': '内置聊天界面＋本地服务器API', '适用场景': '希望有GUI模型管理器而无需单独安装Ollama的作者' },
          { '工具': 'NovelCrafter', '链接': '[novelcrafter.com](https://www.novelcrafter.com)', '集成方式': '内置AI集成；其帮助页面列出了LM Studio、Ollama和OpenAI API兼容连接', '适用场景': '希望在单个小说专用应用中获得章节级AI辅助的作者' },
          { '工具': 'Plottr', '链接': '[plottr.com](https://plottr.com)', '集成方式': '手动工作流：在Plottr中构建故事结构，外部将场景/节拍粘贴到Ollama（Plottr表示不会加入AI功能）', '适用场景': '以结构性情节设计为工作流核心的情节密集型类型小说（悬疑、惊悚、奇幻）' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '对大多数作者最有效的最简单集成：Obsidian＋指向Ollama的Copilot插件。会话文档在Obsidian笔记中，手稿章节在同一个Vault中，无需切换上下文即可在同一应用中直接生成。详见[Obsidian＋本地LLM插件](/zh/power-local-llm/local-llm-with-obsidian-2026)深度指南。',
          },
        ],
      },
      models: {
        id: 'models',
        itemHeadings: true,
        title: '长篇写作模型推荐',
        content:
          '**长篇写作与短篇小说的模型要求不同。** 上下文遵循性、跨长会话的指令跟随一致性，以及跨多次生成调用维持声音的能力，是决策相关因素。下面各行是取自各模型卡的起点；PromptQuorum未针对小说写作评测这些模型，公开的创意写作排行榜对模型的排名也互不一致，因此请用自己的一个场景测试两个候选模型。Command A+（总参数2,180亿，激活250亿，Apache 2.0）和Mistral Large 3（总参数6,750亿，256K上下文，Apache 2.0）等服务器级开源模型超出了消费级硬件的范围。关于所有使用场景的更广泛模型概览，参见[本地LLM最佳选择2026](/zh/local-llms/best-local-llms-2026)。',
        columns: ['任务', '推荐模型', '原因'],
        rows: [
          { '任务': '小说写作（主要）', '推荐模型': 'Qwen3.6 27B或Gemma 4 31B', '原因': '标称256K+上下文、采用Apache许可证的27B–31B稠密模型；4位下适合24 GB GPU或32 GB以上统一内存的规模级别（估算）' },
          { '任务': '剧本写作', '推荐模型': 'Qwen3.6 27B或Llama 3.3 70B', '原因': '格式遵循主要取决于系统提示词；用两个模型各测试一个Fountain场景。Llama 3.3 70B为稠密模型，标称128K上下文，4位下约需40 GB（估算）' },
          { '任务': '节拍表/大纲生成', '推荐模型': 'Qwen3.6 35B-A3B', '原因': '混合专家模型，每个token激活350亿参数中的30亿（Apache-2.0），因此每token生成更快；大纲质量未经PromptQuorum评测' },
          { '任务': '对话轮次', '推荐模型': '样例最贴合的模型', '原因': '将对话作为单独一轮，交给校准台词最贴合角色说话风格的模型；目前没有经过验证的对话类模型排名' },
          { '任务': '修改（结构性）', '推荐模型': '初稿所用的模型', '原因': '每次调用只指明一个结构性约束的修改提示词，适用于任何能遵循指令的模型；每次调用一个场景' },
          { '任务': '成熟/黑暗小说', '推荐模型': 'Hermes 4 70B', '原因': '基于Llama-3.1-70B；Nous Research称其对齐总体中立、拒答率较低；Llama 3许可证；混合推理模式' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**将完整手稿粘贴到上下文中。** 即使模型标称128K–262K的窗口，长输入的利用可靠性也较低，因此应按约32K token规划。改用会话文档技术——压缩的角色卡和章节摘要。',
          '**要求模型"继续"开放式文档。** "继续这部小说"会产生漂移。"写下一个场景：[具体设置、视角、字数上限]"会产生可评估和粘贴的一致有界输出。',
          '**剧本写作没有节拍表。** 没有场景节拍就生成剧本页面会产生在长度和结构功能上漂移的页面。始终先生成节拍表。',
          '**忽略会话文档更新。** 如果不在生成场景后更新章节摘要，会话文档会变得过时。过时的会话文档会在几次会话内产生不一致。',
          '**每次会话生成多个场景。** 在一个上下文窗口中生成多个场景，第一个场景效果好，之后每个场景的一致性会降低。每次会话一个场景；重置并重新注入。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          '[Qwen3.6-27B模型卡](https://huggingface.co/Qwen/Qwen3.6-27B)和[Qwen3.6-35B-A3B模型卡](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — 参数、原生262,144 token上下文、YaRN扩展、Apache-2.0，2026年10月26日查阅',
          '[Gemma 4 31B模型卡](https://huggingface.co/google/gemma-4-31B-it) — 稠密31B、256K上下文、Apache 2.0，2026年10月26日查阅',
          '[Llama 3.3 70B Instruct模型卡](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) — 70B、128K上下文、Llama 3.3 Community License，2024年12月6日发布',
          '[Hermes 4 70B模型卡](https://huggingface.co/NousResearch/Hermes-4-70B) — 基于Llama-3.1-70B、混合推理、"broadly neutral alignment"',
          '[Kimi-K2.6模型卡](https://huggingface.co/moonshotai/Kimi-K2.6) — 总参数1万亿、激活320亿、256K上下文、原生int4',
          '[Command A+文档](https://docs.cohere.com/docs/command-a-plus)和[Mistral Large 3模型卡](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512) — 服务器级模型的参数量和许可证',
          '[Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172) — Liu等，2023',
          '[Fountain.io](https://fountain.io) — Fountain剧本格式规范及[应用列表](https://fountain.io/apps)',
          '[Final Draft帮助中心](https://kb.finaldraft.com/hc/en-us/articles/15575076862228-Can-Final-Draft-import-a-file-written-in-a-Fountain-based-screenwriting-program) — 说明Final Draft无法直接导入.fountain文件',
          '[Amazon KDP的AI内容规则（Publishers Weekly）](https://www.publishersweekly.com/pw/by-topic/digital/content-and-e-books/article/93122-amazon-issues-new-ai-guidelines-for-its-kdp-platform.html)和[Clarkesworld投稿须知](https://clarkesworldmagazine.com/submissions/) — 出版社和平台的AI政策；投稿前请核对最新措辞',
          '[Scrivener发布说明](https://www.literatureandlatte.com/scrivener/release-notes) — 3.4.0至3.5.2（2025年12月）：没有插件或API条目；"Scrivener itself contains no AI"；2026年10月26日查阅',
          '[Plottr in 2026](https://plottr.com/plottr-in-2026/)和[NovelCrafter AI连接帮助](https://www.novelcrafter.com/help/categories/ai-connections) — Plottr表示不开发AI功能；NovelCrafter列出了LM Studio、Ollama和OpenAI API兼容连接',
          'Ollama API文档 — [Ollama](https://ollama.com/docs)',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '如何让本地LLM生成小说的下一章内容？',
            a: '不要直接要求模型"继续写下一章"——输入变长后，模型对早期内容的利用可靠性会下降，生成内容可能逐渐偏离已建立的情节和人物声音（保守的规划上限约为每次生成32K token）。正确做法是使用会话文档技术：在提示中提供压缩的角色卡（姓名、主导特质、说话方式）、已完成章节的情节摘要（每章100-200字），以及新章节的具体设定（场景、视角、目标字数），然后要求模型只生成这一章/一个场景，而不是延续整份不断增长的文档。每次生成一章后，将该章的摘要追加到会话文档中，供下一次生成使用。',
          },
          {
            q: '本地LLM可以写一整部小说吗？',
            a: '本地LLM可以生成整部小说的文字，但结构性和编辑层面的判断必须来自作者。模型在获得具体设定时生成场景；它不会自行规划、评估或做出主题层面的决定。可以把它看作针对你本来就知道怎么写的场景的快速初稿生成器：它节省面对空白页的时间，而每一个重要决定仍由作者做出。投稿前请核对出版社和平台的AI政策（见下方关于出版商的问题）。',
          },
          {
            q: '我可以可靠地使用的最大上下文窗口是多少？',
            a: '模型标称128K至262,144 token，但PromptQuorum建议每次生成按约32K token（约24,000字）规划，因为长上下文研究表明模型对长输入中间部分的利用可靠性较低。这是保守的规划规则，而非对每个模型实测的上限，因此请测试你自己的模型。会话文档技术把工作上下文控制在4,000–6,000 token以内，因此每次生成调用都远低于这一范围。',
          },
          {
            q: '如何防止模型在小说中途改变角色的声音？',
            a: '声音漂移有两个原因：过时的会话文档（缺少最近的角色发展）和上下文稀释（角色卡离上下文中活跃生成太远）。修复：将角色卡放在系统消息中，在角色有重要弧线时刻的场景后更新卡片，并保持卡片简洁以适应每个会话上下文的顶部部分。',
          },
          {
            q: '我可以在本地LLM中使用Scrivener吗？',
            a: '不能原生使用——Scrivener 3没有公开文档的插件系统，截至3.5.2（2025年12月）的官方发布说明也未提及AI集成：3.4.0的说明写明"Scrivener itself contains no AI"，并新增了对Apple Writing Tools（macOS系统功能）的支持。常见的工作流是：在Ollama中生成（通过终端或配套脚本），复制输出，粘贴到相应的Scrivener文档。有些作者把Obsidian用作AI写作层，再将完成的章节导入Scrivener做最终结构整理。调用Ollama API并把输出复制到剪贴板的脚本最接近原生集成。',
          },
          {
            q: '剧本写作用Ollama还是云端AI更好？',
            a: '对于需要生成成熟内容（暴力、阴暗心理、道德复杂的角色）的编剧，本地模型让你可以控制模型及其拒答行为——一些托管模型会拒绝或淡化戏剧剧本中常出现的内容，而且托管服务的政策会随时间变化。Hermes 4 70B这类低拒答本地模型内置的拒答较少，但你仍需对自己生成和发布的内容负责。格式一致性主要取决于系统提示词中的指令，两者都适用。选择主要取决于内容控制、隐私和成本；PromptQuorum没有针对剧本写作比较托管模型与本地模型的输出质量。',
          },
          {
            q: '如何生成听起来像特定角色的对话？',
            a: '三步方法：(1) 将角色的说话风格添加到会话文档（"正式，避免缩略，以\'依我看来…\'等限定语开始句子"）。(2) 在会话开始时作为校准步骤，在中性上下文中生成该角色的3-5行示例对话。(3) 在对话提示词中使用这些示例行作为例子：「用与这些示例相同的风格写对话：[粘贴]。」',
          },
          {
            q: '小说写作需要GPU才能使用本地LLM吗？',
            a: 'GPU能显著加快生成速度，但不是必需的。在Apple Silicon上，统一内存让16 GB的MacBook Pro可以运行较小的模型（4位下大约8B–14B级，属估算）——比24 GB GPU的机器慢，但在你于两次生成之间阅读和评估输出时是可以接受的。24 GB的NVIDIA GPU（RTX 4090、RTX 3090）在4位下可容纳27B–32B级模型（估算）；70B级模型在4位下约需40 GB或更多，因此需要两块GPU、48 GB显卡、64 GB统一内存，或速度较慢的CPU卸载。',
          },
          {
            q: '我可以将本地LLM与Final Draft或其他专业剧本软件一起使用吗？',
            a: '不能直接使用。据Final Draft帮助中心，Final Draft无法导入.fountain文件；其建议是将文本保存为纯.txt，并在导入时选择Script（而非Text），或通过能导出FDX的应用以FDX格式导入。Highland可在Fountain、FDX和PDF之间转换，Fade In可导入并导出Fountain（据Fountain应用目录）。工作流：在Ollama中生成Fountain格式文本，在Highland或Fade In中打开，再导出FDX供Final Draft使用。',
          },
          {
            q: '我可以在本地使用Kimi-K2.6进行小说写作吗？',
            a: 'Kimi-K2.6标称256K token的上下文窗口，与Qwen3.6 27B和Gemma 4 31B属于同一级别，但它是总参数约1万亿（激活320亿）的混合专家模型，采用原生int4权重。仅权重就约500 GB（PromptQuorum估算），需要多GPU服务器或超大统一内存的机器，在消费级硬件上不现实。对于完全本地的工作流，27B–70B的稠密模型配合会话文档技术即可处理小说篇幅的工作，而无需万亿参数模型。',
          },
          {
            q: '出版商如何看待AI辅助手稿？',
            a: '各出版社和平台的政策不同，并在2026年仍在变化，因此投稿前请核对具体的政策。Amazon KDP要求在文字、图片或翻译由AI生成时告知，并且即使经过大幅编辑，由AI工具创作的内容仍视为AI生成；你自己撰写、AI只是帮助编辑或润色的文字属于"AI辅助"，无需披露（据Publishers Weekly在2023年9月报道的Amazon规则）。一些杂志直接拒收有AI参与的作品——Clarkesworld的投稿须知称其不考虑由AI撰写、合写或辅助的故事。由本地LLM生成的场景文字属于KDP"AI生成"定义这类标准的范围，因此在需要时请予以披露。这是一般性信息，不构成法律建议。',
          },
          {
            q: '百万token级上下文需要什么硬件？',
            a: 'Qwen3.6 27B和Qwen3.6 35B-A3B标称原生262,144 token的上下文，据其模型卡，可通过YaRN缩放扩展到约1,010,000 token。长上下文除权重外还需要KV缓存的内存，因此运行百万token所需内存远超典型的消费级配置；PromptQuorum没有测量具体需求。本文的会话文档技术正是为这一缺口设计的——无需依赖百万token窗口，也能获得一致的长篇输出。',
          },
          {
            q: '在中国使用本地LLM创作小说或剧本时，个人信息保护法有什么影响？',
            a: '对于完全本地的模型（自己硬件上的Ollama，无云端API），个人数据不会传输到外部服务器——《个人信息保护法》关于个人信息处理的相关要求通常不适用。如果提示词中包含真实人物的个人信息（姓名、传记细节），《个人信息保护法》的原则（最小化原则、目的限制）可能适用。对于与真实人物无关的虚构内容，完全本地的LLM工作流通常不引发个人信息保护问题。',
          },
          {
            q: '在中国使用本地AI模型创作性内容或暴力内容时有哪些法律限制？',
            a: '对于涉及成年角色且双方同意场景的合法成人小说，目前没有专门针对AI的限制。《刑法》第363条规定了制作、贩卖淫秽物品罪，《网络安全法》规定了网络内容监管要求——这些规定无论文本由人还是AI生成均适用。《互联网信息服务算法推荐管理规定》等AI相关法规主要针对算法推荐系统，而非个人创作用途。对于涉及未成年人的内容有严格禁止规定。法律责任由用户承担。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[小说作家本地LLM提示词：模板与技术](/zh/power-local-llm/local-llm-prompts-for-fiction-writers) — 在会话文档工作流中有效的场景写作、对话、角色、世界构建和风格迁移模板。',
          '[本地LLM最佳选择2026](/zh/local-llms/best-local-llms-2026) — 涵盖创意写作、编程和推理所有使用场景的综合模型比较。',
          '[Obsidian＋本地LLM插件](/zh/power-local-llm/local-llm-with-obsidian-2026) — 写作工作流中与Ollama配合最佳的Obsidian插件深度指南。',
          '[本地LLM创意写作最佳选择2026](/zh/power-local-llm/best-local-llm-creative-writing) — 叙事生成模型比较，含采样设置和硬件要求。',
          '[无审查本地LLM与创意写作：伦理与设置](/zh/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 何时为成熟小说使用无审查模型，以及如何在相同Ollama工作流中设置。',
          '[SillyTavern vs Agnai vs RisuAI：最佳本地角色扮演前端](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 角色卡驱动写作和协作小说的前端选项。',
          '[Continue.dev vs Cline vs Aider：最佳本地编程助手](/zh/power-local-llm/continue-dev-vs-cline-vs-aider-local) — 用于代码辅助的相同Continue.dev IDE扩展可指向Ollama用于VS Code中的内联写作辅助。',
          '[零样本vs少样本提示词详解](/zh/prompt-engineering/zero-shot-vs-few-shot) — 小说任务中何时在提示词中包含示例，何时省略。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-26',
    theme: 'Creative & Roleplay',
    heroImage: '/images/local-llm-screenwriting-and-novel-drafting-overview-hero-pt.webp',
    title: 'Redigir romances e roteiros com LLMs locais: guia de fluxo de trabalho para mais de 100.000 palavras',
    seoTitle: 'LLM local para roteiros e romances sem conexão 2026',
    intro:
      'Os LLMs locais integrados a um fluxo de trabalho de redação de romances ou roteiros permitem que você gere rascunhos de cenas, beat sheets, passagens de diálogo e rodadas de revisão sem acesso à internet, registro na nuvem ou limites de uso. Este guia cobre o fluxo de trabalho completo: seleção de modelos, gerenciamento da janela de contexto para trabalhos de formato longo, estruturação por capítulos, geração de cenas e as ferramentas que conectam um LLM local ao seu software de escrita.',
    metaDescription:
      'Fluxo para escrever romances e roteiros com LLMs locais: modelos de partida, gerenciamento do contexto, estruturação por capítulos e geração de cenas.',
    twitterDescription:
      'Como usar LLMs locais para redigir romances e roteiros: gerenciamento de janela de contexto, estruturação por capítulos, geração de cenas, passagens de diálogo e integrações de ferramentas.',
    current_models_mentioned: [
      'Qwen3.6 27B',
      'Gemma 4 31B',
      'Llama 3.3 70B',
      'Hermes 4 70B',
      'Kimi-K2.6',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      'Roteiristas, romancistas e designers de narrativas para videogames que querem usar LLMs locais como assistentes de rascunho para trabalhos criativos extensos — gerenciando janelas de contexto, gerando conteúdo de rascunho e integrando assistência de IA às suas ferramentas de escrita existentes.',
    readTime: '15 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM screenwriting novel drafting',
    targetKeywords: [
      'llm local roteiro',
      'llm local romance redação',
      'ollama escrita criativa fluxo de trabalho',
      'janela de contexto ficção longa',
      'assistente escrita ia local',
      'geração de cenas modelo local',
    ],
    leadAnswerBlock:
      '**O principal desafio dos LLMs locais na ficção longa é o gerenciamento do contexto: planeje cerca de 32.000 tokens por geração e dê ao modelo um "documento de sessão" comprimido (fichas, resumos de capítulos, cena atual) em vez do manuscrito inteiro.**',
    quickAnswerTop: {
      pt: {
        question: 'Como usar um LLM local para escrever um romance ou um roteiro sem perder o contexto?',
        answer:
          'A técnica-chave é a injeção de contexto estruturada: em vez de colar todo o manuscrito na janela de contexto, mantenha um documento de sessão comprimido: uma ficha de personagem (nome, traço dominante, registro de fala), um resumo do enredo dos capítulos concluídos (100–200 palavras por capítulo) e a configuração da cena atual (beat, ponto de vista, limite de palavras). Injete esse documento no início de cada sessão de escrita. Gere uma cena por vez em vez de pedir ao modelo que continue um documento em crescimento. Como cada chamada leva apenas o estado comprimido, o método escala para qualquer extensão de romance e reduz o desvio de contexto e a perda de voz que escritores relatam ao tentar encaixar um manuscrito inteiro em uma única janela de contexto longa.',
        bullets: [
          'Técnica do documento de sessão: injete fichas de personagens + resumos de capítulos + configuração da cena atual no início da sessão.',
          'Gere uma cena por vez — evite pedir ao modelo que "continue" um documento em crescimento além de cerca de 32K tokens.',
          'Beat-sheet-first para roteiros: gere o beat sheet antes de qualquer prosa; use-o como andaime estrutural.',
          'Modelos de partida (dados dos cartões de modelo): Qwen3.6 27B, Gemma 4 31B, Llama 3.3 70B; a PromptQuorum não os avaliou para ficção.',
          'Ollama + Obsidian é um fluxo de trabalho comum entre escritores; o Scrivener não documenta nenhuma API de plugins, então a saída é colada.',
          'Regra de planejamento da janela de contexto: os modelos anunciam 128K–262.144 tokens; planeje cerca de 32K por geração, porque a qualidade em contextos longos é irregular.',
          'Fine-tunes com poucas recusas, como o Hermes 4 70B, usam o mesmo fluxo para ficção madura; confira a licença de cada modelo.',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'O problema da janela de contexto', anchor: '#context-window' },
      { label: 'Técnica do documento de sessão', anchor: '#session-document' },
      { label: 'Fluxo de trabalho para romances', anchor: '#novel-workflow' },
      { label: 'Fluxo de trabalho para roteiros', anchor: '#screenwriting-workflow' },
      { label: 'Modelos de geração de cenas', anchor: '#scene-generation' },
      { label: 'Integrações de ferramentas', anchor: '#tools' },
      { label: 'Recomendações de modelos', anchor: '#models' },
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
          '**Regra de planejamento da janela de contexto: 128K–262.144 tokens anunciados, cerca de 32K planejados.** Os modelos usam com menos confiabilidade o meio de entradas longas ("Lost in the Middle"); planeje cerca de 32K tokens por geração.',
          '**A técnica do documento de sessão é a habilidade fundamental.** Mantenha um arquivo de texto comprimido que contenha: fichas de personagens ativos (150 palavras por personagem), resumos de capítulos (100–200 palavras por capítulo concluído) e a configuração da cena atual. Injete-o no início de cada sessão de geração.',
          '**Gere uma cena por vez.** Peça ao modelo que escreva uma cena (200–600 palavras) por sessão em vez de pedir que ele "continue" um documento em crescimento. Uma cena por sessão reduz o desvio de contexto e ajuda a manter uma voz consistente.',
          '**Beat-sheet-first para roteiros.** Antes de gerar páginas de roteiro, gere um beat sheet em nível de cena. Use-o como andaime para cada geração de página.',
          '**Escolha um modelo que você consiga executar e teste-o com uma cena sua.** Modelos densos da classe 27B–31B (Qwen3.6 27B, Gemma 4 31B) e o Llama 3.3 70B são pontos de partida comuns; a PromptQuorum não avaliou nenhum deles para ficção, e os rankings públicos de escrita criativa classificam os modelos de formas diferentes.',
          '**Ollama + uma ferramenta de escrita de texto puro é uma integração confiável.** Scrivener, Obsidian e VS Code podem abrigar o manuscrito; o Ollama serve o modelo através de uma API que aplicativos ou scripts podem chamar.',
          '**Os modelos com poucas recusas (Hermes 4 70B) se encaixam nesse fluxo de trabalho sem mudanças de configuração.** Para ficção madura, troque o modelo do Ollama; as técnicas de documento de sessão e geração de cenas são idênticas. Confira a licença de cada modelo para o seu uso.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Modelos de partida (conforme os cartões de modelo):** Qwen3.6 27B (denso, Apache-2.0, contexto de 262.144 tokens), Gemma 4 31B (denso, Apache-2.0, contexto de 256K), Llama 3.3 70B (denso, contexto de 128K, Llama 3.3 Community License).',
          '**Limite de planejamento da janela de contexto:** ~32K tokens (~24.000 palavras) por geração; os modelos anunciam 128K–262.144 tokens, que é um teto, não uma garantia de qualidade.',
          '**Tamanho do documento de sessão:** meta de menos de 4.000 tokens (fichas de personagens + resumos de capítulos + configuração da cena atual).',
          '**Meta de geração de cenas:** 200–600 palavras por chamada de geração; cenas mais longas por meio de múltiplos prompts sequenciais.',
          '**Formato de roteiro:** combine o Ollama com instruções de saída no formato Fountain para texto com formato de roteiro.',
          '**Ferramentas de escrita que funcionam com o Ollama:** Scrivener (cole a saída; sem API de plugins documentada), Obsidian (por meio de plugin local ou scripts), VS Code (por meio do Continue.dev ou chamadas de API diretas), terminal puro.',
          '**Opção com poucas recusas:** Hermes 4 70B (base Llama-3.1-70B) para ficção madura; mesmo fluxo de trabalho, mesma técnica de documento de sessão.',
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: 'O problema da janela de contexto para escrita de formato longo',
        image: '/images/local-llm-screenwriting-and-novel-drafting-context-window-en.svg',
        imageCaption:
          'Planejamento de contexto: limite de trabalho de 32K tokens (~24.000 palavras) contra os 128K–262.144 anunciados.',
        content:
          '**Planeje cerca de 32K tokens por geração, mesmo quando um modelo anuncia muito mais.** Essa é uma regra de planejamento prudente da PromptQuorum, não um limite medido: pesquisas sobre contextos longos (Liu et al., "Lost in the Middle") constataram que os modelos usam com mais confiabilidade as informações do início e do fim de uma entrada longa do que as do meio, e que a qualidade pode cair conforme a entrada cresce. Modelos novos anunciam janelas bem maiores — o Qwen3.6 27B anuncia 262.144 tokens nativos e o Gemma 4 31B, 256K —, então teste o seu próprio modelo. Para um romance, colar o manuscrito até agora e pedir o próximo capítulo continua sendo a abordagem menos confiável, e um contexto longo também consome mais memória, porque o cache KV cresce junto.\n\nO Kimi-K2.6 da Moonshot AI anuncia uma janela de contexto de 256K tokens (262.144), da mesma classe dos modelos acima, mas é um modelo de mistura de especialistas com cerca de 1 trilhão de parâmetros no total (32 bilhões ativos) e pesos int4 nativos. Mesmo em 4 bits, só os pesos somam cerca de 500 GB (estimativa da PromptQuorum: 1 trilhão de parâmetros × 0,5 byte), então é um modelo de classe servidor, não de notebook. A técnica do documento de sessão e a geração cena por cena se aplicam a modelos executáveis localmente, de qualquer tamanho de contexto.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Um teto de planejamento prudente para a aderência ao contexto em LLMs locais é de cerca de 32.000 tokens (~24.000 palavras) por geração — além disso, pesquisas sobre contextos longos constatam um uso menos confiável do conteúdo anterior, o que pode aparecer como desvio de voz e inconsistências de enredo ao longo de um manuscrito longo.',
          },
          {
            type: 'plain-terms',
            text: 'Você não pode esperar que o modelo lembre o que aconteceu no capítulo 3 enquanto escreve o capítulo 20 só porque o manuscrito inteiro cabe na janela de contexto dele. Em vez disso, comprima o que o modelo precisa saber — fichas de personagens, resumos de capítulos, configuração da cena atual — em um "documento de sessão" de menos de 4.000 tokens e injete isso no início de cada sessão de escrita. O modelo só precisa saber o que é relevante para a cena que está gerando agora.',
          },
        ],
        items: [
          '**Conversão token para palavra:** 1 token ≈ 0,75 palavras em inglês (regra prática). 32K tokens ≈ 24.000 palavras. 128K tokens ≈ 96.000 palavras (cerca de um romance); 262.144 tokens ≈ 196.000 palavras.',
          '**Degradação da atenção:** os modelos podem perder a referência confiável ao conteúdo do início de uma janela de contexto longa. Isso se manifesta como erros em nomes de personagens, pontos de enredo esquecidos e desvio de voz em relação ao registro estabelecido.',
          '**A assimetria:** no estudo Lost in the Middle, os modelos usaram melhor o início e o fim da entrada e o conteúdo do meio de forma menos confiável. O estudo testou modelos disponíveis em 2023, então teste os modelos atuais em vez de presumir o mesmo padrão.',
          '**O documento de sessão como solução:** comprima tudo o que o modelo precisa em um documento estruturado curto. Injete-o no início. Gere a cena. Termine a sessão. Reinicie. Comece de novo com o mesmo documento de sessão atualizado para refletir a nova cena.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Não cole o manuscrito completo no contexto. Se o seu romance ultrapassa 10.000 palavras e você cola o rascunho completo para pedir o próximo capítulo, há risco de desvio de contexto — o modelo pode esquecer detalhes iniciais de personagens, contradizer pontos de enredo estabelecidos e voltar a um registro genérico. Use a técnica do documento de sessão.',
          },
        ],
      },
      sessionDocument: {
        id: 'session-document',
        title: 'Técnica do documento de sessão',
        content:
          'A técnica do documento de sessão é uma recomendação de fluxo de trabalho da PromptQuorum baseada nos limites de contexto descritos acima. A PromptQuorum não a submeteu a um teste controlado, e os tamanhos abaixo (4.000 tokens, 150 palavras por ficha de personagem, 100–150 palavras por resumo de capítulo) são diretrizes de planejamento, não limiares medidos.\n\n**O documento de sessão é um arquivo de texto puro que você mantém junto ao seu manuscrito — é o estado comprimido do seu romance que o modelo precisa conhecer para gerar conteúdo consistente.** Ele tem três seções: fichas de personagens ativos, resumos de capítulos e a configuração da cena atual.',
        promptExamples: [
          {
            label: 'Modelo do documento de sessão',
            text: '# SESSION DOCUMENT — [NOVEL TITLE]\n\n## ACTIVE CHARACTERS\n**[Character Name]**\nDominant trait: [one trait]\nContradicting behaviour: [one behaviour]\nSpeech register: [formal/casual/specific verbal tics]\nRelationship to [other character]: [brief]\n\n**[Character Name 2]**\n[same structure]\n\n## CHAPTER SUMMARIES (completed)\n**Chapter 1:** [100–150 words — what happened, what changed, where it ended]\n**Chapter 2:** [100–150 words]\n[continue for all completed chapters]\n\n## CURRENT SCENE SETUP\nChapter: [N]\nScene: [brief description of what this scene needs to accomplish]\nPOV: [character name]\nOpening state: [where we are at the start of this scene — 1 sentence]\nEmotional beat to land on: [what the POV character feels at the end — do not state it directly in the scene]\nWord ceiling: [200–500 words]',
          },
        ],
        items: [
          '**Fichas de personagens — meta de 150 palavras por personagem ativo.** Inclua o traço dominante, o comportamento contraditório, o registro de fala e a relação-chave com os demais personagens ativos. Adicione ou remova personagens à medida que se tornam ativos ou deixam o manuscrito.',
          '**Resumos de capítulos — meta de 100–150 palavras por capítulo concluído.** Foque em: o que aconteceu, o que mudou nas relações entre personagens, que informação o leitor agora conhece, onde o capítulo terminou espacial e emocionalmente. Não inclua cada cena — resuma o efeito líquido do capítulo.',
          '**Configuração da cena atual — específica e breve.** Nomeie o ponto de vista, o propósito da cena (o que ela precisa alcançar na história), o beat emocional a atingir e o limite de palavras. Esta é a ação que o modelo executa; as fichas de personagens e os resumos de capítulos são o contexto que ele usa para fazer isso de forma consistente.',
          '**Tamanho do documento de sessão — meta de menos de 4.000 tokens (~3.000 palavras).** Um documento de sessão que ultrapasse isso começa a consumir espaço de contexto que deveria ser destinado à geração em si. Comprima as fichas de personagens e os resumos de forma agressiva.',
          '**Atualize após cada sessão.** Depois de gerar uma cena, adicione uma atualização de 1–2 frases ao resumo do capítulo relevante e atualize qualquer entrada de ficha de personagem que tenha mudado. O documento de sessão é um arquivo vivo; mantê-lo atualizado é o custo de manutenção da técnica.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Guarde o documento de sessão em um arquivo de texto puro junto ao seu manuscrito. Depois de cada sessão de escrita, copie e cole o documento de sessão na mensagem do sistema ou no primeiro turno do usuário da próxima sessão. No Ollama, você pode criar um Modelfile com o documento de sessão no bloco SYSTEM e atualizá-lo antes de cada sessão. No SillyTavern, cole-o no campo de prompt do sistema no início de cada sessão de romance.',
          },
        ],
      },
      novelWorkflow: {
        id: 'novel-workflow',
        title: 'Fluxo de trabalho para redação de romances',
        image: '/images/local-llm-screenwriting-and-novel-drafting-workflow-steps-en.svg',
        imageCaption:
          'Romance em quatro fases com um LLM local: esboço, beat sheets, cenas e revisão, com um documento de sessão.',
        content:
          '**O fluxo de trabalho de redação de romances com um LLM local tem quatro fases: esboço, beat sheets por capítulo, geração de cenas e passagens de revisão.** Cada fase usa uma estrutura de prompt diferente.',
        items: [
          '**Fase 1 — Esboço:** gere um esboço em nível de capítulo (10–30 capítulos, uma frase por capítulo: o que acontece, o que muda). Prompt: "Gênero: [gênero]. Protagonista: [Nome + ferida central]. Conflito central: [em uma frase]. Escreva um esboço de 20 capítulos — uma frase por capítulo, cada frase nomeia a cena e a mudança." Revise e edite o esboço antes de continuar.',
          '**Fase 2 — Beat sheets:** expanda cada entrada de capítulo em um beat sheet em nível de cena (3–8 cenas por capítulo). Prompt por capítulo: "Resumo do capítulo [N]: [cole a entrada de uma frase do esboço]. Expanda em um beat sheet em nível de cena: 4–6 cenas, cada uma descrita em uma frase que nomeia a localização, os participantes e a única mudança da cena. Ainda sem prosa."',
          '**Fase 3 — Geração de cenas:** use o documento de sessão + o beat da cena atual para gerar uma cena por vez. Consulte os modelos de geração de cenas abaixo. Gere, revise, cole no manuscrito, atualize o documento de sessão. Repita.',
          '**Fase 4 — Passagens de revisão:** depois de concluir um capítulo, execute prompts de revisão específicos em cenas concretas. Consulte [Prompts de LLM local para escritores de ficção](/pt/power-local-llm/local-llm-prompts-for-fiction-writers) para as estruturas de prompt de revisão. Não peça ao modelo que revise mais de uma cena por chamada de geração.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Guarde o esboço e os beat sheets em arquivos separados do manuscrito. Eles são o esqueleto — o manuscrito é a carne. Mantê-los separados significa que você pode regenerar qualquer parte de qualquer um sem sobrescrever o outro, e você pode colar apenas a entrada do beat sheet relevante na configuração da cena atual sem incluir o esboço completo.',
          },
        ],
      },
      screenwritingWorkflow: {
        id: 'screenwriting-workflow',
        title: 'Fluxo de trabalho para roteiros',
        content:
          '**A redação de roteiros com um LLM local usa as mesmas técnicas de documento de sessão e beat sheet que a redação de romances, com duas adições: instruções de formato no prompt do sistema, e a geração do cabeçalho de cena (slug line) como um passo separado da geração de páginas.**',
        promptExamples: [
          {
            label: 'Prompt do sistema para roteiro',
            text: 'You are a screenplay formatting assistant. All prose you generate is formatted in standard US screenplay format:\n- Scene headers: INT./EXT. LOCATION — DAY/NIGHT\n- Action lines: present tense, concrete, maximum 3 lines per block\n- Character names: ALL CAPS above dialogue\n- Dialogue: centred, no dialogue tags\n- Parentheticals: sparingly, only for delivery or action mid-dialogue\n\nGenerate in Fountain-compatible plain text.',
          },
          {
            label: 'Prompt de beat de cena para páginas de roteiro',
            text: 'Beat: [paste the one-sentence scene beat from the beat sheet]\nPOV character: [Name]\nPage target: [1–3 pages]\n\nGenerate the script pages for this beat. Use standard screenplay format. Begin with the slug line. No narration — action lines and dialogue only.',
          },
        ],
        items: [
          '**O formato vai no prompt do sistema, não no turno do usuário.** Colocar as instruções de formato de roteiro na mensagem do sistema significa que cada geração da sessão segue o formato sem repetir a instrução.',
          '**Saída compatível com Fountain:** Fountain é um formato de marcação de texto puro para roteiros; o Highland e o Fade In o leem, assim como outros apps do [diretório de apps do Fountain](https://fountain.io/apps). Pedir ao modelo que gere "texto puro compatível com Fountain" produz uma saída que você pode abrir nessas ferramentas ou converter para outras (veja a pergunta sobre o Final Draft nas perguntas frequentes).',
          '**As slug lines primeiro:** gere a slug line (INT./EXT. LOCALIZAÇÃO — DIA/NOITE) como um prompt de uma única linha separado antes de gerar o conteúdo da cena. Isso ancora a localização física antes de o modelo começar a gerar a ação.',
          '**Passagens de diálogo:** depois de gerar as linhas de ação, execute uma passagem de diálogo separada: "As linhas de ação estão definidas. Escreva o diálogo para [Personagem A] e [Personagem B] nesta cena. O personagem A quer [X]. O personagem B quer [Y]. Sem etiquetas de diálogo. 5–8 trocas."',
          '**Gerenciamento da contagem de páginas:** não há um número fixo de palavras por página, e "uma página equivale a um minuto" é só uma regra prática. Conte a média de palavras por página do seu próprio roteiro e defina os limites de palavras a partir daí.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A disciplina do beat-sheet-first importa mais para a redação de roteiros do que para a de romances. Uma cena de roteiro tem uma função estrutural específica (configuração, confronto, decisão, reviravolta) e uma meta de páginas específica. Gerar páginas sem um beat sheet produz cenas que desviam em comprimento e perdem o seu propósito estrutural. Sempre saiba o que uma cena deve alcançar antes de gerar as páginas.',
          },
        ],
      },
      sceneGeneration: {
        id: 'scene-generation',
        title: 'Modelos de geração de cenas para trabalhos de formato longo',
        content:
          '**A geração de cenas de formato longo requer o documento de sessão como prefixo e um único prompt de cena como ação.** Os modelos abaixo pressupõem que o documento de sessão já está na mensagem do sistema ou no primeiro turno do usuário.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para ficção de formato longo, um padrão de geração confiável é: documento de sessão no prompt do sistema → único prompt de cena no turno do usuário → revisar → atualizar o documento de sessão → repetir, uma cena por sessão.',
          },
          {
            type: 'plain-terms',
            text: 'O modelo precisa saber três coisas para escrever a próxima cena de forma consistente: quem são esses personagens (fichas de personagens), o que já aconteceu (resumos de capítulos) e o que esta cena precisa fazer (configuração da cena). Dê a ele exatamente essas três coisas, nada mais. Depois gere a cena, cole-a no seu manuscrito e atualize o documento de sessão para refletir o que mudou. Repita.',
          },
        ],
        promptExamples: [
          {
            label: 'Prompt de geração de cena de romance',
            text: '[SESSION DOCUMENT ALREADY IN SYSTEM PROMPT]\n\nCurrent scene:\nChapter: [N]\nBeat: [one sentence from the beat sheet]\nPOV: [character name]\nOpening: [one sentence — where we are, who is present]\nEmotional landing: [what the POV character feels at the end — show, don\'t state]\nWord ceiling: [300–500 words]\n\nWrite this scene. No summarising. Every sentence renders a moment.',
          },
          {
            label: 'Prompt de verificação de continuidade',
            text: 'Before writing the next scene, check for continuity. The session document says:\n- [Character A] is [trait/state]\n- The last scene ended with [brief description]\n\nThe next scene opens with [brief description]. Does this transition make sense? If not, what needs to change in the transition? One paragraph answer only.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Use o prompt de verificação de continuidade nas transições de capítulos — não em cada cena. As transições de capítulos (onde mudam a localização, o tempo ou o personagem de ponto de vista) são onde mais frequentemente ocorrem as quebras de continuidade e onde a verificação traz maior valor.',
          },
        ],
      },
      tools: {
        id: 'tools',
        itemHeadings: true,
        title: 'Integrações de ferramentas para escritores',
        content:
          '**O Ollama expõe uma API compatível com OpenAI em localhost à qual se conecta um ecossistema crescente de ferramentas voltadas para escritores.** As integrações abaixo representam as opções mais consolidadas a partir de 2026.',
        columns: ['Ferramenta', 'Link', 'Integração', 'Ideal para'],
        rows: [
          { 'Ferramenta': 'Obsidian', 'Link': '[obsidian.md](https://obsidian.md)', 'Integração': 'Plugin Copilot ou Smart Connections → API do Ollama. Consulte [Obsidian + plugins de LLM local](/pt/power-local-llm/local-llm-with-obsidian-2026) para o guia detalhado sobre quais plugins do Obsidian funcionam melhor com o Ollama.', 'Ideal para': 'Escritores que já usam o Obsidian para notas + manuscrito; geração integrada no mesmo app sem trocar de contexto' },
          { 'Ferramenta': 'Scrivener', 'Link': '[literatureandlatte.com/scrivener](https://www.literatureandlatte.com/scrivener)', 'Integração': 'Script externo por meio da API do Ollama → colar no documento', 'Ideal para': 'Escritores que estruturam romances no Scrivener; rascunhos de IA colados na estrutura de projeto existente' },
          { 'Ferramenta': 'VS Code', 'Link': '[code.visualstudio.com](https://code.visualstudio.com)', 'Integração': 'Extensão Continue.dev → backend do Ollama', 'Ideal para': 'Escritores técnicos e designers de narrativas para videogames confortáveis em um editor de código' },
          { 'Ferramenta': 'SillyTavern', 'Link': '[github.com/SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern)', 'Integração': 'API compatível com OpenAI → Ollama', 'Ideal para': 'Ficção do tipo roleplay e redação guiada por fichas de personagens; memória persistente de personagens' },
          { 'Ferramenta': 'Terminal puro', 'Integração': '`ollama run [model]` ou curl para a API do Ollama', 'Ideal para': 'Fluxos de trabalho scriptáveis; escritores que querem controle máximo com mínima sobrecarga de interface' },
          { 'Ferramenta': 'LM Studio', 'Link': '[lmstudio.ai](https://lmstudio.ai)', 'Integração': 'Interface de chat integrada + API de servidor local', 'Ideal para': 'Escritores que querem um gerenciador de modelos com GUI sem instalar o Ollama separadamente' },
          { 'Ferramenta': 'NovelCrafter', 'Link': '[novelcrafter.com](https://www.novelcrafter.com)', 'Integração': 'Integração de IA incorporada; as páginas de ajuda listam conexões com LM Studio, Ollama e endpoints compatíveis com a API da OpenAI', 'Ideal para': 'Escritores que querem assistência de IA em nível de capítulo dentro de um único app focado em romances' },
          { 'Ferramenta': 'Plottr', 'Link': '[plottr.com](https://plottr.com)', 'Integração': 'Fluxo de trabalho manual: estruture romances no Plottr, cole cenas/beats no Ollama externamente (o Plottr afirma que não vai adicionar recursos de IA)', 'Ideal para': 'Ficção de gênero com muito enredo (mistério, thriller, fantasia) onde o traçado estrutural do enredo é o eixo do fluxo de trabalho' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A integração mais simples que funciona para a maioria dos escritores é Obsidian + o plugin Copilot apontando para o Ollama. O seu documento de sessão vive em uma nota do Obsidian, os capítulos do seu manuscrito vivem no mesmo vault e você gera diretamente no mesmo app sem trocar de contexto. O plugin Copilot passa o texto selecionado ou a nota atual para o Ollama e devolve a complementação em linha. Consulte [Obsidian + plugins de LLM local](/pt/power-local-llm/local-llm-with-obsidian-2026) para o guia detalhado.',
          },
        ],
      },
      models: {
        id: 'models',
        itemHeadings: true,
        title: 'Recomendações de modelos para trabalhos de formato longo',
        content:
          '**A redação de formato longo tem requisitos de modelo diferentes dos da ficção de formato curto.** A aderência ao contexto, a consistência no seguimento de instruções ao longo de sessões extensas e a capacidade de manter a voz em múltiplas chamadas de geração são os fatores decisivos. As linhas abaixo são pontos de partida tirados do cartão de cada modelo; a PromptQuorum não avaliou esses modelos para ficção, e os rankings públicos de escrita criativa classificam os modelos de formas diferentes, então teste dois candidatos com uma cena sua. Modelos abertos de classe servidor, como o Command A+ (218 bilhões de parâmetros no total, 25 bilhões ativos, Apache 2.0) e o Mistral Large 3 (675 bilhões de parâmetros no total, contexto de 256K, Apache 2.0), ficam fora do alcance de hardware de consumo. Para o panorama mais amplo de modelos em todos os casos de uso, veja [Melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026).',
        columns: ['Tarefa', 'Modelo recomendado', 'Por quê'],
        rows: [
          { 'Tarefa': 'Redação de romance (principal)', 'Modelo recomendado': 'Qwen3.6 27B ou Gemma 4 31B', 'Por quê': 'Modelos densos de 27B–31B com contexto anunciado de 256K+ e licenças Apache; uma classe de tamanho que cabe em uma GPU de 24 GB ou em 32 GB+ de memória unificada em 4 bits (estimativa)' },
          { 'Tarefa': 'Redação de roteiro', 'Modelo recomendado': 'Qwen3.6 27B ou Llama 3.3 70B', 'Por quê': 'A aderência ao formato depende sobretudo do prompt do sistema; teste uma cena em Fountain com dois modelos. O Llama 3.3 70B é denso, anuncia contexto de 128K e precisa de cerca de 40 GB em 4 bits (estimativa)' },
          { 'Tarefa': 'Geração de beat sheet / esboço', 'Modelo recomendado': 'Qwen3.6 35B-A3B', 'Por quê': 'Mistura de especialistas com 3B de 35B parâmetros ativos por token (Apache-2.0), por isso gera mais rápido por token; a PromptQuorum não avaliou a qualidade dos esboços' },
          { 'Tarefa': 'Passagens de diálogo', 'Modelo recomendado': 'O modelo cujas amostras combinem', 'Por quê': 'Faça o diálogo como passagem separada com o modelo cujas linhas de calibração combinem com o registro do seu personagem; não há ranking verificado de modelos para diálogo' },
          { 'Tarefa': 'Revisão (estrutural)', 'Modelo recomendado': 'O modelo com o qual você redigiu', 'Por quê': 'Prompts de revisão que nomeiam uma restrição estrutural por chamada funcionam com qualquer modelo que siga instruções; uma cena por chamada' },
          { 'Tarefa': 'Ficção madura / sombria', 'Modelo recomendado': 'Hermes 4 70B', 'Por quê': 'Base Llama-3.1-70B; a Nous Research descreve um alinhamento em geral neutro e menos recusas; licença Llama 3; modo de raciocínio híbrido' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        items: [
          '**Colar o manuscrito completo no contexto.** Mesmo quando um modelo anuncia uma janela de 128K–262K, entradas longas são usadas com menos confiabilidade, então planeje cerca de 32K tokens. Use a técnica do documento de sessão — fichas de personagens e resumos de capítulos comprimidos.',
          '**Pedir ao modelo que "continue" um documento aberto.** "Continue o romance" produz desvio. "Escreva a próxima cena: [configuração específica, ponto de vista, limite de palavras]" produz uma saída consistente e delimitada que você pode avaliar e colar.',
          '**Sem beat sheets para roteiros.** Gerar páginas de roteiro sem um beat de cena produz páginas que desviam em comprimento e perdem a sua função estrutural. Gere sempre o beat sheet primeiro.',
          '**Ignorar as atualizações do documento de sessão.** Se você não atualizar o resumo do capítulo depois de gerar uma cena, o documento de sessão fica obsoleto. Um documento de sessão obsoleto produz inconsistências em poucas sessões.',
          '**Gerar mais de uma cena por sessão.** A geração de múltiplas cenas dentro de uma janela de contexto produz a primeira cena bem e cada cena subsequente com menor consistência. Uma cena por sessão; reinicie e injete novamente.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Cartão de modelo Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) e [cartão de modelo Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — parâmetros, contexto nativo de 262.144 tokens, extensão YaRN, Apache-2.0, consultados em 26 de outubro de 2026',
          '[Cartão de modelo Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it) — 31B denso, contexto de 256K, Apache 2.0, consultado em 26 de outubro de 2026',
          '[Cartão de modelo Llama 3.3 70B Instruct](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) — 70B, contexto de 128K, Llama 3.3 Community License, publicado em 6 de dezembro de 2024',
          '[Cartão de modelo Hermes 4 70B](https://huggingface.co/NousResearch/Hermes-4-70B) — base Llama-3.1-70B, raciocínio híbrido, "broadly neutral alignment"',
          '[Cartão de modelo Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) — 1 trilhão de parâmetros no total e 32 bilhões ativos, contexto de 256K, int4 nativo',
          '[Documentação do Command A+](https://docs.cohere.com/docs/command-a-plus) e [cartão de modelo Mistral Large 3](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512) — contagem de parâmetros e licenças dos modelos de classe servidor',
          '[Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172) — Liu et al., 2023',
          '[Fountain.io](https://fountain.io) — especificação do formato de roteiro Fountain e [lista de apps](https://fountain.io/apps)',
          '[Central de ajuda do Final Draft](https://kb.finaldraft.com/hc/en-us/articles/15575076862228-Can-Final-Draft-import-a-file-written-in-a-Fountain-based-screenwriting-program) — informa que o Final Draft não importa arquivos .fountain diretamente',
          '[Regras de IA da Amazon KDP, Publishers Weekly](https://www.publishersweekly.com/pw/by-topic/digital/content-and-e-books/article/93122-amazon-issues-new-ai-guidelines-for-its-kdp-platform.html) e [envios à Clarkesworld](https://clarkesworldmagazine.com/submissions/) — políticas de IA de editoras e plataformas; confira o texto vigente antes de enviar',
          '[Notas de versão do Scrivener](https://www.literatureandlatte.com/scrivener/release-notes) — versões 3.4.0 a 3.5.2 (dezembro de 2025): sem entradas de plugins ou API; "Scrivener itself contains no AI"; consultadas em 26 de outubro de 2026',
          '[Plottr in 2026](https://plottr.com/plottr-in-2026/) e [ajuda do NovelCrafter sobre conexões de IA](https://www.novelcrafter.com/help/categories/ai-connections) — o Plottr afirma que não está desenvolvendo recursos de IA; o NovelCrafter lista conexões com LM Studio, Ollama e endpoints compatíveis com a API da OpenAI',
          'Documentação da API do Ollama — [Ollama](https://ollama.com/docs)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Um LLM local pode escrever um romance completo?',
            a: 'Um LLM local pode gerar a prosa de um romance completo, mas a inteligência estrutural e editorial precisa vir do escritor. O modelo gera cenas quando recebe configurações específicas; ele não planeja, avalia nem toma decisões temáticas sozinho. Pense nele como um gerador rápido de primeiros rascunhos de cenas que você já sabe escrever: economiza tempo diante da página em branco, enquanto o escritor continua tomando todas as decisões importantes. Confira as políticas de IA das editoras e plataformas antes de enviar (veja a pergunta sobre editores abaixo).',
          },
          {
            q: 'Qual é a janela de contexto máxima que eu posso usar de forma confiável?',
            a: 'Os modelos anunciam de 128K a 262.144 tokens, mas a PromptQuorum recomenda planejar cerca de 32K tokens (~24.000 palavras) por geração, porque pesquisas sobre contextos longos mostram que os modelos usam com menos confiabilidade o meio de entradas longas. É uma regra de planejamento prudente, não um limite medido para todos os modelos, então teste o seu. A técnica do documento de sessão mantém o contexto de trabalho abaixo de 4.000–6.000 tokens, de modo que cada chamada de geração fica bem dentro dessa faixa.',
          },
          {
            q: 'Como eu evito que o modelo mude a voz do meu personagem no meio do romance?',
            a: 'O desvio de voz tem duas causas: um documento de sessão obsoleto (com desenvolvimentos recentes do personagem ausentes) e a diluição do contexto (a ficha do personagem está longe demais da geração ativa no contexto). Solução: mantenha a ficha do personagem na mensagem do sistema (não enterrada em um preâmbulo longo do turno do usuário), atualize a ficha depois de qualquer cena em que o personagem tenha um momento de arco significativo e mantenha a ficha concisa o suficiente para caber na seção superior do contexto de cada sessão.',
          },
          {
            q: 'Posso usar o Scrivener com um LLM local?',
            a: 'Não nativamente — o Scrivener 3 não documenta nenhum sistema de plugins, e suas notas de versão oficiais até a 3.5.2 (dezembro de 2025) não mencionam integração de IA: as notas da 3.4.0 dizem "Scrivener itself contains no AI" e acrescentam suporte às Writing Tools da Apple, um recurso de sistema do macOS. Um fluxo comum é: gerar no Ollama (pelo terminal ou com um script auxiliar), copiar a saída e colá-la no documento correspondente do Scrivener. Alguns escritores usam o Obsidian como camada de redação com IA e importam os capítulos prontos para o Scrivener para a estruturação final. Scripts que chamam a API do Ollama e copiam a saída para a área de transferência são o que mais se aproxima de uma integração nativa.',
          },
          {
            q: 'O que é melhor para redigir roteiros: Ollama ou uma IA na nuvem?',
            a: 'Para roteiristas que precisam gerar conteúdo maduro (violência, psicologia sombria, personagens moralmente complexos), um modelo local dá controle sobre o modelo e seu comportamento de recusa — alguns modelos hospedados recusam ou suavizam conteúdo que aparece em roteiros dramáticos, e as políticas de serviços hospedados mudam com o tempo. Um modelo local com poucas recusas, como o Hermes 4 70B, tem menos recusas embutidas, embora você continue responsável pelo conteúdo que gera e publica. A consistência de formato depende sobretudo das instruções no prompt do sistema, que funcionam nos dois casos. A escolha é principalmente sobre controle de conteúdo, privacidade e custo; a PromptQuorum não comparou a qualidade de saída entre modelos hospedados e locais para roteiro.',
          },
          {
            q: 'Como eu gero diálogo que soe como um personagem específico?',
            a: 'Abordagem de três passos: (1) Adicione o registro de fala do personagem ao documento de sessão ("formal, evita contrações, começa as frases com qualificações como \'Parece-me que...\'"). (2) Gere 3–5 linhas de diálogo de amostra desse personagem em um contexto neutro como passo de calibração no início da sessão. (3) Use essas linhas de amostra como exemplo no prompt de diálogo: "Escreva o diálogo no mesmo registro que estes exemplos: [cole as amostras]." O passo de calibração é a técnica mais eficaz para a consistência de voz do personagem.',
          },
          {
            q: 'Preciso de uma GPU para usar um LLM local na redação de romances?',
            a: 'Uma GPU acelera bastante a geração, mas não é obrigatória. Em Apple Silicon, a memória unificada permite que um MacBook Pro de 16 GB execute modelos menores (aproximadamente a classe de 8B–14B em 4 bits, uma estimativa) — mais lento que um equipamento com GPU de 24 GB, mas aceitável quando você lê e avalia a saída entre as gerações. Uma GPU NVIDIA de 24 GB (RTX 4090, RTX 3090) comporta modelos da classe 27B–32B em 4 bits (estimativa); modelos da classe 70B precisam de cerca de 40 GB ou mais em 4 bits, portanto exigem duas GPUs, uma placa de 48 GB, 64 GB de memória unificada ou descarga para a CPU, mais lenta.',
          },
          {
            q: 'Posso usar LLMs locais com o Final Draft ou outro software profissional de roteiros?',
            a: 'Não diretamente. Segundo a central de ajuda do Final Draft, o Final Draft não importa arquivos .fountain; a orientação é salvar o texto como .txt simples e escolher Script (não Text) ao importar, ou trazê-lo como FDX a partir de um app que exporte esse formato. O Highland converte entre Fountain, FDX e PDF, e o Fade In importa e exporta Fountain (conforme o diretório de apps do Fountain). Fluxo: gere texto em formato Fountain no Ollama, abra-o no Highland ou no Fade In e exporte FDX para o Final Draft.',
          },
          {
            q: 'Posso usar o Kimi-K2.6 localmente para redigir romances?',
            a: 'O Kimi-K2.6 anuncia uma janela de contexto de 256K tokens, da mesma classe do Qwen3.6 27B e do Gemma 4 31B, mas é um modelo de mistura de especialistas com cerca de 1 trilhão de parâmetros no total (32 bilhões ativos) e pesos int4 nativos. Só os pesos somam cerca de 500 GB (estimativa da PromptQuorum), então ele exige um servidor com várias GPUs ou um equipamento com memória unificada enorme e é impraticável em hardware de consumo. Para fluxos totalmente locais, um modelo denso de 27B–70B com a técnica do documento de sessão cobre trabalhos do tamanho de um romance sem um modelo de um trilhão de parâmetros.',
          },
          {
            q: 'O que os editores acham dos manuscritos assistidos por IA?',
            a: 'As políticas variam conforme a editora e a plataforma e continuam mudando em 2026, então confira a específica antes de enviar. A Amazon KDP exige que você informe quando texto, imagens ou traduções são gerados por IA e trata o conteúdo criado por uma ferramenta de IA como gerado por IA mesmo após edição substancial; texto que você mesmo escreveu e que a IA apenas ajudou a editar ou refinar é "assistido por IA" e não precisa ser declarado (conforme as regras da Amazon relatadas pela Publishers Weekly em setembro de 2023). Algumas revistas rejeitam de vez trabalhos com IA — as diretrizes de envio da Clarkesworld dizem que ela não considera histórias escritas, coescritas ou assistidas por IA. O texto de cenas gerado por um LLM local se enquadra em definições como a de "gerado por IA" da KDP, então declare-o onde for exigido. Estas são informações gerais, não aconselhamento jurídico.',
          },
          {
            q: 'Qual hardware eu preciso para contextos de um milhão de tokens?',
            a: 'O Qwen3.6 27B e o Qwen3.6 35B-A3B anunciam um contexto nativo de 262.144 tokens que, segundo os cartões de modelo, pode ser estendido a cerca de 1.010.000 tokens com escalonamento YaRN. Um contexto longo precisa de memória para o cache KV além dos pesos, então uma execução com um milhão de tokens exige muito mais memória do que uma configuração de consumo típica; a PromptQuorum não mediu o requisito. A técnica do documento de sessão deste artigo foi pensada exatamente para essa lacuna: saída consistente de formato longo sem depender de uma janela de um milhão de tokens.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Prompts de LLM local para escritores de ficção: modelos e técnicas](/pt/power-local-llm/local-llm-prompts-for-fiction-writers) — modelos de escrita de cenas, diálogo, personagens, construção de mundos e transferência de estilo que funcionam dentro do fluxo de trabalho do documento de sessão.',
          '[Melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026) — comparação completa de modelos em todos os casos de uso, incluindo escrita criativa, programação e raciocínio.',
          '[Obsidian + plugins de LLM local](/pt/power-local-llm/local-llm-with-obsidian-2026) — guia mais detalhado sobre quais plugins do Obsidian funcionam melhor com o Ollama para fluxos de trabalho de escrita.',
          '[Melhores LLMs locais para escrita criativa 2026](/pt/power-local-llm/best-local-llm-creative-writing) — comparação de modelos para geração narrativa, incluindo as configurações de amostragem e os requisitos de hardware.',
          '[LLMs locais sem censura para escrita criativa: ética e configuração](/pt/power-local-llm/uncensored-local-llm-creative-writing-ethics) — quando usar modelos sem censura para ficção madura e como configurá-los no mesmo fluxo de trabalho do Ollama.',
          '[SillyTavern vs Agnai vs RisuAI: melhor frontend de roleplay local](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — opções de frontend para redação guiada por fichas de personagens e ficção colaborativa.',
          '[Continue.dev vs Cline vs Aider: melhor assistente de código local](/pt/power-local-llm/continue-dev-vs-cline-vs-aider-local) — a mesma extensão de IDE Continue.dev usada para assistência em código pode ser apontada para o Ollama para assistência de escrita em linha no VS Code.',
          '[Prompting com cadeia de pensamento explicado](/pt/prompt-engineering/chain-of-thought-prompting) — prompts de raciocínio estruturado aplicáveis ao planejamento de enredos, à análise de beats narrativos e à resolução de problemas narrativos.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Redigir romances e roteiros com LLMs locais: guia de fluxo de trabalho para mais de 100.000 palavras',
      description: 'Fluxo de trabalho completo para usar LLMs locais na redação de romances e roteiros: seleção de modelos, gerenciamento do contexto, estruturação por capítulos, geração de cenas e integrações de ferramentas para escritores.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/local-llm-screenwriting-and-novel-drafting',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-10-26',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
},
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-26',
    theme: 'Creative & Roleplay',
    heroImage: '/images/local-llm-screenwriting-and-novel-drafting-overview-hero-ar.webp',
    title: 'صياغة الروايات والسيناريوهات بالنماذج اللغوية المحلية: دليل سير العمل لأكثر من ⁨100⁩,⁨000⁩ كلمة',
    seoTitle: 'كتابة الروايات والسيناريوهات بـ⁨LLM⁩ محلي ⁨2026⁩',
    intro:
      'تُتيح النماذج اللغوية المحلية المدمجة في سير عمل كتابة الروايات والسيناريوهات توليد مسودات المشاهد والبيت شيت ومراجعات الحوار وجولات المراجعة بدون اتصال إنترنت أو تسجيل سحابي أو قيود على الاستخدام. يغطي هذا الدليل سير العمل الكامل: اختيار النماذج وإدارة نافذة السياق للأعمال الطويلة والسقالات الفصلية وتوليد المشاهد والأدوات التي تربط النموذج اللغوي المحلي ببرنامج الكتابة الخاص بك.',
    metaDescription:
      'سير عمل طويل الشكل مع LLMs المحلية: اختيار النموذج لـ 100,000 كلمة، إدارة نافذة السياق، هيكلة الفصول وتوليد المشاهد — بدون اتصال أو قيود.',
    twitterDescription:
      'كيفية استخدام النماذج اللغوية المحلية لصياغة الروايات والسيناريوهات: إدارة نافذة السياق والسقالات الفصلية وتوليد المشاهد ومراجعات الحوار وتكاملات الأدوات.',
    current_models_mentioned: [
      'Qwen3.6 27B',
      'Gemma 4 31B',
      'Llama 3.3 70B',
      'Hermes 4 70B',
      'Kimi-K2.6',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      'كتّاب السيناريو والروائيون ومصممو السرد في الألعاب الذين يريدون استخدام النماذج اللغوية المحلية مساعدين في الصياغة للأعمال الإبداعية الطويلة — بإدارة نوافذ السياق وتوليد محتوى المسودة ودمج مساعدة الذكاء الاصطناعي في أدوات الكتابة القائمة.',
    readTime: '15 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM screenwriting novel drafting',
    targetKeywords: [
      'نموذج لغوي محلي كتابة سيناريو',
      'نموذج لغوي محلي رواية صياغة',
      'ollama كتابة إبداعية سير عمل',
      'نافذة سياق خيال طويل',
      'مساعد كتابة ذكاء اصطناعي محلي',
      'توليد مشاهد نموذج محلي',
    ],
    leadAnswerBlock:
      '**التحدي الرئيسي للنماذج المحلية في الخيال الطويل هو إدارة السياق: خطِّط لنحو 32,000 رمز في كل عملية توليد، وأعطِ النموذج بدلاً من المخطوطة كاملة "وثيقة جلسة" مضغوطة (بطاقات الشخصيات وملخصات الفصول وإعداد المشهد الحالي)، مشهداً واحداً في كل مرة.**',
    quickAnswerTop: {
      ar: {
        question: 'كيف تستخدم نموذجاً لغوياً محلياً لكتابة رواية أو سيناريو دون فقدان السياق؟',
        answer:
          'التقنية الأساسية هي حقن السياق المُهيكل: بدلاً من لصق المخطوطة بالكامل في نافذة السياق، احتفظ بوثيقة جلسة مضغوطة: بطاقة شخصية (الاسم والسمة المهيمنة وسجل الكلام)، ملخص حبكة الفصول المكتملة (100–200 كلمة لكل فصل)، وإعداد المشهد الحالي (البيت، وجهة النظر، سقف الكلمات). احقن هذه الوثيقة في بداية كل جلسة كتابة. ولِّد مشهداً واحداً في كل مرة بدلاً من مطالبة النموذج بمواصلة وثيقة متنامية. ولأن كل استدعاء يحمل الحالة المضغوطة فقط، فإن الأسلوب يتسع لأي طول من الروايات ويقلل انجراف السياق وفقدان الصوت اللذين يشير إليهما الكتّاب عند محاولة حشر مخطوطة كاملة في نافذة سياق طويلة واحدة.',
        bullets: [
          'تقنية وثيقة الجلسة: احقن بطاقات الشخصيات + ملخصات الفصول + إعداد المشهد الحالي في بداية الجلسة.',
          'ولِّد مشهداً واحداً في كل مرة — تجنب مطالبة النموذج بـ"الاستمرار" في وثيقة متنامية تتجاوز نحو 32K رمز.',
          'البيت شيت أولاً لكتابة السيناريو: ولِّد البيت شيت قبل أي نثر؛ استخدمه كسقالة هيكلية.',
          'نماذج للبدء (مواصفات من بطاقات النماذج): Qwen3.6 27B وGemma 4 31B وLlama 3.3 70B؛ لم تقيّمها PromptQuorum للخيال.',
          'Ollama + Obsidian سير عمل شائع بين الكتّاب؛ أما Scrivener فلا يوثّق أي API للإضافات، لذا يُلصق الناتج.',
          'قاعدة تخطيط نافذة السياق: تعلن النماذج عن 128K–262,144 رمزاً؛ خطِّط لنحو 32K في كل عملية توليد لأن جودة السياقات الطويلة غير متسقة.',
          'النماذج المضبوطة بقليل من الرفض مثل Hermes 4 70B تعمل بسير العمل نفسه للخيال الناضج؛ تحقق من ترخيص كل نموذج.',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'مشكلة نافذة السياق', anchor: '#context-window' },
      { label: 'تقنية وثيقة الجلسة', anchor: '#session-document' },
      { label: 'سير عمل كتابة الروايات', anchor: '#novel-workflow' },
      { label: 'سير عمل كتابة السيناريو', anchor: '#screenwriting-workflow' },
      { label: 'قوالب توليد المشاهد', anchor: '#scene-generation' },
      { label: 'تكاملات الأدوات', anchor: '#tools' },
      { label: 'توصيات النماذج', anchor: '#models' },
      { label: 'أخطاء شائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءة ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**قاعدة تخطيط نافذة السياق: 128K–262,144 رمزاً معلنة، ونحو 32K مخطَّطة.** تستخدم النماذج منتصف المدخلات الطويلة بموثوقية أقل ("Lost in the Middle")؛ خطِّط لنحو 32K رمز (~24,000 كلمة) في كل عملية توليد واستخدم تقنية وثيقة الجلسة بدلاً من المخطوطة كاملة.',
          '**تقنية وثيقة الجلسة هي المهارة الأساسية.** احتفظ بملف نصي مضغوط يحتوي: بطاقات الشخصيات النشطة (150 كلمة لكل شخصية)، ملخصات الفصول (100–200 كلمة لكل فصل مكتمل)، وإعداد المشهد الحالي. احقنه في بداية كل جلسة توليد.',
          '**ولِّد مشهداً واحداً في كل مرة.** اطلب من النموذج كتابة مشهد (200–600 كلمة) لكل جلسة بدلاً من طلب "الاستمرار" في وثيقة متنامية. مشهد واحد لكل جلسة يقلل انجراف السياق ويساعد على إبقاء الصوت متسقاً.',
          '**البيت شيت أولاً لكتابة السيناريو.** قبل توليد صفحات السيناريو، ولِّد بيت شيت على مستوى المشاهد. استخدمه كسقالة لكل توليد صفحة.',
          '**اختر نموذجاً يمكنك تشغيله ثم جرِّبه على مشهد من كتابتك.** النماذج الكثيفة من فئة 27B–31B (Qwen3.6 27B وGemma 4 31B) وLlama 3.3 70B نقاط انطلاق شائعة؛ لم تقيّم PromptQuorum أياً منها للخيال، وتصنّف لوحات الصدارة العامة للكتابة الإبداعية النماذج بشكل مختلف.',
          '**Ollama + أداة كتابة نص عادي تكامل يمكن الاعتماد عليه.** يمكن لـ Scrivener وObsidian وVS Code استضافة المخطوطة؛ ويخدم Ollama النموذج عبر API يمكن للتطبيقات أو السكريبتات استدعاؤها.',
          '**النماذج المضبوطة بقليل من الرفض (Hermes 4 70B) تندمج في سير العمل هذا بدون تغييرات في الإعداد.** للخيال الناضج، غيِّر نموذج Ollama؛ تقنيات وثيقة الجلسة وتوليد المشاهد متطابقة. تحقق من ترخيص كل نموذج لاستخدامك.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**نماذج للبدء (من بطاقات النماذج):** Qwen3.6 27B (كثيف، Apache-2.0، سياق 262,144 رمز)، Gemma 4 31B (كثيف، Apache-2.0، سياق 256K)، Llama 3.3 70B (كثيف، سياق 128K، Llama 3.3 Community License).',
          '**حد تخطيط نافذة السياق:** ~32K رمز (~24,000 كلمة) في كل عملية توليد؛ تعلن النماذج عن 128K–262,144 رمزاً، وهذا سقف وليس ضماناً للجودة.',
          '**حجم وثيقة الجلسة:** الهدف أقل من 4,000 رمز (بطاقات الشخصيات + ملخصات الفصول + إعداد المشهد الحالي).',
          '**هدف توليد المشاهد:** 200–600 كلمة لكل استدعاء توليد؛ مشاهد أطول عبر أوامر تسلسلية متعددة.',
          '**تنسيق السيناريو:** اجمع Ollama مع تعليمات إخراج بتنسيق Fountain لنص منسق كسيناريو.',
          '**أدوات الكتابة التي تعمل مع Ollama:** Scrivener (الصق الناتج؛ بلا API موثّقة للإضافات)، Obsidian (عبر إضافة محلية أو سكريبتات)، VS Code (عبر Continue.dev أو استدعاءات API مباشرة)، الطرفية الخالصة.',
          '**خيار قليل الرفض:** Hermes 4 70B (أساس Llama-3.1-70B) للخيال الناضج؛ نفس سير العمل، نفس تقنية وثيقة الجلسة.',
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: 'مشكلة نافذة السياق للكتابة الطويلة',
        image: '/images/local-llm-screenwriting-and-novel-drafting-context-window-en.svg',
        imageCaption:
          'تخطيط السياق: حد عمل بـ32K رمز (~24,000 كلمة) مقابل 128K–262,144 رمز تعلنها النماذج المفتوحة.',
        content:
          '**خطِّط لنحو 32K رمز في كل عملية توليد، حتى عندما يعلن النموذج عن أكثر من ذلك بكثير.** هذه قاعدة تخطيط حذرة من PromptQuorum وليست حداً مقيساً: وجدت أبحاث السياقات الطويلة (Liu وآخرون، "Lost in the Middle") أن النماذج تستخدم المعلومات في بداية المدخل الطويل ونهايته بموثوقية أكبر من المعلومات في منتصفه، وأن الجودة قد تنخفض كلما طال المدخل. وتعلن النماذج الأحدث عن نوافذ أكبر بكثير — يعلن Qwen3.6 27B عن 262,144 رمزاً أصلياً ويعلن Gemma 4 31B عن 256K — لذا اختبر نموذجك بنفسك. وبالنسبة للرواية، يبقى لصق المخطوطة حتى الآن وطلب الفصل التالي هو الأسلوب الأقل موثوقية، كما أن السياق الطويل يستهلك ذاكرة أكبر لأن ذاكرة KV المؤقتة تنمو معه.\n\nيعلن Kimi-K2.6 من Moonshot AI عن نافذة سياق بحجم 256K رمز (262,144)، من الفئة نفسها للنماذج المذكورة أعلاه، لكنه نموذج مزيج خبراء بنحو تريليون معامل إجمالي (32 مليار نشط) وأوزان int4 أصلية. وحتى عند 4 بت تبلغ الأوزان وحدها نحو 500 GB (تقدير PromptQuorum: تريليون معامل × 0.5 بايت)، فهو نموذج بفئة الخوادم لا الحواسيب المحمولة. وتنطبق تقنية وثيقة الجلسة والتوليد مشهداً بمشهد على النماذج القابلة للتشغيل محلياً مهما كان حجم سياقها.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'سقف التخطيط الحذر للالتزام بالسياق في النماذج اللغوية المحلية هو نحو 32,000 رمز (~24,000 كلمة) في كل عملية توليد — وبعد ذلك تجد أبحاث السياقات الطويلة استخداماً أقل موثوقية للمحتوى السابق، وقد يظهر ذلك كانجراف في الصوت وتناقضات في الحبكة عبر مخطوطة طويلة.',
          },
          {
            type: 'plain-terms',
            text: 'لا يمكنك أن تتوقع أن يتذكر النموذج ما حدث في الفصل الثالث وهو يكتب الفصل العشرين لمجرد أن المخطوطة كلها تتسع في نافذة سياقه. بدلاً من ذلك، اضغط ما يحتاج النموذج معرفته — بطاقات الشخصيات وملخصات الفصول وإعداد المشهد الحالي — في "وثيقة جلسة" بأقل من 4,000 رمز، واحقن ذلك في بداية كل جلسة كتابة. يحتاج النموذج فقط إلى معرفة ما يخص المشهد الذي يولّده الآن.',
          },
        ],
        items: [
          '**تحويل الرمز إلى كلمة:** 1 رمز ≈ 0.75 كلمة إنجليزية (قاعدة تقريبية). 32K رمز ≈ 24,000 كلمة. 128K رمز ≈ 96,000 كلمة (نحو رواية كاملة)؛ 262,144 رمز ≈ 196,000 كلمة.',
          '**تدهور الانتباه:** قد تفقد النماذج الإشارة الموثوقة إلى المحتوى من بداية نافذة سياق طويلة. يتجلى هذا كأخطاء في أسماء الشخصيات ونقاط حبكة منسية وانجراف الصوت.',
          '**اللاتماثل:** في دراسة Lost in the Middle، استخدمت النماذج بداية المدخل ونهايته بأفضل شكل، واستخدمت المحتوى في المنتصف بأقل موثوقية. اختبرت الدراسة نماذج متاحة في 2023، لذا اختبر النماذج الحالية بدلاً من افتراض النمط نفسه.',
          '**وثيقة الجلسة كحل:** اضغط كل ما يحتاجه النموذج في وثيقة مُهيكلة قصيرة. احقنها في البداية. ولِّد المشهد. أنهِ الجلسة. أعد التشغيل. ابدأ من جديد بنفس وثيقة الجلسة المحدَّثة.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تلصق المخطوطة الكاملة في السياق. إذا تجاوزت روايتك 10,000 كلمة ولصقت المسودة الكاملة لطلب الفصل التالي، فهناك خطر انجراف سياقي — قد ينسى النموذج التفاصيل المبكرة للشخصيات ويتناقض مع نقاط الحبكة ويعود إلى سجل عام. استخدم تقنية وثيقة الجلسة.',
          },
        ],
      },
      sessionDocument: {
        id: 'session-document',
        title: 'تقنية وثيقة الجلسة',
        content:
          'تقنية وثيقة الجلسة توصية في سير العمل من PromptQuorum مبنية على حدود السياق الموضحة أعلاه. لم تُجرِ PromptQuorum اختباراً مضبوطاً لها، والأحجام أدناه (4,000 رمز، و150 كلمة لكل بطاقة شخصية، و100–150 كلمة لكل ملخص فصل) إرشادات تخطيط وليست عتبات مقيسة.\n\n**وثيقة الجلسة هي ملف نص عادي تحتفظ به جنباً إلى جنب مع مخطوطتك — هي الحالة المضغوطة لروايتك التي يحتاج النموذج معرفتها لتوليد محتوى متسق.** لها ثلاثة أقسام: بطاقات الشخصيات النشطة وملخصات الفصول وإعداد المشهد الحالي.',
        promptExamples: [
          {
            label: 'قالب وثيقة الجلسة',
            text: '# SESSION DOCUMENT — [NOVEL TITLE]\n\n## ACTIVE CHARACTERS\n**[Character Name]**\nDominant trait: [one trait]\nContradicting behaviour: [one behaviour]\nSpeech register: [formal/casual/specific verbal tics]\nRelationship to [other character]: [brief]\n\n**[Character Name 2]**\n[same structure]\n\n## CHAPTER SUMMARIES (completed)\n**Chapter 1:** [100–150 words — what happened, what changed, where it ended]\n**Chapter 2:** [100–150 words]\n[continue for all completed chapters]\n\n## CURRENT SCENE SETUP\nChapter: [N]\nScene: [brief description of what this scene needs to accomplish]\nPOV: [character name]\nOpening state: [where we are at the start of this scene — 1 sentence]\nEmotional beat to land on: [what the POV character feels at the end — do not state it directly in the scene]\nWord ceiling: [200–500 words]',
          },
        ],
        items: [
          '**بطاقات الشخصيات — الهدف 150 كلمة لكل شخصية نشطة.** أدرج السمة المهيمنة والسلوك المتناقض وسجل الكلام والعلاقة الرئيسية مع الشخصيات النشطة الأخرى. أضف أو احذف الشخصيات عند نشاطها أو مغادرتها للمخطوطة.',
          '**ملخصات الفصول — الهدف 100–150 كلمة لكل فصل مكتمل.** ركز على: ما حدث، وما تغير في العلاقات بين الشخصيات، وما يعرفه القارئ الآن، وأين انتهى الفصل مكانياً وعاطفياً.',
          '**إعداد المشهد الحالي — محدد وموجز.** سمِّ زاوية الرؤية وغرض المشهد (ما يحتاج تحقيقه في القصة) والنبضة العاطفية المستهدفة وحد الكلمات. هذا هو الإجراء الذي يتخذه النموذج؛ بطاقات الشخصيات وملخصات الفصول هي السياق الذي يستخدمه للقيام به باتساق.',
          '**حجم وثيقة الجلسة — الهدف أقل من 4,000 رمز (~3,000 كلمة).** وثيقة الجلسة التي تتجاوز هذا تبدأ باستهلاك مساحة السياق المخصصة للتوليد. اضغط البطاقات والملخصات بقوة.',
          '**حدِّث بعد كل جلسة.** بعد توليد مشهد، أضف تحديث 1–2 جملة إلى ملخص الفصل ذي الصلة وحدِّث أي إدخال بطاقة شخصية تغيَّر. وثيقة الجلسة ملف حي؛ إبقاؤه محدَّثاً هو تكلفة الصيانة للتقنية.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'احفظ وثيقة الجلسة في ملف نص عادي جنباً إلى جنب مع مخطوطتك. في Ollama، يمكنك إنشاء Modelfile مع وثيقة الجلسة في كتلة SYSTEM وتحديثه قبل كل جلسة. في SillyTavern، الصقها في حقل أمر النظام في بداية كل جلسة رواية.',
          },
        ],
      },
      novelWorkflow: {
        id: 'novel-workflow',
        title: 'سير عمل صياغة الروايات',
        image: '/images/local-llm-screenwriting-and-novel-drafting-workflow-steps-en.svg',
        imageCaption:
          'سير عمل رواية من أربع مراحل بنموذج محلي: مخطط وبيت شيت وتوليد مشاهد ومراجعة حول وثيقة جلسة.',
        content:
          '**سير عمل صياغة الروايات مع نموذج لغوي محلي له أربع مراحل: المخطط والبيت شيت الفصلية وتوليد المشاهد وجولات المراجعة.** كل مرحلة تستخدم هيكل أمر مختلفاً.',
        items: [
          '**المرحلة 1 — المخطط:** ولِّد مخططاً على مستوى الفصول (10–30 فصلاً، جملة واحدة لكل فصل: ما يحدث وما يتغير). الأمر: "النوع الأدبي: [النوع]. البطل: [الاسم + الجرح المركزي]. الصراع المركزي: [في جملة واحدة]. اكتب مخططاً من 20 فصلاً — جملة واحدة لكل فصل، كل جملة تسمي المشهد والتغيير." راجع وعدِّل المخطط قبل المتابعة.',
          '**المرحلة 2 — البيت شيت:** وسِّع كل إدخال فصل إلى بيت شيت على مستوى المشاهد (3–8 مشاهد لكل فصل). الأمر لكل فصل: "ملخص الفصل [N]: [الصق إدخال الجملة الواحدة من المخطط]. وسِّع إلى بيت شيت على مستوى المشاهد: 4–6 مشاهد، كل واحدة موصوفة في جملة واحدة تسمي الموقع والمشاركين والتغيير الوحيد للمشهد. لا نثر بعد."',
          '**المرحلة 3 — توليد المشاهد:** استخدم وثيقة الجلسة + نبضة المشهد الحالي لتوليد مشهد واحد في كل مرة. راجع قوالب توليد المشاهد أدناه. ولِّد، راجع، الصق في المخطوطة، حدِّث وثيقة الجلسة. كرر.',
          '**المرحلة 4 — جولات المراجعة:** بعد إتمام فصل، شغِّل أوامر مراجعة محددة على مشاهد محددة. راجع [أوامر النماذج اللغوية المحلية لكتّاب الخيال الأدبي](/ar/power-local-llm/local-llm-prompts-for-fiction-writers) لهياكل أوامر المراجعة. لا تطلب من النموذج مراجعة أكثر من مشهد واحد لكل استدعاء توليد.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'احفظ المخطط والبيت شيت في ملفات منفصلة عن المخطوطة. هما الهيكل العظمي — المخطوطة هي اللحم. إبقاؤهما منفصلين يعني أنك تستطيع إعادة توليد أي جزء من أي منهما دون الكتابة فوق الآخر، ويمكنك لصق إدخال البيت شيت ذي الصلة فقط في إعداد المشهد الحالي دون تضمين المخطط بالكامل.',
          },
        ],
      },
      screenwritingWorkflow: {
        id: 'screenwriting-workflow',
        title: 'سير عمل كتابة السيناريو',
        content:
          '**تستخدم كتابة السيناريو مع نموذج لغوي محلي نفس تقنيات وثيقة الجلسة والبيت شيت المستخدمة في كتابة الروايات، مع إضافتين: تعليمات التنسيق في أمر النظام، وتوليد رأس المشهد (سطر slug) كخطوة منفصلة عن توليد الصفحات.**',
        promptExamples: [
          {
            label: 'أمر النظام لكتابة السيناريو',
            text: 'You are a screenplay formatting assistant. All prose you generate is formatted in standard US screenplay format:\n- Scene headers: INT./EXT. LOCATION — DAY/NIGHT\n- Action lines: present tense, concrete, maximum 3 lines per block\n- Character names: ALL CAPS above dialogue\n- Dialogue: centred, no dialogue tags\n- Parentheticals: sparingly, only for delivery or action mid-dialogue\n\nGenerate in Fountain-compatible plain text.',
          },
          {
            label: 'أمر من نبضة مشهد إلى صفحات سيناريو',
            text: 'Beat: [paste the one-sentence scene beat from the beat sheet]\nPOV character: [Name]\nPage target: [1–3 pages]\n\nGenerate the script pages for this beat. Use standard screenplay format. Begin with the slug line. No narration — action lines and dialogue only.',
          },
        ],
        items: [
          '**التنسيق في أمر النظام، ليس في دور المستخدم.** وضع تعليمات تنسيق السيناريو في رسالة النظام يعني أن كل توليد في الجلسة يتبع التنسيق دون تكرار التعليمة.',
          '**إخراج متوافق مع Fountain:** Fountain هو تنسيق ترميز نص عادي للسيناريوهات؛ يقرأه Highland وFade In، وكذلك تطبيقات أخرى في [دليل تطبيقات Fountain](https://fountain.io/apps). طلب توليد "نص عادي متوافق مع Fountain" ينتج إخراجاً يمكنك فتحه في هذه الأدوات أو تحويله لأدوات أخرى (انظر سؤال Final Draft في الأسئلة الشائعة).',
          '**سطور Slug أولاً:** ولِّد سطر slug (INT./EXT. الموقع — نهار/ليل) كأمر سطر واحد منفصل قبل توليد محتوى المشهد. هذا يُرسِّخ الموقع الجسدي قبل أن يبدأ النموذج في توليد الحركة.',
          '**جولات الحوار:** بعد توليد خطوط الحركة، شغِّل جولة حوار منفصلة: "خطوط الحركة محددة. اكتب الحوار لـ[الشخصية أ] و[الشخصية ب] في هذا المشهد. الشخصية أ تريد [X]. الشخصية ب تريد [Y]. بدون علامات حوار. 5–8 تبادلات."',
          '**إدارة عدد الصفحات:** لا يوجد رقم ثابت لعدد الكلمات في الصفحة، و"صفحة واحدة تساوي دقيقة" مجرد قاعدة تقريبية. احسب متوسط الكلمات في صفحات سيناريوك أنت، وحدد سقوف الكلمات انطلاقاً منه.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'انضباط البيت شيت أولاً أكثر أهمية لكتابة السيناريو منه للرواية. مشهد السيناريو له وظيفة هيكلية محددة (إعداد، مواجهة، قرار، منعطف) وهدف صفحات محدد. توليد الصفحات بدون بيت شيت ينتج مشاهد تنجرف في الطول وتفقد غرضها الهيكلي. دائماً اعرف ما يجب أن يحققه المشهد قبل توليد الصفحات.',
          },
        ],
      },
      sceneGeneration: {
        id: 'scene-generation',
        title: 'قوالب توليد المشاهد للأعمال الطويلة',
        content:
          '**يتطلب توليد المشاهد الطويلة وثيقة الجلسة كبادئة وأمر مشهد واحد كإجراء.** تفترض القوالب أدناه أن وثيقة الجلسة موجودة بالفعل في رسالة النظام أو في الدور الأول للمستخدم.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'للخيال الطويل، نمط توليد موثوق هو: وثيقة الجلسة في أمر النظام → أمر مشهد واحد في دور المستخدم → مراجعة → تحديث وثيقة الجلسة → تكرار، مشهد واحد لكل جلسة.',
          },
          {
            type: 'plain-terms',
            text: 'يحتاج النموذج معرفة ثلاثة أشياء لكتابة المشهد التالي باتساق: من هم هؤلاء الشخصيات (بطاقات الشخصيات)، وما الذي حدث بالفعل (ملخصات الفصول)، وما يجب أن يفعله هذا المشهد (إعداد المشهد). أعطه هذه الثلاثة بالضبط، لا أكثر. ثم ولِّد المشهد، الصقه في مخطوطتك، وحدِّث وثيقة الجلسة لتعكس ما تغير. كرر.',
          },
        ],
        promptExamples: [
          {
            label: 'أمر توليد مشهد رواية',
            text: '[SESSION DOCUMENT ALREADY IN SYSTEM PROMPT]\n\nCurrent scene:\nChapter: [N]\nBeat: [one sentence from the beat sheet]\nPOV: [character name]\nOpening: [one sentence — where we are, who is present]\nEmotional landing: [what the POV character feels at the end — show, don\'t state]\nWord ceiling: [300–500 words]\n\nWrite this scene. No summarising. Every sentence renders a moment.',
          },
          {
            label: 'أمر فحص الاستمرارية',
            text: 'Before writing the next scene, check for continuity. The session document says:\n- [Character A] is [trait/state]\n- The last scene ended with [brief description]\n\nThe next scene opens with [brief description]. Does this transition make sense? If not, what needs to change in the transition? One paragraph answer only.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'استخدم أمر فحص الاستمرارية في انتقالات الفصول — ليس في كل مشهد. انتقالات الفصول (حيث يتغير الموقع أو الوقت أو شخصية زاوية الرؤية) هي الأكثر شيوعاً لحدوث انقطاعات الاستمرارية وحيث يضيف الفحص أكبر قيمة.',
          },
        ],
      },
      tools: {
        id: 'tools',
        itemHeadings: true,
        title: 'تكاملات الأدوات للكتّاب',
        content:
          '**يعرض Ollama واجهة API متوافقة مع OpenAI على localhost تتصل بها مجموعة متنامية من الأدوات الموجهة للكتّاب.** التكاملات أدناه تمثل الخيارات الأكثر رسوخاً.',
        columns: ['الأداة', 'الرابط', 'التكامل', 'الأمثل لـ'],
        rows: [
          { 'الأداة': 'Obsidian', 'الرابط': '[obsidian.md](https://obsidian.md)', 'التكامل': 'إضافة Copilot أو Smart Connections → API لـ Ollama. انظر [Obsidian + إضافات النموذج اللغوي المحلي](/ar/power-local-llm/local-llm-with-obsidian-2026) للدليل التفصيلي.', 'الأمثل لـ': 'الكتّاب الذين يستخدمون Obsidian بالفعل للملاحظات + المخطوطة؛ توليد مدمج في نفس التطبيق' },
          { 'الأداة': 'Scrivener', 'الرابط': '[literatureandlatte.com/scrivener](https://www.literatureandlatte.com/scrivener)', 'التكامل': 'سكريبت خارجي عبر API لـ Ollama → لصق في الوثيقة', 'الأمثل لـ': 'الكتّاب الذين يهيكلون الروايات في Scrivener؛ مسودات الذكاء الاصطناعي ملصوقة في هيكل المشروع القائم' },
          { 'الأداة': 'VS Code', 'الرابط': '[code.visualstudio.com](https://code.visualstudio.com)', 'التكامل': 'إضافة Continue.dev → خلفية Ollama', 'الأمثل لـ': 'الكتّاب التقنيون ومصممو سرد الألعاب المرتاحون لمحرر الكود' },
          { 'الأداة': 'SillyTavern', 'الرابط': '[github.com/SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern)', 'التكامل': 'API متوافق مع OpenAI → Ollama', 'الأمثل لـ': 'خيال رواية الأدوار والكتابة الموجهة ببطاقات الشخصيات؛ ذاكرة شخصيات دائمة' },
          { 'الأداة': 'الطرفية الخالصة', 'التكامل': '`ollama run [model]` أو curl لـ API لـ Ollama', 'الأمثل لـ': 'سير العمل القابل للبرمجة؛ الكتّاب الذين يريدون أقصى تحكم بأدنى عبء للواجهة' },
          { 'الأداة': 'LM Studio', 'الرابط': '[lmstudio.ai](https://lmstudio.ai)', 'التكامل': 'واجهة دردشة مدمجة + API خادم محلي', 'الأمثل لـ': 'الكتّاب الذين يريدون مدير نماذج بواجهة رسومية بدون تثبيت Ollama بشكل منفصل' },
          { 'الأداة': 'NovelCrafter', 'الرابط': '[novelcrafter.com](https://www.novelcrafter.com)', 'التكامل': 'تكامل ذكاء اصطناعي مدمج؛ تذكر صفحات المساعدة اتصالات مع LM Studio وOllama ونقاط نهاية متوافقة مع OpenAI API', 'الأمثل لـ': 'الكتّاب الذين يريدون مساعدة ذكاء اصطناعي على مستوى الفصول داخل تطبيق واحد متخصص في الروايات' },
          { 'الأداة': 'Plottr', 'الرابط': '[plottr.com](https://plottr.com)', 'التكامل': 'سير عمل يدوي: هيكل الروايات في Plottr، الصق المشاهد/البيت شيت في Ollama خارجياً (يذكر Plottr أنه لن يضيف ميزات ذكاء اصطناعي)', 'الأمثل لـ': 'خيال النوع الأدبي الغني بالحبكة (غموض، إثارة، خيال) حيث رسم الحبكة الهيكلي هو محور سير العمل' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'أبسط تكامل يعمل لمعظم الكتّاب هو Obsidian + إضافة Copilot موجَّهة لـ Ollama. وثيقة جلستك تعيش في ملاحظة Obsidian، وفصول مخطوطتك تعيش في نفس المستودع، وتولِّد مباشرة في نفس التطبيق دون تبديل السياق. انظر [Obsidian + إضافات النموذج اللغوي المحلي](/ar/power-local-llm/local-llm-with-obsidian-2026) للدليل التفصيلي.',
          },
        ],
      },
      models: {
        id: 'models',
        itemHeadings: true,
        title: 'توصيات النماذج للأعمال الطويلة',
        content:
          '**للكتابة الطويلة متطلبات نماذج مختلفة عن الخيال القصير.** الالتزام بالسياق والاتساق في اتباع التعليمات عبر جلسات ممتدة والقدرة على الحفاظ على الصوت عبر استدعاءات توليد متعددة هي العوامل الحاسمة. الصفوف أدناه نقاط انطلاق مأخوذة من بطاقة كل نموذج؛ لم تقيّم PromptQuorum هذه النماذج للخيال، وتصنّف لوحات الصدارة العامة للكتابة الإبداعية النماذج بشكل مختلف، لذا جرّب مرشحين اثنين على مشهد من كتابتك. أما النماذج المفتوحة بفئة الخوادم مثل Command A+ (218 مليار معامل إجمالي، 25 مليار نشط، Apache 2.0) وMistral Large 3 (675 مليار معامل إجمالي، سياق 256K، Apache 2.0) فتقع خارج متناول عتاد المستهلك. للاطلاع على المشهد الأوسع للنماذج عبر جميع حالات الاستخدام، انظر [أفضل النماذج اللغوية المحلية في 2026](/ar/local-llms/best-local-llms-2026).',
        columns: ['المهمة', 'النموذج الموصى به', 'السبب'],
        rows: [
          { 'المهمة': 'صياغة الروايات (رئيسي)', 'النموذج الموصى به': 'Qwen3.6 27B أو Gemma 4 31B', 'السبب': 'نماذج كثيفة بحجم 27B–31B تعلن عن سياق 256K+ بتراخيص Apache؛ فئة حجم تناسب بطاقة GPU بسعة 24 GB أو ذاكرة موحدة بسعة 32 GB+ عند 4 بت (تقدير)' },
          { 'المهمة': 'كتابة السيناريو', 'النموذج الموصى به': 'Qwen3.6 27B أو Llama 3.3 70B', 'السبب': 'يعتمد الالتزام بالتنسيق أساساً على أمر النظام؛ جرّب مشهداً بتنسيق Fountain على نموذجين. Llama 3.3 70B كثيف ويعلن عن سياق 128K ويحتاج نحو 40 GB عند 4 بت (تقدير)' },
          { 'المهمة': 'توليد البيت شيت / المخطط', 'النموذج الموصى به': 'Qwen3.6 35B-A3B', 'السبب': 'مزيج خبراء بـ3B من 35B معامل نشط لكل رمز (Apache-2.0)، لذا يولّد أسرع لكل رمز؛ لم تقيّم PromptQuorum جودة المخططات' },
          { 'المهمة': 'جولات الحوار', 'النموذج الموصى به': 'النموذج الذي تناسب عيناته', 'السبب': 'نفّذ الحوار كجولة منفصلة على النموذج الذي تطابق أسطر المعايرة فيه سجل شخصيتك؛ لا يوجد ترتيب موثق للنماذج في الحوار' },
          { 'المهمة': 'المراجعة (هيكلية)', 'النموذج الموصى به': 'النموذج الذي صغت به المسودة', 'السبب': 'تعمل أوامر المراجعة التي تسمّي قيداً هيكلياً واحداً في كل استدعاء مع أي نموذج يتبع التعليمات؛ مشهد واحد لكل استدعاء' },
          { 'المهمة': 'خيال ناضج / داكن', 'النموذج الموصى به': 'Hermes 4 70B', 'السبب': 'أساس Llama-3.1-70B؛ تصف Nous Research توافقاً محايداً بوجه عام ونسب رفض أقل؛ ترخيص Llama 3؛ وضع استدلال هجين' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'أخطاء شائعة',
        items: [
          '**لصق المخطوطة الكاملة في السياق.** حتى عندما يعلن النموذج عن نافذة 128K–262K، تُستخدم المدخلات الطويلة بموثوقية أقل، لذا خطِّط لنحو 32K رمز. استخدم تقنية وثيقة الجلسة — بطاقات شخصيات وملخصات فصول مضغوطة.',
          '**طلب "الاستمرار" في وثيقة مفتوحة.** "استمر في الرواية" ينتج انجرافاً. "اكتب المشهد التالي: [إعداد محدد، زاوية رؤية، حد كلمات]" ينتج مخرجاً متسقاً ومحدوداً يمكنك تقييمه ولصقه.',
          '**بدون بيت شيت لكتابة السيناريو.** توليد صفحات سيناريو بدون نبضة مشهد ينتج صفحات تنجرف في الطول وتفقد وظيفتها الهيكلية. ولِّد البيت شيت دائماً أولاً.',
          '**إهمال تحديثات وثيقة الجلسة.** إذا لم تحدِّث ملخص الفصل بعد توليد مشهد، تصبح وثيقة الجلسة قديمة. وثيقة الجلسة القديمة تنتج تناقضات في غضون جلسات قليلة.',
          '**توليد أكثر من مشهد واحد لكل جلسة.** توليد مشاهد متعددة داخل نافذة سياق واحدة ينتج المشهد الأول جيداً وكل مشهد لاحق بتناسق أقل. مشهد واحد لكل جلسة؛ أعد التشغيل وأعد الحقن.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[بطاقة نموذج Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) و[بطاقة نموذج Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — المعاملات، والسياق الأصلي 262,144 رمز، وتمديد YaRN، وApache-2.0، اطُّلع عليهما في 26 أكتوبر 2026',
          '[بطاقة نموذج Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it) — نموذج كثيف بحجم 31B، وسياق 256K، وApache 2.0، اطُّلع عليها في 26 أكتوبر 2026',
          '[بطاقة نموذج Llama 3.3 70B Instruct](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) — 70B، وسياق 128K، وLlama 3.3 Community License، نُشر في 6 ديسمبر 2024',
          '[بطاقة نموذج Hermes 4 70B](https://huggingface.co/NousResearch/Hermes-4-70B) — أساس Llama-3.1-70B، واستدلال هجين، و"broadly neutral alignment"',
          '[بطاقة نموذج Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) — تريليون معامل إجمالي و32 مليار نشط، وسياق 256K، وint4 أصلي',
          '[توثيق Command A+](https://docs.cohere.com/docs/command-a-plus) و[بطاقة نموذج Mistral Large 3](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512) — عدد المعاملات وتراخيص النماذج بفئة الخوادم',
          '[Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172) — Liu وآخرون، 2023',
          '[Fountain.io](https://fountain.io) — مواصفات تنسيق السيناريو Fountain و[قائمة التطبيقات](https://fountain.io/apps)',
          '[مركز مساعدة Final Draft](https://kb.finaldraft.com/hc/en-us/articles/15575076862228-Can-Final-Draft-import-a-file-written-in-a-Fountain-based-screenwriting-program) — يذكر أن Final Draft لا يستورد ملفات .fountain مباشرة',
          '[قواعد الذكاء الاصطناعي في Amazon KDP، Publishers Weekly](https://www.publishersweekly.com/pw/by-topic/digital/content-and-e-books/article/93122-amazon-issues-new-ai-guidelines-for-its-kdp-platform.html) و[تقديمات Clarkesworld](https://clarkesworldmagazine.com/submissions/) — سياسات الذكاء الاصطناعي لدى دور النشر والمنصات؛ تحقق من النص الحالي قبل التقديم',
          '[ملاحظات إصدار Scrivener](https://www.literatureandlatte.com/scrivener/release-notes) — الإصدارات من 3.4.0 إلى 3.5.2 (ديسمبر 2025): لا إدخالات للإضافات أو API؛ "Scrivener itself contains no AI"؛ اطُّلع عليها في 26 أكتوبر 2026',
          '[Plottr in 2026](https://plottr.com/plottr-in-2026/) و[مساعدة NovelCrafter حول اتصالات الذكاء الاصطناعي](https://www.novelcrafter.com/help/categories/ai-connections) — يذكر Plottr أنه لا يطوّر ميزات ذكاء اصطناعي؛ ويسرد NovelCrafter اتصالات مع LM Studio وOllama ونقاط نهاية متوافقة مع OpenAI API',
          'توثيق API لـ Ollama — [Ollama](https://ollama.com/docs)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكن لنموذج لغوي محلي كتابة رواية كاملة؟',
            a: 'يمكن لنموذج لغوي محلي توليد نثر رواية كاملة، لكن الذكاء الهيكلي والتحريري يجب أن يأتي من الكاتب. يولّد النموذج المشاهد عندما يُعطى إعدادات محددة؛ ولا يخطط أو يقيّم أو يتخذ قرارات موضوعية من تلقاء نفسه. تعامل معه كمولّد سريع للمسودات الأولى لمشاهد تعرف كيف تكتبها: يوفر الوقت أمام الصفحة البيضاء، بينما يتخذ الكاتب كل القرارات المهمة. تحقق من سياسات الذكاء الاصطناعي لدى دور النشر والمنصات قبل التقديم (انظر سؤال الناشرين أدناه).',
          },
          {
            q: 'ما الحد الأقصى لنافذة السياق التي يمكنني استخدامها بشكل موثوق؟',
            a: 'تعلن النماذج عن 128K إلى 262,144 رمز، لكن PromptQuorum توصي بالتخطيط لنحو 32K رمز (~24,000 كلمة) في كل عملية توليد، لأن أبحاث السياقات الطويلة تُظهر أن النماذج تستخدم منتصف المدخلات الطويلة بموثوقية أقل. هذه قاعدة تخطيط حذرة وليست حداً مقيساً لكل نموذج، لذا اختبر نموذجك. تُبقي تقنية وثيقة الجلسة سياق العمل دون 4,000–6,000 رمز، فيبقى كل استدعاء توليد ضمن هذا النطاق بهامش واسع.',
          },
          {
            q: 'كيف أمنع النموذج من تغيير صوت شخصيتي في منتصف الرواية؟',
            a: 'لانجراف الصوت سببان: وثيقة جلسة قديمة (مع تطورات الشخصية الأخيرة الغائبة) وتخفيف السياق (بطاقة الشخصية بعيدة جداً عن التوليد النشط في السياق). الحل: احتفظ ببطاقة الشخصية في رسالة النظام (لا مدفونة في مقدمة طويلة لدور المستخدم)، حدِّث البطاقة بعد أي مشهد تعيش فيه الشخصية لحظة قوس مهمة، وابقِ البطاقة موجزة بما يكفي لتناسب القسم العلوي من سياق كل جلسة.',
          },
          {
            q: 'هل يمكنني استخدام Scrivener مع نموذج لغوي محلي؟',
            a: 'ليس أصلياً — لا يوثّق Scrivener 3 أي نظام إضافات، ولا تذكر ملاحظات الإصدار الرسمية حتى 3.5.2 (ديسمبر 2025) أي تكامل مع الذكاء الاصطناعي: تقول ملاحظات 3.4.0 "Scrivener itself contains no AI" وتضيف دعم Writing Tools من Apple، وهي ميزة نظام في macOS. سير عمل شائع: التوليد في Ollama (عبر الطرفية أو سكريبت مرافق)، ونسخ الناتج، ولصقه في مستند Scrivener المناسب. يستخدم بعض الكتّاب Obsidian كطبقة صياغة بالذكاء الاصطناعي ثم يستوردون الفصول المكتملة إلى Scrivener للهيكلة النهائية. والسكريبتات التي تستدعي Ollama API وتنسخ الناتج إلى الحافظة هي الأقرب إلى التكامل الأصلي.',
          },
          {
            q: 'ما الأفضل لكتابة السيناريو: Ollama أم ذكاء اصطناعي سحابي؟',
            a: 'بالنسبة لكتّاب السيناريو الذين يحتاجون إلى توليد محتوى ناضج (عنف، علم نفس مظلم، شخصيات معقدة أخلاقياً)، يمنحك النموذج المحلي تحكماً في النموذج وسلوك الرفض لديه — فبعض النماذج المستضافة ترفض أو تخفف محتوى يظهر في السيناريوهات الدرامية، وتتغير سياسات الخدمات المستضافة بمرور الوقت. والنموذج المحلي قليل الرفض مثل Hermes 4 70B لديه رفض مدمج أقل، لكنك تظل مسؤولاً عن المحتوى الذي تولّده وتنشره. ويعتمد اتساق التنسيق أساساً على التعليمات في أمر النظام، وهي تعمل في الحالتين. الاختيار يتعلق أساساً بالتحكم في المحتوى والخصوصية والتكلفة؛ ولم تقارن PromptQuorum جودة المخرجات بين النماذج المستضافة والمحلية في كتابة السيناريو.',
          },
          {
            q: 'كيف أولِّد حواراً يبدو مثل شخصية محددة؟',
            a: 'نهج ثلاثي الخطوات: (1) أضف سجل كلام الشخصية إلى وثيقة الجلسة. (2) ولِّد 3–5 أسطر حوار مثالية لهذه الشخصية في سياق محايد كخطوة معايرة في بداية الجلسة. (3) استخدم تلك الأسطر كمثال في أمر الحوار: "اكتب الحوار بنفس السجل الموجود في هذه الأمثلة: [الصق الأمثلة]." خطوة المعايرة هي التقنية الأكثر فعالية لاتساق صوت الشخصية.',
          },
          {
            q: 'هل أحتاج GPU لاستخدام نموذج لغوي محلي في كتابة الروايات؟',
            a: 'تسرّع وحدة GPU التوليد كثيراً لكنها ليست شرطاً. على Apple Silicon تتيح الذاكرة الموحدة لجهاز MacBook Pro بسعة 16 GB تشغيل نماذج أصغر (نحو فئة 8B–14B عند 4 بت، وهو تقدير) — أبطأ من جهاز بـGPU سعة 24 GB لكنه مقبول عندما تقرأ المخرجات وتقيّمها بين عمليات التوليد. تتسع بطاقة NVIDIA بسعة 24 GB (RTX 4090 وRTX 3090) لنماذج فئة 27B–32B عند 4 بت (تقدير)؛ أما نماذج فئة 70B فتحتاج نحو 40 GB أو أكثر عند 4 بت، فتتطلب بطاقتي GPU أو بطاقة 48 GB أو ذاكرة موحدة 64 GB أو تفريغاً إلى المعالج أبطأ.',
          },
          {
            q: 'هل يمكنني استخدام النماذج اللغوية المحلية مع Final Draft أو برنامج سيناريو مهني آخر؟',
            a: 'ليس مباشرة. بحسب مركز مساعدة Final Draft، لا يستطيع Final Draft استيراد ملفات .fountain؛ والإرشاد هو حفظ النص كملف .txt عادي واختيار Script (وليس Text) عند الاستيراد، أو جلبه بصيغة FDX من تطبيق يصدّر هذه الصيغة. يحوّل Highland بين Fountain وFDX وPDF، ويستورد Fade In صيغة Fountain ويصدّرها (بحسب دليل تطبيقات Fountain). سير العمل: ولِّد نصاً بتنسيق Fountain في Ollama، وافتحه في Highland أو Fade In، ثم صدِّر FDX إلى Final Draft.',
          },
          {
            q: 'هل يمكنني استخدام Kimi-K2.6 محلياً لصياغة الروايات؟',
            a: 'يعلن Kimi-K2.6 عن نافذة سياق بحجم 256K رمز، من الفئة نفسها لـQwen3.6 27B وGemma 4 31B، لكنه نموذج مزيج خبراء بنحو تريليون معامل إجمالي (32 مليار نشط) وأوزان int4 أصلية. تبلغ الأوزان وحدها نحو 500 GB (تقدير PromptQuorum)، فيحتاج إلى خادم متعدد وحدات GPU أو جهاز بذاكرة موحدة ضخمة جداً، وهو غير عملي على عتاد المستهلك. وفي سير العمل المحلي بالكامل، يغطي نموذج كثيف بحجم 27B–70B مع تقنية وثيقة الجلسة أعمالاً بطول رواية دون نموذج بتريليون معامل.',
          },
          {
            q: 'ما رأي المحررين في المخطوطات التي ساعد عليها الذكاء الاصطناعي؟',
            a: 'تختلف السياسات بحسب الناشر والمنصة وما زالت تتغير في 2026، لذا تحقق من السياسة المعنية قبل التقديم. تشترط Amazon KDP إبلاغها عندما يكون النص أو الصور أو الترجمات مولَّدة بالذكاء الاصطناعي، وتعامل المحتوى الذي أنشأته أداة ذكاء اصطناعي على أنه مولَّد بالذكاء الاصطناعي حتى بعد تحرير جوهري؛ أما النص الذي كتبته بنفسك وساعدك الذكاء الاصطناعي فقط في تحريره أو صقله فهو "بمساعدة الذكاء الاصطناعي" ولا يحتاج إلى إفصاح (بحسب قواعد Amazon كما نقلتها Publishers Weekly في سبتمبر 2023). وترفض بعض المجلات الأعمال التي شارك فيها الذكاء الاصطناعي رفضاً قاطعاً — إذ تنص إرشادات التقديم في Clarkesworld على أنها لا تنظر في القصص المكتوبة أو المشارَك في كتابتها أو المدعومة بالذكاء الاصطناعي. ونص المشاهد الذي يولّده نموذج لغوي محلي يندرج تحت تعريفات مثل تعريف "المولَّد بالذكاء الاصطناعي" لدى KDP، لذا أفصح عنه حيثما يُطلب. هذه معلومات عامة وليست استشارة قانونية.',
          },
          {
            q: 'ما الأجهزة التي أحتاجها لسياقات بحجم مليون رمز؟',
            a: 'يعلن Qwen3.6 27B وQwen3.6 35B-A3B عن سياق أصلي بحجم 262,144 رمز يمكن تمديده إلى نحو 1,010,000 رمز بمعايرة YaRN (بحسب بطاقتي النموذجين). يحتاج السياق الطويل إلى ذاكرة لذاكرة KV المؤقتة فوق الأوزان، لذا يتطلب تشغيل بحجم مليون رمز ذاكرة أكبر بكثير من إعداد المستهلك المعتاد؛ ولم تقِس PromptQuorum هذا المتطلب. وقد صُممت تقنية وثيقة الجلسة في هذه المقالة لسد هذه الفجوة تحديداً — مخرجات طويلة متسقة دون الاعتماد على نافذة بحجم مليون رمز.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[أوامر النماذج اللغوية المحلية لكتّاب الخيال الأدبي: قوالب وتقنيات](/ar/power-local-llm/local-llm-prompts-for-fiction-writers) — قوالب كتابة المشاهد والحوار والشخصيات وبناء العوالم ونقل الأسلوب التي تعمل ضمن سير عمل وثيقة الجلسة.',
          '[أفضل النماذج اللغوية المحلية في 2026](/ar/local-llms/best-local-llms-2026) — مقارنة كاملة للنماذج عبر جميع حالات الاستخدام بما فيها الكتابة الإبداعية والبرمجة والاستدلال.',
          '[Obsidian + إضافات النموذج اللغوي المحلي](/ar/power-local-llm/local-llm-with-obsidian-2026) — دليل أكثر تفصيلاً حول أي إضافات Obsidian تعمل بشكل أفضل مع Ollama لسير عمل الكتابة.',
          '[أفضل النماذج اللغوية المحلية للكتابة الإبداعية 2026](/ar/power-local-llm/best-local-llm-creative-writing) — مقارنة النماذج لتوليد السرد بما فيها إعدادات أخذ العينات ومتطلبات الأجهزة.',
          '[النماذج اللغوية المحلية غير المقيدة للكتابة الإبداعية: الأخلاقيات والإعداد](/ar/power-local-llm/uncensored-local-llm-creative-writing-ethics) — متى تستخدم النماذج غير المقيدة للخيال الناضج وكيف تضبطها في نفس سير عمل Ollama.',
          '[SillyTavern مقابل Agnai مقابل RisuAI: أفضل واجهة أمامية لعب أدوار محلية](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — خيارات الواجهة الأمامية للكتابة الموجهة ببطاقات الشخصيات والخيال التعاوني.',
          '[Continue.dev مقابل Cline مقابل Aider: أفضل مساعد كود محلي](/ar/power-local-llm/continue-dev-vs-cline-vs-aider-local) — إضافة IDE نفسها المستخدمة لمساعدة الكود يمكن توجيهها لـ Ollama لمساعدة الكتابة المضمنة في VS Code.',
          '[شرح الأوامر بسلسلة التفكير](/ar/prompt-engineering/chain-of-thought-prompting) — أوامر التفكير المُهيكل القابلة للتطبيق على تخطيط الحبكة وتحليل النبضات السردية وحل المشكلات السردية.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'صياغة الروايات والسيناريوهات بالنماذج اللغوية المحلية: دليل سير العمل لأكثر من 100,000 كلمة',
      description: 'سير عمل كامل لاستخدام النماذج اللغوية المحلية في كتابة الروايات والسيناريوهات: اختيار النماذج وإدارة السياق والسقالات الفصلية وتوليد المشاهد وتكاملات الأدوات للكتّاب.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/local-llm-screenwriting-and-novel-drafting',
      inLanguage: 'ar',
      datePublished: '2026-05-07',
      dateModified: '2026-10-26',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
},
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-26',
    theme: 'Creative & Roleplay',
    heroImage: '/images/local-llm-screenwriting-and-novel-drafting-overview-hero-ko.webp',
    title: '로컬 LLM으로 소설과 시나리오 집필하기: 10만 단어 이상을 위한 워크플로 가이드',
    seoTitle: '로컬 LLM 시나리오·소설 오프라인 집필 가이드 2026',
    intro:
      '소설이나 시나리오 집필 워크플로에 통합된 로컬 LLM은 인터넷 접속, 클라우드 로그, 사용량 제한 없이 장면 초안, beat sheet, 대화 검토, 수정 라운드를 생성할 수 있습니다. 이 가이드는 모델 선택, 장문 작업을 위한 컨텍스트 윈도 관리, 챕터별 스캐폴딩, 장면 생성, 그리고 로컬 LLM을 집필 소프트웨어와 연결하는 도구들을 포함한 전체 워크플로를 다룹니다.',
    metaDescription:
      '로컬 LLM으로 소설·시나리오를 집필하는 워크플로: 모델 출발점, 컨텍스트 관리, 챕터 스캐폴딩, 장면 생성, 집필 도구 연동을 설명합니다.',
    twitterDescription:
      '로컬 LLM으로 소설과 시나리오를 집필하는 방법: 컨텍스트 윈도 관리, 챕터 스캐폴딩, 장면 생성, 대화 검토, 도구 통합.',
    current_models_mentioned: [
      'Qwen3.6 27B',
      'Gemma 4 31B',
      'Llama 3.3 70B',
      'Hermes 4 70B',
      'Kimi-K2.6',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      '대규모 창작 작업에 로컬 LLM을 초안 보조 도구로 활용하고자 하는 시나리오 작가, 소설가, 게임 내러티브 디자이너 — 컨텍스트 윈도를 관리하고, 초안 콘텐츠를 생성하고, AI 지원을 기존 집필 도구에 통합하는 작업을 위한 가이드입니다.',
    readTime: '15분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM screenwriting novel drafting',
    targetKeywords: [
      '로컬 llm 소설 쓰기',
      '로컬 llm 시나리오 집필',
      'ollama 창작 글쓰기 워크플로',
      '컨텍스트 윈도 장문 소설',
      '로컬 ai 글쓰기 보조',
      '장면 생성 로컬 모델',
    ],
    leadAnswerBlock:
      '**로컬 LLM으로 장문 소설을 쓸 때의 핵심 과제는 컨텍스트 관리입니다. 1회 생성당 약 32,000 토큰으로 계획하고, 원고 전체 대신 압축한 "세션 문서"(인물 카드, 챕터 요약, 현재 장면 설정)를 주어 한 번에 한 장면씩 생성하십시오.**',
    quickAnswerTop: {
      ko: {
        question: '컨텍스트를 잃지 않고 로컬 LLM으로 소설이나 시나리오를 집필하는 방법은 무엇입니까?',
        answer:
          '핵심 기법은 구조화된 컨텍스트 주입입니다. 전체 원고를 컨텍스트 윈도에 붙여넣는 대신, 압축된 세션 문서를 유지하십시오. 인물 카드(이름, 지배적 특성, 말하기 방식), 완료된 챕터의 줄거리 요약(챕터당 100–200 단어), 현재 장면 설정(beat, 시점, 단어 상한)을 포함합니다. 이 세션 문서를 매 집필 세션 시작 시 주입하십시오. 성장하는 문서를 이어 달라고 요청하는 대신, 한 번에 한 장면씩 생성하십시오. 각 호출에는 압축된 상태만 담기므로 이 방식은 어떤 소설 길이에도 적용되며, 작가들이 원고 전체를 하나의 긴 컨텍스트 윈도에 넣으려 할 때 보고하는 컨텍스트 이탈과 목소리 상실을 줄여 줍니다.',
        bullets: [
          '세션 문서 기법: 인물 카드 + 챕터 요약 + 현재 장면 설정을 세션 시작 시 주입합니다.',
          '한 번에 한 장면 생성 — 성장하는 문서를 약 32K 토큰 이상 "이어 쓰도록" 요청하지 마십시오.',
          '시나리오는 beat sheet 우선: 산문 작성 전에 beat sheet를 생성하고 구조적 스캐폴드로 사용하십시오.',
          '모델 출발점(모델 카드의 사양): Qwen3.6 27B, Gemma 4 31B, Llama 3.3 70B. PromptQuorum은 소설용으로 평가하지 않았습니다.',
          'Ollama + Obsidian은 흔한 작가 워크플로입니다. Scrivener에는 문서화된 플러그인 API가 없어 출력을 붙여넣습니다.',
          '컨텍스트 윈도 계획 기준: 모델은 128K–262,144 토큰을 내세우지만 긴 컨텍스트의 품질은 고르지 않으므로 1회 생성당 약 32K로 계획하십시오.',
          'Hermes 4 70B 같은 거부가 적은 fine-tune도 같은 워크플로로 성숙한 소설에 쓸 수 있습니다. 모델별 라이선스를 확인하십시오.',
        ],
        updatedDate: '2026-10-26',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '컨텍스트 윈도 문제', anchor: '#context-window' },
      { label: '세션 문서 기법', anchor: '#session-document' },
      { label: '소설 집필 워크플로', anchor: '#novel-workflow' },
      { label: '시나리오 워크플로', anchor: '#screenwriting-workflow' },
      { label: '장면 생성 템플릿', anchor: '#scene-generation' },
      { label: '도구 통합', anchor: '#tools' },
      { label: '모델 추천', anchor: '#models' },
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
          '**컨텍스트 윈도 계획 기준: 명목상 128K–262,144 토큰, 계획은 약 32K.** 모델은 긴 입력의 중간을 덜 안정적으로 활용하므로("Lost in the Middle") 1회 생성당 약 32K 토큰(약 24,000 단어)으로 계획하고, 전체 원고 대신 세션 문서 기법을 사용하십시오.',
          '**세션 문서 기법이 핵심 기술입니다.** 활성 인물 카드(인물당 150 단어), 챕터 요약(완료된 챕터당 100–200 단어), 현재 장면 설정을 담은 압축 텍스트 파일을 유지하십시오. 매 생성 세션 시작 시 주입하십시오.',
          '**한 번에 한 장면을 생성하십시오.** 성장하는 문서를 "이어 쓰도록" 요청하는 대신, 세션당 하나의 장면(200–600 단어)을 작성하도록 모델에 요청하십시오. 세션당 한 장면은 컨텍스트 이탈을 줄이고 일관된 목소리를 유지하는 데 도움이 됩니다.',
          '**시나리오는 beat sheet 우선으로 시작하십시오.** 스크립트 페이지를 생성하기 전에 장면 수준의 beat sheet를 먼저 생성하십시오. 이를 각 페이지 생성의 스캐폴드로 활용하십시오.',
          '**실행할 수 있는 모델을 고르고, 본인의 장면으로 시험해 보십시오.** 27B–31B급 dense 모델(Qwen3.6 27B, Gemma 4 31B)과 Llama 3.3 70B가 흔한 출발점입니다. PromptQuorum은 이 중 어느 것도 소설용으로 평가하지 않았으며, 공개된 창작 글쓰기 리더보드도 모델 순위가 서로 다릅니다.',
          '**Ollama + 일반 텍스트 집필 도구는 안정적인 통합입니다.** Scrivener, Obsidian, VS Code가 원고를 담을 수 있으며, Ollama는 앱이나 스크립트가 호출할 수 있는 API를 통해 모델을 제공합니다.',
          '**거부가 적은 모델(Hermes 4 70B)은 설정 변경 없이 이 워크플로에 적합합니다.** 성숙한 소설을 위해 Ollama 모델만 전환하면 되며, 세션 문서 및 장면 생성 기법은 동일합니다. 용도에 맞는지 모델별 라이선스를 확인하십시오.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**모델 출발점(모델 카드 기준):** Qwen3.6 27B(dense, Apache-2.0, 262,144 토큰 컨텍스트), Gemma 4 31B(dense, Apache-2.0, 256K 컨텍스트), Llama 3.3 70B(dense, 128K 컨텍스트, Llama 3.3 Community License).',
          '**컨텍스트 윈도 계획 상한:** 1회 생성당 ~32K 토큰(~24,000 단어); 모델은 128K–262,144 토큰을 내세우지만 이는 상한일 뿐 품질 보증이 아닙니다.',
          '**세션 문서 크기:** 4,000 토큰 미만 목표 (인물 카드 + 챕터 요약 + 현재 장면 설정).',
          '**장면 생성 목표:** 생성 호출당 200–600 단어; 더 긴 장면은 여러 순차 프롬프트를 통해 생성합니다.',
          '**시나리오 형식:** Fountain 형식 출력 지시와 함께 Ollama를 사용하면 스크립트 형식의 텍스트를 생성합니다.',
          '**Ollama와 함께 작동하는 집필 도구:** Scrivener (출력 붙여넣기; 문서화된 플러그인 API 없음), Obsidian (로컬 플러그인 또는 스크립트를 통해), VS Code (Continue.dev 또는 직접 API 호출을 통해), 순수 터미널.',
          '**거부가 적은 옵션:** 성숙한 소설을 위한 Hermes 4 70B(Llama-3.1-70B 기반); 동일한 워크플로, 동일한 세션 문서 기법.',
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: '장문 집필을 위한 컨텍스트 윈도 문제',
        image: '/images/local-llm-screenwriting-and-novel-drafting-context-window-en.svg',
        imageCaption:
          '컨텍스트 계획: 작업 상한 32K 토큰(약 24,000단어), 오픈 모델은 128K–262,144 토큰을 내세움.',
        content:
          '**모델이 훨씬 큰 윈도를 내세우더라도 1회 생성당 약 32K 토큰으로 계획하십시오.** 이는 PromptQuorum의 보수적인 계획 규칙이며 측정된 한계가 아닙니다. 긴 컨텍스트 연구(Liu 외, "Lost in the Middle")에서는 모델이 긴 입력의 처음과 끝에 있는 정보를 중간에 있는 정보보다 더 안정적으로 활용하고, 입력이 길어질수록 품질이 떨어질 수 있다고 보고되어 있습니다. 새 모델은 훨씬 큰 윈도를 내세우므로 — Qwen3.6 27B는 네이티브 262,144 토큰, Gemma 4 31B는 256K — 사용하는 모델을 직접 시험해야 합니다. 소설의 경우, 지금까지의 원고를 붙여넣고 다음 챕터를 요청하는 방식은 여전히 가장 신뢰하기 어려우며, 긴 컨텍스트는 KV 캐시가 함께 커지기 때문에 메모리도 더 많이 사용합니다.\n\nMoonshot AI의 Kimi-K2.6은 256K 토큰(262,144)의 컨텍스트 윈도를 내세워 위 모델들과 같은 급이지만, 총 파라미터 약 1조 개(활성 320억 개)의 Mixture-of-Experts 모델이며 네이티브 int4 가중치로 제공됩니다. 4비트에서도 가중치만 약 500 GB가 되므로(PromptQuorum 추정: 1조 파라미터 × 0.5바이트) 노트북용이 아니라 서버급 모델입니다. 세션 문서 기법과 장면별 생성은 컨텍스트 크기와 관계없이 로컬에서 실행 가능한 모델에 적용됩니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 LLM에서 컨텍스트 준수의 보수적인 계획 상한은 1회 생성당 약 32,000 토큰(~24,000 단어)입니다 — 이를 초과하면 긴 컨텍스트 연구에서는 이전 콘텐츠의 활용이 덜 안정적이라고 보고되어 있으며, 장편 원고 전체에 걸쳐 목소리 이탈과 줄거리 불일치로 나타날 수 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '원고 전체가 컨텍스트 윈도에 들어간다고 해서 모델이 챕터 20을 쓰면서 챕터 3에서 무슨 일이 있었는지 기억할 것이라고 기대할 수는 없습니다. 대신, 모델이 알아야 할 것들 — 인물 카드, 챕터 요약, 현재 장면 설정 — 을 4,000 토큰 미만의 "세션 문서"로 압축하고, 매 집필 세션 시작 시 그것을 주입하십시오. 모델은 현재 생성 중인 장면과 관련된 것만 알면 됩니다.',
          },
        ],
        items: [
          '**토큰-단어 변환:** 1 토큰 ≈ 영어 기준 0.75 단어(경험칙). 32K 토큰 ≈ 24,000 단어. 128K 토큰 ≈ 96,000 단어(소설 한 편 정도); 262,144 토큰 ≈ 196,000 단어.',
          '**어텐션 저하:** 모델은 긴 컨텍스트 윈도의 초반부 콘텐츠에 대한 신뢰할 수 있는 참조를 잃을 수 있습니다. 이는 인물 이름 오류, 잊혀진 줄거리 포인트, 확립된 어조에서의 목소리 이탈로 나타납니다.',
          '**비대칭성:** Lost in the Middle 연구에서 모델은 입력의 처음과 끝을 가장 잘 활용했고 중간의 콘텐츠는 가장 덜 안정적으로 활용했습니다. 이 연구는 2023년에 쓸 수 있던 모델을 대상으로 했으므로, 같은 패턴을 가정하지 말고 현재 모델을 직접 시험하십시오.',
          '**해결책으로서의 세션 문서:** 모델이 필요한 모든 것을 짧은 구조화 문서로 압축하십시오. 시작 시 주입하십시오. 장면을 생성하십시오. 세션을 종료하십시오. 재시작하십시오. 새 장면을 반영하도록 업데이트된 동일한 세션 문서로 다시 시작하십시오.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '전체 원고를 컨텍스트에 붙여넣지 마십시오. 소설이 10,000 단어를 초과한 상태에서 전체 초안을 붙여넣고 다음 챕터를 요청하면 컨텍스트 이탈의 위험이 있습니다 — 모델이 초기 인물 세부 사항을 잊고, 확립된 줄거리 포인트와 모순되며, 일반적인 어조로 돌아갈 수 있습니다. 세션 문서 기법을 사용하십시오.',
          },
        ],
      },
      sessionDocument: {
        id: 'session-document',
        title: '세션 문서 기법',
        content:
          '세션 문서 기법은 위에서 설명한 컨텍스트 한계를 바탕으로 한 PromptQuorum의 워크플로 권장 사항입니다. PromptQuorum은 통제된 시험을 하지 않았으며, 아래 크기(4,000 토큰, 인물 카드당 150 단어, 챕터 요약당 100–150 단어)는 계획용 가이드라인이지 측정된 임계값이 아닙니다.\n\n**세션 문서는 원고 옆에 보관하는 일반 텍스트 파일로, 모델이 일관된 콘텐츠를 생성하기 위해 알아야 하는 소설의 압축 상태입니다.** 세 섹션으로 구성됩니다: 활성 인물 카드, 챕터 요약, 현재 장면 설정.',
        promptExamples: [
          {
            label: '세션 문서 템플릿',
            text: '# SESSION DOCUMENT — [NOVEL TITLE]\n\n## ACTIVE CHARACTERS\n**[Character Name]**\nDominant trait: [one trait]\nContradicting behaviour: [one behaviour]\nSpeech register: [formal/casual/specific verbal tics]\nRelationship to [other character]: [brief]\n\n**[Character Name 2]**\n[same structure]\n\n## CHAPTER SUMMARIES (completed)\n**Chapter 1:** [100–150 words — what happened, what changed, where it ended]\n**Chapter 2:** [100–150 words]\n[continue for all completed chapters]\n\n## CURRENT SCENE SETUP\nChapter: [N]\nScene: [brief description of what this scene needs to accomplish]\nPOV: [character name]\nOpening state: [where we are at the start of this scene — 1 sentence]\nEmotional beat to land on: [what the POV character feels at the end — do not state it directly in the scene]\nWord ceiling: [200–500 words]',
          },
        ],
        items: [
          '**인물 카드 — 활성 인물당 150 단어 목표.** 지배적 특성, 모순적 행동, 말하기 방식, 다른 활성 인물들과의 핵심 관계를 포함하십시오. 인물이 활성화되거나 원고에서 떠날 때 추가하거나 제거하십시오.',
          '**챕터 요약 — 완료된 챕터당 100–150 단어 목표.** 다음에 집중하십시오: 무슨 일이 있었는지, 인물 관계에서 무엇이 변했는지, 독자가 이제 알고 있는 정보, 챕터가 공간적·정서적으로 어디서 끝났는지. 모든 장면을 포함하지 말고 챕터의 순결과를 요약하십시오.',
          '**현재 장면 설정 — 구체적이고 간결하게.** 시점, 장면의 목적(이야기에서 달성해야 할 것), 도달해야 할 정서적 beat, 단어 상한을 명시하십시오. 이것이 모델이 취하는 행동이며, 인물 카드와 챕터 요약은 모델이 일관되게 수행하기 위해 사용하는 컨텍스트입니다.',
          '**세션 문서 크기 — 4,000 토큰(~3,000 단어) 미만 목표.** 이를 초과하는 세션 문서는 생성 자체에 사용되어야 할 컨텍스트 공간을 소비하기 시작합니다. 인물 카드와 요약을 적극적으로 압축하십시오.',
          '**매 세션 후 업데이트하십시오.** 장면을 생성한 후, 관련 챕터 요약에 1–2 문장 업데이트를 추가하고 변경된 인물 카드 항목을 업데이트하십시오. 세션 문서는 살아있는 파일이며, 업데이트 상태를 유지하는 것이 이 기법의 유지 비용입니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '세션 문서를 원고 옆에 일반 텍스트 파일로 저장하십시오. 각 집필 세션 후, 다음 세션의 시스템 메시지 또는 첫 번째 사용자 턴에 세션 문서를 복사하여 붙여넣으십시오. Ollama에서는 SYSTEM 블록에 세션 문서가 포함된 Modelfile을 생성하고 매 세션 전에 업데이트할 수 있습니다. SillyTavern에서는 각 소설 세션 시작 시 시스템 프롬프트 필드에 붙여넣으십시오.',
          },
        ],
      },
      novelWorkflow: {
        id: 'novel-workflow',
        title: '소설 집필 워크플로',
        image: '/images/local-llm-screenwriting-and-novel-drafting-workflow-steps-en.svg',
        imageCaption:
          '로컬 LLM 소설 집필 4단계: 개요, beat sheet, 장면 생성, 수정. 세션 문서를 중심으로 진행.',
        content:
          '**로컬 LLM을 사용한 소설 집필 워크플로는 네 단계로 구성됩니다: 개요 작성, 챕터별 beat sheet, 장면 생성, 수정 검토.** 각 단계는 서로 다른 프롬프트 구조를 사용합니다.',
        items: [
          '**1단계 — 개요 작성:** 챕터 수준의 개요를 생성합니다 (10–30 챕터, 챕터당 한 문장: 무슨 일이 일어나는지, 무엇이 변하는지). 프롬프트: "장르: [장르]. 주인공: [이름 + 핵심 상처]. 중심 갈등: [한 문장으로]. 20챕터 개요를 작성하라 — 챕터당 한 문장, 각 문장은 장면과 변화를 명시한다." 계속 진행하기 전에 개요를 검토하고 편집하십시오.',
          '**2단계 — Beat sheet:** 각 챕터 항목을 장면 수준의 beat sheet로 확장합니다 (챕터당 3–8 장면). 챕터별 프롬프트: "챕터 [N] 요약: [개요에서 한 문장 붙여넣기]. 장면 수준의 beat sheet로 확장하라: 4–6 장면, 각각 위치, 참여자, 장면의 단일 변화를 명시하는 한 문장으로 설명한다. 아직 산문은 없음."',
          '**3단계 — 장면 생성:** 세션 문서 + 현재 장면 beat를 사용하여 한 번에 한 장면을 생성합니다. 아래의 장면 생성 템플릿을 참조하십시오. 생성하고, 검토하고, 원고에 붙여넣고, 세션 문서를 업데이트하십시오. 반복하십시오.',
          '**4단계 — 수정 검토:** 챕터를 완료한 후, 특정 장면에 대해 구체적인 수정 프롬프트를 실행합니다. 수정 프롬프트 구조는 [소설 작가를 위한 로컬 LLM 프롬프트](/ko/power-local-llm/local-llm-prompts-for-fiction-writers)를 참조하십시오. 생성 호출당 두 장면 이상 수정하도록 모델에 요청하지 마십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '개요와 beat sheet를 원고와 별도 파일로 저장하십시오. 개요와 beat sheet는 뼈대이고 원고는 살입니다. 별도로 유지하면 다른 것을 덮어쓰지 않고 어느 부분이든 재생성할 수 있으며, 전체 개요를 포함하지 않고 현재 장면 설정에 관련 beat sheet 항목만 붙여넣을 수 있습니다.',
          },
        ],
      },
      screenwritingWorkflow: {
        id: 'screenwriting-workflow',
        title: '시나리오 워크플로',
        content:
          '**로컬 LLM을 사용한 시나리오 집필은 소설 집필과 동일한 세션 문서 및 beat sheet 기법을 사용하며, 두 가지가 추가됩니다: 시스템 프롬프트의 형식 지시, 그리고 장면 헤더(slug line)를 페이지 생성과 별도의 단계로 생성하는 것입니다.**',
        promptExamples: [
          {
            label: '시나리오 시스템 프롬프트',
            text: 'You are a screenplay formatting assistant. All prose you generate is formatted in standard US screenplay format:\n- Scene headers: INT./EXT. LOCATION — DAY/NIGHT\n- Action lines: present tense, concrete, maximum 3 lines per block\n- Character names: ALL CAPS above dialogue\n- Dialogue: centred, no dialogue tags\n- Parentheticals: sparingly, only for delivery or action mid-dialogue\n\nGenerate in Fountain-compatible plain text.',
          },
          {
            label: '장면 beat에서 스크립트 페이지로 변환하는 프롬프트',
            text: 'Beat: [paste the one-sentence scene beat from the beat sheet]\nPOV character: [Name]\nPage target: [1–3 pages]\n\nGenerate the script pages for this beat. Use standard screenplay format. Begin with the slug line. No narration — action lines and dialogue only.',
          },
        ],
        items: [
          '**형식은 사용자 턴이 아닌 시스템 프롬프트에 넣으십시오.** 시스템 메시지에 시나리오 형식 지시를 배치하면 지시를 반복하지 않고도 세션의 모든 생성이 형식을 따르게 됩니다.',
          '**Fountain 호환 출력:** Fountain은 시나리오용 일반 텍스트 마크업 형식으로, Highland와 Fade In 및 [Fountain 앱 목록](https://fountain.io/apps)의 다른 앱이 읽을 수 있습니다. "Fountain 호환 일반 텍스트"를 생성하도록 모델에 요청하면 해당 도구에서 열거나 다른 도구용으로 변환할 수 있는 출력이 생성됩니다(FAQ의 Final Draft 질문 참조).',
          '**Slug line 먼저:** 장면 콘텐츠를 생성하기 전에 slug line(INT./EXT. 위치 — 낮/밤)을 별도의 단일 행 프롬프트로 생성하십시오. 이렇게 하면 모델이 액션을 생성하기 시작하기 전에 물리적 위치가 고정됩니다.',
          '**대화 검토:** 액션 라인을 생성한 후, 별도의 대화 검토를 실행하십시오: "액션 라인이 설정되었습니다. 이 장면에서 [인물 A]와 [인물 B]의 대화를 작성하라. 인물 A는 [X]를 원한다. 인물 B는 [Y]를 원한다. 대화 태그 없음. 5–8 교환."',
          '**페이지 수 관리:** 페이지당 단어 수에는 정해진 수치가 없으며, "한 페이지는 1분"은 경험칙일 뿐입니다. 본인 시나리오의 페이지당 평균 단어 수를 세어 그에 맞춰 단어 상한을 정하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Beat sheet 우선 규율은 소설 집필보다 시나리오 집필에서 더 중요합니다. 시나리오 장면은 특정 구조적 기능(설정, 대결, 결정, 전환)과 특정 페이지 목표를 가집니다. Beat sheet 없이 페이지를 생성하면 분량이 늘어나고 구조적 목적을 잃는 장면이 만들어집니다. 페이지를 생성하기 전에 항상 장면이 달성해야 할 것을 파악하십시오.',
          },
        ],
      },
      sceneGeneration: {
        id: 'scene-generation',
        title: '장문 작업을 위한 장면 생성 템플릿',
        content:
          '**장문 장면 생성은 세션 문서를 접두사로, 단일 장면 프롬프트를 액션으로 필요로 합니다.** 아래 템플릿은 세션 문서가 이미 시스템 메시지 또는 첫 번째 사용자 턴에 있다고 가정합니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '장문 소설을 위한 신뢰할 수 있는 생성 패턴은 다음과 같습니다: 시스템 프롬프트의 세션 문서 → 사용자 턴의 단일 장면 프롬프트 → 검토 → 세션 문서 업데이트 → 반복, 세션당 한 장면.',
          },
          {
            type: 'plain-terms',
            text: '모델이 다음 장면을 일관되게 작성하려면 세 가지를 알아야 합니다: 이 인물들이 누구인지(인물 카드), 이미 무슨 일이 있었는지(챕터 요약), 이 장면이 무엇을 해야 하는지(장면 설정). 정확히 그 세 가지만 주고 그 이상은 주지 마십시오. 그런 다음 장면을 생성하고 원고에 붙여넣고 무엇이 변했는지 반영하여 세션 문서를 업데이트하십시오. 반복하십시오.',
          },
        ],
        promptExamples: [
          {
            label: '소설 장면 생성 프롬프트',
            text: '[SESSION DOCUMENT ALREADY IN SYSTEM PROMPT]\n\nCurrent scene:\nChapter: [N]\nBeat: [one sentence from the beat sheet]\nPOV: [character name]\nOpening: [one sentence — where we are, who is present]\nEmotional landing: [what the POV character feels at the end — show, don\'t state]\nWord ceiling: [300–500 words]\n\nWrite this scene. No summarising. Every sentence renders a moment.',
          },
          {
            label: '연속성 확인 프롬프트',
            text: 'Before writing the next scene, check for continuity. The session document says:\n- [Character A] is [trait/state]\n- The last scene ended with [brief description]\n\nThe next scene opens with [brief description]. Does this transition make sense? If not, what needs to change in the transition? One paragraph answer only.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '연속성 확인 프롬프트는 모든 장면이 아닌 챕터 전환 시 사용하십시오. 챕터 전환(위치, 시간 또는 시점 인물이 변경되는 곳)은 연속성 단절이 가장 자주 발생하고 확인이 가장 큰 가치를 제공하는 곳입니다.',
          },
        ],
      },
      tools: {
        id: 'tools',
        itemHeadings: true,
        title: '작가를 위한 도구 통합',
        content:
          '**Ollama는 로컬호스트에서 OpenAI 호환 API를 노출하며, 점점 더 많은 작가 지향 도구들이 이에 연결됩니다.** 아래 통합은 2026년 기준 가장 확립된 옵션을 나타냅니다.',
        columns: ['도구', '링크', '통합 방법', '적합한 경우'],
        rows: [
          { '도구': 'Obsidian', '링크': '[obsidian.md](https://obsidian.md)', '통합 방법': 'Copilot 플러그인 또는 Smart Connections → Ollama API. 어떤 Obsidian 플러그인이 Ollama와 가장 잘 작동하는지에 대한 상세 가이드는 [Obsidian + 로컬 LLM 플러그인](/ko/power-local-llm/local-llm-with-obsidian-2026)을 참조하십시오.', '적합한 경우': '이미 노트 + 원고에 Obsidian을 사용하는 작가; 컨텍스트 전환 없이 동일한 앱에서 통합 생성' },
          { '도구': 'Scrivener', '링크': '[literatureandlatte.com/scrivener](https://www.literatureandlatte.com/scrivener)', '통합 방법': 'Ollama API를 통한 외부 스크립트 → 문서에 붙여넣기', '적합한 경우': 'Scrivener에서 소설을 구조화하는 작가; AI 초안을 기존 프로젝트 구조에 붙여넣기' },
          { '도구': 'VS Code', '링크': '[code.visualstudio.com](https://code.visualstudio.com)', '통합 방법': 'Continue.dev 확장 → Ollama 백엔드', '적합한 경우': '코드 편집기에 익숙한 기술적 작가와 게임 내러티브 디자이너' },
          { '도구': 'SillyTavern', '링크': '[github.com/SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern)', '통합 방법': 'OpenAI 호환 API → Ollama', '적합한 경우': '롤플레이 유형 소설 및 인물 카드 기반 집필; 지속적인 인물 기억' },
          { '도구': '순수 터미널', '통합 방법': '`ollama run [model]` 또는 Ollama API에 curl', '적합한 경우': '스크립트 가능한 워크플로; 최소한의 인터페이스 오버헤드로 최대 제어를 원하는 작가' },
          { '도구': 'LM Studio', '링크': '[lmstudio.ai](https://lmstudio.ai)', '통합 방법': '내장 채팅 인터페이스 + 로컬 서버 API', '적합한 경우': 'Ollama를 별도로 설치하지 않고 GUI 모델 관리자를 원하는 작가' },
          { '도구': 'NovelCrafter', '링크': '[novelcrafter.com](https://www.novelcrafter.com)', '통합 방법': '내장 AI 통합; 도움말 페이지에 LM Studio, Ollama, OpenAI API 호환 연결이 나열되어 있음', '적합한 경우': '단일 소설 중심 앱 내에서 챕터 수준의 AI 지원을 원하는 작가' },
          { '도구': 'Plottr', '링크': '[plottr.com](https://plottr.com)', '통합 방법': '수동 워크플로: Plottr에서 소설 구조화, 외부적으로 Ollama에 장면/beat 붙여넣기 (Plottr는 AI 기능을 추가하지 않는다고 밝힘)', '적합한 경우': '플롯 집약적 장르 소설(미스터리, 스릴러, 판타지)로 구조적 플롯 매핑이 워크플로의 축인 경우' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '대부분의 작가에게 작동하는 가장 간단한 통합은 Ollama를 가리키는 Obsidian + Copilot 플러그인입니다. 세션 문서는 Obsidian 노트에 있고, 원고 챕터는 동일한 vault에 있으며, 컨텍스트 전환 없이 동일한 앱에서 직접 생성합니다. Copilot 플러그인은 선택한 텍스트 또는 현재 노트를 Ollama에 전달하고 인라인으로 완성을 반환합니다. 상세 가이드는 [Obsidian + 로컬 LLM 플러그인](/ko/power-local-llm/local-llm-with-obsidian-2026)을 참조하십시오.',
          },
        ],
      },
      models: {
        id: 'models',
        itemHeadings: true,
        title: '장문 작업을 위한 모델 추천',
        content:
          '**장문 집필은 단편 소설과 다른 모델 요구 사항을 가집니다.** 컨텍스트 준수, 긴 세션에 걸친 일관된 지시 따르기, 여러 생성 호출에 걸쳐 목소리를 유지하는 능력이 결정적 요소입니다. 아래 행은 각 모델 카드에서 가져온 출발점이며, PromptQuorum은 이 모델들을 소설용으로 평가하지 않았습니다. 공개된 창작 글쓰기 리더보드도 모델 순위가 서로 다르므로, 본인의 장면으로 두 후보를 시험하십시오. Command A+(총 파라미터 2,180억 개, 활성 250억 개, Apache 2.0)와 Mistral Large 3(총 파라미터 6,750억 개, 256K 컨텍스트, Apache 2.0) 같은 서버급 오픈 모델은 소비자용 하드웨어의 범위를 벗어납니다. 모든 사용 사례에 걸친 더 넓은 모델 환경에 대해서는 [2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026)을 참조하십시오.',
        columns: ['작업', '추천 모델', '이유'],
        rows: [
          { '작업': '소설 집필 (주요)', '추천 모델': 'Qwen3.6 27B 또는 Gemma 4 31B', '이유': '256K 이상의 컨텍스트를 내세우는 Apache 라이선스의 27B–31B dense 모델; 4비트에서 24 GB GPU 또는 32 GB 이상 통합 메모리에 맞는 크기급(추정)' },
          { '작업': '시나리오 집필', '추천 모델': 'Qwen3.6 27B 또는 Llama 3.3 70B', '이유': '형식 준수는 주로 시스템 프롬프트에 달려 있음; Fountain 장면 하나를 두 모델로 시험. Llama 3.3 70B는 dense 모델로 128K 컨텍스트를 내세우며 4비트에서 약 40 GB 필요(추정)' },
          { '작업': 'Beat sheet / 개요 생성', '추천 모델': 'Qwen3.6 35B-A3B', '이유': '토큰당 350억 파라미터 중 30억 개가 활성인 Mixture-of-Experts(Apache-2.0)라 토큰당 생성이 빠름; 개요 품질은 PromptQuorum이 평가하지 않음' },
          { '작업': '대화 검토', '추천 모델': '샘플이 잘 맞는 모델', '이유': '인물의 말하기 방식에 맞는 보정 대사를 내놓는 모델로 대화를 별도 패스로 실행; 대화용 모델의 검증된 순위는 없음' },
          { '작업': '수정 (구조적)', '추천 모델': '초안에 사용한 모델', '이유': '호출당 구조적 제약 하나를 명시하는 수정 프롬프트는 지시를 따르는 어떤 모델에서도 작동; 호출당 한 장면' },
          { '작업': '성숙한 / 어두운 소설', '추천 모델': 'Hermes 4 70B', '이유': 'Llama-3.1-70B 기반; Nous Research는 대체로 중립적인 정렬과 낮은 거부율이라고 설명; Llama 3 라이선스; 하이브리드 추론 모드' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '흔한 실수',
        items: [
          '**전체 원고를 컨텍스트에 붙여넣기.** 모델이 128K–262K 윈도를 내세우더라도 긴 입력은 덜 안정적으로 활용되므로 약 32K 토큰으로 계획하십시오. 세션 문서 기법 — 압축된 인물 카드와 챕터 요약 — 을 사용하십시오.',
          '**모델에게 열린 문서를 "계속 쓰도록" 요청하기.** "소설을 계속 써라"는 이탈을 만들어 냅니다. "다음 장면을 써라: [특정 설정, 시점, 단어 상한]"은 평가하고 붙여넣을 수 있는 일관되고 경계가 있는 출력을 만들어 냅니다.',
          '**시나리오에 beat sheet 없이 진행하기.** Beat 없이 시나리오 페이지를 생성하면 분량이 늘어나고 구조적 기능을 잃는 페이지가 만들어집니다. 항상 beat sheet를 먼저 생성하십시오.',
          '**세션 문서 업데이트 무시하기.** 장면을 생성한 후 챕터 요약을 업데이트하지 않으면 세션 문서가 구식이 됩니다. 구식 세션 문서는 몇 세션 후 불일치를 만들어 냅니다.',
          '**세션당 두 장면 이상 생성하기.** 단일 컨텍스트 윈도 내에서 여러 장면을 생성하면 첫 번째 장면은 잘 생성되지만 이후 각 장면은 일관성이 낮아집니다. 세션당 한 장면; 재시작하고 다시 주입하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Qwen3.6-27B 모델 카드](https://huggingface.co/Qwen/Qwen3.6-27B) 및 [Qwen3.6-35B-A3B 모델 카드](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) — 파라미터, 네이티브 262,144 토큰 컨텍스트, YaRN 확장, Apache-2.0, 2026년 10월 26일 확인',
          '[Gemma 4 31B 모델 카드](https://huggingface.co/google/gemma-4-31B-it) — dense 31B, 256K 컨텍스트, Apache 2.0, 2026년 10월 26일 확인',
          '[Llama 3.3 70B Instruct 모델 카드](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) — 70B, 128K 컨텍스트, Llama 3.3 Community License, 2024년 12월 6일 공개',
          '[Hermes 4 70B 모델 카드](https://huggingface.co/NousResearch/Hermes-4-70B) — Llama-3.1-70B 기반, 하이브리드 추론, "broadly neutral alignment"',
          '[Kimi-K2.6 모델 카드](https://huggingface.co/moonshotai/Kimi-K2.6) — 총 1조 파라미터, 활성 320억 개, 256K 컨텍스트, 네이티브 int4',
          '[Command A+ 문서](https://docs.cohere.com/docs/command-a-plus) 및 [Mistral Large 3 모델 카드](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512) — 서버급 모델의 파라미터 수와 라이선스',
          '[Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172) — Liu 외, 2023',
          '[Fountain.io](https://fountain.io) — Fountain 시나리오 형식 사양 및 [앱 목록](https://fountain.io/apps)',
          '[Final Draft 도움말 센터](https://kb.finaldraft.com/hc/en-us/articles/15575076862228-Can-Final-Draft-import-a-file-written-in-a-Fountain-based-screenwriting-program) — Final Draft가 .fountain 파일을 직접 가져올 수 없다고 명시',
          '[Amazon KDP의 AI 콘텐츠 규정(Publishers Weekly)](https://www.publishersweekly.com/pw/by-topic/digital/content-and-e-books/article/93122-amazon-issues-new-ai-guidelines-for-its-kdp-platform.html) 및 [Clarkesworld 투고 안내](https://clarkesworldmagazine.com/submissions/) — 출판사·플랫폼의 AI 정책; 투고 전에 최신 문구를 확인',
          '[Scrivener 릴리스 노트](https://www.literatureandlatte.com/scrivener/release-notes) — 3.4.0~3.5.2(2025년 12월): 플러그인·API 항목 없음; "Scrivener itself contains no AI"; 2026년 10월 26일 확인',
          '[Plottr in 2026](https://plottr.com/plottr-in-2026/) 및 [NovelCrafter AI 연결 도움말](https://www.novelcrafter.com/help/categories/ai-connections) — Plottr는 AI 기능을 개발하지 않는다고 밝힘; NovelCrafter는 LM Studio, Ollama, OpenAI API 호환 연결을 나열',
          'Ollama API 문서 — [Ollama](https://ollama.com/docs)',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '로컬 LLM이 완전한 소설을 쓸 수 있습니까?',
            a: '로컬 LLM은 한 편의 소설 분량의 산문을 생성할 수 있지만, 구조적·편집적 판단은 작가에게서 나와야 합니다. 모델은 구체적인 설정이 주어지면 장면을 생성하지만, 스스로 계획하거나 평가하거나 주제적 결정을 내리지는 않습니다. 이미 쓰는 방법을 아는 장면을 위한 빠른 초안 생성기로 보는 것이 적절합니다. 백지 앞에서의 시간을 아껴 주지만, 중요한 결정은 모두 작가가 내립니다. 투고 전에 출판사와 플랫폼의 AI 정책을 확인하십시오(아래 출판사 관련 질문 참조).',
          },
          {
            q: '신뢰할 수 있게 사용할 수 있는 최대 컨텍스트 윈도는 얼마입니까?',
            a: '모델은 128K에서 262,144 토큰을 내세우지만, PromptQuorum은 긴 컨텍스트 연구에서 모델이 긴 입력의 중간을 덜 안정적으로 활용한다고 보고되어 있으므로 1회 생성당 약 32K 토큰(~24,000 단어)으로 계획할 것을 권장합니다. 이는 보수적인 계획 규칙이며 모든 모델에 대해 측정된 한계가 아니므로, 사용하는 모델을 직접 시험하십시오. 세션 문서 기법은 작업 컨텍스트를 4,000–6,000 토큰 미만으로 유지하므로 모든 생성 호출이 이 범위 안에 충분히 들어갑니다.',
          },
          {
            q: '소설 중간에 모델이 인물의 목소리를 바꾸는 것을 어떻게 방지합니까?',
            a: '목소리 이탈에는 두 가지 원인이 있습니다: 구식 세션 문서(최근 인물 발전이 없음)와 컨텍스트 희석(인물 카드가 컨텍스트에서 활성 생성과 너무 멀리 있음). 해결책: 인물 카드를 시스템 메시지에 유지하고(긴 사용자 턴 전문에 묻히지 않도록), 인물이 중요한 아크 순간을 가진 후에는 카드를 업데이트하고, 각 세션 컨텍스트의 상단 섹션에 맞도록 카드를 충분히 간결하게 유지하십시오.',
          },
          {
            q: '로컬 LLM과 함께 Scrivener를 사용할 수 있습니까?',
            a: '기본 지원은 없습니다 — Scrivener 3에는 문서화된 플러그인 시스템이 없으며, 3.5.2(2025년 12월)까지의 공식 릴리스 노트에도 AI 통합에 대한 언급이 없습니다. 3.4.0 노트에는 "Scrivener itself contains no AI"라고 적혀 있고, macOS 시스템 기능인 Apple의 Writing Tools 지원이 추가되었습니다. 일반적인 워크플로: Ollama에서 생성(터미널 또는 보조 스크립트 사용), 출력을 복사해 해당 Scrivener 문서에 붙여넣습니다. 일부 작가는 Obsidian을 AI 초안 작성 레이어로 사용하고 완성된 챕터를 최종 구조화를 위해 Scrivener로 가져옵니다. Ollama API를 호출해 출력을 클립보드에 복사하는 스크립트가 기본 통합에 가장 가깝습니다.',
          },
          {
            q: '시나리오 집필에는 Ollama와 클라우드 AI 중 무엇이 더 낫습니까?',
            a: '성숙한 콘텐츠(폭력, 어두운 심리, 도덕적으로 복잡한 인물)를 생성해야 하는 시나리오 작가에게 로컬 모델은 모델과 거부 동작을 직접 통제할 수 있다는 이점이 있습니다 — 일부 호스팅 모델은 드라마 시나리오에 나오는 내용을 거부하거나 완화하며, 호스팅 서비스의 정책은 시간이 지나며 바뀝니다. Hermes 4 70B 같은 거부가 적은 로컬 모델은 내장된 거부가 적지만, 생성하고 공개하는 콘텐츠에 대한 책임은 여전히 본인에게 있습니다. 형식 일관성은 주로 시스템 프롬프트의 지시에 달려 있으며 둘 다 작동합니다. 선택은 주로 콘텐츠 통제, 프라이버시, 비용의 문제입니다. PromptQuorum은 시나리오 작업에서 호스팅 모델과 로컬 모델의 출력 품질을 비교하지 않았습니다.',
          },
          {
            q: '특정 인물처럼 들리는 대화를 어떻게 생성합니까?',
            a: '세 단계 접근법: (1) 세션 문서에 인물의 말하기 방식을 추가하십시오 ("격식체, 축약형 피하기, \'제 생각에는...\'과 같은 수식어로 문장 시작"). (2) 세션 시작 시 보정 단계로서 중립적인 컨텍스트에서 이 인물의 샘플 대화 3–5 줄을 생성하십시오. (3) 대화 프롬프트에서 해당 샘플 줄을 예시로 사용하십시오: "이 예시들과 동일한 어조로 대화를 작성하라: [샘플 붙여넣기]." 보정 단계가 인물 목소리 일관성을 위한 가장 효과적인 기법입니다.',
          },
          {
            q: '소설 집필에 로컬 LLM을 사용하려면 GPU가 필요합니까?',
            a: 'GPU는 생성 속도를 크게 높여 주지만 필수는 아닙니다. Apple Silicon에서는 통합 메모리 덕분에 16 GB MacBook Pro도 더 작은 모델(4비트에서 대략 8B–14B급, 추정)을 실행할 수 있습니다 — 24 GB GPU 장비보다 느리지만, 생성 사이에 출력을 읽고 평가하는 집필 워크플로에서는 허용 가능한 수준입니다. 24 GB NVIDIA GPU(RTX 4090, RTX 3090)는 4비트에서 27B–32B급 모델을 담을 수 있습니다(추정). 70B급 모델은 4비트에서 약 40 GB 이상이 필요하므로 GPU 두 장, 48 GB 카드, 64 GB 통합 메모리 또는 속도가 느린 CPU 오프로딩이 필요합니다.',
          },
          {
            q: '로컬 LLM을 Final Draft 또는 다른 전문 시나리오 소프트웨어와 함께 사용할 수 있습니까?',
            a: '직접은 안 됩니다. Final Draft 도움말 센터에 따르면 Final Draft는 .fountain 파일을 가져올 수 없습니다. 권장 방법은 텍스트를 일반 .txt로 저장해 가져올 때 Script(Text가 아님)를 선택하거나, FDX를 내보낼 수 있는 앱을 통해 FDX로 가져오는 것입니다. Highland는 Fountain, FDX, PDF 사이를 변환하고, Fade In은 Fountain을 가져오고 내보냅니다(Fountain 앱 목록 기준). 워크플로: Ollama에서 Fountain 형식 텍스트를 생성하고, Highland 또는 Fade In에서 열어 Final Draft용으로 FDX를 내보냅니다.',
          },
          {
            q: '소설 집필을 위해 로컬에서 Kimi-K2.6을 사용할 수 있습니까?',
            a: 'Kimi-K2.6은 256K 토큰의 컨텍스트 윈도를 내세워 Qwen3.6 27B, Gemma 4 31B와 같은 급이지만, 총 파라미터 약 1조 개(활성 320억 개)의 Mixture-of-Experts 모델이며 네이티브 int4 가중치를 사용합니다. 가중치만 약 500 GB가 되므로(PromptQuorum 추정) 멀티 GPU 서버나 매우 큰 통합 메모리 장비가 필요하며 소비자용 하드웨어에서는 비실용적입니다. 완전한 로컬 워크플로에서는 27B–70B dense 모델과 세션 문서 기법만으로 1조 파라미터 모델 없이도 소설 분량의 작업을 처리할 수 있습니다.',
          },
          {
            q: '편집자들은 AI 지원 원고에 대해 어떻게 생각합니까?',
            a: '정책은 출판사와 플랫폼마다 다르며 2026년에도 계속 바뀌고 있으므로 투고 전에 해당 정책을 확인하십시오. Amazon KDP는 텍스트, 이미지, 번역이 AI로 생성된 경우 이를 알리도록 요구하며, AI 도구로 만든 콘텐츠는 크게 편집하더라도 AI 생성으로 취급합니다. 본인이 직접 쓴 글을 AI가 편집이나 다듬기만 도운 경우는 "AI 지원"으로 공개할 필요가 없습니다(2023년 9월 Publishers Weekly가 보도한 Amazon 규정 기준). 일부 잡지는 AI가 관여한 작품을 아예 받지 않습니다 — Clarkesworld의 투고 안내는 AI가 쓰거나 공동 집필하거나 지원한 이야기를 검토하지 않는다고 밝힙니다. 로컬 LLM이 생성한 장면 텍스트는 KDP의 "AI 생성" 정의 같은 기준에 해당하므로, 요구되는 곳에서는 공개하십시오. 이는 일반적인 정보이며 법률 자문이 아닙니다.',
          },
          {
            q: '100만 토큰 컨텍스트에는 어떤 하드웨어가 필요합니까?',
            a: 'Qwen3.6 27B와 Qwen3.6 35B-A3B는 네이티브 262,144 토큰 컨텍스트를 내세우며, 모델 카드에 따르면 YaRN 스케일링으로 약 1,010,000 토큰까지 확장할 수 있습니다. 긴 컨텍스트는 가중치 외에 KV 캐시용 메모리가 필요하므로 100만 토큰 실행에는 일반적인 소비자 구성보다 훨씬 많은 메모리가 필요합니다. PromptQuorum은 필요량을 측정하지 않았습니다. 이 글의 세션 문서 기법은 바로 이 간극을 위해 설계되었습니다 — 100만 토큰 윈도에 의존하지 않고도 일관된 장문 출력을 얻기 위해서입니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[소설 작가를 위한 로컬 LLM 프롬프트: 템플릿과 기법](/ko/power-local-llm/local-llm-prompts-for-fiction-writers) — 세션 문서 워크플로 내에서 작동하는 장면 작성, 대화, 인물, 세계관 구축, 스타일 전환 템플릿.',
          '[2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026) — 창작 글쓰기, 코딩, 추론을 포함한 모든 사용 사례에 걸친 전체 모델 비교.',
          '[Obsidian + 로컬 LLM 플러그인](/ko/power-local-llm/local-llm-with-obsidian-2026) — 집필 워크플로를 위해 Ollama와 가장 잘 작동하는 Obsidian 플러그인에 대한 더 상세한 가이드.',
          '[2026년 최고의 창작 글쓰기용 로컬 LLM](/ko/power-local-llm/best-local-llm-creative-writing) — 샘플링 설정 및 하드웨어 요구 사항을 포함한 서사 생성 모델 비교.',
          '[창작 글쓰기를 위한 무검열 로컬 LLM: 윤리와 설정](/ko/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 성숙한 소설을 위해 무검열 모델을 사용하는 경우와 동일한 Ollama 워크플로에서 설정하는 방법.',
          '[SillyTavern vs Agnai vs RisuAI: 최고의 로컬 롤플레이 프론트엔드](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 인물 카드 기반 집필과 협업 소설을 위한 프론트엔드 옵션.',
          '[Continue.dev vs Cline vs Aider: 최고의 로컬 코드 보조](/ko/power-local-llm/continue-dev-vs-cline-vs-aider-local) — 코드 보조에 사용되는 동일한 Continue.dev IDE 확장을 VS Code에서 인라인 글쓰기 보조를 위해 Ollama에 연결할 수 있습니다.',
          '[사고의 사슬 프롬프팅 설명](/ko/prompt-engineering/chain-of-thought-prompting) — 플롯 계획, 서사 beat 분석, 이야기 문제 해결에 적용 가능한 구조화된 추론 프롬프트.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 LLM으로 소설과 시나리오 집필하기: 10만 단어 이상을 위한 워크플로 가이드',
      description: '로컬 LLM을 사용한 소설과 시나리오 집필을 위한 완전한 워크플로: 모델 선택, 컨텍스트 관리, 챕터 스캐폴딩, 장면 생성, 작가를 위한 도구 통합.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-llm-screenwriting-and-novel-drafting',
      inLanguage: 'ko',
      datePublished: '2026-05-24',
      dateModified: '2026-10-26',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: '[www.promptquorum.com/ko](https://www.promptquorum.com/ko)' },
        { '@type': 'ListItem', position: 2, name: '로컬 LLM 파워 사용자', item: '[www.promptquorum.com/ko/power-local-llm](https://www.promptquorum.com/ko/power-local-llm)' },
        { '@type': 'ListItem', position: 3, name: '로컬 LLM으로 소설과 시나리오 집필하기', item: '[www.promptquorum.com/ko/power-local-llm/local-llm-screenwriting-and-novel-drafting](https://www.promptquorum.com/ko/power-local-llm/local-llm-screenwriting-and-novel-drafting)' },
      ],
    },
  },
}
