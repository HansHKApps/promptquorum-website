// Skales Review: Agent App for Desktop and Phone With Your Own Key, a Trial Model or Local Models
// Slug: skales-review
// Companion to: hermes-agent-review, openclaw-review, openmausbot-review, open-interpreter-review
// Sources (all read 2026-11-17, no hands-on testing): skales.app (home, download, models, mobile, license, privacy notice, imprint), github.com/skalesapp/skales
// (README, GitHub API repository and releases, updates/latest.json) and the App Store listing title. The request came from the site owner, not from the maker.
// Last upstream update 2026-11-10 (release v12.9.65) => no stale warning.
// Theme: 'Local AI Agents & Tool Use' (same as the other personal-agent reviews).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'
import { starsFor } from '@/lib/power-local-llm/app-facts'

const ST = {
  en: starsFor('en'), de: starsFor('de'), fr: starsFor('fr'), ja: starsFor('ja'), zh: starsFor('zh'),
  es: starsFor('es'), pt: starsFor('pt'), ar: starsFor('ar'), ko: starsFor('ko'),
}

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/skales-review-hero-en.webp',
    title: 'Skales Review: AI Agent App With Your Own Key or Local Models',
    seoTitle: 'Skales Review: AI Agent App, Own Key or Local Models',
    intro:
      'Skales is a desktop and phone app that works as an AI agent: you give it a goal, a coding task or a voice request, and it carries out the steps with its own tools, asking for approval before risky actions. It is made by Mario Simic, a sole proprietor in Vienna, Austria. This review is based on the maker\'s website, the GitHub distribution repository, the license and privacy pages and the release assets, checked on 17 November 2026. PromptQuorum has not installed or tested the app.',
    metaDescription:
      'Skales is a proprietary AI agent app for Windows, Mac, Linux, Android and iOS. Review of install, models, privacy and license, free for up to two people.',
    twitterDescription:
      'Skales review: an agent app for desktop and phone that stores data on your device and works with your own key, a trial model or local models. Proprietary license.',
    audience:
      'People who want a personal AI agent on their own computer and phone, freelancers and small businesses, and anyone comparing agent apps that can use local models',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Skales',
    targetKeywords: [
      'Skales review',
      'Skales AI agent',
      'Skales Local',
      'Skales license',
      'Skales privacy',
      'Skales vs OpenClaw',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Skales is a proprietary AI agent app for Windows, macOS, Linux, Android and iOS that keeps its data on your device and lets you choose the model: your own provider key, a free trial model or a local model.** It is free for private use, education and businesses of up to two people. The source code is not published, so its approval gates and privacy claims cannot be audited independently.',
    quickAnswerTop: {
      en: {
        question: 'What is Skales and who is it for?',
        answer:
          'Skales is an AI agent app that plans and carries out multi-step tasks on your computer or phone, using a model you choose. It suits people who want one agent for chat, coding and background goals and accept closed-source software.',
        bullets: [
          'Version 12.9.65, released on 10 November 2026; no stale-project warning.',
          'Installers: .exe, .dmg, .deb and AppImage, plus Google Play and App Store apps.',
          'Models: a free trial model, your own provider keys, Skales Local, Ollama or LM Studio.',
          'License: Skales End User Licence Agreement 1.3, free for up to two people.',
          'Maker: a sole proprietorship in Vienna, Austria.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Overview', anchor: 'overview' },
      { label: 'How to Get It', anchor: 'get-it' },
      { label: 'Requirements', anchor: 'requirements' },
      { label: 'Features', anchor: 'features' },
      { label: 'Privacy and Data Flow', anchor: 'privacy' },
      { label: 'License and Cost', anchor: 'license' },
      { label: 'Who Should Use It', anchor: 'who-should-use' },
      { label: 'What We Could Not Verify', anchor: 'who-should-not-use' },
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
          {
            type: 'one-sentence',
            text: 'Skales is a closed-source desktop and phone app that wraps an AI model of your choice with tools, memory, background goals and approval prompts.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as an assistant that can open files, browse, write code and keep working on a goal while you do something else. Your history stays on your device, but the model you pick may be a cloud service.',
          },
        ],
        items: [
          'Goals run in the background across many steps; coding, voice, a creative Studio and a phone app are part of the same product.',
          'Conversations, memory and files are stored on your device; the update check and a few optional services are separate data paths.',
          'The Windows installer is not code-signed yet, per the maker; the macOS build is described as signed and notarized.',
          'The app itself needs about 300 MB of RAM and no GPU by the maker\'s figures; local models need more.',
          'PromptQuorum has not tested the app. Capability, tool and install figures are the maker\'s own.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'An agent with access to your files, browser, calendar and email can take actions you did not intend. Keep approval prompts on, start with a non-sensitive folder, and check what each connected provider receives.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Overview',
        content: [
          '**Skales is an agent harness: a desktop and phone app that wraps an AI model with tools, memory, planning and approval prompts.**',
          `Skales is made by Mario Simic, who trades as Skales as a sole proprietorship in Vienna, Austria, according to the imprint. The GitHub repository was created on 8 March 2026 and shows ${ST.en('skales')} stars. Version 12.9.65 is the latest release, published on 10 November 2026, so development is ongoing and no stale-project warning applies.`,
          'Per the maker, you type a goal with /goal and Skales plans the steps and works on them in the background. Other parts named on the site and in the README are a Code mode for working inside a folder, a Studio for images, video and design, the Iris voice surface with a wake word that runs on the device, a Desktop Buddy on your screen, and Scout (beta), long-lived agents that can optionally get a virtual machine of their own.',
          'Skales Mobile is a separate app for Android and iOS. The maker says it runs on its own or pairs with the desktop over an end-to-end encrypted relay. The site also describes MCP servers, Agent Skills import, and a DevKit that is a separate MIT-licensed repository.',
          'These are maker descriptions. PromptQuorum has not run Skales and has not measured its reliability, speed or output quality.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'How to Get It',
        content: [
          '**Skales installs like a normal app: per-OS installers from the maker\'s download page, with no terminal needed.**',
          'The maker says the Windows build is not code-signed, so Windows SmartScreen shows a one-time notice. The macOS build is described as signed with an Apple Developer ID and notarized. GitHub release v12.9.65 lists the same installer types as the download page.',
        ],
        columns: ['Platform', 'How to get it'],
        rows: [
          { 'Platform': '[Website](https://skales.app)', 'How to get it': 'Official site with downloads and docs' },
          { 'Platform': '[Windows](https://skales.app/download/)', 'How to get it': 'Installer (.exe), Windows 10/11 64-bit; Arm build' },
          { 'Platform': '[macOS](https://skales.app/download/)', 'How to get it': 'DMG for Apple Silicon or Intel, macOS 11+' },
          { 'Platform': '[Linux](https://skales.app/download/)', 'How to get it': '.deb (Debian, Ubuntu, Mint) or AppImage' },
          { 'Platform': '[Android](https://play.google.com/store/apps/details?id=app.skales.mobile)', 'How to get it': 'Google Play, Android 10+' },
          { 'Platform': '[iOS](https://apps.apple.com/us/app/skales/id6763328966)', 'How to get it': 'App Store, iOS 16+' },
          { 'Platform': '[GitHub releases](https://github.com/skalesapp/skales/releases)', 'How to get it': 'Release assets, changelog, install guides' },
          { 'Platform': '[Privacy policy](https://skales.app/privacy/)', 'How to get it': 'Privacy notice, last updated 14 September 2026' },
        ],
        note: 'The phone app runs on its own or paired with the desktop. A scout\'s virtual machine needs virtualization support on the computer.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requirements',
        content: [
          '**By the maker\'s figures the app itself is light, while model and Scout needs are separate.** Hardware needs for local models depend on the model you choose and were not tested.',
        ],
        columns: ['Item', 'Stated figure'],
        rows: [
          { 'Item': 'RAM in use', 'Stated figure': 'About 300 MB in normal operation (download page)' },
          { 'Item': 'GPU', 'Stated figure': 'Not required for the app (download page)' },
          { 'Item': 'Operating system', 'Stated figure': 'Windows 10/11 64-bit; macOS 11+; Linux x64' },
          { 'Item': 'Phone', 'Stated figure': 'Android 10+; iOS 16+' },
          { 'Item': 'Scout virtual machine', 'Stated figure': 'About 2 CPUs, 2 GB memory, 12 GB disk' },
          { 'Item': 'Network', 'Stated figure': 'Cloud providers need internet; local models can run offline' },
        ],
        note: 'The Scout virtual machine also needs virtualization support; without it a scout runs on the host and asks first.',
      },
      features: {
        id: 'features',
        title: 'Features',
        content: [
          '**Skales combines a goal runner, coding tools, voice, a creative studio and model choice in one app.** All items below are maker claims from the website and README.',
        ],
        items: [
          'Goals: /goal starts multi-step work that continues in the background, with schedules and approval gates that are on by default.',
          'Code mode and the Skales Code window bind a chat to a folder, with Plan, Code and Auto modes, change review hunk by hunk and git inside the window.',
          'Model choice: the Skales IQ trial, your own keys for many providers, sign-in with a ChatGPT subscription, Ollama, LM Studio, KoboldCpp, vLLM and custom endpoints.',
          'Skales Local: a built-in inference server with a curated catalog of text, vision, speech and image models that run on your hardware.',
          'Studio: images, video, voice, music and design drafts, through cloud services or a local ComfyUI.',
          'Iris voice surface: wake word on the device, with the same tools as a chat turn.',
          'Scout (beta): long-lived agents that can run in their own virtual machine, which you can watch and take over.',
          'Integrations: WordPress, calendars, email, Notion, GitHub, Telegram, Discord, WhatsApp, Slack, Signal, Home Assistant, MCP servers and Agent Skills (SKILL.md).',
          'Extras: Office add-ins, a Chrome extension, and an importer for ChatGPT, Claude, OpenClaw and Hermes Agent data.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data Flow',
        content: [
          '**Per the privacy notice, conversations, files, memory and settings stay on your device, and several optional services are separate data paths.**',
          'The controller named in the notice is Mario Simic, trading as Skales, in Vienna. The notice describes Skales Desktop and Mobile as installed programs, not a cloud service. On the desktop, API keys sit in a settings file in your data folder, protected by file permissions; on Android and iOS they sit in the operating system\'s secure storage.',
          'What does leave the device: the update check (every four hours on desktop) sends the program name, version, operating system, architecture, build identifier and an integrity-check result, and bug reports go out only when you send them. Usage statistics and the public Discover feed are optional and off by default. The relay used for phone pairing encrypts messages end to end, but it can see device names and identifiers, connection times and message sizes.',
          'The Skales IQ trial is the one model path that runs through the maker. The notice says it stores your email address and hashed identifiers, forwards requests to OpenRouter, Inc. in the United States with a zero-data-retention instruction, and does not store prompts or answers. With your own key, requests go from your device straight to that provider.',
          'The README adds a Privacy Mode that keeps memory out of prompts sent to cloud models. PromptQuorum did not inspect network traffic and has not verified any of these statements.',
        ],
      },
      license: {
        id: 'license',
        title: 'License and Cost',
        content: [
          '**Skales is proprietary software under the Skales End User Licence Agreement, free for private use, education and businesses of up to two people.**',
          'Version 1.3 of the agreement, dated 9 November 2026, says Skales is not open source and not source-available. Larger teams, companies and public bodies need a written commercial license after a 30-day evaluation, and hosting or white-labelling needs a separate agreement. Per the README, releases up to 12.9.27 were supplied under the Business Source License 1.1.',
          'The license pages publish no price for commercial licenses. Model costs are separate: you pay your own provider, or use the free Skales IQ trial, whose allowance is not stated in the sources read here.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        content: [
          '**Skales fits people who want an agent on their own devices and want to pick the model, including a local one.**',
        ],
        items: [
          'People who want one agent for chat, coding and background goals on desktop and phone.',
          'Freelancers and businesses of up to two people, who may use it commercially under the license.',
          'Users of other agent tools who want to import their history; the README names ChatGPT, Claude, OpenClaw and Hermes Agent.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        content: [
          '**Skales is a poor fit in some situations, and several details remain unverified.**',
        ],
        items: [
          'Not a fit: anyone who needs open-source code or an independent source audit; no source is published.',
          'Not a fit: companies above two people that have no commercial license.',
          'Unverified: the maker\'s own figures disagree. Providers are 15+ in the README, 26 in the repository description and 29 on the website; built-in tools are 400+ on the website and 260+ in the README.',
          'Unverified: macOS signing and notarization and the antivirus scan result on the download page are maker statements; the Windows installer is unsigned.',
          'Unverified: Scout is labelled beta, and its virtual-machine isolation was not tested.',
          'Unverified: approval gates, the file sandbox and the privacy statements were not tested, and the closed source means they cannot be checked in code.',
          'Unverified: the Google Play listing renders only with JavaScript and was not read; the App Store listing was seen by title only.',
          'Unverified: install, country and download counts on the homepage, and whether Skales Local models are good enough for agent work; no benchmarks were run.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Skales vs Alternatives',
        itemHeadings: true,
        content: [
          '**Skales sits between personal assistants and autonomous agents. PromptQuorum has not compared it hands-on with the tools below.** The notes come from their directory entries.',
        ],
        columns: ['Tool', 'Noted in directory'],
        rows: [
          { 'Tool': 'Skales', 'Noted in directory': 'Proprietary, free for up to two people; Windows, Mac, Linux, iOS, Android' },
          { 'Tool': '[Hermes Agent](/power-local-llm/hermes-agent-review)', 'Noted in directory': 'MIT; self-improving personal agent with persistent memory' },
          { 'Tool': '[OpenClaw](/power-local-llm/openclaw-review)', 'Noted in directory': 'MIT; orchestration framework for agent workflows' },
          { 'Tool': '[OpenMausBot](/power-local-llm/openmausbot-review)', 'Noted in directory': 'Apache 2.0; chat app running a team of bots on agent CLIs' },
          { 'Tool': '[Open Interpreter](/power-local-llm/open-interpreter-review)', 'Noted in directory': 'Apache 2.0; lets a local LLM control your computer and run code' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is Skales free?',
            a: 'Yes for private use, education and businesses of up to two people. Larger teams need a written license, and its price is not published. You also pay your model provider unless you use the free Skales IQ trial or a local model.',
          },
          {
            q: 'Can Skales run offline with local models?',
            a: 'The maker says yes. Skales Local ships with the app and runs models, speech recognition and speech output on your hardware, and Ollama or LM Studio can be connected. The mobile page says the phone app can also run a model on the device. PromptQuorum did not test any of this.',
          },
          {
            q: 'Does Skales have a mobile app?',
            a: 'Yes, Skales Mobile on Google Play (Android 10+) and the App Store (iOS 16+). It runs on its own with native tools, or pairs with the desktop by QR code, after which the site says the phone reaches the desktop\'s tool set.',
          },
          {
            q: 'Is Skales open source?',
            a: 'No. The maker says it is neither open source nor source-available, and the GitHub repository only distributes releases, a changelog and install guides. The DevKit and the WordPress plugin are separate MIT-licensed repositories.',
          },
          {
            q: 'What happens when the free trial model runs out?',
            a: 'The site says you can paste your own provider key or switch to a local model and keep going at no cost from Skales. The size of the trial allowance is not stated in the sources read here.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Skales is worth a look if you want an agent app on your own devices where you pick the model, and you accept closed-source software.**',
          'On paper it covers a lot: installers for five platforms, a free tier for small businesses, local data storage, options for local models, approval prompts on by default, and an active release history with version 12.9.65 on 10 November 2026.',
          'The trade-offs are real. The code cannot be audited, the Windows installer is unsigned, Scout is beta, and the maker\'s own counts disagree. PromptQuorum has not tested the app. Try it on a non-sensitive folder, keep approval prompts on, and check which provider receives your prompts before you rely on it.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Skales website](https://skales.app) — maker\'s description of the agent, goals, Studio, Scout and voice, checked 17 November 2026.',
          '[Download page](https://skales.app/download/) — per-OS installers, system requirements and first-launch notes, checked 17 November 2026.',
          '[Models page](https://skales.app/models/) — Skales IQ, Skales Local and the provider list, checked 17 November 2026.',
          '[Mobile page](https://skales.app/mobile/) — Android and iOS app, standalone and paired modes, checked 17 November 2026.',
          '[License page](https://skales.app/licence/) — End User Licence Agreement 1.3, checked 17 November 2026.',
          '[Privacy notice](https://skales.app/privacy/) — controller, data paths, Skales IQ and relay, checked 17 November 2026.',
          '[Imprint](https://skales.app/imprint/) — maker, sole proprietorship in Vienna, checked 17 November 2026.',
          '[Skales GitHub repository](https://github.com/skalesapp/skales) — README, license history, repository creation date and star count, checked 17 November 2026.',
          '[Release v12.9.65](https://github.com/skalesapp/skales/releases/tag/v12.9.65) — latest release, date and installer assets, checked 17 November 2026.',
          '[Skales on the App Store](https://apps.apple.com/us/app/skales/id6763328966) — iOS listing, checked 17 November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Hermes Agent Review: Local Autonomous AI Agent](/power-local-llm/hermes-agent-review) — a comparable personal agent with persistent memory.',
          '[OpenClaw Review](/power-local-llm/openclaw-review) — orchestration framework for agent workflows.',
          '[OpenMausBot Review](/power-local-llm/openmausbot-review) — desktop chat app that runs a team of AI bots.',
          '[Open Interpreter Review](/power-local-llm/open-interpreter-review) — lets a local LLM control your computer and run code.',
          '[Local LLM Software Directory](/directory) — the full catalogue of local AI tools.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/skales-review-hero-de.webp',
    title: 'Skales im Test: KI-Agent mit eigenem Schlüssel oder lokalen Modellen',
    seoTitle: 'Skales im Test: KI-Agent mit eigenem Schlüssel, lokal',
    intro:
      'Skales ist eine Desktop- und Smartphone-App, die als KI-Agent arbeitet: Sie geben ein Ziel, eine Programmieraufgabe oder eine Sprachanfrage vor, und die App führt die Schritte mit eigenen Werkzeugen aus und fragt bei riskanten Aktionen um Freigabe. Entwickelt wird sie von Mario Simic, einem Einzelunternehmer in Wien, Österreich. Dieser Test stützt sich auf die Website des Entwicklers, das GitHub-Verteilungs-Repository, die Lizenz- und Datenschutzseiten und die Release-Dateien, geprüft am 17. November 2026. PromptQuorum hat die App weder installiert noch getestet.',
    metaDescription:
      'Skales ist eine proprietäre KI-Agent-App für Windows, Mac, Linux, Android und iOS. Test zu Installation, Modellen, Datenschutz und Lizenz der App.',
    twitterDescription:
      'Skales im Test: Eine Agent-App für Desktop und Smartphone, die Daten auf Ihrem Gerät speichert und mit eigenem Schlüssel, Testmodell oder lokalen Modellen arbeitet. Proprietäre Lizenz.',
    audience:
      'Menschen, die einen persönlichen KI-Agenten auf eigenem Rechner und Smartphone wollen, Freiberufler und kleine Unternehmen sowie alle, die Agent-Apps mit lokalen Modellen vergleichen',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Skales',
    targetKeywords: [
      'Skales Test',
      'Skales KI-Agent',
      'Skales Local',
      'Skales Lizenz',
      'Skales Datenschutz',
      'Skales vs OpenClaw',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Skales ist eine proprietäre KI-Agent-App für Windows, macOS, Linux, Android und iOS, die ihre Daten auf Ihrem Gerät hält und Ihnen die Modellwahl lässt: eigener Anbieter-Schlüssel, kostenloses Testmodell oder lokales Modell.** Sie ist für die private Nutzung, die Bildung und Unternehmen bis zu zwei Personen kostenlos. Der Quellcode ist nicht veröffentlicht, daher lassen sich Freigabeabfragen und Datenschutzangaben nicht unabhängig prüfen.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Skales und für wen ist es gedacht?',
        answer:
          'Skales ist eine KI-Agent-App, die mehrstufige Aufgaben auf Ihrem Computer oder Smartphone plant und ausführt, mit einem Modell Ihrer Wahl. Sie eignet sich für Menschen, die einen Agenten für Chat, Programmieren und Hintergrundziele wollen und Closed-Source-Software akzeptieren.',
        bullets: [
          'Version 12.9.65, veröffentlicht am 10. November 2026; keine Warnung vor einem veralteten Projekt.',
          'Installationsdateien: .exe, .dmg, .deb und AppImage sowie Apps bei Google Play und im App Store.',
          'Modelle: ein kostenloses Testmodell, eigene Anbieter-Schlüssel, Skales Local, Ollama oder LM Studio.',
          'Lizenz: Skales End User Licence Agreement 1.3, kostenlos bis zwei Personen.',
          'Hersteller: ein Einzelunternehmen in Wien, Österreich.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Überblick', anchor: 'overview' },
      { label: 'So erhalten Sie die App', anchor: 'get-it' },
      { label: 'Anforderungen', anchor: 'requirements' },
      { label: 'Funktionen', anchor: 'features' },
      { label: 'Datenschutz und Datenfluss', anchor: 'privacy' },
      { label: 'Lizenz und Kosten', anchor: 'license' },
      { label: 'Für wen geeignet', anchor: 'who-should-use' },
      { label: 'Was wir nicht überprüfen konnten', anchor: 'who-should-not-use' },
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
          {
            type: 'one-sentence',
            text: 'Skales ist eine Closed-Source-App für Desktop und Smartphone, die ein KI-Modell Ihrer Wahl mit Werkzeugen, Gedächtnis, Hintergrundzielen und Freigabeabfragen ausstattet.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich einen Assistenten vor, der Dateien öffnen, im Web surfen, Code schreiben und an einem Ziel weiterarbeiten kann, während Sie etwas anderes tun. Ihr Verlauf bleibt auf Ihrem Gerät, doch das gewählte Modell kann ein Cloud-Dienst sein.',
          },
        ],
        items: [
          'Ziele laufen im Hintergrund über viele Schritte; Programmieren, Sprache, ein kreatives Studio und eine Smartphone-App gehören zum selben Produkt.',
          'Gespräche, Gedächtnis und Dateien liegen auf Ihrem Gerät; die Update-Abfrage und einige optionale Dienste sind getrennte Datenwege.',
          'Der Windows-Installer ist laut Hersteller noch nicht code-signiert; die macOS-Version wird als signiert und notarisiert beschrieben.',
          'Die App selbst braucht nach Herstellerangaben etwa 300 MB RAM und keine GPU; lokale Modelle brauchen mehr.',
          'PromptQuorum hat die App nicht getestet. Angaben zu Funktionen, Werkzeugen und Installation stammen vom Hersteller.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ein Agent mit Zugriff auf Ihre Dateien, Ihren Browser, Ihren Kalender und Ihre E-Mails kann Aktionen ausführen, die Sie nicht beabsichtigt haben. Lassen Sie die Freigabeabfragen eingeschaltet, beginnen Sie mit einem unkritischen Ordner und prüfen Sie, was jeder angebundene Anbieter erhält.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Überblick',
        content: [
          '**Skales ist ein Agent-Rahmen: eine Desktop- und Smartphone-App, die ein KI-Modell mit Werkzeugen, Gedächtnis, Planung und Freigabeabfragen ausstattet.**',
          `Skales stammt von Mario Simic, der laut Impressum als Einzelunternehmen unter dem Namen Skales in Wien, Österreich, auftritt. Das GitHub-Repository wurde am 8. März 2026 angelegt und zeigt ${ST.de('skales')} Sterne. Version 12.9.65 ist die neueste Version, veröffentlicht am 10. November 2026; die Entwicklung läuft also weiter, und eine Warnung vor einem veralteten Projekt entfällt.`,
          'Laut Hersteller geben Sie mit /goal ein Ziel ein, und Skales plant die Schritte und arbeitet sie im Hintergrund ab. Weitere Bestandteile laut Website und README sind ein Code-Modus für die Arbeit in einem Ordner, ein Studio für Bilder, Video und Design, die Sprachoberfläche Iris mit einem Weckwort, das auf dem Gerät läuft, ein Desktop Buddy auf dem Bildschirm sowie Scout (Beta), langlebige Agenten, die optional eine eigene virtuelle Maschine erhalten können.',
          'Skales Mobile ist eine eigene App für Android und iOS. Laut Hersteller läuft sie allein oder wird über ein Ende-zu-Ende-verschlüsseltes Relay mit dem Desktop gekoppelt. Die Website beschreibt außerdem MCP-Server, den Import von Agent Skills und ein DevKit, das ein separates MIT-lizenziertes Repository ist.',
          'Das sind Herstellerbeschreibungen. PromptQuorum hat Skales nicht ausgeführt und weder Zuverlässigkeit noch Geschwindigkeit oder Ausgabequalität gemessen.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'So erhalten Sie die App',
        content: [
          '**Skales wird wie eine normale App installiert: Installer je Betriebssystem von der Download-Seite des Herstellers, ohne Terminal.**',
          'Laut Hersteller ist der Windows-Build nicht code-signiert, weshalb Windows SmartScreen einmalig einen Hinweis zeigt. Der macOS-Build wird als mit einer Apple-Developer-ID signiert und notarisiert beschrieben. Das GitHub-Release v12.9.65 listet dieselben Installer-Typen wie die Download-Seite.',
        ],
        columns: ['Plattform', 'So erhalten Sie sie'],
        rows: [
          { 'Plattform': '[Website](https://skales.app)', 'So erhalten Sie sie': 'Offizielle Seite mit Downloads und Doku' },
          { 'Plattform': '[Windows](https://skales.app/download/)', 'So erhalten Sie sie': 'Installer (.exe), Windows 10/11 64-Bit; Arm-Build' },
          { 'Plattform': '[macOS](https://skales.app/download/)', 'So erhalten Sie sie': 'DMG für Apple Silicon oder Intel, macOS 11+' },
          { 'Plattform': '[Linux](https://skales.app/download/)', 'So erhalten Sie sie': '.deb (Debian, Ubuntu, Mint) oder AppImage' },
          { 'Plattform': '[Android](https://play.google.com/store/apps/details?id=app.skales.mobile)', 'So erhalten Sie sie': 'Google Play, Android 10+' },
          { 'Plattform': '[iOS](https://apps.apple.com/us/app/skales/id6763328966)', 'So erhalten Sie sie': 'App Store, iOS 16+' },
          { 'Plattform': '[GitHub-Releases](https://github.com/skalesapp/skales/releases)', 'So erhalten Sie sie': 'Release-Dateien, Changelog, Installationsanleitungen' },
          { 'Plattform': '[Datenschutzerklärung](https://skales.app/privacy/)', 'So erhalten Sie sie': 'Datenschutzhinweis, zuletzt aktualisiert am 14. September 2026' },
        ],
        note: 'Die Smartphone-App läuft allein oder mit dem Desktop gekoppelt. Die virtuelle Maschine eines Scouts braucht Virtualisierungsunterstützung auf dem Computer.',
      },
      requirements: {
        id: 'requirements',
        title: 'Anforderungen',
        content: [
          '**Nach Herstellerangaben ist die App selbst leichtgewichtig, während der Bedarf für Modelle und Scout getrennt zu betrachten ist.** Der Hardwarebedarf lokaler Modelle hängt vom gewählten Modell ab und wurde nicht getestet.',
        ],
        columns: ['Punkt', 'Angegebener Wert'],
        rows: [
          { 'Punkt': 'RAM im Betrieb', 'Angegebener Wert': 'Etwa 300 MB im Normalbetrieb (Download-Seite)' },
          { 'Punkt': 'GPU', 'Angegebener Wert': 'Für die App nicht nötig (Download-Seite)' },
          { 'Punkt': 'Betriebssystem', 'Angegebener Wert': 'Windows 10/11 64-Bit; macOS 11+; Linux x64' },
          { 'Punkt': 'Smartphone', 'Angegebener Wert': 'Android 10+; iOS 16+' },
          { 'Punkt': 'Virtuelle Maschine (Scout)', 'Angegebener Wert': 'Etwa 2 CPUs, 2 GB RAM, 12 GB Speicher' },
          { 'Punkt': 'Netzwerk', 'Angegebener Wert': 'Cloud-Anbieter brauchen Internet; lokale Modelle laufen offline' },
        ],
        note: 'Die virtuelle Maschine des Scouts braucht außerdem Virtualisierungsunterstützung; ohne sie läuft ein Scout auf dem Host und fragt vorher nach.',
      },
      features: {
        id: 'features',
        title: 'Funktionen',
        content: [
          '**Skales vereint Zielausführung, Programmierwerkzeuge, Sprache, ein kreatives Studio und Modellwahl in einer App.** Alle folgenden Punkte sind Herstellerangaben von Website und README.',
        ],
        items: [
          'Ziele: /goal startet mehrstufige Arbeit, die im Hintergrund weiterläuft, mit Zeitplänen und standardmäßig aktiven Freigabeabfragen.',
          'Der Code-Modus und das Fenster Skales Code binden einen Chat an einen Ordner, mit den Modi Plan, Code und Auto, Änderungsprüfung Block für Block und Git im Fenster.',
          'Modellwahl: die Skales-IQ-Testversion, eigene Schlüssel für viele Anbieter, Anmeldung mit einem ChatGPT-Abonnement, Ollama, LM Studio, KoboldCpp, vLLM und eigene Endpunkte.',
          'Skales Local: ein eingebauter Inferenzserver mit einem kuratierten Katalog aus Text-, Bild-, Sprach- und Bildgenerierungsmodellen, die auf Ihrer Hardware laufen.',
          'Studio: Bilder, Video, Stimme, Musik und Designentwürfe, über Cloud-Dienste oder ein lokales ComfyUI.',
          'Sprachoberfläche Iris: Weckwort auf dem Gerät, mit denselben Werkzeugen wie ein Chat-Zug.',
          'Scout (Beta): langlebige Agenten, die in einer eigenen virtuellen Maschine laufen können, der Sie zusehen und die Sie übernehmen können.',
          'Integrationen: WordPress, Kalender, E-Mail, Notion, GitHub, Telegram, Discord, WhatsApp, Slack, Signal, Home Assistant, MCP-Server und Agent Skills (SKILL.md).',
          'Extras: Office-Add-ins, eine Chrome-Erweiterung und ein Importer für Daten aus ChatGPT, Claude, OpenClaw und Hermes Agent.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Datenfluss',
        content: [
          '**Laut Datenschutzhinweis bleiben Gespräche, Dateien, Gedächtnis und Einstellungen auf Ihrem Gerät, und mehrere optionale Dienste sind getrennte Datenwege.**',
          'Verantwortlicher laut Hinweis ist Mario Simic, handelnd unter Skales, in Wien. Der Hinweis beschreibt Skales Desktop und Mobile als installierte Programme, nicht als Cloud-Dienst. Auf dem Desktop liegen API-Schlüssel in einer Einstellungsdatei in Ihrem Datenordner, geschützt durch Dateiberechtigungen; auf Android und iOS liegen sie im sicheren Speicher des Betriebssystems.',
          'Was das Gerät verlässt: Die Update-Abfrage (auf dem Desktop alle vier Stunden) sendet Programmname, Version, Betriebssystem, Architektur, Build-Kennung und ein Ergebnis der Integritätsprüfung, und Fehlerberichte gehen nur ab, wenn Sie sie senden. Nutzungsstatistiken und der öffentliche Discover-Feed sind optional und standardmäßig aus. Das Relay für die Smartphone-Kopplung verschlüsselt Nachrichten Ende-zu-Ende, sieht aber Gerätenamen und Kennungen, Verbindungszeiten und Nachrichtengrößen.',
          'Die Testversion Skales IQ ist der eine Modellweg, der über den Hersteller läuft. Laut Hinweis speichert sie Ihre E-Mail-Adresse und gehashte Kennungen, leitet Anfragen mit einer Anweisung zur Nulldatenspeicherung an OpenRouter, Inc. in den USA weiter und speichert weder Eingaben noch Antworten. Mit eigenem Schlüssel gehen Anfragen direkt von Ihrem Gerät an diesen Anbieter.',
          'Die README ergänzt einen Privatsphäre-Modus, der das Gedächtnis aus Eingaben an Cloud-Modelle heraushält. PromptQuorum hat den Netzwerkverkehr nicht untersucht und keine dieser Angaben überprüft.',
        ],
      },
      license: {
        id: 'license',
        title: 'Lizenz und Kosten',
        content: [
          '**Skales ist proprietäre Software unter dem Skales End User Licence Agreement, kostenlos für die private Nutzung, die Bildung und Unternehmen bis zu zwei Personen.**',
          'Version 1.3 der Vereinbarung vom 9. November 2026 sagt, Skales sei weder Open Source noch quellverfügbar. Größere Teams, Unternehmen und Behörden brauchen nach 30 Tagen Testzeit eine schriftliche kommerzielle Lizenz, und Hosting oder White-Labeling erfordern eine eigene Vereinbarung. Laut README wurden Versionen bis einschließlich 12.9.27 unter der Business Source License 1.1 geliefert.',
          'Die Lizenzseiten nennen keinen Preis für kommerzielle Lizenzen. Modellkosten kommen separat hinzu: Sie zahlen Ihren eigenen Anbieter oder nutzen die kostenlose Testversion Skales IQ, deren Kontingent in den hier gelesenen Quellen nicht genannt wird.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen geeignet',
        content: [
          '**Skales passt zu Menschen, die einen Agenten auf eigenen Geräten wollen und das Modell selbst wählen möchten, auch ein lokales.**',
        ],
        items: [
          'Menschen, die einen Agenten für Chat, Programmieren und Hintergrundziele auf Desktop und Smartphone wollen.',
          'Freiberufler und Unternehmen bis zu zwei Personen, die Skales laut Lizenz kommerziell nutzen dürfen.',
          'Nutzer anderer Agent-Tools, die ihren Verlauf importieren möchten; die README nennt ChatGPT, Claude, OpenClaw und Hermes Agent.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        content: [
          '**Skales passt in manchen Situationen schlecht, und mehrere Details bleiben ungeprüft.**',
        ],
        items: [
          'Nicht geeignet: wer Open-Source-Code oder eine unabhängige Quellcode-Prüfung braucht; es ist kein Quellcode veröffentlicht.',
          'Nicht geeignet: Unternehmen mit mehr als zwei Personen ohne kommerzielle Lizenz.',
          'Ungeprüft: Die Angaben des Herstellers widersprechen sich. Anbieter sind 15+ in der README, 26 in der Repository-Beschreibung und 29 auf der Website; eingebaute Werkzeuge sind 400+ auf der Website und 260+ in der README.',
          'Ungeprüft: macOS-Signierung und Notarisierung sowie das Virenscan-Ergebnis auf der Download-Seite sind Herstellerangaben; der Windows-Installer ist unsigniert.',
          'Ungeprüft: Scout ist als Beta gekennzeichnet, und die Isolation seiner virtuellen Maschine wurde nicht getestet.',
          'Ungeprüft: Freigabeabfragen, Datei-Sandbox und Datenschutzangaben wurden nicht getestet, und wegen des geschlossenen Quellcodes lassen sie sich nicht im Code prüfen.',
          'Ungeprüft: Der Eintrag bei Google Play wird nur mit JavaScript dargestellt und wurde nicht gelesen; den App-Store-Eintrag haben wir nur am Titel gesehen.',
          'Ungeprüft: Installations-, Länder- und Download-Zahlen auf der Startseite sowie ob Skales-Local-Modelle für Agentenarbeit gut genug sind; es wurden keine Benchmarks ausgeführt.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Skales im Vergleich zu Alternativen',
        itemHeadings: true,
        content: [
          '**Skales liegt zwischen persönlichen Assistenten und autonomen Agenten. PromptQuorum hat es nicht praktisch mit den folgenden Tools verglichen.** Die Angaben stammen aus deren Verzeichniseinträgen.',
        ],
        columns: ['Tool', 'Laut Verzeichnis'],
        rows: [
          { 'Tool': 'Skales', 'Laut Verzeichnis': 'Proprietär, frei bis zwei Personen; Windows, Mac, Linux, iOS, Android' },
          { 'Tool': '[Hermes Agent](/de/power-local-llm/hermes-agent-review)', 'Laut Verzeichnis': 'MIT; selbstverbessernder persönlicher Agent mit dauerhaftem Gedächtnis' },
          { 'Tool': '[OpenClaw](/de/power-local-llm/openclaw-review)', 'Laut Verzeichnis': 'MIT; Orchestrierungs-Framework für Agent-Workflows' },
          { 'Tool': '[OpenMausBot](/de/power-local-llm/openmausbot-review)', 'Laut Verzeichnis': 'Apache 2.0; Chat-App, die ein Team von Bots auf Agent-CLIs betreibt' },
          { 'Tool': '[Open Interpreter](/de/power-local-llm/open-interpreter-review)', 'Laut Verzeichnis': 'Apache 2.0; lässt ein lokales LLM den Computer steuern und Code ausführen' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Ist Skales kostenlos?',
            a: 'Ja, für die private Nutzung, die Bildung und Unternehmen bis zu zwei Personen. Größere Teams brauchen eine schriftliche Lizenz, deren Preis nicht veröffentlicht ist. Sie zahlen außerdem Ihren Modellanbieter, sofern Sie nicht die kostenlose Testversion Skales IQ oder ein lokales Modell nutzen.',
          },
          {
            q: 'Kann Skales mit lokalen Modellen offline laufen?',
            a: 'Der Hersteller sagt ja. Skales Local wird mit der App ausgeliefert und führt Modelle, Spracherkennung und Sprachausgabe auf Ihrer Hardware aus, und Ollama oder LM Studio lassen sich anbinden. Die Mobil-Seite sagt, die Smartphone-App könne auch ein Modell auf dem Gerät ausführen. PromptQuorum hat nichts davon getestet.',
          },
          {
            q: 'Hat Skales eine Smartphone-App?',
            a: 'Ja, Skales Mobile bei Google Play (Android 10+) und im App Store (iOS 16+). Sie läuft allein mit nativen Werkzeugen oder wird per QR-Code mit dem Desktop gekoppelt; danach erreicht das Smartphone laut Website den Werkzeugsatz des Desktops.',
          },
          {
            q: 'Ist Skales Open Source?',
            a: 'Nein. Der Hersteller sagt, es sei weder Open Source noch quellverfügbar, und das GitHub-Repository verteilt nur Releases, einen Changelog und Installationsanleitungen. Das DevKit und das WordPress-Plugin sind separate MIT-lizenzierte Repositories.',
          },
          {
            q: 'Was passiert, wenn das kostenlose Testmodell aufgebraucht ist?',
            a: 'Die Website sagt, Sie könnten Ihren eigenen Anbieter-Schlüssel eintragen oder zu einem lokalen Modell wechseln und ohne Kosten von Skales weiterarbeiten. Die Größe des Testkontingents wird in den hier gelesenen Quellen nicht genannt.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          '**Skales ist einen Blick wert, wenn Sie eine Agent-App auf eigenen Geräten wollen, in der Sie das Modell wählen, und Closed-Source-Software akzeptieren.**',
          'Auf dem Papier deckt es viel ab: Installer für fünf Plattformen, einen kostenlosen Tarif für kleine Unternehmen, lokale Datenspeicherung, Optionen für lokale Modelle, standardmäßig aktive Freigabeabfragen und eine aktive Release-Historie mit Version 12.9.65 vom 10. November 2026.',
          'Die Abstriche sind real. Der Code lässt sich nicht prüfen, der Windows-Installer ist unsigniert, Scout ist Beta, und die Zahlen des Herstellers widersprechen sich. PromptQuorum hat die App nicht getestet. Probieren Sie sie an einem unkritischen Ordner aus, lassen Sie die Freigabeabfragen an und prüfen Sie, welcher Anbieter Ihre Eingaben erhält, bevor Sie sich darauf verlassen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Skales-Website](https://skales.app) — Beschreibung des Herstellers zu Agent, Zielen, Studio, Scout und Sprache, geprüft am 17. November 2026.',
          '[Download-Seite](https://skales.app/download/) — Installer je Betriebssystem, Systemanforderungen und Hinweise zum ersten Start, geprüft am 17. November 2026.',
          '[Modelle-Seite](https://skales.app/models/) — Skales IQ, Skales Local und Anbieterliste, geprüft am 17. November 2026.',
          '[Mobil-Seite](https://skales.app/mobile/) — Android- und iOS-App, eigenständiger und gekoppelter Betrieb, geprüft am 17. November 2026.',
          '[Lizenzseite](https://skales.app/licence/) — End User Licence Agreement 1.3, geprüft am 17. November 2026.',
          '[Datenschutzhinweis](https://skales.app/privacy/) — Verantwortlicher, Datenwege, Skales IQ und Relay, geprüft am 17. November 2026.',
          '[Impressum](https://skales.app/imprint/) — Hersteller, Einzelunternehmen in Wien, geprüft am 17. November 2026.',
          '[Skales-GitHub-Repository](https://github.com/skalesapp/skales) — README, Lizenzgeschichte, Anlagedatum des Repositorys und Sternezahl, geprüft am 17. November 2026.',
          '[Release v12.9.65](https://github.com/skalesapp/skales/releases/tag/v12.9.65) — neueste Version, Datum und Installationsdateien, geprüft am 17. November 2026.',
          '[Skales im App Store](https://apps.apple.com/us/app/skales/id6763328966) — iOS-Eintrag, geprüft am 17. November 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Hermes-Agent-Rezension: Lokaler autonomer KI-Agent](/de/power-local-llm/hermes-agent-review) — ein vergleichbarer persönlicher Agent mit dauerhaftem Gedächtnis.',
          '[OpenClaw-Rezension](/de/power-local-llm/openclaw-review) — Orchestrierungs-Framework für Agent-Workflows.',
          '[OpenMausBot-Rezension](/de/power-local-llm/openmausbot-review) — Desktop-Chat-App, die ein Team aus KI-Bots betreibt.',
          '[Open-Interpreter-Rezension](/de/power-local-llm/open-interpreter-review) — lässt ein lokales LLM den Computer steuern und Code ausführen.',
          '[Verzeichnis lokaler KI-Software](/de/directory) — der vollständige Katalog lokaler KI-Tools.',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/skales-review-hero-es.webp',
    title: 'Reseña de Skales: agente de IA con tu clave o modelos locales',
    seoTitle: 'Reseña de Skales: agente de IA con tu clave o local',
    intro:
      'Skales es una app de escritorio y móvil que funciona como agente de IA: le das un objetivo, una tarea de programación o una petición de voz, y ejecuta los pasos con sus propias herramientas, pidiendo aprobación antes de las acciones arriesgadas. La crea Mario Simic, autónomo en Viena, Austria. Esta reseña se basa en el sitio web del creador, el repositorio de distribución en GitHub, las páginas de licencia y privacidad y los archivos de la versión, comprobados el 17 de noviembre de 2026. PromptQuorum no ha instalado ni probado la app.',
    metaDescription:
      'Skales es una app de agente de IA propietaria para Windows, Mac, Linux, Android e iOS. Reseña de instalación, modelos, privacidad y licencia.',
    twitterDescription:
      'Reseña de Skales: una app de agente para escritorio y móvil que guarda los datos en tu dispositivo y funciona con tu clave, un modelo de prueba o modelos locales. Licencia propietaria.',
    audience:
      'Personas que quieren un agente de IA personal en su ordenador y su móvil, autónomos y pequeñas empresas, y quien compare apps de agentes que puedan usar modelos locales',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Skales',
    targetKeywords: [
      'reseña de Skales',
      'Skales agente de IA',
      'Skales Local',
      'licencia de Skales',
      'privacidad de Skales',
      'Skales vs OpenClaw',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Skales es una app de agente de IA propietaria para Windows, macOS, Linux, Android e iOS que guarda sus datos en tu dispositivo y te deja elegir el modelo: tu propia clave de proveedor, un modelo de prueba gratuito o un modelo local.** Es gratis para uso privado, educación y empresas de hasta dos personas. El código fuente no está publicado, así que sus avisos de aprobación y sus afirmaciones de privacidad no pueden auditarse de forma independiente.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Skales y para quién es?',
        answer:
          'Skales es una app de agente de IA que planifica y ejecuta tareas de varios pasos en tu ordenador o móvil, con el modelo que elijas. Encaja con quien quiere un solo agente para chat, programación y objetivos en segundo plano y acepta software de código cerrado.',
        bullets: [
          'Versión 12.9.65, publicada el 10 de noviembre de 2026; sin aviso de proyecto abandonado.',
          'Instaladores: .exe, .dmg, .deb y AppImage, más apps en Google Play y App Store.',
          'Modelos: un modelo de prueba gratuito, tus propias claves de proveedor, Skales Local, Ollama o LM Studio.',
          'Licencia: Skales End User Licence Agreement 1.3, gratis hasta dos personas.',
          'Creador: un autónomo en Viena, Austria.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Resumen general', anchor: 'overview' },
      { label: 'Cómo conseguirla', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Funciones', anchor: 'features' },
      { label: 'Privacidad y flujo de datos', anchor: 'privacy' },
      { label: 'Licencia y coste', anchor: 'license' },
      { label: 'Para quién es', anchor: 'who-should-use' },
      { label: 'Lo que no pudimos verificar', anchor: 'who-should-not-use' },
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
          {
            type: 'one-sentence',
            text: 'Skales es una app de código cerrado para escritorio y móvil que dota a un modelo de IA de tu elección de herramientas, memoria, objetivos en segundo plano y avisos de aprobación.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en un asistente que puede abrir archivos, navegar, escribir código y seguir trabajando en un objetivo mientras haces otra cosa. Tu historial se queda en tu dispositivo, pero el modelo que elijas puede ser un servicio en la nube.',
          },
        ],
        items: [
          'Los objetivos se ejecutan en segundo plano a lo largo de muchos pasos; programación, voz, un estudio creativo y una app móvil forman parte del mismo producto.',
          'Las conversaciones, la memoria y los archivos se guardan en tu dispositivo; la comprobación de actualizaciones y algunos servicios opcionales son vías de datos aparte.',
          'El instalador de Windows aún no está firmado con certificado de código, según el creador; la versión de macOS se describe como firmada y notarizada.',
          'La propia app necesita unos 300 MB de RAM y ninguna GPU según el creador; los modelos locales necesitan más.',
          'PromptQuorum no ha probado la app. Las cifras de capacidades, herramientas e instalación son del propio creador.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Un agente con acceso a tus archivos, tu navegador, tu calendario y tu correo puede realizar acciones que no pretendías. Mantén activados los avisos de aprobación, empieza con una carpeta no sensible y comprueba qué recibe cada proveedor conectado.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Resumen general',
        content: [
          '**Skales es un marco de agente: una app de escritorio y móvil que dota a un modelo de IA de herramientas, memoria, planificación y avisos de aprobación.**',
          `Skales la crea Mario Simic, que según el aviso legal opera como autónomo bajo el nombre Skales en Viena, Austria. El repositorio de GitHub se creó el 8 de marzo de 2026 y muestra ${ST.es('skales')} estrellas. La versión 12.9.65 es la más reciente, publicada el 10 de noviembre de 2026, de modo que el desarrollo continúa y no se aplica ningún aviso de proyecto abandonado.`,
          'Según el creador, escribes un objetivo con /goal y Skales planifica los pasos y trabaja en ellos en segundo plano. Otras partes que citan el sitio y el README son un modo de código para trabajar dentro de una carpeta, un estudio para imágenes, vídeo y diseño, la superficie de voz Iris con una palabra de activación que se ejecuta en el dispositivo, un Desktop Buddy en tu pantalla y Scout (beta), agentes de larga duración que pueden recibir opcionalmente una máquina virtual propia.',
          'Skales Mobile es una app aparte para Android e iOS. El creador dice que funciona por sí sola o se empareja con el escritorio mediante un relé cifrado de extremo a extremo. El sitio describe además servidores MCP, importación de Agent Skills y un DevKit que es un repositorio aparte con licencia MIT.',
          'Son descripciones del creador. PromptQuorum no ha ejecutado Skales y no ha medido su fiabilidad, velocidad ni calidad de resultados.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo conseguirla',
        content: [
          '**Skales se instala como una app normal: instaladores por sistema operativo desde la página de descargas del creador, sin terminal.**',
          'El creador dice que la compilación de Windows no está firmada con certificado de código, por lo que Windows SmartScreen muestra un aviso una sola vez. La de macOS se describe como firmada con un Apple Developer ID y notarizada. La versión v12.9.65 en GitHub lista los mismos tipos de instalador que la página de descargas.',
        ],
        columns: ['Plataforma', 'Cómo conseguirla'],
        rows: [
          { 'Plataforma': '[Sitio web](https://skales.app)', 'Cómo conseguirla': 'Sitio oficial con descargas y documentación' },
          { 'Plataforma': '[Windows](https://skales.app/download/)', 'Cómo conseguirla': 'Instalador (.exe), Windows 10/11 de 64 bits; versión Arm' },
          { 'Plataforma': '[macOS](https://skales.app/download/)', 'Cómo conseguirla': 'DMG para Apple Silicon o Intel, macOS 11+' },
          { 'Plataforma': '[Linux](https://skales.app/download/)', 'Cómo conseguirla': '.deb (Debian, Ubuntu, Mint) o AppImage' },
          { 'Plataforma': '[Android](https://play.google.com/store/apps/details?id=app.skales.mobile)', 'Cómo conseguirla': 'Google Play, Android 10+' },
          { 'Plataforma': '[iOS](https://apps.apple.com/us/app/skales/id6763328966)', 'Cómo conseguirla': 'App Store, iOS 16+' },
          { 'Plataforma': '[Versiones en GitHub](https://github.com/skalesapp/skales/releases)', 'Cómo conseguirla': 'Archivos de versión, registro de cambios, guías' },
          { 'Plataforma': '[Política de privacidad](https://skales.app/privacy/)', 'Cómo conseguirla': 'Aviso de privacidad, actualizado el 14 de septiembre de 2026' },
        ],
        note: 'La app móvil funciona sola o emparejada con el escritorio. La máquina virtual de un scout necesita compatibilidad de virtualización en el ordenador.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**Según las cifras del creador, la app en sí es ligera, mientras que las necesidades de los modelos y de Scout van aparte.** Los requisitos de hardware de los modelos locales dependen del modelo que elijas y no se probaron.',
        ],
        columns: ['Elemento', 'Cifra indicada'],
        rows: [
          { 'Elemento': 'RAM en uso', 'Cifra indicada': 'Unos 300 MB en uso normal (página de descargas)' },
          { 'Elemento': 'GPU', 'Cifra indicada': 'No necesaria para la app (página de descargas)' },
          { 'Elemento': 'Sistema operativo', 'Cifra indicada': 'Windows 10/11 de 64 bits; macOS 11+; Linux x64' },
          { 'Elemento': 'Móvil', 'Cifra indicada': 'Android 10+; iOS 16+' },
          { 'Elemento': 'Máquina virtual de Scout', 'Cifra indicada': 'Unas 2 CPU, 2 GB de memoria, 12 GB de disco' },
          { 'Elemento': 'Red', 'Cifra indicada': 'Los proveedores en la nube necesitan internet; los locales, no' },
        ],
        note: 'La máquina virtual de Scout necesita además compatibilidad de virtualización; sin ella, un scout se ejecuta en el equipo anfitrión y pregunta antes.',
      },
      features: {
        id: 'features',
        title: 'Funciones',
        content: [
          '**Skales reúne en una app un ejecutor de objetivos, herramientas de programación, voz, un estudio creativo y elección de modelo.** Todo lo que sigue son afirmaciones del creador tomadas del sitio y del README.',
        ],
        items: [
          'Objetivos: /goal inicia trabajo de varios pasos que continúa en segundo plano, con programaciones y avisos de aprobación activados por defecto.',
          'El modo de código y la ventana Skales Code vinculan un chat a una carpeta, con modos Plan, Code y Auto, revisión de cambios bloque por bloque y git dentro de la ventana.',
          'Elección de modelo: la prueba Skales IQ, tus propias claves de muchos proveedores, inicio de sesión con una suscripción de ChatGPT, Ollama, LM Studio, KoboldCpp, vLLM y endpoints propios.',
          'Skales Local: un servidor de inferencia integrado con un catálogo seleccionado de modelos de texto, visión, voz e imagen que se ejecutan en tu hardware.',
          'Studio: imágenes, vídeo, voz, música y borradores de diseño, mediante servicios en la nube o un ComfyUI local.',
          'Superficie de voz Iris: palabra de activación en el dispositivo, con las mismas herramientas que un turno de chat.',
          'Scout (beta): agentes de larga duración que pueden ejecutarse en su propia máquina virtual, que puedes observar y de la que puedes tomar el control.',
          'Integraciones: WordPress, calendarios, correo, Notion, GitHub, Telegram, Discord, WhatsApp, Slack, Signal, Home Assistant, servidores MCP y Agent Skills (SKILL.md).',
          'Extras: complementos de Office, una extensión de Chrome y un importador de datos de ChatGPT, Claude, OpenClaw y Hermes Agent.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y flujo de datos',
        content: [
          '**Según el aviso de privacidad, las conversaciones, los archivos, la memoria y los ajustes se quedan en tu dispositivo, y varios servicios opcionales son vías de datos aparte.**',
          'El responsable que nombra el aviso es Mario Simic, que opera bajo el nombre Skales, en Viena. El aviso describe Skales Desktop y Mobile como programas instalados, no como un servicio en la nube. En el escritorio, las claves de API están en un archivo de ajustes de tu carpeta de datos, protegido por los permisos de archivo; en Android e iOS están en el almacenamiento seguro del sistema operativo.',
          'Lo que sí sale del dispositivo: la comprobación de actualizaciones (cada cuatro horas en el escritorio) envía el nombre del programa, la versión, el sistema operativo, la arquitectura, el identificador de compilación y el resultado de una comprobación de integridad, y los informes de errores solo salen cuando tú los envías. Las estadísticas de uso y el feed público Discover son opcionales y están desactivados por defecto. El relé que se usa para emparejar el móvil cifra los mensajes de extremo a extremo, pero puede ver nombres e identificadores de dispositivo, horas de conexión y tamaños de mensaje.',
          'La prueba Skales IQ es la única vía de modelo que pasa por el creador. El aviso dice que guarda tu dirección de correo y identificadores con hash, reenvía las peticiones a OpenRouter, Inc., en Estados Unidos, con una instrucción de cero retención de datos, y no guarda prompts ni respuestas. Con tu propia clave, las peticiones van de tu dispositivo directamente a ese proveedor.',
          'El README añade un Modo de privacidad que mantiene la memoria fuera de los prompts enviados a modelos en la nube. PromptQuorum no inspeccionó el tráfico de red y no ha verificado ninguna de estas afirmaciones.',
        ],
      },
      license: {
        id: 'license',
        title: 'Licencia y coste',
        content: [
          '**Skales es software propietario bajo el Skales End User Licence Agreement, gratis para uso privado, educación y empresas de hasta dos personas.**',
          'La versión 1.3 del acuerdo, del 9 de noviembre de 2026, dice que Skales no es de código abierto ni de código disponible. Los equipos más grandes, las empresas y los organismos públicos necesitan una licencia comercial por escrito tras 30 días de evaluación, y el alojamiento o la marca blanca requieren un acuerdo aparte. Según el README, las versiones hasta la 12.9.27 se suministraron bajo la Business Source License 1.1.',
          'Las páginas de licencia no publican precio para las licencias comerciales. Los costes del modelo van aparte: pagas a tu propio proveedor o usas la prueba gratuita Skales IQ, cuya cuota no se indica en las fuentes leídas aquí.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        content: [
          '**Skales encaja con quien quiere un agente en sus propios dispositivos y elegir el modelo, incluido uno local.**',
        ],
        items: [
          'Personas que quieren un solo agente para chat, programación y objetivos en segundo plano en escritorio y móvil.',
          'Autónomos y empresas de hasta dos personas, que pueden usarlo comercialmente según la licencia.',
          'Usuarios de otras herramientas de agentes que quieren importar su historial; el README menciona ChatGPT, Claude, OpenClaw y Hermes Agent.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        content: [
          '**Skales no encaja bien en algunas situaciones y varios detalles siguen sin verificar.**',
        ],
        items: [
          'No encaja: quien necesite código abierto o una auditoría independiente del código; no hay código publicado.',
          'No encaja: empresas de más de dos personas sin licencia comercial.',
          'Sin verificar: las cifras del propio creador no coinciden. Los proveedores son 15+ en el README, 26 en la descripción del repositorio y 29 en el sitio; las herramientas integradas son 400+ en el sitio y 260+ en el README.',
          'Sin verificar: la firma y notarización en macOS y el resultado del análisis antivirus de la página de descargas son afirmaciones del creador; el instalador de Windows no está firmado.',
          'Sin verificar: Scout está marcado como beta y no se probó el aislamiento de su máquina virtual.',
          'Sin verificar: los avisos de aprobación, el sandbox de archivos y las afirmaciones de privacidad no se probaron, y al ser código cerrado no pueden comprobarse en el código.',
          'Sin verificar: la ficha de Google Play solo se muestra con JavaScript y no se leyó; la ficha de App Store solo se vio por su título.',
          'Sin verificar: las cifras de instalaciones, países y descargas de la página de inicio, y si los modelos de Skales Local bastan para trabajo de agente; no se ejecutaron pruebas comparativas.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Skales frente a las alternativas',
        itemHeadings: true,
        content: [
          '**Skales se sitúa entre los asistentes personales y los agentes autónomos. PromptQuorum no lo ha comparado en la práctica con las herramientas siguientes.** Las notas proceden de sus fichas del directorio.',
        ],
        columns: ['Herramienta', 'Según el directorio'],
        rows: [
          { 'Herramienta': 'Skales', 'Según el directorio': 'Propietario, gratis hasta dos personas; Windows, Mac, Linux, iOS, Android' },
          { 'Herramienta': '[Hermes Agent](/es/power-local-llm/hermes-agent-review)', 'Según el directorio': 'MIT; agente personal que se automejora, con memoria persistente' },
          { 'Herramienta': '[OpenClaw](/es/power-local-llm/openclaw-review)', 'Según el directorio': 'MIT; marco de orquestación para flujos de agentes' },
          { 'Herramienta': '[OpenMausBot](/es/power-local-llm/openmausbot-review)', 'Según el directorio': 'Apache 2.0; app de chat que ejecuta un equipo de bots sobre CLI de agentes' },
          { 'Herramienta': '[Open Interpreter](/es/power-local-llm/open-interpreter-review)', 'Según el directorio': 'Apache 2.0; deja que un LLM local controle el ordenador y ejecute código' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis Skales?',
            a: 'Sí, para uso privado, educación y empresas de hasta dos personas. Los equipos más grandes necesitan una licencia por escrito, cuyo precio no se publica. Además pagas a tu proveedor de modelos, salvo que uses la prueba gratuita Skales IQ o un modelo local.',
          },
          {
            q: '¿Puede Skales funcionar sin conexión con modelos locales?',
            a: 'El creador dice que sí. Skales Local se entrega con la app y ejecuta modelos, reconocimiento de voz y síntesis de voz en tu hardware, y se pueden conectar Ollama o LM Studio. La página móvil dice que la app del teléfono también puede ejecutar un modelo en el dispositivo. PromptQuorum no probó nada de esto.',
          },
          {
            q: '¿Tiene Skales una app móvil?',
            a: 'Sí, Skales Mobile en Google Play (Android 10+) y App Store (iOS 16+). Funciona sola con herramientas nativas o se empareja con el escritorio mediante un código QR, tras lo cual, según el sitio, el teléfono accede al conjunto de herramientas del escritorio.',
          },
          {
            q: '¿Es Skales de código abierto?',
            a: 'No. El creador dice que no es de código abierto ni de código disponible, y el repositorio de GitHub solo distribuye versiones, un registro de cambios y guías de instalación. El DevKit y el complemento de WordPress son repositorios aparte con licencia MIT.',
          },
          {
            q: '¿Qué pasa cuando se agota el modelo de prueba gratuito?',
            a: 'El sitio dice que puedes pegar tu propia clave de proveedor o cambiar a un modelo local y seguir sin coste por parte de Skales. El tamaño de la cuota de prueba no se indica en las fuentes leídas aquí.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          '**Skales merece una mirada si quieres una app de agente en tus propios dispositivos donde elijas el modelo, y aceptas software de código cerrado.**',
          'Sobre el papel cubre mucho: instaladores para cinco plataformas, un nivel gratuito para pequeñas empresas, almacenamiento local de datos, opciones de modelos locales, avisos de aprobación activados por defecto y un historial de versiones activo, con la 12.9.65 del 10 de noviembre de 2026.',
          'Las contrapartidas son reales. El código no puede auditarse, el instalador de Windows no está firmado, Scout está en beta y las cifras del propio creador no coinciden. PromptQuorum no ha probado la app. Pruébala en una carpeta no sensible, mantén activados los avisos de aprobación y comprueba qué proveedor recibe tus prompts antes de depender de ella.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Sitio web de Skales](https://skales.app) — descripción del creador sobre el agente, los objetivos, Studio, Scout y la voz, comprobado el 17 de noviembre de 2026.',
          '[Página de descargas](https://skales.app/download/) — instaladores por sistema operativo, requisitos del sistema y notas del primer arranque, comprobado el 17 de noviembre de 2026.',
          '[Página de modelos](https://skales.app/models/) — Skales IQ, Skales Local y lista de proveedores, comprobado el 17 de noviembre de 2026.',
          '[Página móvil](https://skales.app/mobile/) — app para Android e iOS, modos independiente y emparejado, comprobado el 17 de noviembre de 2026.',
          '[Página de licencia](https://skales.app/licence/) — End User Licence Agreement 1.3, comprobado el 17 de noviembre de 2026.',
          '[Aviso de privacidad](https://skales.app/privacy/) — responsable, vías de datos, Skales IQ y relé, comprobado el 17 de noviembre de 2026.',
          '[Aviso legal](https://skales.app/imprint/) — creador, autónomo en Viena, comprobado el 17 de noviembre de 2026.',
          '[Repositorio de Skales en GitHub](https://github.com/skalesapp/skales) — README, historial de licencias, fecha de creación del repositorio y número de estrellas, comprobado el 17 de noviembre de 2026.',
          '[Versión v12.9.65](https://github.com/skalesapp/skales/releases/tag/v12.9.65) — última versión, fecha y archivos de instalación, comprobado el 17 de noviembre de 2026.',
          '[Skales en App Store](https://apps.apple.com/us/app/skales/id6763328966) — ficha de iOS, comprobado el 17 de noviembre de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Hermes Agent: agente de IA local autónomo](/es/power-local-llm/hermes-agent-review) — un agente personal comparable con memoria persistente.',
          '[Reseña de OpenClaw](/es/power-local-llm/openclaw-review) — marco de orquestación para flujos de agentes.',
          '[Reseña de OpenMausBot](/es/power-local-llm/openmausbot-review) — app de chat de escritorio que ejecuta un equipo de bots de IA.',
          '[Reseña de Open Interpreter](/es/power-local-llm/open-interpreter-review) — deja que un LLM local controle el ordenador y ejecute código.',
          '[Directorio de software de IA local](/es/directory) — el catálogo completo de herramientas de IA local.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/skales-review-hero-fr.webp',
    title: 'Test de Skales : agent IA avec votre clé ou des modèles locaux',
    seoTitle: 'Test de Skales : agent IA avec votre clé ou en local',
    intro:
      'Skales est une application de bureau et mobile qui fonctionne comme un agent IA : vous lui donnez un objectif, une tâche de programmation ou une demande vocale, et il exécute les étapes avec ses propres outils, en demandant votre accord avant les actions risquées. Elle est éditée par Mario Simic, entrepreneur individuel à Vienne, en Autriche. Ce test s\'appuie sur le site de l\'éditeur, le dépôt de distribution GitHub, les pages de licence et de confidentialité et les fichiers de la version, vérifiés le 17 novembre 2026. PromptQuorum n\'a ni installé ni testé l\'application.',
    metaDescription:
      'Skales est une application d\'agent IA propriétaire pour Windows, Mac, Linux, Android et iOS. Test de l\'installation, des modèles et de la licence.',
    twitterDescription:
      'Test de Skales : une application d\'agent pour ordinateur et mobile qui stocke les données sur votre appareil et fonctionne avec votre clé, un modèle d\'essai ou des modèles locaux. Licence propriétaire.',
    audience:
      'Les personnes qui veulent un agent IA personnel sur leur ordinateur et leur téléphone, les indépendants et petites entreprises, et ceux qui comparent des applications d\'agents compatibles avec des modèles locaux',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Skales',
    targetKeywords: [
      'test Skales',
      'Skales agent IA',
      'Skales Local',
      'licence Skales',
      'confidentialité Skales',
      'Skales vs OpenClaw',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Skales est une application d\'agent IA propriétaire pour Windows, macOS, Linux, Android et iOS qui garde ses données sur votre appareil et vous laisse choisir le modèle : votre propre clé de fournisseur, un modèle d\'essai gratuit ou un modèle local.** Elle est gratuite pour un usage privé, l\'enseignement et les entreprises de deux personnes au plus. Le code source n\'est pas publié : ses demandes d\'approbation et ses déclarations de confidentialité ne peuvent donc pas être auditées de façon indépendante.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que Skales et à qui s\'adresse-t-il ?',
        answer:
          'Skales est une application d\'agent IA qui planifie et exécute des tâches en plusieurs étapes sur votre ordinateur ou votre téléphone, avec le modèle de votre choix. Elle convient à ceux qui veulent un seul agent pour le chat, la programmation et les objectifs en arrière-plan et qui acceptent un logiciel à code fermé.',
        bullets: [
          'Version 12.9.65, publiée le 10 novembre 2026 ; pas d\'avertissement de projet abandonné.',
          'Installateurs : .exe, .dmg, .deb et AppImage, plus des applications sur Google Play et l\'App Store.',
          'Modèles : un modèle d\'essai gratuit, vos propres clés de fournisseur, Skales Local, Ollama ou LM Studio.',
          'Licence : Skales End User Licence Agreement 1.3, gratuite jusqu\'à deux personnes.',
          'Éditeur : une entreprise individuelle à Vienne, en Autriche.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Points clés', anchor: 'tldr' },
      { label: 'Vue d\'ensemble', anchor: 'overview' },
      { label: 'Comment l\'obtenir', anchor: 'get-it' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Fonctionnalités', anchor: 'features' },
      { label: 'Confidentialité et flux de données', anchor: 'privacy' },
      { label: 'Licence et coût', anchor: 'license' },
      { label: 'À qui s\'adresse-t-il', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
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
          {
            type: 'one-sentence',
            text: 'Skales est une application à code fermé pour ordinateur et téléphone qui dote un modèle d\'IA de votre choix d\'outils, de mémoire, d\'objectifs en arrière-plan et de demandes d\'approbation.',
          },
          {
            type: 'plain-terms',
            text: 'Imaginez un assistant capable d\'ouvrir des fichiers, de naviguer, d\'écrire du code et de continuer à travailler sur un objectif pendant que vous faites autre chose. Votre historique reste sur votre appareil, mais le modèle choisi peut être un service cloud.',
          },
        ],
        items: [
          'Les objectifs s\'exécutent en arrière-plan sur de nombreuses étapes ; programmation, voix, un studio créatif et une application mobile font partie du même produit.',
          'Conversations, mémoire et fichiers sont stockés sur votre appareil ; la vérification des mises à jour et quelques services optionnels sont des flux de données distincts.',
          'L\'installateur Windows n\'est pas encore signé par certificat de code, selon l\'éditeur ; la version macOS est décrite comme signée et notariée.',
          'L\'application elle-même demande environ 300 Mo de RAM et aucun GPU d\'après l\'éditeur ; les modèles locaux demandent davantage.',
          'PromptQuorum n\'a pas testé l\'application. Les chiffres de capacités, d\'outils et d\'installation sont ceux de l\'éditeur.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Un agent ayant accès à vos fichiers, votre navigateur, votre agenda et votre messagerie peut effectuer des actions que vous n\'aviez pas prévues. Gardez les demandes d\'approbation activées, commencez par un dossier non sensible et vérifiez ce que reçoit chaque fournisseur connecté.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Vue d\'ensemble',
        content: [
          '**Skales est un cadre d\'agent : une application de bureau et mobile qui dote un modèle d\'IA d\'outils, de mémoire, de planification et de demandes d\'approbation.**',
          `Skales est éditée par Mario Simic, qui exerce sous le nom Skales en entreprise individuelle à Vienne, en Autriche, d\'après les mentions légales. Le dépôt GitHub a été créé le 8 mars 2026 et affiche ${ST.fr('skales')} étoiles. La version 12.9.65 est la plus récente, publiée le 10 novembre 2026 : le développement se poursuit et aucun avertissement de projet abandonné ne s\'applique.`,
          'Selon l\'éditeur, vous saisissez un objectif avec /goal et Skales planifie les étapes et les traite en arrière-plan. D\'autres éléments cités sur le site et dans le README sont un mode Code pour travailler dans un dossier, un Studio pour les images, la vidéo et le design, la surface vocale Iris avec un mot d\'éveil exécuté sur l\'appareil, un Desktop Buddy à l\'écran et Scout (bêta), des agents de longue durée qui peuvent recevoir en option leur propre machine virtuelle.',
          'Skales Mobile est une application distincte pour Android et iOS. L\'éditeur indique qu\'elle fonctionne seule ou s\'appaire au bureau via un relais chiffré de bout en bout. Le site décrit aussi des serveurs MCP, l\'import d\'Agent Skills et un DevKit qui est un dépôt distinct sous licence MIT.',
          'Ce sont des descriptions de l\'éditeur. PromptQuorum n\'a pas exécuté Skales et n\'a mesuré ni sa fiabilité, ni sa vitesse, ni la qualité de ses résultats.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Comment l\'obtenir',
        content: [
          '**Skales s\'installe comme une application ordinaire : des installateurs par système depuis la page de téléchargement de l\'éditeur, sans terminal.**',
          'L\'éditeur indique que la version Windows n\'est pas signée par certificat de code, si bien que Windows SmartScreen affiche un avis une seule fois. La version macOS est décrite comme signée avec un Apple Developer ID et notariée. La version v12.9.65 sur GitHub liste les mêmes types d\'installateurs que la page de téléchargement.',
        ],
        columns: ['Plateforme', 'Comment l\'obtenir'],
        rows: [
          { 'Plateforme': '[Site web](https://skales.app)', 'Comment l\'obtenir': 'Site officiel avec téléchargements et docs' },
          { 'Plateforme': '[Windows](https://skales.app/download/)', 'Comment l\'obtenir': 'Installateur (.exe), Windows 10/11 64 bits ; version Arm' },
          { 'Plateforme': '[macOS](https://skales.app/download/)', 'Comment l\'obtenir': 'DMG pour Apple Silicon ou Intel, macOS 11+' },
          { 'Plateforme': '[Linux](https://skales.app/download/)', 'Comment l\'obtenir': '.deb (Debian, Ubuntu, Mint) ou AppImage' },
          { 'Plateforme': '[Android](https://play.google.com/store/apps/details?id=app.skales.mobile)', 'Comment l\'obtenir': 'Google Play, Android 10+' },
          { 'Plateforme': '[iOS](https://apps.apple.com/us/app/skales/id6763328966)', 'Comment l\'obtenir': 'App Store, iOS 16+' },
          { 'Plateforme': '[Versions GitHub](https://github.com/skalesapp/skales/releases)', 'Comment l\'obtenir': 'Fichiers de version, journal des modifications, guides' },
          { 'Plateforme': '[Politique de confidentialité](https://skales.app/privacy/)', 'Comment l\'obtenir': 'Avis de confidentialité, mis à jour le 14 septembre 2026' },
        ],
        note: 'L\'application mobile fonctionne seule ou appairée au bureau. La machine virtuelle d\'un scout demande la prise en charge de la virtualisation sur l\'ordinateur.',
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**D\'après l\'éditeur, l\'application elle-même est légère, tandis que les besoins des modèles et de Scout sont à part.** Les besoins matériels des modèles locaux dépendent du modèle choisi et n\'ont pas été testés.',
        ],
        columns: ['Élément', 'Valeur indiquée'],
        rows: [
          { 'Élément': 'RAM utilisée', 'Valeur indiquée': 'Environ 300 Mo en usage normal (page de téléchargement)' },
          { 'Élément': 'GPU', 'Valeur indiquée': 'Non requis pour l\'application (page de téléchargement)' },
          { 'Élément': 'Système', 'Valeur indiquée': 'Windows 10/11 64 bits ; macOS 11+ ; Linux x64' },
          { 'Élément': 'Téléphone', 'Valeur indiquée': 'Android 10+ ; iOS 16+' },
          { 'Élément': 'Machine virtuelle Scout', 'Valeur indiquée': 'Environ 2 CPU, 2 Go de mémoire, 12 Go de disque' },
          { 'Élément': 'Réseau', 'Valeur indiquée': 'Les fournisseurs cloud demandent internet ; les modèles locaux, non' },
        ],
        note: 'La machine virtuelle de Scout demande aussi la prise en charge de la virtualisation ; sans elle, un scout s\'exécute sur l\'hôte et demande d\'abord.',
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités',
        content: [
          '**Skales réunit dans une seule application un exécuteur d\'objectifs, des outils de programmation, la voix, un studio créatif et le choix du modèle.** Tout ce qui suit relève de déclarations de l\'éditeur tirées du site et du README.',
        ],
        items: [
          'Objectifs : /goal lance un travail en plusieurs étapes qui se poursuit en arrière-plan, avec des planifications et des demandes d\'approbation activées par défaut.',
          'Le mode Code et la fenêtre Skales Code lient une conversation à un dossier, avec les modes Plan, Code et Auto, une relecture des changements bloc par bloc et git dans la fenêtre.',
          'Choix du modèle : l\'essai Skales IQ, vos propres clés pour de nombreux fournisseurs, connexion avec un abonnement ChatGPT, Ollama, LM Studio, KoboldCpp, vLLM et points d\'accès personnalisés.',
          'Skales Local : un serveur d\'inférence intégré avec un catalogue sélectionné de modèles de texte, de vision, de voix et d\'image qui tournent sur votre matériel.',
          'Studio : images, vidéo, voix, musique et ébauches de design, via des services cloud ou un ComfyUI local.',
          'Surface vocale Iris : mot d\'éveil sur l\'appareil, avec les mêmes outils qu\'un tour de conversation.',
          'Scout (bêta) : des agents de longue durée qui peuvent tourner dans leur propre machine virtuelle, que vous pouvez observer et dont vous pouvez prendre la main.',
          'Intégrations : WordPress, agendas, e-mail, Notion, GitHub, Telegram, Discord, WhatsApp, Slack, Signal, Home Assistant, serveurs MCP et Agent Skills (SKILL.md).',
          'Extras : compléments Office, une extension Chrome et un outil d\'import des données de ChatGPT, Claude, OpenClaw et Hermes Agent.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et flux de données',
        content: [
          '**D\'après l\'avis de confidentialité, les conversations, fichiers, la mémoire et les réglages restent sur votre appareil, et plusieurs services optionnels sont des flux de données distincts.**',
          'Le responsable désigné dans l\'avis est Mario Simic, exerçant sous le nom Skales, à Vienne. L\'avis décrit Skales Desktop et Mobile comme des programmes installés, et non comme un service cloud. Sur le bureau, les clés d\'API se trouvent dans un fichier de réglages de votre dossier de données, protégé par les droits de fichier ; sur Android et iOS, elles sont dans le stockage sécurisé du système.',
          'Ce qui quitte l\'appareil : la vérification des mises à jour (toutes les quatre heures sur le bureau) envoie le nom du programme, la version, le système, l\'architecture, l\'identifiant de build et un résultat de contrôle d\'intégrité, et les rapports de bogues ne partent que si vous les envoyez. Les statistiques d\'usage et le fil public Discover sont optionnels et désactivés par défaut. Le relais utilisé pour appairer le téléphone chiffre les messages de bout en bout, mais il voit les noms et identifiants d\'appareils, les heures de connexion et la taille des messages.',
          'L\'essai Skales IQ est le seul chemin de modèle qui passe par l\'éditeur. L\'avis indique qu\'il stocke votre adresse e-mail et des identifiants hachés, transmet les requêtes à OpenRouter, Inc., aux États-Unis, avec une consigne de rétention zéro des données, et ne stocke ni les invites ni les réponses. Avec votre propre clé, les requêtes vont directement de votre appareil à ce fournisseur.',
          'Le README ajoute un mode Confidentialité qui tient la mémoire hors des invites envoyées aux modèles cloud. PromptQuorum n\'a pas inspecté le trafic réseau et n\'a vérifié aucune de ces déclarations.',
        ],
      },
      license: {
        id: 'license',
        title: 'Licence et coût',
        content: [
          '**Skales est un logiciel propriétaire sous le Skales End User Licence Agreement, gratuit pour un usage privé, l\'enseignement et les entreprises de deux personnes au plus.**',
          'La version 1.3 de l\'accord, datée du 9 novembre 2026, indique que Skales n\'est ni open source ni à code source disponible. Les équipes plus grandes, les entreprises et les organismes publics ont besoin d\'une licence commerciale écrite après 30 jours d\'évaluation, et l\'hébergement ou la marque blanche exigent un accord distinct. Selon le README, les versions jusqu\'à la 12.9.27 étaient fournies sous la Business Source License 1.1.',
          'Les pages de licence ne publient aucun prix pour les licences commerciales. Les coûts du modèle sont à part : vous payez votre propre fournisseur ou utilisez l\'essai gratuit Skales IQ, dont le quota n\'est pas indiqué dans les sources lues ici.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse-t-il',
        content: [
          '**Skales convient à ceux qui veulent un agent sur leurs propres appareils et choisir le modèle, y compris un modèle local.**',
        ],
        items: [
          'Les personnes qui veulent un seul agent pour le chat, la programmation et les objectifs en arrière-plan sur ordinateur et téléphone.',
          'Les indépendants et les entreprises de deux personnes au plus, qui peuvent l\'utiliser commercialement selon la licence.',
          'Les utilisateurs d\'autres outils d\'agents qui veulent importer leur historique ; le README cite ChatGPT, Claude, OpenClaw et Hermes Agent.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        content: [
          '**Skales convient mal dans certaines situations, et plusieurs détails restent non vérifiés.**',
        ],
        items: [
          'Ne convient pas : qui a besoin d\'un code open source ou d\'un audit indépendant du code ; aucun code source n\'est publié.',
          'Ne convient pas : les entreprises de plus de deux personnes sans licence commerciale.',
          'Non vérifié : les chiffres de l\'éditeur se contredisent. Les fournisseurs sont 15+ dans le README, 26 dans la description du dépôt et 29 sur le site ; les outils intégrés sont 400+ sur le site et 260+ dans le README.',
          'Non vérifié : la signature et la notarisation macOS ainsi que le résultat de l\'analyse antivirus de la page de téléchargement sont des déclarations de l\'éditeur ; l\'installateur Windows n\'est pas signé.',
          'Non vérifié : Scout est marqué bêta et l\'isolation de sa machine virtuelle n\'a pas été testée.',
          'Non vérifié : les demandes d\'approbation, le bac à sable de fichiers et les déclarations de confidentialité n\'ont pas été testés, et le code fermé empêche de les vérifier dans le code.',
          'Non vérifié : la fiche Google Play ne s\'affiche qu\'avec JavaScript et n\'a pas été lue ; la fiche de l\'App Store n\'a été vue que par son titre.',
          'Non vérifié : les chiffres d\'installations, de pays et de téléchargements de la page d\'accueil, et la capacité des modèles de Skales Local à suffire pour un travail d\'agent ; aucun test comparatif n\'a été mené.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Skales face aux alternatives',
        itemHeadings: true,
        content: [
          '**Skales se situe entre les assistants personnels et les agents autonomes. PromptQuorum ne l\'a pas comparé en pratique aux outils ci-dessous.** Les notes proviennent de leurs fiches de l\'annuaire.',
        ],
        columns: ['Outil', 'Selon l\'annuaire'],
        rows: [
          { 'Outil': 'Skales', 'Selon l\'annuaire': 'Propriétaire, gratuit jusqu\'à deux personnes ; Windows, Mac, Linux, iOS, Android' },
          { 'Outil': '[Hermes Agent](/fr/power-local-llm/hermes-agent-review)', 'Selon l\'annuaire': 'MIT ; agent personnel auto-améliorant à mémoire persistante' },
          { 'Outil': '[OpenClaw](/fr/power-local-llm/openclaw-review)', 'Selon l\'annuaire': 'MIT ; cadre d\'orchestration pour flux d\'agents' },
          { 'Outil': '[OpenMausBot](/fr/power-local-llm/openmausbot-review)', 'Selon l\'annuaire': 'Apache 2.0 ; application de chat faisant tourner une équipe de bots sur des CLI d\'agents' },
          { 'Outil': '[Open Interpreter](/fr/power-local-llm/open-interpreter-review)', 'Selon l\'annuaire': 'Apache 2.0 ; laisse un LLM local piloter l\'ordinateur et exécuter du code' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Skales est-il gratuit ?',
            a: 'Oui pour un usage privé, l\'enseignement et les entreprises de deux personnes au plus. Les équipes plus grandes ont besoin d\'une licence écrite dont le prix n\'est pas publié. Vous payez en plus votre fournisseur de modèle, sauf si vous utilisez l\'essai gratuit Skales IQ ou un modèle local.',
          },
          {
            q: 'Skales peut-il fonctionner hors ligne avec des modèles locaux ?',
            a: 'L\'éditeur dit que oui. Skales Local est livré avec l\'application et exécute modèles, reconnaissance vocale et synthèse vocale sur votre matériel, et Ollama ou LM Studio peuvent être connectés. La page mobile indique que l\'application du téléphone peut aussi exécuter un modèle sur l\'appareil. PromptQuorum n\'a rien testé de cela.',
          },
          {
            q: 'Skales a-t-il une application mobile ?',
            a: 'Oui, Skales Mobile sur Google Play (Android 10+) et l\'App Store (iOS 16+). Elle fonctionne seule avec des outils natifs ou s\'appaire au bureau par code QR, après quoi, selon le site, le téléphone accède à l\'ensemble d\'outils du bureau.',
          },
          {
            q: 'Skales est-il open source ?',
            a: 'Non. L\'éditeur indique qu\'il n\'est ni open source ni à code source disponible, et le dépôt GitHub ne distribue que des versions, un journal des modifications et des guides d\'installation. Le DevKit et l\'extension WordPress sont des dépôts distincts sous licence MIT.',
          },
          {
            q: 'Que se passe-t-il quand le modèle d\'essai gratuit est épuisé ?',
            a: 'Le site indique que vous pouvez coller votre propre clé de fournisseur ou passer à un modèle local et continuer sans frais de la part de Skales. La taille du quota d\'essai n\'est pas indiquée dans les sources lues ici.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          '**Skales mérite un coup d\'œil si vous voulez une application d\'agent sur vos propres appareils où vous choisissez le modèle, et acceptez un logiciel à code fermé.**',
          'Sur le papier, il couvre beaucoup : des installateurs pour cinq plateformes, une offre gratuite pour les petites entreprises, un stockage local des données, des options de modèles locaux, des demandes d\'approbation activées par défaut et un historique de versions actif, avec la 12.9.65 du 10 novembre 2026.',
          'Les compromis sont réels. Le code ne peut pas être audité, l\'installateur Windows n\'est pas signé, Scout est en bêta et les chiffres de l\'éditeur se contredisent. PromptQuorum n\'a pas testé l\'application. Essayez-la sur un dossier non sensible, gardez les demandes d\'approbation activées et vérifiez quel fournisseur reçoit vos invites avant de vous y fier.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Site web de Skales](https://skales.app) — description de l\'éditeur de l\'agent, des objectifs, de Studio, de Scout et de la voix, vérifiée le 17 novembre 2026.',
          '[Page de téléchargement](https://skales.app/download/) — installateurs par système, configuration requise et notes de premier lancement, vérifiés le 17 novembre 2026.',
          '[Page des modèles](https://skales.app/models/) — Skales IQ, Skales Local et liste des fournisseurs, vérifiés le 17 novembre 2026.',
          '[Page mobile](https://skales.app/mobile/) — application Android et iOS, modes autonome et appairé, vérifiés le 17 novembre 2026.',
          '[Page de licence](https://skales.app/licence/) — End User Licence Agreement 1.3, vérifié le 17 novembre 2026.',
          '[Avis de confidentialité](https://skales.app/privacy/) — responsable, flux de données, Skales IQ et relais, vérifiés le 17 novembre 2026.',
          '[Mentions légales](https://skales.app/imprint/) — éditeur, entreprise individuelle à Vienne, vérifiées le 17 novembre 2026.',
          '[Dépôt GitHub de Skales](https://github.com/skalesapp/skales) — README, historique des licences, date de création du dépôt et nombre d\'étoiles, vérifiés le 17 novembre 2026.',
          '[Version v12.9.65](https://github.com/skalesapp/skales/releases/tag/v12.9.65) — dernière version, date et fichiers d\'installation, vérifiés le 17 novembre 2026.',
          '[Skales sur l\'App Store](https://apps.apple.com/us/app/skales/id6763328966) — fiche iOS, vérifiée le 17 novembre 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Hermes Agent : agent IA autonome local](/fr/power-local-llm/hermes-agent-review) — un agent personnel comparable à mémoire persistante.',
          '[Test d\'OpenClaw](/fr/power-local-llm/openclaw-review) — cadre d\'orchestration pour flux d\'agents.',
          '[Test d\'OpenMausBot](/fr/power-local-llm/openmausbot-review) — application de chat de bureau qui fait tourner une équipe de bots IA.',
          '[Test d\'Open Interpreter](/fr/power-local-llm/open-interpreter-review) — laisse un LLM local piloter l\'ordinateur et exécuter du code.',
          '[Annuaire des logiciels d\'IA locale](/fr/directory) — le catalogue complet des outils d\'IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/skales-review-hero-ja.webp',
    title: 'Skales レビュー：自分のキーやローカルモデルで使えるAIエージェントアプリ',
    seoTitle: 'Skalesレビュー：自分のキーやローカルで使うAIエージェント',
    intro:
      'Skalesは、AIエージェントとして動くデスクトップ／スマートフォン用アプリです。目標、コーディング作業、音声での依頼を伝えると、独自のツールで手順を実行し、リスクのある操作の前には承認を求めます。開発者はオーストリア・ウィーンの個人事業主Mario Simic氏です。このレビューは、開発元のウェブサイト、GitHubの配布用リポジトリ、ライセンスとプライバシーのページ、リリースファイルに基づき、2026年11月17日に確認しました。PromptQuorumはこのアプリをインストールも検証もしていません。',
    metaDescription:
      'Skalesは独自ライセンスのAIエージェントアプリ（Windows・Mac・Linux・Android・iOS）。導入、モデル、プライバシー、ライセンスを解説。2人まで無料。',
    twitterDescription:
      'Skalesレビュー：データを端末内に保存し、自分のキー、試用モデル、ローカルモデルで動くデスクトップ／スマホ用エージェントアプリ。独自ライセンス。',
    audience:
      '自分のパソコンとスマートフォンでパーソナルAIエージェントを使いたい方、フリーランスや小規模事業者、ローカルモデル対応のエージェントアプリを比較している方',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Skales',
    targetKeywords: [
      'Skales レビュー',
      'Skales AIエージェント',
      'Skales Local',
      'Skales ライセンス',
      'Skales プライバシー',
      'Skales OpenClaw 比較',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Skalesは、Windows、macOS、Linux、Android、iOS向けの独自ライセンスのAIエージェントアプリで、データを端末内に保持し、モデルは自分のプロバイダーキー、無料の試用モデル、ローカルモデルから選べます。** 個人利用、教育、2人までの事業者は無料です。ソースコードは公開されていないため、承認ゲートやプライバシーに関する説明を第三者が検証することはできません。',
    quickAnswerTop: {
      ja: {
        question: 'Skalesとは何で、誰に向いていますか？',
        answer:
          'Skalesは、選んだモデルを使って、パソコンやスマートフォン上で複数ステップの作業を計画・実行するAIエージェントアプリです。チャット、コーディング、バックグラウンドの目標処理を1つのエージェントで行いたく、クローズドソースを許容できる方に向いています。',
        bullets: [
          'バージョン12.9.65、2026年11月10日リリース。放置プロジェクトの警告なし。',
          'インストーラー：.exe、.dmg、.deb、AppImage。Google PlayとApp Storeのアプリもあります。',
          'モデル：無料の試用モデル、自分のプロバイダーキー、Skales Local、Ollama、LM Studio。',
          'ライセンス：Skales End User Licence Agreement 1.3。2人まで無料。',
          '提供元：オーストリア・ウィーンの個人事業。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '概要', anchor: 'overview' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '動作要件', anchor: 'requirements' },
      { label: '機能', anchor: 'features' },
      { label: 'プライバシーとデータの流れ', anchor: 'privacy' },
      { label: 'ライセンスと費用', anchor: 'license' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかったこと', anchor: 'who-should-not-use' },
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
          {
            type: 'one-sentence',
            text: 'Skalesは、選んだAIモデルにツール、メモリ、バックグラウンドの目標処理、承認の確認を加える、クローズドソースのデスクトップ／スマートフォン用アプリです。',
          },
          {
            type: 'plain-terms',
            text: 'ファイルを開き、ウェブを閲覧し、コードを書き、あなたが別の作業をしている間も目標に取り組み続けるアシスタントだと考えてください。履歴は端末内に残りますが、選んだモデルはクラウドサービスの場合があります。',
          },
        ],
        items: [
          '目標は多数のステップにわたりバックグラウンドで実行されます。コーディング、音声、クリエイティブなStudio、スマートフォンアプリも同じ製品に含まれます。',
          '会話、メモリ、ファイルは端末内に保存されます。更新確認といくつかの任意サービスは別のデータ経路です。',
          '開発元によると、Windows版インストーラーはまだコード署名されていません。macOS版は署名・公証済みと説明されています。',
          '開発元の数値では、アプリ本体は約300 MBのRAMで、GPUは不要です。ローカルモデルはそれ以上を必要とします。',
          'PromptQuorumはこのアプリを検証していません。機能、ツール数、インストールに関する数値は開発元のものです。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ファイル、ブラウザー、カレンダー、メールにアクセスできるエージェントは、意図しない操作を行う可能性があります。承認の確認をオンにしたまま、機密性のないフォルダーから始め、接続した各プロバイダーが何を受け取るかを確認してください。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概要',
        content: [
          '**Skalesはエージェントのハーネスです。AIモデルにツール、メモリ、計画、承認の確認を加えるデスクトップ／スマートフォン用アプリです。**',
          `Skalesを開発しているのはMario Simic氏で、法的表示（Imprint）によると、ウィーン（オーストリア）でSkalesの名で個人事業を営んでいます。GitHubリポジトリは2026年3月8日に作成され、スターは${ST.ja('skales')}個です。バージョン12.9.65が最新リリースで、2026年11月10日に公開されたため、開発は継続しており、放置プロジェクトの警告は該当しません。`,
          '開発元によると、/goalで目標を入力すると、Skalesが手順を計画してバックグラウンドで処理します。サイトとREADMEには、フォルダー内で作業するCodeモード、画像・動画・デザインのためのStudio、端末上で動作するウェイクワード付きの音声インターフェースIris、画面上のDesktop Buddy、そして専用の仮想マシンを任意で持てる長期稼働エージェントScout（ベータ）が挙げられています。',
          'Skales MobileはAndroidとiOS向けの別アプリです。開発元によると、単体でも動作し、エンドツーエンド暗号化のリレー経由でデスクトップとペアリングもできます。サイトにはMCPサーバー、Agent Skillsのインポート、別リポジトリでMITライセンスのDevKitも記載されています。',
          'これらは開発元の説明です。PromptQuorumはSkalesを実行しておらず、信頼性、速度、出力品質を測定していません。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Skalesは通常のアプリと同じようにインストールできます。開発元のダウンロードページにOSごとのインストーラーがあり、ターミナルは不要です。**',
          '開発元によると、Windows版はコード署名されていないため、Windows SmartScreenの通知が一度表示されます。macOS版はApple Developer IDで署名され、公証済みと説明されています。GitHubのリリースv12.9.65には、ダウンロードページと同じ種類のインストーラーが掲載されています。',
        ],
        columns: ['プラットフォーム', '入手方法'],
        rows: [
          { 'プラットフォーム': '[ウェブサイト](https://skales.app)', '入手方法': '公式サイト。ダウンロードとドキュメント' },
          { 'プラットフォーム': '[Windows](https://skales.app/download/)', '入手方法': 'インストーラー（.exe）。Windows 10/11 64ビット、Arm版あり' },
          { 'プラットフォーム': '[macOS](https://skales.app/download/)', '入手方法': 'Apple Silicon／Intel用DMG、macOS 11以降' },
          { 'プラットフォーム': '[Linux](https://skales.app/download/)', '入手方法': '.deb（Debian、Ubuntu、Mint）またはAppImage' },
          { 'プラットフォーム': '[Android](https://play.google.com/store/apps/details?id=app.skales.mobile)', '入手方法': 'Google Play、Android 10以降' },
          { 'プラットフォーム': '[iOS](https://apps.apple.com/us/app/skales/id6763328966)', '入手方法': 'App Store、iOS 16以降' },
          { 'プラットフォーム': '[GitHubのリリース](https://github.com/skalesapp/skales/releases)', '入手方法': 'リリースファイル、変更履歴、インストールガイド' },
          { 'プラットフォーム': '[プライバシーポリシー](https://skales.app/privacy/)', '入手方法': 'プライバシー通知、最終更新日は2026年9月14日' },
        ],
        note: 'スマートフォンアプリは単体でも、デスクトップとペアリングしても動作します。Scoutの仮想マシンには、コンピューター側の仮想化サポートが必要です。',
      },
      requirements: {
        id: 'requirements',
        title: '動作要件',
        content: [
          '**開発元の数値では、アプリ本体は軽量で、モデルとScoutに必要なリソースは別です。** ローカルモデルに必要なハードウェアは選ぶモデルによって異なり、検証していません。',
        ],
        columns: ['項目', '記載されている数値'],
        rows: [
          { '項目': '使用RAM', '記載されている数値': '通常動作で約300 MB（ダウンロードページ）' },
          { '項目': 'GPU', '記載されている数値': 'アプリ本体には不要（ダウンロードページ）' },
          { '項目': 'OS', '記載されている数値': 'Windows 10/11 64ビット、macOS 11以降、Linux x64' },
          { '項目': 'スマートフォン', '記載されている数値': 'Android 10以降、iOS 16以降' },
          { '項目': 'Scoutの仮想マシン', '記載されている数値': '約2 CPU、メモリ2 GB、ディスク12 GB' },
          { '項目': 'ネットワーク', '記載されている数値': 'クラウドは接続が必要、ローカルモデルはオフライン可' },
        ],
        note: 'Scoutの仮想マシンには仮想化サポートも必要です。なければScoutはホスト上で動作し、先に確認を求めます。',
      },
      features: {
        id: 'features',
        title: '機能',
        content: [
          '**Skalesは、目標の実行、コーディングツール、音声、クリエイティブスタジオ、モデルの選択を1つのアプリにまとめています。** 以下はすべて、サイトとREADMEにある開発元の主張です。',
        ],
        items: [
          '目標：/goalで複数ステップの作業を開始し、バックグラウンドで継続します。スケジュールと、既定でオンの承認ゲートがあります。',
          'CodeモードとSkales Codeウィンドウは、チャットをフォルダーに結び付けます。Plan、Code、Autoのモード、変更のハンクごとのレビュー、ウィンドウ内のgitを備えます。',
          'モデルの選択：Skales IQの試用、多数のプロバイダー用の自分のキー、ChatGPTサブスクリプションでのサインイン、Ollama、LM Studio、KoboldCpp、vLLM、カスタムエンドポイント。',
          'Skales Local：内蔵の推論サーバーと、お使いのハードウェアで動くテキスト、画像認識、音声、画像生成モデルの厳選カタログ。',
          'Studio：画像、動画、音声、音楽、デザイン案。クラウドサービスまたはローカルのComfyUIを利用します。',
          '音声インターフェースIris：端末上で動作するウェイクワードと、チャットと同じツール。',
          'Scout（ベータ）：専用の仮想マシンで動作でき、その様子を見たり操作を引き継いだりできる長期稼働エージェント。',
          '連携：WordPress、カレンダー、メール、Notion、GitHub、Telegram、Discord、WhatsApp、Slack、Signal、Home Assistant、MCPサーバー、Agent Skills（SKILL.md）。',
          'その他：Officeアドイン、Chrome拡張機能、ChatGPT・Claude・OpenClaw・Hermes Agentのデータのインポーター。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータの流れ',
        content: [
          '**プライバシー通知によると、会話、ファイル、メモリ、設定は端末内に残り、いくつかの任意サービスは別のデータ経路です。**',
          '通知に記載されている管理者は、ウィーンでSkalesの名で営業するMario Simic氏です。通知はSkales DesktopとMobileを、クラウドサービスではなくインストール型のプログラムと説明しています。デスクトップではAPIキーはデータフォルダー内の設定ファイルに置かれ、ファイル権限で保護されます。AndroidとiOSではOSのセキュアストレージに保存されます。',
          '端末の外に出るもの：更新確認（デスクトップは4時間ごと）はプログラム名、バージョン、OS、アーキテクチャ、ビルド識別子、整合性チェックの結果を送信します。不具合報告は、ユーザーが送信したときだけ送られます。利用統計と公開のDiscoverフィードは任意で、既定ではオフです。スマートフォンのペアリングに使うリレーはメッセージをエンドツーエンドで暗号化しますが、デバイス名と識別子、接続時刻、メッセージサイズは見えます。',
          'Skales IQの試用は、開発元を経由する唯一のモデル経路です。通知によると、メールアドレスとハッシュ化した識別子を保存し、データ保持ゼロの指示を付けて米国のOpenRouter, Inc.へリクエストを転送し、プロンプトと回答は保存しません。自分のキーを使う場合、リクエストは端末からそのプロバイダーへ直接送られます。',
          'READMEには、クラウドモデルに送るプロンプトからメモリを除外するプライバシーモードも記載されています。PromptQuorumはネットワークトラフィックを調べておらず、これらの説明を検証していません。',
        ],
      },
      license: {
        id: 'license',
        title: 'ライセンスと費用',
        content: [
          '**Skalesは、Skales End User Licence Agreementに基づく独自ライセンスのソフトウェアで、個人利用、教育、2人までの事業者は無料です。**',
          '2026年11月9日付の同意書バージョン1.3は、Skalesがオープンソースでもソース公開型でもないとしています。より大きなチーム、企業、公的機関には30日間の評価の後に書面の商用ライセンスが必要で、ホスティングやホワイトラベルには別途契約が必要です。READMEによると、12.9.27までのリリースはBusiness Source License 1.1で提供されていました。',
          'ライセンスのページには商用ライセンスの価格が掲載されていません。モデルの費用は別で、ご自身のプロバイダーに支払うか、無料のSkales IQ試用を使います。試用の利用枠は、ここで読んだ情報源には記載がありません。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        content: [
          '**Skalesは、自分の端末でエージェントを使い、ローカルモデルも含めてモデルを自分で選びたい方に向いています。**',
        ],
        items: [
          'デスクトップとスマートフォンで、チャット、コーディング、バックグラウンドの目標処理を1つのエージェントで行いたい方。',
          'ライセンス上、商用利用が認められているフリーランスと2人までの事業者。',
          '他のエージェントツールから履歴を移したい方。READMEにはChatGPT、Claude、OpenClaw、Hermes Agentが挙げられています。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        content: [
          '**Skalesが向かない場面もあり、いくつかの点は未確認のままです。**',
        ],
        items: [
          '向かない：オープンソースのコードや第三者によるソース監査が必要な方。ソースは公開されていません。',
          '向かない：3人以上で、商用ライセンスのない企業。',
          '未確認：開発元の数値が食い違っています。プロバイダー数はREADMEで15以上、リポジトリの説明で26、ウェブサイトで29。内蔵ツール数はウェブサイトで400以上、READMEで260以上です。',
          '未確認：macOSの署名と公証、およびダウンロードページのウイルススキャン結果は開発元の説明です。Windows版インストーラーは未署名です。',
          '未確認：Scoutはベータと表示されており、その仮想マシンの分離は検証していません。',
          '未確認：承認ゲート、ファイルのサンドボックス、プライバシーに関する説明は検証しておらず、ソースが非公開のためコードでは確認できません。',
          '未確認：Google Playのページは JavaScript でのみ表示されるため読めていません。App Storeのページはタイトルのみ確認しました。',
          '未確認：ホームページ上のインストール数、国数、ダウンロード数、およびSkales Localのモデルがエージェント作業に十分かどうか。ベンチマークは実施していません。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Skalesと代替ツールの比較',
        itemHeadings: true,
        content: [
          '**Skalesはパーソナルアシスタントと自律型エージェントの中間に位置します。PromptQuorumは以下のツールと実機で比較していません。** 記載は各ツールのディレクトリ掲載情報によるものです。',
        ],
        columns: ['ツール', 'ディレクトリでの記載'],
        rows: [
          { 'ツール': 'Skales', 'ディレクトリでの記載': '独自ライセンス、2人まで無料。Windows・Mac・Linux・iOS・Android' },
          { 'ツール': '[Hermes Agent](/ja/power-local-llm/hermes-agent-review)', 'ディレクトリでの記載': 'MIT。永続メモリを持つ自己改善型パーソナルエージェント' },
          { 'ツール': '[OpenClaw](/ja/power-local-llm/openclaw-review)', 'ディレクトリでの記載': 'MIT。エージェントワークフローのオーケストレーション基盤' },
          { 'ツール': '[OpenMausBot](/ja/power-local-llm/openmausbot-review)', 'ディレクトリでの記載': 'Apache 2.0。エージェントCLI上でボットのチームを動かすチャットアプリ' },
          { 'ツール': '[Open Interpreter](/ja/power-local-llm/open-interpreter-review)', 'ディレクトリでの記載': 'Apache 2.0。ローカルLLMにPC操作とコード実行をさせる' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Skalesは無料ですか？',
            a: '個人利用、教育、2人までの事業者は無料です。より大きなチームには書面のライセンスが必要で、その価格は公開されていません。無料のSkales IQ試用やローカルモデルを使わない限り、モデルのプロバイダーへの支払いも別途かかります。',
          },
          {
            q: 'Skalesはローカルモデルでオフライン動作できますか？',
            a: '開発元はできるとしています。Skales Localはアプリに同梱され、モデル、音声認識、音声出力をお使いのハードウェアで実行します。OllamaやLM Studioも接続できます。モバイルのページには、スマートフォンアプリも端末上でモデルを実行できるとあります。PromptQuorumはこれらを検証していません。',
          },
          {
            q: 'Skalesにはモバイルアプリがありますか？',
            a: 'はい。Skales MobileはGoogle Play（Android 10以降）とApp Store（iOS 16以降）にあります。ネイティブツールで単体動作するか、QRコードでデスクトップとペアリングします。サイトによると、ペアリング後はスマートフォンからデスクトップのツール群を利用できます。',
          },
          {
            q: 'Skalesはオープンソースですか？',
            a: 'いいえ。開発元はオープンソースでもソース公開型でもないとしており、GitHubリポジトリはリリース、変更履歴、インストールガイドを配布するだけです。DevKitとWordPressプラグインは、MITライセンスの別リポジトリです。',
          },
          {
            q: '無料の試用モデルを使い切るとどうなりますか？',
            a: 'サイトによると、自分のプロバイダーキーを貼り付けるかローカルモデルに切り替えれば、Skales側の費用なしで使い続けられます。試用の利用枠の大きさは、ここで読んだ情報源には記載がありません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          '**Skalesは、自分の端末でモデルを選べるエージェントアプリを求め、クローズドソースを許容できる方なら試す価値があります。**',
          '仕様上は多くをカバーしています。5つのプラットフォーム向けインストーラー、小規模事業者向けの無料枠、ローカルでのデータ保存、ローカルモデルの選択肢、既定でオンの承認確認、そして2026年11月10日のバージョン12.9.65に至る活発なリリース履歴です。',
          'トレードオフは現実的です。コードは監査できず、Windows版インストーラーは未署名で、Scoutはベータ、開発元自身の数値も食い違っています。PromptQuorumはこのアプリを検証していません。機密性のないフォルダーで試し、承認の確認をオンのままにして、頼る前にどのプロバイダーがプロンプトを受け取るかを確認してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Skalesのウェブサイト](https://skales.app) — エージェント、目標、Studio、Scout、音声に関する開発元の説明。2026年11月17日確認。',
          '[ダウンロードページ](https://skales.app/download/) — OSごとのインストーラー、システム要件、初回起動時の注意。2026年11月17日確認。',
          '[モデルのページ](https://skales.app/models/) — Skales IQ、Skales Local、プロバイダー一覧。2026年11月17日確認。',
          '[モバイルのページ](https://skales.app/mobile/) — AndroidとiOSのアプリ、単体モードとペアリングモード。2026年11月17日確認。',
          '[ライセンスのページ](https://skales.app/licence/) — End User Licence Agreement 1.3。2026年11月17日確認。',
          '[プライバシー通知](https://skales.app/privacy/) — 管理者、データ経路、Skales IQ、リレー。2026年11月17日確認。',
          '[法的表示（Imprint）](https://skales.app/imprint/) — 提供元、ウィーンの個人事業。2026年11月17日確認。',
          '[SkalesのGitHubリポジトリ](https://github.com/skalesapp/skales) — README、ライセンスの変遷、リポジトリ作成日、スター数。2026年11月17日確認。',
          '[リリースv12.9.65](https://github.com/skalesapp/skales/releases/tag/v12.9.65) — 最新リリース、日付、インストーラーファイル。2026年11月17日確認。',
          '[App StoreのSkales](https://apps.apple.com/us/app/skales/id6763328966) — iOS版のページ。2026年11月17日確認。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Hermes Agentレビュー：ローカル自律型AIエージェント](/ja/power-local-llm/hermes-agent-review) — 永続メモリを持つ、比較可能なパーソナルエージェント。',
          '[OpenClawレビュー](/ja/power-local-llm/openclaw-review) — エージェントワークフローのオーケストレーション基盤。',
          '[OpenMausBotレビュー](/ja/power-local-llm/openmausbot-review) — AIボットのチームを動かすデスクトップチャットアプリ。',
          '[Open Interpreterレビュー](/ja/power-local-llm/open-interpreter-review) — ローカルLLMにPC操作とコード実行をさせる。',
          '[ローカルAIソフトウェアディレクトリ](/ja/directory) — ローカルAIツールの全カタログ。',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/skales-review-hero-pt.webp',
    title: 'Análise do Skales: agente de IA com sua chave ou modelos locais',
    seoTitle: 'Análise do Skales: agente de IA com sua chave ou local',
    intro:
      'O Skales é um app de desktop e celular que funciona como agente de IA: você dá uma meta, uma tarefa de programação ou um pedido de voz, e ele executa os passos com suas próprias ferramentas, pedindo aprovação antes de ações arriscadas. Ele é feito por Mario Simic, empresário individual em Viena, na Áustria. Esta análise se baseia no site do criador, no repositório de distribuição no GitHub, nas páginas de licença e de privacidade e nos arquivos da versão, verificados em 17 de novembro de 2026. A PromptQuorum não instalou nem testou o app.',
    metaDescription:
      'O Skales é um app de agente de IA proprietário para Windows, Mac, Linux, Android e iOS. Análise de instalação, modelos, privacidade e licença.',
    twitterDescription:
      'Análise do Skales: um app de agente para desktop e celular que guarda os dados no seu dispositivo e funciona com sua chave, um modelo de teste ou modelos locais. Licença proprietária.',
    audience:
      'Pessoas que querem um agente de IA pessoal no próprio computador e celular, autônomos e pequenas empresas, e quem compara apps de agentes que usam modelos locais',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Skales',
    targetKeywords: [
      'análise do Skales',
      'Skales agente de IA',
      'Skales Local',
      'licença do Skales',
      'privacidade do Skales',
      'Skales vs OpenClaw',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**O Skales é um app de agente de IA proprietário para Windows, macOS, Linux, Android e iOS que mantém seus dados no seu dispositivo e deixa você escolher o modelo: sua própria chave de provedor, um modelo de teste gratuito ou um modelo local.** É gratuito para uso privado, educação e empresas de até duas pessoas. O código-fonte não é publicado, então os avisos de aprovação e as declarações de privacidade não podem ser auditados de forma independente.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Skales e para quem ele serve?',
        answer:
          'O Skales é um app de agente de IA que planeja e executa tarefas de vários passos no seu computador ou celular, com o modelo que você escolher. Serve para quem quer um único agente para chat, programação e metas em segundo plano e aceita software de código fechado.',
        bullets: [
          'Versão 12.9.65, lançada em 10 de novembro de 2026; sem aviso de projeto abandonado.',
          'Instaladores: .exe, .dmg, .deb e AppImage, além de apps no Google Play e na App Store.',
          'Modelos: um modelo de teste gratuito, suas próprias chaves de provedor, Skales Local, Ollama ou LM Studio.',
          'Licença: Skales End User Licence Agreement 1.3, gratuita até duas pessoas.',
          'Criador: um empresário individual em Viena, na Áustria.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Visão geral', anchor: 'overview' },
      { label: 'Como obter', anchor: 'get-it' },
      { label: 'Requisitos', anchor: 'requirements' },
      { label: 'Recursos', anchor: 'features' },
      { label: 'Privacidade e fluxo de dados', anchor: 'privacy' },
      { label: 'Licença e custo', anchor: 'license' },
      { label: 'Para quem serve', anchor: 'who-should-use' },
      { label: 'O que não conseguimos verificar', anchor: 'who-should-not-use' },
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
          {
            type: 'one-sentence',
            text: 'O Skales é um app de código fechado para desktop e celular que dota um modelo de IA da sua escolha de ferramentas, memória, metas em segundo plano e avisos de aprovação.',
          },
          {
            type: 'plain-terms',
            text: 'Pense em um assistente que pode abrir arquivos, navegar, escrever código e continuar trabalhando em uma meta enquanto você faz outra coisa. Seu histórico fica no seu dispositivo, mas o modelo escolhido pode ser um serviço na nuvem.',
          },
        ],
        items: [
          'As metas rodam em segundo plano ao longo de muitos passos; programação, voz, um estúdio criativo e um app de celular fazem parte do mesmo produto.',
          'Conversas, memória e arquivos ficam no seu dispositivo; a verificação de atualizações e alguns serviços opcionais são caminhos de dados separados.',
          'O instalador do Windows ainda não tem assinatura de código, segundo o criador; a versão para macOS é descrita como assinada e notarizada.',
          'O app em si precisa de cerca de 300 MB de RAM e nenhuma GPU, segundo o criador; modelos locais precisam de mais.',
          'A PromptQuorum não testou o app. Os números de recursos, ferramentas e instalação são do próprio criador.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Um agente com acesso aos seus arquivos, navegador, agenda e e-mail pode executar ações que você não pretendia. Mantenha os avisos de aprovação ligados, comece com uma pasta sem dados sensíveis e confira o que cada provedor conectado recebe.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'Visão geral',
        content: [
          '**O Skales é uma estrutura de agente: um app de desktop e celular que dota um modelo de IA de ferramentas, memória, planejamento e avisos de aprovação.**',
          `O Skales é feito por Mario Simic, que, segundo o aviso legal, atua como empresário individual sob o nome Skales em Viena, na Áustria. O repositório no GitHub foi criado em 8 de março de 2026 e mostra ${ST.pt('skales')} estrelas. A versão 12.9.65 é a mais recente, publicada em 10 de novembro de 2026, então o desenvolvimento continua e nenhum aviso de projeto abandonado se aplica.`,
          'Segundo o criador, você digita uma meta com /goal e o Skales planeja os passos e trabalha neles em segundo plano. Outras partes citadas no site e no README são um modo Code para trabalhar dentro de uma pasta, um Studio para imagens, vídeo e design, a superfície de voz Iris com uma palavra de ativação que roda no dispositivo, um Desktop Buddy na tela e o Scout (beta), agentes de longa duração que podem receber opcionalmente uma máquina virtual própria.',
          'O Skales Mobile é um app separado para Android e iOS. O criador diz que ele funciona sozinho ou é pareado com o desktop por um relay com criptografia de ponta a ponta. O site também descreve servidores MCP, importação de Agent Skills e um DevKit que é um repositório separado com licença MIT.',
          'Estas são descrições do criador. A PromptQuorum não executou o Skales e não mediu sua confiabilidade, velocidade nem qualidade de saída.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O Skales se instala como um app comum: instaladores por sistema operacional na página de download do criador, sem terminal.**',
          'O criador diz que a versão para Windows não tem assinatura de código, então o Windows SmartScreen mostra um aviso uma única vez. A versão para macOS é descrita como assinada com um Apple Developer ID e notarizada. A versão v12.9.65 no GitHub lista os mesmos tipos de instalador da página de download.',
        ],
        columns: ['Plataforma', 'Como obter'],
        rows: [
          { 'Plataforma': '[Site](https://skales.app)', 'Como obter': 'Site oficial com downloads e documentação' },
          { 'Plataforma': '[Windows](https://skales.app/download/)', 'Como obter': 'Instalador (.exe), Windows 10/11 64 bits; versão Arm' },
          { 'Plataforma': '[macOS](https://skales.app/download/)', 'Como obter': 'DMG para Apple Silicon ou Intel, macOS 11+' },
          { 'Plataforma': '[Linux](https://skales.app/download/)', 'Como obter': '.deb (Debian, Ubuntu, Mint) ou AppImage' },
          { 'Plataforma': '[Android](https://play.google.com/store/apps/details?id=app.skales.mobile)', 'Como obter': 'Google Play, Android 10+' },
          { 'Plataforma': '[iOS](https://apps.apple.com/us/app/skales/id6763328966)', 'Como obter': 'App Store, iOS 16+' },
          { 'Plataforma': '[Versões no GitHub](https://github.com/skalesapp/skales/releases)', 'Como obter': 'Arquivos de versão, changelog, guias de instalação' },
          { 'Plataforma': '[Política de privacidade](https://skales.app/privacy/)', 'Como obter': 'Aviso de privacidade, atualizado em 14 de setembro de 2026' },
        ],
        note: 'O app de celular funciona sozinho ou pareado com o desktop. A máquina virtual de um scout exige suporte a virtualização no computador.',
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos',
        content: [
          '**Pelos números do criador, o app em si é leve, enquanto as necessidades de modelos e do Scout são separadas.** O hardware necessário para modelos locais depende do modelo escolhido e não foi testado.',
        ],
        columns: ['Item', 'Valor informado'],
        rows: [
          { 'Item': 'RAM em uso', 'Valor informado': 'Cerca de 300 MB em uso normal (página de download)' },
          { 'Item': 'GPU', 'Valor informado': 'Não exigida para o app (página de download)' },
          { 'Item': 'Sistema operacional', 'Valor informado': 'Windows 10/11 64 bits; macOS 11+; Linux x64' },
          { 'Item': 'Celular', 'Valor informado': 'Android 10+; iOS 16+' },
          { 'Item': 'Máquina virtual do Scout', 'Valor informado': 'Cerca de 2 CPUs, 2 GB de memória, 12 GB de disco' },
          { 'Item': 'Rede', 'Valor informado': 'Provedores na nuvem exigem internet; modelos locais, não' },
        ],
        note: 'A máquina virtual do Scout também exige suporte a virtualização; sem ele, o scout roda no host e pergunta antes.',
      },
      features: {
        id: 'features',
        title: 'Recursos',
        content: [
          '**O Skales reúne em um só app um executor de metas, ferramentas de programação, voz, um estúdio criativo e escolha de modelo.** Tudo abaixo são afirmações do criador, tiradas do site e do README.',
        ],
        items: [
          'Metas: /goal inicia um trabalho de vários passos que continua em segundo plano, com agendamentos e avisos de aprovação ligados por padrão.',
          'O modo Code e a janela Skales Code vinculam um chat a uma pasta, com os modos Plan, Code e Auto, revisão das alterações bloco a bloco e git dentro da janela.',
          'Escolha de modelo: o teste Skales IQ, suas próprias chaves de muitos provedores, login com uma assinatura do ChatGPT, Ollama, LM Studio, KoboldCpp, vLLM e endpoints próprios.',
          'Skales Local: um servidor de inferência embutido com um catálogo selecionado de modelos de texto, visão, fala e imagem que rodam no seu hardware.',
          'Studio: imagens, vídeo, voz, música e rascunhos de design, por serviços na nuvem ou um ComfyUI local.',
          'Superfície de voz Iris: palavra de ativação no dispositivo, com as mesmas ferramentas de uma rodada de chat.',
          'Scout (beta): agentes de longa duração que podem rodar em uma máquina virtual própria, que você pode observar e assumir.',
          'Integrações: WordPress, agendas, e-mail, Notion, GitHub, Telegram, Discord, WhatsApp, Slack, Signal, Home Assistant, servidores MCP e Agent Skills (SKILL.md).',
          'Extras: complementos do Office, uma extensão do Chrome e um importador de dados do ChatGPT, Claude, OpenClaw e Hermes Agent.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e fluxo de dados',
        content: [
          '**Segundo o aviso de privacidade, conversas, arquivos, memória e configurações ficam no seu dispositivo, e vários serviços opcionais são caminhos de dados separados.**',
          'O controlador indicado no aviso é Mario Simic, atuando sob o nome Skales, em Viena. O aviso descreve o Skales Desktop e o Mobile como programas instalados, não como um serviço na nuvem. No desktop, as chaves de API ficam em um arquivo de configurações na sua pasta de dados, protegido pelas permissões de arquivo; no Android e no iOS, ficam no armazenamento seguro do sistema operacional.',
          'O que sai do dispositivo: a verificação de atualizações (a cada quatro horas no desktop) envia o nome do programa, a versão, o sistema operacional, a arquitetura, o identificador da compilação e o resultado de uma verificação de integridade, e os relatórios de erro só saem quando você os envia. Estatísticas de uso e o feed público Discover são opcionais e vêm desligados por padrão. O relay usado para parear o celular criptografa as mensagens de ponta a ponta, mas enxerga nomes e identificadores de dispositivos, horários de conexão e tamanhos de mensagem.',
          'O teste Skales IQ é o único caminho de modelo que passa pelo criador. O aviso diz que ele guarda seu endereço de e-mail e identificadores com hash, encaminha as solicitações à OpenRouter, Inc., nos Estados Unidos, com uma instrução de retenção zero de dados, e não guarda prompts nem respostas. Com sua própria chave, as solicitações vão do seu dispositivo direto para esse provedor.',
          'O README acrescenta um Modo de privacidade que mantém a memória fora dos prompts enviados a modelos na nuvem. A PromptQuorum não inspecionou o tráfego de rede e não verificou nenhuma dessas declarações.',
        ],
      },
      license: {
        id: 'license',
        title: 'Licença e custo',
        content: [
          '**O Skales é software proprietário sob o Skales End User Licence Agreement, gratuito para uso privado, educação e empresas de até duas pessoas.**',
          'A versão 1.3 do contrato, de 9 de novembro de 2026, diz que o Skales não é de código aberto nem de código disponível. Equipes maiores, empresas e órgãos públicos precisam de uma licença comercial por escrito após 30 dias de avaliação, e hospedagem ou marca branca exigem um contrato separado. Segundo o README, as versões até a 12.9.27 foram fornecidas sob a Business Source License 1.1.',
          'As páginas de licença não publicam preço para licenças comerciais. Os custos do modelo são à parte: você paga seu próprio provedor ou usa o teste gratuito Skales IQ, cuja cota não é informada nas fontes lidas aqui.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem serve',
        content: [
          '**O Skales serve a quem quer um agente nos próprios dispositivos e quer escolher o modelo, inclusive um local.**',
        ],
        items: [
          'Pessoas que querem um agente para chat, programação e metas em segundo plano no desktop e no celular.',
          'Autônomos e empresas de até duas pessoas, que podem usá-lo comercialmente conforme a licença.',
          'Usuários de outras ferramentas de agentes que querem importar o histórico; o README cita ChatGPT, Claude, OpenClaw e Hermes Agent.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        content: [
          '**O Skales não serve bem em algumas situações, e vários detalhes continuam sem verificação.**',
        ],
        items: [
          'Não serve: quem precisa de código aberto ou de uma auditoria independente do código; nenhum código-fonte é publicado.',
          'Não serve: empresas com mais de duas pessoas sem licença comercial.',
          'Não verificado: os números do próprio criador divergem. Provedores são 15+ no README, 26 na descrição do repositório e 29 no site; ferramentas integradas são 400+ no site e 260+ no README.',
          'Não verificado: a assinatura e a notarização no macOS e o resultado do antivírus na página de download são declarações do criador; o instalador do Windows não é assinado.',
          'Não verificado: o Scout está marcado como beta, e o isolamento de sua máquina virtual não foi testado.',
          'Não verificado: os avisos de aprovação, o sandbox de arquivos e as declarações de privacidade não foram testados e, com o código fechado, não podem ser conferidos no código.',
          'Não verificado: a página do Google Play só é exibida com JavaScript e não foi lida; a página da App Store foi vista apenas pelo título.',
          'Não verificado: os números de instalações, países e downloads da página inicial e se os modelos do Skales Local bastam para trabalho de agente; nenhum benchmark foi executado.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Skales versus alternativas',
        itemHeadings: true,
        content: [
          '**O Skales fica entre assistentes pessoais e agentes autônomos. A PromptQuorum não o comparou na prática com as ferramentas abaixo.** As notas vêm das entradas delas no diretório.',
        ],
        columns: ['Ferramenta', 'Segundo o diretório'],
        rows: [
          { 'Ferramenta': 'Skales', 'Segundo o diretório': 'Proprietário, grátis até duas pessoas; Windows, Mac, Linux, iOS, Android' },
          { 'Ferramenta': '[Hermes Agent](/pt/power-local-llm/hermes-agent-review)', 'Segundo o diretório': 'MIT; agente pessoal que se aprimora sozinho, com memória persistente' },
          { 'Ferramenta': '[OpenClaw](/pt/power-local-llm/openclaw-review)', 'Segundo o diretório': 'MIT; framework de orquestração para fluxos de agentes' },
          { 'Ferramenta': '[OpenMausBot](/pt/power-local-llm/openmausbot-review)', 'Segundo o diretório': 'Apache 2.0; app de chat que roda uma equipe de bots em CLIs de agentes' },
          { 'Ferramenta': '[Open Interpreter](/pt/power-local-llm/open-interpreter-review)', 'Segundo o diretório': 'Apache 2.0; deixa um LLM local controlar o computador e executar código' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Skales é gratuito?',
            a: 'Sim, para uso privado, educação e empresas de até duas pessoas. Equipes maiores precisam de uma licença por escrito, cujo preço não é publicado. Você também paga seu provedor de modelos, a menos que use o teste gratuito Skales IQ ou um modelo local.',
          },
          {
            q: 'O Skales funciona offline com modelos locais?',
            a: 'O criador diz que sim. O Skales Local vem com o app e executa modelos, reconhecimento de fala e saída de voz no seu hardware, e Ollama ou LM Studio podem ser conectados. A página mobile diz que o app do celular também pode rodar um modelo no dispositivo. A PromptQuorum não testou nada disso.',
          },
          {
            q: 'O Skales tem app para celular?',
            a: 'Sim, o Skales Mobile no Google Play (Android 10+) e na App Store (iOS 16+). Ele funciona sozinho com ferramentas nativas ou é pareado com o desktop por QR code, depois do que, segundo o site, o celular alcança o conjunto de ferramentas do desktop.',
          },
          {
            q: 'O Skales é de código aberto?',
            a: 'Não. O criador diz que ele não é de código aberto nem de código disponível, e o repositório no GitHub apenas distribui versões, um changelog e guias de instalação. O DevKit e o plugin de WordPress são repositórios separados com licença MIT.',
          },
          {
            q: 'O que acontece quando o modelo de teste gratuito acaba?',
            a: 'O site diz que você pode colar sua própria chave de provedor ou trocar para um modelo local e continuar sem custo do Skales. O tamanho da cota de teste não é informado nas fontes lidas aqui.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          '**O Skales vale uma olhada se você quer um app de agente nos próprios dispositivos em que você escolhe o modelo e aceita software de código fechado.**',
          'No papel, ele cobre muito: instaladores para cinco plataformas, um nível gratuito para pequenas empresas, armazenamento local de dados, opções de modelos locais, avisos de aprovação ligados por padrão e um histórico de versões ativo, com a 12.9.65 de 10 de novembro de 2026.',
          'As contrapartidas são reais. O código não pode ser auditado, o instalador do Windows não é assinado, o Scout está em beta e os números do próprio criador divergem. A PromptQuorum não testou o app. Experimente em uma pasta sem dados sensíveis, mantenha os avisos de aprovação ligados e confira qual provedor recebe seus prompts antes de depender dele.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Site do Skales](https://skales.app) — descrição do criador sobre o agente, metas, Studio, Scout e voz, verificado em 17 de novembro de 2026.',
          '[Página de download](https://skales.app/download/) — instaladores por sistema, requisitos e avisos da primeira execução, verificados em 17 de novembro de 2026.',
          '[Página de modelos](https://skales.app/models/) — Skales IQ, Skales Local e lista de provedores, verificados em 17 de novembro de 2026.',
          '[Página mobile](https://skales.app/mobile/) — app para Android e iOS, modos independente e pareado, verificados em 17 de novembro de 2026.',
          '[Página de licença](https://skales.app/licence/) — End User Licence Agreement 1.3, verificado em 17 de novembro de 2026.',
          '[Aviso de privacidade](https://skales.app/privacy/) — controlador, caminhos de dados, Skales IQ e relay, verificados em 17 de novembro de 2026.',
          '[Aviso legal](https://skales.app/imprint/) — criador, empresário individual em Viena, verificado em 17 de novembro de 2026.',
          '[Repositório do Skales no GitHub](https://github.com/skalesapp/skales) — README, histórico de licenças, data de criação do repositório e número de estrelas, verificados em 17 de novembro de 2026.',
          '[Versão v12.9.65](https://github.com/skalesapp/skales/releases/tag/v12.9.65) — última versão, data e arquivos de instalação, verificados em 17 de novembro de 2026.',
          '[Skales na App Store](https://apps.apple.com/us/app/skales/id6763328966) — página do iOS, verificada em 17 de novembro de 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Hermes Agent: agente de IA local autônomo](/pt/power-local-llm/hermes-agent-review) — um agente pessoal comparável, com memória persistente.',
          '[Análise do OpenClaw](/pt/power-local-llm/openclaw-review) — framework de orquestração para fluxos de agentes.',
          '[Análise do OpenMausBot](/pt/power-local-llm/openmausbot-review) — app de chat para desktop que roda uma equipe de bots de IA.',
          '[Análise do Open Interpreter](/pt/power-local-llm/open-interpreter-review) — deixa um LLM local controlar o computador e executar código.',
          '[Diretório de software de IA local](/pt/directory) — o catálogo completo de ferramentas de IA local.',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/skales-review-hero-zh.webp',
    title: 'Skales 评测：可用自己的密钥或本地模型的 AI 智能体应用',
    seoTitle: 'Skales 评测：自带密钥或本地模型的 AI 智能体应用',
    intro:
      'Skales 是一款桌面和手机应用，以 AI 智能体的方式工作：你给出目标、编程任务或语音请求，它用自带的工具执行各个步骤，并在高风险操作前请求你批准。它由奥地利维也纳的个体经营者 Mario Simic 开发。本评测基于开发者网站、GitHub 分发仓库、许可和隐私页面以及发布文件，核查日期为 2026 年 11 月 17 日。PromptQuorum 没有安装或测试过该应用。',
    metaDescription:
      'Skales 是专有许可的 AI 智能体应用，支持 Windows、Mac、Linux、Android 和 iOS。评测安装、模型、隐私和许可，两人以内免费。',
    twitterDescription:
      'Skales 评测：数据存储在你的设备上，可用自己的密钥、试用模型或本地模型的桌面和手机智能体应用。专有许可。',
    audience:
      '想在自己的电脑和手机上使用个人 AI 智能体的人、自由职业者和小型企业，以及正在比较支持本地模型的智能体应用的人',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Skales',
    targetKeywords: [
      'Skales 评测',
      'Skales AI 智能体',
      'Skales Local',
      'Skales 许可',
      'Skales 隐私',
      'Skales 对比 OpenClaw',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Skales 是一款面向 Windows、macOS、Linux、Android 和 iOS 的专有许可 AI 智能体应用，数据保存在你的设备上，模型由你选择：自己的服务商密钥、免费试用模型或本地模型。** 个人使用、教育以及两人以内的企业可免费使用。源代码未公开，因此其批准机制和隐私说明无法被独立审计。',
    quickAnswerTop: {
      zh: {
        question: 'Skales 是什么，适合谁？',
        answer:
          'Skales 是一款 AI 智能体应用，用你选择的模型在电脑或手机上规划并执行多步骤任务。适合想用一个智能体处理聊天、编程和后台目标，并能接受闭源软件的人。',
        bullets: [
          '版本 12.9.65，发布于 2026 年 11 月 10 日；无项目停更警告。',
          '安装包：.exe、.dmg、.deb 和 AppImage，另有 Google Play 和 App Store 应用。',
          '模型：免费试用模型、你自己的服务商密钥、Skales Local、Ollama 或 LM Studio。',
          '许可：Skales End User Licence Agreement 1.3，两人以内免费。',
          '开发方：奥地利维也纳的个体经营者。',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '概览', anchor: 'overview' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '运行要求', anchor: 'requirements' },
      { label: '功能', anchor: 'features' },
      { label: '隐私与数据流向', anchor: 'privacy' },
      { label: '许可与费用', anchor: 'license' },
      { label: '适合谁使用', anchor: 'who-should-use' },
      { label: '我们未能核实的内容', anchor: 'who-should-not-use' },
      { label: '替代方案', anchor: 'alternatives' },
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
          {
            type: 'one-sentence',
            text: 'Skales 是一款闭源的桌面和手机应用，为你选择的 AI 模型配上工具、记忆、后台目标和批准提示。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作一个助手：能打开文件、浏览网页、编写代码，并在你做别的事时继续推进目标。你的历史记录保存在设备上，但你选的模型可能是云服务。',
          },
        ],
        items: [
          '目标可在后台跨多个步骤运行；编程、语音、创意 Studio 和手机应用都属于同一产品。',
          '对话、记忆和文件保存在你的设备上；更新检查和少数可选服务是独立的数据路径。',
          '据开发者称，Windows 安装程序尚未进行代码签名；macOS 版本被描述为已签名并通过公证。',
          '按开发者给出的数字，应用本身约需 300 MB 内存，无需 GPU；本地模型需要更多。',
          'PromptQuorum 没有测试该应用。功能、工具和安装方面的数字均来自开发者。',
        ],
        callouts: [
          {
            type: 'note',
            text: '能访问你的文件、浏览器、日历和邮件的智能体，可能执行你并不想要的操作。请保持批准提示开启，先从不敏感的文件夹开始，并确认每个已连接的服务商会收到什么。',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '概览',
        content: [
          '**Skales 是一个智能体框架：一款为 AI 模型配上工具、记忆、规划和批准提示的桌面和手机应用。**',
          `Skales 由 Mario Simic 开发，根据其法律声明（Imprint），他以个体经营者身份在奥地利维也纳使用 Skales 名称经营。GitHub 仓库创建于 2026 年 3 月 8 日，显示有${ST.zh('skales')}个星标。版本 12.9.65 是最新发布版本，发布于 2026 年 11 月 10 日，因此开发仍在进行，不适用项目停更警告。`,
          '据开发者称，你用 /goal 输入一个目标，Skales 会规划步骤并在后台处理。网站和 README 提到的其他部分包括：在文件夹内工作的 Code 模式、用于图像、视频和设计的 Studio、带有在设备上运行的唤醒词的语音界面 Iris、屏幕上的 Desktop Buddy，以及 Scout（测试版）——可选择获得独立虚拟机的长期运行智能体。',
          'Skales Mobile 是面向 Android 和 iOS 的独立应用。开发者称它可单独运行，也可通过端到端加密的中继与桌面端配对。网站还介绍了 MCP 服务器、Agent Skills 导入，以及作为独立 MIT 许可仓库的 DevKit。',
          '以上是开发者的描述。PromptQuorum 没有运行过 Skales，也没有测量其可靠性、速度或输出质量。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Skales 像普通应用一样安装：开发者下载页提供各操作系统的安装程序，无需终端。**',
          '开发者称，Windows 版本未进行代码签名，因此 Windows SmartScreen 会显示一次性提示。macOS 版本被描述为使用 Apple Developer ID 签名并通过公证。GitHub 发布版本 v12.9.65 列出的安装程序类型与下载页一致。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': '[网站](https://skales.app)', '获取方式': '官方网站，含下载和文档' },
          { '平台': '[Windows](https://skales.app/download/)', '获取方式': '安装程序（.exe），Windows 10/11 64 位；有 Arm 版' },
          { '平台': '[macOS](https://skales.app/download/)', '获取方式': 'Apple Silicon 或 Intel 版 DMG，macOS 11+' },
          { '平台': '[Linux](https://skales.app/download/)', '获取方式': '.deb（Debian、Ubuntu、Mint）或 AppImage' },
          { '平台': '[Android](https://play.google.com/store/apps/details?id=app.skales.mobile)', '获取方式': 'Google Play，Android 10+' },
          { '平台': '[iOS](https://apps.apple.com/us/app/skales/id6763328966)', '获取方式': 'App Store，iOS 16+' },
          { '平台': '[GitHub 发布页](https://github.com/skalesapp/skales/releases)', '获取方式': '发布文件、更新日志、安装指南' },
          { '平台': '[隐私政策](https://skales.app/privacy/)', '获取方式': '隐私声明，最后更新于 2026 年 9 月 14 日' },
        ],
        note: '手机应用可单独运行，也可与桌面端配对。Scout 的虚拟机需要电脑支持虚拟化。',
      },
      requirements: {
        id: 'requirements',
        title: '运行要求',
        content: [
          '**按开发者给出的数字，应用本身很轻量，模型和 Scout 的需求另算。** 本地模型所需硬件取决于你选择的模型，未经测试。',
        ],
        columns: ['项目', '声明的数值'],
        rows: [
          { '项目': '运行时内存', '声明的数值': '正常使用约 300 MB（下载页）' },
          { '项目': 'GPU', '声明的数值': '应用本身无需 GPU（下载页）' },
          { '项目': '操作系统', '声明的数值': 'Windows 10/11 64 位；macOS 11+；Linux x64' },
          { '项目': '手机', '声明的数值': 'Android 10+；iOS 16+' },
          { '项目': 'Scout 虚拟机', '声明的数值': '约 2 个 CPU、2 GB 内存、12 GB 磁盘' },
          { '项目': '网络', '声明的数值': '云服务商需联网；本地模型可离线运行' },
        ],
        note: 'Scout 虚拟机还需要虚拟化支持；没有的话，Scout 会在主机上运行并先征求许可。',
      },
      features: {
        id: 'features',
        title: '功能',
        content: [
          '**Skales 把目标执行、编程工具、语音、创意工作室和模型选择整合在一个应用里。** 以下均为开发者在网站和 README 中的说法。',
        ],
        items: [
          '目标：/goal 启动可在后台继续的多步骤工作，带有日程安排和默认开启的批准机制。',
          'Code 模式和 Skales Code 窗口把对话绑定到某个文件夹，提供 Plan、Code 和 Auto 模式、逐块审查更改，并在窗口内使用 git。',
          '模型选择：Skales IQ 试用、多家服务商的自有密钥、使用 ChatGPT 订阅登录、Ollama、LM Studio、KoboldCpp、vLLM 和自定义端点。',
          'Skales Local：内置推理服务器，提供经过挑选的文本、视觉、语音和图像模型目录，在你的硬件上运行。',
          'Studio：图像、视频、语音、音乐和设计草稿，通过云服务或本地 ComfyUI 完成。',
          '语音界面 Iris：唤醒词在设备上运行，使用与聊天回合相同的工具。',
          'Scout（测试版）：可在自己的虚拟机中运行的长期智能体，你可以观看并接管。',
          '集成：WordPress、日历、邮件、Notion、GitHub、Telegram、Discord、WhatsApp、Slack、Signal、Home Assistant、MCP 服务器和 Agent Skills（SKILL.md）。',
          '其他：Office 加载项、Chrome 扩展，以及可导入 ChatGPT、Claude、OpenClaw 和 Hermes Agent 数据的导入器。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据流向',
        content: [
          '**据隐私声明，对话、文件、记忆和设置保存在你的设备上，若干可选服务属于独立的数据路径。**',
          '声明中列出的数据控制方是在维也纳使用 Skales 名称经营的 Mario Simic。声明把 Skales Desktop 和 Mobile 描述为已安装的程序，而不是云服务。在桌面端，API 密钥保存在数据文件夹内的设置文件中，由文件权限保护；在 Android 和 iOS 上，则保存在操作系统的安全存储中。',
          '会离开设备的内容：更新检查（桌面端每四小时一次）会发送程序名称、版本、操作系统、架构、构建标识和完整性检查结果；错误报告只在你发送时才会发出。使用统计和公开的 Discover 信息流是可选的，默认关闭。用于手机配对的中继对消息做端到端加密，但能看到设备名称和标识、连接时间和消息大小。',
          'Skales IQ 试用是唯一经过开发者的模型路径。声明称，它会保存你的电子邮件地址和哈希后的标识，并附带零数据保留指令，把请求转发给美国的 OpenRouter, Inc.，且不保存提示词和回答。使用你自己的密钥时，请求直接从你的设备发往该服务商。',
          'README 还提到一个隐私模式，可让记忆不出现在发送给云模型的提示词中。PromptQuorum 没有检查网络流量，也没有核实上述任何说法。',
        ],
      },
      license: {
        id: 'license',
        title: '许可与费用',
        content: [
          '**Skales 是依据 Skales End User Licence Agreement 授权的专有软件，个人使用、教育以及两人以内的企业可免费使用。**',
          '该协议 2026 年 11 月 9 日的 1.3 版称，Skales 既不是开源软件，也不是源码可见软件。更大的团队、公司和公共机构在 30 天评估期后需要书面商业许可，托管或贴牌则需单独协议。据 README，12.9.27 及之前的版本是按 Business Source License 1.1 提供的。',
          '许可页面没有公布商业许可的价格。模型费用另算：你向自己的服务商付费，或使用免费的 Skales IQ 试用，其额度在此处读到的来源中没有说明。',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁使用',
        content: [
          '**Skales 适合希望在自己的设备上使用智能体，并想自己选择模型（包括本地模型）的人。**',
        ],
        items: [
          '想在桌面和手机上用一个智能体处理聊天、编程和后台目标的人。',
          '自由职业者和两人以内的企业，可依据许可进行商业使用。',
          '想导入历史记录的其他智能体工具用户；README 提到 ChatGPT、Claude、OpenClaw 和 Hermes Agent。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        content: [
          '**Skales 在某些情况下并不合适，且有若干细节尚未核实。**',
        ],
        items: [
          '不适合：需要开源代码或独立源码审计的人；没有公开任何源码。',
          '不适合：超过两人且没有商业许可的公司。',
          '未核实：开发者自己的数字互相矛盾。服务商数量在 README 中为 15 家以上，在仓库描述中为 26 家，在网站上为 29 家；内置工具在网站上为 400 个以上，在 README 中为 260 个以上。',
          '未核实：macOS 签名与公证，以及下载页上的杀毒扫描结果，都是开发者的说法；Windows 安装程序未签名。',
          '未核实：Scout 标注为测试版，其虚拟机隔离未经测试。',
          '未核实：批准机制、文件沙箱和隐私说明均未测试，且因为闭源，无法在代码中核对。',
          '未核实：Google Play 页面只有启用 JavaScript 才能显示，未能阅读；App Store 页面只看到了标题。',
          '未核实：首页上的安装数、国家数和下载数，以及 Skales Local 的模型是否足以胜任智能体工作；没有运行任何基准测试。',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Skales 与替代方案对比',
        itemHeadings: true,
        content: [
          '**Skales 介于个人助手和自主智能体之间。PromptQuorum 没有把它与下列工具做过实际对比。** 说明来自它们在目录中的条目。',
        ],
        columns: ['工具', '目录中的记载'],
        rows: [
          { '工具': 'Skales', '目录中的记载': '专有许可，两人以内免费；Windows、Mac、Linux、iOS、Android' },
          { '工具': '[Hermes Agent](/zh/power-local-llm/hermes-agent-review)', '目录中的记载': 'MIT；具有持久记忆的自我改进型个人智能体' },
          { '工具': '[OpenClaw](/zh/power-local-llm/openclaw-review)', '目录中的记载': 'MIT；智能体工作流编排框架' },
          { '工具': '[OpenMausBot](/zh/power-local-llm/openmausbot-review)', '目录中的记载': 'Apache 2.0；在智能体 CLI 上运行机器人团队的聊天应用' },
          { '工具': '[Open Interpreter](/zh/power-local-llm/open-interpreter-review)', '目录中的记载': 'Apache 2.0；让本地 LLM 控制电脑并执行代码' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Skales 免费吗？',
            a: '个人使用、教育以及两人以内的企业可免费使用。更大的团队需要书面许可，其价格未公布。除非使用免费的 Skales IQ 试用或本地模型，否则你还需要向模型服务商付费。',
          },
          {
            q: 'Skales 能用本地模型离线运行吗？',
            a: '开发者说可以。Skales Local 随应用提供，在你的硬件上运行模型、语音识别和语音输出，也可连接 Ollama 或 LM Studio。移动端页面称，手机应用也能在设备上运行模型。PromptQuorum 没有测试其中任何一项。',
          },
          {
            q: 'Skales 有手机应用吗？',
            a: '有，Skales Mobile 在 Google Play（Android 10+）和 App Store（iOS 16+）上架。它可凭原生工具单独运行，也可通过二维码与桌面端配对，据网站称，配对后手机可使用桌面端的工具集。',
          },
          {
            q: 'Skales 是开源的吗？',
            a: '不是。开发者称它既不是开源软件，也不是源码可见软件，GitHub 仓库只用于分发发布版本、更新日志和安装指南。DevKit 和 WordPress 插件是各自独立的 MIT 许可仓库。',
          },
          {
            q: '免费试用模型用完后会怎样？',
            a: '网站称，你可以粘贴自己的服务商密钥，或切换到本地模型，在无需向 Skales 付费的情况下继续使用。试用额度的大小在此处读到的来源中没有说明。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          '**如果你想要一款在自己设备上、由自己选择模型的智能体应用，并且能接受闭源软件，Skales 值得一看。**',
          '从纸面上看，它覆盖面很广：五个平台的安装程序、面向小型企业的免费档、本地数据存储、本地模型选项、默认开启的批准提示，以及活跃的发布记录——2026 年 11 月 10 日发布了 12.9.65 版。',
          '代价也是实实在在的。代码无法审计，Windows 安装程序未签名，Scout 还是测试版，开发者自己的数字也互相矛盾。PromptQuorum 没有测试该应用。请先在不敏感的文件夹里试用，保持批准提示开启，并在依赖它之前确认哪个服务商会收到你的提示词。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Skales 网站](https://skales.app) — 开发者对智能体、目标、Studio、Scout 和语音的说明，核查于 2026 年 11 月 17 日。',
          '[下载页](https://skales.app/download/) — 各操作系统的安装程序、系统要求和首次启动说明，核查于 2026 年 11 月 17 日。',
          '[模型页](https://skales.app/models/) — Skales IQ、Skales Local 和服务商列表，核查于 2026 年 11 月 17 日。',
          '[移动端页面](https://skales.app/mobile/) — Android 和 iOS 应用、独立模式与配对模式，核查于 2026 年 11 月 17 日。',
          '[许可页面](https://skales.app/licence/) — End User Licence Agreement 1.3，核查于 2026 年 11 月 17 日。',
          '[隐私声明](https://skales.app/privacy/) — 数据控制方、数据路径、Skales IQ 和中继，核查于 2026 年 11 月 17 日。',
          '[法律声明（Imprint）](https://skales.app/imprint/) — 开发方，维也纳的个体经营者，核查于 2026 年 11 月 17 日。',
          '[Skales GitHub 仓库](https://github.com/skalesapp/skales) — README、许可变更历史、仓库创建日期和星标数，核查于 2026 年 11 月 17 日。',
          '[发布版本 v12.9.65](https://github.com/skalesapp/skales/releases/tag/v12.9.65) — 最新发布版本、日期和安装文件，核查于 2026 年 11 月 17 日。',
          '[App Store 上的 Skales](https://apps.apple.com/us/app/skales/id6763328966) — iOS 页面，核查于 2026 年 11 月 17 日。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Hermes Agent 评测：本地自主 AI 智能体](/zh/power-local-llm/hermes-agent-review) — 一款具有持久记忆的可比个人智能体。',
          '[OpenClaw 评测](/zh/power-local-llm/openclaw-review) — 智能体工作流编排框架。',
          '[OpenMausBot 评测](/zh/power-local-llm/openmausbot-review) — 运行 AI 机器人团队的桌面聊天应用。',
          '[Open Interpreter 评测](/zh/power-local-llm/open-interpreter-review) — 让本地 LLM 控制电脑并执行代码。',
          '[本地 AI 软件目录](/zh/directory) — 本地 AI 工具的完整目录。',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/skales-review-hero-ar.webp',
    title: 'مراجعة Skales: تطبيق وكيل ذكاء اصطناعي بمفتاحك أو بنماذج محلية',
    seoTitle: 'مراجعة Skales: وكيل ذكاء اصطناعي بمفتاحك أو محليًا',
    intro:
      'Skales تطبيق لسطح المكتب والهاتف يعمل كوكيل ذكاء اصطناعي: تعطيه هدفًا أو مهمة برمجة أو طلبًا صوتيًا، فينفّذ الخطوات بأدواته الخاصة ويطلب موافقتك قبل الإجراءات الخطرة. يقف وراءه Mario Simic، صاحب نشاط فردي في فيينا بالنمسا. تستند هذه المراجعة إلى موقع الشركة المطوّرة ومستودع التوزيع على GitHub وصفحتي الترخيص والخصوصية وملفات الإصدار، وقد تم التحقق منها في 17 نوفمبر 2026. لم تثبّت PromptQuorum التطبيق ولم تختبره.',
    metaDescription:
      'Skales تطبيق وكيل ذكاء اصطناعي بترخيص مملوك لأنظمة Windows وMac وLinux وAndroid وiOS. مراجعة التثبيت والنماذج والخصوصية والترخيص، مجاني لشخصين.',
    twitterDescription:
      'مراجعة Skales: تطبيق وكيل لسطح المكتب والهاتف يحفظ البيانات على جهازك ويعمل بمفتاحك أو بنموذج تجريبي أو بنماذج محلية. ترخيص مملوك.',
    audience:
      'من يريدون وكيل ذكاء اصطناعي شخصيًا على حاسوبهم وهاتفهم، والمستقلون والشركات الصغيرة، ومن يقارنون تطبيقات الوكلاء التي تدعم النماذج المحلية',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Skales',
    targetKeywords: [
      'مراجعة Skales',
      'Skales وكيل ذكاء اصطناعي',
      'Skales Local',
      'ترخيص Skales',
      'خصوصية Skales',
      'Skales مقابل OpenClaw',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Skales تطبيق وكيل ذكاء اصطناعي بترخيص مملوك لأنظمة Windows وmacOS وLinux وAndroid وiOS، يحتفظ ببياناته على جهازك ويتيح لك اختيار النموذج: مفتاح مزوّدك الخاص أو نموذج تجريبي مجاني أو نموذج محلي.** وهو مجاني للاستخدام الخاص والتعليم والشركات التي لا يزيد عدد العاملين فيها على شخصين. الشيفرة المصدرية غير منشورة، لذا لا يمكن تدقيق مطالبات الموافقة والخصوصية بشكل مستقل.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Skales ولمن هو؟',
        answer:
          'Skales تطبيق وكيل ذكاء اصطناعي يخطط للمهام متعددة الخطوات وينفذها على حاسوبك أو هاتفك بنموذج تختاره. يناسب من يريدون وكيلًا واحدًا للدردشة والبرمجة والأهداف الخلفية ويقبلون البرمجيات مغلقة المصدر.',
        bullets: [
          'الإصدار 12.9.65، نُشر في 10 نوفمبر 2026؛ بلا تحذير من مشروع متوقف.',
          'ملفات التثبيت: .exe و.dmg و.deb وAppImage، إضافة إلى تطبيقين في Google Play وApp Store.',
          'النماذج: نموذج تجريبي مجاني أو مفاتيح مزوّديك أو Skales Local أو Ollama أو LM Studio.',
          'الترخيص: Skales End User Licence Agreement 1.3، مجاني حتى شخصين.',
          'الجهة المطوّرة: نشاط فردي في فيينا بالنمسا.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'نظرة عامة', anchor: 'overview' },
      { label: 'كيفية الحصول عليه', anchor: 'get-it' },
      { label: 'المتطلبات', anchor: 'requirements' },
      { label: 'الميزات', anchor: 'features' },
      { label: 'الخصوصية وتدفق البيانات', anchor: 'privacy' },
      { label: 'الترخيص والتكلفة', anchor: 'license' },
      { label: 'لمن يناسب', anchor: 'who-should-use' },
      { label: 'ما لم نتمكن من التحقق منه', anchor: 'who-should-not-use' },
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
          {
            type: 'one-sentence',
            text: 'Skales تطبيق مغلق المصدر لسطح المكتب والهاتف يزوّد نموذج الذكاء الاصطناعي الذي تختاره بأدوات وذاكرة وأهداف خلفية وتنبيهات موافقة.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل مساعدًا يستطيع فتح الملفات وتصفح الويب وكتابة الشيفرة ومواصلة العمل على هدف بينما تنشغل بأمر آخر. يبقى سجلك على جهازك، لكن النموذج الذي تختاره قد يكون خدمة سحابية.',
          },
        ],
        items: [
          'تعمل الأهداف في الخلفية عبر خطوات كثيرة؛ وتشكّل البرمجة والصوت واستوديو إبداعي وتطبيق هاتف جزءًا من المنتج نفسه.',
          'تُخزَّن المحادثات والذاكرة والملفات على جهازك؛ أما فحص التحديثات وبعض الخدمات الاختيارية فمسارات بيانات منفصلة.',
          'بحسب الجهة المطوّرة، لم يُوقَّع مثبّت Windows رقميًا بعد؛ ويوصف إصدار macOS بأنه موقَّع وموثَّق.',
          'يحتاج التطبيق نفسه إلى نحو 300 MB من الذاكرة ولا يحتاج إلى GPU وفق أرقام الجهة المطوّرة؛ وتحتاج النماذج المحلية إلى أكثر.',
          'لم تختبر PromptQuorum التطبيق. أرقام القدرات والأدوات والتثبيت من الجهة المطوّرة نفسها.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'قد ينفّذ وكيل يصل إلى ملفاتك ومتصفحك وتقويمك وبريدك إجراءات لم تقصدها. أبقِ تنبيهات الموافقة مفعّلة، وابدأ بمجلد غير حساس، وتحقق مما يتلقاه كل مزوّد متصل.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: 'نظرة عامة',
        content: [
          '**Skales إطار وكيل: تطبيق لسطح المكتب والهاتف يزوّد نموذج ذكاء اصطناعي بأدوات وذاكرة وتخطيط وتنبيهات موافقة.**',
          `يطوّر Skales الشخص Mario Simic، الذي يعمل بحسب بيانات الإفصاح القانوني (Imprint) كنشاط فردي باسم Skales في فيينا بالنمسا. أُنشئ مستودع GitHub في 8 مارس 2026 ويعرض ${ST.ar('skales')} نجمة. الإصدار 12.9.65 هو الأحدث، ونُشر في 10 نوفمبر 2026، لذا فالتطوير مستمر ولا ينطبق تحذير المشروع المتوقف.`,
          'بحسب الجهة المطوّرة، تكتب هدفًا بالأمر /goal فيخطط Skales للخطوات ويعمل عليها في الخلفية. ومن الأجزاء الأخرى المذكورة في الموقع وملف README: وضع Code للعمل داخل مجلد، واستوديو Studio للصور والفيديو والتصميم، وواجهة الصوت Iris بكلمة تنبيه تعمل على الجهاز، وDesktop Buddy على شاشتك، وScout (تجريبي)، وهي وكلاء طويلو العمر يمكن أن يحصلوا اختياريًا على آلة افتراضية خاصة بهم.',
          'Skales Mobile تطبيق منفصل لـ Android وiOS. تقول الجهة المطوّرة إنه يعمل منفردًا أو يُقرن بسطح المكتب عبر وسيط مشفّر من طرف إلى طرف. ويصف الموقع أيضًا خوادم MCP واستيراد Agent Skills وحزمة DevKit وهي مستودع منفصل بترخيص MIT.',
          'هذه أوصاف الجهة المطوّرة. لم تشغّل PromptQuorum تطبيق Skales ولم تقِس موثوقيته أو سرعته أو جودة مخرجاته.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيفية الحصول عليه',
        content: [
          '**يُثبَّت Skales كأي تطبيق عادي: ملفات تثبيت لكل نظام تشغيل من صفحة التنزيل لدى الجهة المطوّرة، دون الحاجة إلى طرفية.**',
          'تقول الجهة المطوّرة إن إصدار Windows غير موقَّع رقميًا، لذلك يعرض Windows SmartScreen تنبيهًا لمرة واحدة. ويوصف إصدار macOS بأنه موقَّع بمعرّف Apple Developer ID وموثَّق. ويسرد إصدار GitHub رقم v12.9.65 أنواع المثبّتات نفسها المذكورة في صفحة التنزيل.',
        ],
        columns: ['المنصة', 'كيفية الحصول عليه'],
        rows: [
          { 'المنصة': '[الموقع](https://skales.app)', 'كيفية الحصول عليه': 'الموقع الرسمي مع التنزيلات والوثائق' },
          { 'المنصة': '[Windows](https://skales.app/download/)', 'كيفية الحصول عليه': 'مثبّت (.exe)، Windows 10/11 بنظام 64 بت؛ إصدار Arm' },
          { 'المنصة': '[macOS](https://skales.app/download/)', 'كيفية الحصول عليه': 'DMG لـ Apple Silicon أو Intel، macOS 11+' },
          { 'المنصة': '[Linux](https://skales.app/download/)', 'كيفية الحصول عليه': '.deb (Debian وUbuntu وMint) أو AppImage' },
          { 'المنصة': '[Android](https://play.google.com/store/apps/details?id=app.skales.mobile)', 'كيفية الحصول عليه': 'Google Play، Android 10+' },
          { 'المنصة': '[iOS](https://apps.apple.com/us/app/skales/id6763328966)', 'كيفية الحصول عليه': 'App Store، iOS 16+' },
          { 'المنصة': '[إصدارات GitHub](https://github.com/skalesapp/skales/releases)', 'كيفية الحصول عليه': 'ملفات الإصدار وسجل التغييرات وأدلة التثبيت' },
          { 'المنصة': '[سياسة الخصوصية](https://skales.app/privacy/)', 'كيفية الحصول عليه': 'إشعار الخصوصية، آخر تحديث في 14 سبتمبر 2026' },
        ],
        note: 'يعمل تطبيق الهاتف منفردًا أو مقترنًا بسطح المكتب. وتحتاج الآلة الافتراضية لـ Scout إلى دعم المحاكاة الافتراضية في الحاسوب.',
      },
      requirements: {
        id: 'requirements',
        title: 'المتطلبات',
        content: [
          '**بحسب أرقام الجهة المطوّرة، التطبيق نفسه خفيف، بينما تُحتسب احتياجات النماذج وScout على حدة.** تعتمد متطلبات العتاد للنماذج المحلية على النموذج الذي تختاره ولم تُختبر.',
        ],
        columns: ['البند', 'الرقم المعلن'],
        rows: [
          { 'البند': 'الذاكرة المستخدمة', 'الرقم المعلن': 'نحو 300 MB في الاستخدام العادي (صفحة التنزيل)' },
          { 'البند': 'GPU', 'الرقم المعلن': 'غير مطلوب للتطبيق (صفحة التنزيل)' },
          { 'البند': 'نظام التشغيل', 'الرقم المعلن': 'Windows 10/11 بنظام 64 بت؛ macOS 11+؛ Linux x64' },
          { 'البند': 'الهاتف', 'الرقم المعلن': 'Android 10+؛ iOS 16+' },
          { 'البند': 'الآلة الافتراضية لـ Scout', 'الرقم المعلن': 'نحو معالجين و2 GB ذاكرة و12 GB قرص' },
          { 'البند': 'الشبكة', 'الرقم المعلن': 'المزودون السحابيون يحتاجون إنترنت؛ والمحلية تعمل دون اتصال' },
        ],
        note: 'تحتاج الآلة الافتراضية لـ Scout أيضًا إلى دعم المحاكاة الافتراضية؛ وبدونه يعمل الـ scout على الجهاز المضيف ويسأل أولًا.',
      },
      features: {
        id: 'features',
        title: 'الميزات',
        content: [
          '**يجمع Skales في تطبيق واحد منفّذ أهداف وأدوات برمجة وصوتًا واستوديو إبداعيًا وخيار النموذج.** كل ما يلي مطالبات من الجهة المطوّرة مأخوذة من الموقع وملف README.',
        ],
        items: [
          'الأهداف: يبدأ الأمر /goal عملًا متعدد الخطوات يستمر في الخلفية، مع جداول زمنية وتنبيهات موافقة مفعّلة افتراضيًا.',
          'يربط وضع Code ونافذة Skales Code محادثة بمجلد، مع أوضاع Plan وCode وAuto ومراجعة التغييرات كتلة بكتلة وgit داخل النافذة.',
          'اختيار النموذج: تجربة Skales IQ، ومفاتيحك لدى مزودين كثيرين، وتسجيل الدخول باشتراك ChatGPT، وOllama وLM Studio وKoboldCpp وvLLM ونقاط نهاية مخصصة.',
          'Skales Local: خادم استدلال مدمج مع فهرس مختار من نماذج النص والرؤية والكلام والصور تعمل على عتادك.',
          'Studio: صور وفيديو وصوت وموسيقى ومسودات تصميم، عبر خدمات سحابية أو ComfyUI محلي.',
          'واجهة الصوت Iris: كلمة تنبيه على الجهاز، بالأدوات نفسها المتاحة في جولة الدردشة.',
          'Scout (تجريبي): وكلاء طويلو العمر يمكن أن يعملوا في آلة افتراضية خاصة بهم، تستطيع مشاهدتها وتولّي التحكم.',
          'التكاملات: WordPress والتقاويم والبريد وNotion وGitHub وTelegram وDiscord وWhatsApp وSlack وSignal وHome Assistant وخوادم MCP وAgent Skills (SKILL.md).',
          'إضافات: إضافات Office وامتداد Chrome وأداة استيراد لبيانات ChatGPT وClaude وOpenClaw وHermes Agent.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية وتدفق البيانات',
        content: [
          '**بحسب إشعار الخصوصية، تبقى المحادثات والملفات والذاكرة والإعدادات على جهازك، وتُعد عدة خدمات اختيارية مسارات بيانات منفصلة.**',
          'الجهة المسؤولة عن البيانات المذكورة في الإشعار هي Mario Simic الذي يعمل باسم Skales في فيينا. يصف الإشعار Skales Desktop وMobile بأنهما برنامجان مثبّتان وليسا خدمة سحابية. على سطح المكتب تُحفظ مفاتيح API في ملف إعدادات داخل مجلد بياناتك تحميه أذونات الملفات؛ وعلى Android وiOS تُحفظ في التخزين الآمن لنظام التشغيل.',
          'ما يغادر الجهاز: فحص التحديثات (كل أربع ساعات على سطح المكتب) يرسل اسم البرنامج والإصدار ونظام التشغيل والمعمارية ومعرّف البناء ونتيجة فحص سلامة، ولا تُرسل تقارير الأخطاء إلا عندما ترسلها أنت. إحصاءات الاستخدام وخلاصة Discover العامة اختياريتان ومعطّلتان افتراضيًا. أما الوسيط المستخدم لإقران الهاتف فيشفّر الرسائل من طرف إلى طرف، لكنه يرى أسماء الأجهزة ومعرّفاتها وأوقات الاتصال وأحجام الرسائل.',
          'تجربة Skales IQ هي مسار النموذج الوحيد الذي يمر عبر الجهة المطوّرة. يقول الإشعار إنها تخزّن عنوان بريدك ومعرّفات مشفّرة بالتجزئة، وتمرّر الطلبات إلى OpenRouter, Inc. في الولايات المتحدة مع تعليمات بعدم الاحتفاظ بالبيانات، ولا تخزّن المطالبات ولا الإجابات. أما مع مفتاحك الخاص فتذهب الطلبات من جهازك مباشرة إلى ذلك المزوّد.',
          'يضيف ملف README وضع خصوصية يُبقي الذاكرة خارج المطالبات المرسلة إلى النماذج السحابية. لم تفحص PromptQuorum حركة الشبكة ولم تتحقق من أي من هذه الأقوال.',
        ],
      },
      license: {
        id: 'license',
        title: 'الترخيص والتكلفة',
        content: [
          '**Skales برنامج مملوك بموجب Skales End User Licence Agreement، مجاني للاستخدام الخاص والتعليم والشركات التي لا يزيد عدد العاملين فيها على شخصين.**',
          'تقول النسخة 1.3 من الاتفاقية، المؤرخة في 9 نوفمبر 2026، إن Skales ليس مفتوح المصدر ولا متاح المصدر. تحتاج الفرق الأكبر والشركات والجهات العامة إلى ترخيص تجاري مكتوب بعد 30 يومًا من التقييم، ويتطلب الاستضافة أو إعادة العلامة اتفاقًا منفصلًا. وبحسب README، وُزّعت الإصدارات حتى 12.9.27 بموجب Business Source License 1.1.',
          'لا تنشر صفحات الترخيص سعرًا للتراخيص التجارية. وتكاليف النموذج منفصلة: تدفع لمزوّدك الخاص أو تستخدم تجربة Skales IQ المجانية التي لا تذكر المصادر المقروءة هنا حصتها.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        content: [
          '**يناسب Skales من يريدون وكيلًا على أجهزتهم الخاصة ويرغبون في اختيار النموذج، بما في ذلك نموذج محلي.**',
        ],
        items: [
          'من يريدون وكيلًا واحدًا للدردشة والبرمجة والأهداف الخلفية على سطح المكتب والهاتف.',
          'المستقلون والشركات التي لا يزيد عدد العاملين فيها على شخصين، إذ يجوز لهم الاستخدام التجاري بموجب الترخيص.',
          'مستخدمو أدوات الوكلاء الأخرى الراغبون في استيراد سجلهم؛ ويذكر README كلًّا من ChatGPT وClaude وOpenClaw وHermes Agent.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        content: [
          '**لا يناسب Skales بعض الحالات، وتبقى عدة تفاصيل دون تحقق.**',
        ],
        items: [
          'لا يناسب: من يحتاج إلى شيفرة مفتوحة المصدر أو تدقيق مستقل للشيفرة؛ فلا شيفرة مصدرية منشورة.',
          'لا يناسب: الشركات التي يزيد عدد العاملين فيها على شخصين وليس لديها ترخيص تجاري.',
          'غير متحقق منه: أرقام الجهة المطوّرة نفسها متعارضة. فعدد المزودين 15+ في README و26 في وصف المستودع و29 في الموقع؛ وعدد الأدوات المدمجة 400+ في الموقع و260+ في README.',
          'غير متحقق منه: التوقيع والتوثيق على macOS ونتيجة فحص مضادات الفيروسات في صفحة التنزيل أقوال من الجهة المطوّرة؛ ومثبّت Windows غير موقَّع.',
          'غير متحقق منه: Scout موسوم بأنه تجريبي، ولم يُختبر عزل آلته الافتراضية.',
          'غير متحقق منه: لم تُختبر تنبيهات الموافقة ولا صندوق الملفات المعزول ولا أقوال الخصوصية، ولأن الشيفرة مغلقة لا يمكن فحصها في الشيفرة.',
          'غير متحقق منه: صفحة Google Play لا تُعرض إلا بتفعيل JavaScript ولم تُقرأ؛ وصفحة App Store اطّلعنا على عنوانها فقط.',
          'غير متحقق منه: أرقام التثبيت والدول والتنزيل في الصفحة الرئيسية، وما إذا كانت نماذج Skales Local كافية لعمل الوكلاء؛ ولم تُجرَ أي اختبارات أداء.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Skales مقابل البدائل',
        itemHeadings: true,
        content: [
          '**يقع Skales بين المساعدين الشخصيين والوكلاء المستقلين. لم تقارنه PromptQuorum عمليًا بالأدوات أدناه.** والملاحظات مأخوذة من إدخالاتها في الدليل.',
        ],
        columns: ['الأداة', 'كما في الدليل'],
        rows: [
          { 'الأداة': 'Skales', 'كما في الدليل': 'ترخيص مملوك، مجاني حتى شخصين؛ Windows وMac وLinux وiOS وAndroid' },
          { 'الأداة': '[Hermes Agent](/ar/power-local-llm/hermes-agent-review)', 'كما في الدليل': 'MIT؛ وكيل شخصي يحسّن نفسه بذاكرة دائمة' },
          { 'الأداة': '[OpenClaw](/ar/power-local-llm/openclaw-review)', 'كما في الدليل': 'MIT؛ إطار تنسيق لسير عمل الوكلاء' },
          { 'الأداة': '[OpenMausBot](/ar/power-local-llm/openmausbot-review)', 'كما في الدليل': 'Apache 2.0؛ تطبيق دردشة يشغّل فريق روبوتات على واجهات أوامر الوكلاء' },
          { 'الأداة': '[Open Interpreter](/ar/power-local-llm/open-interpreter-review)', 'كما في الدليل': 'Apache 2.0؛ يتيح لنموذج LLM محلي التحكم بالحاسوب وتنفيذ الشيفرة' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Skales مجاني؟',
            a: 'نعم للاستخدام الخاص والتعليم والشركات التي لا يزيد عدد العاملين فيها على شخصين. تحتاج الفرق الأكبر إلى ترخيص مكتوب لا يُنشر سعره. وتدفع كذلك لمزوّد النماذج ما لم تستخدم تجربة Skales IQ المجانية أو نموذجًا محليًا.',
          },
          {
            q: 'هل يعمل Skales دون اتصال بنماذج محلية؟',
            a: 'تقول الجهة المطوّرة نعم. يأتي Skales Local مع التطبيق وينفّذ النماذج والتعرف على الكلام وإخراج الصوت على عتادك، ويمكن توصيل Ollama أو LM Studio. وتقول صفحة الهاتف إن تطبيق الهاتف يستطيع أيضًا تشغيل نموذج على الجهاز. لم تختبر PromptQuorum أيًّا من ذلك.',
          },
          {
            q: 'هل لدى Skales تطبيق للهاتف؟',
            a: 'نعم، Skales Mobile في Google Play (Android 10+) وApp Store (iOS 16+). يعمل منفردًا بأدواته الأصلية أو يُقرن بسطح المكتب برمز QR، وبعد ذلك يصل الهاتف، بحسب الموقع، إلى مجموعة أدوات سطح المكتب.',
          },
          {
            q: 'هل Skales مفتوح المصدر؟',
            a: 'لا. تقول الجهة المطوّرة إنه ليس مفتوح المصدر ولا متاح المصدر، وإن مستودع GitHub لا يوزّع سوى الإصدارات وسجل التغييرات وأدلة التثبيت. أما DevKit وإضافة WordPress فمستودعان منفصلان بترخيص MIT.',
          },
          {
            q: 'ماذا يحدث عندما ينفد النموذج التجريبي المجاني؟',
            a: 'يقول الموقع إنه يمكنك لصق مفتاح مزوّدك الخاص أو التحويل إلى نموذج محلي ومواصلة العمل دون تكلفة من Skales. أما حجم حصة التجربة فلا تذكره المصادر المقروءة هنا.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content: [
          '**يستحق Skales نظرة إن كنت تريد تطبيق وكيل على أجهزتك الخاصة تختار فيه النموذج، وتقبل البرمجيات مغلقة المصدر.**',
          'على الورق يغطي الكثير: ملفات تثبيت لخمس منصات، وفئة مجانية للشركات الصغيرة، وتخزين محلي للبيانات، وخيارات للنماذج المحلية، وتنبيهات موافقة مفعّلة افتراضيًا، وسجل إصدارات نشط بالإصدار 12.9.65 في 10 نوفمبر 2026.',
          'والمقايضات حقيقية. لا يمكن تدقيق الشيفرة، ومثبّت Windows غير موقَّع، وScout تجريبي، وأرقام الجهة المطوّرة نفسها متعارضة. لم تختبر PromptQuorum التطبيق. جرّبه على مجلد غير حساس، وأبقِ تنبيهات الموافقة مفعّلة، وتحقق من المزوّد الذي يتلقى مطالباتك قبل أن تعتمد عليه.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[موقع Skales](https://skales.app) — وصف الجهة المطوّرة للوكيل والأهداف وStudio وScout والصوت، تم التحقق في 17 نوفمبر 2026.',
          '[صفحة التنزيل](https://skales.app/download/) — مثبّتات كل نظام ومتطلبات النظام وملاحظات التشغيل الأول، تم التحقق في 17 نوفمبر 2026.',
          '[صفحة النماذج](https://skales.app/models/) — Skales IQ وSkales Local وقائمة المزودين، تم التحقق في 17 نوفمبر 2026.',
          '[صفحة الهاتف](https://skales.app/mobile/) — تطبيق Android وiOS والوضعان المنفرد والمقترن، تم التحقق في 17 نوفمبر 2026.',
          '[صفحة الترخيص](https://skales.app/licence/) — End User Licence Agreement 1.3، تم التحقق في 17 نوفمبر 2026.',
          '[إشعار الخصوصية](https://skales.app/privacy/) — الجهة المسؤولة ومسارات البيانات وSkales IQ والوسيط، تم التحقق في 17 نوفمبر 2026.',
          '[الإفصاح القانوني (Imprint)](https://skales.app/imprint/) — الجهة المطوّرة، نشاط فردي في فيينا، تم التحقق في 17 نوفمبر 2026.',
          '[مستودع Skales على GitHub](https://github.com/skalesapp/skales) — README وتاريخ التراخيص وتاريخ إنشاء المستودع وعدد النجوم، تم التحقق في 17 نوفمبر 2026.',
          '[الإصدار v12.9.65](https://github.com/skalesapp/skales/releases/tag/v12.9.65) — أحدث إصدار وتاريخه وملفات التثبيت، تم التحقق في 17 نوفمبر 2026.',
          '[Skales على App Store](https://apps.apple.com/us/app/skales/id6763328966) — صفحة iOS، تم التحقق في 17 نوفمبر 2026.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Hermes Agent: وكيل ذكاء اصطناعي محلي مستقل](/ar/power-local-llm/hermes-agent-review) — وكيل شخصي مماثل بذاكرة دائمة.',
          '[مراجعة OpenClaw](/ar/power-local-llm/openclaw-review) — إطار تنسيق لسير عمل الوكلاء.',
          '[مراجعة OpenMausBot](/ar/power-local-llm/openmausbot-review) — تطبيق دردشة لسطح المكتب يشغّل فريقًا من روبوتات الذكاء الاصطناعي.',
          '[مراجعة Open Interpreter](/ar/power-local-llm/open-interpreter-review) — يتيح لنموذج LLM محلي التحكم بالحاسوب وتنفيذ الشيفرة.',
          '[دليل برمجيات الذكاء الاصطناعي المحلي](/ar/directory) — الفهرس الكامل لأدوات الذكاء الاصطناعي المحلي.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-11-17',
    dateModified: '2026-11-17',
    next_refresh_due: '2027-05-18',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/skales-review-hero-ko.webp',
    title: 'Skales 리뷰: 내 키나 로컬 모델로 쓰는 AI 에이전트 앱',
    seoTitle: 'Skales 리뷰: 내 키·로컬 모델 AI 에이전트 앱',
    intro:
      'Skales는 AI 에이전트로 동작하는 데스크톱·휴대폰 앱입니다. 목표, 코딩 작업, 음성 요청을 전달하면 자체 도구로 단계를 실행하고, 위험한 작업 전에는 승인을 요청합니다. 오스트리아 빈의 개인사업자 Mario Simic이 만들었습니다. 이 리뷰는 제작자의 웹사이트, GitHub 배포용 저장소, 라이선스·개인정보 페이지, 릴리스 파일을 바탕으로 2026년 11월 17일에 확인한 내용입니다. PromptQuorum은 이 앱을 설치하거나 테스트하지 않았습니다.',
    metaDescription:
      'Skales는 독점 라이선스 AI 에이전트 앱(Windows·Mac·Linux·Android·iOS)입니다. 설치, 모델, 개인정보, 라이선스를 살펴봅니다. 2인까지 무료.',
    twitterDescription:
      'Skales 리뷰: 데이터를 기기에 저장하고 내 키, 체험 모델, 로컬 모델로 동작하는 데스크톱·휴대폰 에이전트 앱. 독점 라이선스.',
    audience:
      '자신의 컴퓨터와 휴대폰에서 개인 AI 에이전트를 쓰고 싶은 분, 프리랜서와 소규모 사업자, 로컬 모델을 쓸 수 있는 에이전트 앱을 비교하는 분',
    readTime: '8분 읽기',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Skales',
    targetKeywords: [
      'Skales 리뷰',
      'Skales AI 에이전트',
      'Skales Local',
      'Skales 라이선스',
      'Skales 개인정보',
      'Skales OpenClaw 비교',
    ],
    current_models_mentioned: [],
    leadAnswerBlock:
      '**Skales는 Windows, macOS, Linux, Android, iOS용 독점 라이선스 AI 에이전트 앱으로, 데이터를 기기에 보관하고 모델은 내 제공업체 키, 무료 체험 모델, 로컬 모델 중에서 고를 수 있습니다.** 개인 사용, 교육, 2인 이하 사업체는 무료입니다. 소스 코드가 공개되어 있지 않아 승인 절차와 개인정보 관련 설명을 독립적으로 검증할 수 없습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Skales는 무엇이며 누구에게 맞나요?',
        answer:
          'Skales는 선택한 모델로 컴퓨터나 휴대폰에서 여러 단계의 작업을 계획하고 실행하는 AI 에이전트 앱입니다. 채팅, 코딩, 백그라운드 목표를 하나의 에이전트로 처리하고 싶고 비공개 소스 소프트웨어를 받아들일 수 있는 분에게 맞습니다.',
        bullets: [
          '버전 12.9.65, 2026년 11월 10일 출시. 방치된 프로젝트 경고 없음.',
          '설치 파일: .exe, .dmg, .deb, AppImage와 Google Play·App Store 앱.',
          '모델: 무료 체험 모델, 내 제공업체 키, Skales Local, Ollama, LM Studio.',
          '라이선스: Skales End User Licence Agreement 1.3, 2인까지 무료.',
          '제작 주체: 오스트리아 빈의 개인사업자.',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '개요', anchor: 'overview' },
      { label: '구하는 방법', anchor: 'get-it' },
      { label: '요구 사항', anchor: 'requirements' },
      { label: '기능', anchor: 'features' },
      { label: '개인정보와 데이터 흐름', anchor: 'privacy' },
      { label: '라이선스와 비용', anchor: 'license' },
      { label: '이런 분께 맞습니다', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
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
          {
            type: 'one-sentence',
            text: 'Skales는 선택한 AI 모델에 도구, 메모리, 백그라운드 목표, 승인 요청을 더해 주는 비공개 소스 데스크톱·휴대폰 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: '파일을 열고, 웹을 탐색하고, 코드를 작성하고, 내가 다른 일을 하는 동안에도 목표를 계속 진행하는 어시스턴트라고 생각하면 됩니다. 기록은 기기에 남지만, 선택한 모델은 클라우드 서비스일 수 있습니다.',
          },
        ],
        items: [
          '목표는 백그라운드에서 여러 단계에 걸쳐 실행됩니다. 코딩, 음성, 창작용 Studio, 휴대폰 앱이 같은 제품에 포함되어 있습니다.',
          '대화, 메모리, 파일은 기기에 저장됩니다. 업데이트 확인과 일부 선택 서비스는 별도의 데이터 경로입니다.',
          '제작자에 따르면 Windows 설치 프로그램은 아직 코드 서명이 되어 있지 않으며, macOS 빌드는 서명 및 공증된 것으로 설명됩니다.',
          '제작자가 밝힌 수치로 앱 자체는 RAM 약 300 MB가 필요하고 GPU는 필요 없습니다. 로컬 모델은 더 많이 필요합니다.',
          'PromptQuorum은 이 앱을 테스트하지 않았습니다. 기능, 도구, 설치에 관한 수치는 제작자의 것입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '파일, 브라우저, 캘린더, 이메일에 접근하는 에이전트는 의도하지 않은 작업을 수행할 수 있습니다. 승인 요청을 켜 두고, 민감하지 않은 폴더로 시작하며, 연결한 각 제공업체가 무엇을 받는지 확인하십시오.',
          },
        ],
      },
      overview: {
        id: 'overview',
        title: '개요',
        content: [
          '**Skales는 에이전트 하네스입니다. AI 모델에 도구, 메모리, 계획, 승인 요청을 더하는 데스크톱·휴대폰 앱입니다.**',
          `Skales는 Mario Simic이 만들었으며, 법적 고지(Imprint)에 따르면 오스트리아 빈에서 Skales라는 이름으로 개인사업자로 활동합니다. GitHub 저장소는 2026년 3월 8일에 만들어졌고 스타가 ${ST.ko('skales')}개 표시됩니다. 버전 12.9.65가 2026년 11월 10일에 공개된 최신 릴리스이므로 개발이 계속되고 있으며 방치된 프로젝트 경고는 해당되지 않습니다.`,
          '제작자에 따르면 /goal로 목표를 입력하면 Skales가 단계를 계획하고 백그라운드에서 처리합니다. 사이트와 README에 언급된 다른 구성 요소로는 폴더 안에서 작업하는 Code 모드, 이미지·동영상·디자인용 Studio, 기기에서 동작하는 호출어를 갖춘 음성 인터페이스 Iris, 화면 위의 Desktop Buddy, 그리고 선택적으로 전용 가상 머신을 가질 수 있는 장기 실행 에이전트 Scout(베타)가 있습니다.',
          'Skales Mobile은 Android와 iOS용 별도 앱입니다. 제작자는 단독으로 동작하거나 종단 간 암호화 릴레이를 통해 데스크톱과 페어링할 수 있다고 설명합니다. 사이트에는 MCP 서버, Agent Skills 가져오기, 별도 MIT 라이선스 저장소인 DevKit도 소개되어 있습니다.',
          '이는 제작자의 설명입니다. PromptQuorum은 Skales를 실행하지 않았으며 신뢰성, 속도, 출력 품질을 측정하지 않았습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '구하는 방법',
        content: [
          '**Skales는 일반 앱처럼 설치합니다. 제작자의 다운로드 페이지에서 운영체제별 설치 파일을 받으며 터미널은 필요 없습니다.**',
          '제작자에 따르면 Windows 빌드는 코드 서명이 되어 있지 않아 Windows SmartScreen이 한 번 안내를 표시합니다. macOS 빌드는 Apple Developer ID로 서명되고 공증된 것으로 설명됩니다. GitHub 릴리스 v12.9.65에는 다운로드 페이지와 같은 종류의 설치 파일이 올라와 있습니다.',
        ],
        columns: ['플랫폼', '구하는 방법'],
        rows: [
          { '플랫폼': '[웹사이트](https://skales.app)', '구하는 방법': '공식 사이트, 다운로드와 문서' },
          { '플랫폼': '[Windows](https://skales.app/download/)', '구하는 방법': '설치 프로그램(.exe), Windows 10/11 64비트, Arm 빌드' },
          { '플랫폼': '[macOS](https://skales.app/download/)', '구하는 방법': 'Apple Silicon·Intel용 DMG, macOS 11 이상' },
          { '플랫폼': '[Linux](https://skales.app/download/)', '구하는 방법': '.deb(Debian, Ubuntu, Mint) 또는 AppImage' },
          { '플랫폼': '[Android](https://play.google.com/store/apps/details?id=app.skales.mobile)', '구하는 방법': 'Google Play, Android 10 이상' },
          { '플랫폼': '[iOS](https://apps.apple.com/us/app/skales/id6763328966)', '구하는 방법': 'App Store, iOS 16 이상' },
          { '플랫폼': '[GitHub 릴리스](https://github.com/skalesapp/skales/releases)', '구하는 방법': '릴리스 파일, 변경 내역, 설치 가이드' },
          { '플랫폼': '[개인정보 처리방침](https://skales.app/privacy/)', '구하는 방법': '개인정보 고지, 최종 업데이트 2026년 9월 14일' },
        ],
        note: '휴대폰 앱은 단독으로도, 데스크톱과 페어링해서도 동작합니다. Scout의 가상 머신에는 컴퓨터의 가상화 지원이 필요합니다.',
      },
      requirements: {
        id: 'requirements',
        title: '요구 사항',
        content: [
          '**제작자가 밝힌 수치로는 앱 자체는 가볍고, 모델과 Scout에 필요한 자원은 별도입니다.** 로컬 모델에 필요한 하드웨어는 선택하는 모델에 따라 다르며 테스트하지 않았습니다.',
        ],
        columns: ['항목', '명시된 수치'],
        rows: [
          { '항목': '사용 RAM', '명시된 수치': '일반 사용 시 약 300 MB(다운로드 페이지)' },
          { '항목': 'GPU', '명시된 수치': '앱 자체에는 불필요(다운로드 페이지)' },
          { '항목': '운영체제', '명시된 수치': 'Windows 10/11 64비트, macOS 11 이상, Linux x64' },
          { '항목': '휴대폰', '명시된 수치': 'Android 10 이상, iOS 16 이상' },
          { '항목': 'Scout 가상 머신', '명시된 수치': '약 CPU 2개, 메모리 2 GB, 디스크 12 GB' },
          { '항목': '네트워크', '명시된 수치': '클라우드는 인터넷 필요, 로컬 모델은 오프라인 가능' },
        ],
        note: 'Scout 가상 머신에는 가상화 지원도 필요하며, 없으면 scout가 호스트에서 실행되고 먼저 확인을 요청합니다.',
      },
      features: {
        id: 'features',
        title: '기능',
        content: [
          '**Skales는 목표 실행기, 코딩 도구, 음성, 창작 스튜디오, 모델 선택을 하나의 앱에 담았습니다.** 아래는 모두 사이트와 README에 있는 제작자의 주장입니다.',
        ],
        items: [
          '목표: /goal로 여러 단계의 작업을 시작하면 백그라운드에서 계속되며, 일정과 기본으로 켜진 승인 절차가 있습니다.',
          'Code 모드와 Skales Code 창은 대화를 폴더에 연결하며, Plan·Code·Auto 모드, 변경 사항의 블록 단위 검토, 창 안의 git을 제공합니다.',
          '모델 선택: Skales IQ 체험, 여러 제공업체의 내 키, ChatGPT 구독으로 로그인, Ollama, LM Studio, KoboldCpp, vLLM, 사용자 지정 엔드포인트.',
          'Skales Local: 내장 추론 서버와, 내 하드웨어에서 실행되는 텍스트·비전·음성·이미지 모델의 선별된 카탈로그.',
          'Studio: 이미지, 동영상, 음성, 음악, 디자인 초안. 클라우드 서비스 또는 로컬 ComfyUI를 사용합니다.',
          '음성 인터페이스 Iris: 기기에서 동작하는 호출어와 채팅 턴과 같은 도구.',
          'Scout(베타): 전용 가상 머신에서 실행할 수 있는 장기 에이전트로, 지켜보다가 직접 넘겨받을 수 있습니다.',
          '연동: WordPress, 캘린더, 이메일, Notion, GitHub, Telegram, Discord, WhatsApp, Slack, Signal, Home Assistant, MCP 서버, Agent Skills(SKILL.md).',
          '부가 기능: Office 추가 기능, Chrome 확장 프로그램, ChatGPT·Claude·OpenClaw·Hermes Agent 데이터 가져오기 도구.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 데이터 흐름',
        content: [
          '**개인정보 고지에 따르면 대화, 파일, 메모리, 설정은 기기에 남고, 몇 가지 선택 서비스는 별도의 데이터 경로입니다.**',
          '고지에 명시된 관리자는 빈에서 Skales라는 이름으로 활동하는 Mario Simic입니다. 고지는 Skales Desktop과 Mobile을 클라우드 서비스가 아니라 설치형 프로그램으로 설명합니다. 데스크톱에서는 API 키가 데이터 폴더 안의 설정 파일에 저장되어 파일 권한으로 보호되고, Android와 iOS에서는 운영체제의 보안 저장소에 저장됩니다.',
          '기기를 떠나는 것: 업데이트 확인(데스크톱은 4시간마다)은 프로그램 이름, 버전, 운영체제, 아키텍처, 빌드 식별자, 무결성 검사 결과를 전송하며, 버그 보고서는 사용자가 보낼 때만 전송됩니다. 사용 통계와 공개 Discover 피드는 선택 사항이며 기본값은 꺼짐입니다. 휴대폰 페어링에 쓰이는 릴레이는 메시지를 종단 간 암호화하지만, 기기 이름과 식별자, 연결 시각, 메시지 크기는 볼 수 있습니다.',
          'Skales IQ 체험은 제작자를 거치는 유일한 모델 경로입니다. 고지에 따르면 이메일 주소와 해시된 식별자를 저장하고, 데이터 보존 제로 지시를 붙여 요청을 미국의 OpenRouter, Inc.로 전달하며, 프롬프트와 응답은 저장하지 않습니다. 내 키를 쓰면 요청은 내 기기에서 해당 제공업체로 바로 전송됩니다.',
          'README에는 클라우드 모델로 보내는 프롬프트에서 메모리를 제외하는 개인정보 보호 모드도 나와 있습니다. PromptQuorum은 네트워크 트래픽을 점검하지 않았으며 이 설명들을 검증하지 않았습니다.',
        ],
      },
      license: {
        id: 'license',
        title: '라이선스와 비용',
        content: [
          '**Skales는 Skales End User Licence Agreement에 따른 독점 소프트웨어로, 개인 사용, 교육, 2인 이하 사업체는 무료입니다.**',
          '2026년 11월 9일자 약관 버전 1.3은 Skales가 오픈 소스도, 소스 공개형도 아니라고 밝힙니다. 더 큰 팀, 기업, 공공기관은 30일 평가 후 서면 상용 라이선스가 필요하고, 호스팅이나 화이트라벨은 별도 계약이 필요합니다. README에 따르면 12.9.27까지의 릴리스는 Business Source License 1.1로 제공되었습니다.',
          '라이선스 페이지에는 상용 라이선스 가격이 공개되어 있지 않습니다. 모델 비용은 별도입니다. 내 제공업체에 직접 지불하거나 무료 Skales IQ 체험을 쓰며, 체험 한도는 여기서 읽은 출처에 명시되어 있지 않습니다.',
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 맞습니다',
        content: [
          '**Skales는 내 기기에서 에이전트를 쓰고 싶고, 로컬 모델을 포함해 모델을 직접 고르고 싶은 분께 맞습니다.**',
        ],
        items: [
          '데스크톱과 휴대폰에서 채팅, 코딩, 백그라운드 목표를 하나의 에이전트로 처리하고 싶은 분.',
          '라이선스에 따라 상업적으로 사용할 수 있는 프리랜서와 2인 이하 사업체.',
          '다른 에이전트 도구의 기록을 가져오고 싶은 사용자. README에는 ChatGPT, Claude, OpenClaw, Hermes Agent가 언급되어 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        content: [
          '**Skales가 맞지 않는 상황이 있으며, 몇 가지 세부 사항은 확인되지 않았습니다.**',
        ],
        items: [
          '맞지 않음: 오픈 소스 코드나 독립적인 소스 감사가 필요한 분. 공개된 소스가 없습니다.',
          '맞지 않음: 상용 라이선스 없이 3인 이상으로 운영하는 기업.',
          '미확인: 제작자 자신의 수치가 서로 다릅니다. 제공업체 수는 README에서 15개 이상, 저장소 설명에서 26개, 웹사이트에서 29개이며, 내장 도구는 웹사이트에서 400개 이상, README에서 260개 이상입니다.',
          '미확인: macOS 서명과 공증, 다운로드 페이지의 백신 검사 결과는 제작자의 설명입니다. Windows 설치 프로그램은 서명되어 있지 않습니다.',
          '미확인: Scout는 베타로 표시되어 있으며 가상 머신의 격리는 테스트하지 않았습니다.',
          '미확인: 승인 절차, 파일 샌드박스, 개인정보 관련 설명은 테스트하지 않았고, 소스가 비공개라 코드로 확인할 수도 없습니다.',
          '미확인: Google Play 페이지는 JavaScript로만 표시되어 읽지 못했고, App Store 페이지는 제목만 확인했습니다.',
          '미확인: 홈페이지의 설치 수, 국가 수, 다운로드 수와 Skales Local 모델이 에이전트 작업에 충분한지 여부. 벤치마크는 실행하지 않았습니다.',
        ],
      },
      vsAlternatives: {
        id: 'alternatives',
        title: 'Skales와 대안 비교',
        itemHeadings: true,
        content: [
          '**Skales는 개인 어시스턴트와 자율 에이전트의 중간에 있습니다. PromptQuorum은 아래 도구들과 직접 비교해 보지 않았습니다.** 설명은 각 도구의 디렉터리 항목에서 가져왔습니다.',
        ],
        columns: ['도구', '디렉터리 기재 내용'],
        rows: [
          { '도구': 'Skales', '디렉터리 기재 내용': '독점 라이선스, 2인까지 무료. Windows·Mac·Linux·iOS·Android' },
          { '도구': '[Hermes Agent](/ko/power-local-llm/hermes-agent-review)', '디렉터리 기재 내용': 'MIT. 영구 메모리를 갖춘 자기 개선형 개인 에이전트' },
          { '도구': '[OpenClaw](/ko/power-local-llm/openclaw-review)', '디렉터리 기재 내용': 'MIT. 에이전트 워크플로 오케스트레이션 프레임워크' },
          { '도구': '[OpenMausBot](/ko/power-local-llm/openmausbot-review)', '디렉터리 기재 내용': 'Apache 2.0. 에이전트 CLI 위에서 봇 팀을 운영하는 채팅 앱' },
          { '도구': '[Open Interpreter](/ko/power-local-llm/open-interpreter-review)', '디렉터리 기재 내용': 'Apache 2.0. 로컬 LLM이 컴퓨터를 제어하고 코드를 실행하게 함' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Skales는 무료인가요?',
            a: '개인 사용, 교육, 2인 이하 사업체는 무료입니다. 더 큰 팀은 서면 라이선스가 필요하며 가격은 공개되어 있지 않습니다. 무료 Skales IQ 체험이나 로컬 모델을 쓰지 않는 한 모델 제공업체에도 비용을 지불합니다.',
          },
          {
            q: 'Skales는 로컬 모델로 오프라인에서 동작하나요?',
            a: '제작자는 가능하다고 밝힙니다. Skales Local은 앱에 포함되어 모델, 음성 인식, 음성 출력을 내 하드웨어에서 실행하며, Ollama나 LM Studio를 연결할 수도 있습니다. 모바일 페이지에는 휴대폰 앱도 기기에서 모델을 실행할 수 있다고 나와 있습니다. PromptQuorum은 이를 테스트하지 않았습니다.',
          },
          {
            q: 'Skales에는 모바일 앱이 있나요?',
            a: '예. Skales Mobile은 Google Play(Android 10 이상)와 App Store(iOS 16 이상)에 있습니다. 네이티브 도구로 단독 동작하거나 QR 코드로 데스크톱과 페어링하며, 사이트에 따르면 페어링 후 휴대폰에서 데스크톱의 도구 모음에 접근할 수 있습니다.',
          },
          {
            q: 'Skales는 오픈 소스인가요?',
            a: '아니요. 제작자는 오픈 소스도 소스 공개형도 아니라고 밝히며, GitHub 저장소는 릴리스, 변경 내역, 설치 가이드만 배포합니다. DevKit와 WordPress 플러그인은 MIT 라이선스의 별도 저장소입니다.',
          },
          {
            q: '무료 체험 모델을 다 쓰면 어떻게 되나요?',
            a: '사이트에 따르면 내 제공업체 키를 붙여 넣거나 로컬 모델로 전환해 Skales 측 비용 없이 계속 쓸 수 있습니다. 체험 한도의 크기는 여기서 읽은 출처에 명시되어 있지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: [
          '**내 기기에서 모델을 직접 고를 수 있는 에이전트 앱을 원하고 비공개 소스 소프트웨어를 받아들일 수 있다면 Skales는 살펴볼 만합니다.**',
          '사양상으로는 많은 것을 갖췄습니다. 5개 플랫폼용 설치 파일, 소규모 사업체를 위한 무료 구간, 로컬 데이터 저장, 로컬 모델 선택지, 기본으로 켜진 승인 요청, 그리고 2026년 11월 10일 버전 12.9.65로 이어지는 활발한 릴리스 이력입니다.',
          '단점도 분명합니다. 코드를 감사할 수 없고, Windows 설치 프로그램은 서명되어 있지 않으며, Scout는 베타이고, 제작자 자신의 수치도 서로 다릅니다. PromptQuorum은 이 앱을 테스트하지 않았습니다. 민감하지 않은 폴더에서 시험해 보고, 승인 요청을 켜 두며, 의존하기 전에 어떤 제공업체가 프롬프트를 받는지 확인하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Skales 웹사이트](https://skales.app) — 에이전트, 목표, Studio, Scout, 음성에 대한 제작자의 설명. 2026년 11월 17일 확인.',
          '[다운로드 페이지](https://skales.app/download/) — 운영체제별 설치 파일, 시스템 요구 사항, 첫 실행 안내. 2026년 11월 17일 확인.',
          '[모델 페이지](https://skales.app/models/) — Skales IQ, Skales Local, 제공업체 목록. 2026년 11월 17일 확인.',
          '[모바일 페이지](https://skales.app/mobile/) — Android·iOS 앱, 단독 모드와 페어링 모드. 2026년 11월 17일 확인.',
          '[라이선스 페이지](https://skales.app/licence/) — End User Licence Agreement 1.3. 2026년 11월 17일 확인.',
          '[개인정보 고지](https://skales.app/privacy/) — 관리자, 데이터 경로, Skales IQ, 릴레이. 2026년 11월 17일 확인.',
          '[법적 고지(Imprint)](https://skales.app/imprint/) — 제작 주체, 빈의 개인사업자. 2026년 11월 17일 확인.',
          '[Skales GitHub 저장소](https://github.com/skalesapp/skales) — README, 라이선스 변천, 저장소 생성일, 스타 수. 2026년 11월 17일 확인.',
          '[릴리스 v12.9.65](https://github.com/skalesapp/skales/releases/tag/v12.9.65) — 최신 릴리스, 날짜, 설치 파일. 2026년 11월 17일 확인.',
          '[App Store의 Skales](https://apps.apple.com/us/app/skales/id6763328966) — iOS 페이지. 2026년 11월 17일 확인.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Hermes Agent 리뷰: 로컬 자율 AI 에이전트](/ko/power-local-llm/hermes-agent-review) — 영구 메모리를 갖춘 비교 가능한 개인 에이전트.',
          '[OpenClaw 리뷰](/ko/power-local-llm/openclaw-review) — 에이전트 워크플로 오케스트레이션 프레임워크.',
          '[OpenMausBot 리뷰](/ko/power-local-llm/openmausbot-review) — AI 봇 팀을 운영하는 데스크톱 채팅 앱.',
          '[Open Interpreter 리뷰](/ko/power-local-llm/open-interpreter-review) — 로컬 LLM이 컴퓨터를 제어하고 코드를 실행하게 함.',
          '[로컬 AI 소프트웨어 디렉터리](/ko/directory) — 로컬 AI 도구 전체 카탈로그.',
        ],
      },
    },
  },
}
