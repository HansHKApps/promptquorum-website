// Browser Use Review: open-source AI browser agent (Python library, CLI, hosted cloud)
// Slug: browser-use-review
// Companion to: local-operator-review, open-interpreter-review, agent-zero-review
// Sources (all read 2026-11-19, no hands-on testing): browser-use.com, privacy policy, terms of service, GitHub repository, README, pyproject.toml,
// LICENSE, release 1.0.6, localhosted.com listing. The request came from the site owner, not from the maker.
// Last upstream update 2026-11-19 (GitHub last push; latest release 1.0.6 on 2026-11-16) => no stale warning.
// Theme: 'Local AI Agents & Tool Use' (same theme as the other agent reviews).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-19',
      dateModified: '2026-11-19',
      next_refresh_due: '2027-05-19',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/browser-use-review-hero-en.webp',
      title: 'Browser Use Review: Open-Source AI Browser Agent for Python',
      seoTitle: 'Browser Use Review: Open-Source Browser Agent, Pricing',
      intro:
        'Browser Use is an open-source Python library and command-line tool from Browser Use, Inc. that lets an AI model operate a real web browser to complete tasks such as filling in forms or collecting data. The same company sells a paid cloud browser and a hosted agent API. This review is based on the maker\'s website, its GitHub repository and its legal pages, read on 19 November 2026; PromptQuorum has not tested the software.',
      metaDescription:
        'Browser Use is an MIT-licensed Python library and CLI that lets an AI model drive a browser. Local or hosted models, cloud pricing, privacy; untested.',
      twitterDescription:
        'Browser Use review: an open-source AI browser agent for Python with an optional paid cloud. What it does, how it handles data, what we could not verify.',
      audience:
        'Python developers and agent builders who want an AI model to automate web tasks, and readers weighing a free library against a paid cloud browser',
      readTime: '6 min read',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Browser Use',
      targetKeywords: [
        'Browser Use review',
        'Browser Use AI browser agent',
        'Browser Use pricing',
        'Browser Use Ollama',
        'Browser Use cloud',
        'Browser Use alternatives',
      ],
      current_models_mentioned: ['Ollama'],
      leadAnswerBlock:
        '**Browser Use (version 1.0.6, released on 16 November 2026) is a free, MIT-licensed Python library and command-line tool in which an AI model operates a real browser by writing Python code.** The default setup uses the maker\'s hosted model and a paid cloud browser, but you can run a local Chrome and point it at a local Ollama model. Every statement here comes from the maker\'s website, README and legal pages; PromptQuorum has not tested it.',
      quickAnswerTop: {
        en: {
          question: 'Is Browser Use free, and does it run locally?',
          answer:
            'The library is free and MIT-licensed, and it can drive a Chrome on your own machine. Out of the box, though, it uses a Browser Use Cloud browser and the maker\'s hosted model, both billed by usage after a $1 credit, so a local-only setup means choosing a local browser and your own model.',
          bullets: [
            'Needs Python 3.11 or newer; three routes: hosted API, CLI or Python library.',
            'Browsers: Browser Use Cloud, a fresh local Chromium, or your own open Chrome with its logins.',
            'Models: hosted bu-4.0 by default, OpenAI, Anthropic, Google, or a local Ollama model through an OpenAI-compatible endpoint.',
            'The README says its domain limits and secret masking are not a sandbox.',
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
            { type: 'one-sentence', text: 'Browser Use is an open-source Python library and CLI that lets an AI model control a real browser by writing and running Python, with an optional paid cloud browser and hosted agent from the same company.' },
            { type: 'plain-terms', text: 'You give the agent a task in plain language, it opens a browser, clicks and types through Chrome\'s debugging protocol and returns a result. The model reads the pages, so page content goes to whichever model you configure.' },
          ],
          items: [
            'Maintenance: the repository was last pushed to on 19 November 2026 and the latest release, 1.0.6, is from 16 November 2026, so no stale-project warning applies.',
            'License: MIT for the library; Browser Use Cloud and its hosted models are separate paid services.',
            'Cost: the website lists $0.06 per browser hour for stealth browsers and $0.006 per task (median) for web agents; new accounts get $1 of free credit.',
            'Local option: the README shows a local Chromium plus an Ollama model through an OpenAI-compatible endpoint.',
            'Release pace: the README says releases move fast and can break things, and advises pinning an exact version.',
          ],
          callouts: [
            { type: 'note', text: 'This review rests on the maker\'s website, GitHub repository, README and legal pages, read on 19 November 2026. PromptQuorum has not installed or run Browser Use, so success rates, speed and cost per task are not assessed. An agent that clicks and logs in on your behalf can take actions you did not intend. This is general information, not security advice.' },
          ],
        },
        overview: {
          id: 'overview',
          title: 'Overview',
          content: [
            '**Browser Use is an AI browser agent from Browser Use, Inc.: you describe a task, and a model completes it in a real browser.** Per the README, the model writes Python in one persistent REPL, using the browser-harness helpers and the Chrome DevTools Protocol, and the library runs on Pydantic AI since version 1.0.',
            'The terms of service say Browser Use is headquartered in the United States. The repository was created on 31 October 2024 and was last pushed to on 19 November 2026; the latest release, 1.0.6, is from 16 November 2026, so development is active. The README tells users coming from the 0.x versions to read the migration guide.',
            'The company sells three things: the open-source library, Browser Use Cloud (stealth browsers with CAPTCHA solving, plus a hosted agent API) and enterprise deployments. Only the library is open source.',
          ],
        },
        getIt: {
          id: 'get-it',
          title: 'How to Get It',
          content: [
            '**Browser Use has no installer: you use it through a hosted API, a CLI or a Python library, and the library needs Python 3.11 or newer.**',
          ],
          columns: ['Route', 'How to get it'],
          rows: [
            { 'Route': 'Hosted cloud', 'How to get it': '[Browser Use Cloud](https://cloud.browser-use.com): API, $1 free credit' },
            { 'Route': 'CLI', 'How to get it': '`uv tool install browser-use==1.0.6`' },
            { 'Route': 'Python library', 'How to get it': '`uv add \'browser-use==1.0.6\'` or pip (Python 3.11+)' },
            { 'Route': 'Website', 'How to get it': '[browser-use.com](https://browser-use.com)' },
            { 'Route': 'Source code', 'How to get it': '[GitHub](https://github.com/browser-use/browser-use) (MIT)' },
            { 'Route': 'Privacy policy', 'How to get it': '[browser-use.com/privacy](https://browser-use.com/privacy)' },
          ],
          codeBlock: '# CLI (uv)\nuv tool install browser-use==1.0.6\nbrowser-use skill install\n\n# Python library (Python 3.11+)\nuv add \'browser-use==1.0.6\'\nexport BROWSER_USE_API_KEY=bu_...',
          codeLanguage: 'bash',
          note: 'Version reviewed: 1.0.6, released on 16 November 2026 per GitHub Releases and matching pyproject.toml; last upstream update (push) on 19 November 2026. The README advises pinning an exact version, because releases move fast and can break things.',
        },
        features: {
          id: 'features',
          title: 'Features',
          content: [
            '**Everything below is a maker statement from the README or website; none of it was tested by PromptQuorum.**',
          ],
          items: [
            '**An agent that writes Python.** The model works in a REPL against the browser through raw Chrome DevTools Protocol calls and ends with a result.',
            '**Several browser modes.** A Browser Use Cloud browser (the default), a fresh local Chrome or Chromium with a temporary profile, your own open Chrome with your logins, or a copy of one of your Chrome profiles.',
            '**Choice of model.** The hosted bu-4.0 family by default, built-in OpenAI, Anthropic and Google classes, any Pydantic AI model string, or an OpenAI-compatible server such as Ollama.',
            '**Typed results, uploads and downloads.** Structured output through a schema, file uploads to pages and downloaded files collected in a workspace folder.',
            '**Secrets and limits.** Domain-scoped secrets masked in logs and results, plus allowed and prohibited domain lists. The README states that neither is a sandbox.',
            '**Custom tools and web search.** Python functions can be registered as agent tools; an optional web search is billed per search to your Browser Use key.',
            '**A judge step.** After a run, one more request to the same model rates the outcome against the task, using the trace and, unless disabled, screenshots.',
            '**CAPTCHAs.** Cloud browsers solve CAPTCHAs automatically; the README adds that results depend on the site and that no configuration guarantees success.',
          ],
        },
        privacy: {
          id: 'privacy',
          title: 'Privacy and Data Flow',
          content: [
            '**Browser Use sends what the agent sees to a model, so page content, screenshots and your task text leave your computer unless both the browser and the model are local.** In the default setup the model is the maker\'s hosted gateway and the browser runs in Browser Use Cloud; with a local Chromium and an Ollama model, both stay on your machine.',
            'The privacy policy names Browser Use, Inc. as the responsible entity and lists user-provided inputs and prompts among the data it collects; card payments go through Stripe. The README adds that anonymous telemetry events are recorded when telemetry is enabled, and that the judge step can send screenshots to the model.',
            'Two cautions come from the README: the live-view link of a cloud browser lets anyone who has it control that browser, and driving your own open Chrome gives the agent access to the sites you are logged into. PromptQuorum has not inspected network traffic.',
          ],
          callouts: [
            { type: 'note', text: 'These are the maker\'s statements, not audit results. For work or customer accounts, read the privacy policy and terms first and use a separate browser profile. Automating a website can breach its terms of service, so check them before running an agent against a site, especially with CAPTCHA-solving or stealth features.' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: 'Pricing and License',
          content: [
            '**The library is free; the cloud browser and hosted agent are paid by usage after a small credit.**',
            'The website lists $0.06 per browser hour for stealth browsers and $0.006 per task (median) for web agents, and says new accounts start with $1 free, one per person, with no expiry. The README names the same $1 credit for new Google, GitHub or Microsoft sign-ups. Enterprise terms such as SOC 2, HIPAA with a BAA, EU data residency and on-premise deployment are offered through sales. Model usage through your own provider is billed by that provider.',
          ],
          columns: ['Option', 'Price', 'Notes'],
          rows: [
            { 'Option': 'Library', 'Price': 'Free', 'Notes': 'MIT license, runs on your machine' },
            { 'Option': 'Cloud browsers', 'Price': '$0.06/browser hour', 'Notes': 'Stealth, CAPTCHA solving' },
            { 'Option': 'Web agents', 'Price': '$0.006/task (median)', 'Notes': 'Hosted agent API' },
          ],
          note: 'Prices are the maker\'s figures in US dollars, read on 19 November 2026. The task price is described as a median, so individual tasks can cost more or less.',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Who Should Use It',
          items: [
            'Python developers who want an AI model to automate web tasks and accept a young, fast-moving library.',
            'People who already run Claude Code, Codex or a similar agent and want to give it browser access through the CLI, as the README describes.',
            'Teams that want to try a local Ollama model driving a local browser, accepting that quality with small local models was not tested here.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Limits and What We Could Not Verify',
          content: [
            '**Browser Use is a poor fit if page content must not reach a third-party model, and many details remain unverified.**',
          ],
          items: [
            'Not a fit: tasks on accounts where an AI acting for you is not allowed, or where a wrong click costs money or data; the README itself says its safeguards are not a sandbox.',
            'Not a fit: users who want a double-click installer; the sources show none.',
            'Unverified: task success rates, speed and cost per task. The README shows a benchmark chart that PromptQuorum did not reproduce.',
            'Unverified: how well local models drive the browser. The README shows the Ollama setup but gives no quality figures.',
            'Unverified: stealth, CAPTCHA solving and bot-detection claims, which depend on the site and are the maker\'s statements.',
            'Unverified: enterprise security statements and data-residency options, which are offered through sales; no audit report was seen.',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: 'Alternatives',
          content: [
            '**Browser Use is a browser-specific agent; the alternatives in the same directory segment are broader computer or coding agents.** PromptQuorum has not compared them hands-on.',
          ],
          columns: ['Tool', 'Noted in sources'],
          rows: [
            { 'Tool': 'Browser Use', 'Noted in sources': 'Browser-only agent library and CLI; MIT; optional paid cloud' },
            { 'Tool': '[Local Operator](/power-local-llm/local-operator-review)', 'Noted in sources': 'Desktop app for agents that run code on your computer; MIT' },
            { 'Tool': '[Open Interpreter](/power-local-llm/open-interpreter-review)', 'Noted in sources': 'Lets a model control your computer and run code' },
            { 'Tool': '[Agent Zero](/power-local-llm/agent-zero-review)', 'Noted in sources': 'Self-hosted agent in Docker with a web interface' },
          ],
        },
        faq: {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            {
              q: 'Is Browser Use free?',
              a: 'The Python library is free under the MIT license. Browser Use Cloud and the hosted models are billed by usage, with $1 of free credit for new accounts per the website, and API providers charge separately if you use your own keys.',
            },
            {
              q: 'Can Browser Use run with a local model?',
              a: 'Yes, per the README FAQ: use a local Chromium and an OpenAI-compatible local endpoint such as Ollama on localhost port 11434. PromptQuorum has not tried it, and the sources give no minimum model size.',
            },
            {
              q: 'Does it use my own Chrome and logins?',
              a: 'It can: the Chrome mode drives the Chrome you have open, with your logins, after you enable remote debugging once in chrome://inspect. A temporary copy of a profile is also possible. This gives the agent access to those sessions, so use a separate profile for risky tasks.',
            },
            {
              q: 'Which version should I use?',
              a: 'The reviewed release is 1.0.6 from 16 November 2026. The README says to pin an exact version rather than a range, and the 1.0 line rewrote the agent, so read the migration guide when coming from 0.x.',
            },
            {
              q: 'Where is Browser Use based?',
              a: 'The terms of service say Browser Use is headquartered in the United States and are governed by California law. The privacy policy names Browser Use, Inc. as the responsible entity.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Verdict',
          content: [
            '**Browser Use is worth evaluating if you want to script an AI model driving a real browser from Python and accept that the default setup sends page content to hosted services.**',
            'It is open source under MIT, actively released (last push on 19 November 2026, release 1.0.6 on 16 November 2026) and supports a local Chrome with a local Ollama model. The trade-offs: no installer, fast-moving releases that the README says can break things, safeguards that are not a sandbox, paid cloud defaults, and claims about success rates, stealth and security that rest on the maker\'s own statements. PromptQuorum has not tested it; try it first on a throwaway profile and a low-risk task.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Browser Use website](https://browser-use.com) — products and pricing, checked 19 November 2026.',
            '[GitHub repository](https://github.com/browser-use/browser-use) — repository facts and last push, checked 19 November 2026.',
            '[README](https://github.com/browser-use/browser-use#readme) — install paths, browser modes, models and FAQ, checked 19 November 2026.',
            '[LICENSE](https://github.com/browser-use/browser-use/blob/main/LICENSE) — MIT license, checked 19 November 2026.',
            '[Release 1.0.6](https://github.com/browser-use/browser-use/releases/tag/1.0.6) — latest release, published 16 November 2026.',
            '[pyproject.toml](https://github.com/browser-use/browser-use/blob/main/pyproject.toml) — version and Python 3.11+ requirement, checked 19 November 2026.',
            '[Privacy policy](https://browser-use.com/privacy) — responsible entity and data collected, checked 19 November 2026.',
            '[Terms of service](https://browser-use.com/legal/terms-of-service) — headquartered in the United States, California law, checked 19 November 2026.',
            '[Localhosted listing](https://localhosted.com/browser-use) — directory listing with tags, checked 19 November 2026; the listing is not claimed by its owner.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Local Operator Review](/power-local-llm/local-operator-review) — a desktop app for agents that run code on your computer.',
            '[Open Interpreter Review](/power-local-llm/open-interpreter-review) — an agent that lets a model control your computer and run code.',
            '[Agent Zero Review](/power-local-llm/agent-zero-review) — a self-hosted agent that runs in Docker.',
            '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
            '[Nanobrowser Review](/power-local-llm/nanobrowser-review) — a free open-source Chrome and Edge extension whose agent clicks and types in your own browser, with a cloud model or a local Ollama or LM Studio model.',
          ],
        },
      },
    },
    de: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-19',
      dateModified: '2026-11-19',
      next_refresh_due: '2027-05-19',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/browser-use-review-hero-de.webp',
      title: 'Browser Use im Test: Open-Source-KI-Browser-Agent für Python',
      seoTitle: 'Browser Use Rezension: Open-Source-Browser-Agent, Preise',
      intro:
        'Browser Use ist eine Open-Source-Python-Bibliothek und ein Kommandozeilenwerkzeug von Browser Use, Inc., mit dem ein KI-Modell einen echten Webbrowser bedient, etwa um Formulare auszufüllen oder Daten zu sammeln. Dasselbe Unternehmen verkauft zudem einen kostenpflichtigen Cloud-Browser und eine gehostete Agent-API. Dieser Test beruht auf der Website des Herstellers, seinem GitHub-Repository und seinen Rechtstexten, gelesen am 19. November 2026; PromptQuorum hat die Software nicht getestet.',
      metaDescription:
        'Browser Use: MIT-lizenzierte Python-Bibliothek und CLI, mit der ein KI-Modell einen Browser steuert. Lokale oder gehostete Modelle, Preise, Datenschutz.',
      twitterDescription:
        'Browser Use im Test: ein Open-Source-KI-Browser-Agent für Python mit optionaler kostenpflichtiger Cloud. Funktionen, Datenfluss und was wir nicht prüfen konnten.',
      audience:
        'Python-Entwickler und Agenten-Bauer, die Web-Aufgaben von einem KI-Modell automatisieren lassen wollen, sowie Leser, die eine kostenlose Bibliothek mit einem kostenpflichtigen Cloud-Browser vergleichen',
      readTime: '6 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Browser Use',
      targetKeywords: [
        'Browser Use Rezension',
        'Browser Use KI-Browser-Agent',
        'Browser Use Preise',
        'Browser Use Ollama',
        'Browser Use Cloud',
        'Browser Use Alternativen',
      ],
      current_models_mentioned: ['Ollama'],
      leadAnswerBlock:
        '**Browser Use (Version 1.0.6, veröffentlicht am 16. November 2026) ist eine kostenlose, MIT-lizenzierte Python-Bibliothek und ein Kommandozeilenwerkzeug, mit denen ein KI-Modell einen echten Browser bedient, indem es Python-Code schreibt.** Die Standardeinrichtung nutzt das gehostete Modell des Herstellers und einen kostenpflichtigen Cloud-Browser; Sie können aber auch ein lokales Chrome starten und ein lokales Ollama-Modell anbinden. Alle Angaben stammen von Website, README und Rechtstexten des Herstellers; PromptQuorum hat das Programm nicht getestet.',
      quickAnswerTop: {
        de: {
          question: 'Ist Browser Use kostenlos, und läuft es lokal?',
          answer:
            'Die Bibliothek ist kostenlos und MIT-lizenziert und kann ein Chrome auf Ihrem eigenen Rechner steuern. Standardmäßig nutzt sie jedoch einen Browser von Browser Use Cloud und das gehostete Modell des Herstellers, beides nach einem Startguthaben von 1 US-Dollar nutzungsabhängig abgerechnet; für eine rein lokale Einrichtung wählen Sie einen lokalen Browser und ein eigenes Modell.',
          bullets: [
            'Erfordert Python 3.11 oder neuer; drei Wege: gehostete API, CLI oder Python-Bibliothek.',
            'Browser: Browser Use Cloud, ein frisches lokales Chromium oder Ihr eigenes geöffnetes Chrome mit Ihren Anmeldungen.',
            'Modelle: standardmäßig das gehostete bu-4.0, außerdem OpenAI, Anthropic, Google oder ein lokales Ollama-Modell über einen OpenAI-kompatiblen Endpunkt.',
            'Laut README sind Domain-Beschränkungen und Geheimnis-Maskierung keine Sandbox.',
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
            { type: 'one-sentence', text: 'Browser Use ist eine Open-Source-Python-Bibliothek mit CLI, mit der ein KI-Modell einen echten Browser steuert, indem es Python schreibt und ausführt, optional mit kostenpflichtigem Cloud-Browser und gehostetem Agenten desselben Unternehmens.' },
            { type: 'plain-terms', text: 'Sie geben dem Agenten eine Aufgabe in einfacher Sprache, er öffnet einen Browser, klickt und tippt über das Debugging-Protokoll von Chrome und liefert ein Ergebnis. Das Modell liest die Seiten, daher gelangt der Seiteninhalt zu dem Modell, das Sie konfigurieren.' },
          ],
          items: [
            'Pflege: Das Repository wurde zuletzt am 19. November 2026 aktualisiert, das neueste Release 1.0.6 stammt vom 16. November 2026; eine Warnung vor einem veralteten Projekt entfällt.',
            'Lizenz: MIT für die Bibliothek; Browser Use Cloud und die gehosteten Modelle sind getrennte kostenpflichtige Dienste.',
            'Kosten: Die Website nennt 0,06 US-Dollar pro Browser-Stunde für Stealth-Browser und 0,006 US-Dollar pro Aufgabe (Median) für Web-Agenten; neue Konten erhalten 1 US-Dollar Startguthaben.',
            'Lokale Option: Das README zeigt ein lokales Chromium mit einem Ollama-Modell über einen OpenAI-kompatiblen Endpunkt.',
            'Release-Tempo: Laut README erscheinen Releases schnell und können Dinge kaputt machen; es empfiehlt, eine exakte Version festzulegen.',
          ],
          callouts: [
            { type: 'note', text: 'Dieser Test beruht auf Website, GitHub-Repository, README und Rechtstexten des Herstellers, gelesen am 19. November 2026. PromptQuorum hat Browser Use weder installiert noch ausgeführt; Erfolgsquoten, Geschwindigkeit und Kosten pro Aufgabe wurden daher nicht bewertet. Ein Agent, der in Ihrem Namen klickt und sich anmeldet, kann Aktionen ausführen, die Sie nicht beabsichtigt haben. Dies sind allgemeine Informationen, keine Sicherheitsberatung.' },
          ],
        },
        overview: {
          id: 'overview',
          title: 'Überblick',
          content: [
            '**Browser Use ist ein KI-Browser-Agent von Browser Use, Inc.: Sie beschreiben eine Aufgabe, und ein Modell erledigt sie in einem echten Browser.** Laut README schreibt das Modell Python in einer persistenten REPL, nutzt die Hilfsfunktionen von browser-harness und das Chrome DevTools Protocol; seit Version 1.0 setzt die Bibliothek auf Pydantic AI auf.',
            'Laut Nutzungsbedingungen hat Browser Use seinen Hauptsitz in den Vereinigten Staaten. Das Repository wurde am 31. Oktober 2024 angelegt und zuletzt am 19. November 2026 aktualisiert; das neueste Release 1.0.6 stammt vom 16. November 2026, die Entwicklung ist also aktiv. Das README verweist Nutzer der 0.x-Versionen auf den Migrationsleitfaden.',
            'Das Unternehmen verkauft drei Dinge: die Open-Source-Bibliothek, Browser Use Cloud (Stealth-Browser mit CAPTCHA-Lösung sowie eine gehostete Agent-API) und Enterprise-Bereitstellungen. Nur die Bibliothek ist Open Source.',
          ],
        },
        getIt: {
          id: 'get-it',
          title: 'So bekommen Sie die Software',
          content: [
            '**Browser Use hat keinen Installer: Sie nutzen es über eine gehostete API, eine CLI oder eine Python-Bibliothek, und die Bibliothek erfordert Python 3.11 oder neuer.**',
          ],
          columns: ['Weg', 'So bekommen Sie es'],
          rows: [
            { 'Weg': 'Gehostete Cloud', 'So bekommen Sie es': '[Browser Use Cloud](https://cloud.browser-use.com): API, 1 US-Dollar Guthaben' },
            { 'Weg': 'CLI', 'So bekommen Sie es': '`uv tool install browser-use==1.0.6`' },
            { 'Weg': 'Python-Bibliothek', 'So bekommen Sie es': '`uv add \'browser-use==1.0.6\'` oder pip (Python 3.11+)' },
            { 'Weg': 'Website', 'So bekommen Sie es': '[browser-use.com](https://browser-use.com)' },
            { 'Weg': 'Quellcode', 'So bekommen Sie es': '[GitHub](https://github.com/browser-use/browser-use) (MIT)' },
            { 'Weg': 'Datenschutzerklärung', 'So bekommen Sie es': '[browser-use.com/privacy](https://browser-use.com/privacy)' },
          ],
          codeBlock: '# CLI (uv)\nuv tool install browser-use==1.0.6\nbrowser-use skill install\n\n# Python-Bibliothek (Python 3.11+)\nuv add \'browser-use==1.0.6\'\nexport BROWSER_USE_API_KEY=bu_...',
          codeLanguage: 'bash',
          note: 'Getestete Version: 1.0.6, veröffentlicht am 16. November 2026 laut GitHub Releases und übereinstimmend mit pyproject.toml; letzte Aktualisierung des Projekts (Push) am 19. November 2026. Das README empfiehlt, eine exakte Version festzulegen, weil Releases schnell erscheinen und Dinge kaputt machen können.',
        },
        features: {
          id: 'features',
          title: 'Funktionen',
          content: [
            '**Alles Folgende sind Angaben des Herstellers aus README oder Website; PromptQuorum hat nichts davon getestet.**',
          ],
          items: [
            '**Ein Agent, der Python schreibt.** Das Modell arbeitet in einer REPL über rohe Aufrufe des Chrome DevTools Protocol am Browser und schließt mit einem Ergebnis ab.',
            '**Mehrere Browser-Modi.** Ein Browser von Browser Use Cloud (Standard), ein frisches lokales Chrome oder Chromium mit temporärem Profil, Ihr eigenes geöffnetes Chrome mit Ihren Anmeldungen oder eine Kopie eines Ihrer Chrome-Profile.',
            '**Modellwahl.** Standardmäßig die gehostete bu-4.0-Familie, eingebaute Klassen für OpenAI, Anthropic und Google, jede Pydantic-AI-Modellangabe oder ein OpenAI-kompatibler Server wie Ollama.',
            '**Typisierte Ergebnisse, Uploads und Downloads.** Strukturierte Ausgabe über ein Schema, Datei-Uploads auf Seiten und heruntergeladene Dateien in einem Arbeitsordner.',
            '**Geheimnisse und Grenzen.** Domain-bezogene Geheimnisse, die in Protokollen und Ergebnissen maskiert werden, sowie Listen erlaubter und verbotener Domains. Das README stellt klar, dass beides keine Sandbox ist.',
            '**Eigene Werkzeuge und Websuche.** Python-Funktionen lassen sich als Agent-Werkzeuge registrieren; eine optionale Websuche wird pro Suche über Ihren Browser-Use-Schlüssel abgerechnet.',
            '**Ein Bewertungsschritt.** Nach einem Lauf bewertet eine weitere Anfrage an dasselbe Modell das Ergebnis gegen die Aufgabe, anhand des Verlaufs und, sofern nicht deaktiviert, von Screenshots.',
            '**CAPTCHAs.** Cloud-Browser lösen CAPTCHAs automatisch; das README ergänzt, dass die Ergebnisse von der Website abhängen und keine Konfiguration Erfolg garantiert.',
          ],
        },
        privacy: {
          id: 'privacy',
          title: 'Datenschutz und Datenfluss',
          content: [
            '**Browser Use sendet, was der Agent sieht, an ein Modell; Seiteninhalte, Screenshots und Ihr Aufgabentext verlassen Ihren Rechner daher, sofern nicht Browser und Modell beide lokal laufen.** In der Standardeinrichtung ist das Modell das gehostete Gateway des Herstellers und der Browser läuft in Browser Use Cloud; mit einem lokalen Chromium und einem Ollama-Modell bleibt beides auf Ihrem Rechner.',
            'Die Datenschutzerklärung nennt Browser Use, Inc. als verantwortliche Stelle und führt vom Nutzer bereitgestellte Eingaben und Prompts unter den erhobenen Daten auf; Kartenzahlungen laufen über Stripe. Das README ergänzt, dass anonyme Telemetrieereignisse erfasst werden, wenn Telemetrie aktiviert ist, und dass der Bewertungsschritt Screenshots an das Modell senden kann.',
            'Zwei Warnhinweise stammen aus dem README: Der Live-View-Link eines Cloud-Browsers erlaubt jedem, der ihn hat, diesen Browser zu steuern, und wenn der Agent Ihr eigenes geöffnetes Chrome steuert, erhält er Zugriff auf die Seiten, bei denen Sie angemeldet sind. PromptQuorum hat den Netzwerkverkehr nicht untersucht.',
          ],
          callouts: [
            { type: 'note', text: 'Dies sind Angaben des Herstellers, keine Prüfergebnisse. Lesen Sie bei Arbeits- oder Kundenkonten zuerst Datenschutzerklärung und Nutzungsbedingungen und verwenden Sie ein separates Browser-Profil. Die Automatisierung einer Website kann gegen deren Nutzungsbedingungen verstoßen; prüfen Sie diese, bevor Sie einen Agenten auf eine Website ansetzen, insbesondere bei CAPTCHA-Lösung oder Stealth-Funktionen.' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: 'Preise und Lizenz',
          content: [
            '**Die Bibliothek ist kostenlos; Cloud-Browser und gehosteter Agent werden nach einem kleinen Startguthaben nutzungsabhängig abgerechnet.**',
            'Die Website nennt 0,06 US-Dollar pro Browser-Stunde für Stealth-Browser und 0,006 US-Dollar pro Aufgabe (Median) für Web-Agenten und gibt an, dass neue Konten mit 1 US-Dollar kostenlos starten, einmal pro Person und ohne Ablauf. Das README nennt dasselbe Guthaben von 1 US-Dollar für neue Anmeldungen über Google, GitHub oder Microsoft. Enterprise-Konditionen wie SOC 2, HIPAA mit BAA, EU-Datenresidenz und On-Premise-Betrieb werden über den Vertrieb angeboten. Die Modellnutzung über Ihren eigenen Anbieter rechnet dieser selbst ab.',
          ],
          columns: ['Option', 'Preis', 'Hinweise'],
          rows: [
            { 'Option': 'Bibliothek', 'Preis': 'Kostenlos', 'Hinweise': 'MIT-Lizenz, läuft auf Ihrem Rechner' },
            { 'Option': 'Cloud-Browser', 'Preis': '0,06 $/Browser-Std.', 'Hinweise': 'Stealth, CAPTCHA-Lösung' },
            { 'Option': 'Web-Agenten', 'Preis': '0,006 $/Aufgabe (Median)', 'Hinweise': 'Gehostete Agent-API' },
          ],
          note: 'Die Preise sind Herstellerangaben in US-Dollar, gelesen am 19. November 2026. Der Aufgabenpreis wird als Median beschrieben, einzelne Aufgaben können also mehr oder weniger kosten.',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Für wen geeignet',
          items: [
            'Python-Entwickler, die Web-Aufgaben von einem KI-Modell automatisieren lassen wollen und eine junge, sich schnell ändernde Bibliothek akzeptieren.',
            'Menschen, die bereits Claude Code, Codex oder einen ähnlichen Agenten nutzen und ihm über die CLI Browserzugriff geben möchten, wie es das README beschreibt.',
            'Teams, die ein lokales Ollama-Modell mit einem lokalen Browser ausprobieren wollen und akzeptieren, dass die Qualität mit kleinen lokalen Modellen hier nicht getestet wurde.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Grenzen und was wir nicht überprüfen konnten',
          content: [
            '**Browser Use passt schlecht, wenn Seiteninhalte nicht an ein Drittanbieter-Modell gelangen dürfen, und viele Details bleiben ungeprüft.**',
          ],
          items: [
            'Nicht geeignet: Aufgaben auf Konten, bei denen eine KI in Ihrem Namen nicht erlaubt ist oder ein falscher Klick Geld oder Daten kostet; das README selbst sagt, seine Schutzmaßnahmen seien keine Sandbox.',
            'Nicht geeignet: Nutzer, die einen Installer mit Doppelklick wollen; die Quellen zeigen keinen.',
            'Ungeprüft: Erfolgsquoten, Geschwindigkeit und Kosten pro Aufgabe. Das README zeigt eine Benchmark-Grafik, die PromptQuorum nicht nachgestellt hat.',
            'Ungeprüft: wie gut lokale Modelle den Browser steuern. Das README zeigt die Ollama-Einrichtung, nennt aber keine Qualitätswerte.',
            'Ungeprüft: Aussagen zu Stealth, CAPTCHA-Lösung und Bot-Erkennung, die von der Website abhängen und Herstellerangaben sind.',
            'Ungeprüft: Sicherheitsaussagen und Datenresidenz-Optionen für Unternehmen, die über den Vertrieb angeboten werden; ein Prüfbericht lag nicht vor.',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: 'Alternativen',
          content: [
            '**Browser Use ist ein auf den Browser spezialisierter Agent; die Alternativen im selben Verzeichnissegment sind breitere Computer- oder Coding-Agenten.** PromptQuorum hat sie nicht praktisch verglichen.',
          ],
          columns: ['Tool', 'In den Quellen genannt'],
          rows: [
            { 'Tool': 'Browser Use', 'In den Quellen genannt': 'Reine Browser-Agent-Bibliothek mit CLI; MIT; optionale kostenpflichtige Cloud' },
            { 'Tool': '[Local Operator](/de/power-local-llm/local-operator-review)', 'In den Quellen genannt': 'Desktop-App für Agenten, die Code auf Ihrem Rechner ausführen; MIT' },
            { 'Tool': '[Open Interpreter](/de/power-local-llm/open-interpreter-review)', 'In den Quellen genannt': 'Lässt ein Modell Ihren Computer steuern und Code ausführen' },
            { 'Tool': '[Agent Zero](/de/power-local-llm/agent-zero-review)', 'In den Quellen genannt': 'Selbst gehosteter Agent in Docker mit Weboberfläche' },
          ],
        },
        faq: {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            {
              q: 'Ist Browser Use kostenlos?',
              a: 'Die Python-Bibliothek ist unter der MIT-Lizenz kostenlos. Browser Use Cloud und die gehosteten Modelle werden nutzungsabhängig abgerechnet, laut Website mit 1 US-Dollar Startguthaben für neue Konten; API-Anbieter berechnen separat, wenn Sie eigene Schlüssel verwenden.',
            },
            {
              q: 'Läuft Browser Use mit einem lokalen Modell?',
              a: 'Ja, laut README-FAQ: mit einem lokalen Chromium und einem OpenAI-kompatiblen lokalen Endpunkt wie Ollama auf localhost, Port 11434. PromptQuorum hat das nicht ausprobiert, und die Quellen nennen keine Mindestgröße des Modells.',
            },
            {
              q: 'Nutzt es mein eigenes Chrome und meine Anmeldungen?',
              a: 'Das ist möglich: Der Chrome-Modus steuert das geöffnete Chrome mit Ihren Anmeldungen, nachdem Sie einmalig das Remote-Debugging unter chrome://inspect aktiviert haben. Auch eine temporäre Kopie eines Profils ist möglich. Der Agent erhält damit Zugriff auf diese Sitzungen; verwenden Sie für riskante Aufgaben ein separates Profil.',
            },
            {
              q: 'Welche Version sollte ich verwenden?',
              a: 'Die getestete Version ist 1.0.6 vom 16. November 2026. Das README empfiehlt, eine exakte Version statt eines Bereichs festzulegen; die Linie 1.0 hat den Agenten neu geschrieben, lesen Sie daher bei einem Umstieg von 0.x den Migrationsleitfaden.',
            },
            {
              q: 'Wo hat Browser Use seinen Sitz?',
              a: 'Laut Nutzungsbedingungen hat Browser Use seinen Hauptsitz in den Vereinigten Staaten; es gilt kalifornisches Recht. Die Datenschutzerklärung nennt Browser Use, Inc. als verantwortliche Stelle.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Fazit',
          content: [
            '**Browser Use ist einen Test wert, wenn Sie ein KI-Modell, das einen echten Browser bedient, per Python steuern möchten und akzeptieren, dass die Standardeinrichtung Seiteninhalte an gehostete Dienste sendet.**',
            'Es ist Open Source unter MIT, wird aktiv veröffentlicht (letzter Push am 19. November 2026, Release 1.0.6 am 16. November 2026) und unterstützt ein lokales Chrome mit einem lokalen Ollama-Modell. Die Kehrseite: kein Installer, schnelle Releases, die laut README Dinge kaputt machen können, Schutzmaßnahmen ohne Sandbox, kostenpflichtige Cloud-Standardwerte sowie Aussagen zu Erfolgsquoten, Stealth und Sicherheit, die allein auf Herstellerangaben beruhen. PromptQuorum hat es nicht getestet; probieren Sie es zuerst mit einem Wegwerf-Profil und einer risikoarmen Aufgabe aus.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[Website von Browser Use](https://browser-use.com) — Produkte und Preise, geprüft am 19. November 2026.',
            '[GitHub-Repository](https://github.com/browser-use/browser-use) — Repository-Angaben und letzter Push, geprüft am 19. November 2026.',
            '[README](https://github.com/browser-use/browser-use#readme) — Installationswege, Browser-Modi, Modelle und FAQ, geprüft am 19. November 2026.',
            '[LICENSE](https://github.com/browser-use/browser-use/blob/main/LICENSE) — MIT-Lizenz, geprüft am 19. November 2026.',
            '[Release 1.0.6](https://github.com/browser-use/browser-use/releases/tag/1.0.6) — neuestes Release, veröffentlicht am 16. November 2026.',
            '[pyproject.toml](https://github.com/browser-use/browser-use/blob/main/pyproject.toml) — Version und Anforderung Python 3.11+, geprüft am 19. November 2026.',
            '[Datenschutzerklärung](https://browser-use.com/privacy) — verantwortliche Stelle und erhobene Daten, geprüft am 19. November 2026.',
            '[Nutzungsbedingungen](https://browser-use.com/legal/terms-of-service) — Hauptsitz in den Vereinigten Staaten, kalifornisches Recht, geprüft am 19. November 2026.',
            '[Eintrag bei Localhosted](https://localhosted.com/browser-use) — Verzeichniseintrag mit Tags, geprüft am 19. November 2026; der Eintrag wurde vom Inhaber nicht beansprucht.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Artikel',
          items: [
            '[Local Operator Review](/de/power-local-llm/local-operator-review) — eine Desktop-App für Agenten, die Code auf Ihrem Rechner ausführen.',
            '[Open Interpreter Review](/de/power-local-llm/open-interpreter-review) — ein Agent, der ein Modell Ihren Computer steuern und Code ausführen lässt.',
            '[Agent Zero Review](/de/power-local-llm/agent-zero-review) — ein selbst gehosteter Agent, der in Docker läuft.',
            '[Local-LLM-Software-Verzeichnis](/de/directory) — der vollständige Katalog lokaler KI-Tools.',
            '[Nanobrowser Rezension](/de/power-local-llm/nanobrowser-review) — eine kostenlose, quelloffene Chrome- und Edge-Erweiterung, deren Agent in Ihrem eigenen Browser klickt und tippt, mit Cloud-Modell oder lokalem Ollama- bzw. LM-Studio-Modell.',
          ],
        },
      },
    },
    es: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-19',
      dateModified: '2026-11-19',
      next_refresh_due: '2027-05-19',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/browser-use-review-hero-es.webp',
      title: 'Análisis de Browser Use: agente de navegador con IA de código abierto para Python',
      seoTitle: 'Análisis de Browser Use: agente de navegador y precios',
      intro:
        'Browser Use es una biblioteca de Python de código abierto y una herramienta de línea de comandos de Browser Use, Inc. que permite que un modelo de IA maneje un navegador web real para completar tareas como rellenar formularios o recopilar datos. La misma empresa vende un navegador en la nube de pago y una API de agente alojada. Este análisis se basa en el sitio web del fabricante, su repositorio de GitHub y sus textos legales, consultados el 19 de noviembre de 2026; PromptQuorum no ha probado el software.',
      metaDescription:
        'Browser Use es una biblioteca de Python y CLI con licencia MIT para que una IA controle un navegador. Modelos locales o alojados, precios y privacidad.',
      twitterDescription:
        'Análisis de Browser Use: un agente de navegador con IA de código abierto para Python con nube de pago opcional. Qué hace, cómo trata los datos y qué no pudimos verificar.',
      audience:
        'Desarrolladores de Python y creadores de agentes que quieren que un modelo de IA automatice tareas web, y lectores que comparan una biblioteca gratuita con un navegador en la nube de pago',
      readTime: '6 min de lectura',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Browser Use',
      targetKeywords: [
        'análisis de Browser Use',
        'Browser Use agente de navegador con IA',
        'precios de Browser Use',
        'Browser Use Ollama',
        'Browser Use nube',
        'alternativas a Browser Use',
      ],
      current_models_mentioned: ['Ollama'],
      leadAnswerBlock:
        '**Browser Use (versión 1.0.6, publicada el 16 de noviembre de 2026) es una biblioteca de Python y herramienta de línea de comandos gratuita, con licencia MIT, en la que un modelo de IA maneja un navegador real escribiendo código Python.** La configuración por defecto usa el modelo alojado del fabricante y un navegador en la nube de pago, pero puedes ejecutar un Chrome local y conectarlo a un modelo local de Ollama. Todas las afirmaciones proceden del sitio web, el README y los textos legales del fabricante; PromptQuorum no lo ha probado.',
      quickAnswerTop: {
        es: {
          question: '¿Browser Use es gratuito y funciona en local?',
          answer:
            'La biblioteca es gratuita, tiene licencia MIT y puede controlar un Chrome en tu propio equipo. Por defecto, sin embargo, usa un navegador de Browser Use Cloud y el modelo alojado del fabricante, ambos facturados por uso tras un crédito de 1 dólar; para una configuración solo local debes elegir un navegador local y tu propio modelo.',
          bullets: [
            'Requiere Python 3.11 o superior; tres vías: API alojada, CLI o biblioteca de Python.',
            'Navegadores: Browser Use Cloud, un Chromium local nuevo o tu propio Chrome abierto con tus sesiones iniciadas.',
            'Modelos: bu-4.0 alojado por defecto, OpenAI, Anthropic, Google o un modelo local de Ollama mediante un endpoint compatible con OpenAI.',
            'Según el README, sus límites de dominio y el enmascarado de secretos no son un sandbox.',
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
            { type: 'one-sentence', text: 'Browser Use es una biblioteca de Python de código abierto con CLI que permite que un modelo de IA controle un navegador real escribiendo y ejecutando Python, con navegador en la nube de pago y agente alojado opcionales de la misma empresa.' },
            { type: 'plain-terms', text: 'Le das al agente una tarea en lenguaje natural, abre un navegador, hace clic y escribe mediante el protocolo de depuración de Chrome y devuelve un resultado. El modelo lee las páginas, así que el contenido de las páginas llega al modelo que configures.' },
          ],
          items: [
            'Mantenimiento: el repositorio recibió su último push el 19 de noviembre de 2026 y la versión más reciente, 1.0.6, es del 16 de noviembre de 2026, por lo que no se aplica ninguna advertencia de proyecto inactivo.',
            'Licencia: MIT para la biblioteca; Browser Use Cloud y sus modelos alojados son servicios de pago independientes.',
            'Coste: el sitio web indica 0.06 dólares por hora de navegador para los navegadores sigilosos y 0.006 dólares por tarea (mediana) para los agentes web; las cuentas nuevas reciben 1 dólar de crédito gratuito.',
            'Opción local: el README muestra un Chromium local con un modelo de Ollama mediante un endpoint compatible con OpenAI.',
            'Ritmo de versiones: según el README, las versiones salen rápido y pueden romper cosas, y recomienda fijar una versión exacta.',
          ],
          callouts: [
            { type: 'note', text: 'Este análisis se basa en el sitio web, el repositorio de GitHub, el README y los textos legales del fabricante, consultados el 19 de noviembre de 2026. PromptQuorum no ha instalado ni ejecutado Browser Use, por lo que no se evalúan las tasas de éxito, la velocidad ni el coste por tarea. Un agente que hace clic e inicia sesión en tu nombre puede realizar acciones que no pretendías. Esto es información general, no asesoramiento de seguridad.' },
          ],
        },
        overview: {
          id: 'overview',
          title: 'Visión general',
          content: [
            '**Browser Use es un agente de navegador con IA de Browser Use, Inc.: describes una tarea y un modelo la completa en un navegador real.** Según el README, el modelo escribe Python en un único REPL persistente, con los ayudantes de browser-harness y el Chrome DevTools Protocol, y desde la versión 1.0 la biblioteca se apoya en Pydantic AI.',
            'Los términos del servicio dicen que Browser Use tiene su sede en Estados Unidos. El repositorio se creó el 31 de octubre de 2024 y recibió su último push el 19 de noviembre de 2026; la versión más reciente, 1.0.6, es del 16 de noviembre de 2026, así que el desarrollo está activo. El README indica a quienes vienen de las versiones 0.x que lean la guía de migración.',
            'La empresa vende tres cosas: la biblioteca de código abierto, Browser Use Cloud (navegadores sigilosos con resolución de CAPTCHA y una API de agente alojada) y despliegues empresariales. Solo la biblioteca es de código abierto.',
          ],
        },
        getIt: {
          id: 'get-it',
          title: 'Cómo conseguirlo',
          content: [
            '**Browser Use no tiene instalador: se usa mediante una API alojada, una CLI o una biblioteca de Python, y la biblioteca requiere Python 3.11 o superior.**',
          ],
          columns: ['Vía', 'Cómo conseguirlo'],
          rows: [
            { 'Vía': 'Nube alojada', 'Cómo conseguirlo': '[Browser Use Cloud](https://cloud.browser-use.com): API, 1 dólar de crédito' },
            { 'Vía': 'CLI', 'Cómo conseguirlo': '`uv tool install browser-use==1.0.6`' },
            { 'Vía': 'Biblioteca de Python', 'Cómo conseguirlo': '`uv add \'browser-use==1.0.6\'` o pip (Python 3.11+)' },
            { 'Vía': 'Sitio web', 'Cómo conseguirlo': '[browser-use.com](https://browser-use.com)' },
            { 'Vía': 'Código fuente', 'Cómo conseguirlo': '[GitHub](https://github.com/browser-use/browser-use) (MIT)' },
            { 'Vía': 'Política de privacidad', 'Cómo conseguirlo': '[browser-use.com/privacy](https://browser-use.com/privacy)' },
          ],
          codeBlock: '# CLI (uv)\nuv tool install browser-use==1.0.6\nbrowser-use skill install\n\n# Biblioteca de Python (Python 3.11+)\nuv add \'browser-use==1.0.6\'\nexport BROWSER_USE_API_KEY=bu_...',
          codeLanguage: 'bash',
          note: 'Versión analizada: 1.0.6, publicada el 16 de noviembre de 2026 según GitHub Releases y coincidente con pyproject.toml; última actualización del proyecto (push) el 19 de noviembre de 2026. El README recomienda fijar una versión exacta, porque las versiones salen rápido y pueden romper cosas.',
        },
        features: {
          id: 'features',
          title: 'Funciones',
          content: [
            '**Todo lo siguiente son afirmaciones del fabricante tomadas del README o del sitio web; PromptQuorum no ha probado nada de ello.**',
          ],
          items: [
            '**Un agente que escribe Python.** El modelo trabaja en un REPL sobre el navegador mediante llamadas directas al Chrome DevTools Protocol y termina con un resultado.',
            '**Varios modos de navegador.** Un navegador de Browser Use Cloud (por defecto), un Chrome o Chromium local nuevo con perfil temporal, tu propio Chrome abierto con tus sesiones iniciadas o una copia de uno de tus perfiles de Chrome.',
            '**Elección de modelo.** La familia bu-4.0 alojada por defecto, clases integradas para OpenAI, Anthropic y Google, cualquier cadena de modelo de Pydantic AI o un servidor compatible con OpenAI como Ollama.',
            '**Resultados tipados, subidas y descargas.** Salida estructurada mediante un esquema, subida de archivos a las páginas y archivos descargados reunidos en una carpeta de trabajo.',
            '**Secretos y límites.** Secretos limitados a un dominio y enmascarados en registros y resultados, además de listas de dominios permitidos y prohibidos. El README aclara que ninguno de los dos es un sandbox.',
            '**Herramientas propias y búsqueda web.** Las funciones de Python se pueden registrar como herramientas del agente; una búsqueda web opcional se factura por búsqueda a tu clave de Browser Use.',
            '**Un paso de evaluación.** Tras una ejecución, otra solicitud al mismo modelo valora el resultado frente a la tarea, usando el registro y, salvo que se desactive, capturas de pantalla.',
            '**CAPTCHA.** Los navegadores en la nube resuelven CAPTCHA automáticamente; el README añade que el resultado depende del sitio y que ninguna configuración garantiza el éxito.',
          ],
        },
        privacy: {
          id: 'privacy',
          title: 'Privacidad y flujo de datos',
          content: [
            '**Browser Use envía a un modelo lo que ve el agente, así que el contenido de las páginas, las capturas de pantalla y el texto de tu tarea salen de tu equipo salvo que el navegador y el modelo sean ambos locales.** En la configuración por defecto el modelo es la pasarela alojada del fabricante y el navegador se ejecuta en Browser Use Cloud; con un Chromium local y un modelo de Ollama, ambos permanecen en tu equipo.',
            'La política de privacidad nombra a Browser Use, Inc. como entidad responsable y enumera las entradas y prompts aportados por el usuario entre los datos que recoge; los pagos con tarjeta pasan por Stripe. El README añade que se registran eventos de telemetría anónimos cuando la telemetría está activada, y que el paso de evaluación puede enviar capturas de pantalla al modelo.',
            'El README plantea dos precauciones: el enlace de visualización en vivo de un navegador en la nube permite a cualquiera que lo tenga controlar ese navegador, y manejar tu propio Chrome abierto da al agente acceso a los sitios en los que tienes la sesión iniciada. PromptQuorum no ha inspeccionado el tráfico de red.',
          ],
          callouts: [
            { type: 'note', text: 'Son afirmaciones del fabricante, no resultados de una auditoría. Para cuentas de trabajo o de clientes, lee primero la política de privacidad y los términos y usa un perfil de navegador aparte. Automatizar un sitio web puede incumplir sus términos de servicio, así que revísalos antes de lanzar un agente contra un sitio, sobre todo con resolución de CAPTCHA o funciones sigilosas.' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: 'Precios y licencia',
          content: [
            '**La biblioteca es gratuita; el navegador en la nube y el agente alojado se pagan por uso tras un pequeño crédito.**',
            'El sitio web indica 0.06 dólares por hora de navegador para los navegadores sigilosos y 0.006 dólares por tarea (mediana) para los agentes web, y dice que las cuentas nuevas empiezan con 1 dólar gratis, uno por persona y sin caducidad. El README menciona el mismo crédito de 1 dólar para nuevos registros con Google, GitHub o Microsoft. Las condiciones empresariales, como SOC 2, HIPAA con BAA, residencia de datos en la UE y despliegue local, se ofrecen a través de ventas. El uso de modelos con tu propio proveedor lo factura ese proveedor.',
          ],
          columns: ['Opción', 'Precio', 'Notas'],
          rows: [
            { 'Opción': 'Biblioteca', 'Precio': 'Gratis', 'Notas': 'Licencia MIT, se ejecuta en tu equipo' },
            { 'Opción': 'Navegadores en la nube', 'Precio': '0.06 $/hora de navegador', 'Notas': 'Sigilosos, resolución de CAPTCHA' },
            { 'Opción': 'Agentes web', 'Precio': '0.006 $/tarea (mediana)', 'Notas': 'API de agente alojada' },
          ],
          note: 'Los precios son cifras del fabricante en dólares estadounidenses, consultadas el 19 de noviembre de 2026. El precio por tarea se describe como una mediana, así que cada tarea puede costar más o menos.',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Para quién es',
          items: [
            'Desarrolladores de Python que quieren que un modelo de IA automatice tareas web y aceptan una biblioteca joven y cambiante.',
            'Personas que ya usan Claude Code, Codex u otro agente similar y quieren darle acceso al navegador mediante la CLI, como describe el README.',
            'Equipos que quieren probar un modelo local de Ollama manejando un navegador local, aceptando que aquí no se probó la calidad con modelos locales pequeños.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Límites y lo que no pudimos verificar',
          content: [
            '**Browser Use encaja mal si el contenido de las páginas no puede llegar a un modelo de terceros, y quedan muchos detalles sin verificar.**',
          ],
          items: [
            'No encaja: tareas en cuentas donde no se permite que una IA actúe en tu nombre, o donde un clic equivocado cuesta dinero o datos; el propio README dice que sus salvaguardas no son un sandbox.',
            'No encaja: quien quiera un instalador de doble clic; las fuentes no muestran ninguno.',
            'Sin verificar: tasas de éxito, velocidad y coste por tarea. El README muestra un gráfico de benchmark que PromptQuorum no reprodujo.',
            'Sin verificar: qué tan bien manejan el navegador los modelos locales. El README muestra la configuración con Ollama, pero no da cifras de calidad.',
            'Sin verificar: las afirmaciones sobre sigilo, resolución de CAPTCHA y detección de bots, que dependen del sitio y son declaraciones del fabricante.',
            'Sin verificar: las declaraciones de seguridad empresarial y las opciones de residencia de datos, que se ofrecen a través de ventas; no se vio ningún informe de auditoría.',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: 'Alternativas',
          content: [
            '**Browser Use es un agente específico de navegador; las alternativas del mismo segmento del directorio son agentes más amplios de ordenador o de programación.** PromptQuorum no los ha comparado en la práctica.',
          ],
          columns: ['Herramienta', 'Mencionado en las fuentes'],
          rows: [
            { 'Herramienta': 'Browser Use', 'Mencionado en las fuentes': 'Biblioteca y CLI de agente solo de navegador; MIT; nube de pago opcional' },
            { 'Herramienta': '[Local Operator](/es/power-local-llm/local-operator-review)', 'Mencionado en las fuentes': 'App de escritorio para agentes que ejecutan código en tu equipo; MIT' },
            { 'Herramienta': '[Open Interpreter](/es/power-local-llm/open-interpreter-review)', 'Mencionado en las fuentes': 'Permite que un modelo controle tu ordenador y ejecute código' },
            { 'Herramienta': '[Agent Zero](/es/power-local-llm/agent-zero-review)', 'Mencionado en las fuentes': 'Agente autoalojado en Docker con interfaz web' },
          ],
        },
        faq: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            {
              q: '¿Browser Use es gratuito?',
              a: 'La biblioteca de Python es gratuita con licencia MIT. Browser Use Cloud y los modelos alojados se facturan por uso, con 1 dólar de crédito gratuito para cuentas nuevas según el sitio web, y los proveedores de API cobran aparte si usas tus propias claves.',
            },
            {
              q: '¿Puede Browser Use funcionar con un modelo local?',
              a: 'Sí, según las preguntas frecuentes del README: con un Chromium local y un endpoint local compatible con OpenAI como Ollama en localhost, puerto 11434. PromptQuorum no lo ha probado y las fuentes no indican un tamaño mínimo de modelo.',
            },
            {
              q: '¿Usa mi propio Chrome y mis sesiones iniciadas?',
              a: 'Puede hacerlo: el modo Chrome controla el Chrome que tienes abierto, con tus sesiones, después de activar una vez la depuración remota en chrome://inspect. También es posible una copia temporal de un perfil. Eso da al agente acceso a esas sesiones, así que usa un perfil aparte para tareas arriesgadas.',
            },
            {
              q: '¿Qué versión debo usar?',
              a: 'La versión analizada es la 1.0.6 del 16 de noviembre de 2026. El README indica fijar una versión exacta en lugar de un rango, y la línea 1.0 reescribió el agente, así que lee la guía de migración si vienes de 0.x.',
            },
            {
              q: '¿Dónde tiene su sede Browser Use?',
              a: 'Los términos del servicio dicen que Browser Use tiene su sede en Estados Unidos y se rigen por la ley de California. La política de privacidad nombra a Browser Use, Inc. como entidad responsable.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Veredicto',
          content: [
            '**Browser Use merece una prueba si quieres programar desde Python un modelo de IA que maneje un navegador real y aceptas que la configuración por defecto envía el contenido de las páginas a servicios alojados.**',
            'Es de código abierto con licencia MIT, se publica con frecuencia (último push el 19 de noviembre de 2026, versión 1.0.6 el 16 de noviembre de 2026) y admite un Chrome local con un modelo local de Ollama. Las contrapartidas: no hay instalador, las versiones salen rápido y, según el README, pueden romper cosas, las salvaguardas no son un sandbox, los valores por defecto de la nube son de pago y las afirmaciones sobre tasas de éxito, sigilo y seguridad se basan solo en declaraciones del fabricante. PromptQuorum no lo ha probado; pruébalo primero con un perfil desechable y una tarea de bajo riesgo.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '[Sitio web de Browser Use](https://browser-use.com) — productos y precios, consultado el 19 de noviembre de 2026.',
            '[Repositorio de GitHub](https://github.com/browser-use/browser-use) — datos del repositorio y último push, consultado el 19 de noviembre de 2026.',
            '[README](https://github.com/browser-use/browser-use#readme) — vías de instalación, modos de navegador, modelos y preguntas frecuentes, consultado el 19 de noviembre de 2026.',
            '[LICENSE](https://github.com/browser-use/browser-use/blob/main/LICENSE) — licencia MIT, consultada el 19 de noviembre de 2026.',
            '[Versión 1.0.6](https://github.com/browser-use/browser-use/releases/tag/1.0.6) — versión más reciente, publicada el 16 de noviembre de 2026.',
            '[pyproject.toml](https://github.com/browser-use/browser-use/blob/main/pyproject.toml) — versión y requisito de Python 3.11+, consultado el 19 de noviembre de 2026.',
            '[Política de privacidad](https://browser-use.com/privacy) — entidad responsable y datos recogidos, consultado el 19 de noviembre de 2026.',
            '[Términos del servicio](https://browser-use.com/legal/terms-of-service) — sede en Estados Unidos, ley de California, consultado el 19 de noviembre de 2026.',
            '[Ficha en Localhosted](https://localhosted.com/browser-use) — ficha de directorio con etiquetas, consultada el 19 de noviembre de 2026; la ficha no ha sido reclamada por su titular.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Local Operator Review](/es/power-local-llm/local-operator-review) — una app de escritorio para agentes que ejecutan código en tu equipo.',
            '[Open Interpreter Review](/es/power-local-llm/open-interpreter-review) — un agente que permite que un modelo controle tu ordenador y ejecute código.',
            '[Agent Zero Review](/es/power-local-llm/agent-zero-review) — un agente autoalojado que se ejecuta en Docker.',
            '[Directorio de software de LLM locales](/es/directory) — el catálogo completo de herramientas de IA local.',
            '[Reseña de Nanobrowser](/es/power-local-llm/nanobrowser-review) — una extensión gratuita y de código abierto para Chrome y Edge cuyo agente hace clic y escribe en tu propio navegador, con un modelo en la nube o un modelo local de Ollama o LM Studio.',
          ],
        },
      },
    },
    fr: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-19',
      dateModified: '2026-11-19',
      next_refresh_due: '2027-05-19',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/browser-use-review-hero-fr.webp',
      title: 'Test de Browser Use : agent de navigateur IA open source pour Python',
      seoTitle: 'Test de Browser Use : agent de navigateur open source',
      intro:
        'Browser Use est une bibliothèque Python open source et un outil en ligne de commande de Browser Use, Inc. qui permet à un modèle d’IA de piloter un vrai navigateur web pour accomplir des tâches comme remplir des formulaires ou collecter des données. La même entreprise vend un navigateur cloud payant et une API d’agent hébergée. Ce test s’appuie sur le site du fabricant, son dépôt GitHub et ses textes juridiques, consultés le 19 novembre 2026 ; PromptQuorum n’a pas testé le logiciel.',
      metaDescription:
        'Browser Use : bibliothèque Python et CLI sous licence MIT pour piloter un navigateur avec une IA. Modèles locaux ou hébergés, tarifs, confidentialité.',
      twitterDescription:
        'Test de Browser Use : un agent de navigateur IA open source pour Python avec cloud payant en option. Ce qu’il fait, le traitement des données et ce que nous n’avons pas pu vérifier.',
      audience:
        'Développeurs Python et concepteurs d’agents qui veulent confier des tâches web à un modèle d’IA, et lecteurs qui comparent une bibliothèque gratuite à un navigateur cloud payant',
      readTime: '6 min de lecture',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Browser Use',
      targetKeywords: [
        'test Browser Use',
        'Browser Use agent de navigateur IA',
        'tarifs Browser Use',
        'Browser Use Ollama',
        'Browser Use cloud',
        'alternatives à Browser Use',
      ],
      current_models_mentioned: ['Ollama'],
      leadAnswerBlock:
        '**Browser Use (version 1.0.6, publiée le 16 novembre 2026) est une bibliothèque Python et un outil en ligne de commande gratuits, sous licence MIT, dans lesquels un modèle d’IA pilote un vrai navigateur en écrivant du code Python.** La configuration par défaut utilise le modèle hébergé du fabricant et un navigateur cloud payant, mais vous pouvez lancer un Chrome local et le relier à un modèle Ollama local. Toutes les affirmations proviennent du site, du README et des textes juridiques du fabricant ; PromptQuorum ne l’a pas testé.',
      quickAnswerTop: {
        fr: {
          question: 'Browser Use est-il gratuit, et fonctionne-t-il en local ?',
          answer:
            'La bibliothèque est gratuite, sous licence MIT, et peut piloter un Chrome sur votre propre machine. Par défaut, elle utilise toutefois un navigateur Browser Use Cloud et le modèle hébergé du fabricant, tous deux facturés à l’usage après un crédit de 1 dollar ; une configuration purement locale suppose de choisir un navigateur local et votre propre modèle.',
          bullets: [
            'Nécessite Python 3.11 ou plus récent ; trois voies : API hébergée, CLI ou bibliothèque Python.',
            'Navigateurs : Browser Use Cloud, un Chromium local neuf ou votre propre Chrome ouvert avec vos connexions.',
            'Modèles : bu-4.0 hébergé par défaut, OpenAI, Anthropic, Google ou un modèle Ollama local via un point d’accès compatible OpenAI.',
            'Selon le README, ses limites de domaines et le masquage des secrets ne constituent pas un bac à sable.',
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
            { type: 'one-sentence', text: 'Browser Use est une bibliothèque Python open source avec CLI qui permet à un modèle d’IA de piloter un vrai navigateur en écrivant et en exécutant du Python, avec un navigateur cloud payant et un agent hébergé en option, proposés par la même entreprise.' },
            { type: 'plain-terms', text: 'Vous confiez une tâche à l’agent en langage naturel, il ouvre un navigateur, clique et saisit du texte via le protocole de débogage de Chrome, puis renvoie un résultat. Le modèle lit les pages : leur contenu part donc vers le modèle que vous configurez.' },
          ],
          items: [
            'Maintenance : le dépôt a reçu son dernier push le 19 novembre 2026 et la dernière version, 1.0.6, date du 16 novembre 2026 ; aucun avertissement de projet abandonné ne s’applique.',
            'Licence : MIT pour la bibliothèque ; Browser Use Cloud et ses modèles hébergés sont des services payants distincts.',
            'Coût : le site indique 0.06 dollar par heure de navigateur pour les navigateurs furtifs et 0.006 dollar par tâche (médiane) pour les agents web ; les nouveaux comptes reçoivent 1 dollar de crédit gratuit.',
            'Option locale : le README montre un Chromium local avec un modèle Ollama via un point d’accès compatible OpenAI.',
            'Rythme des versions : selon le README, les versions sortent vite et peuvent casser des choses ; il conseille de figer une version exacte.',
          ],
          callouts: [
            { type: 'note', text: 'Ce test s’appuie sur le site, le dépôt GitHub, le README et les textes juridiques du fabricant, consultés le 19 novembre 2026. PromptQuorum n’a ni installé ni exécuté Browser Use ; les taux de réussite, la vitesse et le coût par tâche ne sont donc pas évalués. Un agent qui clique et se connecte à votre place peut effectuer des actions que vous n’aviez pas prévues. Ces informations sont générales et ne constituent pas un conseil de sécurité.' },
          ],
        },
        overview: {
          id: 'overview',
          title: 'Aperçu',
          content: [
            '**Browser Use est un agent de navigateur IA de Browser Use, Inc. : vous décrivez une tâche, et un modèle l’accomplit dans un vrai navigateur.** Selon le README, le modèle écrit du Python dans un unique REPL persistant, avec les aides de browser-harness et le Chrome DevTools Protocol ; depuis la version 1.0, la bibliothèque repose sur Pydantic AI.',
            'Les conditions d’utilisation indiquent que Browser Use a son siège aux États-Unis. Le dépôt a été créé le 31 octobre 2024 et a reçu son dernier push le 19 novembre 2026 ; la dernière version, 1.0.6, date du 16 novembre 2026, le développement est donc actif. Le README invite les utilisateurs venant des versions 0.x à lire le guide de migration.',
            'L’entreprise vend trois choses : la bibliothèque open source, Browser Use Cloud (navigateurs furtifs avec résolution de CAPTCHA et API d’agent hébergée) et des déploiements pour entreprises. Seule la bibliothèque est open source.',
          ],
        },
        getIt: {
          id: 'get-it',
          title: 'Comment l’obtenir',
          content: [
            '**Browser Use n’a pas d’installateur : on l’utilise via une API hébergée, une CLI ou une bibliothèque Python, et la bibliothèque exige Python 3.11 ou plus récent.**',
          ],
          columns: ['Voie', 'Comment l’obtenir'],
          rows: [
            { 'Voie': 'Cloud hébergé', 'Comment l’obtenir': '[Browser Use Cloud](https://cloud.browser-use.com) : API, 1 dollar de crédit' },
            { 'Voie': 'CLI', 'Comment l’obtenir': '`uv tool install browser-use==1.0.6`' },
            { 'Voie': 'Bibliothèque Python', 'Comment l’obtenir': '`uv add \'browser-use==1.0.6\'` ou pip (Python 3.11+)' },
            { 'Voie': 'Site web', 'Comment l’obtenir': '[browser-use.com](https://browser-use.com)' },
            { 'Voie': 'Code source', 'Comment l’obtenir': '[GitHub](https://github.com/browser-use/browser-use) (MIT)' },
            { 'Voie': 'Politique de confidentialité', 'Comment l’obtenir': '[browser-use.com/privacy](https://browser-use.com/privacy)' },
          ],
          codeBlock: '# CLI (uv)\nuv tool install browser-use==1.0.6\nbrowser-use skill install\n\n# Bibliothèque Python (Python 3.11+)\nuv add \'browser-use==1.0.6\'\nexport BROWSER_USE_API_KEY=bu_...',
          codeLanguage: 'bash',
          note: 'Version examinée : 1.0.6, publiée le 16 novembre 2026 selon GitHub Releases et conforme à pyproject.toml ; dernière mise à jour du projet (push) le 19 novembre 2026. Le README conseille de figer une version exacte, car les versions sortent vite et peuvent casser des choses.',
        },
        features: {
          id: 'features',
          title: 'Fonctionnalités',
          content: [
            '**Tout ce qui suit relève d’affirmations du fabricant tirées du README ou du site ; PromptQuorum n’en a rien testé.**',
          ],
          items: [
            '**Un agent qui écrit du Python.** Le modèle travaille dans un REPL sur le navigateur via des appels bruts au Chrome DevTools Protocol et termine par un résultat.',
            '**Plusieurs modes de navigateur.** Un navigateur Browser Use Cloud (par défaut), un Chrome ou Chromium local neuf avec profil temporaire, votre propre Chrome ouvert avec vos connexions, ou une copie de l’un de vos profils Chrome.',
            '**Choix du modèle.** La famille bu-4.0 hébergée par défaut, des classes intégrées pour OpenAI, Anthropic et Google, toute chaîne de modèle Pydantic AI ou un serveur compatible OpenAI comme Ollama.',
            '**Résultats typés, envois et téléchargements.** Sortie structurée via un schéma, envoi de fichiers vers les pages et fichiers téléchargés rassemblés dans un dossier de travail.',
            '**Secrets et limites.** Secrets limités à un domaine et masqués dans les journaux et les résultats, plus des listes de domaines autorisés et interdits. Le README précise que ni l’un ni l’autre n’est un bac à sable.',
            '**Outils personnalisés et recherche web.** Des fonctions Python peuvent être enregistrées comme outils de l’agent ; une recherche web facultative est facturée à chaque recherche sur votre clé Browser Use.',
            '**Une étape d’évaluation.** Après une exécution, une requête supplémentaire au même modèle juge le résultat par rapport à la tâche, à partir de la trace et, sauf désactivation, de captures d’écran.',
            '**CAPTCHA.** Les navigateurs cloud résolvent automatiquement les CAPTCHA ; le README ajoute que le résultat dépend du site et qu’aucune configuration ne garantit le succès.',
          ],
        },
        privacy: {
          id: 'privacy',
          title: 'Confidentialité et flux de données',
          content: [
            '**Browser Use envoie à un modèle ce que voit l’agent : le contenu des pages, les captures d’écran et le texte de votre tâche quittent donc votre ordinateur, sauf si le navigateur et le modèle sont tous deux locaux.** Dans la configuration par défaut, le modèle est la passerelle hébergée du fabricant et le navigateur s’exécute dans Browser Use Cloud ; avec un Chromium local et un modèle Ollama, les deux restent sur votre machine.',
            'La politique de confidentialité désigne Browser Use, Inc. comme entité responsable et range les saisies et prompts fournis par l’utilisateur parmi les données collectées ; les paiements par carte passent par Stripe. Le README ajoute que des événements de télémétrie anonymes sont enregistrés lorsque la télémétrie est activée, et que l’étape d’évaluation peut envoyer des captures d’écran au modèle.',
            'Le README formule deux mises en garde : le lien de visualisation en direct d’un navigateur cloud permet à quiconque le possède de piloter ce navigateur, et piloter votre propre Chrome ouvert donne à l’agent accès aux sites sur lesquels vous êtes connecté. PromptQuorum n’a pas inspecté le trafic réseau.',
          ],
          callouts: [
            { type: 'note', text: 'Ce sont des déclarations du fabricant, pas des résultats d’audit. Pour des comptes professionnels ou clients, lisez d’abord la politique de confidentialité et les conditions, et utilisez un profil de navigateur séparé. Automatiser un site web peut enfreindre ses conditions d’utilisation ; vérifiez-les avant de lancer un agent sur un site, surtout avec la résolution de CAPTCHA ou les fonctions furtives.' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: 'Tarifs et licence',
          content: [
            '**La bibliothèque est gratuite ; le navigateur cloud et l’agent hébergé sont payants à l’usage après un petit crédit.**',
            'Le site indique 0.06 dollar par heure de navigateur pour les navigateurs furtifs et 0.006 dollar par tâche (médiane) pour les agents web, et précise que les nouveaux comptes démarrent avec 1 dollar gratuit, un par personne, sans expiration. Le README cite le même crédit de 1 dollar pour les nouvelles inscriptions via Google, GitHub ou Microsoft. Les conditions entreprise, comme SOC 2, HIPAA avec BAA, résidence des données dans l’UE et déploiement sur site, passent par les ventes. L’usage de modèles via votre propre fournisseur est facturé par ce fournisseur.',
          ],
          columns: ['Option', 'Prix', 'Remarques'],
          rows: [
            { 'Option': 'Bibliothèque', 'Prix': 'Gratuite', 'Remarques': 'Licence MIT, s’exécute sur votre machine' },
            { 'Option': 'Navigateurs cloud', 'Prix': '0.06 $/heure de navigateur', 'Remarques': 'Furtifs, résolution de CAPTCHA' },
            { 'Option': 'Agents web', 'Prix': '0.006 $/tâche (médiane)', 'Remarques': 'API d’agent hébergée' },
          ],
          note: 'Les prix sont des chiffres du fabricant en dollars américains, consultés le 19 novembre 2026. Le prix par tâche est décrit comme une médiane : chaque tâche peut donc coûter plus ou moins.',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Pour qui',
          items: [
            'Développeurs Python qui veulent confier des tâches web à un modèle d’IA et acceptent une bibliothèque jeune et en évolution rapide.',
            'Personnes qui utilisent déjà Claude Code, Codex ou un agent similaire et veulent lui donner accès au navigateur via la CLI, comme le décrit le README.',
            'Équipes qui veulent essayer un modèle Ollama local pilotant un navigateur local, en acceptant que la qualité avec de petits modèles locaux n’ait pas été testée ici.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Limites et ce que nous n’avons pas pu vérifier',
          content: [
            '**Browser Use convient mal si le contenu des pages ne doit pas parvenir à un modèle tiers, et de nombreux points restent non vérifiés.**',
          ],
          items: [
            'Ne convient pas : les tâches sur des comptes où une IA agissant pour vous n’est pas autorisée, ou lorsqu’un mauvais clic coûte de l’argent ou des données ; le README lui-même précise que ses garde-fous ne sont pas un bac à sable.',
            'Ne convient pas : les utilisateurs qui veulent un installateur en double-clic ; les sources n’en montrent aucun.',
            'Non vérifié : taux de réussite, vitesse et coût par tâche. Le README montre un graphique de benchmark que PromptQuorum n’a pas reproduit.',
            'Non vérifié : la qualité du pilotage du navigateur par des modèles locaux. Le README montre la configuration Ollama mais ne donne aucun chiffre de qualité.',
            'Non vérifié : les affirmations sur la furtivité, la résolution de CAPTCHA et la détection de robots, qui dépendent du site et sont des déclarations du fabricant.',
            'Non vérifié : les déclarations de sécurité pour entreprises et les options de résidence des données, proposées via les ventes ; aucun rapport d’audit n’a été vu.',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: 'Alternatives',
          content: [
            '**Browser Use est un agent spécifique au navigateur ; les alternatives du même segment de l’annuaire sont des agents plus larges, pour l’ordinateur ou le code.** PromptQuorum ne les a pas comparés en pratique.',
          ],
          columns: ['Outil', 'Mentionné dans les sources'],
          rows: [
            { 'Outil': 'Browser Use', 'Mentionné dans les sources': 'Bibliothèque et CLI d’agent uniquement navigateur ; MIT ; cloud payant en option' },
            { 'Outil': '[Local Operator](/fr/power-local-llm/local-operator-review)', 'Mentionné dans les sources': 'Application de bureau pour des agents qui exécutent du code sur votre ordinateur ; MIT' },
            { 'Outil': '[Open Interpreter](/fr/power-local-llm/open-interpreter-review)', 'Mentionné dans les sources': 'Permet à un modèle de contrôler votre ordinateur et d’exécuter du code' },
            { 'Outil': '[Agent Zero](/fr/power-local-llm/agent-zero-review)', 'Mentionné dans les sources': 'Agent auto-hébergé dans Docker avec interface web' },
          ],
        },
        faq: {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            {
              q: 'Browser Use est-il gratuit ?',
              a: 'La bibliothèque Python est gratuite sous licence MIT. Browser Use Cloud et les modèles hébergés sont facturés à l’usage, avec 1 dollar de crédit gratuit pour les nouveaux comptes selon le site, et les fournisseurs d’API facturent séparément si vous utilisez vos propres clés.',
            },
            {
              q: 'Browser Use peut-il fonctionner avec un modèle local ?',
              a: 'Oui, selon la FAQ du README : avec un Chromium local et un point d’accès local compatible OpenAI comme Ollama sur localhost, port 11434. PromptQuorum ne l’a pas essayé et les sources n’indiquent aucune taille minimale de modèle.',
            },
            {
              q: 'Utilise-t-il mon propre Chrome et mes connexions ?',
              a: 'C’est possible : le mode Chrome pilote le Chrome que vous avez ouvert, avec vos connexions, après avoir activé une fois le débogage à distance dans chrome://inspect. Une copie temporaire d’un profil est également possible. L’agent obtient ainsi accès à ces sessions ; utilisez un profil séparé pour les tâches risquées.',
            },
            {
              q: 'Quelle version faut-il utiliser ?',
              a: 'La version examinée est la 1.0.6 du 16 novembre 2026. Le README conseille de figer une version exacte plutôt qu’une plage, et la ligne 1.0 a réécrit l’agent : lisez donc le guide de migration si vous venez de la 0.x.',
            },
            {
              q: 'Où Browser Use a-t-il son siège ?',
              a: 'Les conditions d’utilisation indiquent que Browser Use a son siège aux États-Unis et sont régies par le droit californien. La politique de confidentialité désigne Browser Use, Inc. comme entité responsable.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Verdict',
          content: [
            '**Browser Use mérite un essai si vous voulez piloter depuis Python un modèle d’IA qui utilise un vrai navigateur et si vous acceptez que la configuration par défaut envoie le contenu des pages à des services hébergés.**',
            'Il est open source sous licence MIT, publié activement (dernier push le 19 novembre 2026, version 1.0.6 le 16 novembre 2026) et prend en charge un Chrome local avec un modèle Ollama local. Les contreparties : pas d’installateur, des versions rapides qui, selon le README, peuvent casser des choses, des garde-fous qui ne sont pas un bac à sable, des réglages cloud par défaut payants, et des affirmations sur les taux de réussite, la furtivité et la sécurité qui reposent uniquement sur les déclarations du fabricant. PromptQuorum ne l’a pas testé ; essayez-le d’abord avec un profil jetable et une tâche à faible risque.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Site web de Browser Use](https://browser-use.com) — produits et tarifs, consulté le 19 novembre 2026.',
            '[Dépôt GitHub](https://github.com/browser-use/browser-use) — informations sur le dépôt et dernier push, consulté le 19 novembre 2026.',
            '[README](https://github.com/browser-use/browser-use#readme) — voies d’installation, modes de navigateur, modèles et FAQ, consulté le 19 novembre 2026.',
            '[LICENSE](https://github.com/browser-use/browser-use/blob/main/LICENSE) — licence MIT, consultée le 19 novembre 2026.',
            '[Version 1.0.6](https://github.com/browser-use/browser-use/releases/tag/1.0.6) — dernière version, publiée le 16 novembre 2026.',
            '[pyproject.toml](https://github.com/browser-use/browser-use/blob/main/pyproject.toml) — version et exigence Python 3.11+, consulté le 19 novembre 2026.',
            '[Politique de confidentialité](https://browser-use.com/privacy) — entité responsable et données collectées, consulté le 19 novembre 2026.',
            '[Conditions d’utilisation](https://browser-use.com/legal/terms-of-service) — siège aux États-Unis, droit californien, consulté le 19 novembre 2026.',
            '[Fiche Localhosted](https://localhosted.com/browser-use) — fiche d’annuaire avec étiquettes, consultée le 19 novembre 2026 ; la fiche n’a pas été revendiquée par son propriétaire.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures associées',
          items: [
            '[Local Operator Review](/fr/power-local-llm/local-operator-review) — une application de bureau pour des agents qui exécutent du code sur votre ordinateur.',
            '[Open Interpreter Review](/fr/power-local-llm/open-interpreter-review) — un agent qui permet à un modèle de contrôler votre ordinateur et d’exécuter du code.',
            '[Agent Zero Review](/fr/power-local-llm/agent-zero-review) — un agent auto-hébergé qui s’exécute dans Docker.',
            '[Annuaire des logiciels LLM locaux](/fr/directory) — le catalogue complet des outils d’IA locale.',
            '[Test de Nanobrowser](/fr/power-local-llm/nanobrowser-review) — une extension gratuite et open source pour Chrome et Edge dont l\'agent clique et saisit du texte dans votre propre navigateur, avec un modèle cloud ou un modèle local Ollama ou LM Studio.',
          ],
        },
      },
    },
    ja: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-19',
      dateModified: '2026-11-19',
      next_refresh_due: '2027-05-19',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/browser-use-review-hero-ja.webp',
      title: 'Browser Use レビュー：Python向けオープンソースAIブラウザエージェント',
      seoTitle: 'Browser Use レビュー：ブラウザエージェントと料金',
      intro:
        'Browser Useは、Browser Use, Inc.が提供するオープンソースのPythonライブラリ兼コマンドラインツールで、AIモデルが実際のWebブラウザを操作し、フォーム入力やデータ収集などのタスクを実行します。同社は有料のクラウドブラウザとホスト型エージェントAPIも販売しています。このレビューは、2026年11月19日に確認したメーカーのWebサイト、GitHubリポジトリ、法的文書に基づいており、PromptQuorumはソフトウェアを検証していません。',
      metaDescription:
        'Browser UseはAIモデルにブラウザを操作させるMITライセンスのPythonライブラリ兼CLIです。ローカル／ホスト型モデル、クラウド料金、プライバシーを整理。未検証。',
      twitterDescription:
        'Browser Useレビュー：有料クラウドを任意で使えるPython向けオープンソースAIブラウザエージェント。機能、データの扱い、確認できなかった点。',
      audience:
        'AIモデルにWebタスクを自動化させたいPython開発者やエージェント開発者、無料ライブラリと有料クラウドブラウザを比較する読者',
      readTime: '6分で読める',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Browser Use',
      targetKeywords: [
        'Browser Use レビュー',
        'Browser Use AIブラウザエージェント',
        'Browser Use 料金',
        'Browser Use Ollama',
        'Browser Use クラウド',
        'Browser Use 代替',
      ],
      current_models_mentioned: ['Ollama'],
      leadAnswerBlock:
        '**Browser Use（バージョン1.0.6、2026年11月16日公開）は、AIモデルがPythonコードを書いて実際のブラウザを操作する、MITライセンスの無料Pythonライブラリ兼コマンドラインツールです。** 既定ではメーカーのホスト型モデルと有料のクラウドブラウザを使いますが、ローカルのChromeを動かし、ローカルのOllamaモデルを接続することもできます。ここに書いた内容はすべてメーカーのWebサイト、README、法的文書によるもので、PromptQuorumは検証していません。',
      quickAnswerTop: {
        ja: {
          question: 'Browser Useは無料で、ローカルで動きますか？',
          answer:
            'ライブラリは無料のMITライセンスで、手元のマシン上のChromeを操作できます。ただし既定ではBrowser Use Cloudのブラウザとメーカーのホスト型モデルを使い、どちらも1ドルのクレジット後は従量課金です。ローカルだけで使うには、ローカルのブラウザと自分のモデルを選ぶ必要があります。',
          bullets: [
            'Python 3.11以降が必要で、ホスト型API、CLI、Pythonライブラリの3通りの使い方があります。',
            'ブラウザ：Browser Use Cloud、新しいローカルChromium、またはログイン済みの自分のChromeです。',
            'モデル：既定はホスト型bu-4.0で、OpenAI、Anthropic、Google、またはOpenAI互換エンドポイント経由のローカルOllamaモデルも使えます。',
            'READMEは、ドメイン制限とシークレットのマスキングはサンドボックスではないと明記しています。',
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
            { type: 'one-sentence', text: 'Browser Useは、AIモデルがPythonを書いて実行しながら実際のブラウザを操作する、CLI付きのオープンソースPythonライブラリで、同社の有料クラウドブラウザとホスト型エージェントも任意で利用できます。' },
            { type: 'plain-terms', text: 'エージェントに自然な言葉でタスクを渡すと、ブラウザを開き、Chromeのデバッグプロトコルでクリックや入力を行い、結果を返します。モデルがページを読むため、ページの内容は設定したモデルに送られます。' },
          ],
          items: [
            'メンテナンス：リポジトリは2026年11月19日に最後にプッシュされ、最新リリース1.0.6は2026年11月16日です。放置プロジェクトの警告は該当しません。',
            'ライセンス：ライブラリはMITです。Browser Use Cloudとホスト型モデルは別の有料サービスです。',
            '費用：Webサイトによると、ステルスブラウザは1ブラウザ時間あたり0.06ドル、Webエージェントは1タスクあたり0.006ドル（中央値）で、新規アカウントには1ドルの無料クレジットがあります。',
            'ローカル利用：READMEには、ローカルChromiumとOpenAI互換エンドポイント経由のOllamaモデルの例があります。',
            'リリースの速さ：READMEによると、リリースは頻繁で、壊れる変更が入ることもあるため、正確なバージョンを固定するよう勧めています。',
          ],
          callouts: [
            { type: 'note', text: 'このレビューは、2026年11月19日に確認したメーカーのWebサイト、GitHubリポジトリ、README、法的文書に基づいています。PromptQuorumはBrowser Useをインストールも実行もしていないため、成功率、速度、タスクあたりの費用は評価していません。あなたに代わってクリックやログインを行うエージェントは、意図しない操作をする可能性があります。これは一般的な情報であり、セキュリティ上の助言ではありません。' },
          ],
        },
        overview: {
          id: 'overview',
          title: '概要',
          content: [
            '**Browser Useは、Browser Use, Inc.によるAIブラウザエージェントです。タスクを説明すると、モデルが実際のブラウザで完了させます。** READMEによると、モデルは永続的な1つのREPLでPythonを書き、browser-harnessのヘルパーとChrome DevTools Protocolを使います。バージョン1.0以降、ライブラリはPydantic AI上で動作します。',
            '利用規約には、Browser Useの本社は米国にあると書かれています。リポジトリは2024年10月31日に作成され、2026年11月19日に最後にプッシュされました。最新リリース1.0.6は2026年11月16日で、開発は活発です。READMEは、0.xからの利用者に移行ガイドを読むよう案内しています。',
            '同社が販売しているのは、オープンソースのライブラリ、Browser Use Cloud（CAPTCHA解決付きのステルスブラウザとホスト型エージェントAPI）、エンタープライズ向け導入の3つです。オープンソースなのはライブラリだけです。',
          ],
        },
        getIt: {
          id: 'get-it',
          title: '入手方法',
          content: [
            '**Browser Useにはインストーラーがありません。ホスト型API、CLI、Pythonライブラリのいずれかで使い、ライブラリにはPython 3.11以降が必要です。**',
          ],
          columns: ['方法', '入手方法'],
          rows: [
            { '方法': 'ホスト型クラウド', '入手方法': '[Browser Use Cloud](https://cloud.browser-use.com)：API、1ドルの無料クレジット' },
            { '方法': 'CLI', '入手方法': '`uv tool install browser-use==1.0.6`' },
            { '方法': 'Pythonライブラリ', '入手方法': '`uv add \'browser-use==1.0.6\'` またはpip（Python 3.11以降）' },
            { '方法': 'Webサイト', '入手方法': '[browser-use.com](https://browser-use.com)' },
            { '方法': 'ソースコード', '入手方法': '[GitHub](https://github.com/browser-use/browser-use)（MIT）' },
            { '方法': 'プライバシーポリシー', '入手方法': '[browser-use.com/privacy](https://browser-use.com/privacy)' },
          ],
          codeBlock: '# CLI（uv）\nuv tool install browser-use==1.0.6\nbrowser-use skill install\n\n# Pythonライブラリ（Python 3.11以降）\nuv add \'browser-use==1.0.6\'\nexport BROWSER_USE_API_KEY=bu_...',
          codeLanguage: 'bash',
          note: '確認したバージョン：1.0.6。GitHub Releasesで2026年11月16日に公開され、pyproject.tomlとも一致しています。プロジェクトの最終更新（プッシュ）は2026年11月19日です。READMEは、リリースが頻繁で壊れる変更が入ることもあるため、正確なバージョンの固定を勧めています。',
        },
        features: {
          id: 'features',
          title: '機能',
          content: [
            '**以下はすべてREADMEまたはWebサイトにあるメーカーの説明で、PromptQuorumは検証していません。**',
          ],
          items: [
            '**Pythonを書くエージェント。** モデルはREPLの中で、生のChrome DevTools Protocol呼び出しを通じてブラウザを操作し、結果を返して終了します。',
            '**複数のブラウザモード。** Browser Use Cloudのブラウザ（既定）、一時プロファイルの新しいローカルChromeまたはChromium、ログイン済みの自分のChrome、または自分のChromeプロファイルのコピーです。',
            '**モデルの選択。** 既定はホスト型のbu-4.0ファミリーで、OpenAI、Anthropic、Google用の組み込みクラス、任意のPydantic AIモデル文字列、OllamaなどのOpenAI互換サーバーも使えます。',
            '**型付き結果、アップロード、ダウンロード。** スキーマによる構造化出力、ページへのファイルアップロード、作業フォルダに集められるダウンロードファイルに対応します。',
            '**シークレットと制限。** ドメイン単位のシークレットはログや結果でマスクされ、許可・禁止ドメインのリストもあります。READMEは、どちらもサンドボックスではないと述べています。',
            '**カスタムツールとWeb検索。** Python関数をエージェントのツールとして登録でき、任意のWeb検索は検索ごとにBrowser Useのキーに課金されます。',
            '**判定ステップ。** 実行後、同じモデルへの追加リクエストで、トレースと（無効化しない限り）スクリーンショットをもとにタスクに対する結果を評価します。',
            '**CAPTCHA。** クラウドブラウザはCAPTCHAを自動で解決します。READMEは、結果はサイトによって異なり、成功を保証する設定はないと付け加えています。',
          ],
        },
        privacy: {
          id: 'privacy',
          title: 'プライバシーとデータの流れ',
          content: [
            '**Browser Useはエージェントが見たものをモデルに送るため、ブラウザとモデルの両方がローカルでない限り、ページの内容、スクリーンショット、タスクの文面はお使いのコンピューターの外へ出ます。** 既定ではモデルはメーカーのホスト型ゲートウェイ、ブラウザはBrowser Use Cloud上で動きます。ローカルのChromiumとOllamaモデルを使えば、どちらも手元に留まります。',
            'プライバシーポリシーは、責任主体をBrowser Use, Inc.とし、収集するデータにユーザーが入力した内容とプロンプトを含めています。カード決済はStripeを通じて行われます。READMEによると、テレメトリーが有効な場合は匿名のテレメトリーイベントが記録され、判定ステップではスクリーンショットがモデルに送られることがあります。',
            'READMEには2つの注意点があります。クラウドブラウザのライブビューのリンクを持つ人は誰でもそのブラウザを操作できること、そして自分のChromeを操作させるとエージェントはログイン済みのサイトにアクセスできることです。PromptQuorumはネットワークトラフィックを調べていません。',
          ],
          callouts: [
            { type: 'note', text: 'これらはメーカーの説明であり、監査結果ではありません。業務用や顧客のアカウントでは、先にプライバシーポリシーと利用規約を読み、別のブラウザプロファイルを使ってください。Webサイトの自動操作はそのサイトの利用規約に違反する場合があります。特にCAPTCHA解決やステルス機能を使う場合は、エージェントを実行する前に規約を確認してください。' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: '料金とライセンス',
          content: [
            '**ライブラリは無料で、クラウドブラウザとホスト型エージェントは少額のクレジット後に従量課金です。**',
            'Webサイトには、ステルスブラウザが1ブラウザ時間あたり0.06ドル、Webエージェントが1タスクあたり0.006ドル（中央値）と記載され、新規アカウントは1人1回、有効期限なしで1ドル分を無料で始められるとあります。READMEも、Google、GitHub、Microsoftで新規登録した場合の同じ1ドルのクレジットに触れています。SOC 2、BAA付きHIPAA、EUデータレジデンシー、オンプレミス導入などの企業向け条件は、営業経由で提供されます。自分のプロバイダー経由のモデル利用は、そのプロバイダーが課金します。',
          ],
          columns: ['選択肢', '料金', '備考'],
          rows: [
            { '選択肢': 'ライブラリ', '料金': '無料', '備考': 'MITライセンス、手元で実行' },
            { '選択肢': 'クラウドブラウザ', '料金': '0.06ドル／ブラウザ時間', '備考': 'ステルス、CAPTCHA解決' },
            { '選択肢': 'Webエージェント', '料金': '0.006ドル／タスク（中央値）', '備考': 'ホスト型エージェントAPI' },
          ],
          note: '料金は2026年11月19日に確認したメーカーの米ドル表記です。タスクあたりの料金は中央値とされているため、個々のタスクでは高くも安くもなり得ます。',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: '向いている人',
          items: [
            'AIモデルにWebタスクを自動化させたく、新しく変化の速いライブラリを受け入れられるPython開発者。',
            'すでにClaude CodeやCodexなどのエージェントを使っていて、READMEが説明するようにCLI経由でブラウザへのアクセスを与えたい人。',
            'ローカルのOllamaモデルでローカルブラウザを動かしてみたく、小さなローカルモデルでの品質は未検証であることを受け入れられるチーム。',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '制約と確認できなかった点',
          content: [
            '**ページの内容を第三者のモデルに送れない場合、Browser Useは向きません。また、多くの点が未確認です。**',
          ],
          items: [
            '向かない場合：AIによる代理操作が許されないアカウントでの作業や、誤クリックが金銭やデータの損失につながる作業。READMEも、安全策はサンドボックスではないと述べています。',
            '向かない場合：ダブルクリックで入れられるインストーラーを求める人。資料にはインストーラーが見当たりません。',
            '未確認：タスクの成功率、速度、タスクあたりの費用。READMEにはベンチマーク図がありますが、PromptQuorumは再現していません。',
            '未確認：ローカルモデルがどの程度ブラウザを操作できるか。READMEにはOllamaの設定例がありますが、品質の数値はありません。',
            '未確認：ステルス、CAPTCHA解決、ボット検出に関する説明。サイトによって異なり、メーカーの主張です。',
            '未確認：企業向けのセキュリティ説明とデータレジデンシーの選択肢。営業経由で提供され、監査報告書は確認していません。',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: '代替ツール',
          content: [
            '**Browser Useはブラウザに特化したエージェントです。同じディレクトリのセグメントにある代替ツールは、より広い範囲のコンピューターやコーディング向けエージェントです。** PromptQuorumは実機で比較していません。',
          ],
          columns: ['ツール', '出典での扱い'],
          rows: [
            { 'ツール': 'Browser Use', '出典での扱い': 'ブラウザ専用のエージェントライブラリとCLI。MIT。有料クラウドは任意' },
            { 'ツール': '[Local Operator](/ja/power-local-llm/local-operator-review)', '出典での扱い': 'コンピューター上でコードを実行するエージェント用のデスクトップアプリ。MIT' },
            { 'ツール': '[Open Interpreter](/ja/power-local-llm/open-interpreter-review)', '出典での扱い': 'モデルがコンピューターを操作し、コードを実行できる' },
            { 'ツール': '[Agent Zero](/ja/power-local-llm/agent-zero-review)', '出典での扱い': 'Dockerで動くセルフホスト型エージェント。Webインターフェース付き' },
          ],
        },
        faq: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'Browser Useは無料ですか？',
              a: 'Pythonライブラリは無料のMITライセンスです。Browser Use Cloudとホスト型モデルは従量課金で、Webサイトによると新規アカウントには1ドルの無料クレジットがあります。自分のキーを使う場合、APIプロバイダーが別途課金します。',
            },
            {
              q: 'Browser Useはローカルモデルで動きますか？',
              a: 'はい。READMEのFAQによると、ローカルChromiumと、localhostのポート11434で動くOllamaなどOpenAI互換のローカルエンドポイントを使います。PromptQuorumは試しておらず、必要なモデルサイズの最小値も資料にはありません。',
            },
            {
              q: '自分のChromeとログイン情報を使えますか？',
              a: '使えます。Chromeモードは、chrome://inspectでリモートデバッグを一度有効にすると、ログイン済みの開いているChromeを操作します。プロファイルの一時コピーを使う方法もあります。エージェントがそれらのセッションにアクセスできるため、リスクのある作業には別のプロファイルを使ってください。',
            },
            {
              q: 'どのバージョンを使えばよいですか？',
              a: '確認したリリースは2026年11月16日の1.0.6です。READMEは範囲指定ではなく正確なバージョンの固定を勧めており、1.0系ではエージェントが書き直されたため、0.xからの場合は移行ガイドを読んでください。',
            },
            {
              q: 'Browser Useはどこの会社ですか？',
              a: '利用規約には、Browser Useの本社は米国にあり、カリフォルニア州法が準拠法と書かれています。プライバシーポリシーは、責任主体をBrowser Use, Inc.としています。',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '総評',
          content: [
            '**Pythonから、実際のブラウザを操作するAIモデルを制御したく、既定の設定がページの内容をホスト型サービスに送ることを受け入れられるなら、Browser Useは試す価値があります。**',
            'MITライセンスのオープンソースで、リリースも活発（最終プッシュは2026年11月19日、1.0.6は2026年11月16日）、ローカルChromeとローカルOllamaモデルにも対応します。一方で、インストーラーがないこと、READMEが壊れる変更もあり得ると述べるほど速いリリース、サンドボックスではない安全策、有料のクラウド既定値、そして成功率、ステルス、セキュリティに関する説明がメーカーの主張のみに基づく点には注意が必要です。PromptQuorumは検証していません。まず使い捨てのプロファイルとリスクの低いタスクで試してください。',
          ],
        },
        sources: {
          id: 'sources',
          title: '出典',
          items: [
            '[Browser Use公式サイト](https://browser-use.com) — 製品と料金。2026年11月19日確認。',
            '[GitHubリポジトリ](https://github.com/browser-use/browser-use) — リポジトリ情報と最終プッシュ。2026年11月19日確認。',
            '[README](https://github.com/browser-use/browser-use#readme) — インストール方法、ブラウザモード、モデル、FAQ。2026年11月19日確認。',
            '[LICENSE](https://github.com/browser-use/browser-use/blob/main/LICENSE) — MITライセンス。2026年11月19日確認。',
            '[リリース1.0.6](https://github.com/browser-use/browser-use/releases/tag/1.0.6) — 最新リリース。2026年11月16日公開。',
            '[pyproject.toml](https://github.com/browser-use/browser-use/blob/main/pyproject.toml) — バージョンとPython 3.11以降の要件。2026年11月19日確認。',
            '[プライバシーポリシー](https://browser-use.com/privacy) — 責任主体と収集データ。2026年11月19日確認。',
            '[利用規約](https://browser-use.com/legal/terms-of-service) — 本社は米国、カリフォルニア州法。2026年11月19日確認。',
            '[Localhostedの掲載ページ](https://localhosted.com/browser-use) — タグ付きのディレクトリ掲載ページ。2026年11月19日確認。掲載ページは所有者による登録（クレーム）がされていません。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連記事',
          items: [
            '[Local Operator Review](/ja/power-local-llm/local-operator-review) — コンピューター上でコードを実行するエージェント用のデスクトップアプリ。',
            '[Open Interpreter Review](/ja/power-local-llm/open-interpreter-review) — モデルがコンピューターを操作し、コードを実行できるエージェント。',
            '[Agent Zero Review](/ja/power-local-llm/agent-zero-review) — Dockerで動くセルフホスト型エージェント。',
            '[ローカルLLMソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
            '[Nanobrowserレビュー](/ja/power-local-llm/nanobrowser-review) — ご自身のブラウザー内でエージェントがクリックや入力を行う、ChromeとEdge向けの無料オープンソース拡張機能。クラウドモデルまたはローカルのOllama・LM Studioモデルを使えます。',
          ],
        },
      },
    },
    pt: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-19',
      dateModified: '2026-11-19',
      next_refresh_due: '2027-05-19',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/browser-use-review-hero-pt.webp',
      title: 'Análise do Browser Use: agente de navegador com IA de código aberto para Python',
      seoTitle: 'Análise do Browser Use: agente de navegador e preços',
      intro:
        'O Browser Use é uma biblioteca Python de código aberto e uma ferramenta de linha de comando da Browser Use, Inc. que permite que um modelo de IA opere um navegador web de verdade para concluir tarefas como preencher formulários ou coletar dados. A mesma empresa vende um navegador na nuvem pago e uma API de agente hospedada. Esta análise se baseia no site do fabricante, no repositório do GitHub e nos textos legais, consultados em 19 de novembro de 2026; a PromptQuorum não testou o software.',
      metaDescription:
        'O Browser Use é uma biblioteca Python e CLI com licença MIT para um modelo de IA controlar um navegador. Modelos locais ou hospedados, preços, privacidade.',
      twitterDescription:
        'Análise do Browser Use: um agente de navegador com IA de código aberto para Python, com nuvem paga opcional. O que faz, como trata os dados e o que não conseguimos verificar.',
      audience:
        'Desenvolvedores Python e criadores de agentes que querem que um modelo de IA automatize tarefas na web, e leitores que comparam uma biblioteca gratuita com um navegador na nuvem pago',
      readTime: '6 min de leitura',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Browser Use',
      targetKeywords: [
        'análise do Browser Use',
        'Browser Use agente de navegador com IA',
        'preços do Browser Use',
        'Browser Use Ollama',
        'Browser Use nuvem',
        'alternativas ao Browser Use',
      ],
      current_models_mentioned: ['Ollama'],
      leadAnswerBlock:
        '**O Browser Use (versão 1.0.6, lançada em 16 de novembro de 2026) é uma biblioteca Python e ferramenta de linha de comando gratuita, com licença MIT, em que um modelo de IA opera um navegador de verdade escrevendo código Python.** A configuração padrão usa o modelo hospedado do fabricante e um navegador na nuvem pago, mas você pode rodar um Chrome local e apontá-lo para um modelo local do Ollama. Todas as afirmações vêm do site, do README e dos textos legais do fabricante; a PromptQuorum não o testou.',
      quickAnswerTop: {
        pt: {
          question: 'O Browser Use é gratuito e roda localmente?',
          answer:
            'A biblioteca é gratuita, tem licença MIT e pode controlar um Chrome no seu próprio computador. Por padrão, porém, ela usa um navegador do Browser Use Cloud e o modelo hospedado do fabricante, ambos cobrados por uso após um crédito de 1 dólar; para uma configuração somente local, você escolhe um navegador local e o seu próprio modelo.',
          bullets: [
            'Exige Python 3.11 ou superior; três caminhos: API hospedada, CLI ou biblioteca Python.',
            'Navegadores: Browser Use Cloud, um Chromium local novo ou o seu próprio Chrome aberto, com seus logins.',
            'Modelos: bu-4.0 hospedado por padrão, OpenAI, Anthropic, Google ou um modelo local do Ollama por um endpoint compatível com OpenAI.',
            'Segundo o README, os limites de domínio e a ocultação de segredos não são um sandbox.',
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
            { type: 'one-sentence', text: 'O Browser Use é uma biblioteca Python de código aberto com CLI que permite que um modelo de IA controle um navegador de verdade escrevendo e executando Python, com navegador na nuvem pago e agente hospedado opcionais da mesma empresa.' },
            { type: 'plain-terms', text: 'Você entrega uma tarefa ao agente em linguagem natural, ele abre um navegador, clica e digita pelo protocolo de depuração do Chrome e devolve um resultado. O modelo lê as páginas, então o conteúdo delas vai para o modelo que você configurar.' },
          ],
          items: [
            'Manutenção: o repositório recebeu o último push em 19 de novembro de 2026 e a versão mais recente, 1.0.6, é de 16 de novembro de 2026; nenhum aviso de projeto abandonado se aplica.',
            'Licença: MIT para a biblioteca; o Browser Use Cloud e seus modelos hospedados são serviços pagos separados.',
            'Custo: o site informa 0.06 dólar por hora de navegador para os navegadores furtivos e 0.006 dólar por tarefa (mediana) para os agentes web; contas novas recebem 1 dólar de crédito gratuito.',
            'Opção local: o README mostra um Chromium local com um modelo do Ollama por um endpoint compatível com OpenAI.',
            'Ritmo de lançamentos: segundo o README, as versões saem rápido e podem quebrar coisas; ele recomenda fixar uma versão exata.',
          ],
          callouts: [
            { type: 'note', text: 'Esta análise se baseia no site, no repositório do GitHub, no README e nos textos legais do fabricante, consultados em 19 de novembro de 2026. A PromptQuorum não instalou nem executou o Browser Use, então taxas de sucesso, velocidade e custo por tarefa não foram avaliados. Um agente que clica e faz login em seu nome pode executar ações que você não pretendia. Estas são informações gerais, não aconselhamento de segurança.' },
          ],
        },
        overview: {
          id: 'overview',
          title: 'Visão geral',
          content: [
            '**O Browser Use é um agente de navegador com IA da Browser Use, Inc.: você descreve uma tarefa e um modelo a conclui em um navegador de verdade.** Segundo o README, o modelo escreve Python em um único REPL persistente, usando os auxiliares do browser-harness e o Chrome DevTools Protocol, e desde a versão 1.0 a biblioteca roda sobre o Pydantic AI.',
            'Os termos de serviço dizem que a Browser Use tem sede nos Estados Unidos. O repositório foi criado em 31 de outubro de 2024 e recebeu o último push em 19 de novembro de 2026; a versão mais recente, 1.0.6, é de 16 de novembro de 2026, então o desenvolvimento está ativo. O README orienta quem vem das versões 0.x a ler o guia de migração.',
            'A empresa vende três coisas: a biblioteca de código aberto, o Browser Use Cloud (navegadores furtivos com resolução de CAPTCHA e uma API de agente hospedada) e implantações corporativas. Só a biblioteca é de código aberto.',
          ],
        },
        getIt: {
          id: 'get-it',
          title: 'Como obter',
          content: [
            '**O Browser Use não tem instalador: ele é usado por uma API hospedada, uma CLI ou uma biblioteca Python, e a biblioteca exige Python 3.11 ou superior.**',
          ],
          columns: ['Caminho', 'Como obter'],
          rows: [
            { 'Caminho': 'Nuvem hospedada', 'Como obter': '[Browser Use Cloud](https://cloud.browser-use.com): API, 1 dólar de crédito' },
            { 'Caminho': 'CLI', 'Como obter': '`uv tool install browser-use==1.0.6`' },
            { 'Caminho': 'Biblioteca Python', 'Como obter': '`uv add \'browser-use==1.0.6\'` ou pip (Python 3.11+)' },
            { 'Caminho': 'Site', 'Como obter': '[browser-use.com](https://browser-use.com)' },
            { 'Caminho': 'Código-fonte', 'Como obter': '[GitHub](https://github.com/browser-use/browser-use) (MIT)' },
            { 'Caminho': 'Política de privacidade', 'Como obter': '[browser-use.com/privacy](https://browser-use.com/privacy)' },
          ],
          codeBlock: '# CLI (uv)\nuv tool install browser-use==1.0.6\nbrowser-use skill install\n\n# Biblioteca Python (Python 3.11+)\nuv add \'browser-use==1.0.6\'\nexport BROWSER_USE_API_KEY=bu_...',
          codeLanguage: 'bash',
          note: 'Versão analisada: 1.0.6, lançada em 16 de novembro de 2026 segundo o GitHub Releases e coincidindo com o pyproject.toml; última atualização do projeto (push) em 19 de novembro de 2026. O README recomenda fixar uma versão exata, porque as versões saem rápido e podem quebrar coisas.',
        },
        features: {
          id: 'features',
          title: 'Recursos',
          content: [
            '**Tudo o que segue são afirmações do fabricante, tiradas do README ou do site; a PromptQuorum não testou nada disso.**',
          ],
          items: [
            '**Um agente que escreve Python.** O modelo trabalha em um REPL sobre o navegador por meio de chamadas diretas ao Chrome DevTools Protocol e termina com um resultado.',
            '**Vários modos de navegador.** Um navegador do Browser Use Cloud (padrão), um Chrome ou Chromium local novo com perfil temporário, o seu próprio Chrome aberto com seus logins ou uma cópia de um dos seus perfis do Chrome.',
            '**Escolha de modelo.** A família bu-4.0 hospedada por padrão, classes integradas para OpenAI, Anthropic e Google, qualquer string de modelo do Pydantic AI ou um servidor compatível com OpenAI, como o Ollama.',
            '**Resultados tipados, uploads e downloads.** Saída estruturada por meio de um esquema, upload de arquivos para as páginas e arquivos baixados reunidos em uma pasta de trabalho.',
            '**Segredos e limites.** Segredos restritos a um domínio e ocultados em logs e resultados, além de listas de domínios permitidos e proibidos. O README deixa claro que nenhum dos dois é um sandbox.',
            '**Ferramentas próprias e busca na web.** Funções Python podem ser registradas como ferramentas do agente; uma busca na web opcional é cobrada por busca na sua chave do Browser Use.',
            '**Uma etapa de avaliação.** Depois de uma execução, mais uma solicitação ao mesmo modelo avalia o resultado em relação à tarefa, usando o histórico e, a menos que seja desativado, capturas de tela.',
            '**CAPTCHAs.** Os navegadores na nuvem resolvem CAPTCHAs automaticamente; o README acrescenta que o resultado depende do site e que nenhuma configuração garante sucesso.',
          ],
        },
        privacy: {
          id: 'privacy',
          title: 'Privacidade e fluxo de dados',
          content: [
            '**O Browser Use envia a um modelo o que o agente vê, então o conteúdo das páginas, as capturas de tela e o texto da sua tarefa saem do seu computador, a menos que o navegador e o modelo sejam ambos locais.** Na configuração padrão, o modelo é o gateway hospedado do fabricante e o navegador roda no Browser Use Cloud; com um Chromium local e um modelo do Ollama, ambos ficam no seu computador.',
            'A política de privacidade nomeia a Browser Use, Inc. como entidade responsável e lista entradas e prompts fornecidos pelo usuário entre os dados coletados; pagamentos com cartão passam pela Stripe. O README acrescenta que eventos de telemetria anônimos são registrados quando a telemetria está ativada e que a etapa de avaliação pode enviar capturas de tela ao modelo.',
            'O README traz dois alertas: o link de visualização ao vivo de um navegador na nuvem permite que qualquer pessoa que o tenha controle esse navegador, e controlar o seu próprio Chrome aberto dá ao agente acesso aos sites em que você está logado. A PromptQuorum não inspecionou o tráfego de rede.',
          ],
          callouts: [
            { type: 'note', text: 'Estas são declarações do fabricante, não resultados de auditoria. Para contas de trabalho ou de clientes, leia primeiro a política de privacidade e os termos e use um perfil de navegador separado. Automatizar um site pode violar seus termos de serviço, então confira-os antes de executar um agente contra um site, principalmente com resolução de CAPTCHA ou recursos furtivos.' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: 'Preços e licença',
          content: [
            '**A biblioteca é gratuita; o navegador na nuvem e o agente hospedado são pagos por uso após um pequeno crédito.**',
            'O site informa 0.06 dólar por hora de navegador para os navegadores furtivos e 0.006 dólar por tarefa (mediana) para os agentes web, e diz que contas novas começam com 1 dólar grátis, um por pessoa, sem expiração. O README cita o mesmo crédito de 1 dólar para novos cadastros com Google, GitHub ou Microsoft. Condições corporativas como SOC 2, HIPAA com BAA, residência de dados na UE e implantação local são oferecidas por meio de vendas. O uso de modelos pelo seu próprio provedor é cobrado por esse provedor.',
          ],
          columns: ['Opção', 'Preço', 'Observações'],
          rows: [
            { 'Opção': 'Biblioteca', 'Preço': 'Grátis', 'Observações': 'Licença MIT, roda no seu computador' },
            { 'Opção': 'Navegadores na nuvem', 'Preço': '0.06 $/hora de navegador', 'Observações': 'Furtivos, resolução de CAPTCHA' },
            { 'Opção': 'Agentes web', 'Preço': '0.006 $/tarefa (mediana)', 'Observações': 'API de agente hospedada' },
          ],
          note: 'Os preços são valores do fabricante em dólares americanos, consultados em 19 de novembro de 2026. O preço por tarefa é descrito como mediana, então cada tarefa pode custar mais ou menos.',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'Para quem serve',
          items: [
            'Desenvolvedores Python que querem que um modelo de IA automatize tarefas na web e aceitam uma biblioteca jovem e de mudanças rápidas.',
            'Pessoas que já usam Claude Code, Codex ou um agente parecido e querem dar a ele acesso ao navegador pela CLI, como o README descreve.',
            'Equipes que querem experimentar um modelo local do Ollama controlando um navegador local, aceitando que a qualidade com modelos locais pequenos não foi testada aqui.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'Limites e o que não conseguimos verificar',
          content: [
            '**O Browser Use serve mal se o conteúdo das páginas não pode chegar a um modelo de terceiros, e muitos detalhes continuam sem verificação.**',
          ],
          items: [
            'Não serve: tarefas em contas em que não é permitido que uma IA aja em seu nome, ou em que um clique errado custa dinheiro ou dados; o próprio README diz que suas salvaguardas não são um sandbox.',
            'Não serve: quem quer um instalador de clique duplo; as fontes não mostram nenhum.',
            'Não verificado: taxas de sucesso, velocidade e custo por tarefa. O README mostra um gráfico de benchmark que a PromptQuorum não reproduziu.',
            'Não verificado: quão bem modelos locais controlam o navegador. O README mostra a configuração com o Ollama, mas não traz números de qualidade.',
            'Não verificado: as afirmações sobre furtividade, resolução de CAPTCHA e detecção de bots, que dependem do site e são declarações do fabricante.',
            'Não verificado: as declarações de segurança corporativa e as opções de residência de dados, oferecidas por meio de vendas; nenhum relatório de auditoria foi visto.',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: 'Alternativas',
          content: [
            '**O Browser Use é um agente específico de navegador; as alternativas do mesmo segmento do diretório são agentes mais amplos, de computador ou de programação.** A PromptQuorum não os comparou na prática.',
          ],
          columns: ['Ferramenta', 'Citado nas fontes'],
          rows: [
            { 'Ferramenta': 'Browser Use', 'Citado nas fontes': 'Biblioteca e CLI de agente só de navegador; MIT; nuvem paga opcional' },
            { 'Ferramenta': '[Local Operator](/pt/power-local-llm/local-operator-review)', 'Citado nas fontes': 'App desktop para agentes que executam código no seu computador; MIT' },
            { 'Ferramenta': '[Open Interpreter](/pt/power-local-llm/open-interpreter-review)', 'Citado nas fontes': 'Permite que um modelo controle seu computador e execute código' },
            { 'Ferramenta': '[Agent Zero](/pt/power-local-llm/agent-zero-review)', 'Citado nas fontes': 'Agente auto-hospedado no Docker com interface web' },
          ],
        },
        faq: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            {
              q: 'O Browser Use é gratuito?',
              a: 'A biblioteca Python é gratuita sob a licença MIT. O Browser Use Cloud e os modelos hospedados são cobrados por uso, com 1 dólar de crédito gratuito para contas novas segundo o site, e os provedores de API cobram à parte se você usar suas próprias chaves.',
            },
            {
              q: 'O Browser Use pode rodar com um modelo local?',
              a: 'Sim, segundo o FAQ do README: com um Chromium local e um endpoint local compatível com OpenAI, como o Ollama em localhost, porta 11434. A PromptQuorum não testou e as fontes não indicam um tamanho mínimo de modelo.',
            },
            {
              q: 'Ele usa o meu Chrome e os meus logins?',
              a: 'Pode usar: o modo Chrome controla o Chrome que você deixou aberto, com seus logins, depois de ativar uma vez a depuração remota em chrome://inspect. Uma cópia temporária de um perfil também é possível. Isso dá ao agente acesso a essas sessões, então use um perfil separado em tarefas arriscadas.',
            },
            {
              q: 'Qual versão devo usar?',
              a: 'A versão analisada é a 1.0.6, de 16 de novembro de 2026. O README recomenda fixar uma versão exata em vez de um intervalo, e a linha 1.0 reescreveu o agente, então leia o guia de migração se você vem da 0.x.',
            },
            {
              q: 'Onde fica a sede do Browser Use?',
              a: 'Os termos de serviço dizem que a Browser Use tem sede nos Estados Unidos e são regidos pela lei da Califórnia. A política de privacidade nomeia a Browser Use, Inc. como entidade responsável.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'Veredito',
          content: [
            '**O Browser Use vale a avaliação se você quer controlar, a partir do Python, um modelo de IA que opera um navegador de verdade e aceita que a configuração padrão envia o conteúdo das páginas a serviços hospedados.**',
            'É de código aberto sob a licença MIT, recebe lançamentos com frequência (último push em 19 de novembro de 2026, versão 1.0.6 em 16 de novembro de 2026) e suporta um Chrome local com um modelo local do Ollama. As contrapartidas: não há instalador, as versões saem rápido e, segundo o README, podem quebrar coisas, as salvaguardas não são um sandbox, os padrões da nuvem são pagos e as afirmações sobre taxas de sucesso, furtividade e segurança se apoiam apenas em declarações do fabricante. A PromptQuorum não o testou; experimente primeiro com um perfil descartável e uma tarefa de baixo risco.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fontes',
          items: [
            '[Site do Browser Use](https://browser-use.com) — produtos e preços, consultado em 19 de novembro de 2026.',
            '[Repositório do GitHub](https://github.com/browser-use/browser-use) — dados do repositório e último push, consultado em 19 de novembro de 2026.',
            '[README](https://github.com/browser-use/browser-use#readme) — caminhos de instalação, modos de navegador, modelos e FAQ, consultado em 19 de novembro de 2026.',
            '[LICENSE](https://github.com/browser-use/browser-use/blob/main/LICENSE) — licença MIT, consultada em 19 de novembro de 2026.',
            '[Versão 1.0.6](https://github.com/browser-use/browser-use/releases/tag/1.0.6) — versão mais recente, publicada em 16 de novembro de 2026.',
            '[pyproject.toml](https://github.com/browser-use/browser-use/blob/main/pyproject.toml) — versão e requisito de Python 3.11+, consultado em 19 de novembro de 2026.',
            '[Política de privacidade](https://browser-use.com/privacy) — entidade responsável e dados coletados, consultado em 19 de novembro de 2026.',
            '[Termos de serviço](https://browser-use.com/legal/terms-of-service) — sede nos Estados Unidos, lei da Califórnia, consultado em 19 de novembro de 2026.',
            '[Página no Localhosted](https://localhosted.com/browser-use) — página de diretório com tags, consultada em 19 de novembro de 2026; a página não foi reivindicada pelo proprietário.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            '[Local Operator Review](/pt/power-local-llm/local-operator-review) — um app desktop para agentes que executam código no seu computador.',
            '[Open Interpreter Review](/pt/power-local-llm/open-interpreter-review) — um agente que permite que um modelo controle seu computador e execute código.',
            '[Agent Zero Review](/pt/power-local-llm/agent-zero-review) — um agente auto-hospedado que roda no Docker.',
            '[Diretório de software de LLM local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
            '[Análise do Nanobrowser](/pt/power-local-llm/nanobrowser-review) — uma extensão gratuita e de código aberto para Chrome e Edge cujo agente clica e digita no seu próprio navegador, com um modelo na nuvem ou um modelo local do Ollama ou do LM Studio.',
          ],
        },
      },
    },
    zh: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-19',
      dateModified: '2026-11-19',
      next_refresh_due: '2027-05-19',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/browser-use-review-hero-zh.webp',
      title: 'Browser Use 评测：面向 Python 的开源 AI 浏览器智能体',
      seoTitle: 'Browser Use 评测：开源浏览器智能体与价格',
      intro:
        'Browser Use 是 Browser Use, Inc. 推出的开源 Python 库和命令行工具，可让 AI 模型操作真实的网页浏览器，完成填写表单、收集数据等任务。同一家公司还销售付费云端浏览器和托管智能体 API。本评测基于 2026 年 11 月 19 日查阅的厂商网站、GitHub 仓库和法律文件；PromptQuorum 没有测试过这款软件。',
      metaDescription:
        'Browser Use 是采用 MIT 许可证的 Python 库和命令行工具，可让 AI 模型驱动浏览器。本地或托管模型、云端价格、隐私情况；未经测试。',
      twitterDescription:
        'Browser Use 评测：面向 Python 的开源 AI 浏览器智能体，可选付费云端。功能、数据处理方式，以及我们未能核实的内容。',
      audience:
        '希望让 AI 模型自动完成网页任务的 Python 开发者和智能体开发者，以及在免费库与付费云端浏览器之间权衡的读者',
      readTime: '阅读约6分钟',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Browser Use',
      targetKeywords: [
        'Browser Use 评测',
        'Browser Use AI 浏览器智能体',
        'Browser Use 价格',
        'Browser Use Ollama',
        'Browser Use 云端',
        'Browser Use 替代品',
      ],
      current_models_mentioned: ['Ollama'],
      leadAnswerBlock:
        '**Browser Use（1.0.6 版，2026 年 11 月 16 日发布）是一个免费、采用 MIT 许可证的 Python 库和命令行工具，AI 模型通过编写 Python 代码来操作真实的浏览器。** 默认配置使用厂商的托管模型和付费云端浏览器，但你也可以运行本地 Chrome，并连接本地 Ollama 模型。这里的所有说法均来自厂商的网站、README 和法律文件；PromptQuorum 没有测试过。',
      quickAnswerTop: {
        zh: {
          question: 'Browser Use 免费吗？能在本地运行吗？',
          answer:
            '该库免费，采用 MIT 许可证，可以操控你自己电脑上的 Chrome。不过默认情况下它使用 Browser Use Cloud 的浏览器和厂商的托管模型，二者在 $1额度用完后都按用量计费；要纯本地使用，需要选择本地浏览器和你自己的模型。',
          bullets: [
            '需要 Python 3.11 或更高版本；三种用法：托管 API、命令行工具或 Python 库。',
            '浏览器：Browser Use Cloud、全新的本地 Chromium，或你自己已登录的 Chrome。',
            '模型：默认为托管的 bu-4.0，也可使用 OpenAI、Anthropic、Google，或通过兼容 OpenAI 的端点使用本地 Ollama 模型。',
            'README 说明，其域名限制和密钥屏蔽并不是沙箱。',
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
            { type: 'one-sentence', text: 'Browser Use 是带命令行工具的开源 Python 库，AI 模型通过编写并运行 Python 来操控真实浏览器，同一家公司还提供可选的付费云端浏览器和托管智能体。' },
            { type: 'plain-terms', text: '你用自然语言给智能体一项任务，它会打开浏览器，通过 Chrome 的调试协议点击和输入，并返回结果。模型会读取网页，因此网页内容会发送给你所配置的模型。' },
          ],
          items: [
            '维护情况：仓库最近一次推送是 2026 年 11 月 19 日，最新版本 1.0.6 发布于 2026 年 11 月 16 日，因此不适用“项目已停更”的警告。',
            '许可证：库采用 MIT；Browser Use Cloud 及其托管模型是独立的付费服务。',
            '费用：网站标明隐身浏览器每浏览器小时 $0.06，网页智能体每任务（中位数）$0.006；新账户有 $1免费额度。',
            '本地选项：README 展示了本地 Chromium 搭配通过兼容 OpenAI 的端点接入的 Ollama 模型。',
            '发布节奏：README 称版本更新很快，可能破坏现有用法，并建议固定确切版本。',
          ],
          callouts: [
            { type: 'note', text: '本评测基于 2026 年 11 月 19 日查阅的厂商网站、GitHub 仓库、README 和法律文件。PromptQuorum 没有安装或运行过 Browser Use，因此未评估成功率、速度和单次任务成本。替你点击和登录的智能体可能执行你并不想要的操作。以上为一般性信息，不构成安全建议。' },
          ],
        },
        overview: {
          id: 'overview',
          title: '概览',
          content: [
            '**Browser Use 是 Browser Use, Inc. 推出的 AI 浏览器智能体：你描述任务，模型在真实浏览器中完成。** 根据 README，模型在一个持久的 REPL 中编写 Python，使用 browser-harness 辅助函数和 Chrome DevTools Protocol；自 1.0 版起，该库基于 Pydantic AI 运行。',
            '服务条款称 Browser Use 总部位于美国。仓库创建于 2024 年 10 月 31 日，最近一次推送是 2026 年 11 月 19 日；最新版本 1.0.6 发布于 2026 年 11 月 16 日，说明开发仍然活跃。README 建议从 0.x 版本升级的用户阅读迁移指南。',
            '该公司出售三类产品：开源库、Browser Use Cloud（带验证码破解的隐身浏览器和托管智能体 API）以及企业级部署。只有这个库是开源的。',
          ],
        },
        getIt: {
          id: 'get-it',
          title: '获取方式',
          content: [
            '**Browser Use 没有安装程序：通过托管 API、命令行工具或 Python 库使用，库需要 Python 3.11 或更高版本。**',
          ],
          columns: ['途径', '获取方式'],
          rows: [
            { '途径': '托管云端', '获取方式': '[Browser Use Cloud](https://cloud.browser-use.com)：API，$1免费额度' },
            { '途径': '命令行工具', '获取方式': '`uv tool install browser-use==1.0.6`' },
            { '途径': 'Python 库', '获取方式': '`uv add \'browser-use==1.0.6\'` 或 pip（Python 3.11+）' },
            { '途径': '官方网站', '获取方式': '[browser-use.com](https://browser-use.com)' },
            { '途径': '源代码', '获取方式': '[GitHub](https://github.com/browser-use/browser-use)（MIT）' },
            { '途径': '隐私政策', '获取方式': '[browser-use.com/privacy](https://browser-use.com/privacy)' },
          ],
          codeBlock: '# 命令行工具（uv）\nuv tool install browser-use==1.0.6\nbrowser-use skill install\n\n# Python 库（Python 3.11+）\nuv add \'browser-use==1.0.6\'\nexport BROWSER_USE_API_KEY=bu_...',
          codeLanguage: 'bash',
          note: '评测版本：1.0.6，据 GitHub Releases 发布于 2026 年 11 月 16 日，与 pyproject.toml 一致；项目最近一次更新（推送）为 2026 年 11 月 19 日。README 建议固定确切版本，因为版本更新很快，可能破坏现有用法。',
        },
        features: {
          id: 'features',
          title: '功能',
          content: [
            '**以下内容均为厂商在 README 或网站中的说法，PromptQuorum 没有测试其中任何一项。**',
          ],
          items: [
            '**会写 Python 的智能体。** 模型在 REPL 中通过原始的 Chrome DevTools Protocol 调用操作浏览器，最后给出结果。',
            '**多种浏览器模式。** Browser Use Cloud 浏览器（默认）、使用临时配置文件的全新本地 Chrome 或 Chromium、你自己已登录的 Chrome，或你某个 Chrome 配置文件的副本。',
            '**模型可选。** 默认是托管的 bu-4.0 系列，也有针对 OpenAI、Anthropic 和 Google 的内置类、任意 Pydantic AI 模型字符串，或 Ollama 等兼容 OpenAI 的服务器。',
            '**类型化结果、上传与下载。** 通过模式生成结构化输出，可向页面上传文件，下载的文件会集中到工作文件夹。',
            '**密钥与限制。** 按域名限定的密钥会在日志和结果中被屏蔽，另有允许和禁止的域名列表。README 说明这两者都不是沙箱。',
            '**自定义工具与网页搜索。** Python 函数可注册为智能体工具；可选的网页搜索按次向你的 Browser Use 密钥计费。',
            '**评判步骤。** 运行结束后，再向同一模型发起一次请求，根据运行轨迹以及（除非关闭）截图，对照任务评估结果。',
            '**验证码。** 云端浏览器会自动破解验证码；README 补充说，结果取决于网站，没有任何配置能保证成功。',
          ],
        },
        privacy: {
          id: 'privacy',
          title: '隐私与数据流向',
          content: [
            '**Browser Use 会把智能体看到的内容发送给模型，因此除非浏览器和模型都在本地，否则网页内容、截图和你的任务文本都会离开你的电脑。** 默认配置下，模型是厂商的托管网关，浏览器运行在 Browser Use Cloud；使用本地 Chromium 和 Ollama 模型时，两者都留在你的电脑上。',
            '隐私政策将 Browser Use, Inc. 列为责任主体，并把用户提供的输入和提示词列入所收集的数据；银行卡付款通过 Stripe 处理。README 补充说，启用遥测时会记录匿名遥测事件，评判步骤可能把截图发送给模型。',
            'README 给出两点提醒：云端浏览器的实时查看链接可让持有者控制该浏览器；而让智能体操作你自己已打开的 Chrome，会使其可以访问你已登录的网站。PromptQuorum 没有检查网络流量。',
          ],
          callouts: [
            { type: 'note', text: '以上是厂商的说法，不是审计结果。涉及工作或客户账户时，请先阅读隐私政策和条款，并使用单独的浏览器配置文件。自动化操作网站可能违反该网站的服务条款，因此在对某个网站运行智能体之前，请先查阅其条款，尤其是使用验证码破解或隐身功能时。' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: '价格与许可证',
          content: [
            '**该库免费；云端浏览器和托管智能体在小额度用完后按用量付费。**',
            '网站标明隐身浏览器每浏览器小时 $0.06，网页智能体每任务（中位数）$0.006，并称新账户可免费获得 $1起步额度，每人一次，永不过期。README 也提到通过 Google、GitHub 或 Microsoft 注册的新用户可获得同样的 $1额度。SOC 2、含 BAA 的 HIPAA、欧盟数据驻留和本地部署等企业条款通过销售团队提供。通过你自己的服务商使用模型，由该服务商计费。',
          ],
          columns: ['选项', '价格', '备注'],
          rows: [
            { '选项': '库', '价格': '免费', '备注': 'MIT 许可证，在你的电脑上运行' },
            { '选项': '云端浏览器', '价格': '$0.06/浏览器小时', '备注': '隐身、验证码破解' },
            { '选项': '网页智能体', '价格': '$0.006/任务（中位数）', '备注': '托管智能体 API' },
          ],
          note: '价格为厂商以美元标示的数字，查阅于 2026 年 11 月 19 日。任务价格被描述为中位数，因此单个任务的费用可能更高或更低。',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: '适合谁',
          items: [
            '希望让 AI 模型自动完成网页任务，并能接受一个较新、变化很快的库的 Python 开发者。',
            '已经在使用 Claude Code、Codex 或类似智能体，并想按 README 所述通过命令行工具为其提供浏览器访问能力的人。',
            '想尝试用本地 Ollama 模型驱动本地浏览器的团队，并接受此处没有测试过小型本地模型的效果。',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '局限与未能核实的内容',
          content: [
            '**如果网页内容不能发送给第三方模型，Browser Use 并不合适，而且许多细节仍未核实。**',
          ],
          items: [
            '不适合：不允许 AI 代你操作的账户，或点错一下就会损失金钱或数据的任务；README 本身也说其防护措施不是沙箱。',
            '不适合：想要双击安装程序的用户；资料中没有看到安装程序。',
            '未核实：任务成功率、速度和单次任务成本。README 中有基准测试图，PromptQuorum 没有复现。',
            '未核实：本地模型驱动浏览器的效果如何。README 展示了 Ollama 的配置，但没有给出质量数据。',
            '未核实：关于隐身、验证码破解和机器人检测的说法，这些取决于网站，属于厂商的主张。',
            '未核实：企业级安全声明和数据驻留选项，它们通过销售团队提供，未看到审计报告。',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: '替代品',
          content: [
            '**Browser Use 是专门针对浏览器的智能体；同一目录分类中的替代品是范围更广的电脑或编程智能体。** PromptQuorum 没有对它们做实际对比。',
          ],
          columns: ['工具', '来源中的说法'],
          rows: [
            { '工具': 'Browser Use', '来源中的说法': '仅限浏览器的智能体库和命令行工具；MIT；可选付费云端' },
            { '工具': '[Local Operator](/zh/power-local-llm/local-operator-review)', '来源中的说法': '在你电脑上运行代码的智能体桌面应用；MIT' },
            { '工具': '[Open Interpreter](/zh/power-local-llm/open-interpreter-review)', '来源中的说法': '让模型控制你的电脑并运行代码' },
            { '工具': '[Agent Zero](/zh/power-local-llm/agent-zero-review)', '来源中的说法': '在 Docker 中运行的自托管智能体，带网页界面' },
          ],
        },
        faq: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: 'Browser Use 免费吗？',
              a: 'Python 库采用 MIT 许可证，免费。Browser Use Cloud 和托管模型按用量计费，据网站称新账户有 $1免费额度；如果使用你自己的密钥，API 服务商另行收费。',
            },
            {
              q: 'Browser Use 能搭配本地模型运行吗？',
              a: '可以，据 README 的常见问题：使用本地 Chromium，并连接兼容 OpenAI 的本地端点，例如 localhost 端口 11434 上的 Ollama。PromptQuorum 没有试过，资料中也没有给出最低模型规模。',
            },
            {
              q: '它会使用我自己的 Chrome 和登录状态吗？',
              a: '可以：在 chrome://inspect 中一次性启用远程调试后，Chrome 模式会操控你已打开、已登录的 Chrome。也可以使用配置文件的临时副本。这会让智能体访问这些会话，因此执行有风险的任务时请使用单独的配置文件。',
            },
            {
              q: '我应该使用哪个版本？',
              a: '评测的版本是 2026 年 11 月 16 日发布的 1.0.6。README 建议固定确切版本而不是版本范围；1.0 系列重写了智能体，因此从 0.x 升级时请阅读迁移指南。',
            },
            {
              q: 'Browser Use 总部在哪里？',
              a: '服务条款称 Browser Use 总部位于美国，并适用加利福尼亚州法律。隐私政策将 Browser Use, Inc. 列为责任主体。',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '结论',
          content: [
            '**如果你想用 Python 控制一个操作真实浏览器的 AI 模型，并能接受默认配置会把网页内容发送给托管服务，Browser Use 值得一试。**',
            '它以 MIT 许可证开源，发布活跃（最近一次推送为 2026 年 11 月 19 日，1.0.6 版发布于 2026 年 11 月 16 日），并支持本地 Chrome 搭配本地 Ollama 模型。需要权衡的是：没有安装程序，版本更新很快且据 README 可能破坏现有用法，防护措施不是沙箱，云端默认配置需付费，关于成功率、隐身和安全的说法仅基于厂商自己的声明。PromptQuorum 没有测试过；建议先在一次性配置文件和低风险任务上试用。',
          ],
        },
        sources: {
          id: 'sources',
          title: '来源',
          items: [
            '[Browser Use 官方网站](https://browser-use.com) — 产品与价格，查阅于 2026 年 11 月 19 日。',
            '[GitHub 仓库](https://github.com/browser-use/browser-use) — 仓库信息与最近一次推送，查阅于 2026 年 11 月 19 日。',
            '[README](https://github.com/browser-use/browser-use#readme) — 安装方式、浏览器模式、模型和常见问题，查阅于 2026 年 11 月 19 日。',
            '[LICENSE](https://github.com/browser-use/browser-use/blob/main/LICENSE) — MIT 许可证，查阅于 2026 年 11 月 19 日。',
            '[1.0.6 版本发布页](https://github.com/browser-use/browser-use/releases/tag/1.0.6) — 最新版本，发布于 2026 年 11 月 16 日。',
            '[pyproject.toml](https://github.com/browser-use/browser-use/blob/main/pyproject.toml) — 版本号与 Python 3.11+ 要求，查阅于 2026 年 11 月 19 日。',
            '[隐私政策](https://browser-use.com/privacy) — 责任主体与所收集的数据，查阅于 2026 年 11 月 19 日。',
            '[服务条款](https://browser-use.com/legal/terms-of-service) — 总部位于美国、适用加利福尼亚州法律，查阅于 2026 年 11 月 19 日。',
            '[Localhosted 收录页面](https://localhosted.com/browser-use) — 带标签的目录收录页面，查阅于 2026 年 11 月 19 日；该页面尚未被所有者认领。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[Local Operator Review](/zh/power-local-llm/local-operator-review) — 在你电脑上运行代码的智能体桌面应用。',
            '[Open Interpreter Review](/zh/power-local-llm/open-interpreter-review) — 让模型控制你的电脑并运行代码的智能体。',
            '[Agent Zero Review](/zh/power-local-llm/agent-zero-review) — 在 Docker 中运行的自托管智能体。',
            '[本地 LLM 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
            '[Nanobrowser评测](/zh/power-local-llm/nanobrowser-review) — 适用于 Chrome 和 Edge 的免费开源扩展，其智能体在您自己的浏览器中点击和输入，可搭配云端模型或本地 Ollama、LM Studio 模型。',
          ],
        },
      },
    },
    ar: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-19',
      dateModified: '2026-11-19',
      next_refresh_due: '2027-05-19',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/browser-use-review-hero-ar.webp',
      title: 'مراجعة Browser Use: وكيل متصفح بالذكاء الاصطناعي مفتوح المصدر لـ Python',
      seoTitle: 'مراجعة Browser Use: وكيل متصفح مفتوح المصدر والأسعار',
      intro:
        'Browser Use مكتبة Python مفتوحة المصدر وأداة سطر أوامر من شركة Browser Use, Inc. تتيح لنموذج ذكاء اصطناعي تشغيل متصفح ويب حقيقي لإنجاز مهام مثل تعبئة النماذج أو جمع البيانات. وتبيع الشركة نفسها متصفحًا سحابيًا مدفوعًا وواجهة API لوكيل مستضاف. تستند هذه المراجعة إلى موقع الجهة المطوّرة ومستودعها على GitHub ونصوصها القانونية، وقد اطّلعنا عليها في 19 نوفمبر 2026؛ ولم تختبر PromptQuorum البرنامج.',
      metaDescription:
        'Browser Use مكتبة Python وأداة CLI برخصة MIT تتيح لنموذج ذكاء اصطناعي تشغيل متصفح. نماذج محلية أو مستضافة، أسعار السحابة، الخصوصية؛ دون اختبار.',
      twitterDescription:
        'مراجعة Browser Use: وكيل متصفح مفتوح المصدر لـ Python مع سحابة مدفوعة اختيارية. ماذا يفعل، وكيف يتعامل مع البيانات، وما لم نتمكن من التحقق منه.',
      audience:
        'مطوّرو Python وبُناة الوكلاء الذين يريدون أن يؤتمت نموذج ذكاء اصطناعي مهام الويب، والقرّاء الذين يوازنون بين مكتبة مجانية ومتصفح سحابي مدفوع',
      readTime: '6 دقائق للقراءة',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Browser Use',
      targetKeywords: [
        'مراجعة Browser Use',
        'Browser Use وكيل متصفح بالذكاء الاصطناعي',
        'أسعار Browser Use',
        'Browser Use Ollama',
        'Browser Use السحابة',
        'بدائل Browser Use',
      ],
      current_models_mentioned: ['Ollama'],
      leadAnswerBlock:
        '**Browser Use (الإصدار 1.0.6، صدر في 16 نوفمبر 2026) مكتبة Python وأداة سطر أوامر مجانية برخصة MIT، يشغّل فيها نموذج ذكاء اصطناعي متصفحًا حقيقيًا عبر كتابة شيفرة Python.** يستخدم الإعداد الافتراضي النموذج المستضاف لدى الجهة المطوّرة ومتصفحًا سحابيًا مدفوعًا، لكن يمكنك تشغيل Chrome محلي وربطه بنموذج Ollama محلي. كل ما ورد هنا مصدره موقع الجهة المطوّرة وملف README ونصوصها القانونية؛ ولم تختبره PromptQuorum.',
      quickAnswerTop: {
        ar: {
          question: 'هل Browser Use مجاني، وهل يعمل محليًا؟',
          answer:
            'المكتبة مجانية وبرخصة MIT ويمكنها تشغيل Chrome على جهازك. لكنها تستخدم افتراضيًا متصفحًا من Browser Use Cloud والنموذج المستضاف لدى الجهة المطوّرة، وكلاهما يُحاسَب بالاستخدام بعد رصيد قدره 1 دولار؛ وللإعداد المحلي بالكامل عليك اختيار متصفح محلي ونموذجك الخاص.',
          bullets: [
            'يتطلب Python 3.11 أو أحدث؛ وثلاثة طرق: واجهة API مستضافة أو CLI أو مكتبة Python.',
            'المتصفحات: Browser Use Cloud، أو Chromium محلي جديد، أو متصفح Chrome المفتوح لديك بحسابات تسجيل الدخول فيه.',
            'النماذج: bu-4.0 المستضاف افتراضيًا، أو OpenAI أو Anthropic أو Google، أو نموذج Ollama محلي عبر نقطة نهاية متوافقة مع OpenAI.',
            'يذكر README أن حدود النطاقات وإخفاء الأسرار ليست بيئة معزولة (sandbox).',
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
            { type: 'one-sentence', text: 'Browser Use مكتبة Python مفتوحة المصدر مع أداة CLI تتيح لنموذج ذكاء اصطناعي التحكم في متصفح حقيقي عبر كتابة Python وتشغيلها، مع متصفح سحابي مدفوع ووكيل مستضاف اختياريين من الشركة نفسها.' },
            { type: 'plain-terms', text: 'تعطي الوكيل مهمة بلغة عادية، فيفتح متصفحًا وينقر ويكتب عبر بروتوكول التصحيح في Chrome ثم يعيد نتيجة. يقرأ النموذج الصفحات، لذلك ينتقل محتوى الصفحات إلى النموذج الذي تضبطه.' },
          ],
          items: [
            'الصيانة: آخر دفع (push) إلى المستودع كان في 19 نوفمبر 2026 وأحدث إصدار 1.0.6 صدر في 16 نوفمبر 2026، لذلك لا ينطبق تحذير المشروع المهمل.',
            'الرخصة: MIT للمكتبة؛ أما Browser Use Cloud ونماذجه المستضافة فخدمات مدفوعة منفصلة.',
            'التكلفة: يذكر الموقع 0.06 دولار لكل ساعة متصفح للمتصفحات الخفية و0.006 دولار لكل مهمة (الوسيط) لوكلاء الويب؛ وتحصل الحسابات الجديدة على رصيد مجاني قدره 1 دولار.',
            'الخيار المحلي: يعرض README متصفح Chromium محليًا مع نموذج Ollama عبر نقطة نهاية متوافقة مع OpenAI.',
            'وتيرة الإصدارات: يقول README إن الإصدارات تتوالى بسرعة وقد تكسر أشياء، وينصح بتثبيت إصدار محدد.',
          ],
          callouts: [
            { type: 'note', text: 'تستند هذه المراجعة إلى موقع الجهة المطوّرة ومستودع GitHub وملف README والنصوص القانونية، وقد اطّلعنا عليها في 19 نوفمبر 2026. لم تثبّت PromptQuorum أداة Browser Use ولم تشغّلها، لذلك لم تُقيَّم معدلات النجاح والسرعة والتكلفة لكل مهمة. قد ينفّذ الوكيل الذي ينقر ويسجّل الدخول نيابةً عنك إجراءات لم تقصدها. هذه معلومات عامة وليست نصيحة أمنية.' },
          ],
        },
        overview: {
          id: 'overview',
          title: 'نظرة عامة',
          content: [
            '**Browser Use وكيل متصفح بالذكاء الاصطناعي من Browser Use, Inc.: تصف مهمة فينجزها نموذج في متصفح حقيقي.** وفق README، يكتب النموذج Python داخل REPL دائم واحد باستخدام مساعدات browser-harness وبروتوكول Chrome DevTools، وتعمل المكتبة فوق Pydantic AI منذ الإصدار 1.0.',
            'تذكر شروط الخدمة أن مقر Browser Use في الولايات المتحدة. أُنشئ المستودع في 31 أكتوبر 2024 وكان آخر دفع إليه في 19 نوفمبر 2026؛ وأحدث إصدار 1.0.6 صدر في 16 نوفمبر 2026، فالتطوير نشط. ويطلب README ممن ينتقلون من إصدارات 0.x قراءة دليل الترحيل.',
            'تبيع الشركة ثلاثة أشياء: المكتبة مفتوحة المصدر، وBrowser Use Cloud (متصفحات خفية مع حل CAPTCHA وواجهة API لوكيل مستضاف)، ونشرات للمؤسسات. المكتبة وحدها مفتوحة المصدر.',
          ],
        },
        getIt: {
          id: 'get-it',
          title: 'كيفية الحصول عليه',
          content: [
            '**لا يوجد مثبّت لـ Browser Use: يُستخدم عبر واجهة API مستضافة أو CLI أو مكتبة Python، وتتطلب المكتبة Python 3.11 أو أحدث.**',
          ],
          columns: ['الطريق', 'كيفية الحصول عليه'],
          rows: [
            { 'الطريق': 'السحابة المستضافة', 'كيفية الحصول عليه': '[Browser Use Cloud](https://cloud.browser-use.com): API، رصيد مجاني 1 دولار' },
            { 'الطريق': 'CLI', 'كيفية الحصول عليه': '`uv tool install browser-use==1.0.6`' },
            { 'الطريق': 'مكتبة Python', 'كيفية الحصول عليه': '`uv add \'browser-use==1.0.6\'` أو pip (Python 3.11+)' },
            { 'الطريق': 'الموقع', 'كيفية الحصول عليه': '[browser-use.com](https://browser-use.com)' },
            { 'الطريق': 'الشيفرة المصدرية', 'كيفية الحصول عليه': '[GitHub](https://github.com/browser-use/browser-use) (MIT)' },
            { 'الطريق': 'سياسة الخصوصية', 'كيفية الحصول عليه': '[browser-use.com/privacy](https://browser-use.com/privacy)' },
          ],
          codeBlock: '# CLI (uv)\nuv tool install browser-use==1.0.6\nbrowser-use skill install\n\n# مكتبة Python (Python 3.11+)\nuv add \'browser-use==1.0.6\'\nexport BROWSER_USE_API_KEY=bu_...',
          codeLanguage: 'bash',
          note: 'الإصدار الذي راجعناه: 1.0.6، صدر في 16 نوفمبر 2026 وفق GitHub Releases ويطابق pyproject.toml؛ وآخر تحديث للمشروع (دفع) كان في 19 نوفمبر 2026. ينصح README بتثبيت إصدار محدد لأن الإصدارات تتوالى بسرعة وقد تكسر أشياء.',
        },
        features: {
          id: 'features',
          title: 'الميزات',
          content: [
            '**كل ما يلي أقوال للجهة المطوّرة مأخوذة من README أو الموقع؛ ولم تختبر PromptQuorum أيًّا منها.**',
          ],
          items: [
            '**وكيل يكتب Python.** يعمل النموذج داخل REPL على المتصفح عبر استدعاءات مباشرة لبروتوكول Chrome DevTools وينتهي بنتيجة.',
            '**عدة أوضاع للمتصفح.** متصفح Browser Use Cloud (الافتراضي)، أو Chrome أو Chromium محلي جديد بملف تعريف مؤقت، أو متصفح Chrome المفتوح لديك بحسابات تسجيل الدخول فيه، أو نسخة من أحد ملفات تعريف Chrome لديك.',
            '**اختيار النموذج.** عائلة bu-4.0 المستضافة افتراضيًا، وفئات مدمجة لـ OpenAI وAnthropic وGoogle، وأي سلسلة نموذج في Pydantic AI، أو خادم متوافق مع OpenAI مثل Ollama.',
            '**نتائج مُنمَّطة ورفع وتنزيل.** مخرجات منظمة عبر مخطط، ورفع ملفات إلى الصفحات، وتجميع الملفات المنزَّلة في مجلد عمل.',
            '**الأسرار والحدود.** أسرار مقيّدة بنطاق ومخفية في السجلات والنتائج، إضافةً إلى قوائم النطاقات المسموحة والمحظورة. يوضح README أن أيًّا منهما ليس بيئة معزولة.',
            '**أدوات مخصصة وبحث ويب.** يمكن تسجيل دوال Python كأدوات للوكيل؛ ويُحاسَب بحث الويب الاختياري على كل عملية بحث من مفتاح Browser Use الخاص بك.',
            '**خطوة التقييم.** بعد التشغيل، يقيّم طلب إضافي إلى النموذج نفسه النتيجة مقابل المهمة، اعتمادًا على سجل التنفيذ ولقطات الشاشة ما لم تُعطَّل.',
            '**CAPTCHA.** تحل المتصفحات السحابية اختبارات CAPTCHA تلقائيًا؛ ويضيف README أن النتائج تعتمد على الموقع وأنه لا يوجد إعداد يضمن النجاح.',
          ],
        },
        privacy: {
          id: 'privacy',
          title: 'الخصوصية ومسار البيانات',
          content: [
            '**يرسل Browser Use ما يراه الوكيل إلى نموذج، لذلك يغادر جهازك محتوى الصفحات ولقطات الشاشة ونص مهمتك ما لم يكن المتصفح والنموذج محليين معًا.** في الإعداد الافتراضي يكون النموذج هو البوابة المستضافة لدى الجهة المطوّرة ويعمل المتصفح في Browser Use Cloud؛ ومع Chromium محلي ونموذج Ollama يبقى كلاهما على جهازك.',
            'تسمّي سياسة الخصوصية Browser Use, Inc. بوصفها الجهة المسؤولة وتدرج المدخلات والأوامر التي يقدمها المستخدم ضمن البيانات التي تجمعها؛ وتمر مدفوعات البطاقات عبر Stripe. ويضيف README أنه تُسجَّل أحداث قياس عن بُعد مجهولة عند تفعيل القياس، وأن خطوة التقييم قد ترسل لقطات شاشة إلى النموذج.',
            'يورد README تحذيرين: رابط العرض المباشر لمتصفح سحابي يتيح لأي شخص يملكه التحكم في ذلك المتصفح، وتشغيل متصفح Chrome المفتوح لديك يمنح الوكيل وصولًا إلى المواقع التي سجّلت الدخول إليها. لم تفحص PromptQuorum حركة الشبكة.',
          ],
          callouts: [
            { type: 'note', text: 'هذه أقوال الجهة المطوّرة وليست نتائج تدقيق. بالنسبة لحسابات العمل أو العملاء، اقرأ سياسة الخصوصية والشروط أولًا واستخدم ملف تعريف متصفح منفصلًا. قد تخالف أتمتة موقع ويب شروط الخدمة الخاصة به، لذا راجعها قبل تشغيل وكيل على أي موقع، خاصة عند استخدام حل CAPTCHA أو ميزات التخفّي.' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: 'الأسعار والرخصة',
          content: [
            '**المكتبة مجانية؛ أما المتصفح السحابي والوكيل المستضاف فيُدفع مقابلهما بحسب الاستخدام بعد رصيد صغير.**',
            'يذكر الموقع 0.06 دولار لكل ساعة متصفح للمتصفحات الخفية و0.006 دولار لكل مهمة (الوسيط) لوكلاء الويب، ويقول إن الحسابات الجديدة تبدأ برصيد مجاني قدره 1 دولار، لكل شخص مرة واحدة ودون انتهاء صلاحية. ويذكر README الرصيد نفسه (1 دولار) للمسجّلين الجدد عبر Google أو GitHub أو Microsoft. وتُعرض شروط المؤسسات مثل SOC 2 وHIPAA مع BAA وإقامة البيانات في الاتحاد الأوروبي والنشر المحلي عبر فريق المبيعات. أما استخدام النماذج عبر مزوّدك الخاص فيحاسبك عليه ذلك المزوّد.',
          ],
          columns: ['الخيار', 'السعر', 'ملاحظات'],
          rows: [
            { 'الخيار': 'المكتبة', 'السعر': 'مجانية', 'ملاحظات': 'رخصة MIT، تعمل على جهازك' },
            { 'الخيار': 'المتصفحات السحابية', 'السعر': '0.06 $/ساعة متصفح', 'ملاحظات': 'خفية، حل CAPTCHA' },
            { 'الخيار': 'وكلاء الويب', 'السعر': '0.006 $/مهمة (الوسيط)', 'ملاحظات': 'واجهة API لوكيل مستضاف' },
          ],
          note: 'الأسعار أرقام الجهة المطوّرة بالدولار الأمريكي، اطّلعنا عليها في 19 نوفمبر 2026. يوصف سعر المهمة بأنه وسيط، لذلك قد تكلّف المهام الفردية أكثر أو أقل.',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: 'لمن يناسب',
          items: [
            'مطوّرو Python الذين يريدون أن يؤتمت نموذج ذكاء اصطناعي مهام الويب ويقبلون مكتبة حديثة سريعة التغيّر.',
            'من يشغّلون بالفعل Claude Code أو Codex أو وكيلًا مشابهًا ويريدون منحه وصولًا إلى المتصفح عبر CLI كما يصف README.',
            'الفرق التي تريد تجربة نموذج Ollama محلي يشغّل متصفحًا محليًا، مع قبول أن الجودة مع النماذج المحلية الصغيرة لم تُختبر هنا.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: 'الحدود وما لم نتمكن من التحقق منه',
          content: [
            '**لا يناسب Browser Use إذا كان محتوى الصفحات يجب ألا يصل إلى نموذج تابع لطرف ثالث، ولا تزال تفاصيل كثيرة غير متحقَّق منها.**',
          ],
          items: [
            'لا يناسب: المهام على حسابات لا يُسمح فيها بأن يتصرف ذكاء اصطناعي نيابةً عنك، أو التي تكلّف فيها نقرة خاطئة مالًا أو بيانات؛ فـ README نفسه يقول إن ضماناته ليست بيئة معزولة.',
            'لا يناسب: من يريد مثبّتًا بنقرتين؛ فالمصادر لا تُظهر أيًّا منها.',
            'غير متحقَّق منه: معدلات نجاح المهام وسرعتها وتكلفتها. يعرض README رسمًا بيانيًا لاختبار أداء لم تعد PromptQuorum إنتاجه.',
            'غير متحقَّق منه: مدى جودة تشغيل النماذج المحلية للمتصفح. يعرض README إعداد Ollama لكنه لا يقدّم أرقام جودة.',
            'غير متحقَّق منه: ادعاءات التخفّي وحل CAPTCHA واكتشاف الروبوتات، وهي تعتمد على الموقع وتمثّل أقوال الجهة المطوّرة.',
            'غير متحقَّق منه: تصريحات الأمان للمؤسسات وخيارات إقامة البيانات، وهي تُعرض عبر فريق المبيعات؛ ولم نطّلع على تقرير تدقيق.',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: 'البدائل',
          content: [
            '**Browser Use وكيل متخصص بالمتصفح؛ أما البدائل في الفئة نفسها بالدليل فهي وكلاء أوسع للحاسوب أو للبرمجة.** لم تقارنها PromptQuorum عمليًا.',
          ],
          columns: ['الأداة', 'المذكور في المصادر'],
          rows: [
            { 'الأداة': 'Browser Use', 'المذكور في المصادر': 'مكتبة وكيل للمتصفح فقط مع CLI؛ MIT؛ سحابة مدفوعة اختيارية' },
            { 'الأداة': '[Local Operator](/ar/power-local-llm/local-operator-review)', 'المذكور في المصادر': 'تطبيق سطح مكتب لوكلاء ينفّذون الشيفرة على جهازك؛ MIT' },
            { 'الأداة': '[Open Interpreter](/ar/power-local-llm/open-interpreter-review)', 'المذكور في المصادر': 'يتيح لنموذج التحكم في حاسوبك وتنفيذ الشيفرة' },
            { 'الأداة': '[Agent Zero](/ar/power-local-llm/agent-zero-review)', 'المذكور في المصادر': 'وكيل مستضاف ذاتيًا في Docker مع واجهة ويب' },
          ],
        },
        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            {
              q: 'هل Browser Use مجاني؟',
              a: 'مكتبة Python مجانية برخصة MIT. أما Browser Use Cloud والنماذج المستضافة فتُحاسَب بالاستخدام، مع رصيد مجاني قدره 1 دولار للحسابات الجديدة وفق الموقع، ويحاسبك مزوّدو API بشكل منفصل إذا استخدمت مفاتيحك الخاصة.',
            },
            {
              q: 'هل يعمل Browser Use مع نموذج محلي؟',
              a: 'نعم، وفق الأسئلة الشائعة في README: باستخدام Chromium محلي ونقطة نهاية محلية متوافقة مع OpenAI مثل Ollama على localhost والمنفذ 11434. لم تجرّبه PromptQuorum ولا تذكر المصادر حدًا أدنى لحجم النموذج.',
            },
            {
              q: 'هل يستخدم متصفح Chrome الخاص بي وحسابات تسجيل الدخول؟',
              a: 'يمكنه ذلك: يشغّل وضع Chrome المتصفح المفتوح لديك بحساباته بعد تفعيل التصحيح عن بُعد مرة واحدة في chrome://inspect. ومن الممكن أيضًا استخدام نسخة مؤقتة من ملف تعريف. يمنح ذلك الوكيل وصولًا إلى تلك الجلسات، لذا استخدم ملف تعريف منفصلًا للمهام الخطرة.',
            },
            {
              q: 'أي إصدار أستخدم؟',
              a: 'الإصدار الذي راجعناه هو 1.0.6 الصادر في 16 نوفمبر 2026. ينصح README بتثبيت إصدار محدد بدل نطاق إصدارات، وقد أعاد خط 1.0 كتابة الوكيل، لذا اقرأ دليل الترحيل إذا كنت قادمًا من 0.x.',
            },
            {
              q: 'أين مقر Browser Use؟',
              a: 'تذكر شروط الخدمة أن مقر Browser Use في الولايات المتحدة وأنها تخضع لقانون ولاية كاليفورنيا. وتسمّي سياسة الخصوصية Browser Use, Inc. بوصفها الجهة المسؤولة.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: 'الخلاصة',
          content: [
            '**يستحق Browser Use التقييم إذا أردت التحكم برمجيًا من Python في نموذج ذكاء اصطناعي يشغّل متصفحًا حقيقيًا، وقبلت أن الإعداد الافتراضي يرسل محتوى الصفحات إلى خدمات مستضافة.**',
            'هو مفتوح المصدر برخصة MIT، وإصداراته نشطة (آخر دفع في 19 نوفمبر 2026 والإصدار 1.0.6 في 16 نوفمبر 2026)، ويدعم Chrome محليًا مع نموذج Ollama محلي. أما المقايضات فهي: لا يوجد مثبّت، وإصدارات سريعة قد تكسر أشياء بحسب README، وضمانات ليست بيئة معزولة، وإعدادات سحابية افتراضية مدفوعة، وادعاءات عن معدلات النجاح والتخفّي والأمان تستند إلى أقوال الجهة المطوّرة وحدها. لم تختبره PromptQuorum؛ جرّبه أولًا على ملف تعريف مؤقت ومهمة منخفضة المخاطر.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            '[موقع Browser Use](https://browser-use.com) — المنتجات والأسعار، اطّلعنا عليه في 19 نوفمبر 2026.',
            '[مستودع GitHub](https://github.com/browser-use/browser-use) — بيانات المستودع وآخر دفع، اطّلعنا عليه في 19 نوفمبر 2026.',
            '[README](https://github.com/browser-use/browser-use#readme) — طرق التثبيت وأوضاع المتصفح والنماذج والأسئلة الشائعة، اطّلعنا عليه في 19 نوفمبر 2026.',
            '[LICENSE](https://github.com/browser-use/browser-use/blob/main/LICENSE) — رخصة MIT، اطّلعنا عليها في 19 نوفمبر 2026.',
            '[الإصدار 1.0.6](https://github.com/browser-use/browser-use/releases/tag/1.0.6) — أحدث إصدار، صدر في 16 نوفمبر 2026.',
            '[pyproject.toml](https://github.com/browser-use/browser-use/blob/main/pyproject.toml) — الإصدار ومتطلب Python 3.11+، اطّلعنا عليه في 19 نوفمبر 2026.',
            '[سياسة الخصوصية](https://browser-use.com/privacy) — الجهة المسؤولة والبيانات المجموعة، اطّلعنا عليها في 19 نوفمبر 2026.',
            '[شروط الخدمة](https://browser-use.com/legal/terms-of-service) — المقر في الولايات المتحدة وقانون كاليفورنيا، اطّلعنا عليها في 19 نوفمبر 2026.',
            '[صفحة Localhosted](https://localhosted.com/browser-use) — صفحة دليل مع وسوم، اطّلعنا عليها في 19 نوفمبر 2026؛ ولم يطالب مالكها بالصفحة.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[Local Operator Review](/ar/power-local-llm/local-operator-review) — تطبيق سطح مكتب لوكلاء ينفّذون الشيفرة على جهازك.',
            '[Open Interpreter Review](/ar/power-local-llm/open-interpreter-review) — وكيل يتيح لنموذج التحكم في حاسوبك وتنفيذ الشيفرة.',
            '[Agent Zero Review](/ar/power-local-llm/agent-zero-review) — وكيل مستضاف ذاتيًا يعمل في Docker.',
            '[دليل برامج LLM المحلية](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلية.',
            '[مراجعة Nanobrowser](/ar/power-local-llm/nanobrowser-review) — إضافة مجانية ومفتوحة المصدر لمتصفحي Chrome وEdge يقوم وكيلها بالنقر والكتابة في متصفحك أنت، بنموذج سحابي أو نموذج Ollama أو LM Studio محلي.',
          ],
        },
      },
    },
    ko: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      publishDate: '2026-11-19',
      dateModified: '2026-11-19',
      next_refresh_due: '2027-05-19',
      theme: 'Local AI Agents & Tool Use',
      heroImage: '/images/browser-use-review-hero-ko.webp',
      title: 'Browser Use 리뷰: Python용 오픈소스 AI 브라우저 에이전트',
      seoTitle: 'Browser Use 리뷰: 오픈소스 브라우저 에이전트와 가격',
      intro:
        'Browser Use는 Browser Use, Inc.가 만든 오픈소스 Python 라이브러리이자 명령줄 도구로, AI 모델이 실제 웹 브라우저를 조작해 양식 작성이나 데이터 수집 같은 작업을 수행하게 합니다. 같은 회사가 유료 클라우드 브라우저와 호스팅 에이전트 API도 판매합니다. 이 리뷰는 2026년 11월 19일에 확인한 제작사 웹사이트, GitHub 저장소, 법적 문서를 바탕으로 하며, PromptQuorum은 이 소프트웨어를 테스트하지 않았습니다.',
      metaDescription:
        'Browser Use는 AI 모델이 브라우저를 조작하게 하는 MIT 라이선스 Python 라이브러리이자 CLI입니다. 로컬·호스팅 모델, 클라우드 요금, 개인정보. 미검증.',
      twitterDescription:
        'Browser Use 리뷰: 유료 클라우드를 선택할 수 있는 Python용 오픈소스 AI 브라우저 에이전트. 기능, 데이터 처리 방식, 확인하지 못한 내용.',
      audience:
        'AI 모델로 웹 작업을 자동화하려는 Python 개발자와 에이전트 개발자, 무료 라이브러리와 유료 클라우드 브라우저를 비교하는 독자',
      readTime: '6분 읽기',
      educationalLevel: 'Intermediate',
      affiliateDisclosure: false,
      primaryTerm: 'Browser Use',
      targetKeywords: [
        'Browser Use 리뷰',
        'Browser Use AI 브라우저 에이전트',
        'Browser Use 가격',
        'Browser Use Ollama',
        'Browser Use 클라우드',
        'Browser Use 대안',
      ],
      current_models_mentioned: ['Ollama'],
      leadAnswerBlock:
        '**Browser Use(버전 1.0.6, 2026년 11월 16일 공개)는 AI 모델이 Python 코드를 작성해 실제 브라우저를 조작하는, MIT 라이선스의 무료 Python 라이브러리이자 명령줄 도구입니다.** 기본 설정은 제작사의 호스팅 모델과 유료 클라우드 브라우저를 사용하지만, 로컬 Chrome을 실행하고 로컬 Ollama 모델을 연결할 수도 있습니다. 여기에 적은 내용은 모두 제작사의 웹사이트, README, 법적 문서에서 가져온 것이며 PromptQuorum은 테스트하지 않았습니다.',
      quickAnswerTop: {
        ko: {
          question: 'Browser Use는 무료이며 로컬에서 실행되나요?',
          answer:
            '라이브러리는 무료 MIT 라이선스이며 사용자 컴퓨터의 Chrome을 조작할 수 있습니다. 다만 기본값은 Browser Use Cloud 브라우저와 제작사의 호스팅 모델이며, 둘 다 1달러 크레딧 이후 사용량에 따라 과금됩니다. 로컬 전용으로 쓰려면 로컬 브라우저와 직접 고른 모델을 선택해야 합니다.',
          bullets: [
            'Python 3.11 이상이 필요하며, 호스팅 API, CLI, Python 라이브러리의 세 가지 방식이 있습니다.',
            '브라우저: Browser Use Cloud, 새 로컬 Chromium, 또는 로그인 상태가 유지된 사용자의 Chrome입니다.',
            '모델: 기본은 호스팅 bu-4.0이며, OpenAI, Anthropic, Google 또는 OpenAI 호환 엔드포인트를 통한 로컬 Ollama 모델도 사용할 수 있습니다.',
            'README는 도메인 제한과 시크릿 마스킹이 샌드박스가 아니라고 밝힙니다.',
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
            { type: 'one-sentence', text: 'Browser Use는 AI 모델이 Python을 작성하고 실행하며 실제 브라우저를 조작하게 하는, CLI가 포함된 오픈소스 Python 라이브러리이며, 같은 회사의 유료 클라우드 브라우저와 호스팅 에이전트도 선택할 수 있습니다.' },
            { type: 'plain-terms', text: '에이전트에게 자연어로 작업을 주면 브라우저를 열고, Chrome 디버깅 프로토콜로 클릭과 입력을 수행한 뒤 결과를 돌려줍니다. 모델이 페이지를 읽으므로 페이지 내용은 사용자가 설정한 모델로 전송됩니다.' },
          ],
          items: [
            '유지보수: 저장소는 2026년 11월 19일에 마지막으로 푸시되었고 최신 릴리스 1.0.6은 2026년 11월 16일에 공개되어, 방치 프로젝트 경고는 해당하지 않습니다.',
            '라이선스: 라이브러리는 MIT이며, Browser Use Cloud와 호스팅 모델은 별도의 유료 서비스입니다.',
            '비용: 웹사이트에는 스텔스 브라우저가 브라우저 1시간당 0.06달러, 웹 에이전트가 작업당 0.006달러(중앙값)로 표시되어 있으며, 신규 계정에는 1달러 무료 크레딧이 제공됩니다.',
            '로컬 옵션: README는 로컬 Chromium과 OpenAI 호환 엔드포인트를 통한 Ollama 모델 예시를 보여 줍니다.',
            '릴리스 속도: README는 릴리스가 빠르고 기존 동작이 깨질 수 있다고 하며, 정확한 버전을 고정하라고 권장합니다.',
          ],
          callouts: [
            { type: 'note', text: '이 리뷰는 2026년 11월 19일에 확인한 제작사 웹사이트, GitHub 저장소, README, 법적 문서를 바탕으로 합니다. PromptQuorum은 Browser Use를 설치하거나 실행하지 않았으므로 성공률, 속도, 작업당 비용은 평가하지 않았습니다. 사용자를 대신해 클릭하고 로그인하는 에이전트는 의도하지 않은 동작을 할 수 있습니다. 이는 일반 정보이며 보안 조언이 아닙니다.' },
          ],
        },
        overview: {
          id: 'overview',
          title: '개요',
          content: [
            '**Browser Use는 Browser Use, Inc.의 AI 브라우저 에이전트로, 작업을 설명하면 모델이 실제 브라우저에서 이를 완료합니다.** README에 따르면 모델은 하나의 지속형 REPL에서 browser-harness 헬퍼와 Chrome DevTools Protocol을 사용해 Python을 작성하며, 버전 1.0부터 라이브러리는 Pydantic AI 위에서 동작합니다.',
            '서비스 약관에는 Browser Use의 본사가 미국에 있다고 적혀 있습니다. 저장소는 2024년 10월 31일에 만들어졌고 2026년 11월 19일에 마지막으로 푸시되었으며, 최신 릴리스 1.0.6은 2026년 11월 16일에 공개되어 개발이 활발합니다. README는 0.x 버전에서 옮겨 오는 사용자에게 마이그레이션 가이드를 읽도록 안내합니다.',
            '이 회사는 오픈소스 라이브러리, Browser Use Cloud(CAPTCHA 해결 기능이 있는 스텔스 브라우저와 호스팅 에이전트 API), 기업용 배포의 세 가지를 판매합니다. 오픈소스는 라이브러리뿐입니다.',
          ],
        },
        getIt: {
          id: 'get-it',
          title: '설치 방법',
          content: [
            '**Browser Use에는 설치 프로그램이 없습니다. 호스팅 API, CLI, Python 라이브러리 중 하나로 사용하며, 라이브러리에는 Python 3.11 이상이 필요합니다.**',
          ],
          columns: ['경로', '설치 방법'],
          rows: [
            { '경로': '호스팅 클라우드', '설치 방법': '[Browser Use Cloud](https://cloud.browser-use.com): API, 1달러 무료 크레딧' },
            { '경로': 'CLI', '설치 방법': '`uv tool install browser-use==1.0.6`' },
            { '경로': 'Python 라이브러리', '설치 방법': '`uv add \'browser-use==1.0.6\'` 또는 pip(Python 3.11 이상)' },
            { '경로': '웹사이트', '설치 방법': '[browser-use.com](https://browser-use.com)' },
            { '경로': '소스 코드', '설치 방법': '[GitHub](https://github.com/browser-use/browser-use)(MIT)' },
            { '경로': '개인정보 처리방침', '설치 방법': '[browser-use.com/privacy](https://browser-use.com/privacy)' },
          ],
          codeBlock: '# CLI (uv)\nuv tool install browser-use==1.0.6\nbrowser-use skill install\n\n# Python 라이브러리 (Python 3.11 이상)\nuv add \'browser-use==1.0.6\'\nexport BROWSER_USE_API_KEY=bu_...',
          codeLanguage: 'bash',
          note: '확인한 버전: 1.0.6. GitHub Releases 기준 2026년 11월 16일에 공개되었고 pyproject.toml과 일치합니다. 프로젝트의 마지막 업데이트(푸시)는 2026년 11월 19일입니다. README는 릴리스가 빠르고 기존 동작이 깨질 수 있으므로 정확한 버전을 고정하라고 권장합니다.',
        },
        features: {
          id: 'features',
          title: '기능',
          content: [
            '**아래는 모두 README 또는 웹사이트에 있는 제작사의 설명이며, PromptQuorum은 어느 것도 테스트하지 않았습니다.**',
          ],
          items: [
            '**Python을 작성하는 에이전트.** 모델은 REPL 안에서 원시 Chrome DevTools Protocol 호출로 브라우저를 다루고 결과를 내며 종료합니다.',
            '**여러 가지 브라우저 모드.** Browser Use Cloud 브라우저(기본값), 임시 프로필을 쓰는 새 로컬 Chrome 또는 Chromium, 로그인 상태가 유지된 사용자의 Chrome, 또는 사용자 Chrome 프로필의 사본입니다.',
            '**모델 선택.** 기본은 호스팅 bu-4.0 계열이며, OpenAI, Anthropic, Google용 내장 클래스, 임의의 Pydantic AI 모델 문자열, Ollama 같은 OpenAI 호환 서버도 사용할 수 있습니다.',
            '**타입이 지정된 결과, 업로드, 다운로드.** 스키마를 통한 구조화된 출력, 페이지로의 파일 업로드, 작업 폴더에 모이는 다운로드 파일을 지원합니다.',
            '**시크릿과 제한.** 도메인 단위로 지정한 시크릿은 로그와 결과에서 마스킹되며, 허용·금지 도메인 목록도 있습니다. README는 둘 다 샌드박스가 아니라고 밝힙니다.',
            '**사용자 지정 도구와 웹 검색.** Python 함수를 에이전트 도구로 등록할 수 있으며, 선택형 웹 검색은 검색마다 Browser Use 키로 과금됩니다.',
            '**판정 단계.** 실행 후 같은 모델에 한 번 더 요청해, 실행 기록과(비활성화하지 않는 한) 스크린샷을 바탕으로 작업 대비 결과를 평가합니다.',
            '**CAPTCHA.** 클라우드 브라우저는 CAPTCHA를 자동으로 해결합니다. README는 결과가 사이트에 따라 다르며 성공을 보장하는 설정은 없다고 덧붙입니다.',
          ],
        },
        privacy: {
          id: 'privacy',
          title: '개인정보와 데이터 흐름',
          content: [
            '**Browser Use는 에이전트가 본 내용을 모델로 보내므로, 브라우저와 모델이 모두 로컬이 아닌 한 페이지 내용, 스크린샷, 작업 텍스트가 사용자 컴퓨터 밖으로 나갑니다.** 기본 설정에서는 모델이 제작사의 호스팅 게이트웨이이고 브라우저는 Browser Use Cloud에서 실행됩니다. 로컬 Chromium과 Ollama 모델을 쓰면 둘 다 사용자 컴퓨터에 남습니다.',
            '개인정보 처리방침은 Browser Use, Inc.를 책임 주체로 밝히고, 사용자가 제공한 입력과 프롬프트를 수집 데이터에 포함합니다. 카드 결제는 Stripe를 통해 처리됩니다. README에 따르면 텔레메트리를 켜면 익명 텔레메트리 이벤트가 기록되고, 판정 단계에서 스크린샷이 모델로 전송될 수 있습니다.',
            'README에는 두 가지 주의 사항이 있습니다. 클라우드 브라우저의 라이브 뷰 링크를 가진 사람은 누구나 그 브라우저를 제어할 수 있고, 사용자의 Chrome을 조작하게 하면 에이전트가 로그인된 사이트에 접근할 수 있습니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았습니다.',
          ],
          callouts: [
            { type: 'note', text: '이는 제작사의 설명이며 감사 결과가 아닙니다. 업무용이나 고객 계정에서는 먼저 개인정보 처리방침과 약관을 읽고 별도의 브라우저 프로필을 사용하십시오. 웹사이트를 자동화하면 해당 사이트의 이용 약관을 위반할 수 있으므로, 특히 CAPTCHA 해결이나 스텔스 기능을 사용할 때는 에이전트를 실행하기 전에 약관을 확인하십시오.' },
          ],
        },
        pricing: {
          id: 'pricing',
          title: '요금과 라이선스',
          content: [
            '**라이브러리는 무료이며, 클라우드 브라우저와 호스팅 에이전트는 적은 크레딧 이후 사용량에 따라 과금됩니다.**',
            '웹사이트에는 스텔스 브라우저가 브라우저 1시간당 0.06달러, 웹 에이전트가 작업당 0.006달러(중앙값)로 표시되어 있으며, 신규 계정은 1인 1회, 만료 없이 1달러를 무료로 시작할 수 있다고 합니다. README도 Google, GitHub, Microsoft로 새로 가입하는 경우 같은 1달러 크레딧을 언급합니다. SOC 2, BAA가 포함된 HIPAA, EU 데이터 레지던시, 온프레미스 배포 같은 기업용 조건은 영업팀을 통해 제공됩니다. 사용자의 자체 제공업체를 통한 모델 사용은 그 제공업체가 과금합니다.',
          ],
          columns: ['옵션', '가격', '비고'],
          rows: [
            { '옵션': '라이브러리', '가격': '무료', '비고': 'MIT 라이선스, 내 컴퓨터에서 실행' },
            { '옵션': '클라우드 브라우저', '가격': '0.06달러/브라우저 시간', '비고': '스텔스, CAPTCHA 해결' },
            { '옵션': '웹 에이전트', '가격': '0.006달러/작업(중앙값)', '비고': '호스팅 에이전트 API' },
          ],
          note: '가격은 2026년 11월 19일에 확인한 제작사의 미국 달러 기준 수치입니다. 작업당 가격은 중앙값으로 설명되므로 개별 작업은 더 많거나 적게 들 수 있습니다.',
        },
        whoShouldUse: {
          id: 'who-should-use',
          title: '적합한 사용자',
          items: [
            'AI 모델로 웹 작업을 자동화하고 싶고, 비교적 새롭고 변화가 빠른 라이브러리를 받아들일 수 있는 Python 개발자.',
            '이미 Claude Code, Codex 또는 비슷한 에이전트를 사용하고 있으며, README의 설명처럼 CLI로 브라우저 접근 권한을 주고 싶은 사용자.',
            '로컬 Ollama 모델이 로컬 브라우저를 조작하는 구성을 시험해 보고 싶고, 작은 로컬 모델의 품질은 여기서 테스트하지 않았음을 받아들일 수 있는 팀.',
          ],
        },
        whoShouldNotUse: {
          id: 'who-should-not-use',
          title: '한계와 확인하지 못한 내용',
          content: [
            '**페이지 내용이 제3자 모델로 전달되어서는 안 된다면 Browser Use는 적합하지 않으며, 확인하지 못한 세부 사항도 많습니다.**',
          ],
          items: [
            '적합하지 않음: AI가 대신 동작하는 것이 허용되지 않는 계정이나, 잘못된 클릭이 금전적 손실이나 데이터 손실로 이어지는 작업. README도 안전장치가 샌드박스가 아니라고 밝힙니다.',
            '적합하지 않음: 더블클릭 설치 프로그램을 원하는 사용자. 자료에서는 설치 프로그램이 보이지 않습니다.',
            '미검증: 작업 성공률, 속도, 작업당 비용. README에는 벤치마크 차트가 있지만 PromptQuorum은 재현하지 않았습니다.',
            '미검증: 로컬 모델이 브라우저를 얼마나 잘 조작하는지. README에는 Ollama 설정 예시가 있지만 품질 수치는 없습니다.',
            '미검증: 스텔스, CAPTCHA 해결, 봇 탐지에 관한 설명. 사이트에 따라 달라지며 제작사의 주장입니다.',
            '미검증: 기업용 보안 설명과 데이터 레지던시 옵션. 영업팀을 통해 제공되며 감사 보고서는 확인하지 못했습니다.',
          ],
        },
        vsAlternatives: {
          id: 'alternatives',
          itemHeadings: true,
          title: '대안',
          content: [
            '**Browser Use는 브라우저에 특화된 에이전트이며, 같은 디렉터리 분류의 대안은 더 폭넓은 컴퓨터 또는 코딩 에이전트입니다.** PromptQuorum은 이들을 직접 비교하지 않았습니다.',
          ],
          columns: ['도구', '출처에서 언급된 내용'],
          rows: [
            { '도구': 'Browser Use', '출처에서 언급된 내용': '브라우저 전용 에이전트 라이브러리와 CLI. MIT. 유료 클라우드는 선택 사항' },
            { '도구': '[Local Operator](/ko/power-local-llm/local-operator-review)', '출처에서 언급된 내용': '컴퓨터에서 코드를 실행하는 에이전트용 데스크톱 앱. MIT' },
            { '도구': '[Open Interpreter](/ko/power-local-llm/open-interpreter-review)', '출처에서 언급된 내용': '모델이 컴퓨터를 제어하고 코드를 실행하게 함' },
            { '도구': '[Agent Zero](/ko/power-local-llm/agent-zero-review)', '출처에서 언급된 내용': 'Docker에서 실행되는 셀프 호스팅 에이전트, 웹 인터페이스 제공' },
          ],
        },
        faq: {
          id: 'faq',
          title: '자주 묻는 질문',
          faqs: [
            {
              q: 'Browser Use는 무료인가요?',
              a: 'Python 라이브러리는 MIT 라이선스로 무료입니다. Browser Use Cloud와 호스팅 모델은 사용량에 따라 과금되며, 웹사이트에 따르면 신규 계정에는 1달러 무료 크레딧이 있습니다. 직접 발급한 키를 사용하면 API 제공업체가 별도로 과금합니다.',
            },
            {
              q: 'Browser Use를 로컬 모델과 함께 쓸 수 있나요?',
              a: '네. README의 FAQ에 따르면 로컬 Chromium과, localhost 포트 11434의 Ollama 같은 OpenAI 호환 로컬 엔드포인트를 사용합니다. PromptQuorum은 시험해 보지 않았고, 자료에는 최소 모델 크기도 나와 있지 않습니다.',
            },
            {
              q: '내 Chrome과 로그인 상태를 사용하나요?',
              a: '사용할 수 있습니다. chrome://inspect에서 원격 디버깅을 한 번 켜면 Chrome 모드가 로그인 상태가 유지된 열려 있는 Chrome을 조작합니다. 프로필의 임시 복사본을 쓰는 방법도 있습니다. 에이전트가 해당 세션에 접근하게 되므로 위험한 작업에는 별도의 프로필을 사용하십시오.',
            },
            {
              q: '어떤 버전을 사용해야 하나요?',
              a: '확인한 릴리스는 2026년 11월 16일의 1.0.6입니다. README는 범위 지정 대신 정확한 버전을 고정하라고 권장하며, 1.0 계열은 에이전트를 새로 작성했으므로 0.x에서 옮겨 오는 경우 마이그레이션 가이드를 읽으십시오.',
            },
            {
              q: 'Browser Use는 어디에 본사가 있나요?',
              a: '서비스 약관에는 Browser Use의 본사가 미국에 있으며 캘리포니아주 법이 적용된다고 적혀 있습니다. 개인정보 처리방침은 Browser Use, Inc.를 책임 주체로 밝히고 있습니다.',
            },
          ],
        },
        verdict: {
          id: 'verdict',
          title: '총평',
          content: [
            '**실제 브라우저를 조작하는 AI 모델을 Python에서 제어하고 싶고, 기본 설정이 페이지 내용을 호스팅 서비스로 보낸다는 점을 받아들일 수 있다면 Browser Use는 검토할 가치가 있습니다.**',
            'MIT 라이선스의 오픈소스이고 릴리스가 활발하며(마지막 푸시 2026년 11월 19일, 1.0.6은 2026년 11월 16일), 로컬 Chrome과 로컬 Ollama 모델도 지원합니다. 반면 설치 프로그램이 없고, README가 기존 동작이 깨질 수 있다고 할 만큼 릴리스가 빠르며, 안전장치는 샌드박스가 아니고, 클라우드 기본값은 유료이며, 성공률·스텔스·보안에 관한 설명은 제작사의 주장에만 근거한다는 점은 감안해야 합니다. PromptQuorum은 테스트하지 않았으므로, 먼저 일회용 프로필과 위험이 낮은 작업으로 시험해 보십시오.',
          ],
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            '[Browser Use 웹사이트](https://browser-use.com) — 제품과 요금, 2026년 11월 19일 확인.',
            '[GitHub 저장소](https://github.com/browser-use/browser-use) — 저장소 정보와 마지막 푸시, 2026년 11월 19일 확인.',
            '[README](https://github.com/browser-use/browser-use#readme) — 설치 경로, 브라우저 모드, 모델, FAQ, 2026년 11월 19일 확인.',
            '[LICENSE](https://github.com/browser-use/browser-use/blob/main/LICENSE) — MIT 라이선스, 2026년 11월 19일 확인.',
            '[릴리스 1.0.6](https://github.com/browser-use/browser-use/releases/tag/1.0.6) — 최신 릴리스, 2026년 11월 16일 공개.',
            '[pyproject.toml](https://github.com/browser-use/browser-use/blob/main/pyproject.toml) — 버전과 Python 3.11 이상 요구 사항, 2026년 11월 19일 확인.',
            '[개인정보 처리방침](https://browser-use.com/privacy) — 책임 주체와 수집 데이터, 2026년 11월 19일 확인.',
            '[서비스 약관](https://browser-use.com/legal/terms-of-service) — 본사 미국, 캘리포니아주 법, 2026년 11월 19일 확인.',
            '[Localhosted 등재 페이지](https://localhosted.com/browser-use) — 태그가 있는 디렉터리 등재 페이지, 2026년 11월 19일 확인. 소유자가 등재 페이지를 인수하지 않았습니다.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 글',
          items: [
            '[Local Operator Review](/ko/power-local-llm/local-operator-review) — 컴퓨터에서 코드를 실행하는 에이전트용 데스크톱 앱.',
            '[Open Interpreter Review](/ko/power-local-llm/open-interpreter-review) — 모델이 컴퓨터를 제어하고 코드를 실행하게 하는 에이전트.',
            '[Agent Zero Review](/ko/power-local-llm/agent-zero-review) — Docker에서 실행되는 셀프 호스팅 에이전트.',
            '[로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
            '[Nanobrowser 리뷰](/ko/power-local-llm/nanobrowser-review) — 에이전트가 내 브라우저에서 직접 클릭하고 입력하는 Chrome·Edge용 무료 오픈소스 확장으로, 클라우드 모델이나 로컬 Ollama·LM Studio 모델을 쓸 수 있습니다.',
          ],
        },
      },
    },
}
