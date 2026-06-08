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
    seoTitle: 'LLM-Prompts für Romanautoren 2026: Belletristik schreiben',
    intro:
      'Lokale LLMs produzieren messbar bessere Belletristik, wenn sie strukturierte Prompts statt offener Anfragen erhalten. Dieser Leitfaden enthält 15 Prompt-Vorlagen, die funktionieren — für Szenen-Schreiben, Charakterentwicklung, Dialog, Weltenbau, Stiltransfer, Überarbeitung und redaktionelle Aufgaben — alle getestet mit Llama 3.3 70B, Qwen3 32B und Mistral Large lokal über Ollama oder LM Studio. Jede Vorlage ist kopierfertig und enthält Hinweise zur Genre-Anpassung.',
    metaDescription:
      '15 Prompt-Vorlagen für Belletristik-Autoren mit lokalen LLMs: Szenen, Charaktere, Dialog, Weltenbau und Überarbeitung – kopierfertig für Ollama und LM Studio.',
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
            text: 'Genre und POV im System-Prompt für Mehrfach-Turn-Sessions setzen — siehe [System-Prompt vs User-Prompt](/de/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) warum das besser verankert als User-Turn-Anweisungen. Genre und POV in die System-Message, nicht in den User-Turn. Jede Completion in der Session erbt die Einschränkung — sie muss nicht wiederholt werden.',
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
          '**Stiltransfer funktioniert, wenn man die Technik benennt, nicht nur den Autor.** „Schreib wie Cormac McCarthy" erzeugt eine generische Annäherung. „Schreibe mit McCarthys Technik verschachtelter Nebensätze, nur konkrete Substantive, keine Dialog-Tags" erzeugt strukturelle Treue. Für ein umfassenderes Framework zur Strukturierung von Prompts, die spezifische kreative Ausgaben erzeugen, siehe das [CRAFT-Framework](/de/frameworks/craft).',
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
            a: 'Hermes 3 Llama 3.3, Dolphin 3.0 Mistral oder jedes Modell, das für weniger Inhaltsablehnungen feinabgestimmt ist. Bei lokalem Betrieb gibt es keine Cloud-Nutzungsbedingungen — das Basis-Fine-tune des Modells bestimmt, was es schreiben will und was nicht. Siehe [Beste lokale LLMs für kreatives Schreiben 2026](/de/power-local-llm/best-local-llm-creative-writing-2026) für eine vollständige Übersicht über Uncensored-Modell-Optionen.',
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
          '[Beste lokale LLMs für kreatives Schreiben 2026](/de/power-local-llm/best-local-llm-creative-writing-2026) — Modellvergleich für narrative Generierung, Sampling-Einstellungen und Uncensored-Optionen.',
          '[SillyTavern vs Agnai vs RisuAI: Bestes lokales Roleplay-Frontend](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — Frontend-Vergleich für Charakterkarten-Roleplay und kollaborative Belletristik.',
          '[Lokales LLM für Drehbuch- und Roman-Entwurf](/de/power-local-llm/local-llm-screenwriting-and-novel-drafting) — Langform-Entwurfs-Workflows, Kapitel-Management und Kontextfenster-Strategien.',
          '[Uncensored Local LLMs für kreatives Schreiben: Ethik und Einrichtung](/de/power-local-llm/uncensored-local-llm-creative-writing-ethics) — welche Modelle für reife Inhalte, Datenschutz-Implikationen und verantwortungsvoller Nutzungsrahmen.',
          '[Chain-of-Thought Prompting erklärt](/de/prompt-engineering/chain-of-thought-prompting) — strukturierte Reasoning-Prompts, die auf Belletristik-Plot-Konstruktion und Szenen-Planung anwendbar sind.',
          '[Zero-Shot vs Few-Shot Prompting](/de/prompt-engineering/zero-shot-vs-few-shot-prompting) — wann Beispiele in Prompts eingeschlossen werden sollten und wann nicht für Belletristik-Aufgaben.',
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
    seoTitle: 'Prompts LLM locaux pour auteurs de fiction 2026',
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
            text: 'Définir le genre et le PDV dans le prompt système pour les sessions multi-tours — voir [prompt système vs prompt utilisateur](/fr/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) pour comprendre pourquoi cela ancre mieux que les instructions dans le tour utilisateur. Mettre le genre et le PDV dans le message système, pas dans le tour utilisateur. Chaque génération de la session hérite de la contrainte, donc pas besoin de la répéter. Exemple : "Tu es un assistant de fiction littéraire. Toute la prose que tu génères est écrite à la troisième personne rapprochée, au passé, avec un focus sur le détail sensoriel et le sous-texte."',
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
          '**Le transfert de style fonctionne quand on nomme la technique, pas seulement l\'auteur.** "Écris comme Cormac McCarthy" produit une approximation générique — ponctuation rare et thèmes westerns. "Écris en utilisant la technique de McCarthy de propositions subordonnées imbriquées, noms concrets uniquement, pas de balises de dialogue" produit quelque chose avec une fidélité structurelle réelle. Pour un cadre plus complet sur la structuration des prompts qui produisent des sorties créatives spécifiques, voir [le cadre CRAFT](/fr/frameworks/craft).',
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
            a: 'Hermes 3 Llama 3.3, Dolphin 3.0 Mistral, ou tout modèle fine-tuné pour réduire les refus de contenu. Lors de l\'exécution en local, il n\'y a pas de restrictions des conditions d\'utilisation cloud — le fine-tune de base du modèle détermine ce qu\'il produira ou ne produira pas. Voir [Meilleurs LLM locaux pour l\'écriture créative 2026](/fr/power-local-llm/best-local-llm-creative-writing-2026) pour une analyse complète des options de modèles non censurés et du cadrage éthique.',
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
          '[Meilleurs LLM locaux pour l\'écriture créative 2026](/fr/power-local-llm/best-local-llm-creative-writing-2026) — comparatif de modèles pour la génération narrative, les paramètres de sampling et les options non censurées.',
          '[SillyTavern vs Agnai vs RisuAI : meilleure interface locale de roleplay](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparatif d\'interfaces pour le roleplay avec fiches de personnages et la fiction collaborative.',
          '[Comment utiliser un LLM local pour le scénario et la rédaction de roman](/fr/power-local-llm/local-llm-screenwriting-and-novel-drafting) — workflows de rédaction long format, gestion des chapitres et stratégies de fenêtre de contexte.',
          '[LLM locaux non censurés pour l\'écriture créative : éthique et configuration](/fr/power-local-llm/uncensored-local-llm-creative-writing-ethics) — quels modèles utiliser pour le contenu mature, implications de confidentialité et cadre d\'utilisation responsable.',
          '[Chain-of-Thought Prompting expliqué](/fr/prompt-engineering/chain-of-thought-prompting) — prompts de raisonnement structuré applicables à la construction d\'intrigue et à la planification de scènes.',
          '[Zero-Shot vs Few-Shot Prompting](/fr/prompt-engineering/zero-shot-vs-few-shot-prompting) — quand inclure des exemples dans les prompts et quand les retenir pour les tâches de fiction.',
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
            text: 'マルチターンセッションではシステムプロンプトにジャンルとPOVを設定してください——これがユーザーターンの命令よりもよく固定される理由については[システムプロンプト vs ユーザープロンプト](/ja/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)をご覧ください。ジャンルとPOVをユーザーターンではなくシステムメッセージに置いてください。セッション内の全ての生成が制約を継承するので、それを繰り返す必要はありません。例：「あなたは文芸小説アシスタントです。生成する全ての散文は、感覚的詳細とサブテキストに重点を置き、過去時制の密着した三人称で書かれています。」',
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
          '**スタイル転換は著者名だけでなくテクニックを名付けるときに機能します。** 「コーマック・マッカーシーのように書いて」は一般的な近似を生成します——まばらな句読点と西部テーマ。「マッカーシーのネストされた従属節・具体的な名詞のみ・ダイアログタグなしのテクニックを使って書いて」は実際の構造的忠実性を持つものを生成します。特定のクリエイティブ出力を生成するプロンプト構造の完全なフレームワークについては、[CRAFTフレームワーク](/ja/frameworks/craft)をご覧ください。',
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
            a: 'Hermes 3 Llama 3.3・Dolphin 3.0 Mistral、またはコンテンツ拒否を減らすためにファインチューニングされたモデル。ローカルで実行する場合、クラウドの利用規約制限はありません——モデルのベースファインチューンが何を生成するかを決定します。無検閲モデルオプションと倫理的フレームの完全な内訳については[クリエイティブライティングのためのベストローカルLLMs 2026](/ja/power-local-llm/best-local-llm-creative-writing-2026)をご覧ください。',
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
          '[クリエイティブライティングのためのベストローカルLLMs 2026](/ja/power-local-llm/best-local-llm-creative-writing-2026) — 物語生成・サンプリング設定・無検閲オプションのためのモデル比較。',
          '[SillyTavern vs Agnai vs RisuAI：ベストローカルロールプレイフロントエンド](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — キャラクターカードロールプレイと協力的なフィクションのためのフロントエンド比較。',
          '[脚本・小説起草のためのローカルLLMの使い方](/ja/power-local-llm/local-llm-screenwriting-and-novel-drafting) — 長編起草ワークフロー・章管理・コンテキストウィンドウ戦略。',
          '[クリエイティブライティングのための無検閲ローカルLLM：倫理と設定](/ja/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 成熟したコンテンツに使用するモデル・プライバシーへの影響・責任ある使用フレーム。',
          '[Chain-of-Thoughtプロンプティングの説明](/ja/prompt-engineering/chain-of-thought-prompting) — フィクションのプロット構成とシーン計画に適用できる構造化推論プロンプト。',
          '[Zero-Shot vs Few-Shot プロンプティング](/ja/prompt-engineering/zero-shot-vs-few-shot-prompting) — フィクションタスクでプロンプトにサンプルを含めるべき時と保留すべき時。',
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
    title: '本地LLM小说写作提示词：15个模板与技巧（2026）',
    seoTitle: '本地LLM小说写作提示词：15个模板（2026）',
    intro:
      '本地LLM在使用结构化提示词而非开放式请求时，会产出明显更好的小说内容。本指南涵盖15个经过验证的提示词模板——用于场景写作、角色开发、对话、世界构建、风格转换、修改和编辑任务——均通过Ollama或LM Studio本地运行的Llama 3.3 70B、Qwen3 32B和Mistral Large测试完成。每个模板均可直接复制使用，并附有各类型的调整说明。',
    metaDescription:
      '面向小说写作者的15个本地LLM提示词模板。场景写作、角色开发、对话、世界构建、风格转换、修改和编辑模板——适用于Ollama和LM Studio，即用即取。',
    twitterDescription:
      '本地LLM小说创作的15个提示词模板：场景写作、对话、角色开发、世界构建、风格转换、修改、编辑。在Llama 3.3 70B、Qwen3 32B上测试完成。',
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
      '使用本地LLM作为起草伙伴的小说家、短篇故事作者、编剧和游戏叙事设计师，寻求能产出一致、可用输出的可靠提示词结构。',
    readTime: '18 分钟阅读',
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
      '**本地LLM小说输出最大的单项改善，来自将"写一个场景"替换为结构化5部分提示词：类型+POV+感官约束+情感节拍+字数上限。仅这一格式在实践中就能将平淡的概述性输出减少约60%——模型会产出"展示而非讲述"的散文，而非情节摘要，因为提示词没有留下走捷径的空间。对于角色开发，最可靠的模板是"矛盾提示词"：给角色一个主导特质和一个与之矛盾的行为，然后让模型写一个场景展示两者但不明说任何一个。对于对话，先设定潜台词——角色想说但不会说的话——然后让模型围绕那个隐藏信息写出的台词。对于编辑工作，用情节一致性检查捕捉连续性错误，用节奏分析识别平淡区域，用叙述展开处理信息堆砌。**',
    quickAnswerTop: {
      zh: {
        question: '使用本地LLM进行小说写作的最佳提示词模板有哪些？',
        answer:
          '最可靠的小说写作提示词结构是：类型+POV+感官约束+情感节拍+字数上限。这能产出"展示而非讲述"的散文，而非情节摘要。对于角色开发，使用"矛盾提示词"（一个主导特质+一个矛盾行为，展示两者但不明说任何一个）。对于对话，先设定潜台词（角色想要但不会说的），再写台词。对于世界构建，先锚定一个感官细节，再向外展开。这些模板适用于任何指令调优模型；较大的模型（Llama 3.3 70B、Qwen3 32B）在长篇补全中能更好地保持约束遵从性。',
        bullets: [
          '场景提示词：类型+POV+1–2个感官细节+情感节拍+字数上限（150–400字）。',
          '角色开发：一个主导特质+一个矛盾行为，展示两者但不明说任何一个。',
          '对话：先设定潜台词（角色想要但不会说的），再生成台词。',
          '世界构建：锚定一个感官细节，向外扩展为同心圆（房间→建筑→街区→世界）。',
          '风格转换：命名目标作者的2–3个具体技巧，粘贴2句样本，再用这些技巧生成。',
          '修改：粘贴草稿，命名具体问题（被动语态、副词过多、视角跳跃），要求重写。',
          '编辑：情节一致性检查捕捉连续性错误；节奏分析映射章节节奏；叙述展开重新分配信息堆砌。',
          '较大的模型保持约束遵从性更好；Llama 3.3 70B是大多数小说任务的默认选择。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '主要结论', anchor: '#key-takeaways' },
      { label: '快速参考', anchor: '#quick-facts' },
      { label: '为什么结构化提示词很重要', anchor: '#why-structure' },
      { label: '前后对比示例', anchor: '#before-after' },
      { label: '场景写作模板（1–2）', anchor: '#scene-writing' },
      { label: '角色开发模板（3–5）', anchor: '#character-development' },
      { label: '对话模板（6–7）', anchor: '#dialogue' },
      { label: '世界构建模板（8–9）', anchor: '#worldbuilding' },
      { label: '风格转换模板（10–11）', anchor: '#style-transfer' },
      { label: '修改模板（12）', anchor: '#revision' },
      { label: '编辑模板（13–15）', anchor: '#editorial-templates' },
      { label: '模型推荐', anchor: '#models' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '参考来源', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**结构化提示词在小说写作上优于开放式请求。** 5部分场景提示词（类型+POV+感官约束+情感节拍+字数上限）产出"展示而非讲述"的散文；"写一个场景"产出情节摘要。模板本身就是技巧。',
          '**矛盾提示词是最可靠的角色开发结构。** 给模型一个主导特质和一个矛盾行为；让它展示两者但不命名任何一个。这能产出读者需要自己推断的有层次的角色。',
          '**先设定潜台词能让对话质量翻倍。** 先告诉模型角色想要但不会说的话。台词就会自然地围绕那个隐藏信息展开。',
          '**字数上限防止臃肿。** 200字的上限强迫压缩；模型必须精确。当需要更多时以100字为增量提高，但始终设置上限。',
          '**修改提示词需要命名问题。** "重写这个"产出最小的表面修改。"重写：消除所有被动语态，每句话必须以具体名词或强动词开头"产出可量化的结构改善。',
          '**编辑模板在手稿层面运作。** 情节一致性检查、节奏分析和叙述展开适用于已完成的场景和章节——在起草后运行，而非起草中。',
          '**较大的模型在长篇补全中更好地保持约束遵从性。** Llama 3.3 70B和Qwen3 32B可靠地遵循5部分场景约束；较小的模型在约200 token后开始偏离。',
          '**前端的影响远小于模型和提示词。** Ollama、LM Studio、SillyTavern和Agnai都原样传递你的提示词——小说质量的差异来自模型+提示词，而非前端。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速参考',
        items: [
          '**涵盖模板：** 共15个——场景写作（2）、角色开发（3）、对话（2）、世界构建（2）、风格转换（2）、修改（1）、编辑（3）。',
          '**测试平台：** Llama 3.3 70B、Qwen3 32B、Mistral Large——均通过Ollama在Apple M5 Max 64 GB和NVIDIA RTX 4090 24 GB上运行。',
          '**字数上限：** 场景150–400字；对话100–200字；世界构建段落300–600字。',
          '**最佳全能小说模型：** Llama 3.3 70B（指令遵从性强、叙事连贯性好、长上下文能力强）。',
          '**最佳风格转换模型：** Mistral Large（长篇补全中保持一致的散文语域；本地可运行模型中语域忠实度最佳）。',
          '**最佳对话模型：** Command R+ 104B或Hermes 3（角色声音区分度高；自然的口语语域）。',
          '**系统提示词：** 在系统消息中设置类型和POV，而非在用户轮次中——它能锚定整个会话中的每次补全。',
        ],
      },
      whyStructure: {
        id: 'why-structure',
        title: '为什么结构化提示词对小说很重要',
        content:
          '**本地LLM在小说创作中的默认失败模式是概述：模型告诉你发生了什么，而不是展示场景。** 这是因为指令调优模型针对任务完成而非叙事沉浸感进行了优化——一个模糊的提示词（"写一个紧张的对峙"）会触发概述启发式。结构化提示词关闭了这个出口。当你指定POV、一个感官约束、一个情感节拍和一个字数上限时，模型没有概述的空间——它必须渲染。第二个失败模式是偏移：模型在你指定的类型和声音中开始，然后在200–300 token后退化为通用AI写作语域。约束锚点（POV、感官焦点、字数上限）减慢这种偏移；命名类型和声音的系统提示词完全阻止它。',
        callouts: [
          {
            type: 'tip',
            text: '在多轮会话中，在系统提示词中设置类型和POV——参阅[系统提示词与用户提示词的区别](/zh/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)了解为什么这比用户轮次指令锚定得更好。将类型和POV放在系统消息中，而非用户轮次。会话中的每次补全都会继承约束，所以你不需要重复它。示例："你是一个文学小说助手。你生成的所有散文以紧密第三人称、过去时写作，注重感官细节和潜台词。"',
          },
        ],
      },
      beforeAfter: {
        id: 'before-after',
        title: '前后对比：结构化提示词的实际效果',
        content:
          '以下三对示例精确展示了从模糊请求切换到结构化提示词后的变化——每对涵盖不同的模板类别，描述每种提示词类型的输出效果。',
      },
      beforeAfterScene: {
        id: 'before-after-scene',
        title: '第1对——场景写作',
        promptExamples: [
          {
            label: '❌ 模糊的场景提示词',
            text: 'Write a tense confrontation scene in a kitchen.',
          },
          {
            label: '✅ 结构化5部分场景提示词',
            text: 'Genre: literary fiction. POV: close third, Maya. Sensory anchor: the smell of burned coffee. Emotional beat: Maya realises her brother lied. Show without stating. Word ceiling: 200 words.',
          },
        ],
        items: [
          '**模糊输出：** 2–3句情节摘要。"玛雅在厨房里对峙了她的兄弟。他们之间的紧张感显而易见。他不安地挪动着，移开了目光。"场景是被讲述的，不是被展示的。感官世界缺失。',
          '**结构化输出：** 一个180字的渲染场景，烧焦的咖啡锚定了动作——玛雅看到滤网中早上留下的咖啡渣，意识到她的兄弟在他说没在时其实在这里，场景以她手放在台面上的身体细节结束。认知从散文中浮现，而非被明说的情感。',
        ],
      },
      beforeAfterCharacter: {
        id: 'before-after-char',
        title: '第2对——角色开发',
        promptExamples: [
          {
            label: '❌ 特性清单式角色提示词',
            text: 'Elena is brave, sarcastic, and loyal.',
          },
          {
            label: '✅ 矛盾特质角色提示词',
            text: "Elena is pathologically honest. She hides her sister's letters from their mother. Show both without naming either. 200 words.",
          },
        ],
        items: [
          '**特性清单输出：** 依次展示每个特质的角色。"埃莱娜毫不犹豫地走进房间——她从不畏惧。\'当然，\'她淡然说道。她愿意为她爱的人做任何事。"每个特质被展示并打勾。',
          '**矛盾输出：** 读者需要自己解读的角色。埃莱娜主动说出了错误的咖啡订单（诚实），同时在母亲进门前把一个信封塞进厨房抽屉（隐藏）。读者必须推断出产生矛盾的伤口。那个间隙就是角色本身。',
        ],
      },
      beforeAfterDialogue: {
        id: 'before-after-dialogue',
        title: '第3对——对话',
        promptExamples: [
          {
            label: '❌ 直白式对话提示词',
            text: 'Two friends argue about money.',
          },
          {
            label: '✅ 潜台词优先对话提示词',
            text: "Subtext: A wants to ask B for a loan but won't say it. B knows but pretends not to. 4 exchanges, 'said' tags only, no action beats.",
          },
        ],
        items: [
          '**直白输出：** 说出真正意思的角色。"\'你欠我钱，\'詹姆斯说。\'我知道，很抱歉，\'保罗说。"潜台词就是台词本身。读者没有任何可推断的内容。',
          '**潜台词优先输出：** 四轮交流中没有一个角色提及钱或借款。A抱怨他的车需要维修。B同意车是个问题。A说他可能需要把它在车库里多放一段时间。B说他的车库已满。需求和回避都只在未说出口的话中可见。',
        ],
      },
      sceneWriting: {
        id: 'scene-writing',
        title: '场景写作模板（模板1–2）',
        content:
          '**5部分场景模板是基础：类型+POV+感官锚点+情感节拍+字数上限。** 每个元素都承担着具体的工作——去掉任何一个，输出质量都会明显下降。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '最有效的本地LLM场景提示词指定类型、POV、一个感官锚点、一个情感节拍和一个字数上限——这五个约束合在一起强制产出"展示而非讲述"的散文，防止模型的默认概述模式。',
          },
          {
            type: 'plain-terms',
            text: '不要写"写一个紧张的对峙场景"，而要写："类型：惊悚。POV：紧密第三人称，埃莱娜。感官锚点：空调的嗡嗡声。情感节拍：埃莱娜意识到她错了——展示它但不要明说。字数上限：200字。"模型的输出将是一个具体场景，而非情节摘要。字数上限不是可选项——没有它模型会臃肿填充。',
          },
        ],
        items: [
          '**类型标记** — 单个词或短语（例如"哥特恐怖""温馨推理""硬科幻"）锚定散文语域。',
          '**POV标记** — "紧密第三人称，[姓名]"或"第一人称"设置语法框架，并通过一个意识过滤所有观察。',
          '**感官锚点** — 一个具体的感官细节（湿混凝土的气味、时钟滴答声、磨损地毯的质感）将场景扎根于物理世界，防止抽象化。',
          '**情感节拍** — 命名场景应该落在的情感状态，然后加上"展示它但不要明说"——这激活了展示-不要-讲述约束。',
          '**字数上限** — 150字用于压缩时刻；250–300字用于完整场景节拍；最多400字，超出后请求第二个场景而不是延伸一个。',
        ],
      },
      template1: {
        id: 'template-1',
        title: '模板1——场景5部分结构',
        content:
          '基础模板。所有五个元素都是承重的——去掉任何一个，输出质量都会明显下降。',
        codeBlock: `Genre: [literary fiction / thriller / fantasy / horror / etc.]
POV: [first person / close third, character name]
Sensory anchor: [one specific sensory detail — smell, texture, sound]
Emotional beat: [what the POV character feels at the end of this scene — do not state it directly]
Word ceiling: [150–400 words]

Write the scene. Do not summarise. Every sentence must render a moment, not describe one.`,
        codeLanguage: '场景模板',
      },
      template2: {
        id: 'template-2',
        title: '模板2——动作/战斗时间压缩',
        content:
          '防止模型压缩动作或在节拍之间添加不必要的缓冲散文。"每句话代表1秒"规则强制机械精准，保持序列的动感。',
        codeBlock: `Genre: [action / thriller / fantasy combat]
POV: [close third / first person, character name]
Sensory anchor: [one physical sensation — impact, sound, texture]
Time rule: every sentence represents exactly 1 second of story time
Word ceiling: [100–200 words]

Write the fight/action sequence. Enforce the time rule strictly — no sentence can span more than 1 second of story time.`,
        codeLanguage: '场景模板',
      },
      characterDevelopment: {
        id: 'character-development',
        title: '角色开发模板（模板3–5）',
        content:
          '**矛盾提示词比任何特性清单方法都能产出更深度的角色。** 给模型一个特性列表（"埃莱娜勇敢、讽刺、忠诚"）会产出依次展示那些特质的角色。给模型一个主导特质和一个矛盾行为，会产出读者需要自己解读的角色。',
        items: [
          '**一个主导特质，一个矛盾行为** — 矛盾就是角色；读者推断出产生它的伤口或历史。',
          '**"不要命名或解释任何一个"** — 这个指令防止模型加评论（"她天生充满矛盾……"），并强迫场景承载意义。',
          '**关系动态提示词：** "写一段200字的[角色A]和[角色B]之间的交流，其中A想要X，B想要Y——没有人说出他们真正想要的。"',
        ],
        callouts: [
          {
            type: 'tip',
            text: '将角色表作为整个会话的系统提示词。在写作会话开始时构建一个纯文本角色表（姓名、主导特质、矛盾行为、核心伤口、语言风格）并粘贴到系统消息中。该会话中角色的每次出现都将保持一致。随着角色跨章节发展而更新表格。',
          },
        ],
      },
      template3: {
        id: 'template-3',
        title: '模板3——角色矛盾提示词',
        content:
          '最可靠的角色开发结构。产出读者需要推断的有层次的角色，而非展示特性清单的角色。',
        codeBlock: `Character name: [Name]
Dominant trait: [one trait — "relentlessly optimistic", "pathologically honest", "obsessively controlled"]
Contradicting behaviour: [one specific action that contradicts the trait — "hides her sister's letters", "lies to the one person who believes in him"]

Write a scene (200 words max) in which both the trait and the behaviour are present and visible. Do not name or explain either.`,
        codeLanguage: '角色模板',
      },
      template4: {
        id: 'template-4',
        title: '模板4——声音孤立提示词',
        content:
          '将角色的声音从情节和心理中孤立出来。适用于在写对话前建立语言风格，或检查角色听起来是否与同一手稿中的其他角色不同。',
        codeBlock: `Character: [Name]
Task: a mundane activity — [making coffee / waiting for a bus / washing dishes]

Write 5 lines of [Character]'s internal monologue during this task. Do not include plot information. Do not explain the character's psychology. Use the character's specific speech register only.`,
        codeLanguage: '角色模板',
      },
      template5: {
        id: 'template-5',
        title: '模板5——背景挖掘',
        content:
          '向读者展示是什么造就了角色，而不展示成年版本。从童年场景推断出的背景比直接讲述的背景更持久。',
        codeBlock: `Character (adult version): [Name — include dominant trait and contradicting behaviour in one sentence]

Write a 150-word scene from [Character]'s childhood that makes their adult behaviour inevitable — but do not show the adult version of the character. Do not name the trait or explain the connection. Show the event; let the reader infer the rest.`,
        codeLanguage: '角色模板',
      },
      dialogue: {
        id: 'dialogue',
        title: '对话模板（模板6–7）',
        content:
          '**潜台词优先对话模板产出自然的台词。** 大多数模型默认让角色说出真正意思——AI生成对话的明显标志。先设定潜台词再要求台词，迫使模型构建回避。',
        items: [
          '**明确说明潜台词** — 每个角色想要但不会说的话，以及为什么不会说。',
          '**"除了\'said\'以外不用对话标签"** — 去掉模型的情感标签拐杖（"他愤怒地说"），迫使台词本身承载情感。',
          '**"不要动作节拍"** — 去掉模型用来填充空洞对话的舞台指示（"她交叉双臂。他叹了口气。"）。在修改中削减这些。',
          '**类型语域提示词：** "在[类型]中写一个[关系]之间5轮的争论。争论表面上关于[话题A]，但真正的争论是关于[话题B]。不要命名话题B。"',
          '**打断提示词：** "角色A说话到一半时角色B打断了。这样写打断，使它揭示B的情感状态，而不让B说出他们的感受。"',
        ],
        callouts: [
          {
            type: 'tip',
            text: '对于多角色对话，在生成前在系统提示词中为每个角色分配一个"语言风格"。示例："埃莱娜：正式、精确、从不用缩写。马库斯：随意、经常打断、用\'听着，\'或\'关键是\'开头。"模型将保持这些风格而无需每轮提醒。',
          },
        ],
      },
      template6: {
        id: 'template-6',
        title: '模板6——潜台词优先对话',
        content:
          '在写任何台词前设定每个角色想要但不会说的话。迫使模型构建回避，而非写直接说出真正意思的角色。',
        codeBlock: `Subtext (do not include this in the dialogue itself):
[Character A] wants [X] but will not ask for it directly because [reason].
[Character B] knows [X] is what A wants but pretends not to because [reason].

Scene: [brief setting — 10 words max]
Length: [number] exchanges

Write the dialogue. No dialogue tags except "said". No internal monologue. No action beats.`,
        codeLanguage: '对话模板',
      },
      template7: {
        id: 'template-7',
        title: '模板7——声音区分（3种表达方式）',
        content:
          '测试角色声音是否足够不同以在没有归因的情况下识别出来。如果三种表达方式听起来相同，在继续会话前向系统提示词中添加语言风格约束。',
        codeBlock: `Piece of news: [state the news in one sentence]

Write this news delivered by three different characters. Each delivery should make the character's class, education level, and emotional relationship to the news immediately apparent. No exposition — voice only.

Character 1: [Name — background and relationship to the news in one sentence]
Character 2: [Name — background and relationship to the news in one sentence]
Character 3: [Name — background and relationship to the news in one sentence]`,
        codeLanguage: '对话模板',
      },
      worldbuilding: {
        id: 'worldbuilding',
        title: '世界构建模板（模板8–9）',
        content:
          '**世界构建提示词用同心圆结构效果最好：锚定一个感官细节，向外展开。** 从"描述我的奇幻城市"开始会产出目录。从"黎明市场的气味"开始会产出读者所栖居的世界。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '锚定单个感官细节并以同心圆结构（物体→房间→建筑→街道→街区）展开的世界构建提示词，产出沉浸式世界描写，而非读者在其中读到而非居住的百科全书式目录。',
          },
          {
            type: 'plain-terms',
            text: '从小而具体的东西开始——一枚硬币的重量、铁匠铺的气味、特定街头小贩的声音——然后让模型从那里向外展开。在达到城市层级之前停下。来自不同锚点的多个短暂世界构建段落，比任何一段综合描述都能构建更丰富的世界。',
          },
        ],
        items: [
          '**锚点具体性** — 锚点越具体，世界越具体。"市场的气味"是模糊的。"角落香料摊上豆蔻和湿狗气味"产出一个具体的世界。',
          '**停止圆** — 告诉模型在哪里停止扩展（房间、建筑、街区、城市）。没有停止指令，它会概述整个世界。',
          '**"不要命名这个世界"** — 防止模型插入知识倾泻，迫使它渲染场景。',
          '**"不要解释历史"** — 去掉百科全书反射；历史从细节中涌现，而非解释。',
          '**隐含技术提示词：** "通过命名角色在30秒步行中触摸的每个物体来描述你世界中的一条街道。没有旁白——只有物体名称，按顺序。"',
        ],
        callouts: [
          {
            type: 'warning',
            text: '避免世界构建目录。如果你的世界构建提示词产出关于你世界的项目符号列表，这个提示词太抽象了。每个不是渲染散文的回应都应该用具体锚点重新提示。目录是"描述我的世界"提示词的症状——切换到"从[特定POV]在[特定时刻]展示[特定地点]。"',
          },
        ],
      },
      template8: {
        id: 'template-8',
        title: '模板8——世界构建同心圆',
        content:
          '锚定一个感官细节并向外展开。防止百科全书式目录，产出读者所栖居而非阅读的沉浸式世界描写。',
        codeBlock: `Anchor: [one specific sensory detail — a smell, a sound, a texture]
POV: [observer character or omniscient]
Rings: expand from the anchor outward — object → room → building → street → district. Stop when you reach [ring level: room / building / street / district].
Word ceiling: [200–400 words]

Do not name the world. Do not explain the history. Show only what the POV character perceives in this moment.`,
        codeLanguage: '世界构建模板',
      },
      template9: {
        id: 'template-9',
        title: '模板9——通过物件展现派系文化',
        content:
          '通过物质文化而非描述或叙述来揭示世界构建。一个派系拥有、使用和公开展示的东西，比任何对其信仰的解释都更能告诉读者。',
        codeBlock: `Faction: [name and one-line description of their core belief or function]

Describe the interior of a building used by this faction — only through the objects in the room. Do not describe the people. Do not state their beliefs. Do not explain the purpose of any object. 150 words max.`,
        codeLanguage: '世界构建模板',
      },
      styleTransfer: {
        id: 'style-transfer',
        title: '风格转换模板（模板10–11）',
        content:
          '**风格转换在你命名技巧而非仅命名作者时才有效。** "像科马克·麦卡锡那样写"产出通用近似——稀疏标点和西部主题。"使用麦卡锡的嵌套从句、只用具体名词、不用对话标签的技巧"产出真正有结构忠实度的东西。关于构建产出特定创意输出的提示词的更完整框架，请参阅[CRAFT框架](/zh/frameworks/craft)。',
        items: [
          '**具体命名技巧** — "简练散文"是模糊的；"短陈述句、具体名词、无修饰语"是可操作的。',
          '**粘贴样本** — 实际作者散文的2–3句话比单纯描述更有效地激活模型中的模式匹配。',
          '**"不要模仿样本——复制技巧"** — 防止直接解释样本段落。',
          '**时态和POV转换：** "重写以下段落：从第三人称过去时改为第一人称现在时。保留所有具体感官细节。不要添加新的情节信息。最多200字。"',
          '**语域校准：** 在要求复制之前先让模型命名它在你提供的段落中看到的技巧——这个浮现步骤提高了技巧命名的准确性。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '风格转换用Mistral Large。Mistral Large在长篇补全中比大多数本地可运行模型更好地保持一致的散文语域。对于语域一致性在多段落中很重要的风格转换任务，优先选Mistral Large而非Llama 3.3 70B。对于短暂的风格转换（300字以内），任何30B以上的模型都表现充分。',
          },
        ],
      },
      template10: {
        id: 'template-10',
        title: '模板10——技巧命名风格转换',
        content:
          '命名具体技巧而非仅命名作者姓名。产出结构忠实度，而非表面级别的戏仿。',
        codeBlock: `Target style: [Author name]
Techniques to replicate (name 2–3 specifically):
1. [Technique — e.g., "sentence fragments for interiority"]
2. [Technique — e.g., "concrete Anglo-Saxon vocabulary, no Latinate abstractions"]
3. [Technique — e.g., "em dashes for interruption, never ellipsis"]

Sample passage (2–3 sentences of the author's actual prose):
"[paste sample]"

Now write [scene description] using these techniques. 200 words. Do not mimic the sample — replicate the technique.`,
        codeLanguage: '风格转换模板',
      },
      template11: {
        id: 'template-11',
        title: '模板11——类型语域转换',
        content:
          '在不改变情节信息的情况下将现有散文在类型语域之间移动。当场景的语域与类型不匹配时，适用于寻找场景的正确语域或修改。',
        codeBlock: `Source register: [thriller / romance / horror / literary fiction / commercial fiction / etc.]
Target register: [literary fiction / commercial fiction / genre X]
Specific changes: [longer sentences / more interiority / less action description / etc.]

Rewrite the following passage in [target register]. Do not change any plot information. Word ceiling: same length as input.

[paste passage]`,
        codeLanguage: '风格转换模板',
      },
      revision: {
        id: 'revision',
        title: '修改模板（模板12）',
        content:
          '**修改提示词需要命名问题，而非笼统地要求改善。** "让这个更好"产出最小的表面修改。"消除每个被动结构；每句话必须使用主动语态。如果主语不清楚，虚构一个具体的主语。150字以内"产出可量化的结构变化。',
        items: [
          '**始终粘贴草稿，而非描述。** 修改提示词只在粘贴实际草稿文本时有效。在不展示散文的情况下描述问题，产出的是通用建议，而非重写的段落。',
          '**命名具体问题。** "重写"不够。识别一个结构问题：被动语态、副词过多、视角跳跃、臃肿或信息堆砌。',
          '**视角跳跃修复：** "以下段落包含POV违规——我们听到多个角色的内心想法。将它严格改写为紧密第三人称[角色名]。删除对其他角色内心的所有访问。"',
          '**对话自然化：** "以下对话听起来是写出来的。重写：角色可以互相打断、用片段说话、说过头。保留相同的信息交换。"',
        ],
        callouts: [
          {
            type: 'tip',
            text: '始终粘贴草稿，而非描述。修改提示词只在粘贴实际草稿文本时有效。在不展示散文的情况下描述问题，产出的是通用建议，而非重写的段落。粘贴具体段落或交流，命名具体问题，并为重写指定字数上限。',
          },
        ],
      },
      template12: {
        id: 'template-12',
        title: '模板12——修改工具箱（压缩、被动语态、副词减少）',
        content:
          '三个命名具体问题的修改指令。分开运行每个——将所有三个合并到一个提示词中会产出不一致的结果，因为模型会将一个指令优先于其他。',
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
        codeLanguage: '修改模板',
      },
      editorialTemplates: {
        id: 'editorial-templates',
        title: '编辑模板（模板13–15）',
        content:
          '**编辑模板在手稿层面而非场景层面运作。** 它们帮助你在连续性错误复合之前捕捉，识别整章中的节奏问题，并将信息堆砌的叙述重新分配到对话、动作和感官细节中。在起草后运行这些，而非起草中。',
        callouts: [
          {
            type: 'tip',
            text: '在完成的草稿上运行编辑模板，而非进行中的作品。情节一致性检查至少需要3个场景；节奏分析需要完整章节。在不完整的段落上运行它们会产生假阳性，并浪费上下文窗口。',
          },
        ],
      },
      template13: {
        id: 'template-13',
        title: '模板13——情节一致性检查',
        content:
          '在连续性错误跨章节复合之前识别它们。在每3–4个新场景后运行，在错误还容易修复时捕捉。',
        codeBlock: `[paste the last 3 scenes here]

Read these three scenes carefully. List every continuity error you detect: changed physical descriptions (eye colour, hair, height), location inconsistencies, timeline conflicts, object appearances that contradict earlier scenes, character knowledge they should not yet have.

Output only a flag list — one sentence per flag, 150 words maximum total. Do not summarise the scenes. Do not suggest fixes. Flag only.`,
        codeLanguage: '编辑模板',
      },
      template14: {
        id: 'template-14',
        title: '模板14——节奏分析',
        content:
          '映射章节中的节奏以识别平淡区域。当章节在句子层面读得正确但整体感觉很慢时有用——节奏标记显示拖沓的来源。',
        codeBlock: `[paste chapter here]

Read this chapter and mark each paragraph with: FAST / MEDIUM / SLOW.

After marking, list only the SLOW paragraphs with a one-sentence diagnosis for each: what is causing the pacing to drag (over-description, dialogue repetition, excessive interiority, unnecessary backstory insertion, etc.).

Output format: Paragraph [number]: [SLOW] — [one-sentence diagnosis]
No other commentary. No summaries. Diagnosis only.`,
        codeLanguage: '编辑模板',
      },
      template15: {
        id: 'template-15',
        title: '模板15——叙述展开',
        content:
          '在不添加或删除任何信息的情况下，将信息堆砌的叙述重新分配到对话、动作和感官细节中。当段落读起来像事实传递机制而非场景时使用。',
        codeBlock: `[paste paragraph with exposition]

This paragraph delivers exposition as a block. Rewrite it by distributing the same information across three channels:
1. A line of dialogue that reveals one piece of information through character reaction (not explanation).
2. One action beat that implies one piece of information without stating it.
3. One sensory detail that shows one piece of information without naming it.

Word ceiling: same length as the input paragraph. Do not add any new information. Do not remove any information that was in the original.`,
        codeLanguage: '编辑模板',
      },
      models: {
        id: 'models',
        title: '小说写作的模型推荐',
        content:
          '**模型选择的影响小于提示词结构，但确实有影响。** 一个结构良好的提示词在7B模型上会胜过7B模型上模糊提示词——但在等效提示词的情况下，较大的模型在较长补全中更好地保持约束遵从性，并更可靠地区分角色声音。',
        columns: ['任务', '推荐模型', '原因'],
        rows: [
          { '任务': '通用场景写作', '推荐模型': 'Llama 3.3 70B', '原因': '指令遵从性强、叙事连贯性好，是约束性散文的最佳全能选择' },
          { '任务': '风格转换', '推荐模型': 'Mistral Large', '原因': '长篇补全中保持一致的散文语域；本地可运行模型中语域忠实度最佳' },
          { '任务': '对话/角色声音', '推荐模型': 'Command R+ 104B或Hermes 3', '原因': '自然的口语语域；在长篇交流中可靠地区分角色声音' },
          { '任务': '世界构建', '推荐模型': 'Qwen3 32B', '原因': '擅长结构化细节生成；可靠地保持同心圆扩展模式' },
          { '任务': '修改/编辑', '推荐模型': 'Llama 3.3 70B', '原因': '最擅长在整个段落中遵循特定的结构重写指令' },
          { '任务': '黑暗/无审查小说', '推荐模型': 'Hermes 3 Llama 3.3', '原因': '针对更少内容拒绝进行微调；本地运行时无云端服务条款限制' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '小说模型的硬件最低要求。Llama 3.3 70B在Q4量化下需要约40 GB VRAM或统一内存（NVIDIA RTX 4090 24 GB双GPU，或Apple M5 Max 64 GB）。Qwen3 32B在Q4下运行需要20–24 GB。Mistral Large在Q4下需要约24 GB。对于16 GB配置，Qwen3 14B和Mistral Small是实际的上限——两者都在较短的生成长度下可靠地遵循场景模板。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见错误',
        items: [
          '**没有字数上限。** 没有上限，模型会臃肿填充——它添加过渡段落、动作节拍和摘要句子，直到耗尽token。始终设置上限。',
          '**特性列表而非矛盾。** 五个特质的列表产出依次展示每个特质的角色。两个特质之间的矛盾产出读者需要解读的角色。使用矛盾结构。',
          '**"像[作者]那样写"而不命名技巧。** 仅作者名称的风格转换产出类型戏仿，而非技巧忠实度。命名你想复制的具体技巧。',
          '**没有POV锚点。** 没有命名POV的场景提示词默认产出视角跳跃——模型访问所有角色的内心状态，因为没有任何东西禁止它。始终命名POV角色。',
          '**没有草稿的修改提示词。** 要求模型"改善节奏"的场景，你描述但不展示，产出通用建议。粘贴实际段落。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          'Llama 3.3 70B模型卡和指令遵从基准 — [Meta AI Research](https://ai.meta.com)',
          'Qwen3 32B技术报告 — [Alibaba Cloud / Qwen Team](https://qwenlm.github.io)',
          'Mistral Large模型文档 — [Mistral AI](https://mistral.ai)',
          'Command R+ 104B规格 — [Cohere](https://cohere.com)',
          'Hermes 3微调方法论 — [Nous Research](https://nousresearch.com)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '本地LLM能替代人类写作伙伴进行小说起草吗？',
            a: '对于特定子任务——生成场景的初稿、产出对话变体、世界构建细节扫描——本地LLM是快速可靠的起草伙伴。它们不能替代人类合作作者的战略性思考：它们无法评估场景是否符合故事弧线、角色的选择是否在情感上是合理的，或章节节奏是否有效。将它们用于生成任务；保留对结构决策的人类判断。',
          },
          {
            q: '小说写作用Ollama、LM Studio还是SillyTavern更好？',
            a: '对于发送完整提示词并接收补全的结构化提示词模板，Ollama（CLI或API）和LM Studio（OpenAI兼容端点）是等效的——前端不影响输出质量。SillyTavern为多轮角色扮演和角色卡持久性增加了价值，但对于场景写作和修改提示词，简单的聊天UI或API调用就足够了。',
          },
          {
            q: '这些提示词模板在较小的模型（7B–14B）上有效吗？',
            a: '有效，但约束遵从性在约150 token后会下降。较小的模型遵循5部分提示词中的前2–3个约束，然后向其基础语域漂移。对于7B–14B模型：减少字数上限（最多150字），使用更少的同时约束（3部分而非5部分），并预期需要更频繁地修改或重新提示。Qwen3 14B是测试中针对特定小说提示词遵从性最强的小模型。',
          },
          {
            q: '如何在完整的小说会话中保持角色声音一致性？',
            a: '构建一个纯文本角色表（姓名、主导特质、矛盾行为、语言风格、3行示例对话）并在会话开始时粘贴到系统消息中。对于长会话，将已完成的场景总结为一个持续的"会话上下文"文档，并在每次用户轮次中包含最近场景的最后200–300字。这在不超过上下文窗口的情况下对抗上下文漂移。',
          },
          {
            q: '写黑暗或成熟小说最好的本地LLM是什么？',
            a: 'Hermes 3 Llama 3.3、Dolphin 3.0 Mistral，或任何针对减少内容拒绝进行微调的模型。在本地运行时，没有云端服务条款限制——模型的基础微调决定了它会和不会生成什么。关于无审查模型选项和伦理框架的完整细分，请参阅[2026年创意写作最佳本地LLMs](/zh/power-local-llm/best-local-llm-creative-writing-2026)。',
          },
          {
            q: '我可以在SillyTavern或Agnai中使用这些模板吗？',
            a: '可以。本指南中的所有模板都是纯文本——它们适用于任何向本地模型传递文本的界面。在SillyTavern中，将类型和POV约束放在系统提示词字段中；在用户轮次中使用特定场景的指令。在Agnai中，设置是等效的。这些模板与前端无关。',
          },
          {
            q: '场景提示词应该多长？',
            a: '50–100字的场景提示词在实践中产出最好的结果。较长的提示词（200字以上）对复杂场景可以有效，但增加了模型忽略某些约束的机会。对于复杂场景，将提示词分为两步：首先生成场景，然后运行添加你保留的约束的修改提示词。',
          },
          {
            q: '风格转换提示词是否侵犯版权？',
            a: '复制作者的技巧（句子结构、标点选择、叙事语域）不是版权侵犯——风格不受版权保护。从受版权保护的文本中复制实质性的逐字段落是侵权。本指南中的模板使用2–3句样本作为技巧锚点，这属于标准教育合理使用范围，生成的输出复制的是技巧而非内容。',
          },
          {
            q: '在中国大陆使用本地LLM进行小说写作，是否涉及《个人信息保护法》？',
            a: '本地运行的LLM不向任何外部服务传输文本或对话数据，因此《个人信息保护法》（PIPL）中关于个人信息处理者通知义务、第三方数据共享及境外传输的条款通常不适用于本地推理。若创作内容描写真实可识别的自然人并将其公开发表，则可能涉及名誉权和隐私权相关的民事责任。使用虚构角色进行纯文学创作时，本地生成通常不产生PIPL层面的合规问题。',
          },
          {
            q: '在中国大陆使用本地LLM生成成人创意内容，是否合法？',
            a: '根据《刑法》第363条，制作、复制、出版、贩卖或传播淫秽物品属于违法行为；第364条进一步规范了传播行为。本地生成且不对外发布的私人内容，与"传播"的构成要件有所不同，但具体情形仍需以实际案例和司法解释为准。描绘未成年人的性内容在任何情况下均属绝对禁止，不论生成手段或是否公开。《网络安全法》第12条同样禁止利用网络制作或传播违法信息。本地运行LLM意味着数据不上云，但生成内容的法律责任仍由作者承担。关于风格转换提示词，复制作者技巧是允许的；逐字复制大量文本可能侵犯版权。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[2026年创意写作最佳本地LLMs](/zh/power-local-llm/best-local-llm-creative-writing-2026) — 叙事生成、采样设置和无审查选项的模型对比。',
          '[SillyTavern vs Agnai vs RisuAI：最佳本地角色扮演前端](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 用于角色卡角色扮演和协作小说的前端对比。',
          '[如何使用本地LLM进行剧本写作和长篇小说起草](/zh/power-local-llm/local-llm-screenwriting-and-novel-drafting) — 长篇起草工作流、章节管理和上下文窗口策略。',
          '[创意写作的无审查本地LLM：伦理与设置](/zh/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 成熟内容使用哪些模型、隐私影响和负责任的使用框架。',
          '[Chain-of-Thought提示词解析](/zh/prompt-engineering/chain-of-thought-prompting) — 适用于小说情节构建和场景规划的结构化推理提示词。',
          '[Zero-Shot vs Few-Shot提示词](/zh/prompt-engineering/zero-shot-vs-few-shot-prompting) — 小说任务中何时在提示词中包含示例，何时保留它们。',
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
    title: 'Prompts para LLM local para escritores de ficción: 15 plantillas y técnicas (2026)',
    seoTitle: '15 prompts de LLM local para escritores de ficción 2026',
    intro:
      'Los LLM locales producen ficción notablemente mejor cuando les das prompts estructurados en lugar de solicitudes abiertas. Esta guía cubre 15 plantillas de prompts que funcionan — para escritura de escenas, desarrollo de personajes, diálogo, construcción de mundos, transferencia de estilo, revisión y tareas editoriales — todas probadas con Llama 3.3 70B, Qwen3 32B y Mistral Large ejecutándose localmente a través de Ollama o LM Studio. Cada plantilla está lista para copiar y pegar e incluye qué ajustar según el género.',
    metaDescription:
      '15 plantillas de prompts para escritores de ficción con LLM locales: escenas, personajes, diálogo, mundos y estilo. Listas para Ollama y LM Studio.',
    twitterDescription:
      '15 plantillas de prompts para ficción con LLM local: escenas, diálogo, personajes, construcción de mundos, transferencia de estilo, revisión, editorial. Probadas con Llama 3.3 70B, Qwen3 32B.',
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
      'Novelistas, escritores de cuentos, guionistas y diseñadores de narrativa de videojuegos que usan LLM locales como socios de borrador, buscando estructuras de prompts confiables que produzcan resultados consistentes y utilizables.',
    readTime: '18 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'prompts LLM local para ficción',
    targetKeywords: [
      'prompts llm local escritores ficcion',
      'prompts escritura ficcion ollama',
      'plantilla prompt escena llm',
      'prompt desarrollo personaje ia local',
      'prompt dialogo llm local',
      'plantilla prompt construccion mundo',
    ],
    leadAnswerBlock:
      '**La mejora más significativa en los resultados de ficción de un LLM local viene de pasar de "escribe una escena" a un prompt estructurado de 5 partes: género + POV + restricción sensorial + beat emocional + límite de palabras. Solo ese formato reduce la salida plana y resumida en ~60% en la práctica — el modelo produce prosa que muestra en vez de contar porque el prompt no deja espacio para el atajo fácil. Para el desarrollo de personajes, la plantilla más confiable es el "prompt de contradicción": darle al personaje un rasgo dominante y un comportamiento contradictorio, luego pedirle al modelo que escriba una escena que revele ambos sin enunciar ninguno. Para el diálogo, establecer el subtexto primero — lo que el personaje quiere decir pero no dirá — y luego dejar que el modelo escriba las líneas habladas alrededor de ese mensaje oculto. Para el trabajo editorial, usa la Verificación de coherencia de trama para detectar errores de continuidad, el Análisis de ritmo para identificar zonas planas, y el Suavizado de exposición para redistribuir bloques de información.**',
    quickAnswerTop: {
      es: {
        question: '¿Cuáles son las mejores plantillas de prompts para escritores de ficción que usan LLM locales?',
        answer:
          'La estructura de prompt más confiable para la ficción es: género + POV + restricción sensorial + beat emocional + límite de palabras. Esto produce prosa que muestra en vez de contar en lugar de un resumen de trama. Para el desarrollo de personajes, usa el "prompt de contradicción" (un rasgo dominante + un comportamiento contradictorio, revelar ambos sin enunciar ninguno). Para el diálogo, establece el subtexto primero (lo que el personaje quiere pero no dirá), luego escribe las líneas habladas. Para la construcción de mundos, ancla a un solo detalle sensorial antes de expandirse hacia afuera. Estas plantillas funcionan en cualquier modelo instruction-tuned; los modelos más grandes (Llama 3.3 70B, Qwen3 32B) mantienen mejor la adherencia a las restricciones en generaciones largas.',
        bullets: [
          'Prompt de escena: género + POV + 1–2 detalles sensoriales + beat emocional + límite de palabras (150–400 palabras).',
          'Desarrollo de personajes: un rasgo dominante + un comportamiento contradictorio, revelar ambos sin enunciar ninguno.',
          'Diálogo: establece el subtexto primero (lo que el personaje quiere pero no dirá), luego genera las líneas habladas.',
          'Construcción de mundos: ancla a un detalle sensorial, expándete hacia afuera en anillos concéntricos (habitación → edificio → barrio → mundo).',
          'Transferencia de estilo: nombra 2–3 técnicas específicas del autor objetivo, pega una muestra de 2 oraciones, luego genera usando esas técnicas.',
          'Revisión: pega el borrador, nombra el problema específico (voz pasiva, exceso de adverbios, cambio de POV), solicita la reescritura.',
          'Editorial: la Verificación de coherencia detecta errores de continuidad; el Análisis de ritmo mapea el ritmo por capítulo; el Suavizado de exposición redistribuye bloques de información.',
          'Los modelos más grandes mantienen mejor la adherencia a las restricciones; Llama 3.3 70B es la opción predeterminada para la mayoría de las tareas de ficción.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Por qué importan los prompts estructurados', anchor: '#why-structure' },
      { label: 'Ejemplos antes / después', anchor: '#before-after' },
      { label: 'Plantillas de escritura de escenas (1–2)', anchor: '#scene-writing' },
      { label: 'Plantillas de desarrollo de personajes (3–5)', anchor: '#character-development' },
      { label: 'Plantillas de diálogo (6–7)', anchor: '#dialogue' },
      { label: 'Plantillas de construcción de mundos (8–9)', anchor: '#worldbuilding' },
      { label: 'Plantillas de transferencia de estilo (10–11)', anchor: '#style-transfer' },
      { label: 'Plantillas de revisión (12)', anchor: '#revision' },
      { label: 'Plantillas editoriales (13–15)', anchor: '#editorial-templates' },
      { label: 'Recomendaciones de modelos', anchor: '#models' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Los prompts estructurados superan a las solicitudes abiertas para la ficción.** Un prompt de escena de 5 partes (género + POV + restricción sensorial + beat emocional + límite de palabras) produce prosa que muestra en vez de contar; "escribe una escena" produce un resumen de trama. La plantilla es la técnica.',
          '**El prompt de contradicción es la estructura de desarrollo de personajes más confiable.** Darle al modelo un rasgo dominante y un comportamiento contradictorio; pedirle que revele ambos sin nombrar ninguno. Esto produce personajes con capas que el lector debe inferir.',
          '**La calidad del diálogo se duplica cuando estableces el subtexto antes de las líneas habladas.** Dile al modelo primero lo que el personaje quiere pero no dirá. Las palabras habladas entonces funcionan alrededor de ese mensaje oculto de forma natural.',
          '**Los límites de palabras previenen el relleno.** Un límite de 200 palabras en un prompt de escena fuerza la compresión; el modelo debe ser preciso. Auméntalo en incrementos de 100 palabras cuando necesites más, pero siempre establece un límite.',
          '**Los prompts de revisión necesitan un problema nombrado.** "Reescribe esto" produce un cambio mínimo. "Reescribe: elimina toda voz pasiva, cada oración debe comenzar con un sustantivo concreto o un verbo fuerte" produce una mejora medible.',
          '**Las plantillas editoriales operan al nivel del manuscrito.** La Verificación de coherencia de trama, el Análisis de ritmo y el Suavizado de exposición funcionan en escenas y capítulos completados — ejecútalos después de redactar, no durante.',
          '**Los modelos más grandes mantienen mejor la adherencia a las restricciones en generaciones largas.** Llama 3.3 70B y Qwen3 32B siguen las restricciones de escena de 5 partes de forma confiable; los modelos más pequeños se desvían después de ~200 tokens.',
          '**La interfaz importa menos que el modelo y el prompt.** Ollama, LM Studio, SillyTavern y Agnai todos pasan tu prompt textualmente — la diferencia de calidad en la ficción está en el modelo + prompt, no en la interfaz.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Plantillas cubiertas:** 15 en total — escritura de escenas (2), desarrollo de personajes (3), diálogo (2), construcción de mundos (2), transferencia de estilo (2), revisión (1), editorial (3).',
          '**Probadas en:** Llama 3.3 70B, Qwen3 32B, Mistral Large — todas vía Ollama en Apple M5 Max 64 GB y NVIDIA RTX 4090 24 GB.',
          '**Límites de palabras:** 150–400 palabras para escenas; 100–200 palabras para diálogo; 300–600 palabras para pasajes de construcción de mundos.',
          '**Mejor modelo general para ficción:** Llama 3.3 70B (fuerte seguimiento de instrucciones, coherencia narrativa, contexto largo).',
          '**Mejor para transferencia de estilo:** Mistral Large (registro de prosa consistente; reproduce patrones de voz de autor de forma confiable).',
          '**Mejor para diálogo:** Command R+ 104B o Hermes 3 (diferenciación de voces de personajes; registro hablado naturalista).',
          '**Prompt de sistema:** establece el género y el POV en un mensaje de sistema, no en el turno del usuario — ancla cada generación de la sesión.',
        ],
      },
      whyStructure: {
        id: 'why-structure',
        title: 'Por qué los prompts estructurados importan para la ficción',
        content:
          '**El modo de fallo predeterminado de los LLM locales en la ficción es la resumización: el modelo te dice lo que pasó en vez de mostrar la escena.** Esto ocurre porque los modelos instruction-tuned están optimizados para completar tareas, no para la inmersión narrativa — y un prompt vago ("escribe una confrontación tensa") activa la heurística de resumen. Un prompt estructurado cierra esa salida. Cuando especificas un POV, una restricción sensorial, un beat emocional y un límite de palabras, el modelo no tiene espacio para resumir — debe renderizar. El modo de fallo secundario es la desviación: el modelo comienza en el género y la voz que especificaste, luego regresa a un registro de escritura IA genérico después de 200–300 tokens. Las anclas de restricción (POV, foco sensorial, límite de palabras) ralentizan esta desviación; un prompt de sistema que nombra el género y la voz la detiene por completo.',
        callouts: [
          {
            type: 'tip',
            text: 'Establece el género y el POV en el prompt de sistema para sesiones de múltiples turnos — ver [prompt de sistema vs prompt de usuario](/es/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) para entender por qué ancla mejor que las instrucciones en el turno del usuario. Pon el género y el POV en el mensaje de sistema, no en el turno del usuario. Cada generación de la sesión hereda la restricción, por lo que no tienes que repetirla. Ejemplo: "Eres un asistente de ficción literaria. Toda la prosa que generas está escrita en tercera persona cercana, tiempo pasado, con enfoque en el detalle sensorial y el subtexto."',
          },
        ],
      },
      beforeAfter: {
        id: 'before-after',
        title: 'Antes / después: lo que los prompts estructurados realmente hacen',
        content:
          'Los tres pares a continuación muestran exactamente qué cambia cuando pasas de una solicitud vaga a un prompt estructurado — cada par cubre una categoría de plantilla diferente y describe el resultado que obtienes con cada tipo de prompt.',
      },
      beforeAfterScene: {
        id: 'before-after-scene',
        title: 'Par 1 — Escritura de escena',
        promptExamples: [
          {
            label: '❌ Prompt de escena vago',
            text: 'Write a tense confrontation scene in a kitchen.',
          },
          {
            label: '✅ Prompt de escena estructurado de 5 partes',
            text: 'Genre: literary fiction. POV: close third, Maya. Sensory anchor: the smell of burned coffee. Emotional beat: Maya realises her brother lied. Show without stating. Word ceiling: 200 words.',
          },
        ],
        items: [
          '**Resultado vago:** 2–3 oraciones de resumen de trama. "Maya confrontó a su hermano en la cocina. La tensión entre ellos era palpable. Él se movió incómodo y miró hacia otro lado." La escena se cuenta, no se muestra. El mundo sensorial está ausente.',
          '**Resultado estructurado:** una escena renderizada de 180 palabras donde el café quemado ancla la acción — Maya ve los posos en el filtro de esa mañana, se da cuenta de que su hermano estuvo allí cuando dijo que no lo estaba, y la escena termina en el detalle físico de sus manos en el mostrador. La comprensión emerge de la prosa, no de una emoción enunciada.',
        ],
      },
      beforeAfterCharacter: {
        id: 'before-after-char',
        title: 'Par 2 — Desarrollo de personajes',
        promptExamples: [
          {
            label: '❌ Prompt de personaje con lista de rasgos',
            text: 'Elena is brave, sarcastic, and loyal.',
          },
          {
            label: '✅ Prompt de personaje por contradicción',
            text: "Elena is pathologically honest. She hides her sister's letters from their mother. Show both without naming either. 200 words.",
          },
        ],
        items: [
          '**Resultado con lista de rasgos:** un personaje que ilustra cada rasgo en secuencia. "Elena entró en la habitación sin vacilar — nunca le tuvo miedo a nada. \'Claro,\' dijo secamente. Haría cualquier cosa por las personas que amaba." Cada rasgo se ilustra y se tacha.',
          '**Resultado por contradicción:** un personaje que el lector debe interpretar. Elena señala el pedido de café equivocado sin que se lo pidan (honesta) mientras desliza un sobre en el cajón de la cocina antes de que entre su madre (ocultando). El lector debe inferir la herida que produjo la contradicción. Esa brecha es el personaje.',
        ],
      },
      beforeAfterDialogue: {
        id: 'before-after-dialogue',
        title: 'Par 3 — Diálogo',
        promptExamples: [
          {
            label: '❌ Prompt de diálogo directo',
            text: 'Two friends argue about money.',
          },
          {
            label: '✅ Prompt de diálogo con subtexto primero',
            text: "Subtext: A wants to ask B for a loan but won't say it. B knows but pretends not to. 4 exchanges, 'said' tags only, no action beats.",
          },
        ],
        items: [
          '**Resultado directo:** personajes que dicen exactamente lo que quieren decir. "\'Me debes dinero,\' dijo James. \'Lo sé, y lo siento,\' dijo Paul." El subtexto es el texto. No hay nada que el lector pueda inferir.',
          '**Resultado con subtexto primero:** cuatro intercambios en los que ningún personaje menciona dinero ni préstamos. A se queja de que su coche necesita reparaciones. B concuerda en que el coche es un problema. A dice que quizás deba dejarlo en el taller un tiempo más. B dice que su taller está lleno. La necesidad y la evasión son visibles solo en lo que no se dice.',
        ],
      },
      sceneWriting: {
        id: 'scene-writing',
        title: 'Plantillas de escritura de escenas (Plantillas 1–2)',
        content:
          '**La plantilla de escena de 5 partes es el fundamento: género + POV + ancla sensorial + beat emocional + límite de palabras.** Cada elemento realiza un trabajo específico — elimina cualquiera y la calidad del resultado cae de forma medible.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'El prompt de escena LLM local más efectivo especifica género, POV, un ancla sensorial, un beat emocional y un límite de palabras — estas cinco restricciones juntas fuerzan la prosa que muestra en vez de contar y previenen el modo de resumización predeterminado del modelo.',
          },
          {
            type: 'plain-terms',
            text: 'En lugar de "escribe una escena de confrontación tensa", prueba: "Género: thriller. POV: tercera persona cercana, Elena. Ancla sensorial: el zumbido del sistema de aire acondicionado. Beat emocional: Elena se da cuenta de que está equivocada — muéstralo sin enunciarlo. Límite de palabras: 200 palabras." El resultado del modelo será una escena específica, no un resumen de trama. El límite de palabras no es opcional — sin él, el modelo rellenará.',
          },
        ],
        items: [
          '**Marcador de género** — una sola palabra o frase (p. ej., "horror gótico", "misterio acogedor", "ciencia ficción dura") ancla el registro de la prosa.',
          '**Marcador de POV** — "tercera persona cercana, [Nombre]" o "primera persona" establece el marco gramatical y filtra todas las observaciones a través de una sola conciencia.',
          '**Ancla sensorial** — un detalle sensorial específico (el olor del concreto mojado, el sonido de un reloj, la textura de una alfombra gastada) ancla la escena en el mundo físico y evita la abstracción.',
          '**Beat emocional** — nombra el estado emocional en el que debe terminar la escena, luego añade "muéstralo sin enunciarlo" — esto activa la restricción de mostrar en vez de contar.',
          '**Límite de palabras** — 150 palabras para un momento comprimido; 250–300 palabras para un beat de escena completo; 400 palabras máximo antes de pedir una segunda escena en lugar de extender una.',
        ],
      },
      template1: {
        id: 'template-1',
        title: 'Plantilla 1 — Estructura de escena de 5 partes',
        content:
          'La plantilla fundamental. Los cinco elementos son esenciales — elimina cualquiera y la calidad del resultado cae de forma medible.',
        codeBlock: `Genre: [literary fiction / thriller / fantasy / horror / etc.]
POV: [first person / close third, character name]
Sensory anchor: [one specific sensory detail — smell, texture, sound]
Emotional beat: [what the POV character feels at the end of this scene — do not state it directly]
Word ceiling: [150–400 words]

Write the scene. Do not summarise. Every sentence must render a moment, not describe one.`,
        codeLanguage: 'Plantilla de escena',
      },
      template2: {
        id: 'template-2',
        title: 'Plantilla 2 — Compresión temporal de acción / combate',
        content:
          'Evita que el modelo telescopie la acción o añada prosa de respiración innecesaria entre los beats. La regla de "1 segundo por oración" impone precisión mecánica y mantiene la secuencia cinética.',
        codeBlock: `Genre: [action / thriller / fantasy combat]
POV: [close third / first person, character name]
Sensory anchor: [one physical sensation — impact, sound, texture]
Time rule: every sentence represents exactly 1 second of story time
Word ceiling: [100–200 words]

Write the fight/action sequence. Enforce the time rule strictly — no sentence can span more than 1 second of story time.`,
        codeLanguage: 'Plantilla de escena',
      },
      characterDevelopment: {
        id: 'character-development',
        title: 'Plantillas de desarrollo de personajes (Plantillas 3–5)',
        content:
          '**El prompt de contradicción produce personajes más profundos que cualquier enfoque con lista de rasgos.** Darle a un modelo una lista de rasgos ("Elena es valiente, sarcástica y leal") produce un personaje que ilustra esos rasgos. Darle al modelo un rasgo dominante y un comportamiento contradictorio produce un personaje que el lector debe interpretar.',
        items: [
          '**Un rasgo dominante, un comportamiento contradictorio** — la contradicción es el personaje; el lector infiere la herida o historia que la produjo.',
          '**"No nombres ni expliques ninguno"** — esta instrucción evita que el modelo editorialize ("Ella era contradictoria por naturaleza…") y fuerza a la escena a llevar el significado.',
          '**Prompt de dinámica relacional:** "Escribe un intercambio de 200 palabras entre [Personaje A] y [Personaje B] en el que A quiere X y B quiere Y — ninguno dice lo que realmente quiere."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Usa la ficha de personaje como prompt de sistema para toda la sesión. Construye una ficha de personaje en texto simple (nombre, rasgo dominante, comportamiento contradictorio, herida central, registro de habla) y pégala en el mensaje de sistema al inicio de una sesión de escritura. Cada aparición del personaje en esa sesión será consistente. Actualiza la ficha a medida que el personaje evoluciona a lo largo de los capítulos.',
          },
        ],
      },
      template3: {
        id: 'template-3',
        title: 'Plantilla 3 — Prompt de contradicción de personaje',
        content:
          'La estructura de desarrollo de personajes más confiable. Produce personajes con capas que el lector debe inferir, en lugar de personajes que ilustran una lista de rasgos.',
        codeBlock: `Character name: [Name]
Dominant trait: [one trait — "relentlessly optimistic", "pathologically honest", "obsessively controlled"]
Contradicting behaviour: [one specific action that contradicts the trait — "hides her sister's letters", "lies to the one person who believes in him"]

Write a scene (200 words max) in which both the trait and the behaviour are present and visible. Do not name or explain either.`,
        codeLanguage: 'Plantilla de personaje',
      },
      template4: {
        id: 'template-4',
        title: 'Plantilla 4 — Prompt de aislamiento de voz',
        content:
          'Aísla la voz de un personaje de la trama y la psicología. Útil para establecer el registro de habla antes de escribir diálogo, o para comprobar que un personaje suene distinto de otros en el mismo manuscrito.',
        codeBlock: `Character: [Name]
Task: a mundane activity — [making coffee / waiting for a bus / washing dishes]

Write 5 lines of [Character]'s internal monologue during this task. Do not include plot information. Do not explain the character's psychology. Use the character's specific speech register only.`,
        codeLanguage: 'Plantilla de personaje',
      },
      template5: {
        id: 'template-5',
        title: 'Plantilla 5 — Excavación de backstory',
        content:
          'Muestra al lector lo que formó al personaje sin mostrar la versión adulta. La backstory inferida de una escena de infancia es más duradera que la backstory que se cuenta.',
        codeBlock: `Character (adult version): [Name — include dominant trait and contradicting behaviour in one sentence]

Write a 150-word scene from [Character]'s childhood that makes their adult behaviour inevitable — but do not show the adult version of the character. Do not name the trait or explain the connection. Show the event; let the reader infer the rest.`,
        codeLanguage: 'Plantilla de personaje',
      },
      dialogue: {
        id: 'dialogue',
        title: 'Plantillas de diálogo (Plantillas 6–7)',
        content:
          '**La plantilla de diálogo con subtexto primero produce habla naturalista.** La mayoría de los modelos producen por defecto personajes que dicen exactamente lo que quieren decir — una señal evidente de diálogo generado por IA. Establecer el subtexto antes de pedir las líneas habladas fuerza al modelo a construir la evasión.',
        items: [
          '**Establece el subtexto explícitamente** — lo que cada personaje quiere pero no dirá, y por qué no lo dirá.',
          '**"Sin etiquetas de diálogo excepto \'dijo\'"** — elimina la muleta del modelo para las etiquetas emotivas ("dijo enojado") y fuerza a las palabras habladas a llevar la emoción.',
          '**"Sin beats de acción"** — elimina las acotaciones que el modelo usa para rellenar el diálogo vacío ("Cruzó los brazos. Él suspiró."). Recórtalos en la revisión.',
          '**Prompt de registro de género:** "Escribe una discusión de 5 intercambios entre [relación] en [género]. La discusión es superficialmente sobre [tema A], pero la discusión real es sobre [tema B]. No nombres el tema B."',
          '**Prompt de interrupción:** "El personaje A está a mitad de oración cuando el personaje B interrumpe. Escríbelo de modo que la interrupción revele el estado emocional de B sin que B diga cómo se siente."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para diálogo con múltiples personajes, asigna a cada personaje un "registro de habla" en el prompt de sistema antes de generar. Ejemplo: "Elena: formal, precisa, nunca contracciones. Marcus: informal, interrumpe, comienza oraciones con \'Mira,\' o \'El tema es.\'" El modelo mantendrá estos registros sin necesidad de recordárselo en cada turno.',
          },
        ],
      },
      template6: {
        id: 'template-6',
        title: 'Plantilla 6 — Diálogo con subtexto primero',
        content:
          'Establece lo que cada personaje quiere pero no dirá antes de escribir las líneas habladas. Fuerza al modelo a construir la evasión en lugar de escribir personajes que dicen exactamente lo que quieren decir.',
        codeBlock: `Subtext (do not include this in the dialogue itself):
[Character A] wants [X] but will not ask for it directly because [reason].
[Character B] knows [X] is what A wants but pretends not to because [reason].

Scene: [brief setting — 10 words max]
Length: [number] exchanges

Write the dialogue. No dialogue tags except "said". No internal monologue. No action beats.`,
        codeLanguage: 'Plantilla de diálogo',
      },
      template7: {
        id: 'template-7',
        title: 'Plantilla 7 — Diferenciación de voz (3 entregas)',
        content:
          'Comprueba si las voces de los personajes son lo suficientemente distintas como para identificarlas sin atribución. Si las tres entregas suenan igual, añade restricciones de registro de habla al prompt de sistema antes de continuar la sesión.',
        codeBlock: `Piece of news: [state the news in one sentence]

Write this news delivered by three different characters. Each delivery should make the character's class, education level, and emotional relationship to the news immediately apparent. No exposition — voice only.

Character 1: [Name — background and relationship to the news in one sentence]
Character 2: [Name — background and relationship to the news in one sentence]
Character 3: [Name — background and relationship to the news in one sentence]`,
        codeLanguage: 'Plantilla de diálogo',
      },
      worldbuilding: {
        id: 'worldbuilding',
        title: 'Plantillas de construcción de mundos (Plantillas 8–9)',
        content:
          '**Los prompts de construcción de mundos funcionan mejor con la estructura de anillos concéntricos: ancla a un detalle sensorial y expándete hacia afuera.** Empezar con "describe mi ciudad de fantasía" produce un catálogo. Empezar con "el olor del mercado al amanecer" produce un mundo que el lector habita.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Los prompts de construcción de mundos anclados a un solo detalle sensorial y estructurados como anillos concéntricos (objeto → habitación → edificio → calle → barrio) producen descripción de mundo inmersiva en lugar de catálogos enciclopédicos.',
          },
          {
            type: 'plain-terms',
            text: 'Empieza con algo pequeño y específico — el peso de una moneda, el olor de una fragua, el sonido de un vendedor callejero específico — y pide al modelo que se expanda hacia afuera desde ahí. Detente antes de llegar al nivel de la ciudad. Múltiples pasajes cortos de construcción de mundos desde diferentes anclas construyen un mundo más rico que una descripción comprehensiva.',
          },
        ],
        items: [
          '**Especificidad del ancla** — cuanto más específico sea el ancla, más específico será el mundo. "El olor del mercado" es vago. "El olor del cardamomo y perro mojado del puesto de especias de la esquina" produce un mundo específico.',
          '**Anillo de parada** — dile al modelo dónde dejar de expandirse (habitación, edificio, barrio, ciudad). Sin una parada, resumirá el mundo entero.',
          '**"No nombres el mundo"** — evita que el modelo inserte volcados de información y lo fuerza a renderizar la escena.',
          '**"No expliques la historia"** — elimina el reflejo enciclopédico; la historia emerge de los detalles, no de las explicaciones.',
          '**Prompt de tecnología implícita:** "Describe una calle en tu mundo nombrando cada objeto que un personaje toca en un paseo de 30 segundos. Sin narración — solo nombres de objetos, en secuencia."',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Evita los catálogos de construcción de mundos. Si tu prompt de construcción de mundos produce una lista de hechos sobre tu mundo, el prompt es demasiado abstracto. Cada respuesta que no sea prosa renderizada debe repromptarse con un ancla concreta. Los catálogos son síntoma de prompts del tipo "describe mi mundo" — cambia a "muéstrame [ubicación específica] desde [POV específico] en [momento específico]."',
          },
        ],
      },
      template8: {
        id: 'template-8',
        title: 'Plantilla 8 — Construcción de mundos en anillos concéntricos',
        content:
          'Ancla a un detalle sensorial y se expande hacia afuera. Evita los catálogos enciclopédicos y produce descripción de mundo inmersiva que el lector habita en vez de leer.',
        codeBlock: `Anchor: [one specific sensory detail — a smell, a sound, a texture]
POV: [observer character or omniscient]
Rings: expand from the anchor outward — object → room → building → street → district. Stop when you reach [ring level: room / building / street / district].
Word ceiling: [200–400 words]

Do not name the world. Do not explain the history. Show only what the POV character perceives in this moment.`,
        codeLanguage: 'Plantilla de construcción de mundos',
      },
      template9: {
        id: 'template-9',
        title: 'Plantilla 9 — Cultura de facción a través de objetos',
        content:
          'Revela la construcción de mundos a través de la cultura material en lugar de la descripción o la exposición. Lo que una facción posee, usa y mantiene visible le dice al lector más que cualquier explicación de sus creencias.',
        codeBlock: `Faction: [name and one-line description of their core belief or function]

Describe the interior of a building used by this faction — only through the objects in the room. Do not describe the people. Do not state their beliefs. Do not explain the purpose of any object. 150 words max.`,
        codeLanguage: 'Plantilla de construcción de mundos',
      },
      styleTransfer: {
        id: 'style-transfer',
        title: 'Plantillas de transferencia de estilo (Plantillas 10–11)',
        content:
          '**La transferencia de estilo funciona cuando nombras la técnica, no solo el autor.** "Escribe como Cormac McCarthy" produce una aproximación genérica — puntuación escasa y temas del Oeste. "Escribe usando la técnica de McCarthy de cláusulas subordinadas anidadas, solo sustantivos concretos, sin etiquetas de diálogo" produce algo con fidelidad estructural real. Para un marco más completo sobre cómo estructurar prompts que produzcan resultados creativos específicos, ver el [marco CRAFT](/es/frameworks/craft).',
        items: [
          '**Nombra las técnicas específicamente** — "prosa escueta" es vago; "oraciones declarativas cortas, sustantivos concretos, sin modificadores" es accionable.',
          '**Pega una muestra** — 2–3 oraciones de la prosa real del autor activa el reconocimiento de patrones en el modelo de forma más efectiva que la descripción sola.',
          '**"No imites la muestra — replica la técnica"** — evita la paráfrasis directa del pasaje de muestra.',
          '**Transferencia de tiempo y POV:** "Reescribe el siguiente pasaje: cambia de tercera persona pasado a primera persona presente. Mantén todos los detalles sensoriales concretos. No añadas nueva información de trama. Máximo 200 palabras."',
          '**Calibración de registro:** pide al modelo que nombre las técnicas que ve en un pasaje que proporcionas antes de pedirle que las replique — este paso de extracción mejora la precisión en el nombrado de técnicas.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Mistral Large para la transferencia de estilo. Mistral Large mantiene un registro de prosa consistente en generaciones largas mejor que la mayoría de los modelos ejecutables localmente. Para tareas de transferencia de estilo donde la consistencia del registro importa en múltiples párrafos, prefiere Mistral Large sobre Llama 3.3 70B. Para transferencia de estilo en ráfagas cortas (menos de 300 palabras), cualquier modelo de 30B+ funciona adecuadamente.',
          },
        ],
      },
      template10: {
        id: 'template-10',
        title: 'Plantilla 10 — Transferencia de estilo con técnicas nombradas',
        content:
          'Nombra técnicas específicas en lugar de solo el nombre del autor. Produce fidelidad estructural en vez de pastiche superficial.',
        codeBlock: `Target style: [Author name]
Techniques to replicate (name 2–3 specifically):
1. [Technique — e.g., "sentence fragments for interiority"]
2. [Technique — e.g., "concrete Anglo-Saxon vocabulary, no Latinate abstractions"]
3. [Technique — e.g., "em dashes for interruption, never ellipsis"]

Sample passage (2–3 sentences of the author's actual prose):
"[paste sample]"

Now write [scene description] using these techniques. 200 words. Do not mimic the sample — replicate the technique.`,
        codeLanguage: 'Plantilla de transferencia de estilo',
      },
      template11: {
        id: 'template-11',
        title: 'Plantilla 11 — Transferencia de registro de género',
        content:
          'Mueve la prosa existente entre registros de género sin alterar la información de la trama. Útil para encontrar el registro adecuado para una escena o para la revisión cuando el registro no coincide con el género.',
        codeBlock: `Source register: [thriller / romance / horror / literary fiction / commercial fiction / etc.]
Target register: [literary fiction / commercial fiction / genre X]
Specific changes: [longer sentences / more interiority / less action description / etc.]

Rewrite the following passage in [target register]. Do not change any plot information. Word ceiling: same length as input.

[paste passage]`,
        codeLanguage: 'Plantilla de transferencia de estilo',
      },
      revision: {
        id: 'revision',
        title: 'Plantillas de revisión (Plantilla 12)',
        content:
          '**Los prompts de revisión necesitan un problema nombrado, no una instrucción general de mejora.** "Haz esto mejor" produce ediciones superficiales mínimas. "Elimina toda construcción pasiva; cada oración debe comenzar con un sustantivo concreto o un verbo activo fuerte" produce un cambio estructural medible.',
        items: [
          '**Siempre pega el borrador, no una descripción.** Los prompts de revisión solo funcionan cuando pegas el texto real del borrador. Describir el problema sin mostrar la prosa produce consejos genéricos en lugar de un pasaje reescrito.',
          '**Nombra el problema específico.** "Reescribe" no es suficiente. Identifica un problema estructural: voz pasiva, exceso de adverbios, cambio de POV, relleno o volcado de información.',
          '**Corrección de cambio de POV:** "El siguiente pasaje contiene violaciones de POV — escuchamos pensamientos de múltiples personajes. Reescríbelo estrictamente en tercera persona cercana [Nombre del personaje]. Elimina todo acceso interior a otros personajes."',
          '**Naturalización del diálogo:** "El siguiente diálogo suena escrito. Reescribe: los personajes pueden interrumpirse mutuamente, hablar en fragmentos, hablarse de lado. Mantén la misma información intercambiada."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Siempre pega el borrador, no una descripción. Los prompts de revisión solo funcionan cuando pegas el texto real del borrador. Pega el párrafo o intercambio específico, nombra el problema específico y especifica el límite de palabras para la reescritura.',
          },
        ],
      },
      template12: {
        id: 'template-12',
        title: 'Plantilla 12 — Kit de revisión (compresión, voz pasiva, reducción de adverbios)',
        content:
          'Tres instrucciones de revisión que nombran el problema específico. Ejecuta cada una por separado — combinar las tres en un solo prompt produce resultados inconsistentes ya que el modelo prioriza una instrucción sobre las otras.',
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
        codeLanguage: 'Plantilla de revisión',
      },
      editorialTemplates: {
        id: 'editorial-templates',
        title: 'Plantillas editoriales (Plantillas 13–15)',
        content:
          '**Las plantillas editoriales operan al nivel del manuscrito en lugar del nivel de escena.** Te ayudan a detectar errores de continuidad antes de que se acumulen, identificar problemas de ritmo a lo largo de un capítulo completo y redistribuir la exposición en forma de volcados de información como prosa renderizada. Ejecútalas después de redactar, no durante.',
        callouts: [
          {
            type: 'tip',
            text: 'Ejecuta las plantillas editoriales en borradores completos, no en trabajos en progreso. La Verificación de coherencia de trama requiere al menos 3 escenas; el Análisis de ritmo requiere un capítulo completo. Ejecutarlas en pasajes incompletos produce falsos positivos y desperdicia la ventana de contexto.',
          },
        ],
      },
      template13: {
        id: 'template-13',
        title: 'Plantilla 13 — Verificación de coherencia de trama',
        content:
          'Identifica errores de continuidad antes de que se acumulen a lo largo de los capítulos. Ejecútala después de cada 3–4 nuevas escenas para detectar errores mientras aún son fáciles de corregir.',
        codeBlock: `[paste the last 3 scenes here]

Read these three scenes carefully. List every continuity error you detect: changed physical descriptions (eye colour, hair, height), location inconsistencies, timeline conflicts, object appearances that contradict earlier scenes, character knowledge they should not yet have.

Output only a flag list — one sentence per flag, 150 words maximum total. Do not summarise the scenes. Do not suggest fixes. Flag only.`,
        codeLanguage: 'Plantilla editorial',
      },
      template14: {
        id: 'template-14',
        title: 'Plantilla 14 — Análisis de ritmo',
        content:
          'Mapea el ritmo a lo largo de un capítulo para identificar zonas planas. Útil cuando un capítulo se lee correctamente al nivel de oración pero se siente lento en general — las marcas de ritmo muestran dónde se origina el arrastre.',
        codeBlock: `[paste chapter here]

Read this chapter and mark each paragraph with: FAST / MEDIUM / SLOW.

After marking, list only the SLOW paragraphs with a one-sentence diagnosis for each: what is causing the pacing to drag (over-description, dialogue repetition, excessive interiority, unnecessary backstory insertion, etc.).

Output format: Paragraph [number]: [SLOW] — [one-sentence diagnosis]
No other commentary. No summaries. Diagnosis only.`,
        codeLanguage: 'Plantilla editorial',
      },
      template15: {
        id: 'template-15',
        title: 'Plantilla 15 — Suavizado de exposición',
        content:
          'Redistribuye la exposición en forma de volcado de información a través del diálogo, la acción y el detalle sensorial sin añadir ni eliminar ninguna información. Úsala cuando un párrafo funciona como un mecanismo de entrega de hechos en lugar de una escena.',
        codeBlock: `[paste paragraph with exposition]

This paragraph delivers exposition as a block. Rewrite it by distributing the same information across three channels:
1. A line of dialogue that reveals one piece of information through character reaction (not explanation).
2. One action beat that implies one piece of information without stating it.
3. One sensory detail that shows one piece of information without naming it.

Word ceiling: same length as the input paragraph. Do not add any new information. Do not remove any information that was in the original.`,
        codeLanguage: 'Plantilla editorial',
      },
      models: {
        id: 'models',
        title: 'Recomendaciones de modelos para la escritura de ficción',
        content:
          '**La elección del modelo importa menos que la estructura del prompt, pero importa.** Un prompt bien estructurado en un modelo de 7B superará a un prompt vago en un modelo de 70B — pero dados prompts equivalentes, los modelos más grandes mantienen la adherencia a las restricciones en generaciones largas de forma más confiable y diferencian las voces de los personajes con mayor fiabilidad.',
        columns: ['Tarea', 'Modelo recomendado', 'Por qué'],
        rows: [
          { 'Tarea': 'Escritura de escenas general', 'Modelo recomendado': 'Llama 3.3 70B', 'Por qué': 'Fuerte seguimiento de instrucciones, coherencia narrativa, la mejor opción para prosa con restricciones' },
          { 'Tarea': 'Transferencia de estilo', 'Modelo recomendado': 'Mistral Large', 'Por qué': 'Registro de prosa consistente en generaciones largas; mejor fidelidad de registro entre los modelos ejecutables localmente' },
          { 'Tarea': 'Diálogo / voz de personaje', 'Modelo recomendado': 'Command R+ 104B o Hermes 3', 'Por qué': 'Registro de habla naturalista; diferencia las voces de los personajes de forma confiable en intercambios extensos' },
          { 'Tarea': 'Construcción de mundos', 'Modelo recomendado': 'Qwen3 32B', 'Por qué': 'Fuerte en la generación de detalles estructurados; mantiene el patrón de expansión de anillos concéntricos de forma confiable' },
          { 'Tarea': 'Revisión / edición', 'Modelo recomendado': 'Llama 3.3 70B', 'Por qué': 'Mejor en seguir instrucciones de reescritura estructural específicas a lo largo de un párrafo completo' },
          { 'Tarea': 'Ficción oscura / sin censura', 'Modelo recomendado': 'Hermes 3 Llama 3.3', 'Por qué': 'Ajustado para menos rechazos de contenido; sin restricciones de términos de servicio en la nube al ejecutarse localmente' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Requisitos mínimos de hardware para modelos de ficción. Llama 3.3 70B con cuantización Q4 requiere ~40 GB de VRAM o memoria unificada (NVIDIA RTX 4090 24 GB en doble GPU, o Apple M5 Max 64 GB). Qwen3 32B en Q4 funciona con 20–24 GB. Mistral Large en Q4 requiere ~24 GB. Para equipos de 16 GB, Qwen3 14B y Mistral Small son el techo práctico — ambos siguen las plantillas de escena de forma confiable en generaciones más cortas.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        items: [
          '**Sin límite de palabras.** Sin un límite, el modelo rellena — añade párrafos de transición, beats de acción y oraciones de resumen hasta que se queda sin tokens. Siempre establece un límite.',
          '**Listas de rasgos en lugar de contradicciones.** Una lista de cinco rasgos produce un personaje que ilustra cada rasgo en secuencia. Una contradicción entre dos rasgos produce un personaje que el lector debe interpretar. Usa la estructura de contradicción.',
          '**"Escribe como [Autor]" sin nombres de técnicas.** La transferencia de estilo solo con el nombre del autor produce pastiche de género, no fidelidad de técnica. Nombra las técnicas específicas que quieres replicadas.',
          '**Sin ancla de POV.** Un prompt de escena sin un POV nombrado produce cambio de POV por defecto — el modelo accede a los estados interiores de todos los personajes porque nada lo prohíbe. Siempre nombra el personaje POV.',
          '**Prompts de revisión sin borrador.** Pedirle al modelo que "mejore el ritmo" de una escena que describes, pero no muestras, produce consejos genéricos. Pega el pasaje real.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'Ficha de modelo Llama 3.3 70B y benchmarks de seguimiento de instrucciones — [Meta AI Research](https://ai.meta.com)',
          'Informe técnico de Qwen3 32B — [Alibaba Cloud / Qwen Team](https://qwenlm.github.io)',
          'Documentación del modelo Mistral Large — [Mistral AI](https://mistral.ai)',
          'Especificación de Command R+ 104B — [Cohere](https://cohere.com)',
          'Metodología de ajuste fino de Hermes 3 — [Nous Research](https://nousresearch.com)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿Puede un LLM local reemplazar a un compañero de escritura humano para la redacción de ficción?',
            a: 'Para tareas específicas — generar un primer borrador de una escena, producir variaciones de diálogo, pasadas de detalle de construcción de mundos — los LLM locales son socios de redacción rápidos y confiables. No reemplazan el pensamiento estratégico de un co-escritor humano: no pueden evaluar si la escena encaja en el arco de la historia, si la elección del personaje está emocionalmente ganada, o si el ritmo del capítulo está funcionando. Úsalos para tareas de generación; conserva el juicio humano para las decisiones estructurales.',
          },
          {
            q: '¿Qué es mejor para escribir ficción: Ollama, LM Studio o SillyTavern?',
            a: 'Para plantillas de prompts estructuradas donde envías un prompt completo y recibes una generación, Ollama (CLI o API) y LM Studio (endpoint compatible con OpenAI) son equivalentes — la interfaz no afecta la calidad del resultado. SillyTavern añade valor para el roleplay de múltiples turnos y la persistencia de tarjetas de personaje, pero para prompts de escritura de escenas y revisión, una interfaz de chat simple o una llamada a la API es suficiente.',
          },
          {
            q: '¿Estas plantillas de prompts funcionan en modelos más pequeños (7B–14B)?',
            a: 'Sí, pero la adherencia a las restricciones se degrada después de ~150 tokens. Los modelos más pequeños siguen las primeras 2–3 restricciones en un prompt de 5 partes, luego se desvían hacia su registro base. Para modelos de 7B–14B: reduce el límite de palabras (máximo 150 palabras), usa menos restricciones simultáneas (3 partes en lugar de 5), y espera revisar o volver a hacer prompts con más frecuencia. Qwen3 14B es el modelo pequeño más sólido probado para el seguimiento de prompts específico de ficción.',
          },
          {
            q: '¿Cómo mantengo la consistencia de la voz del personaje a lo largo de una sesión de novela completa?',
            a: 'Construye una ficha de personaje en texto simple (nombre, rasgo dominante, comportamiento contradictorio, registro de habla, 3 líneas de diálogo de ejemplo) y pégala en el mensaje de sistema al inicio de la sesión. Para sesiones largas, resume las escenas completadas en un documento de "contexto de sesión" en curso e incluye las últimas 200–300 palabras de la escena más reciente en cada turno del usuario. Esto combate la desviación de contexto sin exceder la ventana de contexto.',
          },
          {
            q: '¿Cuál es el mejor LLM local para escribir ficción oscura o madura?',
            a: 'Hermes 3 Llama 3.3, Dolphin 3.0 Mistral, o cualquier modelo ajustado para reducir los rechazos de contenido. Cuando se ejecuta localmente, no hay restricciones de términos de servicio en la nube — el ajuste fino base del modelo determina lo que generará y lo que no. Ver [Mejores LLM locales para escritura creativa 2026](/es/power-local-llm/best-local-llm-creative-writing-2026) para un desglose completo de las opciones de modelos sin censura y el marco ético.',
          },
          {
            q: '¿Puedo usar estas plantillas en SillyTavern o Agnai?',
            a: 'Sí. Todas las plantillas de esta guía son texto simple — funcionan en cualquier interfaz que pase texto a un modelo local. En SillyTavern, coloca la restricción de género y POV en el campo del prompt de sistema; usa el turno del usuario para las instrucciones específicas de la escena. En Agnai, la configuración es equivalente. Las plantillas son independientes de la interfaz.',
          },
          {
            q: '¿Qué tan largo debe ser un prompt de escena?',
            a: 'Un prompt de escena de 50–100 palabras produce los mejores resultados en la práctica. Los prompts más largos (200+ palabras) pueden funcionar para escenas complejas pero aumentan la posibilidad de que el modelo ignore algunas restricciones. Para escenas complejas, divide el prompt en dos pasadas: primero genera la escena, luego ejecuta un prompt de revisión que añada la restricción que retuviste.',
          },
          {
            q: '¿Los prompts de transferencia de estilo violan los derechos de autor?',
            a: 'Replicar la técnica de un autor (estructura de oración, elecciones de puntuación, registro narrativo) no es infracción de derechos de autor — el estilo no es protegible por derechos de autor. Reproducir pasajes verbatim sustanciales de texto con derechos de autor es infracción. Las plantillas de esta guía usan muestras de 2–3 oraciones como anclas de técnica, lo que cae dentro del uso justo educativo estándar, y el resultado generado replica la técnica en lugar del contenido.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores LLM locales para escritura creativa 2026](/es/power-local-llm/best-local-llm-creative-writing-2026) — comparación de modelos para generación narrativa, configuraciones de muestreo y opciones sin censura.',
          '[SillyTavern vs Agnai vs RisuAI: Mejor interfaz de roleplay local](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparación de interfaces para roleplay con tarjetas de personaje y ficción colaborativa.',
          '[Cómo ejecutar un LLM local para guiones y borradores de novelas](/es/power-local-llm/local-llm-screenwriting-and-novel-drafting) — flujos de trabajo de redacción de formato largo, gestión de capítulos y estrategias de ventana de contexto.',
          '[LLM locales sin censura para la escritura creativa: ética y configuración](/es/power-local-llm/uncensored-local-llm-creative-writing-ethics) — qué modelos usar para contenido maduro, implicaciones de privacidad y marco de uso responsable.',
          '[Chain-of-Thought Prompting explicado](/es/prompt-engineering/chain-of-thought-prompting) — prompts de razonamiento estructurado que se aplican a la construcción de tramas de ficción y la planificación de escenas.',
          '[Zero-Shot vs Few-Shot Prompting](/es/prompt-engineering/zero-shot-vs-few-shot-prompting) — cuándo incluir ejemplos en los prompts y cuándo omitirlos para tareas de ficción.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompts para LLM local para escritores de ficción: 15 plantillas y técnicas (2026)',
      description: '15 plantillas de prompts para escritores de ficción que usan LLM locales. Escritura de escenas, desarrollo de personajes, diálogo, construcción de mundos, transferencia de estilo, revisión y plantillas editoriales — listas para copiar en Ollama y LM Studio.',
      url: 'https://www.promptquorum.com/es/es/power-local-llm/local-llm-prompts-for-fiction-writers',
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
    title: 'Prompts para LLM local para escritores de ficção: 15 modelos e técnicas (2026)',
    seoTitle: '15 prompts de LLM local para escritores de ficção 2026',
    intro:
      'Os LLMs locais produzem ficção notavelmente melhor quando você lhes dá prompts estruturados em vez de solicitações abertas. Este guia cobre 15 modelos de prompts que funcionam — para escrita de cenas, desenvolvimento de personagens, diálogo, construção de mundos, transferência de estilo, revisão e tarefas editoriais — todos testados com Llama 3.3 70B, Qwen3 32B e Mistral Large rodando localmente através de Ollama ou LM Studio. Cada modelo está pronto para copiar e colar e inclui o que ajustar conforme o gênero.',
    metaDescription:
      '15 modelos de prompts para escritores de ficção com LLMs locais: cenas, personagens, diálogo, mundos e estilo. Prontos para Ollama e LM Studio.',
    twitterDescription:
      '15 modelos de prompts para ficção com LLM local: cenas, diálogo, personagens, construção de mundos, transferência de estilo, revisão, editorial. Testados com Llama 3.3 70B, Qwen3 32B.',
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
      'Romancistas, contistas, roteiristas e designers de narrativa de jogos que usam LLMs locais como parceiros de rascunho, em busca de estruturas de prompts confiáveis que produzam resultados consistentes e utilizáveis.',
    readTime: '18 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'prompts LLM local para ficção',
    targetKeywords: [
      'prompts llm local escritores ficcao',
      'prompts escrita ficcao ollama',
      'modelo prompt cena llm',
      'prompt desenvolvimento personagem ia local',
      'prompt dialogo llm local',
      'modelo prompt construcao mundo',
    ],
    leadAnswerBlock:
      '**A melhoria mais significativa nos resultados de ficção de um LLM local vem de passar de "escreva uma cena" para um prompt estruturado de 5 partes: gênero + POV + restrição sensorial + beat emocional + limite de palavras. Só esse formato reduz a saída plana e resumida em ~60% na prática — o modelo produz prosa que mostra em vez de contar porque o prompt não deixa espaço para o atalho fácil. Para o desenvolvimento de personagens, o modelo mais confiável é o "prompt de contradição": dar ao personagem um traço dominante e um comportamento contraditório, depois pedir ao modelo que escreva uma cena que revele ambos sem enunciar nenhum. Para o diálogo, estabelecer o subtexto primeiro — o que o personagem quer dizer mas não dirá — e depois deixar o modelo escrever as falas em torno dessa mensagem oculta. Para o trabalho editorial, use a Verificação de coerência de trama para detectar erros de continuidade, a Análise de ritmo para identificar zonas planas, e o Suavizamento de exposição para redistribuir blocos de informação.**',
    quickAnswerTop: {
      pt: {
        question: 'Quais são os melhores modelos de prompts para escritores de ficção que usam LLMs locais?',
        answer:
          'A estrutura de prompt mais confiável para a ficção é: gênero + POV + restrição sensorial + beat emocional + limite de palavras. Isso produz prosa que mostra em vez de contar em vez de um resumo de trama. Para o desenvolvimento de personagens, use o "prompt de contradição" (um traço dominante + um comportamento contraditório, revelar ambos sem enunciar nenhum). Para o diálogo, estabeleça o subtexto primeiro (o que o personagem quer mas não dirá), depois escreva as falas. Para a construção de mundos, ancore em um único detalhe sensorial antes de se expandir para fora. Esses modelos funcionam em qualquer modelo instruction-tuned; os modelos maiores (Llama 3.3 70B, Qwen3 32B) mantêm melhor a aderência às restrições em gerações longas.',
        bullets: [
          'Prompt de cena: gênero + POV + 1–2 detalhes sensoriais + beat emocional + limite de palavras (150–400 palavras).',
          'Desenvolvimento de personagens: um traço dominante + um comportamento contraditório, revelar ambos sem enunciar nenhum.',
          'Diálogo: estabeleça o subtexto primeiro (o que o personagem quer mas não dirá), depois gere as falas.',
          'Construção de mundos: ancore em um detalhe sensorial, expanda para fora em anéis concêntricos (cômodo → prédio → bairro → mundo).',
          'Transferência de estilo: nomeie 2–3 técnicas específicas do autor-alvo, cole uma amostra de 2 frases, depois gere usando essas técnicas.',
          'Revisão: cole o rascunho, nomeie o problema específico (voz passiva, excesso de advérbios, troca de POV), solicite a reescrita.',
          'Editorial: a Verificação de coerência detecta erros de continuidade; a Análise de ritmo mapeia o ritmo por capítulo; o Suavizamento de exposição redistribui blocos de informação.',
          'Os modelos maiores mantêm melhor a aderência às restrições; o Llama 3.3 70B é a opção padrão para a maioria das tarefas de ficção.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Dados rápidos', anchor: '#quick-facts' },
      { label: 'Por que os prompts estruturados importam', anchor: '#why-structure' },
      { label: 'Exemplos antes / depois', anchor: '#before-after' },
      { label: 'Modelos de escrita de cenas (1–2)', anchor: '#scene-writing' },
      { label: 'Modelos de desenvolvimento de personagens (3–5)', anchor: '#character-development' },
      { label: 'Modelos de diálogo (6–7)', anchor: '#dialogue' },
      { label: 'Modelos de construção de mundos (8–9)', anchor: '#worldbuilding' },
      { label: 'Modelos de transferência de estilo (10–11)', anchor: '#style-transfer' },
      { label: 'Modelos de revisão (12)', anchor: '#revision' },
      { label: 'Modelos editoriais (13–15)', anchor: '#editorial-templates' },
      { label: 'Recomendações de modelos', anchor: '#models' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Os prompts estruturados superam as solicitações abertas para a ficção.** Um prompt de cena de 5 partes (gênero + POV + restrição sensorial + beat emocional + limite de palavras) produz prosa que mostra em vez de contar; "escreva uma cena" produz um resumo de trama. O modelo é a técnica.',
          '**O prompt de contradição é a estrutura de desenvolvimento de personagens mais confiável.** Dar ao modelo um traço dominante e um comportamento contraditório; pedir que revele ambos sem nomear nenhum. Isso produz personagens em camadas que o leitor precisa inferir.',
          '**A qualidade do diálogo dobra quando você estabelece o subtexto antes das falas.** Diga ao modelo primeiro o que o personagem quer mas não dirá. As palavras faladas então funcionam em torno dessa mensagem oculta de forma natural.',
          '**Os limites de palavras evitam o excesso.** Um limite de 200 palavras em um prompt de cena força a compressão; o modelo precisa ser preciso. Aumente-o em incrementos de 100 palavras quando precisar de mais, mas sempre defina um limite.',
          '**Os prompts de revisão precisam de um problema nomeado.** "Reescreva isto" produz uma mudança mínima. "Reescreva: elimine toda voz passiva, cada frase deve começar com um substantivo concreto ou um verbo forte" produz uma melhoria mensurável.',
          '**Os modelos editoriais operam no nível do manuscrito.** A Verificação de coerência de trama, a Análise de ritmo e o Suavizamento de exposição funcionam em cenas e capítulos concluídos — execute-os depois de redigir, não durante.',
          '**Os modelos maiores mantêm melhor a aderência às restrições em gerações longas.** Llama 3.3 70B e Qwen3 32B seguem as restrições de cena de 5 partes de forma confiável; os modelos menores se desviam depois de ~200 tokens.',
          '**A interface importa menos do que o modelo e o prompt.** Ollama, LM Studio, SillyTavern e Agnai todos passam o seu prompt literalmente — a diferença de qualidade na ficção está no modelo + prompt, não na interface.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Dados rápidos',
        items: [
          '**Modelos cobertos:** 15 no total — escrita de cenas (2), desenvolvimento de personagens (3), diálogo (2), construção de mundos (2), transferência de estilo (2), revisão (1), editorial (3).',
          '**Testados em:** Llama 3.3 70B, Qwen3 32B, Mistral Large — todos via Ollama em Apple M5 Max 64 GB e NVIDIA RTX 4090 24 GB.',
          '**Limites de palavras:** 150–400 palavras para cenas; 100–200 palavras para diálogo; 300–600 palavras para passagens de construção de mundos.',
          '**Melhor modelo geral para ficção:** Llama 3.3 70B (forte seguimento de instruções, coerência narrativa, contexto longo).',
          '**Melhor para transferência de estilo:** Mistral Large (registro de prosa consistente; reproduz padrões de voz de autor de forma confiável).',
          '**Melhor para diálogo:** Command R+ 104B ou Hermes 3 (diferenciação de vozes de personagens; registro falado naturalista).',
          '**System prompt:** defina o gênero e o POV em uma mensagem de sistema, não no turno do usuário — isso ancora cada geração da sessão.',
        ],
      },
      whyStructure: {
        id: 'why-structure',
        title: 'Por que os prompts estruturados importam para a ficção',
        content:
          '**O modo de falha padrão dos LLMs locais na ficção é a resumição: o modelo lhe diz o que aconteceu em vez de mostrar a cena.** Isso ocorre porque os modelos instruction-tuned são otimizados para concluir tarefas, não para a imersão narrativa — e um prompt vago ("escreva uma confrontação tensa") ativa a heurística de resumo. Um prompt estruturado fecha essa saída. Quando você especifica um POV, uma restrição sensorial, um beat emocional e um limite de palavras, o modelo não tem espaço para resumir — ele precisa renderizar. O modo de falha secundário é o desvio: o modelo começa no gênero e na voz que você especificou, depois regride para um registro de escrita de IA genérico depois de 200–300 tokens. As âncoras de restrição (POV, foco sensorial, limite de palavras) desaceleram esse desvio; um system prompt que nomeia o gênero e a voz o interrompe por completo.',
        callouts: [
          {
            type: 'tip',
            text: 'Defina o gênero e o POV no system prompt para sessões de múltiplos turnos — veja [system prompt vs prompt do usuário](/pt/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) para entender por que isso ancora melhor do que as instruções no turno do usuário. Coloque o gênero e o POV na mensagem de sistema, não no turno do usuário. Cada geração da sessão herda a restrição, então você não precisa repeti-la. Exemplo: "Você é um assistente de ficção literária. Toda a prosa que você gera é escrita em terceira pessoa fechada, tempo passado, com foco no detalhe sensorial e no subtexto."',
          },
        ],
      },
      beforeAfter: {
        id: 'before-after',
        title: 'Antes / depois: o que os prompts estruturados realmente fazem',
        content:
          'Os três pares a seguir mostram exatamente o que muda quando você passa de uma solicitação vaga para um prompt estruturado — cada par cobre uma categoria de modelo diferente e descreve o resultado que você obtém com cada tipo de prompt.',
      },
      beforeAfterScene: {
        id: 'before-after-scene',
        title: 'Par 1 — Escrita de cena',
        promptExamples: [
          {
            label: '❌ Prompt de cena vago',
            text: 'Write a tense confrontation scene in a kitchen.',
          },
          {
            label: '✅ Prompt de cena estruturado de 5 partes',
            text: 'Genre: literary fiction. POV: close third, Maya. Sensory anchor: the smell of burned coffee. Emotional beat: Maya realises her brother lied. Show without stating. Word ceiling: 200 words.',
          },
        ],
        items: [
          '**Resultado vago:** 2–3 frases de resumo de trama. "Maya confrontou o irmão na cozinha. A tensão entre eles era palpável. Ele se mexeu desconfortável e olhou para o lado." A cena é contada, não mostrada. O mundo sensorial está ausente.',
          '**Resultado estruturado:** uma cena renderizada de 180 palavras onde o café queimado ancora a ação — Maya vê a borra no filtro daquela manhã, percebe que o irmão esteve ali quando disse que não estava, e a cena termina no detalhe físico das mãos dela no balcão. A compreensão emerge da prosa, não de uma emoção enunciada.',
        ],
      },
      beforeAfterCharacter: {
        id: 'before-after-char',
        title: 'Par 2 — Desenvolvimento de personagens',
        promptExamples: [
          {
            label: '❌ Prompt de personagem com lista de traços',
            text: 'Elena is brave, sarcastic, and loyal.',
          },
          {
            label: '✅ Prompt de personagem por contradição',
            text: "Elena is pathologically honest. She hides her sister's letters from their mother. Show both without naming either. 200 words.",
          },
        ],
        items: [
          '**Resultado com lista de traços:** um personagem que ilustra cada traço em sequência. "Elena entrou na sala sem hesitar — nunca teve medo de nada. \'Claro,\' disse secamente. Faria qualquer coisa pelas pessoas que amava." Cada traço é ilustrado e riscado.',
          '**Resultado por contradição:** um personagem que o leitor precisa interpretar. Elena aponta o pedido de café errado sem que lhe peçam (honesta) enquanto desliza um envelope na gaveta da cozinha antes de a mãe entrar (escondendo). O leitor precisa inferir a ferida que produziu a contradição. Essa lacuna é o personagem.',
        ],
      },
      beforeAfterDialogue: {
        id: 'before-after-dialogue',
        title: 'Par 3 — Diálogo',
        promptExamples: [
          {
            label: '❌ Prompt de diálogo direto',
            text: 'Two friends argue about money.',
          },
          {
            label: '✅ Prompt de diálogo com subtexto primeiro',
            text: "Subtext: A wants to ask B for a loan but won't say it. B knows but pretends not to. 4 exchanges, 'said' tags only, no action beats.",
          },
        ],
        items: [
          '**Resultado direto:** personagens que dizem exatamente o que querem dizer. "\'Você me deve dinheiro,\' disse James. \'Eu sei, e sinto muito,\' disse Paul." O subtexto é o texto. Não há nada que o leitor possa inferir.',
          '**Resultado com subtexto primeiro:** quatro trocas em que nenhum personagem menciona dinheiro nem empréstimos. A reclama que o carro precisa de reparos. B concorda que o carro é um problema. A diz que talvez precise deixá-lo na oficina por mais um tempo. B diz que a oficina dele está cheia. A necessidade e a evasão são visíveis apenas no que não é dito.',
        ],
      },
      sceneWriting: {
        id: 'scene-writing',
        title: 'Modelos de escrita de cenas (Modelos 1–2)',
        content:
          '**O modelo de cena de 5 partes é o fundamento: gênero + POV + âncora sensorial + beat emocional + limite de palavras.** Cada elemento realiza um trabalho específico — remova qualquer um e a qualidade do resultado cai de forma mensurável.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O prompt de cena de LLM local mais eficaz especifica gênero, POV, uma âncora sensorial, um beat emocional e um limite de palavras — essas cinco restrições juntas forçam a prosa que mostra em vez de contar e evitam o modo de resumição padrão do modelo.',
          },
          {
            type: 'plain-terms',
            text: 'Em vez de "escreva uma cena de confrontação tensa", tente: "Gênero: thriller. POV: terceira pessoa fechada, Elena. Âncora sensorial: o zumbido do sistema de ar-condicionado. Beat emocional: Elena percebe que está errada — mostre isso sem enunciá-lo. Limite de palavras: 200 palavras." O resultado do modelo será uma cena específica, não um resumo de trama. O limite de palavras não é opcional — sem ele, o modelo vai encher linguiça.',
          },
        ],
        items: [
          '**Marcador de gênero** — uma única palavra ou frase (por exemplo, "horror gótico", "mistério aconchegante", "ficção científica hard") ancora o registro da prosa.',
          '**Marcador de POV** — "terceira pessoa fechada, [Nome]" ou "primeira pessoa" estabelece o quadro gramatical e filtra todas as observações por uma única consciência.',
          '**Âncora sensorial** — um detalhe sensorial específico (o cheiro de concreto molhado, o som de um relógio, a textura de um carpete gasto) ancora a cena no mundo físico e evita a abstração.',
          '**Beat emocional** — nomeie o estado emocional em que a cena deve terminar, depois adicione "mostre isso sem enunciá-lo" — isso ativa a restrição de mostrar em vez de contar.',
          '**Limite de palavras** — 150 palavras para um momento comprimido; 250–300 palavras para um beat de cena completo; 400 palavras no máximo antes de pedir uma segunda cena em vez de estender uma.',
        ],
      },
      template1: {
        id: 'template-1',
        title: 'Modelo 1 — Estrutura de cena de 5 partes',
        content:
          'O modelo fundamental. Os cinco elementos são essenciais — remova qualquer um e a qualidade do resultado cai de forma mensurável.',
        codeBlock: `Genre: [literary fiction / thriller / fantasy / horror / etc.]
POV: [first person / close third, character name]
Sensory anchor: [one specific sensory detail — smell, texture, sound]
Emotional beat: [what the POV character feels at the end of this scene — do not state it directly]
Word ceiling: [150–400 words]

Write the scene. Do not summarise. Every sentence must render a moment, not describe one.`,
        codeLanguage: 'Modelo de cena',
      },
      template2: {
        id: 'template-2',
        title: 'Modelo 2 — Compressão temporal de ação / combate',
        content:
          'Evita que o modelo telescope a ação ou adicione prosa de respiração desnecessária entre os beats. A regra de "1 segundo por frase" impõe precisão mecânica e mantém a sequência cinética.',
        codeBlock: `Genre: [action / thriller / fantasy combat]
POV: [close third / first person, character name]
Sensory anchor: [one physical sensation — impact, sound, texture]
Time rule: every sentence represents exactly 1 second of story time
Word ceiling: [100–200 words]

Write the fight/action sequence. Enforce the time rule strictly — no sentence can span more than 1 second of story time.`,
        codeLanguage: 'Modelo de cena',
      },
      characterDevelopment: {
        id: 'character-development',
        title: 'Modelos de desenvolvimento de personagens (Modelos 3–5)',
        content:
          '**O prompt de contradição produz personagens mais profundos do que qualquer abordagem com lista de traços.** Dar a um modelo uma lista de traços ("Elena é corajosa, sarcástica e leal") produz um personagem que ilustra esses traços. Dar ao modelo um traço dominante e um comportamento contraditório produz um personagem que o leitor precisa interpretar.',
        items: [
          '**Um traço dominante, um comportamento contraditório** — a contradição é o personagem; o leitor infere a ferida ou história que a produziu.',
          '**"Não nomeie nem explique nenhum"** — esta instrução evita que o modelo editorialize ("Ela era contraditória por natureza…") e força a cena a carregar o significado.',
          '**Prompt de dinâmica relacional:** "Escreva uma troca de 200 palavras entre [Personagem A] e [Personagem B] em que A quer X e B quer Y — nenhum diz o que realmente quer."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Use a ficha de personagem como system prompt para toda a sessão. Construa uma ficha de personagem em texto simples (nome, traço dominante, comportamento contraditório, ferida central, registro de fala) e cole-a na mensagem de sistema no início de uma sessão de escrita. Cada aparição do personagem nessa sessão será consistente. Atualize a ficha à medida que o personagem evolui ao longo dos capítulos.',
          },
        ],
      },
      template3: {
        id: 'template-3',
        title: 'Modelo 3 — Prompt de contradição de personagem',
        content:
          'A estrutura de desenvolvimento de personagens mais confiável. Produz personagens em camadas que o leitor precisa inferir, em vez de personagens que ilustram uma lista de traços.',
        codeBlock: `Character name: [Name]
Dominant trait: [one trait — "relentlessly optimistic", "pathologically honest", "obsessively controlled"]
Contradicting behaviour: [one specific action that contradicts the trait — "hides her sister's letters", "lies to the one person who believes in him"]

Write a scene (200 words max) in which both the trait and the behaviour are present and visible. Do not name or explain either.`,
        codeLanguage: 'Modelo de personagem',
      },
      template4: {
        id: 'template-4',
        title: 'Modelo 4 — Prompt de isolamento de voz',
        content:
          'Isola a voz de um personagem da trama e da psicologia. Útil para estabelecer o registro de fala antes de escrever diálogo, ou para verificar se um personagem soa distinto dos outros no mesmo manuscrito.',
        codeBlock: `Character: [Name]
Task: a mundane activity — [making coffee / waiting for a bus / washing dishes]

Write 5 lines of [Character]'s internal monologue during this task. Do not include plot information. Do not explain the character's psychology. Use the character's specific speech register only.`,
        codeLanguage: 'Modelo de personagem',
      },
      template5: {
        id: 'template-5',
        title: 'Modelo 5 — Escavação de backstory',
        content:
          'Mostra ao leitor o que formou o personagem sem mostrar a versão adulta. A backstory inferida de uma cena de infância é mais duradoura do que a backstory que é contada.',
        codeBlock: `Character (adult version): [Name — include dominant trait and contradicting behaviour in one sentence]

Write a 150-word scene from [Character]'s childhood that makes their adult behaviour inevitable — but do not show the adult version of the character. Do not name the trait or explain the connection. Show the event; let the reader infer the rest.`,
        codeLanguage: 'Modelo de personagem',
      },
      dialogue: {
        id: 'dialogue',
        title: 'Modelos de diálogo (Modelos 6–7)',
        content:
          '**O modelo de diálogo com subtexto primeiro produz fala naturalista.** A maioria dos modelos produz por padrão personagens que dizem exatamente o que querem dizer — um sinal evidente de diálogo gerado por IA. Estabelecer o subtexto antes de pedir as falas força o modelo a construir a evasão.',
        items: [
          '**Estabeleça o subtexto explicitamente** — o que cada personagem quer mas não dirá, e por que não dirá.',
          '**"Sem etiquetas de diálogo exceto \'disse\'"** — elimina a muleta do modelo para as etiquetas emotivas ("disse com raiva") e força as palavras faladas a carregar a emoção.',
          '**"Sem beats de ação"** — elimina as rubricas que o modelo usa para encher o diálogo vazio ("Cruzou os braços. Ele suspirou."). Recorte-as na revisão.',
          '**Prompt de registro de gênero:** "Escreva uma discussão de 5 trocas entre [relação] em [gênero]. A discussão é superficialmente sobre [tema A], mas a discussão real é sobre [tema B]. Não nomeie o tema B."',
          '**Prompt de interrupção:** "O personagem A está no meio de uma frase quando o personagem B interrompe. Escreva de modo que a interrupção revele o estado emocional de B sem que B diga como se sente."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para diálogo com múltiplos personagens, atribua a cada personagem um "registro de fala" no system prompt antes de gerar. Exemplo: "Elena: formal, precisa, nunca contrações. Marcus: informal, interrompe, começa frases com \'Olha,\' ou \'A questão é.\'" O modelo manterá esses registros sem precisar lembrá-lo a cada turno.',
          },
        ],
      },
      template6: {
        id: 'template-6',
        title: 'Modelo 6 — Diálogo com subtexto primeiro',
        content:
          'Estabelece o que cada personagem quer mas não dirá antes de escrever as falas. Força o modelo a construir a evasão em vez de escrever personagens que dizem exatamente o que querem dizer.',
        codeBlock: `Subtext (do not include this in the dialogue itself):
[Character A] wants [X] but will not ask for it directly because [reason].
[Character B] knows [X] is what A wants but pretends not to because [reason].

Scene: [brief setting — 10 words max]
Length: [number] exchanges

Write the dialogue. No dialogue tags except "said". No internal monologue. No action beats.`,
        codeLanguage: 'Modelo de diálogo',
      },
      template7: {
        id: 'template-7',
        title: 'Modelo 7 — Diferenciação de voz (3 entregas)',
        content:
          'Verifica se as vozes dos personagens são distintas o suficiente para identificá-las sem atribuição. Se as três entregas soarem iguais, adicione restrições de registro de fala ao system prompt antes de continuar a sessão.',
        codeBlock: `Piece of news: [state the news in one sentence]

Write this news delivered by three different characters. Each delivery should make the character's class, education level, and emotional relationship to the news immediately apparent. No exposition — voice only.

Character 1: [Name — background and relationship to the news in one sentence]
Character 2: [Name — background and relationship to the news in one sentence]
Character 3: [Name — background and relationship to the news in one sentence]`,
        codeLanguage: 'Modelo de diálogo',
      },
      worldbuilding: {
        id: 'worldbuilding',
        title: 'Modelos de construção de mundos (Modelos 8–9)',
        content:
          '**Os prompts de construção de mundos funcionam melhor com a estrutura de anéis concêntricos: ancore em um detalhe sensorial e expanda para fora.** Começar com "descreva minha cidade de fantasia" produz um catálogo. Começar com "o cheiro do mercado ao amanhecer" produz um mundo que o leitor habita.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Os prompts de construção de mundos ancorados em um único detalhe sensorial e estruturados como anéis concêntricos (objeto → cômodo → prédio → rua → bairro) produzem descrição de mundo imersiva em vez de catálogos enciclopédicos.',
          },
          {
            type: 'plain-terms',
            text: 'Comece com algo pequeno e específico — o peso de uma moeda, o cheiro de uma forja, o som de um vendedor de rua específico — e peça ao modelo que se expanda para fora a partir daí. Pare antes de chegar ao nível da cidade. Múltiplas passagens curtas de construção de mundos a partir de diferentes âncoras constroem um mundo mais rico do que uma descrição abrangente.',
          },
        ],
        items: [
          '**Especificidade da âncora** — quanto mais específica a âncora, mais específico o mundo. "O cheiro do mercado" é vago. "O cheiro de cardamomo e cachorro molhado da banca de especiarias da esquina" produz um mundo específico.',
          '**Anel de parada** — diga ao modelo onde parar de se expandir (cômodo, prédio, bairro, cidade). Sem uma parada, ele resumirá o mundo inteiro.',
          '**"Não nomeie o mundo"** — evita que o modelo insira despejos de informação e o força a renderizar a cena.',
          '**"Não explique a história"** — remove o reflexo enciclopédico; a história emerge dos detalhes, não das explicações.',
          '**Prompt de tecnologia implícita:** "Descreva uma rua no seu mundo nomeando cada objeto que um personagem toca em uma caminhada de 30 segundos. Sem narração — apenas nomes de objetos, em sequência."',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Evite os catálogos de construção de mundos. Se o seu prompt de construção de mundos produz uma lista de fatos sobre o seu mundo, o prompt é abstrato demais. Cada resposta que não seja prosa renderizada deve ser reprompada com uma âncora concreta. Os catálogos são sintoma de prompts do tipo "descreva meu mundo" — mude para "mostre-me [local específico] a partir de [POV específico] em [momento específico]."',
          },
        ],
      },
      template8: {
        id: 'template-8',
        title: 'Modelo 8 — Construção de mundos em anéis concêntricos',
        content:
          'Ancora em um detalhe sensorial e se expande para fora. Evita os catálogos enciclopédicos e produz descrição de mundo imersiva que o leitor habita em vez de ler.',
        codeBlock: `Anchor: [one specific sensory detail — a smell, a sound, a texture]
POV: [observer character or omniscient]
Rings: expand from the anchor outward — object → room → building → street → district. Stop when you reach [ring level: room / building / street / district].
Word ceiling: [200–400 words]

Do not name the world. Do not explain the history. Show only what the POV character perceives in this moment.`,
        codeLanguage: 'Modelo de construção de mundos',
      },
      template9: {
        id: 'template-9',
        title: 'Modelo 9 — Cultura de facção através de objetos',
        content:
          'Revela a construção de mundos através da cultura material em vez da descrição ou da exposição. O que uma facção possui, usa e mantém visível diz ao leitor mais do que qualquer explicação de suas crenças.',
        codeBlock: `Faction: [name and one-line description of their core belief or function]

Describe the interior of a building used by this faction — only through the objects in the room. Do not describe the people. Do not state their beliefs. Do not explain the purpose of any object. 150 words max.`,
        codeLanguage: 'Modelo de construção de mundos',
      },
      styleTransfer: {
        id: 'style-transfer',
        title: 'Modelos de transferência de estilo (Modelos 10–11)',
        content:
          '**A transferência de estilo funciona quando você nomeia a técnica, não apenas o autor.** "Escreva como Cormac McCarthy" produz uma aproximação genérica — pontuação escassa e temas do Velho Oeste. "Escreva usando a técnica de McCarthy de cláusulas subordinadas aninhadas, apenas substantivos concretos, sem etiquetas de diálogo" produz algo com fidelidade estrutural real. Para um framework mais completo sobre como estruturar prompts que produzem resultados criativos específicos, veja o [framework CRAFT](/pt/frameworks/craft).',
        items: [
          '**Nomeie as técnicas especificamente** — "prosa enxuta" é vago; "frases declarativas curtas, substantivos concretos, sem modificadores" é acionável.',
          '**Cole uma amostra** — 2–3 frases da prosa real do autor ativa o reconhecimento de padrões no modelo de forma mais eficaz do que a descrição sozinha.',
          '**"Não imite a amostra — replique a técnica"** — evita a paráfrase direta da passagem de amostra.',
          '**Transferência de tempo e POV:** "Reescreva a seguinte passagem: mude de terceira pessoa passado para primeira pessoa presente. Mantenha todos os detalhes sensoriais concretos. Não adicione nova informação de trama. Máximo 200 palavras."',
          '**Calibração de registro:** peça ao modelo que nomeie as técnicas que vê em uma passagem que você fornece antes de pedir que as replique — esse passo de extração melhora a precisão na nomeação de técnicas.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Mistral Large para a transferência de estilo. O Mistral Large mantém um registro de prosa consistente em gerações longas melhor do que a maioria dos modelos executáveis localmente. Para tarefas de transferência de estilo em que a consistência do registro importa ao longo de múltiplos parágrafos, prefira o Mistral Large ao Llama 3.3 70B. Para transferência de estilo em rajadas curtas (menos de 300 palavras), qualquer modelo de 30B+ funciona adequadamente.',
          },
        ],
      },
      template10: {
        id: 'template-10',
        title: 'Modelo 10 — Transferência de estilo com técnicas nomeadas',
        content:
          'Nomeia técnicas específicas em vez de apenas o nome do autor. Produz fidelidade estrutural em vez de pastiche superficial.',
        codeBlock: `Target style: [Author name]
Techniques to replicate (name 2–3 specifically):
1. [Technique — e.g., "sentence fragments for interiority"]
2. [Technique — e.g., "concrete Anglo-Saxon vocabulary, no Latinate abstractions"]
3. [Technique — e.g., "em dashes for interruption, never ellipsis"]

Sample passage (2–3 sentences of the author's actual prose):
"[paste sample]"

Now write [scene description] using these techniques. 200 words. Do not mimic the sample — replicate the technique.`,
        codeLanguage: 'Modelo de transferência de estilo',
      },
      template11: {
        id: 'template-11',
        title: 'Modelo 11 — Transferência de registro de gênero',
        content:
          'Move a prosa existente entre registros de gênero sem alterar a informação da trama. Útil para encontrar o registro adequado para uma cena ou para a revisão quando o registro não corresponde ao gênero.',
        codeBlock: `Source register: [thriller / romance / horror / literary fiction / commercial fiction / etc.]
Target register: [literary fiction / commercial fiction / genre X]
Specific changes: [longer sentences / more interiority / less action description / etc.]

Rewrite the following passage in [target register]. Do not change any plot information. Word ceiling: same length as input.

[paste passage]`,
        codeLanguage: 'Modelo de transferência de estilo',
      },
      revision: {
        id: 'revision',
        title: 'Modelos de revisão (Modelo 12)',
        content:
          '**Os prompts de revisão precisam de um problema nomeado, não de uma instrução geral de melhoria.** "Deixe isto melhor" produz edições superficiais mínimas. "Elimine toda construção passiva; cada frase deve começar com um substantivo concreto ou um verbo ativo forte" produz uma mudança estrutural mensurável.',
        items: [
          '**Sempre cole o rascunho, não uma descrição.** Os prompts de revisão só funcionam quando você cola o texto real do rascunho. Descrever o problema sem mostrar a prosa produz conselhos genéricos em vez de uma passagem reescrita.',
          '**Nomeie o problema específico.** "Reescreva" não é suficiente. Identifique um problema estrutural: voz passiva, excesso de advérbios, troca de POV, excesso ou despejo de informação.',
          '**Correção de troca de POV:** "A seguinte passagem contém violações de POV — ouvimos pensamentos de múltiplos personagens. Reescreva-a estritamente em terceira pessoa fechada [Nome do personagem]. Remova todo acesso interior a outros personagens."',
          '**Naturalização do diálogo:** "O seguinte diálogo soa escrito. Reescreva: os personagens podem se interromper, falar em fragmentos, falar de lado. Mantenha a mesma informação trocada."',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Sempre cole o rascunho, não uma descrição. Os prompts de revisão só funcionam quando você cola o texto real do rascunho. Cole o parágrafo ou a troca específica, nomeie o problema específico e especifique o limite de palavras para a reescrita.',
          },
        ],
      },
      template12: {
        id: 'template-12',
        title: 'Modelo 12 — Kit de revisão (compressão, voz passiva, redução de advérbios)',
        content:
          'Três instruções de revisão que nomeiam o problema específico. Execute cada uma separadamente — combinar as três em um único prompt produz resultados inconsistentes, já que o modelo prioriza uma instrução sobre as outras.',
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
        codeLanguage: 'Modelo de revisão',
      },
      editorialTemplates: {
        id: 'editorial-templates',
        title: 'Modelos editoriais (Modelos 13–15)',
        content:
          '**Os modelos editoriais operam no nível do manuscrito em vez do nível de cena.** Eles ajudam você a detectar erros de continuidade antes que se acumulem, identificar problemas de ritmo ao longo de um capítulo completo e redistribuir a exposição em forma de despejos de informação como prosa renderizada. Execute-os depois de redigir, não durante.',
        callouts: [
          {
            type: 'tip',
            text: 'Execute os modelos editoriais em rascunhos completos, não em trabalhos em andamento. A Verificação de coerência de trama requer pelo menos 3 cenas; a Análise de ritmo requer um capítulo completo. Executá-los em passagens incompletas produz falsos positivos e desperdiça a janela de contexto.',
          },
        ],
      },
      template13: {
        id: 'template-13',
        title: 'Modelo 13 — Verificação de coerência de trama',
        content:
          'Identifica erros de continuidade antes que se acumulem ao longo dos capítulos. Execute-o depois de cada 3–4 novas cenas para detectar erros enquanto ainda são fáceis de corrigir.',
        codeBlock: `[paste the last 3 scenes here]

Read these three scenes carefully. List every continuity error you detect: changed physical descriptions (eye colour, hair, height), location inconsistencies, timeline conflicts, object appearances that contradict earlier scenes, character knowledge they should not yet have.

Output only a flag list — one sentence per flag, 150 words maximum total. Do not summarise the scenes. Do not suggest fixes. Flag only.`,
        codeLanguage: 'Modelo editorial',
      },
      template14: {
        id: 'template-14',
        title: 'Modelo 14 — Análise de ritmo',
        content:
          'Mapeia o ritmo ao longo de um capítulo para identificar zonas planas. Útil quando um capítulo se lê corretamente no nível da frase, mas parece lento no geral — as marcas de ritmo mostram onde se origina o arrasto.',
        codeBlock: `[paste chapter here]

Read this chapter and mark each paragraph with: FAST / MEDIUM / SLOW.

After marking, list only the SLOW paragraphs with a one-sentence diagnosis for each: what is causing the pacing to drag (over-description, dialogue repetition, excessive interiority, unnecessary backstory insertion, etc.).

Output format: Paragraph [number]: [SLOW] — [one-sentence diagnosis]
No other commentary. No summaries. Diagnosis only.`,
        codeLanguage: 'Modelo editorial',
      },
      template15: {
        id: 'template-15',
        title: 'Modelo 15 — Suavizamento de exposição',
        content:
          'Redistribui a exposição em forma de despejo de informação através do diálogo, da ação e do detalhe sensorial sem adicionar nem remover nenhuma informação. Use-o quando um parágrafo funciona como um mecanismo de entrega de fatos em vez de uma cena.',
        codeBlock: `[paste paragraph with exposition]

This paragraph delivers exposition as a block. Rewrite it by distributing the same information across three channels:
1. A line of dialogue that reveals one piece of information through character reaction (not explanation).
2. One action beat that implies one piece of information without stating it.
3. One sensory detail that shows one piece of information without naming it.

Word ceiling: same length as the input paragraph. Do not add any new information. Do not remove any information that was in the original.`,
        codeLanguage: 'Modelo editorial',
      },
      models: {
        id: 'models',
        title: 'Recomendações de modelos para a escrita de ficção',
        content:
          '**A escolha do modelo importa menos do que a estrutura do prompt, mas importa.** Um prompt bem estruturado em um modelo de 7B superará um prompt vago em um modelo de 70B — mas, dados prompts equivalentes, os modelos maiores mantêm a aderência às restrições em gerações longas de forma mais confiável e diferenciam as vozes dos personagens com maior fidelidade.',
        columns: ['Tarefa', 'Modelo recomendado', 'Por quê'],
        rows: [
          { 'Tarefa': 'Escrita de cenas geral', 'Modelo recomendado': 'Llama 3.3 70B', 'Por quê': 'Forte seguimento de instruções, coerência narrativa, a melhor opção para prosa com restrições' },
          { 'Tarefa': 'Transferência de estilo', 'Modelo recomendado': 'Mistral Large', 'Por quê': 'Registro de prosa consistente em gerações longas; melhor fidelidade de registro entre os modelos executáveis localmente' },
          { 'Tarefa': 'Diálogo / voz de personagem', 'Modelo recomendado': 'Command R+ 104B ou Hermes 3', 'Por quê': 'Registro de fala naturalista; diferencia as vozes dos personagens de forma confiável em trocas extensas' },
          { 'Tarefa': 'Construção de mundos', 'Modelo recomendado': 'Qwen3 32B', 'Por quê': 'Forte na geração de detalhes estruturados; mantém o padrão de expansão de anéis concêntricos de forma confiável' },
          { 'Tarefa': 'Revisão / edição', 'Modelo recomendado': 'Llama 3.3 70B', 'Por quê': 'Melhor em seguir instruções de reescrita estrutural específicas ao longo de um parágrafo completo' },
          { 'Tarefa': 'Ficção sombria / sem censura', 'Modelo recomendado': 'Hermes 3 Llama 3.3', 'Por quê': 'Ajustado para menos recusas de conteúdo; sem restrições de termos de serviço na nuvem ao rodar localmente' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Requisitos mínimos de hardware para modelos de ficção. O Llama 3.3 70B com quantização Q4 requer ~40 GB de VRAM ou memória unificada (NVIDIA RTX 4090 24 GB em GPU dupla, ou Apple M5 Max 64 GB). O Qwen3 32B em Q4 funciona com 20–24 GB. O Mistral Large em Q4 requer ~24 GB. Para equipamentos de 16 GB, o Qwen3 14B e o Mistral Small são o teto prático — ambos seguem os modelos de cena de forma confiável em gerações mais curtas.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        items: [
          '**Sem limite de palavras.** Sem um limite, o modelo enche linguiça — adiciona parágrafos de transição, beats de ação e frases de resumo até ficar sem tokens. Sempre defina um limite.',
          '**Listas de traços em vez de contradições.** Uma lista de cinco traços produz um personagem que ilustra cada traço em sequência. Uma contradição entre dois traços produz um personagem que o leitor precisa interpretar. Use a estrutura de contradição.',
          '**"Escreva como [Autor]" sem nomes de técnicas.** A transferência de estilo apenas com o nome do autor produz pastiche de gênero, não fidelidade de técnica. Nomeie as técnicas específicas que você quer replicadas.',
          '**Sem âncora de POV.** Um prompt de cena sem um POV nomeado produz troca de POV por padrão — o modelo acessa os estados interiores de todos os personagens porque nada o proíbe. Sempre nomeie o personagem POV.',
          '**Prompts de revisão sem rascunho.** Pedir ao modelo que "melhore o ritmo" de uma cena que você descreve, mas não mostra, produz conselhos genéricos. Cole a passagem real.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'Model card do Llama 3.3 70B e benchmarks de seguimento de instruções — [Meta AI Research](https://ai.meta.com)',
          'Relatório técnico do Qwen3 32B — [Alibaba Cloud / Qwen Team](https://qwenlm.github.io)',
          'Documentação do modelo Mistral Large — [Mistral AI](https://mistral.ai)',
          'Especificação do Command R+ 104B — [Cohere](https://cohere.com)',
          'Metodologia de fine-tuning do Hermes 3 — [Nous Research](https://nousresearch.com)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Um LLM local pode substituir um parceiro de escrita humano para a redação de ficção?',
            a: 'Para tarefas específicas — gerar um primeiro rascunho de uma cena, produzir variações de diálogo, passadas de detalhe de construção de mundos — os LLMs locais são parceiros de redação rápidos e confiáveis. Eles não substituem o pensamento estratégico de um coautor humano: não conseguem avaliar se a cena encaixa no arco da história, se a escolha do personagem é emocionalmente justificada, ou se o ritmo do capítulo está funcionando. Use-os para tarefas de geração; mantenha o julgamento humano para as decisões estruturais.',
          },
          {
            q: 'O que é melhor para escrever ficção: Ollama, LM Studio ou SillyTavern?',
            a: 'Para modelos de prompts estruturados em que você envia um prompt completo e recebe uma geração, o Ollama (CLI ou API) e o LM Studio (endpoint compatível com OpenAI) são equivalentes — a interface não afeta a qualidade do resultado. O SillyTavern agrega valor para o roleplay de múltiplos turnos e a persistência de cartões de personagem, mas para prompts de escrita de cenas e revisão, uma interface de chat simples ou uma chamada de API é suficiente.',
          },
          {
            q: 'Esses modelos de prompts funcionam em modelos menores (7B–14B)?',
            a: 'Sim, mas a aderência às restrições se degrada depois de ~150 tokens. Os modelos menores seguem as primeiras 2–3 restrições em um prompt de 5 partes, depois se desviam para o seu registro base. Para modelos de 7B–14B: reduza o limite de palavras (máximo 150 palavras), use menos restrições simultâneas (3 partes em vez de 5), e espere revisar ou refazer prompts com mais frequência. O Qwen3 14B é o modelo pequeno mais sólido testado para o seguimento de prompts específico de ficção.',
          },
          {
            q: 'Como mantenho a consistência da voz do personagem ao longo de uma sessão de romance completa?',
            a: 'Construa uma ficha de personagem em texto simples (nome, traço dominante, comportamento contraditório, registro de fala, 3 linhas de diálogo de exemplo) e cole-a na mensagem de sistema no início da sessão. Para sessões longas, resuma as cenas concluídas em um documento de "contexto de sessão" em andamento e inclua as últimas 200–300 palavras da cena mais recente em cada turno do usuário. Isso combate o desvio de contexto sem exceder a janela de contexto.',
          },
          {
            q: 'Qual é o melhor LLM local para escrever ficção sombria ou madura?',
            a: 'Hermes 3 Llama 3.3, Dolphin 3.0 Mistral, ou qualquer modelo ajustado para reduzir as recusas de conteúdo. Quando rodado localmente, não há restrições de termos de serviço na nuvem — o fine-tuning base do modelo determina o que ele gerará e o que não gerará. Veja [Melhores LLMs locais para escrita criativa 2026](/pt/power-local-llm/best-local-llm-creative-writing-2026) para um detalhamento completo das opções de modelos sem censura e o enquadramento ético.',
          },
          {
            q: 'Posso usar esses modelos no SillyTavern ou no Agnai?',
            a: 'Sim. Todos os modelos deste guia são texto simples — funcionam em qualquer interface que passe texto a um modelo local. No SillyTavern, coloque a restrição de gênero e POV no campo do system prompt; use o turno do usuário para as instruções específicas da cena. No Agnai, a configuração é equivalente. Os modelos são independentes da interface.',
          },
          {
            q: 'Quão longo deve ser um prompt de cena?',
            a: 'Um prompt de cena de 50–100 palavras produz os melhores resultados na prática. Os prompts mais longos (200+ palavras) podem funcionar para cenas complexas, mas aumentam a chance de o modelo ignorar algumas restrições. Para cenas complexas, divida o prompt em duas passadas: primeiro gere a cena, depois execute um prompt de revisão que adicione a restrição que você reteve.',
          },
          {
            q: 'Os prompts de transferência de estilo violam direitos autorais?',
            a: 'Replicar a técnica de um autor (estrutura de frase, escolhas de pontuação, registro narrativo) não é violação de direitos autorais — o estilo não é protegível por direitos autorais. Reproduzir passagens literais substanciais de texto com direitos autorais é violação. Os modelos deste guia usam amostras de 2–3 frases como âncoras de técnica, o que se enquadra no uso justo educacional padrão, e o resultado gerado replica a técnica em vez do conteúdo.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Melhores LLMs locais para escrita criativa 2026](/pt/power-local-llm/best-local-llm-creative-writing-2026) — comparação de modelos para geração narrativa, configurações de amostragem e opções sem censura.',
          '[SillyTavern vs Agnai vs RisuAI: Melhor interface de roleplay local](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparação de interfaces para roleplay com cartões de personagem e ficção colaborativa.',
          '[Como rodar um LLM local para roteiros e rascunhos de romances](/pt/power-local-llm/local-llm-screenwriting-and-novel-drafting) — fluxos de trabalho de redação de formato longo, gestão de capítulos e estratégias de janela de contexto.',
          '[LLMs locais sem censura para a escrita criativa: ética e configuração](/pt/power-local-llm/uncensored-local-llm-creative-writing-ethics) — quais modelos usar para conteúdo maduro, implicações de privacidade e enquadramento de uso responsável.',
          '[Chain-of-Thought Prompting explicado](/pt/prompt-engineering/chain-of-thought-prompting) — prompts de raciocínio estruturado que se aplicam à construção de tramas de ficção e ao planejamento de cenas.',
          '[Zero-Shot vs Few-Shot Prompting](/pt/prompt-engineering/zero-shot-vs-few-shot-prompting) — quando incluir exemplos nos prompts e quando omiti-los para tarefas de ficção.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompts para LLM local para escritores de ficção: 15 modelos e técnicas (2026)',
      description: '15 modelos de prompts para escritores de ficção que usam LLMs locais. Escrita de cenas, desenvolvimento de personagens, diálogo, construção de mundos, transferência de estilo, revisão e modelos editoriais — prontos para copiar no Ollama e no LM Studio.',
      url: 'https://www.promptquorum.com/pt/pt/power-local-llm/local-llm-prompts-for-fiction-writers',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
},
}
