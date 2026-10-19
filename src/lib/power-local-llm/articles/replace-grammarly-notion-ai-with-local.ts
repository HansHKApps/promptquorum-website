// Power Local LLM — Replace Grammarly and Notion AI with a Local LLM (2026)
// Slug: replace-grammarly-notion-ai-with-local
// EN, DE, FR, JA, ZH translations.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/replace-grammarly-notion-ai-with-local-overview-hero-en.webp',
    title: 'Replace Grammarly and Notion AI with a Local LLM (2026)',
    seoTitle: 'Local Grammarly Alternative: Best Small LLMs 2026',
    intro:
      'Grammarly and Notion AI process your writing on cloud servers — your draft emails, confidential documents, and personal notes pass through third-party systems by design. A local LLM running through Ollama or LM Studio can replace both for most writing tasks: grammar and style correction, document drafting, content summarisation, and AI-assisted note-taking — with no text leaving your machine. This guide covers which small models correct grammar well, what works in Google Docs and Notion, and where the gap to Grammarly remains.',
    metaDescription:
      'Local Grammarly alternative: best small LLMs for grammar correction, Google Docs and Notion options, and Ollama setups that keep your text on your machine.',
    twitterDescription:
      'Replace Grammarly and Notion AI with a local LLM: best small models for grammar correction, Google Docs and Notion options, Ollama setup — no text leaves your machine.',
    current_models_mentioned: [
      'Qwen3.5 4B',
      'Gemma 4 E4B',
      'Gemma 4 12B',
      'Qwen3.8 27B',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M3 MacBook Air 8 GB',
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 3060 12 GB',
    ],
    audience:
      'Knowledge workers, writers, students, and privacy-conscious professionals who use Grammarly for writing correction and Notion AI for document assistance, and want to replace both with a local AI that keeps their content private.',
    readTime: '13 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'replace Grammarly local LLM',
    targetKeywords: [
      'replace grammarly local llm',
      'local grammarly alternative',
      'best llm for grammar correction',
      'small llm grammar correction',
      'replace notion ai local',
      'notion ollama',
      'local llm writing assistant',
      'grammarly alternative no cloud',
      'notion ai alternative privacy',
      'ollama writing correction',
    ],
    leadAnswerBlock:
      '**A local LLM running through Ollama replaces the core of Grammarly and Notion AI without sending your text to a cloud service. For Grammarly: grammar and style correction through a prompt template ("Correct the grammar and improve the style of this paragraph. Return only the corrected text.") on any model from Qwen3.5 4B upward. For Notion AI: document drafting and Q&A over your notes via Obsidian with the Copilot or Smart Connections plugin pointed at Ollama. The privacy case is concrete: Grammarly\'s Terms of Service (Section 7.2) grant it a licence to your content for operating and improving its services, and Notion AI routes requests to third-party model providers, while a local model processes the same text on your own hardware. The gap is narrow for everyday writing and widest in two places: as-you-type checking inside Google Docs, Gmail, and other browser editors, and domain-specific style suggestions.**',
    quickAnswerTop: {
      en: {
        question: 'Can a local LLM replace Grammarly and Notion AI?',
        answer:
          'Yes, for most everyday use cases. For Grammarly: a local LLM handles grammar correction, clarity rewriting, passive-voice elimination, and basic tone adjustment. It does not match Grammarly\'s real-time inline suggestions or browser extension integration, but a prompt-based workflow covers the same corrections on demand. For Notion AI: Obsidian with the Copilot plugin pointed at Ollama replaces document drafting, content expansion, and AI Q&A over your notes. Notion does not document a way to point Notion AI at a local model. Starting points: Qwen3.5 4B (about 3–4 GB download, 8 GB systems), Gemma 4 12B (16 GB systems) or Qwen3.8 27B (24 GB and up) — no grammar-specific benchmark ranks them, so test two on your own paragraphs.',
        bullets: [
          'Grammar correction: any local instruction-following model with a "correct grammar only, return corrected text" system prompt covers Grammarly\'s core correction use case.',
          'Small models: Qwen3.5 4B and Phi-4 Mini fit 8 GB machines; Gemma 4 12B is the step up for style rewrites on 16 GB.',
          'Notion AI replacement: Obsidian + Copilot plugin (or Smart Connections plugin) pointed at Ollama — AI Q&A over notes, document drafting, content expansion.',
          'Real-time correction: local LLMs do not underline errors as you type in Google Docs or Gmail. Use a hotkey/sidebar workflow, or a local rule-based checker such as Harper for inline underlines in supported editors.',
          'Privacy: Grammarly licenses your content under Section 7.2 of its Terms; Notion AI sends requests to third-party model providers. A local LLM processes locally with no external transmission.',
          'Cost: Grammarly Pro starts around $12/month (billed annually); Notion AI is bundled into the Business plan (about $20/user/month). A local LLM is free after the hardware cost.',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'What You Are Replacing (and What You Are Not)', anchor: '#what-you-replace' },
      { label: 'Replacing Grammarly: Grammar and Style Correction', anchor: '#grammarly-replacement' },
      { label: 'Best Small LLMs for Local Grammar Correction', anchor: '#small-models-grammar' },
      { label: 'Google Docs, Gmail, and Inline Checking Without the Cloud', anchor: '#google-docs-inline' },
      { label: 'Replacing Notion AI: Document Drafting and Notes', anchor: '#notion-replacement' },
      { label: 'Notion and Ollama: What Connects and What Does Not', anchor: '#notion-ollama' },
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
          '**Local LLMs replace Grammarly\'s core function — grammar, clarity, and basic style correction — but not its real-time inline integration.** The workflow shifts from "corrections appear as you type" to "select text → get corrected version → paste back". For many users this is an acceptable trade for full privacy.',
          '**Notion AI replacement is more complete, but it means leaving Notion\'s AI.** Notion does not document a way to point Notion AI at a local model. Obsidian with the Copilot plugin (or Smart Connections plugin) pointed at a local Ollama instance matches document drafting, content expansion, and AI Q&A over notes — with all processing local. Staying in Notion is possible only by running the AI step yourself through the Notion API.',
          '**The privacy case is not theoretical.** Grammarly\'s Terms of Service (Section 7.2) grant it a licence to your content for operating, improving, and developing its services. Notion AI sends requests to third-party model providers; Notion states that by default neither it nor its providers train on customer data. A local LLM processes the same text on your hardware with no external transmission.',
          '**Small models are enough for grammar.** Qwen3.5 4B and Phi-4 Mini fit 8 GB machines; Gemma 4 12B suits 16 GB systems and style rewrites. No published benchmark ranks them for grammar correction, so run two models on your own paragraphs before settling.',
          '**For inline underlines, add a rule-based checker.** Harper (local, English only) and a self-hosted LanguageTool server underline errors as you type in supported editors. Google Docs is not listed as supported by Harper, so there the workflow stays select → rewrite → paste.',
          '**Cost is a secondary argument.** Grammarly Pro starts around $12/month billed annually; Notion AI is now part of the Business plan (about $20/user/month) rather than a separate add-on. The local LLM equivalent is free after the one-time hardware cost.',
          '**Setup takes about 20 minutes.** Ollama installation + model download + Obsidian plugin configuration is a one-time setup.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Grammarly cost:** Free (100 AI prompts/month), Pro from about $12/month billed annually (2,000 AI prompts/month), Enterprise custom.',
          '**Notion AI cost:** included in the Business plan (about $20/user/month billed annually); Free and Plus plans get a trial only.',
          '**Local LLM cost:** Free (open-source models + Ollama) — hardware electricity only.',
          '**Small-model starting points:** Qwen3.5 4B (`qwen3.5:4b`) or Phi-4 Mini (`phi4-mini`) on 8 GB; Gemma 4 12B (`gemma4:12b`) on 16 GB; Qwen3.8 27B (`qwen3.8:27b`) on 24 GB and up.',
          '**Grammarly privacy:** Terms of Service Section 7.2 licenses your content for operating, improving, and developing Grammarly\'s services.',
          '**Notion AI privacy:** requests go to third-party model providers; by default neither Notion nor its providers train on customer data.',
          '**Obsidian cost:** free for personal and work use since February 2025.',
        ],
      },
      whatYouReplace: {
        id: 'what-you-replace',
        title: 'What You Are Replacing (and What You Are Not)',
        content:
          '**A local LLM covers most everyday Grammarly and Notion AI use, but the part it does not cover matters for some users.** Understanding the gap before switching prevents disappointment.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A local LLM replaces Grammarly\'s grammar correction, style rewriting, and tone adjustment, and replaces Notion AI\'s document drafting and note Q&A — but does not replace Grammarly\'s real-time inline integration or Notion AI\'s native editor integration.',
          },
          {
            type: 'plain-terms',
            text: 'Grammarly works by watching what you type in your browser or desktop and showing corrections as you go. A local LLM cannot do that on its own. What it can do is correct any text you hand it — so the workflow becomes: draft your email, select the text, send it to your local AI app or hotkey tool, get the corrected version back, paste it into Gmail. Slower than inline corrections, but private and free.',
          },
        ],
        columns: ['Feature', 'Grammarly', 'Local LLM Equivalent', 'Gap'],
        rows: [
          { 'Feature': 'Grammar correction', 'Grammarly': 'Inline, real-time', 'Local LLM Equivalent': 'Prompt-based, on demand', 'Gap': 'No real-time inline; copy-paste workflow' },
          { 'Feature': 'Style suggestions', 'Grammarly': 'Inline with explanations', 'Local LLM Equivalent': 'Prompt-based rewrite', 'Gap': 'No per-suggestion explanations by default' },
          { 'Feature': 'Tone detection', 'Grammarly': 'Automatic, named tones', 'Local LLM Equivalent': 'Prompt-specified tone target', 'Gap': 'Requires explicit tone instruction' },
          { 'Feature': 'Browser extension', 'Grammarly': 'Works in Gmail, Google Docs, browser fields', 'Local LLM Equivalent': 'Copy-paste, hotkey, or sidebar app', 'Gap': 'No native browser integration' },
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
          '**The Grammarly replacement workflow is a few prompt templates and a keyboard shortcut app.** One template for grammar-only correction; one for full style rewrite; one for tone. On typical laptop hardware, paragraph-length text comes back in a few seconds; speed depends on model size and hardware.',
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
          {
            label: 'Personal Style Profile (analyse your own writing locally)',
            text: 'Below are three samples of my writing. Describe my style in 8 bullet points: typical sentence length, vocabulary level, tone, constructions I favour, punctuation habits, and what I avoid. Then write a 100-word system prompt that makes an editor model correct text while keeping this style.\n\nSample 1: [paste]\nSample 2: [paste]\nSample 3: [paste]',
          },
        ],
        items: [
          '**System prompt for writing sessions:** set your local AI app\'s system prompt to "You are a professional editor. Return only corrected or rewritten text — no preamble, no explanation, no commentary." This prevents the model from adding "Great text! Here is my correction..." before the output.',
          '**Keyboard shortcut integration:** use Raycast (macOS) or AutoHotkey (Windows) to create a hotkey that sends selected text to Ollama and pastes the result. This reduces the copy-paste workflow to a single keystroke. Note that Raycast lists local-model support as a Pro feature in its manual; an AutoHotkey script calling the Ollama API is free.',
          '**Grammar-only vs. style rewrite:** use separate prompts for grammar-only and full style rewrites. Grammar-only is safer for legal, technical, or structured documents where changing phrasing could change meaning. Style rewrite is appropriate for emails, blog posts, and general correspondence.',
          '**For academic writing:** add "Preserve all citations, technical terms, and domain vocabulary unchanged" to the style rewrite prompt. Without this instruction, models will sometimes simplify or paraphrase technical language.',
          '**For business email:** add "The sender is [Name], [Role] at [Company]. The email should reflect their professional voice without personalisation details in the output." This anchors the register to the sender\'s professional context.',
          '**Analyse your own style locally:** the style-profile prompt above turns three writing samples into a reusable system prompt. Because the samples never leave your machine, it is safe to use on private drafts, which a cloud assistant would first have to receive.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A fast macOS workflow: install Ollama, pull a model such as Gemma 4 12B, and create a Raycast AI command with the grammar correction prompt (local models in Raycast need a Pro subscription). Highlight text in any app, trigger the hotkey, and the corrected version replaces the selection. On Windows, an AutoHotkey script that posts the selection to the Ollama API achieves the same without a subscription.',
          },
        ],
      },
      smallModelsGrammar: {
        id: 'small-models-grammar',
        title: 'Best Small LLMs for Local Grammar Correction',
        content:
          '**For grammar correction, start with Qwen3.5 4B on 8 GB machines and Gemma 4 12B on 16 GB machines; both follow "return only the corrected text" instructions and run on ordinary laptops.** Grammar fixing is mostly instruction following: the model must change as little as possible and return nothing but the corrected text.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The best small LLM for local grammar correction is the smallest instruction-following model that fixes your errors without rewording what was already correct — Qwen3.5 4B, Phi-4 Mini, and Gemma 4 12B are sensible starting points, and no published benchmark ranks them for grammar.',
          },
          {
            type: 'plain-terms',
            text: 'Grammar correction does not need a big model. It needs a model that obeys "fix errors only". Install two candidates, paste the same five paragraphs into both, and keep the one that changes the least while catching your mistakes. That test takes ten minutes and tells you more than any leaderboard.',
          },
        ],
        columns: ['Model', 'Ollama tag', 'Download', 'Fits', 'Best for'],
        rows: [
          { 'Model': 'Phi-4 Mini', 'Ollama tag': 'phi4-mini', 'Download': '~2.5 GB', 'Fits': '8 GB RAM', 'Best for': 'Fast, simple corrections; mostly English' },
          { 'Model': 'Qwen3.5 4B', 'Ollama tag': 'qwen3.5:4b', 'Download': '~3.3–4 GB', 'Fits': '8 GB RAM', 'Best for': 'Grammar-only fixes, short emails, many languages' },
          { 'Model': 'Gemma 4 E4B', 'Ollama tag': 'gemma4:e4b', 'Download': '~6.6–9.5 GB', 'Fits': '16 GB RAM', 'Best for': 'Multilingual text, light style edits' },
          { 'Model': 'Gemma 4 12B', 'Ollama tag': 'gemma4:12b', 'Download': '~7.7–8 GB', 'Fits': '16 GB RAM', 'Best for': 'Style rewrites and tone adjustment' },
          { 'Model': 'Qwen3.8 27B', 'Ollama tag': 'qwen3.8:27b', 'Download': '~18 GB', 'Fits': '24 GB+ RAM/VRAM', 'Best for': 'Long, nuanced rewrites' },
        ],
        items: [
          '**No grammar-specific benchmark ranks these models.** Vendors publish general instruction-following results, not grammar-correction accuracy. Judge by your own text.',
          '**What to check in the test:** over-correction (wording that was fine got changed), changed meaning (numbers, names, negations), kept spelling variant (British vs. American), and whether the model returns only the text.',
          '**Languages:** Qwen3.5 and Gemma 4 are multilingual; Phi-4 Mini is aimed mainly at English. For non-English text, test in your language first.',
          '**Keep it deterministic:** a low temperature (around 0.2) reduces creative rewording. The Modelfile below bakes the editor instructions and temperature into a reusable model.',
          '**Long documents:** small models drift on long inputs. Correct section by section instead of pasting a whole document.',
        ],
        codeBlock:
          'FROM qwen3.5:4b\nPARAMETER temperature 0.2\nSYSTEM """You are a copy editor. Fix grammar, spelling, and punctuation only. Keep the author\'s wording, meaning, and spelling variant. Return only the corrected text."""\n\n# then run:\n#   ollama create grammar-fix -f Modelfile\n#   ollama run grammar-fix',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'If a model prints its reasoning or a preamble before the corrected text, switch to a non-reasoning variant or another model. A grammar tool that adds commentary to every answer is slower than copy-editing by hand.',
          },
        ],
      },
      googleDocsInline: {
        id: 'google-docs-inline',
        title: 'Google Docs, Gmail, and Inline Checking Without the Cloud',
        content:
          '**None of the local tools reviewed here lists Google Docs as a supported editor, so the practical Google Docs setup is a hotkey or sidebar for LLM rewrites, plus a local rule-based checker for inline underlines where it is supported.** An LLM and a rule-based checker do different jobs: the LLM rewrites on request, the checker underlines mistakes as you type.',
        columns: ['Tool', 'Type', 'Where it works', 'Limits'],
        rows: [
          { 'Tool': '[Harper](https://writewithharper.com)', 'Type': 'Rule-based, runs on-device, no LLM', 'Where it works': 'Chrome, Edge, Firefox, Obsidian, VS Code, macOS app', 'Limits': 'English only; Google Docs not listed' },
          { 'Tool': '[LanguageTool](https://dev.languagetool.org/http-server) (self-hosted)', 'Type': 'Rule-based server on localhost', 'Where it works': 'Browser add-on, "Local server" setting', 'Limits': 'Experimental setting; Java server to run' },
          { 'Tool': '[Page Assist](/local-llms/page-assist-review)', 'Type': 'Ollama chat sidebar', 'Where it works': 'Chrome and Firefox sidebar', 'Limits': 'Chat-based; you paste results back' },
          { 'Tool': 'Hotkey + Ollama', 'Type': 'LLM rewrite of selected text', 'Where it works': 'Any app, including Google Docs', 'Limits': 'Raycast (Pro) or an AutoHotkey script' },
        ],
        items: [
          '**Google Docs workflow:** turn on Suggesting mode in Docs, select a paragraph, send it through your hotkey or sidebar, and paste the corrected text. Suggesting mode keeps every change reviewable.',
          '**Gmail:** Harper\'s site notes that Gmail is unsupported unless Gmail\'s built-in grammar checker is turned off. Use the select-and-rewrite workflow for email drafts.',
          '**Best combination:** a rule-based checker for inline underlines in editors it supports, plus a local LLM for rewrites, tone, and summaries. This is the closest local match to Grammarly\'s mix of underlines and AI rewriting.',
          '**Self-hosting LanguageTool:** download the LanguageTool server, start it on localhost, then choose "Local server" under Experimental settings in the browser add-on. The server is reachable only from your own machine unless you start it with the public option.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Rule-based checkers need no GPU and add no latency. Install one first, then add an LLM only for the rewriting jobs a rule-based checker cannot do.',
          },
        ],
      },
      notionReplacement: {
        id: 'notion-replacement',
        title: 'Replacing Notion AI: Document Drafting and Notes',
        content:
          '**Obsidian with a local Ollama backend is the closest functional equivalent to Notion AI for note-takers and knowledge workers.** It does not replicate the Notion database structure, but for document drafting and AI Q&A over your notes, the capability is equivalent — with all processing local.',
        image: '/images/replace-grammarly-notion-ai-with-local-notion-ai-setup-flow-en.svg',
        imageCaption: 'Notion AI replacement setup in Obsidian: install Ollama and pull a model, install Obsidian, add the Copilot plugin pointed at localhost:11434, add Smart Connections for full-vault Q&A, then draft documents and query notes entirely locally.',
        items: [
          '**Install Obsidian** from [obsidian.md](https://obsidian.md). Free for personal and work use. Create a vault for your notes — this is the directory that the AI plugins will index.',
          '**Install the Copilot plugin** (Community Plugins → search "Copilot"; see the [Copilot for Obsidian review](/power-local-llm/copilot-for-obsidian-review)). In plugin settings, select "Ollama" as the LLM provider, enter `http://localhost:11434` as the base URL, and select your model. Copilot adds a chat sidebar to Obsidian where you can ask questions and generate content in context of the current note.',
          '**Install the Smart Connections plugin** for Q&A over your full vault. Smart Connections indexes your notes as embeddings with a local embedding model and lets you ask questions that retrieve relevant notes before sending to the LLM. This is the direct Notion AI "ask about my notes" replacement.',
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
            text: 'The setup: install Obsidian, install Ollama, pull a model, install the Copilot community plugin in Obsidian, point it at localhost:11434. That\'s the replacement for Notion AI\'s AI features. Your notes stay in your vault folder (plain markdown files, fully portable). The AI chat runs on your machine. Nothing leaves your computer.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Obsidian stores notes as plain markdown files in a folder you control. Unlike Notion\'s proprietary database format, your notes are readable in any text editor and exportable at any time. This is a secondary privacy and portability advantage over Notion — your knowledge base is not locked into a cloud platform.',
          },
        ],
      },
      notionOllama: {
        id: 'notion-ollama',
        title: 'Notion and Ollama: What Connects and What Does Not',
        content:
          '**Notion does not document a way to point Notion AI at a local model, so "Notion + Ollama" means either running the AI step outside Notion or moving your notes out of Notion.** Notion\'s published pricing and security pages describe AI running on model providers Notion selects, with no setting for your own endpoint. Notion is also a cloud workspace, not a local database — there is no local Notion database to attach a model to.',
        items: [
          '**Option 1 — script through the Notion API:** a small script reads a page through the Notion API, sends the text to Ollama on `localhost:11434`, and writes the result back as a new block. The model step is local; the page itself still lives on Notion\'s servers, so only the AI provider is removed.',
          '**Option 2 — Notion MCP:** Notion hosts an MCP server (OAuth sign-in) that MCP clients use to read and update pages. Notion names Claude Code, Cursor, and Codex as example clients; whether a given client can drive a local model is a question for that client.',
          '**Option 3 — move AI-heavy notes to a local-first app:** Obsidian (plain Markdown files) with Copilot, as above, or [AppFlowy](https://appflowy.com), an open-source (AGPL-3.0) Notion-style workspace with an offline mode and local AI options per its comparison page. Check AppFlowy\'s documentation for the exact local-model setup.',
          '**What a local model does not change:** content already in Notion is stored by Notion. Running a local model over it removes the AI-provider step, not Notion\'s storage.',
          '**What Notion says about its own AI:** by default neither Notion nor its AI providers use customer data to train models; on Enterprise, most models offer zero data retention, while on other plans providers retain data for up to 30 days.',
        ],
        codeBlock:
          'import requests\n\nNOTION = {"Authorization": "Bearer <NOTION_TOKEN>", "Notion-Version": "2022-06-28"}\nPAGE_ID = "<page-id>"\n\n# 1. read the page text through the Notion API\nblocks = requests.get(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION).json()["results"]\ntext = "\\n".join(\n    "".join(t["plain_text"] for t in b["paragraph"]["rich_text"])\n    for b in blocks if b["type"] == "paragraph"\n)\n\n# 2. rewrite it with a local model (Ollama on localhost)\nr = requests.post("http://localhost:11434/api/generate", json={\n    "model": "gemma4:12b", "stream": False,\n    "prompt": "Correct the grammar of this text. Return only the corrected text.\\n\\n" + text,\n})\nfixed = r.json()["response"]\n\n# 3. append the result as a new paragraph block\nrequests.patch(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION, json={\n    "children": [{"object": "block", "type": "paragraph",\n                  "paragraph": {"rich_text": [{"type": "text", "text": {"content": fixed[:2000]}}]}}]\n})',
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'The script sends your Notion token and page content only to Notion and to localhost. Keep the token out of shared files, and note that Notion rich-text blocks accept about 2,000 characters each, so long outputs must be split into several blocks.',
          },
        ],
      },
      integrations: {
        id: 'integrations',
        title: 'Integration Options',
        content:
          '**Four integration levels: basic (copy-paste), intermediate (hotkey app or writing app), inline (rule-based checker), and advanced (custom browser extension).** Start at the level that matches your technical comfort.',
        columns: ['Integration Level', 'How', 'Apps', 'Best For'],
        rows: [
          { 'Integration Level': 'Basic (copy-paste)', 'How': 'Open local AI app, paste text, copy result', 'Apps': 'LM Studio chat, Ollama CLI, Open WebUI', 'Best For': 'Occasional corrections; any OS' },
          { 'Integration Level': 'Intermediate (hotkey)', 'How': 'Select text → hotkey → corrected version replaces selection', 'Apps': 'Raycast AI (macOS, Pro), AutoHotkey + Ollama (Windows)', 'Best For': 'Frequent corrections in any app; minimal workflow change' },
          { 'Integration Level': 'Intermediate (writing app)', 'How': 'AI assistant built into the writing tool', 'Apps': 'Obsidian + Copilot plugin, VS Code + Continue.dev', 'Best For': 'Writers and developers who live in these apps' },
          { 'Integration Level': 'Inline (rule-based)', 'How': 'Local checker underlines errors as you type', 'Apps': 'Harper, self-hosted LanguageTool', 'Best For': 'As-you-type feedback without a GPU' },
          { 'Integration Level': 'Advanced (browser extension)', 'How': 'Custom extension sends selected text to local Ollama API', 'Apps': 'Custom Chrome/Firefox extension (open-source templates on GitHub)', 'Best For': 'Power users who want Grammarly-style browser integration' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'On macOS, Raycast with a custom AI command is a fast intermediate integration if you have Pro: create an AI command with the grammar correction prompt, assign a hotkey, select text in any app, press the hotkey, and the corrected text replaces the selection. Without Pro, use the Ollama CLI or a chat client such as Open WebUI.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Model Recommendations for Writing Tasks',
        content:
          '**Writing assistance favours models with strong instruction following and coherent prose output.** The ranking differs from the coding or math model rankings. The picks below are starting points chosen by size and instruction following, not grammar benchmark results.',
        columns: ['Task', 'Best Model', 'Alternative (lower VRAM)', 'Why'],
        rows: [
          { 'Task': 'Grammar correction', 'Best Model': 'Gemma 4 12B', 'Alternative (lower VRAM)': 'Qwen3.5 4B / Phi-4 Mini', 'Why': 'Follows "fix errors only, return text" prompts' },
          { 'Task': 'Style rewrite', 'Best Model': 'Gemma 4 12B or Qwen3.8 27B', 'Alternative (lower VRAM)': 'Qwen3.5 4B', 'Why': 'More headroom for phrasing and register' },
          { 'Task': 'Tone adjustment', 'Best Model': 'Qwen3.8 27B', 'Alternative (lower VRAM)': 'Gemma 4 12B', 'Why': 'Larger models usually keep facts steadier' },
          { 'Task': 'Document drafting (Notion AI replacement)', 'Best Model': 'Gemma 4 12B', 'Alternative (lower VRAM)': 'Qwen3.5 4B', 'Why': 'Follows document-format instructions' },
          { 'Task': 'Note summarisation / Q&A', 'Best Model': 'Gemma 4 12B', 'Alternative (lower VRAM)': 'Qwen3.5 4B / Phi-4 Mini', 'Why': 'Summarisation works well at small sizes' },
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
        image: '/images/replace-grammarly-notion-ai-with-local-cost-privacy-overview-en.svg',
        imageCaption: 'Cloud writing tools versus local LLM: Grammarly and Notion AI run as 2 separate paid subscriptions and send text to cloud servers, while Ollama and Obsidian keep all writing and notes on-device with zero recurring software cost.',
        items: [
          '**Grammarly data licence:** under Section 7.2 of [Grammarly\'s Terms of Service](https://www.grammarly.com/terms), you keep ownership of your content but grant Grammarly a worldwide, non-exclusive, royalty-free licence to use it for stated purposes, including operating, providing, and improving its services and developing new products or features. The Terms also say accepting or rejecting suggestions may help train its suggestion engine. Grammarly states that its LLM partners are not allowed to use customer data to train their models.',
          '**Notion AI data flow:** Notion routes AI requests to a mix of model providers (the current list is on its subprocessor page). Notion states that by default neither it nor its AI providers use customer data to train models. Enterprise offers zero data retention with LLM providers; on other plans, providers retain data for up to 30 days.',
          '**Local LLM data flow:** no external transmission. Ollama listens on localhost by default and inference makes no outbound connection. The model weights are static files on disk; your text is processed in memory.',
          '**GDPR / professional privilege implications:** legal professionals, medical practitioners, and anyone subject to confidentiality obligations should check contractual protections before using Grammarly or Notion AI for client-related content. A local LLM avoids the third-party processor question because no data leaves the machine.',
          '**Telemetry:** cloud tools collect usage and interaction data in addition to the text itself. Local apps differ — check each app\'s telemetry settings, and if you need audit-grade assurance, monitor outbound traffic yourself.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'If you use Grammarly for work correspondence, contract drafts, or any content under confidentiality obligations, check your organisation\'s data policy and the enterprise data terms in force before assuming the content is protected.',
          },
        ],
      },
      cost: {
        id: 'cost',
        title: 'Cost Comparison',
        content:
          '**Replacing both tools removes the Grammarly subscription and the AI portion of the Notion plan.** The local LLM setup is free for software; the only ongoing cost is electricity.',
        columns: ['Tool', 'Monthly Cost', 'Annual Cost', 'Notes'],
        rows: [
          { 'Tool': '[Grammarly Free](https://www.grammarly.com/plans)', 'Monthly Cost': '$0', 'Annual Cost': '$0', 'Notes': '100 AI prompts/month; basic checks' },
          { 'Tool': '[Grammarly Pro](https://www.grammarly.com/plans)', 'Monthly Cost': 'from ~$12/mo', 'Annual Cost': 'from ~$144/yr', 'Notes': '2,000 AI prompts/month; higher if billed monthly' },
          { 'Tool': '[Notion AI](https://www.notion.com/pricing)', 'Monthly Cost': 'in Business (~$20/user)', 'Annual Cost': '~$240/user/yr', 'Notes': 'Free and Plus: trial only; no separate add-on' },
          { 'Tool': '[Ollama (local LLM)](https://ollama.com)', 'Monthly Cost': '$0', 'Annual Cost': '$0', 'Notes': 'Free and open-source; electricity only' },
          { 'Tool': '[Obsidian (Notion replacement)](https://obsidian.md)', 'Monthly Cost': '$0', 'Annual Cost': '$0', 'Notes': 'Free for personal and work use' },
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
          '**Using the smallest model for complex style rewrites.** Small models handle grammar correction well but tend to produce more formulaic style rewrites. For style-heavy work, move up to Gemma 4 12B or larger.',
          '**Expecting Notion UI equivalence from Obsidian.** Obsidian is a Markdown editor, not a database. If your Notion workflow depends on databases, views, and relations, Obsidian is not a full Notion replacement — only the AI features transfer. Evaluate whether the database features are critical before switching.',
          '**Not setting a word ceiling on style rewrites.** Without a ceiling, the model pads rewrites. Add "Keep the rewritten text within 10% of the original word count" to any style rewrite prompt.',
          '**Sending full documents to a small model.** Small models drift on long inputs. For long documents, break them into sections and correct each section independently.',
          '**Expecting inline underlines from an LLM.** An LLM answers when asked; it does not watch your typing. For underlines as you type, add a rule-based local checker such as Harper.',
          '**Assuming Notion AI can use a local model.** Notion does not document support for it; use the Notion API with Ollama, or move AI-heavy notes to a local-first app.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Grammarly Terms of Service — Section 7.2 (licence to user content) — [grammarly.com/terms](https://www.grammarly.com/terms)',
          'Grammarly plans — [grammarly.com/plans](https://www.grammarly.com/plans)',
          'Grammarly responsible AI (partner data use) — [grammarly.com/responsible-ai](https://www.grammarly.com/responsible-ai)',
          'Notion pricing and AI plan access — [notion.com/pricing](https://www.notion.com/pricing)',
          'Notion AI security practices (providers, training, retention) — [notion.com/help/notion-ai-security-practices](https://www.notion.com/help/notion-ai-security-practices)',
          'Notion MCP documentation — [developers.notion.com/docs/mcp](https://developers.notion.com/docs/mcp)',
          'Obsidian free for work (February 2025) — [obsidian.md/blog/free-for-work](https://obsidian.md/blog/free-for-work/)',
          'Harper grammar checker — [writewithharper.com](https://writewithharper.com)',
          'LanguageTool HTTP server (self-hosting) — [dev.languagetool.org/http-server](https://dev.languagetool.org/http-server)',
          'Raycast local models — [manual.raycast.com/ai/local-models](https://manual.raycast.com/ai/local-models)',
          'Ollama model library — [ollama.com/library/gemma4](https://ollama.com/library/gemma4), [ollama.com/library/qwen3.5](https://ollama.com/library/qwen3.5), [ollama.com/library/qwen3.8](https://ollama.com/library/qwen3.8)',
          'Obsidian Copilot plugin documentation — [GitHub: logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot)',
          'Obsidian Smart Connections plugin — [GitHub: brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Which small LLMs produce good local grammar correction?',
            a: 'Qwen3.5 4B (`qwen3.5:4b`, about 3–4 GB) and Phi-4 Mini (`phi4-mini`) fit 8 GB machines; Gemma 4 12B (`gemma4:12b`) suits 16 GB systems and style rewrites; Qwen3.8 27B suits 24 GB and up. No published benchmark ranks them for grammar correction, so test two on five of your own paragraphs and keep the one that changes the least while catching your errors. Use a "fix errors only, return only the corrected text" system prompt and a low temperature.',
          },
          {
            q: 'Is there a local Grammarly alternative that works in Google Docs?',
            a: 'Not as a drop-in. None of the local tools covered here lists Google Docs as a supported editor. The working setup is select → rewrite → paste: select text in Docs (with Suggesting mode on), send it through a hotkey tool or browser sidebar to a local model, and paste the result. For inline underlines elsewhere, Harper (English only, on-device, extensions for Chrome, Edge, and Firefox) and a self-hosted LanguageTool server are the local options.',
          },
          {
            q: 'How do I use Ollama with Notion?',
            a: 'Notion does not document a way to point Notion AI at a local model. To use Ollama with Notion content, write a small script that reads a page through the Notion API, sends the text to Ollama on localhost:11434, and writes the result back (see the example above). The model step is local; the page still lives on Notion\'s servers. For a fully local setup, move AI-heavy notes to Obsidian with the Copilot plugin or to a local-first app such as AppFlowy.',
          },
          {
            q: 'Can I connect a local LLM to a local Notion database?',
            a: 'Notion has no local database: workspaces live on Notion\'s servers and are reached through its API. You can run the model locally and exchange text with Notion through the API, or choose a local-first workspace. Obsidian stores notes as Markdown files on disk; AppFlowy is an open-source Notion-style app with an offline mode.',
          },
          {
            q: 'Can a local LLM analyse my personal writing style?',
            a: 'Yes. Paste three samples of your writing into a local model with the style-profile prompt from this guide: it returns a bullet description of your sentence length, tone, vocabulary, and habits, plus a short system prompt you can reuse so an editor model keeps your voice. Because the samples never leave your machine, this is safe for private drafts.',
          },
          {
            q: 'What is the difference between Notion AI and Grammarly?',
            a: 'They sit in different places. Notion AI works inside Notion: drafting, summarising, and answering questions over your workspace. Grammarly checks writing across apps and browser text fields and offers rewrites. They overlap on rewriting and tone, but neither replaces the other, and both can be replaced for most tasks by a local LLM plus a note app.',
          },
          {
            q: 'Does Grammarly work in Notion and Obsidian?',
            a: 'Grammarly\'s browser extension checks text fields in browser-based editors, which includes Notion on the web. Desktop apps such as Obsidian sit outside what a browser extension reaches. For Obsidian, a local checker such as Harper (which has an Obsidian plugin) or the Copilot plugin with Ollama covers the same ground without sending text to a cloud service.',
          },
          {
            q: 'Is a local LLM as good as Grammarly at grammar correction?',
            a: 'For everyday grammar, punctuation, and spelling errors, a well-prompted local model handles the same corrections; test it on your own text to confirm. Where Grammarly keeps an advantage: real-time inline corrections as you type, and the browser extension that works across Gmail, Google Docs, and other web apps. A local LLM requires a select-and-paste workflow for text in browser fields.',
          },
          {
            q: 'Can I use Obsidian as a full Notion replacement?',
            a: 'Obsidian replaces Notion\'s note-taking and knowledge-base features well. It does not replace Notion\'s database, project management, and relational data features. If your Notion use is primarily notes, documents, and wikis — Obsidian is a full replacement. If you rely on Notion databases, board views, or relational properties — you would need additional tools (Anytype, AppFlowy, or Notion itself for the database layer with Obsidian for writing).',
          },
          {
            q: 'Which local model is closest to Grammarly\'s writing suggestions?',
            a: 'No local model reproduces Grammarly\'s suggestion engine, and no benchmark ranks models for it. In practice, Gemma 4 12B and Qwen3.8 27B give the most room for style and tone rewrites when prompted to keep the original voice, while Qwen3.5 4B and Phi-4 Mini are enough for grammar-only fixes. Pair any of them with a rule-based checker such as Harper if you want underlines as you type.',
          },
          {
            q: 'Does the Obsidian Copilot plugin send my notes to the cloud?',
            a: 'Not when configured to use a local Ollama instance. The plugin supports both cloud LLMs (OpenAI, Anthropic) and local Ollama. When you select Ollama as the LLM provider and enter the localhost URL, all AI processing is done locally. No note content is transmitted externally. Confirm this by monitoring network traffic with a tool like Little Snitch (macOS) or Wireshark if you need audit-grade verification.',
          },
          {
            q: 'Can I use a local LLM in Google Docs or Gmail?',
            a: 'Not directly — there is no local LLM browser extension equivalent to Grammarly that integrates natively into browser text fields. The workaround options are: (1) select text in Google Docs, copy, paste into your local AI app, copy the corrected version, paste back; (2) a hotkey tool that processes selected text and replaces it (Raycast with local models needs Pro; an AutoHotkey script calling the Ollama API is free); (3) a custom Chrome extension that reads selected text and calls the local Ollama API (open-source templates exist on GitHub). None of these matches Grammarly\'s seamless inline experience.',
          },
          {
            q: 'Is this setup HIPAA or GDPR compliant for professional use?',
            a: 'A local LLM that processes data exclusively on your machine without external transmission addresses the core data-transfer concern for both HIPAA and GDPR. However, compliance depends on your full technology stack, security controls, and specific regulatory requirements. A local LLM is not automatically compliant — you need to assess endpoint security, physical device protection, and access controls. For formal compliance, consult your compliance officer. Local processing removes the "third-party data processor" concern but does not substitute for a complete compliance programme.',
          },
          {
            q: 'What is the best local writing assistant for academic papers?',
            a: 'A mid-size local model (for example Gemma 4 12B) with a system prompt that specifies "Correct grammar and punctuation only — do not change vocabulary, sentence structure, or content. Preserve all citations, technical terms, and field-specific language unchanged." This mirrors a grammar-only mode, a lower-risk setting for academic writing where changing phrasing could inadvertently alter meaning or appear to modify cited content.',
          },
          {
            q: 'Can I replace Notion AI\'s meeting notes summarisation locally?',
            a: 'Yes. Export meeting notes as a text or markdown file (or paste transcript text directly). Use the prompt: "Summarise these meeting notes into: (1) Key decisions made, (2) Action items with owners, (3) Open questions. Use bullet points for each section. Keep it under 300 words." A small instruction-following model handles meeting summarisation. For recurring meetings, create a saved prompt template in your local AI app.',
          },
          {
            q: 'What LLM does Grammarly use? Is Grammarly an LLM?',
            a: 'Grammarly is a writing product, not a single model. Grammarly does not name its underlying models on the pages we checked (plans, terms, and its responsible-AI page). Its responsible-AI page says information used to power its generative AI features is shared with LLM partners and that those partners are not allowed to use customer data to train their models. Notion AI is similar: it uses a mix of providers listed on its subprocessor page. Researchers have also published open text-editing models under the grammarly organisation on Hugging Face (CoEdIT, 770M to 11B parameters), which are research models rather than the product itself. What matters for privacy is the data handling: text sent to either product is processed on the vendor\'s servers. A local LLM avoids that — the text never leaves your machine.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local LLM with Obsidian](/power-local-llm/local-llm-with-obsidian-2026) — full Obsidian + Ollama setup for note-taking and Q&A over your vault.',
          '[Copilot for Obsidian Review](/power-local-llm/copilot-for-obsidian-review) — the Copilot plugin used in the Notion AI replacement workflow.',
          '[Obsidian and Logseq AI Plugins Compared](/power-local-llm/obsidian-logseq-ai-plugins) — plugin options for local AI in note-taking apps.',
          '[Small Local LLM Models](/local-llms/small-local-llm-models) — current small models for 4–8 GB machines, relevant to local grammar correction.',
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
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/replace-grammarly-notion-ai-with-local-overview-hero-es.webp',
    title: 'Reemplaza Grammarly y Notion AI con un LLM local (2026)',
    seoTitle: 'Alternativa local a Grammarly: mejores LLM 2026',
    intro:
      'Grammarly y Notion AI procesan tu escritura en servidores en la nube — tus borradores de correo, documentos confidenciales y notas personales pasan por sistemas de terceros por diseño. Un LLM local ejecutado mediante Ollama o LM Studio puede reemplazar a ambos para la mayoría de las tareas de escritura: corrección gramatical y de estilo, redacción de documentos, resumen de contenido y toma de notas asistida por IA — sin que ningún texto salga de tu equipo. Esta guía explica qué modelos pequeños corrigen bien la gramática, qué funciona en Google Docs y Notion, y dónde sigue habiendo una brecha frente a Grammarly.',
    metaDescription:
      'Alternativa local a Grammarly: los mejores LLM pequeños para corregir gramática, qué funciona en Google Docs y Notion, y configuraciones con Ollama sin nube.',
    twitterDescription:
      'Reemplaza Grammarly y Notion AI con un LLM local: mejores modelos pequeños para corregir gramática, opciones en Google Docs y Notion, Ollama — tu texto no sale del equipo.',
    current_models_mentioned: [
      'Qwen3.5 4B',
      'Gemma 4 E4B',
      'Gemma 4 12B',
      'Qwen3.8 27B',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M3 MacBook Air 8 GB',
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 3060 12 GB',
    ],
    audience:
      'Trabajadores del conocimiento, escritores, estudiantes y profesionales preocupados por la privacidad que usan Grammarly para corregir su escritura y Notion AI para asistencia con documentos, y quieren reemplazar ambos con una IA local que mantenga su contenido privado.',
    readTime: '13 min de lectura',
    educationalLevel: 'Beginner',
    primaryTerm: 'reemplazar Grammarly LLM local',
    targetKeywords: [
      'reemplazar grammarly llm local',
      'alternativa local a grammarly',
      'mejor llm para corrección gramatical',
      'llm pequeño corrección gramatical',
      'reemplazar notion ai local',
      'notion ollama',
      'asistente de escritura llm local',
      'alternativa grammarly sin nube',
      'alternativa notion ai privacidad',
      'ollama corrección de textos',
    ],
    leadAnswerBlock:
      '**Un LLM local ejecutado mediante Ollama reemplaza el núcleo de Grammarly y Notion AI sin enviar tu texto a un servicio en la nube. Para Grammarly: corrección gramatical y de estilo mediante una plantilla de prompt ("Corrige la gramática y mejora el estilo de este párrafo. Devuelve solo el texto corregido.") en cualquier modelo desde Qwen3.5 4B hacia arriba. Para Notion AI: redacción de documentos y preguntas y respuestas sobre tus notas mediante Obsidian con el plugin Copilot o Smart Connections apuntando a Ollama. El argumento de privacidad es concreto: los Términos de Servicio de Grammarly (Sección 7.2) le conceden una licencia sobre tu contenido para operar y mejorar sus servicios, y Notion AI envía las solicitudes a proveedores de modelos de terceros, mientras que un modelo local procesa el mismo texto en tu propio hardware. La brecha es estrecha para la escritura cotidiana y más amplia en dos puntos: la revisión mientras escribes en Google Docs, Gmail y otros editores del navegador, y las sugerencias de estilo específicas de un dominio.**',
    quickAnswerTop: {
      es: {
        question: '¿Puede un LLM local reemplazar a Grammarly y Notion AI?',
        answer:
          'Sí, para la mayoría de los casos de uso cotidianos. Para Grammarly: un LLM local maneja corrección gramatical, reescritura para mayor claridad, eliminación de voz pasiva y ajuste básico de tono. No iguala las sugerencias en línea en tiempo real ni la integración de extensión de navegador de Grammarly, pero un flujo de trabajo basado en prompts cubre las mismas correcciones bajo demanda. Para Notion AI: Obsidian con el plugin Copilot apuntando a Ollama reemplaza la redacción de documentos, la expansión de contenido y las preguntas y respuestas sobre tus notas. Notion no documenta ninguna forma de apuntar el propio Notion AI a un modelo local. Puntos de partida: Qwen3.5 4B (descarga de unos 3–4 GB, sistemas de 8 GB), Gemma 4 12B (sistemas de 16 GB) o Qwen3.8 27B (24 GB o más) — ningún benchmark específico de gramática los clasifica, así que prueba dos con tus propios párrafos.',
        bullets: [
          'Corrección gramatical: cualquier modelo local que siga instrucciones, con un prompt de sistema "corrige solo la gramática, devuelve el texto corregido", cubre el caso de uso de corrección principal de Grammarly.',
          'Modelos pequeños: Qwen3.5 4B y Phi-4 Mini caben en equipos de 8 GB; Gemma 4 12B es el siguiente paso para reescrituras de estilo con 16 GB.',
          'Reemplazo de Notion AI: Obsidian + plugin Copilot (o plugin Smart Connections) apuntando a Ollama — preguntas y respuestas sobre notas, redacción de documentos, expansión de contenido.',
          'Corrección en tiempo real: los LLM locales no subrayan errores mientras escribes en Google Docs o Gmail. Usa un flujo con atajo de teclado o barra lateral, o un corrector local basado en reglas como Harper para subrayados en los editores compatibles.',
          'Privacidad: Grammarly licencia tu contenido según la Sección 7.2 de sus Términos; Notion AI envía las solicitudes a proveedores de modelos de terceros. Un LLM local procesa en local sin transmisión externa.',
          'Coste: Grammarly Pro parte de unos $12/mes (facturado anualmente); Notion AI viene incluido en el plan Business (unos $20/usuario/mes). Un LLM local es gratuito una vez pagado el hardware.',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Qué estás reemplazando (y qué no)', anchor: '#what-you-replace' },
      { label: 'Reemplazar Grammarly: corrección gramatical y de estilo', anchor: '#grammarly-replacement' },
      { label: 'Mejores LLM pequeños para corregir gramática en local', anchor: '#small-models-grammar' },
      { label: 'Google Docs, Gmail y revisión en línea sin la nube', anchor: '#google-docs-inline' },
      { label: 'Reemplazar Notion AI: redacción de documentos y notas', anchor: '#notion-replacement' },
      { label: 'Notion y Ollama: qué se conecta y qué no', anchor: '#notion-ollama' },
      { label: 'Opciones de integración', anchor: '#integrations' },
      { label: 'Recomendaciones de modelos', anchor: '#models' },
      { label: 'Comparativa de privacidad', anchor: '#privacy' },
      { label: 'Comparativa de costes', anchor: '#cost' },
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
          '**Los LLM locales reemplazan la función principal de Grammarly — gramática, claridad y corrección básica de estilo — pero no su integración en tiempo real mientras escribes.** El flujo de trabajo cambia de "las correcciones aparecen mientras escribes" a "seleccionar texto → obtener la versión corregida → pegar de vuelta". Para muchos usuarios es un intercambio aceptable a cambio de privacidad total.',
          '**El reemplazo de Notion AI es más completo, pero implica dejar la IA de Notion.** Notion no documenta ninguna forma de apuntar Notion AI a un modelo local. Obsidian con el plugin Copilot (o el plugin Smart Connections) apuntando a una instancia local de Ollama iguala la redacción de documentos, la expansión de contenido y las preguntas y respuestas sobre notas — con todo el procesamiento en local. Seguir en Notion solo es posible ejecutando tú mismo el paso de IA a través de la API de Notion.',
          '**El argumento de privacidad no es teórico.** Los Términos de Servicio de Grammarly (Sección 7.2) le conceden una licencia sobre tu contenido para operar, mejorar y desarrollar sus servicios. Notion AI envía las solicitudes a proveedores de modelos de terceros; Notion indica que, por defecto, ni ella ni sus proveedores entrenan con datos de clientes. Un LLM local procesa el mismo texto en tu hardware sin transmisión externa.',
          '**Los modelos pequeños bastan para la gramática.** Qwen3.5 4B y Phi-4 Mini caben en equipos de 8 GB; Gemma 4 12B encaja en sistemas de 16 GB y en reescrituras de estilo. Ningún benchmark publicado los clasifica para corrección gramatical, así que prueba dos modelos con tus propios párrafos antes de decidir.',
          '**Para subrayados en línea, añade un corrector basado en reglas.** Harper (local, solo inglés) y un servidor LanguageTool autoalojado subrayan errores mientras escribes en los editores compatibles. Harper no incluye Google Docs entre sus editores compatibles, así que allí el flujo sigue siendo seleccionar → reescribir → pegar.',
          '**El coste es un argumento secundario.** Grammarly Pro parte de unos $12/mes facturado anualmente; Notion AI forma ahora parte del plan Business (unos $20/usuario/mes) en lugar de ser un complemento aparte. El equivalente con LLM local es gratuito tras el coste único de hardware.',
          '**La configuración lleva unos 20 minutos.** Instalar Ollama, descargar el modelo y configurar el plugin de Obsidian es una configuración única.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Coste de Grammarly:** Free (100 prompts de IA/mes), Pro desde unos $12/mes facturado anualmente (2.000 prompts de IA/mes), Enterprise a medida.',
          '**Coste de Notion AI:** incluido en el plan Business (unos $20/usuario/mes facturado anualmente); los planes Free y Plus solo tienen una prueba.',
          '**Coste de LLM local:** gratuito (modelos de código abierto + Ollama) — solo la electricidad del hardware.',
          '**Puntos de partida con modelos pequeños:** Qwen3.5 4B (`qwen3.5:4b`) o Phi-4 Mini (`phi4-mini`) con 8 GB; Gemma 4 12B (`gemma4:12b`) con 16 GB; Qwen3.8 27B (`qwen3.8:27b`) con 24 GB o más.',
          '**Privacidad de Grammarly:** la Sección 7.2 de los Términos de Servicio licencia tu contenido para operar, mejorar y desarrollar los servicios de Grammarly.',
          '**Privacidad de Notion AI:** las solicitudes van a proveedores de modelos de terceros; por defecto, ni Notion ni sus proveedores entrenan con datos de clientes.',
          '**Coste de Obsidian:** gratuito para uso personal y laboral desde febrero de 2025.',
        ],
      },
      whatYouReplace: {
        id: 'what-you-replace',
        title: 'Qué estás reemplazando (y qué no)',
        content:
          '**Un LLM local cubre la mayor parte del uso cotidiano de Grammarly y Notion AI, pero la parte que no cubre importa para algunos usuarios.** Entender la brecha antes de cambiar evita decepciones.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Un LLM local reemplaza la corrección gramatical, la reescritura de estilo y el ajuste de tono de Grammarly, y la redacción de documentos y las preguntas y respuestas sobre notas de Notion AI — pero no reemplaza la integración en tiempo real de Grammarly ni la integración nativa de Notion AI en su editor.',
          },
          {
            type: 'plain-terms',
            text: 'Grammarly funciona observando lo que escribes en tu navegador o escritorio y mostrando correcciones sobre la marcha. Un LLM local no puede hacer eso por sí solo. Lo que sí puede hacer es corregir cualquier texto que le entregues — así que el flujo de trabajo se convierte en: redactar tu correo, seleccionar el texto, enviarlo a tu app de IA local o herramienta de atajo de teclado, obtener la versión corregida y pegarla en Gmail. Más lento que las correcciones en línea, pero privado y gratuito.',
          },
        ],
        columns: ['Función', 'Grammarly', 'Equivalente con LLM local', 'Brecha'],
        rows: [
          { 'Función': 'Corrección gramatical', 'Grammarly': 'En línea, en tiempo real', 'Equivalente con LLM local': 'Basado en prompt, bajo demanda', 'Brecha': 'Sin tiempo real; flujo copiar-pegar' },
          { 'Función': 'Sugerencias de estilo', 'Grammarly': 'En línea con explicaciones', 'Equivalente con LLM local': 'Reescritura basada en prompt', 'Brecha': 'Sin explicaciones por sugerencia por defecto' },
          { 'Función': 'Detección de tono', 'Grammarly': 'Automática, tonos con nombre', 'Equivalente con LLM local': 'Tono objetivo indicado en el prompt', 'Brecha': 'Requiere instrucción de tono explícita' },
          { 'Función': 'Extensión de navegador', 'Grammarly': 'Funciona en Gmail, Google Docs, campos del navegador', 'Equivalente con LLM local': 'Copiar-pegar, atajo de teclado o app de barra lateral', 'Brecha': 'Sin integración nativa en el navegador' },
          { 'Función': 'Notion AI: redacción de documentos', 'Grammarly': 'N/A', 'Equivalente con LLM local': 'Obsidian + plugin Copilot → Ollama', 'Brecha': 'No integrado en la UI de Notion; app separada' },
          { 'Función': 'Notion AI: preguntas y respuestas sobre notas', 'Grammarly': 'N/A', 'Equivalente con LLM local': 'Obsidian Smart Connections → Ollama', 'Brecha': 'Requiere vault de Obsidian; sin búsqueda en BD de Notion' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La brecha de integración importa más si escribes en Gmail, Google Docs u otros editores basados en navegador donde Grammarly muestra correcciones en línea. Si escribes principalmente en apps de escritorio (Word, Obsidian, VS Code, Scrivener), el flujo copiar-pegar con un LLM local es apenas más lento que las sugerencias en línea. Conoce tu entorno de escritura antes de decidir.',
          },
        ],
      },
      grammarlyReplacement: {
        id: 'grammarly-replacement',
        title: 'Reemplazar Grammarly: corrección gramatical y de estilo',
        content:
          '**El flujo de trabajo de reemplazo de Grammarly son unas pocas plantillas de prompt y una app con atajo de teclado.** Una plantilla para corrección solo de gramática; una para reescritura completa de estilo; una para el tono. En un portátil típico, un texto de longitud de párrafo vuelve en unos segundos; la velocidad depende del tamaño del modelo y del hardware.',
        promptExamples: [
          {
            label: 'Solo corrección gramatical (reemplazo básico de Grammarly)',
            text: 'Corrige la gramática, ortografía y puntuación del siguiente texto. Devuelve solo el texto corregido — sin explicación, sin marcado, sin resumen.\n\n[pega tu texto]',
          },
          {
            label: 'Reescritura de estilo y claridad (reemplazo de Grammarly Premium)',
            text: 'Reescribe el siguiente texto para mayor claridad y tono profesional. Corrige la gramática, elimina la voz pasiva, ajusta las oraciones largas y elimina frases de relleno. Devuelve solo el texto reescrito.\n\nTono objetivo: [profesional / casual / académico / persuasivo]\nAudiencia objetivo: [general / técnica / ejecutiva]\n\n[pega tu texto]',
          },
          {
            label: 'Prompt de ajuste de tono',
            text: 'Reescribe el siguiente correo para que sea [más formal / más casual / más conciso / más diplomático]. Mantén todo el contenido factual idéntico. Devuelve solo el correo reescrito.\n\n[pega tu correo]',
          },
          {
            label: 'Perfil de estilo personal (analiza tu propia escritura en local)',
            text: 'A continuación hay tres muestras de mi escritura. Describe mi estilo en 8 viñetas: longitud típica de las oraciones, nivel de vocabulario, tono, construcciones que prefiero, hábitos de puntuación y lo que evito. Después escribe un prompt de sistema de 100 palabras que haga que un modelo editor corrija textos conservando este estilo.\n\nMuestra 1: [pega]\nMuestra 2: [pega]\nMuestra 3: [pega]',
          },
        ],
        items: [
          '**Prompt de sistema para sesiones de escritura:** configura el prompt de sistema de tu app de IA local en "Eres un editor profesional. Devuelve solo el texto corregido o reescrito — sin preámbulo, sin explicación, sin comentario." Esto evita que el modelo añada "¡Gran texto! Aquí está mi corrección..." antes de la salida.',
          '**Integración con atajo de teclado:** usa Raycast (macOS) o AutoHotkey (Windows) para crear un atajo que envíe el texto seleccionado a Ollama y pegue el resultado. Esto reduce el flujo copiar-pegar a una sola pulsación de tecla. Ten en cuenta que el manual de Raycast indica que los modelos locales son una función Pro; un script de AutoHotkey que llame a la API de Ollama es gratuito.',
          '**Solo gramática vs. reescritura de estilo:** usa prompts separados para corrección solo de gramática y reescrituras de estilo completas. Solo gramática es más seguro para documentos legales, técnicos o estructurados donde cambiar la redacción podría cambiar el significado. La reescritura de estilo es apropiada para correos, publicaciones de blog y correspondencia general.',
          '**Para escritura académica:** añade "Preserva todas las citas, términos técnicos y vocabulario de dominio sin cambios" al prompt de reescritura de estilo. Sin esta instrucción, los modelos a veces simplifican o parafrasean el lenguaje técnico.',
          '**Para correo empresarial:** añade "El remitente es [Nombre], [Cargo] en [Empresa]. El correo debe reflejar su voz profesional sin detalles de personalización en la salida." Esto ancla el registro al contexto profesional del remitente.',
          '**Analiza tu propio estilo en local:** el prompt de perfil de estilo anterior convierte tres muestras de escritura en un prompt de sistema reutilizable. Como las muestras nunca salen de tu equipo, es seguro usarlo con borradores privados, que un asistente en la nube tendría que recibir primero.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Un flujo rápido en macOS: instala Ollama, descarga un modelo como Gemma 4 12B y crea un comando de IA de Raycast con el prompt de corrección gramatical (los modelos locales en Raycast requieren una suscripción Pro). Resalta texto en cualquier app, activa el atajo, y la versión corregida reemplaza la selección. En Windows, un script de AutoHotkey que envíe la selección a la API de Ollama logra lo mismo sin suscripción.',
          },
        ],
      },
      smallModelsGrammar: {
        id: 'small-models-grammar',
        title: 'Mejores LLM pequeños para corregir gramática en local',
        content:
          '**Para corregir gramática, empieza con Qwen3.5 4B en equipos de 8 GB y con Gemma 4 12B en equipos de 16 GB; ambos siguen la instrucción "devuelve solo el texto corregido" y funcionan en portátiles normales.** Corregir gramática es sobre todo seguir instrucciones: el modelo debe cambiar lo mínimo y no devolver nada más que el texto corregido.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'El mejor LLM pequeño para corregir gramática en local es el modelo más pequeño que siga instrucciones y corrija tus errores sin reformular lo que ya estaba bien — Qwen3.5 4B, Phi-4 Mini y Gemma 4 12B son puntos de partida razonables, y ningún benchmark publicado los clasifica para gramática.',
          },
          {
            type: 'plain-terms',
            text: 'Corregir gramática no necesita un modelo grande. Necesita un modelo que obedezca "corrige solo los errores". Instala dos candidatos, pega los mismos cinco párrafos en ambos y quédate con el que cambie menos y aun así detecte tus fallos. Esa prueba lleva diez minutos y te dice más que cualquier clasificación.',
          },
        ],
        columns: ['Modelo', 'Etiqueta Ollama', 'Descarga', 'Cabe en', 'Ideal para'],
        rows: [
          { 'Modelo': 'Phi-4 Mini', 'Etiqueta Ollama': 'phi4-mini', 'Descarga': '~2.5 GB', 'Cabe en': '8 GB RAM', 'Ideal para': 'Correcciones rápidas y simples; sobre todo inglés' },
          { 'Modelo': 'Qwen3.5 4B', 'Etiqueta Ollama': 'qwen3.5:4b', 'Descarga': '~3.3–4 GB', 'Cabe en': '8 GB RAM', 'Ideal para': 'Solo gramática, correos cortos, muchos idiomas' },
          { 'Modelo': 'Gemma 4 E4B', 'Etiqueta Ollama': 'gemma4:e4b', 'Descarga': '~6.6–9.5 GB', 'Cabe en': '16 GB RAM', 'Ideal para': 'Texto multilingüe, ediciones de estilo ligeras' },
          { 'Modelo': 'Gemma 4 12B', 'Etiqueta Ollama': 'gemma4:12b', 'Descarga': '~7.7–8 GB', 'Cabe en': '16 GB RAM', 'Ideal para': 'Reescrituras de estilo y ajuste de tono' },
          { 'Modelo': 'Qwen3.8 27B', 'Etiqueta Ollama': 'qwen3.8:27b', 'Descarga': '~18 GB', 'Cabe en': '24 GB+ RAM/VRAM', 'Ideal para': 'Reescrituras largas y matizadas' },
        ],
        items: [
          '**Ningún benchmark específico de gramática clasifica estos modelos.** Los fabricantes publican resultados generales de seguimiento de instrucciones, no precisión en corrección gramatical. Juzga con tu propio texto.',
          '**Qué comprobar en la prueba:** sobrecorrección (se cambió una redacción que estaba bien), cambio de significado (cifras, nombres, negaciones), variante ortográfica conservada (por ejemplo, español de España frente al de América) y si el modelo devuelve solo el texto.',
          '**Idiomas:** Qwen3.5 y Gemma 4 son multilingües; Phi-4 Mini está pensado sobre todo para inglés. Para texto que no esté en inglés, prueba primero en tu idioma.',
          '**Mantenlo determinista:** una temperatura baja (alrededor de 0,2) reduce las reformulaciones creativas. El Modelfile de abajo incorpora las instrucciones de editor y la temperatura en un modelo reutilizable.',
          '**Documentos largos:** los modelos pequeños se desvían con entradas largas. Corrige sección por sección en lugar de pegar un documento entero.',
        ],
        codeBlock:
          'FROM qwen3.5:4b\nPARAMETER temperature 0.2\nSYSTEM """You are a copy editor. Fix grammar, spelling, and punctuation only. Keep the author\'s wording, meaning, and spelling variant. Return only the corrected text."""\n\n# then run:\n#   ollama create grammar-fix -f Modelfile\n#   ollama run grammar-fix',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Si un modelo imprime su razonamiento o un preámbulo antes del texto corregido, cambia a una variante sin razonamiento o a otro modelo. Una herramienta de gramática que añade comentarios a cada respuesta es más lenta que corregir a mano.',
          },
        ],
      },
      googleDocsInline: {
        id: 'google-docs-inline',
        title: 'Google Docs, Gmail y revisión en línea sin la nube',
        content:
          '**Ninguna de las herramientas locales revisadas aquí incluye Google Docs entre sus editores compatibles, así que la configuración práctica para Google Docs es un atajo de teclado o una barra lateral para reescrituras con LLM, más un corrector local basado en reglas para subrayados en línea donde sea compatible.** Un LLM y un corrector basado en reglas hacen trabajos distintos: el LLM reescribe a petición, el corrector subraya los fallos mientras escribes.',
        columns: ['Herramienta', 'Tipo', 'Dónde funciona', 'Límites'],
        rows: [
          { 'Herramienta': '[Harper](https://writewithharper.com)', 'Tipo': 'Basado en reglas, en el dispositivo, sin LLM', 'Dónde funciona': 'Chrome, Edge, Firefox, Obsidian, VS Code, app de macOS', 'Límites': 'Solo inglés; Google Docs no figura' },
          { 'Herramienta': '[LanguageTool](https://dev.languagetool.org/http-server) (autoalojado)', 'Tipo': 'Servidor basado en reglas en localhost', 'Dónde funciona': 'Complemento del navegador, ajuste "Servidor local"', 'Límites': 'Ajuste experimental; hay que ejecutar un servidor Java' },
          { 'Herramienta': '[Page Assist](/es/local-llms/page-assist-review)', 'Tipo': 'Barra lateral de chat con Ollama', 'Dónde funciona': 'Barra lateral de Chrome y Firefox', 'Límites': 'Basado en chat; pegas los resultados de vuelta' },
          { 'Herramienta': 'Atajo de teclado + Ollama', 'Tipo': 'Reescritura con LLM del texto seleccionado', 'Dónde funciona': 'Cualquier app, incluido Google Docs', 'Límites': 'Raycast (Pro) o un script de AutoHotkey' },
        ],
        items: [
          '**Flujo en Google Docs:** activa el modo Sugerencias en Docs, selecciona un párrafo, envíalo con tu atajo de teclado o barra lateral y pega el texto corregido. El modo Sugerencias deja cada cambio revisable.',
          '**Gmail:** el sitio de Harper señala que Gmail no es compatible a menos que se desactive el corrector gramatical integrado de Gmail. Usa el flujo de seleccionar y reescribir para los borradores de correo.',
          '**Mejor combinación:** un corrector basado en reglas para subrayados en línea en los editores que admite, más un LLM local para reescrituras, tono y resúmenes. Es lo más parecido, en local, a la mezcla de subrayados y reescritura con IA de Grammarly.',
          '**Autoalojar LanguageTool:** descarga el servidor de LanguageTool, inícialo en localhost y elige "Servidor local" en los ajustes experimentales del complemento del navegador. El servidor solo es accesible desde tu propio equipo, salvo que lo inicies con la opción pública.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Los correctores basados en reglas no necesitan GPU y no añaden latencia. Instala uno primero y añade un LLM solo para las tareas de reescritura que un corrector basado en reglas no puede hacer.',
          },
        ],
      },
      notionReplacement: {
        id: 'notion-replacement',
        title: 'Reemplazar Notion AI: redacción de documentos y notas',
        content:
          '**Obsidian con un backend local de Ollama es el equivalente funcional más cercano a Notion AI para quienes toman notas y trabajadores del conocimiento.** No replica la estructura de base de datos de Notion, pero para la redacción de documentos y las preguntas y respuestas sobre tus notas con IA, la capacidad es equivalente — con todo el procesamiento en local.',
        image: '/images/replace-grammarly-notion-ai-with-local-notion-ai-setup-flow-en.svg',
        imageCaption: 'Configuración del reemplazo de Notion AI en Obsidian: instala Ollama y descarga un modelo, instala Obsidian, añade el plugin Copilot apuntando a localhost:11434, añade Smart Connections para preguntas y respuestas sobre todo el vault, y luego redacta documentos y consulta tus notas completamente en local.',
        items: [
          '**Instala Obsidian** desde [obsidian.md](https://obsidian.md). Gratuito para uso personal y laboral. Crea un vault para tus notas — este es el directorio que los plugins de IA indexarán.',
          '**Instala el plugin Copilot** (Plugins de la comunidad → busca "Copilot"; consulta la [reseña de Copilot para Obsidian](/es/power-local-llm/copilot-for-obsidian-review)). En la configuración del plugin, selecciona "Ollama" como proveedor de LLM, introduce `http://localhost:11434` como URL base y selecciona tu modelo. Copilot añade una barra lateral de chat a Obsidian donde puedes hacer preguntas y generar contenido en el contexto de la nota actual.',
          '**Instala el plugin Smart Connections** para preguntas y respuestas sobre todo tu vault. Smart Connections indexa tus notas como embeddings con un modelo de embedding local y te permite hacer preguntas que recuperan notas relevantes antes de enviarlas al LLM. Este es el reemplazo directo de "pregunta sobre mis notas" de Notion AI.',
          '**Redacción de documentos:** en el chat de Copilot, escribe "Redacta un [tipo de documento] sobre [tema] basado en estas notas: [pega puntos clave]". El plugin incluye el contexto de la nota actual automáticamente. La salida aparece en el chat; copia y pega en la nota.',
          '**Expansión de contenido:** selecciona un esquema con viñetas en la nota, abre la paleta de comandos de Copilot y usa "Expandir selección" — el modelo convierte el esquema en prosa en el registro de escritura de la nota.',
          '**Generación de revisión semanal:** "Resume mis notas de esta semana en formato de revisión semanal: logros, bloqueos y próximas acciones." Smart Connections recupera las notas de los últimos 7 días y las pasa al LLM automáticamente.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obsidian con el plugin Copilot o Smart Connections apuntando a una instancia local de Ollama reemplaza a Notion AI para redacción de documentos, expansión de contenido y preguntas y respuestas sobre notas con IA — con todo el procesamiento en local y sin contenido transmitido a ningún servidor externo.',
          },
          {
            type: 'plain-terms',
            text: 'La configuración: instala Obsidian, instala Ollama, descarga un modelo, instala el plugin de la comunidad Copilot en Obsidian y apúntalo a localhost:11434. Ese es el reemplazo de las funciones de IA de Notion AI. Tus notas permanecen en tu carpeta vault (archivos markdown simples, totalmente portátiles). El chat de IA se ejecuta en tu equipo. Nada sale de tu ordenador.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Obsidian almacena las notas como archivos markdown simples en una carpeta que tú controlas. A diferencia del formato de base de datos propietario de Notion, tus notas son legibles en cualquier editor de texto y exportables en cualquier momento. Esta es una ventaja secundaria de privacidad y portabilidad sobre Notion — tu base de conocimiento no queda atada a una plataforma en la nube.',
          },
        ],
      },
      notionOllama: {
        id: 'notion-ollama',
        title: 'Notion y Ollama: qué se conecta y qué no',
        content:
          '**Notion no documenta ninguna forma de apuntar Notion AI a un modelo local, así que "Notion + Ollama" significa ejecutar el paso de IA fuera de Notion o sacar tus notas de Notion.** Las páginas de precios y seguridad publicadas por Notion describen una IA que se ejecuta en proveedores de modelos que elige Notion, sin ningún ajuste para tu propio endpoint. Además, Notion es un espacio de trabajo en la nube, no una base de datos local — no existe una base de datos local de Notion a la que conectar un modelo.',
        items: [
          '**Opción 1 — script mediante la API de Notion:** un pequeño script lee una página a través de la API de Notion, envía el texto a Ollama en `localhost:11434` y escribe el resultado de vuelta como un bloque nuevo. El paso del modelo es local; la página sigue en los servidores de Notion, así que solo se elimina al proveedor de IA.',
          '**Opción 2 — Notion MCP:** Notion aloja un servidor MCP (inicio de sesión OAuth) que los clientes MCP usan para leer y actualizar páginas. Notion cita a Claude Code, Cursor y Codex como clientes de ejemplo; si un cliente concreto puede manejar un modelo local es algo que depende de ese cliente.',
          '**Opción 3 — mover las notas con más IA a una app local-first:** Obsidian (archivos Markdown simples) con Copilot, como se explicó antes, o [AppFlowy](https://appflowy.com), un espacio de trabajo de código abierto (AGPL-3.0) al estilo de Notion con modo sin conexión y opciones de IA local según su página de comparación. Consulta la documentación de AppFlowy para la configuración exacta de modelos locales.',
          '**Lo que un modelo local no cambia:** el contenido que ya está en Notion lo almacena Notion. Ejecutar un modelo local sobre él elimina el paso del proveedor de IA, no el almacenamiento de Notion.',
          '**Lo que dice Notion sobre su propia IA:** por defecto, ni Notion ni sus proveedores de IA usan datos de clientes para entrenar modelos; en Enterprise, la mayoría de los modelos ofrecen retención cero de datos, mientras que en otros planes los proveedores conservan los datos hasta 30 días.',
        ],
        codeBlock:
          'import requests\n\nNOTION = {"Authorization": "Bearer <NOTION_TOKEN>", "Notion-Version": "2022-06-28"}\nPAGE_ID = "<page-id>"\n\n# 1. read the page text through the Notion API\nblocks = requests.get(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION).json()["results"]\ntext = "\\n".join(\n    "".join(t["plain_text"] for t in b["paragraph"]["rich_text"])\n    for b in blocks if b["type"] == "paragraph"\n)\n\n# 2. rewrite it with a local model (Ollama on localhost)\nr = requests.post("http://localhost:11434/api/generate", json={\n    "model": "gemma4:12b", "stream": False,\n    "prompt": "Correct the grammar of this text. Return only the corrected text.\\n\\n" + text,\n})\nfixed = r.json()["response"]\n\n# 3. append the result as a new paragraph block\nrequests.patch(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION, json={\n    "children": [{"object": "block", "type": "paragraph",\n                  "paragraph": {"rich_text": [{"type": "text", "text": {"content": fixed[:2000]}}]}}]\n})',
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'El script envía tu token de Notion y el contenido de la página solo a Notion y a localhost. Mantén el token fuera de archivos compartidos y ten en cuenta que los bloques de texto enriquecido de Notion admiten unos 2.000 caracteres cada uno, así que las salidas largas deben dividirse en varios bloques.',
          },
        ],
      },
      integrations: {
        id: 'integrations',
        title: 'Opciones de integración',
        content:
          '**Cuatro niveles de integración: básico (copiar-pegar), intermedio (app con atajo de teclado o app de escritura), en línea (corrector basado en reglas) y avanzado (extensión de navegador personalizada).** Empieza en el nivel que se adapte a tu comodidad técnica.',
        columns: ['Nivel de integración', 'Cómo', 'Apps', 'Ideal para'],
        rows: [
          { 'Nivel de integración': 'Básico (copiar-pegar)', 'Cómo': 'Abrir la app de IA local, pegar el texto, copiar el resultado', 'Apps': 'Chat de LM Studio, Ollama CLI, Open WebUI', 'Ideal para': 'Correcciones ocasionales; cualquier SO' },
          { 'Nivel de integración': 'Intermedio (atajo de teclado)', 'Cómo': 'Seleccionar texto → atajo → la versión corregida reemplaza la selección', 'Apps': 'Raycast AI (macOS, Pro), AutoHotkey + Ollama (Windows)', 'Ideal para': 'Correcciones frecuentes en cualquier app; cambio mínimo de flujo' },
          { 'Nivel de integración': 'Intermedio (app de escritura)', 'Cómo': 'Asistente de IA integrado en la herramienta de escritura', 'Apps': 'Obsidian + plugin Copilot, VS Code + Continue.dev', 'Ideal para': 'Escritores y desarrolladores que viven en estas apps' },
          { 'Nivel de integración': 'En línea (basado en reglas)', 'Cómo': 'Corrector local que subraya errores mientras escribes', 'Apps': 'Harper, LanguageTool autoalojado', 'Ideal para': 'Avisos mientras escribes, sin GPU' },
          { 'Nivel de integración': 'Avanzado (extensión de navegador)', 'Cómo': 'Extensión personalizada que envía el texto seleccionado a la API local de Ollama', 'Apps': 'Extensión Chrome/Firefox personalizada (plantillas abiertas en GitHub)', 'Ideal para': 'Usuarios avanzados que quieren integración en el navegador al estilo Grammarly' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'En macOS, Raycast con un comando de IA personalizado es una integración intermedia rápida si tienes Pro: crea un comando de IA con el prompt de corrección gramatical, asígnale un atajo de teclado, selecciona texto en cualquier app, pulsa el atajo y el texto corregido reemplaza la selección. Sin Pro, usa la CLI de Ollama o un cliente de chat como Open WebUI.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Recomendaciones de modelos para tareas de escritura',
        content:
          '**La asistencia de escritura favorece modelos con buen seguimiento de instrucciones y salida de prosa coherente.** El ranking difiere del de modelos para programación o matemáticas. Las opciones de abajo son puntos de partida elegidos por tamaño y seguimiento de instrucciones, no resultados de benchmarks de gramática.',
        columns: ['Tarea', 'Mejor modelo', 'Alternativa (menor VRAM)', 'Por qué'],
        rows: [
          { 'Tarea': 'Corrección gramatical', 'Mejor modelo': 'Gemma 4 12B', 'Alternativa (menor VRAM)': 'Qwen3.5 4B / Phi-4 Mini', 'Por qué': 'Sigue prompts de "corrige solo errores, devuelve texto"' },
          { 'Tarea': 'Reescritura de estilo', 'Mejor modelo': 'Gemma 4 12B o Qwen3.8 27B', 'Alternativa (menor VRAM)': 'Qwen3.5 4B', 'Por qué': 'Más margen para redacción y registro' },
          { 'Tarea': 'Ajuste de tono', 'Mejor modelo': 'Qwen3.8 27B', 'Alternativa (menor VRAM)': 'Gemma 4 12B', 'Por qué': 'Los modelos grandes suelen mantener mejor los datos' },
          { 'Tarea': 'Redacción de documentos (reemplazo de Notion AI)', 'Mejor modelo': 'Gemma 4 12B', 'Alternativa (menor VRAM)': 'Qwen3.5 4B', 'Por qué': 'Sigue instrucciones de formato de documento' },
          { 'Tarea': 'Resumen de notas / preguntas y respuestas', 'Mejor modelo': 'Gemma 4 12B', 'Alternativa (menor VRAM)': 'Qwen3.5 4B / Phi-4 Mini', 'Por qué': 'Resumir funciona bien con tamaños pequeños' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Establece una instrucción de "sin frases con tono de IA" en tu prompt de sistema. Los modelos usan por defecto un lenguaje de registro de IA con cautelas ("¡Por supuesto! Aquí está la versión corregida..."). Un prompt de sistema de "Devuelve solo el texto corregido, sin preámbulo, sin comentario" lo elimina. Para reescrituras de estilo, añade "No uses las frases \'profundizar en\', \'tapiz\', \'fomentar\', \'reino de\', o \'vale la pena señalar\'".',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Comparativa de privacidad',
        content:
          '**La diferencia de privacidad entre asistentes de escritura en la nube y LLM locales es estructural.** Los servicios en la nube no pueden procesar tu texto sin recibirlo; los LLM locales no pueden enviar tu texto a ningún lugar sin una conexión saliente explícita.',
        image: '/images/replace-grammarly-notion-ai-with-local-cost-privacy-overview-en.svg',
        imageCaption: 'Herramientas de escritura en la nube frente a un LLM local: Grammarly y Notion AI funcionan como 2 suscripciones de pago independientes y envían el texto a servidores en la nube, mientras que Ollama y Obsidian mantienen toda la escritura y las notas en tu dispositivo sin coste de software recurrente.',
        items: [
          '**Licencia de datos de Grammarly:** según la Sección 7.2 de los [Términos de Servicio de Grammarly](https://www.grammarly.com/terms), conservas la propiedad de tu contenido pero concedes a Grammarly una licencia mundial, no exclusiva y libre de regalías para usarlo con fines indicados, entre ellos operar, prestar y mejorar sus servicios y desarrollar nuevos productos o funciones. Los Términos también indican que aceptar o rechazar sugerencias puede ayudar a entrenar su motor de sugerencias. Grammarly afirma que a sus socios de LLM no se les permite usar datos de clientes para entrenar sus modelos.',
          '**Flujo de datos de Notion AI:** Notion envía las solicitudes de IA a una combinación de proveedores de modelos (la lista actual está en su página de subencargados). Notion afirma que, por defecto, ni ella ni sus proveedores de IA usan datos de clientes para entrenar modelos. Enterprise ofrece retención cero de datos con los proveedores de LLM; en otros planes, los proveedores conservan los datos hasta 30 días.',
          '**Flujo de datos de LLM local:** sin transmisión externa. Ollama escucha en localhost por defecto y la inferencia no realiza ninguna conexión saliente. Los pesos del modelo son archivos estáticos en el disco; tu texto se procesa en memoria.',
          '**Implicaciones de RGPD / secreto profesional:** los profesionales legales, médicos y cualquier persona sujeta a obligaciones de confidencialidad deberían comprobar las protecciones contractuales antes de usar Grammarly o Notion AI con contenido de clientes. Un LLM local evita la cuestión del encargado de tratamiento externo porque ningún dato sale del equipo.',
          '**Telemetría:** las herramientas en la nube recopilan datos de uso e interacción además del propio texto. Las apps locales varían — revisa los ajustes de telemetría de cada app y, si necesitas una garantía de nivel de auditoría, monitoriza tú mismo el tráfico saliente.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Si usas Grammarly para correspondencia laboral, borradores de contratos o cualquier contenido sujeto a obligaciones de confidencialidad, comprueba la política de datos de tu organización y los términos de datos empresariales vigentes antes de asumir que el contenido está protegido.',
          },
        ],
      },
      cost: {
        id: 'cost',
        title: 'Comparativa de costes',
        content:
          '**Reemplazar ambas herramientas elimina la suscripción de Grammarly y la parte de IA del plan de Notion.** La configuración del LLM local es gratuita en software; el único coste continuo es la electricidad.',
        columns: ['Herramienta', 'Coste mensual', 'Coste anual', 'Notas'],
        rows: [
          { 'Herramienta': '[Grammarly Free](https://www.grammarly.com/plans)', 'Coste mensual': '$0', 'Coste anual': '$0', 'Notas': '100 prompts de IA/mes; revisiones básicas' },
          { 'Herramienta': '[Grammarly Pro](https://www.grammarly.com/plans)', 'Coste mensual': 'desde ~$12/mes', 'Coste anual': 'desde ~$144/año', 'Notas': '2.000 prompts de IA/mes; más si se paga mensual' },
          { 'Herramienta': '[Notion AI](https://www.notion.com/pricing)', 'Coste mensual': 'en Business (~$20/usuario)', 'Coste anual': '~$240/usuario/año', 'Notas': 'Free y Plus: solo prueba; sin complemento aparte' },
          { 'Herramienta': '[Ollama (LLM local)](https://ollama.com)', 'Coste mensual': '$0', 'Coste anual': '$0', 'Notas': 'Gratuito y de código abierto; solo electricidad' },
          { 'Herramienta': '[Obsidian (reemplazo de Notion)](https://obsidian.md)', 'Coste mensual': '$0', 'Coste anual': '$0', 'Notas': 'Gratuito para uso personal y laboral' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si estás dudando sobre el cambio, empieza moviendo solo la corrección gramatical a un modelo local durante 30 días. Mantén Grammarly activo para la integración en el navegador. Evalúa si la calidad de corrección local y el flujo copiar-pegar son aceptables para tu escritura. Solo entonces decide si cancelar Grammarly. El cambio de Notion AI tiene menos fricción si estás dispuesto a usar Obsidian como capa de toma de notas.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        items: [
          '**Sin prompt de sistema para el formato de salida.** Sin prompt de sistema, los modelos anteponen a las correcciones frases como "¡Por supuesto! Aquí está el texto corregido:", añaden explicaciones y usan frases de registro de IA. Establece siempre un prompt de sistema que especifique "devuelve solo el texto corregido".',
          '**Usar el modelo más pequeño para reescrituras de estilo complejas.** Los modelos pequeños manejan bien la corrección gramatical, pero tienden a producir reescrituras de estilo más formulaicas. Para trabajo con mucho estilo, sube a Gemma 4 12B o a uno mayor.',
          '**Esperar equivalencia de UI de Notion en Obsidian.** Obsidian es un editor Markdown, no una base de datos. Si tu flujo de trabajo en Notion depende de bases de datos, vistas y relaciones, Obsidian no es un reemplazo completo de Notion — solo se transfieren las funciones de IA. Evalúa si las funciones de base de datos son críticas antes de cambiar.',
          '**No establecer un límite de palabras en las reescrituras de estilo.** Sin un límite, el modelo rellena las reescrituras. Añade "Mantén el texto reescrito dentro del 10% del recuento de palabras original" a cualquier prompt de reescritura de estilo.',
          '**Enviar documentos completos a un modelo pequeño.** Los modelos pequeños se desvían con entradas largas. Para documentos largos, divídelos en secciones y corrige cada sección de forma independiente.',
          '**Esperar subrayados en línea de un LLM.** Un LLM responde cuando se le pide; no vigila lo que escribes. Para subrayados mientras escribes, añade un corrector local basado en reglas como Harper.',
          '**Suponer que Notion AI puede usar un modelo local.** Notion no documenta compatibilidad con ello; usa la API de Notion con Ollama, o mueve las notas con más IA a una app local-first.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'Términos de Servicio de Grammarly — Sección 7.2 (licencia sobre el contenido del usuario) — [grammarly.com/terms](https://www.grammarly.com/terms)',
          'Planes de Grammarly — [grammarly.com/plans](https://www.grammarly.com/plans)',
          'IA responsable de Grammarly (uso de datos por socios) — [grammarly.com/responsible-ai](https://www.grammarly.com/responsible-ai)',
          'Precios de Notion y acceso a IA por plan — [notion.com/pricing](https://www.notion.com/pricing)',
          'Prácticas de seguridad de Notion AI (proveedores, entrenamiento, retención) — [notion.com/help/notion-ai-security-practices](https://www.notion.com/help/notion-ai-security-practices)',
          'Documentación de Notion MCP — [developers.notion.com/docs/mcp](https://developers.notion.com/docs/mcp)',
          'Obsidian gratuito para uso laboral (febrero de 2025) — [obsidian.md/blog/free-for-work](https://obsidian.md/blog/free-for-work/)',
          'Corrector gramatical Harper — [writewithharper.com](https://writewithharper.com)',
          'Servidor HTTP de LanguageTool (autoalojado) — [dev.languagetool.org/http-server](https://dev.languagetool.org/http-server)',
          'Modelos locales de Raycast — [manual.raycast.com/ai/local-models](https://manual.raycast.com/ai/local-models)',
          'Biblioteca de modelos de Ollama — [ollama.com/library/gemma4](https://ollama.com/library/gemma4), [ollama.com/library/qwen3.5](https://ollama.com/library/qwen3.5), [ollama.com/library/qwen3.8](https://ollama.com/library/qwen3.8)',
          'Documentación del plugin Copilot de Obsidian — [GitHub: logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot)',
          'Plugin Smart Connections de Obsidian — [GitHub: brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué LLM pequeños producen una buena corrección gramatical en local?',
            a: 'Qwen3.5 4B (`qwen3.5:4b`, unos 3–4 GB) y Phi-4 Mini (`phi4-mini`) caben en equipos de 8 GB; Gemma 4 12B (`gemma4:12b`) encaja en sistemas de 16 GB y en reescrituras de estilo; Qwen3.8 27B encaja con 24 GB o más. Ningún benchmark publicado los clasifica para corrección gramatical, así que prueba dos con cinco párrafos tuyos y quédate con el que cambie menos y aun así detecte tus errores. Usa un prompt de sistema de "corrige solo los errores, devuelve solo el texto corregido" y una temperatura baja.',
          },
          {
            q: '¿Existe una alternativa local a Grammarly que funcione en Google Docs?',
            a: 'No como sustituto directo. Ninguna de las herramientas locales tratadas aquí incluye Google Docs entre sus editores compatibles. La configuración que funciona es seleccionar → reescribir → pegar: selecciona texto en Docs (con el modo Sugerencias activado), envíalo mediante una herramienta de atajo de teclado o una barra lateral del navegador a un modelo local y pega el resultado. Para subrayados en línea en otros editores, las opciones locales son Harper (solo inglés, en el dispositivo, con extensiones para Chrome, Edge y Firefox) y un servidor LanguageTool autoalojado.',
          },
          {
            q: '¿Cómo uso Ollama con Notion?',
            a: 'Notion no documenta ninguna forma de apuntar Notion AI a un modelo local. Para usar Ollama con contenido de Notion, escribe un pequeño script que lea una página mediante la API de Notion, envíe el texto a Ollama en localhost:11434 y escriba el resultado de vuelta (consulta el ejemplo de arriba). El paso del modelo es local; la página sigue en los servidores de Notion. Para una configuración totalmente local, mueve las notas con más IA a Obsidian con el plugin Copilot o a una app local-first como AppFlowy.',
          },
          {
            q: '¿Puedo conectar un LLM local a una base de datos local de Notion?',
            a: 'Notion no tiene base de datos local: los espacios de trabajo viven en los servidores de Notion y se accede a ellos mediante su API. Puedes ejecutar el modelo en local e intercambiar texto con Notion a través de la API, o elegir un espacio de trabajo local-first. Obsidian guarda las notas como archivos Markdown en disco; AppFlowy es una app de código abierto al estilo de Notion con modo sin conexión.',
          },
          {
            q: '¿Puede un LLM local analizar mi estilo de escritura personal?',
            a: 'Sí. Pega tres muestras de tu escritura en un modelo local con el prompt de perfil de estilo de esta guía: devuelve una descripción en viñetas de la longitud de tus oraciones, tu tono, tu vocabulario y tus hábitos, además de un breve prompt de sistema que puedes reutilizar para que un modelo editor conserve tu voz. Como las muestras nunca salen de tu equipo, es seguro para borradores privados.',
          },
          {
            q: '¿Cuál es la diferencia entre Notion AI y Grammarly?',
            a: 'Trabajan en lugares distintos. Notion AI funciona dentro de Notion: redacta, resume y responde preguntas sobre tu espacio de trabajo. Grammarly revisa la escritura en distintas apps y campos de texto del navegador y ofrece reescrituras. Coinciden en la reescritura y el tono, pero ninguna reemplaza a la otra, y ambas pueden reemplazarse en la mayoría de las tareas con un LLM local más una app de notas.',
          },
          {
            q: '¿Funciona Grammarly en Notion y Obsidian?',
            a: 'La extensión de navegador de Grammarly revisa los campos de texto de los editores basados en navegador, lo que incluye Notion en la web. Las apps de escritorio como Obsidian quedan fuera del alcance de una extensión de navegador. Para Obsidian, un corrector local como Harper (que tiene un plugin para Obsidian) o el plugin Copilot con Ollama cubre lo mismo sin enviar texto a un servicio en la nube.',
          },
          {
            q: '¿Es un LLM local tan bueno como Grammarly en corrección gramatical?',
            a: 'Para los errores cotidianos de gramática, puntuación y ortografía, un modelo local bien indicado maneja las mismas correcciones; compruébalo con tu propio texto. Donde Grammarly mantiene ventaja: correcciones en línea en tiempo real mientras escribes y la extensión de navegador que funciona en Gmail, Google Docs y otras apps web. Un LLM local requiere un flujo de seleccionar y pegar para el texto en campos del navegador.',
          },
          {
            q: '¿Puedo usar Obsidian como un reemplazo completo de Notion?',
            a: 'Obsidian reemplaza bien las funciones de toma de notas y base de conocimiento de Notion. No reemplaza las funciones de base de datos, gestión de proyectos y datos relacionales de Notion. Si tu uso de Notion es principalmente notas, documentos y wikis — Obsidian es un reemplazo completo. Si dependes de las bases de datos de Notion, vistas de tablero o propiedades relacionales — necesitarías herramientas adicionales (Anytype, AppFlowy, o el propio Notion para la capa de base de datos con Obsidian para escribir).',
          },
          {
            q: '¿Qué modelo local se acerca más a las sugerencias de escritura de Grammarly?',
            a: 'Ningún modelo local reproduce el motor de sugerencias de Grammarly, y ningún benchmark clasifica los modelos para eso. En la práctica, Gemma 4 12B y Qwen3.8 27B dan más margen para reescrituras de estilo y tono cuando se les pide conservar la voz original, mientras que Qwen3.5 4B y Phi-4 Mini bastan para correcciones solo de gramática. Combina cualquiera de ellos con un corrector basado en reglas como Harper si quieres subrayados mientras escribes.',
          },
          {
            q: '¿El plugin Copilot de Obsidian envía mis notas a la nube?',
            a: 'No cuando está configurado para usar una instancia local de Ollama. El plugin admite tanto LLM en la nube (OpenAI, Anthropic) como Ollama local. Cuando seleccionas Ollama como proveedor de LLM e introduces la URL de localhost, todo el procesamiento de IA se realiza en local. No se transmite ningún contenido de notas al exterior. Confírmalo monitorizando el tráfico de red con una herramienta como Little Snitch (macOS) o Wireshark si necesitas verificación de nivel de auditoría.',
          },
          {
            q: '¿Puedo usar un LLM local en Google Docs o Gmail?',
            a: 'No directamente — no existe una extensión de navegador con LLM local equivalente a Grammarly que se integre de forma nativa en los campos de texto del navegador. Las soluciones alternativas son: (1) seleccionar texto en Google Docs, copiar, pegar en tu app de IA local, copiar la versión corregida y pegarla de vuelta; (2) una herramienta de atajo de teclado que procese el texto seleccionado y lo reemplace (Raycast con modelos locales requiere Pro; un script de AutoHotkey que llame a la API de Ollama es gratuito); (3) una extensión de Chrome personalizada que lea el texto seleccionado y llame a la API local de Ollama (existen plantillas de código abierto en GitHub). Ninguna de estas iguala la experiencia en línea fluida de Grammarly.',
          },
          {
            q: '¿Esta configuración cumple con HIPAA o RGPD para uso profesional?',
            a: 'Un LLM local que procesa datos exclusivamente en tu equipo sin transmisión externa aborda la preocupación central de transferencia de datos tanto para HIPAA como para el RGPD. Sin embargo, el cumplimiento depende de tu pila tecnológica completa, de los controles de seguridad y de los requisitos regulatorios específicos. Un LLM local no es automáticamente conforme — necesitas evaluar la seguridad del endpoint, la protección física del dispositivo y los controles de acceso. Para el cumplimiento formal, consulta con tu responsable de cumplimiento. El procesamiento local elimina la preocupación del "encargado de tratamiento externo" pero no sustituye a un programa de cumplimiento completo.',
          },
          {
            q: '¿Cuál es el mejor asistente de escritura local para artículos académicos?',
            a: 'Un modelo local de tamaño medio (por ejemplo, Gemma 4 12B) con un prompt de sistema que especifique "Corrige solo la gramática y la puntuación — no cambies el vocabulario, la estructura de las oraciones ni el contenido. Preserva todas las citas, términos técnicos y el lenguaje específico del campo sin cambios." Esto replica un modo solo gramática, una configuración de menor riesgo para la escritura académica donde cambiar la redacción podría alterar inadvertidamente el significado o parecer que se modifica el contenido citado.',
          },
          {
            q: '¿Puedo reemplazar localmente el resumen de notas de reuniones de Notion AI?',
            a: 'Sí. Exporta las notas de la reunión como un archivo de texto o markdown (o pega el texto de la transcripción directamente). Usa el prompt: "Resume estas notas de reunión en: (1) Decisiones clave tomadas, (2) Elementos de acción con responsables, (3) Preguntas abiertas. Usa viñetas para cada sección. Mantén el resumen en menos de 300 palabras." Un modelo pequeño que siga instrucciones maneja el resumen de reuniones. Para reuniones recurrentes, crea una plantilla de prompt guardada en tu app de IA local.',
          },
          {
            q: '¿Qué LLM usa Grammarly? ¿Es Grammarly un LLM?',
            a: 'Grammarly es un producto de escritura, no un único modelo. Grammarly no nombra sus modelos subyacentes en las páginas que revisamos (planes, términos y su página de IA responsable). Su página de IA responsable indica que la información usada para impulsar sus funciones de IA generativa se comparte con socios de LLM y que a esos socios no se les permite usar datos de clientes para entrenar sus modelos. Notion AI es similar: usa una combinación de proveedores listados en su página de subencargados. Los investigadores también han publicado modelos abiertos de edición de texto bajo la organización grammarly en Hugging Face (CoEdIT, de 770M a 11B de parámetros), que son modelos de investigación y no el producto en sí. Lo que importa para la privacidad es el tratamiento de los datos: el texto enviado a cualquiera de los dos productos se procesa en los servidores del proveedor. Un LLM local evita eso — el texto nunca sale de tu equipo.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[LLM local con Obsidian](/es/power-local-llm/local-llm-with-obsidian-2026) — configuración completa de Obsidian + Ollama para tomar notas y hacer preguntas y respuestas sobre tu vault.',
          '[Reseña de Copilot para Obsidian](/es/power-local-llm/copilot-for-obsidian-review) — el plugin Copilot usado en el flujo de reemplazo de Notion AI.',
          '[Plugins de IA para Obsidian y Logseq comparados](/es/power-local-llm/obsidian-logseq-ai-plugins) — opciones de plugins para IA local en apps de toma de notas.',
          '[Modelos LLM locales pequeños](/es/local-llms/small-local-llm-models) — modelos pequeños actuales para equipos de 4–8 GB, relevantes para la corrección gramatical en local.',
          '[Automatización de correo y calendario con LLM local](/es/power-local-llm/local-llm-email-and-calendar-automation) — automatización de borradores de correo y gestión de calendario con LLM locales, complementando la configuración del asistente de escritura.',
          '[Prompts de LLM local para escritores de ficción](/es/power-local-llm/local-llm-prompts-for-fiction-writers) — plantillas de prompt para tareas de escritura creativa que van más allá de la corrección gramatical hacia la escritura de escenas y el desarrollo de personajes.',
          '[Reemplaza Zapier con agentes de IA locales](/es/power-local-llm/replace-zapier-with-local-ai-agents) — automatización de flujos de trabajo local que conecta herramientas de escritura con otros procesos empresariales.',
          '[RAG local para datos empresariales privados](/es/power-local-llm/local-rag-for-private-business-data) — preguntas y respuestas sobre documentos empresariales privados, extendiendo el caso de uso de preguntas y respuestas sobre notas a bibliotecas de documentos más grandes.',
          '[La app de IA local más fácil para Windows, Mac y Linux](/es/power-local-llm/easiest-local-ai-app-windows-mac-linux) — si necesitas configurar tu primera app de IA local antes de implementar el flujo de trabajo del asistente de escritura.',
          '[Agentes de IA local para flujos de trabajo empresariales: cumplimiento de la UE](/es/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — contexto de RGPD y Ley de IA de la UE para desplegar asistentes de escritura de IA local en entornos empresariales europeos.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Reemplaza Grammarly y Notion AI con un LLM local (2026)',
      description: 'Alternativa local a Grammarly: los mejores LLM pequeños para corregir gramática, qué funciona en Google Docs y Notion, y configuraciones con Ollama sin nube.',
      url: 'https://www.promptquorum.com/es/power-local-llm/replace-grammarly-notion-ai-with-local',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-10-19',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Beginner',
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/replace-grammarly-notion-ai-with-local-overview-hero-pt.webp',
    title: 'Substitua o Grammarly e o Notion AI por um LLM local (2026)',
    seoTitle: 'Alternativa local ao Grammarly: melhores LLMs 2026',
    intro:
      'Grammarly e Notion AI processam sua escrita em servidores na nuvem — seus rascunhos de e-mail, documentos confidenciais e anotações pessoais passam por sistemas de terceiros por design. Um LLM local executado via Ollama ou LM Studio pode substituir ambos na maioria das tarefas de escrita: correção gramatical e de estilo, redação de documentos, resumo de conteúdo e anotações assistidas por IA — sem que nenhum texto saia do seu computador. Este guia mostra quais modelos pequenos corrigem bem a gramática, o que funciona no Google Docs e no Notion e onde ainda existe uma lacuna em relação ao Grammarly.',
    metaDescription:
      'Alternativa local ao Grammarly: melhores LLMs pequenos para gramática, opções no Google Docs e Notion e setups com Ollama que mantêm seu texto no PC.',
    twitterDescription:
      'Substitua Grammarly e Notion AI por um LLM local: melhores modelos pequenos para correção gramatical, opções no Google Docs e Notion, setup com Ollama — nenhum texto sai do seu computador.',
    current_models_mentioned: [
      'Qwen3.5 4B',
      'Gemma 4 E4B',
      'Gemma 4 12B',
      'Qwen3.8 27B',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M3 MacBook Air 8 GB',
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 3060 12 GB',
    ],
    audience:
      'Trabalhadores do conhecimento, escritores, estudantes e profissionais preocupados com privacidade que usam Grammarly para correção de escrita e Notion AI para assistência com documentos, e querem substituir ambos por uma IA local que mantenha seu conteúdo privado.',
    readTime: '13 min de leitura',
    educationalLevel: 'Beginner',
    primaryTerm: 'substituir Grammarly por LLM local',
    targetKeywords: [
      'substituir grammarly llm local',
      'alternativa local ao grammarly',
      'melhor llm para correção gramatical',
      'llm pequeno correção gramatical',
      'substituir notion ai local',
      'notion ollama',
      'assistente de escrita llm local',
      'alternativa grammarly sem nuvem',
      'alternativa notion ai privacidade',
      'ollama correção de escrita',
    ],
    leadAnswerBlock:
      '**Um LLM local executado via Ollama substitui o núcleo do Grammarly e do Notion AI sem enviar seu texto a um serviço na nuvem. Para o Grammarly: correção gramatical e de estilo por meio de um template de prompt ("Corrija a gramática e melhore o estilo deste parágrafo. Retorne apenas o texto corrigido.") em qualquer modelo a partir do Qwen3.5 4B. Para o Notion AI: redação de documentos e perguntas e respostas sobre suas anotações via Obsidian com o plugin Copilot ou Smart Connections apontando para o Ollama. O argumento de privacidade é concreto: os Termos de Serviço do Grammarly (Seção 7.2) concedem a ele uma licença sobre o seu conteúdo para operar e melhorar seus serviços, e o Notion AI encaminha as requisições a provedores de modelos de terceiros, enquanto um modelo local processa o mesmo texto no seu próprio hardware. A lacuna é pequena na escrita do dia a dia e maior em dois pontos: a verificação enquanto você digita no Google Docs, no Gmail e em outros editores de navegador, e as sugestões de estilo específicas de cada área.**',
    quickAnswerTop: {
      pt: {
        question: 'Um LLM local pode substituir o Grammarly e o Notion AI?',
        answer:
          'Sim, para a maioria dos casos de uso do dia a dia. Para o Grammarly: um LLM local faz correção gramatical, reescrita para maior clareza, eliminação de voz passiva e ajuste básico de tom. Ele não iguala as sugestões inline em tempo real nem a integração por extensão de navegador do Grammarly, mas um fluxo baseado em prompts cobre as mesmas correções sob demanda. Para o Notion AI: Obsidian com o plugin Copilot apontando para o Ollama substitui a redação de documentos, a expansão de conteúdo e as perguntas e respostas sobre suas anotações. O Notion não documenta uma forma de apontar o próprio Notion AI para um modelo local. Pontos de partida: Qwen3.5 4B (download de cerca de 3–4 GB, sistemas de 8 GB), Gemma 4 12B (sistemas de 16 GB) ou Qwen3.8 27B (24 GB ou mais) — nenhum benchmark específico de gramática classifica esses modelos, então teste dois nos seus próprios parágrafos.',
        bullets: [
          'Correção gramatical: qualquer modelo local que siga instruções, com um prompt de sistema "corrija apenas a gramática, retorne o texto corrigido", cobre o caso de uso principal de correção do Grammarly.',
          'Modelos pequenos: Qwen3.5 4B e Phi-4 Mini cabem em máquinas de 8 GB; Gemma 4 12B é o passo seguinte para reescritas de estilo em 16 GB.',
          'Substituição do Notion AI: Obsidian + plugin Copilot (ou plugin Smart Connections) apontando para o Ollama — perguntas e respostas sobre anotações, redação de documentos, expansão de conteúdo.',
          'Correção em tempo real: LLMs locais não sublinham erros enquanto você digita no Google Docs ou no Gmail. Use um fluxo com atalho de teclado/barra lateral, ou um verificador local baseado em regras, como o Harper, para sublinhados inline nos editores compatíveis.',
          'Privacidade: o Grammarly licencia seu conteúdo conforme a Seção 7.2 dos Termos; o Notion AI envia requisições a provedores de modelos de terceiros. Um LLM local processa tudo localmente, sem transmissão externa.',
          'Custo: o Grammarly Pro começa em cerca de $12/mês (cobrança anual); o Notion AI está incluído no plano Business (cerca de $20/usuário/mês). Um LLM local é gratuito após o custo do hardware.',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Principais destaques', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'O que você está substituindo (e o que não está)', anchor: '#what-you-replace' },
      { label: 'Substituir Grammarly: correção gramatical e de estilo', anchor: '#grammarly-replacement' },
      { label: 'Melhores LLMs pequenos para correção gramatical local', anchor: '#small-models-grammar' },
      { label: 'Google Docs, Gmail e verificação inline sem a nuvem', anchor: '#google-docs-inline' },
      { label: 'Substituir Notion AI: redação de documentos e anotações', anchor: '#notion-replacement' },
      { label: 'Notion e Ollama: o que se conecta e o que não', anchor: '#notion-ollama' },
      { label: 'Opções de integração', anchor: '#integrations' },
      { label: 'Recomendações de modelos', anchor: '#models' },
      { label: 'Comparativo de privacidade', anchor: '#privacy' },
      { label: 'Comparativo de custos', anchor: '#cost' },
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
          '**Os LLMs locais substituem a função principal do Grammarly — gramática, clareza e correção básica de estilo — mas não sua integração inline em tempo real.** O fluxo muda de "as correções aparecem enquanto você digita" para "selecionar o texto → obter a versão corrigida → colar de volta". Para muitos usuários, essa é uma troca aceitável por privacidade total.',
          '**A substituição do Notion AI é mais completa, mas exige abandonar a IA do Notion.** O Notion não documenta uma forma de apontar o Notion AI para um modelo local. Obsidian com o plugin Copilot (ou Smart Connections) apontando para uma instância local do Ollama iguala a redação de documentos, a expansão de conteúdo e as perguntas e respostas sobre anotações — com todo o processamento local. Permanecer no Notion só é possível executando você mesmo a etapa de IA pela API do Notion.',
          '**O argumento de privacidade não é teórico.** Os Termos de Serviço do Grammarly (Seção 7.2) concedem a ele uma licença sobre o seu conteúdo para operar, melhorar e desenvolver seus serviços. O Notion AI envia requisições a provedores de modelos de terceiros; o Notion afirma que, por padrão, nem ele nem seus provedores treinam modelos com dados de clientes. Um LLM local processa o mesmo texto no seu hardware, sem transmissão externa.',
          '**Modelos pequenos bastam para gramática.** Qwen3.5 4B e Phi-4 Mini cabem em máquinas de 8 GB; Gemma 4 12B atende sistemas de 16 GB e reescritas de estilo. Nenhum benchmark publicado classifica esses modelos para correção gramatical, então teste dois nos seus próprios parágrafos antes de decidir.',
          '**Para sublinhados inline, adicione um verificador baseado em regras.** O Harper (local, apenas inglês) e um servidor LanguageTool auto-hospedado sublinham erros enquanto você digita nos editores compatíveis. O Google Docs não consta como compatível com o Harper, então ali o fluxo continua sendo selecionar → reescrever → colar.',
          '**O custo é um argumento secundário.** O Grammarly Pro começa em cerca de $12/mês com cobrança anual; o Notion AI agora faz parte do plano Business (cerca de $20/usuário/mês), e não mais um complemento separado. O equivalente com LLM local é gratuito após o custo único de hardware.',
          '**A configuração leva cerca de 20 minutos.** Instalação do Ollama + download do modelo + configuração do plugin do Obsidian é um processo único.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Custo do Grammarly:** Free (100 prompts de IA/mês), Pro a partir de cerca de $12/mês com cobrança anual (2.000 prompts de IA/mês), Enterprise sob consulta.',
          '**Custo do Notion AI:** incluído no plano Business (cerca de $20/usuário/mês com cobrança anual); os planos Free e Plus têm apenas um período de teste.',
          '**Custo do LLM local:** gratuito (modelos de código aberto + Ollama) — apenas a eletricidade do hardware.',
          '**Pontos de partida com modelos pequenos:** Qwen3.5 4B (`qwen3.5:4b`) ou Phi-4 Mini (`phi4-mini`) em 8 GB; Gemma 4 12B (`gemma4:12b`) em 16 GB; Qwen3.8 27B (`qwen3.8:27b`) em 24 GB ou mais.',
          '**Privacidade do Grammarly:** a Seção 7.2 dos Termos de Serviço licencia seu conteúdo para operar, melhorar e desenvolver os serviços do Grammarly.',
          '**Privacidade do Notion AI:** as requisições vão para provedores de modelos de terceiros; por padrão, nem o Notion nem seus provedores treinam modelos com dados de clientes.',
          '**Custo do Obsidian:** gratuito para uso pessoal e profissional desde fevereiro de 2025.',
        ],
      },
      whatYouReplace: {
        id: 'what-you-replace',
        title: 'O que você está substituindo (e o que não está)',
        content:
          '**Um LLM local cobre a maior parte do uso cotidiano do Grammarly e do Notion AI, mas a parte que ele não cobre importa para alguns usuários.** Entender a lacuna antes de trocar evita decepções.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Um LLM local substitui a correção gramatical, a reescrita de estilo e o ajuste de tom do Grammarly, e a redação de documentos e as perguntas e respostas sobre anotações do Notion AI — mas não substitui a integração inline em tempo real do Grammarly nem a integração nativa do editor do Notion AI.',
          },
          {
            type: 'plain-terms',
            text: 'O Grammarly funciona observando o que você digita no navegador ou no desktop e mostrando correções conforme você escreve. Um LLM local não faz isso sozinho. O que ele faz é corrigir qualquer texto que você entregar — então o fluxo passa a ser: redigir o e-mail, selecionar o texto, enviá-lo ao seu app de IA local ou a uma ferramenta de atalho, receber a versão corrigida e colar no Gmail. Mais lento que as correções inline, mas privado e gratuito.',
          },
        ],
        columns: ['Função', 'Grammarly', 'Equivalente com LLM local', 'Lacuna'],
        rows: [
          { 'Função': 'Correção gramatical', 'Grammarly': 'Inline, em tempo real', 'Equivalente com LLM local': 'Baseado em prompt, sob demanda', 'Lacuna': 'Sem inline em tempo real; fluxo copiar-colar' },
          { 'Função': 'Sugestões de estilo', 'Grammarly': 'Inline com explicações', 'Equivalente com LLM local': 'Reescrita baseada em prompt', 'Lacuna': 'Sem explicações por sugestão por padrão' },
          { 'Função': 'Detecção de tom', 'Grammarly': 'Automática, tons nomeados', 'Equivalente com LLM local': 'Tom alvo especificado no prompt', 'Lacuna': 'Requer instrução de tom explícita' },
          { 'Função': 'Extensão de navegador', 'Grammarly': 'Funciona no Gmail, Google Docs, campos do navegador', 'Equivalente com LLM local': 'Copiar-colar, atalho ou app de barra lateral', 'Lacuna': 'Sem integração nativa no navegador' },
          { 'Função': 'Notion AI: redação de documentos', 'Grammarly': 'N/A', 'Equivalente com LLM local': 'Obsidian + plugin Copilot → Ollama', 'Lacuna': 'Não integrado na UI do Notion; app separado' },
          { 'Função': 'Notion AI: perguntas e respostas sobre anotações', 'Grammarly': 'N/A', 'Equivalente com LLM local': 'Obsidian Smart Connections → Ollama', 'Lacuna': 'Requer vault do Obsidian; sem busca no BD do Notion' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A lacuna de integração importa mais se você escreve no Gmail, no Google Docs ou em outros editores de navegador onde o Grammarly mostra correções inline. Se você escreve principalmente em apps de desktop (Word, Obsidian, VS Code, Scrivener), o fluxo copiar-colar com um LLM local é apenas um pouco mais lento que as sugestões inline. Conheça seu ambiente de escrita antes de decidir.',
          },
        ],
      },
      grammarlyReplacement: {
        id: 'grammarly-replacement',
        title: 'Substituir Grammarly: correção gramatical e de estilo',
        content:
          '**O fluxo de substituição do Grammarly consiste em alguns templates de prompt e um app de atalho de teclado.** Um template para correção apenas de gramática; um para reescrita completa de estilo; um para tom. Em um notebook comum, textos do tamanho de um parágrafo voltam em poucos segundos; a velocidade depende do tamanho do modelo e do hardware.',
        promptExamples: [
          {
            label: 'Apenas correção gramatical (substituição básica do Grammarly)',
            text: 'Corrija a gramática, ortografia e pontuação do seguinte texto. Retorne apenas o texto corrigido — sem explicação, sem marcação, sem resumo.\n\n[cole seu texto]',
          },
          {
            label: 'Reescrita de estilo e clareza (substituição do Grammarly Premium)',
            text: 'Reescreva o seguinte texto para maior clareza e tom profissional. Corrija a gramática, elimine a voz passiva, encurte as frases longas e elimine frases de preenchimento. Retorne apenas o texto reescrito.\n\nTom alvo: [profissional / casual / acadêmico / persuasivo]\nPúblico alvo: [geral / técnico / executivo]\n\n[cole seu texto]',
          },
          {
            label: 'Prompt de ajuste de tom',
            text: 'Reescreva o seguinte e-mail para que seja [mais formal / mais casual / mais conciso / mais diplomático]. Mantenha todo o conteúdo factual idêntico. Retorne apenas o e-mail reescrito.\n\n[cole seu e-mail]',
          },
          {
            label: 'Perfil de estilo pessoal (analise sua própria escrita localmente)',
            text: 'Abaixo estão três amostras da minha escrita. Descreva meu estilo em 8 tópicos: comprimento típico das frases, nível de vocabulário, tom, construções que prefiro, hábitos de pontuação e o que evito. Depois escreva um prompt de sistema de 100 palavras que faça um modelo editor corrigir textos mantendo este estilo.\n\nAmostra 1: [cole]\nAmostra 2: [cole]\nAmostra 3: [cole]',
          },
        ],
        items: [
          '**Prompt de sistema para sessões de escrita:** configure o prompt de sistema do seu app de IA local como "Você é um editor profissional. Retorne apenas o texto corrigido ou reescrito — sem preâmbulo, sem explicação, sem comentário." Isso evita que o modelo escreva "Ótimo texto! Aqui está minha correção..." antes da saída.',
          '**Integração com atalho de teclado:** use Raycast (macOS) ou AutoHotkey (Windows) para criar um atalho que envie o texto selecionado ao Ollama e cole o resultado. Isso reduz o fluxo copiar-colar a uma única tecla. Observe que o manual do Raycast lista o suporte a modelos locais como recurso Pro; um script AutoHotkey que chama a API do Ollama é gratuito.',
          '**Apenas gramática vs. reescrita de estilo:** use prompts separados para correção apenas de gramática e reescritas de estilo completas. Apenas gramática é mais seguro para documentos jurídicos, técnicos ou estruturados, onde mudar a redação poderia mudar o significado. A reescrita de estilo é adequada para e-mails, posts de blog e correspondência geral.',
          '**Para escrita acadêmica:** adicione "Preserve todas as citações, termos técnicos e vocabulário de domínio sem alterações" ao prompt de reescrita de estilo. Sem essa instrução, os modelos às vezes simplificam ou parafraseiam a linguagem técnica.',
          '**Para e-mail empresarial:** adicione "O remetente é [Nome], [Cargo] na [Empresa]. O e-mail deve refletir sua voz profissional sem detalhes de personalização na saída." Isso ancora o registro ao contexto profissional do remetente.',
          '**Analise seu próprio estilo localmente:** o prompt de perfil de estilo acima transforma três amostras de escrita em um prompt de sistema reutilizável. Como as amostras nunca saem do seu computador, é seguro usá-lo em rascunhos privados, que um assistente na nuvem teria de receber primeiro.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Um fluxo rápido no macOS: instale o Ollama, baixe um modelo como o Gemma 4 12B e crie um comando de IA do Raycast com o prompt de correção gramatical (modelos locais no Raycast exigem uma assinatura Pro). Selecione o texto em qualquer app, ative o atalho e a versão corrigida substitui a seleção. No Windows, um script AutoHotkey que envia a seleção para a API do Ollama faz o mesmo sem assinatura.',
          },
        ],
      },
      smallModelsGrammar: {
        id: 'small-models-grammar',
        title: 'Melhores LLMs pequenos para correção gramatical local',
        content:
          '**Para correção gramatical, comece com o Qwen3.5 4B em máquinas de 8 GB e com o Gemma 4 12B em máquinas de 16 GB; ambos seguem a instrução "retorne apenas o texto corrigido" e rodam em notebooks comuns.** Corrigir gramática é, em grande parte, seguir instruções: o modelo deve alterar o mínimo possível e devolver somente o texto corrigido.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O melhor LLM pequeno para correção gramatical local é o menor modelo que segue instruções e corrige seus erros sem reescrever o que já estava certo — Qwen3.5 4B, Phi-4 Mini e Gemma 4 12B são pontos de partida sensatos, e nenhum benchmark publicado os classifica para gramática.',
          },
          {
            type: 'plain-terms',
            text: 'Corrigir gramática não exige um modelo grande. Exige um modelo que obedeça a "corrija apenas os erros". Instale dois candidatos, cole os mesmos cinco parágrafos nos dois e fique com o que muda menos e ainda pega seus erros. Esse teste leva dez minutos e diz mais do que qualquer ranking.',
          },
        ],
        columns: ['Modelo', 'Tag do Ollama', 'Download', 'Roda em', 'Ideal para'],
        rows: [
          { 'Modelo': 'Phi-4 Mini', 'Tag do Ollama': 'phi4-mini', 'Download': '~2,5 GB', 'Roda em': '8 GB de RAM', 'Ideal para': 'Correções rápidas e simples; sobretudo inglês' },
          { 'Modelo': 'Qwen3.5 4B', 'Tag do Ollama': 'qwen3.5:4b', 'Download': '~3,3–4 GB', 'Roda em': '8 GB de RAM', 'Ideal para': 'Só gramática, e-mails curtos, vários idiomas' },
          { 'Modelo': 'Gemma 4 E4B', 'Tag do Ollama': 'gemma4:e4b', 'Download': '~6,6–9,5 GB', 'Roda em': '16 GB de RAM', 'Ideal para': 'Texto multilíngue, ajustes leves de estilo' },
          { 'Modelo': 'Gemma 4 12B', 'Tag do Ollama': 'gemma4:12b', 'Download': '~7,7–8 GB', 'Roda em': '16 GB de RAM', 'Ideal para': 'Reescritas de estilo e ajuste de tom' },
          { 'Modelo': 'Qwen3.8 27B', 'Tag do Ollama': 'qwen3.8:27b', 'Download': '~18 GB', 'Roda em': '24 GB+ de RAM/VRAM', 'Ideal para': 'Reescritas longas e com nuances' },
        ],
        items: [
          '**Nenhum benchmark específico de gramática classifica esses modelos.** Os fabricantes publicam resultados gerais de seguimento de instruções, não a precisão da correção gramatical. Avalie pelo seu próprio texto.',
          '**O que verificar no teste:** correção excessiva (trechos que estavam bons foram alterados), mudança de sentido (números, nomes, negações), manutenção da variante ortográfica (britânico vs. americano) e se o modelo devolve apenas o texto.',
          '**Idiomas:** Qwen3.5 e Gemma 4 são multilíngues; o Phi-4 Mini é voltado principalmente ao inglês. Para textos em outros idiomas, teste primeiro no seu idioma.',
          '**Mantenha determinístico:** uma temperatura baixa (em torno de 0,2) reduz reformulações criativas. O Modelfile abaixo incorpora as instruções de editor e a temperatura em um modelo reutilizável.',
          '**Documentos longos:** modelos pequenos perdem o fio em entradas longas. Corrija seção por seção em vez de colar o documento inteiro.',
        ],
        codeBlock:
          'FROM qwen3.5:4b\nPARAMETER temperature 0.2\nSYSTEM """You are a copy editor. Fix grammar, spelling, and punctuation only. Keep the author\'s wording, meaning, and spelling variant. Return only the corrected text."""\n\n# then run:\n#   ollama create grammar-fix -f Modelfile\n#   ollama run grammar-fix',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Se um modelo imprimir seu raciocínio ou um preâmbulo antes do texto corrigido, mude para uma variante sem raciocínio ou para outro modelo. Uma ferramenta de gramática que comenta cada resposta é mais lenta que revisar o texto à mão.',
          },
        ],
      },
      googleDocsInline: {
        id: 'google-docs-inline',
        title: 'Google Docs, Gmail e verificação inline sem a nuvem',
        content:
          '**Nenhuma das ferramentas locais analisadas aqui lista o Google Docs como editor compatível; por isso, o setup prático para o Google Docs é um atalho ou barra lateral para reescritas com LLM, mais um verificador local baseado em regras para sublinhados inline onde houver suporte.** Um LLM e um verificador baseado em regras fazem trabalhos diferentes: o LLM reescreve sob demanda, o verificador sublinha erros enquanto você digita.',
        columns: ['Ferramenta', 'Tipo', 'Onde funciona', 'Limites'],
        rows: [
          { 'Ferramenta': '[Harper](https://writewithharper.com)', 'Tipo': 'Baseado em regras, local, sem LLM', 'Onde funciona': 'Chrome, Edge, Firefox, Obsidian, VS Code, app macOS', 'Limites': 'Só inglês; Google Docs não consta' },
          { 'Ferramenta': '[LanguageTool](https://dev.languagetool.org/http-server) (auto-hospedado)', 'Tipo': 'Servidor baseado em regras no localhost', 'Onde funciona': 'Add-on de navegador, opção "Local server"', 'Limites': 'Opção experimental; exige servidor Java' },
          { 'Ferramenta': '[Page Assist](/pt/local-llms/page-assist-review)', 'Tipo': 'Barra lateral de chat com Ollama', 'Onde funciona': 'Barra lateral do Chrome e Firefox', 'Limites': 'Baseado em chat; você cola o resultado' },
          { 'Ferramenta': 'Atalho + Ollama', 'Tipo': 'Reescrita do texto selecionado por LLM', 'Onde funciona': 'Qualquer app, inclusive o Google Docs', 'Limites': 'Raycast (Pro) ou script AutoHotkey' },
        ],
        items: [
          '**Fluxo no Google Docs:** ative o modo Sugestões no Docs, selecione um parágrafo, envie-o pelo seu atalho ou barra lateral e cole o texto corrigido. O modo Sugestões mantém cada alteração revisável.',
          '**Gmail:** o site do Harper observa que o Gmail não é compatível, a menos que o corretor gramatical nativo do Gmail esteja desativado. Use o fluxo de selecionar e reescrever para rascunhos de e-mail.',
          '**Melhor combinação:** um verificador baseado em regras para sublinhados inline nos editores compatíveis, mais um LLM local para reescritas, tom e resumos. É a combinação local mais próxima da mistura de sublinhados e reescrita com IA do Grammarly.',
          '**Auto-hospedar o LanguageTool:** baixe o servidor do LanguageTool, inicie-o no localhost e escolha "Local server" em Configurações experimentais no add-on do navegador. O servidor só é acessível a partir da sua própria máquina, a menos que você o inicie com a opção pública.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Verificadores baseados em regras não precisam de GPU e não adicionam latência. Instale um primeiro e só depois acrescente um LLM para as reescritas que um verificador baseado em regras não faz.',
          },
        ],
      },
      notionReplacement: {
        id: 'notion-replacement',
        title: 'Substituir Notion AI: redação de documentos e anotações',
        content:
          '**Obsidian com um backend local do Ollama é o equivalente funcional mais próximo do Notion AI para quem toma anotações e trabalha com conhecimento.** Ele não replica a estrutura de banco de dados do Notion, mas, para redação de documentos e perguntas e respostas sobre suas anotações, a capacidade é equivalente — com todo o processamento local.',
        image: '/images/replace-grammarly-notion-ai-with-local-notion-ai-setup-flow-en.svg',
        imageCaption: 'Configuração da substituição do Notion AI no Obsidian: instale o Ollama e baixe um modelo, instale o Obsidian, adicione o plugin Copilot apontando para localhost:11434, adicione o Smart Connections para perguntas e respostas sobre todo o vault, e depois redija documentos e consulte suas anotações totalmente em local.',
        items: [
          '**Instale o Obsidian** em [obsidian.md](https://obsidian.md). Gratuito para uso pessoal e profissional. Crie um vault para suas anotações — este é o diretório que os plugins de IA vão indexar.',
          '**Instale o plugin Copilot** (Plugins da comunidade → busque "Copilot"; veja a [análise do Copilot for Obsidian](/pt/power-local-llm/copilot-for-obsidian-review)). Nas configurações do plugin, selecione "Ollama" como provedor de LLM, insira `http://localhost:11434` como URL base e selecione seu modelo. O Copilot adiciona ao Obsidian uma barra lateral de chat onde você faz perguntas e gera conteúdo no contexto da anotação atual.',
          '**Instale o plugin Smart Connections** para perguntas e respostas sobre todo o vault. O Smart Connections indexa suas anotações como embeddings usando um modelo de embedding local e permite fazer perguntas que recuperam as anotações relevantes antes de enviar ao LLM. Essa é a substituição direta do "pergunte sobre minhas anotações" do Notion AI.',
          '**Redação de documentos:** no chat do Copilot, escreva "Redija um [tipo de documento] sobre [tema] com base nessas anotações: [cole pontos-chave]". O plugin inclui automaticamente o contexto da anotação atual. A saída aparece no chat; copie e cole na anotação.',
          '**Expansão de conteúdo:** selecione um esboço com marcadores na anotação, abra a paleta de comandos do Copilot e use "Expand selection" — o modelo converte o esboço em prosa no registro de escrita da anotação.',
          '**Geração de revisão semanal:** "Resuma minhas anotações desta semana no formato de revisão semanal: conquistas, bloqueios e próximas ações." O Smart Connections recupera as anotações dos últimos 7 dias e as repassa ao LLM automaticamente.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obsidian com o plugin Copilot ou Smart Connections apontando para uma instância local do Ollama substitui o Notion AI para redação de documentos, expansão de conteúdo e perguntas e respostas sobre anotações com IA — com todo o processamento local e sem conteúdo transmitido a nenhum servidor externo.',
          },
          {
            type: 'plain-terms',
            text: 'A configuração: instale o Obsidian, instale o Ollama, baixe um modelo, instale o plugin da comunidade Copilot no Obsidian e aponte-o para localhost:11434. Essa é a substituição das funções de IA do Notion AI. Suas anotações ficam na pasta do vault (arquivos markdown simples, totalmente portáteis). O chat de IA roda no seu computador. Nada sai da sua máquina.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O Obsidian armazena as anotações como arquivos markdown simples em uma pasta que você controla. Ao contrário do formato de banco de dados proprietário do Notion, suas anotações são legíveis em qualquer editor de texto e exportáveis a qualquer momento. Essa é uma vantagem secundária de privacidade e portabilidade em relação ao Notion — sua base de conhecimento não fica presa a uma plataforma na nuvem.',
          },
        ],
      },
      notionOllama: {
        id: 'notion-ollama',
        title: 'Notion e Ollama: o que se conecta e o que não',
        content:
          '**O Notion não documenta uma forma de apontar o Notion AI para um modelo local; portanto, "Notion + Ollama" significa executar a etapa de IA fora do Notion ou tirar suas anotações do Notion.** As páginas publicadas de preços e segurança do Notion descrevem a IA rodando em provedores de modelos escolhidos pelo Notion, sem opção para um endpoint próprio. O Notion também é um workspace na nuvem, não um banco de dados local — não existe um banco de dados local do Notion ao qual anexar um modelo.',
        items: [
          '**Opção 1 — script pela API do Notion:** um pequeno script lê uma página pela API do Notion, envia o texto ao Ollama em `localhost:11434` e grava o resultado de volta como um novo bloco. A etapa do modelo é local; a página em si continua nos servidores do Notion, então só o provedor de IA é removido.',
          '**Opção 2 — Notion MCP:** o Notion hospeda um servidor MCP (login via OAuth) que clientes MCP usam para ler e atualizar páginas. O Notion cita Claude Code, Cursor e Codex como clientes de exemplo; se um determinado cliente consegue acionar um modelo local, isso depende do próprio cliente.',
          '**Opção 3 — mover as anotações que mais usam IA para um app local-first:** Obsidian (arquivos Markdown simples) com o Copilot, como acima, ou o [AppFlowy](https://appflowy.com), um workspace de código aberto (AGPL-3.0) no estilo Notion com modo offline e opções de IA local, segundo sua página de comparação. Consulte a documentação do AppFlowy para o setup exato de modelo local.',
          '**O que um modelo local não muda:** o conteúdo que já está no Notion é armazenado pelo Notion. Executar um modelo local sobre ele remove a etapa do provedor de IA, não o armazenamento do Notion.',
          '**O que o Notion diz sobre a própria IA:** por padrão, nem o Notion nem seus provedores de IA usam dados de clientes para treinar modelos; no Enterprise, a maioria dos modelos oferece retenção zero de dados, enquanto nos demais planos os provedores retêm dados por até 30 dias.',
        ],
        codeBlock:
          'import requests\n\nNOTION = {"Authorization": "Bearer <NOTION_TOKEN>", "Notion-Version": "2022-06-28"}\nPAGE_ID = "<page-id>"\n\n# 1. read the page text through the Notion API\nblocks = requests.get(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION).json()["results"]\ntext = "\\n".join(\n    "".join(t["plain_text"] for t in b["paragraph"]["rich_text"])\n    for b in blocks if b["type"] == "paragraph"\n)\n\n# 2. rewrite it with a local model (Ollama on localhost)\nr = requests.post("http://localhost:11434/api/generate", json={\n    "model": "gemma4:12b", "stream": False,\n    "prompt": "Correct the grammar of this text. Return only the corrected text.\\n\\n" + text,\n})\nfixed = r.json()["response"]\n\n# 3. append the result as a new paragraph block\nrequests.patch(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION, json={\n    "children": [{"object": "block", "type": "paragraph",\n                  "paragraph": {"rich_text": [{"type": "text", "text": {"content": fixed[:2000]}}]}}]\n})',
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'O script envia seu token do Notion e o conteúdo da página somente ao Notion e ao localhost. Mantenha o token fora de arquivos compartilhados e lembre que os blocos de rich text do Notion aceitam cerca de 2.000 caracteres cada, então saídas longas precisam ser divididas em vários blocos.',
          },
        ],
      },
      integrations: {
        id: 'integrations',
        title: 'Opções de integração',
        content:
          '**Quatro níveis de integração: básico (copiar-colar), intermediário (app de atalho ou app de escrita), inline (verificador baseado em regras) e avançado (extensão de navegador personalizada).** Comece pelo nível que combina com seu conforto técnico.',
        columns: ['Nível de integração', 'Como', 'Apps', 'Ideal para'],
        rows: [
          { 'Nível de integração': 'Básico (copiar-colar)', 'Como': 'Abrir o app de IA local, colar o texto, copiar o resultado', 'Apps': 'Chat do LM Studio, CLI do Ollama, Open WebUI', 'Ideal para': 'Correções ocasionais; qualquer SO' },
          { 'Nível de integração': 'Intermediário (atalho)', 'Como': 'Selecionar texto → atalho → a versão corrigida substitui a seleção', 'Apps': 'Raycast AI (macOS, Pro), AutoHotkey + Ollama (Windows)', 'Ideal para': 'Correções frequentes em qualquer app; mudança mínima de fluxo' },
          { 'Nível de integração': 'Intermediário (app de escrita)', 'Como': 'Assistente de IA integrado na ferramenta de escrita', 'Apps': 'Obsidian + plugin Copilot, VS Code + Continue.dev', 'Ideal para': 'Escritores e desenvolvedores que vivem nesses apps' },
          { 'Nível de integração': 'Inline (baseado em regras)', 'Como': 'Verificador local sublinha erros enquanto você digita', 'Apps': 'Harper, LanguageTool auto-hospedado', 'Ideal para': 'Feedback ao digitar sem GPU' },
          { 'Nível de integração': 'Avançado (extensão)', 'Como': 'Extensão personalizada envia o texto selecionado à API local do Ollama', 'Apps': 'Extensão Chrome/Firefox personalizada (templates open source no GitHub)', 'Ideal para': 'Usuários avançados que querem integração no navegador estilo Grammarly' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'No macOS, o Raycast com um comando de IA personalizado é uma integração intermediária rápida se você tiver o Pro: crie um comando de IA com o prompt de correção gramatical, atribua um atalho, selecione o texto em qualquer app, pressione o atalho e o texto corrigido substitui a seleção. Sem o Pro, use a CLI do Ollama ou um cliente de chat como o Open WebUI.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Recomendações de modelos para tarefas de escrita',
        content:
          '**A assistência de escrita favorece modelos com forte seguimento de instruções e saída de prosa coerente.** O ranking difere dos rankings de modelos para código ou matemática. As escolhas abaixo são pontos de partida definidos por tamanho e seguimento de instruções, não resultados de benchmarks de gramática.',
        columns: ['Tarefa', 'Melhor modelo', 'Alternativa (menor VRAM)', 'Por quê'],
        rows: [
          { 'Tarefa': 'Correção gramatical', 'Melhor modelo': 'Gemma 4 12B', 'Alternativa (menor VRAM)': 'Qwen3.5 4B / Phi-4 Mini', 'Por quê': 'Segue prompts "corrija só os erros, devolva o texto"' },
          { 'Tarefa': 'Reescrita de estilo', 'Melhor modelo': 'Gemma 4 12B ou Qwen3.8 27B', 'Alternativa (menor VRAM)': 'Qwen3.5 4B', 'Por quê': 'Mais margem para fraseado e registro' },
          { 'Tarefa': 'Ajuste de tom', 'Melhor modelo': 'Qwen3.8 27B', 'Alternativa (menor VRAM)': 'Gemma 4 12B', 'Por quê': 'Modelos maiores costumam manter melhor os fatos' },
          { 'Tarefa': 'Redação de documentos (substituição do Notion AI)', 'Melhor modelo': 'Gemma 4 12B', 'Alternativa (menor VRAM)': 'Qwen3.5 4B', 'Por quê': 'Segue instruções de formato de documento' },
          { 'Tarefa': 'Resumo de anotações / perguntas e respostas', 'Melhor modelo': 'Gemma 4 12B', 'Alternativa (menor VRAM)': 'Qwen3.5 4B / Phi-4 Mini', 'Por quê': 'Resumir funciona bem em tamanhos pequenos' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Estabeleça uma instrução de "sem frases com tom de IA" no seu prompt de sistema. Os modelos tendem por padrão a uma linguagem cheia de ressalvas, em registro de IA ("Claro! Aqui está a versão corrigida..."). Um prompt de sistema como "Retorne apenas o texto corrigido, sem preâmbulo, sem comentário" elimina isso. Para reescritas de estilo, acrescente: "Não use as expressões \'mergulhar em\', \'tapeçaria\', \'fomentar\', \'no âmbito de\' nem \'vale ressaltar\'".',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Comparativo de privacidade',
        content:
          '**A diferença de privacidade entre assistentes de escrita na nuvem e LLMs locais é estrutural.** Os serviços na nuvem não conseguem processar seu texto sem recebê-lo; os LLMs locais não conseguem enviar seu texto a lugar nenhum sem uma conexão de saída explícita.',
        image: '/images/replace-grammarly-notion-ai-with-local-cost-privacy-overview-en.svg',
        imageCaption: 'Ferramentas de escrita na nuvem versus LLM local: Grammarly e Notion AI funcionam como 2 assinaturas pagas separadas e enviam o texto para servidores na nuvem, enquanto Ollama e Obsidian mantêm toda a escrita e as anotações no dispositivo, sem custo recorrente de software.',
        items: [
          '**Licença de dados do Grammarly:** pela Seção 7.2 dos [Termos de Serviço do Grammarly](https://www.grammarly.com/terms), você mantém a propriedade do seu conteúdo, mas concede ao Grammarly uma licença mundial, não exclusiva e isenta de royalties para usá-lo para as finalidades declaradas, incluindo operar, fornecer e melhorar seus serviços e desenvolver novos produtos ou recursos. Os Termos também dizem que aceitar ou rejeitar sugestões pode ajudar a treinar seu mecanismo de sugestões. O Grammarly afirma que seus parceiros de LLM não podem usar dados de clientes para treinar seus modelos.',
          '**Fluxo de dados do Notion AI:** o Notion encaminha as requisições de IA a uma mistura de provedores de modelos (a lista atual está na página de subprocessadores). O Notion afirma que, por padrão, nem ele nem seus provedores de IA usam dados de clientes para treinar modelos. O Enterprise oferece retenção zero de dados com os provedores de LLM; nos demais planos, os provedores retêm dados por até 30 dias.',
          '**Fluxo de dados do LLM local:** nenhuma transmissão externa. O Ollama escuta no localhost por padrão e a inferência não faz conexão de saída. Os pesos do modelo são arquivos estáticos no disco; seu texto é processado em memória.',
          '**Implicações de LGPD/GDPR e sigilo profissional:** profissionais jurídicos, médicos e qualquer pessoa sujeita a obrigações de confidencialidade devem verificar as proteções contratuais antes de usar Grammarly ou Notion AI com conteúdo de clientes. Um LLM local evita a questão do operador terceirizado, porque nenhum dado sai da máquina.',
          '**Telemetria:** as ferramentas na nuvem coletam dados de uso e interação além do próprio texto. Os apps locais variam — verifique as configurações de telemetria de cada app e, se precisar de garantia de nível de auditoria, monitore você mesmo o tráfego de saída.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Se você usa Grammarly para correspondência de trabalho, rascunhos de contratos ou qualquer conteúdo sob obrigações de confidencialidade, verifique a política de dados da sua organização e os termos de dados empresariais em vigor antes de presumir que o conteúdo está protegido.',
          },
        ],
      },
      cost: {
        id: 'cost',
        title: 'Comparativo de custos',
        content:
          '**Substituir as duas ferramentas elimina a assinatura do Grammarly e a parte de IA do plano do Notion.** A configuração do LLM local é gratuita em software; o único custo contínuo é a eletricidade.',
        columns: ['Ferramenta', 'Custo mensal', 'Custo anual', 'Notas'],
        rows: [
          { 'Ferramenta': '[Grammarly Free](https://www.grammarly.com/plans)', 'Custo mensal': '$0', 'Custo anual': '$0', 'Notas': '100 prompts de IA/mês; verificações básicas' },
          { 'Ferramenta': '[Grammarly Pro](https://www.grammarly.com/plans)', 'Custo mensal': 'a partir de ~$12/mês', 'Custo anual': 'a partir de ~$144/ano', 'Notas': '2.000 prompts de IA/mês; mais caro se mensal' },
          { 'Ferramenta': '[Notion AI](https://www.notion.com/pricing)', 'Custo mensal': 'no Business (~$20/usuário)', 'Custo anual': '~$240/usuário/ano', 'Notas': 'Free e Plus: só teste; sem complemento separado' },
          { 'Ferramenta': '[Ollama (LLM local)](https://ollama.com)', 'Custo mensal': '$0', 'Custo anual': '$0', 'Notas': 'Gratuito e de código aberto; só eletricidade' },
          { 'Ferramenta': '[Obsidian (substituição do Notion)](https://obsidian.md)', 'Custo mensal': '$0', 'Custo anual': '$0', 'Notas': 'Gratuito para uso pessoal e profissional' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Se estiver em dúvida sobre a troca, comece movendo apenas a correção gramatical para um modelo local por 30 dias. Mantenha o Grammarly ativo para a integração no navegador. Avalie se a qualidade da correção local e o fluxo copiar-colar são aceitáveis para a sua escrita. Só então decida se cancela o Grammarly. A troca do Notion AI tem menos atrito se você aceitar usar o Obsidian como camada de anotações.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        items: [
          '**Sem prompt de sistema para o formato de saída.** Sem prompt de sistema, os modelos antecedem as correções com "Claro! Aqui está o texto corrigido:", adicionam explicações e usam frases de registro de IA. Sempre defina um prompt de sistema que especifique "retorne apenas o texto corrigido".',
          '**Usar o menor modelo para reescritas de estilo complexas.** Modelos pequenos lidam bem com correção gramatical, mas tendem a produzir reescritas de estilo mais formulaicas. Para trabalho focado em estilo, suba para o Gemma 4 12B ou maior.',
          '**Esperar equivalência de UI do Notion no Obsidian.** O Obsidian é um editor Markdown, não um banco de dados. Se seu fluxo no Notion depende de bancos de dados, visualizações e relações, o Obsidian não é uma substituição completa do Notion — apenas as funções de IA são transferidas. Avalie se os recursos de banco de dados são essenciais antes de trocar.',
          '**Não estabelecer um limite de palavras nas reescritas de estilo.** Sem um limite, o modelo enche as reescritas de palavras. Adicione "Mantenha o texto reescrito dentro de 10% da contagem de palavras original" a qualquer prompt de reescrita de estilo.',
          '**Enviar documentos completos a um modelo pequeno.** Modelos pequenos perdem o fio em entradas longas. Para documentos longos, divida-os em seções e corrija cada seção de forma independente.',
          '**Esperar sublinhados inline de um LLM.** Um LLM responde quando solicitado; ele não acompanha o que você digita. Para sublinhados enquanto digita, adicione um verificador local baseado em regras, como o Harper.',
          '**Presumir que o Notion AI pode usar um modelo local.** O Notion não documenta suporte a isso; use a API do Notion com o Ollama ou mova as anotações que mais usam IA para um app local-first.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'Termos de Serviço do Grammarly — Seção 7.2 (licença sobre o conteúdo do usuário) — [grammarly.com/terms](https://www.grammarly.com/terms)',
          'Planos do Grammarly — [grammarly.com/plans](https://www.grammarly.com/plans)',
          'IA responsável do Grammarly (uso de dados por parceiros) — [grammarly.com/responsible-ai](https://www.grammarly.com/responsible-ai)',
          'Preços do Notion e acesso à IA por plano — [notion.com/pricing](https://www.notion.com/pricing)',
          'Práticas de segurança do Notion AI (provedores, treinamento, retenção) — [notion.com/help/notion-ai-security-practices](https://www.notion.com/help/notion-ai-security-practices)',
          'Documentação do Notion MCP — [developers.notion.com/docs/mcp](https://developers.notion.com/docs/mcp)',
          'Obsidian gratuito para uso profissional (fevereiro de 2025) — [obsidian.md/blog/free-for-work](https://obsidian.md/blog/free-for-work/)',
          'Verificador gramatical Harper — [writewithharper.com](https://writewithharper.com)',
          'Servidor HTTP do LanguageTool (auto-hospedagem) — [dev.languagetool.org/http-server](https://dev.languagetool.org/http-server)',
          'Modelos locais no Raycast — [manual.raycast.com/ai/local-models](https://manual.raycast.com/ai/local-models)',
          'Biblioteca de modelos do Ollama — [ollama.com/library/gemma4](https://ollama.com/library/gemma4), [ollama.com/library/qwen3.5](https://ollama.com/library/qwen3.5), [ollama.com/library/qwen3.8](https://ollama.com/library/qwen3.8)',
          'Documentação do plugin Copilot do Obsidian — [GitHub: logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot)',
          'Plugin Smart Connections do Obsidian — [GitHub: brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quais LLMs pequenos fazem uma boa correção gramatical local?',
            a: 'Qwen3.5 4B (`qwen3.5:4b`, cerca de 3–4 GB) e Phi-4 Mini (`phi4-mini`) cabem em máquinas de 8 GB; Gemma 4 12B (`gemma4:12b`) atende sistemas de 16 GB e reescritas de estilo; Qwen3.8 27B atende 24 GB ou mais. Nenhum benchmark publicado os classifica para correção gramatical, então teste dois em cinco parágrafos seus e fique com o que muda menos e ainda pega seus erros. Use um prompt de sistema "corrija só os erros, retorne apenas o texto corrigido" e uma temperatura baixa.',
          },
          {
            q: 'Existe uma alternativa local ao Grammarly que funcione no Google Docs?',
            a: 'Não como substituto direto. Nenhuma das ferramentas locais analisadas aqui lista o Google Docs como editor compatível. O setup que funciona é selecionar → reescrever → colar: selecione o texto no Docs (com o modo Sugestões ativado), envie-o por uma ferramenta de atalho ou barra lateral do navegador a um modelo local e cole o resultado. Para sublinhados inline em outros lugares, as opções locais são o Harper (apenas inglês, local, com extensões para Chrome, Edge e Firefox) e um servidor LanguageTool auto-hospedado.',
          },
          {
            q: 'Como usar o Ollama com o Notion?',
            a: 'O Notion não documenta uma forma de apontar o Notion AI para um modelo local. Para usar o Ollama com conteúdo do Notion, escreva um pequeno script que leia uma página pela API do Notion, envie o texto ao Ollama em localhost:11434 e grave o resultado de volta (veja o exemplo acima). A etapa do modelo é local; a página continua nos servidores do Notion. Para um setup totalmente local, mova as anotações que mais usam IA para o Obsidian com o plugin Copilot ou para um app local-first como o AppFlowy.',
          },
          {
            q: 'Posso conectar um LLM local a um banco de dados local do Notion?',
            a: 'O Notion não tem banco de dados local: os workspaces ficam nos servidores do Notion e são acessados pela API. Você pode executar o modelo localmente e trocar texto com o Notion pela API, ou escolher um workspace local-first. O Obsidian armazena anotações como arquivos Markdown no disco; o AppFlowy é um app de código aberto no estilo Notion com modo offline.',
          },
          {
            q: 'Um LLM local pode analisar meu estilo pessoal de escrita?',
            a: 'Sim. Cole três amostras da sua escrita em um modelo local com o prompt de perfil de estilo deste guia: ele devolve uma descrição em tópicos do comprimento das suas frases, tom, vocabulário e hábitos, além de um prompt de sistema curto que você pode reutilizar para que um modelo editor mantenha a sua voz. Como as amostras nunca saem do seu computador, é seguro para rascunhos privados.',
          },
          {
            q: 'Qual é a diferença entre o Notion AI e o Grammarly?',
            a: 'Eles atuam em lugares diferentes. O Notion AI funciona dentro do Notion: redige, resume e responde a perguntas sobre o seu workspace. O Grammarly verifica a escrita em vários apps e campos de texto do navegador e oferece reescritas. Eles se sobrepõem em reescrita e tom, mas nenhum substitui o outro, e ambos podem ser substituídos na maioria das tarefas por um LLM local mais um app de anotações.',
          },
          {
            q: 'O Grammarly funciona no Notion e no Obsidian?',
            a: 'A extensão de navegador do Grammarly verifica campos de texto em editores baseados em navegador, o que inclui o Notion na web. Apps de desktop como o Obsidian ficam fora do alcance de uma extensão de navegador. Para o Obsidian, um verificador local como o Harper (que tem um plugin para Obsidian) ou o plugin Copilot com Ollama cobre o mesmo terreno sem enviar texto a um serviço na nuvem.',
          },
          {
            q: 'Um LLM local é tão bom quanto o Grammarly na correção gramatical?',
            a: 'Para erros cotidianos de gramática, pontuação e ortografia, um modelo local bem instruído faz as mesmas correções; teste no seu próprio texto para confirmar. Onde o Grammarly mantém vantagem: correções inline em tempo real enquanto você digita e a extensão de navegador que funciona no Gmail, no Google Docs e em outros apps web. Um LLM local exige um fluxo de selecionar e colar para texto em campos do navegador.',
          },
          {
            q: 'Posso usar o Obsidian como uma substituição completa do Notion?',
            a: 'O Obsidian substitui bem as funções de anotações e base de conhecimento do Notion. Não substitui as funções de banco de dados, gerenciamento de projetos e dados relacionais do Notion. Se seu uso do Notion é principalmente anotações, documentos e wikis — o Obsidian é uma substituição completa. Se você depende de bancos de dados do Notion, visualizações em quadro ou propriedades relacionais — precisará de ferramentas adicionais (Anytype, AppFlowy, ou o próprio Notion para a camada de banco de dados com o Obsidian para escrever).',
          },
          {
            q: 'Qual modelo local se aproxima mais das sugestões de escrita do Grammarly?',
            a: 'Nenhum modelo local reproduz o mecanismo de sugestões do Grammarly, e nenhum benchmark classifica modelos para isso. Na prática, Gemma 4 12B e Qwen3.8 27B dão mais margem para reescritas de estilo e tom quando instruídos a manter a voz original, enquanto Qwen3.5 4B e Phi-4 Mini bastam para correções apenas de gramática. Combine qualquer um deles com um verificador baseado em regras, como o Harper, se quiser sublinhados enquanto digita.',
          },
          {
            q: 'O plugin Copilot do Obsidian envia minhas anotações para a nuvem?',
            a: 'Não quando configurado para usar uma instância local do Ollama. O plugin suporta tanto LLMs na nuvem (OpenAI, Anthropic) quanto o Ollama local. Quando você seleciona o Ollama como provedor de LLM e insere a URL do localhost, todo o processamento de IA é feito localmente. Nenhum conteúdo das anotações é transmitido externamente. Confirme isso monitorando o tráfego de rede com uma ferramenta como o Little Snitch (macOS) ou o Wireshark se precisar de verificação de nível de auditoria.',
          },
          {
            q: 'Posso usar um LLM local no Google Docs ou no Gmail?',
            a: 'Não diretamente — não existe uma extensão de navegador de LLM local equivalente ao Grammarly que se integre nativamente aos campos de texto do navegador. As soluções alternativas são: (1) selecionar o texto no Google Docs, copiar, colar no seu app de IA local, copiar a versão corrigida e colar de volta; (2) uma ferramenta de atalho que processa o texto selecionado e o substitui (o Raycast com modelos locais exige o Pro; um script AutoHotkey que chama a API do Ollama é gratuito); (3) uma extensão personalizada do Chrome que lê o texto selecionado e chama a API local do Ollama (há templates open source no GitHub). Nenhuma delas iguala a experiência inline fluida do Grammarly.',
          },
          {
            q: 'Esta configuração está em conformidade com LGPD/HIPAA/GDPR para uso profissional?',
            a: 'Um LLM local que processa dados exclusivamente no seu computador, sem transmissão externa, aborda a preocupação central de transferência de dados tanto da LGPD quanto da GDPR e da HIPAA. No entanto, a conformidade depende da sua pilha tecnológica completa, dos controles de segurança e dos requisitos regulatórios específicos. Um LLM local não é automaticamente conforme — você precisa avaliar a segurança do endpoint, a proteção física do dispositivo e os controles de acesso. Para conformidade formal, consulte seu responsável por compliance. O processamento local elimina a preocupação com o "operador terceirizado de dados", mas não substitui um programa de conformidade completo.',
          },
          {
            q: 'Qual é o melhor assistente de escrita local para artigos acadêmicos?',
            a: 'Um modelo local de porte médio (por exemplo, o Gemma 4 12B) com um prompt de sistema que especifique "Corrija apenas a gramática e a pontuação — não mude o vocabulário, a estrutura das frases nem o conteúdo. Preserve todas as citações, termos técnicos e linguagem específica da área sem alterações." Isso espelha um modo apenas de gramática, uma configuração de menor risco para escrita acadêmica, onde mudar a redação pode alterar o sentido sem querer ou parecer modificar o conteúdo citado.',
          },
          {
            q: 'Posso substituir localmente o resumo de anotações de reuniões do Notion AI?',
            a: 'Sim. Exporte as anotações da reunião como um arquivo de texto ou markdown (ou cole o texto da transcrição diretamente). Use o prompt: "Resuma estas anotações de reunião em: (1) Decisões-chave tomadas, (2) Itens de ação com responsáveis, (3) Perguntas em aberto. Use marcadores para cada seção. Mantenha em menos de 300 palavras." Um modelo pequeno que siga instruções dá conta de resumir reuniões. Para reuniões recorrentes, crie um template de prompt salvo no seu app de IA local.',
          },
          {
            q: 'Qual LLM o Grammarly usa? O Grammarly é um LLM?',
            a: 'O Grammarly é um produto de escrita, não um único modelo. O Grammarly não nomeia seus modelos subjacentes nas páginas que consultamos (planos, termos e sua página de IA responsável). Essa página de IA responsável diz que as informações usadas para alimentar seus recursos de IA generativa são compartilhadas com parceiros de LLM e que esses parceiros não podem usar dados de clientes para treinar seus modelos. O Notion AI é parecido: usa uma mistura de provedores listados na página de subprocessadores. Pesquisadores também publicaram modelos abertos de edição de texto sob a organização grammarly no Hugging Face (CoEdIT, de 770M a 11B de parâmetros), que são modelos de pesquisa e não o produto em si. O que importa para a privacidade é o tratamento dos dados: o texto enviado a qualquer um dos produtos é processado nos servidores do fornecedor. Um LLM local evita isso — o texto nunca sai do seu computador.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[LLM local com Obsidian](/pt/power-local-llm/local-llm-with-obsidian-2026) — setup completo de Obsidian + Ollama para anotações e perguntas e respostas sobre o seu vault.',
          '[Análise do Copilot for Obsidian](/pt/power-local-llm/copilot-for-obsidian-review) — o plugin Copilot usado no fluxo de substituição do Notion AI.',
          '[Plugins de IA para Obsidian e Logseq comparados](/pt/power-local-llm/obsidian-logseq-ai-plugins) — opções de plugins de IA local em apps de anotações.',
          '[Modelos de LLM locais pequenos](/pt/local-llms/small-local-llm-models) — modelos pequenos atuais para máquinas de 4–8 GB, relevantes para correção gramatical local.',
          '[Automação de e-mail e calendário com LLM local](/pt/power-local-llm/local-llm-email-and-calendar-automation) — automação de rascunhos de e-mail e gestão de calendário com LLMs locais, complementando o setup do assistente de escrita.',
          '[Prompts de LLM local para escritores de ficção](/pt/power-local-llm/local-llm-prompts-for-fiction-writers) — templates de prompt para tarefas de escrita criativa que vão além da correção gramatical, como escrita de cenas e desenvolvimento de personagens.',
          '[Substitua o Zapier com agentes de IA locais](/pt/power-local-llm/replace-zapier-with-local-ai-agents) — automação de fluxos de trabalho local que conecta ferramentas de escrita a outros processos empresariais.',
          '[RAG local para dados empresariais privados](/pt/power-local-llm/local-rag-for-private-business-data) — perguntas e respostas sobre documentos empresariais privados, estendendo o caso de uso de perguntas e respostas sobre anotações a bibliotecas maiores de documentos.',
          '[O app de IA local mais fácil para Windows, Mac e Linux](/pt/power-local-llm/easiest-local-ai-app-windows-mac-linux) — se você precisa configurar seu primeiro app de IA local antes de implementar o fluxo do assistente de escrita.',
          '[Agentes de IA local para fluxos de trabalho empresariais: conformidade UE](/pt/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — contexto de LGPD/GDPR e Lei de IA da UE para implantar assistentes de escrita de IA local em ambientes empresariais europeus.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Substitua o Grammarly e o Notion AI por um LLM local (2026)',
      description: 'Alternativa local ao Grammarly: melhores LLMs pequenos para gramática, opções no Google Docs e Notion e setups com Ollama que mantêm seu texto no PC.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/replace-grammarly-notion-ai-with-local',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-10-19',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Beginner',
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/replace-grammarly-notion-ai-with-local-overview-hero-de.webp',
    title: 'Grammarly und Notion AI durch ein lokales LLM ersetzen (2026)',
    seoTitle: 'Lokale Grammarly-Alternative: Beste kleine LLMs 2026',
    intro:
      'Grammarly und Notion AI verarbeiten Ihre Texte auf Cloud-Servern — Ihre E-Mail-Entwürfe, vertraulichen Dokumente und persönlichen Notizen laufen systembedingt durch fremde Systeme. Ein lokales LLM, betrieben über Ollama oder LM Studio, kann beide für die meisten Schreibaufgaben ersetzen: Grammatik- und Stilkorrektur, Dokumentenentwurf, Inhaltszusammenfassung und KI-gestützte Notizverwaltung — ohne dass Text Ihren Rechner verlässt. Dieser Leitfaden zeigt, welche kleinen Modelle Grammatik gut korrigieren, was in Google Docs und Notion funktioniert und wo die Lücke zu Grammarly bleibt.',
    metaDescription:
      'Lokale Grammarly-Alternative: beste kleine LLMs zur Grammatikkorrektur, Optionen für Google Docs und Notion, Ollama-Setups ohne Cloud.',
    twitterDescription:
      'Grammarly und Notion AI durch ein lokales LLM ersetzen: beste kleine Modelle zur Grammatikkorrektur, Google-Docs- und Notion-Optionen, Ollama-Setup — kein Text verlässt Ihren Rechner.',
    current_models_mentioned: [
      'Qwen3.5 4B',
      'Gemma 4 E4B',
      'Gemma 4 12B',
      'Qwen3.8 27B',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M3 MacBook Air 8 GB',
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 3060 12 GB',
    ],
    audience:
      'Wissensarbeiter, Autoren, Studierende und datenschutzbewusste Fachkräfte, die Grammarly für Schreibkorrektur und Notion AI für Dokumentenassistenz nutzen und beide durch eine lokale KI ersetzen möchten, die ihre Inhalte privat hält.',
    readTime: '13 Min. Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'Grammarly durch lokales LLM ersetzen',
    targetKeywords: [
      'Grammarly durch lokales LLM ersetzen',
      'lokale Grammarly-Alternative',
      'bestes LLM für Grammatikkorrektur',
      'kleines LLM Grammatikkorrektur',
      'Notion AI lokal ersetzen',
      'Notion Ollama',
      'lokaler LLM-Schreibassistent',
      'Grammarly-Alternative ohne Cloud',
      'Notion AI Alternative Datenschutz',
      'Ollama Schreibkorrektur',
    ],
    leadAnswerBlock:
      '**Ein lokales LLM, das über Ollama läuft, ersetzt den Kern von Grammarly und Notion AI, ohne Ihren Text an einen Cloud-Dienst zu senden. Für Grammarly: Grammatik- und Stilkorrektur über eine Prompt-Vorlage ("Korrigiere die Grammatik und verbessere den Stil dieses Absatzes. Gib nur den korrigierten Text zurück.") auf jedem Modell ab Qwen3.5 4B aufwärts. Für Notion AI: Dokumentenentwurf und Q&A über Ihre Notizen via Obsidian mit dem Copilot- oder Smart-Connections-Plugin, das auf Ollama zeigt. Der Datenschutzvorteil ist konkret: Grammarlys Nutzungsbedingungen (Abschnitt 7.2) räumen dem Anbieter eine Lizenz an Ihren Inhalten für Betrieb und Verbesserung seiner Dienste ein, und Notion AI leitet Anfragen an Modellanbieter Dritter weiter, während ein lokales Modell denselben Text auf Ihrer eigenen Hardware verarbeitet. Die Lücke ist beim alltäglichen Schreiben schmal und an zwei Stellen am größten: bei der Prüfung während des Tippens in Google Docs, Gmail und anderen Browser-Editoren sowie bei domänenspezifischen Stilvorschlägen.**',
    quickAnswerTop: {
      de: {
        question: 'Kann ein lokales LLM Grammarly und Notion AI ersetzen?',
        answer:
          'Ja, für die meisten Alltagsfälle. Für Grammarly: Ein lokales LLM übernimmt Grammatikkorrektur, Klarheits-Umschreibung, Vermeidung von Passivkonstruktionen und einfache Tonanpassung. Es erreicht nicht Grammarlys Echtzeit-Vorschläge im Text oder die Browser-Erweiterung, aber ein Prompt-basierter Ablauf deckt dieselben Korrekturen auf Anforderung ab. Für Notion AI: Obsidian mit dem Copilot-Plugin auf Ollama ersetzt Dokumentenentwurf, Inhaltsausbau und KI-Q&A über Notizen. Notion dokumentiert keine Möglichkeit, Notion AI selbst auf ein lokales Modell umzustellen. Startpunkte: Qwen3.5 4B (ca. 3–4 GB Download, 8-GB-Systeme), Gemma 4 12B (16-GB-Systeme) oder Qwen3.8 27B (ab 24 GB) — kein Grammatik-Benchmark reiht sie ein, testen Sie also zwei Modelle an Ihren eigenen Absätzen.',
        bullets: [
          'Grammatikkorrektur: Jedes lokale, anweisungsfolgende Modell mit dem System-Prompt "Nur Grammatik korrigieren, nur korrigierten Text zurückgeben" deckt Grammarlys Kern-Korrekturfunktion ab.',
          'Kleine Modelle: Qwen3.5 4B und Phi-4 Mini passen auf 8-GB-Rechner; Gemma 4 12B ist die nächste Stufe für Stilumschreibungen auf 16 GB.',
          'Notion-AI-Ersatz: Obsidian + Copilot-Plugin (oder Smart-Connections-Plugin) auf Ollama — KI-Q&A über Notizen, Dokumentenentwurf, Inhaltsausbau.',
          'Echtzeitkorrektur: Lokale LLMs unterstreichen Fehler nicht beim Tippen in Google Docs oder Gmail. Nutzen Sie einen Hotkey-/Seitenleisten-Ablauf oder einen lokalen regelbasierten Prüfer wie Harper für Unterstreichungen in unterstützten Editoren.',
          'Datenschutz: Grammarly lizenziert Ihre Inhalte nach Abschnitt 7.2 seiner Bedingungen; Notion AI sendet Anfragen an Modellanbieter Dritter. Ein lokales LLM verarbeitet lokal ohne externe Übertragung.',
          'Kosten: Grammarly Pro beginnt bei rund 12 $/Monat (jährliche Abrechnung); Notion AI ist im Business-Tarif enthalten (rund 20 $/Nutzer/Monat). Ein lokales LLM ist nach den Hardwarekosten kostenlos.',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Schnelle Fakten', anchor: '#quick-facts' },
      { label: 'Was Sie ersetzen (und was nicht)', anchor: '#what-you-replace' },
      { label: 'Grammarly ersetzen: Grammatik- und Stilkorrektur', anchor: '#grammarly-replacement' },
      { label: 'Beste kleine LLMs für lokale Grammatikkorrektur', anchor: '#small-models-grammar' },
      { label: 'Google Docs, Gmail und Prüfung beim Tippen ohne Cloud', anchor: '#google-docs-inline' },
      { label: 'Notion AI ersetzen: Dokumente und Notizen', anchor: '#notion-replacement' },
      { label: 'Notion und Ollama: Was sich verbinden lässt und was nicht', anchor: '#notion-ollama' },
      { label: 'Integrationsoptionen', anchor: '#integrations' },
      { label: 'Modell-Empfehlungen', anchor: '#models' },
      { label: 'Datenschutz-Vergleich', anchor: '#privacy' },
      { label: 'Kostenvergleich', anchor: '#cost' },
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
          '**Lokale LLMs ersetzen Grammarlys Kernfunktion — Grammatik, Klarheit und einfache Stilkorrektur — aber nicht die Echtzeit-Integration im Text.** Der Ablauf wechselt von "Korrekturen erscheinen beim Tippen" zu "Text markieren → korrigierte Version erhalten → zurück einfügen". Für viele Nutzer ist das ein akzeptabler Kompromiss für vollständige Privatsphäre.',
          '**Der Notion-AI-Ersatz ist vollständiger, bedeutet aber, Notions KI zu verlassen.** Notion dokumentiert keine Möglichkeit, Notion AI auf ein lokales Modell umzustellen. Obsidian mit dem Copilot-Plugin (oder Smart-Connections-Plugin) auf einer lokalen Ollama-Instanz bildet Dokumentenentwurf, Inhaltsausbau und KI-Q&A über Notizen ab — bei vollständig lokaler Verarbeitung. In Notion zu bleiben ist nur möglich, indem Sie den KI-Schritt selbst über die Notion-API ausführen.',
          '**Der Datenschutzpunkt ist nicht theoretisch.** Grammarlys Nutzungsbedingungen (Abschnitt 7.2) räumen eine Lizenz an Ihren Inhalten für Betrieb, Verbesserung und Entwicklung seiner Dienste ein. Notion AI sendet Anfragen an Modellanbieter Dritter; Notion gibt an, dass standardmäßig weder Notion noch diese Anbieter mit Kundendaten trainieren. Ein lokales LLM verarbeitet denselben Text auf Ihrer Hardware ohne externe Übertragung.',
          '**Kleine Modelle reichen für Grammatik.** Qwen3.5 4B und Phi-4 Mini passen auf 8-GB-Rechner; Gemma 4 12B eignet sich für 16-GB-Systeme und Stilumschreibungen. Kein veröffentlichter Benchmark reiht sie für Grammatikkorrektur ein — testen Sie zwei Modelle an Ihren eigenen Absätzen, bevor Sie sich entscheiden.',
          '**Für Unterstreichungen beim Tippen ergänzen Sie einen regelbasierten Prüfer.** Harper (lokal, nur Englisch) und ein selbst gehosteter LanguageTool-Server unterstreichen Fehler beim Tippen in unterstützten Editoren. Google Docs wird von Harper nicht als unterstützt aufgeführt; dort bleibt der Ablauf markieren → umschreiben → einfügen.',
          '**Kosten sind ein Sekundärargument.** Grammarly Pro beginnt bei rund 12 $/Monat bei jährlicher Abrechnung; Notion AI ist jetzt Teil des Business-Tarifs (rund 20 $/Nutzer/Monat) statt eines separaten Zusatzes. Das lokale LLM-Äquivalent ist nach den einmaligen Hardwarekosten kostenlos.',
          '**Die Einrichtung dauert etwa 20 Minuten.** Ollama-Installation + Modell-Download + Obsidian-Plugin-Konfiguration sind eine einmalige Einrichtung.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnelle Fakten',
        items: [
          '**Grammarly-Kosten:** Free (100 KI-Prompts/Monat), Pro ab rund 12 $/Monat bei jährlicher Abrechnung (2.000 KI-Prompts/Monat), Enterprise individuell.',
          '**Notion-AI-Kosten:** im Business-Tarif enthalten (rund 20 $/Nutzer/Monat bei jährlicher Abrechnung); Free- und Plus-Tarif erhalten nur eine Testphase.',
          '**Lokale-LLM-Kosten:** Kostenlos (Open-Source-Modelle + Ollama) — nur Hardware-Stromkosten.',
          '**Startpunkte bei kleinen Modellen:** Qwen3.5 4B (`qwen3.5:4b`) oder Phi-4 Mini (`phi4-mini`) auf 8 GB; Gemma 4 12B (`gemma4:12b`) auf 16 GB; Qwen3.8 27B (`qwen3.8:27b`) ab 24 GB.',
          '**Grammarly-Datenschutz:** Abschnitt 7.2 der Nutzungsbedingungen lizenziert Ihre Inhalte für Betrieb, Verbesserung und Entwicklung von Grammarlys Diensten.',
          '**Notion-AI-Datenschutz:** Anfragen gehen an Modellanbieter Dritter; standardmäßig trainieren weder Notion noch diese Anbieter mit Kundendaten.',
          '**Obsidian-Kosten:** seit Februar 2025 kostenlos für private und berufliche Nutzung.',
        ],
      },
      whatYouReplace: {
        id: 'what-you-replace',
        title: 'Was Sie ersetzen (und was nicht)',
        content:
          '**Ein lokales LLM deckt den größten Teil der alltäglichen Grammarly- und Notion-AI-Nutzung ab, doch der nicht abgedeckte Teil ist für manche Nutzer entscheidend.** Wer die Lücke vor dem Wechsel kennt, vermeidet Enttäuschung.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ein lokales LLM ersetzt Grammarlys Grammatikkorrektur, Stilumschreibung und Tonanpassung sowie Notion AIs Dokumentenentwurf und Notiz-Q&A — nicht aber Grammarlys Echtzeit-Integration im Text oder Notion AIs native Editor-Integration.',
          },
          {
            type: 'plain-terms',
            text: 'Grammarly funktioniert, indem es beobachtet, was Sie im Browser oder auf dem Desktop tippen, und Korrekturen beim Schreiben anzeigt. Ein lokales LLM kann das von allein nicht. Was es kann: jeden Text korrigieren, den Sie ihm übergeben — der Ablauf wird also: E-Mail entwerfen, Text markieren, an die lokale KI-App oder ein Hotkey-Tool senden, korrigierte Version zurückerhalten, in Gmail einfügen. Langsamer als Korrekturen im Text, aber privat und kostenlos.',
          },
        ],
        columns: ['Funktion', 'Grammarly', 'Lokales-LLM-Äquivalent', 'Lücke'],
        rows: [
          { 'Funktion': 'Grammatikkorrektur', 'Grammarly': 'Im Text, in Echtzeit', 'Lokales-LLM-Äquivalent': 'Prompt-basiert, auf Anforderung', 'Lücke': 'Nicht in Echtzeit; Copy-Paste-Ablauf' },
          { 'Funktion': 'Stilvorschläge', 'Grammarly': 'Im Text mit Erklärungen', 'Lokales-LLM-Äquivalent': 'Prompt-basierte Umschreibung', 'Lücke': 'Standardmäßig keine Erklärung pro Vorschlag' },
          { 'Funktion': 'Tonerkennung', 'Grammarly': 'Automatisch, benannte Töne', 'Lokales-LLM-Äquivalent': 'Im Prompt vorgegebener Zielton', 'Lücke': 'Erfordert explizite Tonangabe' },
          { 'Funktion': 'Browser-Erweiterung', 'Grammarly': 'Funktioniert in Gmail, Google Docs, Browser-Feldern', 'Lokales-LLM-Äquivalent': 'Copy-Paste, Hotkey oder Seitenleisten-App', 'Lücke': 'Keine native Browserintegration' },
          { 'Funktion': 'Notion AI: Dokumentenentwurf', 'Grammarly': 'Nicht zutreffend', 'Lokales-LLM-Äquivalent': 'Obsidian + Copilot-Plugin → Ollama', 'Lücke': 'Nicht in Notion-UI eingebettet; separate App' },
          { 'Funktion': 'Notion AI: Q&A über Notizen', 'Grammarly': 'Nicht zutreffend', 'Lokales-LLM-Äquivalent': 'Obsidian Smart Connections → Ollama', 'Lücke': 'Erfordert Obsidian-Vault; keine Notion-DB-Suche' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die Integrationslücke wiegt am stärksten, wenn Sie in Gmail, Google Docs oder anderen browserbasierten Editoren schreiben, in denen Grammarly Korrekturen im Text einblendet. Wenn Sie hauptsächlich in Desktop-Apps schreiben (Word, Obsidian, VS Code, Scrivener), ist der Copy-Paste-Ablauf mit einem lokalen LLM kaum langsamer als Vorschläge im Text. Klären Sie Ihre Schreibumgebung vor der Entscheidung.',
          },
        ],
      },
      grammarlyReplacement: {
        id: 'grammarly-replacement',
        title: 'Grammarly ersetzen: Grammatik- und Stilkorrektur',
        content:
          '**Der Grammarly-Ersatz-Workflow besteht aus wenigen Prompt-Vorlagen und einer Tastenkombinations-App.** Eine Vorlage für reine Grammatikkorrektur, eine für vollständige Stilumschreibung, eine für den Ton. Auf typischer Laptop-Hardware kommt absatzlanger Text nach wenigen Sekunden zurück; die Geschwindigkeit hängt von Modellgröße und Hardware ab.',
        promptExamples: [
          {
            label: 'Reine Grammatikkorrektur (Grammarly-Basis-Ersatz)',
            text: 'Korrigiere Grammatik, Rechtschreibung und Zeichensetzung des folgenden Textes. Gib nur den korrigierten Text zurück — keine Erklärung, kein Markup, keine Zusammenfassung.\n\n[Text einfügen]',
          },
          {
            label: 'Stil- und Klarheits-Umschreibung (Grammarly-Premium-Ersatz)',
            text: 'Schreibe den folgenden Text auf Klarheit und professionellen Ton um. Korrigiere Grammatik, vermeide Passiv, kürze lange Sätze und entferne Füllphrasen. Gib nur den umgeschriebenen Text zurück.\n\nZielton: [professionell / locker / akademisch / überzeugend]\nZielpublikum: [allgemein / fachlich / Führungsebene]\n\n[Text einfügen]',
          },
          {
            label: 'Tonanpassungs-Prompt',
            text: 'Schreibe die folgende E-Mail [förmlicher / lockerer / knapper / diplomatischer] um. Lass alle Sachinhalte unverändert. Gib nur die umgeschriebene E-Mail zurück.\n\n[E-Mail einfügen]',
          },
          {
            label: 'Persönliches Stilprofil (eigenes Schreiben lokal analysieren)',
            text: 'Unten stehen drei Textproben von mir. Beschreibe meinen Stil in 8 Stichpunkten: typische Satzlänge, Wortschatz, Ton, bevorzugte Konstruktionen, Zeichensetzungsgewohnheiten und was ich vermeide. Schreibe dann einen System-Prompt mit 100 Wörtern, der ein Lektor-Modell Texte korrigieren lässt und dabei diesen Stil bewahrt.\n\nProbe 1: [einfügen]\nProbe 2: [einfügen]\nProbe 3: [einfügen]',
          },
        ],
        items: [
          '**System-Prompt für Schreibsitzungen:** Setzen Sie den System-Prompt Ihrer lokalen KI-App auf "Du bist ein professioneller Lektor. Gib nur korrigierten oder umgeschriebenen Text zurück — keine Einleitung, keine Erklärung, kein Kommentar." Das verhindert, dass das Modell "Toller Text! Hier meine Korrektur..." vor die Ausgabe stellt.',
          '**Tastenkombinations-Integration:** Nutzen Sie Raycast (macOS) oder AutoHotkey (Windows), um eine Hotkey-Belegung zu erstellen, die markierten Text an Ollama schickt und das Ergebnis einfügt. Das reduziert den Copy-Paste-Ablauf auf einen einzigen Tastendruck. Beachten Sie: Raycast führt die Unterstützung lokaler Modelle in seinem Handbuch als Pro-Funktion; ein AutoHotkey-Skript, das die Ollama-API aufruft, ist kostenlos.',
          '**Reine Grammatik vs. Stilumschreibung:** Verwenden Sie getrennte Prompts für Grammatikkorrektur und vollständige Stilumschreibung. Reine Grammatikkorrektur ist sicherer für juristische, technische oder strukturierte Dokumente, in denen ein verändertes Wording die Bedeutung verschieben könnte. Stilumschreibung passt zu E-Mails, Blog-Beiträgen und allgemeinem Schriftverkehr.',
          '**Für wissenschaftliche Texte:** Ergänzen Sie "Belasse alle Zitate, Fachbegriffe und Domänen-Vokabular unverändert" im Stilumschreibungs-Prompt. Ohne diese Anweisung vereinfachen oder paraphrasieren Modelle gelegentlich Fachsprache.',
          '**Für Geschäfts-E-Mails:** Ergänzen Sie "Der Absender ist [Name], [Funktion] bei [Unternehmen]. Die E-Mail soll dessen professionelle Stimme widerspiegeln, ohne Personalisierungsdetails in der Ausgabe." Das verankert das Register im professionellen Kontext des Absenders.',
          '**Eigenen Stil lokal analysieren:** Der Stilprofil-Prompt oben macht aus drei Textproben einen wiederverwendbaren System-Prompt. Weil die Proben Ihren Rechner nie verlassen, ist er auch für private Entwürfe geeignet, die ein Cloud-Assistent zuerst empfangen müsste.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Ein schneller macOS-Ablauf: Ollama installieren, ein Modell wie Gemma 4 12B laden und einen Raycast-AI-Befehl mit dem Grammatikkorrektur-Prompt anlegen (lokale Modelle in Raycast erfordern ein Pro-Abo). Markieren Sie Text in beliebiger App, lösen Sie den Hotkey aus, und die korrigierte Version ersetzt die Markierung. Unter Windows erreicht ein AutoHotkey-Skript, das die Markierung an die Ollama-API sendet, dasselbe ohne Abo.',
          },
        ],
      },
      smallModelsGrammar: {
        id: 'small-models-grammar',
        title: 'Beste kleine LLMs für lokale Grammatikkorrektur',
        content:
          '**Beginnen Sie bei der Grammatikkorrektur mit Qwen3.5 4B auf 8-GB-Rechnern und Gemma 4 12B auf 16-GB-Rechnern; beide befolgen die Anweisung "Gib nur den korrigierten Text zurück" und laufen auf gewöhnlichen Laptops.** Grammatik zu korrigieren ist vor allem Anweisungsbefolgung: Das Modell muss so wenig wie möglich ändern und nichts außer dem korrigierten Text zurückgeben.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Das beste kleine LLM für lokale Grammatikkorrektur ist das kleinste anweisungsfolgende Modell, das Ihre Fehler behebt, ohne bereits Korrektes umzuformulieren — Qwen3.5 4B, Phi-4 Mini und Gemma 4 12B sind sinnvolle Startpunkte, und kein veröffentlichter Benchmark reiht sie für Grammatik ein.',
          },
          {
            type: 'plain-terms',
            text: 'Grammatikkorrektur braucht kein großes Modell. Sie braucht ein Modell, das "nur Fehler beheben" befolgt. Installieren Sie zwei Kandidaten, fügen Sie dieselben fünf Absätze in beide ein und behalten Sie das Modell, das am wenigsten ändert und Ihre Fehler trotzdem findet. Dieser Test dauert zehn Minuten und sagt mehr als jede Rangliste.',
          },
        ],
        columns: ['Modell', 'Ollama-Tag', 'Download', 'Passt auf', 'Geeignet für'],
        rows: [
          { 'Modell': 'Phi-4 Mini', 'Ollama-Tag': 'phi4-mini', 'Download': '~2,5 GB', 'Passt auf': '8 GB RAM', 'Geeignet für': 'Schnelle, einfache Korrekturen; meist Englisch' },
          { 'Modell': 'Qwen3.5 4B', 'Ollama-Tag': 'qwen3.5:4b', 'Download': '~3,3–4 GB', 'Passt auf': '8 GB RAM', 'Geeignet für': 'Reine Grammatikfixes, kurze E-Mails, viele Sprachen' },
          { 'Modell': 'Gemma 4 E4B', 'Ollama-Tag': 'gemma4:e4b', 'Download': '~6,6–9,5 GB', 'Passt auf': '16 GB RAM', 'Geeignet für': 'Mehrsprachiger Text, leichte Stilkorrekturen' },
          { 'Modell': 'Gemma 4 12B', 'Ollama-Tag': 'gemma4:12b', 'Download': '~7,7–8 GB', 'Passt auf': '16 GB RAM', 'Geeignet für': 'Stilumschreibungen und Tonanpassung' },
          { 'Modell': 'Qwen3.8 27B', 'Ollama-Tag': 'qwen3.8:27b', 'Download': '~18 GB', 'Passt auf': 'ab 24 GB RAM/VRAM', 'Geeignet für': 'Lange, nuancierte Umschreibungen' },
        ],
        items: [
          '**Kein grammatikspezifischer Benchmark reiht diese Modelle ein.** Anbieter veröffentlichen allgemeine Ergebnisse zur Anweisungsbefolgung, keine Genauigkeit bei Grammatikkorrektur. Urteilen Sie anhand Ihres eigenen Textes.',
          '**Worauf Sie im Test achten:** Überkorrektur (Formulierungen, die in Ordnung waren, wurden geändert), veränderte Bedeutung (Zahlen, Namen, Verneinungen), beibehaltene Schreibvariante (britisch vs. amerikanisch) und ob das Modell nur den Text zurückgibt.',
          '**Sprachen:** Qwen3.5 und Gemma 4 sind mehrsprachig; Phi-4 Mini zielt vor allem auf Englisch. Testen Sie bei nicht-englischem Text zuerst in Ihrer Sprache.',
          '**Deterministisch halten:** Eine niedrige Temperatur (etwa 0,2) verringert kreatives Umformulieren. Die Modelfile unten fasst Lektor-Anweisungen und Temperatur in einem wiederverwendbaren Modell zusammen.',
          '**Lange Dokumente:** Kleine Modelle verlieren bei langen Eingaben den Faden. Korrigieren Sie abschnittsweise, statt ein ganzes Dokument einzufügen.',
        ],
        codeBlock:
          'FROM qwen3.5:4b\nPARAMETER temperature 0.2\nSYSTEM """You are a copy editor. Fix grammar, spelling, and punctuation only. Keep the author\'s wording, meaning, and spelling variant. Return only the corrected text."""\n\n# then run:\n#   ollama create grammar-fix -f Modelfile\n#   ollama run grammar-fix',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Wenn ein Modell vor dem korrigierten Text seine Überlegungen oder eine Einleitung ausgibt, wechseln Sie zu einer Variante ohne Reasoning oder zu einem anderen Modell. Ein Grammatik-Tool, das jeder Antwort einen Kommentar hinzufügt, ist langsamer als Korrekturlesen von Hand.',
          },
        ],
      },
      googleDocsInline: {
        id: 'google-docs-inline',
        title: 'Google Docs, Gmail und Prüfung beim Tippen ohne Cloud',
        content:
          '**Keines der hier betrachteten lokalen Tools führt Google Docs als unterstützten Editor auf; praktikabel ist daher in Google Docs ein Hotkey oder eine Seitenleiste für LLM-Umschreibungen plus ein lokaler regelbasierter Prüfer für Unterstreichungen, wo er unterstützt wird.** Ein LLM und ein regelbasierter Prüfer erfüllen unterschiedliche Aufgaben: Das LLM schreibt auf Anforderung um, der Prüfer unterstreicht Fehler beim Tippen.',
        columns: ['Tool', 'Typ', 'Wo es funktioniert', 'Grenzen'],
        rows: [
          { 'Tool': '[Harper](https://writewithharper.com)', 'Typ': 'Regelbasiert, lokal auf dem Gerät, kein LLM', 'Wo es funktioniert': 'Chrome, Edge, Firefox, Obsidian, VS Code, macOS-App', 'Grenzen': 'Nur Englisch; Google Docs nicht aufgeführt' },
          { 'Tool': '[LanguageTool](https://dev.languagetool.org/http-server) (selbst gehostet)', 'Typ': 'Regelbasierter Server auf localhost', 'Wo es funktioniert': 'Browser-Add-on, Einstellung "Lokaler Server"', 'Grenzen': 'Experimentelle Einstellung; Java-Server nötig' },
          { 'Tool': '[Page Assist](/de/local-llms/page-assist-review)', 'Typ': 'Ollama-Chat-Seitenleiste', 'Wo es funktioniert': 'Seitenleiste in Chrome und Firefox', 'Grenzen': 'Chat-basiert; Ergebnisse fügen Sie selbst ein' },
          { 'Tool': 'Hotkey + Ollama', 'Typ': 'LLM-Umschreibung markierten Textes', 'Wo es funktioniert': 'Jede App, auch Google Docs', 'Grenzen': 'Raycast (Pro) oder AutoHotkey-Skript' },
        ],
        items: [
          '**Google-Docs-Ablauf:** Schalten Sie in Docs den Vorschlagsmodus ein, markieren Sie einen Absatz, senden Sie ihn über Ihren Hotkey oder Ihre Seitenleiste und fügen Sie den korrigierten Text ein. Der Vorschlagsmodus hält jede Änderung überprüfbar.',
          '**Gmail:** Harpers Website vermerkt, dass Gmail nicht unterstützt wird, solange Gmails eingebaute Grammatikprüfung aktiv ist. Nutzen Sie für E-Mail-Entwürfe den Ablauf markieren und umschreiben.',
          '**Beste Kombination:** ein regelbasierter Prüfer für Unterstreichungen in unterstützten Editoren plus ein lokales LLM für Umschreibungen, Ton und Zusammenfassungen. Das ist die nächste lokale Entsprechung zu Grammarlys Mischung aus Unterstreichungen und KI-Umschreibung.',
          '**LanguageTool selbst hosten:** Laden Sie den LanguageTool-Server herunter, starten Sie ihn auf localhost und wählen Sie im Browser-Add-on unter den experimentellen Einstellungen "Lokaler Server". Der Server ist nur von Ihrem eigenen Rechner erreichbar, solange Sie ihn nicht mit der Option für öffentlichen Zugriff starten.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Regelbasierte Prüfer brauchen keine GPU und erzeugen keine Latenz. Installieren Sie zuerst einen, und ergänzen Sie ein LLM nur für die Umschreibungen, die ein regelbasierter Prüfer nicht leisten kann.',
          },
        ],
      },
      notionReplacement: {
        id: 'notion-replacement',
        title: 'Notion AI ersetzen: Dokumente und Notizen',
        content:
          '**Obsidian mit lokalem Ollama-Backend ist das nächste funktionale Äquivalent zu Notion AI für Notiz- und Wissensarbeiter.** Die Notion-Datenbankstruktur lässt sich nicht nachbilden, aber für Dokumentenentwurf und KI-Q&A über Ihre Notizen ist die Funktionalität gleichwertig — bei vollständig lokaler Verarbeitung.',
        image: '/images/replace-grammarly-notion-ai-with-local-notion-ai-setup-flow-en.svg',
        imageCaption: 'Notion-AI-Ersatz-Setup in Obsidian: Ollama installieren und ein Modell laden, Obsidian installieren, das Copilot-Plugin hinzufügen und auf localhost:11434 zeigen, Smart Connections für Q&A über den gesamten Vault hinzufügen, dann Dokumente entwerfen und Notizen vollständig lokal abfragen.',
        items: [
          '**Obsidian installieren** von [obsidian.md](https://obsidian.md). Kostenlos für private und berufliche Nutzung. Erstellen Sie einen Vault für Ihre Notizen — das ist das Verzeichnis, das die KI-Plugins indexieren.',
          '**Copilot-Plugin installieren** (Community-Plugins → "Copilot" suchen; siehe den [Test von Copilot for Obsidian](/de/power-local-llm/copilot-for-obsidian-review)). Wählen Sie in den Plugin-Einstellungen "Ollama" als LLM-Anbieter, geben Sie `http://localhost:11434` als Basis-URL an und wählen Sie Ihr Modell. Copilot fügt eine Chat-Seitenleiste in Obsidian hinzu, in der Sie Fragen stellen und Inhalte im Kontext der aktuellen Notiz erzeugen.',
          '**Smart-Connections-Plugin installieren** für Q&A über den gesamten Vault. Smart Connections indiziert Ihre Notizen als Embeddings mit einem lokalen Embedding-Modell und holt vor der Anfrage an das LLM relevante Notizen. Das ist der direkte Notion-AI-"Frag-meine-Notizen"-Ersatz.',
          '**Dokumentenentwurf:** Tippen Sie im Copilot-Chat "Entwirf ein/eine [Dokumenttyp] zum Thema [Thema] basierend auf diesen Notizen: [Stichpunkte einfügen]". Das Plugin nimmt den aktuellen Notizkontext automatisch auf. Die Ausgabe erscheint im Chat; per Copy-Paste in die Notiz übernehmen.',
          '**Inhaltsausbau:** Markieren Sie eine Stichpunkt-Gliederung in der Notiz, öffnen Sie die Copilot-Befehlspalette und wählen Sie "Auswahl ausbauen" — das Modell wandelt die Gliederung im Schreibregister der Notiz in Prosa um.',
          '**Wochenrückblick erzeugen:** "Fasse meine Notizen dieser Woche im Wochenrückblick-Format zusammen: Erfolge, Blockaden und nächste Schritte." Smart Connections holt Notizen der letzten 7 Tage und übergibt sie automatisch dem LLM.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obsidian mit dem Copilot- oder Smart-Connections-Plugin auf einer lokalen Ollama-Instanz ersetzt Notion AI für Dokumentenentwurf, Inhaltsausbau und KI-Q&A über Notizen — bei vollständig lokaler Verarbeitung und ohne Übertragung von Inhalten an externe Server.',
          },
          {
            type: 'plain-terms',
            text: 'Die Einrichtung: Obsidian installieren, Ollama installieren, ein Modell laden, das Copilot-Community-Plugin in Obsidian installieren, auf localhost:11434 zeigen lassen. Das ist der Ersatz für Notion AIs KI-Funktionen. Ihre Notizen bleiben im Vault-Ordner (reine Markdown-Dateien, vollständig portabel). Der KI-Chat läuft auf Ihrer Maschine. Nichts verlässt Ihren Rechner.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Obsidian speichert Notizen als reine Markdown-Dateien in einem Ordner Ihrer Wahl. Anders als Notions proprietäres Datenbankformat sind Ihre Notizen in jedem Texteditor lesbar und jederzeit exportierbar. Das ist ein zweiter Datenschutz- und Portabilitätsvorteil gegenüber Notion — Ihr Wissensbestand ist nicht in einer Cloud-Plattform eingeschlossen.',
          },
        ],
      },
      notionOllama: {
        id: 'notion-ollama',
        title: 'Notion und Ollama: Was sich verbinden lässt und was nicht',
        content:
          '**Notion dokumentiert keine Möglichkeit, Notion AI auf ein lokales Modell umzustellen; "Notion + Ollama" bedeutet daher, den KI-Schritt außerhalb von Notion auszuführen oder Ihre Notizen aus Notion zu verlagern.** Notions veröffentlichte Preis- und Sicherheitsseiten beschreiben KI, die auf von Notion ausgewählten Modellanbietern läuft, ohne Einstellung für einen eigenen Endpunkt. Notion ist zudem ein Cloud-Arbeitsbereich, keine lokale Datenbank — es gibt keine lokale Notion-Datenbank, an die sich ein Modell anbinden ließe.',
        items: [
          '**Option 1 — Skript über die Notion-API:** Ein kleines Skript liest eine Seite über die Notion-API, sendet den Text an Ollama auf `localhost:11434` und schreibt das Ergebnis als neuen Block zurück. Der Modellschritt ist lokal; die Seite selbst liegt weiterhin auf Notions Servern, es entfällt also nur der KI-Anbieter.',
          '**Option 2 — Notion MCP:** Notion betreibt einen MCP-Server (OAuth-Anmeldung), über den MCP-Clients Seiten lesen und aktualisieren. Notion nennt Claude Code, Cursor und Codex als Beispiel-Clients; ob ein bestimmter Client ein lokales Modell ansteuern kann, ist eine Frage an diesen Client.',
          '**Option 3 — KI-lastige Notizen in eine Local-first-App verlagern:** Obsidian (reine Markdown-Dateien) mit Copilot, wie oben, oder [AppFlowy](https://appflowy.com), ein Open-Source-Arbeitsbereich (AGPL-3.0) im Notion-Stil mit Offline-Modus und lokalen KI-Optionen laut seiner Vergleichsseite. Prüfen Sie die Dokumentation von AppFlowy für die genaue Einrichtung lokaler Modelle.',
          '**Was ein lokales Modell nicht ändert:** Inhalte, die bereits in Notion liegen, werden von Notion gespeichert. Ein lokales Modell darüber entfernt den KI-Anbieter-Schritt, nicht Notions Speicherung.',
          '**Was Notion zu seiner eigenen KI sagt:** Standardmäßig verwenden weder Notion noch seine KI-Anbieter Kundendaten zum Trainieren von Modellen; im Enterprise-Tarif bieten die meisten Modelle null Datenspeicherung, in anderen Tarifen speichern Anbieter Daten bis zu 30 Tage.',
        ],
        codeBlock:
          'import requests\n\nNOTION = {"Authorization": "Bearer <NOTION_TOKEN>", "Notion-Version": "2022-06-28"}\nPAGE_ID = "<page-id>"\n\n# 1. read the page text through the Notion API\nblocks = requests.get(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION).json()["results"]\ntext = "\\n".join(\n    "".join(t["plain_text"] for t in b["paragraph"]["rich_text"])\n    for b in blocks if b["type"] == "paragraph"\n)\n\n# 2. rewrite it with a local model (Ollama on localhost)\nr = requests.post("http://localhost:11434/api/generate", json={\n    "model": "gemma4:12b", "stream": False,\n    "prompt": "Correct the grammar of this text. Return only the corrected text.\\n\\n" + text,\n})\nfixed = r.json()["response"]\n\n# 3. append the result as a new paragraph block\nrequests.patch(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION, json={\n    "children": [{"object": "block", "type": "paragraph",\n                  "paragraph": {"rich_text": [{"type": "text", "text": {"content": fixed[:2000]}}]}}]\n})',
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'Das Skript sendet Ihr Notion-Token und den Seiteninhalt nur an Notion und an localhost. Halten Sie das Token aus geteilten Dateien heraus, und beachten Sie, dass Notion-Rich-Text-Blöcke etwa 2.000 Zeichen pro Block aufnehmen, lange Ausgaben also auf mehrere Blöcke aufgeteilt werden müssen.',
          },
        ],
      },
      integrations: {
        id: 'integrations',
        title: 'Integrationsoptionen',
        content:
          '**Vier Integrationsstufen: einfach (Copy-Paste), mittel (Hotkey-App oder Schreib-App), im Text (regelbasierter Prüfer) und fortgeschritten (eigene Browser-Erweiterung).** Beginnen Sie auf der Stufe, die zu Ihrer technischen Sicherheit passt.',
        columns: ['Integrationsstufe', 'Wie', 'Apps', 'Geeignet für'],
        rows: [
          { 'Integrationsstufe': 'Einfach (Copy-Paste)', 'Wie': 'Text in lokale KI-App einfügen, Ergebnis kopieren', 'Apps': 'LM Studio Chat, Ollama CLI, Open WebUI', 'Geeignet für': 'Gelegentliche Korrekturen; jedes OS' },
          { 'Integrationsstufe': 'Mittel (Hotkey)', 'Wie': 'Text markieren → Hotkey → Korrektur ersetzt Markierung', 'Apps': 'Raycast AI (macOS, Pro), AutoHotkey + Ollama (Windows)', 'Geeignet für': 'Häufige Korrekturen in jeder App; kaum Workflow-Änderung' },
          { 'Integrationsstufe': 'Mittel (Schreib-App)', 'Wie': 'KI-Assistent direkt im Schreib-Tool', 'Apps': 'Obsidian + Copilot-Plugin, VS Code + Continue.dev', 'Geeignet für': 'Autoren und Entwickler, die in diesen Apps leben' },
          { 'Integrationsstufe': 'Im Text (regelbasiert)', 'Wie': 'Lokaler Prüfer unterstreicht Fehler beim Tippen', 'Apps': 'Harper, selbst gehostetes LanguageTool', 'Geeignet für': 'Feedback beim Tippen ohne GPU' },
          { 'Integrationsstufe': 'Fortgeschritten (Browser-Erweiterung)', 'Wie': 'Eigene Erweiterung sendet Text an Ollama-API', 'Apps': 'Eigene Chrome-/Firefox-Erweiterung (Vorlagen auf GitHub)', 'Geeignet für': 'Power-User, die Grammarly-artige Browserintegration wollen' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Auf macOS ist Raycast mit einem eigenen KI-Befehl eine schnelle Mittelstufe, wenn Sie Pro haben: Legen Sie einen KI-Befehl mit dem Grammatikkorrektur-Prompt an, vergeben Sie einen Hotkey, markieren Sie Text in beliebiger App, drücken Sie den Hotkey, und der korrigierte Text ersetzt die Markierung. Ohne Pro nutzen Sie die Ollama-CLI oder einen Chat-Client wie Open WebUI.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Modell-Empfehlungen für Schreibaufgaben',
        content:
          '**Schreibassistenz bevorzugt Modelle mit starker Anweisungsbefolgung und kohärenter Prosa.** Die Rangfolge unterscheidet sich von der für Coding oder Mathematik. Die Empfehlungen unten sind Startpunkte nach Größe und Anweisungsbefolgung, keine Ergebnisse von Grammatik-Benchmarks.',
        columns: ['Aufgabe', 'Bestes Modell', 'Alternative (kleiner)', 'Begründung'],
        rows: [
          { 'Aufgabe': 'Grammatikkorrektur', 'Bestes Modell': 'Gemma 4 12B', 'Alternative (kleiner)': 'Qwen3.5 4B / Phi-4 Mini', 'Begründung': 'Befolgt "nur Fehler beheben, Text zurückgeben"' },
          { 'Aufgabe': 'Stilumschreibung', 'Bestes Modell': 'Gemma 4 12B oder Qwen3.8 27B', 'Alternative (kleiner)': 'Qwen3.5 4B', 'Begründung': 'Mehr Spielraum für Formulierung und Register' },
          { 'Aufgabe': 'Tonanpassung', 'Bestes Modell': 'Qwen3.8 27B', 'Alternative (kleiner)': 'Gemma 4 12B', 'Begründung': 'Größere Modelle halten Fakten meist stabiler' },
          { 'Aufgabe': 'Dokumentenentwurf (Notion-AI-Ersatz)', 'Bestes Modell': 'Gemma 4 12B', 'Alternative (kleiner)': 'Qwen3.5 4B', 'Begründung': 'Folgt Format-Anweisungen für Dokumente' },
          { 'Aufgabe': 'Notiz-Zusammenfassung / Q&A', 'Bestes Modell': 'Gemma 4 12B', 'Alternative (kleiner)': 'Qwen3.5 4B / Phi-4 Mini', 'Begründung': 'Zusammenfassen klappt schon bei kleinen Größen' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Setzen Sie eine "Keine KI-typischen Phrasen"-Anweisung in den System-Prompt. Modelle nutzen standardmäßig hedgendes KI-Register ("Sicher! Hier ist die korrigierte Version..."). Ein System-Prompt "Gib nur den korrigierten Text zurück, keine Einleitung, kein Kommentar" eliminiert das. Für Stilumschreibungen ergänzen: "Verwende die Phrasen \'in die Tiefe gehen\', \'Geflecht\', \'fördern\', \'Reich von\' oder \'erwähnenswert\' nicht."',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz-Vergleich',
        content:
          '**Der Datenschutzunterschied zwischen Cloud-Schreibassistenten und lokalen LLMs ist strukturell.** Cloud-Dienste können Ihren Text nicht verarbeiten, ohne ihn zu erhalten; lokale LLMs können Ihren Text nicht versenden, ohne eine ausdrückliche ausgehende Verbindung.',
        image: '/images/replace-grammarly-notion-ai-with-local-cost-privacy-overview-en.svg',
        imageCaption: 'Cloud-Schreibtools versus lokales LLM: Grammarly und Notion AI laufen als 2 separate kostenpflichtige Abos und senden Text an Cloud-Server, während Ollama und Obsidian sämtliches Schreiben und alle Notizen ohne laufende Softwarekosten lokal auf dem Gerät halten.',
        items: [
          '**Grammarly-Datenlizenz:** Nach Abschnitt 7.2 von [Grammarlys Nutzungsbedingungen](https://www.grammarly.com/terms) behalten Sie das Eigentum an Ihren Inhalten, gewähren Grammarly aber eine weltweite, nicht-exklusive, gebührenfreie Lizenz zur Nutzung für festgelegte Zwecke, darunter Betrieb, Bereitstellung und Verbesserung seiner Dienste sowie die Entwicklung neuer Produkte oder Funktionen. Die Bedingungen besagen außerdem, dass das Annehmen oder Ablehnen von Vorschlägen helfen kann, die Vorschlags-Engine zu trainieren. Grammarly gibt an, dass seinen LLM-Partnern untersagt ist, Kundendaten zum Training ihrer Modelle zu verwenden.',
          '**Notion-AI-Datenfluss:** Notion leitet KI-Anfragen an eine Auswahl von Modellanbietern weiter (die aktuelle Liste steht auf seiner Seite zu Unterauftragsverarbeitern). Notion gibt an, dass standardmäßig weder Notion noch seine KI-Anbieter Kundendaten zum Trainieren von Modellen verwenden. Enterprise bietet null Datenspeicherung bei LLM-Anbietern; in anderen Tarifen speichern Anbieter Daten bis zu 30 Tage.',
          '**Lokales-LLM-Datenfluss:** keine externe Übertragung. Ollama lauscht standardmäßig auf localhost, und die Inferenz baut keine ausgehende Verbindung auf. Modellgewichte sind statische Dateien auf der Festplatte; Ihr Text wird im Speicher verarbeitet.',
          '**DSGVO-Pflichten und Berufsgeheimnis (DACH):** In Deutschland, Österreich und der Schweiz fallen Cloud-Schreibassistenten unter Artikel 28 DSGVO (Auftragsverarbeitung) und erfordern einen AV-Vertrag mit hinreichenden Garantien. Berufsgeheimnisträger (Anwälte nach § 203 StGB, Ärzte, Steuerberater) sollten vertragliche Schutzmaßnahmen prüfen, bevor sie Mandanten- oder Patientendaten an Cloud-KI senden. Ein lokales LLM umgeht die Frage nach dem Drittanbieter-Auftragsverarbeiter, weil keine Daten den Rechner verlassen.',
          '**Telemetrie:** Cloud-Tools erfassen zusätzlich zum Text selbst Nutzungs- und Interaktionsdaten. Lokale Apps unterscheiden sich — prüfen Sie die Telemetrie-Einstellungen jeder App, und überwachen Sie bei Bedarf an prüfungsfester Sicherheit den ausgehenden Netzwerkverkehr selbst.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Wenn Sie Grammarly für Geschäftskorrespondenz, Vertragsentwürfe oder andere Inhalte unter Vertraulichkeitspflicht einsetzen — prüfen Sie die Datenrichtlinien Ihres Unternehmens und die geltenden Enterprise-Datenvereinbarungen, bevor Sie davon ausgehen, dass die Inhalte geschützt sind.',
          },
        ],
      },
      cost: {
        id: 'cost',
        title: 'Kostenvergleich',
        content:
          '**Wer beide Tools ersetzt, spart das Grammarly-Abo und den KI-Anteil des Notion-Tarifs.** Die lokale LLM-Einrichtung ist softwareseitig kostenlos; laufende Kosten entstehen nur durch Strom.',
        columns: ['Tool', 'Monatlich', 'Jährlich', 'Hinweise'],
        rows: [
          { 'Tool': '[Grammarly Free](https://www.grammarly.com/plans)', 'Monatlich': '0 $', 'Jährlich': '0 $', 'Hinweise': '100 KI-Prompts/Monat; Basis-Prüfungen' },
          { 'Tool': '[Grammarly Pro](https://www.grammarly.com/plans)', 'Monatlich': 'ab ~12 $/Monat', 'Jährlich': 'ab ~144 $/Jahr', 'Hinweise': '2.000 KI-Prompts/Monat; höher bei monatlicher Zahlung' },
          { 'Tool': '[Notion AI](https://www.notion.com/pricing)', 'Monatlich': 'in Business (~20 $/Nutzer)', 'Jährlich': '~240 $/Nutzer/Jahr', 'Hinweise': 'Free und Plus: nur Testphase; kein separater Zusatz' },
          { 'Tool': '[Ollama (lokales LLM)](https://ollama.com)', 'Monatlich': '0 $', 'Jährlich': '0 $', 'Hinweise': 'Frei und Open Source; nur Strom' },
          { 'Tool': '[Obsidian (Notion-Ersatz)](https://obsidian.md)', 'Monatlich': '0 $', 'Jährlich': '0 $', 'Hinweise': 'Kostenlos für private und berufliche Nutzung' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Sie unentschlossen sind, verlagern Sie zunächst nur die Grammatikkorrektur 30 Tage lang auf ein lokales Modell. Lassen Sie Grammarly für die Browser-Integration aktiv. Bewerten Sie, ob die lokale Korrekturqualität und der Copy-Paste-Ablauf für Ihre Schreibarbeit akzeptabel sind. Erst danach entscheiden Sie über die Grammarly-Kündigung. Der Wechsel von Notion AI ist friktionsärmer, sofern Sie Obsidian als Notiz-Schicht akzeptieren.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Kein System-Prompt für das Ausgabeformat.** Ohne System-Prompt stellen Modelle "Sicher! Hier der korrigierte Text:" voran, fügen Erklärungen hinzu und nutzen KI-Register-Phrasen. Setzen Sie immer einen System-Prompt, der "Gib nur den korrigierten Text zurück" vorgibt.',
          '**Das kleinste Modell für komplexe Stilumschreibungen verwenden.** Kleine Modelle bewältigen Grammatikkorrektur gut, liefern aber tendenziell formelhaftere Stilumschreibungen. Für stilschwere Arbeit wechseln Sie zu Gemma 4 12B oder größer.',
          '**Notion-UI-Gleichwertigkeit von Obsidian erwarten.** Obsidian ist ein Markdown-Editor, keine Datenbank. Wenn Ihr Notion-Workflow auf Datenbanken, Ansichten und Relationen beruht, ist Obsidian kein vollständiger Notion-Ersatz — nur die KI-Funktionen lassen sich übertragen. Prüfen Sie vor dem Wechsel, ob die Datenbankfunktionen kritisch sind.',
          '**Keine Wortobergrenze bei Stilumschreibungen.** Ohne Obergrenze blähen Modelle die Umschreibung auf. Ergänzen Sie "Halte den umgeschriebenen Text innerhalb von 10 % der ursprünglichen Wortzahl" in jedem Stilumschreibungs-Prompt.',
          '**Komplette Dokumente an ein kleines Modell senden.** Kleine Modelle verlieren bei langen Eingaben den Faden. Gliedern Sie lange Dokumente in Abschnitte und korrigieren Sie jeden Abschnitt einzeln.',
          '**Unterstreichungen beim Tippen von einem LLM erwarten.** Ein LLM antwortet, wenn man es fragt; es beobachtet Ihr Tippen nicht. Für Unterstreichungen beim Tippen ergänzen Sie einen regelbasierten lokalen Prüfer wie Harper.',
          '**Annehmen, Notion AI könne ein lokales Modell nutzen.** Notion dokumentiert dafür keine Unterstützung; nutzen Sie die Notion-API mit Ollama oder verlagern Sie KI-lastige Notizen in eine Local-first-App.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Grammarly Nutzungsbedingungen — Abschnitt 7.2 (Lizenz an Nutzerinhalten) — [grammarly.com/terms](https://www.grammarly.com/terms)',
          'Grammarly-Tarife — [grammarly.com/plans](https://www.grammarly.com/plans)',
          'Grammarly Responsible AI (Datennutzung durch Partner) — [grammarly.com/responsible-ai](https://www.grammarly.com/responsible-ai)',
          'Notion-Preise und Zugang zu KI-Tarifen — [notion.com/pricing](https://www.notion.com/pricing)',
          'Notion-AI-Sicherheitspraktiken (Anbieter, Training, Speicherung) — [notion.com/help/notion-ai-security-practices](https://www.notion.com/help/notion-ai-security-practices)',
          'Notion-MCP-Dokumentation — [developers.notion.com/docs/mcp](https://developers.notion.com/docs/mcp)',
          'Obsidian kostenlos für die Arbeit (Februar 2025) — [obsidian.md/blog/free-for-work](https://obsidian.md/blog/free-for-work/)',
          'Harper Grammatikprüfer — [writewithharper.com](https://writewithharper.com)',
          'LanguageTool-HTTP-Server (Selbst-Hosting) — [dev.languagetool.org/http-server](https://dev.languagetool.org/http-server)',
          'Raycast lokale Modelle — [manual.raycast.com/ai/local-models](https://manual.raycast.com/ai/local-models)',
          'Ollama-Modellbibliothek — [ollama.com/library/gemma4](https://ollama.com/library/gemma4), [ollama.com/library/qwen3.5](https://ollama.com/library/qwen3.5), [ollama.com/library/qwen3.8](https://ollama.com/library/qwen3.8)',
          'Obsidian-Copilot-Plugin-Dokumentation — [GitHub: logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot)',
          'Obsidian-Smart-Connections-Plugin — [GitHub: brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Welche kleinen LLMs liefern gute lokale Grammatikkorrektur?',
            a: 'Qwen3.5 4B (`qwen3.5:4b`, ca. 3–4 GB) und Phi-4 Mini (`phi4-mini`) passen auf 8-GB-Rechner; Gemma 4 12B (`gemma4:12b`) eignet sich für 16-GB-Systeme und Stilumschreibungen; Qwen3.8 27B passt ab 24 GB. Kein veröffentlichter Benchmark reiht sie für Grammatikkorrektur ein — testen Sie daher zwei Modelle an fünf eigenen Absätzen und behalten Sie das, das am wenigsten ändert und Ihre Fehler trotzdem findet. Nutzen Sie einen System-Prompt "nur Fehler beheben, nur korrigierten Text zurückgeben" und eine niedrige Temperatur.',
          },
          {
            q: 'Gibt es eine lokale Grammarly-Alternative, die in Google Docs funktioniert?',
            a: 'Nicht als Direktersatz. Keines der hier betrachteten lokalen Tools führt Google Docs als unterstützten Editor auf. Der funktionierende Ablauf ist markieren → umschreiben → einfügen: Text in Docs markieren (bei eingeschaltetem Vorschlagsmodus), über ein Hotkey-Tool oder eine Browser-Seitenleiste an ein lokales Modell senden und das Ergebnis einfügen. Für Unterstreichungen beim Tippen anderswo sind Harper (nur Englisch, lokal auf dem Gerät, Erweiterungen für Chrome, Edge und Firefox) und ein selbst gehosteter LanguageTool-Server die lokalen Optionen.',
          },
          {
            q: 'Wie nutze ich Ollama mit Notion?',
            a: 'Notion dokumentiert keine Möglichkeit, Notion AI auf ein lokales Modell umzustellen. Um Ollama mit Notion-Inhalten zu nutzen, schreiben Sie ein kleines Skript, das eine Seite über die Notion-API liest, den Text an Ollama auf localhost:11434 sendet und das Ergebnis zurückschreibt (siehe Beispiel oben). Der Modellschritt ist lokal; die Seite liegt weiterhin auf Notions Servern. Für eine vollständig lokale Lösung verlagern Sie KI-lastige Notizen zu Obsidian mit dem Copilot-Plugin oder zu einer Local-first-App wie AppFlowy.',
          },
          {
            q: 'Kann ich ein lokales LLM mit einer lokalen Notion-Datenbank verbinden?',
            a: 'Notion hat keine lokale Datenbank: Arbeitsbereiche liegen auf Notions Servern und werden über die API erreicht. Sie können das Modell lokal betreiben und Text über die API mit Notion austauschen oder einen Local-first-Arbeitsbereich wählen. Obsidian speichert Notizen als Markdown-Dateien auf der Festplatte; AppFlowy ist eine Open-Source-App im Notion-Stil mit Offline-Modus.',
          },
          {
            q: 'Kann ein lokales LLM meinen persönlichen Schreibstil analysieren?',
            a: 'Ja. Fügen Sie drei Textproben in ein lokales Modell mit dem Stilprofil-Prompt aus diesem Leitfaden ein: Es liefert eine Stichpunkt-Beschreibung Ihrer Satzlänge, Ihres Tons, Wortschatzes und Ihrer Gewohnheiten sowie einen kurzen System-Prompt, den Sie wiederverwenden können, damit ein Lektor-Modell Ihre Stimme beibehält. Weil die Proben Ihren Rechner nie verlassen, ist das für private Entwürfe unbedenklich.',
          },
          {
            q: 'Was ist der Unterschied zwischen Notion AI und Grammarly?',
            a: 'Sie sitzen an unterschiedlichen Stellen. Notion AI arbeitet innerhalb von Notion: Entwerfen, Zusammenfassen und Beantworten von Fragen zu Ihrem Arbeitsbereich. Grammarly prüft Text in Apps und Browser-Textfeldern und bietet Umschreibungen. Sie überschneiden sich bei Umschreibung und Ton, doch keines ersetzt das andere — und beide lassen sich für die meisten Aufgaben durch ein lokales LLM plus eine Notiz-App ersetzen.',
          },
          {
            q: 'Funktioniert Grammarly in Notion und Obsidian?',
            a: 'Grammarlys Browser-Erweiterung prüft Textfelder in browserbasierten Editoren, wozu Notion im Web gehört. Desktop-Apps wie Obsidian liegen außerhalb dessen, was eine Browser-Erweiterung erreicht. Für Obsidian deckt ein lokaler Prüfer wie Harper (mit Obsidian-Plugin) oder das Copilot-Plugin mit Ollama dasselbe ab, ohne Text an einen Cloud-Dienst zu senden.',
          },
          {
            q: 'Ist ein lokales LLM bei Grammatikkorrektur so gut wie Grammarly?',
            a: 'Für alltägliche Grammatik-, Zeichensetzungs- und Rechtschreibfehler leistet ein gut geprompteter lokaler Modell-Ansatz dieselben Korrekturen; testen Sie es zur Bestätigung an Ihrem eigenen Text. Wo Grammarly im Vorteil bleibt: Echtzeit-Korrekturen beim Tippen und die Browser-Erweiterung, die in Gmail, Google Docs und anderen Web-Apps funktioniert. Ein lokales LLM erfordert für Text in Browser-Feldern einen Ablauf aus Markieren und Einfügen.',
          },
          {
            q: 'Kann ich Obsidian als vollständigen Notion-Ersatz nutzen?',
            a: 'Obsidian ersetzt Notions Notiz- und Wissensbasisfunktionen gut. Es ersetzt nicht Notions Datenbank-, Projektmanagement- und Relationsfunktionen. Wenn Sie Notion vor allem für Notizen, Dokumente und Wikis nutzen — ist Obsidian ein vollständiger Ersatz. Wenn Sie auf Notion-Datenbanken, Board-Ansichten oder Relations-Eigenschaften angewiesen sind — brauchen Sie zusätzliche Tools (Anytype, AppFlowy oder Notion selbst für die Datenbank-Schicht und Obsidian für das Schreiben).',
          },
          {
            q: 'Welches lokale Modell kommt Grammarlys Schreibvorschlägen am nächsten?',
            a: 'Kein lokales Modell bildet Grammarlys Vorschlags-Engine nach, und kein Benchmark reiht Modelle dafür ein. In der Praxis lassen Gemma 4 12B und Qwen3.8 27B den meisten Spielraum für Stil- und Tonumschreibungen, wenn sie angewiesen werden, die ursprüngliche Stimme zu bewahren, während Qwen3.5 4B und Phi-4 Mini für reine Grammatikfixes ausreichen. Kombinieren Sie jedes davon mit einem regelbasierten Prüfer wie Harper, wenn Sie Unterstreichungen beim Tippen möchten.',
          },
          {
            q: 'Schickt das Obsidian-Copilot-Plugin meine Notizen in die Cloud?',
            a: 'Nicht, wenn es auf eine lokale Ollama-Instanz konfiguriert ist. Das Plugin unterstützt sowohl Cloud-LLMs (OpenAI, Anthropic) als auch lokales Ollama. Wenn Sie Ollama als LLM-Anbieter wählen und die localhost-URL eintragen, läuft die gesamte KI-Verarbeitung lokal. Keine Notiz wird extern übertragen. Bestätigen können Sie das, indem Sie den Netzwerkverkehr mit Tools wie Little Snitch (macOS) oder Wireshark beobachten, falls Sie eine prüfungsfeste Bestätigung brauchen.',
          },
          {
            q: 'Kann ich ein lokales LLM in Google Docs oder Gmail nutzen?',
            a: 'Nicht direkt — es gibt keine lokale-LLM-Browser-Erweiterung, die wie Grammarly nativ in Browser-Textfelder eingreift. Workarounds: (1) Text in Google Docs markieren, kopieren, in die lokale KI-App einfügen, korrigierte Version kopieren, zurück einfügen; (2) ein Hotkey-Tool, das markierten Text verarbeitet und ersetzt (Raycast mit lokalen Modellen erfordert Pro; ein AutoHotkey-Skript, das die Ollama-API aufruft, ist kostenlos); (3) eine eigene Chrome-Erweiterung, die markierten Text liest und die lokale Ollama-API aufruft (Open-Source-Vorlagen liegen auf GitHub). Keiner dieser Wege erreicht Grammarlys nahtlose Erfahrung im Text.',
          },
          {
            q: 'Ist diese Einrichtung HIPAA- oder DSGVO-konform für den professionellen Einsatz?',
            a: 'Ein lokales LLM, das Daten ausschließlich auf Ihrer Maschine ohne externe Übertragung verarbeitet, adressiert die Kern-Datenübertragungssorge sowohl bei HIPAA als auch bei der DSGVO. Die Konformität hängt jedoch vom gesamten Technologie-Stack, Ihren Sicherheitskontrollen und den konkreten regulatorischen Anforderungen ab. Ein lokales LLM ist nicht automatisch konform — Sie müssen Endpunktsicherheit, physischen Geräteschutz und Zugriffskontrollen prüfen. Für formelle Konformität konsultieren Sie Ihre/n Datenschutzbeauftragte/n. Lokale Verarbeitung beseitigt das Thema "Drittanbieter-Auftragsverarbeiter", ersetzt aber kein vollständiges Compliance-Programm.',
          },
          {
            q: 'Welcher lokale Schreibassistent eignet sich am besten für wissenschaftliche Texte?',
            a: 'Ein mittelgroßes lokales Modell (zum Beispiel Gemma 4 12B) mit System-Prompt: "Korrigiere ausschließlich Grammatik und Zeichensetzung — verändere nicht Vokabular, Satzstruktur oder Inhalt. Belasse alle Zitate, Fachbegriffe und domänenspezifische Sprache unverändert." Das entspricht einem reinen Grammatikmodus, der bei wissenschaftlichen Texten eine risikoärmere Einstellung ist, weil veränderte Phrasen die Bedeutung verschieben oder zitierte Inhalte zu modifizieren scheinen können.',
          },
          {
            q: 'Kann ich Notion AIs Meeting-Notiz-Zusammenfassung lokal ersetzen?',
            a: 'Ja. Exportieren Sie Meeting-Notizen als Text- oder Markdown-Datei (oder fügen Sie das Transkript direkt ein). Verwenden Sie den Prompt: "Fasse diese Meeting-Notizen zusammen in: (1) getroffene Entscheidungen, (2) Aufgaben mit Verantwortlichen, (3) offene Fragen. Stichpunkte je Abschnitt. Maximal 300 Wörter." Ein kleines anweisungsfolgendes Modell bewältigt Meeting-Zusammenfassungen. Für wiederkehrende Meetings legen Sie eine gespeicherte Prompt-Vorlage in Ihrer lokalen KI-App an.',
          },
          {
            q: 'Welches LLM verwendet Grammarly? Ist Grammarly ein LLM?',
            a: 'Grammarly ist ein Schreibprodukt, kein einzelnes Modell. Grammarly nennt auf den von uns geprüften Seiten (Tarife, Bedingungen und die Seite zu Responsible AI) seine zugrunde liegenden Modelle nicht. Die Seite zu Responsible AI besagt, dass Informationen, die für generative KI-Funktionen genutzt werden, mit LLM-Partnern geteilt werden und dass diesen Partnern untersagt ist, Kundendaten zum Training ihrer Modelle zu verwenden. Bei Notion AI ist es ähnlich: Es nutzt eine Auswahl von Anbietern, die auf seiner Seite zu Unterauftragsverarbeitern aufgeführt sind. Forschende haben zudem offene Textbearbeitungsmodelle unter der Organisation grammarly auf Hugging Face veröffentlicht (CoEdIT, 770M bis 11B Parameter); das sind Forschungsmodelle, nicht das Produkt selbst. Entscheidend für den Datenschutz ist die Datenverarbeitung: Text, der an eines der beiden Produkte gesendet wird, wird auf den Servern des Anbieters verarbeitet. Ein lokales LLM vermeidet das — der Text verlässt Ihren Rechner nie.',
          },
          {
            q: 'Muss ich bei der Verwendung eines lokalen LLM die DSGVO beachten?',
            a: 'Lokale LLMs verarbeiten personenbezogene Daten weiterhin im Sinne der DSGVO — der entscheidende Punkt ist jedoch, dass keine Übermittlung an einen Auftragsverarbeiter (Art. 28 DSGVO) stattfindet, weil die Daten den Rechner nicht verlassen. Damit entfällt die Pflicht zum AV-Vertrag mit einem Cloud-Anbieter und die Prüfung von Drittlandtransfers (Schrems II). Sie bleiben Verantwortlicher i.S.v. Art. 4 Nr. 7 DSGVO und müssen weiterhin Zwecke, Rechtsgrundlagen und Betroffenenrechte (Art. 13–22) abbilden. Empfohlen für DACH-Unternehmen: BSI-Grundschutz-Kataloge zur Endpunktabsicherung anwenden, Festplattenverschlüsselung aktivieren und in der Datenschutzerklärung dokumentieren, dass die KI-Verarbeitung lokal stattfindet.',
          },
          {
            q: 'Ist diese Lösung für den deutschen Mittelstand geeignet?',
            a: 'Ja, besonders für Mittelstand-Unternehmen mit Berufsgeheimnis-Anforderungen oder Kunden im DACH-Raum, die DSGVO-Konformität nachweisen müssen. Empfohlene Vorgehensweise: Gemma 4 12B oder Qwen3.8 27B auf einem Apple M5 MacBook Pro 16 GB oder einer NVIDIA RTX 3060 12 GB pro Arbeitsplatz (je nach Modellgröße und verfügbarem Speicher), Obsidian für die Notiz-Schicht, Ollama als zentraler Inferenz-Server im internen Netz (LAN) für mehrere Nutzer. Vorteile gegenüber Cloud-Lösungen: Die KI-Verarbeitung findet ohne Cloud-Anbieter statt, und Sie behalten mehr Kontrolle über die Daten. Praktische Empfehlungen: Maßnahmen für Endgeräte und Zugriffskontrolle prüfen (etwa nach BSI IT-Grundschutz), Backup-Strategie für Modellgewichte und Vault-Verzeichnis dokumentieren, Schulungsplan für Mitarbeiter zur Prompt-Hygiene erstellen. Für Kanzleien, Steuerberatungen, Arztpraxen und Ingenieurbüros ist der lokale Stack ein direkter Weg zu einer datenschutzfreundlichen KI-Nutzung; die Konformität im Einzelfall bleibt zu prüfen.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokales LLM mit Obsidian](/de/power-local-llm/local-llm-with-obsidian-2026) — vollständige Einrichtung von Obsidian + Ollama für Notizen und Q&A über Ihren Vault.',
          '[Test: Copilot for Obsidian](/de/power-local-llm/copilot-for-obsidian-review) — das Copilot-Plugin aus dem Notion-AI-Ersatz-Workflow.',
          '[Obsidian- und Logseq-KI-Plugins im Vergleich](/de/power-local-llm/obsidian-logseq-ai-plugins) — Plugin-Optionen für lokale KI in Notiz-Apps.',
          '[Kleine lokale LLM-Modelle](/de/local-llms/small-local-llm-models) — aktuelle kleine Modelle für 4–8-GB-Rechner, relevant für lokale Grammatikkorrektur.',
          '[Lokale-LLM-E-Mail- und Kalender-Automatisierung](/de/power-local-llm/local-llm-email-and-calendar-automation) — Automatisierung von E-Mail-Entwürfen und Kalenderverwaltung mit lokalen LLMs als Ergänzung zum Schreibassistenten.',
          '[Lokale LLM-Prompts für Belletristik-Autoren](/de/power-local-llm/local-llm-prompts-for-fiction-writers) — Prompt-Vorlagen für kreatives Schreiben jenseits der Grammatikkorrektur, etwa Szenen- und Figurenarbeit.',
          '[Zapier durch lokale KI-Agenten ersetzen](/de/power-local-llm/replace-zapier-with-local-ai-agents) — Lokale Workflow-Automatisierung, die Schreibwerkzeuge mit anderen Geschäftsprozessen verbindet.',
          '[Lokales RAG für vertrauliche Geschäftsdaten](/de/power-local-llm/local-rag-for-private-business-data) — Q&A über vertrauliche Geschäftsunterlagen, Erweiterung des Notiz-Q&A auf größere Dokumentbestände.',
          '[Einfachste lokale KI-App für Windows, Mac und Linux](/de/power-local-llm/easiest-local-ai-app-windows-mac-linux) — Falls Sie Ihre erste lokale KI-App vor dem Schreibassistenten-Workflow einrichten müssen.',
          '[Lokale KI-Agenten für Geschäftsprozesse: EU-Compliance](/de/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — DSGVO- und EU-AI-Act-Kontext für lokale KI-Schreibassistenten in europäischen Unternehmen.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/replace-grammarly-notion-ai-with-local-overview-hero-fr.webp',
    title: 'Remplacer Grammarly et Notion AI par un LLM local (2026)',
    seoTitle: 'Alternative locale à Grammarly : petits LLM 2026',
    intro:
      'Grammarly et Notion AI traitent vos textes sur des serveurs cloud — vos brouillons d\'e-mails, documents confidentiels et notes personnelles transitent, par conception, par des systèmes tiers. Un LLM local exécuté via Ollama ou LM Studio peut remplacer les deux pour la plupart des tâches d\'écriture : correction grammaticale et stylistique, rédaction de documents, synthèse de contenu et prise de notes assistée — sans qu\'aucun texte ne quitte votre machine. Ce guide présente les petits modèles qui corrigent bien la grammaire, ce qui fonctionne dans Google Docs et Notion, et l\'écart qui subsiste face à Grammarly.',
    metaDescription:
      'Alternative locale à Grammarly : meilleurs petits LLM pour la correction grammaticale, Google Docs, Notion et configurations Ollama sans cloud.',
    twitterDescription:
      'Remplacer Grammarly et Notion AI par un LLM local : petits modèles pour la correction, options Google Docs et Notion, Ollama — aucun texte ne quitte votre machine.',
    current_models_mentioned: [
      'Qwen3.5 4B',
      'Gemma 4 E4B',
      'Gemma 4 12B',
      'Qwen3.8 27B',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M3 MacBook Air 8 GB',
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 3060 12 GB',
    ],
    audience:
      'Travailleurs du savoir, rédacteurs, étudiants et professionnels soucieux de confidentialité qui utilisent Grammarly pour la correction et Notion AI pour l\'assistance documentaire, et veulent les remplacer par une IA locale qui garde leurs contenus privés.',
    readTime: '13 min de lecture',
    educationalLevel: 'Beginner',
    primaryTerm: 'remplacer Grammarly LLM local',
    targetKeywords: [
      'remplacer grammarly llm local',
      'alternative grammarly locale',
      'meilleur llm pour la correction grammaticale',
      'petit llm correction grammaticale',
      'remplacer notion ai local',
      'notion ollama',
      'assistant écriture llm local',
      'alternative grammarly sans cloud',
      'alternative notion ai confidentialité',
      'ollama correction écriture',
    ],
    leadAnswerBlock:
      '**Un LLM local exécuté via Ollama remplace le cœur de Grammarly et de Notion AI sans envoyer votre texte à un service cloud. Pour Grammarly : correction grammaticale et stylistique via un modèle de prompt ("Corrige la grammaire et améliore le style de ce paragraphe. Renvoie uniquement le texte corrigé.") sur tout modèle à partir de Qwen3.5 4B. Pour Notion AI : rédaction de documents et Q&R sur vos notes via Obsidian avec le plugin Copilot ou Smart Connections pointé sur Ollama. L\'argument confidentialité est concret : les conditions d\'utilisation de Grammarly (section 7.2) lui accordent une licence sur vos contenus pour exploiter et améliorer ses services, et Notion AI transmet les requêtes à des fournisseurs de modèles tiers, alors qu\'un modèle local traite le même texte sur votre propre matériel. L\'écart est faible pour l\'écriture courante et se creuse à deux endroits : la vérification en cours de frappe dans Google Docs, Gmail et les autres éditeurs du navigateur, et les suggestions de style propres à un domaine.**',
    quickAnswerTop: {
      fr: {
        question: 'Un LLM local peut-il remplacer Grammarly et Notion AI ?',
        answer:
          'Oui, pour la plupart des usages quotidiens. Pour Grammarly : un LLM local gère la correction grammaticale, la réécriture pour la clarté, la suppression du passif et l\'ajustement de ton de base. Il n\'égale pas les suggestions inline en temps réel ni l\'extension navigateur, mais un flux par prompt couvre les mêmes corrections à la demande. Pour Notion AI : Obsidian avec le plugin Copilot pointé sur Ollama remplace la rédaction, l\'expansion de contenu et les Q&R sur vos notes. Notion ne documente aucun moyen de pointer Notion AI lui-même sur un modèle local. Points de départ : Qwen3.5 4B (environ 3 à 4 Go à télécharger, systèmes 8 Go), Gemma 4 12B (systèmes 16 Go) ou Qwen3.8 27B (24 Go et plus) — aucun benchmark spécifique à la grammaire ne les classe, testez-en donc deux sur vos propres paragraphes.',
        bullets: [
          'Correction grammaticale : tout modèle local qui suit les instructions, avec un system prompt "corrige la grammaire uniquement, renvoie le texte corrigé", couvre le cas d\'usage central de Grammarly.',
          'Petits modèles : Qwen3.5 4B et Phi-4 Mini tiennent sur des machines de 8 Go ; Gemma 4 12B est le cran au-dessus pour les réécritures de style sur 16 Go.',
          'Remplacement de Notion AI : Obsidian + plugin Copilot (ou Smart Connections) pointé sur Ollama — Q&R sur les notes, rédaction de documents, expansion de contenu.',
          'Correction en temps réel : les LLM locaux ne soulignent pas les erreurs pendant la frappe dans Google Docs ou Gmail. Utilisez un raccourci clavier ou une barre latérale, ou un correcteur local à règles comme Harper pour des soulignements inline dans les éditeurs pris en charge.',
          'Confidentialité : Grammarly licencie vos contenus selon la section 7.2 de ses conditions ; Notion AI envoie les requêtes à des fournisseurs de modèles tiers. Un LLM local traite tout en local, sans transmission externe.',
          'Coût : Grammarly Pro démarre autour de 12 $/mois (facturation annuelle) ; Notion AI est inclus dans l\'offre Business (environ 20 $/utilisateur/mois). Un LLM local est gratuit une fois le matériel acquis.',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Ce que vous remplacez (et ce que vous ne remplacez pas)', anchor: '#what-you-replace' },
      { label: 'Remplacer Grammarly : grammaire et style', anchor: '#grammarly-replacement' },
      { label: 'Meilleurs petits LLM pour la correction locale', anchor: '#small-models-grammar' },
      { label: 'Google Docs, Gmail et vérification inline sans cloud', anchor: '#google-docs-inline' },
      { label: 'Remplacer Notion AI : documents et notes', anchor: '#notion-replacement' },
      { label: 'Notion et Ollama : ce qui se connecte, ce qui ne se connecte pas', anchor: '#notion-ollama' },
      { label: 'Options d\'intégration', anchor: '#integrations' },
      { label: 'Recommandations de modèles', anchor: '#models' },
      { label: 'Comparatif confidentialité', anchor: '#privacy' },
      { label: 'Comparatif des coûts', anchor: '#cost' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Pour aller plus loin', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Les LLM locaux remplacent la fonction centrale de Grammarly — grammaire, clarté, style de base — mais pas son intégration inline en temps réel.** Le flux passe de "les corrections apparaissent en tapant" à "sélectionner le texte → obtenir la version corrigée → recoller". Pour beaucoup d\'utilisateurs, ce compromis est acceptable en échange d\'une confidentialité totale.',
          '**Remplacer Notion AI est plus complet, mais cela implique de quitter l\'IA de Notion.** Notion ne documente aucun moyen de pointer Notion AI sur un modèle local. Obsidian avec le plugin Copilot (ou Smart Connections) pointé sur une instance Ollama locale égale la rédaction, l\'expansion de contenu et les Q&R sur les notes — avec tout le traitement en local. Rester dans Notion n\'est possible qu\'en exécutant vous-même l\'étape IA via l\'API Notion.',
          '**L\'argument confidentialité n\'est pas théorique.** Les conditions d\'utilisation de Grammarly (section 7.2) lui accordent une licence sur vos contenus pour exploiter, améliorer et développer ses services. Notion AI envoie les requêtes à des fournisseurs de modèles tiers ; Notion indique que, par défaut, ni lui ni ses fournisseurs n\'entraînent leurs modèles sur les données clients. Un LLM local traite le même texte sur votre matériel, sans transmission externe.',
          '**Les petits modèles suffisent pour la grammaire.** Qwen3.5 4B et Phi-4 Mini tiennent sur des machines de 8 Go ; Gemma 4 12B convient aux systèmes 16 Go et aux réécritures de style. Aucun benchmark publié ne les classe pour la correction grammaticale : testez deux modèles sur vos propres paragraphes avant de choisir.',
          '**Pour des soulignements inline, ajoutez un correcteur à règles.** Harper (local, anglais uniquement) et un serveur LanguageTool auto-hébergé soulignent les erreurs pendant la frappe dans les éditeurs pris en charge. Google Docs n\'est pas listé comme pris en charge par Harper ; le flux y reste donc sélectionner → réécrire → coller.',
          '**Le coût est un argument secondaire.** Grammarly Pro démarre autour de 12 $/mois en facturation annuelle ; Notion AI fait désormais partie de l\'offre Business (environ 20 $/utilisateur/mois) au lieu d\'être un add-on séparé. L\'équivalent LLM local est gratuit après le coût matériel unique.',
          '**La mise en place prend environ 20 minutes.** Installation d\'Ollama + téléchargement du modèle + configuration du plugin Obsidian : une configuration ponctuelle.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Coût Grammarly :** Free (100 requêtes IA/mois), Pro à partir d\'environ 12 $/mois en facturation annuelle (2 000 requêtes IA/mois), Enterprise sur devis.',
          '**Coût Notion AI :** inclus dans l\'offre Business (environ 20 $/utilisateur/mois, facturation annuelle) ; les offres Free et Plus n\'ont qu\'un essai.',
          '**Coût LLM local :** gratuit (modèles open source + Ollama) — uniquement l\'électricité.',
          '**Modèles pour démarrer :** Qwen3.5 4B (`qwen3.5:4b`) ou Phi-4 Mini (`phi4-mini`) sur 8 Go ; Gemma 4 12B (`gemma4:12b`) sur 16 Go ; Qwen3.8 27B (`qwen3.8:27b`) à partir de 24 Go.',
          '**Confidentialité Grammarly :** la section 7.2 des conditions d\'utilisation accorde une licence sur vos contenus pour exploiter, améliorer et développer les services de Grammarly.',
          '**Confidentialité Notion AI :** les requêtes vont à des fournisseurs de modèles tiers ; par défaut, ni Notion ni ses fournisseurs n\'entraînent leurs modèles sur les données clients.',
          '**Coût Obsidian :** gratuit en usage personnel et professionnel depuis février 2025.',
        ],
      },
      whatYouReplace: {
        id: 'what-you-replace',
        title: 'Ce que vous remplacez (et ce que vous ne remplacez pas)',
        content:
          '**Un LLM local couvre la majorité des usages courants de Grammarly et de Notion AI, mais la partie qu\'il ne couvre pas compte pour certains utilisateurs.** Connaître l\'écart avant de basculer évite les déceptions.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Un LLM local remplace la correction grammaticale, la réécriture stylistique et l\'ajustement de ton de Grammarly, ainsi que la rédaction et les Q&R sur les notes de Notion AI — mais pas l\'intégration inline en temps réel de Grammarly ni l\'intégration native de Notion AI dans son éditeur.',
          },
          {
            type: 'plain-terms',
            text: 'Grammarly observe ce que vous tapez dans votre navigateur ou sur votre bureau et affiche les corrections au fil de l\'écriture. Un LLM local ne peut pas le faire seul. Il peut en revanche corriger tout texte qu\'on lui confie — le flux devient donc : rédiger l\'e-mail, sélectionner le texte, l\'envoyer à votre app IA locale ou à un outil à raccourci, récupérer la version corrigée, la coller dans Gmail. Plus lent qu\'en inline, mais privé et gratuit.',
          },
        ],
        columns: ['Fonctionnalité', 'Grammarly', 'Équivalent LLM local', 'Écart'],
        rows: [
          { 'Fonctionnalité': 'Correction grammaticale', 'Grammarly': 'Inline, en temps réel', 'Équivalent LLM local': 'Par prompt, à la demande', 'Écart': 'Pas d\'inline temps réel ; flux copier-coller' },
          { 'Fonctionnalité': 'Suggestions stylistiques', 'Grammarly': 'Inline avec explications', 'Équivalent LLM local': 'Réécriture par prompt', 'Écart': 'Pas d\'explication par suggestion par défaut' },
          { 'Fonctionnalité': 'Détection de ton', 'Grammarly': 'Automatique, tons nommés', 'Équivalent LLM local': 'Ton cible indiqué dans le prompt', 'Écart': 'Nécessite une consigne de ton explicite' },
          { 'Fonctionnalité': 'Extension navigateur', 'Grammarly': 'Fonctionne dans Gmail, Google Docs, champs navigateur', 'Équivalent LLM local': 'Copier-coller, raccourci ou app latérale', 'Écart': 'Pas d\'intégration native au navigateur' },
          { 'Fonctionnalité': 'Notion AI : rédaction', 'Grammarly': 'Sans objet', 'Équivalent LLM local': 'Obsidian + plugin Copilot → Ollama', 'Écart': 'Pas intégré dans l\'UI de Notion ; app séparée' },
          { 'Fonctionnalité': 'Notion AI : Q&R sur les notes', 'Grammarly': 'Sans objet', 'Équivalent LLM local': 'Obsidian Smart Connections → Ollama', 'Écart': 'Coffre Obsidian requis ; pas de recherche dans Notion' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'L\'écart d\'intégration pèse surtout si vous écrivez dans Gmail, Google Docs ou d\'autres éditeurs basés navigateur où Grammarly affiche les corrections inline. Si vous écrivez surtout dans des apps de bureau (Word, Obsidian, VS Code, Scrivener), le copier-coller avec un LLM local est à peine plus lent que les suggestions inline. Évaluez votre environnement d\'écriture avant de décider.',
          },
        ],
      },
      grammarlyReplacement: {
        id: 'grammarly-replacement',
        title: 'Remplacer Grammarly : grammaire et style',
        content:
          '**Le flux de remplacement de Grammarly tient en quelques modèles de prompt et une app à raccourci clavier.** Un modèle pour la correction grammaticale seule ; un pour la réécriture stylistique complète ; un pour le ton. Sur un portable courant, un paragraphe revient en quelques secondes ; la vitesse dépend de la taille du modèle et du matériel.',
        promptExamples: [
          {
            label: 'Correction grammaticale seule (équivalent Grammarly de base)',
            text: 'Corrige la grammaire, l\'orthographe et la ponctuation du texte suivant. Renvoie uniquement le texte corrigé — pas d\'explication, pas de balisage, pas de résumé.\n\n[coller le texte]',
          },
          {
            label: 'Réécriture style et clarté (équivalent Grammarly Premium)',
            text: 'Réécris le texte suivant pour la clarté et un ton professionnel. Corrige la grammaire, supprime la voix passive, raccourcis les phrases longues et élimine les expressions superflues. Renvoie uniquement le texte réécrit.\n\nTon cible : [professionnel / familier / académique / persuasif]\nPublic cible : [grand public / technique / dirigeant]\n\n[coller le texte]',
          },
          {
            label: 'Prompt d\'ajustement de ton',
            text: 'Réécris l\'e-mail suivant de façon [plus formelle / plus décontractée / plus concise / plus diplomatique]. Conserve tout le contenu factuel à l\'identique. Renvoie uniquement l\'e-mail réécrit.\n\n[coller l\'e-mail]',
          },
          {
            label: 'Profil de style personnel (analysez votre propre écriture en local)',
            text: 'Voici trois échantillons de mon écriture. Décris mon style en 8 puces : longueur typique des phrases, niveau de vocabulaire, ton, constructions privilégiées, habitudes de ponctuation et ce que j\'évite. Rédige ensuite un system prompt de 100 mots qui amène un modèle éditeur à corriger un texte tout en conservant ce style.\n\nÉchantillon 1 : [coller]\nÉchantillon 2 : [coller]\nÉchantillon 3 : [coller]',
          },
        ],
        items: [
          '**System prompt pour les sessions d\'écriture :** définissez le system prompt de votre app IA locale comme "Tu es un éditeur professionnel. Renvoie uniquement le texte corrigé ou réécrit — pas de préambule, pas d\'explication, pas de commentaire." Cela évite que le modèle ajoute "Excellent texte ! Voici ma correction..." avant la sortie.',
          '**Intégration par raccourci clavier :** utilisez Raycast (macOS) ou AutoHotkey (Windows) pour créer un raccourci qui envoie le texte sélectionné à Ollama et colle le résultat. Le flux copier-coller se réduit à une seule frappe. Raycast indique dans son manuel que la prise en charge des modèles locaux relève de l\'offre Pro ; un script AutoHotkey appelant l\'API Ollama est gratuit.',
          '**Grammaire seule vs. réécriture stylistique :** utilisez des prompts distincts. La correction grammaticale seule est plus sûre pour les documents juridiques, techniques ou structurés où changer la formulation peut changer le sens. La réécriture stylistique convient aux e-mails, billets de blog et correspondance générale.',
          '**Pour l\'écriture académique :** ajoutez "Conserve toutes les citations, termes techniques et le vocabulaire spécialisé inchangés" au prompt de réécriture. Sans cette consigne, les modèles simplifient ou paraphrasent parfois la langue technique.',
          '**Pour les e-mails professionnels :** ajoutez "L\'expéditeur est [Nom], [Fonction] chez [Entreprise]. L\'e-mail doit refléter sa voix professionnelle sans détails de personnalisation dans la sortie." Cela ancre le registre dans le contexte professionnel de l\'expéditeur.',
          '**Analysez votre propre style en local :** le prompt de profil de style ci-dessus transforme trois échantillons d\'écriture en system prompt réutilisable. Comme les échantillons ne quittent jamais votre machine, vous pouvez l\'utiliser sur des brouillons privés, qu\'un assistant cloud devrait d\'abord recevoir.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Un flux rapide sur macOS : installez Ollama, récupérez un modèle comme Gemma 4 12B et créez une commande IA Raycast avec le prompt de correction grammaticale (les modèles locaux dans Raycast demandent un abonnement Pro). Sélectionnez du texte dans n\'importe quelle app, déclenchez le raccourci, et la version corrigée remplace la sélection. Sous Windows, un script AutoHotkey qui envoie la sélection à l\'API Ollama donne le même résultat sans abonnement.',
          },
        ],
      },
      smallModelsGrammar: {
        id: 'small-models-grammar',
        title: 'Meilleurs petits LLM pour la correction locale',
        content:
          '**Pour la correction grammaticale, commencez par Qwen3.5 4B sur les machines de 8 Go et Gemma 4 12B sur celles de 16 Go ; les deux suivent la consigne "renvoie uniquement le texte corrigé" et tournent sur des portables ordinaires.** Corriger la grammaire relève surtout du suivi d\'instructions : le modèle doit changer le moins possible et ne renvoyer que le texte corrigé.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Le meilleur petit LLM pour la correction grammaticale locale est le plus petit modèle suivant bien les instructions qui corrige vos erreurs sans reformuler ce qui était juste — Qwen3.5 4B, Phi-4 Mini et Gemma 4 12B sont des points de départ raisonnables, et aucun benchmark publié ne les classe pour la grammaire.',
          },
          {
            type: 'plain-terms',
            text: 'La correction grammaticale n\'exige pas un gros modèle. Elle exige un modèle qui obéit à "corrige uniquement les erreurs". Installez deux candidats, collez les mêmes cinq paragraphes dans les deux et gardez celui qui change le moins tout en repérant vos fautes. Ce test prend dix minutes et vous en apprend plus que n\'importe quel classement.',
          },
        ],
        columns: ['Modèle', 'Tag Ollama', 'Téléchargement', 'Mémoire requise', 'Idéal pour'],
        rows: [
          { 'Modèle': 'Phi-4 Mini', 'Tag Ollama': 'phi4-mini', 'Téléchargement': '~2,5 Go', 'Mémoire requise': '8 Go de RAM', 'Idéal pour': 'Corrections simples et rapides ; surtout l\'anglais' },
          { 'Modèle': 'Qwen3.5 4B', 'Tag Ollama': 'qwen3.5:4b', 'Téléchargement': '~3,3–4 Go', 'Mémoire requise': '8 Go de RAM', 'Idéal pour': 'Grammaire seule, courts e-mails, multilingue' },
          { 'Modèle': 'Gemma 4 E4B', 'Tag Ollama': 'gemma4:e4b', 'Téléchargement': '~6,6–9,5 Go', 'Mémoire requise': '16 Go de RAM', 'Idéal pour': 'Textes multilingues, retouches de style légères' },
          { 'Modèle': 'Gemma 4 12B', 'Tag Ollama': 'gemma4:12b', 'Téléchargement': '~7,7–8 Go', 'Mémoire requise': '16 Go de RAM', 'Idéal pour': 'Réécritures de style et ajustement de ton' },
          { 'Modèle': 'Qwen3.8 27B', 'Tag Ollama': 'qwen3.8:27b', 'Téléchargement': '~18 Go', 'Mémoire requise': '24 Go+ RAM/VRAM', 'Idéal pour': 'Réécritures longues et nuancées' },
        ],
        items: [
          '**Aucun benchmark spécifique à la grammaire ne classe ces modèles.** Les éditeurs publient des résultats généraux de suivi d\'instructions, pas de précision de correction grammaticale. Jugez sur votre propre texte.',
          '**Ce qu\'il faut vérifier pendant le test :** surcorrection (une formulation correcte a été modifiée), sens altéré (chiffres, noms, négations), variante d\'orthographe conservée (britannique ou américaine) et renvoi du seul texte par le modèle.',
          '**Langues :** Qwen3.5 et Gemma 4 sont multilingues ; Phi-4 Mini vise surtout l\'anglais. Pour un texte non anglais, testez d\'abord dans votre langue.',
          '**Restez déterministe :** une température basse (autour de 0,2) limite les reformulations créatives. Le Modelfile ci-dessous intègre les consignes d\'éditeur et la température dans un modèle réutilisable.',
          '**Longs documents :** les petits modèles dérivent sur les longues entrées. Corrigez section par section au lieu de coller un document entier.',
        ],
        codeBlock:
          'FROM qwen3.5:4b\nPARAMETER temperature 0.2\nSYSTEM """You are a copy editor. Fix grammar, spelling, and punctuation only. Keep the author\'s wording, meaning, and spelling variant. Return only the corrected text."""\n\n# then run:\n#   ollama create grammar-fix -f Modelfile\n#   ollama run grammar-fix',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Si un modèle affiche son raisonnement ou un préambule avant le texte corrigé, passez à une variante sans raisonnement ou à un autre modèle. Un outil de grammaire qui ajoute un commentaire à chaque réponse est plus lent qu\'une relecture à la main.',
          },
        ],
      },
      googleDocsInline: {
        id: 'google-docs-inline',
        title: 'Google Docs, Gmail et vérification inline sans cloud',
        content:
          '**Aucun des outils locaux examinés ici ne liste Google Docs comme éditeur pris en charge ; la configuration pratique pour Google Docs est donc un raccourci clavier ou une barre latérale pour les réécritures par LLM, plus un correcteur local à règles pour les soulignements inline là où il est pris en charge.** Un LLM et un correcteur à règles font deux métiers différents : le LLM réécrit sur demande, le correcteur souligne les fautes pendant la frappe.',
        columns: ['Outil', 'Type', 'Où ça marche', 'Limites'],
        rows: [
          { 'Outil': '[Harper](https://writewithharper.com)', 'Type': 'À règles, sur l\'appareil, sans LLM', 'Où ça marche': 'Chrome, Edge, Firefox, Obsidian, VS Code, app macOS', 'Limites': 'Anglais seul ; Google Docs non listé' },
          { 'Outil': '[LanguageTool](https://dev.languagetool.org/http-server) (auto-hébergé)', 'Type': 'Serveur à règles sur localhost', 'Où ça marche': 'Module navigateur, réglage "Serveur local"', 'Limites': 'Réglage expérimental ; serveur Java à lancer' },
          { 'Outil': '[Page Assist](/fr/local-llms/page-assist-review)', 'Type': 'Barre latérale de chat Ollama', 'Où ça marche': 'Barre latérale Chrome et Firefox', 'Limites': 'Par chat ; collage manuel du résultat' },
          { 'Outil': 'Raccourci + Ollama', 'Type': 'Réécriture LLM du texte sélectionné', 'Où ça marche': 'Toute app, y compris Google Docs', 'Limites': 'Raycast (Pro) ou un script AutoHotkey' },
        ],
        items: [
          '**Flux Google Docs :** activez le mode Suggestion dans Docs, sélectionnez un paragraphe, envoyez-le via votre raccourci ou votre barre latérale, puis collez le texte corrigé. Le mode Suggestion garde chaque modification vérifiable.',
          '**Gmail :** le site de Harper précise que Gmail n\'est pas pris en charge sauf si le correcteur grammatical intégré de Gmail est désactivé. Pour les brouillons d\'e-mails, utilisez le flux sélectionner-réécrire.',
          '**Meilleure combinaison :** un correcteur à règles pour les soulignements inline dans les éditeurs qu\'il prend en charge, plus un LLM local pour les réécritures, le ton et les synthèses. C\'est l\'équivalent local le plus proche du mélange soulignements + réécriture IA de Grammarly.',
          '**Auto-héberger LanguageTool :** téléchargez le serveur LanguageTool, lancez-le sur localhost, puis choisissez "Serveur local" dans les réglages expérimentaux du module navigateur. Le serveur n\'est accessible que depuis votre machine, sauf si vous le démarrez avec l\'option publique.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Les correcteurs à règles n\'exigent aucun GPU et n\'ajoutent aucune latence. Installez-en un d\'abord, puis ajoutez un LLM uniquement pour les tâches de réécriture qu\'un correcteur à règles ne sait pas faire.',
          },
        ],
      },
      notionReplacement: {
        id: 'notion-replacement',
        title: 'Remplacer Notion AI : documents et notes',
        content:
          '**Obsidian avec un backend Ollama local est l\'équivalent fonctionnel le plus proche de Notion AI pour les preneurs de notes et travailleurs du savoir.** Il ne reproduit pas la structure de bases de Notion, mais pour la rédaction de documents et les Q&R sur vos notes, la capacité est équivalente — avec tout le traitement en local.',
        image: '/images/replace-grammarly-notion-ai-with-local-notion-ai-setup-flow-en.svg',
        imageCaption: 'Configuration du remplacement de Notion AI dans Obsidian : installez Ollama et téléchargez un modèle, installez Obsidian, ajoutez le plugin Copilot pointant vers localhost:11434, ajoutez Smart Connections pour les questions-réponses sur tout le coffre, puis rédigez des documents et interrogez vos notes entièrement en local.',
        items: [
          '**Installer Obsidian** depuis [obsidian.md](https://obsidian.md). Gratuit en usage personnel et professionnel. Créez un coffre pour vos notes — c\'est le répertoire que les plugins IA indexeront.',
          '**Installer le plugin Copilot** (Plugins communautaires → rechercher "Copilot" ; voir le [test de Copilot for Obsidian](/fr/power-local-llm/copilot-for-obsidian-review)). Dans les paramètres du plugin, sélectionnez "Ollama" comme fournisseur LLM, indiquez `http://localhost:11434` comme URL de base et choisissez votre modèle. Copilot ajoute une barre latérale de chat dans Obsidian où vous pouvez poser des questions et générer du contenu dans le contexte de la note courante.',
          '**Installer le plugin Smart Connections** pour les Q&R sur tout le coffre. Smart Connections indexe vos notes en embeddings avec un modèle d\'embedding local et permet de poser des questions qui récupèrent les notes pertinentes avant l\'envoi au LLM. C\'est le remplacement direct du "interroge mes notes" de Notion AI.',
          '**Rédaction de documents :** dans le chat Copilot, tapez "Rédige un [type de document] sur [sujet] à partir de ces notes : [coller les points clés]". Le plugin inclut le contexte de la note courante automatiquement. La sortie apparaît dans le chat ; copiez-la dans la note.',
          '**Expansion de contenu :** sélectionnez un plan en puces dans la note, ouvrez la palette de commandes Copilot et utilisez "Étendre la sélection" — le modèle convertit le plan en prose dans le registre d\'écriture de la note.',
          '**Génération de revue hebdomadaire :** "Résume mes notes de la semaine au format revue hebdomadaire : succès, blocages, prochaines actions." Smart Connections récupère les notes des 7 derniers jours et les transmet automatiquement au LLM.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obsidian avec le plugin Copilot ou Smart Connections pointé sur une instance Ollama locale remplace Notion AI pour la rédaction, l\'expansion de contenu et les Q&R sur les notes — avec un traitement entièrement local et sans transmission de contenu à un serveur externe.',
          },
          {
            type: 'plain-terms',
            text: 'La mise en place : installer Obsidian, installer Ollama, récupérer un modèle, installer le plugin communautaire Copilot dans Obsidian, le pointer sur localhost:11434. C\'est le remplacement des fonctions IA de Notion AI. Vos notes restent dans le dossier du coffre (fichiers Markdown bruts, totalement portables). Le chat IA tourne sur votre machine. Rien ne quitte votre ordinateur.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Obsidian stocke les notes en fichiers Markdown dans un dossier que vous contrôlez. Contrairement au format de base propriétaire de Notion, vos notes sont lisibles dans n\'importe quel éditeur de texte et exportables à tout moment. C\'est un avantage secondaire de confidentialité et de portabilité face à Notion — votre base de connaissances n\'est pas verrouillée dans une plateforme cloud.',
          },
        ],
      },
      notionOllama: {
        id: 'notion-ollama',
        title: 'Notion et Ollama : ce qui se connecte, ce qui ne se connecte pas',
        content:
          '**Notion ne documente aucun moyen de pointer Notion AI sur un modèle local ; "Notion + Ollama" signifie donc exécuter l\'étape IA en dehors de Notion ou sortir vos notes de Notion.** Les pages de tarifs et de sécurité publiées par Notion décrivent une IA qui s\'exécute chez des fournisseurs de modèles choisis par Notion, sans réglage pour votre propre point d\'accès. Notion est en outre un espace de travail cloud, pas une base de données locale — il n\'existe pas de base Notion locale à laquelle rattacher un modèle.',
        items: [
          '**Option 1 — script via l\'API Notion :** un petit script lit une page via l\'API Notion, envoie le texte à Ollama sur `localhost:11434` et réécrit le résultat sous forme de nouveau bloc. L\'étape modèle est locale ; la page elle-même reste sur les serveurs de Notion, seul le fournisseur d\'IA est donc supprimé.',
          '**Option 2 — Notion MCP :** Notion héberge un serveur MCP (connexion OAuth) que les clients MCP utilisent pour lire et modifier des pages. Notion cite Claude Code, Cursor et Codex comme clients d\'exemple ; savoir si un client donné peut piloter un modèle local dépend de ce client.',
          '**Option 3 — déplacer les notes riches en IA vers une app local-first :** Obsidian (fichiers Markdown bruts) avec Copilot, comme ci-dessus, ou [AppFlowy](https://appflowy.com), un espace de travail open source (AGPL-3.0) façon Notion avec un mode hors ligne et des options d\'IA locale selon sa page de comparaison. Consultez la documentation d\'AppFlowy pour la configuration exacte du modèle local.',
          '**Ce qu\'un modèle local ne change pas :** le contenu déjà dans Notion est stocké par Notion. Exécuter un modèle local dessus supprime l\'étape du fournisseur d\'IA, pas le stockage chez Notion.',
          '**Ce que Notion dit de sa propre IA :** par défaut, ni Notion ni ses fournisseurs d\'IA n\'utilisent les données clients pour entraîner des modèles ; en Enterprise, la plupart des modèles offrent une rétention zéro des données, tandis que pour les autres offres les fournisseurs conservent les données jusqu\'à 30 jours.',
        ],
        codeBlock:
          'import requests\n\nNOTION = {"Authorization": "Bearer <NOTION_TOKEN>", "Notion-Version": "2022-06-28"}\nPAGE_ID = "<page-id>"\n\n# 1. read the page text through the Notion API\nblocks = requests.get(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION).json()["results"]\ntext = "\\n".join(\n    "".join(t["plain_text"] for t in b["paragraph"]["rich_text"])\n    for b in blocks if b["type"] == "paragraph"\n)\n\n# 2. rewrite it with a local model (Ollama on localhost)\nr = requests.post("http://localhost:11434/api/generate", json={\n    "model": "gemma4:12b", "stream": False,\n    "prompt": "Correct the grammar of this text. Return only the corrected text.\\n\\n" + text,\n})\nfixed = r.json()["response"]\n\n# 3. append the result as a new paragraph block\nrequests.patch(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION, json={\n    "children": [{"object": "block", "type": "paragraph",\n                  "paragraph": {"rich_text": [{"type": "text", "text": {"content": fixed[:2000]}}]}}]\n})',
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'Le script n\'envoie votre jeton Notion et le contenu de la page qu\'à Notion et à localhost. Gardez le jeton hors des fichiers partagés, et notez que les blocs de texte enrichi de Notion acceptent environ 2 000 caractères chacun : les sorties longues doivent donc être réparties sur plusieurs blocs.',
          },
        ],
      },
      integrations: {
        id: 'integrations',
        title: 'Options d\'intégration',
        content:
          '**Quatre niveaux d\'intégration : basique (copier-coller), intermédiaire (app à raccourci ou app d\'écriture), inline (correcteur à règles) et avancé (extension navigateur sur mesure).** Commencez au niveau qui correspond à votre confort technique.',
        columns: ['Niveau d\'intégration', 'Comment', 'Apps', 'Idéal pour'],
        rows: [
          { 'Niveau d\'intégration': 'Basique (copier-coller)', 'Comment': 'Ouvrir l\'app IA locale, coller, copier le résultat', 'Apps': 'Chat LM Studio, Ollama CLI, Open WebUI', 'Idéal pour': 'Corrections occasionnelles ; tout OS' },
          { 'Niveau d\'intégration': 'Intermédiaire (raccourci)', 'Comment': 'Sélection → raccourci → le texte corrigé la remplace', 'Apps': 'Raycast AI (macOS, Pro), AutoHotkey + Ollama (Windows)', 'Idéal pour': 'Corrections fréquentes, toute app ; peu de changement' },
          { 'Niveau d\'intégration': 'Intermédiaire (app d\'écriture)', 'Comment': 'Assistant IA intégré à l\'outil d\'écriture', 'Apps': 'Obsidian + plugin Copilot, VS Code + Continue.dev', 'Idéal pour': 'Rédacteurs et développeurs vivant dans ces apps' },
          { 'Niveau d\'intégration': 'Inline (à règles)', 'Comment': 'Un correcteur local souligne les fautes en tapant', 'Apps': 'Harper, LanguageTool auto-hébergé', 'Idéal pour': 'Retour en cours de frappe, sans GPU' },
          { 'Niveau d\'intégration': 'Avancé (extension navigateur)', 'Comment': 'Extension qui envoie la sélection à l\'API Ollama locale', 'Apps': 'Extension Chrome/Firefox (modèles open source sur GitHub)', 'Idéal pour': 'Utilisateurs avancés voulant une intégration à la Grammarly' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Sur macOS, Raycast avec une commande IA personnalisée est une intégration intermédiaire rapide si vous avez l\'offre Pro : créez une commande IA avec le prompt de correction grammaticale, attribuez un raccourci, sélectionnez du texte dans n\'importe quelle app, appuyez sur le raccourci, et le texte corrigé remplace la sélection. Sans Pro, utilisez Ollama en ligne de commande ou un client de chat comme Open WebUI.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'Recommandations de modèles pour l\'écriture',
        content:
          '**L\'assistance à l\'écriture privilégie les modèles avec un bon suivi d\'instructions et une prose cohérente.** Le classement diffère de celui des modèles pour le code ou les maths. Les choix ci-dessous sont des points de départ retenus selon la taille et le suivi d\'instructions, pas des résultats de benchmarks de grammaire.',
        columns: ['Tâche', 'Meilleur modèle', 'Option (moins de VRAM)', 'Pourquoi'],
        rows: [
          { 'Tâche': 'Correction grammaticale', 'Meilleur modèle': 'Gemma 4 12B', 'Option (moins de VRAM)': 'Qwen3.5 4B / Phi-4 Mini', 'Pourquoi': 'Suit "corrige les erreurs, renvoie le texte"' },
          { 'Tâche': 'Réécriture stylistique', 'Meilleur modèle': 'Gemma 4 12B ou Qwen3.8 27B', 'Option (moins de VRAM)': 'Qwen3.5 4B', 'Pourquoi': 'Plus de marge pour formulation et registre' },
          { 'Tâche': 'Ajustement de ton', 'Meilleur modèle': 'Qwen3.8 27B', 'Option (moins de VRAM)': 'Gemma 4 12B', 'Pourquoi': 'Les grands modèles gardent souvent mieux les faits' },
          { 'Tâche': 'Rédaction (remplacement de Notion AI)', 'Meilleur modèle': 'Gemma 4 12B', 'Option (moins de VRAM)': 'Qwen3.5 4B', 'Pourquoi': 'Suit les consignes de format de document' },
          { 'Tâche': 'Synthèse / Q&R sur notes', 'Meilleur modèle': 'Gemma 4 12B', 'Option (moins de VRAM)': 'Qwen3.5 4B / Phi-4 Mini', 'Pourquoi': 'La synthèse marche bien en petite taille' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Ajoutez une consigne "pas de tournures à l\'IA" dans votre system prompt. Les modèles produisent par défaut un registre IA prudent ("Bien sûr ! Voici la version corrigée..."). Un system prompt "Renvoie uniquement le texte corrigé, pas de préambule, pas de commentaire" élimine cela. Pour les réécritures stylistiques, ajoutez : "N\'utilise pas les expressions \'plonger dans\', \'tapisserie\', \'favoriser\', \'le domaine de\' ou \'il convient de noter\'."',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Comparatif confidentialité',
        content:
          '**La différence de confidentialité entre les assistants d\'écriture cloud et les LLM locaux est structurelle.** Les services cloud ne peuvent pas traiter votre texte sans le recevoir ; les LLM locaux ne peuvent pas l\'envoyer ailleurs sans une connexion sortante explicite.',
        image: '/images/replace-grammarly-notion-ai-with-local-cost-privacy-overview-en.svg',
        imageCaption: 'Outils d\'écriture cloud contre LLM local : Grammarly et Notion AI fonctionnent comme 2 abonnements payants distincts et envoient le texte à des serveurs cloud, tandis qu\'Ollama et Obsidian conservent toute l\'écriture et les notes sur l\'appareil, sans coût logiciel récurrent.',
        items: [
          '**Licence de données Grammarly :** selon la section 7.2 des [conditions d\'utilisation de Grammarly](https://www.grammarly.com/terms), vous restez propriétaire de vos contenus mais accordez à Grammarly une licence mondiale, non exclusive et libre de redevance pour les utiliser à des fins déterminées, notamment exploiter, fournir et améliorer ses services et développer de nouveaux produits ou fonctionnalités. Les conditions indiquent aussi qu\'accepter ou rejeter des suggestions peut contribuer à entraîner son moteur de suggestions. Grammarly affirme que ses partenaires LLM n\'ont pas le droit d\'utiliser les données clients pour entraîner leurs modèles.',
          '**Flux de données Notion AI :** Notion achemine les requêtes d\'IA vers un ensemble de fournisseurs de modèles (la liste actuelle figure sur sa page des sous-traitants). Notion indique que, par défaut, ni lui ni ses fournisseurs d\'IA n\'utilisent les données clients pour entraîner des modèles. L\'offre Enterprise prévoit une rétention zéro des données chez les fournisseurs de LLM ; pour les autres offres, les fournisseurs conservent les données jusqu\'à 30 jours.',
          '**Flux de données LLM local :** aucune transmission externe. Ollama écoute sur localhost par défaut et l\'inférence n\'établit aucune connexion sortante. Les poids du modèle sont des fichiers statiques sur disque ; votre texte est traité en mémoire.',
          '**RGPD et secret professionnel :** les professionnels du droit, de la santé et toute personne soumise à des obligations de confidentialité devraient vérifier les protections contractuelles avant d\'utiliser Grammarly ou Notion AI pour des contenus liés à des clients. Un LLM local écarte la question du sous-traitant tiers, puisqu\'aucune donnée ne quitte la machine.',
          '**Télémétrie :** les outils cloud collectent des données d\'usage et d\'interaction en plus du texte lui-même. Les apps locales diffèrent — vérifiez les réglages de télémétrie de chacune et, si vous avez besoin d\'une assurance de niveau audit, surveillez vous-même le trafic sortant.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Si vous utilisez Grammarly pour la correspondance professionnelle, des projets de contrats ou tout contenu soumis à des obligations de confidentialité, vérifiez la politique de données de votre organisation et les conditions de données entreprise en vigueur avant de présumer que le contenu est protégé.',
          },
        ],
      },
      cost: {
        id: 'cost',
        title: 'Comparatif des coûts',
        content:
          '**Remplacer les deux outils supprime l\'abonnement Grammarly et la part IA de l\'offre Notion.** La mise en place du LLM local est gratuite côté logiciel ; le seul coût récurrent est l\'électricité.',
        columns: ['Outil', 'Mensuel', 'Annuel', 'Notes'],
        rows: [
          { 'Outil': '[Grammarly Free](https://www.grammarly.com/plans)', 'Mensuel': '$0', 'Annuel': '$0', 'Notes': '100 requêtes IA/mois ; vérifications de base' },
          { 'Outil': '[Grammarly Pro](https://www.grammarly.com/plans)', 'Mensuel': 'dès ~$12/mois', 'Annuel': 'dès ~$144/an', 'Notes': '2 000 requêtes IA/mois ; plus cher au mois' },
          { 'Outil': '[Notion AI](https://www.notion.com/pricing)', 'Mensuel': 'dans Business (~$20/util.)', 'Annuel': '~$240/util./an', 'Notes': 'Free et Plus : essai seul ; pas d\'add-on séparé' },
          { 'Outil': '[Ollama (LLM local)](https://ollama.com)', 'Mensuel': '$0', 'Annuel': '$0', 'Notes': 'Gratuit et open source ; électricité seule' },
          { 'Outil': '[Obsidian (remplacement Notion)](https://obsidian.md)', 'Mensuel': '$0', 'Annuel': '$0', 'Notes': 'Gratuit en usage personnel et professionnel' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Si vous hésitez, basculez d\'abord la seule correction grammaticale sur un modèle local pendant 30 jours. Gardez Grammarly actif pour l\'intégration navigateur. Évaluez si la qualité de correction locale et le flux copier-coller vous conviennent. Ensuite seulement, décidez de résilier Grammarly. Le passage de Notion AI est moins frictionnel si vous acceptez Obsidian comme couche de prise de notes.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes',
        items: [
          '**Pas de system prompt pour le format de sortie.** Sans system prompt, les modèles préfixent leurs corrections par "Bien sûr ! Voici le texte corrigé :", ajoutent des explications et utilisent un registre IA. Définissez toujours un system prompt qui précise "renvoie uniquement le texte corrigé".',
          '**Utiliser le plus petit modèle pour des réécritures stylistiques complexes.** Les petits modèles gèrent bien la grammaire mais tendent à produire des réécritures plus formulaires. Pour un travail axé style, passez à Gemma 4 12B ou plus grand.',
          '**Attendre d\'Obsidian l\'équivalence avec l\'UI de Notion.** Obsidian est un éditeur Markdown, pas une base de données. Si votre flux Notion repose sur des bases, des vues et des relations, Obsidian n\'est pas un remplacement complet — seules les fonctions IA sont transférées. Évaluez si les fonctionnalités de base sont critiques avant de basculer.',
          '**Pas de plafond de mots sur les réécritures stylistiques.** Sans plafond, le modèle gonfle la réécriture. Ajoutez "Maintiens le texte réécrit à moins de 10 % d\'écart par rapport au nombre de mots d\'origine" à tout prompt de réécriture.',
          '**Envoyer des documents complets à un petit modèle.** Les petits modèles dérivent sur les longues entrées. Pour les longs documents, découpez par sections et corrigez chacune indépendamment.',
          '**Attendre d\'un LLM des soulignements inline.** Un LLM répond quand on le sollicite ; il ne surveille pas votre frappe. Pour des soulignements en tapant, ajoutez un correcteur local à règles comme Harper.',
          '**Croire que Notion AI peut utiliser un modèle local.** Notion ne documente pas cette prise en charge ; utilisez l\'API Notion avec Ollama, ou déplacez les notes riches en IA vers une app local-first.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Conditions d\'utilisation de Grammarly — section 7.2 (licence sur les contenus utilisateur) — [grammarly.com/terms](https://www.grammarly.com/terms)',
          'Offres Grammarly — [grammarly.com/plans](https://www.grammarly.com/plans)',
          'IA responsable de Grammarly (usage des données par les partenaires) — [grammarly.com/responsible-ai](https://www.grammarly.com/responsible-ai)',
          'Tarifs Notion et accès à l\'IA selon l\'offre — [notion.com/pricing](https://www.notion.com/pricing)',
          'Pratiques de sécurité de Notion AI (fournisseurs, entraînement, rétention) — [notion.com/help/notion-ai-security-practices](https://www.notion.com/help/notion-ai-security-practices)',
          'Documentation Notion MCP — [developers.notion.com/docs/mcp](https://developers.notion.com/docs/mcp)',
          'Obsidian gratuit pour le travail (février 2025) — [obsidian.md/blog/free-for-work](https://obsidian.md/blog/free-for-work/)',
          'Correcteur grammatical Harper — [writewithharper.com](https://writewithharper.com)',
          'Serveur HTTP LanguageTool (auto-hébergement) — [dev.languagetool.org/http-server](https://dev.languagetool.org/http-server)',
          'Modèles locaux dans Raycast — [manual.raycast.com/ai/local-models](https://manual.raycast.com/ai/local-models)',
          'Bibliothèque de modèles Ollama — [ollama.com/library/gemma4](https://ollama.com/library/gemma4), [ollama.com/library/qwen3.5](https://ollama.com/library/qwen3.5), [ollama.com/library/qwen3.8](https://ollama.com/library/qwen3.8)',
          'Documentation du plugin Obsidian Copilot — [GitHub : logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot)',
          'Plugin Obsidian Smart Connections — [GitHub : brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Quels petits LLM donnent une bonne correction grammaticale en local ?',
            a: 'Qwen3.5 4B (`qwen3.5:4b`, environ 3 à 4 Go) et Phi-4 Mini (`phi4-mini`) tiennent sur des machines de 8 Go ; Gemma 4 12B (`gemma4:12b`) convient aux systèmes 16 Go et aux réécritures de style ; Qwen3.8 27B convient à partir de 24 Go. Aucun benchmark publié ne les classe pour la correction grammaticale : testez-en deux sur cinq de vos propres paragraphes et gardez celui qui change le moins tout en repérant vos erreurs. Utilisez un system prompt "corrige uniquement les erreurs, renvoie uniquement le texte corrigé" et une température basse.',
          },
          {
            q: 'Existe-t-il une alternative locale à Grammarly qui fonctionne dans Google Docs ?',
            a: 'Pas en remplacement direct. Aucun des outils locaux présentés ici ne liste Google Docs comme éditeur pris en charge. La configuration qui fonctionne est sélectionner → réécrire → coller : sélectionnez le texte dans Docs (mode Suggestion activé), envoyez-le via un outil à raccourci ou une barre latérale du navigateur à un modèle local, puis collez le résultat. Pour des soulignements inline ailleurs, Harper (anglais uniquement, sur l\'appareil, extensions pour Chrome, Edge et Firefox) et un serveur LanguageTool auto-hébergé sont les options locales.',
          },
          {
            q: 'Comment utiliser Ollama avec Notion ?',
            a: 'Notion ne documente aucun moyen de pointer Notion AI sur un modèle local. Pour utiliser Ollama avec du contenu Notion, écrivez un petit script qui lit une page via l\'API Notion, envoie le texte à Ollama sur localhost:11434 et réécrit le résultat (voir l\'exemple ci-dessus). L\'étape modèle est locale ; la page reste sur les serveurs de Notion. Pour une configuration entièrement locale, déplacez les notes riches en IA vers Obsidian avec le plugin Copilot ou vers une app local-first comme AppFlowy.',
          },
          {
            q: 'Puis-je connecter un LLM local à une base Notion locale ?',
            a: 'Notion n\'a pas de base de données locale : les espaces de travail vivent sur les serveurs de Notion et s\'atteignent via son API. Vous pouvez exécuter le modèle en local et échanger du texte avec Notion via l\'API, ou choisir un espace de travail local-first. Obsidian stocke les notes en fichiers Markdown sur disque ; AppFlowy est une app open source façon Notion avec un mode hors ligne.',
          },
          {
            q: 'Un LLM local peut-il analyser mon style d\'écriture personnel ?',
            a: 'Oui. Collez trois échantillons de votre écriture dans un modèle local avec le prompt de profil de style de ce guide : il renvoie une description en puces de la longueur de vos phrases, de votre ton, de votre vocabulaire et de vos habitudes, plus un court system prompt réutilisable pour qu\'un modèle éditeur garde votre voix. Comme les échantillons ne quittent jamais votre machine, c\'est sûr pour des brouillons privés.',
          },
          {
            q: 'Quelle est la différence entre Notion AI et Grammarly ?',
            a: 'Ils se situent à des endroits différents. Notion AI fonctionne dans Notion : rédaction, synthèse et réponses aux questions sur votre espace de travail. Grammarly vérifie l\'écriture dans les apps et les champs de texte du navigateur et propose des réécritures. Ils se recoupent sur la réécriture et le ton, mais aucun ne remplace l\'autre, et un LLM local plus une app de notes peut remplacer les deux pour la plupart des tâches.',
          },
          {
            q: 'Grammarly fonctionne-t-il dans Notion et Obsidian ?',
            a: 'L\'extension navigateur de Grammarly vérifie les champs de texte des éditeurs web, ce qui inclut Notion sur le web. Les apps de bureau comme Obsidian sortent du champ d\'une extension navigateur. Pour Obsidian, un correcteur local comme Harper (qui a un plugin Obsidian) ou le plugin Copilot avec Ollama couvre le même terrain sans envoyer de texte à un service cloud.',
          },
          {
            q: 'Un LLM local est-il aussi bon que Grammarly pour la correction grammaticale ?',
            a: 'Pour les erreurs courantes de grammaire, de ponctuation et d\'orthographe, un modèle local bien prompté gère les mêmes corrections ; testez-le sur votre propre texte pour le confirmer. Là où Grammarly garde un avantage : les corrections inline en temps réel et l\'extension navigateur qui fonctionne dans Gmail, Google Docs et d\'autres applications web. Un LLM local impose un flux sélectionner-coller pour le texte des champs de navigateur.',
          },
          {
            q: 'Puis-je utiliser Obsidian comme remplacement complet de Notion ?',
            a: 'Obsidian remplace bien les fonctions de prise de notes et de base de connaissances de Notion. Il ne remplace pas les bases de données, la gestion de projets et les données relationnelles de Notion. Si votre usage de Notion est principalement les notes, documents et wikis — Obsidian est un remplacement complet. Si vous dépendez des bases Notion, des vues kanban ou des propriétés relationnelles — il faut des outils complémentaires (Anytype, AppFlowy ou Notion lui-même pour la couche base, Obsidian pour la rédaction).',
          },
          {
            q: 'Quel modèle local se rapproche le plus des suggestions de Grammarly ?',
            a: 'Aucun modèle local ne reproduit le moteur de suggestions de Grammarly, et aucun benchmark ne classe les modèles sur ce point. En pratique, Gemma 4 12B et Qwen3.8 27B laissent le plus de marge pour les réécritures de style et de ton lorsqu\'on leur demande de garder la voix d\'origine, tandis que Qwen3.5 4B et Phi-4 Mini suffisent pour les corrections de grammaire seules. Associez-les à un correcteur à règles comme Harper si vous voulez des soulignements en tapant.',
          },
          {
            q: 'Le plugin Obsidian Copilot envoie-t-il mes notes dans le cloud ?',
            a: 'Non, lorsqu\'il est configuré pour utiliser une instance Ollama locale. Le plugin prend en charge les LLM cloud (OpenAI, Anthropic) et Ollama local. Quand vous sélectionnez Ollama comme fournisseur LLM et indiquez l\'URL localhost, tout le traitement IA est local. Aucun contenu de note n\'est transmis à l\'extérieur. Vous pouvez le confirmer en surveillant le trafic réseau avec Little Snitch (macOS) ou Wireshark si vous avez besoin d\'une vérification de niveau audit.',
          },
          {
            q: 'Puis-je utiliser un LLM local dans Google Docs ou Gmail ?',
            a: 'Pas directement — il n\'existe pas d\'extension navigateur LLM locale équivalente à Grammarly qui s\'intègre nativement aux champs de texte. Les contournements : (1) sélectionner le texte dans Google Docs, copier, coller dans l\'app IA locale, copier la version corrigée, recoller ; (2) un outil à raccourci qui traite la sélection et la remplace (Raycast avec modèles locaux demande l\'offre Pro ; un script AutoHotkey appelant l\'API Ollama est gratuit) ; (3) une extension Chrome sur mesure qui lit la sélection et appelle l\'API Ollama locale (modèles open source sur GitHub). Aucune n\'égale l\'expérience inline fluide de Grammarly.',
          },
          {
            q: 'Cette configuration est-elle conforme HIPAA ou RGPD pour un usage professionnel ?',
            a: 'Un LLM local qui traite les données exclusivement sur votre machine sans transmission externe répond à la préoccupation centrale de transfert de données pour HIPAA comme pour le RGPD. La conformité dépend néanmoins de l\'ensemble de la pile technologique, des contrôles de sécurité et des exigences réglementaires propres. Un LLM local n\'est pas automatiquement conforme — il faut évaluer la sécurité du poste, la protection physique et les contrôles d\'accès. Pour une conformité formelle, consultez votre responsable conformité. Le traitement local écarte le sujet du "sous-traitant tiers" mais ne remplace pas un programme de conformité complet.',
          },
          {
            q: 'Quel est le meilleur assistant d\'écriture local pour les articles académiques ?',
            a: 'Un modèle local de taille moyenne (par exemple Gemma 4 12B) avec un system prompt qui précise "Corrige uniquement la grammaire et la ponctuation — ne change ni le vocabulaire, ni la structure des phrases, ni le contenu. Conserve toutes les citations, termes techniques et la langue spécialisée inchangés." Cela correspond à un mode grammaire seule, un réglage à moindre risque pour l\'écriture académique où changer la formulation peut altérer le sens ou paraître modifier un contenu cité.',
          },
          {
            q: 'Puis-je remplacer la synthèse de notes de réunion de Notion AI en local ?',
            a: 'Oui. Exportez les notes de réunion en fichier texte ou Markdown (ou collez directement la transcription). Utilisez le prompt : "Synthétise ces notes de réunion en : (1) décisions prises, (2) actions avec responsables, (3) questions ouvertes. Liste à puces par section. Maximum 300 mots." Un petit modèle qui suit bien les instructions gère les synthèses de réunion. Pour les réunions récurrentes, créez un modèle de prompt enregistré dans votre app IA locale.',
          },
          {
            q: 'Quel LLM Grammarly utilise-t-il ? Grammarly est-il un LLM ?',
            a: 'Grammarly est un produit d\'écriture, pas un modèle unique. Grammarly ne nomme pas ses modèles sous-jacents sur les pages que nous avons consultées (offres, conditions et sa page d\'IA responsable). Cette page indique que les informations servant à alimenter ses fonctions d\'IA générative sont partagées avec des partenaires LLM et que ces partenaires n\'ont pas le droit d\'utiliser les données clients pour entraîner leurs modèles. Notion AI fonctionne de façon comparable : il s\'appuie sur un ensemble de fournisseurs listés sur sa page des sous-traitants. Des chercheurs ont aussi publié des modèles ouverts d\'édition de texte sous l\'organisation grammarly sur Hugging Face (CoEdIT, de 770M à 11B de paramètres) : ce sont des modèles de recherche, pas le produit lui-même. Ce qui compte pour la confidentialité, c\'est le traitement des données : le texte envoyé à l\'un ou l\'autre produit est traité sur les serveurs de l\'éditeur. Un LLM local évite cela — le texte ne quitte jamais votre machine.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[LLM local avec Obsidian](/fr/power-local-llm/local-llm-with-obsidian-2026) — configuration complète Obsidian + Ollama pour la prise de notes et les Q&R sur votre coffre.',
          '[Test de Copilot for Obsidian](/fr/power-local-llm/copilot-for-obsidian-review) — le plugin Copilot utilisé dans le flux de remplacement de Notion AI.',
          '[Plugins IA Obsidian et Logseq comparés](/fr/power-local-llm/obsidian-logseq-ai-plugins) — options de plugins pour l\'IA locale dans les apps de prise de notes.',
          '[Petits modèles LLM locaux](/fr/local-llms/small-local-llm-models) — modèles récents pour machines de 4 à 8 Go, utiles pour la correction grammaticale locale.',
          '[LLM local pour l\'automatisation des e-mails et du calendrier](/fr/power-local-llm/local-llm-email-and-calendar-automation) — automatisation de la rédaction d\'e-mails et de la gestion d\'agenda avec des LLM locaux, en complément de l\'assistant d\'écriture.',
          '[Prompts LLM locaux pour les auteurs de fiction](/fr/power-local-llm/local-llm-prompts-for-fiction-writers) — modèles de prompt pour l\'écriture créative au-delà de la correction, scènes et développement de personnages.',
          '[Remplacer Zapier par des agents IA locaux](/fr/power-local-llm/replace-zapier-with-local-ai-agents) — automatisation locale des flux qui relie l\'écriture aux autres processus métier.',
          '[RAG local pour les données métier confidentielles](/fr/power-local-llm/local-rag-for-private-business-data) — Q&R sur documents métier confidentiels, extension du Q&R sur notes à de plus grandes bibliothèques.',
          '[App IA locale la plus simple pour Windows, Mac et Linux](/fr/power-local-llm/easiest-local-ai-app-windows-mac-linux) — si vous devez d\'abord installer une première app IA locale avant de mettre en place l\'assistant d\'écriture.',
          '[Agents IA locaux pour les flux métier : conformité UE](/fr/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — contexte RGPD et AI Act pour déployer des assistants IA locaux dans les organisations européennes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/replace-grammarly-notion-ai-with-local-overview-hero-ja.webp',
    title: 'GrammarlyとNotion AIをローカルLLMで置き換える（2026）',
    seoTitle: 'ローカルGrammarly代替：文法修正向け小型LLM（2026）',
    intro:
      'GrammarlyとNotion AIは、文章をクラウドサーバーで処理します。メールの下書き、社外秘の文書、個人のメモが、設計上、第三者のシステムを通過します。OllamaやLM Studioで動かすローカルLLMは、ほとんどの執筆タスクで両者を置き換えられます。文法・スタイル修正、文書ドラフト、要約、AIを使ったメモ取りまで、テキストがマシンの外に出ることはありません。このガイドでは、文法修正に向く小型モデル、Google DocsとNotionで使える方法、そしてGrammarlyとの差が残る部分を解説します。',
    metaDescription:
      'Grammarlyのローカル代替：文法修正に向く小型LLM、Google DocsとNotionで使える方法、テキストを端末内に留めるOllama設定を解説します。',
    twitterDescription:
      'GrammarlyとNotion AIをローカルLLMで置き換え：文法修正向けの小型モデル、Google DocsとNotionの選択肢、Ollamaの設定。テキストはマシンから出ません。',
    current_models_mentioned: [
      'Qwen3.5 4B',
      'Gemma 4 E4B',
      'Gemma 4 12B',
      'Qwen3.8 27B',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M3 MacBook Air 8 GB',
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 3060 12 GB',
    ],
    audience:
      'Grammarlyを文章修正に、Notion AIを文書アシスタントに使っているナレッジワーカー、ライター、学生、プライバシー重視のプロフェッショナルで、内容を秘匿しつつ両者をローカルAIで置き換えたい方向け。',
    readTime: '13分で読める',
    educationalLevel: 'Beginner',
    primaryTerm: 'Grammarly ローカルLLM 置き換え',
    targetKeywords: [
      'Grammarly ローカルLLM 置き換え',
      'Grammarly ローカル 代替',
      '文法修正 LLM おすすめ',
      '文法修正 小型LLM',
      'Notion AI ローカル 代替',
      'Notion Ollama',
      'ローカルLLM ライティング',
      'Grammarly 代替 クラウドなし',
      'Notion AI 代替 プライバシー',
      'Ollama 文章修正',
    ],
    leadAnswerBlock:
      '**Ollamaで動かすローカルLLMは、GrammarlyとNotion AIの中核機能を、テキストをクラウドに送らずに置き換えます。Grammarlyの代替には、プロンプトテンプレート（「次の段落の文法を修正し、文体を改善してください。修正後の本文のみを返してください。」）をQwen3.5 4B以上のモデルに送るだけです。Notion AIの代替には、CopilotプラグインまたはSmart ConnectionsプラグインをOllamaに接続したObsidianで、文書のドラフト作成とメモへのQ&Aを行います。プライバシー上の違いは具体的です。Grammarlyの利用規約（第7.2条）は、サービスの運用と改善のためにコンテンツを使用するライセンスをGrammarlyに付与しており、Notion AIはリクエストを第三者のモデル提供元に送ります。ローカルモデルは同じテキストを自分のハードウェア上で処理します。日常的な文章では差は小さく、差が最も大きいのは2点です。Google DocsやGmailなどブラウザ上のエディタでの入力中リアルタイム校正と、ドメイン特化のスタイル提案です。**',
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMはGrammarlyとNotion AIを置き換えられますか？',
        answer:
          'はい、日常的な用途のほとんどで置き換え可能です。Grammarly：ローカルLLMは文法修正、明瞭さの書き直し、受動態の解消、基本的なトーン調整を担います。リアルタイムのインライン提案やブラウザ拡張には及びませんが、プロンプトベースのワークフローで同じ修正をオンデマンドでカバーできます。Notion AI：ObsidianとCopilotプラグインをOllamaに接続することで、文書のドラフト作成、内容拡張、メモへのAI Q&Aを置き換えられます。Notion AI自体をローカルモデルに向ける方法は、Notionの公式ドキュメントには記載されていません。出発点：Qwen3.5 4B（ダウンロード約3〜4 GB、8 GB環境）、Gemma 4 12B（16 GB環境）、Qwen3.8 27B（24 GB以上）。文法修正に特化したベンチマークでこれらを順位付けしたものはないため、自分の段落で2つ試してください。',
        bullets: [
          '文法修正：「文法のみ修正し、修正後の本文のみ返す」というシステムプロンプトがあれば、Qwen3.5 4B以上のどのローカル指示追従モデルでもGrammarlyの中核的な修正用途をカバーできます。',
          '小型モデル：Qwen3.5 4BとPhi-4 Miniは8 GBのマシンに収まります。16 GBでスタイル書き直しを行うならGemma 4 12Bが次の一歩です。',
          'Notion AI代替：Obsidian + Copilotプラグイン（またはSmart Connectionsプラグイン）をOllamaに接続 — メモへのAI Q&A、文書ドラフト、内容拡張。',
          'リアルタイム修正：ローカルLLMはGoogle DocsやGmailで入力中にエラーへ下線を引きません。ホットキー／サイドバーのワークフローを使うか、対応エディタ内のインライン下線にはHarperのようなローカルのルールベースチェッカーを使います。',
          'プライバシー：Grammarlyは利用規約第7.2条でコンテンツのライセンスを得ており、Notion AIはリクエストを第三者のモデル提供元に送ります。ローカルLLMは外部送信なしでローカル処理します。',
          'コスト：Grammarly Proは年払いで月額約$12から、Notion AIはBusinessプランに含まれます（約$20/ユーザー/月）。ローカルLLMはハードウェア費用以降は無料です。',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: '置き換えられること（と置き換えられないこと）', anchor: '#what-you-replace' },
      { label: 'Grammarlyを置き換える：文法とスタイル修正', anchor: '#grammarly-replacement' },
      { label: 'ローカル文法修正に向く小型LLM', anchor: '#small-models-grammar' },
      { label: 'Google Docs、Gmail、クラウドなしのインライン校正', anchor: '#google-docs-inline' },
      { label: 'Notion AIを置き換える：文書ドラフトとメモ', anchor: '#notion-replacement' },
      { label: 'NotionとOllama：つながる部分とつながらない部分', anchor: '#notion-ollama' },
      { label: '統合オプション', anchor: '#integrations' },
      { label: 'モデル推奨', anchor: '#models' },
      { label: 'プライバシー比較', anchor: '#privacy' },
      { label: 'コスト比較', anchor: '#cost' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: '出典', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**ローカルLLMはGrammarlyの中核機能（文法、明瞭さ、基本スタイル修正）を置き換えますが、リアルタイムのインライン統合は置き換えません。** ワークフローは「入力中に修正が表示される」から「テキストを選択 → 修正版を取得 → 貼り戻す」へ変わります。完全なプライバシーとのトレードオフとして、多くのユーザーには許容範囲です。',
          '**Notion AIの置き換えはより完全ですが、Notion AIから離れることを意味します。** Notion AIをローカルモデルに向ける方法は、Notionの公式ドキュメントには記載されていません。Copilotプラグイン（またはSmart Connectionsプラグイン）を入れたObsidianをローカルのOllamaに向けると、文書ドラフト、内容拡張、メモへのAI Q&Aを再現でき、処理はすべてローカルです。Notionに留まる場合は、Notion APIを通じてAIの工程を自分で実行するしかありません。',
          '**プライバシーの論点は理論ではありません。** Grammarlyの利用規約（第7.2条）は、サービスの運用、改善、開発のためにコンテンツを使用するライセンスをGrammarlyに付与しています。Notion AIはリクエストを第三者のモデル提供元に送ります。Notionは、デフォルトではNotionも提供元も顧客データで学習しないとしています。ローカルLLMは同じテキストをハードウェア上で外部送信なしに処理します。',
          '**文法修正には小型モデルで足ります。** Qwen3.5 4BとPhi-4 Miniは8 GBのマシンに収まり、Gemma 4 12Bは16 GB環境とスタイル書き直しに向きます。文法修正でこれらを順位付けした公開ベンチマークはないため、決める前に自分の段落で2つのモデルを試してください。',
          '**インライン下線にはルールベースのチェッカーを追加します。** Harper（ローカル、英語のみ）とセルフホストのLanguageToolサーバーは、対応エディタで入力中にエラーへ下線を引きます。HarperはGoogle Docsを対応先に挙げていないため、そこでは「選択 → 書き直し → 貼り付け」のままです。',
          '**コストは副次的な論拠です。** Grammarly Proは年払いで月額約$12から。Notion AIは別アドオンではなく、Businessプラン（約$20/ユーザー/月）の一部になりました。ローカルLLM相当は、一度きりのハードウェア費用以降は無料です。',
          '**セットアップは約20分です。** Ollamaのインストール、モデルのダウンロード、Obsidianプラグインの設定は1回きりです。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**Grammarly料金：** 無料（AIプロンプト月100回）、Proは年払いで月額約$12から（AIプロンプト月2,000回）、Enterpriseは要見積もり。',
          '**Notion AI料金：** Businessプランに含まれます（年払いで約$20/ユーザー/月）。FreeプランとPlusプランはトライアルのみ。',
          '**ローカルLLM料金：** 無料（オープンソースモデル + Ollama） — 電気代のみ。',
          '**小型モデルの出発点：** 8 GBではQwen3.5 4B（`qwen3.5:4b`）またはPhi-4 Mini（`phi4-mini`）、16 GBではGemma 4 12B（`gemma4:12b`）、24 GB以上ではQwen3.8 27B（`qwen3.8:27b`）。',
          '**Grammarlyのプライバシー：** 利用規約第7.2条により、Grammarlyのサービスの運用、改善、開発のためにコンテンツのライセンスが付与されます。',
          '**Notion AIのプライバシー：** リクエストは第三者のモデル提供元に送られます。デフォルトでは、Notionも提供元も顧客データで学習しません。',
          '**Obsidian料金：** 2025年2月以降、個人利用・業務利用ともに無料。',
        ],
      },
      whatYouReplace: {
        id: 'what-you-replace',
        title: '置き換えられること（と置き換えられないこと）',
        content:
          '**ローカルLLMはGrammarlyとNotion AIの日常的な用途のほとんどをカバーしますが、カバーできない部分は一部のユーザーにとって重要です。** 切り替え前にギャップを理解しておくと、期待外れを避けられます。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルLLMはGrammarlyの文法修正・スタイル書き直し・トーン調整、Notion AIの文書ドラフトとメモQ&Aを置き換えますが、Grammarlyのリアルタイムインライン統合や、Notion AIのネイティブエディタ統合は置き換えません。',
          },
          {
            type: 'plain-terms',
            text: 'Grammarlyはブラウザやデスクトップでの入力を監視し、入力中に修正を表示します。ローカルLLMだけでは、これは再現できません。代わりに、渡したテキストは何でも修正できます。流れは：メールを書く → テキストを選択 → ローカルAIアプリやホットキーツールに送る → 修正版を受け取る → Gmailに貼り付ける。インライン修正より遅いものの、プライベートで無料です。',
          },
        ],
        columns: ['機能', 'Grammarly', 'ローカルLLMでの相当', 'ギャップ'],
        rows: [
          { '機能': '文法修正', 'Grammarly': 'インライン、リアルタイム', 'ローカルLLMでの相当': 'プロンプト経由、オンデマンド', 'ギャップ': 'リアルタイムなし、コピペ運用' },
          { '機能': 'スタイル提案', 'Grammarly': 'インライン、解説あり', 'ローカルLLMでの相当': 'プロンプトによる書き直し', 'ギャップ': '標準では個別の解説なし' },
          { '機能': 'トーン検出', 'Grammarly': '自動、トーン名付き', 'ローカルLLMでの相当': 'プロンプトでトーン指定', 'ギャップ': '明示的なトーン指示が必要' },
          { '機能': 'ブラウザ拡張', 'Grammarly': 'Gmail、Google Docs、ブラウザ欄で動作', 'ローカルLLMでの相当': 'コピペ、ホットキー、サイドバーアプリ', 'ギャップ': 'ブラウザ統合なし' },
          { '機能': 'Notion AI：ドラフト作成', 'Grammarly': '対象外', 'ローカルLLMでの相当': 'Obsidian + Copilot → Ollama', 'ギャップ': 'Notion UI外、別アプリ' },
          { '機能': 'Notion AI：メモへのQ&A', 'Grammarly': '対象外', 'ローカルLLMでの相当': 'Obsidian Smart Connections → Ollama', 'ギャップ': 'Vaultが必要、Notion DB検索なし' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '統合ギャップが最も効くのは、Grammarlyがインライン修正を表示するGmail、Google Docs、その他ブラウザベースのエディタで書く場合です。デスクトップアプリ中心（Word、Obsidian、VS Code、Scrivener）であれば、ローカルLLMのコピペ運用はインライン提案より少し遅い程度です。判断する前に、自分の執筆環境を確認してください。',
          },
        ],
      },
      grammarlyReplacement: {
        id: 'grammarly-replacement',
        title: 'Grammarlyを置き換える：文法とスタイル修正',
        content:
          '**Grammarly代替のワークフローは、いくつかのプロンプトテンプレートとキーボードショートカットアプリで完結します。** 文法のみ用が1つ、フルスタイル書き直し用が1つ、トーン用が1つです。一般的なノートPCでは、段落程度のテキストが数秒で返ります。速度はモデルサイズとハードウェアによります。',
        promptExamples: [
          {
            label: '文法修正のみ（Grammarly Basic相当）',
            text: '次のテキストの文法、スペル、句読点を修正してください。修正後の本文のみを返してください — 説明、マークアップ、要約は不要です。\n\n[テキストを貼り付け]',
          },
          {
            label: 'スタイルと明瞭さの書き直し（Grammarly Premium相当）',
            text: '次のテキストを明瞭さとプロフェッショナルなトーンで書き直してください。文法を修正し、受動態を能動態に、長文を引き締め、冗長な表現を削除してください。書き直した本文のみを返してください。\n\nターゲットトーン：[プロフェッショナル / カジュアル / 学術 / 説得的]\nターゲット読者：[一般 / 技術 / 経営層]\n\n[テキストを貼り付け]',
          },
          {
            label: 'トーン調整プロンプト',
            text: '次のメールを[よりフォーマルに / よりカジュアルに / より簡潔に / より外交的に]書き直してください。事実情報はすべてそのまま保ってください。書き直したメールのみを返してください。\n\n[メールを貼り付け]',
          },
          {
            label: '個人の文体プロファイル（自分の文章をローカルで分析）',
            text: '以下は私の文章の3つのサンプルです。私の文体を8つの箇条書きで説明してください：一文の典型的な長さ、語彙レベル、トーン、好む構文、句読点の癖、避けている表現。そのうえで、この文体を保ちながら編集者モデルにテキストを修正させる、100語のシステムプロンプトを書いてください。\n\nサンプル1：[貼り付け]\nサンプル2：[貼り付け]\nサンプル3：[貼り付け]',
          },
        ],
        items: [
          '**執筆セッション用システムプロンプト：** ローカルAIアプリのシステムプロンプトを「あなたはプロの編集者です。修正または書き直したテキストのみを返してください — 前置き、説明、コメントは不要です」に設定します。これにより「素晴らしい文章ですね！修正版は...」のような前置きを抑止できます。',
          '**ショートカット統合：** Raycast（macOS）またはAutoHotkey（Windows）で、選択テキストをOllamaに送り結果を貼り付けるホットキーを作成します。コピペ運用が1キーストロークに短縮されます。なお、RaycastのマニュアルではローカルモデルのサポートはPro機能とされています。Ollama APIを呼ぶAutoHotkeyスクリプトは無料です。',
          '**文法のみ vs スタイル書き直し：** 法務、技術、構造化文書のように言い換えで意味が変わるリスクがある場合は、文法のみ用プロンプトを優先します。スタイル書き直しはメール、ブログ、一般的な書簡向けです。',
          '**学術ライティング：** スタイル書き直しプロンプトに「引用、専門用語、ドメイン語彙はすべてそのまま保つこと」を追記します。これがないと、専門表現を平易化または言い換える挙動が出ることがあります。',
          '**ビジネスメール：** 「送信者は[氏名]、[役職]（所属：[企業]）。出力にはパーソナライズ詳細を含めず、その人のプロフェッショナルな声を反映する」を追加します。送信者の業務文脈にレジスターを固定できます。',
          '**自分の文体をローカルで分析：** 上の文体プロファイルのプロンプトは、3つの文章サンプルを再利用可能なシステムプロンプトに変えます。サンプルがマシンの外に出ないため、非公開の下書きにも安全に使えます。クラウドのアシスタントなら、まずその下書きを受信する必要があります。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'macOSでの高速ワークフロー：Ollamaをインストールし、Gemma 4 12Bなどのモデルを取得し、文法修正プロンプトでRaycast AIコマンドを作成します（RaycastのローカルモデルにはProサブスクリプションが必要です）。任意のアプリでテキストを選択してホットキーを押すと、修正版が選択範囲に置き換わります。Windowsでは、選択範囲をOllama APIに送るAutoHotkeyスクリプトで、サブスクリプションなしに同じことができます。',
          },
        ],
      },
      smallModelsGrammar: {
        id: 'small-models-grammar',
        title: 'ローカル文法修正に向く小型LLM',
        content:
          '**文法修正では、8 GBのマシンにはQwen3.5 4B、16 GBのマシンにはGemma 4 12Bから始めましょう。どちらも「修正後の本文のみ返す」という指示に従い、一般的なノートPCで動きます。** 文法修正はおおむね指示追従の問題です。モデルは変更を最小限にとどめ、修正後のテキストだけを返す必要があります。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカル文法修正に最適な小型LLMとは、すでに正しい部分を言い換えずに誤りを直す、最小の指示追従モデルです。Qwen3.5 4B、Phi-4 Mini、Gemma 4 12Bが妥当な出発点で、文法についてこれらを順位付けした公開ベンチマークはありません。',
          },
          {
            type: 'plain-terms',
            text: '文法修正に大きなモデルは要りません。必要なのは「誤りだけ直す」に従うモデルです。候補を2つインストールし、同じ5段落を両方に貼り付けて、誤りを拾いつつ変更が最も少ない方を残してください。このテストは10分で済み、どのリーダーボードより多くのことが分かります。',
          },
        ],
        columns: ['モデル', 'Ollamaタグ', 'ダウンロード', '対応環境', '向いている用途'],
        rows: [
          { 'モデル': 'Phi-4 Mini', 'Ollamaタグ': 'phi4-mini', 'ダウンロード': '~2.5 GB', '対応環境': '8 GB RAM', '向いている用途': '高速で簡単な修正、主に英語' },
          { 'モデル': 'Qwen3.5 4B', 'Ollamaタグ': 'qwen3.5:4b', 'ダウンロード': '~3.3–4 GB', '対応環境': '8 GB RAM', '向いている用途': '文法のみの修正、短いメール、多言語' },
          { 'モデル': 'Gemma 4 E4B', 'Ollamaタグ': 'gemma4:e4b', 'ダウンロード': '~6.6–9.5 GB', '対応環境': '16 GB RAM', '向いている用途': '多言語テキスト、軽いスタイル編集' },
          { 'モデル': 'Gemma 4 12B', 'Ollamaタグ': 'gemma4:12b', 'ダウンロード': '~7.7–8 GB', '対応環境': '16 GB RAM', '向いている用途': 'スタイル書き直し、トーン調整' },
          { 'モデル': 'Qwen3.8 27B', 'Ollamaタグ': 'qwen3.8:27b', 'ダウンロード': '~18 GB', '対応環境': '24 GB以上 RAM/VRAM', '向いている用途': '長く繊細な書き直し' },
        ],
        items: [
          '**文法修正に特化したベンチマークで、これらのモデルを順位付けしたものはありません。** 各ベンダーが公開しているのは一般的な指示追従の結果であり、文法修正の精度ではありません。自分のテキストで判断してください。',
          '**テストで確認すること：** 過剰修正（問題のない表現が変わっていないか）、意味の変化（数字、名前、否定）、表記の揺れの維持（英国式・米国式の綴り）、そしてモデルが本文だけを返すかどうか。',
          '**言語：** Qwen3.5とGemma 4は多言語対応です。Phi-4 Miniは主に英語向けです。英語以外のテキストでは、まず自分の言語でテストしてください。',
          '**出力を安定させる：** 低めのtemperature（0.2前後）は、創作的な言い換えを抑えます。下のModelfileは、編集者向けの指示とtemperatureを再利用可能なモデルにまとめます。',
          '**長い文書：** 小型モデルは長い入力で精度が落ちます。文書全体を貼り付けず、セクションごとに修正してください。',
        ],
        codeBlock:
          'FROM qwen3.5:4b\nPARAMETER temperature 0.2\nSYSTEM """You are a copy editor. Fix grammar, spelling, and punctuation only. Keep the author\'s wording, meaning, and spelling variant. Return only the corrected text."""\n\n# then run:\n#   ollama create grammar-fix -f Modelfile\n#   ollama run grammar-fix',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'モデルが修正後のテキストの前に思考過程や前置きを出力する場合は、推論を行わないバリアントか別のモデルに切り替えてください。回答のたびにコメントを付ける文法ツールは、手作業で校正するより遅くなります。',
          },
        ],
      },
      googleDocsInline: {
        id: 'google-docs-inline',
        title: 'Google Docs、Gmail、クラウドなしのインライン校正',
        content:
          '**ここで取り上げたローカルツールのうち、Google Docsを対応エディタとして挙げているものはありません。そのため、Google Docsでの現実的な構成は、LLMによる書き直し用のホットキーまたはサイドバーに、対応環境ではインライン下線用のローカルのルールベースチェッカーを組み合わせることです。** LLMとルールベースのチェッカーは役割が異なります。LLMは依頼に応じて書き直し、チェッカーは入力中に誤りへ下線を引きます。',
        columns: ['ツール', '種類', '動作する場所', '制限'],
        rows: [
          { 'ツール': '[Harper](https://writewithharper.com)', '種類': 'ルールベース、端末内、LLMなし', '動作する場所': 'Chrome、Edge、Firefox、Obsidian、VS Code、macOSアプリ', '制限': '英語のみ、Google Docsは対象外' },
          { 'ツール': '[LanguageTool](https://dev.languagetool.org/http-server)（セルフホスト）', '種類': 'localhost上のルールベースサーバー', '動作する場所': 'ブラウザ拡張の「ローカルサーバー」設定', '制限': '実験的な設定、Javaサーバーが必要' },
          { 'ツール': '[Page Assist](/ja/local-llms/page-assist-review)', '種類': 'Ollamaチャットのサイドバー', '動作する場所': 'ChromeとFirefoxのサイドバー', '制限': 'チャット形式、結果は自分で貼り戻す' },
          { 'ツール': 'ホットキー + Ollama', '種類': '選択テキストのLLM書き直し', '動作する場所': 'Google Docsを含む任意のアプリ', '制限': 'Raycast（Pro）またはAutoHotkeyスクリプト' },
        ],
        items: [
          '**Google Docsのワークフロー：** Docsで「提案」モードをオンにし、段落を選択してホットキーまたはサイドバーに送り、修正後のテキストを貼り付けます。提案モードなら、すべての変更を確認できます。',
          '**Gmail：** Harperのサイトによると、Gmailは、Gmail内蔵の文法チェッカーをオフにしない限り非対応です。メールの下書きには、選択して書き直すワークフローを使ってください。',
          '**最適な組み合わせ：** 対応エディタでのインライン下線にはルールベースのチェッカー、書き直し・トーン・要約にはローカルLLM。これが、Grammarlyの「下線 + AI書き直し」という組み合わせに最も近いローカル構成です。',
          '**LanguageToolのセルフホスト：** LanguageToolサーバーをダウンロードしてlocalhostで起動し、ブラウザ拡張の「実験的な設定」で「ローカルサーバー」を選びます。公開オプションを付けて起動しない限り、サーバーには自分のマシンからのみ接続できます。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ルールベースのチェッカーにGPUは不要で、遅延も加わりません。まず1つ導入し、ルールベースでは担えない書き直しの作業にだけLLMを追加してください。',
          },
        ],
      },
      notionReplacement: {
        id: 'notion-replacement',
        title: 'Notion AIを置き換える：文書ドラフトとメモ',
        content:
          '**ローカルOllamaバックエンドのObsidianは、メモ取りやナレッジワーカー向けにNotion AIに最も近い機能等価物です。** Notionのデータベース構造は再現しませんが、文書ドラフトとメモへのAI Q&Aは同等の能力で、すべての処理がローカルです。',
        image: '/images/replace-grammarly-notion-ai-with-local-notion-ai-setup-flow-en.svg',
        imageCaption: 'ObsidianでのNotion AI代替セットアップ：Ollamaをインストールしてモデルをダウンロード、Obsidianをインストール、localhost:11434を指すCopilotプラグインを追加、Vault全体のQ&A用にSmart Connectionsを追加し、その後は完全にローカルで文書を作成しメモを検索します。',
        items: [
          '**Obsidianをインストール**：[obsidian.md](https://obsidian.md)から。個人利用・業務利用ともに無料です。メモ用のVault（保管庫）を作成します — AIプラグインがインデックスする対象ディレクトリです。',
          '**Copilotプラグインをインストール**：（Community Plugins → 「Copilot」を検索。[Copilot for Obsidianレビュー](/ja/power-local-llm/copilot-for-obsidian-review)を参照）。プラグイン設定でLLMプロバイダに「Ollama」を選び、ベースURLに`http://localhost:11434`を入力、モデルを選択します。Copilotは、現在のメモ文脈で質問や生成ができるチャットサイドバーをObsidianに追加します。',
          '**Smart Connectionsプラグインをインストール**：Vault全体のQ&A用。Smart Connectionsはローカル埋め込みモデルで全メモを埋め込みインデックス化し、関連メモを取り出してからLLMに渡します。Notion AIの「メモに質問する」の直接的な代替です。',
          '**ドラフト作成：** Copilotチャットで「次のメモから[文書タイプ]を[テーマ]について作成：[要点を貼り付け]」と入力。プラグインは現在のメモ文脈を自動で含めます。出力はチャットに表示されるので、メモにコピペします。',
          '**内容拡張：** メモ内の箇条書きを選択し、Copilotコマンドパレットで「Expand selection」を実行 — モデルがメモの執筆レジスターで散文に変換します。',
          '**週次レビュー生成：** 「今週分のメモを週次レビュー形式で要約：成果、ブロッカー、次のアクション」。Smart Connectionsが直近7日のメモを取得し、自動でLLMに渡します。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルOllamaに接続したObsidian + CopilotプラグインまたはSmart Connectionsプラグインで、Notion AIの文書ドラフト、内容拡張、メモQ&Aを置き換えられます — すべての処理はローカルで、外部サーバーへの送信はありません。',
          },
          {
            type: 'plain-terms',
            text: 'セットアップは次のとおりです。Obsidianをインストール、Ollamaをインストール、モデルを取得、ObsidianにCopilotコミュニティプラグインを入れ、localhost:11434を指す。これがNotion AIのAI機能の代替です。メモはVaultフォルダ（プレーンなMarkdownファイル、完全に可搬）に残ります。AIチャットはマシン上で動きます。何もコンピュータから出ません。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Obsidianはメモを自分が管理するフォルダ内のプレーンなMarkdownファイルとして保存します。Notionの独自データベース形式と異なり、メモはどんなテキストエディタでも読め、いつでもエクスポートできます。これはNotionに対する二次的なプライバシーと可搬性の利点です — 知識ベースがクラウドプラットフォームに閉じ込められません。',
          },
        ],
      },
      notionOllama: {
        id: 'notion-ollama',
        title: 'NotionとOllama：つながる部分とつながらない部分',
        content:
          '**Notion AIをローカルモデルに向ける方法は、Notionの公式ドキュメントには記載されていません。そのため「Notion + Ollama」とは、AIの工程をNotionの外で実行するか、メモをNotionから移すかのどちらかを意味します。** Notionの公開している料金ページとセキュリティページでは、AIはNotionが選んだモデル提供元で動くと説明されており、自分のエンドポイントを指定する設定はありません。また、Notionはクラウドワークスペースでありローカルデータベースではないため、モデルを接続できるローカルのNotionデータベースは存在しません。',
        items: [
          '**選択肢1 — Notion API経由のスクリプト：** 小さなスクリプトがNotion APIでページを読み取り、テキストを`localhost:11434`のOllamaに送り、結果を新しいブロックとして書き戻します。モデルの工程はローカルですが、ページ自体はNotionのサーバー上にあるため、取り除かれるのはAI提供元だけです。',
          '**選択肢2 — Notion MCP：** NotionはMCPサーバー（OAuthサインイン）をホストしており、MCPクライアントがページの読み取りと更新に使います。NotionはClaude Code、Cursor、Codexをクライアントの例に挙げています。特定のクライアントがローカルモデルを動かせるかどうかは、そのクライアント側の問題です。',
          '**選択肢3 — AI負荷の高いメモをローカルファーストのアプリに移す：** 上記のCopilot付きObsidian（プレーンなMarkdownファイル）、または[AppFlowy](https://appflowy.com)。AppFlowyはオープンソース（AGPL-3.0）のNotion風ワークスペースで、比較ページによればオフラインモードとローカルAIのオプションがあります。正確なローカルモデルの設定は、AppFlowyのドキュメントで確認してください。',
          '**ローカルモデルで変わらないこと：** すでにNotionにあるコンテンツは、Notionに保存されています。それに対してローカルモデルを動かしても、取り除かれるのはAI提供元の工程であり、Notionの保存ではありません。',
          '**Notionが自社のAIについて述べていること：** デフォルトでは、NotionもそのAI提供元も顧客データをモデルの学習に使用しません。Enterpriseではほとんどのモデルがゼロデータ保持を提供し、それ以外のプランでは提供元が最大30日間データを保持します。',
        ],
        codeBlock:
          'import requests\n\nNOTION = {"Authorization": "Bearer <NOTION_TOKEN>", "Notion-Version": "2022-06-28"}\nPAGE_ID = "<page-id>"\n\n# 1. read the page text through the Notion API\nblocks = requests.get(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION).json()["results"]\ntext = "\\n".join(\n    "".join(t["plain_text"] for t in b["paragraph"]["rich_text"])\n    for b in blocks if b["type"] == "paragraph"\n)\n\n# 2. rewrite it with a local model (Ollama on localhost)\nr = requests.post("http://localhost:11434/api/generate", json={\n    "model": "gemma4:12b", "stream": False,\n    "prompt": "Correct the grammar of this text. Return only the corrected text.\\n\\n" + text,\n})\nfixed = r.json()["response"]\n\n# 3. append the result as a new paragraph block\nrequests.patch(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION, json={\n    "children": [{"object": "block", "type": "paragraph",\n                  "paragraph": {"rich_text": [{"type": "text", "text": {"content": fixed[:2000]}}]}}]\n})',
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'このスクリプトは、Notionトークンとページ内容をNotionとlocalhostにのみ送ります。トークンは共有ファイルに含めないでください。また、Notionのリッチテキストブロックは1つあたり約2,000文字までのため、長い出力は複数のブロックに分割する必要があります。',
          },
        ],
      },
      integrations: {
        id: 'integrations',
        title: '統合オプション',
        content:
          '**統合は4階層：基本（コピペ）、中級（ホットキーアプリまたはライティングアプリ）、インライン（ルールベースのチェッカー）、上級（カスタムブラウザ拡張）。** 自分の技術的快適度に合うレベルから始めましょう。',
        columns: ['統合レベル', '方法', 'アプリ', '適合する用途'],
        rows: [
          { '統合レベル': '基本（コピペ）', '方法': 'ローカルAIアプリを開き、貼り付け、結果をコピー', 'アプリ': 'LM Studio チャット、Ollama CLI、Open WebUI', '適合する用途': '時々の修正、どのOSでも可' },
          { '統合レベル': '中級（ホットキー）', '方法': 'テキスト選択 → ホットキー → 修正版が選択範囲に置換', 'アプリ': 'Raycast AI（macOS、Pro）、AutoHotkey + Ollama（Windows）', '適合する用途': 'どのアプリでも頻繁に修正、ワークフロー変更最小' },
          { '統合レベル': '中級（ライティングアプリ）', '方法': 'AIアシスタントが執筆ツールに組み込まれる', 'アプリ': 'Obsidian + Copilotプラグイン、VS Code + Continue.dev', '適合する用途': 'これらのアプリで作業するライターや開発者' },
          { '統合レベル': 'インライン（ルールベース）', '方法': 'ローカルのチェッカーが入力中に誤りへ下線を引く', 'アプリ': 'Harper、セルフホストのLanguageTool', '適合する用途': 'GPUなしで入力中にフィードバックが欲しい場合' },
          { '統合レベル': '上級（ブラウザ拡張）', '方法': 'カスタム拡張が選択テキストをローカルOllama APIに送る', 'アプリ': 'カスタムChrome/Firefox拡張（GitHubにオープンソーステンプレートあり）', '適合する用途': 'Grammarly風のブラウザ統合を求めるパワーユーザー' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'macOSでは、Proをお持ちならカスタムAIコマンド付きRaycastが手早い中級統合です。文法修正プロンプトでAIコマンドを作成し、ホットキーを割り当て、任意のアプリでテキストを選択してホットキーを押すと、修正後のテキストが選択範囲に置き換わります。Proがない場合は、Ollama CLIやOpen WebUIなどのチャットクライアントを使ってください。',
          },
        ],
      },
      models: {
        id: 'models',
        title: '執筆タスク向けモデル推奨',
        content:
          '**ライティング支援は、強い指示追従と一貫した散文出力が得意なモデルが向きます。** ランキングはコーディングや数学とは異なります。以下の推奨は文法ベンチマークの結果ではなく、サイズと指示追従で選んだ出発点です。',
        columns: ['タスク', '最適モデル', '代替（低VRAM）', '理由'],
        rows: [
          { 'タスク': '文法修正', '最適モデル': 'Gemma 4 12B', '代替（低VRAM）': 'Qwen3.5 4B / Phi-4 Mini', '理由': '「誤りのみ修正、本文のみ返す」に従う' },
          { 'タスク': 'スタイル書き直し', '最適モデル': 'Gemma 4 12B または Qwen3.8 27B', '代替（低VRAM）': 'Qwen3.5 4B', '理由': '表現や文体に余裕がある' },
          { 'タスク': 'トーン調整', '最適モデル': 'Qwen3.8 27B', '代替（低VRAM）': 'Gemma 4 12B', '理由': '大型モデルほど事実が安定しやすい' },
          { 'タスク': 'ドラフト作成（Notion AI代替）', '最適モデル': 'Gemma 4 12B', '代替（低VRAM）': 'Qwen3.5 4B', '理由': '文書フォーマットの指示に従う' },
          { 'タスク': 'メモ要約 / Q&A', '最適モデル': 'Gemma 4 12B', '代替（低VRAM）': 'Qwen3.5 4B / Phi-4 Mini', '理由': '小型でも要約は問題なくこなせる' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'システムプロンプトに「AIっぽい言い回しを使わない」という指示を入れます。モデルはデフォルトで「もちろんです！修正版は...」のような曖昧化されたAIレジスターになりがちです。「修正後の本文のみを返し、前置きやコメントは不要」というシステムプロンプトでこれを排除できます。スタイル書き直しでは「\'掘り下げる\'、\'タペストリー\'、\'育む\'、\'〜の領域\'、\'特筆すべき\'などの表現は使わないこと」を追加します。',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシー比較',
        content:
          '**クラウドのライティングアシスタントとローカルLLMのプライバシー差は構造的です。** クラウドサービスはテキストを受信せずに処理できず、ローカルLLMは明示的な送信接続なしにテキストを外部に送れません。',
        image: '/images/replace-grammarly-notion-ai-with-local-cost-privacy-overview-en.svg',
        imageCaption: 'クラウド型ライティングツール対ローカルLLM：GrammarlyとNotion AIは2つの独立した有料サブスクリプションとして動作し、テキストをクラウドサーバーに送信します。一方、OllamaとObsidianはすべての文章作成とメモをデバイス上に保持し、継続的なソフトウェア費用はかかりません。',
        items: [
          '**Grammarlyのデータライセンス：** [Grammarlyの利用規約](https://www.grammarly.com/terms)第7.2条のもとでは、コンテンツの所有権はユーザーに残りますが、サービスの運用・提供・改善や新しい製品・機能の開発など、定められた目的のために使用する、全世界・非独占・無償のライセンスをGrammarlyに付与します。また規約には、提案の承認や拒否が提案エンジンの学習に役立つ場合があると記載されています。Grammarlyは、LLMパートナーが顧客データを自社モデルの学習に使用することは認められていないとしています。',
          '**Notion AIのデータフロー：** NotionはAIリクエストを複数のモデル提供元に振り分けています（現在の一覧はサブプロセッサーのページにあります）。Notionは、デフォルトではNotionもAI提供元も顧客データでモデルを学習しないとしています。Enterpriseでは、LLM提供元とのゼロデータ保持を提供します。それ以外のプランでは、提供元が最大30日間データを保持します。',
          '**ローカルLLMのデータフロー：** 外部送信なし。Ollamaはデフォルトでlocalhostで待ち受け、推論中に外部への接続は発生しません。モデルの重みはディスク上の静的ファイルで、テキストはメモリ内で処理されます。',
          '**GDPR／職業上の守秘義務への影響：** 弁護士、医療従事者、その他守秘義務を負う方は、クライアント関連の内容にGrammarlyやNotion AIを使う前に、契約上の保護を確認してください。ローカルLLMはデータがマシンの外に出ないため、第三者処理者の論点を回避できます。',
          '**テレメトリ：** クラウドツールは、テキスト自体に加えて利用状況や操作データも収集します。ローカルアプリは異なります — 各アプリのテレメトリ設定を確認し、監査レベルの確実性が必要なら、送信トラフィックを自分で監視してください。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Grammarlyを業務メール、契約ドラフト、または守秘義務の対象となる内容に使う場合 — 内容が保護されていると仮定する前に、所属組織のデータ方針と、適用されている法人向けデータ条件を確認してください。',
          },
        ],
      },
      cost: {
        id: 'cost',
        title: 'コスト比較',
        content:
          '**両ツールを置き換えると、Grammarlyのサブスクリプションと、NotionプランのうちAI部分の費用がなくなります。** ローカルLLMのソフトウェア費用は無料で、継続コストは電気代のみです。',
        columns: ['ツール', '月額', '年額', '備考'],
        rows: [
          { 'ツール': '[Grammarly Free](https://www.grammarly.com/plans)', '月額': '$0', '年額': '$0', '備考': 'AIプロンプト月100回、基本チェック' },
          { 'ツール': '[Grammarly Pro](https://www.grammarly.com/plans)', '月額': '約$12/月から', '年額': '約$144/年から', '備考': 'AIプロンプト月2,000回、月払いは割高' },
          { 'ツール': '[Notion AI](https://www.notion.com/pricing)', '月額': 'Businessに含む（約$20/ユーザー）', '年額': '約$240/ユーザー/年', '備考': 'Free・Plusはトライアルのみ、単独アドオンなし' },
          { 'ツール': '[Ollama（ローカルLLM）](https://ollama.com)', '月額': '$0', '年額': '$0', '備考': '無料・オープンソース、電気代のみ' },
          { 'ツール': '[Obsidian（Notion代替）](https://obsidian.md)', '月額': '$0', '年額': '$0', '備考': '個人利用・業務利用とも無料' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '迷っているなら、まず文法修正だけを30日間ローカルモデルに移行してみてください。ブラウザ統合のためにGrammarlyは残します。ローカル修正の品質とコピペ運用が自分の執筆に許容できるか評価し、その上でGrammarly解約を決めます。Notion AIの切り替えは、Obsidianをメモ層として受け入れられるなら摩擦が小さいです。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある間違い',
        items: [
          '**出力フォーマットのシステムプロンプトを設定しない。** システムプロンプトがないと、モデルは「もちろんです！修正版はこちら：」と前置きを付け、説明を加え、AIっぽい表現を使います。「修正後の本文のみを返す」と指定するシステムプロンプトを必ず設定してください。',
          '**複雑なスタイル書き直しに最小のモデルを使う。** 小型モデルは文法修正は得意ですが、スタイル書き直しは定型的になりがちです。スタイル中心の作業では、Gemma 4 12B以上に上げてください。',
          '**ObsidianにNotion UI同等を期待する。** ObsidianはMarkdownエディタで、データベースではありません。Notionワークフローがデータベース、ビュー、リレーションに依存している場合、Obsidianは完全な代替にはなりません — 移植できるのはAI機能だけです。データベース機能が重要かどうかを切り替え前に評価してください。',
          '**スタイル書き直しに語数上限を設けない。** 上限がないと、モデルは書き直しを膨らませがちです。「書き直し後のテキストは元の語数の±10%以内に収めること」をスタイル書き直しプロンプトに追加してください。',
          '**小さなモデルに長文書を送る。** 小型モデルは長い入力で精度が落ちます。長い文書はセクションに分けて、それぞれ個別に修正してください。',
          '**LLMにインライン下線を期待する。** LLMは依頼されたときに答えるもので、入力を監視しません。入力中の下線が欲しければ、Harperのようなルールベースのローカルチェッカーを追加してください。',
          '**Notion AIがローカルモデルを使えると思い込む。** Notionは対応を公式に記載していません。Notion APIとOllamaを組み合わせるか、AI負荷の高いメモをローカルファーストのアプリに移してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          'Grammarly利用規約 — 第7.2条（ユーザーコンテンツのライセンス） — [grammarly.com/terms](https://www.grammarly.com/terms)',
          'Grammarlyのプラン — [grammarly.com/plans](https://www.grammarly.com/plans)',
          'Grammarlyの責任あるAI（パートナーによるデータ利用） — [grammarly.com/responsible-ai](https://www.grammarly.com/responsible-ai)',
          'Notionの料金とAIのプラン別提供状況 — [notion.com/pricing](https://www.notion.com/pricing)',
          'Notion AIのセキュリティ対策（提供元、学習、保持） — [notion.com/help/notion-ai-security-practices](https://www.notion.com/help/notion-ai-security-practices)',
          'Notion MCPドキュメント — [developers.notion.com/docs/mcp](https://developers.notion.com/docs/mcp)',
          'Obsidianの業務利用無料化（2025年2月） — [obsidian.md/blog/free-for-work](https://obsidian.md/blog/free-for-work/)',
          'Harper文法チェッカー — [writewithharper.com](https://writewithharper.com)',
          'LanguageTool HTTPサーバー（セルフホスト） — [dev.languagetool.org/http-server](https://dev.languagetool.org/http-server)',
          'Raycastのローカルモデル — [manual.raycast.com/ai/local-models](https://manual.raycast.com/ai/local-models)',
          'Ollamaモデルライブラリ — [ollama.com/library/gemma4](https://ollama.com/library/gemma4)、[ollama.com/library/qwen3.5](https://ollama.com/library/qwen3.5)、[ollama.com/library/qwen3.8](https://ollama.com/library/qwen3.8)',
          'Obsidian Copilotプラグイン ドキュメント — [GitHub: logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot)',
          'Obsidian Smart Connectionsプラグイン — [GitHub: brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'ローカルの文法修正に向く小型LLMはどれですか？',
            a: 'Qwen3.5 4B（`qwen3.5:4b`、約3〜4 GB）とPhi-4 Mini（`phi4-mini`）は8 GBのマシンに収まります。Gemma 4 12B（`gemma4:12b`）は16 GB環境とスタイル書き直しに、Qwen3.8 27Bは24 GB以上に向きます。文法修正でこれらを順位付けした公開ベンチマークはないため、自分の段落5つで2つのモデルを試し、誤りを拾いつつ変更が最も少ない方を残してください。「誤りのみ修正し、修正後の本文のみ返す」というシステムプロンプトと、低めのtemperatureを使います。',
          },
          {
            q: 'Google Docsで使えるローカルのGrammarly代替はありますか？',
            a: 'そのまま置き換えられるものはありません。ここで取り上げたローカルツールのうち、Google Docsを対応エディタとして挙げているものはないためです。実用的な構成は「選択 → 書き直し → 貼り付け」です。Docsで（提案モードをオンにして）テキストを選択し、ホットキーツールまたはブラウザのサイドバー経由でローカルモデルに送り、結果を貼り付けます。ほかの場所でのインライン下線には、Harper（英語のみ、端末内、Chrome・Edge・Firefox向け拡張あり）とセルフホストのLanguageToolサーバーがローカルの選択肢です。',
          },
          {
            q: 'NotionでOllamaを使うにはどうすればよいですか？',
            a: 'Notion AIをローカルモデルに向ける方法は、Notionの公式ドキュメントには記載されていません。NotionのコンテンツでOllamaを使うには、Notion APIでページを読み取り、テキストをlocalhost:11434のOllamaに送り、結果を書き戻す小さなスクリプトを書きます（上の例を参照）。モデルの工程はローカルですが、ページ自体はNotionのサーバー上にあります。完全にローカルにするには、AI負荷の高いメモをCopilotプラグイン付きのObsidianや、AppFlowyのようなローカルファーストのアプリに移してください。',
          },
          {
            q: 'ローカルLLMをローカルのNotionデータベースに接続できますか？',
            a: 'Notionにはローカルデータベースがありません。ワークスペースはNotionのサーバー上にあり、APIを通じてアクセスします。モデルをローカルで動かしてAPI経由でNotionとテキストをやり取りするか、ローカルファーストのワークスペースを選ぶことができます。Obsidianはメモをディスク上のMarkdownファイルとして保存し、AppFlowyはオフラインモードを備えたオープンソースのNotion風アプリです。',
          },
          {
            q: 'ローカルLLMで自分の文体を分析できますか？',
            a: 'はい。このガイドの文体プロファイルのプロンプトとともに、自分の文章の3つのサンプルをローカルモデルに貼り付けます。文の長さ、トーン、語彙、癖を箇条書きで説明し、編集者モデルが自分の文体を保つよう再利用できる短いシステムプロンプトも返します。サンプルがマシンの外に出ないため、非公開の下書きにも安全です。',
          },
          {
            q: 'Notion AIとGrammarlyの違いは何ですか？',
            a: '使われる場所が異なります。Notion AIはNotionの内部で動き、ドラフト作成、要約、ワークスペースに対する質問への回答を行います。Grammarlyはアプリやブラウザのテキスト欄をまたいで文章をチェックし、書き直しを提案します。書き直しとトーンでは重なりますが、どちらも他方の代わりにはならず、ほとんどのタスクはローカルLLMとメモアプリの組み合わせで両方置き換えられます。',
          },
          {
            q: 'GrammarlyはNotionやObsidianで使えますか？',
            a: 'Grammarlyのブラウザ拡張は、ブラウザ上のエディタのテキスト欄をチェックします。これにはWeb版のNotionも含まれます。Obsidianのようなデスクトップアプリは、ブラウザ拡張が届く範囲の外にあります。Obsidianでは、Harper（Obsidianプラグインあり）のようなローカルのチェッカーや、OllamaとCopilotプラグインの組み合わせで、テキストをクラウドに送らずに同じ範囲をカバーできます。',
          },
          {
            q: 'ローカルLLMは文法修正でGrammarlyと同等ですか？',
            a: '日常的な文法、句読点、スペルの誤りについては、適切にプロンプトしたローカルモデルで同じ修正を扱えます。自分のテキストで確かめてください。Grammarlyの優位点：入力中のリアルタイムインライン修正と、Gmail・Google Docs・その他のWebアプリで動作するブラウザ拡張です。ローカルLLMでは、ブラウザ欄のテキストに選択して貼り付けるワークフローが必要です。',
          },
          {
            q: 'ObsidianはNotionの完全な代替になりますか？',
            a: 'Obsidianはメモ取りとナレッジベースの機能についてはNotionをうまく置き換えます。ただし、Notionのデータベース、プロジェクト管理、リレーショナルデータ機能は置き換えません。Notionの主用途がメモ、文書、Wikiであれば — Obsidianは完全な代替です。Notionデータベース、ボードビュー、リレーションプロパティに依存するなら — 追加ツールが必要です（Anytype、AppFlowy、またはデータベース層にNotion本体＋執筆にObsidian）。',
          },
          {
            q: 'Grammarlyのライティング提案に最も近いローカルモデルはどれですか？',
            a: 'Grammarlyの提案エンジンを再現するローカルモデルはなく、それを基準にモデルを順位付けしたベンチマークもありません。実際には、元の声を保つよう指示した場合、スタイルとトーンの書き直しにはGemma 4 12BとQwen3.8 27Bが最も余裕があり、文法のみの修正にはQwen3.5 4BとPhi-4 Miniで足ります。入力中の下線が欲しい場合は、いずれもHarperのようなルールベースのチェッカーと組み合わせてください。',
          },
          {
            q: 'Obsidian Copilotプラグインはメモをクラウドに送りますか？',
            a: 'ローカルOllamaインスタンスを使うよう設定すれば送りません。プラグインはクラウドLLM（OpenAI、Anthropic）とローカルOllamaの両方に対応します。LLMプロバイダにOllamaを選び、localhost URLを入力すると、AI処理はすべてローカルで行われます。メモ内容は外部に送信されません。監査レベルの確認が必要なら、Little Snitch（macOS）やWiresharkでネットワークトラフィックを観察して検証できます。',
          },
          {
            q: 'Google DocsやGmailでローカルLLMを使えますか？',
            a: '直接は使えません — ブラウザのテキストフィールドにネイティブ統合されるGrammarly相当のローカルLLMブラウザ拡張は存在しません。回避策：（1）Google Docsでテキストを選択しコピー、ローカルAIアプリに貼り付け、修正版をコピーしGoogle Docsに戻す；（2）選択テキストを処理して置換するホットキーツール（Raycastでローカルモデルを使うにはProが必要。Ollama APIを呼ぶAutoHotkeyスクリプトは無料）；（3）選択テキストを読み取りローカルOllama APIを呼ぶカスタムChrome拡張（GitHubにオープンソーステンプレートあり）。いずれもGrammarlyのシームレスなインライン体験には及びません。',
          },
          {
            q: 'このセットアップはHIPAAやGDPRに業務上適合しますか？',
            a: '外部送信なしにマシン上のみでデータを処理するローカルLLMは、HIPAAとGDPRいずれの中核的なデータ移転懸念にも対応します。ただし、コンプライアンスは技術スタック全体、セキュリティ統制、固有の規制要件に依存します。ローカルLLMは自動的に適合するわけではありません — エンドポイントセキュリティ、物理的なデバイス保護、アクセス制御の評価が必要です。正式な適合判断はコンプライアンス担当者に相談してください。ローカル処理は「第三者データ処理者」の論点を取り除きますが、完全なコンプライアンスプログラムの代替にはなりません。',
          },
          {
            q: '学術論文に最適なローカルライティングアシスタントは何ですか？',
            a: '中規模のローカルモデル（たとえばGemma 4 12B）と、「文法と句読点のみを修正し、語彙・文構造・内容を変えないこと。引用、専門用語、分野固有の言語はすべてそのまま保つこと」を指定するシステムプロンプトです。これは文法のみモードに相当し、言い換えにより意味が変わったり、引用内容を改変したと見なされうる学術ライティングでよりリスクの低い設定です。',
          },
          {
            q: 'Notion AIの会議メモ要約をローカルで置き換えられますか？',
            a: 'はい。会議メモをテキストまたはMarkdownファイルとして書き出す（または文字起こしを直接貼り付け）。プロンプト：「これらの会議メモを次の形式で要約：（1）決定事項、（2）担当者付きのアクションアイテム、（3）未解決の疑問。各セクションは箇条書き。300語以内」。小型の指示追従モデルで会議要約を十分に扱えます。定例会議があるなら、ローカルAIアプリに保存済みプロンプトテンプレートを作っておきましょう。',
          },
          {
            q: 'GrammarlyはどのLLMを使っていますか？GrammarlyはLLMですか？',
            a: 'Grammarlyは単一のモデルではなく、ライティング製品です。確認したページ（プラン、利用規約、責任あるAIのページ）では、Grammarlyは基盤となるモデル名を公表していません。責任あるAIのページには、生成AI機能を動かすために使われる情報はLLMパートナーと共有され、それらのパートナーは顧客データを自社モデルの学習に使用することを認められていない、と記載されています。Notion AIも同様で、サブプロセッサーのページに掲載された複数の提供元を使っています。研究者も、Hugging FaceのgrammarlyオーガニゼーションでオープンなテキストエディティングモデルCoEdIT（7億7,000万〜110億パラメータ）を公開していますが、これは研究モデルであり、製品そのものではありません。プライバシー上重要なのはデータの扱いです。どちらの製品に送ったテキストも、ベンダーのサーバーで処理されます。ローカルLLMならそれを避けられます — テキストはマシンの外に出ません。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Obsidianで使うローカルLLM](/ja/power-local-llm/local-llm-with-obsidian-2026) — メモ取りとVaultへのQ&Aのための、ObsidianとOllamaの完全セットアップ。',
          '[Copilot for Obsidianレビュー](/ja/power-local-llm/copilot-for-obsidian-review) — Notion AI代替のワークフローで使うCopilotプラグイン。',
          '[ObsidianとLogseqのAIプラグイン比較](/ja/power-local-llm/obsidian-logseq-ai-plugins) — メモアプリでローカルAIを使うためのプラグインの選択肢。',
          '[小型ローカルLLMモデル](/ja/local-llms/small-local-llm-models) — 4〜8 GBのマシン向けの最新の小型モデル、ローカル文法修正に関連。',
          '[ローカルLLMによるメール・カレンダー自動化](/ja/power-local-llm/local-llm-email-and-calendar-automation) — ローカルLLMでメールドラフトとカレンダー管理を自動化、ライティングアシスタントの補完。',
          '[フィクション作家向けローカルLLMプロンプト](/ja/power-local-llm/local-llm-prompts-for-fiction-writers) — 文法修正を超えた創作タスク用プロンプト、シーン作成とキャラクター開発まで。',
          '[Zapierをローカル AI エージェントで置き換える](/ja/power-local-llm/replace-zapier-with-local-ai-agents) — ローカルでのワークフロー自動化、執筆ツールと業務プロセスを連結。',
          '[社内データのためのローカルRAG](/ja/power-local-llm/local-rag-for-private-business-data) — 機密ビジネス文書へのQ&A、メモQ&A用途を大規模文書ライブラリに拡張。',
          '[Windows/Mac/Linuxで最も簡単なローカルAIアプリ](/ja/power-local-llm/easiest-local-ai-app-windows-mac-linux) — ライティングアシスタントを構築する前に、まずローカルAIアプリをセットアップしたい場合。',
          '[ビジネスワークフロー向けローカルAIエージェント：EUコンプライアンス](/ja/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — 欧州市場向け展開のGDPRとEU AI Act文脈、APAC案件にも参考。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/replace-grammarly-notion-ai-with-local-overview-hero-zh.webp',
    title: '用本地 LLM 替代 Grammarly 与 Notion AI（2026）',
    seoTitle: '本地 Grammarly 替代方案：最佳小型 LLM 2026',
    intro:
      'Grammarly 与 Notion AI 把您的文本送往云端服务器处理 — 邮件草稿、机密文档、个人笔记按设计都会经过第三方系统。通过 Ollama 或 LM Studio 运行的本地 LLM，可以在大多数写作任务上替代二者：语法与文风修改、文档起草、内容摘要、AI 辅助笔记 — 文本不离开您的机器。本文介绍哪些小模型擅长语法纠错、在 Google Docs 与 Notion 中哪些做法可行，以及与 Grammarly 之间仍然存在的差距。',
    metaDescription:
      '本地 Grammarly 替代方案：语法纠错的最佳小型 LLM、Google Docs 与 Notion 的可行做法，以及让文本留在本机的 Ollama 方案。',
    twitterDescription:
      '用本地 LLM 替代 Grammarly 与 Notion AI：语法纠错的最佳小模型、Google Docs 与 Notion 方案、Ollama 部署 — 文本不离开您的机器。',
    current_models_mentioned: [
      'Qwen3.5 4B',
      'Gemma 4 E4B',
      'Gemma 4 12B',
      'Qwen3.8 27B',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M3 MacBook Air 8 GB',
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 3060 12 GB',
    ],
    audience:
      '使用 Grammarly 做写作修改、用 Notion AI 做文档辅助的知识工作者、写作者、学生与重视隐私的专业人士，希望用一套本地 AI 替换二者并保持内容私密。',
    readTime: '阅读约13分钟',
    educationalLevel: 'Beginner',
    primaryTerm: '本地 LLM 替代 Grammarly',
    targetKeywords: [
      '本地 LLM 替代 Grammarly',
      '本地 Grammarly 替代方案',
      '语法纠错最佳 LLM',
      '小型 LLM 语法纠错',
      '本地替代 Notion AI',
      'Notion Ollama',
      '本地 LLM 写作助手',
      'Grammarly 替代 无云',
      'Notion AI 替代 隐私',
      'Ollama 写作修改',
    ],
    leadAnswerBlock:
      '**通过 Ollama 运行的本地 LLM 可替代 Grammarly 与 Notion AI 的核心功能，而无需把文本发往云服务。Grammarly 替代：用一条提示词模板（"请修正以下段落的语法并改进文风。仅返回修正后的正文。"）配合 Qwen3.5 4B 及以上的任一模型，即可完成语法与文风修改。Notion AI 替代：在 Obsidian 中安装 Copilot 或 Smart Connections 插件并指向 Ollama，实现文档起草与笔记问答。隐私差异是具体的：Grammarly 服务条款（第 7.2 条）授予其为运营和改进服务而使用您内容的许可，Notion AI 会把请求转发给第三方模型提供方，而本地模型在您自己的硬件上处理同样的文本。日常写作的差距很小，最大的差距集中在两处：Google Docs、Gmail 等浏览器编辑器中的边打字边检查，以及特定领域的文风建议。**',
    quickAnswerTop: {
      zh: {
        question: '本地 LLM 能替代 Grammarly 与 Notion AI 吗？',
        answer:
          '在大多数日常场景下可以。Grammarly：本地 LLM 可处理语法修改、清晰度改写、被动语态消除与基础语气调整。它无法做到 Grammarly 的实时内联建议或浏览器扩展集成，但用提示词工作流可按需覆盖相同的修改。Notion AI：Obsidian 加 Copilot 插件指向 Ollama，可以替代文档起草、内容扩写与笔记问答。Notion 未记载将 Notion AI 本身指向本地模型的方法。起点建议：Qwen3.5 4B（下载约 3–4 GB，适合 8 GB 系统）、Gemma 4 12B（16 GB 系统）或 Qwen3.8 27B（24 GB 及以上）— 目前没有针对语法纠错的基准测试为它们排名，请用自己的段落测试其中两个。',
        bullets: [
          '语法修改：任何遵循指令的本地模型，只要带上"仅修正语法、仅返回修改后正文"的系统提示词，即可覆盖 Grammarly 的核心纠错用例。',
          '小模型：Qwen3.5 4B 与 Phi-4 Mini 适合 8 GB 设备；Gemma 4 12B 是 16 GB 设备上做文风改写的进阶之选。',
          'Notion AI 替代：Obsidian + Copilot 插件（或 Smart Connections 插件）指向 Ollama — 笔记 AI 问答、文档起草、内容扩写。',
          '实时修改：本地 LLM 不会在 Google Docs 或 Gmail 中边打字边划线标错。可用热键/侧栏工作流，或用 Harper 这类本地规则型检查器在受支持的编辑器中获得内联划线。',
          '隐私：Grammarly 依据条款第 7.2 条获得您内容的使用许可；Notion AI 把请求发送给第三方模型提供方。本地 LLM 在本地处理，无外部传输。',
          '成本：Grammarly Pro 起价约 $12/月（年付）；Notion AI 已并入 Business 套餐（约 $20/用户/月）。本地 LLM 在硬件成本之外免费。',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '速览事实', anchor: '#quick-facts' },
      { label: '能替代什么（不能替代什么）', anchor: '#what-you-replace' },
      { label: '替代 Grammarly：语法与文风', anchor: '#grammarly-replacement' },
      { label: '本地语法纠错的最佳小型 LLM', anchor: '#small-models-grammar' },
      { label: '无云的 Google Docs、Gmail 与内联检查', anchor: '#google-docs-inline' },
      { label: '替代 Notion AI：文档与笔记', anchor: '#notion-replacement' },
      { label: 'Notion 与 Ollama：能连什么、不能连什么', anchor: '#notion-ollama' },
      { label: '集成方案', anchor: '#integrations' },
      { label: '模型推荐', anchor: '#models' },
      { label: '隐私对比', anchor: '#privacy' },
      { label: '成本对比', anchor: '#cost' },
      { label: '常见误区', anchor: '#common-mistakes' },
      { label: '参考来源', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**本地 LLM 替代 Grammarly 的核心功能 — 语法、清晰度、基础文风修改 — 但不替代其实时内联集成。** 工作流从"边打字边出建议"变为"选中文本 → 拿到修改版 → 粘回原处"。对许多人来说，这是换取完整隐私的可接受代价。',
          '**Notion AI 的替代更完整，但意味着要离开 Notion 的 AI。** Notion 未记载将 Notion AI 指向本地模型的方法。Obsidian 加 Copilot 插件（或 Smart Connections 插件）指向本地 Ollama，可对齐文档起草、内容扩写与笔记 AI 问答 — 全部本地处理。若想留在 Notion 中，只能通过 Notion API 自行运行 AI 这一步。',
          '**隐私论点不是空谈。** Grammarly 服务条款（第 7.2 条）授予其为运营、改进和开发服务而使用您内容的许可。Notion AI 把请求发送给第三方模型提供方；Notion 表示默认情况下其自身及提供方均不使用客户数据训练模型。本地 LLM 在您的硬件上处理同一文本，无外部传输。',
          '**语法纠错用小模型就够了。** Qwen3.5 4B 与 Phi-4 Mini 适合 8 GB 设备；Gemma 4 12B 适合 16 GB 系统与文风改写。目前没有公开基准为它们的语法纠错能力排名，定下来之前请用自己的段落测试两个模型。',
          '**想要内联划线，就再加一个规则型检查器。** Harper（本地运行，仅限英文）和自托管的 LanguageTool 服务器可在受支持的编辑器中边打字边划线标错。Harper 的支持列表中没有 Google Docs，因此在那里仍是"选中 → 改写 → 粘贴"的流程。',
          '**成本是次要论据。** Grammarly Pro 起价约 $12/月（年付）；Notion AI 现已并入 Business 套餐（约 $20/用户/月），不再是单独的附加项。本地 LLM 方案在一次性硬件成本之后免费。',
          '**部署约需 20 分钟。** 安装 Ollama、下载模型、配置 Obsidian 插件是一次性工作。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '速览事实',
        items: [
          '**Grammarly 价格：** 免费（每月 100 次 AI 提示），Pro 起价约 $12/月（年付，每月 2,000 次 AI 提示），Enterprise 定制。',
          '**Notion AI 价格：** 包含在 Business 套餐中（约 $20/用户/月，年付）；Free 与 Plus 套餐仅有试用。',
          '**本地 LLM 价格：** 免费（开源模型 + Ollama） — 仅承担硬件电费。',
          '**小模型起点：** 8 GB 设备用 Qwen3.5 4B（`qwen3.5:4b`）或 Phi-4 Mini（`phi4-mini`）；16 GB 用 Gemma 4 12B（`gemma4:12b`）；24 GB 及以上用 Qwen3.8 27B（`qwen3.8:27b`）。',
          '**Grammarly 隐私：** 服务条款第 7.2 条授权其为运营、改进和开发 Grammarly 服务而使用您的内容。',
          '**Notion AI 隐私：** 请求发往第三方模型提供方；默认情况下 Notion 及其提供方均不使用客户数据训练模型。',
          '**Obsidian 价格：** 自 2025 年 2 月起，个人与工作使用均免费。',
        ],
      },
      whatYouReplace: {
        id: 'what-you-replace',
        title: '能替代什么（不能替代什么）',
        content:
          '**本地 LLM 可覆盖 Grammarly 与 Notion AI 的大部分日常用法，但它未覆盖的部分对一些用户依然重要。** 切换前先理解这道差距，可以避免落差。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '本地 LLM 可替代 Grammarly 的语法修改、文风改写、语气调整，以及 Notion AI 的文档起草和笔记问答 — 但不能替代 Grammarly 的实时内联集成或 Notion AI 的原生编辑器集成。',
          },
          {
            type: 'plain-terms',
            text: 'Grammarly 通过监视您在浏览器或桌面端的输入、边打字边显示修改建议来工作。本地 LLM 自己做不到这一点。它能做的，是修改任何交给它的文本 — 工作流变成：写好邮件、选中文本、发送到本地 AI 应用或热键工具、拿到修改版、粘贴回 Gmail。比内联修改慢一点，但私密且免费。',
          },
        ],
        columns: ['功能', 'Grammarly', '本地 LLM 等价做法', '差距'],
        rows: [
          { '功能': '语法修改', 'Grammarly': '内联、实时', '本地 LLM 等价做法': '基于提示词、按需触发', '差距': '没有实时内联；走复制-粘贴' },
          { '功能': '文风建议', 'Grammarly': '内联并附说明', '本地 LLM 等价做法': '提示词驱动改写', '差距': '默认无逐条解释' },
          { '功能': '语气检测', 'Grammarly': '自动、命名语气', '本地 LLM 等价做法': '提示词中指定目标语气', '差距': '需要显式语气说明' },
          { '功能': '浏览器扩展', 'Grammarly': '在 Gmail、Google Docs、浏览器字段中工作', '本地 LLM 等价做法': '复制-粘贴、热键或侧栏应用', '差距': '没有原生浏览器集成' },
          { '功能': 'Notion AI：文档起草', 'Grammarly': '不适用', '本地 LLM 等价做法': 'Obsidian + Copilot 插件 → Ollama', '差距': '不内嵌于 Notion UI；为独立应用' },
          { '功能': 'Notion AI：笔记问答', 'Grammarly': '不适用', '本地 LLM 等价做法': 'Obsidian Smart Connections → Ollama', '差距': '需 Obsidian 仓库；无法搜索 Notion 数据库' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '集成差距对那些主要在 Gmail、Google Docs 或其他浏览器编辑器中写作的人影响最大，那里 Grammarly 会显示内联修改。如果您主要在桌面应用中写作（Word、Obsidian、VS Code、Scrivener），本地 LLM 的复制-粘贴流程比内联建议只稍慢一点点。决策前先盘点自己的写作环境。',
          },
        ],
      },
      grammarlyReplacement: {
        id: 'grammarly-replacement',
        title: '替代 Grammarly：语法与文风',
        content:
          '**Grammarly 替代工作流由几条提示词模板加一个热键应用组成。** 一条用于纯语法修改，一条用于完整文风改写，一条用于语气。在常见笔记本硬件上，段落级文本几秒内即可返回；速度取决于模型大小和硬件。',
        promptExamples: [
          {
            label: '纯语法修改（Grammarly 基础替代）',
            text: '请修正下文的语法、拼写与标点。仅返回修改后的正文 — 不要解释、不要标记、不要总结。\n\n[粘贴文本]',
          },
          {
            label: '文风与清晰度改写（Grammarly Premium 替代）',
            text: '请改写下文以提升清晰度与专业语气。修正语法，去除被动语态，压缩冗长句，删除填充表达。仅返回改写后的正文。\n\n目标语气：[专业 / 随意 / 学术 / 说服性]\n目标读者：[大众 / 技术 / 高管]\n\n[粘贴文本]',
          },
          {
            label: '语气调整提示词',
            text: '请把下面的邮件改写得[更正式 / 更随意 / 更简洁 / 更外交]。保留所有事实信息不变。仅返回改写后的邮件。\n\n[粘贴邮件]',
          },
          {
            label: '个人文风档案（在本地分析您自己的写作）',
            text: '下面是三段我的写作样本。请用 8 个要点描述我的文风：典型句长、词汇水平、语气、偏好的句式、标点习惯，以及我避免使用的表达。然后写一段 100 字的系统提示词，让编辑模型在修改文本时保持这种文风。\n\n样本 1：[粘贴]\n样本 2：[粘贴]\n样本 3：[粘贴]',
          },
        ],
        items: [
          '**写作会话的系统提示词：** 把本地 AI 应用的系统提示词设为"你是一位专业编辑。仅返回修改或改写后的正文 — 不要前言、不要解释、不要评论"。这能阻止模型在输出前加上"很棒的文本！这是我的修改..."。',
          '**热键集成：** 用 Raycast（macOS）或 AutoHotkey（Windows）创建一个热键，把所选文本送到 Ollama 并粘贴结果。这样复制-粘贴流程被压缩为一次按键。请注意，Raycast 手册将本地模型支持列为 Pro 功能；调用 Ollama API 的 AutoHotkey 脚本则是免费的。',
          '**纯语法 vs 文风改写：** 把语法修正与文风改写用作两条独立提示词。法律、技术或结构化文档建议优先用纯语法版，避免改写改变原意。文风改写适合邮件、博客与一般书信。',
          '**学术写作：** 在文风改写提示词中加上"保留所有引用、术语与领域词汇不变"。否则模型有时会把术语简化或意译。',
          '**商务邮件：** 加上"发件人为 [姓名]，[职位]（公司：[公司]）。邮件应反映其专业声线，输出中不出现个性化细节"。这能把语域锚定在发件人的职业语境上。',
          '**在本地分析自己的文风：** 上面的文风档案提示词可把三段写作样本变成可重复使用的系统提示词。由于样本不会离开您的机器，可以放心用于私人草稿 — 而云端助手则必须先接收这些内容。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'macOS 上的快捷工作流：安装 Ollama、拉取 Gemma 4 12B 之类的模型，并在 Raycast 中创建带语法修改提示词的 AI 命令（Raycast 中使用本地模型需要 Pro 订阅）。在任意应用中选中文本、触发热键，修改版即替换选区。Windows 上，用 AutoHotkey 脚本把所选文本 POST 到 Ollama API，可达到同样效果且无需订阅。',
          },
        ],
      },
      smallModelsGrammar: {
        id: 'small-models-grammar',
        title: '本地语法纠错的最佳小型 LLM',
        content:
          '**做语法纠错，8 GB 设备先试 Qwen3.5 4B，16 GB 设备先试 Gemma 4 12B；两者都能遵循"仅返回修改后正文"的指令，并可在普通笔记本上运行。** 语法纠错主要考验指令遵循：模型必须尽量少改，并且只返回修改后的正文。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '本地语法纠错的最佳小型 LLM，就是能改掉您的错误、又不改动原本正确措辞的最小的指令遵循模型 — Qwen3.5 4B、Phi-4 Mini 与 Gemma 4 12B 是合理的起点，目前没有公开基准为它们的语法能力排名。',
          },
          {
            type: 'plain-terms',
            text: '语法纠错不需要大模型，它需要的是一个会服从"只改错误"的模型。装两个候选模型，把同样的五段文字分别粘贴进去，保留改动最少、同时能抓出您错误的那个。这个测试只要十分钟，比任何排行榜都更有参考价值。',
          },
        ],
        columns: ['模型', 'Ollama 标签', '下载大小', '适配内存', '最适合'],
        rows: [
          { '模型': 'Phi-4 Mini', 'Ollama 标签': 'phi4-mini', '下载大小': '~2.5 GB', '适配内存': '8 GB RAM', '最适合': '快速简单的修改；以英文为主' },
          { '模型': 'Qwen3.5 4B', 'Ollama 标签': 'qwen3.5:4b', '下载大小': '~3.3–4 GB', '适配内存': '8 GB RAM', '最适合': '纯语法修改、短邮件、多语言' },
          { '模型': 'Gemma 4 E4B', 'Ollama 标签': 'gemma4:e4b', '下载大小': '~6.6–9.5 GB', '适配内存': '16 GB RAM', '最适合': '多语言文本、轻度文风润色' },
          { '模型': 'Gemma 4 12B', 'Ollama 标签': 'gemma4:12b', '下载大小': '~7.7–8 GB', '适配内存': '16 GB RAM', '最适合': '文风改写与语气调整' },
          { '模型': 'Qwen3.8 27B', 'Ollama 标签': 'qwen3.8:27b', '下载大小': '~18 GB', '适配内存': '24 GB+ RAM/VRAM', '最适合': '较长、细腻的改写' },
        ],
        items: [
          '**没有针对语法的基准测试为这些模型排名。** 厂商公布的是通用的指令遵循结果，而不是语法纠错准确率。请以您自己的文本为准。',
          '**测试时要检查什么：** 过度修改（本来没问题的措辞被改了）、含义被改变（数字、名称、否定）、是否保留了拼写变体（英式 vs 美式），以及模型是否只返回正文。',
          '**语言：** Qwen3.5 与 Gemma 4 支持多语言；Phi-4 Mini 主要面向英文。处理非英文文本时，请先用您的语言测试。',
          '**保持确定性：** 较低的 temperature（约 0.2）可减少随意改写。下面的 Modelfile 把编辑指令和 temperature 固化进一个可重复使用的模型。',
          '**长文档：** 小模型在长输入上容易跑偏。请逐章节修改，而不要粘贴整篇文档。',
        ],
        codeBlock:
          'FROM qwen3.5:4b\nPARAMETER temperature 0.2\nSYSTEM """You are a copy editor. Fix grammar, spelling, and punctuation only. Keep the author\'s wording, meaning, and spelling variant. Return only the corrected text."""\n\n# then run:\n#   ollama create grammar-fix -f Modelfile\n#   ollama run grammar-fix',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: '如果模型在修改后的正文之前输出推理过程或前言，请换成非推理版本或其他模型。每次回答都附带评论的语法工具，比手动校对还慢。',
          },
        ],
      },
      googleDocsInline: {
        id: 'google-docs-inline',
        title: '无云的 Google Docs、Gmail 与内联检查',
        content:
          '**此处评测的本地工具均未把 Google Docs 列为受支持的编辑器，因此 Google Docs 的实用做法是：用热键或侧栏处理 LLM 改写，再在受支持的地方搭配本地规则型检查器获得内联划线。** LLM 与规则型检查器分工不同：LLM 按需改写，检查器则在您打字时划线标错。',
        columns: ['工具', '类型', '适用位置', '限制'],
        rows: [
          { '工具': '[Harper](https://writewithharper.com)', '类型': '规则型，本机运行，无 LLM', '适用位置': 'Chrome、Edge、Firefox、Obsidian、VS Code、macOS 应用', '限制': '仅限英文；未列出 Google Docs' },
          { '工具': '[LanguageTool](https://dev.languagetool.org/http-server)（自托管）', '类型': 'localhost 上的规则型服务器', '适用位置': '浏览器插件的"本地服务器"设置', '限制': '实验性设置；需运行 Java 服务器' },
          { '工具': '[Page Assist](/zh/local-llms/page-assist-review)', '类型': 'Ollama 聊天侧栏', '适用位置': 'Chrome 与 Firefox 侧栏', '限制': '基于聊天；需自行粘贴回结果' },
          { '工具': '热键 + Ollama', '类型': '用 LLM 改写所选文本', '适用位置': '任意应用，含 Google Docs', '限制': 'Raycast（Pro）或 AutoHotkey 脚本' },
        ],
        items: [
          '**Google Docs 工作流：** 在 Docs 中开启"建议"模式，选中一段文字，通过热键或侧栏送去处理，再粘贴修改后的正文。"建议"模式会让每一处改动都可供审阅。',
          '**Gmail：** Harper 的官网指出，除非关闭 Gmail 内置的语法检查器，否则不支持 Gmail。邮件草稿请使用"选中并改写"的工作流。',
          '**最佳组合：** 在受支持的编辑器中用规则型检查器做内联划线，再用本地 LLM 做改写、语气与摘要。这是最接近 Grammarly "划线 + AI 改写"组合的本地方案。',
          '**自托管 LanguageTool：** 下载 LanguageTool 服务器，在 localhost 上启动，然后在浏览器插件的"实验性设置"中选择"本地服务器"。除非您用公开选项启动，否则该服务器只能从您自己的机器访问。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '规则型检查器无需 GPU，也不增加延迟。先装一个，再只为规则型检查器做不了的改写工作加上 LLM。',
          },
        ],
      },
      notionReplacement: {
        id: 'notion-replacement',
        title: '替代 Notion AI：文档与笔记',
        content:
          '**搭配本地 Ollama 后端的 Obsidian，是面向笔记与知识工作者最接近 Notion AI 的功能等价方案。** 它不复刻 Notion 的数据库结构，但在文档起草和笔记 AI 问答上能力相当 — 而且完全本地处理。',
        image: '/images/replace-grammarly-notion-ai-with-local-notion-ai-setup-flow-en.svg',
        imageCaption: '在 Obsidian 中配置 Notion AI 替代方案：安装 Ollama 并拉取模型，安装 Obsidian，添加指向 localhost:11434 的 Copilot 插件，添加 Smart Connections 以支持全仓库问答，然后完全在本地起草文档并查询笔记。',
        items: [
          '**安装 Obsidian**：从 [obsidian.md](https://obsidian.md) 下载，个人与工作使用均免费。为笔记新建一个仓库（Vault） — 这是 AI 插件将索引的目录。',
          '**安装 Copilot 插件**（社区插件 → 搜索 "Copilot"；参见 [Copilot for Obsidian 评测](/zh/power-local-llm/copilot-for-obsidian-review)）。在插件设置中将 LLM 提供方选择为 "Ollama"，把基础 URL 设为 `http://localhost:11434` 并选择模型。Copilot 会在 Obsidian 中加入聊天侧栏，可在当前笔记上下文中提问与生成内容。',
          '**安装 Smart Connections 插件**：用于全仓库问答。Smart Connections 通过本地嵌入模型把所有笔记索引为向量，在向 LLM 发送之前先检索相关笔记。这是 Notion AI "对我的笔记提问" 的直接替代。',
          '**文档起草：** 在 Copilot 聊天里输入"基于以下笔记起草一份[文档类型]：[粘贴要点]"。插件会自动包含当前笔记的上下文。输出在聊天中出现，复制粘贴回笔记即可。',
          '**内容扩写：** 选中笔记中的要点提纲，打开 Copilot 命令面板并执行"扩写所选" — 模型会按笔记的写作语域把提纲转换为散文。',
          '**生成周回顾：** "把我本周的笔记按周回顾格式总结：成果、阻塞、下一步行动。" Smart Connections 会自动检索过去 7 天的笔记并交给 LLM。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Obsidian 配合 Copilot 或 Smart Connections 插件并指向本地 Ollama 实例，可替代 Notion AI 的文档起草、内容扩写与笔记问答 — 全部本地处理，不向任何外部服务器发送内容。',
          },
          {
            type: 'plain-terms',
            text: '部署步骤：安装 Obsidian，安装 Ollama，拉取模型，在 Obsidian 安装 Copilot 社区插件，将其指向 localhost:11434。这就是 Notion AI 各项 AI 功能的替代方案。笔记仍以纯 Markdown 文件存放在您指定的仓库目录（完全可移植）。AI 聊天在本机运行。一切都不离开您的电脑。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Obsidian 把笔记保存为您完全掌控的目录中的纯 Markdown 文件。与 Notion 的私有数据库格式不同，您的笔记在任何文本编辑器中都可读、随时可导出。这是相对 Notion 的第二项隐私与可移植性优势 — 知识库不会被锁在云平台中。',
          },
        ],
      },
      notionOllama: {
        id: 'notion-ollama',
        title: 'Notion 与 Ollama：能连什么、不能连什么',
        content:
          '**Notion 未记载将 Notion AI 指向本地模型的方法，所以"Notion + Ollama"要么意味着在 Notion 之外运行 AI 这一步，要么意味着把笔记迁出 Notion。** Notion 公布的定价与安全页面说明其 AI 运行在 Notion 自行选择的模型提供方上，没有可填写自有端点的设置。Notion 本身也是云端工作区，而不是本地数据库 — 不存在可供模型连接的本地 Notion 数据库。',
        items: [
          '**方案 1 — 通过 Notion API 写脚本：** 一个小脚本通过 Notion API 读取页面，把文本发送给 `localhost:11434` 上的 Ollama，再把结果作为新块写回。模型这一步在本地；页面本身仍存放在 Notion 的服务器上，所以只是去掉了 AI 提供方这一环。',
          '**方案 2 — Notion MCP：** Notion 托管了一个 MCP 服务器（OAuth 登录），MCP 客户端可用它读取和更新页面。Notion 以 Claude Code、Cursor 和 Codex 作为示例客户端；某个客户端能否驱动本地模型，需要向该客户端确认。',
          '**方案 3 — 把 AI 密集型笔记迁到本地优先的应用：** 如上所述的 Obsidian（纯 Markdown 文件）搭配 Copilot，或 [AppFlowy](https://appflowy.com)，一个开源（AGPL-3.0）的 Notion 风格工作区，据其对比页面提供离线模式和本地 AI 选项。具体的本地模型配置请查阅 AppFlowy 文档。',
          '**本地模型不会改变什么：** 已在 Notion 中的内容仍由 Notion 存储。在其上运行本地模型只是去掉了 AI 提供方这一环，并不改变 Notion 的存储。',
          '**Notion 对自家 AI 的说法：** 默认情况下 Notion 及其 AI 提供方均不使用客户数据训练模型；在 Enterprise 套餐上，多数模型提供零数据保留，而在其他套餐上，提供方最多保留数据 30 天。',
        ],
        codeBlock:
          'import requests\n\nNOTION = {"Authorization": "Bearer <NOTION_TOKEN>", "Notion-Version": "2022-06-28"}\nPAGE_ID = "<page-id>"\n\n# 1. read the page text through the Notion API\nblocks = requests.get(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION).json()["results"]\ntext = "\\n".join(\n    "".join(t["plain_text"] for t in b["paragraph"]["rich_text"])\n    for b in blocks if b["type"] == "paragraph"\n)\n\n# 2. rewrite it with a local model (Ollama on localhost)\nr = requests.post("http://localhost:11434/api/generate", json={\n    "model": "gemma4:12b", "stream": False,\n    "prompt": "Correct the grammar of this text. Return only the corrected text.\\n\\n" + text,\n})\nfixed = r.json()["response"]\n\n# 3. append the result as a new paragraph block\nrequests.patch(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION, json={\n    "children": [{"object": "block", "type": "paragraph",\n                  "paragraph": {"rich_text": [{"type": "text", "text": {"content": fixed[:2000]}}]}}]\n})',
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: '该脚本只会把您的 Notion 令牌和页面内容发送给 Notion 和 localhost。请不要把令牌放进共享文件；另请注意，Notion 的富文本块每块约接受 2,000 个字符，因此较长的输出必须拆分成多个块。',
          },
        ],
      },
      integrations: {
        id: 'integrations',
        title: '集成方案',
        content:
          '**集成分四档：基础（复制-粘贴）、中级（热键应用或写作应用）、内联（规则型检查器）、高级（自定义浏览器扩展）。** 选择与自己技术舒适度匹配的档位起步。',
        columns: ['集成档位', '方式', '应用', '适用场景'],
        rows: [
          { '集成档位': '基础（复制-粘贴）', '方式': '打开本地 AI 应用、粘贴文本、复制结果', '应用': 'LM Studio 聊天、Ollama CLI、Open WebUI', '适用场景': '偶尔修改；适用所有操作系统' },
          { '集成档位': '中级（热键）', '方式': '选中文本 → 热键 → 修改版替换选区', '应用': 'Raycast AI（macOS，Pro）、AutoHotkey + Ollama（Windows）', '适用场景': '在任意应用频繁修改；最小化工作流改动' },
          { '集成档位': '中级（写作应用）', '方式': '写作工具内置 AI 助手', '应用': 'Obsidian + Copilot 插件、VS Code + Continue.dev', '适用场景': '日常重度使用这些应用的写作者与开发者' },
          { '集成档位': '内联（规则型）', '方式': '本地检查器在您打字时划线标错', '应用': 'Harper、自托管 LanguageTool', '适用场景': '无需 GPU 的边打字边反馈' },
          { '集成档位': '高级（浏览器扩展）', '方式': '自定义扩展把所选文本发往本地 Ollama API', '应用': '自研 Chrome/Firefox 扩展（GitHub 上有开源模板）', '适用场景': '想要 Grammarly 风格浏览器集成的高级用户' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '在 macOS 上，如果您有 Pro，带自定义 AI 命令的 Raycast 是快速的中级方案：创建带语法修改提示词的 AI 命令并分配热键，在任意应用中选中文本、按下热键，修改版即替换选区。没有 Pro 时，请使用 Ollama CLI 或 Open WebUI 之类的聊天客户端。',
          },
        ],
      },
      models: {
        id: 'models',
        title: '写作任务模型推荐',
        content:
          '**写作辅助偏好指令跟随强、散文输出连贯的模型。** 排序与编程或数学场景不同。下面的推荐是按模型大小和指令遵循能力选出的起点，而不是语法基准测试的结果。',
        columns: ['任务', '最佳模型', '替代（更低 VRAM）', '原因'],
        rows: [
          { '任务': '语法修改', '最佳模型': 'Gemma 4 12B', '替代（更低 VRAM）': 'Qwen3.5 4B / Phi-4 Mini', '原因': '能遵循"只改错误、返回正文"的提示' },
          { '任务': '文风改写', '最佳模型': 'Gemma 4 12B 或 Qwen3.8 27B', '替代（更低 VRAM）': 'Qwen3.5 4B', '原因': '在措辞与语域上余量更大' },
          { '任务': '语气调整', '最佳模型': 'Qwen3.8 27B', '替代（更低 VRAM）': 'Gemma 4 12B', '原因': '较大模型通常能更稳地保留事实' },
          { '任务': '文档起草（Notion AI 替代）', '最佳模型': 'Gemma 4 12B', '替代（更低 VRAM）': 'Qwen3.5 4B', '原因': '能遵循文档格式指令' },
          { '任务': '笔记摘要 / 问答', '最佳模型': 'Gemma 4 12B', '替代（更低 VRAM）': 'Qwen3.5 4B / Phi-4 Mini', '原因': '小尺寸模型做摘要也表现良好' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '在系统提示词中加入"避免 AI 腔短语"的指令。模型默认会用犹豫的 AI 腔（"当然！这是修改后的版本..."）。一条"仅返回修改后的正文，不要前言、不要评论"的系统提示词可以消除这一点。文风改写时再加："不要使用\'深入探讨\'、\'织锦\'、\'促进\'、\'……的领域\'、\'值得注意的是\'这些表达。"',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私对比',
        content:
          '**云端写作助手与本地 LLM 的隐私差异是结构性的。** 云服务不收到文本就无法处理；本地 LLM 不主动建立外部连接就无法把文本发出去。',
        image: '/images/replace-grammarly-notion-ai-with-local-cost-privacy-overview-en.svg',
        imageCaption: '云端写作工具与本地 LLM 对比：Grammarly 和 Notion AI 以 2 个独立付费订阅的形式运行，并将文本发送到云端服务器；而 Ollama 与 Obsidian 则将所有写作和笔记保留在本地设备上，没有持续的软件费用。',
        items: [
          '**Grammarly 数据许可：** 依据 [Grammarly 服务条款](https://www.grammarly.com/terms)第 7.2 条，您保留内容的所有权，但授予 Grammarly 一项全球范围、非排他、免许可费的许可，可为所述目的使用您的内容，包括运营、提供和改进其服务，以及开发新产品或功能。条款还提到，接受或拒绝建议可能有助于训练其建议引擎。Grammarly 表示，其 LLM 合作伙伴不得使用客户数据训练其模型。',
          '**Notion AI 数据流：** Notion 把 AI 请求路由到多家模型提供方（当前名单见其子处理者页面）。Notion 表示默认情况下其自身及 AI 提供方均不使用客户数据训练模型。Enterprise 套餐与 LLM 提供方之间为零数据保留；其他套餐上，提供方最多保留数据 30 天。',
          '**本地 LLM 数据流：** 无外部传输。Ollama 默认监听 localhost，推理过程不建立任何出站连接。模型权重是磁盘上的静态文件；您的文本在内存中处理。',
          '**GDPR / 职业保密义务的影响：** 律师、医疗从业者以及任何负有保密义务的人，在用 Grammarly 或 Notion AI 处理与客户相关的内容之前，应核对合同层面的保护措施。本地 LLM 因为没有数据离开机器，从而避开了第三方处理者的问题。',
          '**遥测：** 云端工具除文本本身外，还会采集使用与交互数据。本地应用各有不同 — 请检查各应用的遥测设置；如果需要审计级保证，请自行监控出站流量。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '如果您把 Grammarly 用于工作邮件、合同草稿或任何受保密义务约束的内容 — 在认定其受保护之前，先核对组织的数据政策与现行有效的企业数据条款。',
          },
        ],
      },
      cost: {
        id: 'cost',
        title: '成本对比',
        content:
          '**替换两款工具可省去 Grammarly 订阅，以及 Notion 套餐中的 AI 部分。** 本地 LLM 部署的软件成本为零，唯一持续成本是电费。',
        columns: ['工具', '月费', '年费', '备注'],
        rows: [
          { '工具': '[Grammarly Free](https://www.grammarly.com/plans)', '月费': '$0', '年费': '$0', '备注': '每月 100 次 AI 提示；基础检查' },
          { '工具': '[Grammarly Pro](https://www.grammarly.com/plans)', '月费': '约 $12/月起', '年费': '约 $144/年起', '备注': '每月 2,000 次 AI 提示；按月付费更高' },
          { '工具': '[Notion AI](https://www.notion.com/pricing)', '月费': '含于 Business（约 $20/用户）', '年费': '约 $240/用户/年', '备注': 'Free 与 Plus 仅试用；无单独附加项' },
          { '工具': '[Ollama（本地 LLM）](https://ollama.com)', '月费': '$0', '年费': '$0', '备注': '免费开源；仅电费' },
          { '工具': '[Obsidian（替代 Notion）](https://obsidian.md)', '月费': '$0', '年费': '$0', '备注': '个人与工作使用免费' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '如果还在犹豫，先把语法修改这一项放到本地模型上试 30 天。保留 Grammarly 用于浏览器集成。评估本地修改质量与复制-粘贴流程能否满足您的写作需要，再决定是否退订 Grammarly。如果接受 Obsidian 作为笔记层，Notion AI 的切换阻力更小。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见误区',
        items: [
          '**没有为输出格式设置系统提示词。** 没有系统提示词时，模型会在修改前加"当然！下面是修改后的文本："之类前言，附带解释并使用 AI 腔。请始终设置一条系统提示词，明确"仅返回修改后的正文"。',
          '**用最小的模型做复杂文风改写。** 小模型处理语法修改没问题，但文风改写往往更套路化。重视文风的工作请升级到 Gemma 4 12B 或更大的模型。',
          '**期待 Obsidian 与 Notion 在 UI 上对等。** Obsidian 是 Markdown 编辑器，不是数据库。如果您的 Notion 工作流依赖数据库、视图与关联属性，Obsidian 不是完整替代 — 只能迁移 AI 功能。切换前先评估数据库功能是否关键。',
          '**文风改写没有设字数上限。** 没有上限时，模型会把改写写得越来越长。在文风改写提示词里加上"改写后的文本控制在原文字数 ±10% 以内"。',
          '**把整篇长文档丢给小模型。** 小模型在长输入上容易跑偏。长文档应拆成章节，分别修改。',
          '**期待 LLM 提供内联划线。** LLM 是被问才答，它不会盯着您打字。想要边打字边划线，请加一个本地规则型检查器，例如 Harper。',
          '**以为 Notion AI 可以使用本地模型。** Notion 未记载对此的支持；请通过 Notion API 配合 Ollama，或把 AI 密集型笔记迁到本地优先的应用。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          'Grammarly 服务条款 — 第 7.2 条（用户内容许可） — [grammarly.com/terms](https://www.grammarly.com/terms)',
          'Grammarly 套餐 — [grammarly.com/plans](https://www.grammarly.com/plans)',
          'Grammarly 负责任的 AI（合作伙伴数据使用） — [grammarly.com/responsible-ai](https://www.grammarly.com/responsible-ai)',
          'Notion 定价与 AI 套餐权限 — [notion.com/pricing](https://www.notion.com/pricing)',
          'Notion AI 安全实践（提供方、训练、保留） — [notion.com/help/notion-ai-security-practices](https://www.notion.com/help/notion-ai-security-practices)',
          'Notion MCP 文档 — [developers.notion.com/docs/mcp](https://developers.notion.com/docs/mcp)',
          'Obsidian 工作使用免费（2025 年 2 月） — [obsidian.md/blog/free-for-work](https://obsidian.md/blog/free-for-work/)',
          'Harper 语法检查器 — [writewithharper.com](https://writewithharper.com)',
          'LanguageTool HTTP 服务器（自托管） — [dev.languagetool.org/http-server](https://dev.languagetool.org/http-server)',
          'Raycast 本地模型 — [manual.raycast.com/ai/local-models](https://manual.raycast.com/ai/local-models)',
          'Ollama 模型库 — [ollama.com/library/gemma4](https://ollama.com/library/gemma4), [ollama.com/library/qwen3.5](https://ollama.com/library/qwen3.5), [ollama.com/library/qwen3.8](https://ollama.com/library/qwen3.8)',
          'Obsidian Copilot 插件文档 — [GitHub: logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot)',
          'Obsidian Smart Connections 插件 — [GitHub: brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections)',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '哪些小型 LLM 适合做本地语法纠错？',
            a: 'Qwen3.5 4B（`qwen3.5:4b`，约 3–4 GB）与 Phi-4 Mini（`phi4-mini`）适合 8 GB 设备；Gemma 4 12B（`gemma4:12b`）适合 16 GB 系统与文风改写；Qwen3.8 27B 适合 24 GB 及以上。目前没有公开基准为它们的语法纠错能力排名，所以请用自己的五段文字测试其中两个，保留改动最少、同时能抓出错误的那个。请使用"只改错误、仅返回修改后正文"的系统提示词和较低的 temperature。',
          },
          {
            q: '有能在 Google Docs 中使用的本地 Grammarly 替代品吗？',
            a: '没有可以直接替换的方案。这里涉及的本地工具均未把 Google Docs 列为受支持的编辑器。可行的做法是"选中 → 改写 → 粘贴"：在 Docs 中选中文本（开启"建议"模式），通过热键工具或浏览器侧栏发送给本地模型，再粘贴结果。在其他地方要获得内联划线，本地选项有 Harper（仅限英文，本机运行，提供 Chrome、Edge 与 Firefox 扩展）和自托管的 LanguageTool 服务器。',
          },
          {
            q: '如何把 Ollama 与 Notion 配合使用？',
            a: 'Notion 未记载将 Notion AI 指向本地模型的方法。若要对 Notion 内容使用 Ollama，请写一个小脚本：通过 Notion API 读取页面，把文本发送到 localhost:11434 上的 Ollama，再把结果写回（见上方示例）。模型这一步在本地；页面仍存放在 Notion 的服务器上。若要完全本地化，请把 AI 密集型笔记迁到搭配 Copilot 插件的 Obsidian，或 AppFlowy 之类本地优先的应用。',
          },
          {
            q: '能把本地 LLM 连接到本地的 Notion 数据库吗？',
            a: 'Notion 没有本地数据库：工作区存放在 Notion 的服务器上，通过其 API 访问。您可以在本地运行模型，并通过 API 与 Notion 交换文本，或选择本地优先的工作区。Obsidian 把笔记以 Markdown 文件存放在磁盘上；AppFlowy 是带离线模式的开源 Notion 风格应用。',
          },
          {
            q: '本地 LLM 能分析我个人的写作风格吗？',
            a: '可以。用本文的文风档案提示词，把三段您的写作样本粘贴给本地模型：它会返回一份要点式描述，涵盖句长、语气、词汇和习惯，并附一段可重复使用的简短系统提示词，让编辑模型保持您的文风。由于样本不会离开您的机器，用于私人草稿也很安全。',
          },
          {
            q: 'Notion AI 与 Grammarly 有什么区别？',
            a: '二者所处的位置不同。Notion AI 在 Notion 内部工作：起草、总结，并回答关于您工作区的问题。Grammarly 跨应用和浏览器文本框检查写作并提供改写。二者在改写和语气上有重叠，但谁也替代不了谁；而对大多数任务来说，本地 LLM 加一个笔记应用就能同时替代两者。',
          },
          {
            q: 'Grammarly 能在 Notion 和 Obsidian 中使用吗？',
            a: 'Grammarly 的浏览器扩展会检查基于浏览器的编辑器中的文本框，其中包括网页版 Notion。Obsidian 之类的桌面应用则不在浏览器扩展能触及的范围内。对于 Obsidian，Harper 这类本地检查器（有 Obsidian 插件）或搭配 Ollama 的 Copilot 插件，可以在不把文本发往云服务的情况下覆盖同样的需求。',
          },
          {
            q: '本地 LLM 在语法纠错上和 Grammarly 一样好吗？',
            a: '对于日常的语法、标点和拼写错误，提示词得当的本地模型能处理相同的修改；请用自己的文本测试确认。Grammarly 仍占优势之处：边打字边出的实时内联修改，以及可在 Gmail、Google Docs 和其他网页应用中使用的浏览器扩展。对浏览器文本框中的文字，本地 LLM 需要"选中并粘贴"的流程。',
          },
          {
            q: 'Obsidian 能作为 Notion 的完整替代吗？',
            a: 'Obsidian 在笔记与知识库方面是不错的替代。它不替代 Notion 的数据库、项目管理与关系数据。如果您主要把 Notion 用于笔记、文档与 Wiki — Obsidian 可以完整替代。如果您依赖 Notion 数据库、看板视图或关联属性 — 需要额外工具（Anytype、AppFlowy，或继续用 Notion 做数据库层、Obsidian 做写作层）。',
          },
          {
            q: '哪个本地模型最接近 Grammarly 的写作建议？',
            a: '没有任何本地模型能复现 Grammarly 的建议引擎，也没有基准为此给模型排名。实际使用中，在被要求保留原有声线时，Gemma 4 12B 与 Qwen3.8 27B 在文风和语气改写上余量最大，而 Qwen3.5 4B 与 Phi-4 Mini 足以应付纯语法修改。若想要边打字边划线，可把其中任何一个与 Harper 之类的规则型检查器搭配使用。',
          },
          {
            q: 'Obsidian Copilot 插件会把笔记发到云端吗？',
            a: '配置为使用本地 Ollama 实例时不会。该插件同时支持云端 LLM（OpenAI、Anthropic）与本地 Ollama。当您把 LLM 提供方选为 Ollama 并填入 localhost URL，所有 AI 处理都在本地完成。任何笔记内容都不会被外发。需要审计级验证时，可在 macOS 用 Little Snitch、或用 Wireshark 监控网络流量加以确认。',
          },
          {
            q: '能在 Google Docs 或 Gmail 中使用本地 LLM 吗？',
            a: '不能直接使用 — 不存在与 Grammarly 等价、原生集成进浏览器文本框的本地 LLM 浏览器扩展。变通方案：（1）在 Google Docs 中选中文本、复制、粘贴到本地 AI 应用、复制修改版、再粘回 Google Docs；（2）用热键工具处理所选文本并替换（Raycast 使用本地模型需要 Pro；调用 Ollama API 的 AutoHotkey 脚本则免费）；（3）自研 Chrome 扩展，读取所选文本并调用本地 Ollama API（GitHub 上有开源模板）。这些都比不上 Grammarly 无缝的内联体验。',
          },
          {
            q: '这套方案在专业用途下符合 HIPAA / GDPR 吗？',
            a: '完全在本地处理、不外发数据的本地 LLM，针对 HIPAA 与 GDPR 中的核心"数据传输"问题给出了直接答案。但合规取决于完整的技术栈、安全控制与具体监管要求。本地 LLM 不会自动合规 — 您仍需评估终端安全、设备物理保护与访问控制。正式合规判定请咨询合规负责人。本地处理消除了"第三方数据处理者"这一议题，但不取代完整的合规体系。',
          },
          {
            q: '学术论文最适合的本地写作助手是什么？',
            a: '一个中等规模的本地模型（例如 Gemma 4 12B），配合系统提示词："仅修改语法与标点 — 不要改动词汇、句式或内容。保留所有引用、术语与领域专门语言不变。" 这相当于"仅语法"模式，是学术写作中风险较低的设置 — 改动措辞可能在不经意间改变原意，或被认为修改了引用内容。',
          },
          {
            q: '可以在本地替代 Notion AI 的会议纪要摘要吗？',
            a: '可以。把会议纪要导出为文本或 Markdown 文件（或直接粘贴文字稿）。提示词："请把这份会议纪要总结为：（1）做出的决策、（2）带责任人的行动项、（3）尚未明确的问题。每段用项目符号。控制在 300 字以内。" 小型的指令遵循模型即可胜任会议摘要。对例会，可在本地 AI 应用中保存提示词模板。',
          },
          {
            q: 'Grammarly 用的是哪个 LLM？Grammarly 本身是 LLM 吗？',
            a: 'Grammarly 是一款写作产品，而不是单一模型。在我们查阅的页面（套餐、条款及其负责任的 AI 页面）上，Grammarly 并未点名其底层模型。其负责任的 AI 页面称，用于支持其生成式 AI 功能的信息会与 LLM 合作伙伴共享，且这些合作伙伴不得使用客户数据训练其模型。Notion AI 的情况类似：它使用其子处理者页面所列的多家提供方。研究人员还在 Hugging Face 的 grammarly 组织下发布了开源的文本编辑模型（CoEdIT，参数量 770M 至 11B），它们是研究模型，而非产品本身。对隐私而言，重要的是数据处理方式：发送给任一产品的文本都在供应商的服务器上处理。本地 LLM 则避免了这一点 — 文本永远不会离开您的机器。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[Obsidian 搭配本地 LLM](/zh/power-local-llm/local-llm-with-obsidian-2026) — 用于笔记与仓库问答的完整 Obsidian + Ollama 部署。',
          '[Copilot for Obsidian 评测](/zh/power-local-llm/copilot-for-obsidian-review) — Notion AI 替代工作流中使用的 Copilot 插件。',
          '[Obsidian 与 Logseq AI 插件对比](/zh/power-local-llm/obsidian-logseq-ai-plugins) — 笔记应用中本地 AI 的插件选择。',
          '[小型本地 LLM 模型](/zh/local-llms/small-local-llm-models) — 适合 4–8 GB 设备的当前小模型，与本地语法纠错相关。',
          '[本地 LLM 邮件与日历自动化](/zh/power-local-llm/local-llm-email-and-calendar-automation) — 用本地 LLM 自动起草邮件并管理日历，与写作助手相互补充。',
          '[小说作者的本地 LLM 提示词](/zh/power-local-llm/local-llm-prompts-for-fiction-writers) — 超越语法修改的创作提示词模板，覆盖场景与人物开发。',
          '[用本地 AI 智能体替代 Zapier](/zh/power-local-llm/replace-zapier-with-local-ai-agents) — 本地工作流自动化，把写作工具与其他业务流程串起来。',
          '[面向私有业务数据的本地 RAG](/zh/power-local-llm/local-rag-for-private-business-data) — 对机密业务文档做问答，把笔记问答的用法扩展到大型文档库。',
          '[Windows / Mac / Linux 上最简单的本地 AI 应用](/zh/power-local-llm/easiest-local-ai-app-windows-mac-linux) — 如果您需要先搭建第一款本地 AI 应用，再去落地写作助手工作流。',
          '[业务流程的本地 AI 智能体：欧盟合规](/zh/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — 部署本地 AI 写作助手时的 GDPR 与 EU AI Act 背景，可作跨境业务参考。',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/replace-grammarly-notion-ai-with-local-overview-hero-ar.webp',
    title: 'استبدل ⁨Grammarly⁩ و⁨Notion AI⁩ بنموذج ⁨LLM⁩ محلي (⁨2026⁩)',
    seoTitle: 'بديل ⁨Grammarly⁩ محلي: أفضل ⁨LLM⁩ صغيرة ⁨2026⁩',
    intro:
      'يعالج Grammarly وNotion AI كتاباتك على خوادم سحابية — فتمر مسودات بريدك ووثائقك السرية وملاحظاتك الشخصية عبر أنظمة طرف ثالث بحكم التصميم. يمكن لنموذج LLM محلي يعمل عبر Ollama أو LM Studio أن يحل محل كليهما في معظم مهام الكتابة: التصحيح النحوي والأسلوبي، وصياغة الوثائق، وتلخيص المحتوى، وتدوين الملاحظات بمساعدة الذكاء الاصطناعي — دون أن يغادر أي نص جهازك. يبيّن هذا الدليل أي النماذج الصغيرة تصحح النحو جيدًا، وما الذي يعمل في Google Docs وNotion، وأين تبقى الفجوة مع Grammarly.',
    metaDescription:
      'بديل ⁨Grammarly⁩ محلي: أفضل نماذج ⁨LLM⁩ الصغيرة لتصحيح النحو، وما يعمل في ⁨Google Docs⁩ و⁨Notion⁩، وإعدادات ⁨Ollama⁩ التي تُبقي نصك على جهازك.',
    twitterDescription:
      'استبدل ⁨Grammarly⁩ و⁨Notion AI⁩ بنموذج ⁨LLM⁩ محلي: أفضل النماذج الصغيرة للتصحيح النحوي، وخيارات ⁨Google Docs⁩ و⁨Notion⁩، وإعداد ⁨Ollama⁩ — بلا نص يغادر جهازك.',
    current_models_mentioned: [
      'Qwen3.5 4B',
      'Gemma 4 E4B',
      'Gemma 4 12B',
      'Qwen3.8 27B',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M3 MacBook Air 8 GB',
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 3060 12 GB',
    ],
    audience:
      'العاملون في مجال المعرفة والكتّاب والطلاب والمهنيون المهتمون بالخصوصية، ممن يستخدمون Grammarly لتصحيح الكتابة وNotion AI لمساعدة الوثائق، ويريدون استبدال كليهما بذكاء اصطناعي محلي يحافظ على خصوصية محتواهم.',
    readTime: '13 دقيقة قراءة',
    educationalLevel: 'Beginner',
    primaryTerm: 'بديل Grammarly محلي بنموذج LLM',
    targetKeywords: [
      'استبدال grammarly بنموذج llm محلي',
      'بديل grammarly محلي',
      'أفضل llm لتصحيح القواعد',
      'نموذج llm صغير لتصحيح القواعد',
      'استبدال notion ai محلي',
      'notion ollama',
      'مساعد كتابة llm محلي',
      'بديل grammarly بدون سحابة',
      'بديل notion ai خصوصية',
      'ollama تصحيح الكتابة',
    ],
    leadAnswerBlock:
      '**نموذج LLM محلي يعمل عبر Ollama يحل محل الوظائف الأساسية لـ Grammarly وNotion AI دون إرسال نصك إلى أي خدمة سحابية. لاستبدال Grammarly: التصحيح النحوي والأسلوبي عبر قالب موجّه ("صحّح النحو وحسّن أسلوب هذه الفقرة. أعد النص المصحح فقط.") في أي نموذج من Qwen3.5 4B فصاعدًا. لاستبدال Notion AI: صياغة الوثائق والأسئلة والأجوبة عن ملاحظاتك عبر Obsidian مع إضافة Copilot أو Smart Connections المُوجَّهة إلى Ollama. حجة الخصوصية ملموسة: تمنح شروط خدمة Grammarly (الفقرة 7.2) ترخيصًا لاستخدام محتواك في تشغيل خدماتها وتحسينها، ويوجّه Notion AI الطلبات إلى مزوّدي نماذج من أطراف ثالثة، بينما يعالج النموذج المحلي النص نفسه على جهازك. الفجوة ضيقة في الكتابة اليومية وأوسعها في موضعين: التدقيق أثناء الكتابة داخل Google Docs وGmail ومحررات المتصفح الأخرى، والاقتراحات الأسلوبية المتخصصة بمجال معين.**',
    quickAnswerTop: {
      ar: {
        question: 'هل يمكن لنموذج LLM محلي أن يحل محل Grammarly وNotion AI؟',
        answer:
          'نعم، لمعظم حالات الاستخدام اليومية. بالنسبة إلى Grammarly: يتولى نموذج LLM محلي التصحيح النحوي، وإعادة الصياغة لمزيد من الوضوح، وإزالة المبني للمجهول، وضبط النبرة الأساسي. وهو لا يضاهي الاقتراحات الفورية المضمّنة في Grammarly ولا تكامله مع امتداد المتصفح، لكن سير عمل قائمًا على الموجّهات يغطي التصحيحات نفسها عند الطلب. بالنسبة إلى Notion AI: يحل Obsidian مع إضافة Copilot المُوجَّهة إلى Ollama محل صياغة الوثائق وتوسيع المحتوى والأسئلة والأجوبة عن ملاحظاتك. أما Notion AI نفسه فلا توثّق Notion طريقة لتوجيهه إلى نموذج محلي. نقاط انطلاق مقترحة: Qwen3.5 4B (تنزيل نحو 3–4 جيجابايت، لأنظمة 8 جيجابايت)، أو Gemma 4 12B (لأنظمة 16 جيجابايت)، أو Qwen3.8 27B (لـ 24 جيجابايت فأكثر) — لا يوجد اختبار معياري خاص بالتصحيح النحوي يرتبها، فجرّب نموذجين على فقراتك أنت.',
        bullets: [
          'التصحيح النحوي: أي نموذج محلي يتبع التعليمات مع موجّه نظام "صحّح النحو فقط، أعد النص المصحح" يغطي حالة الاستخدام الأساسية لتصحيح Grammarly.',
          'النماذج الصغيرة: يناسب Qwen3.5 4B وPhi-4 Mini أجهزة 8 جيجابايت؛ ويمثل Gemma 4 12B الخطوة التالية لإعادة الصياغة الأسلوبية على أجهزة 16 جيجابايت.',
          'بديل Notion AI: Obsidian + إضافة Copilot (أو إضافة Smart Connections) مُوجَّهة إلى Ollama — أسئلة وأجوبة عن الملاحظات، وصياغة الوثائق، وتوسيع المحتوى.',
          'التصحيح الفوري: لا تضع نماذج LLM المحلية خطوطًا تحت الأخطاء أثناء الكتابة في Google Docs أو Gmail. استخدم اختصار لوحة مفاتيح أو شريطًا جانبيًا، أو مدققًا محليًا قائمًا على القواعد مثل Harper للتسطير المباشر في المحررات المدعومة.',
          'الخصوصية: ترخّص Grammarly محتواك بموجب الفقرة 7.2 من شروطها؛ ويرسل Notion AI الطلبات إلى مزوّدي نماذج من أطراف ثالثة. أما نموذج LLM المحلي فيعالج النص محليًا دون إرساله إلى الخارج.',
          'التكلفة: يبدأ Grammarly Pro من نحو $12 شهريًا (بفوترة سنوية)؛ ويأتي Notion AI ضمن خطة Business (نحو $20 للمستخدم شهريًا). نموذج LLM المحلي مجاني بعد تكلفة الجهاز.',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'ما الذي تستبدله (وما الذي لا تستبدله)', anchor: '#what-you-replace' },
      { label: 'استبدال Grammarly: التصحيح النحوي والأسلوبي', anchor: '#grammarly-replacement' },
      { label: 'أفضل نماذج LLM الصغيرة للتصحيح النحوي المحلي', anchor: '#small-models-grammar' },
      { label: 'Google Docs وGmail والتدقيق الفوري دون سحابة', anchor: '#google-docs-inline' },
      { label: 'استبدال Notion AI: صياغة الوثائق والملاحظات', anchor: '#notion-replacement' },
      { label: 'Notion وOllama: ما الذي يتصل وما الذي لا يتصل', anchor: '#notion-ollama' },
      { label: 'خيارات التكامل', anchor: '#integrations' },
      { label: 'توصيات النماذج', anchor: '#models' },
      { label: 'مقارنة الخصوصية', anchor: '#privacy' },
      { label: 'مقارنة التكاليف', anchor: '#cost' },
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
          '**تحل نماذج LLM المحلية محل الوظيفة الأساسية لـ Grammarly — النحو والوضوح والتصحيح الأسلوبي الأساسي — لكنها لا تحل محل تكاملها الفوري المضمّن.** يتحول سير العمل من "تظهر التصحيحات أثناء الكتابة" إلى "حدّد النص ← احصل على النسخة المصححة ← الصقها في مكانها". وهذا مقابل مقبول لدى كثير من المستخدمين لقاء خصوصية كاملة.',
          '**استبدال Notion AI أكثر اكتمالًا، لكنه يعني ترك ميزات الذكاء الاصطناعي في Notion.** لا توثّق Notion طريقة لتوجيه Notion AI إلى نموذج محلي. أما Obsidian مع إضافة Copilot (أو Smart Connections) المُوجَّهة إلى نسخة Ollama محلية فيضاهي صياغة الوثائق وتوسيع المحتوى والأسئلة والأجوبة عن الملاحظات — مع معالجة محلية بالكامل. البقاء داخل Notion ممكن فقط بتشغيل خطوة الذكاء الاصطناعي بنفسك عبر واجهة Notion API.',
          '**حجة الخصوصية ليست نظرية.** تمنح شروط خدمة Grammarly (الفقرة 7.2) ترخيصًا لاستخدام محتواك في تشغيل خدماتها وتحسينها وتطويرها. ويرسل Notion AI الطلبات إلى مزوّدي نماذج من أطراف ثالثة؛ وتذكر Notion أنه بشكل افتراضي لا تدرّب هي ولا مزوّدوها النماذج على بيانات العملاء. أما نموذج LLM المحلي فيعالج النص نفسه على جهازك دون أي إرسال خارجي.',
          '**النماذج الصغيرة كافية للتصحيح النحوي.** يناسب Qwen3.5 4B وPhi-4 Mini أجهزة 8 جيجابايت؛ ويلائم Gemma 4 12B أنظمة 16 جيجابايت وإعادة الصياغة الأسلوبية. لا يوجد اختبار معياري منشور يرتبها في التصحيح النحوي، فشغّل نموذجين على فقراتك أنت قبل أن تحسم اختيارك.',
          '**للتسطير المباشر، أضف مدققًا قائمًا على القواعد.** يضع Harper (محلي، للإنجليزية فقط) وخادم LanguageTool مستضاف ذاتيًا خطوطًا تحت الأخطاء أثناء الكتابة في المحررات المدعومة. لا يُدرج Harper المحرر Google Docs ضمن المدعوم، لذا يبقى سير العمل هناك: حدّد ← أعد الصياغة ← الصق.',
          '**التكلفة حجة ثانوية.** يبدأ Grammarly Pro من نحو $12 شهريًا بفوترة سنوية؛ وأصبح Notion AI جزءًا من خطة Business (نحو $20 للمستخدم شهريًا) بدل أن يكون إضافة منفصلة. أما المكافئ المحلي فمجاني بعد تكلفة الجهاز لمرة واحدة.',
          '**يستغرق الإعداد نحو 20 دقيقة.** تثبيت Ollama وتنزيل النموذج وضبط إضافة Obsidian إعداد يتم مرة واحدة.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**تكلفة Grammarly:** مجاني (100 موجّه ذكاء اصطناعي شهريًا)، وPro من نحو $12 شهريًا بفوترة سنوية (2,000 موجّه ذكاء اصطناعي شهريًا)، وEnterprise بتسعير مخصص.',
          '**تكلفة Notion AI:** ضمن خطة Business (نحو $20 للمستخدم شهريًا بفوترة سنوية)؛ تحصل خطتا Free وPlus على تجربة فقط.',
          '**تكلفة نموذج LLM المحلي:** مجاني (نماذج مفتوحة المصدر + Ollama) — كلفة كهرباء الجهاز فقط.',
          '**نقاط انطلاق للنماذج الصغيرة:** Qwen3.5 4B (`qwen3.5:4b`) أو Phi-4 Mini (`phi4-mini`) على 8 جيجابايت؛ وGemma 4 12B (`gemma4:12b`) على 16 جيجابايت؛ وQwen3.8 27B (`qwen3.8:27b`) على 24 جيجابايت فأكثر.',
          '**خصوصية Grammarly:** تمنح الفقرة 7.2 من شروط الخدمة ترخيصًا لمحتواك لتشغيل خدمات Grammarly وتحسينها وتطويرها.',
          '**خصوصية Notion AI:** تذهب الطلبات إلى مزوّدي نماذج من أطراف ثالثة؛ وبشكل افتراضي لا تدرّب Notion ولا مزوّدوها النماذج على بيانات العملاء.',
          '**تكلفة Obsidian:** مجاني للاستخدام الشخصي والمهني منذ فبراير 2025.',
        ],
      },
      whatYouReplace: {
        id: 'what-you-replace',
        title: 'ما الذي تستبدله (وما الذي لا تستبدله)',
        content:
          '**يغطي نموذج LLM المحلي معظم الاستخدام اليومي لـ Grammarly وNotion AI، لكن الجزء الذي لا يغطيه مهم لبعض المستخدمين.** فهم هذه الفجوة قبل التحول يجنّبك خيبة الأمل.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يستبدل نموذج LLM المحلي التصحيح النحوي وإعادة الصياغة الأسلوبية وضبط النبرة في Grammarly، ويستبدل صياغة الوثائق والأسئلة والأجوبة عن الملاحظات في Notion AI — لكنه لا يستبدل التكامل الفوري المضمّن في Grammarly ولا التكامل الأصلي لـ Notion AI داخل المحرر.',
          },
          {
            type: 'plain-terms',
            text: 'يعمل Grammarly بمراقبة ما تكتبه في المتصفح أو على سطح المكتب وعرض التصحيحات أولًا بأول. لا يستطيع نموذج LLM المحلي فعل ذلك وحده. لكنه يصحح أي نص تسلّمه إياه — فيصبح سير العمل: تكتب بريدك، وتحدّد النص، وترسله إلى تطبيق الذكاء الاصطناعي المحلي أو أداة الاختصار، وتستلم النسخة المصححة، ثم تلصقها في Gmail. أبطأ من التصحيح الفوري، لكنه خاص ومجاني.',
          },
        ],
        columns: ['الميزة', 'Grammarly', 'المكافئ المحلي', 'الفجوة'],
        rows: [
          { 'الميزة': 'التصحيح النحوي', 'Grammarly': 'فوري ومضمّن', 'المكافئ المحلي': 'عبر موجّه، عند الطلب', 'الفجوة': 'لا تصحيح فوري؛ نسخ ولصق' },
          { 'الميزة': 'اقتراحات الأسلوب', 'Grammarly': 'مضمّنة مع شرح', 'المكافئ المحلي': 'إعادة صياغة عبر موجّه', 'الفجوة': 'لا شرح لكل اقتراح افتراضيًا' },
          { 'الميزة': 'اكتشاف النبرة', 'Grammarly': 'تلقائي بنبرات مسمّاة', 'المكافئ المحلي': 'نبرة مستهدفة في الموجّه', 'الفجوة': 'يتطلب تعليمات نبرة صريحة' },
          { 'الميزة': 'امتداد المتصفح', 'Grammarly': 'يعمل في Gmail وGoogle Docs وحقول المتصفح', 'المكافئ المحلي': 'نسخ ولصق أو اختصار أو شريط جانبي', 'الفجوة': 'لا تكامل أصلي مع المتصفح' },
          { 'الميزة': 'Notion AI: صياغة الوثائق', 'Grammarly': 'غير متاح', 'المكافئ المحلي': 'Obsidian + Copilot ← Ollama', 'الفجوة': 'ليس داخل واجهة Notion؛ تطبيق منفصل' },
          { 'الميزة': 'Notion AI: أسئلة عن الملاحظات', 'Grammarly': 'غير متاح', 'المكافئ المحلي': 'Obsidian Smart Connections ← Ollama', 'الفجوة': 'يتطلب مخزن Obsidian؛ لا بحث في قواعد Notion' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'تظهر فجوة التكامل بوضوح أكبر إذا كنت تكتب في Gmail أو Google Docs أو محررات المتصفح الأخرى حيث يعرض Grammarly تصحيحات مضمّنة. أما إذا كنت تكتب أساسًا في تطبيقات سطح المكتب (Word وObsidian وVS Code وScrivener) فإن سير عمل النسخ واللصق مع نموذج LLM محلي بالكاد أبطأ من الاقتراحات المضمّنة. اعرف بيئة كتابتك قبل أن تقرر.',
          },
        ],
      },
      grammarlyReplacement: {
        id: 'grammarly-replacement',
        title: 'استبدال Grammarly: التصحيح النحوي والأسلوبي',
        content:
          '**سير عمل استبدال Grammarly هو بضعة قوالب موجّهات وتطبيق لاختصار لوحة المفاتيح.** قالب للتصحيح النحوي فقط، وآخر لإعادة الصياغة الأسلوبية الكاملة، وثالث للنبرة. على عتاد حاسوب محمول نموذجي يعود نص بطول فقرة خلال ثوانٍ قليلة؛ وتعتمد السرعة على حجم النموذج والعتاد.',
        promptExamples: [
          {
            label: 'التصحيح النحوي فقط (بديل Grammarly الأساسي)',
            text: 'صحّح النحو والإملاء والترقيم في النص التالي. أعد النص المصحح فقط — بلا شرح ولا تنسيق ولا تلخيص.\n\n[paste your text]',
          },
          {
            label: 'إعادة صياغة الأسلوب والوضوح (بديل Grammarly Premium)',
            text: 'أعد كتابة النص التالي لتحسين الوضوح والنبرة المهنية. صحّح النحو، وأزل المبني للمجهول، واختصر الجمل الطويلة، واحذف العبارات الحشوية. أعد النص المُعاد كتابته فقط.\n\nالنبرة المستهدفة: [professional / casual / academic / persuasive]\nالجمهور المستهدف: [general / technical / executive]\n\n[paste your text]',
          },
          {
            label: 'موجّه ضبط النبرة',
            text: 'أعد كتابة البريد الإلكتروني التالي ليكون [more formal / more casual / more concise / more diplomatic]. أبقِ كل المحتوى الواقعي كما هو. أعد البريد المُعاد كتابته فقط.\n\n[paste your email]',
          },
          {
            label: 'ملف الأسلوب الشخصي (حلّل كتابتك محليًا)',
            text: 'فيما يلي ثلاث عينات من كتابتي. صِف أسلوبي في 8 نقاط: طول الجملة المعتاد، ومستوى المفردات، والنبرة، والتراكيب التي أفضّلها، وعادات الترقيم، وما أتجنبه. ثم اكتب موجّه نظام من 100 كلمة يجعل نموذج المحرر يصحح النص مع الحفاظ على هذا الأسلوب.\n\nSample 1: [paste]\nSample 2: [paste]\nSample 3: [paste]',
          },
        ],
        items: [
          '**موجّه النظام لجلسات الكتابة:** اضبط موجّه النظام في تطبيق الذكاء الاصطناعي المحلي على "أنت محرر محترف. أعد النص المصحح أو المُعاد كتابته فقط — بلا مقدمات ولا شرح ولا تعليق." يمنع هذا النموذج من إضافة عبارات مثل "نص رائع! إليك تصحيحي..." قبل الناتج.',
          '**تكامل اختصار لوحة المفاتيح:** استخدم Raycast (macOS) أو AutoHotkey (Windows) لإنشاء اختصار يرسل النص المحدد إلى Ollama ويلصق النتيجة. يختزل هذا سير عمل النسخ واللصق في ضغطة واحدة. لاحظ أن Raycast يذكر دعم النماذج المحلية ميزةً ضمن Pro في دليله؛ أما سكربت AutoHotkey الذي يستدعي واجهة Ollama API فمجاني.',
          '**نحو فقط أم إعادة صياغة أسلوبية:** استخدم موجّهين منفصلين للتصحيح النحوي فقط ولإعادة الصياغة الأسلوبية الكاملة. التصحيح النحوي فقط أكثر أمانًا للوثائق القانونية أو التقنية أو المنظّمة التي قد يغيّر فيها تبديل الصياغة المعنى. وإعادة الصياغة الأسلوبية مناسبة للبريد الإلكتروني ومقالات المدونات والمراسلات العامة.',
          '**للكتابة الأكاديمية:** أضف "احتفظ بجميع الاستشهادات والمصطلحات التقنية ومفردات المجال دون تغيير" إلى موجّه إعادة الصياغة الأسلوبية. بدون هذه التعليمة تبسّط النماذج أحيانًا اللغة التقنية أو تعيد صياغتها.',
          '**للبريد المهني:** أضف "المرسل هو [Name]، [Role] في [Company]. يجب أن يعكس البريد صوته المهني دون تفاصيل شخصية في الناتج." يثبّت هذا مستوى الخطاب على السياق المهني للمرسل.',
          '**حلّل أسلوبك محليًا:** يحوّل موجّه ملف الأسلوب أعلاه ثلاث عينات من كتابتك إلى موجّه نظام قابل لإعادة الاستخدام. ولأن العينات لا تغادر جهازك، فمن الآمن استخدامه على المسودات الخاصة، وهو ما يتطلب من مساعد سحابي أن يستلمها أولًا.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'سير عمل سريع على macOS: ثبّت Ollama، واسحب نموذجًا مثل Gemma 4 12B، وأنشئ أمر Raycast AI بموجّه التصحيح النحوي (تتطلب النماذج المحلية في Raycast اشتراك Pro). حدّد النص في أي تطبيق، وفعّل الاختصار، فتحل النسخة المصححة محل التحديد. وعلى Windows يحقق سكربت AutoHotkey الذي يرسل التحديد إلى واجهة Ollama API النتيجة نفسها دون اشتراك.',
          },
        ],
      },
      smallModelsGrammar: {
        id: 'small-models-grammar',
        title: 'أفضل نماذج LLM الصغيرة للتصحيح النحوي المحلي',
        content:
          '**للتصحيح النحوي، ابدأ بـ Qwen3.5 4B على أجهزة 8 جيجابايت وبـ Gemma 4 12B على أجهزة 16 جيجابايت؛ كلاهما يتبع تعليمة "أعد النص المصحح فقط" ويعمل على الحواسيب المحمولة العادية.** تصحيح النحو هو في معظمه اتباع للتعليمات: على النموذج أن يغيّر أقل قدر ممكن وألا يعيد سوى النص المصحح.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'أفضل نموذج LLM صغير للتصحيح النحوي المحلي هو أصغر نموذج يتبع التعليمات ويصحح أخطاءك دون تغيير ما كان صحيحًا أصلًا — وتُعد Qwen3.5 4B وPhi-4 Mini وGemma 4 12B نقاط انطلاق معقولة، ولا يوجد اختبار معياري منشور يرتبها في التصحيح النحوي.',
          },
          {
            type: 'plain-terms',
            text: 'التصحيح النحوي لا يحتاج نموذجًا كبيرًا. يحتاج نموذجًا يطيع تعليمة "صحّح الأخطاء فقط". ثبّت نموذجين مرشحين، والصق الفقرات الخمس نفسها في كليهما، واحتفظ بالنموذج الذي يغيّر أقل مع التقاط أخطائك. يستغرق هذا الاختبار عشر دقائق ويخبرك أكثر من أي لوحة ترتيب.',
          },
        ],
        columns: ['النموذج', 'وسم Ollama', 'حجم التنزيل', 'يناسب', 'الأفضل لـ'],
        rows: [
          { 'النموذج': 'Phi-4 Mini', 'وسم Ollama': 'phi4-mini', 'حجم التنزيل': '~2.5 GB', 'يناسب': '8 GB RAM', 'الأفضل لـ': 'تصحيحات بسيطة وسريعة؛ غالبًا الإنجليزية' },
          { 'النموذج': 'Qwen3.5 4B', 'وسم Ollama': 'qwen3.5:4b', 'حجم التنزيل': '~3.3–4 GB', 'يناسب': '8 GB RAM', 'الأفضل لـ': 'تصحيح نحوي فقط، رسائل قصيرة، لغات كثيرة' },
          { 'النموذج': 'Gemma 4 E4B', 'وسم Ollama': 'gemma4:e4b', 'حجم التنزيل': '~6.6–9.5 GB', 'يناسب': '16 GB RAM', 'الأفضل لـ': 'نصوص متعددة اللغات، تعديلات أسلوبية خفيفة' },
          { 'النموذج': 'Gemma 4 12B', 'وسم Ollama': 'gemma4:12b', 'حجم التنزيل': '~7.7–8 GB', 'يناسب': '16 GB RAM', 'الأفضل لـ': 'إعادة صياغة الأسلوب وضبط النبرة' },
          { 'النموذج': 'Qwen3.8 27B', 'وسم Ollama': 'qwen3.8:27b', 'حجم التنزيل': '~18 GB', 'يناسب': '24 GB+ RAM/VRAM', 'الأفضل لـ': 'إعادة صياغة طويلة ودقيقة' },
        ],
        items: [
          '**لا يوجد اختبار معياري خاص بالتصحيح النحوي يرتب هذه النماذج.** تنشر الجهات المطورة نتائج عامة في اتباع التعليمات، لا دقة التصحيح النحوي. احكم بنصوصك أنت.',
          '**ما الذي تتحقق منه في الاختبار:** الإفراط في التصحيح (تغيير صياغة كانت سليمة)، وتغيّر المعنى (الأرقام والأسماء وأدوات النفي)، والحفاظ على صيغة الإملاء المعتمدة (البريطاني مقابل الأمريكي)، وهل يعيد النموذج النص فقط.',
          '**اللغات:** Qwen3.5 وGemma 4 متعددا اللغات؛ أما Phi-4 Mini فموجّه أساسًا للإنجليزية. للنص غير الإنجليزي، اختبر بلغتك أولًا.',
          '**اجعله حتميًا:** درجة حرارة منخفضة (نحو 0.2) تقلل إعادة الصياغة الإبداعية. يدمج ملف Modelfile أدناه تعليمات المحرر ودرجة الحرارة في نموذج قابل لإعادة الاستخدام.',
          '**الوثائق الطويلة:** تنحرف النماذج الصغيرة مع المدخلات الطويلة. صحّح قسمًا قسمًا بدل لصق وثيقة كاملة.',
        ],
        codeBlock:
          'FROM qwen3.5:4b\nPARAMETER temperature 0.2\nSYSTEM """You are a copy editor. Fix grammar, spelling, and punctuation only. Keep the author\'s wording, meaning, and spelling variant. Return only the corrected text."""\n\n# then run:\n#   ollama create grammar-fix -f Modelfile\n#   ollama run grammar-fix',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'إذا طبع النموذج استدلاله أو مقدمة قبل النص المصحح، فانتقل إلى نسخة لا تعتمد الاستدلال أو إلى نموذج آخر. أداة تصحيح نحوي تضيف تعليقًا إلى كل إجابة أبطأ من التحرير اليدوي.',
          },
        ],
      },
      googleDocsInline: {
        id: 'google-docs-inline',
        title: 'Google Docs وGmail والتدقيق الفوري دون سحابة',
        content:
          '**لا تُدرج أي من الأدوات المحلية المستعرضة هنا Google Docs محررًا مدعومًا، لذا فإعداد Google Docs العملي هو اختصار لوحة مفاتيح أو شريط جانبي لإعادة الصياغة بنموذج LLM، مع مدقق محلي قائم على القواعد للتسطير المباشر حيث يكون مدعومًا.** يؤدي نموذج LLM والمدقق القائم على القواعد مهمتين مختلفتين: النموذج يعيد الصياغة عند الطلب، والمدقق يسطّر الأخطاء أثناء الكتابة.',
        columns: ['الأداة', 'النوع', 'أين تعمل', 'القيود'],
        rows: [
          { 'الأداة': '[Harper](https://writewithharper.com)', 'النوع': 'قائم على القواعد، على الجهاز، بلا LLM', 'أين تعمل': 'Chrome وEdge وFirefox وObsidian وVS Code وتطبيق macOS', 'القيود': 'الإنجليزية فقط؛ Google Docs غير مدرج' },
          { 'الأداة': '[LanguageTool](https://dev.languagetool.org/http-server) (مستضاف ذاتيًا)', 'النوع': 'خادم قائم على القواعد على localhost', 'أين تعمل': 'إضافة المتصفح، إعداد "Local server"', 'القيود': 'إعداد تجريبي؛ خادم Java للتشغيل' },
          { 'الأداة': '[Page Assist](/ar/local-llms/page-assist-review)', 'النوع': 'شريط دردشة جانبي لـ Ollama', 'أين تعمل': 'شريط Chrome وFirefox الجانبي', 'القيود': 'قائم على الدردشة؛ تلصق النتائج بنفسك' },
          { 'الأداة': 'اختصار + Ollama', 'النوع': 'إعادة صياغة النص المحدد بنموذج LLM', 'أين تعمل': 'أي تطبيق، بما فيه Google Docs', 'القيود': 'Raycast (Pro) أو سكربت AutoHotkey' },
        ],
        items: [
          '**سير عمل Google Docs:** فعّل وضع الاقتراحات (Suggesting) في Docs، وحدّد فقرة، وأرسلها عبر الاختصار أو الشريط الجانبي، والصق النص المصحح. يُبقي وضع الاقتراحات كل تغيير قابلًا للمراجعة.',
          '**Gmail:** يذكر موقع Harper أن Gmail غير مدعوم ما لم يُعطَّل مدقق القواعد المدمج في Gmail. استخدم سير عمل التحديد وإعادة الصياغة لمسودات البريد.',
          '**أفضل مزيج:** مدقق قائم على القواعد للتسطير المباشر في المحررات التي يدعمها، مع نموذج LLM محلي لإعادة الصياغة وضبط النبرة والتلخيص. هذا أقرب مكافئ محلي لمزيج Grammarly من التسطير وإعادة الصياغة بالذكاء الاصطناعي.',
          '**استضافة LanguageTool ذاتيًا:** نزّل خادم LanguageTool وشغّله على localhost، ثم اختر "Local server" ضمن الإعدادات التجريبية في إضافة المتصفح. لا يمكن الوصول إلى الخادم إلا من جهازك ما لم تشغّله بالخيار العام.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'المدققات القائمة على القواعد لا تحتاج إلى GPU ولا تضيف زمن انتظار. ثبّت واحدًا أولًا، ثم أضف نموذج LLM لمهام إعادة الصياغة فقط، وهي ما لا يستطيعه المدقق القائم على القواعد.',
          },
        ],
      },
      notionReplacement: {
        id: 'notion-replacement',
        title: 'استبدال Notion AI: صياغة الوثائق والملاحظات',
        content:
          '**Obsidian مع واجهة Ollama محلية هو أقرب مكافئ وظيفي لـ Notion AI لمدوّني الملاحظات والعاملين في المعرفة.** لا يحاكي بنية قواعد بيانات Notion، لكنه في صياغة الوثائق والأسئلة والأجوبة عن ملاحظاتك مكافئ في القدرة — مع معالجة محلية بالكامل.',
        image: '/images/replace-grammarly-notion-ai-with-local-notion-ai-setup-flow-en.svg',
        imageCaption: 'إعداد بديل Notion AI في Obsidian: ثبّت Ollama واسحب نموذجًا، وثبّت Obsidian، وأضف إضافة Copilot مُوجَّهة إلى localhost:11434، وأضف Smart Connections للأسئلة والأجوبة على المخزن كاملًا، ثم صغ الوثائق واسأل ملاحظاتك محليًا بالكامل.',
        items: [
          '**ثبّت Obsidian** من [obsidian.md](https://obsidian.md). مجاني للاستخدام الشخصي والمهني. أنشئ مخزنًا لملاحظاتك — هذا هو المجلد الذي ستفهرسه إضافات الذكاء الاصطناعي.',
          '**ثبّت إضافة Copilot** (إضافات المجتمع ← ابحث عن "Copilot"؛ راجع [مراجعة Copilot for Obsidian](/ar/power-local-llm/copilot-for-obsidian-review)). في إعدادات الإضافة، اختر "Ollama" مزوّدًا للنموذج، وأدخل `http://localhost:11434` عنوانًا أساسيًا، واختر نموذجك. تضيف Copilot شريط دردشة جانبيًا إلى Obsidian تسأل فيه وتولّد محتوى في سياق الملاحظة الحالية.',
          '**ثبّت إضافة Smart Connections** للأسئلة والأجوبة عبر مخزنك كاملًا. تفهرس Smart Connections ملاحظاتك كتضمينات (embeddings) بنموذج تضمين محلي، وتتيح لك أسئلة تستدعي الملاحظات ذات الصلة قبل الإرسال إلى النموذج. وهذا هو البديل المباشر لميزة "اسأل عن ملاحظاتي" في Notion AI.',
          '**صياغة الوثائق:** في دردشة Copilot اكتب "Draft a [document type] about [topic] based on these notes: [paste key points]". تضمّن الإضافة سياق الملاحظة الحالية تلقائيًا. يظهر الناتج في الدردشة؛ انسخه والصقه في الملاحظة.',
          '**توسيع المحتوى:** حدّد مخططًا نقطيًا في الملاحظة، وافتح لوحة أوامر Copilot، واستخدم "Expand selection" — يحول النموذج المخطط إلى نثر بمستوى أسلوب الملاحظة.',
          '**توليد المراجعة الأسبوعية:** "لخّص ملاحظاتي لهذا الأسبوع بصيغة مراجعة أسبوعية: الإنجازات والعوائق والإجراءات التالية." تستدعي Smart Connections ملاحظات آخر 7 أيام وتمررها إلى النموذج تلقائيًا.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يستبدل Obsidian مع إضافة Copilot أو Smart Connections المُوجَّهة إلى نسخة Ollama محلية ميزة Notion AI في صياغة الوثائق وتوسيع المحتوى والأسئلة والأجوبة عن ملاحظاتك — مع معالجة محلية بالكامل ودون إرسال أي محتوى إلى خادم خارجي.',
          },
          {
            type: 'plain-terms',
            text: 'الإعداد: ثبّت Obsidian، وثبّت Ollama، واسحب نموذجًا، وثبّت إضافة Copilot المجتمعية في Obsidian، ووجّهها إلى localhost:11434. هذا هو بديل ميزات الذكاء الاصطناعي في Notion AI. تبقى ملاحظاتك في مجلد المخزن (ملفات Markdown عادية، قابلة للنقل بالكامل). وتعمل دردشة الذكاء الاصطناعي على جهازك. لا شيء يغادر حاسوبك.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'يخزّن Obsidian الملاحظات كملفات Markdown عادية في مجلد تتحكم فيه. وعلى خلاف صيغة قواعد البيانات المغلقة في Notion، يمكن قراءة ملاحظاتك في أي محرر نصوص وتصديرها في أي وقت. وهذه ميزة ثانوية في الخصوصية وقابلية النقل مقارنة بـ Notion — فقاعدة معرفتك ليست حبيسة منصة سحابية.',
          },
        ],
      },
      notionOllama: {
        id: 'notion-ollama',
        title: 'Notion وOllama: ما الذي يتصل وما الذي لا يتصل',
        content:
          '**لا توثّق Notion طريقة لتوجيه Notion AI إلى نموذج محلي، لذا فـ "Notion + Ollama" تعني إما تشغيل خطوة الذكاء الاصطناعي خارج Notion أو نقل ملاحظاتك خارجه.** تصف صفحتا التسعير والأمان المنشورتان لدى Notion ذكاءً اصطناعيًا يعمل على مزوّدي نماذج تختارهم Notion، دون إعداد لنقطة وصول خاصة بك. كما أن Notion مساحة عمل سحابية لا قاعدة بيانات محلية — فلا توجد قاعدة بيانات Notion محلية يمكن ربط نموذج بها.',
        items: [
          '**الخيار 1 — سكربت عبر Notion API:** يقرأ سكربت صغير صفحة عبر Notion API، ويرسل النص إلى Ollama على `localhost:11434`، ويكتب النتيجة كتلةً جديدة. خطوة النموذج محلية؛ لكن الصفحة نفسها تبقى على خوادم Notion، فيُزال مزوّد الذكاء الاصطناعي وحده.',
          '**الخيار 2 — Notion MCP:** تستضيف Notion خادم MCP (بتسجيل دخول OAuth) تستخدمه عملاء MCP لقراءة الصفحات وتحديثها. تذكر Notion كلًّا من Claude Code وCursor وCodex أمثلةً على العملاء؛ أما قدرة عميل بعينه على تشغيل نموذج محلي فمسألة تخص ذلك العميل.',
          '**الخيار 3 — انقل الملاحظات الكثيفة بالذكاء الاصطناعي إلى تطبيق محلي أولًا:** Obsidian (ملفات Markdown عادية) مع Copilot كما سبق، أو [AppFlowy](https://appflowy.com)، وهو مساحة عمل مفتوحة المصدر (AGPL-3.0) على طراز Notion مع وضع عمل دون اتصال وخيارات ذكاء اصطناعي محلية بحسب صفحة المقارنة لديه. راجع وثائق AppFlowy لمعرفة إعداد النموذج المحلي بدقة.',
          '**ما الذي لا يغيّره النموذج المحلي:** المحتوى الموجود في Notion أصلًا تخزّنه Notion. تشغيل نموذج محلي عليه يزيل خطوة مزوّد الذكاء الاصطناعي، لا تخزين Notion.',
          '**ما تقوله Notion عن ذكائها الاصطناعي:** بشكل افتراضي لا تستخدم Notion ولا مزوّدوها بيانات العملاء لتدريب النماذج؛ وفي Enterprise تقدّم معظم النماذج عدم الاحتفاظ بالبيانات، بينما في الخطط الأخرى يحتفظ المزوّدون بالبيانات حتى 30 يومًا.',
        ],
        codeBlock:
          'import requests\n\nNOTION = {"Authorization": "Bearer <NOTION_TOKEN>", "Notion-Version": "2022-06-28"}\nPAGE_ID = "<page-id>"\n\n# 1. read the page text through the Notion API\nblocks = requests.get(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION).json()["results"]\ntext = "\\n".join(\n    "".join(t["plain_text"] for t in b["paragraph"]["rich_text"])\n    for b in blocks if b["type"] == "paragraph"\n)\n\n# 2. rewrite it with a local model (Ollama on localhost)\nr = requests.post("http://localhost:11434/api/generate", json={\n    "model": "gemma4:12b", "stream": False,\n    "prompt": "Correct the grammar of this text. Return only the corrected text.\\n\\n" + text,\n})\nfixed = r.json()["response"]\n\n# 3. append the result as a new paragraph block\nrequests.patch(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION, json={\n    "children": [{"object": "block", "type": "paragraph",\n                  "paragraph": {"rich_text": [{"type": "text", "text": {"content": fixed[:2000]}}]}}]\n})',
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: 'يرسل السكربت رمز Notion ومحتوى الصفحة إلى Notion وإلى localhost فقط. أبقِ الرمز بعيدًا عن الملفات المشتركة، ولاحظ أن كتل النص المنسّق في Notion تقبل نحو 2,000 حرف لكل كتلة، لذا يجب تقسيم المخرجات الطويلة إلى عدة كتل.',
          },
        ],
      },
      integrations: {
        id: 'integrations',
        title: 'خيارات التكامل',
        content:
          '**أربعة مستويات للتكامل: أساسي (نسخ ولصق)، ومتوسط (تطبيق اختصار أو تطبيق كتابة)، ومضمّن (مدقق قائم على القواعد)، ومتقدم (امتداد متصفح مخصص).** ابدأ بالمستوى الذي يناسب راحتك التقنية.',
        columns: ['مستوى التكامل', 'الطريقة', 'التطبيقات', 'الأفضل لـ'],
        rows: [
          { 'مستوى التكامل': 'أساسي (نسخ ولصق)', 'الطريقة': 'افتح التطبيق المحلي، والصق النص، وانسخ النتيجة', 'التطبيقات': 'دردشة LM Studio وOllama CLI وOpen WebUI', 'الأفضل لـ': 'تصحيحات متقطعة؛ أي نظام تشغيل' },
          { 'مستوى التكامل': 'متوسط (اختصار)', 'الطريقة': 'حدّد النص ← اختصار ← تحل النسخة المصححة محل التحديد', 'التطبيقات': 'Raycast AI (macOS، Pro)، AutoHotkey + Ollama (Windows)', 'الأفضل لـ': 'تصحيحات متكررة في أي تطبيق؛ تغيير طفيف' },
          { 'مستوى التكامل': 'متوسط (تطبيق كتابة)', 'الطريقة': 'مساعد ذكاء اصطناعي مدمج في أداة الكتابة', 'التطبيقات': 'Obsidian + إضافة Copilot، VS Code + Continue.dev', 'الأفضل لـ': 'الكتّاب والمطورون الذين يعملون في هذه التطبيقات' },
          { 'مستوى التكامل': 'مضمّن (قائم على القواعد)', 'الطريقة': 'مدقق محلي يسطّر الأخطاء أثناء الكتابة', 'التطبيقات': 'Harper، LanguageTool مستضاف ذاتيًا', 'الأفضل لـ': 'ملاحظات أثناء الكتابة بلا GPU' },
          { 'مستوى التكامل': 'متقدم (امتداد متصفح)', 'الطريقة': 'امتداد مخصص يرسل النص المحدد إلى Ollama API المحلية', 'التطبيقات': 'امتداد Chrome/Firefox مخصص (قوالب مفتوحة المصدر على GitHub)', 'الأفضل لـ': 'متقدمون يريدون تكاملًا بطراز Grammarly في المتصفح' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'على macOS، يُعد Raycast مع أمر ذكاء اصطناعي مخصص تكاملًا متوسطًا سريعًا إن كان لديك Pro: أنشئ أمر ذكاء اصطناعي بموجّه التصحيح النحوي، وعيّن له اختصارًا، وحدّد النص في أي تطبيق، واضغط الاختصار، فتحل النسخة المصححة محل التحديد. وبدون Pro استخدم Ollama CLI أو عميل دردشة مثل Open WebUI.',
          },
        ],
      },
      models: {
        id: 'models',
        title: 'توصيات النماذج لمهام الكتابة',
        content:
          '**تفضّل مساعدة الكتابة النماذج ذات اتباع التعليمات القوي والنثر المتماسك.** ويختلف الترتيب عن ترتيبات نماذج البرمجة أو الرياضيات. الاختيارات أدناه نقاط انطلاق مبنية على الحجم واتباع التعليمات، لا على نتائج اختبارات معيارية للتصحيح النحوي.',
        columns: ['المهمة', 'أفضل نموذج', 'بديل (VRAM أقل)', 'السبب'],
        rows: [
          { 'المهمة': 'التصحيح النحوي', 'أفضل نموذج': 'Gemma 4 12B', 'بديل (VRAM أقل)': 'Qwen3.5 4B / Phi-4 Mini', 'السبب': 'يتبع موجّهات "صحّح الأخطاء فقط، أعد النص"' },
          { 'المهمة': 'إعادة صياغة الأسلوب', 'أفضل نموذج': 'Gemma 4 12B أو Qwen3.8 27B', 'بديل (VRAM أقل)': 'Qwen3.5 4B', 'السبب': 'مساحة أوسع للصياغة ومستوى الخطاب' },
          { 'المهمة': 'ضبط النبرة', 'أفضل نموذج': 'Qwen3.8 27B', 'بديل (VRAM أقل)': 'Gemma 4 12B', 'السبب': 'النماذج الأكبر تحافظ عادةً على الحقائق بثبات أكبر' },
          { 'المهمة': 'صياغة الوثائق (بديل Notion AI)', 'أفضل نموذج': 'Gemma 4 12B', 'بديل (VRAM أقل)': 'Qwen3.5 4B', 'السبب': 'يتبع تعليمات تنسيق الوثائق' },
          { 'المهمة': 'تلخيص الملاحظات / أسئلة وأجوبة', 'أفضل نموذج': 'Gemma 4 12B', 'بديل (VRAM أقل)': 'Qwen3.5 4B / Phi-4 Mini', 'السبب': 'التلخيص يعمل جيدًا بأحجام صغيرة' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'أضف إلى موجّه النظام تعليمة "لا عبارات بنبرة الذكاء الاصطناعي". تميل النماذج افتراضيًا إلى لغة متحفظة بنبرة الذكاء الاصطناعي ("بالتأكيد! إليك النسخة المصححة..."). موجّه نظام يقول "أعد النص المصحح فقط، بلا مقدمة ولا تعليق" يزيل ذلك. وفي إعادة الصياغة الأسلوبية أضف: "لا تستخدم العبارات \'delve into\' و\'tapestry\' و\'fostering\' و\'realm of\' و\'it\'s worth noting\'".',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'مقارنة الخصوصية',
        content:
          '**الفرق في الخصوصية بين مساعدات الكتابة السحابية ونماذج LLM المحلية فرق بنيوي.** لا تستطيع الخدمات السحابية معالجة نصك دون أن تستلمه؛ ولا تستطيع نماذج LLM المحلية إرسال نصك إلى أي مكان دون اتصال صادر صريح.',
        image: '/images/replace-grammarly-notion-ai-with-local-cost-privacy-overview-en.svg',
        imageCaption: 'أدوات الكتابة السحابية مقابل نموذج LLM محلي: يعمل Grammarly وNotion AI كاشتراكين مدفوعين منفصلين ويرسلان النص إلى خوادم سحابية، بينما يُبقي Ollama وObsidian كل الكتابة والملاحظات على جهازك دون أي تكلفة برمجية متكررة.',
        items: [
          '**ترخيص بيانات Grammarly:** بموجب الفقرة 7.2 من [شروط خدمة Grammarly](https://www.grammarly.com/terms)، تحتفظ بملكية محتواك لكنك تمنح Grammarly ترخيصًا عالميًا غير حصري وخاليًا من الرسوم لاستخدامه لأغراض محددة، منها تشغيل خدماتها وتقديمها وتحسينها وتطوير منتجات أو ميزات جديدة. وتذكر الشروط أيضًا أن قبول الاقتراحات أو رفضها قد يساعد في تدريب محرك الاقتراحات لديها. وتذكر Grammarly أن شركاءها في نماذج LLM غير مسموح لهم باستخدام بيانات العملاء لتدريب نماذجهم.',
          '**مسار بيانات Notion AI:** توجّه Notion طلبات الذكاء الاصطناعي إلى مجموعة من مزوّدي النماذج (القائمة الحالية في صفحة المعالجين الفرعيين لديها). وتذكر Notion أنه بشكل افتراضي لا تستخدم هي ولا مزوّدوها بيانات العملاء لتدريب النماذج. تقدّم Enterprise عدم الاحتفاظ بالبيانات لدى مزوّدي LLM؛ وفي الخطط الأخرى يحتفظ المزوّدون بالبيانات حتى 30 يومًا.',
          '**مسار بيانات نموذج LLM المحلي:** لا إرسال خارجي. يستمع Ollama على localhost افتراضيًا ولا يُجري الاستدلال أي اتصال صادر. أوزان النموذج ملفات ثابتة على القرص؛ ويُعالج نصك في الذاكرة.',
          '**انعكاسات GDPR / السرية المهنية:** على المحامين والأطباء ومن يخضع لالتزامات السرية التحقق من الحمايات التعاقدية قبل استخدام Grammarly أو Notion AI لمحتوى متعلق بالعملاء. ويتجنب نموذج LLM المحلي مسألة المعالج من طرف ثالث لأن لا بيانات تغادر الجهاز.',
          '**القياس عن بُعد (Telemetry):** تجمع الأدوات السحابية بيانات الاستخدام والتفاعل إضافة إلى النص نفسه. وتختلف التطبيقات المحلية — راجع إعدادات القياس عن بُعد في كل تطبيق، وإذا احتجت ضمانًا بمستوى التدقيق فراقب حركة الشبكة الصادرة بنفسك.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'إذا كنت تستخدم Grammarly في المراسلات المهنية أو مسودات العقود أو أي محتوى خاضع لالتزامات السرية، فراجع سياسة البيانات في مؤسستك وشروط بيانات المؤسسات السارية قبل افتراض أن المحتوى محمي.',
          },
        ],
      },
      cost: {
        id: 'cost',
        title: 'مقارنة التكاليف',
        content:
          '**استبدال الأداتين يزيل اشتراك Grammarly وجزء الذكاء الاصطناعي من خطة Notion.** إعداد نموذج LLM المحلي مجاني من حيث البرمجيات؛ والتكلفة المستمرة الوحيدة هي الكهرباء.',
        columns: ['الأداة', 'التكلفة الشهرية', 'التكلفة السنوية', 'ملاحظات'],
        rows: [
          { 'الأداة': '[Grammarly Free](https://www.grammarly.com/plans)', 'التكلفة الشهرية': '$0', 'التكلفة السنوية': '$0', 'ملاحظات': '100 موجّه ذكاء اصطناعي/شهر؛ فحوص أساسية' },
          { 'الأداة': '[Grammarly Pro](https://www.grammarly.com/plans)', 'التكلفة الشهرية': 'من ~$12/شهر', 'التكلفة السنوية': 'من ~$144/سنة', 'ملاحظات': '2,000 موجّه/شهر؛ أعلى بالفوترة الشهرية' },
          { 'الأداة': '[Notion AI](https://www.notion.com/pricing)', 'التكلفة الشهرية': 'ضمن Business (~$20/مستخدم)', 'التكلفة السنوية': '~$240/مستخدم/سنة', 'ملاحظات': 'Free وPlus: تجربة فقط؛ بلا إضافة منفصلة' },
          { 'الأداة': '[Ollama (نموذج LLM محلي)](https://ollama.com)', 'التكلفة الشهرية': '$0', 'التكلفة السنوية': '$0', 'ملاحظات': 'مجاني ومفتوح المصدر؛ الكهرباء فقط' },
          { 'الأداة': '[Obsidian (بديل Notion)](https://obsidian.md)', 'التكلفة الشهرية': '$0', 'التكلفة السنوية': '$0', 'ملاحظات': 'مجاني للاستخدام الشخصي والمهني' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'إذا كنت متردّدًا في التحول، فابدأ بنقل التصحيح النحوي وحده إلى نموذج محلي لمدة 30 يومًا، وأبقِ Grammarly فعّالًا لتكامل المتصفح. قيّم هل جودة التصحيح المحلي وسير عمل النسخ واللصق مقبولان لكتابتك. وبعدها فقط قرر إلغاء Grammarly. أما التحول عن Notion AI فأسهل إن كنت مستعدًا لاستخدام Obsidian طبقةً لتدوين الملاحظات.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          '**عدم ضبط موجّه نظام لصيغة الناتج.** بدون موجّه نظام تبدأ النماذج التصحيحات بعبارة "بالتأكيد! إليك النص المصحح:" وتضيف شروحًا وتستخدم لغة بنبرة الذكاء الاصطناعي. اضبط دائمًا موجّه نظام يحدد "أعد النص المصحح فقط".',
          '**استخدام أصغر نموذج لإعادة الصياغة الأسلوبية المعقدة.** تتعامل النماذج الصغيرة مع التصحيح النحوي جيدًا لكنها تميل إلى إعادة صياغة أسلوبية أكثر نمطية. للعمل الأسلوبي المكثف انتقل إلى Gemma 4 12B أو أكبر.',
          '**توقع مكافئ لواجهة Notion في Obsidian.** Obsidian محرر Markdown لا قاعدة بيانات. إذا كان سير عملك في Notion يعتمد على قواعد البيانات والعروض والعلاقات، فليس Obsidian بديلًا كاملًا عن Notion — لا تنتقل إلا ميزات الذكاء الاصطناعي. قيّم هل ميزات قواعد البيانات حاسمة قبل التحول.',
          '**عدم وضع سقف لعدد الكلمات في إعادة الصياغة الأسلوبية.** بدون سقف يحشو النموذج إعادة الصياغة. أضف "أبقِ النص المُعاد كتابته ضمن 10% من عدد كلمات الأصل" إلى أي موجّه إعادة صياغة أسلوبية.',
          '**إرسال وثائق كاملة إلى نموذج صغير.** تنحرف النماذج الصغيرة مع المدخلات الطويلة. للوثائق الطويلة قسّمها إلى أقسام وصحّح كل قسم على حدة.',
          '**توقع تسطيرًا مباشرًا من نموذج LLM.** يجيب النموذج عندما تسأله؛ ولا يراقب كتابتك. للتسطير أثناء الكتابة أضف مدققًا محليًا قائمًا على القواعد مثل Harper.',
          '**افتراض أن Notion AI يمكنه استخدام نموذج محلي.** لا توثّق Notion دعمًا لذلك؛ استخدم Notion API مع Ollama، أو انقل الملاحظات الكثيفة بالذكاء الاصطناعي إلى تطبيق محلي أولًا.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'شروط خدمة Grammarly — الفقرة 7.2 (ترخيص محتوى المستخدم) — [grammarly.com/terms](https://www.grammarly.com/terms)',
          'خطط Grammarly — [grammarly.com/plans](https://www.grammarly.com/plans)',
          'الذكاء الاصطناعي المسؤول لدى Grammarly (استخدام بيانات الشركاء) — [grammarly.com/responsible-ai](https://www.grammarly.com/responsible-ai)',
          'تسعير Notion والوصول إلى Notion AI حسب الخطة — [notion.com/pricing](https://www.notion.com/pricing)',
          'ممارسات أمان Notion AI (المزوّدون والتدريب والاحتفاظ) — [notion.com/help/notion-ai-security-practices](https://www.notion.com/help/notion-ai-security-practices)',
          'وثائق Notion MCP — [developers.notion.com/docs/mcp](https://developers.notion.com/docs/mcp)',
          'Obsidian مجاني للعمل (فبراير 2025) — [obsidian.md/blog/free-for-work](https://obsidian.md/blog/free-for-work/)',
          'مدقق Harper النحوي — [writewithharper.com](https://writewithharper.com)',
          'خادم LanguageTool HTTP (الاستضافة الذاتية) — [dev.languagetool.org/http-server](https://dev.languagetool.org/http-server)',
          'النماذج المحلية في Raycast — [manual.raycast.com/ai/local-models](https://manual.raycast.com/ai/local-models)',
          'مكتبة نماذج Ollama — [ollama.com/library/gemma4](https://ollama.com/library/gemma4)، [ollama.com/library/qwen3.5](https://ollama.com/library/qwen3.5)، [ollama.com/library/qwen3.8](https://ollama.com/library/qwen3.8)',
          'وثائق إضافة Obsidian Copilot — [GitHub: logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot)',
          'إضافة Obsidian Smart Connections — [GitHub: brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'أي نماذج LLM الصغيرة تعطي تصحيحًا نحويًا محليًا جيدًا؟',
            a: 'يناسب Qwen3.5 4B (`qwen3.5:4b`، نحو 3–4 جيجابايت) وPhi-4 Mini (`phi4-mini`) أجهزة 8 جيجابايت؛ ويلائم Gemma 4 12B (`gemma4:12b`) أنظمة 16 جيجابايت وإعادة الصياغة الأسلوبية؛ ويناسب Qwen3.8 27B أنظمة 24 جيجابايت فأكثر. لا يوجد اختبار معياري منشور يرتبها في التصحيح النحوي، فجرّب نموذجين على خمس فقرات من نصوصك، واحتفظ بالذي يغيّر أقل مع التقاط أخطائك. استخدم موجّه نظام "صحّح الأخطاء فقط، أعد النص المصحح فقط" ودرجة حرارة منخفضة.',
          },
          {
            q: 'هل يوجد بديل محلي لـ Grammarly يعمل في Google Docs؟',
            a: 'ليس كبديل جاهز. لا تُدرج أي من الأدوات المحلية المذكورة هنا Google Docs محررًا مدعومًا. الإعداد العملي هو: حدّد ← أعد الصياغة ← الصق: حدّد النص في Docs (مع تفعيل وضع الاقتراحات)، وأرسله عبر أداة اختصار أو شريط جانبي في المتصفح إلى نموذج محلي، والصق النتيجة. وللتسطير المباشر في أماكن أخرى، فإن Harper (للإنجليزية فقط، على الجهاز، بامتدادات لـ Chrome وEdge وFirefox) وخادم LanguageTool المستضاف ذاتيًا هما الخياران المحليان.',
          },
          {
            q: 'كيف أستخدم Ollama مع Notion؟',
            a: 'لا توثّق Notion طريقة لتوجيه Notion AI إلى نموذج محلي. لاستخدام Ollama مع محتوى Notion، اكتب سكربتًا صغيرًا يقرأ صفحة عبر Notion API، ويرسل النص إلى Ollama على localhost:11434، ويكتب النتيجة مرة أخرى (انظر المثال أعلاه). خطوة النموذج محلية؛ لكن الصفحة تبقى على خوادم Notion. ولإعداد محلي بالكامل، انقل الملاحظات الكثيفة بالذكاء الاصطناعي إلى Obsidian مع إضافة Copilot أو إلى تطبيق محلي أولًا مثل AppFlowy.',
          },
          {
            q: 'هل يمكنني ربط نموذج LLM محلي بقاعدة بيانات Notion محلية؟',
            a: 'ليس لدى Notion قاعدة بيانات محلية: تعيش مساحات العمل على خوادم Notion ويُوصل إليها عبر واجهتها البرمجية. يمكنك تشغيل النموذج محليًا وتبادل النص مع Notion عبر الواجهة البرمجية، أو اختيار مساحة عمل محلية أولًا. يخزّن Obsidian الملاحظات كملفات Markdown على القرص؛ وAppFlowy تطبيق مفتوح المصدر على طراز Notion مع وضع عمل دون اتصال.',
          },
          {
            q: 'هل يمكن لنموذج LLM محلي تحليل أسلوب كتابتي الشخصي؟',
            a: 'نعم. الصق ثلاث عينات من كتابتك في نموذج محلي مع موجّه ملف الأسلوب من هذا الدليل: يعيد وصفًا نقطيًا لطول جملك ونبرتك ومفرداتك وعاداتك، مع موجّه نظام قصير يمكنك إعادة استخدامه ليحافظ نموذج المحرر على صوتك. ولأن العينات لا تغادر جهازك، فهذا آمن للمسودات الخاصة.',
          },
          {
            q: 'ما الفرق بين Notion AI وGrammarly؟',
            a: 'يقعان في مكانين مختلفين. يعمل Notion AI داخل Notion: صياغة وتلخيص وإجابة عن أسئلة حول مساحة عملك. ويفحص Grammarly الكتابة عبر التطبيقات وحقول النص في المتصفح ويقدّم إعادة صياغة. يتداخلان في إعادة الصياغة والنبرة، لكن أيًّا منهما لا يحل محل الآخر، ويمكن استبدال كليهما في معظم المهام بنموذج LLM محلي مع تطبيق ملاحظات.',
          },
          {
            q: 'هل يعمل Grammarly في Notion وObsidian؟',
            a: 'يفحص امتداد Grammarly في المتصفح حقول النص في المحررات المعتمدة على المتصفح، ومنها Notion على الويب. أما تطبيقات سطح المكتب مثل Obsidian فخارج ما يصل إليه امتداد المتصفح. وفي Obsidian يغطي مدقق محلي مثل Harper (الذي له إضافة لـ Obsidian) أو إضافة Copilot مع Ollama المجال نفسه دون إرسال النص إلى خدمة سحابية.',
          },
          {
            q: 'هل نموذج LLM المحلي بجودة Grammarly في التصحيح النحوي؟',
            a: 'في أخطاء النحو والترقيم والإملاء اليومية، يتعامل نموذج محلي جيد التوجيه مع التصحيحات نفسها؛ اختبره على نصك لتتأكد. وتبقى لـ Grammarly ميزة في التصحيحات الفورية أثناء الكتابة وفي امتداد المتصفح الذي يعمل عبر Gmail وGoogle Docs وتطبيقات الويب الأخرى. يتطلب نموذج LLM المحلي سير عمل تحديد ولصق للنص في حقول المتصفح.',
          },
          {
            q: 'هل يمكنني استخدام Obsidian بديلًا كاملًا عن Notion؟',
            a: 'يستبدل Obsidian ميزات التدوين وقاعدة المعرفة في Notion استبدالًا جيدًا. ولا يستبدل قواعد بيانات Notion وإدارة المشاريع وميزات البيانات العلائقية. إذا كان استخدامك لـ Notion أساسًا للملاحظات والوثائق والويكي — فـ Obsidian بديل كامل. وإذا كنت تعتمد على قواعد بيانات Notion وعروض اللوحات والخصائص العلائقية — فستحتاج أدوات إضافية (Anytype أو AppFlowy، أو Notion نفسه لطبقة قواعد البيانات مع Obsidian للكتابة).',
          },
          {
            q: 'أي نموذج محلي هو الأقرب لاقتراحات الكتابة في Grammarly؟',
            a: 'لا ينسخ أي نموذج محلي محرك اقتراحات Grammarly، ولا يوجد اختبار معياري يرتب النماذج لهذا الغرض. عمليًا، يمنح Gemma 4 12B وQwen3.8 27B أكبر مساحة لإعادة الصياغة الأسلوبية وضبط النبرة عند توجيههما للحفاظ على الصوت الأصلي، بينما يكفي Qwen3.5 4B وPhi-4 Mini للتصحيحات النحوية فقط. اجمع أيًّا منها مع مدقق قائم على القواعد مثل Harper إذا أردت تسطيرًا أثناء الكتابة.',
          },
          {
            q: 'هل ترسل إضافة Obsidian Copilot ملاحظاتي إلى السحابة؟',
            a: 'لا، عند ضبطها لاستخدام نسخة Ollama محلية. تدعم الإضافة نماذج LLM السحابية (OpenAI وAnthropic) ونماذج Ollama المحلية. عند اختيار Ollama مزوّدًا للنموذج وإدخال عنوان localhost، تتم كل معالجة الذكاء الاصطناعي محليًا. لا يُرسل أي محتوى من الملاحظات إلى الخارج. تحقق من ذلك بمراقبة حركة الشبكة بأداة مثل Little Snitch (macOS) أو Wireshark إذا احتجت تحققًا بمستوى التدقيق.',
          },
          {
            q: 'هل يمكنني استخدام نموذج LLM محلي في Google Docs أو Gmail؟',
            a: 'ليس مباشرةً — لا يوجد امتداد متصفح لنموذج LLM محلي مكافئ لـ Grammarly يتكامل أصليًا في حقول النص بالمتصفح. الحلول البديلة: (1) حدّد النص في Google Docs، وانسخه، والصقه في تطبيق الذكاء الاصطناعي المحلي، وانسخ النسخة المصححة، والصقها في مكانها؛ (2) أداة اختصار تعالج النص المحدد وتستبدله (يتطلب Raycast مع النماذج المحلية اشتراك Pro؛ أما سكربت AutoHotkey الذي يستدعي واجهة Ollama API فمجاني)؛ (3) امتداد Chrome مخصص يقرأ النص المحدد ويستدعي واجهة Ollama API المحلية (توجد قوالب مفتوحة المصدر على GitHub). لا يضاهي أي منها تجربة Grammarly المضمّنة السلسة.',
          },
          {
            q: 'هل هذا الإعداد متوافق مع HIPAA أو GDPR للاستخدام المهني؟',
            a: 'نموذج LLM محلي يعالج البيانات حصرًا على جهازك دون إرسال خارجي يعالج الشاغل الأساسي لنقل البيانات في كل من HIPAA وGDPR. غير أن الامتثال يعتمد على منظومتك التقنية الكاملة وضوابط الأمان والمتطلبات التنظيمية المحددة. نموذج LLM المحلي ليس متوافقًا تلقائيًا — عليك تقييم أمان الجهاز الطرفي وحمايته المادية وضوابط الوصول. وللامتثال الرسمي استشر مسؤول الامتثال لديك. تزيل المعالجة المحلية مسألة "معالج البيانات من طرف ثالث" لكنها لا تغني عن برنامج امتثال متكامل.',
          },
          {
            q: 'ما أفضل مساعد كتابة محلي للأوراق الأكاديمية؟',
            a: 'نموذج محلي متوسط الحجم (مثل Gemma 4 12B) مع موجّه نظام يحدد: "صحّح النحو والترقيم فقط — لا تغيّر المفردات ولا بنية الجمل ولا المحتوى. احتفظ بجميع الاستشهادات والمصطلحات التقنية واللغة الخاصة بالمجال دون تغيير." يحاكي هذا وضع النحو فقط، وهو إعداد أقل مخاطرة للكتابة الأكاديمية، حيث قد يغيّر تبديل الصياغة المعنى دون قصد أو يبدو كأنه تعديل لمحتوى مقتبس.',
          },
          {
            q: 'هل يمكنني استبدال تلخيص محاضر الاجتماعات في Notion AI محليًا؟',
            a: 'نعم. صدّر محضر الاجتماع كملف نصي أو Markdown (أو الصق نص التفريغ مباشرة). استخدم الموجّه: "لخّص محضر الاجتماع هذا إلى: (1) القرارات الرئيسية المتخذة، (2) بنود العمل مع أصحابها، (3) الأسئلة المفتوحة. استخدم نقاطًا لكل قسم. أبقِه دون 300 كلمة." يتعامل نموذج صغير يتبع التعليمات مع تلخيص الاجتماعات. وللاجتماعات المتكررة، أنشئ قالب موجّه محفوظًا في تطبيق الذكاء الاصطناعي المحلي.',
          },
          {
            q: 'ما نموذج LLM الذي يستخدمه Grammarly؟ وهل Grammarly نموذج LLM؟',
            a: 'Grammarly منتج كتابة، لا نموذجًا واحدًا. لا تسمّي Grammarly النماذج الكامنة وراءه في الصفحات التي راجعناها (الخطط والشروط وصفحة الذكاء الاصطناعي المسؤول). تقول صفحة الذكاء الاصطناعي المسؤول لديها إن المعلومات المستخدمة لتشغيل ميزات الذكاء الاصطناعي التوليدي تُشارك مع شركاء LLM، وإن هؤلاء الشركاء غير مسموح لهم باستخدام بيانات العملاء لتدريب نماذجهم. وNotion AI مشابه: يستخدم مجموعة من المزوّدين المدرجين في صفحة المعالجين الفرعيين لديه. كما نشر باحثون نماذج تحرير نصوص مفتوحة تحت منظمة grammarly على Hugging Face (CoEdIT، من 770M إلى 11B معامل)، وهي نماذج بحثية لا المنتج نفسه. ما يهم للخصوصية هو معالجة البيانات: النص المرسل إلى أي من المنتجين يُعالج على خوادم الجهة المزوّدة. ويتجنب نموذج LLM المحلي ذلك — فالنص لا يغادر جهازك.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[نموذج LLM محلي مع Obsidian](/ar/power-local-llm/local-llm-with-obsidian-2026) — إعداد Obsidian + Ollama كاملًا لتدوين الملاحظات والأسئلة والأجوبة عن مخزنك.',
          '[مراجعة Copilot for Obsidian](/ar/power-local-llm/copilot-for-obsidian-review) — إضافة Copilot المستخدمة في سير عمل استبدال Notion AI.',
          '[مقارنة إضافات الذكاء الاصطناعي في Obsidian وLogseq](/ar/power-local-llm/obsidian-logseq-ai-plugins) — خيارات الإضافات للذكاء الاصطناعي المحلي في تطبيقات تدوين الملاحظات.',
          '[نماذج LLM المحلية الصغيرة](/ar/local-llms/small-local-llm-models) — النماذج الصغيرة الحالية لأجهزة 4–8 جيجابايت، ذات صلة بالتصحيح النحوي المحلي.',
          '[أتمتة البريد الإلكتروني والتقويم بنموذج LLM محلي](/ar/power-local-llm/local-llm-email-and-calendar-automation) — استخدام نموذج LLM محلي لصياغة البريد وإدارة التقويم، مكمّلًا لمساعد الكتابة.',
          '[موجّهات نموذج LLM المحلي لكتّاب الروايات](/ar/power-local-llm/local-llm-prompts-for-fiction-writers) — قوالب موجّهات إبداعية تتجاوز تصحيح النحو، تشمل المشاهد وتطوير الشخصيات.',
          '[استبدل Zapier بوكلاء ذكاء اصطناعي محليين](/ar/power-local-llm/replace-zapier-with-local-ai-agents) — أتمتة سير العمل محليًا، تربط أدوات الكتابة بعمليات الأعمال الأخرى.',
          '[RAG محلي لبيانات الأعمال الخاصة](/ar/power-local-llm/local-rag-for-private-business-data) — أسئلة وأجوبة عن الوثائق التجارية السرية، موسّعًا استخدام الملاحظات إلى مكتبات وثائق أكبر.',
          '[أسهل تطبيق AI محلي على Windows / Mac / Linux](/ar/power-local-llm/easiest-local-ai-app-windows-mac-linux) — إذا احتجت لإعداد أول تطبيق AI محلي لديك قبل تطبيق سير عمل مساعد الكتابة.',
          '[وكلاء AI المحليون لسير عمل الأعمال: الامتثال للاتحاد الأوروبي](/ar/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — سياق GDPR وقانون الذكاء الاصطناعي الأوروبي عند نشر مساعدي كتابة AI محليين في بيئات الأعمال الأوروبية.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'استبدل Grammarly وNotion AI بنموذج LLM محلي (2026)',
      description: 'بديل Grammarly محلي: أفضل نماذج LLM الصغيرة لتصحيح النحو، وما يعمل في Google Docs وNotion، وإعدادات Ollama التي تُبقي نصك على جهازك.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/replace-grammarly-notion-ai-with-local',
      inLanguage: 'ar',
      datePublished: '2026-05-08',
      dateModified: '2026-10-19',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Beginner',
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Productivity & Knowledge Tools',
    heroImage: '/images/replace-grammarly-notion-ai-with-local-overview-hero-ko.webp',
    title: 'Grammarly와 Notion AI를 로컬 LLM으로 대체하기 (2026)',
    seoTitle: 'Grammarly 로컬 대안: 소형 LLM 추천 2026',
    intro:
      'Grammarly와 Notion AI는 사용자의 글을 클라우드 서버에서 처리합니다 — 이메일 초안, 기밀 문서, 개인 메모가 설계상 제3자 시스템을 거치게 됩니다. Ollama 또는 LM Studio로 실행하는 로컬 LLM은 대부분의 글쓰기 작업에서 두 도구를 모두 대체할 수 있습니다: 문법 및 문체 교정, 문서 초안 작성, 콘텐츠 요약, AI 보조 메모 작성 — 텍스트가 기기 밖으로 나가지 않습니다. 이 가이드는 문법 교정에 적합한 소형 모델, Google Docs와 Notion에서 가능한 방법, 그리고 Grammarly와 여전히 남아 있는 격차를 다룹니다.',
    metaDescription:
      'Grammarly 로컬 대안: 문법 교정에 맞는 소형 LLM, Google Docs·Notion 활용법, 텍스트가 기기를 떠나지 않는 Ollama 설정.',
    twitterDescription:
      'Grammarly와 Notion AI를 로컬 LLM으로 대체: 문법 교정용 소형 모델, Google Docs·Notion 옵션, Ollama 설정 — 텍스트가 기기 밖으로 나가지 않습니다.',
    current_models_mentioned: [
      'Qwen3.5 4B',
      'Gemma 4 E4B',
      'Gemma 4 12B',
      'Qwen3.8 27B',
      'Phi-4 Mini',
    ],
    current_hardware_mentioned: [
      'Apple M3 MacBook Air 8 GB',
      'Apple M5 MacBook Pro 16 GB',
      'NVIDIA RTX 3060 12 GB',
    ],
    audience:
      '글쓰기 교정에 Grammarly를, 문서 보조에 Notion AI를 사용하며 두 도구를 콘텐츠를 비공개로 유지하는 로컬 AI로 대체하고자 하는 지식 노동자, 작가, 학생, 프라이버시를 중시하는 전문가.',
    readTime: '13분 분량',
    educationalLevel: 'Beginner',
    primaryTerm: 'Grammarly 로컬 대안',
    targetKeywords: [
      'Grammarly 로컬 LLM 대체',
      'Grammarly 로컬 대안',
      '문법 교정 LLM 추천',
      '문법 교정 소형 LLM',
      'Notion AI 로컬 대체',
      'Notion Ollama',
      '로컬 LLM 글쓰기 도우미',
      'Grammarly 클라우드 없는 대안',
      'Notion AI 프라이버시 대안',
      'Ollama 글쓰기 교정',
    ],
    leadAnswerBlock:
      '**Ollama로 실행하는 로컬 LLM은 텍스트를 클라우드 서비스로 보내지 않고도 Grammarly와 Notion AI의 핵심 기능을 대체합니다. Grammarly 대체: Qwen3.5 4B 이상의 모든 모델에서 프롬프트 템플릿("이 단락의 문법을 교정하고 문체를 개선하세요. 교정된 텍스트만 반환하세요.")으로 문법 및 문체 교정. Notion AI 대체: Copilot 또는 Smart Connections 플러그인을 Ollama에 연결한 Obsidian으로 문서 초안 작성과 메모 Q&A. 프라이버시 근거는 구체적입니다: Grammarly 서비스 약관(Section 7.2)은 서비스 운영 및 개선을 위해 사용자 콘텐츠를 사용할 수 있는 라이선스를 Grammarly에 부여하고, Notion AI는 요청을 제3자 모델 제공업체로 전달하는 반면, 로컬 모델은 동일한 텍스트를 사용자 하드웨어에서 처리합니다. 일상적인 글쓰기에서는 격차가 좁고, 가장 큰 곳은 두 군데입니다: Google Docs, Gmail 등 브라우저 편집기에서의 입력 중 실시간 검사, 그리고 도메인별 문체 제안.**',
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM이 Grammarly와 Notion AI를 대체할 수 있습니까?',
        answer:
          '예, 대부분의 일상적인 사용 사례에서 가능합니다. Grammarly의 경우: 로컬 LLM이 문법 교정, 명확성을 위한 재작성, 수동태 제거, 기본 어조 조정을 처리합니다. Grammarly의 실시간 인라인 제안이나 브라우저 확장 통합은 따라가지 못하지만, 프롬프트 기반 워크플로우가 동일한 교정을 필요할 때 처리합니다. Notion AI의 경우: Ollama에 연결한 Copilot 플러그인이 있는 Obsidian이 문서 초안 작성, 콘텐츠 확장, 메모 Q&A를 대체합니다. Notion은 Notion AI 자체를 로컬 모델에 연결하는 방법을 문서화하지 않았습니다. 시작점: Qwen3.5 4B(약 3–4 GB 다운로드, 8 GB 시스템), Gemma 4 12B(16 GB 시스템) 또는 Qwen3.8 27B(24 GB 이상) — 문법 전용 벤치마크로 이들의 순위를 매긴 곳은 없으므로 본인의 단락으로 두 모델을 테스트하세요.',
        bullets: [
          '문법 교정: "문법만 교정하고 교정된 텍스트를 반환하세요"라는 시스템 프롬프트가 있는 지시 따르기 능력의 로컬 모델이면 Grammarly의 핵심 교정 사용 사례를 처리합니다.',
          '소형 모델: Qwen3.5 4B와 Phi-4 Mini는 8 GB 기기에 맞고, 16 GB에서 문체 재작성을 하려면 Gemma 4 12B가 한 단계 위 선택입니다.',
          'Notion AI 대체: Obsidian + Copilot 플러그인(또는 Smart Connections 플러그인)을 Ollama에 연결 — 메모 Q&A, 문서 초안 작성, 콘텐츠 확장.',
          '실시간 교정: 로컬 LLM은 Google Docs나 Gmail에서 입력하는 동안 오류에 밑줄을 긋지 않습니다. 단축키/사이드바 워크플로우를 쓰거나, 지원되는 편집기에서 인라인 밑줄이 필요하면 Harper 같은 로컬 규칙 기반 검사기를 사용하세요.',
          '프라이버시: Grammarly는 약관 Section 7.2에 따라 사용자 콘텐츠를 라이선스받고, Notion AI는 요청을 제3자 모델 제공업체로 보냅니다. 로컬 LLM은 외부 전송 없이 로컬에서 처리합니다.',
          '비용: Grammarly Pro는 연간 결제 시 월 약 $12부터, Notion AI는 Business 플랜(사용자당 월 약 $20)에 포함됩니다. 로컬 LLM은 하드웨어 비용 이후 무료입니다.',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '핵심 요점', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '대체하는 것(과 대체하지 않는 것)', anchor: '#what-you-replace' },
      { label: 'Grammarly 대체: 문법 및 문체 교정', anchor: '#grammarly-replacement' },
      { label: '로컬 문법 교정에 적합한 소형 LLM', anchor: '#small-models-grammar' },
      { label: '클라우드 없이 Google Docs, Gmail 인라인 검사', anchor: '#google-docs-inline' },
      { label: 'Notion AI 대체: 문서 작성 및 메모', anchor: '#notion-replacement' },
      { label: 'Notion과 Ollama: 연결되는 것과 안 되는 것', anchor: '#notion-ollama' },
      { label: '통합 옵션', anchor: '#integrations' },
      { label: '모델 추천', anchor: '#models' },
      { label: '프라이버시 비교', anchor: '#privacy' },
      { label: '비용 비교', anchor: '#cost' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**로컬 LLM은 Grammarly의 핵심 기능인 문법, 명확성, 기본 문체 교정을 대체하지만 실시간 인라인 통합은 대체하지 않습니다.** 워크플로우가 "입력하는 동안 교정이 나타남"에서 "텍스트 선택 → 교정된 버전 받기 → 다시 붙여넣기"로 바뀝니다. 많은 사용자에게 이것은 완전한 프라이버시를 위해 수용할 만한 교환입니다.',
          '**Notion AI 대체는 더 완전하지만, Notion의 AI를 떠난다는 뜻입니다.** Notion은 Notion AI를 로컬 모델에 연결하는 방법을 문서화하지 않았습니다. 로컬 Ollama 인스턴스에 연결한 Copilot 플러그인(또는 Smart Connections 플러그인)이 있는 Obsidian은 문서 초안 작성, 콘텐츠 확장, 메모 Q&A에서 대등한 기능을 제공하며 모든 처리가 로컬에서 이루어집니다. Notion에 머무르려면 Notion API를 통해 AI 단계를 직접 실행하는 방법뿐입니다.',
          '**프라이버시 근거는 이론에 그치지 않습니다.** Grammarly 서비스 약관(Section 7.2)은 서비스의 운영, 개선, 개발을 위해 사용자 콘텐츠를 사용할 수 있는 라이선스를 부여합니다. Notion AI는 요청을 제3자 모델 제공업체로 보내며, Notion은 기본적으로 자사와 제공업체 모두 고객 데이터로 학습하지 않는다고 밝힙니다. 로컬 LLM은 외부 전송 없이 동일한 텍스트를 사용자 하드웨어에서 처리합니다.',
          '**문법 교정에는 소형 모델로 충분합니다.** Qwen3.5 4B와 Phi-4 Mini는 8 GB 기기에 맞고, Gemma 4 12B는 16 GB 시스템과 문체 재작성에 적합합니다. 문법 교정 기준으로 이들의 순위를 매긴 공개 벤치마크는 없으므로, 정하기 전에 본인의 단락으로 두 모델을 실행해 보세요.',
          '**인라인 밑줄이 필요하면 규칙 기반 검사기를 추가하세요.** Harper(로컬, 영어 전용)와 자체 호스팅 LanguageTool 서버는 지원되는 편집기에서 입력 중 오류에 밑줄을 긋습니다. Harper는 Google Docs를 지원 목록에 올리지 않았으므로, 그곳에서는 선택 → 재작성 → 붙여넣기 워크플로우가 유지됩니다.',
          '**비용은 부차적인 근거입니다.** Grammarly Pro는 연간 결제 시 월 약 $12부터이고, Notion AI는 별도 추가 기능이 아니라 Business 플랜(사용자당 월 약 $20)의 일부가 되었습니다. 로컬 LLM 등가물은 일회성 하드웨어 비용 이후 무료입니다.',
          '**설정에 약 20분이 걸립니다.** Ollama 설치 + 모델 다운로드 + Obsidian 플러그인 구성은 일회성 설정입니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**Grammarly 비용:** 무료(AI 프롬프트 월 100회), Pro는 연간 결제 시 월 약 $12부터(AI 프롬프트 월 2,000회), Enterprise는 별도 문의.',
          '**Notion AI 비용:** Business 플랜에 포함(연간 결제 시 사용자당 월 약 $20); Free와 Plus 플랜은 체험만 제공.',
          '**로컬 LLM 비용:** 무료(오픈소스 모델 + Ollama) — 하드웨어 전기 비용만.',
          '**소형 모델 시작점:** 8 GB에서는 Qwen3.5 4B(`qwen3.5:4b`) 또는 Phi-4 Mini(`phi4-mini`); 16 GB에서는 Gemma 4 12B(`gemma4:12b`); 24 GB 이상에서는 Qwen3.8 27B(`qwen3.8:27b`).',
          '**Grammarly 프라이버시:** 서비스 약관 Section 7.2는 Grammarly 서비스의 운영, 개선, 개발을 위해 사용자 콘텐츠를 사용할 수 있는 라이선스를 부여합니다.',
          '**Notion AI 프라이버시:** 요청은 제3자 모델 제공업체로 전달되며, 기본적으로 Notion과 제공업체 모두 고객 데이터로 학습하지 않습니다.',
          '**Obsidian 비용:** 2025년 2월부터 개인 및 업무용 모두 무료.',
        ],
      },
      whatYouReplace: {
        id: 'what-you-replace',
        title: '대체하는 것(과 대체하지 않는 것)',
        content:
          '**로컬 LLM은 Grammarly와 Notion AI의 일상적 사용 대부분을 커버하지만, 커버하지 못하는 부분이 일부 사용자에게는 중요합니다.** 전환 전에 격차를 이해하면 실망을 방지할 수 있습니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 LLM은 Grammarly의 문법 교정, 문체 재작성, 어조 조정과 Notion AI의 문서 초안 작성 및 메모 Q&A를 대체합니다 — 단, Grammarly의 실시간 인라인 통합이나 Notion AI의 네이티브 편집기 통합은 대체하지 않습니다.',
          },
          {
            type: 'plain-terms',
            text: 'Grammarly는 브라우저나 데스크톱에서 입력하는 내용을 지켜보다가 입력하는 동안 교정을 보여주는 방식으로 작동합니다. 로컬 LLM은 그것을 스스로 할 수 없습니다. 할 수 있는 것은 건네받은 모든 텍스트를 교정하는 것입니다 — 따라서 워크플로우는 이렇게 됩니다: 이메일 초안 작성, 텍스트 선택, 로컬 AI 앱이나 단축키 도구로 전송, 교정된 버전 받기, Gmail에 붙여넣기. 인라인 교정보다 느리지만 비공개이고 무료입니다.',
          },
        ],
        columns: ['기능', 'Grammarly', '로컬 LLM 동등', '격차'],
        rows: [
          { '기능': '문법 교정', 'Grammarly': '인라인, 실시간', '로컬 LLM 동등': '프롬프트 기반, 필요 시', '격차': '실시간 인라인 없음; 복사-붙여넣기' },
          { '기능': '문체 제안', 'Grammarly': '설명과 함께 인라인', '로컬 LLM 동등': '프롬프트 기반 재작성', '격차': '기본적으로 제안별 설명 없음' },
          { '기능': '어조 감지', 'Grammarly': '자동, 명명된 어조', '로컬 LLM 동등': '프롬프트에서 목표 어조 지정', '격차': '명시적 어조 지시 필요' },
          { '기능': '브라우저 확장', 'Grammarly': 'Gmail, Google Docs, 브라우저 필드', '로컬 LLM 동등': '복사-붙여넣기, 단축키, 사이드바', '격차': '브라우저 네이티브 통합 없음' },
          { '기능': 'Notion AI: 문서 작성', 'Grammarly': '해당 없음', '로컬 LLM 동등': 'Obsidian + Copilot → Ollama', '격차': 'Notion UI에 없음; 별도 앱' },
          { '기능': 'Notion AI: 메모 Q&A', 'Grammarly': '해당 없음', '로컬 LLM 동등': 'Obsidian Smart Connections → Ollama', '격차': 'Obsidian vault 필요; Notion DB 검색 없음' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '통합 격차는 Grammarly가 인라인 교정을 표시하는 Gmail, Google Docs 등 브라우저 기반 편집기에서 주로 작성하는 경우 가장 중요합니다. 주로 데스크톱 앱(Word, Obsidian, VS Code, Scrivener)에서 작성한다면 로컬 LLM의 복사-붙여넣기 워크플로우가 인라인 제안보다 거의 느리지 않습니다. 결정 전에 본인의 작성 환경을 파악하세요.',
          },
        ],
      },
      grammarlyReplacement: {
        id: 'grammarly-replacement',
        title: 'Grammarly 대체: 문법 및 문체 교정',
        content:
          '**Grammarly 대체 워크플로우는 몇 가지 프롬프트 템플릿과 단축키 앱입니다.** 문법만 교정하는 템플릿, 전체 문체 재작성 템플릿, 어조 템플릿이 각각 하나씩입니다. 일반적인 노트북 하드웨어에서 단락 길이의 텍스트는 몇 초 안에 돌아오며, 속도는 모델 크기와 하드웨어에 따라 달라집니다.',
        promptExamples: [
          {
            label: '문법만 교정 (Grammarly 기본 대체)',
            text: '다음 텍스트의 문법, 철자, 구두점을 교정하세요. 교정된 텍스트만 반환하세요 — 설명, 마크업, 요약 없이.\n\n[텍스트를 여기에 붙여넣으세요]',
          },
          {
            label: '문체 및 명확성 재작성 (Grammarly Premium 대체)',
            text: '다음 텍스트를 더 명확하고 전문적인 어조로 재작성하세요. 문법을 교정하고, 수동태를 제거하고, 긴 문장을 다듬고, 군더더기 표현을 없애세요. 재작성된 텍스트만 반환하세요.\n\n목표 어조: [전문적 / 일상적 / 학술적 / 설득력 있는]\n목표 독자: [일반 / 기술적 / 경영진]\n\n[텍스트를 여기에 붙여넣으세요]',
          },
          {
            label: '어조 조정 프롬프트',
            text: '다음 이메일을 [더 격식 있게 / 더 일상적으로 / 더 간결하게 / 더 외교적으로] 재작성하세요. 모든 사실적 내용은 동일하게 유지하세요. 재작성된 이메일만 반환하세요.\n\n[이메일을 여기에 붙여넣으세요]',
          },
          {
            label: '개인 문체 프로필 (내 글을 로컬에서 분석)',
            text: '아래는 제가 쓴 글 샘플 세 개입니다. 제 문체를 8개의 글머리 기호로 설명하세요: 일반적인 문장 길이, 어휘 수준, 어조, 선호하는 구성, 구두점 습관, 피하는 표현. 그런 다음 편집자 모델이 이 문체를 유지하면서 텍스트를 교정하도록 하는 100단어 분량의 시스템 프롬프트를 작성하세요.\n\n샘플 1: [붙여넣기]\n샘플 2: [붙여넣기]\n샘플 3: [붙여넣기]',
          },
        ],
        items: [
          '**글쓰기 세션을 위한 시스템 프롬프트:** 로컬 AI 앱의 시스템 프롬프트를 "당신은 전문 편집자입니다. 교정되거나 재작성된 텍스트만 반환하세요 — 서문, 설명, 주석 없이."로 설정하세요. 이렇게 하면 모델이 출력 앞에 "훌륭한 글입니다! 교정본은 다음과 같습니다..."를 덧붙이지 않습니다.',
          '**단축키 통합:** macOS에서는 Raycast, Windows에서는 AutoHotkey로 선택한 텍스트를 Ollama에 보내고 결과를 붙여넣는 단축키를 만드세요. 복사-붙여넣기 워크플로우가 한 번의 키 입력으로 줄어듭니다. Raycast 매뉴얼은 로컬 모델 지원을 Pro 기능으로 안내하며, Ollama API를 호출하는 AutoHotkey 스크립트는 무료입니다.',
          '**문법만 vs. 문체 재작성:** 문법만 교정하는 프롬프트와 전체 문체 재작성 프롬프트를 따로 사용하세요. 문법만 교정하는 쪽이 표현 변경이 의미를 바꿀 수 있는 법률, 기술, 구조화된 문서에 더 안전합니다. 문체 재작성은 이메일, 블로그 글, 일반 서신에 적합합니다.',
          '**학술 글쓰기의 경우:** 문체 재작성 프롬프트에 "모든 인용, 전문 용어, 분야 어휘는 변경하지 마세요"를 추가하세요. 이 지시가 없으면 모델이 때때로 기술적 표현을 단순화하거나 바꿔 말합니다.',
          '**비즈니스 이메일의 경우:** "발신자는 [회사]의 [직책] [이름]입니다. 이메일은 출력에 개인화 세부 정보 없이 발신자의 전문적인 목소리를 반영해야 합니다."를 추가하세요. 그러면 어조가 발신자의 전문적 맥락에 맞춰 고정됩니다.',
          '**내 문체를 로컬에서 분석:** 위의 문체 프로필 프롬프트는 글 샘플 세 개를 재사용 가능한 시스템 프롬프트로 바꿔 줍니다. 샘플이 기기 밖으로 나가지 않으므로, 클라우드 어시스턴트라면 먼저 전송받아야 하는 비공개 초안에도 안전하게 쓸 수 있습니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '빠른 macOS 워크플로우: Ollama를 설치하고 Gemma 4 12B 같은 모델을 받은 뒤, 문법 교정 프롬프트가 있는 Raycast AI 명령을 만드세요(Raycast의 로컬 모델은 Pro 구독이 필요합니다). 어떤 앱에서든 텍스트를 선택하고 단축키를 누르면 교정된 버전이 선택 내용을 대체합니다. Windows에서는 선택 내용을 Ollama API로 보내는 AutoHotkey 스크립트로 구독 없이 같은 결과를 얻을 수 있습니다.',
          },
        ],
      },
      smallModelsGrammar: {
        id: 'small-models-grammar',
        title: '로컬 문법 교정에 적합한 소형 LLM',
        content:
          '**문법 교정은 8 GB 기기에서는 Qwen3.5 4B, 16 GB 기기에서는 Gemma 4 12B로 시작하세요. 둘 다 "교정된 텍스트만 반환하세요" 지시를 따르며 일반 노트북에서 실행됩니다.** 문법 수정은 대부분 지시 따르기입니다: 모델은 최소한만 바꾸고 교정된 텍스트 외에는 아무것도 반환하지 않아야 합니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 문법 교정에 가장 적합한 소형 LLM은 이미 올바른 부분을 바꾸지 않고 오류를 고치는 가장 작은 지시 따르기 모델입니다 — Qwen3.5 4B, Phi-4 Mini, Gemma 4 12B가 합리적인 시작점이며, 문법 기준으로 이들의 순위를 매긴 공개 벤치마크는 없습니다.',
          },
          {
            type: 'plain-terms',
            text: '문법 교정에는 큰 모델이 필요하지 않습니다. "오류만 고쳐라"를 따르는 모델이 필요합니다. 후보 두 개를 설치하고 같은 단락 다섯 개를 둘 다에 붙여넣은 뒤, 실수는 잡으면서 가장 적게 바꾸는 쪽을 고르세요. 이 테스트는 10분이면 되고 어떤 순위표보다 많은 것을 알려줍니다.',
          },
        ],
        columns: ['모델', 'Ollama 태그', '다운로드', '적합 사양', '추천 용도'],
        rows: [
          { '모델': 'Phi-4 Mini', 'Ollama 태그': 'phi4-mini', '다운로드': '~2.5 GB', '적합 사양': '8 GB RAM', '추천 용도': '빠르고 간단한 교정; 주로 영어' },
          { '모델': 'Qwen3.5 4B', 'Ollama 태그': 'qwen3.5:4b', '다운로드': '~3.3–4 GB', '적합 사양': '8 GB RAM', '추천 용도': '문법만 교정, 짧은 이메일, 다국어' },
          { '모델': 'Gemma 4 E4B', 'Ollama 태그': 'gemma4:e4b', '다운로드': '~6.6–9.5 GB', '적합 사양': '16 GB RAM', '추천 용도': '다국어 텍스트, 가벼운 문체 수정' },
          { '모델': 'Gemma 4 12B', 'Ollama 태그': 'gemma4:12b', '다운로드': '~7.7–8 GB', '적합 사양': '16 GB RAM', '추천 용도': '문체 재작성, 어조 조정' },
          { '모델': 'Qwen3.8 27B', 'Ollama 태그': 'qwen3.8:27b', '다운로드': '~18 GB', '적합 사양': '24 GB+ RAM/VRAM', '추천 용도': '길고 섬세한 재작성' },
        ],
        items: [
          '**문법 전용 벤치마크로 이 모델들의 순위를 매긴 곳은 없습니다.** 벤더는 문법 교정 정확도가 아니라 일반적인 지시 따르기 결과를 공개합니다. 본인의 텍스트로 판단하세요.',
          '**테스트에서 확인할 것:** 과교정(괜찮던 표현이 바뀜), 의미 변경(숫자, 이름, 부정문), 철자 변형 유지(영국식 vs. 미국식), 그리고 모델이 텍스트만 반환하는지 여부.',
          '**언어:** Qwen3.5와 Gemma 4는 다국어를 지원하며, Phi-4 Mini는 주로 영어를 대상으로 합니다. 영어가 아닌 텍스트는 먼저 해당 언어로 테스트하세요.',
          '**결정적으로 유지:** 낮은 temperature(약 0.2)는 창의적인 표현 변경을 줄입니다. 아래 Modelfile은 편집자 지시와 temperature를 재사용 가능한 모델에 담습니다.',
          '**긴 문서:** 소형 모델은 긴 입력에서 흐트러집니다. 문서 전체를 붙여넣지 말고 섹션별로 교정하세요.',
        ],
        codeBlock:
          'FROM qwen3.5:4b\nPARAMETER temperature 0.2\nSYSTEM """You are a copy editor. Fix grammar, spelling, and punctuation only. Keep the author\'s wording, meaning, and spelling variant. Return only the corrected text."""\n\n# then run:\n#   ollama create grammar-fix -f Modelfile\n#   ollama run grammar-fix',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: '모델이 교정된 텍스트 앞에 추론 과정이나 서문을 출력한다면 비추론(non-reasoning) 변형이나 다른 모델로 바꾸세요. 모든 답변에 주석을 덧붙이는 문법 도구는 직접 교정하는 것보다 느립니다.',
          },
        ],
      },
      googleDocsInline: {
        id: 'google-docs-inline',
        title: '클라우드 없이 Google Docs, Gmail 인라인 검사',
        content:
          '**여기서 검토한 로컬 도구 중 Google Docs를 지원 편집기로 명시한 것은 없으므로, 실용적인 Google Docs 설정은 LLM 재작성용 단축키 또는 사이드바에 더해, 지원되는 곳에서 인라인 밑줄을 위한 로컬 규칙 기반 검사기를 쓰는 것입니다.** LLM과 규칙 기반 검사기는 하는 일이 다릅니다: LLM은 요청 시 재작성하고, 검사기는 입력하는 동안 실수에 밑줄을 긋습니다.',
        columns: ['도구', '유형', '작동 위치', '제한'],
        rows: [
          { '도구': '[Harper](https://writewithharper.com)', '유형': '규칙 기반, 온디바이스, LLM 없음', '작동 위치': 'Chrome, Edge, Firefox, Obsidian, VS Code, macOS 앱', '제한': '영어 전용; Google Docs 미명시' },
          { '도구': '[LanguageTool](https://dev.languagetool.org/http-server)(자체 호스팅)', '유형': 'localhost 규칙 기반 서버', '작동 위치': '브라우저 애드온, "로컬 서버" 설정', '제한': '실험적 설정; Java 서버 실행 필요' },
          { '도구': '[Page Assist](/ko/local-llms/page-assist-review)', '유형': 'Ollama 채팅 사이드바', '작동 위치': 'Chrome, Firefox 사이드바', '제한': '채팅 방식; 결과를 직접 붙여넣기' },
          { '도구': '단축키 + Ollama', '유형': '선택한 텍스트의 LLM 재작성', '작동 위치': 'Google Docs 포함 모든 앱', '제한': 'Raycast(Pro) 또는 AutoHotkey 스크립트' },
        ],
        items: [
          '**Google Docs 워크플로우:** Docs에서 제안 모드를 켜고 단락을 선택한 뒤 단축키나 사이드바로 보내고 교정된 텍스트를 붙여넣으세요. 제안 모드는 모든 변경 사항을 검토할 수 있게 유지합니다.',
          '**Gmail:** Harper 사이트는 Gmail의 내장 문법 검사기를 끄지 않으면 Gmail이 지원되지 않는다고 안내합니다. 이메일 초안에는 선택-재작성 워크플로우를 사용하세요.',
          '**최적 조합:** 지원되는 편집기에서는 인라인 밑줄용 규칙 기반 검사기를, 재작성·어조·요약에는 로컬 LLM을 함께 쓰세요. Grammarly의 밑줄과 AI 재작성 조합에 가장 가까운 로컬 대응입니다.',
          '**LanguageTool 자체 호스팅:** LanguageTool 서버를 다운로드해 localhost에서 시작한 뒤, 브라우저 애드온의 실험적 설정에서 "로컬 서버"를 선택하세요. 공개 옵션으로 시작하지 않는 한 서버는 사용자 본인의 기기에서만 접근할 수 있습니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '규칙 기반 검사기는 GPU가 필요 없고 지연 시간을 추가하지 않습니다. 먼저 하나를 설치하고, 규칙 기반 검사기가 할 수 없는 재작성 작업에만 LLM을 추가하세요.',
          },
        ],
      },
      notionReplacement: {
        id: 'notion-replacement',
        title: 'Notion AI 대체: 문서 작성 및 메모',
        content:
          '**로컬 Ollama 백엔드가 있는 Obsidian은 메모 작성자와 지식 노동자에게 Notion AI에 가장 가까운 기능적 등가물입니다.** Notion의 데이터베이스 구조를 복제하지는 않지만, 문서 초안 작성과 메모 Q&A에서는 기능이 동등하며 모든 처리가 로컬에서 이루어집니다.',
        image: '/images/replace-grammarly-notion-ai-with-local-notion-ai-setup-flow-en.svg',
        imageCaption: 'Obsidian에서 Notion AI 대체 설정: Ollama를 설치하고 모델을 받고, Obsidian을 설치하고, localhost:11434를 가리키는 Copilot 플러그인을 추가하고, 전체 vault Q&A를 위해 Smart Connections를 추가한 다음, 문서 작성과 메모 조회를 모두 로컬에서 수행합니다.',
        items: [
          '**Obsidian을 설치하세요** ([obsidian.md](https://obsidian.md)). 개인 및 업무용 모두 무료입니다. 메모를 위한 vault를 만드세요 — AI 플러그인이 인덱싱할 디렉터리입니다.',
          '**Copilot 플러그인을 설치하세요** (커뮤니티 플러그인 → "Copilot" 검색; [Copilot for Obsidian 리뷰](/ko/power-local-llm/copilot-for-obsidian-review) 참조). 플러그인 설정에서 LLM 제공자로 "Ollama"를 선택하고, 기본 URL로 `http://localhost:11434`를 입력한 뒤 모델을 선택하세요. Copilot은 현재 메모의 맥락에서 질문하고 콘텐츠를 생성할 수 있는 채팅 사이드바를 Obsidian에 추가합니다.',
          '**vault 전체 Q&A를 위해 Smart Connections 플러그인을 설치하세요.** Smart Connections는 로컬 임베딩 모델로 메모를 임베딩으로 인덱싱하고, LLM에 보내기 전에 관련 메모를 검색하는 질문을 할 수 있게 합니다. 이것이 Notion AI의 "내 메모에 대해 질문하기"를 직접 대체합니다.',
          '**문서 초안 작성:** Copilot 채팅에서 "이 메모를 기반으로 [주제]에 관한 [문서 유형]을 작성하세요: [핵심 포인트 붙여넣기]"라고 입력하세요. 플러그인은 현재 메모의 맥락을 자동으로 포함합니다. 출력은 채팅에 나타나며, 메모에 복사-붙여넣기 하세요.',
          '**콘텐츠 확장:** 메모에서 글머리 기호 개요를 선택하고 Copilot 명령 팔레트를 열어 "선택 내용 확장"을 사용하세요 — 모델이 개요를 메모의 글쓰기 스타일에 맞는 산문으로 변환합니다.',
          '**주간 검토 생성:** "이번 주 메모를 주간 검토 형식으로 요약해 주세요: 성과, 장애물, 다음 행동." Smart Connections가 지난 7일간의 메모를 검색하여 LLM에 자동으로 전달합니다.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 Ollama 인스턴스에 연결한 Copilot 또는 Smart Connections 플러그인이 있는 Obsidian은 문서 초안 작성, 콘텐츠 확장, 메모 Q&A에서 Notion AI를 대체합니다 — 모든 처리가 로컬에서 이루어지고 어떤 외부 서버로도 콘텐츠가 전송되지 않습니다.',
          },
          {
            type: 'plain-terms',
            text: '설정 방법: Obsidian 설치, Ollama 설치, 모델 다운로드, Obsidian에서 Copilot 커뮤니티 플러그인 설치, localhost:11434로 연결. 이것이 Notion AI의 AI 기능에 대한 대체입니다. 메모는 vault 폴더(일반 마크다운 파일, 완전히 이식 가능)에 남습니다. AI 채팅은 사용자 기기에서 실행됩니다. 어떤 데이터도 컴퓨터 밖으로 나가지 않습니다.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Obsidian은 사용자가 제어하는 폴더에 일반 마크다운 파일로 메모를 저장합니다. Notion의 독점 데이터베이스 형식과 달리 메모는 어떤 텍스트 편집기에서도 읽을 수 있고 언제든지 내보낼 수 있습니다. 이것은 Notion에 비해 부차적인 프라이버시 및 이식성 이점입니다 — 지식 베이스가 클라우드 플랫폼에 종속되지 않습니다.',
          },
        ],
      },
      notionOllama: {
        id: 'notion-ollama',
        title: 'Notion과 Ollama: 연결되는 것과 안 되는 것',
        content:
          '**Notion이 Notion AI를 로컬 모델에 연결하는 방법을 문서화하지 않으므로, "Notion + Ollama"는 Notion 밖에서 AI 단계를 실행하거나 메모를 Notion 밖으로 옮긴다는 뜻입니다.** Notion의 공개 가격 및 보안 페이지는 AI가 Notion이 선택한 모델 제공업체에서 실행된다고 설명하며, 자체 엔드포인트를 지정하는 설정은 없습니다. 또한 Notion은 로컬 데이터베이스가 아니라 클라우드 워크스페이스이므로, 모델을 연결할 로컬 Notion 데이터베이스는 존재하지 않습니다.',
        items: [
          '**옵션 1 — Notion API로 스크립트 실행:** 작은 스크립트가 Notion API로 페이지를 읽고, 텍스트를 `localhost:11434`의 Ollama로 보낸 뒤, 결과를 새 블록으로 다시 씁니다. 모델 단계는 로컬이지만 페이지 자체는 여전히 Notion 서버에 있으므로, 제거되는 것은 AI 제공업체뿐입니다.',
          '**옵션 2 — Notion MCP:** Notion은 MCP 클라이언트가 페이지를 읽고 수정할 때 쓰는 MCP 서버(OAuth 로그인)를 호스팅합니다. Notion은 Claude Code, Cursor, Codex를 예시 클라이언트로 듭니다. 특정 클라이언트가 로컬 모델을 구동할 수 있는지는 해당 클라이언트에 확인할 문제입니다.',
          '**옵션 3 — AI 비중이 큰 메모를 로컬 우선 앱으로 이동:** 위에서 설명한 Copilot이 있는 Obsidian(일반 Markdown 파일), 또는 비교 페이지에 따르면 오프라인 모드와 로컬 AI 옵션이 있는 오픈소스(AGPL-3.0) Notion 스타일 워크스페이스 [AppFlowy](https://appflowy.com). 정확한 로컬 모델 설정은 AppFlowy 문서를 확인하세요.',
          '**로컬 모델이 바꾸지 못하는 것:** 이미 Notion에 있는 콘텐츠는 Notion이 저장합니다. 그 위에서 로컬 모델을 실행하면 AI 제공업체 단계는 없어지지만 Notion의 저장은 그대로입니다.',
          '**Notion이 자사 AI에 대해 밝힌 내용:** 기본적으로 Notion과 AI 제공업체 모두 고객 데이터로 모델을 학습하지 않습니다. Enterprise에서는 대부분의 모델이 데이터 제로 보존을 제공하고, 다른 플랜에서는 제공업체가 최대 30일간 데이터를 보관합니다.',
        ],
        codeBlock:
          'import requests\n\nNOTION = {"Authorization": "Bearer <NOTION_TOKEN>", "Notion-Version": "2022-06-28"}\nPAGE_ID = "<page-id>"\n\n# 1. read the page text through the Notion API\nblocks = requests.get(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION).json()["results"]\ntext = "\\n".join(\n    "".join(t["plain_text"] for t in b["paragraph"]["rich_text"])\n    for b in blocks if b["type"] == "paragraph"\n)\n\n# 2. rewrite it with a local model (Ollama on localhost)\nr = requests.post("http://localhost:11434/api/generate", json={\n    "model": "gemma4:12b", "stream": False,\n    "prompt": "Correct the grammar of this text. Return only the corrected text.\\n\\n" + text,\n})\nfixed = r.json()["response"]\n\n# 3. append the result as a new paragraph block\nrequests.patch(f"https://api.notion.com/v1/blocks/{PAGE_ID}/children", headers=NOTION, json={\n    "children": [{"object": "block", "type": "paragraph",\n                  "paragraph": {"rich_text": [{"type": "text", "text": {"content": fixed[:2000]}}]}}]\n})',
        codeLanguage: 'python',
        callouts: [
          {
            type: 'warning',
            text: '이 스크립트는 Notion 토큰과 페이지 콘텐츠를 Notion과 localhost에만 보냅니다. 토큰이 공유 파일에 들어가지 않도록 하세요. 또한 Notion 서식 있는 텍스트 블록은 블록당 약 2,000자까지만 받으므로, 긴 출력은 여러 블록으로 나누어야 합니다.',
          },
        ],
      },
      integrations: {
        id: 'integrations',
        title: '통합 옵션',
        content:
          '**네 가지 통합 수준: 기본(복사-붙여넣기), 중급(단축키 앱 또는 글쓰기 앱), 인라인(규칙 기반 검사기), 고급(커스텀 브라우저 확장).** 기술적 편안함에 맞는 수준에서 시작하세요.',
        columns: ['통합 수준', '방법', '앱', '적합한 대상'],
        rows: [
          { '통합 수준': '기본(복사-붙여넣기)', '방법': '로컬 AI 앱 열기, 붙여넣기, 결과 복사', '앱': 'LM Studio 채팅, Ollama CLI, Open WebUI', '적합한 대상': '간헐적 교정; 모든 OS' },
          { '통합 수준': '중급(단축키)', '방법': '텍스트 선택 → 단축키 → 선택 내용 대체', '앱': 'Raycast AI(macOS, Pro), AutoHotkey + Ollama(Windows)', '적합한 대상': '어떤 앱에서든 자주 교정' },
          { '통합 수준': '중급(글쓰기 앱)', '방법': '글쓰기 도구에 내장된 AI 도우미', '앱': 'Obsidian + Copilot 플러그인, VS Code + Continue.dev', '적합한 대상': '이런 앱에서 주로 작업하는 작가·개발자' },
          { '통합 수준': '인라인(규칙 기반)', '방법': '로컬 검사기가 입력 중 오류에 밑줄', '앱': 'Harper, 자체 호스팅 LanguageTool', '적합한 대상': 'GPU 없이 입력 중 피드백' },
          { '통합 수준': '고급(브라우저 확장)', '방법': '커스텀 확장이 선택한 텍스트를 로컬 Ollama API로 전송', '앱': '커스텀 Chrome/Firefox 확장(GitHub 오픈소스 템플릿)', '적합한 대상': 'Grammarly 스타일 브라우저 통합을 원하는 고급 사용자' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pro가 있다면 macOS에서 커스텀 AI 명령이 있는 Raycast가 빠른 중급 통합입니다: 문법 교정 프롬프트로 AI 명령을 만들고 단축키를 할당한 뒤, 어떤 앱에서든 텍스트를 선택하고 단축키를 누르면 교정된 텍스트가 선택 내용을 대체합니다. Pro가 없다면 Ollama CLI나 Open WebUI 같은 채팅 클라이언트를 사용하세요.',
          },
        ],
      },
      models: {
        id: 'models',
        title: '글쓰기 작업을 위한 모델 추천',
        content:
          '**글쓰기 보조는 강한 지시 따르기와 일관된 산문 출력을 가진 모델을 선호합니다.** 순위는 코딩이나 수학 모델 순위와 다릅니다. 아래 추천은 문법 벤치마크 결과가 아니라 크기와 지시 따르기를 기준으로 고른 시작점입니다.',
        columns: ['작업', '최적 모델', '대안(낮은 VRAM)', '이유'],
        rows: [
          { '작업': '문법 교정', '최적 모델': 'Gemma 4 12B', '대안(낮은 VRAM)': 'Qwen3.5 4B / Phi-4 Mini', '이유': '"오류만 고치고 텍스트 반환" 프롬프트를 따름' },
          { '작업': '문체 재작성', '최적 모델': 'Gemma 4 12B 또는 Qwen3.8 27B', '대안(낮은 VRAM)': 'Qwen3.5 4B', '이유': '표현과 문체에 더 여유가 있음' },
          { '작업': '어조 조정', '최적 모델': 'Qwen3.8 27B', '대안(낮은 VRAM)': 'Gemma 4 12B', '이유': '큰 모델이 대개 사실을 더 안정적으로 유지' },
          { '작업': '문서 작성(Notion AI 대체)', '최적 모델': 'Gemma 4 12B', '대안(낮은 VRAM)': 'Qwen3.5 4B', '이유': '문서 형식 지시를 따름' },
          { '작업': '메모 요약 / Q&A', '최적 모델': 'Gemma 4 12B', '대안(낮은 VRAM)': 'Qwen3.5 4B / Phi-4 Mini', '이유': '요약은 작은 크기에서도 잘 작동' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '시스템 프롬프트에 "AI 어조 문구 없음" 지시를 설정하세요. 모델은 기본적으로 "물론이죠! 교정된 버전은 다음과 같습니다..."와 같은 신중하고 AI 특유의 말투를 사용합니다. "교정된 텍스트만 반환하세요, 서문 없음, 주석 없음"이라는 시스템 프롬프트가 이를 없애 줍니다. 문체 재작성의 경우 "\'delve into\', \'tapestry\', \'fostering\', \'realm of\', \'it\'s worth noting\' 문구를 사용하지 마세요"를 추가하세요.',
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: '프라이버시 비교',
        content:
          '**클라우드 글쓰기 도우미와 로컬 LLM의 프라이버시 차이는 구조적입니다.** 클라우드 서비스는 텍스트를 받지 않고는 처리할 수 없으며, 로컬 LLM은 명시적인 아웃바운드 연결 없이는 텍스트를 어디에도 보낼 수 없습니다.',
        image: '/images/replace-grammarly-notion-ai-with-local-cost-privacy-overview-en.svg',
        imageCaption: '클라우드 글쓰기 도구 대 로컬 LLM: Grammarly와 Notion AI는 2개의 별도 유료 구독으로 운영되며 텍스트를 클라우드 서버로 보내지만, Ollama와 Obsidian은 모든 글쓰기와 메모를 기기에 보관하며 반복되는 소프트웨어 비용이 없습니다.',
        items: [
          '**Grammarly 데이터 라이선스:** [Grammarly 서비스 약관](https://www.grammarly.com/terms) Section 7.2에 따라 사용자는 콘텐츠의 소유권을 유지하지만, Grammarly에 서비스의 운영, 제공, 개선과 신제품·신기능 개발을 포함한 명시된 목적으로 콘텐츠를 사용할 수 있는 전 세계적, 비독점적, 로열티 없는 라이선스를 부여합니다. 약관은 또한 제안을 수락하거나 거부하는 행동이 제안 엔진 학습에 도움이 될 수 있다고 밝힙니다. Grammarly는 자사의 LLM 파트너가 고객 데이터를 모델 학습에 사용하는 것이 허용되지 않는다고 밝힙니다.',
          '**Notion AI 데이터 흐름:** Notion은 AI 요청을 여러 모델 제공업체로 라우팅합니다(현재 목록은 하위 처리자 페이지에 있습니다). Notion은 기본적으로 자사와 AI 제공업체 모두 고객 데이터로 모델을 학습하지 않는다고 밝힙니다. Enterprise는 LLM 제공업체와의 데이터 제로 보존을 제공하며, 다른 플랜에서는 제공업체가 최대 30일간 데이터를 보관합니다.',
          '**로컬 LLM 데이터 흐름:** 외부 전송 없음. Ollama는 기본적으로 localhost에서 수신하며 추론은 아웃바운드 연결을 만들지 않습니다. 모델 가중치는 디스크의 정적 파일이고, 텍스트는 메모리에서 처리됩니다.',
          '**GDPR / 전문가 비밀유지 함의:** 법률 전문가, 의료 종사자 등 비밀유지 의무가 있는 사람은 고객 관련 콘텐츠에 Grammarly나 Notion AI를 사용하기 전에 계약상 보호 조항을 확인해야 합니다. 로컬 LLM은 데이터가 기기를 떠나지 않으므로 제3자 처리자 문제를 피합니다.',
          '**원격 측정:** 클라우드 도구는 텍스트 자체 외에 사용 및 상호작용 데이터를 수집합니다. 로컬 앱은 서로 다르므로 각 앱의 원격 측정 설정을 확인하고, 감사 수준의 확신이 필요하면 아웃바운드 트래픽을 직접 모니터링하세요.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '업무 서신, 계약 초안 또는 비밀유지 의무가 있는 콘텐츠에 Grammarly를 사용한다면, 콘텐츠가 보호된다고 가정하기 전에 조직의 데이터 정책과 적용 중인 기업용 데이터 약관을 확인하세요.',
          },
        ],
      },
      cost: {
        id: 'cost',
        title: '비용 비교',
        content:
          '**두 도구를 모두 대체하면 Grammarly 구독과 Notion 플랜의 AI 부분이 없어집니다.** 로컬 LLM 설정은 소프트웨어 측면에서 무료이며, 유일한 지속 비용은 전기입니다.',
        columns: ['도구', '월 비용', '연 비용', '참고'],
        rows: [
          { '도구': '[Grammarly Free](https://www.grammarly.com/plans)', '월 비용': '$0', '연 비용': '$0', '참고': 'AI 프롬프트 월 100회; 기본 검사' },
          { '도구': '[Grammarly Pro](https://www.grammarly.com/plans)', '월 비용': '월 ~$12부터', '연 비용': '연 ~$144부터', '참고': 'AI 프롬프트 월 2,000회; 월 결제는 더 높음' },
          { '도구': '[Notion AI](https://www.notion.com/pricing)', '월 비용': 'Business 포함(~$20/사용자)', '연 비용': '~$240/사용자/년', '참고': 'Free·Plus: 체험만; 별도 추가 기능 없음' },
          { '도구': '[Ollama(로컬 LLM)](https://ollama.com)', '월 비용': '$0', '연 비용': '$0', '참고': '무료 오픈소스; 전기 비용만' },
          { '도구': '[Obsidian(Notion 대체)](https://obsidian.md)', '월 비용': '$0', '연 비용': '$0', '참고': '개인·업무용 무료' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '전환을 망설이고 있다면 30일 동안 문법 교정만 로컬 모델로 옮겨 보세요. 브라우저 통합을 위해 Grammarly는 계속 활성 상태로 두세요. 로컬 교정 품질과 복사-붙여넣기 워크플로우가 본인의 글쓰기에 수용 가능한지 평가한 뒤에야 Grammarly를 해지할지 결정하세요. Obsidian을 메모 레이어로 쓸 의향이 있다면 Notion AI 전환은 마찰이 더 적습니다.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '흔한 실수',
        items: [
          '**출력 형식을 위한 시스템 프롬프트 없음.** 시스템 프롬프트가 없으면 모델이 교정 앞에 "물론이죠! 교정된 텍스트는 다음과 같습니다:"를 붙이고, 설명을 추가하고, AI 특유의 말투를 사용합니다. 항상 "교정된 텍스트만 반환하세요"를 지정하는 시스템 프롬프트를 설정하세요.',
          '**복잡한 문체 재작성에 가장 작은 모델 사용.** 소형 모델은 문법 교정은 잘 처리하지만 문체 재작성은 더 틀에 박힌 결과를 내는 경향이 있습니다. 문체 비중이 큰 작업이라면 Gemma 4 12B 이상으로 올리세요.',
          '**Obsidian에서 Notion UI 동등성 기대.** Obsidian은 데이터베이스가 아니라 Markdown 편집기입니다. Notion 워크플로우가 데이터베이스, 뷰, 관계에 의존한다면 Obsidian은 Notion의 완전한 대체가 아니며 AI 기능만 이전됩니다. 전환 전에 데이터베이스 기능이 필수인지 평가하세요.',
          '**문체 재작성에 단어 수 상한 설정 안 함.** 상한이 없으면 모델이 재작성을 부풀립니다. 모든 문체 재작성 프롬프트에 "재작성된 텍스트를 원래 단어 수의 10% 이내로 유지하세요"를 추가하세요.',
          '**소형 모델에 전체 문서 전송.** 소형 모델은 긴 입력에서 흐트러집니다. 긴 문서는 섹션으로 나누어 각 섹션을 독립적으로 교정하세요.',
          '**LLM에서 인라인 밑줄 기대.** LLM은 요청받을 때 답하며, 입력하는 것을 지켜보지 않습니다. 입력 중 밑줄이 필요하면 Harper 같은 로컬 규칙 기반 검사기를 추가하세요.',
          '**Notion AI가 로컬 모델을 쓸 수 있다고 가정.** Notion은 이를 지원한다고 문서화하지 않았습니다. Ollama와 함께 Notion API를 사용하거나, AI 비중이 큰 메모를 로컬 우선 앱으로 옮기세요.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          'Grammarly 서비스 약관 — Section 7.2(사용자 콘텐츠 라이선스) — [grammarly.com/terms](https://www.grammarly.com/terms)',
          'Grammarly 요금제 — [grammarly.com/plans](https://www.grammarly.com/plans)',
          'Grammarly 책임 있는 AI(파트너 데이터 사용) — [grammarly.com/responsible-ai](https://www.grammarly.com/responsible-ai)',
          'Notion 가격 및 AI 플랜 이용 — [notion.com/pricing](https://www.notion.com/pricing)',
          'Notion AI 보안 관행(제공업체, 학습, 보관) — [notion.com/help/notion-ai-security-practices](https://www.notion.com/help/notion-ai-security-practices)',
          'Notion MCP 문서 — [developers.notion.com/docs/mcp](https://developers.notion.com/docs/mcp)',
          'Obsidian 업무용 무료(2025년 2월) — [obsidian.md/blog/free-for-work](https://obsidian.md/blog/free-for-work/)',
          'Harper 문법 검사기 — [writewithharper.com](https://writewithharper.com)',
          'LanguageTool HTTP 서버(자체 호스팅) — [dev.languagetool.org/http-server](https://dev.languagetool.org/http-server)',
          'Raycast 로컬 모델 — [manual.raycast.com/ai/local-models](https://manual.raycast.com/ai/local-models)',
          'Ollama 모델 라이브러리 — [ollama.com/library/gemma4](https://ollama.com/library/gemma4), [ollama.com/library/qwen3.5](https://ollama.com/library/qwen3.5), [ollama.com/library/qwen3.8](https://ollama.com/library/qwen3.8)',
          'Obsidian Copilot 플러그인 문서 — [GitHub: logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot)',
          'Obsidian Smart Connections 플러그인 — [GitHub: brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections)',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '로컬 문법 교정에 좋은 소형 LLM은 무엇입니까?',
            a: 'Qwen3.5 4B(`qwen3.5:4b`, 약 3–4 GB)와 Phi-4 Mini(`phi4-mini`)는 8 GB 기기에 맞고, Gemma 4 12B(`gemma4:12b`)는 16 GB 시스템과 문체 재작성에 적합하며, Qwen3.8 27B는 24 GB 이상에 적합합니다. 문법 교정 기준으로 이들의 순위를 매긴 공개 벤치마크는 없으므로, 본인의 단락 다섯 개로 두 모델을 테스트하여 오류는 잡으면서 가장 적게 바꾸는 쪽을 고르세요. "오류만 고치고 교정된 텍스트만 반환" 시스템 프롬프트와 낮은 temperature를 사용하세요.',
          },
          {
            q: 'Google Docs에서 작동하는 로컬 Grammarly 대안이 있습니까?',
            a: '그대로 대체할 수 있는 것은 없습니다. 여기서 다룬 로컬 도구 중 Google Docs를 지원 편집기로 명시한 것은 없습니다. 작동하는 설정은 선택 → 재작성 → 붙여넣기입니다: Docs에서 (제안 모드를 켠 채) 텍스트를 선택하고, 단축키 도구나 브라우저 사이드바로 로컬 모델에 보낸 뒤 결과를 붙여넣으세요. 다른 곳에서 인라인 밑줄이 필요하면 Harper(영어 전용, 온디바이스, Chrome·Edge·Firefox 확장)와 자체 호스팅 LanguageTool 서버가 로컬 옵션입니다.',
          },
          {
            q: 'Notion에서 Ollama를 어떻게 사용합니까?',
            a: 'Notion은 Notion AI를 로컬 모델에 연결하는 방법을 문서화하지 않았습니다. Notion 콘텐츠에 Ollama를 쓰려면, Notion API로 페이지를 읽고 텍스트를 localhost:11434의 Ollama로 보낸 뒤 결과를 다시 쓰는 작은 스크립트를 작성하세요(위 예시 참조). 모델 단계는 로컬이지만 페이지는 여전히 Notion 서버에 있습니다. 완전한 로컬 설정을 원하면 AI 비중이 큰 메모를 Copilot 플러그인이 있는 Obsidian이나 AppFlowy 같은 로컬 우선 앱으로 옮기세요.',
          },
          {
            q: '로컬 LLM을 로컬 Notion 데이터베이스에 연결할 수 있습니까?',
            a: 'Notion에는 로컬 데이터베이스가 없습니다: 워크스페이스는 Notion 서버에 있으며 API를 통해 접근합니다. 모델을 로컬에서 실행하고 API를 통해 Notion과 텍스트를 주고받거나, 로컬 우선 워크스페이스를 선택할 수 있습니다. Obsidian은 메모를 디스크의 Markdown 파일로 저장하고, AppFlowy는 오프라인 모드가 있는 오픈소스 Notion 스타일 앱입니다.',
          },
          {
            q: '로컬 LLM이 내 글쓰기 문체를 분석할 수 있습니까?',
            a: '예. 이 가이드의 문체 프로필 프롬프트와 함께 글 샘플 세 개를 로컬 모델에 붙여넣으세요: 문장 길이, 어조, 어휘, 습관을 글머리 기호로 설명해 주고, 편집자 모델이 내 목소리를 유지하도록 재사용할 수 있는 짧은 시스템 프롬프트도 돌려줍니다. 샘플이 기기 밖으로 나가지 않으므로 비공개 초안에도 안전합니다.',
          },
          {
            q: 'Notion AI와 Grammarly의 차이는 무엇입니까?',
            a: '위치가 다릅니다. Notion AI는 Notion 안에서 작동합니다: 워크스페이스에 대한 초안 작성, 요약, 질문 답변. Grammarly는 앱과 브라우저 텍스트 필드 전반에서 글을 검사하고 재작성을 제안합니다. 재작성과 어조에서 겹치지만 어느 쪽도 다른 쪽을 대체하지 못하며, 둘 다 대부분의 작업에서 로컬 LLM과 메모 앱으로 대체할 수 있습니다.',
          },
          {
            q: 'Grammarly는 Notion과 Obsidian에서 작동합니까?',
            a: 'Grammarly의 브라우저 확장은 웹의 Notion을 포함한 브라우저 기반 편집기의 텍스트 필드를 검사합니다. Obsidian 같은 데스크톱 앱은 브라우저 확장이 닿는 범위 밖입니다. Obsidian에는 (Obsidian 플러그인이 있는) Harper 같은 로컬 검사기나 Ollama와 연결한 Copilot 플러그인이 텍스트를 클라우드 서비스로 보내지 않고 같은 영역을 커버합니다.',
          },
          {
            q: '로컬 LLM은 문법 교정에서 Grammarly만큼 좋습니까?',
            a: '일상적인 문법, 구두점, 철자 오류에서는 프롬프트를 잘 쓴 로컬 모델이 같은 교정을 처리합니다. 본인의 텍스트로 테스트하여 확인하세요. Grammarly가 여전히 우위를 유지하는 부분: 입력하는 동안의 실시간 인라인 교정, 그리고 Gmail, Google Docs 등 웹 앱 전반에서 작동하는 브라우저 확장. 로컬 LLM은 브라우저 필드의 텍스트에 대해 선택-붙여넣기 워크플로우가 필요합니다.',
          },
          {
            q: 'Obsidian을 Notion의 완전한 대체제로 사용할 수 있습니까?',
            a: 'Obsidian은 Notion의 메모 작성 및 지식 베이스 기능을 잘 대체합니다. Notion의 데이터베이스, 프로젝트 관리, 관계형 데이터 기능은 대체하지 않습니다. Notion 사용이 주로 메모, 문서, 위키라면 Obsidian은 완전한 대체제입니다. Notion 데이터베이스, 보드 뷰, 관계형 속성에 의존한다면 추가 도구(Anytype, AppFlowy, 또는 데이터베이스 레이어는 Notion, 글쓰기는 Obsidian)가 필요합니다.',
          },
          {
            q: 'Grammarly의 글쓰기 제안에 가장 가까운 로컬 모델은 무엇입니까?',
            a: 'Grammarly의 제안 엔진을 그대로 재현하는 로컬 모델은 없으며, 이에 대해 모델 순위를 매긴 벤치마크도 없습니다. 실제로는 원래 목소리를 유지하도록 프롬프트했을 때 Gemma 4 12B와 Qwen3.8 27B가 문체와 어조 재작성에 가장 여유가 있고, Qwen3.5 4B와 Phi-4 Mini는 문법만 교정하는 데 충분합니다. 입력 중 밑줄을 원한다면 어느 모델이든 Harper 같은 규칙 기반 검사기와 함께 쓰세요.',
          },
          {
            q: 'Obsidian Copilot 플러그인이 내 메모를 클라우드로 전송합니까?',
            a: '로컬 Ollama 인스턴스를 사용하도록 구성된 경우에는 그렇지 않습니다. 플러그인은 클라우드 LLM(OpenAI, Anthropic)과 로컬 Ollama를 모두 지원합니다. Ollama를 LLM 제공자로 선택하고 localhost URL을 입력하면 모든 AI 처리가 로컬에서 이루어집니다. 어떤 메모 콘텐츠도 외부로 전송되지 않습니다. 감사 수준의 검증이 필요하다면 Little Snitch(macOS)나 Wireshark 같은 도구로 네트워크 트래픽을 모니터링하여 확인하세요.',
          },
          {
            q: 'Google Docs나 Gmail에서 로컬 LLM을 사용할 수 있습니까?',
            a: '직접은 불가능합니다 — 브라우저 텍스트 필드에 네이티브로 통합되는 Grammarly에 해당하는 로컬 LLM 브라우저 확장은 없습니다. 우회 방법: (1) Google Docs에서 텍스트를 선택해 복사하고, 로컬 AI 앱에 붙여넣고, 교정된 버전을 복사해 다시 붙여넣기; (2) 선택한 텍스트를 처리해 대체하는 단축키 도구(로컬 모델을 쓰는 Raycast는 Pro가 필요하고, Ollama API를 호출하는 AutoHotkey 스크립트는 무료); (3) 선택한 텍스트를 읽고 로컬 Ollama API를 호출하는 커스텀 Chrome 확장(GitHub에 오픈소스 템플릿 있음). 이 중 어느 것도 Grammarly의 매끄러운 인라인 경험과 동등하지 않습니다.',
          },
          {
            q: '이 설정이 전문적 사용을 위한 HIPAA 또는 GDPR을 준수합니까?',
            a: '외부 전송 없이 전적으로 기기에서 데이터를 처리하는 로컬 LLM은 HIPAA와 GDPR 모두의 핵심 데이터 전송 우려를 해소합니다. 그러나 준수 여부는 전체 기술 스택, 보안 제어, 특정 규제 요건에 따라 달라집니다. 로컬 LLM이 자동으로 준수되는 것은 아닙니다 — 엔드포인트 보안, 기기의 물리적 보호, 접근 제어를 평가해야 합니다. 공식적인 준수를 위해서는 준수 담당자와 상담하세요. 로컬 처리는 "제3자 데이터 처리자" 우려를 없애지만 전체 준수 프로그램을 대체하지는 않습니다.',
          },
          {
            q: '학술 논문을 위한 최고의 로컬 글쓰기 도우미는 무엇입니까?',
            a: '"문법과 구두점만 교정하세요 — 어휘, 문장 구조, 내용은 변경하지 마세요. 모든 인용, 전문 용어, 분야별 언어는 변경하지 마세요."라는 시스템 프롬프트를 지정한 중형 로컬 모델(예: Gemma 4 12B). 이것은 문법만 교정하는 모드에 해당하며, 표현 변경이 의도치 않게 의미를 바꾸거나 인용된 내용을 수정한 것처럼 보일 수 있는 학술 글쓰기에 위험이 더 낮은 설정입니다.',
          },
          {
            q: 'Notion AI의 회의 메모 요약을 로컬로 대체할 수 있습니까?',
            a: '예. 회의 메모를 텍스트 또는 마크다운 파일로 내보내거나(또는 전사 텍스트를 직접 붙여넣어) 다음 프롬프트를 사용하세요: "이 회의 메모를 (1) 핵심 결정 사항, (2) 담당자가 있는 실행 항목, (3) 미해결 질문으로 요약하세요. 각 섹션에 글머리 기호를 사용하세요. 300단어 이내로 유지하세요." 소형 지시 따르기 모델이 회의 요약을 처리합니다. 반복 회의의 경우 로컬 AI 앱에 저장된 프롬프트 템플릿을 만드세요.',
          },
          {
            q: 'Grammarly는 어떤 LLM을 사용합니까? Grammarly는 LLM입니까?',
            a: 'Grammarly는 단일 모델이 아니라 글쓰기 제품입니다. Grammarly는 우리가 확인한 페이지(요금제, 약관, 책임 있는 AI 페이지)에서 기반 모델명을 밝히지 않습니다. 책임 있는 AI 페이지는 생성형 AI 기능을 구동하는 데 사용되는 정보가 LLM 파트너와 공유되며 그 파트너는 고객 데이터를 모델 학습에 사용하는 것이 허용되지 않는다고 밝힙니다. Notion AI도 비슷합니다: 하위 처리자 페이지에 나열된 여러 제공업체를 조합해 사용합니다. 연구자들은 또한 Hugging Face의 grammarly 조직 아래에 공개 텍스트 편집 모델(CoEdIT, 7억 7천만~110억 파라미터)을 게시했는데, 이는 제품 자체가 아니라 연구용 모델입니다. 프라이버시에서 중요한 것은 데이터 처리 방식입니다: 두 제품 모두 전송한 텍스트는 벤더의 서버에서 처리됩니다. 로컬 LLM은 이를 피합니다 — 텍스트가 기기 밖으로 나가지 않습니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Obsidian과 로컬 LLM](/ko/power-local-llm/local-llm-with-obsidian-2026) — 메모 작성과 vault Q&A를 위한 Obsidian + Ollama 전체 설정.',
          '[Copilot for Obsidian 리뷰](/ko/power-local-llm/copilot-for-obsidian-review) — Notion AI 대체 워크플로우에 사용하는 Copilot 플러그인.',
          '[Obsidian과 Logseq AI 플러그인 비교](/ko/power-local-llm/obsidian-logseq-ai-plugins) — 메모 앱에서 로컬 AI를 위한 플러그인 옵션.',
          '[소형 로컬 LLM 모델](/ko/local-llms/small-local-llm-models) — 4–8 GB 기기용 최신 소형 모델, 로컬 문법 교정과 관련.',
          '[로컬 LLM으로 이메일 및 캘린더 자동화](/ko/power-local-llm/local-llm-email-and-calendar-automation) — 글쓰기 도우미 설정을 보완하는 로컬 LLM을 사용한 이메일 초안 자동화 및 캘린더 관리.',
          '[소설 작가를 위한 로컬 LLM 프롬프트](/ko/power-local-llm/local-llm-prompts-for-fiction-writers) — 문법 교정을 넘어 장면 작성과 캐릭터 개발로 나아가는 창의적 글쓰기 작업용 프롬프트 템플릿.',
          '[Zapier를 로컬 AI 에이전트로 대체하기](/ko/power-local-llm/replace-zapier-with-local-ai-agents) — 글쓰기 도구를 다른 비즈니스 프로세스와 연결하는 로컬 워크플로우 자동화.',
          '[개인 비즈니스 데이터를 위한 로컬 RAG](/ko/power-local-llm/local-rag-for-private-business-data) — 메모 Q&A 사용 사례를 더 큰 문서 라이브러리로 확장하는 개인 비즈니스 문서 Q&A.',
          '[Windows, Mac, Linux용 가장 쉬운 로컬 AI 앱](/ko/power-local-llm/easiest-local-ai-app-windows-mac-linux) — 글쓰기 도우미 워크플로우를 구현하기 전에 첫 로컬 AI 앱 설정이 필요한 경우.',
          '[비즈니스 워크플로우를 위한 로컬 AI 에이전트: EU 준수](/ko/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — 유럽 비즈니스 환경에서 로컬 AI 글쓰기 도우미를 배포하기 위한 GDPR 및 EU AI Act 맥락.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Grammarly와 Notion AI를 로컬 LLM으로 대체하기 (2026)',
      description: 'Grammarly 로컬 대안: 문법 교정에 맞는 소형 LLM, Google Docs·Notion 활용법, 텍스트가 기기를 떠나지 않는 Ollama 설정.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/replace-grammarly-notion-ai-with-local',
      inLanguage: 'ko',
      datePublished: '2026-05-08',
      dateModified: '2026-10-19',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Beginner',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: '[www.promptquorum.com/ko](https://www.promptquorum.com/ko)' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: '[www.promptquorum.com/ko/power-local-llm](https://www.promptquorum.com/ko/power-local-llm)' },
        { '@type': 'ListItem', position: 3, name: 'Grammarly와 Notion AI를 로컬 LLM으로 대체하기', item: '[www.promptquorum.com/ko/power-local-llm/replace-grammarly-notion-ai-with-local](https://www.promptquorum.com/ko/power-local-llm/replace-grammarly-notion-ai-with-local)' },
      ],
    },
  },
}
