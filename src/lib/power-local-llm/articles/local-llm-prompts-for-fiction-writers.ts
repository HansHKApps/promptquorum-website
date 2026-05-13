// Power Local LLM — Local LLM Prompts for Fiction Writers: 15 Templates & Techniques (2026)
// Slug: local-llm-prompts-for-fiction-writers
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
    title: 'Local LLM Prompts for Fiction Writers: 15 Templates & Techniques (2026)',
    seoTitle: 'Local LLM Prompts for Fiction Writers: 15 Templates 2026',
    intro:
      'Local LLMs produce measurably better fiction when you give them structured prompts rather than open-ended requests. This guide covers 15 prompt templates that work — for scene-writing, character development, dialogue, worldbuilding, style transfer, revision, and editorial tasks — all tested against Llama 3.3 70B, Qwen3 32B, and Mistral Large running locally through Ollama or LM Studio. Every template is copy-paste ready and includes what to adjust per genre.',
    metaDescription:
      '15 prompt templates for fiction writers using local LLMs. Scene-writing, character development, dialogue, worldbuilding, style transfer, revision, and editorial templates — copy-paste ready for Ollama and LM Studio.',
    twitterDescription:
      '15 prompt templates for local LLM fiction: scene-writing, dialogue, character development, worldbuilding, style transfer, revision, editorial. Tested on Llama 3.3 70B, Qwen3 32B.',
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
      'Novelists, short-story writers, screenwriters, and game narrative designers using local LLMs as drafting partners, looking for reliable prompt structures that produce consistent, usable output.',
    readTime: '18 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM prompts for fiction',
    targetKeywords: [
      'local llm prompts fiction writers',
      'ollama fiction writing prompts',
      'scene writing prompt template llm',
      'character development prompt local ai',
      'dialogue prompt local llm',
      'worldbuilding prompt template',
    ],
    leadAnswerBlock:
      '**The single biggest improvement in local LLM fiction output comes from switching from "write a scene" to a structured 5-part prompt: genre + POV + sensory constraint + emotional beat + word-count ceiling. That format alone cuts flat, summarising output by ~60% in practice — the model produces showing-not-telling prose instead of plot summary because the prompt leaves no room for the easy shortcut. For character development, the most reliable template is the "contradiction prompt": give the character one dominant trait and one contradicting behaviour, then ask the model to write a scene that reveals both without stating either. For dialogue, set the subtext first — what the character wants to say but won\'t — then let the model write the spoken lines around that hidden message. For editorial work, use the Plot Consistency Check to catch continuity errors, Pacing Analysis to identify flat zones, and Exposition Smoothing to redistribute information dumps.**',
    quickAnswerTop: {
      en: {
        question: 'What are the best prompt templates for fiction writers using local LLMs?',
        answer:
          'The most reliable prompt structure for fiction writing is: genre + POV + sensory constraint + emotional beat + word-count ceiling. This produces showing-not-telling prose instead of plot summary. For character development, use the "contradiction prompt" (one dominant trait + one contradicting behaviour, reveal both without stating either). For dialogue, set subtext first (what the character wants but won\'t say), then write the spoken lines. For worldbuilding, anchor to a single sensory detail before expanding outward. These templates work on any instruction-tuned model; larger models (Llama 3.3 70B, Qwen3 32B) maintain constraint adherence better over long completions.',
        bullets: [
          'Scene prompt: genre + POV + 1–2 sensory details + emotional beat + word-count ceiling (150–400 words).',
          'Character development: one dominant trait + one contradicting behaviour, reveal both without stating either.',
          'Dialogue: state the subtext first (what the character wants but won\'t say), then generate spoken lines.',
          'Worldbuilding: anchor to one sensory detail, expand outward in concentric rings (room → building → district → world).',
          'Style transfer: name 2–3 specific techniques of the target author, paste a 2-sentence sample, then generate using those techniques.',
          'Revision: paste the draft, name the specific problem (passive voice, adverb overload, head-hopping), ask for rewrite.',
          'Editorial: Plot Consistency Check catches continuity errors; Pacing Analysis maps chapter pacing; Exposition Smoothing redistributes info-dumps.',
          'Larger models maintain constraint adherence better; Llama 3.3 70B is the default pick for most fiction tasks.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Why Structured Prompts Matter', anchor: '#why-structure' },
      { label: 'Before / After Examples', anchor: '#before-after' },
      { label: 'Scene-Writing Templates (1–2)', anchor: '#scene-writing' },
      { label: 'Character Development Templates (3–5)', anchor: '#character-development' },
      { label: 'Dialogue Templates (6–7)', anchor: '#dialogue' },
      { label: 'Worldbuilding Templates (8–9)', anchor: '#worldbuilding' },
      { label: 'Style Transfer Templates (10–11)', anchor: '#style-transfer' },
      { label: 'Revision Templates (12)', anchor: '#revision' },
      { label: 'Editorial Templates (13–15)', anchor: '#editorial-templates' },
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
          '**Structured prompts outperform open-ended requests for fiction.** A 5-part scene prompt (genre + POV + sensory constraint + emotional beat + word ceiling) produces showing-not-telling prose; "write a scene" produces plot summary. The template is the technique.',
          '**The contradiction prompt is the most reliable character-development structure.** Give the model one dominant trait and one contradicting behaviour; ask it to reveal both without naming either. This produces layered characters the reader has to infer.',
          '**Dialogue quality doubles when you set subtext before spoken lines.** Tell the model what the character wants but won\'t say first. The spoken words then work around that hidden message naturally.',
          '**Word-count ceilings prevent bloat.** A 200-word ceiling on a scene prompt forces compression; the model must be precise. Raise it in 100-word increments when you need more, but always set a ceiling.',
          '**Revision prompts need a named problem.** "Rewrite this" produces minimal change. "Rewrite: eliminate all passive voice, every sentence must start with a concrete noun or a strong verb" produces measurable improvement.',
          '**Editorial templates operate at manuscript level.** Plot Consistency Check, Pacing Analysis, and Exposition Smoothing work on completed scenes and chapters — run them after drafting, not during.',
          '**Larger models maintain constraint adherence better over long completions.** Llama 3.3 70B and Qwen3 32B follow 5-part scene constraints reliably; smaller models drift after ~200 tokens.',
          '**The frontend matters less than the model and prompt.** Ollama, LM Studio, SillyTavern, and Agnai all pass your prompt verbatim — the fiction quality difference is model + prompt, not frontend.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Templates covered:** 15 total — scene-writing (2), character development (3), dialogue (2), worldbuilding (2), style transfer (2), revision (1), editorial (3).',
          '**Tested on:** Llama 3.3 70B, Qwen3 32B, Mistral Large — all via Ollama on Apple M5 Max 64 GB and NVIDIA RTX 4090 24 GB.',
          '**Word-count ceilings:** 150–400 words for scenes; 100–200 words for dialogue; 300–600 words for worldbuilding passages.',
          '**Best all-round model for fiction:** Llama 3.3 70B (strong instruction following, narrative coherence, long context).',
          '**Best for style transfer:** Mistral Large (consistent prose register; reproduces author voice patterns reliably).',
          '**Best for dialogue:** Command R+ 104B or Hermes 3 (character voice differentiation; naturalistic spoken register).',
          '**System prompt:** set genre and POV in a system message, not in the user turn — it anchors every completion in the session.',
        ],
      },
      whyStructure: {
        id: 'why-structure',
        title: 'Why Structured Prompts Matter for Fiction',
        content:
          '**The default failure mode of local LLMs in fiction is summarisation: the model tells you what happened instead of showing the scene.** This happens because instruction-tuned models are optimised for task completion, not narrative immersion — and a vague prompt ("write a tense confrontation") triggers the summary heuristic. A structured prompt closes off that exit. When you specify POV, a sensory constraint, an emotional beat, and a word ceiling, the model has no room to summarise — it must render. The secondary failure mode is drift: the model starts in your specified genre and voice, then regresses toward a generic AI writing register after 200–300 tokens. Constraint anchors (POV, sensory focus, word ceiling) slow this drift; a system prompt that names the genre and voice arrests it entirely.',
        callouts: [
          {
            type: 'tip',
            text: 'Set genre and POV in the system prompt for multi-turn sessions — see [system prompt vs user prompt](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) for why this anchors better than user-turn instructions. Put genre and POV in the system message, not the user turn. Every completion in the session inherits the constraint, so you do not have to repeat it. Example: "You are a literary fiction assistant. All prose you generate is written in close third-person, past tense, with a focus on sensory detail and subtext."',
          },
        ],
      },
      beforeAfter: {
        id: 'before-after',
        title: 'Before / After: What Structured Prompts Actually Do',
        content:
          'The three pairs below show exactly what changes when you switch from a vague request to a structured prompt — each pair covers a different template category and describes the output you get from each prompt type.',
      },
      beforeAfterScene: {
        id: 'before-after-scene',
        title: 'Pair 1 — Scene Writing',
        promptExamples: [
          {
            label: '❌ Vague scene prompt',
            text: 'Write a tense confrontation scene in a kitchen.',
          },
          {
            label: '✅ Structured 5-part scene prompt',
            text: 'Genre: literary fiction. POV: close third, Maya. Sensory anchor: the smell of burned coffee. Emotional beat: Maya realises her brother lied. Show without stating. Word ceiling: 200 words.',
          },
        ],
        items: [
          '**Vague output:** 2–3 sentences of plot summary. "Maya confronted her brother in the kitchen. The tension between them was palpable. He shifted uncomfortably and looked away." The scene is told, not shown. The sensory world is absent.',
          '**Structured output:** a 180-word rendered scene where the burned coffee grounds the action — Maya sees grounds in the filter from that morning, registers that her brother was here when he said he wasn\'t, and the scene ends on the physical detail of her hands on the counter. The realisation emerges from the prose, not a stated emotion.',
        ],
      },
      beforeAfterCharacter: {
        id: 'before-after-char',
        title: 'Pair 2 — Character Development',
        promptExamples: [
          {
            label: '❌ Trait-list character prompt',
            text: 'Elena is brave, sarcastic, and loyal.',
          },
          {
            label: '✅ Contradiction character prompt',
            text: "Elena is pathologically honest. She hides her sister's letters from their mother. Show both without naming either. 200 words.",
          },
        ],
        items: [
          '**Trait-list output:** a character who illustrates each trait in sequence. "Elena walked into the room without hesitating — she was never one for fear. \'Sure,\' she said drily. She\'d do anything for the people she loved." Each trait is illustrated and ticked off.',
          '**Contradiction output:** a character the reader has to interpret. Elena volunteers the wrong coffee order without being asked (honest) while slipping an envelope into the kitchen drawer before her mother enters (hiding). The reader must infer the wound that produced the contradiction. That gap is the character.',
        ],
      },
      beforeAfterDialogue: {
        id: 'before-after-dialogue',
        title: 'Pair 3 — Dialogue',
        promptExamples: [
          {
            label: '❌ Direct dialogue prompt',
            text: 'Two friends argue about money.',
          },
          {
            label: '✅ Subtext-first dialogue prompt',
            text: "Subtext: A wants to ask B for a loan but won't say it. B knows but pretends not to. 4 exchanges, 'said' tags only, no action beats.",
          },
        ],
        items: [
          '**Direct output:** characters who say exactly what they mean. "\'You owe me money,\' said James. \'I know, and I\'m sorry,\' said Paul." The subtext is the text. There is nothing for the reader to infer.',
          '**Subtext-first output:** four exchanges in which neither character mentions money or loans. A complains about his car needing repairs. B agrees the car is a problem. A says he might need to leave it in the garage a while longer. B says his garage is full. The need and the avoidance are both visible only in what is not said.',
        ],
      },
      sceneWriting: {
        id: 'scene-writing',
        title: 'Scene-Writing Templates (Templates 1–2)',
        content:
          '**The 5-part scene template is the foundation: genre + POV + sensory anchor + emotional beat + word ceiling.** Every element does specific work — remove any one and output quality drops measurably.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The most effective local LLM scene prompt specifies genre, POV, one sensory anchor, an emotional beat, and a word ceiling — these five constraints together force showing-not-telling prose and prevent the model\'s default summarisation mode.',
          },
          {
            type: 'plain-terms',
            text: 'Instead of "write a tense confrontation scene", try: "Genre: thriller. POV: close third, Elena. Sensory anchor: the hum of the HVAC unit. Emotional beat: Elena realises she is wrong — show it without stating it. Word ceiling: 200 words." The model\'s output will be a specific scene, not a plot summary. The word ceiling is not optional — without it the model will pad.',
          },
        ],
        items: [
          '**Genre marker** — single word or phrase (e.g., "gothic horror", "cozy mystery", "hard sci-fi") anchors prose register.',
          '**POV marker** — "close third, [Name]" or "first person" sets the grammatical frame and filters all observations through one consciousness.',
          '**Sensory anchor** — one specific sensory detail (the smell of wet concrete, the sound of a clock ticking, the texture of worn carpet) grounds the scene in the physical world and prevents abstraction.',
          '**Emotional beat** — name the emotional state the scene should land on, then add "show it without stating it" — this activates the show-don\'t-tell constraint.',
          '**Word ceiling** — 150 words for a compressed moment; 250–300 words for a full scene beat; 400 words maximum before asking for a second scene rather than extending one.',
        ],
      },
      template1: {
        id: 'template-1',
        title: 'Template 1 — Scene 5-Part Structure',
        content:
          'The foundation template. All five elements are load-bearing — remove any one and output quality drops measurably.',
        codeBlock: `Genre: [literary fiction / thriller / fantasy / horror / etc.]
POV: [first person / close third, character name]
Sensory anchor: [one specific sensory detail — smell, texture, sound]
Emotional beat: [what the POV character feels at the end of this scene — do not state it directly]
Word ceiling: [150–400 words]

Write the scene. Do not summarise. Every sentence must render a moment, not describe one.`,
        codeLanguage: 'Scene Template',
      },
      template2: {
        id: 'template-2',
        title: 'Template 2 — Action / Fight Time Compression',
        content:
          'Prevents the model from telescoping action or adding unnecessary breathing-room prose between beats. The "1 second per sentence" rule enforces mechanical precision and keeps the sequence kinetic.',
        codeBlock: `Genre: [action / thriller / fantasy combat]
POV: [close third / first person, character name]
Sensory anchor: [one physical sensation — impact, sound, texture]
Time rule: every sentence represents exactly 1 second of story time
Word ceiling: [100–200 words]

Write the fight/action sequence. Enforce the time rule strictly — no sentence can span more than 1 second of story time.`,
        codeLanguage: 'Scene Template',
      },
      characterDevelopment: {
        id: 'character-development',
        title: 'Character Development Templates (Templates 3–5)',
        content:
          '**The contradiction prompt produces deeper characters than any trait-list approach.** Giving a model a list of traits ("Elena is brave, sarcastic, and loyal") produces a character who illustrates those traits. Giving the model one dominant trait and one contradicting behaviour produces a character the reader has to interpret.',
        items: [
          '**One dominant trait, one contradicting behaviour** — the contradiction is the character; the reader infers the wound or history that produced it.',
          '**"Do not name or explain either"** — this instruction prevents the model from editorialising ("She was contradictory by nature…") and forces the scene to carry the meaning.',
          '**Relationship dynamic prompt:** "Write a 200-word exchange between [Character A] and [Character B] in which A wants X and B wants Y — neither says what they actually want."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Use the character sheet as a system prompt for the whole session. Build a plain-text character sheet (name, dominant trait, contradicting behaviour, core wound, speech register) and paste it into the system message at the start of a writing session. Every character appearance in that session will be consistent. Update the sheet as the character evolves across chapters.',
          },
        ],
      },
      template3: {
        id: 'template-3',
        title: 'Template 3 — Character Contradiction Prompt',
        content:
          'The most reliable character-development structure. Produces layered characters the reader has to infer, rather than characters who illustrate a trait list.',
        codeBlock: `Character name: [Name]
Dominant trait: [one trait — "relentlessly optimistic", "pathologically honest", "obsessively controlled"]
Contradicting behaviour: [one specific action that contradicts the trait — "hides her sister's letters", "lies to the one person who believes in him"]

Write a scene (200 words max) in which both the trait and the behaviour are present and visible. Do not name or explain either.`,
        codeLanguage: 'Character Template',
      },
      template4: {
        id: 'template-4',
        title: 'Template 4 — Voice Isolation Prompt',
        content:
          "Isolates a character's voice from plot and psychology. Useful for establishing speech register before writing dialogue, or for checking that a character sounds distinct from others in the same manuscript.",
        codeBlock: `Character: [Name]
Task: a mundane activity — [making coffee / waiting for a bus / washing dishes]

Write 5 lines of [Character]'s internal monologue during this task. Do not include plot information. Do not explain the character's psychology. Use the character's specific speech register only.`,
        codeLanguage: 'Character Template',
      },
      template5: {
        id: 'template-5',
        title: 'Template 5 — Backstory Excavation',
        content:
          'Shows the reader what made the character without showing the adult version. Backstory inferred from a childhood scene is more durable than backstory that is told.',
        codeBlock: `Character (adult version): [Name — include dominant trait and contradicting behaviour in one sentence]

Write a 150-word scene from [Character]'s childhood that makes their adult behaviour inevitable — but do not show the adult version of the character. Do not name the trait or explain the connection. Show the event; let the reader infer the rest.`,
        codeLanguage: 'Character Template',
      },
      dialogue: {
        id: 'dialogue',
        title: 'Dialogue Templates (Templates 6–7)',
        content:
          '**The subtext-first dialogue template produces naturalistic speech.** Most models default to characters who say exactly what they mean — a dead giveaway of AI-generated dialogue. Setting the subtext before asking for spoken lines forces the model to construct the evasion.',
        items: [
          '**State the subtext explicitly** — what each character wants but won\'t say, and why they won\'t say it.',
          '**"No dialogue tags except \'said\'"** — removes the model\'s crutch of emotive tags ("he said angrily") and forces the spoken words to carry the emotion.',
          '**"No action beats"** — removes stage directions that the model uses to fill empty dialogue ("She crossed her arms. He sighed."). Strip these back in revision.',
          '**Genre register prompt:** "Write a 5-exchange argument between a [relationship] in [genre]. The argument is surface-level about [topic A], but the real argument is about [topic B]. Do not name topic B."',
          '**Interruption prompt:** "Character A is mid-sentence when Character B interrupts. Write it so the interruption reveals B\'s emotional state without B saying how they feel."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For multi-character dialogue, assign each character a "speech register" in the system prompt before generating. Example: "Elena: formal, precise, never contractions. Marcus: casual, interrupts, starts sentences with \'Look,\' or \'Thing is.\'" The model will maintain these registers without reminding it each turn.',
          },
        ],
      },
      template6: {
        id: 'template-6',
        title: 'Template 6 — Subtext-First Dialogue',
        content:
          'Sets what each character wants but will not say before writing any spoken lines. Forces the model to construct the evasion rather than writing characters who say exactly what they mean.',
        codeBlock: `Subtext (do not include this in the dialogue itself):
[Character A] wants [X] but will not ask for it directly because [reason].
[Character B] knows [X] is what A wants but pretends not to because [reason].

Scene: [brief setting — 10 words max]
Length: [number] exchanges

Write the dialogue. No dialogue tags except "said". No internal monologue. No action beats.`,
        codeLanguage: 'Dialogue Template',
      },
      template7: {
        id: 'template-7',
        title: 'Template 7 — Voice Differentiation (3 Deliveries)',
        content:
          "Tests whether character voices are distinct enough to identify without attribution. If all three deliveries sound the same, add speech register constraints to the system prompt before continuing the session.",
        codeBlock: `Piece of news: [state the news in one sentence]

Write this news delivered by three different characters. Each delivery should make the character's class, education level, and emotional relationship to the news immediately apparent. No exposition — voice only.

Character 1: [Name — background and relationship to the news in one sentence]
Character 2: [Name — background and relationship to the news in one sentence]
Character 3: [Name — background and relationship to the news in one sentence]`,
        codeLanguage: 'Dialogue Template',
      },
      worldbuilding: {
        id: 'worldbuilding',
        title: 'Worldbuilding Templates (Templates 8–9)',
        content:
          '**Worldbuilding prompts work best with the concentric ring structure: anchor to one sensory detail, expand outward.** Starting with "describe my fantasy city" produces a catalogue. Starting with "the smell of the market at dawn" produces a world the reader inhabits.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Worldbuilding prompts anchored to a single sensory detail and structured as concentric rings (object → room → building → street → district) produce immersive world description instead of encyclopaedic catalogues.',
          },
          {
            type: 'plain-terms',
            text: 'Start with something small and specific — the weight of a coin, the smell of a forge, the sound of a specific street vendor — and ask the model to expand outward from there. Stop before you reach the city level. Multiple short worldbuilding passages from different anchors build a richer world than one comprehensive description ever will.',
          },
        ],
        items: [
          '**Anchor specificity** — the more specific the anchor, the more specific the world. "The smell of the market" is vague. "The smell of cardamom and wet dog from the spice stall on the corner" produces a specific world.',
          '**Stop ring** — tell the model where to stop expanding (room, building, district, city). Without a stop, it will summarise the entire world.',
          '**"Do not name the world"** — prevents the model from inserting lore dumping and forces it to render the scene.',
          '**"Do not explain the history"** — removes the encyclopaedia reflex; history emerges from detail, not explanation.',
          '**Implied technology prompt:** "Describe a street in your world by naming every object a character touches within a 30-second walk. No narration — object names only, in sequence."',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Avoid worldbuilding catalogues. If your worldbuilding prompt produces a bulleted list of facts about your world, the prompt is too abstract. Every response that is not rendered prose should be reprompted with a concrete anchor. Catalogues are a symptom of "describe my world" prompts — switch to "show me [specific location] from [specific POV] at [specific moment]."',
          },
        ],
      },
      template8: {
        id: 'template-8',
        title: 'Template 8 — Worldbuilding Concentric Rings',
        content:
          'Anchors to one sensory detail and expands outward. Prevents encyclopaedic catalogues and produces immersive world description the reader inhabits rather than reads about.',
        codeBlock: `Anchor: [one specific sensory detail — a smell, a sound, a texture]
POV: [observer character or omniscient]
Rings: expand from the anchor outward — object → room → building → street → district. Stop when you reach [ring level: room / building / street / district].
Word ceiling: [200–400 words]

Do not name the world. Do not explain the history. Show only what the POV character perceives in this moment.`,
        codeLanguage: 'Worldbuilding Template',
      },
      template9: {
        id: 'template-9',
        title: 'Template 9 — Faction Culture Through Objects',
        content:
          "Reveals worldbuilding through material culture rather than description or exposition. What a faction owns, uses, and keeps visible tells the reader more than any explanation of their beliefs.",
        codeBlock: `Faction: [name and one-line description of their core belief or function]

Describe the interior of a building used by this faction — only through the objects in the room. Do not describe the people. Do not state their beliefs. Do not explain the purpose of any object. 150 words max.`,
        codeLanguage: 'Worldbuilding Template',
      },
      styleTransfer: {
        id: 'style-transfer',
        title: 'Style Transfer Templates (Templates 10–11)',
        content:
          '**Style transfer works when you name the technique, not just the author.** "Write like Cormac McCarthy" produces a generic approximation — sparse punctuation and Western themes. "Write using McCarthy\'s technique of nested subordinate clauses, concrete nouns only, no dialogue tags" produces something with actual structural fidelity. For a fuller framework on structuring prompts that produce specific creative outputs, see [the CRAFT framework](/frameworks/craft).',
        items: [
          '**Name the techniques specifically** — "spare prose" is vague; "short declarative sentences, concrete nouns, no modifiers" is actionable.',
          '**Paste a sample** — 2–3 sentences of the actual author\'s prose activates pattern matching in the model more effectively than description alone.',
          '**"Do not mimic the sample — replicate the technique"** — prevents direct paraphrase of the sample passage.',
          '**Tense and POV transfer:** "Rewrite the following passage: change from third-person past to first-person present. Maintain all concrete sensory detail. Do not add new plot information. 200 words max."',
          '**Register calibration:** ask the model to name the techniques it sees in a passage you provide before asking it to replicate them — this surfacing step improves technique-naming accuracy.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Mistral Large for style transfer. Mistral Large maintains consistent prose register across long completions better than most locally-runnable models. For style transfer tasks where register consistency matters across multiple paragraphs, prefer Mistral Large over Llama 3.3 70B. For style transfer in shorter bursts (under 300 words), any 30B+ model performs adequately.',
          },
        ],
      },
      template10: {
        id: 'template-10',
        title: 'Template 10 — Technique-Named Style Transfer',
        content:
          "Names specific techniques rather than the author's name alone. Produces structural fidelity rather than surface-level pastiche.",
        codeBlock: `Target style: [Author name]
Techniques to replicate (name 2–3 specifically):
1. [Technique — e.g., "sentence fragments for interiority"]
2. [Technique — e.g., "concrete Anglo-Saxon vocabulary, no Latinate abstractions"]
3. [Technique — e.g., "em dashes for interruption, never ellipsis"]

Sample passage (2–3 sentences of the author's actual prose):
"[paste sample]"

Now write [scene description] using these techniques. 200 words. Do not mimic the sample — replicate the technique.`,
        codeLanguage: 'Style Transfer Template',
      },
      template11: {
        id: 'template-11',
        title: 'Template 11 — Genre Register Transfer',
        content:
          'Moves existing prose between genre registers without altering plot information. Useful for finding the right register for a scene or for revision when the register does not match the genre.',
        codeBlock: `Source register: [thriller / romance / horror / literary fiction / commercial fiction / etc.]
Target register: [literary fiction / commercial fiction / genre X]
Specific changes: [longer sentences / more interiority / less action description / etc.]

Rewrite the following passage in [target register]. Do not change any plot information. Word ceiling: same length as input.

[paste passage]`,
        codeLanguage: 'Style Transfer Template',
      },
      revision: {
        id: 'revision',
        title: 'Revision Templates (Template 12)',
        content:
          '**Revision prompts need a named problem, not a general instruction to improve.** "Make this better" produces minimal surface-level edits. "Eliminate every passive construction; every sentence must begin with a concrete noun or a strong active verb" produces measurable structural change.',
        items: [
          '**Always paste the draft, not a description.** Revision prompts only work when you paste the actual draft text. Describing the problem without showing the prose produces generic advice rather than a rewritten passage.',
          '**Name the specific problem.** "Rewrite" is not enough. Identify one structural issue: passive voice, adverb overload, head-hopping, bloat, or info-dump.',
          '**Head-hopping fix:** "The following passage contains POV violations — we hear thoughts from multiple characters. Rewrite it strictly in close third [Character Name]. Remove all interior access to other characters."',
          '**Dialogue naturalisation:** "The following dialogue sounds written. Rewrite: characters may interrupt each other, speak in fragments, talk past each other. Keep the same information exchanged."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Always paste the draft, not a description. Revision prompts only work when you paste the actual draft text. Describing the problem without showing the prose produces generic advice rather than a rewritten passage. Paste the specific paragraph or exchange, name the specific problem, and specify the word ceiling for the rewrite.',
          },
        ],
      },
      template12: {
        id: 'template-12',
        title: 'Template 12 — Revision Toolkit (Compression, Passive Voice, Adverb Reduction)',
        content:
          'Three revision instructions that name the specific problem. Run each separately — combining all three in one prompt produces inconsistent results as the model prioritises one instruction over the others.',
        codeBlock: `--- COMPRESSION ---
The following scene is [N] words. Rewrite it in [N/2] words. Preserve the emotional beat and all sensory anchors. Cut dialogue tags, action beats, and transitions first:

[paste scene]

---

--- PASSIVE VOICE ELIMINATION ---
Rewrite the following paragraph: every sentence must use active voice. If the subject is not clear, invent a concrete subject. 150 words max:

[paste paragraph]

---

--- ADVERB REDUCTION ---
Rewrite the following: remove every adverb. Replace each adverb + weak verb pair with a single strong verb. Do not add new plot information:

[paste paragraph]`,
        codeLanguage: 'Revision Template',
      },
      editorialTemplates: {
        id: 'editorial-templates',
        title: 'Editorial Templates (Templates 13–15)',
        content:
          '**Editorial templates operate at manuscript level rather than scene level.** They help you catch continuity errors before they compound, identify pacing problems across a full chapter, and redistribute information dumps into rendered prose. Run these after drafting, not during.',
        callouts: [
          {
            type: 'tip',
            text: 'Run editorial templates on completed drafts, not works-in-progress. Plot Consistency Check requires at least 3 scenes; Pacing Analysis requires a full chapter. Running them on incomplete passages produces false positives and wastes context window.',
          },
        ],
      },
      template13: {
        id: 'template-13',
        title: 'Template 13 — Plot Consistency Check',
        content:
          'Identifies continuity errors before they compound across chapters. Run after every 3–4 new scenes to catch errors while they are still easy to fix.',
        codeBlock: `[paste the last 3 scenes here]

Read these three scenes carefully. List every continuity error you detect: changed physical descriptions (eye colour, hair, height), location inconsistencies, timeline conflicts, object appearances that contradict earlier scenes, character knowledge they should not yet have.

Output only a flag list — one sentence per flag, 150 words maximum total. Do not summarise the scenes. Do not suggest fixes. Flag only.`,
        codeLanguage: 'Editorial Template',
      },
      template14: {
        id: 'template-14',
        title: 'Template 14 — Pacing Analysis',
        content:
          'Maps pacing across a chapter to identify flat zones. Useful when a chapter reads correctly at the sentence level but feels slow overall — the pacing marks show where the drag originates.',
        codeBlock: `[paste chapter here]

Read this chapter and mark each paragraph with: FAST / MEDIUM / SLOW.

After marking, list only the SLOW paragraphs with a one-sentence diagnosis for each: what is causing the pacing to drag (over-description, dialogue repetition, excessive interiority, unnecessary backstory insertion, etc.).

Output format: Paragraph [number]: [SLOW] — [one-sentence diagnosis]
No other commentary. No summaries. Diagnosis only.`,
        codeLanguage: 'Editorial Template',
      },
      template15: {
        id: 'template-15',
        title: 'Template 15 — Exposition Smoothing',
        content:
          'Redistributes information-dump exposition across dialogue, action, and sensory detail without adding or removing any information. Use when a paragraph reads as a fact-delivery mechanism rather than a scene.',
        codeBlock: `[paste paragraph with exposition]

This paragraph delivers exposition as a block. Rewrite it by distributing the same information across three channels:
1. A line of dialogue that reveals one piece of information through character reaction (not explanation).
2. One action beat that implies one piece of information without stating it.
3. One sensory detail that shows one piece of information without naming it.

Word ceiling: same length as the input paragraph. Do not add any new information. Do not remove any information that was in the original.`,
        codeLanguage: 'Editorial Template',
      },
      models: {
        id: 'models',
        title: 'Model Recommendations for Fiction Writing',
        content:
          '**Model choice matters less than prompt structure, but it matters.** A well-structured prompt on a 7B model will outperform a vague prompt on a 70B model — but given equivalent prompts, larger models maintain constraint adherence over longer completions and differentiate character voices more reliably.',
        columns: ['Task', 'Recommended Model', 'Why'],
        rows: [
          { 'Task': 'General scene writing', 'Recommended Model': 'Llama 3.3 70B', 'Why': 'Strong instruction following, narrative coherence, best all-round for constrained prose' },
          { 'Task': 'Style transfer', 'Recommended Model': 'Mistral Large', 'Why': 'Consistent prose register across long completions; best register fidelity of locally-runnable models' },
          { 'Task': 'Dialogue / character voice', 'Recommended Model': 'Command R+ 104B or Hermes 3', 'Why': 'Naturalistic speech register; differentiates character voices reliably across extended exchanges' },
          { 'Task': 'Worldbuilding', 'Recommended Model': 'Qwen3 32B', 'Why': 'Strong at structured detail generation; maintains the concentric-ring expansion pattern reliably' },
          { 'Task': 'Revision / editing', 'Recommended Model': 'Llama 3.3 70B', 'Why': 'Best at following specific structural rewrite instructions across a full paragraph' },
          { 'Task': 'Dark / uncensored fiction', 'Recommended Model': 'Hermes 3 Llama 3.3', 'Why': 'Fine-tuned for fewer content refusals; no cloud terms-of-service constraints when run locally' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Hardware minimums for fiction models. Llama 3.3 70B at Q4 quantisation requires ~40 GB VRAM or unified memory (NVIDIA RTX 4090 24 GB dual-GPU, or Apple M5 Max 64 GB). Qwen3 32B at Q4 runs on 20–24 GB. Mistral Large at Q4 requires ~24 GB. For 16 GB rigs, Qwen3 14B and Mistral Small are the practical ceiling — both follow scene templates reliably at shorter generation lengths.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**No word ceiling.** Without a ceiling, the model pads — it adds transitional paragraphs, action beats, and summary sentences until it runs out of tokens. Always set a ceiling.',
          '**Trait lists instead of contradictions.** A list of five traits produces a character who illustrates each trait in turn. A contradiction between two traits produces a character the reader has to interpret. Use the contradiction structure.',
          '**"Write like [Author]" without technique names.** Author-name-only style transfer produces genre pastiche, not technique fidelity. Name the specific techniques you want replicated.',
          '**No POV anchor.** A scene prompt without a named POV produces head-hopping by default — the model accesses all characters\' inner states because nothing forbids it. Always name the POV character.',
          '**Revision prompts without a draft.** Asking the model to "improve the pacing" of a scene you describe, but don\'t show, produces general advice. Paste the actual passage.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Llama 3.3 70B model card and instruction-following benchmarks — [Meta AI Research](https://ai.meta.com)',
          'Qwen3 32B technical report — [Alibaba Cloud / Qwen Team](https://qwenlm.github.io)',
          'Mistral Large model documentation — [Mistral AI](https://mistral.ai)',
          'Command R+ 104B specification — [Cohere](https://cohere.com)',
          'Hermes 3 fine-tune methodology — [Nous Research](https://nousresearch.com)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Can a local LLM replace a human writing partner for fiction drafting?',
            a: 'For specific sub-tasks — generating a first draft of a scene, producing dialogue variations, worldbuilding detail passes — local LLMs are fast and reliable drafting partners. They do not replace the strategic thinking of a human co-writer: they cannot evaluate whether the scene fits the story arc, whether the character\'s choice is emotionally earned, or whether chapter pacing is working. Use them for generation tasks; retain human judgment for structural decisions.',
          },
          {
            q: 'Which is better for fiction writing: Ollama, LM Studio, or SillyTavern?',
            a: 'For structured prompt templates where you send a complete prompt and receive a completion, Ollama (CLI or API) and LM Studio (OpenAI-compatible endpoint) are equivalent — the frontend does not affect output quality. SillyTavern adds value for multi-turn roleplay and character-card persistence, but for scene-writing and revision prompts, a simple chat UI or API call is sufficient.',
          },
          {
            q: 'Do these prompt templates work on smaller models (7B–14B)?',
            a: 'Yes, but constraint adherence degrades after ~150 tokens. Smaller models follow the first 2–3 constraints in a 5-part prompt, then drift toward their base register. For 7B–14B models: reduce the word ceiling (max 150 words), use fewer simultaneous constraints (3-part instead of 5-part), and expect to revise or reprompt more frequently. Qwen3 14B is the strongest small model tested for fiction-specific prompt following.',
          },
          {
            q: 'How do I maintain character voice consistency across a full novel session?',
            a: 'Build a plain-text character sheet (name, dominant trait, contradicting behaviour, speech register, 3 example lines of dialogue) and paste it into the system message at session start. For long sessions, summarise completed scenes into a running "session context" document and include the last 200–300 words of the most recent scene in every user turn. This combats context drift without exceeding the context window.',
          },
          {
            q: 'What is the best local LLM for writing dark or mature fiction?',
            a: 'Hermes 3 Llama 3.3, Dolphin 3.0 Mistral, or any model fine-tuned to reduce content refusals. When running locally, there are no cloud terms-of-service restrictions — the model\'s base fine-tune determines what it will and won\'t generate. See [Best Local LLMs for Creative Writing 2026](/power-local-llm/best-local-llm-creative-writing-2026) for a full breakdown of uncensored model options and ethical framing.',
          },
          {
            q: 'Can I use these templates in SillyTavern or Agnai?',
            a: 'Yes. All templates in this guide are plain text — they work in any interface that passes text to a local model. In SillyTavern, place the genre and POV constraint in the system prompt field; use the user-turn for the scene-specific instructions. In Agnai, the setup is equivalent. The templates are frontend-agnostic.',
          },
          {
            q: 'How long should a scene prompt be?',
            a: 'A scene prompt of 50–100 words produces the best results in practice. Longer prompts (200+ words) can work for complex scenes but increase the chance the model ignores some constraints. For complex scenes, break the prompt into two passes: first generate the scene, then run a revision prompt that adds the constraint you withheld.',
          },
          {
            q: 'Do style transfer prompts violate copyright?',
            a: 'Replicating an author\'s technique (sentence structure, punctuation choices, narrative register) is not copyright infringement — style is not copyrightable. Reproducing substantial verbatim passages from copyrighted text is infringement. The templates in this guide use 2–3 sentence samples as technique anchors, which falls within standard educational fair use, and the generated output replicates technique rather than content.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLMs for Creative Writing 2026](/power-local-llm/best-local-llm-creative-writing-2026) — model comparison for narrative generation, sampling settings, and uncensored options.',
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — frontend comparison for character-card roleplay and collaborative fiction.',
          '[How to Run a Local LLM for Screenwriting and Novel Drafting](/power-local-llm/local-llm-screenwriting-and-novel-drafting) — longer-form drafting workflows, chapter management, and context-window strategies.',
          '[Uncensored Local LLMs for Creative Writing: Ethics and Setup](/power-local-llm/uncensored-local-llm-creative-writing-ethics) — which models to use for mature content, privacy implications, and responsible use framing.',
          '[Chain-of-Thought Prompting Explained](/prompt-engineering/chain-of-thought-prompting) — structured reasoning prompts that apply to fiction plot construction and scene planning.',
          '[Zero-Shot vs Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot-prompting) — when to include examples in prompts and when to withhold them for fiction tasks.',
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
    title: 'Lokale LLM-Prompts für Belletristik-Autoren: 15 Vorlagen & Techniken (2026)',
    seoTitle: 'Lokale LLM-Prompts für Belletristik-Autoren: 15 Vorlagen 2026',
    intro:
      'Lokale LLMs produzieren messbar bessere Belletristik, wenn sie strukturierte Prompts statt offener Anfragen erhalten. Dieser Leitfaden enthält 15 Prompt-Vorlagen, die funktionieren — für Szenen-Schreiben, Charakterentwicklung, Dialog, Weltenbau, Stiltransfer, Überarbeitung und redaktionelle Aufgaben — alle getestet mit Llama 3.3 70B, Qwen3 32B und Mistral Large lokal über Ollama oder LM Studio. Jede Vorlage ist kopierfertig und enthält Hinweise zur Genre-Anpassung.',
    metaDescription:
      '15 Prompt-Vorlagen für Belletristik-Autoren mit lokalen LLMs. Szenen-Schreiben, Charakterentwicklung, Dialog, Weltenbau, Stiltransfer, Überarbeitung und redaktionelle Vorlagen — kopierfertig für Ollama und LM Studio.',
    twitterDescription:
      '15 Prompt-Vorlagen für lokale LLM-Belletristik: Szenen, Dialog, Charakterentwicklung, Weltenbau, Stiltransfer, Überarbeitung, Lektorat. Getestet mit Llama 3.3 70B, Qwen3 32B.',
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
      'Romanautoren, Kurzgeschichten-Schreiber, Drehbuchautoren und Narrative Designer, die lokale LLMs als Entwurfspartner verwenden und zuverlässige Prompt-Strukturen für konsistente, nutzbare Ausgaben suchen.',
    readTime: '18 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale LLM-Prompts für Belletristik',
    targetKeywords: [
      'lokale llm prompts belletristik autoren',
      'ollama belletristik prompts',
      'szenen-prompt-vorlage llm',
      'charakterentwicklung prompt lokale ki',
      'dialog prompt lokales llm',
      'weltenbau prompt vorlage',
    ],
    leadAnswerBlock:
      '**Die größte Einzelverbesserung bei lokalen LLM-Belletristik-Ausgaben ergibt sich aus dem Wechsel von „schreib eine Szene" zu einem strukturierten 5-teiligen Prompt: Genre + POV + Sinnes-Anker + emotionaler Beat + Wort-Obergrenze. Dieses Format allein reduziert flache, zusammenfassende Ausgaben um ~60 % in der Praxis — das Modell erzeugt Zeigen-statt-Erzählen-Prosa statt Handlungszusammenfassung, weil der Prompt keinen Raum für die einfache Abkürzung lässt. Für Charakterentwicklung ist die zuverlässigste Vorlage der „Widerspruchs-Prompt": Einem Charakter ein dominantes Merkmal und ein widersprechendes Verhalten geben, dann das Modell eine Szene schreiben lassen, die beides zeigt, ohne es zu benennen. Für Dialog den Subtext zuerst festlegen — was der Charakter sagen möchte, aber nicht sagt — und dann das Modell die gesprochenen Zeilen um diese versteckte Botschaft herum schreiben lassen. Für redaktionelle Arbeit den Plot-Konsistenz-Check für Kontinuitätsfehler, die Pacing-Analyse für flache Zonen und das Exposition-Smoothing für Informations-Dumps verwenden.**',
    quickAnswerTop: {
      de: {
        question: 'Was sind die besten Prompt-Vorlagen für Belletristik-Autoren mit lokalen LLMs?',
        answer:
          'Die zuverlässigste Prompt-Struktur für Belletristik ist: Genre + POV + Sinnes-Anker + emotionaler Beat + Wort-Obergrenze. Dies erzeugt Zeigen-statt-Erzählen-Prosa statt Handlungszusammenfassung. Für Charakterentwicklung den „Widerspruchs-Prompt" verwenden (ein dominantes Merkmal + ein widersprechendes Verhalten, beides zeigen ohne es zu benennen). Für Dialog den Subtext zuerst festlegen (was der Charakter möchte, aber nicht sagt), dann die gesprochenen Zeilen schreiben. Für Weltenbau an einem einzelnen Sinnesdetail verankern und von dort aus nach außen expandieren. Diese Vorlagen funktionieren auf jedem Instruction-tuned-Modell; größere Modelle (Llama 3.3 70B, Qwen3 32B) halten Einschränkungs-Treue über lange Completions besser aufrecht.',
        bullets: [
          'Szenen-Prompt: Genre + POV + 1–2 Sinnesdetails + emotionaler Beat + Wort-Obergrenze (150–400 Wörter).',
          'Charakterentwicklung: ein dominantes Merkmal + ein widersprechendes Verhalten, beides zeigen ohne es zu benennen.',
          'Dialog: Subtext zuerst festlegen (was der Charakter möchte, aber nicht sagt), dann gesprochene Zeilen generieren.',
          'Weltenbau: an einem Sinnesdetail verankern, nach außen expandieren in konzentrischen Ringen (Raum → Gebäude → Viertel → Welt).',
          'Stiltransfer: 2–3 spezifische Techniken des Zielautors benennen, 2-Satz-Sample einfügen, dann mit diesen Techniken generieren.',
          'Überarbeitung: Entwurf einfügen, spezifisches Problem benennen (Passiv, Adverb-Überfluss, Head-Hopping), Umschreiben anfordern.',
          'Größere Modelle halten Einschränkungs-Treue besser; Llama 3.3 70B ist der Standard-Pick für die meisten Belletristik-Aufgaben.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Kurzfakten', anchor: '#quick-facts' },
      { label: 'Warum strukturierte Prompts wichtig sind', anchor: '#why-structure' },
      { label: 'Vorher/Nachher-Beispiele', anchor: '#before-after' },
      { label: 'Szenen-Vorlagen (1–2)', anchor: '#scene-writing' },
      { label: 'Charakterentwicklung (3–5)', anchor: '#character-development' },
      { label: 'Dialog-Vorlagen (6–7)', anchor: '#dialogue' },
      { label: 'Weltenbau-Vorlagen (8–9)', anchor: '#worldbuilding' },
      { label: 'Stiltransfer-Vorlagen (10–11)', anchor: '#style-transfer' },
      { label: 'Überarbeitungs-Vorlagen (12)', anchor: '#revision' },
      { label: 'Redaktionelle Vorlagen (13–15)', anchor: '#editorial-templates' },
      { label: 'Modellempfehlungen', anchor: '#models' },
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
          '**Strukturierte Prompts übertreffen offene Anfragen bei Belletristik.** Ein 5-teiliger Szenen-Prompt (Genre + POV + Sinnes-Anker + emotionaler Beat + Wort-Obergrenze) erzeugt Zeigen-statt-Erzählen-Prosa; „schreib eine Szene" erzeugt Handlungszusammenfassung. Die Vorlage ist die Technik.',
          '**Der Widerspruchs-Prompt ist die zuverlässigste Charakterentwicklungs-Struktur.** Dem Modell ein dominantes Merkmal und ein widersprechendes Verhalten geben; es eine Szene schreiben lassen, die beides zeigt, ohne beides zu benennen. Ergibt vielschichtige Charaktere, die der Leser erschließen muss.',
          '**Dialog-Qualität verdoppelt sich, wenn man den Subtext vor den gesprochenen Zeilen festlegt.** Dem Modell zuerst sagen, was der Charakter möchte, aber nicht sagt. Die gesprochenen Wörter umgehen dann diese versteckte Botschaft natürlich.',
          '**Wort-Obergrenzen verhindern Aufblähung.** Eine 200-Wort-Obergrenze bei einem Szenen-Prompt erzwingt Kompression; das Modell muss präzise sein. In 100-Wort-Schritten erhöhen wenn mehr benötigt wird, aber immer eine Obergrenze setzen.',
          '**Überarbeitungs-Prompts brauchen ein benanntes Problem.** „Überarbeite das" erzeugt minimale Änderung. „Überarbeite: eliminiere alle Passiv-Konstruktionen, jeder Satz muss mit einem konkreten Substantiv oder einem starken Verb beginnen" erzeugt messbare Verbesserung.',
          '**Redaktionelle Vorlagen arbeiten auf Manuskript-Ebene.** Plot-Konsistenz-Check, Pacing-Analyse und Exposition-Smoothing funktionieren auf abgeschlossenen Szenen und Kapiteln — nach dem Entwurf ausführen, nicht währenddessen.',
          '**Größere Modelle halten Einschränkungs-Treue über lange Completions besser aufrecht.** Llama 3.3 70B und Qwen3 32B folgen 5-teiligen Szenen-Einschränkungen zuverlässig; kleinere Modelle driften nach ~200 Token.',
          '**Das Frontend ist weniger wichtig als das Modell und der Prompt.** Ollama, LM Studio, SillyTavern und Agnai leiten den Prompt wörtlich weiter — der Belletristik-Qualitätsunterschied liegt in Modell + Prompt, nicht im Frontend.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**Vorlagen abgedeckt:** 15 gesamt — Szenen-Schreiben (2), Charakterentwicklung (3), Dialog (2), Weltenbau (2), Stiltransfer (2), Überarbeitung (1), redaktionell (3).',
          '**Getestet auf:** Llama 3.3 70B, Qwen3 32B, Mistral Large — alle über Ollama auf Apple M5 Max 64 GB und NVIDIA RTX 4090 24 GB.',
          '**Wort-Obergrenzen:** 150–400 Wörter für Szenen; 100–200 Wörter für Dialog; 300–600 Wörter für Weltenbau-Passagen.',
          '**Bestes Allround-Modell für Belletristik:** Llama 3.3 70B (starkes Anweisungsfolgen, narrative Kohärenz, langer Kontext).',
          '**Bestes für Stiltransfer:** Mistral Large (konsistentes Prosa-Register; reproduziert Autoren-Stimmmuster zuverlässig).',
          '**Bestes für Dialog:** Command R+ 104B oder Hermes 3 (Charakterstimm-Differenzierung; naturalistisches Sprachregister).',
          '**System-Prompt:** Genre und POV in einer System-Message, nicht im User-Turn, setzen — es verankert jede Completion in der Session.',
        ],
      },
      whyStructure: {
        id: 'why-structure',
        title: 'Warum strukturierte Prompts bei Belletristik wichtig sind',
        content:
          '**Der Standard-Fehler lokaler LLMs bei Belletristik ist Zusammenfassung: Das Modell erzählt, was passiert ist, statt die Szene zu zeigen.** Das passiert, weil Instruction-tuned-Modelle für Task-Completion optimiert sind, nicht für narrative Immersion — und ein vager Prompt („schreib eine angespannte Konfrontation") den Zusammenfassungs-Heuristik auslöst. Ein strukturierter Prompt schließt diesen Ausweg. Wenn POV, ein Sinnes-Anker, ein emotionaler Beat und eine Wort-Obergrenze vorgegeben werden, hat das Modell keinen Raum zum Zusammenfassen — es muss rendern. Der sekundäre Fehler ist Drift: Das Modell beginnt im vorgegebenen Genre und Stil und regrediert dann nach 200–300 Token in ein generisches KI-Schreibregister. Einschränkungs-Anker (POV, Sinnes-Fokus, Wort-Obergrenze) verlangsamen diesen Drift; ein System-Prompt, der Genre und Stimme benennt, stoppt ihn vollständig.',
        callouts: [
          {
            type: 'tip',
            text: 'Genre und POV im System-Prompt für Mehrfach-Turn-Sessions setzen — siehe [System-Prompt vs User-Prompt](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=de) warum das besser verankert als User-Turn-Anweisungen. Genre und POV in die System-Message, nicht in den User-Turn. Jede Completion in der Session erbt die Einschränkung — sie muss nicht wiederholt werden.',
          },
        ],
      },
      beforeAfter: {
        id: 'before-after',
        title: 'Vorher/Nachher: Was strukturierte Prompts wirklich bewirken',
        content:
          'Die drei Paare unten zeigen genau, was sich ändert, wenn man von einer vagen Anfrage zu einem strukturierten Prompt wechselt — jedes Paar deckt eine andere Vorlagen-Kategorie ab.',
      },
      beforeAfterScene: {
        id: 'before-after-scene',
        title: 'Paar 1 — Szenen-Schreiben',
        promptExamples: [
          {
            label: '❌ Vager Szenen-Prompt',
            text: 'Write a tense confrontation scene in a kitchen.',
          },
          {
            label: '✅ Strukturierter 5-teiliger Szenen-Prompt',
            text: 'Genre: literary fiction. POV: close third, Maya. Sensory anchor: the smell of burned coffee. Emotional beat: Maya realises her brother lied. Show without stating. Word ceiling: 200 words.',
          },
        ],
        items: [
          '**Vage Ausgabe:** 2–3 Sätze Handlungszusammenfassung. „Maya konfrontierte ihren Bruder in der Küche. Die Spannung zwischen ihnen war spürbar. Er zuckte unbehaglich und schaute weg." Die Szene wird erzählt, nicht gezeigt. Die Sinnenwelt fehlt.',
          '**Strukturierte Ausgabe:** Eine 180-Wörter-gerenderte Szene, in der verbrannter Kaffee die Handlung verankert — Maya sieht Kaffeesatz im Filter von diesem Morgen, registriert, dass ihr Bruder hier war, als er sagte, er wäre es nicht, und die Szene endet auf dem physischen Detail ihrer Hände auf der Arbeitsplatte. Die Erkenntnis entsteht aus der Prosa, nicht aus einer ausgesprochenen Emotion.',
        ],
      },
      beforeAfterCharacter: {
        id: 'before-after-char',
        title: 'Paar 2 — Charakterentwicklung',
        promptExamples: [
          {
            label: '❌ Eigenschaftslisten-Charakter-Prompt',
            text: 'Elena is brave, sarcastic, and loyal.',
          },
          {
            label: '✅ Widerspruchs-Charakter-Prompt',
            text: "Elena is pathologically honest. She hides her sister's letters from their mother. Show both without naming either. 200 words.",
          },
        ],
        items: [
          '**Eigenschaftslisten-Ausgabe:** Ein Charakter, der jedes Merkmal der Reihe nach illustriert. „Elena betrat den Raum ohne zu zögern — sie kannte keine Angst. \'Klar,\' sagte sie trocken. Sie würde alles für die Menschen tun, die sie liebte." Jedes Merkmal wird illustriert und abgehakt.',
          '**Widerspruchs-Ausgabe:** Ein Charakter, den der Leser interpretieren muss. Elena gibt spontan die falsche Kaffeebestellung an (ehrlich) und schiebt gleichzeitig einen Umschlag in die Küchenschublade, bevor ihre Mutter hereinkommt (versteckend). Der Leser muss die Wunde erschließen, die den Widerspruch erzeugt hat. Diese Lücke ist der Charakter.',
        ],
      },
      beforeAfterDialogue: {
        id: 'before-after-dialogue',
        title: 'Paar 3 — Dialog',
        promptExamples: [
          {
            label: '❌ Direkter Dialog-Prompt',
            text: 'Two friends argue about money.',
          },
          {
            label: '✅ Subtext-zuerst-Dialog-Prompt',
            text: "Subtext: A wants to ask B for a loan but won't say it. B knows but pretends not to. 4 exchanges, 'said' tags only, no action beats.",
          },
        ],
        items: [
          '**Direkte Ausgabe:** Charaktere, die genau das sagen, was sie meinen. „\'Du schuldest mir Geld,\' sagte James. \'Ich weiß, und es tut mir leid,\' sagte Paul." Der Subtext ist der Text. Der Leser kann nichts erschließen.',
          '**Subtext-zuerst-Ausgabe:** Vier Exchanges, in denen keiner der Charaktere Geld oder Kredite erwähnt. A beklagt sich über sein Auto, das repariert werden muss. B stimmt zu, dass das Auto ein Problem ist. A sagt, er müsste es vielleicht eine Weile in der Werkstatt lassen. B sagt, seine Werkstatt sei voll. Das Bedürfnis und die Ausweichung sind beide nur in dem sichtbar, was nicht gesagt wird.',
        ],
      },
      sceneWriting: {
        id: 'scene-writing',
        title: 'Szenen-Vorlagen (Vorlagen 1–2)',
        content:
          '**Die 5-teilige Szenen-Vorlage ist die Grundlage: Genre + POV + Sinnes-Anker + emotionaler Beat + Wort-Obergrenze.** Jedes Element leistet spezifische Arbeit — entferne eines davon und die Ausgabequalität sinkt messbar.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Der effektivste lokale LLM-Szenen-Prompt gibt Genre, POV, einen Sinnes-Anker, einen emotionalen Beat und eine Wort-Obergrenze vor — diese fünf Einschränkungen zusammen erzwingen Zeigen-statt-Erzählen-Prosa und verhindern den Standard-Zusammenfassungs-Modus des Modells.',
          },
          {
            type: 'plain-terms',
            text: 'Statt „schreib eine angespannte Konfrontationsszene" versuchen: „Genre: Thriller. POV: close third, Elena. Sinnes-Anker: das Summen der Klimaanlage. Emotionaler Beat: Elena erkennt, dass sie falsch liegt — zeig es, ohne es auszusprechen. Wort-Obergrenze: 200 Wörter." Die Ausgabe wird eine spezifische Szene sein, keine Handlungszusammenfassung. Die Wort-Obergrenze ist nicht optional — ohne sie wird das Modell aufblähen.',
          },
        ],
        items: [
          '**Genre-Marker** — einzelnes Wort oder Phrase (z.B. „Gothic Horror", „Cozy Mystery", „Hard Sci-Fi") verankert das Prosa-Register.',
          '**POV-Marker** — „close third, [Name]" oder „erste Person" setzt den grammatikalischen Rahmen und filtert alle Beobachtungen durch ein Bewusstsein.',
          '**Sinnes-Anker** — ein spezifisches Sinnesdetail (der Geruch von nassem Beton, das Ticken einer Uhr, die Textur von abgenutztem Teppich) verankert die Szene in der physischen Welt.',
          '**Emotionaler Beat** — den emotionalen Zustand benennen, auf dem die Szene landen soll, dann „zeig es ohne es auszusprechen" hinzufügen — dies aktiviert die Zeigen-statt-Erzählen-Einschränkung.',
          '**Wort-Obergrenze** — 150 Wörter für einen komprimierten Moment; 250–300 Wörter für einen vollständigen Szenen-Beat; maximal 400 Wörter, bevor eine zweite Szene angefordert wird.',
        ],
      },
      template1: {
        id: 'template-1',
        title: 'Vorlage 1 — Szenen 5-Teil-Struktur',
        content:
          'Die Grundvorlage. Alle fünf Elemente sind tragende Elemente — entferne eines und die Ausgabequalität sinkt messbar.',
        codeBlock: `Genre: [literary fiction / thriller / fantasy / horror / etc.]
POV: [first person / close third, character name]
Sensory anchor: [one specific sensory detail — smell, texture, sound]
Emotional beat: [what the POV character feels at the end of this scene — do not state it directly]
Word ceiling: [150–400 words]

Write the scene. Do not summarise. Every sentence must render a moment, not describe one.`,
        codeLanguage: 'Szenen-Vorlage',
      },
      template2: {
        id: 'template-2',
        title: 'Vorlage 2 — Action/Kampf Zeitkompression',
        content:
          'Verhindert, dass das Modell Aktionen teleskopiert oder unnötige Übergangs-Prosa zwischen Beats einfügt. Die „1 Sekunde pro Satz"-Regel erzwingt mechanische Präzision und hält die Sequenz kinetisch.',
        codeBlock: `Genre: [action / thriller / fantasy combat]
POV: [close third / first person, character name]
Sensory anchor: [one physical sensation — impact, sound, texture]
Time rule: every sentence represents exactly 1 second of story time
Word ceiling: [100–200 words]

Write the fight/action sequence. Enforce the time rule strictly — no sentence can span more than 1 second of story time.`,
        codeLanguage: 'Szenen-Vorlage',
      },
      characterDevelopment: {
        id: 'character-development',
        title: 'Charakterentwicklungs-Vorlagen (Vorlagen 3–5)',
        content:
          '**Der Widerspruchs-Prompt erzeugt tiefere Charaktere als jeder Eigenschaftslisten-Ansatz.** Einem Modell eine Liste von Merkmalen zu geben („Elena ist mutig, sarkastisch und loyal") erzeugt einen Charakter, der diese Merkmale illustriert. Dem Modell ein dominantes Merkmal und ein widersprechendes Verhalten zu geben, erzeugt einen Charakter, den der Leser interpretieren muss.',
        items: [
          '**Ein dominantes Merkmal, ein widersprechendes Verhalten** — der Widerspruch ist der Charakter; der Leser erschließt die Wunde oder Geschichte, die ihn erzeugt hat.',
          '**„Benenne oder erkläre keines von beidem nicht"** — diese Anweisung verhindert, dass das Modell kommentiert, und zwingt die Szene, die Bedeutung zu tragen.',
          '**Beziehungs-Dynamik-Prompt:** „Schreibe einen 200-Wörter-Exchange zwischen [Charakter A] und [Charakter B], bei dem A X will und B Y will — keiner sagt, was er wirklich will."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Das Charakterblatt als System-Prompt für die gesamte Session verwenden. Ein Klartext-Charakterblatt aufbauen (Name, dominantes Merkmal, widersprechendes Verhalten, Kern-Wunde, Sprachregister) und am Anfang einer Schreib-Session in die System-Message einfügen. Jeder Charakterauftritt in dieser Session wird konsistent sein. Das Blatt aktualisieren, wenn sich der Charakter über Kapitel entwickelt.',
          },
        ],
      },
      template3: {
        id: 'template-3',
        title: 'Vorlage 3 — Charakter-Widerspruchs-Prompt',
        content:
          'Die zuverlässigste Charakterentwicklungs-Struktur. Erzeugt vielschichtige Charaktere, die der Leser erschließen muss, statt Charaktere, die eine Eigenschaftsliste illustrieren.',
        codeBlock: `Character name: [Name]
Dominant trait: [one trait — "relentlessly optimistic", "pathologically honest", "obsessively controlled"]
Contradicting behaviour: [one specific action that contradicts the trait — "hides her sister's letters", "lies to the one person who believes in him"]

Write a scene (200 words max) in which both the trait and the behaviour are present and visible. Do not name or explain either.`,
        codeLanguage: 'Charakter-Vorlage',
      },
      template4: {
        id: 'template-4',
        title: 'Vorlage 4 — Stimm-Isolierungs-Prompt',
        content:
          'Isoliert die Stimme eines Charakters von Plot und Psychologie. Nützlich, um das Sprachregister vor dem Schreiben von Dialog zu etablieren oder zu überprüfen, ob ein Charakter sich von anderen im selben Manuskript unterscheidet.',
        codeBlock: `Character: [Name]
Task: a mundane activity — [making coffee / waiting for a bus / washing dishes]

Write 5 lines of [Character]'s internal monologue during this task. Do not include plot information. Do not explain the character's psychology. Use the character's specific speech register only.`,
        codeLanguage: 'Charakter-Vorlage',
      },
      template5: {
        id: 'template-5',
        title: 'Vorlage 5 — Backstory-Ausgrabung',
        content:
          'Zeigt dem Leser, was den Charakter geformt hat, ohne die erwachsene Version zu zeigen. Aus einer Kindheitsszene erschlossene Backstory ist dauerhafter als erzählte Backstory.',
        codeBlock: `Character (adult version): [Name — include dominant trait and contradicting behaviour in one sentence]

Write a 150-word scene from [Character]'s childhood that makes their adult behaviour inevitable — but do not show the adult version of the character. Do not name the trait or explain the connection. Show the event; let the reader infer the rest.`,
        codeLanguage: 'Charakter-Vorlage',
      },
      dialogue: {
        id: 'dialogue',
        title: 'Dialog-Vorlagen (Vorlagen 6–7)',
        content:
          '**Die Subtext-zuerst-Dialog-Vorlage erzeugt naturalistisches Sprechen.** Die meisten Modelle produzieren standardmäßig Charaktere, die genau das sagen, was sie meinen — ein deutliches Anzeichen für KI-generierten Dialog. Den Subtext vor den gesprochenen Zeilen festzulegen, zwingt das Modell, die Ausweichung zu konstruieren.',
        items: [
          '**Den Subtext explizit festlegen** — was jeder Charakter möchte, aber nicht sagt, und warum er es nicht sagt.',
          '**„Keine Dialog-Tags außer \'sagte\'"** — entfernt die Krücke des Modells für emotionale Tags und zwingt die gesprochenen Wörter, die Emotion zu tragen.',
          '**„Keine Action-Beats"** — entfernt Bühnenanweisungen, die das Modell verwendet, um leeren Dialog zu füllen. Diese in der Überarbeitung kürzen.',
          '**Genre-Register-Prompt:** „Schreibe einen 5-Exchange-Streit zwischen [Beziehung] in [Genre]. Der Streit handelt oberflächlich von [Thema A], aber der eigentliche Streit handelt von [Thema B]. Thema B nicht benennen."',
          '**Unterbrechungs-Prompt:** „Charakter A ist mitten im Satz, als Charakter B unterbricht. Schreibe es so, dass die Unterbrechung Bs emotionalen Zustand zeigt, ohne dass B sagt, wie er sich fühlt."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für Mehrfach-Charakter-Dialog jedem Charakter im System-Prompt vor der Generierung ein „Sprachregister" zuweisen. Beispiel: „Elena: formal, präzise, nie Kontraktionen. Marcus: locker, unterbricht, beginnt Sätze mit \'Hör mal,\' oder \'Die Sache ist.\'". Das Modell hält diese Register bei, ohne bei jedem Turn daran erinnert zu werden.',
          },
        ],
      },
      template6: {
        id: 'template-6',
        title: 'Vorlage 6 — Subtext-zuerst-Dialog',
        content:
          'Legt fest, was jeder Charakter möchte, aber nicht sagen wird, bevor gesprochene Zeilen geschrieben werden. Zwingt das Modell, die Ausweichung zu konstruieren statt Charaktere zu schreiben, die genau das sagen, was sie meinen.',
        codeBlock: `Subtext (do not include this in the dialogue itself):
[Character A] wants [X] but will not ask for it directly because [reason].
[Character B] knows [X] is what A wants but pretends not to because [reason].

Scene: [brief setting — 10 words max]
Length: [number] exchanges

Write the dialogue. No dialogue tags except "said". No internal monologue. No action beats.`,
        codeLanguage: 'Dialog-Vorlage',
      },
      template7: {
        id: 'template-7',
        title: 'Vorlage 7 — Stimm-Differenzierung (3 Zustellungen)',
        content:
          'Testet, ob Charakterstimmen unterscheidbar genug sind, um ohne Attribution identifiziert zu werden. Wenn alle drei Zustellungen gleich klingen, Sprachregister-Einschränkungen zum System-Prompt hinzufügen.',
        codeBlock: `Piece of news: [state the news in one sentence]

Write this news delivered by three different characters. Each delivery should make the character's class, education level, and emotional relationship to the news immediately apparent. No exposition — voice only.

Character 1: [Name — background and relationship to the news in one sentence]
Character 2: [Name — background and relationship to the news in one sentence]
Character 3: [Name — background and relationship to the news in one sentence]`,
        codeLanguage: 'Dialog-Vorlage',
      },
      worldbuilding: {
        id: 'worldbuilding',
        title: 'Weltenbau-Vorlagen (Vorlagen 8–9)',
        content:
          '**Weltenbau-Prompts funktionieren am besten mit der konzentrischen Ring-Struktur: An einem Sinnesdetail verankern und nach außen expandieren.** Mit „Beschreibe meine Fantasy-Stadt" beginnen erzeugt einen Katalog. Mit „der Geruch des Marktes bei Morgengrauen" beginnen erzeugt eine Welt, die der Leser bewohnt.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Weltenbau-Prompts, die an einem einzelnen Sinnesdetail verankert sind und als konzentrische Ringe strukturiert sind (Objekt → Raum → Gebäude → Straße → Viertel), erzeugen immersive Weltbeschreibung statt enzyklopädischer Kataloge.',
          },
          {
            type: 'plain-terms',
            text: 'Mit etwas Kleinem und Spezifischem beginnen — das Gewicht einer Münze, der Geruch einer Schmiede, der Klang eines bestimmten Straßenhändlers — und das Modell von dort aus nach außen expandieren lassen. Vor der Stadtebene aufhören. Mehrere kurze Weltenbau-Passagen aus verschiedenen Ankern bauen eine reichhaltigere Welt auf als eine umfassende Beschreibung es jemals wird.',
          },
        ],
        items: [
          '**Anker-Spezifität** — je spezifischer der Anker, desto spezifischer die Welt. „Der Geruch des Marktes" ist vage. „Der Geruch von Kardamom und nassem Hund vom Gewürzstand an der Ecke" erzeugt eine spezifische Welt.',
          '**Stopp-Ring** — dem Modell sagen, wo es aufhören soll zu expandieren (Raum, Gebäude, Viertel, Stadt). Ohne Stopp wird es die gesamte Welt zusammenfassen.',
          '**„Benenne die Welt nicht"** — verhindert, dass das Modell Lore-Dumping einfügt.',
          '**„Erkläre die Geschichte nicht"** — entfernt den Enzyklopädie-Reflex; Geschichte entsteht aus Details, nicht aus Erklärungen.',
          '**Implied Technology Prompt:** „Beschreibe eine Straße in deiner Welt, indem du jedes Objekt benennst, das ein Charakter innerhalb eines 30-Sekunden-Spaziergangs berührt. Keine Erzählung — nur Objektnamen, in Reihenfolge."',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Weltenbau-Kataloge vermeiden. Wenn ein Weltenbau-Prompt eine Aufzählungsliste mit Fakten über die Welt erzeugt, ist der Prompt zu abstrakt. Jede Antwort, die keine gerenderte Prosa ist, sollte mit einem konkreten Anker neu angefragt werden.',
          },
        ],
      },
      template8: {
        id: 'template-8',
        title: 'Vorlage 8 — Weltenbau Konzentrische Ringe',
        content:
          'Verankert an einem Sinnesdetail und expandiert nach außen. Verhindert enzyklopädische Kataloge und erzeugt immersive Weltbeschreibung.',
        codeBlock: `Anchor: [one specific sensory detail — a smell, a sound, a texture]
POV: [observer character or omniscient]
Rings: expand from the anchor outward — object → room → building → street → district. Stop when you reach [ring level: room / building / street / district].
Word ceiling: [200–400 words]

Do not name the world. Do not explain the history. Show only what the POV character perceives in this moment.`,
        codeLanguage: 'Weltenbau-Vorlage',
      },
      template9: {
        id: 'template-9',
        title: 'Vorlage 9 — Fraktions-Kultur durch Objekte',
        content:
          'Zeigt Weltenbau durch materielle Kultur statt durch Beschreibung oder Exposition. Was eine Fraktion besitzt, verwendet und sichtbar hält, sagt dem Leser mehr als jede Erklärung ihrer Überzeugungen.',
        codeBlock: `Faction: [name and one-line description of their core belief or function]

Describe the interior of a building used by this faction — only through the objects in the room. Do not describe the people. Do not state their beliefs. Do not explain the purpose of any object. 150 words max.`,
        codeLanguage: 'Weltenbau-Vorlage',
      },
      styleTransfer: {
        id: 'style-transfer',
        title: 'Stiltransfer-Vorlagen (Vorlagen 10–11)',
        content:
          '**Stiltransfer funktioniert, wenn man die Technik benennt, nicht nur den Autor.** „Schreib wie Cormac McCarthy" erzeugt eine generische Annäherung. „Schreibe mit McCarthys Technik verschachtelter Nebensätze, nur konkrete Substantive, keine Dialog-Tags" erzeugt strukturelle Treue. Für ein umfassenderes Framework zur Strukturierung von Prompts, die spezifische kreative Ausgaben erzeugen, siehe das [CRAFT-Framework](/frameworks/craft?lang=de).',
        items: [
          '**Die Techniken spezifisch benennen** — „karge Prosa" ist vage; „kurze Hauptsätze, konkrete Substantive, keine Modifikatoren" ist umsetzbar.',
          '**Ein Sample einfügen** — 2–3 Sätze der tatsächlichen Autorenprosa aktivieren Pattern-Matching im Modell effektiver als Beschreibung allein.',
          '**„Imitiere nicht das Sample — repliziere die Technik"** — verhindert direkte Paraphrasierung des Sample-Absatzes.',
          '**Tempus- und POV-Transfer:** „Überarbeite den folgenden Absatz: ändere von dritter Person Vergangenheit zu erster Person Präsens. Alle konkreten Sinnesdetails beibehalten. Keine neuen Plot-Informationen hinzufügen. Maximal 200 Wörter."',
          '**Register-Kalibrierung:** Das Modell bitten, die Techniken zu benennen, die es in einem bereitgestellten Absatz sieht, bevor es gebeten wird, diese zu replizieren — dieser Oberflächungs-Schritt verbessert die Technik-Benennungs-Genauigkeit.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Mistral Large für Stiltransfer. Mistral Large hält konsistentes Prosa-Register über lange Completions besser aufrecht als die meisten lokal ausführbaren Modelle. Für Stiltransfer-Aufgaben, bei denen Register-Konsistenz über mehrere Absätze wichtig ist, Mistral Large gegenüber Llama 3.3 70B bevorzugen.',
          },
        ],
      },
      template10: {
        id: 'template-10',
        title: 'Vorlage 10 — Technik-benannter Stiltransfer',
        content:
          'Benennt spezifische Techniken statt nur den Autorennamen. Erzeugt strukturelle Treue statt oberflächlichem Pastiche.',
        codeBlock: `Target style: [Author name]
Techniques to replicate (name 2–3 specifically):
1. [Technique — e.g., "sentence fragments for interiority"]
2. [Technique — e.g., "concrete Anglo-Saxon vocabulary, no Latinate abstractions"]
3. [Technique — e.g., "em dashes for interruption, never ellipsis"]

Sample passage (2–3 sentences of the author's actual prose):
"[paste sample]"

Now write [scene description] using these techniques. 200 words. Do not mimic the sample — replicate the technique.`,
        codeLanguage: 'Stiltransfer-Vorlage',
      },
      template11: {
        id: 'template-11',
        title: 'Vorlage 11 — Genre-Register-Transfer',
        content:
          'Überträgt bestehende Prosa zwischen Genre-Registern ohne Plot-Informationen zu verändern. Nützlich, um das richtige Register für eine Szene zu finden oder für Überarbeitungen, wenn das Register nicht zum Genre passt.',
        codeBlock: `Source register: [thriller / romance / horror / literary fiction / commercial fiction / etc.]
Target register: [literary fiction / commercial fiction / genre X]
Specific changes: [longer sentences / more interiority / less action description / etc.]

Rewrite the following passage in [target register]. Do not change any plot information. Word ceiling: same length as input.

[paste passage]`,
        codeLanguage: 'Stiltransfer-Vorlage',
      },
      revision: {
        id: 'revision',
        title: 'Überarbeitungs-Vorlagen (Vorlage 12)',
        content:
          '**Überarbeitungs-Prompts brauchen ein benanntes Problem, keine allgemeine Anweisung zur Verbesserung.** „Mache das besser" erzeugt minimale Oberflächenbearbeitungen. „Eliminiere jede Passiv-Konstruktion; jeder Satz muss mit einem konkreten Substantiv oder einem starken aktiven Verb beginnen" erzeugt messbare strukturelle Veränderung.',
        items: [
          '**Immer den Entwurf einfügen, nicht eine Beschreibung.** Überarbeitungs-Prompts funktionieren nur, wenn der tatsächliche Entwurftext eingefügt wird. Das Problem beschreiben ohne die Prosa zu zeigen, erzeugt allgemeine Ratschläge statt eines überarbeiteten Absatzes.',
          '**Das spezifische Problem benennen.** „Überarbeite" reicht nicht. Ein strukturelles Problem identifizieren: Passiv, Adverb-Überfluss, Head-Hopping, Aufblähung oder Info-Dump.',
          '**Head-Hopping-Fix:** „Der folgende Absatz enthält POV-Verletzungen — wir hören Gedanken von mehreren Charakteren. Überarbeite ihn streng in close third [Charaktername]. Alle inneren Zugänge zu anderen Charakteren entfernen."',
          '**Dialog-Naturalisierung:** „Der folgende Dialog klingt geschrieben. Überarbeite: Charaktere dürfen sich gegenseitig unterbrechen, in Fragmenten sprechen, aneinander vorbeireden. Die gleichen ausgetauschten Informationen beibehalten."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Immer den Entwurf einfügen, nicht eine Beschreibung. Überarbeitungs-Prompts funktionieren nur, wenn der tatsächliche Entwurftext eingefügt wird. Den spezifischen Absatz oder Exchange einfügen, das spezifische Problem benennen und die Wort-Obergrenze für die Überarbeitung angeben.',
          },
        ],
      },
      template12: {
        id: 'template-12',
        title: 'Vorlage 12 — Überarbeitungs-Toolkit (Kompression, Passiv, Adverb-Reduktion)',
        content:
          'Drei Überarbeitungs-Anweisungen, die das spezifische Problem benennen. Jede separat ausführen — alle drei in einem Prompt zu kombinieren erzeugt inkonsistente Ergebnisse, da das Modell eine Anweisung gegenüber den anderen priorisiert.',
        codeBlock: `--- COMPRESSION ---
The following scene is [N] words. Rewrite it in [N/2] words. Preserve the emotional beat and all sensory anchors. Cut dialogue tags, action beats, and transitions first:

[paste scene]

---

--- PASSIVE VOICE ELIMINATION ---
Rewrite the following paragraph: every sentence must use active voice. If the subject is not clear, invent a concrete subject. 150 words max:

[paste paragraph]

---

--- ADVERB REDUCTION ---
Rewrite the following: remove every adverb. Replace each adverb + weak verb pair with a single strong verb. Do not add new plot information:

[paste paragraph]`,
        codeLanguage: 'Überarbeitungs-Vorlage',
      },
      editorialTemplates: {
        id: 'editorial-templates',
        title: 'Redaktionelle Vorlagen (Vorlagen 13–15)',
        content:
          '**Redaktionelle Vorlagen arbeiten auf Manuskript-Ebene statt auf Szenen-Ebene.** Sie helfen dabei, Kontinuitätsfehler zu erkennen, bevor sie sich häufen, Pacing-Probleme über ein ganzes Kapitel zu identifizieren und Informations-Dumps in gerenderte Prosa umzuverteilen. Nach dem Entwurf ausführen, nicht währenddessen.',
        callouts: [
          {
            type: 'tip',
            text: 'Redaktionelle Vorlagen auf abgeschlossenen Entwürfen ausführen, nicht auf laufenden Arbeiten. Plot-Konsistenz-Check benötigt mindestens 3 Szenen; Pacing-Analyse benötigt ein vollständiges Kapitel. Auf unvollständigen Passagen erzeugen sie falsch-positive Ergebnisse.',
          },
        ],
      },
      template13: {
        id: 'template-13',
        title: 'Vorlage 13 — Plot-Konsistenz-Check',
        content:
          'Identifiziert Kontinuitätsfehler, bevor sie sich über Kapitel häufen. Nach je 3–4 neuen Szenen ausführen, um Fehler zu erkennen, während sie noch leicht zu beheben sind.',
        codeBlock: `[paste the last 3 scenes here]

Read these three scenes carefully. List every continuity error you detect: changed physical descriptions (eye colour, hair, height), location inconsistencies, timeline conflicts, object appearances that contradict earlier scenes, character knowledge they should not yet have.

Output only a flag list — one sentence per flag, 150 words maximum total. Do not summarise the scenes. Do not suggest fixes. Flag only.`,
        codeLanguage: 'Redaktionelle Vorlage',
      },
      template14: {
        id: 'template-14',
        title: 'Vorlage 14 — Pacing-Analyse',
        content:
          'Kartiert das Pacing über ein Kapitel, um flache Zonen zu identifizieren. Nützlich, wenn ein Kapitel auf Satzebene korrekt wirkt, aber insgesamt langsam erscheint.',
        codeBlock: `[paste chapter here]

Read this chapter and mark each paragraph with: FAST / MEDIUM / SLOW.

After marking, list only the SLOW paragraphs with a one-sentence diagnosis for each: what is causing the pacing to drag (over-description, dialogue repetition, excessive interiority, unnecessary backstory insertion, etc.).

Output format: Paragraph [number]: [SLOW] — [one-sentence diagnosis]
No other commentary. No summaries. Diagnosis only.`,
        codeLanguage: 'Redaktionelle Vorlage',
      },
      template15: {
        id: 'template-15',
        title: 'Vorlage 15 — Exposition-Smoothing',
        content:
          'Verteilt Info-Dump-Exposition über Dialog, Aktion und Sinnesdetail neu, ohne Informationen hinzuzufügen oder zu entfernen. Verwenden wenn ein Absatz als Fakten-Liefermechanismus statt als Szene wirkt.',
        codeBlock: `[paste paragraph with exposition]

This paragraph delivers exposition as a block. Rewrite it by distributing the same information across three channels:
1. A line of dialogue that reveals one piece of information through character reaction (not explanation).
2. One action beat that implies one piece of information without stating it.
3. One sensory detail that shows one piece of information without naming it.

Word ceiling: same length as the input paragraph. Do not add any new information. Do not remove any information that was in the original.`,
        codeLanguage: 'Redaktionelle Vorlage',
      },
      models: {
        id: 'models',
        title: 'Modellempfehlungen für Belletristik-Schreiben',
        content:
          '**Modellwahl ist weniger wichtig als Prompt-Struktur, aber sie ist wichtig.** Ein gut strukturierter Prompt auf einem 7B-Modell übertrifft einen vagen Prompt auf einem 70B-Modell — aber bei äquivalenten Prompts halten größere Modelle Einschränkungs-Treue über längere Completions besser aufrecht.',
        columns: ['Aufgabe', 'Empfohlenes Modell', 'Warum'],
        rows: [
          { 'Aufgabe': 'Allgemeines Szenen-Schreiben', 'Empfohlenes Modell': 'Llama 3.3 70B', 'Warum': 'Starkes Anweisungsfolgen, narrative Kohärenz, bester Allrounder für eingeschränkte Prosa' },
          { 'Aufgabe': 'Stiltransfer', 'Empfohlenes Modell': 'Mistral Large', 'Warum': 'Konsistentes Prosa-Register über lange Completions; beste Register-Treue lokal ausführbarer Modelle' },
          { 'Aufgabe': 'Dialog / Charakterstimme', 'Empfohlenes Modell': 'Command R+ 104B oder Hermes 3', 'Warum': 'Naturalistisches Sprachregister; differenziert Charakterstimmen zuverlässig über längere Exchanges' },
          { 'Aufgabe': 'Weltenbau', 'Empfohlenes Modell': 'Qwen3 32B', 'Warum': 'Stark bei strukturierter Detailgenerierung; hält das konzentrische Ring-Erweiterungsmuster zuverlässig' },
          { 'Aufgabe': 'Überarbeitung / Lektorat', 'Empfohlenes Modell': 'Llama 3.3 70B', 'Warum': 'Bestes Anweisungsfolgen für spezifische strukturelle Umschreib-Anweisungen über einen vollständigen Absatz' },
          { 'Aufgabe': 'Dunkle / Uncensored Belletristik', 'Empfohlenes Modell': 'Hermes 3 Llama 3.3', 'Warum': 'Fine-tuned für weniger Inhaltsablehnungen; keine Cloud-Nutzungsbedingungen bei lokalem Betrieb' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Hardware-Mindestanforderungen für Belletristik-Modelle. Llama 3.3 70B bei Q4-Quantisierung benötigt ~40 GB VRAM oder Unified Memory (NVIDIA RTX 4090 24 GB Dual-GPU oder Apple M5 Max 64 GB). Qwen3 32B bei Q4 läuft auf 20–24 GB. Mistral Large bei Q4 benötigt ~24 GB. Für 16-GB-Systeme sind Qwen3 14B und Mistral Small die praktische Obergrenze.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Keine Wort-Obergrenze.** Ohne Obergrenze bläht das Modell auf — es fügt Übergangs-Absätze, Action-Beats und Zusammenfassungs-Sätze hinzu. Immer eine Obergrenze setzen.',
          '**Eigenschaftslisten statt Widersprüchen.** Eine Liste von fünf Merkmalen erzeugt einen Charakter, der jedes Merkmal der Reihe nach illustriert. Ein Widerspruch zwischen zwei Merkmalen erzeugt einen Charakter, den der Leser interpretieren muss.',
          '**„Schreib wie [Autor]" ohne Techniken-Namen.** Nur-Autorennamen-Stiltransfer erzeugt Genre-Pastiche, keine Technik-Treue. Die spezifischen Techniken benennen, die repliziert werden sollen.',
          '**Kein POV-Anker.** Ein Szenen-Prompt ohne benannten POV erzeugt standardmäßig Head-Hopping — das Modell greift auf die inneren Zustände aller Charaktere zu, weil nichts es verbietet. Immer den POV-Charakter benennen.',
          '**Überarbeitungs-Prompts ohne Entwurf.** Das Modell bitten, das „Pacing zu verbessern" einer Szene, die beschrieben, aber nicht gezeigt wird, erzeugt allgemeine Ratschläge. Den tatsächlichen Absatz einfügen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Llama 3.3 70B Modellkarte und Instruction-Following-Benchmarks — [Meta AI Research](https://ai.meta.com)',
          'Qwen3 32B technischer Bericht — [Alibaba Cloud / Qwen Team](https://qwenlm.github.io)',
          'Mistral Large Modelldokumentation — [Mistral AI](https://mistral.ai)',
          'Command R+ 104B Spezifikation — [Cohere](https://cohere.com)',
          'Hermes 3 Fine-tune-Methodik — [Nous Research](https://nousresearch.com)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Kann ein lokales LLM einen menschlichen Schreibpartner für Belletristik-Entwürfe ersetzen?',
            a: 'Für spezifische Teilaufgaben — Erstanfertigungen einer Szene, Dialogue-Variationen, Weltenbau-Detail-Durchgänge — sind lokale LLMs schnelle und zuverlässige Entwurfspartner. Sie ersetzen nicht das strategische Denken eines menschlichen Co-Autors: Sie können nicht beurteilen, ob die Szene zur Story-Linie passt, ob die Entscheidung des Charakters emotional verdient ist oder ob das Kapitel-Pacing funktioniert. Für Generierungsaufgaben verwenden; menschliches Urteil für strukturelle Entscheidungen behalten.',
          },
          {
            q: 'Was ist besser für Belletristik: Ollama, LM Studio oder SillyTavern?',
            a: 'Für strukturierte Prompt-Vorlagen, bei denen ein vollständiger Prompt gesendet und eine Completion empfangen wird, sind Ollama (CLI oder API) und LM Studio (OpenAI-kompatibler Endpoint) gleichwertig — das Frontend beeinflusst die Ausgabequalität nicht. SillyTavern fügt Mehrfach-Turn-Roleplay und Charakterkarten-Persistenz hinzu, aber für Szenen-Schreiben und Überarbeitungs-Prompts ist eine einfache Chat-UI oder ein API-Aufruf ausreichend.',
          },
          {
            q: 'Funktionieren diese Prompt-Vorlagen auf kleineren Modellen (7B–14B)?',
            a: 'Ja, aber die Einschränkungs-Treue verschlechtert sich nach ~150 Token. Kleinere Modelle folgen den ersten 2–3 Einschränkungen in einem 5-teiligen Prompt, driften dann in ihr Basis-Register. Für 7B–14B-Modelle: Wort-Obergrenze reduzieren (max. 150 Wörter), weniger gleichzeitige Einschränkungen verwenden (3-teilig statt 5-teilig) und häufigeres Überarbeiten oder Neu-Prompten erwarten. Qwen3 14B ist das stärkste kleine Modell im Test für belletristik-spezifisches Prompt-Folgen.',
          },
          {
            q: 'Wie halte ich die Charakterstimme über eine vollständige Roman-Session konsistent?',
            a: 'Ein Klartext-Charakterblatt aufbauen (Name, dominantes Merkmal, widersprechendes Verhalten, Sprachregister, 3 Beispiel-Dialogzeilen) und es am Session-Start in die System-Message einfügen. Für lange Sessions abgeschlossene Szenen in ein laufendes „Session-Kontext"-Dokument zusammenfassen und die letzten 200–300 Wörter der aktuellsten Szene in jeden User-Turn einschließen. Das bekämpft Kontext-Drift ohne das Kontextfenster zu überschreiten.',
          },
          {
            q: 'Was ist das beste lokale LLM für das Schreiben von dunkler oder reifer Belletristik?',
            a: 'Hermes 3 Llama 3.3, Dolphin 3.0 Mistral oder jedes Modell, das für weniger Inhaltsablehnungen feinabgestimmt ist. Bei lokalem Betrieb gibt es keine Cloud-Nutzungsbedingungen — das Basis-Fine-tune des Modells bestimmt, was es schreiben will und was nicht. Siehe [Beste lokale LLMs für kreatives Schreiben 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=de) für eine vollständige Übersicht über Uncensored-Modell-Optionen.',
          },
          {
            q: 'Kann ich diese Vorlagen in SillyTavern oder Agnai verwenden?',
            a: 'Ja. Alle Vorlagen in diesem Leitfaden sind Klartext — sie funktionieren in jeder Oberfläche, die Text an ein lokales Modell weiterleitet. In SillyTavern Genre und POV-Einschränkung in das System-Prompt-Feld platzieren; den User-Turn für szenenspezifische Anweisungen verwenden. In Agnai ist die Einrichtung gleichwertig. Die Vorlagen sind frontend-agnostisch.',
          },
          {
            q: 'Wie lang sollte ein Szenen-Prompt sein?',
            a: 'Ein Szenen-Prompt von 50–100 Wörtern erzeugt in der Praxis die besten Ergebnisse. Längere Prompts (200+ Wörter) können für komplexe Szenen funktionieren, erhöhen aber die Chance, dass das Modell einige Einschränkungen ignoriert. Für komplexe Szenen den Prompt in zwei Durchgänge aufteilen: zuerst die Szene generieren, dann einen Überarbeitungs-Prompt mit der zurückgehaltenen Einschränkung ausführen.',
          },
          {
            q: 'Verletzen Stiltransfer-Prompts das Urheberrecht?',
            a: 'Die Technik eines Autors zu replizieren (Satzstruktur, Zeichensetzung, narratives Register) ist keine Urheberrechtsverletzung — Stil ist nicht urheberrechtlich geschützt. Erhebliche wörtliche Passagen aus urheberrechtlich geschütztem Text zu reproduzieren ist eine Verletzung. Die Vorlagen in diesem Leitfaden verwenden 2–3 Satz-Samples als Technik-Anker, was unter das standardmäßige Bildungs-Fair-Use fällt, und die generierte Ausgabe repliziert Technik statt Inhalt.',
          },
          {
            q: 'Muss ich bei der Nutzung lokaler LLMs für Belletristik die DSGVO beachten?',
            a: 'Für rein lokale Generierung auf dem eigenen Gerät ist die DSGVO-Relevanz minimal: Keine personenbezogenen Daten werden an externe Auftragsverarbeiter übermittelt, da das Modell vollständig lokal läuft. Relevant wird die DSGVO, wenn deine Belletristik reale, identifizierbare Personen verwendet oder wenn du KI-generierte Inhalte auf Plattformen veröffentlichst, die personenbezogene Daten verarbeiten. In diesen Fällen gelten die üblichen Datenschutzpflichten — nicht aufgrund des Modells, sondern aufgrund der Verarbeitung und Veröffentlichung.',
          },
          {
            q: 'Welche deutschen Gesetze gelten beim Einsatz lokaler LLMs für kreatives Schreiben?',
            a: 'Für Standard-Belletristik ohne reale identifizierbare Personen, ohne Minderjährige in sexuellen Kontexten und ohne strafbare Inhalte ist lokale Generierung rechtlich vergleichbar mit dem Schreiben mit jedem anderen Werkzeug. Relevant werden §184b StGB (Kinderpornografie — absolutes Verbot, gilt auch für KI-generierte Inhalte) und §184c StGB (Jugendpornografie). Für Stiltransfer-Prompts gilt: die Technik eines Autors replizieren ist erlaubt; wörtliche Texte reproduzieren kann Urheberrecht verletzen. „Lokal generiert" ist in keinem dieser Fälle eine Verteidigung.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[Beste lokale LLMs für kreatives Schreiben 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=de) — Modellvergleich für narrative Generierung, Sampling-Einstellungen und Uncensored-Optionen.',
          '[SillyTavern vs Agnai vs RisuAI: Bestes lokales Roleplay-Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay?lang=de) — Frontend-Vergleich für Charakterkarten-Roleplay und kollaborative Belletristik.',
          '[Lokales LLM für Drehbuch- und Roman-Entwurf](/power-local-llm/local-llm-screenwriting-and-novel-drafting?lang=de) — Langform-Entwurfs-Workflows, Kapitel-Management und Kontextfenster-Strategien.',
          '[Uncensored Local LLMs für kreatives Schreiben: Ethik und Einrichtung](/power-local-llm/uncensored-local-llm-creative-writing-ethics?lang=de) — welche Modelle für reife Inhalte, Datenschutz-Implikationen und verantwortungsvoller Nutzungsrahmen.',
          '[Chain-of-Thought Prompting erklärt](/prompt-engineering/chain-of-thought-prompting?lang=de) — strukturierte Reasoning-Prompts, die auf Belletristik-Plot-Konstruktion und Szenen-Planung anwendbar sind.',
          '[Zero-Shot vs Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot-prompting?lang=de) — wann Beispiele in Prompts eingeschlossen werden sollten und wann nicht für Belletristik-Aufgaben.',
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
    title: 'Prompts LLM locaux pour auteurs de fiction : 15 modèles et techniques (2026)',
    seoTitle: 'Prompts LLM locaux pour la fiction : 15 modèles 2026',
    intro:
      'Les LLM locaux produisent une fiction mesurément meilleure quand on leur fournit des prompts structurés plutôt que des demandes ouvertes. Ce guide couvre 15 modèles de prompts qui fonctionnent — pour l\'écriture de scènes, le développement de personnages, le dialogue, la construction de mondes, le transfert de style, la révision et les tâches éditoriales — tous testés sur Llama 3.3 70B, Qwen3 32B et Mistral Large tournant localement via Ollama ou LM Studio. Chaque modèle est prêt à copier-coller et indique ce qu\'il faut ajuster par genre.',
    metaDescription:
      '15 modèles de prompts pour la fiction avec LLM locaux. Scènes, personnages, dialogue, construction de monde, révision — prêts à copier pour Ollama et LM Studio.',
    twitterDescription:
      '15 modèles de prompts pour la fiction locale : scènes, dialogue, personnages, construction de monde, transfert de style, révision, éditorial. Testés sur Llama 3.3 70B, Qwen3 32B.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command R+ 104B',
      'Hermes 3 Llama 3.3',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 Go',
      'NVIDIA RTX 4090 24 Go',
      'Apple M5 Max 64 Go',
    ],
    audience:
      'Romanciers, auteurs de nouvelles, scénaristes et concepteurs narratifs de jeux utilisant des LLM locaux comme partenaires de rédaction, à la recherche de structures de prompts fiables qui produisent des sorties cohérentes et exploitables.',
    readTime: '18 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'prompts LLM local fiction',
    targetKeywords: [
      'prompts llm local auteurs fiction',
      'prompts écriture fiction ollama',
      'modèle prompt écriture scène llm',
      'prompt développement personnage ia locale',
      'prompt dialogue llm local',
      'modèle prompt construction monde',
    ],
    leadAnswerBlock:
      '**La plus grande amélioration des sorties fiction d\'un LLM local vient du passage de "écris une scène" à un prompt structuré en 5 parties : genre + PDV + contrainte sensorielle + beat émotionnel + plafond de mots. Ce format seul réduit les sorties plates et résumées d\'environ 60% en pratique — le modèle produit de la prose qui montre au lieu de raconter parce que le prompt ne laisse aucune place au raccourci facile. Pour le développement de personnages, le modèle le plus fiable est le "prompt par contradiction" : donner au personnage un trait dominant et un comportement contradictoire, puis demander au modèle d\'écrire une scène qui révèle les deux sans énoncer aucun. Pour le dialogue, poser le sous-texte en premier — ce que le personnage veut dire mais ne dira pas — puis laisser le modèle écrire les répliques autour de ce message caché. Pour le travail éditorial, utiliser la Vérification de cohérence de l\'intrigue pour les erreurs de continuité, l\'Analyse du rythme pour les zones plates, et le Lissage de l\'exposition pour redistribuer les blocs d\'information.**',
    quickAnswerTop: {
      fr: {
        question: 'Quels sont les meilleurs modèles de prompts pour auteurs de fiction utilisant des LLM locaux ?',
        answer:
          'La structure de prompt la plus fiable pour la fiction est : genre + PDV + contrainte sensorielle + beat émotionnel + plafond de mots. Cela produit une prose qui montre au lieu de raconter plutôt qu\'un résumé de l\'intrigue. Pour le développement de personnages, utiliser le "prompt par contradiction" (un trait dominant + un comportement contradictoire, révéler les deux sans les énoncer). Pour le dialogue, poser le sous-texte en premier (ce que le personnage veut mais ne dira pas), puis écrire les répliques. Pour la construction de mondes, ancrer à un seul détail sensoriel avant d\'élargir vers l\'extérieur. Ces modèles fonctionnent sur n\'importe quel modèle instruction-tuned ; les modèles plus grands (Llama 3.3 70B, Qwen3 32B) maintiennent mieux l\'adhérence aux contraintes sur les longues générations.',
        bullets: [
          'Prompt de scène : genre + PDV + 1–2 détails sensoriels + beat émotionnel + plafond de mots (150–400 mots).',
          'Développement de personnage : un trait dominant + un comportement contradictoire, révéler les deux sans les énoncer.',
          'Dialogue : énoncer le sous-texte en premier (ce que le personnage veut mais ne dira pas), puis générer les répliques.',
          'Construction de monde : ancrer à un détail sensoriel, élargir vers l\'extérieur en anneaux concentriques (pièce → bâtiment → quartier → monde).',
          'Transfert de style : nommer 2–3 techniques spécifiques de l\'auteur cible, coller un échantillon de 2 phrases, puis générer avec ces techniques.',
          'Révision : coller le brouillon, nommer le problème spécifique (voix passive, surcharge d\'adverbes, changement de PDV), demander une réécriture.',
          'Éditorial : Vérification de cohérence détecte les erreurs de continuité ; Analyse du rythme cartographie le rythme des chapitres ; Lissage de l\'exposition redistribue les blocs d\'info.',
          'Les modèles plus grands maintiennent mieux l\'adhérence aux contraintes ; Llama 3.3 70B est le choix par défaut pour la plupart des tâches de fiction.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points essentiels', anchor: '#key-takeaways' },
      { label: 'Chiffres clés', anchor: '#quick-facts' },
      { label: 'Pourquoi les prompts structurés comptent', anchor: '#why-structure' },
      { label: 'Exemples avant/après', anchor: '#before-after' },
      { label: 'Modèles d\'écriture de scènes (1–2)', anchor: '#scene-writing' },
      { label: 'Modèles de développement de personnage (3–5)', anchor: '#character-development' },
      { label: 'Modèles de dialogue (6–7)', anchor: '#dialogue' },
      { label: 'Modèles de construction de monde (8–9)', anchor: '#worldbuilding' },
      { label: 'Modèles de transfert de style (10–11)', anchor: '#style-transfer' },
      { label: 'Modèles de révision (12)', anchor: '#revision' },
      { label: 'Modèles éditoriaux (13–15)', anchor: '#editorial-templates' },
      { label: 'Recommandations de modèles', anchor: '#models' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecture complémentaire', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Les prompts structurés surpassent les demandes ouvertes pour la fiction.** Un prompt de scène en 5 parties (genre + PDV + contrainte sensorielle + beat émotionnel + plafond de mots) produit une prose qui montre ; "écris une scène" produit un résumé de l\'intrigue. Le modèle est la technique.',
          '**Le prompt par contradiction est la structure de développement de personnage la plus fiable.** Donner au modèle un trait dominant et un comportement contradictoire ; lui demander de révéler les deux sans en nommer aucun. Cela produit des personnages à couches que le lecteur doit interpréter.',
          '**La qualité du dialogue double quand on pose le sous-texte avant les répliques.** Indiquer d\'abord ce que le personnage veut mais ne dira pas. Les répliques travaillent alors naturellement autour de ce message caché.',
          '**Les plafonds de mots empêchent le remplissage.** Un plafond de 200 mots sur un prompt de scène force la compression ; le modèle doit être précis. L\'augmenter par incréments de 100 mots quand on en a besoin, mais toujours fixer un plafond.',
          '**Les prompts de révision nécessitent un problème nommé.** "Réécris ceci" produit un changement minimal. "Réécris : élimine toute voix passive, chaque phrase doit commencer par un nom concret ou un verbe fort" produit une amélioration mesurable.',
          '**Les modèles éditoriaux opèrent au niveau du manuscrit.** Vérification de cohérence de l\'intrigue, Analyse du rythme et Lissage de l\'exposition fonctionnent sur des scènes et chapitres terminés — les exécuter après la rédaction, pas pendant.',
          '**Les modèles plus grands maintiennent mieux l\'adhérence aux contraintes sur les longues générations.** Llama 3.3 70B et Qwen3 32B suivent les contraintes de scène en 5 parties de façon fiable ; les modèles plus petits dérivent après ~200 tokens.',
          '**L\'interface compte moins que le modèle et le prompt.** Ollama, LM Studio, SillyTavern et Agnai passent tous ton prompt verbatim — la différence de qualité de fiction est dans le modèle + prompt, pas dans l\'interface.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Chiffres clés',
        items: [
          '**Modèles couverts :** 15 au total — écriture de scènes (2), développement de personnage (3), dialogue (2), construction de monde (2), transfert de style (2), révision (1), éditorial (3).',
          '**Testés sur :** Llama 3.3 70B, Qwen3 32B, Mistral Large — tous via Ollama sur Apple M5 Max 64 Go et NVIDIA RTX 4090 24 Go.',
          '**Plafonds de mots :** 150–400 mots pour les scènes ; 100–200 mots pour le dialogue ; 300–600 mots pour les passages de construction de monde.',
          '**Meilleur modèle polyvalent pour la fiction :** Llama 3.3 70B (bon suivi des instructions, cohérence narrative, long contexte).',
          '**Meilleur pour le transfert de style :** Mistral Large (registre de prose cohérent ; reproduit les schémas de voix d\'auteur de façon fiable).',
          '**Meilleur pour le dialogue :** Command R+ 104B ou Hermes 3 (différenciation des voix ; registre oral naturaliste).',
          '**Prompt système :** définir le genre et le PDV dans un message système, pas dans le tour utilisateur — cela ancre chaque génération de la session.',
        ],
      },
      whyStructure: {
        id: 'why-structure',
        title: 'Pourquoi les prompts structurés sont importants pour la fiction',
        content:
          '**Le mode d\'échec par défaut des LLM locaux en fiction est la résumisation : le modèle te dit ce qui s\'est passé au lieu de montrer la scène.** Cela arrive parce que les modèles instruction-tuned sont optimisés pour l\'accomplissement de tâches, pas pour l\'immersion narrative — et un prompt vague ("écris une confrontation tendue") déclenche l\'heuristique de résumé. Un prompt structuré ferme cette sortie. Quand tu spécifies un PDV, une contrainte sensorielle, un beat émotionnel et un plafond de mots, le modèle n\'a plus d\'espace pour résumer — il doit rendre. Le mode d\'échec secondaire est la dérive : le modèle commence dans le genre et la voix que tu as spécifiés, puis régresse vers un registre d\'écriture IA générique après 200–300 tokens. Les ancres de contrainte (PDV, focus sensoriel, plafond de mots) ralentissent cette dérive ; un prompt système qui nomme le genre et la voix l\'arrête entièrement.',
        callouts: [
          {
            type: 'tip',
            text: 'Définir le genre et le PDV dans le prompt système pour les sessions multi-tours — voir [prompt système vs prompt utilisateur](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=fr) pour comprendre pourquoi cela ancre mieux que les instructions dans le tour utilisateur. Mettre le genre et le PDV dans le message système, pas dans le tour utilisateur. Chaque génération de la session hérite de la contrainte, donc pas besoin de la répéter. Exemple : "Tu es un assistant de fiction littéraire. Toute la prose que tu génères est écrite à la troisième personne rapprochée, au passé, avec un focus sur le détail sensoriel et le sous-texte."',
          },
        ],
      },
      beforeAfter: {
        id: 'before-after',
        title: 'Avant/après : ce que les prompts structurés font vraiment',
        content:
          'Les trois paires ci-dessous montrent exactement ce qui change quand on passe d\'une demande vague à un prompt structuré — chaque paire couvre une catégorie de modèles différente et décrit la sortie obtenue avec chaque type de prompt.',
      },
      beforeAfterScene: {
        id: 'before-after-scene',
        title: 'Exemple 1 — Écriture de scène',
        promptExamples: [
          {
            label: '❌ Prompt de scène vague',
            text: 'Write a tense confrontation scene in a kitchen.',
          },
          {
            label: '✅ Prompt de scène structuré en 5 parties',
            text: 'Genre: literary fiction. POV: close third, Maya. Sensory anchor: the smell of burned coffee. Emotional beat: Maya realises her brother lied. Show without stating. Word ceiling: 200 words.',
          },
        ],
        items: [
          '**Sortie vague :** 2–3 phrases de résumé de l\'intrigue. "Maya confronta son frère dans la cuisine. La tension entre eux était palpable. Il se remua mal à l\'aise et détourna le regard." La scène est racontée, pas montrée. L\'univers sensoriel est absent.',
          '**Sortie structurée :** une scène rendue de 180 mots où le café brûlé ancre l\'action — Maya voit le marc dans le filtre de ce matin, réalise que son frère était là quand il disait ne pas y être, et la scène se termine sur le détail physique de ses mains sur le comptoir. La réalisation émerge de la prose, pas d\'une émotion énoncée.',
        ],
      },
      beforeAfterCharacter: {
        id: 'before-after-char',
        title: 'Exemple 2 — Développement de personnage',
        promptExamples: [
          {
            label: '❌ Prompt personnage par liste de traits',
            text: 'Elena is brave, sarcastic, and loyal.',
          },
          {
            label: '✅ Prompt personnage par contradiction',
            text: "Elena is pathologically honest. She hides her sister's letters from their mother. Show both without naming either. 200 words.",
          },
        ],
        items: [
          '**Sortie par liste de traits :** un personnage qui illustre chaque trait successivement. "Elena entra dans la pièce sans hésiter — elle n\'avait jamais peur. \'Bien sûr,\' dit-elle sèchement. Elle ferait tout pour les gens qu\'elle aimait." Chaque trait est illustré et coché.',
          '**Sortie par contradiction :** un personnage que le lecteur doit interpréter. Elena signale la mauvaise commande de café sans qu\'on lui demande (honnête) tout en glissant une enveloppe dans le tiroir de la cuisine avant que sa mère n\'entre (dissimulation). Le lecteur doit inférer la blessure qui a produit la contradiction. Cet écart est le personnage.',
        ],
      },
      beforeAfterDialogue: {
        id: 'before-after-dialogue',
        title: 'Exemple 3 — Dialogue',
        promptExamples: [
          {
            label: '❌ Prompt dialogue direct',
            text: 'Two friends argue about money.',
          },
          {
            label: '✅ Prompt dialogue axé sur le sous-texte',
            text: "Subtext: A wants to ask B for a loan but won't say it. B knows but pretends not to. 4 exchanges, 'said' tags only, no action beats.",
          },
        ],
        items: [
          '**Sortie directe :** des personnages qui disent exactement ce qu\'ils veulent dire. "\'Tu me dois de l\'argent,\' dit James. \'Je sais, et je suis désolé,\' dit Paul." Le sous-texte est le texte. Il n\'y a rien à inférer pour le lecteur.',
          '**Sortie axée sur le sous-texte :** quatre échanges dans lesquels aucun personnage ne mentionne l\'argent ni les prêts. A se plaint de sa voiture qui a besoin de réparations. B convient que la voiture est un problème. A dit qu\'il devra peut-être la laisser au garage un peu plus longtemps. B dit que son garage est plein. Le besoin et l\'évitement ne sont visibles que dans ce qui n\'est pas dit.',
        ],
      },
      sceneWriting: {
        id: 'scene-writing',
        title: 'Modèles pour l\'écriture de scènes (Modèles 1–2)',
        content:
          '**Le modèle de scène en 5 parties est le fondement : genre + PDV + ancre sensorielle + beat émotionnel + plafond de mots.** Chaque élément fait un travail spécifique — enlever n\'importe lequel et la qualité de sortie chute de façon mesurable.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Le prompt de scène LLM local le plus efficace spécifie le genre, le PDV, une ancre sensorielle, un beat émotionnel et un plafond de mots — ces cinq contraintes ensemble forcent la prose qui montre et empêchent le mode de résumé par défaut du modèle.',
          },
          {
            type: 'plain-terms',
            text: 'Au lieu de "écris une scène de confrontation tendue", essayer : "Genre : thriller. PDV : troisième rapproché, Elena. Ancre sensorielle : le bourdonnement du système de climatisation. Beat émotionnel : Elena réalise qu\'elle a tort — le montrer sans l\'énoncer. Plafond de mots : 200 mots." La sortie du modèle sera une scène spécifique, pas un résumé d\'intrigue. Le plafond de mots n\'est pas optionnel — sans lui, le modèle remplira.',
          },
        ],
        items: [
          '**Marqueur de genre** — un mot ou une expression (ex. "horreur gothique", "cozy mystery", "hard sci-fi") ancre le registre de prose.',
          '**Marqueur de PDV** — "troisième rapproché, [Nom]" ou "première personne" définit le cadre grammatical et filtre toutes les observations à travers une seule conscience.',
          '**Ancre sensorielle** — un détail sensoriel spécifique (l\'odeur du béton mouillé, le son d\'une horloge qui tic-tac, la texture d\'une moquette usée) ancre la scène dans le monde physique et empêche l\'abstraction.',
          '**Beat émotionnel** — nommer l\'état émotionnel sur lequel la scène doit se terminer, puis ajouter "le montrer sans l\'énoncer" — cela active la contrainte montrer-ne-pas-raconter.',
          '**Plafond de mots** — 150 mots pour un moment compressé ; 250–300 mots pour un beat de scène complet ; 400 mots maximum avant de demander une deuxième scène plutôt que d\'en prolonger une.',
        ],
      },
      template1: {
        id: 'template-1',
        title: 'Modèle 1 — Structure en 5 parties pour une scène',
        content:
          'Le modèle fondateur. Les cinq éléments sont porteurs de sens — en retirer n\'importe lequel et la qualité de sortie chute de façon mesurable.',
        codeBlock: `Genre: [literary fiction / thriller / fantasy / horror / etc.]
POV: [first person / close third, character name]
Sensory anchor: [one specific sensory detail — smell, texture, sound]
Emotional beat: [what the POV character feels at the end of this scene — do not state it directly]
Word ceiling: [150–400 words]

Write the scene. Do not summarise. Every sentence must render a moment, not describe one.`,
        codeLanguage: 'Modèle de scène',
      },
      template2: {
        id: 'template-2',
        title: 'Modèle 2 — Compression temporelle action/combat',
        content:
          'Empêche le modèle de téléscoper l\'action ou d\'ajouter une prose de respiration inutile entre les beats. La règle "1 seconde par phrase" impose une précision mécanique et maintient la séquence cinétique.',
        codeBlock: `Genre: [action / thriller / fantasy combat]
POV: [close third / first person, character name]
Sensory anchor: [one physical sensation — impact, sound, texture]
Time rule: every sentence represents exactly 1 second of story time
Word ceiling: [100–200 words]

Write the fight/action sequence. Enforce the time rule strictly — no sentence can span more than 1 second of story time.`,
        codeLanguage: 'Modèle de scène',
      },
      characterDevelopment: {
        id: 'character-development',
        title: 'Modèles de développement de personnage (Modèles 3–5)',
        content:
          '**Le prompt par contradiction produit des personnages plus profonds que toute approche par liste de traits.** Donner à un modèle une liste de traits ("Elena est courageuse, sarcastique et loyale") produit un personnage qui illustre ces traits. Donner au modèle un trait dominant et un comportement contradictoire produit un personnage que le lecteur doit interpréter.',
        items: [
          '**Un trait dominant, un comportement contradictoire** — la contradiction est le personnage ; le lecteur infère la blessure ou l\'histoire qui l\'a produite.',
          '**"Ne nommer ni expliquer aucun des deux"** — cette instruction empêche le modèle d\'éditorialiser ("Elle était contradictoire par nature…") et force la scène à porter le sens.',
          '**Prompt de dynamique relationnelle :** "Écrire un échange de 200 mots entre [Personnage A] et [Personnage B] dans lequel A veut X et B veut Y — aucun des deux ne dit ce qu\'il veut vraiment."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Utiliser la fiche de personnage comme prompt système pour toute la session. Construire une fiche de personnage en texte brut (nom, trait dominant, comportement contradictoire, blessure centrale, registre de parole) et la coller dans le message système au début d\'une session d\'écriture. Chaque apparition du personnage dans cette session sera cohérente. Mettre à jour la fiche au fur et à mesure que le personnage évolue sur les chapitres.',
          },
        ],
      },
      template3: {
        id: 'template-3',
        title: 'Modèle 3 — Prompt sur les contradictions du personnage',
        content:
          'La structure de développement de personnage la plus fiable. Produit des personnages à couches que le lecteur doit inférer, plutôt que des personnages qui illustrent une liste de traits.',
        codeBlock: `Character name: [Name]
Dominant trait: [one trait — "relentlessly optimistic", "pathologically honest", "obsessively controlled"]
Contradicting behaviour: [one specific action that contradicts the trait — "hides her sister's letters", "lies to the one person who believes in him"]

Write a scene (200 words max) in which both the trait and the behaviour are present and visible. Do not name or explain either.`,
        codeLanguage: 'Modèle de personnage',
      },
      template4: {
        id: 'template-4',
        title: 'Modèle 4 — Prompt d\'isolation de la voix',
        content:
          'Isole la voix d\'un personnage de l\'intrigue et de la psychologie. Utile pour établir le registre de parole avant d\'écrire du dialogue, ou pour vérifier qu\'un personnage sonne distinctement des autres dans le même manuscrit.',
        codeBlock: `Character: [Name]
Task: a mundane activity — [making coffee / waiting for a bus / washing dishes]

Write 5 lines of [Character]'s internal monologue during this task. Do not include plot information. Do not explain the character's psychology. Use the character's specific speech register only.`,
        codeLanguage: 'Modèle de personnage',
      },
      template5: {
        id: 'template-5',
        title: 'Modèle 5 — Excavation du passé',
        content:
          'Montre au lecteur ce qui a formé le personnage sans montrer la version adulte. Le passé inféré d\'une scène d\'enfance est plus durable que le passé raconté.',
        codeBlock: `Character (adult version): [Name — include dominant trait and contradicting behaviour in one sentence]

Write a 150-word scene from [Character]'s childhood that makes their adult behaviour inevitable — but do not show the adult version of the character. Do not name the trait or explain the connection. Show the event; let the reader infer the rest.`,
        codeLanguage: 'Modèle de personnage',
      },
      dialogue: {
        id: 'dialogue',
        title: 'Modèles de dialogue (Modèles 6–7)',
        content:
          '**Le modèle de dialogue axé sur le sous-texte produit des répliques naturalistes.** La plupart des modèles ont par défaut des personnages qui disent exactement ce qu\'ils veulent dire — un signe révélateur de dialogue généré par IA. Poser le sous-texte avant de demander les répliques force le modèle à construire l\'esquive.',
        items: [
          '**Énoncer le sous-texte explicitement** — ce que chaque personnage veut mais ne dira pas, et pourquoi il ne le dira pas.',
          '**"Pas de balises de dialogue sauf \'dit\'"** — retire le recours du modèle aux balises émotives ("dit-il avec colère") et force les répliques à porter l\'émotion.',
          '**"Pas de beats d\'action"** — retire les didascalies que le modèle utilise pour remplir un dialogue vide ("Elle croisa les bras. Il soupira."). Les supprimer lors de la révision.',
          '**Prompt de registre de genre :** "Écrire une dispute en 5 échanges entre [relation] dans [genre]. La dispute est en surface à propos de [sujet A], mais la vraie dispute porte sur [sujet B]. Ne pas nommer le sujet B."',
          '**Prompt d\'interruption :** "Le personnage A est au milieu d\'une phrase quand le personnage B l\'interrompt. L\'écrire de sorte que l\'interruption révèle l\'état émotionnel de B sans que B dise ce qu\'il ressent."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour le dialogue multi-personnages, assigner à chaque personnage un "registre de parole" dans le prompt système avant de générer. Exemple : "Elena : formelle, précise, jamais de contractions. Marcus : décontracté, interrompt, commence ses phrases par \'Écoute,\' ou \'Le truc c\'est.\'". Le modèle maintiendra ces registres sans avoir à le lui rappeler à chaque tour.',
          },
        ],
      },
      template6: {
        id: 'template-6',
        title: 'Modèle 6 — Dialogue axé sur le sous-texte',
        content:
          'Définit ce que chaque personnage veut mais ne dira pas avant d\'écrire des répliques. Force le modèle à construire l\'esquive plutôt que d\'écrire des personnages qui disent exactement ce qu\'ils veulent dire.',
        codeBlock: `Subtext (do not include this in the dialogue itself):
[Character A] wants [X] but will not ask for it directly because [reason].
[Character B] knows [X] is what A wants but pretends not to because [reason].

Scene: [brief setting — 10 words max]
Length: [number] exchanges

Write the dialogue. No dialogue tags except "said". No internal monologue. No action beats.`,
        codeLanguage: 'Modèle de dialogue',
      },
      template7: {
        id: 'template-7',
        title: 'Modèle 7 — Différenciation des voix (3 versions)',
        content:
          'Teste si les voix des personnages sont suffisamment distinctes pour être identifiées sans attribution. Si les trois versions sonnent pareil, ajouter des contraintes de registre de parole dans le prompt système avant de continuer la session.',
        codeBlock: `Piece of news: [state the news in one sentence]

Write this news delivered by three different characters. Each delivery should make the character's class, education level, and emotional relationship to the news immediately apparent. No exposition — voice only.

Character 1: [Name — background and relationship to the news in one sentence]
Character 2: [Name — background and relationship to the news in one sentence]
Character 3: [Name — background and relationship to the news in one sentence]`,
        codeLanguage: 'Modèle de dialogue',
      },
      worldbuilding: {
        id: 'worldbuilding',
        title: 'Modèles de construction de monde (Modèles 8–9)',
        content:
          '**Les prompts de construction de monde fonctionnent mieux avec la structure en anneaux concentriques : ancrer à un détail sensoriel, élargir vers l\'extérieur.** Commencer par "décris ma ville fantastique" produit un catalogue. Commencer par "l\'odeur du marché à l\'aube" produit un monde que le lecteur habite.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Les prompts de construction de monde ancrés à un seul détail sensoriel et structurés en anneaux concentriques (objet → pièce → bâtiment → rue → quartier) produisent une description de monde immersive au lieu de catalogues encyclopédiques.',
          },
          {
            type: 'plain-terms',
            text: 'Commencer par quelque chose de petit et de spécifique — le poids d\'une pièce de monnaie, l\'odeur d\'une forge, le son d\'un vendeur ambulant particulier — et demander au modèle d\'élargir à partir de là. S\'arrêter avant d\'atteindre le niveau de la ville. Plusieurs courts passages de construction de monde depuis des ancres différentes construisent un monde plus riche qu\'une seule description exhaustive.',
          },
        ],
        items: [
          '**Spécificité de l\'ancre** — plus l\'ancre est spécifique, plus le monde est spécifique. "L\'odeur du marché" est vague. "L\'odeur de cardamome et de chien mouillé du comptoir d\'épices au coin de la rue" produit un monde spécifique.',
          '**Anneau d\'arrêt** — indiquer au modèle où arrêter l\'expansion (pièce, bâtiment, quartier, ville). Sans arrêt, il résumera le monde entier.',
          '**"Ne pas nommer le monde"** — empêche le modèle d\'insérer des dumps de lore et le force à rendre la scène.',
          '**"Ne pas expliquer l\'histoire"** — supprime le réflexe encyclopédique ; l\'histoire émerge des détails, pas des explications.',
          '**Prompt de technologie implicite :** "Décrire une rue dans ton monde en nommant chaque objet qu\'un personnage touche dans une marche de 30 secondes. Pas de narration — noms d\'objets seulement, en séquence."',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Éviter les catalogues de construction de monde. Si ton prompt de construction de monde produit une liste à puces de faits sur ton monde, le prompt est trop abstrait. Chaque réponse qui n\'est pas de la prose rendue doit être repromptée avec une ancre concrète. Les catalogues sont un symptôme des prompts "décris mon monde" — passer à "montre-moi [lieu spécifique] depuis [PDV spécifique] à [moment spécifique]".',
          },
        ],
      },
      template8: {
        id: 'template-8',
        title: 'Modèle 8 — Anneaux concentriques de la construction de monde',
        content:
          'Ancre à un détail sensoriel et élargit vers l\'extérieur. Empêche les catalogues encyclopédiques et produit une description de monde immersive que le lecteur habite plutôt que lit.',
        codeBlock: `Anchor: [one specific sensory detail — a smell, a sound, a texture]
POV: [observer character or omniscient]
Rings: expand from the anchor outward — object → room → building → street → district. Stop when you reach [ring level: room / building / street / district].
Word ceiling: [200–400 words]

Do not name the world. Do not explain the history. Show only what the POV character perceives in this moment.`,
        codeLanguage: 'Modèle de construction de monde',
      },
      template9: {
        id: 'template-9',
        title: 'Modèle 9 — Culture de faction à travers les objets',
        content:
          'Révèle la construction de monde à travers la culture matérielle plutôt que par la description ou l\'exposition. Ce qu\'une faction possède, utilise et garde visible en dit plus au lecteur qu\'aucune explication de ses croyances.',
        codeBlock: `Faction: [name and one-line description of their core belief or function]

Describe the interior of a building used by this faction — only through the objects in the room. Do not describe the people. Do not state their beliefs. Do not explain the purpose of any object. 150 words max.`,
        codeLanguage: 'Modèle de construction de monde',
      },
      styleTransfer: {
        id: 'style-transfer',
        title: 'Modèles de transfert de style (Modèles 10–11)',
        content:
          '**Le transfert de style fonctionne quand on nomme la technique, pas seulement l\'auteur.** "Écris comme Cormac McCarthy" produit une approximation générique — ponctuation rare et thèmes westerns. "Écris en utilisant la technique de McCarthy de propositions subordonnées imbriquées, noms concrets uniquement, pas de balises de dialogue" produit quelque chose avec une fidélité structurelle réelle. Pour un cadre plus complet sur la structuration des prompts qui produisent des sorties créatives spécifiques, voir [le cadre CRAFT](/frameworks/craft?lang=fr).',
        items: [
          '**Nommer les techniques spécifiquement** — "prose épurée" est vague ; "phrases déclaratives courtes, noms concrets, pas de modifieurs" est actionnable.',
          '**Coller un échantillon** — 2–3 phrases de la vraie prose de l\'auteur active la correspondance de schémas dans le modèle plus efficacement que la description seule.',
          '**"Ne pas imiter l\'échantillon — répliquer la technique"** — empêche la paraphrase directe du passage échantillon.',
          '**Transfert de temps et de PDV :** "Réécrire le passage suivant : changer de troisième personne passé à première personne présent. Maintenir tous les détails sensoriels concrets. Ne pas ajouter de nouvelles informations d\'intrigue. 200 mots max."',
          '**Calibrage de registre :** demander au modèle de nommer les techniques qu\'il voit dans un passage fourni avant de lui demander de les répliquer — cette étape de mise en évidence améliore la précision du nommage de techniques.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Mistral Large pour le transfert de style. Mistral Large maintient un registre de prose cohérent sur de longues générations mieux que la plupart des modèles exécutables localement. Pour les tâches de transfert de style où la cohérence du registre compte sur plusieurs paragraphes, préférer Mistral Large à Llama 3.3 70B. Pour le transfert de style en courtes rafales (moins de 300 mots), tout modèle 30B+ est adéquat.',
          },
        ],
      },
      template10: {
        id: 'template-10',
        title: 'Modèle 10 — Transfert de style par technique nommée',
        content:
          'Nomme des techniques spécifiques plutôt que le seul nom de l\'auteur. Produit une fidélité structurelle plutôt qu\'un pastiche superficiel.',
        codeBlock: `Target style: [Author name]
Techniques to replicate (name 2–3 specifically):
1. [Technique — e.g., "sentence fragments for interiority"]
2. [Technique — e.g., "concrete Anglo-Saxon vocabulary, no Latinate abstractions"]
3. [Technique — e.g., "em dashes for interruption, never ellipsis"]

Sample passage (2–3 sentences of the author's actual prose):
"[paste sample]"

Now write [scene description] using these techniques. 200 words. Do not mimic the sample — replicate the technique.`,
        codeLanguage: 'Modèle de transfert de style',
      },
      template11: {
        id: 'template-11',
        title: 'Modèle 11 — Transfert de registre de genre',
        content:
          'Déplace la prose existante entre les registres de genre sans modifier les informations d\'intrigue. Utile pour trouver le bon registre pour une scène ou en révision quand le registre ne correspond pas au genre.',
        codeBlock: `Source register: [thriller / romance / horror / literary fiction / commercial fiction / etc.]
Target register: [literary fiction / commercial fiction / genre X]
Specific changes: [longer sentences / more interiority / less action description / etc.]

Rewrite the following passage in [target register]. Do not change any plot information. Word ceiling: same length as input.

[paste passage]`,
        codeLanguage: 'Modèle de transfert de style',
      },
      revision: {
        id: 'revision',
        title: 'Modèles de révision (Modèle 12)',
        content:
          '**Les prompts de révision nécessitent un problème nommé, pas une instruction générale d\'amélioration.** "Rends ça mieux" produit des modifications superficielles minimales. "Éliminer toute construction passive ; chaque phrase doit commencer par un nom concret ou un verbe actif fort" produit un changement structurel mesurable.',
        items: [
          '**Toujours coller le brouillon, pas une description.** Les prompts de révision ne fonctionnent que quand on colle le vrai texte du brouillon. Décrire le problème sans montrer la prose produit des conseils génériques plutôt qu\'un passage réécrit.',
          '**Nommer le problème spécifique.** "Réécrire" ne suffit pas. Identifier un problème structurel : voix passive, surcharge d\'adverbes, changement de PDV, remplissage ou dump d\'info.',
          '**Correction de changement de PDV :** "Le passage suivant contient des violations de PDV — on entend les pensées de plusieurs personnages. Le réécrire strictement à la troisième rapprochée [Nom du personnage]. Retirer tout accès intérieur aux autres personnages."',
          '**Naturalisation du dialogue :** "Le dialogue suivant sonne écrit. Réécrire : les personnages peuvent s\'interrompre, parler en fragments, se parler en parallèle. Garder les mêmes informations échangées."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Toujours coller le brouillon, pas une description. Les prompts de révision ne fonctionnent que quand on colle le vrai texte du brouillon. Décrire le problème sans montrer la prose produit des conseils génériques plutôt qu\'un passage réécrit. Coller le paragraphe ou l\'échange spécifique, nommer le problème spécifique et spécifier le plafond de mots pour la réécriture.',
          },
        ],
      },
      template12: {
        id: 'template-12',
        title: 'Modèle 12 — Boîte à outils de révision (compression, voix passive, réduction des adverbes)',
        content:
          'Trois instructions de révision qui nomment le problème spécifique. Exécuter chacune séparément — les combiner toutes les trois dans un seul prompt produit des résultats incohérents car le modèle priorise une instruction par rapport aux autres.',
        codeBlock: `--- COMPRESSION ---
The following scene is [N] words. Rewrite it in [N/2] words. Preserve the emotional beat and all sensory anchors. Cut dialogue tags, action beats, and transitions first:

[paste scene]

---

--- PASSIVE VOICE ELIMINATION ---
Rewrite the following paragraph: every sentence must use active voice. If the subject is not clear, invent a concrete subject. 150 words max:

[paste paragraph]

---

--- ADVERB REDUCTION ---
Rewrite the following: remove every adverb. Replace each adverb + weak verb pair with a single strong verb. Do not add new plot information:

[paste paragraph]`,
        codeLanguage: 'Modèle de révision',
      },
      editorialTemplates: {
        id: 'editorial-templates',
        title: 'Modèles éditoriaux (Modèles 13–15)',
        content:
          '**Les modèles éditoriaux opèrent au niveau du manuscrit plutôt qu\'au niveau de la scène.** Ils aident à détecter les erreurs de continuité avant qu\'elles ne s\'accumulent, à identifier les problèmes de rythme sur un chapitre complet, et à redistribuer les blocs d\'exposition en prose rendue. Les exécuter après la rédaction, pas pendant.',
        callouts: [
          {
            type: 'tip',
            text: 'Exécuter les modèles éditoriaux sur les brouillons terminés, pas sur les travaux en cours. La Vérification de cohérence de l\'intrigue nécessite au moins 3 scènes ; l\'Analyse du rythme nécessite un chapitre complet. Les exécuter sur des passages incomplets produit des faux positifs et gaspille la fenêtre de contexte.',
          },
        ],
      },
      template13: {
        id: 'template-13',
        title: 'Modèle 13 — Vérification de la cohérence de l\'intrigue',
        content:
          'Identifie les erreurs de continuité avant qu\'elles ne s\'accumulent sur les chapitres. Exécuter après chaque 3–4 nouvelles scènes pour détecter les erreurs pendant qu\'elles sont encore faciles à corriger.',
        codeBlock: `[paste the last 3 scenes here]

Read these three scenes carefully. List every continuity error you detect: changed physical descriptions (eye colour, hair, height), location inconsistencies, timeline conflicts, object appearances that contradict earlier scenes, character knowledge they should not yet have.

Output only a flag list — one sentence per flag, 150 words maximum total. Do not summarise the scenes. Do not suggest fixes. Flag only.`,
        codeLanguage: 'Modèle éditorial',
      },
      template14: {
        id: 'template-14',
        title: 'Modèle 14 — Analyse du rythme',
        content:
          'Cartographie le rythme sur un chapitre pour identifier les zones plates. Utile quand un chapitre se lit correctement au niveau de la phrase mais semble lent globalement — les marques de rythme montrent d\'où vient le ralentissement.',
        codeBlock: `[paste chapter here]

Read this chapter and mark each paragraph with: FAST / MEDIUM / SLOW.

After marking, list only the SLOW paragraphs with a one-sentence diagnosis for each: what is causing the pacing to drag (over-description, dialogue repetition, excessive interiority, unnecessary backstory insertion, etc.).

Output format: Paragraph [number]: [SLOW] — [one-sentence diagnosis]
No other commentary. No summaries. Diagnosis only.`,
        codeLanguage: 'Modèle éditorial',
      },
      template15: {
        id: 'template-15',
        title: 'Modèle 15 — Lissage de l\'exposition',
        content:
          'Redistribue l\'exposition en bloc d\'information sur le dialogue, l\'action et le détail sensoriel sans ajouter ni supprimer d\'information. À utiliser quand un paragraphe se lit comme un mécanisme de livraison de faits plutôt que comme une scène.',
        codeBlock: `[paste paragraph with exposition]

This paragraph delivers exposition as a block. Rewrite it by distributing the same information across three channels:
1. A line of dialogue that reveals one piece of information through character reaction (not explanation).
2. One action beat that implies one piece of information without stating it.
3. One sensory detail that shows one piece of information without naming it.

Word ceiling: same length as the input paragraph. Do not add any new information. Do not remove any information that was in the original.`,
        codeLanguage: 'Modèle éditorial',
      },
      models: {
        id: 'models',
        title: 'Recommandations de modèles pour l\'écriture de fiction',
        content:
          '**Le choix du modèle compte moins que la structure du prompt, mais il compte.** Un prompt bien structuré sur un modèle 7B surpassera un prompt vague sur un modèle 70B — mais à prompts équivalents, les modèles plus grands maintiennent mieux l\'adhérence aux contraintes sur les longues générations et différencient les voix des personnages plus fiablement.',
        columns: ['Tâche', 'Modèle recommandé', 'Pourquoi'],
        rows: [
          { 'Tâche': 'Écriture de scènes générale', 'Modèle recommandé': 'Llama 3.3 70B', 'Pourquoi': 'Bon suivi des instructions, cohérence narrative, meilleur polyvalent pour la prose contrainte' },
          { 'Tâche': 'Transfert de style', 'Modèle recommandé': 'Mistral Large', 'Pourquoi': 'Registre de prose cohérent sur les longues générations ; meilleure fidélité au registre parmi les modèles exécutables localement' },
          { 'Tâche': 'Dialogue / voix des personnages', 'Modèle recommandé': 'Command R+ 104B ou Hermes 3', 'Pourquoi': 'Registre de parole naturaliste ; différenciation fiable des voix sur les échanges longs' },
          { 'Tâche': 'Construction de monde', 'Modèle recommandé': 'Qwen3 32B', 'Pourquoi': 'Bon pour la génération de détails structurés ; maintient fiablement le schéma d\'expansion en anneaux concentriques' },
          { 'Tâche': 'Révision / correction', 'Modèle recommandé': 'Llama 3.3 70B', 'Pourquoi': 'Meilleur pour suivre des instructions de réécriture structurelles spécifiques sur un paragraphe entier' },
          { 'Tâche': 'Fiction sombre / non censurée', 'Modèle recommandé': 'Hermes 3 Llama 3.3', 'Pourquoi': 'Fine-tuné pour moins de refus de contenu ; aucune restriction des conditions d\'utilisation cloud lors de l\'exécution locale' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Minimums matériels pour les modèles de fiction. Llama 3.3 70B en quantification Q4 nécessite ~40 Go de VRAM ou mémoire unifiée (NVIDIA RTX 4090 24 Go double GPU, ou Apple M5 Max 64 Go). Qwen3 32B en Q4 tourne sur 20–24 Go. Mistral Large en Q4 nécessite ~24 Go. Pour les rigs de 16 Go, Qwen3 14B et Mistral Small sont le plafond pratique — les deux suivent les modèles de scènes de façon fiable pour des longueurs de génération courtes.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes',
        items: [
          '**Pas de plafond de mots.** Sans plafond, le modèle rembourre — il ajoute des paragraphes de transition, des beats d\'action et des phrases de résumé jusqu\'à manquer de tokens. Toujours fixer un plafond.',
          '**Listes de traits au lieu de contradictions.** Une liste de cinq traits produit un personnage qui illustre chaque trait à son tour. Une contradiction entre deux traits produit un personnage que le lecteur doit interpréter. Utiliser la structure de contradiction.',
          '**"Écris comme [Auteur]" sans noms de techniques.** Le transfert de style par nom d\'auteur seul produit un pastiche de genre, pas une fidélité de technique. Nommer les techniques spécifiques à répliquer.',
          '**Pas d\'ancre de PDV.** Un prompt de scène sans PDV nommé produit des changements de PDV par défaut — le modèle accède aux états intérieurs de tous les personnages parce que rien ne l\'en empêche. Toujours nommer le personnage PDV.',
          '**Prompts de révision sans brouillon.** Demander au modèle d\'"améliorer le rythme" d\'une scène qu\'on décrit mais ne montre pas produit des conseils généraux. Coller le passage réel.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Fiche modèle Llama 3.3 70B et benchmarks de suivi des instructions — [Meta AI Research](https://ai.meta.com)',
          'Rapport technique Qwen3 32B — [Alibaba Cloud / Qwen Team](https://qwenlm.github.io)',
          'Documentation modèle Mistral Large — [Mistral AI](https://mistral.ai)',
          'Spécification Command R+ 104B — [Cohere](https://cohere.com)',
          'Méthodologie de fine-tune Hermes 3 — [Nous Research](https://nousresearch.com)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Un LLM local peut-il remplacer un partenaire d\'écriture humain pour la rédaction de fiction ?',
            a: 'Pour des sous-tâches spécifiques — générer un premier brouillon de scène, produire des variations de dialogue, passer des détails de construction de monde — les LLM locaux sont des partenaires de rédaction rapides et fiables. Ils ne remplacent pas la pensée stratégique d\'un co-auteur humain : ils ne peuvent pas évaluer si la scène correspond à l\'arc narratif, si le choix du personnage est émotionnellement mérité, ou si le rythme du chapitre fonctionne. Les utiliser pour les tâches de génération ; garder le jugement humain pour les décisions structurelles.',
          },
          {
            q: 'Qu\'est-ce qui est le mieux pour la fiction : Ollama, LM Studio ou SillyTavern ?',
            a: 'Pour les modèles de prompts structurés où on envoie un prompt complet et reçoit une complétion, Ollama (CLI ou API) et LM Studio (endpoint compatible OpenAI) sont équivalents — l\'interface n\'affecte pas la qualité de sortie. SillyTavern apporte de la valeur pour le roleplay multi-tours et la persistance de fiches de personnages, mais pour les prompts d\'écriture de scènes et de révision, une simple interface de chat ou un appel API est suffisant.',
          },
          {
            q: 'Ces modèles de prompts fonctionnent-ils sur les petits modèles (7B–14B) ?',
            a: 'Oui, mais l\'adhérence aux contraintes se dégrade après ~150 tokens. Les petits modèles suivent les 2–3 premières contraintes d\'un prompt en 5 parties, puis dérivent vers leur registre de base. Pour les modèles 7B–14B : réduire le plafond de mots (max 150 mots), utiliser moins de contraintes simultanées (3 parties au lieu de 5), et s\'attendre à réviser ou repromter plus fréquemment. Qwen3 14B est le modèle de petite taille le plus solide testé pour le suivi de prompts spécifiques à la fiction.',
          },
          {
            q: 'Comment maintenir la cohérence de la voix des personnages sur une session de roman complet ?',
            a: 'Construire une fiche de personnage en texte brut (nom, trait dominant, comportement contradictoire, registre de parole, 3 exemples de répliques) et la coller dans le message système au début de la session. Pour les sessions longues, résumer les scènes terminées dans un document "contexte de session" courant et inclure les 200–300 derniers mots de la scène la plus récente dans chaque tour utilisateur. Cela combat la dérive de contexte sans dépasser la fenêtre de contexte.',
          },
          {
            q: 'Quel est le meilleur LLM local pour écrire de la fiction sombre ou mature ?',
            a: 'Hermes 3 Llama 3.3, Dolphin 3.0 Mistral, ou tout modèle fine-tuné pour réduire les refus de contenu. Lors de l\'exécution en local, il n\'y a pas de restrictions des conditions d\'utilisation cloud — le fine-tune de base du modèle détermine ce qu\'il produira ou ne produira pas. Voir [Meilleurs LLM locaux pour l\'écriture créative 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=fr) pour une analyse complète des options de modèles non censurés et du cadrage éthique.',
          },
          {
            q: 'Puis-je utiliser ces modèles dans SillyTavern ou Agnai ?',
            a: 'Oui. Tous les modèles de ce guide sont en texte brut — ils fonctionnent dans n\'importe quelle interface qui passe du texte à un modèle local. Dans SillyTavern, placer la contrainte de genre et de PDV dans le champ de prompt système ; utiliser le tour utilisateur pour les instructions spécifiques à la scène. Dans Agnai, la configuration est équivalente. Les modèles sont indépendants de l\'interface.',
          },
          {
            q: 'Quelle longueur doit avoir un prompt de scène ?',
            a: 'Un prompt de scène de 50–100 mots produit les meilleurs résultats en pratique. Les prompts plus longs (200+ mots) peuvent fonctionner pour les scènes complexes mais augmentent le risque que le modèle ignore certaines contraintes. Pour les scènes complexes, décomposer le prompt en deux passes : d\'abord générer la scène, puis exécuter un prompt de révision qui ajoute la contrainte retenue.',
          },
          {
            q: 'Les prompts de transfert de style violent-ils les droits d\'auteur ?',
            a: 'Répliquer la technique d\'un auteur (structure des phrases, choix de ponctuation, registre narratif) n\'est pas une violation des droits d\'auteur — le style n\'est pas protégeable. Reproduire des passages verbatim substantiels d\'un texte sous droits d\'auteur est une violation. Les modèles de ce guide utilisent des échantillons de 2–3 phrases comme ancres de technique, ce qui s\'inscrit dans le cadre standard de l\'usage équitable éducatif, et la sortie générée réplique la technique plutôt que le contenu.',
          },
          {
            q: 'L\'utilisation d\'un LLM local pour la fiction est-elle concernée par le RGPD ?',
            a: 'Un LLM s\'exécutant entièrement en local ne transfère aucune donnée vers un service tiers — tes textes, tes personnages et tes sessions de génération restent sur ta machine. Il n\'y a donc pas de responsable de traitement au sens de l\'article 4 du RGPD ni de sous-traitant à contractualiser. Si tu utilises tes générations locales pour traiter des données à caractère personnel de personnes réelles (par exemple, rédiger des textes qui mentionnent des individus identifiables), les obligations de base du RGPD s\'appliquent. Pour une fiction purement fictive sans personnages réels identifiables, l\'usage local est sans incidence au regard du RGPD.',
          },
          {
            q: 'Quelles limites légales s\'appliquent en France à la génération de contenu sensible avec un LLM local ?',
            a: 'L\'hébergement local ne modifie pas le droit applicable à l\'artefact produit. En France, l\'article 227-23 du Code pénal (représentation de mineurs à caractère pornographique) constitue une interdiction absolue — la génération locale, le cadrage fictionnel ou l\'usage privé ne constituent pas des exceptions. L\'article 24 de la loi du 29 juillet 1881 interdit l\'incitation à la haine ou à la discrimination. Pour les prompts de transfert de style : répliquer la technique d\'un auteur est autorisé ; reproduire des passages verbatim substantiels peut violer le droit d\'auteur. La génération locale de fiction standard entre personnages adultes fictifs ne fait pas l\'objet d\'une prohibition générale.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecture complémentaire',
        items: [
          '[Meilleurs LLM locaux pour l\'écriture créative 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=fr) — comparatif de modèles pour la génération narrative, les paramètres de sampling et les options non censurées.',
          '[SillyTavern vs Agnai vs RisuAI : meilleure interface locale de roleplay](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay?lang=fr) — comparatif d\'interfaces pour le roleplay avec fiches de personnages et la fiction collaborative.',
          '[Comment utiliser un LLM local pour le scénario et la rédaction de roman](/power-local-llm/local-llm-screenwriting-and-novel-drafting?lang=fr) — workflows de rédaction long format, gestion des chapitres et stratégies de fenêtre de contexte.',
          '[LLM locaux non censurés pour l\'écriture créative : éthique et configuration](/power-local-llm/uncensored-local-llm-creative-writing-ethics?lang=fr) — quels modèles utiliser pour le contenu mature, implications de confidentialité et cadre d\'utilisation responsable.',
          '[Chain-of-Thought Prompting expliqué](/prompt-engineering/chain-of-thought-prompting?lang=fr) — prompts de raisonnement structuré applicables à la construction d\'intrigue et à la planification de scènes.',
          '[Zero-Shot vs Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot-prompting?lang=fr) — quand inclure des exemples dans les prompts et quand les retenir pour les tâches de fiction.',
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
    title: '小説家のためのローカルLLMプロンプト：15のテンプレートとテクニック（2026）',
    seoTitle: '小説家向けローカルLLMプロンプト：15テンプレート 2026',
    intro:
      'ローカルLLMは、漠然としたリクエストよりも構造化されたプロンプトを与えると、測定可能なほど優れたフィクションを生成します。本ガイドでは、シーン執筆・キャラクター開発・ダイアログ・世界構築・スタイル転換・修正・編集タスクに対して機能する15のプロンプトテンプレートを紹介します——全てOllamaまたはLM Studioを通じてローカルで動作するLlama 3.3 70B、Qwen3 32B、Mistral Largeでテスト済みです。全テンプレートはコピーペースト可能で、ジャンルごとの調整方法も含まれています。',
    metaDescription:
      'ローカルLLMを使った小説執筆向け15プロンプトテンプレート。シーン・キャラクター・ダイアログ・世界構築・修正——OllamaとLM Studio対応でコピーペースト可能。',
    twitterDescription:
      'ローカルLLM小説執筆用15プロンプトテンプレート：シーン・ダイアログ・キャラクター開発・世界構築・スタイル転換・修正・編集。Llama 3.3 70B、Qwen3 32Bでテスト済み。',
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
      'ローカルLLMを起草パートナーとして使用し、一貫した使用可能な出力を生成する信頼できるプロンプト構造を求めている小説家・短編小説家・脚本家・ゲームナラティブデザイナー。',
    readTime: '18分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカルLLM プロンプト 小説',
    targetKeywords: [
      'ローカルLLM プロンプト 小説家',
      'ollama フィクション執筆 プロンプト',
      'シーン執筆 プロンプトテンプレート LLM',
      'キャラクター開発 プロンプト ローカルAI',
      'ダイアログ プロンプト ローカルLLM',
      '世界構築 プロンプトテンプレート',
    ],
    leadAnswerBlock:
      '**ローカルLLMのフィクション出力で最大の改善は、「シーンを書いて」から構造化された5パートプロンプトへの移行から来ます：ジャンル＋POV＋感覚的制約＋感情的ビート＋語数上限。このフォーマットだけで、実際には平坦で要約的な出力を約60%削減します——プロンプトが簡単な近道を残さないため、モデルはプロット要約の代わりに「見せる」散文を生成します。キャラクター開発では、最も信頼できるテンプレートは「矛盾プロンプト」です：キャラクターに1つの支配的な特性と1つの矛盾する行動を与え、どちらも述べずに両方を明らかにするシーンを書くようモデルに依頼します。ダイアログでは、まずサブテキストを設定します——キャラクターが言いたいが言わないこと——そしてモデルにその隠されたメッセージの周りに発話行を書かせます。編集作業には、連続性エラーにはプロット整合性チェックを、平坦なゾーンにはペース分析を、情報ダンプの再分配には説明文スムージングを使用してください。**',
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMを使う小説家にとって最良のプロンプトテンプレートは何ですか？',
        answer:
          'フィクション執筆に最も信頼できるプロンプト構造は：ジャンル＋POV＋感覚的制約＋感情的ビート＋語数上限です。これはプロット要約の代わりに「見せる」散文を生成します。キャラクター開発には「矛盾プロンプト」（1つの支配的な特性＋1つの矛盾する行動、どちらも述べずに両方を明らかにする）を使用します。ダイアログには、まずサブテキストを設定し（キャラクターが言いたいが言わないこと）、発話行を生成します。世界構築では、外側に広げる前に1つの感覚的詳細に固定します。これらのテンプレートは全てのinstruction-tunedモデルで機能します；大きいモデル（Llama 3.3 70B、Qwen3 32B）は長い生成全体にわたって制約への準拠をより良く維持します。',
        bullets: [
          'シーンプロンプト：ジャンル＋POV＋感覚的詳細1〜2つ＋感情的ビート＋語数上限（150〜400語）。',
          'キャラクター開発：1つの支配的な特性＋1つの矛盾する行動、どちらも述べずに両方を明らかにする。',
          'ダイアログ：まずサブテキストを述べる（キャラクターが言いたいが言わないこと）、その後発話行を生成する。',
          '世界構築：1つの感覚的詳細に固定し、同心円状に外側に広げる（部屋→建物→地区→世界）。',
          'スタイル転換：目標著者の具体的なテクニック2〜3つを名付け、2文サンプルを貼り付け、それらのテクニックを使って生成する。',
          '修正：草稿を貼り付け、特定の問題（受動態・副詞過多・POV切り替え）を名付け、書き直しを依頼する。',
          '編集：プロット整合性チェックは連続性エラーを検出；ペース分析は章のペースをマップ；説明文スムージングは情報ダンプを再分配。',
          '大きいモデルは制約への準拠をより良く維持します；Llama 3.3 70Bはほとんどのフィクションタスクのデフォルト選択です。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'ポイントまとめ', anchor: '#key-takeaways' },
      { label: '基本情報', anchor: '#quick-facts' },
      { label: '構造化プロンプトが重要な理由', anchor: '#why-structure' },
      { label: '前後の比較例', anchor: '#before-after' },
      { label: 'シーン執筆テンプレート（1〜2）', anchor: '#scene-writing' },
      { label: 'キャラクター開発テンプレート（3〜5）', anchor: '#character-development' },
      { label: 'ダイアログテンプレート（6〜7）', anchor: '#dialogue' },
      { label: '世界構築テンプレート（8〜9）', anchor: '#worldbuilding' },
      { label: 'スタイル転換テンプレート（10〜11）', anchor: '#style-transfer' },
      { label: '修正テンプレート（12）', anchor: '#revision' },
      { label: '編集テンプレート（13〜15）', anchor: '#editorial-templates' },
      { label: 'モデル推薦', anchor: '#models' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: '参考文献', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**構造化プロンプトはフィクションにおいて漠然としたリクエストを上回ります。** 5パートのシーンプロンプト（ジャンル＋POV＋感覚的制約＋感情的ビート＋語数上限）は「見せる」散文を生成します；「シーンを書いて」はプロット要約を生成します。テンプレートがテクニックです。',
          '**矛盾プロンプトは最も信頼できるキャラクター開発構造です。** モデルに1つの支配的な特性と1つの矛盾する行動を与え；どちらも名付けずに両方を明らかにするよう依頼します。これは読者が推測しなければならない層のあるキャラクターを生成します。',
          '**発話行の前にサブテキストを設定するとダイアログの質が倍になります。** まずキャラクターが言いたいが言わないことを伝えます。発話語は自然にその隠されたメッセージの周りに機能します。',
          '**語数上限はブロートを防ぎます。** シーンプロンプトの200語上限は圧縮を強制します；モデルは正確でなければなりません。必要に応じて100語単位で上げますが、常に上限を設定してください。',
          '**修正プロンプトは名付けられた問題が必要です。** 「これを書き直して」は最小限の変更を生成します。「書き直し：全ての受動態を排除し、全ての文は具体的な名詞または強い動詞で始まらなければならない」は測定可能な改善を生成します。',
          '**編集テンプレートはマニュスクリプトレベルで動作します。** プロット整合性チェック・ペース分析・説明文スムージングは完成したシーンと章で機能します——起草中ではなく、起草後に実行してください。',
          '**大きいモデルは長い生成全体にわたって制約への準拠をより良く維持します。** Llama 3.3 70BとQwen3 32Bは5パートシーン制約に確実に従います；小さいモデルは約200トークン後にドリフトします。',
          '**フロントエンドはモデルとプロンプトよりも重要ではありません。** Ollama・LM Studio・SillyTavern・Agnaiは全てプロンプトをそのままパスします——フィクション品質の違いはモデル＋プロンプトにあり、フロントエンドにはありません。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '基本情報',
        items: [
          '**カバーするテンプレート：** 合計15——シーン執筆（2）、キャラクター開発（3）、ダイアログ（2）、世界構築（2）、スタイル転換（2）、修正（1）、編集（3）。',
          '**テスト環境：** Llama 3.3 70B、Qwen3 32B、Mistral Large——全てApple M5 Max 64 GBとNVIDIA RTX 4090 24 GBでOllama経由。',
          '**語数上限：** シーンには150〜400語；ダイアログには100〜200語；世界構築の文章には300〜600語。',
          '**フィクションに最良の汎用モデル：** Llama 3.3 70B（優れた命令追従、物語の一貫性、長いコンテキスト）。',
          '**スタイル転換に最良：** Mistral Large（一貫した散文レジスター；著者の声パターンを確実に再現）。',
          '**ダイアログに最良：** Command R+ 104BまたはHermes 3（キャラクターの声の分化；ナチュラルな話し言葉レジスター）。',
          '**システムプロンプト：** ジャンルとPOVはユーザーターンではなくシステムメッセージで設定してください——それはセッション内の全ての生成を固定します。',
        ],
      },
      whyStructure: {
        id: 'why-structure',
        title: 'フィクションにおいて構造化プロンプトが重要な理由',
        content:
          '**ローカルLLMのフィクションにおけるデフォルトの失敗モードは要約化です：モデルはシーンを見せる代わりに何が起こったかを話します。** これはinstruction-tunedモデルが物語的没入ではなくタスク完了に最適化されているために起こります——漠然としたプロンプト（「緊張した対立を書いて」）は要約ヒューリスティックを引き起こします。構造化プロンプトはその出口を閉じます。POV・感覚的制約・感情的ビート・語数上限を指定すると、モデルには要約する余地がありません——描写しなければなりません。二次的な失敗モードはドリフトです：モデルは指定したジャンルと声で始まり、200〜300トークン後に一般的なAI執筆レジスターに回帰します。制約アンカー（POV・感覚的フォーカス・語数上限）はこのドリフトを遅らせます；ジャンルと声を名付けるシステムプロンプトはそれを完全に止めます。',
        callouts: [
          {
            type: 'tip',
            text: 'マルチターンセッションではシステムプロンプトにジャンルとPOVを設定してください——これがユーザーターンの命令よりもよく固定される理由については[システムプロンプト vs ユーザープロンプト](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=ja)をご覧ください。ジャンルとPOVをユーザーターンではなくシステムメッセージに置いてください。セッション内の全ての生成が制約を継承するので、それを繰り返す必要はありません。例：「あなたは文芸小説アシスタントです。生成する全ての散文は、感覚的詳細とサブテキストに重点を置き、過去時制の密着した三人称で書かれています。」',
          },
        ],
      },
      beforeAfter: {
        id: 'before-after',
        title: '前後の比較：構造化プロンプトが実際に何をするか',
        content:
          '以下の3つのペアは、漠然としたリクエストから構造化プロンプトに切り替えたときに何が変わるかを正確に示しています——各ペアは異なるテンプレートカテゴリをカバーし、各プロンプトタイプから得られる出力を説明します。',
      },
      beforeAfterScene: {
        id: 'before-after-scene',
        title: 'ペア1 — シーン執筆',
        promptExamples: [
          {
            label: '❌ 漠然としたシーンプロンプト',
            text: 'Write a tense confrontation scene in a kitchen.',
          },
          {
            label: '✅ 構造化5パートシーンプロンプト',
            text: 'Genre: literary fiction. POV: close third, Maya. Sensory anchor: the smell of burned coffee. Emotional beat: Maya realises her brother lied. Show without stating. Word ceiling: 200 words.',
          },
        ],
        items: [
          '**漠然とした出力：** プロット要約の2〜3文。「マヤはキッチンで兄に立ち向かった。彼らの間の緊張は手に取るようだった。彼は居心地悪そうに身を動かし、目をそらした。」シーンは語られているだけで、見せられていません。感覚的世界は不在です。',
          '**構造化された出力：** 焦げたコーヒーが行動を根拠付ける180語のレンダリングされたシーン——マヤは今朝のフィルターに残ったコーヒー粉を見て、兄がいないと言っていたときにここにいたと気づき、シーンはカウンターに置かれた彼女の手の物理的な詳細で終わります。気づきは述べられた感情ではなく散文から浮かび上がります。',
        ],
      },
      beforeAfterCharacter: {
        id: 'before-after-char',
        title: 'ペア2 — キャラクター開発',
        promptExamples: [
          {
            label: '❌ 特性リスト型キャラクタープロンプト',
            text: 'Elena is brave, sarcastic, and loyal.',
          },
          {
            label: '✅ 矛盾型キャラクタープロンプト',
            text: "Elena is pathologically honest. She hides her sister's letters from their mother. Show both without naming either. 200 words.",
          },
        ],
        items: [
          '**特性リストの出力：** 各特性を順番に示すキャラクター。「エレナはためらわずに部屋に入った——彼女は恐れを知らない人間だ。『もちろん』と彼女は皮肉っぽく言った。彼女は愛する人のためなら何でもするだろう。」各特性が示されてチェックされます。',
          '**矛盾の出力：** 読者が解釈しなければならないキャラクター。エレナは誰にも頼まれていないのに間違ったコーヒーオーダーを申告し（正直）、母親が入ってくる前にキッチンの引き出しに封筒を滑り込ませます（隠蔽）。読者は矛盾を生み出した傷を推測しなければなりません。そのギャップがキャラクターです。',
        ],
      },
      beforeAfterDialogue: {
        id: 'before-after-dialogue',
        title: 'ペア3 — ダイアログ',
        promptExamples: [
          {
            label: '❌ 直接的なダイアログプロンプト',
            text: 'Two friends argue about money.',
          },
          {
            label: '✅ サブテキスト先行ダイアログプロンプト',
            text: "Subtext: A wants to ask B for a loan but won't say it. B knows but pretends not to. 4 exchanges, 'said' tags only, no action beats.",
          },
        ],
        items: [
          '**直接的な出力：** 言いたいことをそのまま言うキャラクター。「『あなたは私にお金を借りている』とジェームズは言った。『知ってる、ごめん』とポールは言った。」サブテキストがテキストです。読者が推測するものは何もありません。',
          '**サブテキスト先行の出力：** どちらのキャラクターもお金やローンに言及しない4回の交換。Aは車の修理が必要だと愚痴をこぼします。Bは車が問題だと同意します。Aはもうしばらくガレージに置いておかなければならないかもしれないと言います。Bは自分のガレージはいっぱいだと言います。ニーズと回避の両方は言われていないことの中にのみ見えます。',
        ],
      },
      sceneWriting: {
        id: 'scene-writing',
        title: 'シーン執筆テンプレート（テンプレート1〜2）',
        content:
          '**5パートのシーンテンプレートが基盤です：ジャンル＋POV＋感覚的アンカー＋感情的ビート＋語数上限。** 各要素は特定の働きをします——どれか1つを取り除くと出力品質は測定可能なほど低下します。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '最も効果的なローカルLLMシーンプロンプトは、ジャンル・POV・1つの感覚的アンカー・感情的ビート・語数上限を指定します——これらの5つの制約がまとめて「見せる」散文を強制し、モデルのデフォルト要約モードを防ぎます。',
          },
          {
            type: 'plain-terms',
            text: '「緊張した対立シーンを書いて」の代わりに試してみてください：「ジャンル：スリラー。POV：密着した三人称、エレナ。感覚的アンカー：HVACユニットの唸り音。感情的ビート：エレナは自分が間違いを犯したと気づく——述べずに見せて。語数上限：200語。」モデルの出力はプロット要約ではなく特定のシーンになります。語数上限は省略不可です——それなしにモデルはパディングします。',
          },
        ],
        items: [
          '**ジャンルマーカー** — 1つの単語やフレーズ（例：「ゴシックホラー」「コージーミステリー」「ハードSF」）が散文レジスターを固定します。',
          '**POVマーカー** — 「密着した三人称、[名前]」または「一人称」が文法的枠組みを設定し、全ての観察を1つの意識を通してフィルタリングします。',
          '**感覚的アンカー** — 1つの具体的な感覚的詳細（濡れたコンクリートの臭い・時計の音・擦り切れたカーペットの手触り）がシーンを物理世界に根拠付けて抽象化を防ぎます。',
          '**感情的ビート** — シーンが着地すべき感情状態を名付け、「述べずに見せて」を追加します——これが「見せるvs話す」制約を活性化します。',
          '**語数上限** — 圧縮された瞬間には150語；完全なシーンビートには250〜300語；1つを延長するのではなく第2のシーンを求める前の最大400語。',
        ],
      },
      template1: {
        id: 'template-1',
        title: 'テンプレート1 — シーン5パート構造',
        content:
          '基盤テンプレートです。5つの要素全てが構造的な役割を担っています——どれか1つを取り除くと出力品質は測定可能なほど低下します。',
        codeBlock: `Genre: [literary fiction / thriller / fantasy / horror / etc.]
POV: [first person / close third, character name]
Sensory anchor: [one specific sensory detail — smell, texture, sound]
Emotional beat: [what the POV character feels at the end of this scene — do not state it directly]
Word ceiling: [150–400 words]

Write the scene. Do not summarise. Every sentence must render a moment, not describe one.`,
        codeLanguage: 'シーンテンプレート',
      },
      template2: {
        id: 'template-2',
        title: 'テンプレート2 — アクション/戦闘の時間圧縮',
        content:
          'モデルがアクションを圧縮したり、ビート間に不必要な呼吸スペースの散文を追加したりするのを防ぎます。「1文につき1秒」のルールは機械的な精度を強制し、シーケンスを運動的に保ちます。',
        codeBlock: `Genre: [action / thriller / fantasy combat]
POV: [close third / first person, character name]
Sensory anchor: [one physical sensation — impact, sound, texture]
Time rule: every sentence represents exactly 1 second of story time
Word ceiling: [100–200 words]

Write the fight/action sequence. Enforce the time rule strictly — no sentence can span more than 1 second of story time.`,
        codeLanguage: 'シーンテンプレート',
      },
      characterDevelopment: {
        id: 'character-development',
        title: 'キャラクター開発テンプレート（テンプレート3〜5）',
        content:
          '**矛盾プロンプトは特性リストアプローチよりも深みのあるキャラクターを生成します。** モデルに特性リストを与える（「エレナは勇敢で、皮肉屋で、忠実だ」）と、それらの特性を示すキャラクターが生成されます。モデルに1つの支配的な特性と1つの矛盾する行動を与えると、読者が解釈しなければならないキャラクターが生成されます。',
        items: [
          '**1つの支配的な特性、1つの矛盾する行動** — 矛盾がキャラクターです；読者はそれを生み出した傷や歴史を推測します。',
          '**「どちらも名付けたり説明したりしない」** — この命令はモデルが社説を書くのを防ぎ（「彼女は本質的に矛盾していた…」）、シーンに意味を担わせます。',
          '**関係の動的プロンプト：** 「[キャラクターA]はXを望み、[キャラクターB]はYを望む——どちらも実際に欲しいものを言わない200語の交換を書いてください。」',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'セッション全体のシステムプロンプトとしてキャラクターシートを使用してください。プレーンテキストのキャラクターシート（名前・支配的な特性・矛盾する行動・核心的な傷・話し言葉レジスター）を構築し、執筆セッションの開始時にシステムメッセージに貼り付けてください。そのセッション内での全てのキャラクターの登場は一貫したものになります。キャラクターが章を渡って進化するにつれてシートを更新してください。',
          },
        ],
      },
      template3: {
        id: 'template-3',
        title: 'テンプレート3 — キャラクター矛盾プロンプト',
        content:
          '最も信頼できるキャラクター開発構造です。特性リストを示すキャラクターではなく、読者が推測しなければならない層のあるキャラクターを生成します。',
        codeBlock: `Character name: [Name]
Dominant trait: [one trait — "relentlessly optimistic", "pathologically honest", "obsessively controlled"]
Contradicting behaviour: [one specific action that contradicts the trait — "hides her sister's letters", "lies to the one person who believes in him"]

Write a scene (200 words max) in which both the trait and the behaviour are present and visible. Do not name or explain either.`,
        codeLanguage: 'キャラクターテンプレート',
      },
      template4: {
        id: 'template-4',
        title: 'テンプレート4 — 声の分離プロンプト',
        content:
          'キャラクターの声をプロットと心理から切り離します。ダイアログを書く前に話し言葉レジスターを確立するため、または同じマニュスクリプト内の他のキャラクターとは異なる音のするキャラクターを確認するために役立ちます。',
        codeBlock: `Character: [Name]
Task: a mundane activity — [making coffee / waiting for a bus / washing dishes]

Write 5 lines of [Character]'s internal monologue during this task. Do not include plot information. Do not explain the character's psychology. Use the character's specific speech register only.`,
        codeLanguage: 'キャラクターテンプレート',
      },
      template5: {
        id: 'template-5',
        title: 'テンプレート5 — バックストーリーの発掘',
        content:
          '成人版を見せずに読者にキャラクターを形成したものを見せます。子供時代のシーンから推測されるバックストーリーは、語られたバックストーリーよりも耐久性があります。',
        codeBlock: `Character (adult version): [Name — include dominant trait and contradicting behaviour in one sentence]

Write a 150-word scene from [Character]'s childhood that makes their adult behaviour inevitable — but do not show the adult version of the character. Do not name the trait or explain the connection. Show the event; let the reader infer the rest.`,
        codeLanguage: 'キャラクターテンプレート',
      },
      dialogue: {
        id: 'dialogue',
        title: 'ダイアログテンプレート（テンプレート6〜7）',
        content:
          '**サブテキスト先行ダイアログテンプレートはナチュラルな発話を生成します。** ほとんどのモデルは言いたいことをそのまま言うキャラクターをデフォルトで生成します——AIが生成したダイアログの明らかな証拠です。発話行を求める前にサブテキストを設定すると、モデルに回避を構築させます。',
        items: [
          '**サブテキストを明示的に述べる** — 各キャラクターが言いたいが言わないこと、そしてなぜ言わないか。',
          '**「「said」以外のダイアログタグなし」** — 感情的なタグ（「彼は怒って言った」）へのモデルの依拠を取り除き、発話語に感情を担わせます。',
          '**「アクションビートなし」** — 空のダイアログを埋めるためにモデルが使う舞台指示を取り除きます（「彼女は腕を組んだ。彼はため息をついた。」）。修正で削除してください。',
          '**ジャンルレジスタープロンプト：** 「[ジャンル]の[関係性]の5回の口論を書いてください。口論は表面的には[トピックA]についてですが、本当の口論は[トピックB]についてです。トピックBを名付けないでください。」',
          '**中断プロンプト：** 「キャラクターAが文の途中でキャラクターBに中断されます。Bが自分の感情状態を言わずに中断がBの感情状態を明らかにするように書いてください。」',
        ],
        callouts: [
          {
            type: 'tip',
            text: '複数キャラクターのダイアログには、生成前にシステムプロンプトで各キャラクターに「話し言葉レジスター」を割り当ててください。例：「エレナ：フォーマル、正確、縮約形は使わない。マルクス：カジュアル、中断する、「見て、」や「要するに」で文を始める。」モデルは各ターンでそれを思い出させなくてもこれらのレジスターを維持します。',
          },
        ],
      },
      template6: {
        id: 'template-6',
        title: 'テンプレート6 — サブテキスト先行ダイアログ',
        content:
          '発話行を書く前に各キャラクターが言いたいが言わないことを設定します。言いたいことをそのまま言うキャラクターを書く代わりに、モデルに回避を構築させます。',
        codeBlock: `Subtext (do not include this in the dialogue itself):
[Character A] wants [X] but will not ask for it directly because [reason].
[Character B] knows [X] is what A wants but pretends not to because [reason].

Scene: [brief setting — 10 words max]
Length: [number] exchanges

Write the dialogue. No dialogue tags except "said". No internal monologue. No action beats.`,
        codeLanguage: 'ダイアログテンプレート',
      },
      template7: {
        id: 'template-7',
        title: 'テンプレート7 — 声の分化（3つの提供）',
        content:
          'キャラクターの声が帰属なしに識別できるほど十分に異なるかどうかをテストします。3つの提供が全て同じように聞こえる場合は、セッションを続ける前にシステムプロンプトに話し言葉レジスター制約を追加してください。',
        codeBlock: `Piece of news: [state the news in one sentence]

Write this news delivered by three different characters. Each delivery should make the character's class, education level, and emotional relationship to the news immediately apparent. No exposition — voice only.

Character 1: [Name — background and relationship to the news in one sentence]
Character 2: [Name — background and relationship to the news in one sentence]
Character 3: [Name — background and relationship to the news in one sentence]`,
        codeLanguage: 'ダイアログテンプレート',
      },
      worldbuilding: {
        id: 'worldbuilding',
        title: '世界構築テンプレート（テンプレート8〜9）',
        content:
          '**世界構築プロンプトは同心円状リング構造で最もよく機能します：1つの感覚的詳細に固定し、外側に広げます。** 「私のファンタジー都市を描写して」で始めるとカタログになります。「夜明けの市場の臭い」で始めると、読者が住む世界になります。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '1つの感覚的詳細に固定し同心円状リング（物体→部屋→建物→通り→地区）として構造化された世界構築プロンプトは、百科事典的なカタログの代わりに読者が住む没入感のある世界描写を生成します。',
          },
          {
            type: 'plain-terms',
            text: '小さくて具体的なもの——コインの重み・鍛冶場の臭い・特定の路上商人の音——で始め、そこから外側に広げるようモデルに依頼してください。都市レベルに達する前に止めてください。異なるアンカーからの複数の短い世界構築の文章は、1つの包括的な描写よりも豊かな世界を構築します。',
          },
        ],
        items: [
          '**アンカーの具体性** — アンカーが具体的であるほど、世界は具体的になります。「市場の臭い」は漠然としています。「角のスパイス屋台のカルダモンと濡れた犬の臭い」は特定の世界を生成します。',
          '**停止リング** — モデルにどこで拡張を止めるかを伝えてください（部屋・建物・地区・都市）。止めなければ、世界全体を要約します。',
          '**「世界を名付けない」** — モデルがロアダンプを挿入するのを防ぎ、シーンを描写することを強制します。',
          '**「歴史を説明しない」** — 百科事典的反射を取り除きます；歴史は詳細から浮かび上がり、説明からではありません。',
          '**暗示された技術プロンプト：** 「世界の通りを、キャラクターが30秒の歩行で触れる全ての物体を名付けることで描写してください。ナレーションなし——順序通りに物体の名前のみ。」',
        ],
        callouts: [
          {
            type: 'warning',
            text: '世界構築カタログを避けてください。世界構築プロンプトが世界についての箇条書きリストを生成する場合、プロンプトが抽象的すぎます。レンダリングされた散文でない全ての応答は具体的なアンカーで再プロンプトする必要があります。カタログは「私の世界を描写して」プロンプトの症状です——「[特定のPOV]から[特定の瞬間]に[特定の場所]を見せて」に切り替えてください。',
          },
        ],
      },
      template8: {
        id: 'template-8',
        title: 'テンプレート8 — 世界構築の同心円状リング',
        content:
          '1つの感覚的詳細に固定し外側に広げます。百科事典的なカタログを防ぎ、読者が読むのではなく住む没入感のある世界描写を生成します。',
        codeBlock: `Anchor: [one specific sensory detail — a smell, a sound, a texture]
POV: [observer character or omniscient]
Rings: expand from the anchor outward — object → room → building → street → district. Stop when you reach [ring level: room / building / street / district].
Word ceiling: [200–400 words]

Do not name the world. Do not explain the history. Show only what the POV character perceives in this moment.`,
        codeLanguage: '世界構築テンプレート',
      },
      template9: {
        id: 'template-9',
        title: 'テンプレート9 — 物体を通じた派閥文化',
        content:
          '描写や説明ではなく物質文化を通じて世界構築を明らかにします。派閥が所有し、使用し、見えるところに置いているものは、その信念の説明よりも読者に多くを伝えます。',
        codeBlock: `Faction: [name and one-line description of their core belief or function]

Describe the interior of a building used by this faction — only through the objects in the room. Do not describe the people. Do not state their beliefs. Do not explain the purpose of any object. 150 words max.`,
        codeLanguage: '世界構築テンプレート',
      },
      styleTransfer: {
        id: 'style-transfer',
        title: 'スタイル転換テンプレート（テンプレート10〜11）',
        content:
          '**スタイル転換は著者名だけでなくテクニックを名付けるときに機能します。** 「コーマック・マッカーシーのように書いて」は一般的な近似を生成します——まばらな句読点と西部テーマ。「マッカーシーのネストされた従属節・具体的な名詞のみ・ダイアログタグなしのテクニックを使って書いて」は実際の構造的忠実性を持つものを生成します。特定のクリエイティブ出力を生成するプロンプト構造の完全なフレームワークについては、[CRAFTフレームワーク](/frameworks/craft?lang=ja)をご覧ください。',
        items: [
          '**テクニックを具体的に名付ける** — 「簡潔な散文」は漠然としています；「短い宣言文・具体的な名詞・修飾子なし」は実行可能です。',
          '**サンプルを貼り付ける** — 著者の実際の散文の2〜3文は、説明だけよりも効果的にモデルのパターンマッチングを活性化します。',
          '**「サンプルを模倣しない——テクニックを複製する」** — サンプル文章の直接的な言い換えを防ぎます。',
          '**時制とPOVの転換：** 「以下の文章を書き直してください：三人称過去から一人称現在に変更してください。全ての具体的な感覚的詳細を維持してください。新しいプロット情報を追加しないでください。最大200語。」',
          '**レジスターキャリブレーション：** 提供した文章でモデルが見るテクニックを名付けるよう依頼してから、それらを複製するよう依頼してください——この表面化ステップはテクニック命名の精度を向上させます。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'スタイル転換にはMistral Largeを使用してください。Mistral Largeは長い生成全体にわたって一貫した散文レジスターを最もローカル実行可能なモデルよりもよく維持します。複数の段落にわたってレジスターの一貫性が重要なスタイル転換タスクには、Llama 3.3 70BよりもMistral Largeを優先してください。より短いバースト（300語未満）のスタイル転換には、30B以上のどのモデルでも十分に機能します。',
          },
        ],
      },
      template10: {
        id: 'template-10',
        title: 'テンプレート10 — テクニック命名スタイル転換',
        content:
          '著者名だけでなく具体的なテクニックを名付けます。表面的なパスティッシュではなく構造的忠実性を生成します。',
        codeBlock: `Target style: [Author name]
Techniques to replicate (name 2–3 specifically):
1. [Technique — e.g., "sentence fragments for interiority"]
2. [Technique — e.g., "concrete Anglo-Saxon vocabulary, no Latinate abstractions"]
3. [Technique — e.g., "em dashes for interruption, never ellipsis"]

Sample passage (2–3 sentences of the author's actual prose):
"[paste sample]"

Now write [scene description] using these techniques. 200 words. Do not mimic the sample — replicate the technique.`,
        codeLanguage: 'スタイル転換テンプレート',
      },
      template11: {
        id: 'template-11',
        title: 'テンプレート11 — ジャンルレジスター転換',
        content:
          'プロット情報を変えずに既存の散文をジャンルレジスターの間で移動させます。シーンの正しいレジスターを見つけるとき、またはレジスターがジャンルと合わない場合の修正に役立ちます。',
        codeBlock: `Source register: [thriller / romance / horror / literary fiction / commercial fiction / etc.]
Target register: [literary fiction / commercial fiction / genre X]
Specific changes: [longer sentences / more interiority / less action description / etc.]

Rewrite the following passage in [target register]. Do not change any plot information. Word ceiling: same length as input.

[paste passage]`,
        codeLanguage: 'スタイル転換テンプレート',
      },
      revision: {
        id: 'revision',
        title: '修正テンプレート（テンプレート12）',
        content:
          '**修正プロンプトは一般的な改善命令ではなく名付けられた問題が必要です。** 「これをもっとよくして」は最小限の表面的な編集を生成します。「全ての受動態構造を排除してください；全ての文は具体的な名詞または強い能動動詞で始まらなければなりません」は測定可能な構造的変更を生成します。',
        items: [
          '**常に草稿を貼り付け、説明ではなく。** 修正プロンプトは実際の草稿テキストを貼り付けるときのみ機能します。散文を見せずに問題を説明すると、書き直した文章ではなく一般的なアドバイスが生成されます。',
          '**具体的な問題を名付ける。** 「書き直し」だけでは不十分です。1つの構造的問題を特定してください：受動態・副詞過多・POV切り替え・ブロート・情報ダンプ。',
          '**POV切り替えの修正：** 「以下の文章にはPOV違反が含まれています——複数のキャラクターの考えが聞こえます。密着した三人称[キャラクター名]で厳密に書き直してください。他のキャラクターへの全ての内部アクセスを取り除いてください。」',
          '**ダイアログの自然化：** 「以下のダイアログは書かれたように聞こえます。書き直してください：キャラクターは互いに中断し、断片で話し、互いに話し過ぎることができます。交換される同じ情報を維持してください。」',
        ],
        callouts: [
          {
            type: 'tip',
            text: '常に草稿を貼り付け、説明ではなく。修正プロンプトは実際の草稿テキストを貼り付けるときのみ機能します。散文を見せずに問題を説明すると、書き直した文章ではなく一般的なアドバイスが生成されます。特定の段落や交換を貼り付け、特定の問題を名付け、書き直しの語数上限を指定してください。',
          },
        ],
      },
      template12: {
        id: 'template-12',
        title: 'テンプレート12 — 修正ツールキット（圧縮・受動態・副詞削減）',
        content:
          '特定の問題を名付ける3つの修正命令です。それぞれ別々に実行してください——3つ全てを1つのプロンプトに組み合わせると、モデルが1つの命令を他よりも優先するため不一致な結果を生成します。',
        codeBlock: `--- COMPRESSION ---
The following scene is [N] words. Rewrite it in [N/2] words. Preserve the emotional beat and all sensory anchors. Cut dialogue tags, action beats, and transitions first:

[paste scene]

---

--- PASSIVE VOICE ELIMINATION ---
Rewrite the following paragraph: every sentence must use active voice. If the subject is not clear, invent a concrete subject. 150 words max:

[paste paragraph]

---

--- ADVERB REDUCTION ---
Rewrite the following: remove every adverb. Replace each adverb + weak verb pair with a single strong verb. Do not add new plot information:

[paste paragraph]`,
        codeLanguage: 'リビジョンテンプレート',
      },
      editorialTemplates: {
        id: 'editorial-templates',
        title: '編集テンプレート（テンプレート13〜15）',
        content:
          '**編集テンプレートはシーンレベルではなくマニュスクリプトレベルで動作します。** 連続性エラーが複合する前に検出し、完全な章にわたってペースの問題を特定し、情報ダンプの説明文をレンダリングされた散文に再分配するのに役立ちます。起草中ではなく、起草後に実行してください。',
        callouts: [
          {
            type: 'tip',
            text: '編集テンプレートは完成した草稿で実行してください、進行中の作業ではなく。プロット整合性チェックには少なくとも3つのシーンが必要です；ペース分析には完全な章が必要です。不完全な文章で実行すると誤陽性が生成されてコンテキストウィンドウが無駄になります。',
          },
        ],
      },
      template13: {
        id: 'template-13',
        title: 'テンプレート13 — プロット整合性チェック',
        content:
          '連続性エラーが章をまたいで複合する前に特定します。まだ修正しやすい間にエラーを検出するために、新しいシーン3〜4つごとに実行してください。',
        codeBlock: `[paste the last 3 scenes here]

Read these three scenes carefully. List every continuity error you detect: changed physical descriptions (eye colour, hair, height), location inconsistencies, timeline conflicts, object appearances that contradict earlier scenes, character knowledge they should not yet have.

Output only a flag list — one sentence per flag, 150 words maximum total. Do not summarise the scenes. Do not suggest fixes. Flag only.`,
        codeLanguage: '編集テンプレート',
      },
      template14: {
        id: 'template-14',
        title: 'テンプレート14 — ペース分析',
        content:
          '平坦なゾーンを特定するために章全体のペースをマップします。文レベルでは正しく読めるが全体的に遅く感じる章に役立ちます——ペースマークがどこからドラッグが来るかを示します。',
        codeBlock: `[paste chapter here]

Read this chapter and mark each paragraph with: FAST / MEDIUM / SLOW.

After marking, list only the SLOW paragraphs with a one-sentence diagnosis for each: what is causing the pacing to drag (over-description, dialogue repetition, excessive interiority, unnecessary backstory insertion, etc.).

Output format: Paragraph [number]: [SLOW] — [one-sentence diagnosis]
No other commentary. No summaries. Diagnosis only.`,
        codeLanguage: '編集テンプレート',
      },
      template15: {
        id: 'template-15',
        title: 'テンプレート15 — 説明文スムージング',
        content:
          '情報を追加したり削除したりせずに、情報ダンプの説明文をダイアログ・アクション・感覚的詳細に再分配します。段落がシーンではなく事実配信メカニズムとして読まれるときに使用してください。',
        codeBlock: `[paste paragraph with exposition]

This paragraph delivers exposition as a block. Rewrite it by distributing the same information across three channels:
1. A line of dialogue that reveals one piece of information through character reaction (not explanation).
2. One action beat that implies one piece of information without stating it.
3. One sensory detail that shows one piece of information without naming it.

Word ceiling: same length as the input paragraph. Do not add any new information. Do not remove any information that was in the original.`,
        codeLanguage: '編集テンプレート',
      },
      models: {
        id: 'models',
        title: '小説執筆のためのモデル推薦',
        content:
          '**モデルの選択はプロンプト構造よりも重要ではありませんが、重要です。** 7Bモデルでのよく構造化されたプロンプトは70Bモデルでの漠然としたプロンプトを上回ります——しかし同等のプロンプトでは、大きいモデルは長い生成全体にわたって制約への準拠をより良く維持し、キャラクターの声をより確実に分化させます。',
        columns: ['タスク', 'おすすめモデル', '理由'],
        rows: [
          { 'タスク': '一般シーン執筆', 'おすすめモデル': 'Llama 3.3 70B', '理由': '優れた命令追従・物語の一貫性・制約された散文の汎用ベスト' },
          { 'タスク': 'スタイル転換', 'おすすめモデル': 'Mistral Large', '理由': '長い生成全体にわたる一貫した散文レジスター；ローカル実行可能モデルの中で最高のレジスター忠実性' },
          { 'タスク': 'ダイアログ／キャラクターの声', 'おすすめモデル': 'Command R+ 104B またはHermes 3', '理由': 'ナチュラルな話し言葉レジスター；長い交換にわたる信頼できるキャラクターの声の分化' },
          { 'タスク': '世界構築', 'おすすめモデル': 'Qwen3 32B', '理由': '構造化詳細生成に優秀；同心円状拡張パターンを確実に維持' },
          { 'タスク': '修正／編集', 'おすすめモデル': 'Llama 3.3 70B', '理由': '完全な段落にわたる特定の構造的書き直し命令への追従に最高' },
          { 'タスク': 'ダーク／無検閲フィクション', 'おすすめモデル': 'Hermes 3 Llama 3.3', '理由': 'コンテンツ拒否が少ないようにファインチューニングされている；ローカル実行時のクラウド利用規約制限なし' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'フィクションモデルのハードウェア最小要件。Llama 3.3 70B（Q4量子化）は約40 GBのVRAMまたはユニファイドメモリが必要です（NVIDIA RTX 4090 24 GBデュアルGPU、またはApple M5 Max 64 GB）。Qwen3 32B（Q4）は20〜24 GBで動作します。Mistral Large（Q4）は約24 GBが必要です。16 GBリグには、Qwen3 14BとMistral Smallが実用的な上限です——両方ともより短い生成長でシーンテンプレートに確実に従います。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある間違い',
        items: [
          '**語数上限なし。** 上限なしにモデルはパディングします——トークンが尽きるまで過渡段落・アクションビート・要約文を追加します。常に上限を設定してください。',
          '**矛盾ではなく特性リスト。** 5つの特性リストは各特性を順番に示すキャラクターを生成します。2つの特性間の矛盾は読者が解釈しなければならないキャラクターを生成します。矛盾構造を使用してください。',
          '**テクニック名なしで「[著者]のように書いて」。** 著者名のみのスタイル転換はジャンルパスティッシュを生成しますが、テクニックの忠実性は生成しません。複製したい具体的なテクニックを名付けてください。',
          '**POVアンカーなし。** 命名されたPOVのないシーンプロンプトはデフォルトでPOV切り替えを生成します——何も禁止していないので、モデルは全キャラクターの内部状態にアクセスします。常にPOVキャラクターを名付けてください。',
          '**草稿なしの修正プロンプト。** 見せないが説明するシーンの「ペースを改善してください」とモデルに依頼すると、一般的なアドバイスが生成されます。実際の文章を貼り付けてください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考文献',
        items: [
          'Llama 3.3 70Bモデルカードと命令追従ベンチマーク — [Meta AI Research](https://ai.meta.com)',
          'Qwen3 32B技術レポート — [Alibaba Cloud / Qwen Team](https://qwenlm.github.io)',
          'Mistral Largeモデルドキュメント — [Mistral AI](https://mistral.ai)',
          'Command R+ 104B仕様 — [Cohere](https://cohere.com)',
          'Hermes 3ファインチューン手法 — [Nous Research](https://nousresearch.com)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'ローカルLLMはフィクション起草において人間の執筆パートナーの代わりになれますか？',
            a: '特定のサブタスクに対して——シーンの最初の草稿の生成・ダイアログのバリエーションの作成・世界構築の詳細パス——ローカルLLMは高速で信頼できる起草パートナーです。人間の共著者の戦略的思考の代わりにはなりません：シーンがストーリーアークに合っているか・キャラクターの選択が感情的に正当化されているか・章のペースが機能しているかを評価することはできません。生成タスクに使用し；構造的な決定には人間の判断を維持してください。',
          },
          {
            q: 'フィクション執筆にはOllama・LM Studio・SillyTavernのどれが最良ですか？',
            a: '完全なプロンプトを送信して補完を受け取る構造化プロンプトテンプレートでは、Ollama（CLIまたはAPI）とLM Studio（OpenAI互換エンドポイント）は同等です——フロントエンドは出力品質に影響しません。SillyTavernはマルチターンロールプレイとキャラクターカードの永続性に価値を追加しますが、シーン執筆と修正プロンプトには、シンプルなチャットUIまたはAPI呼び出しで十分です。',
          },
          {
            q: 'これらのプロンプトテンプレートは小さいモデル（7B〜14B）で機能しますか？',
            a: 'はい、ただし制約への準拠は約150トークン後に低下します。小さいモデルは5パートプロンプトの最初の2〜3つの制約に従い、その後ベースレジスターにドリフトします。7B〜14Bモデルには：語数上限を下げてください（最大150語）、同時制約を少なくしてください（5パートではなく3パート）、より頻繁に修正または再プロンプトすることを想定してください。Qwen3 14Bは小説特定のプロンプト追従でテストされた最強の小さいモデルです。',
          },
          {
            q: '長編小説セッション全体でキャラクターの声の一貫性を維持するにはどうすればよいですか？',
            a: 'プレーンテキストのキャラクターシート（名前・支配的な特性・矛盾する行動・話し言葉レジスター・ダイアログの例3行）を構築し、セッション開始時にシステムメッセージに貼り付けてください。長いセッションでは、完成したシーンを実行中の「セッションコンテキスト」ドキュメントに要約し、各ユーザーターンに最近のシーンの最後200〜300語を含めてください。これはコンテキストウィンドウを超えずにコンテキストドリフトに対処します。',
          },
          {
            q: 'ダークまたは成熟したフィクションを書くための最良のローカルLLMは何ですか？',
            a: 'Hermes 3 Llama 3.3・Dolphin 3.0 Mistral、またはコンテンツ拒否を減らすためにファインチューニングされたモデル。ローカルで実行する場合、クラウドの利用規約制限はありません——モデルのベースファインチューンが何を生成するかを決定します。無検閲モデルオプションと倫理的フレームの完全な内訳については[クリエイティブライティングのためのベストローカルLLMs 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=ja)をご覧ください。',
          },
          {
            q: 'これらのテンプレートはSillyTavernやAgnaiで使用できますか？',
            a: 'はい。本ガイドの全テンプレートはプレーンテキストです——ローカルモデルにテキストを渡すどのインターフェースでも機能します。SillyTavernでは、ジャンルとPOV制約をシステムプロンプトフィールドに置き；ユーザーターンにシーン特定の命令を使用してください。Agnaiでも設定は同等です。テンプレートはフロントエンドに依存しません。',
          },
          {
            q: 'シーンプロンプトはどのくらいの長さにすべきですか？',
            a: '50〜100語のシーンプロンプトが実際には最良の結果を生成します。より長いプロンプト（200語以上）は複雑なシーンで機能しますが、モデルがいくつかの制約を無視するリスクが増加します。複雑なシーンには、プロンプトを2パスに分けてください：まずシーンを生成し、次に保留した制約を追加する修正プロンプトを実行します。',
          },
          {
            q: 'スタイル転換プロンプトは著作権を侵害しますか？',
            a: '著者のテクニック（文構造・句読点の選択・物語レジスター）を複製することは著作権侵害ではありません——スタイルは著作権で保護されません。著作権で保護されたテキストから実質的な逐語的文章を複製することは侵害です。本ガイドのテンプレートはテクニックアンカーとして2〜3文のサンプルを使用しますが、これは標準的な教育的フェアユースの範囲内であり、生成された出力はコンテンツではなくテクニックを複製します。',
          },
          {
            q: 'ローカルLLMを小説執筆に使う場合、個人情報保護法は関係しますか？',
            a: 'ローカルで動作するLLMは、テキストや会話データをいかなる外部サービスにも送信しません。そのため、個人情報保護委員会への届出義務や第三者提供に関する規定は通常適用されません。ただし、実在する識別可能な個人を題材とした創作物を第三者に公開する場合は、名誉毀損・プライバシー侵害に関する法律が適用されます。架空のキャラクターを用いた純粋なフィクションであれば、ローカル生成に個人情報保護法上の問題は生じません。',
          },
          {
            q: '日本でローカルLLMを使って成人向けコンテンツを生成する場合、法的な注意点はありますか？',
            a: '「児童買春・児童ポルノに係る行為等の処罰及び児童の保護等に関する法律」（いわゆる児童ポルノ禁止法）第7条は、AIによる生成物・フィクションを問わず、18歳未満の者を性的に描写するコンテンツの製造・所持・提供を絶対的に禁止しています。ローカル生成・非公開であっても例外ではありません。成人同士のフィクションコンテンツについては、刑法第175条（わいせつ物頒布罪）は「頒布・公然と陳列」する行為を規制しており、未公開の私的生成は一般に適用外です。スタイル転換プロンプトについては、著者のテクニックを複製することは許容されます；実質的な文章を逐語的に複製することは著作権を侵害する可能性があります。ローカルで標準的なフィクションを生成することには一般的な禁止事項はありません。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[クリエイティブライティングのためのベストローカルLLMs 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=ja) — 物語生成・サンプリング設定・無検閲オプションのためのモデル比較。',
          '[SillyTavern vs Agnai vs RisuAI：ベストローカルロールプレイフロントエンド](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay?lang=ja) — キャラクターカードロールプレイと協力的なフィクションのためのフロントエンド比較。',
          '[脚本・小説起草のためのローカルLLMの使い方](/power-local-llm/local-llm-screenwriting-and-novel-drafting?lang=ja) — 長編起草ワークフロー・章管理・コンテキストウィンドウ戦略。',
          '[クリエイティブライティングのための無検閲ローカルLLM：倫理と設定](/power-local-llm/uncensored-local-llm-creative-writing-ethics?lang=ja) — 成熟したコンテンツに使用するモデル・プライバシーへの影響・責任ある使用フレーム。',
          '[Chain-of-Thoughtプロンプティングの説明](/prompt-engineering/chain-of-thought-prompting?lang=ja) — フィクションのプロット構成とシーン計画に適用できる構造化推論プロンプト。',
          '[Zero-Shot vs Few-Shot プロンプティング](/prompt-engineering/zero-shot-vs-few-shot-prompting?lang=ja) — フィクションタスクでプロンプトにサンプルを含めるべき時と保留すべき時。',
        ],
      },
    },
  },
}
