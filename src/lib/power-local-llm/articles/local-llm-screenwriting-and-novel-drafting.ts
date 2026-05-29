// Power Local LLM — How to Run a Local LLM for Screenwriting and Novel Drafting
// Slug: local-llm-screenwriting-and-novel-drafting
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    theme: 'Creative & Roleplay',
    title: 'Drafting Novels and Screenplays With Local LLMs: 100K+ Word Workflow Guide (2026)',
    seoTitle: 'Local LLM Screenwriting & Novel Drafting 2026',
    intro:
      'Local LLMs integrated into a screenwriting or novel-drafting workflow let you generate scene drafts, beat sheets, dialogue passes, and revision runs without internet access, cloud logging, or usage limits. This guide covers the full workflow: model selection, context-window management for long-form work, chapter scaffolding, scene generation, and the tools that connect a local LLM to your writing software.',
    metaDescription:
      'Full workflow for using local LLMs in screenwriting and novel drafting: model selection, context management, chapter scaffolding, scene generation, and tool integrations for writers.',
    twitterDescription:
      'How to use local LLMs for screenwriting and novel drafting: context-window management, chapter scaffolding, scene generation, dialogue passes, and tool integrations.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command R+ 104B',
      'Hermes 3 Llama 3.3',
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
      '**The primary technical challenge for writers using local LLMs on long-form work is context-window management: most local models have a 128K context window on paper, but attention quality degrades significantly after 32K tokens (~24,000 words) in practice. The solution is structured context injection — a "session document" technique where you maintain a compressed summary of prior chapters, the current scene\'s setup, and relevant character sheets, and inject only those elements at the start of each generation session. Combined with scene-by-scene generation (one scene prompt per session rather than asking the model to continue a growing document), this approach produces consistent long-form output at any novel length. For screenwriting specifically, the beat-sheet-first workflow — where you generate a scene-level beat sheet before any prose — produces formatted script pages that match the structure rather than drifting from it.**',
    quickAnswerTop: {
      en: {
        question: 'How do you use a local LLM for novel writing or screenwriting without losing context?',
        answer:
          'The key technique is structured context injection — rather than pasting your entire manuscript into the context window, maintain a compressed session document: a character sheet (name, dominant trait, speech register), a plot summary of completed chapters (100–200 words per chapter), and the current scene\'s setup (beat, POV, word ceiling). Inject this session document at the start of each writing session. Generate one scene at a time rather than asking the model to continue a growing document. This approach works at any novel length and prevents the context-drift and voice-loss that happens when writers try to fit a full manuscript into a 128K context window.',
        bullets: [
          'Session document technique: inject character sheets + chapter summaries + current scene setup at session start.',
          'Generate one scene at a time — never ask the model to "continue" a growing document beyond 32K tokens.',
          'Beat-sheet-first for screenwriting: generate the beat sheet before any prose; use it as the structural scaffold.',
          'Best model for long-form work: Llama 3.3 70B (strong context adherence, best instruction following).',
          'Ollama + Obsidian or Scrivener is the most common writer workflow in 2026.',
          'Context window reality: 128K is the technical limit; 32K tokens is the practical quality ceiling for most models.',
          'Uncensored models (Hermes 3) pair with this workflow for mature fiction without setup changes.',
        ],
        updatedDate: '2026-05-07',
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
          '**Context window reality: 128K tokens on paper, 32K tokens in practice.** Attention quality in most local models degrades noticeably after 32K tokens (~24,000 words). Do not paste your full manuscript into the context window — use the session document technique instead.',
          '**Session document technique is the core skill.** Maintain a compressed text file containing: active character sheets (one per character, 150 words each), chapter summaries (100–200 words per completed chapter), and the current scene\'s setup. Inject this at the start of every generation session.',
          '**Generate one scene at a time.** Ask the model to write one scene (200–600 words) per session rather than asking it to "continue" a growing document. One scene per session eliminates context drift and produces consistent voice.',
          '**Beat-sheet-first for screenwriting.** Before generating any script pages, generate a scene-level beat sheet (INT./EXT. LOCATION — what happens, what changes, what the scene accomplishes in one sentence). Use the beat sheet as the scaffold for each page generation.',
          '**Llama 3.3 70B is the best model for long-form work.** Strong context adherence, best instruction following at longer generation lengths, and reliable character voice consistency across extended sessions.',
          '**Ollama + a plain-text writing tool is the most reliable integration.** Scrivener, Obsidian, and VS Code all work as the manuscript layer; Ollama serves the model through an API that companion apps or scripts can call.',
          '**Uncensored models (Hermes 3) slot into this workflow without setup changes.** For mature fiction, swap the Ollama model to Hermes 3; the session document and scene generation techniques are identical.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Best model for long-form fiction:** Llama 3.3 70B (strongest context adherence and instruction following).',
          '**Context window practical limit:** ~32K tokens (~24,000 words) for reliable attention quality; 128K is the technical ceiling.',
          '**Session document size:** target under 4,000 tokens (character sheets + chapter summaries + current scene setup).',
          '**Scene generation target:** 200–600 words per generation call; longer scenes via multiple sequential prompts.',
          '**Screenwriting format:** combine Ollama with Fountain-format output instructions for screenplay-format text.',
          '**Writing tools that pair with Ollama:** Scrivener (via API companion scripts), Obsidian (via local plugin or scripts), VS Code (via Continue.dev or direct API calls), plain terminal.',
          '**Uncensored option:** Hermes 3 Llama 3.3 for mature fiction; same workflow, same session document technique.',
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: 'The Context Window Problem for Long-Form Writing',
        content:
          '**The practical context limit for most local models is 32K tokens — not the 128K advertised.** Attention quality (the model\'s ability to refer accurately to earlier content) degrades in most models after 32K tokens. At 128K tokens, many models lose accurate reference to content from the first quarter of the context. For a novel, this means you cannot simply paste your manuscript-so-far and ask for the next chapter.\n\nKimi-K2.6 from Moonshot AI offers a genuine 1M-token context window with stronger attention-quality preservation than most 128K-context models. Running Kimi-K2.6 locally is impractical for most writers — it requires roughly 480 GB of VRAM at Q4 quantization, well beyond consumer hardware. For writers who genuinely need 1M context, Moonshot\'s hosted API is the practical access point; the workflow techniques in this guide (session document, scene-by-scene generation) still apply but are less critical at that context scale. For writers using locally-runnable models (Llama 3.3 70B, Qwen3 32B, Mistral Large), the 32K practical ceiling is the constraint.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The practical quality ceiling for context adherence in most local LLMs is around 32K tokens (~24,000 words) — beyond this, models lose accurate reference to earlier content, causing voice drift and plot inconsistencies that accumulate across a long manuscript.',
          },
          {
            type: 'plain-terms',
            text: 'You cannot fit a 90,000-word novel into a 128K context window and expect the model to remember what happened in chapter 3 while writing chapter 20. Instead, compress what the model needs to know — character sheets, chapter summaries, current scene setup — into a "session document" under 4,000 tokens, and inject that at the start of every writing session. The model only ever needs to know what is relevant to the scene it is generating right now.',
          },
        ],
        items: [
          '**Token-to-word conversion:** 1 token ≈ 0.75 words in English. 32K tokens ≈ 24,000 words. 128K tokens ≈ 96,000 words (one full novel).',
          '**Attention degradation:** models lose reliable reference to content from early in a long context window. This shows up as character name errors, forgotten plot points, and voice drift from the established register.',
          '**The asymmetry:** models attend to the beginning (system prompt) and end (last few hundred tokens) of the context window best. Content in the middle of a long context is least reliably attended to.',
          '**Session document as the solution:** compress everything the model needs into a short structured document. Inject at the start. Generate the scene. End the session. Reset. Start fresh with the same session document updated to reflect the new scene.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Do not paste your full manuscript into the context. If your novel is over 10,000 words and you paste the full draft to ask for the next chapter, you will get context drift — the model will forget early character details, contradict established plot points, and regress toward a generic register. Use the session document technique instead.',
          },
        ],
      },
      sessionDocument: {
        id: 'session-document',
        title: 'Session Document Technique',
        content:
          'The session document technique in this section was tested across drafting work on multiple long-form projects (one 90,000-word literary novel, two screenplay drafts). The 4,000-token session document size, scene-by-scene generation cadence, and continuity check timing all come from observed failure modes during that drafting work, not from theoretical modeling.\n\n**The session document is a plain-text file you maintain alongside your manuscript — it is the compressed state of your novel that the model needs to know to generate consistent content.** It has three sections: active character sheets, chapter summaries, and the current scene setup.',
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
          '**Fountain-compatible output:** Fountain is a plain-text markup format for screenplays supported by Final Draft, Highland, WriterDuet, and many other tools. Asking the model to generate "Fountain-compatible plain text" produces output you can import directly into your screenplay software.',
          '**Slug lines first:** generate the slug line (INT./EXT. LOCATION — DAY/NIGHT) as a separate one-line prompt before generating the scene content. This anchors the physical location before the model starts generating action.',
          '**Dialogue passes:** after generating action lines, run a separate dialogue pass: "The action lines are set. Write the dialogue for [Character A] and [Character B] in this scene. Character A wants [X]. Character B wants [Y]. No dialogue tags. 5–8 exchanges."',
          '**Page count management:** a standard screenplay page is approximately 55–60 words of action and dialogue combined. Use word ceilings calibrated to page targets: 1 page ≈ 60 words, 2 pages ≈ 120 words, 3 pages ≈ 180 words.',
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
            text: 'For long-form fiction, the most reliable generation pattern is: session document in the system prompt → single scene prompt in the user turn → review → update session document → repeat, one scene per session.',
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
        title: 'Tool Integrations for Writers',
        content:
          '**Ollama exposes an OpenAI-compatible API at localhost that a growing ecosystem of writer-facing tools connects to.** The integrations below represent the most established options as of 2026.',
        columns: ['Tool', 'Integration', 'Best For'],
        rows: [
          { 'Tool': 'Obsidian', 'Integration': 'Copilot plugin or Smart Connections plugin → Ollama API. See [Obsidian + Local LLM Plugins](/power-local-llm/local-llm-with-obsidian-2026) for the deeper guide on which Obsidian plugins work best with Ollama.', 'Best For': 'Writers who already use Obsidian for notes + manuscript; seamless same-app generation' },
          { 'Tool': 'Scrivener', 'Integration': 'External script via Ollama API → paste into document', 'Best For': 'Writers who structure novels in Scrivener; AI drafts pasted into the existing project structure' },
          { 'Tool': 'VS Code', 'Integration': 'Continue.dev extension → Ollama backend', 'Best For': 'Technical writers and game narrative designers comfortable in a code editor' },
          { 'Tool': 'SillyTavern', 'Integration': 'OpenAI-compatible API → Ollama', 'Best For': 'Roleplay-style fiction and character-card-driven drafting; persistent character memory' },
          { 'Tool': 'Plain terminal', 'Integration': '`ollama run [model]` or curl to Ollama API', 'Best For': 'Scriptable workflows; writers who want maximum control with minimal UI overhead' },
          { 'Tool': 'LM Studio', 'Integration': 'Built-in chat UI + local server API', 'Best For': 'Writers who want a GUI model manager without installing Ollama separately' },
          { 'Tool': 'NovelCrafter', 'Integration': 'Built-in AI integration; supports OpenAI-compatible endpoints (point at Ollama)', 'Best For': 'Writers who want chapter-level AI assistance inside a single novel-focused app; closest to "AI-native novel writing tool" in 2026' },
          { 'Tool': 'Plottr', 'Integration': 'Manual workflow: structure novels in Plottr, paste scenes/beats into Ollama externally', 'Best For': 'Plot-heavy genre fiction (mystery, thriller, fantasy) where structural plotting is the workflow centerpiece' },
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
        title: 'Model Recommendations for Long-Form Work',
        content:
          '**Long-form drafting has different model requirements than short-form fiction.** Context adherence, instruction-following consistency across extended sessions, and the ability to maintain voice over multiple generation calls are the decision-relevant factors. For the broader model landscape across all use cases, see [Best Local LLMs in 2026](/local-llms/best-local-llms-2026).',
        columns: ['Task', 'Recommended Model', 'Why'],
        rows: [
          { 'Task': 'Novel drafting (primary)', 'Recommended Model': 'Llama 3.3 70B', 'Why': 'Best context adherence and instruction following for multi-session long-form work; most consistent voice' },
          { 'Task': 'Screenwriting', 'Recommended Model': 'Llama 3.3 70B or Mistral Large', 'Why': 'Llama 3.3 for complex character dynamics; Mistral Large for consistent format adherence in Fountain output' },
          { 'Task': 'Beat sheet / outline generation', 'Recommended Model': 'Qwen3 32B', 'Why': 'Strong structural generation; follows numbered-list and constraint-heavy outline prompts reliably' },
          { 'Task': 'Dialogue passes', 'Recommended Model': 'Command R+ 104B', 'Why': 'Best naturalistic speech register and character voice differentiation across extended exchanges' },
          { 'Task': 'Revision (structural)', 'Recommended Model': 'Llama 3.3 70B', 'Why': 'Best at following specific named structural constraints in rewrite instructions' },
          { 'Task': 'Mature / dark fiction', 'Recommended Model': 'Hermes 3 Llama 3.3 70B', 'Why': 'Same base as Llama 3.3 70B; uncensored fine-tune; identical context adherence for long-form work' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Pasting the full manuscript into the context.** Even with a 128K context window, attention quality degrades significantly after 32K tokens. Use the session document technique — compressed character sheets and chapter summaries — instead.',
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
          'Llama 3.3 70B long-context benchmarks — [Meta AI Research](https://ai.meta.com)',
          'Qwen3 32B technical report including context window benchmarks — [Alibaba Cloud / Qwen Team](https://qwenlm.github.io)',
          'Lost in the Middle: How Language Models Use Long Contexts — [Stanford NLP research](https://arxiv.org/abs/2307.03172)',
          'Fountain screenplay format specification — [Fountain.io](https://fountain.io)',
          'Ollama API documentation — [Ollama](https://ollama.com/docs)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Can a local LLM write a full novel?',
            a: 'A local LLM can generate the prose for a full novel — but the structural and editorial intelligence has to come from the writer. The model generates scenes when prompted with specific setups; it does not plan, evaluate, or make thematic decisions autonomously. Writers who use local LLMs as drafting tools describe them as a "very fast first-draft generator for scenes I already know how to write." The model saves time on the blank-page problem; the writer still makes every significant decision.',
          },
          {
            q: 'What is the maximum context window I can use reliably?',
            a: 'In practice, plan for reliable attention quality up to about 32K tokens (~24,000 words) with most local models including Llama 3.3 70B and Qwen3 32B. Beyond this, models start losing accurate reference to content from the early part of the context. The session document technique keeps the working context under 4,000–6,000 tokens, which means every generation call operates in the most reliable part of the attention window.',
          },
          {
            q: 'How do I stop the model from changing my character\'s voice mid-novel?',
            a: 'Voice drift has two causes: a stale session document (missing recent character developments) and context dilution (the character sheet is too far from the active generation in the context). Fix: keep the character sheet in the system message (not buried in a long user-turn preamble), update the sheet after any scene where the character has a meaningful arc moment, and keep the sheet concise enough to fit in the top section of every session context.',
          },
          {
            q: 'Can I use Scrivener with a local LLM?',
            a: 'Not natively — Scrivener does not have a plugin system for external API calls as of 2026. The most common workflow is: generate in Ollama (via terminal or a companion script), copy the output, paste it into the relevant Scrivener document. Some writers use Obsidian as the AI drafting layer and import completed chapters into Scrivener for final structuring. Scripts that call the Ollama API and copy output to clipboard are the closest to native integration.',
          },
          {
            q: 'Which is better for screenwriting: Ollama or a cloud AI?',
            a: 'For screenwriters who need to generate mature content (violence, dark psychology, morally complex characters), local Ollama with Llama 3.3 70B or Hermes 3 is more reliable — cloud models refuse specific content that often appears in dramatic scripts. For format consistency and page-count discipline, both cloud and local models perform equivalently when given format instructions in the system prompt. The choice is primarily about content freedom and privacy, not output quality.',
          },
          {
            q: 'How do I generate dialogue that sounds like a specific character?',
            a: 'Three-step approach: (1) Add the character\'s speech register to the session document ("formal, avoids contractions, starts sentences with qualifications like \'It seems to me that...\'"). (2) Generate 3–5 sample lines of dialogue from this character in a neutral context as a calibration step at session start. (3) Use those sample lines as an example in the dialogue prompt: "Write dialogue in the same register as these examples: [paste samples]." The calibration step is the most effective technique for character-voice consistency.',
          },
          {
            q: 'Do I need a GPU to use a local LLM for novel drafting?',
            a: 'A GPU accelerates generation speed significantly but is not required. On Apple Silicon (M3 or later), the unified memory architecture means even a MacBook Pro 16 GB can run Qwen3 14B comfortably for drafting work — generation speed is slower than a 24 GB GPU rig but acceptable for a writing workflow where you are reading and evaluating output between generations. A dedicated NVIDIA GPU with 24 GB VRAM (RTX 4090, RTX 3090) runs 70B models at usable generation speeds.',
          },
          {
            q: 'Can I use local LLMs with Final Draft or other professional screenwriting software?',
            a: 'Not directly. Final Draft does not have an external API integration. The workflow is: generate script pages in Fountain plain-text format via Ollama, then import the Fountain file into Final Draft using its built-in importer (File → Import → Fountain). Highland, WriterDuet, and Fade In all support Fountain import natively. Generate in Ollama, format as Fountain, import into your screenwriting software.',
          },
          {
            q: 'Can I use Kimi-K2.6 locally for novel drafting?',
            a: 'Kimi-K2.6 has a genuine 1M-token context window — useful for single-shot novel-length work — but is impractical to run locally on consumer hardware (approximately 480 GB VRAM at Q4 quantization). For writers who need 1M context for whole-manuscript work, Moonshot\'s hosted API is the practical option. For fully-local workflows, the session document technique with Llama 3.3 70B (128K context, ~32K practical) handles novel-length work without needing the 1M ceiling. Most writers do not actually need 1M context if the session document workflow is applied.',
          },
          {
            q: 'How do publishers feel about AI-drafted manuscripts?',
            a: 'Mixed and evolving as of 2026. Most major fiction publishers (Big Five, mid-size literary) have policies requiring disclosure of substantial AI use in submitted manuscripts; some prohibit it entirely. Self-publishing platforms (Amazon KDP) require attestation that AI-generated content is disclosed. Genre publishers and short fiction markets are split — Clarkesworld notably bans AI-generated submissions; others evaluate case-by-case. Writers using local LLMs as drafting assistants (with substantial human revision) typically describe the AI as a tool rather than co-author, which most policies accept; pure AI-generated submissions are increasingly rejected. Verify the specific publisher\'s policy before submitting.',
          },
          {
            q: 'What hardware do I need for 1M context models?',
            a: 'Running a 1M-context model locally requires far more VRAM than typical local LLM workflows — Kimi-K2.6 needs approximately 480 GB at Q4 quantization, achievable only with multi-GPU server setups (8x H100 or equivalent). For consumer hardware (24–64 GB VRAM rigs), 128K context models are the practical ceiling, and the 32K practical attention quality limit applies. The session document technique in this article is designed precisely for this gap — getting consistent long-form output without needing 1M context.',
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
          '[Best Local LLMs for Creative Writing 2026](/power-local-llm/best-local-llm-creative-writing-2026) — model comparison for narrative generation including sampling settings and hardware requirements.',
          '[Uncensored Local LLMs for Creative Writing: Ethics and Setup](/power-local-llm/uncensored-local-llm-creative-writing-ethics) — when to use uncensored models for mature fiction and how to set them up in the same Ollama workflow.',
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — frontend options for character-card-driven drafting and collaborative fiction.',
          '[Continue.dev vs Cline vs Aider: Best Local Coding Assistant](/power-local-llm/continue-dev-vs-cline-vs-aider-local) — the same Continue.dev IDE extension used for code assistance can be pointed at Ollama for inline writing assistance in VS Code.',
          '[Chain-of-Thought Prompting Explained](/prompt-engineering/chain-of-thought-prompting) — structured reasoning prompts applicable to plot planning, story beat analysis, and narrative problem-solving.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'evergreen',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    theme: 'Creative & Roleplay',
    title: 'Romane und Drehbücher mit lokalen LLMs verfassen: Workflow-Leitfaden für 100K+ Wörter',
    seoTitle: 'Lokales LLM-Drehbuch- & Romanschreiben offline 2026',
    intro:
      'Lokale LLMs lassen sich in den Schreib-Workflow für Romane und Drehbücher integrieren: Szenentwürfe, Beat Sheets, Dialogdurchläufe und Überarbeitungsrunden — ohne Internetzugang, Cloud-Logging oder Nutzungslimits. Dieser Leitfaden deckt den vollständigen Workflow ab: Modellauswahl, Kontextfensterverwaltung für Langformarbeiten, Kapitelstruktur, Szenengenerierung und Tools, die ein lokales LLM mit Ihrer Schreibsoftware verbinden.',
    metaDescription:
      'Vollständiger Workflow für lokale LLMs beim Schreiben von Romanen und Drehbüchern: Modellauswahl, Kontextverwaltung, Kapitelstruktur, Szenengenerierung und Tool-Integrationen.',
    twitterDescription:
      'Lokale LLMs für Roman- und Drehbuchautoren: Kontextfensterverwaltung, Kapitelstruktur, Szenengenerierung, Dialogdurchläufe und Tool-Integrationen.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command R+ 104B',
      'Hermes 3 Llama 3.3',
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
      '**Die wichtigste technische Herausforderung für Autoren, die lokale LLMs für Langformarbeiten einsetzen, ist die Kontextfensterverwaltung: Die meisten lokalen Modelle haben technisch ein 128K-Kontextfenster, doch die Aufmerksamkeitsqualität nimmt in der Praxis nach rund 32.000 Token (~24.000 Wörter) deutlich ab. Die Lösung ist strukturiertes Context-Injection — die „Session-Dokument"-Technik: eine komprimierte Zusammenfassung vorheriger Kapitel, das Setup der aktuellen Szene und relevante Charakterbögen pflegen und nur diese Elemente zu Beginn jeder Schreibsitzung injizieren. Kombiniert mit der Szene-für-Szene-Generierung produziert dieser Ansatz konsistente Langformausgaben bei jeder Romanlänge. Speziell beim Drehbuchschreiben liefert der Beat-Sheet-First-Workflow — bei dem zunächst ein szenenweises Beat Sheet generiert wird — formatierte Skriptseiten, die der Struktur folgen, statt von ihr abzudriften.**',
    quickAnswerTop: {
      de: {
        question: 'Wie verwendet man ein lokales LLM für Roman- oder Drehbucharbeiten, ohne den Kontext zu verlieren?',
        answer:
          'Die Kerntechnik ist strukturiertes Context-Injection: Statt das gesamte Manuskript in das Kontextfenster einzufügen, ein komprimiertes Session-Dokument pflegen — Charakterbogen (Name, dominantes Merkmal, Sprachregister), Handlungszusammenfassung abgeschlossener Kapitel (100–200 Wörter pro Kapitel) und Setup der aktuellen Szene. Dieses Dokument zu Beginn jeder Schreibsitzung injizieren. Eine Szene nach der anderen generieren — das Modell nie bitten, ein wachsendes Dokument über 32.000 Token fortzusetzen.',
        bullets: [
          'Session-Dokument-Technik: Charakterbögen + Kapitelzusammenfassungen + aktuelles Szenen-Setup zu Sitzungsbeginn injizieren.',
          'Eine Szene pro Sitzung generieren — nie über 32.000 Token fortsetzen.',
          'Beat-Sheet-First beim Drehbuchschreiben: Beat Sheet vor der Prosa generieren; als strukturelles Gerüst verwenden.',
          'Bestes Modell für Langformarbeiten: Llama 3.3 70B (starke Kontextadhärenz, beste Instruktionsbefolgung).',
          'Ollama + Obsidian oder Scrivener ist der verbreitetste Autoren-Workflow.',
          'Kontextfenster-Realität: 128K ist das technische Limit; ~32.000 Token ist die praktische Qualitätsgrenze.',
          'Uncensored Modelle (Hermes 3) fügen sich ohne Setup-Änderungen in diesen Workflow ein.',
        ],
        updatedDate: '2026-05-07',
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
          '**Kontextfenster-Realität: 128K Token auf dem Papier, 32K Token in der Praxis.** Die Aufmerksamkeitsqualität der meisten lokalen Modelle nimmt nach 32.000 Token (~24.000 Wörter) merklich ab. Nicht das vollständige Manuskript in das Kontextfenster laden — stattdessen die Session-Dokument-Technik verwenden.',
          '**Die Session-Dokument-Technik ist die Kernkompetenz.** Eine komprimierte Textdatei pflegen: aktive Charakterbögen (150 Wörter pro Charakter), Kapitelzusammenfassungen (100–200 Wörter pro Kapitel) und das Setup der aktuellen Szene. Zu Beginn jeder Sitzung injizieren.',
          '**Eine Szene pro Sitzung generieren.** Das Modell eine Szene (200–600 Wörter) schreiben lassen, statt es zu bitten, ein wachsendes Dokument fortzusetzen. Eine Szene pro Sitzung eliminiert Kontextdrift und liefert konsistente Stimme.',
          '**Beat-Sheet-First beim Drehbuchschreiben.** Vor dem Generieren von Skriptseiten zunächst ein szenenweises Beat Sheet generieren. Das Beat Sheet als Gerüst für jede Seitengenerierung nutzen.',
          '**Llama 3.3 70B ist das beste Modell für Langformarbeiten.** Starke Kontextadhärenz, beste Instruktionsbefolgung bei längeren Generierungslängen und zuverlässige Charakterstimmkonsistenz.',
          '**Ollama + ein Nur-Text-Schreibtool ist die zuverlässigste Integration.** Scrivener, Obsidian und VS Code funktionieren als Manuskriptebene; Ollama stellt das Modell über eine API bereit.',
          '**Uncensored Modelle (Hermes 3) fügen sich ohne Setup-Änderungen ein.** Für reife Fiktion das Ollama-Modell auf Hermes 3 umstellen; Session-Dokument- und Szenengenerierungs-Techniken bleiben identisch.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnellfakten',
        items: [
          '**Bestes Modell für Langformfiktion:** Llama 3.3 70B (stärkste Kontextadhärenz und Instruktionsbefolgung).',
          '**Praktisches Kontextfensterlimit:** ~32.000 Token (~24.000 Wörter) für zuverlässige Aufmerksamkeitsqualität; 128K ist die technische Obergrenze.',
          '**Größe des Session-Dokuments:** Ziel unter 4.000 Token (Charakterbögen + Kapitelzusammenfassungen + aktuelles Szenen-Setup).',
          '**Szenengenerierungsziel:** 200–600 Wörter pro Generierungsaufruf; längere Szenen über mehrere sequenzielle Prompts.',
          '**Drehbuchformat:** Ollama mit Fountain-Format-Ausgabeanweisungen kombinieren für Skript-formatierten Text.',
          '**Schreibtools, die mit Ollama funktionieren:** Scrivener (über API-Begleitskripte), Obsidian (über lokales Plugin oder Skripte), VS Code (über Continue.dev oder direkte API-Aufrufe), reines Terminal.',
          '**Uncensored-Option:** Hermes 3 Llama 3.3 für reife Fiktion; gleicher Workflow, gleiche Session-Dokument-Technik.',
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: 'Das Kontextfensterproblem beim Langformschreiben',
        content:
          '**Das praktische Kontextlimit der meisten lokalen Modelle beträgt 32.000 Token — nicht die beworbenen 128K.** Die Aufmerksamkeitsqualität nimmt bei den meisten Modellen nach 32.000 Token ab. Bei 128K Token verlieren viele Modelle die korrekte Referenz auf Inhalte aus dem ersten Viertel des Kontextfensters. Bei einem Roman bedeutet das: Der bisherige Entwurf kann nicht einfach eingefügt und nach dem nächsten Kapitel gefragt werden.\n\nKimi-K2.6 von Moonshot AI bietet ein echtes 1-Millionen-Token-Kontextfenster mit stärkerer Aufmerksamkeitsqualitätserhaltung. Kimi-K2.6 lokal auszuführen ist für die meisten Autoren unpraktisch — es erfordert etwa 480 GB VRAM bei Q4-Quantisierung. Für Autoren, die tatsächlich 1M Kontext benötigen, ist Moonshots gehostete API die praktische Zugangsmöglichkeit. Für lokal ausführbare Modelle (Llama 3.3 70B, Qwen3 32B, Mistral Large) ist die 32K-Praxisgrenze die relevante Einschränkung.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Die praktische Qualitätsgrenze für Kontextadhärenz bei den meisten lokalen LLMs liegt bei etwa 32.000 Token (~24.000 Wörter) — darüber hinaus verlieren Modelle die genaue Referenz auf früheren Inhalt, was zu Stimmungsdrift und Plotwidersprüchen führt.',
          },
          {
            type: 'plain-terms',
            text: 'Man kann einen 90.000-Wörter-Roman nicht in ein 128K-Kontextfenster laden und erwarten, dass das Modell sich daran erinnert, was in Kapitel 3 passiert ist, während es Kapitel 20 schreibt. Stattdessen: alles, was das Modell wissen muss — Charakterbögen, Kapitelzusammenfassungen, aktuelles Szenen-Setup — in ein Session-Dokument mit unter 4.000 Token komprimieren und dieses zu Beginn jeder Schreibsitzung injizieren.',
          },
        ],
        items: [
          '**Token-zu-Wort-Umrechnung:** 1 Token ≈ 0,75 Wörter auf Englisch. 32K Token ≈ 24.000 Wörter. 128K Token ≈ 96.000 Wörter (ein vollständiger Roman).',
          '**Aufmerksamkeitsdegradation:** Modelle verlieren die zuverlässige Referenz auf Inhalte aus dem frühen Teil eines langen Kontextfensters — Charakternamensfehler, vergessene Handlungspunkte und Stimmungsdrift.',
          '**Die Asymmetrie:** Modelle beachten den Anfang (System-Prompt) und das Ende des Kontextfensters am besten. Inhalte in der Mitte werden am wenigsten zuverlässig berücksichtigt.',
          '**Session-Dokument als Lösung:** Alles komprimieren, was das Modell benötigt. Zu Beginn injizieren. Szene generieren. Sitzung beenden. Zurücksetzen. Mit aktualisiertem Session-Dokument neu beginnen.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Nicht das vollständige Manuskript in den Kontext einfügen. Über 10.000 Wörter entsteht Kontextdrift — das Modell vergisst frühe Charakterdetails, widerspricht Handlungspunkten und kehrt zu einem generischen Register zurück. Stattdessen die Session-Dokument-Technik verwenden.',
          },
        ],
      },
      sessionDocument: {
        id: 'session-document',
        title: 'Session-Dokument-Technik',
        content:
          'Die Session-Dokument-Technik in diesem Abschnitt wurde in Entwurfsarbeiten für mehrere Langformprojekte erprobt (ein literarischer Roman mit 90.000 Wörtern, zwei Drehbuchentwürfe). Die 4.000-Token-Größe, der szene-für-szene Generierungsrhythmus und der Zeitpunkt der Kontinuitätsprüfungen basieren auf beobachteten Fehlermustern.\n\n**Das Session-Dokument ist eine Nur-Text-Datei neben dem Manuskript — der komprimierte Zustand des Romans, den das Modell kennen muss.** Es hat drei Abschnitte: aktive Charakterbögen, Kapitelzusammenfassungen und das aktuelle Szenen-Setup.',
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
          '**Fountain-kompatibler Output:** Fountain ist ein Nur-Text-Markup-Format für Drehbücher, das von Final Draft, Highland, WriterDuet und anderen Tools unterstützt wird. Output kann direkt in Drehbuchsoftware importiert werden.',
          '**Slug Lines zuerst:** Die Slug Line als separaten Einzeiler-Prompt generieren, bevor der Szeneninhalt generiert wird. Dies verankert den physischen Ort.',
          '**Dialogdurchläufe:** Nach Action Lines einen separaten Dialogdurchlauf: „Die Action Lines sind gesetzt. Schreibe den Dialog für [Charakter A] und [Charakter B]. Charakter A will [X]. Charakter B will [Y]. Keine Dialognachführer. 5–8 Austausche."',
          '**Seitenanzahlverwaltung:** Eine Standard-Drehbuchseite umfasst etwa 55–60 Wörter. Wörterobergrenzen kalibrieren: 1 Seite ≈ 60 Wörter, 2 Seiten ≈ 120 Wörter, 3 Seiten ≈ 180 Wörter.',
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
            text: 'Das zuverlässigste Generierungsmuster für Langformfiktion: Session-Dokument im System-Prompt → einzelner Szenen-Prompt im User-Turn → überprüfen → Session-Dokument aktualisieren → wiederholen, eine Szene pro Sitzung.',
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
        title: 'Tool-Integrationen für Autoren',
        content:
          '**Ollama stellt eine OpenAI-kompatible API auf localhost bereit, mit der eine wachsende Zahl von autorenseitigen Tools verbindet.** Die folgenden Integrationen stellen die etabliertesten Optionen dar.',
        columns: ['Tool', 'Integration', 'Ideal für'],
        rows: [
          { 'Tool': 'Obsidian', 'Integration': 'Copilot-Plugin oder Smart Connections-Plugin → Ollama API. Siehe [Obsidian + Lokale LLM-Plugins](/de/power-local-llm/local-llm-with-obsidian-2026) für den ausführlichen Leitfaden.', 'Ideal für': 'Autoren, die Obsidian bereits für Notizen + Manuskript verwenden; nahtlose Generierung in derselben App' },
          { 'Tool': 'Scrivener', 'Integration': 'Externes Skript über Ollama API → in Dokument einfügen', 'Ideal für': 'Autoren, die Romane in Scrivener strukturieren; KI-Entwürfe in bestehende Projektstruktur einfügen' },
          { 'Tool': 'VS Code', 'Integration': 'Continue.dev-Erweiterung → Ollama-Backend', 'Ideal für': 'Technische Autoren und Game-Narrative-Designer im Code-Editor' },
          { 'Tool': 'SillyTavern', 'Integration': 'OpenAI-kompatible API → Ollama', 'Ideal für': 'Roleplay-Fiktion und charakterkarten-gesteuertes Drafting; persistentes Charaktergedächtnis' },
          { 'Tool': 'Reines Terminal', 'Integration': '`ollama run [model]` oder curl zur Ollama API', 'Ideal für': 'Skriptierbare Workflows; maximale Kontrolle mit minimalem UI-Overhead' },
          { 'Tool': 'LM Studio', 'Integration': 'Integrierte Chat-Benutzeroberfläche + lokale Server-API', 'Ideal für': 'Autoren, die einen GUI-Modellmanager ohne separaten Ollama-Install wünschen' },
          { 'Tool': 'NovelCrafter', 'Integration': 'Integrierte KI-Integration; unterstützt OpenAI-kompatible Endpunkte (auf Ollama zeigen)', 'Ideal für': 'Autoren, die kapitelebene KI-Unterstützung in einer einzigen roman-fokussierten App wünschen' },
          { 'Tool': 'Plottr', 'Integration': 'Manueller Workflow: Romane in Plottr strukturieren, Szenen/Beats extern in Ollama einfügen', 'Ideal für': 'Plot-intensive Genrefiktion (Krimi, Thriller, Fantasy) mit strukturellem Plotten als Workflow-Mittelpunkt' },
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
        title: 'Modellempfehlungen für Langformarbeiten',
        content:
          '**Langform-Drafting hat andere Modellanforderungen als Kurzformfiktion.** Kontextadhärenz, konsistente Instruktionsbefolgung und die Fähigkeit, die Stimme über mehrere Generierungsaufrufe beizubehalten, sind die entscheidenden Faktoren. Für das breitere Modellspektrum über alle Anwendungsfälle, siehe [Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026).',
        columns: ['Aufgabe', 'Empfohlenes Modell', 'Warum'],
        rows: [
          { 'Aufgabe': 'Roman-Drafting (primär)', 'Empfohlenes Modell': 'Llama 3.3 70B', 'Warum': 'Beste Kontextadhärenz und Instruktionsbefolgung für sitzungsübergreifende Langformarbeiten; konsistenteste Stimme' },
          { 'Aufgabe': 'Drehbuchschreiben', 'Empfohlenes Modell': 'Llama 3.3 70B oder Mistral Large', 'Warum': 'Llama 3.3 für komplexe Charakterdynamiken; Mistral Large für konsistente Formatadhärenz im Fountain-Output' },
          { 'Aufgabe': 'Beat Sheet / Outline-Generierung', 'Empfohlenes Modell': 'Qwen3 32B', 'Warum': 'Starke strukturelle Generierung; folgt constraint-schweren Outline-Prompts zuverlässig' },
          { 'Aufgabe': 'Dialogdurchläufe', 'Empfohlenes Modell': 'Command R+ 104B', 'Warum': 'Bestes naturalistisches Sprachregister und Charakterstimmdifferenzierung über ausgedehnte Austausche' },
          { 'Aufgabe': 'Überarbeitung (strukturell)', 'Empfohlenes Modell': 'Llama 3.3 70B', 'Warum': 'Am besten darin, spezifische strukturelle Einschränkungen in Umschreibanweisungen zu befolgen' },
          { 'Aufgabe': 'Reife / dunkle Fiktion', 'Empfohlenes Modell': 'Hermes 3 Llama 3.3 70B', 'Warum': 'Gleiche Basis wie Llama 3.3 70B; uncensored Fine-Tune; identische Kontextadhärenz für Langformarbeiten' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Das vollständige Manuskript in den Kontext einfügen.** Auch mit einem 128K-Kontextfenster nimmt die Aufmerksamkeitsqualität nach 32.000 Token deutlich ab. Die Session-Dokument-Technik verwenden.',
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
          'Llama 3.3 70B Langkontext-Benchmarks — [Meta AI Research](https://ai.meta.com)',
          'Qwen3 32B technischer Bericht inkl. Kontextfenster-Benchmarks — [Alibaba Cloud / Qwen Team](https://qwenlm.github.io)',
          'Lost in the Middle: How Language Models Use Long Contexts — [Stanford NLP Research](https://arxiv.org/abs/2307.03172)',
          'Fountain-Drehbuchformat-Spezifikation — [Fountain.io](https://fountain.io)',
          'Ollama API-Dokumentation — [Ollama](https://ollama.com/docs)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Kann ein lokales LLM einen vollständigen Roman schreiben?',
            a: 'Ein lokales LLM kann die Prosa für einen vollständigen Roman generieren — aber die strukturelle und redaktionelle Intelligenz muss vom Autor kommen. Das Modell generiert Szenen, wenn es mit spezifischen Setups aufgefordert wird; es plant, bewertet oder trifft thematische Entscheidungen nicht autonom. Autoren beschreiben es als „sehr schnellen Erstenhtwurf-Generator für Szenen, die ich bereits weiß, wie ich schreiben soll."',
          },
          {
            q: 'Was ist das maximale Kontextfenster, das ich zuverlässig verwenden kann?',
            a: 'In der Praxis bis zu etwa 32.000 Token (~24.000 Wörter) mit den meisten lokalen Modellen. Darüber verlieren Modelle genaue Referenzen auf frühe Kontextinhalte. Die Session-Dokument-Technik hält den Arbeitskontext unter 4.000–6.000 Token.',
          },
          {
            q: 'Wie verhindere ich, dass das Modell die Stimme meines Charakters ändert?',
            a: 'Stimmungsdrift hat zwei Ursachen: ein veraltetes Session-Dokument und Kontextverdünnung. Lösung: Charakterbogen in der Systemnachricht platzieren, nach bedeutsamen Szenen aktualisieren und kurz genug halten, um im obersten Abschnitt jedes Sitzungskontexts Platz zu finden.',
          },
          {
            q: 'Kann ich Scrivener mit einem lokalen LLM verwenden?',
            a: 'Nicht nativ — Scrivener hat kein Plugin-System für externe API-Aufrufe. Der gebräuchlichste Workflow: in Ollama generieren, Output kopieren, in das relevante Scrivener-Dokument einfügen. Manche Autoren verwenden Obsidian als KI-Drafting-Ebene und importieren abgeschlossene Kapitel zur finalen Strukturierung in Scrivener.',
          },
          {
            q: 'Was ist besser fürs Drehbuchschreiben: Ollama oder eine Cloud-KI?',
            a: 'Für reife Inhalte (Gewalt, dunkle Psychologie, moralisch komplexe Charaktere) ist lokales Ollama mit Llama 3.3 70B oder Hermes 3 zuverlässiger — Cloud-Modelle verweigern Inhalte, die in dramatischen Skripten häufig vorkommen. Für Formatkonsistenz liefern beide äquivalente Ergebnisse mit Formatanweisungen im System-Prompt.',
          },
          {
            q: 'Wie generiere ich Dialog, der wie ein bestimmter Charakter klingt?',
            a: 'Drei Schritte: (1) Sprachregister des Charakters zum Session-Dokument hinzufügen. (2) 3–5 Beispieldialogzeilen als Kalibrierungsschritt zu Sitzungsbeginn generieren. (3) Diese Beispiele im Dialog-Prompt verwenden: „Schreibe Dialog im selben Register wie diese Beispiele: [einfügen]."',
          },
          {
            q: 'Brauche ich eine GPU für ein lokales LLM beim Roman-Drafting?',
            a: 'Eine GPU beschleunigt erheblich, ist aber nicht zwingend erforderlich. Auf Apple Silicon (M3 oder später) kann selbst ein MacBook Pro 16 GB Qwen3 14B für Drafting-Arbeiten ausführen — langsamer als ein 24-GB-GPU-Rig, aber akzeptabel. Eine dedizierte NVIDIA GPU mit 24 GB VRAM führt 70B-Modelle mit nutzbaren Geschwindigkeiten aus.',
          },
          {
            q: 'Kann ich lokale LLMs mit Final Draft oder anderer professioneller Drehbuchsoftware verwenden?',
            a: 'Nicht direkt. Final Draft hat keine externe API-Integration. Workflow: Skriptseiten im Fountain-Nur-Text-Format über Ollama generieren, dann mit Final Drafts integriertem Importer importieren (Datei → Importieren → Fountain). Highland, WriterDuet und Fade In unterstützen Fountain-Import nativ.',
          },
          {
            q: 'Kann ich Kimi-K2.6 lokal für Roman-Drafting verwenden?',
            a: 'Kimi-K2.6 hat ein echtes 1-Millionen-Token-Kontextfenster, ist aber für die meisten Autoren unpraktisch lokal auszuführen (ca. 480 GB VRAM bei Q4-Quantisierung). Für vollständig lokale Workflows handhabt die Session-Dokument-Technik mit lokal ausführbaren Modellen Romanlängenarbeit ohne 1M-Decke.',
          },
          {
            q: 'Wie stehen Verlage zu KI-gestützten Manuskripten?',
            a: 'Gemischt und im Wandel. Die meisten großen Belletristik-Verlage verlangen eine Offenlegung wesentlicher KI-Nutzung; manche verbieten sie vollständig. Self-Publishing-Plattformen verlangen Attestation für KI-generierten Inhalt. Autoren, die lokale LLMs als Drafting-Assistenten mit wesentlicher menschlicher Überarbeitung verwenden, beschreiben die KI als Werkzeug statt als Co-Autor. Die spezifische Verlagsrichtlinie vor der Einreichung prüfen.',
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
          '[Beste lokale LLMs für kreatives Schreiben 2026](/de/power-local-llm/best-local-llm-creative-writing-2026) — Modellvergleich für narrative Generierung einschließlich Sampling-Einstellungen.',
          '[Uncensored Local LLMs für kreatives Schreiben: Ethik und Setup](/de/power-local-llm/uncensored-local-llm-creative-writing-ethics) — wann uncensored Modelle für reife Fiktion verwendet werden.',
          '[SillyTavern vs Agnai vs RisuAI: Bestes lokales Roleplay-Frontend](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — Frontend-Optionen für charakterkarten-gesteuertes Drafting.',
          '[Continue.dev vs Cline vs Aider: Bester lokaler Coding-Assistent](/de/power-local-llm/continue-dev-vs-cline-vs-aider-local) — Continue.dev kann für Inline-Schreibassistenz in VS Code auf Ollama gezeigt werden.',
          '[Chain-of-Thought Prompting erklärt](/de/prompt-engineering/chain-of-thought-prompting) — strukturierte Reasoning-Prompts für Plotplanung, Story-Beat-Analyse und narratives Problemlösen.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'evergreen',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    theme: 'Creative & Roleplay',
    title: 'Rédiger des romans et des scénarios avec des LLM locaux : guide de workflow 100 000+ mots',
    seoTitle: 'Scénarios et romans avec un LLM local hors ligne 2026',
    intro:
      'Les LLM locaux s\'intègrent dans le workflow d\'écriture de romans et de scénarios : brouillons de scènes, beat sheets, passes de dialogue et révisions — sans accès internet, journalisation dans le cloud ni limites d\'utilisation. Ce guide couvre le workflow complet : sélection du modèle, gestion de la fenêtre de contexte pour les longs formats, structuration des chapitres, génération de scènes et outils reliant un LLM local à votre logiciel d\'écriture.',
    metaDescription:
      'Workflow complet pour utiliser les LLM locaux en écriture de romans et de scénarios : sélection du modèle, gestion du contexte, structure des chapitres, génération de scènes et intégrations d\'outils.',
    twitterDescription:
      'LLM locaux pour romanciers et scénaristes : gestion de la fenêtre de contexte, structure des chapitres, génération de scènes, passes de dialogue et intégrations.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command R+ 104B',
      'Hermes 3 Llama 3.3',
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
      '**Le principal défi technique pour les auteurs utilisant des LLM locaux sur des projets longs est la gestion de la fenêtre de contexte : la plupart des modèles locaux ont techniquement une fenêtre de 128 000 tokens, mais la qualité d\'attention se dégrade significativement après 32 000 tokens (~24 000 mots) en pratique. La solution est l\'injection de contexte structurée — la technique du « document de session » : maintenir un résumé compressé des chapitres précédents, la configuration de la scène actuelle et les fiches de personnages pertinentes, puis injecter uniquement ces éléments au début de chaque session d\'écriture. Combinée à la génération scène par scène, cette approche produit des résultats longs cohérents quelle que soit la longueur du roman. Pour les scénarios, le workflow beat-sheet-first — où l\'on génère d\'abord un beat sheet par scène — produit des pages de script correspondant à la structure plutôt qu\'en dérivant.**',
    quickAnswerTop: {
      fr: {
        question: 'Comment utiliser un LLM local pour l\'écriture d\'un roman ou d\'un scénario sans perdre le contexte ?',
        answer:
          'La technique clé est l\'injection de contexte structurée : plutôt que de coller tout le manuscrit dans la fenêtre de contexte, maintenir un document de session compressé — fiche de personnage (nom, trait dominant, registre de parole), résumé de l\'intrigue des chapitres terminés (100–200 mots par chapitre) et configuration de la scène actuelle. Injecter ce document au début de chaque session. Générer une scène à la fois — jamais demander au modèle de continuer un document croissant au-delà de 32 000 tokens.',
        bullets: [
          'Technique du document de session : fiches personnages + résumés chapitres + configuration scène actuelle injectés en début de session.',
          'Générer une scène à la fois — ne jamais dépasser 32 000 tokens en continu.',
          'Beat-sheet-first pour les scénarios : générer le beat sheet avant la prose ; l\'utiliser comme scaffold structurel.',
          'Meilleur modèle pour le long format : Llama 3.3 70B (meilleure adhérence au contexte, meilleur suivi des instructions).',
          'Ollama + Obsidian ou Scrivener est le workflow le plus répandu chez les auteurs.',
          'Réalité de la fenêtre de contexte : 128K est la limite technique ; ~32 000 tokens est le plafond pratique de qualité.',
          'Les modèles non censurés (Hermes 3) s\'intègrent à ce workflow sans modification de configuration.',
        ],
        updatedDate: '2026-05-07',
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
          '**Réalité de la fenêtre de contexte : 128K tokens sur le papier, 32K en pratique.** La qualité d\'attention se dégrade nettement après 32 000 tokens (~24 000 mots). Ne pas coller le manuscrit complet — utiliser la technique du document de session.',
          '**La technique du document de session est la compétence fondamentale.** Maintenir un fichier texte compressé : fiches de personnages actifs (150 mots par personnage), résumés de chapitres (100–200 mots par chapitre terminé) et configuration de la scène actuelle. Injecter au début de chaque session.',
          '**Générer une scène à la fois.** Demander au modèle d\'écrire une scène (200–600 mots) plutôt que de continuer un document croissant. Une scène par session élimine la dérive de contexte.',
          '**Beat-sheet-first pour les scénarios.** Avant de générer des pages de script, générer un beat sheet par scène. Utiliser le beat sheet comme scaffold pour chaque génération de page.',
          '**Llama 3.3 70B est le meilleur modèle pour le long format.** Forte adhérence au contexte, meilleur suivi des instructions sur des générations longues, cohérence de voix sur plusieurs sessions.',
          '**Ollama + un outil d\'écriture texte brut est l\'intégration la plus fiable.** Scrivener, Obsidian et VS Code fonctionnent tous comme couche manuscrit ; Ollama sert le modèle via une API.',
          '**Les modèles non censurés (Hermes 3) s\'intègrent sans changements de configuration.** Pour la fiction adulte, basculer le modèle Ollama vers Hermes 3 ; les techniques restent identiques.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Meilleur modèle pour la fiction longue :** Llama 3.3 70B (meilleure adhérence au contexte et suivi des instructions).',
          '**Limite pratique de la fenêtre de contexte :** ~32 000 tokens (~24 000 mots) pour une qualité d\'attention fiable ; 128K est le plafond technique.',
          '**Taille du document de session :** viser moins de 4 000 tokens (fiches personnages + résumés chapitres + configuration scène actuelle).',
          '**Cible de génération de scène :** 200–600 mots par appel de génération ; scènes plus longues via plusieurs prompts séquentiels.',
          '**Format scénario :** combiner Ollama avec des instructions de sortie au format Fountain pour du texte formaté screenplay.',
          '**Outils d\'écriture compatibles Ollama :** Scrivener (via scripts API compagnons), Obsidian (via plugin local ou scripts), VS Code (via Continue.dev ou appels API directs), terminal brut.',
          '**Option non censurée :** Hermes 3 Llama 3.3 pour la fiction adulte ; même workflow, même technique du document de session.',
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: 'Le problème de la fenêtre de contexte pour l\'écriture longue',
        content:
          '**La limite pratique de contexte de la plupart des modèles locaux est de 32 000 tokens — pas les 128K annoncés.** La qualité d\'attention se dégrade après 32 000 tokens. À 128K tokens, beaucoup de modèles perdent la référence précise au contenu du premier quart de la fenêtre. Pour un roman, cela signifie qu\'on ne peut pas simplement coller le manuscrit en cours et demander le chapitre suivant.\n\nKimi-K2.6 de Moonshot AI offre une véritable fenêtre de 1 million de tokens avec une meilleure préservation de la qualité d\'attention. Exécuter Kimi-K2.6 localement est impraticable pour la plupart des auteurs — il requiert environ 480 Go de VRAM en quantisation Q4. Pour les auteurs ayant besoin de 1M de contexte, l\'API hébergée de Moonshot est l\'option pratique. Pour les modèles exécutables localement (Llama 3.3 70B, Qwen3 32B, Mistral Large), le plafond pratique de 32K est la contrainte pertinente.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Le plafond pratique de qualité pour l\'adhérence au contexte dans la plupart des LLM locaux est d\'environ 32 000 tokens (~24 000 mots) — au-delà, les modèles perdent la référence précise au contenu antérieur, causant dérive de voix et incohérences de plot.',
          },
          {
            type: 'plain-terms',
            text: 'On ne peut pas charger un roman de 90 000 mots dans une fenêtre de 128K et espérer que le modèle se souvienne de ce qui s\'est passé au chapitre 3 en écrivant le chapitre 20. À la place : compresser ce que le modèle doit savoir — fiches personnages, résumés de chapitres, configuration de la scène actuelle — dans un document de session de moins de 4 000 tokens, et l\'injecter au début de chaque session.',
          },
        ],
        items: [
          '**Conversion token-mot :** 1 token ≈ 0,75 mot en anglais. 32K tokens ≈ 24 000 mots. 128K tokens ≈ 96 000 mots (un roman complet).',
          '**Dégradation de l\'attention :** les modèles perdent la référence fiable au contenu du début d\'une longue fenêtre — erreurs de noms de personnages, points de plot oubliés, dérive de voix.',
          '**L\'asymétrie :** les modèles traitent le mieux le début (system prompt) et la fin du contexte. Le contenu au milieu d\'un long contexte est le moins fiablement traité.',
          '**Document de session comme solution :** compresser tout ce dont le modèle a besoin dans un court document structuré. Injecter au début. Générer la scène. Terminer la session. Réinitialiser. Recommencer avec le document mis à jour.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ne pas coller le manuscrit complet dans le contexte. Au-delà de 10 000 mots, la dérive de contexte s\'installe — le modèle oublie les détails de personnages, contredit les points de plot et régresse vers un registre générique. Utiliser la technique du document de session.',
          },
        ],
      },
      sessionDocument: {
        id: 'session-document',
        title: 'Technique du document de session',
        content:
          'La technique du document de session présentée ici a été testée sur plusieurs projets longs (un roman littéraire de 90 000 mots, deux scénarios). La taille de 4 000 tokens, le rythme scène par scène et le timing des vérifications de continuité découlent de modes d\'échec observés pendant ce travail.\n\n**Le document de session est un fichier texte brut maintenu à côté du manuscrit — l\'état compressé du roman que le modèle doit connaître pour générer du contenu cohérent.** Il comporte trois sections : fiches de personnages actifs, résumés de chapitres et configuration de la scène actuelle.',
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
          '**Sortie compatible Fountain :** Fountain est un format de balisage texte brut pour scénarios supporté par Final Draft, Highland, WriterDuet et d\'autres. Demander « Fountain-compatible plain text » produit une sortie importable directement dans le logiciel de scénario.',
          '**Slug lines d\'abord :** générer la slug line comme prompt d\'une ligne avant de générer le contenu de la scène. Cela ancre le lieu physique avant que le modèle commence.',
          '**Passes de dialogue :** après les lignes d\'action, faire une passe séparée : « Les lignes d\'action sont définies. Écrire le dialogue pour [Personnage A] et [Personnage B]. Personnage A veut [X]. Personnage B veut [Y]. Pas de balises de dialogue. 5–8 échanges. »',
          '**Gestion du nombre de pages :** une page de scénario standard fait environ 55–60 mots d\'action et dialogue combinés. Calibrer les plafonds de mots : 1 page ≈ 60 mots, 2 pages ≈ 120 mots, 3 pages ≈ 180 mots.',
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
            text: 'Pour la fiction longue, le schéma de génération le plus fiable est : document de session dans le system prompt → unique prompt de scène dans le tour utilisateur → réviser → mettre à jour le document de session → répéter, une scène par session.',
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
        title: 'Intégrations d\'outils pour les auteurs',
        content:
          '**Ollama expose une API compatible OpenAI sur localhost qu\'un écosystème croissant d\'outils orientés auteurs connecte.** Les intégrations ci-dessous représentent les options les plus établies.',
        columns: ['Outil', 'Intégration', 'Idéal pour'],
        rows: [
          { 'Outil': 'Obsidian', 'Intégration': 'Plugin Copilot ou Smart Connections → API Ollama. Voir [Obsidian + Plugins LLM locaux](/fr/power-local-llm/local-llm-with-obsidian-2026) pour le guide approfondi.', 'Idéal pour': 'Auteurs utilisant déjà Obsidian pour les notes + manuscrit ; génération dans la même appli sans changer de contexte' },
          { 'Outil': 'Scrivener', 'Intégration': 'Script externe via API Ollama → coller dans le document', 'Idéal pour': 'Auteurs structurant leurs romans dans Scrivener ; brouillons IA collés dans la structure de projet existante' },
          { 'Outil': 'VS Code', 'Intégration': 'Extension Continue.dev → backend Ollama', 'Idéal pour': 'Auteurs techniques et concepteurs de narration de jeux à l\'aise dans un éditeur de code' },
          { 'Outil': 'SillyTavern', 'Intégration': 'API compatible OpenAI → Ollama', 'Idéal pour': 'Fiction roleplay et rédaction guidée par fiches personnages ; mémoire de personnage persistante' },
          { 'Outil': 'Terminal brut', 'Intégration': '`ollama run [model]` ou curl vers l\'API Ollama', 'Idéal pour': 'Workflows scriptables ; contrôle maximal avec overhead d\'interface minimal' },
          { 'Outil': 'LM Studio', 'Intégration': 'Interface de chat intégrée + API serveur local', 'Idéal pour': 'Auteurs souhaitant un gestionnaire de modèles GUI sans installer Ollama séparément' },
          { 'Outil': 'NovelCrafter', 'Intégration': 'Intégration IA intégrée ; supporte les endpoints compatibles OpenAI (pointer vers Ollama)', 'Idéal pour': 'Auteurs souhaitant une assistance IA au niveau chapitre dans une seule app dédiée au roman' },
          { 'Outil': 'Plottr', 'Intégration': 'Workflow manuel : structurer les romans dans Plottr, coller scènes/beats dans Ollama en externe', 'Idéal pour': 'Fiction de genre à plot dense (polar, thriller, fantasy) où la structure narrative est le cœur du workflow' },
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
        title: 'Recommandations de modèles pour le long format',
        content:
          '**Le long format a des exigences différentes de la fiction courte.** L\'adhérence au contexte, la cohérence du suivi des instructions sur des sessions longues et la capacité à maintenir la voix sur plusieurs appels de génération sont les facteurs décisifs. Pour le panorama complet des modèles, voir [Meilleurs LLM locaux en 2026](/fr/local-llms/best-local-llms-2026).',
        columns: ['Tâche', 'Modèle recommandé', 'Pourquoi'],
        rows: [
          { 'Tâche': 'Rédaction de roman (principal)', 'Modèle recommandé': 'Llama 3.3 70B', 'Pourquoi': 'Meilleure adhérence au contexte et suivi des instructions pour le long format multi-sessions ; voix la plus cohérente' },
          { 'Tâche': 'Écriture de scénarios', 'Modèle recommandé': 'Llama 3.3 70B ou Mistral Large', 'Pourquoi': 'Llama 3.3 pour les dynamiques de personnages complexes ; Mistral Large pour l\'adhérence au format Fountain' },
          { 'Tâche': 'Génération de beat sheet / outline', 'Modèle recommandé': 'Qwen3 32B', 'Pourquoi': 'Forte génération structurelle ; suit fiablement les prompts d\'outline à contraintes multiples' },
          { 'Tâche': 'Passes de dialogue', 'Modèle recommandé': 'Command R+ 104B', 'Pourquoi': 'Meilleur registre de parole naturel et différenciation des voix de personnages sur des échanges longs' },
          { 'Tâche': 'Révision (structurelle)', 'Modèle recommandé': 'Llama 3.3 70B', 'Pourquoi': 'Meilleur pour suivre des contraintes structurelles nommées dans les instructions de réécriture' },
          { 'Tâche': 'Fiction adulte / sombre', 'Modèle recommandé': 'Hermes 3 Llama 3.3 70B', 'Pourquoi': 'Même base que Llama 3.3 70B ; fine-tune non censuré ; adhérence au contexte identique pour le long format' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs fréquentes',
        items: [
          '**Coller le manuscrit complet dans le contexte.** Même avec une fenêtre de 128K tokens, la qualité d\'attention se dégrade significativement après 32 000 tokens. Utiliser la technique du document de session.',
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
          'Benchmarks long contexte Llama 3.3 70B — [Meta AI Research](https://ai.meta.com)',
          'Rapport technique Qwen3 32B incluant benchmarks fenêtre de contexte — [Alibaba Cloud / Qwen Team](https://qwenlm.github.io)',
          'Lost in the Middle: How Language Models Use Long Contexts — [Stanford NLP Research](https://arxiv.org/abs/2307.03172)',
          'Spécification du format Fountain pour scénarios — [Fountain.io](https://fountain.io)',
          'Documentation API Ollama — [Ollama](https://ollama.com/docs)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Un LLM local peut-il écrire un roman complet ?',
            a: 'Un LLM local peut générer la prose d\'un roman complet — mais l\'intelligence structurelle et éditoriale doit venir de l\'auteur. Le modèle génère des scènes quand on lui fournit des configurations spécifiques ; il ne planifie pas, n\'évalue pas et ne prend pas de décisions thématiques de façon autonome. Les auteurs qui utilisent des LLM locaux comme outils de rédaction les décrivent comme « un générateur de premier brouillon très rapide pour des scènes que je sais déjà comment écrire ».',
          },
          {
            q: 'Quelle est la fenêtre de contexte maximale utilisable de façon fiable ?',
            a: 'En pratique, compter sur une qualité d\'attention fiable jusqu\'à environ 32 000 tokens (~24 000 mots) avec la plupart des modèles locaux. Au-delà, les modèles commencent à perdre la référence précise au contenu du début du contexte. La technique du document de session maintient le contexte de travail sous 4 000–6 000 tokens.',
          },
          {
            q: 'Comment empêcher le modèle de changer la voix de mon personnage en cours de roman ?',
            a: 'La dérive de voix a deux causes : un document de session obsolète et la dilution du contexte. Solution : placer la fiche de personnage dans le message système, la mettre à jour après chaque scène avec un moment d\'arc significatif, et la garder concise.',
          },
          {
            q: 'Puis-je utiliser Scrivener avec un LLM local ?',
            a: 'Pas nativement — Scrivener n\'a pas de système de plugin pour les appels API externes. Le workflow le plus courant : générer dans Ollama (via terminal ou script compagnon), copier la sortie, la coller dans le document Scrivener pertinent. Certains auteurs utilisent Obsidian comme couche de rédaction IA et importent les chapitres terminés dans Scrivener.',
          },
          {
            q: 'Qu\'est-ce qui est mieux pour les scénarios : Ollama ou une IA cloud ?',
            a: 'Pour les scénaristes devant générer du contenu adulte (violence, psychologie sombre, personnages moralement complexes), Ollama local avec Llama 3.3 70B ou Hermes 3 est plus fiable — les modèles cloud refusent du contenu qui apparaît fréquemment dans les scripts dramatiques. Pour la cohérence du format, les deux sont équivalents avec des instructions de format dans le system prompt.',
          },
          {
            q: 'Comment générer du dialogue qui ressemble à un personnage spécifique ?',
            a: 'Approche en trois étapes : (1) Ajouter le registre de parole du personnage au document de session. (2) Générer 3–5 lignes de dialogue d\'exemple comme étape de calibration en début de session. (3) Utiliser ces lignes d\'exemple dans le prompt de dialogue : « Écrire du dialogue dans le même registre que ces exemples : [coller]. »',
          },
          {
            q: 'Ai-je besoin d\'un GPU pour utiliser un LLM local pour la rédaction de roman ?',
            a: 'Un GPU accélère significativement mais n\'est pas requis. Sur Apple Silicon (M3 ou ultérieur), même un MacBook Pro 16 Go peut faire tourner Qwen3 14B pour la rédaction — plus lent qu\'un rig GPU 24 Go mais acceptable pour un workflow d\'écriture. Un GPU NVIDIA dédié avec 24 Go de VRAM fait tourner les modèles 70B à des vitesses utilisables.',
          },
          {
            q: 'Puis-je utiliser des LLM locaux avec Final Draft ou d\'autres logiciels de scénario professionnels ?',
            a: 'Pas directement. Final Draft n\'a pas d\'intégration API externe. Le workflow : générer les pages de script au format Fountain via Ollama, puis importer le fichier Fountain dans Final Draft via son importateur intégré (Fichier → Importer → Fountain). Highland, WriterDuet et Fade In supportent l\'import Fountain nativement.',
          },
          {
            q: 'Puis-je utiliser Kimi-K2.6 localement pour la rédaction de roman ?',
            a: 'Kimi-K2.6 a une véritable fenêtre de 1 million de tokens — utile pour du travail en une seule passe sur la longueur d\'un roman — mais est impraticable à exécuter localement pour la plupart des auteurs (~480 Go de VRAM en quantisation Q4). Pour les workflows entièrement locaux, la technique du document de session avec des modèles exécutables localement gère le travail de longueur roman.',
          },
          {
            q: 'Quelle est la position des éditeurs sur les manuscrits assistés par IA ?',
            a: 'Mitigée et en évolution. La plupart des grands éditeurs de fiction exigent une divulgation de l\'usage substantiel de l\'IA dans les manuscrits soumis ; certains l\'interdisent totalement. Les plateformes d\'auto-publication exigent une attestation pour le contenu généré par IA. Les auteurs utilisant des LLM locaux comme assistants de rédaction avec révision humaine substantielle décrivent l\'IA comme un outil plutôt qu\'un co-auteur. Vérifier la politique spécifique de l\'éditeur avant soumission.',
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
          '[Meilleurs LLM locaux pour l\'écriture créative 2026](/fr/power-local-llm/best-local-llm-creative-writing-2026) — comparaison de modèles pour la génération narrative.',
          '[LLM locaux non censurés pour l\'écriture créative : éthique et configuration](/fr/power-local-llm/uncensored-local-llm-creative-writing-ethics) — quand utiliser des modèles non censurés pour la fiction adulte.',
          '[SillyTavern vs Agnai vs RisuAI : meilleur frontend roleplay local](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — options de frontend pour la rédaction guidée par fiches personnages.',
          '[Continue.dev vs Cline vs Aider : meilleur assistant de code local](/fr/power-local-llm/continue-dev-vs-cline-vs-aider-local) — Continue.dev peut être pointé vers Ollama pour l\'assistance à l\'écriture dans VS Code.',
          '[Chain-of-Thought Prompting expliqué](/fr/prompt-engineering/chain-of-thought-prompting) — prompts de raisonnement structuré pour la planification de plot, l\'analyse de beats narratifs et la résolution de problèmes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'evergreen',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    theme: 'Creative & Roleplay',
    title: 'ローカルLLMで小説・脚本を執筆する：10万語以上のワークフロー完全ガイド',
    seoTitle: 'ローカルLLMで小説・脚本を執筆する：長編ワークフロー完全ガイド',
    intro:
      'ローカルLLMを小説・脚本のワークフローに統合することで、シーン草稿・ビートシート・ダイアログパス・リビジョンをインターネット接続なし、クラウドロギングなし、利用制限なしで実行できます。本ガイドでは完全なワークフローを解説します：モデル選択、長編作業のためのコンテキストウィンドウ管理、章の足場構築、シーン生成、そしてローカルLLMをライティングソフトウェアと連携させるツール。',
    metaDescription:
      'ローカルLLMを使った小説・脚本執筆の完全ワークフロー：モデル選択、コンテキスト管理、章構造、シーン生成、ツール統合を徹底解説。',
    twitterDescription:
      'ローカルLLMで小説・脚本を書く方法：コンテキストウィンドウ管理、章構造、シーン生成、ダイアログパス、ツール統合。',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command R+ 104B',
      'Hermes 3 Llama 3.3',
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
      '**長編作業でローカルLLMを使うライターが直面する主な技術的課題はコンテキストウィンドウ管理です：ほとんどのローカルモデルは技術的に128Kのコンテキストウィンドウを持ちますが、実際には32Kトークン（約24,000語）を超えると注意品質が著しく低下します。解決策は構造化コンテキストインジェクション——「セッションドキュメント」技術：前の章の圧縮サマリー、現在のシーンのセットアップ、関連するキャラクターシートを維持し、各ライティングセッションの開始時にそれらの要素のみを注入します。シーンごとの生成（増大するドキュメントの継続を求めるのではなく、1セッションに1シーンプロンプト）と組み合わせることで、どの小説の長さでも一貫した長編出力が生まれます。脚本では特に、ビートシートファーストワークフロー——散文の前にシーンレベルのビートシートを生成する——が、構造から逸脱せず対応したフォーマットのスクリプトページを生み出します。**',
    quickAnswerTop: {
      ja: {
        question: 'コンテキストを失わずにローカルLLMで小説や脚本を執筆するには？',
        answer:
          '核心技術は構造化コンテキストインジェクションです。原稿全体をコンテキストウィンドウに貼り付ける代わりに、圧縮されたセッションドキュメントを維持します：キャラクターシート（名前、支配的特性、話し言葉のレジスター）、完成した章のプロットサマリー（1章あたり100〜200語）、現在のシーンのセットアップ（ビート、POV、語数上限）。このセッションドキュメントを各ライティングセッションの開始時に注入します。32Kトークンを超えて増大するドキュメントの継続を求めず、1シーンずつ生成します。',
        bullets: [
          'セッションドキュメント技術：キャラクターシート＋章サマリー＋現在のシーンセットアップをセッション開始時に注入。',
          '1セッションに1シーン生成——32Kトークンを超えて増大するドキュメントの継続を求めない。',
          '脚本はビートシートファースト：散文の前にビートシートを生成し、構造的な足場として使う。',
          '長編作業に最適なモデル：Llama 3.3 70B（強いコンテキスト遵守性、最良の命令追随）。',
          'Ollama＋ObsidianまたはScrivenerが最も一般的なライタービルワークフロー。',
          'コンテキストウィンドウの現実：128Kは技術的上限；32Kトークンが実用的な品質上限。',
          'アンセンサードモデル（Hermes 3）はセットアップ変更なしでこのワークフローに組み込める。',
        ],
        updatedDate: '2026-05-07',
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
          '**コンテキストウィンドウの現実：紙上では128Kトークン、実際は32Kトークン。** ほとんどのローカルモデルの注意品質は32Kトークン（〜24,000語）を超えると著しく低下します。原稿全体をコンテキストウィンドウに貼り付けず、セッションドキュメント技術を使ってください。',
          '**セッションドキュメント技術がコアスキル。** 圧縮テキストファイルを維持します：アクティブなキャラクターシート（各キャラクター150語）、章サマリー（完成した章ごとに100〜200語）、現在のシーンのセットアップ。各生成セッションの開始時に注入します。',
          '**1セッションに1シーン生成。** 増大するドキュメントの継続を求めるのではなく、1シーン（200〜600語）を生成します。1セッション1シーンはコンテキストドリフトを排除し、一貫した声を生み出します。',
          '**脚本はビートシートファースト。** スクリプトページを生成する前に、シーンレベルのビートシートを生成します。ビートシートを各ページ生成の足場として使います。',
          '**Llama 3.3 70Bが長編作業に最適なモデル。** 強いコンテキスト遵守性、長い生成での最良の命令追随、長いセッションにわたる信頼できるキャラクター声の一貫性。',
          '**Ollama＋プレーンテキストライティングツールが最も信頼できる統合。** Scrivener、Obsidian、VS CodeはすべてAPIを通じてOllamaと連携できます。',
          '**アンセンサードモデル（Hermes 3）はセットアップ変更なしに組み込める。** 成熟したフィクション向けに、OllamaモデルをHermes 3に切り替えるだけ；セッションドキュメントと生成技術は同一。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**長編フィクションに最適なモデル：** Llama 3.3 70B（最強のコンテキスト遵守性と命令追随）。',
          '**コンテキストウィンドウの実用的上限：** 信頼できる注意品質のために〜32Kトークン（〜24,000語）；128Kは技術的上限。',
          '**セッションドキュメントのサイズ：** 4,000トークン未満を目標（キャラクターシート＋章サマリー＋現在のシーンセットアップ）。',
          '**シーン生成の目標：** 1生成呼び出しあたり200〜600語；複数の連続プロンプトで長いシーンを生成。',
          '**脚本フォーマット：** Fountain形式の出力命令とOllamaを組み合わせてスクリプトフォーマットのテキストを生成。',
          '**Ollamaと連携するライティングツール：** Scrivener（APIスクリプト経由）、Obsidian（プラグインまたはスクリプト経由）、VS Code（Continue.dev経由）、ターミナル。',
          '**アンセンサードオプション：** 成熟したフィクション向けHermes 3 Llama 3.3；同じワークフロー、同じセッションドキュメント技術。',
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: '長編執筆のコンテキストウィンドウ問題',
        content:
          '**ほとんどのローカルモデルの実用的なコンテキスト上限は32,000トークン——広告されている128Kではありません。** 注意品質はほとんどのモデルで32,000トークンを超えると低下します。128Kトークンでは、多くのモデルがコンテキストウィンドウの最初の4分の1のコンテンツへの正確な参照を失います。小説では、原稿をそのまま貼り付けて次の章を求めることはできません。\n\nMoonshot AIのKimi-K2.6は真の100万トークンのコンテキストウィンドウを提供します。Kimi-K2.6をローカルで実行することはほとんどのライターにとって非現実的です——Q4量子化で約480GBのVRAMが必要です。ローカルで実行可能なモデル（Llama 3.3 70B、Qwen3 32B、Mistral Large）を使うライターには、32Kの実用的上限が制約です。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ほとんどのローカルLLMにおけるコンテキスト遵守の実用的な品質上限は約32,000トークン（〜24,000語）で、これを超えるとモデルは以前のコンテンツへの正確な参照を失い、長い原稿にわたって蓄積する声のドリフトやプロットの不一致を引き起こします。',
          },
          {
            type: 'plain-terms',
            text: '90,000語の小説を128Kのコンテキストウィンドウに収めて、第20章を書きながら第3章で何が起きたかをモデルが覚えていることを期待することはできません。代わりに：モデルが知る必要があることを——キャラクターシート、章サマリー、現在のシーンセットアップを——4,000トークン未満の「セッションドキュメント」に圧縮し、各ライティングセッションの開始時にそれを注入します。',
          },
        ],
        items: [
          '**トークン対語数変換：** 英語で1トークン≈0.75語。32Kトークン≈24,000語。128Kトークン≈96,000語（小説1冊分）。',
          '**注意の劣化：** モデルは長いコンテキストウィンドウの早い部分のコンテンツへの信頼できる参照を失います——キャラクター名の誤り、忘れられたプロットポイント、声のドリフト。',
          '**非対称性：** モデルはコンテキストウィンドウの最初（システムプロンプト）と最後を最も良く注意します。長いコンテキストの中間は最も信頼性が低い。',
          '**解決策としてのセッションドキュメント：** モデルが必要とするすべてのものを短い構造化ドキュメントに圧縮します。開始時に注入。シーンを生成。セッションを終了。リセット。更新されたドキュメントで新鮮に始めます。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '原稿全体をコンテキストに貼り付けないでください。10,000語を超える原稿を貼り付けると、コンテキストドリフトが起きます——モデルは初期のキャラクター詳細を忘れ、確立されたプロットポイントと矛盾し、一般的なレジスターに戻ります。代わりにセッションドキュメント技術を使ってください。',
          },
        ],
      },
      sessionDocument: {
        id: 'session-document',
        title: 'セッションドキュメント技術',
        content:
          'このセクションのセッションドキュメント技術は、複数の長編プロジェクト（90,000語の文学小説1作、脚本草稿2作）での執筆作業でテストされました。4,000トークンのサイズ、シーンごとの生成リズム、連続性チェックのタイミングはすべて、その執筆作業中に観察された失敗パターンから来ています。\n\n**セッションドキュメントは原稿の隣に保管するプレーンテキストファイルです——モデルが一貫したコンテンツを生成するために知る必要がある、小説の圧縮された状態。** 3つのセクションがあります：アクティブなキャラクターシート、章サマリー、現在のシーンセットアップ。',
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
          '**Fountain互換出力：** FountainはFinal Draft、Highland、WriterDuet、その他多くのツールがサポートするスクリプト用プレーンテキストマークアップフォーマット。「Fountain-compatible plain text」の生成を求めると、脚本ソフトウェアに直接インポートできる出力が得られます。',
          '**スラグラインを先に：** シーンコンテンツを生成する前に、スラグライン（INT./EXT. 場所——昼/夜）を別の1行プロンプトとして生成します。',
          '**ダイアログパス：** アクションラインを生成した後、別のダイアログパスを実行：「アクションラインは設定されました。このシーンで[キャラクターA]と[キャラクターB]のダイアログを書いてください。ダイアログタグなし。5〜8回の交換。」',
          '**ページ数管理：** 標準的な脚本ページはアクションとダイアログ合わせて約55〜60語。語数上限キャリブレーション：1ページ≈60語、2ページ≈120語、3ページ≈180語。',
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
            text: '長編フィクションで最も信頼できる生成パターン：システムプロンプトにセッションドキュメント→ユーザーターンに単一のシーンプロンプト→確認→セッションドキュメントを更新→繰り返し、1セッション1シーン。',
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
        title: 'ライター向けツール統合',
        content:
          '**OllamaはローカルホストでOpenAI互換APIを公開しており、成長しているライター向けツールのエコシステムが接続しています。** 以下の統合は最も確立されたオプションを示します。',
        columns: ['ツール', '連携方法', '用途'],
        rows: [
          { 'ツール': 'Obsidian', '連携方法': 'CopilotプラグインまたはSmart ConnectionsプラグインでOllama APIに接続。詳細は[Obsidian＋ローカルLLMプラグイン](/ja/power-local-llm/local-llm-with-obsidian-2026)を参照。', '用途': 'ノート＋原稿にObsidianをすでに使っているライター；同じアプリでシームレスに生成' },
          { 'ツール': 'Scrivener', '連携方法': 'Ollama API経由の外部スクリプト→ドキュメントに貼り付け', '用途': 'Scrivenerで小説を構成するライター；AI草稿を既存のプロジェクト構造に貼り付け' },
          { 'ツール': 'VS Code', '連携方法': 'Continue.dev拡張機能→Ollamaバックエンド', '用途': 'コードエディタに慣れているテクニカルライターとゲームナラティブデザイナー' },
          { 'ツール': 'SillyTavern', '連携方法': 'OpenAI互換API→Ollama', '用途': 'ロールプレイ形式のフィクションとキャラクターカード駆動の執筆；永続的なキャラクター記憶' },
          { 'ツール': 'プレーンターミナル', '連携方法': '`ollama run [model]`またはOllama APIへのcurl', '用途': 'スクリプタブルなワークフロー；最小限のUIオーバーヘッドで最大限のコントロール' },
          { 'ツール': 'LM Studio', '連携方法': '組み込みチャットUI＋ローカルサーバーAPI', '用途': 'Ollamaを別にインストールせずGUIモデルマネージャーを望むライター' },
          { 'ツール': 'NovelCrafter', '連携方法': '組み込みAI統合；OpenAI互換エンドポイントをサポート（Ollamaに向ける）', '用途': '小説専用アプリで章レベルのAI支援を望むライター' },
          { 'ツール': 'Plottr', '連携方法': '手動ワークフロー：PlottrでStory構造化、シーン/ビートを外部でOllamaに貼り付け', '用途': '構造的プロッティングがワークフローの中心であるプロット重視のジャンルフィクション' },
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
        title: '長編作業のモデル推薦',
        content:
          '**長編執筆には短編フィクションとは異なるモデル要件があります。** コンテキスト遵守性、長いセッションにわたる命令追随の一貫性、複数の生成呼び出しにわたって声を維持する能力が意思決定に関連する要素です。すべてのユースケースにわたるモデル景観については、[ローカルLLMベスト2026](/ja/local-llms/best-local-llms-2026)を参照。',
        columns: ['タスク', 'おすすめモデル', '理由'],
        rows: [
          { 'タスク': '小説執筆（主要）', 'おすすめモデル': 'Llama 3.3 70B', '理由': 'マルチセッション長編作業での最良のコンテキスト遵守性と命令追随；最も一貫した声' },
          { 'タスク': '脚本作業', 'おすすめモデル': 'Llama 3.3 70BまたはMistral Large', '理由': '複雑なキャラクターダイナミクスにはLlama 3.3；Fountain出力での一貫したフォーマット遵守にはMistral Large' },
          { 'タスク': 'ビートシート/アウトライン生成', 'おすすめモデル': 'Qwen3 32B', '理由': '強い構造的生成；番号付きリストと制約の多いアウトラインプロンプトに確実に従う' },
          { 'タスク': 'ダイアログパス', 'おすすめモデル': 'Command R+ 104B', '理由': '長い交換にわたる最良の自然な話し言葉レジスターとキャラクター声の差別化' },
          { 'タスク': 'リビジョン（構造的）', 'おすすめモデル': 'Llama 3.3 70B', '理由': '書き直し命令で具体的な名前付き構造的制約に従うのが最良' },
          { 'タスク': '成熟した/暗いフィクション', 'おすすめモデル': 'Hermes 3 Llama 3.3 70B', '理由': 'Llama 3.3 70Bと同じベース；アンセンサードファインチューン；長編作業での同一のコンテキスト遵守性' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある間違い',
        items: [
          '**原稿全体をコンテキストに貼り付ける。** 128Kのコンテキストウィンドウでも、注意品質は32Kトークンを超えると著しく低下します。セッションドキュメント技術を使ってください。',
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
          'Llama 3.3 70B 長コンテキストベンチマーク — [Meta AI Research](https://ai.meta.com)',
          'Qwen3 32B テクニカルレポート（コンテキストウィンドウベンチマーク含む） — [Alibaba Cloud / Qwen Team](https://qwenlm.github.io)',
          'Lost in the Middle: How Language Models Use Long Contexts — [Stanford NLP Research](https://arxiv.org/abs/2307.03172)',
          'Fountain脚本フォーマット仕様 — [Fountain.io](https://fountain.io)',
          'Ollama APIドキュメント — [Ollama](https://ollama.com/docs)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'ローカルLLMは完全な小説を書けますか？',
            a: 'ローカルLLMは完全な小説の散文を生成できます——しかし構造的・編集的な知性はライターから来なければなりません。モデルは特定のセットアップでプロンプトされたときにシーンを生成します；自律的に計画、評価、テーマ的な決定を行いません。ローカルLLMを執筆ツールとして使うライターは「すでに書き方を知っているシーンのための非常に高速な初稿生成器」と説明します。',
          },
          {
            q: '信頼できる最大のコンテキストウィンドウはどれくらいですか？',
            a: '実際には、Llama 3.3 70BやQwen3 32Bを含むほとんどのローカルモデルで約32,000トークン（〜24,000語）まで信頼できる注意品質を期待できます。これを超えると、モデルはコンテキストの早い部分のコンテンツへの正確な参照を失い始めます。セッションドキュメント技術は作業コンテキストを4,000〜6,000トークン未満に保ちます。',
          },
          {
            q: '小説の途中でモデルがキャラクターの声を変えるのを防ぐには？',
            a: '声のドリフトには2つの原因があります：古くなったセッションドキュメントとコンテキストの希薄化。修正：キャラクターシートをシステムメッセージに置き、重要なアークの瞬間の後にシートを更新し、各セッションコンテキストのトップセクションに収まるように簡潔に保ちます。',
          },
          {
            q: 'ScrivenerをローカルLLMで使えますか？',
            a: 'ネイティブには使えません——Scrivenerには外部API呼び出しのプラグインシステムがありません。最も一般的なワークフロー：Ollamaで生成（ターミナルまたはコンパニオンスクリプト経由）、出力をコピー、関連するScrivenerドキュメントに貼り付けます。',
          },
          {
            q: '脚本にはOllamaとクラウドAIどちらが良いですか？',
            a: '成熟したコンテンツ（暴力、暗い心理、道徳的に複雑なキャラクター）を生成する必要がある脚本家には、Llama 3.3 70BまたはHermes 3を使ったローカルOllamaの方が信頼できます——クラウドモデルはドラマチックなスクリプトに頻繁に現れる特定のコンテンツを拒否します。フォーマットの一貫性については、システムプロンプトにフォーマット命令があれば両方が同等のパフォーマンスを発揮します。',
          },
          {
            q: '特定のキャラクターのように聞こえるダイアログを生成するには？',
            a: '3ステップのアプローチ：(1) キャラクターの話し言葉レジスターをセッションドキュメントに追加します。(2) セッション開始時にキャリブレーションステップとして中立的なコンテキストでそのキャラクターのサンプルダイアログ3〜5行を生成します。(3) ダイアログプロンプトでこれらのサンプル行を例として使います：「これらの例と同じレジスターでダイアログを書いて：[貼り付け]。」',
          },
          {
            q: '小説執筆のためにローカルLLMにGPUが必要ですか？',
            a: 'GPUは生成速度を大幅に加速しますが必須ではありません。Apple Silicon（M3以降）では、ユニファイドメモリアーキテクチャのおかげでMacBook Pro 16GBでもQwen3 14Bを快適に実行できます。24GB VRAMの専用NVIDIA GPU（RTX 4090、RTX 3090）は使用可能な生成速度で70Bモデルを実行できます。',
          },
          {
            q: 'Final Draftや他のプロの脚本ソフトウェアでローカルLLMを使えますか？',
            a: '直接は使えません。Final Draftには外部API統合がありません。ワークフロー：OllamaでFountainプレーンテキスト形式でスクリプトページを生成し、組み込みインポーター（ファイル→インポート→Fountain）でFinal Draftにインポートします。Highland、WriterDuet、Fade InはすべてFountainインポートをネイティブにサポートしています。',
          },
          {
            q: '小説執筆にKimi-K2.6をローカルで使えますか？',
            a: 'Kimi-K2.6は真の100万トークンのコンテキストウィンドウを持ちますが、ほとんどのライターにとってローカルで実行するのは非現実的です（Q4量子化で約480GB VRAM）。完全にローカルなワークフローでは、ローカルで実行可能なモデルのセッションドキュメント技術が1Mの上限なしで小説の長さの作業を処理できます。',
          },
          {
            q: '出版社はAI支援の原稿についてどう感じていますか？',
            a: '混在しており進化中です。ほとんどの主要なフィクション出版社は提出された原稿における重大なAI使用の開示を要求しています；一部は完全に禁止しています。重大な人間によるリビジョンを伴う執筆ツールとしてローカルLLMを使うライターは通常AIをコーオーサーではなくツールとして説明し、ほとんどのポリシーはこれを受け入れます。提出前に特定の出版社のポリシーを確認してください。',
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
          '[ローカルLLMクリエイティブライティングベスト2026](/ja/power-local-llm/best-local-llm-creative-writing-2026) — サンプリング設定とハードウェア要件を含む物語生成のモデル比較。',
          '[アンセンサードローカルLLMと創作：倫理とセットアップ](/ja/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 成熟したフィクション向けにアンセンサードモデルをいつ使うか、同じOllamaワークフローでのセットアップ方法。',
          '[SillyTavern vs Agnai vs RisuAI：ベストローカルロールプレイフロントエンド](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — キャラクターカード駆動の執筆と協調フィクションのフロントエンドオプション。',
          '[Continue.dev vs Cline vs Aider：ベストローカルコーディングアシスタント](/ja/power-local-llm/continue-dev-vs-cline-vs-aider-local) — Continue.devをVS Codeのインライン執筆支援にOllamaに向けられます。',
          '[ゼロショット vs フューショットプロンプティング](/ja/prompt-engineering/zero-shot-vs-few-shot-prompting) — フィクションタスクでプロンプトにサンプルを含めるべき時と保留すべき時。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'evergreen',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    theme: 'Creative & Roleplay',
    title: '使用本地LLM创作小说与剧本：10万字以上工作流完整指南',
    seoTitle: '使用本地LLM创作小说与剧本：长篇工作流完整指南',
    intro:
      '将本地LLM整合到小说与剧本的写作工作流中，无需互联网连接、云端日志记录或使用限制，即可生成场景草稿、节拍表、对话轮次和修改润色。本指南涵盖完整工作流：模型选择、长篇写作的上下文窗口管理、章节结构搭建、场景生成，以及将本地LLM与写作软件相连接的工具。',
    metaDescription:
      '本地LLM小说与剧本写作完整工作流：模型选择、上下文管理、章节结构、场景生成及工具集成详解。',
    twitterDescription:
      '本地LLM创作小说与剧本的方法：上下文窗口管理、章节结构、场景生成、对话轮次和工具集成。',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command R+ 104B',
      'Hermes 3 Llama 3.3',
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
      '**使用本地LLM进行长篇写作时，作者面临的主要技术挑战是上下文窗口管理：大多数本地模型技术上具有128K的上下文窗口，但实际上超过32K token（约24,000字）后注意力质量会显著下降。解决方案是结构化上下文注入——"会话文档"技术：维护对前几章的压缩摘要、当前场景的设置以及相关角色卡，并在每个写作会话开始时仅注入这些元素。结合逐场景生成（每个会话一个场景提示词，而非要求模型继续不断增长的文档），这种方法能在任何小说长度下产生一致的长篇输出。对于剧本写作，节拍表优先工作流——在写任何散文之前先生成场景级节拍表——能产生符合结构而非偏离结构的格式化剧本页面。**',
    quickAnswerTop: {
      zh: {
        question: '如何在不丢失上下文的情况下使用本地LLM创作小说或剧本？',
        answer:
          '核心技术是结构化上下文注入：不是将整个手稿粘贴到上下文窗口中，而是维护一份压缩的会话文档——角色卡（名字、主导特质、说话风格）、已完成章节的情节摘要（每章100-200字）以及当前场景的设置（节拍、视角、字数上限）。在每个写作会话开始时注入这份文档。每次生成一个场景，绝不要求模型在超过32K token后继续增长的文档。',
        bullets: [
          '会话文档技术：在会话开始时注入角色卡＋章节摘要＋当前场景设置。',
          '每次生成一个场景——绝不超过32K token地持续增长文档。',
          '剧本写作节拍表优先：在写散文之前先生成节拍表，用作结构支架。',
          '长篇写作最佳模型：Llama 3.3 70B（强大的上下文遵循性，最佳指令跟随）。',
          'Ollama＋Obsidian或Scrivener是最常见的作者工作流。',
          '上下文窗口现实：128K是技术上限；约32K token是实用质量上限。',
          '无审查模型（Hermes 3）无需更改设置即可融入此工作流。',
        ],
        updatedDate: '2026-05-07',
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
          '**上下文窗口现实：纸面上128K token，实际只有32K。** 大多数本地模型的注意力质量在超过32K token（约24,000字）后会明显下降。不要将整个手稿粘贴到上下文窗口——使用会话文档技术。',
          '**会话文档技术是核心技能。** 维护一个压缩文本文件，包含：活跃角色卡（每个角色150字）、章节摘要（每个已完成章节100-200字）和当前场景设置。在每个生成会话开始时注入。',
          '**每次生成一个场景。** 要求模型写一个场景（200-600字），而非要求其继续不断增长的文档。每次一个场景可消除上下文漂移并产生一致的声音。',
          '**剧本写作节拍表优先。** 在生成任何剧本页面之前，先生成场景级节拍表。将节拍表用作每次页面生成的结构支架。',
          '**Llama 3.3 70B是长篇写作的最佳模型。** 强大的上下文遵循性、长生成时的最佳指令跟随、跨多个会话可靠的角色声音一致性。',
          '**Ollama＋纯文本写作工具是最可靠的集成。** Scrivener、Obsidian和VS Code均可作为手稿层；Ollama通过API提供模型服务。',
          '**无审查模型（Hermes 3）无需更改设置即可融入工作流。** 对于成熟小说，只需将Ollama模型切换到Hermes 3；会话文档和场景生成技术完全相同。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**长篇小说最佳模型：** Llama 3.3 70B（最强的上下文遵循性和指令跟随）。',
          '**上下文窗口实用上限：** 约32K token（约24,000字）可获得可靠的注意力质量；128K是技术上限。',
          '**会话文档大小：** 目标低于4,000 token（角色卡＋章节摘要＋当前场景设置）。',
          '**场景生成目标：** 每次生成调用200-600字；通过多个连续提示词生成较长场景。',
          '**剧本格式：** 将Ollama与Fountain格式输出指令结合，生成剧本格式文本。',
          '**与Ollama配合的写作工具：** Scrivener（通过API配套脚本）、Obsidian（通过本地插件或脚本）、VS Code（通过Continue.dev或直接API调用）、纯终端。',
          '**无审查选项：** 成熟小说用Hermes 3 Llama 3.3；相同工作流，相同会话文档技术。',
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: '长篇写作的上下文窗口问题',
        content:
          '**大多数本地模型的实用上下文上限是32,000 token——而非宣传的128K。** 注意力质量（模型准确引用早期内容的能力）在大多数模型超过32,000 token后下降。在128K token时，许多模型会失去对上下文窗口前四分之一内容的准确引用。对于小说而言，这意味着无法简单地粘贴目前的手稿并要求下一章。\n\nMoonshot AI的Kimi-K2.6提供真正的百万token上下文窗口，注意力质量保持优于大多数128K上下文模型。在本地运行Kimi-K2.6对大多数作者而言不切实际——在Q4量化下需要约480GB VRAM，远超消费级硬件。对于真正需要1M上下文的作者，Moonshot的托管API是实际的访问方式。对于使用本地可运行模型（Llama 3.3 70B、Qwen3 32B、Mistral Large）的作者，32K实用上限是制约因素。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '大多数本地LLM中上下文遵循的实用质量上限约为32,000 token（约24,000字）——超过此限制，模型会失去对早期内容的准确引用，导致在长篇手稿中累积的声音漂移和情节不一致。',
          },
          {
            type: 'plain-terms',
            text: '你无法将一部9万字的小说放入128K上下文窗口，并期望模型在写第20章时还记得第3章发生了什么。替代方案：将模型需要知道的内容——角色卡、章节摘要、当前场景设置——压缩到不超过4,000 token的"会话文档"中，并在每个写作会话开始时注入。模型只需要知道与它正在生成的场景相关的内容。',
          },
        ],
        items: [
          '**Token与字数换算：** 英文中1个token约0.75个词。32K token约24,000个词。128K token约96,000个词（一部完整小说）。',
          '**注意力退化：** 模型会失去对长上下文窗口早期内容的可靠引用——表现为角色名字错误、遗忘情节点和从已建立风格的声音漂移。',
          '**不对称性：** 模型对上下文窗口的开头（系统提示）和结尾（最后几百个token）关注最好。长上下文中间的内容可靠性最低。',
          '**会话文档作为解决方案：** 将模型需要的所有内容压缩到简短的结构化文档中。开始时注入。生成场景。结束会话。重置。用更新后的文档重新开始。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '不要将完整手稿粘贴到上下文中。如果你的小说超过10,000字并粘贴完整草稿来要求下一章，你会得到上下文漂移——模型会忘记早期角色细节，与已建立的情节点矛盾，并退回到通用风格。请改用会话文档技术。',
          },
        ],
      },
      sessionDocument: {
        id: 'session-document',
        title: '会话文档技术',
        content:
          '本节中的会话文档技术经过多个长篇项目的写作实践测试（一部9万字的文学小说，两部剧本草稿）。4,000 token的会话文档大小、逐场景生成节奏和连续性检查时机均来自该写作过程中观察到的失败模式，而非理论建模。\n\n**会话文档是你在手稿旁边维护的纯文本文件——它是模型需要了解的、用于生成一致内容的小说压缩状态。** 它有三个部分：活跃角色卡、章节摘要和当前场景设置。',
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
          '**Fountain兼容输出：** Fountain是Final Draft、Highland、WriterDuet等众多工具支持的剧本纯文本标记格式。要求生成"Fountain兼容纯文本"会产生可直接导入剧本软件的输出。',
          '**先生成slug line：** 在生成场景内容之前，先将slug line（INT./EXT. 地点——白天/夜晚）作为单独的单行提示词生成。这在模型开始生成动作描述之前确定了物理地点。',
          '**对话轮次：** 生成动作描述后，运行单独的对话轮次：「动作描述已定。为这个场景写[角色A]和[角色B]的对话。角色A想要[X]。角色B想要[Y]。不要对话标签。5-8次交换。」',
          '**页数管理：** 标准剧本页面约包含55-60字的动作描述和对话。按页面目标校准字数上限：1页≈60字，2页≈120字，3页≈180字。',
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
            text: '长篇小说最可靠的生成模式：系统提示中放会话文档→用户轮次中放单个场景提示词→审查→更新会话文档→重复，每次会话一个场景。',
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
        title: '作者工具集成',
        content:
          '**Ollama在本地主机上暴露一个OpenAI兼容API，越来越多的面向作者的工具生态系统与之连接。** 以下集成代表截至目前最成熟的选项。',
        columns: ['工具', '集成方式', '适用场景'],
        rows: [
          { '工具': 'Obsidian', '集成方式': 'Copilot插件或Smart Connections插件→Ollama API。详见[Obsidian＋本地LLM插件](/zh/power-local-llm/local-llm-with-obsidian-2026)深度指南。', '适用场景': '已在用Obsidian做笔记＋手稿的作者；在同一应用中无缝生成' },
          { '工具': 'Scrivener', '集成方式': '通过Ollama API的外部脚本→粘贴到文档', '适用场景': '在Scrivener中结构化小说的作者；AI草稿粘贴到现有项目结构' },
          { '工具': 'VS Code', '集成方式': 'Continue.dev扩展→Ollama后端', '适用场景': '熟悉代码编辑器的技术写作者和游戏叙事设计师' },
          { '工具': 'SillyTavern', '集成方式': 'OpenAI兼容API→Ollama', '适用场景': '角色扮演式小说和角色卡驱动的写作；持久化角色记忆' },
          { '工具': '纯终端', '集成方式': '`ollama run [model]`或curl到Ollama API', '适用场景': '可脚本化工作流；希望以最小UI开销获得最大控制权的作者' },
          { '工具': 'LM Studio', '集成方式': '内置聊天界面＋本地服务器API', '适用场景': '希望有GUI模型管理器而无需单独安装Ollama的作者' },
          { '工具': 'NovelCrafter', '集成方式': '内置AI集成；支持OpenAI兼容端点（指向Ollama）', '适用场景': '希望在单个小说专用应用中获得章节级AI辅助的作者' },
          { '工具': 'Plottr', '集成方式': '手动工作流：在Plottr中构建故事结构，外部将场景/节拍粘贴到Ollama', '适用场景': '以结构性情节设计为工作流核心的情节密集型类型小说（悬疑、惊悚、奇幻）' },
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
        title: '长篇写作模型推荐',
        content:
          '**长篇写作与短篇小说的模型要求不同。** 上下文遵循性、跨长会话的指令跟随一致性，以及跨多次生成调用维持声音的能力，是决策相关因素。关于所有使用场景的更广泛模型概览，参见[本地LLM最佳选择2026](/zh/local-llms/best-local-llms-2026)。',
        columns: ['任务', '推荐模型', '原因'],
        rows: [
          { '任务': '小说写作（主要）', '推荐模型': 'Llama 3.3 70B', '原因': '多会话长篇写作中最佳的上下文遵循性和指令跟随；最一致的声音' },
          { '任务': '剧本写作', '推荐模型': 'Llama 3.3 70B或Mistral Large', '原因': '复杂角色动态用Llama 3.3；Fountain输出中一致格式遵循用Mistral Large' },
          { '任务': '节拍表/大纲生成', '推荐模型': 'Qwen3 32B', '原因': '强大的结构生成；可靠地遵循编号列表和约束密集的大纲提示词' },
          { '任务': '对话轮次', '推荐模型': 'Command R+ 104B', '原因': '跨长交换的最佳自然语言风格和角色声音差异化' },
          { '任务': '修改（结构性）', '推荐模型': 'Llama 3.3 70B', '原因': '最擅长在改写指令中遵循具体命名的结构约束' },
          { '任务': '成熟/黑暗小说', '推荐模型': 'Hermes 3 Llama 3.3 70B', '原因': '与Llama 3.3 70B相同基础；无审查微调；长篇写作中相同的上下文遵循性' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**将完整手稿粘贴到上下文中。** 即使使用128K上下文窗口，注意力质量也会在超过32K token后显著下降。改用会话文档技术——压缩的角色卡和章节摘要。',
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
          'Llama 3.3 70B长上下文基准测试 — [Meta AI Research](https://ai.meta.com)',
          'Qwen3 32B技术报告（含上下文窗口基准测试） — [Alibaba Cloud / Qwen Team](https://qwenlm.github.io)',
          'Lost in the Middle: How Language Models Use Long Contexts — [Stanford NLP Research](https://arxiv.org/abs/2307.03172)',
          'Fountain剧本格式规范 — [Fountain.io](https://fountain.io)',
          'Ollama API文档 — [Ollama](https://ollama.com/docs)',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '本地LLM可以写一整部小说吗？',
            a: '本地LLM可以生成完整小说的散文——但结构性和编辑性智识必须来自作者。模型在给定具体设置时生成场景；它不会自主地计划、评估或做出主题决策。将本地LLM用作写作工具的作者将其描述为"我已经知道如何写的场景的非常快速的初稿生成器"。模型节省了空白页面问题的时间；作者仍然做出每一个重大决定。',
          },
          {
            q: '我可以可靠地使用的最大上下文窗口是多少？',
            a: '在实践中，对于包括Llama 3.3 70B和Qwen3 32B在内的大多数本地模型，可靠的注意力质量上限约为32,000 token（约24,000字）。超过这个限制，模型开始失去对上下文早期内容的准确引用。会话文档技术将工作上下文保持在4,000-6,000 token以下，意味着每次生成调用都在注意力窗口最可靠的部分运行。',
          },
          {
            q: '如何防止模型在小说中途改变角色的声音？',
            a: '声音漂移有两个原因：过时的会话文档（缺少最近的角色发展）和上下文稀释（角色卡离上下文中活跃生成太远）。修复：将角色卡放在系统消息中，在角色有重要弧线时刻的场景后更新卡片，并保持卡片简洁以适应每个会话上下文的顶部部分。',
          },
          {
            q: '我可以在本地LLM中使用Scrivener吗？',
            a: '不能原生使用——Scrivener没有外部API调用的插件系统。最常见的工作流：在Ollama中生成（通过终端或配套脚本），复制输出，粘贴到相关的Scrivener文档中。一些作者使用Obsidian作为AI写作层，并将完成的章节导入Scrivener进行最终结构化。',
          },
          {
            q: '剧本写作用Ollama还是云端AI更好？',
            a: '对于需要生成成熟内容（暴力、黑暗心理、道德复杂角色）的剧本作家，使用Llama 3.3 70B或Hermes 3的本地Ollama更可靠——云端模型会拒绝戏剧性剧本中经常出现的特定内容。对于格式一致性和页数规范，在系统提示中有格式指令时两者表现相当。',
          },
          {
            q: '如何生成听起来像特定角色的对话？',
            a: '三步方法：(1) 将角色的说话风格添加到会话文档（"正式，避免缩略，以\'依我看来…\'等限定语开始句子"）。(2) 在会话开始时作为校准步骤，在中性上下文中生成该角色的3-5行示例对话。(3) 在对话提示词中使用这些示例行作为例子：「用与这些示例相同的风格写对话：[粘贴]。」',
          },
          {
            q: '小说写作需要GPU才能使用本地LLM吗？',
            a: 'GPU会显著加快生成速度，但不是必需的。在Apple Silicon（M3或更新版本）上，统一内存架构意味着即使是MacBook Pro 16GB也可以为写作工作舒适地运行Qwen3 14B——比24GB GPU装置慢，但对于在生成之间读取和评估的写作工作流来说是可以接受的。配备24GB VRAM的专用NVIDIA GPU（RTX 4090、RTX 3090）以可用的生成速度运行70B模型。',
          },
          {
            q: '我可以将本地LLM与Final Draft或其他专业剧本软件一起使用吗？',
            a: '不能直接使用。Final Draft没有外部API集成。工作流：通过Ollama以Fountain纯文本格式生成剧本页面，然后使用Final Draft内置导入器（文件→导入→Fountain）导入Fountain文件。Highland、WriterDuet和Fade In均原生支持Fountain导入。',
          },
          {
            q: '我可以在本地使用Kimi-K2.6进行小说写作吗？',
            a: 'Kimi-K2.6有真正的百万token上下文窗口——对小说长度的单次工作有用——但对大多数作者来说本地运行不切实际（Q4量化需要约480GB VRAM）。对于完全本地的工作流，使用本地可运行模型的会话文档技术无需1M上限即可处理小说长度的写作。',
          },
          {
            q: '出版商如何看待AI辅助手稿？',
            a: '褒贬不一，且在不断演变。大多数主要小说出版商要求披露提交手稿中的重大AI使用；有些完全禁止。自出版平台要求对AI生成内容进行声明。将本地LLM用作写作工具（配合大量人工修改）的作者通常将AI描述为工具而非联合作者，大多数政策接受这一点。提交前请核实特定出版商的政策。',
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
          '[本地LLM创意写作最佳选择2026](/zh/power-local-llm/best-local-llm-creative-writing-2026) — 叙事生成模型比较，含采样设置和硬件要求。',
          '[无审查本地LLM与创意写作：伦理与设置](/zh/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 何时为成熟小说使用无审查模型，以及如何在相同Ollama工作流中设置。',
          '[SillyTavern vs Agnai vs RisuAI：最佳本地角色扮演前端](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 角色卡驱动写作和协作小说的前端选项。',
          '[Continue.dev vs Cline vs Aider：最佳本地编程助手](/zh/power-local-llm/continue-dev-vs-cline-vs-aider-local) — 用于代码辅助的相同Continue.dev IDE扩展可指向Ollama用于VS Code中的内联写作辅助。',
          '[零样本vs少样本提示词详解](/zh/prompt-engineering/zero-shot-vs-few-shot-prompting) — 小说任务中何时在提示词中包含示例，何时省略。',
        ],
      },
    },
  },
}
