// Power Local LLM — How to Run a Local LLM for Screenwriting and Novel Drafting (2026)
// Slug: local-llm-screenwriting-and-novel-drafting
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
    title: 'How to Run a Local LLM for Screenwriting and Novel Drafting (2026)',
    seoTitle: 'Local LLM for Screenwriting and Novel Drafting: Full Guide 2026',
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
          '**The practical context limit for most local models is 32K tokens — not the 128K advertised.** Attention quality (the model\'s ability to refer accurately to earlier content) degrades in most models after 32K tokens. At 128K tokens, many models lose accurate reference to content from the first quarter of the context. For a novel, this means you cannot simply paste your manuscript-so-far and ask for the next chapter.',
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
          '**The session document is a plain-text file you maintain alongside your manuscript — it is the compressed state of your novel that the model needs to know to generate consistent content.** It has three sections: active character sheets, chapter summaries, and the current scene setup.',
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
          { 'Tool': 'Obsidian', 'Integration': 'Copilot plugin or Smart Connections plugin → Ollama API', 'Best For': 'Writers who already use Obsidian for notes + manuscript; seamless same-app generation' },
          { 'Tool': 'Scrivener', 'Integration': 'External script via Ollama API → paste into document', 'Best For': 'Writers who structure novels in Scrivener; AI drafts pasted into the existing project structure' },
          { 'Tool': 'VS Code', 'Integration': 'Continue.dev extension → Ollama backend', 'Best For': 'Technical writers and game narrative designers comfortable in a code editor' },
          { 'Tool': 'SillyTavern', 'Integration': 'OpenAI-compatible API → Ollama', 'Best For': 'Roleplay-style fiction and character-card-driven drafting; persistent character memory' },
          { 'Tool': 'Plain terminal', 'Integration': '`ollama run [model]` or curl to Ollama API', 'Best For': 'Scriptable workflows; writers who want maximum control with minimal UI overhead' },
          { 'Tool': 'LM Studio', 'Integration': 'Built-in chat UI + local server API', 'Best For': 'Writers who want a GUI model manager without installing Ollama separately' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The simplest integration that works for most writers is Obsidian + the Copilot plugin pointed at Ollama. Your session document lives in an Obsidian note, your manuscript chapters live in the same vault, and you generate directly in the same app without switching contexts. The Copilot plugin passes selected text or the current note to Ollama and returns the completion inline.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Model Recommendations for Long-Form Work',
        content:
          '**Long-form drafting has different model requirements than short-form fiction.** Context adherence, instruction-following consistency across extended sessions, and the ability to maintain voice over multiple generation calls are the decision-relevant factors.',
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
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local LLM Prompts for Fiction Writers: Templates & Techniques](/power-local-llm/local-llm-prompts-for-fiction-writers) — scene-writing, dialogue, character, worldbuilding, and style transfer templates that work within the session document workflow.',
          '[Best Local LLMs for Creative Writing 2026](/power-local-llm/best-local-llm-creative-writing-2026) — model comparison for narrative generation including sampling settings and hardware requirements.',
          '[Uncensored Local LLMs for Creative Writing: Ethics and Setup](/power-local-llm/uncensored-local-llm-creative-writing-ethics) — when to use uncensored models for mature fiction and how to set them up in the same Ollama workflow.',
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — frontend options for character-card-driven drafting and collaborative fiction.',
          '[Continue.dev vs Cline vs Aider: Best Local Coding Assistant](/power-local-llm/continue-dev-vs-cline-vs-aider-local) — the same Continue.dev IDE extension used for code assistance can be pointed at Ollama for inline writing assistance in VS Code.',
          '[Chain-of-Thought Prompting Explained](/prompt-engineering/chain-of-thought-prompting) — structured reasoning prompts applicable to plot planning, story beat analysis, and narrative problem-solving.',
        ],
      },
    },
  },
}
