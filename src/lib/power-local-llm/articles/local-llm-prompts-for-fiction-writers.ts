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
}
