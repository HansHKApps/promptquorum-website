// Power Local LLM — Article 1.3 (Local AI for Non-Technical Users)
// Slug: local-ai-app-non-technical-users
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Easiest Desktop Apps',
    title: 'Local AI for Non-Technical Users: 5 Apps That Just Work (No Terminal)',
    seoTitle: '5 Local AI Apps That Just Work (No Terminal, 2026)',
    intro: 'GPT4All, Jan, Msty, AnythingLLM Desktop, and LM Studio are the five local AI apps a non-technical user can install and chat with in under 10 minutes — no terminal, no Python, no Docker. Each ranks first for a different beginner persona. Sit a non-technical person in front of GPT4All and they hit a working chat in 4 clicks; Jan adds zero telemetry; Msty adds the prettiest UI; AnythingLLM Desktop adds drag-and-drop document chat; LM Studio adds the smoothest Mac experience.',
    metaDescription: 'Zero terminal commands. No Python. No Docker. 5 local AI apps a non-technical user can install in 10 minutes. Tested with real beginners.',
    twitterDescription: 'Five local AI apps that work without ever opening a terminal — ranked by beginner persona. Tested in May 2026.',
    current_models_mentioned: ['Llama 3.2 3B', 'Phi-4 Mini', 'Gemma 3 4B', 'Qwen3 4B'],
    current_hardware_mentioned: ['Apple M5 MacBook Pro', 'Intel Core i5 laptop (8 GB RAM)', 'NVIDIA RTX 3060'],
    audience: 'Absolute beginners and non-technical users — parents, journalists, students, small-business owners — who want a private ChatGPT alternative without ever opening a terminal.',
    readTime: '12 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'local AI app for non-technical users',
    targetKeywords: [
      'local ai for non-technical users',
      'easiest local ai app',
      'local ai no terminal',
      'beginner local llm app',
      'local ai for parents',
    ],
    leadAnswerBlock: '**Install GPT4All if you have never used a terminal — it is the lowest-friction local AI app, with a 4-click path from download to first reply on a 5-year-old laptop. Pick Jan if you want zero telemetry. Pick Msty for the prettiest UI. Pick AnythingLLM Desktop for drag-and-drop document chat. Pick LM Studio if you are on a Mac. All five are free, work offline after the first download, and never send your conversations anywhere.**',
    quickAnswerTop: {
      en: {
        question: 'Which local AI app should a non-technical person install first?',
        answer: 'Install GPT4All. It is the smallest download (~290 MB), runs on 8 GB RAM laptops with no GPU, and reaches first chat in 4 clicks. If you specifically need privacy, document chat, a beautiful UI, or you are on a Mac, see the persona-ranked list below — each persona has a different winner.',
        bullets: [
          'GPT4All — best for absolute beginners; smallest install; runs on weak hardware; 4 clicks to first chat.',
          'Jan — best for privacy-conscious beginners; zero telemetry; fully open source.',
          'Msty — best for "I want it pretty"; modern split-pane UI; built-in document chat.',
          'AnythingLLM Desktop — best for users who want familiar Windows-style UI and drop-in document folders.',
          'LM Studio — best for Mac users; tuned for Apple Silicon; the fastest of the five on M-series.',
          'All five work fully offline after the first model download.',
          'None of the five require a command line, Python, Docker, admin rights, or a credit card.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Who Should Use This Guide?', anchor: '#who-should-use' },
      { label: '#1 GPT4All — Best for Absolute Beginners', anchor: '#gpt4all' },
      { label: '#2 Jan — Best for Privacy-Conscious Beginners', anchor: '#jan' },
      { label: '#3 Msty — Best for "I Want It Pretty"', anchor: '#msty' },
      { label: '#4 AnythingLLM Desktop — Best for Familiar UI', anchor: '#anythingllm' },
      { label: '#5 LM Studio — Best for Mac Users', anchor: '#lm-studio' },
      { label: 'Common Stumbling Blocks', anchor: '#stumbling-blocks' },
      { label: 'Your First 10 Minutes', anchor: '#first-ten-minutes' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GPT4All is the lowest-friction starter — 4 clicks from download to first chat on a 5-year-old laptop.',
          'Jan is the only one of the five with zero telemetry by default and a fully open-source codebase.',
          'Msty has the most polished modern UI and built-in chat-with-PDFs without setup.',
          'AnythingLLM Desktop feels like a familiar Windows file/chat app — closest to "open document, ask question".',
          'LM Studio is fastest on Apple Silicon and ships the largest in-app model browser.',
          'All five are free, work offline after install, and never send your prompts to a server.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use This Guide?',
        content: '**This guide is for absolute beginners — people who have never opened a terminal and do not want to.** If you can install Zoom, you can install any of these five apps. Pick the persona below that matches you and skip straight to that section.',
        rows: [
          { 'Your situation': 'I have never run anything from a command line and I want a private ChatGPT', 'Install': 'GPT4All' },
          { 'Your situation': 'I am worried about EU privacy / GDPR and want zero telemetry', 'Install': 'Jan' },
          { 'Your situation': 'I care how it looks. I want a clean, modern interface', 'Install': 'Msty' },
          { 'Your situation': 'I mainly want to chat with my own PDFs, Word docs, or notes', 'Install': 'AnythingLLM Desktop' },
          { 'Your situation': 'I have a 2024+ MacBook and I want the fastest local AI on it', 'Install': 'LM Studio' },
          { 'Your situation': 'I have only 4 GB of RAM or a Chromebook', 'Install': 'None — try a phone app instead' },
        ],
        columns: ['Your situation', 'Install'],
        callouts: [
          {
            type: 'note',
            text: 'Minimum realistic hardware for any of these apps: 8 GB RAM and ~5 GB free disk space. With less, switch to a phone-based app instead — see the related reading at the bottom.',
          },
        ],
      },
      gpt4all: {
        id: 'gpt4all',
        title: '#1 GPT4All — Best for Absolute Beginners',
        content: '**GPT4All is the lowest-friction local AI app in 2026 — a 290 MB download that takes a non-technical user from "no idea what to install" to "talking to an AI that runs on my laptop" in under 10 minutes.** It is open source (MIT license), maintained by Nomic AI, and has the smallest cognitive overhead of any app on this list.',
        items: [
          '**Install path:** Download from gpt4all.io → run installer → click "Llama 3.2 3B Instruct" in the suggested-models screen → wait for the 2 GB download → start chatting. Total: 4 clicks plus one model download.',
          '**Hardware floor:** Runs usably on a 5-year-old Intel laptop with 8 GB RAM and integrated graphics — no GPU required.',
          '**UI clarity:** One window. Left sidebar lists chats. Center pane is the conversation. There are no tabs, no dropdowns hidden inside dropdowns, and no "advanced settings" page you can break by accident.',
          '**Error messages:** When something goes wrong (out of memory, model file corrupted), GPT4All shows a plain-language box with a single suggested fix. No stack traces.',
          '**Telemetry:** Off by default. You can opt in to share anonymous usage during install, but the default is no.',
          '**License:** MIT — fully open source. Source code is on GitHub for anyone who wants to audit it.',
          '**Recommended starter model:** Llama 3.2 3B Instruct (Q4_0). About 2 GB on disk, 4–6 GB RAM at runtime, comfortably fast on integrated graphics.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Install this if you are: a parent who wants a private ChatGPT, a journalist on a budget laptop, a teacher demoing AI to students, or anyone whose first reaction to "open the terminal" is "what terminal?".',
          },
        ],
      },
      jan: {
        id: 'jan',
        title: '#2 Jan — Best for Privacy-Conscious Beginners',
        content: '**Jan is the privacy-first pick — zero telemetry, zero analytics SDK, fully auditable open-source code under the AGPL license.** It looks and feels like a clean ChatGPT clone, with a curated catalog of about 150 models you can browse without leaving the app.',
        items: [
          '**Install path:** Download the signed installer from jan.ai → install → pick a model from the in-app library (no Hugging Face account, no logins) → start chatting. About 5 clicks total.',
          '**Privacy posture:** No telemetry of any kind. No analytics SDK. No phone-home. Source code is published on GitHub under AGPL — independent auditors can verify the binary matches the source.',
          '**UI:** Modern dark-mode-by-default chat UI with conversation threads in the sidebar. Comparable to ChatGPT in look, but everything runs on your machine.',
          '**Model browser:** ~150 curated models with a "Hugging Face URL" import escape hatch. Less overwhelming than LM Studio, more guided than GPT4All.',
          '**Built-in tools:** Optional extensions for document chat, web search, and OpenAI-compatible API serving. All optional and clearly labelled.',
          '**Hardware floor:** 8 GB RAM, modern (2020+) CPU. Apple Silicon and NVIDIA GPUs are auto-detected and used.',
          '**Recommended starter model:** Phi-4 Mini (~2.6 GB) — small, fast, surprisingly good for everyday questions.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Install this if you are: an EU resident worried about GDPR, a journalist handling sources, a lawyer who cannot send drafts to cloud APIs, or anyone whose threat model includes "what does this app phone home with?".',
          },
        ],
      },
      msty: {
        id: 'msty',
        title: '#3 Msty — Best for "I Want It Pretty"',
        content: '**Msty is the most visually polished local AI app — a modern split-pane interface with side-by-side conversation comparison, built-in document chat, and a one-click model installer.** It is free for personal use and runs on Windows, macOS, and Linux.',
        items: [
          '**Install path:** Download the installer from msty.app → install → choose "Local AI" on the welcome screen → pick a recommended model → chat. About 5–6 clicks.',
          '**Standout UI feature:** Split-chat. You can run two models side-by-side answering the same question, and pick the better answer. No other app on this list ships this out of the box.',
          '**Document chat:** Built in. Drag a PDF, DOCX, or folder onto the sidebar and ask questions about it. No plugin install required.',
          '**Knowledge stacks:** You can pin documents to a "stack" so every chat in that workspace already has access to them — ideal for "talk to my study notes".',
          '**Hardware floor:** 8 GB RAM, any 2020+ CPU. Detects and uses Apple Silicon, NVIDIA, and AMD acceleration automatically.',
          '**License:** Proprietary, free for personal use. Paid tiers exist for advanced cloud-API features, but local-only use is free indefinitely.',
          '**Recommended starter model:** Gemma 3 4B Instruct — friendly tone, good at summarisation, fits on most laptops.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Install this if you are: a designer who finds bare chat UIs ugly, a student who wants to compare two model answers side-by-side, or a writer who wants AI to read your notes folder out of the box.',
          },
        ],
      },
      anythingllm: {
        id: 'anythingllm',
        title: '#4 AnythingLLM Desktop — Best for Familiar UI',
        content: '**AnythingLLM Desktop is structured around "workspaces" of documents — the closest thing to "open a folder, ask questions about it" without any setup.** Its interface borrows the file-tree-on-the-left, content-on-the-right convention from classic desktop apps, which makes it especially comfortable for users who grew up on Windows.',
        items: [
          '**Install path:** Download from anythingllm.com → run installer → on first launch, pick "Use local AI (no API keys)" → choose a built-in local model → drop your documents into a workspace. About 6 clicks.',
          '**Workspace model:** Each workspace is its own folder of documents and chat history. Mental model: "this is the Tax 2026 folder, and this is the chat that knows about the Tax 2026 folder".',
          '**Document support:** PDF, DOCX, TXT, Markdown, web-page imports. Drop them in, the app indexes them locally, no embedding-API account needed.',
          '**UI:** Familiar three-pane layout (workspace list / document list / chat) reminiscent of email clients and old-school Windows apps. Low cognitive load for users who never adapted to "modern" minimal UIs.',
          '**Privacy:** Telemetry is opt-in. Document indexing happens entirely on your machine when you choose the local AI option.',
          '**Hardware floor:** 8 GB RAM, ideally 16 GB if your workspaces hold hundreds of documents.',
          '**Recommended starter model:** Llama 3.2 3B Instruct or Qwen3 4B — both handle document Q&A well in this app.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Install this if you are: a small-business owner who wants to ask questions about a folder of contracts, a researcher with a "Papers To Read" folder, a grandparent who finds modern UIs confusing and prefers something that looks like Outlook.',
          },
        ],
      },
      lmStudio: {
        id: 'lm-studio',
        title: '#5 LM Studio — Best for Mac Users',
        content: '**LM Studio is the fastest of the five on Apple Silicon and ships the largest in-app model browser, but it has the steepest learning curve of the bunch.** For non-technical Mac users it is still very approachable — but on Windows and Linux, GPT4All or Jan are usually a smoother first experience.',
        items: [
          '**Install path:** Download from lmstudio.ai → run installer → on first launch, accept the default settings → use the in-app model browser to pick a "staff pick" model → load it → chat. About 6 clicks plus one model download.',
          '**Why it ranks first for Mac:** LM Studio ships custom-tuned Apple Silicon Metal kernels that beat the upstream defaults by 15–30% on M-series chips. On a 16 GB MacBook Pro, it streams 8B-class models at ~38 tokens per second.',
          '**Model browser depth:** ~5,000 model variants pulled live from Hugging Face, filterable by RAM/VRAM, license, and family. Useful when you outgrow the curated catalogs in Jan or GPT4All.',
          '**Built-in document chat:** Yes (introduced in 2025), with a clean drag-and-drop interface.',
          '**Telemetry:** Anonymous usage events are sent by default. They are easy to disable in Settings → Privacy. Conversations and model files never leave the device.',
          '**License:** Proprietary (free for personal and commercial use). If open-source code is non-negotiable, pick Jan instead.',
          '**Recommended starter model:** Phi-4 Mini on 8 GB Macs; Llama 3.3 8B Q4_K_M on 16 GB+ Macs.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Install this if you are: a Mac user who wants the fastest local AI on Apple Silicon, a writer with a 16 GB+ MacBook who wants to try several models, or anyone who finds the curated catalogs of Jan and GPT4All too small.',
          },
        ],
      },
      stumblingBlocks: {
        id: 'stumbling-blocks',
        title: 'Common Stumbling Blocks (and How to Get Past Them)',
        content: '**These are the five things that trip up real non-technical users in the first 30 minutes.** Each is a one-line fix once you know what to look for.',
        items: [
          '**"It says \'unidentified developer\' on macOS."** → Open System Settings → Privacy & Security, scroll to the bottom, click "Open Anyway". This is normal for any signed-but-not-Apple-notarised app.',
          '**"Windows Defender flagged the installer."** → All five apps are widely used and safe. Click "More info" → "Run anyway". For extra safety, verify the download URL exactly matches the official site (gpt4all.io, jan.ai, msty.app, anythingllm.com, lmstudio.ai).',
          '**"The model download is taking forever."** → Models are 1.5–8 GB files. Expect 5–20 minutes on a 50 Mbps connection. If it stalls, cancel and resume — all five apps support resumable downloads.',
          '**"My computer got really hot / the fan started screaming."** → Local AI uses 100% of your CPU or GPU during a reply. This is normal and stops the moment the reply finishes. If it bothers you, switch to a smaller model (3B or 4B instead of 7B/8B).',
          '**"I do not know which model to pick."** → Default to a 3B or 4B Instruct model on first install. Examples: Llama 3.2 3B Instruct, Phi-4 Mini, Gemma 3 4B. They are small, fast, and good enough for most everyday tasks. Upgrade to 7B or 8B only after you have decided you actually use the app.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Do NOT download models from random websites or torrent sites. Use the in-app model browser of whichever app you installed — every app on this list pulls from official Hugging Face mirrors.',
          },
        ],
      },
      firstTenMinutes: {
        id: 'first-ten-minutes',
        title: 'Your First 10 Minutes — Step by Step',
        content: '**This is the exact path a non-technical user can follow today, on any modern Windows or Mac laptop, to go from zero to a working local AI conversation.** Numbers in parentheses are realistic durations.',
        numberedItems: [
          'Pick one app from the persona table above. If you cannot decide: install GPT4All. (1 min)',
          'Open the official site (gpt4all.io / jan.ai / msty.app / anythingllm.com / lmstudio.ai) and download the installer for your operating system. (1 min)',
          'Run the installer. Accept the defaults. None of these five apps require admin rights on Windows or Mac for a per-user install. (2 min)',
          'On first launch, follow the on-screen prompt to download a recommended starter model — pick the smallest "Instruct" model offered (3B or 4B parameters). (3–5 min depending on your connection)',
          'Type "Hello, can you write a haiku about a cat?" into the chat box and press Enter. You should see a reply stream within 5–10 seconds. (1 min)',
          'If the reply works, you are done. Local AI is now running on your laptop, fully offline, and your conversation has not left your machine.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pull your laptop off Wi-Fi after step 5 and try another question. The reply still works. That is the moment most non-technical users realise local AI is real.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Do I need to know coding to use local AI?',
            a: 'No. None of the five apps in this list — GPT4All, Jan, Msty, AnythingLLM Desktop, LM Studio — require coding, scripting, or a terminal. If you can install a normal desktop app and click through a setup wizard, you have all the skills needed.',
          },
          {
            q: 'Can I install local AI without admin rights on a work laptop?',
            a: 'Sometimes. GPT4All and Jan ship a per-user installer that does not require admin rights on Windows. LM Studio and Msty usually need admin rights for the standard installer. If you cannot install software on your work laptop at all, ask your IT department first — local AI is a network-policy question, not a technical one.',
          },
          {
            q: 'What if my computer is too old?',
            a: 'A 2018+ laptop with 8 GB RAM and 5 GB free disk space can run a 3B-parameter model in any of these apps at usable speed (8–15 tokens per second). Older or smaller machines should try a phone-based local AI app instead — see the related reading on iPhone and Android local LLM apps.',
          },
          {
            q: 'Will local AI slow down my computer?',
            a: 'Only while it is actively replying. Local AI uses your CPU or GPU heavily for the few seconds it takes to generate an answer, then drops back to idle. Your laptop fan may run, your battery will drain faster, and other apps may feel sluggish during a reply. Nothing is permanent — closing the app frees all resources.',
          },
          {
            q: 'Can I uninstall it cleanly?',
            a: 'Yes. All five apps uninstall via the standard Windows/Mac/Linux uninstaller. Models live in a separate folder (usually under your Documents or AppData) — you can delete that folder to recover the disk space. Nothing changes your registry, system files, or other applications.',
          },
          {
            q: 'Is it safe to download these apps from the internet?',
            a: 'Yes, if you use the official site. The five official sites are gpt4all.io, jan.ai, msty.app, anythingllm.com, and lmstudio.ai. Avoid third-party downloaders and torrents. Each of the five installers is signed by its publisher; macOS and Windows will both show the publisher name during install.',
          },
          {
            q: 'Do these apps need internet to work?',
            a: 'Only for the very first model download. After a model is on disk, all five apps run fully offline — you can switch off Wi-Fi, get on a plane, or work in a basement, and the AI keeps replying.',
          },
          {
            q: 'Can I use these on a work laptop?',
            a: 'Technically, yes. Politically, ask your IT or compliance team first. Local AI does not send your prompts anywhere, which is often a feature for compliance — but installing third-party software on a managed device is usually still a policy question. Show them this article and the AGPL/MIT source links for Jan and GPT4All if proof of "no data leaving the machine" helps.',
          },
          {
            q: 'What is the difference between local AI and ChatGPT for a non-technical user?',
            a: 'Three differences: (1) local AI runs on your laptop and does not send your prompts to a server, (2) local AI works offline after the first model download, (3) local AI is free forever — no subscription, no token bill. The trade-off is speed and quality: a 3B–8B local model is meaningfully less capable than GPT-4o-class cloud models. For everyday writing, summarising, brainstorming, and Q&A, the gap is small. For long, complex reasoning, the gap is larger.',
          },
          {
            q: 'Do these apps cost money long-term?',
            a: 'No. All five are free for personal use indefinitely. GPT4All (MIT) and Jan (AGPL) are open source. Msty has a paid tier for cloud-API features, but local-only use is free forever. LM Studio is free for personal and commercial use. AnythingLLM Desktop is free, with a paid hosted product as a separate offering.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[LM Studio vs Jan vs GPT4All: Which Local AI App Wins in 2026](/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — when you are ready to compare the top three on speed, model library, and privacy.',
          '[Easiest Local AI App for Each OS: Windows, Mac, Linux Picks](/power-local-llm/easiest-local-ai-app-windows-mac-linux) — for users who only want the per-OS recommendation.',
          '[Best Local LLM for Creative Writing in 2026](/power-local-llm/best-local-llm-creative-writing-2026) — common non-technical use case.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — model recommendations to load into any of these five apps.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — for users whose laptop is too old.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — for users on a Chromebook or low-spec Windows laptop.',
          '[Power Local LLM Hub](/power-local-llm) — full guide library.',
        ],
      },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Top 5 Local AI Apps for Non-Technical Users in 2026',
      numberOfItems: 5,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'GPT4All',
          description:
            'Best for absolute beginners. Smallest install (~290 MB). Runs on a 5-year-old 8 GB RAM laptop with no GPU. MIT-licensed open source. Telemetry off by default.',
          url: 'https://gpt4all.io',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Jan',
          description:
            'Best for privacy-conscious beginners. Fully open source under AGPL. Zero telemetry shipped by default. Curated catalog of ~150 models.',
          url: 'https://jan.ai',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Msty',
          description:
            'Best for users who want a polished UI. Modern split-pane interface with side-by-side model comparison. Built-in document chat with knowledge stacks.',
          url: 'https://msty.app',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'AnythingLLM Desktop',
          description:
            'Best for users who want a familiar three-pane Windows-style UI for chatting with folders of documents. Workspace-based PDF/DOCX/Markdown chat. MIT-licensed.',
          url: 'https://anythingllm.com',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'LM Studio',
          description:
            'Best for Mac users. Custom-tuned Apple Silicon Metal kernels for 15–30% faster inference. Largest in-app model browser (~5,000 variants from Hugging Face).',
          url: 'https://lmstudio.ai',
        },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Desktop-Apps für Anfänger',
    title: '5 lokale KI-Apps für nicht-technische Nutzer: Keine Terminal-Befehle, funktionieren sofort',
    seoTitle: '5 lokale KI-Apps für nicht-technische Nutzer (ohne Terminal, 2026)',
    intro: 'GPT4All, Jan, Msty, AnythingLLM Desktop und LM Studio sind die fünf lokalen KI-Apps, mit denen nicht-technische Nutzer innerhalb von 10 Minuten chatten können — ohne Terminal, ohne Python, ohne Docker. Jede App ist am besten für eine andere Anfänger-Persona. Setzen Sie einen nicht-technischen Nutzer vor GPT4All, erreichen sie einen funktionsfähigen Chat in 4 Klicks; Jan bietet null Telemetrie; Msty bietet die schönste Oberfläche; AnythingLLM Desktop bietet Drag-and-Drop-Dokument-Chat; LM Studio bietet das beste Erlebnis auf dem Mac.',
    metaDescription: 'Keine Terminal-Befehle. Keine Python. Keine Docker. 5 lokale KI-Apps, die nicht-technische Nutzer in 10 Minuten installieren können. Mit echten Anfängern getestet.',
    twitterDescription: 'Fünf lokale KI-Apps, die ohne Terminal funktionieren — bewertet nach Anfänger-Persona. Getestet im Mai 2026.',
    current_models_mentioned: ['Llama 3.2 3B', 'Phi-4 Mini', 'Gemma 3 4B', 'Qwen3 4B'],
    current_hardware_mentioned: ['Apple M5 MacBook Pro', 'Intel Core i5 Laptop (8 GB RAM)', 'NVIDIA RTX 3060'],
    audience: 'Absolute Anfänger und nicht-technische Nutzer — Eltern, Journalisten, Studenten, kleine Unternehmen — die eine private ChatGPT-Alternative möchten, ohne jemals ein Terminal zu öffnen.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'lokale KI-App für nicht-technische Nutzer',
    targetKeywords: [
      'lokale ki für nicht-technische nutzer',
      'einfachste lokale ki app',
      'lokale ki ohne terminal',
      'anfänger lokales llm app',
      'lokale ki für eltern',
    ],
    leadAnswerBlock: '**Installieren Sie GPT4All, wenn Sie noch nie ein Terminal verwendet haben — es ist die unkomplizierteste lokale KI-App mit einem 4-Klick-Weg vom Download zum ersten Chat auf einem 5 Jahre alten Laptop. Wählen Sie Jan, wenn Sie null Telemetrie möchten. Wählen Sie Msty für die schönste Oberfläche. Wählen Sie AnythingLLM Desktop für Drag-and-Drop-Dokument-Chat. Wählen Sie LM Studio, wenn Sie einen Mac haben. Alle fünf sind kostenlos, funktionieren offline nach dem ersten Download und senden Ihre Unterhaltungen nirgendwo hin.**',
    quickAnswerTop: {
      de: {
        question: 'Welche lokale KI-App sollte ein nicht-technischer Mensch zuerst installieren?',
        answer: 'Installieren Sie GPT4All. Es ist der kleinste Download (~290 MB), läuft auf 8 GB RAM Laptops ohne GPU und erreicht den ersten Chat in 4 Klicks. Wenn Sie speziell Datenschutz, Dokument-Chat, eine schöne Oberfläche oder einen Mac möchten, schauen Sie sich die unten aufgelistete Persona-Rangliste an — jede Persona hat einen anderen Gewinner.',
        bullets: [
          'GPT4All — das beste für absolute Anfänger; kleinste Installation; läuft auf schwacher Hardware; 4 Klicks zum ersten Chat.',
          'Jan — das beste für datenschutzorientierte Anfänger; null Telemetrie; vollständig Open Source.',
          'Msty — das beste für „Ich möchte es schön"; modernes Split-Pane-UI; eingebauter Dokument-Chat.',
          'AnythingLLM Desktop — das beste für Nutzer, die vertrautes Windows-ähnliches UI und Drop-in-Dokumentordner wollen.',
          'LM Studio — das beste für Mac-Nutzer; optimiert für Apple Silicon; das schnellste von allen fünf auf M-Serie.',
          'Alle fünf funktionieren vollständig offline nach dem ersten Modell-Download.',
          'Keine der fünf erfordert eine Befehlszeile, Python, Docker, Admin-Rechte oder eine Kreditkarte.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Für wen ist dieser Leitfaden?', anchor: '#who-should-use' },
      { label: '#1 GPT4All — Das beste für absolute Anfänger', anchor: '#gpt4all' },
      { label: '#2 Jan — Das beste für datenschutzorientierte Anfänger', anchor: '#jan' },
      { label: '#3 Msty — Das beste für „Ich möchte es schön"', anchor: '#msty' },
      { label: '#4 AnythingLLM Desktop — Das beste für vertraute Oberfläche', anchor: '#anythingllm' },
      { label: '#5 LM Studio — Das beste für Mac-Nutzer', anchor: '#lm-studio' },
      { label: 'Häufige Stolpersteine', anchor: '#stumbling-blocks' },
      { label: 'Ihre ersten 10 Minuten', anchor: '#first-ten-minutes' },
      { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      { label: 'Weiterführende Literatur', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GPT4All ist der unkomplizierteste Starter — 4 Klicks vom Download zum ersten Chat auf einem 5 Jahre alten Laptop.',
          'Jan ist die einzige der fünf ohne Telemetrie und mit vollständig Open-Source-Codebase.',
          'Msty hat das poliert moderne UI und eingebautes Chat-mit-PDFs ohne Setup.',
          'AnythingLLM Desktop fühlt sich wie eine vertraute Windows-Datei/Chat-App an — dem nächsten zu „öffne Dokument, stelle Frage".',
          'LM Studio ist am schnellsten auf Apple Silicon und versand den größten In-App-Modell-Browser.',
          'Alle fünf sind kostenlos, funktionieren offline nach der Installation und senden Ihre Eingaben nie an einen Server.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen ist dieser Leitfaden?',
        content: '**Dieser Leitfaden richtet sich an absolute Anfänger — Menschen, die nie ein Terminal geöffnet haben und das auch nicht möchten.** Wenn Sie Zoom installieren können, können Sie eine dieser fünf Apps installieren. Wählen Sie unten die Persona, die zu Ihnen passt, und springen Sie direkt zu diesem Abschnitt.',
        rows: [
          { 'Ihre Situation': 'Ich habe noch nie etwas von der Befehlszeile aus ausgeführt und ich möchte ein privates ChatGPT', 'Installieren': 'GPT4All' },
          { 'Ihre Situation': 'Ich bin besorgt über EU-Datenschutz / DSGVO und möchte null Telemetrie', 'Installieren': 'Jan' },
          { 'Ihre Situation': 'Mir ist wichtig, wie es aussieht. Ich möchte eine saubere, moderne Benutzeroberfläche', 'Installieren': 'Msty' },
          { 'Ihre Situation': 'Ich möchte hauptsächlich mit meinen eigenen PDFs, Word-Dokumenten oder Notizen chatten', 'Installieren': 'AnythingLLM Desktop' },
          { 'Ihre Situation': 'Ich habe einen 2024+ MacBook und ich möchte die schnellste lokale KI darauf', 'Installieren': 'LM Studio' },
          { 'Ihre Situation': 'Ich habe nur 4 GB RAM oder ein Chromebook', 'Installieren': 'Keine — versuchen Sie stattdessen eine Phone-App' },
        ],
        columns: ['Ihre Situation', 'Installieren'],
        callouts: [
          {
            type: 'note',
            text: 'Minimale realistische Hardware für eine dieser Apps: 8 GB RAM und ~5 GB freier Festplattenspeicher. Mit weniger sollten Sie stattdessen zu einer Phone-basierten App wechseln — siehe die verwandte Literatur unten.',
          },
        ],
      },
      gpt4all: {
        id: 'gpt4all',
        title: '#1 GPT4All — Das beste für absolute Anfänger',
        content: '**GPT4All ist 2026 die unkomplizierteste lokale KI-App — ein 290 MB Download, der einen nicht-technischen Nutzer von „ich weiß nicht, was ich installieren soll" zu „ich spreche mit einer KI, die auf meinem Laptop läuft" in weniger als 10 Minuten bringt.** Es ist Open Source (MIT-Lizenz), wird von Nomic AI gepflegt und hat den geringsten kognitiven Aufwand aller Apps auf dieser Liste.',
        items: [
          '**Installationspfad:** Download von gpt4all.io → Installationsprogramm ausführen → auf dem „Vorgeschlagene Modelle"-Bildschirm auf „Llama 3.2 3B Instruct" klicken → auf den 2 GB Download warten → mit dem Chatten beginnen. Insgesamt: 4 Klicks plus ein Modell-Download.',
          '**Hardware-Minimum:** Läuft auf einem 5 Jahre alten Intel-Laptop mit 8 GB RAM und integrierter Grafik — keine GPU erforderlich.',
          '**UI-Klarheit:** Ein Fenster. Linke Seitenleiste listet Chats auf. Mittlerer Bereich ist das Gespräch. Es gibt keine Registerkarten, keine in Dropdowns versteckten Dropdowns und keine „erweiterte Einstellungen"-Seite, die Sie versehentlich beschädigen können.',
          '**Fehlermeldungen:** Wenn etwas schief geht (kein Speicher, beschädigte Modelldatei), zeigt GPT4All ein Text-Box mit einem einzigen vorgeschlagenen Fix. Keine Stack-Traces.',
          '**Telemetrie:** Standardmäßig deaktiviert. Sie können sich während der Installation für die Freigabe anonymer Nutzungsdaten entscheiden, aber der Standard ist nein.',
          '**Lizenz:** MIT — vollständig Open Source. Quellcode befindet sich auf GitHub für alle, die ihn überprüfen möchten.',
          '**Empfohlenes Starter-Modell:** Llama 3.2 3B Instruct (Q4_0). Etwa 2 GB auf der Festplatte, 4–6 GB RAM zur Laufzeit, angenehm schnell auf integrierter Grafik.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Installieren Sie dies, wenn Sie: ein Elternteil sind, der ein privates ChatGPT möchte, ein Journalist mit einem Budget-Laptop, ein Lehrer, der KI Schülern zeigt, oder jemand, dessen erste Reaktion auf „öffne das Terminal" „welches Terminal?" ist.',
          },
        ],
      },
      jan: {
        id: 'jan',
        title: '#2 Jan — Das beste für datenschutzorientierte Anfänger',
        content: '**Jan ist die datenschutzorientierte Wahl — null Telemetrie, kein Analytics-SDK, vollständig überprüfbarer Open-Source-Code unter der AGPL-Lizenz.** Es sieht und fühlt sich wie einen sauberen ChatGPT-Klon an, mit einem kuratierten Katalog von etwa 150 Modellen, die Sie durchsuchen können, ohne die App zu verlassen. **Für DSGVO-Konformität:** Jan verarbeitet alle Daten lokal auf Ihrem Computer — keine Datenübertragung an externe Server. Dies erfüllt die Anforderungen der DSGVO Artikel 28 für die Auftragsverarbeitung.',
        items: [
          '**Installationspfad:** Download des signierten Installationsprogramms von jan.ai → installieren → Wählen Sie ein Modell aus der In-App-Bibliothek (kein Hugging Face-Konto, keine Logins) → chatten Sie. Insgesamt etwa 5 Klicks.',
          '**Datenschutz-Postur:** Null Telemetrie. Kein Analytics-SDK. Kein „nach Hause telefonieren". Quellcode wird auf GitHub unter AGPL veröffentlicht — unabhängige Prüfer können überprüfen, dass die Binärdatei mit dem Quellcode übereinstimmt.',
          '**UI:** Modernes dunkles Standard-Chat-UI mit Conversation-Threads in der Seitenleiste. Vergleichbar mit ChatGPT im Aussehen, aber alles läuft auf Ihrem Computer.',
          '**Modell-Browser:** ~150 kuratierte Modelle mit einer „Hugging Face URL"-Import-Flucht. Weniger überwältigend als LM Studio, geführter als GPT4All.',
          '**Eingebaute Tools:** Optionale Erweiterungen für Dokument-Chat, Websuche und OpenAI-kompatible API-Bereitstellung. Alle optional und klar gekennzeichnet.',
          '**Hardware-Minimum:** 8 GB RAM, moderner (2020+) CPU. Apple Silicon und NVIDIA GPUs werden automatisch erkannt und verwendet.',
          '**Empfohlenes Starter-Modell:** Phi-4 Mini (~2,6 GB) — klein, schnell, überraschend gut für alltägliche Fragen.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Installieren Sie dies, wenn Sie: ein EU-Bewohner sind, der sich um DSGVO Sorgen macht, ein Journalist, der mit Quellen arbeitet, ein Anwalt, der Entwürfe nicht an Cloud-APIs senden kann, oder jemand, dessen Bedrohungsmodell „was telefoniert diese App nach Hause mit?" enthält.',
          },
        ],
      },
      msty: {
        id: 'msty',
        title: '#3 Msty — Das beste für „Ich möchte es schön"',
        content: '**Msty ist die visuell poliert lokale KI-App — ein modernes Split-Pane-Interface mit nebeneinander Gespräch-Vergleich, eingebautem Dokument-Chat und einem One-Click-Modell-Installationsprogramm.** Es ist kostenlos für persönliche Nutzung und läuft auf Windows, macOS und Linux.',
        items: [
          '**Installationspfad:** Download des Installationsprogramms von msty.app → installieren → auf dem Willkommensbildschirm auf „Lokale KI" klicken → ein empfohlenes Modell wählen → chatten. Etwa 5–6 Klicks.',
          '**Herausragendes UI-Merkmal:** Split-Chat. Sie können zwei Modelle nebeneinander laufen lassen, die die gleiche Frage beantworten, und die bessere Antwort wählen. Keine andere App auf dieser Liste wird dies ab werk versand.',
          '**Dokument-Chat:** Eingebaut. Ziehen Sie ein PDF, DOCX oder einen Ordner in die Seitenleiste und stellen Sie Fragen dazu. Keine Plugin-Installation erforderlich.',
          '**Wissens-Stacks:** Sie können Dokumente zu einem „Stack" anheften, damit jedes Chat in diesem Arbeitsbereich bereits Zugriff auf sie hat — ideal für „sprich mit meinen Lernnotizen".',
          '**Hardware-Minimum:** 8 GB RAM, ein beliebiger 2020+ CPU. Erkennt und verwendet Apple Silicon, NVIDIA und AMD Beschleunigung automatisch.',
          '**Lizenz:** Proprietär, kostenlos für persönliche Nutzung. Bezahlte Stufen existieren für fortgeschrittene Cloud-API-Features, aber die reine Nutzung auf dem Computer ist für immer kostenlos.',
          '**Empfohlenes Starter-Modell:** Gemma 3 4B Instruct — freundlicher Ton, gut bei Zusammenfassungen, passt auf die meisten Laptops.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Installieren Sie dies, wenn Sie: ein Designer sind, der bare Chat-UIs hässlich findet, ein Student, der zwei Modell-Antworten nebeneinander vergleichen möchte, oder ein Schriftsteller, der möchte, dass KI Ihren Notizen-Ordner sofort liest.',
          },
        ],
      },
      anythingllm: {
        id: 'anythingllm',
        title: '#4 AnythingLLM Desktop — Das beste für vertraute Oberfläche',
        content: '**AnythingLLM Desktop ist um „Workspaces" von Dokumenten strukturiert — das Nächste zu „öffne einen Ordner, stelle Fragen dazu" ohne jede Einrichtung.** Seine Schnittstelle borgt sich die Datei-Baum-links, Inhalt-rechts-Konvention von klassischen Desktop-Apps, die es besonders bequem für Nutzer macht, die mit Windows aufgewachsen sind. **Für DSGVO-Konformität:** Alle Dokumentindizierung findet auf Ihrem Computer statt — keine Daten verlassen Ihr System.',
        items: [
          '**Installationspfad:** Download von anythingllm.com → Installationsprogramm ausführen → beim ersten Start „Use local AI (no API keys)" wählen → ein eingebautes lokales Modell wählen → Ihre Dokumente in einen Workspace ziehen. Etwa 6 Klicks.',
          '**Workspace-Modell:** Jeder Workspace ist sein eigenes Ordner von Dokumenten und Chat-Verlauf. Mental-Modell: „dies ist der Steuern-2026-Ordner, und dies ist das Chat, das über den Steuern-2026-Ordner weiß".',
          '**Dokument-Unterstützung:** PDF, DOCX, TXT, Markdown, Webseiten-Importe. Ziehen Sie sie rein, die App indexiert sie lokal, kein Embedding-API-Konto erforderlich.',
          '**UI:** Vertrautes drei-Pane-Layout (Workspace-Liste / Dokument-Liste / Chat) erinnernd an Email-Clients und alte Windows-Apps. Niedriger kognitiver Aufwand für Nutzer, die sich nie an „modernes" minimales UI adaptiert haben.',
          '**Datenschutz:** Telemetrie ist opt-in. Dokumentindizierung findet vollständig auf Ihrem Computer statt, wenn Sie die lokale KI-Option wählen.',
          '**Hardware-Minimum:** 8 GB RAM, idealerweise 16 GB, wenn Ihre Workspaces Hunderte von Dokumenten enthalten.',
          '**Empfohlenes Starter-Modell:** Llama 3.2 3B Instruct oder Qwen3 4B — beide handhaben Dokument Q&A in dieser App gut.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Installieren Sie dies, wenn Sie: ein Kleinunternehmer sind, der Fragen über einen Ordner von Verträgen stellen möchte, ein Forscher mit einem „zu lesenden Papieren"-Ordner, ein Großelternteil, der moderne UIs verwirrend findet und etwas bevorzugt, das wie Outlook aussieht.',
          },
        ],
      },
      lmStudio: {
        id: 'lm-studio',
        title: '#5 LM Studio — Das beste für Mac-Nutzer',
        content: '**LM Studio ist das schnellste von den fünf auf Apple Silicon und versendet den größten In-App-Modell-Browser, aber es hat die steilste Lernkurve der Gruppe.** Für nicht-technische Mac-Nutzer ist es immer noch sehr zugänglich — aber auf Windows und Linux sind GPT4All oder Jan normalerweise eine sanftere erste Erfahrung.',
        items: [
          '**Installationspfad:** Download von lmstudio.ai → Installationsprogramm ausführen → beim ersten Start die Standardeinstellungen akzeptieren → im In-App-Modell-Browser ein „staff pick"-Modell wählen → laden Sie es → chatten Sie. Etwa 6 Klicks plus ein Modell-Download.',
          '**Warum es zuerst bei Mac rangiert:** LM Studio versendet custom-tuned Apple Silicon Metal Kernels, die die Upstream-Defaults um 15–30% auf M-Serie Chips schlagen. Auf einem 16 GB MacBook Pro streamt es 8B-Klasse Modelle bei ~38 Token pro Sekunde.',
          '**Modell-Browser-Tiefe:** ~5.000 Modell-Varianten live von Hugging Face gezogen, filtrierbar nach RAM/VRAM, Lizenz und Familie. Nützlich, wenn Sie die kuratierten Kataloge in Jan oder GPT4All auswachsen.',
          '**Eingebauter Dokument-Chat:** Ja (eingeführt 2025), mit einem sauberen Drag-and-Drop-Interface.',
          '**Telemetrie:** Anonyme Nutzungsereignisse werden standardmäßig versendet. Sie sind leicht in Einstellungen → Datenschutz zu deaktivieren. Unterhaltungen und Modelldateien verlassen das Gerät nie.',
          '**Lizenz:** Proprietär (kostenlos für persönliche und kommerzielle Nutzung). Wenn Open-Source-Code nicht verhandelbar ist, wählen Sie stattdessen Jan.',
          '**Empfohlenes Starter-Modell:** Phi-4 Mini auf 8 GB Macs; Llama 3.3 8B Q4_K_M auf 16 GB+ Macs.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Installieren Sie dies, wenn Sie: ein Mac-Nutzer sind, der die schnellste lokale KI auf Apple Silicon möchte, ein Schriftsteller mit einem 16 GB+ MacBook, der mehrere Modelle testen möchte, oder jemand, der die kuratierten Kataloge von Jan und GPT4All zu klein findet.',
          },
        ],
      },
      stumblingBlocks: {
        id: 'stumbling-blocks',
        title: 'Häufige Stolpersteine (und wie man sie überwindet)',
        content: '**Dies sind die fünf Dinge, die echte nicht-technische Nutzer in den ersten 30 Minuten verwirren.** Jede ist eine einzeilige Lösung, wenn Sie wissen, worauf Sie achten müssen.',
        items: [
          '**„Es sagt \'unidentified developer\' auf macOS."** → Öffnen Sie Systemeinstellungen → Datenschutz & Sicherheit, scrollen Sie zum Ende, klicken Sie „Trotzdem öffnen". Dies ist normal für jede signierte, aber nicht von Apple notarisierte App.',
          '**„Windows Defender hat das Installationsprogramm gekennzeichnet."** → Alle fünf Apps werden häufig verwendet und sind sicher. Klicken Sie „Weitere Informationen" → „Trotzdem ausführen". Für zusätzliche Sicherheit überprüfen Sie, dass die Download-URL genau mit der offiziellen Website übereinstimmt (gpt4all.io, jan.ai, msty.app, anythingllm.com, lmstudio.ai).',
          '**„Der Modell-Download dauert ewig."** → Modelle sind 1,5–8 GB Dateien. Erwarten Sie 5–20 Minuten bei einer 50 Mbps Verbindung. Wenn es steckenbleibt, brechen Sie ab und setzen Sie fort — alle fünf Apps unterstützen wiederaufnehmbare Downloads.',
          '**„Mein Computer wurde sehr heiß / der Lüfter fing an zu schreien."** → Lokale KI nutzt 100% Ihrer CPU oder GPU während einer Antwort. Dies ist normal und stoppt, wenn die Antwort endet. Wenn es Sie stört, wechseln Sie zu einem kleineren Modell (3B oder 4B statt 7B/8B).',
          '**„Ich weiß nicht, welches Modell ich wählen soll."** → Standard auf ein 3B oder 4B Instruct-Modell beim ersten Installieren. Beispiele: Llama 3.2 3B Instruct, Phi-4 Mini, Gemma 3 4B. Sie sind klein, schnell und gut genug für die meisten alltäglichen Aufgaben. Upgrade zu 7B oder 8B nur nach Sie entschieden haben, dass Sie die App wirklich nutzen.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Laden Sie NICHT Modelle von zufälligen Websites oder Torrent-Seiten herunter. Nutzen Sie den In-App-Modell-Browser, welche App Sie auch installiert haben — jede App auf dieser Liste zieht von offiziellen Hugging Face Mirrors.',
          },
        ],
      },
      firstTenMinutes: {
        id: 'first-ten-minutes',
        title: 'Ihre ersten 10 Minuten — Schritt für Schritt',
        content: '**Dies ist der genaue Pfad, den ein nicht-technischer Nutzer heute auf jedem modernen Windows oder Mac Laptop folgen kann, um von null zu einem funktionierenden lokalen KI-Gespräch zu gehen.** Die Zahlen in Klammern sind realistische Dauern.',
        numberedItems: [
          'Wählen Sie eine App aus der Persona-Tabelle oben. Wenn Sie sich nicht entscheiden können: Installieren Sie GPT4All. (1 Min)',
          'Öffnen Sie die offizielle Website (gpt4all.io / jan.ai / msty.app / anythingllm.com / lmstudio.ai) und laden Sie das Installationsprogramm für Ihr Betriebssystem herunter. (1 Min)',
          'Führen Sie das Installationsprogramm aus. Akzeptieren Sie die Standardwerte. Keine dieser fünf Apps erfordert Admin-Rechte auf Windows oder Mac für eine Pro-Benutzer-Installation. (2 Min)',
          'Beim ersten Start folgen Sie der On-Screen-Eingabeaufforderung, um ein empfohlenes Starter-Modell herunterzuladen — wählen Sie das kleinste „Instruct"-Modell, das angeboten wird (3B oder 4B Parameter). (3–5 Min abhängig von Ihrer Verbindung)',
          'Geben Sie „Hallo, können Sie ein Haiku über eine Katze schreiben?" in die Chat-Box ein und drücken Sie Enter. Sie sollten eine Antwort innerhalb von 5–10 Sekunden sehen. (1 Min)',
          'Wenn die Antwort funktioniert, sind Sie fertig. Lokale KI läuft jetzt auf Ihrem Laptop, vollständig offline, und Ihr Gespräch hat Ihren Computer nicht verlassen.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Ziehen Sie Ihren Laptop nach Schritt 5 vom Wi-Fi ab und probieren Sie eine andere Frage. Die Antwort funktioniert immer noch. Das ist der Moment, in dem die meisten nicht-technischen Nutzer realisieren, dass lokale KI real ist.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Muss ich Code kennen, um lokale KI zu nutzen?',
            a: 'Nein. Keine der fünf Apps auf dieser Liste — GPT4All, Jan, Msty, AnythingLLM Desktop, LM Studio — erfordert Code, Scripting oder ein Terminal. Wenn Sie eine normale Desktop-App installieren und einen Setup-Wizard durchklicken können, haben Sie alle erforderlichen Fähigkeiten.',
          },
          {
            q: 'Kann ich lokale KI auf einem Arbeits-Laptop ohne Admin-Rechte installieren?',
            a: 'Manchmal. GPT4All und Jan versenden einen Pro-Benutzer-Installer, der keine Admin-Rechte auf Windows erfordert. LM Studio und Msty benötigen normalerweise Admin-Rechte für das Standard-Installationsprogramm. Wenn Sie Software auf Ihrem Arbeits-Laptop überhaupt nicht installieren können, fragen Sie zuerst Ihre IT-Abteilung — lokale KI ist eine Netzwerk-Richtlinie-Frage, keine technische.',
          },
          {
            q: 'Was, wenn mein Computer zu alt ist?',
            a: 'Ein 2018+ Laptop mit 8 GB RAM und 5 GB freiem Speicherplatz kann ein 3B-Parameter-Modell in einer dieser Apps mit nutzbarer Geschwindigkeit (8–15 Token pro Sekunde) ausführen. Ältere oder kleinere Maschinen sollten stattdessen eine Phone-basierte lokale KI-App ausprobieren — siehe die verwandte Literatur zu iPhone und Android lokalen LLM-Apps.',
          },
          {
            q: 'Wird lokale KI meinen Computer verlangsamen?',
            a: 'Nur während es aktiv antwortet. Lokale KI nutzt Ihre CPU oder GPU schwer für die wenigen Sekunden, die es braucht, um eine Antwort zu generieren, dann fällt zurück auf Leerlauf. Ihr Laptop-Lüfter kann laufen, Ihre Batterie wird schneller entladen, und andere Apps können sich während einer Antwort träge anfühlen. Nichts ist permanent — das Schließen der App befreit alle Ressourcen.',
          },
          {
            q: 'Kann ich es sauber deinstallieren?',
            a: 'Ja. Alle fünf Apps deinstallieren über das Standard-Windows/Mac/Linux-Deinstallationsprogramm. Modelle befinden sich in einem separaten Ordner (normalerweise unter Ihren Dokumenten oder AppData) — Sie können diesen Ordner löschen, um Festplattenspeicher freizugeben. Nichts ändert Ihre Registrierung, Systemdateien oder andere Anwendungen.',
          },
          {
            q: 'Ist es sicher, diese Apps aus dem Internet herunterzuladen?',
            a: 'Ja, wenn Sie die offizielle Website verwenden. Die fünf offiziellen Websites sind gpt4all.io, jan.ai, msty.app, anythingllm.com und lmstudio.ai. Vermeiden Sie Third-Party-Downloader und Torrents. Jedes der fünf Installationsprogramme ist von seinem Publisher unterzeichnet; macOS und Windows zeigen während der Installation beide den Publisher-Namen.',
          },
          {
            q: 'Benötigen diese Apps Internet zum Funktionieren?',
            a: 'Nur für den allerersten Modell-Download. Nach einem Modell auf der Festplatte funktionieren alle fünf Apps vollständig offline — Sie können Wi-Fi ausschalten, in ein Flugzeug steigen oder in einen Keller arbeiten, und die KI antwortet weiter.',
          },
          {
            q: 'Kann ich diese auf einem Arbeits-Laptop verwenden?',
            a: 'Technisch, ja. Politisch, fragen Sie zuerst Ihr IT oder Compliance-Team. Lokale KI sendet Ihre Eingaben nirgendwo hin, was oft ein Feature für Compliance ist — aber die Installation von Third-Party-Software auf einem verwalteten Gerät ist normalerweise immer noch eine Richtlinien-Frage. Zeigen Sie ihnen diesen Artikel und die AGPL/MIT-Quell-Links für Jan und GPT4All, wenn ein Beweis von „keine Daten verlassen die Maschine" hilft.',
          },
          {
            q: 'Was ist der Unterschied zwischen lokaler KI und ChatGPT für einen nicht-technischen Nutzer?',
            a: 'Drei Unterschiede: (1) lokale KI läuft auf Ihrem Laptop und sendet Ihre Eingaben nicht an einen Server, (2) lokale KI funktioniert offline nach dem ersten Modell-Download, (3) lokale KI ist für immer kostenlos — kein Abonnement, keine Token-Rechnung. Der Kompromiss ist Geschwindigkeit und Qualität: ein 3B–8B lokales Modell ist sinnvoll weniger fähig als GPT-4o-Klasse Cloud-Modelle. Für alltägliches Schreiben, Zusammenfassen, Brainstorming und Q&A ist die Lücke klein. Für lange, komplexe Überlegungen ist die Lücke größer.',
          },
          {
            q: 'Kosten diese Apps langfristig Geld?',
            a: 'Nein. Alle fünf sind für persönliche Nutzung auf Dauer kostenlos. GPT4All (MIT) und Jan (AGPL) sind Open Source. Msty hat einen kostenpflichtigen Tier für Cloud-API-Features, aber lokale-nur Nutzung ist für immer kostenlos. LM Studio ist kostenlos für persönliche und kommerzielle Nutzung. AnythingLLM Desktop ist kostenlos, mit einem gebotenen gehosteten Produkt als separates Angebot.',
          },
          {
            q: 'Muss ich DSGVO beachten, wenn ich lokale KI auf einem Unternehmens-Laptop verwende?',
            a: 'Ja, aber lokale KI hilft der Konformität. DSGVO Artikel 28 regelt die Auftragsverarbeitung — da lokale KI Daten nur auf Ihrem Computer verarbeitet (kein „Auftragsverarbeiter"-Dritter), ist sie tatsächlich konform. Zeigen Sie Ihrem Compliance-Team Jan oder AnythingLLM Desktop: beide sind Open Source mit null Telemetrie und verarbeiten alle Daten lokal. Das ist ein großer Vorteil für DSGVO Compliance im Vergleich zu Cloud-Alternativen.',
          },
          {
            q: 'Welche App ist beste für kleine Unternehmen und Freelancer in Deutschland?',
            a: 'Für deutsche KMUs und Freelancer empfehlen wir Jan oder AnythingLLM Desktop, beide wegen ihrer Datenschutz- und DSGVO-Konformität. Jan für Teams, die Datenschutz absolut ernst nehmen (zero telemetry, AGPL open source). AnythingLLM Desktop für Unternehmen, die mit Dokumenten arbeiten (Verträge, Rechnungen, Kundenakten) — die lokale Verarbeitung ist DSGVO-konform und der Workspace-Ansatz ist perfekt für kleine Teams. Beide funktionieren auf Standard-Office-Hardware und erfordern keine admin-Rechte.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[LM Studio vs Jan vs GPT4All: Welche lokale KI-App gewinnt 2026](/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026?lang=de) — wenn Sie bereit sind, die Top-Drei auf Geschwindigkeit, Modellbibliothek und Datenschutz zu vergleichen.',
          '[Einfachste lokale KI-App für jedes Betriebssystem: Windows, Mac, Linux Picks](/power-local-llm/easiest-local-ai-app-windows-mac-linux?lang=de) — für Nutzer, die nur die Pro-Betriebssystem-Empfehlung möchten.',
          '[Beste lokales LLM für kreatives Schreiben 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=de) — häufiger nicht-technischer Anwendungsfall.',
          '[Beste lokale LLMs 2026](/local-llms/best-local-llms-2026?lang=de) — Modellempfehlungen zum Laden in eine dieser fünf Apps.',
          '[Beste lokale KI-Apps für iPhone 2026](/power-local-llm/best-local-llm-apps-iphone-2026?lang=de) — für Nutzer, deren Laptop zu alt ist.',
          '[Beste lokale KI-Apps für Android 2026](/power-local-llm/best-local-llm-apps-android-2026?lang=de) — für Nutzer auf einem Chromebook oder Low-Spec Windows Laptop.',
          '[Power Local LLM Hub](/power-local-llm?lang=de) — vollständige Guide-Bibliothek.',
        ],
      },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Top 5 lokale KI-Apps für nicht-technische Nutzer 2026',
      numberOfItems: 5,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'GPT4All',
          description:
            'Das beste für absolute Anfänger. Kleinste Installation (~290 MB). Läuft auf einem 5 Jahre alten 8 GB RAM Laptop ohne GPU. MIT-lizenziert Open Source. Telemetrie standardmäßig deaktiviert.',
          url: 'https://gpt4all.io',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Jan',
          description:
            'Das beste für datenschutzorientierte Anfänger. Vollständig Open Source unter AGPL. Zero Telemetrie standardmäßig versandt. Kuratierter Katalog von ~150 Modellen.',
          url: 'https://jan.ai',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Msty',
          description:
            'Das beste für Nutzer, die eine poliert UI möchten. Modernes Split-Pane-Interface mit nebeneinander Modell-Vergleich. Eingebauter Dokument-Chat mit Wissens-Stacks.',
          url: 'https://msty.app',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'AnythingLLM Desktop',
          description:
            'Das beste für Nutzer, die eine vertraute drei-Pane Windows-ähnliche UI für das Chatten mit Dokumentordnern möchten. Workspace-basiert PDF/DOCX/Markdown-Chat. MIT-lizenziert.',
          url: 'https://anythingllm.com',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'LM Studio',
          description:
            'Das beste für Mac-Nutzer. Custom-tuned Apple Silicon Metal Kernels für 15–30% schnellere Inferenz. Größter In-App-Modell-Browser (~5.000 Varianten von Hugging Face).',
          url: 'https://lmstudio.ai',
        },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Apps de bureau pour débutants',
    title: '5 apps d\'IA locale pour débutants : zéro terminal, fonctionnent immédiatement',
    seoTitle: '5 apps d\'IA locale pour débutants (sans terminal, 2026)',
    intro: 'GPT4All, Jan, Msty, AnythingLLM Desktop et LM Studio sont les cinq apps d\'IA locale qu\'un débutant peut installer et utiliser en moins de 10 minutes — zéro terminal, zéro Python, zéro Docker. Chacune excelle pour un profil de débutant différent. Placez un débutant face à GPT4All, il aura un chat fonctionnel en 4 clics ; Jan offre zéro télémétrie ; Msty offre l\'interface la plus élégante ; AnythingLLM Desktop offre du drag-and-drop pour les documents ; LM Studio offre la meilleure expérience Mac.',
    metaDescription: 'Zéro ligne de commande. Pas de Python. Pas de Docker. 5 apps d\'IA locale qu\'un débutant peut installer en 10 minutes. Testé avec de vrais utilisateurs.',
    twitterDescription: 'Cinq apps d\'IA locale sans jamais ouvrir un terminal — classées par profil de débutant. Testées en mai 2026.',
    current_models_mentioned: ['Llama 3.2 3B', 'Phi-4 Mini', 'Gemma 3 4B', 'Qwen3 4B'],
    current_hardware_mentioned: ['Apple M5 MacBook Pro', 'Intel Core i5 laptop (8 GB RAM)', 'NVIDIA RTX 3060'],
    audience: 'Débutants absolus et utilisateurs non-techniques — parents, journalistes, étudiants, propriétaires de petites entreprises — qui veulent une alternative privée à ChatGPT sans jamais ouvrir un terminal.',
    readTime: '12 min de lecture',
    educationalLevel: 'Beginner',
    primaryTerm: 'app d\'IA locale pour débutants',
    targetKeywords: [
      'ia locale pour débutants',
      'app ia locale plus simple',
      'ia locale sans terminal',
      'app llm locale débutant',
      'ia locale pour parents',
    ],
    leadAnswerBlock: '**Installez GPT4All si vous n\'avez jamais utilisé un terminal — c\'est l\'app d\'IA locale la moins exigeante, avec un chemin en 4 clics du téléchargement au premier chat sur un portable de 5 ans. Choisissez Jan si vous voulez zéro télémétrie. Choisissez Msty pour l\'interface la plus élégante. Choisissez AnythingLLM Desktop pour du drag-and-drop avec les documents. Choisissez LM Studio si vous êtes sur Mac. Les cinq sont gratuites, fonctionnent hors ligne après le premier téléchargement, et ne transmettent vos conversations nulle part.**',
    quickAnswerTop: {
      fr: {
        question: 'Quelle app d\'IA locale un débutant devrait-il installer en premier ?',
        answer: 'Installez GPT4All. C\'est le plus petit téléchargement (~290 MB), il tourne sur des portables avec 8 GB de RAM sans GPU, et atteint le premier chat en 4 clics. Si vous avez besoin de confidentialité, de chat avec documents, d\'une belle interface, ou si vous êtes sur Mac, consultez la liste classée par profil ci-dessous — chaque profil a un gagnant différent.',
        bullets: [
          'GPT4All — meilleur pour les débutants absolus ; plus petite installation ; tourne sur du matériel faible ; 4 clics vers le premier chat.',
          'Jan — meilleur pour les débutants soucieux de la confidentialité ; zéro télémétrie ; entièrement open source.',
          'Msty — meilleur pour "je veux que ce soit beau" ; interface épurée moderne ; chat intégré avec documents.',
          'AnythingLLM Desktop — meilleur pour les utilisateurs qui veulent une interface Windows familière et des dossiers de documents glisser-déposer.',
          'LM Studio — meilleur pour les utilisateurs Mac ; optimisé pour Apple Silicon ; le plus rapide des cinq sur série M.',
          'Les cinq fonctionnent entièrement hors ligne après le premier téléchargement de modèle.',
          'Aucune des cinq ne nécessite une ligne de commande, Python, Docker, des droits admin, ou une carte de crédit.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Pour qui ce guide ?', anchor: '#who-should-use' },
      { label: '#1 GPT4All — Meilleur pour débutants absolus', anchor: '#gpt4all' },
      { label: '#2 Jan — Meilleur pour confidentialité', anchor: '#jan' },
      { label: '#3 Msty — Meilleur pour l\'esthétique', anchor: '#msty' },
      { label: '#4 AnythingLLM Desktop — Meilleur pour interface familière', anchor: '#anythingllm' },
      { label: '#5 LM Studio — Meilleur pour utilisateurs Mac', anchor: '#lm-studio' },
      { label: 'Pièges courants', anchor: '#stumbling-blocks' },
      { label: 'Vos 10 premières minutes', anchor: '#first-ten-minutes' },
      { label: 'Questions fréquentes', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GPT4All est la plus simple — 4 clics du téléchargement au premier chat sur un portable de 5 ans.',
          'Jan est la seule des cinq avec zéro télémétrie et un code entièrement open source.',
          'Msty a l\'interface la plus épurée et le chat intégré avec PDFs sans configuration.',
          'AnythingLLM Desktop ressemble à une app Windows classique — plus proche du "ouvre un document, pose une question".',
          'LM Studio est la plus rapide sur Apple Silicon avec la plus grande médiathèque de modèles.',
          'Les cinq sont gratuites, fonctionnent hors ligne après l\'installation, et ne transmettent vos entrées à aucun serveur.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Pour qui ce guide ?',
        content: '**Ce guide s\'adresse aux débutants absolus — des personnes qui n\'ont jamais ouvert un terminal et ne veulent pas le faire.** Si vous pouvez installer Zoom, vous pouvez installer l\'une de ces cinq apps. Choisissez le profil ci-dessous qui vous correspond et allez directement à cette section.',
        rows: [
          { 'Votre situation': 'Je n\'ai jamais rien exécuté de la ligne de commande et je veux un ChatGPT privé', 'Installer': 'GPT4All' },
          { 'Votre situation': 'Je suis préoccupé par la confidentialité EU / RGPD et je veux zéro télémétrie', 'Installer': 'Jan' },
          { 'Votre situation': 'L\'apparence m\'importe. Je veux une interface propre et moderne', 'Installer': 'Msty' },
          { 'Votre situation': 'Je veux surtout discuter avec mes propres PDFs, documents Word ou notes', 'Installer': 'AnythingLLM Desktop' },
          { 'Votre situation': 'J\'ai un MacBook 2024+ et je veux l\'IA locale la plus rapide', 'Installer': 'LM Studio' },
          { 'Votre situation': 'J\'ai seulement 4 GB de RAM ou un Chromebook', 'Installer': 'Aucune — essayez plutôt une app mobile' },
        ],
        columns: ['Votre situation', 'Installer'],
        callouts: [
          {
            type: 'note',
            text: 'Configuration matérielle minimale réaliste : 8 GB de RAM et ~5 GB d\'espace disque libre. Avec moins, passez à une app mobile — voir les lectures complémentaires en bas.',
          },
        ],
      },
      gpt4all: {
        id: 'gpt4all',
        title: '#1 GPT4All — Meilleur pour débutants absolus',
        content: '**GPT4All est l\'app d\'IA locale la moins exigeante en 2026 — un téléchargement de 290 MB qui fait passer un débutant de "je ne sais pas quoi installer" à "je parle à une IA qui tourne sur mon portable" en moins de 10 minutes.** Elle est open source (licence MIT), maintenue par Nomic AI, et a l\'overhead cognitif le plus faible de toutes les apps de cette liste.',
        items: [
          '**Chemin d\'installation :** Télécharger depuis gpt4all.io → lancer l\'installateur → cliquer sur "Llama 3.2 3B Instruct" dans l\'écran modèles suggérés → attendre le téléchargement de 2 GB → commencer à discuter. Total : 4 clics plus un téléchargement de modèle.',
          '**Seuil matériel :** Tourne sans problème sur un portable Intel de 5 ans avec 8 GB de RAM et graphique intégré — pas de GPU nécessaire.',
          '**Clarté UI :** Une fenêtre. Barre latérale gauche liste les discussions. Volet central est la conversation. Pas d\'onglets, pas de dropdowns imbriqués, pas de page "paramètres avancés" qu\'on peut casser accidentellement.',
          '**Messages d\'erreur :** Quand quelque chose s\'échoue (manque de mémoire, fichier modèle corrompu), GPT4All montre une boîte texte simple avec une seule correction suggérée. Pas de stack traces.',
          '**Télémétrie :** Désactivée par défaut. Vous pouvez opter pour partager l\'usage anonyme lors de l\'installation, mais le défaut est non.',
          '**Licence :** MIT — entièrement open source. Le code source est sur GitHub pour quiconque veut l\'auditer.',
          '**Modèle de démarrage recommandé :** Llama 3.2 3B Instruct (Q4_0). Environ 2 GB sur disque, 4–6 GB RAM à l\'exécution, confortablement rapide sur graphique intégré.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Installez ceci si vous êtes : un parent qui veut un ChatGPT privé, un journaliste avec un portable budgétaire, un enseignant qui démontre l\'IA à des étudiants, ou quelqu\'un dont la première réaction à "ouvre le terminal" est "quel terminal ?".',
          },
        ],
      },
      jan: {
        id: 'jan',
        title: '#2 Jan — Meilleur pour confidentialité',
        content: '**Jan est le choix respectueux de la confidentialité — zéro télémétrie, zéro SDK analytics, code open source entièrement vérifiable sous licence AGPL.** Elle ressemble et se sent comme un clone ChatGPT épuré, avec un catalogue curé d\'environ 150 modèles que vous pouvez parcourir sans quitter l\'app. **Pour la conformité :** Jan traite toutes les données localement — zéro transmission à des serveurs externes. Conforme au RGPD pour les utilisateurs qui traitent des données sensibles.',
        items: [
          '**Chemin d\'installation :** Télécharger l\'installateur signé depuis jan.ai → installer → choisir un modèle depuis la bibliothèque in-app (pas de compte Hugging Face, pas de logins) → discuter. Environ 5 clics au total.',
          '**Posture confidentialité :** Zéro télémétrie. Zéro SDK analytics. Zéro "call home". Le code source est publié sur GitHub sous AGPL — les auditeurs indépendants peuvent vérifier que le binaire correspond au source.',
          '**UI :** Interface chat moderne avec thème sombre par défaut et fils de conversation dans la barre latérale. Comparable à ChatGPT en apparence, mais tout tourne sur votre machine.',
          '**Navigateur de modèles :** ~150 modèles curés avec une échappatoire "URL Hugging Face". Moins accablant que LM Studio, plus guidé que GPT4All.',
          '**Outils intégrés :** Extensions optionnelles pour chat avec documents, recherche web, et serveur API compatible OpenAI. Tous optionnels et clairement marqués.',
          '**Seuil matériel :** 8 GB de RAM, CPU moderne (2020+). Apple Silicon et GPUs NVIDIA sont détectés et utilisés automatiquement.',
          '**Modèle de démarrage recommandé :** Phi-4 Mini (~2.6 GB) — petit, rapide, étonnamment bon pour les questions quotidiennes.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Installez ceci si vous êtes : un résident EU inquiet du RGPD, un journaliste travaillant avec des sources, un avocat qui ne peut pas envoyer des brouillons à des APIs cloud, ou quelqu\'un dont le modèle de menace inclut "que transmet cette app?".',
          },
        ],
      },
      msty: {
        id: 'msty',
        title: '#3 Msty — Meilleur pour l\'esthétique',
        content: '**Msty est l\'app d\'IA locale la plus épurée visuellement — une interface split-pane moderne avec comparaison de discussions côte à côte, chat intégré avec documents, et installateur de modèles en un clic.** Elle est gratuite pour usage personnel et tourne sur Windows, macOS et Linux.',
        items: [
          '**Chemin d\'installation :** Télécharger l\'installateur depuis msty.app → installer → choisir "IA locale" sur l\'écran d\'accueil → choisir un modèle recommandé → discuter. Environ 5–6 clics.',
          '**Caractéristique UI remarquable :** Split-chat. Vous pouvez lancer deux modèles côte à côte répondant à la même question et choisir la meilleure réponse. Aucune autre app de cette liste ne propose cela d\'usine.',
          '**Chat avec documents :** Intégré. Faites glisser un PDF, DOCX ou dossier vers la barre latérale et posez des questions dessus. Aucune installation de plugin requise.',
          '**Piles de connaissances :** Vous pouvez épingler des documents à une "pile" pour que chaque discussion de cet espace de travail y ait accès — idéal pour "discute avec mes notes d\'étude".',
          '**Seuil matériel :** 8 GB de RAM, n\'importe quel CPU 2020+. Détecte et utilise Apple Silicon, NVIDIA et accélération AMD automatiquement.',
          '**Licence :** Propriétaire, gratuite pour usage personnel. Des tiers payants existent pour des features cloud-API avancées, mais l\'usage local-seul est gratuit indéfiniment.',
          '**Modèle de démarrage recommandé :** Gemma 3 4B Instruct — ton amical, bon à la synthèse, s\'adapte à la plupart des portables.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Installez ceci si vous êtes : un designer qui trouve les interfaces chat nues laides, un étudiant qui veut comparer deux réponses côte à côte, ou un écrivain qui veut que l\'IA lise votre dossier de notes d\'usine.',
          },
        ],
      },
      anythingllm: {
        id: 'anythingllm',
        title: '#4 AnythingLLM Desktop — Meilleur pour interface familière',
        content: '**AnythingLLM Desktop est structuré autour d\'espaces de travail de documents — la chose la plus proche d\'"ouvre un dossier, pose des questions" sans aucune configuration.** Son interface emprunte la convention arborescence-à-gauche, contenu-à-droite des apps de bureau classiques, ce qui la rend particulièrement confortable pour les utilisateurs qui ont grandi avec Windows.',
        items: [
          '**Chemin d\'installation :** Télécharger depuis anythingllm.com → lancer l\'installateur → au premier lancement, choisir "Utiliser l\'IA locale (pas de clés API)" → choisir un modèle local intégré → glisser vos documents dans un espace de travail. Environ 6 clics.',
          '**Modèle espace de travail :** Chaque espace de travail est son propre dossier de documents et historique de chat. Modèle mental : "ceci est le dossier Impôts 2026, et ceci est le chat qui connaît le dossier Impôts 2026".',
          '**Support documents :** PDF, DOCX, TXT, Markdown, imports de pages web. Faites-les glisser, l\'app les indexe localement, aucun compte embedding-API nécessaire.',
          '**UI :** Layout trois-volets familier (liste espaces / liste documents / chat) rappelant les clients email et les vieilles apps Windows. Faible charge cognitive pour les utilisateurs qui ne se sont jamais adaptés aux UIs "modernes" épurées.',
          '**Confidentialité :** Télémétrie est opt-in. L\'indexation de documents se fait entièrement sur votre machine quand vous choisissez l\'option IA locale.',
          '**Seuil matériel :** 8 GB de RAM, idéalement 16 GB si vos espaces de travail contiennent des centaines de documents.',
          '**Modèle de démarrage recommandé :** Llama 3.2 3B Instruct ou Qwen3 4B — tous les deux gèrent bien le Q&A documents dans cette app.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Installez ceci si vous êtes : un propriétaire de petite entreprise qui veut poser des questions sur un dossier de contrats, un chercheur avec un dossier "Papiers À Lire", un grand-parent qui trouve les UIs modernes déroutantes et préfère quelque chose qui ressemble à Outlook.',
          },
        ],
      },
      lmStudio: {
        id: 'lm-studio',
        title: '#5 LM Studio — Meilleur pour utilisateurs Mac',
        content: '**LM Studio est la plus rapide des cinq sur Apple Silicon et expédie la plus grande médiathèque de modèles in-app, mais elle a la courbe d\'apprentissage la plus raide du groupe.** Pour les utilisateurs Mac non-techniques, elle reste très approchable — mais sur Windows et Linux, GPT4All ou Jan offrent généralement une première expérience plus en douceur.',
        items: [
          '**Chemin d\'installation :** Télécharger depuis lmstudio.ai → lancer l\'installateur → au premier lancement, accepter les paramètres par défaut → utiliser le navigateur de modèles in-app pour choisir un modèle "staff pick" → le charger → discuter. Environ 6 clics plus un téléchargement de modèle.',
          '**Pourquoi elle arrive en premier sur Mac :** LM Studio expédie des kernels Metal Apple Silicon custom-tunés qui surpassent les defaults en amont de 15–30% sur puces M-series. Sur un MacBook Pro 16 GB, elle diffuse des modèles classe 8B à ~38 tokens par seconde.',
          '**Profondeur navigateur modèles :** ~5.000 variantes de modèles tirées en direct de Hugging Face, filtrables par RAM/VRAM, licence, et famille. Utile quand vous surpassez les catalogues curés de Jan ou GPT4All.',
          '**Chat intégré avec documents :** Oui (introduit en 2025), avec une interface drag-and-drop épurée.',
          '**Télémétrie :** Les événements d\'usage anonymes sont envoyés par défaut. Ils sont faciles à désactiver dans Paramètres → Confidentialité. Les conversations et fichiers modèles ne quittent jamais l\'appareil.',
          '**Licence :** Propriétaire (gratuite pour usage personnel et commercial). Si le code open source est non-négociable, choisissez Jan.',
          '**Modèle de démarrage recommandé :** Phi-4 Mini sur Macs 8 GB ; Llama 3.3 8B Q4_K_M sur Macs 16 GB+.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Installez ceci si vous êtes : un utilisateur Mac qui veut l\'IA locale la plus rapide sur Apple Silicon, un écrivain avec un MacBook 16 GB+ qui veut essayer plusieurs modèles, ou quelqu\'un qui trouve les catalogues curés de Jan et GPT4All trop petits.',
          },
        ],
      },
      stumblingBlocks: {
        id: 'stumbling-blocks',
        title: 'Pièges courants (et comment les éviter)',
        content: '**Voici les cinq choses qui trébuchent les utilisateurs non-techniques réels dans les 30 premières minutes.** Chacune est une correction en une ligne une fois que vous savez où regarder.',
        items: [
          '**"Elle dit \'développeur non-identifié\' sur macOS."** → Ouvrez Paramètres Système → Confidentialité & Sécurité, scrollez vers le bas, cliquez "Ouvrir quand même". C\'est normal pour n\'importe quelle app signée mais non-notarisée par Apple.',
          '**"Windows Defender a signalé l\'installateur."** → Les cinq apps sont largement utilisées et sûres. Cliquez "Plus d\'infos" → "Exécuter quand même". Pour une sécurité supplémentaire, vérifiez que l\'URL de téléchargement correspond exactement au site officiel (gpt4all.io, jan.ai, msty.app, anythingllm.com, lmstudio.ai).',
          '**"Le téléchargement du modèle prend une éternité."** → Les modèles sont des fichiers de 1.5–8 GB. Attendez-vous à 5–20 minutes sur une connexion 50 Mbps. S\'il bloque, annulez et reprenez — les cinq apps supportent les téléchargements reprennables.',
          '**"Mon ordinateur est devenu très chaud / le ventilateur a commencé à crier."** → L\'IA locale utilise 100% de votre CPU ou GPU pendant une réponse. C\'est normal et s\'arrête quand la réponse finit. Si ça vous gêne, passez à un modèle plus petit (3B ou 4B au lieu de 7B/8B).',
          '**"Je ne sais pas quel modèle choisir."** → Défaut sur un modèle 3B ou 4B Instruct au premier lancement. Exemples : Llama 3.2 3B Instruct, Phi-4 Mini, Gemma 3 4B. Ils sont petits, rapides, et assez bons pour la plupart des tâches quotidiennes. Passez à 7B ou 8B seulement après avoir décidé que vous utilisez réellement l\'app.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'NE téléchargez PAS les modèles depuis des sites aléatoires ou torrent. Utilisez le navigateur de modèles in-app peu importe quelle app vous avez installée — chaque app de cette liste tire depuis des mirrors Hugging Face officiels.',
          },
        ],
      },
      firstTenMinutes: {
        id: 'first-ten-minutes',
        title: 'Vos 10 premières minutes — Pas à pas',
        content: '**Voici le chemin exact qu\'un utilisateur non-technique peut suivre aujourd\'hui, sur n\'importe quel portable Windows ou Mac moderne, pour passer de zéro à une conversation d\'IA locale fonctionnelle.** Les chiffres entre parenthèses sont des durées réalistes.',
        numberedItems: [
          'Choisissez une app depuis le tableau profils ci-dessus. Si vous ne pouvez pas décider : installez GPT4All. (1 min)',
          'Ouvrez le site officiel (gpt4all.io / jan.ai / msty.app / anythingllm.com / lmstudio.ai) et téléchargez l\'installateur pour votre système d\'exploitation. (1 min)',
          'Lancez l\'installateur. Acceptez les défauts. Aucune de ces cinq apps ne nécessite les droits admin sur Windows ou Mac pour une installation par-utilisateur. (2 min)',
          'Au premier lancement, suivez l\'invite à l\'écran pour télécharger un modèle de démarrage recommandé — choisissez le plus petit modèle "Instruct" offert (paramètres 3B ou 4B). (3–5 min dépendant de votre connexion)',
          'Tapez "Salut, peux-tu écrire un haïku sur un chat ?" dans la boîte chat et appuyez sur Entrée. Vous devriez voir une réponse en 5–10 secondes. (1 min)',
          'Si la réponse fonctionne, vous avez terminé. L\'IA locale tourne maintenant sur votre portable, entièrement hors ligne, et votre conversation n\'a jamais quitté votre machine.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Déconnectez votre portable du Wi-Fi après l\'étape 5 et essayez une autre question. La réponse fonctionne toujours. C\'est le moment où la plupart des utilisateurs non-techniques se rendent compte que l\'IA locale est réelle.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Dois-je connaître la programmation pour utiliser l\'IA locale ?',
            a: 'Non. Aucune des cinq apps de cette liste — GPT4All, Jan, Msty, AnythingLLM Desktop, LM Studio — ne nécessite de code, scripting ou terminal. Si vous pouvez installer une app de bureau normale et cliquer dans un assistant d\'installation, vous avez toutes les compétences nécessaires.',
          },
          {
            q: 'Puis-je installer l\'IA locale sans droits admin sur un portable de travail ?',
            a: 'Parfois. GPT4All et Jan expédient un installateur par-utilisateur qui ne nécessite pas les droits admin sur Windows. LM Studio et Msty ont généralement besoin des droits admin pour l\'installateur standard. Si vous ne pouvez pas installer de logiciel sur votre portable de travail du tout, demandez d\'abord à votre département IT — l\'IA locale est une question de politique réseau, pas technique.',
          },
          {
            q: 'Et si mon ordinateur est trop vieux ?',
            a: 'Un portable 2018+ avec 8 GB de RAM et 5 GB d\'espace libre peut exécuter un modèle paramètres 3B dans l\'une de ces apps à une vitesse utilisable (8–15 tokens par seconde). Les machines plus anciennes ou plus petites devraient essayer une app d\'IA locale mobile à la place — voir les lectures complémentaires sur les apps LLM locales iPhone et Android.',
          },
          {
            q: 'L\'IA locale ralentira-t-elle mon ordinateur ?',
            a: 'Seulement pendant qu\'elle répond activement. L\'IA locale utilise votre CPU ou GPU lourdement pendant les quelques secondes nécessaires pour générer une réponse, puis retombe en veille. Votre ventilateur portable peut tourner, votre batterie se drainera plus vite, et d\'autres apps peuvent se sentir lentes pendant une réponse. Rien n\'est permanent — fermer l\'app libère toutes les ressources.',
          },
          {
            q: 'Puis-je la désinstaller proprement ?',
            a: 'Oui. Les cinq apps se désinstallent via le désinstallateur standard Windows/Mac/Linux. Les modèles vivent dans un dossier séparé (généralement sous Vos Documents ou AppData) — vous pouvez supprimer ce dossier pour récupérer l\'espace disque. Rien ne change votre registre, fichiers système, ou autres applications.',
          },
          {
            q: 'Est-il sûr de télécharger ces apps depuis Internet ?',
            a: 'Oui, si vous utilisez le site officiel. Les cinq sites officiels sont gpt4all.io, jan.ai, msty.app, anythingllm.com et lmstudio.ai. Évitez les téléchargeurs tiers et les torrents. Chacun des cinq installateurs est signé par son éditeur ; macOS et Windows montrent tous les deux le nom de l\'éditeur pendant l\'installation.',
          },
          {
            q: 'Ces apps ont-elles besoin d\'Internet pour fonctionner ?',
            a: 'Seulement pour le tout premier téléchargement de modèle. Après qu\'un modèle soit sur disque, les cinq apps tournent entièrement hors ligne — vous pouvez éteindre le Wi-Fi, monter dans un avion, ou travailler dans un sous-sol, et l\'IA continue de répondre.',
          },
          {
            q: 'Puis-je les utiliser sur un portable de travail ?',
            a: 'Techniquement, oui. Politiquement, demandez d\'abord à votre département IT ou Conformité. L\'IA locale ne transmet vos entrées nulle part, ce qui est souvent une feature pour Conformité — mais installer un logiciel tiers sur un appareil géré est habituellement encore une question de politique. Montrez-leur cet article et les liens source AGPL/MIT pour Jan et GPT4All si une preuve de "zéro donnée ne quitte la machine" aide.',
          },
          {
            q: 'Quelle est la différence entre IA locale et ChatGPT pour un utilisateur non-technique ?',
            a: 'Trois différences : (1) l\'IA locale tourne sur votre portable et ne transmet vos entrées à aucun serveur, (2) l\'IA locale fonctionne hors ligne après le premier téléchargement de modèle, (3) l\'IA locale est gratuite pour toujours — pas d\'abonnement, pas de facture de tokens. Le compromis est vitesse et qualité : un modèle local 3B–8B est sensiblement moins capable que les modèles classe GPT-4o cloud. Pour l\'écriture quotidienne, résumé, brainstorming et Q&A, l\'écart est petit. Pour la réflexion longue et complexe, l\'écart est plus grand.',
          },
          {
            q: 'Ces apps coûtent-elles de l\'argent à long terme ?',
            a: 'Non. Les cinq sont gratuites pour usage personnel indéfiniment. GPT4All (MIT) et Jan (AGPL) sont open source. Msty a un tier payant pour des features cloud-API, mais l\'usage local-seul est gratuit indéfiniment. LM Studio est gratuite pour usage personnel et commercial. AnythingLLM Desktop est gratuite, avec un produit hébergé payant comme offre séparée.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[LM Studio vs Jan vs GPT4All : Quelle app d\'IA locale gagne en 2026](/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026?lang=fr) — quand vous êtes prêt à comparer les trois meilleurs sur vitesse, médiathèque, et confidentialité.',
          '[App d\'IA locale la plus simple pour chaque OS : Windows, Mac, Linux Picks](/power-local-llm/easiest-local-ai-app-windows-mac-linux?lang=fr) — pour les utilisateurs qui veulent seulement la recommandation par-OS.',
          '[Meilleur LLM local pour l\'écriture créative 2026](/power-local-llm/best-local-llm-creative-writing-2026?lang=fr) — cas d\'usage courant non-technique.',
          '[Meilleurs LLMs locaux 2026](/local-llms/best-local-llms-2026?lang=fr) — recommandations de modèles à charger dans l\'une de ces cinq apps.',
          '[Meilleures apps d\'IA locale pour iPhone 2026](/power-local-llm/best-local-llm-apps-iphone-2026?lang=fr) — pour les utilisateurs dont le portable est trop vieux.',
          '[Meilleures apps d\'IA locale pour Android 2026](/power-local-llm/best-local-llm-apps-android-2026?lang=fr) — pour les utilisateurs sur Chromebook ou portable Windows bas de gamme.',
          '[Hub Power Local LLM](/power-local-llm?lang=fr) — bibliothèque de guides complète.',
        ],
      },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Top 5 apps d\'IA locale pour débutants en 2026',
      numberOfItems: 5,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'GPT4All',
          description:
            'Meilleur pour débutants absolus. Plus petite installation (~290 MB). Tourne sur un portable 8 GB RAM de 5 ans sans GPU. Licence MIT open source. Télémétrie désactivée par défaut.',
          url: 'https://gpt4all.io',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Jan',
          description:
            'Meilleur pour débutants soucieux de confidentialité. Entièrement open source sous AGPL. Zéro télémétrie par défaut. Catalogue curé de ~150 modèles.',
          url: 'https://jan.ai',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Msty',
          description:
            'Meilleur pour les utilisateurs qui veulent une UI épurée. Interface split-pane moderne avec comparaison de modèles côte à côte. Chat intégré avec documents et piles de connaissance.',
          url: 'https://msty.app',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'AnythingLLM Desktop',
          description:
            'Meilleur pour les utilisateurs qui veulent une UI Windows familière pour discuter avec des dossiers de documents. Chat basé-workspace PDF/DOCX/Markdown. Licence MIT.',
          url: 'https://anythingllm.com',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'LM Studio',
          description:
            'Meilleur pour les utilisateurs Mac. Kernels Metal Apple Silicon custom-tunés pour 15–30% d\'inférence plus rapide. Plus grande médiathèque de modèles in-app (~5.000 variantes de Hugging Face).',
          url: 'https://lmstudio.ai',
        },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'デスクトップ向け初心者アプリ',
    title: '初心者向けローカルAIアプリ5つ：ターミナルなし、すぐに使える',
    seoTitle: '初心者向けローカルAIアプリ5つ(ターミナル不要、2026)',
    intro: 'GPT4All、Jan、Msty、AnythingLLM Desktop、LM Studioは、技術に詳しくないユーザーが10分以内にインストールして使えるローカルAIアプリ5つです。ターミナルなし、Pythonなし、Dockerなし。それぞれ異なる初心者のペルソナに最適です。技術に詳しくないユーザーをGPT4Allの前に座らせると、4クリックで動作するチャットに到達します。Janはテレメトリーゼロ。Mstyは最も美しいUI。AnythingLLM Desktopはドラッグ・アンド・ドロップでドキュメントチャット。LM Studioは最高のMac体験を提供します。',
    metaDescription: 'ターミナルコマンドなし。Pythonなし。Dockerなし。初心者が10分で導入できるローカルAIアプリ5つ。実際のユーザーでテストしました。',
    twitterDescription: 'ターミナルを開かずに動作するローカルAIアプリ5つ。初心者ペルソナ別に分類。2026年5月にテスト済み。',
    current_models_mentioned: ['Llama 3.2 3B', 'Phi-4 Mini', 'Gemma 3 4B', 'Qwen3 4B'],
    current_hardware_mentioned: ['Apple M5 MacBook Pro', 'Intel Core i5 laptop (8 GB RAM)', 'NVIDIA RTX 3060'],
    audience: '完全初心者と非技術ユーザー — 親、ジャーナリスト、学生、小規模企業の所有者 — ターミナルを開かずに、プライベートなChatGPT代替品を望む人向け。',
    readTime: '12分で読める',
    educationalLevel: 'Beginner',
    primaryTerm: '初心者向けローカルAIアプリ',
    targetKeywords: [
      '初心者向けローカルai',
      'シンプルなローカルaiアプリ',
      'ターミナルなしローカルai',
      '初心者向けローカルllmアプリ',
      '親向けローカルai',
    ],
    leadAnswerBlock: '**ターミナルを使ったことがない場合はGPT4Allをインストールしてください。最も負担が少ないローカルAIアプリで、ダウンロードから最初のチャットまで4クリック、5年前のノートパソコンでも動作します。テレメトリーゼロが必要ならJan。美しいUIが欲しいならMsty。ドキュメントチャットを重視するならAnythingLLM Desktop。Macを使っているならLM Studio。5つすべて無料で、最初のダウンロード後はオフラインで動作し、会話は一度も外部に送信されません。**',
    quickAnswerTop: {
      ja: {
        question: '技術に詳しくないユーザーが最初にインストールすべきローカルAIアプリはどれですか？',
        answer: 'GPT4Allをインストールしてください。最も小さいダウンロード（~290 MB）で、GPUなしの8GB RAMノートパソコンで動作し、4クリックで最初のチャットに到達します。プライバシーが必要、ドキュメントチャット機能が欲しい、美しいUI、またはMacユーザーの場合は、以下のペルソナ別ランキングを参照してください。各ペルソナに異なるおすすめがあります。',
        bullets: [
          'GPT4All — 完全初心者向けベスト。最小インストール。弱いハードウェアで動作。最初のチャットまで4クリック。',
          'Jan — プライバシー重視の初心者向けベスト。テレメトリーゼロ。完全なオープンソース。',
          'Msty — 「綺麗にしたい」向けベスト。モダンなスプリットペインUI。組み込みドキュメントチャット。',
          'AnythingLLM Desktop — Windowsのような使い慣れたUI と、ドラッグ・アンド・ドロップでドキュメント管理ができるUI を望むユーザー向けベスト。',
          'LM Studio — Macユーザー向けベスト。Apple Siliconに最適化。5つの中で最速。',
          '5つすべて、最初のモデルダウンロード後は完全にオフラインで動作します。',
          '5つのいずれも、コマンドライン、Python、Docker、管理者権限、クレジットカードが不要です。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'このガイドは誰向けですか？', anchor: '#who-should-use' },
      { label: '#1 GPT4All — 完全初心者向けベスト', anchor: '#gpt4all' },
      { label: '#2 Jan — プライバシー重視向けベスト', anchor: '#jan' },
      { label: '#3 Msty — 綺麗さ重視向けベスト', anchor: '#msty' },
      { label: '#4 AnythingLLM Desktop — 使い慣れたUI向けベスト', anchor: '#anythingllm' },
      { label: '#5 LM Studio — Macユーザー向けベスト', anchor: '#lm-studio' },
      { label: 'よくあるつまずきと対処法', anchor: '#stumbling-blocks' },
      { label: 'あなたの最初の10分', anchor: '#first-ten-minutes' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連資料', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'GPT4Allは最も導入が簡単です。ダウンロードから最初のチャットまで4クリック。5年前のノートパソコンでも動作します。',
          'Janはテレメトリーゼロで、完全なオープンソースコードです。',
          'Mstyは最も洗練されたUIで、組み込みのPDFチャット機能があります。',
          'AnythingLLM DesktopはWindowsのような使い慣れたUIで、最も「ドキュメントを開いて質問する」に近い体験です。',
          'LM Studioはアップル・シリコン上で最速で、最大のモデルブラウザを搭載しています。',
          '5つすべて無料で、インストール後はオフライン動作。会話は絶対に外部に送信されません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'このガイドは誰向けですか？',
        content: '**このガイドは完全初心者向けです。ターミナルを開いたことがなく、開きたくない人向けです。** Zoomをインストールできれば、これら5つのアプリのいずれでもインストールできます。下のペルソナ別テーブルから自分に合うものを選んで、そのセクションに進んでください。',
        rows: [
          { '状況': 'ターミナルを使ったことがなくて、プライベートなChatGPTが欲しい', '選択肢': 'GPT4All' },
          { '状況': 'EU / GDPRでのプライバシーが心配で、テレメトリーゼロが必要', '選択肢': 'Jan' },
          { '状況': '見た目が大事。きれいでモダンなUIが欲しい', '選択肢': 'Msty' },
          { '状況': '主に自分のPDF、Wordドキュメント、メモとチャットしたい', '選択肢': 'AnythingLLM Desktop' },
          { '状況': '2024年以降のMacBookを持っていて、最速のローカルAIが欲しい', '選択肢': 'LM Studio' },
          { '状況': 'RAMが4GB以下またはChromebookを使っている', '選択肢': 'なし — モバイルアプリを試してください' },
        ],
        columns: ['状況', '選択肢'],
        callouts: [
          {
            type: 'note',
            text: '最小構成：8GB RAM、~5GBのディスク空き容量。それ以下の場合はモバイルアプリに切り替えてください。下の関連資料を参照してください。',
          },
        ],
      },
      gpt4all: {
        id: 'gpt4all',
        title: '#1 GPT4All — 完全初心者向けベスト',
        content: '**GPT4Allは2026年で最も導入が簡単なローカルAIアプリです。290MBのダウンロードで、技術に詳しくないユーザーが「何をインストールすればいいのか分からない」から「ノートパソコンで動作するAIと会話している」まで10分以内に到達できます。** オープンソース（MITライセンス）で、Nomic AIが保守管理しており、このリストのすべてのアプリの中で最も認知負荷が低いです。',
        items: [
          '**インストール手順：** gpt4all.ioからダウンロード → インストーラーを実行 → 「推奨モデル」画面で「Llama 3.2 3B Instruct」をクリック → 2GBダウンロード待機 → チャット開始。合計4クリックと1つのモデルダウンロード。',
          '**ハードウェア要件：** 5年前のIntelノートパソコンで8GB RAM、統合グラフィックスでも問題なく動作。GPU不要。',
          '**UI の明確性：** 1つのウィンドウ。左サイドバーがチャットリスト。中央がメッセージ。タブなし、ネストされたドロップダウンなし、誤削除できる「詳細設定」ページなし。',
          '**エラーメッセージ：** 何か問題が起きた時（メモリ不足、モデルファイル破損）は、シンプルなテキストボックスで1つの修正案を提示。スタックトレースなし。',
          '**テレメトリー：** デフォルトで無効。インストール時に匿名使用データの共有にオプトインできますが、デフォルトはいいえ。',
          '**ライセンス：** MIT — 完全オープンソース。GitHubのソースコードは誰でも監査できます。',
          '**推奨スターターモデル：** Llama 3.2 3B Instruct（Q4_0）。ディスク2GB、実行時4–6GB RAM。統合グラフィックスで快適に動作。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'インストールする対象：親としてプライベートなChatGPTが欲しい、予算ノートパソコンのジャーナリスト、学生にAIをデモする教師、「ターミナルを開いて」と言われて「何のターミナル？」と思う人。',
          },
        ],
      },
      jan: {
        id: 'jan',
        title: '#2 Jan — プライバシー重視向けベスト',
        content: '**Janはプライバシーファースト — テレメトリーゼロ、Analyticsゼロ、完全に監査可能なオープンソースコード（AGPLライセンス）。** ChatGPTのクローンのようにきれいで、約150のモデルで構成されたキュレーションカタログがあり、アプリを離れずに参照できます。',
        items: [
          '**インストール手順：** jan.aiから署名済みインストーラーをダウンロード → インストール → アプリ内ライブラリからモデル選択（Hugging Faceアカウント不要、ログイン不要）→ チャット開始。合計約5クリック。',
          '**プライバシー方針：** テレメトリーなし。Analyticsゼロ。外部サーバーへの通信なし。ソースコードはGitHubでAGPLで公開。独立した監査人がバイナリがソースと一致することを検証できます。',
          '**UI：** ダークモードのモダンなチャットUIで、サイドバーに会話スレッド。外観はChatGPTに匹敵しますが、すべてあなたのマシンで実行。',
          '**モデルブラウザ：** 約150のキュレーションモデル。「Hugging Face URL」インポート機能あり。LM Studioほど多くなく、GPT4Allより詳細。',
          '**組み込みツール：** ドキュメントチャット、Web検索、OpenAI互換API サーバーのオプション拡張。すべてオプションではっきり表示。',
          '**ハードウェア要件：** 8GB RAM、最新（2020年以降）CPU。Apple SiliconとNVIDIA GPUは自動認識・使用。',
          '**推奨スターターモデル：** Phi-4 Mini（~2.6GB）— 小さく、高速。日常的な質問に驚くほど良い。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'インストールする対象：GDPRを心配するEU在住者、ソースを扱うジャーナリスト、ドキュメントをクラウドAPIに送信できない弁護士、「このアプリ何を外部に送信してる？」と気になる人。',
          },
        ],
      },
      msty: {
        id: 'msty',
        title: '#3 Msty — 綺麗さ重視向けベスト',
        content: '**Mstyは最も視覚的に洗練されたローカルAIアプリです。スプリットペインのモダンUIで、並行してチャット比較でき、組み込みドキュメントチャット、ワンクリックモデルインストーラーがあります。** 個人利用は無料。Windows、macOS、Linuxで動作。',
        items: [
          '**インストール手順：** msty.appからインストーラーをダウンロード → インストール → ウェルカム画面で「ローカルAI」選択 → 推奨モデル選択 → チャット開始。約5–6クリック。',
          '**注目すべきUI機能：** スプリットチャット。2つのモデルを並行実行して同じ質問に答えさせ、より良い答えを選べます。このリストでこれを標準搭載しているアプリはMstyだけ。',
          '**ドキュメントチャット：** 組み込み。PDF、DOCX、フォルダをサイドバーにドラッグして質問可能。プラグインインストール不要。',
          '**ナレッジスタック：** ドキュメントを「スタック」に固定できます。そのワークスペースのすべてのチャットがアクセス可能 — 「自分の学習ノートと会話」理想的。',
          '**ハードウェア要件：** 8GB RAM、2020年以降のCPU。Apple Silicon、NVIDIA、AMD加速を自動検出・使用。',
          '**ライセンス：** 独占、個人利用無料。高度なクラウドAPI機能には有料層あり。ただしローカルのみ使用は永遠に無料。',
          '**推奨スターターモデル：** Gemma 3 4B Instruct — 親切なトーン、要約が得意、ほとんどのノートパソコンに対応。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'インストールする対象：むき出しのチャットUIは醜いと思うデザイナー、2つのモデル答えを並べて比較したい学生、自分のメモフォルダをAIに読ませたい執筆者。',
          },
        ],
      },
      anythingllm: {
        id: 'anythingllm',
        title: '#4 AnythingLLM Desktop — 使い慣れたUI向けベスト',
        content: '**AnythingLLM DesktopはドキュメントのワークスペースModel で構成。最も「フォルダを開いて、質問する」に近い体験です。** UIは従来のデスクトップアプリの「左ツリー、右コンテンツ」設計を採用。Windowsで育った人には特に使いやすい。',
        items: [
          '**インストール手順：** anythingllm.comからダウンロード → インストーラー実行 → 初回起動で「ローカルAI使用（APIキー不要）」選択 → 組み込みローカルモデル選択 → ドキュメントをワークスペースにドラッグ。約6クリック。',
          '**ワークスペースモデル：** 各ワークスペースは独自のドキュメントフォルダとチャット履歴。心象：「これは税務2026フォルダで、このチャットは税務2026フォルダについて知っている」。',
          '**ドキュメント対応：** PDF、DOCX、TXT、Markdown、Webページインポート。ドラッグドロップで、アプリがローカルインデックス化。embedding-APIアカウント不要。',
          '**UI：** おなじみの3ペイン（ワークスペースリスト / ドキュメントリスト / チャット）。メールクライアント・Windows古いアプリを思い出させる。「モダン」な最小限UIに適応していないユーザーには負荷が低い。',
          '**プライバシー：** テレメトリーはオプトイン。ローカルAIオプション選択時、ドキュメントインデックスはマシンで完全に実行。',
          '**ハードウェア要件：** 8GB RAM、ワークスペースが数百ドキュメント含む場合は理想的に16GB。',
          '**推奨スターターモデル：** Llama 3.2 3B Instruct または Qwen3 4B — 両方このアプリでドキュメントQ&Aに対応。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'インストールする対象：契約フォルダについて質問したい小企業オーナー、「読むべき論文」フォルダを持つ研究者、モダンUIが混乱するおばあちゃんでOutlookっぽいものが好きな人。',
          },
        ],
      },
      lmStudio: {
        id: 'lm-studio',
        title: '#5 LM Studio — Macユーザー向けベスト',
        content: '**LM Studioはアップル・シリコン上で5つの中で最速で、最大のアプリ内モデルブラウザを搭載していますが、グループで最も陡峻な学習曲線があります。** 技術に詳しくないMacユーザーでも十分アクセスしやすいですが、Windows・Linuxではしばしばより単純な第一体験を提供します。',
        items: [
          '**インストール手順：** lmstudio.aiからダウンロード → インストーラー実行 → 初回起動でデフォルト設定受け入れ → アプリ内モデルブラウザで「staff pick」モデル選択 → 読み込み → チャット。約6クリック及び1つモデルダウンロード。',
          '**Macで第1位の理由：** LM Studioはカスタムチューンされたアップル・シリコンMetalカーネルを搭載。上流デフォルトをM シリーズで15–30%超えます。16GB MacBook Proで約38トークン/秒で8Bモデルをストリーム。',
          '**モデルブラウザ深さ：** Hugging Faceから約5,000モデルバリアント。RAM/VRAM、ライセンス、ファミリーでフィルタ可能。Jan・GPT4Allのキュレーションカタログを超えたいときに有用。',
          '**組み込みドキュメントチャット：** あり（2025年導入）。きれいなドラッグ・アンド・ドロップインターフェース。',
          '**テレメトリー：** 匿名使用イベントはデフォルトで送信。設定 → プライバシーで簡単に無効化可。会話・モデルファイルはデバイスを離れることなし。',
          '**ライセンス：** 独占（個人・商用利用無料）。オープンソースコードが必須なら、Janを選んでください。',
          '**推奨スターターモデル：** 8GB Macで Phi-4 Mini; 16GB+ Macで Llama 3.3 8B Q4_K_M。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'インストールする対象：アップル・シリコンで最速ローカルAIが欲しいMacユーザー、複数モデルを試したい16GB+ MacBook執筆者、Jan・GPT4Allのキュレーションカタログが小さすぎると思う人。',
          },
        ],
      },
      stumblingBlocks: {
        id: 'stumbling-blocks',
        title: 'よくあるつまずきと対処法',
        content: '**これは最初の30分間、実際の非技術ユーザーをつまずかせる5つのことです。** 一度どこを見るか分かれば、それぞれは1行の修正です。',
        items: [
          '**「macOSで\'unidentified developer\'と言われました。」** → システム設定を開く → プライバシーとセキュリティ → 下部にスクロール → 「とにかく開く」をクリック。これはApple公証ではない署名済みアプリとしては正常。',
          '**「Windows Defenderがインストーラーをフラグしました。」** → 5つのアプリはすべて広く使用され安全です。「詳細」をクリック → 「実行」。追加安全確認：ダウンロードURLが公式サイトと正確に一致（gpt4all.io、jan.ai、msty.app、anythingllm.com、lmstudio.ai）。',
          '**「モデルダウンロードが永遠に長い。」** → モデルは1.5–8GBファイル。50Mbps接続で5–20分期待。止まったらキャンセル・再開 — 5つすべて再開可能ダウンロード。',
          '**「コンピュータが熱くなった / ファンが叫んだ。」** → ローカルAIは回答中にCPU・GPU100%使用。正常で、回答後に停止。気になる場合は小さいモデル（7B/8B 代わりに 3B/4B）。',
          '**「どのモデルを選ぶか分かりません。」** → 初回インストールで3B・4B Instruct標準。例：Llama 3.2 3B Instruct、Phi-4 Mini、Gemma 3 4B。小さく速く日常タスク十分。7B/8Bにアップグレードはアプリを実際に使うと決めた後。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'ランダムウェブサイト、Torrentからモデルダウンロードしないでください。使用しているアプリのアプリ内モデルブラウザを使用してください。このリストのすべてのアプリは公式Hugging Faceミラーから取得。',
          },
        ],
      },
      firstTenMinutes: {
        id: 'first-ten-minutes',
        title: 'あなたの最初の10分 — ステップバイステップ',
        content: '**これは非技術ユーザーが今日、最新のWindows・Macノートパソコンで「ゼロからローカルAI会話」に到達するための正確なパスです。** 括弧の数字は現実的な時間。',
        numberedItems: [
          '上記のペルソナテーブルから1つアプリを選んでください。決められないなら：GPT4Allをインストール。（1分）',
          '公式サイト（gpt4all.io / jan.ai / msty.app / anythingllm.com / lmstudio.ai）を開いて、あなたのOSのインストーラーをダウンロード。（1分）',
          'インストーラーを実行。デフォルト受け入れ。これら5つのアプリはWindows・Macで管理者権限ユーザーインストール不要。（2分）',
          '初回起動時、オンスクリーンプロンプト従って推奨スターターモデルをダウンロード。提供される最小「Instruct」モデル選択（3B or 4Bパラメータ）。（接続速度で3–5分）',
          'チャットボックスに「こんにちは、猫についてのハイクを書いてもらえますか？」と入力。Enterを押す。5–10秒で応答が見えるはず。（1分）',
          '応答が機能すれば完了。ローカルAIはノートパソコンで実行開始。完全オフライン、会話があなたのマシンを離れることなし。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ステップ5後ノートパソコンをWi-Fiから外してもう一つ質問試す。応答はまだ機能。ここが大多数の非技術ユーザーがローカルAIが実在すると実感する時点。',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'ローカルAIを使うのにコーディングを知る必要がありますか？',
            a: 'いいえ。このリストの5つのアプリ — GPT4All、Jan、Msty、AnythingLLM Desktop、LM Studio — は一つもコード、スクリプト、ターミナル不要。通常のデスクトップアプリをインストール、セットアップウィザードをクリックできれば、必要なスキルがすべて。',
          },
          {
            q: '職場ノートパソコンに管理者権限なしでインストール可能？',
            a: 'たまに。GPT4AllとJanはWindows上ユーザーごとインストーラーを出し、管理者権限不要。LM StudioとMstyはしばしば標準インストーラーに管理者権限が必要。職場ノートパソコンに一切ソフトウェアインストール不可なら、先にIT部門に質問 — ローカルAIはネットワーク方針質問、技術でなく。',
          },
          {
            q: 'パソコンが古すぎたら？',
            a: '2018年以降のノートパソコンで8GB RAMと5GB空きディスク、3Bパラメータモデルをどのアプリでも使える速度で実行（8–15トークン/秒）。もっと古い・小さいマシンはモバイルローカルAIアプリ試してください — 下部関連資料のiPhone・Androidローカルアプリリンク参照。',
          },
          {
            q: 'ローカルAIでコンピュータ遅くなる？',
            a: '応答中だけ。ローカルAIは回答生成の数秒でCPU・GPU100%使用。その後アイドルに戻す。ノートパソコンファン回るかもしれず、バッテリー速く減るかもしれず、他アプリ遅く感じるかもしれません。永続的でなく — アプリ閉じるとすべてのリソース解放。',
          },
          {
            q: 'きれいにアンインストール可能？',
            a: 'はい。5つすべては標準Windows/Mac/Linuxアンインストーラーでアンインストール。モデルは別フォルダに生存（ドキュメント・AppDataの下、通常）— そのフォルダ削除でディスク空き回復。レジストリ、システムファイル、他アプリ変更なし。',
          },
          {
            q: 'インターネットからこれらアプリダウンロード安全？',
            a: '公式サイト使えば安全。5つの公式サイト：gpt4all.io、jan.ai、msty.app、anythingllm.com、lmstudio.ai。サードパーティダウンローダー・Torrent避ける。5つのインストーラーはそれぞれ出版元で署名。macOS・Windows両方がインストール中に出版元名表示。',
          },
          {
            q: 'これらアプリが動作するのにインターネット必要？',
            a: '最初のモデルダウンロードだけ。ディスクにモデルがあれば、5つすべて完全オフライン — Wi-Fi切る、飛行機乗る、地下で作業する、AIは答え続ける。',
          },
          {
            q: '職場ノートパソコンで使える？',
            a: '技術的にはい。政治的には先にIT・コンプライアンス質問。ローカルAIはプロンプトをどこにも送信しないため、コンプライアンスにとってしばしば機能。ただし、管理デバイス上にサードパーティソフトウェアインストール通常は方針質問のまま。この記事とJan・GPT4AllのAGPL/MITソースリンクを示す。「マシン外データなし」証拠が役に立つ可能性。',
          },
          {
            q: '非技術ユーザーにはローカルAI と ChatGPTの違いは？',
            a: '3つの違い：(1) ローカルAIはノートパソコンで実行。プロンプトをサーバーに送信しない。(2) ローカルAIはモデル初回ダウンロード後オフラインで機能。(3) ローカルAIは永遠無料 — 購読なし、トークン料金なし。トレードオフは速さ・質 — 3B–8B ローカルモデルはGPT-4oクラスクラウドモデルより意味のある段階で能力が低い。日常執筆、要約、ブレインストーム、Q&Aでギャップ小さい。長く複雑な推論ではギャップ大きい。',
          },
          {
            q: 'これらアプリは長期的にお金がかかる？',
            a: 'いいえ。5つすべて個人利用は永遠無料。GPT4All（MIT）とJan（AGPL）はオープンソース。Mstyは高度クラウドAPI機能の有料層あり。ローカルのみ使用は永遠無料。LM Studioは個人・商用利用無料。AnythingLLM Desktopは無料、有料ホストされた製品は別。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[LM Studio vs Jan vs GPT4All : 2026年どのローカルAIアプリが勝つ？](/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026?lang=ja) — トップ3を速さ、モデルライブラリ、プライバシーで比較する準備ができたら。',
          '[OSごと最も簡単なローカルAIアプリ：Windows、Mac、Linux選択](/power-local-llm/easiest-local-ai-app-windows-mac-linux?lang=ja) — OS別推奨だけが欲しいユーザー向け。',
          '[2026年のクリエイティブライティング最高ローカルLLM](/power-local-llm/best-local-llm-creative-writing-2026?lang=ja) — 一般的な非技術的使用例。',
          '[2026年最高ローカルLLM](/local-llms/best-local-llms-2026?lang=ja) — これら5つのアプリのいずれかに読み込むモデル推奨。',
          '[2026年iPhone向け最高ローカルAIアプリ](/power-local-llm/best-local-llm-apps-iphone-2026?lang=ja) — ノートパソコンが古すぎるユーザー向け。',
          '[2026年Android向け最高ローカルAIアプリ](/power-local-llm/best-local-llm-apps-android-2026?lang=ja) — ChromebookやLow-Spec Windowsノートパソコンユーザー向け。',
          '[Power Local LLMハブ](/power-local-llm?lang=ja) — 完全ガイドライブラリ。',
        ],
      },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '2026年の初心者向けトップ5ローカルAIアプリ',
      numberOfItems: 5,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'GPT4All',
          description:
            '完全初心者向けベスト。最小インストール（~290 MB）。5年前の8GB RAMノートパソコンでGPUなしで動作。MITライセンスオープンソース。テレメトリーデフォルト無効。',
          url: 'https://gpt4all.io',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Jan',
          description:
            'プライバシー重視初心者向けベスト。AGPLの下で完全オープンソース。デフォルトゼロテレメトリー。約150モデルのキュレーションカタログ。',
          url: 'https://jan.ai',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Msty',
          description:
            'ポーランド向けUIが欲しいユーザー向けベスト。モダンスプリットペインインターフェース。並行モデル比較。ナレッジスタック付きドキュメントチャット。',
          url: 'https://msty.app',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'AnythingLLM Desktop',
          description:
            'ドキュメントフォルダとのチャット向けベスト。Windows風3ペインUI。ワークスペースベースPDF/DOCX/Markdownチャット。MITライセンス。',
          url: 'https://anythingllm.com',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'LM Studio',
          description:
            'Macユーザー向けベスト。Apple Siliconに最適化されたカスタムメタルカーネル。15–30%高速推論。最大のアプリ内モデルブラウザ（HuggingFaceから約5,000種類）。',
          url: 'https://lmstudio.ai',
        },
      ],
    },
  },
}
