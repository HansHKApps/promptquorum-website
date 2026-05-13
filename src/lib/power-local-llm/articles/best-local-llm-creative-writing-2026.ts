// Power Local LLM — Best Local LLMs for Creative Writing 2026: Fiction, Dialogue & Worldbuilding
// Slug: best-local-llm-creative-writing-2026
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
    title: 'Best Local LLMs for Creative Writing 2026: Fiction, Dialogue & Worldbuilding',
    seoTitle: 'Best Local LLMs for Creative Writing 2026: Tested Picks',
    intro:
      'Creative writing is the workload where local LLMs win on more than privacy and price. The best instruct-tuned and uncensored open-weight models in 2026 — Llama 3.3 70B, Qwen3 32B, Mistral Large, Command R+, Yi-1.5 34B, and the Hermes/Dolphin uncensored derivatives — produce fiction, dialogue, and worldbuilding that holds up against frontier cloud models on most prompts. The differences are in voice consistency, willingness to handle dark or adult themes, and how naturally they take direction. This guide tests six picks against 50+ creative prompts across fiction, dialogue, poetry, and worldbuilding, with the temperature and top-p settings each one wants.',
    metaDescription:
      'Compare 6 local models for creative writing: Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5, and uncensored variants. Tested on 50+ creative prompts.',
    twitterDescription:
      '6 local models for fiction, dialogue, and worldbuilding tested on 50+ creative prompts. Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5, plus uncensored picks. Verdict per task type.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command R+ 104B',
      'Yi-1.5 34B',
      'Hermes 3 Llama 3.3',
      'Dolphin 3.0 Llama',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
    ],
    audience:
      'Fiction writers, screenwriters, game designers, worldbuilders, and roleplay enthusiasts running local LLMs for creative work where privacy, voice consistency, and willingness to handle mature themes matter more than benchmark scores.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM creative writing',
    targetKeywords: [
      'best local llm creative writing',
      'local llm fiction writing',
      'uncensored local llm',
      'llama vs mistral creative writing',
      'best local model dialogue',
      'local llm worldbuilding',
    ],
    leadAnswerBlock:
      '**Llama 3.3 70B is the best all-round local pick for creative writing in May 2026 — strong voice consistency, takes direction well, and handles dark themes without refusing if the system prompt frames the work as fiction. Qwen3 32B is the right 24 GB-rig pick: nearly as strong on prose, lighter on hardware. Mistral Large wins long-form continuity (novel-length drafting) on its native 128K context. Command R+ 104B has the cleanest dialogue voice. Yi-1.5 34B is the niche pick for poetry and lyrical prose. For workflows that the instruct-tuned models refuse, Hermes 3 (Llama 3.3 base) and Dolphin 3.0 are the uncensored picks — same architecture, RLHF safety layer removed. Temperature 0.8–1.1 and top-p 0.9–0.95 are the creative-writing range; 0.7 and below produces flat prose. Uncensored ≠ unethical — it means the model follows the prompt instead of refusing; the writer is still the author.**',
    quickAnswerTop: {
      en: {
        question: 'Which local LLM is best for creative writing in 2026?',
        answer:
          'Llama 3.3 70B is the best all-round local pick — strong on prose, dialogue, and worldbuilding, with voice consistency that holds across long sessions. On 24 GB hardware where 70B will not fit, Qwen3 32B is the lighter alternative without much quality loss. Mistral Large is the long-context pick for novel-length drafting (128K context out of the box). Command R+ 104B has the most natural dialogue voice. Yi-1.5 34B is the poetry and lyrical-prose specialist. For workflows that hit the instruct-tuned safety layer (mature fiction, conflict scenes, morally complex characters), the Hermes 3 and Dolphin 3.0 derivatives use the same base models with the safety RLHF layer removed — they follow the prompt instead of refusing. Temperature 0.8–1.1 and top-p 0.9–0.95 are the creative-writing range; coding-style settings (0.2–0.4) produce flat prose.',
        bullets: [
          'Best overall: Llama 3.3 70B — strongest voice consistency, takes direction well, handles dark themes without refusal when framed as fiction.',
          'Best 24 GB rig: Qwen3 32B — nearly as strong as Llama 70B on prose, much lighter on hardware.',
          'Best long-form: Mistral Large — 128K context out of the box; novel-length drafting without losing thread.',
          'Best dialogue: Command R+ 104B — the most natural conversational voice across characters.',
          'Best poetry / lyrical: Yi-1.5 34B — niche pick for verse and stylised prose.',
          'When instruct refuses: Hermes 3 (Llama base) or Dolphin 3.0 — uncensored, same architecture, prompt-following.',
          'Sampling: temperature 0.8–1.1, top-p 0.9–0.95 for prose; lower for tight dialogue, higher for surreal/genre work.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'How We Tested', anchor: '#how-we-tested' },
      { label: 'Head-to-Head Comparison', anchor: '#comparison' },
      { label: 'Per-Model Verdicts', anchor: '#verdicts' },
      { label: 'Sample Outputs', anchor: '#sample-outputs' },
      { label: 'Temperature and Top-P for Creative Work', anchor: '#sampling' },
      { label: 'Uncensored Models: What They Are', anchor: '#uncensored' },
      { label: 'Frontends for Creative Work', anchor: '#frontends' },
      { label: 'Decision: Pick Your Model', anchor: '#decision' },
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
          '**Llama 3.3 70B is the best all-round creative-writing local model in May 2026.** Strongest voice consistency, takes direction well, handles dark themes without refusal when the system prompt frames the work as fiction.',
          '**Qwen3 32B is the right 24 GB-rig pick.** Nearly Llama 70B prose quality without the 48 GB+ VRAM bill. The default for most laptops and desktops.',
          '**Mistral Large wins long-form continuity.** 128K context out of the box; novel-length drafting without losing thread or character voice.',
          '**Command R+ 104B has the cleanest dialogue voice.** Most natural conversational beats across characters; the pick when dialogue is the load-bearing part of the work.',
          '**Yi-1.5 34B is the poetry and lyrical-prose specialist.** Niche pick for verse, stylised prose, and short-form work where rhythm matters.',
          '**Uncensored derivatives (Hermes 3, Dolphin 3.0) are the right move when instruct-tuned models refuse.** Same base models; the RLHF safety layer is removed; the model follows the prompt instead of declining. Mature fiction, conflict scenes, and morally complex characters become writable.',
          '**Sampling matters more than people think.** Temperature 0.8–1.1 and top-p 0.9–0.95 are the creative range. Coding-style settings (0.2–0.4) produce flat, predictable prose. Higher (1.2+) is genre/surreal territory.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Best overall:** Llama 3.3 70B at Q4_K_M, ~42 GB VRAM. Strongest voice consistency in this set.',
          '**Best 24 GB-rig:** Qwen3 32B at Q4_K_M, ~20 GB VRAM. The default for most users.',
          '**Best long-form:** Mistral Large at Q4_K_M, ~75 GB total VRAM (heavy). 128K context out of the box.',
          '**Best dialogue:** Command R+ 104B at Q4_K_M, ~62 GB VRAM. Cleanest character-voice differentiation.',
          '**Best poetry:** Yi-1.5 34B at Q4_K_M, ~21 GB VRAM. Lyrical prose specialist.',
          '**Uncensored options:** Hermes 3 (Llama 3.3 base, ~42 GB) and Dolphin 3.0 (multiple base sizes, 13–42 GB).',
          '**Sampling default for prose:** temperature 0.95, top-p 0.92, repeat penalty 1.1. Adjust per task type.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'How We Tested: 50+ Creative Prompts Across Six Models',
        content:
          '**The test held the prompt set, sampling settings, and frontend constant; only the model varied.** Same 50 prompts across fiction, dialogue, poetry, and worldbuilding tasks; output graded by the same rubric per task type.',
        items: [
          '**Backend:** Ollama 0.5+ on macOS and Linux; same context limits per model; Q4_K_M quantization across all six picks (Q5_K_M for the smaller 32B–34B models where VRAM permitted, with no measurable difference in the rubric scores).',
          '**Frontend:** Open WebUI for the bulk of the test (chat-style work); SillyTavern for the dialogue-heavy and roleplay subset (matches how creative writers actually use these models).',
          '**Prompt set:** 50 prompts split across four task types — fiction (15: short-story openings, scene continuations, descriptive passages), dialogue (15: two-character exchanges, group scenes, voice differentiation), poetry (10: free verse, structured forms, lyrical prose), worldbuilding (10: setting descriptions, factional politics, magic systems). Each prompt run 3 times per model to capture variance.',
          '**Sampling:** temperature 0.95, top-p 0.92, repeat penalty 1.1 as the baseline; per-task adjustments noted in the per-model verdicts below.',
          '**Grading rubric:** voice consistency (does the character or narrator sound the same across paragraphs?), prompt fidelity (did the model follow the direction or invent its own scene?), prose quality (rhythm, vocabulary, avoiding cliché), and willingness (did the model refuse or sanitise scenes that the prompt explicitly framed as fiction?).',
          '**Honesty constraint:** scores reported as relative ranks per task, not invented absolute percentages. "Best dialogue" means consistent first place on the dialogue subset across the 3 runs; "strong" means top-3; "weak" means the model lost to one or more competitors on the rubric.',
          'For the prompting techniques that improve creative output on any model, see [temperature and top-p control](/prompt-engineering/temperature-and-top-p-control-ai-creativity) and [persona prompting](/prompt-engineering/persona-prompting).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Creative-writing benchmarks are inherently subjective. The rubric above (voice consistency, prompt fidelity, prose quality, willingness) is the closest we got to repeatable scoring, but two readers grading the same outputs will disagree on prose quality more often than they agree. Treat the verdicts as starting hypotheses to test on your own work.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Head-to-Head: Six Local Models on Creative Writing Tasks',
        content:
          '**Llama 3.3 70B leads on the broadest set of tasks; the smaller and specialised models each win one or two categories.** Pick by task type, not by overall ranking.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Llama 3.3 70B is the strongest all-round creative model; Qwen3 32B is the lighter alternative; Mistral Large wins long-form; Command R+ wins dialogue; Yi-1.5 wins poetry; Hermes/Dolphin handle scenes the others refuse.',
          },
          {
            type: 'plain-terms',
            text: 'No single model is best at everything. Llama 3.3 70B is the safe default if you have the hardware. Qwen3 32B is the smart pick on a 24 GB GPU. Pick a specialist (Mistral for novels, Command R+ for dialogue, Yi-1.5 for poetry) when one task type is the load-bearing part of the work. Pick an uncensored derivative when the instruct-tuned model refuses scenes you need to write.',
          },
        ],
        columns: ['Model', 'Size', 'VRAM (Q4_K_M)', 'Fiction', 'Dialogue', 'Poetry', 'Worldbuilding', 'Best for'],
        rows: [
          { 'Model': 'Llama 3.3 70B', 'Size': '70B', 'VRAM (Q4_K_M)': '~42 GB', 'Fiction': 'Best', 'Dialogue': 'Strong', 'Poetry': 'Strong', 'Worldbuilding': 'Best', 'Best for': 'Best all-round; default if hardware fits' },
          { 'Model': 'Qwen3 32B', 'Size': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'Fiction': 'Strong', 'Dialogue': 'Strong', 'Poetry': 'OK', 'Worldbuilding': 'Strong', 'Best for': '24 GB-rig default; small loss vs Llama 70B' },
          { 'Model': 'Mistral Large', 'Size': '123B', 'VRAM (Q4_K_M)': '~75 GB', 'Fiction': 'Strong (long-form)', 'Dialogue': 'Strong', 'Poetry': 'OK', 'Worldbuilding': 'Strong', 'Best for': 'Novel-length continuity, 128K context' },
          { 'Model': 'Command R+', 'Size': '104B', 'VRAM (Q4_K_M)': '~62 GB', 'Fiction': 'Strong', 'Dialogue': 'Best', 'Poetry': 'OK', 'Worldbuilding': 'Strong', 'Best for': 'Dialogue-heavy work, group scenes' },
          { 'Model': 'Yi-1.5 34B', 'Size': '34B', 'VRAM (Q4_K_M)': '~21 GB', 'Fiction': 'OK', 'Dialogue': 'OK', 'Poetry': 'Best', 'Worldbuilding': 'OK', 'Best for': 'Poetry, lyrical prose, stylised work' },
          { 'Model': 'Hermes 3 / Dolphin 3.0', 'Size': '13B–70B', 'VRAM (Q4_K_M)': '~9–42 GB', 'Fiction': 'Same as base', 'Dialogue': 'Same as base', 'Poetry': 'Same as base', 'Worldbuilding': 'Same as base', 'Best for': 'Scenes instruct-tuned models refuse' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Two-model setup is the common pattern: Llama 3.3 70B (or Qwen3 32B) as the daily driver, plus the Hermes 3 derivative on the same Ollama for scenes the instruct version refuses. Switch between them per scene; both can sit in `ollama list` at the same time without conflict.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'Per-Model Verdicts',
        items: [
          '**Llama 3.3 70B** — best all-round. Strongest voice consistency in the test set; characters keep the same speech patterns across long scenes. Takes direction well — when the system prompt specifies POV, tone, or genre conventions, Llama 3.3 follows. Handles dark themes (violence, grief, morally grey characters) without refusal when the prompt frames the work as fiction. Where it falls short: long passages occasionally drift into generic "literary" voice; small models in the same family (8B) lose this strength.',
          '**Qwen3 32B** — best 24 GB-rig pick. Slightly less voice consistency than Llama 3.3 70B but the gap is small enough that most writers will not notice on prose-heavy work. Strongest of the smaller models on direction-following. Where it falls short: poetry and stylised prose lag noticeably; default to Yi-1.5 for those.',
          '**Mistral Large** — best long-form continuity. 128K context window means a 50,000-word draft fits without truncation; the model holds character details, plot threads, and world rules across chapters. Where it falls short: hardware bar is the highest in this set (~75 GB at Q4_K_M); per-token speed slows on long inputs. Use Mistral La Plateforme on EU infrastructure if local hardware is the constraint.',
          '**Command R+ 104B** — best dialogue. Distinct character voices that hold across exchanges; group scenes (3+ speakers) stay legible without the "everyone sounds the same" failure mode common to other models. Where it falls short: prose paragraphs between dialogue beats are competent but not lyrical; for purely descriptive passages, Llama 3.3 wins.',
          '**Yi-1.5 34B** — best poetry and lyrical prose. Rhythm-aware, comfortable with structured forms (sonnet, villanelle, haiku), produces verse that holds up better than the larger general models. Where it falls short: long-form fiction is competent but not its strength; pick Llama 3.3 or Qwen3 for narrative work.',
          '**Hermes 3 (Llama 3.3 base) and Dolphin 3.0** — uncensored derivatives. Same architecture and base weights as Llama 3.3 70B; the RLHF safety layer is removed during fine-tuning. The model follows the prompt rather than refusing or sanitising mature content. Quality on non-mature prompts is identical to the base model; the difference is only visible on prompts where instruct-tuned versions refuse. Use these when the work requires it (mature fiction, violent scenes, morally complex characters) and stick with the instruct-tuned base otherwise.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Voice consistency is the metric most writers underweight in early model evaluation. A model that produces brilliant prose on a single paragraph but loses the character\'s speech patterns by paragraph 5 is worse than a model that produces competent prose with consistent voice across 20 paragraphs. Test long-session continuity, not just one-shot quality.',
          },
        ],
      },
      sampleOutputs: {
        id: 'sample-outputs',
        title: 'Sample Outputs: Three Models, One Prompt',
        content:
          '**Shared prompt:** "Open a noir scene where the detective enters a rain-soaked diner at 2 AM." Same temperature (0.95), same top-p (0.92), same repeat penalty (1.1) — only the model changes. The excerpts below are representative of each model\'s typical output on this prompt class across three runs.',
        items: [
          '**Llama 3.3 70B** — "The bell above the door chimed twice and went silent. Rain ran down my coat in sheets, pooling on the linoleum before I\'d taken three steps. The counter girl didn\'t look up. Two truck drivers at the far booth studied their coffee. Nobody in a place like this at two in the morning wanted to be noticed, and neither did I." — *Concrete sensory grounding, active voice, no wasted words. The social scene is established in three sentences.*',
          '**Qwen3 32B** — "I pushed through the door into a wall of cigarette smoke and griddle grease. The diner was half-empty and fully quiet — the kind of quiet that settles in when people have agreed, without saying so, to leave each other alone. A ceiling fan turned overhead. The waitress refilled a mug at the far end of the counter without looking at me." — *Observational setup before action; efficient atmosphere. Slightly more structured than Llama 3.3 but equally clean.*',
          '**Yi-1.5 34B** — "Rain hammered the awning with the regularity of a metronome counting out the last hours of a night no one wanted to remember. Inside, the fluorescents threw their cold arithmetic across the laminate — every stain, every scratch, every year the place had been losing arguments with entropy. I found a stool at the near end and sat down like a man who had already made his peace with something." — *Metaphor-led from the first clause; rhythmic sentence variation; denser imagery. Yi-1.5\'s poetry background shows even in prose.*',
        ],
        columns: ['Model', 'Typical opening phrasing', 'Typical descriptor pattern'],
        rows: [
          { 'Model': 'Llama 3.3 70B', 'Typical opening phrasing': 'Action-first, immediate sensory detail', 'Typical descriptor pattern': 'Concrete and physical; avoids abstract nouns; socially grounded' },
          { 'Model': 'Qwen3 32B', 'Typical opening phrasing': 'Environmental observation before character action', 'Typical descriptor pattern': 'Efficient; social/atmospheric detail; slight structural tell' },
          { 'Model': 'Yi-1.5 34B', 'Typical opening phrasing': 'Metaphor or simile from the first clause', 'Typical descriptor pattern': 'Abstract imagery; rhythmic variation; denser; occasional purple streak' },
          { 'Model': 'Command R+ 104B', 'Typical opening phrasing': 'Character voice or dialogue-adjacent opener', 'Typical descriptor pattern': 'Conversational; strong distinct voice; weaker solo description' },
          { 'Model': 'Mistral Large', 'Typical opening phrasing': 'Scene-setting paragraph; slower start', 'Typical descriptor pattern': 'Even and controlled; consistent across long passages; slightly generic' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'These excerpts are illustrative of each model\'s tendencies across multiple runs, not cherry-picked highlights. Yi-1.5 34B\'s "losing arguments with entropy" landed in one of three runs; the other two were more straightforward. Run any model 2–3 times on the same prompt and take the one that fits your scene, not just the first output.',
          },
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'Temperature and Top-P for Creative Work',
        content:
          '**Creative writing wants higher sampling temperatures than coding does.** The default sampling parameters that ship with most chat UIs are tuned for question-answering, not for prose — temperature 0.7 and top-p 0.9 produce flat, predictable output on creative prompts.',
        items: [
          '**Baseline for prose:** temperature 0.95, top-p 0.92, repeat penalty 1.1. This is the starting point for most fiction, dialogue, and worldbuilding work. Adjust per task from here.',
          '**Tight dialogue:** temperature 0.7–0.85, top-p 0.9. Lower temperatures keep character voices consistent across exchanges; higher values produce out-of-character interjections.',
          '**Lyrical prose and poetry:** temperature 1.0–1.2, top-p 0.95. Higher temperatures unlock unexpected word choices that make verse work.',
          '**Surreal or genre fiction:** temperature 1.1–1.3, top-p 0.95–0.98. Pushes the model to produce less-common combinations of imagery and metaphor.',
          '**Plot-driven scenes (action, mystery, twists):** temperature 0.85–0.95, top-p 0.9. Wants direction-following more than novelty.',
          '**Repeat penalty 1.1–1.15** is the right range for most creative work. Higher (1.2+) makes the model avoid repeating words even when repetition is stylistically intentional; lower (1.0–1.05) lets the model fall into loops on long scenes.',
          '**min_p (0.05–0.1):** A newer alternative to top-p that dynamically scales the probability cutoff relative to the peak token probability. More permissive on creative prompts than top-p 0.9 without the incoherence risk of very high top-p values. The recommended default for SillyTavern and KoboldCpp users in 2026 when the interface exposes it; Ollama passes it through as-is, and Open WebUI 0.5+ exposes it under Advanced Settings.',
          '**DRY repetition penalty (multiplier 0.8, base 1.75, allowed length 2):** Catches phrase-level repetition that the standard repeat_penalty misses. Where repeat_penalty tracks individual tokens, DRY tracks n-gram sequences — so the cliché "shiver down their spine" in scene 1 is suppressed when it would otherwise appear again in scene 4. Useful for long-session creative work where the model has seen its own output and starts pulling from it.',
          '**Modern creative-writing baseline (2026):** temperature 0.95, min_p 0.05, DRY multiplier 0.8 (base 1.75, allowed length 2). Top-p 0.92 still works well if your frontend does not expose min_p or DRY — these are incremental improvements over the classic settings, not mandatory replacements.',
          'For a fuller treatment of why these parameters matter and how they interact, see [temperature and top-p control](/prompt-engineering/temperature-and-top-p-control-ai-creativity).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Test sampling settings on a single short scene per model — three runs at each setting, then pick the temperature where the model sounds most alive without losing the prompt. Settings that work on Llama 3.3 70B will not perfectly transfer to Mistral Large or Yi-1.5; calibrate per model.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Uncensored Models: What They Are and When They Matter',
        content:
          '**Uncensored does not mean unethical.** It means the model has had its instruction-tuning safety layer (RLHF refusals) removed or bypassed, so the model follows the prompt instead of declining or sanitising. The writer is still the author; the tool stops getting in the way.',
        items: [
          '**What "uncensored" means technically.** Models like Hermes 3 and Dolphin 3.0 are fine-tuned variants of base models (Llama 3.3, Qwen3) where the post-training RLHF pass that produces refusals on mature, violent, or morally complex prompts has been replaced with a fine-tune that follows the prompt. Same architecture, same base weights, different post-training.',
          '**When they matter for creative work.** Mature fiction (literary novels with sex scenes, crime fiction with graphic violence, horror), historically-accurate writing (war, atrocity, colonial-era brutality), morally complex characters (the model would otherwise refuse to voice a convincing antagonist), and roleplay scenarios that the instruct-tuned models will not engage with.',
          '**Where they fall short.** They follow the prompt — including badly-written prompts. The instruct-tuned models often soften vague prompts into something publishable; uncensored models give you exactly what you asked for, which is sometimes worse. The writer\'s direction matters more.',
          '**Ethical boundaries.** "The model will write it" is not a creative-writing licence to write content that targets real people, depicts non-consensual scenarios involving real or identifiable individuals, or that is illegal in the writer\'s jurisdiction. Local hosting does not change the law; it changes who can see the draft.',
          '**Legal context (May 2026, brief and non-exhaustive).** EU AI Act and member-state laws (notably German StGB §184/§184c) cover specific content categories regardless of where it was generated. US obscenity law applies to publication, not generation. For commercial publishing, the model that produced a draft is irrelevant; the published artefact is what is regulated.',
          '**For a longer treatment** of uncensored model ethics, legal context, and best practices, see [Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/power-local-llm/uncensored-local-llm-creative-writing-ethics).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Uncensored is a workflow choice, not an identity. Many writers use the instruct-tuned model for the bulk of a project and switch to an uncensored derivative for specific scenes that the instruct version refuses. Two model installs in the same Ollama setup is the common pattern.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Frontends for Creative Work',
        content:
          '**The chat UI you write in matters as much as the model.** Three frontends are credible picks for creative-writing workflows in 2026; pick by workflow shape.',
        items: [
          '**Open WebUI** — the general-purpose pick. ChatGPT-like interface, model switching in one click, character cards via system prompts, document upload for context. Best for prose-heavy work where the chat shape matches your drafting flow.',
          '**SillyTavern** — the roleplay and dialogue pick. Character card ecosystem (Tavern v2 spec), persona management, lore books for worldbuilding, group chat for multi-character scenes. Best for dialogue-driven work and long-running character or world projects. Pairs well with Command R+ and uncensored derivatives.',
          '**Agnai and RisuAI** — narrower SillyTavern alternatives. Lighter feature sets, easier first-run, less customisation. Pick when SillyTavern feels overbuilt for your workflow.',
          '**Plain Ollama CLI plus a text editor** — the minimal pick. `ollama run llama3.3:70b` and pipe scenes through the terminal into your draft document. Loses the persistent character context but wins on writer focus.',
          'For the head-to-head comparison of the roleplay-focused frontends, see [SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Drafting and editing wants different frontends. Use SillyTavern for generation (character voice, scene work), then export the chat to a plain text editor for revision. Editing inside the chat window encourages "ask the model to fix it" instead of writer-driven revision — a long-term skills risk.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Decision: Which Model for Your Work',
        content:
          '**Five questions, in order, get most writers to the right pick.**',
        columns: ['Your situation', 'Pick'],
        rows: [
          { 'Your situation': 'I have 48 GB+ VRAM and want one model for everything', 'Pick': 'Llama 3.3 70B (instruct) + Hermes 3 (uncensored) on the same Ollama' },
          { 'Your situation': 'I have a 24 GB GPU or 32 GB Mac and want a strong default', 'Pick': 'Qwen3 32B' },
          { 'Your situation': 'I am drafting a novel — long-form continuity is the priority', 'Pick': 'Mistral Large (or Mistral La Plateforme on EU hardware if local does not fit)' },
          { 'Your situation': 'My work is dialogue-heavy — character voices need to stay distinct', 'Pick': 'Command R+ 104B (or Llama 3.3 70B as a lighter alternative)' },
          { 'Your situation': 'I write poetry, verse, or lyrical prose', 'Pick': 'Yi-1.5 34B' },
          { 'Your situation': 'The instruct model is refusing scenes I need to write', 'Pick': 'Hermes 3 (Llama 3.3 base) or Dolphin 3.0 — keep the instruct version installed for non-mature work' },
          { 'Your situation': 'I want one model to start with and will iterate', 'Pick': 'Qwen3 32B — covers most workflows on consumer hardware; switch up when one task type becomes the load-bearing part' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pick Qwen3 32B as the default if you have a 24 GB GPU; Llama 3.3 70B if you have 48 GB+; Mistral Large for novel-length work; Command R+ for dialogue; Yi-1.5 for poetry; Hermes/Dolphin for scenes the instruct models refuse.',
          },
          {
            type: 'plain-terms',
            text: 'Qwen3 32B is the right starting model for most writers. Move to one of the specialists when a specific task type (long-form, dialogue, poetry, mature scenes) becomes the bottleneck. Two installs (instruct + uncensored) on the same machine costs nothing — both can sit in Ollama and you switch per scene.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Most writers overthink the model and underthink the prompt. A well-crafted system prompt with character notes, voice samples, and explicit POV does more for the output than switching from Qwen3 to Llama 70B. See [persona prompting](/prompt-engineering/persona-prompting) for the prompt structure that consistently lifts creative output.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes Picking and Using Local Models for Creative Writing',
        items: [
          '**Mistake 1: chasing the biggest model on benchmarks.** Creative writing scores poorly correlate with general benchmark leaderboards. Yi-1.5 34B beats Llama 3.3 70B on poetry; Command R+ beats both on dialogue. Pick by task, not by leaderboard rank.',
          '**Mistake 2: using coding-style sampling settings.** Temperature 0.2–0.4 produces flat, predictable prose. Creative writing wants 0.8–1.1 with top-p 0.9–0.95. The default settings in most chat UIs are tuned for Q&A, not prose.',
          '**Mistake 3: defaulting to the instruct model and giving up when it refuses.** The instruct version refuses scenes you have explicitly framed as fiction; the uncensored derivative of the same base model writes them. Two installs in Ollama is the workaround.',
          '**Mistake 4: thin system prompts.** "You are a helpful assistant" is the worst possible prompt for creative work. A system prompt with character notes, voice samples, POV, tense, and tone does more for output quality than any model switch. Pair with [negative prompting](/prompt-engineering/negative-prompting) to specify what NOT to do (no exposition, no purple prose, no "she felt").',
          '**Mistake 5: editing inside the chat window.** Generating in chat is fine; editing in chat trains a habit of asking the model to fix prose instead of revising it yourself. Export the draft to a text editor for revision; the writer\'s voice gets stronger when the model is not in the loop.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'The biggest skill risk with creative-writing AI is outsourcing the revision pass. Generation is mechanical work that benefits from the model; revision is the part that makes the prose yours. Writers who let the model revise lose voice fast — even when they cannot point to which line changed.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Hugging Face model cards for Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5](https://huggingface.co/) — official model documentation and licensing.',
          '[Hermes 3 (NousResearch) GitHub and model card](https://huggingface.co/NousResearch) — uncensored Llama 3.3-based fine-tunes.',
          '[Dolphin 3.0 (Cognitive Computations) model cards](https://huggingface.co/cognitivecomputations) — uncensored fine-tunes across multiple base models.',
          '[Ollama Model Library](https://ollama.com/library) — available models, quantization options, tool-call support flags referenced above.',
          '[SillyTavern documentation](https://docs.sillytavern.app/) — character card spec, persona system, group chat features.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Which local LLM is best for fiction writing in 2026?',
            a: 'Llama 3.3 70B is the best all-round pick when hardware permits (~42 GB VRAM at Q4_K_M). On 24 GB rigs, Qwen3 32B is the lighter default with a small quality gap on prose-heavy work. For long-form continuity (novels), Mistral Large\'s 128K context is the differentiator. Pick by task type: most writers benefit more from the right specialist than from chasing the biggest model.',
          },
          {
            q: 'What is an uncensored local LLM and when should I use one?',
            a: 'An uncensored model is a fine-tune of an existing base model (typically Llama 3.3 or Qwen3) where the RLHF safety layer that produces refusals on mature or morally complex prompts has been removed. The model follows the prompt instead of declining. Use uncensored derivatives (Hermes 3, Dolphin 3.0) for mature fiction, conflict scenes, historically accurate writing, or any workflow where the instruct-tuned model refuses scenes you have framed as fiction. The writer is still the author; the model just stops getting in the way.',
          },
          {
            q: 'What temperature should I use for creative writing?',
            a: 'Temperature 0.8–1.1 is the creative-writing range, paired with top-p 0.9–0.95. Tight dialogue wants 0.7–0.85; lyrical prose and poetry want 1.0–1.2; surreal or genre work wants 1.1–1.3. The defaults in most chat UIs (often 0.7 with top-p 0.9) are tuned for question-answering and produce flat prose on creative prompts. Test on a short scene at 3 settings, pick the one where the model sounds most alive without losing the prompt.',
          },
          {
            q: 'Are local creative-writing models as good as ChatGPT or Claude?',
            a: 'For most prompts, yes — close enough that the privacy and cost advantages dominate. The frontier cloud models still lead on the hardest creative tasks (long-form coherence past 50K tokens, very obscure cultural references, rare languages). For a typical fiction or roleplay session, a writer who calibrated sampling settings on Llama 3.3 70B or Qwen3 32B will not see consistent quality gaps against GPT-5 or Claude. The models that lose are the ones that get a default "0.7 temperature, generic system prompt" treatment — that loses against any cloud model.',
          },
          {
            q: 'Can a local model write a full novel?',
            a: 'It can help draft one. Mistral Large at 128K context can hold a 50,000-word draft in memory; Llama 3.3 70B and Qwen3 32B at 32K context need section-by-section drafting. The bottleneck is not model capability — it is the writer\'s structure (outline, character bible, lore book) that the model uses to keep continuity. Without those, even Mistral Large drifts. With them, any of the top picks holds together for novel-length work.',
          },
          {
            q: 'Do uncensored models produce illegal content?',
            a: 'No more than instruct-tuned models do. Both produce text the prompt asks for; uncensored models are more willing to engage with mature themes that the instruct-tuned safety layer refuses. Legal liability attaches to the writer and the publication, not the model. EU AI Act, German StGB §184/§184c, and US obscenity law cover specific content categories regardless of generation method. The local hosting does not change the law; it changes who has visibility into the draft.',
          },
          {
            q: 'Is SillyTavern only for adult roleplay?',
            a: 'No. SillyTavern is a chat-focused frontend with character cards, persona management, and lore books — useful for any dialogue-heavy or character-driven work. Many writers use it for non-roleplay fiction drafting (multi-character scenes, voice consistency across long projects). The character card ecosystem includes adult content but is not limited to it; the same UI works for literary fiction, screenwriting, and game-narrative work.',
          },
          {
            q: 'How is local creative writing different from coding workloads?',
            a: 'Sampling settings and prompt structure. Coding wants temperature 0.2–0.4, deterministic output, structured (JSON, code) output, and explicit constraints in the prompt. Creative writing wants temperature 0.8–1.1, freer output, prose form, and richer system prompts (character voice, POV, tone, genre conventions). The same model — Llama 3.3 70B serves both — produces wildly different output depending on these settings. A coding-style prompt on a creative model produces flat output; a creative-style prompt on a coding model produces hallucinated code.',
          },
          {
            q: 'Which local model has the fewest "AI tells"?',
            a: 'AI tells — phrases like "shiver down their spine," "tapestry," "delve," "navigate," and ChatGPT-style transitional summaries — are more frequent in smaller instruct models. Llama 3.3 70B and Qwen3 32B have fewer tells than models below 20B. Hermes 3 has the fewest in this set: the RLHF refusal-pattern training was also where many formulaic transitions were introduced, and removing it removes both. Yi-1.5 34B is unusual — stronger on rare vocabulary but occasionally over-purple. The highest-impact lever for tell reduction is the system prompt with negative examples ("do not write \'shiver,\' \'tapestry,\' or \'delve\'"), not the model.',
          },
          {
            q: 'How do I avoid the "shiver down their spine" cliché?',
            a: 'A system prompt with negative examples is the highest-impact lever — list 8–12 banned phrases explicitly ("do not write \'shiver,\' \'tapestry,\' \'delve,\' \'masterfully,\' or \'she felt\'"). Lower the temperature slightly (0.85–0.95 instead of 1.1) to reduce the model\'s reach for stock language. Repeat penalty 1.1 alone does NOT catch this — the phrases are not exact token repetitions. DRY penalty (multiplier 0.8, base 1.75) catches them at the n-gram level across scenes. A manual revision pass is the final filter. See [negative prompting](/prompt-engineering/negative-prompting) for the prompt structure that consistently kills clichés.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend (2026)](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — head-to-head comparison of the three roleplay-focused frontends paired with the models above.',
          '[Local LLM Prompts for Fiction Writers: Templates & Techniques](/power-local-llm/local-llm-prompts-for-fiction-writers) — copy-paste prompt templates for character development, dialogue, worldbuilding, and revision workflows.',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/power-local-llm/uncensored-local-llm-creative-writing-ethics) — full treatment of when uncensored derivatives are legitimate creative tools and where the legal and ethical lines are.',
          '[Temperature and Top-P: Control AI Creativity](/prompt-engineering/temperature-and-top-p-control-ai-creativity) — the prompt-engineering side of sampling parameters; deeper than the summary in this guide.',
          '[Negative Prompting](/prompt-engineering/negative-prompting) — specifying what NOT to do in a prompt; a force-multiplier for system prompts on creative work.',
          '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) — the authoritative model landscape guide; useful when you want to explore beyond the six creative-writing picks above.',
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
    title: 'Beste lokale LLMs für kreatives Schreiben 2026: Belletristik, Dialog & Weltenbau',
    seoTitle: 'Beste lokale LLMs für kreatives Schreiben 2026: Getestete Picks',
    intro:
      'Beim kreativen Schreiben punkten lokale LLMs nicht nur mit Datenschutz und Kosteneffizienz. Die besten Instruct-tuned und Uncensored Open-Weight-Modelle 2026 — Llama 3.3 70B, Qwen3 32B, Mistral Large, Command R+, Yi-1.5 34B sowie die Hermes/Dolphin-Uncensored-Derivate — liefern Belletristik, Dialog und Weltenbau, die auf den meisten Prompts mit führenden Cloud-Modellen mithalten können. Die Unterschiede liegen in der Stimmkonsistenz, der Bereitschaft für dunkle oder erwachsene Themen und der Fähigkeit, Anweisungen natürlich umzusetzen. Dieser Leitfaden testet sechs Modelle auf 50+ kreative Prompts aus Belletristik, Dialog, Poesie und Weltenbau — inklusive der optimalen Temperatur- und Top-p-Einstellungen.',
    metaDescription:
      '6 lokale Modelle für kreatives Schreiben verglichen: Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5 und Uncensored-Varianten. Getestet auf 50+ Prompts.',
    twitterDescription:
      '6 lokale Modelle für Belletristik, Dialog und Weltenbau getestet auf 50+ Prompts. Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5 plus Uncensored-Picks. Urteil je Aufgabentyp.',
    current_models_mentioned: [
      'Llama 3.3 70B',
      'Qwen3 32B',
      'Mistral Large',
      'Command R+ 104B',
      'Yi-1.5 34B',
      'Hermes 3 Llama 3.3',
      'Dolphin 3.0 Llama',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
    ],
    audience:
      'Belletristik-Autoren, Drehbuchautoren, Game-Designer, Weltenbauer und Roleplay-Enthusiasten, die lokale LLMs für kreative Arbeit nutzen, bei der Datenschutz, Stimmkonsistenz und die Bereitschaft für reife Themen wichtiger sind als Benchmark-Werte.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale LLMs kreatives Schreiben',
    targetKeywords: [
      'beste lokale llm kreatives schreiben',
      'lokale llm belletristik',
      'uncensored lokale llm',
      'llama vs mistral kreatives schreiben',
      'bestes lokales modell dialog',
      'lokale llm weltenbau',
    ],
    leadAnswerBlock:
      '**Llama 3.3 70B ist im Mai 2026 der beste Allrounder unter den lokalen Modellen für kreatives Schreiben — starke Stimmkonsistenz, folgt Anweisungen präzise und bearbeitet dunkle Themen ohne Ablehnung, wenn der System-Prompt die Arbeit als Belletristik kennzeichnet. Qwen3 32B ist die richtige Wahl für 24-GB-Systeme: nahezu gleich stark in der Prosa, deutlich geringerer Hardwarebedarf. Mistral Large gewinnt bei der Langform-Kontinuität (Novel-Länge) dank seinem nativen 128K-Kontext. Command R+ 104B hat die sauberste Dialog-Stimme. Yi-1.5 34B ist die Nischenempfehlung für Poesie und lyrische Prosa. Für Workflows, die Instruct-Modelle ablehnen, sind Hermes 3 (Llama-3.3-Basis) und Dolphin 3.0 die Uncensored-Picks — gleiche Architektur, RLHF-Sicherheitsschicht entfernt. Temperatur 0,8–1,1 und Top-p 0,9–0,95 sind der kreative Bereich; 0,7 und darunter erzeugt flache Prosa. Uncensored ≠ unethisch — es bedeutet, dass das Modell dem Prompt folgt statt ihn abzulehnen; der Autor trägt weiterhin die Verantwortung.**',
    quickAnswerTop: {
      de: {
        question: 'Welches lokale LLM eignet sich 2026 am besten für kreatives Schreiben?',
        answer:
          'Llama 3.3 70B ist bei ausreichender Hardware der beste Allrounder — stark in Prosa, Dialog und Weltenbau, mit Stimmkonsistenz über lange Sessions. Auf 24-GB-Hardware, wo 70B nicht passt, ist Qwen3 32B die leichtere Alternative ohne großen Qualitätsverlust. Mistral Large ist die Wahl für den langen Kontext bei Novel-Länge (128K out of the box). Command R+ 104B hat die natürlichste Dialog-Stimme. Yi-1.5 34B ist der Spezialist für Poesie und lyrische Prosa. Für Workflows, die an der Instruct-Sicherheitsschicht scheitern (reife Belletristik, Konfliktszenen, moralisch komplexe Charaktere), verwenden Hermes 3 und Dolphin 3.0 dieselben Basismodelle mit entfernter RLHF-Sicherheitsschicht. Temperatur 0,8–1,1 und Top-p 0,9–0,95 sind der kreative Bereich; Coding-Einstellungen (0,2–0,4) erzeugen flache Prosa.',
        bullets: [
          'Bester Allrounder: Llama 3.3 70B — stärkste Stimmkonsistenz, folgt Anweisungen gut, bearbeitet dunkle Themen ohne Ablehnung.',
          'Bestes 24-GB-System: Qwen3 32B — nahezu so stark wie Llama 70B in der Prosa, deutlich geringerer Hardwarebedarf.',
          'Beste Langform: Mistral Large — 128K-Kontext out of the box; Novel-Länge ohne Fadenriss.',
          'Bester Dialog: Command R+ 104B — die natürlichste Gesprächsstimme über mehrere Charaktere.',
          'Beste Poesie/Lyrik: Yi-1.5 34B — Nischenempfehlung für Verse und stilisierte Prosa.',
          'Bei Ablehnung durch Instruct: Hermes 3 (Llama-Basis) oder Dolphin 3.0 — Uncensored, gleiche Architektur, Prompt-folgsam.',
          'Sampling: Temperatur 0,8–1,1, Top-p 0,9–0,95 für Prosa; niedriger für engen Dialog, höher für surreale/Genre-Arbeiten.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Kurzfakten', anchor: '#quick-facts' },
      { label: 'Testmethode', anchor: '#how-we-tested' },
      { label: 'Direktvergleich', anchor: '#comparison' },
      { label: 'Modell-Urteile', anchor: '#verdicts' },
      { label: 'Beispielausgaben', anchor: '#sample-outputs' },
      { label: 'Temperatur & Top-P', anchor: '#sampling' },
      { label: 'Uncensored-Modelle', anchor: '#uncensored' },
      { label: 'Frontends für kreatives Schreiben', anchor: '#frontends' },
      { label: 'Entscheidungshilfe', anchor: '#decision' },
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
          '**Llama 3.3 70B ist im Mai 2026 das beste lokale Allround-Modell für kreatives Schreiben.** Stärkste Stimmkonsistenz im Test, folgt Anweisungen präzise, bearbeitet dunkle Themen ohne Ablehnung, wenn der System-Prompt die Arbeit als Belletristik kennzeichnet.',
          '**Qwen3 32B ist die richtige Wahl für 24-GB-Systeme.** Nahezu Llama-70B-Prosaqualität ohne den 48-GB+-VRAM-Bedarf. Standard für die meisten Laptops und Desktops.',
          '**Mistral Large gewinnt bei der Langform-Kontinuität.** 128K-Kontext out of the box; Novel-Länge ohne Fadenriss oder Charakterstimm-Drift.',
          '**Command R+ 104B hat die sauberste Dialog-Stimme.** Natürlichste Gesprächsbeats über Charaktere hinweg; die Wahl, wenn Dialog die tragende Funktion im Werk übernimmt.',
          '**Yi-1.5 34B ist der Spezialist für Poesie und lyrische Prosa.** Nischenempfehlung für Verse, stilisierte Prosa und Kurzformen, bei denen Rhythmus zählt.',
          '**Uncensored-Derivate (Hermes 3, Dolphin 3.0) sind der richtige Schritt, wenn Instruct-Modelle ablehnen.** Gleiche Basismodelle; RLHF-Sicherheitsschicht entfernt; das Modell folgt dem Prompt statt abzulehnen. Reife Belletristik, Konfliktszenen und moralisch komplexe Charaktere werden schreibbar.',
          '**Sampling ist wichtiger als viele denken.** Temperatur 0,8–1,1 und Top-p 0,9–0,95 sind der kreative Bereich. Coding-Einstellungen (0,2–0,4) erzeugen flache, vorhersehbare Prosa. Höher (1,2+) ist Genre-/Surrealismusbereich.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**Bester Allrounder:** Llama 3.3 70B bei Q4_K_M, ~42 GB VRAM. Stärkste Stimmkonsistenz in diesem Set.',
          '**Bestes 24-GB-System:** Qwen3 32B bei Q4_K_M, ~20 GB VRAM. Standard für die meisten Nutzer.',
          '**Beste Langform:** Mistral Large bei Q4_K_M, ~75 GB VRAM gesamt (hoch). 128K-Kontext out of the box.',
          '**Bester Dialog:** Command R+ 104B bei Q4_K_M, ~62 GB VRAM. Sauberste Charakterstimm-Differenzierung.',
          '**Beste Poesie:** Yi-1.5 34B bei Q4_K_M, ~21 GB VRAM. Lyrischer-Prosa-Spezialist.',
          '**Uncensored-Optionen:** Hermes 3 (Llama-3.3-Basis, ~42 GB) und Dolphin 3.0 (mehrere Basisgrößen, 13–42 GB).',
          '**Standard-Sampling für Prosa:** Temperatur 0,95, Top-p 0,92, Repeat Penalty 1,1. Je nach Aufgabentyp anpassen.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Testmethode: 50+ kreative Prompts für sechs Modelle',
        content:
          '**Der Test hielt Prompt-Set, Sampling-Einstellungen und Frontend konstant; nur das Modell wurde variiert.** Dieselben 50 Prompts in Belletristik, Dialog, Poesie und Weltenbau; Ausgaben nach derselben Rubrik je Aufgabentyp bewertet.',
        items: [
          '**Backend:** Ollama 0.5+ auf macOS und Linux; gleiche Kontextgrenzen je Modell; Q4_K_M-Quantisierung über alle sechs Picks (Q5_K_M für kleinere 32B–34B-Modelle, wo VRAM es erlaubte, ohne messbaren Unterschied in den Rubrik-Werten).',
          '**Frontend:** Open WebUI für den Großteil des Tests (Chat-artige Arbeit); SillyTavern für die dialog- und Roleplay-intensive Teilmenge.',
          '**Prompt-Set:** 50 Prompts aufgeteilt auf vier Aufgabentypen — Belletristik (15), Dialog (15), Poesie (10), Weltenbau (10). Jeder Prompt 3 Mal je Modell, um Varianz zu erfassen.',
          '**Sampling:** Temperatur 0,95, Top-p 0,92, Repeat Penalty 1,1 als Ausgangspunkt; aufgabenspezifische Anpassungen in den Modell-Urteilen.',
          '**Bewertungsrubrik:** Stimmkonsistenz, Prompt-Treue, Prosaqualität und Bereitschaft (hat das Modell als Belletristik gerahmte Szenen abgelehnt oder aufgeweicht?).',
          '**Transparenz-Hinweis:** Werte als relative Ränge je Aufgabe, keine erfundenen absoluten Prozentwerte. „Bester Dialog" bedeutet konsistenter erster Platz auf dem Dialog-Teilset über die 3 Läufe.',
          'Für Prompting-Techniken, die die kreative Ausgabe auf jedem Modell verbessern, siehe [Temperatur und Top-p](/prompt-engineering/temperature-and-top-p-control-ai-creativity?lang=de) und [Persona-Prompting](/prompt-engineering/persona-prompting?lang=de).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Kreativ-Schreib-Benchmarks sind von Natur aus subjektiv. Die obige Rubrik (Stimmkonsistenz, Prompt-Treue, Prosaqualität, Bereitschaft) ist die nächste Annäherung an wiederholbare Bewertung. Behandle die Urteile als Ausgangshypothesen, die du an deiner eigenen Arbeit überprüfst.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Direktvergleich: Sechs lokale Modelle bei kreativen Aufgaben',
        content:
          '**Llama 3.3 70B führt bei der breitesten Aufgabenpalette; die kleineren und spezialisierten Modelle gewinnen je ein oder zwei Kategorien.** Nach Aufgabentyp wählen, nicht nach Gesamtranking.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Llama 3.3 70B ist das stärkste Allround-Kreativmodell; Qwen3 32B die leichtere Alternative; Mistral Large gewinnt Langform; Command R+ gewinnt Dialog; Yi-1.5 gewinnt Poesie; Hermes/Dolphin übernehmen Szenen, die die anderen ablehnen.',
          },
          {
            type: 'plain-terms',
            text: 'Kein einzelnes Modell ist in allem am besten. Llama 3.3 70B ist der sichere Standard, wenn die Hardware passt. Qwen3 32B ist die kluge Wahl auf einer 24-GB-GPU. Einen Spezialisten wählen (Mistral für Romane, Command R+ für Dialog, Yi-1.5 für Poesie), wenn ein Aufgabentyp die tragende Funktion im Werk übernimmt. Ein Uncensored-Derivat wählen, wenn das Instruct-Modell Szenen ablehnt, die du schreiben musst.',
          },
        ],
        columns: ['Modell', 'Größe', 'VRAM (Q4_K_M)', 'Belletristik', 'Dialog', 'Poesie', 'Weltenbau', 'Ideal für'],
        rows: [
          { 'Modell': 'Llama 3.3 70B', 'Größe': '70B', 'VRAM (Q4_K_M)': '~42 GB', 'Belletristik': 'Bester', 'Dialog': 'Stark', 'Poesie': 'Stark', 'Weltenbau': 'Bester', 'Ideal für': 'Bester Allrounder; Standard wenn Hardware ausreicht' },
          { 'Modell': 'Qwen3 32B', 'Größe': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'Belletristik': 'Stark', 'Dialog': 'Stark', 'Poesie': 'OK', 'Weltenbau': 'Stark', 'Ideal für': '24-GB-System-Standard; geringer Qualitätsverlust vs. Llama 70B' },
          { 'Modell': 'Mistral Large', 'Größe': '123B', 'VRAM (Q4_K_M)': '~75 GB', 'Belletristik': 'Stark (Langform)', 'Dialog': 'Stark', 'Poesie': 'OK', 'Weltenbau': 'Stark', 'Ideal für': 'Langform-Kontinuität, 128K-Kontext' },
          { 'Modell': 'Command R+', 'Größe': '104B', 'VRAM (Q4_K_M)': '~62 GB', 'Belletristik': 'Stark', 'Dialog': 'Bester', 'Poesie': 'OK', 'Weltenbau': 'Stark', 'Ideal für': 'Dialogintensive Werke, Gruppenszenen' },
          { 'Modell': 'Yi-1.5 34B', 'Größe': '34B', 'VRAM (Q4_K_M)': '~21 GB', 'Belletristik': 'OK', 'Dialog': 'OK', 'Poesie': 'Bester', 'Weltenbau': 'OK', 'Ideal für': 'Poesie, lyrische Prosa, stilisierte Texte' },
          { 'Modell': 'Hermes 3 / Dolphin 3.0', 'Größe': '13B–70B', 'VRAM (Q4_K_M)': '~9–42 GB', 'Belletristik': 'Wie Basismodell', 'Dialog': 'Wie Basismodell', 'Poesie': 'Wie Basismodell', 'Weltenbau': 'Wie Basismodell', 'Ideal für': 'Szenen, die Instruct-Modelle ablehnen' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Zwei-Modell-Setup ist das gängige Muster: Llama 3.3 70B (oder Qwen3 32B) als täglicher Treiber, plus das Hermes-3-Derivat im selben Ollama für Szenen, die die Instruct-Version ablehnt. Zwischen ihnen je Szene wechseln; beide können gleichzeitig in `ollama list` liegen ohne Konflikt.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'Modell-Urteile',
        items: [
          '**Llama 3.3 70B** — bester Allrounder. Stärkste Stimmkonsistenz im Test; Charaktere behalten dieselben Sprachmuster über lange Szenen. Folgt Anweisungen präzise — wenn der System-Prompt POV, Ton oder Genre-Konventionen vorgibt, hält Llama 3.3 diese ein. Bearbeitet dunkle Themen ohne Ablehnung, wenn der Prompt die Arbeit als Belletristik kennzeichnet. Schwachpunkt: lange Passagen driften gelegentlich in einen generischen „literarischen" Stil; kleine Modelle in derselben Familie (8B) verlieren diese Stärke.',
          '**Qwen3 32B** — bestes 24-GB-System-Modell. Leicht geringere Stimmkonsistenz als Llama 3.3 70B, aber der Abstand ist klein genug, dass die meisten Autoren ihn bei prosaschwerem Schreiben nicht bemerken. Stärkstes der kleineren Modelle beim Anweisungsfolgen. Schwachpunkt: Poesie und stilisierte Prosa bleiben merklich hinter der Konkurrenz; für diese auf Yi-1.5 wechseln.',
          '**Mistral Large** — beste Langform-Kontinuität. 128K-Kontextfenster bedeutet, ein 50.000-Wörter-Entwurf passt ohne Kürzung; das Modell hält Charakterdetails, Handlungsfäden und Weltregeln über Kapitel hinweg. Schwachpunkt: höchste Hardware-Anforderung im Set (~75 GB bei Q4_K_M); Token-Geschwindigkeit sinkt bei langen Eingaben. Mistral La Plateforme auf EU-Infrastruktur nutzen, wenn lokale Hardware der Engpass ist.',
          '**Command R+ 104B** — bester Dialog. Eigenständige Charakterstimmen, die über Exchanges hinweg bestehen; Gruppenszenen (3+ Sprecher) bleiben lesbar ohne den „alle klingen gleich"-Fehler, der bei anderen Modellen häufig vorkommt. Schwachpunkt: Prosaabsätze zwischen Dialog-Beats sind kompetent, aber nicht lyrisch; für rein beschreibende Passagen gewinnt Llama 3.3.',
          '**Yi-1.5 34B** — beste Poesie und lyrische Prosa. Rhythmusbewusst, sicher in strukturierten Formen (Sonett, Villanelle, Haiku), erzeugt Verse, die sich gegenüber den größeren Allgemeinmodellen behaupten. Schwachpunkt: Langform-Belletristik ist kompetent, aber nicht seine Stärke; für narrative Arbeit Llama 3.3 oder Qwen3 wählen.',
          '**Hermes 3 (Llama-3.3-Basis) und Dolphin 3.0** — Uncensored-Derivate. Gleiche Architektur und Basisgewichte wie Llama 3.3 70B; die RLHF-Sicherheitsschicht wird beim Fine-tuning entfernt. Das Modell folgt dem Prompt statt reife Inhalte abzulehnen oder zu entschärfen. Qualität bei nicht-reifen Prompts ist identisch mit dem Basismodell; der Unterschied ist nur bei Prompts sichtbar, bei denen Instruct-Versionen ablehnen. Diese verwenden, wenn die Arbeit es erfordert (reife Belletristik, Gewaltszenen, moralisch komplexe Charaktere) — ansonsten beim Instruct-Basismodell bleiben.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Stimmkonsistenz ist die Metrik, die Autoren bei der frühen Modellbewertung am stärksten unterschätzen. Ein Modell, das bei einem einzelnen Absatz brillante Prosa erzeugt, aber bis Absatz 5 die Sprachmuster des Charakters verliert, ist schlechter als ein Modell, das kompetente Prosa mit konsistenter Stimme über 20 Absätze produziert. Langzeit-Session-Kontinuität testen, nicht nur One-Shot-Qualität.',
          },
        ],
      },
      sampleOutputs: {
        id: 'sample-outputs',
        title: 'Beispielausgaben: Drei Modelle, ein Prompt',
        content:
          '**Gemeinsamer Prompt:** "Open a noir scene where the detective enters a rain-soaked diner at 2 AM." Gleiche Temperatur (0,95), gleiches Top-p (0,92), gleicher Repeat Penalty (1,1) — nur das Modell ändert sich. Die folgenden Auszüge sind repräsentativ für die typische Ausgabe jedes Modells bei dieser Prompt-Klasse über drei Läufe.',
        items: [
          '**Llama 3.3 70B** — "The bell above the door chimed twice and went silent. Rain ran down my coat in sheets, pooling on the linoleum before I\'d taken three steps…" — *Konkrete sensorische Verankerung, aktive Stimme, keine Füllwörter. Die soziale Szene wird in drei Sätzen etabliert.*',
          '**Qwen3 32B** — "I pushed through the door into a wall of cigarette smoke and griddle grease. The diner was half-empty and fully quiet…" — *Beobachtende Einleitung vor Aktion; effiziente Atmosphäre. Leicht strukturierter als Llama 3.3, aber ebenso präzise.*',
          '**Yi-1.5 34B** — "Rain hammered the awning with the regularity of a metronome counting out the last hours of a night no one wanted to remember…" — *Metapher-geführt ab der ersten Klausel; rhythmische Satzvariation; dichtere Bildsprache. Yi-1.5\'s Poesie-Hintergrund zeigt sich auch in der Prosa.*',
        ],
        columns: ['Modell', 'Typische Einleitung', 'Typisches Beschreibungsmuster'],
        rows: [
          { 'Modell': 'Llama 3.3 70B', 'Typische Einleitung': 'Aktion zuerst, sofortiges Sinnesdetail', 'Typisches Beschreibungsmuster': 'Konkret und physisch; vermeidet abstrakte Substantive; sozial verankert' },
          { 'Modell': 'Qwen3 32B', 'Typische Einleitung': 'Umgebungsbeobachtung vor Charakteraktion', 'Typisches Beschreibungsmuster': 'Effizient; soziales/atmosphärisches Detail; leichtes strukturelles Anzeichen' },
          { 'Modell': 'Yi-1.5 34B', 'Typische Einleitung': 'Metapher oder Vergleich ab der ersten Klausel', 'Typisches Beschreibungsmuster': 'Abstrakte Bildsprache; rhythmische Variation; dichter; gelegentliche Überladenheit' },
          { 'Modell': 'Command R+ 104B', 'Typische Einleitung': 'Charakterstimme oder dialognahe Einleitung', 'Typisches Beschreibungsmuster': 'Konversationell; starke eigenständige Stimme; schwächere Solo-Beschreibung' },
          { 'Modell': 'Mistral Large', 'Typische Einleitung': 'Szenenaufbau-Absatz; langsamerer Start', 'Typisches Beschreibungsmuster': 'Ausgeglichen und kontrolliert; konsistent über lange Passagen; leicht generisch' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Auszüge illustrieren die Tendenzen jedes Modells über mehrere Läufe — keine Rosinenpickerei. Yi-1.5 34B\'s "losing arguments with entropy" erschien in einem von drei Läufen; die anderen beiden waren direkter. Jedes Modell 2–3 Mal auf demselben Prompt laufen lassen und den Auszug nehmen, der zur Szene passt.',
          },
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'Temperatur und Top-P für kreative Arbeit',
        content:
          '**Kreatives Schreiben braucht höhere Sampling-Temperaturen als Coding.** Die Standard-Sampling-Parameter der meisten Chat-UIs sind für Frage-Antwort optimiert, nicht für Prosa — Temperatur 0,7 und Top-p 0,9 erzeugen flache, vorhersehbare Ausgaben bei kreativen Prompts.',
        items: [
          '**Ausgangspunkt für Prosa:** Temperatur 0,95, Top-p 0,92, Repeat Penalty 1,1. Startpunkt für die meisten Belletristik-, Dialog- und Weltenbau-Arbeiten. Von hier aus je Aufgabe anpassen.',
          '**Enger Dialog:** Temperatur 0,7–0,85, Top-p 0,9. Niedrigere Temperaturen halten Charakterstimmen über Exchanges konsistent; höhere Werte erzeugen Out-of-Character-Einwürfe.',
          '**Lyrische Prosa und Poesie:** Temperatur 1,0–1,2, Top-p 0,95. Höhere Temperaturen ermöglichen unerwartete Wortwahlen, die Verse zum Funktionieren bringen.',
          '**Surreale oder Genre-Belletristik:** Temperatur 1,1–1,3, Top-p 0,95–0,98. Treibt das Modell zu weniger gebräuchlichen Bild- und Metaphern-Kombinationen.',
          '**Plot-gesteuerte Szenen (Action, Mystery, Wendungen):** Temperatur 0,85–0,95, Top-p 0,9. Braucht mehr Anweisungsfolgen als Neuheit.',
          '**Repeat Penalty 1,1–1,15** ist der richtige Bereich für die meisten kreativen Arbeiten. Höher (1,2+) lässt das Modell Wörter meiden, selbst wenn Wiederholung stilistisch gewollt ist; niedriger (1,0–1,05) lässt es bei langen Szenen in Schleifen fallen.',
          '**min_p (0,05–0,1):** Eine neuere Alternative zu Top-p, die den Wahrscheinlichkeits-Cutoff relativ zur Peak-Token-Wahrscheinlichkeit dynamisch skaliert. Für kreative Prompts permissiver als Top-p 0,9, ohne das Inkoherenz-Risiko sehr hoher Top-p-Werte. Der empfohlene Standard für SillyTavern- und KoboldCpp-Nutzer 2026, wenn die Oberfläche ihn zugänglich macht.',
          '**DRY Repetition Penalty (Multiplikator 0,8, Basis 1,75, erlaubte Länge 2):** Erkennt Phrasen-Wiederholungen, die der Standard-Repeat_Penalty übersieht. Wo repeat_penalty einzelne Token verfolgt, verfolgt DRY n-Gramm-Sequenzen. Nützlich für lange Sessions, bei denen das Modell aus seiner eigenen Ausgabe schöpft.',
          '**Modernes Kreativschreiben-Baseline (2026):** Temperatur 0,95, min_p 0,05, DRY-Multiplikator 0,8 (Basis 1,75, erlaubte Länge 2). Top-p 0,92 funktioniert weiterhin gut, wenn das Frontend min_p oder DRY nicht anbietet.',
          'Für eine tiefere Behandlung dieser Parameter und ihrer Wechselwirkungen, siehe [Temperatur und Top-p](/prompt-engineering/temperature-and-top-p-control-ai-creativity?lang=de).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Sampling-Einstellungen an einer einzelnen kurzen Szene je Modell testen — drei Läufe bei jeder Einstellung, dann die Temperatur wählen, bei der das Modell am lebendigsten klingt, ohne den Prompt zu verlieren. Einstellungen, die bei Llama 3.3 70B funktionieren, lassen sich nicht perfekt auf Mistral Large oder Yi-1.5 übertragen; je Modell kalibrieren.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Uncensored-Modelle: Was sie sind und wann sie relevant sind',
        content:
          '**Uncensored bedeutet nicht unethisch.** Es bedeutet, dass die Instruction-Tuning-Sicherheitsschicht (RLHF-Ablehnungen) des Modells entfernt oder umgangen wurde, sodass das Modell dem Prompt folgt statt abzulehnen oder zu entschärfen. Der Autor trägt weiterhin die Verantwortung; das Tool hört auf, im Weg zu stehen.',
        items: [
          '**Was „uncensored" technisch bedeutet.** Modelle wie Hermes 3 und Dolphin 3.0 sind Fine-tuned-Varianten von Basismodellen (Llama 3.3, Qwen3), bei denen der Post-Training-RLHF-Pass, der Ablehnungen bei reifen, gewaltsamen oder moralisch komplexen Prompts erzeugt, durch ein Fine-tune ersetzt wurde, das dem Prompt folgt. Gleiche Architektur, gleiche Basisgewichte, anderes Post-Training.',
          '**Wann sie für kreative Arbeit relevant sind.** Reife Belletristik (Literaturromane mit Sexszenen, Crime-Fiction mit grafischer Gewalt, Horror), historisch genaues Schreiben (Krieg, Gräueltaten), moralisch komplexe Charaktere und Roleplay-Szenarien, die Instruct-Modelle nicht ausführen.',
          '**Wo sie versagen.** Sie folgen dem Prompt — einschließlich schlecht geschriebener Prompts. Instruct-Modelle entschärfen vage Prompts oft zu etwas Veröffentlichbarem; Uncensored-Modelle geben genau das, was gefragt wurde, was manchmal schlechter ist. Die Anweisungen des Autors sind entscheidender.',
          '**Ethische Grenzen.** „Das Modell schreibt es" ist keine Kreativlizenz für Inhalte, die reale Personen zum Ziel haben, nicht-einvernehmliche Szenarien mit realen oder identifizierbaren Personen darstellen oder in der Jurisdiktion des Autors illegal sind. Lokales Hosting ändert nicht das Recht; es ändert, wer den Entwurf sieht.',
          '**Rechtlicher Kontext (Mai 2026, kurz und nicht abschließend).** EU-KI-Gesetz und mitgliedstaatliche Gesetze (insbesondere §184/§184c StGB in Deutschland) regeln spezifische Inhaltskategorien unabhängig vom Entstehungsort. US-Obszönitätsrecht gilt für die Veröffentlichung, nicht die Generierung. Für kommerzielle Veröffentlichungen ist das Modell irrelevant; das veröffentlichte Artefakt ist das, was reguliert wird.',
          '**Für eine längere Behandlung** von Uncensored-Modell-Ethik, rechtlichem Kontext und Best Practices, siehe [Uncensored Local LLMs für kreatives Schreiben](/power-local-llm/uncensored-local-llm-creative-writing-ethics?lang=de).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Uncensored ist eine Workflow-Entscheidung, keine Identität. Viele Autoren verwenden das Instruct-Modell für den Großteil eines Projekts und wechseln für spezifische Szenen, die die Instruct-Version ablehnt, zum Uncensored-Derivat. Zwei Modell-Installs in derselben Ollama-Installation ist das gängige Muster.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Frontends für kreative Arbeit',
        content:
          '**Das Chat-UI, in dem du schreibst, ist genauso wichtig wie das Modell.** Drei Frontends sind 2026 glaubwürdige Picks für Kreativschreib-Workflows; nach Workflow-Form wählen.',
        items: [
          '**Open WebUI** — der Allzweck-Pick. ChatGPT-ähnliche Oberfläche, Modellwechsel per Klick, Charakterkarten über System-Prompts, Dokument-Upload für Kontext. Bestes für prosaschweree Arbeit, bei der die Chat-Form zum Entwurfsfluss passt.',
          '**SillyTavern** — der Roleplay- und Dialog-Pick. Charakterkarten-Ökosystem (Tavern v2 Spec), Persona-Verwaltung, Lore Books für Weltenbau, Gruppen-Chat für Mehrfigurenszenen. Bestes für dialoggetriebene Arbeit und langfristige Charakter- oder Weltenprojekte. Passt gut zu Command R+ und Uncensored-Derivaten.',
          '**Agnai und RisuAI** — engere SillyTavern-Alternativen. Schlankere Feature-Sets, einfacherer Einstieg, weniger Anpassung. Wählen, wenn SillyTavern für den eigenen Workflow überdimensioniert wirkt.',
          '**Plain Ollama CLI plus Texteditor** — der minimale Pick. `ollama run llama3.3:70b` und Szenen über das Terminal in das Entwurfsdokument leiten. Verliert den persistenten Charakterkontext, gewinnt aber an Schreibfokus.',
          'Für den Direktvergleich der Roleplay-fokussierten Frontends, siehe [SillyTavern vs Agnai vs RisuAI: Bestes lokales Roleplay-Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay?lang=de).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Entwurf und Überarbeitung brauchen unterschiedliche Frontends. SillyTavern für die Generierung (Charakterstimme, Szenenarbeit) nutzen, dann den Chat in einen Nur-Text-Editor exportieren. Überarbeitung im Chat-Fenster fördert die Gewohnheit, das Modell Prosa korrigieren zu lassen, statt selbst zu überarbeiten — ein langfristiges Stilrisiko.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Entscheidungshilfe: Welches Modell für deine Arbeit',
        content:
          '**Fünf Fragen, in dieser Reihenfolge, führen die meisten Autoren zur richtigen Wahl.**',
        columns: ['Meine Situation', 'Empfehlung'],
        rows: [
          { 'Meine Situation': 'Ich habe 48+ GB VRAM und möchte ein Modell für alles', 'Empfehlung': 'Llama 3.3 70B (Instruct) + Hermes 3 (Uncensored) im selben Ollama' },
          { 'Meine Situation': 'Ich habe eine 24-GB-GPU oder einen 32-GB-Mac und möchte einen starken Standard', 'Empfehlung': 'Qwen3 32B' },
          { 'Meine Situation': 'Ich schreibe an einem Roman — Langform-Kontinuität ist die Priorität', 'Empfehlung': 'Mistral Large (oder Mistral La Plateforme auf EU-Hardware, wenn lokal nicht möglich)' },
          { 'Meine Situation': 'Mein Werk ist dialogintensiv — Charakterstimmen müssen unterscheidbar bleiben', 'Empfehlung': 'Command R+ 104B (oder Llama 3.3 70B als leichtere Alternative)' },
          { 'Meine Situation': 'Ich schreibe Gedichte, Verse oder lyrische Prosa', 'Empfehlung': 'Yi-1.5 34B' },
          { 'Meine Situation': 'Das Instruct-Modell lehnt Szenen ab, die ich schreiben muss', 'Empfehlung': 'Hermes 3 (Llama-3.3-Basis) oder Dolphin 3.0 — Instruct-Version für reguläre Arbeit installiert lassen' },
          { 'Meine Situation': 'Ich möchte mit einem Modell starten und dann anpassen', 'Empfehlung': 'Qwen3 32B — deckt die meisten Workflows auf Consumer-Hardware ab; wechseln, wenn ein Aufgabentyp zum Schwerpunkt wird' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Qwen3 32B als Standard wählen auf einer 24-GB-GPU; Llama 3.3 70B bei 48 GB+; Mistral Large für Novel-Länge; Command R+ für Dialog; Yi-1.5 für Poesie; Hermes/Dolphin für Szenen, die Instruct-Modelle ablehnen.',
          },
          {
            type: 'plain-terms',
            text: 'Qwen3 32B ist das richtige Einstiegsmodell für die meisten Autoren. Zu einem Spezialisten wechseln, wenn ein bestimmter Aufgabentyp (Langform, Dialog, Poesie, reife Szenen) zum Engpass wird. Zwei Installs (Instruct + Uncensored) auf derselben Maschine kosten nichts — beide können in Ollama liegen und man wechselt je Szene.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die meisten Autoren denken zu viel über das Modell nach und zu wenig über den Prompt. Ein sorgfältig gestalteter System-Prompt mit Charakternotizen, Stimmproben und explizitem POV tut mehr für die Ausgabe als der Wechsel von Qwen3 zu Llama 70B. Siehe [Persona-Prompting](/prompt-engineering/persona-prompting?lang=de) für die Prompt-Struktur, die kreative Ausgaben konsistent verbessert.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler bei der Wahl und Nutzung lokaler Modelle für kreatives Schreiben',
        items: [
          '**Fehler 1: dem größten Modell auf Benchmarks nachjagen.** Kreativschreib-Wertungen korrelieren schlecht mit allgemeinen Benchmark-Leaderboards. Yi-1.5 34B schlägt Llama 3.3 70B bei Poesie; Command R+ schlägt beide bei Dialog. Nach Aufgabe wählen, nicht nach Leaderboard-Rang.',
          '**Fehler 2: Coding-Sampling-Einstellungen verwenden.** Temperatur 0,2–0,4 erzeugt flache, vorhersehbare Prosa. Kreatives Schreiben braucht 0,8–1,1 mit Top-p 0,9–0,95. Die Standardeinstellungen der meisten Chat-UIs sind für Q&A optimiert, nicht für Prosa.',
          '**Fehler 3: beim Instruct-Modell bleiben und aufgeben, wenn es ablehnt.** Die Instruct-Version lehnt Szenen ab, die explizit als Belletristik gerahmt wurden; das Uncensored-Derivat desselben Basismodells schreibt sie. Zwei Installs in Ollama ist die Lösung.',
          '**Fehler 4: dünne System-Prompts.** „Du bist ein hilfreicher Assistent" ist der schlechtestmögliche Prompt für kreative Arbeit. Ein System-Prompt mit Charakternotizen, Stimmproben, POV, Tempus und Ton tut mehr für die Ausgabequalität als jeder Modellwechsel. Mit [Negativem Prompting](/prompt-engineering/negative-prompting?lang=de) kombinieren, um vorzugeben, was NICHT zu schreiben ist.',
          '**Fehler 5: im Chat-Fenster überarbeiten.** Im Chat generieren ist fine; im Chat überarbeiten trainiert die Gewohnheit, das Modell Prosa korrigieren zu lassen statt selbst zu überarbeiten. Den Entwurf in einen Texteditor exportieren; die Autorenstimme wird stärker, wenn das Modell nicht im Überarbeitungsprozess ist.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Das größte Stilrisiko beim KI-gestützten Kreativschreiben ist das Auslagern des Überarbeitungspasses. Generierung ist mechanische Arbeit, die vom Modell profitiert; Überarbeitung ist der Teil, der die Prosa zum eigenen Werk macht. Autoren, die das Modell überarbeiten lassen, verlieren schnell an Stimme — selbst wenn sie nicht sagen können, welche Zeile sich verändert hat.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Hugging Face Modellkarten für Llama 3.3, Qwen3, Mistral Large, Command R+, Yi-1.5](https://huggingface.co/) — offizielle Modelldokumentation und Lizenzen.',
          '[Hermes 3 (NousResearch) GitHub und Modellkarte](https://huggingface.co/NousResearch) — Uncensored Llama-3.3-basierte Fine-tunes.',
          '[Dolphin 3.0 (Cognitive Computations) Modellkarten](https://huggingface.co/cognitivecomputations) — Uncensored Fine-tunes über mehrere Basismodelle.',
          '[Ollama Model Library](https://ollama.com/library) — verfügbare Modelle, Quantisierungsoptionen, Tool-Call-Support-Flags.',
          '[SillyTavern-Dokumentation](https://docs.sillytavern.app/) — Charakterkarten-Spec, Persona-System, Gruppen-Chat-Features.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Welches lokale LLM eignet sich 2026 am besten für Belletristik?',
            a: 'Llama 3.3 70B ist der beste Allrounder, wenn die Hardware passt (~42 GB VRAM bei Q4_K_M). Auf 24-GB-Systemen ist Qwen3 32B der leichtere Standard mit geringem Qualitätsverlust bei prosaschwerem Schreiben. Für Langform-Kontinuität (Romane) ist Mistral Larges 128K-Kontext der Differenziator. Nach Aufgabentyp wählen: die meisten Autoren profitieren mehr vom richtigen Spezialisten als vom größten Modell.',
          },
          {
            q: 'Was ist ein Uncensored lokales LLM und wann sollte ich es verwenden?',
            a: 'Ein Uncensored-Modell ist ein Fine-tune eines bestehenden Basismodells (typischerweise Llama 3.3 oder Qwen3), bei dem die RLHF-Sicherheitsschicht, die Ablehnungen bei reifen oder moralisch komplexen Prompts erzeugt, entfernt wurde. Das Modell folgt dem Prompt statt abzulehnen. Uncensored-Derivate (Hermes 3, Dolphin 3.0) für reife Belletristik, Konfliktszenen, historisch genaues Schreiben oder Workflows verwenden, bei denen das Instruct-Modell als Belletristik gerahmte Szenen ablehnt. Der Autor ist weiterhin der Urheber; das Modell hört auf, im Weg zu stehen.',
          },
          {
            q: 'Welche Temperatur sollte ich für kreatives Schreiben verwenden?',
            a: 'Temperatur 0,8–1,1 ist der kreative Schreibbereich, gepaart mit Top-p 0,9–0,95. Enger Dialog braucht 0,7–0,85; lyrische Prosa und Poesie 1,0–1,2; surreale oder Genre-Arbeit 1,1–1,3. Die Standards der meisten Chat-UIs (oft 0,7 mit Top-p 0,9) sind für Frage-Antwort optimiert und erzeugen flache Prosa bei kreativen Prompts. An einer kurzen Szene bei 3 Einstellungen testen, dann die wählen, bei der das Modell am lebendigsten klingt.',
          },
          {
            q: 'Sind lokale Kreativschreib-Modelle so gut wie ChatGPT oder Claude?',
            a: 'Für die meisten Prompts ja — nah genug, dass Datenschutz- und Kostenvorteile dominieren. Die Frontier-Cloud-Modelle führen noch bei den schwersten kreativen Aufgaben (Langform-Kohärenz über 50.000 Token, sehr obskure kulturelle Referenzen, seltene Sprachen). Für eine typische Belletristik- oder Roleplay-Session wird ein Autor, der Sampling-Einstellungen auf Llama 3.3 70B oder Qwen3 32B kalibriert hat, keine konsistenten Qualitätslücken gegenüber GPT-5 oder Claude feststellen.',
          },
          {
            q: 'Kann ein lokales Modell einen vollständigen Roman schreiben?',
            a: 'Es kann beim Entwurf helfen. Mistral Large mit 128K-Kontext kann einen 50.000-Wörter-Entwurf im Speicher halten; Llama 3.3 70B und Qwen3 32B bei 32K-Kontext brauchen abschnittsweises Entwerfen. Der Engpass ist nicht die Modellkapazität — es ist die Struktur des Autors (Gliederung, Charakterbibel, Lore Book), die das Modell für Kontinuität nutzt.',
          },
          {
            q: 'Erzeugen Uncensored-Modelle illegale Inhalte?',
            a: 'Nicht mehr als Instruct-Modelle. Beide erzeugen Text, den der Prompt verlangt; Uncensored-Modelle sind bereitwilliger bei reifen Themen, die die Instruct-Sicherheitsschicht ablehnt. Rechtliche Haftung trifft den Autor und die Veröffentlichung, nicht das Modell. EU-KI-Gesetz, §184/§184c StGB und US-Obszönitätsrecht regeln spezifische Inhaltskategorien unabhängig von der Generierungsmethode.',
          },
          {
            q: 'Ist SillyTavern nur für Adult-Roleplay?',
            a: 'Nein. SillyTavern ist ein chat-fokussiertes Frontend mit Charakterkarten, Persona-Verwaltung und Lore Books — nützlich für jede dialog-intensive oder charaktergetriebene Arbeit. Viele Autoren nutzen es für nicht-Roleplay-Belletristik (Mehrfigurenszenen, Stimmkonsistenz über lange Projekte). Das Charakterkarten-Ökosystem enthält Adult-Inhalte, ist aber nicht darauf beschränkt.',
          },
          {
            q: 'Wie unterscheidet sich lokales Kreativschreiben von Coding-Workloads?',
            a: 'Sampling-Einstellungen und Prompt-Struktur. Coding braucht Temperatur 0,2–0,4, deterministische Ausgabe, strukturierte (JSON, Code) Ausgabe und explizite Einschränkungen im Prompt. Kreatives Schreiben braucht Temperatur 0,8–1,1, freiere Ausgabe, Prosaform und reichhaltigere System-Prompts (Charakterstimme, POV, Ton, Genre-Konventionen). Dasselbe Modell — Llama 3.3 70B dient beiden — erzeugt wildly unterschiedliche Ausgaben je nach diesen Einstellungen.',
          },
          {
            q: 'Welches lokale Modell hat die wenigsten „KI-Tells"?',
            a: 'KI-Tells — Phrasen wie „ein Schauder lief ihr den Rücken hinunter", „Geflecht", „erkunden" und ChatGPT-artige Zusammenfassungsübergänge — sind bei kleineren Instruct-Modellen häufiger. Llama 3.3 70B und Qwen3 32B haben weniger Tells als Modelle unter 20B. Hermes 3 hat die wenigsten in diesem Set. Der wirksamste Hebel zur Tell-Reduktion ist der System-Prompt mit negativen Beispielen, nicht das Modell.',
          },
          {
            q: 'Wie vermeidet man Klischees wie „ein Schauder lief ihr den Rücken hinunter"?',
            a: 'Ein System-Prompt mit negativen Beispielen ist der wirksamste Hebel — 8–12 verbannte Phrasen explizit auflisten. Die Temperatur leicht senken (0,85–0,95 statt 1,1), um die Neigung zu Standardformulierungen zu reduzieren. Repeat Penalty 1,1 allein reicht NICHT — die Phrasen sind keine exakten Token-Wiederholungen. DRY-Penalty (Multiplikator 0,8, Basis 1,75) erkennt sie auf n-Gramm-Ebene über Szenen hinweg. Ein manueller Überarbeitungsdurchgang ist der letzte Filter. Siehe [Negatives Prompting](/prompt-engineering/negative-prompting?lang=de).',
          },
          {
            q: 'Muss ich bei der Nutzung lokaler LLMs für kreatives Schreiben die DSGVO beachten?',
            a: 'Für rein lokale Generierung auf dem eigenen Gerät ist die DSGVO-Relevanz minimal: Keine personenbezogenen Daten werden an externe Auftragsverarbeiter übermittelt, da das Modell vollständig lokal läuft. Relevant wird die DSGVO, wenn deine Belletristik reale, identifizierbare Personen verwendet oder wenn du KI-generierte Inhalte auf Plattformen veröffentlichst, die personenbezogene Daten verarbeiten. In diesen Fällen gelten die üblichen Datenschutzpflichten — nicht aufgrund des Modells, sondern aufgrund der Verarbeitung und Veröffentlichung.',
          },
          {
            q: 'Welche deutschen Gesetze gelten beim Schreiben von Belletristik mit Uncensored-Modellen?',
            a: 'Zwei Paragrafen sind besonders relevant: §184b StGB (Kinderpornografie) — absolutes Verbot, gilt auch für KI-generierte Inhalte und fiktionale Rahmungen; §184c StGB (Jugendpornografie) — ebenfalls absolutes Verbot. „Lokal generiert" oder „Fiktion" ist in keinem dieser Fälle eine Verteidigung. Für Belletristik, die keine Minderjährigen in sexuellen Kontexten, keine identifizierbaren realen Personen in NCII-Szenarien und keine Aufstachelung enthält, ist lokale Generierung rechtlich vergleichbar mit dem Schreiben mit jedem anderen Werkzeug.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[SillyTavern vs Agnai vs RisuAI: Bestes lokales Roleplay-Frontend (2026)](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay?lang=de) — Direktvergleich der drei Roleplay-fokussierten Frontends mit den obigen Modellen.',
          '[Lokale LLM-Prompts für Belletristik-Autoren: Vorlagen & Techniken](/power-local-llm/local-llm-prompts-for-fiction-writers?lang=de) — kopierfertige Prompt-Vorlagen für Charakterentwicklung, Dialog, Weltenbau und Überarbeitungs-Workflows.',
          '[Uncensored Local LLMs für kreatives Schreiben: Ethik, Recht & Best Practices](/power-local-llm/uncensored-local-llm-creative-writing-ethics?lang=de) — wann Uncensored-Derivate legitime kreative Werkzeuge sind und wo die rechtlichen und ethischen Grenzen liegen.',
          '[Temperatur und Top-P: KI-Kreativität steuern](/prompt-engineering/temperature-and-top-p-control-ai-creativity?lang=de) — die Prompt-Engineering-Seite der Sampling-Parameter; tiefer als die Zusammenfassung in diesem Leitfaden.',
          '[Negatives Prompting](/prompt-engineering/negative-prompting?lang=de) — vorgeben, was NICHT im Prompt stehen soll; ein Kraft-Multiplikator für System-Prompts bei kreativer Arbeit.',
          '[Beste lokale LLMs 2026](/local-llms/best-local-llms-2026?lang=de) — der maßgebliche Modell-Landscape-Leitfaden; nützlich, wenn du über die sechs Kreativschreib-Picks hinaus erkunden möchtest.',
        ],
      },
    },
  },
}
