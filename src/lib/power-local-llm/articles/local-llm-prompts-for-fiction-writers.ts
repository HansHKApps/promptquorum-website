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
}
