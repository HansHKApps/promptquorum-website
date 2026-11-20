// Nanobrowser Review: open-source AI browser agent extension for Chrome and Edge
// Slug: nanobrowser-review
// Companion to: browser-use-review, browseros-review, lastbrowser-review, local-operator-review
// Sources (all read 2026-11-20, no hands-on testing): nanobrowser.ai (home, docs/models, docs/local-models, docs/permissions, docs/privacy, changelog),
// GitHub repository, README, PRIVACY.md, release v0.3.0, GitHub API, Chrome Web Store listing. The request came from the site owner, not from the maker.
// Last upstream update 2026-11-17 (GitHub last push; latest release v0.3.0 on 2026-10-15) => no stale warning.
// Theme: 'Local AI Agents & Tool Use' (same theme as the other agent reviews).
// HQ country not stated in the privacy policy or website (only a contact address) => no flag on the tile.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-20',
      dateModified: '2026-11-20',
      next_refresh_due: '2027-05-20',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/nanobrowser-review-hero-en.webp',
      title: 'Nanobrowser Review: Free Open-Source AI Browser Agent for Chrome and Edge',
      seoTitle: 'Nanobrowser Review: Free AI Browser Agent for Chrome',
      intro:
        'Nanobrowser is a free, open-source browser extension for Chrome and Edge in which an AI agent works in a side panel: you describe a task, and it reads pages, clicks, types and switches tabs for you. It uses the AI model you connect, either a cloud provider or a local model through Ollama or LM Studio. This review is based on the project\'s website, documentation, GitHub repository and privacy policy, read on 20 November 2026; PromptQuorum has not tested the extension.',
      metaDescription:
        'Nanobrowser is a free, open-source AI browser agent for Chrome and Edge that works with cloud models or local Ollama. Privacy, modes, limits; untested.',
      twitterDescription:
        'Nanobrowser review: a free, open-source AI agent in the Chrome and Edge side panel. What it does, where page data goes, and what we could not verify.',
      audience:
        'People who want an AI agent inside their own Chrome or Edge, Ollama and LM Studio users, and readers comparing browser agents',
      readTime: '6 min read',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Nanobrowser',
      targetKeywords: [
        'Nanobrowser review',
        'Nanobrowser AI browser agent',
        'Nanobrowser Ollama',
        'Nanobrowser privacy',
        'Nanobrowser Chrome extension',
        'Nanobrowser alternatives',
      ],
      current_models_mentioned: ['Ollama', 'LM Studio'],
      leadAnswerBlock:
        '**Nanobrowser (version 0.3.0, released on 15 October 2026) is a free, Apache-2.0 browser extension that runs an AI agent in the side panel of Chrome or Edge, using the cloud or local model you connect.** Page content goes to that model provider; per the docs, a local Ollama or LM Studio model keeps it on your computer. Every statement here comes from the project\'s own website, docs and policy; PromptQuorum has not tested it.',
      quickAnswerTop: {
        en: {
          question: 'Is Nanobrowser free, and can it use a local model?',
          answer:
            'The extension is free with no account, and you pay only your model provider. It can use a local Ollama or LM Studio model, but the docs say the model must support tool calling and that local models work best on short, clear tasks.',
          bullets: [
            'Install it from the Chrome Web Store in one click; an Edge Add-ons listing is also linked.',
            'Ask mode (the default) asks before submitting, sending, deleting or uploading; Auto mode does not.',
            'Local setup: allow the extension in Ollama with OLLAMA_ORIGINS, or turn on CORS in LM Studio.',
            'Anonymous usage counts are on by default and can be switched off in Settings.',
          ],
          updatedDate: '2026-11',
        },
      },
      toc: [
        { label: 'TL;DR', anchor: 'tldr' },
        { label: 'Overview', anchor: 'overview' },
        { label: 'How to Get It', anchor: 'get-it' },
        { label: 'Features', anchor: 'features' },
        { label: 'Privacy and Data Flow', anchor: 'privacy' },
        { label: 'Pricing and License', anchor: 'pricing' },
        { label: 'Who Should Use It', anchor: 'who-should-use' },
        { label: 'Limits and What We Could Not Verify', anchor: 'who-should-not-use' },
        { label: 'Alternatives', anchor: 'alternatives' },
        { label: 'FAQ', anchor: 'faq' },
        { label: 'Verdict', anchor: 'verdict' },
        { label: 'Sources', anchor: 'sources' },
        { label: 'Related Reading', anchor: 'related-reading' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          title: 'TL;DR',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'Nanobrowser is a free, open-source Chrome and Edge extension in which an AI agent reads pages, clicks and types in your own signed-in browser, using a cloud or local model you connect.' },
            { type: 'plain-terms', text: 'You type a task in the side panel, the agent works through your open tabs and asks before sensitive steps such as submitting or deleting. The model reads the pages, so page content goes to whichever model you choose.' },
          ],
          items: [
            'Maintenance: the repository was last pushed to on 17 November 2026 and the latest release, 0.3.0, is from 15 October 2026, so no stale-project warning applies.',
            'License: Apache-2.0; the extension is free and you pay your model provider directly.',
            'Rebuild: per the changelog, version 0.3.0 replaced the earlier planner and navigator with a single agent.',
            'Models: it needs a model with tool calling; cloud options include Anthropic, OpenAI, Google Gemini, AWS Bedrock, OpenRouter, xAI, DeepSeek and Mistral, or any OpenAI-compatible endpoint.',
            'Safety: the docs warn that a web page can trick the agent into opening an address that carries your data elsewhere, and advise watching its actions.',
          ],
          callouts: [
            { type: 'note', text: 'This review rests on the project\'s website, documentation, GitHub repository and privacy policy, read on 20 November 2026. PromptQuorum has not installed or run Nanobrowser, so success rates, speed and cost per task are not assessed. An agent that clicks and types in your signed-in browser can take actions you did not intend. This is general information, not security advice.' },
          ],
        },
        overview: {
          id: 'overview',
          title: 'Overview',
          content: [
            '**Nanobrowser is an AI agent that works inside your own, signed-in browser rather than in a separate one.** Per the README and website, you describe a task in the side panel (opened from the toolbar icon or with Alt+Shift+N), and the agent reads pages, clicks, types and moves between tabs, with several tasks able to run in separate tab groups.',
            'The README lists Chrome and Edge as supported and Firefox, Safari and other Chromium browsers (Opera, Arc, Brave) as untested. The code is on GitHub under the Apache License 2.0; the repository was created on 31 December 2024, was last pushed to on 17 November 2026, and the latest release, 0.3.0, is from 15 October 2026, so development is active.',
            'The changelog says version 0.3.0 rebuilt the extension around one agent in the side panel, and version 0.2.0 moved model calls from LangChain to the Vercel AI SDK and removed the Groq, Cerebras and Llama API providers.',
          ],
        },
        getIt: {
          id: 'get-it',
          title: 'How to Get It',
          content: [
            '**Nanobrowser installs like any browser extension: add it from the Chrome Web Store (an Edge Add-ons listing is also linked), then connect a model.** No terminal is needed unless you use a local model or build from source.',
          ],
          columns: ['Route', 'How to get it'],
          rows: [
            { 'Route': 'Chrome Web Store', 'How to get it': '[Nanobrowser listing](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) (free)' },
            { 'Route': 'Microsoft Edge', 'How to get it': '[Edge Add-ons listing](https://microsoftedge.microsoft.com/addons/detail/nanobrowser-ai-web-agent/ajdioenfpgabnjlclgckbbnjjhdnjkhn)' },
            { 'Route': 'Website', 'How to get it': '[nanobrowser.ai](https://nanobrowser.ai)' },
            { 'Route': 'Source code', 'How to get it': '[GitHub](https://github.com/nanobrowser/nanobrowser) (Apache-2.0)' },
            { 'Route': 'Privacy policy', 'How to get it': '[nanobrowser.ai/docs/privacy](https://nanobrowser.ai/docs/privacy)' },
            { 'Route': 'Build from source', 'How to get it': 'Node.js 24 LTS and pnpm 10' },
          ],
          codeBlock: '# Optional: build from source (Node.js 24 LTS, pnpm 10)\ncorepack enable\npnpm install\npnpm build\n\n# Local Ollama started by hand: allow the extension\nOLLAMA_ORIGINS="chrome-extension://*" ollama serve',
          codeLanguage: 'bash',
          note: 'Version reviewed: 0.3.0, released on 15 October 2026 per GitHub Releases; the Chrome Web Store listing shows 0.3.0, updated on 16 October 2026. Last upstream update (push) on 17 November 2026. The GitHub release only ships nanobrowser-0.3.0.zip, an unpacked build for developer mode.',
        },
        features: {
          id: 'features',
          title: 'Features',
          content: [
            '**Everything below is a project statement from the README or documentation; none of it was tested by PromptQuorum.**',
          ],
          items: [
            '**Side-panel chat with parallel tasks.** Several tasks can run in separate tab groups, with image, file and screenshot attachments and results saved to Downloads as CSV or Markdown.',
            '**Ask and Auto modes.** Ask mode (the default) shows an approval card before submitting, sending, deleting or uploading; Auto mode skips it. Payments, passwords, codes and access grants always go to you, per the docs.',
            '**Per-site rules.** Each site can be set to Allow, Ask or Block; a site rule overrides the mode and matches the exact host.',
            '**Model choice per chat.** You pick the model and reasoning effort for each chat, and a Test models button in Settings marks models that lack tool calling.',
            '**Vision when the model supports it.** With a vision model the agent can take screenshots and see attached images; without one it reads pages as text.',
            '**Shortcuts, voice and memory.** Saved prompt shortcuts triggered with a slash, voice input, persistent memory and automatic summarising of long chats.',
            '**Chat history with export.** Chats can be exported to Markdown, and the README lists English, Simplified Chinese and Traditional Chinese interfaces.',
            '**Element IDs.** The README says a control layer with no AI model in it gives each page element a stable ID, performs real browser input and checks state before acting, using Chrome\'s debugger API and Puppeteer.',
          ],
        },
        privacy: {
          id: 'privacy',
          title: 'Privacy and Data Flow',
          content: [
            '**Per its privacy policy, Nanobrowser has no account and no Nanobrowser server that receives chats or pages: your messages, attached files, the content of the tabs the agent works in and, for vision models, screenshots go from your browser to the model provider you choose.** With a local Ollama or LM Studio model, the policy says that data stays on your computer. It adds that password, card and one-time-code field values are withheld when recognised, and that logins and cookies stay in the browser.',
            'Two more flows come from the privacy policy. Voice input, if enabled, sends audio to the chosen OpenAI or Google voice model, and the policy says recordings are not kept. Two telemetry switches, both on by default, send an anonymous daily count and daily usage totals (task counts, tools used, error codes) to PostHog in the United States, kept for one year; the policy says this never includes pages, sites visited, messages, files or keys, and both can be turned off in Settings, Data. Uninstalling opens an optional Google Form survey.',
            'The permissions docs add three cautions: opening pages never needs approval, so a page could trick the agent into opening an address that carries your data elsewhere; typing is not gated, so a page can observe what the agent types; and prompt injection is a risk, so watch the agent and use Stop. The policy texts read are dated 13 October 2026 (GitHub) and 18 October 2026 (website); PromptQuorum has not inspected network traffic.',
          ],
          callouts: [
            { type: 'note', text: 'These are the project\'s own statements, not audit results. For work or customer accounts, read the policy first, use a separate browser profile and keep Ask mode on. Automating a website can breach its terms of service, so check them before pointing an agent at a site. This is general information, not security or legal advice.' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: 'Pricing and License',
          content: [
            '**The extension is free under the Apache License 2.0; you pay your model provider for what you use.** The docs say long tasks and text-heavy pages cost more, and that a local model costs nothing to run.',
            'The website and the Chrome Web Store listing show no sign-up, subscription or paid tier. API keys are stored in the browser and sent only to their own provider, per the docs.',
          ],
          columns: ['Item', 'Cost', 'Notes'],
          rows: [
            { 'Item': 'Extension', 'Cost': 'Free', 'Notes': 'Apache-2.0, no account' },
            { 'Item': 'Cloud model', 'Cost': 'Provider rate', 'Notes': 'Billed by your provider' },
            { 'Item': 'Local model', 'Cost': 'Free to run', 'Notes': 'Your hardware, 16k context+' },
          ],
          note: 'Costs depend on the provider and the task. PromptQuorum did not measure cost per task.',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Who Should Use It',
          items: [
            'People who want an AI agent inside their signed-in Chrome or Edge, with a visible approval step before sensitive actions.',
            'Ollama or LM Studio users who want to try a browser agent with a local model and accept that the docs advise short, clear tasks.',
            'Developers who want an Apache-2.0 codebase they can build from source with Node.js 24 LTS and pnpm 10.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Limits and What We Could Not Verify',
          content: [
            '**Nanobrowser is a poor fit if page content must not reach a third-party model, or if a missed action could cost money or data.** Several points remain unverified.',
          ],
          items: [
            'Not a fit: tasks where an unnoticed click does harm; the docs say icon-only buttons, auto-saving switches and drag-and-drop actions can be missed and then run without approval, even in Ask mode.',
            'Not a fit: Firefox, Safari or other Chromium browsers, which the README lists as untested.',
            'Unverified: task success rates, speed and cost per task; the sources give no benchmark and PromptQuorum did not run one.',
            'Unverified: how well local models drive the agent; the docs recommend a model for local use but give no quality figures.',
            'Unverified: the legal entity behind the project; the privacy policy names only "the Nanobrowser team" with a contact address, and gives no company name, address or country.',
            'Unverified: whether the privacy statements hold in practice; no independent audit was seen.',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: 'Alternatives',
          content: [
            '**Nanobrowser is a browser extension; the alternatives in the same directory segment are a Python library, whole AI browsers and a desktop agent.** PromptQuorum has not compared them hands-on.',
          ],
          columns: ['Tool', 'Noted in sources'],
          rows: [
            { 'Tool': 'Nanobrowser', 'Noted in sources': 'Chrome and Edge extension; Apache-2.0; cloud or local models' },
            { 'Tool': '[Browser Use](/power-local-llm/browser-use-review)', 'Noted in sources': 'Python library and CLI for scripting a browser agent; MIT; optional paid cloud' },
            { 'Tool': '[BrowserOS](/power-local-llm/browseros-review)', 'Noted in sources': 'AI browser (Chromium fork) for Mac, Windows and Linux; AGPL-3.0' },
            { 'Tool': '[LastBrowser](/power-local-llm/lastbrowser-review)', 'Noted in sources': 'Desktop browser for Windows with a built-in Sidekick AI sidebar' },
            { 'Tool': '[Local Operator](/power-local-llm/local-operator-review)', 'Noted in sources': 'Desktop agent app that writes and runs code on your computer' },
          ],
        },
        faq: {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            {
              q: 'Does Nanobrowser work in Firefox or Brave?',
              a: 'The README lists only Chrome and Edge as supported and says Firefox, Safari and other Chromium browsers such as Opera, Arc and Brave are untested. PromptQuorum has not tried them.',
            },
            {
              q: 'How do I connect Ollama or LM Studio?',
              a: 'Per the docs, set OLLAMA_ORIGINS to chrome-extension://* and restart Ollama, then enter http://localhost:11434 as the server address and click Test models. LM Studio needs Enable CORS in its Developer settings, with the server on port 1234.',
            },
            {
              q: 'Can the agent act without asking me?',
              a: 'In Auto mode it submits, sends, deletes and uploads without asking, but payments, passwords, card numbers, one-time codes and access grants still go to you. A site rule set to Ask forces a prompt even in Auto mode, and Block stops the agent from touching the site.',
            },
            {
              q: 'What changed in version 0.3.0?',
              a: 'Per the changelog, a single agent replaced the planner and navigator, Ask mode became the default, and every page element got an ID tied to that exact element, so clicks target the intended one.',
            },
            {
              q: 'Can several tasks run at once with a local model?',
              a: 'They can start in separate tab groups, but the docs say each Ollama or LM Studio server handles one request at a time, so local tasks queue; servers added through the OpenAI-compatible provider, such as llama.cpp or vLLM, do not queue.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Verdict',
          content: [
            '**Nanobrowser is worth trying if you want an open-source AI agent inside Chrome or Edge, with approval steps and the option of a local model, and you accept that nothing was tested here.**',
            'It is Apache-2.0, actively developed (last push on 17 November 2026, release 0.3.0 on 15 October 2026) and free apart from your model provider\'s charges. The trade-offs: page content goes to the model provider you pick, the docs say some actions can be missed and run unapproved, local models work best on simple tasks, and success rates and speed rest on no data we could check. PromptQuorum has not tested it; start with a separate browser profile and low-risk tasks.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Nanobrowser website](https://nanobrowser.ai) — product description and install links, checked 20 November 2026.',
            '[Models documentation](https://nanobrowser.ai/docs/models) — providers, tool calling and pricing, checked 20 November 2026.',
            '[Local models documentation](https://nanobrowser.ai/docs/local-models) — Ollama and LM Studio setup, checked 20 November 2026.',
            '[Permissions documentation](https://nanobrowser.ai/docs/permissions) — Ask and Auto modes, site rules and warnings, checked 20 November 2026.',
            '[Privacy page](https://nanobrowser.ai/docs/privacy) — data flows and telemetry, dated 18 October 2026, checked 20 November 2026.',
            '[PRIVACY.md](https://github.com/nanobrowser/nanobrowser/blob/master/PRIVACY.md) — privacy policy on GitHub, dated 13 October 2026, checked 20 November 2026.',
            '[Changelog](https://nanobrowser.ai/changelog) — versions 0.1.9 to 0.3.0, checked 20 November 2026.',
            '[GitHub repository and README](https://github.com/nanobrowser/nanobrowser) — license, install steps and last push, checked 20 November 2026.',
            '[Release 0.3.0](https://github.com/nanobrowser/nanobrowser/releases/tag/v0.3.0) — latest release, published 15 October 2026.',
            '[Chrome Web Store listing](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) — version 0.3.0, updated 16 October 2026, free, checked 20 November 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Browser Use Review](/power-local-llm/browser-use-review) — an open-source Python library and CLI for browser agents.',
            '[BrowserOS Review](/power-local-llm/browseros-review) — an AI browser with a built-in assistant.',
            '[LastBrowser Review](/power-local-llm/lastbrowser-review) — a desktop browser with an AI sidebar.',
            '[Local Operator Review](/power-local-llm/local-operator-review) — a desktop agent app that runs code on your computer.',
            '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
          ],
        },
      },
    },
    de: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-20',
      dateModified: '2026-11-20',
      next_refresh_due: '2027-05-20',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/nanobrowser-review-hero-de.webp',
      title: 'Nanobrowser im Test: Kostenloser Open-Source-KI-Browser-Agent für Chrome und Edge',
      seoTitle: 'Nanobrowser Test: Kostenloser KI-Browser-Agent für Chrome',
      intro:
        'Nanobrowser ist eine kostenlose, quelloffene Browser-Erweiterung für Chrome und Edge, in der ein KI-Agent in einer Seitenleiste arbeitet: Sie beschreiben eine Aufgabe, und er liest Seiten, klickt, tippt und wechselt Tabs für Sie. Er nutzt das KI-Modell, das Sie anbinden, entweder einen Cloud-Anbieter oder ein lokales Modell über Ollama oder LM Studio. Dieser Test beruht auf Website, Dokumentation, GitHub-Repository und Datenschutzerklärung des Projekts, gelesen am 20. November 2026; PromptQuorum hat die Erweiterung nicht getestet.',
      metaDescription:
        'Nanobrowser ist ein kostenloser, quelloffener KI-Browser-Agent für Chrome und Edge mit Cloud-Modellen oder lokalem Ollama. Datenschutz, Modi, Grenzen.',
      twitterDescription:
        'Nanobrowser im Test: ein kostenloser Open-Source-KI-Agent in der Seitenleiste von Chrome und Edge. Funktionen, Datenfluss und was wir nicht prüfen konnten.',
      audience:
        'Menschen, die einen KI-Agenten im eigenen Chrome oder Edge nutzen möchten, Nutzer von Ollama und LM Studio sowie Leser, die Browser-Agenten vergleichen',
      readTime: '6 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Nanobrowser',
      targetKeywords: [
        'Nanobrowser Test',
        'Nanobrowser KI-Browser-Agent',
        'Nanobrowser Ollama',
        'Nanobrowser Datenschutz',
        'Nanobrowser Chrome-Erweiterung',
        'Nanobrowser Alternativen',
      ],
      current_models_mentioned: ['Ollama', 'LM Studio'],
      leadAnswerBlock:
        '**Nanobrowser (Version 0.3.0, veröffentlicht am 15. Oktober 2026) ist eine kostenlose Browser-Erweiterung unter Apache-2.0, die einen KI-Agenten in der Seitenleiste von Chrome oder Edge ausführt und das von Ihnen angebundene Cloud- oder lokale Modell nutzt.** Seiteninhalte gehen an diesen Modellanbieter; laut Dokumentation bleiben sie mit einem lokalen Ollama- oder LM-Studio-Modell auf Ihrem Rechner. Alle Angaben stammen von Website, Dokumentation und Datenschutzerklärung des Projekts; PromptQuorum hat die Erweiterung nicht getestet.',
      quickAnswerTop: {
        de: {
          question: 'Ist Nanobrowser kostenlos, und kann es ein lokales Modell nutzen?',
          answer:
            'Die Erweiterung ist kostenlos und braucht kein Konto; Sie zahlen nur Ihren Modellanbieter. Sie kann ein lokales Ollama- oder LM-Studio-Modell nutzen, laut Dokumentation muss das Modell aber Tool-Aufrufe unterstützen, und lokale Modelle eignen sich am besten für kurze, klare Aufgaben.',
          bullets: [
            'Installation mit einem Klick über den Chrome Web Store; ein Eintrag bei Edge Add-ons ist ebenfalls verlinkt.',
            'Der Ask-Modus (Standard) fragt vor Absenden, Senden, Löschen oder Hochladen nach; der Auto-Modus nicht.',
            'Lokale Einrichtung: die Erweiterung in Ollama per OLLAMA_ORIGINS zulassen oder CORS in LM Studio aktivieren.',
            'Anonyme Nutzungszähler sind standardmäßig aktiv und lassen sich in den Einstellungen abschalten.',
          ],
          updatedDate: '2026-11',
        },
      },
      toc: [
        { label: 'Zusammenfassung', anchor: 'tldr' },
        { label: 'Überblick', anchor: 'overview' },
        { label: 'So bekommen Sie die Software', anchor: 'get-it' },
        { label: 'Funktionen', anchor: 'features' },
        { label: 'Datenschutz und Datenfluss', anchor: 'privacy' },
        { label: 'Preise und Lizenz', anchor: 'pricing' },
        { label: 'Für wen geeignet', anchor: 'who-should-use' },
        { label: 'Grenzen und was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
        { label: 'Alternativen', anchor: 'alternatives' },
        { label: 'FAQ', anchor: 'faq' },
        { label: 'Fazit', anchor: 'verdict' },
        { label: 'Quellen', anchor: 'sources' },
        { label: 'Weiterführende Artikel', anchor: 'related-reading' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          title: 'Zusammenfassung',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'Nanobrowser ist eine kostenlose, quelloffene Chrome- und Edge-Erweiterung, in der ein KI-Agent in Ihrem eigenen, angemeldeten Browser Seiten liest, klickt und tippt und dabei ein von Ihnen angebundenes Cloud- oder lokales Modell nutzt.' },
            { type: 'plain-terms', text: 'Sie geben in der Seitenleiste eine Aufgabe ein, der Agent arbeitet Ihre offenen Tabs ab und fragt vor heiklen Schritten wie Absenden oder Löschen nach. Das Modell liest die Seiten, daher gehen Seiteninhalte an das Modell Ihrer Wahl.' },
          ],
          items: [
            'Pflege: Das Repository wurde zuletzt am 17. November 2026 aktualisiert, und die neueste Version 0.3.0 stammt vom 15. Oktober 2026; ein Hinweis auf ein veraltetes Projekt entfällt daher.',
            'Lizenz: Apache-2.0; die Erweiterung ist kostenlos, und Sie bezahlen Ihren Modellanbieter direkt.',
            'Neuaufbau: Laut Changelog ersetzte Version 0.3.0 den früheren Planner und Navigator durch einen einzigen Agenten.',
            'Modelle: Nötig ist ein Modell mit Tool-Aufrufen; als Cloud-Optionen nennt das Projekt unter anderem Anthropic, OpenAI, Google Gemini, AWS Bedrock, OpenRouter, xAI, DeepSeek und Mistral oder jeden OpenAI-kompatiblen Endpunkt.',
            'Sicherheit: Die Dokumentation warnt, dass eine Webseite den Agenten dazu verleiten kann, eine Adresse zu öffnen, die Ihre Daten woandershin trägt, und rät, seine Aktionen zu beobachten.',
          ],
          callouts: [
            { type: 'note', text: 'Dieser Test beruht auf Website, Dokumentation, GitHub-Repository und Datenschutzerklärung des Projekts, gelesen am 20. November 2026. PromptQuorum hat Nanobrowser weder installiert noch ausgeführt; Erfolgsquoten, Geschwindigkeit und Kosten pro Aufgabe wurden daher nicht bewertet. Ein Agent, der in Ihrem angemeldeten Browser klickt und tippt, kann Aktionen ausführen, die Sie nicht beabsichtigt haben. Dies sind allgemeine Informationen, keine Sicherheitsberatung.' },
          ],
        },
        overview: {
          id: 'overview',
          title: 'Überblick',
          content: [
            '**Nanobrowser ist ein KI-Agent, der im eigenen, angemeldeten Browser arbeitet statt in einem separaten.** Laut README und Website beschreiben Sie eine Aufgabe in der Seitenleiste (geöffnet über das Symbol in der Symbolleiste oder mit Alt+Shift+N), und der Agent liest Seiten, klickt, tippt und wechselt zwischen Tabs; mehrere Aufgaben können in getrennten Tab-Gruppen laufen.',
            'Das README nennt Chrome und Edge als unterstützt und Firefox, Safari sowie andere Chromium-Browser (Opera, Arc, Brave) als ungetestet. Der Code liegt unter der Apache License 2.0 auf GitHub; das Repository wurde am 31. Dezember 2024 angelegt, zuletzt am 17. November 2026 aktualisiert, und die neueste Version 0.3.0 stammt vom 15. Oktober 2026, die Entwicklung ist also aktiv.',
            'Laut Changelog baute Version 0.3.0 die Erweiterung um einen einzigen Agenten in der Seitenleiste neu auf, und Version 0.2.0 stellte die Modellaufrufe von LangChain auf das Vercel AI SDK um und entfernte die Anbieter Groq, Cerebras und Llama API.',
          ],
        },
        getIt: {
          id: 'get-it',
          title: 'So bekommen Sie die Software',
          content: [
            '**Nanobrowser wird wie jede Browser-Erweiterung installiert: aus dem Chrome Web Store hinzufügen (ein Eintrag bei Edge Add-ons ist ebenfalls verlinkt) und dann ein Modell anbinden.** Ein Terminal ist nur nötig, wenn Sie ein lokales Modell nutzen oder aus dem Quellcode bauen.',
          ],
          columns: ['Weg', 'So bekommen Sie es'],
          rows: [
            { 'Weg': 'Chrome Web Store', 'So bekommen Sie es': '[Nanobrowser-Eintrag](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) (kostenlos)' },
            { 'Weg': 'Microsoft Edge', 'So bekommen Sie es': '[Eintrag bei Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/nanobrowser-ai-web-agent/ajdioenfpgabnjlclgckbbnjjhdnjkhn)' },
            { 'Weg': 'Website', 'So bekommen Sie es': '[nanobrowser.ai](https://nanobrowser.ai)' },
            { 'Weg': 'Quellcode', 'So bekommen Sie es': '[GitHub](https://github.com/nanobrowser/nanobrowser) (Apache-2.0)' },
            { 'Weg': 'Datenschutzerklärung', 'So bekommen Sie es': '[nanobrowser.ai/docs/privacy](https://nanobrowser.ai/docs/privacy)' },
            { 'Weg': 'Aus Quellcode bauen', 'So bekommen Sie es': 'Node.js 24 LTS und pnpm 10' },
          ],
          codeBlock: '# Optional: build from source (Node.js 24 LTS, pnpm 10)\ncorepack enable\npnpm install\npnpm build\n\n# Local Ollama started by hand: allow the extension\nOLLAMA_ORIGINS="chrome-extension://*" ollama serve',
          codeLanguage: 'bash',
          note: 'Geprüfte Version: 0.3.0, laut GitHub Releases veröffentlicht am 15. Oktober 2026; der Chrome-Web-Store-Eintrag zeigt 0.3.0, aktualisiert am 16. Oktober 2026. Letztes Upstream-Update (Push) am 17. November 2026. Das GitHub-Release enthält nur nanobrowser-0.3.0.zip, ein entpacktes Paket für den Entwicklermodus.',
        },
        features: {
          id: 'features',
          title: 'Funktionen',
          content: [
            '**Alles Folgende sind Angaben des Projekts aus README oder Dokumentation; PromptQuorum hat nichts davon getestet.**',
          ],
          items: [
            '**Chat in der Seitenleiste mit parallelen Aufgaben.** Mehrere Aufgaben können in getrennten Tab-Gruppen laufen, mit Bild-, Datei- und Screenshot-Anhängen und Ergebnissen, die als CSV oder Markdown im Download-Ordner landen.',
            '**Ask- und Auto-Modus.** Der Ask-Modus (Standard) zeigt vor Absenden, Senden, Löschen oder Hochladen eine Freigabekarte; der Auto-Modus überspringt sie. Zahlungen, Passwörter, Codes und Zugriffsfreigaben bleiben laut Dokumentation immer bei Ihnen.',
            '**Regeln pro Website.** Jede Website lässt sich auf Allow, Ask oder Block setzen; eine Website-Regel hat Vorrang vor dem Modus und gilt für den exakten Host.',
            '**Modellwahl pro Chat.** Sie wählen Modell und Reasoning-Aufwand für jeden Chat, und eine Schaltfläche „Test models“ in den Einstellungen markiert Modelle ohne Tool-Aufrufe.',
            '**Bildverständnis, wenn das Modell es kann.** Mit einem Vision-Modell kann der Agent Screenshots aufnehmen und angehängte Bilder sehen; ohne eines liest er Seiten als Text.',
            '**Kurzbefehle, Sprache und Gedächtnis.** Gespeicherte Prompt-Kurzbefehle per Schrägstrich, Spracheingabe, dauerhaftes Gedächtnis und automatisches Zusammenfassen langer Chats.',
            '**Chatverlauf mit Export.** Chats lassen sich als Markdown exportieren, und das README nennt Oberflächen auf Englisch, in vereinfachtem und in traditionellem Chinesisch.',
            '**Element-IDs.** Laut README gibt eine Steuerungsschicht ohne KI-Modell jedem Seitenelement eine stabile ID, führt echte Browser-Eingaben aus und prüft den Zustand vor dem Handeln, über Chromes Debugger-API und Puppeteer.',
          ],
        },
        privacy: {
          id: 'privacy',
          title: 'Datenschutz und Datenfluss',
          content: [
            '**Laut Datenschutzerklärung hat Nanobrowser kein Konto und keinen Nanobrowser-Server, der Chats oder Seiten empfängt: Ihre Nachrichten, angehängte Dateien, der Inhalt der Tabs, in denen der Agent arbeitet, und bei Vision-Modellen Screenshots gehen von Ihrem Browser an den Modellanbieter Ihrer Wahl.** Bei einem lokalen Ollama- oder LM-Studio-Modell bleiben diese Daten laut Erklärung auf Ihrem Rechner. Zudem werden laut Erklärung Werte in Passwort-, Karten- und Einmalcode-Feldern zurückgehalten, wenn sie erkannt werden, und Anmeldungen und Cookies bleiben im Browser.',
            'Zwei weitere Datenflüsse nennt die Datenschutzerklärung. Spracheingabe sendet, wenn aktiviert, Audio an das gewählte Sprachmodell von OpenAI oder Google; Aufnahmen werden laut Erklärung nicht gespeichert. Zwei Telemetrie-Schalter, beide standardmäßig an, senden einen anonymen Tageszähler und tägliche Nutzungssummen (Aufgabenzahlen, genutzte Werkzeuge, Fehlercodes) an PostHog in den USA, ein Jahr lang gespeichert; laut Erklärung enthalten sie nie Seiten, besuchte Websites, Nachrichten, Dateien oder Schlüssel, und beide lassen sich unter Einstellungen, Daten abschalten. Beim Deinstallieren öffnet sich eine optionale Umfrage als Google-Formular.',
            'Die Berechtigungs-Dokumentation nennt drei Warnungen: Das Öffnen von Seiten braucht nie eine Freigabe, daher könnte eine Seite den Agenten dazu verleiten, eine Adresse zu öffnen, die Ihre Daten woandershin trägt; Tippen wird nicht gesperrt, sodass eine Seite beobachten kann, was der Agent tippt; und Prompt Injection ist ein Risiko, also den Agenten beobachten und Stop nutzen. Die gelesenen Richtlinientexte sind datiert auf den 13. Oktober 2026 (GitHub) und den 18. Oktober 2026 (Website); PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          ],
          callouts: [
            { type: 'note', text: 'Dies sind Aussagen des Projekts selbst, keine Prüfergebnisse. Lesen Sie bei Arbeits- oder Kundenkonten zuerst die Erklärung, nutzen Sie ein separates Browserprofil und lassen Sie den Ask-Modus eingeschaltet. Das Automatisieren einer Website kann gegen deren Nutzungsbedingungen verstoßen; prüfen Sie diese, bevor Sie einen Agenten auf eine Seite ansetzen. Dies sind allgemeine Informationen, keine Sicherheits- oder Rechtsberatung.' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: 'Preise und Lizenz',
          content: [
            '**Die Erweiterung ist unter der Apache License 2.0 kostenlos; Sie bezahlen Ihren Modellanbieter für das, was Sie nutzen.** Laut Dokumentation kosten lange Aufgaben und textlastige Seiten mehr, und ein lokales Modell kostet im Betrieb nichts.',
            'Website und Chrome-Web-Store-Eintrag zeigen weder Registrierung noch Abonnement noch Bezahlstufe. API-Schlüssel werden laut Dokumentation im Browser gespeichert und nur an den jeweiligen Anbieter gesendet.',
          ],
          columns: ['Posten', 'Kosten', 'Hinweise'],
          rows: [
            { 'Posten': 'Erweiterung', 'Kosten': 'Kostenlos', 'Hinweise': 'Apache-2.0, kein Konto' },
            { 'Posten': 'Cloud-Modell', 'Kosten': 'Anbieter-Tarif', 'Hinweise': 'Abrechnung durch Anbieter' },
            { 'Posten': 'Lokales Modell', 'Kosten': 'Gratis im Betrieb', 'Hinweise': 'Ihre Hardware, 16k Kontext+' },
          ],
          note: 'Die Kosten hängen vom Anbieter und der Aufgabe ab. PromptQuorum hat die Kosten pro Aufgabe nicht gemessen.',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Für wen geeignet',
          items: [
            'Menschen, die einen KI-Agenten in ihrem angemeldeten Chrome oder Edge wollen, mit sichtbarem Freigabeschritt vor heiklen Aktionen.',
            'Nutzer von Ollama oder LM Studio, die einen Browser-Agenten mit lokalem Modell ausprobieren möchten und hinnehmen, dass die Dokumentation zu kurzen, klaren Aufgaben rät.',
            'Entwickler, die eine Apache-2.0-Codebasis wollen, die sie mit Node.js 24 LTS und pnpm 10 selbst bauen können.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Grenzen und was wir nicht überprüfen konnten',
          content: [
            '**Nanobrowser passt schlecht, wenn Seiteninhalte nicht an ein Modell eines Dritten gelangen dürfen oder wenn eine übersehene Aktion Geld oder Daten kosten könnte.** Mehrere Punkte bleiben ungeprüft.',
          ],
          items: [
            'Nicht geeignet: Aufgaben, bei denen ein unbemerkter Klick Schaden anrichtet; laut Dokumentation können Schaltflächen nur mit Symbol, automatisch speichernde Schalter und Drag-and-drop-Aktionen übersehen werden und dann ohne Freigabe laufen, auch im Ask-Modus.',
            'Nicht geeignet: Firefox, Safari oder andere Chromium-Browser, die das README als ungetestet führt.',
            'Ungeprüft: Erfolgsquoten, Geschwindigkeit und Kosten pro Aufgabe; die Quellen nennen keinen Benchmark, und PromptQuorum hat keinen durchgeführt.',
            'Ungeprüft: wie gut lokale Modelle den Agenten steuern; die Dokumentation empfiehlt ein Modell für den lokalen Einsatz, nennt aber keine Qualitätswerte.',
            'Ungeprüft: die juristische Person hinter dem Projekt; die Datenschutzerklärung nennt nur „das Nanobrowser-Team“ mit einer Kontaktadresse, aber keinen Firmennamen, keine Anschrift und kein Land.',
            'Ungeprüft: ob die Datenschutzaussagen in der Praxis zutreffen; ein unabhängiges Audit war nicht zu finden.',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: 'Alternativen',
          content: [
            '**Nanobrowser ist eine Browser-Erweiterung; die Alternativen im selben Verzeichnissegment sind eine Python-Bibliothek, ganze KI-Browser und ein Desktop-Agent.** PromptQuorum hat sie nicht praktisch verglichen.',
          ],
          columns: ['Tool', 'In den Quellen genannt'],
          rows: [
            { 'Tool': 'Nanobrowser', 'In den Quellen genannt': 'Chrome- und Edge-Erweiterung; Apache-2.0; Cloud- oder lokale Modelle' },
            { 'Tool': '[Browser Use](/de/power-local-llm/browser-use-review)', 'In den Quellen genannt': 'Python-Bibliothek und CLI für Browser-Agenten; MIT; optional kostenpflichtige Cloud' },
            { 'Tool': '[BrowserOS](/de/power-local-llm/browseros-review)', 'In den Quellen genannt': 'KI-Browser (Chromium-Fork) für Mac, Windows und Linux; AGPL-3.0' },
            { 'Tool': '[LastBrowser](/de/power-local-llm/lastbrowser-review)', 'In den Quellen genannt': 'Desktop-Browser für Windows mit eingebauter KI-Seitenleiste Sidekick' },
            { 'Tool': '[Local Operator](/de/power-local-llm/local-operator-review)', 'In den Quellen genannt': 'Desktop-Agent-App, die Code auf Ihrem Rechner schreibt und ausführt' },
          ],
        },
        faq: {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            {
              q: 'Funktioniert Nanobrowser in Firefox oder Brave?',
              a: 'Das README nennt nur Chrome und Edge als unterstützt und sagt, Firefox, Safari und andere Chromium-Browser wie Opera, Arc und Brave seien ungetestet. PromptQuorum hat sie nicht ausprobiert.',
            },
            {
              q: 'Wie verbinde ich Ollama oder LM Studio?',
              a: 'Laut Dokumentation setzen Sie OLLAMA_ORIGINS auf chrome-extension://* und starten Ollama neu, tragen dann http://localhost:11434 als Serveradresse ein und klicken auf „Test models“. LM Studio braucht „Enable CORS“ in den Developer-Einstellungen, mit dem Server auf Port 1234.',
            },
            {
              q: 'Kann der Agent handeln, ohne zu fragen?',
              a: 'Im Auto-Modus sendet, löscht und lädt er ohne Nachfrage hoch, doch Zahlungen, Passwörter, Kartennummern, Einmalcodes und Zugriffsfreigaben bleiben bei Ihnen. Eine Website-Regel auf Ask erzwingt auch im Auto-Modus eine Nachfrage, und Block hindert den Agenten daran, die Seite anzufassen.',
            },
            {
              q: 'Was änderte sich in Version 0.3.0?',
              a: 'Laut Changelog ersetzte ein einzelner Agent den Planner und Navigator, der Ask-Modus wurde zum Standard, und jedes Seitenelement erhielt eine ID, die genau an dieses Element gebunden ist, sodass Klicks das richtige Ziel treffen.',
            },
            {
              q: 'Können mit einem lokalen Modell mehrere Aufgaben gleichzeitig laufen?',
              a: 'Sie können in getrennten Tab-Gruppen starten, doch laut Dokumentation verarbeitet jeder Ollama- oder LM-Studio-Server jeweils eine Anfrage, lokale Aufgaben bilden also eine Warteschlange; über den OpenAI-kompatiblen Anbieter eingebundene Server wie llama.cpp oder vLLM stellen nicht in eine Warteschlange.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Fazit',
          content: [
            '**Nanobrowser lohnt einen Versuch, wenn Sie einen quelloffenen KI-Agenten in Chrome oder Edge wollen, mit Freigabeschritten und der Option auf ein lokales Modell, und akzeptieren, dass hier nichts getestet wurde.**',
            'Er steht unter Apache-2.0, wird aktiv entwickelt (letzter Push am 17. November 2026, Version 0.3.0 am 15. Oktober 2026) und ist bis auf die Kosten Ihres Modellanbieters kostenlos. Die Abstriche: Seiteninhalte gehen an den gewählten Modellanbieter, laut Dokumentation können manche Aktionen übersehen werden und ohne Freigabe laufen, lokale Modelle eignen sich am besten für einfache Aufgaben, und Erfolgsquoten und Geschwindigkeit stützen sich auf keine Daten, die wir prüfen konnten. PromptQuorum hat ihn nicht getestet; beginnen Sie mit einem separaten Browserprofil und risikoarmen Aufgaben.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[Nanobrowser-Website](https://nanobrowser.ai) — Produktbeschreibung und Installationslinks, geprüft am 20. November 2026.',
            '[Dokumentation zu Modellen](https://nanobrowser.ai/docs/models) — Anbieter, Tool-Aufrufe und Preise, geprüft am 20. November 2026.',
            '[Dokumentation zu lokalen Modellen](https://nanobrowser.ai/docs/local-models) — Einrichtung von Ollama und LM Studio, geprüft am 20. November 2026.',
            '[Dokumentation zu Berechtigungen](https://nanobrowser.ai/docs/permissions) — Ask- und Auto-Modus, Website-Regeln und Warnungen, geprüft am 20. November 2026.',
            '[Datenschutzseite](https://nanobrowser.ai/docs/privacy) — Datenflüsse und Telemetrie, datiert auf den 18. Oktober 2026, geprüft am 20. November 2026.',
            '[PRIVACY.md](https://github.com/nanobrowser/nanobrowser/blob/master/PRIVACY.md) — Datenschutzerklärung auf GitHub, datiert auf den 13. Oktober 2026, geprüft am 20. November 2026.',
            '[Changelog](https://nanobrowser.ai/changelog) — Versionen 0.1.9 bis 0.3.0, geprüft am 20. November 2026.',
            '[GitHub-Repository und README](https://github.com/nanobrowser/nanobrowser) — Lizenz, Installationsschritte und letzter Push, geprüft am 20. November 2026.',
            '[Release 0.3.0](https://github.com/nanobrowser/nanobrowser/releases/tag/v0.3.0) — neuestes Release, veröffentlicht am 15. Oktober 2026.',
            '[Chrome-Web-Store-Eintrag](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) — Version 0.3.0, aktualisiert am 16. Oktober 2026, kostenlos, geprüft am 20. November 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Artikel',
          items: [
            '[Browser Use im Test](/de/power-local-llm/browser-use-review) — eine quelloffene Python-Bibliothek und CLI für Browser-Agenten.',
            '[BrowserOS im Test](/de/power-local-llm/browseros-review) — ein KI-Browser mit eingebautem Assistenten.',
            '[LastBrowser im Test](/de/power-local-llm/lastbrowser-review) — ein Desktop-Browser mit KI-Seitenleiste.',
            '[Local Operator im Test](/de/power-local-llm/local-operator-review) — eine Desktop-Agent-App, die Code auf Ihrem Rechner ausführt.',
            '[Local-LLM-Software-Verzeichnis](/de/directory) — der vollständige Katalog lokaler KI-Tools.',
          ],
        },
      },
    },
    es: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-20',
      dateModified: '2026-11-20',
      next_refresh_due: '2027-05-20',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/nanobrowser-review-hero-es.webp',
      title: 'Análisis de Nanobrowser: agente de navegador con IA gratuito y de código abierto para Chrome y Edge',
      seoTitle: 'Nanobrowser: análisis del agente de IA gratis para Chrome',
      intro:
        'Nanobrowser es una extensión de navegador gratuita y de código abierto para Chrome y Edge en la que un agente de IA trabaja en un panel lateral: describes una tarea y él lee páginas, hace clic, escribe y cambia de pestaña por ti. Usa el modelo de IA que conectes, ya sea un proveedor en la nube o un modelo local mediante Ollama o LM Studio. Este análisis se basa en el sitio web, la documentación, el repositorio de GitHub y la política de privacidad del proyecto, consultados el 20 de noviembre de 2026; PromptQuorum no ha probado la extensión.',
      metaDescription:
        'Nanobrowser es un agente de IA gratuito y de código abierto para Chrome y Edge con modelos en la nube o Ollama local. Privacidad, modos y límites.',
      twitterDescription:
        'Análisis de Nanobrowser: un agente de IA gratuito y de código abierto en el panel lateral de Chrome y Edge. Qué hace, adónde van los datos y qué no pudimos verificar.',
      audience:
        'Personas que quieren un agente de IA dentro de su propio Chrome o Edge, usuarios de Ollama y LM Studio, y lectores que comparan agentes de navegador',
      readTime: '6 min de lectura',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Nanobrowser',
      targetKeywords: [
        'análisis de Nanobrowser',
        'Nanobrowser agente de navegador con IA',
        'Nanobrowser Ollama',
        'Nanobrowser privacidad',
        'Nanobrowser extensión de Chrome',
        'alternativas a Nanobrowser',
      ],
      current_models_mentioned: ['Ollama', 'LM Studio'],
      leadAnswerBlock:
        '**Nanobrowser (versión 0.3.0, publicada el 15 de octubre de 2026) es una extensión de navegador gratuita con licencia Apache-2.0 que ejecuta un agente de IA en el panel lateral de Chrome o Edge, con el modelo en la nube o local que conectes.** El contenido de las páginas va a ese proveedor de modelos, y, según la documentación, un modelo local de Ollama o LM Studio lo mantiene en tu equipo. Todo lo que se afirma aquí procede del sitio web, la documentación y la política del propio proyecto; PromptQuorum no lo ha probado.',
      quickAnswerTop: {
        es: {
          question: '¿Nanobrowser es gratuito y puede usar un modelo local?',
          answer:
            'La extensión es gratuita y no requiere cuenta; solo pagas a tu proveedor de modelos. Puede usar un modelo local de Ollama o LM Studio, pero la documentación indica que el modelo debe admitir llamadas a herramientas y que los modelos locales funcionan mejor con tareas cortas y claras.',
          bullets: [
            'Se instala con un clic desde Chrome Web Store; también hay un enlace a una ficha en Edge Add-ons.',
            'El modo Ask (el predeterminado) pregunta antes de enviar, eliminar o subir; el modo Auto no.',
            'Configuración local: permitir la extensión en Ollama con OLLAMA_ORIGINS o activar CORS en LM Studio.',
            'Los contadores de uso anónimos vienen activados de forma predeterminada y se pueden desactivar en Ajustes.',
          ],
          updatedDate: '2026-11',
        },
      },
      toc: [
        { label: 'Puntos clave', anchor: 'tldr' },
        { label: 'Visión general', anchor: 'overview' },
        { label: 'Cómo conseguirlo', anchor: 'get-it' },
        { label: 'Funciones', anchor: 'features' },
        { label: 'Privacidad y flujo de datos', anchor: 'privacy' },
        { label: 'Precios y licencia', anchor: 'pricing' },
        { label: 'Para quién es', anchor: 'who-should-use' },
        { label: 'Límites y lo que no pudimos verificar', anchor: 'who-should-not-use' },
        { label: 'Alternativas', anchor: 'alternatives' },
        { label: 'Preguntas frecuentes', anchor: 'faq' },
        { label: 'Veredicto', anchor: 'verdict' },
        { label: 'Fuentes', anchor: 'sources' },
        { label: 'Lecturas relacionadas', anchor: 'related-reading' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          title: 'Puntos clave',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'Nanobrowser es una extensión gratuita y de código abierto para Chrome y Edge en la que un agente de IA lee páginas, hace clic y escribe en tu propio navegador con la sesión iniciada, usando un modelo en la nube o local que tú conectas.' },
            { type: 'plain-terms', text: 'Escribes una tarea en el panel lateral, el agente trabaja con tus pestañas abiertas y pregunta antes de pasos delicados como enviar o eliminar. El modelo lee las páginas, así que su contenido va al modelo que elijas.' },
          ],
          items: [
            'Mantenimiento: el repositorio recibió su último push el 17 de noviembre de 2026 y la última versión, 0.3.0, es del 15 de octubre de 2026, por lo que no corresponde un aviso de proyecto abandonado.',
            'Licencia: Apache-2.0; la extensión es gratuita y pagas directamente a tu proveedor de modelos.',
            'Reconstrucción: según el registro de cambios, la versión 0.3.0 sustituyó el antiguo planificador y navegador por un único agente.',
            'Modelos: requiere un modelo con llamadas a herramientas; entre las opciones en la nube figuran Anthropic, OpenAI, Google Gemini, AWS Bedrock, OpenRouter, xAI, DeepSeek y Mistral, o cualquier endpoint compatible con OpenAI.',
            'Seguridad: la documentación advierte de que una página web puede engañar al agente para que abra una dirección que lleve tus datos a otro sitio, y aconseja vigilar sus acciones.',
          ],
          callouts: [
            { type: 'note', text: 'Este análisis se basa en el sitio web, la documentación, el repositorio de GitHub y la política de privacidad del proyecto, consultados el 20 de noviembre de 2026. PromptQuorum no ha instalado ni ejecutado Nanobrowser, por lo que no se evalúan las tasas de éxito, la velocidad ni el coste por tarea. Un agente que hace clic y escribe en tu navegador con la sesión iniciada puede realizar acciones que no pretendías. Es información general, no asesoramiento de seguridad.' },
          ],
        },
        overview: {
          id: 'overview',
          title: 'Visión general',
          content: [
            '**Nanobrowser es un agente de IA que trabaja dentro de tu propio navegador, con la sesión iniciada, en lugar de uno aparte.** Según el README y el sitio web, describes una tarea en el panel lateral (que se abre desde el icono de la barra de herramientas o con Alt+Shift+N) y el agente lee páginas, hace clic, escribe y se mueve entre pestañas; varias tareas pueden ejecutarse en grupos de pestañas separados.',
            'El README indica que Chrome y Edge son compatibles y que Firefox, Safari y otros navegadores basados en Chromium (Opera, Arc, Brave) no se han probado. El código está en GitHub bajo la licencia Apache 2.0; el repositorio se creó el 31 de diciembre de 2024, recibió su último push el 17 de noviembre de 2026 y la última versión, 0.3.0, es del 15 de octubre de 2026, así que el desarrollo está activo.',
            'El registro de cambios dice que la versión 0.3.0 reconstruyó la extensión en torno a un único agente en el panel lateral, y que la versión 0.2.0 pasó las llamadas a modelos de LangChain al Vercel AI SDK y eliminó los proveedores Groq, Cerebras y Llama API.',
          ],
        },
        getIt: {
          id: 'get-it',
          title: 'Cómo conseguirlo',
          content: [
            '**Nanobrowser se instala como cualquier extensión de navegador: añádela desde Chrome Web Store (también hay un enlace a una ficha en Edge Add-ons) y luego conecta un modelo.** No hace falta terminal salvo que uses un modelo local o compiles desde el código fuente.',
          ],
          columns: ['Vía', 'Cómo conseguirlo'],
          rows: [
            { 'Vía': 'Chrome Web Store', 'Cómo conseguirlo': '[Ficha de Nanobrowser](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) (gratis)' },
            { 'Vía': 'Microsoft Edge', 'Cómo conseguirlo': '[Ficha en Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/nanobrowser-ai-web-agent/ajdioenfpgabnjlclgckbbnjjhdnjkhn)' },
            { 'Vía': 'Sitio web', 'Cómo conseguirlo': '[nanobrowser.ai](https://nanobrowser.ai)' },
            { 'Vía': 'Código fuente', 'Cómo conseguirlo': '[GitHub](https://github.com/nanobrowser/nanobrowser) (Apache-2.0)' },
            { 'Vía': 'Política de privacidad', 'Cómo conseguirlo': '[nanobrowser.ai/docs/privacy](https://nanobrowser.ai/docs/privacy)' },
            { 'Vía': 'Compilar desde el código', 'Cómo conseguirlo': 'Node.js 24 LTS y pnpm 10' },
          ],
          codeBlock: '# Optional: build from source (Node.js 24 LTS, pnpm 10)\ncorepack enable\npnpm install\npnpm build\n\n# Local Ollama started by hand: allow the extension\nOLLAMA_ORIGINS="chrome-extension://*" ollama serve',
          codeLanguage: 'bash',
          note: 'Versión analizada: 0.3.0, publicada el 15 de octubre de 2026 según GitHub Releases; la ficha de Chrome Web Store muestra 0.3.0, actualizada el 16 de octubre de 2026. Última actualización upstream (push) el 17 de noviembre de 2026. La release de GitHub solo incluye nanobrowser-0.3.0.zip, un paquete sin comprimir para el modo de desarrollador.',
        },
        features: {
          id: 'features',
          title: 'Funciones',
          content: [
            '**Todo lo que sigue son afirmaciones del proyecto procedentes del README o de la documentación; PromptQuorum no ha probado nada de ello.**',
          ],
          items: [
            '**Chat en el panel lateral con tareas en paralelo.** Varias tareas pueden ejecutarse en grupos de pestañas separados, con adjuntos de imágenes, archivos y capturas de pantalla, y resultados guardados en Descargas como CSV o Markdown.',
            '**Modos Ask y Auto.** El modo Ask (el predeterminado) muestra una tarjeta de aprobación antes de enviar, eliminar o subir; el modo Auto la omite. Los pagos, las contraseñas, los códigos y las concesiones de acceso siempre te los deja a ti, según la documentación.',
            '**Reglas por sitio.** Cada sitio puede ponerse en Allow, Ask o Block; una regla de sitio prevalece sobre el modo y se aplica al host exacto.',
            '**Elección de modelo por chat.** Eliges el modelo y el esfuerzo de razonamiento de cada chat, y un botón Test models en Ajustes marca los modelos sin llamadas a herramientas.',
            '**Visión cuando el modelo la admite.** Con un modelo de visión, el agente puede hacer capturas de pantalla y ver imágenes adjuntas; sin él, lee las páginas como texto.',
            '**Atajos, voz y memoria.** Atajos de prompts guardados que se activan con una barra, entrada de voz, memoria persistente y resumen automático de chats largos.',
            '**Historial de chats con exportación.** Los chats se pueden exportar a Markdown, y el README menciona interfaces en inglés, chino simplificado y chino tradicional.',
            '**ID de elementos.** Según el README, una capa de control sin ningún modelo de IA asigna a cada elemento de la página un ID estable, realiza entradas reales en el navegador y comprueba el estado antes de actuar, mediante la API de depuración de Chrome y Puppeteer.',
          ],
        },
        privacy: {
          id: 'privacy',
          title: 'Privacidad y flujo de datos',
          content: [
            '**Según su política de privacidad, Nanobrowser no tiene cuenta ni un servidor de Nanobrowser que reciba chats o páginas: tus mensajes, los archivos adjuntos, el contenido de las pestañas en las que trabaja el agente y, con modelos de visión, las capturas de pantalla van de tu navegador al proveedor de modelos que elijas.** Con un modelo local de Ollama o LM Studio, según la política esos datos se quedan en tu equipo. Añade que los valores de los campos de contraseña, tarjeta y código de un solo uso se retienen cuando se reconocen, y que los inicios de sesión y las cookies permanecen en el navegador.',
            'La política de privacidad describe dos flujos más. La entrada de voz, si se activa, envía audio al modelo de voz de OpenAI o de Google que elijas, y la política dice que las grabaciones no se conservan. Dos interruptores de telemetría, ambos activados de forma predeterminada, envían un recuento diario anónimo y totales diarios de uso (número de tareas, herramientas usadas, códigos de error) a PostHog en Estados Unidos, conservados durante un año; la política dice que nunca incluyen páginas, sitios visitados, mensajes, archivos ni claves, y ambos se pueden desactivar en Ajustes, Datos. Al desinstalar se abre una encuesta opcional en Google Forms.',
            'La documentación de permisos añade tres advertencias: abrir páginas nunca requiere aprobación, así que una página podría engañar al agente para que abra una dirección que lleve tus datos a otro sitio; escribir no está restringido, por lo que una página puede observar lo que el agente escribe; y la inyección de prompts es un riesgo, así que vigila al agente y usa Stop. Los textos de la política consultados están fechados el 13 de octubre de 2026 (GitHub) y el 18 de octubre de 2026 (sitio web); PromptQuorum no ha inspeccionado el tráfico de red.',
          ],
          callouts: [
            { type: 'note', text: 'Estas son afirmaciones del propio proyecto, no resultados de una auditoría. Para cuentas de trabajo o de clientes, lee primero la política, usa un perfil de navegador aparte y mantén activado el modo Ask. Automatizar un sitio web puede incumplir sus condiciones de uso, así que revísalas antes de lanzar un agente contra un sitio. Es información general, no asesoramiento de seguridad ni jurídico.' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: 'Precios y licencia',
          content: [
            '**La extensión es gratuita bajo la licencia Apache 2.0; pagas a tu proveedor de modelos por lo que uses.** La documentación dice que las tareas largas y las páginas con mucho texto cuestan más, y que un modelo local no cuesta nada de ejecutar.',
            'El sitio web y la ficha de Chrome Web Store no muestran registro, suscripción ni nivel de pago. Según la documentación, las claves de API se guardan en el navegador y se envían solo a su propio proveedor.',
          ],
          columns: ['Elemento', 'Coste', 'Notas'],
          rows: [
            { 'Elemento': 'Extensión', 'Coste': 'Gratis', 'Notas': 'Apache-2.0, sin cuenta' },
            { 'Elemento': 'Modelo en la nube', 'Coste': 'Tarifa del proveedor', 'Notas': 'Lo factura tu proveedor' },
            { 'Elemento': 'Modelo local', 'Coste': 'Gratis de ejecutar', 'Notas': 'Tu hardware, 16k de contexto+' },
          ],
          note: 'Los costes dependen del proveedor y de la tarea. PromptQuorum no midió el coste por tarea.',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Para quién es',
          items: [
            'Personas que quieren un agente de IA dentro de su Chrome o Edge con la sesión iniciada, con un paso de aprobación visible antes de acciones delicadas.',
            'Usuarios de Ollama o LM Studio que quieren probar un agente de navegador con un modelo local y aceptan que la documentación aconseje tareas cortas y claras.',
            'Desarrolladores que quieren una base de código Apache-2.0 que puedan compilar ellos mismos con Node.js 24 LTS y pnpm 10.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Límites y lo que no pudimos verificar',
          content: [
            '**Nanobrowser encaja mal si el contenido de las páginas no debe llegar a un modelo de terceros, o si una acción pasada por alto podría costar dinero o datos.** Varios puntos siguen sin verificar.',
          ],
          items: [
            'No es adecuado: tareas en las que un clic inadvertido causa daño; la documentación dice que se pueden pasar por alto botones solo con icono, interruptores de guardado automático y acciones de arrastrar y soltar, que entonces se ejecutan sin aprobación, incluso en modo Ask.',
            'No es adecuado: Firefox, Safari u otros navegadores basados en Chromium, que el README indica como no probados.',
            'Sin verificar: tasas de éxito, velocidad y coste por tarea; las fuentes no dan ningún benchmark y PromptQuorum no ejecutó ninguno.',
            'Sin verificar: lo bien que los modelos locales manejan al agente; la documentación recomienda un modelo para uso local, pero no da cifras de calidad.',
            'Sin verificar: la entidad jurídica detrás del proyecto; la política de privacidad nombra solo a «el equipo de Nanobrowser» con una dirección de contacto, y no indica nombre de empresa, dirección ni país.',
            'Sin verificar: si las declaraciones de privacidad se cumplen en la práctica; no se encontró ninguna auditoría independiente.',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: 'Alternativas',
          content: [
            '**Nanobrowser es una extensión de navegador; las alternativas del mismo segmento del directorio son una biblioteca de Python, navegadores de IA completos y un agente de escritorio.** PromptQuorum no las ha comparado en la práctica.',
          ],
          columns: ['Herramienta', 'Mencionado en las fuentes'],
          rows: [
            { 'Herramienta': 'Nanobrowser', 'Mencionado en las fuentes': 'Extensión de Chrome y Edge; Apache-2.0; modelos en la nube o locales' },
            { 'Herramienta': '[Browser Use](/es/power-local-llm/browser-use-review)', 'Mencionado en las fuentes': 'Biblioteca de Python y CLI para programar un agente de navegador; MIT; nube de pago opcional' },
            { 'Herramienta': '[BrowserOS](/es/power-local-llm/browseros-review)', 'Mencionado en las fuentes': 'Navegador de IA (fork de Chromium) para Mac, Windows y Linux; AGPL-3.0' },
            { 'Herramienta': '[LastBrowser](/es/power-local-llm/lastbrowser-review)', 'Mencionado en las fuentes': 'Navegador de escritorio para Windows con una barra lateral de IA, Sidekick' },
            { 'Herramienta': '[Local Operator](/es/power-local-llm/local-operator-review)', 'Mencionado en las fuentes': 'App de agente de escritorio que escribe y ejecuta código en tu equipo' },
          ],
        },
        faq: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            {
              q: '¿Nanobrowser funciona en Firefox o Brave?',
              a: 'El README solo indica Chrome y Edge como compatibles y dice que Firefox, Safari y otros navegadores basados en Chromium, como Opera, Arc y Brave, no se han probado. PromptQuorum no los ha probado.',
            },
            {
              q: '¿Cómo conecto Ollama o LM Studio?',
              a: 'Según la documentación, configura OLLAMA_ORIGINS como chrome-extension://* y reinicia Ollama; después introduce http://localhost:11434 como dirección del servidor y pulsa Test models. LM Studio necesita Enable CORS en sus ajustes de Developer, con el servidor en el puerto 1234.',
            },
            {
              q: '¿Puede el agente actuar sin preguntarme?',
              a: 'En modo Auto envía, elimina y sube sin preguntar, pero los pagos, las contraseñas, los números de tarjeta, los códigos de un solo uso y las concesiones de acceso siguen siendo cosa tuya. Una regla de sitio en Ask obliga a preguntar incluso en modo Auto, y Block impide que el agente toque el sitio.',
            },
            {
              q: '¿Qué cambió en la versión 0.3.0?',
              a: 'Según el registro de cambios, un único agente sustituyó al planificador y al navegador, el modo Ask pasó a ser el predeterminado y cada elemento de la página recibió un ID vinculado exactamente a ese elemento, de modo que los clics apuntan al correcto.',
            },
            {
              q: '¿Pueden ejecutarse varias tareas a la vez con un modelo local?',
              a: 'Pueden empezar en grupos de pestañas separados, pero la documentación dice que cada servidor de Ollama o LM Studio atiende una solicitud a la vez, así que las tareas locales hacen cola; los servidores añadidos mediante el proveedor compatible con OpenAI, como llama.cpp o vLLM, no hacen cola.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Veredicto',
          content: [
            '**Nanobrowser merece una prueba si quieres un agente de IA de código abierto dentro de Chrome o Edge, con pasos de aprobación y la opción de un modelo local, y aceptas que aquí no se ha probado nada.**',
            'Es Apache-2.0, está en desarrollo activo (último push el 17 de noviembre de 2026, versión 0.3.0 el 15 de octubre de 2026) y es gratuito salvo los cargos de tu proveedor de modelos. Las contrapartidas: el contenido de las páginas va al proveedor de modelos que elijas, la documentación dice que algunas acciones pueden pasarse por alto y ejecutarse sin aprobación, los modelos locales funcionan mejor con tareas sencillas, y las tasas de éxito y la velocidad no se apoyan en datos que pudiéramos comprobar. PromptQuorum no lo ha probado; empieza con un perfil de navegador aparte y tareas de bajo riesgo.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '[Sitio web de Nanobrowser](https://nanobrowser.ai) — descripción del producto y enlaces de instalación, consultado el 20 de noviembre de 2026.',
            '[Documentación de modelos](https://nanobrowser.ai/docs/models) — proveedores, llamadas a herramientas y precios, consultada el 20 de noviembre de 2026.',
            '[Documentación de modelos locales](https://nanobrowser.ai/docs/local-models) — configuración de Ollama y LM Studio, consultada el 20 de noviembre de 2026.',
            '[Documentación de permisos](https://nanobrowser.ai/docs/permissions) — modos Ask y Auto, reglas de sitio y advertencias, consultada el 20 de noviembre de 2026.',
            '[Página de privacidad](https://nanobrowser.ai/docs/privacy) — flujos de datos y telemetría, fechada el 18 de octubre de 2026, consultada el 20 de noviembre de 2026.',
            '[PRIVACY.md](https://github.com/nanobrowser/nanobrowser/blob/master/PRIVACY.md) — política de privacidad en GitHub, fechada el 13 de octubre de 2026, consultada el 20 de noviembre de 2026.',
            '[Registro de cambios](https://nanobrowser.ai/changelog) — versiones 0.1.9 a 0.3.0, consultado el 20 de noviembre de 2026.',
            '[Repositorio de GitHub y README](https://github.com/nanobrowser/nanobrowser) — licencia, pasos de instalación y último push, consultados el 20 de noviembre de 2026.',
            '[Release 0.3.0](https://github.com/nanobrowser/nanobrowser/releases/tag/v0.3.0) — última versión, publicada el 15 de octubre de 2026.',
            '[Ficha de Chrome Web Store](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) — versión 0.3.0, actualizada el 16 de octubre de 2026, gratuita, consultada el 20 de noviembre de 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Análisis de Browser Use](/es/power-local-llm/browser-use-review) — una biblioteca de Python y CLI de código abierto para agentes de navegador.',
            '[Análisis de BrowserOS](/es/power-local-llm/browseros-review) — un navegador de IA con asistente integrado.',
            '[Análisis de LastBrowser](/es/power-local-llm/lastbrowser-review) — un navegador de escritorio con barra lateral de IA.',
            '[Análisis de Local Operator](/es/power-local-llm/local-operator-review) — una app de agente de escritorio que ejecuta código en tu equipo.',
            '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA locales.',
          ],
        },
      },
    },
    fr: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-20',
      dateModified: '2026-11-20',
      next_refresh_due: '2027-05-20',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/nanobrowser-review-hero-fr.webp',
      title: 'Test de Nanobrowser : agent de navigateur IA gratuit et open source pour Chrome et Edge',
      seoTitle: 'Test de Nanobrowser : agent IA gratuit pour Chrome',
      intro:
        'Nanobrowser est une extension de navigateur gratuite et open source pour Chrome et Edge dans laquelle un agent d’IA travaille dans un panneau latéral : vous décrivez une tâche, et il lit les pages, clique, saisit du texte et change d’onglet à votre place. Il utilise le modèle d’IA que vous connectez, soit un fournisseur cloud, soit un modèle local via Ollama ou LM Studio. Ce test s’appuie sur le site web, la documentation, le dépôt GitHub et la politique de confidentialité du projet, consultés le 20 novembre 2026 ; PromptQuorum n’a pas testé l’extension.',
      metaDescription:
        'Nanobrowser est un agent de navigateur IA gratuit et open source pour Chrome et Edge, avec modèles cloud ou Ollama local. Confidentialité, modes, limites.',
      twitterDescription:
        'Test de Nanobrowser : un agent IA gratuit et open source dans le panneau latéral de Chrome et Edge. Ce qu’il fait, où vont les données et ce que nous n’avons pas pu vérifier.',
      audience:
        'Les personnes qui veulent un agent d’IA dans leur propre Chrome ou Edge, les utilisateurs d’Ollama et de LM Studio, et les lecteurs qui comparent des agents de navigateur',
      readTime: '6 min de lecture',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Nanobrowser',
      targetKeywords: [
        'test de Nanobrowser',
        'Nanobrowser agent de navigateur IA',
        'Nanobrowser Ollama',
        'Nanobrowser confidentialité',
        'Nanobrowser extension Chrome',
        'alternatives à Nanobrowser',
      ],
      current_models_mentioned: ['Ollama', 'LM Studio'],
      leadAnswerBlock:
        '**Nanobrowser (version 0.3.0, publiée le 15 octobre 2026) est une extension de navigateur gratuite sous licence Apache-2.0 qui exécute un agent d’IA dans le panneau latéral de Chrome ou d’Edge, avec le modèle cloud ou local que vous connectez.** Le contenu des pages va à ce fournisseur de modèles ; selon la documentation, avec un modèle local Ollama ou LM Studio, il reste sur votre ordinateur. Toutes les affirmations viennent du site web, de la documentation et de la politique du projet ; PromptQuorum ne l’a pas testé.',
      quickAnswerTop: {
        fr: {
          question: 'Nanobrowser est-il gratuit, et peut-il utiliser un modèle local ?',
          answer:
            'L’extension est gratuite et sans compte ; vous ne payez que votre fournisseur de modèles. Elle peut utiliser un modèle local Ollama ou LM Studio, mais la documentation précise que le modèle doit prendre en charge l’appel d’outils et que les modèles locaux conviennent surtout aux tâches courtes et claires.',
          bullets: [
            'Installation en un clic depuis le Chrome Web Store ; une fiche Edge Add-ons est également indiquée.',
            'Le mode Ask (par défaut) demande confirmation avant d’envoyer, de supprimer ou de téléverser ; le mode Auto non.',
            'Configuration locale : autoriser l’extension dans Ollama avec OLLAMA_ORIGINS, ou activer CORS dans LM Studio.',
            'Les compteurs d’usage anonymes sont activés par défaut et se désactivent dans les réglages.',
          ],
          updatedDate: '2026-11',
        },
      },
      toc: [
        { label: 'Points clés', anchor: 'tldr' },
        { label: 'Aperçu', anchor: 'overview' },
        { label: 'Comment l’obtenir', anchor: 'get-it' },
        { label: 'Fonctionnalités', anchor: 'features' },
        { label: 'Confidentialité et flux de données', anchor: 'privacy' },
        { label: 'Tarifs et licence', anchor: 'pricing' },
        { label: 'Pour qui', anchor: 'who-should-use' },
        { label: 'Limites et ce que nous n’avons pas pu vérifier', anchor: 'who-should-not-use' },
        { label: 'Alternatives', anchor: 'alternatives' },
        { label: 'FAQ', anchor: 'faq' },
        { label: 'Verdict', anchor: 'verdict' },
        { label: 'Sources', anchor: 'sources' },
        { label: 'Lectures associées', anchor: 'related-reading' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          title: 'Points clés',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'Nanobrowser est une extension gratuite et open source pour Chrome et Edge dans laquelle un agent d’IA lit les pages, clique et saisit du texte dans votre propre navigateur connecté, avec un modèle cloud ou local que vous connectez.' },
            { type: 'plain-terms', text: 'Vous saisissez une tâche dans le panneau latéral, l’agent travaille dans vos onglets ouverts et demande confirmation avant les étapes sensibles comme envoyer ou supprimer. Le modèle lit les pages : leur contenu va donc au modèle que vous choisissez.' },
          ],
          items: [
            'Maintenance : le dépôt a reçu son dernier push le 17 novembre 2026 et la dernière version, 0.3.0, date du 15 octobre 2026 ; aucun avertissement de projet abandonné ne s’applique.',
            'Licence : Apache-2.0 ; l’extension est gratuite et vous payez directement votre fournisseur de modèles.',
            'Refonte : selon le journal des modifications, la version 0.3.0 a remplacé l’ancien planificateur et le navigateur par un agent unique.',
            'Modèles : il faut un modèle avec appel d’outils ; les options cloud comprennent Anthropic, OpenAI, Google Gemini, AWS Bedrock, OpenRouter, xAI, DeepSeek et Mistral, ou tout point d’accès compatible OpenAI.',
            'Sécurité : la documentation prévient qu’une page web peut inciter l’agent à ouvrir une adresse qui emporte vos données ailleurs, et conseille de surveiller ses actions.',
          ],
          callouts: [
            { type: 'note', text: 'Ce test s’appuie sur le site web, la documentation, le dépôt GitHub et la politique de confidentialité du projet, consultés le 20 novembre 2026. PromptQuorum n’a ni installé ni exécuté Nanobrowser : les taux de réussite, la vitesse et le coût par tâche ne sont donc pas évalués. Un agent qui clique et saisit du texte dans votre navigateur connecté peut accomplir des actions que vous n’aviez pas prévues. Il s’agit d’informations générales, pas de conseils de sécurité.' },
          ],
        },
        overview: {
          id: 'overview',
          title: 'Aperçu',
          content: [
            '**Nanobrowser est un agent d’IA qui travaille dans votre propre navigateur connecté, et non dans un navigateur à part.** D’après le README et le site web, vous décrivez une tâche dans le panneau latéral (ouvert depuis l’icône de la barre d’outils ou avec Alt+Shift+N), et l’agent lit les pages, clique, saisit du texte et passe d’un onglet à l’autre ; plusieurs tâches peuvent s’exécuter dans des groupes d’onglets distincts.',
            'Le README indique que Chrome et Edge sont pris en charge et que Firefox, Safari et les autres navigateurs Chromium (Opera, Arc, Brave) n’ont pas été testés. Le code est sur GitHub sous licence Apache 2.0 ; le dépôt a été créé le 31 décembre 2024, a reçu son dernier push le 17 novembre 2026, et la dernière version, 0.3.0, date du 15 octobre 2026 : le développement est donc actif.',
            'Selon le journal des modifications, la version 0.3.0 a reconstruit l’extension autour d’un seul agent dans le panneau latéral, et la version 0.2.0 a fait passer les appels de modèles de LangChain au Vercel AI SDK et supprimé les fournisseurs Groq, Cerebras et Llama API.',
          ],
        },
        getIt: {
          id: 'get-it',
          title: 'Comment l’obtenir',
          content: [
            '**Nanobrowser s’installe comme n’importe quelle extension de navigateur : ajoutez-la depuis le Chrome Web Store (une fiche Edge Add-ons est également indiquée), puis connectez un modèle.** Aucun terminal n’est nécessaire, sauf si vous utilisez un modèle local ou compilez depuis les sources.',
          ],
          columns: ['Voie', 'Comment l’obtenir'],
          rows: [
            { 'Voie': 'Chrome Web Store', 'Comment l’obtenir': '[Fiche Nanobrowser](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) (gratuit)' },
            { 'Voie': 'Microsoft Edge', 'Comment l’obtenir': '[Fiche Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/nanobrowser-ai-web-agent/ajdioenfpgabnjlclgckbbnjjhdnjkhn)' },
            { 'Voie': 'Site web', 'Comment l’obtenir': '[nanobrowser.ai](https://nanobrowser.ai)' },
            { 'Voie': 'Code source', 'Comment l’obtenir': '[GitHub](https://github.com/nanobrowser/nanobrowser) (Apache-2.0)' },
            { 'Voie': 'Politique de confidentialité', 'Comment l’obtenir': '[nanobrowser.ai/docs/privacy](https://nanobrowser.ai/docs/privacy)' },
            { 'Voie': 'Compiler depuis les sources', 'Comment l’obtenir': 'Node.js 24 LTS et pnpm 10' },
          ],
          codeBlock: '# Optional: build from source (Node.js 24 LTS, pnpm 10)\ncorepack enable\npnpm install\npnpm build\n\n# Local Ollama started by hand: allow the extension\nOLLAMA_ORIGINS="chrome-extension://*" ollama serve',
          codeLanguage: 'bash',
          note: 'Version testée : 0.3.0, publiée le 15 octobre 2026 d’après GitHub Releases ; la fiche du Chrome Web Store affiche 0.3.0, mise à jour le 16 octobre 2026. Dernière mise à jour en amont (push) le 17 novembre 2026. La release GitHub ne contient que nanobrowser-0.3.0.zip, un paquet non empaqueté pour le mode développeur.',
        },
        features: {
          id: 'features',
          title: 'Fonctionnalités',
          content: [
            '**Tout ce qui suit relève d’affirmations du projet tirées du README ou de la documentation ; PromptQuorum n’a rien testé de tout cela.**',
          ],
          items: [
            '**Chat dans le panneau latéral avec tâches en parallèle.** Plusieurs tâches peuvent s’exécuter dans des groupes d’onglets distincts, avec des pièces jointes (images, fichiers, captures d’écran) et des résultats enregistrés dans Téléchargements en CSV ou Markdown.',
            '**Modes Ask et Auto.** Le mode Ask (par défaut) affiche une carte d’approbation avant d’envoyer, de supprimer ou de téléverser ; le mode Auto l’ignore. Les paiements, mots de passe, codes et autorisations d’accès vous reviennent toujours, selon la documentation.',
            '**Règles par site.** Chaque site peut être réglé sur Allow, Ask ou Block ; une règle de site l’emporte sur le mode et s’applique à l’hôte exact.',
            '**Choix du modèle par chat.** Vous choisissez le modèle et l’effort de raisonnement pour chaque chat, et un bouton Test models dans les réglages signale les modèles sans appel d’outils.',
            '**Vision si le modèle la prend en charge.** Avec un modèle de vision, l’agent peut faire des captures d’écran et voir les images jointes ; sans lui, il lit les pages comme du texte.',
            '**Raccourcis, voix et mémoire.** Raccourcis de prompts enregistrés déclenchés par une barre oblique, saisie vocale, mémoire persistante et résumé automatique des longs chats.',
            '**Historique des chats avec export.** Les chats peuvent être exportés en Markdown, et le README mentionne des interfaces en anglais, en chinois simplifié et en chinois traditionnel.',
            '**Identifiants d’éléments.** Selon le README, une couche de contrôle sans aucun modèle d’IA attribue à chaque élément de page un identifiant stable, effectue de vraies saisies dans le navigateur et vérifie l’état avant d’agir, via l’API de débogage de Chrome et Puppeteer.',
          ],
        },
        privacy: {
          id: 'privacy',
          title: 'Confidentialité et flux de données',
          content: [
            '**Selon sa politique de confidentialité, Nanobrowser n’a pas de compte ni de serveur Nanobrowser qui reçoive les chats ou les pages : vos messages, fichiers joints, le contenu des onglets sur lesquels l’agent travaille et, pour les modèles de vision, les captures d’écran partent de votre navigateur vers le fournisseur de modèles que vous choisissez.** Avec un modèle local Ollama ou LM Studio, la politique indique que ces données restent sur votre ordinateur. Elle précise que les valeurs des champs de mot de passe, de carte et de code à usage unique sont retenues lorsqu’elles sont reconnues, et que les connexions et cookies restent dans le navigateur.',
            'La politique de confidentialité décrit deux autres flux. La saisie vocale, si elle est activée, envoie l’audio au modèle vocal d’OpenAI ou de Google que vous avez choisi, et la politique précise que les enregistrements ne sont pas conservés. Deux interrupteurs de télémétrie, tous deux activés par défaut, envoient un compteur quotidien anonyme et des totaux d’usage quotidiens (nombre de tâches, outils utilisés, codes d’erreur) à PostHog aux États-Unis, conservés un an ; selon la politique, ils n’incluent jamais de pages, de sites visités, de messages, de fichiers ni de clés, et les deux se désactivent dans Réglages, Données. La désinstallation ouvre un questionnaire facultatif Google Forms.',
            'La documentation des autorisations ajoute trois mises en garde : l’ouverture de pages ne demande jamais d’approbation, si bien qu’une page pourrait inciter l’agent à ouvrir une adresse qui emporte vos données ailleurs ; la saisie n’est pas bloquée, donc une page peut observer ce que l’agent saisit ; et l’injection de prompt est un risque : surveillez l’agent et utilisez Stop. Les textes de politique consultés sont datés du 13 octobre 2026 (GitHub) et du 18 octobre 2026 (site web) ; PromptQuorum n’a pas inspecté le trafic réseau.',
          ],
          callouts: [
            { type: 'note', text: 'Ce sont les déclarations du projet lui-même, pas des résultats d’audit. Pour des comptes professionnels ou clients, lisez d’abord la politique, utilisez un profil de navigateur distinct et gardez le mode Ask activé. Automatiser un site web peut enfreindre ses conditions d’utilisation ; vérifiez-les avant de lancer un agent sur un site. Il s’agit d’informations générales, pas de conseils de sécurité ou juridiques.' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: 'Tarifs et licence',
          content: [
            '**L’extension est gratuite sous licence Apache 2.0 ; vous payez votre fournisseur de modèles pour ce que vous utilisez.** La documentation indique que les longues tâches et les pages riches en texte coûtent davantage, et qu’un modèle local ne coûte rien à exécuter.',
            'Le site web et la fiche du Chrome Web Store ne montrent ni inscription, ni abonnement, ni offre payante. Selon la documentation, les clés d’API sont stockées dans le navigateur et envoyées uniquement à leur propre fournisseur.',
          ],
          columns: ['Élément', 'Coût', 'Remarques'],
          rows: [
            { 'Élément': 'Extension', 'Coût': 'Gratuit', 'Remarques': 'Apache-2.0, sans compte' },
            { 'Élément': 'Modèle cloud', 'Coût': 'Tarif du fournisseur', 'Remarques': 'Facturé par votre fournisseur' },
            { 'Élément': 'Modèle local', 'Coût': 'Gratuit à exécuter', 'Remarques': 'Votre matériel, contexte 16k+' },
          ],
          note: 'Les coûts dépendent du fournisseur et de la tâche. PromptQuorum n’a pas mesuré le coût par tâche.',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Pour qui',
          items: [
            'Les personnes qui veulent un agent d’IA dans leur Chrome ou Edge connecté, avec une étape d’approbation visible avant les actions sensibles.',
            'Les utilisateurs d’Ollama ou de LM Studio qui veulent essayer un agent de navigateur avec un modèle local et acceptent que la documentation conseille des tâches courtes et claires.',
            'Les développeurs qui veulent une base de code Apache-2.0 qu’ils peuvent compiler eux-mêmes avec Node.js 24 LTS et pnpm 10.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Limites et ce que nous n’avons pas pu vérifier',
          content: [
            '**Nanobrowser convient mal si le contenu des pages ne doit pas atteindre un modèle tiers, ou si une action manquée pourrait coûter de l’argent ou des données.** Plusieurs points restent non vérifiés.',
          ],
          items: [
            'Peu adapté : les tâches où un clic inaperçu cause un préjudice ; la documentation indique que les boutons réduits à une icône, les interrupteurs à enregistrement automatique et les actions de glisser-déposer peuvent être manqués et s’exécuter alors sans approbation, même en mode Ask.',
            'Peu adapté : Firefox, Safari ou d’autres navigateurs Chromium, que le README signale comme non testés.',
            'Non vérifié : taux de réussite, vitesse et coût par tâche ; les sources ne donnent aucun benchmark et PromptQuorum n’en a pas réalisé.',
            'Non vérifié : la qualité de pilotage de l’agent par les modèles locaux ; la documentation recommande un modèle pour l’usage local mais ne donne aucun chiffre de qualité.',
            'Non vérifié : l’entité juridique derrière le projet ; la politique de confidentialité ne nomme que « l’équipe Nanobrowser » avec une adresse de contact, sans nom d’entreprise, adresse ni pays.',
            'Non vérifié : si les déclarations de confidentialité se vérifient en pratique ; aucun audit indépendant n’a été trouvé.',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: 'Alternatives',
          content: [
            '**Nanobrowser est une extension de navigateur ; les alternatives du même segment de l’annuaire sont une bibliothèque Python, des navigateurs IA complets et un agent de bureau.** PromptQuorum ne les a pas comparées en pratique.',
          ],
          columns: ['Outil', 'Mentionné dans les sources'],
          rows: [
            { 'Outil': 'Nanobrowser', 'Mentionné dans les sources': 'Extension Chrome et Edge ; Apache-2.0 ; modèles cloud ou locaux' },
            { 'Outil': '[Browser Use](/fr/power-local-llm/browser-use-review)', 'Mentionné dans les sources': 'Bibliothèque Python et CLI pour scripter un agent de navigateur ; MIT ; cloud payant optionnel' },
            { 'Outil': '[BrowserOS](/fr/power-local-llm/browseros-review)', 'Mentionné dans les sources': 'Navigateur IA (fork de Chromium) pour Mac, Windows et Linux ; AGPL-3.0' },
            { 'Outil': '[LastBrowser](/fr/power-local-llm/lastbrowser-review)', 'Mentionné dans les sources': 'Navigateur de bureau pour Windows avec un panneau latéral IA, Sidekick' },
            { 'Outil': '[Local Operator](/fr/power-local-llm/local-operator-review)', 'Mentionné dans les sources': 'Application d’agent de bureau qui écrit et exécute du code sur votre ordinateur' },
          ],
        },
        faq: {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            {
              q: 'Nanobrowser fonctionne-t-il dans Firefox ou Brave ?',
              a: 'Le README ne mentionne que Chrome et Edge comme pris en charge et précise que Firefox, Safari et les autres navigateurs Chromium comme Opera, Arc et Brave n’ont pas été testés. PromptQuorum ne les a pas essayés.',
            },
            {
              q: 'Comment connecter Ollama ou LM Studio ?',
              a: 'Selon la documentation, définissez OLLAMA_ORIGINS sur chrome-extension://* et redémarrez Ollama, puis saisissez http://localhost:11434 comme adresse du serveur et cliquez sur Test models. LM Studio nécessite Enable CORS dans ses réglages Developer, avec le serveur sur le port 1234.',
            },
            {
              q: 'L’agent peut-il agir sans me demander ?',
              a: 'En mode Auto, il envoie, supprime et téléverse sans demander, mais les paiements, mots de passe, numéros de carte, codes à usage unique et autorisations d’accès vous reviennent toujours. Une règle de site réglée sur Ask impose une confirmation même en mode Auto, et Block interdit à l’agent de toucher au site.',
            },
            {
              q: 'Qu’est-ce qui a changé dans la version 0.3.0 ?',
              a: 'Selon le journal des modifications, un agent unique a remplacé le planificateur et le navigateur, le mode Ask est devenu le mode par défaut, et chaque élément de page a reçu un identifiant lié exactement à cet élément, de sorte que les clics visent le bon.',
            },
            {
              q: 'Plusieurs tâches peuvent-elles s’exécuter en même temps avec un modèle local ?',
              a: 'Elles peuvent démarrer dans des groupes d’onglets distincts, mais la documentation indique que chaque serveur Ollama ou LM Studio traite une requête à la fois, donc les tâches locales font la queue ; les serveurs ajoutés via le fournisseur compatible OpenAI, comme llama.cpp ou vLLM, ne font pas la queue.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Verdict',
          content: [
            '**Nanobrowser vaut le détour si vous voulez un agent d’IA open source dans Chrome ou Edge, avec des étapes d’approbation et la possibilité d’un modèle local, et si vous acceptez que rien n’a été testé ici.**',
            'Il est sous licence Apache-2.0, activement développé (dernier push le 17 novembre 2026, version 0.3.0 le 15 octobre 2026) et gratuit, hors frais de votre fournisseur de modèles. Les compromis : le contenu des pages va au fournisseur de modèles que vous choisissez, la documentation indique que certaines actions peuvent être manquées et s’exécuter sans approbation, les modèles locaux conviennent surtout aux tâches simples, et les taux de réussite et la vitesse ne reposent sur aucune donnée que nous ayons pu vérifier. PromptQuorum ne l’a pas testé ; commencez avec un profil de navigateur distinct et des tâches à faible risque.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Site web de Nanobrowser](https://nanobrowser.ai) — description du produit et liens d’installation, consulté le 20 novembre 2026.',
            '[Documentation des modèles](https://nanobrowser.ai/docs/models) — fournisseurs, appel d’outils et tarifs, consultée le 20 novembre 2026.',
            '[Documentation des modèles locaux](https://nanobrowser.ai/docs/local-models) — configuration d’Ollama et de LM Studio, consultée le 20 novembre 2026.',
            '[Documentation des autorisations](https://nanobrowser.ai/docs/permissions) — modes Ask et Auto, règles de site et mises en garde, consultée le 20 novembre 2026.',
            '[Page de confidentialité](https://nanobrowser.ai/docs/privacy) — flux de données et télémétrie, datée du 18 octobre 2026, consultée le 20 novembre 2026.',
            '[PRIVACY.md](https://github.com/nanobrowser/nanobrowser/blob/master/PRIVACY.md) — politique de confidentialité sur GitHub, datée du 13 octobre 2026, consultée le 20 novembre 2026.',
            '[Journal des modifications](https://nanobrowser.ai/changelog) — versions 0.1.9 à 0.3.0, consulté le 20 novembre 2026.',
            '[Dépôt GitHub et README](https://github.com/nanobrowser/nanobrowser) — licence, étapes d’installation et dernier push, consultés le 20 novembre 2026.',
            '[Release 0.3.0](https://github.com/nanobrowser/nanobrowser/releases/tag/v0.3.0) — dernière version, publiée le 15 octobre 2026.',
            '[Fiche du Chrome Web Store](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) — version 0.3.0, mise à jour le 16 octobre 2026, gratuite, consultée le 20 novembre 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures associées',
          items: [
            '[Test de Browser Use](/fr/power-local-llm/browser-use-review) — une bibliothèque Python et CLI open source pour agents de navigateur.',
            '[Test de BrowserOS](/fr/power-local-llm/browseros-review) — un navigateur IA avec assistant intégré.',
            '[Test de LastBrowser](/fr/power-local-llm/lastbrowser-review) — un navigateur de bureau avec panneau latéral IA.',
            '[Test de Local Operator](/fr/power-local-llm/local-operator-review) — une application d’agent de bureau qui exécute du code sur votre ordinateur.',
            '[Annuaire des logiciels de LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locaux.',
          ],
        },
      },
    },
    ja: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-20',
      dateModified: '2026-11-20',
      next_refresh_due: '2027-05-20',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/nanobrowser-review-hero-ja.webp',
      title: 'Nanobrowser レビュー：Chrome・Edge向け無料オープンソースAIブラウザエージェント',
      seoTitle: 'Nanobrowser レビュー：無料のAIブラウザエージェント',
      intro:
        'Nanobrowserは、ChromeとEdge向けの無料のオープンソースのブラウザ拡張機能で、サイドパネルでAIエージェントが動作します。タスクを伝えると、ページの閲覧、クリック、入力、タブの切り替えを代行します。接続したAIモデル（クラウドプロバイダー、またはOllamaやLM Studio経由のローカルモデル）を使います。このレビューは2026年11月20日に確認したプロジェクトのWebサイト、ドキュメント、GitHubリポジトリ、プライバシーポリシーに基づいており、PromptQuorumは拡張機能をテストしていません。',
      metaDescription:
        'Nanobrowserは、ChromeとEdge向けの無料オープンソースAIブラウザエージェント。クラウドモデルやローカルOllamaに対応。プライバシーと制約を解説。未検証。',
      twitterDescription:
        'Nanobrowserレビュー：ChromeとEdgeのサイドパネルで動く無料のオープンソースAIエージェント。機能、データの流れ、確認できなかった点。',
      audience:
        '自分のChromeやEdgeでAIエージェントを使いたい人、OllamaやLM Studioのユーザー、ブラウザエージェントを比較する読者',
      readTime: '6分で読める',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Nanobrowser',
      targetKeywords: [
        'Nanobrowser レビュー',
        'Nanobrowser AIブラウザエージェント',
        'Nanobrowser Ollama',
        'Nanobrowser プライバシー',
        'Nanobrowser Chrome拡張機能',
        'Nanobrowser 代替',
      ],
      current_models_mentioned: ['Ollama', 'LM Studio'],
      leadAnswerBlock:
        '**Nanobrowser（バージョン0.3.0、2026年10月15日公開）は、ChromeまたはEdgeのサイドパネルでAIエージェントを動かす、Apache-2.0ライセンスの無料ブラウザ拡張機能で、接続したクラウドモデルまたはローカルモデルを使います。** ページの内容はそのモデルプロバイダーに送られ、ドキュメントによれば、OllamaやLM Studioのローカルモデルならお使いのコンピューター内にとどまります。ここに書いた内容はすべてプロジェクト自身のWebサイト、ドキュメント、ポリシーに基づいており、PromptQuorumはテストしていません。',
      quickAnswerTop: {
        ja: {
          question: 'Nanobrowserは無料で、ローカルモデルも使えますか？',
          answer:
            '拡張機能は無料でアカウントも不要で、費用はモデルプロバイダーにのみ支払います。OllamaやLM Studioのローカルモデルも使えますが、ドキュメントによればモデルはツール呼び出しに対応している必要があり、ローカルモデルは短く明確なタスク向きです。',
          bullets: [
            'Chrome Web Storeからワンクリックで導入できます。Edgeアドオンのページも案内されています。',
            'Askモード（既定）は送信・削除・アップロードの前に確認し、Autoモードは確認しません。',
            'ローカル設定：OllamaではOLLAMA_ORIGINSで拡張機能を許可し、LM StudioではCORSを有効にします。',
            '匿名の利用カウントは既定でオンで、設定からオフにできます。',
          ],
          updatedDate: '2026-11',
        },
      },
      toc: [
        { label: '重要ポイント', anchor: 'tldr' },
        { label: '概要', anchor: 'overview' },
        { label: '入手方法', anchor: 'get-it' },
        { label: '機能', anchor: 'features' },
        { label: 'プライバシーとデータの流れ', anchor: 'privacy' },
        { label: '料金とライセンス', anchor: 'pricing' },
        { label: '向いている人', anchor: 'who-should-use' },
        { label: '制約と確認できなかった点', anchor: 'who-should-not-use' },
        { label: '代替ツール', anchor: 'alternatives' },
        { label: 'よくある質問', anchor: 'faq' },
        { label: '総評', anchor: 'verdict' },
        { label: '出典', anchor: 'sources' },
        { label: '関連記事', anchor: 'related-reading' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          title: '重要ポイント',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'Nanobrowserは、ChromeとEdge向けの無料のオープンソース拡張機能で、ログイン済みの自分のブラウザ上でAIエージェントがページを読み、クリックし、入力します。接続したクラウドモデルまたはローカルモデルを使います。' },
            { type: 'plain-terms', text: 'サイドパネルにタスクを入力すると、エージェントが開いているタブで作業し、送信や削除などの重要な操作の前に確認を求めます。モデルがページを読むため、ページの内容は選んだモデルに送られます。' },
          ],
          items: [
            'メンテナンス：リポジトリの最終プッシュは2026年11月17日、最新リリース0.3.0は2026年10月15日のため、放置プロジェクトの警告は該当しません。',
            'ライセンス：Apache-2.0。拡張機能は無料で、モデルプロバイダーに直接支払います。',
            '再構築：変更履歴によると、バージョン0.3.0で従来のプランナーとナビゲーターが単一のエージェントに置き換わりました。',
            'モデル：ツール呼び出しに対応したモデルが必要です。クラウドはAnthropic、OpenAI、Google Gemini、AWS Bedrock、OpenRouter、xAI、DeepSeek、Mistralなど、またはOpenAI互換のエンドポイントに対応します。',
            '安全性：ドキュメントは、Webページがエージェントを誘導してデータを外部に運ぶアドレスを開かせる可能性があると警告し、操作を見守るよう勧めています。',
          ],
          callouts: [
            { type: 'note', text: 'このレビューは2026年11月20日に確認したプロジェクトのWebサイト、ドキュメント、GitHubリポジトリ、プライバシーポリシーに基づいています。PromptQuorumはNanobrowserをインストールも実行もしていないため、成功率、速度、タスクあたりのコストは評価していません。ログイン済みブラウザでクリックや入力を行うエージェントは、意図しない操作をする可能性があります。一般的な情報であり、セキュリティ上の助言ではありません。' },
          ],
        },
        overview: {
          id: 'overview',
          title: '概要',
          content: [
            '**Nanobrowserは、別のブラウザではなく、ログイン済みの自分のブラウザの中で動くAIエージェントです。** READMEとWebサイトによれば、サイドパネル（ツールバーのアイコンまたはAlt+Shift+Nで開く）にタスクを入力すると、エージェントがページを読み、クリックし、入力し、タブ間を移動します。複数のタスクを別々のタブグループで実行できます。',
            'READMEはChromeとEdgeを対応ブラウザとし、Firefox、Safari、その他のChromium系ブラウザ（Opera、Arc、Brave）は未検証としています。コードはApache License 2.0でGitHubに公開されており、リポジトリは2024年12月31日に作成され、最終プッシュは2026年11月17日、最新リリース0.3.0は2026年10月15日なので、開発は活発です。',
            '変更履歴によれば、バージョン0.3.0はサイドパネルの単一のエージェントを中心に拡張機能を作り直し、バージョン0.2.0はモデル呼び出しをLangChainからVercel AI SDKへ移し、Groq、Cerebras、Llama APIの各プロバイダーを削除しました。',
          ],
        },
        getIt: {
          id: 'get-it',
          title: '入手方法',
          content: [
            '**Nanobrowserは一般的なブラウザ拡張機能と同じように、Chrome Web Store（Edgeアドオンのページも案内あり）から追加し、モデルを接続して使います。** ローカルモデルを使う場合やソースからビルドする場合を除き、ターミナルは不要です。',
          ],
          columns: ['方法', '入手方法'],
          rows: [
            { '方法': 'Chrome Web Store', '入手方法': '[Nanobrowserのページ](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal)（無料）' },
            { '方法': 'Microsoft Edge', '入手方法': '[Edgeアドオンのページ](https://microsoftedge.microsoft.com/addons/detail/nanobrowser-ai-web-agent/ajdioenfpgabnjlclgckbbnjjhdnjkhn)' },
            { '方法': 'Webサイト', '入手方法': '[nanobrowser.ai](https://nanobrowser.ai)' },
            { '方法': 'ソースコード', '入手方法': '[GitHub](https://github.com/nanobrowser/nanobrowser)（Apache-2.0）' },
            { '方法': 'プライバシーポリシー', '入手方法': '[nanobrowser.ai/docs/privacy](https://nanobrowser.ai/docs/privacy)' },
            { '方法': 'ソースからビルド', '入手方法': 'Node.js 24 LTSとpnpm 10' },
          ],
          codeBlock: '# Optional: build from source (Node.js 24 LTS, pnpm 10)\ncorepack enable\npnpm install\npnpm build\n\n# Local Ollama started by hand: allow the extension\nOLLAMA_ORIGINS="chrome-extension://*" ollama serve',
          codeLanguage: 'bash',
          note: '確認したバージョン：0.3.0。GitHub Releasesでは2026年10月15日に公開されており、Chrome Web Storeのページは0.3.0（2026年10月16日更新）と表示しています。最後のアップストリーム更新（プッシュ）は2026年11月17日です。GitHubのリリースにはnanobrowser-0.3.0.zip（開発者モード用の未パッケージ版）のみが含まれます。',
        },
        features: {
          id: 'features',
          title: '機能',
          content: [
            '**以下はすべてREADMEまたはドキュメントに基づくプロジェクト側の説明であり、PromptQuorumはどれもテストしていません。**',
          ],
          items: [
            '**並列タスクに対応したサイドパネルのチャット。** 複数のタスクを別々のタブグループで実行でき、画像・ファイル・スクリーンショットを添付でき、結果はCSVやMarkdownとしてダウンロードフォルダーに保存されます。',
            '**AskモードとAutoモード。** Askモード（既定）は送信・削除・アップロードの前に承認カードを表示し、Autoモードは表示しません。ドキュメントによれば、支払い、パスワード、コード、アクセス許可は常に利用者に任されます。',
            '**サイトごとのルール。** 各サイトをAllow、Ask、Blockに設定でき、サイトのルールはモードより優先され、完全一致のホストに適用されます。',
            '**チャットごとのモデル選択。** チャットごとにモデルと推論の強度を選べ、設定のTest modelsボタンでツール呼び出しに非対応のモデルが示されます。',
            '**モデルが対応していれば画像も利用。** ビジョンモデルならエージェントはスクリーンショットを撮り、添付画像を見られます。非対応ならページをテキストとして読みます。',
            '**ショートカット、音声、メモリ。** スラッシュで呼び出す保存済みプロンプトのショートカット、音声入力、永続メモリ、長いチャットの自動要約があります。',
            '**エクスポート付きのチャット履歴。** チャットをMarkdownにエクスポートでき、READMEは英語、簡体字中国語、繁体字中国語のインターフェースを挙げています。',
            '**要素ID。** READMEによれば、AIモデルを含まない制御層が各ページ要素に安定したIDを付け、実際のブラウザ入力を行い、操作前に状態を確認します。ChromeのデバッガーAPIとPuppeteerを使います。',
          ],
        },
        privacy: {
          id: 'privacy',
          title: 'プライバシーとデータの流れ',
          content: [
            '**プライバシーポリシーによれば、Nanobrowserにはアカウントがなく、チャットやページを受け取るNanobrowserのサーバーもありません。メッセージ、添付ファイル、エージェントが作業するタブの内容、ビジョンモデルの場合はスクリーンショットが、お使いのブラウザから選んだモデルプロバイダーに送られます。** OllamaやLM Studioのローカルモデルなら、ポリシーによればこれらのデータはお使いのコンピューター内にとどまります。さらに、パスワード、カード、ワンタイムコードの入力欄の値は認識された場合は送られず、ログイン情報とCookieはブラウザ内に残ります。',
            'プライバシーポリシーには、ほかに2つのデータの流れが記されています。音声入力を有効にすると、選んだOpenAIまたはGoogleの音声モデルに音声が送られ、ポリシーは録音を保存しないとしています。既定でオンの2つのテレメトリースイッチは、匿名の日次カウントと日次の利用合計（タスク数、使用したツール、エラーコード）を米国のPostHogに送り、1年間保持されます。ポリシーによれば、ページ、訪問したサイト、メッセージ、ファイル、キーは含まれず、どちらも設定のデータ項目からオフにできます。アンインストール時には任意のGoogleフォームのアンケートが開きます。',
            '権限のドキュメントは3つの注意点を挙げています。ページを開く操作に承認は不要なため、ページがエージェントを誘導してデータを外部に運ぶアドレスを開かせる可能性があること。入力は制限されないため、ページはエージェントの入力内容を観察できること。プロンプトインジェクションのリスクがあるため、エージェントを見守り、Stopを使うことです。確認したポリシー文書の日付は2026年10月13日（GitHub）と2026年10月18日（Webサイト）で、PromptQuorumはネットワーク通信を検査していません。',
          ],
          callouts: [
            { type: 'note', text: 'これらはプロジェクト自身の説明であり、監査結果ではありません。仕事用や顧客のアカウントでは、先にポリシーを読み、別のブラウザプロファイルを使い、Askモードをオンのままにしてください。Webサイトの自動操作は利用規約に違反する場合があるため、エージェントを向ける前に規約を確認してください。一般的な情報であり、セキュリティや法律上の助言ではありません。' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: '料金とライセンス',
          content: [
            '**拡張機能はApache License 2.0で無料で、利用分はモデルプロバイダーに支払います。** ドキュメントによれば、長いタスクやテキストの多いページはコストが高くなり、ローカルモデルは実行に費用がかかりません。',
            'WebサイトとChrome Web Storeのページには、登録、サブスクリプション、有料プランの記載がありません。ドキュメントによれば、APIキーはブラウザに保存され、それぞれのプロバイダーにのみ送られます。',
          ],
          columns: ['項目', '費用', '備考'],
          rows: [
            { '項目': '拡張機能', '費用': '無料', '備考': 'Apache-2.0、アカウント不要' },
            { '項目': 'クラウドモデル', '費用': 'プロバイダーの料金', '備考': 'プロバイダーが請求' },
            { '項目': 'ローカルモデル', '費用': '実行は無料', '備考': '自分のハード、16k以上のコンテキスト' },
          ],
          note: '費用はプロバイダーとタスクによって変わります。PromptQuorumはタスクあたりのコストを測定していません。',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: '向いている人',
          items: [
            'ログイン済みのChromeやEdgeの中でAIエージェントを使いたく、重要な操作の前に目に見える承認手順がほしい人。',
            'OllamaやLM Studioを使っていて、ローカルモデルでブラウザエージェントを試したく、ドキュメントが短く明確なタスクを勧めていることを受け入れられる人。',
            'Node.js 24 LTSとpnpm 10で自分でビルドできるApache-2.0のコードベースがほしい開発者。',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '制約と確認できなかった点',
          content: [
            '**ページの内容を第三者のモデルに渡せない場合や、見落とされた操作が金銭やデータの損失につながりうる場合、Nanobrowserは向きません。** 確認できていない点も複数あります。',
          ],
          items: [
            '不向き：気づかないクリックが害になるタスク。ドキュメントによれば、アイコンのみのボタン、自動保存のスイッチ、ドラッグ＆ドロップ操作は見落とされ、Askモードでも承認なしで実行されることがあります。',
            '不向き：Firefox、Safari、その他のChromium系ブラウザ（READMEは未検証としています）。',
            '未確認：タスクの成功率、速度、タスクあたりのコスト。情報源にベンチマークはなく、PromptQuorumも実施していません。',
            '未確認：ローカルモデルがエージェントをどの程度うまく動かせるか。ドキュメントはローカル用のモデルを推奨していますが、品質の数値は示していません。',
            '未確認：プロジェクトの背後にある法人。プライバシーポリシーは連絡先とともに「Nanobrowserチーム」とのみ記し、会社名、住所、国は記載していません。',
            '未確認：プライバシーに関する記述が実際に守られているか。独立した監査は見当たりませんでした。',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: '代替ツール',
          content: [
            '**Nanobrowserはブラウザ拡張機能で、同じディレクトリ区分の代替は、Pythonライブラリ、AIブラウザ本体、デスクトップエージェントです。** PromptQuorumは実機で比較していません。',
          ],
          columns: ['ツール', '出典での扱い'],
          rows: [
            { 'ツール': 'Nanobrowser', '出典での扱い': 'ChromeとEdgeの拡張機能。Apache-2.0。クラウドまたはローカルモデル' },
            { 'ツール': '[Browser Use](/ja/power-local-llm/browser-use-review)', '出典での扱い': 'ブラウザエージェントを組むPythonライブラリとCLI。MIT。有料クラウドは任意' },
            { 'ツール': '[BrowserOS](/ja/power-local-llm/browseros-review)', '出典での扱い': 'Mac・Windows・Linux向けのAIブラウザ（Chromiumのフォーク）。AGPL-3.0' },
            { 'ツール': '[LastBrowser](/ja/power-local-llm/lastbrowser-review)', '出典での扱い': 'AIサイドバー「Sidekick」を内蔵したWindows向けデスクトップブラウザ' },
            { 'ツール': '[Local Operator](/ja/power-local-llm/local-operator-review)', '出典での扱い': 'コンピューター上でコードを書いて実行するデスクトップエージェントアプリ' },
          ],
        },
        faq: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'NanobrowserはFirefoxやBraveで動きますか？',
              a: 'READMEが対応としているのはChromeとEdgeのみで、Firefox、Safari、Opera・Arc・BraveなどのChromium系ブラウザは未検証としています。PromptQuorumは試していません。',
            },
            {
              q: 'OllamaやLM Studioはどう接続しますか？',
              a: 'ドキュメントによれば、OLLAMA_ORIGINSをchrome-extension://*に設定してOllamaを再起動し、サーバーアドレスにhttp://localhost:11434を入力してTest modelsをクリックします。LM StudioはDeveloper設定でEnable CORSをオンにし、サーバーをポート1234で動かします。',
            },
            {
              q: 'エージェントは確認なしで動けますか？',
              a: 'Autoモードでは確認なしで送信・削除・アップロードを行いますが、支払い、パスワード、カード番号、ワンタイムコード、アクセス許可は引き続き利用者に任されます。Askに設定したサイトルールはAutoモードでも確認を求め、Blockはエージェントがそのサイトに触れないようにします。',
            },
            {
              q: 'バージョン0.3.0では何が変わりましたか？',
              a: '変更履歴によれば、単一のエージェントがプランナーとナビゲーターに置き換わり、Askモードが既定になり、各ページ要素にその要素だけに結びついたIDが付いたため、クリックが意図した対象に当たります。',
            },
            {
              q: 'ローカルモデルで複数のタスクを同時に動かせますか？',
              a: '別々のタブグループで開始はできますが、ドキュメントによればOllamaやLM Studioのサーバーは一度に1件のリクエストを処理するため、ローカルのタスクは順番待ちになります。OpenAI互換プロバイダー経由のllama.cppやvLLMなどのサーバーは順番待ちにしません。',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '総評',
          content: [
            '**承認手順とローカルモデルという選択肢を備えたオープンソースのAIエージェントをChromeやEdgeで使いたく、ここでは何もテストしていないことを受け入れられるなら、Nanobrowserは試す価値があります。**',
            'Apache-2.0で、開発は活発（最終プッシュ2026年11月17日、リリース0.3.0は2026年10月15日）、モデルプロバイダーの料金を除けば無料です。トレードオフは、ページの内容が選んだモデルプロバイダーに送られること、ドキュメントによれば一部の操作は見落とされて承認なしで実行されうること、ローカルモデルは単純なタスク向きであること、成功率と速度には確認できたデータがないことです。PromptQuorumはテストしていません。別のブラウザプロファイルとリスクの低いタスクから始めてください。',
          ],
        },
        sources: {
          id: 'sources',
          title: '出典',
          items: [
            '[Nanobrowser Webサイト](https://nanobrowser.ai) — 製品説明とインストールリンク。2026年11月20日確認。',
            '[モデルのドキュメント](https://nanobrowser.ai/docs/models) — プロバイダー、ツール呼び出し、料金。2026年11月20日確認。',
            '[ローカルモデルのドキュメント](https://nanobrowser.ai/docs/local-models) — OllamaとLM Studioの設定。2026年11月20日確認。',
            '[権限のドキュメント](https://nanobrowser.ai/docs/permissions) — Ask・Autoモード、サイトルール、警告。2026年11月20日確認。',
            '[プライバシーのページ](https://nanobrowser.ai/docs/privacy) — データの流れとテレメトリー。日付は2026年10月18日、2026年11月20日確認。',
            '[PRIVACY.md](https://github.com/nanobrowser/nanobrowser/blob/master/PRIVACY.md) — GitHub上のプライバシーポリシー。日付は2026年10月13日、2026年11月20日確認。',
            '[変更履歴](https://nanobrowser.ai/changelog) — バージョン0.1.9から0.3.0。2026年11月20日確認。',
            '[GitHubリポジトリとREADME](https://github.com/nanobrowser/nanobrowser) — ライセンス、インストール手順、最終プッシュ。2026年11月20日確認。',
            '[リリース0.3.0](https://github.com/nanobrowser/nanobrowser/releases/tag/v0.3.0) — 最新リリース。2026年10月15日公開。',
            '[Chrome Web Storeのページ](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) — バージョン0.3.0、2026年10月16日更新、無料。2026年11月20日確認。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連記事',
          items: [
            '[Browser Use レビュー](/ja/power-local-llm/browser-use-review) — ブラウザエージェント向けのオープンソースPythonライブラリとCLI。',
            '[BrowserOS レビュー](/ja/power-local-llm/browseros-review) — アシスタントを内蔵したAIブラウザ。',
            '[LastBrowser レビュー](/ja/power-local-llm/lastbrowser-review) — AIサイドバー付きのデスクトップブラウザ。',
            '[Local Operator レビュー](/ja/power-local-llm/local-operator-review) — コンピューター上でコードを実行するデスクトップエージェントアプリ。',
            '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
          ],
        },
      },
    },
    pt: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-20',
      dateModified: '2026-11-20',
      next_refresh_due: '2027-05-20',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/nanobrowser-review-hero-pt.webp',
      title: 'Análise do Nanobrowser: agente de navegador com IA gratuito e de código aberto para Chrome e Edge',
      seoTitle: 'Análise do Nanobrowser: agente de IA grátis para Chrome',
      intro:
        'O Nanobrowser é uma extensão de navegador gratuita e de código aberto para Chrome e Edge em que um agente de IA trabalha em um painel lateral: você descreve uma tarefa e ele lê páginas, clica, digita e troca de aba por você. Ele usa o modelo de IA que você conectar, seja um provedor na nuvem ou um modelo local via Ollama ou LM Studio. Esta análise se baseia no site, na documentação, no repositório do GitHub e na política de privacidade do projeto, consultados em 20 de novembro de 2026; a PromptQuorum não testou a extensão.',
      metaDescription:
        'O Nanobrowser é um agente de IA gratuito e de código aberto para Chrome e Edge, com modelos na nuvem ou Ollama local. Privacidade, modos e limites.',
      twitterDescription:
        'Análise do Nanobrowser: um agente de IA gratuito e de código aberto no painel lateral do Chrome e do Edge. O que faz, para onde vão os dados e o que não conseguimos verificar.',
      audience:
        'Pessoas que querem um agente de IA dentro do próprio Chrome ou Edge, usuários de Ollama e LM Studio e leitores que comparam agentes de navegador',
      readTime: '6 min de leitura',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Nanobrowser',
      targetKeywords: [
        'análise do Nanobrowser',
        'Nanobrowser agente de navegador com IA',
        'Nanobrowser Ollama',
        'Nanobrowser privacidade',
        'Nanobrowser extensão do Chrome',
        'alternativas ao Nanobrowser',
      ],
      current_models_mentioned: ['Ollama', 'LM Studio'],
      leadAnswerBlock:
        '**O Nanobrowser (versão 0.3.0, lançada em 15 de outubro de 2026) é uma extensão de navegador gratuita com licença Apache-2.0 que executa um agente de IA no painel lateral do Chrome ou do Edge, com o modelo na nuvem ou local que você conectar.** O conteúdo das páginas vai para esse provedor de modelos; segundo a documentação, com um modelo local do Ollama ou do LM Studio ele fica no seu computador. Tudo o que se afirma aqui vem do site, da documentação e da política do próprio projeto; a PromptQuorum não o testou.',
      quickAnswerTop: {
        pt: {
          question: 'O Nanobrowser é gratuito e pode usar um modelo local?',
          answer:
            'A extensão é gratuita e não exige conta; você paga apenas ao seu provedor de modelos. Ela pode usar um modelo local do Ollama ou do LM Studio, mas a documentação diz que o modelo precisa oferecer suporte a chamadas de ferramentas e que modelos locais funcionam melhor em tarefas curtas e claras.',
          bullets: [
            'Instala-se com um clique pela Chrome Web Store; um link para a página no Edge Add-ons também é indicado.',
            'O modo Ask (padrão) pergunta antes de enviar, excluir ou fazer upload; o modo Auto não.',
            'Configuração local: permitir a extensão no Ollama com OLLAMA_ORIGINS ou ativar o CORS no LM Studio.',
            'Os contadores de uso anônimos vêm ativados por padrão e podem ser desligados nas Configurações.',
          ],
          updatedDate: '2026-11',
        },
      },
      toc: [
        { label: 'Pontos principais', anchor: 'tldr' },
        { label: 'Visão geral', anchor: 'overview' },
        { label: 'Como obter', anchor: 'get-it' },
        { label: 'Recursos', anchor: 'features' },
        { label: 'Privacidade e fluxo de dados', anchor: 'privacy' },
        { label: 'Preços e licença', anchor: 'pricing' },
        { label: 'Para quem serve', anchor: 'who-should-use' },
        { label: 'Limites e o que não conseguimos verificar', anchor: 'who-should-not-use' },
        { label: 'Alternativas', anchor: 'alternatives' },
        { label: 'Perguntas frequentes', anchor: 'faq' },
        { label: 'Veredito', anchor: 'verdict' },
        { label: 'Fontes', anchor: 'sources' },
        { label: 'Leituras relacionadas', anchor: 'related-reading' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          title: 'Pontos principais',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'O Nanobrowser é uma extensão gratuita e de código aberto para Chrome e Edge em que um agente de IA lê páginas, clica e digita no seu próprio navegador com a sessão iniciada, usando um modelo na nuvem ou local que você conecta.' },
            { type: 'plain-terms', text: 'Você digita uma tarefa no painel lateral, o agente trabalha nas suas abas abertas e pergunta antes de etapas delicadas, como enviar ou excluir. O modelo lê as páginas, então o conteúdo delas vai para o modelo que você escolher.' },
          ],
          items: [
            'Manutenção: o repositório recebeu o último push em 17 de novembro de 2026 e a versão mais recente, 0.3.0, é de 15 de outubro de 2026; por isso não se aplica aviso de projeto abandonado.',
            'Licença: Apache-2.0; a extensão é gratuita e você paga diretamente ao seu provedor de modelos.',
            'Reconstrução: segundo o registro de alterações, a versão 0.3.0 substituiu o antigo planejador e navegador por um único agente.',
            'Modelos: exige um modelo com chamadas de ferramentas; entre as opções na nuvem estão Anthropic, OpenAI, Google Gemini, AWS Bedrock, OpenRouter, xAI, DeepSeek e Mistral, ou qualquer endpoint compatível com a OpenAI.',
            'Segurança: a documentação alerta que uma página da web pode enganar o agente para abrir um endereço que leve seus dados a outro lugar e recomenda acompanhar as ações dele.',
          ],
          callouts: [
            { type: 'note', text: 'Esta análise se baseia no site, na documentação, no repositório do GitHub e na política de privacidade do projeto, consultados em 20 de novembro de 2026. A PromptQuorum não instalou nem executou o Nanobrowser, portanto taxas de sucesso, velocidade e custo por tarefa não foram avaliados. Um agente que clica e digita no seu navegador com a sessão iniciada pode realizar ações que você não pretendia. São informações gerais, não aconselhamento de segurança.' },
          ],
        },
        overview: {
          id: 'overview',
          title: 'Visão geral',
          content: [
            '**O Nanobrowser é um agente de IA que trabalha dentro do seu próprio navegador, com a sessão iniciada, e não em um navegador separado.** Segundo o README e o site, você descreve uma tarefa no painel lateral (aberto pelo ícone da barra de ferramentas ou com Alt+Shift+N), e o agente lê páginas, clica, digita e se move entre abas; várias tarefas podem rodar em grupos de abas separados.',
            'O README lista Chrome e Edge como compatíveis e Firefox, Safari e outros navegadores baseados em Chromium (Opera, Arc, Brave) como não testados. O código está no GitHub sob a Apache License 2.0; o repositório foi criado em 31 de dezembro de 2024, recebeu o último push em 17 de novembro de 2026, e a versão mais recente, 0.3.0, é de 15 de outubro de 2026, então o desenvolvimento está ativo.',
            'O registro de alterações diz que a versão 0.3.0 reconstruiu a extensão em torno de um único agente no painel lateral, e que a versão 0.2.0 passou as chamadas de modelos do LangChain para o Vercel AI SDK e removeu os provedores Groq, Cerebras e Llama API.',
          ],
        },
        getIt: {
          id: 'get-it',
          title: 'Como obter',
          content: [
            '**O Nanobrowser é instalado como qualquer extensão de navegador: adicione-o pela Chrome Web Store (um link para a página no Edge Add-ons também é indicado) e depois conecte um modelo.** Não é preciso terminal, a menos que você use um modelo local ou compile a partir do código-fonte.',
          ],
          columns: ['Caminho', 'Como obter'],
          rows: [
            { 'Caminho': 'Chrome Web Store', 'Como obter': '[Página do Nanobrowser](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) (grátis)' },
            { 'Caminho': 'Microsoft Edge', 'Como obter': '[Página no Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/nanobrowser-ai-web-agent/ajdioenfpgabnjlclgckbbnjjhdnjkhn)' },
            { 'Caminho': 'Site', 'Como obter': '[nanobrowser.ai](https://nanobrowser.ai)' },
            { 'Caminho': 'Código-fonte', 'Como obter': '[GitHub](https://github.com/nanobrowser/nanobrowser) (Apache-2.0)' },
            { 'Caminho': 'Política de privacidade', 'Como obter': '[nanobrowser.ai/docs/privacy](https://nanobrowser.ai/docs/privacy)' },
            { 'Caminho': 'Compilar do código-fonte', 'Como obter': 'Node.js 24 LTS e pnpm 10' },
          ],
          codeBlock: '# Optional: build from source (Node.js 24 LTS, pnpm 10)\ncorepack enable\npnpm install\npnpm build\n\n# Local Ollama started by hand: allow the extension\nOLLAMA_ORIGINS="chrome-extension://*" ollama serve',
          codeLanguage: 'bash',
          note: 'Versão analisada: 0.3.0, lançada em 15 de outubro de 2026 segundo o GitHub Releases; a página da Chrome Web Store mostra 0.3.0, atualizada em 16 de outubro de 2026. Última atualização upstream (push) em 17 de novembro de 2026. A release do GitHub traz apenas nanobrowser-0.3.0.zip, um pacote descompactado para o modo de desenvolvedor.',
        },
        features: {
          id: 'features',
          title: 'Recursos',
          content: [
            '**Tudo o que segue são afirmações do projeto, vindas do README ou da documentação; a PromptQuorum não testou nada disso.**',
          ],
          items: [
            '**Chat no painel lateral com tarefas em paralelo.** Várias tarefas podem rodar em grupos de abas separados, com anexos de imagens, arquivos e capturas de tela e resultados salvos em Downloads como CSV ou Markdown.',
            '**Modos Ask e Auto.** O modo Ask (padrão) mostra um cartão de aprovação antes de enviar, excluir ou fazer upload; o modo Auto o dispensa. Pagamentos, senhas, códigos e concessões de acesso ficam sempre com você, segundo a documentação.',
            '**Regras por site.** Cada site pode ser definido como Allow, Ask ou Block; uma regra de site prevalece sobre o modo e vale para o host exato.',
            '**Escolha do modelo por chat.** Você escolhe o modelo e o esforço de raciocínio de cada chat, e um botão Test models nas Configurações marca os modelos sem chamadas de ferramentas.',
            '**Visão quando o modelo oferece.** Com um modelo de visão, o agente pode tirar capturas de tela e ver imagens anexadas; sem ele, lê as páginas como texto.',
            '**Atalhos, voz e memória.** Atalhos de prompts salvos acionados com uma barra, entrada de voz, memória persistente e resumo automático de chats longos.',
            '**Histórico de chats com exportação.** Os chats podem ser exportados para Markdown, e o README lista interfaces em inglês, chinês simplificado e chinês tradicional.',
            '**IDs de elementos.** Segundo o README, uma camada de controle sem nenhum modelo de IA dá a cada elemento da página um ID estável, faz entradas reais no navegador e verifica o estado antes de agir, usando a API de depuração do Chrome e o Puppeteer.',
          ],
        },
        privacy: {
          id: 'privacy',
          title: 'Privacidade e fluxo de dados',
          content: [
            '**Segundo a política de privacidade, o Nanobrowser não tem conta nem um servidor do Nanobrowser que receba chats ou páginas: suas mensagens, os arquivos anexados, o conteúdo das abas em que o agente trabalha e, em modelos de visão, as capturas de tela vão do seu navegador para o provedor de modelos que você escolher.** Com um modelo local do Ollama ou do LM Studio, a política diz que esses dados ficam no seu computador. Ela acrescenta que os valores de campos de senha, cartão e código de uso único são retidos quando reconhecidos, e que logins e cookies permanecem no navegador.',
            'A política de privacidade descreve mais dois fluxos. A entrada de voz, se ativada, envia áudio ao modelo de voz da OpenAI ou do Google escolhido, e a política diz que as gravações não são guardadas. Dois interruptores de telemetria, ambos ativados por padrão, enviam uma contagem diária anônima e totais diários de uso (número de tarefas, ferramentas usadas, códigos de erro) ao PostHog, nos Estados Unidos, guardados por um ano; segundo a política, isso nunca inclui páginas, sites visitados, mensagens, arquivos ou chaves, e ambos podem ser desligados em Configurações, Dados. Ao desinstalar, abre-se uma pesquisa opcional no Google Forms.',
            'A documentação de permissões acrescenta três cuidados: abrir páginas nunca exige aprovação, então uma página poderia enganar o agente para abrir um endereço que leve seus dados a outro lugar; a digitação não é bloqueada, então uma página pode observar o que o agente digita; e a injeção de prompt é um risco, portanto acompanhe o agente e use Stop. Os textos de política consultados são datados de 13 de outubro de 2026 (GitHub) e 18 de outubro de 2026 (site); a PromptQuorum não inspecionou o tráfego de rede.',
          ],
          callouts: [
            { type: 'note', text: 'Estas são afirmações do próprio projeto, não resultados de auditoria. Para contas de trabalho ou de clientes, leia primeiro a política, use um perfil de navegador separado e mantenha o modo Ask ativado. Automatizar um site pode violar seus termos de uso, então confira-os antes de apontar um agente para um site. São informações gerais, não aconselhamento de segurança ou jurídico.' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: 'Preços e licença',
          content: [
            '**A extensão é gratuita sob a Apache License 2.0; você paga ao seu provedor de modelos pelo que usar.** A documentação diz que tarefas longas e páginas com muito texto custam mais, e que um modelo local não custa nada para rodar.',
            'O site e a página da Chrome Web Store não mostram cadastro, assinatura nem plano pago. Segundo a documentação, as chaves de API ficam guardadas no navegador e são enviadas apenas ao próprio provedor.',
          ],
          columns: ['Item', 'Custo', 'Observações'],
          rows: [
            { 'Item': 'Extensão', 'Custo': 'Grátis', 'Observações': 'Apache-2.0, sem conta' },
            { 'Item': 'Modelo na nuvem', 'Custo': 'Tarifa do provedor', 'Observações': 'Cobrado pelo seu provedor' },
            { 'Item': 'Modelo local', 'Custo': 'Grátis para rodar', 'Observações': 'Seu hardware, contexto 16k+' },
          ],
          note: 'Os custos dependem do provedor e da tarefa. A PromptQuorum não mediu o custo por tarefa.',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Para quem serve',
          items: [
            'Pessoas que querem um agente de IA dentro do Chrome ou Edge com a sessão iniciada, com uma etapa de aprovação visível antes de ações delicadas.',
            'Usuários de Ollama ou LM Studio que querem testar um agente de navegador com um modelo local e aceitam que a documentação recomende tarefas curtas e claras.',
            'Desenvolvedores que querem uma base de código Apache-2.0 que possam compilar por conta própria com Node.js 24 LTS e pnpm 10.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Limites e o que não conseguimos verificar',
          content: [
            '**O Nanobrowser serve mal se o conteúdo das páginas não pode chegar a um modelo de terceiros, ou se uma ação perdida pode custar dinheiro ou dados.** Vários pontos continuam sem verificação.',
          ],
          items: [
            'Não serve: tarefas em que um clique despercebido causa dano; a documentação diz que botões só com ícone, interruptores de salvamento automático e ações de arrastar e soltar podem passar despercebidos e então rodar sem aprovação, mesmo no modo Ask.',
            'Não serve: Firefox, Safari ou outros navegadores baseados em Chromium, que o README lista como não testados.',
            'Sem verificação: taxas de sucesso, velocidade e custo por tarefa; as fontes não trazem benchmark e a PromptQuorum não executou nenhum.',
            'Sem verificação: quão bem os modelos locais conduzem o agente; a documentação recomenda um modelo para uso local, mas não traz números de qualidade.',
            'Sem verificação: a entidade jurídica por trás do projeto; a política de privacidade cita apenas «a equipe do Nanobrowser» com um endereço de contato, sem nome de empresa, endereço nem país.',
            'Sem verificação: se as declarações de privacidade se confirmam na prática; nenhuma auditoria independente foi encontrada.',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: 'Alternativas',
          content: [
            '**O Nanobrowser é uma extensão de navegador; as alternativas do mesmo segmento do diretório são uma biblioteca Python, navegadores de IA completos e um agente de desktop.** A PromptQuorum não as comparou na prática.',
          ],
          columns: ['Ferramenta', 'Citado nas fontes'],
          rows: [
            { 'Ferramenta': 'Nanobrowser', 'Citado nas fontes': 'Extensão do Chrome e Edge; Apache-2.0; modelos na nuvem ou locais' },
            { 'Ferramenta': '[Browser Use](/pt/power-local-llm/browser-use-review)', 'Citado nas fontes': 'Biblioteca Python e CLI para programar um agente de navegador; MIT; nuvem paga opcional' },
            { 'Ferramenta': '[BrowserOS](/pt/power-local-llm/browseros-review)', 'Citado nas fontes': 'Navegador de IA (fork do Chromium) para Mac, Windows e Linux; AGPL-3.0' },
            { 'Ferramenta': '[LastBrowser](/pt/power-local-llm/lastbrowser-review)', 'Citado nas fontes': 'Navegador de desktop para Windows com barra lateral de IA, o Sidekick' },
            { 'Ferramenta': '[Local Operator](/pt/power-local-llm/local-operator-review)', 'Citado nas fontes': 'App de agente de desktop que escreve e executa código no seu computador' },
          ],
        },
        faq: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            {
              q: 'O Nanobrowser funciona no Firefox ou no Brave?',
              a: 'O README lista apenas Chrome e Edge como compatíveis e diz que Firefox, Safari e outros navegadores baseados em Chromium, como Opera, Arc e Brave, não foram testados. A PromptQuorum não os testou.',
            },
            {
              q: 'Como conecto o Ollama ou o LM Studio?',
              a: 'Segundo a documentação, defina OLLAMA_ORIGINS como chrome-extension://* e reinicie o Ollama; depois informe http://localhost:11434 como endereço do servidor e clique em Test models. O LM Studio precisa de Enable CORS nas configurações de Developer, com o servidor na porta 1234.',
            },
            {
              q: 'O agente pode agir sem me perguntar?',
              a: 'No modo Auto ele envia, exclui e faz upload sem perguntar, mas pagamentos, senhas, números de cartão, códigos de uso único e concessões de acesso continuam com você. Uma regra de site em Ask força a pergunta mesmo no modo Auto, e Block impede o agente de tocar no site.',
            },
            {
              q: 'O que mudou na versão 0.3.0?',
              a: 'Segundo o registro de alterações, um único agente substituiu o planejador e o navegador, o modo Ask passou a ser o padrão e cada elemento da página ganhou um ID ligado exatamente àquele elemento, de modo que os cliques atinjam o alvo certo.',
            },
            {
              q: 'Várias tarefas podem rodar ao mesmo tempo com um modelo local?',
              a: 'Elas podem começar em grupos de abas separados, mas a documentação diz que cada servidor do Ollama ou do LM Studio atende uma solicitação por vez, então as tarefas locais entram em fila; servidores adicionados pelo provedor compatível com a OpenAI, como llama.cpp ou vLLM, não formam fila.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Veredito',
          content: [
            '**O Nanobrowser vale o teste se você quer um agente de IA de código aberto dentro do Chrome ou Edge, com etapas de aprovação e a opção de um modelo local, e aceita que nada foi testado aqui.**',
            'Ele é Apache-2.0, está em desenvolvimento ativo (último push em 17 de novembro de 2026, versão 0.3.0 em 15 de outubro de 2026) e é gratuito, exceto pelas cobranças do seu provedor de modelos. As contrapartidas: o conteúdo das páginas vai para o provedor de modelos que você escolher, a documentação diz que algumas ações podem passar despercebidas e rodar sem aprovação, modelos locais funcionam melhor em tarefas simples, e as taxas de sucesso e a velocidade não se apoiam em dados que pudéssemos verificar. A PromptQuorum não o testou; comece com um perfil de navegador separado e tarefas de baixo risco.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fontes',
          items: [
            '[Site do Nanobrowser](https://nanobrowser.ai) — descrição do produto e links de instalação, consultado em 20 de novembro de 2026.',
            '[Documentação de modelos](https://nanobrowser.ai/docs/models) — provedores, chamadas de ferramentas e preços, consultada em 20 de novembro de 2026.',
            '[Documentação de modelos locais](https://nanobrowser.ai/docs/local-models) — configuração do Ollama e do LM Studio, consultada em 20 de novembro de 2026.',
            '[Documentação de permissões](https://nanobrowser.ai/docs/permissions) — modos Ask e Auto, regras de site e alertas, consultada em 20 de novembro de 2026.',
            '[Página de privacidade](https://nanobrowser.ai/docs/privacy) — fluxos de dados e telemetria, datada de 18 de outubro de 2026, consultada em 20 de novembro de 2026.',
            '[PRIVACY.md](https://github.com/nanobrowser/nanobrowser/blob/master/PRIVACY.md) — política de privacidade no GitHub, datada de 13 de outubro de 2026, consultada em 20 de novembro de 2026.',
            '[Registro de alterações](https://nanobrowser.ai/changelog) — versões 0.1.9 a 0.3.0, consultado em 20 de novembro de 2026.',
            '[Repositório do GitHub e README](https://github.com/nanobrowser/nanobrowser) — licença, etapas de instalação e último push, consultados em 20 de novembro de 2026.',
            '[Release 0.3.0](https://github.com/nanobrowser/nanobrowser/releases/tag/v0.3.0) — versão mais recente, lançada em 15 de outubro de 2026.',
            '[Página da Chrome Web Store](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) — versão 0.3.0, atualizada em 16 de outubro de 2026, gratuita, consultada em 20 de novembro de 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            '[Análise do Browser Use](/pt/power-local-llm/browser-use-review) — uma biblioteca Python e CLI de código aberto para agentes de navegador.',
            '[Análise do BrowserOS](/pt/power-local-llm/browseros-review) — um navegador de IA com assistente integrado.',
            '[Análise do LastBrowser](/pt/power-local-llm/lastbrowser-review) — um navegador de desktop com barra lateral de IA.',
            '[Análise do Local Operator](/pt/power-local-llm/local-operator-review) — um app de agente de desktop que executa código no seu computador.',
            '[Diretório de software de LLM locais](/pt/directory) — o catálogo completo de ferramentas de IA locais.',
          ],
        },
      },
    },
    zh: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-20',
      dateModified: '2026-11-20',
      next_refresh_due: '2027-05-20',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/nanobrowser-review-hero-zh.webp',
      title: 'Nanobrowser 评测：适用于 Chrome 和 Edge 的免费开源 AI 浏览器智能体',
      seoTitle: 'Nanobrowser 评测：免费开源 AI 浏览器智能体',
      intro:
        'Nanobrowser 是适用于 Chrome 和 Edge 的免费开源浏览器扩展，AI 智能体在侧边栏中工作：你描述任务，它替你读取页面、点击、输入并切换标签页。它使用你接入的 AI 模型，可以是云端提供商，也可以是通过 Ollama 或 LM Studio 运行的本地模型。本评测基于该项目的网站、文档、GitHub 仓库和隐私政策（阅读于2026年11月20日）；PromptQuorum 未测试该扩展。',
      metaDescription:
        'Nanobrowser 是适用于 Chrome 和 Edge 的免费开源 AI 浏览器智能体，支持云端模型或本地 Ollama。隐私、模式与局限；未经测试。',
      twitterDescription:
        'Nanobrowser 评测：Chrome 和 Edge 侧边栏中的免费开源 AI 智能体。功能、页面数据去向，以及我们未能核实的内容。',
      audience:
        '想在自己的 Chrome 或 Edge 中使用 AI 智能体的人、Ollama 和 LM Studio 用户，以及比较浏览器智能体的读者',
      readTime: '阅读约6分钟',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Nanobrowser',
      targetKeywords: [
        'Nanobrowser 评测',
        'Nanobrowser AI 浏览器智能体',
        'Nanobrowser Ollama',
        'Nanobrowser 隐私',
        'Nanobrowser Chrome 扩展',
        'Nanobrowser 替代品',
      ],
      current_models_mentioned: ['Ollama', 'LM Studio'],
      leadAnswerBlock:
        '**Nanobrowser（版本 0.3.0，发布于2026年10月15日）是一款免费的 Apache-2.0 浏览器扩展，在 Chrome 或 Edge 的侧边栏中运行 AI 智能体，使用你接入的云端或本地模型。** 页面内容会发送给该模型提供商；据文档，使用本地 Ollama 或 LM Studio 模型时，内容留在你的电脑上。本文所有说法均来自项目自己的网站、文档和政策；PromptQuorum 未测试。',
      quickAnswerTop: {
        zh: {
          question: 'Nanobrowser 免费吗？能使用本地模型吗？',
          answer:
            '扩展免费且无需账号，你只需向模型提供商付费。它可以使用本地 Ollama 或 LM Studio 模型，但文档说明模型必须支持工具调用，且本地模型更适合简短、明确的任务。',
          bullets: [
            '可在 Chrome Web Store 一键安装；另附有 Edge 加载项页面链接。',
            'Ask 模式（默认）在提交、发送、删除或上传前会询问；Auto 模式不会。',
            '本地设置：在 Ollama 中用 OLLAMA_ORIGINS 允许扩展，或在 LM Studio 中开启 CORS。',
            '匿名使用计数默认开启，可在设置中关闭。',
          ],
          updatedDate: '2026-11',
        },
      },
      toc: [
        { label: '核心要点', anchor: 'tldr' },
        { label: '概览', anchor: 'overview' },
        { label: '获取方式', anchor: 'get-it' },
        { label: '功能', anchor: 'features' },
        { label: '隐私与数据流向', anchor: 'privacy' },
        { label: '价格与许可证', anchor: 'pricing' },
        { label: '适合谁', anchor: 'who-should-use' },
        { label: '局限与未能核实的内容', anchor: 'who-should-not-use' },
        { label: '替代品', anchor: 'alternatives' },
        { label: '常见问题', anchor: 'faq' },
        { label: '结论', anchor: 'verdict' },
        { label: '来源', anchor: 'sources' },
        { label: '相关阅读', anchor: 'related-reading' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          title: '核心要点',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'Nanobrowser 是适用于 Chrome 和 Edge 的免费开源扩展，AI 智能体在你已登录的浏览器中读取页面、点击和输入，使用你接入的云端或本地模型。' },
            { type: 'plain-terms', text: '你在侧边栏输入任务，智能体在你打开的标签页中操作，并在提交或删除等敏感步骤前先询问。模型会读取页面，因此页面内容会发送给你选择的模型。' },
          ],
          items: [
            '维护情况：仓库最近一次推送在2026年11月17日，最新版本 0.3.0 发布于2026年10月15日，因此不适用“项目停更”警告。',
            '许可证：Apache-2.0；扩展免费，你直接向模型提供商付费。',
            '重构：据更新日志，0.3.0 版用单一智能体取代了此前的规划器和导航器。',
            '模型：需要支持工具调用的模型；云端选项包括 Anthropic、OpenAI、Google Gemini、AWS Bedrock、OpenRouter、xAI、DeepSeek 和 Mistral，或任何兼容 OpenAI 的端点。',
            '安全：文档警告，网页可能诱使智能体打开会把你的数据带到别处的地址，并建议留意其操作。',
          ],
          callouts: [
            { type: 'note', text: '本评测基于该项目的网站、文档、GitHub 仓库和隐私政策（阅读于2026年11月20日）。PromptQuorum 未安装或运行 Nanobrowser，因此未评估成功率、速度和每项任务的成本。在你已登录的浏览器中点击和输入的智能体，可能执行你并不想要的操作。以上为一般信息，不构成安全建议。' },
          ],
        },
        overview: {
          id: 'overview',
          title: '概览',
          content: [
            '**Nanobrowser 是在你自己已登录的浏览器内工作的 AI 智能体，而不是另一个独立的浏览器。** 据 README 和网站，你在侧边栏（通过工具栏图标或 Alt+Shift+N 打开）描述任务，智能体便会读取页面、点击、输入并在标签页之间切换，多个任务可在各自独立的标签组中运行。',
            'README 将 Chrome 和 Edge 列为受支持，将 Firefox、Safari 和其他 Chromium 浏览器（Opera、Arc、Brave）列为未测试。代码以 Apache License 2.0 托管在 GitHub；仓库创建于 2024 年 12 月 31 日，最近一次推送在2026年11月17日，最新版本 0.3.0 发布于2026年10月15日，开发较为活跃。',
            '据更新日志，0.3.0 版围绕侧边栏中的单一智能体重建了扩展，0.2.0 版把模型调用从 LangChain 迁移到 Vercel AI SDK，并移除了 Groq、Cerebras 和 Llama API 提供商。',
          ],
        },
        getIt: {
          id: 'get-it',
          title: '获取方式',
          content: [
            '**Nanobrowser 的安装方式与其他浏览器扩展相同：从 Chrome Web Store 添加（另附有 Edge 加载项页面链接），然后接入模型。** 除非使用本地模型或从源码构建，否则无需终端。',
          ],
          columns: ['途径', '获取方式'],
          rows: [
            { '途径': 'Chrome Web Store', '获取方式': '[Nanobrowser 页面](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal)（免费）' },
            { '途径': 'Microsoft Edge', '获取方式': '[Edge 加载项页面](https://microsoftedge.microsoft.com/addons/detail/nanobrowser-ai-web-agent/ajdioenfpgabnjlclgckbbnjjhdnjkhn)' },
            { '途径': '网站', '获取方式': '[nanobrowser.ai](https://nanobrowser.ai)' },
            { '途径': '源代码', '获取方式': '[GitHub](https://github.com/nanobrowser/nanobrowser)（Apache-2.0）' },
            { '途径': '隐私政策', '获取方式': '[nanobrowser.ai/docs/privacy](https://nanobrowser.ai/docs/privacy)' },
            { '途径': '从源码构建', '获取方式': 'Node.js 24 LTS 和 pnpm 10' },
          ],
          codeBlock: '# Optional: build from source (Node.js 24 LTS, pnpm 10)\ncorepack enable\npnpm install\npnpm build\n\n# Local Ollama started by hand: allow the extension\nOLLAMA_ORIGINS="chrome-extension://*" ollama serve',
          codeLanguage: 'bash',
          note: '评测版本：0.3.0，据 GitHub Releases 发布于2026年10月15日；Chrome Web Store 页面显示 0.3.0，更新于2026年10月16日。上游最近一次更新（推送）在2026年11月17日。GitHub 发布版只提供 nanobrowser-0.3.0.zip，即用于开发者模式的未打包版本。',
        },
        features: {
          id: 'features',
          title: '功能',
          content: [
            '**以下均为项目在 README 或文档中的说法，PromptQuorum 均未测试。**',
          ],
          items: [
            '**支持并行任务的侧边栏聊天。** 多个任务可在各自独立的标签组中运行，支持图片、文件和截图附件，结果可按 CSV 或 Markdown 保存到下载文件夹。',
            '**Ask 和 Auto 模式。** Ask 模式（默认）在提交、发送、删除或上传前显示审批卡片；Auto 模式则跳过。据文档，付款、密码、验证码和授权访问始终交给你。',
            '**按站点设置规则。** 每个站点可设为 Allow、Ask 或 Block；站点规则优先于模式，并按完整主机名匹配。',
            '**每个聊天单独选模型。** 可为每个聊天选择模型和推理强度，设置中的 Test models 按钮会标出不支持工具调用的模型。',
            '**模型支持时可用视觉。** 使用视觉模型时，智能体可截图并查看附加的图片；否则按文本读取页面。',
            '**快捷指令、语音和记忆。** 用斜杠触发的已保存提示词快捷指令、语音输入、持久记忆，以及对长聊天的自动摘要。',
            '**可导出的聊天记录。** 聊天可导出为 Markdown，README 列出英文、简体中文和繁体中文界面。',
            '**元素 ID。** 据 README，一个不含 AI 模型的控制层会为每个页面元素分配稳定 ID，执行真实的浏览器输入，并在操作前检查状态，使用 Chrome 调试器 API 和 Puppeteer。',
          ],
        },
        privacy: {
          id: 'privacy',
          title: '隐私与数据流向',
          content: [
            '**据其隐私政策，Nanobrowser 没有账号，也没有接收聊天或页面的 Nanobrowser 服务器：你的消息、附件、智能体操作的标签页内容，以及视觉模型所用的截图，都会从你的浏览器发送到你选择的模型提供商。** 使用本地 Ollama 或 LM Studio 模型时，政策称这些数据留在你的电脑上。政策还称，识别到的密码、银行卡和一次性验证码输入框的值不会发送，登录信息和 Cookie 保留在浏览器中。',
            '隐私政策还提到另外两条数据流向。启用语音输入后，音频会发送给所选的 OpenAI 或 Google 语音模型，政策称不会保存录音。两个遥测开关默认均开启，会向美国的 PostHog 发送匿名每日计数和每日使用汇总（任务数、所用工具、错误代码），保留一年；政策称其中从不包含页面、访问的网站、消息、文件或密钥，两者都可在设置的数据项中关闭。卸载时会打开一份可选的 Google 表单问卷。',
            '权限文档补充了三点提醒：打开页面从不需要审批，因此页面可能诱使智能体打开会把你的数据带到别处的地址；输入不受限制，页面可以观察智能体输入的内容；提示词注入是一种风险，所以请留意智能体并使用 Stop。所读政策文本的日期为2026年10月13日（GitHub）和2026年10月18日（网站）；PromptQuorum 未检查网络流量。',
          ],
          callouts: [
            { type: 'note', text: '以上是项目自己的说法，不是审计结果。对于工作或客户账号，请先阅读政策，使用单独的浏览器配置文件，并保持 Ask 模式开启。自动化操作网站可能违反其服务条款，让智能体访问某个网站前请先查看条款。以上为一般信息，不构成安全或法律建议。' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: '价格与许可证',
          content: [
            '**扩展按 Apache License 2.0 免费提供；你按实际使用量向模型提供商付费。** 文档称，长任务和文字量大的页面费用更高，而本地模型运行不产生费用。',
            '网站和 Chrome Web Store 页面均未显示注册、订阅或付费档位。据文档，API 密钥保存在浏览器中，只发送给各自的提供商。',
          ],
          columns: ['项目', '费用', '备注'],
          rows: [
            { '项目': '扩展', '费用': '免费', '备注': 'Apache-2.0，无需账号' },
            { '项目': '云端模型', '费用': '按提供商价格', '备注': '由提供商计费' },
            { '项目': '本地模型', '费用': '运行免费', '备注': '用你的硬件，上下文16k+' },
          ],
          note: '费用取决于提供商和任务。PromptQuorum 未测量每项任务的成本。',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: '适合谁',
          items: [
            '想在已登录的 Chrome 或 Edge 中使用 AI 智能体，并希望敏感操作前有可见审批步骤的人。',
            '使用 Ollama 或 LM Studio、想用本地模型试用浏览器智能体，并接受文档建议只做简短明确任务的人。',
            '想要可用 Node.js 24 LTS 和 pnpm 10 自行构建的 Apache-2.0 代码库的开发者。',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '局限与未能核实的内容',
          content: [
            '**如果页面内容不得交给第三方模型，或漏掉的操作可能造成金钱或数据损失，Nanobrowser 就不合适。** 还有多项内容未能核实。',
          ],
          items: [
            '不适合：一次未被察觉的点击就会造成损害的任务；据文档，仅有图标的按钮、自动保存的开关和拖放操作可能被漏掉，随后在没有审批的情况下执行，即使在 Ask 模式下也是如此。',
            '不适合：Firefox、Safari 或其他 Chromium 浏览器，README 将它们列为未测试。',
            '未核实：任务成功率、速度和每项任务的成本；来源中没有基准测试，PromptQuorum 也未运行。',
            '未核实：本地模型驱动该智能体的效果；文档推荐了一个本地使用的模型，但没有给出质量数据。',
            '未核实：项目背后的法律实体；隐私政策只提到“Nanobrowser 团队”和一个联系地址，没有公司名称、地址或国家。',
            '未核实：隐私声明在实际中是否成立；未发现独立审计。',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: '替代品',
          content: [
            '**Nanobrowser 是一款浏览器扩展；同一目录分类中的替代品包括 Python 库、完整的 AI 浏览器和桌面智能体。** PromptQuorum 未对它们做实际对比。',
          ],
          columns: ['工具', '来源中的说法'],
          rows: [
            { '工具': 'Nanobrowser', '来源中的说法': 'Chrome 和 Edge 扩展；Apache-2.0；云端或本地模型' },
            { '工具': '[Browser Use](/zh/power-local-llm/browser-use-review)', '来源中的说法': '用于编写浏览器智能体的 Python 库和 CLI；MIT；可选付费云端' },
            { '工具': '[BrowserOS](/zh/power-local-llm/browseros-review)', '来源中的说法': '面向 Mac、Windows 和 Linux 的 AI 浏览器（Chromium 分支）；AGPL-3.0' },
            { '工具': '[LastBrowser](/zh/power-local-llm/lastbrowser-review)', '来源中的说法': '面向 Windows 的桌面浏览器，内置 Sidekick AI 侧边栏' },
            { '工具': '[Local Operator](/zh/power-local-llm/local-operator-review)', '来源中的说法': '在你的电脑上编写并运行代码的桌面智能体应用' },
          ],
        },
        faq: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: 'Nanobrowser 能在 Firefox 或 Brave 中使用吗？',
              a: 'README 只将 Chrome 和 Edge 列为受支持，并称 Firefox、Safari 以及 Opera、Arc、Brave 等其他 Chromium 浏览器未经测试。PromptQuorum 未尝试过。',
            },
            {
              q: '如何连接 Ollama 或 LM Studio？',
              a: '据文档，把 OLLAMA_ORIGINS 设为 chrome-extension://* 并重启 Ollama，然后把 http://localhost:11434 填为服务器地址并点击 Test models。LM Studio 需要在 Developer 设置中开启 Enable CORS，服务器使用 1234 端口。',
            },
            {
              q: '智能体能不经询问就行动吗？',
              a: '在 Auto 模式下，它会不经询问就提交、发送、删除和上传，但付款、密码、银行卡号、一次性验证码和授权访问仍交给你。设为 Ask 的站点规则即使在 Auto 模式下也会强制询问，Block 则禁止智能体接触该站点。',
            },
            {
              q: '0.3.0 版有什么变化？',
              a: '据更新日志，单一智能体取代了规划器和导航器，Ask 模式成为默认，每个页面元素都获得了仅对应该元素的 ID，因此点击会落在预期的目标上。',
            },
            {
              q: '用本地模型时能同时运行多个任务吗？',
              a: '它们可以在各自独立的标签组中启动，但文档称每个 Ollama 或 LM Studio 服务器一次只处理一个请求，因此本地任务会排队；通过兼容 OpenAI 的提供商接入的服务器（如 llama.cpp 或 vLLM）不会排队。',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '结论',
          content: [
            '**如果你想在 Chrome 或 Edge 中使用带审批步骤、可选本地模型的开源 AI 智能体，并接受这里没有做任何测试，Nanobrowser 值得一试。**',
            '它采用 Apache-2.0，开发活跃（最近推送在2026年11月17日，0.3.0 版发布于2026年10月15日），除模型提供商的费用外免费。需要权衡的是：页面内容会发送给你选择的模型提供商；据文档，某些操作可能被漏掉并在没有审批的情况下执行；本地模型更适合简单任务；成功率和速度没有我们能核实的数据。PromptQuorum 未测试；建议先用单独的浏览器配置文件和低风险任务。',
          ],
        },
        sources: {
          id: 'sources',
          title: '来源',
          items: [
            '[Nanobrowser 网站](https://nanobrowser.ai) — 产品介绍和安装链接，查阅于2026年11月20日。',
            '[模型文档](https://nanobrowser.ai/docs/models) — 提供商、工具调用和价格，查阅于2026年11月20日。',
            '[本地模型文档](https://nanobrowser.ai/docs/local-models) — Ollama 和 LM Studio 设置，查阅于2026年11月20日。',
            '[权限文档](https://nanobrowser.ai/docs/permissions) — Ask 和 Auto 模式、站点规则及警告，查阅于2026年11月20日。',
            '[隐私页面](https://nanobrowser.ai/docs/privacy) — 数据流向和遥测，日期为2026年10月18日，查阅于2026年11月20日。',
            '[PRIVACY.md](https://github.com/nanobrowser/nanobrowser/blob/master/PRIVACY.md) — GitHub 上的隐私政策，日期为2026年10月13日，查阅于2026年11月20日。',
            '[更新日志](https://nanobrowser.ai/changelog) — 0.1.9 至 0.3.0 版，查阅于2026年11月20日。',
            '[GitHub 仓库和 README](https://github.com/nanobrowser/nanobrowser) — 许可证、安装步骤和最近一次推送，查阅于2026年11月20日。',
            '[0.3.0 版发布](https://github.com/nanobrowser/nanobrowser/releases/tag/v0.3.0) — 最新版本，发布于2026年10月15日。',
            '[Chrome Web Store 页面](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) — 0.3.0 版，更新于2026年10月16日，免费，查阅于2026年11月20日。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[Browser Use 评测](/zh/power-local-llm/browser-use-review) — 面向浏览器智能体的开源 Python 库和 CLI。',
            '[BrowserOS 评测](/zh/power-local-llm/browseros-review) — 内置助手的 AI 浏览器。',
            '[LastBrowser 评测](/zh/power-local-llm/lastbrowser-review) — 带 AI 侧边栏的桌面浏览器。',
            '[Local Operator 评测](/zh/power-local-llm/local-operator-review) — 在你的电脑上运行代码的桌面智能体应用。',
            '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
          ],
        },
      },
    },
    ar: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-20',
      dateModified: '2026-11-20',
      next_refresh_due: '2027-05-20',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/nanobrowser-review-hero-ar.webp',
      title: 'مراجعة Nanobrowser: وكيل متصفح مجاني ومفتوح المصدر بالذكاء الاصطناعي لمتصفحي Chrome وEdge',
      seoTitle: 'مراجعة Nanobrowser: وكيل متصفح ذكي مجاني لـ Chrome',
      intro:
        'Nanobrowser إضافة متصفح مجانية ومفتوحة المصدر لمتصفحي Chrome وEdge، يعمل فيها وكيل ذكاء اصطناعي داخل لوحة جانبية: تصف المهمة فيقرأ الصفحات وينقر ويكتب وينتقل بين علامات التبويب نيابةً عنك. يستخدم نموذج الذكاء الاصطناعي الذي تربطه، سواء كان مزوّدًا سحابيًا أو نموذجًا محليًا عبر Ollama أو LM Studio. تستند هذه المراجعة إلى موقع المشروع ووثائقه ومستودعه على GitHub وسياسة الخصوصية، وقد اطلعنا عليها في 20 نوفمبر 2026؛ ولم تختبر PromptQuorum الإضافة.',
      metaDescription:
        'Nanobrowser وكيل متصفح مجاني ومفتوح المصدر لمتصفحي Chrome وEdge يعمل مع نماذج سحابية أو Ollama محلي. الخصوصية والأوضاع والحدود؛ لم يُختبر هنا.',
      twitterDescription:
        'مراجعة Nanobrowser: وكيل ذكاء اصطناعي مجاني ومفتوح المصدر في اللوحة الجانبية لـ Chrome وEdge. ماذا يفعل، وإلى أين تذهب بيانات الصفحات، وما لم نتمكن من التحقق منه.',
      audience:
        'من يريدون وكيل ذكاء اصطناعي داخل متصفح Chrome أو Edge الخاص بهم، ومستخدمو Ollama وLM Studio، والقراء الذين يقارنون وكلاء المتصفح',
      readTime: '6 دقائق للقراءة',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Nanobrowser',
      targetKeywords: [
        'مراجعة Nanobrowser',
        'Nanobrowser وكيل متصفح بالذكاء الاصطناعي',
        'Nanobrowser مع Ollama',
        'خصوصية Nanobrowser',
        'إضافة Nanobrowser لمتصفح Chrome',
        'بدائل Nanobrowser',
      ],
      current_models_mentioned: ['Ollama', 'LM Studio'],
      leadAnswerBlock:
        '**Nanobrowser (الإصدار 0.3.0، صدر في 15 أكتوبر 2026) إضافة متصفح مجانية برخصة Apache-2.0 تشغّل وكيل ذكاء اصطناعي في اللوحة الجانبية لمتصفح Chrome أو Edge، وتستخدم النموذج السحابي أو المحلي الذي تربطه.** يذهب محتوى الصفحات إلى مزوّد النموذج هذا، وبحسب الوثائق يبقى المحتوى على جهازك عند استخدام نموذج محلي عبر Ollama أو LM Studio. كل ما يرد هنا مصدره موقع المشروع ووثائقه وسياسته؛ ولم تختبره PromptQuorum.',
      quickAnswerTop: {
        ar: {
          question: 'هل Nanobrowser مجاني، وهل يمكنه استخدام نموذج محلي؟',
          answer:
            'الإضافة مجانية ولا تحتاج إلى حساب، وتدفع فقط لمزوّد النموذج. يمكنها استخدام نموذج محلي عبر Ollama أو LM Studio، لكن الوثائق تقول إن النموذج يجب أن يدعم استدعاء الأدوات وإن النماذج المحلية تعمل بأفضل صورة مع المهام القصيرة والواضحة.',
          bullets: [
            'تُثبَّت بنقرة واحدة من Chrome Web Store؛ كما يوجد رابط إلى صفحتها في Edge Add-ons.',
            'وضع Ask (الافتراضي) يسأل قبل الإرسال أو الحذف أو الرفع؛ أما وضع Auto فلا يسأل.',
            'الإعداد المحلي: السماح للإضافة في Ollama عبر OLLAMA_ORIGINS، أو تفعيل CORS في LM Studio.',
            'عدّادات الاستخدام المجهولة مفعّلة افتراضيًا ويمكن إيقافها من الإعدادات.',
          ],
          updatedDate: '2026-11',
        },
      },
      toc: [
        { label: 'النقاط الرئيسية', anchor: 'tldr' },
        { label: 'نظرة عامة', anchor: 'overview' },
        { label: 'كيفية الحصول عليه', anchor: 'get-it' },
        { label: 'الميزات', anchor: 'features' },
        { label: 'الخصوصية ومسار البيانات', anchor: 'privacy' },
        { label: 'الأسعار والرخصة', anchor: 'pricing' },
        { label: 'لمن يناسب', anchor: 'who-should-use' },
        { label: 'الحدود وما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
        { label: 'البدائل', anchor: 'alternatives' },
        { label: 'الأسئلة الشائعة', anchor: 'faq' },
        { label: 'الخلاصة', anchor: 'verdict' },
        { label: 'المصادر', anchor: 'sources' },
        { label: 'قراءات ذات صلة', anchor: 'related-reading' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          title: 'النقاط الرئيسية',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'Nanobrowser إضافة مجانية ومفتوحة المصدر لمتصفحي Chrome وEdge، يقرأ فيها وكيل ذكاء اصطناعي الصفحات وينقر ويكتب داخل متصفحك المسجَّل الدخول فيه، باستخدام نموذج سحابي أو محلي تربطه أنت.' },
            { type: 'plain-terms', text: 'تكتب المهمة في اللوحة الجانبية، فيعمل الوكيل على علامات التبويب المفتوحة ويسأل قبل الخطوات الحساسة مثل الإرسال أو الحذف. النموذج هو الذي يقرأ الصفحات، لذا يذهب محتواها إلى النموذج الذي تختاره.' },
          ],
          items: [
            'الصيانة: آخر دفعة (push) إلى المستودع كانت في 17 نوفمبر 2026، وأحدث إصدار 0.3.0 صدر في 15 أكتوبر 2026، فلا ينطبق تحذير المشروع المتوقف.',
            'الرخصة: Apache-2.0؛ الإضافة مجانية وتدفع لمزوّد النموذج مباشرةً.',
            'إعادة البناء: بحسب سجل التغييرات، استبدل الإصدار 0.3.0 المخطِّط والمتنقِّل السابقين بوكيل واحد.',
            'النماذج: يلزم نموذج يدعم استدعاء الأدوات؛ ومن الخيارات السحابية Anthropic وOpenAI وGoogle Gemini وAWS Bedrock وOpenRouter وxAI وDeepSeek وMistral، أو أي نقطة نهاية متوافقة مع OpenAI.',
            'الأمان: تحذّر الوثائق من أن صفحة ويب قد تخدع الوكيل ليفتح عنوانًا ينقل بياناتك إلى مكان آخر، وتنصح بمراقبة إجراءاته.',
          ],
          callouts: [
            { type: 'note', text: 'تستند هذه المراجعة إلى موقع المشروع ووثائقه ومستودعه على GitHub وسياسة الخصوصية، وقد اطلعنا عليها في 20 نوفمبر 2026. لم تثبّت PromptQuorum إضافة Nanobrowser ولم تشغّلها، لذا لم تُقيَّم معدلات النجاح والسرعة وتكلفة المهمة الواحدة. قد ينفّذ وكيل ينقر ويكتب في متصفحك المسجَّل الدخول فيه إجراءات لم تقصدها. هذه معلومات عامة وليست نصيحة أمنية.' },
          ],
        },
        overview: {
          id: 'overview',
          title: 'نظرة عامة',
          content: [
            '**Nanobrowser وكيل ذكاء اصطناعي يعمل داخل متصفحك أنت، المسجَّل الدخول فيه، وليس في متصفح منفصل.** بحسب ملف README والموقع، تصف المهمة في اللوحة الجانبية (تُفتح من أيقونة شريط الأدوات أو بالاختصار Alt+Shift+N)، فيقرأ الوكيل الصفحات وينقر ويكتب وينتقل بين علامات التبويب، ويمكن تشغيل عدة مهام في مجموعات تبويب منفصلة.',
            'يذكر README أن Chrome وEdge مدعومان، وأن Firefox وSafari ومتصفحات Chromium الأخرى (Opera وArc وBrave) لم تُختبر. الشيفرة على GitHub برخصة Apache License 2.0؛ أُنشئ المستودع في 31 ديسمبر 2024، وكانت آخر دفعة إليه في 17 نوفمبر 2026، وأحدث إصدار 0.3.0 صدر في 15 أكتوبر 2026، فالتطوير نشط.',
            'يقول سجل التغييرات إن الإصدار 0.3.0 أعاد بناء الإضافة حول وكيل واحد في اللوحة الجانبية، وإن الإصدار 0.2.0 نقل استدعاءات النماذج من LangChain إلى Vercel AI SDK وأزال المزوّدين Groq وCerebras وLlama API.',
          ],
        },
        getIt: {
          id: 'get-it',
          title: 'كيفية الحصول عليه',
          content: [
            '**تُثبَّت Nanobrowser مثل أي إضافة متصفح: أضفها من Chrome Web Store (وهناك رابط إلى صفحتها في Edge Add-ons)، ثم اربط نموذجًا.** لا حاجة إلى الطرفية إلا إذا استخدمت نموذجًا محليًا أو بنيت الإضافة من المصدر.',
          ],
          columns: ['الطريق', 'كيفية الحصول عليه'],
          rows: [
            { 'الطريق': 'Chrome Web Store', 'كيفية الحصول عليه': '[صفحة Nanobrowser](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) (مجانية)' },
            { 'الطريق': 'Microsoft Edge', 'كيفية الحصول عليه': '[صفحة Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/nanobrowser-ai-web-agent/ajdioenfpgabnjlclgckbbnjjhdnjkhn)' },
            { 'الطريق': 'الموقع', 'كيفية الحصول عليه': '[nanobrowser.ai](https://nanobrowser.ai)' },
            { 'الطريق': 'الشيفرة المصدرية', 'كيفية الحصول عليه': '[GitHub](https://github.com/nanobrowser/nanobrowser) (Apache-2.0)' },
            { 'الطريق': 'سياسة الخصوصية', 'كيفية الحصول عليه': '[nanobrowser.ai/docs/privacy](https://nanobrowser.ai/docs/privacy)' },
            { 'الطريق': 'البناء من المصدر', 'كيفية الحصول عليه': 'Node.js 24 LTS وpnpm 10' },
          ],
          codeBlock: '# Optional: build from source (Node.js 24 LTS, pnpm 10)\ncorepack enable\npnpm install\npnpm build\n\n# Local Ollama started by hand: allow the extension\nOLLAMA_ORIGINS="chrome-extension://*" ollama serve',
          codeLanguage: 'bash',
          note: 'الإصدار الذي راجعناه: 0.3.0، صدر في 15 أكتوبر 2026 بحسب GitHub Releases؛ وتعرض صفحة Chrome Web Store الإصدار 0.3.0 المحدَّث في 16 أكتوبر 2026. آخر تحديث أصلي (push) في 17 نوفمبر 2026. يتضمن إصدار GitHub الملف nanobrowser-0.3.0.zip فقط، وهو حزمة غير مضغوطة لوضع المطوّر.',
        },
        features: {
          id: 'features',
          title: 'الميزات',
          content: [
            '**كل ما يلي أقوال من المشروع مصدرها README أو الوثائق؛ ولم تختبر PromptQuorum شيئًا منها.**',
          ],
          items: [
            '**محادثة في اللوحة الجانبية مع مهام متوازية.** يمكن تشغيل عدة مهام في مجموعات تبويب منفصلة، مع مرفقات من الصور والملفات ولقطات الشاشة، وحفظ النتائج في مجلد التنزيلات بصيغة CSV أو Markdown.',
            '**وضعا Ask وAuto.** وضع Ask (الافتراضي) يعرض بطاقة موافقة قبل الإرسال أو الحذف أو الرفع؛ ووضع Auto يتخطاها. وتبقى المدفوعات وكلمات المرور والرموز ومنح الصلاحيات عندك دائمًا بحسب الوثائق.',
            '**قواعد لكل موقع.** يمكن ضبط كل موقع على Allow أو Ask أو Block؛ وقاعدة الموقع تتقدم على الوضع وتطابق المضيف بدقة.',
            '**اختيار النموذج لكل محادثة.** تختار النموذج وجهد الاستدلال لكل محادثة، ويضع زر Test models في الإعدادات علامة على النماذج التي لا تدعم استدعاء الأدوات.',
            '**الرؤية إن دعمها النموذج.** مع نموذج رؤية يستطيع الوكيل التقاط لقطات شاشة ورؤية الصور المرفقة؛ وبدونه يقرأ الصفحات نصًّا.',
            '**اختصارات وصوت وذاكرة.** اختصارات لأوامر محفوظة تُستدعى بشرطة مائلة، وإدخال صوتي، وذاكرة دائمة، وتلخيص تلقائي للمحادثات الطويلة.',
            '**سجل المحادثات مع التصدير.** يمكن تصدير المحادثات بصيغة Markdown، ويذكر README واجهات بالإنجليزية والصينية المبسطة والصينية التقليدية.',
            '**معرّفات العناصر.** بحسب README، تمنح طبقة تحكم لا تحتوي على أي نموذج ذكاء اصطناعي كل عنصر في الصفحة معرّفًا ثابتًا، وتنفّذ إدخالًا حقيقيًا في المتصفح وتتحقق من الحالة قبل التنفيذ، عبر واجهة المصحّح في Chrome ومكتبة Puppeteer.',
          ],
        },
        privacy: {
          id: 'privacy',
          title: 'الخصوصية ومسار البيانات',
          content: [
            '**بحسب سياسة الخصوصية، لا يوجد في Nanobrowser حساب ولا خادم تابع لها يستقبل المحادثات أو الصفحات: رسائلك والملفات المرفقة ومحتوى علامات التبويب التي يعمل عليها الوكيل ولقطات الشاشة (مع نماذج الرؤية) تنتقل من متصفحك إلى مزوّد النموذج الذي تختاره.** ومع نموذج محلي عبر Ollama أو LM Studio تقول السياسة إن هذه البيانات تبقى على جهازك. وتضيف أن قيم حقول كلمة المرور والبطاقة والرمز لمرة واحدة تُحجب عند التعرف عليها، وإن بيانات تسجيل الدخول وملفات تعريف الارتباط تبقى في المتصفح.',
            'تذكر سياسة الخصوصية مسارين آخرين. الإدخال الصوتي، إن فُعّل، يرسل الصوت إلى نموذج الصوت المختار من OpenAI أو Google، وتقول السياسة إن التسجيلات لا تُحفظ. ويرسل مفتاحا قياس عن بُعد، كلاهما مفعّل افتراضيًا، عدًّا يوميًا مجهولًا وإجماليات استخدام يومية (عدد المهام والأدوات المستخدمة ورموز الأخطاء) إلى PostHog في الولايات المتحدة، وتُحفظ لمدة سنة؛ وتقول السياسة إنها لا تتضمن أبدًا صفحات أو مواقع زرتَها أو رسائل أو ملفات أو مفاتيح، ويمكن إيقاف المفتاحين من الإعدادات، البيانات. وعند إلغاء التثبيت يُفتح استبيان اختياري عبر Google Forms.',
            'تضيف وثائق الصلاحيات ثلاثة تحذيرات: فتح الصفحات لا يحتاج إلى موافقة أبدًا، لذا قد تخدع صفحة الوكيل ليفتح عنوانًا ينقل بياناتك إلى مكان آخر؛ والكتابة غير مقيَّدة، فيمكن لصفحة أن تراقب ما يكتبه الوكيل؛ وحقن الأوامر خطر قائم، لذا راقب الوكيل واستخدم Stop. نصوص السياسة التي اطلعنا عليها مؤرخة في 13 أكتوبر 2026 (GitHub) و18 أكتوبر 2026 (الموقع)؛ ولم تفحص PromptQuorum حركة الشبكة.',
          ],
          callouts: [
            { type: 'note', text: 'هذه أقوال المشروع نفسه وليست نتائج تدقيق. بالنسبة إلى حسابات العمل أو العملاء، اقرأ السياسة أولًا، واستخدم ملف تعريف متصفح منفصلًا، وأبقِ وضع Ask مفعّلًا. قد تنتهك أتمتة موقع ما شروط استخدامه، فراجعها قبل توجيه وكيل إلى موقع. هذه معلومات عامة وليست نصيحة أمنية أو قانونية.' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: 'الأسعار والرخصة',
          content: [
            '**الإضافة مجانية برخصة Apache License 2.0؛ وتدفع لمزوّد النموذج مقابل ما تستخدمه.** تقول الوثائق إن المهام الطويلة والصفحات الكثيفة بالنصوص تكلّف أكثر، وإن تشغيل النموذج المحلي لا يكلّف شيئًا.',
            'لا يعرض الموقع ولا صفحة Chrome Web Store أي تسجيل أو اشتراك أو باقة مدفوعة. وبحسب الوثائق تُخزَّن مفاتيح API في المتصفح ولا تُرسل إلا إلى مزوّدها.',
          ],
          columns: ['البند', 'التكلفة', 'ملاحظات'],
          rows: [
            { 'البند': 'الإضافة', 'التكلفة': 'مجانية', 'ملاحظات': 'Apache-2.0، بلا حساب' },
            { 'البند': 'نموذج سحابي', 'التكلفة': 'سعر المزوّد', 'ملاحظات': 'يحاسبك عليه المزوّد' },
            { 'البند': 'نموذج محلي', 'التكلفة': 'تشغيله مجاني', 'ملاحظات': 'جهازك، سياق 16k أو أكثر' },
          ],
          note: 'تعتمد التكاليف على المزوّد والمهمة. ولم تقس PromptQuorum تكلفة المهمة الواحدة.',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'لمن يناسب',
          items: [
            'من يريدون وكيل ذكاء اصطناعي داخل متصفح Chrome أو Edge المسجَّل الدخول فيه، مع خطوة موافقة ظاهرة قبل الإجراءات الحساسة.',
            'مستخدمو Ollama أو LM Studio الذين يريدون تجربة وكيل متصفح بنموذج محلي ويقبلون أن الوثائق تنصح بمهام قصيرة وواضحة.',
            'المطورون الذين يريدون قاعدة شيفرة برخصة Apache-2.0 يمكنهم بناءها بأنفسهم باستخدام Node.js 24 LTS وpnpm 10.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'الحدود وما لم نتمكن من التحقق منه',
          content: [
            '**لا يناسب Nanobrowser من لا يجوز أن يصل محتوى الصفحات إلى نموذج طرف ثالث، أو من قد يكلّفه إجراء فائت مالًا أو بيانات.** وتبقى عدة نقاط دون تحقق.',
          ],
          items: [
            'لا يناسب: المهام التي يسبب فيها نقر غير ملحوظ ضررًا؛ فبحسب الوثائق قد تفوت الوكيل الأزرار التي لها أيقونة فقط ومفاتيح الحفظ التلقائي وإجراءات السحب والإفلات، فتُنفَّذ دون موافقة حتى في وضع Ask.',
            'لا يناسب: Firefox أو Safari أو متصفحات Chromium الأخرى، التي يذكر README أنها لم تُختبر.',
            'غير متحقق منه: معدلات نجاح المهام وسرعتها وتكلفة المهمة الواحدة؛ فالمصادر لا تقدّم أي اختبار أداء ولم تجرِ PromptQuorum أيًّا منها.',
            'غير متحقق منه: مدى جودة تشغيل النماذج المحلية للوكيل؛ فالوثائق توصي بنموذج للاستخدام المحلي لكنها لا تقدّم أرقام جودة.',
            'غير متحقق منه: الكيان القانوني وراء المشروع؛ فسياسة الخصوصية تذكر فقط «فريق Nanobrowser» مع عنوان تواصل، دون اسم شركة أو عنوان أو دولة.',
            'غير متحقق منه: هل تصمد تصريحات الخصوصية عمليًا؛ لم نجد تدقيقًا مستقلًا.',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: 'البدائل',
          content: [
            '**Nanobrowser إضافة متصفح؛ أما البدائل في الفئة نفسها من الدليل فهي مكتبة Python ومتصفحات ذكاء اصطناعي كاملة ووكيل سطح مكتب.** ولم تقارنها PromptQuorum عمليًا.',
          ],
          columns: ['الأداة', 'المذكور في المصادر'],
          rows: [
            { 'الأداة': 'Nanobrowser', 'المذكور في المصادر': 'إضافة لمتصفحي Chrome وEdge؛ Apache-2.0؛ نماذج سحابية أو محلية' },
            { 'الأداة': '[Browser Use](/ar/power-local-llm/browser-use-review)', 'المذكور في المصادر': 'مكتبة Python وأداة CLI لبرمجة وكيل متصفح؛ MIT؛ سحابة مدفوعة اختيارية' },
            { 'الأداة': '[BrowserOS](/ar/power-local-llm/browseros-review)', 'المذكور في المصادر': 'متصفح ذكاء اصطناعي (تفرُّع من Chromium) لأنظمة Mac وWindows وLinux؛ AGPL-3.0' },
            { 'الأداة': '[LastBrowser](/ar/power-local-llm/lastbrowser-review)', 'المذكور في المصادر': 'متصفح سطح مكتب لنظام Windows مع شريط جانبي ذكي هو Sidekick' },
            { 'الأداة': '[Local Operator](/ar/power-local-llm/local-operator-review)', 'المذكور في المصادر': 'تطبيق وكيل لسطح المكتب يكتب الشيفرة وينفّذها على جهازك' },
          ],
        },
        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            {
              q: 'هل يعمل Nanobrowser في Firefox أو Brave؟',
              a: 'يذكر README أن Chrome وEdge فقط مدعومان، ويقول إن Firefox وSafari ومتصفحات Chromium الأخرى مثل Opera وArc وBrave لم تُختبر. ولم تجرّبها PromptQuorum.',
            },
            {
              q: 'كيف أربط Ollama أو LM Studio؟',
              a: 'بحسب الوثائق، اضبط OLLAMA_ORIGINS على chrome-extension://* ثم أعد تشغيل Ollama، وأدخل http://localhost:11434 عنوانًا للخادم وانقر Test models. ويحتاج LM Studio إلى تفعيل Enable CORS في إعدادات Developer، مع تشغيل الخادم على المنفذ 1234.',
            },
            {
              q: 'هل يستطيع الوكيل التصرف دون أن يسألني؟',
              a: 'في وضع Auto يرسل ويحذف ويرفع دون سؤال، لكن المدفوعات وكلمات المرور وأرقام البطاقات والرموز لمرة واحدة ومنح الصلاحيات تبقى عندك. وقاعدة موقع مضبوطة على Ask تفرض السؤال حتى في وضع Auto، أما Block فيمنع الوكيل من لمس الموقع.',
            },
            {
              q: 'ما الذي تغيّر في الإصدار 0.3.0؟',
              a: 'بحسب سجل التغييرات، حلّ وكيل واحد محل المخطِّط والمتنقِّل، وأصبح وضع Ask هو الافتراضي، ونال كل عنصر في الصفحة معرّفًا مرتبطًا بذلك العنصر تحديدًا، فتصيب النقرات الهدف المقصود.',
            },
            {
              q: 'هل يمكن تشغيل عدة مهام معًا مع نموذج محلي؟',
              a: 'يمكن بدؤها في مجموعات تبويب منفصلة، لكن الوثائق تقول إن كل خادم Ollama أو LM Studio يعالج طلبًا واحدًا في كل مرة، فتصطف المهام المحلية؛ أما الخوادم المضافة عبر المزوّد المتوافق مع OpenAI مثل llama.cpp أو vLLM فلا تُصفّ الطلبات.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'الخلاصة',
          content: [
            '**يستحق Nanobrowser التجربة إن أردت وكيل ذكاء اصطناعي مفتوح المصدر داخل Chrome أو Edge، مع خطوات موافقة وخيار نموذج محلي، وقبلت أنه لم يُختبر شيء هنا.**',
            'رخصته Apache-2.0، وتطويره نشط (آخر دفعة في 17 نوفمبر 2026، والإصدار 0.3.0 في 15 أكتوبر 2026)، وهو مجاني باستثناء رسوم مزوّد النموذج. والمقايضات: يذهب محتوى الصفحات إلى مزوّد النموذج الذي تختاره، وتقول الوثائق إن بعض الإجراءات قد تفوت الوكيل وتُنفَّذ دون موافقة، والنماذج المحلية تعمل بأفضل صورة مع المهام البسيطة، ولا تستند معدلات النجاح والسرعة إلى بيانات استطعنا التحقق منها. لم تختبره PromptQuorum؛ ابدأ بملف تعريف متصفح منفصل ومهام منخفضة المخاطر.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            '[موقع Nanobrowser](https://nanobrowser.ai) — وصف المنتج وروابط التثبيت، اطلعنا عليه في 20 نوفمبر 2026.',
            '[وثائق النماذج](https://nanobrowser.ai/docs/models) — المزوّدون واستدعاء الأدوات والأسعار، اطلعنا عليها في 20 نوفمبر 2026.',
            '[وثائق النماذج المحلية](https://nanobrowser.ai/docs/local-models) — إعداد Ollama وLM Studio، اطلعنا عليها في 20 نوفمبر 2026.',
            '[وثائق الصلاحيات](https://nanobrowser.ai/docs/permissions) — وضعا Ask وAuto وقواعد المواقع والتحذيرات، اطلعنا عليها في 20 نوفمبر 2026.',
            '[صفحة الخصوصية](https://nanobrowser.ai/docs/privacy) — مسارات البيانات والقياس عن بُعد، مؤرخة في 18 أكتوبر 2026، اطلعنا عليها في 20 نوفمبر 2026.',
            '[PRIVACY.md](https://github.com/nanobrowser/nanobrowser/blob/master/PRIVACY.md) — سياسة الخصوصية على GitHub، مؤرخة في 13 أكتوبر 2026، اطلعنا عليها في 20 نوفمبر 2026.',
            '[سجل التغييرات](https://nanobrowser.ai/changelog) — الإصدارات من 0.1.9 إلى 0.3.0، اطلعنا عليه في 20 نوفمبر 2026.',
            '[مستودع GitHub وملف README](https://github.com/nanobrowser/nanobrowser) — الرخصة وخطوات التثبيت وآخر دفعة، اطلعنا عليها في 20 نوفمبر 2026.',
            '[الإصدار 0.3.0](https://github.com/nanobrowser/nanobrowser/releases/tag/v0.3.0) — أحدث إصدار، صدر في 15 أكتوبر 2026.',
            '[صفحة Chrome Web Store](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) — الإصدار 0.3.0، حُدّثت في 16 أكتوبر 2026، مجانية، اطلعنا عليها في 20 نوفمبر 2026.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[مراجعة Browser Use](/ar/power-local-llm/browser-use-review) — مكتبة Python وأداة CLI مفتوحتا المصدر لوكلاء المتصفح.',
            '[مراجعة BrowserOS](/ar/power-local-llm/browseros-review) — متصفح ذكاء اصطناعي بمساعد مدمج.',
            '[مراجعة LastBrowser](/ar/power-local-llm/lastbrowser-review) — متصفح سطح مكتب بشريط جانبي ذكي.',
            '[مراجعة Local Operator](/ar/power-local-llm/local-operator-review) — تطبيق وكيل لسطح المكتب ينفّذ الشيفرة على جهازك.',
            '[دليل برمجيات النماذج اللغوية المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
          ],
        },
      },
    },
    ko: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-20',
      dateModified: '2026-11-20',
      next_refresh_due: '2027-05-20',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/nanobrowser-review-hero-ko.webp',
      title: 'Nanobrowser 리뷰: Chrome·Edge용 무료 오픈소스 AI 브라우저 에이전트',
      seoTitle: 'Nanobrowser 리뷰: 무료 AI 브라우저 에이전트',
      intro:
        'Nanobrowser는 Chrome과 Edge용 무료 오픈소스 브라우저 확장 프로그램으로, 사이드 패널에서 AI 에이전트가 작동합니다. 작업을 설명하면 페이지를 읽고, 클릭하고, 입력하고, 탭을 전환해 줍니다. 연결한 AI 모델(클라우드 제공업체 또는 Ollama나 LM Studio를 통한 로컬 모델)을 사용합니다. 이 리뷰는 2026년 11월 20일에 확인한 프로젝트의 웹사이트, 문서, GitHub 저장소, 개인정보 처리방침을 바탕으로 하며, PromptQuorum은 확장 프로그램을 테스트하지 않았습니다.',
      metaDescription:
        'Nanobrowser는 Chrome과 Edge용 무료 오픈소스 AI 브라우저 에이전트로, 클라우드 모델과 로컬 Ollama를 지원합니다. 개인정보, 모드, 한계. 미검증.',
      twitterDescription:
        'Nanobrowser 리뷰: Chrome과 Edge 사이드 패널에서 작동하는 무료 오픈소스 AI 에이전트. 기능, 페이지 데이터 흐름, 확인하지 못한 내용.',
      audience:
        '자신의 Chrome이나 Edge에서 AI 에이전트를 쓰고 싶은 사용자, Ollama와 LM Studio 사용자, 브라우저 에이전트를 비교하는 독자',
      readTime: '6분 읽기',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Nanobrowser',
      targetKeywords: [
        'Nanobrowser 리뷰',
        'Nanobrowser AI 브라우저 에이전트',
        'Nanobrowser Ollama',
        'Nanobrowser 개인정보',
        'Nanobrowser Chrome 확장 프로그램',
        'Nanobrowser 대안',
      ],
      current_models_mentioned: ['Ollama', 'LM Studio'],
      leadAnswerBlock:
        '**Nanobrowser(버전 0.3.0, 2026년 10월 15일 공개)는 Chrome 또는 Edge의 사이드 패널에서 AI 에이전트를 실행하는 Apache-2.0 라이선스의 무료 브라우저 확장 프로그램으로, 연결한 클라우드 모델 또는 로컬 모델을 사용합니다.** 페이지 내용은 해당 모델 제공업체로 전송되며, 문서에 따르면 Ollama나 LM Studio의 로컬 모델을 쓰면 내용이 사용자의 컴퓨터에 머뭅니다. 여기에 적은 내용은 모두 프로젝트의 웹사이트, 문서, 정책에서 가져온 것이며 PromptQuorum은 테스트하지 않았습니다.',
      quickAnswerTop: {
        ko: {
          question: 'Nanobrowser는 무료이며 로컬 모델을 사용할 수 있나요?',
          answer:
            '확장 프로그램은 무료이고 계정이 필요 없으며, 모델 제공업체에만 비용을 냅니다. Ollama나 LM Studio의 로컬 모델도 쓸 수 있지만, 문서에 따르면 모델이 도구 호출을 지원해야 하고 로컬 모델은 짧고 명확한 작업에 가장 적합합니다.',
          bullets: [
            'Chrome 웹 스토어에서 한 번의 클릭으로 설치할 수 있으며, Edge 부가 기능 페이지도 안내되어 있습니다.',
            'Ask 모드(기본값)는 제출, 전송, 삭제, 업로드 전에 확인하고, Auto 모드는 확인하지 않습니다.',
            '로컬 설정: Ollama에서는 OLLAMA_ORIGINS로 확장 프로그램을 허용하고, LM Studio에서는 CORS를 켭니다.',
            '익명 사용량 집계는 기본적으로 켜져 있으며 설정에서 끌 수 있습니다.',
          ],
          updatedDate: '2026-11',
        },
      },
      toc: [
        { label: '핵심 내용', anchor: 'tldr' },
        { label: '개요', anchor: 'overview' },
        { label: '설치 방법', anchor: 'get-it' },
        { label: '기능', anchor: 'features' },
        { label: '개인정보와 데이터 흐름', anchor: 'privacy' },
        { label: '요금과 라이선스', anchor: 'pricing' },
        { label: '적합한 사용자', anchor: 'who-should-use' },
        { label: '한계와 확인하지 못한 내용', anchor: 'who-should-not-use' },
        { label: '대안', anchor: 'alternatives' },
        { label: '자주 묻는 질문', anchor: 'faq' },
        { label: '총평', anchor: 'verdict' },
        { label: '출처', anchor: 'sources' },
        { label: '관련 글', anchor: 'related-reading' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          title: '핵심 내용',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'Nanobrowser는 Chrome과 Edge용 무료 오픈소스 확장 프로그램으로, 로그인된 사용자의 브라우저에서 AI 에이전트가 페이지를 읽고 클릭하고 입력하며, 연결한 클라우드 모델 또는 로컬 모델을 사용합니다.' },
            { type: 'plain-terms', text: '사이드 패널에 작업을 입력하면 에이전트가 열려 있는 탭에서 작업하고, 제출이나 삭제 같은 민감한 단계 전에 확인을 요청합니다. 모델이 페이지를 읽기 때문에 페이지 내용은 선택한 모델로 전송됩니다.' },
          ],
          items: [
            '유지보수: 저장소의 마지막 푸시는 2026년 11월 17일이고 최신 릴리스 0.3.0은 2026년 10월 15일이므로 방치된 프로젝트 경고는 해당하지 않습니다.',
            '라이선스: Apache-2.0. 확장 프로그램은 무료이며 모델 제공업체에 직접 비용을 냅니다.',
            '재구성: 변경 내역에 따르면 버전 0.3.0에서 기존의 플래너와 내비게이터가 하나의 에이전트로 대체되었습니다.',
            '모델: 도구 호출을 지원하는 모델이 필요합니다. 클라우드는 Anthropic, OpenAI, Google Gemini, AWS Bedrock, OpenRouter, xAI, DeepSeek, Mistral 등과 OpenAI 호환 엔드포인트를 지원합니다.',
            '안전: 문서는 웹 페이지가 에이전트를 속여 사용자의 데이터를 다른 곳으로 보내는 주소를 열게 할 수 있다고 경고하며, 에이전트의 동작을 지켜보라고 권합니다.',
          ],
          callouts: [
            { type: 'note', text: '이 리뷰는 2026년 11월 20일에 확인한 프로젝트의 웹사이트, 문서, GitHub 저장소, 개인정보 처리방침을 바탕으로 합니다. PromptQuorum은 Nanobrowser를 설치하거나 실행하지 않았으므로 성공률, 속도, 작업당 비용은 평가하지 않았습니다. 로그인된 브라우저에서 클릭하고 입력하는 에이전트는 의도하지 않은 동작을 할 수 있습니다. 일반적인 정보이며 보안 조언이 아닙니다.' },
          ],
        },
        overview: {
          id: 'overview',
          title: '개요',
          content: [
            '**Nanobrowser는 별도의 브라우저가 아니라 로그인된 사용자 자신의 브라우저 안에서 작동하는 AI 에이전트입니다.** README와 웹사이트에 따르면, 사이드 패널(도구 모음 아이콘 또는 Alt+Shift+N으로 열기)에 작업을 설명하면 에이전트가 페이지를 읽고, 클릭하고, 입력하고, 탭 사이를 이동하며, 여러 작업을 서로 다른 탭 그룹에서 실행할 수 있습니다.',
            'README는 Chrome과 Edge를 지원 브라우저로, Firefox, Safari, 기타 Chromium 기반 브라우저(Opera, Arc, Brave)를 미검증으로 표기합니다. 코드는 Apache License 2.0으로 GitHub에 공개되어 있으며, 저장소는 2024년 12월 31일에 만들어졌고 마지막 푸시는 2026년 11월 17일, 최신 릴리스 0.3.0은 2026년 10월 15일이므로 개발이 활발합니다.',
            '변경 내역에 따르면 버전 0.3.0은 사이드 패널의 단일 에이전트를 중심으로 확장 프로그램을 다시 만들었고, 버전 0.2.0은 모델 호출을 LangChain에서 Vercel AI SDK로 옮기고 Groq, Cerebras, Llama API 제공업체를 제거했습니다.',
          ],
        },
        getIt: {
          id: 'get-it',
          title: '설치 방법',
          content: [
            '**Nanobrowser는 다른 브라우저 확장 프로그램처럼 Chrome 웹 스토어(Edge 부가 기능 페이지도 안내됨)에서 추가한 뒤 모델을 연결해 설치합니다.** 로컬 모델을 쓰거나 소스에서 빌드하는 경우가 아니면 터미널은 필요 없습니다.',
          ],
          columns: ['경로', '설치 방법'],
          rows: [
            { '경로': 'Chrome 웹 스토어', '설치 방법': '[Nanobrowser 페이지](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) (무료)' },
            { '경로': 'Microsoft Edge', '설치 방법': '[Edge 부가 기능 페이지](https://microsoftedge.microsoft.com/addons/detail/nanobrowser-ai-web-agent/ajdioenfpgabnjlclgckbbnjjhdnjkhn)' },
            { '경로': '웹사이트', '설치 방법': '[nanobrowser.ai](https://nanobrowser.ai)' },
            { '경로': '소스 코드', '설치 방법': '[GitHub](https://github.com/nanobrowser/nanobrowser) (Apache-2.0)' },
            { '경로': '개인정보 처리방침', '설치 방법': '[nanobrowser.ai/docs/privacy](https://nanobrowser.ai/docs/privacy)' },
            { '경로': '소스에서 빌드', '설치 방법': 'Node.js 24 LTS와 pnpm 10' },
          ],
          codeBlock: '# Optional: build from source (Node.js 24 LTS, pnpm 10)\ncorepack enable\npnpm install\npnpm build\n\n# Local Ollama started by hand: allow the extension\nOLLAMA_ORIGINS="chrome-extension://*" ollama serve',
          codeLanguage: 'bash',
          note: '확인한 버전: 0.3.0. GitHub Releases 기준 2026년 10월 15일에 공개되었고, Chrome 웹 스토어 페이지는 0.3.0(2026년 10월 16일 업데이트)으로 표시합니다. 마지막 업스트림 업데이트(푸시)는 2026년 11월 17일입니다. GitHub 릴리스에는 개발자 모드용 압축 해제본인 nanobrowser-0.3.0.zip만 들어 있습니다.',
        },
        features: {
          id: 'features',
          title: '기능',
          content: [
            '**아래 내용은 모두 README 또는 문서에 나온 프로젝트 측 설명이며, PromptQuorum은 어느 것도 테스트하지 않았습니다.**',
          ],
          items: [
            '**병렬 작업이 가능한 사이드 패널 채팅.** 여러 작업을 서로 다른 탭 그룹에서 실행할 수 있고, 이미지·파일·스크린샷을 첨부할 수 있으며, 결과는 CSV나 Markdown으로 다운로드 폴더에 저장됩니다.',
            '**Ask 모드와 Auto 모드.** Ask 모드(기본값)는 제출, 전송, 삭제, 업로드 전에 승인 카드를 보여 주고, Auto 모드는 생략합니다. 문서에 따르면 결제, 비밀번호, 코드, 접근 권한 부여는 항상 사용자에게 맡겨집니다.',
            '**사이트별 규칙.** 각 사이트를 Allow, Ask, Block으로 설정할 수 있으며, 사이트 규칙은 모드보다 우선하고 정확한 호스트에 적용됩니다.',
            '**채팅별 모델 선택.** 채팅마다 모델과 추론 강도를 고를 수 있고, 설정의 Test models 버튼이 도구 호출을 지원하지 않는 모델을 표시합니다.',
            '**모델이 지원하면 비전 사용.** 비전 모델이면 에이전트가 스크린샷을 찍고 첨부된 이미지를 볼 수 있으며, 아니면 페이지를 텍스트로 읽습니다.',
            '**단축 명령, 음성, 메모리.** 슬래시로 호출하는 저장된 프롬프트 단축 명령, 음성 입력, 영구 메모리, 긴 채팅의 자동 요약이 있습니다.',
            '**내보내기가 가능한 채팅 기록.** 채팅을 Markdown으로 내보낼 수 있으며, README는 영어, 중국어 간체, 중국어 번체 인터페이스를 명시합니다.',
            '**요소 ID.** README에 따르면 AI 모델이 없는 제어 계층이 각 페이지 요소에 안정적인 ID를 부여하고, 실제 브라우저 입력을 수행하며, 동작 전에 상태를 확인합니다. Chrome 디버거 API와 Puppeteer를 사용합니다.',
          ],
        },
        privacy: {
          id: 'privacy',
          title: '개인정보와 데이터 흐름',
          content: [
            '**개인정보 처리방침에 따르면 Nanobrowser에는 계정이 없고 채팅이나 페이지를 받는 Nanobrowser 서버도 없습니다. 메시지, 첨부 파일, 에이전트가 작업하는 탭의 내용, 비전 모델의 경우 스크린샷이 사용자의 브라우저에서 선택한 모델 제공업체로 전송됩니다.** Ollama나 LM Studio의 로컬 모델을 쓰면 정책에 따라 이 데이터는 사용자의 컴퓨터에 머뭅니다. 또한 정책에 따르면 비밀번호, 카드, 일회용 코드 입력란의 값은 인식되면 전송되지 않고, 로그인 정보와 쿠키는 브라우저에 남습니다.',
            '개인정보 처리방침에는 두 가지 데이터 흐름이 더 있습니다. 음성 입력을 켜면 선택한 OpenAI 또는 Google 음성 모델로 오디오가 전송되며, 정책은 녹음을 보관하지 않는다고 밝힙니다. 기본적으로 켜져 있는 두 개의 원격 측정 스위치는 익명의 일일 집계와 일일 사용량 합계(작업 수, 사용한 도구, 오류 코드)를 미국의 PostHog로 보내며 1년간 보관됩니다. 정책에 따르면 페이지, 방문한 사이트, 메시지, 파일, 키는 포함되지 않으며 두 스위치 모두 설정의 데이터 항목에서 끌 수 있습니다. 제거 시에는 선택 사항인 Google Forms 설문이 열립니다.',
            '권한 문서는 세 가지 주의 사항을 덧붙입니다. 페이지를 여는 동작에는 승인이 필요 없으므로 페이지가 에이전트를 속여 사용자의 데이터를 다른 곳으로 보내는 주소를 열게 할 수 있고, 입력은 제한되지 않으므로 페이지가 에이전트가 입력하는 내용을 관찰할 수 있으며, 프롬프트 인젝션이 위험 요소이므로 에이전트를 지켜보고 Stop을 사용해야 합니다. 확인한 정책 문서의 날짜는 2026년 10월 13일(GitHub)과 2026년 10월 18일(웹사이트)이며, PromptQuorum은 네트워크 트래픽을 검사하지 않았습니다.',
          ],
          callouts: [
            { type: 'note', text: '이는 프로젝트 자체의 설명이며 감사 결과가 아닙니다. 업무용 또는 고객 계정에서는 먼저 정책을 읽고, 별도의 브라우저 프로필을 사용하고, Ask 모드를 켜 두십시오. 웹사이트를 자동화하면 이용 약관을 위반할 수 있으므로, 에이전트를 사이트에 사용하기 전에 약관을 확인하십시오. 일반적인 정보이며 보안 또는 법률 조언이 아닙니다.' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: '요금과 라이선스',
          content: [
            '**확장 프로그램은 Apache License 2.0으로 무료이며, 사용한 만큼 모델 제공업체에 비용을 냅니다.** 문서에 따르면 긴 작업과 텍스트가 많은 페이지는 비용이 더 들고, 로컬 모델은 실행에 비용이 들지 않습니다.',
            '웹사이트와 Chrome 웹 스토어 페이지에는 가입, 구독, 유료 등급이 표시되어 있지 않습니다. 문서에 따르면 API 키는 브라우저에 저장되고 해당 제공업체에만 전송됩니다.',
          ],
          columns: ['항목', '비용', '비고'],
          rows: [
            { '항목': '확장 프로그램', '비용': '무료', '비고': 'Apache-2.0, 계정 불필요' },
            { '항목': '클라우드 모델', '비용': '제공업체 요금', '비고': '제공업체가 청구' },
            { '항목': '로컬 모델', '비용': '실행 무료', '비고': '내 하드웨어, 컨텍스트 16k+' },
          ],
          note: '비용은 제공업체와 작업에 따라 달라집니다. PromptQuorum은 작업당 비용을 측정하지 않았습니다.',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: '적합한 사용자',
          items: [
            '로그인된 Chrome이나 Edge 안에서 AI 에이전트를 쓰고 싶고, 민감한 동작 전에 눈에 보이는 승인 단계를 원하는 사용자.',
            'Ollama나 LM Studio를 쓰면서 로컬 모델로 브라우저 에이전트를 시험해 보고 싶고, 문서가 짧고 명확한 작업을 권한다는 점을 받아들이는 사용자.',
            'Node.js 24 LTS와 pnpm 10으로 직접 빌드할 수 있는 Apache-2.0 코드베이스를 원하는 개발자.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '한계와 확인하지 못한 내용',
          content: [
            '**페이지 내용이 제3자 모델로 가면 안 되거나, 놓친 동작이 금전이나 데이터 손실로 이어질 수 있다면 Nanobrowser는 적합하지 않습니다.** 확인하지 못한 점도 여러 가지입니다.',
          ],
          items: [
            '부적합: 눈치채지 못한 클릭이 피해를 주는 작업. 문서에 따르면 아이콘만 있는 버튼, 자동 저장 스위치, 끌어다 놓기 동작은 놓칠 수 있고, 그 경우 Ask 모드에서도 승인 없이 실행됩니다.',
            '부적합: Firefox, Safari 및 기타 Chromium 기반 브라우저(README는 미검증으로 표기).',
            '미확인: 작업 성공률, 속도, 작업당 비용. 출처에 벤치마크가 없고 PromptQuorum도 실행하지 않았습니다.',
            '미확인: 로컬 모델이 에이전트를 얼마나 잘 구동하는지. 문서는 로컬용 모델을 권장하지만 품질 수치는 제시하지 않습니다.',
            '미확인: 프로젝트 뒤의 법적 주체. 개인정보 처리방침은 연락처와 함께 "Nanobrowser 팀"만 언급하며 회사명, 주소, 국가는 밝히지 않습니다.',
            '미확인: 개인정보 관련 설명이 실제로 지켜지는지. 독립적인 감사는 확인하지 못했습니다.',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: '대안',
          content: [
            '**Nanobrowser는 브라우저 확장 프로그램이며, 같은 디렉터리 분류의 대안은 Python 라이브러리, AI 브라우저 자체, 데스크톱 에이전트입니다.** PromptQuorum은 직접 비교해 보지 않았습니다.',
          ],
          columns: ['도구', '출처에서 언급된 내용'],
          rows: [
            { '도구': 'Nanobrowser', '출처에서 언급된 내용': 'Chrome·Edge 확장 프로그램, Apache-2.0, 클라우드 또는 로컬 모델' },
            { '도구': '[Browser Use](/ko/power-local-llm/browser-use-review)', '출처에서 언급된 내용': '브라우저 에이전트를 만드는 Python 라이브러리와 CLI, MIT, 유료 클라우드는 선택' },
            { '도구': '[BrowserOS](/ko/power-local-llm/browseros-review)', '출처에서 언급된 내용': 'Mac·Windows·Linux용 AI 브라우저(Chromium 포크), AGPL-3.0' },
            { '도구': '[LastBrowser](/ko/power-local-llm/lastbrowser-review)', '출처에서 언급된 내용': 'AI 사이드바 Sidekick이 내장된 Windows용 데스크톱 브라우저' },
            { '도구': '[Local Operator](/ko/power-local-llm/local-operator-review)', '출처에서 언급된 내용': '컴퓨터에서 코드를 작성하고 실행하는 데스크톱 에이전트 앱' },
          ],
        },
        faq: {
          id: 'faq',
          title: '자주 묻는 질문',
          faqs: [
            {
              q: 'Nanobrowser는 Firefox나 Brave에서 작동하나요?',
              a: 'README는 Chrome과 Edge만 지원 브라우저로 표기하고, Firefox, Safari 및 Opera, Arc, Brave 같은 기타 Chromium 기반 브라우저는 미검증이라고 밝힙니다. PromptQuorum은 시험해 보지 않았습니다.',
            },
            {
              q: 'Ollama나 LM Studio는 어떻게 연결하나요?',
              a: '문서에 따르면 OLLAMA_ORIGINS를 chrome-extension://*로 설정하고 Ollama를 다시 시작한 뒤, 서버 주소에 http://localhost:11434를 입력하고 Test models를 클릭합니다. LM Studio는 Developer 설정에서 Enable CORS를 켜고 서버를 1234번 포트로 실행해야 합니다.',
            },
            {
              q: '에이전트가 묻지 않고 동작할 수 있나요?',
              a: 'Auto 모드에서는 묻지 않고 제출, 전송, 삭제, 업로드를 하지만, 결제, 비밀번호, 카드 번호, 일회용 코드, 접근 권한 부여는 계속 사용자에게 맡겨집니다. Ask로 설정한 사이트 규칙은 Auto 모드에서도 확인을 강제하고, Block은 에이전트가 그 사이트를 건드리지 못하게 합니다.',
            },
            {
              q: '버전 0.3.0에서 무엇이 바뀌었나요?',
              a: '변경 내역에 따르면 하나의 에이전트가 플래너와 내비게이터를 대체했고, Ask 모드가 기본값이 되었으며, 각 페이지 요소에 그 요소에만 연결된 ID가 부여되어 클릭이 의도한 대상에 닿습니다.',
            },
            {
              q: '로컬 모델로 여러 작업을 동시에 실행할 수 있나요?',
              a: '서로 다른 탭 그룹에서 시작할 수는 있지만, 문서에 따르면 Ollama나 LM Studio 서버는 한 번에 하나의 요청만 처리하므로 로컬 작업은 대기열에 쌓입니다. OpenAI 호환 제공업체로 추가한 llama.cpp나 vLLM 같은 서버는 대기열을 만들지 않습니다.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '총평',
          content: [
            '**승인 단계와 로컬 모델 선택지를 갖춘 오픈소스 AI 에이전트를 Chrome이나 Edge에서 쓰고 싶고, 여기서는 아무것도 테스트하지 않았다는 점을 받아들인다면 Nanobrowser는 시험해 볼 만합니다.**',
            'Apache-2.0이고 개발이 활발하며(마지막 푸시 2026년 11월 17일, 릴리스 0.3.0은 2026년 10월 15일) 모델 제공업체 요금을 제외하면 무료입니다. 절충점은 페이지 내용이 선택한 모델 제공업체로 전송된다는 것, 문서에 따르면 일부 동작은 놓쳐 승인 없이 실행될 수 있다는 것, 로컬 모델은 단순한 작업에 가장 적합하다는 것, 성공률과 속도는 우리가 확인할 수 있는 데이터가 없다는 것입니다. PromptQuorum은 테스트하지 않았습니다. 별도의 브라우저 프로필과 위험이 낮은 작업부터 시작하십시오.',
          ],
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            '[Nanobrowser 웹사이트](https://nanobrowser.ai) — 제품 설명과 설치 링크, 2026년 11월 20일 확인.',
            '[모델 문서](https://nanobrowser.ai/docs/models) — 제공업체, 도구 호출, 가격, 2026년 11월 20일 확인.',
            '[로컬 모델 문서](https://nanobrowser.ai/docs/local-models) — Ollama와 LM Studio 설정, 2026년 11월 20일 확인.',
            '[권한 문서](https://nanobrowser.ai/docs/permissions) — Ask·Auto 모드, 사이트 규칙, 경고, 2026년 11월 20일 확인.',
            '[개인정보 페이지](https://nanobrowser.ai/docs/privacy) — 데이터 흐름과 원격 측정, 날짜 2026년 10월 18일, 2026년 11월 20일 확인.',
            '[PRIVACY.md](https://github.com/nanobrowser/nanobrowser/blob/master/PRIVACY.md) — GitHub의 개인정보 처리방침, 날짜 2026년 10월 13일, 2026년 11월 20일 확인.',
            '[변경 내역](https://nanobrowser.ai/changelog) — 버전 0.1.9부터 0.3.0까지, 2026년 11월 20일 확인.',
            '[GitHub 저장소와 README](https://github.com/nanobrowser/nanobrowser) — 라이선스, 설치 단계, 마지막 푸시, 2026년 11월 20일 확인.',
            '[릴리스 0.3.0](https://github.com/nanobrowser/nanobrowser/releases/tag/v0.3.0) — 최신 릴리스, 2026년 10월 15일 공개.',
            '[Chrome 웹 스토어 페이지](https://chromewebstore.google.com/detail/nanobrowser/imbddededgmcgfhfpcjmijokokekbkal) — 버전 0.3.0, 2026년 10월 16일 업데이트, 무료, 2026년 11월 20일 확인.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 글',
          items: [
            '[Browser Use 리뷰](/ko/power-local-llm/browser-use-review) — 브라우저 에이전트용 오픈소스 Python 라이브러리와 CLI.',
            '[BrowserOS 리뷰](/ko/power-local-llm/browseros-review) — 어시스턴트가 내장된 AI 브라우저.',
            '[LastBrowser 리뷰](/ko/power-local-llm/lastbrowser-review) — AI 사이드바가 있는 데스크톱 브라우저.',
            '[Local Operator 리뷰](/ko/power-local-llm/local-operator-review) — 컴퓨터에서 코드를 실행하는 데스크톱 에이전트 앱.',
            '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
          ],
        },
      },
    },
}
