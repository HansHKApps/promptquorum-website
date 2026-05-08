// Power Local LLM — Replace Grammarly and Notion AI with a Local LLM (2026)
// Slug: replace-grammarly-notion-ai-with-local
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Productivity & Knowledge Tools',
    title: 'Replace Grammarly and Notion AI with a Local LLM (2026)',
    seoTitle: 'Replace Grammarly and Notion AI with Local LLM 2026',
    intro:
      'Grammarly and Notion AI send your writing to cloud servers for processing — your draft emails, confidential documents, and personal notes pass through third-party AI systems by design. A local LLM running through Ollama or LM Studio can replace both for most writing tasks: grammar and style correction, document drafting, content summarisation, and AI-assisted note-taking — with no data leaving your machine.',
    metaDescription:
      'Replace Grammarly and Notion AI with a local LLM: privacy, cost, and capability comparison. Setup guides for writing correction, document drafting, and note-taking automation.',
    twitterDescription:
      'Replace Grammarly (grammar/style correction) and Notion AI (document drafting, notes) with a local LLM — no data leaves your machine. Privacy, cost, and setup guide.',
    current_models_mentioned: [
      'Qwen3 14B',
      'Phi-4 Mini',
      'Llama 3.3 70B',
      'Mistral 7B',
    ],
    current_hardware_mentioned: [
      'Apple M3 MacBook Air 8 GB',
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 3060 12 GB',
    ],
    audience:
      'Knowledge workers, writers, students, and privacy-conscious professionals who use Grammarly for writing correction and Notion AI for document assistance, and want to replace both with a local AI that keeps their content private.',
    readTime: '11 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'replace Grammarly local LLM',
    targetKeywords: [
      'replace grammarly local llm',
      'replace notion ai local',
      'local llm writing assistant',
      'grammarly alternative no cloud',
      'notion ai alternative privacy',
      'ollama writing correction',
    ],
    leadAnswerBlock:
      '**A local LLM running through Ollama replaces the core functionality of both Grammarly and Notion AI with zero data leaving your machine. For Grammarly replacement: grammar and style correction via a prompt template ("Correct the grammar and improve the style of this paragraph. Return only the corrected text.") on any model from Phi-4 Mini upward. For Notion AI replacement: document drafting, content expansion, and AI Q&A over your notes via Obsidian with the Smart Connections plugin or the Copilot plugin pointed at Ollama. The privacy case is clear: Grammarly\'s terms of service grant them a licence to use your text for product improvement; Notion AI sends your documents to OpenAI\'s API. A local LLM processes the same tasks on your hardware with no external data transmission. The capability gap is narrow for everyday writing tasks; it is more visible on complex creative writing and nuanced tone adjustment, where Grammarly\'s domain-specific training gives it an edge over a general-purpose local model.**',
    quickAnswerTop: {
      en: {
        question: 'Can a local LLM replace Grammarly and Notion AI?',
        answer:
          'Yes, for most everyday use cases. For Grammarly: a local LLM handles grammar correction, clarity rewriting, passive-voice elimination, and basic tone adjustment. It does not match Grammarly\'s real-time inline suggestions or browser extension integration, but a prompt-based workflow covers the same corrections on demand. For Notion AI: Obsidian with the Copilot plugin pointed at Ollama replaces document drafting, content expansion, and AI Q&A over your notes. The privacy advantage is complete — no document content leaves your machine. Best local model for writing assistance: Qwen3 14B (best quality for writing tasks on 16 GB systems) or Phi-4 Mini (adequate quality, runs on 8 GB).',
        bullets: [
          'Grammar correction: any local model with a "correct grammar only, return corrected text" system prompt handles 90%+ of Grammarly\'s core use case.',
          'Style improvement: Qwen3 14B and Llama 3.3 70B produce better prose rewriting than Phi-4 Mini; worth the extra VRAM for serious writing work.',
          'Notion AI replacement: Obsidian + Copilot plugin (or Smart Connections plugin) pointed at Ollama — AI Q&A over notes, document drafting, content expansion.',
          'Real-time correction: local LLMs do not integrate into browser text fields the way Grammarly does. Workflow is copy-paste or a hotkey-triggered app.',
          'Privacy: Grammarly licences your text for product improvement; Notion AI sends to OpenAI. Local LLM processes locally with zero external transmission.',
          'Cost: Grammarly Premium is $12–30/month; Notion AI adds $8–10/month per user. Local LLM is free after the hardware cost.',
          'Best local model: Qwen3 14B for quality-first; Phi-4 Mini for speed and low VRAM.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'What You Are Replacing (and What You Are Not)', anchor: '#what-you-replace' },
      { label: 'Replacing Grammarly: Grammar and Style Correction', anchor: '#grammarly-replacement' },
      { label: 'Replacing Notion AI: Document Drafting and Notes', anchor: '#notion-replacement' },
      { label: 'Integration Options', anchor: '#integrations' },
      { label: 'Model Recommendations', anchor: '#models' },
      { label: 'Privacy Comparison', anchor: '#privacy' },
      { label: 'Cost Comparison', anchor: '#cost' },
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
          '**Local LLMs replace Grammarly\'s core function — grammar, clarity, and basic style correction — but not its real-time inline browser integration.** The workflow shifts from "corrections appear as you type" to "paste text → get corrected version → paste back". For many users this is an acceptable trade for full privacy.',
          '**Notion AI replacement is more complete.** Obsidian with the Copilot plugin (or Smart Connections plugin) pointed at a local Ollama instance matches Notion AI\'s document drafting, content expansion, and AI Q&A over notes — with all document content processed locally.',
          '**The privacy case is not theoretical.** Grammarly\'s terms of service grant them a broad licence to use submitted text for product improvement. Notion AI sends document content to OpenAI\'s API. Local LLMs process the same text on your hardware with no external transmission.',
          '**Qwen3 14B is the best local model for writing tasks on 16 GB systems.** It produces the most natural prose rewrites and tone adjustments of the locally-runnable models. Phi-4 Mini is the practical alternative on 8 GB systems — adequate for grammar correction, weaker on nuanced style.',
          '**Cost is a strong secondary argument.** Grammarly Premium ($12–30/month) + Notion AI ($8–10/user/month) is $20–40/month. The local LLM equivalent is free after the one-time hardware cost of running Ollama.',
          '**The capability gap narrows to two specific tasks.** Grammarly has measurably better real-time integration (inline corrections in Gmail, Google Docs, browser fields) and better domain-specific writing style suggestions (legal, academic, business). Outside those two cases, a well-prompted local model is equivalent.',
          '**Setup takes 20 minutes.** Ollama installation + model download + Obsidian plugin configuration is a one-time setup. After that, the workflow is as fast as the cloud alternatives.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Grammarly cost:** Free (limited), Premium $12/month, Business $15/user/month.',
          '**Notion AI cost:** $8/user/month (annual) on top of Notion subscription.',
          '**Local LLM cost:** Free (open-source models + Ollama) — hardware electricity only.',
          '**Best local model for writing (quality):** Qwen3 14B on 16 GB system.',
          '**Best local model for writing (speed/VRAM):** Phi-4 Mini on 8 GB system.',
          '**Grammarly privacy:** text submitted for correction is covered by a data licence for product improvement.',
          '**Notion AI privacy:** document content sent to OpenAI API; covered by Notion\'s data processing addendum.',
        ],
      },
      whatYouReplace: {
        id: 'what-you-replace',
        title: 'What You Are Replacing (and What You Are Not)',
        content:
          '**The realistic replacement covers ~80% of typical Grammarly and Notion AI use, but the 20% it does not cover matters for some users.** Understanding the gap before switching prevents disappointment.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A local LLM replaces Grammarly\'s grammar correction, style rewriting, and tone adjustment, and replaces Notion AI\'s document drafting and note Q&A — but does not replace Grammarly\'s real-time inline browser integration or Notion AI\'s native editor integration.',
          },
          {
            type: 'plain-terms',
            text: 'Grammarly works by watching every keystroke in your browser and showing corrections as you type. A local LLM cannot do that unless you build a custom browser extension. What it can do is correct any text you paste into it — so the workflow becomes: draft your email, select all, copy, paste into your local AI app or prompt tool, get the corrected version back, paste it into Gmail. Slower than inline corrections, but private and free.',
          },
        ],
        columns: ['Feature', 'Grammarly', 'Local LLM Equivalent', 'Gap'],
        rows: [
          { 'Feature': 'Grammar correction', 'Grammarly': 'Inline, real-time', 'Local LLM Equivalent': 'Prompt-based, on demand', 'Gap': 'No real-time inline; copy-paste workflow' },
          { 'Feature': 'Style suggestions', 'Grammarly': 'Inline with explanations', 'Local LLM Equivalent': 'Prompt-based rewrite', 'Gap': 'No per-suggestion explanations by default' },
          { 'Feature': 'Tone detection', 'Grammarly': 'Automatic, named tones', 'Local LLM Equivalent': 'Prompt-specified tone target', 'Gap': 'Requires explicit tone instruction' },
          { 'Feature': 'Browser extension', 'Grammarly': 'Works in Gmail, Google Docs, browser fields', 'Local LLM Equivalent': 'Copy-paste or OS-level hotkey app', 'Gap': 'No native browser integration' },
          { 'Feature': 'Notion AI: document drafting', 'Grammarly': 'N/A', 'Local LLM Equivalent': 'Obsidian + Copilot plugin → Ollama', 'Gap': 'Not embedded in Notion UI; separate app' },
          { 'Feature': 'Notion AI: Q&A over notes', 'Grammarly': 'N/A', 'Local LLM Equivalent': 'Obsidian Smart Connections → Ollama', 'Gap': 'Requires Obsidian vault; no Notion DB search' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The integration gap matters most if you write in Gmail, Google Docs, or other browser-based editors where Grammarly shows inline corrections. If you write primarily in desktop apps (Word, Obsidian, VS Code, Scrivener), the copy-paste workflow with a local LLM is barely slower than inline suggestions. Know your writing environment before deciding.',
          },
        ],
      },
      grammarlyReplacement: {
        id: 'grammarly-replacement',
        title: 'Replacing Grammarly: Grammar and Style Correction',
        content:
          '**The Grammarly replacement workflow is two prompt templates and a keyboard shortcut app.** One template for grammar-only correction; one for full style rewrite. Both take 2–5 seconds on Phi-4 Mini, 1–3 seconds on Qwen3 14B.',
        promptExamples: [
          {
            label: 'Grammar Correction Only (Grammarly Basic Replacement)',
            text: 'Correct the grammar, spelling, and punctuation of the following text. Return only the corrected text — no explanation, no markup, no summary.\n\n[paste your text]',
          },
          {
            label: 'Style and Clarity Rewrite (Grammarly Premium Replacement)',
            text: 'Rewrite the following text for clarity and professional tone. Fix grammar, remove passive voice, tighten long sentences, and eliminate filler phrases. Return only the rewritten text.\n\nTarget tone: [professional / casual / academic / persuasive]\nTarget audience: [general / technical / executive]\n\n[paste your text]',
          },
          {
            label: 'Tone Adjustment Prompt',
            text: 'Rewrite the following email to be [more formal / more casual / more concise / more diplomatic]. Keep all factual content identical. Return only the rewritten email.\n\n[paste your email]',
          },
        ],
        items: [
          '**System prompt for writing sessions:** set your local AI app\'s system prompt to "You are a professional editor. Return only corrected or rewritten text — no preamble, no explanation, no commentary." This prevents the model from adding "Great text! Here is my correction..." before the output.',
          '**Keyboard shortcut integration:** use Raycast (macOS) or AutoHotkey (Windows) to create a hotkey that sends selected text to Ollama and pastes the result. This reduces the copy-paste workflow to a single keystroke.',
          '**Grammar-only vs. style rewrite:** use separate prompts for grammar-only and full style rewrites. Grammar-only is safer for legal, technical, or structured documents where changing phrasing could change meaning. Style rewrite is appropriate for emails, blog posts, and general correspondence.',
          '**For academic writing:** add "Preserve all citations, technical terms, and domain vocabulary unchanged" to the style rewrite prompt. Without this instruction, models will sometimes simplify or paraphrase technical language.',
          '**For business email:** add "The sender is [Name], [Role] at [Company]. The email should reflect their professional voice without personalisation details in the output." This anchors the register to the sender\'s professional context.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The most efficient Grammarly replacement workflow on macOS: install Ollama, pull Qwen3 14B, and create a Raycast AI command with the grammar correction prompt. Highlight any text in any app, trigger the Raycast hotkey, and the corrected version replaces the selection. This matches the speed of Grammarly inline corrections for most paragraph-length corrections.',
          },
        ],
      },
      notionReplacement: {
        id: 'notion-replacement',
        title: 'Replacing Notion AI: Document Drafting and Notes',
        content:
          '**Obsidian with a local Ollama backend is the closest functional equivalent to Notion AI for note-takers and knowledge workers.** It does not replicate the Notion database structure, but for document drafting and AI Q&A over your notes, the capability is equivalent — with all processing local.',
        items: [
          '**Install Obsidian** from obsidian.md. Free for personal use. Create a vault for your notes — this is the directory that the AI plugins will index.',
          '**Install the Copilot plugin** (Community Plugins → search "Copilot"). In plugin settings, select "Ollama" as the LLM provider, enter `http://localhost:11434` as the base URL, and select your model. Copilot adds a chat sidebar to Obsidian where you can ask questions and generate content in context of the current note.',
          '**Install the Smart Connections plugin** for Q&A over your full vault. Smart Connections indexes all your notes as embeddings using a local embedding model (nomic-embed-text via Ollama) and lets you ask questions that retrieve relevant notes before sending to the LLM. This is the direct Notion AI "ask about my notes" replacement.',
          '**Document drafting:** in the Copilot chat, type "Draft a [document type] about [topic] based on these notes: [paste key points]". The plugin includes the current note context automatically. Output appears in the chat; copy-paste into the note.',
          '**Content expansion:** select a bullet-point outline in the note, open the Copilot command palette, and use "Expand selection" — the model converts the outline to prose in the note\'s writing register.',
          '**Weekly review generation:** "Summarise my notes from this week into a weekly review format: wins, blockers, and next actions." Smart Connections retrieves notes from the last 7 days and passes them to the LLM automatically.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obsidian with the Copilot or Smart Connections plugin pointed at a local Ollama instance replaces Notion AI for document drafting, content expansion, and AI Q&A over your notes — with all processing local and no content transmitted to any external server.',
          },
          {
            type: 'plain-terms',
            text: 'The setup: install Obsidian, install Ollama, pull Qwen3 14B, install the Copilot community plugin in Obsidian, point it at localhost:11434. That\'s the full replacement for Notion AI\'s AI features. Your notes stay in your vault folder (plain markdown files, fully portable). The AI chat runs on your machine. Nothing leaves your computer.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Obsidian stores notes as plain markdown files in a folder you control. Unlike Notion\'s proprietary database format, your notes are readable in any text editor and exportable at any time. This is a secondary privacy and portability advantage over Notion — your knowledge base is not locked into a cloud platform.',
          },
        ],
      },
      integrations: {
        id: 'integrations',
        title: 'Integration Options',
        content:
          '**Three integration levels: basic (copy-paste), intermediate (hotkey app), and advanced (browser extension or OS-level AI layer).** Start at the level that matches your technical comfort.',
        columns: ['Integration Level', 'How', 'Apps', 'Best For'],
        rows: [
          { 'Integration Level': 'Basic (copy-paste)', 'How': 'Open local AI app, paste text, copy result', 'Apps': 'LM Studio chat, Ollama CLI, Open WebUI', 'Best For': 'Occasional corrections; any OS' },
          { 'Integration Level': 'Intermediate (hotkey)', 'How': 'Select text → hotkey → corrected version replaces selection', 'Apps': 'Raycast AI (macOS), AutoHotkey + Ollama (Windows)', 'Best For': 'Frequent corrections in any app; minimal workflow change' },
          { 'Integration Level': 'Intermediate (writing app)', 'How': 'AI assistant built into the writing tool', 'Apps': 'Obsidian + Copilot plugin, VS Code + Continue.dev', 'Best For': 'Writers and developers who live in these apps' },
          { 'Integration Level': 'Advanced (browser extension)', 'How': 'Custom extension sends selected text to local Ollama API', 'Apps': 'Custom Chrome/Firefox extension (open-source templates on GitHub)', 'Best For': 'Power users who want Grammarly-style browser integration' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'On macOS, Raycast with a custom AI command is the fastest intermediate integration. Install Raycast (free), go to Extensions → AI Commands → New Command, paste the grammar correction prompt, and assign a hotkey. Select any text in any app → press the hotkey → corrected text replaces the selection. Achieves ~80% of Grammarly\'s speed benefit with full local privacy.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Model Recommendations for Writing Tasks',
        content:
          '**Writing assistance favours models with strong instruction following and coherent prose output.** The ranking differs from the coding or math model rankings.',
        columns: ['Task', 'Best Model', 'Alternative (lower VRAM)', 'Why'],
        rows: [
          { 'Task': 'Grammar correction', 'Best Model': 'Qwen3 14B', 'Alternative (lower VRAM)': 'Phi-4 Mini', 'Why': 'Accurate, minimal unnecessary changes, correct punctuation' },
          { 'Task': 'Style rewrite', 'Best Model': 'Qwen3 14B or Llama 3.3 70B', 'Alternative (lower VRAM)': 'Mistral 7B', 'Why': 'Natural prose output; avoids AI-register drift' },
          { 'Task': 'Tone adjustment', 'Best Model': 'Llama 3.3 70B', 'Alternative (lower VRAM)': 'Qwen3 14B', 'Why': 'Best at maintaining factual content while changing register' },
          { 'Task': 'Document drafting (Notion AI replacement)', 'Best Model': 'Qwen3 14B', 'Alternative (lower VRAM)': 'Phi-4 Mini', 'Why': 'Good structure generation, follows document-format instructions' },
          { 'Task': 'Note summarisation / Q&A', 'Best Model': 'Qwen3 14B', 'Alternative (lower VRAM)': 'Phi-4 Mini', 'Why': 'Adequate for summarisation at any model size above 3B' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Set a "no AI-sounding phrases" instruction in your system prompt. Models default to hedged, AI-register language ("Certainly! Here is the corrected version..."). A system prompt of "Return only the corrected text, no preamble, no commentary" eliminates this. For style rewrites, add "Do not use the phrases \'delve into\', \'tapestry\', \'fostering\', \'realm of\', or \'it\'s worth noting\'".',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy Comparison',
        content:
          '**The privacy difference between cloud writing assistants and local LLMs is structural.** Cloud services cannot process your text without receiving it; local LLMs cannot send your text anywhere without an explicit outbound connection.',
        items: [
          '**Grammarly data licence:** Grammarly\'s Terms of Service (Section 5) grant them "a worldwide, non-exclusive, royalty-free licence [...] to use, reproduce, modify, adapt, publish, translate, distribute" submitted text for product improvement and safety. This is not hidden, but it means every sentence you correct in Grammarly is potentially in their training pipeline.',
          '**Notion AI data flow:** Notion sends document content to OpenAI\'s API for AI features. Covered by Notion\'s Data Processing Addendum, which provides contractual protections — but the data still leaves Notion\'s servers and enters OpenAI\'s infrastructure.',
          '**Local LLM data flow:** zero. Ollama binds to localhost by default. No outbound connection is made during inference. The model weights are static files on disk. Your text is tokenised in memory, processed, and discarded. No log, no cache, no external service.',
          '**GDPR / professional privilege implications:** legal professionals, medical practitioners, and anyone subject to confidentiality obligations cannot use Grammarly or Notion AI for client-related content without specific contractual protections. Local LLMs have no such constraint because no data leaves the machine.',
          '**Telemetry:** Grammarly collects typing behaviour, document metadata, and usage patterns in addition to text content. Notion collects interaction data and feature usage. Ollama has optional anonymous crash reporting (opt-out). Local AI apps (LM Studio, Jan) have opt-out telemetry for analytics — chat content is never included.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'If you use Grammarly for work correspondence, contract drafts, or any content under confidentiality obligations — check your organisation\'s data policy and Grammarly\'s enterprise data agreements before assuming the content is protected. Grammarly Business includes a Zero-Data Retention option, but it requires the Business tier and explicit opt-in.',
          },
        ],
      },
      cost: {
        id: 'cost',
        title: 'Cost Comparison',
        content:
          '**Replacing both tools eliminates $20–40/month in subscription costs.** The local LLM setup is free for software; the only ongoing cost is electricity.',
        columns: ['Tool', 'Monthly Cost', 'Annual Cost', 'Notes'],
        rows: [
          { 'Tool': 'Grammarly Free', 'Monthly Cost': '$0', 'Annual Cost': '$0', 'Notes': 'Limited to basic grammar; no style or tone features' },
          { 'Tool': 'Grammarly Premium', 'Monthly Cost': '$12–30/mo', 'Annual Cost': '$144–360/yr', 'Notes': 'Full grammar + style + tone; browser extension' },
          { 'Tool': 'Notion AI', 'Monthly Cost': '$8–10/user/mo', 'Annual Cost': '$96–120/yr', 'Notes': 'Add-on to existing Notion subscription' },
          { 'Tool': 'Ollama (local LLM)', 'Monthly Cost': '$0', 'Annual Cost': '$0', 'Notes': 'Free and open-source; electricity ~$1–5/month depending on usage' },
          { 'Tool': 'Obsidian (Notion replacement)', 'Monthly Cost': '$0 (personal)', 'Annual Cost': '$0', 'Notes': 'Free for personal; $50/yr for commercial use' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'If you are on the fence about switching, start by moving just grammar correction to a local model for 30 days. Keep Grammarly active for the browser integration. Evaluate whether the local correction quality and copy-paste workflow is acceptable for your writing. Only then decide whether to cancel Grammarly. The Notion AI switch is lower-friction if you are willing to use Obsidian as the note-taking layer.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**No system prompt for output format.** Without a system prompt, models prefix corrections with "Certainly! Here is the corrected text:", add explanations, and use AI-register phrasing. Always set a system prompt that specifies "return only the corrected text".',
          '**Using Phi-4 Mini for complex style rewrites.** Phi-4 Mini handles grammar correction well but produces more formulaic style rewrites than Qwen3 14B. For style-heavy work, use the larger model.',
          '**Expecting Notion UI equivalence from Obsidian.** Obsidian is a Markdown editor, not a database. If your Notion workflow depends on databases, views, and relations, Obsidian is not a full Notion replacement — only the AI features transfer. Evaluate whether the database features are critical before switching.',
          '**Not setting a word ceiling on style rewrites.** Without a ceiling, the model pads rewrites. Add "Keep the rewritten text within 10% of the original word count" to any style rewrite prompt.',
          '**Sending full documents to a small model.** Phi-4 Mini (3.8B) loses coherence on documents over ~3,000 words. For long documents, break them into sections and correct each section independently. Qwen3 14B handles 8,000+ words reliably.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Grammarly Terms of Service — Section 5 (data licence) — [grammarly.com/terms](https://www.grammarly.com/terms)',
          'Notion AI Data Processing Addendum — [notion.so/help/notion-ai](https://www.notion.so/help/notion-ai)',
          'Obsidian Copilot plugin documentation — [GitHub: logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot)',
          'Obsidian Smart Connections plugin — [GitHub: brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections)',
          'Ollama data handling and telemetry — [ollama.com/privacy](https://ollama.com/privacy)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is a local LLM as good as Grammarly at grammar correction?',
            a: 'For most everyday grammar, punctuation, and spelling errors: yes, Qwen3 14B is equivalent to Grammarly Premium. Where Grammarly maintains an advantage: real-time inline corrections as you type, domain-specific style guides (Grammarly supports APA, MLA, Chicago), and the browser extension that works across Gmail, Google Docs, and other web apps. A local LLM requires a copy-paste workflow for text in browser fields.',
          },
          {
            q: 'Can I use Obsidian as a full Notion replacement?',
            a: 'Obsidian replaces Notion\'s note-taking and knowledge-base features well. It does not replace Notion\'s database, project management, and relational data features. If your Notion use is primarily notes, documents, and wikis — Obsidian is a full replacement. If you rely on Notion databases, board views, or relational properties — you would need additional tools (Anytype, Capacities, or Notion itself for the database layer with Obsidian for writing).',
          },
          {
            q: 'Which local model is closest to Grammarly\'s writing suggestions?',
            a: 'Qwen3 14B produces the most Grammarly-like output for grammar and style corrections — it is precise, avoids unnecessary changes, and maintains the original voice. Llama 3.3 70B produces slightly more natural prose in complex rewrites but requires more VRAM. Phi-4 Mini is adequate for simple grammar correction but over-simplifies on style rewrites.',
          },
          {
            q: 'Does the Obsidian Copilot plugin send my notes to the cloud?',
            a: 'Not when configured to use a local Ollama instance. The plugin supports both cloud LLMs (OpenAI, Anthropic) and local Ollama. When you select Ollama as the LLM provider and enter the localhost URL, all AI processing is done locally. No note content is transmitted externally. Confirm this by monitoring network traffic with a tool like Little Snitch (macOS) or Wireshark if you need audit-grade verification.',
          },
          {
            q: 'Can I use a local LLM in Google Docs or Gmail?',
            a: 'Not directly — there is no local LLM browser extension equivalent to Grammarly that integrates natively into browser text fields. The workaround options are: (1) select text in Google Docs, copy, paste into your local AI app, copy the corrected version, paste back into Google Docs; (2) on macOS, use Raycast with a custom AI command that processes selected text and replaces it; (3) a custom Chrome extension that reads selected text and calls the local Ollama API (open-source templates exist on GitHub). None of these matches Grammarly\'s seamless inline experience.',
          },
          {
            q: 'Is this setup HIPAA or GDPR compliant for professional use?',
            a: 'A local LLM that processes data exclusively on your machine without external transmission addresses the core data-transfer concern for both HIPAA and GDPR. However, compliance depends on your full technology stack, security controls, and specific regulatory requirements. A local LLM is not automatically compliant — you need to assess endpoint security, physical device protection, and access controls. For formal compliance, consult your compliance officer. Local processing removes the "third-party data processor" concern but does not substitute for a complete compliance programme.',
          },
          {
            q: 'What is the best local writing assistant for academic papers?',
            a: 'Qwen3 14B with a system prompt that specifies "Correct grammar and punctuation only — do not change vocabulary, sentence structure, or content. Preserve all citations, technical terms, and field-specific language unchanged." This matches Grammarly\'s grammar-only mode, which is the safest setting for academic writing where changing phrasing could inadvertently alter meaning or appear to modify cited content.',
          },
          {
            q: 'Can I replace Notion AI\'s meeting notes summarisation locally?',
            a: 'Yes. Export meeting notes as a text or markdown file (or paste transcript text directly). Use the prompt: "Summarise these meeting notes into: (1) Key decisions made, (2) Action items with owners, (3) Open questions. Use bullet points for each section. Keep it under 300 words." Any model from Phi-4 Mini upward handles meeting summarisation reliably. For recurring meetings, create a saved prompt template in your local AI app.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local LLM Email and Calendar Automation](/power-local-llm/local-llm-email-and-calendar-automation) — automating email drafting and calendar management with local LLMs, complementing the writing assistant setup.',
          '[Local LLM Prompts for Fiction Writers](/power-local-llm/local-llm-prompts-for-fiction-writers) — prompt templates for creative writing tasks that go beyond grammar correction into scene-writing and character development.',
          '[Replace Zapier with Local AI Agents](/power-local-llm/replace-zapier-with-local-ai-agents) — local workflow automation that connects writing tools to other business processes.',
          '[Local RAG for Private Business Data](/power-local-llm/local-rag-for-private-business-data) — Q&A over private business documents, extending the note Q&A use case to larger document libraries.',
          '[Easiest Local AI App for Windows, Mac, and Linux](/power-local-llm/easiest-local-ai-app-windows-mac-linux) — if you need to set up your first local AI app before implementing the writing assistant workflow.',
          '[Local AI Agents for Business Workflows: EU Compliance](/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — GDPR and EU AI Act context for deploying local AI writing assistants in European business settings.',
        ],
      },
    },
  },
}
